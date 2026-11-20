export const id = 28;
export const ids = [28];
export const modules = {
  4945: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => vT,
      h: () => ST,
      l: () => tT,
      m: () => QT
    });
    var lT = cT(71),
      MT = cT(4948),
      KT = cT(4355),
      OT = cT(1379),
      yT = cT(4968),
      fT = cT(1046),
      xT = cT.n(fT),
      IT = cT(1363),
      AT = cT(1741),
      CT = cT(4975),
      jT = cT(1099);

    function vT(TT) {
      let {
        label: kT,
        onClick: cT,
        checked: lT,
        circleInfoText: MT,
        className: yT,
        disabled: fT,
        note: IT
      } = TT;
      return (0, jT.jsxs)("div", {
        "aria-disabled": fT || void 0,
        "data-pad-focusable": !0,
        className: xT()("SettingBox CheckboxContainer", {
          [yT]: yT,
          SettingBoxDisabled: fT
        }),
        onClick: () => {
          fT || cT(!lT)
        },
        children: [(0, jT.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, jT.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, jT.jsx)(KT.d, {
              className: "SettingsCheckbox",
              checked: lT,
              disabled: fT,
              onChange: () => {}
            })
          }), (0, jT.jsxs)("div", {
            className: "CheckboxText",
            children: [kT, MT && (0, jT.jsx)("span", {
              onClick: TT => TT.stopPropagation(),
              children: (0, jT.jsx)(OT.b, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: MT
              })
            })]
          })]
        }), IT && (0, jT.jsx)("div", {
          className: "SettingNote",
          children: IT
        })]
      })
    }

    function tT(TT) {
      let {
        name: kT,
        onChange: cT,
        min: MT,
        max: KT,
        step: yT,
        initValue: fT,
        circleInfoText: IT,
        format: AT,
        className: CT,
        padStep: vT,
        disabled: tT = !1,
        selectableMax: hT,
        cappedNote: QT,
        onChangeComplete: ST
      } = TT;
      const [DT, aT] = (0, lT.useState)(fT), FT = (0, lT.useRef)(fT);
      (0, lT.useEffect)((() => {
        FT.current = fT, aT(fT)
      }), [fT]);
      const rT = void 0 !== hT && hT < KT,
        PT = rT ? {
          "--slider-selectable": (hT - MT) / (KT - MT)
        } : void 0;
      return (0, jT.jsxs)("div", {
        className: xT()("SettingBox SettingsSliderDiv", {
          [CT]: CT,
          SettingBoxDisabled: tT,
          SliderCapped: rT
        }),
        style: PT,
        children: [(0, jT.jsxs)("div", {
          className: "SliderText",
          children: [`${kT}: ${AT?AT(DT):DT}`, IT && (0, jT.jsx)(OT.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: IT
          })]
        }), (0, jT.jsx)("div", {
          className: "SliderDiv",
          children: (0, jT.jsx)(NT, {
            value: DT,
            min: MT,
            max: KT,
            step: yT,
            onChange: TT => {
              if (rT && TT >= hT && DT === hT) return;
              const kT = rT ? Math.min(TT, hT) : TT;
              FT.current = kT, aT(kT), cT(kT)
            },
            onChangeComplete: ST && (() => {
              ST(FT.current)
            }),
            format: AT,
            padStep: vT,
            disabled: tT
          })
        }), rT && QT && (0, jT.jsx)("div", {
          className: "SettingNote",
          children: QT
        })]
      })
    }
    const hT = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function NT(TT) {
      var kT;
      let {
        value: cT,
        min: KT,
        max: OT,
        step: yT,
        onChange: fT,
        orientation: xT,
        reverse: IT,
        setIsChanging: AT,
        tooltip: vT,
        labels: tT,
        handleLabel: NT,
        format: QT,
        onChangeStart: ST,
        onChangeComplete: DT,
        padStep: aT,
        disabled: FT = !1
      } = TT;
      const rT = (0, lT.useRef)(null),
        PT = (0, lT.useRef)(null);
      (0, lT.useLayoutEffect)((() => {
        var TT, kT, cT;
        const lT = null !== (TT = null === (kT = rT.current) || void 0 === kT ? void 0 : kT.querySelector(".rangeslider")) && void 0 !== TT ? TT : null;
        null === lT || void 0 === lT || lT.setAttribute("data-pad-slider", ""), null === lT || void 0 === lT || lT.setAttribute("data-pad-focusable", ""), null === lT || void 0 === lT || null === (cT = lT.querySelector(".rangeslider__handle")) || void 0 === cT || cT.setAttribute("data-pad-slider-handle", ""), PT.current = lT
      }), []), (0, lT.useLayoutEffect)((() => {
        var TT, kT;
        FT ? null === (TT = PT.current) || void 0 === TT || TT.setAttribute("aria-disabled", "true") : null === (kT = PT.current) || void 0 === kT || kT.removeAttribute("aria-disabled")
      }), [FT]);
      const wT = (null !== (kT = String(yT).split(".")[1]) && void 0 !== kT ? kT : "").length,
        mT = TT => {
          const kT = Number((Math.round((TT - KT) / yT) * yT + KT).toFixed(wT));
          return Math.min(OT, Math.max(KT, kT))
        },
        bT = (0, lT.useRef)(DT);
      bT.current = DT, (0, lT.useEffect)((() => {
        const TT = rT.current;
        if (!TT) return;
        const kT = TT => {
          var kT;
          hT.has(TT.key) && (null === (kT = bT.current) || void 0 === kT || kT.call(bT))
        };
        return TT.addEventListener("keyup", kT), () => {
          TT.removeEventListener("keyup", kT)
        }
      }), []);
      const zT = (0, lT.useRef)(!1);
      return (0, CT.d)(PT, {
        adjust: TT => {
          if (FT) return;
          const kT = null !== aT && void 0 !== aT ? aT : Math.max(yT, Math.round((OT - KT) / 20 / yT) * yT),
            lT = mT(cT + TT * kT * (IT ? -1 : 1));
          lT !== cT && (null === ST || void 0 === ST || ST(), fT(lT), null === DT || void 0 === DT || DT())
        },
        setFraction: TT => {
          if (FT) return;
          const kT = mT(KT + (IT ? 1 - TT : TT) * (OT - KT));
          kT !== cT && (zT.current || (zT.current = !0, null === ST || void 0 === ST || ST()), fT(kT))
        },
        endDrag: () => {
          zT.current && (zT.current = !1, null === DT || void 0 === DT || DT())
        }
      }), (0, jT.jsx)("div", {
        ref: rT,
        style: {
          display: "contents"
        },
        children: (0, jT.jsx)(MT.b, {
          value: cT,
          min: KT,
          max: OT,
          step: yT,
          onChange: fT,
          orientation: xT,
          reverse: IT,
          tooltip: vT,
          labels: tT,
          handleLabel: NT,
          format: QT,
          onChangeStart: () => {
            null === ST || void 0 === ST || ST(), null === AT || void 0 === AT || AT(!0)
          },
          onChangeComplete: () => {
            null === AT || void 0 === AT || AT(!1), null === DT || void 0 === DT || DT()
          }
        })
      })
    }
    async function QT() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const kT = IT.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: "",
        unlockPointerKey: TT
      });
      !0 === await kT.getResult() && (0, AT.reloadBloxd)()
    }

    function ST(TT) {
      let {
        label: kT,
        options: cT,
        value: lT,
        onChange: MT,
        circleInfoText: KT
      } = TT;
      return (0, jT.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, jT.jsxs)("div", {
          className: "SliderText",
          children: [kT, KT && (0, jT.jsx)(OT.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: KT
          })]
        }), (0, jT.jsx)(yT.d, {
          ariaLabel: kT,
          options: cT,
          value: lT,
          onChange: MT
        })]
      })
    }
  },
  4968: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => OT
    });
    var lT = cT(1046),
      MT = cT.n(lT),
      KT = cT(1099);

    function OT(TT) {
      let {
        options: kT,
        value: cT,
        onChange: lT,
        ariaLabel: OT,
        className: yT,
        reselectable: fT = !1,
        keepsFocus: xT = !1,
        padTabs: IT
      } = TT;
      const AT = void 0 !== IT;
      return (0, KT.jsx)("div", {
        className: MT()("SegmentedToggle", yT),
        role: "group",
        "aria-label": OT,
        "data-pad-tabs": IT,
        children: kT.map((TT => {
          const kT = TT.value === cT;
          return (0, KT.jsx)("button", {
            type: "button",
            "aria-pressed": kT,
            "data-pad-tab": AT || void 0,
            "data-pad-selected": AT && kT ? "true" : void 0,
            "data-pad-default-focus": AT && kT || void 0,
            "aria-label": TT.ariaLabel,
            title: TT.ariaLabel,
            className: MT()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: kT
            }),
            onMouseDown: xT ? TT => {
              TT.preventDefault()
            } : void 0,
            onClick: () => {
              kT && !fT || lT(TT.value)
            },
            children: TT.label
          }, TT.value)
        }))
      })
    }
  },
  8202: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => MT,
      g: () => KT,
      k: () => CT,
      o: () => AT,
      s: () => xT,
      u: () => yT,
      v: () => lT,
      x: () => jT,
      y: () => vT
    });
    const lT = ["menuConfirm", "menuBack", "menuTabPrevious", "menuTabNext", "menuPageUp", "menuPageDown", "menuSecondary", "menuToggleCursor"],
      MT = [{
        group: "gameplay",
        actions: ["jump", "sneak", "sneakToggle", "sprint", "attack", "use", "hotbarPrevious", "hotbarNext", "inventory", "actionButton", "perspective", "pickBlock", "drop", "emoteWheel", "chat", "pause", "leaderboard"]
      }, {
        group: "menu",
        actions: lT
      }, {
        group: "inventory",
        actions: ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryClose", "inventoryPanelPrevious", "inventoryPanelNext", "inventoryDrop", "inventoryHotbarSwap"]
      }, {
        group: "keyboard",
        actions: ["keyboardType", "keyboardBackspace", "keyboardSpace", "keyboardCaretLeft", "keyboardCaretRight", "keyboardShift", "keyboardSymbols", "keyboardSubmit", "keyboardClose", "keyboardChannel"]
      }],
      KT = {
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
      OT = ["pickBlock", "perspective"],
      yT = TT => OT.includes(TT) ? OT : [TT],
      fT = Object.fromEntries(MT.flatMap((TT => {
        let {
          group: kT,
          actions: cT
        } = TT;
        return cT.map((TT => [TT, kT]))
      }))),
      xT = TT => fT[TT],
      IT = {
        pause: ["menu"],
        leaderboard: ["menu"],
        inventory: ["menu"],
        menuPageUp: ["inventory"],
        menuPageDown: ["inventory"]
      },
      AT = TT => {
        var kT;
        return [xT(TT), ...null !== (kT = IT[TT]) && void 0 !== kT ? kT : []]
      },
      CT = new Set(["menu", "inventory", "keyboard"]),
      jT = {
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
      vT = new Set(["forward", "backward", "left", "right"])
  },
  8199: (TT, kT, cT) => {
    cT.d(kT, {
      A: () => IT,
      E: () => wT,
      F: () => JT,
      e: () => QT,
      g: () => aT,
      j: () => CT,
      k: () => jT,
      l: () => HT,
      n: () => zT,
      q: () => bT,
      s: () => DT,
      t: () => oT,
      v: () => PT,
      w: () => ST,
      z: () => mT
    });
    var lT = cT(8202),
      MT = cT(8206),
      KT = cT(8190),
      OT = cT(8219);
    const yT = TT => "pickBlock" === TT ? "perspective" : TT,
      fT = (TT, kT) => {
        var cT;
        const MT = yT(kT);
        return null !== (cT = TT[MT]) && void 0 !== cT ? cT : lT.g[MT]
      },
      xT = new Map([
        ["menuConfirm", "menuBack"],
        ["inventoryPrimary", "inventoryClose"],
        ["keyboardType", "keyboardClose"]
      ].flatMap((TT => {
        let [kT, cT] = TT;
        return [
          [kT, cT],
          [cT, kT]
        ]
      }))),
      IT = (TT, kT) => null !== TT && void 0 !== TT ? TT : "nintendo" === kT,
      AT = TT => IT((0, MT.g)().swapConfirmBack, (0, MT.j)()) && xT.get(TT) || TT,
      CT = TT => fT((0, MT.g)().bindings, AT(TT)),
      jT = TT => lT.g[AT(TT)],
      vT = Object.keys(lT.g),
      tT = TT => "gameplay" === (0, lT.s)(TT) ? ["gameplay"] : (0, lT.o)(TT),
      hT = (TT, kT) => {
        const cT = tT(kT);
        return tT(TT).some((TT => cT.includes(TT)))
      },
      NT = (TT, kT, cT) => {
        const MT = fT(TT, kT),
          OT = new Set((0, lT.u)(kT)),
          xT = [...OT];
        for (let lT = xT.pop(); lT; lT = xT.pop())
          for (const kT of vT) {
            const KT = fT(TT, kT);
            OT.has(kT) || KT !== cT && KT !== MT || !hT(lT, kT) || (OT.add(kT), xT.push(kT))
          }
        const IT = {
          ...TT
        };
        for (const AT of OT) {
          const kT = fT(TT, AT) === MT ? cT : MT,
            OT = (0, lT.o)(AT).some((TT => lT.k.has(TT)));
          if ((0, KT.I)(kT) && OT) return null;
          IT[yT(AT)] = kT
        }
        for (const KT of Object.keys(IT)) IT[KT] === lT.g[KT] && delete IT[KT];
        return IT
      },
      QT = (TT, kT) => null !== NT((0, MT.g)().bindings, AT(TT), kT),
      ST = (TT, kT) => {
        if (CT(TT) === kT) return !0;
        const cT = NT((0, MT.g)().bindings, AT(TT), kT);
        return !!cT && ((0, MT.n)({
          bindings: cT
        }), !0)
      },
      DT = (TT, kT) => {
        const cT = (0, lT.u)(kT);
        return vT.filter((kT => yT(kT) === kT && !cT.includes(kT) && fT(TT, AT(kT)) !== CT(kT)))
      },
      aT = ["southpaw", "triggersSwapped"],
      FT = {
        southpaw: {
          sprint: "RS",
          sneakToggle: "LS"
        },
        triggersSwapped: {
          attack: "LT",
          use: "RT"
        }
      },
      rT = TT => Object.keys(FT[TT]),
      PT = (TT, kT) => "southpaw" === TT ? kT.swapSticks : rT(TT).every((cT => fT(kT.bindings, cT) === FT[TT][cT])),
      wT = (TT, kT) => {
        const cT = (0, MT.g)();
        let KT = cT.bindings;
        for (const MT of rT(TT)) {
          const cT = kT ? FT[TT][MT] : lT.g[MT];
          if (KT = NT(KT, MT, cT), !KT) return !1
        }
        return (0, MT.n)({
          swapSticks: "southpaw" === TT ? kT : cT.swapSticks,
          bindings: KT
        }), !0
      },
      mT = () => {
        (0, MT.n)({
          swapSticks: !1,
          bindings: {}
        })
      },
      bT = () => (0, MT.g)().swapSticks ? "RightStick" : "LeftStick",
      zT = () => (0, MT.g)().swapSticks ? "LeftStick" : "RightStick",
      JT = TT => (0, MT.g)().swapSticks && (0, KT.I)(TT),
      oT = TT => JT(TT) ? bT() : zT(),
      HT = TT => {
        if (lT.y.has(TT)) return bT();
        const kT = lT.x[TT];
        return kT && ("leaderboard" !== kT || (0, OT.f)(TT, (0, OT.d)())) ? CT(kT) : null
      }
  },
  8180: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      ControllerCategory: () => Sy,
      ControllerGlyph: () => FM,
      ControllerRoot: () => SO,
      PadLobbyShortcuts: () => EO,
      PadSneakChip: () => mO,
      PadTooltip: () => zO,
      attachPressToContinue: () => UO,
      getBoundButton: () => IT.j,
      getControllerSettings: () => CT.g,
      getGlyphForNoaAction: () => IT.l,
      getInventoryCursorState: () => ay,
      getMenuShortcutButton: () => Uc,
      getPadGlyphIconName: () => rO,
      getPadGlyphIconUrl: () => PO,
      getPadRepeatTiming: () => tT.g,
      handOverPadFocus: () => ry,
      hasActivePad: () => Dy,
      isPadSteppingSlots: () => Fy
    });
    const lT = JSON.parse('{"controller":{"inventoryTake":"Take","inventoryTakeHalf":"Take half","inventoryPlace":"Place","inventoryPlaceOne":"Place one","inventoryQuickMove":"Quick move","inventoryToHotbar":"To hotbar","inventoryPutBack":"Put back","inventoryHotbarSwap":"Swap with hotbar","inventorySwapHere":"Swap here","inventoryCancel":"Cancel","inventoryClose":"Close","inventoryDrop":"Drop (hold: stack)","inventorySelect":"Select","inventoryCraft":"Craft (hold to repeat)","inventoryCraftAll":"Craft all","inventoryChooseRecipe":"Choose","inventoryBackToRecipes":"Back to recipes","inventoryType":"Type","inventoryPanels":"Switch panel","inventoryCategory":"Category","inventoryPage":"Page","disconnected":"Controller disconnected","gameplayReload":"Reload","gameplayActionWheelHint":"(hold for more)","gameplaySneaking":"Sneaking","gameplayLoadFailedTitle":"Controller unavailable","gameplayLoadFailedSubtitle":"Reload the page to play with your controller.","gameplayDropStack":"Keep holding to drop the stack","gameplayAttackLatched":"Attacking","gameplayPickBlock":"Pick block","padButtonView":"View","padButtonMenu":"Menu","padButtonHome":"Home","padButtonCreate":"Create","padButtonOptions":"Options","padButtonDpadUp":"D-pad \u2191","padButtonDpadDown":"D-pad \u2193","padButtonDpadLeft":"D-pad \u2190","padButtonDpadRight":"D-pad \u2192","padButtonLeftStick":"L Stick","padButtonRightStick":"R Stick","settingsLook":"Look","settingsLookSensitivityX":"Look sensitivity (horizontal)","settingsLookSensitivityY":"Look sensitivity (vertical)","settingsAimLookSensitivity":"Look sensitivity while aiming (use held)","settingsInvertLookX":"Invert horizontal look","settingsInvertLookY":"Invert vertical look","settingsLookCurve":"Look curve","settingsLookCurveHint":"Steep gives finer aim near the centre, Linear turns at an even rate, and Boost turns faster when you hold the stick all the way.","settingsCurveExponential":"Steep","settingsCurveLinear":"Linear","settingsCurveBoost":"Boost","settingsLookDeadzone":"Look deadzone","settingsGyro":"Gyro aiming","settingsGyroToggle":"Aim by moving the controller","settingsGyroToggleInfo":"Turn and tilt the controller to aim, on top of the right stick.","settingsGyroTogglePhone":"Aim by moving your phone or tablet","settingsGyroToggleInfoPhone":"Turn and tilt your phone or tablet to aim, on top of the right stick.","settingsGyroUnsupported":"Gyro aiming needs Chrome or Edge.","settingsGyroBlocked":"Gyro aiming isn\'t available on this site.","settingsGyroPhoneNeedsController":"Connect a controller to aim by moving your phone or tablet.","settingsGyroSteamHint":"If Steam already turns your gyro into mouse movement, leave this off.","settingsGyroConnect":"Connect motion controller","settingsGyroConnectHint":"Works with DualSense, DualShock 4 and Switch controllers.","settingsGyroConnectNeedsClick":"Click Connect with your mouse: the browser asks before sharing a controller.","settingsGyroOpenFailed":"Another app is using the controller. Close apps such as Steam or DS4Windows, then try again.","settingsGyroConnected":"Aiming with {{name}}.","settingsGyroAllowMotion":"Allow motion sensor","settingsGyroAllowNeedsTap":"Tap Allow motion sensor on your screen to turn it on.","settingsGyroPhoneOn":"Aiming with this device\'s motion sensor.","settingsGyroPhoneWaiting":"Waiting for this device\'s motion sensor\u2026","settingsGyroPhoneNoSensor":"No motion sensor found on this device.","settingsGyroPhoneDenied":"Motion access is blocked. Allow it in your browser settings.","settingsGyroSensitivity":"Gyro sensitivity","settingsGyroActivation":"Gyro turns on","settingsGyroAlways":"Always","settingsGyroWhileAiming":"While aiming","settingsGyroWhileButton":"While holding a button","settingsGyroAimingHint":"Hold {{button}} to aim with motion.","settingsGyroButton":"Gyro button","settingsGyroButtonHint":"While gyro aiming is on, this button only turns the gyro on in game, so pick one you rarely use.","settingsMovement":"Movement","settingsMoveDeadzone":"Move deadzone","settingsAutoSprint":"Sprint at full tilt","settingsAutoSprintInfo":"Push the movement stick all the way to sprint.","settingsSneak":"Sneak","settingsSneakHold":"Hold","settingsSneakToggle":"Toggle","settingsButtons":"Buttons","settingsPromptFamily":"Button prompts","settingsPromptAuto":"Match my controller","settingsPromptXbox":"Xbox","settingsPromptPlayStation":"PlayStation","settingsPromptNintendo":"Nintendo","settingsPromptSteamDeck":"Steam Deck","settingsPromptGeneric":"Generic","settingsHideButtonHints":"Hide button hints","settingsVibration":"Vibration","settingsCursorSpeed":"Virtual cursor speed","settingsCursorMagnetism":"Cursor snaps onto buttons","settingsMenuBackToCategories":"Back returns to the category list first","settingsAccessibility":"Accessibility","settingsSwapConfirmBack":"Swap confirm and back","settingsSwapToast":"Select and Back have swapped buttons.","settingsLayoutRefusedToast":"This layout doesn\'t fit your current buttons. Reset them to use it.","settingsSwapConfirmBackInfo":"Select with the right face button and go back with the bottom one, in menus, the inventory and the on-screen keyboard. On by default for Nintendo controllers.","settingsButtonRepeat":"Button repeat","settingsButtonRepeatHint":"How a held button repeats in menus, sliders, the on-screen keyboard and crafting. Off acts once per press, and holding drop in game drops just one item.","settingsButtonRepeatDefault":"Default","settingsButtonRepeatSlow":"Slow (0.8 s, then 4 a second)","settingsButtonRepeatOff":"Off (once per press)","settingsTapHoldTime":"Tap/hold time","settingsTapHoldTimeHint":"How long to hold the chat, emote or action button to open its wheel, or the view button to change view where a tap picks a block. Dropping a whole stack takes 0.8, 1 or 1.3 s.","settingsTapHoldShort":"Short (0.25 s)","settingsTapHoldMedium":"Medium (0.5 s)","settingsTapHoldLong":"Long (0.8 s)","settingsEmoteButton":"Emote button","settingsEmoteButtonTapHoldHint":"Tap to repeat your last emote, or hold to open the emote wheel.","settingsEmoteButtonWheelHint":"Any press opens the emote wheel, with no hold to time. Pick with the stick, then select.","settingsEmoteButtonTapHold":"Tap repeats, hold opens wheel","settingsEmoteButtonWheel":"Opens the wheel","settingsAttackMode":"Attack / mine","settingsAttackHoldHint":"Hold attack to keep attacking or mining.","settingsAttackToggleHint":"Press attack once to keep attacking or mining, and again to stop.","settingsAttackHold":"Hold","settingsAttackToggle":"Toggle","settingsLargePointer":"Large pointer and focus","settingsLargePointerInfo":"A bigger menu cursor, thicker selection brackets and bigger button hints.","settingsRemap":"Remap buttons","settingsRemapHint":"Select an action, then press a button. If that button is taken, the two swap.","settingsLayoutSouthpaw":"Southpaw (move with the right stick)","settingsLayoutTriggersSwapped":"Triggers swapped (attack with the left trigger)","settingsCapturePrompt":"Press a button","settingsCaptureCancelHint":"Press {{button}} to cancel","settingsCaptureCancelOrBindHint":"Tap {{button}} to cancel, or hold it to choose it","settingsReset":"Reset","settingsSwapNotice":"{{action}} moved to {{button}}","settingsResetAll":"Reset all buttons and sticks","settingsGroupGameplay":"Movement & gameplay","settingsGroupMenus":"Menus","settingsGroupInventory":"Inventory","settingsGroupKeyboard":"On-screen keyboard","settingsActionMove":"Move","settingsActionLook":"Look around","settingsActionJump":"Jump","settingsActionSneak":"Sneak","settingsActionSneakToggle":"Toggle sneak","settingsActionSprint":"Sprint","settingsActionAttack":"Attack / mine","settingsActionUse":"Use / place","settingsActionHotbarPrevious":"Previous hotbar slot","settingsActionHotbarNext":"Next hotbar slot","settingsActionInventory":"Inventory","settingsActionActionButton":"Game action","settingsActionPerspective":"Change view","settingsActionPickBlock":"Pick block (creative)","settingsActionDrop":"Drop item","settingsActionEmoteWheel":"Emotes","settingsActionChat":"Chat","settingsActionPause":"Pause menu","settingsActionLeaderboard":"Shop / leaderboard","settingsActionMenuConfirm":"Select","settingsActionMenuBack":"Back","settingsActionMenuTabPrevious":"Previous tab","settingsActionMenuTabNext":"Next tab","settingsActionMenuPageUp":"Page up","settingsActionMenuPageDown":"Page down","settingsActionMenuSecondary":"Secondary action","settingsActionMenuToggleCursor":"Switch to virtual cursor","settingsActionInventoryPrimary":"Pick up / place","settingsActionInventorySecondary":"Pick up half / place one","settingsActionInventoryQuickMove":"Quick move","settingsActionInventoryHotbarSwap":"Swap with hotbar slot","settingsActionInventoryClose":"Close","settingsActionInventoryPanelPrevious":"Previous panel","settingsActionInventoryPanelNext":"Next panel","settingsActionInventoryDrop":"Drop item","settingsActionKeyboardType":"Type key","settingsActionKeyboardBackspace":"Backspace","settingsActionKeyboardSpace":"Space","settingsActionKeyboardCaretLeft":"Move cursor left","settingsActionKeyboardCaretRight":"Move cursor right","settingsActionKeyboardShift":"Shift","settingsActionKeyboardSymbols":"Accents and symbols","settingsActionKeyboardSubmit":"Send","settingsActionKeyboardClose":"Close keyboard","settingsActionKeyboardChannel":"Chat channel","settingsAlternatives":"Try alternatives","settingsAlternativesHint":"Try each way of playing and keep the one that feels best.","settingsMenuNavigation":"Menu navigation","settingsMenuNavigationHint":"Steer a cursor with the stick and jump between buttons with the D-pad, or use just one.","settingsNavHybrid":"Cursor and D-pad","settingsMenuNavFocus":"Jump between buttons","settingsVirtualCursor":"Virtual cursor","settingsInventoryNavigation":"Inventory","settingsInventoryNavigationHint":"Steer a cursor with the stick and step slot by slot with the D-pad, or use just one.","settingsInventoryNavSlot":"Slot by slot","settingsQuickChat":"Hold chat button","settingsQuickChatHint":"Hold the chat button to pick a quick phrase. Tapping it still opens chat.","settingsQuickChatWheel":"Quick chat wheel","settingsQuickChatOff":"Off","settingsLeaderboardButton":"Shop / leaderboard button","settingsLeaderboardButtonHint":"Open the shop in one press in games that have one. The lobby leaderboard is still in the pause menu.","settingsLeaderboardButtonShop":"Shop, in games with one","settingsLeaderboardButtonLeaderboard":"Always the leaderboard","settingsTester":"Gamepad tester","settingsTesterNoPad":"Connect a gamepad and press any button to test it.","settingsTesterFamily":"Detected: {{family}}","settingsTesterHint":"Start a test to try every button and stick without moving through the menu.","settingsTesterStart":"Start test","settingsTesterStop":"Stop test","settingsTesterTesting":"Press anything to see it light up. To stop, hold {{button}} or press it three times.","settingsControlsNote":"Playing with a gamepad? Change its buttons and feel in Gamepad settings.","settingsOpenController":"Gamepad settings","keyboardSpace":"Space","keyboardSend":"Send","keyboardDone":"Done","keyboardTargetChat":"Chat","keyboardTargetSign":"Sign","keyboardTargetNameTag":"Name tag","keyboardTargetBook":"Book page","keyboardTargetBookTitle":"Book title","keyboardTargetText":"Text","keyboardPhraseGg":"gg","keyboardPhraseHi":"hi","keyboardPhraseThanks":"thanks","keyboardPhraseGl":"gl","keyboardPhraseBrb":"brb","keyboardPhraseYes":"yes","keyboardPhraseNo":"no","keyboardPhraseHelp":"help!","quickChatPick":"Pick a phrase","actionWheelPick":"Pick an action","wheelReleaseToPick":"Release to pick","wheelClose":"Close","wheelChoose":"Choose","menusSelect":"Select","menusBack":"Back","menusClose":"Close","menusQuickChat":"Quick chat (hold)","menusSkipTutorial":"Skip tutorial","menusTabs":"Tabs","menusRows":"Rows","menusCursorMode":"Cursor","menusFocusMode":"Focus","menusClick":"Click","menusRightClick":"Right-click","menusScroll":"Scroll","menusFriends":"Friends","menusSearch":"Search","menusSettings":"Settings","menusLeaveGameTitle":"Leave the game?","menusLeaveGameLeave":"Leave","menusLeaveGameStay":"Stay","menusNotifications":"Notifications","menusLobby":"Lobby","menusShop":"Shop","menusTasks":"Tasks & leaderboards","menusInvite":"Invite friends","menusAdjust":"Adjust","menusFavourite":"Favourite","screensPressToContinue":"Press {{button}} to continue","screensPressToEnterGame":"Press {{button}} to enter game","screensEnterGame":"Enter game","screensBackToGames":"Back to games","tutorialMine":"Mine","tutorialPlace":"Place / Use","tutorialInventory":"Inventory","tutorialPause":"Pause","menusUseMouse":"Use a mouse or touch here"}}');
    var MT = cT(1195),
      KT = cT(1420),
      OT = cT(8188),
      yT = cT(94),
      fT = cT(31),
      xT = cT(36),
      IT = cT(8199),
      AT = cT(8227),
      CT = cT(8206),
      jT = cT(8229),
      vT = cT(8190),
      tT = cT(8680),
      hT = cT(8685),
      NT = cT(1685);
    const QT = (TT, kT, cT) => Math.max(kT, Math.min(cT, TT)),
      ST = TT => Math.min(TT.width, TT.height) / 720,
      DT = TT => Math.max(.15, TT);
    class aT {
      constructor() {
        this.locked = !1
      }
      lock() {
        this.locked = !0
      }
      update(TT, kT) {
        const cT = Math.hypot(TT.x, TT.y) >= (TT => Math.max(.3, TT))(kT);
        return this.locked ? (this.locked = cT, !1) : cT
      }
    }
    const FT = (TT, kT) => {
        const cT = QT(kT.dtMs, 0, 100),
          lT = cT / 1e3,
          MT = ST(kT.viewport) * (kT.cursorSpeedPercent / 100),
          KT = (0, vT.m)(kT.stick, DT(kT.moveDeadzone)),
          OT = Math.hypot(KT.x, KT.y),
          yT = ((TT, kT, cT) => {
            if (kT < .3) return 0;
            const lT = cT / 350;
            return kT >= .85 ? Math.min(1, TT + lT) : Math.max(0, TT - lT)
          })(TT.speedRamp, OT, cT);
        let fT = TT.x,
          xT = TT.y;
        if (OT > 0) {
          const TT = .45 + .55 * yT,
            cT = kT.context.overInteractive ? .45 : 1,
            IT = 1400 * (TT => {
              const kT = QT(TT, 0, 1);
              return .3 * kT + .7 * kT * kT
            })(OT) * MT * TT * cT;
          fT += KT.x / OT * IT * lT, xT += KT.y / OT * IT * lT
        }
        const IT = Math.hypot(kT.dpad.x, kT.dpad.y);
        if (IT > 0) {
          const TT = 500 * MT;
          fT += kT.dpad.x / IT * TT * lT, xT += kT.dpad.y / IT * TT * lT
        }
        const AT = kT.context.magnetTarget;
        if (AT && OT < .3 && 0 === IT) {
          const TT = ((TT, kT, cT, lT, MT) => {
            const KT = kT.x - TT.x,
              OT = kT.y - TT.y,
              yT = Math.hypot(KT, OT);
            if (0 === yT) return {
              x: 0,
              y: 0
            };
            const fT = Math.min(yT, MT * (1 - lT / .3));
            let xT = KT / yT * fT,
              IT = OT / yT * fT;
            if (lT > 0) {
              const TT = cT.x / lT,
                kT = cT.y / lT,
                MT = xT * TT + IT * kT;
              MT < 0 && (xT -= MT * TT, IT -= MT * kT)
            }
            return {
              x: xT,
              y: IT
            }
          })({
            x: fT,
            y: xT
          }, AT, KT, OT, 120 * ST(kT.viewport) * lT);
          fT += TT.x, xT += TT.y
        }
        return {
          x: QT(fT, 0, Math.max(0, kT.viewport.width - 1)),
          y: QT(xT, 0, Math.max(0, kT.viewport.height - 1)),
          speedRamp: yT
        }
      },
      rT = TT => {
        const kT = (0, vT.m)(TT, .2);
        return 0 !== kT.x || 0 !== kT.y
      },
      PT = (TT, kT) => {
        const cT = (0, vT.m)(TT, .2),
          lT = Math.hypot(cT.x, cT.y);
        if (0 === lT) return {
          x: 0,
          y: 0
        };
        const MT = lT * lT * 1600,
          KT = QT(kT, 0, 100) / 1e3;
        return {
          x: cT.x / lT * MT * KT,
          y: cT.y / lT * MT * KT
        }
      },
      wT = (TT, kT) => "y" === kT ? TT.scrollHeight > TT.clientHeight + 1 : TT.scrollWidth > TT.clientWidth + 1,
      mT = (TT, kT) => {
        if (!wT(TT, kT)) return !1;
        const cT = getComputedStyle(TT),
          lT = "y" === kT ? cT.overflowY : cT.overflowX;
        return "auto" === lT || "scroll" === lT
      },
      bT = (TT, kT, cT) => {
        for (let KT = TT instanceof HTMLElement ? TT : null !== (lT = null === TT || void 0 === TT ? void 0 : TT.parentElement) && void 0 !== lT ? lT : null; KT; KT = KT.parentElement) {
          var lT;
          if (mT(KT, kT)) return KT;
          if (KT === cT) return null
        }
        if (cT) return null;
        const MT = document.scrollingElement;
        return MT instanceof HTMLElement && wT(MT, kT) ? MT : null
      },
      zT = new WeakMap,
      JT = (TT, kT) => {
        const cT = performance.now(),
          lT = zT.get(TT);
        if (lT && lT.axis === kT && cT - lT.atMs < 500 && (!lT.container || lT.container.isConnected)) return lT.container;
        const MT = oT(TT, kT);
        return zT.set(TT, {
          axis: kT,
          atMs: cT,
          container: MT
        }), MT
      },
      oT = (TT, kT) => {
        let cT = mT(TT, kT) ? TT : null,
          lT = cT ? cT.clientWidth * cT.clientHeight : 0;
        for (const MT of TT.querySelectorAll("*")) {
          const TT = MT.clientWidth * MT.clientHeight;
          TT > lT && mT(MT, kT) && (cT = MT, lT = TT)
        }
        return cT
      },
      HT = (TT, kT, cT) => "y" === kT ? cT < 0 ? TT.scrollTop > 0 : TT.scrollTop + TT.clientHeight < TT.scrollHeight - 1 : cT < 0 ? TT.scrollLeft > 0 : TT.scrollLeft + TT.clientWidth < TT.scrollWidth - 1,
      eT = (TT, kT, cT) => {
        "y" === kT ? TT.scrollBy({
          top: cT,
          behavior: "instant"
        }) : TT.scrollBy({
          left: cT,
          behavior: "instant"
        })
      },
      GT = TT => {
        if (!TT || TT === document.scrollingElement) return new DOMRect(0, 0, window.innerWidth, window.innerHeight);
        const kT = TT.getBoundingClientRect(),
          cT = Math.max(0, kT.left),
          lT = Math.max(0, kT.top);
        return new DOMRect(cT, lT, Math.min(window.innerWidth, kT.right) - cT, Math.min(window.innerHeight, kT.bottom) - lT)
      },
      VT = (TT, kT) => TT.left < kT.right && kT.left < TT.right && TT.top < kT.bottom && kT.top < TT.bottom;
    var ET = cT(71),
      ZT = cT(1046),
      uT = cT.n(ZT),
      XT = cT(1099);
    let dT = 0,
      LT = !1;
    class RT {
      constructor() {
        this.element = null, this.shownKey = "", this.gap = null
      }
      setElement(TT) {
        this.element = TT, this.shownKey = "", this.gap = null
      }
      show(TT) {
        const kT = this.element;
        if (!kT) return;
        const cT = TT ? this.keepOnScreen(kT, TT) : null,
          lT = cT ? `${cT.left},${cT.top},${cT.width},${cT.height}` : "";
        if (lT === this.shownKey) return;
        const MT = "" === this.shownKey;
        this.shownKey = lT, kT.classList.toggle("Visible", null !== cT), cT && (kT.classList.toggle("Snap", MT), kT.style.width = `${cT.width}px`, kT.style.height = `${cT.height}px`, kT.style.transform = `translate(${cT.left}px, ${cT.top}px)`, MT && (kT.offsetWidth, kT.classList.remove("Snap")))
      }
      hide() {
        this.show(null)
      }
      keepOnScreen(TT, kT) {
        var cT;
        const lT = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!LT){LT=!0;const TT=document.createElement("div");TT.setAttribute("aria-hidden","true"),TT.style.cssText="position: fixed; top: 0; left: 0; width: 1rem; height: 0; visibility: hidden; pointer-events: none",document.body.appendChild(TT),new ResizeObserver((()=>{dT++})).observe(TT)}return String(dT)})()}`;
        (null === (cT = this.gap) || void 0 === cT ? void 0 : cT.key) !== lT && (this.gap = {
          px: parseFloat(getComputedStyle(TT).paddingLeft) || 0,
          key: lT
        });
        const MT = this.gap.px + 2,
          KT = Math.max(kT.left, MT),
          OT = Math.max(kT.top, MT),
          yT = Math.min(kT.left + kT.width, window.innerWidth - MT),
          fT = Math.min(kT.top + kT.height, window.innerHeight - MT);
        return yT <= KT || fT <= OT ? kT : {
          left: KT,
          top: OT,
          width: yT - KT,
          height: fT - OT
        }
      }
    }
    const gT = TT => {
      let {
        placer: kT,
        className: cT
      } = TT;
      const lT = (0, ET.useCallback)((TT => {
        kT.setElement(TT)
      }), [kT]);
      return (0, XT.jsx)("div", {
        ref: lT,
        className: uT()("PadReticle", cT),
        "aria-hidden": !0
      })
    };
    var UT = cT(8688);
    const YT = {
      x: 0,
      y: 0,
      visible: !1,
      pressed: !1
    };
    const BT = new class {
      constructor() {
        this.state = YT, this.listeners = new Set
      }
      get() {
        return this.state
      }
      set(TT) {
        if (kT = this.state, cT = TT, (kT.visible || cT.visible) && (kT.visible !== cT.visible || kT.x !== cT.x || kT.y !== cT.y || kT.pressed !== cT.pressed)) {
          var kT, cT;
          this.state = TT;
          for (const kT of this.listeners) kT(TT)
        }
      }
      hide() {
        this.set(YT)
      }
      subscribe(TT) {
        return this.listeners.add(TT), () => {
          this.listeners.delete(TT)
        }
      }
    };
    var WT = cT(8700);
    const nT = (TT, kT) => {
        let {
          kind: cT,
          holding: lT,
          hasPress: MT,
          hasBack: KT,
          slotHasItem: OT
        } = kT;
        switch (TT) {
          case "primary":
            return "slot" === cT ? "slotPrimary" : "recipe" === cT || "button" === cT ? MT ? "pressPrimary" : "click" : "textField" === cT ? "openKeyboard" : null;
          case "secondary":
            return "slot" === cT ? "slotSecondary" : "button" !== cT && "recipe" !== cT || !MT ? null : "pressSecondary";
          case "quickMove":
            return "slot" === cT && OT ? "slotQuickMove" : null;
          case "hotbarSwap":
            return "slot" === cT && OT && !lT ? "hotbarPick" : null;
          case "openButton":
            return "close";
          case "back":
            return lT ? "cancel" : KT ? "pressBack" : "close"
        }
      },
      pT = TT => {
        const kT = [];
        if (TT.hotbarPicking) return kT.push({
          actions: ["inventoryPrimary", "inventoryHotbarSwap"],
          labelKey: "inventorySwapHere"
        }), kT.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryCancel"
        }), kT;
        if (TT.holding) "slot" === TT.kind ? (kT.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryPlace"
        }), kT.push({
          actions: ["inventorySecondary"],
          labelKey: "inventoryPlaceOne"
        })) : "textField" === TT.kind && kT.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryType"
        }), kT.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryPutBack"
        }), kT.push({
          actions: ["inventoryDrop"],
          labelKey: "inventoryDrop"
        }), TT.openButtonCloses && kT.push({
          actions: ["inventory"],
          labelKey: "inventoryClose"
        });
        else {
          var cT;
          "slot" === TT.kind && TT.slotHasItem ? (kT.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryTake"
          }), kT.push({
            actions: ["inventorySecondary"],
            labelKey: "inventoryTakeHalf"
          }), kT.push({
            actions: ["inventoryQuickMove"],
            labelKey: TT.quickMoveToHotbar ? "inventoryToHotbar" : "inventoryQuickMove"
          }), kT.push({
            actions: ["inventoryHotbarSwap"],
            labelKey: "inventoryHotbarSwap"
          }), kT.push({
            actions: ["inventoryDrop"],
            labelKey: "inventoryDrop"
          })) : "button" !== TT.kind && "recipe" !== TT.kind || !TT.pressHints ? "button" === TT.kind || "recipe" === TT.kind ? kT.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventorySelect"
          }) : "textField" === TT.kind && kT.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryType"
          }) : (TT.pressHints.primary && kT.push({
            actions: ["inventoryPrimary"],
            labelKey: TT.pressHints.primary
          }), TT.pressHints.secondary && kT.push({
            actions: ["inventorySecondary"],
            labelKey: TT.pressHints.secondary
          }));
          const lT = null === (cT = TT.pressHints) || void 0 === cT ? void 0 : cT.back;
          lT && kT.push({
            actions: ["inventoryClose"],
            labelKey: lT
          });
          const MT = [];
          TT.openButtonCloses && MT.push("inventory"), lT || MT.push("inventoryClose"), MT.length > 0 && kT.push({
            actions: MT,
            labelKey: "inventoryClose"
          })
        }
        return kT.push({
          actions: ["inventoryPanelPrevious", "inventoryPanelNext"],
          labelKey: "inventoryPanels"
        }), TT.hasCategories ? kT.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryCategory"
        }) : TT.hasList && kT.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryPage"
        }), kT
      };
    var iT = cT(8716),
      qT = cT(8707);
    class sT {
      constructor(TT) {
        this.probes = TT, this.byContainer = new Map, this.byParent = new Map
      }
      find(TT, kT) {
        const cT = bT(TT, "y", kT);
        if (!cT) return null;
        let lT = this.byContainer.get(cT);
        return lT || (this.probes.push({
          element: cT,
          rect: lk(cT.getBoundingClientRect())
        }), lT = {
          container: cT,
          box: GT(cT),
          group: ck(cT)
        }, this.byContainer.set(cT, lT)), lT
      }
      findForParent(TT, kT) {
        let cT = this.byParent.get(TT);
        return void 0 === cT && (cT = this.find(TT, kT), this.byParent.set(TT, cT)), cT
      }
    }
    const Tk = new WeakMap;
    let kk = 0;
    const ck = TT => {
        let kT = Tk.get(TT);
        return kT || (kT = "el:" + kk++, Tk.set(TT, kT)), kT
      },
      lk = TT => ({
        left: TT.left,
        top: TT.top,
        width: TT.width,
        height: TT.height
      }),
      Mk = TT => TT.width > 0 && TT.height > 0,
      Kk = (TT, kT) => Mk(TT) && TT.left + TT.width > 0 && TT.top + TT.height > 0 && TT.left < kT.width && TT.top < kT.height,
      Ok = (TT, kT, cT) => {
        const lT = TT.top + TT.height / 2;
        return Kk(TT, kT) && (!cT || lT >= cT.top && lT <= cT.bottom)
      },
      yk = TT => ({
        x: TT.left + TT.width / 2,
        y: TT.top + TT.height / 2
      }),
      fk = (TT, kT, cT) => TT < 0 ? cT >= 0 ? 0 : kT - 1 : ((TT + cT) % kT + kT) % kT,
      xk = TT => "Left" === TT || "Right" === TT,
      Ik = (TT, kT, cT) => {
        const lT = xk(cT),
          MT = lT ? TT.top : TT.left,
          KT = lT ? TT.height : TT.width,
          OT = lT ? kT.top : kT.left,
          yT = lT ? kT.height : kT.width,
          fT = Math.max(0, Math.max(OT - (MT + KT), MT - (OT + yT)));
        return KT > 1.5 * yT ? {
          gap: fT,
          offset: Math.max(0, OT - MT) + .1 * Math.max(0, MT - OT)
        } : {
          gap: fT,
          offset: Math.abs(OT + yT / 2 - (MT + KT / 2))
        }
      },
      Ak = (TT, kT, cT) => {
        const lT = ((TT, kT, cT) => {
          const lT = yk(TT),
            MT = yk(kT),
            KT = xk(cT) ? Math.min(TT.width, kT.width) / 4 : Math.min(TT.height, kT.height) / 4;
          switch (cT) {
            case "Right":
              return MT.x - lT.x >= KT ? Math.max(0, kT.left - (TT.left + TT.width)) : null;
            case "Left":
              return lT.x - MT.x >= KT ? Math.max(0, TT.left - (kT.left + kT.width)) : null;
            case "Down":
              return MT.y - lT.y >= KT ? Math.max(0, kT.top - (TT.top + TT.height)) : null;
            case "Up":
              return lT.y - MT.y >= KT ? Math.max(0, TT.top - (kT.top + kT.height)) : null
          }
        })(TT, kT, cT);
        if (null === lT) return null;
        const MT = Ik(TT, kT, cT);
        return lT + 3 * MT.gap + .5 * MT.offset
      },
      Ck = (TT, kT) => kT.visible || null !== kT.scrollGroup && kT.scrollGroup === TT.scrollGroup,
      jk = (TT, kT, cT, lT) => {
        let MT = null,
          KT = 1 / 0;
        for (const OT of kT) {
          if (OT.key === TT.key || !Ck(TT, OT) || !lT(OT)) continue;
          const kT = Ak(TT.rect, OT.rect, cT);
          null !== kT && kT < KT && (MT = OT, KT = kT)
        }
        return MT
      },
      vk = (TT, kT, cT) => {
        const lT = jk(TT, kT, cT, (() => !0));
        if (!lT || xk(cT) || null === TT.scrollGroup || lT.scrollGroup === TT.scrollGroup) return lT;
        const MT = jk(TT, kT, cT, (kT => 0 === Ik(TT.rect, kT.rect, cT).gap));
        return null !== MT && void 0 !== MT ? MT : lT
      },
      tk = (TT, kT, cT) => {
        let lT = null,
          MT = 1 / 0;
        for (const KT of kT) {
          if (!KT.visible || cT && !cT(KT)) continue;
          const kT = yk(KT.rect),
            OT = Math.hypot(kT.x - TT.x, kT.y - TT.y);
          OT < MT && (lT = KT, MT = OT)
        }
        return lT
      },
      hk = TT => {
        const {
          rect: kT,
          clip: cT
        } = TT;
        if (!cT) return kT;
        const lT = Math.max(kT.left, cT.left),
          MT = Math.max(kT.top, cT.top);
        return {
          left: lT,
          top: MT,
          width: Math.min(kT.left + kT.width, cT.left + cT.width) - lT,
          height: Math.min(kT.top + kT.height, cT.top + cT.height) - MT
        }
      },
      Nk = (TT, kT) => kT.x >= TT.left && kT.x < TT.left + TT.width && kT.y >= TT.top && kT.y < TT.top + TT.height,
      Qk = (TT, kT) => {
        let cT = null,
          lT = 1 / 0;
        for (const MT of kT) {
          const kT = hk(MT);
          (MT.visible || MT.clip) && Nk(kT, TT) && (kT.width * kT.height < lT && (cT = MT, lT = kT.width * kT.height))
        }
        return cT
      },
      Sk = TT => {
        let kT = null;
        for (const cT of TT) {
          if (!cT.visible) continue;
          if (!kT) {
            kT = cT;
            continue
          }
          const TT = Math.min(kT.rect.height, cT.rect.height) / 2,
            lT = cT.rect.top - kT.rect.top;
          (lT < -TT || Math.abs(lT) <= TT && cT.rect.left < kT.rect.left) && (kT = cT)
        }
        return kT
      },
      Dk = (TT, kT, cT, lT, MT) => {
        const KT = MT % kT,
          OT = Math.floor(MT / kT);
        return {
          left: TT.left + KT * cT,
          top: TT.top + OT * lT,
          width: TT.width,
          height: TT.height
        }
      },
      ak = ".EntireInventoryWrapper .Inventory, .HotBarGameItemsContainer",
      Fk = ".LazyLoadedItemWrapper",
      rk = ["[data-inven-idx]", "[data-recipe-key]", "[role=button]", "button", "input:not([type=hidden])", "textarea", ".CreativeCategoryTab", ".CreativeCategoryDropdownButton", ".CreativeCategoryDropdownOption", "[data-craft-ingredient]"].join(","),
      Pk = [
        ["hotbar", ".HotBarGameItemsContainer"],
        ["gameButtons", ".ClientGameInventoryButtons"],
        ["categories", ".CreativeCategoryRail"],
        ["recipe", ".CraftableInfo"],
        ["armour", ".ArmourItemSlots"],
        ["main", ".InvenBodyRight"],
        ["left", ".InvenLeftSide"]
      ],
      wk = ["gameButtons", "categories", "left", "recipe", "armour", "main", "hotbar"],
      mk = TT => TT.hasAttribute("data-inven-idx") ? "slot" : TT.hasAttribute("data-recipe-key") ? "recipe" : TT.hasAttribute("data-craft-ingredient") || (0, qT.n)(TT) ? "info" : (0, UT.I)(TT) ? "textField" : "button",
      bk = (TT, kT) => "slot" === kT ? Number(TT.getAttribute("data-inven-idx")) : null,
      zk = TT => TT.matches(Fk) ? TT.querySelector(rk) : TT,
      Jk = TT => {
        var kT, cT;
        return {
          element: TT,
          recipe: null !== (kT = TT && (null === (cT = zk(TT)) || void 0 === cT ? void 0 : cT.getAttribute("data-recipe-key"))) && void 0 !== kT ? kT : null
        }
      },
      Hk = TT => {
        const kT = zk(TT);
        if (!kT) return {
          kind: "pending",
          idx: null
        };
        const cT = mk(kT);
        return {
          kind: cT,
          idx: bk(kT, cT)
        }
      },
      ek = TT => {
        const kT = [];
        for (const [cT, lT] of Pk) {
          TT.matches(lT) && kT.push([cT, TT]);
          for (const MT of TT.querySelectorAll(lT)) kT.push([cT, MT])
        }
        return kT
      },
      Gk = (TT, kT) => {
        for (const [cT, lT] of TT)
          if (lT.contains(kT)) return cT;
        return "other"
      },
      Vk = (TT, kT, cT, lT, MT, KT, OT, yT) => {
        var fT;
        const xT = TT.children,
          IT = lk(xT[0].getBoundingClientRect()),
          AT = [{
            element: xT[0],
            rect: IT
          }];
        if (KT.push(AT[0]), 0 === IT.width || 0 === IT.height) return;
        let CT = 1;
        for (; CT < xT.length && Math.abs(xT[CT].getBoundingClientRect().top - IT.top) < 1;) CT++;
        const jT = TT => {
            const kT = {
              element: xT[TT],
              rect: lk(xT[TT].getBoundingClientRect())
            };
            return KT.push(kT), AT.push(kT), kT.rect
          },
          vT = CT > 1 ? jT(1).left - IT.left : IT.width,
          tT = xT.length > CT ? jT(CT).top - IT.top : IT.height,
          hT = OT.find(TT, kT);
        let NT = null;
        if (hT) {
          var QT;
          const {
            container: TT,
            box: kT
          } = hT;
          NT = null !== (QT = yT.get(TT)) && void 0 !== QT ? QT : null, NT || (NT = {
            top: TT.scrollTop,
            left: TT.scrollLeft,
            box: kT,
            viewport: lT,
            targets: [],
            probes: [],
            holdsOthers: !1
          }, yT.set(TT, NT)), NT.probes.push(...AT)
        }
        const ST = MT.length;
        for (let rT = 0; rT < xT.length; rT++) {
          var DT, aT, FT;
          const TT = xT[rT],
            kT = Dk(IT, CT, vT, tT, rT),
            KT = TT.firstElementChild ? TT.querySelector(rk) : null,
            OT = KT ? mk(KT) : "pending";
          MT.push({
            key: ck(TT),
            rect: kT,
            panel: cT,
            scrollGroup: null !== (DT = null === hT || void 0 === hT ? void 0 : hT.group) && void 0 !== DT ? DT : null,
            visible: Ok(kT, lT, null === hT || void 0 === hT ? void 0 : hT.box),
            clip: null !== (aT = null === hT || void 0 === hT ? void 0 : hT.box) && void 0 !== aT ? aT : null,
            element: TT,
            kind: OT,
            idx: KT ? bk(KT, OT) : null,
            scrollContainer: null !== (FT = null === hT || void 0 === hT ? void 0 : hT.container) && void 0 !== FT ? FT : null
          })
        }
        null === (fT = NT) || void 0 === fT || fT.targets.push(...MT.slice(ST))
      },
      Ek = TT => TT instanceof Element && null !== TT.closest(Fk),
      Zk = TT => null !== TT.scrollContainer && Ek(TT.element);
    class uk {
      constructor() {
        this.latched = null, this.presses = 0
      }
      press(TT, kT, cT, lT) {
        this.latched = {
          source: TT,
          focusKey: kT,
          sinceMs: cT,
          hold: {
            id: ++this.presses,
            holdMs: lT
          }
        }
      }
      update(TT, kT, cT) {
        const lT = this.latched;
        return lT ? TT && kT === lT.focusKey ? cT - lT.sinceMs < lT.hold.holdMs ? null : (this.latched = null, lT.source) : (this.latched = null, null) : null
      }
      getHold() {
        var TT, kT;
        return null !== (TT = null === (kT = this.latched) || void 0 === kT ? void 0 : kT.hold) && void 0 !== TT ? TT : null
      }
      reset() {
        this.latched = null
      }
    }
    var Xk = cT(8719);
    const dk = {
        kind: "none"
      },
      Lk = TT => ({
        x: TT.clientX,
        y: TT.clientY
      }),
      Rk = () => 2 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
    class gk {
      constructor() {
        this.hovered = dk, this.signature = "", this.holding = !1, this.lastPoint = {
          clientX: 0,
          clientY: 0
        }
      }
      sync(TT, kT, cT, lT, MT) {
        const KT = null !== kT ? {
            kind: "slot",
            idx: kT
          } : cT ? {
            kind: "element",
            element: cT
          } : dk,
          OT = `${MT}|${Math.round(lT.clientX)},${Math.round(lT.clientY)}`,
          yT = (fT = this.hovered, xT = KT, "slot" === fT.kind && "slot" === xT.kind ? fT.idx === xT.idx : "element" === fT.kind && "element" === xT.kind ? fT.element === xT.element : fT.kind === xT.kind);
        var fT, xT;
        if (yT && OT === this.signature) return;
        const IT = !yT || MT !== this.holding || "" === this.signature;
        this.signature = OT, this.holding = MT, this.lastPoint = lT;
        const AT = this.hovered;
        if (this.hovered = KT, "slot" === KT.kind) return this.leaveElement(AT, null, lT), void(IT ? TT.hover(KT.idx, lT) : TT.moveTo(lT));
        if (yT) return void("element" === KT.kind ? (0, UT.k)(KT.element, KT.element, Lk(lT)) : TT.hover(null, lT));
        TT.hover(null, lT);
        const CT = "element" === KT.kind ? KT.element : null;
        "element" === AT.kind ? (0, UT.k)(AT.element, CT, Lk(lT)) : CT && (0, UT.k)(null, CT, Lk(lT))
      }
      invalidate() {
        this.signature = ""
      }
      clear(TT) {
        const kT = this.hovered;
        this.hovered = dk, this.signature = "", "none" !== kT.kind && (this.leaveElement(kT, null, this.lastPoint), TT && "slot" === kT.kind && TT.hover(null, this.lastPoint))
      }
      leaveElement(TT, kT, cT) {
        "element" === TT.kind && (0, UT.k)(TT.element, kT, Lk(cT))
      }
    }
    class Uk {
      constructor() {
        this.lastTiltedMs = -1 / 0
      }
      update(TT, kT) {
        rT(TT) && (this.lastTiltedMs = kT)
      }
      allowsClick(TT) {
        return TT - this.lastTiltedMs > 150
      }
    }
    class Yk {
      constructor() {
        this.remainder = 0, this.container = null
      }
      isScrolling(TT) {
        return 0 !== (0, vT.m)(TT, .2).y
      }
      step(TT, kT, cT) {
        TT !== this.container && (this.container = TT, this.remainder = 0);
        const lT = PT(kT, cT).y;
        if (0 === lT) return this.remainder = 0, !1;
        const MT = this.remainder + lT,
          KT = Math.trunc(MT);
        if (this.remainder = MT - KT, 0 === KT) return !1;
        const OT = TT.scrollTop;
        return TT.scrollTop = OT + KT, TT.scrollTop !== OT
      }
      current() {
        var TT;
        return null !== (TT = this.container) && void 0 !== TT && TT.isConnected ? this.container : null
      }
      reset() {
        this.remainder = 0, this.container = null
      }
    }
    var Bk = cT(8725);
    const Wk = "[data-pad-inventory-default]",
      nk = ".HotBarGameItemsContainer .InvenItem.Selected",
      pk = {
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
      ik = [
        ["primary", "inventoryPrimary"],
        ["secondary", "inventorySecondary"],
        ["quickMove", "inventoryQuickMove"],
        ["hotbarSwap", "inventoryHotbarSwap"],
        ["back", "inventoryClose"],
        ["openButton", "inventory"]
      ],
      qk = ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryHotbarSwap", "inventoryClose", "inventoryDrop"],
      sk = ["inventoryPanelPrevious", "inventoryPanelNext", "menuPageUp", "menuPageDown"],
      Tc = [...qk, ...sk],
      kc = () => {
        return TT = (0, IT.j)("inventory"), !Tc.map(IT.j).includes(TT) && !(0, vT.I)(TT);
        var TT
      },
      cc = new Set(["slotPrimary", "slotSecondary", "slotQuickMove", "pressPrimary", "pressSecondary", "openKeyboard"]),
      lc = (TT, kT) => {
        const cT = !(null === kT || void 0 === kT || !kT.isHolding());
        return function(TT, kT) {
          const cT = TT.find((TT => TT.visible && kT(TT)));
          if (cT) return cT;
          for (var lT = arguments.length, MT = new Array(lT > 2 ? lT - 2 : 0), KT = 2; KT < lT; KT++) MT[KT - 2] = arguments[KT];
          for (const OT of MT) {
            const kT = Sk(TT.filter(OT));
            if (kT) return kT
          }
          return Sk(TT)
        }(TT, (TT => {
          const {
            element: kT
          } = TT;
          return kT.matches(Wk) || null !== kT.querySelector(Wk) || kT.matches(nk)
        }), (TT => "slot" === TT.kind ? cT || null !== TT.idx && !(null === kT || void 0 === kT || !kT.hasItemAt(TT.idx)) : "recipe" === TT.kind || "pending" === TT.kind), (TT => "slot" === TT.kind || "button" === TT.kind))
      };
    class Mc {
      constructor() {
        this.set = null, this.observer = new MutationObserver((TT => {
          TT.some((TT => !Ek(TT.target))) && (this.set = null)
        })), this.invalidate = () => {
          this.set = null
        }, this.onScroll = TT => {
          this.scrolled(TT.target)
        }
      }
      get() {
        if (!this.set) {
          this.set = (() => {
            const TT = [],
              kT = [];
            let cT = !1;
            const lT = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              MT = new Map,
              KT = new sT(kT);
            for (const AT of document.querySelectorAll(ak)) {
              const IT = ek(AT);
              cT ||= null !== AT.querySelector(".CreativeCategoryTab");
              for (const cT of AT.querySelectorAll(`${Fk}:first-child`)) {
                const OT = cT.parentElement;
                Vk(OT, AT, Gk(IT, OT), lT, TT, kT, KT, MT)
              }
              for (const cT of AT.querySelectorAll(rk)) {
                var OT, yT, fT, xT;
                if (cT.closest(Fk) || cT.closest("[data-pad-ignore]")) continue;
                const CT = null === (OT = cT.parentElement) || void 0 === OT ? void 0 : OT.closest(rk);
                if (CT && AT.contains(CT)) continue;
                const jT = mk(cT),
                  vT = bk(cT, jT);
                if (-1 === vT) continue;
                const tT = lk(cT.getBoundingClientRect());
                kT.push({
                  element: cT,
                  rect: tT
                });
                const hT = KT.findForParent(cT.parentElement, AT),
                  NT = hT && !MT.has(hT.container) ? hT : null;
                (NT ? Mk(tT) : Kk(tT, lT)) && TT.push({
                  key: ck(cT),
                  rect: tT,
                  panel: Gk(IT, cT),
                  scrollGroup: null !== (yT = null === NT || void 0 === NT ? void 0 : NT.group) && void 0 !== yT ? yT : null,
                  visible: Ok(tT, lT, null === NT || void 0 === NT ? void 0 : NT.box),
                  clip: null !== (fT = null === NT || void 0 === NT ? void 0 : NT.box) && void 0 !== fT ? fT : null,
                  element: cT,
                  kind: jT,
                  idx: vT,
                  scrollContainer: null !== (xT = null === NT || void 0 === NT ? void 0 : NT.container) && void 0 !== xT ? xT : null
                })
              }
            }
            for (const [AT, CT] of MT) CT.holdsOthers = kT.some((TT => TT.element !== AT && AT.contains(TT.element) && !TT.element.closest(Fk)));
            const IT = new Map;
            for (const AT of TT) IT.set(AT.element, AT);
            return {
              targets: TT,
              byElement: IT,
              hasCategories: cT,
              probes: kT,
              scrollers: MT
            }
          })(), this.observer.disconnect();
          for (const TT of document.querySelectorAll(ak)) this.observer.observe(TT, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "disabled", "aria-disabled", "tabindex", "data-inven-idx"]
          })
        }
        return this.set
      }
      scrolled(TT) {
        !this.set || TT instanceof Element && ((TT, kT) => {
          const cT = TT.scrollers.get(kT);
          if (!cT || cT.holdsOthers || kT.scrollLeft !== cT.left) return !1;
          const lT = kT.scrollTop - cT.top;
          if (0 === lT) return !0;
          cT.top = kT.scrollTop;
          for (const MT of cT.probes) MT.rect.top -= lT;
          for (const MT of cT.targets) MT.rect.top -= lT, MT.visible = Ok(MT.rect, cT.viewport, cT.box);
          return !0
        })(this.set, TT) || (this.set = null)
      }
      revalidate() {
        this.set && this.set.probes.some((TT => {
          return kT = TT.rect, cT = TT.element.getBoundingClientRect(), !(kT.left === cT.left && kT.top === cT.top && kT.width === cT.width && kT.height === cT.height);
          var kT, cT
        })) && (this.set = null)
      }
      disconnect() {
        this.observer.disconnect(), this.set = null
      }
    }
    const Kc = new class {
        constructor() {
          this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(vT.D.map((TT => [TT, (0, tT.e)(vT.E)]))), this.stickRepeat = new vT.c((0, tT.e)(vT.hb)), this.pageUpTimer = (0, tT.e)(vT.cb), this.pageDownTimer = (0, tT.e)(vT.cb), this.stickGate = new aT, this.pointer = null, this.activePress = null, this.dropLatch = new uk, this.scroller = new Yk, this.scrollStickClick = new Uk, this.hover = new gk, this.lastRealPointer = null, this.placeAfterCategory = null, this.hotbarPick = null, this.ring = new RT, this.targets = new Mc, this.hasCategories = !1, this.wasShowing = !1, this.state = Xk.e, this.isActive = () => (0, iT.h)(), this.isShowing = () => "inventory" === AT.d.getActiveConsumerName() && (0, jT.i)(), this.getState = () => this.state, this.isSteppingSlots = () => this.isShowing() && null === this.pointer, this.onDeactivate = () => {
            this.endInteraction((0, iT.f)()), (0, iT.h)() || this.forgetSurface()
          }, this.forgetSurface = () => {
            var TT;
            this.reopenSlotIdx = null !== (TT = this.focused ? Hk(this.focused).idx : null) && void 0 !== TT ? TT : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, iT.s)(), this.panelMemory.clear(), this.targets.disconnect()
          }, this.onFrame = TT => {
            (0, yT.unstable_batchedUpdates)((() => {
              this.frame(TT)
            }))
          }, this.shouldBlockRealPointer = TT => TT.isTrusted && !(0, NT.s)(TT) && this.isShowing(), this.noteRealPointer = TT => {
            TT instanceof MouseEvent && TT.isTrusted && !(0, NT.s)(TT) && (this.lastRealPointer ??= {
              x: 0,
              y: 0
            }, this.lastRealPointer.x = TT.clientX, this.lastRealPointer.y = TT.clientY)
          }, this.wakePressActs = TT => {
            var kT;
            return TT === (0, IT.j)("inventoryClose") ? !(null !== (kT = (0, iT.f)()) && void 0 !== kT && kT.isHolding()) : !(TT !== (0, IT.j)("inventory") || !kc()) || ((0, vT.I)(TT) ? this.isNavButton(TT) : sk.some((kT => (0, IT.j)(kT) === TT)))
          }
        }
        frame(TT) {
          var kT, cT, lT, MT, KT;
          const OT = (0, iT.f)();
          if (!(0, jT.i)()) return void(this.wasShowing && (this.endInteraction(OT), this.rehoverRealPointer()));
          this.wasShowing = !0, this.applyFocusRequest(), TT.wokeDevice && this.focusWakePointer(!(null === OT || void 0 === OT || !OT.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, CT.g)().inventoryNavigation || this.pointer || this.engagePointer();
          const yT = performance.now();
          this.handleNavigation(TT, yT), this.handlePanels(TT), this.handlePaging(TT, yT), this.handleScroll(TT), this.handleButtons(TT, yT, OT), this.applyFocusRequest(), this.pointer && this.hoverAtPointer();
          const fT = this.ensureFocus(),
            xT = this.focusContext(OT);
          this.ring.show(fT);
          const AT = "slot" === xT.kind ? xT.idx : null,
            vT = null !== (kT = null === (cT = xT.actionElement) || void 0 === cT ? void 0 : cT.querySelector(".DoCraftItem")) && void 0 !== kT ? kT : xT.actionElement;
          this.pointer ? (this.hover.sync(OT, AT, vT, ((TT, kT) => {
            const cT = kT ? Rk() : 0;
            return {
              clientX: TT.x - cT,
              clientY: TT.y - cT
            }
          })(this.pointer, xT.holding), xT.holding), BT.set({
            x: this.pointer.x,
            y: this.pointer.y,
            visible: !0,
            pressed: TT.isHeld((0, IT.j)("inventoryPrimary"))
          })) : fT && this.focused && this.hover.sync(OT, AT, vT, ((TT, kT) => {
            if (!kT) return {
              clientX: TT.left + TT.width - 10,
              clientY: TT.top + TT.height / 2 - 10
            };
            const cT = Rk();
            return {
              clientX: TT.left + TT.width / 2 - cT,
              clientY: TT.top + TT.height / 2 - cT
            }
          })(fT, xT.holding), xT.holding), this.publishState({
            showing: !0,
            kind: xT.kind,
            holding: xT.holding,
            slotHasItem: xT.slotHasItem,
            pressHints: null !== (lT = null === (MT = xT.press) || void 0 === MT ? void 0 : MT.hints) && void 0 !== lT ? lT : null,
            hasCategories: this.hasCategories,
            hasList: !!this.focusTarget && Zk(this.focusTarget),
            openButtonCloses: kc(),
            steppingSlots: null === this.pointer,
            quickMoveToHotbar: "slot" === xT.kind && !(null === (KT = xT.actionElement) || void 0 === KT || !KT.closest(".CreativeItemSlots")),
            dropStackHold: this.dropLatch.getHold(),
            hotbarPicking: null !== this.hotbarPick
          })
        }
        focusWakePointer(TT) {
          var kT;
          const cT = (0, jT.b)();
          if (!cT) return;
          this.targets.revalidate();
          const lT = this.getTargets().targets;
          this.setFocus(null !== (kT = Qk(cT, lT)) && void 0 !== kT ? kT : TT ? tk(cT, lT, (TT => {
            let {
              rect: kT
            } = TT;
            const lT = Math.max(kT.left - cT.x, 0, cT.x - (kT.left + kT.width)),
              MT = Math.max(kT.top - cT.y, 0, cT.y - (kT.top + kT.height));
            return Math.hypot(lT, MT) <= Math.min(kT.width, kT.height) / 2
          })) : null, !1), "cursor" === (0, CT.g)().inventoryNavigation && (this.pointer = {
            x: cT.x,
            y: cT.y,
            speedRamp: 0
          })
        }
        rehoverRealPointer() {
          const TT = this.lastRealPointer;
          if (!TT || "keyboardMouse" !== fT.e.get("activeInputDevice")) return;
          const kT = document.elementFromPoint(TT.x, TT.y);
          kT && (0, UT.k)(null, kT, TT)
        }
        endInteraction(TT) {
          this.wasShowing = !1, this.hotbarPick = null, this.releasePress(), this.dropLatch.reset(), this.scroller.reset();
          for (const kT of this.dpadTimers.values()) kT.reset();
          this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(TT), this.ring.hide(), this.releasePointer(), this.publishState(Xk.e)
        }
        getTargets() {
          const TT = this.targets.get();
          return this.hasCategories = TT.hasCategories, TT
        }
        currentTarget() {
          var TT;
          return this.focused && null !== (TT = this.getTargets().byElement.get(this.focused)) && void 0 !== TT ? TT : null
        }
        readFocusRect() {
          const TT = this.focused;
          if (null === TT || void 0 === TT || !TT.isConnected || !TT.closest(ak)) return null;
          const kT = TT.getBoundingClientRect();
          return kT.width > 0 && kT.height > 0 ? {
            left: kT.left,
            top: kT.top,
            width: kT.width,
            height: kT.height
          } : null
        }
        ensureFocus() {
          const TT = this.readFocusRect();
          if (TT || this.pointer) return TT;
          const {
            targets: kT,
            byElement: cT
          } = this.getTargets();
          let lT = null,
            MT = !1;
          if (this.lastRect) lT = tk(yk(this.lastRect), kT);
          else {
            var KT, OT;
            const TT = ((TT, kT) => {
                const cT = document.querySelector(".EntireInventoryWrapper [data-pad-inventory-start]");
                return cT ? lc(TT.filter((TT => cT.contains(TT.element))), kT) : null
              })(kT, (0, iT.f)()),
              yT = kT.find((TT => null !== TT.idx && TT.idx === this.reopenSlotIdx)),
              fT = document.querySelector(nk);
            MT = null !== TT || void 0 !== yT, lT = null !== (KT = null !== (OT = null !== TT && void 0 !== TT ? TT : yT) && void 0 !== OT ? OT : fT && cT.get(fT)) && void 0 !== KT ? KT : Sk(kT)
          }
          return this.setFocus(lT, MT), this.lastRect
        }
        setFocus(TT) {
          let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          TT && (this.focused = TT.element, this.focusTarget = TT, this.panelMemory.set(TT.panel, TT.element), kT && TT.scrollContainer && ((TT, kT) => {
            const cT = TT.getBoundingClientRect(),
              lT = GT(kT),
              MT = kT.scrollTop;
            return cT.top < lT.top ? kT.scrollTop -= lT.top - cT.top : cT.bottom > lT.bottom && (kT.scrollTop += cT.bottom - lT.bottom), kT.scrollTop !== MT
          })(TT.element, TT.scrollContainer) && this.targets.invalidate(), this.lastRect = this.readFocusRect(), this.followFocusJump())
        }
        followFocusJump() {
          if (this.pointer)
            if ("cursor" === (0, CT.g)().inventoryNavigation) {
              if (this.lastRect) {
                const TT = yk(this.lastRect);
                this.pointer = {
                  x: TT.x,
                  y: TT.y,
                  speedRamp: 0
                }
              }
            } else this.releasePointer()
        }
        engagePointer() {
          const TT = this.lastRect ? yk(this.lastRect) : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          };
          this.pointer = {
            x: TT.x,
            y: TT.y,
            speedRamp: 0
          }
        }
        releasePointer() {
          this.pointer = null, BT.hide()
        }
        hoverAtPointer() {
          var TT;
          const kT = Qk(this.pointer, this.getTargets().targets);
          this.focusTarget = kT, (null === kT || void 0 === kT ? void 0 : kT.element) !== this.focused && (this.focused = null !== (TT = null === kT || void 0 === kT ? void 0 : kT.element) && void 0 !== TT ? TT : null, kT && (this.panelMemory.set(kT.panel, kT.element), this.lastRect = this.readFocusRect()))
        }
        moveCursor(TT, kT) {
          const cT = this.focusTarget,
            lT = cT && (0, CT.g)().cursorMagnetism ? yk(hk(cT)) : null;
          this.pointer = FT(this.pointer, {
            stick: TT.leftStick,
            moveDeadzone: (0, CT.g)().moveDeadzone,
            dpad: kT,
            dtMs: TT.dtMs,
            cursorSpeedPercent: (0, CT.g)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: {
              overInteractive: !1,
              magnetTarget: lT
            }
          })
        }
        move(TT) {
          this.targets.revalidate();
          const kT = this.currentTarget();
          kT && this.setFocus(vk(kT, this.getTargets().targets, TT))
        }
        step(TT) {
          const kT = this.pointer;
          if (kT && (this.releasePointer(), !this.focused)) return this.targets.revalidate(), void this.setFocus(((TT, kT, cT) => {
            var lT;
            const MT = {
              key: "",
              rect: {
                left: TT.x,
                top: TT.y,
                width: 0,
                height: 0
              },
              panel: "",
              scrollGroup: null,
              visible: !0,
              clip: null
            };
            return null !== (lT = vk(MT, kT, cT)) && void 0 !== lT ? lT : tk(TT, kT)
          })(kT, this.getTargets().targets, TT));
          this.move(TT)
        }
        isNavButton(TT) {
          return !qk.some((kT => (0, IT.j)(kT) === TT)) && !(TT === (0, IT.j)("inventory") && kc())
        }
        handleNavigation(TT, kT) {
          const cT = (0, CT.g)().inventoryNavigation,
            lT = {
              x: 0,
              y: 0
            };
          let MT = null;
          for (const fT of vT.D) {
            const KT = this.isNavButton(fT) && TT.isHeld(fT);
            KT && (lT.x += pk[fT].x, lT.y += pk[fT].y), this.dpadTimers.get(fT).update(KT, kT) && "cursor" !== cT && (MT ??= fT)
          }
          const KT = this.stickGate.update(TT.leftStick, (0, CT.g)().moveDeadzone);
          if (MT && (this.step(MT), this.stickGate.lock()), "slot" !== cT) {
            const kT = ((TT, kT, cT, lT) => "hybrid" !== TT ? "cursor" === TT : !lT && (kT || cT))(cT, null !== this.pointer, KT, null !== MT);
            return kT && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(TT, "cursor" === cT ? lT : {
              x: 0,
              y: 0
            }))
          }
          const OT = (0, vT.m)(TT.leftStick, (0, CT.g)().moveDeadzone),
            yT = this.stickRepeat.update(KT ? (0, vT.jb)(OT) : null, kT);
          yT && this.move(yT)
        }
        applyCategoryPlace() {
          const TT = this.placeAfterCategory;
          if (!TT) return;
          this.placeAfterCategory = null, this.targets.invalidate();
          const kT = tk(yk(TT.rect), this.getTargets().targets, (kT => kT.scrollGroup === TT.scrollGroup));
          this.setFocus(kT, !1)
        }
        applyFocusRequest() {
          const TT = (0, iT.s)();
          TT && (this.targets.invalidate(), this.setFocus((0, iT.c)(this.getTargets().targets, TT)))
        }
        handlePanels(TT) {
          var kT, cT, lT;
          const MT = TT.wasPressed((0, IT.j)("inventoryPanelPrevious")),
            KT = TT.wasPressed((0, IT.j)("inventoryPanelNext"));
          if (!MT && !KT) return;
          const {
            targets: OT
          } = this.getTargets(), yT = (fT = ((TT, kT) => {
            const cT = [];
            for (const MT of TT) MT.visible && !cT.includes(MT.panel) && cT.push(MT.panel);
            const lT = TT => {
              const lT = kT.indexOf(TT);
              return -1 === lT ? kT.length + cT.indexOf(TT) : lT
            };
            return cT.sort(((TT, kT) => lT(TT) - lT(kT)))
          })(OT, wk), xT = null !== (kT = null === (cT = this.focusTarget) || void 0 === cT ? void 0 : cT.panel) && void 0 !== kT ? kT : null, AT = KT ? 1 : -1, 0 === fT.length ? null : fT[fk(null === xT ? -1 : fT.indexOf(xT), fT.length, AT)]);
          var fT, xT, AT;
          if (null === yT) return;
          const CT = this.panelMemory.get(yT),
            jT = OT.filter((TT => TT.panel === yT)),
            vT = null !== (lT = jT.find((TT => TT.element === CT && TT.visible))) && void 0 !== lT ? lT : lc(jT, (0, iT.f)());
          this.setFocus(vT)
        }
        handlePaging(TT, kT) {
          const cT = (0, IT.j)("menuPageUp"),
            lT = (0, IT.j)("menuPageDown"),
            MT = this.pageUpTimer.update(TT.isHeld(cT), kT),
            KT = this.pageDownTimer.update(TT.isHeld(lT), kT);
          if (!MT && !KT) return;
          const OT = KT ? 1 : -1;
          if (!TT.wasPressed(KT ? lT : cT) && this.hasCategories) return;
          if ((TT => {
              const kT = Array.from(document.querySelectorAll(".EntireInventoryWrapper .CreativeCategoryTab"));
              if (0 === kT.length) return !1;
              const cT = kT.findIndex((TT => TT.classList.contains("Selected"))),
                lT = kT[fk(cT, kT.length, TT)];
              return (0, UT.j)(lT, (0, UT.w)(lT)), !0
            })(OT)) {
            var yT, fT;
            this.targets.invalidate();
            const TT = null !== (yT = null === (fT = this.focusTarget) || void 0 === fT ? void 0 : fT.scrollGroup) && void 0 !== yT ? yT : null,
              kT = this.readFocusRect();
            return void(this.placeAfterCategory = null !== TT && kT && !this.pointer ? {
              rect: kT,
              scrollGroup: TT
            } : null)
          }
          const {
            targets: xT
          } = this.getTargets(), AT = this.currentTarget(), CT = AT && Zk(AT) ? AT : xT.find((TT => Zk(TT) && TT.visible));
          if (!CT) return;
          const jT = ((TT, kT, cT, lT) => {
            if (null === TT.scrollGroup) return null;
            const MT = yk(TT.rect),
              KT = MT.x,
              OT = MT.y + ("Down" === cT ? lT : -lT);
            let yT = null,
              fT = 1 / 0;
            for (const xT of kT) {
              if (xT.scrollGroup !== TT.scrollGroup || xT.key === TT.key) continue;
              const kT = yk(xT.rect);
              if ("Down" === cT ? kT.y <= MT.y : kT.y >= MT.y) continue;
              const lT = Math.hypot(kT.x - KT, kT.y - OT);
              lT < fT && (yT = xT, fT = lT)
            }
            return yT
          })(CT, xT, OT > 0 ? "Down" : "Up", CT.scrollContainer.clientHeight);
          this.setFocus(null !== jT && void 0 !== jT ? jT : CT)
        }
        handleScroll(TT) {
          var kT, cT, lT, MT, KT, OT;
          if (!this.scroller.isScrolling(TT.rightStick)) return void this.scroller.reset();
          const {
            targets: yT
          } = this.getTargets(), fT = this.pointer, xT = !fT && this.focusTarget && Zk(this.focusTarget) ? this.focusTarget.scrollContainer : null, IT = fT && (null === (kT = yT.find((TT => TT.clip && Nk(TT.clip, fT)))) || void 0 === kT ? void 0 : kT.scrollContainer), AT = null !== (cT = null !== (lT = null !== (MT = this.scroller.current()) && void 0 !== MT ? MT : IT) && void 0 !== lT ? lT : xT) && void 0 !== cT ? cT : null === (KT = yT.find(Zk)) || void 0 === KT ? void 0 : KT.scrollContainer;
          if (!AT || !this.scroller.step(AT, TT.rightStick, TT.dtMs)) return;
          this.targets.scrolled(AT);
          const CT = fT || (null === (OT = this.focusTarget) || void 0 === OT ? void 0 : OT.scrollContainer) !== AT ? null : this.readFocusRect();
          if (!CT) return;
          const jT = GT(AT),
            vT = yk(CT);
          if (vT.y < jT.top || vT.y > jT.bottom) {
            const TT = this.focusTarget.scrollGroup,
              kT = tk(vT, this.getTargets().targets, (kT => kT.scrollGroup === TT));
            this.setFocus(kT, !1)
          }
        }
        focusContext(TT) {
          const {
            kind: kT,
            idx: cT
          } = this.focused ? Hk(this.focused) : {
            kind: null,
            idx: null
          }, lT = this.focused ? zk(this.focused) : null, MT = lT ? (0, Bk.c)(lT) : null;
          return {
            kind: kT,
            idx: cT,
            actionElement: lT,
            press: MT,
            hasPress: null !== MT,
            hasBack: !(null === MT || void 0 === MT || !MT.back),
            holding: TT.isHolding(),
            slotHasItem: null !== cT && TT.hasItemAt(cT)
          }
        }
        handleButtons(TT, kT, cT) {
          var lT, MT;
          if (!this.activePress || TT.isHeld(this.activePress.button) && (lT = this.activePress.target, MT = this.focused, null !== lT.recipe ? Jk(MT).recipe === lT.recipe : MT === lT.element) || this.releasePress(), this.scrollStickClick.update(TT.rightStick, kT), !this.handleHotbarPick(TT, cT)) {
            for (const [lT, MT] of ik) {
              const KT = (0, IT.j)(MT);
              if (!TT.wasPressed(KT) || "openButton" === lT && !kc()) continue;
              if ("RS" === KT && !this.scrollStickClick.allowsClick(kT)) continue;
              const OT = this.focusContext(cT),
                yT = nT(lT, OT);
              yT && this.runIntent(yT, OT, KT, cT)
            }
            this.handleDrop(TT, kT, cT)
          }
        }
        handleHotbarPick(TT, kT) {
          const cT = this.hotbarPick;
          if (!cT) return !1;
          const lT = TT.wasPressed((0, IT.j)("inventoryPrimary")) || TT.wasPressed((0, IT.j)("inventoryHotbarSwap"));
          if (!lT && !TT.wasPressed((0, IT.j)("inventoryClose")) && !kT.isHolding()) return !(TT.wasPressed((0, IT.j)("inventory")) && kc());
          const MT = this.focusTarget;
          lT && "hotbar" === (null === MT || void 0 === MT ? void 0 : MT.panel) && null !== MT.idx && MT.idx !== cT.idx && (kT.swapWithHotbar(MT.idx, cT.idx), this.afterAction()), this.hotbarPick = null;
          const KT = cT.element.isConnected ? this.getTargets().byElement.get(cT.element) : void 0;
          return KT && this.setFocus(KT), !0
        }
        startHotbarPick(TT) {
          var kT;
          const {
            targets: cT,
            byElement: lT
          } = this.getTargets(), MT = document.querySelector(nk), KT = null !== (kT = MT && lT.get(MT)) && void 0 !== kT ? kT : cT.find((TT => "hotbar" === TT.panel));
          KT && this.focused && (this.hotbarPick = {
            idx: TT,
            element: this.focused
          }, this.setFocus(KT))
        }
        focusKey() {
          return this.focused ? ck(this.focused) : null
        }
        handleDrop(TT, kT, cT) {
          const lT = (0, IT.j)("inventoryDrop");
          if (TT.wasPressed(lT)) {
            const TT = (MT = this.focusContext(cT)).holding ? {
              kind: "ty"
            } : "slot" === MT.kind && MT.slotHasItem && null !== MT.idx ? {
              kind: "slot",
              idx: MT.idx
            } : null;
            return void(TT && (this.dropFrom(TT, !1, cT), this.dropLatch.press(TT, this.focusKey(), kT, hT.c[(0, CT.g)().tapHoldTime].dropStackMs), this.afterAction()))
          }
          var MT;
          const KT = this.dropLatch.update(TT.isHeld(lT), this.focusKey(), kT);
          KT && ((TT, kT, cT) => "ty" === TT.kind ? kT : !kT && cT(TT.idx))(KT, cT.isHolding(), cT.hasItemAt) && (this.dropFrom(KT, !0, cT), this.afterAction())
        }
        dropFrom(TT, kT, cT) {
          "ty" === TT.kind ? cT.dropHeld(kT, this.slotPoint()) : cT.dropSlot(TT.idx, kT)
        }
        slotPoint() {
          return this.pointer ? {
            clientX: this.pointer.x,
            clientY: this.pointer.y
          } : this.lastRect ? (TT => {
            const kT = yk(TT);
            return {
              clientX: kT.x,
              clientY: kT.y
            }
          })(this.lastRect) : {
            clientX: 0,
            clientY: 0
          }
        }
        runIntent(TT, kT, cT, lT) {
          const MT = kT.idx,
            KT = kT.actionElement;
          switch (KT && cc.has(TT) && (0, NT.z)(KT), TT) {
            case "slotPrimary":
              lT.primary(MT, this.slotPoint());
              break;
            case "slotSecondary":
              lT.secondary(MT, this.slotPoint());
              break;
            case "slotQuickMove":
              lT.quickMove(MT, this.slotPoint());
              break;
            case "hotbarPick":
              this.startHotbarPick(MT);
              break;
            case "pressPrimary":
            case "pressSecondary":
              this.startPress(kT.press, "pressPrimary" === TT ? "primary" : "secondary", cT);
              break;
            case "click":
              (0, UT.j)(KT, (0, UT.w)(KT));
              break;
            case "openKeyboard":
              (0, UT.I)(KT) && (0, UT.G)(KT);
              break;
            case "pressBack":
              kT.press.back();
              break;
            case "cancel":
              lT.cancel();
              break;
            case "close":
              return this.releasePress(), void lT.close()
          }
          this.afterAction()
        }
        startPress(TT, kT, cT) {
          this.releasePress(), TT.press(kT) && (this.activePress = {
            handlers: TT,
            button: cT,
            target: Jk(this.focused)
          })
        }
        releasePress() {
          var TT, kT, cT;
          null === (TT = this.activePress) || void 0 === TT || null === (kT = (cT = TT.handlers).release) || void 0 === kT || kT.call(cT), this.activePress = null
        }
        afterAction() {
          this.targets.invalidate(), this.hover.invalidate()
        }
        publishState(TT) {
          ((TT, kT) => {
            var cT, lT, MT, KT, OT, yT;
            return TT.showing === kT.showing && TT.kind === kT.kind && TT.holding === kT.holding && TT.slotHasItem === kT.slotHasItem && (null === (cT = TT.pressHints) || void 0 === cT ? void 0 : cT.primary) === (null === (lT = kT.pressHints) || void 0 === lT ? void 0 : lT.primary) && (null === (MT = TT.pressHints) || void 0 === MT ? void 0 : MT.secondary) === (null === (KT = kT.pressHints) || void 0 === KT ? void 0 : KT.secondary) && (null === (OT = TT.pressHints) || void 0 === OT ? void 0 : OT.back) === (null === (yT = kT.pressHints) || void 0 === yT ? void 0 : yT.back) && TT.hasCategories === kT.hasCategories && TT.hasList === kT.hasList && TT.openButtonCloses === kT.openButtonCloses && TT.steppingSlots === kT.steppingSlots && TT.hotbarPicking === kT.hotbarPicking && TT.quickMoveToHotbar === kT.quickMoveToHotbar && TT.dropStackHold === kT.dropStackHold
          })(TT, this.state) || (this.state = TT, xT.k.nt(Xk.h, TT))
        }
      },
      Oc = ["pointermove", "pointerover", "pointerout", "mouseover", "mouseout"];
    var yc = cT(8727),
      fc = cT(328),
      xc = cT(1654),
      Ic = cT(8202);
    const Ac = "[data-pad-secondary]",
      Cc = TT => TT instanceof HTMLElement && (0, qT.l)(TT) && !(0, qT.n)(TT),
      jc = TT => {
        const kT = TT.querySelector(Ac);
        if (kT && Cc(kT)) return kT;
        for (const MT of null !== (cT = null === (lT = TT.parentElement) || void 0 === lT ? void 0 : lT.children) && void 0 !== cT ? cT : []) {
          var cT, lT;
          if (MT !== TT && MT.matches(Ac) && Cc(MT)) return MT
        }
        return null
      },
      vc = (TT, kT, cT, lT) => Math.max(0, Math.max(TT, cT) - Math.min(kT, lT)),
      tc = (TT, kT, cT, lT) => Math.max(0, Math.min(kT, lT) - Math.max(TT, cT)),
      hc = (TT, kT, cT) => {
        const lT = (TT.left + TT.right) / 2,
          MT = (TT.top + TT.bottom) / 2,
          KT = (kT.left + kT.right) / 2,
          OT = (kT.top + kT.bottom) / 2;
        if ("Left" === cT || "Right" === cT) {
          const yT = "Right" === cT ? 1 : -1;
          return {
            forwardGap: "Right" === cT ? kT.left - TT.right : TT.left - kT.right,
            centreForward: (KT - lT) * yT,
            sidewaysGap: vc(TT.top, TT.bottom, kT.top, kT.bottom),
            sidewaysOverlap: tc(TT.top, TT.bottom, kT.top, kT.bottom),
            centreSideways: Math.abs(OT - MT),
            startSideways: Math.abs(kT.top - TT.top),
            fromSidewaysSize: TT.bottom - TT.top,
            toSidewaysSize: kT.bottom - kT.top,
            toLength: kT.right - kT.left
          }
        }
        const yT = "Down" === cT ? 1 : -1;
        return {
          forwardGap: "Down" === cT ? kT.top - TT.bottom : TT.top - kT.bottom,
          centreForward: (OT - MT) * yT,
          sidewaysGap: vc(TT.left, TT.right, kT.left, kT.right),
          sidewaysOverlap: tc(TT.left, TT.right, kT.left, kT.right),
          centreSideways: Math.abs(KT - lT),
          startSideways: Math.abs(kT.left - TT.left),
          fromSidewaysSize: TT.right - TT.left,
          toSidewaysSize: kT.right - kT.left,
          toLength: kT.bottom - kT.top
        }
      },
      Nc = TT => TT.centreForward > .5 && TT.forwardGap >= -TT.toLength / 2,
      Qc = TT => {
        const kT = TT.sidewaysOverlap > 0 ? 0 : 2 * TT.fromSidewaysSize,
          cT = TT.fromSidewaysSize > 1.5 * TT.toSidewaysSize ? TT.startSideways : TT.centreSideways;
        return Math.max(0, TT.forwardGap) + 3 * TT.sidewaysGap + kT + .1 * cT
      },
      Sc = (TT, kT) => tc(TT.top, TT.bottom, kT.top, kT.bottom) > 0 || kT.bottom - kT.top > kT.right - kT.left,
      Dc = (TT, kT, cT, lT, MT, KT) => {
        const OT = MT ? Fc(TT, kT, cT, MT) : new Set,
          yT = Pc(TT, kT, cT, OT);
        return yT < 0 && OT.size > 0 && KT ? ac(TT, kT, cT, KT) : lT && yT >= 0 ? rc(TT, kT, cT, lT, yT, OT) : yT
      },
      ac = (TT, kT, cT, lT) => {
        const MT = new Set,
          KT = Pc(TT, kT, "Up", MT) >= 0,
          OT = Pc(TT, kT, "Down", MT) >= 0,
          yT = new Set;
        return kT.forEach(((kT, cT) => {
          const MT = kT.top + kT.bottom < TT.top + TT.bottom;
          lT[cT] && !(MT ? KT : OT) || yT.add(cT)
        })), Pc(TT, kT, cT, yT)
      },
      Fc = (TT, kT, cT, lT) => {
        const MT = new Set;
        return "Left" !== cT && "Right" !== cT || kT.forEach(((kT, cT) => {
          lT[cT] && tc(TT.top, TT.bottom, kT.top, kT.bottom) <= 0 && MT.add(cT)
        })), MT
      },
      rc = (TT, kT, cT, lT, MT, KT) => {
        const OT = hc(TT, kT[MT], cT).forwardGap;
        let yT = MT,
          fT = lT[MT],
          xT = 1 / 0;
        return kT.forEach(((kT, IT) => {
          const AT = lT[IT];
          if (KT.has(IT) || AT < fT || AT === fT && yT === MT) return;
          const CT = hc(TT, kT, cT);
          if (!Nc(CT) || CT.forwardGap < 0 || CT.forwardGap >= OT) return;
          const jT = Qc(CT);
          (AT > fT || jT < xT) && (yT = IT, fT = AT, xT = jT)
        })), yT
      },
      Pc = (TT, kT, cT, lT) => {
        let MT = -1,
          KT = 1 / 0;
        if (kT.forEach(((kT, OT) => {
            const yT = ((TT, kT, cT) => {
              const lT = hc(TT, kT, cT);
              if (!Nc(lT)) return null;
              const MT = Math.max(0, lT.forwardGap);
              return lT.sidewaysOverlap <= 0 && lT.sidewaysGap > 2 * (MT + 1) ? null : Qc(lT)
            })(TT, kT, cT);
            null !== yT && yT < KT && !lT.has(OT) && (KT = yT, MT = OT)
          })), MT < 0) return -1;
        const OT = kT[MT],
          yT = hc(TT, OT, cT).forwardGap;
        let fT = yT,
          xT = MT;
        return kT.forEach(((kT, KT) => {
          if (KT === MT || lT.has(KT) || !((TT, kT, cT) => {
              const lT = "Left" === cT || "Right" === cT,
                MT = lT ? tc(TT.top, TT.bottom, kT.top, kT.bottom) : tc(TT.left, TT.right, kT.left, kT.right),
                KT = lT ? Math.min(TT.bottom - TT.top, kT.bottom - kT.top) : Math.min(TT.right - TT.left, kT.right - kT.left);
              return MT > 0 && MT >= KT / 2
            })(kT, OT, cT)) return;
          const IT = hc(TT, kT, cT);
          Nc(IT) && IT.forwardGap + IT.toLength <= yT + 1 && IT.forwardGap < fT && (fT = IT.forwardGap, xT = KT)
        })), xT
      },
      wc = (TT, kT) => {
        let cT = -1,
          lT = 1 / 0;
        return kT.forEach(((kT, MT) => {
          const KT = Math.max(kT.left - TT.x, 0, TT.x - kT.right),
            OT = Math.max(kT.top - TT.y, 0, TT.y - kT.bottom),
            yT = Math.hypot(KT, OT);
          yT < lT && (lT = yT, cT = MT)
        })), cT
      },
      mc = (TT, kT) => {
        const cT = Math.min(TT.bottom - TT.top, kT.bottom - kT.top) / 2;
        return Math.abs(TT.top - kT.top) > cT ? TT.top - kT.top : TT.left - kT.left
      },
      bc = TT => {
        let kT = -1;
        for (let cT = 0; cT < TT.length; cT++)(kT < 0 || mc(TT[cT], TT[kT]) < 0) && (kT = cT);
        return kT
      };
    var zc = cT(1701),
      Jc = cT(8734),
      oc = cT(8737);
    const Hc = TT => {
        if ("death" !== TT || "inGame" !== fT.e.get("gameState") || "off" === (0, CT.g)().quickChat || null === (0, zc.c)()) return !1;
        const kT = (0, IT.j)("chat");
        return kT !== (0, IT.j)("menuConfirm") && kT !== (0, IT.j)("menuBack")
      },
      ec = new Jc.c;
    var Gc = cT(4284),
      Vc = cT(8746);
    const Ec = TT => {
        let kT = null;
        for (const cT of TT.querySelectorAll("[data-pad-tabs]"))(0, qT.l)(cT) && (!kT || Number(cT.dataset.padTabs) < Number(kT.dataset.padTabs)) && (kT = cT);
        return kT
      },
      Zc = (TT, kT, cT, lT) => {
        TT.focusWhenFound((() => {
          const MT = TT.pickInitial(kT);
          if (MT && !cT.has(MT) && (null === lT || void 0 === lT || !lT.contains(MT))) return MT;
          const KT = ((TT, kT) => {
              const cT = kT => TT.getEnabledCandidates(kT).filter((TT => !TT.closest("[data-pad-tabs]")));
              for (const lT of (0, qT.f)(kT)) {
                const TT = cT(lT);
                if (TT.length > 0) return TT
              }
              return cT(kT)
            })(TT, kT).filter((TT => !cT.has(TT))),
            OT = bc(KT.map((TT => TT.getBoundingClientRect())));
          return OT >= 0 ? KT[OT] : null
        }), 3e3)
      },
      uc = (TT, kT, cT, lT) => {
        var MT;
        const KT = ((TT, kT) => {
          if (0 === TT.length) return null;
          const cT = TT.findIndex((TT => "true" === TT.dataset.padSelected));
          return cT < 0 ? kT > 0 ? TT[0] : TT[TT.length - 1] : TT[(cT + kT + TT.length) % TT.length]
        })([...cT.querySelectorAll("[data-pad-tab]")].filter((TT => (0, qT.l)(TT) && !(0, qT.n)(TT))), lT);
        if (!KT) return;
        const OT = null !== (MT = null === TT || void 0 === TT ? void 0 : TT.getFocused()) && void 0 !== MT ? MT : null,
          yT = !(null === OT || void 0 === OT || !OT.isConnected) && cT.contains(OT),
          fT = TT && !yT ? new Set(TT.getEnabledCandidates(kT)) : null;
        (0, UT.b)(KT), TT && (fT ? Zc(TT, kT, fT, cT) : TT.setFocus(KT, {
          byUser: !0
        }))
      },
      Xc = TT => {
        var kT;
        const cT = GT(null !== (kT = bT(TT, "x")) && void 0 !== kT ? kT : TT),
          lT = (0, qT.e)(TT).filter((TT => !(0, qT.n)(TT))),
          MT = lT.filter((TT => VT(TT.getBoundingClientRect(), cT)));
        return (MT.length > 0 ? MT : lT).sort(((TT, kT) => mc(TT.getBoundingClientRect(), kT.getBoundingClientRect())))
      },
      dc = (TT, kT, cT) => {
        const lT = [...kT.querySelectorAll("[data-pad-row]")].filter(qT.l),
          MT = TT.getFocused(),
          KT = MT ? lT.findIndex((TT => TT.contains(MT))) : -1;
        let OT = 0,
          yT = cT > 0 ? 0 : lT.length - 1;
        if (KT >= 0 && MT) OT = Math.max(0, Xc(lT[KT]).indexOf(MT)), yT = KT + cT;
        else if (MT) {
          const TT = MT.getBoundingClientRect(),
            kT = lT.map((kT => {
              const lT = kT.getBoundingClientRect();
              return cT > 0 ? lT.top >= TT.top : lT.bottom <= TT.bottom
            }));
          yT = cT > 0 ? kT.indexOf(!0) : kT.lastIndexOf(!0)
        }
        for (let fT = yT; fT >= 0 && fT < lT.length; fT += cT) {
          const kT = Xc(lT[fT]);
          if (kT.length > 0) return void TT.setFocus(kT[Math.min(OT, kT.length - 1)], {
            byUser: !0
          })
        }
      },
      Lc = (TT, kT, cT) => {
        var lT, MT;
        const KT = null !== (lT = null === TT || void 0 === TT ? void 0 : TT.getFocused()) && void 0 !== lT ? lT : null,
          OT = null !== KT && void 0 !== KT && KT.closest("[data-pad-row]") ? "x" : "y",
          yT = null !== (MT = KT ? bT(KT, OT, kT) : null) && void 0 !== MT ? MT : JT(kT, OT);
        if (!yT) return;
        const fT = KT ? (0, UT.w)(KT) : null;
        if (eT(yT, OT, cT * ("y" === OT ? yT.clientHeight : yT.clientWidth) * .85), !TT || !fT) return;
        const xT = GT(yT),
          IT = TT.getEnabledCandidates(kT).filter((TT => yT.contains(TT) && VT(TT.getBoundingClientRect(), xT))),
          AT = wc(fT, IT.map((TT => TT.getBoundingClientRect())));
        AT >= 0 && TT.setFocus(IT[AT], {
          scroll: !1,
          byUser: !0
        })
      };
    let Rc = null;
    const gc = (TT, kT) => {
        var cT, lT;
        const MT = kT.querySelector("[data-pad-friends-column]"),
          KT = TT.getFocused();
        if (!MT || !KT || !MT.contains(KT)) return !1;
        const OT = TT.getEnabledCandidates(kT).filter((TT => !MT.contains(TT))),
          yT = wc((0, UT.w)(KT), OT.map((TT => TT.getBoundingClientRect()))),
          fT = null === (cT = Rc) || void 0 === cT ? void 0 : cT.deref();
        return TT.setFocus(null !== fT && void 0 !== fT && fT.isConnected ? fT : null !== (lT = OT[yT]) && void 0 !== lT ? lT : null, {
          byUser: !0
        }), !0
      },
      Uc = TT => {
        const kT = (0, IT.j)(TT);
        return (0, vT.I)(kT) || Ic.v.some((TT => (0, IT.j)(TT) === kT)) ? null : kT
      },
      Yc = (TT, kT) => {
        const cT = Uc(kT);
        return null !== cT && TT.wasPressed(cT)
      },
      Bc = function(TT, kT, cT) {
        let lT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const MT = (TT => {
            var kT, cT;
            return null !== (kT = null === (cT = Ec(TT)) || void 0 === cT ? void 0 : cT.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== kT ? kT : null
          })(kT),
          KT = TT && MT ? new Set(TT.getEnabledCandidates(kT)) : null;
        (0, yc.c)(), cT === fc.o.SETTINGS && (0, xc.n)(fT.e.get("openEverythingMenuName")) ? fT.e.set({
          openEverythingMenuName: cT
        }) : (0, xc.z)(new Event("padMenuShortcut"), cT, lT), TT && KT && MT && Zc(TT, kT, KT, MT.closest("[data-pad-tabs]"))
      },
      Wc = TT => null !== TT.closest(".Dropdown-root") || null !== TT.querySelector(".Dropdown-root.is-open"),
      nc = TT => null !== (0, Vc.c)() && "popup" !== TT.layer.kind && !Ec(TT.root) && !Wc(TT.root),
      pc = (0, tT.e)(vT.cb),
      ic = (0, tT.e)(vT.cb),
      qc = (TT, kT, cT) => {
        if (((TT, kT) => {
            const cT = (0, IT.j)("chat");
            return Hc(kT) && TT.isHeld(cT) ? "hold" === ec.update(TT.wasPressed(cT), TT.isHeld(cT), performance.now(), hT.c[(0, CT.g)().tapHoldTime].wheelMs) && (AT.d.consumeButton(cT), xT.k.nt(oc.n), !0) : (ec.release(), !1)
          })(kT, cT.layer.kind)) return !0;
        const lT = cT.root;
        for (const [OT, yT] of [
            ["menuTabPrevious", -1],
            ["menuTabNext", 1]
          ])
          if (kT.wasPressed((0, IT.j)(OT))) {
            const kT = Wc(lT) ? null : Ec(lT);
            if (kT) uc(TT, lT, kT, yT);
            else if (nc(cT)) {
              var MT;
              const kT = TT ? new Set(TT.getEnabledCandidates(lT)) : null;
              null !== (MT = (0, Vc.c)()) && void 0 !== MT && MT(yT) && TT && kT && Zc(TT, lT, kT, null)
            } else TT && dc(TT, lT, yT);
            return !0
          } for (const [OT, yT, fT] of [
            ["menuPageUp", -1, pc],
            ["menuPageDown", 1, ic]
          ]) {
          const cT = (0, IT.j)(OT);
          if (kT.wasPressed(cT) && fT.reset(), fT.update(kT.isHeld(cT), performance.now())) return Lc(TT, lT, yT), !0
        }
        const KT = "popup" === cT.layer.kind;
        return Yc(kT, "pause") ? (KT || (0, xc.u)() && "menu" !== cT.layer.kind || Bc(TT, lT, (0, xc.u)() ? fc.o.SETTINGS : (0, Gc.e)()), !0) : !!Yc(kT, "leaderboard") && ("home" === cT.layer.kind ? (TT => {
          const kT = [...TT.querySelectorAll("[data-pad-notifications]")].find(qT.l);
          kT && (0, UT.b)(kT)
        })(lT) : KT || Bc(TT, lT, fc.o.LOBBY_LEADERBOARD, "inGame" === fT.e.get("gameState")), !0)
      },
      sc = (TT, kT, cT) => {
        if (qc(TT, kT, cT)) return !0;
        const lT = "home" === cT.layer.kind;
        if (kT.wasPressed((0, IT.j)("menuSecondary"))) {
          const kT = TT.getFocused(),
            MT = kT ? jc(kT) : null;
          if (MT) return (0, UT.b)(MT), !0;
          if (lT) {
            const kT = cT.root.querySelector("[data-pad-search] input");
            return kT && (0, qT.m)(kT, cT.root) ? (TT.setFocus(kT, {
              byUser: !0
            }), (0, UT.b)(kT)) : fT.e.set({
              searchOpen: !0
            }), !0
          }
        }
        return !(!lT || !Yc(kT, "inventory")) && (((TT, kT) => {
          var cT, lT;
          const MT = kT.querySelector("[data-pad-friends-column]");
          if (!MT || !(0, qT.l)(MT)) return void(0, xc.z)(new Event("padMenuShortcut"), fc.o.SOCIAL);
          if (gc(TT, kT)) return;
          const KT = null !== (cT = null === (lT = MT.querySelector("[data-pad-friends-start]")) || void 0 === lT ? void 0 : lT.getBoundingClientRect().top) && void 0 !== cT ? cT : -1 / 0,
            OT = TT.getEnabledCandidates(MT),
            yT = OT.filter((TT => TT.getBoundingClientRect().top >= KT)),
            fT = yT.length > 0 ? yT : OT,
            xT = bc(fT.map((TT => TT.getBoundingClientRect())));
          TT.setFocus(xT >= 0 ? fT[xT] : null, {
            byUser: !0
          })
        })(TT, cT.root), !0)
      },
      Tl = TT => {
        var kT, cT, lT;
        const MT = (0, UT.y)(TT);
        if (null !== MT) return MT;
        const KT = (null !== (kT = null !== (cT = null !== (lT = TT.getAttribute("aria-label")) && void 0 !== lT ? lT : TT.getAttribute("title")) && void 0 !== cT ? cT : TT.textContent) && void 0 !== kT ? kT : "").replace(/\s+/g, " ").trim();
        return KT ? `${TT.tagName}:${KT.slice(0,100)}` : null
      };
    class kl {
      constructor() {
        this.remembered = new Map, this.history = []
      }
      enter(TT) {
        const kT = this.history.indexOf(TT);
        if (kT >= 0) {
          for (const TT of this.history.splice(kT + 1)) this.remembered.delete(TT);
          return !0
        }
        return this.remembered.delete(TT), this.history.push(TT), this.history.length > 32 && this.forget(this.history[0]), !1
      }
      forget(TT) {
        this.remembered.delete(TT);
        const kT = this.history.indexOf(TT);
        kT >= 0 && this.history.splice(kT, 1)
      }
      remember(TT, kT, cT, lT) {
        const MT = Tl(kT),
          KT = (0, UT.y)(kT),
          OT = null !== KT && ((TT, kT) => {
            let cT = 0;
            for (const lT of TT.querySelectorAll("[data-pad-key], [href]"))
              if ((lT.getAttribute("data-pad-key") === kT || lT.getAttribute("href") === kT) && (cT++, cT > 1)) return !0;
            return !1
          })(cT, KT) ? Math.max(0, this.twins(lT(), KT).indexOf(kT)) : 0;
        this.remembered.set(TT, {
          element: new WeakRef(kT),
          identity: MT,
          ordinal: OT
        })
      }
      has(TT) {
        return this.remembered.has(TT)
      }
      recall(TT, kT) {
        var cT, lT;
        const MT = this.remembered.get(TT);
        if (!MT) return null;
        const KT = MT.element.deref();
        if (KT && kT.includes(KT)) return KT;
        if (null === MT.identity) return null;
        const OT = this.twins(kT, MT.identity);
        return null !== (cT = null !== (lT = OT[MT.ordinal]) && void 0 !== lT ? lT : OT[0]) && void 0 !== cT ? cT : null
      }
      twins(TT, kT) {
        return TT.filter((TT => Tl(TT) === kT))
      }
    }
    var cl = cT(1289);
    const ll = TT => {
        const kT = [];
        let cT = TT;
        for (; cT && cT !== document.body;) {
          const TT = getComputedStyle(cT).zIndex;
          "auto" !== TT && kT.push(Number(TT) || 0), cT = cT.parentElement
        }
        return kT.reverse()
      },
      Ml = (TT, kT) => {
        const cT = ((TT, kT) => {
          const cT = Math.max(TT.length, kT.length);
          for (let KT = 0; KT < cT; KT++) {
            var lT, MT;
            const cT = (null !== (lT = TT[KT]) && void 0 !== lT ? lT : 0) - (null !== (MT = kT[KT]) && void 0 !== MT ? MT : 0);
            if (0 !== cT) return cT
          }
          return 0
        })(ll(TT), ll(kT));
        if (0 !== cT) return cT > 0;
        if (TT.contains(kT)) return !1;
        if (kT.contains(TT)) return !0;
        const lT = TT.compareDocumentPosition(kT);
        return !!(lT & Node.DOCUMENT_POSITION_PRECEDING) || !(lT & Node.DOCUMENT_POSITION_FOLLOWING) && null
      },
      Kl = (TT, kT) => {
        var cT;
        return null !== (cT = Ml(TT.root, kT.root)) && void 0 !== cT ? cT : TT.order > kT.order
      },
      Ol = (TT, kT) => kT.some((kT => !kT.contains(TT) && !TT.contains(kT) && !0 === Ml(kT, TT)));
    let yl = null,
      fl = null,
      xl = -1;
    const Il = () => {
        var TT;
        const kT = null === (TT = document.timeline) || void 0 === TT ? void 0 : TT.currentTime,
          cT = "number" === typeof kT ? kT : null;
        if (null !== cT && cT === fl && xl === (0, cl.b)()) return yl;
        let lT = null;
        const MT = [],
          KT = [...document.querySelectorAll("[data-pad-covers]")].filter(qT.l);
        for (const OT of (0, cl.d)()) {
          const TT = OT.getRoot(),
            kT = !!TT && (0, qT.l)(TT) && !Ol(TT, KT);
          if (OT.shown && !kT && MT.push(OT), OT.shown = kT, !TT || !kT) continue;
          const cT = {
            layer: OT,
            root: TT,
            order: OT.order
          };
          lT && !Kl(cT, lT) || (lT = cT)
        }
        yl = lT, fl = cT, xl = (0, cl.b)();
        for (const OT of MT)(0, cl.g)(OT);
        return yl
      },
      Al = () => {
        const TT = Il();
        return !(null === TT || void 0 === TT || !TT.layer.close) && (TT.layer.close(), fl = null, !0)
      },
      Cl = () => {
        var TT, kT;
        return null !== (TT = null === (kT = Il()) || void 0 === kT ? void 0 : kT.root) && void 0 !== TT ? TT : null
      },
      jl = TT => TT ? {
        ...TT,
        root: Cl()
      } : null;
    let vl = null,
      tl = null,
      hl = (0, CT.g)().menuNavigation,
      Nl = null;
    const Ql = new aT;
    let Sl = null;
    xT.k.subscribe(CT.f, (() => {
      const TT = (0, CT.g)().menuNavigation;
      TT !== hl && (hl = TT, vl = null, tl = null)
    }));
    const Dl = () => {
        var TT;
        return null !== (TT = vl) && void 0 !== TT ? TT : (0, CT.g)().menuNavigation
      },
      al = TT => {
        if (wl()) {
          if (Nl = jl(TT), "hybrid" === Dl()) return Ql.lock(), void(tl = tl ? null : Cl());
          vl = "focus" === Dl() ? "cursor" : "focus"
        }
      },
      Fl = () => {
        const TT = Nl;
        return Nl = null, TT
      };
    let rl = {
      root: null,
      firstSeenMs: -1 / 0,
      atMs: -1 / 0,
      has: !1
    };
    const Pl = function(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const cT = rl.root === TT,
          lT = cT ? rl.firstSeenMs : kT,
          MT = rl.has || kT - lT > 1e3;
        return (!cT || !MT || kT - rl.atMs > 250) && (rl = {
          root: TT,
          firstSeenMs: lT,
          atMs: kT,
          has: (0, qT.i)(TT)
        }), rl.has
      },
      wl = () => {
        const TT = Cl();
        return null !== TT && Pl(TT)
      },
      ml = () => {
        const TT = Il();
        return tl && (null === TT || void 0 === TT ? void 0 : TT.root) !== tl && (tl = null), (TT => {
          let {
            mode: kT,
            hasLayer: cT,
            hasCandidates: lT,
            hybridCursorEngaged: MT
          } = TT;
          return cT ? "cursor" !== kT && lT() ? "hybrid" === kT && MT ? "cursor" : "focus" : "cursor" : null
        })({
          mode: Dl(),
          hasLayer: null !== TT,
          hasCandidates: () => null !== TT && Pl(TT.root),
          hybridCursorEngaged: null !== tl
        })
      },
      bl = () => "hybrid" === Dl() && wl(),
      zl = "pad-focused";
    var Jl = cT(4535),
      ol = cT(4975);
    const Hl = "[data-pad-destructive]",
      el = `${Hl}, [data-pad-back]`,
      Gl = TT => ({
        rect: TT.getBoundingClientRect(),
        destructive: TT.matches(Hl),
        closes: null !== TT.closest("[data-pad-close-button]"),
        unavailable: TT.matches("[data-pad-unavailable]")
      }),
      Vl = TT => {
        let {
          destructive: kT,
          closes: cT,
          unavailable: lT
        } = TT;
        return kT ? cT ? 2 : 3 : lT ? 1 : 0
      },
      El = TT => {
        let kT = -1;
        for (let cT = 0; cT < TT.length; cT++) {
          if (kT < 0) {
            kT = cT;
            continue
          }
          const lT = TT[cT],
            MT = TT[kT];
          Vl(lT) === Vl(MT) ? mc(lT.rect, MT.rect) < 0 && (kT = cT) : Vl(lT) < Vl(MT) && (kT = cT)
        }
        return kT
      },
      Zl = "[data-pad-tabs]",
      ul = "[data-pad-tab]",
      Xl = (TT, kT) => {
        const cT = TT.querySelector(`${ul}[data-pad-selected='true']`);
        return cT && kT.includes(cT) ? cT : null
      },
      dl = (TT, kT) => {
        let cT = kT;
        for (let lT = kT.parentElement; lT && !lT.contains(TT); lT = lT.parentElement) cT = lT;
        return cT
      };
    class Ll {
      constructor() {
        this.contentReturn = null
      }
      redirect(TT, kT, cT, lT) {
        var MT, KT;
        const OT = TT.closest(Zl),
          yT = kT.closest(Zl);
        var fT;
        if (yT && yT !== OT) return OT || (this.contentReturn = new WeakRef(TT)), null !== (fT = Xl(yT, cT)) && void 0 !== fT ? fT : kT;
        if (!OT || yT) return kT;
        const xT = dl(TT, kT),
          IT = null === (MT = this.contentReturn) || void 0 === MT ? void 0 : MT.deref();
        return IT && xT.contains(IT) && cT.includes(IT) ? IT : null !== (KT = this.pickRegionStart(xT, bT(kT, "y", lT), cT)) && void 0 !== KT ? KT : kT
      }
      findTabContent(TT, kT, cT) {
        const lT = TT.closest(Zl);
        if (!lT || !TT.matches(ul) || lT.contains(kT)) return null;
        const MT = kT.closest(Zl);
        if (MT && Number(MT.dataset.padTabs) <= Number(lT.dataset.padTabs)) return null;
        const KT = dl(TT, kT);
        return cT.some((TT => KT.contains(TT) && !TT.closest(el))) || !kT.closest(el) ? KT : null
      }
      pickContentStart(TT, kT, cT) {
        return this.contentReturn = null, this.pickRegionStart(TT, bT(TT, "y", cT), kT)
      }
      pickReplacedContentStart(TT, kT, cT, lT) {
        if (!kT.contains(TT)) return null;
        const MT = dl(kT, TT),
          KT = cT.filter((TT => kT.contains(TT) && !MT.contains(TT) && !TT.closest(el)));
        return 0 === KT.length ? null : (this.contentReturn = null, this.pickRegionStart(kT, bT(KT[0], "y", lT), KT))
      }
      backToStrip(TT, kT, cT) {
        if (TT.closest(Zl)) return null;
        const lT = Ec(cT);
        for (const MT of cT.querySelectorAll(Zl)) {
          if (Number(MT.dataset.padTabs) <= 1 || MT === lT) continue;
          const KT = Xl(MT, kT),
            OT = KT ? dl(TT, MT).parentElement : null;
          if (KT && OT && OT !== cT && cT.contains(OT)) return this.contentReturn = new WeakRef(TT), KT
        }
        return null
      }
      pickRegionStart(TT, kT, cT) {
        const lT = GT(kT),
          MT = TT => {
            const kT = cT.filter((kT => TT.contains(kT) && !kT.closest(Zl) && VT(kT.getBoundingClientRect(), lT))),
              MT = El(kT.map(Gl));
            return MT >= 0 ? kT[MT] : null
          };
        for (const KT of (0, qT.f)(TT)) {
          const TT = MT(KT);
          if (TT) return TT
        }
        for (const KT of TT.querySelectorAll(Zl)) {
          const TT = Xl(KT, cT);
          if (TT) return TT
        }
        return MT(TT)
      }
    }
    const Rl = "[data-pad-default-focus], .Dropdown-option.is-selected",
      gl = ".Dropdown-root.is-open > .Dropdown-menu",
      Ul = "[data-pad-no-step-in]",
      Yl = "[data-pad-tabs]",
      Bl = "[data-pad-press-area]",
      Wl = TT => {
        let kT = TT;
        for (let cT = 0; kT && cT <= 4; cT++, kT = kT.parentElement) {
          const cT = kT.querySelector(".CircleInfo");
          if (cT) return kT === TT || kT.querySelectorAll(qT.d).length <= 1 ? cT : null;
          if (kT !== TT && kT.querySelectorAll(qT.d).length > 1) return null
        }
        return null
      },
      nl = (TT, kT, cT) => {
        (0, UT.k)(TT, kT, cT);
        const lT = null !== TT && void 0 !== TT && TT.isConnected ? Wl(TT) : null,
          MT = Wl(kT);
        lT !== MT && (0, UT.k)(lT, MT, MT ? (0, UT.w)(MT) : cT, {
          leaveBelow: TT,
          enterBelow: kT
        })
      },
      pl = TT => TT.getBoundingClientRect(),
      il = (TT, kT, cT) => {
        const lT = new Set(cT);
        for (let MT = TT; MT; MT = MT === kT ? null : MT.parentElement)
          if (lT.has(MT)) return MT;
        return null
      },
      ql = (TT, kT) => !TT.root || TT.root === kT || kT.matches(gl) && TT.root.contains(kT);
    const sl = new class {
      constructor() {
        this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new kl, this.tabStripNav = new Ll, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepeatKey = null, this.confirmRepeated = !1, this.confirmRepeat = (0, tT.e)(vT.t), this.dpadRepeats = new Map(vT.D.map((TT => [TT, (0, tT.e)(vT.E)]))), this.stickRepeat = new vT.c((0, tT.e)(vT.hb)), this.lastRefocusCheckMs = -1 / 0, this.enteredLayerAtMs = 0, this.lastFocusedCentre = null, this.lastActivatedKey = null, this.lastActivated = null, this.lastActivatedAtMs = -1 / 0, this.pendingFocus = null, this.tabOpenWait = null, this.retryMove = null, this.scrollRemainder = {
          x: 0,
          y: 0
        }, this.wasActive = !1, this.layerKind = null, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.listeners = new Set, this.dropdownLayers = new WeakMap, this.dropdownLayerCounter = 0
      }
      install() {
        const TT = AT.d.register({
            name: "focus",
            isActive: () => (0, jT.i)() && "focus" === ml(),
            onFrame: TT => {
              this.onFrame(TT)
            },
            onDeactivate: () => {
              this.deactivate()
            },
            wakePressActs: TT => (0, AT.f)(TT) || TT === (0, IT.j)("menuConfirm") && (0, UT.E)((0, jT.b)())
          }),
          kT = (0, cl.j)((TT => {
            const kT = (0, cl.o)(TT);
            null === TT.memoryKey && this.memory.forget(kT), kT === this.layerKey && (this.layerKey = null)
          }));
        let cT = -1 / 0;
        const lT = OT.e.onFrame((TT => {
            (0, jT.i)() || TT.timestampMs - cT < 100 || (cT = TT.timestampMs, Il())
          })),
          MT = TT => {
            TT.isTrusted && TT.target instanceof Element && OT.e.getActivePad() && this.noteChosenStop(TT.target)
          };
        return document.addEventListener("click", MT, !0), () => {
          TT(), kT(), lT(), document.removeEventListener("click", MT, !0), this.deactivate()
        }
      }
      noteChosenStop(TT) {
        var kT, cT;
        const lT = Il();
        if (!lT || !lT.root.contains(TT)) return;
        const MT = null !== (kT = null === (cT = TT.closest(".Dropdown-root")) || void 0 === cT ? void 0 : cT.querySelector(".Dropdown-control")) && void 0 !== kT ? kT : TT,
          KT = il(MT, lT.root, this.getEnabledCandidates(lT.root));
        if (!KT) return;
        const OT = (0, cl.o)(lT.layer);
        OT === this.layerKey && lT.root === this.layerRoot || this.beginLayer(lT, OT), this.wasActive ? this.setFocus(KT, {
          scroll: !1,
          byUser: !0
        }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = KT, this.lastFocusedCentre = (0, UT.w)(KT), this.rememberFocus(KT), this.notify())
      }
      getFocused() {
        return this.focused
      }
      isActive() {
        return this.wasActive
      }
      onChange(TT) {
        return this.listeners.add(TT), () => {
          this.listeners.delete(TT)
        }
      }
      notify() {
        for (const TT of this.listeners) TT()
      }
      deactivate() {
        var TT;
        if (this.wasActive) {
          this.wasActive = !1, this.layerKind = null, this.confirmPressedOn = null, this.retryMove = null, this.pendingFocus = null;
          for (const TT of this.dpadRepeats.values()) TT.reset();
          this.stickRepeat.reset(), null !== (TT = this.focused) && void 0 !== TT && TT.isConnected && nl(this.focused, null, (0, UT.w)(this.focused)), this.notify()
        }
      }
      setFocus(TT) {
        var kT;
        let {
          scroll: cT = !0,
          byUser: lT = !1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (lT && (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1), TT === this.focused) return;
        const MT = null !== (kT = this.focused) && void 0 !== kT && kT.isConnected ? this.focused : null;
        if (this.focused = TT, TT) {
          cT && (TT.classList.add(zl), TT.scrollIntoView({
            block: "nearest",
            inline: "nearest",
            behavior: "instant"
          })), lT && ((TT, kT) => {
            const cT = kT.closest("[data-pad-friends-column]");
            cT && TT && !cT.contains(TT) && (Rc = new WeakRef(TT))
          })(MT, TT);
          const kT = (0, UT.w)(TT);
          this.lastFocusedCentre = kT, this.movedInLayer && this.rememberFocus(TT), nl(MT, TT, kT), "false" === TT.getAttribute("aria-pressed") && TT.closest("[data-pad-select-on-focus]") && (0, UT.b)(TT)
        } else MT && nl(MT, null, (0, UT.w)(MT));
        this.notify()
      }
      rememberFocus(TT) {
        const kT = this.layerRoot;
        this.layerKey && kT && this.memory.remember(this.layerKey, TT, kT, (() => this.getEnabledCandidates(kT)))
      }
      noteCursorActivation(TT) {
        const kT = Il();
        if (!kT || !kT.root.contains(TT)) return;
        const cT = this.getEnabledCandidates(kT.root),
          lT = new Set(cT);
        let MT = TT;
        for (; MT && !lT.has(MT);) MT = MT === kT.root ? null : MT.parentElement;
        if (!(MT instanceof HTMLElement)) return;
        const KT = (0, cl.o)(kT.layer);
        this.memory.enter(KT), this.memory.remember(KT, MT, kT.root, (() => cT))
      }
      notePageEnteredByCursor(TT) {
        return this.memory.enter(TT)
      }
      recallStop(TT, kT) {
        return this.findRemembered(TT, kT)
      }
      focusWhenFound(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.pendingFocus = {
          find: TT,
          untilMs: performance.now() + kT,
          holdWhile: cT
        }
      }
      getEnabledCandidates(TT) {
        return (0, qT.e)(TT).filter((TT => !(0, qT.n)(TT)))
      }
      onFrame(TT) {
        var kT;
        const cT = Il();
        if (!cT) return;
        const lT = null !== (kT = this.findOpenDropdown(cT)) && void 0 !== kT ? kT : cT,
          MT = performance.now(),
          KT = (0, cl.o)(lT.layer);
        if (KT !== this.layerKey || lT.root !== this.layerRoot) {
          const kT = this.focused;
          if (null !== this.layerKey && lT.root === this.layerRoot && kT && (0, qT.m)(kT, lT.root)) this.continueLayer(KT, kT), this.wasActive || this.resume(lT.root, MT);
          else {
            const kT = !this.wasActive && !TT.wokeDevice,
              OT = "death" === this.layerKind || kT,
              yT = this.enterLayer(lT, KT);
            "popup" !== lT.layer.kind || lT !== cT || yT ? "menu" === lT.layer.kind && OT && "inGame" === fT.e.get("gameState") && !(0, yc.f)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = MT + Jl.b) : (this.pressGuardExtends = kT, this.pressGuardUntilMs = MT + (kT ? Jl.b : OT ? 500 : 250))
          }
        } else this.wasActive || this.resume(lT.root, MT);
        if (this.layerKind = lT.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), TT.wokeDevice && this.focusPointedStop(lT.root), this.validateFocus(lT, MT), MT < this.pressGuardUntilMs && this.pressGuardExtends && (TT.wasPressed((0, IT.j)("menuConfirm")) || TT.wasPressed((0, IT.j)("menuBack"))) && (this.pressGuardUntilMs = MT + Jl.b), MT >= this.pressGuardUntilMs && this.handleButtons(TT, lT)) return;
        const OT = "hybrid" === Dl();
        if (OT && (TT => {
            const kT = Cl();
            return kT !== Sl && (Sl = kT, Ql.lock()), Ql.update(TT, (0, CT.g)().moveDeadzone)
          })(TT.leftStick)) return yT = this.getHandoff(), Nl = jl(yT), tl = Cl(), void AT.d.handOffHeldInput();
        var yT;
        this.handleDirections(TT, lT, MT, !OT), this.handleScroll(TT, lT)
      }
      findOpenDropdown(TT) {
        const kT = TT.root.querySelector(gl);
        if (!kT || !(0, qT.l)(kT)) return null;
        let cT = this.dropdownLayers.get(kT);
        return cT || (this.dropdownLayerCounter++, cT = {
          id: `dropdown-${this.dropdownLayerCounter}`,
          kind: TT.layer.kind,
          getRoot: () => kT,
          close: () => {
            (0, UT.i)(kT)
          },
          memoryKey: null
        }, this.dropdownLayers.set(kT, cT)), {
          layer: cT,
          root: kT,
          order: TT.order
        }
      }
      focusPointedStop(TT) {
        const kT = (0, jT.b)(),
          cT = kT ? document.elementFromPoint(kT.x, kT.y) : null;
        if (!cT || !TT.contains(cT)) return;
        const lT = il(cT, TT, this.getEnabledCandidates(TT));
        lT && this.setFocus(lT, {
          scroll: !1,
          byUser: !0
        })
      }
      enterLayer(TT, kT) {
        const cT = this.beginLayer(TT, kT),
          lT = Fl();
        return lT && ql(lT, TT.root) ? (this.takeOver(TT.root, lT, this.enteredLayerAtMs), cT) : (this.restoreLayerFocus(TT.root, cT), cT)
      }
      beginLayer(TT, kT) {
        return this.layerKey = kT, this.layerRoot = TT.root, this.lastActivatedKey = null, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoreOnFocusLoss = !1, this.retryMove = null, this.pendingFocus = null, this.confirmPressedOn = null, this.lastRefocusCheckMs = -1 / 0, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.enteredLayerAtMs = performance.now(), this.lastFocusedCentre = null, this.memory.enter(kT)
      }
      restoreLayerFocus(TT, kT) {
        const cT = kT && this.layerKey ? this.findRemembered(TT, this.layerKey) : null;
        this.restoredFromMemory = null !== cT, this.setFocus(null !== cT && void 0 !== cT ? cT : this.pickInitial(TT, {
          waitForContent: !0
        }))
      }
      continueLayer(TT, kT) {
        this.layerKey = TT;
        const cT = this.memory.enter(TT);
        this.restoreOnFocusLoss = cT, this.movedInLayer && !cT && this.rememberFocus(kT)
      }
      resume(TT, kT) {
        var cT;
        const lT = Fl();
        lT && ql(lT, TT) ? this.takeOver(TT, lT, kT) : null !== (cT = this.focused) && void 0 !== cT && cT.isConnected && nl(null, this.focused, (0, UT.w)(this.focused))
      }
      pickPreferred(TT) {
        var kT;
        return null !== (kT = this.layerKey ? this.findRemembered(TT, this.layerKey) : null) && void 0 !== kT ? kT : this.pickInitial(TT, {
          waitForContent: !0
        })
      }
      findRemembered(TT, kT) {
        return this.memory.has(kT) ? this.memory.recall(kT, this.getEnabledCandidates(TT)) : null
      }
      getHandoff() {
        var TT, kT, cT;
        const lT = null !== (TT = this.focused) && void 0 !== TT && TT.isConnected ? this.focused : null,
          MT = null !== (kT = this.layerRoot) && void 0 !== kT && kT.isConnected ? this.layerRoot : null;
        return {
          point: lT ? (0, UT.w)(lT) : null !== (cT = this.lastFocusedCentre) && void 0 !== cT ? cT : this.getLayerStartPoint(MT),
          element: lT,
          direction: null
        }
      }
      getLayerStartPoint(TT) {
        if (!TT) return {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2
        };
        const kT = this.pickInitial(TT, {
          includeDisabled: !0
        });
        return (0, UT.w)(null !== kT && void 0 !== kT ? kT : TT)
      }
      takeOver(TT, kT, cT) {
        const {
          element: lT,
          direction: MT,
          point: KT
        } = kT, OT = lT instanceof HTMLElement && (0, qT.m)(lT, TT) ? lT : null;
        if (!MT) {
          const kT = this.focused;
          return OT ? this.setFocus(OT, {
            scroll: !1,
            byUser: !0
          }) : this.focusNearest(TT, KT), void(this.focused && this.focused === kT && this.focused.isConnected && nl(null, this.focused, (0, UT.w)(this.focused)))
        }
        if (this.dpadRepeats.get(MT).update(!0, cT), OT) return this.setFocus(OT, {
          scroll: !1,
          byUser: !0
        }), void this.move(TT, MT, cT, !0);
        const yT = this.getEnabledCandidates(TT),
          fT = yT.map(pl),
          xT = Dc(new DOMRect(KT.x, KT.y, 0, 0), fT, MT),
          IT = xT >= 0 ? xT : wc(KT, fT);
        this.setFocus(IT >= 0 ? yT[IT] : this.pickInitial(TT), {
          byUser: !0
        })
      }
      focusNearest(TT, kT) {
        const cT = this.getEnabledCandidates(TT),
          lT = wc(kT, cT.map(pl));
        this.setFocus(lT >= 0 ? cT[lT] : this.pickInitial(TT), {
          byUser: !0
        })
      }
      pickDefault(TT) {
        let {
          includeDisabled: kT = !1,
          exclude: cT = null
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const lT = [...TT.querySelectorAll(Rl)].filter((lT => (null === cT || void 0 === cT || !cT.has(lT)) && (kT ? (0, qT.p)(lT, TT) : (0, qT.m)(lT, TT)))),
          MT = El(lT.map(Gl));
        return MT >= 0 ? lT[MT] : null
      }
      pickNewAreaStart(TT, kT) {
        const cT = [...TT.querySelectorAll(Bl)].filter(qT.l);
        for (const lT of [...(0, qT.f)(TT), ...cT]) {
          if (kT.has(lT)) continue;
          const TT = this.getEnabledCandidates(lT),
            cT = El(TT.map(Gl));
          if (cT >= 0) return TT[cT]
        }
        return null
      }
      pickInitial(TT) {
        let {
          includeDisabled: kT = !1,
          waitForContent: cT = !1,
          enteredAtMs: lT = this.enteredLayerAtMs
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const MT = this.pickDefault(TT, {
          includeDisabled: kT
        });
        if (MT) return MT;
        const KT = TT => kT ? (0, qT.e)(TT) : this.getEnabledCandidates(TT);
        let OT = [];
        for (const CT of (0, qT.f)(TT))
          if (OT = KT(CT), OT.length > 0) break;
        if (0 === OT.length) {
          if (cT && performance.now() - lT < 1e4 && (0, qT.k)(TT)) return null;
          OT = KT(TT)
        }
        const yT = OT.map(pl),
          fT = GT(null),
          xT = OT.filter(((TT, kT) => VT(yT[kT], fT))),
          IT = xT.length > 0 ? xT : OT,
          AT = El(IT.map(Gl));
        return AT >= 0 ? IT[AT] : null
      }
      validateFocus(TT, kT) {
        if (this.pendingFocus) {
          var cT, lT;
          const MT = this.pendingFocus.find();
          if (MT && (0, qT.m)(MT, TT.root)) return this.pendingFocus = null, void this.setFocus(MT, {
            byUser: !0
          });
          kT > this.pendingFocus.untilMs && (null === (cT = (lT = this.pendingFocus).holdWhile) || void 0 === cT || !cT.call(lT)) && (this.pendingFocus = null)
        }
        const MT = this.focused,
          KT = !!MT && (0, qT.m)(MT, TT.root);
        if (!(!KT && MT && MT === this.lastActivated && kT - this.lastActivatedAtMs < 5e3 && TT.root.contains(MT) && (0, qT.l)(MT) && (0, qT.n)(MT))) {
          if (!KT && this.restoreOnFocusLoss && this.layerKey) return this.restoreOnFocusLoss = !1, this.movedInLayer = !1, this.scrolledInLayer = !1, this.enteredLayerAtMs = kT, void this.restoreLayerFocus(TT.root, !0);
          if ((!KT || !this.movedInLayer && !this.scrolledInLayer) && !(kT - this.lastRefocusCheckMs < (KT ? 200 : 50)))
            if (this.lastRefocusCheckMs = kT, KT) {
              const cT = kT - this.enteredLayerAtMs < 15e3 ? this.pickPreferred(TT.root) : null,
                lT = null !== cT && void 0 !== cT ? cT : this.restoredFromMemory ? null : this.pickDefault(TT.root);
              lT && lT !== MT && this.setFocus(lT)
            } else {
              if (this.lastFocusedCentre && this.movedInLayer) {
                const kT = this.pendingFocus;
                return this.focusNearest(TT.root, this.lastFocusedCentre), void(this.pendingFocus = kT)
              }
              this.setFocus(this.pickPreferred(TT.root))
            }
        }
      }
      handleButtons(TT, kT) {
        if (TT.wasPressed((0, IT.j)("menuToggleCursor"))) return al(this.getHandoff()), !0;
        if (TT.wasPressed((0, IT.j)("menuBack"))) {
          const TT = (0, UT.i)(kT.root);
          return TT ? this.setFocus(TT, {
            byUser: !0
          }) : gc(this, kT.root) || ((0, UT.c)(kT.root) ? this.returnToOpener(kT.root) : this.backToStrip(kT.root) || Al()), !0
        }
        const cT = (0, IT.j)("menuConfirm");
        var lT, MT;
        TT.wasPressed(cT) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (lT = null === (MT = this.focused) || void 0 === MT ? void 0 : MT.getAttribute("data-pad-repeat")) && void 0 !== lT ? lT : null, this.confirmRepeated = TT.wokeDevice, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now()));
        if (TT.wasReleased(cT)) {
          const TT = this.confirmPressedOn;
          if (this.confirmPressedOn = null, TT && !this.confirmRepeated && TT === this.focused && TT.isConnected && !(0, qT.n)(TT)) {
            const cT = TT.matches("[data-pad-tab]") ? TT.closest(Yl) : null;
            cT ? this.enterTab(TT, cT, kT.root, performance.now()) : this.activate(TT)
          }
          return !0
        }
        return this.repeatConfirm(TT, cT), sc(this, TT, kT)
      }
      repeatConfirm(TT, kT) {
        const cT = this.confirmPressedOn;
        cT && null !== this.confirmRepeatKey && TT.isHeld(kT) && (cT === this.focused && cT.isConnected && !(0, qT.n)(cT) && cT.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? cT.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.confirmRepeated = !0, this.activate(cT)) : this.confirmRepeatKey = null)
      }
      backToStrip(TT) {
        const kT = this.focused;
        if (!(0, CT.g)().menuBackToCategories) return !1;
        const cT = null !== kT && void 0 !== kT && kT.isConnected ? this.tabStripNav.backToStrip(kT, this.getEnabledCandidates(TT), TT) : null;
        return cT && this.setFocus(cT, {
          byUser: !0
        }), null !== cT
      }
      returnToOpener(TT) {
        const kT = this.lastActivatedKey;
        kT && (this.lastActivatedKey = null, this.focusWhenFound((() => {
          var cT;
          return null !== (cT = this.getEnabledCandidates(TT).find((TT => (0, UT.y)(TT) === kT))) && void 0 !== cT ? cT : null
        })))
      }
      activate(TT) {
        var kT;
        if ((0, ol.c)(TT) || (0, UT.C)(TT)) return;
        this.lastActivatedKey = null !== (kT = (0, UT.y)(TT)) && void 0 !== kT ? kT : this.lastActivatedKey, this.lastActivated = TT, this.lastActivatedAtMs = performance.now(), this.rememberFocus(TT);
        const cT = this.layerRoot;
        if (cT) {
          const kT = new Set(cT.querySelectorAll(Rl)),
            lT = new Set(cT.querySelectorAll(`[data-pad-initial-area], ${Bl}`)),
            MT = this.lastActivatedAtMs;
          this.focusWhenFound((() => {
            var MT;
            return (0, qT.m)(TT, cT) ? null : null !== (MT = this.pickDefault(cT, {
              exclude: kT
            })) && void 0 !== MT ? MT : this.pickNewAreaStart(cT, lT)
          }), 5e3, (() => TT.isConnected && (0, qT.n)(TT) && performance.now() - MT < 6e4))
        }(0, UT.b)(TT), (0, UT.f)(TT)
      }
      handleDirections(TT, kT, cT, lT) {
        const MT = Hc(kT.layer.kind) ? (0, IT.j)("chat") : null;
        for (const yT of vT.D) {
          this.dpadRepeats.get(yT).update(TT.isHeld(yT), cT) && (yT !== MT || TT.wasPressed(yT)) && this.move(kT.root, yT, cT, !0)
        }
        const KT = lT ? (0, vT.m)(TT.leftStick, (0, CT.g)().moveDeadzone) : {
            x: 0,
            y: 0
          },
          OT = this.stickRepeat.update((0, vT.jb)(KT), cT);
        if (OT && this.move(kT.root, OT, cT, !0), this.retryMove && cT >= this.retryMove.atMs) {
          const {
            direction: TT
          } = this.retryMove;
          this.retryMove = null, this.move(kT.root, TT, cT, !1)
        }
      }
      move(TT, kT, cT, lT) {
        var MT;
        let KT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.pendingFocus && this.pendingFocus === (null === (MT = this.tabOpenWait) || void 0 === MT ? void 0 : MT.wait) && kT === this.tabOpenWait.direction) return;
        this.pendingFocus = null;
        const OT = this.focused;
        if (!OT || !OT.isConnected) {
          const kT = this.pickInitial(TT);
          return void(kT && this.setFocus(kT, {
            byUser: !0
          }))
        }
        const yT = "Left" === kT || "Right" === kT,
          fT = yT ? (0, ol.c)(OT) : null;
        if (fT) return void fT.adjust("Left" === kT ? -1 : 1);
        const xT = TT => null !== TT.closest("[data-pad-friends-column]"),
          IT = xT(OT),
          AT = pl(OT),
          CT = yT || OT.closest(Yl) ? null : (TT => {
            const kT = new Map;
            return cT => {
              const lT = cT.closest(Yl);
              if (!lT) return !1;
              let MT = kT.get(lT);
              if (void 0 === MT) {
                const cT = pl(lT);
                MT = Sc(TT, cT) && (cT.right <= TT.left || cT.left >= TT.right), kT.set(lT, MT)
              }
              return MT
            }
          })(AT),
          jT = null !== OT.closest(Ul),
          vT = this.getEnabledCandidates(TT).filter((TT => TT !== OT && (yT || xT(TT) === IT) && !(null !== CT && void 0 !== CT && CT(TT)) && (jT || !TT.closest(Ul)))),
          tT = vT.map(pl),
          hT = bT(OT, "y", TT),
          NT = GT(hT);
        if (!KT && !VT(AT, NT)) {
          const TT = vT.filter(((TT, kT) => VT(tT[kT], NT)));
          if (TT.length > 0) {
            const kT = {
              x: NT.left + NT.width / 2,
              y: NT.top + NT.height / 2
            };
            return void this.setFocus(TT[wc(kT, TT.map(pl))], {
              byUser: !0
            })
          }
        }
        const QT = yT ? ((TT, kT, cT) => {
            const lT = pl(TT),
              MT = TT.closest(Yl),
              KT = MT ? pl(MT) : null;
            return kT.map(((kT, OT) => {
              const yT = cT[OT];
              if (yT.bottom > lT.top && yT.top < lT.bottom) return !0;
              const fT = kT.closest(Yl);
              if (MT && KT) return fT !== MT && (null !== fT || yT.bottom <= KT.top || yT.top >= KT.bottom);
              if (fT) return !Sc(lT, pl(fT));
              let xT = TT;
              for (let cT = TT.parentElement; cT && !cT.contains(kT); cT = cT.parentElement) xT = cT;
              const IT = pl(xT);
              return yT.right > IT.left && yT.left < IT.right
            }))
          })(OT, vT, tT) : void 0,
          ST = yT && !OT.closest(Yl) ? (TT => TT.map((TT => !TT.closest(el))))(vT) : void 0,
          DT = ((TT, kT) => {
            const cT = [];
            for (let MT = TT; MT; MT = MT.parentElement) cT.push(MT);
            const lT = new Map;
            return cT.forEach(((TT, kT) => {
              lT.set(TT, cT.length - 1 - kT)
            })), kT.map((TT => {
              for (let kT = TT; kT; kT = kT.parentElement) {
                const TT = lT.get(kT);
                if (void 0 !== TT) return TT
              }
              return -1
            }))
          })(OT, vT),
          aT = yT ? "x" : "y",
          FT = bT(OT, aT, TT);
        let rT = Dc(AT, tT, kT, DT, QT, ST);
        if (rT >= 0 && FT && !FT.contains(vT[rT])) {
          const TT = vT.flatMap(((TT, kT) => FT.contains(TT) ? [kT] : [])),
            cT = kT => kT && TT.map((TT => kT[TT])),
            lT = Dc(AT, TT.map((TT => tT[TT])), kT, TT.map((TT => DT[TT])), cT(QT), cT(ST));
          rT = lT >= 0 ? TT[lT] : rT
        }
        if (rT >= 0) return void this.moveTo(OT, vT[rT], vT, TT, kT, KT);
        if (!lT) return;
        const PT = "Right" === kT || "Down" === kT ? 1 : -1;
        if (FT && HT(FT, aT, PT)) {
          const TT = "y" === aT ? FT.clientHeight : FT.clientWidth;
          eT(FT, aT, PT * TT * .5), this.retryMove = {
            direction: kT,
            atMs: cT + 80
          }
        }
      }
      moveTo(TT, kT, cT, lT, MT, KT) {
        const OT = this.tabStripNav.findTabContent(TT, kT, cT);
        OT && "true" !== TT.dataset.padSelected ? this.openTab(TT, OT, lT, MT) : KT && !OT || this.setFocus(this.tabStripNav.redirect(TT, kT, cT, lT), {
          byUser: !0
        })
      }
      openTab(TT, kT, cT, lT) {
        const MT = kT.parentElement;
        (0, UT.b)(TT), this.focusWhenFound((() => "true" !== TT.dataset.padSelected ? null : kT.isConnected ? this.tabStripNav.pickContentStart(kT, this.getEnabledCandidates(cT), cT) : MT ? this.tabStripNav.pickReplacedContentStart(TT, MT, this.getEnabledCandidates(cT), cT) : null), 3e3), this.tabOpenWait = {
          wait: this.pendingFocus,
          direction: lT
        }
      }
      enterTab(TT, kT, cT, lT) {
        this.move(cT, (TT => {
          const kT = [...TT.querySelectorAll(ul)].filter((kT => kT.closest(Zl) === TT));
          if (kT.length >= 2) {
            const TT = kT[0].getBoundingClientRect(),
              cT = kT[1].getBoundingClientRect();
            return Math.abs(cT.top - TT.top) > Math.abs(cT.left - TT.left) ? "Right" : "Down"
          }
          const cT = TT.getBoundingClientRect();
          return cT.height > cT.width ? "Right" : "Down"
        })(kT), lT, !1, !0), this.focused !== TT || this.pendingFocus || this.activate(TT)
      }
      handleScroll(TT, kT) {
        const cT = (0, vT.m)(TT.rightStick, .2);
        if (0 === cT.x && 0 === cT.y) return void(this.scrollRemainder = {
          x: 0,
          y: 0
        });
        const lT = TT.dtMs / 1e3;
        for (const KT of ["x", "y"]) {
          var MT;
          const TT = cT[KT];
          if (0 === TT) continue;
          const OT = null !== (MT = bT(this.focused, KT, kT.root)) && void 0 !== MT ? MT : JT(kT.root, KT);
          if (!OT) continue;
          const yT = Math.sign(TT) * TT * TT * 1500 * lT + this.scrollRemainder[KT],
            fT = Math.trunc(yT);
          this.scrollRemainder[KT] = yT - fT, 0 !== fT && (eT(OT, KT, fT), this.scrolledInLayer = !0)
        }
      }
    };
    var TM = cT(8236);
    var kM = cT(8754);
    const cM = {
        duration: 80,
        strongMagnitude: .2,
        weakMagnitude: .2,
        needsPadInUse: !1
      },
      lM = {
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
          ...cM,
          minIntervalMs: 1e3
        },
        preview: {
          ...cM,
          minIntervalMs: 0
        }
      };
    const MM = new class {
        constructor(TT) {
          this.deps = TT, this.lastPlayedMs = {}, this.loggedFailure = !1, this.logFailure = TT => {
            this.loggedFailure || (this.loggedFailure = !0, console.warn("Controller vibration failed; further failures are not logged.", TT))
          }
        }
        play(TT, kT) {
          const cT = lM[TT];
          if (!this.deps.isVibrationOn() || cT.needsPadInUse && !this.deps.isPadInUse()) return !1;
          const lT = this.lastPlayedMs[TT];
          if (void 0 !== lT && kT - lT < cT.minIntervalMs) return !1;
          const MT = this.deps.getActuator();
          if (!MT) return !1;
          this.lastPlayedMs[TT] = kT;
          const {
            duration: KT,
            strongMagnitude: OT,
            weakMagnitude: yT
          } = cT;
          try {
            MT.playEffect("dual-rumble", {
              duration: KT,
              strongMagnitude: OT,
              weakMagnitude: yT
            }).catch(this.logFailure)
          } catch (fT) {
            this.logFailure(fT)
          }
          return !0
        }
      }({
        getActuator: () => (TT => {
          const kT = null === TT || void 0 === TT ? void 0 : TT.vibrationActuator;
          return "function" === typeof(null === kT || void 0 === kT ? void 0 : kT.playEffect) ? kT : null
        })(OT.e.getActiveGamepad()),
        isVibrationOn: () => (0, CT.g)().vibration,
        isPadInUse: jT.i
      }),
      KM = TT => {
        MM.play(TT, performance.now())
      };
    var OM = cT(8240),
      yM = cT(2873),
      fM = cT(133),
      xM = cT(47),
      IM = cT(651);
    class AM {
      constructor(TT) {
        this.deps = TT
      }
      check() {
        let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const kT = this.deps.isPadActive() ? this.deps.getPadFamily() : null;
        if (!kT) return "skipped";
        const cT = TT ? this.deps.getVisitId() : this.deps.peekVisitId();
        return null === cT || this.deps.readReportedVisitId() === cT ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(cT), this.deps.Yj(kT, this.deps.getInputType()), "reported") : "notReady"
      }
    }
    const CM = "controllerUsageReportedVisit";
    var jM = cT(1363),
      vM = cT(1741),
      tM = cT(636),
      hM = cT(1461),
      NM = cT(1261);
    const QM = TT => ({
        translationKey: `controller:${TT}`
      }),
      SM = {
        A: "A",
        B: "B",
        X: "X",
        Y: "Y",
        LB: "LB",
        RB: "RB",
        LT: "LT",
        RT: "RT",
        View: QM("padButtonView"),
        Menu: QM("padButtonMenu"),
        LS: "L3",
        RS: "R3",
        Up: QM("padButtonDpadUp"),
        Down: QM("padButtonDpadDown"),
        Left: QM("padButtonDpadLeft"),
        Right: QM("padButtonDpadRight"),
        Home: QM("padButtonHome"),
        LeftStick: QM("padButtonLeftStick"),
        RightStick: QM("padButtonRightStick")
      },
      DM = {
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
          View: QM("padButtonCreate"),
          Menu: QM("padButtonOptions")
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
      aM = (TT, kT) => {
        var cT;
        const lT = null !== (cT = DM[TT][kT]) && void 0 !== cT ? cT : SM[kT];
        return "string" === typeof lT ? lT : (0, MT.w)(NM.f.get().getCurrentLanguageCode(), lT.translationKey)
      },
      FM = TT => {
        let {
          glyph: kT,
          family: cT,
          className: lT
        } = TT;
        const MT = (0, jT.x)(),
          KT = null !== cT && void 0 !== cT ? cT : MT,
          OT = (0, OM.f)(KT, kT);
        return (0, XT.jsx)("span", {
          className: uT()("ControllerGlyph", lT),
          role: "img",
          "aria-label": aM(KT, kT),
          style: {
            "--pad-glyph-mask": `url(${OT})`,
            "--pad-glyph-aspect": (0, OM.c)(KT, kT)
          }
        })
      };
    var rM = cT(1921);
    const PM = TT => {
      let {
        action: kT
      } = TT;
      const {
        t: cT
      } = (0, MT.B)();
      switch (kT.kind) {
        case "reload":
          return (0, XT.jsx)("span", {
            children: cT("controller:gameplayReload")
          });
        case "specialAction":
          return null;
        case "customButton":
          return (0, XT.jsx)(rM.b, {
            text: kT.description ? [{
              icon: kT.icon
            }, ` ${kT.description}`] : [{
              icon: kT.icon
            }]
          });
        case "touchButton":
          return (0, XT.jsx)(rM.b, {
            text: kT.label
          })
      }
    };
    var wM = cT(8762);
    const mM = TT => {
      let {
        hold: kT
      } = TT;
      return (0, XT.jsx)("div", {
        className: "DropStackFillTrack",
        style: {
          "--pad-drop-stack-hold": `${kT.holdMs}ms`
        },
        children: (0, XT.jsx)("div", {
          className: "DropStackFillBar"
        })
      }, kT.id)
    };
    var bM = cT(8784),
      zM = cT(8791),
      JM = cT(8796),
      oM = cT(8777);
    const HM = () => {
        const {
          gameState: TT
        } = (0, fT.n)(["gameState"]), kT = (0, jT.v)(), [lT, MT] = (0, ET.useState)(!1), [KT, OT] = (0, ET.useState)(!1);
        return (0, ET.useEffect)((() => {
          "inGame" === TT && MT(!0)
        }), [TT]), (0, ET.useEffect)((() => {
          if (!lT) return;
          let TT = null,
            kT = !1;
          return (tM.x ? Promise.all([cT.e(70), cT.e(261), cT.e(199), cT.e(218), cT.e(217), cT.e(85)]).then((() => cT(40167))).then((TT => TT.startWasmPadGameplay)) : Promise.all([cT.e(70), cT.e(227), cT.e(226), cT.e(95), cT.e(73), cT.e(72), cT.e(71), cT.e(219), cT.e(182), cT.e(223), cT.e(75), cT.e(196), cT.e(216), cT.e(94), cT.e(220), cT.e(84), cT.e(235), cT.e(113), cT.e(236), cT.e(74), cT.e(155), cT.e(218), cT.e(188)]).then((() => cT(40304))).then((TT => TT.startPadGameplay))).then((cT => {
            kT || (TT = cT())
          })).catch((TT => {
            console.error("Pad gameplay failed to load", TT), kT || OT(!0)
          })), () => {
            var cT;
            kT = !0, null === (cT = TT) || void 0 === cT || cT()
          }
        }), [lT]), (0, ET.useEffect)((() => {
          KT && kT && (OT(!1), jM.NotificationProvider.showPromptPopup({
            title: "controller:gameplayLoadFailedTitle",
            subtitle: "controller:gameplayLoadFailedSubtitle",
            confirmText: "settingsMenu:reloadPagePopupConfirm",
            confirmTooltip: "",
            cancelText: "general:cancel",
            cancelTooltip: ""
          }).getResult().then((TT => {
            !0 === TT && (0, vM.reloadBloxd)()
          })))
        }), [KT, kT]), (0, XT.jsxs)(XT.Fragment, {
          children: [(0, XT.jsx)(eM, {}), (0, XT.jsx)(GM, {}), (0, XT.jsx)(VM, {})]
        })
      },
      eM = () => {
        const {
          t: TT
        } = (0, MT.B)(), kT = (0, jT.v)(), {
          gameState: cT,
          isUiHidden: lT
        } = (0, fT.n)(["gameState", "isUiHidden"]), {
          hideButtonHints: KT
        } = (0, CT.o)(), OT = (0, wM.f)(), yT = (0, wM.i)(), [xT, AT] = (0, ET.useState)(JM.b);
        return (0, hM.g)(oM.q, AT), !kT || KT || lT || "inGame" !== cT || !OT && !xT ? null : (0, XT.jsxs)("div", {
          className: "PadActionHint SmallTextBold",
          children: [OT && (0, XT.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, XT.jsx)(FM, {
              glyph: (0, IT.j)("actionButton")
            }), (0, XT.jsx)(PM, {
              action: OT
            }), yT && (0, XT.jsx)("span", {
              className: "PadActionHintMore",
              children: TT("controller:gameplayActionWheelHint")
            })]
          }), xT && (0, XT.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, XT.jsx)(FM, {
              glyph: (0, IT.j)("pickBlock")
            }), (0, XT.jsx)("span", {
              children: TT("controller:gameplayPickBlock")
            })]
          })]
        })
      },
      GM = () => {
        const {
          t: TT
        } = (0, MT.B)(), kT = (0, jT.v)(), {
          gameState: cT,
          isUiHidden: lT
        } = (0, fT.n)(["gameState", "isUiHidden"]), [KT, OT] = (0, ET.useState)(bM.b);
        return (0, hM.g)(oM.n, OT), kT && !lT && "inGame" === cT && KT ? (0, XT.jsxs)("div", {
          className: "PadDropStackFill SmallTextBold",
          children: [(0, XT.jsx)("span", {
            children: TT("controller:gameplayDropStack")
          }), (0, XT.jsx)(mM, {
            hold: KT
          })]
        }) : null
      },
      VM = () => {
        const {
          t: TT
        } = (0, MT.B)(), kT = (0, jT.v)(), {
          gameState: cT,
          isUiHidden: lT
        } = (0, fT.n)(["gameState", "isUiHidden"]), {
          hideButtonHints: KT
        } = (0, CT.o)(), [OT, yT] = (0, ET.useState)(zM.b);
        return (0, hM.g)(oM.j, yT), kT && !lT && "inGame" === cT && OT ? (0, XT.jsxs)("div", {
          className: "PadAttackLatchedHint SmallTextBold",
          children: [!KT && (0, XT.jsx)(FM, {
            glyph: (0, IT.j)("attack")
          }), (0, XT.jsx)("span", {
            children: TT("controller:gameplayAttackLatched")
          })]
        }) : null
      };
    var EM = cT(8802),
      ZM = cT(1974),
      uM = cT(2462),
      XM = cT(8219);
    const dM = TT => TT && !(0, EM.b)(ZM.b.get("shopInfo")),
      LM = () => {
        const TT = "inGame" === (0, fT.n)(["gameState"]).gameState;
        return (0, uM.e)("shopInfo", (() => {
          (0, XM.h)(dM(TT))
        })), (0, ET.useEffect)((() => {
          (0, XM.h)(dM(TT))
        }), [TT]), null
      },
      RM = () => {
        const {
          t: TT
        } = (0, MT.B)(), {
          hideButtonHints: kT
        } = (0, CT.o)();
        (0, jT.x)();
        const cT = (0, Xk.l)();
        return (0, ET.useEffect)((() => (() => {
          const TT = AT.d.register({
              name: "inventory",
              isActive: Kc.isActive,
              onFrame: Kc.onFrame,
              onDeactivate: Kc.onDeactivate,
              wakePressActs: Kc.wakePressActs
            }),
            kT = TT => {
              Kc.noteRealPointer(TT), Kc.shouldBlockRealPointer(TT) && TT.stopPropagation()
            };
          for (const OT of Oc) window.addEventListener(OT, kT, !0);
          const cT = (0, iT.l)((() => {
              "inventory" !== AT.d.getActiveConsumerName() && Kc.forgetSurface()
            })),
            lT = TT => {
              const kT = TT.target;
              (0, jT.i)() && (0, WT.d)(kT) && kT.closest(ak) && (0, iT.h)() && (0, iT.q)(kT)
            };
          document.addEventListener("focusout", lT, !0);
          const {
            invalidate: MT,
            onScroll: KT
          } = Kc.targets;
          return document.addEventListener("scroll", KT, !0), window.addEventListener("resize", MT), () => {
            TT(), cT();
            for (const TT of Oc) window.removeEventListener(TT, kT, !0);
            document.removeEventListener("scroll", KT, !0), document.removeEventListener("focusout", lT, !0), window.removeEventListener("resize", MT), Kc.targets.disconnect()
          }
        })()), []), (0, XT.jsxs)(XT.Fragment, {
          children: [(0, XT.jsx)(gT, {
            placer: Kc.ring,
            className: "InventorySlotCursorRing"
          }), cT.showing && !kT && (0, XT.jsx)("div", {
            className: "InventorySlotCursorHints SmallTextBold",
            children: pT(cT).map((kT => {
              let {
                actions: lT,
                labelKey: MT
              } = kT;
              return (0, XT.jsxs)("div", {
                className: "InventorySlotCursorHint",
                children: [lT.map((TT => (0, XT.jsx)(FM, {
                  glyph: (0, IT.j)(TT)
                }, TT))), (0, XT.jsx)("span", {
                  children: TT(`controller:${MT}`)
                }), "inventoryDrop" === MT && cT.dropStackHold && (0, XT.jsx)(mM, {
                  hold: cT.dropStackHold
                })]
              }, MT)
            }))
          })]
        })
      },
      gM = [{
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
      UM = TT => Array.from(TT).map((TT => ({
        type: "char",
        char: TT,
        width: 1
      }))),
      YM = function(TT) {
        return {
          type: "command",
          command: TT,
          width: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
        }
      },
      BM = [YM("page", 2), YM("otherPage"), YM("caretLeft"), YM("space", 3), YM("caretRight"), YM("close", 1.5), YM("submit", 1.5)],
      WM = [YM("page", 2), YM("otherPage"), YM("caretLeft"), YM("space", 2), YM("caretRight"), YM("newline"), YM("close", 1.5), YM("submit", 1.5)],
      nM = [
        [...UM("1234567890"), YM("backspace")], UM("qwertyuiop/"), UM("asdfghjkl'?"), [YM("shift", 2), ...UM("zxcvbnm,.")]
      ],
      pM = [
        [...UM("1234567890"), YM("backspace")], UM("!@#$%^&*()/"), UM('-_=+[]{};:"'), UM("~`|\\<>'\u20ac\xa3,.")
      ],
      iM = {
        letters: nM,
        accents: [
          [...UM("1234567890"), YM("backspace")], UM("\xe1\xe9\xed\xf3\xfa\xe0\xe8\xec\xf2\xf9\xf1"), UM("\xe2\xea\xee\xf4\xfb\xe4\xeb\xef\xf6\xfc\xe7"), [YM("shift", 2), ...UM("\xe3\xf5\xdf\u0153\u011f\u015f\u0131\xbf\xa1")]
        ],
        symbols: pM
      },
      qM = new Set(["de", "es", "fr", "it", "nl", "pt", "pt-BR", "tr", "vi"]),
      sM = (TT, kT) => "letters" === TT ? kT ? {
        page: "accents",
        otherPage: "symbols"
      } : {
        page: "symbols",
        otherPage: "accents"
      } : {
        page: "letters",
        otherPage: "accents" === TT ? "symbols" : "accents"
      },
      TK = function(TT, kT) {
        const cT = ((TT, kT) => [...iM[TT], kT ? WM : BM])(TT, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
        if (0 === kT) return cT;
        const lT = Math.min(2, kK(cT[0]) / kT);
        return [Array.from({
          length: kT
        }, ((TT, kT) => ({
          type: "phrase",
          phraseIndex: kT,
          width: lT
        }))), ...cT]
      },
      kK = TT => TT.reduce(((TT, kT) => TT + kT.width), 0),
      cK = TT => Math.max(...TT.map(kK)),
      lK = (TT, kT) => {
        const cT = TT[kT.row];
        let lT = (cK(TT) - kK(cT)) / 2;
        for (let MT = 0; MT < kT.col; MT++) lT += cT[MT].width;
        return lT + cT[kT.col].width / 2
      },
      MK = (TT, kT, cT) => {
        let lT = 0,
          MT = 1 / 0;
        for (let KT = 0; KT < TT[kT].length; KT++) {
          const OT = Math.abs(lK(TT, {
            row: kT,
            col: KT
          }) - cT);
          OT < MT - 1e-9 && (lT = KT, MT = OT)
        }
        return lT
      },
      KK = (TT, kT) => {
        const cT = Math.max(0, Math.min(TT.length - 1, kT.row));
        return {
          row: cT,
          col: Math.max(0, Math.min(TT[cT].length - 1, kT.col))
        }
      },
      OK = (TT, kT, cT) => "once" === TT && kT - cT <= 400 ? "caps" : "off" === TT ? "once" : "off",
      yK = (TT, kT) => "once" === TT && (TT => TT.toLowerCase() !== TT.toUpperCase())(kT) ? "off" : TT,
      fK = (TT, kT, cT) => {
        if ("symbols" === kT || "off" === cT) return TT;
        const lT = TT.toUpperCase();
        return 1 === lT.length ? lT : TT
      };
    var xK = cT(8677);
    const IK = ["controller:keyboardPhraseGg", "controller:keyboardPhraseHi", "controller:keyboardPhraseThanks", "controller:keyboardPhraseGl", "controller:keyboardPhraseBrb", "controller:keyboardPhraseYes", "controller:keyboardPhraseNo", "controller:keyboardPhraseHelp"];
    const AK = new class {
        constructor() {
          this.lastSendMs = -1 / 0
        }
        claim(TT) {
          return !(TT - this.lastSendMs < 2e3) && (this.lastSendMs = TT, !0)
        }
      },
      CK = {
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
      jK = ["KI", "nameTag"],
      vK = TT => {
        const kT = TT.target instanceof HTMLTextAreaElement && !jK.includes(TT.kind);
        return TK(TT.page, "chat" === TT.kind ? IK.length : 0, kT)
      },
      tK = TT => {
        const kT = TT.getBoundingClientRect(),
          cT = window.innerHeight,
          lT = kT.top + kT.height / 2 < cT / 2 ? "bottom" : "top",
          MT = "bottom" === lT ? cT - kT.bottom - 6 : kT.top - 6;
        return {
          placement: lT,
          maxHeightPx: Math.min(.46 * cT, Math.max(.3 * cT, MT))
        }
      },
      hK = TT => {
        (0, zc.e)(TT) ? (0, zc.c)().close(): (sl.noteChosenStop(TT), TT.blur())
      };
    class NK {
      constructor(TT) {
        this.host = TT, this.lastShiftPressMs = -1 / 0, this.phraseTexts = [], this.phrasesFill = !1
      }
      setPhraseRow(TT, kT) {
        this.phraseTexts = TT, this.phrasesFill = kT
      }
      pressKey(TT) {
        const kT = this.host.getState(),
          cT = vK(kT),
          lT = cT[TT.row][TT.col];
        this.host.setState({
          ...kT,
          focus: TT,
          preferredX: lK(cT, TT)
        }), "char" === lT.type ? this.typeChar(lT.char) : "command" === lT.type ? this.runCommand(lT.command) : this.sendPhrase(lT.phraseIndex)
      }
      runCommand(TT) {
        const kT = this.host.getState();
        switch (TT) {
          case "backspace":
            (0, WT.b)(kT.target);
            break;
          case "space":
            (0, WT.c)(kT.target, " ");
            break;
          case "newline":
            (0, WT.c)(kT.target, "\n");
            break;
          case "caretLeft":
            (0, WT.h)(kT.target, -1);
            break;
          case "caretRight":
            (0, WT.h)(kT.target, 1);
            break;
          case "shift": {
            const TT = performance.now();
            this.host.setState({
              ...kT,
              shift: OK(kT.shift, TT, this.lastShiftPressMs)
            }), this.lastShiftPressMs = TT;
            break
          }
          case "page":
          case "otherPage": {
            const cT = sM(kT.page, kT.accentsFirst)[TT];
            this.host.setState({
              ...kT,
              page: cT,
              focus: KK(vK({
                ...kT,
                page: cT
              }), kT.focus)
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
            (0, zc.e)(kT.target) && (0, zc.c)().selectNextChannel()
        }
      }
      submit() {
        var TT, kT;
        const {
          target: cT
        } = this.host.getState();
        this.host.hide(), (0, zc.e)(cT) ? (0, zc.c)().submit() : (sl.noteChosenStop(cT), null === (TT = (kT = (0, zc.d)(cT)).submit) || void 0 === TT || TT.call(kT), document.activeElement === cT && cT.blur())
      }
      close() {
        const {
          target: TT
        } = this.host.getState();
        this.host.hide(), hK(TT)
      }
      typeChar(TT) {
        const {
          target: kT,
          page: cT,
          shift: lT
        } = this.host.getState();
        (0, WT.c)(kT, fK(TT, cT, lT)), this.host.setState({
          ...this.host.getState(),
          shift: yK(lT, TT)
        })
      }
      sendPhrase(TT) {
        if (this.phrasesFill) {
          const {
            target: kT
          } = this.host.getState(), cT = this.phraseTexts[TT];
          cT && (kT.setSelectionRange(0, kT.value.length), (0, WT.c)(kT, cT))
        } else AK.claim(performance.now()) && (this.host.hide(), (0, zc.c)().sendLine(this.phraseTexts[TT]))
      }
    }
    var QK = cT(8691);
    const SK = {
        initialDelayMs: 380,
        intervalMs: 85
      },
      DK = {
        initialDelayMs: 400,
        intervalMs: 55
      };
    class aK {
      constructor(TT, kT) {
        this.host = TT, this.editor = kT, this.lastDirection = null, this.navRepeat = new vT.c((0, tT.e)(SK)), this.commandRepeats = new Map(gM.filter((TT => {
          let {
            repeats: kT
          } = TT;
          return kT
        })).map((TT => {
          let {
            command: kT
          } = TT;
          return [kT, (0, tT.e)(DK)]
        })))
      }
      reset() {
        this.navRepeat.reset();
        for (const TT of this.commandRepeats.values()) TT.reset()
      }
      onVisibleFrame(TT) {
        const kT = performance.now();
        for (const {
            command: MT,
            action: KT
          }
          of gM) {
          const cT = (0, IT.j)(KT),
            lT = this.commandRepeats.get(MT);
          if ((lT ? lT.update(TT.isHeld(cT), kT) : TT.wasPressed(cT)) && (this.editor.runCommand(MT), !this.host.getState().visible)) return
        }
        if (TT.wasPressed((0, IT.j)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
        const cT = this.readNavDirection(TT);
        this.lastDirection = cT;
        const lT = this.navRepeat.update(cT, kT);
        lT && this.navigate(lT)
      }
      onHiddenFrame(TT, kT) {
        var cT;
        if (TT.wasPressed((0, IT.j)("keyboardClose"))) return void hK(kT);
        const lT = (0, IT.j)("keyboardType");
        if (TT.wasPressed(lT)) return AT.d.consumeButton(lT), void this.host.open(kT);
        const MT = this.readNavDirection(TT),
          KT = null !== MT && MT !== this.lastDirection;
        if (this.lastDirection = MT, !KT || (0, zc.e)(kT)) return;
        const OT = (null === (cT = Il()) || void 0 === cT ? void 0 : cT.root.contains(kT)) || null !== kT.closest(".EntireInventoryWrapper");
        hK(kT), OT && AT.d.handOffHeldInput()
      }
      navigate(TT) {
        const kT = this.host.getState();
        if ("Up" === TT && 0 === kT.focus.row && "chat" === kT.kind) return (0, zc.c)().stepHistory(), void this.host.setState({
          ...kT
        });
        const cT = ((TT, kT, cT, lT) => {
          if ("Left" === cT || "Right" === cT) {
            const lT = TT[kT.row].length,
              MT = (kT.col + ("Right" === cT ? 1 : -1) + lT) % lT,
              KT = {
                row: kT.row,
                col: MT
              };
            return {
              pos: KT,
              preferredX: lK(TT, KT)
            }
          }
          const MT = (kT.row + ("Down" === cT ? 1 : -1) + TT.length) % TT.length;
          return {
            pos: {
              row: MT,
              col: MK(TT, MT, lT)
            },
            preferredX: lT
          }
        })(vK(kT), kT.focus, TT, kT.preferredX);
        this.host.setState({
          ...kT,
          focus: cT.pos,
          preferredX: cT.preferredX
        })
      }
      readNavDirection(TT) {
        for (const kT of vT.D)
          if (TT.isHeld(kT)) return kT;
        return (0, vT.jb)((0, vT.m)(TT.leftStick, (0, CT.g)().moveDeadzone))
      }
    }
    const FK = ["Up", "Down", "Left", "Right"],
      rK = new Set(["CapsLock", "Control", "Fn", "FnLock", "Hyper", "NumLock", "ScrollLock", "Shift", "Super"]);
    const PK = new class {
      constructor() {
        this.state = CK, this.listeners = new Set, this.ownedField = null, this.pendingChatInput = null, this.pendingChatTimeout = 0, this.savedInputMode = null, this.editor = new NK(this), this.padInput = new aK(this, this.editor)
      }
      getState() {
        return this.state
      }
      setState(TT) {
        const kT = TT.visible !== this.state.visible;
        this.state = TT;
        for (const cT of this.listeners) cT();
        kT && xT.k.nt(QK.e, TT.visible)
      }
      subscribe(TT) {
        return this.listeners.add(TT), () => {
          this.listeners.delete(TT)
        }
      }
      install() {
        const TT = AT.d.register({
            name: "keyboard",
            isActive: () => this.state.visible || (0, WT.d)(document.activeElement),
            onFrame: TT => {
              this.onFrame(TT)
            },
            onDeactivate: () => {
              this.padInput.reset()
            },
            wakePressActs: TT => FK.includes(TT) || !this.state.visible && TT === (0, IT.j)("keyboardType")
          }),
          kT = TT => {
            const kT = TT.target;
            (0, WT.d)(kT) && (kT === this.pendingChatInput || (0, jT.i)() ? this.open(kT) : this.state.visible && kT !== this.state.target && (this.ownedField = null, this.hide()))
          },
          cT = () => {
            setTimeout((() => {
              this.releaseLostField()
            }), 0)
          },
          lT = TT => {
            TT.isTrusted && this.state.visible && (TT => !TT.repeat && !rK.has(TT.key) && !(0, xK.d)(TT.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(TT.key))(TT) && this.hide()
          },
          MT = () => {
            this.state.visible && this.setState({
              ...this.state,
              ...tK(this.state.target)
            })
          };
        document.addEventListener("focusin", kT, !0), document.addEventListener("focusout", cT, !0), window.addEventListener("keydown", lT, !0), window.addEventListener("resize", MT);
        const KT = xT.k.subscribe(oM.b, (() => {
            this.openChat()
          })),
          OT = xT.k.subscribe(QK.g, (TT => {
            this.openForField(TT)
          }));
        return () => {
          TT(), document.removeEventListener("focusin", kT, !0), document.removeEventListener("focusout", cT, !0), window.removeEventListener("keydown", lT, !0), window.removeEventListener("resize", MT), xT.k.unsubscribe(KT), xT.k.unsubscribe(OT), this.clearPendingChat(), this.hide(), this.ownedField = null
        }
      }
      openChat() {
        const TT = (0, zc.c)();
        TT ? document.activeElement !== TT.input ? (this.clearPendingChat(), this.pendingChatInput = TT.input, this.pendingChatTimeout = window.setTimeout((() => {
          this.pendingChatInput = null
        }), 250), TT.open()) : this.open(TT.input) : console.warn("controllerOpenChat with no chat mounted")
      }
      openForField(TT) {
        (0, WT.d)(TT) ? (document.activeElement !== TT && TT.focus(), document.activeElement === TT && this.open(TT)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", TT)
      }
      open(TT) {
        var kT;
        if (this.clearPendingChat(), this.ownedField = TT, this.state.visible && this.state.target === TT) return;
        this.restoreInputMode(), (0, WT.j)(TT), this.savedInputMode = TT.getAttribute("inputmode"), TT.setAttribute("inputmode", "none");
        const cT = {
          ...CK,
          visible: !0,
          target: TT,
          kind: (0, zc.e)(TT) ? "chat" : null !== (kT = (0, zc.d)(TT).kind) && void 0 !== kT ? kT : null,
          accentsFirst: (lT = NM.f.get().getCurrentLanguageCode(), qM.has(lT)),
          ...tK(TT)
        };
        var lT;
        const MT = vK(cT),
          KT = ((TT, kT) => {
            for (let cT = 0; cT < TT.length; cT++) {
              const lT = TT[cT].findIndex((TT => "char" === TT.type && TT.char === kT));
              if (-1 !== lT) return {
                row: cT,
                col: lT
              }
            }
            return null
          })(MT, "q");
        this.padInput.reset(), this.setState({
          ...cT,
          focus: KT,
          preferredX: lK(MT, KT)
        })
      }
      hide() {
        this.state.visible && (this.restoreInputMode(), this.padInput.reset(), this.setState(CK))
      }
      onFrame(TT) {
        if (this.releaseLostField()) return;
        const kT = document.activeElement;
        this.state.visible ? this.padInput.onVisibleFrame(TT) : (0, WT.d)(kT) && this.padInput.onHiddenFrame(TT, kT)
      }
      releaseLostField() {
        const TT = this.ownedField;
        return !(null === TT || TT.isConnected && document.activeElement === TT) && (this.ownedField = null, this.hide(), !0)
      }
      clearPendingChat() {
        window.clearTimeout(this.pendingChatTimeout), this.pendingChatInput = null
      }
      restoreInputMode() {
        const {
          target: TT
        } = this.state;
        TT && (null === this.savedInputMode ? TT.removeAttribute("inputmode") : TT.setAttribute("inputmode", this.savedInputMode), this.savedInputMode = null)
      }
    };
    var wK = cT(8813);
    const mK = new Map(gM.map((TT => {
        let {
          command: kT,
          action: cT
        } = TT;
        return [kT, cT]
      }))),
      bK = {
        letters: "ABC",
        accents: "\xe0\xe9",
        symbols: "&123"
      },
      zK = {
        chat: "controller:keyboardTargetChat",
        sign: "controller:keyboardTargetSign",
        nameTag: "controller:keyboardTargetNameTag",
        book: "controller:keyboardTargetBook",
        KI: "controller:keyboardTargetBookTitle"
      },
      JK = TT => {
        const kT = (() => {
          const [, TT] = (0, ET.useReducer)((TT => TT + 1), 0);
          return TT
        })();
        (0, ET.useEffect)((() => {
          if (!TT) return;
          const cT = ["input", "select", "selectionchange", "keyup", "pointerup"];
          for (const MT of cT) TT.addEventListener(MT, kT);
          document.addEventListener("selectionchange", kT);
          const lT = new MutationObserver(kT);
          return lT.observe(TT, {
            attributeFilter: ["placeholder"]
          }), () => {
            lT.disconnect();
            for (const lT of cT) TT.removeEventListener(lT, kT);
            document.removeEventListener("selectionchange", kT)
          }
        }), [TT, kT])
      },
      oK = TT => {
        TT.preventDefault()
      },
      HK = TT => {
        "mouse" !== TT.pointerType && TT.preventDefault()
      },
      eK = () => {
        var TT;
        const {
          t: kT
        } = (0, MT.B)(), cT = (() => {
          const [TT, kT] = (0, ET.useState)(PK.getState());
          return (0, ET.useEffect)((() => PK.subscribe((() => {
            kT(PK.getState())
          }))), []), TT
        })(), lT = (0, jT.v)(), KT = (0, ET.useRef)(null);
        (0, CT.o)(), (0, jT.x)(), (0, ET.useEffect)((() => {
          const TT = PK.install(),
            kT = null;
          return () => {
            TT(), null === kT || void 0 === kT || kT()
          }
        }), []);
        const OT = (0, ET.useMemo)((() => IK.map((TT => kT(TT)))), [kT]),
          yT = cT.visible && "chat" === cT.kind ? cT.target : null;
        JK(yT);
        const fT = null !== (TT = null === yT || void 0 === yT ? void 0 : yT.value) && void 0 !== TT ? TT : "",
          xT = ((TT, kT, cT) => {
            if (!TT.startsWith("/")) return [];
            const lT = [];
            for (let MT = kT.length - 1; MT >= 0 && lT.length < cT; MT--) {
              const cT = kT[MT].trim();
              cT.startsWith(TT) && cT !== TT && !lT.includes(cT) && lT.push(cT)
            }
            return lT
          })(fT, fT.startsWith("/") ? (0, wK.e)() : [], IK.length),
          AT = fT.startsWith("/"),
          vT = AT ? IK.map(((TT, kT) => {
            var cT;
            return null !== (cT = xT[kT]) && void 0 !== cT ? cT : ""
          })) : OT;
        if ((0, ET.useEffect)((() => {
            PK.editor.setPhraseRow(vT, AT)
          })), (0, ET.useEffect)((() => {
            const TT = KT.current;
            if (TT) return TT.addEventListener("touchstart", oK, {
              passive: !1
            }), () => {
              TT.removeEventListener("touchstart", oK)
            }
          }), [cT.visible]), !cT.visible) return null;
        const tT = vK(cT),
          hT = cK(tT),
          NT = TT => "char" === TT.type ? fK(TT.char, cT.page, cT.shift) : "phrase" === TT.type ? vT[TT.phraseIndex] : (TT => {
            switch (TT) {
              case "backspace":
                return "\u232b";
              case "shift":
                return "caps" === cT.shift ? "\u21ea" : "\u21e7";
              case "page":
              case "otherPage":
                return bK[sM(cT.page, cT.accentsFirst)[TT]];
              case "space":
                return kT("controller:keyboardSpace");
              case "caretLeft":
                return "\u2190";
              case "caretRight":
                return "\u2192";
              case "newline":
                return "\u21b5";
              case "submit":
                return kT("chat" === cT.kind ? "controller:keyboardSend" : "controller:keyboardDone");
              case "close":
                return "\u2715";
              case "channel":
                return "\u21c4"
            }
          })(TT.command),
          QT = TT => {
            PK.editor.pressKey(TT)
          };
        return (0, XT.jsxs)("div", {
          ref: KT,
          className: uT()(zc.g, "top" === cT.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
            PadKeyboardMultiline: cT.target instanceof HTMLTextAreaElement
          }),
          style: {
            "--pad-keyboard-rows": tT.length,
            "--pad-keyboard-height": `${cT.maxHeightPx}px`
          },
          onPointerDown: HK,
          onMouseDown: oK,
          children: [(0, XT.jsx)(GK, {
            target: cT.target,
            label: cT.kind ? kT(zK[cT.kind]) : cT.target.placeholder || kT("controller:keyboardTargetText")
          }), (0, XT.jsx)("div", {
            className: "PadKeyboardRows",
            children: tT.map(((TT, kT) => (0, XT.jsx)("div", {
              className: uT()("PadKeyboardRow", {
                PadKeyboardPhraseRow: "phrase" === TT[0].type
              }),
              children: TT.map(((TT, MT) => {
                const KT = lT && cT.focus.row === kT && cT.focus.col === MT,
                  OT = "command" === TT.type ? mK.get(TT.command) : void 0;
                return (0, XT.jsx)("div", {
                  className: "PadKeyboardKeySlot",
                  style: {
                    width: TT.width / hT * 100 + "%"
                  },
                  children: (0, XT.jsxs)("div", {
                    className: uT()("PadKeyboardKey", {
                      PadKeyboardKeyFocused: KT,
                      PadKeyboardKeyCommand: "command" === TT.type,
                      PadKeyboardKeyPhrase: "phrase" === TT.type,
                      PadKeyboardKeyActive: "command" === TT.type && "shift" === TT.command && "off" !== cT.shift,
                      PadKeyboardKeySubmit: "command" === TT.type && "submit" === TT.command
                    }),
                    role: "button",
                    onClick: () => {
                      QT({
                        row: kT,
                        col: MT
                      })
                    },
                    onTouchEnd: TT => {
                      var cT, lT;
                      TT.preventDefault(), cT = TT.changedTouches[0], lT = TT.currentTarget.getBoundingClientRect(), cT && cT.clientX >= lT.left && cT.clientX <= lT.right && cT.clientY >= lT.top && cT.clientY <= lT.bottom && QT({
                        row: kT,
                        col: MT
                      })
                    },
                    children: [(0, XT.jsx)("span", {
                      className: "PadKeyboardKeyLabel",
                      children: NT(TT)
                    }), lT && OT && (0, XT.jsx)(FM, {
                      className: "PadKeyboardKeyGlyph",
                      glyph: (0, IT.j)(OT)
                    })]
                  })
                }, MT)
              }))
            }, kT)))
          })]
        })
      },
      GK = TT => {
        let {
          target: kT,
          label: cT
        } = TT;
        JK(kT);
        const lT = (0, ET.useRef)(null),
          MT = (0, ET.useRef)(null),
          KT = kT instanceof HTMLTextAreaElement;
        (0, ET.useLayoutEffect)((() => {
          const TT = lT.current,
            kT = MT.current;
          KT ? TT.scrollTop = kT.offsetTop - TT.clientHeight / 2 : TT.scrollLeft = kT.offsetLeft - TT.clientWidth / 2
        }));
        const {
          value: OT,
          start: yT,
          end: fT
        } = (0, WT.k)(kT), xT = "password" === kT.type ? "\u2022".repeat(OT.length) : OT;
        return (0, XT.jsxs)("div", {
          className: "PadKeyboardPreview",
          children: [(0, XT.jsx)("div", {
            className: "PadKeyboardPreviewLabel SmallTextBold",
            children: cT
          }), (0, XT.jsxs)("div", {
            ref: lT,
            className: uT()("PadKeyboardPreviewText", {
              PadKeyboardPreviewMultiline: KT
            }),
            children: [(0, XT.jsx)("span", {
              children: xT.slice(0, yT)
            }), (0, XT.jsx)("span", {
              ref: MT,
              className: "PadKeyboardCaret"
            }), yT !== fT && (0, XT.jsx)("span", {
              className: "PadKeyboardPreviewSelection",
              children: xT.slice(yT, fT)
            }), (0, XT.jsx)("span", {
              children: xT.slice(fT)
            }), 0 === xT.length && kT.placeholder && kT.placeholder !== cT && (0, XT.jsx)("span", {
              className: "PadKeyboardPreviewPlaceholder",
              children: kT.placeholder
            })]
          })]
        })
      };
    var VK = cT(1409),
      EK = cT(3358);
    const ZK = function() {
        for (var TT = arguments.length, kT = new Array(TT), cT = 0; cT < TT; cT++) kT[cT] = arguments[cT];
        return kT.map(IT.j)
      },
      uK = (TT, kT) => {
        const cT = Uc(TT);
        return cT ? [{
          glyphs: [cT],
          labelKey: kT
        }] : []
      },
      XK = [".BottomMiddleElements", ".BottomLeftElements > *", ".BottomRightElements > *", ".MiddleTextBottom .MiddleText"],
      dK = "--pad-hint-bar-clearance",
      LK = "[data-pad-hint-bar-avoid]",
      RK = TT => {
        const kT = [];
        for (const cT of TT)(0, qT.l)(cT) && kT.push(cT.getBoundingClientRect());
        return kT
      },
      gK = TT => {
        if (!TT) return null;
        const kT = Il(),
          cT = kT ? RK(((TT, kT) => {
            const cT = TT.closest(LK);
            return cT ? [cT] : ("popup" === kT ? document : TT).querySelectorAll(LK)
          })(kT.root, kT.layer.kind)) : [],
          lT = !kT || kT.root.hasAttribute("data-pad-shows-hud");
        if (((0, EK.i)(null === kT || void 0 === kT ? void 0 : kT.layer.kind, (0, EK.l)()) || lT) && cT.push(...RK(document.querySelectorAll(XK.join(",")))), 0 === cT.length) return null;
        const {
          width: MT,
          height: KT
        } = TT.getBoundingClientRect(), OT = window.innerHeight - 8, yT = (0, EK.r)(OT, {
          width: MT,
          height: KT
        }, window.innerWidth / 2, cT, 8);
        return yT === OT ? null : Math.round(window.innerHeight - yT)
      },
      UK = TT => {
        const kT = document.documentElement.style,
          cT = TT ? `${Math.round(window.innerHeight-TT.getBoundingClientRect().top)}px` : "";
        kT.getPropertyValue(dK) !== cT && (cT ? kT.setProperty(dK, cT) : kT.removeProperty(dK))
      },
      YK = () => {
        const {
          t: TT
        } = (0, MT.B)(), {
          hideButtonHints: kT
        } = (0, CT.o)(), cT = (0, jT.v)(), [lT, KT] = (0, ET.useState)(!1), [OT, xT] = (0, ET.useState)([]), [tT, hT] = (0, ET.useState)(null), NT = (0, ET.useRef)(null), QT = (0, ET.useRef)(null);
        (0, hM.g)(QK.e, (TT => {
          KT(TT)
        })), (0, hM.g)(EK.n, (() => {
          var TT;
          null === (TT = QT.current) || void 0 === TT || TT.call(QT)
        }));
        const ST = cT && !kT && !lT;
        return (0, ET.useEffect)((() => {
          if (!ST) return;
          let TT = null;
          const kT = () => {
            const kT = (() => {
                var TT;
                const kT = AT.d.getActiveConsumerName(),
                  cT = (0, EK.g)();
                if (cT) {
                  const TT = (0, IT.j)(cT),
                    kT = "emoteWheel" === cT && "wheel" === (0, CT.g)().emoteButton || !(0, vT.J)(AT.d.getLastFrame().values, TT) ? {
                      glyphs: ZK("menuConfirm"),
                      labelKey: "controller:menusSelect"
                    } : {
                      glyphs: [TT],
                      labelKey: "controller:wheelReleaseToPick"
                    };
                  return [{
                    glyphs: [(0, IT.t)(TT)],
                    labelKey: "controller:wheelChoose"
                  }, kT, {
                    glyphs: ZK("menuBack"),
                    labelKey: "controller:wheelClose"
                  }]
                }
                const lT = Il();
                if (!lT || "focus" !== kT && "cursor" !== kT) return (0, EK.e)(IT.j);
                const MT = [],
                  KT = {
                    glyphs: ZK("menuBack"),
                    labelKey: "controller:menusBack"
                  },
                  OT = (0, UT.s)(lT.root),
                  yT = OT ? !(0, qT.n)(OT) : Boolean(lT.layer.close),
                  xT = !OT && lT.layer.closeLabelKey ? lT.layer.closeLabelKey : KT.labelKey,
                  jT = yT ? [{
                    ...KT,
                    labelKey: xT
                  }] : [],
                  tT = Hc(lT.layer.kind) ? [{
                    glyphs: ZK("chat"),
                    labelKey: "controller:menusQuickChat"
                  }] : [];
                if ("cursor" === kT) return MT.push({
                  glyphs: ZK("menuConfirm"),
                  labelKey: "controller:menusClick"
                }), MT.push({
                  glyphs: ZK("menuSecondary"),
                  labelKey: "controller:menusRightClick"
                }), MT.push(...jT), MT.push(...tT), MT.push({
                  glyphs: ["RightStick"],
                  labelKey: "controller:menusScroll"
                }), wl() && MT.push({
                  glyphs: ZK("menuToggleCursor"),
                  labelKey: "controller:menusFocusMode"
                }), MT;
                const hT = sl.getFocused();
                hT && (0, ol.c)(hT) ? MT.push({
                  glyphs: ["Left", "Right"],
                  labelKey: "controller:menusAdjust"
                }) : hT && (0, UT.C)(hT) ? MT.push({
                  glyphs: [],
                  labelKey: "controller:menusUseMouse"
                }) : MT.push({
                  glyphs: ZK("menuConfirm"),
                  labelKey: "controller:menusSelect"
                });
                const NT = hT ? null === (TT = jc(hT)) || void 0 === TT ? void 0 : TT.dataset.padSecondary : void 0;
                NT && MT.push({
                  glyphs: ZK("menuSecondary"),
                  labelKey: NT
                }), MT.push(...null !== hT && void 0 !== hT && hT.closest("[data-pad-friends-column]") ? [KT] : jT), MT.push(...tT);
                const QT = "home" === lT.layer.kind;
                Wc(lT.root) || !Ec(lT.root) && !nc(lT) ? QT && MT.push({
                  glyphs: ZK("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusRows"
                }) : MT.push({
                  glyphs: ZK("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusTabs"
                }), QT && (MT.push(...uK("inventory", "controller:menusFriends")), NT || MT.push({
                  glyphs: ZK("menuSecondary"),
                  labelKey: "controller:menusSearch"
                }), MT.push(...uK("pause", "controller:menusSettings")), MT.push(...uK("leaderboard", "controller:menusNotifications")));
                const ST = fT.e.get("openEverythingMenuName");
                return "inGame" === fT.e.get("gameState") && "popup" !== lT.layer.kind && null !== ST && ((0, xc.n)(ST) ? MT.push(...uK("leaderboard", "controller:menusClose")) : ST !== fc.o.LOBBY_LEADERBOARD && MT.push(...uK("leaderboard", "controller:menusLobby"))), MT.push({
                  glyphs: ZK("menuToggleCursor"),
                  labelKey: "controller:menusCursorMode"
                }), MT
              })(),
              cT = gK(NT.current),
              lT = ((TT, kT) => `${TT.map((TT=>`${TT.glyphs.join("+")}:${TT.labelKey}`)).join("|")}@${kT}`)(kT, cT);
            lT !== TT && (TT = lT, (0, yT.unstable_batchedUpdates)((() => {
              xT(kT), hT(cT)
            }))), UK(NT.current)
          };
          kT(), QT.current = kT;
          const cT = requestAnimationFrame(kT),
            lT = setInterval(kT, 150);
          return () => {
            QT.current = null, cancelAnimationFrame(cT), clearInterval(lT), UK(null)
          }
        }), [ST]), (0, ET.useLayoutEffect)((() => {
          if (!ST) return;
          if (0 === OT.length) return void UK(null);
          const TT = gK(NT.current);
          TT === tT ? UK(NT.current) : hT(TT)
        }), [ST, OT, tT]), ST && 0 !== OT.length ? (0, XT.jsx)("div", {
          ref: NT,
          className: "PadButtonHintBar SmallTextBold",
          style: null === tT ? void 0 : {
            bottom: tT
          },
          "aria-hidden": !0,
          children: OT.map((kT => (0, XT.jsxs)("div", {
            className: "PadButtonHint",
            children: [kT.glyphs.map((TT => (0, XT.jsx)(FM, {
              glyph: TT,
              className: "PadButtonHintGlyph"
            }, TT))), (0, XT.jsx)("span", {
              children: TT(kT.labelKey)
            })]
          }, kT.labelKey)))
        }) : null
      };
    var BK = cT(1745);
    const WK = [qT.d, "label", "[data-pad-slider]"].join(","),
      nK = "data-pad-cursor-probe",
      pK = TT => {
        var kT;
        const cT = (TT => {
          const kT = [];
          for (let lT = TT; lT && lT !== document.body && lT !== document.documentElement && (kT.push(lT), !(kT.length > 8)); lT = lT.parentElement);
          const cT = document.documentElement.classList.contains(jT.r) ? kT[kT.length - 1] : void 0;
          null === cT || void 0 === cT || cT.setAttribute(nK, "");
          try {
            return kT.map((TT => ({
              element: TT,
              cursor: getComputedStyle(TT).cursor
            })))
          } finally {
            null === cT || void 0 === cT || cT.removeAttribute(nK)
          }
        })(TT);
        if ("pointer" !== (null === (kT = cT[0]) || void 0 === kT ? void 0 : kT.cursor)) return null;
        let lT = 0;
        for (; lT + 1 < cT.length && "pointer" === cT[lT + 1].cursor;) lT++;
        return cT[lT].element
      },
      iK = (TT, kT, cT, lT) => {
        const MT = lT.root.contains(TT) ? lT.root : null;
        for (let KT = TT; KT && KT !== document.body && KT !== document.documentElement; KT = KT.parentElement) {
          if (KT instanceof HTMLElement && mT(KT, kT) && HT(KT, kT, cT)) return KT;
          if (KT === MT) break
        }
        return "home" === lT.layer.kind || "gamePage" === lT.layer.kind ? ((TT, kT) => {
          const cT = document.scrollingElement;
          return cT instanceof HTMLElement && ![document.documentElement, document.body].some((kT => {
            const cT = getComputedStyle(kT),
              lT = "y" === TT ? cT.overflowY : cT.overflowX;
            return "hidden" === lT || "clip" === lT
          })) && HT(cT, TT, kT) ? cT : null
        })(kT, cT) : null
      };
    const qK = new class {
        constructor() {
          this.state = {
            x: 0,
            y: 0,
            speedRamp: 0
          }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this.confirmRepeat = (0, tT.e)(vT.t), this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.layerRoot = null, this.layerOrder = 0, this.layerPoints = new WeakMap, this.page = null, this.pendingPageStart = null
        }
        install() {
          const TT = AT.d.register({
              name: "cursor",
              isActive: () => "cursor" === ml(),
              onFrame: TT => {
                this.onFrame(TT)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: TT => (0, AT.f)(TT) || TT === (0, IT.j)("menuConfirm") && (0, UT.E)((0, jT.b)())
            }),
            kT = (0, cl.j)((TT => {
              const kT = TT.getRoot();
              kT && this.layerPoints.delete(kT), kT === this.layerRoot && (this.layerRoot = null)
            })),
            cT = xT.k.subscribe("appManagerUpdated|activeInputDevice", (TT => {
              "gamepad" !== TT && this.active && !this.hidden && this.hide()
            }));
          return () => {
            TT(), kT(), xT.k.unsubscribe(cT), this.deactivate()
          }
        }
        getHighlighted() {
          return this.isVisible() ? this.interactive : null
        }
        isVisible() {
          return this.active && !this.hidden && (0, jT.i)()
        }
        getPoint() {
          return {
            x: this.state.x,
            y: this.state.y
          }
        }
        hide() {
          this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.nt()
        }
        activate(TT) {
          this.active = !0, this.hidden = !1;
          const kT = Fl();
          !kT || kT.root && kT.root !== TT.root ? this.jumpTo(this.hasPosition ? this.getPoint() : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          }) : (this.setLayer(TT), this.jumpTo(kT.point))
        }
        jumpTo(TT) {
          this.state = {
            x: TT.x,
            y: TT.y,
            speedRamp: 0
          }, this.hasPosition = !0, this.lastHitTestMs = -1 / 0
        }
        deactivate() {
          this.active && (this.active = !1, this.page = null, this.pendingPageStart = null, this.cancelPress(), this.clearHover(), this.draggedSlider = null, this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.nt())
        }
        onFrame(TT) {
          const kT = Il();
          if (!kT) return;
          if (this.active || this.activate(kT), this.followPage(kT)) return;
          this.followLayer(kT);
          const cT = TT.wokeDevice ? (0, jT.b)() : null;
          if (cT && this.jumpTo(cT), !(0, jT.i)()) return void this.hide();
          const lT = (0, IT.j)("menuToggleCursor");
          if (TT.wasPressed(lT)) return AT.d.consumeButton(lT), void al(this.getHandoff(null));
          if (this.handBackToFocus(TT)) return;
          const MT = (0, IT.j)("menuConfirm"),
            KT = (0, IT.j)("menuSecondary");
          if (TT.wasPressed((0, IT.j)("menuBack"))) return (0, UT.i)(kT.root) || (0, UT.c)(kT.root) || Al(), void this.nt();
          if (qc(null, TT, kT)) return TT.wasReleased(MT) && this.press && (this.updateHit(!1), this.updateConfirm(TT, MT)), void this.nt();
          if (document.pointerLockElement) return void this.hide();
          const OT = bl() ? {
              x: 0,
              y: 0
            } : (TT => {
              const kT = (TT, kT) => (TT ? 1 : 0) - (kT ? 1 : 0);
              return {
                x: kT(TT.isHeld("Right"), TT.isHeld("Left")),
                y: kT(TT.isHeld("Down"), TT.isHeld("Up"))
              }
            })(TT),
            yT = (0, CT.g)().moveDeadzone,
            fT = ((TT, kT) => {
              const cT = (0, vT.m)(TT, DT(kT));
              return Math.hypot(cT.x, cT.y)
            })(TT.leftStick, yT) > 0 || 0 !== OT.x || 0 !== OT.y;
          if (this.hidden) {
            const kT = TT.wasPressed(MT),
              cT = TT.wasPressed(KT);
            if (!fT && !rT(TT.rightStick) && !kT && !cT && !TT.wokeDevice) return void this.nt();
            if (this.hidden = !1, this.updateHit(!1), kT || cT) return kT && (this.press = {
              kind: "ignored"
            }, TT.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.nt()
          }
          this.movePendingPageStart(fT);
          const xT = this.getPoint();
          this.state = FT(this.state, {
            stick: TT.leftStick,
            moveDeadzone: yT,
            dpad: OT,
            dtMs: TT.dtMs,
            cursorSpeedPercent: (0, CT.g)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: this.getAssistContext()
          });
          const tT = this.state.x !== xT.x || this.state.y !== xT.y,
            hT = [MT, KT].some((kT => TT.wasPressed(kT) || TT.wasReleased(kT)));
          (tT || hT || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(tT), this.updateConfirm(TT, MT), this.updateSecondary(TT, KT), this.updateScroll(TT, kT), this.nt()
        }
        followPage(TT) {
          const kT = "home" === TT.layer.kind || "gamePage" === TT.layer.kind,
            cT = this.page;
          if (this.page = kT ? {
              key: (0, cl.o)(TT.layer),
              root: TT.root
            } : null, !this.page || !cT || cT.root !== TT.root || cT.key === this.page.key) return !1;
          if (this.cancelPress(), this.secondaryArmed = !1, this.setLayer(TT), "hybrid" === Dl()) return Nl = null, tl = null, Ql.lock(), !0;
          const {
            key: lT
          } = this.page;
          return this.pendingPageStart = {
            root: TT.root,
            key: lT,
            returning: sl.notePageEnteredByCursor(lT),
            enteredAtMs: performance.now()
          }, !1
        }
        movePendingPageStart(TT) {
          const kT = this.pendingPageStart;
          if (!kT) return;
          if (TT || kT.root !== this.layerRoot) return void(this.pendingPageStart = null);
          const cT = kT.returning ? sl.recallStop(kT.root, kT.key) : null;
          if (!cT && kT.returning && performance.now() - kT.enteredAtMs < 1e3) return;
          const lT = null !== cT && void 0 !== cT ? cT : sl.pickInitial(kT.root, {
            includeDisabled: !0,
            waitForContent: !0,
            enteredAtMs: kT.enteredAtMs
          });
          lT && (this.pendingPageStart = null, this.jumpTo((0, UT.w)(lT)))
        }
        setLayer(TT) {
          this.layerRoot = TT.root, this.layerOrder = TT.order
        }
        followLayer(TT) {
          var kT;
          if (TT.root === this.layerRoot) return;
          null !== (kT = this.layerRoot) && void 0 !== kT && kT.isConnected && this.layerPoints.set(this.layerRoot, this.getPoint()), this.cancelPress(), this.draggedSlider = null, this.secondaryArmed = !1;
          const cT = this.layerPoints.get(TT.root),
            lT = cT && TT.order <= this.layerOrder ? cT : sl.getLayerStartPoint(TT.root);
          this.setLayer(TT), this.jumpTo(lT)
        }
        getHandoff(TT) {
          var kT;
          return {
            point: this.getPoint(),
            element: null !== (kT = this.interactive) && void 0 !== kT ? kT : this.findDraggedSliderNearby(),
            direction: TT
          }
        }
        findDraggedSliderNearby() {
          const TT = this.draggedSlider;
          if (null === TT || void 0 === TT || !TT.isConnected) return null;
          const kT = TT.getBoundingClientRect(),
            {
              y: cT
            } = this.getPoint();
          return cT >= kT.top - 40 && cT <= kT.bottom + 40 ? TT : null
        }
        handBackToFocus(TT) {
          if (!bl()) return !1;
          const kT = vT.D.find((kT => TT.wasPressed(kT)));
          return !!kT && (cT = this.getHandoff(kT), Nl = jl(cT), tl = null, Ql.lock(), AT.d.handOffHeldInput(), !0);
          var cT
        }
        getAssistContext() {
          const TT = this.interactive;
          if (null === TT || void 0 === TT || !TT.isConnected) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const kT = TT.getBoundingClientRect();
          if (kT.width > .4 * window.innerWidth || kT.height > .4 * window.innerHeight) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const cT = (0, CT.g)().cursorMagnetism && !(0, BK.e)(TT) && !TT.closest("[data-pad-slider]"),
            lT = this.magnet && this.magnet !== TT && this.magnet.isConnected ? this.magnet.getBoundingClientRect() : kT;
          return {
            overInteractive: !0,
            magnetTarget: cT ? {
              x: lT.left + lT.width / 2,
              y: lT.top + lT.height / 2
            } : null
          }
        }
        updateHit(TT) {
          this.lastHitTestMs = performance.now();
          const kT = this.getPoint(),
            cT = document.elementFromPoint(kT.x, kT.y),
            lT = cT && !(0, NT.r)(cT) && (TT => {
              var kT;
              const cT = Il();
              return !(cT && !cT.root.contains(TT) && !TT.closest(".tooltip-container")) || !(null !== (kT = document.getElementById("root")) && void 0 !== kT && kT.contains(TT))
            })(cT) ? cT : null;
          if (lT !== this.hit) return (0, UT.k)(this.hit, lT, kT), this.hit = lT, void this.setInteractive(lT ? (TT => {
            const kT = TT.closest(WK);
            if (kT) {
              var cT, lT;
              const TT = null !== (cT = null === (lT = kT.parentElement) || void 0 === lT ? void 0 : lT.closest("[data-pad-focusable]")) && void 0 !== cT ? cT : kT;
              return (0, qT.n)(TT) ? {
                element: null,
                magnet: null
              } : {
                element: TT,
                magnet: kT
              }
            }
            const MT = pK(TT);
            return {
              element: MT,
              magnet: MT
            }
          })(lT) : {
            element: null,
            magnet: null
          });
          TT && lT && (0, UT.k)(lT, lT, kT)
        }
        setInteractive(TT) {
          let {
            element: kT,
            magnet: cT
          } = TT;
          this.interactive = kT, this.magnet = cT
        }
        clearHover() {
          this.hit && (0, UT.k)(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
            element: null,
            magnet: null
          })
        }
        beginPress() {
          const TT = this.hit;
          if (!TT || (0, UT.C)(TT)) return {
            kind: "ignored"
          };
          const kT = (0, ol.c)(TT),
            cT = TT.closest("[data-pad-slider]");
          return kT && cT ? {
            kind: "slider",
            slider: cT,
            adjuster: kT
          } : ((0, UT.o)(TT, this.getPoint()), {
            kind: "pointer",
            target: TT
          })
        }
        applySliderFraction(TT) {
          var kT;
          const cT = TT.slider.getBoundingClientRect(),
            lT = cT.height > cT.width,
            MT = null === (kT = TT.slider.querySelector("[data-pad-slider-handle]")) || void 0 === kT ? void 0 : kT.getBoundingClientRect(),
            KT = MT ? lT ? MT.height : MT.width : 0,
            OT = (lT ? cT.height : cT.width) - KT;
          if (OT <= 0) return;
          const yT = lT ? cT.bottom - KT / 2 - this.state.y : this.state.x - cT.left - KT / 2;
          TT.adjuster.setFraction(Math.max(0, Math.min(1, yT / OT)))
        }
        updateConfirm(TT, kT) {
          TT.wasPressed(kT) && (this.press = TT.wokeDevice ? {
            kind: "ignored"
          } : this.beginPress(), this.draggedSlider = "slider" === this.press.kind ? this.press.slider : null, this.beginRepeat());
          const cT = this.press;
          if (!cT) return;
          if (TT.isHeld(kT)) return "slider" === cT.kind && this.applySliderFraction(cT), void this.updateRepeat();
          this.press = null;
          const lT = this.repeated;
          if (this.endRepeat(), !TT.wasReleased(kT)) return void this.endPressWithoutClick(cT);
          const MT = this.getPoint(),
            KT = this.hit;
          if ("slider" === cT.kind && cT.adjuster.endDrag(), "pointer" === cT.kind) {
            const TT = null !== KT && void 0 !== KT ? KT : cT.target.isConnected ? cT.target : null;
            TT && (0, UT.p)(TT, MT);
            const kT = KT && cT.target.isConnected && !lT ? ((TT, kT) => {
              for (let cT = TT; cT; cT = cT.parentElement)
                if (cT.contains(kT)) return cT;
              return null
            })(cT.target, KT) : null;
            kT && (sl.noteCursorActivation(kT), (0, NT.i)(kT, new MouseEvent("click", (0, UT.M)(MT, 0, 0))), (0, UT.f)(kT), (0, UT.I)(kT) && (0, UT.G)(kT))
          }
        }
        beginRepeat() {
          var TT, kT, cT;
          const lT = null !== (TT = null === (kT = this.hit) || void 0 === kT ? void 0 : kT.closest("[data-pad-repeat]")) && void 0 !== TT ? TT : null;
          this.repeatStop = lT, this.repeatKey = null !== (cT = null === lT || void 0 === lT ? void 0 : lT.getAttribute("data-pad-repeat")) && void 0 !== cT ? cT : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
        }
        updateRepeat() {
          const TT = this.repeatStop;
          if (!TT) return;
          const kT = this.hit;
          TT.isConnected && !(0, qT.n)(TT) && TT.getAttribute("data-pad-repeat") === this.repeatKey && kT && TT.contains(kT) ? TT.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, sl.noteCursorActivation(TT), (0, NT.i)(TT, new MouseEvent("click", (0, UT.M)(this.getPoint(), 0, 0)))) : this.repeatStop = null
        }
        endRepeat() {
          this.repeatStop = null, this.repeated = !1
        }
        endPressWithoutClick(TT) {
          "slider" === TT.kind && TT.adjuster.endDrag(), "pointer" === TT.kind && TT.target.isConnected && (0, UT.p)(TT.target, this.getPoint())
        }
        cancelPress() {
          this.endRepeat(), this.press && (this.endPressWithoutClick(this.press), this.press = null)
        }
        updateSecondary(TT, kT) {
          TT.wasPressed(kT) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !TT.isHeld(kT) && (this.secondaryArmed = !1, TT.wasReleased(kT) && this.hit && (0, UT.j)(this.hit, this.getPoint(), 2))
        }
        updateScroll(TT, kT) {
          const cT = PT(TT.rightStick, TT.dtMs);
          if (0 === cT.x && 0 === cT.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          this.scrollRemainder = {
            x: this.scrollRemainder.x + cT.x,
            y: this.scrollRemainder.y + cT.y
          };
          const lT = Math.trunc(this.scrollRemainder.x),
            MT = Math.trunc(this.scrollRemainder.y);
          this.scrollRemainder = {
            x: this.scrollRemainder.x - lT,
            y: this.scrollRemainder.y - MT
          };
          const KT = this.hit;
          if (!KT) return;
          let OT = !1;
          if (0 !== MT) {
            const TT = iK(KT, "y", MT > 0 ? 1 : -1, kT);
            TT && (TT.scrollBy({
              top: MT,
              behavior: "instant"
            }), OT = !0)
          }
          if (0 !== lT) {
            const TT = iK(KT, "x", lT > 0 ? 1 : -1, kT);
            TT && (TT.scrollBy({
              left: lT,
              behavior: "instant"
            }), OT = !0)
          }
          OT && (this.lastHitTestMs = -1 / 0)
        }
        nt() {
          BT.set({
            x: this.state.x,
            y: this.state.y,
            visible: this.isVisible(),
            pressed: null !== this.press && "ignored" !== this.press.kind
          })
        }
      },
      sK = () => {
        const TT = (0, ET.useMemo)((() => new RT), []),
          kT = (0, jT.v)();
        return (0, ET.useEffect)((() => {
          if (!kT) return;
          let cT = 0,
            lT = {
              of: null,
              atMs: 0,
              list: []
            };
          const MT = document.getElementsByClassName(zl),
            KT = TT => {
              for (const kT of [...MT]) kT !== TT && kT.classList.remove(zl)
            },
            OT = () => {
              var kT;
              cT = requestAnimationFrame(OT);
              const MT = (() => {
                const TT = sl.getFocused();
                if (sl.isActive() && null !== TT && void 0 !== TT && TT.isConnected) return TT;
                const kT = qK.getHighlighted();
                return null !== kT && void 0 !== kT && kT.isConnected ? kT : null
              })();
              KT(MT), MT && !MT.classList.contains(zl) && MT.classList.add(zl);
              const yT = null !== (kT = null === MT || void 0 === MT ? void 0 : MT.closest("[data-pad-reticle-box]")) && void 0 !== kT ? kT : MT;
              TT.show(yT ? ((TT, kT) => {
                let cT = TT.left,
                  lT = TT.top,
                  MT = TT.right,
                  KT = TT.bottom;
                for (const OT of kT) {
                  if (!OT) continue;
                  const TT = GT(OT);
                  cT = Math.max(cT, TT.left), lT = Math.max(lT, TT.top), MT = Math.min(MT, TT.right), KT = Math.min(KT, TT.bottom)
                }
                return MT <= cT || KT <= lT ? null : {
                  left: cT,
                  top: lT,
                  width: MT - cT,
                  height: KT - lT
                }
              })(yT.getBoundingClientRect(), (TT => {
                const kT = performance.now();
                return (lT.of !== TT || kT - lT.atMs > 500) && (lT = {
                  of: TT,
                  atMs: kT,
                  list: [bT(TT, "y"), bT(TT, "x")]
                }), lT.list
              })(yT)) : null)
            };
          return cT = requestAnimationFrame(OT), () => {
            cancelAnimationFrame(cT), KT(null), TT.hide()
          }
        }), [kT, TT]), (0, XT.jsx)(gT, {
          placer: TT,
          className: "PadFocusRing"
        })
      },
      TO = (TT, kT) => {
        TT.style.transform = `translate3d(${kT.x}px, ${kT.y}px, 0)`, TT.classList.toggle("Visible", kT.visible), TT.classList.toggle("Pressed", kT.pressed)
      },
      kO = () => {
        const TT = (0, ET.useRef)(null);
        return (0, ET.useEffect)((() => {
          const kT = BT.subscribe((kT => {
            TT.current && TO(TT.current, kT)
          }));
          return TT.current && TO(TT.current, BT.get()), kT
        }), []), (0, XT.jsx)("div", {
          ref: TT,
          className: "PadCursorView",
          "aria-hidden": "true",
          children: (0, XT.jsx)("div", {
            className: "PadCursorGlyph",
            children: "+"
          })
        })
      },
      cO = "#ncmp__modal.ncmp__active",
      lO = [{
        id: "nitro-consent-banner",
        find: () => document.querySelector(cO) ? null : document.querySelector("#ncmp__tool > .ncmp__banner.ncmp__active"),
        startSelectors: ["[data-ncmp-cmd='reject']", "[data-ncmp-cmd='showModal']"]
      }, {
        id: "nitro-consent-modal",
        find: () => document.querySelector(cO),
        startSelectors: ["[data-ncmp-cmd='reject']"]
      }, {
        id: "google-consent",
        find: () => document.querySelector(".fc-consent-root"),
        startSelectors: [".fc-cta-do-not-consent", ".fc-cta-manage-options"]
      }],
      MO = "PadOverThirdParty",
      KO = new Set(lO.map((TT => TT.id))),
      OO = () => {
        const TT = lO.map((TT => {
            let {
              id: kT,
              find: cT,
              startSelectors: lT
            } = TT;
            return (0, cl.n)({
              id: kT,
              kind: "popup",
              getRoot: () => {
                const TT = cT(),
                  kT = TT ? ((TT, kT) => {
                    var cT;
                    for (const lT of kT) {
                      const kT = TT.querySelector(lT);
                      if (kT) return kT
                    }
                    return null !== (cT = [...TT.querySelectorAll("button")].find((TT => !TT.matches(".fc-cta-consent, [data-ncmp-cmd='save']")))) && void 0 !== cT ? cT : null
                  })(TT, lT) : null;
                if (TT && kT && !kT.hasAttribute("data-pad-default-focus")) {
                  for (const kT of TT.querySelectorAll("[data-pad-default-focus]")) kT.removeAttribute("data-pad-default-focus");
                  for (const kT of TT.querySelectorAll("[data-pad-hint-bar-avoid]")) kT.removeAttribute("data-pad-hint-bar-avoid");
                  kT.setAttribute("data-pad-default-focus", ""), ((TT, kT) => {
                    let cT = TT;
                    for (let lT = TT.parentElement; lT && kT.contains(lT) && !(lT.getBoundingClientRect().height >= window.innerHeight / 2); lT = lT.parentElement) cT = lT;
                    return cT
                  })(kT, TT).setAttribute("data-pad-hint-bar-avoid", "")
                }
                return TT
              },
              close: null,
              memoryKey: null
            })
          })),
          kT = document.documentElement,
          cT = OT.e.onFrame((() => {
            const TT = (0, jT.i)() ? Il() : null,
              cT = !!TT && (lT = TT.layer, KO.has(lT.id));
            var lT;
            kT.classList.contains(MO) !== cT && kT.classList.toggle(MO, cT)
          }));
        return () => {
          for (const kT of TT) kT();
          cT(), kT.classList.remove(MO)
        }
      },
      yO = "PadLargePointer",
      fO = () => {
        (0, ET.useEffect)((() => {
          const TT = (0, NT.n)(document.body),
            kT = sl.install(),
            cT = qK.install(),
            lT = OO();
          return () => {
            TT(), kT(), cT(), lT()
          }
        }), []);
        const {
          largePointer: TT
        } = (0, CT.o)(), kT = (0, VK.s)() && TT;
        return (0, ET.useEffect)((() => {
          if (kT) return document.documentElement.classList.add(yO), () => {
            document.documentElement.classList.remove(yO)
          }
        }), [kT]), (0, yT.createPortal)((0, XT.jsxs)(XT.Fragment, {
          children: [(0, XT.jsx)(YK, {}), (0, XT.jsx)(sK, {}), (0, XT.jsx)(kO, {})]
        }), document.body)
      };
    var xO = cT(8818),
      IO = cT(8840),
      AO = cT(8827);
    cT(8849);
    const CO = (TT, kT) => {
        const [cT, lT] = (0, ET.useState)(!1), [MT, KT] = (0, ET.useState)(null), OT = (0, ET.useRef)(null), yT = (0, ET.useCallback)((TT => {
          OT.current = TT, KT(TT)
        }), []), fT = (0, ET.useCallback)((() => {
          lT(!1), yT(null)
        }), [yT]), IT = (0, ET.useCallback)((() => {
          lT(!0)
        }), []), AT = (0, ET.useCallback)(((TT, kT) => {
          yT((0, AO.L)(TT, kT, OT.current))
        }), [yT]);
        (0, ET.useLayoutEffect)((() => (kT(cT), (0, EK.u)(TT, cT), xT.k.nt(EK.n), () => {
          kT(!1), (0, EK.u)(TT, !1), xT.k.nt(EK.n)
        })), [cT, TT, kT]), (0, hM.g)("appManagerUpdated|activeInputDevice", (TT => {
          "gamepad" !== TT && fT()
        })), (0, hM.g)("appManagerUpdated|gameState", (TT => {
          "inGame" !== TT && fT()
        }));
        const CT = () => {
          (0, xc.s)() && fT()
        };
        return (0, hM.g)("appManagerUpdated|openEverythingMenuName", CT), (0, hM.g)("appManagerUpdated|openInGameMenuName", CT), {
          open: cT,
          picked: MT,
          pickedRef: OT,
          show: IT,
          aim: AT,
          close: fT
        }
      },
      jO = TT => {
        let {
          className: kT,
          slotCount: cT,
          picked: lT,
          slotLabel: MT,
          renderSlot: KT,
          centre: OT
        } = TT;
        const yT = Array.from({
          length: cT
        }, ((TT, kT) => kT));
        return (0, XT.jsx)("div", {
          className: uT()("EmoteWheelOverlay PadRadialWheel", kT),
          children: (0, XT.jsxs)("div", {
            className: "EmoteWheel",
            style: {
              width: 2 * AO.w + "rem",
              height: 2 * AO.w + "rem"
            },
            children: [(0, XT.jsxs)("svg", {
              className: "EmoteWheelSvg",
              viewBox: `0 0 ${AO.r} ${AO.r}`,
              children: [yT.map((TT => (0, XT.jsx)("path", {
                d: (0, AO.A)(TT, cT, AO.g, AO.k, AO.o),
                className: uT()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: TT === lT
                }),
                "aria-label": MT(TT)
              }, TT))), (0, XT.jsx)("circle", {
                className: "EmoteWheelOuterRing",
                cx: AO.g,
                cy: AO.g,
                r: AO.o
              }), (0, XT.jsx)("circle", {
                className: "EmoteWheelInnerRing",
                cx: AO.g,
                cy: AO.g,
                r: AO.k
              }), null !== lT && (0, XT.jsx)("path", {
                className: "EmoteWheelWedgeOutline",
                d: (0, AO.A)(lT, cT, AO.g, AO.k, AO.o)
              })]
            }), yT.map((TT => {
              const kT = (0, AO.H)(TT, cT);
              return (0, XT.jsx)("div", {
                className: uT()("PadRadialWheelSlot SmallTextBold", {
                  PadRadialWheelSlotPicked: TT === lT
                }),
                style: {
                  left: `calc(50% + ${AO.d*Math.cos(kT)}rem)`,
                  top: `calc(50% + ${AO.d*Math.sin(kT)}rem)`
                },
                "aria-hidden": !0,
                children: KT(TT)
              }, TT)
            })), (0, XT.jsx)("div", {
              className: "EmoteWheelHint SmallTextBold",
              children: OT
            })]
          })
        })
      },
      vO = IK.length,
      tO = () => {
        const {
          t: TT
        } = (0, MT.B)(), kT = CO("chat", oc.q), cT = (0, ET.useMemo)((() => IK.map((kT => TT(kT)))), [TT]);
        return (0, hM.g)(oc.n, (() => {
          kT.open || (0, xO.g)() || (0, IO.s)() || "inGame" !== fT.e.get("gameState") || (0, xc.s)() || !(0, zc.c)() || kT.show()
        })), (0, hM.g)(oc.g, (TT => {
          kT.open && kT.aim(TT, vO)
        })), (0, hM.g)(oc.l, (() => {
          var TT;
          if (!kT.open) return;
          const lT = kT.pickedRef.current;
          null !== lT ? AK.claim(performance.now()) && (kT.close(), null === (TT = (0, zc.c)()) || void 0 === TT || TT.sendLine(cT[lT])) : kT.close()
        })), (0, hM.g)(oc.i, kT.close), kT.open ? (0, XT.jsx)(jO, {
          className: "QuickChatWheel",
          slotCount: vO,
          picked: kT.picked,
          slotLabel: TT => cT[TT],
          renderSlot: TT => cT[TT],
          centre: null !== kT.picked ? cT[kT.picked] : TT("controller:quickChatPick")
        }) : null
      },
      hO = () => {
        const {
          t: TT
        } = (0, MT.B)(), kT = CO("actionButton", IO.u), [cT, lT] = (0, ET.useState)([]);
        if ((0, hM.g)(IO.p, (TT => {
            kT.open || (0, xO.g)() || (0, oc.c)() || "inGame" !== fT.e.get("gameState") || (0, xc.s)() || (lT(TT), kT.show())
          })), (0, hM.g)(IO.e, (TT => {
            kT.open && kT.aim(TT, cT.length)
          })), (0, hM.g)(IO.l, (() => {
            if (!kT.open) return;
            const TT = kT.pickedRef.current;
            kT.close(), null !== TT && xT.k.nt(IO.r, cT[TT])
          })), (0, hM.g)(IO.i, kT.close), !kT.open) return null;
        const KT = null !== kT.picked ? cT[kT.picked] : null;
        return (0, XT.jsx)(jO, {
          className: "ActionWheel",
          slotCount: cT.length,
          picked: kT.picked,
          slotLabel: kT => {
            const lT = cT[kT];
            return "reload" === lT.kind ? TT("controller:gameplayReload") : "customButton" === lT.kind ? lT.description || lT.icon : "touchButton" === lT.kind && "string" === typeof lT.label ? lT.label : ""
          },
          renderSlot: TT => (0, XT.jsx)(PM, {
            action: cT[TT]
          }),
          centre: KT ? (0, XT.jsx)(PM, {
            action: KT
          }) : TT("controller:actionWheelPick")
        })
      };
    var NO = cT(118);
    const QO = () => ((0, ET.useEffect)((() => {
        var TT, kT;
        const cT = (0, NT.n)(document.getElementById("root")),
          lT = (0, jT.f)(),
          MT = (() => {
            const TT = [xT.k.subscribe(kM.e, (() => {
                KM("blockBreak")
              })), xT.k.subscribe("damagedByOtherPlayer", (() => {
                KM("damage")
              })), xT.k.subscribe("yourAttackHit", (TT => {
                let {
                  hitSelf: kT
                } = TT;
                kT || KM("hit")
              }))],
              kT = OT.e.onActivePadChanged((TT => {
                TT && KM("connect")
              }));
            return () => {
              for (const kT of TT) xT.k.unsubscribe(kT);
              kT()
            }
          })(),
          KT = (() => {
            const TT = new AM({
              getVisitId: IM.d,
              peekVisitId: IM.peekVisitSessionId,
              readReportedVisitId: () => {
                const TT = xM.g.getItem(CM);
                return "string" === typeof TT ? TT : null
              },
              writeReportedVisitId: TT => {
                xM.g.setItem(CM, TT)
              },
              isPadActive: jT.i,
              getPadFamily: () => {
                var TT, kT;
                return null !== (TT = null === (kT = OT.e.getActivePad()) || void 0 === kT ? void 0 : kT.family) && void 0 !== TT ? TT : null
              },
              canReport: yM.h,
              getInputType: fM.b,
              Yj: yM.k
            });
            let kT = 0,
              cT = null;
            const lT = MT => {
                null === cT && ("notReady" !== TT.check(MT) || null !== cT || kT >= 20 || (kT++, cT = setTimeout((() => {
                  cT = null, lT(!1)
                }), 3e3)))
              },
              MT = xT.k.subscribe("appManagerUpdated|activeInputDevice", (() => {
                lT(!0)
              })),
              KT = (0, IM.h)((() => {
                kT = 0, lT(!0)
              }));
            return () => {
              xT.k.unsubscribe(MT), KT(), null !== cT && clearTimeout(cT)
            }
          })(),
          yT = OT.e.onFrame(((TT, kT) => {
            const cT = (0, jT.n)(TT);
            AT.d.dispatch(TT, kT, cT)
          }));
        let IT = null !== (TT = null === (kT = OT.e.getActivePad()) || void 0 === kT ? void 0 : kT.family) && void 0 !== TT ? TT : null;
        const vT = OT.e.onActivePadChanged((TT => {
            var kT, cT;
            (AT.d.reset(), (0, jT.t)(), xT.k.nt(OT.c, TT), (null !== (kT = null === TT || void 0 === TT ? void 0 : TT.family) && void 0 !== kT ? kT : null) !== IT) && (IT = null !== (cT = null === TT || void 0 === TT ? void 0 : TT.family) && void 0 !== cT ? cT : null, xT.k.nt(CT.e, (0, CT.g)()));
            !TT && (0, jT.i)() && (0, jT.u)(fT.e.get("isTouchScreen") ? "touch" : "keyboardMouse")
          })),
          tT = () => {
            "visible" !== document.visibilityState && AT.d.clear()
          },
          hT = () => {
            AT.d.clear()
          };
        document.addEventListener("visibilitychange", tT), window.addEventListener("blur", hT), OT.e.start(), (0, OM.n)();
        const QT = null;
        return () => {
          cT(), lT(), MT(), KT(), yT(), vT(), document.removeEventListener("visibilitychange", tT), window.removeEventListener("blur", hT), OT.e.stop(), null === QT || void 0 === QT || QT()
        }
      }), []), (0, XT.jsxs)("div", {
        className: "ControllerRoot",
        children: [(0, XT.jsx)(HM, {}), (0, XT.jsx)(LM, {}), (0, XT.jsx)(RM, {}), (0, XT.jsx)(eK, {}), (0, XT.jsx)(fO, {}), (0, XT.jsx)(tO, {}), (0, XT.jsx)(hO, {})]
      })),
      SO = () => NO.featureFlags.useControllerSupport ? (0, XT.jsx)(QO, {}) : null;
    var DO = cT(8209),
      aO = cT(8857);
    const FO = new Set(OM.j),
      rO = TT => `${aO.q}${(0,CT.j)()}/${TT}`,
      PO = TT => {
        if (!(0, aO.m)(TT)) return null;
        const [kT, cT] = TT.slice(aO.q.length).split("/");
        return (0, DO.h)(kT) && FO.has(cT) ? (0, OM.f)(kT, cT) : null
      };
    var wO = cT(8860);
    const mO = () => {
        const {
          t: TT
        } = (0, MT.B)(), kT = (0, jT.v)(), {
          gameState: cT,
          isUiHidden: lT
        } = (0, fT.n)(["gameState", "isUiHidden"]), {
          hideButtonHints: KT,
          sneakMode: OT
        } = (0, CT.o)(), [yT, xT] = (0, ET.useState)(wO.b);
        return (0, hM.g)(oM.u, xT), kT && !lT && "inGame" === cT && yT ? (0, XT.jsxs)("div", {
          className: "PadSneakChip SmallTextBold",
          children: [!KT && (0, XT.jsx)(FM, {
            glyph: (0, IT.j)("toggle" === OT ? "sneak" : "sneakToggle")
          }), (0, XT.jsx)("span", {
            children: TT("controller:gameplaySneaking")
          })]
        }) : null
      },
      bO = 12,
      zO = TT => {
        let {
          trigger: kT,
          className: cT,
          children: lT
        } = TT;
        const MT = (0, ET.useRef)(null);
        return (0, ET.useEffect)((() => {
          let TT = 0;
          const cT = bT(kT, "y"),
            lT = () => {
              TT = requestAnimationFrame(lT);
              const KT = MT.current;
              if (!KT || null === kT || void 0 === kT || !kT.isConnected) return;
              const {
                left: OT,
                top: yT
              } = function(TT, kT, cT) {
                let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                const KT = TT.left + TT.width / 2,
                  OT = Math.max(bO, cT.width - bO - kT.width),
                  yT = Math.min(Math.max(KT - kT.width / 2, bO), OT),
                  fT = cT.height - lT;
                let xT = 0,
                  IT = fT;
                if (MT) {
                  const TT = Math.max(0, MT.top),
                    lT = Math.min(fT, MT.bottom);
                  lT - TT >= Math.max(cT.height / 2, kT.height + 24) && (xT = TT, IT = lT)
                }
                const AT = TT.top + TT.height / 2 < (xT + IT) / 2 ? IT - bO - kT.height : xT + bO;
                return {
                  left: yT,
                  top: Math.max(bO, AT)
                }
              }(kT.getBoundingClientRect(), {
                width: KT.offsetWidth,
                height: KT.offsetHeight
              }, {
                width: window.innerWidth,
                height: window.innerHeight
              }, parseFloat(document.documentElement.style.getPropertyValue(dK)) || 0, null !== cT && void 0 !== cT && cT.isConnected ? cT.getBoundingClientRect() : null);
              KT.style.transform = `translate3d(${Math.round(OT)}px, ${Math.round(yT)}px, 0)`, KT.style.visibility = "visible"
            };
          return lT(), () => {
            cancelAnimationFrame(TT)
          }
        }), [kT]), (0, XT.jsx)("div", {
          ref: MT,
          className: cT,
          style: {
            position: "fixed",
            left: 0,
            top: 0,
            visibility: "hidden"
          },
          children: lT
        })
      };
    var JO = cT(1061),
      oO = cT(8867),
      HO = cT(1470),
      eO = cT(8874),
      GO = cT(8877);
    const VO = {
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
      EO = () => {
        const {
          t: TT
        } = (0, MT.B)(), kT = (0, jT.v)(), cT = (0, oO.c)(), lT = (0, uM.f)("_tasks"), KT = (0, uM.f)("_availableLeaderboards");
        if (!kT) return null;
        const OT = (TT => {
          let {
            hasShop: kT,
            hasTasksOrLeaderboards: cT,
            canInvite: lT
          } = TT;
          const MT = [];
          return kT && MT.push("shop"), cT && MT.push("tasks"), lT && MT.push("invite"), MT.push("leave"), MT
        })({
          hasShop: cT,
          hasTasksOrLeaderboards: !(!lT && !KT),
          canInvite: !!NO.featureFlags.canUseInviteLinks
        });
        return (0, XT.jsx)("div", {
          className: "PadLobbyShortcuts",
          children: OT.map((kT => {
            const {
              icon: cT,
              labelKey: lT
            } = VO[kT], MT = "leave" === kT ? HO.I : HO.e;
            return (0, XT.jsx)(MT, {
              className: "PadLobbyShortcut",
              onClick: () => {
                (TT => {
                  switch (TT) {
                    case "shop":
                      return xT.k.nt(GO.n), void fT.e.set({
                        openEverythingMenuName: fc.o.SHOP
                      });
                    case "tasks":
                      return void xT.k.nt("toggleMenu", "retentionFeatures");
                    case "invite":
                      return void xT.k.nt("toggleMenu", "inviteLink");
                    case "leave":
                      (0, eO.c)()
                  }
                })(kT)
              },
              children: (0, XT.jsxs)("div", {
                className: "PadLobbyShortcutInner",
                children: [(0, XT.jsx)(JO.e, {
                  name: cT
                }), (0, XT.jsx)("span", {
                  children: TT(lT)
                })]
              })
            }, kT)
          }))
        })
      };
    var ZO = cT(2009);
    const uO = vT.z,
      XO = ["forward", "backward", "left", "right", "sprint"],
      dO = TT => TT.ctrlKey || TT.altKey || "Alt" === TT.key || "ArrowUp" === TT.key || "ArrowDown" === TT.key || "Tab" === TT.code || "/" === TT.key || "Slash" === TT.code;
    class LO {
      constructor() {
        this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(vT.Y).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
      }
      setArmed(TT) {
        this.armed = TT
      }
      blocksGameplay() {
        return this.armed || this.consumeNextFrame
      }
      onKeyDown(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !this.armed || kT ? !TT.repeat && this.swallowedKeys.delete(TT.code) ? {
          swallow: !1,
          continues: !1
        } : {
          swallow: this.swallowedKeys.has(TT.code),
          continues: !1
        } : "Escape" === TT.key || TT.repeat && !this.swallowedKeys.has(TT.code) ? {
          swallow: !1,
          continues: !1
        } : cT ? {
          swallow: !1,
          continues: !0
        } : (this.swallowedKeys.add(TT.code), {
          swallow: !0,
          continues: (0, jT.h)(TT)
        })
      }
      onKeyUp(TT) {
        return this.swallowedKeys.delete(TT.code)
      }
      forgetKeys() {
        this.swallowedKeys.clear()
      }
      onPadFrame(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          lT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const MT = (0, vT.r)(TT.values, this.previousHeld),
          KT = null === cT ? -1 : (0, vT.o)(cT),
          OT = KT >= 0 && MT[KT] && !this.previousHeld[KT],
          yT = MT.some(((TT, kT) => TT && !this.previousHeld[kT] && kT !== KT)),
          fT = Math.hypot(TT.leftStick.x, TT.leftStick.y) >= uO,
          xT = Math.hypot(TT.rightStick.x, TT.rightStick.y) >= uO,
          IT = fT && !this.leftStickWasPressed || xT && !this.rightStickWasPressed;
        this.previousHeld = MT, this.leftStickWasPressed = fT, this.rightStickWasPressed = xT;
        let AT = !1;
        this.consumeNextFrame && (this.consumeNextFrame = !1, AT = !0);
        const CT = !kT && OT && !lT,
          jT = !CT && this.armed && !kT && (yT || IT);
        return (CT || jT) && (this.consumeNextFrame = !0, this.consumeAfterContinue = jT, AT = !0), {
          continues: jT,
          back: CT,
          consumeHeld: AT
        }
      }
      consumeLeavesMoveStick() {
        return this.consumeAfterContinue
      }
    }
    const RO = new Set([...ZO.n, ...ZO.G]),
      gO = TT => ((TT, kT, cT) => {
        const lT = Object.keys(kT).filter((lT => !cT.has(lT) && kT[lT].includes(TT)));
        return lT.length > 0 && lT.every((TT => XO.includes(TT)))
      })(TT, ZO.y, RO),
      UO = (TT, kT, cT) => {
        const lT = new LO,
          MT = TT => {
            if (!TT.isTrusted) return;
            const {
              swallow: cT,
              continues: MT
            } = lT.onKeyDown(TT, !(0, jT.z)(TT) || (0, TM.g)() || (0, xc.s)(), gO(TT.code));
            cT && (TT.stopImmediatePropagation(), dO(TT) && TT.preventDefault()), MT && ((0, jT.u)("keyboardMouse"), kT())
          },
          KT = TT => {
            TT.isTrusted && lT.onKeyUp(TT) && (TT.stopImmediatePropagation(), dO(TT) && TT.preventDefault())
          },
          yT = () => {
            lT.forgetKeys()
          };
        window.addEventListener("keydown", MT, !0), window.addEventListener("keyup", KT, !0), window.addEventListener("blur", yT);
        const fT = OT.e.onFrame((TT => {
            const MT = AT.d.getActiveConsumerName(),
              KT = cT(),
              OT = KT ? (0, IT.j)("menuBack") : null,
              yT = null !== MT && "gameplay" !== MT,
              {
                continues: fT,
                back: xT,
                consumeHeld: vT
              } = lT.onPadFrame(TT, yT, OT, (0, jT.m)(TT));
            if (vT) {
              const TT = (0, CT.g)().swapSticks ? "right" : "left";
              AT.d.consumeAllHeld(lT.consumeLeavesMoveStick() ? TT : null)
            }
            xT ? null === KT || void 0 === KT || KT() : fT && kT()
          })),
          xT = (0, TM.j)(`pressToContinue:${TT}`, (() => lT.blocksGameplay()));
        return {
          setArmed: TT => {
            lT.setArmed(TT)
          },
          dispose: () => {
            window.removeEventListener("keydown", MT, !0), window.removeEventListener("keyup", KT, !0), window.removeEventListener("blur", yT), fT(), xT()
          }
        }
      };
    var YO = cT(4945),
      BO = cT(3365),
      WO = cT(3059),
      nO = cT(8215);
    const pO = TT => {
        let {
          text: kT
        } = TT;
        return (0, XT.jsx)("div", {
          className: "ControllerSettingsHeading",
          children: kT
        })
      },
      iO = TT => {
        let {
          label: kT,
          hint: cT,
          options: lT,
          value: KT,
          onChange: OT
        } = TT;
        const {
          t: yT
        } = (0, MT.B)();
        return (0, XT.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, XT.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: [(0, XT.jsxs)("div", {
              className: "ControllerChoiceText",
              children: [(0, XT.jsx)("div", {
                className: "SliderText",
                children: kT
              }), cT && (0, XT.jsx)("div", {
                className: "ControllerSettingsHint",
                children: cT
              })]
            }), (0, XT.jsx)(WO.d, {
              options: lT.map((TT => ({
                label: "label" in TT ? TT.label : yT(TT.labelKey),
                value: TT.value
              }))),
              value: KT,
              onChange: TT => {
                OT(TT.value)
              }
            })]
          })
        })
      },
      qO = TT => {
        let {
          settingKey: kT,
          label: cT,
          range: lT,
          format: MT
        } = TT;
        const KT = (0, CT.o)();
        return (0, XT.jsx)(YO.l, {
          name: cT,
          min: lT.min,
          max: lT.max,
          step: lT.step,
          padStep: lT.step,
          initValue: KT[kT],
          format: MT,
          onChange: TT => {
            (0, CT.n)({
              [kT]: (0, nO.v)(TT, lT)
            })
          }
        })
      };
    var sO = cT(8886),
      Ty = cT(8895);
    const ky = TT => TT instanceof DOMException && ("SecurityError" === TT.name || "NotAllowedError" === TT.name),
      cy = TT => {
        const [kT] = [...TT.controllers].sort(((TT, kT) => Ty.i[TT] - Ty.i[kT]));
        return Ty.g[kT]
      },
      ly = TT => {
        (0, sO.d)().allowPhoneMotion().catch((kT => {
          TT && ky(kT) ? TT() : console.warn("Could not enable the motion sensor", kT)
        }))
      },
      My = {
        waiting: "controller:settingsGyroPhoneWaiting",
        noSensor: "controller:settingsGyroPhoneNoSensor",
        on: "controller:settingsGyroPhoneOn",
        denied: "controller:settingsGyroPhoneDenied"
      },
      Ky = TT => {
        let {
          status: kT
        } = TT;
        const {
          t: cT
        } = (0, MT.B)(), [lT, KT] = (0, ET.useState)(null), OT = `${kT.controllers.join(",")}|${kT.phoneMotion}`;
        (0, ET.useEffect)((() => {
          KT(null)
        }), [OT]);
        const yT = () => {
          (0, sO.d)().connectController().then((TT => {
            KT(TT > 0 ? "openFailed" : null)
          })).catch((TT => {
            ky(TT) ? KT("needsClick") : console.warn("Could not connect motion controller", TT)
          }))
        };
        if (kT.hidSupported) {
          let TT = cT("controller:settingsGyroConnectHint");
          return "needsClick" === lT ? TT = cT("controller:settingsGyroConnectNeedsClick") : "openFailed" === lT ? TT = cT("controller:settingsGyroOpenFailed") : kT.controllers.length > 0 && (TT = cT("controller:settingsGyroConnected", {
            name: cy(kT)
          })), (0, XT.jsx)("div", {
            className: "SettingBox ControllerChoiceSetting",
            children: (0, XT.jsxs)("div", {
              className: "ControllerChoiceRow",
              children: [(0, XT.jsx)("div", {
                className: "ControllerSettingsHint",
                children: TT
              }), (0, XT.jsx)(HO.e, {
                onClick: yT,
                children: cT("controller:settingsGyroConnect")
              })]
            })
          })
        }
        if ("needsPermission" === kT.phoneMotion) return (0, XT.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, XT.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: ["needsTap" === lT && (0, XT.jsx)("div", {
              className: "ControllerSettingsHint",
              children: cT("controller:settingsGyroAllowNeedsTap")
            }), (0, XT.jsx)(HO.e, {
              onClick: () => {
                ly((() => {
                  KT("needsTap")
                }))
              },
              children: cT("controller:settingsGyroAllowMotion")
            })]
          })
        });
        const fT = My[kT.phoneMotion];
        return fT ? (0, XT.jsx)("div", {
          className: "ControllerSettingsHint",
          children: cT(fT)
        }) : null
      },
      Oy = () => {
        const {
          t: TT
        } = (0, MT.B)(), kT = (0, CT.o)(), cT = (0, sO.f)(), lT = (0, jT.x)(), KT = !cT.hidSupported && cT.phoneSupported && !cT.padConnected, OT = (cT.hidSupported || cT.phoneSupported) && !KT, yT = (0, IT.j)("pause");
        return (0, XT.jsxs)(XT.Fragment, {
          children: [(0, XT.jsx)(pO, {
            text: TT("controller:settingsGyro")
          }), KT && (0, XT.jsx)("div", {
            className: "ControllerSettingsHint",
            children: TT("controller:settingsGyroPhoneNeedsController")
          }), !OT && !KT && (0, XT.jsx)("div", {
            className: "ControllerSettingsHint",
            children: TT(cT.hidBlocked || cT.phoneBlocked ? "controller:settingsGyroBlocked" : "controller:settingsGyroUnsupported")
          }), OT && (0, XT.jsx)(YO.e, {
            label: TT(cT.hidSupported ? "controller:settingsGyroToggle" : "controller:settingsGyroTogglePhone"),
            checked: kT.gyroAiming,
            onClick: TT => {
              var kT, cT;
              (0, CT.n)({
                gyroAiming: TT
              });
              const lT = null === (kT = null === (cT = navigator.userActivation) || void 0 === cT ? void 0 : cT.isActive) || void 0 === kT || kT;
              if (!TT || !lT) return;
              const MT = (0, sO.d)(),
                KT = MT.getStatus();
              KT.hidSupported ? MT.connectControllerIfNoneGranted().catch((TT => {
                console.warn("Motion controller picker unavailable", TT)
              })) : "needsPermission" === KT.phoneMotion && ly()
            },
            circleInfoText: TT(cT.hidSupported ? "controller:settingsGyroToggleInfo" : "controller:settingsGyroToggleInfoPhone")
          }), OT && cT.hidSupported && (0, XT.jsx)("div", {
            className: "ControllerSettingsHint",
            children: TT("controller:settingsGyroSteamHint")
          }), OT && kT.gyroAiming && (0, XT.jsxs)(XT.Fragment, {
            children: [(0, XT.jsx)(Ky, {
              status: cT
            }), (0, XT.jsx)(qO, {
              settingKey: "gyroSensitivity",
              label: TT("controller:settingsGyroSensitivity"),
              range: nO.N,
              format: nO.E
            }), (0, XT.jsx)(iO, {
              label: TT("controller:settingsGyroActivation"),
              hint: "aiming" === kT.gyroActivation && (0, XT.jsx)(BO.b, {
                text: TT("controller:settingsGyroAimingHint", {
                  button: BO.f
                }),
                glyph: (0, IT.j)("use")
              }),
              options: nO.L,
              value: kT.gyroActivation,
              onChange: TT => {
                (0, CT.n)({
                  gyroActivation: TT
                })
              }
            }), "button" === kT.gyroActivation && (0, XT.jsx)(iO, {
              label: TT("controller:settingsGyroButton"),
              hint: TT("controller:settingsGyroButtonHint"),
              options: nO.t.filter((TT => TT !== yT || TT === kT.gyroButton)).map((TT => ({
                label: aM(lT, TT),
                value: TT
              }))),
              value: kT.gyroButton,
              onChange: TT => {
                (0, CT.n)({
                  gyroButton: TT
                })
              }
            })]
          })]
        })
      };
    var yy = cT(1875);
    const fy = () => {
      const {
        t: TT
      } = (0, MT.B)(), kT = (0, CT.o)(), cT = (0, jT.x)();
      return (0, XT.jsxs)(XT.Fragment, {
        children: [(0, XT.jsx)(pO, {
          text: TT("controller:settingsAccessibility")
        }), (0, XT.jsx)(YO.e, {
          label: TT("controller:settingsSwapConfirmBack"),
          checked: (0, IT.A)(kT.swapConfirmBack, cT),
          onClick: TT => {
            (0, CT.n)({
              swapConfirmBack: TT === (0, IT.A)(null, cT) ? null : TT
            }), yy.g.showMessage({
              translationKey: "controller:settingsSwapToast"
            })
          },
          circleInfoText: TT("controller:settingsSwapConfirmBackInfo")
        }), (0, XT.jsx)(iO, {
          label: TT("controller:settingsButtonRepeat"),
          hint: TT("controller:settingsButtonRepeatHint"),
          options: nO.r,
          value: kT.buttonRepeat,
          onChange: TT => {
            (0, CT.n)({
              buttonRepeat: TT
            })
          }
        }), (0, XT.jsx)(iO, {
          label: TT("controller:settingsTapHoldTime"),
          hint: TT("controller:settingsTapHoldTimeHint"),
          options: nO.pb,
          value: kT.tapHoldTime,
          onChange: TT => {
            (0, CT.n)({
              tapHoldTime: TT
            })
          }
        }), (0, XT.jsx)(iO, {
          label: TT("controller:settingsEmoteButton"),
          hint: TT("wheel" === kT.emoteButton ? "controller:settingsEmoteButtonWheelHint" : "controller:settingsEmoteButtonTapHoldHint"),
          options: nO.B,
          value: kT.emoteButton,
          onChange: TT => {
            (0, CT.n)({
              emoteButton: TT
            })
          }
        }), (0, XT.jsx)(iO, {
          label: TT("controller:settingsAttackMode"),
          hint: TT("toggle" === kT.attackMode ? "controller:settingsAttackToggleHint" : "controller:settingsAttackHoldHint"),
          options: nO.o,
          value: kT.attackMode,
          onChange: TT => {
            (0, CT.n)({
              attackMode: TT
            })
          }
        }), (0, XT.jsx)(YO.e, {
          label: TT("controller:settingsLargePointer"),
          checked: kT.largePointer,
          onClick: TT => {
            (0, CT.n)({
              largePointer: TT
            })
          },
          circleInfoText: TT("controller:settingsLargePointerInfo")
        })]
      })
    };
    var xy = cT(8897);
    const Iy = new class {
        constructor(TT) {
          this.router = TT, this.current = null
        }
        claim(TT, kT) {
          const cT = this.current;
          cT && (this.current = null, cT.release(), cT.onTakenOver());
          const lT = this.router.register({
              ...TT,
              name: "capture"
            }),
            MT = {
              release: lT,
              onTakenOver: kT
            };
          return this.current = MT, () => {
            this.current === MT && (this.current = null), lT()
          }
        }
      }(AT.d),
      Ay = TT => {
        (0, ET.useEffect)((() => {
          if (!TT) return;
          const kT = TT();
          let cT = !1;
          const lT = () => {
              cT || (cT = !0, kT.onEnd())
            },
            MT = Iy.claim({
              isActive: () => !cT,
              onFrame: TT => {
                kT.onFrame(TT, lT)
              }
            }, lT),
            KT = void 0 === kT.timeoutMs ? void 0 : window.setTimeout(lT, kT.timeoutMs),
            OT = TT => {
              "Escape" === TT.key && (TT.preventDefault(), TT.stopPropagation(), lT())
            };
          return window.addEventListener("keydown", OT, !0), () => {
            cT = !0, MT(), window.clearTimeout(KT), window.removeEventListener("keydown", OT, !0)
          }
        }), [TT])
      },
      Cy = TT => {
        let {
          row: kT,
          capturing: cT,
          onCapture: lT,
          holdFillRef: KT,
          onRebind: OT,
          swapped: yT
        } = TT;
        const {
          t: fT
        } = (0, MT.B)();
        if ("fixed" === kT.kind) return (0, XT.jsx)("div", {
          className: "ControlRow PadControlRow PadControlRowFixed",
          children: (0, XT.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, XT.jsx)("div", {
              className: "ControlName",
              children: fT(kT.labelKey)
            }), (0, XT.jsx)("div", {
              className: "ControlBindingsContainer",
              children: (0, XT.jsx)("div", {
                className: "ControlBindingsList",
                children: (0, XT.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  children: (0, XT.jsx)(FM, {
                    glyph: "move" === kT.stick ? (0, IT.q)() : (0, IT.n)()
                  })
                })
              })
            })]
          })
        });
        const {
          action: xT
        } = kT, AT = (0, IT.j)(xT), CT = (0, IT.k)(xT), jT = AT !== CT && (0, IT.e)(xT, CT);
        return (0, XT.jsxs)("div", {
          className: uT()("ControlRow PadControlRow", {
            Capturing: cT
          }),
          children: [(0, XT.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, XT.jsx)("div", {
              className: "ControlName",
              children: fT(nO.h[xT])
            }), (0, XT.jsxs)("div", {
              className: "ControlBindingsContainer",
              children: [!cT && (0, XT.jsxs)("div", {
                className: "ControlBindingsList",
                children: [(0, XT.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    lT(xT)
                  },
                  children: (0, XT.jsx)(FM, {
                    glyph: AT
                  })
                }), jT && (0, XT.jsx)("div", {
                  className: "ControlBinding PadBindingReset",
                  title: fT("controller:settingsReset"),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    OT(xT, CT)
                  },
                  children: (0, XT.jsx)(JO.e, {
                    name: "arrows-rotate"
                  })
                })]
              }), cT && (0, XT.jsxs)("div", {
                className: "ControlBindingAddInput",
                children: [(0, XT.jsxs)("div", {
                  className: "PadCaptureBox",
                  children: [(0, XT.jsx)("span", {
                    children: fT("controller:settingsCapturePrompt")
                  }), (0, XT.jsx)("div", {
                    ref: KT,
                    className: "PadCaptureHoldFill"
                  })]
                }), (0, XT.jsx)("div", {
                  className: "ControlBindingAddCancel",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    lT(null)
                  },
                  children: "\xd7"
                })]
              }), cT && (0, XT.jsx)("div", {
                className: "PadCaptureHint",
                children: (0, XT.jsx)(BO.b, {
                  text: fT((0, IT.e)(xT, (0, IT.j)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
                    button: BO.f
                  }),
                  glyph: (0, IT.j)("menuBack")
                })
              })]
            })]
          }), yT.map((TT => (0, XT.jsx)("div", {
            className: "ControlRowWarning PadSwapNotice",
            children: (0, XT.jsx)(BO.b, {
              text: fT("controller:settingsSwapNotice", {
                action: fT(nO.h[TT]),
                button: BO.f
              }),
              glyph: (0, IT.j)(TT)
            })
          }, TT))), cT && (0, XT.jsx)("div", {
            className: "PadCaptureTimer",
            style: {
              animationDuration: `${nO.u}ms`
            }
          })]
        })
      },
      jy = [],
      vy = TT => {
        let {
          layoutSetting: kT
        } = TT;
        const {
          t: cT
        } = (0, MT.B)(), lT = (0, CT.o)();
        (0, jT.x)();
        const KT = (0, ET.useRef)(null),
          [OT, yT] = (0, ET.useState)(null),
          fT = (0, ET.useCallback)(((TT, kT) => {
            const cT = (0, CT.g)().bindings;
            (0, IT.w)(TT, kT);
            const lT = (0, IT.s)(cT, TT);
            yT(lT.length > 0 ? {
              action: TT,
              swapped: lT
            } : null)
          }), []),
          [xT, tT] = ((TT, kT) => {
            const [cT, lT] = (0, ET.useState)(null), MT = (0, ET.useMemo)((() => cT ? () => {
              const MT = (0, IT.j)("menuBack"),
                KT = new nO.b(MT, (0, IT.j)("menuConfirm"), (TT => (0, IT.e)(cT, TT)));
              return {
                onFrame: (lT, OT) => {
                  var yT;
                  const fT = lT.frame.timestampMs,
                    xT = KT.update({
                      ...lT,
                      isDown: TT => (0, vT.J)(lT.frame.values, TT)
                    }, fT);
                  null === (yT = TT.current) || void 0 === yT || yT.style.setProperty("width", 100 * KT.getBindHoldProgress(fT) + "%"), xT && ("bind" === xT.kind ? (AT.d.consumeButton(xT.button), kT(cT, xT.button)) : AT.d.consumeButton(MT), OT())
                },
                onEnd: () => {
                  lT(null)
                },
                timeoutMs: nO.u
              }
            } : null), [cT, TT, kT]);
            return Ay(MT), [cT, lT]
          })(KT, fT),
          hT = TT => {
            TT && yT(null), tT(TT)
          };
        (0, ET.useEffect)((() => {
          if (!OT) return;
          const TT = window.setTimeout((() => {
            yT(null)
          }), nO.nb);
          return () => {
            window.clearTimeout(TT)
          }
        }), [OT]);
        const NT = !lT.swapSticks && 0 === Object.keys(lT.bindings).length;
        return (0, XT.jsxs)("div", {
          className: "ControlsContainer PadControlsContainer",
          children: [(0, XT.jsx)("div", {
            className: "SliderText",
            children: cT("controller:settingsRemap")
          }), (0, XT.jsx)("div", {
            className: "ControllerSettingsHint",
            children: cT("controller:settingsRemapHint")
          }), (0, XT.jsx)(HO.I, {
            className: "ResetBindingsButton PadResetAllButton",
            disabled: NT,
            onClick: () => {
              hT(null), yT(null), (0, IT.z)()
            },
            children: cT("controller:settingsResetAll")
          }), kT, nO.gb.map(((TT, kT) => (0, XT.jsx)(xy.c, {
            title: cT(TT.titleKey),
            defaultOpen: 0 === kT,
            children: TT.rows.map((TT => (0, XT.jsx)(Cy, {
              row: TT,
              capturing: "action" === TT.kind && TT.action === xT,
              onCapture: hT,
              holdFillRef: KT,
              onRebind: fT,
              swapped: "action" === TT.kind && (null === OT || void 0 === OT ? void 0 : OT.action) === TT.action ? OT.swapped : jy
            }, "action" === TT.kind ? TT.action : TT.labelKey)))
          }, TT.titleKey)))]
        })
      },
      ty = TT => {
        let {
          deadzone: kT,
          dotRef: cT,
          labelKey: lT
        } = TT;
        const {
          t: KT
        } = (0, MT.B)();
        return (0, XT.jsxs)("div", {
          className: "ControllerTesterStick",
          children: [(0, XT.jsxs)("div", {
            className: "ControllerTesterStickCircle",
            children: [(0, XT.jsx)("div", {
              className: "ControllerTesterDeadzone",
              style: {
                width: 100 * kT + "%",
                height: 100 * kT + "%"
              }
            }), (0, XT.jsx)("div", {
              ref: cT,
              className: "ControllerTesterDot"
            })]
          }), (0, XT.jsx)("div", {
            className: "ControllerTesterStickLabel",
            children: KT(lT)
          })]
        })
      },
      hy = (TT, kT, cT, lT) => {
        var MT;
        TT && (TT.style.left = 50 + 50 * Math.max(-1, Math.min(1, kT.x)) + "%", TT.style.top = 50 + 50 * Math.max(-1, Math.min(1, kT.y)) + "%", null === (MT = TT.parentElement) || void 0 === MT || MT.classList.toggle("Active", lT || Math.hypot(kT.x, kT.y) > cT))
      },
      Ny = TT => {
        const kT = {
            deadzone: TT.moveDeadzone,
            labelKey: "controller:settingsActionMove"
          },
          cT = {
            deadzone: TT.lookDeadzone,
            labelKey: "controller:settingsActionLook"
          };
        return TT.swapSticks ? {
          left: cT,
          right: kT
        } : {
          left: kT,
          right: cT
        }
      },
      Qy = () => {
        const {
          t: TT
        } = (0, MT.B)(), kT = (() => {
          const [TT, kT] = (0, ET.useState)((() => OT.e.getActivePad()));
          return (0, hM.g)(OT.c, (() => {
            kT(OT.e.getActivePad())
          })), TT
        })(), cT = Ny((0, CT.o)()), lT = (0, ET.useRef)(null), KT = (0, ET.useRef)(null), yT = (0, ET.useRef)([]), fT = (0, ET.useRef)(null), xT = (0, ET.useRef)(null), [jT, tT] = (TT => {
          const [kT, cT] = (0, ET.useState)(!1), lT = (0, ET.useMemo)((() => kT ? () => {
            const kT = (0, IT.j)("menuBack"),
              lT = new nO.f;
            return {
              onFrame: (cT, MT) => {
                var KT;
                const OT = lT.update({
                  pressed: cT.wasPressed(kT),
                  ty: cT.isHeld(kT)
                }, cT.frame.timestampMs);
                null === (KT = TT.current) || void 0 === KT || KT.style.setProperty("width", 100 * OT + "%"), OT >= 1 && (AT.d.consumeButton(kT), MT())
              },
              onEnd: () => {
                cT(!1)
              }
            }
          } : null), [kT, TT]);
          return Ay(lT), [kT, cT]
        })(KT);
        (0, ET.useEffect)((() => {
          const TT = TT => {
            for (const cT of vT.ab) {
              const kT = (0, vT.o)(cT),
                lT = yT.current[kT];
              if (!lT) continue;
              const MT = TT.values[kT];
              lT.classList.toggle("Pressed", MT >= vT.z), (0, vT.N)(kT) && lT.style.setProperty("--trigger-fill", `${Math.round(100*MT)}%`)
            }
            const kT = Ny((0, CT.g)());
            hy(fT.current, TT.leftStick, kT.left.deadzone, TT.values[(0, vT.o)("LS")] >= vT.z), hy(xT.current, TT.rightStick, kT.right.deadzone, TT.values[(0, vT.o)("RS")] >= vT.z)
          };
          return kT || TT((0, vT.x)()), OT.e.onFrame(TT)
        }), [kT]), (0, ET.useEffect)((() => {
          kT || tT(!1)
        }), [kT, tT]), (0, ET.useEffect)((() => {
          var TT;
          jT && (null === (TT = lT.current) || void 0 === TT || TT.scrollIntoView({
            block: "nearest"
          }))
        }), [jT]);
        const hT = nO.$.find((TT => TT.value === (null === kT || void 0 === kT ? void 0 : kT.family)));
        return (0, XT.jsxs)("div", {
          ref: lT,
          className: uT()("SettingBox ControllerTester", {
            Testing: jT
          }),
          children: [(0, XT.jsxs)("div", {
            className: "ControllerTesterHeader",
            children: [(0, XT.jsxs)("div", {
              className: "ControllerTesterInfo",
              children: [kT && (0, XT.jsx)("div", {
                children: TT("controller:settingsTesterFamily", {
                  family: hT ? TT(hT.labelKey) : kT.family
                })
              }), kT && (0, XT.jsx)("div", {
                className: "ControllerTesterPadId",
                children: kT.id
              }), !kT && (0, XT.jsx)("div", {
                children: TT("controller:settingsTesterNoPad")
              })]
            }), (kT || jT) && (0, XT.jsx)(HO.e, {
              className: "ControllerTesterToggle",
              onClick: () => {
                tT(!jT)
              },
              children: TT(jT ? "controller:settingsTesterStop" : "controller:settingsTesterStart")
            })]
          }), kT && !jT && (0, XT.jsx)("div", {
            className: "ControllerSettingsHint",
            children: TT("controller:settingsTesterHint")
          }), jT && (0, XT.jsxs)("div", {
            className: "ControllerTesterBanner",
            children: [(0, XT.jsx)(BO.b, {
              text: TT("controller:settingsTesterTesting", {
                button: BO.f
              }),
              glyph: (0, IT.j)("menuBack")
            }), (0, XT.jsx)("div", {
              ref: KT,
              className: "ControllerTesterExitFill"
            })]
          }), (0, XT.jsxs)("div", {
            className: "ControllerTesterBody",
            children: [(0, XT.jsx)(ty, {
              deadzone: cT.left.deadzone,
              dotRef: fT,
              labelKey: cT.left.labelKey
            }), (0, XT.jsx)("div", {
              className: "ControllerTesterButtons",
              children: vT.ab.map((TT => {
                const cT = (0, vT.o)(TT);
                return (0, XT.jsx)("div", {
                  ref: TT => {
                    yT.current[cT] = TT
                  },
                  className: (0, vT.N)(cT) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
                  children: (0, XT.jsx)(FM, {
                    glyph: TT,
                    family: null === kT || void 0 === kT ? void 0 : kT.family
                  })
                }, TT)
              }))
            }), (0, XT.jsx)(ty, {
              deadzone: cT.right.deadzone,
              dotRef: xT,
              labelKey: cT.right.labelKey
            })]
          })]
        })
      },
      Sy = (0, ET.memo)((function() {
        const {
          t: TT
        } = (0, MT.B)(), kT = (0, CT.o)(), [cT, lT] = (0, ET.useState)(!1);
        return (0, ET.useEffect)((() => {
          if (!cT) return;
          const TT = window.setTimeout((() => {
            lT(!1)
          }), nO.nb);
          return () => {
            window.clearTimeout(TT)
          }
        }), [cT]), (0, XT.jsxs)("div", {
          className: "SettingsMenuRightInner ControllerCategory",
          children: [(0, XT.jsx)(pO, {
            text: TT("controller:settingsLook")
          }), (0, XT.jsx)(qO, {
            settingKey: "lookSensitivityX",
            label: TT("controller:settingsLookSensitivityX"),
            range: nO.ib,
            format: nO.I
          }), (0, XT.jsx)(qO, {
            settingKey: "lookSensitivityY",
            label: TT("controller:settingsLookSensitivityY"),
            range: nO.ib,
            format: nO.I
          }), (0, XT.jsx)(qO, {
            settingKey: "aimLookSensitivity",
            label: TT("controller:settingsAimLookSensitivity"),
            range: nO.k,
            format: nO.I
          }), (0, XT.jsx)(iO, {
            label: TT("controller:settingsLookCurve"),
            hint: TT("controller:settingsLookCurveHint"),
            options: nO.V,
            value: kT.lookCurve,
            onChange: TT => {
              (0, CT.n)({
                lookCurve: TT
              })
            }
          }), (0, XT.jsx)(YO.e, {
            label: TT("controller:settingsInvertLookX"),
            checked: kT.invertLookX,
            onClick: TT => {
              (0, CT.n)({
                invertLookX: TT
              })
            }
          }), (0, XT.jsx)(YO.e, {
            label: TT("controller:settingsInvertLookY"),
            checked: kT.invertLookY,
            onClick: TT => {
              (0, CT.n)({
                invertLookY: TT
              })
            }
          }), (0, XT.jsx)(qO, {
            settingKey: "lookDeadzone",
            label: TT("controller:settingsLookDeadzone"),
            range: nO.y,
            format: nO.D
          }), (0, XT.jsx)(Oy, {}), (0, XT.jsx)(pO, {
            text: TT("controller:settingsMovement")
          }), (0, XT.jsx)(qO, {
            settingKey: "moveDeadzone",
            label: TT("controller:settingsMoveDeadzone"),
            range: nO.y,
            format: nO.D
          }), (0, XT.jsx)(YO.e, {
            label: TT("controller:settingsAutoSprint"),
            checked: kT.autoSprint,
            onClick: TT => {
              (0, CT.n)({
                autoSprint: TT
              })
            },
            circleInfoText: TT("controller:settingsAutoSprintInfo")
          }), (0, XT.jsx)(iO, {
            label: TT("controller:settingsSneak"),
            options: nO.mb,
            value: kT.sneakMode,
            onChange: TT => {
              (0, CT.n)({
                sneakMode: TT
              })
            }
          }), (0, XT.jsx)(pO, {
            text: TT("controller:settingsButtons")
          }), (0, XT.jsx)(iO, {
            label: TT("controller:settingsPromptFamily"),
            options: nO.$,
            value: kT.promptFamily,
            onChange: TT => {
              (0, CT.n)({
                promptFamily: TT
              })
            }
          }), (0, XT.jsx)(YO.e, {
            label: TT("controller:settingsHideButtonHints"),
            checked: kT.hideButtonHints,
            onClick: TT => {
              (0, CT.n)({
                hideButtonHints: TT
              })
            }
          }), (0, XT.jsx)(YO.e, {
            label: TT("controller:settingsVibration"),
            checked: kT.vibration,
            onClick: TT => {
              (0, CT.n)({
                vibration: TT
              }), TT && KM("preview")
            }
          }), (0, XT.jsx)(qO, {
            settingKey: "cursorSpeed",
            label: TT("controller:settingsCursorSpeed"),
            range: nO.w,
            format: nO.I
          }), (0, XT.jsx)(YO.e, {
            label: TT("controller:settingsCursorMagnetism"),
            checked: kT.cursorMagnetism,
            onClick: TT => {
              (0, CT.n)({
                cursorMagnetism: TT
              })
            }
          }), (0, XT.jsx)(YO.e, {
            label: TT("controller:settingsMenuBackToCategories"),
            checked: kT.menuBackToCategories,
            onClick: TT => {
              (0, CT.n)({
                menuBackToCategories: TT
              })
            }
          }), (0, XT.jsx)(vy, {
            layoutSetting: (0, XT.jsxs)(XT.Fragment, {
              children: [IT.g.map((cT => (0, XT.jsx)(YO.e, {
                label: TT(nO.T[cT]),
                checked: (0, IT.v)(cT, kT),
                onClick: TT => {
                  lT(!(0, IT.E)(cT, TT))
                }
              }, cT))), cT && (0, XT.jsx)("div", {
                className: "PadLayoutRefusedNotice",
                role: "status",
                children: TT("controller:settingsLayoutRefusedToast")
              })]
            })
          }), (0, XT.jsx)(fy, {}), (0, XT.jsx)(pO, {
            text: TT("controller:settingsAlternatives")
          }), (0, XT.jsx)("div", {
            className: "ControllerSettingsHint",
            children: TT("controller:settingsAlternativesHint")
          }), (0, XT.jsx)(iO, {
            label: TT("controller:settingsMenuNavigation"),
            hint: TT("controller:settingsMenuNavigationHint"),
            options: nO.Y,
            value: kT.menuNavigation,
            onChange: TT => {
              (0, CT.n)({
                menuNavigation: TT
              })
            }
          }), (0, XT.jsx)(iO, {
            label: TT("controller:settingsInventoryNavigation"),
            hint: TT("controller:settingsInventoryNavigationHint"),
            options: nO.R,
            value: kT.inventoryNavigation,
            onChange: TT => {
              (0, CT.n)({
                inventoryNavigation: TT
              })
            }
          }), (0, XT.jsx)(iO, {
            label: TT("controller:settingsQuickChat"),
            hint: TT("controller:settingsQuickChatHint"),
            options: nO.cb,
            value: kT.quickChat,
            onChange: TT => {
              (0, CT.n)({
                quickChat: TT
              })
            }
          }), (0, XT.jsx)(iO, {
            label: TT("controller:settingsLeaderboardButton"),
            hint: TT("controller:settingsLeaderboardButtonHint"),
            options: nO.U,
            value: kT.leaderboardButton,
            onChange: TT => {
              (0, CT.n)({
                leaderboardButton: TT
              })
            }
          }), (0, XT.jsx)(pO, {
            text: TT("controller:settingsTester")
          }), (0, XT.jsx)(Qy, {})]
        })
      }));
    (0, MT.c)(lT);
    for (const Py of (0, KT.q)()) Py.connected ? OT.e.handleConnectionEvent(Py) : OT.e.handleDisconnectionEvent(Py);
    const Dy = () => null !== OT.e.getActivePad(),
      ay = () => Kc.getState(),
      Fy = () => Kc.isSteppingSlots(),
      ry = (TT, kT) => {
        const cT = sl.getFocused();
        sl.isActive() && cT && TT.contains(cT) && sl.setFocus(kT, {
          scroll: !1
        })
      }
  },
  8194: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => fT,
      e: () => xT
    });
    var lT = cT(1436),
      MT = cT(1428);
    const KT = {
        "054c": "playstation",
        "057e": "nintendo"
      },
      OT = "28de",
      yT = new Set(["1205"]),
      fT = (TT, kT) => {
        const cT = (0, lT.c)(TT);
        if ((null === cT || void 0 === cT ? void 0 : cT.vendor) === OT) return yT.has(cT.product) ? "steamdeck" : "xbox";
        if (cT && KT[cT.vendor]) return KT[cT.vendor];
        if ((0, MT.b)(TT)) return "nintendo";
        const fT = `${TT} ${null!==kT&&void 0!==kT?kT:""}`.toLowerCase();
        return /dualsense|dualshock|playstation|sony/.test(fT) ? "playstation" : /nintendo|switch|joy-con|pro controller/.test(fT) ? "nintendo" : /steam deck/.test(fT) ? "steamdeck" : "xbox"
      },
      xT = TT => {
        var kT;
        return (null === (kT = (0, lT.c)(TT)) || void 0 === kT ? void 0 : kT.vendor) === OT
      }
  },
  8227: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => xT,
      f: () => yT
    });
    var lT = cT(8190);
    const MT = ["capture", "keyboard", "wheel", "inventory", "cursor", "focus", "gameplay"],
      KT = new Set(["capture", "gameplay"]),
      OT = ["Up", "Down", "Left", "Right"],
      yT = TT => OT.includes(TT),
      fT = .25;
    const xT = new class {
      constructor() {
        this.consumers = new Map, this.activeName = null, this.ty = new Array(lT.Y).fill(!1), this.previousHeld = new Array(lT.Y).fill(!1), this.consumedButtons = new Array(lT.Y).fill(!1), this.suppressedReleases = new Array(lT.Y).fill(!1), this.wakeOwned = new Array(lT.Y).fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.peek = null, this.lastFrame = (0, lT.x)()
      }
      register(TT) {
        return this.consumers.has(TT.name) && console.warn(`Controller consumer "${TT.name}" registered twice; the newer one replaces it.`), this.consumers.set(TT.name, TT), () => {
          var kT;
          this.consumers.get(TT.name) === TT && (this.activeName === TT.name ? (this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()) : (null === (kT = this.peek) || void 0 === kT ? void 0 : kT.over) === TT.name && (this.peek = null), this.consumers.delete(TT.name))
        }
      }
      getActiveConsumerName() {
        return this.activeName
      }
      isButtonHeld(TT) {
        return this.ty[(0, lT.o)(TT)]
      }
      getLastFrame() {
        return this.lastFrame
      }
      clear() {
        this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()
      }
      reset() {
        this.deactivateCurrent(), this.activeName = null, this.ty = new Array(lT.Y).fill(!1), this.previousHeld = new Array(lT.Y).fill(!1), this.consumedButtons.fill(!1), this.suppressedReleases.fill(!1), this.wakeOwned.fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.lastFrame = (0, lT.x)()
      }
      dispatch(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.lastFrame = TT, this.previousHeld = this.ty, this.ty = (0, lT.r)(TT.values, this.previousHeld);
        for (let KT = 0; KT < lT.Y; KT++) this.suppressedReleases[KT] = !this.ty[KT] && this.consumedButtons[KT], this.ty[KT] || (this.consumedButtons[KT] = !1), this.wakeOwned[KT] && (this.ty[KT] ? (this.consumedButtons[KT] = !0, this.wakeOwned[KT] = !1) : TT.values[KT] < lT.U && (this.wakeOwned[KT] = !1));
        Math.hypot(TT.leftStick.x, TT.leftStick.y) < fT && (this.leftStickConsumed = !1), Math.hypot(TT.rightStick.x, TT.rightStick.y) < fT && (this.rightStickConsumed = !1);
        const MT = this.pickActive();
        if ((null === MT || void 0 === MT ? void 0 : MT.name) !== this.activeName) {
          var OT, yT, xT, IT, AT, CT;
          const TT = this.activeName,
            kT = {
              left: !this.leftStickConsumed,
              right: !this.rightStickConsumed
            },
            cT = null !== (OT = null === MT || void 0 === MT || null === (yT = MT.peek) || void 0 === yT ? void 0 : yT.call(MT)) && void 0 !== OT ? OT : null,
            KT = null === TT && !!cT && !(null === (xT = this.consumers.get(cT.over)) || void 0 === xT || !xT.onPeekFrame),
            fT = cT && (cT.over === TT || KT) ? cT : null,
            jT = null !== this.peek && this.peek.over === (null === MT || void 0 === MT ? void 0 : MT.name) ? this.peek : null;
          this.deactivateCurrent(null !== fT, null !== jT), this.activeName = null !== (IT = null === MT || void 0 === MT ? void 0 : MT.name) && void 0 !== IT ? IT : null, null === TT || this.handOffPending || this.consumeAllHeld();
          const vT = null === (AT = null !== fT && void 0 !== fT ? fT : jT) || void 0 === AT ? void 0 : AT.stick;
          "left" === vT && kT.left ? this.leftStickConsumed = !1 : "right" === vT && kT.right && (this.rightStickConsumed = !1), this.peek = fT, MT || null === TT ? MT && (null === (CT = this.idleResume) || void 0 === CT ? void 0 : CT.name) === MT.name && (this.idleResume.left && (this.leftStickConsumed = !1), this.idleResume.right && (this.rightStickConsumed = !1)) : this.idleResume = {
            name: TT,
            left: kT.left && this.leftStickConsumed,
            right: kT.right && this.rightStickConsumed
          }, MT && (this.idleResume = null);
          for (let MT = 0; MT < lT.Y; MT++) this.previousHeld[MT] && !this.ty[MT] && (this.suppressedReleases[MT] = !0)
        }
        var jT, vT;
        (this.handOffPending = !1, MT) && (cT && !KT.has(MT.name) && this.consumeWakePress(MT), MT.onFrame(this.buildInput(TT, kT, cT)), this.peek && (null === (jT = this.consumers.get(this.peek.over)) || void 0 === jT || null === (vT = jT.onPeekFrame) || void 0 === vT || vT.call(jT, this.buildInput(TT, kT, !1, this.peek.stick))))
      }
      consumeWakePress(TT) {
        for (let MT = 0; MT < lT.Y; MT++) {
          var kT, cT;
          const KT = lT.ab[MT];
          (null !== (kT = null === (cT = TT.wakePressActs) || void 0 === cT ? void 0 : cT.call(TT, KT)) && void 0 !== kT ? kT : OT.includes(KT)) || (this.ty[MT] ? this.consumedButtons[MT] = !0 : this.lastFrame.values[MT] >= lT.S && (this.wakeOwned[MT] = !0))
        }
      }
      pickActive() {
        for (const TT of MT) {
          const kT = this.consumers.get(TT);
          if (kT && kT.isActive()) return kT
        }
        return null
      }
      deactivateCurrent() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var cT, lT, MT, KT;
        this.activeName && (null === (cT = this.consumers.get(this.activeName)) || void 0 === cT || null === (lT = cT.onDeactivate) || void 0 === lT || lT.call(cT, TT));
        this.peek && !kT && (null === (MT = this.consumers.get(this.peek.over)) || void 0 === MT || null === (KT = MT.onDeactivate) || void 0 === KT || KT.call(MT, !1));
        this.peek = null
      }
      consumeAllHeld() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.idleResume = null;
        for (let MT = 0; MT < lT.Y; MT++) this.ty[MT] && (this.consumedButtons[MT] = !0);
        const {
          leftStick: kT,
          rightStick: cT
        } = this.lastFrame;
        this.leftStickConsumed = "left" !== TT && (this.leftStickConsumed || Math.hypot(kT.x, kT.y) >= fT), this.rightStickConsumed = "right" !== TT && (this.rightStickConsumed || Math.hypot(cT.x, cT.y) >= fT)
      }
      handOffHeldInput() {
        this.handOffPending = !0
      }
      consumeButton(TT) {
        const kT = (0, lT.o)(TT);
        this.ty[kT] && (this.consumedButtons[kT] = !0)
      }
      buildInput(TT, kT, cT, MT) {
        const KT = this.ty,
          OT = this.previousHeld,
          yT = MT ? new Array(lT.Y).fill(!0) : [...this.consumedButtons],
          fT = MT ? yT : [...this.suppressedReleases],
          xT = !this.leftStickConsumed && (!MT || "left" === MT),
          IT = !this.rightStickConsumed && (!MT || "right" === MT);
        return {
          frame: TT,
          dtMs: kT,
          isHeld: TT => {
            const kT = (0, lT.o)(TT);
            return KT[kT] && !yT[kT]
          },
          wasPressed: TT => {
            const kT = (0, lT.o)(TT);
            return KT[kT] && !OT[kT] && !yT[kT]
          },
          wasReleased: TT => {
            const kT = (0, lT.o)(TT);
            return !KT[kT] && OT[kT] && !fT[kT]
          },
          value: kT => {
            const cT = (0, lT.o)(kT);
            return yT[cT] ? 0 : TT.values[cT]
          },
          leftStick: xT ? TT.leftStick : {
            x: 0,
            y: 0
          },
          rightStick: IT ? TT.rightStick : {
            x: 0,
            y: 0
          },
          wokeDevice: cT
        }
      }
    }
  },
  8206: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => AT.d,
      f: () => AT.h,
      g: () => bT,
      j: () => zT,
      n: () => JT,
      o: () => oT
    });
    var lT = cT(71),
      MT = cT(36),
      KT = cT(1461),
      OT = cT(47),
      yT = cT(8209),
      fT = cT(8190),
      xT = cT(8202),
      IT = cT(8188),
      AT = cT(2040),
      CT = cT(8215);
    const jT = {
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
      vT = "controllerSettings",
      tT = ["bindings", "promptFamily", "hideButtonHints", "swapSticks", "swapConfirmBack", "leaderboardButton"],
      hT = ["auto", ...yT.e],
      NT = (TT, kT) => "string" === typeof kT && TT.includes(kT),
      QT = TT => kT => "number" === typeof kT && Number.isFinite(kT) ? (0, CT.v)(kT, TT) : void 0,
      ST = TT => "boolean" === typeof TT ? TT : void 0,
      DT = TT => kT => NT(TT, kT) ? kT : void 0,
      aT = {
        lookSensitivityX: QT(CT.ib),
        lookSensitivityY: QT(CT.ib),
        aimLookSensitivity: QT(CT.k),
        invertLookX: ST,
        invertLookY: ST,
        lookCurve: DT(fT.Q),
        lookDeadzone: QT(CT.y),
        moveDeadzone: QT(CT.y),
        swapSticks: ST,
        autoSprint: ST,
        sneakMode: DT(["toggle", "hold"]),
        tapHoldTime: DT(["short", "medium", "long"]),
        attackMode: DT(["hold", "toggle"]),
        promptFamily: DT(hT),
        hideButtonHints: ST,
        vibration: ST,
        cursorSpeed: QT(CT.w),
        cursorMagnetism: ST,
        buttonRepeat: DT(fT.p),
        largePointer: ST,
        menuBackToCategories: ST,
        swapConfirmBack: ST,
        menuNavigation: DT(["hybrid", "focus", "cursor"]),
        inventoryNavigation: DT(["hybrid", "slot", "cursor"]),
        quickChat: DT(["wheel", "off"]),
        leaderboardButton: DT(["shop", "leaderboard"]),
        gyroAiming: ST,
        gyroSensitivity: QT(CT.N),
        gyroActivation: DT(["always", "aiming", "button"]),
        gyroButton: DT(fT.ab),
        emoteButton: DT(["tapHold", "wheel"])
      },
      FT = [{
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
      rT = TT => {
        const kT = {};
        if ("object" !== typeof TT || null === TT) return kT;
        for (const [cT, lT] of Object.entries(TT)) Object.prototype.hasOwnProperty.call(xT.g, cT) && NT(fT.ab, lT) && (kT[cT] = lT);
        return kT
      },
      PT = TT => {
        const kT = {};
        for (const cT of Object.keys(jT))("bindings" === cT ? Object.keys(TT.bindings).length > 0 : TT[cT] !== jT[cT]) && (kT[cT] = TT[cT]);
        0 !== Object.keys(kT).length ? OT.e.setItem(vT, kT) : OT.e.removeItem(vT)
      };
    let wT = (() => {
        const TT = OT.e.getItem(vT),
          kT = (TT => {
            const kT = "object" === typeof TT && null !== TT ? TT : {},
              cT = {
                ...jT,
                bindings: rT(kT.bindings)
              };
            for (const MT of Object.keys(aT)) {
              const TT = aT[MT](kT[MT]);
              void 0 !== TT && (cT[MT] = TT)
            }
            const lT = Object.keys(kT).filter((TT => !!Object.prototype.hasOwnProperty.call(jT, TT) && ("bindings" === TT ? "object" !== typeof kT.bindings || null === kT.bindings || Object.keys(kT.bindings).length !== Object.keys(cT.bindings).length : cT[TT] !== kT[TT])));
            return lT.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${lT.join(", ")}`), cT
          })(TT);
        return null !== TT && void 0 !== TT && PT(kT), kT
      })(),
      mT = {
        ...wT,
        ...(() => {
          if ("undefined" === typeof window) return {};
          const TT = {},
            kT = new URLSearchParams(window.location.search);
          for (const {
              param: cT,
              key: lT
            }
            of FT) {
            const MT = aT[lT](kT.get(cT));
            void 0 !== MT && (TT[lT] = MT)
          }
          return TT
        })()
      };
    const bT = () => mT,
      zT = () => {
        var TT, kT;
        const cT = bT().promptFamily;
        return "auto" !== cT ? cT : null !== (TT = null === (kT = IT.e.getActivePad()) || void 0 === kT ? void 0 : kT.family) && void 0 !== TT ? TT : "xbox"
      },
      JT = TT => {
        const kT = mT;
        wT = {
          ...wT,
          ...TT
        }, PT(wT), mT = {
          ...mT,
          ...TT
        }, (TT => {
          MT.k.nt(AT.h, mT), tT.some((kT => TT[kT] !== mT[kT])) && MT.k.nt(AT.d, mT)
        })(kT)
      },
      oT = () => {
        const [TT, kT] = (0, lT.useState)(mT);
        return (0, KT.g)(AT.h, kT), TT
      }
  },
  8677: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => MT
    });
    const lT = new Set(["Alt", "AltGraph", "Meta", "OS", "AudioVolumeUp", "AudioVolumeDown", "AudioVolumeMute", "MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "BrowserBack", "BrowserForward", "BrowserHome", "GoBack", "LaunchApplication1", "LaunchApplication2", "LaunchMail", "PrintScreen", "Unidentified"]),
      MT = TT => lT.has(TT)
  },
  8188: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => tT.b,
      e: () => ST
    });
    var lT = cT(8190),
      MT = cT(8194);
    const KT = .1,
      OT = .3;
    class yT {
      constructor() {
        this.deadzone = 0, this.anchor = null, this.steadyMs = 0, this.lastMs = null, this.returning = !0, this.anchorLearned = !1
      }
      observe(TT, kT) {
        const cT = null === this.lastMs ? 0 : Math.min(Math.max(0, kT - this.lastMs), 100);
        this.lastMs = kT;
        const lT = Math.hypot(TT.x, TT.y);
        if (lT >= OT) return this.anchor = null, void(this.returning = !0);
        lT >= KT || (this.returning = !1);
        const MT = this.anchor;
        if (!MT || Math.hypot(TT.x - MT.x, TT.y - MT.y) > .03) return this.anchorLearned && (this.returning = !1), this.anchor = {
          x: TT.x,
          y: TT.y
        }, this.steadyMs = 0, void(this.anchorLearned = !1);
        if (this.steadyMs += cT, this.steadyMs < 1e3) return;
        const yT = Math.max(lT, Math.hypot(MT.x, MT.y));
        yT < KT ? this.deadzone = 0 : this.returning && (this.deadzone = yT + .05, this.anchorLearned = !0)
      }
      getDeadzone() {
        return this.deadzone
      }
      apply(TT) {
        return Math.hypot(TT.x, TT.y) < this.deadzone ? {
          x: 0,
          y: 0
        } : TT
      }
    }
    const fT = (TT, kT) => {
        var cT, lT;
        return null !== (cT = TT && (null === (lT = Object.getOwnPropertyDescriptor(TT, kT)) || void 0 === lT ? void 0 : lT.get)) && void 0 !== cT ? cT : null
      },
      xT = TT => {
        const kT = TT.vendorName;
        return "string" === typeof kT ? kT : void 0
      },
      IT = ((TT, kT) => {
        const cT = fT(TT, "index"),
          lT = fT(TT, "id"),
          MT = fT(TT, "connected"),
          KT = fT(TT, "mapping"),
          OT = fT(TT, "buttons"),
          yT = fT(TT, "axes"),
          IT = fT(kT, "pressed"),
          AT = fT(kT, "value");
        return cT && lT && MT && KT && OT && yT && IT && AT ? TT => {
          const kT = OT.call(TT),
            fT = yT.call(TT),
            CT = {
              index: Number(cT.call(TT)),
              id: String(lT.call(TT)),
              connected: !0 === MT.call(TT),
              mapping: String(KT.call(TT)),
              buttons: [],
              axes: [],
              vendorName: xT(TT)
            };
          for (let cT = 0; cT < kT.length; cT++) CT.buttons.push({
            pressed: !0 === IT.call(kT[cT]),
            value: Number(AT.call(kT[cT]))
          });
          for (let cT = 0; cT < fT.length; cT++) CT.axes.push(Number(fT[cT]));
          return CT
        } : null
      })("undefined" === typeof Gamepad ? null : Gamepad.prototype, "undefined" === typeof GamepadButton ? null : GamepadButton.prototype),
      AT = "undefined" === typeof Navigator ? null : Navigator.prototype.getGamepads;
    var CT = cT(1423),
      jT = cT(1428);
    const vT = TT => ({
      pressed: TT,
      value: TT ? 1 : 0
    });
    var tT = cT(2040);
    const hT = OT,
      NT = TT => {
        const kT = new Array(lT.Y).fill(0);
        for (let cT = 0; cT < lT.Y && cT < TT.buttons.length; cT++) {
          const MT = TT.buttons[cT];
          kT[cT] = MT.pressed && !(0, lT.N)(cT) ? Math.max(MT.value, lT.z) : MT.value
        }
        return kT
      },
      QT = (TT, kT) => {
        var cT, lT;
        return {
          x: null !== (cT = TT.axes[kT]) && void 0 !== cT ? cT : 0,
          y: null !== (lT = TT.axes[kT + 1]) && void 0 !== lT ? lT : 0
        }
      };
    const ST = new class {
      constructor(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : IT;
        this.readGamepads = TT, this.requireTrustedPads = kT, this.nativeReader = cT, this.running = !1, this.listening = !1, this.rafId = 0, this.lastTimestampMs = 0, this.activeInfo = null, this.slots = [], this.trustedIndices = new Set, this.warnedNonStandardIds = new Set, this.loggedReadError = !1, this.frameListeners = new Set, this.connectionListeners = new Set, this.anyPadConnected = !1, this.connectedListeners = new Set, this.handleConnectionEvent = TT => {
          TT.isTrusted && this.trustedIndices.add(TT.gamepad.index), this.wake()
        }, this.handleDisconnectionEvent = TT => {
          this.trustedIndices.delete(TT.gamepad.index)
        }, this.UA = TT => {
          if (this.rafId = 0, !this.running) return;
          const kT = 0 === this.lastTimestampMs ? 16 : Math.min(100, TT - this.lastTimestampMs);
          this.lastTimestampMs = TT;
          try {
            this.poll(TT, kT)
          } finally {
            this.anyPadConnected && (this.rafId = requestAnimationFrame(this.UA))
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
      onFrame(TT) {
        return this.frameListeners.add(TT), () => {
          this.frameListeners.delete(TT)
        }
      }
      onActivePadChanged(TT) {
        return this.connectionListeners.add(TT), () => {
          this.connectionListeners.delete(TT)
        }
      }
      getActivePad() {
        return this.activeInfo
      }
      hasConnectedPad() {
        return this.anyPadConnected
      }
      onConnectedPadsChanged(TT) {
        return this.connectedListeners.add(TT), () => {
          this.connectedListeners.delete(TT)
        }
      }
      getActiveGamepad() {
        if (!this.activeInfo) return null;
        const TT = this.readPads()[this.activeInfo.index],
          kT = TT ? this.readPad(TT) : null;
        return kT && kT.id === this.activeInfo.id ? TT : null
      }
      poll(TT, kT) {
        var cT, MT;
        const KT = this.readPads();
        let OT = null,
          fT = !1;
        const xT = [],
          IT = Math.max(KT.length, this.slots.length);
        for (let ST = 0; ST < IT; ST++) {
          var AT;
          const kT = ST < KT.length ? KT[ST] : null,
            cT = kT ? this.readPad(kT) : null;
          if (!cT || !cT.connected || !this.isUsable(cT)) {
            this.slots[ST] = null;
            continue
          }
          let MT = this.slots[ST];
          MT && MT.id === cT.id || (MT = {
            id: cT.id,
            ty: [],
            leftSettled: !1,
            rightSettled: !1,
            leftRest: new yT,
            rightRest: new yT
          }, this.slots[ST] = MT);
          const IT = QT(cT, 0),
            CT = QT(cT, 2);
          !MT.leftSettled && Math.hypot(IT.x, IT.y) < hT && (MT.leftSettled = !0), !MT.rightSettled && Math.hypot(CT.x, CT.y) < hT && (MT.rightSettled = !0), MT.leftRest.observe(IT, TT), MT.rightRest.observe(CT, TT);
          const jT = NT(cT),
            vT = (0, lT.r)(jT, MT.ty),
            tT = MT.ty,
            DT = vT.map(((TT, kT) => TT && !tT[kT]));
          MT.ty = vT;
          const aT = {
            pad: cT,
            slot: MT,
            values: jT
          };
          ST === (null === (AT = this.activeInfo) || void 0 === AT ? void 0 : AT.index) && cT.id === this.activeInfo.id ? (OT = aT, fT = DT.includes(!0)) : DT.includes(!0) && xT.push({
            polled: aT,
            rose: DT
          })
        }
        const CT = this.slots.some((TT => null !== TT));
        if (CT !== this.anyPadConnected) {
          this.anyPadConnected = CT;
          for (const TT of this.connectedListeners) TT()
        }
        const jT = null !== (cT = null === (MT = OT) || void 0 === MT ? void 0 : MT.slot.ty) && void 0 !== cT ? cT : [],
          vT = fT ? void 0 : xT.find((TT => {
            let {
              rose: kT
            } = TT;
            return kT.some(((TT, kT) => TT && !jT[kT]))
          }));
        if (vT ? (OT = vT.polled, this.setActive(vT.polled.pad)) : this.activeInfo && !OT && this.setActive(null), !OT || !this.activeInfo) return;
        const tT = ((TT, kT) => {
          let {
            pad: cT,
            slot: MT,
            values: KT
          } = TT;
          const OT = (0, lT.x)(kT);
          return OT.values = KT, MT.leftSettled && (OT.leftStick = MT.leftRest.apply(QT(cT, 0))), MT.rightSettled && (OT.rightStick = MT.rightRest.apply(QT(cT, 2))), OT
        })(OT, TT);
        for (const lT of this.frameListeners) lT(tT, kT, this.activeInfo)
      }
      readPad(TT) {
        const kT = this.readSnapshot(TT);
        return kT && (0, jT.d)(kT) ? (TT => {
          const kT = kT => {
              var cT;
              return null !== (cT = TT.buttons[kT]) && void 0 !== cT ? cT : vT(!1)
            },
            cT = kT => {
              var cT;
              return null !== (cT = TT.axes[kT]) && void 0 !== cT ? cT : 0
            },
            lT = TT.axes.length > 9,
            MT = lT ? (TT => {
              const kT = 0 !== TT;
              return {
                up: kT && (TT >= -1 && TT < -.7 || TT >= .95 && TT <= 1),
                right: kT && TT >= -.75 && TT < -.1,
                down: kT && TT >= -.2 && TT < .45,
                left: kT && TT >= .4 && TT <= 1
              }
            })(cT(9)) : {
              up: cT(5) < -.5,
              down: cT(5) > .5,
              left: cT(4) < -.5,
              right: cT(4) > .5
            };
          return {
            ...TT,
            mapping: "standard",
            buttons: [kT(1), kT(2), kT(0), kT(3), kT(4), kT(5), kT(6), kT(7), kT(8), kT(9), kT(10), kT(11), vT(MT.up), vT(MT.down), vT(MT.left), vT(MT.right), kT(12)],
            axes: [cT(0), cT(1), cT(2), cT(lT ? 5 : 3)]
          }
        })(kT) : kT
      }
      readSnapshot(TT) {
        if (this.nativeReader) try {
          return this.nativeReader(TT)
        } catch {
          if (this.requireTrustedPads) return null
        }
        return this.requireTrustedPads ? null : (TT => {
          const kT = TT;
          return {
            index: kT.index,
            id: kT.id,
            connected: kT.connected,
            mapping: kT.mapping,
            buttons: Array.from(kT.buttons, (TT => ({
              pressed: TT.pressed,
              value: TT.value
            }))),
            axes: Array.from(kT.axes),
            vendorName: xT(TT)
          }
        })(TT)
      }
      isUsable(TT) {
        return !(0, CT.f)(TT.id) && ("standard" !== TT.mapping ? (this.warnedNonStandardIds.has(TT.id) || (this.warnedNonStandardIds.add(TT.id), console.warn(`Controller "${TT.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.trustedIndices.has(TT.index))
      }
      setActive(TT) {
        this.activeInfo = TT ? {
          index: TT.index,
          id: TT.id,
          family: (0, MT.d)(TT.id, TT.vendorName)
        } : null;
        for (const kT of this.connectionListeners) kT(this.activeInfo)
      }
      readPads() {
        try {
          return this.readGamepads()
        } catch (TT) {
          return this.loggedReadError || (this.loggedReadError = !0, console.warn("Reading gamepads failed; controller input is unavailable.", TT)), []
        }
      }
      wake() {
        this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.UA))
      }
    }((() => AT ? AT.call(navigator) : []), !0);
    ST.listenForConnections()
  },
  8685: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => lT
    });
    const lT = {
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
  8791: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => OT,
      c: () => yT
    });
    var lT = cT(36),
      MT = cT(8777);
    let KT = !1;
    const OT = () => KT,
      yT = TT => {
        TT !== KT && (KT = TT, lT.k.nt(MT.j, KT))
      }
  },
  8784: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => yT,
      d: () => fT
    });
    var lT = cT(36),
      MT = cT(8777);
    let KT = null,
      OT = 0;
    const yT = () => KT,
      fT = TT => {
        null === TT && null === KT || (KT = null === TT ? null : {
          id: ++OT,
          holdMs: TT
        }, lT.k.nt(MT.n, KT))
      }
  },
  8796: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => OT,
      f: () => yT
    });
    var lT = cT(36),
      MT = cT(8777);
    let KT = !1;
    const OT = () => KT,
      yT = TT => {
        TT !== KT && (KT = TT, lT.k.nt(MT.q, KT))
      }
  },
  8860: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => OT,
      e: () => yT
    });
    var lT = cT(36),
      MT = cT(8777);
    let KT = !1;
    const OT = () => KT,
      yT = TT => {
        TT !== KT && (KT = TT, lT.k.nt(MT.u, KT))
      }
  },
  8734: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => lT
    });
    class lT {
      constructor() {
        this.downAtMs = null
      }
      update(TT, kT, cT, lT) {
        if (TT) return this.downAtMs = cT, null;
        if (null === this.downAtMs) return null;
        const MT = cT - this.downAtMs >= lT;
        return kT ? MT ? (this.downAtMs = null, "hold") : null : (this.downAtMs = null, MT ? "hold" : "tap")
      }
      release() {
        this.downAtMs = null
      }
    }
  },
  8240: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => AT,
      f: () => CT,
      j: () => yT,
      n: () => ST,
      p: () => QT
    });
    var lT = cT(47),
      MT = cT(8209),
      KT = cT(8190);
    const OT = (() => {
        try {
          return cT(8243)
        } catch {
          return null
        }
      })(),
      yT = [...KT.ab, "LeftStick", "RightStick"],
      fT = new Map,
      xT = {
        xbox: "xbox",
        playstation: "playstation",
        nintendo: "nintendo",
        steamdeck: "steamdeck",
        generic: "xbox"
      },
      IT = (new Set(Object.values(xT)), {
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
      AT = (TT, kT) => {
        var cT, lT;
        return null !== (cT = null === (lT = IT[xT[TT]]) || void 0 === lT ? void 0 : lT[kT]) && void 0 !== cT ? cT : 1
      },
      CT = (TT, kT) => {
        const cT = `./${xT[TT]}/${kT}.svg`;
        let lT = fT.get(cT);
        return void 0 === lT && (lT = OT ? OT(cT) : "", fT.set(cT, lT)), lT
      },
      jT = new Set,
      vT = [],
      tT = TT => {
        if (!jT.has(TT)) {
          jT.add(TT);
          for (const kT of yT) {
            const cT = CT(TT, kT);
            if (cT) {
              const TT = new Image;
              TT.crossOrigin = "anonymous", TT.src = cT, vT.push(TT)
            }
          }
        }
      },
      hT = "controllerGlyphFamily";
    let NT = null;
    const QT = TT => {
        TT !== NT && (NT = TT, lT.e.setItem(hT, TT), tT(TT))
      },
      ST = () => {
        const TT = lT.e.getItem(hT);
        (0, MT.h)(TT) && TT !== NT && (NT = TT, tT(TT))
      }
  },
  8886: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => uT,
      f: () => XT
    });
    var lT = cT(71),
      MT = cT(36),
      KT = cT(1461),
      OT = cT(8199),
      yT = cT(8188),
      fT = cT(8227),
      xT = cT(8206);
    const IT = {
        x: 0,
        y: 0,
        z: 0
      },
      AT = Math.PI / 180,
      CT = TT => Math.hypot(TT.x, TT.y, TT.z),
      jT = (TT, kT) => ({
        x: TT.x * kT,
        y: TT.y * kT,
        z: TT.z * kT
      }),
      vT = (TT, kT) => ({
        x: TT.x + kT.x,
        y: TT.y + kT.y,
        z: TT.z + kT.z
      }),
      tT = (TT, kT) => ({
        x: TT.x - kT.x,
        y: TT.y - kT.y,
        z: TT.z - kT.z
      }),
      hT = TT => {
        const kT = CT(TT);
        return 0 === kT ? IT : jT(TT, 1 / kT)
      },
      NT = TT => ({
        min: {
          ...TT
        },
        max: {
          ...TT
        }
      }),
      QT = (TT, kT) => ({
        min: {
          x: Math.min(TT.min.x, kT.x),
          y: Math.min(TT.min.y, kT.y),
          z: Math.min(TT.min.z, kT.z)
        },
        max: {
          x: Math.max(TT.max.x, kT.x),
          y: Math.max(TT.max.y, kT.y),
          z: Math.max(TT.max.z, kT.z)
        }
      }),
      ST = (TT, kT) => TT.max.x - TT.min.x <= kT && TT.max.y - TT.min.y <= kT && TT.max.z - TT.min.z <= kT;
    class DT {
      constructor() {
        this.bias = IT, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = IT, this.windowSec = 0
      }
      update(TT) {
        const kT = this.gyroRange ? QT(this.gyroRange, TT.gyro) : NT(TT.gyro),
          cT = TT.accel ? this.accelRange ? QT(this.accelRange, TT.accel) : NT(TT.accel) : null;
        if (!ST(kT, 1) || cT && !ST(cT, .01)) return void this.restartWindow(TT);
        if (this.gyroRange = kT, this.accelRange = cT, this.sum = vT(this.sum, jT(TT.gyro, TT.dtSec)), this.windowSec += TT.dtSec, this.windowSec < 1) return;
        const lT = jT(this.sum, 1 / this.windowSec);
        if (CT(lT) > 5) return;
        const MT = tT(lT, this.bias);
        let KT = 0;
        !this.calibrated || this.windowSec >= 3 ? KT = 1 : CT(MT) <= 1 && (KT = Math.min(1, TT.dtSec / 1)), this.bias = vT(this.bias, jT(MT, KT)), this.calibrated = this.calibrated || KT > 0
      }
      correct(TT) {
        return tT(TT, this.bias)
      }
      getBias() {
        return this.bias
      }
      isCalibrated() {
        return this.calibrated
      }
      reset() {
        this.bias = IT, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = IT, this.windowSec = 0
      }
      restartWindow(TT) {
        this.gyroRange = NT(TT.gyro), this.accelRange = TT.accel ? NT(TT.accel) : null, this.sum = IT, this.windowSec = 0
      }
    }
    class aT {
      constructor() {
        this.down = null
      }
      update(TT, kT, cT) {
        const lT = hT(jT(kT, -1));
        if (!this.down) return this.down = lT, lT;
        const MT = jT(TT, AT * cT),
          KT = this.down,
          OT = {
            x: KT.x - (MT.y * KT.z - MT.z * KT.y),
            y: KT.y - (MT.z * KT.x - MT.x * KT.z),
            z: KT.z - (MT.x * KT.y - MT.y * KT.x)
          },
          yT = 0 === CT(lT) ? 0 : Math.min(1, cT / .25);
        var fT, xT;
        return this.down = hT((xT = yT, vT(fT = OT, jT(tT(lT, fT), xT)))), this.down
      }
      reset() {
        this.down = null
      }
    }
    class FT {
      constructor() {
        this.entries = [], this.windowSec = 0
      }
      apply(TT, kT, cT) {
        const lT = Math.hypot(TT, kT),
          MT = Math.max(0, Math.min(1, (lT - 2) / 2)),
          KT = {
            yaw: TT * (1 - MT),
            pitch: kT * (1 - MT),
            dtSec: cT
          };
        for (this.entries.push(KT), this.windowSec += cT; this.entries.length > 1 && this.windowSec - this.entries[0].dtSec >= .125;) this.windowSec -= this.entries[0].dtSec, this.entries.shift();
        let OT = 0,
          yT = 0;
        for (const xT of this.entries) OT += xT.yaw * xT.dtSec, yT += xT.pitch * xT.dtSec;
        const fT = this.windowSec > 0 ? {
          yaw: OT / this.windowSec,
          pitch: yT / this.windowSec
        } : {
          yaw: KT.yaw,
          pitch: KT.pitch
        };
        return {
          yaw: TT * MT + fT.yaw,
          pitch: kT * MT + fT.pitch
        }
      }
      reset() {
        this.entries = [], this.windowSec = 0
      }
    }
    class rT {
      constructor() {
        this.calibrator = new DT, this.gravity = new aT, this.smoother = new FT
      }
      process(TT, kT, cT) {
        const lT = Math.max(0, Math.min(.05, kT));
        this.calibrator.update({
          ...TT,
          dtSec: lT
        });
        const MT = this.calibrator.correct(TT.gyro);
        let KT = MT.y;
        "player" === cT && TT.accel && (KT = ((TT, kT) => {
          const cT = TT.y * kT.y + TT.z * kT.z;
          return -Math.sign(cT) * Math.min(1.41 * Math.abs(cT), Math.hypot(TT.y, TT.z))
        })(MT, this.gravity.update(MT, TT.accel, lT)));
        const OT = this.smoother.apply(KT, MT.x, lT),
          yT = ((TT, kT) => {
            const cT = Math.hypot(TT, kT);
            if (cT >= 1) return {
              yaw: TT,
              pitch: kT
            };
            const lT = cT / 1;
            return {
              yaw: TT * lT,
              pitch: kT * lT
            }
          })(OT.yaw, OT.pitch);
        return {
          yawDeg: yT.yaw * lT,
          pitchDeg: yT.pitch * lT
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
    const PT = (TT, kT) => {
      var cT, lT, MT;
      const KT = kT * AT,
        OT = null !== (cT = TT.beta) && void 0 !== cT ? cT : 0,
        yT = null !== (lT = TT.gamma) && void 0 !== lT ? lT : 0;
      return {
        x: OT * Math.cos(KT) - yT * Math.sin(KT),
        y: OT * Math.sin(KT) + yT * Math.cos(KT),
        z: null !== (MT = TT.alpha) && void 0 !== MT ? MT : 0
      }
    };
    var wT = cT(8895);
    class mT {
      constructor(TT, kT, cT) {
        this.hid = TT, this.sink = kT, this.onControllersChanged = cT, this.controllers = new Map, this.running = !1, this.openedCount = 0, this.opening = new Set, this.disconnectedWhileOpening = new Set, this.switchPacketCounter = 0, this.onConnect = TT => {
          this.openController(TT.device).catch((TT => {
            console.warn("Could not open motion controller", TT)
          }))
        }, this.onDisconnect = TT => {
          this.opening.has(TT.device) && this.disconnectedWhileOpening.add(TT.device);
          const kT = this.controllers.get(TT.device);
          kT && (this.forget(kT), this.onControllersChanged())
        }
      }
      async start() {
        if (this.running) return;
        this.running = !0, this.hid.addEventListener("connect", this.onConnect), this.hid.addEventListener("disconnect", this.onDisconnect);
        const TT = await this.hid.getDevices();
        for (const kT of TT) await this.openController(kT).catch((TT => {
          console.warn("Could not open motion controller", TT)
        }))
      }
      stop() {
        this.running = !1, this.hid.removeEventListener("connect", this.onConnect), this.hid.removeEventListener("disconnect", this.onDisconnect);
        for (const TT of [...this.controllers.values()]) this.forget(TT);
        this.onControllersChanged()
      }
      async request() {
        const TT = await this.hid.requestDevice({
          filters: wT.f
        });
        let kT = 0;
        for (const cT of TT) await this.openController(cT).catch((TT => {
          console.warn("Could not open motion controller", TT), kT++
        }));
        return kT
      }
      async hasGrantedController() {
        return (await this.hid.getDevices()).some((TT => null !== (0, wT.d)(TT.vendorId, TT.productId)))
      }
      getConnectedKinds() {
        return [...this.controllers.values()].map((TT => TT.kind))
      }
      forget(TT) {
        TT.device.removeEventListener("inputreport", TT.onReport), this.controllers.get(TT.device) === TT && this.controllers.delete(TT.device)
      }
      async openController(TT) {
        const kT = (0, wT.d)(TT.vendorId, TT.productId);
        if (!kT || !this.running || this.controllers.has(TT) || this.opening.has(TT)) return;
        this.opening.add(TT);
        let cT = !1;
        try {
          TT.opened || await TT.open()
        } finally {
          this.opening.delete(TT), cT = this.disconnectedWhileOpening.delete(TT)
        }
        if (cT) return void TT.close().catch((TT => {
          console.debug("Could not close an unplugged motion controller", TT)
        }));
        if (!this.running) return;
        const lT = {
          device: TT,
          kind: kT,
          lastClock: null,
          lastEventMs: null,
          lastReadingMs: -1 / 0,
          openedOrder: this.openedCount++,
          onReport: TT => {
            this.onReport(lT, TT)
          }
        };
        this.controllers.set(TT, lT), TT.addEventListener("inputreport", lT.onReport), this.onControllersChanged();
        try {
          await this.enableMotion(lT)
        } catch (MT) {
          console.warn(`Could not turn on motion for ${kT}`, MT), this.controllers.get(TT) === lT && (this.forget(lT), this.onControllersChanged())
        }
      }
      async enableMotion(TT) {
        let {
          device: kT,
          kind: cT
        } = TT;
        if ((0, wT.e)(cT))
          for (const lT of wT.q[cT]) await kT.receiveFeatureReport(lT).catch((TT => {
            console.debug(`Motion controller feature report ${lT} unavailable`, TT)
          }));
        else
          for (let lT = 0; lT < 2; lT++)
            for (const {
                subcommand: TT,
                args: cT
              }
              of wT.t) await kT.sendReport(wT.x, (0, wT.b)(this.switchPacketCounter++, TT, cT)), await new Promise((TT => {
              setTimeout(TT, 60)
            }))
      }
      onReport(TT, kT) {
        const cT = (0, wT.m)(TT.kind, kT.reportId, kT.data, TT.device.productId);
        if (!cT) return;
        const lT = null === TT.lastEventMs ? 0 : (kT.timeStamp - TT.lastEventMs) / 1e3;
        TT.lastEventMs = kT.timeStamp;
        let MT = cT.dtSec;
        if (null !== MT && lT > 0 && (MT = Math.max(.001, Math.min(.017, lT / cT.readings.length))), null === MT && null !== cT.sensorClock && (0, wT.e)(TT.kind)) {
          const kT = (0, wT.p)(TT.kind, TT.lastClock, cT.sensorClock);
          TT.lastClock = cT.sensorClock, MT = 0 === kT ? null : kT
        }
        if (TT.lastReadingMs = kT.timeStamp, this.isPreferred(TT, kT.timeStamp))
          for (const OT of cT.readings) {
            var KT;
            this.sink(OT, null !== (KT = MT) && void 0 !== KT ? KT : lT, `hid${TT.openedOrder}`)
          }
      }
      isPreferred(TT, kT) {
        const cT = TT => 1e6 * wT.i[TT.kind] + TT.openedOrder;
        for (const lT of this.controllers.values())
          if (lT !== TT && kT - lT.lastReadingMs < 500 && cT(lT) < cT(TT)) return !1;
        return !0
      }
    }
    var bT = cT(118);
    const zT = () => DeviceMotionEvent,
      JT = () => "undefined" !== typeof window && "undefined" !== typeof DeviceMotionEvent && window.isSecureContext && (0, bT.isMobile)(),
      oT = () => {
        var TT;
        const kT = null === (TT = window.screen.orientation) || void 0 === TT ? void 0 : TT.angle;
        return "number" === typeof kT ? kT : "number" === typeof window.orientation ? window.orientation : 0
      };
    class HT {
      constructor(TT, kT) {
        this.sink = TT, this.onStateChanged = kT, this.state = "off", this.lastEventMs = null, this.noSensorTimer = null, this.wanted = !1, this.permissionRequest = null, this.granted = !1, this.onGesture = () => {
          this.requestPermission().catch((TT => {
            console.warn("Could not enable the motion sensor", TT)
          }))
        }, this.onMotion = TT => {
          const kT = TT.rotationRate;
          if (!kT || null === kT.alpha && null === kT.beta && null === kT.gamma) return;
          const cT = null === this.lastEventMs ? 0 : (TT.timeStamp - this.lastEventMs) / 1e3;
          this.lastEventMs = TT.timeStamp, this.clearNoSensorTimer(), this.setState("on"), this.sink({
            gyro: PT(kT, oT()),
            accel: null
          }, cT, "phone")
        }
      }
      getState() {
        return this.state
      }
      start() {
        if (this.wanted = !0, "off" === this.state) return "function" !== typeof zT().requestPermission || this.granted ? void this.listen() : (this.setState("needsPermission"), void this.armGestureRequest())
      }
      requestPermission() {
        return this.permissionRequest || (this.permissionRequest = this.askPermission().finally((() => {
          this.permissionRequest = null
        }))), this.permissionRequest
      }
      async askPermission() {
        const TT = zT().requestPermission;
        if (!this.wanted) return;
        if ("function" !== typeof TT) return void this.listen();
        let kT;
        this.disarmGestureRequest();
        try {
          kT = await TT.call(DeviceMotionEvent)
        } catch (cT) {
          throw this.wanted && "needsPermission" === this.state && this.armGestureRequest(), cT
        }
        this.wanted && ("granted" === kT ? (this.granted = !0, this.listen()) : this.setState("denied"))
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
      setState(TT) {
        this.state !== TT && (this.state = TT, this.onStateChanged())
      }
    }
    const eT = "controllerGyroStatusChanged",
      GT = {
        Rm: 0,
        Wm: 0
      },
      VT = TT => {
        var kT, cT;
        return "undefined" === typeof document || (null === (kT = null === (cT = document.featurePolicy) || void 0 === cT ? void 0 : cT.allowsFeature(TT)) || void 0 === kT || kT)
      };
    class ET {
      constructor() {
        this.processor = new rT, this.hid = void 0, this.hidBlocked = void 0, this.phone = void 0, this.phoneBlocked = void 0, this.source = null, this.pendingYawDeg = 0, this.pendingPitchDeg = 0, this.lastDrainMs = -1 / 0, this.lastHidReadingMs = -1 / 0, this.running = !1, this.phoneRunning = !1, this.syncWithSettings = TT => {
          const kT = TT.gyroAiming && yT.e.hasConnectedPad();
          var cT, lT;
          kT !== this.phoneRunning && (this.phoneRunning = kT, kT ? null === (cT = this.phone) || void 0 === cT || cT.start() : null === (lT = this.phone) || void 0 === lT || lT.stop());
          if (TT.gyroAiming !== this.running) {
            var MT, KT;
            if (this.running = TT.gyroAiming, this.running) null === (MT = this.hid) || void 0 === MT || MT.start().catch((TT => {
              console.warn("Could not open motion controllers", TT)
            }));
            else null === (KT = this.hid) || void 0 === KT || KT.stop(), this.processor.reset(), this.source = null, this.discardPending();
            this.publishStatus()
          }
        }, this.publishStatus = () => {
          MT.k.nt(eT, this.getStatus())
        };
        const TT = (() => {
            var TT;
            return "undefined" !== typeof navigator && window.isSecureContext && null !== (TT = navigator.hid) && void 0 !== TT ? TT : null
          })(),
          kT = VT("hid");
        this.hidBlocked = null !== TT && !kT, this.hid = TT && kT ? new mT(TT, ((TT, kT, cT) => {
          this.lastHidReadingMs = performance.now(), this.feed(TT, kT, "player", cT)
        }), this.publishStatus) : null;
        const cT = VT("accelerometer") && VT("gyroscope");
        this.phoneBlocked = JT() && !cT, this.phone = JT() && cT ? new HT(((TT, kT, cT) => {
          performance.now() - this.lastHidReadingMs >= 500 && this.feed(TT, kT, "local", cT)
        }), this.publishStatus) : null, MT.k.subscribe(xT.f, this.syncWithSettings), yT.e.onConnectedPadsChanged((() => {
          this.syncWithSettings((0, xT.g)()), this.publishStatus()
        })), this.syncWithSettings((0, xT.g)())
      }
      isSupported() {
        return null !== this.hid || null !== this.phone
      }
      getStatus() {
        var TT, kT, cT, lT;
        return {
          hidSupported: null !== this.hid,
          hidBlocked: this.hidBlocked,
          phoneSupported: null !== this.phone,
          phoneBlocked: this.phoneBlocked,
          controllers: null !== (TT = null === (kT = this.hid) || void 0 === kT ? void 0 : kT.getConnectedKinds()) && void 0 !== TT ? TT : [],
          phoneMotion: null !== (cT = null === (lT = this.phone) || void 0 === lT ? void 0 : lT.getState()) && void 0 !== cT ? cT : "off",
          padConnected: yT.e.hasConnectedPad()
        }
      }
      async connectController() {
        return this.hid ? this.hid.request() : 0
      }
      async connectControllerIfNoneGranted() {
        this.hid && !await this.hid.hasGrantedController() && await this.hid.request()
      }
      async allowPhoneMotion() {
        var TT;
        await (null === (TT = this.phone) || void 0 === TT ? void 0 : TT.requestPermission())
      }
      drainLookDelta() {
        const TT = performance.now();
        TT - this.lastDrainMs > 500 && this.discardPending(), this.lastDrainMs = TT;
        const kT = {
          yawDeg: this.pendingYawDeg,
          pitchDeg: this.pendingPitchDeg
        };
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0;
        const cT = (0, xT.g)();
        return cT.gyroAiming && (TT => {
          let {
            activation: kT,
            isHeld: cT,
            useButton: lT,
            gyroButton: MT
          } = TT;
          return "always" === kT || cT("aiming" === kT ? lT : MT)
        })({
          activation: cT.gyroActivation,
          isHeld: TT => fT.d.isButtonHeld(TT),
          useButton: (0, OT.j)("use"),
          gyroButton: cT.gyroButton
        }) ? ((TT, kT) => ({
          Rm: -TT.yawDeg * kT * AT,
          Wm: -TT.pitchDeg * kT * AT
        }))(kT, cT.gyroSensitivity) : GT
      }
      discardPending() {
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0
      }
      injectMotion(TT, kT) {
        this.feed(TT, kT, "local", "injected")
      }
      getCalibration() {
        return this.processor.getCalibration()
      }
      feed(TT, kT, cT, lT) {
        this.source !== lT && (this.processor.reset(), this.source = lT);
        const MT = this.processor.process(TT, kT, cT);
        this.pendingYawDeg += MT.yawDeg, this.pendingPitchDeg += MT.pitchDeg
      }
    }
    let ZT = null;
    const uT = () => (ZT || (ZT = new ET), ZT),
      XT = () => {
        const [TT, kT] = (0, lT.useState)((() => uT().getStatus()));
        return (0, KT.g)(eT, kT), (0, lT.useEffect)((() => {
          kT(uT().getStatus())
        }), []), TT
      }
  },
  8895: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => aT,
      d: () => fT,
      e: () => lT,
      f: () => yT,
      g: () => xT,
      i: () => IT,
      m: () => QT,
      p: () => hT,
      q: () => rT,
      t: () => FT,
      x: () => ST
    });
    const lT = TT => "dualShock4" === TT || "dualSense" === TT,
      MT = 1356,
      KT = 1406,
      OT = [{
        vendorId: MT,
        productId: 1476,
        kind: "dualShock4"
      }, {
        vendorId: MT,
        productId: 2508,
        kind: "dualShock4"
      }, {
        vendorId: MT,
        productId: 2976,
        kind: "dualShock4"
      }, {
        vendorId: MT,
        productId: 3302,
        kind: "dualSense"
      }, {
        vendorId: MT,
        productId: 3570,
        kind: "dualSense"
      }, {
        vendorId: KT,
        productId: 8201,
        kind: "switchPro"
      }, {
        vendorId: KT,
        productId: 8198,
        kind: "joyConLeft"
      }, {
        vendorId: KT,
        productId: 8199,
        kind: "joyConRight"
      }],
      yT = OT.map((TT => {
        let {
          vendorId: kT,
          productId: cT
        } = TT;
        return {
          vendorId: kT,
          productId: cT
        }
      })),
      fT = (TT, kT) => {
        var cT, lT;
        return null !== (cT = null === (lT = OT.find((cT => cT.vendorId === TT && cT.productId === kT))) || void 0 === lT ? void 0 : lT.kind) && void 0 !== cT ? cT : null
      },
      xT = {
        dualShock4: "DualShock 4",
        dualSense: "DualSense",
        switchPro: "Switch Pro Controller",
        joyConLeft: "Joy-Con (L)",
        joyConRight: "Joy-Con (R)"
      },
      IT = {
        dualSense: 0,
        dualShock4: 0,
        switchPro: 0,
        joyConRight: 1,
        joyConLeft: 2
      },
      AT = 2e3 / 32767,
      CT = 1 / 8192,
      jT = 936 / 13371,
      vT = (TT, kT, cT) => ({
        x: TT.getInt16(kT, !0) * cT,
        y: TT.getInt16(kT + 2, !0) * cT,
        z: TT.getInt16(kT + 4, !0) * cT
      }),
      tT = TT => 0 === TT.x && 0 === TT.y && 0 === TT.z,
      hT = (TT, kT, cT) => null === kT ? null : "dualShock4" === TT ? 16 * (cT - kT & 65535) / 3 / 1e6 : (cT - kT >>> 0) / 3 / 1e6,
      NT = (TT, kT) => "joyConRight" === kT ? {
        x: TT.y,
        y: -TT.z,
        z: -TT.x
      } : {
        x: -TT.y,
        y: TT.z,
        z: -TT.x
      },
      QT = (TT, kT, cT, MT) => lT(TT) ? ((TT, kT, cT, lT) => {
        const MT = ((TT, kT, cT) => "dualShock4" === TT ? 1 === kT && cT >= 63 ? 0 : 17 === kT && cT >= 65 ? 2 : null : 1 === kT && cT >= 62 ? 0 : 49 === kT && cT >= 63 ? 1 : null)(TT, kT, cT.byteLength);
        if (null === MT) return null;
        if (2976 === lT && 1 === kT && 0 !== (4 & cT.getUint8(30))) return null;
        const KT = MT + ("dualShock4" === TT ? 12 : 15),
          OT = vT(cT, KT, AT),
          yT = vT(cT, KT + 6, CT);
        return tT(OT) && tT(yT) ? null : {
          readings: [{
            gyro: OT,
            accel: yT
          }],
          dtSec: null,
          sensorClock: "dualShock4" === TT ? cT.getUint16(MT + 9, !0) : cT.getUint32(MT + 27, !0)
        }
      })(TT, kT, cT, MT) : ((TT, kT, cT) => {
        if (48 !== kT && 49 !== kT || cT.byteLength < 48) return null;
        const lT = [];
        for (let MT = 0; MT < 3; MT++) {
          const kT = vT(cT, 12 + 12 * MT, 244e-6),
            KT = vT(cT, 18 + 12 * MT, jT);
          if (tT(KT) && tT(kT)) return null;
          lT.push({
            gyro: NT(KT, TT),
            accel: NT(kT, TT)
          })
        }
        return {
          readings: lT,
          dtSec: .005,
          sensorClock: null
        }
      })(TT, kT, cT),
      ST = 1,
      DT = [0, 1, 64, 64, 0, 1, 64, 64],
      aT = (TT, kT, cT) => new Uint8Array([15 & TT, ...DT, kT, ...cT]),
      FT = [{
        subcommand: 64,
        args: [1]
      }, {
        subcommand: 3,
        args: [48]
      }],
      rT = {
        dualShock4: [2, 5],
        dualSense: [5]
      }
  },
  8229: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => zT,
      f: () => ET,
      h: () => NT,
      i: () => jT.h,
      m: () => HT,
      n: () => oT,
      r: () => QT,
      t: () => eT,
      u: () => jT.r,
      v: () => jT.s,
      x: () => ZT,
      z: () => jT.w,
      A: () => PT
    });
    var lT = cT(71),
      MT = cT(31),
      KT = cT(36),
      OT = cT(1461),
      yT = cT(1292),
      fT = cT(8206),
      xT = cT(8236),
      IT = cT(8194),
      AT = cT(8188),
      CT = cT(8240),
      jT = cT(1409),
      vT = cT(8190),
      tT = cT(8677),
      hT = cT(4368);
    const NT = TT => !TT.repeat && !(0, tT.d)(TT.key),
      QT = "PadHidesCursor";
    let ST = !1;
    const DT = TT => {
        TT !== ST && (ST = TT, document.documentElement.classList.toggle(QT, TT))
      },
      aT = new class {
        constructor() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
        observe(TT) {
          let kT = !1,
            cT = !1;
          TT.values.forEach(((TT, lT) => {
            const MT = TT >= (this.buttonsDown[lT] ? vT.U : vT.S);
            MT && !this.buttonsDown[lT] && (kT = !0, cT = !0), this.buttonsDown[lT] = MT
          }));
          return [TT.leftStick, TT.rightStick].forEach(((TT, lT) => {
            const MT = this.stickAnchors[lT];
            Math.hypot(TT.x, TT.y) < (MT ? vT.U : .3) ? this.stickAnchors[lT] = null : (!MT || Math.hypot(TT.x - MT.x, TT.y - MT.y) >= .3) && (this.stickAnchors[lT] = {
              x: TT.x,
              y: TT.y
            }, kT = !0, cT ||= !MT)
          })), kT && (this.lastActivityMs = TT.timestampMs), this.onlyMovedOn = kT && !cT, kT
        }
        wasOnlyMoveOn() {
          return this.onlyMovedOn
        }
        isHolding(TT) {
          return !(TT - this.lastActivityMs >= 1e3) && (this.buttonsDown.some((TT => TT)) || this.stickAnchors.some((TT => null !== TT)))
        }
        isStickOffRest() {
          return this.stickAnchors.some((TT => null !== TT))
        }
        reset() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
      };
    let FT = null,
      rT = !1;
    const PT = () => rT;
    let wT = null,
      mT = !1,
      bT = null;
    const zT = () => bT;
    let JT = !1;
    const oT = TT => {
        if (!aT.observe(TT)) return !1;
        if (JT && aT.wasOnlyMoveOn() && !(0, jT.h)()) return !1;
        JT = !1, rT = !1;
        const kT = !(0, jT.h)();
        return kT && (FT = TT, bT = !ST && mT && wT ? {
          ...wT
        } : null), mT = !1, (0, jT.r)("gamepad"), DT(!0), (0, CT.p)((0, fT.j)()), kT
      },
      HT = TT => !(0, jT.h)() || TT === FT,
      eT = () => {
        aT.reset()
      },
      GT = () => {
        const TT = MT.e.get("activeInputDevice"),
          kT = "gamepad" === TT ? AT.e.getActivePad() : null;
        return {
          device: TT,
          inGame: (0, yT.q)(),
          padMovesMouse: null !== kT && (0, IT.e)(kT.id)
        }
      },
      VT = TT => {
        document.pointerLockElement ? wT = null : (wT ??= {
          x: 0,
          y: 0
        }, wT.x = TT.clientX, wT.y = TT.clientY)
      },
      ET = () => {
        const TT = new hT.d,
          kT = kT => {
            TT.reset(), JT = !1, (0, jT.r)(kT)
          },
          cT = TT => {
            if (TT.isTrusted) {
              if (TT instanceof KeyboardEvent) {
                if ((0, jT.p)(TT), !NT(TT)) return;
                rT = !0
              }
              if (TT instanceof PointerEvent && "touch" === TT.pointerType) return wT = null, void kT("touch");
              TT instanceof PointerEvent && (VT(TT), mT = !0), ("pointerdown" !== TT.type || (TT => {
                let {
                  device: kT,
                  inGame: cT,
                  padMovesMouse: lT
                } = TT;
                return !("gamepad" === kT && lT && cT)
              })(GT())) && kT("keyboardMouse")
            }
          },
          lT = TT => {
            TT.isTrusted && (wT = null, kT("touch"))
          },
          OT = TT => {
            TT.isTrusted && "touch" !== TT.pointerType && !TT.relatedTarget && (wT = null)
          },
          yT = cT => {
            if (!cT.isTrusted || "touch" === cT.pointerType) return;
            VT(cT);
            const lT = cT.movementX || 0,
              KT = cT.movementY || 0;
            if (0 === lT && 0 === KT) return;
            if (mT = !0, DT(!1), "keyboardMouse" === MT.e.get("activeInputDevice")) return;
            const OT = aT.isHolding(cT.timeStamp),
              yT = GT(),
              fT = (TT => {
                let {
                  device: kT,
                  inGame: cT,
                  padMovesMouse: lT,
                  padHolding: MT
                } = TT;
                return ("gamepad" !== kT || !lT) && "keyboardMouse" !== kT && (cT || !MT)
              })({
                ...yT,
                inGame: yT.inGame && (0, xT.e)(),
                padHolding: OT
              });
            fT && TT.add(lT, KT, cT.timeStamp) && (kT("keyboardMouse"), JT = aT.isStickOffRest())
          },
          fT = TT => {
            DT("gamepad" === TT)
          },
          IT = {
            capture: !0,
            passive: !0
          };
        window.addEventListener("keydown", cT, IT), window.addEventListener("pointerdown", cT, IT), window.addEventListener("wheel", cT, IT), window.addEventListener("touchstart", lT, IT), window.addEventListener("pointermove", yT, IT), window.addEventListener("pointerout", OT, IT);
        const AT = KT.k.subscribe("appManagerUpdated|activeInputDevice", fT);
        return fT(MT.e.get("activeInputDevice")), () => {
          window.removeEventListener("keydown", cT, IT), window.removeEventListener("pointerdown", cT, IT), window.removeEventListener("wheel", cT, IT), window.removeEventListener("touchstart", lT, IT), window.removeEventListener("pointermove", yT, IT), window.removeEventListener("pointerout", OT, IT), wT = null, KT.k.unsubscribe(AT), DT(!1)
        }
      },
      ZT = () => {
        const [TT, kT] = (0, lT.useState)(fT.j);
        return (0, OT.g)(fT.e, (() => {
          kT((0, fT.j)())
        })), (0, OT.g)(AT.c, (() => {
          kT((0, fT.j)())
        })), TT
      }
  },
  8209: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => lT,
      h: () => MT
    });
    const lT = ["xbox", "playstation", "nintendo", "steamdeck", "generic"],
      MT = TT => lT.includes(TT)
  },
  8236: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => xT,
      e: () => IT,
      g: () => fT,
      j: () => yT
    });
    var lT = cT(31),
      MT = cT(1654),
      KT = cT(1745);
    const OT = new Map,
      yT = (TT, kT) => (OT.has(TT) && console.warn(`Gameplay blocker "${TT}" registered twice; the newer one replaces it.`), OT.set(TT, kT), () => {
        OT.get(TT) === kT && OT.delete(TT)
      }),
      fT = () => (0, KT.e)(document.activeElement),
      xT = function() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const [kT, cT] of OT)
          if (!TT.includes(kT) && cT()) return kT;
        return null
      },
      IT = function() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return "inGame" === lT.e.get("gameState") && (!(0, MT.s)() && (!fT() && null === xT(TT)))
      }
  },
  8190: (TT, kT, cT) => {
    cT.d(kT, {
      D: () => ST,
      E: () => JT,
      I: () => DT,
      J: () => NT,
      N: () => hT,
      Q: () => xT,
      S: () => CT,
      U: () => jT,
      Y: () => MT,
      ab: () => lT,
      c: () => HT,
      cb: () => FT,
      e: () => zT,
      fb: () => bT,
      hb: () => oT,
      i: () => IT,
      jb: () => aT,
      m: () => fT,
      o: () => yT,
      p: () => PT,
      r: () => QT,
      t: () => rT,
      x: () => KT,
      z: () => AT
    });
    const lT = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "View", "Menu", "LS", "RS", "Up", "Down", "Left", "Right", "Home"],
      MT = lT.length,
      KT = function() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return {
          values: new Array(MT).fill(0),
          leftStick: {
            x: 0,
            y: 0
          },
          rightStick: {
            x: 0,
            y: 0
          },
          timestampMs: TT
        }
      },
      OT = Object.fromEntries(lT.map(((TT, kT) => [TT, kT]))),
      yT = TT => OT[TT],
      fT = function(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .95;
        const lT = Math.hypot(TT.x, TT.y);
        if (lT <= kT) return {
          x: 0,
          y: 0
        };
        const MT = Math.min(1, (lT - kT) / Math.max(1e-4, cT - kT));
        return {
          x: TT.x / lT * MT,
          y: TT.y / lT * MT
        }
      },
      xT = ["exponential", "linear", "boost"],
      IT = (TT, kT) => {
        const cT = Math.hypot(TT.x, TT.y);
        if (0 === cT) return {
          x: 0,
          y: 0
        };
        const lT = ((TT, kT) => {
          const cT = Math.max(0, Math.min(1, TT));
          return "linear" === kT ? cT : cT * cT
        })(cT, kT);
        return {
          x: TT.x / cT * lT,
          y: TT.y / cT * lT
        }
      },
      AT = .5,
      CT = .3,
      jT = .2,
      vT = yT("LT"),
      tT = yT("RT"),
      hT = TT => TT === vT || TT === tT,
      NT = (TT, kT) => {
        const cT = yT(kT);
        return hT(cT) ? TT[cT] > .35 : TT[cT] >= AT
      },
      QT = (TT, kT) => TT.map(((TT, cT) => hT(cT) ? kT[cT] ? TT > .35 : TT >= .55 : TT >= AT)),
      ST = ["Up", "Down", "Left", "Right"],
      DT = TT => ST.includes(TT),
      aT = function(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
        return Math.hypot(TT.x, TT.y) < kT ? null : Math.abs(TT.x) > Math.abs(TT.y) ? TT.x > 0 ? "Right" : "Left" : TT.y > 0 ? "Down" : "Up"
      },
      FT = {
        initialDelayMs: 350,
        intervalMs: 120
      },
      rT = {
        initialDelayMs: 350,
        intervalMs: 150
      },
      PT = ["default", "slow", "off"],
      wT = 800,
      mT = 250,
      bT = (TT, kT) => "off" === kT ? null : "slow" === kT ? {
        initialDelayMs: Math.max(TT.initialDelayMs, wT),
        intervalMs: Math.max(TT.intervalMs, mT)
      } : TT;
    class zT {
      constructor(TT) {
        this.readTiming = TT, this.ty = !1, this.timing = null, this.nextFireMs = 0
      }
      update(TT, kT) {
        return TT ? this.ty ? !!(this.timing && kT >= this.nextFireMs) && (this.nextFireMs = kT + this.timing.intervalMs, !0) : (this.ty = !0, this.timing = this.readTiming(), this.nextFireMs = kT + (null !== (cT = null === (lT = this.timing) || void 0 === lT ? void 0 : lT.initialDelayMs) && void 0 !== cT ? cT : 0), !0) : (this.ty = !1, !1);
        var cT, lT
      }
      reset() {
        this.ty = !1
      }
    }
    const JT = {
        initialDelayMs: 350,
        intervalMs: 80
      },
      oT = {
        initialDelayMs: 400,
        intervalMs: 90
      };
    class HT {
      constructor(TT) {
        this.timer = TT, this.direction = null
      }
      update(TT, kT) {
        return TT !== this.direction && (this.timer.reset(), this.direction = TT), this.timer.update(null !== TT, kT) ? TT : null
      }
      reset() {
        this.timer.reset(), this.direction = null
      }
    }
  },
  8727: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => MT,
      f: () => KT
    });
    let lT = -1 / 0;
    const MT = () => {
        lT = performance.now()
      },
      KT = TT => performance.now() - lT < TT
  },
  8680: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => OT,
      g: () => KT
    });
    var lT = cT(8206),
      MT = cT(8190);
    const KT = TT => (0, MT.fb)(TT, (0, lT.g)().buttonRepeat),
      OT = TT => new MT.e((() => KT(TT)))
  },
  8219: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => fT,
      f: () => KT,
      h: () => yT
    });
    var lT = cT(36),
      MT = cT(8206);
    const KT = (TT, kT) => "OpenShop" === TT ? "shop" === kT : "OpenLobbyLeaderboard" !== TT || "leaderboard" === kT;
    let OT = !1;
    const yT = TT => {
        TT !== OT && (OT = TT, lT.k.nt(MT.e, (0, MT.g)()))
      },
      fT = () => ((TT, kT) => "shop" === TT && kT ? "shop" : "leaderboard")((0, MT.g)().leaderboardButton, OT)
  },
  8215: (TT, kT, cT) => {
    cT.d(kT, {
      $: () => vT,
      B: () => aT,
      D: () => CT,
      E: () => jT,
      I: () => AT,
      L: () => DT,
      N: () => xT,
      R: () => NT,
      T: () => mT,
      U: () => ST,
      V: () => tT,
      Y: () => hT,
      b: () => GT,
      cb: () => QT,
      f: () => ET,
      gb: () => oT,
      h: () => bT,
      ib: () => KT,
      k: () => OT,
      mb: () => FT,
      nb: () => VT,
      o: () => wT,
      pb: () => PT,
      r: () => rT,
      t: () => HT,
      u: () => eT,
      v: () => IT,
      w: () => fT,
      y: () => yT
    });
    var lT = cT(8202),
      MT = cT(8190);
    const KT = {
        min: 25,
        max: 500,
        step: 5
      },
      OT = {
        min: 25,
        max: 100,
        step: 5
      },
      yT = {
        min: 0,
        max: .4,
        step: .01
      },
      fT = {
        min: 25,
        max: 300,
        step: 5
      },
      xT = {
        min: .5,
        max: 6,
        step: .1
      },
      IT = (TT, kT) => {
        if (!Number.isFinite(TT)) return kT.min;
        const cT = kT.min + Math.round((TT - kT.min) / kT.step) * kT.step,
          lT = Math.min(kT.max, Math.max(kT.min, cT));
        return Math.round(1e3 * lT) / 1e3
      },
      AT = TT => `${Math.round(TT)}%`,
      CT = TT => AT(100 * TT),
      jT = TT => `${TT.toFixed(1)}\xd7`,
      vT = [{
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
      tT = [{
        value: "exponential",
        labelKey: "controller:settingsCurveExponential"
      }, {
        value: "linear",
        labelKey: "controller:settingsCurveLinear"
      }, {
        value: "boost",
        labelKey: "controller:settingsCurveBoost"
      }],
      hT = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "focus",
        labelKey: "controller:settingsMenuNavFocus"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      NT = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "slot",
        labelKey: "controller:settingsInventoryNavSlot"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      QT = [{
        value: "wheel",
        labelKey: "controller:settingsQuickChatWheel"
      }, {
        value: "off",
        labelKey: "controller:settingsQuickChatOff"
      }],
      ST = [{
        value: "shop",
        labelKey: "controller:settingsLeaderboardButtonShop"
      }, {
        value: "leaderboard",
        labelKey: "controller:settingsLeaderboardButtonLeaderboard"
      }],
      DT = [{
        value: "always",
        labelKey: "controller:settingsGyroAlways"
      }, {
        value: "aiming",
        labelKey: "controller:settingsGyroWhileAiming"
      }, {
        value: "button",
        labelKey: "controller:settingsGyroWhileButton"
      }],
      aT = [{
        value: "tapHold",
        labelKey: "controller:settingsEmoteButtonTapHold"
      }, {
        value: "wheel",
        labelKey: "controller:settingsEmoteButtonWheel"
      }],
      FT = [{
        value: "toggle",
        labelKey: "controller:settingsSneakToggle"
      }, {
        value: "hold",
        labelKey: "controller:settingsSneakHold"
      }],
      rT = [{
        value: "default",
        labelKey: "controller:settingsButtonRepeatDefault"
      }, {
        value: "slow",
        labelKey: "controller:settingsButtonRepeatSlow"
      }, {
        value: "off",
        labelKey: "controller:settingsButtonRepeatOff"
      }],
      PT = [{
        value: "short",
        labelKey: "controller:settingsTapHoldShort"
      }, {
        value: "medium",
        labelKey: "controller:settingsTapHoldMedium"
      }, {
        value: "long",
        labelKey: "controller:settingsTapHoldLong"
      }],
      wT = [{
        value: "hold",
        labelKey: "controller:settingsAttackHold"
      }, {
        value: "toggle",
        labelKey: "controller:settingsAttackToggle"
      }],
      mT = {
        southpaw: "controller:settingsLayoutSouthpaw",
        triggersSwapped: "controller:settingsLayoutTriggersSwapped"
      },
      bT = {
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
      zT = {
        gameplay: "controller:settingsGroupGameplay",
        menu: "controller:settingsGroupMenus",
        inventory: "controller:settingsGroupInventory",
        keyboard: "controller:settingsGroupKeyboard"
      },
      JT = [{
        kind: "fixed",
        stick: "move",
        labelKey: "controller:settingsActionMove"
      }, {
        kind: "fixed",
        stick: "look",
        labelKey: "controller:settingsActionLook"
      }],
      oT = lT.d.map((TT => {
        let {
          group: kT,
          actions: cT
        } = TT;
        const lT = cT.map((TT => ({
          kind: "action",
          action: TT
        })));
        return {
          titleKey: zT[kT],
          rows: "gameplay" === kT ? [...JT, ...lT] : lT
        }
      })),
      HT = MT.ab.filter((TT => "Home" !== TT)),
      eT = 1e4;
    class GT {
      constructor(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
        this.cancelButton = TT, this.openButton = kT, this.accepts = cT, this.startMs = null, this.ignoredUntilMs = new Map, this.cancelDownAtMs = null
      }
      update(TT, kT) {
        var cT;
        this.updateIgnored(TT, kT);
        const lT = kT - (null !== (cT = this.startMs) && void 0 !== cT ? cT : kT) >= 250;
        for (const MT of HT)
          if (MT !== this.cancelButton && lT && !this.ignoredUntilMs.has(MT) && TT.wasPressed(MT) && this.accepts(MT)) return {
            kind: "bind",
            button: MT
          };
        if (this.ignoredUntilMs.has(this.cancelButton)) return null;
        if (TT.wasPressed(this.cancelButton)) {
          if (!this.accepts(this.cancelButton)) return {
            kind: "cancel"
          };
          this.cancelDownAtMs = kT
        }
        return null === this.cancelDownAtMs ? null : TT.isHeld(this.cancelButton) && kT - this.cancelDownAtMs >= 700 ? (this.cancelDownAtMs = null, {
          kind: "bind",
          button: this.cancelButton
        }) : TT.wasReleased(this.cancelButton) ? (this.cancelDownAtMs = null, {
          kind: "cancel"
        }) : null
      }
      getBindHoldProgress(TT) {
        return null === this.cancelDownAtMs ? 0 : Math.min(1, (TT - this.cancelDownAtMs) / 700)
      }
      updateIgnored(TT, kT) {
        if (null === this.startMs) {
          this.startMs = kT;
          for (const kT of HT) TT.isDown(kT) && this.ignoredUntilMs.set(kT, 1 / 0);
          this.openButton && !this.ignoredUntilMs.has(this.openButton) && this.ignoredUntilMs.set(this.openButton, kT + 250)
        }
        for (const [cT, lT] of this.ignoredUntilMs) {
          const MT = TT.isDown(cT);
          lT === 1 / 0 ? MT || cT !== this.openButton ? MT || this.ignoredUntilMs.delete(cT) : this.ignoredUntilMs.set(cT, kT + 250) : kT >= lT ? this.ignoredUntilMs.delete(cT) : MT && this.ignoredUntilMs.set(cT, 1 / 0)
        }
      }
    }
    const VT = 6e3;
    class ET {
      constructor() {
        this.downAtMs = null, this.pressesAtMs = []
      }
      update(TT, kT) {
        let {
          pressed: cT,
          ty: lT
        } = TT;
        if (cT) {
          const TT = this.pressesAtMs.at(-1);
          if (this.pressesAtMs = void 0 !== TT && kT - TT < 1500 ? [...this.pressesAtMs, kT] : [kT], this.pressesAtMs.length >= 3) return 1
        }
        return lT ? (this.downAtMs ??= kT, Math.min(1, (kT - this.downAtMs) / 1500)) : (this.downAtMs = null, 0)
      }
    }
  },
  4975: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => KT,
      d: () => OT
    });
    var lT = cT(71);
    const MT = new WeakMap,
      KT = TT => {
        var kT;
        const cT = TT.closest("[data-pad-slider]");
        return cT && null !== (kT = MT.get(cT)) && void 0 !== kT ? kT : null
      },
      OT = (TT, kT) => {
        const cT = (0, lT.useRef)(kT);
        cT.current = kT, (0, lT.useEffect)((() => {
          if (TT.current) return ((TT, kT) => (MT.set(TT, kT), () => {
            MT.get(TT) === kT && MT.delete(TT)
          }))(TT.current, {
            adjust: TT => {
              cT.current.adjust(TT)
            },
            setFraction: TT => {
              cT.current.setFraction(TT)
            },
            endDrag: () => {
              cT.current.endDrag()
            }
          })
        }), [TT])
      }
  },
  8754: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => KT,
      e: () => MT
    });
    var lT = cT(36);
    const MT = "localBlockBroken";

    function KT() {
      return {
        onPlayerChangeBlock(TT, kT, cT, KT, OT, yT) {
          "Air" === yT && lT.k.nt(MT)
        }
      }
    }
  },
  8243: (TT, kT, cT) => {
    var lT = {
      "./nintendo/A.svg": 8246,
      "./nintendo/B.svg": 8251,
      "./nintendo/Down.svg": 8256,
      "./nintendo/Home.svg": 8263,
      "./nintendo/LB.svg": 8265,
      "./nintendo/LS.svg": 8269,
      "./nintendo/LT.svg": 8277,
      "./nintendo/Left.svg": 8284,
      "./nintendo/LeftStick.svg": 8292,
      "./nintendo/Menu.svg": 8299,
      "./nintendo/RB.svg": 8305,
      "./nintendo/RS.svg": 8307,
      "./nintendo/RT.svg": 8312,
      "./nintendo/Right.svg": 8320,
      "./nintendo/RightStick.svg": 8323,
      "./nintendo/Up.svg": 8332,
      "./nintendo/View.svg": 8337,
      "./nintendo/X.svg": 8342,
      "./nintendo/Y.svg": 8346,
      "./playstation/A.svg": 8355,
      "./playstation/B.svg": 8357,
      "./playstation/Down.svg": 8364,
      "./playstation/Home.svg": 8366,
      "./playstation/LB.svg": 8368,
      "./playstation/LS.svg": 8370,
      "./playstation/LT.svg": 8373,
      "./playstation/Left.svg": 8380,
      "./playstation/LeftStick.svg": 8382,
      "./playstation/Menu.svg": 8388,
      "./playstation/RB.svg": 8397,
      "./playstation/RS.svg": 8402,
      "./playstation/RT.svg": 8410,
      "./playstation/Right.svg": 8417,
      "./playstation/RightStick.svg": 8426,
      "./playstation/Up.svg": 8435,
      "./playstation/View.svg": 8442,
      "./playstation/X.svg": 8444,
      "./playstation/Y.svg": 8452,
      "./steamdeck/A.svg": 8454,
      "./steamdeck/B.svg": 8456,
      "./steamdeck/Down.svg": 8463,
      "./steamdeck/Home.svg": 8469,
      "./steamdeck/LB.svg": 8471,
      "./steamdeck/LS.svg": 8475,
      "./steamdeck/LT.svg": 8478,
      "./steamdeck/Left.svg": 8484,
      "./steamdeck/LeftStick.svg": 8488,
      "./steamdeck/Menu.svg": 8494,
      "./steamdeck/RB.svg": 8502,
      "./steamdeck/RS.svg": 8510,
      "./steamdeck/RT.svg": 8518,
      "./steamdeck/Right.svg": 8523,
      "./steamdeck/RightStick.svg": 8529,
      "./steamdeck/Up.svg": 8536,
      "./steamdeck/View.svg": 8545,
      "./steamdeck/X.svg": 8547,
      "./steamdeck/Y.svg": 8550,
      "./xbox/A.svg": 8555,
      "./xbox/B.svg": 8557,
      "./xbox/Down.svg": 8561,
      "./xbox/Home.svg": 8564,
      "./xbox/LB.svg": 8573,
      "./xbox/LS.svg": 8582,
      "./xbox/LT.svg": 8590,
      "./xbox/Left.svg": 8597,
      "./xbox/LeftStick.svg": 8606,
      "./xbox/Menu.svg": 8611,
      "./xbox/RB.svg": 8615,
      "./xbox/RS.svg": 8618,
      "./xbox/RT.svg": 8625,
      "./xbox/Right.svg": 8632,
      "./xbox/RightStick.svg": 8639,
      "./xbox/Up.svg": 8648,
      "./xbox/View.svg": 8652,
      "./xbox/X.svg": 8659,
      "./xbox/Y.svg": 8668
    };

    function MT(TT) {
      var kT = KT(TT);
      return cT(kT)
    }

    function KT(TT) {
      if (!cT.o(lT, TT)) {
        var kT = new Error("Cannot find module '" + TT + "'");
        throw kT.code = "MODULE_NOT_FOUND", kT
      }
      return lT[TT]
    }
    MT.keys = function() {
      return Object.keys(lT)
    }, MT.resolve = KT, TT.exports = MT, MT.id = 8243
  },
  8246: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/A.926fb88933484dfbde14.svg"
  },
  8251: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/B.9f5ec099f78f84e44427.svg"
  },
  8256: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8263: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  8265: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/LB.3a20b15927b55d5d8b60.svg"
  },
  8269: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8277: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/LT.9fdc5e69011b9d41f50a.svg"
  },
  8284: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8292: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8299: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Menu.c903a662eb685211e52e.svg"
  },
  8305: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/RB.bba470ddb76ceec5d168.svg"
  },
  8307: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8312: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/RT.e5a9fbcc3c79550111ca.svg"
  },
  8320: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8323: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8332: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8337: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/View.0c9378b5d720a636d50d.svg"
  },
  8342: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/X.c9377519af94e6dce1d7.svg"
  },
  8346: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Y.62d8c17731dd2e172426.svg"
  },
  8355: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/A.958a6de9474f8d0c9caf.svg"
  },
  8357: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/B.d05958bfa88a1162b47a.svg"
  },
  8364: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Down.db68fb3980768eb54671.svg"
  },
  8366: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  8368: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/LB.37a3c5128c958ec2a0c2.svg"
  },
  8370: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/LS.15b0cc5bf3f2fe7bbd8b.svg"
  },
  8373: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/LT.5412ae5222c69f8c833f.svg"
  },
  8380: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Left.4457b2895ce94a5df32e.svg"
  },
  8382: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8388: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Menu.1e8427f8133c9d456c53.svg"
  },
  8397: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/RB.c96c4aa2590209e930c7.svg"
  },
  8402: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/RS.8d70d147cf1ab136e845.svg"
  },
  8410: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/RT.1e4691bb5a7c049693df.svg"
  },
  8417: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Right.a1e101413040c540b879.svg"
  },
  8426: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8435: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Up.7544a65ad4f611a55775.svg"
  },
  8442: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/View.003cae39de89cae0b9d8.svg"
  },
  8444: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/X.d88b6e62dd8fb4bda32a.svg"
  },
  8452: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Y.428d3e70775877892f82.svg"
  },
  8454: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8456: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8463: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8469: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Home.ea8b009cfa9562aa644e.svg"
  },
  8471: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/LB.f283d355d22fc107d6d6.svg"
  },
  8475: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8478: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/LT.13e66c122e7ee04bb876.svg"
  },
  8484: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8488: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8494: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Menu.90fc4e918900eb5062a0.svg"
  },
  8502: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/RB.918a7f16dc054d96b6f3.svg"
  },
  8510: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8518: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/RT.a0523211130959598bed.svg"
  },
  8523: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8529: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8536: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8545: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/View.0bc952e292c28c3baac2.svg"
  },
  8547: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8550: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  },
  8555: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8557: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8561: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8564: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Home.8898f76b20962fe52ab7.svg"
  },
  8573: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/LB.689ba3703ae248f2e4cc.svg"
  },
  8582: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8590: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/LT.9c2d10d335ab5c590525.svg"
  },
  8597: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8606: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8611: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Menu.9e485791ea97009871ca.svg"
  },
  8615: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/RB.7ee5ce48dd551f993f80.svg"
  },
  8618: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8625: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/RT.903ecadc55a9e9e00f07.svg"
  },
  8632: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8639: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8648: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8652: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/View.3c5eeb34f0413bde4a65.svg"
  },
  8659: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8668: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);