export const id = 28;
export const ids = [28];
export const modules = {
  4770: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => tD,
      g: () => gD,
      i: () => ZD,
      j: () => ND
    });
    var ID = cD(53),
      pD = cD(4774),
      iD = cD(4182),
      fD = cD(1356),
      bD = cD(4799),
      QD = cD(1049),
      wD = cD.n(QD),
      SD = cD(1340),
      BD = cD(1701),
      yD = cD(4806),
      MD = cD(1093);

    function tD(DD) {
      let {
        label: CD,
        onClick: cD,
        checked: ID,
        circleInfoText: pD,
        className: bD,
        disabled: QD,
        note: SD
      } = DD;
      return (0, MD.jsxs)("div", {
        "aria-disabled": QD || void 0,
        "data-pad-focusable": !0,
        className: wD()("SettingBox CheckboxContainer", {
          [bD]: bD,
          SettingBoxDisabled: QD
        }),
        onClick: () => {
          QD || cD(!ID)
        },
        children: [(0, MD.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, MD.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, MD.jsx)(iD.e, {
              className: "SettingsCheckbox",
              checked: ID,
              disabled: QD,
              onChange: () => {}
            })
          }), (0, MD.jsxs)("div", {
            className: "CheckboxText",
            children: [CD, pD && (0, MD.jsx)("span", {
              onClick: DD => DD.stopPropagation(),
              children: (0, MD.jsx)(fD.d, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: pD
              })
            })]
          })]
        }), SD && (0, MD.jsx)("div", {
          className: "SettingNote",
          children: SD
        })]
      })
    }

    function ZD(DD) {
      let {
        name: CD,
        onChange: cD,
        min: pD,
        max: iD,
        step: bD,
        initValue: QD,
        circleInfoText: SD,
        format: BD,
        className: yD,
        padStep: tD,
        disabled: ZD = !1,
        selectableMax: oD,
        cappedNote: ND,
        onChangeComplete: gD
      } = DD;
      const [XD, mD] = (0, ID.useState)(QD), nD = (0, ID.useRef)(QD);
      (0, ID.useEffect)((() => {
        nD.current = QD, mD(QD)
      }), [QD]);
      const OD = void 0 !== oD && oD < iD,
        PD = OD ? {
          "--slider-selectable": (oD - pD) / (iD - pD)
        } : void 0;
      return (0, MD.jsxs)("div", {
        className: wD()("SettingBox SettingsSliderDiv", {
          [yD]: yD,
          SettingBoxDisabled: ZD,
          SliderCapped: OD
        }),
        style: PD,
        children: [(0, MD.jsxs)("div", {
          className: "SliderText",
          children: [`${CD}: ${BD?BD(XD):XD}`, SD && (0, MD.jsx)(fD.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: SD
          })]
        }), (0, MD.jsx)("div", {
          className: "SliderDiv",
          children: (0, MD.jsx)(vD, {
            value: XD,
            min: pD,
            max: iD,
            step: bD,
            onChange: DD => {
              if (OD && DD >= oD && XD === oD) return;
              const CD = OD ? Math.min(DD, oD) : DD;
              nD.current = CD, mD(CD), cD(CD)
            },
            onChangeComplete: gD && (() => {
              gD(nD.current)
            }),
            format: BD,
            padStep: tD,
            disabled: ZD
          })
        }), OD && ND && (0, MD.jsx)("div", {
          className: "SettingNote",
          children: ND
        })]
      })
    }
    const oD = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function vD(DD) {
      var CD;
      let {
        value: cD,
        min: iD,
        max: fD,
        step: bD,
        onChange: QD,
        orientation: wD,
        reverse: SD,
        setIsChanging: BD,
        tooltip: tD,
        labels: ZD,
        handleLabel: vD,
        format: ND,
        onChangeStart: gD,
        onChangeComplete: XD,
        padStep: mD,
        disabled: nD = !1
      } = DD;
      const OD = (0, ID.useRef)(null),
        PD = (0, ID.useRef)(null);
      (0, ID.useLayoutEffect)((() => {
        var DD, CD, cD;
        const ID = null !== (DD = null === (CD = OD.current) || void 0 === CD ? void 0 : CD.querySelector(".rangeslider")) && void 0 !== DD ? DD : null;
        null === ID || void 0 === ID || ID.setAttribute("data-pad-slider", ""), null === ID || void 0 === ID || ID.setAttribute("data-pad-focusable", ""), null === ID || void 0 === ID || null === (cD = ID.querySelector(".rangeslider__handle")) || void 0 === cD || cD.setAttribute("data-pad-slider-handle", ""), PD.current = ID
      }), []), (0, ID.useLayoutEffect)((() => {
        var DD, CD;
        nD ? null === (DD = PD.current) || void 0 === DD || DD.setAttribute("aria-disabled", "true") : null === (CD = PD.current) || void 0 === CD || CD.removeAttribute("aria-disabled")
      }), [nD]);
      const HD = (null !== (CD = String(bD).split(".")[1]) && void 0 !== CD ? CD : "").length,
        UD = DD => {
          const CD = Number((Math.round((DD - iD) / bD) * bD + iD).toFixed(HD));
          return Math.min(fD, Math.max(iD, CD))
        },
        xD = (0, ID.useRef)(XD);
      xD.current = XD, (0, ID.useEffect)((() => {
        const DD = OD.current;
        if (!DD) return;
        const CD = DD => {
          var CD;
          oD.has(DD.key) && (null === (CD = xD.current) || void 0 === CD || CD.call(xD))
        };
        return DD.addEventListener("keyup", CD), () => {
          DD.removeEventListener("keyup", CD)
        }
      }), []);
      const qD = (0, ID.useRef)(!1);
      return (0, yD.g)(PD, {
        adjust: DD => {
          if (nD) return;
          const CD = null !== mD && void 0 !== mD ? mD : Math.max(bD, Math.round((fD - iD) / 20 / bD) * bD),
            ID = UD(cD + DD * CD * (SD ? -1 : 1));
          ID !== cD && (null === gD || void 0 === gD || gD(), QD(ID), null === XD || void 0 === XD || XD())
        },
        setFraction: DD => {
          if (nD) return;
          const CD = UD(iD + (SD ? 1 - DD : DD) * (fD - iD));
          CD !== cD && (qD.current || (qD.current = !0, null === gD || void 0 === gD || gD()), QD(CD))
        },
        endDrag: () => {
          qD.current && (qD.current = !1, null === XD || void 0 === XD || XD())
        }
      }), (0, MD.jsx)("div", {
        ref: OD,
        style: {
          display: "contents"
        },
        children: (0, MD.jsx)(pD.e, {
          value: cD,
          min: iD,
          max: fD,
          step: bD,
          onChange: QD,
          orientation: wD,
          reverse: SD,
          tooltip: tD,
          labels: ZD,
          handleLabel: vD,
          format: ND,
          onChangeStart: () => {
            null === gD || void 0 === gD || gD(), null === BD || void 0 === BD || BD(!0)
          },
          onChangeComplete: () => {
            null === BD || void 0 === BD || BD(!1), null === XD || void 0 === XD || XD()
          }
        })
      })
    }
    async function ND() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const CD = SD.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: "",
        unlockPointerKey: DD
      });
      !0 === await CD.getResult() && (0, BD.reloadBloxd)()
    }

    function gD(DD) {
      let {
        label: CD,
        options: cD,
        value: ID,
        onChange: pD,
        circleInfoText: iD
      } = DD;
      return (0, MD.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, MD.jsxs)("div", {
          className: "SliderText",
          children: [CD, iD && (0, MD.jsx)(fD.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: iD
          })]
        }), (0, MD.jsx)(bD.b, {
          ariaLabel: CD,
          options: cD,
          value: ID,
          onChange: pD
        })]
      })
    }
  },
  4799: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => fD
    });
    var ID = cD(1049),
      pD = cD.n(ID),
      iD = cD(1093);

    function fD(DD) {
      let {
        options: CD,
        value: cD,
        onChange: ID,
        ariaLabel: fD,
        className: bD,
        reselectable: QD = !1,
        keepsFocus: wD = !1
      } = DD;
      return (0, iD.jsx)("div", {
        className: pD()("SegmentedToggle", bD),
        role: "group",
        "aria-label": fD,
        children: CD.map((DD => {
          const CD = DD.value === cD;
          return (0, iD.jsx)("button", {
            type: "button",
            "aria-pressed": CD,
            "aria-label": DD.ariaLabel,
            title: DD.ariaLabel,
            className: pD()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: CD
            }),
            onMouseDown: wD ? DD => {
              DD.preventDefault()
            } : void 0,
            onClick: () => {
              CD && !QD || ID(DD.value)
            },
            children: DD.label
          }, DD.value)
        }))
      })
    }
  },
  7860: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => pD,
      f: () => iD,
      i: () => yD,
      l: () => BD,
      p: () => wD,
      s: () => bD,
      t: () => ID,
      u: () => MD,
      w: () => tD
    });
    const ID = ["menuConfirm", "menuBack", "menuTabPrevious", "menuTabNext", "menuPageUp", "menuPageDown", "menuSecondary", "menuToggleCursor"],
      pD = [{
        group: "gameplay",
        actions: ["jump", "sneak", "sneakToggle", "sprint", "attack", "use", "hotbarPrevious", "hotbarNext", "inventory", "actionButton", "perspective", "pickBlock", "drop", "emoteWheel", "chat", "pause", "leaderboard"]
      }, {
        group: "menu",
        actions: ID
      }, {
        group: "inventory",
        actions: ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryClose", "inventoryPanelPrevious", "inventoryPanelNext", "inventoryDrop", "inventoryHotbarSwap"]
      }, {
        group: "keyboard",
        actions: ["keyboardType", "keyboardBackspace", "keyboardSpace", "keyboardCaretLeft", "keyboardCaretRight", "keyboardShift", "keyboardSymbols", "keyboardSubmit", "keyboardClose", "keyboardChannel"]
      }],
      iD = {
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
      fD = ["pickBlock", "perspective"],
      bD = DD => fD.includes(DD) ? fD : [DD],
      QD = Object.fromEntries(pD.flatMap((DD => {
        let {
          group: CD,
          actions: cD
        } = DD;
        return cD.map((DD => [DD, CD]))
      }))),
      wD = DD => QD[DD],
      SD = {
        pause: ["menu"],
        leaderboard: ["menu"],
        inventory: ["menu"],
        menuPageUp: ["inventory"],
        menuPageDown: ["inventory"]
      },
      BD = DD => {
        var CD;
        return [wD(DD), ...null !== (CD = SD[DD]) && void 0 !== CD ? CD : []]
      },
      yD = new Set(["menu", "inventory", "keyboard"]),
      MD = {
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
      tD = new Set(["forward", "backward", "left", "right"])
  },
  7851: (DD, CD, cD) => {
    cD.d(CD, {
      B: () => PD,
      D: () => gD,
      E: () => UD,
      G: () => SD,
      I: () => HD,
      M: () => JD,
      e: () => ND,
      f: () => mD,
      h: () => yD,
      k: () => MD,
      m: () => aD,
      q: () => qD,
      u: () => xD,
      v: () => XD,
      z: () => KD
    });
    var ID = cD(7860),
      pD = cD(7865),
      iD = cD(7839),
      fD = cD(7883);
    const bD = DD => "pickBlock" === DD ? "perspective" : DD,
      QD = (DD, CD) => {
        var cD;
        const pD = bD(CD);
        return null !== (cD = DD[pD]) && void 0 !== cD ? cD : ID.f[pD]
      },
      wD = new Map([
        ["menuConfirm", "menuBack"],
        ["inventoryPrimary", "inventoryClose"],
        ["keyboardType", "keyboardClose"]
      ].flatMap((DD => {
        let [CD, cD] = DD;
        return [
          [CD, cD],
          [cD, CD]
        ]
      }))),
      SD = (DD, CD) => null !== DD && void 0 !== DD ? DD : "nintendo" === CD,
      BD = DD => SD((0, pD.h)().swapConfirmBack, (0, pD.i)()) && wD.get(DD) || DD,
      yD = DD => QD((0, pD.h)().bindings, BD(DD)),
      MD = DD => ID.f[BD(DD)],
      tD = Object.keys(ID.f),
      ZD = DD => "gameplay" === (0, ID.p)(DD) ? ["gameplay"] : (0, ID.l)(DD),
      oD = (DD, CD) => {
        const cD = ZD(CD);
        return ZD(DD).some((DD => cD.includes(DD)))
      },
      vD = (DD, CD, cD) => {
        const pD = QD(DD, CD),
          fD = new Set((0, ID.s)(CD)),
          wD = [...fD];
        for (let ID = wD.pop(); ID; ID = wD.pop())
          for (const CD of tD) {
            const iD = QD(DD, CD);
            fD.has(CD) || iD !== cD && iD !== pD || !oD(ID, CD) || (fD.add(CD), wD.push(CD))
          }
        const SD = {
          ...DD
        };
        for (const BD of fD) {
          const CD = QD(DD, BD) === pD ? cD : pD,
            fD = (0, ID.l)(BD).some((DD => ID.i.has(DD)));
          if ((0, iD.C)(CD) && fD) return null;
          SD[bD(BD)] = CD
        }
        for (const iD of Object.keys(SD)) SD[iD] === ID.f[iD] && delete SD[iD];
        return SD
      },
      ND = (DD, CD) => null !== vD((0, pD.h)().bindings, BD(DD), CD),
      gD = (DD, CD) => {
        if (yD(DD) === CD) return !0;
        const cD = vD((0, pD.h)().bindings, BD(DD), CD);
        return !!cD && ((0, pD.j)({
          bindings: cD
        }), !0)
      },
      XD = (DD, CD) => {
        const cD = (0, ID.s)(CD);
        return tD.filter((CD => bD(CD) === CD && !cD.includes(CD) && QD(DD, BD(CD)) !== yD(CD)))
      },
      mD = ["southpaw", "triggersSwapped"],
      nD = {
        southpaw: {
          sprint: "RS",
          sneakToggle: "LS"
        },
        triggersSwapped: {
          attack: "LT",
          use: "RT"
        }
      },
      OD = DD => Object.keys(nD[DD]),
      PD = (DD, CD) => "southpaw" === DD ? CD.swapSticks : OD(DD).every((cD => QD(CD.bindings, cD) === nD[DD][cD])),
      HD = (DD, CD) => {
        const cD = (0, pD.h)();
        let iD = cD.bindings;
        for (const pD of OD(DD)) {
          const cD = CD ? nD[DD][pD] : ID.f[pD];
          if (iD = vD(iD, pD, cD), !iD) return !1
        }
        return (0, pD.j)({
          swapSticks: "southpaw" === DD ? CD : cD.swapSticks,
          bindings: iD
        }), !0
      },
      UD = () => {
        (0, pD.j)({
          swapSticks: !1,
          bindings: {}
        })
      },
      xD = () => (0, pD.h)().swapSticks ? "RightStick" : "LeftStick",
      qD = () => (0, pD.h)().swapSticks ? "LeftStick" : "RightStick",
      JD = DD => (0, pD.h)().swapSticks && (0, iD.C)(DD),
      KD = DD => JD(DD) ? xD() : qD(),
      aD = DD => {
        if (ID.w.has(DD)) return xD();
        const CD = ID.u[DD];
        return CD && ("leaderboard" !== CD || (0, fD.d)(DD, (0, fD.b)())) ? yD(CD) : null
      }
  },
  7829: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      ControllerCategory: () => MQ,
      ControllerGlyph: () => Zi,
      ControllerRoot: () => Mb,
      PadLobbyShortcuts: () => Jb,
      PadSneakChip: () => Xb,
      PadTooltip: () => nb,
      attachPressToContinue: () => Tb,
      getBoundButton: () => SD.h,
      getControllerSettings: () => yD.h,
      getGlyphForNoaAction: () => SD.m,
      getInventoryCursorState: () => ZQ,
      getMenuShortcutButton: () => jI,
      getPadGlyphIconName: () => vb,
      getPadGlyphIconUrl: () => Nb,
      getPadRepeatTiming: () => ZD.e,
      handOverPadFocus: () => vQ,
      hasActivePad: () => tQ,
      isPadSteppingSlots: () => oQ
    });
    const ID = JSON.parse('{"controller":{"inventoryTake":"Take","inventoryTakeHalf":"Take half","inventoryPlace":"Place","inventoryPlaceOne":"Place one","inventoryQuickMove":"Quick move","inventoryToHotbar":"To hotbar","inventoryPutBack":"Put back","inventoryHotbarSwap":"Swap with hotbar","inventorySwapHere":"Swap here","inventoryCancel":"Cancel","inventoryClose":"Close","inventoryDrop":"Drop (hold: stack)","inventorySelect":"Select","inventoryCraft":"Craft (hold to repeat)","inventoryCraftAll":"Craft all","inventoryChooseRecipe":"Choose","inventoryBackToRecipes":"Back to recipes","inventoryType":"Type","inventoryPanels":"Switch panel","inventoryCategory":"Category","inventoryPage":"Page","disconnected":"Controller disconnected","gameplayReload":"Reload","gameplayActionWheelHint":"(hold for more)","gameplaySneaking":"Sneaking","gameplayLoadFailedTitle":"Controller unavailable","gameplayLoadFailedSubtitle":"Reload the page to play with your controller.","gameplayDropStack":"Keep holding to drop the stack","gameplayAttackLatched":"Attacking","gameplayPickBlock":"Pick block","padButtonView":"View","padButtonMenu":"Menu","padButtonHome":"Home","padButtonCreate":"Create","padButtonOptions":"Options","padButtonDpadUp":"D-pad \u2191","padButtonDpadDown":"D-pad \u2193","padButtonDpadLeft":"D-pad \u2190","padButtonDpadRight":"D-pad \u2192","padButtonLeftStick":"L Stick","padButtonRightStick":"R Stick","settingsLook":"Look","settingsLookSensitivityX":"Look sensitivity (horizontal)","settingsLookSensitivityY":"Look sensitivity (vertical)","settingsAimLookSensitivity":"Look sensitivity while aiming (use held)","settingsInvertLookX":"Invert horizontal look","settingsInvertLookY":"Invert vertical look","settingsLookCurve":"Look curve","settingsLookCurveHint":"Steep gives finer aim near the centre, Linear turns at an even rate, and Boost turns faster when you hold the stick all the way.","settingsCurveExponential":"Steep","settingsCurveLinear":"Linear","settingsCurveBoost":"Boost","settingsLookDeadzone":"Look deadzone","settingsGyro":"Gyro aiming","settingsGyroToggle":"Aim by moving the controller","settingsGyroToggleInfo":"Turn and tilt the controller to aim, on top of the right stick.","settingsGyroTogglePhone":"Aim by moving your phone or tablet","settingsGyroToggleInfoPhone":"Turn and tilt your phone or tablet to aim, on top of the right stick.","settingsGyroUnsupported":"Gyro aiming needs Chrome or Edge.","settingsGyroBlocked":"Gyro aiming isn\'t available on this site.","settingsGyroPhoneNeedsController":"Connect a controller to aim by moving your phone or tablet.","settingsGyroSteamHint":"If Steam already turns your gyro into mouse movement, leave this off.","settingsGyroConnect":"Connect motion controller","settingsGyroConnectHint":"Works with DualSense, DualShock 4 and Switch controllers.","settingsGyroConnectNeedsClick":"Click Connect with your mouse: the browser asks before sharing a controller.","settingsGyroOpenFailed":"Another app is using the controller. Close apps such as Steam or DS4Windows, then try again.","settingsGyroConnected":"Aiming with {{name}}.","settingsGyroAllowMotion":"Allow motion sensor","settingsGyroAllowNeedsTap":"Tap Allow motion sensor on your screen to turn it on.","settingsGyroPhoneOn":"Aiming with this device\'s motion sensor.","settingsGyroPhoneWaiting":"Waiting for this device\'s motion sensor\u2026","settingsGyroPhoneNoSensor":"No motion sensor found on this device.","settingsGyroPhoneDenied":"Motion access is blocked. Allow it in your browser settings.","settingsGyroSensitivity":"Gyro sensitivity","settingsGyroActivation":"Gyro turns on","settingsGyroAlways":"Always","settingsGyroWhileAiming":"While aiming","settingsGyroWhileButton":"While holding a button","settingsGyroAimingHint":"Hold {{button}} to aim with motion.","settingsGyroButton":"Gyro button","settingsGyroButtonHint":"While gyro aiming is on, this button only turns the gyro on in game, so pick one you rarely use.","settingsMovement":"Movement","settingsMoveDeadzone":"Move deadzone","settingsAutoSprint":"Sprint at full tilt","settingsAutoSprintInfo":"Push the movement stick all the way to sprint.","settingsSneak":"Sneak","settingsSneakHold":"Hold","settingsSneakToggle":"Toggle","settingsButtons":"Buttons","settingsPromptFamily":"Button prompts","settingsPromptAuto":"Match my controller","settingsPromptXbox":"Xbox","settingsPromptPlayStation":"PlayStation","settingsPromptNintendo":"Nintendo","settingsPromptSteamDeck":"Steam Deck","settingsPromptGeneric":"Generic","settingsHideButtonHints":"Hide button hints","settingsVibration":"Vibration","settingsCursorSpeed":"Virtual cursor speed","settingsCursorMagnetism":"Cursor snaps onto buttons","settingsMenuBackToCategories":"Back returns to the category list first","settingsAccessibility":"Accessibility","settingsSwapConfirmBack":"Swap confirm and back","settingsSwapToast":"Select and Back have swapped buttons.","settingsLayoutRefusedToast":"This layout doesn\'t fit your current buttons. Reset them to use it.","settingsSwapConfirmBackInfo":"Select with the right face button and go back with the bottom one, in menus, the inventory and the on-screen keyboard. On by default for Nintendo controllers.","settingsButtonRepeat":"Button repeat","settingsButtonRepeatHint":"How a held button repeats in menus, sliders, the on-screen keyboard and crafting. Off acts once per press, and holding drop in game drops just one item.","settingsButtonRepeatDefault":"Default","settingsButtonRepeatSlow":"Slow (0.8 s, then 4 a second)","settingsButtonRepeatOff":"Off (once per press)","settingsTapHoldTime":"Tap/hold time","settingsTapHoldTimeHint":"How long to hold the chat, emote or action button to open its wheel, or the view button to change view where a tap picks a block. Dropping a whole stack takes 0.8, 1 or 1.3 s.","settingsTapHoldShort":"Short (0.25 s)","settingsTapHoldMedium":"Medium (0.5 s)","settingsTapHoldLong":"Long (0.8 s)","settingsEmoteButton":"Emote button","settingsEmoteButtonTapHoldHint":"Tap to repeat your last emote, or hold to open the emote wheel.","settingsEmoteButtonWheelHint":"Any press opens the emote wheel, with no hold to time. Pick with the stick, then select.","settingsEmoteButtonTapHold":"Tap repeats, hold opens wheel","settingsEmoteButtonWheel":"Opens the wheel","settingsAttackMode":"Attack / mine","settingsAttackHoldHint":"Hold attack to keep attacking or mining.","settingsAttackToggleHint":"Press attack once to keep attacking or mining, and again to stop.","settingsAttackHold":"Hold","settingsAttackToggle":"Toggle","settingsLargePointer":"Large pointer and focus","settingsLargePointerInfo":"A bigger menu cursor, thicker selection brackets and bigger button hints.","settingsRemap":"Remap buttons","settingsRemapHint":"Select an action, then press a button. If that button is taken, the two swap.","settingsLayoutSouthpaw":"Southpaw (move with the right stick)","settingsLayoutTriggersSwapped":"Triggers swapped (attack with the left trigger)","settingsCapturePrompt":"Press a button","settingsCaptureCancelHint":"Press {{button}} to cancel","settingsCaptureCancelOrBindHint":"Tap {{button}} to cancel, or hold it to choose it","settingsReset":"Reset","settingsSwapNotice":"{{action}} moved to {{button}}","settingsResetAll":"Reset all buttons and sticks","settingsGroupGameplay":"Movement & gameplay","settingsGroupMenus":"Menus","settingsGroupInventory":"Inventory","settingsGroupKeyboard":"On-screen keyboard","settingsActionMove":"Move","settingsActionLook":"Look around","settingsActionJump":"Jump","settingsActionSneak":"Sneak","settingsActionSneakToggle":"Toggle sneak","settingsActionSprint":"Sprint","settingsActionAttack":"Attack / mine","settingsActionUse":"Use / place","settingsActionHotbarPrevious":"Previous hotbar slot","settingsActionHotbarNext":"Next hotbar slot","settingsActionInventory":"Inventory","settingsActionActionButton":"Game action","settingsActionPerspective":"Change view","settingsActionPickBlock":"Pick block (creative)","settingsActionDrop":"Drop item","settingsActionEmoteWheel":"Emotes","settingsActionChat":"Chat","settingsActionPause":"Pause menu","settingsActionLeaderboard":"Shop / leaderboard","settingsActionMenuConfirm":"Select","settingsActionMenuBack":"Back","settingsActionMenuTabPrevious":"Previous tab","settingsActionMenuTabNext":"Next tab","settingsActionMenuPageUp":"Page up","settingsActionMenuPageDown":"Page down","settingsActionMenuSecondary":"Secondary action","settingsActionMenuToggleCursor":"Switch to virtual cursor","settingsActionInventoryPrimary":"Pick up / place","settingsActionInventorySecondary":"Pick up half / place one","settingsActionInventoryQuickMove":"Quick move","settingsActionInventoryHotbarSwap":"Swap with hotbar slot","settingsActionInventoryClose":"Close","settingsActionInventoryPanelPrevious":"Previous panel","settingsActionInventoryPanelNext":"Next panel","settingsActionInventoryDrop":"Drop item","settingsActionKeyboardType":"Type key","settingsActionKeyboardBackspace":"Backspace","settingsActionKeyboardSpace":"Space","settingsActionKeyboardCaretLeft":"Move cursor left","settingsActionKeyboardCaretRight":"Move cursor right","settingsActionKeyboardShift":"Shift","settingsActionKeyboardSymbols":"Accents and symbols","settingsActionKeyboardSubmit":"Send","settingsActionKeyboardClose":"Close keyboard","settingsActionKeyboardChannel":"Chat channel","settingsAlternatives":"Try alternatives","settingsAlternativesHint":"Try each way of playing and keep the one that feels best.","settingsMenuNavigation":"Menu navigation","settingsMenuNavigationHint":"Steer a cursor with the stick and jump between buttons with the D-pad, or use just one.","settingsNavHybrid":"Cursor and D-pad","settingsMenuNavFocus":"Jump between buttons","settingsVirtualCursor":"Virtual cursor","settingsInventoryNavigation":"Inventory","settingsInventoryNavigationHint":"Steer a cursor with the stick and step slot by slot with the D-pad, or use just one.","settingsInventoryNavSlot":"Slot by slot","settingsQuickChat":"Hold chat button","settingsQuickChatHint":"Hold the chat button to pick a quick phrase. Tapping it still opens chat.","settingsQuickChatWheel":"Quick chat wheel","settingsQuickChatOff":"Off","settingsLeaderboardButton":"Shop / leaderboard button","settingsLeaderboardButtonHint":"Open the shop in one press in games that have one. The lobby leaderboard is still in the pause menu.","settingsLeaderboardButtonShop":"Shop, in games with one","settingsLeaderboardButtonLeaderboard":"Always the leaderboard","settingsTester":"Gamepad tester","settingsTesterNoPad":"Connect a gamepad and press any button to test it.","settingsTesterFamily":"Detected: {{family}}","settingsTesterHint":"Start a test to try every button and stick without moving through the menu.","settingsTesterStart":"Start test","settingsTesterStop":"Stop test","settingsTesterTesting":"Press anything to see it light up. To stop, hold {{button}} or press it three times.","settingsControlsNote":"Playing with a gamepad? Change its buttons and feel in Gamepad settings.","settingsOpenController":"Gamepad settings","keyboardSpace":"Space","keyboardSend":"Send","keyboardDone":"Done","keyboardTargetChat":"Chat","keyboardTargetSign":"Sign","keyboardTargetNameTag":"Name tag","keyboardTargetBook":"Book page","keyboardTargetBookTitle":"Book title","keyboardTargetText":"Text","keyboardPhraseGg":"gg","keyboardPhraseHi":"hi","keyboardPhraseThanks":"thanks","keyboardPhraseGl":"gl","keyboardPhraseBrb":"brb","keyboardPhraseYes":"yes","keyboardPhraseNo":"no","keyboardPhraseHelp":"help!","quickChatPick":"Pick a phrase","actionWheelPick":"Pick an action","wheelReleaseToPick":"Release to pick","wheelClose":"Close","wheelChoose":"Choose","menusSelect":"Select","menusBack":"Back","menusClose":"Close","menusQuickChat":"Quick chat (hold)","menusSkipTutorial":"Skip tutorial","menusTabs":"Tabs","menusRows":"Rows","menusCursorMode":"Cursor","menusFocusMode":"Focus","menusClick":"Click","menusRightClick":"Right-click","menusScroll":"Scroll","menusFriends":"Friends","menusSearch":"Search","menusSettings":"Settings","menusLeaveGameTitle":"Leave the game?","menusLeaveGameLeave":"Leave","menusLeaveGameStay":"Stay","menusNotifications":"Notifications","menusLobby":"Lobby","menusShop":"Shop","menusTasks":"Tasks & leaderboards","menusInvite":"Invite friends","menusAdjust":"Adjust","menusFavourite":"Favourite","screensPressToContinue":"Press {{button}} to continue","screensPressToEnterGame":"Press {{button}} to enter game","screensEnterGame":"Enter game","screensBackToGames":"Back to games","tutorialMine":"Mine","tutorialPlace":"Place / Use","tutorialInventory":"Inventory","tutorialPause":"Pause","menusUseMouse":"Use a mouse or touch here"}}');
    var pD = cD(1192),
      iD = cD(1403),
      fD = cD(7834),
      bD = cD(62),
      QD = cD(16),
      wD = cD(20),
      SD = cD(7851),
      BD = cD(7890),
      yD = cD(7865),
      MD = cD(7893),
      tD = cD(7839),
      ZD = cD(8339),
      oD = cD(8347),
      vD = cD(1645);
    const ND = (DD, CD, cD) => Math.max(CD, Math.min(cD, DD)),
      gD = DD => Math.min(DD.width, DD.height) / 720,
      XD = DD => Math.max(.15, DD);
    class mD {
      constructor() {
        this.locked = !1
      }
      lock() {
        this.locked = !0
      }
      update(DD, CD) {
        const cD = Math.hypot(DD.x, DD.y) >= (DD => Math.max(.3, DD))(CD);
        return this.locked ? (this.locked = cD, !1) : cD
      }
    }
    const nD = (DD, CD) => {
        const cD = ND(CD.dtMs, 0, 100),
          ID = cD / 1e3,
          pD = gD(CD.viewport) * (CD.cursorSpeedPercent / 100),
          iD = (0, tD.i)(CD.stick, XD(CD.moveDeadzone)),
          fD = Math.hypot(iD.x, iD.y),
          bD = ((DD, CD, cD) => {
            if (CD < .3) return 0;
            const ID = cD / 350;
            return CD >= .85 ? Math.min(1, DD + ID) : Math.max(0, DD - ID)
          })(DD.speedRamp, fD, cD);
        let QD = DD.x,
          wD = DD.y;
        if (fD > 0) {
          const DD = .45 + .55 * bD,
            cD = CD.context.overInteractive ? .45 : 1,
            SD = 1400 * (DD => {
              const CD = ND(DD, 0, 1);
              return .3 * CD + .7 * CD * CD
            })(fD) * pD * DD * cD;
          QD += iD.x / fD * SD * ID, wD += iD.y / fD * SD * ID
        }
        const SD = Math.hypot(CD.dpad.x, CD.dpad.y);
        if (SD > 0) {
          const DD = 500 * pD;
          QD += CD.dpad.x / SD * DD * ID, wD += CD.dpad.y / SD * DD * ID
        }
        const BD = CD.context.magnetTarget;
        if (BD && fD < .3 && 0 === SD) {
          const DD = ((DD, CD, cD, ID, pD) => {
            const iD = CD.x - DD.x,
              fD = CD.y - DD.y,
              bD = Math.hypot(iD, fD);
            if (0 === bD) return {
              x: 0,
              y: 0
            };
            const QD = Math.min(bD, pD * (1 - ID / .3));
            let wD = iD / bD * QD,
              SD = fD / bD * QD;
            if (ID > 0) {
              const DD = cD.x / ID,
                CD = cD.y / ID,
                pD = wD * DD + SD * CD;
              pD < 0 && (wD -= pD * DD, SD -= pD * CD)
            }
            return {
              x: wD,
              y: SD
            }
          })({
            x: QD,
            y: wD
          }, BD, iD, fD, 120 * gD(CD.viewport) * ID);
          QD += DD.x, wD += DD.y
        }
        return {
          x: ND(QD, 0, Math.max(0, CD.viewport.width - 1)),
          y: ND(wD, 0, Math.max(0, CD.viewport.height - 1)),
          speedRamp: bD
        }
      },
      OD = DD => {
        const CD = (0, tD.i)(DD, .2);
        return 0 !== CD.x || 0 !== CD.y
      },
      PD = (DD, CD) => {
        const cD = (0, tD.i)(DD, .2),
          ID = Math.hypot(cD.x, cD.y);
        if (0 === ID) return {
          x: 0,
          y: 0
        };
        const pD = ID * ID * 1600,
          iD = ND(CD, 0, 100) / 1e3;
        return {
          x: cD.x / ID * pD * iD,
          y: cD.y / ID * pD * iD
        }
      },
      HD = (DD, CD) => "y" === CD ? DD.scrollHeight > DD.clientHeight + 1 : DD.scrollWidth > DD.clientWidth + 1,
      UD = (DD, CD) => {
        if (!HD(DD, CD)) return !1;
        const cD = getComputedStyle(DD),
          ID = "y" === CD ? cD.overflowY : cD.overflowX;
        return "auto" === ID || "scroll" === ID
      },
      xD = (DD, CD, cD) => {
        for (let iD = DD instanceof HTMLElement ? DD : null !== (ID = null === DD || void 0 === DD ? void 0 : DD.parentElement) && void 0 !== ID ? ID : null; iD; iD = iD.parentElement) {
          var ID;
          if (UD(iD, CD)) return iD;
          if (iD === cD) return null
        }
        if (cD) return null;
        const pD = document.scrollingElement;
        return pD instanceof HTMLElement && HD(pD, CD) ? pD : null
      },
      qD = new WeakMap,
      JD = (DD, CD) => {
        const cD = performance.now(),
          ID = qD.get(DD);
        if (ID && ID.axis === CD && cD - ID.atMs < 500 && (!ID.container || ID.container.isConnected)) return ID.container;
        const pD = KD(DD, CD);
        return qD.set(DD, {
          axis: CD,
          atMs: cD,
          container: pD
        }), pD
      },
      KD = (DD, CD) => {
        let cD = UD(DD, CD) ? DD : null,
          ID = cD ? cD.clientWidth * cD.clientHeight : 0;
        for (const pD of DD.querySelectorAll("*")) {
          const DD = pD.clientWidth * pD.clientHeight;
          DD > ID && UD(pD, CD) && (cD = pD, ID = DD)
        }
        return cD
      },
      aD = (DD, CD, cD) => "y" === CD ? cD < 0 ? DD.scrollTop > 0 : DD.scrollTop + DD.clientHeight < DD.scrollHeight - 1 : cD < 0 ? DD.scrollLeft > 0 : DD.scrollLeft + DD.clientWidth < DD.scrollWidth - 1,
      VD = (DD, CD, cD) => {
        "y" === CD ? DD.scrollBy({
          top: cD,
          behavior: "instant"
        }) : DD.scrollBy({
          left: cD,
          behavior: "instant"
        })
      },
      zD = DD => {
        if (!DD || DD === document.scrollingElement) return new DOMRect(0, 0, window.innerWidth, window.innerHeight);
        const CD = DD.getBoundingClientRect(),
          cD = Math.max(0, CD.left),
          ID = Math.max(0, CD.top);
        return new DOMRect(cD, ID, Math.min(window.innerWidth, CD.right) - cD, Math.min(window.innerHeight, CD.bottom) - ID)
      },
      jD = (DD, CD) => DD.left < CD.right && CD.left < DD.right && DD.top < CD.bottom && CD.top < DD.bottom;
    var lD = cD(53),
      LD = cD(1049),
      TD = cD.n(LD),
      GD = cD(1093);
    let RD = 0,
      kD = !1;
    class dD {
      constructor() {
        this.element = null, this.shownKey = "", this.gap = null
      }
      setElement(DD) {
        this.element = DD, this.shownKey = "", this.gap = null
      }
      show(DD) {
        const CD = this.element;
        if (!CD) return;
        const cD = DD ? this.keepOnScreen(CD, DD) : null,
          ID = cD ? `${cD.left},${cD.top},${cD.width},${cD.height}` : "";
        if (ID === this.shownKey) return;
        const pD = "" === this.shownKey;
        this.shownKey = ID, CD.classList.toggle("Visible", null !== cD), cD && (CD.classList.toggle("Snap", pD), CD.style.width = `${cD.width}px`, CD.style.height = `${cD.height}px`, CD.style.transform = `translate(${cD.left}px, ${cD.top}px)`, pD && (CD.offsetWidth, CD.classList.remove("Snap")))
      }
      hide() {
        this.show(null)
      }
      keepOnScreen(DD, CD) {
        var cD;
        const ID = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!kD){kD=!0;const DD=document.createElement("div");DD.setAttribute("aria-hidden","true"),DD.style.cssText="position: fixed; top: 0; left: 0; width: 1rem; height: 0; visibility: hidden; pointer-events: none",document.body.appendChild(DD),new ResizeObserver((()=>{RD++})).observe(DD)}return String(RD)})()}`;
        (null === (cD = this.gap) || void 0 === cD ? void 0 : cD.key) !== ID && (this.gap = {
          px: parseFloat(getComputedStyle(DD).paddingLeft) || 0,
          key: ID
        });
        const pD = this.gap.px + 2,
          iD = Math.max(CD.left, pD),
          fD = Math.max(CD.top, pD),
          bD = Math.min(CD.left + CD.width, window.innerWidth - pD),
          QD = Math.min(CD.top + CD.height, window.innerHeight - pD);
        return bD <= iD || QD <= fD ? CD : {
          left: iD,
          top: fD,
          width: bD - iD,
          height: QD - fD
        }
      }
    }
    const YD = DD => {
      let {
        placer: CD,
        className: cD
      } = DD;
      const ID = (0, lD.useCallback)((DD => {
        CD.setElement(DD)
      }), [CD]);
      return (0, GD.jsx)("div", {
        ref: ID,
        className: TD()("PadReticle", cD),
        "aria-hidden": !0
      })
    };
    var WD = cD(8355),
      sD = cD(1710);
    const ED = DD => DD >= 56320 && DD <= 57343,
      eD = DD => DD >= 55296 && DD <= 56319,
      uD = (DD, CD) => CD >= 2 && ED(DD.charCodeAt(CD - 1)) && eD(DD.charCodeAt(CD - 2)) ? CD - 2 : Math.max(0, CD - 1),
      hD = (DD, CD) => {
        let cD;
        var ID, pD;
        return cD = DD.start !== DD.end ? CD < 0 ? DD.start : DD.end : CD < 0 ? uD(DD.value, DD.start) : (ID = DD.value, (pD = DD.start) + 1 < ID.length && eD(ID.charCodeAt(pD)) && ED(ID.charCodeAt(pD + 1)) ? pD + 2 : Math.min(ID.length, pD + 1)), {
          value: DD.value,
          start: cD,
          end: cD
        }
      },
      rD = ["text", "search", "url", "email", "tel", "password", "number"],
      AD = DD => !(!(0, sD.e)(DD) || DD.isContentEditable || DD.hasAttribute("data-pad-no-osk")) && (DD instanceof HTMLTextAreaElement || DD instanceof HTMLInputElement && rD.includes(DD.type)),
      FD = DD => null !== DD.selectionStart,
      DC = DD => {
        var CD, cD;
        const {
          value: ID
        } = DD;
        return {
          value: ID,
          start: null !== (CD = DD.selectionStart) && void 0 !== CD ? CD : ID.length,
          end: null !== (cD = DD.selectionEnd) && void 0 !== cD ? cD : ID.length
        }
      },
      CC = (DD, CD, cD) => {
        if (DD.readOnly) return;
        const ID = DD instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(ID, "value").set.call(DD, CD.value), FD(DD) && DD.setSelectionRange(CD.start, CD.end), (0, vD.h)(DD, new InputEvent("input", {
          bubbles: !0,
          inputType: cD
        }))
      };
    let cC = !1;
    const IC = (DD, CD) => !!document.execCommand(DD, !1, CD) || (cC || (cC = !0, console.warn(`execCommand("${DD}") failed; the on-screen keyboard is setting the value directly`)), !1),
      pC = (DD, CD) => {
        IC("insertText", CD) || CC(DD, function(DD, CD) {
          let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
          const ID = DD.value.slice(0, DD.start),
            pD = DD.value.slice(DD.end);
          let iD = cD < 0 ? CD.length : Math.max(0, cD - ID.length - pD.length);
          iD > 0 && iD < CD.length && eD(CD.charCodeAt(iD - 1)) && iD--;
          const fD = CD.slice(0, iD),
            bD = ID.length + fD.length;
          return {
            value: ID + fD + pD,
            start: bD,
            end: bD
          }
        }(DC(DD), CD, DD.maxLength), "insertText")
      },
      iC = DD => {
        IC("delete") || CC(DD, (DD => {
          const CD = DD.start === DD.end ? uD(DD.value, DD.start) : DD.start;
          return {
            value: DD.value.slice(0, CD) + DD.value.slice(DD.end),
            start: CD,
            end: CD
          }
        })(DC(DD)), "deleteContentBackward")
      },
      fC = (DD, CD) => {
        if (!FD(DD)) return;
        const cD = hD(DC(DD), CD);
        DD.setSelectionRange(cD.start, cD.end)
      },
      bC = ["button", "a[href]", "input:not([type=hidden])", "textarea", "select", "[role=button]", "[role=tab]", "[role=switch]", "[role=checkbox]", "[role=option]", "[role=menuitem]", "[data-pad-focusable]", "[data-pad-tab]", ".Dropdown-control", ".Dropdown-option"].join(","),
      QC = (DD, CD) => {
        if ("function" === typeof DD.checkVisibility) return !DD.checkVisibility({
          visibilityProperty: !0,
          checkVisibilityCSS: !0,
          opacityProperty: CD,
          checkOpacity: CD
        });
        const {
          visibility: cD
        } = getComputedStyle(DD);
        if ("hidden" === cD || "collapse" === cD) return !0;
        if (!CD) return !1;
        for (let ID = DD; ID; ID = ID.parentElement)
          if ("0" === getComputedStyle(ID).opacity) return !0;
        return !1
      },
      wC = DD => {
        if (!DD.isConnected || QC(DD, !0)) return !1;
        const CD = DD.getBoundingClientRect();
        return CD.width > 0 && CD.height > 0
      },
      SC = DD => !!DD.matches(":disabled, [aria-disabled='true']") || "button" === DD.getAttribute("role") && "-1" === DD.getAttribute("tabindex"),
      BC = DD => {
        var CD;
        if (DD.closest("[data-pad-ignore]")) return !0;
        return !!(null === (CD = DD.parentElement) || void 0 === CD ? void 0 : CD.closest("[data-pad-focusable]"))
      },
      yC = DD => {
        const CD = DD.querySelectorAll(bC);
        return DD.matches(bC) ? [DD, ...CD] : CD
      },
      MC = DD => {
        const CD = [];
        for (const cD of yC(DD)) !BC(cD) && wC(cD) && CD.push(cD);
        return CD
      },
      tC = new WeakMap,
      ZC = DD => {
        const CD = tC.get(DD);
        if (CD && oC(CD, DD)) return !0;
        for (const cD of yC(DD))
          if (!BC(cD) && wC(cD)) return tC.set(DD, cD), !0;
        return tC.delete(DD), !1
      },
      oC = (DD, CD) => CD.contains(DD) && DD.matches(bC) && !BC(DD) && wC(DD),
      vC = (DD, CD) => oC(DD, CD) && !SC(DD),
      NC = DD => {
        const CD = CD => {
          let cD = 0;
          for (let ID = CD.parentElement; ID && ID !== DD; ID = ID.parentElement) cD++;
          return cD
        };
        return [...DD.querySelectorAll("[data-pad-initial-area]")].filter(wC).sort(((DD, cD) => CD(cD) - CD(DD)))
      },
      gC = DD => AD(DD),
      XC = DD => {
        const CD = DD.getBoundingClientRect();
        return {
          x: CD.left + CD.width / 2,
          y: CD.top + CD.height / 2
        }
      },
      mC = (DD, CD, cD) => ({
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window,
        clientX: DD.x,
        clientY: DD.y,
        screenX: DD.x,
        screenY: DD.y,
        button: CD,
        buttons: cD,
        pointerId: 1,
        pointerType: "mouse",
        isPrimary: !0
      }),
      nC = (DD, CD) => {
        (0, vD.h)(DD, CD)
      },
      OC = function(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const ID = 0 === cD ? 1 : 2;
        nC(DD, new PointerEvent("pointerdown", mC(CD, cD, ID))), nC(DD, new MouseEvent("mousedown", mC(CD, cD, ID)))
      },
      PC = function(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        nC(DD, new PointerEvent("pointerup", mC(CD, cD, 0))), nC(DD, new MouseEvent("mouseup", mC(CD, cD, 0)))
      },
      HC = function(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        OC(DD, CD, cD), PC(DD, CD, cD), nC(DD, 0 === cD ? new MouseEvent("click", mC(CD, 0, 0)) : new MouseEvent("contextmenu", mC(CD, 2, 0)))
      },
      UC = function(DD, CD, cD) {
        let {
          leaveBelow: ID = null,
          enterBelow: pD = null
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (DD !== CD) {
          if (null !== DD && void 0 !== DD && DD.isConnected) {
            const pD = {
              ...mC(cD, 0, 0),
              relatedTarget: CD
            };
            nC(DD, new PointerEvent("pointerout", pD)), nC(DD, new MouseEvent("mouseout", pD));
            const iD = DD => !!CD && DD.contains(CD) || !!ID && DD.contains(ID);
            for (let CD = DD; CD && !iD(CD); CD = CD.parentElement) nC(CD, new PointerEvent("pointerleave", {
              ...pD,
              bubbles: !1
            })), nC(CD, new MouseEvent("mouseleave", {
              ...pD,
              bubbles: !1
            }))
          }
          if (CD) {
            const ID = {
              ...mC(cD, 0, 0),
              relatedTarget: DD
            };
            nC(CD, new PointerEvent("pointerover", ID)), nC(CD, new MouseEvent("mouseover", ID));
            const iD = [],
              fD = CD => !(null === DD || void 0 === DD || !DD.isConnected) && CD.contains(DD) || !!pD && CD.contains(pD);
            for (let DD = CD; DD && !fD(DD); DD = DD.parentElement) iD.push(DD);
            for (const DD of iD.reverse()) nC(DD, new PointerEvent("pointerenter", {
              ...ID,
              bubbles: !1
            })), nC(DD, new MouseEvent("mouseenter", {
              ...ID,
              bubbles: !1
            }));
            nC(CD, new PointerEvent("pointermove", mC(cD, 0, 0))), nC(CD, new MouseEvent("mousemove", mC(cD, 0, 0)))
          }
        } else CD && (nC(CD, new PointerEvent("pointermove", mC(cD, 0, 0))), nC(CD, new MouseEvent("mousemove", mC(cD, 0, 0))))
      },
      xC = DD => {
        wD.i.Uo(WD.f, DD)
      },
      qC = DD => {
        if (gC(DD)) return void xC(DD);
        const CD = DD.hasAttribute("data-pad-focusable") ? DD.querySelector("a[href]") : null,
          cD = null !== CD && void 0 !== CD ? CD : DD;
        HC(cD, XC(cD))
      },
      JC = ".Dropdown-root.is-open",
      KC = DD => {
        const CD = DD.querySelector(".Dropdown-control");
        return qC(CD), CD
      },
      aC = DD => {
        var CD;
        const cD = null !== (CD = DD.closest(JC)) && void 0 !== CD ? CD : DD.querySelector(JC);
        return cD ? KC(cD) : null
      },
      VC = DD => {
        for (const CD of document.querySelectorAll(JC)) CD.contains(DD) || KC(CD)
      },
      zC = DD => null !== DD.closest("input[type=color], input[type=file], [data-pad-mouse-only]"),
      jC = DD => {
        const CD = DD ? document.elementFromPoint(DD.x, DD.y) : null;
        return !(null === CD || void 0 === CD || !CD.closest("[data-pad-repeat]"))
      },
      lC = DD => {
        var CD;
        return null !== (CD = [...DD.querySelectorAll("[data-pad-back]")].find(wC)) && void 0 !== CD ? CD : null
      },
      LC = DD => {
        const CD = lC(DD);
        return !!CD && (qC(CD), !0)
      },
      TC = DD => {
        var CD, cD, ID, pD;
        return null !== (CD = null !== (cD = null !== (ID = DD.getAttribute("data-pad-key")) && void 0 !== ID ? ID : DD.getAttribute("href")) && void 0 !== cD ? cD : null === (pD = DD.querySelector("a[href]")) || void 0 === pD ? void 0 : pD.getAttribute("href")) && void 0 !== CD ? CD : null
      },
      GC = {
        x: 0,
        y: 0,
        visible: !1,
        pressed: !1
      };
    const RC = new class {
        constructor() {
          this.state = GC, this.listeners = new Set
        }
        get() {
          return this.state
        }
        set(DD) {
          if (CD = this.state, cD = DD, (CD.visible || cD.visible) && (CD.visible !== cD.visible || CD.x !== cD.x || CD.y !== cD.y || CD.pressed !== cD.pressed)) {
            var CD, cD;
            this.state = DD;
            for (const CD of this.listeners) CD(DD)
          }
        }
        hide() {
          this.set(GC)
        }
        subscribe(DD) {
          return this.listeners.add(DD), () => {
            this.listeners.delete(DD)
          }
        }
      },
      kC = (DD, CD) => {
        let {
          kind: cD,
          holding: ID,
          hasPress: pD,
          hasBack: iD,
          slotHasItem: fD
        } = CD;
        switch (DD) {
          case "primary":
            return "slot" === cD ? "slotPrimary" : "recipe" === cD || "button" === cD ? pD ? "pressPrimary" : "click" : "textField" === cD ? "openKeyboard" : null;
          case "secondary":
            return "slot" === cD ? "slotSecondary" : "button" !== cD && "recipe" !== cD || !pD ? null : "pressSecondary";
          case "quickMove":
            return "slot" === cD && fD ? "slotQuickMove" : null;
          case "hotbarSwap":
            return "slot" === cD && fD && !ID ? "hotbarPick" : null;
          case "openButton":
            return "close";
          case "back":
            return ID ? "cancel" : iD ? "pressBack" : "close"
        }
      },
      dC = DD => {
        const CD = [];
        if (DD.hotbarPicking) return CD.push({
          actions: ["inventoryPrimary", "inventoryHotbarSwap"],
          labelKey: "inventorySwapHere"
        }), CD.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryCancel"
        }), CD;
        if (DD.holding) "slot" === DD.kind ? (CD.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryPlace"
        }), CD.push({
          actions: ["inventorySecondary"],
          labelKey: "inventoryPlaceOne"
        })) : "textField" === DD.kind && CD.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryType"
        }), CD.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryPutBack"
        }), CD.push({
          actions: ["inventoryDrop"],
          labelKey: "inventoryDrop"
        }), DD.openButtonCloses && CD.push({
          actions: ["inventory"],
          labelKey: "inventoryClose"
        });
        else {
          var cD;
          "slot" === DD.kind && DD.slotHasItem ? (CD.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryTake"
          }), CD.push({
            actions: ["inventorySecondary"],
            labelKey: "inventoryTakeHalf"
          }), CD.push({
            actions: ["inventoryQuickMove"],
            labelKey: DD.quickMoveToHotbar ? "inventoryToHotbar" : "inventoryQuickMove"
          }), CD.push({
            actions: ["inventoryHotbarSwap"],
            labelKey: "inventoryHotbarSwap"
          }), CD.push({
            actions: ["inventoryDrop"],
            labelKey: "inventoryDrop"
          })) : "button" !== DD.kind && "recipe" !== DD.kind || !DD.pressHints ? "button" === DD.kind || "recipe" === DD.kind ? CD.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventorySelect"
          }) : "textField" === DD.kind && CD.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryType"
          }) : (DD.pressHints.primary && CD.push({
            actions: ["inventoryPrimary"],
            labelKey: DD.pressHints.primary
          }), DD.pressHints.secondary && CD.push({
            actions: ["inventorySecondary"],
            labelKey: DD.pressHints.secondary
          }));
          const ID = null === (cD = DD.pressHints) || void 0 === cD ? void 0 : cD.back;
          ID && CD.push({
            actions: ["inventoryClose"],
            labelKey: ID
          });
          const pD = [];
          DD.openButtonCloses && pD.push("inventory"), ID || pD.push("inventoryClose"), pD.length > 0 && CD.push({
            actions: pD,
            labelKey: "inventoryClose"
          })
        }
        return CD.push({
          actions: ["inventoryPanelPrevious", "inventoryPanelNext"],
          labelKey: "inventoryPanels"
        }), DD.hasCategories ? CD.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryCategory"
        }) : DD.hasList && CD.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryPage"
        }), CD
      };
    var YC = cD(8363);
    class WC {
      constructor(DD) {
        this.probes = DD, this.byContainer = new Map, this.byParent = new Map
      }
      find(DD, CD) {
        const cD = xD(DD, "y", CD);
        if (!cD) return null;
        let ID = this.byContainer.get(cD);
        return ID || (this.probes.push({
          element: cD,
          rect: uC(cD.getBoundingClientRect())
        }), ID = {
          container: cD,
          box: zD(cD),
          group: eC(cD)
        }, this.byContainer.set(cD, ID)), ID
      }
      findForParent(DD, CD) {
        let cD = this.byParent.get(DD);
        return void 0 === cD && (cD = this.find(DD, CD), this.byParent.set(DD, cD)), cD
      }
    }
    const sC = new WeakMap;
    let EC = 0;
    const eC = DD => {
        let CD = sC.get(DD);
        return CD || (CD = "el:" + EC++, sC.set(DD, CD)), CD
      },
      uC = DD => ({
        left: DD.left,
        top: DD.top,
        width: DD.width,
        height: DD.height
      }),
      hC = DD => DD.width > 0 && DD.height > 0,
      rC = (DD, CD) => hC(DD) && DD.left + DD.width > 0 && DD.top + DD.height > 0 && DD.left < CD.width && DD.top < CD.height,
      AC = (DD, CD, cD) => {
        const ID = DD.top + DD.height / 2;
        return rC(DD, CD) && (!cD || ID >= cD.top && ID <= cD.bottom)
      },
      FC = DD => ({
        x: DD.left + DD.width / 2,
        y: DD.top + DD.height / 2
      }),
      Dc = (DD, CD, cD) => DD < 0 ? cD >= 0 ? 0 : CD - 1 : ((DD + cD) % CD + CD) % CD,
      Cc = DD => "Left" === DD || "Right" === DD,
      cc = (DD, CD, cD) => {
        const ID = Cc(cD),
          pD = ID ? DD.top : DD.left,
          iD = ID ? DD.height : DD.width,
          fD = ID ? CD.top : CD.left,
          bD = ID ? CD.height : CD.width,
          QD = Math.max(0, Math.max(fD - (pD + iD), pD - (fD + bD)));
        return iD > 1.5 * bD ? {
          gap: QD,
          offset: Math.max(0, fD - pD) + .1 * Math.max(0, pD - fD)
        } : {
          gap: QD,
          offset: Math.abs(fD + bD / 2 - (pD + iD / 2))
        }
      },
      Ic = (DD, CD, cD) => {
        const ID = ((DD, CD, cD) => {
          const ID = FC(DD),
            pD = FC(CD),
            iD = Cc(cD) ? Math.min(DD.width, CD.width) / 4 : Math.min(DD.height, CD.height) / 4;
          switch (cD) {
            case "Right":
              return pD.x - ID.x >= iD ? Math.max(0, CD.left - (DD.left + DD.width)) : null;
            case "Left":
              return ID.x - pD.x >= iD ? Math.max(0, DD.left - (CD.left + CD.width)) : null;
            case "Down":
              return pD.y - ID.y >= iD ? Math.max(0, CD.top - (DD.top + DD.height)) : null;
            case "Up":
              return ID.y - pD.y >= iD ? Math.max(0, DD.top - (CD.top + CD.height)) : null
          }
        })(DD, CD, cD);
        if (null === ID) return null;
        const pD = cc(DD, CD, cD);
        return ID + 3 * pD.gap + .5 * pD.offset
      },
      pc = (DD, CD) => CD.visible || null !== CD.scrollGroup && CD.scrollGroup === DD.scrollGroup,
      ic = (DD, CD, cD, ID) => {
        let pD = null,
          iD = 1 / 0;
        for (const fD of CD) {
          if (fD.key === DD.key || !pc(DD, fD) || !ID(fD)) continue;
          const CD = Ic(DD.rect, fD.rect, cD);
          null !== CD && CD < iD && (pD = fD, iD = CD)
        }
        return pD
      },
      fc = (DD, CD, cD) => {
        const ID = ic(DD, CD, cD, (() => !0));
        if (!ID || Cc(cD) || null === DD.scrollGroup || ID.scrollGroup === DD.scrollGroup) return ID;
        const pD = ic(DD, CD, cD, (CD => 0 === cc(DD.rect, CD.rect, cD).gap));
        return null !== pD && void 0 !== pD ? pD : ID
      },
      bc = (DD, CD, cD) => {
        let ID = null,
          pD = 1 / 0;
        for (const iD of CD) {
          if (!iD.visible || cD && !cD(iD)) continue;
          const CD = FC(iD.rect),
            fD = Math.hypot(CD.x - DD.x, CD.y - DD.y);
          fD < pD && (ID = iD, pD = fD)
        }
        return ID
      },
      Qc = DD => {
        const {
          rect: CD,
          clip: cD
        } = DD;
        if (!cD) return CD;
        const ID = Math.max(CD.left, cD.left),
          pD = Math.max(CD.top, cD.top);
        return {
          left: ID,
          top: pD,
          width: Math.min(CD.left + CD.width, cD.left + cD.width) - ID,
          height: Math.min(CD.top + CD.height, cD.top + cD.height) - pD
        }
      },
      wc = (DD, CD) => CD.x >= DD.left && CD.x < DD.left + DD.width && CD.y >= DD.top && CD.y < DD.top + DD.height,
      Sc = (DD, CD) => {
        let cD = null,
          ID = 1 / 0;
        for (const pD of CD) {
          const CD = Qc(pD);
          (pD.visible || pD.clip) && wc(CD, DD) && (CD.width * CD.height < ID && (cD = pD, ID = CD.width * CD.height))
        }
        return cD
      },
      Bc = DD => {
        let CD = null;
        for (const cD of DD) {
          if (!cD.visible) continue;
          if (!CD) {
            CD = cD;
            continue
          }
          const DD = Math.min(CD.rect.height, cD.rect.height) / 2,
            ID = cD.rect.top - CD.rect.top;
          (ID < -DD || Math.abs(ID) <= DD && cD.rect.left < CD.rect.left) && (CD = cD)
        }
        return CD
      },
      yc = (DD, CD, cD, ID, pD) => {
        const iD = pD % CD,
          fD = Math.floor(pD / CD);
        return {
          left: DD.left + iD * cD,
          top: DD.top + fD * ID,
          width: DD.width,
          height: DD.height
        }
      },
      Mc = ".EntireInventoryWrapper .Inventory, .HotBarGameItemsContainer",
      tc = ".LazyLoadedItemWrapper",
      Zc = ["[data-inven-idx]", "[data-recipe-key]", "[role=button]", "button", "input:not([type=hidden])", "textarea", ".CreativeCategoryTab", ".CreativeCategoryDropdownButton", ".CreativeCategoryDropdownOption", "[data-craft-ingredient]"].join(","),
      oc = [
        ["hotbar", ".HotBarGameItemsContainer"],
        ["gameButtons", ".ClientGameInventoryButtons"],
        ["categories", ".CreativeCategoryRail"],
        ["recipe", ".CraftableInfo"],
        ["armour", ".ArmourItemSlots"],
        ["main", ".InvenBodyRight"],
        ["left", ".InvenLeftSide"]
      ],
      vc = ["gameButtons", "categories", "left", "recipe", "armour", "main", "hotbar"],
      Nc = DD => DD.hasAttribute("data-inven-idx") ? "slot" : DD.hasAttribute("data-recipe-key") ? "recipe" : DD.hasAttribute("data-craft-ingredient") || SC(DD) ? "info" : gC(DD) ? "textField" : "button",
      gc = (DD, CD) => "slot" === CD ? Number(DD.getAttribute("data-inven-idx")) : null,
      Xc = DD => DD.matches(tc) ? DD.querySelector(Zc) : DD,
      mc = DD => {
        var CD, cD;
        return {
          element: DD,
          recipe: null !== (CD = DD && (null === (cD = Xc(DD)) || void 0 === cD ? void 0 : cD.getAttribute("data-recipe-key"))) && void 0 !== CD ? CD : null
        }
      },
      nc = DD => {
        const CD = Xc(DD);
        if (!CD) return {
          kind: "pending",
          idx: null
        };
        const cD = Nc(CD);
        return {
          kind: cD,
          idx: gc(CD, cD)
        }
      },
      Oc = DD => {
        const CD = [];
        for (const [cD, ID] of oc) {
          DD.matches(ID) && CD.push([cD, DD]);
          for (const pD of DD.querySelectorAll(ID)) CD.push([cD, pD])
        }
        return CD
      },
      Pc = (DD, CD) => {
        for (const [cD, ID] of DD)
          if (ID.contains(CD)) return cD;
        return "other"
      },
      Hc = (DD, CD, cD, ID, pD, iD, fD, bD) => {
        var QD;
        const wD = DD.children,
          SD = uC(wD[0].getBoundingClientRect()),
          BD = [{
            element: wD[0],
            rect: SD
          }];
        if (iD.push(BD[0]), 0 === SD.width || 0 === SD.height) return;
        let yD = 1;
        for (; yD < wD.length && Math.abs(wD[yD].getBoundingClientRect().top - SD.top) < 1;) yD++;
        const MD = DD => {
            const CD = {
              element: wD[DD],
              rect: uC(wD[DD].getBoundingClientRect())
            };
            return iD.push(CD), BD.push(CD), CD.rect
          },
          tD = yD > 1 ? MD(1).left - SD.left : SD.width,
          ZD = wD.length > yD ? MD(yD).top - SD.top : SD.height,
          oD = fD.find(DD, CD);
        let vD = null;
        if (oD) {
          var ND;
          const {
            container: DD,
            box: CD
          } = oD;
          vD = null !== (ND = bD.get(DD)) && void 0 !== ND ? ND : null, vD || (vD = {
            top: DD.scrollTop,
            left: DD.scrollLeft,
            box: CD,
            viewport: ID,
            targets: [],
            probes: [],
            holdsOthers: !1
          }, bD.set(DD, vD)), vD.probes.push(...BD)
        }
        const gD = pD.length;
        for (let OD = 0; OD < wD.length; OD++) {
          var XD, mD, nD;
          const DD = wD[OD],
            CD = yc(SD, yD, tD, ZD, OD),
            iD = DD.firstElementChild ? DD.querySelector(Zc) : null,
            fD = iD ? Nc(iD) : "pending";
          pD.push({
            key: eC(DD),
            rect: CD,
            panel: cD,
            scrollGroup: null !== (XD = null === oD || void 0 === oD ? void 0 : oD.group) && void 0 !== XD ? XD : null,
            visible: AC(CD, ID, null === oD || void 0 === oD ? void 0 : oD.box),
            clip: null !== (mD = null === oD || void 0 === oD ? void 0 : oD.box) && void 0 !== mD ? mD : null,
            element: DD,
            kind: fD,
            idx: iD ? gc(iD, fD) : null,
            scrollContainer: null !== (nD = null === oD || void 0 === oD ? void 0 : oD.container) && void 0 !== nD ? nD : null
          })
        }
        null === (QD = vD) || void 0 === QD || QD.targets.push(...pD.slice(gD))
      },
      Uc = DD => DD instanceof Element && null !== DD.closest(tc),
      xc = DD => null !== DD.scrollContainer && Uc(DD.element);
    class qc {
      constructor() {
        this.latched = null, this.presses = 0
      }
      press(DD, CD, cD, ID) {
        this.latched = {
          source: DD,
          focusKey: CD,
          sinceMs: cD,
          hold: {
            id: ++this.presses,
            holdMs: ID
          }
        }
      }
      update(DD, CD, cD) {
        const ID = this.latched;
        return ID ? DD && CD === ID.focusKey ? cD - ID.sinceMs < ID.hold.holdMs ? null : (this.latched = null, ID.source) : (this.latched = null, null) : null
      }
      getHold() {
        var DD, CD;
        return null !== (DD = null === (CD = this.latched) || void 0 === CD ? void 0 : CD.hold) && void 0 !== DD ? DD : null
      }
      reset() {
        this.latched = null
      }
    }
    var Jc = cD(8369);
    const Kc = {
        kind: "none"
      },
      ac = DD => ({
        x: DD.clientX,
        y: DD.clientY
      }),
      Vc = () => 2 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
    class zc {
      constructor() {
        this.hovered = Kc, this.signature = "", this.holding = !1, this.lastPoint = {
          clientX: 0,
          clientY: 0
        }
      }
      sync(DD, CD, cD, ID, pD) {
        const iD = null !== CD ? {
            kind: "slot",
            idx: CD
          } : cD ? {
            kind: "element",
            element: cD
          } : Kc,
          fD = `${pD}|${Math.round(ID.clientX)},${Math.round(ID.clientY)}`,
          bD = (QD = this.hovered, wD = iD, "slot" === QD.kind && "slot" === wD.kind ? QD.idx === wD.idx : "element" === QD.kind && "element" === wD.kind ? QD.element === wD.element : QD.kind === wD.kind);
        var QD, wD;
        if (bD && fD === this.signature) return;
        const SD = !bD || pD !== this.holding || "" === this.signature;
        this.signature = fD, this.holding = pD, this.lastPoint = ID;
        const BD = this.hovered;
        if (this.hovered = iD, "slot" === iD.kind) return this.leaveElement(BD, null, ID), void(SD ? DD.hover(iD.idx, ID) : DD.moveTo(ID));
        if (bD) return void("element" === iD.kind ? UC(iD.element, iD.element, ac(ID)) : DD.hover(null, ID));
        DD.hover(null, ID);
        const yD = "element" === iD.kind ? iD.element : null;
        "element" === BD.kind ? UC(BD.element, yD, ac(ID)) : yD && UC(null, yD, ac(ID))
      }
      invalidate() {
        this.signature = ""
      }
      clear(DD) {
        const CD = this.hovered;
        this.hovered = Kc, this.signature = "", "none" !== CD.kind && (this.leaveElement(CD, null, this.lastPoint), DD && "slot" === CD.kind && DD.hover(null, this.lastPoint))
      }
      leaveElement(DD, CD, cD) {
        "element" === DD.kind && UC(DD.element, CD, ac(cD))
      }
    }
    class jc {
      constructor() {
        this.lastTiltedMs = -1 / 0
      }
      update(DD, CD) {
        OD(DD) && (this.lastTiltedMs = CD)
      }
      allowsClick(DD) {
        return DD - this.lastTiltedMs > 150
      }
    }
    class lc {
      constructor() {
        this.remainder = 0, this.container = null
      }
      isScrolling(DD) {
        return 0 !== (0, tD.i)(DD, .2).y
      }
      step(DD, CD, cD) {
        DD !== this.container && (this.container = DD, this.remainder = 0);
        const ID = PD(CD, cD).y;
        if (0 === ID) return this.remainder = 0, !1;
        const pD = this.remainder + ID,
          iD = Math.trunc(pD);
        if (this.remainder = pD - iD, 0 === iD) return !1;
        const fD = DD.scrollTop;
        return DD.scrollTop = fD + iD, DD.scrollTop !== fD
      }
      current() {
        var DD;
        return null !== (DD = this.container) && void 0 !== DD && DD.isConnected ? this.container : null
      }
      reset() {
        this.remainder = 0, this.container = null
      }
    }
    var Lc = cD(8372);
    const Tc = "[data-pad-inventory-default]",
      Gc = ".HotBarGameItemsContainer .InvenItem.Selected",
      Rc = {
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
      kc = [
        ["primary", "inventoryPrimary"],
        ["secondary", "inventorySecondary"],
        ["quickMove", "inventoryQuickMove"],
        ["hotbarSwap", "inventoryHotbarSwap"],
        ["back", "inventoryClose"],
        ["openButton", "inventory"]
      ],
      dc = ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryHotbarSwap", "inventoryClose", "inventoryDrop"],
      Yc = ["inventoryPanelPrevious", "inventoryPanelNext", "menuPageUp", "menuPageDown"],
      Wc = [...dc, ...Yc],
      sc = () => {
        return DD = (0, SD.h)("inventory"), !Wc.map(SD.h).includes(DD) && !(0, tD.C)(DD);
        var DD
      },
      Ec = new Set(["slotPrimary", "slotSecondary", "slotQuickMove", "pressPrimary", "pressSecondary", "openKeyboard"]),
      ec = (DD, CD) => {
        const cD = !(null === CD || void 0 === CD || !CD.isHolding());
        return function(DD, CD) {
          const cD = DD.find((DD => DD.visible && CD(DD)));
          if (cD) return cD;
          for (var ID = arguments.length, pD = new Array(ID > 2 ? ID - 2 : 0), iD = 2; iD < ID; iD++) pD[iD - 2] = arguments[iD];
          for (const fD of pD) {
            const CD = Bc(DD.filter(fD));
            if (CD) return CD
          }
          return Bc(DD)
        }(DD, (DD => {
          const {
            element: CD
          } = DD;
          return CD.matches(Tc) || null !== CD.querySelector(Tc) || CD.matches(Gc)
        }), (DD => "slot" === DD.kind ? cD || null !== DD.idx && !(null === CD || void 0 === CD || !CD.hasItemAt(DD.idx)) : "recipe" === DD.kind || "pending" === DD.kind), (DD => "slot" === DD.kind || "button" === DD.kind))
      };
    class uc {
      constructor() {
        this.set = null, this.observer = new MutationObserver((DD => {
          DD.some((DD => !Uc(DD.target))) && (this.set = null)
        })), this.invalidate = () => {
          this.set = null
        }, this.onScroll = DD => {
          this.scrolled(DD.target)
        }
      }
      get() {
        if (!this.set) {
          this.set = (() => {
            const DD = [],
              CD = [];
            let cD = !1;
            const ID = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              pD = new Map,
              iD = new WC(CD);
            for (const BD of document.querySelectorAll(Mc)) {
              const SD = Oc(BD);
              cD ||= null !== BD.querySelector(".CreativeCategoryTab");
              for (const cD of BD.querySelectorAll(`${tc}:first-child`)) {
                const fD = cD.parentElement;
                Hc(fD, BD, Pc(SD, fD), ID, DD, CD, iD, pD)
              }
              for (const cD of BD.querySelectorAll(Zc)) {
                var fD, bD, QD, wD;
                if (cD.closest(tc) || cD.closest("[data-pad-ignore]")) continue;
                const yD = null === (fD = cD.parentElement) || void 0 === fD ? void 0 : fD.closest(Zc);
                if (yD && BD.contains(yD)) continue;
                const MD = Nc(cD),
                  tD = gc(cD, MD);
                if (-1 === tD) continue;
                const ZD = uC(cD.getBoundingClientRect());
                CD.push({
                  element: cD,
                  rect: ZD
                });
                const oD = iD.findForParent(cD.parentElement, BD),
                  vD = oD && !pD.has(oD.container) ? oD : null;
                (vD ? hC(ZD) : rC(ZD, ID)) && DD.push({
                  key: eC(cD),
                  rect: ZD,
                  panel: Pc(SD, cD),
                  scrollGroup: null !== (bD = null === vD || void 0 === vD ? void 0 : vD.group) && void 0 !== bD ? bD : null,
                  visible: AC(ZD, ID, null === vD || void 0 === vD ? void 0 : vD.box),
                  clip: null !== (QD = null === vD || void 0 === vD ? void 0 : vD.box) && void 0 !== QD ? QD : null,
                  element: cD,
                  kind: MD,
                  idx: tD,
                  scrollContainer: null !== (wD = null === vD || void 0 === vD ? void 0 : vD.container) && void 0 !== wD ? wD : null
                })
              }
            }
            for (const [BD, yD] of pD) yD.holdsOthers = CD.some((DD => DD.element !== BD && BD.contains(DD.element) && !DD.element.closest(tc)));
            const SD = new Map;
            for (const BD of DD) SD.set(BD.element, BD);
            return {
              targets: DD,
              byElement: SD,
              hasCategories: cD,
              probes: CD,
              scrollers: pD
            }
          })(), this.observer.disconnect();
          for (const DD of document.querySelectorAll(Mc)) this.observer.observe(DD, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "disabled", "aria-disabled", "tabindex", "data-inven-idx"]
          })
        }
        return this.set
      }
      scrolled(DD) {
        !this.set || DD instanceof Element && ((DD, CD) => {
          const cD = DD.scrollers.get(CD);
          if (!cD || cD.holdsOthers || CD.scrollLeft !== cD.left) return !1;
          const ID = CD.scrollTop - cD.top;
          if (0 === ID) return !0;
          cD.top = CD.scrollTop;
          for (const pD of cD.probes) pD.rect.top -= ID;
          for (const pD of cD.targets) pD.rect.top -= ID, pD.visible = AC(pD.rect, cD.viewport, cD.box);
          return !0
        })(this.set, DD) || (this.set = null)
      }
      revalidate() {
        this.set && this.set.probes.some((DD => {
          return CD = DD.rect, cD = DD.element.getBoundingClientRect(), !(CD.left === cD.left && CD.top === cD.top && CD.width === cD.width && CD.height === cD.height);
          var CD, cD
        })) && (this.set = null)
      }
      disconnect() {
        this.observer.disconnect(), this.set = null
      }
    }
    const hc = new class {
        constructor() {
          this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(tD.x.map((DD => [DD, (0, ZD.b)(tD.z)]))), this.stickRepeat = new tD.b((0, ZD.b)(tD.bb)), this.pageUpTimer = (0, ZD.b)(tD.X), this.pageDownTimer = (0, ZD.b)(tD.X), this.stickGate = new mD, this.pointer = null, this.activePress = null, this.dropLatch = new qc, this.scroller = new lc, this.scrollStickClick = new jc, this.hover = new zc, this.lastRealPointer = null, this.placeAfterCategory = null, this.hotbarPick = null, this.ring = new dD, this.targets = new uc, this.hasCategories = !1, this.wasShowing = !1, this.state = Jc.c, this.isActive = () => (0, YC.h)(), this.isShowing = () => "inventory" === BD.d.getActiveConsumerName() && (0, MD.i)(), this.getState = () => this.state, this.isSteppingSlots = () => this.isShowing() && null === this.pointer, this.onDeactivate = () => {
            this.endInteraction((0, YC.g)()), (0, YC.h)() || this.forgetSurface()
          }, this.forgetSurface = () => {
            var DD;
            this.reopenSlotIdx = null !== (DD = this.focused ? nc(this.focused).idx : null) && void 0 !== DD ? DD : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, YC.r)(), this.panelMemory.clear(), this.targets.disconnect()
          }, this.onFrame = DD => {
            (0, bD.unstable_batchedUpdates)((() => {
              this.frame(DD)
            }))
          }, this.shouldBlockRealPointer = DD => DD.isTrusted && !(0, vD.t)(DD) && this.isShowing(), this.noteRealPointer = DD => {
            DD instanceof MouseEvent && DD.isTrusted && !(0, vD.t)(DD) && (this.lastRealPointer ??= {
              x: 0,
              y: 0
            }, this.lastRealPointer.x = DD.clientX, this.lastRealPointer.y = DD.clientY)
          }, this.wakePressActs = DD => {
            var CD;
            return DD === (0, SD.h)("inventoryClose") ? !(null !== (CD = (0, YC.g)()) && void 0 !== CD && CD.isHolding()) : !(DD !== (0, SD.h)("inventory") || !sc()) || ((0, tD.C)(DD) ? this.isNavButton(DD) : Yc.some((CD => (0, SD.h)(CD) === DD)))
          }
        }
        frame(DD) {
          var CD, cD, ID, pD, iD;
          const fD = (0, YC.g)();
          if (!(0, MD.i)()) return void(this.wasShowing && (this.endInteraction(fD), this.rehoverRealPointer()));
          this.wasShowing = !0, this.applyFocusRequest(), DD.wokeDevice && this.focusWakePointer(!(null === fD || void 0 === fD || !fD.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, yD.h)().inventoryNavigation || this.pointer || this.engagePointer();
          const bD = performance.now();
          this.handleNavigation(DD, bD), this.handlePanels(DD), this.handlePaging(DD, bD), this.handleScroll(DD), this.handleButtons(DD, bD, fD), this.applyFocusRequest(), this.pointer && this.hoverAtPointer();
          const QD = this.ensureFocus(),
            wD = this.focusContext(fD);
          this.ring.show(QD);
          const BD = "slot" === wD.kind ? wD.idx : null,
            tD = null !== (CD = null === (cD = wD.actionElement) || void 0 === cD ? void 0 : cD.querySelector(".DoCraftItem")) && void 0 !== CD ? CD : wD.actionElement;
          this.pointer ? (this.hover.sync(fD, BD, tD, ((DD, CD) => {
            const cD = CD ? Vc() : 0;
            return {
              clientX: DD.x - cD,
              clientY: DD.y - cD
            }
          })(this.pointer, wD.holding), wD.holding), RC.set({
            x: this.pointer.x,
            y: this.pointer.y,
            visible: !0,
            pressed: DD.isHeld((0, SD.h)("inventoryPrimary"))
          })) : QD && this.focused && this.hover.sync(fD, BD, tD, ((DD, CD) => {
            if (!CD) return {
              clientX: DD.left + DD.width - 10,
              clientY: DD.top + DD.height / 2 - 10
            };
            const cD = Vc();
            return {
              clientX: DD.left + DD.width / 2 - cD,
              clientY: DD.top + DD.height / 2 - cD
            }
          })(QD, wD.holding), wD.holding), this.publishState({
            showing: !0,
            kind: wD.kind,
            holding: wD.holding,
            slotHasItem: wD.slotHasItem,
            pressHints: null !== (ID = null === (pD = wD.press) || void 0 === pD ? void 0 : pD.hints) && void 0 !== ID ? ID : null,
            hasCategories: this.hasCategories,
            hasList: !!this.focusTarget && xc(this.focusTarget),
            openButtonCloses: sc(),
            steppingSlots: null === this.pointer,
            quickMoveToHotbar: "slot" === wD.kind && !(null === (iD = wD.actionElement) || void 0 === iD || !iD.closest(".CreativeItemSlots")),
            dropStackHold: this.dropLatch.getHold(),
            hotbarPicking: null !== this.hotbarPick
          })
        }
        focusWakePointer(DD) {
          var CD;
          const cD = (0, MD.c)();
          if (!cD) return;
          this.targets.revalidate();
          const ID = this.getTargets().targets;
          this.setFocus(null !== (CD = Sc(cD, ID)) && void 0 !== CD ? CD : DD ? bc(cD, ID, (DD => {
            let {
              rect: CD
            } = DD;
            const ID = Math.max(CD.left - cD.x, 0, cD.x - (CD.left + CD.width)),
              pD = Math.max(CD.top - cD.y, 0, cD.y - (CD.top + CD.height));
            return Math.hypot(ID, pD) <= Math.min(CD.width, CD.height) / 2
          })) : null, !1), "cursor" === (0, yD.h)().inventoryNavigation && (this.pointer = {
            x: cD.x,
            y: cD.y,
            speedRamp: 0
          })
        }
        rehoverRealPointer() {
          const DD = this.lastRealPointer;
          if (!DD || "keyboardMouse" !== QD.d.get("activeInputDevice")) return;
          const CD = document.elementFromPoint(DD.x, DD.y);
          CD && UC(null, CD, DD)
        }
        endInteraction(DD) {
          this.wasShowing = !1, this.hotbarPick = null, this.releasePress(), this.dropLatch.reset(), this.scroller.reset();
          for (const CD of this.dpadTimers.values()) CD.reset();
          this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(DD), this.ring.hide(), this.releasePointer(), this.publishState(Jc.c)
        }
        getTargets() {
          const DD = this.targets.get();
          return this.hasCategories = DD.hasCategories, DD
        }
        currentTarget() {
          var DD;
          return this.focused && null !== (DD = this.getTargets().byElement.get(this.focused)) && void 0 !== DD ? DD : null
        }
        readFocusRect() {
          const DD = this.focused;
          if (null === DD || void 0 === DD || !DD.isConnected || !DD.closest(Mc)) return null;
          const CD = DD.getBoundingClientRect();
          return CD.width > 0 && CD.height > 0 ? {
            left: CD.left,
            top: CD.top,
            width: CD.width,
            height: CD.height
          } : null
        }
        ensureFocus() {
          const DD = this.readFocusRect();
          if (DD || this.pointer) return DD;
          const {
            targets: CD,
            byElement: cD
          } = this.getTargets();
          let ID = null,
            pD = !1;
          if (this.lastRect) ID = bc(FC(this.lastRect), CD);
          else {
            var iD, fD;
            const DD = ((DD, CD) => {
                const cD = document.querySelector(".EntireInventoryWrapper [data-pad-inventory-start]");
                return cD ? ec(DD.filter((DD => cD.contains(DD.element))), CD) : null
              })(CD, (0, YC.g)()),
              bD = CD.find((DD => null !== DD.idx && DD.idx === this.reopenSlotIdx)),
              QD = document.querySelector(Gc);
            pD = null !== DD || void 0 !== bD, ID = null !== (iD = null !== (fD = null !== DD && void 0 !== DD ? DD : bD) && void 0 !== fD ? fD : QD && cD.get(QD)) && void 0 !== iD ? iD : Bc(CD)
          }
          return this.setFocus(ID, pD), this.lastRect
        }
        setFocus(DD) {
          let CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          DD && (this.focused = DD.element, this.focusTarget = DD, this.panelMemory.set(DD.panel, DD.element), CD && DD.scrollContainer && ((DD, CD) => {
            const cD = DD.getBoundingClientRect(),
              ID = zD(CD),
              pD = CD.scrollTop;
            return cD.top < ID.top ? CD.scrollTop -= ID.top - cD.top : cD.bottom > ID.bottom && (CD.scrollTop += cD.bottom - ID.bottom), CD.scrollTop !== pD
          })(DD.element, DD.scrollContainer) && this.targets.invalidate(), this.lastRect = this.readFocusRect(), this.followFocusJump())
        }
        followFocusJump() {
          if (this.pointer)
            if ("cursor" === (0, yD.h)().inventoryNavigation) {
              if (this.lastRect) {
                const DD = FC(this.lastRect);
                this.pointer = {
                  x: DD.x,
                  y: DD.y,
                  speedRamp: 0
                }
              }
            } else this.releasePointer()
        }
        engagePointer() {
          const DD = this.lastRect ? FC(this.lastRect) : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          };
          this.pointer = {
            x: DD.x,
            y: DD.y,
            speedRamp: 0
          }
        }
        releasePointer() {
          this.pointer = null, RC.hide()
        }
        hoverAtPointer() {
          var DD;
          const CD = Sc(this.pointer, this.getTargets().targets);
          this.focusTarget = CD, (null === CD || void 0 === CD ? void 0 : CD.element) !== this.focused && (this.focused = null !== (DD = null === CD || void 0 === CD ? void 0 : CD.element) && void 0 !== DD ? DD : null, CD && (this.panelMemory.set(CD.panel, CD.element), this.lastRect = this.readFocusRect()))
        }
        moveCursor(DD, CD) {
          const cD = this.focusTarget,
            ID = cD && (0, yD.h)().cursorMagnetism ? FC(Qc(cD)) : null;
          this.pointer = nD(this.pointer, {
            stick: DD.leftStick,
            moveDeadzone: (0, yD.h)().moveDeadzone,
            dpad: CD,
            dtMs: DD.dtMs,
            cursorSpeedPercent: (0, yD.h)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: {
              overInteractive: !1,
              magnetTarget: ID
            }
          })
        }
        move(DD) {
          this.targets.revalidate();
          const CD = this.currentTarget();
          CD && this.setFocus(fc(CD, this.getTargets().targets, DD))
        }
        step(DD) {
          const CD = this.pointer;
          if (CD && (this.releasePointer(), !this.focused)) return this.targets.revalidate(), void this.setFocus(((DD, CD, cD) => {
            var ID;
            const pD = {
              key: "",
              rect: {
                left: DD.x,
                top: DD.y,
                width: 0,
                height: 0
              },
              panel: "",
              scrollGroup: null,
              visible: !0,
              clip: null
            };
            return null !== (ID = fc(pD, CD, cD)) && void 0 !== ID ? ID : bc(DD, CD)
          })(CD, this.getTargets().targets, DD));
          this.move(DD)
        }
        isNavButton(DD) {
          return !dc.some((CD => (0, SD.h)(CD) === DD)) && !(DD === (0, SD.h)("inventory") && sc())
        }
        handleNavigation(DD, CD) {
          const cD = (0, yD.h)().inventoryNavigation,
            ID = {
              x: 0,
              y: 0
            };
          let pD = null;
          for (const QD of tD.x) {
            const iD = this.isNavButton(QD) && DD.isHeld(QD);
            iD && (ID.x += Rc[QD].x, ID.y += Rc[QD].y), this.dpadTimers.get(QD).update(iD, CD) && "cursor" !== cD && (pD ??= QD)
          }
          const iD = this.stickGate.update(DD.leftStick, (0, yD.h)().moveDeadzone);
          if (pD && (this.step(pD), this.stickGate.lock()), "slot" !== cD) {
            const CD = ((DD, CD, cD, ID) => "hybrid" !== DD ? "cursor" === DD : !ID && (CD || cD))(cD, null !== this.pointer, iD, null !== pD);
            return CD && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(DD, "cursor" === cD ? ID : {
              x: 0,
              y: 0
            }))
          }
          const fD = (0, tD.i)(DD.leftStick, (0, yD.h)().moveDeadzone),
            bD = this.stickRepeat.update(iD ? (0, tD.db)(fD) : null, CD);
          bD && this.move(bD)
        }
        applyCategoryPlace() {
          const DD = this.placeAfterCategory;
          if (!DD) return;
          this.placeAfterCategory = null, this.targets.invalidate();
          const CD = bc(FC(DD.rect), this.getTargets().targets, (CD => CD.scrollGroup === DD.scrollGroup));
          this.setFocus(CD, !1)
        }
        applyFocusRequest() {
          const DD = (0, YC.r)();
          DD && (this.targets.invalidate(), this.setFocus((0, YC.c)(this.getTargets().targets, DD)))
        }
        handlePanels(DD) {
          var CD, cD, ID;
          const pD = DD.wasPressed((0, SD.h)("inventoryPanelPrevious")),
            iD = DD.wasPressed((0, SD.h)("inventoryPanelNext"));
          if (!pD && !iD) return;
          const {
            targets: fD
          } = this.getTargets(), bD = (QD = ((DD, CD) => {
            const cD = [];
            for (const pD of DD) pD.visible && !cD.includes(pD.panel) && cD.push(pD.panel);
            const ID = DD => {
              const ID = CD.indexOf(DD);
              return -1 === ID ? CD.length + cD.indexOf(DD) : ID
            };
            return cD.sort(((DD, CD) => ID(DD) - ID(CD)))
          })(fD, vc), wD = null !== (CD = null === (cD = this.focusTarget) || void 0 === cD ? void 0 : cD.panel) && void 0 !== CD ? CD : null, BD = iD ? 1 : -1, 0 === QD.length ? null : QD[Dc(null === wD ? -1 : QD.indexOf(wD), QD.length, BD)]);
          var QD, wD, BD;
          if (null === bD) return;
          const yD = this.panelMemory.get(bD),
            MD = fD.filter((DD => DD.panel === bD)),
            tD = null !== (ID = MD.find((DD => DD.element === yD && DD.visible))) && void 0 !== ID ? ID : ec(MD, (0, YC.g)());
          this.setFocus(tD)
        }
        handlePaging(DD, CD) {
          const cD = (0, SD.h)("menuPageUp"),
            ID = (0, SD.h)("menuPageDown"),
            pD = this.pageUpTimer.update(DD.isHeld(cD), CD),
            iD = this.pageDownTimer.update(DD.isHeld(ID), CD);
          if (!pD && !iD) return;
          const fD = iD ? 1 : -1;
          if (!DD.wasPressed(iD ? ID : cD) && this.hasCategories) return;
          if ((DD => {
              const CD = Array.from(document.querySelectorAll(".EntireInventoryWrapper .CreativeCategoryTab"));
              if (0 === CD.length) return !1;
              const cD = CD.findIndex((DD => DD.classList.contains("Selected"))),
                ID = CD[Dc(cD, CD.length, DD)];
              return HC(ID, XC(ID)), !0
            })(fD)) {
            var bD, QD;
            this.targets.invalidate();
            const DD = null !== (bD = null === (QD = this.focusTarget) || void 0 === QD ? void 0 : QD.scrollGroup) && void 0 !== bD ? bD : null,
              CD = this.readFocusRect();
            return void(this.placeAfterCategory = null !== DD && CD && !this.pointer ? {
              rect: CD,
              scrollGroup: DD
            } : null)
          }
          const {
            targets: wD
          } = this.getTargets(), BD = this.currentTarget(), yD = BD && xc(BD) ? BD : wD.find((DD => xc(DD) && DD.visible));
          if (!yD) return;
          const MD = ((DD, CD, cD, ID) => {
            if (null === DD.scrollGroup) return null;
            const pD = FC(DD.rect),
              iD = pD.x,
              fD = pD.y + ("Down" === cD ? ID : -ID);
            let bD = null,
              QD = 1 / 0;
            for (const wD of CD) {
              if (wD.scrollGroup !== DD.scrollGroup || wD.key === DD.key) continue;
              const CD = FC(wD.rect);
              if ("Down" === cD ? CD.y <= pD.y : CD.y >= pD.y) continue;
              const ID = Math.hypot(CD.x - iD, CD.y - fD);
              ID < QD && (bD = wD, QD = ID)
            }
            return bD
          })(yD, wD, fD > 0 ? "Down" : "Up", yD.scrollContainer.clientHeight);
          this.setFocus(null !== MD && void 0 !== MD ? MD : yD)
        }
        handleScroll(DD) {
          var CD, cD, ID, pD, iD, fD;
          if (!this.scroller.isScrolling(DD.rightStick)) return void this.scroller.reset();
          const {
            targets: bD
          } = this.getTargets(), QD = this.pointer, wD = !QD && this.focusTarget && xc(this.focusTarget) ? this.focusTarget.scrollContainer : null, SD = QD && (null === (CD = bD.find((DD => DD.clip && wc(DD.clip, QD)))) || void 0 === CD ? void 0 : CD.scrollContainer), BD = null !== (cD = null !== (ID = null !== (pD = this.scroller.current()) && void 0 !== pD ? pD : SD) && void 0 !== ID ? ID : wD) && void 0 !== cD ? cD : null === (iD = bD.find(xc)) || void 0 === iD ? void 0 : iD.scrollContainer;
          if (!BD || !this.scroller.step(BD, DD.rightStick, DD.dtMs)) return;
          this.targets.scrolled(BD);
          const yD = QD || (null === (fD = this.focusTarget) || void 0 === fD ? void 0 : fD.scrollContainer) !== BD ? null : this.readFocusRect();
          if (!yD) return;
          const MD = zD(BD),
            tD = FC(yD);
          if (tD.y < MD.top || tD.y > MD.bottom) {
            const DD = this.focusTarget.scrollGroup,
              CD = bc(tD, this.getTargets().targets, (CD => CD.scrollGroup === DD));
            this.setFocus(CD, !1)
          }
        }
        focusContext(DD) {
          const {
            kind: CD,
            idx: cD
          } = this.focused ? nc(this.focused) : {
            kind: null,
            idx: null
          }, ID = this.focused ? Xc(this.focused) : null, pD = ID ? (0, Lc.e)(ID) : null;
          return {
            kind: CD,
            idx: cD,
            actionElement: ID,
            press: pD,
            hasPress: null !== pD,
            hasBack: !(null === pD || void 0 === pD || !pD.back),
            holding: DD.isHolding(),
            slotHasItem: null !== cD && DD.hasItemAt(cD)
          }
        }
        handleButtons(DD, CD, cD) {
          var ID, pD;
          if (!this.activePress || DD.isHeld(this.activePress.button) && (ID = this.activePress.target, pD = this.focused, null !== ID.recipe ? mc(pD).recipe === ID.recipe : pD === ID.element) || this.releasePress(), this.scrollStickClick.update(DD.rightStick, CD), !this.handleHotbarPick(DD, cD)) {
            for (const [ID, pD] of kc) {
              const iD = (0, SD.h)(pD);
              if (!DD.wasPressed(iD) || "openButton" === ID && !sc()) continue;
              if ("RS" === iD && !this.scrollStickClick.allowsClick(CD)) continue;
              const fD = this.focusContext(cD),
                bD = kC(ID, fD);
              bD && this.runIntent(bD, fD, iD, cD)
            }
            this.handleDrop(DD, CD, cD)
          }
        }
        handleHotbarPick(DD, CD) {
          const cD = this.hotbarPick;
          if (!cD) return !1;
          const ID = DD.wasPressed((0, SD.h)("inventoryPrimary")) || DD.wasPressed((0, SD.h)("inventoryHotbarSwap"));
          if (!ID && !DD.wasPressed((0, SD.h)("inventoryClose")) && !CD.isHolding()) return !(DD.wasPressed((0, SD.h)("inventory")) && sc());
          const pD = this.focusTarget;
          ID && "hotbar" === (null === pD || void 0 === pD ? void 0 : pD.panel) && null !== pD.idx && pD.idx !== cD.idx && (CD.swapWithHotbar(pD.idx, cD.idx), this.afterAction()), this.hotbarPick = null;
          const iD = cD.element.isConnected ? this.getTargets().byElement.get(cD.element) : void 0;
          return iD && this.setFocus(iD), !0
        }
        startHotbarPick(DD) {
          var CD;
          const {
            targets: cD,
            byElement: ID
          } = this.getTargets(), pD = document.querySelector(Gc), iD = null !== (CD = pD && ID.get(pD)) && void 0 !== CD ? CD : cD.find((DD => "hotbar" === DD.panel));
          iD && this.focused && (this.hotbarPick = {
            idx: DD,
            element: this.focused
          }, this.setFocus(iD))
        }
        focusKey() {
          return this.focused ? eC(this.focused) : null
        }
        handleDrop(DD, CD, cD) {
          const ID = (0, SD.h)("inventoryDrop");
          if (DD.wasPressed(ID)) {
            const DD = (pD = this.focusContext(cD)).holding ? {
              kind: "Lb"
            } : "slot" === pD.kind && pD.slotHasItem && null !== pD.idx ? {
              kind: "slot",
              idx: pD.idx
            } : null;
            return void(DD && (this.dropFrom(DD, !1, cD), this.dropLatch.press(DD, this.focusKey(), CD, oD.c[(0, yD.h)().tapHoldTime].dropStackMs), this.afterAction()))
          }
          var pD;
          const iD = this.dropLatch.update(DD.isHeld(ID), this.focusKey(), CD);
          iD && ((DD, CD, cD) => "Lb" === DD.kind ? CD : !CD && cD(DD.idx))(iD, cD.isHolding(), cD.hasItemAt) && (this.dropFrom(iD, !0, cD), this.afterAction())
        }
        dropFrom(DD, CD, cD) {
          "Lb" === DD.kind ? cD.dropHeld(CD, this.slotPoint()) : cD.dropSlot(DD.idx, CD)
        }
        slotPoint() {
          return this.pointer ? {
            clientX: this.pointer.x,
            clientY: this.pointer.y
          } : this.lastRect ? (DD => {
            const CD = FC(DD);
            return {
              clientX: CD.x,
              clientY: CD.y
            }
          })(this.lastRect) : {
            clientX: 0,
            clientY: 0
          }
        }
        runIntent(DD, CD, cD, ID) {
          const pD = CD.idx,
            iD = CD.actionElement;
          switch (iD && Ec.has(DD) && (0, vD.u)(iD), DD) {
            case "slotPrimary":
              ID.primary(pD, this.slotPoint());
              break;
            case "slotSecondary":
              ID.secondary(pD, this.slotPoint());
              break;
            case "slotQuickMove":
              ID.quickMove(pD, this.slotPoint());
              break;
            case "hotbarPick":
              this.startHotbarPick(pD);
              break;
            case "pressPrimary":
            case "pressSecondary":
              this.startPress(CD.press, "pressPrimary" === DD ? "primary" : "secondary", cD);
              break;
            case "click":
              HC(iD, XC(iD));
              break;
            case "openKeyboard":
              gC(iD) && xC(iD);
              break;
            case "pressBack":
              CD.press.back();
              break;
            case "cancel":
              ID.cancel();
              break;
            case "close":
              return this.releasePress(), void ID.close()
          }
          this.afterAction()
        }
        startPress(DD, CD, cD) {
          this.releasePress(), DD.press(CD) && (this.activePress = {
            handlers: DD,
            button: cD,
            target: mc(this.focused)
          })
        }
        releasePress() {
          var DD, CD, cD;
          null === (DD = this.activePress) || void 0 === DD || null === (CD = (cD = DD.handlers).release) || void 0 === CD || CD.call(cD), this.activePress = null
        }
        afterAction() {
          this.targets.invalidate(), this.hover.invalidate()
        }
        publishState(DD) {
          ((DD, CD) => {
            var cD, ID, pD, iD, fD, bD;
            return DD.showing === CD.showing && DD.kind === CD.kind && DD.holding === CD.holding && DD.slotHasItem === CD.slotHasItem && (null === (cD = DD.pressHints) || void 0 === cD ? void 0 : cD.primary) === (null === (ID = CD.pressHints) || void 0 === ID ? void 0 : ID.primary) && (null === (pD = DD.pressHints) || void 0 === pD ? void 0 : pD.secondary) === (null === (iD = CD.pressHints) || void 0 === iD ? void 0 : iD.secondary) && (null === (fD = DD.pressHints) || void 0 === fD ? void 0 : fD.back) === (null === (bD = CD.pressHints) || void 0 === bD ? void 0 : bD.back) && DD.hasCategories === CD.hasCategories && DD.hasList === CD.hasList && DD.openButtonCloses === CD.openButtonCloses && DD.steppingSlots === CD.steppingSlots && DD.hotbarPicking === CD.hotbarPicking && DD.quickMoveToHotbar === CD.quickMoveToHotbar && DD.dropStackHold === CD.dropStackHold
          })(DD, this.state) || (this.state = DD, wD.i.Uo(Jc.f, DD))
        }
      },
      rc = ["pointermove", "pointerover", "pointerout", "mouseover", "mouseout"];
    var Ac = cD(8379),
      Fc = cD(312),
      DI = cD(1627),
      CI = cD(7860);
    const cI = "[data-pad-secondary]",
      II = DD => DD instanceof HTMLElement && wC(DD) && !SC(DD),
      pI = DD => {
        const CD = DD.querySelector(cI);
        if (CD && II(CD)) return CD;
        for (const pD of null !== (cD = null === (ID = DD.parentElement) || void 0 === ID ? void 0 : ID.children) && void 0 !== cD ? cD : []) {
          var cD, ID;
          if (pD !== DD && pD.matches(cI) && II(pD)) return pD
        }
        return null
      },
      iI = (DD, CD, cD, ID) => Math.max(0, Math.max(DD, cD) - Math.min(CD, ID)),
      fI = (DD, CD, cD, ID) => Math.max(0, Math.min(CD, ID) - Math.max(DD, cD)),
      bI = (DD, CD, cD) => {
        const ID = (DD.left + DD.right) / 2,
          pD = (DD.top + DD.bottom) / 2,
          iD = (CD.left + CD.right) / 2,
          fD = (CD.top + CD.bottom) / 2;
        if ("Left" === cD || "Right" === cD) {
          const bD = "Right" === cD ? 1 : -1;
          return {
            forwardGap: "Right" === cD ? CD.left - DD.right : DD.left - CD.right,
            centreForward: (iD - ID) * bD,
            sidewaysGap: iI(DD.top, DD.bottom, CD.top, CD.bottom),
            sidewaysOverlap: fI(DD.top, DD.bottom, CD.top, CD.bottom),
            centreSideways: Math.abs(fD - pD),
            startSideways: Math.abs(CD.top - DD.top),
            fromSidewaysSize: DD.bottom - DD.top,
            toSidewaysSize: CD.bottom - CD.top,
            toLength: CD.right - CD.left
          }
        }
        const bD = "Down" === cD ? 1 : -1;
        return {
          forwardGap: "Down" === cD ? CD.top - DD.bottom : DD.top - CD.bottom,
          centreForward: (fD - pD) * bD,
          sidewaysGap: iI(DD.left, DD.right, CD.left, CD.right),
          sidewaysOverlap: fI(DD.left, DD.right, CD.left, CD.right),
          centreSideways: Math.abs(iD - ID),
          startSideways: Math.abs(CD.left - DD.left),
          fromSidewaysSize: DD.right - DD.left,
          toSidewaysSize: CD.right - CD.left,
          toLength: CD.bottom - CD.top
        }
      },
      QI = DD => DD.centreForward > .5 && DD.forwardGap >= -DD.toLength / 2,
      wI = DD => {
        const CD = DD.sidewaysOverlap > 0 ? 0 : 2 * DD.fromSidewaysSize,
          cD = DD.fromSidewaysSize > 1.5 * DD.toSidewaysSize ? DD.startSideways : DD.centreSideways;
        return Math.max(0, DD.forwardGap) + 3 * DD.sidewaysGap + CD + .1 * cD
      },
      SI = (DD, CD) => fI(DD.top, DD.bottom, CD.top, CD.bottom) > 0 || CD.bottom - CD.top > CD.right - CD.left,
      BI = (DD, CD, cD, ID, pD, iD) => {
        const fD = pD ? MI(DD, CD, cD, pD) : new Set,
          bD = ZI(DD, CD, cD, fD);
        return bD < 0 && fD.size > 0 && iD ? yI(DD, CD, cD, iD) : ID && bD >= 0 ? tI(DD, CD, cD, ID, bD, fD) : bD
      },
      yI = (DD, CD, cD, ID) => {
        const pD = new Set,
          iD = ZI(DD, CD, "Up", pD) >= 0,
          fD = ZI(DD, CD, "Down", pD) >= 0,
          bD = new Set;
        return CD.forEach(((CD, cD) => {
          const pD = CD.top + CD.bottom < DD.top + DD.bottom;
          ID[cD] && !(pD ? iD : fD) || bD.add(cD)
        })), ZI(DD, CD, cD, bD)
      },
      MI = (DD, CD, cD, ID) => {
        const pD = new Set;
        return "Left" !== cD && "Right" !== cD || CD.forEach(((CD, cD) => {
          ID[cD] && fI(DD.top, DD.bottom, CD.top, CD.bottom) <= 0 && pD.add(cD)
        })), pD
      },
      tI = (DD, CD, cD, ID, pD, iD) => {
        const fD = bI(DD, CD[pD], cD).forwardGap;
        let bD = pD,
          QD = ID[pD],
          wD = 1 / 0;
        return CD.forEach(((CD, SD) => {
          const BD = ID[SD];
          if (iD.has(SD) || BD < QD || BD === QD && bD === pD) return;
          const yD = bI(DD, CD, cD);
          if (!QI(yD) || yD.forwardGap < 0 || yD.forwardGap >= fD) return;
          const MD = wI(yD);
          (BD > QD || MD < wD) && (bD = SD, QD = BD, wD = MD)
        })), bD
      },
      ZI = (DD, CD, cD, ID) => {
        let pD = -1,
          iD = 1 / 0;
        if (CD.forEach(((CD, fD) => {
            const bD = ((DD, CD, cD) => {
              const ID = bI(DD, CD, cD);
              if (!QI(ID)) return null;
              const pD = Math.max(0, ID.forwardGap);
              return ID.sidewaysOverlap <= 0 && ID.sidewaysGap > 2 * (pD + 1) ? null : wI(ID)
            })(DD, CD, cD);
            null !== bD && bD < iD && !ID.has(fD) && (iD = bD, pD = fD)
          })), pD < 0) return -1;
        const fD = CD[pD],
          bD = bI(DD, fD, cD).forwardGap;
        let QD = bD,
          wD = pD;
        return CD.forEach(((CD, iD) => {
          if (iD === pD || ID.has(iD) || !((DD, CD, cD) => {
              const ID = "Left" === cD || "Right" === cD,
                pD = ID ? fI(DD.top, DD.bottom, CD.top, CD.bottom) : fI(DD.left, DD.right, CD.left, CD.right),
                iD = ID ? Math.min(DD.bottom - DD.top, CD.bottom - CD.top) : Math.min(DD.right - DD.left, CD.right - CD.left);
              return pD > 0 && pD >= iD / 2
            })(CD, fD, cD)) return;
          const SD = bI(DD, CD, cD);
          QI(SD) && SD.forwardGap + SD.toLength <= bD + 1 && SD.forwardGap < QD && (QD = SD.forwardGap, wD = iD)
        })), wD
      },
      oI = (DD, CD) => {
        let cD = -1,
          ID = 1 / 0;
        return CD.forEach(((CD, pD) => {
          const iD = Math.max(CD.left - DD.x, 0, DD.x - CD.right),
            fD = Math.max(CD.top - DD.y, 0, DD.y - CD.bottom),
            bD = Math.hypot(iD, fD);
          bD < ID && (ID = bD, cD = pD)
        })), cD
      },
      vI = (DD, CD) => {
        const cD = Math.min(DD.bottom - DD.top, CD.bottom - CD.top) / 2;
        return Math.abs(DD.top - CD.top) > cD ? DD.top - CD.top : DD.left - CD.left
      },
      NI = DD => {
        let CD = -1;
        for (let cD = 0; cD < DD.length; cD++)(CD < 0 || vI(DD[cD], DD[CD]) < 0) && (CD = cD);
        return CD
      };
    var gI = cD(1660),
      XI = cD(8384),
      mI = cD(8391);
    const nI = DD => {
        if ("death" !== DD || "inGame" !== QD.d.get("gameState") || "off" === (0, yD.h)().quickChat || null === (0, gI.c)()) return !1;
        const CD = (0, SD.h)("chat");
        return CD !== (0, SD.h)("menuConfirm") && CD !== (0, SD.h)("menuBack")
      },
      OI = new XI.e;
    var PI = cD(4134),
      HI = cD(8394);
    const UI = DD => {
        let CD = null;
        for (const cD of DD.querySelectorAll("[data-pad-tabs]")) wC(cD) && (!CD || Number(cD.dataset.padTabs) < Number(CD.dataset.padTabs)) && (CD = cD);
        return CD
      },
      xI = (DD, CD, cD, ID) => {
        DD.focusWhenFound((() => {
          const pD = DD.pickInitial(CD);
          if (pD && !cD.has(pD) && (null === ID || void 0 === ID || !ID.contains(pD))) return pD;
          const iD = ((DD, CD) => {
              const cD = CD => DD.getEnabledCandidates(CD).filter((DD => !DD.closest("[data-pad-tabs]")));
              for (const ID of NC(CD)) {
                const DD = cD(ID);
                if (DD.length > 0) return DD
              }
              return cD(CD)
            })(DD, CD).filter((DD => !cD.has(DD))),
            fD = NI(iD.map((DD => DD.getBoundingClientRect())));
          return fD >= 0 ? iD[fD] : null
        }), 3e3)
      },
      qI = (DD, CD, cD, ID) => {
        var pD;
        const iD = ((DD, CD) => {
          if (0 === DD.length) return null;
          const cD = DD.findIndex((DD => "true" === DD.dataset.padSelected));
          return cD < 0 ? CD > 0 ? DD[0] : DD[DD.length - 1] : DD[(cD + CD + DD.length) % DD.length]
        })([...cD.querySelectorAll("[data-pad-tab]")].filter((DD => wC(DD) && !SC(DD))), ID);
        if (!iD) return;
        const fD = null !== (pD = null === DD || void 0 === DD ? void 0 : DD.getFocused()) && void 0 !== pD ? pD : null,
          bD = !(null === fD || void 0 === fD || !fD.isConnected) && cD.contains(fD),
          QD = DD && !bD ? new Set(DD.getEnabledCandidates(CD)) : null;
        qC(iD), DD && (QD ? xI(DD, CD, QD, cD) : DD.setFocus(iD, {
          byUser: !0
        }))
      },
      JI = DD => {
        var CD;
        const cD = zD(null !== (CD = xD(DD, "x")) && void 0 !== CD ? CD : DD),
          ID = MC(DD).filter((DD => !SC(DD))),
          pD = ID.filter((DD => jD(DD.getBoundingClientRect(), cD)));
        return (pD.length > 0 ? pD : ID).sort(((DD, CD) => vI(DD.getBoundingClientRect(), CD.getBoundingClientRect())))
      },
      KI = (DD, CD, cD) => {
        const ID = [...CD.querySelectorAll("[data-pad-row]")].filter(wC),
          pD = DD.getFocused(),
          iD = pD ? ID.findIndex((DD => DD.contains(pD))) : -1;
        let fD = 0,
          bD = cD > 0 ? 0 : ID.length - 1;
        if (iD >= 0 && pD) fD = Math.max(0, JI(ID[iD]).indexOf(pD)), bD = iD + cD;
        else if (pD) {
          const DD = pD.getBoundingClientRect(),
            CD = ID.map((CD => {
              const ID = CD.getBoundingClientRect();
              return cD > 0 ? ID.top >= DD.top : ID.bottom <= DD.bottom
            }));
          bD = cD > 0 ? CD.indexOf(!0) : CD.lastIndexOf(!0)
        }
        for (let QD = bD; QD >= 0 && QD < ID.length; QD += cD) {
          const CD = JI(ID[QD]);
          if (CD.length > 0) return void DD.setFocus(CD[Math.min(fD, CD.length - 1)], {
            byUser: !0
          })
        }
      },
      aI = (DD, CD, cD) => {
        var ID, pD;
        const iD = null !== (ID = null === DD || void 0 === DD ? void 0 : DD.getFocused()) && void 0 !== ID ? ID : null,
          fD = null !== iD && void 0 !== iD && iD.closest("[data-pad-row]") ? "x" : "y",
          bD = null !== (pD = iD ? xD(iD, fD, CD) : null) && void 0 !== pD ? pD : JD(CD, fD);
        if (!bD) return;
        const QD = iD ? XC(iD) : null;
        if (VD(bD, fD, cD * ("y" === fD ? bD.clientHeight : bD.clientWidth) * .85), !DD || !QD) return;
        const wD = zD(bD),
          SD = DD.getEnabledCandidates(CD).filter((DD => bD.contains(DD) && jD(DD.getBoundingClientRect(), wD))),
          BD = oI(QD, SD.map((DD => DD.getBoundingClientRect())));
        BD >= 0 && DD.setFocus(SD[BD], {
          scroll: !1,
          byUser: !0
        })
      };
    let VI = null;
    const zI = (DD, CD) => {
        var cD, ID;
        const pD = CD.querySelector("[data-pad-friends-column]"),
          iD = DD.getFocused();
        if (!pD || !iD || !pD.contains(iD)) return !1;
        const fD = DD.getEnabledCandidates(CD).filter((DD => !pD.contains(DD))),
          bD = oI(XC(iD), fD.map((DD => DD.getBoundingClientRect()))),
          QD = null === (cD = VI) || void 0 === cD ? void 0 : cD.deref();
        return DD.setFocus(null !== QD && void 0 !== QD && QD.isConnected ? QD : null !== (ID = fD[bD]) && void 0 !== ID ? ID : null, {
          byUser: !0
        }), !0
      },
      jI = DD => {
        const CD = (0, SD.h)(DD);
        return (0, tD.C)(CD) || CI.t.some((DD => (0, SD.h)(DD) === CD)) ? null : CD
      },
      lI = (DD, CD) => {
        const cD = jI(CD);
        return null !== cD && DD.wasPressed(cD)
      },
      LI = function(DD, CD, cD) {
        let ID = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const pD = (DD => {
            var CD, cD;
            return null !== (CD = null === (cD = UI(DD)) || void 0 === cD ? void 0 : cD.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== CD ? CD : null
          })(CD),
          iD = DD && pD ? new Set(DD.getEnabledCandidates(CD)) : null;
        (0, Ac.d)(), cD === Fc.q.SETTINGS && (0, DI.n)(QD.d.get("openEverythingMenuName")) ? QD.d.set({
          openEverythingMenuName: cD
        }) : (0, DI.y)(new Event("padMenuShortcut"), cD, ID), DD && iD && pD && xI(DD, CD, iD, pD.closest("[data-pad-tabs]"))
      },
      TI = DD => null !== DD.closest(".Dropdown-root") || null !== DD.querySelector(".Dropdown-root.is-open"),
      GI = DD => null !== (0, HI.e)() && "popup" !== DD.layer.kind && !UI(DD.root) && !TI(DD.root),
      RI = (0, ZD.b)(tD.X),
      kI = (0, ZD.b)(tD.X),
      dI = (DD, CD, cD) => {
        if (((DD, CD) => {
            const cD = (0, SD.h)("chat");
            return nI(CD) && DD.isHeld(cD) ? "hold" === OI.update(DD.wasPressed(cD), DD.isHeld(cD), performance.now(), oD.c[(0, yD.h)().tapHoldTime].wheelMs) && (BD.d.consumeButton(cD), wD.i.Uo(mI.o), !0) : (OI.release(), !1)
          })(CD, cD.layer.kind)) return !0;
        const ID = cD.root;
        for (const [fD, bD] of [
            ["menuTabPrevious", -1],
            ["menuTabNext", 1]
          ])
          if (CD.wasPressed((0, SD.h)(fD))) {
            const CD = TI(ID) ? null : UI(ID);
            if (CD) qI(DD, ID, CD, bD);
            else if (GI(cD)) {
              var pD;
              const CD = DD ? new Set(DD.getEnabledCandidates(ID)) : null;
              null !== (pD = (0, HI.e)()) && void 0 !== pD && pD(bD) && DD && CD && xI(DD, ID, CD, null)
            } else DD && KI(DD, ID, bD);
            return !0
          } for (const [fD, bD, QD] of [
            ["menuPageUp", -1, RI],
            ["menuPageDown", 1, kI]
          ]) {
          const cD = (0, SD.h)(fD);
          if (CD.wasPressed(cD) && QD.reset(), QD.update(CD.isHeld(cD), performance.now())) return aI(DD, ID, bD), !0
        }
        const iD = "popup" === cD.layer.kind;
        return lI(CD, "pause") ? (iD || (0, DI.v)() && "menu" !== cD.layer.kind || LI(DD, ID, (0, DI.v)() ? Fc.q.SETTINGS : (0, PI.b)()), !0) : !!lI(CD, "leaderboard") && ("home" === cD.layer.kind ? (DD => {
          const CD = [...DD.querySelectorAll("[data-pad-notifications]")].find(wC);
          CD && qC(CD)
        })(ID) : iD || LI(DD, ID, Fc.q.LOBBY_LEADERBOARD, "inGame" === QD.d.get("gameState")), !0)
      },
      YI = (DD, CD, cD) => {
        if (dI(DD, CD, cD)) return !0;
        const ID = "home" === cD.layer.kind;
        if (CD.wasPressed((0, SD.h)("menuSecondary"))) {
          const CD = DD.getFocused(),
            pD = CD ? pI(CD) : null;
          if (pD) return qC(pD), !0;
          if (ID) {
            const CD = cD.root.querySelector("[data-pad-search] input");
            return CD && vC(CD, cD.root) ? (DD.setFocus(CD, {
              byUser: !0
            }), qC(CD)) : QD.d.set({
              searchOpen: !0
            }), !0
          }
        }
        return !(!ID || !lI(CD, "inventory")) && (((DD, CD) => {
          var cD, ID;
          const pD = CD.querySelector("[data-pad-friends-column]");
          if (!pD || !wC(pD)) return void(0, DI.y)(new Event("padMenuShortcut"), Fc.q.SOCIAL);
          if (zI(DD, CD)) return;
          const iD = null !== (cD = null === (ID = pD.querySelector("[data-pad-friends-start]")) || void 0 === ID ? void 0 : ID.getBoundingClientRect().top) && void 0 !== cD ? cD : -1 / 0,
            fD = DD.getEnabledCandidates(pD),
            bD = fD.filter((DD => DD.getBoundingClientRect().top >= iD)),
            QD = bD.length > 0 ? bD : fD,
            wD = NI(QD.map((DD => DD.getBoundingClientRect())));
          DD.setFocus(wD >= 0 ? QD[wD] : null, {
            byUser: !0
          })
        })(DD, cD.root), !0)
      },
      WI = DD => {
        var CD, cD, ID;
        const pD = TC(DD);
        if (null !== pD) return pD;
        const iD = (null !== (CD = null !== (cD = null !== (ID = DD.getAttribute("aria-label")) && void 0 !== ID ? ID : DD.getAttribute("title")) && void 0 !== cD ? cD : DD.textContent) && void 0 !== CD ? CD : "").replace(/\s+/g, " ").trim();
        return iD ? `${DD.tagName}:${iD.slice(0,100)}` : null
      };
    class sI {
      constructor() {
        this.remembered = new Map, this.history = []
      }
      enter(DD) {
        const CD = this.history.indexOf(DD);
        if (CD >= 0) {
          for (const DD of this.history.splice(CD + 1)) this.remembered.delete(DD);
          return !0
        }
        return this.remembered.delete(DD), this.history.push(DD), this.history.length > 32 && this.forget(this.history[0]), !1
      }
      forget(DD) {
        this.remembered.delete(DD);
        const CD = this.history.indexOf(DD);
        CD >= 0 && this.history.splice(CD, 1)
      }
      remember(DD, CD, cD, ID) {
        const pD = WI(CD),
          iD = TC(CD),
          fD = null !== iD && ((DD, CD) => {
            let cD = 0;
            for (const ID of DD.querySelectorAll("[data-pad-key], [href]"))
              if ((ID.getAttribute("data-pad-key") === CD || ID.getAttribute("href") === CD) && (cD++, cD > 1)) return !0;
            return !1
          })(cD, iD) ? Math.max(0, this.twins(ID(), iD).indexOf(CD)) : 0;
        this.remembered.set(DD, {
          element: new WeakRef(CD),
          identity: pD,
          ordinal: fD
        })
      }
      has(DD) {
        return this.remembered.has(DD)
      }
      recall(DD, CD) {
        var cD, ID;
        const pD = this.remembered.get(DD);
        if (!pD) return null;
        const iD = pD.element.deref();
        if (iD && CD.includes(iD)) return iD;
        if (null === pD.identity) return null;
        const fD = this.twins(CD, pD.identity);
        return null !== (cD = null !== (ID = fD[pD.ordinal]) && void 0 !== ID ? ID : fD[0]) && void 0 !== cD ? cD : null
      }
      twins(DD, CD) {
        return DD.filter((DD => WI(DD) === CD))
      }
    }
    var EI = cD(1280);
    const eI = DD => {
        const CD = [];
        let cD = DD;
        for (; cD && cD !== document.body;) {
          const DD = getComputedStyle(cD).zIndex;
          "auto" !== DD && CD.push(Number(DD) || 0), cD = cD.parentElement
        }
        return CD.reverse()
      },
      uI = (DD, CD) => {
        const cD = ((DD, CD) => {
          const cD = Math.max(DD.length, CD.length);
          for (let iD = 0; iD < cD; iD++) {
            var ID, pD;
            const cD = (null !== (ID = DD[iD]) && void 0 !== ID ? ID : 0) - (null !== (pD = CD[iD]) && void 0 !== pD ? pD : 0);
            if (0 !== cD) return cD
          }
          return 0
        })(eI(DD), eI(CD));
        if (0 !== cD) return cD > 0;
        if (DD.contains(CD)) return !1;
        if (CD.contains(DD)) return !0;
        const ID = DD.compareDocumentPosition(CD);
        return !!(ID & Node.DOCUMENT_POSITION_PRECEDING) || !(ID & Node.DOCUMENT_POSITION_FOLLOWING) && null
      },
      hI = (DD, CD) => {
        var cD;
        return null !== (cD = uI(DD.root, CD.root)) && void 0 !== cD ? cD : DD.order > CD.order
      },
      rI = (DD, CD) => CD.some((CD => !CD.contains(DD) && !DD.contains(CD) && !0 === uI(CD, DD)));
    let AI = null,
      FI = null,
      Dp = -1;
    const Cp = () => {
        var DD;
        const CD = null === (DD = document.timeline) || void 0 === DD ? void 0 : DD.currentTime,
          cD = "number" === typeof CD ? CD : null;
        if (null !== cD && cD === FI && Dp === (0, EI.e)()) return AI;
        let ID = null;
        const pD = [],
          iD = [...document.querySelectorAll("[data-pad-covers]")].filter(wC);
        for (const fD of (0, EI.i)()) {
          const DD = fD.getRoot(),
            CD = !!DD && wC(DD) && !rI(DD, iD);
          if (fD.shown && !CD && pD.push(fD), fD.shown = CD, !DD || !CD) continue;
          const cD = {
            layer: fD,
            root: DD,
            order: fD.order
          };
          ID && !hI(cD, ID) || (ID = cD)
        }
        AI = ID, FI = cD, Dp = (0, EI.e)();
        for (const fD of pD)(0, EI.m)(fD);
        return AI
      },
      cp = () => {
        const DD = Cp();
        return !(null === DD || void 0 === DD || !DD.layer.close) && (DD.layer.close(), FI = null, !0)
      },
      Ip = () => {
        var DD, CD;
        return null !== (DD = null === (CD = Cp()) || void 0 === CD ? void 0 : CD.root) && void 0 !== DD ? DD : null
      },
      pp = DD => DD ? {
        ...DD,
        root: Ip()
      } : null;
    let ip = null,
      fp = null,
      bp = (0, yD.h)().menuNavigation,
      Qp = null;
    const wp = new mD;
    let Sp = null;
    wD.i.subscribe(yD.f, (() => {
      const DD = (0, yD.h)().menuNavigation;
      DD !== bp && (bp = DD, ip = null, fp = null)
    }));
    const Bp = () => {
        var DD;
        return null !== (DD = ip) && void 0 !== DD ? DD : (0, yD.h)().menuNavigation
      },
      yp = DD => {
        if (op()) {
          if (Qp = pp(DD), "hybrid" === Bp()) return wp.lock(), void(fp = fp ? null : Ip());
          ip = "focus" === Bp() ? "cursor" : "focus"
        }
      },
      Mp = () => {
        const DD = Qp;
        return Qp = null, DD
      };
    let tp = {
      root: null,
      firstSeenMs: -1 / 0,
      atMs: -1 / 0,
      has: !1
    };
    const Zp = function(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const cD = tp.root === DD,
          ID = cD ? tp.firstSeenMs : CD,
          pD = tp.has || CD - ID > 1e3;
        return (!cD || !pD || CD - tp.atMs > 250) && (tp = {
          root: DD,
          firstSeenMs: ID,
          atMs: CD,
          has: ZC(DD)
        }), tp.has
      },
      op = () => {
        const DD = Ip();
        return null !== DD && Zp(DD)
      },
      vp = () => {
        const DD = Cp();
        return fp && (null === DD || void 0 === DD ? void 0 : DD.root) !== fp && (fp = null), (DD => {
          let {
            mode: CD,
            hasLayer: cD,
            hasCandidates: ID,
            hybridCursorEngaged: pD
          } = DD;
          return cD ? "cursor" !== CD && ID() ? "hybrid" === CD && pD ? "cursor" : "focus" : "cursor" : null
        })({
          mode: Bp(),
          hasLayer: null !== DD,
          hasCandidates: () => null !== DD && Zp(DD.root),
          hybridCursorEngaged: null !== fp
        })
      },
      Np = () => "hybrid" === Bp() && op(),
      gp = "pad-focused";
    var Xp = cD(4340),
      mp = cD(4806);
    const np = "[data-pad-destructive]",
      Op = `${np}, [data-pad-back]`,
      Pp = DD => ({
        rect: DD.getBoundingClientRect(),
        destructive: DD.matches(np),
        closes: null !== DD.closest("[data-pad-close-button]"),
        unavailable: DD.matches("[data-pad-unavailable]")
      }),
      Hp = DD => {
        let {
          destructive: CD,
          closes: cD,
          unavailable: ID
        } = DD;
        return CD ? cD ? 2 : 3 : ID ? 1 : 0
      },
      Up = DD => {
        let CD = -1;
        for (let cD = 0; cD < DD.length; cD++) {
          if (CD < 0) {
            CD = cD;
            continue
          }
          const ID = DD[cD],
            pD = DD[CD];
          Hp(ID) === Hp(pD) ? vI(ID.rect, pD.rect) < 0 && (CD = cD) : Hp(ID) < Hp(pD) && (CD = cD)
        }
        return CD
      },
      xp = "[data-pad-tabs]",
      qp = "[data-pad-tab]",
      Jp = (DD, CD) => {
        const cD = DD.querySelector(`${qp}[data-pad-selected='true']`);
        return cD && CD.includes(cD) ? cD : null
      },
      Kp = (DD, CD) => {
        let cD = CD;
        for (let ID = CD.parentElement; ID && !ID.contains(DD); ID = ID.parentElement) cD = ID;
        return cD
      };
    class ap {
      constructor() {
        this.contentReturn = null
      }
      redirect(DD, CD, cD, ID) {
        var pD, iD;
        const fD = DD.closest(xp),
          bD = CD.closest(xp);
        var QD;
        if (bD && bD !== fD) return fD || (this.contentReturn = new WeakRef(DD)), null !== (QD = Jp(bD, cD)) && void 0 !== QD ? QD : CD;
        if (!fD || bD) return CD;
        const wD = Kp(DD, CD),
          SD = null === (pD = this.contentReturn) || void 0 === pD ? void 0 : pD.deref();
        return SD && wD.contains(SD) && cD.includes(SD) ? SD : null !== (iD = this.pickRegionStart(wD, xD(CD, "y", ID), cD)) && void 0 !== iD ? iD : CD
      }
      findTabContent(DD, CD, cD) {
        const ID = DD.closest(xp);
        if (!ID || !DD.matches(qp) || ID.contains(CD)) return null;
        const pD = CD.closest(xp);
        if (pD && Number(pD.dataset.padTabs) <= Number(ID.dataset.padTabs)) return null;
        const iD = Kp(DD, CD);
        return cD.some((DD => iD.contains(DD) && !DD.closest(Op))) || !CD.closest(Op) ? iD : null
      }
      pickContentStart(DD, CD, cD) {
        return this.contentReturn = null, this.pickRegionStart(DD, xD(DD, "y", cD), CD)
      }
      pickReplacedContentStart(DD, CD, cD, ID) {
        if (!CD.contains(DD)) return null;
        const pD = Kp(CD, DD),
          iD = cD.filter((DD => CD.contains(DD) && !pD.contains(DD) && !DD.closest(Op)));
        return 0 === iD.length ? null : (this.contentReturn = null, this.pickRegionStart(CD, xD(iD[0], "y", ID), iD))
      }
      backToStrip(DD, CD, cD) {
        if (DD.closest(xp)) return null;
        const ID = UI(cD);
        for (const pD of cD.querySelectorAll(xp)) {
          if (Number(pD.dataset.padTabs) <= 1 || pD === ID) continue;
          const iD = Jp(pD, CD),
            fD = iD ? Kp(DD, pD).parentElement : null;
          if (iD && fD && fD !== cD && cD.contains(fD)) return this.contentReturn = new WeakRef(DD), iD
        }
        return null
      }
      pickRegionStart(DD, CD, cD) {
        const ID = zD(CD),
          pD = DD => {
            const CD = cD.filter((CD => DD.contains(CD) && !CD.closest(xp) && jD(CD.getBoundingClientRect(), ID))),
              pD = Up(CD.map(Pp));
            return pD >= 0 ? CD[pD] : null
          };
        for (const iD of NC(DD)) {
          const DD = pD(iD);
          if (DD) return DD
        }
        for (const iD of DD.querySelectorAll(xp)) {
          const DD = Jp(iD, cD);
          if (DD) return DD
        }
        return pD(DD)
      }
    }
    const Vp = "[data-pad-default-focus], .Dropdown-option.is-selected",
      zp = ".Dropdown-root.is-open > .Dropdown-menu",
      jp = "[data-pad-no-step-in]",
      lp = "[data-pad-tabs]",
      Lp = "[data-pad-press-area]",
      Tp = DD => {
        let CD = DD;
        for (let cD = 0; CD && cD <= 4; cD++, CD = CD.parentElement) {
          const cD = CD.querySelector(".CircleInfo");
          if (cD) return CD === DD || CD.querySelectorAll(bC).length <= 1 ? cD : null;
          if (CD !== DD && CD.querySelectorAll(bC).length > 1) return null
        }
        return null
      },
      Gp = (DD, CD, cD) => {
        UC(DD, CD, cD);
        const ID = null !== DD && void 0 !== DD && DD.isConnected ? Tp(DD) : null,
          pD = Tp(CD);
        ID !== pD && UC(ID, pD, pD ? XC(pD) : cD, {
          leaveBelow: DD,
          enterBelow: CD
        })
      },
      Rp = DD => DD.getBoundingClientRect(),
      kp = (DD, CD, cD) => {
        const ID = new Set(cD);
        for (let pD = DD; pD; pD = pD === CD ? null : pD.parentElement)
          if (ID.has(pD)) return pD;
        return null
      },
      dp = (DD, CD) => !DD.root || DD.root === CD || CD.matches(zp) && DD.root.contains(CD);
    const Yp = new class {
      constructor() {
        this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new sI, this.tabStripNav = new ap, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepeatKey = null, this.confirmRepeated = !1, this.confirmRepeat = (0, ZD.b)(tD.r), this.dpadRepeats = new Map(tD.x.map((DD => [DD, (0, ZD.b)(tD.z)]))), this.stickRepeat = new tD.b((0, ZD.b)(tD.bb)), this.lastRefocusCheckMs = -1 / 0, this.enteredLayerAtMs = 0, this.lastFocusedCentre = null, this.lastActivatedKey = null, this.lastActivated = null, this.lastActivatedAtMs = -1 / 0, this.pendingFocus = null, this.tabOpenWait = null, this.retryMove = null, this.scrollRemainder = {
          x: 0,
          y: 0
        }, this.wasActive = !1, this.layerKind = null, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.listeners = new Set, this.dropdownLayers = new WeakMap, this.dropdownLayerCounter = 0
      }
      install() {
        const DD = BD.d.register({
            name: "focus",
            isActive: () => (0, MD.i)() && "focus" === vp(),
            onFrame: DD => {
              this.onFrame(DD)
            },
            onDeactivate: () => {
              this.deactivate()
            },
            wakePressActs: DD => (0, BD.g)(DD) || DD === (0, SD.h)("menuConfirm") && jC((0, MD.c)())
          }),
          CD = (0, EI.n)((DD => {
            const CD = (0, EI.q)(DD);
            null === DD.memoryKey && this.memory.forget(CD), CD === this.layerKey && (this.layerKey = null)
          }));
        let cD = -1 / 0;
        const ID = fD.e.onFrame((DD => {
            (0, MD.i)() || DD.timestampMs - cD < 100 || (cD = DD.timestampMs, Cp())
          })),
          pD = DD => {
            DD.isTrusted && DD.target instanceof Element && fD.e.getActivePad() && this.noteChosenStop(DD.target)
          };
        return document.addEventListener("click", pD, !0), () => {
          DD(), CD(), ID(), document.removeEventListener("click", pD, !0), this.deactivate()
        }
      }
      noteChosenStop(DD) {
        var CD, cD;
        const ID = Cp();
        if (!ID || !ID.root.contains(DD)) return;
        const pD = null !== (CD = null === (cD = DD.closest(".Dropdown-root")) || void 0 === cD ? void 0 : cD.querySelector(".Dropdown-control")) && void 0 !== CD ? CD : DD,
          iD = kp(pD, ID.root, this.getEnabledCandidates(ID.root));
        if (!iD) return;
        const fD = (0, EI.q)(ID.layer);
        fD === this.layerKey && ID.root === this.layerRoot || this.beginLayer(ID, fD), this.wasActive ? this.setFocus(iD, {
          scroll: !1,
          byUser: !0
        }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = iD, this.lastFocusedCentre = XC(iD), this.rememberFocus(iD), this.notify())
      }
      getFocused() {
        return this.focused
      }
      isActive() {
        return this.wasActive
      }
      onChange(DD) {
        return this.listeners.add(DD), () => {
          this.listeners.delete(DD)
        }
      }
      notify() {
        for (const DD of this.listeners) DD()
      }
      deactivate() {
        var DD;
        if (this.wasActive) {
          this.wasActive = !1, this.layerKind = null, this.confirmPressedOn = null, this.retryMove = null, this.pendingFocus = null;
          for (const DD of this.dpadRepeats.values()) DD.reset();
          this.stickRepeat.reset(), null !== (DD = this.focused) && void 0 !== DD && DD.isConnected && Gp(this.focused, null, XC(this.focused)), this.notify()
        }
      }
      setFocus(DD) {
        var CD;
        let {
          scroll: cD = !0,
          byUser: ID = !1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (ID && (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1), DD === this.focused) return;
        const pD = null !== (CD = this.focused) && void 0 !== CD && CD.isConnected ? this.focused : null;
        if (this.focused = DD, DD) {
          cD && (DD.classList.add(gp), DD.scrollIntoView({
            block: "nearest",
            inline: "nearest",
            behavior: "instant"
          })), ID && ((DD, CD) => {
            const cD = CD.closest("[data-pad-friends-column]");
            cD && DD && !cD.contains(DD) && (VI = new WeakRef(DD))
          })(pD, DD);
          const CD = XC(DD);
          this.lastFocusedCentre = CD, this.movedInLayer && this.rememberFocus(DD), Gp(pD, DD, CD), "false" === DD.getAttribute("aria-pressed") && DD.closest("[data-pad-select-on-focus]") && qC(DD)
        } else pD && Gp(pD, null, XC(pD));
        this.notify()
      }
      rememberFocus(DD) {
        const CD = this.layerRoot;
        this.layerKey && CD && this.memory.remember(this.layerKey, DD, CD, (() => this.getEnabledCandidates(CD)))
      }
      noteCursorActivation(DD) {
        const CD = Cp();
        if (!CD || !CD.root.contains(DD)) return;
        const cD = this.getEnabledCandidates(CD.root),
          ID = new Set(cD);
        let pD = DD;
        for (; pD && !ID.has(pD);) pD = pD === CD.root ? null : pD.parentElement;
        if (!(pD instanceof HTMLElement)) return;
        const iD = (0, EI.q)(CD.layer);
        this.memory.enter(iD), this.memory.remember(iD, pD, CD.root, (() => cD))
      }
      notePageEnteredByCursor(DD) {
        return this.memory.enter(DD)
      }
      recallStop(DD, CD) {
        return this.findRemembered(DD, CD)
      }
      focusWhenFound(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.pendingFocus = {
          find: DD,
          untilMs: performance.now() + CD,
          holdWhile: cD
        }
      }
      getEnabledCandidates(DD) {
        return MC(DD).filter((DD => !SC(DD)))
      }
      onFrame(DD) {
        var CD;
        const cD = Cp();
        if (!cD) return;
        const ID = null !== (CD = this.findOpenDropdown(cD)) && void 0 !== CD ? CD : cD,
          pD = performance.now(),
          iD = (0, EI.q)(ID.layer);
        if (iD !== this.layerKey || ID.root !== this.layerRoot) {
          const CD = this.focused;
          if (null !== this.layerKey && ID.root === this.layerRoot && CD && vC(CD, ID.root)) this.continueLayer(iD, CD), this.wasActive || this.resume(ID.root, pD);
          else {
            const CD = !this.wasActive && !DD.wokeDevice,
              fD = "death" === this.layerKind || CD,
              bD = this.enterLayer(ID, iD);
            "popup" !== ID.layer.kind || ID !== cD || bD ? "menu" === ID.layer.kind && fD && "inGame" === QD.d.get("gameState") && !(0, Ac.g)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = pD + Xp.c) : (this.pressGuardExtends = CD, this.pressGuardUntilMs = pD + (CD ? Xp.c : fD ? 500 : 250))
          }
        } else this.wasActive || this.resume(ID.root, pD);
        if (this.layerKind = ID.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), DD.wokeDevice && this.focusPointedStop(ID.root), this.validateFocus(ID, pD), pD < this.pressGuardUntilMs && this.pressGuardExtends && (DD.wasPressed((0, SD.h)("menuConfirm")) || DD.wasPressed((0, SD.h)("menuBack"))) && (this.pressGuardUntilMs = pD + Xp.c), pD >= this.pressGuardUntilMs && this.handleButtons(DD, ID)) return;
        const fD = "hybrid" === Bp();
        if (fD && (DD => {
            const CD = Ip();
            return CD !== Sp && (Sp = CD, wp.lock()), wp.update(DD, (0, yD.h)().moveDeadzone)
          })(DD.leftStick)) return bD = this.getHandoff(), Qp = pp(bD), fp = Ip(), void BD.d.handOffHeldInput();
        var bD;
        this.handleDirections(DD, ID, pD, !fD), this.handleScroll(DD, ID)
      }
      findOpenDropdown(DD) {
        const CD = DD.root.querySelector(zp);
        if (!CD || !wC(CD)) return null;
        let cD = this.dropdownLayers.get(CD);
        return cD || (this.dropdownLayerCounter++, cD = {
          id: `dropdown-${this.dropdownLayerCounter}`,
          kind: DD.layer.kind,
          getRoot: () => CD,
          close: () => {
            aC(CD)
          },
          memoryKey: null
        }, this.dropdownLayers.set(CD, cD)), {
          layer: cD,
          root: CD,
          order: DD.order
        }
      }
      focusPointedStop(DD) {
        const CD = (0, MD.c)(),
          cD = CD ? document.elementFromPoint(CD.x, CD.y) : null;
        if (!cD || !DD.contains(cD)) return;
        const ID = kp(cD, DD, this.getEnabledCandidates(DD));
        ID && this.setFocus(ID, {
          scroll: !1,
          byUser: !0
        })
      }
      enterLayer(DD, CD) {
        const cD = this.beginLayer(DD, CD),
          ID = Mp();
        return ID && dp(ID, DD.root) ? (this.takeOver(DD.root, ID, this.enteredLayerAtMs), cD) : (this.restoreLayerFocus(DD.root, cD), cD)
      }
      beginLayer(DD, CD) {
        return this.layerKey = CD, this.layerRoot = DD.root, this.lastActivatedKey = null, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoreOnFocusLoss = !1, this.retryMove = null, this.pendingFocus = null, this.confirmPressedOn = null, this.lastRefocusCheckMs = -1 / 0, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.enteredLayerAtMs = performance.now(), this.lastFocusedCentre = null, this.memory.enter(CD)
      }
      restoreLayerFocus(DD, CD) {
        const cD = CD && this.layerKey ? this.findRemembered(DD, this.layerKey) : null;
        this.restoredFromMemory = null !== cD, this.setFocus(null !== cD && void 0 !== cD ? cD : this.pickInitial(DD, {
          waitForContent: !0
        }))
      }
      continueLayer(DD, CD) {
        this.layerKey = DD;
        const cD = this.memory.enter(DD);
        this.restoreOnFocusLoss = cD, this.movedInLayer && !cD && this.rememberFocus(CD)
      }
      resume(DD, CD) {
        var cD;
        const ID = Mp();
        ID && dp(ID, DD) ? this.takeOver(DD, ID, CD) : null !== (cD = this.focused) && void 0 !== cD && cD.isConnected && Gp(null, this.focused, XC(this.focused))
      }
      pickPreferred(DD) {
        var CD;
        return null !== (CD = this.layerKey ? this.findRemembered(DD, this.layerKey) : null) && void 0 !== CD ? CD : this.pickInitial(DD, {
          waitForContent: !0
        })
      }
      findRemembered(DD, CD) {
        return this.memory.has(CD) ? this.memory.recall(CD, this.getEnabledCandidates(DD)) : null
      }
      getHandoff() {
        var DD, CD, cD;
        const ID = null !== (DD = this.focused) && void 0 !== DD && DD.isConnected ? this.focused : null,
          pD = null !== (CD = this.layerRoot) && void 0 !== CD && CD.isConnected ? this.layerRoot : null;
        return {
          point: ID ? XC(ID) : null !== (cD = this.lastFocusedCentre) && void 0 !== cD ? cD : this.getLayerStartPoint(pD),
          element: ID,
          direction: null
        }
      }
      getLayerStartPoint(DD) {
        if (!DD) return {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2
        };
        const CD = this.pickInitial(DD, {
          includeDisabled: !0
        });
        return XC(null !== CD && void 0 !== CD ? CD : DD)
      }
      takeOver(DD, CD, cD) {
        const {
          element: ID,
          direction: pD,
          point: iD
        } = CD, fD = ID instanceof HTMLElement && vC(ID, DD) ? ID : null;
        if (!pD) {
          const CD = this.focused;
          return fD ? this.setFocus(fD, {
            scroll: !1,
            byUser: !0
          }) : this.focusNearest(DD, iD), void(this.focused && this.focused === CD && this.focused.isConnected && Gp(null, this.focused, XC(this.focused)))
        }
        if (this.dpadRepeats.get(pD).update(!0, cD), fD) return this.setFocus(fD, {
          scroll: !1,
          byUser: !0
        }), void this.move(DD, pD, cD, !0);
        const bD = this.getEnabledCandidates(DD),
          QD = bD.map(Rp),
          wD = BI(new DOMRect(iD.x, iD.y, 0, 0), QD, pD),
          SD = wD >= 0 ? wD : oI(iD, QD);
        this.setFocus(SD >= 0 ? bD[SD] : this.pickInitial(DD), {
          byUser: !0
        })
      }
      focusNearest(DD, CD) {
        const cD = this.getEnabledCandidates(DD),
          ID = oI(CD, cD.map(Rp));
        this.setFocus(ID >= 0 ? cD[ID] : this.pickInitial(DD), {
          byUser: !0
        })
      }
      pickDefault(DD) {
        let {
          includeDisabled: CD = !1,
          exclude: cD = null
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const ID = [...DD.querySelectorAll(Vp)].filter((ID => (null === cD || void 0 === cD || !cD.has(ID)) && (CD ? oC(ID, DD) : vC(ID, DD)))),
          pD = Up(ID.map(Pp));
        return pD >= 0 ? ID[pD] : null
      }
      pickNewAreaStart(DD, CD) {
        const cD = [...DD.querySelectorAll(Lp)].filter(wC);
        for (const ID of [...NC(DD), ...cD]) {
          if (CD.has(ID)) continue;
          const DD = this.getEnabledCandidates(ID),
            cD = Up(DD.map(Pp));
          if (cD >= 0) return DD[cD]
        }
        return null
      }
      pickInitial(DD) {
        let {
          includeDisabled: CD = !1,
          waitForContent: cD = !1,
          enteredAtMs: ID = this.enteredLayerAtMs
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const pD = this.pickDefault(DD, {
          includeDisabled: CD
        });
        if (pD) return pD;
        const iD = DD => CD ? MC(DD) : this.getEnabledCandidates(DD);
        let fD = [];
        for (const yD of NC(DD))
          if (fD = iD(yD), fD.length > 0) break;
        if (0 === fD.length) {
          if (cD && performance.now() - ID < 1e4 && (DD => {
              for (const CD of DD.querySelectorAll("[data-pad-initial-area]"))
                if (!QC(CD, !1)) return !0;
              return !1
            })(DD)) return null;
          fD = iD(DD)
        }
        const bD = fD.map(Rp),
          QD = zD(null),
          wD = fD.filter(((DD, CD) => jD(bD[CD], QD))),
          SD = wD.length > 0 ? wD : fD,
          BD = Up(SD.map(Pp));
        return BD >= 0 ? SD[BD] : null
      }
      validateFocus(DD, CD) {
        if (this.pendingFocus) {
          var cD, ID;
          const pD = this.pendingFocus.find();
          if (pD && vC(pD, DD.root)) return this.pendingFocus = null, void this.setFocus(pD, {
            byUser: !0
          });
          CD > this.pendingFocus.untilMs && (null === (cD = (ID = this.pendingFocus).holdWhile) || void 0 === cD || !cD.call(ID)) && (this.pendingFocus = null)
        }
        const pD = this.focused,
          iD = !!pD && vC(pD, DD.root);
        if (!(!iD && pD && pD === this.lastActivated && CD - this.lastActivatedAtMs < 5e3 && DD.root.contains(pD) && wC(pD) && SC(pD))) {
          if (!iD && this.restoreOnFocusLoss && this.layerKey) return this.restoreOnFocusLoss = !1, this.movedInLayer = !1, this.scrolledInLayer = !1, this.enteredLayerAtMs = CD, void this.restoreLayerFocus(DD.root, !0);
          if ((!iD || !this.movedInLayer && !this.scrolledInLayer) && !(CD - this.lastRefocusCheckMs < (iD ? 200 : 50)))
            if (this.lastRefocusCheckMs = CD, iD) {
              const cD = CD - this.enteredLayerAtMs < 15e3 ? this.pickPreferred(DD.root) : null,
                ID = null !== cD && void 0 !== cD ? cD : this.restoredFromMemory ? null : this.pickDefault(DD.root);
              ID && ID !== pD && this.setFocus(ID)
            } else {
              if (this.lastFocusedCentre && this.movedInLayer) {
                const CD = this.pendingFocus;
                return this.focusNearest(DD.root, this.lastFocusedCentre), void(this.pendingFocus = CD)
              }
              this.setFocus(this.pickPreferred(DD.root))
            }
        }
      }
      handleButtons(DD, CD) {
        if (DD.wasPressed((0, SD.h)("menuToggleCursor"))) return yp(this.getHandoff()), !0;
        if (DD.wasPressed((0, SD.h)("menuBack"))) {
          const DD = aC(CD.root);
          return DD ? this.setFocus(DD, {
            byUser: !0
          }) : zI(this, CD.root) || (LC(CD.root) ? this.returnToOpener(CD.root) : this.backToStrip(CD.root) || cp()), !0
        }
        const cD = (0, SD.h)("menuConfirm");
        var ID, pD;
        DD.wasPressed(cD) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (ID = null === (pD = this.focused) || void 0 === pD ? void 0 : pD.getAttribute("data-pad-repeat")) && void 0 !== ID ? ID : null, this.confirmRepeated = DD.wokeDevice, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now()));
        if (DD.wasReleased(cD)) {
          const DD = this.confirmPressedOn;
          if (this.confirmPressedOn = null, DD && !this.confirmRepeated && DD === this.focused && DD.isConnected && !SC(DD)) {
            const cD = DD.matches("[data-pad-tab]") ? DD.closest(lp) : null;
            cD ? this.enterTab(DD, cD, CD.root, performance.now()) : this.activate(DD)
          }
          return !0
        }
        return this.repeatConfirm(DD, cD), YI(this, DD, CD)
      }
      repeatConfirm(DD, CD) {
        const cD = this.confirmPressedOn;
        cD && null !== this.confirmRepeatKey && DD.isHeld(CD) && (cD === this.focused && cD.isConnected && !SC(cD) && cD.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? cD.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.confirmRepeated = !0, this.activate(cD)) : this.confirmRepeatKey = null)
      }
      backToStrip(DD) {
        const CD = this.focused;
        if (!(0, yD.h)().menuBackToCategories) return !1;
        const cD = null !== CD && void 0 !== CD && CD.isConnected ? this.tabStripNav.backToStrip(CD, this.getEnabledCandidates(DD), DD) : null;
        return cD && this.setFocus(cD, {
          byUser: !0
        }), null !== cD
      }
      returnToOpener(DD) {
        const CD = this.lastActivatedKey;
        CD && (this.lastActivatedKey = null, this.focusWhenFound((() => {
          var cD;
          return null !== (cD = this.getEnabledCandidates(DD).find((DD => TC(DD) === CD))) && void 0 !== cD ? cD : null
        })))
      }
      activate(DD) {
        var CD;
        if ((0, mp.c)(DD) || zC(DD)) return;
        this.lastActivatedKey = null !== (CD = TC(DD)) && void 0 !== CD ? CD : this.lastActivatedKey, this.lastActivated = DD, this.lastActivatedAtMs = performance.now(), this.rememberFocus(DD);
        const cD = this.layerRoot;
        if (cD) {
          const CD = new Set(cD.querySelectorAll(Vp)),
            ID = new Set(cD.querySelectorAll(`[data-pad-initial-area], ${Lp}`)),
            pD = this.lastActivatedAtMs;
          this.focusWhenFound((() => {
            var pD;
            return vC(DD, cD) ? null : null !== (pD = this.pickDefault(cD, {
              exclude: CD
            })) && void 0 !== pD ? pD : this.pickNewAreaStart(cD, ID)
          }), 5e3, (() => DD.isConnected && SC(DD) && performance.now() - pD < 6e4))
        }
        qC(DD), VC(DD)
      }
      handleDirections(DD, CD, cD, ID) {
        const pD = nI(CD.layer.kind) ? (0, SD.h)("chat") : null;
        for (const bD of tD.x) {
          this.dpadRepeats.get(bD).update(DD.isHeld(bD), cD) && (bD !== pD || DD.wasPressed(bD)) && this.move(CD.root, bD, cD, !0)
        }
        const iD = ID ? (0, tD.i)(DD.leftStick, (0, yD.h)().moveDeadzone) : {
            x: 0,
            y: 0
          },
          fD = this.stickRepeat.update((0, tD.db)(iD), cD);
        if (fD && this.move(CD.root, fD, cD, !0), this.retryMove && cD >= this.retryMove.atMs) {
          const {
            direction: DD
          } = this.retryMove;
          this.retryMove = null, this.move(CD.root, DD, cD, !1)
        }
      }
      move(DD, CD, cD, ID) {
        var pD;
        let iD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.pendingFocus && this.pendingFocus === (null === (pD = this.tabOpenWait) || void 0 === pD ? void 0 : pD.wait) && CD === this.tabOpenWait.direction) return;
        this.pendingFocus = null;
        const fD = this.focused;
        if (!fD || !fD.isConnected) {
          const CD = this.pickInitial(DD);
          return void(CD && this.setFocus(CD, {
            byUser: !0
          }))
        }
        const bD = "Left" === CD || "Right" === CD,
          QD = bD ? (0, mp.c)(fD) : null;
        if (QD) return void QD.adjust("Left" === CD ? -1 : 1);
        const wD = DD => null !== DD.closest("[data-pad-friends-column]"),
          SD = wD(fD),
          BD = Rp(fD),
          yD = bD || fD.closest(lp) ? null : (DD => {
            const CD = new Map;
            return cD => {
              const ID = cD.closest(lp);
              if (!ID) return !1;
              let pD = CD.get(ID);
              if (void 0 === pD) {
                const cD = Rp(ID);
                pD = SI(DD, cD) && (cD.right <= DD.left || cD.left >= DD.right), CD.set(ID, pD)
              }
              return pD
            }
          })(BD),
          MD = null !== fD.closest(jp),
          tD = this.getEnabledCandidates(DD).filter((DD => DD !== fD && (bD || wD(DD) === SD) && !(null !== yD && void 0 !== yD && yD(DD)) && (MD || !DD.closest(jp)))),
          ZD = tD.map(Rp),
          oD = xD(fD, "y", DD),
          vD = zD(oD);
        if (!iD && !jD(BD, vD)) {
          const DD = tD.filter(((DD, CD) => jD(ZD[CD], vD)));
          if (DD.length > 0) {
            const CD = {
              x: vD.left + vD.width / 2,
              y: vD.top + vD.height / 2
            };
            return void this.setFocus(DD[oI(CD, DD.map(Rp))], {
              byUser: !0
            })
          }
        }
        const ND = bD ? ((DD, CD, cD) => {
            const ID = Rp(DD),
              pD = DD.closest(lp),
              iD = pD ? Rp(pD) : null;
            return CD.map(((CD, fD) => {
              const bD = cD[fD];
              if (bD.bottom > ID.top && bD.top < ID.bottom) return !0;
              const QD = CD.closest(lp);
              if (pD && iD) return QD !== pD && (null !== QD || bD.bottom <= iD.top || bD.top >= iD.bottom);
              if (QD) return !SI(ID, Rp(QD));
              let wD = DD;
              for (let cD = DD.parentElement; cD && !cD.contains(CD); cD = cD.parentElement) wD = cD;
              const SD = Rp(wD);
              return bD.right > SD.left && bD.left < SD.right
            }))
          })(fD, tD, ZD) : void 0,
          gD = bD && !fD.closest(lp) ? (DD => DD.map((DD => !DD.closest(Op))))(tD) : void 0,
          XD = ((DD, CD) => {
            const cD = [];
            for (let pD = DD; pD; pD = pD.parentElement) cD.push(pD);
            const ID = new Map;
            return cD.forEach(((DD, CD) => {
              ID.set(DD, cD.length - 1 - CD)
            })), CD.map((DD => {
              for (let CD = DD; CD; CD = CD.parentElement) {
                const DD = ID.get(CD);
                if (void 0 !== DD) return DD
              }
              return -1
            }))
          })(fD, tD),
          mD = bD ? "x" : "y",
          nD = xD(fD, mD, DD);
        let OD = BI(BD, ZD, CD, XD, ND, gD);
        if (OD >= 0 && nD && !nD.contains(tD[OD])) {
          const DD = tD.flatMap(((DD, CD) => nD.contains(DD) ? [CD] : [])),
            cD = CD => CD && DD.map((DD => CD[DD])),
            ID = BI(BD, DD.map((DD => ZD[DD])), CD, DD.map((DD => XD[DD])), cD(ND), cD(gD));
          OD = ID >= 0 ? DD[ID] : OD
        }
        if (OD >= 0) return void this.moveTo(fD, tD[OD], tD, DD, CD, iD);
        if (!ID) return;
        const PD = "Right" === CD || "Down" === CD ? 1 : -1;
        if (nD && aD(nD, mD, PD)) {
          const DD = "y" === mD ? nD.clientHeight : nD.clientWidth;
          VD(nD, mD, PD * DD * .5), this.retryMove = {
            direction: CD,
            atMs: cD + 80
          }
        }
      }
      moveTo(DD, CD, cD, ID, pD, iD) {
        const fD = this.tabStripNav.findTabContent(DD, CD, cD);
        fD && "true" !== DD.dataset.padSelected ? this.openTab(DD, fD, ID, pD) : iD && !fD || this.setFocus(this.tabStripNav.redirect(DD, CD, cD, ID), {
          byUser: !0
        })
      }
      openTab(DD, CD, cD, ID) {
        const pD = CD.parentElement;
        qC(DD), this.focusWhenFound((() => "true" !== DD.dataset.padSelected ? null : CD.isConnected ? this.tabStripNav.pickContentStart(CD, this.getEnabledCandidates(cD), cD) : pD ? this.tabStripNav.pickReplacedContentStart(DD, pD, this.getEnabledCandidates(cD), cD) : null), 3e3), this.tabOpenWait = {
          wait: this.pendingFocus,
          direction: ID
        }
      }
      enterTab(DD, CD, cD, ID) {
        this.move(cD, (DD => {
          const CD = [...DD.querySelectorAll(qp)].filter((CD => CD.closest(xp) === DD));
          if (CD.length >= 2) {
            const DD = CD[0].getBoundingClientRect(),
              cD = CD[1].getBoundingClientRect();
            return Math.abs(cD.top - DD.top) > Math.abs(cD.left - DD.left) ? "Right" : "Down"
          }
          const cD = DD.getBoundingClientRect();
          return cD.height > cD.width ? "Right" : "Down"
        })(CD), ID, !1, !0), this.focused !== DD || this.pendingFocus || this.activate(DD)
      }
      handleScroll(DD, CD) {
        const cD = (0, tD.i)(DD.rightStick, .2);
        if (0 === cD.x && 0 === cD.y) return void(this.scrollRemainder = {
          x: 0,
          y: 0
        });
        const ID = DD.dtMs / 1e3;
        for (const iD of ["x", "y"]) {
          var pD;
          const DD = cD[iD];
          if (0 === DD) continue;
          const fD = null !== (pD = xD(this.focused, iD, CD.root)) && void 0 !== pD ? pD : JD(CD.root, iD);
          if (!fD) continue;
          const bD = Math.sign(DD) * DD * DD * 1500 * ID + this.scrollRemainder[iD],
            QD = Math.trunc(bD);
          this.scrollRemainder[iD] = bD - QD, 0 !== QD && (VD(fD, iD, QD), this.scrolledInLayer = !0)
        }
      }
    };
    var Wp = cD(7899);
    var sp = cD(8402);
    const Ep = {
        duration: 80,
        strongMagnitude: .2,
        weakMagnitude: .2,
        needsPadInUse: !1
      },
      ep = {
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
          ...Ep,
          minIntervalMs: 1e3
        },
        preview: {
          ...Ep,
          minIntervalMs: 0
        }
      };
    const hp = new class {
        constructor(DD) {
          this.deps = DD, this.lastPlayedMs = {}, this.loggedFailure = !1, this.logFailure = DD => {
            this.loggedFailure || (this.loggedFailure = !0, console.warn("Controller vibration failed; further failures are not logged.", DD))
          }
        }
        play(DD, CD) {
          const cD = ep[DD];
          if (!this.deps.isVibrationOn() || cD.needsPadInUse && !this.deps.isPadInUse()) return !1;
          const ID = this.lastPlayedMs[DD];
          if (void 0 !== ID && CD - ID < cD.minIntervalMs) return !1;
          const pD = this.deps.getActuator();
          if (!pD) return !1;
          this.lastPlayedMs[DD] = CD;
          const {
            duration: iD,
            strongMagnitude: fD,
            weakMagnitude: bD
          } = cD;
          try {
            pD.playEffect("dual-rumble", {
              duration: iD,
              strongMagnitude: fD,
              weakMagnitude: bD
            }).catch(this.logFailure)
          } catch (QD) {
            this.logFailure(QD)
          }
          return !0
        }
      }({
        getActuator: () => (DD => {
          const CD = null === DD || void 0 === DD ? void 0 : DD.vibrationActuator;
          return "function" === typeof(null === CD || void 0 === CD ? void 0 : CD.playEffect) ? CD : null
        })(fD.e.getActiveGamepad()),
        isVibrationOn: () => (0, yD.h)().vibration,
        isPadInUse: MD.i
      }),
      rp = DD => {
        hp.play(DD, performance.now())
      };
    var Ap = cD(7906),
      Fp = cD(2737),
      Di = cD(107),
      Ci = cD(36),
      ci = cD(659);
    class Ii {
      constructor(DD) {
        this.deps = DD
      }
      check() {
        let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const CD = this.deps.isPadActive() ? this.deps.getPadFamily() : null;
        if (!CD) return "skipped";
        const cD = DD ? this.deps.getVisitId() : this.deps.peekVisitId();
        return null === cD || this.deps.readReportedVisitId() === cD ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(cD), this.deps.Nt(CD, this.deps.getInputType()), "reported") : "notReady"
      }
    }
    const ii = "controllerUsageReportedVisit";
    var fi = cD(1340),
      bi = cD(1701),
      Qi = cD(646),
      wi = cD(1440),
      Si = cD(1250);
    const Bi = DD => ({
        translationKey: `controller:${DD}`
      }),
      yi = {
        A: "A",
        B: "B",
        X: "X",
        Y: "Y",
        LB: "LB",
        RB: "RB",
        LT: "LT",
        RT: "RT",
        View: Bi("padButtonView"),
        Menu: Bi("padButtonMenu"),
        LS: "L3",
        RS: "R3",
        Up: Bi("padButtonDpadUp"),
        Down: Bi("padButtonDpadDown"),
        Left: Bi("padButtonDpadLeft"),
        Right: Bi("padButtonDpadRight"),
        Home: Bi("padButtonHome"),
        LeftStick: Bi("padButtonLeftStick"),
        RightStick: Bi("padButtonRightStick")
      },
      Mi = {
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
          View: Bi("padButtonCreate"),
          Menu: Bi("padButtonOptions")
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
      ti = (DD, CD) => {
        var cD;
        const ID = null !== (cD = Mi[DD][CD]) && void 0 !== cD ? cD : yi[CD];
        return "string" === typeof ID ? ID : (0, pD.y)(Si.e.get().getCurrentLanguageCode(), ID.translationKey)
      },
      Zi = DD => {
        let {
          glyph: CD,
          family: cD,
          className: ID
        } = DD;
        const pD = (0, MD.B)(),
          iD = null !== cD && void 0 !== cD ? cD : pD,
          fD = (0, Ap.c)(iD, CD);
        return (0, GD.jsx)("span", {
          className: TD()("ControllerGlyph", ID),
          role: "img",
          "aria-label": ti(iD, CD),
          style: {
            "--pad-glyph-mask": `url(${fD})`,
            "--pad-glyph-aspect": (0, Ap.b)(iD, CD)
          }
        })
      };
    var oi = cD(1872);
    const vi = DD => {
      let {
        action: CD
      } = DD;
      const {
        t: cD
      } = (0, pD.F)();
      switch (CD.kind) {
        case "reload":
          return (0, GD.jsx)("span", {
            children: cD("controller:gameplayReload")
          });
        case "specialAction":
          return null;
        case "customButton":
          return (0, GD.jsx)(oi.c, {
            text: CD.description ? [{
              icon: CD.icon
            }, ` ${CD.description}`] : [{
              icon: CD.icon
            }]
          });
        case "touchButton":
          return (0, GD.jsx)(oi.c, {
            text: CD.label
          })
      }
    };
    var Ni = cD(8409);
    const gi = DD => {
      let {
        hold: CD
      } = DD;
      return (0, GD.jsx)("div", {
        className: "DropStackFillTrack",
        style: {
          "--pad-drop-stack-hold": `${CD.holdMs}ms`
        },
        children: (0, GD.jsx)("div", {
          className: "DropStackFillBar"
        })
      }, CD.id)
    };
    var Xi = cD(8430),
      mi = cD(8439),
      ni = cD(8448),
      Oi = cD(8428);
    const Pi = () => {
        const {
          gameState: DD
        } = (0, QD.o)(["gameState"]), CD = (0, MD.z)(), [ID, pD] = (0, lD.useState)(!1), [iD, fD] = (0, lD.useState)(!1);
        return (0, lD.useEffect)((() => {
          "inGame" === DD && pD(!0)
        }), [DD]), (0, lD.useEffect)((() => {
          if (!ID) return;
          let DD = null,
            CD = !1;
          return (Qi.q ? Promise.all([cD.e(69), cD.e(259), cD.e(199), cD.e(217), cD.e(216), cD.e(84)]).then((() => cD(39650))).then((DD => DD.startWasmPadGameplay)) : Promise.all([cD.e(69), cD.e(226), cD.e(225), cD.e(94), cD.e(72), cD.e(71), cD.e(70), cD.e(218), cD.e(182), cD.e(222), cD.e(74), cD.e(196), cD.e(215), cD.e(219), cD.e(93), cD.e(83), cD.e(113), cD.e(234), cD.e(73), cD.e(112), cD.e(155), cD.e(217), cD.e(188)]).then((() => cD(39757))).then((DD => DD.startPadGameplay))).then((cD => {
            CD || (DD = cD())
          })).catch((DD => {
            console.error("Pad gameplay failed to load", DD), CD || fD(!0)
          })), () => {
            var cD;
            CD = !0, null === (cD = DD) || void 0 === cD || cD()
          }
        }), [ID]), (0, lD.useEffect)((() => {
          iD && CD && (fD(!1), fi.NotificationProvider.showPromptPopup({
            title: "controller:gameplayLoadFailedTitle",
            subtitle: "controller:gameplayLoadFailedSubtitle",
            confirmText: "settingsMenu:reloadPagePopupConfirm",
            confirmTooltip: "",
            cancelText: "general:cancel",
            cancelTooltip: ""
          }).getResult().then((DD => {
            !0 === DD && (0, bi.reloadBloxd)()
          })))
        }), [iD, CD]), (0, GD.jsxs)(GD.Fragment, {
          children: [(0, GD.jsx)(Hi, {}), (0, GD.jsx)(Ui, {}), (0, GD.jsx)(xi, {})]
        })
      },
      Hi = () => {
        const {
          t: DD
        } = (0, pD.F)(), CD = (0, MD.z)(), {
          gameState: cD,
          isUiHidden: ID
        } = (0, QD.o)(["gameState", "isUiHidden"]), {
          hideButtonHints: iD
        } = (0, yD.l)(), fD = (0, Ni.j)(), bD = (0, Ni.n)(), [wD, BD] = (0, lD.useState)(ni.b);
        return (0, wi.f)(Oi.t, BD), !CD || iD || ID || "inGame" !== cD || !fD && !wD ? null : (0, GD.jsxs)("div", {
          className: "PadActionHint SmallTextBold",
          children: [fD && (0, GD.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, GD.jsx)(Zi, {
              glyph: (0, SD.h)("actionButton")
            }), (0, GD.jsx)(vi, {
              action: fD
            }), bD && (0, GD.jsx)("span", {
              className: "PadActionHintMore",
              children: DD("controller:gameplayActionWheelHint")
            })]
          }), wD && (0, GD.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, GD.jsx)(Zi, {
              glyph: (0, SD.h)("pickBlock")
            }), (0, GD.jsx)("span", {
              children: DD("controller:gameplayPickBlock")
            })]
          })]
        })
      },
      Ui = () => {
        const {
          t: DD
        } = (0, pD.F)(), CD = (0, MD.z)(), {
          gameState: cD,
          isUiHidden: ID
        } = (0, QD.o)(["gameState", "isUiHidden"]), [iD, fD] = (0, lD.useState)(Xi.c);
        return (0, wi.f)(Oi.p, fD), CD && !ID && "inGame" === cD && iD ? (0, GD.jsxs)("div", {
          className: "PadDropStackFill SmallTextBold",
          children: [(0, GD.jsx)("span", {
            children: DD("controller:gameplayDropStack")
          }), (0, GD.jsx)(gi, {
            hold: iD
          })]
        }) : null
      },
      xi = () => {
        const {
          t: DD
        } = (0, pD.F)(), CD = (0, MD.z)(), {
          gameState: cD,
          isUiHidden: ID
        } = (0, QD.o)(["gameState", "isUiHidden"]), {
          hideButtonHints: iD
        } = (0, yD.l)(), [fD, bD] = (0, lD.useState)(mi.e);
        return (0, wi.f)(Oi.m, bD), CD && !ID && "inGame" === cD && fD ? (0, GD.jsxs)("div", {
          className: "PadAttackLatchedHint SmallTextBold",
          children: [!iD && (0, GD.jsx)(Zi, {
            glyph: (0, SD.h)("attack")
          }), (0, GD.jsx)("span", {
            children: DD("controller:gameplayAttackLatched")
          })]
        }) : null
      };
    var qi = cD(8456),
      Ji = cD(1928),
      Ki = cD(2358),
      ai = cD(7883);
    const Vi = DD => DD && !(0, qi.b)(Ji.d.get("shopInfo")),
      zi = () => {
        const DD = "inGame" === (0, QD.o)(["gameState"]).gameState;
        return (0, Ki.e)("shopInfo", (() => {
          (0, ai.f)(Vi(DD))
        })), (0, lD.useEffect)((() => {
          (0, ai.f)(Vi(DD))
        }), [DD]), null
      },
      ji = () => {
        const {
          t: DD
        } = (0, pD.F)(), {
          hideButtonHints: CD
        } = (0, yD.l)();
        (0, MD.B)();
        const cD = (0, Jc.i)();
        return (0, lD.useEffect)((() => (() => {
          const DD = BD.d.register({
              name: "inventory",
              isActive: hc.isActive,
              onFrame: hc.onFrame,
              onDeactivate: hc.onDeactivate,
              wakePressActs: hc.wakePressActs
            }),
            CD = DD => {
              hc.noteRealPointer(DD), hc.shouldBlockRealPointer(DD) && DD.stopPropagation()
            };
          for (const fD of rc) window.addEventListener(fD, CD, !0);
          const cD = (0, YC.i)((() => {
              "inventory" !== BD.d.getActiveConsumerName() && hc.forgetSurface()
            })),
            ID = DD => {
              const CD = DD.target;
              (0, MD.i)() && AD(CD) && CD.closest(Mc) && (0, YC.h)() && (0, YC.p)(CD)
            };
          document.addEventListener("focusout", ID, !0);
          const {
            invalidate: pD,
            onScroll: iD
          } = hc.targets;
          return document.addEventListener("scroll", iD, !0), window.addEventListener("resize", pD), () => {
            DD(), cD();
            for (const DD of rc) window.removeEventListener(DD, CD, !0);
            document.removeEventListener("scroll", iD, !0), document.removeEventListener("focusout", ID, !0), window.removeEventListener("resize", pD), hc.targets.disconnect()
          }
        })()), []), (0, GD.jsxs)(GD.Fragment, {
          children: [(0, GD.jsx)(YD, {
            placer: hc.ring,
            className: "InventorySlotCursorRing"
          }), cD.showing && !CD && (0, GD.jsx)("div", {
            className: "InventorySlotCursorHints SmallTextBold",
            children: dC(cD).map((CD => {
              let {
                actions: ID,
                labelKey: pD
              } = CD;
              return (0, GD.jsxs)("div", {
                className: "InventorySlotCursorHint",
                children: [ID.map((DD => (0, GD.jsx)(Zi, {
                  glyph: (0, SD.h)(DD)
                }, DD))), (0, GD.jsx)("span", {
                  children: DD(`controller:${pD}`)
                }), "inventoryDrop" === pD && cD.dropStackHold && (0, GD.jsx)(gi, {
                  hold: cD.dropStackHold
                })]
              }, pD)
            }))
          })]
        })
      },
      li = [{
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
      Li = DD => Array.from(DD).map((DD => ({
        type: "char",
        char: DD,
        width: 1
      }))),
      Ti = function(DD) {
        return {
          type: "command",
          command: DD,
          width: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
        }
      },
      Gi = [Ti("page", 2), Ti("otherPage"), Ti("caretLeft"), Ti("space", 3), Ti("caretRight"), Ti("close", 1.5), Ti("submit", 1.5)],
      Ri = [Ti("page", 2), Ti("otherPage"), Ti("caretLeft"), Ti("space", 2), Ti("caretRight"), Ti("newline"), Ti("close", 1.5), Ti("submit", 1.5)],
      ki = [
        [...Li("1234567890"), Ti("backspace")], Li("qwertyuiop/"), Li("asdfghjkl'?"), [Ti("shift", 2), ...Li("zxcvbnm,.")]
      ],
      di = [
        [...Li("1234567890"), Ti("backspace")], Li("!@#$%^&*()/"), Li('-_=+[]{};:"'), Li("~`|\\<>'\u20ac\xa3,.")
      ],
      Yi = {
        letters: ki,
        accents: [
          [...Li("1234567890"), Ti("backspace")], Li("\xe1\xe9\xed\xf3\xfa\xe0\xe8\xec\xf2\xf9\xf1"), Li("\xe2\xea\xee\xf4\xfb\xe4\xeb\xef\xf6\xfc\xe7"), [Ti("shift", 2), ...Li("\xe3\xf5\xdf\u0153\u011f\u015f\u0131\xbf\xa1")]
        ],
        symbols: di
      },
      Wi = new Set(["de", "es", "fr", "it", "nl", "pt", "pt-BR", "tr", "vi"]),
      si = (DD, CD) => "letters" === DD ? CD ? {
        page: "accents",
        otherPage: "symbols"
      } : {
        page: "symbols",
        otherPage: "accents"
      } : {
        page: "letters",
        otherPage: "accents" === DD ? "symbols" : "accents"
      },
      Ei = function(DD, CD) {
        const cD = ((DD, CD) => [...Yi[DD], CD ? Ri : Gi])(DD, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
        if (0 === CD) return cD;
        const ID = Math.min(2, ei(cD[0]) / CD);
        return [Array.from({
          length: CD
        }, ((DD, CD) => ({
          type: "phrase",
          phraseIndex: CD,
          width: ID
        }))), ...cD]
      },
      ei = DD => DD.reduce(((DD, CD) => DD + CD.width), 0),
      ui = DD => Math.max(...DD.map(ei)),
      ri = (DD, CD) => {
        const cD = DD[CD.row];
        let ID = (ui(DD) - ei(cD)) / 2;
        for (let pD = 0; pD < CD.col; pD++) ID += cD[pD].width;
        return ID + cD[CD.col].width / 2
      },
      Ai = (DD, CD, cD) => {
        let ID = 0,
          pD = 1 / 0;
        for (let iD = 0; iD < DD[CD].length; iD++) {
          const fD = Math.abs(ri(DD, {
            row: CD,
            col: iD
          }) - cD);
          fD < pD - 1e-9 && (ID = iD, pD = fD)
        }
        return ID
      },
      Fi = (DD, CD) => {
        const cD = Math.max(0, Math.min(DD.length - 1, CD.row));
        return {
          row: cD,
          col: Math.max(0, Math.min(DD[cD].length - 1, CD.col))
        }
      },
      Df = (DD, CD, cD) => "once" === DD && CD - cD <= 400 ? "caps" : "off" === DD ? "once" : "off",
      Cf = (DD, CD) => "once" === DD && (DD => DD.toLowerCase() !== DD.toUpperCase())(CD) ? "off" : DD,
      If = (DD, CD, cD) => {
        if ("symbols" === CD || "off" === cD) return DD;
        const ID = DD.toUpperCase();
        return 1 === ID.length ? ID : DD
      };
    var pf = cD(8336);
    const ff = ["controller:keyboardPhraseGg", "controller:keyboardPhraseHi", "controller:keyboardPhraseThanks", "controller:keyboardPhraseGl", "controller:keyboardPhraseBrb", "controller:keyboardPhraseYes", "controller:keyboardPhraseNo", "controller:keyboardPhraseHelp"];
    const bf = new class {
        constructor() {
          this.lastSendMs = -1 / 0
        }
        claim(DD) {
          return !(DD - this.lastSendMs < 2e3) && (this.lastSendMs = DD, !0)
        }
      },
      Qf = {
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
      wf = ["Vb", "nameTag"],
      Sf = DD => {
        const CD = DD.target instanceof HTMLTextAreaElement && !wf.includes(DD.kind);
        return Ei(DD.page, "chat" === DD.kind ? ff.length : 0, CD)
      },
      Bf = DD => {
        const CD = DD.getBoundingClientRect(),
          cD = window.innerHeight,
          ID = CD.top + CD.height / 2 < cD / 2 ? "bottom" : "top",
          pD = "bottom" === ID ? cD - CD.bottom - 6 : CD.top - 6;
        return {
          placement: ID,
          maxHeightPx: Math.min(.46 * cD, Math.max(.3 * cD, pD))
        }
      },
      yf = DD => {
        (0, gI.k)(DD) ? (0, gI.c)().close(): (Yp.noteChosenStop(DD), DD.blur())
      };
    class Mf {
      constructor(DD) {
        this.host = DD, this.lastShiftPressMs = -1 / 0, this.phraseTexts = [], this.phrasesFill = !1
      }
      setPhraseRow(DD, CD) {
        this.phraseTexts = DD, this.phrasesFill = CD
      }
      pressKey(DD) {
        const CD = this.host.getState(),
          cD = Sf(CD),
          ID = cD[DD.row][DD.col];
        this.host.setState({
          ...CD,
          focus: DD,
          preferredX: ri(cD, DD)
        }), "char" === ID.type ? this.typeChar(ID.char) : "command" === ID.type ? this.runCommand(ID.command) : this.sendPhrase(ID.phraseIndex)
      }
      runCommand(DD) {
        const CD = this.host.getState();
        switch (DD) {
          case "backspace":
            iC(CD.target);
            break;
          case "space":
            pC(CD.target, " ");
            break;
          case "newline":
            pC(CD.target, "\n");
            break;
          case "caretLeft":
            fC(CD.target, -1);
            break;
          case "caretRight":
            fC(CD.target, 1);
            break;
          case "shift": {
            const DD = performance.now();
            this.host.setState({
              ...CD,
              shift: Df(CD.shift, DD, this.lastShiftPressMs)
            }), this.lastShiftPressMs = DD;
            break
          }
          case "page":
          case "otherPage": {
            const cD = si(CD.page, CD.accentsFirst)[DD];
            this.host.setState({
              ...CD,
              page: cD,
              focus: Fi(Sf({
                ...CD,
                page: cD
              }), CD.focus)
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
            (0, gI.k)(CD.target) && (0, gI.c)().selectNextChannel()
        }
      }
      submit() {
        var DD, CD;
        const {
          target: cD
        } = this.host.getState();
        this.host.hide(), (0, gI.k)(cD) ? (0, gI.c)().submit() : (Yp.noteChosenStop(cD), null === (DD = (CD = (0, gI.g)(cD)).submit) || void 0 === DD || DD.call(CD), document.activeElement === cD && cD.blur())
      }
      close() {
        const {
          target: DD
        } = this.host.getState();
        this.host.hide(), yf(DD)
      }
      typeChar(DD) {
        const {
          target: CD,
          page: cD,
          shift: ID
        } = this.host.getState();
        pC(CD, If(DD, cD, ID)), this.host.setState({
          ...this.host.getState(),
          shift: Cf(ID, DD)
        })
      }
      sendPhrase(DD) {
        if (this.phrasesFill) {
          const {
            target: CD
          } = this.host.getState(), cD = this.phraseTexts[DD];
          cD && (CD.setSelectionRange(0, CD.value.length), pC(CD, cD))
        } else bf.claim(performance.now()) && (this.host.hide(), (0, gI.c)().sendLine(this.phraseTexts[DD]))
      }
    }
    const tf = {
        initialDelayMs: 380,
        intervalMs: 85
      },
      Zf = {
        initialDelayMs: 400,
        intervalMs: 55
      };
    class of {
      constructor(DD, CD) {
        this.host = DD, this.editor = CD, this.lastDirection = null, this.navRepeat = new tD.b((0, ZD.b)(tf)), this.commandRepeats = new Map(li.filter((DD => {
          let {
            repeats: CD
          } = DD;
          return CD
        })).map((DD => {
          let {
            command: CD
          } = DD;
          return [CD, (0, ZD.b)(Zf)]
        })))
      }
      reset() {
        this.navRepeat.reset();
        for (const DD of this.commandRepeats.values()) DD.reset()
      }
      onVisibleFrame(DD) {
        const CD = performance.now();
        for (const {
            command: pD,
            action: iD
          }
          of li) {
          const cD = (0, SD.h)(iD),
            ID = this.commandRepeats.get(pD);
          if ((ID ? ID.update(DD.isHeld(cD), CD) : DD.wasPressed(cD)) && (this.editor.runCommand(pD), !this.host.getState().visible)) return
        }
        if (DD.wasPressed((0, SD.h)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
        const cD = this.readNavDirection(DD);
        this.lastDirection = cD;
        const ID = this.navRepeat.update(cD, CD);
        ID && this.navigate(ID)
      }
      onHiddenFrame(DD, CD) {
        var cD;
        if (DD.wasPressed((0, SD.h)("keyboardClose"))) return void yf(CD);
        const ID = (0, SD.h)("keyboardType");
        if (DD.wasPressed(ID)) return BD.d.consumeButton(ID), void this.host.open(CD);
        const pD = this.readNavDirection(DD),
          iD = null !== pD && pD !== this.lastDirection;
        if (this.lastDirection = pD, !iD || (0, gI.k)(CD)) return;
        const fD = (null === (cD = Cp()) || void 0 === cD ? void 0 : cD.root.contains(CD)) || null !== CD.closest(".EntireInventoryWrapper");
        yf(CD), fD && BD.d.handOffHeldInput()
      }
      navigate(DD) {
        const CD = this.host.getState();
        if ("Up" === DD && 0 === CD.focus.row && "chat" === CD.kind) return (0, gI.c)().stepHistory(), void this.host.setState({
          ...CD
        });
        const cD = ((DD, CD, cD, ID) => {
          if ("Left" === cD || "Right" === cD) {
            const ID = DD[CD.row].length,
              pD = (CD.col + ("Right" === cD ? 1 : -1) + ID) % ID,
              iD = {
                row: CD.row,
                col: pD
              };
            return {
              pos: iD,
              preferredX: ri(DD, iD)
            }
          }
          const pD = (CD.row + ("Down" === cD ? 1 : -1) + DD.length) % DD.length;
          return {
            pos: {
              row: pD,
              col: Ai(DD, pD, ID)
            },
            preferredX: ID
          }
        })(Sf(CD), CD.focus, DD, CD.preferredX);
        this.host.setState({
          ...CD,
          focus: cD.pos,
          preferredX: cD.preferredX
        })
      }
      readNavDirection(DD) {
        for (const CD of tD.x)
          if (DD.isHeld(CD)) return CD;
        return (0, tD.db)((0, tD.i)(DD.leftStick, (0, yD.h)().moveDeadzone))
      }
    }
    const vf = ["Up", "Down", "Left", "Right"],
      Nf = new Set(["CapsLock", "Control", "Fn", "FnLock", "Hyper", "NumLock", "ScrollLock", "Shift", "Super"]);
    const gf = new class {
      constructor() {
        this.state = Qf, this.listeners = new Set, this.ownedField = null, this.pendingChatInput = null, this.pendingChatTimeout = 0, this.savedInputMode = null, this.editor = new Mf(this), this.padInput = new of(this, this.editor)
      }
      getState() {
        return this.state
      }
      setState(DD) {
        const CD = DD.visible !== this.state.visible;
        this.state = DD;
        for (const cD of this.listeners) cD();
        CD && wD.i.Uo(WD.c, DD.visible)
      }
      subscribe(DD) {
        return this.listeners.add(DD), () => {
          this.listeners.delete(DD)
        }
      }
      install() {
        const DD = BD.d.register({
            name: "keyboard",
            isActive: () => this.state.visible || AD(document.activeElement),
            onFrame: DD => {
              this.onFrame(DD)
            },
            onDeactivate: () => {
              this.padInput.reset()
            },
            wakePressActs: DD => vf.includes(DD) || !this.state.visible && DD === (0, SD.h)("keyboardType")
          }),
          CD = DD => {
            const CD = DD.target;
            AD(CD) && (CD === this.pendingChatInput || (0, MD.i)() ? this.open(CD) : this.state.visible && CD !== this.state.target && (this.ownedField = null, this.hide()))
          },
          cD = () => {
            setTimeout((() => {
              this.releaseLostField()
            }), 0)
          },
          ID = DD => {
            DD.isTrusted && this.state.visible && (DD => !DD.repeat && !Nf.has(DD.key) && !(0, pf.e)(DD.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(DD.key))(DD) && this.hide()
          },
          pD = () => {
            this.state.visible && this.setState({
              ...this.state,
              ...Bf(this.state.target)
            })
          };
        document.addEventListener("focusin", CD, !0), document.addEventListener("focusout", cD, !0), window.addEventListener("keydown", ID, !0), window.addEventListener("resize", pD);
        const iD = wD.i.subscribe(Oi.e, (() => {
            this.openChat()
          })),
          fD = wD.i.subscribe(WD.f, (DD => {
            this.openForField(DD)
          }));
        return () => {
          DD(), document.removeEventListener("focusin", CD, !0), document.removeEventListener("focusout", cD, !0), window.removeEventListener("keydown", ID, !0), window.removeEventListener("resize", pD), wD.i.unsubscribe(iD), wD.i.unsubscribe(fD), this.clearPendingChat(), this.hide(), this.ownedField = null
        }
      }
      openChat() {
        const DD = (0, gI.c)();
        DD ? document.activeElement !== DD.input ? (this.clearPendingChat(), this.pendingChatInput = DD.input, this.pendingChatTimeout = window.setTimeout((() => {
          this.pendingChatInput = null
        }), 250), DD.open()) : this.open(DD.input) : console.warn("controllerOpenChat with no chat mounted")
      }
      openForField(DD) {
        AD(DD) ? (document.activeElement !== DD && DD.focus(), document.activeElement === DD && this.open(DD)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", DD)
      }
      open(DD) {
        var CD;
        if (this.clearPendingChat(), this.ownedField = DD, this.state.visible && this.state.target === DD) return;
        this.restoreInputMode(), (DD => {
          FD(DD) && 0 === DD.selectionStart && 0 === DD.selectionEnd && DD.setSelectionRange(DD.value.length, DD.value.length)
        })(DD), this.savedInputMode = DD.getAttribute("inputmode"), DD.setAttribute("inputmode", "none");
        const cD = {
          ...Qf,
          visible: !0,
          target: DD,
          kind: (0, gI.k)(DD) ? "chat" : null !== (CD = (0, gI.g)(DD).kind) && void 0 !== CD ? CD : null,
          accentsFirst: (ID = Si.e.get().getCurrentLanguageCode(), Wi.has(ID)),
          ...Bf(DD)
        };
        var ID;
        const pD = Sf(cD),
          iD = ((DD, CD) => {
            for (let cD = 0; cD < DD.length; cD++) {
              const ID = DD[cD].findIndex((DD => "char" === DD.type && DD.char === CD));
              if (-1 !== ID) return {
                row: cD,
                col: ID
              }
            }
            return null
          })(pD, "q");
        this.padInput.reset(), this.setState({
          ...cD,
          focus: iD,
          preferredX: ri(pD, iD)
        })
      }
      hide() {
        this.state.visible && (this.restoreInputMode(), this.padInput.reset(), this.setState(Qf))
      }
      onFrame(DD) {
        if (this.releaseLostField()) return;
        const CD = document.activeElement;
        this.state.visible ? this.padInput.onVisibleFrame(DD) : AD(CD) && this.padInput.onHiddenFrame(DD, CD)
      }
      releaseLostField() {
        const DD = this.ownedField;
        return !(null === DD || DD.isConnected && document.activeElement === DD) && (this.ownedField = null, this.hide(), !0)
      }
      clearPendingChat() {
        window.clearTimeout(this.pendingChatTimeout), this.pendingChatInput = null
      }
      restoreInputMode() {
        const {
          target: DD
        } = this.state;
        DD && (null === this.savedInputMode ? DD.removeAttribute("inputmode") : DD.setAttribute("inputmode", this.savedInputMode), this.savedInputMode = null)
      }
    };
    var Xf = cD(8472);
    const mf = new Map(li.map((DD => {
        let {
          command: CD,
          action: cD
        } = DD;
        return [CD, cD]
      }))),
      nf = {
        letters: "ABC",
        accents: "\xe0\xe9",
        symbols: "&123"
      },
      Of = {
        chat: "controller:keyboardTargetChat",
        sign: "controller:keyboardTargetSign",
        nameTag: "controller:keyboardTargetNameTag",
        book: "controller:keyboardTargetBook",
        Vb: "controller:keyboardTargetBookTitle"
      },
      Pf = DD => {
        const CD = (() => {
          const [, DD] = (0, lD.useReducer)((DD => DD + 1), 0);
          return DD
        })();
        (0, lD.useEffect)((() => {
          if (!DD) return;
          const cD = ["input", "select", "selectionchange", "keyup", "pointerup"];
          for (const pD of cD) DD.addEventListener(pD, CD);
          document.addEventListener("selectionchange", CD);
          const ID = new MutationObserver(CD);
          return ID.observe(DD, {
            attributeFilter: ["placeholder"]
          }), () => {
            ID.disconnect();
            for (const ID of cD) DD.removeEventListener(ID, CD);
            document.removeEventListener("selectionchange", CD)
          }
        }), [DD, CD])
      },
      Hf = DD => {
        DD.preventDefault()
      },
      Uf = DD => {
        "mouse" !== DD.pointerType && DD.preventDefault()
      },
      xf = () => {
        var DD;
        const {
          t: CD
        } = (0, pD.F)(), cD = (() => {
          const [DD, CD] = (0, lD.useState)(gf.getState());
          return (0, lD.useEffect)((() => gf.subscribe((() => {
            CD(gf.getState())
          }))), []), DD
        })(), ID = (0, MD.z)(), iD = (0, lD.useRef)(null);
        (0, yD.l)(), (0, MD.B)(), (0, lD.useEffect)((() => {
          const DD = gf.install(),
            CD = null;
          return () => {
            DD(), null === CD || void 0 === CD || CD()
          }
        }), []);
        const fD = (0, lD.useMemo)((() => ff.map((DD => CD(DD)))), [CD]),
          bD = cD.visible && "chat" === cD.kind ? cD.target : null;
        Pf(bD);
        const QD = null !== (DD = null === bD || void 0 === bD ? void 0 : bD.value) && void 0 !== DD ? DD : "",
          wD = ((DD, CD, cD) => {
            if (!DD.startsWith("/")) return [];
            const ID = [];
            for (let pD = CD.length - 1; pD >= 0 && ID.length < cD; pD--) {
              const cD = CD[pD].trim();
              cD.startsWith(DD) && cD !== DD && !ID.includes(cD) && ID.push(cD)
            }
            return ID
          })(QD, QD.startsWith("/") ? (0, Xf.e)() : [], ff.length),
          BD = QD.startsWith("/"),
          tD = BD ? ff.map(((DD, CD) => {
            var cD;
            return null !== (cD = wD[CD]) && void 0 !== cD ? cD : ""
          })) : fD;
        if ((0, lD.useEffect)((() => {
            gf.editor.setPhraseRow(tD, BD)
          })), (0, lD.useEffect)((() => {
            const DD = iD.current;
            if (DD) return DD.addEventListener("touchstart", Hf, {
              passive: !1
            }), () => {
              DD.removeEventListener("touchstart", Hf)
            }
          }), [cD.visible]), !cD.visible) return null;
        const ZD = Sf(cD),
          oD = ui(ZD),
          vD = DD => "char" === DD.type ? If(DD.char, cD.page, cD.shift) : "phrase" === DD.type ? tD[DD.phraseIndex] : (DD => {
            switch (DD) {
              case "backspace":
                return "\u232b";
              case "shift":
                return "caps" === cD.shift ? "\u21ea" : "\u21e7";
              case "page":
              case "otherPage":
                return nf[si(cD.page, cD.accentsFirst)[DD]];
              case "space":
                return CD("controller:keyboardSpace");
              case "caretLeft":
                return "\u2190";
              case "caretRight":
                return "\u2192";
              case "newline":
                return "\u21b5";
              case "submit":
                return CD("chat" === cD.kind ? "controller:keyboardSend" : "controller:keyboardDone");
              case "close":
                return "\u2715";
              case "channel":
                return "\u21c4"
            }
          })(DD.command),
          ND = DD => {
            gf.editor.pressKey(DD)
          };
        return (0, GD.jsxs)("div", {
          ref: iD,
          className: TD()(gI.o, "top" === cD.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
            PadKeyboardMultiline: cD.target instanceof HTMLTextAreaElement
          }),
          style: {
            "--pad-keyboard-rows": ZD.length,
            "--pad-keyboard-height": `${cD.maxHeightPx}px`
          },
          onPointerDown: Uf,
          onMouseDown: Hf,
          children: [(0, GD.jsx)(qf, {
            target: cD.target,
            label: cD.kind ? CD(Of[cD.kind]) : cD.target.placeholder || CD("controller:keyboardTargetText")
          }), (0, GD.jsx)("div", {
            className: "PadKeyboardRows",
            children: ZD.map(((DD, CD) => (0, GD.jsx)("div", {
              className: TD()("PadKeyboardRow", {
                PadKeyboardPhraseRow: "phrase" === DD[0].type
              }),
              children: DD.map(((DD, pD) => {
                const iD = ID && cD.focus.row === CD && cD.focus.col === pD,
                  fD = "command" === DD.type ? mf.get(DD.command) : void 0;
                return (0, GD.jsx)("div", {
                  className: "PadKeyboardKeySlot",
                  style: {
                    width: DD.width / oD * 100 + "%"
                  },
                  children: (0, GD.jsxs)("div", {
                    className: TD()("PadKeyboardKey", {
                      PadKeyboardKeyFocused: iD,
                      PadKeyboardKeyCommand: "command" === DD.type,
                      PadKeyboardKeyPhrase: "phrase" === DD.type,
                      PadKeyboardKeyActive: "command" === DD.type && "shift" === DD.command && "off" !== cD.shift,
                      PadKeyboardKeySubmit: "command" === DD.type && "submit" === DD.command
                    }),
                    role: "button",
                    onClick: () => {
                      ND({
                        row: CD,
                        col: pD
                      })
                    },
                    onTouchEnd: DD => {
                      var cD, ID;
                      DD.preventDefault(), cD = DD.changedTouches[0], ID = DD.currentTarget.getBoundingClientRect(), cD && cD.clientX >= ID.left && cD.clientX <= ID.right && cD.clientY >= ID.top && cD.clientY <= ID.bottom && ND({
                        row: CD,
                        col: pD
                      })
                    },
                    children: [(0, GD.jsx)("span", {
                      className: "PadKeyboardKeyLabel",
                      children: vD(DD)
                    }), ID && fD && (0, GD.jsx)(Zi, {
                      className: "PadKeyboardKeyGlyph",
                      glyph: (0, SD.h)(fD)
                    })]
                  })
                }, pD)
              }))
            }, CD)))
          })]
        })
      },
      qf = DD => {
        let {
          target: CD,
          label: cD
        } = DD;
        Pf(CD);
        const ID = (0, lD.useRef)(null),
          pD = (0, lD.useRef)(null),
          iD = CD instanceof HTMLTextAreaElement;
        (0, lD.useLayoutEffect)((() => {
          const DD = ID.current,
            CD = pD.current;
          iD ? DD.scrollTop = CD.offsetTop - DD.clientHeight / 2 : DD.scrollLeft = CD.offsetLeft - DD.clientWidth / 2
        }));
        const {
          value: fD,
          start: bD,
          end: QD
        } = DC(CD), wD = "password" === CD.type ? "\u2022".repeat(fD.length) : fD;
        return (0, GD.jsxs)("div", {
          className: "PadKeyboardPreview",
          children: [(0, GD.jsx)("div", {
            className: "PadKeyboardPreviewLabel SmallTextBold",
            children: cD
          }), (0, GD.jsxs)("div", {
            ref: ID,
            className: TD()("PadKeyboardPreviewText", {
              PadKeyboardPreviewMultiline: iD
            }),
            children: [(0, GD.jsx)("span", {
              children: wD.slice(0, bD)
            }), (0, GD.jsx)("span", {
              ref: pD,
              className: "PadKeyboardCaret"
            }), bD !== QD && (0, GD.jsx)("span", {
              className: "PadKeyboardPreviewSelection",
              children: wD.slice(bD, QD)
            }), (0, GD.jsx)("span", {
              children: wD.slice(QD)
            }), 0 === wD.length && CD.placeholder && CD.placeholder !== cD && (0, GD.jsx)("span", {
              className: "PadKeyboardPreviewPlaceholder",
              children: CD.placeholder
            })]
          })]
        })
      };
    var Jf = cD(1388),
      Kf = cD(3220);
    const af = function() {
        for (var DD = arguments.length, CD = new Array(DD), cD = 0; cD < DD; cD++) CD[cD] = arguments[cD];
        return CD.map(SD.h)
      },
      Vf = (DD, CD) => {
        const cD = jI(DD);
        return cD ? [{
          glyphs: [cD],
          labelKey: CD
        }] : []
      },
      zf = [".BottomMiddleElements", ".BottomLeftElements > *", ".BottomRightElements > *", ".MiddleTextBottom .MiddleText"],
      jf = "--pad-hint-bar-clearance",
      lf = "[data-pad-hint-bar-avoid]",
      Lf = DD => {
        const CD = [];
        for (const cD of DD) wC(cD) && CD.push(cD.getBoundingClientRect());
        return CD
      },
      Tf = DD => {
        if (!DD) return null;
        const CD = Cp(),
          cD = CD ? Lf(((DD, CD) => {
            const cD = DD.closest(lf);
            return cD ? [cD] : ("popup" === CD ? document : DD).querySelectorAll(lf)
          })(CD.root, CD.layer.kind)) : [],
          ID = !CD || CD.root.hasAttribute("data-pad-shows-hud");
        if (((0, Kf.i)(null === CD || void 0 === CD ? void 0 : CD.layer.kind, (0, Kf.m)()) || ID) && cD.push(...Lf(document.querySelectorAll(zf.join(",")))), 0 === cD.length) return null;
        const {
          width: pD,
          height: iD
        } = DD.getBoundingClientRect(), fD = window.innerHeight - 8, bD = (0, Kf.p)(fD, {
          width: pD,
          height: iD
        }, window.innerWidth / 2, cD, 8);
        return bD === fD ? null : Math.round(window.innerHeight - bD)
      },
      Gf = DD => {
        const CD = document.documentElement.style,
          cD = DD ? `${Math.round(window.innerHeight-DD.getBoundingClientRect().top)}px` : "";
        CD.getPropertyValue(jf) !== cD && (cD ? CD.setProperty(jf, cD) : CD.removeProperty(jf))
      },
      Rf = () => {
        const {
          t: DD
        } = (0, pD.F)(), {
          hideButtonHints: CD
        } = (0, yD.l)(), cD = (0, MD.z)(), [ID, iD] = (0, lD.useState)(!1), [fD, wD] = (0, lD.useState)([]), [ZD, oD] = (0, lD.useState)(null), vD = (0, lD.useRef)(null), ND = (0, lD.useRef)(null);
        (0, wi.f)(WD.c, (DD => {
          iD(DD)
        })), (0, wi.f)(Kf.o, (() => {
          var DD;
          null === (DD = ND.current) || void 0 === DD || DD.call(ND)
        }));
        const gD = cD && !CD && !ID;
        return (0, lD.useEffect)((() => {
          if (!gD) return;
          let DD = null;
          const CD = () => {
            const CD = (() => {
                var DD;
                const CD = BD.d.getActiveConsumerName(),
                  cD = (0, Kf.f)();
                if (cD) {
                  const DD = (0, SD.h)(cD),
                    CD = "emoteWheel" === cD && "wheel" === (0, yD.h)().emoteButton || !(0, tD.D)(BD.d.getLastFrame().values, DD) ? {
                      glyphs: af("menuConfirm"),
                      labelKey: "controller:menusSelect"
                    } : {
                      glyphs: [DD],
                      labelKey: "controller:wheelReleaseToPick"
                    };
                  return [{
                    glyphs: [(0, SD.z)(DD)],
                    labelKey: "controller:wheelChoose"
                  }, CD, {
                    glyphs: af("menuBack"),
                    labelKey: "controller:wheelClose"
                  }]
                }
                const ID = Cp();
                if (!ID || "focus" !== CD && "cursor" !== CD) return (0, Kf.c)(SD.h);
                const pD = [],
                  iD = {
                    glyphs: af("menuBack"),
                    labelKey: "controller:menusBack"
                  },
                  fD = lC(ID.root),
                  bD = fD ? !SC(fD) : Boolean(ID.layer.close),
                  wD = !fD && ID.layer.closeLabelKey ? ID.layer.closeLabelKey : iD.labelKey,
                  MD = bD ? [{
                    ...iD,
                    labelKey: wD
                  }] : [],
                  ZD = nI(ID.layer.kind) ? [{
                    glyphs: af("chat"),
                    labelKey: "controller:menusQuickChat"
                  }] : [];
                if ("cursor" === CD) return pD.push({
                  glyphs: af("menuConfirm"),
                  labelKey: "controller:menusClick"
                }), pD.push({
                  glyphs: af("menuSecondary"),
                  labelKey: "controller:menusRightClick"
                }), pD.push(...MD), pD.push(...ZD), pD.push({
                  glyphs: ["RightStick"],
                  labelKey: "controller:menusScroll"
                }), op() && pD.push({
                  glyphs: af("menuToggleCursor"),
                  labelKey: "controller:menusFocusMode"
                }), pD;
                const oD = Yp.getFocused();
                oD && (0, mp.c)(oD) ? pD.push({
                  glyphs: ["Left", "Right"],
                  labelKey: "controller:menusAdjust"
                }) : oD && zC(oD) ? pD.push({
                  glyphs: [],
                  labelKey: "controller:menusUseMouse"
                }) : pD.push({
                  glyphs: af("menuConfirm"),
                  labelKey: "controller:menusSelect"
                });
                const vD = oD ? null === (DD = pI(oD)) || void 0 === DD ? void 0 : DD.dataset.padSecondary : void 0;
                vD && pD.push({
                  glyphs: af("menuSecondary"),
                  labelKey: vD
                }), pD.push(...null !== oD && void 0 !== oD && oD.closest("[data-pad-friends-column]") ? [iD] : MD), pD.push(...ZD);
                const ND = "home" === ID.layer.kind;
                TI(ID.root) || !UI(ID.root) && !GI(ID) ? ND && pD.push({
                  glyphs: af("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusRows"
                }) : pD.push({
                  glyphs: af("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusTabs"
                }), ND && (pD.push(...Vf("inventory", "controller:menusFriends")), vD || pD.push({
                  glyphs: af("menuSecondary"),
                  labelKey: "controller:menusSearch"
                }), pD.push(...Vf("pause", "controller:menusSettings")), pD.push(...Vf("leaderboard", "controller:menusNotifications")));
                const gD = QD.d.get("openEverythingMenuName");
                return "inGame" === QD.d.get("gameState") && "popup" !== ID.layer.kind && null !== gD && ((0, DI.n)(gD) ? pD.push(...Vf("leaderboard", "controller:menusClose")) : gD !== Fc.q.LOBBY_LEADERBOARD && pD.push(...Vf("leaderboard", "controller:menusLobby"))), pD.push({
                  glyphs: af("menuToggleCursor"),
                  labelKey: "controller:menusCursorMode"
                }), pD
              })(),
              cD = Tf(vD.current),
              ID = ((DD, CD) => `${DD.map((DD=>`${DD.glyphs.join("+")}:${DD.labelKey}`)).join("|")}@${CD}`)(CD, cD);
            ID !== DD && (DD = ID, (0, bD.unstable_batchedUpdates)((() => {
              wD(CD), oD(cD)
            }))), Gf(vD.current)
          };
          CD(), ND.current = CD;
          const cD = requestAnimationFrame(CD),
            ID = setInterval(CD, 150);
          return () => {
            ND.current = null, cancelAnimationFrame(cD), clearInterval(ID), Gf(null)
          }
        }), [gD]), (0, lD.useLayoutEffect)((() => {
          if (!gD) return;
          if (0 === fD.length) return void Gf(null);
          const DD = Tf(vD.current);
          DD === ZD ? Gf(vD.current) : oD(DD)
        }), [gD, fD, ZD]), gD && 0 !== fD.length ? (0, GD.jsx)("div", {
          ref: vD,
          className: "PadButtonHintBar SmallTextBold",
          style: null === ZD ? void 0 : {
            bottom: ZD
          },
          "aria-hidden": !0,
          children: fD.map((CD => (0, GD.jsxs)("div", {
            className: "PadButtonHint",
            children: [CD.glyphs.map((DD => (0, GD.jsx)(Zi, {
              glyph: DD,
              className: "PadButtonHintGlyph"
            }, DD))), (0, GD.jsx)("span", {
              children: DD(CD.labelKey)
            })]
          }, CD.labelKey)))
        }) : null
      },
      kf = [bC, "label", "[data-pad-slider]"].join(","),
      df = "data-pad-cursor-probe",
      Yf = DD => {
        var CD;
        const cD = (DD => {
          const CD = [];
          for (let ID = DD; ID && ID !== document.body && ID !== document.documentElement && (CD.push(ID), !(CD.length > 8)); ID = ID.parentElement);
          const cD = document.documentElement.classList.contains(MD.p) ? CD[CD.length - 1] : void 0;
          null === cD || void 0 === cD || cD.setAttribute(df, "");
          try {
            return CD.map((DD => ({
              element: DD,
              cursor: getComputedStyle(DD).cursor
            })))
          } finally {
            null === cD || void 0 === cD || cD.removeAttribute(df)
          }
        })(DD);
        if ("pointer" !== (null === (CD = cD[0]) || void 0 === CD ? void 0 : CD.cursor)) return null;
        let ID = 0;
        for (; ID + 1 < cD.length && "pointer" === cD[ID + 1].cursor;) ID++;
        return cD[ID].element
      },
      Wf = (DD, CD, cD, ID) => {
        const pD = ID.root.contains(DD) ? ID.root : null;
        for (let iD = DD; iD && iD !== document.body && iD !== document.documentElement; iD = iD.parentElement) {
          if (iD instanceof HTMLElement && UD(iD, CD) && aD(iD, CD, cD)) return iD;
          if (iD === pD) break
        }
        return "home" === ID.layer.kind || "gamePage" === ID.layer.kind ? ((DD, CD) => {
          const cD = document.scrollingElement;
          return cD instanceof HTMLElement && ![document.documentElement, document.body].some((CD => {
            const cD = getComputedStyle(CD),
              ID = "y" === DD ? cD.overflowY : cD.overflowX;
            return "hidden" === ID || "clip" === ID
          })) && aD(cD, DD, CD) ? cD : null
        })(CD, cD) : null
      };
    const sf = new class {
        constructor() {
          this.state = {
            x: 0,
            y: 0,
            speedRamp: 0
          }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this.confirmRepeat = (0, ZD.b)(tD.r), this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.layerRoot = null, this.layerOrder = 0, this.layerPoints = new WeakMap, this.page = null, this.pendingPageStart = null
        }
        install() {
          const DD = BD.d.register({
              name: "cursor",
              isActive: () => "cursor" === vp(),
              onFrame: DD => {
                this.onFrame(DD)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: DD => (0, BD.g)(DD) || DD === (0, SD.h)("menuConfirm") && jC((0, MD.c)())
            }),
            CD = (0, EI.n)((DD => {
              const CD = DD.getRoot();
              CD && this.layerPoints.delete(CD), CD === this.layerRoot && (this.layerRoot = null)
            })),
            cD = wD.i.subscribe("appManagerUpdated|activeInputDevice", (DD => {
              "gamepad" !== DD && this.active && !this.hidden && this.hide()
            }));
          return () => {
            DD(), CD(), wD.i.unsubscribe(cD), this.deactivate()
          }
        }
        getHighlighted() {
          return this.isVisible() ? this.interactive : null
        }
        isVisible() {
          return this.active && !this.hidden && (0, MD.i)()
        }
        getPoint() {
          return {
            x: this.state.x,
            y: this.state.y
          }
        }
        hide() {
          this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.Uo()
        }
        activate(DD) {
          this.active = !0, this.hidden = !1;
          const CD = Mp();
          !CD || CD.root && CD.root !== DD.root ? this.jumpTo(this.hasPosition ? this.getPoint() : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          }) : (this.setLayer(DD), this.jumpTo(CD.point))
        }
        jumpTo(DD) {
          this.state = {
            x: DD.x,
            y: DD.y,
            speedRamp: 0
          }, this.hasPosition = !0, this.lastHitTestMs = -1 / 0
        }
        deactivate() {
          this.active && (this.active = !1, this.page = null, this.pendingPageStart = null, this.cancelPress(), this.clearHover(), this.draggedSlider = null, this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.Uo())
        }
        onFrame(DD) {
          const CD = Cp();
          if (!CD) return;
          if (this.active || this.activate(CD), this.followPage(CD)) return;
          this.followLayer(CD);
          const cD = DD.wokeDevice ? (0, MD.c)() : null;
          if (cD && this.jumpTo(cD), !(0, MD.i)()) return void this.hide();
          const ID = (0, SD.h)("menuToggleCursor");
          if (DD.wasPressed(ID)) return BD.d.consumeButton(ID), void yp(this.getHandoff(null));
          if (this.handBackToFocus(DD)) return;
          const pD = (0, SD.h)("menuConfirm"),
            iD = (0, SD.h)("menuSecondary");
          if (DD.wasPressed((0, SD.h)("menuBack"))) return aC(CD.root) || LC(CD.root) || cp(), void this.Uo();
          if (dI(null, DD, CD)) return DD.wasReleased(pD) && this.press && (this.updateHit(!1), this.updateConfirm(DD, pD)), void this.Uo();
          if (document.pointerLockElement) return void this.hide();
          const fD = Np() ? {
              x: 0,
              y: 0
            } : (DD => {
              const CD = (DD, CD) => (DD ? 1 : 0) - (CD ? 1 : 0);
              return {
                x: CD(DD.isHeld("Right"), DD.isHeld("Left")),
                y: CD(DD.isHeld("Down"), DD.isHeld("Up"))
              }
            })(DD),
            bD = (0, yD.h)().moveDeadzone,
            QD = ((DD, CD) => {
              const cD = (0, tD.i)(DD, XD(CD));
              return Math.hypot(cD.x, cD.y)
            })(DD.leftStick, bD) > 0 || 0 !== fD.x || 0 !== fD.y;
          if (this.hidden) {
            const CD = DD.wasPressed(pD),
              cD = DD.wasPressed(iD);
            if (!QD && !OD(DD.rightStick) && !CD && !cD && !DD.wokeDevice) return void this.Uo();
            if (this.hidden = !1, this.updateHit(!1), CD || cD) return CD && (this.press = {
              kind: "ignored"
            }, DD.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.Uo()
          }
          this.movePendingPageStart(QD);
          const wD = this.getPoint();
          this.state = nD(this.state, {
            stick: DD.leftStick,
            moveDeadzone: bD,
            dpad: fD,
            dtMs: DD.dtMs,
            cursorSpeedPercent: (0, yD.h)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: this.getAssistContext()
          });
          const ZD = this.state.x !== wD.x || this.state.y !== wD.y,
            oD = [pD, iD].some((CD => DD.wasPressed(CD) || DD.wasReleased(CD)));
          (ZD || oD || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(ZD), this.updateConfirm(DD, pD), this.updateSecondary(DD, iD), this.updateScroll(DD, CD), this.Uo()
        }
        followPage(DD) {
          const CD = "home" === DD.layer.kind || "gamePage" === DD.layer.kind,
            cD = this.page;
          if (this.page = CD ? {
              key: (0, EI.q)(DD.layer),
              root: DD.root
            } : null, !this.page || !cD || cD.root !== DD.root || cD.key === this.page.key) return !1;
          if (this.cancelPress(), this.secondaryArmed = !1, this.setLayer(DD), "hybrid" === Bp()) return Qp = null, fp = null, wp.lock(), !0;
          const {
            key: ID
          } = this.page;
          return this.pendingPageStart = {
            root: DD.root,
            key: ID,
            returning: Yp.notePageEnteredByCursor(ID),
            enteredAtMs: performance.now()
          }, !1
        }
        movePendingPageStart(DD) {
          const CD = this.pendingPageStart;
          if (!CD) return;
          if (DD || CD.root !== this.layerRoot) return void(this.pendingPageStart = null);
          const cD = CD.returning ? Yp.recallStop(CD.root, CD.key) : null;
          if (!cD && CD.returning && performance.now() - CD.enteredAtMs < 1e3) return;
          const ID = null !== cD && void 0 !== cD ? cD : Yp.pickInitial(CD.root, {
            includeDisabled: !0,
            waitForContent: !0,
            enteredAtMs: CD.enteredAtMs
          });
          ID && (this.pendingPageStart = null, this.jumpTo(XC(ID)))
        }
        setLayer(DD) {
          this.layerRoot = DD.root, this.layerOrder = DD.order
        }
        followLayer(DD) {
          var CD;
          if (DD.root === this.layerRoot) return;
          null !== (CD = this.layerRoot) && void 0 !== CD && CD.isConnected && this.layerPoints.set(this.layerRoot, this.getPoint()), this.cancelPress(), this.draggedSlider = null, this.secondaryArmed = !1;
          const cD = this.layerPoints.get(DD.root),
            ID = cD && DD.order <= this.layerOrder ? cD : Yp.getLayerStartPoint(DD.root);
          this.setLayer(DD), this.jumpTo(ID)
        }
        getHandoff(DD) {
          var CD;
          return {
            point: this.getPoint(),
            element: null !== (CD = this.interactive) && void 0 !== CD ? CD : this.findDraggedSliderNearby(),
            direction: DD
          }
        }
        findDraggedSliderNearby() {
          const DD = this.draggedSlider;
          if (null === DD || void 0 === DD || !DD.isConnected) return null;
          const CD = DD.getBoundingClientRect(),
            {
              y: cD
            } = this.getPoint();
          return cD >= CD.top - 40 && cD <= CD.bottom + 40 ? DD : null
        }
        handBackToFocus(DD) {
          if (!Np()) return !1;
          const CD = tD.x.find((CD => DD.wasPressed(CD)));
          return !!CD && (cD = this.getHandoff(CD), Qp = pp(cD), fp = null, wp.lock(), BD.d.handOffHeldInput(), !0);
          var cD
        }
        getAssistContext() {
          const DD = this.interactive;
          if (null === DD || void 0 === DD || !DD.isConnected) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const CD = DD.getBoundingClientRect();
          if (CD.width > .4 * window.innerWidth || CD.height > .4 * window.innerHeight) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const cD = (0, yD.h)().cursorMagnetism && !(0, sD.e)(DD) && !DD.closest("[data-pad-slider]"),
            ID = this.magnet && this.magnet !== DD && this.magnet.isConnected ? this.magnet.getBoundingClientRect() : CD;
          return {
            overInteractive: !0,
            magnetTarget: cD ? {
              x: ID.left + ID.width / 2,
              y: ID.top + ID.height / 2
            } : null
          }
        }
        updateHit(DD) {
          this.lastHitTestMs = performance.now();
          const CD = this.getPoint(),
            cD = document.elementFromPoint(CD.x, CD.y),
            ID = cD && !(0, vD.r)(cD) && (DD => {
              var CD;
              const cD = Cp();
              return !(cD && !cD.root.contains(DD) && !DD.closest(".tooltip-container")) || !(null !== (CD = document.getElementById("root")) && void 0 !== CD && CD.contains(DD))
            })(cD) ? cD : null;
          if (ID !== this.hit) return UC(this.hit, ID, CD), this.hit = ID, void this.setInteractive(ID ? (DD => {
            const CD = DD.closest(kf);
            if (CD) {
              var cD, ID;
              const DD = null !== (cD = null === (ID = CD.parentElement) || void 0 === ID ? void 0 : ID.closest("[data-pad-focusable]")) && void 0 !== cD ? cD : CD;
              return SC(DD) ? {
                element: null,
                magnet: null
              } : {
                element: DD,
                magnet: CD
              }
            }
            const pD = Yf(DD);
            return {
              element: pD,
              magnet: pD
            }
          })(ID) : {
            element: null,
            magnet: null
          });
          DD && ID && UC(ID, ID, CD)
        }
        setInteractive(DD) {
          let {
            element: CD,
            magnet: cD
          } = DD;
          this.interactive = CD, this.magnet = cD
        }
        clearHover() {
          this.hit && UC(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
            element: null,
            magnet: null
          })
        }
        beginPress() {
          const DD = this.hit;
          if (!DD || zC(DD)) return {
            kind: "ignored"
          };
          const CD = (0, mp.c)(DD),
            cD = DD.closest("[data-pad-slider]");
          return CD && cD ? {
            kind: "slider",
            slider: cD,
            adjuster: CD
          } : (OC(DD, this.getPoint()), {
            kind: "pointer",
            target: DD
          })
        }
        applySliderFraction(DD) {
          var CD;
          const cD = DD.slider.getBoundingClientRect(),
            ID = cD.height > cD.width,
            pD = null === (CD = DD.slider.querySelector("[data-pad-slider-handle]")) || void 0 === CD ? void 0 : CD.getBoundingClientRect(),
            iD = pD ? ID ? pD.height : pD.width : 0,
            fD = (ID ? cD.height : cD.width) - iD;
          if (fD <= 0) return;
          const bD = ID ? cD.bottom - iD / 2 - this.state.y : this.state.x - cD.left - iD / 2;
          DD.adjuster.setFraction(Math.max(0, Math.min(1, bD / fD)))
        }
        updateConfirm(DD, CD) {
          DD.wasPressed(CD) && (this.press = DD.wokeDevice ? {
            kind: "ignored"
          } : this.beginPress(), this.draggedSlider = "slider" === this.press.kind ? this.press.slider : null, this.beginRepeat());
          const cD = this.press;
          if (!cD) return;
          if (DD.isHeld(CD)) return "slider" === cD.kind && this.applySliderFraction(cD), void this.updateRepeat();
          this.press = null;
          const ID = this.repeated;
          if (this.endRepeat(), !DD.wasReleased(CD)) return void this.endPressWithoutClick(cD);
          const pD = this.getPoint(),
            iD = this.hit;
          if ("slider" === cD.kind && cD.adjuster.endDrag(), "pointer" === cD.kind) {
            const DD = null !== iD && void 0 !== iD ? iD : cD.target.isConnected ? cD.target : null;
            DD && PC(DD, pD);
            const CD = iD && cD.target.isConnected && !ID ? ((DD, CD) => {
              for (let cD = DD; cD; cD = cD.parentElement)
                if (cD.contains(CD)) return cD;
              return null
            })(cD.target, iD) : null;
            CD && (Yp.noteCursorActivation(CD), (0, vD.h)(CD, new MouseEvent("click", mC(pD, 0, 0))), VC(CD), gC(CD) && xC(CD))
          }
        }
        beginRepeat() {
          var DD, CD, cD;
          const ID = null !== (DD = null === (CD = this.hit) || void 0 === CD ? void 0 : CD.closest("[data-pad-repeat]")) && void 0 !== DD ? DD : null;
          this.repeatStop = ID, this.repeatKey = null !== (cD = null === ID || void 0 === ID ? void 0 : ID.getAttribute("data-pad-repeat")) && void 0 !== cD ? cD : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
        }
        updateRepeat() {
          const DD = this.repeatStop;
          if (!DD) return;
          const CD = this.hit;
          DD.isConnected && !SC(DD) && DD.getAttribute("data-pad-repeat") === this.repeatKey && CD && DD.contains(CD) ? DD.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, Yp.noteCursorActivation(DD), (0, vD.h)(DD, new MouseEvent("click", mC(this.getPoint(), 0, 0)))) : this.repeatStop = null
        }
        endRepeat() {
          this.repeatStop = null, this.repeated = !1
        }
        endPressWithoutClick(DD) {
          "slider" === DD.kind && DD.adjuster.endDrag(), "pointer" === DD.kind && DD.target.isConnected && PC(DD.target, this.getPoint())
        }
        cancelPress() {
          this.endRepeat(), this.press && (this.endPressWithoutClick(this.press), this.press = null)
        }
        updateSecondary(DD, CD) {
          DD.wasPressed(CD) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !DD.isHeld(CD) && (this.secondaryArmed = !1, DD.wasReleased(CD) && this.hit && HC(this.hit, this.getPoint(), 2))
        }
        updateScroll(DD, CD) {
          const cD = PD(DD.rightStick, DD.dtMs);
          if (0 === cD.x && 0 === cD.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          this.scrollRemainder = {
            x: this.scrollRemainder.x + cD.x,
            y: this.scrollRemainder.y + cD.y
          };
          const ID = Math.trunc(this.scrollRemainder.x),
            pD = Math.trunc(this.scrollRemainder.y);
          this.scrollRemainder = {
            x: this.scrollRemainder.x - ID,
            y: this.scrollRemainder.y - pD
          };
          const iD = this.hit;
          if (!iD) return;
          let fD = !1;
          if (0 !== pD) {
            const DD = Wf(iD, "y", pD > 0 ? 1 : -1, CD);
            DD && (DD.scrollBy({
              top: pD,
              behavior: "instant"
            }), fD = !0)
          }
          if (0 !== ID) {
            const DD = Wf(iD, "x", ID > 0 ? 1 : -1, CD);
            DD && (DD.scrollBy({
              left: ID,
              behavior: "instant"
            }), fD = !0)
          }
          fD && (this.lastHitTestMs = -1 / 0)
        }
        Uo() {
          RC.set({
            x: this.state.x,
            y: this.state.y,
            visible: this.isVisible(),
            pressed: null !== this.press && "ignored" !== this.press.kind
          })
        }
      },
      Ef = () => {
        const DD = (0, lD.useMemo)((() => new dD), []),
          CD = (0, MD.z)();
        return (0, lD.useEffect)((() => {
          if (!CD) return;
          let cD = 0,
            ID = {
              of: null,
              atMs: 0,
              list: []
            };
          const pD = document.getElementsByClassName(gp),
            iD = DD => {
              for (const CD of [...pD]) CD !== DD && CD.classList.remove(gp)
            },
            fD = () => {
              var CD;
              cD = requestAnimationFrame(fD);
              const pD = (() => {
                const DD = Yp.getFocused();
                if (Yp.isActive() && null !== DD && void 0 !== DD && DD.isConnected) return DD;
                const CD = sf.getHighlighted();
                return null !== CD && void 0 !== CD && CD.isConnected ? CD : null
              })();
              iD(pD), pD && !pD.classList.contains(gp) && pD.classList.add(gp);
              const bD = null !== (CD = null === pD || void 0 === pD ? void 0 : pD.closest("[data-pad-reticle-box]")) && void 0 !== CD ? CD : pD;
              DD.show(bD ? ((DD, CD) => {
                let cD = DD.left,
                  ID = DD.top,
                  pD = DD.right,
                  iD = DD.bottom;
                for (const fD of CD) {
                  if (!fD) continue;
                  const DD = zD(fD);
                  cD = Math.max(cD, DD.left), ID = Math.max(ID, DD.top), pD = Math.min(pD, DD.right), iD = Math.min(iD, DD.bottom)
                }
                return pD <= cD || iD <= ID ? null : {
                  left: cD,
                  top: ID,
                  width: pD - cD,
                  height: iD - ID
                }
              })(bD.getBoundingClientRect(), (DD => {
                const CD = performance.now();
                return (ID.of !== DD || CD - ID.atMs > 500) && (ID = {
                  of: DD,
                  atMs: CD,
                  list: [xD(DD, "y"), xD(DD, "x")]
                }), ID.list
              })(bD)) : null)
            };
          return cD = requestAnimationFrame(fD), () => {
            cancelAnimationFrame(cD), iD(null), DD.hide()
          }
        }), [CD, DD]), (0, GD.jsx)(YD, {
          placer: DD,
          className: "PadFocusRing"
        })
      },
      ef = (DD, CD) => {
        DD.style.transform = `translate3d(${CD.x}px, ${CD.y}px, 0)`, DD.classList.toggle("Visible", CD.visible), DD.classList.toggle("Pressed", CD.pressed)
      },
      uf = () => {
        const DD = (0, lD.useRef)(null);
        return (0, lD.useEffect)((() => {
          const CD = RC.subscribe((CD => {
            DD.current && ef(DD.current, CD)
          }));
          return DD.current && ef(DD.current, RC.get()), CD
        }), []), (0, GD.jsx)("div", {
          ref: DD,
          className: "PadCursorView",
          "aria-hidden": "true",
          children: (0, GD.jsx)("div", {
            className: "PadCursorGlyph",
            children: "+"
          })
        })
      },
      hf = "#ncmp__modal.ncmp__active",
      rf = [{
        id: "nitro-consent-banner",
        find: () => document.querySelector(hf) ? null : document.querySelector("#ncmp__tool > .ncmp__banner.ncmp__active"),
        startSelectors: ["[data-ncmp-cmd='reject']", "[data-ncmp-cmd='showModal']"]
      }, {
        id: "nitro-consent-modal",
        find: () => document.querySelector(hf),
        startSelectors: ["[data-ncmp-cmd='reject']"]
      }, {
        id: "google-consent",
        find: () => document.querySelector(".fc-consent-root"),
        startSelectors: [".fc-cta-do-not-consent", ".fc-cta-manage-options"]
      }],
      Af = "PadOverThirdParty",
      Ff = new Set(rf.map((DD => DD.id))),
      Db = () => {
        const DD = rf.map((DD => {
            let {
              id: CD,
              find: cD,
              startSelectors: ID
            } = DD;
            return (0, EI.o)({
              id: CD,
              kind: "popup",
              getRoot: () => {
                const DD = cD(),
                  CD = DD ? ((DD, CD) => {
                    var cD;
                    for (const ID of CD) {
                      const CD = DD.querySelector(ID);
                      if (CD) return CD
                    }
                    return null !== (cD = [...DD.querySelectorAll("button")].find((DD => !DD.matches(".fc-cta-consent, [data-ncmp-cmd='save']")))) && void 0 !== cD ? cD : null
                  })(DD, ID) : null;
                if (DD && CD && !CD.hasAttribute("data-pad-default-focus")) {
                  for (const CD of DD.querySelectorAll("[data-pad-default-focus]")) CD.removeAttribute("data-pad-default-focus");
                  for (const CD of DD.querySelectorAll("[data-pad-hint-bar-avoid]")) CD.removeAttribute("data-pad-hint-bar-avoid");
                  CD.setAttribute("data-pad-default-focus", ""), ((DD, CD) => {
                    let cD = DD;
                    for (let ID = DD.parentElement; ID && CD.contains(ID) && !(ID.getBoundingClientRect().height >= window.innerHeight / 2); ID = ID.parentElement) cD = ID;
                    return cD
                  })(CD, DD).setAttribute("data-pad-hint-bar-avoid", "")
                }
                return DD
              },
              close: null,
              memoryKey: null
            })
          })),
          CD = document.documentElement,
          cD = fD.e.onFrame((() => {
            const DD = (0, MD.i)() ? Cp() : null,
              cD = !!DD && (ID = DD.layer, Ff.has(ID.id));
            var ID;
            CD.classList.contains(Af) !== cD && CD.classList.toggle(Af, cD)
          }));
        return () => {
          for (const CD of DD) CD();
          cD(), CD.classList.remove(Af)
        }
      },
      Cb = "PadLargePointer",
      cb = () => {
        (0, lD.useEffect)((() => {
          const DD = (0, vD.p)(document.body),
            CD = Yp.install(),
            cD = sf.install(),
            ID = Db();
          return () => {
            DD(), CD(), cD(), ID()
          }
        }), []);
        const {
          largePointer: DD
        } = (0, yD.l)(), CD = (0, Jf.p)() && DD;
        return (0, lD.useEffect)((() => {
          if (CD) return document.documentElement.classList.add(Cb), () => {
            document.documentElement.classList.remove(Cb)
          }
        }), [CD]), (0, bD.createPortal)((0, GD.jsxs)(GD.Fragment, {
          children: [(0, GD.jsx)(Rf, {}), (0, GD.jsx)(Ef, {}), (0, GD.jsx)(uf, {})]
        }), document.body)
      };
    var Ib = cD(8482),
      pb = cD(8506),
      ib = cD(8492);
    cD(8514);
    const fb = (DD, CD) => {
        const [cD, ID] = (0, lD.useState)(!1), [pD, iD] = (0, lD.useState)(null), fD = (0, lD.useRef)(null), bD = (0, lD.useCallback)((DD => {
          fD.current = DD, iD(DD)
        }), []), QD = (0, lD.useCallback)((() => {
          ID(!1), bD(null)
        }), [bD]), SD = (0, lD.useCallback)((() => {
          ID(!0)
        }), []), BD = (0, lD.useCallback)(((DD, CD) => {
          bD((0, ib.F)(DD, CD, fD.current))
        }), [bD]);
        (0, lD.useLayoutEffect)((() => (CD(cD), (0, Kf.t)(DD, cD), wD.i.Uo(Kf.o), () => {
          CD(!1), (0, Kf.t)(DD, !1), wD.i.Uo(Kf.o)
        })), [cD, DD, CD]), (0, wi.f)("appManagerUpdated|activeInputDevice", (DD => {
          "gamepad" !== DD && QD()
        })), (0, wi.f)("appManagerUpdated|gameState", (DD => {
          "inGame" !== DD && QD()
        }));
        const yD = () => {
          (0, DI.s)() && QD()
        };
        return (0, wi.f)("appManagerUpdated|openEverythingMenuName", yD), (0, wi.f)("appManagerUpdated|openInGameMenuName", yD), {
          open: cD,
          picked: pD,
          pickedRef: fD,
          show: SD,
          aim: BD,
          close: QD
        }
      },
      bb = DD => {
        let {
          className: CD,
          slotCount: cD,
          picked: ID,
          slotLabel: pD,
          renderSlot: iD,
          centre: fD
        } = DD;
        const bD = Array.from({
          length: cD
        }, ((DD, CD) => CD));
        return (0, GD.jsx)("div", {
          className: TD()("EmoteWheelOverlay PadRadialWheel", CD),
          children: (0, GD.jsxs)("div", {
            className: "EmoteWheel",
            style: {
              width: 2 * ib.p + "rem",
              height: 2 * ib.p + "rem"
            },
            children: [(0, GD.jsxs)("svg", {
              className: "EmoteWheelSvg",
              viewBox: `0 0 ${ib.j} ${ib.j}`,
              children: [bD.map((DD => (0, GD.jsx)("path", {
                d: (0, ib.t)(DD, cD, ib.c, ib.e, ib.f),
                className: TD()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: DD === ID
                }),
                "aria-label": pD(DD)
              }, DD))), (0, GD.jsx)("circle", {
                className: "EmoteWheelOuterRing",
                cx: ib.c,
                cy: ib.c,
                r: ib.f
              }), (0, GD.jsx)("circle", {
                className: "EmoteWheelInnerRing",
                cx: ib.c,
                cy: ib.c,
                r: ib.e
              }), null !== ID && (0, GD.jsx)("path", {
                className: "EmoteWheelWedgeOutline",
                d: (0, ib.t)(ID, cD, ib.c, ib.e, ib.f)
              })]
            }), bD.map((DD => {
              const CD = (0, ib.y)(DD, cD);
              return (0, GD.jsx)("div", {
                className: TD()("PadRadialWheelSlot SmallTextBold", {
                  PadRadialWheelSlotPicked: DD === ID
                }),
                style: {
                  left: `calc(50% + ${ib.b*Math.cos(CD)}rem)`,
                  top: `calc(50% + ${ib.b*Math.sin(CD)}rem)`
                },
                "aria-hidden": !0,
                children: iD(DD)
              }, DD)
            })), (0, GD.jsx)("div", {
              className: "EmoteWheelHint SmallTextBold",
              children: fD
            })]
          })
        })
      },
      Qb = ff.length,
      wb = () => {
        const {
          t: DD
        } = (0, pD.F)(), CD = fb("chat", mI.q), cD = (0, lD.useMemo)((() => ff.map((CD => DD(CD)))), [DD]);
        return (0, wi.f)(mI.o, (() => {
          CD.open || (0, Ib.g)() || (0, pb.q)() || "inGame" !== QD.d.get("gameState") || (0, DI.s)() || !(0, gI.c)() || CD.show()
        })), (0, wi.f)(mI.g, (DD => {
          CD.open && CD.aim(DD, Qb)
        })), (0, wi.f)(mI.l, (() => {
          var DD;
          if (!CD.open) return;
          const ID = CD.pickedRef.current;
          null !== ID ? bf.claim(performance.now()) && (CD.close(), null === (DD = (0, gI.c)()) || void 0 === DD || DD.sendLine(cD[ID])) : CD.close()
        })), (0, wi.f)(mI.j, CD.close), CD.open ? (0, GD.jsx)(bb, {
          className: "QuickChatWheel",
          slotCount: Qb,
          picked: CD.picked,
          slotLabel: DD => cD[DD],
          renderSlot: DD => cD[DD],
          centre: null !== CD.picked ? cD[CD.picked] : DD("controller:quickChatPick")
        }) : null
      },
      Sb = () => {
        const {
          t: DD
        } = (0, pD.F)(), CD = fb("actionButton", pb.s), [cD, ID] = (0, lD.useState)([]);
        if ((0, wi.f)(pb.k, (DD => {
            CD.open || (0, Ib.g)() || (0, mI.e)() || "inGame" !== QD.d.get("gameState") || (0, DI.s)() || (ID(DD), CD.show())
          })), (0, wi.f)(pb.e, (DD => {
            CD.open && CD.aim(DD, cD.length)
          })), (0, wi.f)(pb.i, (() => {
            if (!CD.open) return;
            const DD = CD.pickedRef.current;
            CD.close(), null !== DD && wD.i.Uo(pb.o, cD[DD])
          })), (0, wi.f)(pb.g, CD.close), !CD.open) return null;
        const iD = null !== CD.picked ? cD[CD.picked] : null;
        return (0, GD.jsx)(bb, {
          className: "ActionWheel",
          slotCount: cD.length,
          picked: CD.picked,
          slotLabel: CD => {
            const ID = cD[CD];
            return "reload" === ID.kind ? DD("controller:gameplayReload") : "customButton" === ID.kind ? ID.description || ID.icon : "touchButton" === ID.kind && "string" === typeof ID.label ? ID.label : ""
          },
          renderSlot: DD => (0, GD.jsx)(vi, {
            action: cD[DD]
          }),
          centre: iD ? (0, GD.jsx)(vi, {
            action: iD
          }) : DD("controller:actionWheelPick")
        })
      };
    var Bb = cD(90);
    const yb = () => ((0, lD.useEffect)((() => {
        var DD, CD;
        const cD = (0, vD.p)(document.getElementById("root")),
          ID = (0, MD.e)(),
          pD = (() => {
            const DD = [wD.i.subscribe(sp.d, (() => {
                rp("blockBreak")
              })), wD.i.subscribe("damagedByOtherPlayer", (() => {
                rp("damage")
              })), wD.i.subscribe("yourAttackHit", (DD => {
                let {
                  hitSelf: CD
                } = DD;
                CD || rp("hit")
              }))],
              CD = fD.e.onActivePadChanged((DD => {
                DD && rp("connect")
              }));
            return () => {
              for (const CD of DD) wD.i.unsubscribe(CD);
              CD()
            }
          })(),
          iD = (() => {
            const DD = new Ii({
              getVisitId: ci.b,
              peekVisitId: ci.peekVisitSessionId,
              readReportedVisitId: () => {
                const DD = Ci.j.getItem(ii);
                return "string" === typeof DD ? DD : null
              },
              writeReportedVisitId: DD => {
                Ci.j.setItem(ii, DD)
              },
              isPadActive: MD.i,
              getPadFamily: () => {
                var DD, CD;
                return null !== (DD = null === (CD = fD.e.getActivePad()) || void 0 === CD ? void 0 : CD.family) && void 0 !== DD ? DD : null
              },
              canReport: Fp.g,
              getInputType: Di.d,
              Nt: Fp.m
            });
            let CD = 0,
              cD = null;
            const ID = pD => {
                null === cD && ("notReady" !== DD.check(pD) || null !== cD || CD >= 20 || (CD++, cD = setTimeout((() => {
                  cD = null, ID(!1)
                }), 3e3)))
              },
              pD = wD.i.subscribe("appManagerUpdated|activeInputDevice", (() => {
                ID(!0)
              })),
              iD = (0, ci.f)((() => {
                CD = 0, ID(!0)
              }));
            return () => {
              wD.i.unsubscribe(pD), iD(), null !== cD && clearTimeout(cD)
            }
          })(),
          bD = fD.e.onFrame(((DD, CD) => {
            const cD = (0, MD.o)(DD);
            BD.d.dispatch(DD, CD, cD)
          }));
        let SD = null !== (DD = null === (CD = fD.e.getActivePad()) || void 0 === CD ? void 0 : CD.family) && void 0 !== DD ? DD : null;
        const tD = fD.e.onActivePadChanged((DD => {
            var CD, cD;
            (BD.d.reset(), (0, MD.r)(), wD.i.Uo(fD.c, DD), (null !== (CD = null === DD || void 0 === DD ? void 0 : DD.family) && void 0 !== CD ? CD : null) !== SD) && (SD = null !== (cD = null === DD || void 0 === DD ? void 0 : DD.family) && void 0 !== cD ? cD : null, wD.i.Uo(yD.b, (0, yD.h)()));
            !DD && (0, MD.i)() && (0, MD.v)(QD.d.get("isTouchScreen") ? "touch" : "keyboardMouse")
          })),
          ZD = () => {
            "visible" !== document.visibilityState && BD.d.clear()
          },
          oD = () => {
            BD.d.clear()
          };
        document.addEventListener("visibilitychange", ZD), window.addEventListener("blur", oD), fD.e.start(), (0, Ap.j)();
        const ND = null;
        return () => {
          cD(), ID(), pD(), iD(), bD(), tD(), document.removeEventListener("visibilitychange", ZD), window.removeEventListener("blur", oD), fD.e.stop(), null === ND || void 0 === ND || ND()
        }
      }), []), (0, GD.jsxs)("div", {
        className: "ControllerRoot",
        children: [(0, GD.jsx)(Pi, {}), (0, GD.jsx)(zi, {}), (0, GD.jsx)(ji, {}), (0, GD.jsx)(xf, {}), (0, GD.jsx)(cb, {}), (0, GD.jsx)(wb, {}), (0, GD.jsx)(Sb, {})]
      })),
      Mb = () => Bb.featureFlags.useControllerSupport ? (0, GD.jsx)(yb, {}) : null;
    var tb = cD(7873),
      Zb = cD(8528);
    const ob = new Set(Ap.g),
      vb = DD => `${Zb.n}${(0,yD.i)()}/${DD}`,
      Nb = DD => {
        if (!(0, Zb.j)(DD)) return null;
        const [CD, cD] = DD.slice(Zb.n.length).split("/");
        return (0, tb.d)(CD) && ob.has(cD) ? (0, Ap.c)(CD, cD) : null
      };
    var gb = cD(8534);
    const Xb = () => {
        const {
          t: DD
        } = (0, pD.F)(), CD = (0, MD.z)(), {
          gameState: cD,
          isUiHidden: ID
        } = (0, QD.o)(["gameState", "isUiHidden"]), {
          hideButtonHints: iD,
          sneakMode: fD
        } = (0, yD.l)(), [bD, wD] = (0, lD.useState)(gb.c);
        return (0, wi.f)(Oi.x, wD), CD && !ID && "inGame" === cD && bD ? (0, GD.jsxs)("div", {
          className: "PadSneakChip SmallTextBold",
          children: [!iD && (0, GD.jsx)(Zi, {
            glyph: (0, SD.h)("toggle" === fD ? "sneak" : "sneakToggle")
          }), (0, GD.jsx)("span", {
            children: DD("controller:gameplaySneaking")
          })]
        }) : null
      },
      mb = 12,
      nb = DD => {
        let {
          trigger: CD,
          className: cD,
          children: ID
        } = DD;
        const pD = (0, lD.useRef)(null);
        return (0, lD.useEffect)((() => {
          let DD = 0;
          const cD = xD(CD, "y"),
            ID = () => {
              DD = requestAnimationFrame(ID);
              const iD = pD.current;
              if (!iD || null === CD || void 0 === CD || !CD.isConnected) return;
              const {
                left: fD,
                top: bD
              } = function(DD, CD, cD) {
                let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                const iD = DD.left + DD.width / 2,
                  fD = Math.max(mb, cD.width - mb - CD.width),
                  bD = Math.min(Math.max(iD - CD.width / 2, mb), fD),
                  QD = cD.height - ID;
                let wD = 0,
                  SD = QD;
                if (pD) {
                  const DD = Math.max(0, pD.top),
                    ID = Math.min(QD, pD.bottom);
                  ID - DD >= Math.max(cD.height / 2, CD.height + 24) && (wD = DD, SD = ID)
                }
                const BD = DD.top + DD.height / 2 < (wD + SD) / 2 ? SD - mb - CD.height : wD + mb;
                return {
                  left: bD,
                  top: Math.max(mb, BD)
                }
              }(CD.getBoundingClientRect(), {
                width: iD.offsetWidth,
                height: iD.offsetHeight
              }, {
                width: window.innerWidth,
                height: window.innerHeight
              }, parseFloat(document.documentElement.style.getPropertyValue(jf)) || 0, null !== cD && void 0 !== cD && cD.isConnected ? cD.getBoundingClientRect() : null);
              iD.style.transform = `translate3d(${Math.round(fD)}px, ${Math.round(bD)}px, 0)`, iD.style.visibility = "visible"
            };
          return ID(), () => {
            cancelAnimationFrame(DD)
          }
        }), [CD]), (0, GD.jsx)("div", {
          ref: pD,
          className: cD,
          style: {
            position: "fixed",
            left: 0,
            top: 0,
            visibility: "hidden"
          },
          children: ID
        })
      };
    var Ob = cD(1064),
      Pb = cD(8537),
      Hb = cD(1442),
      Ub = cD(8545),
      xb = cD(8548);
    const qb = {
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
      Jb = () => {
        const {
          t: DD
        } = (0, pD.F)(), CD = (0, MD.z)(), cD = (0, Pb.c)(), ID = (0, Ki.h)("_tasks"), iD = (0, Ki.h)("_availableLeaderboards");
        if (!CD) return null;
        const fD = (DD => {
          let {
            hasShop: CD,
            hasTasksOrLeaderboards: cD,
            canInvite: ID
          } = DD;
          const pD = [];
          return CD && pD.push("shop"), cD && pD.push("tasks"), ID && pD.push("invite"), pD.push("leave"), pD
        })({
          hasShop: cD,
          hasTasksOrLeaderboards: !(!ID && !iD),
          canInvite: !!Bb.featureFlags.canUseInviteLinks
        });
        return (0, GD.jsx)("div", {
          className: "PadLobbyShortcuts",
          children: fD.map((CD => {
            const {
              icon: cD,
              labelKey: ID
            } = qb[CD], pD = "leave" === CD ? Hb.J : Hb.i;
            return (0, GD.jsx)(pD, {
              className: "PadLobbyShortcut",
              onClick: () => {
                (DD => {
                  switch (DD) {
                    case "shop":
                      return wD.i.Uo(xb.j), void QD.d.set({
                        openEverythingMenuName: Fc.q.SHOP
                      });
                    case "tasks":
                      return void wD.i.Uo("toggleMenu", "retentionFeatures");
                    case "invite":
                      return void wD.i.Uo("toggleMenu", "inviteLink");
                    case "leave":
                      (0, Ub.c)()
                  }
                })(CD)
              },
              children: (0, GD.jsxs)("div", {
                className: "PadLobbyShortcutInner",
                children: [(0, GD.jsx)(Ob.c, {
                  name: cD
                }), (0, GD.jsx)("span", {
                  children: DD(ID)
                })]
              })
            }, CD)
          }))
        })
      };
    var Kb = cD(1961);
    const ab = tD.w,
      Vb = ["forward", "backward", "left", "right", "sprint"],
      zb = DD => DD.ctrlKey || DD.altKey || "Alt" === DD.key || "ArrowUp" === DD.key || "ArrowDown" === DD.key || "Tab" === DD.code || "/" === DD.key || "Slash" === DD.code;
    class jb {
      constructor() {
        this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(tD.R).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
      }
      setArmed(DD) {
        this.armed = DD
      }
      blocksGameplay() {
        return this.armed || this.consumeNextFrame
      }
      onKeyDown(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !this.armed || CD ? !DD.repeat && this.swallowedKeys.delete(DD.code) ? {
          swallow: !1,
          continues: !1
        } : {
          swallow: this.swallowedKeys.has(DD.code),
          continues: !1
        } : "Escape" === DD.key || DD.repeat && !this.swallowedKeys.has(DD.code) ? {
          swallow: !1,
          continues: !1
        } : cD ? {
          swallow: !1,
          continues: !0
        } : (this.swallowedKeys.add(DD.code), {
          swallow: !0,
          continues: (0, MD.h)(DD)
        })
      }
      onKeyUp(DD) {
        return this.swallowedKeys.delete(DD.code)
      }
      forgetKeys() {
        this.swallowedKeys.clear()
      }
      onPadFrame(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          ID = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const pD = (0, tD.p)(DD.values, this.previousHeld),
          iD = null === cD ? -1 : (0, tD.m)(cD),
          fD = iD >= 0 && pD[iD] && !this.previousHeld[iD],
          bD = pD.some(((DD, CD) => DD && !this.previousHeld[CD] && CD !== iD)),
          QD = Math.hypot(DD.leftStick.x, DD.leftStick.y) >= ab,
          wD = Math.hypot(DD.rightStick.x, DD.rightStick.y) >= ab,
          SD = QD && !this.leftStickWasPressed || wD && !this.rightStickWasPressed;
        this.previousHeld = pD, this.leftStickWasPressed = QD, this.rightStickWasPressed = wD;
        let BD = !1;
        this.consumeNextFrame && (this.consumeNextFrame = !1, BD = !0);
        const yD = !CD && fD && !ID,
          MD = !yD && this.armed && !CD && (bD || SD);
        return (yD || MD) && (this.consumeNextFrame = !0, this.consumeAfterContinue = MD, BD = !0), {
          continues: MD,
          back: yD,
          consumeHeld: BD
        }
      }
      consumeLeavesMoveStick() {
        return this.consumeAfterContinue
      }
    }
    const lb = new Set([...Kb.l, ...Kb.x]),
      Lb = DD => ((DD, CD, cD) => {
        const ID = Object.keys(CD).filter((ID => !cD.has(ID) && CD[ID].includes(DD)));
        return ID.length > 0 && ID.every((DD => Vb.includes(DD)))
      })(DD, Kb.q, lb),
      Tb = (DD, CD, cD) => {
        const ID = new jb,
          pD = DD => {
            if (!DD.isTrusted) return;
            const {
              swallow: cD,
              continues: pD
            } = ID.onKeyDown(DD, !(0, MD.D)(DD) || (0, Wp.m)() || (0, DI.s)(), Lb(DD.code));
            cD && (DD.stopImmediatePropagation(), zb(DD) && DD.preventDefault()), pD && ((0, MD.v)("keyboardMouse"), CD())
          },
          iD = DD => {
            DD.isTrusted && ID.onKeyUp(DD) && (DD.stopImmediatePropagation(), zb(DD) && DD.preventDefault())
          },
          bD = () => {
            ID.forgetKeys()
          };
        window.addEventListener("keydown", pD, !0), window.addEventListener("keyup", iD, !0), window.addEventListener("blur", bD);
        const QD = fD.e.onFrame((DD => {
            const pD = BD.d.getActiveConsumerName(),
              iD = cD(),
              fD = iD ? (0, SD.h)("menuBack") : null,
              bD = null !== pD && "gameplay" !== pD,
              {
                continues: QD,
                back: wD,
                consumeHeld: tD
              } = ID.onPadFrame(DD, bD, fD, (0, MD.l)(DD));
            if (tD) {
              const DD = (0, yD.h)().swapSticks ? "right" : "left";
              BD.d.consumeAllHeld(ID.consumeLeavesMoveStick() ? DD : null)
            }
            wD ? null === iD || void 0 === iD || iD() : QD && CD()
          })),
          wD = (0, Wp.p)(`pressToContinue:${DD}`, (() => ID.blocksGameplay()));
        return {
          setArmed: DD => {
            ID.setArmed(DD)
          },
          dispose: () => {
            window.removeEventListener("keydown", pD, !0), window.removeEventListener("keyup", iD, !0), window.removeEventListener("blur", bD), QD(), wD()
          }
        }
      };
    var Gb = cD(4770),
      Rb = cD(3227),
      kb = cD(2921),
      db = cD(7881);
    const Yb = DD => {
        let {
          text: CD
        } = DD;
        return (0, GD.jsx)("div", {
          className: "ControllerSettingsHeading",
          children: CD
        })
      },
      Wb = DD => {
        let {
          label: CD,
          hint: cD,
          options: ID,
          value: iD,
          onChange: fD
        } = DD;
        const {
          t: bD
        } = (0, pD.F)();
        return (0, GD.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, GD.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: [(0, GD.jsxs)("div", {
              className: "ControllerChoiceText",
              children: [(0, GD.jsx)("div", {
                className: "SliderText",
                children: CD
              }), cD && (0, GD.jsx)("div", {
                className: "ControllerSettingsHint",
                children: cD
              })]
            }), (0, GD.jsx)(kb.b, {
              options: ID.map((DD => ({
                label: "label" in DD ? DD.label : bD(DD.labelKey),
                value: DD.value
              }))),
              value: iD,
              onChange: DD => {
                fD(DD.value)
              }
            })]
          })
        })
      },
      sb = DD => {
        let {
          settingKey: CD,
          label: cD,
          range: ID,
          format: pD
        } = DD;
        const iD = (0, yD.l)();
        return (0, GD.jsx)(Gb.i, {
          name: cD,
          min: ID.min,
          max: ID.max,
          step: ID.step,
          padStep: ID.step,
          initValue: iD[CD],
          format: pD,
          onChange: DD => {
            (0, yD.j)({
              [CD]: (0, db.x)(DD, ID)
            })
          }
        })
      };
    var Eb = cD(8555),
      eb = cD(8559);
    const ub = DD => DD instanceof DOMException && ("SecurityError" === DD.name || "NotAllowedError" === DD.name),
      hb = DD => {
        const [CD] = [...DD.controllers].sort(((DD, CD) => eb.o[DD] - eb.o[CD]));
        return eb.l[CD]
      },
      rb = DD => {
        (0, Eb.c)().allowPhoneMotion().catch((CD => {
          DD && ub(CD) ? DD() : console.warn("Could not enable the motion sensor", CD)
        }))
      },
      Ab = {
        waiting: "controller:settingsGyroPhoneWaiting",
        noSensor: "controller:settingsGyroPhoneNoSensor",
        on: "controller:settingsGyroPhoneOn",
        denied: "controller:settingsGyroPhoneDenied"
      },
      Fb = DD => {
        let {
          status: CD
        } = DD;
        const {
          t: cD
        } = (0, pD.F)(), [ID, iD] = (0, lD.useState)(null), fD = `${CD.controllers.join(",")}|${CD.phoneMotion}`;
        (0, lD.useEffect)((() => {
          iD(null)
        }), [fD]);
        const bD = () => {
          (0, Eb.c)().connectController().then((DD => {
            iD(DD > 0 ? "openFailed" : null)
          })).catch((DD => {
            ub(DD) ? iD("needsClick") : console.warn("Could not connect motion controller", DD)
          }))
        };
        if (CD.hidSupported) {
          let DD = cD("controller:settingsGyroConnectHint");
          return "needsClick" === ID ? DD = cD("controller:settingsGyroConnectNeedsClick") : "openFailed" === ID ? DD = cD("controller:settingsGyroOpenFailed") : CD.controllers.length > 0 && (DD = cD("controller:settingsGyroConnected", {
            name: hb(CD)
          })), (0, GD.jsx)("div", {
            className: "SettingBox ControllerChoiceSetting",
            children: (0, GD.jsxs)("div", {
              className: "ControllerChoiceRow",
              children: [(0, GD.jsx)("div", {
                className: "ControllerSettingsHint",
                children: DD
              }), (0, GD.jsx)(Hb.i, {
                onClick: bD,
                children: cD("controller:settingsGyroConnect")
              })]
            })
          })
        }
        if ("needsPermission" === CD.phoneMotion) return (0, GD.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, GD.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: ["needsTap" === ID && (0, GD.jsx)("div", {
              className: "ControllerSettingsHint",
              children: cD("controller:settingsGyroAllowNeedsTap")
            }), (0, GD.jsx)(Hb.i, {
              onClick: () => {
                rb((() => {
                  iD("needsTap")
                }))
              },
              children: cD("controller:settingsGyroAllowMotion")
            })]
          })
        });
        const QD = Ab[CD.phoneMotion];
        return QD ? (0, GD.jsx)("div", {
          className: "ControllerSettingsHint",
          children: cD(QD)
        }) : null
      },
      DQ = () => {
        const {
          t: DD
        } = (0, pD.F)(), CD = (0, yD.l)(), cD = (0, Eb.d)(), ID = (0, MD.B)(), iD = !cD.hidSupported && cD.phoneSupported && !cD.padConnected, fD = (cD.hidSupported || cD.phoneSupported) && !iD, bD = (0, SD.h)("pause");
        return (0, GD.jsxs)(GD.Fragment, {
          children: [(0, GD.jsx)(Yb, {
            text: DD("controller:settingsGyro")
          }), iD && (0, GD.jsx)("div", {
            className: "ControllerSettingsHint",
            children: DD("controller:settingsGyroPhoneNeedsController")
          }), !fD && !iD && (0, GD.jsx)("div", {
            className: "ControllerSettingsHint",
            children: DD(cD.hidBlocked || cD.phoneBlocked ? "controller:settingsGyroBlocked" : "controller:settingsGyroUnsupported")
          }), fD && (0, GD.jsx)(Gb.e, {
            label: DD(cD.hidSupported ? "controller:settingsGyroToggle" : "controller:settingsGyroTogglePhone"),
            checked: CD.gyroAiming,
            onClick: DD => {
              var CD, cD;
              (0, yD.j)({
                gyroAiming: DD
              });
              const ID = null === (CD = null === (cD = navigator.userActivation) || void 0 === cD ? void 0 : cD.isActive) || void 0 === CD || CD;
              if (!DD || !ID) return;
              const pD = (0, Eb.c)(),
                iD = pD.getStatus();
              iD.hidSupported ? pD.connectControllerIfNoneGranted().catch((DD => {
                console.warn("Motion controller picker unavailable", DD)
              })) : "needsPermission" === iD.phoneMotion && rb()
            },
            circleInfoText: DD(cD.hidSupported ? "controller:settingsGyroToggleInfo" : "controller:settingsGyroToggleInfoPhone")
          }), fD && cD.hidSupported && (0, GD.jsx)("div", {
            className: "ControllerSettingsHint",
            children: DD("controller:settingsGyroSteamHint")
          }), fD && CD.gyroAiming && (0, GD.jsxs)(GD.Fragment, {
            children: [(0, GD.jsx)(Fb, {
              status: cD
            }), (0, GD.jsx)(sb, {
              settingKey: "gyroSensitivity",
              label: DD("controller:settingsGyroSensitivity"),
              range: db.P,
              format: db.I
            }), (0, GD.jsx)(Wb, {
              label: DD("controller:settingsGyroActivation"),
              hint: "aiming" === CD.gyroActivation && (0, GD.jsx)(Rb.e, {
                text: DD("controller:settingsGyroAimingHint", {
                  button: Rb.h
                }),
                glyph: (0, SD.h)("use")
              }),
              options: db.M,
              value: CD.gyroActivation,
              onChange: DD => {
                (0, yD.j)({
                  gyroActivation: DD
                })
              }
            }), "button" === CD.gyroActivation && (0, GD.jsx)(Wb, {
              label: DD("controller:settingsGyroButton"),
              hint: DD("controller:settingsGyroButtonHint"),
              options: db.s.filter((DD => DD !== bD || DD === CD.gyroButton)).map((DD => ({
                label: ti(ID, DD),
                value: DD
              }))),
              value: CD.gyroButton,
              onChange: DD => {
                (0, yD.j)({
                  gyroButton: DD
                })
              }
            })]
          })]
        })
      };
    var CQ = cD(1825);
    const cQ = () => {
      const {
        t: DD
      } = (0, pD.F)(), CD = (0, yD.l)(), cD = (0, MD.B)();
      return (0, GD.jsxs)(GD.Fragment, {
        children: [(0, GD.jsx)(Yb, {
          text: DD("controller:settingsAccessibility")
        }), (0, GD.jsx)(Gb.e, {
          label: DD("controller:settingsSwapConfirmBack"),
          checked: (0, SD.G)(CD.swapConfirmBack, cD),
          onClick: DD => {
            (0, yD.j)({
              swapConfirmBack: DD === (0, SD.G)(null, cD) ? null : DD
            }), CQ.g.showMessage({
              translationKey: "controller:settingsSwapToast"
            })
          },
          circleInfoText: DD("controller:settingsSwapConfirmBackInfo")
        }), (0, GD.jsx)(Wb, {
          label: DD("controller:settingsButtonRepeat"),
          hint: DD("controller:settingsButtonRepeatHint"),
          options: db.r,
          value: CD.buttonRepeat,
          onChange: DD => {
            (0, yD.j)({
              buttonRepeat: DD
            })
          }
        }), (0, GD.jsx)(Wb, {
          label: DD("controller:settingsTapHoldTime"),
          hint: DD("controller:settingsTapHoldTimeHint"),
          options: db.sb,
          value: CD.tapHoldTime,
          onChange: DD => {
            (0, yD.j)({
              tapHoldTime: DD
            })
          }
        }), (0, GD.jsx)(Wb, {
          label: DD("controller:settingsEmoteButton"),
          hint: DD("wheel" === CD.emoteButton ? "controller:settingsEmoteButtonWheelHint" : "controller:settingsEmoteButtonTapHoldHint"),
          options: db.E,
          value: CD.emoteButton,
          onChange: DD => {
            (0, yD.j)({
              emoteButton: DD
            })
          }
        }), (0, GD.jsx)(Wb, {
          label: DD("controller:settingsAttackMode"),
          hint: DD("toggle" === CD.attackMode ? "controller:settingsAttackToggleHint" : "controller:settingsAttackHoldHint"),
          options: db.o,
          value: CD.attackMode,
          onChange: DD => {
            (0, yD.j)({
              attackMode: DD
            })
          }
        }), (0, GD.jsx)(Gb.e, {
          label: DD("controller:settingsLargePointer"),
          checked: CD.largePointer,
          onClick: DD => {
            (0, yD.j)({
              largePointer: DD
            })
          },
          circleInfoText: DD("controller:settingsLargePointerInfo")
        })]
      })
    };
    var IQ = cD(8564);
    const pQ = new class {
        constructor(DD) {
          this.router = DD, this.current = null
        }
        claim(DD, CD) {
          const cD = this.current;
          cD && (this.current = null, cD.release(), cD.onTakenOver());
          const ID = this.router.register({
              ...DD,
              name: "capture"
            }),
            pD = {
              release: ID,
              onTakenOver: CD
            };
          return this.current = pD, () => {
            this.current === pD && (this.current = null), ID()
          }
        }
      }(BD.d),
      iQ = DD => {
        (0, lD.useEffect)((() => {
          if (!DD) return;
          const CD = DD();
          let cD = !1;
          const ID = () => {
              cD || (cD = !0, CD.onEnd())
            },
            pD = pQ.claim({
              isActive: () => !cD,
              onFrame: DD => {
                CD.onFrame(DD, ID)
              }
            }, ID),
            iD = void 0 === CD.timeoutMs ? void 0 : window.setTimeout(ID, CD.timeoutMs),
            fD = DD => {
              "Escape" === DD.key && (DD.preventDefault(), DD.stopPropagation(), ID())
            };
          return window.addEventListener("keydown", fD, !0), () => {
            cD = !0, pD(), window.clearTimeout(iD), window.removeEventListener("keydown", fD, !0)
          }
        }), [DD])
      },
      fQ = DD => {
        let {
          row: CD,
          capturing: cD,
          onCapture: ID,
          holdFillRef: iD,
          onRebind: fD,
          swapped: bD
        } = DD;
        const {
          t: QD
        } = (0, pD.F)();
        if ("fixed" === CD.kind) return (0, GD.jsx)("div", {
          className: "ControlRow PadControlRow PadControlRowFixed",
          children: (0, GD.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, GD.jsx)("div", {
              className: "ControlName",
              children: QD(CD.labelKey)
            }), (0, GD.jsx)("div", {
              className: "ControlBindingsContainer",
              children: (0, GD.jsx)("div", {
                className: "ControlBindingsList",
                children: (0, GD.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  children: (0, GD.jsx)(Zi, {
                    glyph: "move" === CD.stick ? (0, SD.u)() : (0, SD.q)()
                  })
                })
              })
            })]
          })
        });
        const {
          action: wD
        } = CD, BD = (0, SD.h)(wD), yD = (0, SD.k)(wD), MD = BD !== yD && (0, SD.e)(wD, yD);
        return (0, GD.jsxs)("div", {
          className: TD()("ControlRow PadControlRow", {
            Capturing: cD
          }),
          children: [(0, GD.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, GD.jsx)("div", {
              className: "ControlName",
              children: QD(db.k[wD])
            }), (0, GD.jsxs)("div", {
              className: "ControlBindingsContainer",
              children: [!cD && (0, GD.jsxs)("div", {
                className: "ControlBindingsList",
                children: [(0, GD.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    ID(wD)
                  },
                  children: (0, GD.jsx)(Zi, {
                    glyph: BD
                  })
                }), MD && (0, GD.jsx)("div", {
                  className: "ControlBinding PadBindingReset",
                  title: QD("controller:settingsReset"),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    fD(wD, yD)
                  },
                  children: (0, GD.jsx)(Ob.c, {
                    name: "arrows-rotate"
                  })
                })]
              }), cD && (0, GD.jsxs)("div", {
                className: "ControlBindingAddInput",
                children: [(0, GD.jsxs)("div", {
                  className: "PadCaptureBox",
                  children: [(0, GD.jsx)("span", {
                    children: QD("controller:settingsCapturePrompt")
                  }), (0, GD.jsx)("div", {
                    ref: iD,
                    className: "PadCaptureHoldFill"
                  })]
                }), (0, GD.jsx)("div", {
                  className: "ControlBindingAddCancel",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    ID(null)
                  },
                  children: "\xd7"
                })]
              }), cD && (0, GD.jsx)("div", {
                className: "PadCaptureHint",
                children: (0, GD.jsx)(Rb.e, {
                  text: QD((0, SD.e)(wD, (0, SD.h)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
                    button: Rb.h
                  }),
                  glyph: (0, SD.h)("menuBack")
                })
              })]
            })]
          }), bD.map((DD => (0, GD.jsx)("div", {
            className: "ControlRowWarning PadSwapNotice",
            children: (0, GD.jsx)(Rb.e, {
              text: QD("controller:settingsSwapNotice", {
                action: QD(db.k[DD]),
                button: Rb.h
              }),
              glyph: (0, SD.h)(DD)
            })
          }, DD))), cD && (0, GD.jsx)("div", {
            className: "PadCaptureTimer",
            style: {
              animationDuration: `${db.w}ms`
            }
          })]
        })
      },
      bQ = [],
      QQ = DD => {
        let {
          layoutSetting: CD
        } = DD;
        const {
          t: cD
        } = (0, pD.F)(), ID = (0, yD.l)();
        (0, MD.B)();
        const iD = (0, lD.useRef)(null),
          [fD, bD] = (0, lD.useState)(null),
          QD = (0, lD.useCallback)(((DD, CD) => {
            const cD = (0, yD.h)().bindings;
            (0, SD.D)(DD, CD);
            const ID = (0, SD.v)(cD, DD);
            bD(ID.length > 0 ? {
              action: DD,
              swapped: ID
            } : null)
          }), []),
          [wD, ZD] = ((DD, CD) => {
            const [cD, ID] = (0, lD.useState)(null), pD = (0, lD.useMemo)((() => cD ? () => {
              const pD = (0, SD.h)("menuBack"),
                iD = new db.e(pD, (0, SD.h)("menuConfirm"), (DD => (0, SD.e)(cD, DD)));
              return {
                onFrame: (ID, fD) => {
                  var bD;
                  const QD = ID.frame.timestampMs,
                    wD = iD.update({
                      ...ID,
                      isDown: DD => (0, tD.D)(ID.frame.values, DD)
                    }, QD);
                  null === (bD = DD.current) || void 0 === bD || bD.style.setProperty("width", 100 * iD.getBindHoldProgress(QD) + "%"), wD && ("bind" === wD.kind ? (BD.d.consumeButton(wD.button), CD(cD, wD.button)) : BD.d.consumeButton(pD), fD())
                },
                onEnd: () => {
                  ID(null)
                },
                timeoutMs: db.w
              }
            } : null), [cD, DD, CD]);
            return iQ(pD), [cD, ID]
          })(iD, QD),
          oD = DD => {
            DD && bD(null), ZD(DD)
          };
        (0, lD.useEffect)((() => {
          if (!fD) return;
          const DD = window.setTimeout((() => {
            bD(null)
          }), db.ob);
          return () => {
            window.clearTimeout(DD)
          }
        }), [fD]);
        const vD = !ID.swapSticks && 0 === Object.keys(ID.bindings).length;
        return (0, GD.jsxs)("div", {
          className: "ControlsContainer PadControlsContainer",
          children: [(0, GD.jsx)("div", {
            className: "SliderText",
            children: cD("controller:settingsRemap")
          }), (0, GD.jsx)("div", {
            className: "ControllerSettingsHint",
            children: cD("controller:settingsRemapHint")
          }), (0, GD.jsx)(Hb.J, {
            className: "ResetBindingsButton PadResetAllButton",
            disabled: vD,
            onClick: () => {
              oD(null), bD(null), (0, SD.E)()
            },
            children: cD("controller:settingsResetAll")
          }), CD, db.jb.map(((DD, CD) => (0, GD.jsx)(IQ.d, {
            title: cD(DD.titleKey),
            defaultOpen: 0 === CD,
            children: DD.rows.map((DD => (0, GD.jsx)(fQ, {
              row: DD,
              capturing: "action" === DD.kind && DD.action === wD,
              onCapture: oD,
              holdFillRef: iD,
              onRebind: QD,
              swapped: "action" === DD.kind && (null === fD || void 0 === fD ? void 0 : fD.action) === DD.action ? fD.swapped : bQ
            }, "action" === DD.kind ? DD.action : DD.labelKey)))
          }, DD.titleKey)))]
        })
      },
      wQ = DD => {
        let {
          deadzone: CD,
          dotRef: cD,
          labelKey: ID
        } = DD;
        const {
          t: iD
        } = (0, pD.F)();
        return (0, GD.jsxs)("div", {
          className: "ControllerTesterStick",
          children: [(0, GD.jsxs)("div", {
            className: "ControllerTesterStickCircle",
            children: [(0, GD.jsx)("div", {
              className: "ControllerTesterDeadzone",
              style: {
                width: 100 * CD + "%",
                height: 100 * CD + "%"
              }
            }), (0, GD.jsx)("div", {
              ref: cD,
              className: "ControllerTesterDot"
            })]
          }), (0, GD.jsx)("div", {
            className: "ControllerTesterStickLabel",
            children: iD(ID)
          })]
        })
      },
      SQ = (DD, CD, cD, ID) => {
        var pD;
        DD && (DD.style.left = 50 + 50 * Math.max(-1, Math.min(1, CD.x)) + "%", DD.style.top = 50 + 50 * Math.max(-1, Math.min(1, CD.y)) + "%", null === (pD = DD.parentElement) || void 0 === pD || pD.classList.toggle("Active", ID || Math.hypot(CD.x, CD.y) > cD))
      },
      BQ = DD => {
        const CD = {
            deadzone: DD.moveDeadzone,
            labelKey: "controller:settingsActionMove"
          },
          cD = {
            deadzone: DD.lookDeadzone,
            labelKey: "controller:settingsActionLook"
          };
        return DD.swapSticks ? {
          left: cD,
          right: CD
        } : {
          left: CD,
          right: cD
        }
      },
      yQ = () => {
        const {
          t: DD
        } = (0, pD.F)(), CD = (() => {
          const [DD, CD] = (0, lD.useState)((() => fD.e.getActivePad()));
          return (0, wi.f)(fD.c, (() => {
            CD(fD.e.getActivePad())
          })), DD
        })(), cD = BQ((0, yD.l)()), ID = (0, lD.useRef)(null), iD = (0, lD.useRef)(null), bD = (0, lD.useRef)([]), QD = (0, lD.useRef)(null), wD = (0, lD.useRef)(null), [MD, ZD] = (DD => {
          const [CD, cD] = (0, lD.useState)(!1), ID = (0, lD.useMemo)((() => CD ? () => {
            const CD = (0, SD.h)("menuBack"),
              ID = new db.i;
            return {
              onFrame: (cD, pD) => {
                var iD;
                const fD = ID.update({
                  pressed: cD.wasPressed(CD),
                  Lb: cD.isHeld(CD)
                }, cD.frame.timestampMs);
                null === (iD = DD.current) || void 0 === iD || iD.style.setProperty("width", 100 * fD + "%"), fD >= 1 && (BD.d.consumeButton(CD), pD())
              },
              onEnd: () => {
                cD(!1)
              }
            }
          } : null), [CD, DD]);
          return iQ(ID), [CD, cD]
        })(iD);
        (0, lD.useEffect)((() => {
          const DD = DD => {
            for (const cD of tD.V) {
              const CD = (0, tD.m)(cD),
                ID = bD.current[CD];
              if (!ID) continue;
              const pD = DD.values[CD];
              ID.classList.toggle("Pressed", pD >= tD.w), (0, tD.H)(CD) && ID.style.setProperty("--trigger-fill", `${Math.round(100*pD)}%`)
            }
            const CD = BQ((0, yD.h)());
            SQ(QD.current, DD.leftStick, CD.left.deadzone, DD.values[(0, tD.m)("LS")] >= tD.w), SQ(wD.current, DD.rightStick, CD.right.deadzone, DD.values[(0, tD.m)("RS")] >= tD.w)
          };
          return CD || DD((0, tD.t)()), fD.e.onFrame(DD)
        }), [CD]), (0, lD.useEffect)((() => {
          CD || ZD(!1)
        }), [CD, ZD]), (0, lD.useEffect)((() => {
          var DD;
          MD && (null === (DD = ID.current) || void 0 === DD || DD.scrollIntoView({
            block: "nearest"
          }))
        }), [MD]);
        const oD = db.fb.find((DD => DD.value === (null === CD || void 0 === CD ? void 0 : CD.family)));
        return (0, GD.jsxs)("div", {
          ref: ID,
          className: TD()("SettingBox ControllerTester", {
            Testing: MD
          }),
          children: [(0, GD.jsxs)("div", {
            className: "ControllerTesterHeader",
            children: [(0, GD.jsxs)("div", {
              className: "ControllerTesterInfo",
              children: [CD && (0, GD.jsx)("div", {
                children: DD("controller:settingsTesterFamily", {
                  family: oD ? DD(oD.labelKey) : CD.family
                })
              }), CD && (0, GD.jsx)("div", {
                className: "ControllerTesterPadId",
                children: CD.id
              }), !CD && (0, GD.jsx)("div", {
                children: DD("controller:settingsTesterNoPad")
              })]
            }), (CD || MD) && (0, GD.jsx)(Hb.i, {
              className: "ControllerTesterToggle",
              onClick: () => {
                ZD(!MD)
              },
              children: DD(MD ? "controller:settingsTesterStop" : "controller:settingsTesterStart")
            })]
          }), CD && !MD && (0, GD.jsx)("div", {
            className: "ControllerSettingsHint",
            children: DD("controller:settingsTesterHint")
          }), MD && (0, GD.jsxs)("div", {
            className: "ControllerTesterBanner",
            children: [(0, GD.jsx)(Rb.e, {
              text: DD("controller:settingsTesterTesting", {
                button: Rb.h
              }),
              glyph: (0, SD.h)("menuBack")
            }), (0, GD.jsx)("div", {
              ref: iD,
              className: "ControllerTesterExitFill"
            })]
          }), (0, GD.jsxs)("div", {
            className: "ControllerTesterBody",
            children: [(0, GD.jsx)(wQ, {
              deadzone: cD.left.deadzone,
              dotRef: QD,
              labelKey: cD.left.labelKey
            }), (0, GD.jsx)("div", {
              className: "ControllerTesterButtons",
              children: tD.V.map((DD => {
                const cD = (0, tD.m)(DD);
                return (0, GD.jsx)("div", {
                  ref: DD => {
                    bD.current[cD] = DD
                  },
                  className: (0, tD.H)(cD) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
                  children: (0, GD.jsx)(Zi, {
                    glyph: DD,
                    family: null === CD || void 0 === CD ? void 0 : CD.family
                  })
                }, DD)
              }))
            }), (0, GD.jsx)(wQ, {
              deadzone: cD.right.deadzone,
              dotRef: wD,
              labelKey: cD.right.labelKey
            })]
          })]
        })
      },
      MQ = (0, lD.memo)((function() {
        const {
          t: DD
        } = (0, pD.F)(), CD = (0, yD.l)(), [cD, ID] = (0, lD.useState)(!1);
        return (0, lD.useEffect)((() => {
          if (!cD) return;
          const DD = window.setTimeout((() => {
            ID(!1)
          }), db.ob);
          return () => {
            window.clearTimeout(DD)
          }
        }), [cD]), (0, GD.jsxs)("div", {
          className: "SettingsMenuRightInner ControllerCategory",
          children: [(0, GD.jsx)(Yb, {
            text: DD("controller:settingsLook")
          }), (0, GD.jsx)(sb, {
            settingKey: "lookSensitivityX",
            label: DD("controller:settingsLookSensitivityX"),
            range: db.lb,
            format: db.J
          }), (0, GD.jsx)(sb, {
            settingKey: "lookSensitivityY",
            label: DD("controller:settingsLookSensitivityY"),
            range: db.lb,
            format: db.J
          }), (0, GD.jsx)(sb, {
            settingKey: "aimLookSensitivity",
            label: DD("controller:settingsAimLookSensitivity"),
            range: db.n,
            format: db.J
          }), (0, GD.jsx)(Wb, {
            label: DD("controller:settingsLookCurve"),
            hint: DD("controller:settingsLookCurveHint"),
            options: db.ab,
            value: CD.lookCurve,
            onChange: DD => {
              (0, yD.j)({
                lookCurve: DD
              })
            }
          }), (0, GD.jsx)(Gb.e, {
            label: DD("controller:settingsInvertLookX"),
            checked: CD.invertLookX,
            onClick: DD => {
              (0, yD.j)({
                invertLookX: DD
              })
            }
          }), (0, GD.jsx)(Gb.e, {
            label: DD("controller:settingsInvertLookY"),
            checked: CD.invertLookY,
            onClick: DD => {
              (0, yD.j)({
                invertLookY: DD
              })
            }
          }), (0, GD.jsx)(sb, {
            settingKey: "lookDeadzone",
            label: DD("controller:settingsLookDeadzone"),
            range: db.C,
            format: db.G
          }), (0, GD.jsx)(DQ, {}), (0, GD.jsx)(Yb, {
            text: DD("controller:settingsMovement")
          }), (0, GD.jsx)(sb, {
            settingKey: "moveDeadzone",
            label: DD("controller:settingsMoveDeadzone"),
            range: db.C,
            format: db.G
          }), (0, GD.jsx)(Gb.e, {
            label: DD("controller:settingsAutoSprint"),
            checked: CD.autoSprint,
            onClick: DD => {
              (0, yD.j)({
                autoSprint: DD
              })
            },
            circleInfoText: DD("controller:settingsAutoSprintInfo")
          }), (0, GD.jsx)(Wb, {
            label: DD("controller:settingsSneak"),
            options: db.nb,
            value: CD.sneakMode,
            onChange: DD => {
              (0, yD.j)({
                sneakMode: DD
              })
            }
          }), (0, GD.jsx)(Yb, {
            text: DD("controller:settingsButtons")
          }), (0, GD.jsx)(Wb, {
            label: DD("controller:settingsPromptFamily"),
            options: db.fb,
            value: CD.promptFamily,
            onChange: DD => {
              (0, yD.j)({
                promptFamily: DD
              })
            }
          }), (0, GD.jsx)(Gb.e, {
            label: DD("controller:settingsHideButtonHints"),
            checked: CD.hideButtonHints,
            onClick: DD => {
              (0, yD.j)({
                hideButtonHints: DD
              })
            }
          }), (0, GD.jsx)(Gb.e, {
            label: DD("controller:settingsVibration"),
            checked: CD.vibration,
            onClick: DD => {
              (0, yD.j)({
                vibration: DD
              }), DD && rp("preview")
            }
          }), (0, GD.jsx)(sb, {
            settingKey: "cursorSpeed",
            label: DD("controller:settingsCursorSpeed"),
            range: db.y,
            format: db.J
          }), (0, GD.jsx)(Gb.e, {
            label: DD("controller:settingsCursorMagnetism"),
            checked: CD.cursorMagnetism,
            onClick: DD => {
              (0, yD.j)({
                cursorMagnetism: DD
              })
            }
          }), (0, GD.jsx)(Gb.e, {
            label: DD("controller:settingsMenuBackToCategories"),
            checked: CD.menuBackToCategories,
            onClick: DD => {
              (0, yD.j)({
                menuBackToCategories: DD
              })
            }
          }), (0, GD.jsx)(QQ, {
            layoutSetting: (0, GD.jsxs)(GD.Fragment, {
              children: [SD.f.map((cD => (0, GD.jsx)(Gb.e, {
                label: DD(db.W[cD]),
                checked: (0, SD.B)(cD, CD),
                onClick: DD => {
                  ID(!(0, SD.I)(cD, DD))
                }
              }, cD))), cD && (0, GD.jsx)("div", {
                className: "PadLayoutRefusedNotice",
                role: "status",
                children: DD("controller:settingsLayoutRefusedToast")
              })]
            })
          }), (0, GD.jsx)(cQ, {}), (0, GD.jsx)(Yb, {
            text: DD("controller:settingsAlternatives")
          }), (0, GD.jsx)("div", {
            className: "ControllerSettingsHint",
            children: DD("controller:settingsAlternativesHint")
          }), (0, GD.jsx)(Wb, {
            label: DD("controller:settingsMenuNavigation"),
            hint: DD("controller:settingsMenuNavigationHint"),
            options: db.bb,
            value: CD.menuNavigation,
            onChange: DD => {
              (0, yD.j)({
                menuNavigation: DD
              })
            }
          }), (0, GD.jsx)(Wb, {
            label: DD("controller:settingsInventoryNavigation"),
            hint: DD("controller:settingsInventoryNavigationHint"),
            options: db.S,
            value: CD.inventoryNavigation,
            onChange: DD => {
              (0, yD.j)({
                inventoryNavigation: DD
              })
            }
          }), (0, GD.jsx)(Wb, {
            label: DD("controller:settingsQuickChat"),
            hint: DD("controller:settingsQuickChatHint"),
            options: db.ib,
            value: CD.quickChat,
            onChange: DD => {
              (0, yD.j)({
                quickChat: DD
              })
            }
          }), (0, GD.jsx)(Wb, {
            label: DD("controller:settingsLeaderboardButton"),
            hint: DD("controller:settingsLeaderboardButtonHint"),
            options: db._,
            value: CD.leaderboardButton,
            onChange: DD => {
              (0, yD.j)({
                leaderboardButton: DD
              })
            }
          }), (0, GD.jsx)(Yb, {
            text: DD("controller:settingsTester")
          }), (0, GD.jsx)(yQ, {})]
        })
      }));
    (0, pD.c)(ID);
    for (const NQ of (0, iD.o)()) NQ.connected ? fD.e.handleConnectionEvent(NQ) : fD.e.handleDisconnectionEvent(NQ);
    const tQ = () => null !== fD.e.getActivePad(),
      ZQ = () => hc.getState(),
      oQ = () => hc.isSteppingSlots(),
      vQ = (DD, CD) => {
        const cD = Yp.getFocused();
        Yp.isActive() && cD && DD.contains(cD) && Yp.setFocus(CD, {
          scroll: !1
        })
      }
  },
  7842: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => QD,
      h: () => wD
    });
    var ID = cD(1414),
      pD = cD(1412);
    const iD = {
        "054c": "playstation",
        "057e": "nintendo"
      },
      fD = "28de",
      bD = new Set(["1205"]),
      QD = (DD, CD) => {
        const cD = (0, ID.e)(DD);
        if ((null === cD || void 0 === cD ? void 0 : cD.vendor) === fD) return bD.has(cD.product) ? "steamdeck" : "xbox";
        if (cD && iD[cD.vendor]) return iD[cD.vendor];
        if ((0, pD.e)(DD)) return "nintendo";
        const QD = `${DD} ${null!==CD&&void 0!==CD?CD:""}`.toLowerCase();
        return /dualsense|dualshock|playstation|sony/.test(QD) ? "playstation" : /nintendo|switch|joy-con|pro controller/.test(QD) ? "nintendo" : /steam deck/.test(QD) ? "steamdeck" : "xbox"
      },
      wD = DD => {
        var CD;
        return (null === (CD = (0, ID.e)(DD)) || void 0 === CD ? void 0 : CD.vendor) === fD
      }
  },
  7890: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => wD,
      g: () => bD
    });
    var ID = cD(7839);
    const pD = ["capture", "keyboard", "wheel", "inventory", "cursor", "focus", "gameplay"],
      iD = new Set(["capture", "gameplay"]),
      fD = ["Up", "Down", "Left", "Right"],
      bD = DD => fD.includes(DD),
      QD = .25;
    const wD = new class {
      constructor() {
        this.consumers = new Map, this.activeName = null, this.Lb = new Array(ID.R).fill(!1), this.previousHeld = new Array(ID.R).fill(!1), this.consumedButtons = new Array(ID.R).fill(!1), this.suppressedReleases = new Array(ID.R).fill(!1), this.wakeOwned = new Array(ID.R).fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.peek = null, this.lastFrame = (0, ID.t)()
      }
      register(DD) {
        return this.consumers.has(DD.name) && console.warn(`Controller consumer "${DD.name}" registered twice; the newer one replaces it.`), this.consumers.set(DD.name, DD), () => {
          var CD;
          this.consumers.get(DD.name) === DD && (this.activeName === DD.name ? (this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()) : (null === (CD = this.peek) || void 0 === CD ? void 0 : CD.over) === DD.name && (this.peek = null), this.consumers.delete(DD.name))
        }
      }
      getActiveConsumerName() {
        return this.activeName
      }
      isButtonHeld(DD) {
        return this.Lb[(0, ID.m)(DD)]
      }
      getLastFrame() {
        return this.lastFrame
      }
      clear() {
        this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()
      }
      reset() {
        this.deactivateCurrent(), this.activeName = null, this.Lb = new Array(ID.R).fill(!1), this.previousHeld = new Array(ID.R).fill(!1), this.consumedButtons.fill(!1), this.suppressedReleases.fill(!1), this.wakeOwned.fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.lastFrame = (0, ID.t)()
      }
      dispatch(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.lastFrame = DD, this.previousHeld = this.Lb, this.Lb = (0, ID.p)(DD.values, this.previousHeld);
        for (let iD = 0; iD < ID.R; iD++) this.suppressedReleases[iD] = !this.Lb[iD] && this.consumedButtons[iD], this.Lb[iD] || (this.consumedButtons[iD] = !1), this.wakeOwned[iD] && (this.Lb[iD] ? (this.consumedButtons[iD] = !0, this.wakeOwned[iD] = !1) : DD.values[iD] < ID.P && (this.wakeOwned[iD] = !1));
        Math.hypot(DD.leftStick.x, DD.leftStick.y) < QD && (this.leftStickConsumed = !1), Math.hypot(DD.rightStick.x, DD.rightStick.y) < QD && (this.rightStickConsumed = !1);
        const pD = this.pickActive();
        if ((null === pD || void 0 === pD ? void 0 : pD.name) !== this.activeName) {
          var fD, bD, wD, SD, BD, yD;
          const DD = this.activeName,
            CD = {
              left: !this.leftStickConsumed,
              right: !this.rightStickConsumed
            },
            cD = null !== (fD = null === pD || void 0 === pD || null === (bD = pD.peek) || void 0 === bD ? void 0 : bD.call(pD)) && void 0 !== fD ? fD : null,
            iD = null === DD && !!cD && !(null === (wD = this.consumers.get(cD.over)) || void 0 === wD || !wD.onPeekFrame),
            QD = cD && (cD.over === DD || iD) ? cD : null,
            MD = null !== this.peek && this.peek.over === (null === pD || void 0 === pD ? void 0 : pD.name) ? this.peek : null;
          this.deactivateCurrent(null !== QD, null !== MD), this.activeName = null !== (SD = null === pD || void 0 === pD ? void 0 : pD.name) && void 0 !== SD ? SD : null, null === DD || this.handOffPending || this.consumeAllHeld();
          const tD = null === (BD = null !== QD && void 0 !== QD ? QD : MD) || void 0 === BD ? void 0 : BD.stick;
          "left" === tD && CD.left ? this.leftStickConsumed = !1 : "right" === tD && CD.right && (this.rightStickConsumed = !1), this.peek = QD, pD || null === DD ? pD && (null === (yD = this.idleResume) || void 0 === yD ? void 0 : yD.name) === pD.name && (this.idleResume.left && (this.leftStickConsumed = !1), this.idleResume.right && (this.rightStickConsumed = !1)) : this.idleResume = {
            name: DD,
            left: CD.left && this.leftStickConsumed,
            right: CD.right && this.rightStickConsumed
          }, pD && (this.idleResume = null);
          for (let pD = 0; pD < ID.R; pD++) this.previousHeld[pD] && !this.Lb[pD] && (this.suppressedReleases[pD] = !0)
        }
        var MD, tD;
        (this.handOffPending = !1, pD) && (cD && !iD.has(pD.name) && this.consumeWakePress(pD), pD.onFrame(this.buildInput(DD, CD, cD)), this.peek && (null === (MD = this.consumers.get(this.peek.over)) || void 0 === MD || null === (tD = MD.onPeekFrame) || void 0 === tD || tD.call(MD, this.buildInput(DD, CD, !1, this.peek.stick))))
      }
      consumeWakePress(DD) {
        for (let pD = 0; pD < ID.R; pD++) {
          var CD, cD;
          const iD = ID.V[pD];
          (null !== (CD = null === (cD = DD.wakePressActs) || void 0 === cD ? void 0 : cD.call(DD, iD)) && void 0 !== CD ? CD : fD.includes(iD)) || (this.Lb[pD] ? this.consumedButtons[pD] = !0 : this.lastFrame.values[pD] >= ID.N && (this.wakeOwned[pD] = !0))
        }
      }
      pickActive() {
        for (const DD of pD) {
          const CD = this.consumers.get(DD);
          if (CD && CD.isActive()) return CD
        }
        return null
      }
      deactivateCurrent() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var cD, ID, pD, iD;
        this.activeName && (null === (cD = this.consumers.get(this.activeName)) || void 0 === cD || null === (ID = cD.onDeactivate) || void 0 === ID || ID.call(cD, DD));
        this.peek && !CD && (null === (pD = this.consumers.get(this.peek.over)) || void 0 === pD || null === (iD = pD.onDeactivate) || void 0 === iD || iD.call(pD, !1));
        this.peek = null
      }
      consumeAllHeld() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.idleResume = null;
        for (let pD = 0; pD < ID.R; pD++) this.Lb[pD] && (this.consumedButtons[pD] = !0);
        const {
          leftStick: CD,
          rightStick: cD
        } = this.lastFrame;
        this.leftStickConsumed = "left" !== DD && (this.leftStickConsumed || Math.hypot(CD.x, CD.y) >= QD), this.rightStickConsumed = "right" !== DD && (this.rightStickConsumed || Math.hypot(cD.x, cD.y) >= QD)
      }
      handOffHeldInput() {
        this.handOffPending = !0
      }
      consumeButton(DD) {
        const CD = (0, ID.m)(DD);
        this.Lb[CD] && (this.consumedButtons[CD] = !0)
      }
      buildInput(DD, CD, cD, pD) {
        const iD = this.Lb,
          fD = this.previousHeld,
          bD = pD ? new Array(ID.R).fill(!0) : [...this.consumedButtons],
          QD = pD ? bD : [...this.suppressedReleases],
          wD = !this.leftStickConsumed && (!pD || "left" === pD),
          SD = !this.rightStickConsumed && (!pD || "right" === pD);
        return {
          frame: DD,
          dtMs: CD,
          isHeld: DD => {
            const CD = (0, ID.m)(DD);
            return iD[CD] && !bD[CD]
          },
          wasPressed: DD => {
            const CD = (0, ID.m)(DD);
            return iD[CD] && !fD[CD] && !bD[CD]
          },
          wasReleased: DD => {
            const CD = (0, ID.m)(DD);
            return !iD[CD] && fD[CD] && !QD[CD]
          },
          value: CD => {
            const cD = (0, ID.m)(CD);
            return bD[cD] ? 0 : DD.values[cD]
          },
          leftStick: wD ? DD.leftStick : {
            x: 0,
            y: 0
          },
          rightStick: SD ? DD.rightStick : {
            x: 0,
            y: 0
          },
          wokeDevice: cD
        }
      }
    }
  },
  7865: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => BD.d,
      f: () => BD.g,
      h: () => xD,
      i: () => qD,
      j: () => JD,
      l: () => KD
    });
    var ID = cD(53),
      pD = cD(20),
      iD = cD(1440),
      fD = cD(36),
      bD = cD(7873),
      QD = cD(7839),
      wD = cD(7860),
      SD = cD(7834),
      BD = cD(1988),
      yD = cD(7881);
    const MD = {
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
      tD = "controllerSettings",
      ZD = ["bindings", "promptFamily", "hideButtonHints", "swapSticks", "swapConfirmBack", "leaderboardButton"],
      oD = ["auto", ...bD.c],
      vD = (DD, CD) => "string" === typeof CD && DD.includes(CD),
      ND = DD => CD => "number" === typeof CD && Number.isFinite(CD) ? (0, yD.x)(CD, DD) : void 0,
      gD = DD => "boolean" === typeof DD ? DD : void 0,
      XD = DD => CD => vD(DD, CD) ? CD : void 0,
      mD = {
        lookSensitivityX: ND(yD.lb),
        lookSensitivityY: ND(yD.lb),
        aimLookSensitivity: ND(yD.n),
        invertLookX: gD,
        invertLookY: gD,
        lookCurve: XD(QD.K),
        lookDeadzone: ND(yD.C),
        moveDeadzone: ND(yD.C),
        swapSticks: gD,
        autoSprint: gD,
        sneakMode: XD(["toggle", "hold"]),
        tapHoldTime: XD(["short", "medium", "long"]),
        attackMode: XD(["hold", "toggle"]),
        promptFamily: XD(oD),
        hideButtonHints: gD,
        vibration: gD,
        cursorSpeed: ND(yD.y),
        cursorMagnetism: gD,
        buttonRepeat: XD(QD.o),
        largePointer: gD,
        menuBackToCategories: gD,
        swapConfirmBack: gD,
        menuNavigation: XD(["hybrid", "focus", "cursor"]),
        inventoryNavigation: XD(["hybrid", "slot", "cursor"]),
        quickChat: XD(["wheel", "off"]),
        leaderboardButton: XD(["shop", "leaderboard"]),
        gyroAiming: gD,
        gyroSensitivity: ND(yD.P),
        gyroActivation: XD(["always", "aiming", "button"]),
        gyroButton: XD(QD.V),
        emoteButton: XD(["tapHold", "wheel"])
      },
      nD = [{
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
      OD = DD => {
        const CD = {};
        if ("object" !== typeof DD || null === DD) return CD;
        for (const [cD, ID] of Object.entries(DD)) Object.prototype.hasOwnProperty.call(wD.f, cD) && vD(QD.V, ID) && (CD[cD] = ID);
        return CD
      },
      PD = DD => {
        const CD = {};
        for (const cD of Object.keys(MD))("bindings" === cD ? Object.keys(DD.bindings).length > 0 : DD[cD] !== MD[cD]) && (CD[cD] = DD[cD]);
        0 !== Object.keys(CD).length ? fD.h.setItem(tD, CD) : fD.h.removeItem(tD)
      };
    let HD = (() => {
        const DD = fD.h.getItem(tD),
          CD = (DD => {
            const CD = "object" === typeof DD && null !== DD ? DD : {},
              cD = {
                ...MD,
                bindings: OD(CD.bindings)
              };
            for (const pD of Object.keys(mD)) {
              const DD = mD[pD](CD[pD]);
              void 0 !== DD && (cD[pD] = DD)
            }
            const ID = Object.keys(CD).filter((DD => !!Object.prototype.hasOwnProperty.call(MD, DD) && ("bindings" === DD ? "object" !== typeof CD.bindings || null === CD.bindings || Object.keys(CD.bindings).length !== Object.keys(cD.bindings).length : cD[DD] !== CD[DD])));
            return ID.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${ID.join(", ")}`), cD
          })(DD);
        return null !== DD && void 0 !== DD && PD(CD), CD
      })(),
      UD = {
        ...HD,
        ...(() => {
          if ("undefined" === typeof window) return {};
          const DD = {},
            CD = new URLSearchParams(window.location.search);
          for (const {
              param: cD,
              key: ID
            }
            of nD) {
            const pD = mD[ID](CD.get(cD));
            void 0 !== pD && (DD[ID] = pD)
          }
          return DD
        })()
      };
    const xD = () => UD,
      qD = () => {
        var DD, CD;
        const cD = xD().promptFamily;
        return "auto" !== cD ? cD : null !== (DD = null === (CD = SD.e.getActivePad()) || void 0 === CD ? void 0 : CD.family) && void 0 !== DD ? DD : "xbox"
      },
      JD = DD => {
        const CD = UD;
        HD = {
          ...HD,
          ...DD
        }, PD(HD), UD = {
          ...UD,
          ...DD
        }, (DD => {
          pD.i.Uo(BD.g, UD), ZD.some((CD => DD[CD] !== UD[CD])) && pD.i.Uo(BD.d, UD)
        })(CD)
      },
      KD = () => {
        const [DD, CD] = (0, ID.useState)(UD);
        return (0, iD.f)(BD.g, CD), DD
      }
  },
  8336: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => pD
    });
    const ID = new Set(["Alt", "AltGraph", "Meta", "OS", "AudioVolumeUp", "AudioVolumeDown", "AudioVolumeMute", "MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "BrowserBack", "BrowserForward", "BrowserHome", "GoBack", "LaunchApplication1", "LaunchApplication2", "LaunchMail", "PrintScreen", "Unidentified"]),
      pD = DD => ID.has(DD)
  },
  7834: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => ZD.b,
      e: () => gD
    });
    var ID = cD(7839),
      pD = cD(7842);
    const iD = .1,
      fD = .3;
    class bD {
      constructor() {
        this.deadzone = 0, this.anchor = null, this.steadyMs = 0, this.lastMs = null, this.returning = !0, this.anchorLearned = !1
      }
      observe(DD, CD) {
        const cD = null === this.lastMs ? 0 : Math.min(Math.max(0, CD - this.lastMs), 100);
        this.lastMs = CD;
        const ID = Math.hypot(DD.x, DD.y);
        if (ID >= fD) return this.anchor = null, void(this.returning = !0);
        ID >= iD || (this.returning = !1);
        const pD = this.anchor;
        if (!pD || Math.hypot(DD.x - pD.x, DD.y - pD.y) > .03) return this.anchorLearned && (this.returning = !1), this.anchor = {
          x: DD.x,
          y: DD.y
        }, this.steadyMs = 0, void(this.anchorLearned = !1);
        if (this.steadyMs += cD, this.steadyMs < 1e3) return;
        const bD = Math.max(ID, Math.hypot(pD.x, pD.y));
        bD < iD ? this.deadzone = 0 : this.returning && (this.deadzone = bD + .05, this.anchorLearned = !0)
      }
      getDeadzone() {
        return this.deadzone
      }
      apply(DD) {
        return Math.hypot(DD.x, DD.y) < this.deadzone ? {
          x: 0,
          y: 0
        } : DD
      }
    }
    const QD = (DD, CD) => {
        var cD, ID;
        return null !== (cD = DD && (null === (ID = Object.getOwnPropertyDescriptor(DD, CD)) || void 0 === ID ? void 0 : ID.get)) && void 0 !== cD ? cD : null
      },
      wD = DD => {
        const CD = DD.vendorName;
        return "string" === typeof CD ? CD : void 0
      },
      SD = ((DD, CD) => {
        const cD = QD(DD, "index"),
          ID = QD(DD, "id"),
          pD = QD(DD, "connected"),
          iD = QD(DD, "mapping"),
          fD = QD(DD, "buttons"),
          bD = QD(DD, "axes"),
          SD = QD(CD, "pressed"),
          BD = QD(CD, "value");
        return cD && ID && pD && iD && fD && bD && SD && BD ? DD => {
          const CD = fD.call(DD),
            QD = bD.call(DD),
            yD = {
              index: Number(cD.call(DD)),
              id: String(ID.call(DD)),
              connected: !0 === pD.call(DD),
              mapping: String(iD.call(DD)),
              buttons: [],
              axes: [],
              vendorName: wD(DD)
            };
          for (let cD = 0; cD < CD.length; cD++) yD.buttons.push({
            pressed: !0 === SD.call(CD[cD]),
            value: Number(BD.call(CD[cD]))
          });
          for (let cD = 0; cD < QD.length; cD++) yD.axes.push(Number(QD[cD]));
          return yD
        } : null
      })("undefined" === typeof Gamepad ? null : Gamepad.prototype, "undefined" === typeof GamepadButton ? null : GamepadButton.prototype),
      BD = "undefined" === typeof Navigator ? null : Navigator.prototype.getGamepads;
    var yD = cD(1407),
      MD = cD(1412);
    const tD = DD => ({
      pressed: DD,
      value: DD ? 1 : 0
    });
    var ZD = cD(1988);
    const oD = fD,
      vD = DD => {
        const CD = new Array(ID.R).fill(0);
        for (let cD = 0; cD < ID.R && cD < DD.buttons.length; cD++) {
          const pD = DD.buttons[cD];
          CD[cD] = pD.pressed && !(0, ID.H)(cD) ? Math.max(pD.value, ID.w) : pD.value
        }
        return CD
      },
      ND = (DD, CD) => {
        var cD, ID;
        return {
          x: null !== (cD = DD.axes[CD]) && void 0 !== cD ? cD : 0,
          y: null !== (ID = DD.axes[CD + 1]) && void 0 !== ID ? ID : 0
        }
      };
    const gD = new class {
      constructor(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : SD;
        this.readGamepads = DD, this.requireTrustedPads = CD, this.nativeReader = cD, this.running = !1, this.listening = !1, this.rafId = 0, this.lastTimestampMs = 0, this.activeInfo = null, this.slots = [], this.trustedIndices = new Set, this.warnedNonStandardIds = new Set, this.loggedReadError = !1, this.frameListeners = new Set, this.connectionListeners = new Set, this.anyPadConnected = !1, this.connectedListeners = new Set, this.handleConnectionEvent = DD => {
          DD.isTrusted && this.trustedIndices.add(DD.gamepad.index), this.wake()
        }, this.handleDisconnectionEvent = DD => {
          this.trustedIndices.delete(DD.gamepad.index)
        }, this.wy = DD => {
          if (this.rafId = 0, !this.running) return;
          const CD = 0 === this.lastTimestampMs ? 16 : Math.min(100, DD - this.lastTimestampMs);
          this.lastTimestampMs = DD;
          try {
            this.poll(DD, CD)
          } finally {
            this.anyPadConnected && (this.rafId = requestAnimationFrame(this.wy))
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
      onFrame(DD) {
        return this.frameListeners.add(DD), () => {
          this.frameListeners.delete(DD)
        }
      }
      onActivePadChanged(DD) {
        return this.connectionListeners.add(DD), () => {
          this.connectionListeners.delete(DD)
        }
      }
      getActivePad() {
        return this.activeInfo
      }
      hasConnectedPad() {
        return this.anyPadConnected
      }
      onConnectedPadsChanged(DD) {
        return this.connectedListeners.add(DD), () => {
          this.connectedListeners.delete(DD)
        }
      }
      getActiveGamepad() {
        if (!this.activeInfo) return null;
        const DD = this.readPads()[this.activeInfo.index],
          CD = DD ? this.readPad(DD) : null;
        return CD && CD.id === this.activeInfo.id ? DD : null
      }
      poll(DD, CD) {
        var cD, pD;
        const iD = this.readPads();
        let fD = null,
          QD = !1;
        const wD = [],
          SD = Math.max(iD.length, this.slots.length);
        for (let gD = 0; gD < SD; gD++) {
          var BD;
          const CD = gD < iD.length ? iD[gD] : null,
            cD = CD ? this.readPad(CD) : null;
          if (!cD || !cD.connected || !this.isUsable(cD)) {
            this.slots[gD] = null;
            continue
          }
          let pD = this.slots[gD];
          pD && pD.id === cD.id || (pD = {
            id: cD.id,
            Lb: [],
            leftSettled: !1,
            rightSettled: !1,
            leftRest: new bD,
            rightRest: new bD
          }, this.slots[gD] = pD);
          const SD = ND(cD, 0),
            yD = ND(cD, 2);
          !pD.leftSettled && Math.hypot(SD.x, SD.y) < oD && (pD.leftSettled = !0), !pD.rightSettled && Math.hypot(yD.x, yD.y) < oD && (pD.rightSettled = !0), pD.leftRest.observe(SD, DD), pD.rightRest.observe(yD, DD);
          const MD = vD(cD),
            tD = (0, ID.p)(MD, pD.Lb),
            ZD = pD.Lb,
            XD = tD.map(((DD, CD) => DD && !ZD[CD]));
          pD.Lb = tD;
          const mD = {
            pad: cD,
            slot: pD,
            values: MD
          };
          gD === (null === (BD = this.activeInfo) || void 0 === BD ? void 0 : BD.index) && cD.id === this.activeInfo.id ? (fD = mD, QD = XD.includes(!0)) : XD.includes(!0) && wD.push({
            polled: mD,
            rose: XD
          })
        }
        const yD = this.slots.some((DD => null !== DD));
        if (yD !== this.anyPadConnected) {
          this.anyPadConnected = yD;
          for (const DD of this.connectedListeners) DD()
        }
        const MD = null !== (cD = null === (pD = fD) || void 0 === pD ? void 0 : pD.slot.Lb) && void 0 !== cD ? cD : [],
          tD = QD ? void 0 : wD.find((DD => {
            let {
              rose: CD
            } = DD;
            return CD.some(((DD, CD) => DD && !MD[CD]))
          }));
        if (tD ? (fD = tD.polled, this.setActive(tD.polled.pad)) : this.activeInfo && !fD && this.setActive(null), !fD || !this.activeInfo) return;
        const ZD = ((DD, CD) => {
          let {
            pad: cD,
            slot: pD,
            values: iD
          } = DD;
          const fD = (0, ID.t)(CD);
          return fD.values = iD, pD.leftSettled && (fD.leftStick = pD.leftRest.apply(ND(cD, 0))), pD.rightSettled && (fD.rightStick = pD.rightRest.apply(ND(cD, 2))), fD
        })(fD, DD);
        for (const ID of this.frameListeners) ID(ZD, CD, this.activeInfo)
      }
      readPad(DD) {
        const CD = this.readSnapshot(DD);
        return CD && (0, MD.h)(CD) ? (DD => {
          const CD = CD => {
              var cD;
              return null !== (cD = DD.buttons[CD]) && void 0 !== cD ? cD : tD(!1)
            },
            cD = CD => {
              var cD;
              return null !== (cD = DD.axes[CD]) && void 0 !== cD ? cD : 0
            },
            ID = DD.axes.length > 9,
            pD = ID ? (DD => {
              const CD = 0 !== DD;
              return {
                up: CD && (DD >= -1 && DD < -.7 || DD >= .95 && DD <= 1),
                right: CD && DD >= -.75 && DD < -.1,
                down: CD && DD >= -.2 && DD < .45,
                left: CD && DD >= .4 && DD <= 1
              }
            })(cD(9)) : {
              up: cD(5) < -.5,
              down: cD(5) > .5,
              left: cD(4) < -.5,
              right: cD(4) > .5
            };
          return {
            ...DD,
            mapping: "standard",
            buttons: [CD(1), CD(2), CD(0), CD(3), CD(4), CD(5), CD(6), CD(7), CD(8), CD(9), CD(10), CD(11), tD(pD.up), tD(pD.down), tD(pD.left), tD(pD.right), CD(12)],
            axes: [cD(0), cD(1), cD(2), cD(ID ? 5 : 3)]
          }
        })(CD) : CD
      }
      readSnapshot(DD) {
        if (this.nativeReader) try {
          return this.nativeReader(DD)
        } catch {
          if (this.requireTrustedPads) return null
        }
        return this.requireTrustedPads ? null : (DD => {
          const CD = DD;
          return {
            index: CD.index,
            id: CD.id,
            connected: CD.connected,
            mapping: CD.mapping,
            buttons: Array.from(CD.buttons, (DD => ({
              pressed: DD.pressed,
              value: DD.value
            }))),
            axes: Array.from(CD.axes),
            vendorName: wD(DD)
          }
        })(DD)
      }
      isUsable(DD) {
        return !(0, yD.h)(DD.id) && ("standard" !== DD.mapping ? (this.warnedNonStandardIds.has(DD.id) || (this.warnedNonStandardIds.add(DD.id), console.warn(`Controller "${DD.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.trustedIndices.has(DD.index))
      }
      setActive(DD) {
        this.activeInfo = DD ? {
          index: DD.index,
          id: DD.id,
          family: (0, pD.e)(DD.id, DD.vendorName)
        } : null;
        for (const CD of this.connectionListeners) CD(this.activeInfo)
      }
      readPads() {
        try {
          return this.readGamepads()
        } catch (DD) {
          return this.loggedReadError || (this.loggedReadError = !0, console.warn("Reading gamepads failed; controller input is unavailable.", DD)), []
        }
      }
      wake() {
        this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.wy))
      }
    }((() => BD ? BD.call(navigator) : []), !0);
    gD.listenForConnections()
  },
  8347: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => ID
    });
    const ID = {
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
  8439: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => fD,
      f: () => bD
    });
    var ID = cD(20),
      pD = cD(8428);
    let iD = !1;
    const fD = () => iD,
      bD = DD => {
        DD !== iD && (iD = DD, ID.i.Uo(pD.m, iD))
      }
  },
  8430: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => bD,
      f: () => QD
    });
    var ID = cD(20),
      pD = cD(8428);
    let iD = null,
      fD = 0;
    const bD = () => iD,
      QD = DD => {
        null === DD && null === iD || (iD = null === DD ? null : {
          id: ++fD,
          holdMs: DD
        }, ID.i.Uo(pD.p, iD))
      }
  },
  8448: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => fD,
      d: () => bD
    });
    var ID = cD(20),
      pD = cD(8428);
    let iD = !1;
    const fD = () => iD,
      bD = DD => {
        DD !== iD && (iD = DD, ID.i.Uo(pD.t, iD))
      }
  },
  8534: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => fD,
      g: () => bD
    });
    var ID = cD(20),
      pD = cD(8428);
    let iD = !1;
    const fD = () => iD,
      bD = DD => {
        DD !== iD && (iD = DD, ID.i.Uo(pD.x, iD))
      }
  },
  8384: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => ID
    });
    class ID {
      constructor() {
        this.downAtMs = null
      }
      update(DD, CD, cD, ID) {
        if (DD) return this.downAtMs = cD, null;
        if (null === this.downAtMs) return null;
        const pD = cD - this.downAtMs >= ID;
        return CD ? pD ? (this.downAtMs = null, "hold") : null : (this.downAtMs = null, pD ? "hold" : "tap")
      }
      release() {
        this.downAtMs = null
      }
    }
  },
  7906: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => BD,
      c: () => yD,
      g: () => bD,
      j: () => gD,
      m: () => ND
    });
    var ID = cD(36),
      pD = cD(7873),
      iD = cD(7839);
    const fD = (() => {
        try {
          return cD(7913)
        } catch {
          return null
        }
      })(),
      bD = [...iD.V, "LeftStick", "RightStick"],
      QD = new Map,
      wD = {
        xbox: "xbox",
        playstation: "playstation",
        nintendo: "nintendo",
        steamdeck: "steamdeck",
        generic: "xbox"
      },
      SD = (new Set(Object.values(wD)), {
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
      BD = (DD, CD) => {
        var cD, ID;
        return null !== (cD = null === (ID = SD[wD[DD]]) || void 0 === ID ? void 0 : ID[CD]) && void 0 !== cD ? cD : 1
      },
      yD = (DD, CD) => {
        const cD = `./${wD[DD]}/${CD}.svg`;
        let ID = QD.get(cD);
        return void 0 === ID && (ID = fD ? fD(cD) : "", QD.set(cD, ID)), ID
      },
      MD = new Set,
      tD = [],
      ZD = DD => {
        if (!MD.has(DD)) {
          MD.add(DD);
          for (const CD of bD) {
            const cD = yD(DD, CD);
            if (cD) {
              const DD = new Image;
              DD.crossOrigin = "anonymous", DD.src = cD, tD.push(DD)
            }
          }
        }
      },
      oD = "controllerGlyphFamily";
    let vD = null;
    const ND = DD => {
        DD !== vD && (vD = DD, ID.h.setItem(oD, DD), ZD(DD))
      },
      gD = () => {
        const DD = ID.h.getItem(oD);
        (0, pD.d)(DD) && DD !== vD && (vD = DD, ZD(DD))
      }
  },
  8555: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => TD,
      d: () => GD
    });
    var ID = cD(53),
      pD = cD(20),
      iD = cD(1440),
      fD = cD(7851),
      bD = cD(7834),
      QD = cD(7890),
      wD = cD(7865);
    const SD = {
        x: 0,
        y: 0,
        z: 0
      },
      BD = Math.PI / 180,
      yD = DD => Math.hypot(DD.x, DD.y, DD.z),
      MD = (DD, CD) => ({
        x: DD.x * CD,
        y: DD.y * CD,
        z: DD.z * CD
      }),
      tD = (DD, CD) => ({
        x: DD.x + CD.x,
        y: DD.y + CD.y,
        z: DD.z + CD.z
      }),
      ZD = (DD, CD) => ({
        x: DD.x - CD.x,
        y: DD.y - CD.y,
        z: DD.z - CD.z
      }),
      oD = DD => {
        const CD = yD(DD);
        return 0 === CD ? SD : MD(DD, 1 / CD)
      },
      vD = DD => ({
        min: {
          ...DD
        },
        max: {
          ...DD
        }
      }),
      ND = (DD, CD) => ({
        min: {
          x: Math.min(DD.min.x, CD.x),
          y: Math.min(DD.min.y, CD.y),
          z: Math.min(DD.min.z, CD.z)
        },
        max: {
          x: Math.max(DD.max.x, CD.x),
          y: Math.max(DD.max.y, CD.y),
          z: Math.max(DD.max.z, CD.z)
        }
      }),
      gD = (DD, CD) => DD.max.x - DD.min.x <= CD && DD.max.y - DD.min.y <= CD && DD.max.z - DD.min.z <= CD;
    class XD {
      constructor() {
        this.bias = SD, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = SD, this.windowSec = 0
      }
      update(DD) {
        const CD = this.gyroRange ? ND(this.gyroRange, DD.gyro) : vD(DD.gyro),
          cD = DD.accel ? this.accelRange ? ND(this.accelRange, DD.accel) : vD(DD.accel) : null;
        if (!gD(CD, 1) || cD && !gD(cD, .01)) return void this.restartWindow(DD);
        if (this.gyroRange = CD, this.accelRange = cD, this.sum = tD(this.sum, MD(DD.gyro, DD.dtSec)), this.windowSec += DD.dtSec, this.windowSec < 1) return;
        const ID = MD(this.sum, 1 / this.windowSec);
        if (yD(ID) > 5) return;
        const pD = ZD(ID, this.bias);
        let iD = 0;
        !this.calibrated || this.windowSec >= 3 ? iD = 1 : yD(pD) <= 1 && (iD = Math.min(1, DD.dtSec / 1)), this.bias = tD(this.bias, MD(pD, iD)), this.calibrated = this.calibrated || iD > 0
      }
      correct(DD) {
        return ZD(DD, this.bias)
      }
      getBias() {
        return this.bias
      }
      isCalibrated() {
        return this.calibrated
      }
      reset() {
        this.bias = SD, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = SD, this.windowSec = 0
      }
      restartWindow(DD) {
        this.gyroRange = vD(DD.gyro), this.accelRange = DD.accel ? vD(DD.accel) : null, this.sum = SD, this.windowSec = 0
      }
    }
    class mD {
      constructor() {
        this.down = null
      }
      update(DD, CD, cD) {
        const ID = oD(MD(CD, -1));
        if (!this.down) return this.down = ID, ID;
        const pD = MD(DD, BD * cD),
          iD = this.down,
          fD = {
            x: iD.x - (pD.y * iD.z - pD.z * iD.y),
            y: iD.y - (pD.z * iD.x - pD.x * iD.z),
            z: iD.z - (pD.x * iD.y - pD.y * iD.x)
          },
          bD = 0 === yD(ID) ? 0 : Math.min(1, cD / .25);
        var QD, wD;
        return this.down = oD((wD = bD, tD(QD = fD, MD(ZD(ID, QD), wD)))), this.down
      }
      reset() {
        this.down = null
      }
    }
    class nD {
      constructor() {
        this.entries = [], this.windowSec = 0
      }
      apply(DD, CD, cD) {
        const ID = Math.hypot(DD, CD),
          pD = Math.max(0, Math.min(1, (ID - 2) / 2)),
          iD = {
            yaw: DD * (1 - pD),
            pitch: CD * (1 - pD),
            dtSec: cD
          };
        for (this.entries.push(iD), this.windowSec += cD; this.entries.length > 1 && this.windowSec - this.entries[0].dtSec >= .125;) this.windowSec -= this.entries[0].dtSec, this.entries.shift();
        let fD = 0,
          bD = 0;
        for (const wD of this.entries) fD += wD.yaw * wD.dtSec, bD += wD.pitch * wD.dtSec;
        const QD = this.windowSec > 0 ? {
          yaw: fD / this.windowSec,
          pitch: bD / this.windowSec
        } : {
          yaw: iD.yaw,
          pitch: iD.pitch
        };
        return {
          yaw: DD * pD + QD.yaw,
          pitch: CD * pD + QD.pitch
        }
      }
      reset() {
        this.entries = [], this.windowSec = 0
      }
    }
    class OD {
      constructor() {
        this.calibrator = new XD, this.gravity = new mD, this.smoother = new nD
      }
      process(DD, CD, cD) {
        const ID = Math.max(0, Math.min(.05, CD));
        this.calibrator.update({
          ...DD,
          dtSec: ID
        });
        const pD = this.calibrator.correct(DD.gyro);
        let iD = pD.y;
        "player" === cD && DD.accel && (iD = ((DD, CD) => {
          const cD = DD.y * CD.y + DD.z * CD.z;
          return -Math.sign(cD) * Math.min(1.41 * Math.abs(cD), Math.hypot(DD.y, DD.z))
        })(pD, this.gravity.update(pD, DD.accel, ID)));
        const fD = this.smoother.apply(iD, pD.x, ID),
          bD = ((DD, CD) => {
            const cD = Math.hypot(DD, CD);
            if (cD >= 1) return {
              yaw: DD,
              pitch: CD
            };
            const ID = cD / 1;
            return {
              yaw: DD * ID,
              pitch: CD * ID
            }
          })(fD.yaw, fD.pitch);
        return {
          yawDeg: bD.yaw * ID,
          pitchDeg: bD.pitch * ID
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
    const PD = (DD, CD) => {
      var cD, ID, pD;
      const iD = CD * BD,
        fD = null !== (cD = DD.beta) && void 0 !== cD ? cD : 0,
        bD = null !== (ID = DD.gamma) && void 0 !== ID ? ID : 0;
      return {
        x: fD * Math.cos(iD) - bD * Math.sin(iD),
        y: fD * Math.sin(iD) + bD * Math.cos(iD),
        z: null !== (pD = DD.alpha) && void 0 !== pD ? pD : 0
      }
    };
    var HD = cD(8559);
    class UD {
      constructor(DD, CD, cD) {
        this.hid = DD, this.sink = CD, this.onControllersChanged = cD, this.controllers = new Map, this.running = !1, this.openedCount = 0, this.opening = new Set, this.disconnectedWhileOpening = new Set, this.switchPacketCounter = 0, this.onConnect = DD => {
          this.openController(DD.device).catch((DD => {
            console.warn("Could not open motion controller", DD)
          }))
        }, this.onDisconnect = DD => {
          this.opening.has(DD.device) && this.disconnectedWhileOpening.add(DD.device);
          const CD = this.controllers.get(DD.device);
          CD && (this.forget(CD), this.onControllersChanged())
        }
      }
      async start() {
        if (this.running) return;
        this.running = !0, this.hid.addEventListener("connect", this.onConnect), this.hid.addEventListener("disconnect", this.onDisconnect);
        const DD = await this.hid.getDevices();
        for (const CD of DD) await this.openController(CD).catch((DD => {
          console.warn("Could not open motion controller", DD)
        }))
      }
      stop() {
        this.running = !1, this.hid.removeEventListener("connect", this.onConnect), this.hid.removeEventListener("disconnect", this.onDisconnect);
        for (const DD of [...this.controllers.values()]) this.forget(DD);
        this.onControllersChanged()
      }
      async request() {
        const DD = await this.hid.requestDevice({
          filters: HD.k
        });
        let CD = 0;
        for (const cD of DD) await this.openController(cD).catch((DD => {
          console.warn("Could not open motion controller", DD), CD++
        }));
        return CD
      }
      async hasGrantedController() {
        return (await this.hid.getDevices()).some((DD => null !== (0, HD.f)(DD.vendorId, DD.productId)))
      }
      getConnectedKinds() {
        return [...this.controllers.values()].map((DD => DD.kind))
      }
      forget(DD) {
        DD.device.removeEventListener("inputreport", DD.onReport), this.controllers.get(DD.device) === DD && this.controllers.delete(DD.device)
      }
      async openController(DD) {
        const CD = (0, HD.f)(DD.vendorId, DD.productId);
        if (!CD || !this.running || this.controllers.has(DD) || this.opening.has(DD)) return;
        this.opening.add(DD);
        let cD = !1;
        try {
          DD.opened || await DD.open()
        } finally {
          this.opening.delete(DD), cD = this.disconnectedWhileOpening.delete(DD)
        }
        if (cD) return void DD.close().catch((DD => {
          console.debug("Could not close an unplugged motion controller", DD)
        }));
        if (!this.running) return;
        const ID = {
          device: DD,
          kind: CD,
          lastClock: null,
          lastEventMs: null,
          lastReadingMs: -1 / 0,
          openedOrder: this.openedCount++,
          onReport: DD => {
            this.onReport(ID, DD)
          }
        };
        this.controllers.set(DD, ID), DD.addEventListener("inputreport", ID.onReport), this.onControllersChanged();
        try {
          await this.enableMotion(ID)
        } catch (pD) {
          console.warn(`Could not turn on motion for ${CD}`, pD), this.controllers.get(DD) === ID && (this.forget(ID), this.onControllersChanged())
        }
      }
      async enableMotion(DD) {
        let {
          device: CD,
          kind: cD
        } = DD;
        if ((0, HD.i)(cD))
          for (const ID of HD.y[cD]) await CD.receiveFeatureReport(ID).catch((DD => {
            console.debug(`Motion controller feature report ${ID} unavailable`, DD)
          }));
        else
          for (let ID = 0; ID < 2; ID++)
            for (const {
                subcommand: DD,
                args: cD
              }
              of HD.B) await CD.sendReport(HD.E, (0, HD.e)(this.switchPacketCounter++, DD, cD)), await new Promise((DD => {
              setTimeout(DD, 60)
            }))
      }
      onReport(DD, CD) {
        const cD = (0, HD.q)(DD.kind, CD.reportId, CD.data, DD.device.productId);
        if (!cD) return;
        const ID = null === DD.lastEventMs ? 0 : (CD.timeStamp - DD.lastEventMs) / 1e3;
        DD.lastEventMs = CD.timeStamp;
        let pD = cD.dtSec;
        if (null !== pD && ID > 0 && (pD = Math.max(.001, Math.min(.017, ID / cD.readings.length))), null === pD && null !== cD.sensorClock && (0, HD.i)(DD.kind)) {
          const CD = (0, HD.u)(DD.kind, DD.lastClock, cD.sensorClock);
          DD.lastClock = cD.sensorClock, pD = 0 === CD ? null : CD
        }
        if (DD.lastReadingMs = CD.timeStamp, this.isPreferred(DD, CD.timeStamp))
          for (const fD of cD.readings) {
            var iD;
            this.sink(fD, null !== (iD = pD) && void 0 !== iD ? iD : ID, `hid${DD.openedOrder}`)
          }
      }
      isPreferred(DD, CD) {
        const cD = DD => 1e6 * HD.o[DD.kind] + DD.openedOrder;
        for (const ID of this.controllers.values())
          if (ID !== DD && CD - ID.lastReadingMs < 500 && cD(ID) < cD(DD)) return !1;
        return !0
      }
    }
    var xD = cD(90);
    const qD = () => DeviceMotionEvent,
      JD = () => "undefined" !== typeof window && "undefined" !== typeof DeviceMotionEvent && window.isSecureContext && (0, xD.isMobile)(),
      KD = () => {
        var DD;
        const CD = null === (DD = window.screen.orientation) || void 0 === DD ? void 0 : DD.angle;
        return "number" === typeof CD ? CD : "number" === typeof window.orientation ? window.orientation : 0
      };
    class aD {
      constructor(DD, CD) {
        this.sink = DD, this.onStateChanged = CD, this.state = "off", this.lastEventMs = null, this.noSensorTimer = null, this.wanted = !1, this.permissionRequest = null, this.granted = !1, this.onGesture = () => {
          this.requestPermission().catch((DD => {
            console.warn("Could not enable the motion sensor", DD)
          }))
        }, this.onMotion = DD => {
          const CD = DD.rotationRate;
          if (!CD || null === CD.alpha && null === CD.beta && null === CD.gamma) return;
          const cD = null === this.lastEventMs ? 0 : (DD.timeStamp - this.lastEventMs) / 1e3;
          this.lastEventMs = DD.timeStamp, this.clearNoSensorTimer(), this.setState("on"), this.sink({
            gyro: PD(CD, KD()),
            accel: null
          }, cD, "phone")
        }
      }
      getState() {
        return this.state
      }
      start() {
        if (this.wanted = !0, "off" === this.state) return "function" !== typeof qD().requestPermission || this.granted ? void this.listen() : (this.setState("needsPermission"), void this.armGestureRequest())
      }
      requestPermission() {
        return this.permissionRequest || (this.permissionRequest = this.askPermission().finally((() => {
          this.permissionRequest = null
        }))), this.permissionRequest
      }
      async askPermission() {
        const DD = qD().requestPermission;
        if (!this.wanted) return;
        if ("function" !== typeof DD) return void this.listen();
        let CD;
        this.disarmGestureRequest();
        try {
          CD = await DD.call(DeviceMotionEvent)
        } catch (cD) {
          throw this.wanted && "needsPermission" === this.state && this.armGestureRequest(), cD
        }
        this.wanted && ("granted" === CD ? (this.granted = !0, this.listen()) : this.setState("denied"))
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
      setState(DD) {
        this.state !== DD && (this.state = DD, this.onStateChanged())
      }
    }
    const VD = "controllerGyroStatusChanged",
      zD = {
        Qq: 0,
        wq: 0
      },
      jD = DD => {
        var CD, cD;
        return "undefined" === typeof document || (null === (CD = null === (cD = document.featurePolicy) || void 0 === cD ? void 0 : cD.allowsFeature(DD)) || void 0 === CD || CD)
      };
    class lD {
      constructor() {
        this.processor = new OD, this.hid = void 0, this.hidBlocked = void 0, this.phone = void 0, this.phoneBlocked = void 0, this.source = null, this.pendingYawDeg = 0, this.pendingPitchDeg = 0, this.lastDrainMs = -1 / 0, this.lastHidReadingMs = -1 / 0, this.running = !1, this.phoneRunning = !1, this.syncWithSettings = DD => {
          const CD = DD.gyroAiming && bD.e.hasConnectedPad();
          var cD, ID;
          CD !== this.phoneRunning && (this.phoneRunning = CD, CD ? null === (cD = this.phone) || void 0 === cD || cD.start() : null === (ID = this.phone) || void 0 === ID || ID.stop());
          if (DD.gyroAiming !== this.running) {
            var pD, iD;
            if (this.running = DD.gyroAiming, this.running) null === (pD = this.hid) || void 0 === pD || pD.start().catch((DD => {
              console.warn("Could not open motion controllers", DD)
            }));
            else null === (iD = this.hid) || void 0 === iD || iD.stop(), this.processor.reset(), this.source = null, this.discardPending();
            this.publishStatus()
          }
        }, this.publishStatus = () => {
          pD.i.Uo(VD, this.getStatus())
        };
        const DD = (() => {
            var DD;
            return "undefined" !== typeof navigator && window.isSecureContext && null !== (DD = navigator.hid) && void 0 !== DD ? DD : null
          })(),
          CD = jD("hid");
        this.hidBlocked = null !== DD && !CD, this.hid = DD && CD ? new UD(DD, ((DD, CD, cD) => {
          this.lastHidReadingMs = performance.now(), this.feed(DD, CD, "player", cD)
        }), this.publishStatus) : null;
        const cD = jD("accelerometer") && jD("gyroscope");
        this.phoneBlocked = JD() && !cD, this.phone = JD() && cD ? new aD(((DD, CD, cD) => {
          performance.now() - this.lastHidReadingMs >= 500 && this.feed(DD, CD, "local", cD)
        }), this.publishStatus) : null, pD.i.subscribe(wD.f, this.syncWithSettings), bD.e.onConnectedPadsChanged((() => {
          this.syncWithSettings((0, wD.h)()), this.publishStatus()
        })), this.syncWithSettings((0, wD.h)())
      }
      isSupported() {
        return null !== this.hid || null !== this.phone
      }
      getStatus() {
        var DD, CD, cD, ID;
        return {
          hidSupported: null !== this.hid,
          hidBlocked: this.hidBlocked,
          phoneSupported: null !== this.phone,
          phoneBlocked: this.phoneBlocked,
          controllers: null !== (DD = null === (CD = this.hid) || void 0 === CD ? void 0 : CD.getConnectedKinds()) && void 0 !== DD ? DD : [],
          phoneMotion: null !== (cD = null === (ID = this.phone) || void 0 === ID ? void 0 : ID.getState()) && void 0 !== cD ? cD : "off",
          padConnected: bD.e.hasConnectedPad()
        }
      }
      async connectController() {
        return this.hid ? this.hid.request() : 0
      }
      async connectControllerIfNoneGranted() {
        this.hid && !await this.hid.hasGrantedController() && await this.hid.request()
      }
      async allowPhoneMotion() {
        var DD;
        await (null === (DD = this.phone) || void 0 === DD ? void 0 : DD.requestPermission())
      }
      drainLookDelta() {
        const DD = performance.now();
        DD - this.lastDrainMs > 500 && this.discardPending(), this.lastDrainMs = DD;
        const CD = {
          yawDeg: this.pendingYawDeg,
          pitchDeg: this.pendingPitchDeg
        };
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0;
        const cD = (0, wD.h)();
        return cD.gyroAiming && (DD => {
          let {
            activation: CD,
            isHeld: cD,
            useButton: ID,
            gyroButton: pD
          } = DD;
          return "always" === CD || cD("aiming" === CD ? ID : pD)
        })({
          activation: cD.gyroActivation,
          isHeld: DD => QD.d.isButtonHeld(DD),
          useButton: (0, fD.h)("use"),
          gyroButton: cD.gyroButton
        }) ? ((DD, CD) => ({
          Qq: -DD.yawDeg * CD * BD,
          wq: -DD.pitchDeg * CD * BD
        }))(CD, cD.gyroSensitivity) : zD
      }
      discardPending() {
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0
      }
      injectMotion(DD, CD) {
        this.feed(DD, CD, "local", "injected")
      }
      getCalibration() {
        return this.processor.getCalibration()
      }
      feed(DD, CD, cD, ID) {
        this.source !== ID && (this.processor.reset(), this.source = ID);
        const pD = this.processor.process(DD, CD, cD);
        this.pendingYawDeg += pD.yawDeg, this.pendingPitchDeg += pD.pitchDeg
      }
    }
    let LD = null;
    const TD = () => (LD || (LD = new lD), LD),
      GD = () => {
        const [DD, CD] = (0, ID.useState)((() => TD().getStatus()));
        return (0, iD.f)(VD, CD), (0, ID.useEffect)((() => {
          CD(TD().getStatus())
        }), []), DD
      }
  },
  8559: (DD, CD, cD) => {
    cD.d(CD, {
      B: () => nD,
      E: () => gD,
      e: () => mD,
      f: () => QD,
      i: () => ID,
      k: () => bD,
      l: () => wD,
      o: () => SD,
      q: () => ND,
      u: () => oD,
      y: () => OD
    });
    const ID = DD => "dualShock4" === DD || "dualSense" === DD,
      pD = 1356,
      iD = 1406,
      fD = [{
        vendorId: pD,
        productId: 1476,
        kind: "dualShock4"
      }, {
        vendorId: pD,
        productId: 2508,
        kind: "dualShock4"
      }, {
        vendorId: pD,
        productId: 2976,
        kind: "dualShock4"
      }, {
        vendorId: pD,
        productId: 3302,
        kind: "dualSense"
      }, {
        vendorId: pD,
        productId: 3570,
        kind: "dualSense"
      }, {
        vendorId: iD,
        productId: 8201,
        kind: "switchPro"
      }, {
        vendorId: iD,
        productId: 8198,
        kind: "joyConLeft"
      }, {
        vendorId: iD,
        productId: 8199,
        kind: "joyConRight"
      }],
      bD = fD.map((DD => {
        let {
          vendorId: CD,
          productId: cD
        } = DD;
        return {
          vendorId: CD,
          productId: cD
        }
      })),
      QD = (DD, CD) => {
        var cD, ID;
        return null !== (cD = null === (ID = fD.find((cD => cD.vendorId === DD && cD.productId === CD))) || void 0 === ID ? void 0 : ID.kind) && void 0 !== cD ? cD : null
      },
      wD = {
        dualShock4: "DualShock 4",
        dualSense: "DualSense",
        switchPro: "Switch Pro Controller",
        joyConLeft: "Joy-Con (L)",
        joyConRight: "Joy-Con (R)"
      },
      SD = {
        dualSense: 0,
        dualShock4: 0,
        switchPro: 0,
        joyConRight: 1,
        joyConLeft: 2
      },
      BD = 2e3 / 32767,
      yD = 1 / 8192,
      MD = 936 / 13371,
      tD = (DD, CD, cD) => ({
        x: DD.getInt16(CD, !0) * cD,
        y: DD.getInt16(CD + 2, !0) * cD,
        z: DD.getInt16(CD + 4, !0) * cD
      }),
      ZD = DD => 0 === DD.x && 0 === DD.y && 0 === DD.z,
      oD = (DD, CD, cD) => null === CD ? null : "dualShock4" === DD ? 16 * (cD - CD & 65535) / 3 / 1e6 : (cD - CD >>> 0) / 3 / 1e6,
      vD = (DD, CD) => "joyConRight" === CD ? {
        x: DD.y,
        y: -DD.z,
        z: -DD.x
      } : {
        x: -DD.y,
        y: DD.z,
        z: -DD.x
      },
      ND = (DD, CD, cD, pD) => ID(DD) ? ((DD, CD, cD, ID) => {
        const pD = ((DD, CD, cD) => "dualShock4" === DD ? 1 === CD && cD >= 63 ? 0 : 17 === CD && cD >= 65 ? 2 : null : 1 === CD && cD >= 62 ? 0 : 49 === CD && cD >= 63 ? 1 : null)(DD, CD, cD.byteLength);
        if (null === pD) return null;
        if (2976 === ID && 1 === CD && 0 !== (4 & cD.getUint8(30))) return null;
        const iD = pD + ("dualShock4" === DD ? 12 : 15),
          fD = tD(cD, iD, BD),
          bD = tD(cD, iD + 6, yD);
        return ZD(fD) && ZD(bD) ? null : {
          readings: [{
            gyro: fD,
            accel: bD
          }],
          dtSec: null,
          sensorClock: "dualShock4" === DD ? cD.getUint16(pD + 9, !0) : cD.getUint32(pD + 27, !0)
        }
      })(DD, CD, cD, pD) : ((DD, CD, cD) => {
        if (48 !== CD && 49 !== CD || cD.byteLength < 48) return null;
        const ID = [];
        for (let pD = 0; pD < 3; pD++) {
          const CD = tD(cD, 12 + 12 * pD, 244e-6),
            iD = tD(cD, 18 + 12 * pD, MD);
          if (ZD(iD) && ZD(CD)) return null;
          ID.push({
            gyro: vD(iD, DD),
            accel: vD(CD, DD)
          })
        }
        return {
          readings: ID,
          dtSec: .005,
          sensorClock: null
        }
      })(DD, CD, cD),
      gD = 1,
      XD = [0, 1, 64, 64, 0, 1, 64, 64],
      mD = (DD, CD, cD) => new Uint8Array([15 & DD, ...XD, CD, ...cD]),
      nD = [{
        subcommand: 64,
        args: [1]
      }, {
        subcommand: 3,
        args: [48]
      }],
      OD = {
        dualShock4: [2, 5],
        dualSense: [5]
      }
  },
  7893: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => qD,
      e: () => lD,
      h: () => vD,
      i: () => MD.e,
      l: () => aD,
      o: () => KD,
      p: () => ND,
      r: () => VD,
      v: () => MD.l,
      z: () => MD.p,
      B: () => LD,
      D: () => MD.s,
      G: () => PD
    });
    var ID = cD(53),
      pD = cD(16),
      iD = cD(20),
      fD = cD(1440),
      bD = cD(1284),
      QD = cD(7865),
      wD = cD(7899),
      SD = cD(7842),
      BD = cD(7834),
      yD = cD(7906),
      MD = cD(1388),
      tD = cD(7839),
      ZD = cD(8336),
      oD = cD(4186);
    const vD = DD => !DD.repeat && !(0, ZD.e)(DD.key),
      ND = "PadHidesCursor";
    let gD = !1;
    const XD = DD => {
        DD !== gD && (gD = DD, document.documentElement.classList.toggle(ND, DD))
      },
      mD = new class {
        constructor() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
        observe(DD) {
          let CD = !1,
            cD = !1;
          DD.values.forEach(((DD, ID) => {
            const pD = DD >= (this.buttonsDown[ID] ? tD.P : tD.N);
            pD && !this.buttonsDown[ID] && (CD = !0, cD = !0), this.buttonsDown[ID] = pD
          }));
          return [DD.leftStick, DD.rightStick].forEach(((DD, ID) => {
            const pD = this.stickAnchors[ID];
            Math.hypot(DD.x, DD.y) < (pD ? tD.P : .3) ? this.stickAnchors[ID] = null : (!pD || Math.hypot(DD.x - pD.x, DD.y - pD.y) >= .3) && (this.stickAnchors[ID] = {
              x: DD.x,
              y: DD.y
            }, CD = !0, cD ||= !pD)
          })), CD && (this.lastActivityMs = DD.timestampMs), this.onlyMovedOn = CD && !cD, CD
        }
        wasOnlyMoveOn() {
          return this.onlyMovedOn
        }
        isHolding(DD) {
          return !(DD - this.lastActivityMs >= 1e3) && (this.buttonsDown.some((DD => DD)) || this.stickAnchors.some((DD => null !== DD)))
        }
        isStickOffRest() {
          return this.stickAnchors.some((DD => null !== DD))
        }
        reset() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
      };
    let nD = null,
      OD = !1;
    const PD = () => OD;
    let HD = null,
      UD = !1,
      xD = null;
    const qD = () => xD;
    let JD = !1;
    const KD = DD => {
        if (!mD.observe(DD)) return !1;
        if (JD && mD.wasOnlyMoveOn() && !(0, MD.e)()) return !1;
        JD = !1, OD = !1;
        const CD = !(0, MD.e)();
        return CD && (nD = DD, xD = !gD && UD && HD ? {
          ...HD
        } : null), UD = !1, (0, MD.l)("gamepad"), XD(!0), (0, yD.m)((0, QD.i)()), CD
      },
      aD = DD => !(0, MD.e)() || DD === nD,
      VD = () => {
        mD.reset()
      },
      zD = () => {
        const DD = pD.d.get("activeInputDevice"),
          CD = "gamepad" === DD ? BD.e.getActivePad() : null;
        return {
          device: DD,
          inGame: (0, bD.r)(),
          padMovesMouse: null !== CD && (0, SD.h)(CD.id)
        }
      },
      jD = DD => {
        document.pointerLockElement ? HD = null : (HD ??= {
          x: 0,
          y: 0
        }, HD.x = DD.clientX, HD.y = DD.clientY)
      },
      lD = () => {
        const DD = new oD.e,
          CD = CD => {
            DD.reset(), JD = !1, (0, MD.l)(CD)
          },
          cD = DD => {
            if (DD.isTrusted) {
              if (DD instanceof KeyboardEvent) {
                if ((0, MD.i)(DD), !vD(DD)) return;
                OD = !0
              }
              if (DD instanceof PointerEvent && "touch" === DD.pointerType) return HD = null, void CD("touch");
              DD instanceof PointerEvent && (jD(DD), UD = !0), ("pointerdown" !== DD.type || (DD => {
                let {
                  device: CD,
                  inGame: cD,
                  padMovesMouse: ID
                } = DD;
                return !("gamepad" === CD && ID && cD)
              })(zD())) && CD("keyboardMouse")
            }
          },
          ID = DD => {
            DD.isTrusted && (HD = null, CD("touch"))
          },
          fD = DD => {
            DD.isTrusted && "touch" !== DD.pointerType && !DD.relatedTarget && (HD = null)
          },
          bD = cD => {
            if (!cD.isTrusted || "touch" === cD.pointerType) return;
            jD(cD);
            const ID = cD.movementX || 0,
              iD = cD.movementY || 0;
            if (0 === ID && 0 === iD) return;
            if (UD = !0, XD(!1), "keyboardMouse" === pD.d.get("activeInputDevice")) return;
            const fD = mD.isHolding(cD.timeStamp),
              bD = zD(),
              QD = (DD => {
                let {
                  device: CD,
                  inGame: cD,
                  padMovesMouse: ID,
                  padHolding: pD
                } = DD;
                return ("gamepad" !== CD || !ID) && "keyboardMouse" !== CD && (cD || !pD)
              })({
                ...bD,
                inGame: bD.inGame && (0, wD.i)(),
                padHolding: fD
              });
            QD && DD.add(ID, iD, cD.timeStamp) && (CD("keyboardMouse"), JD = mD.isStickOffRest())
          },
          QD = DD => {
            XD("gamepad" === DD)
          },
          SD = {
            capture: !0,
            passive: !0
          };
        window.addEventListener("keydown", cD, SD), window.addEventListener("pointerdown", cD, SD), window.addEventListener("wheel", cD, SD), window.addEventListener("touchstart", ID, SD), window.addEventListener("pointermove", bD, SD), window.addEventListener("pointerout", fD, SD);
        const BD = iD.i.subscribe("appManagerUpdated|activeInputDevice", QD);
        return QD(pD.d.get("activeInputDevice")), () => {
          window.removeEventListener("keydown", cD, SD), window.removeEventListener("pointerdown", cD, SD), window.removeEventListener("wheel", cD, SD), window.removeEventListener("touchstart", ID, SD), window.removeEventListener("pointermove", bD, SD), window.removeEventListener("pointerout", fD, SD), HD = null, iD.i.unsubscribe(BD), XD(!1)
        }
      },
      LD = () => {
        const [DD, CD] = (0, ID.useState)(QD.i);
        return (0, fD.f)(QD.b, (() => {
          CD((0, QD.i)())
        })), (0, fD.f)(BD.c, (() => {
          CD((0, QD.i)())
        })), DD
      }
  },
  7873: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => ID,
      d: () => pD
    });
    const ID = ["xbox", "playstation", "nintendo", "steamdeck", "generic"],
      pD = DD => ID.includes(DD)
  },
  7899: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => wD,
      i: () => SD,
      m: () => QD,
      p: () => bD
    });
    var ID = cD(16),
      pD = cD(1627),
      iD = cD(1710);
    const fD = new Map,
      bD = (DD, CD) => (fD.has(DD) && console.warn(`Gameplay blocker "${DD}" registered twice; the newer one replaces it.`), fD.set(DD, CD), () => {
        fD.get(DD) === CD && fD.delete(DD)
      }),
      QD = () => (0, iD.e)(document.activeElement),
      wD = function() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const [CD, cD] of fD)
          if (!DD.includes(CD) && cD()) return CD;
        return null
      },
      SD = function() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return "inGame" === ID.d.get("gameState") && (!(0, pD.s)() && (!QD() && null === wD(DD)))
      }
  },
  7839: (DD, CD, cD) => {
    cD.d(CD, {
      C: () => XD,
      D: () => vD,
      H: () => oD,
      K: () => wD,
      N: () => yD,
      P: () => MD,
      R: () => pD,
      V: () => ID,
      X: () => nD,
      _: () => xD,
      b: () => aD,
      bb: () => KD,
      c: () => qD,
      db: () => mD,
      f: () => SD,
      i: () => QD,
      m: () => bD,
      o: () => PD,
      p: () => ND,
      r: () => OD,
      t: () => iD,
      w: () => BD,
      x: () => gD,
      z: () => JD
    });
    const ID = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "View", "Menu", "LS", "RS", "Up", "Down", "Left", "Right", "Home"],
      pD = ID.length,
      iD = function() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return {
          values: new Array(pD).fill(0),
          leftStick: {
            x: 0,
            y: 0
          },
          rightStick: {
            x: 0,
            y: 0
          },
          timestampMs: DD
        }
      },
      fD = Object.fromEntries(ID.map(((DD, CD) => [DD, CD]))),
      bD = DD => fD[DD],
      QD = function(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .95;
        const ID = Math.hypot(DD.x, DD.y);
        if (ID <= CD) return {
          x: 0,
          y: 0
        };
        const pD = Math.min(1, (ID - CD) / Math.max(1e-4, cD - CD));
        return {
          x: DD.x / ID * pD,
          y: DD.y / ID * pD
        }
      },
      wD = ["exponential", "linear", "boost"],
      SD = (DD, CD) => {
        const cD = Math.hypot(DD.x, DD.y);
        if (0 === cD) return {
          x: 0,
          y: 0
        };
        const ID = ((DD, CD) => {
          const cD = Math.max(0, Math.min(1, DD));
          return "linear" === CD ? cD : cD * cD
        })(cD, CD);
        return {
          x: DD.x / cD * ID,
          y: DD.y / cD * ID
        }
      },
      BD = .5,
      yD = .3,
      MD = .2,
      tD = bD("LT"),
      ZD = bD("RT"),
      oD = DD => DD === tD || DD === ZD,
      vD = (DD, CD) => {
        const cD = bD(CD);
        return oD(cD) ? DD[cD] > .35 : DD[cD] >= BD
      },
      ND = (DD, CD) => DD.map(((DD, cD) => oD(cD) ? CD[cD] ? DD > .35 : DD >= .55 : DD >= BD)),
      gD = ["Up", "Down", "Left", "Right"],
      XD = DD => gD.includes(DD),
      mD = function(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
        return Math.hypot(DD.x, DD.y) < CD ? null : Math.abs(DD.x) > Math.abs(DD.y) ? DD.x > 0 ? "Right" : "Left" : DD.y > 0 ? "Down" : "Up"
      },
      nD = {
        initialDelayMs: 350,
        intervalMs: 120
      },
      OD = {
        initialDelayMs: 350,
        intervalMs: 150
      },
      PD = ["default", "slow", "off"],
      HD = 800,
      UD = 250,
      xD = (DD, CD) => "off" === CD ? null : "slow" === CD ? {
        initialDelayMs: Math.max(DD.initialDelayMs, HD),
        intervalMs: Math.max(DD.intervalMs, UD)
      } : DD;
    class qD {
      constructor(DD) {
        this.readTiming = DD, this.Lb = !1, this.timing = null, this.nextFireMs = 0
      }
      update(DD, CD) {
        return DD ? this.Lb ? !!(this.timing && CD >= this.nextFireMs) && (this.nextFireMs = CD + this.timing.intervalMs, !0) : (this.Lb = !0, this.timing = this.readTiming(), this.nextFireMs = CD + (null !== (cD = null === (ID = this.timing) || void 0 === ID ? void 0 : ID.initialDelayMs) && void 0 !== cD ? cD : 0), !0) : (this.Lb = !1, !1);
        var cD, ID
      }
      reset() {
        this.Lb = !1
      }
    }
    const JD = {
        initialDelayMs: 350,
        intervalMs: 80
      },
      KD = {
        initialDelayMs: 400,
        intervalMs: 90
      };
    class aD {
      constructor(DD) {
        this.timer = DD, this.direction = null
      }
      update(DD, CD) {
        return DD !== this.direction && (this.timer.reset(), this.direction = DD), this.timer.update(null !== DD, CD) ? DD : null
      }
      reset() {
        this.timer.reset(), this.direction = null
      }
    }
  },
  8379: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => pD,
      g: () => iD
    });
    let ID = -1 / 0;
    const pD = () => {
        ID = performance.now()
      },
      iD = DD => performance.now() - ID < DD
  },
  8339: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => fD,
      e: () => iD
    });
    var ID = cD(7865),
      pD = cD(7839);
    const iD = DD => (0, pD._)(DD, (0, ID.h)().buttonRepeat),
      fD = DD => new pD.c((() => iD(DD)))
  },
  7883: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => QD,
      d: () => iD,
      f: () => bD
    });
    var ID = cD(20),
      pD = cD(7865);
    const iD = (DD, CD) => "OpenShop" === DD ? "shop" === CD : "OpenLobbyLeaderboard" !== DD || "leaderboard" === CD;
    let fD = !1;
    const bD = DD => {
        DD !== fD && (fD = DD, ID.i.Uo(pD.b, (0, pD.h)()))
      },
      QD = () => ((DD, CD) => "shop" === DD && CD ? "shop" : "leaderboard")((0, pD.h)().leaderboardButton, fD)
  },
  7881: (DD, CD, cD) => {
    cD.d(CD, {
      C: () => bD,
      E: () => mD,
      G: () => yD,
      I: () => MD,
      J: () => BD,
      M: () => XD,
      P: () => wD,
      S: () => vD,
      W: () => UD,
      _: () => gD,
      ab: () => ZD,
      bb: () => oD,
      e: () => zD,
      fb: () => tD,
      i: () => lD,
      ib: () => ND,
      jb: () => KD,
      k: () => xD,
      lb: () => iD,
      n: () => fD,
      nb: () => nD,
      o: () => HD,
      ob: () => jD,
      r: () => OD,
      s: () => aD,
      sb: () => PD,
      w: () => VD,
      x: () => SD,
      y: () => QD
    });
    var ID = cD(7860),
      pD = cD(7839);
    const iD = {
        min: 25,
        max: 500,
        step: 5
      },
      fD = {
        min: 25,
        max: 100,
        step: 5
      },
      bD = {
        min: 0,
        max: .4,
        step: .01
      },
      QD = {
        min: 25,
        max: 300,
        step: 5
      },
      wD = {
        min: .5,
        max: 6,
        step: .1
      },
      SD = (DD, CD) => {
        if (!Number.isFinite(DD)) return CD.min;
        const cD = CD.min + Math.round((DD - CD.min) / CD.step) * CD.step,
          ID = Math.min(CD.max, Math.max(CD.min, cD));
        return Math.round(1e3 * ID) / 1e3
      },
      BD = DD => `${Math.round(DD)}%`,
      yD = DD => BD(100 * DD),
      MD = DD => `${DD.toFixed(1)}\xd7`,
      tD = [{
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
      ZD = [{
        value: "exponential",
        labelKey: "controller:settingsCurveExponential"
      }, {
        value: "linear",
        labelKey: "controller:settingsCurveLinear"
      }, {
        value: "boost",
        labelKey: "controller:settingsCurveBoost"
      }],
      oD = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "focus",
        labelKey: "controller:settingsMenuNavFocus"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      vD = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "slot",
        labelKey: "controller:settingsInventoryNavSlot"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      ND = [{
        value: "wheel",
        labelKey: "controller:settingsQuickChatWheel"
      }, {
        value: "off",
        labelKey: "controller:settingsQuickChatOff"
      }],
      gD = [{
        value: "shop",
        labelKey: "controller:settingsLeaderboardButtonShop"
      }, {
        value: "leaderboard",
        labelKey: "controller:settingsLeaderboardButtonLeaderboard"
      }],
      XD = [{
        value: "always",
        labelKey: "controller:settingsGyroAlways"
      }, {
        value: "aiming",
        labelKey: "controller:settingsGyroWhileAiming"
      }, {
        value: "button",
        labelKey: "controller:settingsGyroWhileButton"
      }],
      mD = [{
        value: "tapHold",
        labelKey: "controller:settingsEmoteButtonTapHold"
      }, {
        value: "wheel",
        labelKey: "controller:settingsEmoteButtonWheel"
      }],
      nD = [{
        value: "toggle",
        labelKey: "controller:settingsSneakToggle"
      }, {
        value: "hold",
        labelKey: "controller:settingsSneakHold"
      }],
      OD = [{
        value: "default",
        labelKey: "controller:settingsButtonRepeatDefault"
      }, {
        value: "slow",
        labelKey: "controller:settingsButtonRepeatSlow"
      }, {
        value: "off",
        labelKey: "controller:settingsButtonRepeatOff"
      }],
      PD = [{
        value: "short",
        labelKey: "controller:settingsTapHoldShort"
      }, {
        value: "medium",
        labelKey: "controller:settingsTapHoldMedium"
      }, {
        value: "long",
        labelKey: "controller:settingsTapHoldLong"
      }],
      HD = [{
        value: "hold",
        labelKey: "controller:settingsAttackHold"
      }, {
        value: "toggle",
        labelKey: "controller:settingsAttackToggle"
      }],
      UD = {
        southpaw: "controller:settingsLayoutSouthpaw",
        triggersSwapped: "controller:settingsLayoutTriggersSwapped"
      },
      xD = {
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
      qD = {
        gameplay: "controller:settingsGroupGameplay",
        menu: "controller:settingsGroupMenus",
        inventory: "controller:settingsGroupInventory",
        keyboard: "controller:settingsGroupKeyboard"
      },
      JD = [{
        kind: "fixed",
        stick: "move",
        labelKey: "controller:settingsActionMove"
      }, {
        kind: "fixed",
        stick: "look",
        labelKey: "controller:settingsActionLook"
      }],
      KD = ID.c.map((DD => {
        let {
          group: CD,
          actions: cD
        } = DD;
        const ID = cD.map((DD => ({
          kind: "action",
          action: DD
        })));
        return {
          titleKey: qD[CD],
          rows: "gameplay" === CD ? [...JD, ...ID] : ID
        }
      })),
      aD = pD.V.filter((DD => "Home" !== DD)),
      VD = 1e4;
    class zD {
      constructor(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
        this.cancelButton = DD, this.openButton = CD, this.accepts = cD, this.startMs = null, this.ignoredUntilMs = new Map, this.cancelDownAtMs = null
      }
      update(DD, CD) {
        var cD;
        this.updateIgnored(DD, CD);
        const ID = CD - (null !== (cD = this.startMs) && void 0 !== cD ? cD : CD) >= 250;
        for (const pD of aD)
          if (pD !== this.cancelButton && ID && !this.ignoredUntilMs.has(pD) && DD.wasPressed(pD) && this.accepts(pD)) return {
            kind: "bind",
            button: pD
          };
        if (this.ignoredUntilMs.has(this.cancelButton)) return null;
        if (DD.wasPressed(this.cancelButton)) {
          if (!this.accepts(this.cancelButton)) return {
            kind: "cancel"
          };
          this.cancelDownAtMs = CD
        }
        return null === this.cancelDownAtMs ? null : DD.isHeld(this.cancelButton) && CD - this.cancelDownAtMs >= 700 ? (this.cancelDownAtMs = null, {
          kind: "bind",
          button: this.cancelButton
        }) : DD.wasReleased(this.cancelButton) ? (this.cancelDownAtMs = null, {
          kind: "cancel"
        }) : null
      }
      getBindHoldProgress(DD) {
        return null === this.cancelDownAtMs ? 0 : Math.min(1, (DD - this.cancelDownAtMs) / 700)
      }
      updateIgnored(DD, CD) {
        if (null === this.startMs) {
          this.startMs = CD;
          for (const CD of aD) DD.isDown(CD) && this.ignoredUntilMs.set(CD, 1 / 0);
          this.openButton && !this.ignoredUntilMs.has(this.openButton) && this.ignoredUntilMs.set(this.openButton, CD + 250)
        }
        for (const [cD, ID] of this.ignoredUntilMs) {
          const pD = DD.isDown(cD);
          ID === 1 / 0 ? pD || cD !== this.openButton ? pD || this.ignoredUntilMs.delete(cD) : this.ignoredUntilMs.set(cD, CD + 250) : CD >= ID ? this.ignoredUntilMs.delete(cD) : pD && this.ignoredUntilMs.set(cD, 1 / 0)
        }
      }
    }
    const jD = 6e3;
    class lD {
      constructor() {
        this.downAtMs = null, this.pressesAtMs = []
      }
      update(DD, CD) {
        let {
          pressed: cD,
          Lb: ID
        } = DD;
        if (cD) {
          const DD = this.pressesAtMs.at(-1);
          if (this.pressesAtMs = void 0 !== DD && CD - DD < 1500 ? [...this.pressesAtMs, CD] : [CD], this.pressesAtMs.length >= 3) return 1
        }
        return ID ? (this.downAtMs ??= CD, Math.min(1, (CD - this.downAtMs) / 1500)) : (this.downAtMs = null, 0)
      }
    }
  },
  4806: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => iD,
      g: () => fD
    });
    var ID = cD(53);
    const pD = new WeakMap,
      iD = DD => {
        var CD;
        const cD = DD.closest("[data-pad-slider]");
        return cD && null !== (CD = pD.get(cD)) && void 0 !== CD ? CD : null
      },
      fD = (DD, CD) => {
        const cD = (0, ID.useRef)(CD);
        cD.current = CD, (0, ID.useEffect)((() => {
          if (DD.current) return ((DD, CD) => (pD.set(DD, CD), () => {
            pD.get(DD) === CD && pD.delete(DD)
          }))(DD.current, {
            adjust: DD => {
              cD.current.adjust(DD)
            },
            setFraction: DD => {
              cD.current.setFraction(DD)
            },
            endDrag: () => {
              cD.current.endDrag()
            }
          })
        }), [DD])
      }
  },
  8402: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => iD,
      d: () => pD
    });
    var ID = cD(20);
    const pD = "localBlockBroken";

    function iD() {
      return {
        onPlayerChangeBlock(DD, CD, cD, iD, fD, bD) {
          "Air" === bD && ID.i.Uo(pD)
        }
      }
    }
  },
  7913: (DD, CD, cD) => {
    var ID = {
      "./nintendo/A.svg": 7918,
      "./nintendo/B.svg": 7925,
      "./nintendo/Down.svg": 7932,
      "./nintendo/Home.svg": 7939,
      "./nintendo/LB.svg": 7946,
      "./nintendo/LS.svg": 7949,
      "./nintendo/LT.svg": 7953,
      "./nintendo/Left.svg": 7959,
      "./nintendo/LeftStick.svg": 7968,
      "./nintendo/Menu.svg": 7972,
      "./nintendo/RB.svg": 7974,
      "./nintendo/RS.svg": 7983,
      "./nintendo/RT.svg": 7987,
      "./nintendo/Right.svg": 7989,
      "./nintendo/RightStick.svg": 7996,
      "./nintendo/Up.svg": 7998,
      "./nintendo/View.svg": 8e3,
      "./nintendo/X.svg": 8004,
      "./nintendo/Y.svg": 8009,
      "./playstation/A.svg": 8013,
      "./playstation/B.svg": 8017,
      "./playstation/Down.svg": 8021,
      "./playstation/Home.svg": 8026,
      "./playstation/LB.svg": 8033,
      "./playstation/LS.svg": 8038,
      "./playstation/LT.svg": 8042,
      "./playstation/Left.svg": 8045,
      "./playstation/LeftStick.svg": 8053,
      "./playstation/Menu.svg": 8059,
      "./playstation/RB.svg": 8066,
      "./playstation/RS.svg": 8075,
      "./playstation/RT.svg": 8082,
      "./playstation/Right.svg": 8084,
      "./playstation/RightStick.svg": 8090,
      "./playstation/Up.svg": 8094,
      "./playstation/View.svg": 8100,
      "./playstation/X.svg": 8108,
      "./playstation/Y.svg": 8112,
      "./steamdeck/A.svg": 8120,
      "./steamdeck/B.svg": 8125,
      "./steamdeck/Down.svg": 8131,
      "./steamdeck/Home.svg": 8136,
      "./steamdeck/LB.svg": 8140,
      "./steamdeck/LS.svg": 8147,
      "./steamdeck/LT.svg": 8153,
      "./steamdeck/Left.svg": 8158,
      "./steamdeck/LeftStick.svg": 8160,
      "./steamdeck/Menu.svg": 8167,
      "./steamdeck/RB.svg": 8170,
      "./steamdeck/RS.svg": 8179,
      "./steamdeck/RT.svg": 8187,
      "./steamdeck/Right.svg": 8194,
      "./steamdeck/RightStick.svg": 8202,
      "./steamdeck/Up.svg": 8210,
      "./steamdeck/View.svg": 8213,
      "./steamdeck/X.svg": 8221,
      "./steamdeck/Y.svg": 8226,
      "./xbox/A.svg": 8231,
      "./xbox/B.svg": 8235,
      "./xbox/Down.svg": 8237,
      "./xbox/Home.svg": 8244,
      "./xbox/LB.svg": 8246,
      "./xbox/LS.svg": 8255,
      "./xbox/LT.svg": 8259,
      "./xbox/Left.svg": 8264,
      "./xbox/LeftStick.svg": 8270,
      "./xbox/Menu.svg": 8272,
      "./xbox/RB.svg": 8281,
      "./xbox/RS.svg": 8285,
      "./xbox/RT.svg": 8293,
      "./xbox/Right.svg": 8298,
      "./xbox/RightStick.svg": 8300,
      "./xbox/Up.svg": 8307,
      "./xbox/View.svg": 8313,
      "./xbox/X.svg": 8319,
      "./xbox/Y.svg": 8328
    };

    function pD(DD) {
      var CD = iD(DD);
      return cD(CD)
    }

    function iD(DD) {
      if (!cD.o(ID, DD)) {
        var CD = new Error("Cannot find module '" + DD + "'");
        throw CD.code = "MODULE_NOT_FOUND", CD
      }
      return ID[DD]
    }
    pD.keys = function() {
      return Object.keys(ID)
    }, pD.resolve = iD, DD.exports = pD, pD.id = 7913
  },
  7918: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/A.926fb88933484dfbde14.svg"
  },
  7925: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/B.9f5ec099f78f84e44427.svg"
  },
  7932: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  7939: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  7946: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/LB.3a20b15927b55d5d8b60.svg"
  },
  7949: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  7953: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/LT.9fdc5e69011b9d41f50a.svg"
  },
  7959: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  7968: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  7972: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Menu.c903a662eb685211e52e.svg"
  },
  7974: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/RB.bba470ddb76ceec5d168.svg"
  },
  7983: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  7987: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/RT.e5a9fbcc3c79550111ca.svg"
  },
  7989: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  7996: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  7998: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8e3: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/View.0c9378b5d720a636d50d.svg"
  },
  8004: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/X.c9377519af94e6dce1d7.svg"
  },
  8009: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Y.62d8c17731dd2e172426.svg"
  },
  8013: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/A.958a6de9474f8d0c9caf.svg"
  },
  8017: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/B.d05958bfa88a1162b47a.svg"
  },
  8021: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Down.db68fb3980768eb54671.svg"
  },
  8026: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  8033: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/LB.37a3c5128c958ec2a0c2.svg"
  },
  8038: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/LS.15b0cc5bf3f2fe7bbd8b.svg"
  },
  8042: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/LT.5412ae5222c69f8c833f.svg"
  },
  8045: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Left.4457b2895ce94a5df32e.svg"
  },
  8053: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8059: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Menu.1e8427f8133c9d456c53.svg"
  },
  8066: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/RB.c96c4aa2590209e930c7.svg"
  },
  8075: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/RS.8d70d147cf1ab136e845.svg"
  },
  8082: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/RT.1e4691bb5a7c049693df.svg"
  },
  8084: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Right.a1e101413040c540b879.svg"
  },
  8090: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8094: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Up.7544a65ad4f611a55775.svg"
  },
  8100: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/View.003cae39de89cae0b9d8.svg"
  },
  8108: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/X.d88b6e62dd8fb4bda32a.svg"
  },
  8112: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Y.428d3e70775877892f82.svg"
  },
  8120: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8125: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8131: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8136: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Home.ea8b009cfa9562aa644e.svg"
  },
  8140: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/LB.f283d355d22fc107d6d6.svg"
  },
  8147: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8153: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/LT.13e66c122e7ee04bb876.svg"
  },
  8158: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8160: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8167: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Menu.90fc4e918900eb5062a0.svg"
  },
  8170: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/RB.918a7f16dc054d96b6f3.svg"
  },
  8179: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8187: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/RT.a0523211130959598bed.svg"
  },
  8194: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8202: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8210: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8213: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/View.0bc952e292c28c3baac2.svg"
  },
  8221: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8226: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  },
  8231: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8235: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8237: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8244: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Home.8898f76b20962fe52ab7.svg"
  },
  8246: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/LB.689ba3703ae248f2e4cc.svg"
  },
  8255: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8259: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/LT.9c2d10d335ab5c590525.svg"
  },
  8264: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8270: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8272: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Menu.9e485791ea97009871ca.svg"
  },
  8281: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/RB.7ee5ce48dd551f993f80.svg"
  },
  8285: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8293: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/RT.903ecadc55a9e9e00f07.svg"
  },
  8298: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8300: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8307: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8313: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/View.3c5eeb34f0413bde4a65.svg"
  },
  8319: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8328: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);