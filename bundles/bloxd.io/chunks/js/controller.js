export const id = 28;
export const ids = [28];
export const modules = {
  4837: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => xQ,
      f: () => GQ,
      g: () => AQ,
      h: () => MQ
    });
    var LQ = wQ(53),
      qQ = wQ(4844),
      oQ = wQ(4233),
      DQ = wQ(1367),
      kQ = wQ(4867),
      vQ = wQ(1070),
      mQ = wQ.n(vQ),
      uQ = wQ(1362),
      HQ = wQ(1725),
      bQ = wQ(4875),
      YQ = wQ(1107);

    function xQ(QQ) {
      let {
        label: FQ,
        onClick: wQ,
        checked: LQ,
        circleInfoText: qQ,
        className: kQ,
        disabled: vQ,
        note: uQ
      } = QQ;
      return (0, YQ.jsxs)("div", {
        "aria-disabled": vQ || void 0,
        "data-pad-focusable": !0,
        className: mQ()("SettingBox CheckboxContainer", {
          [kQ]: kQ,
          SettingBoxDisabled: vQ
        }),
        onClick: () => {
          vQ || wQ(!LQ)
        },
        children: [(0, YQ.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, YQ.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, YQ.jsx)(oQ.d, {
              className: "SettingsCheckbox",
              checked: LQ,
              disabled: vQ,
              onChange: () => {}
            })
          }), (0, YQ.jsxs)("div", {
            className: "CheckboxText",
            children: [FQ, qQ && (0, YQ.jsx)("span", {
              onClick: QQ => QQ.stopPropagation(),
              children: (0, YQ.jsx)(DQ.b, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: qQ
              })
            })]
          })]
        }), uQ && (0, YQ.jsx)("div", {
          className: "SettingNote",
          children: uQ
        })]
      })
    }

    function AQ(QQ) {
      let {
        name: FQ,
        onChange: wQ,
        min: qQ,
        max: oQ,
        step: kQ,
        initValue: vQ,
        circleInfoText: uQ,
        format: HQ,
        className: bQ,
        padStep: xQ,
        disabled: AQ = !1,
        selectableMax: tQ,
        cappedNote: MQ,
        onChangeComplete: GQ
      } = QQ;
      const [pQ, cQ] = (0, LQ.useState)(vQ), CQ = (0, LQ.useRef)(vQ);
      (0, LQ.useEffect)((() => {
        CQ.current = vQ, cQ(vQ)
      }), [vQ]);
      const SQ = void 0 !== tQ && tQ < oQ,
        iQ = SQ ? {
          "--slider-selectable": (tQ - qQ) / (oQ - qQ)
        } : void 0;
      return (0, YQ.jsxs)("div", {
        className: mQ()("SettingBox SettingsSliderDiv", {
          [bQ]: bQ,
          SettingBoxDisabled: AQ,
          SliderCapped: SQ
        }),
        style: iQ,
        children: [(0, YQ.jsxs)("div", {
          className: "SliderText",
          children: [`${FQ}: ${HQ?HQ(pQ):pQ}`, uQ && (0, YQ.jsx)(DQ.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: uQ
          })]
        }), (0, YQ.jsx)("div", {
          className: "SliderDiv",
          children: (0, YQ.jsx)(eQ, {
            value: pQ,
            min: qQ,
            max: oQ,
            step: kQ,
            onChange: QQ => {
              if (SQ && QQ >= tQ && pQ === tQ) return;
              const FQ = SQ ? Math.min(QQ, tQ) : QQ;
              CQ.current = FQ, cQ(FQ), wQ(FQ)
            },
            onChangeComplete: GQ && (() => {
              GQ(CQ.current)
            }),
            format: HQ,
            padStep: xQ,
            disabled: AQ
          })
        }), SQ && MQ && (0, YQ.jsx)("div", {
          className: "SettingNote",
          children: MQ
        })]
      })
    }
    const tQ = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function eQ(QQ) {
      var FQ;
      let {
        value: wQ,
        min: oQ,
        max: DQ,
        step: kQ,
        onChange: vQ,
        orientation: mQ,
        reverse: uQ,
        setIsChanging: HQ,
        tooltip: xQ,
        labels: AQ,
        handleLabel: eQ,
        format: MQ,
        onChangeStart: GQ,
        onChangeComplete: pQ,
        padStep: cQ,
        disabled: CQ = !1
      } = QQ;
      const SQ = (0, LQ.useRef)(null),
        iQ = (0, LQ.useRef)(null);
      (0, LQ.useLayoutEffect)((() => {
        var QQ, FQ, wQ;
        const LQ = null !== (QQ = null === (FQ = SQ.current) || void 0 === FQ ? void 0 : FQ.querySelector(".rangeslider")) && void 0 !== QQ ? QQ : null;
        null === LQ || void 0 === LQ || LQ.setAttribute("data-pad-slider", ""), null === LQ || void 0 === LQ || LQ.setAttribute("data-pad-focusable", ""), null === LQ || void 0 === LQ || null === (wQ = LQ.querySelector(".rangeslider__handle")) || void 0 === wQ || wQ.setAttribute("data-pad-slider-handle", ""), iQ.current = LQ
      }), []), (0, LQ.useLayoutEffect)((() => {
        var QQ, FQ;
        CQ ? null === (QQ = iQ.current) || void 0 === QQ || QQ.setAttribute("aria-disabled", "true") : null === (FQ = iQ.current) || void 0 === FQ || FQ.removeAttribute("aria-disabled")
      }), [CQ]);
      const WQ = (null !== (FQ = String(kQ).split(".")[1]) && void 0 !== FQ ? FQ : "").length,
        RQ = QQ => {
          const FQ = Number((Math.round((QQ - oQ) / kQ) * kQ + oQ).toFixed(WQ));
          return Math.min(DQ, Math.max(oQ, FQ))
        },
        OQ = (0, LQ.useRef)(pQ);
      OQ.current = pQ, (0, LQ.useEffect)((() => {
        const QQ = SQ.current;
        if (!QQ) return;
        const FQ = QQ => {
          var FQ;
          tQ.has(QQ.key) && (null === (FQ = OQ.current) || void 0 === FQ || FQ.call(OQ))
        };
        return QQ.addEventListener("keyup", FQ), () => {
          QQ.removeEventListener("keyup", FQ)
        }
      }), []);
      const sQ = (0, LQ.useRef)(!1);
      return (0, bQ.c)(iQ, {
        adjust: QQ => {
          if (CQ) return;
          const FQ = null !== cQ && void 0 !== cQ ? cQ : Math.max(kQ, Math.round((DQ - oQ) / 20 / kQ) * kQ),
            LQ = RQ(wQ + QQ * FQ * (uQ ? -1 : 1));
          LQ !== wQ && (null === GQ || void 0 === GQ || GQ(), vQ(LQ), null === pQ || void 0 === pQ || pQ())
        },
        setFraction: QQ => {
          if (CQ) return;
          const FQ = RQ(oQ + (uQ ? 1 - QQ : QQ) * (DQ - oQ));
          FQ !== wQ && (sQ.current || (sQ.current = !0, null === GQ || void 0 === GQ || GQ()), vQ(FQ))
        },
        endDrag: () => {
          sQ.current && (sQ.current = !1, null === pQ || void 0 === pQ || pQ())
        }
      }), (0, YQ.jsx)("div", {
        ref: SQ,
        style: {
          display: "contents"
        },
        children: (0, YQ.jsx)(qQ.b, {
          value: wQ,
          min: oQ,
          max: DQ,
          step: kQ,
          onChange: vQ,
          orientation: mQ,
          reverse: uQ,
          tooltip: xQ,
          labels: AQ,
          handleLabel: eQ,
          format: MQ,
          onChangeStart: () => {
            null === GQ || void 0 === GQ || GQ(), null === HQ || void 0 === HQ || HQ(!0)
          },
          onChangeComplete: () => {
            null === HQ || void 0 === HQ || HQ(!1), null === pQ || void 0 === pQ || pQ()
          }
        })
      })
    }
    async function MQ() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const FQ = uQ.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: "",
        unlockPointerKey: QQ
      });
      !0 === await FQ.getResult() && (0, HQ.reloadBloxd)()
    }

    function GQ(QQ) {
      let {
        label: FQ,
        options: wQ,
        value: LQ,
        onChange: qQ,
        circleInfoText: oQ
      } = QQ;
      return (0, YQ.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, YQ.jsxs)("div", {
          className: "SliderText",
          children: [FQ, oQ && (0, YQ.jsx)(DQ.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: oQ
          })]
        }), (0, YQ.jsx)(kQ.c, {
          ariaLabel: FQ,
          options: wQ,
          value: LQ,
          onChange: qQ
        })]
      })
    }
  },
  4867: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => DQ
    });
    var LQ = wQ(1070),
      qQ = wQ.n(LQ),
      oQ = wQ(1107);

    function DQ(QQ) {
      let {
        options: FQ,
        value: wQ,
        onChange: LQ,
        ariaLabel: DQ,
        className: kQ,
        reselectable: vQ = !1,
        keepsFocus: mQ = !1,
        padTabs: uQ
      } = QQ;
      const HQ = void 0 !== uQ;
      return (0, oQ.jsx)("div", {
        className: qQ()("SegmentedToggle", kQ),
        role: "group",
        "aria-label": DQ,
        "data-pad-tabs": uQ,
        children: FQ.map((QQ => {
          const FQ = QQ.value === wQ;
          return (0, oQ.jsx)("button", {
            type: "button",
            "aria-pressed": FQ,
            "data-pad-tab": HQ || void 0,
            "data-pad-selected": HQ && FQ ? "true" : void 0,
            "data-pad-default-focus": HQ && FQ || void 0,
            "aria-label": QQ.ariaLabel,
            title: QQ.ariaLabel,
            className: qQ()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: FQ
            }),
            onMouseDown: mQ ? QQ => {
              QQ.preventDefault()
            } : void 0,
            onClick: () => {
              FQ && !vQ || LQ(QQ.value)
            },
            children: QQ.label
          }, QQ.value)
        }))
      })
    }
  },
  7967: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => qQ,
      g: () => oQ,
      k: () => bQ,
      m: () => HQ,
      o: () => mQ,
      q: () => kQ,
      t: () => LQ,
      v: () => YQ,
      y: () => xQ
    });
    const LQ = ["menuConfirm", "menuBack", "menuTabPrevious", "menuTabNext", "menuPageUp", "menuPageDown", "menuSecondary", "menuToggleCursor"],
      qQ = [{
        group: "gameplay",
        actions: ["jump", "sneak", "sneakToggle", "sprint", "attack", "use", "hotbarPrevious", "hotbarNext", "inventory", "actionButton", "perspective", "pickBlock", "drop", "emoteWheel", "chat", "pause", "leaderboard"]
      }, {
        group: "menu",
        actions: LQ
      }, {
        group: "inventory",
        actions: ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryClose", "inventoryPanelPrevious", "inventoryPanelNext", "inventoryDrop", "inventoryHotbarSwap"]
      }, {
        group: "keyboard",
        actions: ["keyboardType", "keyboardBackspace", "keyboardSpace", "keyboardCaretLeft", "keyboardCaretRight", "keyboardShift", "keyboardSymbols", "keyboardSubmit", "keyboardClose", "keyboardChannel"]
      }],
      oQ = {
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
      DQ = ["pickBlock", "perspective"],
      kQ = QQ => DQ.includes(QQ) ? DQ : [QQ],
      vQ = Object.fromEntries(qQ.flatMap((QQ => {
        let {
          group: FQ,
          actions: wQ
        } = QQ;
        return wQ.map((QQ => [QQ, FQ]))
      }))),
      mQ = QQ => vQ[QQ],
      uQ = {
        pause: ["menu"],
        leaderboard: ["menu"],
        inventory: ["menu"],
        menuPageUp: ["inventory"],
        menuPageDown: ["inventory"]
      },
      HQ = QQ => {
        var FQ;
        return [mQ(QQ), ...null !== (FQ = uQ[QQ]) && void 0 !== FQ ? FQ : []]
      },
      bQ = new Set(["menu", "inventory", "keyboard"]),
      YQ = {
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
      xQ = new Set(["forward", "backward", "left", "right"])
  },
  7959: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      D: () => GQ,
      H: () => RQ,
      J: () => uQ,
      L: () => WQ,
      M: () => rQ,
      e: () => MQ,
      f: () => cQ,
      g: () => bQ,
      i: () => YQ,
      m: () => UQ,
      p: () => sQ,
      r: () => OQ,
      v: () => pQ,
      x: () => IQ,
      z: () => iQ
    });
    var LQ = wQ(7967),
      qQ = wQ(7972),
      oQ = wQ(7950),
      DQ = wQ(7986);
    const kQ = QQ => "pickBlock" === QQ ? "perspective" : QQ,
      vQ = (QQ, FQ) => {
        var wQ;
        const qQ = kQ(FQ);
        return null !== (wQ = QQ[qQ]) && void 0 !== wQ ? wQ : LQ.g[qQ]
      },
      mQ = new Map([
        ["menuConfirm", "menuBack"],
        ["inventoryPrimary", "inventoryClose"],
        ["keyboardType", "keyboardClose"]
      ].flatMap((QQ => {
        let [FQ, wQ] = QQ;
        return [
          [FQ, wQ],
          [wQ, FQ]
        ]
      }))),
      uQ = (QQ, FQ) => null !== QQ && void 0 !== QQ ? QQ : "nintendo" === FQ,
      HQ = QQ => uQ((0, qQ.h)().swapConfirmBack, (0, qQ.i)()) && mQ.get(QQ) || QQ,
      bQ = QQ => vQ((0, qQ.h)().bindings, HQ(QQ)),
      YQ = QQ => LQ.g[HQ(QQ)],
      xQ = Object.keys(LQ.g),
      AQ = QQ => "gameplay" === (0, LQ.o)(QQ) ? ["gameplay"] : (0, LQ.m)(QQ),
      tQ = (QQ, FQ) => {
        const wQ = AQ(FQ);
        return AQ(QQ).some((QQ => wQ.includes(QQ)))
      },
      eQ = (QQ, FQ, wQ) => {
        const qQ = vQ(QQ, FQ),
          DQ = new Set((0, LQ.q)(FQ)),
          mQ = [...DQ];
        for (let LQ = mQ.pop(); LQ; LQ = mQ.pop())
          for (const FQ of xQ) {
            const oQ = vQ(QQ, FQ);
            DQ.has(FQ) || oQ !== wQ && oQ !== qQ || !tQ(LQ, FQ) || (DQ.add(FQ), mQ.push(FQ))
          }
        const uQ = {
          ...QQ
        };
        for (const HQ of DQ) {
          const FQ = vQ(QQ, HQ) === qQ ? wQ : qQ,
            DQ = (0, LQ.m)(HQ).some((QQ => LQ.k.has(QQ)));
          if ((0, oQ.I)(FQ) && DQ) return null;
          uQ[kQ(HQ)] = FQ
        }
        for (const oQ of Object.keys(uQ)) uQ[oQ] === LQ.g[oQ] && delete uQ[oQ];
        return uQ
      },
      MQ = (QQ, FQ) => null !== eQ((0, qQ.h)().bindings, HQ(QQ), FQ),
      GQ = (QQ, FQ) => {
        if (bQ(QQ) === FQ) return !0;
        const wQ = eQ((0, qQ.h)().bindings, HQ(QQ), FQ);
        return !!wQ && ((0, qQ.k)({
          bindings: wQ
        }), !0)
      },
      pQ = (QQ, FQ) => {
        const wQ = (0, LQ.q)(FQ);
        return xQ.filter((FQ => kQ(FQ) === FQ && !wQ.includes(FQ) && vQ(QQ, HQ(FQ)) !== bQ(FQ)))
      },
      cQ = ["southpaw", "triggersSwapped"],
      CQ = {
        southpaw: {
          sprint: "RS",
          sneakToggle: "LS"
        },
        triggersSwapped: {
          attack: "LT",
          use: "RT"
        }
      },
      SQ = QQ => Object.keys(CQ[QQ]),
      iQ = (QQ, FQ) => "southpaw" === QQ ? FQ.swapSticks : SQ(QQ).every((wQ => vQ(FQ.bindings, wQ) === CQ[QQ][wQ])),
      WQ = (QQ, FQ) => {
        const wQ = (0, qQ.h)();
        let oQ = wQ.bindings;
        for (const qQ of SQ(QQ)) {
          const wQ = FQ ? CQ[QQ][qQ] : LQ.g[qQ];
          if (oQ = eQ(oQ, qQ, wQ), !oQ) return !1
        }
        return (0, qQ.k)({
          swapSticks: "southpaw" === QQ ? FQ : wQ.swapSticks,
          bindings: oQ
        }), !0
      },
      RQ = () => {
        (0, qQ.k)({
          swapSticks: !1,
          bindings: {}
        })
      },
      OQ = () => (0, qQ.h)().swapSticks ? "RightStick" : "LeftStick",
      sQ = () => (0, qQ.h)().swapSticks ? "LeftStick" : "RightStick",
      rQ = QQ => (0, qQ.h)().swapSticks && (0, oQ.I)(QQ),
      IQ = QQ => rQ(QQ) ? OQ() : sQ(),
      UQ = QQ => {
        if (LQ.y.has(QQ)) return OQ();
        const FQ = LQ.v[QQ];
        return FQ && ("leaderboard" !== FQ || (0, DQ.g)(QQ, (0, DQ.c)())) ? bQ(FQ) : null
      }
  },
  7940: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      ControllerCategory: () => Ck,
      ControllerGlyph: () => Cq,
      ControllerRoot: () => cD,
      PadLobbyShortcuts: () => jD,
      PadSneakChip: () => sD,
      PadTooltip: () => ID,
      attachPressToContinue: () => nD,
      getBoundButton: () => uQ.g,
      getControllerSettings: () => bQ.h,
      getGlyphForNoaAction: () => uQ.m,
      getInventoryCursorState: () => ik,
      getMenuShortcutButton: () => Jw,
      getPadGlyphIconName: () => WD,
      getPadGlyphIconUrl: () => RD,
      getPadRepeatTiming: () => AQ.f,
      handOverPadFocus: () => Rk,
      hasActivePad: () => Sk,
      isPadSteppingSlots: () => Wk
    });
    const LQ = JSON.parse('{"controller":{"inventoryTake":"Take","inventoryTakeHalf":"Take half","inventoryPlace":"Place","inventoryPlaceOne":"Place one","inventoryQuickMove":"Quick move","inventoryToHotbar":"To hotbar","inventoryPutBack":"Put back","inventoryHotbarSwap":"Swap with hotbar","inventorySwapHere":"Swap here","inventoryCancel":"Cancel","inventoryClose":"Close","inventoryDrop":"Drop (hold: stack)","inventorySelect":"Select","inventoryCraft":"Craft (hold to repeat)","inventoryCraftAll":"Craft all","inventoryChooseRecipe":"Choose","inventoryBackToRecipes":"Back to recipes","inventoryType":"Type","inventoryPanels":"Switch panel","inventoryCategory":"Category","inventoryPage":"Page","disconnected":"Controller disconnected","gameplayReload":"Reload","gameplayActionWheelHint":"(hold for more)","gameplaySneaking":"Sneaking","gameplayLoadFailedTitle":"Controller unavailable","gameplayLoadFailedSubtitle":"Reload the page to play with your controller.","gameplayDropStack":"Keep holding to drop the stack","gameplayAttackLatched":"Attacking","gameplayPickBlock":"Pick block","padButtonView":"View","padButtonMenu":"Menu","padButtonHome":"Home","padButtonCreate":"Create","padButtonOptions":"Options","padButtonDpadUp":"D-pad \u2191","padButtonDpadDown":"D-pad \u2193","padButtonDpadLeft":"D-pad \u2190","padButtonDpadRight":"D-pad \u2192","padButtonLeftStick":"L Stick","padButtonRightStick":"R Stick","settingsLook":"Look","settingsLookSensitivityX":"Look sensitivity (horizontal)","settingsLookSensitivityY":"Look sensitivity (vertical)","settingsAimLookSensitivity":"Look sensitivity while aiming (use held)","settingsInvertLookX":"Invert horizontal look","settingsInvertLookY":"Invert vertical look","settingsLookCurve":"Look curve","settingsLookCurveHint":"Steep gives finer aim near the centre, Linear turns at an even rate, and Boost turns faster when you hold the stick all the way.","settingsCurveExponential":"Steep","settingsCurveLinear":"Linear","settingsCurveBoost":"Boost","settingsLookDeadzone":"Look deadzone","settingsGyro":"Gyro aiming","settingsGyroToggle":"Aim by moving the controller","settingsGyroToggleInfo":"Turn and tilt the controller to aim, on top of the right stick.","settingsGyroTogglePhone":"Aim by moving your phone or tablet","settingsGyroToggleInfoPhone":"Turn and tilt your phone or tablet to aim, on top of the right stick.","settingsGyroUnsupported":"Gyro aiming needs Chrome or Edge.","settingsGyroBlocked":"Gyro aiming isn\'t available on this site.","settingsGyroPhoneNeedsController":"Connect a controller to aim by moving your phone or tablet.","settingsGyroSteamHint":"If Steam already turns your gyro into mouse movement, leave this off.","settingsGyroConnect":"Connect motion controller","settingsGyroConnectHint":"Works with DualSense, DualShock 4 and Switch controllers.","settingsGyroConnectNeedsClick":"Click Connect with your mouse: the browser asks before sharing a controller.","settingsGyroOpenFailed":"Another app is using the controller. Close apps such as Steam or DS4Windows, then try again.","settingsGyroConnected":"Aiming with {{name}}.","settingsGyroAllowMotion":"Allow motion sensor","settingsGyroAllowNeedsTap":"Tap Allow motion sensor on your screen to turn it on.","settingsGyroPhoneOn":"Aiming with this device\'s motion sensor.","settingsGyroPhoneWaiting":"Waiting for this device\'s motion sensor\u2026","settingsGyroPhoneNoSensor":"No motion sensor found on this device.","settingsGyroPhoneDenied":"Motion access is blocked. Allow it in your browser settings.","settingsGyroSensitivity":"Gyro sensitivity","settingsGyroActivation":"Gyro turns on","settingsGyroAlways":"Always","settingsGyroWhileAiming":"While aiming","settingsGyroWhileButton":"While holding a button","settingsGyroAimingHint":"Hold {{button}} to aim with motion.","settingsGyroButton":"Gyro button","settingsGyroButtonHint":"While gyro aiming is on, this button only turns the gyro on in game, so pick one you rarely use.","settingsMovement":"Movement","settingsMoveDeadzone":"Move deadzone","settingsAutoSprint":"Sprint at full tilt","settingsAutoSprintInfo":"Push the movement stick all the way to sprint.","settingsSneak":"Sneak","settingsSneakHold":"Hold","settingsSneakToggle":"Toggle","settingsButtons":"Buttons","settingsPromptFamily":"Button prompts","settingsPromptAuto":"Match my controller","settingsPromptXbox":"Xbox","settingsPromptPlayStation":"PlayStation","settingsPromptNintendo":"Nintendo","settingsPromptSteamDeck":"Steam Deck","settingsPromptGeneric":"Generic","settingsHideButtonHints":"Hide button hints","settingsVibration":"Vibration","settingsCursorSpeed":"Virtual cursor speed","settingsCursorMagnetism":"Cursor snaps onto buttons","settingsMenuBackToCategories":"Back returns to the category list first","settingsAccessibility":"Accessibility","settingsSwapConfirmBack":"Swap confirm and back","settingsSwapToast":"Select and Back have swapped buttons.","settingsLayoutRefusedToast":"This layout doesn\'t fit your current buttons. Reset them to use it.","settingsSwapConfirmBackInfo":"Select with the right face button and go back with the bottom one, in menus, the inventory and the on-screen keyboard. On by default for Nintendo controllers.","settingsButtonRepeat":"Button repeat","settingsButtonRepeatHint":"How a held button repeats in menus, sliders, the on-screen keyboard and crafting. Off acts once per press, and holding drop in game drops just one item.","settingsButtonRepeatDefault":"Default","settingsButtonRepeatSlow":"Slow (0.8 s, then 4 a second)","settingsButtonRepeatOff":"Off (once per press)","settingsTapHoldTime":"Tap/hold time","settingsTapHoldTimeHint":"How long to hold the chat, emote or action button to open its wheel, or the view button to change view where a tap picks a block. Dropping a whole stack takes 0.8, 1 or 1.3 s.","settingsTapHoldShort":"Short (0.25 s)","settingsTapHoldMedium":"Medium (0.5 s)","settingsTapHoldLong":"Long (0.8 s)","settingsEmoteButton":"Emote button","settingsEmoteButtonTapHoldHint":"Tap to repeat your last emote, or hold to open the emote wheel.","settingsEmoteButtonWheelHint":"Any press opens the emote wheel, with no hold to time. Pick with the stick, then select.","settingsEmoteButtonTapHold":"Tap repeats, hold opens wheel","settingsEmoteButtonWheel":"Opens the wheel","settingsAttackMode":"Attack / mine","settingsAttackHoldHint":"Hold attack to keep attacking or mining.","settingsAttackToggleHint":"Press attack once to keep attacking or mining, and again to stop.","settingsAttackHold":"Hold","settingsAttackToggle":"Toggle","settingsLargePointer":"Large pointer and focus","settingsLargePointerInfo":"A bigger menu cursor, thicker selection brackets and bigger button hints.","settingsRemap":"Remap buttons","settingsRemapHint":"Select an action, then press a button. If that button is taken, the two swap.","settingsLayoutSouthpaw":"Southpaw (move with the right stick)","settingsLayoutTriggersSwapped":"Triggers swapped (attack with the left trigger)","settingsCapturePrompt":"Press a button","settingsCaptureCancelHint":"Press {{button}} to cancel","settingsCaptureCancelOrBindHint":"Tap {{button}} to cancel, or hold it to choose it","settingsReset":"Reset","settingsSwapNotice":"{{action}} moved to {{button}}","settingsResetAll":"Reset all buttons and sticks","settingsGroupGameplay":"Movement & gameplay","settingsGroupMenus":"Menus","settingsGroupInventory":"Inventory","settingsGroupKeyboard":"On-screen keyboard","settingsActionMove":"Move","settingsActionLook":"Look around","settingsActionJump":"Jump","settingsActionSneak":"Sneak","settingsActionSneakToggle":"Toggle sneak","settingsActionSprint":"Sprint","settingsActionAttack":"Attack / mine","settingsActionUse":"Use / place","settingsActionHotbarPrevious":"Previous hotbar slot","settingsActionHotbarNext":"Next hotbar slot","settingsActionInventory":"Inventory","settingsActionActionButton":"Game action","settingsActionPerspective":"Change view","settingsActionPickBlock":"Pick block (creative)","settingsActionDrop":"Drop item","settingsActionEmoteWheel":"Emotes","settingsActionChat":"Chat","settingsActionPause":"Pause menu","settingsActionLeaderboard":"Shop / leaderboard","settingsActionMenuConfirm":"Select","settingsActionMenuBack":"Back","settingsActionMenuTabPrevious":"Previous tab","settingsActionMenuTabNext":"Next tab","settingsActionMenuPageUp":"Page up","settingsActionMenuPageDown":"Page down","settingsActionMenuSecondary":"Secondary action","settingsActionMenuToggleCursor":"Switch to virtual cursor","settingsActionInventoryPrimary":"Pick up / place","settingsActionInventorySecondary":"Pick up half / place one","settingsActionInventoryQuickMove":"Quick move","settingsActionInventoryHotbarSwap":"Swap with hotbar slot","settingsActionInventoryClose":"Close","settingsActionInventoryPanelPrevious":"Previous panel","settingsActionInventoryPanelNext":"Next panel","settingsActionInventoryDrop":"Drop item","settingsActionKeyboardType":"Type key","settingsActionKeyboardBackspace":"Backspace","settingsActionKeyboardSpace":"Space","settingsActionKeyboardCaretLeft":"Move cursor left","settingsActionKeyboardCaretRight":"Move cursor right","settingsActionKeyboardShift":"Shift","settingsActionKeyboardSymbols":"Accents and symbols","settingsActionKeyboardSubmit":"Send","settingsActionKeyboardClose":"Close keyboard","settingsActionKeyboardChannel":"Chat channel","settingsAlternatives":"Try alternatives","settingsAlternativesHint":"Try each way of playing and keep the one that feels best.","settingsMenuNavigation":"Menu navigation","settingsMenuNavigationHint":"Steer a cursor with the stick and jump between buttons with the D-pad, or use just one.","settingsNavHybrid":"Cursor and D-pad","settingsMenuNavFocus":"Jump between buttons","settingsVirtualCursor":"Virtual cursor","settingsInventoryNavigation":"Inventory","settingsInventoryNavigationHint":"Steer a cursor with the stick and step slot by slot with the D-pad, or use just one.","settingsInventoryNavSlot":"Slot by slot","settingsQuickChat":"Hold chat button","settingsQuickChatHint":"Hold the chat button to pick a quick phrase. Tapping it still opens chat.","settingsQuickChatWheel":"Quick chat wheel","settingsQuickChatOff":"Off","settingsLeaderboardButton":"Shop / leaderboard button","settingsLeaderboardButtonHint":"Open the shop in one press in games that have one. The lobby leaderboard is still in the pause menu.","settingsLeaderboardButtonShop":"Shop, in games with one","settingsLeaderboardButtonLeaderboard":"Always the leaderboard","settingsTester":"Gamepad tester","settingsTesterNoPad":"Connect a gamepad and press any button to test it.","settingsTesterFamily":"Detected: {{family}}","settingsTesterHint":"Start a test to try every button and stick without moving through the menu.","settingsTesterStart":"Start test","settingsTesterStop":"Stop test","settingsTesterTesting":"Press anything to see it light up. To stop, hold {{button}} or press it three times.","settingsControlsNote":"Playing with a gamepad? Change its buttons and feel in Gamepad settings.","settingsOpenController":"Gamepad settings","keyboardSpace":"Space","keyboardSend":"Send","keyboardDone":"Done","keyboardTargetChat":"Chat","keyboardTargetSign":"Sign","keyboardTargetNameTag":"Name tag","keyboardTargetBook":"Book page","keyboardTargetBookTitle":"Book title","keyboardTargetText":"Text","keyboardPhraseGg":"gg","keyboardPhraseHi":"hi","keyboardPhraseThanks":"thanks","keyboardPhraseGl":"gl","keyboardPhraseBrb":"brb","keyboardPhraseYes":"yes","keyboardPhraseNo":"no","keyboardPhraseHelp":"help!","quickChatPick":"Pick a phrase","actionWheelPick":"Pick an action","wheelReleaseToPick":"Release to pick","wheelClose":"Close","wheelChoose":"Choose","menusSelect":"Select","menusBack":"Back","menusClose":"Close","menusQuickChat":"Quick chat (hold)","menusSkipTutorial":"Skip tutorial","menusTabs":"Tabs","menusRows":"Rows","menusCursorMode":"Cursor","menusFocusMode":"Focus","menusClick":"Click","menusRightClick":"Right-click","menusScroll":"Scroll","menusFriends":"Friends","menusSearch":"Search","menusSettings":"Settings","menusLeaveGameTitle":"Leave the game?","menusLeaveGameLeave":"Leave","menusLeaveGameStay":"Stay","menusNotifications":"Notifications","menusLobby":"Lobby","menusShop":"Shop","menusTasks":"Tasks & leaderboards","menusInvite":"Invite friends","menusAdjust":"Adjust","menusFavourite":"Favourite","screensPressToContinue":"Press {{button}} to continue","screensPressToEnterGame":"Press {{button}} to enter game","screensEnterGame":"Enter game","screensBackToGames":"Back to games","tutorialMine":"Mine","tutorialPlace":"Place / Use","tutorialInventory":"Inventory","tutorialPause":"Pause","menusUseMouse":"Use a mouse or touch here"}}');
    var qQ = wQ(1207),
      oQ = wQ(1407),
      DQ = wQ(7945),
      kQ = wQ(71),
      vQ = wQ(17),
      mQ = wQ(22),
      uQ = wQ(7959),
      HQ = wQ(7994),
      bQ = wQ(7972),
      YQ = wQ(7996),
      xQ = wQ(7950),
      AQ = wQ(8397),
      tQ = wQ(8399),
      eQ = wQ(1668);
    const MQ = (QQ, FQ, wQ) => Math.max(FQ, Math.min(wQ, QQ)),
      GQ = QQ => Math.min(QQ.width, QQ.height) / 720,
      pQ = QQ => Math.max(.15, QQ);
    class cQ {
      constructor() {
        this.locked = !1
      }
      lock() {
        this.locked = !0
      }
      update(QQ, FQ) {
        const wQ = Math.hypot(QQ.x, QQ.y) >= (QQ => Math.max(.3, QQ))(FQ);
        return this.locked ? (this.locked = wQ, !1) : wQ
      }
    }
    const CQ = (QQ, FQ) => {
        const wQ = MQ(FQ.dtMs, 0, 100),
          LQ = wQ / 1e3,
          qQ = GQ(FQ.viewport) * (FQ.cursorSpeedPercent / 100),
          oQ = (0, xQ.j)(FQ.stick, pQ(FQ.moveDeadzone)),
          DQ = Math.hypot(oQ.x, oQ.y),
          kQ = ((QQ, FQ, wQ) => {
            if (FQ < .3) return 0;
            const LQ = wQ / 350;
            return FQ >= .85 ? Math.min(1, QQ + LQ) : Math.max(0, QQ - LQ)
          })(QQ.speedRamp, DQ, wQ);
        let vQ = QQ.x,
          mQ = QQ.y;
        if (DQ > 0) {
          const QQ = .45 + .55 * kQ,
            wQ = FQ.context.overInteractive ? .45 : 1,
            uQ = 1400 * (QQ => {
              const FQ = MQ(QQ, 0, 1);
              return .3 * FQ + .7 * FQ * FQ
            })(DQ) * qQ * QQ * wQ;
          vQ += oQ.x / DQ * uQ * LQ, mQ += oQ.y / DQ * uQ * LQ
        }
        const uQ = Math.hypot(FQ.dpad.x, FQ.dpad.y);
        if (uQ > 0) {
          const QQ = 500 * qQ;
          vQ += FQ.dpad.x / uQ * QQ * LQ, mQ += FQ.dpad.y / uQ * QQ * LQ
        }
        const HQ = FQ.context.magnetTarget;
        if (HQ && DQ < .3 && 0 === uQ) {
          const QQ = ((QQ, FQ, wQ, LQ, qQ) => {
            const oQ = FQ.x - QQ.x,
              DQ = FQ.y - QQ.y,
              kQ = Math.hypot(oQ, DQ);
            if (0 === kQ) return {
              x: 0,
              y: 0
            };
            const vQ = Math.min(kQ, qQ * (1 - LQ / .3));
            let mQ = oQ / kQ * vQ,
              uQ = DQ / kQ * vQ;
            if (LQ > 0) {
              const QQ = wQ.x / LQ,
                FQ = wQ.y / LQ,
                qQ = mQ * QQ + uQ * FQ;
              qQ < 0 && (mQ -= qQ * QQ, uQ -= qQ * FQ)
            }
            return {
              x: mQ,
              y: uQ
            }
          })({
            x: vQ,
            y: mQ
          }, HQ, oQ, DQ, 120 * GQ(FQ.viewport) * LQ);
          vQ += QQ.x, mQ += QQ.y
        }
        return {
          x: MQ(vQ, 0, Math.max(0, FQ.viewport.width - 1)),
          y: MQ(mQ, 0, Math.max(0, FQ.viewport.height - 1)),
          speedRamp: kQ
        }
      },
      SQ = QQ => {
        const FQ = (0, xQ.j)(QQ, .2);
        return 0 !== FQ.x || 0 !== FQ.y
      },
      iQ = (QQ, FQ) => {
        const wQ = (0, xQ.j)(QQ, .2),
          LQ = Math.hypot(wQ.x, wQ.y);
        if (0 === LQ) return {
          x: 0,
          y: 0
        };
        const qQ = LQ * LQ * 1600,
          oQ = MQ(FQ, 0, 100) / 1e3;
        return {
          x: wQ.x / LQ * qQ * oQ,
          y: wQ.y / LQ * qQ * oQ
        }
      },
      WQ = (QQ, FQ) => "y" === FQ ? QQ.scrollHeight > QQ.clientHeight + 1 : QQ.scrollWidth > QQ.clientWidth + 1,
      RQ = (QQ, FQ) => {
        if (!WQ(QQ, FQ)) return !1;
        const wQ = getComputedStyle(QQ),
          LQ = "y" === FQ ? wQ.overflowY : wQ.overflowX;
        return "auto" === LQ || "scroll" === LQ
      },
      OQ = (QQ, FQ, wQ) => {
        for (let oQ = QQ instanceof HTMLElement ? QQ : null !== (LQ = null === QQ || void 0 === QQ ? void 0 : QQ.parentElement) && void 0 !== LQ ? LQ : null; oQ; oQ = oQ.parentElement) {
          var LQ;
          if (RQ(oQ, FQ)) return oQ;
          if (oQ === wQ) return null
        }
        if (wQ) return null;
        const qQ = document.scrollingElement;
        return qQ instanceof HTMLElement && WQ(qQ, FQ) ? qQ : null
      },
      sQ = new WeakMap,
      rQ = (QQ, FQ) => {
        const wQ = performance.now(),
          LQ = sQ.get(QQ);
        if (LQ && LQ.axis === FQ && wQ - LQ.atMs < 500 && (!LQ.container || LQ.container.isConnected)) return LQ.container;
        const qQ = IQ(QQ, FQ);
        return sQ.set(QQ, {
          axis: FQ,
          atMs: wQ,
          container: qQ
        }), qQ
      },
      IQ = (QQ, FQ) => {
        let wQ = RQ(QQ, FQ) ? QQ : null,
          LQ = wQ ? wQ.clientWidth * wQ.clientHeight : 0;
        for (const qQ of QQ.querySelectorAll("*")) {
          const QQ = qQ.clientWidth * qQ.clientHeight;
          QQ > LQ && RQ(qQ, FQ) && (wQ = qQ, LQ = QQ)
        }
        return wQ
      },
      UQ = (QQ, FQ, wQ) => "y" === FQ ? wQ < 0 ? QQ.scrollTop > 0 : QQ.scrollTop + QQ.clientHeight < QQ.scrollHeight - 1 : wQ < 0 ? QQ.scrollLeft > 0 : QQ.scrollLeft + QQ.clientWidth < QQ.scrollWidth - 1,
      NQ = (QQ, FQ, wQ) => {
        "y" === FQ ? QQ.scrollBy({
          top: wQ,
          behavior: "instant"
        }) : QQ.scrollBy({
          left: wQ,
          behavior: "instant"
        })
      },
      TQ = QQ => {
        if (!QQ || QQ === document.scrollingElement) return new DOMRect(0, 0, window.innerWidth, window.innerHeight);
        const FQ = QQ.getBoundingClientRect(),
          wQ = Math.max(0, FQ.left),
          LQ = Math.max(0, FQ.top);
        return new DOMRect(wQ, LQ, Math.min(window.innerWidth, FQ.right) - wQ, Math.min(window.innerHeight, FQ.bottom) - LQ)
      },
      KQ = (QQ, FQ) => QQ.left < FQ.right && FQ.left < QQ.right && QQ.top < FQ.bottom && FQ.top < QQ.bottom;
    var zQ = wQ(53),
      lQ = wQ(1070),
      jQ = wQ.n(lQ),
      aQ = wQ(1107);
    let XQ = 0,
      fQ = !1;
    class VQ {
      constructor() {
        this.element = null, this.shownKey = "", this.gap = null
      }
      setElement(QQ) {
        this.element = QQ, this.shownKey = "", this.gap = null
      }
      show(QQ) {
        const FQ = this.element;
        if (!FQ) return;
        const wQ = QQ ? this.keepOnScreen(FQ, QQ) : null,
          LQ = wQ ? `${wQ.left},${wQ.top},${wQ.width},${wQ.height}` : "";
        if (LQ === this.shownKey) return;
        const qQ = "" === this.shownKey;
        this.shownKey = LQ, FQ.classList.toggle("Visible", null !== wQ), wQ && (FQ.classList.toggle("Snap", qQ), FQ.style.width = `${wQ.width}px`, FQ.style.height = `${wQ.height}px`, FQ.style.transform = `translate(${wQ.left}px, ${wQ.top}px)`, qQ && (FQ.offsetWidth, FQ.classList.remove("Snap")))
      }
      hide() {
        this.show(null)
      }
      keepOnScreen(QQ, FQ) {
        var wQ;
        const LQ = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!fQ){fQ=!0;const QQ=document.createElement("div");QQ.setAttribute("aria-hidden","true"),QQ.style.cssText="position: fixed; top: 0; left: 0; width: 1rem; height: 0; visibility: hidden; pointer-events: none",document.body.appendChild(QQ),new ResizeObserver((()=>{XQ++})).observe(QQ)}return String(XQ)})()}`;
        (null === (wQ = this.gap) || void 0 === wQ ? void 0 : wQ.key) !== LQ && (this.gap = {
          px: parseFloat(getComputedStyle(QQ).paddingLeft) || 0,
          key: LQ
        });
        const qQ = this.gap.px + 2,
          oQ = Math.max(FQ.left, qQ),
          DQ = Math.max(FQ.top, qQ),
          kQ = Math.min(FQ.left + FQ.width, window.innerWidth - qQ),
          vQ = Math.min(FQ.top + FQ.height, window.innerHeight - qQ);
        return kQ <= oQ || vQ <= DQ ? FQ : {
          left: oQ,
          top: DQ,
          width: kQ - oQ,
          height: vQ - DQ
        }
      }
    }
    const hQ = QQ => {
      let {
        placer: FQ,
        className: wQ
      } = QQ;
      const LQ = (0, zQ.useCallback)((QQ => {
        FQ.setElement(QQ)
      }), [FQ]);
      return (0, aQ.jsx)("div", {
        ref: LQ,
        className: jQ()("PadReticle", wQ),
        "aria-hidden": !0
      })
    };
    var JQ = wQ(8408);
    const EQ = {
      x: 0,
      y: 0,
      visible: !1,
      pressed: !1
    };
    const nQ = new class {
      constructor() {
        this.state = EQ, this.listeners = new Set
      }
      get() {
        return this.state
      }
      set(QQ) {
        if (FQ = this.state, wQ = QQ, (FQ.visible || wQ.visible) && (FQ.visible !== wQ.visible || FQ.x !== wQ.x || FQ.y !== wQ.y || FQ.pressed !== wQ.pressed)) {
          var FQ, wQ;
          this.state = QQ;
          for (const FQ of this.listeners) FQ(QQ)
        }
      }
      hide() {
        this.set(EQ)
      }
      subscribe(QQ) {
        return this.listeners.add(QQ), () => {
          this.listeners.delete(QQ)
        }
      }
    };
    var gQ = wQ(8419);
    const PQ = (QQ, FQ) => {
        let {
          kind: wQ,
          holding: LQ,
          hasPress: qQ,
          hasBack: oQ,
          slotHasItem: DQ
        } = FQ;
        switch (QQ) {
          case "primary":
            return "slot" === wQ ? "slotPrimary" : "recipe" === wQ || "button" === wQ ? qQ ? "pressPrimary" : "click" : "textField" === wQ ? "openKeyboard" : null;
          case "secondary":
            return "slot" === wQ ? "slotSecondary" : "button" !== wQ && "recipe" !== wQ || !qQ ? null : "pressSecondary";
          case "quickMove":
            return "slot" === wQ && DQ ? "slotQuickMove" : null;
          case "hotbarSwap":
            return "slot" === wQ && DQ && !LQ ? "hotbarPick" : null;
          case "openButton":
            return "close";
          case "back":
            return LQ ? "cancel" : oQ ? "pressBack" : "close"
        }
      },
      ZQ = QQ => {
        const FQ = [];
        if (QQ.hotbarPicking) return FQ.push({
          actions: ["inventoryPrimary", "inventoryHotbarSwap"],
          labelKey: "inventorySwapHere"
        }), FQ.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryCancel"
        }), FQ;
        if (QQ.holding) "slot" === QQ.kind ? (FQ.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryPlace"
        }), FQ.push({
          actions: ["inventorySecondary"],
          labelKey: "inventoryPlaceOne"
        })) : "textField" === QQ.kind && FQ.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryType"
        }), FQ.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryPutBack"
        }), FQ.push({
          actions: ["inventoryDrop"],
          labelKey: "inventoryDrop"
        }), QQ.openButtonCloses && FQ.push({
          actions: ["inventory"],
          labelKey: "inventoryClose"
        });
        else {
          var wQ;
          "slot" === QQ.kind && QQ.slotHasItem ? (FQ.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryTake"
          }), FQ.push({
            actions: ["inventorySecondary"],
            labelKey: "inventoryTakeHalf"
          }), FQ.push({
            actions: ["inventoryQuickMove"],
            labelKey: QQ.quickMoveToHotbar ? "inventoryToHotbar" : "inventoryQuickMove"
          }), FQ.push({
            actions: ["inventoryHotbarSwap"],
            labelKey: "inventoryHotbarSwap"
          }), FQ.push({
            actions: ["inventoryDrop"],
            labelKey: "inventoryDrop"
          })) : "button" !== QQ.kind && "recipe" !== QQ.kind || !QQ.pressHints ? "button" === QQ.kind || "recipe" === QQ.kind ? FQ.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventorySelect"
          }) : "textField" === QQ.kind && FQ.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryType"
          }) : (QQ.pressHints.primary && FQ.push({
            actions: ["inventoryPrimary"],
            labelKey: QQ.pressHints.primary
          }), QQ.pressHints.secondary && FQ.push({
            actions: ["inventorySecondary"],
            labelKey: QQ.pressHints.secondary
          }));
          const LQ = null === (wQ = QQ.pressHints) || void 0 === wQ ? void 0 : wQ.back;
          LQ && FQ.push({
            actions: ["inventoryClose"],
            labelKey: LQ
          });
          const qQ = [];
          QQ.openButtonCloses && qQ.push("inventory"), LQ || qQ.push("inventoryClose"), qQ.length > 0 && FQ.push({
            actions: qQ,
            labelKey: "inventoryClose"
          })
        }
        return FQ.push({
          actions: ["inventoryPanelPrevious", "inventoryPanelNext"],
          labelKey: "inventoryPanels"
        }), QQ.hasCategories ? FQ.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryCategory"
        }) : QQ.hasList && FQ.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryPage"
        }), FQ
      };
    var yQ = wQ(8423),
      BQ = wQ(8421);
    class dQ {
      constructor(QQ) {
        this.probes = QQ, this.byContainer = new Map, this.byParent = new Map
      }
      find(QQ, FQ) {
        const wQ = OQ(QQ, "y", FQ);
        if (!wQ) return null;
        let LQ = this.byContainer.get(wQ);
        return LQ || (this.probes.push({
          element: wQ,
          rect: LF(wQ.getBoundingClientRect())
        }), LQ = {
          container: wQ,
          box: TQ(wQ),
          group: wF(wQ)
        }, this.byContainer.set(wQ, LQ)), LQ
      }
      findForParent(QQ, FQ) {
        let wQ = this.byParent.get(QQ);
        return void 0 === wQ && (wQ = this.find(QQ, FQ), this.byParent.set(QQ, wQ)), wQ
      }
    }
    const QF = new WeakMap;
    let FF = 0;
    const wF = QQ => {
        let FQ = QF.get(QQ);
        return FQ || (FQ = "el:" + FF++, QF.set(QQ, FQ)), FQ
      },
      LF = QQ => ({
        left: QQ.left,
        top: QQ.top,
        width: QQ.width,
        height: QQ.height
      }),
      qF = QQ => QQ.width > 0 && QQ.height > 0,
      oF = (QQ, FQ) => qF(QQ) && QQ.left + QQ.width > 0 && QQ.top + QQ.height > 0 && QQ.left < FQ.width && QQ.top < FQ.height,
      DF = (QQ, FQ, wQ) => {
        const LQ = QQ.top + QQ.height / 2;
        return oF(QQ, FQ) && (!wQ || LQ >= wQ.top && LQ <= wQ.bottom)
      },
      kF = QQ => ({
        x: QQ.left + QQ.width / 2,
        y: QQ.top + QQ.height / 2
      }),
      vF = (QQ, FQ, wQ) => QQ < 0 ? wQ >= 0 ? 0 : FQ - 1 : ((QQ + wQ) % FQ + FQ) % FQ,
      mF = QQ => "Left" === QQ || "Right" === QQ,
      uF = (QQ, FQ, wQ) => {
        const LQ = mF(wQ),
          qQ = LQ ? QQ.top : QQ.left,
          oQ = LQ ? QQ.height : QQ.width,
          DQ = LQ ? FQ.top : FQ.left,
          kQ = LQ ? FQ.height : FQ.width,
          vQ = Math.max(0, Math.max(DQ - (qQ + oQ), qQ - (DQ + kQ)));
        return oQ > 1.5 * kQ ? {
          gap: vQ,
          offset: Math.max(0, DQ - qQ) + .1 * Math.max(0, qQ - DQ)
        } : {
          gap: vQ,
          offset: Math.abs(DQ + kQ / 2 - (qQ + oQ / 2))
        }
      },
      HF = (QQ, FQ, wQ) => {
        const LQ = ((QQ, FQ, wQ) => {
          const LQ = kF(QQ),
            qQ = kF(FQ),
            oQ = mF(wQ) ? Math.min(QQ.width, FQ.width) / 4 : Math.min(QQ.height, FQ.height) / 4;
          switch (wQ) {
            case "Right":
              return qQ.x - LQ.x >= oQ ? Math.max(0, FQ.left - (QQ.left + QQ.width)) : null;
            case "Left":
              return LQ.x - qQ.x >= oQ ? Math.max(0, QQ.left - (FQ.left + FQ.width)) : null;
            case "Down":
              return qQ.y - LQ.y >= oQ ? Math.max(0, FQ.top - (QQ.top + QQ.height)) : null;
            case "Up":
              return LQ.y - qQ.y >= oQ ? Math.max(0, QQ.top - (FQ.top + FQ.height)) : null
          }
        })(QQ, FQ, wQ);
        if (null === LQ) return null;
        const qQ = uF(QQ, FQ, wQ);
        return LQ + 3 * qQ.gap + .5 * qQ.offset
      },
      bF = (QQ, FQ) => FQ.visible || null !== FQ.scrollGroup && FQ.scrollGroup === QQ.scrollGroup,
      YF = (QQ, FQ, wQ, LQ) => {
        let qQ = null,
          oQ = 1 / 0;
        for (const DQ of FQ) {
          if (DQ.key === QQ.key || !bF(QQ, DQ) || !LQ(DQ)) continue;
          const FQ = HF(QQ.rect, DQ.rect, wQ);
          null !== FQ && FQ < oQ && (qQ = DQ, oQ = FQ)
        }
        return qQ
      },
      xF = (QQ, FQ, wQ) => {
        const LQ = YF(QQ, FQ, wQ, (() => !0));
        if (!LQ || mF(wQ) || null === QQ.scrollGroup || LQ.scrollGroup === QQ.scrollGroup) return LQ;
        const qQ = YF(QQ, FQ, wQ, (FQ => 0 === uF(QQ.rect, FQ.rect, wQ).gap));
        return null !== qQ && void 0 !== qQ ? qQ : LQ
      },
      AF = (QQ, FQ, wQ) => {
        let LQ = null,
          qQ = 1 / 0;
        for (const oQ of FQ) {
          if (!oQ.visible || wQ && !wQ(oQ)) continue;
          const FQ = kF(oQ.rect),
            DQ = Math.hypot(FQ.x - QQ.x, FQ.y - QQ.y);
          DQ < qQ && (LQ = oQ, qQ = DQ)
        }
        return LQ
      },
      tF = QQ => {
        const {
          rect: FQ,
          clip: wQ
        } = QQ;
        if (!wQ) return FQ;
        const LQ = Math.max(FQ.left, wQ.left),
          qQ = Math.max(FQ.top, wQ.top);
        return {
          left: LQ,
          top: qQ,
          width: Math.min(FQ.left + FQ.width, wQ.left + wQ.width) - LQ,
          height: Math.min(FQ.top + FQ.height, wQ.top + wQ.height) - qQ
        }
      },
      eF = (QQ, FQ) => FQ.x >= QQ.left && FQ.x < QQ.left + QQ.width && FQ.y >= QQ.top && FQ.y < QQ.top + QQ.height,
      MF = (QQ, FQ) => {
        let wQ = null,
          LQ = 1 / 0;
        for (const qQ of FQ) {
          const FQ = tF(qQ);
          (qQ.visible || qQ.clip) && eF(FQ, QQ) && (FQ.width * FQ.height < LQ && (wQ = qQ, LQ = FQ.width * FQ.height))
        }
        return wQ
      },
      GF = QQ => {
        let FQ = null;
        for (const wQ of QQ) {
          if (!wQ.visible) continue;
          if (!FQ) {
            FQ = wQ;
            continue
          }
          const QQ = Math.min(FQ.rect.height, wQ.rect.height) / 2,
            LQ = wQ.rect.top - FQ.rect.top;
          (LQ < -QQ || Math.abs(LQ) <= QQ && wQ.rect.left < FQ.rect.left) && (FQ = wQ)
        }
        return FQ
      },
      pF = (QQ, FQ, wQ, LQ, qQ) => {
        const oQ = qQ % FQ,
          DQ = Math.floor(qQ / FQ);
        return {
          left: QQ.left + oQ * wQ,
          top: QQ.top + DQ * LQ,
          width: QQ.width,
          height: QQ.height
        }
      },
      cF = ".EntireInventoryWrapper .Inventory, .HotBarGameItemsContainer",
      CF = ".LazyLoadedItemWrapper",
      SF = ["[data-inven-idx]", "[data-recipe-key]", "[role=button]", "button", "input:not([type=hidden])", "textarea", ".CreativeCategoryTab", ".CreativeCategoryDropdownButton", ".CreativeCategoryDropdownOption", "[data-craft-ingredient]"].join(","),
      iF = [
        ["hotbar", ".HotBarGameItemsContainer"],
        ["gameButtons", ".ClientGameInventoryButtons"],
        ["categories", ".CreativeCategoryRail"],
        ["recipe", ".CraftableInfo"],
        ["armour", ".ArmourItemSlots"],
        ["main", ".InvenBodyRight"],
        ["left", ".InvenLeftSide"]
      ],
      WF = ["gameButtons", "categories", "left", "recipe", "armour", "main", "hotbar"],
      RF = QQ => QQ.hasAttribute("data-inven-idx") ? "slot" : QQ.hasAttribute("data-recipe-key") ? "recipe" : QQ.hasAttribute("data-craft-ingredient") || (0, BQ.t)(QQ) ? "info" : (0, JQ.P)(QQ) ? "textField" : "button",
      OF = (QQ, FQ) => "slot" === FQ ? Number(QQ.getAttribute("data-inven-idx")) : null,
      sF = QQ => QQ.matches(CF) ? QQ.querySelector(SF) : QQ,
      rF = QQ => {
        var FQ, wQ;
        return {
          element: QQ,
          recipe: null !== (FQ = QQ && (null === (wQ = sF(QQ)) || void 0 === wQ ? void 0 : wQ.getAttribute("data-recipe-key"))) && void 0 !== FQ ? FQ : null
        }
      },
      IF = QQ => {
        const FQ = sF(QQ);
        if (!FQ) return {
          kind: "pending",
          idx: null
        };
        const wQ = RF(FQ);
        return {
          kind: wQ,
          idx: OF(FQ, wQ)
        }
      },
      UF = QQ => {
        const FQ = [];
        for (const [wQ, LQ] of iF) {
          QQ.matches(LQ) && FQ.push([wQ, QQ]);
          for (const qQ of QQ.querySelectorAll(LQ)) FQ.push([wQ, qQ])
        }
        return FQ
      },
      NF = (QQ, FQ) => {
        for (const [wQ, LQ] of QQ)
          if (LQ.contains(FQ)) return wQ;
        return "other"
      },
      TF = (QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ) => {
        var vQ;
        const mQ = QQ.children,
          uQ = LF(mQ[0].getBoundingClientRect()),
          HQ = [{
            element: mQ[0],
            rect: uQ
          }];
        if (oQ.push(HQ[0]), 0 === uQ.width || 0 === uQ.height) return;
        let bQ = 1;
        for (; bQ < mQ.length && Math.abs(mQ[bQ].getBoundingClientRect().top - uQ.top) < 1;) bQ++;
        const YQ = QQ => {
            const FQ = {
              element: mQ[QQ],
              rect: LF(mQ[QQ].getBoundingClientRect())
            };
            return oQ.push(FQ), HQ.push(FQ), FQ.rect
          },
          xQ = bQ > 1 ? YQ(1).left - uQ.left : uQ.width,
          AQ = mQ.length > bQ ? YQ(bQ).top - uQ.top : uQ.height,
          tQ = DQ.find(QQ, FQ);
        let eQ = null;
        if (tQ) {
          var MQ;
          const {
            container: QQ,
            box: FQ
          } = tQ;
          eQ = null !== (MQ = kQ.get(QQ)) && void 0 !== MQ ? MQ : null, eQ || (eQ = {
            top: QQ.scrollTop,
            left: QQ.scrollLeft,
            box: FQ,
            viewport: LQ,
            targets: [],
            probes: [],
            holdsOthers: !1
          }, kQ.set(QQ, eQ)), eQ.probes.push(...HQ)
        }
        const GQ = qQ.length;
        for (let SQ = 0; SQ < mQ.length; SQ++) {
          var pQ, cQ, CQ;
          const QQ = mQ[SQ],
            FQ = pF(uQ, bQ, xQ, AQ, SQ),
            oQ = QQ.firstElementChild ? QQ.querySelector(SF) : null,
            DQ = oQ ? RF(oQ) : "pending";
          qQ.push({
            key: wF(QQ),
            rect: FQ,
            panel: wQ,
            scrollGroup: null !== (pQ = null === tQ || void 0 === tQ ? void 0 : tQ.group) && void 0 !== pQ ? pQ : null,
            visible: DF(FQ, LQ, null === tQ || void 0 === tQ ? void 0 : tQ.box),
            clip: null !== (cQ = null === tQ || void 0 === tQ ? void 0 : tQ.box) && void 0 !== cQ ? cQ : null,
            element: QQ,
            kind: DQ,
            idx: oQ ? OF(oQ, DQ) : null,
            scrollContainer: null !== (CQ = null === tQ || void 0 === tQ ? void 0 : tQ.container) && void 0 !== CQ ? CQ : null
          })
        }
        null === (vQ = eQ) || void 0 === vQ || vQ.targets.push(...qQ.slice(GQ))
      },
      KF = QQ => QQ instanceof Element && null !== QQ.closest(CF),
      zF = QQ => null !== QQ.scrollContainer && KF(QQ.element);
    class lF {
      constructor() {
        this.latched = null, this.presses = 0
      }
      press(QQ, FQ, wQ, LQ) {
        this.latched = {
          source: QQ,
          focusKey: FQ,
          sinceMs: wQ,
          hold: {
            id: ++this.presses,
            holdMs: LQ
          }
        }
      }
      update(QQ, FQ, wQ) {
        const LQ = this.latched;
        return LQ ? QQ && FQ === LQ.focusKey ? wQ - LQ.sinceMs < LQ.hold.holdMs ? null : (this.latched = null, LQ.source) : (this.latched = null, null) : null
      }
      getHold() {
        var QQ, FQ;
        return null !== (QQ = null === (FQ = this.latched) || void 0 === FQ ? void 0 : FQ.hold) && void 0 !== QQ ? QQ : null
      }
      reset() {
        this.latched = null
      }
    }
    var jF = wQ(8431);
    const aF = {
        kind: "none"
      },
      XF = QQ => ({
        x: QQ.clientX,
        y: QQ.clientY
      }),
      fF = () => 2 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
    class VF {
      constructor() {
        this.hovered = aF, this.signature = "", this.holding = !1, this.lastPoint = {
          clientX: 0,
          clientY: 0
        }
      }
      sync(QQ, FQ, wQ, LQ, qQ) {
        const oQ = null !== FQ ? {
            kind: "slot",
            idx: FQ
          } : wQ ? {
            kind: "element",
            element: wQ
          } : aF,
          DQ = `${qQ}|${Math.round(LQ.clientX)},${Math.round(LQ.clientY)}`,
          kQ = (vQ = this.hovered, mQ = oQ, "slot" === vQ.kind && "slot" === mQ.kind ? vQ.idx === mQ.idx : "element" === vQ.kind && "element" === mQ.kind ? vQ.element === mQ.element : vQ.kind === mQ.kind);
        var vQ, mQ;
        if (kQ && DQ === this.signature) return;
        const uQ = !kQ || qQ !== this.holding || "" === this.signature;
        this.signature = DQ, this.holding = qQ, this.lastPoint = LQ;
        const HQ = this.hovered;
        if (this.hovered = oQ, "slot" === oQ.kind) return this.leaveElement(HQ, null, LQ), void(uQ ? QQ.hover(oQ.idx, LQ) : QQ.moveTo(LQ));
        if (kQ) return void("element" === oQ.kind ? (0, JQ.p)(oQ.element, oQ.element, XF(LQ)) : QQ.hover(null, LQ));
        QQ.hover(null, LQ);
        const bQ = "element" === oQ.kind ? oQ.element : null;
        "element" === HQ.kind ? (0, JQ.p)(HQ.element, bQ, XF(LQ)) : bQ && (0, JQ.p)(null, bQ, XF(LQ))
      }
      invalidate() {
        this.signature = ""
      }
      clear(QQ) {
        const FQ = this.hovered;
        this.hovered = aF, this.signature = "", "none" !== FQ.kind && (this.leaveElement(FQ, null, this.lastPoint), QQ && "slot" === FQ.kind && QQ.hover(null, this.lastPoint))
      }
      leaveElement(QQ, FQ, wQ) {
        "element" === QQ.kind && (0, JQ.p)(QQ.element, FQ, XF(wQ))
      }
    }
    class hF {
      constructor() {
        this.lastTiltedMs = -1 / 0
      }
      update(QQ, FQ) {
        SQ(QQ) && (this.lastTiltedMs = FQ)
      }
      allowsClick(QQ) {
        return QQ - this.lastTiltedMs > 150
      }
    }
    class JF {
      constructor() {
        this.remainder = 0, this.container = null
      }
      isScrolling(QQ) {
        return 0 !== (0, xQ.j)(QQ, .2).y
      }
      step(QQ, FQ, wQ) {
        QQ !== this.container && (this.container = QQ, this.remainder = 0);
        const LQ = iQ(FQ, wQ).y;
        if (0 === LQ) return this.remainder = 0, !1;
        const qQ = this.remainder + LQ,
          oQ = Math.trunc(qQ);
        if (this.remainder = qQ - oQ, 0 === oQ) return !1;
        const DQ = QQ.scrollTop;
        return QQ.scrollTop = DQ + oQ, QQ.scrollTop !== DQ
      }
      current() {
        var QQ;
        return null !== (QQ = this.container) && void 0 !== QQ && QQ.isConnected ? this.container : null
      }
      reset() {
        this.remainder = 0, this.container = null
      }
    }
    var EF = wQ(8439);
    const nF = "[data-pad-inventory-default]",
      gF = ".HotBarGameItemsContainer .InvenItem.Selected",
      PF = {
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
      ZF = [
        ["primary", "inventoryPrimary"],
        ["secondary", "inventorySecondary"],
        ["quickMove", "inventoryQuickMove"],
        ["hotbarSwap", "inventoryHotbarSwap"],
        ["back", "inventoryClose"],
        ["openButton", "inventory"]
      ],
      yF = ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryHotbarSwap", "inventoryClose", "inventoryDrop"],
      BF = ["inventoryPanelPrevious", "inventoryPanelNext", "menuPageUp", "menuPageDown"],
      dF = [...yF, ...BF],
      Qw = () => {
        return QQ = (0, uQ.g)("inventory"), !dF.map(uQ.g).includes(QQ) && !(0, xQ.I)(QQ);
        var QQ
      },
      Fw = new Set(["slotPrimary", "slotSecondary", "slotQuickMove", "pressPrimary", "pressSecondary", "openKeyboard"]),
      ww = (QQ, FQ) => {
        const wQ = !(null === FQ || void 0 === FQ || !FQ.isHolding());
        return function(QQ, FQ) {
          const wQ = QQ.find((QQ => QQ.visible && FQ(QQ)));
          if (wQ) return wQ;
          for (var LQ = arguments.length, qQ = new Array(LQ > 2 ? LQ - 2 : 0), oQ = 2; oQ < LQ; oQ++) qQ[oQ - 2] = arguments[oQ];
          for (const DQ of qQ) {
            const FQ = GF(QQ.filter(DQ));
            if (FQ) return FQ
          }
          return GF(QQ)
        }(QQ, (QQ => {
          const {
            element: FQ
          } = QQ;
          return FQ.matches(nF) || null !== FQ.querySelector(nF) || FQ.matches(gF)
        }), (QQ => "slot" === QQ.kind ? wQ || null !== QQ.idx && !(null === FQ || void 0 === FQ || !FQ.hasItemAt(QQ.idx)) : "recipe" === QQ.kind || "pending" === QQ.kind), (QQ => "slot" === QQ.kind || "button" === QQ.kind))
      };
    class Lw {
      constructor() {
        this.set = null, this.observer = new MutationObserver((QQ => {
          QQ.some((QQ => !KF(QQ.target))) && (this.set = null)
        })), this.invalidate = () => {
          this.set = null
        }, this.onScroll = QQ => {
          this.scrolled(QQ.target)
        }
      }
      get() {
        if (!this.set) {
          this.set = (() => {
            const QQ = [],
              FQ = [];
            let wQ = !1;
            const LQ = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              qQ = new Map,
              oQ = new dQ(FQ);
            for (const HQ of document.querySelectorAll(cF)) {
              const uQ = UF(HQ);
              wQ ||= null !== HQ.querySelector(".CreativeCategoryTab");
              for (const wQ of HQ.querySelectorAll(`${CF}:first-child`)) {
                const DQ = wQ.parentElement;
                TF(DQ, HQ, NF(uQ, DQ), LQ, QQ, FQ, oQ, qQ)
              }
              for (const wQ of HQ.querySelectorAll(SF)) {
                var DQ, kQ, vQ, mQ;
                if (wQ.closest(CF) || wQ.closest("[data-pad-ignore]")) continue;
                const bQ = null === (DQ = wQ.parentElement) || void 0 === DQ ? void 0 : DQ.closest(SF);
                if (bQ && HQ.contains(bQ)) continue;
                const YQ = RF(wQ),
                  xQ = OF(wQ, YQ);
                if (-1 === xQ) continue;
                const AQ = LF(wQ.getBoundingClientRect());
                FQ.push({
                  element: wQ,
                  rect: AQ
                });
                const tQ = oQ.findForParent(wQ.parentElement, HQ),
                  eQ = tQ && !qQ.has(tQ.container) ? tQ : null;
                (eQ ? qF(AQ) : oF(AQ, LQ)) && QQ.push({
                  key: wF(wQ),
                  rect: AQ,
                  panel: NF(uQ, wQ),
                  scrollGroup: null !== (kQ = null === eQ || void 0 === eQ ? void 0 : eQ.group) && void 0 !== kQ ? kQ : null,
                  visible: DF(AQ, LQ, null === eQ || void 0 === eQ ? void 0 : eQ.box),
                  clip: null !== (vQ = null === eQ || void 0 === eQ ? void 0 : eQ.box) && void 0 !== vQ ? vQ : null,
                  element: wQ,
                  kind: YQ,
                  idx: xQ,
                  scrollContainer: null !== (mQ = null === eQ || void 0 === eQ ? void 0 : eQ.container) && void 0 !== mQ ? mQ : null
                })
              }
            }
            for (const [HQ, bQ] of qQ) bQ.holdsOthers = FQ.some((QQ => QQ.element !== HQ && HQ.contains(QQ.element) && !QQ.element.closest(CF)));
            const uQ = new Map;
            for (const HQ of QQ) uQ.set(HQ.element, HQ);
            return {
              targets: QQ,
              byElement: uQ,
              hasCategories: wQ,
              probes: FQ,
              scrollers: qQ
            }
          })(), this.observer.disconnect();
          for (const QQ of document.querySelectorAll(cF)) this.observer.observe(QQ, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "disabled", "aria-disabled", "tabindex", "data-inven-idx"]
          })
        }
        return this.set
      }
      scrolled(QQ) {
        !this.set || QQ instanceof Element && ((QQ, FQ) => {
          const wQ = QQ.scrollers.get(FQ);
          if (!wQ || wQ.holdsOthers || FQ.scrollLeft !== wQ.left) return !1;
          const LQ = FQ.scrollTop - wQ.top;
          if (0 === LQ) return !0;
          wQ.top = FQ.scrollTop;
          for (const qQ of wQ.probes) qQ.rect.top -= LQ;
          for (const qQ of wQ.targets) qQ.rect.top -= LQ, qQ.visible = DF(qQ.rect, wQ.viewport, wQ.box);
          return !0
        })(this.set, QQ) || (this.set = null)
      }
      revalidate() {
        this.set && this.set.probes.some((QQ => {
          return FQ = QQ.rect, wQ = QQ.element.getBoundingClientRect(), !(FQ.left === wQ.left && FQ.top === wQ.top && FQ.width === wQ.width && FQ.height === wQ.height);
          var FQ, wQ
        })) && (this.set = null)
      }
      disconnect() {
        this.observer.disconnect(), this.set = null
      }
    }
    const qw = new class {
        constructor() {
          this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(xQ.D.map((QQ => [QQ, (0, AQ.d)(xQ.E)]))), this.stickRepeat = new xQ.d((0, AQ.d)(xQ.db)), this.pageUpTimer = (0, AQ.d)(xQ.Z), this.pageDownTimer = (0, AQ.d)(xQ.Z), this.stickGate = new cQ, this.pointer = null, this.activePress = null, this.dropLatch = new lF, this.scroller = new JF, this.scrollStickClick = new hF, this.hover = new VF, this.lastRealPointer = null, this.placeAfterCategory = null, this.hotbarPick = null, this.ring = new VQ, this.targets = new Lw, this.hasCategories = !1, this.wasShowing = !1, this.state = jF.c, this.isActive = () => (0, yQ.i)(), this.isShowing = () => "inventory" === HQ.b.getActiveConsumerName() && (0, YQ.j)(), this.getState = () => this.state, this.isSteppingSlots = () => this.isShowing() && null === this.pointer, this.onDeactivate = () => {
            this.endInteraction((0, yQ.e)()), (0, yQ.i)() || this.forgetSurface()
          }, this.forgetSurface = () => {
            var QQ;
            this.reopenSlotIdx = null !== (QQ = this.focused ? IF(this.focused).idx : null) && void 0 !== QQ ? QQ : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, yQ.r)(), this.panelMemory.clear(), this.targets.disconnect()
          }, this.onFrame = QQ => {
            (0, kQ.unstable_batchedUpdates)((() => {
              this.frame(QQ)
            }))
          }, this.shouldBlockRealPointer = QQ => QQ.isTrusted && !(0, eQ.o)(QQ) && this.isShowing(), this.noteRealPointer = QQ => {
            QQ instanceof MouseEvent && QQ.isTrusted && !(0, eQ.o)(QQ) && (this.lastRealPointer ??= {
              x: 0,
              y: 0
            }, this.lastRealPointer.x = QQ.clientX, this.lastRealPointer.y = QQ.clientY)
          }, this.wakePressActs = QQ => {
            var FQ;
            return QQ === (0, uQ.g)("inventoryClose") ? !(null !== (FQ = (0, yQ.e)()) && void 0 !== FQ && FQ.isHolding()) : !(QQ !== (0, uQ.g)("inventory") || !Qw()) || ((0, xQ.I)(QQ) ? this.isNavButton(QQ) : BF.some((FQ => (0, uQ.g)(FQ) === QQ)))
          }
        }
        frame(QQ) {
          var FQ, wQ, LQ, qQ, oQ;
          const DQ = (0, yQ.e)();
          if (!(0, YQ.j)()) return void(this.wasShowing && (this.endInteraction(DQ), this.rehoverRealPointer()));
          this.wasShowing = !0, this.applyFocusRequest(), QQ.wokeDevice && this.focusWakePointer(!(null === DQ || void 0 === DQ || !DQ.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, bQ.h)().inventoryNavigation || this.pointer || this.engagePointer();
          const kQ = performance.now();
          this.handleNavigation(QQ, kQ), this.handlePanels(QQ), this.handlePaging(QQ, kQ), this.handleScroll(QQ), this.handleButtons(QQ, kQ, DQ), this.applyFocusRequest(), this.pointer && this.hoverAtPointer();
          const vQ = this.ensureFocus(),
            mQ = this.focusContext(DQ);
          this.ring.show(vQ);
          const HQ = "slot" === mQ.kind ? mQ.idx : null,
            xQ = null !== (FQ = null === (wQ = mQ.actionElement) || void 0 === wQ ? void 0 : wQ.querySelector(".DoCraftItem")) && void 0 !== FQ ? FQ : mQ.actionElement;
          this.pointer ? (this.hover.sync(DQ, HQ, xQ, ((QQ, FQ) => {
            const wQ = FQ ? fF() : 0;
            return {
              clientX: QQ.x - wQ,
              clientY: QQ.y - wQ
            }
          })(this.pointer, mQ.holding), mQ.holding), nQ.set({
            x: this.pointer.x,
            y: this.pointer.y,
            visible: !0,
            pressed: QQ.isHeld((0, uQ.g)("inventoryPrimary"))
          })) : vQ && this.focused && this.hover.sync(DQ, HQ, xQ, ((QQ, FQ) => {
            if (!FQ) return {
              clientX: QQ.left + QQ.width - 10,
              clientY: QQ.top + QQ.height / 2 - 10
            };
            const wQ = fF();
            return {
              clientX: QQ.left + QQ.width / 2 - wQ,
              clientY: QQ.top + QQ.height / 2 - wQ
            }
          })(vQ, mQ.holding), mQ.holding), this.publishState({
            showing: !0,
            kind: mQ.kind,
            holding: mQ.holding,
            slotHasItem: mQ.slotHasItem,
            pressHints: null !== (LQ = null === (qQ = mQ.press) || void 0 === qQ ? void 0 : qQ.hints) && void 0 !== LQ ? LQ : null,
            hasCategories: this.hasCategories,
            hasList: !!this.focusTarget && zF(this.focusTarget),
            openButtonCloses: Qw(),
            steppingSlots: null === this.pointer,
            quickMoveToHotbar: "slot" === mQ.kind && !(null === (oQ = mQ.actionElement) || void 0 === oQ || !oQ.closest(".CreativeItemSlots")),
            dropStackHold: this.dropLatch.getHold(),
            hotbarPicking: null !== this.hotbarPick
          })
        }
        focusWakePointer(QQ) {
          var FQ;
          const wQ = (0, YQ.c)();
          if (!wQ) return;
          this.targets.revalidate();
          const LQ = this.getTargets().targets;
          this.setFocus(null !== (FQ = MF(wQ, LQ)) && void 0 !== FQ ? FQ : QQ ? AF(wQ, LQ, (QQ => {
            let {
              rect: FQ
            } = QQ;
            const LQ = Math.max(FQ.left - wQ.x, 0, wQ.x - (FQ.left + FQ.width)),
              qQ = Math.max(FQ.top - wQ.y, 0, wQ.y - (FQ.top + FQ.height));
            return Math.hypot(LQ, qQ) <= Math.min(FQ.width, FQ.height) / 2
          })) : null, !1), "cursor" === (0, bQ.h)().inventoryNavigation && (this.pointer = {
            x: wQ.x,
            y: wQ.y,
            speedRamp: 0
          })
        }
        rehoverRealPointer() {
          const QQ = this.lastRealPointer;
          if (!QQ || "keyboardMouse" !== vQ.c.get("activeInputDevice")) return;
          const FQ = document.elementFromPoint(QQ.x, QQ.y);
          FQ && (0, JQ.p)(null, FQ, QQ)
        }
        endInteraction(QQ) {
          this.wasShowing = !1, this.hotbarPick = null, this.releasePress(), this.dropLatch.reset(), this.scroller.reset();
          for (const FQ of this.dpadTimers.values()) FQ.reset();
          this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(QQ), this.ring.hide(), this.releasePointer(), this.publishState(jF.c)
        }
        getTargets() {
          const QQ = this.targets.get();
          return this.hasCategories = QQ.hasCategories, QQ
        }
        currentTarget() {
          var QQ;
          return this.focused && null !== (QQ = this.getTargets().byElement.get(this.focused)) && void 0 !== QQ ? QQ : null
        }
        readFocusRect() {
          const QQ = this.focused;
          if (null === QQ || void 0 === QQ || !QQ.isConnected || !QQ.closest(cF)) return null;
          const FQ = QQ.getBoundingClientRect();
          return FQ.width > 0 && FQ.height > 0 ? {
            left: FQ.left,
            top: FQ.top,
            width: FQ.width,
            height: FQ.height
          } : null
        }
        ensureFocus() {
          const QQ = this.readFocusRect();
          if (QQ || this.pointer) return QQ;
          const {
            targets: FQ,
            byElement: wQ
          } = this.getTargets();
          let LQ = null,
            qQ = !1;
          if (this.lastRect) LQ = AF(kF(this.lastRect), FQ);
          else {
            var oQ, DQ;
            const QQ = ((QQ, FQ) => {
                const wQ = document.querySelector(".EntireInventoryWrapper [data-pad-inventory-start]");
                return wQ ? ww(QQ.filter((QQ => wQ.contains(QQ.element))), FQ) : null
              })(FQ, (0, yQ.e)()),
              kQ = FQ.find((QQ => null !== QQ.idx && QQ.idx === this.reopenSlotIdx)),
              vQ = document.querySelector(gF);
            qQ = null !== QQ || void 0 !== kQ, LQ = null !== (oQ = null !== (DQ = null !== QQ && void 0 !== QQ ? QQ : kQ) && void 0 !== DQ ? DQ : vQ && wQ.get(vQ)) && void 0 !== oQ ? oQ : GF(FQ)
          }
          return this.setFocus(LQ, qQ), this.lastRect
        }
        setFocus(QQ) {
          let FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          QQ && (this.focused = QQ.element, this.focusTarget = QQ, this.panelMemory.set(QQ.panel, QQ.element), FQ && QQ.scrollContainer && ((QQ, FQ) => {
            const wQ = QQ.getBoundingClientRect(),
              LQ = TQ(FQ),
              qQ = FQ.scrollTop;
            return wQ.top < LQ.top ? FQ.scrollTop -= LQ.top - wQ.top : wQ.bottom > LQ.bottom && (FQ.scrollTop += wQ.bottom - LQ.bottom), FQ.scrollTop !== qQ
          })(QQ.element, QQ.scrollContainer) && this.targets.invalidate(), this.lastRect = this.readFocusRect(), this.followFocusJump())
        }
        followFocusJump() {
          if (this.pointer)
            if ("cursor" === (0, bQ.h)().inventoryNavigation) {
              if (this.lastRect) {
                const QQ = kF(this.lastRect);
                this.pointer = {
                  x: QQ.x,
                  y: QQ.y,
                  speedRamp: 0
                }
              }
            } else this.releasePointer()
        }
        engagePointer() {
          const QQ = this.lastRect ? kF(this.lastRect) : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          };
          this.pointer = {
            x: QQ.x,
            y: QQ.y,
            speedRamp: 0
          }
        }
        releasePointer() {
          this.pointer = null, nQ.hide()
        }
        hoverAtPointer() {
          var QQ;
          const FQ = MF(this.pointer, this.getTargets().targets);
          this.focusTarget = FQ, (null === FQ || void 0 === FQ ? void 0 : FQ.element) !== this.focused && (this.focused = null !== (QQ = null === FQ || void 0 === FQ ? void 0 : FQ.element) && void 0 !== QQ ? QQ : null, FQ && (this.panelMemory.set(FQ.panel, FQ.element), this.lastRect = this.readFocusRect()))
        }
        moveCursor(QQ, FQ) {
          const wQ = this.focusTarget,
            LQ = wQ && (0, bQ.h)().cursorMagnetism ? kF(tF(wQ)) : null;
          this.pointer = CQ(this.pointer, {
            stick: QQ.leftStick,
            moveDeadzone: (0, bQ.h)().moveDeadzone,
            dpad: FQ,
            dtMs: QQ.dtMs,
            cursorSpeedPercent: (0, bQ.h)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: {
              overInteractive: !1,
              magnetTarget: LQ
            }
          })
        }
        move(QQ) {
          this.targets.revalidate();
          const FQ = this.currentTarget();
          FQ && this.setFocus(xF(FQ, this.getTargets().targets, QQ))
        }
        step(QQ) {
          const FQ = this.pointer;
          if (FQ && (this.releasePointer(), !this.focused)) return this.targets.revalidate(), void this.setFocus(((QQ, FQ, wQ) => {
            var LQ;
            const qQ = {
              key: "",
              rect: {
                left: QQ.x,
                top: QQ.y,
                width: 0,
                height: 0
              },
              panel: "",
              scrollGroup: null,
              visible: !0,
              clip: null
            };
            return null !== (LQ = xF(qQ, FQ, wQ)) && void 0 !== LQ ? LQ : AF(QQ, FQ)
          })(FQ, this.getTargets().targets, QQ));
          this.move(QQ)
        }
        isNavButton(QQ) {
          return !yF.some((FQ => (0, uQ.g)(FQ) === QQ)) && !(QQ === (0, uQ.g)("inventory") && Qw())
        }
        handleNavigation(QQ, FQ) {
          const wQ = (0, bQ.h)().inventoryNavigation,
            LQ = {
              x: 0,
              y: 0
            };
          let qQ = null;
          for (const vQ of xQ.D) {
            const oQ = this.isNavButton(vQ) && QQ.isHeld(vQ);
            oQ && (LQ.x += PF[vQ].x, LQ.y += PF[vQ].y), this.dpadTimers.get(vQ).update(oQ, FQ) && "cursor" !== wQ && (qQ ??= vQ)
          }
          const oQ = this.stickGate.update(QQ.leftStick, (0, bQ.h)().moveDeadzone);
          if (qQ && (this.step(qQ), this.stickGate.lock()), "slot" !== wQ) {
            const FQ = ((QQ, FQ, wQ, LQ) => "hybrid" !== QQ ? "cursor" === QQ : !LQ && (FQ || wQ))(wQ, null !== this.pointer, oQ, null !== qQ);
            return FQ && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(QQ, "cursor" === wQ ? LQ : {
              x: 0,
              y: 0
            }))
          }
          const DQ = (0, xQ.j)(QQ.leftStick, (0, bQ.h)().moveDeadzone),
            kQ = this.stickRepeat.update(oQ ? (0, xQ.gb)(DQ) : null, FQ);
          kQ && this.move(kQ)
        }
        applyCategoryPlace() {
          const QQ = this.placeAfterCategory;
          if (!QQ) return;
          this.placeAfterCategory = null, this.targets.invalidate();
          const FQ = AF(kF(QQ.rect), this.getTargets().targets, (FQ => FQ.scrollGroup === QQ.scrollGroup));
          this.setFocus(FQ, !1)
        }
        applyFocusRequest() {
          const QQ = (0, yQ.r)();
          QQ && (this.targets.invalidate(), this.setFocus((0, yQ.c)(this.getTargets().targets, QQ)))
        }
        handlePanels(QQ) {
          var FQ, wQ, LQ;
          const qQ = QQ.wasPressed((0, uQ.g)("inventoryPanelPrevious")),
            oQ = QQ.wasPressed((0, uQ.g)("inventoryPanelNext"));
          if (!qQ && !oQ) return;
          const {
            targets: DQ
          } = this.getTargets(), kQ = (vQ = ((QQ, FQ) => {
            const wQ = [];
            for (const qQ of QQ) qQ.visible && !wQ.includes(qQ.panel) && wQ.push(qQ.panel);
            const LQ = QQ => {
              const LQ = FQ.indexOf(QQ);
              return -1 === LQ ? FQ.length + wQ.indexOf(QQ) : LQ
            };
            return wQ.sort(((QQ, FQ) => LQ(QQ) - LQ(FQ)))
          })(DQ, WF), mQ = null !== (FQ = null === (wQ = this.focusTarget) || void 0 === wQ ? void 0 : wQ.panel) && void 0 !== FQ ? FQ : null, HQ = oQ ? 1 : -1, 0 === vQ.length ? null : vQ[vF(null === mQ ? -1 : vQ.indexOf(mQ), vQ.length, HQ)]);
          var vQ, mQ, HQ;
          if (null === kQ) return;
          const bQ = this.panelMemory.get(kQ),
            YQ = DQ.filter((QQ => QQ.panel === kQ)),
            xQ = null !== (LQ = YQ.find((QQ => QQ.element === bQ && QQ.visible))) && void 0 !== LQ ? LQ : ww(YQ, (0, yQ.e)());
          this.setFocus(xQ)
        }
        handlePaging(QQ, FQ) {
          const wQ = (0, uQ.g)("menuPageUp"),
            LQ = (0, uQ.g)("menuPageDown"),
            qQ = this.pageUpTimer.update(QQ.isHeld(wQ), FQ),
            oQ = this.pageDownTimer.update(QQ.isHeld(LQ), FQ);
          if (!qQ && !oQ) return;
          const DQ = oQ ? 1 : -1;
          if (!QQ.wasPressed(oQ ? LQ : wQ) && this.hasCategories) return;
          if ((QQ => {
              const FQ = Array.from(document.querySelectorAll(".EntireInventoryWrapper .CreativeCategoryTab"));
              if (0 === FQ.length) return !1;
              const wQ = FQ.findIndex((QQ => QQ.classList.contains("Selected"))),
                LQ = FQ[vF(wQ, FQ.length, QQ)];
              return (0, JQ.m)(LQ, (0, JQ.B)(LQ)), !0
            })(DQ)) {
            var kQ, vQ;
            this.targets.invalidate();
            const QQ = null !== (kQ = null === (vQ = this.focusTarget) || void 0 === vQ ? void 0 : vQ.scrollGroup) && void 0 !== kQ ? kQ : null,
              FQ = this.readFocusRect();
            return void(this.placeAfterCategory = null !== QQ && FQ && !this.pointer ? {
              rect: FQ,
              scrollGroup: QQ
            } : null)
          }
          const {
            targets: mQ
          } = this.getTargets(), HQ = this.currentTarget(), bQ = HQ && zF(HQ) ? HQ : mQ.find((QQ => zF(QQ) && QQ.visible));
          if (!bQ) return;
          const YQ = ((QQ, FQ, wQ, LQ) => {
            if (null === QQ.scrollGroup) return null;
            const qQ = kF(QQ.rect),
              oQ = qQ.x,
              DQ = qQ.y + ("Down" === wQ ? LQ : -LQ);
            let kQ = null,
              vQ = 1 / 0;
            for (const mQ of FQ) {
              if (mQ.scrollGroup !== QQ.scrollGroup || mQ.key === QQ.key) continue;
              const FQ = kF(mQ.rect);
              if ("Down" === wQ ? FQ.y <= qQ.y : FQ.y >= qQ.y) continue;
              const LQ = Math.hypot(FQ.x - oQ, FQ.y - DQ);
              LQ < vQ && (kQ = mQ, vQ = LQ)
            }
            return kQ
          })(bQ, mQ, DQ > 0 ? "Down" : "Up", bQ.scrollContainer.clientHeight);
          this.setFocus(null !== YQ && void 0 !== YQ ? YQ : bQ)
        }
        handleScroll(QQ) {
          var FQ, wQ, LQ, qQ, oQ, DQ;
          if (!this.scroller.isScrolling(QQ.rightStick)) return void this.scroller.reset();
          const {
            targets: kQ
          } = this.getTargets(), vQ = this.pointer, mQ = !vQ && this.focusTarget && zF(this.focusTarget) ? this.focusTarget.scrollContainer : null, uQ = vQ && (null === (FQ = kQ.find((QQ => QQ.clip && eF(QQ.clip, vQ)))) || void 0 === FQ ? void 0 : FQ.scrollContainer), HQ = null !== (wQ = null !== (LQ = null !== (qQ = this.scroller.current()) && void 0 !== qQ ? qQ : uQ) && void 0 !== LQ ? LQ : mQ) && void 0 !== wQ ? wQ : null === (oQ = kQ.find(zF)) || void 0 === oQ ? void 0 : oQ.scrollContainer;
          if (!HQ || !this.scroller.step(HQ, QQ.rightStick, QQ.dtMs)) return;
          this.targets.scrolled(HQ);
          const bQ = vQ || (null === (DQ = this.focusTarget) || void 0 === DQ ? void 0 : DQ.scrollContainer) !== HQ ? null : this.readFocusRect();
          if (!bQ) return;
          const YQ = TQ(HQ),
            xQ = kF(bQ);
          if (xQ.y < YQ.top || xQ.y > YQ.bottom) {
            const QQ = this.focusTarget.scrollGroup,
              FQ = AF(xQ, this.getTargets().targets, (FQ => FQ.scrollGroup === QQ));
            this.setFocus(FQ, !1)
          }
        }
        focusContext(QQ) {
          const {
            kind: FQ,
            idx: wQ
          } = this.focused ? IF(this.focused) : {
            kind: null,
            idx: null
          }, LQ = this.focused ? sF(this.focused) : null, qQ = LQ ? (0, EF.c)(LQ) : null;
          return {
            kind: FQ,
            idx: wQ,
            actionElement: LQ,
            press: qQ,
            hasPress: null !== qQ,
            hasBack: !(null === qQ || void 0 === qQ || !qQ.back),
            holding: QQ.isHolding(),
            slotHasItem: null !== wQ && QQ.hasItemAt(wQ)
          }
        }
        handleButtons(QQ, FQ, wQ) {
          var LQ, qQ;
          if (!this.activePress || QQ.isHeld(this.activePress.button) && (LQ = this.activePress.target, qQ = this.focused, null !== LQ.recipe ? rF(qQ).recipe === LQ.recipe : qQ === LQ.element) || this.releasePress(), this.scrollStickClick.update(QQ.rightStick, FQ), !this.handleHotbarPick(QQ, wQ)) {
            for (const [LQ, qQ] of ZF) {
              const oQ = (0, uQ.g)(qQ);
              if (!QQ.wasPressed(oQ) || "openButton" === LQ && !Qw()) continue;
              if ("RS" === oQ && !this.scrollStickClick.allowsClick(FQ)) continue;
              const DQ = this.focusContext(wQ),
                kQ = PQ(LQ, DQ);
              kQ && this.runIntent(kQ, DQ, oQ, wQ)
            }
            this.handleDrop(QQ, FQ, wQ)
          }
        }
        handleHotbarPick(QQ, FQ) {
          const wQ = this.hotbarPick;
          if (!wQ) return !1;
          const LQ = QQ.wasPressed((0, uQ.g)("inventoryPrimary")) || QQ.wasPressed((0, uQ.g)("inventoryHotbarSwap"));
          if (!LQ && !QQ.wasPressed((0, uQ.g)("inventoryClose")) && !FQ.isHolding()) return !(QQ.wasPressed((0, uQ.g)("inventory")) && Qw());
          const qQ = this.focusTarget;
          LQ && "hotbar" === (null === qQ || void 0 === qQ ? void 0 : qQ.panel) && null !== qQ.idx && qQ.idx !== wQ.idx && (FQ.swapWithHotbar(qQ.idx, wQ.idx), this.afterAction()), this.hotbarPick = null;
          const oQ = wQ.element.isConnected ? this.getTargets().byElement.get(wQ.element) : void 0;
          return oQ && this.setFocus(oQ), !0
        }
        startHotbarPick(QQ) {
          var FQ;
          const {
            targets: wQ,
            byElement: LQ
          } = this.getTargets(), qQ = document.querySelector(gF), oQ = null !== (FQ = qQ && LQ.get(qQ)) && void 0 !== FQ ? FQ : wQ.find((QQ => "hotbar" === QQ.panel));
          oQ && this.focused && (this.hotbarPick = {
            idx: QQ,
            element: this.focused
          }, this.setFocus(oQ))
        }
        focusKey() {
          return this.focused ? wF(this.focused) : null
        }
        handleDrop(QQ, FQ, wQ) {
          const LQ = (0, uQ.g)("inventoryDrop");
          if (QQ.wasPressed(LQ)) {
            const QQ = (qQ = this.focusContext(wQ)).holding ? {
              kind: "ym"
            } : "slot" === qQ.kind && qQ.slotHasItem && null !== qQ.idx ? {
              kind: "slot",
              idx: qQ.idx
            } : null;
            return void(QQ && (this.dropFrom(QQ, !1, wQ), this.dropLatch.press(QQ, this.focusKey(), FQ, tQ.b[(0, bQ.h)().tapHoldTime].dropStackMs), this.afterAction()))
          }
          var qQ;
          const oQ = this.dropLatch.update(QQ.isHeld(LQ), this.focusKey(), FQ);
          oQ && ((QQ, FQ, wQ) => "ym" === QQ.kind ? FQ : !FQ && wQ(QQ.idx))(oQ, wQ.isHolding(), wQ.hasItemAt) && (this.dropFrom(oQ, !0, wQ), this.afterAction())
        }
        dropFrom(QQ, FQ, wQ) {
          "ym" === QQ.kind ? wQ.dropHeld(FQ, this.slotPoint()) : wQ.dropSlot(QQ.idx, FQ)
        }
        slotPoint() {
          return this.pointer ? {
            clientX: this.pointer.x,
            clientY: this.pointer.y
          } : this.lastRect ? (QQ => {
            const FQ = kF(QQ);
            return {
              clientX: FQ.x,
              clientY: FQ.y
            }
          })(this.lastRect) : {
            clientX: 0,
            clientY: 0
          }
        }
        runIntent(QQ, FQ, wQ, LQ) {
          const qQ = FQ.idx,
            oQ = FQ.actionElement;
          switch (oQ && Fw.has(QQ) && (0, eQ.w)(oQ), QQ) {
            case "slotPrimary":
              LQ.primary(qQ, this.slotPoint());
              break;
            case "slotSecondary":
              LQ.secondary(qQ, this.slotPoint());
              break;
            case "slotQuickMove":
              LQ.quickMove(qQ, this.slotPoint());
              break;
            case "hotbarPick":
              this.startHotbarPick(qQ);
              break;
            case "pressPrimary":
            case "pressSecondary":
              this.startPress(FQ.press, "pressPrimary" === QQ ? "primary" : "secondary", wQ);
              break;
            case "click":
              (0, JQ.m)(oQ, (0, JQ.B)(oQ));
              break;
            case "openKeyboard":
              (0, JQ.P)(oQ) && (0, JQ.L)(oQ);
              break;
            case "pressBack":
              FQ.press.back();
              break;
            case "cancel":
              LQ.cancel();
              break;
            case "close":
              return this.releasePress(), void LQ.close()
          }
          this.afterAction()
        }
        startPress(QQ, FQ, wQ) {
          this.releasePress(), QQ.press(FQ) && (this.activePress = {
            handlers: QQ,
            button: wQ,
            target: rF(this.focused)
          })
        }
        releasePress() {
          var QQ, FQ, wQ;
          null === (QQ = this.activePress) || void 0 === QQ || null === (FQ = (wQ = QQ.handlers).release) || void 0 === FQ || FQ.call(wQ), this.activePress = null
        }
        afterAction() {
          this.targets.invalidate(), this.hover.invalidate()
        }
        publishState(QQ) {
          ((QQ, FQ) => {
            var wQ, LQ, qQ, oQ, DQ, kQ;
            return QQ.showing === FQ.showing && QQ.kind === FQ.kind && QQ.holding === FQ.holding && QQ.slotHasItem === FQ.slotHasItem && (null === (wQ = QQ.pressHints) || void 0 === wQ ? void 0 : wQ.primary) === (null === (LQ = FQ.pressHints) || void 0 === LQ ? void 0 : LQ.primary) && (null === (qQ = QQ.pressHints) || void 0 === qQ ? void 0 : qQ.secondary) === (null === (oQ = FQ.pressHints) || void 0 === oQ ? void 0 : oQ.secondary) && (null === (DQ = QQ.pressHints) || void 0 === DQ ? void 0 : DQ.back) === (null === (kQ = FQ.pressHints) || void 0 === kQ ? void 0 : kQ.back) && QQ.hasCategories === FQ.hasCategories && QQ.hasList === FQ.hasList && QQ.openButtonCloses === FQ.openButtonCloses && QQ.steppingSlots === FQ.steppingSlots && QQ.hotbarPicking === FQ.hotbarPicking && QQ.quickMoveToHotbar === FQ.quickMoveToHotbar && QQ.dropStackHold === FQ.dropStackHold
          })(QQ, this.state) || (this.state = QQ, mQ.l.GA(jF.g, QQ))
        }
      },
      ow = ["pointermove", "pointerover", "pointerout", "mouseover", "mouseout"];
    var Dw = wQ(8447),
      kw = wQ(307),
      vw = wQ(1641),
      mw = wQ(7967);
    const uw = "[data-pad-secondary]",
      Hw = QQ => QQ instanceof HTMLElement && (0, BQ.p)(QQ) && !(0, BQ.t)(QQ),
      bw = QQ => {
        const FQ = QQ.querySelector(uw);
        if (FQ && Hw(FQ)) return FQ;
        for (const qQ of null !== (wQ = null === (LQ = QQ.parentElement) || void 0 === LQ ? void 0 : LQ.children) && void 0 !== wQ ? wQ : []) {
          var wQ, LQ;
          if (qQ !== QQ && qQ.matches(uw) && Hw(qQ)) return qQ
        }
        return null
      },
      Yw = (QQ, FQ, wQ, LQ) => Math.max(0, Math.max(QQ, wQ) - Math.min(FQ, LQ)),
      xw = (QQ, FQ, wQ, LQ) => Math.max(0, Math.min(FQ, LQ) - Math.max(QQ, wQ)),
      Aw = (QQ, FQ, wQ) => {
        const LQ = (QQ.left + QQ.right) / 2,
          qQ = (QQ.top + QQ.bottom) / 2,
          oQ = (FQ.left + FQ.right) / 2,
          DQ = (FQ.top + FQ.bottom) / 2;
        if ("Left" === wQ || "Right" === wQ) {
          const kQ = "Right" === wQ ? 1 : -1;
          return {
            forwardGap: "Right" === wQ ? FQ.left - QQ.right : QQ.left - FQ.right,
            centreForward: (oQ - LQ) * kQ,
            sidewaysGap: Yw(QQ.top, QQ.bottom, FQ.top, FQ.bottom),
            sidewaysOverlap: xw(QQ.top, QQ.bottom, FQ.top, FQ.bottom),
            centreSideways: Math.abs(DQ - qQ),
            startSideways: Math.abs(FQ.top - QQ.top),
            fromSidewaysSize: QQ.bottom - QQ.top,
            toSidewaysSize: FQ.bottom - FQ.top,
            toLength: FQ.right - FQ.left
          }
        }
        const kQ = "Down" === wQ ? 1 : -1;
        return {
          forwardGap: "Down" === wQ ? FQ.top - QQ.bottom : QQ.top - FQ.bottom,
          centreForward: (DQ - qQ) * kQ,
          sidewaysGap: Yw(QQ.left, QQ.right, FQ.left, FQ.right),
          sidewaysOverlap: xw(QQ.left, QQ.right, FQ.left, FQ.right),
          centreSideways: Math.abs(oQ - LQ),
          startSideways: Math.abs(FQ.left - QQ.left),
          fromSidewaysSize: QQ.right - QQ.left,
          toSidewaysSize: FQ.right - FQ.left,
          toLength: FQ.bottom - FQ.top
        }
      },
      tw = QQ => QQ.centreForward > .5 && QQ.forwardGap >= -QQ.toLength / 2,
      ew = QQ => {
        const FQ = QQ.sidewaysOverlap > 0 ? 0 : 2 * QQ.fromSidewaysSize,
          wQ = QQ.fromSidewaysSize > 1.5 * QQ.toSidewaysSize ? QQ.startSideways : QQ.centreSideways;
        return Math.max(0, QQ.forwardGap) + 3 * QQ.sidewaysGap + FQ + .1 * wQ
      },
      Mw = (QQ, FQ) => xw(QQ.top, QQ.bottom, FQ.top, FQ.bottom) > 0 || FQ.bottom - FQ.top > FQ.right - FQ.left,
      Gw = (QQ, FQ, wQ, LQ, qQ, oQ) => {
        const DQ = qQ ? Cw(QQ, FQ, wQ, qQ) : new Set,
          kQ = iw(QQ, FQ, wQ, DQ);
        return kQ < 0 && DQ.size > 0 && oQ ? pw(QQ, FQ, wQ, oQ) : LQ && kQ >= 0 ? Sw(QQ, FQ, wQ, LQ, kQ, DQ) : kQ
      },
      pw = (QQ, FQ, wQ, LQ) => {
        const qQ = new Set,
          oQ = iw(QQ, FQ, "Up", qQ) >= 0,
          DQ = iw(QQ, FQ, "Down", qQ) >= 0,
          kQ = new Set;
        return FQ.forEach(((FQ, wQ) => {
          const qQ = FQ.top + FQ.bottom < QQ.top + QQ.bottom;
          LQ[wQ] && !(qQ ? oQ : DQ) || kQ.add(wQ)
        })), iw(QQ, FQ, wQ, kQ)
      },
      Cw = (QQ, FQ, wQ, LQ) => {
        const qQ = new Set;
        return "Left" !== wQ && "Right" !== wQ || FQ.forEach(((FQ, wQ) => {
          LQ[wQ] && xw(QQ.top, QQ.bottom, FQ.top, FQ.bottom) <= 0 && qQ.add(wQ)
        })), qQ
      },
      Sw = (QQ, FQ, wQ, LQ, qQ, oQ) => {
        const DQ = Aw(QQ, FQ[qQ], wQ).forwardGap;
        let kQ = qQ,
          vQ = LQ[qQ],
          mQ = 1 / 0;
        return FQ.forEach(((FQ, uQ) => {
          const HQ = LQ[uQ];
          if (oQ.has(uQ) || HQ < vQ || HQ === vQ && kQ === qQ) return;
          const bQ = Aw(QQ, FQ, wQ);
          if (!tw(bQ) || bQ.forwardGap < 0 || bQ.forwardGap >= DQ) return;
          const YQ = ew(bQ);
          (HQ > vQ || YQ < mQ) && (kQ = uQ, vQ = HQ, mQ = YQ)
        })), kQ
      },
      iw = (QQ, FQ, wQ, LQ) => {
        let qQ = -1,
          oQ = 1 / 0;
        if (FQ.forEach(((FQ, DQ) => {
            const kQ = ((QQ, FQ, wQ) => {
              const LQ = Aw(QQ, FQ, wQ);
              if (!tw(LQ)) return null;
              const qQ = Math.max(0, LQ.forwardGap);
              return LQ.sidewaysOverlap <= 0 && LQ.sidewaysGap > 2 * (qQ + 1) ? null : ew(LQ)
            })(QQ, FQ, wQ);
            null !== kQ && kQ < oQ && !LQ.has(DQ) && (oQ = kQ, qQ = DQ)
          })), qQ < 0) return -1;
        const DQ = FQ[qQ],
          kQ = Aw(QQ, DQ, wQ).forwardGap;
        let vQ = kQ,
          mQ = qQ;
        return FQ.forEach(((FQ, oQ) => {
          if (oQ === qQ || LQ.has(oQ) || !((QQ, FQ, wQ) => {
              const LQ = "Left" === wQ || "Right" === wQ,
                qQ = LQ ? xw(QQ.top, QQ.bottom, FQ.top, FQ.bottom) : xw(QQ.left, QQ.right, FQ.left, FQ.right),
                oQ = LQ ? Math.min(QQ.bottom - QQ.top, FQ.bottom - FQ.top) : Math.min(QQ.right - QQ.left, FQ.right - FQ.left);
              return qQ > 0 && qQ >= oQ / 2
            })(FQ, DQ, wQ)) return;
          const uQ = Aw(QQ, FQ, wQ);
          tw(uQ) && uQ.forwardGap + uQ.toLength <= kQ + 1 && uQ.forwardGap < vQ && (vQ = uQ.forwardGap, mQ = oQ)
        })), mQ
      },
      Ww = (QQ, FQ) => {
        let wQ = -1,
          LQ = 1 / 0;
        return FQ.forEach(((FQ, qQ) => {
          const oQ = Math.max(FQ.left - QQ.x, 0, QQ.x - FQ.right),
            DQ = Math.max(FQ.top - QQ.y, 0, QQ.y - FQ.bottom),
            kQ = Math.hypot(oQ, DQ);
          kQ < LQ && (LQ = kQ, wQ = qQ)
        })), wQ
      },
      Rw = (QQ, FQ) => {
        const wQ = Math.min(QQ.bottom - QQ.top, FQ.bottom - FQ.top) / 2;
        return Math.abs(QQ.top - FQ.top) > wQ ? QQ.top - FQ.top : QQ.left - FQ.left
      },
      Ow = QQ => {
        let FQ = -1;
        for (let wQ = 0; wQ < QQ.length; wQ++)(FQ < 0 || Rw(QQ[wQ], QQ[FQ]) < 0) && (FQ = wQ);
        return FQ
      };
    var sw = wQ(1690),
      rw = wQ(8456),
      Iw = wQ(8462);
    const Uw = QQ => {
        if ("death" !== QQ || "inGame" !== vQ.c.get("gameState") || "off" === (0, bQ.h)().quickChat || null === (0, sw.d)()) return !1;
        const FQ = (0, uQ.g)("chat");
        return FQ !== (0, uQ.g)("menuConfirm") && FQ !== (0, uQ.g)("menuBack")
      },
      Nw = new rw.c;
    var Tw = wQ(4170),
      Kw = wQ(8464);
    const zw = QQ => {
        let FQ = null;
        for (const wQ of QQ.querySelectorAll("[data-pad-tabs]"))(0, BQ.p)(wQ) && (!FQ || Number(wQ.dataset.padTabs) < Number(FQ.dataset.padTabs)) && (FQ = wQ);
        return FQ
      },
      lw = (QQ, FQ, wQ, LQ) => {
        QQ.focusWhenFound((() => {
          const qQ = QQ.pickInitial(FQ);
          if (qQ && !wQ.has(qQ) && (null === LQ || void 0 === LQ || !LQ.contains(qQ))) return qQ;
          const oQ = ((QQ, FQ) => {
              const wQ = FQ => QQ.getEnabledCandidates(FQ).filter((QQ => !QQ.closest("[data-pad-tabs]")));
              for (const LQ of (0, BQ.j)(FQ)) {
                const QQ = wQ(LQ);
                if (QQ.length > 0) return QQ
              }
              return wQ(FQ)
            })(QQ, FQ).filter((QQ => !wQ.has(QQ))),
            DQ = Ow(oQ.map((QQ => QQ.getBoundingClientRect())));
          return DQ >= 0 ? oQ[DQ] : null
        }), 3e3)
      },
      jw = (QQ, FQ, wQ, LQ) => {
        var qQ;
        const oQ = ((QQ, FQ) => {
          if (0 === QQ.length) return null;
          const wQ = QQ.findIndex((QQ => "true" === QQ.dataset.padSelected));
          return wQ < 0 ? FQ > 0 ? QQ[0] : QQ[QQ.length - 1] : QQ[(wQ + FQ + QQ.length) % QQ.length]
        })([...wQ.querySelectorAll("[data-pad-tab]")].filter((QQ => (0, BQ.p)(QQ) && !(0, BQ.t)(QQ))), LQ);
        if (!oQ) return;
        const DQ = null !== (qQ = null === QQ || void 0 === QQ ? void 0 : QQ.getFocused()) && void 0 !== qQ ? qQ : null,
          kQ = !(null === DQ || void 0 === DQ || !DQ.isConnected) && wQ.contains(DQ),
          vQ = QQ && !kQ ? new Set(QQ.getEnabledCandidates(FQ)) : null;
        (0, JQ.d)(oQ), QQ && (vQ ? lw(QQ, FQ, vQ, wQ) : QQ.setFocus(oQ, {
          byUser: !0
        }))
      },
      aw = QQ => {
        var FQ;
        const wQ = TQ(null !== (FQ = OQ(QQ, "x")) && void 0 !== FQ ? FQ : QQ),
          LQ = (0, BQ.f)(QQ).filter((QQ => !(0, BQ.t)(QQ))),
          qQ = LQ.filter((QQ => KQ(QQ.getBoundingClientRect(), wQ)));
        return (qQ.length > 0 ? qQ : LQ).sort(((QQ, FQ) => Rw(QQ.getBoundingClientRect(), FQ.getBoundingClientRect())))
      },
      Xw = (QQ, FQ, wQ) => {
        const LQ = [...FQ.querySelectorAll("[data-pad-row]")].filter(BQ.p),
          qQ = QQ.getFocused(),
          oQ = qQ ? LQ.findIndex((QQ => QQ.contains(qQ))) : -1;
        let DQ = 0,
          kQ = wQ > 0 ? 0 : LQ.length - 1;
        if (oQ >= 0 && qQ) DQ = Math.max(0, aw(LQ[oQ]).indexOf(qQ)), kQ = oQ + wQ;
        else if (qQ) {
          const QQ = qQ.getBoundingClientRect(),
            FQ = LQ.map((FQ => {
              const LQ = FQ.getBoundingClientRect();
              return wQ > 0 ? LQ.top >= QQ.top : LQ.bottom <= QQ.bottom
            }));
          kQ = wQ > 0 ? FQ.indexOf(!0) : FQ.lastIndexOf(!0)
        }
        for (let vQ = kQ; vQ >= 0 && vQ < LQ.length; vQ += wQ) {
          const FQ = aw(LQ[vQ]);
          if (FQ.length > 0) return void QQ.setFocus(FQ[Math.min(DQ, FQ.length - 1)], {
            byUser: !0
          })
        }
      },
      fw = (QQ, FQ, wQ) => {
        var LQ, qQ;
        const oQ = null !== (LQ = null === QQ || void 0 === QQ ? void 0 : QQ.getFocused()) && void 0 !== LQ ? LQ : null,
          DQ = null !== oQ && void 0 !== oQ && oQ.closest("[data-pad-row]") ? "x" : "y",
          kQ = null !== (qQ = oQ ? OQ(oQ, DQ, FQ) : null) && void 0 !== qQ ? qQ : rQ(FQ, DQ);
        if (!kQ) return;
        const vQ = oQ ? (0, JQ.B)(oQ) : null;
        if (NQ(kQ, DQ, wQ * ("y" === DQ ? kQ.clientHeight : kQ.clientWidth) * .85), !QQ || !vQ) return;
        const mQ = TQ(kQ),
          uQ = QQ.getEnabledCandidates(FQ).filter((QQ => kQ.contains(QQ) && KQ(QQ.getBoundingClientRect(), mQ))),
          HQ = Ww(vQ, uQ.map((QQ => QQ.getBoundingClientRect())));
        HQ >= 0 && QQ.setFocus(uQ[HQ], {
          scroll: !1,
          byUser: !0
        })
      };
    let Vw = null;
    const hw = (QQ, FQ) => {
        var wQ, LQ;
        const qQ = FQ.querySelector("[data-pad-friends-column]"),
          oQ = QQ.getFocused();
        if (!qQ || !oQ || !qQ.contains(oQ)) return !1;
        const DQ = QQ.getEnabledCandidates(FQ).filter((QQ => !qQ.contains(QQ))),
          kQ = Ww((0, JQ.B)(oQ), DQ.map((QQ => QQ.getBoundingClientRect()))),
          vQ = null === (wQ = Vw) || void 0 === wQ ? void 0 : wQ.deref();
        return QQ.setFocus(null !== vQ && void 0 !== vQ && vQ.isConnected ? vQ : null !== (LQ = DQ[kQ]) && void 0 !== LQ ? LQ : null, {
          byUser: !0
        }), !0
      },
      Jw = QQ => {
        const FQ = (0, uQ.g)(QQ);
        return (0, xQ.I)(FQ) || mw.t.some((QQ => (0, uQ.g)(QQ) === FQ)) ? null : FQ
      },
      Ew = (QQ, FQ) => {
        const wQ = Jw(FQ);
        return null !== wQ && QQ.wasPressed(wQ)
      },
      nw = function(QQ, FQ, wQ) {
        let LQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const qQ = (QQ => {
            var FQ, wQ;
            return null !== (FQ = null === (wQ = zw(QQ)) || void 0 === wQ ? void 0 : wQ.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== FQ ? FQ : null
          })(FQ),
          oQ = QQ && qQ ? new Set(QQ.getEnabledCandidates(FQ)) : null;
        (0, Dw.b)(), wQ === kw.n.SETTINGS && (0, vw.i)(vQ.c.get("openEverythingMenuName")) ? vQ.c.set({
          openEverythingMenuName: wQ
        }) : (0, vw.s)(new Event("padMenuShortcut"), wQ, LQ), QQ && oQ && qQ && lw(QQ, FQ, oQ, qQ.closest("[data-pad-tabs]"))
      },
      gw = QQ => null !== QQ.closest(".Dropdown-root") || null !== QQ.querySelector(".Dropdown-root.is-open"),
      Pw = QQ => null !== (0, Kw.d)() && "popup" !== QQ.layer.kind && !zw(QQ.root) && !gw(QQ.root),
      Zw = (0, AQ.d)(xQ.Z),
      yw = (0, AQ.d)(xQ.Z),
      Bw = (QQ, FQ, wQ) => {
        if (((QQ, FQ) => {
            const wQ = (0, uQ.g)("chat");
            return Uw(FQ) && QQ.isHeld(wQ) ? "hold" === Nw.update(QQ.wasPressed(wQ), QQ.isHeld(wQ), performance.now(), tQ.b[(0, bQ.h)().tapHoldTime].wheelMs) && (HQ.b.consumeButton(wQ), mQ.l.GA(Iw.l), !0) : (Nw.release(), !1)
          })(FQ, wQ.layer.kind)) return !0;
        const LQ = wQ.root;
        for (const [DQ, kQ] of [
            ["menuTabPrevious", -1],
            ["menuTabNext", 1]
          ])
          if (FQ.wasPressed((0, uQ.g)(DQ))) {
            const FQ = gw(LQ) ? null : zw(LQ);
            if (FQ) jw(QQ, LQ, FQ, kQ);
            else if (Pw(wQ)) {
              var qQ;
              const FQ = QQ ? new Set(QQ.getEnabledCandidates(LQ)) : null;
              null !== (qQ = (0, Kw.d)()) && void 0 !== qQ && qQ(kQ) && QQ && FQ && lw(QQ, LQ, FQ, null)
            } else QQ && Xw(QQ, LQ, kQ);
            return !0
          } for (const [DQ, kQ, vQ] of [
            ["menuPageUp", -1, Zw],
            ["menuPageDown", 1, yw]
          ]) {
          const wQ = (0, uQ.g)(DQ);
          if (FQ.wasPressed(wQ) && vQ.reset(), vQ.update(FQ.isHeld(wQ), performance.now())) return fw(QQ, LQ, kQ), !0
        }
        const oQ = "popup" === wQ.layer.kind;
        return Ew(FQ, "pause") ? (oQ || (0, vw.n)() && "menu" !== wQ.layer.kind || nw(QQ, LQ, (0, vw.n)() ? kw.n.SETTINGS : (0, Tw.c)()), !0) : !!Ew(FQ, "leaderboard") && ("home" === wQ.layer.kind ? (QQ => {
          const FQ = [...QQ.querySelectorAll("[data-pad-notifications]")].find(BQ.p);
          FQ && (0, JQ.d)(FQ)
        })(LQ) : oQ || nw(QQ, LQ, kw.n.LOBBY_LEADERBOARD, "inGame" === vQ.c.get("gameState")), !0)
      },
      dw = (QQ, FQ, wQ) => {
        if (Bw(QQ, FQ, wQ)) return !0;
        const LQ = "home" === wQ.layer.kind;
        if (FQ.wasPressed((0, uQ.g)("menuSecondary"))) {
          const FQ = QQ.getFocused(),
            qQ = FQ ? bw(FQ) : null;
          if (qQ) return (0, JQ.d)(qQ), !0;
          if (LQ) {
            const FQ = wQ.root.querySelector("[data-pad-search] input");
            return FQ && (0, BQ.s)(FQ, wQ.root) ? (QQ.setFocus(FQ, {
              byUser: !0
            }), (0, JQ.d)(FQ)) : vQ.c.set({
              searchOpen: !0
            }), !0
          }
        }
        return !(!LQ || !Ew(FQ, "inventory")) && (((QQ, FQ) => {
          var wQ, LQ;
          const qQ = FQ.querySelector("[data-pad-friends-column]");
          if (!qQ || !(0, BQ.p)(qQ)) return void(0, vw.s)(new Event("padMenuShortcut"), kw.n.SOCIAL);
          if (hw(QQ, FQ)) return;
          const oQ = null !== (wQ = null === (LQ = qQ.querySelector("[data-pad-friends-start]")) || void 0 === LQ ? void 0 : LQ.getBoundingClientRect().top) && void 0 !== wQ ? wQ : -1 / 0,
            DQ = QQ.getEnabledCandidates(qQ),
            kQ = DQ.filter((QQ => QQ.getBoundingClientRect().top >= oQ)),
            vQ = kQ.length > 0 ? kQ : DQ,
            mQ = Ow(vQ.map((QQ => QQ.getBoundingClientRect())));
          QQ.setFocus(mQ >= 0 ? vQ[mQ] : null, {
            byUser: !0
          })
        })(QQ, wQ.root), !0)
      },
      QL = QQ => {
        var FQ, wQ, LQ;
        const qQ = (0, JQ.D)(QQ);
        if (null !== qQ) return qQ;
        const oQ = (null !== (FQ = null !== (wQ = null !== (LQ = QQ.getAttribute("aria-label")) && void 0 !== LQ ? LQ : QQ.getAttribute("title")) && void 0 !== wQ ? wQ : QQ.textContent) && void 0 !== FQ ? FQ : "").replace(/\s+/g, " ").trim();
        return oQ ? `${QQ.tagName}:${oQ.slice(0,100)}` : null
      };
    class FL {
      constructor() {
        this.remembered = new Map, this.history = []
      }
      enter(QQ) {
        const FQ = this.history.indexOf(QQ);
        if (FQ >= 0) {
          for (const QQ of this.history.splice(FQ + 1)) this.remembered.delete(QQ);
          return !0
        }
        return this.remembered.delete(QQ), this.history.push(QQ), this.history.length > 32 && this.forget(this.history[0]), !1
      }
      forget(QQ) {
        this.remembered.delete(QQ);
        const FQ = this.history.indexOf(QQ);
        FQ >= 0 && this.history.splice(FQ, 1)
      }
      remember(QQ, FQ, wQ, LQ) {
        const qQ = QL(FQ),
          oQ = (0, JQ.D)(FQ),
          DQ = null !== oQ && ((QQ, FQ) => {
            let wQ = 0;
            for (const LQ of QQ.querySelectorAll("[data-pad-key], [href]"))
              if ((LQ.getAttribute("data-pad-key") === FQ || LQ.getAttribute("href") === FQ) && (wQ++, wQ > 1)) return !0;
            return !1
          })(wQ, oQ) ? Math.max(0, this.twins(LQ(), oQ).indexOf(FQ)) : 0;
        this.remembered.set(QQ, {
          element: new WeakRef(FQ),
          identity: qQ,
          ordinal: DQ
        })
      }
      has(QQ) {
        return this.remembered.has(QQ)
      }
      recall(QQ, FQ) {
        var wQ, LQ;
        const qQ = this.remembered.get(QQ);
        if (!qQ) return null;
        const oQ = qQ.element.deref();
        if (oQ && FQ.includes(oQ)) return oQ;
        if (null === qQ.identity) return null;
        const DQ = this.twins(FQ, qQ.identity);
        return null !== (wQ = null !== (LQ = DQ[qQ.ordinal]) && void 0 !== LQ ? LQ : DQ[0]) && void 0 !== wQ ? wQ : null
      }
      twins(QQ, FQ) {
        return QQ.filter((QQ => QL(QQ) === FQ))
      }
    }
    var wL = wQ(1295);
    const LL = QQ => {
        const FQ = [];
        let wQ = QQ;
        for (; wQ && wQ !== document.body;) {
          const QQ = getComputedStyle(wQ).zIndex;
          "auto" !== QQ && FQ.push(Number(QQ) || 0), wQ = wQ.parentElement
        }
        return FQ.reverse()
      },
      qL = (QQ, FQ) => {
        const wQ = ((QQ, FQ) => {
          const wQ = Math.max(QQ.length, FQ.length);
          for (let oQ = 0; oQ < wQ; oQ++) {
            var LQ, qQ;
            const wQ = (null !== (LQ = QQ[oQ]) && void 0 !== LQ ? LQ : 0) - (null !== (qQ = FQ[oQ]) && void 0 !== qQ ? qQ : 0);
            if (0 !== wQ) return wQ
          }
          return 0
        })(LL(QQ), LL(FQ));
        if (0 !== wQ) return wQ > 0;
        if (QQ.contains(FQ)) return !1;
        if (FQ.contains(QQ)) return !0;
        const LQ = QQ.compareDocumentPosition(FQ);
        return !!(LQ & Node.DOCUMENT_POSITION_PRECEDING) || !(LQ & Node.DOCUMENT_POSITION_FOLLOWING) && null
      },
      oL = (QQ, FQ) => {
        var wQ;
        return null !== (wQ = qL(QQ.root, FQ.root)) && void 0 !== wQ ? wQ : QQ.order > FQ.order
      },
      DL = (QQ, FQ) => FQ.some((FQ => !FQ.contains(QQ) && !QQ.contains(FQ) && !0 === qL(FQ, QQ)));
    let kL = null,
      vL = null,
      mL = -1;
    const uL = () => {
        var QQ;
        const FQ = null === (QQ = document.timeline) || void 0 === QQ ? void 0 : QQ.currentTime,
          wQ = "number" === typeof FQ ? FQ : null;
        if (null !== wQ && wQ === vL && mL === (0, wL.c)()) return kL;
        let LQ = null;
        const qQ = [],
          oQ = [...document.querySelectorAll("[data-pad-covers]")].filter(BQ.p);
        for (const DQ of (0, wL.e)()) {
          const QQ = DQ.getRoot(),
            FQ = !!QQ && (0, BQ.p)(QQ) && !DL(QQ, oQ);
          if (DQ.shown && !FQ && qQ.push(DQ), DQ.shown = FQ, !QQ || !FQ) continue;
          const wQ = {
            layer: DQ,
            root: QQ,
            order: DQ.order
          };
          LQ && !oL(wQ, LQ) || (LQ = wQ)
        }
        kL = LQ, vL = wQ, mL = (0, wL.c)();
        for (const DQ of qQ)(0, wL.g)(DQ);
        return kL
      },
      HL = () => {
        const QQ = uL();
        return !(null === QQ || void 0 === QQ || !QQ.layer.close) && (QQ.layer.close(), vL = null, !0)
      },
      bL = () => {
        var QQ, FQ;
        return null !== (QQ = null === (FQ = uL()) || void 0 === FQ ? void 0 : FQ.root) && void 0 !== QQ ? QQ : null
      },
      YL = QQ => QQ ? {
        ...QQ,
        root: bL()
      } : null;
    let xL = null,
      AL = null,
      tL = (0, bQ.h)().menuNavigation,
      eL = null;
    const ML = new cQ;
    let GL = null;
    mQ.l.subscribe(bQ.f, (() => {
      const QQ = (0, bQ.h)().menuNavigation;
      QQ !== tL && (tL = QQ, xL = null, AL = null)
    }));
    const pL = () => {
        var QQ;
        return null !== (QQ = xL) && void 0 !== QQ ? QQ : (0, bQ.h)().menuNavigation
      },
      cL = QQ => {
        if (WL()) {
          if (eL = YL(QQ), "hybrid" === pL()) return ML.lock(), void(AL = AL ? null : bL());
          xL = "focus" === pL() ? "cursor" : "focus"
        }
      },
      CL = () => {
        const QQ = eL;
        return eL = null, QQ
      };
    let SL = {
      root: null,
      firstSeenMs: -1 / 0,
      atMs: -1 / 0,
      has: !1
    };
    const iL = function(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const wQ = SL.root === QQ,
          LQ = wQ ? SL.firstSeenMs : FQ,
          qQ = SL.has || FQ - LQ > 1e3;
        return (!wQ || !qQ || FQ - SL.atMs > 250) && (SL = {
          root: QQ,
          firstSeenMs: LQ,
          atMs: FQ,
          has: (0, BQ.m)(QQ)
        }), SL.has
      },
      WL = () => {
        const QQ = bL();
        return null !== QQ && iL(QQ)
      },
      RL = () => {
        const QQ = uL();
        return AL && (null === QQ || void 0 === QQ ? void 0 : QQ.root) !== AL && (AL = null), (QQ => {
          let {
            mode: FQ,
            hasLayer: wQ,
            hasCandidates: LQ,
            hybridCursorEngaged: qQ
          } = QQ;
          return wQ ? "cursor" !== FQ && LQ() ? "hybrid" === FQ && qQ ? "cursor" : "focus" : "cursor" : null
        })({
          mode: pL(),
          hasLayer: null !== QQ,
          hasCandidates: () => null !== QQ && iL(QQ.root),
          hybridCursorEngaged: null !== AL
        })
      },
      OL = () => "hybrid" === pL() && WL(),
      sL = "pad-focused";
    var rL = wQ(4395),
      IL = wQ(4875);
    const UL = "[data-pad-destructive]",
      NL = `${UL}, [data-pad-back]`,
      TL = QQ => ({
        rect: QQ.getBoundingClientRect(),
        destructive: QQ.matches(UL),
        closes: null !== QQ.closest("[data-pad-close-button]"),
        unavailable: QQ.matches("[data-pad-unavailable]")
      }),
      KL = QQ => {
        let {
          destructive: FQ,
          closes: wQ,
          unavailable: LQ
        } = QQ;
        return FQ ? wQ ? 2 : 3 : LQ ? 1 : 0
      },
      zL = QQ => {
        let FQ = -1;
        for (let wQ = 0; wQ < QQ.length; wQ++) {
          if (FQ < 0) {
            FQ = wQ;
            continue
          }
          const LQ = QQ[wQ],
            qQ = QQ[FQ];
          KL(LQ) === KL(qQ) ? Rw(LQ.rect, qQ.rect) < 0 && (FQ = wQ) : KL(LQ) < KL(qQ) && (FQ = wQ)
        }
        return FQ
      },
      lL = "[data-pad-tabs]",
      jL = "[data-pad-tab]",
      aL = (QQ, FQ) => {
        const wQ = QQ.querySelector(`${jL}[data-pad-selected='true']`);
        return wQ && FQ.includes(wQ) ? wQ : null
      },
      XL = (QQ, FQ) => {
        let wQ = FQ;
        for (let LQ = FQ.parentElement; LQ && !LQ.contains(QQ); LQ = LQ.parentElement) wQ = LQ;
        return wQ
      };
    class fL {
      constructor() {
        this.contentReturn = null
      }
      redirect(QQ, FQ, wQ, LQ) {
        var qQ, oQ;
        const DQ = QQ.closest(lL),
          kQ = FQ.closest(lL);
        var vQ;
        if (kQ && kQ !== DQ) return DQ || (this.contentReturn = new WeakRef(QQ)), null !== (vQ = aL(kQ, wQ)) && void 0 !== vQ ? vQ : FQ;
        if (!DQ || kQ) return FQ;
        const mQ = XL(QQ, FQ),
          uQ = null === (qQ = this.contentReturn) || void 0 === qQ ? void 0 : qQ.deref();
        return uQ && mQ.contains(uQ) && wQ.includes(uQ) ? uQ : null !== (oQ = this.pickRegionStart(mQ, OQ(FQ, "y", LQ), wQ)) && void 0 !== oQ ? oQ : FQ
      }
      findTabContent(QQ, FQ, wQ) {
        const LQ = QQ.closest(lL);
        if (!LQ || !QQ.matches(jL) || LQ.contains(FQ)) return null;
        const qQ = FQ.closest(lL);
        if (qQ && Number(qQ.dataset.padTabs) <= Number(LQ.dataset.padTabs)) return null;
        const oQ = XL(QQ, FQ);
        return wQ.some((QQ => oQ.contains(QQ) && !QQ.closest(NL))) || !FQ.closest(NL) ? oQ : null
      }
      pickContentStart(QQ, FQ, wQ) {
        return this.contentReturn = null, this.pickRegionStart(QQ, OQ(QQ, "y", wQ), FQ)
      }
      pickReplacedContentStart(QQ, FQ, wQ, LQ) {
        if (!FQ.contains(QQ)) return null;
        const qQ = XL(FQ, QQ),
          oQ = wQ.filter((QQ => FQ.contains(QQ) && !qQ.contains(QQ) && !QQ.closest(NL)));
        return 0 === oQ.length ? null : (this.contentReturn = null, this.pickRegionStart(FQ, OQ(oQ[0], "y", LQ), oQ))
      }
      backToStrip(QQ, FQ, wQ) {
        if (QQ.closest(lL)) return null;
        const LQ = zw(wQ);
        for (const qQ of wQ.querySelectorAll(lL)) {
          if (Number(qQ.dataset.padTabs) <= 1 || qQ === LQ) continue;
          const oQ = aL(qQ, FQ),
            DQ = oQ ? XL(QQ, qQ).parentElement : null;
          if (oQ && DQ && DQ !== wQ && wQ.contains(DQ)) return this.contentReturn = new WeakRef(QQ), oQ
        }
        return null
      }
      pickRegionStart(QQ, FQ, wQ) {
        const LQ = TQ(FQ),
          qQ = QQ => {
            const FQ = wQ.filter((FQ => QQ.contains(FQ) && !FQ.closest(lL) && KQ(FQ.getBoundingClientRect(), LQ))),
              qQ = zL(FQ.map(TL));
            return qQ >= 0 ? FQ[qQ] : null
          };
        for (const oQ of (0, BQ.j)(QQ)) {
          const QQ = qQ(oQ);
          if (QQ) return QQ
        }
        for (const oQ of QQ.querySelectorAll(lL)) {
          const QQ = aL(oQ, wQ);
          if (QQ) return QQ
        }
        return qQ(QQ)
      }
    }
    const VL = "[data-pad-default-focus], .Dropdown-option.is-selected",
      hL = ".Dropdown-root.is-open > .Dropdown-menu",
      JL = "[data-pad-no-step-in]",
      EL = "[data-pad-tabs]",
      nL = "[data-pad-press-area]",
      gL = QQ => {
        let FQ = QQ;
        for (let wQ = 0; FQ && wQ <= 4; wQ++, FQ = FQ.parentElement) {
          const wQ = FQ.querySelector(".CircleInfo");
          if (wQ) return FQ === QQ || FQ.querySelectorAll(BQ.c).length <= 1 ? wQ : null;
          if (FQ !== QQ && FQ.querySelectorAll(BQ.c).length > 1) return null
        }
        return null
      },
      PL = (QQ, FQ, wQ) => {
        (0, JQ.p)(QQ, FQ, wQ);
        const LQ = null !== QQ && void 0 !== QQ && QQ.isConnected ? gL(QQ) : null,
          qQ = gL(FQ);
        LQ !== qQ && (0, JQ.p)(LQ, qQ, qQ ? (0, JQ.B)(qQ) : wQ, {
          leaveBelow: QQ,
          enterBelow: FQ
        })
      },
      ZL = QQ => QQ.getBoundingClientRect(),
      yL = (QQ, FQ, wQ) => {
        const LQ = new Set(wQ);
        for (let qQ = QQ; qQ; qQ = qQ === FQ ? null : qQ.parentElement)
          if (LQ.has(qQ)) return qQ;
        return null
      },
      BL = (QQ, FQ) => !QQ.root || QQ.root === FQ || FQ.matches(hL) && QQ.root.contains(FQ);
    const dL = new class {
      constructor() {
        this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new FL, this.tabStripNav = new fL, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepeatKey = null, this.confirmRepeated = !1, this.confirmRepeat = (0, AQ.d)(xQ.u), this.dpadRepeats = new Map(xQ.D.map((QQ => [QQ, (0, AQ.d)(xQ.E)]))), this.stickRepeat = new xQ.d((0, AQ.d)(xQ.db)), this.lastRefocusCheckMs = -1 / 0, this.enteredLayerAtMs = 0, this.lastFocusedCentre = null, this.lastActivatedKey = null, this.lastActivated = null, this.lastActivatedAtMs = -1 / 0, this.pendingFocus = null, this.tabOpenWait = null, this.retryMove = null, this.scrollRemainder = {
          x: 0,
          y: 0
        }, this.wasActive = !1, this.layerKind = null, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.listeners = new Set, this.dropdownLayers = new WeakMap, this.dropdownLayerCounter = 0
      }
      install() {
        const QQ = HQ.b.register({
            name: "focus",
            isActive: () => (0, YQ.j)() && "focus" === RL(),
            onFrame: QQ => {
              this.onFrame(QQ)
            },
            onDeactivate: () => {
              this.deactivate()
            },
            wakePressActs: QQ => (0, HQ.e)(QQ) || QQ === (0, uQ.g)("menuConfirm") && (0, JQ.I)((0, YQ.c)())
          }),
          FQ = (0, wL.h)((QQ => {
            const FQ = (0, wL.l)(QQ);
            null === QQ.memoryKey && this.memory.forget(FQ), FQ === this.layerKey && (this.layerKey = null)
          }));
        let wQ = -1 / 0;
        const LQ = DQ.f.onFrame((QQ => {
            (0, YQ.j)() || QQ.timestampMs - wQ < 100 || (wQ = QQ.timestampMs, uL())
          })),
          qQ = QQ => {
            QQ.isTrusted && QQ.target instanceof Element && DQ.f.getActivePad() && this.noteChosenStop(QQ.target)
          };
        return document.addEventListener("click", qQ, !0), () => {
          QQ(), FQ(), LQ(), document.removeEventListener("click", qQ, !0), this.deactivate()
        }
      }
      noteChosenStop(QQ) {
        var FQ, wQ;
        const LQ = uL();
        if (!LQ || !LQ.root.contains(QQ)) return;
        const qQ = null !== (FQ = null === (wQ = QQ.closest(".Dropdown-root")) || void 0 === wQ ? void 0 : wQ.querySelector(".Dropdown-control")) && void 0 !== FQ ? FQ : QQ,
          oQ = yL(qQ, LQ.root, this.getEnabledCandidates(LQ.root));
        if (!oQ) return;
        const DQ = (0, wL.l)(LQ.layer);
        DQ === this.layerKey && LQ.root === this.layerRoot || this.beginLayer(LQ, DQ), this.wasActive ? this.setFocus(oQ, {
          scroll: !1,
          byUser: !0
        }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = oQ, this.lastFocusedCentre = (0, JQ.B)(oQ), this.rememberFocus(oQ), this.notify())
      }
      getFocused() {
        return this.focused
      }
      isActive() {
        return this.wasActive
      }
      onChange(QQ) {
        return this.listeners.add(QQ), () => {
          this.listeners.delete(QQ)
        }
      }
      notify() {
        for (const QQ of this.listeners) QQ()
      }
      deactivate() {
        var QQ;
        if (this.wasActive) {
          this.wasActive = !1, this.layerKind = null, this.confirmPressedOn = null, this.retryMove = null, this.pendingFocus = null;
          for (const QQ of this.dpadRepeats.values()) QQ.reset();
          this.stickRepeat.reset(), null !== (QQ = this.focused) && void 0 !== QQ && QQ.isConnected && PL(this.focused, null, (0, JQ.B)(this.focused)), this.notify()
        }
      }
      setFocus(QQ) {
        var FQ;
        let {
          scroll: wQ = !0,
          byUser: LQ = !1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (LQ && (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1), QQ === this.focused) return;
        const qQ = null !== (FQ = this.focused) && void 0 !== FQ && FQ.isConnected ? this.focused : null;
        if (this.focused = QQ, QQ) {
          wQ && (QQ.classList.add(sL), QQ.scrollIntoView({
            block: "nearest",
            inline: "nearest",
            behavior: "instant"
          })), LQ && ((QQ, FQ) => {
            const wQ = FQ.closest("[data-pad-friends-column]");
            wQ && QQ && !wQ.contains(QQ) && (Vw = new WeakRef(QQ))
          })(qQ, QQ);
          const FQ = (0, JQ.B)(QQ);
          this.lastFocusedCentre = FQ, this.movedInLayer && this.rememberFocus(QQ), PL(qQ, QQ, FQ), "false" === QQ.getAttribute("aria-pressed") && QQ.closest("[data-pad-select-on-focus]") && (0, JQ.d)(QQ)
        } else qQ && PL(qQ, null, (0, JQ.B)(qQ));
        this.notify()
      }
      rememberFocus(QQ) {
        const FQ = this.layerRoot;
        this.layerKey && FQ && this.memory.remember(this.layerKey, QQ, FQ, (() => this.getEnabledCandidates(FQ)))
      }
      noteCursorActivation(QQ) {
        const FQ = uL();
        if (!FQ || !FQ.root.contains(QQ)) return;
        const wQ = this.getEnabledCandidates(FQ.root),
          LQ = new Set(wQ);
        let qQ = QQ;
        for (; qQ && !LQ.has(qQ);) qQ = qQ === FQ.root ? null : qQ.parentElement;
        if (!(qQ instanceof HTMLElement)) return;
        const oQ = (0, wL.l)(FQ.layer);
        this.memory.enter(oQ), this.memory.remember(oQ, qQ, FQ.root, (() => wQ))
      }
      notePageEnteredByCursor(QQ) {
        return this.memory.enter(QQ)
      }
      recallStop(QQ, FQ) {
        return this.findRemembered(QQ, FQ)
      }
      focusWhenFound(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.pendingFocus = {
          find: QQ,
          untilMs: performance.now() + FQ,
          holdWhile: wQ
        }
      }
      getEnabledCandidates(QQ) {
        return (0, BQ.f)(QQ).filter((QQ => !(0, BQ.t)(QQ)))
      }
      onFrame(QQ) {
        var FQ;
        const wQ = uL();
        if (!wQ) return;
        const LQ = null !== (FQ = this.findOpenDropdown(wQ)) && void 0 !== FQ ? FQ : wQ,
          qQ = performance.now(),
          oQ = (0, wL.l)(LQ.layer);
        if (oQ !== this.layerKey || LQ.root !== this.layerRoot) {
          const FQ = this.focused;
          if (null !== this.layerKey && LQ.root === this.layerRoot && FQ && (0, BQ.s)(FQ, LQ.root)) this.continueLayer(oQ, FQ), this.wasActive || this.resume(LQ.root, qQ);
          else {
            const FQ = !this.wasActive && !QQ.wokeDevice,
              DQ = "death" === this.layerKind || FQ,
              kQ = this.enterLayer(LQ, oQ);
            "popup" !== LQ.layer.kind || LQ !== wQ || kQ ? "menu" === LQ.layer.kind && DQ && "inGame" === vQ.c.get("gameState") && !(0, Dw.c)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = qQ + rL.b) : (this.pressGuardExtends = FQ, this.pressGuardUntilMs = qQ + (FQ ? rL.b : DQ ? 500 : 250))
          }
        } else this.wasActive || this.resume(LQ.root, qQ);
        if (this.layerKind = LQ.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), QQ.wokeDevice && this.focusPointedStop(LQ.root), this.validateFocus(LQ, qQ), qQ < this.pressGuardUntilMs && this.pressGuardExtends && (QQ.wasPressed((0, uQ.g)("menuConfirm")) || QQ.wasPressed((0, uQ.g)("menuBack"))) && (this.pressGuardUntilMs = qQ + rL.b), qQ >= this.pressGuardUntilMs && this.handleButtons(QQ, LQ)) return;
        const DQ = "hybrid" === pL();
        if (DQ && (QQ => {
            const FQ = bL();
            return FQ !== GL && (GL = FQ, ML.lock()), ML.update(QQ, (0, bQ.h)().moveDeadzone)
          })(QQ.leftStick)) return kQ = this.getHandoff(), eL = YL(kQ), AL = bL(), void HQ.b.handOffHeldInput();
        var kQ;
        this.handleDirections(QQ, LQ, qQ, !DQ), this.handleScroll(QQ, LQ)
      }
      findOpenDropdown(QQ) {
        const FQ = QQ.root.querySelector(hL);
        if (!FQ || !(0, BQ.p)(FQ)) return null;
        let wQ = this.dropdownLayers.get(FQ);
        return wQ || (this.dropdownLayerCounter++, wQ = {
          id: `dropdown-${this.dropdownLayerCounter}`,
          kind: QQ.layer.kind,
          getRoot: () => FQ,
          close: () => {
            (0, JQ.k)(FQ)
          },
          memoryKey: null
        }, this.dropdownLayers.set(FQ, wQ)), {
          layer: wQ,
          root: FQ,
          order: QQ.order
        }
      }
      focusPointedStop(QQ) {
        const FQ = (0, YQ.c)(),
          wQ = FQ ? document.elementFromPoint(FQ.x, FQ.y) : null;
        if (!wQ || !QQ.contains(wQ)) return;
        const LQ = yL(wQ, QQ, this.getEnabledCandidates(QQ));
        LQ && this.setFocus(LQ, {
          scroll: !1,
          byUser: !0
        })
      }
      enterLayer(QQ, FQ) {
        const wQ = this.beginLayer(QQ, FQ),
          LQ = CL();
        return LQ && BL(LQ, QQ.root) ? (this.takeOver(QQ.root, LQ, this.enteredLayerAtMs), wQ) : (this.restoreLayerFocus(QQ.root, wQ), wQ)
      }
      beginLayer(QQ, FQ) {
        return this.layerKey = FQ, this.layerRoot = QQ.root, this.lastActivatedKey = null, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoreOnFocusLoss = !1, this.retryMove = null, this.pendingFocus = null, this.confirmPressedOn = null, this.lastRefocusCheckMs = -1 / 0, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.enteredLayerAtMs = performance.now(), this.lastFocusedCentre = null, this.memory.enter(FQ)
      }
      restoreLayerFocus(QQ, FQ) {
        const wQ = FQ && this.layerKey ? this.findRemembered(QQ, this.layerKey) : null;
        this.restoredFromMemory = null !== wQ, this.setFocus(null !== wQ && void 0 !== wQ ? wQ : this.pickInitial(QQ, {
          waitForContent: !0
        }))
      }
      continueLayer(QQ, FQ) {
        this.layerKey = QQ;
        const wQ = this.memory.enter(QQ);
        this.restoreOnFocusLoss = wQ, this.movedInLayer && !wQ && this.rememberFocus(FQ)
      }
      resume(QQ, FQ) {
        var wQ;
        const LQ = CL();
        LQ && BL(LQ, QQ) ? this.takeOver(QQ, LQ, FQ) : null !== (wQ = this.focused) && void 0 !== wQ && wQ.isConnected && PL(null, this.focused, (0, JQ.B)(this.focused))
      }
      pickPreferred(QQ) {
        var FQ;
        return null !== (FQ = this.layerKey ? this.findRemembered(QQ, this.layerKey) : null) && void 0 !== FQ ? FQ : this.pickInitial(QQ, {
          waitForContent: !0
        })
      }
      findRemembered(QQ, FQ) {
        return this.memory.has(FQ) ? this.memory.recall(FQ, this.getEnabledCandidates(QQ)) : null
      }
      getHandoff() {
        var QQ, FQ, wQ;
        const LQ = null !== (QQ = this.focused) && void 0 !== QQ && QQ.isConnected ? this.focused : null,
          qQ = null !== (FQ = this.layerRoot) && void 0 !== FQ && FQ.isConnected ? this.layerRoot : null;
        return {
          point: LQ ? (0, JQ.B)(LQ) : null !== (wQ = this.lastFocusedCentre) && void 0 !== wQ ? wQ : this.getLayerStartPoint(qQ),
          element: LQ,
          direction: null
        }
      }
      getLayerStartPoint(QQ) {
        if (!QQ) return {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2
        };
        const FQ = this.pickInitial(QQ, {
          includeDisabled: !0
        });
        return (0, JQ.B)(null !== FQ && void 0 !== FQ ? FQ : QQ)
      }
      takeOver(QQ, FQ, wQ) {
        const {
          element: LQ,
          direction: qQ,
          point: oQ
        } = FQ, DQ = LQ instanceof HTMLElement && (0, BQ.s)(LQ, QQ) ? LQ : null;
        if (!qQ) {
          const FQ = this.focused;
          return DQ ? this.setFocus(DQ, {
            scroll: !1,
            byUser: !0
          }) : this.focusNearest(QQ, oQ), void(this.focused && this.focused === FQ && this.focused.isConnected && PL(null, this.focused, (0, JQ.B)(this.focused)))
        }
        if (this.dpadRepeats.get(qQ).update(!0, wQ), DQ) return this.setFocus(DQ, {
          scroll: !1,
          byUser: !0
        }), void this.move(QQ, qQ, wQ, !0);
        const kQ = this.getEnabledCandidates(QQ),
          vQ = kQ.map(ZL),
          mQ = Gw(new DOMRect(oQ.x, oQ.y, 0, 0), vQ, qQ),
          uQ = mQ >= 0 ? mQ : Ww(oQ, vQ);
        this.setFocus(uQ >= 0 ? kQ[uQ] : this.pickInitial(QQ), {
          byUser: !0
        })
      }
      focusNearest(QQ, FQ) {
        const wQ = this.getEnabledCandidates(QQ),
          LQ = Ww(FQ, wQ.map(ZL));
        this.setFocus(LQ >= 0 ? wQ[LQ] : this.pickInitial(QQ), {
          byUser: !0
        })
      }
      pickDefault(QQ) {
        let {
          includeDisabled: FQ = !1,
          exclude: wQ = null
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const LQ = [...QQ.querySelectorAll(VL)].filter((LQ => (null === wQ || void 0 === wQ || !wQ.has(LQ)) && (FQ ? (0, BQ.w)(LQ, QQ) : (0, BQ.s)(LQ, QQ)))),
          qQ = zL(LQ.map(TL));
        return qQ >= 0 ? LQ[qQ] : null
      }
      pickNewAreaStart(QQ, FQ) {
        const wQ = [...QQ.querySelectorAll(nL)].filter(BQ.p);
        for (const LQ of [...(0, BQ.j)(QQ), ...wQ]) {
          if (FQ.has(LQ)) continue;
          const QQ = this.getEnabledCandidates(LQ),
            wQ = zL(QQ.map(TL));
          if (wQ >= 0) return QQ[wQ]
        }
        return null
      }
      pickInitial(QQ) {
        let {
          includeDisabled: FQ = !1,
          waitForContent: wQ = !1,
          enteredAtMs: LQ = this.enteredLayerAtMs
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const qQ = this.pickDefault(QQ, {
          includeDisabled: FQ
        });
        if (qQ) return qQ;
        const oQ = QQ => FQ ? (0, BQ.f)(QQ) : this.getEnabledCandidates(QQ);
        let DQ = [];
        for (const bQ of (0, BQ.j)(QQ))
          if (DQ = oQ(bQ), DQ.length > 0) break;
        if (0 === DQ.length) {
          if (wQ && performance.now() - LQ < 1e4 && (0, BQ.o)(QQ)) return null;
          DQ = oQ(QQ)
        }
        const kQ = DQ.map(ZL),
          vQ = TQ(null),
          mQ = DQ.filter(((QQ, FQ) => KQ(kQ[FQ], vQ))),
          uQ = mQ.length > 0 ? mQ : DQ,
          HQ = zL(uQ.map(TL));
        return HQ >= 0 ? uQ[HQ] : null
      }
      validateFocus(QQ, FQ) {
        if (this.pendingFocus) {
          var wQ, LQ;
          const qQ = this.pendingFocus.find();
          if (qQ && (0, BQ.s)(qQ, QQ.root)) return this.pendingFocus = null, void this.setFocus(qQ, {
            byUser: !0
          });
          FQ > this.pendingFocus.untilMs && (null === (wQ = (LQ = this.pendingFocus).holdWhile) || void 0 === wQ || !wQ.call(LQ)) && (this.pendingFocus = null)
        }
        const qQ = this.focused,
          oQ = !!qQ && (0, BQ.s)(qQ, QQ.root);
        if (!(!oQ && qQ && qQ === this.lastActivated && FQ - this.lastActivatedAtMs < 5e3 && QQ.root.contains(qQ) && (0, BQ.p)(qQ) && (0, BQ.t)(qQ))) {
          if (!oQ && this.restoreOnFocusLoss && this.layerKey) return this.restoreOnFocusLoss = !1, this.movedInLayer = !1, this.scrolledInLayer = !1, this.enteredLayerAtMs = FQ, void this.restoreLayerFocus(QQ.root, !0);
          if ((!oQ || !this.movedInLayer && !this.scrolledInLayer) && !(FQ - this.lastRefocusCheckMs < (oQ ? 200 : 50)))
            if (this.lastRefocusCheckMs = FQ, oQ) {
              const wQ = FQ - this.enteredLayerAtMs < 15e3 ? this.pickPreferred(QQ.root) : null,
                LQ = null !== wQ && void 0 !== wQ ? wQ : this.restoredFromMemory ? null : this.pickDefault(QQ.root);
              LQ && LQ !== qQ && this.setFocus(LQ)
            } else {
              if (this.lastFocusedCentre && this.movedInLayer) {
                const FQ = this.pendingFocus;
                return this.focusNearest(QQ.root, this.lastFocusedCentre), void(this.pendingFocus = FQ)
              }
              this.setFocus(this.pickPreferred(QQ.root))
            }
        }
      }
      handleButtons(QQ, FQ) {
        if (QQ.wasPressed((0, uQ.g)("menuToggleCursor"))) return cL(this.getHandoff()), !0;
        if (QQ.wasPressed((0, uQ.g)("menuBack"))) {
          const QQ = (0, JQ.k)(FQ.root);
          return QQ ? this.setFocus(QQ, {
            byUser: !0
          }) : hw(this, FQ.root) || ((0, JQ.f)(FQ.root) ? this.returnToOpener(FQ.root) : this.backToStrip(FQ.root) || HL()), !0
        }
        const wQ = (0, uQ.g)("menuConfirm");
        var LQ, qQ;
        QQ.wasPressed(wQ) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (LQ = null === (qQ = this.focused) || void 0 === qQ ? void 0 : qQ.getAttribute("data-pad-repeat")) && void 0 !== LQ ? LQ : null, this.confirmRepeated = QQ.wokeDevice, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now()));
        if (QQ.wasReleased(wQ)) {
          const QQ = this.confirmPressedOn;
          if (this.confirmPressedOn = null, QQ && !this.confirmRepeated && QQ === this.focused && QQ.isConnected && !(0, BQ.t)(QQ)) {
            const wQ = QQ.matches("[data-pad-tab]") ? QQ.closest(EL) : null;
            wQ ? this.enterTab(QQ, wQ, FQ.root, performance.now()) : this.activate(QQ)
          }
          return !0
        }
        return this.repeatConfirm(QQ, wQ), dw(this, QQ, FQ)
      }
      repeatConfirm(QQ, FQ) {
        const wQ = this.confirmPressedOn;
        wQ && null !== this.confirmRepeatKey && QQ.isHeld(FQ) && (wQ === this.focused && wQ.isConnected && !(0, BQ.t)(wQ) && wQ.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? wQ.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.confirmRepeated = !0, this.activate(wQ)) : this.confirmRepeatKey = null)
      }
      backToStrip(QQ) {
        const FQ = this.focused;
        if (!(0, bQ.h)().menuBackToCategories) return !1;
        const wQ = null !== FQ && void 0 !== FQ && FQ.isConnected ? this.tabStripNav.backToStrip(FQ, this.getEnabledCandidates(QQ), QQ) : null;
        return wQ && this.setFocus(wQ, {
          byUser: !0
        }), null !== wQ
      }
      returnToOpener(QQ) {
        const FQ = this.lastActivatedKey;
        FQ && (this.lastActivatedKey = null, this.focusWhenFound((() => {
          var wQ;
          return null !== (wQ = this.getEnabledCandidates(QQ).find((QQ => (0, JQ.D)(QQ) === FQ))) && void 0 !== wQ ? wQ : null
        })))
      }
      activate(QQ) {
        var FQ;
        if ((0, IL.b)(QQ) || (0, JQ.F)(QQ)) return;
        this.lastActivatedKey = null !== (FQ = (0, JQ.D)(QQ)) && void 0 !== FQ ? FQ : this.lastActivatedKey, this.lastActivated = QQ, this.lastActivatedAtMs = performance.now(), this.rememberFocus(QQ);
        const wQ = this.layerRoot;
        if (wQ) {
          const FQ = new Set(wQ.querySelectorAll(VL)),
            LQ = new Set(wQ.querySelectorAll(`[data-pad-initial-area], ${nL}`)),
            qQ = this.lastActivatedAtMs;
          this.focusWhenFound((() => {
            var qQ;
            return (0, BQ.s)(QQ, wQ) ? null : null !== (qQ = this.pickDefault(wQ, {
              exclude: FQ
            })) && void 0 !== qQ ? qQ : this.pickNewAreaStart(wQ, LQ)
          }), 5e3, (() => QQ.isConnected && (0, BQ.t)(QQ) && performance.now() - qQ < 6e4))
        }(0, JQ.d)(QQ), (0, JQ.g)(QQ)
      }
      handleDirections(QQ, FQ, wQ, LQ) {
        const qQ = Uw(FQ.layer.kind) ? (0, uQ.g)("chat") : null;
        for (const kQ of xQ.D) {
          this.dpadRepeats.get(kQ).update(QQ.isHeld(kQ), wQ) && (kQ !== qQ || QQ.wasPressed(kQ)) && this.move(FQ.root, kQ, wQ, !0)
        }
        const oQ = LQ ? (0, xQ.j)(QQ.leftStick, (0, bQ.h)().moveDeadzone) : {
            x: 0,
            y: 0
          },
          DQ = this.stickRepeat.update((0, xQ.gb)(oQ), wQ);
        if (DQ && this.move(FQ.root, DQ, wQ, !0), this.retryMove && wQ >= this.retryMove.atMs) {
          const {
            direction: QQ
          } = this.retryMove;
          this.retryMove = null, this.move(FQ.root, QQ, wQ, !1)
        }
      }
      move(QQ, FQ, wQ, LQ) {
        var qQ;
        let oQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.pendingFocus && this.pendingFocus === (null === (qQ = this.tabOpenWait) || void 0 === qQ ? void 0 : qQ.wait) && FQ === this.tabOpenWait.direction) return;
        this.pendingFocus = null;
        const DQ = this.focused;
        if (!DQ || !DQ.isConnected) {
          const FQ = this.pickInitial(QQ);
          return void(FQ && this.setFocus(FQ, {
            byUser: !0
          }))
        }
        const kQ = "Left" === FQ || "Right" === FQ,
          vQ = kQ ? (0, IL.b)(DQ) : null;
        if (vQ) return void vQ.adjust("Left" === FQ ? -1 : 1);
        const mQ = QQ => null !== QQ.closest("[data-pad-friends-column]"),
          uQ = mQ(DQ),
          HQ = ZL(DQ),
          bQ = kQ || DQ.closest(EL) ? null : (QQ => {
            const FQ = new Map;
            return wQ => {
              const LQ = wQ.closest(EL);
              if (!LQ) return !1;
              let qQ = FQ.get(LQ);
              if (void 0 === qQ) {
                const wQ = ZL(LQ);
                qQ = Mw(QQ, wQ) && (wQ.right <= QQ.left || wQ.left >= QQ.right), FQ.set(LQ, qQ)
              }
              return qQ
            }
          })(HQ),
          YQ = null !== DQ.closest(JL),
          xQ = this.getEnabledCandidates(QQ).filter((QQ => QQ !== DQ && (kQ || mQ(QQ) === uQ) && !(null !== bQ && void 0 !== bQ && bQ(QQ)) && (YQ || !QQ.closest(JL)))),
          AQ = xQ.map(ZL),
          tQ = OQ(DQ, "y", QQ),
          eQ = TQ(tQ);
        if (!oQ && !KQ(HQ, eQ)) {
          const QQ = xQ.filter(((QQ, FQ) => KQ(AQ[FQ], eQ)));
          if (QQ.length > 0) {
            const FQ = {
              x: eQ.left + eQ.width / 2,
              y: eQ.top + eQ.height / 2
            };
            return void this.setFocus(QQ[Ww(FQ, QQ.map(ZL))], {
              byUser: !0
            })
          }
        }
        const MQ = kQ ? ((QQ, FQ, wQ) => {
            const LQ = ZL(QQ),
              qQ = QQ.closest(EL),
              oQ = qQ ? ZL(qQ) : null;
            return FQ.map(((FQ, DQ) => {
              const kQ = wQ[DQ];
              if (kQ.bottom > LQ.top && kQ.top < LQ.bottom) return !0;
              const vQ = FQ.closest(EL);
              if (qQ && oQ) return vQ !== qQ && (null !== vQ || kQ.bottom <= oQ.top || kQ.top >= oQ.bottom);
              if (vQ) return !Mw(LQ, ZL(vQ));
              let mQ = QQ;
              for (let wQ = QQ.parentElement; wQ && !wQ.contains(FQ); wQ = wQ.parentElement) mQ = wQ;
              const uQ = ZL(mQ);
              return kQ.right > uQ.left && kQ.left < uQ.right
            }))
          })(DQ, xQ, AQ) : void 0,
          GQ = kQ && !DQ.closest(EL) ? (QQ => QQ.map((QQ => !QQ.closest(NL))))(xQ) : void 0,
          pQ = ((QQ, FQ) => {
            const wQ = [];
            for (let qQ = QQ; qQ; qQ = qQ.parentElement) wQ.push(qQ);
            const LQ = new Map;
            return wQ.forEach(((QQ, FQ) => {
              LQ.set(QQ, wQ.length - 1 - FQ)
            })), FQ.map((QQ => {
              for (let FQ = QQ; FQ; FQ = FQ.parentElement) {
                const QQ = LQ.get(FQ);
                if (void 0 !== QQ) return QQ
              }
              return -1
            }))
          })(DQ, xQ),
          cQ = kQ ? "x" : "y",
          CQ = OQ(DQ, cQ, QQ);
        let SQ = Gw(HQ, AQ, FQ, pQ, MQ, GQ);
        if (SQ >= 0 && CQ && !CQ.contains(xQ[SQ])) {
          const QQ = xQ.flatMap(((QQ, FQ) => CQ.contains(QQ) ? [FQ] : [])),
            wQ = FQ => FQ && QQ.map((QQ => FQ[QQ])),
            LQ = Gw(HQ, QQ.map((QQ => AQ[QQ])), FQ, QQ.map((QQ => pQ[QQ])), wQ(MQ), wQ(GQ));
          SQ = LQ >= 0 ? QQ[LQ] : SQ
        }
        if (SQ >= 0) return void this.moveTo(DQ, xQ[SQ], xQ, QQ, FQ, oQ);
        if (!LQ) return;
        const iQ = "Right" === FQ || "Down" === FQ ? 1 : -1;
        if (CQ && UQ(CQ, cQ, iQ)) {
          const QQ = "y" === cQ ? CQ.clientHeight : CQ.clientWidth;
          NQ(CQ, cQ, iQ * QQ * .5), this.retryMove = {
            direction: FQ,
            atMs: wQ + 80
          }
        }
      }
      moveTo(QQ, FQ, wQ, LQ, qQ, oQ) {
        const DQ = this.tabStripNav.findTabContent(QQ, FQ, wQ);
        DQ && "true" !== QQ.dataset.padSelected ? this.openTab(QQ, DQ, LQ, qQ) : oQ && !DQ || this.setFocus(this.tabStripNav.redirect(QQ, FQ, wQ, LQ), {
          byUser: !0
        })
      }
      openTab(QQ, FQ, wQ, LQ) {
        const qQ = FQ.parentElement;
        (0, JQ.d)(QQ), this.focusWhenFound((() => "true" !== QQ.dataset.padSelected ? null : FQ.isConnected ? this.tabStripNav.pickContentStart(FQ, this.getEnabledCandidates(wQ), wQ) : qQ ? this.tabStripNav.pickReplacedContentStart(QQ, qQ, this.getEnabledCandidates(wQ), wQ) : null), 3e3), this.tabOpenWait = {
          wait: this.pendingFocus,
          direction: LQ
        }
      }
      enterTab(QQ, FQ, wQ, LQ) {
        this.move(wQ, (QQ => {
          const FQ = [...QQ.querySelectorAll(jL)].filter((FQ => FQ.closest(lL) === QQ));
          if (FQ.length >= 2) {
            const QQ = FQ[0].getBoundingClientRect(),
              wQ = FQ[1].getBoundingClientRect();
            return Math.abs(wQ.top - QQ.top) > Math.abs(wQ.left - QQ.left) ? "Right" : "Down"
          }
          const wQ = QQ.getBoundingClientRect();
          return wQ.height > wQ.width ? "Right" : "Down"
        })(FQ), LQ, !1, !0), this.focused !== QQ || this.pendingFocus || this.activate(QQ)
      }
      handleScroll(QQ, FQ) {
        const wQ = (0, xQ.j)(QQ.rightStick, .2);
        if (0 === wQ.x && 0 === wQ.y) return void(this.scrollRemainder = {
          x: 0,
          y: 0
        });
        const LQ = QQ.dtMs / 1e3;
        for (const oQ of ["x", "y"]) {
          var qQ;
          const QQ = wQ[oQ];
          if (0 === QQ) continue;
          const DQ = null !== (qQ = OQ(this.focused, oQ, FQ.root)) && void 0 !== qQ ? qQ : rQ(FQ.root, oQ);
          if (!DQ) continue;
          const kQ = Math.sign(QQ) * QQ * QQ * 1500 * LQ + this.scrollRemainder[oQ],
            vQ = Math.trunc(kQ);
          this.scrollRemainder[oQ] = kQ - vQ, 0 !== vQ && (NQ(DQ, oQ, vQ), this.scrolledInLayer = !0)
        }
      }
    };
    var Qq = wQ(8005);
    var Fq = wQ(8471);
    const wq = {
        duration: 80,
        strongMagnitude: .2,
        weakMagnitude: .2,
        needsPadInUse: !1
      },
      Lq = {
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
          ...wq,
          minIntervalMs: 1e3
        },
        preview: {
          ...wq,
          minIntervalMs: 0
        }
      };
    const qq = new class {
        constructor(QQ) {
          this.deps = QQ, this.lastPlayedMs = {}, this.loggedFailure = !1, this.logFailure = QQ => {
            this.loggedFailure || (this.loggedFailure = !0, console.warn("Controller vibration failed; further failures are not logged.", QQ))
          }
        }
        play(QQ, FQ) {
          const wQ = Lq[QQ];
          if (!this.deps.isVibrationOn() || wQ.needsPadInUse && !this.deps.isPadInUse()) return !1;
          const LQ = this.lastPlayedMs[QQ];
          if (void 0 !== LQ && FQ - LQ < wQ.minIntervalMs) return !1;
          const qQ = this.deps.getActuator();
          if (!qQ) return !1;
          this.lastPlayedMs[QQ] = FQ;
          const {
            duration: oQ,
            strongMagnitude: DQ,
            weakMagnitude: kQ
          } = wQ;
          try {
            qQ.playEffect("dual-rumble", {
              duration: oQ,
              strongMagnitude: DQ,
              weakMagnitude: kQ
            }).catch(this.logFailure)
          } catch (vQ) {
            this.logFailure(vQ)
          }
          return !0
        }
      }({
        getActuator: () => (QQ => {
          const FQ = null === QQ || void 0 === QQ ? void 0 : QQ.vibrationActuator;
          return "function" === typeof(null === FQ || void 0 === FQ ? void 0 : FQ.playEffect) ? FQ : null
        })(DQ.f.getActiveGamepad()),
        isVibrationOn: () => (0, bQ.h)().vibration,
        isPadInUse: YQ.j
      }),
      oq = QQ => {
        qq.play(QQ, performance.now())
      };
    var Dq = wQ(8013),
      kq = wQ(2845),
      vq = wQ(114),
      mq = wQ(27),
      uq = wQ(649);
    class Hq {
      constructor(QQ) {
        this.deps = QQ
      }
      check() {
        let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const FQ = this.deps.isPadActive() ? this.deps.getPadFamily() : null;
        if (!FQ) return "skipped";
        const wQ = QQ ? this.deps.getVisitId() : this.deps.peekVisitId();
        return null === wQ || this.deps.readReportedVisitId() === wQ ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(wQ), this.deps.hY(FQ, this.deps.getInputType()), "reported") : "notReady"
      }
    }
    const bq = "controllerUsageReportedVisit";
    var Yq = wQ(1362),
      xq = wQ(1725),
      Aq = wQ(634),
      tq = wQ(1447),
      eq = wQ(1265);
    const Mq = QQ => ({
        translationKey: `controller:${QQ}`
      }),
      Gq = {
        A: "A",
        B: "B",
        X: "X",
        Y: "Y",
        LB: "LB",
        RB: "RB",
        LT: "LT",
        RT: "RT",
        View: Mq("padButtonView"),
        Menu: Mq("padButtonMenu"),
        LS: "L3",
        RS: "R3",
        Up: Mq("padButtonDpadUp"),
        Down: Mq("padButtonDpadDown"),
        Left: Mq("padButtonDpadLeft"),
        Right: Mq("padButtonDpadRight"),
        Home: Mq("padButtonHome"),
        LeftStick: Mq("padButtonLeftStick"),
        RightStick: Mq("padButtonRightStick")
      },
      pq = {
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
          View: Mq("padButtonCreate"),
          Menu: Mq("padButtonOptions")
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
      cq = (QQ, FQ) => {
        var wQ;
        const LQ = null !== (wQ = pq[QQ][FQ]) && void 0 !== wQ ? wQ : Gq[FQ];
        return "string" === typeof LQ ? LQ : (0, qQ.u)(eq.e.get().getCurrentLanguageCode(), LQ.translationKey)
      },
      Cq = QQ => {
        let {
          glyph: FQ,
          family: wQ,
          className: LQ
        } = QQ;
        const qQ = (0, YQ.C)(),
          oQ = null !== wQ && void 0 !== wQ ? wQ : qQ,
          DQ = (0, Dq.i)(oQ, FQ);
        return (0, aQ.jsx)("span", {
          className: jQ()("ControllerGlyph", LQ),
          role: "img",
          "aria-label": cq(oQ, FQ),
          style: {
            "--pad-glyph-mask": `url(${DQ})`,
            "--pad-glyph-aspect": (0, Dq.e)(oQ, FQ)
          }
        })
      };
    var Sq = wQ(1873);
    const iq = QQ => {
      let {
        action: FQ
      } = QQ;
      const {
        t: wQ
      } = (0, qQ.y)();
      switch (FQ.kind) {
        case "reload":
          return (0, aQ.jsx)("span", {
            children: wQ("controller:gameplayReload")
          });
        case "specialAction":
          return null;
        case "customButton":
          return (0, aQ.jsx)(Sq.e, {
            text: FQ.description ? [{
              icon: FQ.icon
            }, ` ${FQ.description}`] : [{
              icon: FQ.icon
            }]
          });
        case "touchButton":
          return (0, aQ.jsx)(Sq.e, {
            text: FQ.label
          })
      }
    };
    var Wq = wQ(8477);
    const Rq = QQ => {
      let {
        hold: FQ
      } = QQ;
      return (0, aQ.jsx)("div", {
        className: "DropStackFillTrack",
        style: {
          "--pad-drop-stack-hold": `${FQ.holdMs}ms`
        },
        children: (0, aQ.jsx)("div", {
          className: "DropStackFillBar"
        })
      }, FQ.id)
    };
    var Oq = wQ(8503),
      sq = wQ(8506),
      rq = wQ(8510),
      Iq = wQ(8497);
    const Uq = () => {
        const {
          gameState: QQ
        } = (0, vQ.l)(["gameState"]), FQ = (0, YQ.z)(), [LQ, qQ] = (0, zQ.useState)(!1), [oQ, DQ] = (0, zQ.useState)(!1);
        return (0, zQ.useEffect)((() => {
          "inGame" === QQ && qQ(!0)
        }), [QQ]), (0, zQ.useEffect)((() => {
          if (!LQ) return;
          let QQ = null,
            FQ = !1;
          return (Aq.s ? Promise.all([wQ.e(70), wQ.e(261), wQ.e(200), wQ.e(219), wQ.e(218), wQ.e(85)]).then((() => wQ(39967))).then((QQ => QQ.startWasmPadGameplay)) : Promise.all([wQ.e(70), wQ.e(227), wQ.e(226), wQ.e(95), wQ.e(73), wQ.e(72), wQ.e(71), wQ.e(183), wQ.e(223), wQ.e(75), wQ.e(197), wQ.e(217), wQ.e(94), wQ.e(220), wQ.e(84), wQ.e(235), wQ.e(114), wQ.e(236), wQ.e(74), wQ.e(113), wQ.e(156), wQ.e(219), wQ.e(189)]).then((() => wQ(40095))).then((QQ => QQ.startPadGameplay))).then((wQ => {
            FQ || (QQ = wQ())
          })).catch((QQ => {
            console.error("Pad gameplay failed to load", QQ), FQ || DQ(!0)
          })), () => {
            var wQ;
            FQ = !0, null === (wQ = QQ) || void 0 === wQ || wQ()
          }
        }), [LQ]), (0, zQ.useEffect)((() => {
          oQ && FQ && (DQ(!1), Yq.NotificationProvider.showPromptPopup({
            title: "controller:gameplayLoadFailedTitle",
            subtitle: "controller:gameplayLoadFailedSubtitle",
            confirmText: "settingsMenu:reloadPagePopupConfirm",
            confirmTooltip: "",
            cancelText: "general:cancel",
            cancelTooltip: ""
          }).getResult().then((QQ => {
            !0 === QQ && (0, xq.reloadBloxd)()
          })))
        }), [oQ, FQ]), (0, aQ.jsxs)(aQ.Fragment, {
          children: [(0, aQ.jsx)(Nq, {}), (0, aQ.jsx)(Tq, {}), (0, aQ.jsx)(Kq, {})]
        })
      },
      Nq = () => {
        const {
          t: QQ
        } = (0, qQ.y)(), FQ = (0, YQ.z)(), {
          gameState: wQ,
          isUiHidden: LQ
        } = (0, vQ.l)(["gameState", "isUiHidden"]), {
          hideButtonHints: oQ
        } = (0, bQ.o)(), DQ = (0, Wq.h)(), kQ = (0, Wq.i)(), [mQ, HQ] = (0, zQ.useState)(rq.b);
        return (0, tq.g)(Iq.m, HQ), !FQ || oQ || LQ || "inGame" !== wQ || !DQ && !mQ ? null : (0, aQ.jsxs)("div", {
          className: "PadActionHint SmallTextBold",
          children: [DQ && (0, aQ.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, aQ.jsx)(Cq, {
              glyph: (0, uQ.g)("actionButton")
            }), (0, aQ.jsx)(iq, {
              action: DQ
            }), kQ && (0, aQ.jsx)("span", {
              className: "PadActionHintMore",
              children: QQ("controller:gameplayActionWheelHint")
            })]
          }), mQ && (0, aQ.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, aQ.jsx)(Cq, {
              glyph: (0, uQ.g)("pickBlock")
            }), (0, aQ.jsx)("span", {
              children: QQ("controller:gameplayPickBlock")
            })]
          })]
        })
      },
      Tq = () => {
        const {
          t: QQ
        } = (0, qQ.y)(), FQ = (0, YQ.z)(), {
          gameState: wQ,
          isUiHidden: LQ
        } = (0, vQ.l)(["gameState", "isUiHidden"]), [oQ, DQ] = (0, zQ.useState)(Oq.b);
        return (0, tq.g)(Iq.i, DQ), FQ && !LQ && "inGame" === wQ && oQ ? (0, aQ.jsxs)("div", {
          className: "PadDropStackFill SmallTextBold",
          children: [(0, aQ.jsx)("span", {
            children: QQ("controller:gameplayDropStack")
          }), (0, aQ.jsx)(Rq, {
            hold: oQ
          })]
        }) : null
      },
      Kq = () => {
        const {
          t: QQ
        } = (0, qQ.y)(), FQ = (0, YQ.z)(), {
          gameState: wQ,
          isUiHidden: LQ
        } = (0, vQ.l)(["gameState", "isUiHidden"]), {
          hideButtonHints: oQ
        } = (0, bQ.o)(), [DQ, kQ] = (0, zQ.useState)(sq.d);
        return (0, tq.g)(Iq.h, kQ), FQ && !LQ && "inGame" === wQ && DQ ? (0, aQ.jsxs)("div", {
          className: "PadAttackLatchedHint SmallTextBold",
          children: [!oQ && (0, aQ.jsx)(Cq, {
            glyph: (0, uQ.g)("attack")
          }), (0, aQ.jsx)("span", {
            children: QQ("controller:gameplayAttackLatched")
          })]
        }) : null
      };
    var zq = wQ(8514),
      lq = wQ(1911),
      jq = wQ(2345),
      aq = wQ(7986);
    const Xq = QQ => QQ && !(0, zq.b)(lq.b.get("shopInfo")),
      fq = () => {
        const QQ = "inGame" === (0, vQ.l)(["gameState"]).gameState;
        return (0, jq.h)("shopInfo", (() => {
          (0, aq.i)(Xq(QQ))
        })), (0, zQ.useEffect)((() => {
          (0, aq.i)(Xq(QQ))
        }), [QQ]), null
      },
      Vq = () => {
        const {
          t: QQ
        } = (0, qQ.y)(), {
          hideButtonHints: FQ
        } = (0, bQ.o)();
        (0, YQ.C)();
        const wQ = (0, jF.j)();
        return (0, zQ.useEffect)((() => (() => {
          const QQ = HQ.b.register({
              name: "inventory",
              isActive: qw.isActive,
              onFrame: qw.onFrame,
              onDeactivate: qw.onDeactivate,
              wakePressActs: qw.wakePressActs
            }),
            FQ = QQ => {
              qw.noteRealPointer(QQ), qw.shouldBlockRealPointer(QQ) && QQ.stopPropagation()
            };
          for (const DQ of ow) window.addEventListener(DQ, FQ, !0);
          const wQ = (0, yQ.k)((() => {
              "inventory" !== HQ.b.getActiveConsumerName() && qw.forgetSurface()
            })),
            LQ = QQ => {
              const FQ = QQ.target;
              (0, YQ.j)() && (0, gQ.i)(FQ) && FQ.closest(cF) && (0, yQ.i)() && (0, yQ.q)(FQ)
            };
          document.addEventListener("focusout", LQ, !0);
          const {
            invalidate: qQ,
            onScroll: oQ
          } = qw.targets;
          return document.addEventListener("scroll", oQ, !0), window.addEventListener("resize", qQ), () => {
            QQ(), wQ();
            for (const QQ of ow) window.removeEventListener(QQ, FQ, !0);
            document.removeEventListener("scroll", oQ, !0), document.removeEventListener("focusout", LQ, !0), window.removeEventListener("resize", qQ), qw.targets.disconnect()
          }
        })()), []), (0, aQ.jsxs)(aQ.Fragment, {
          children: [(0, aQ.jsx)(hQ, {
            placer: qw.ring,
            className: "InventorySlotCursorRing"
          }), wQ.showing && !FQ && (0, aQ.jsx)("div", {
            className: "InventorySlotCursorHints SmallTextBold",
            children: ZQ(wQ).map((FQ => {
              let {
                actions: LQ,
                labelKey: qQ
              } = FQ;
              return (0, aQ.jsxs)("div", {
                className: "InventorySlotCursorHint",
                children: [LQ.map((QQ => (0, aQ.jsx)(Cq, {
                  glyph: (0, uQ.g)(QQ)
                }, QQ))), (0, aQ.jsx)("span", {
                  children: QQ(`controller:${qQ}`)
                }), "inventoryDrop" === qQ && wQ.dropStackHold && (0, aQ.jsx)(Rq, {
                  hold: wQ.dropStackHold
                })]
              }, qQ)
            }))
          })]
        })
      },
      hq = [{
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
      Jq = QQ => Array.from(QQ).map((QQ => ({
        type: "char",
        char: QQ,
        width: 1
      }))),
      Eq = function(QQ) {
        return {
          type: "command",
          command: QQ,
          width: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
        }
      },
      nq = [Eq("page", 2), Eq("otherPage"), Eq("caretLeft"), Eq("space", 3), Eq("caretRight"), Eq("close", 1.5), Eq("submit", 1.5)],
      gq = [Eq("page", 2), Eq("otherPage"), Eq("caretLeft"), Eq("space", 2), Eq("caretRight"), Eq("newline"), Eq("close", 1.5), Eq("submit", 1.5)],
      Pq = [
        [...Jq("1234567890"), Eq("backspace")], Jq("qwertyuiop/"), Jq("asdfghjkl'?"), [Eq("shift", 2), ...Jq("zxcvbnm,.")]
      ],
      Zq = [
        [...Jq("1234567890"), Eq("backspace")], Jq("!@#$%^&*()/"), Jq('-_=+[]{};:"'), Jq("~`|\\<>'\u20ac\xa3,.")
      ],
      yq = {
        letters: Pq,
        accents: [
          [...Jq("1234567890"), Eq("backspace")], Jq("\xe1\xe9\xed\xf3\xfa\xe0\xe8\xec\xf2\xf9\xf1"), Jq("\xe2\xea\xee\xf4\xfb\xe4\xeb\xef\xf6\xfc\xe7"), [Eq("shift", 2), ...Jq("\xe3\xf5\xdf\u0153\u011f\u015f\u0131\xbf\xa1")]
        ],
        symbols: Zq
      },
      Bq = new Set(["de", "es", "fr", "it", "nl", "pt", "pt-BR", "tr", "vi"]),
      dq = (QQ, FQ) => "letters" === QQ ? FQ ? {
        page: "accents",
        otherPage: "symbols"
      } : {
        page: "symbols",
        otherPage: "accents"
      } : {
        page: "letters",
        otherPage: "accents" === QQ ? "symbols" : "accents"
      },
      Qo = function(QQ, FQ) {
        const wQ = ((QQ, FQ) => [...yq[QQ], FQ ? gq : nq])(QQ, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
        if (0 === FQ) return wQ;
        const LQ = Math.min(2, Fo(wQ[0]) / FQ);
        return [Array.from({
          length: FQ
        }, ((QQ, FQ) => ({
          type: "phrase",
          phraseIndex: FQ,
          width: LQ
        }))), ...wQ]
      },
      Fo = QQ => QQ.reduce(((QQ, FQ) => QQ + FQ.width), 0),
      wo = QQ => Math.max(...QQ.map(Fo)),
      Lo = (QQ, FQ) => {
        const wQ = QQ[FQ.row];
        let LQ = (wo(QQ) - Fo(wQ)) / 2;
        for (let qQ = 0; qQ < FQ.col; qQ++) LQ += wQ[qQ].width;
        return LQ + wQ[FQ.col].width / 2
      },
      qo = (QQ, FQ, wQ) => {
        let LQ = 0,
          qQ = 1 / 0;
        for (let oQ = 0; oQ < QQ[FQ].length; oQ++) {
          const DQ = Math.abs(Lo(QQ, {
            row: FQ,
            col: oQ
          }) - wQ);
          DQ < qQ - 1e-9 && (LQ = oQ, qQ = DQ)
        }
        return LQ
      },
      oo = (QQ, FQ) => {
        const wQ = Math.max(0, Math.min(QQ.length - 1, FQ.row));
        return {
          row: wQ,
          col: Math.max(0, Math.min(QQ[wQ].length - 1, FQ.col))
        }
      },
      Do = (QQ, FQ, wQ) => "once" === QQ && FQ - wQ <= 400 ? "caps" : "off" === QQ ? "once" : "off",
      ko = (QQ, FQ) => "once" === QQ && (QQ => QQ.toLowerCase() !== QQ.toUpperCase())(FQ) ? "off" : QQ,
      vo = (QQ, FQ, wQ) => {
        if ("symbols" === FQ || "off" === wQ) return QQ;
        const LQ = QQ.toUpperCase();
        return 1 === LQ.length ? LQ : QQ
      };
    var mo = wQ(8389);
    const uo = ["controller:keyboardPhraseGg", "controller:keyboardPhraseHi", "controller:keyboardPhraseThanks", "controller:keyboardPhraseGl", "controller:keyboardPhraseBrb", "controller:keyboardPhraseYes", "controller:keyboardPhraseNo", "controller:keyboardPhraseHelp"];
    const Ho = new class {
        constructor() {
          this.lastSendMs = -1 / 0
        }
        claim(QQ) {
          return !(QQ - this.lastSendMs < 2e3) && (this.lastSendMs = QQ, !0)
        }
      },
      bo = {
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
      Yo = ["Tm", "nameTag"],
      xo = QQ => {
        const FQ = QQ.target instanceof HTMLTextAreaElement && !Yo.includes(QQ.kind);
        return Qo(QQ.page, "chat" === QQ.kind ? uo.length : 0, FQ)
      },
      Ao = QQ => {
        const FQ = QQ.getBoundingClientRect(),
          wQ = window.innerHeight,
          LQ = FQ.top + FQ.height / 2 < wQ / 2 ? "bottom" : "top",
          qQ = "bottom" === LQ ? wQ - FQ.bottom - 6 : FQ.top - 6;
        return {
          placement: LQ,
          maxHeightPx: Math.min(.46 * wQ, Math.max(.3 * wQ, qQ))
        }
      },
      to = QQ => {
        (0, sw.f)(QQ) ? (0, sw.d)().close(): (dL.noteChosenStop(QQ), QQ.blur())
      };
    class eo {
      constructor(QQ) {
        this.host = QQ, this.lastShiftPressMs = -1 / 0, this.phraseTexts = [], this.phrasesFill = !1
      }
      setPhraseRow(QQ, FQ) {
        this.phraseTexts = QQ, this.phrasesFill = FQ
      }
      pressKey(QQ) {
        const FQ = this.host.getState(),
          wQ = xo(FQ),
          LQ = wQ[QQ.row][QQ.col];
        this.host.setState({
          ...FQ,
          focus: QQ,
          preferredX: Lo(wQ, QQ)
        }), "char" === LQ.type ? this.typeChar(LQ.char) : "command" === LQ.type ? this.runCommand(LQ.command) : this.sendPhrase(LQ.phraseIndex)
      }
      runCommand(QQ) {
        const FQ = this.host.getState();
        switch (QQ) {
          case "backspace":
            (0, gQ.d)(FQ.target);
            break;
          case "space":
            (0, gQ.g)(FQ.target, " ");
            break;
          case "newline":
            (0, gQ.g)(FQ.target, "\n");
            break;
          case "caretLeft":
            (0, gQ.k)(FQ.target, -1);
            break;
          case "caretRight":
            (0, gQ.k)(FQ.target, 1);
            break;
          case "shift": {
            const QQ = performance.now();
            this.host.setState({
              ...FQ,
              shift: Do(FQ.shift, QQ, this.lastShiftPressMs)
            }), this.lastShiftPressMs = QQ;
            break
          }
          case "page":
          case "otherPage": {
            const wQ = dq(FQ.page, FQ.accentsFirst)[QQ];
            this.host.setState({
              ...FQ,
              page: wQ,
              focus: oo(xo({
                ...FQ,
                page: wQ
              }), FQ.focus)
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
            (0, sw.f)(FQ.target) && (0, sw.d)().selectNextChannel()
        }
      }
      submit() {
        var QQ, FQ;
        const {
          target: wQ
        } = this.host.getState();
        this.host.hide(), (0, sw.f)(wQ) ? (0, sw.d)().submit() : (dL.noteChosenStop(wQ), null === (QQ = (FQ = (0, sw.e)(wQ)).submit) || void 0 === QQ || QQ.call(FQ), document.activeElement === wQ && wQ.blur())
      }
      close() {
        const {
          target: QQ
        } = this.host.getState();
        this.host.hide(), to(QQ)
      }
      typeChar(QQ) {
        const {
          target: FQ,
          page: wQ,
          shift: LQ
        } = this.host.getState();
        (0, gQ.g)(FQ, vo(QQ, wQ, LQ)), this.host.setState({
          ...this.host.getState(),
          shift: ko(LQ, QQ)
        })
      }
      sendPhrase(QQ) {
        if (this.phrasesFill) {
          const {
            target: FQ
          } = this.host.getState(), wQ = this.phraseTexts[QQ];
          wQ && (FQ.setSelectionRange(0, FQ.value.length), (0, gQ.g)(FQ, wQ))
        } else Ho.claim(performance.now()) && (this.host.hide(), (0, sw.d)().sendLine(this.phraseTexts[QQ]))
      }
    }
    var Mo = wQ(8414);
    const Go = {
        initialDelayMs: 380,
        intervalMs: 85
      },
      po = {
        initialDelayMs: 400,
        intervalMs: 55
      };
    class co {
      constructor(QQ, FQ) {
        this.host = QQ, this.editor = FQ, this.lastDirection = null, this.navRepeat = new xQ.d((0, AQ.d)(Go)), this.commandRepeats = new Map(hq.filter((QQ => {
          let {
            repeats: FQ
          } = QQ;
          return FQ
        })).map((QQ => {
          let {
            command: FQ
          } = QQ;
          return [FQ, (0, AQ.d)(po)]
        })))
      }
      reset() {
        this.navRepeat.reset();
        for (const QQ of this.commandRepeats.values()) QQ.reset()
      }
      onVisibleFrame(QQ) {
        const FQ = performance.now();
        for (const {
            command: qQ,
            action: oQ
          }
          of hq) {
          const wQ = (0, uQ.g)(oQ),
            LQ = this.commandRepeats.get(qQ);
          if ((LQ ? LQ.update(QQ.isHeld(wQ), FQ) : QQ.wasPressed(wQ)) && (this.editor.runCommand(qQ), !this.host.getState().visible)) return
        }
        if (QQ.wasPressed((0, uQ.g)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
        const wQ = this.readNavDirection(QQ);
        this.lastDirection = wQ;
        const LQ = this.navRepeat.update(wQ, FQ);
        LQ && this.navigate(LQ)
      }
      onHiddenFrame(QQ, FQ) {
        var wQ;
        if (QQ.wasPressed((0, uQ.g)("keyboardClose"))) return void to(FQ);
        const LQ = (0, uQ.g)("keyboardType");
        if (QQ.wasPressed(LQ)) return HQ.b.consumeButton(LQ), void this.host.open(FQ);
        const qQ = this.readNavDirection(QQ),
          oQ = null !== qQ && qQ !== this.lastDirection;
        if (this.lastDirection = qQ, !oQ || (0, sw.f)(FQ)) return;
        const DQ = (null === (wQ = uL()) || void 0 === wQ ? void 0 : wQ.root.contains(FQ)) || null !== FQ.closest(".EntireInventoryWrapper");
        to(FQ), DQ && HQ.b.handOffHeldInput()
      }
      navigate(QQ) {
        const FQ = this.host.getState();
        if ("Up" === QQ && 0 === FQ.focus.row && "chat" === FQ.kind) return (0, sw.d)().stepHistory(), void this.host.setState({
          ...FQ
        });
        const wQ = ((QQ, FQ, wQ, LQ) => {
          if ("Left" === wQ || "Right" === wQ) {
            const LQ = QQ[FQ.row].length,
              qQ = (FQ.col + ("Right" === wQ ? 1 : -1) + LQ) % LQ,
              oQ = {
                row: FQ.row,
                col: qQ
              };
            return {
              pos: oQ,
              preferredX: Lo(QQ, oQ)
            }
          }
          const qQ = (FQ.row + ("Down" === wQ ? 1 : -1) + QQ.length) % QQ.length;
          return {
            pos: {
              row: qQ,
              col: qo(QQ, qQ, LQ)
            },
            preferredX: LQ
          }
        })(xo(FQ), FQ.focus, QQ, FQ.preferredX);
        this.host.setState({
          ...FQ,
          focus: wQ.pos,
          preferredX: wQ.preferredX
        })
      }
      readNavDirection(QQ) {
        for (const FQ of xQ.D)
          if (QQ.isHeld(FQ)) return FQ;
        return (0, xQ.gb)((0, xQ.j)(QQ.leftStick, (0, bQ.h)().moveDeadzone))
      }
    }
    const Co = ["Up", "Down", "Left", "Right"],
      So = new Set(["CapsLock", "Control", "Fn", "FnLock", "Hyper", "NumLock", "ScrollLock", "Shift", "Super"]);
    const io = new class {
      constructor() {
        this.state = bo, this.listeners = new Set, this.ownedField = null, this.pendingChatInput = null, this.pendingChatTimeout = 0, this.savedInputMode = null, this.editor = new eo(this), this.padInput = new co(this, this.editor)
      }
      getState() {
        return this.state
      }
      setState(QQ) {
        const FQ = QQ.visible !== this.state.visible;
        this.state = QQ;
        for (const wQ of this.listeners) wQ();
        FQ && mQ.l.GA(Mo.c, QQ.visible)
      }
      subscribe(QQ) {
        return this.listeners.add(QQ), () => {
          this.listeners.delete(QQ)
        }
      }
      install() {
        const QQ = HQ.b.register({
            name: "keyboard",
            isActive: () => this.state.visible || (0, gQ.i)(document.activeElement),
            onFrame: QQ => {
              this.onFrame(QQ)
            },
            onDeactivate: () => {
              this.padInput.reset()
            },
            wakePressActs: QQ => Co.includes(QQ) || !this.state.visible && QQ === (0, uQ.g)("keyboardType")
          }),
          FQ = QQ => {
            const FQ = QQ.target;
            (0, gQ.i)(FQ) && (FQ === this.pendingChatInput || (0, YQ.j)() ? this.open(FQ) : this.state.visible && FQ !== this.state.target && (this.ownedField = null, this.hide()))
          },
          wQ = () => {
            setTimeout((() => {
              this.releaseLostField()
            }), 0)
          },
          LQ = QQ => {
            QQ.isTrusted && this.state.visible && (QQ => !QQ.repeat && !So.has(QQ.key) && !(0, mo.b)(QQ.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(QQ.key))(QQ) && this.hide()
          },
          qQ = () => {
            this.state.visible && this.setState({
              ...this.state,
              ...Ao(this.state.target)
            })
          };
        document.addEventListener("focusin", FQ, !0), document.addEventListener("focusout", wQ, !0), window.addEventListener("keydown", LQ, !0), window.addEventListener("resize", qQ);
        const oQ = mQ.l.subscribe(Iq.b, (() => {
            this.openChat()
          })),
          DQ = mQ.l.subscribe(Mo.f, (QQ => {
            this.openForField(QQ)
          }));
        return () => {
          QQ(), document.removeEventListener("focusin", FQ, !0), document.removeEventListener("focusout", wQ, !0), window.removeEventListener("keydown", LQ, !0), window.removeEventListener("resize", qQ), mQ.l.unsubscribe(oQ), mQ.l.unsubscribe(DQ), this.clearPendingChat(), this.hide(), this.ownedField = null
        }
      }
      openChat() {
        const QQ = (0, sw.d)();
        QQ ? document.activeElement !== QQ.input ? (this.clearPendingChat(), this.pendingChatInput = QQ.input, this.pendingChatTimeout = window.setTimeout((() => {
          this.pendingChatInput = null
        }), 250), QQ.open()) : this.open(QQ.input) : console.warn("controllerOpenChat with no chat mounted")
      }
      openForField(QQ) {
        (0, gQ.i)(QQ) ? (document.activeElement !== QQ && QQ.focus(), document.activeElement === QQ && this.open(QQ)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", QQ)
      }
      open(QQ) {
        var FQ;
        if (this.clearPendingChat(), this.ownedField = QQ, this.state.visible && this.state.target === QQ) return;
        this.restoreInputMode(), (0, gQ.o)(QQ), this.savedInputMode = QQ.getAttribute("inputmode"), QQ.setAttribute("inputmode", "none");
        const wQ = {
          ...bo,
          visible: !0,
          target: QQ,
          kind: (0, sw.f)(QQ) ? "chat" : null !== (FQ = (0, sw.e)(QQ).kind) && void 0 !== FQ ? FQ : null,
          accentsFirst: (LQ = eq.e.get().getCurrentLanguageCode(), Bq.has(LQ)),
          ...Ao(QQ)
        };
        var LQ;
        const qQ = xo(wQ),
          oQ = ((QQ, FQ) => {
            for (let wQ = 0; wQ < QQ.length; wQ++) {
              const LQ = QQ[wQ].findIndex((QQ => "char" === QQ.type && QQ.char === FQ));
              if (-1 !== LQ) return {
                row: wQ,
                col: LQ
              }
            }
            return null
          })(qQ, "q");
        this.padInput.reset(), this.setState({
          ...wQ,
          focus: oQ,
          preferredX: Lo(qQ, oQ)
        })
      }
      hide() {
        this.state.visible && (this.restoreInputMode(), this.padInput.reset(), this.setState(bo))
      }
      onFrame(QQ) {
        if (this.releaseLostField()) return;
        const FQ = document.activeElement;
        this.state.visible ? this.padInput.onVisibleFrame(QQ) : (0, gQ.i)(FQ) && this.padInput.onHiddenFrame(QQ, FQ)
      }
      releaseLostField() {
        const QQ = this.ownedField;
        return !(null === QQ || QQ.isConnected && document.activeElement === QQ) && (this.ownedField = null, this.hide(), !0)
      }
      clearPendingChat() {
        window.clearTimeout(this.pendingChatTimeout), this.pendingChatInput = null
      }
      restoreInputMode() {
        const {
          target: QQ
        } = this.state;
        QQ && (null === this.savedInputMode ? QQ.removeAttribute("inputmode") : QQ.setAttribute("inputmode", this.savedInputMode), this.savedInputMode = null)
      }
    };
    var Wo = wQ(8530);
    const Ro = new Map(hq.map((QQ => {
        let {
          command: FQ,
          action: wQ
        } = QQ;
        return [FQ, wQ]
      }))),
      Oo = {
        letters: "ABC",
        accents: "\xe0\xe9",
        symbols: "&123"
      },
      so = {
        chat: "controller:keyboardTargetChat",
        sign: "controller:keyboardTargetSign",
        nameTag: "controller:keyboardTargetNameTag",
        book: "controller:keyboardTargetBook",
        Tm: "controller:keyboardTargetBookTitle"
      },
      ro = QQ => {
        const FQ = (() => {
          const [, QQ] = (0, zQ.useReducer)((QQ => QQ + 1), 0);
          return QQ
        })();
        (0, zQ.useEffect)((() => {
          if (!QQ) return;
          const wQ = ["input", "select", "selectionchange", "keyup", "pointerup"];
          for (const qQ of wQ) QQ.addEventListener(qQ, FQ);
          document.addEventListener("selectionchange", FQ);
          const LQ = new MutationObserver(FQ);
          return LQ.observe(QQ, {
            attributeFilter: ["placeholder"]
          }), () => {
            LQ.disconnect();
            for (const LQ of wQ) QQ.removeEventListener(LQ, FQ);
            document.removeEventListener("selectionchange", FQ)
          }
        }), [QQ, FQ])
      },
      Io = QQ => {
        QQ.preventDefault()
      },
      Uo = QQ => {
        "mouse" !== QQ.pointerType && QQ.preventDefault()
      },
      No = () => {
        var QQ;
        const {
          t: FQ
        } = (0, qQ.y)(), wQ = (() => {
          const [QQ, FQ] = (0, zQ.useState)(io.getState());
          return (0, zQ.useEffect)((() => io.subscribe((() => {
            FQ(io.getState())
          }))), []), QQ
        })(), LQ = (0, YQ.z)(), oQ = (0, zQ.useRef)(null);
        (0, bQ.o)(), (0, YQ.C)(), (0, zQ.useEffect)((() => {
          const QQ = io.install(),
            FQ = null;
          return () => {
            QQ(), null === FQ || void 0 === FQ || FQ()
          }
        }), []);
        const DQ = (0, zQ.useMemo)((() => uo.map((QQ => FQ(QQ)))), [FQ]),
          kQ = wQ.visible && "chat" === wQ.kind ? wQ.target : null;
        ro(kQ);
        const vQ = null !== (QQ = null === kQ || void 0 === kQ ? void 0 : kQ.value) && void 0 !== QQ ? QQ : "",
          mQ = ((QQ, FQ, wQ) => {
            if (!QQ.startsWith("/")) return [];
            const LQ = [];
            for (let qQ = FQ.length - 1; qQ >= 0 && LQ.length < wQ; qQ--) {
              const wQ = FQ[qQ].trim();
              wQ.startsWith(QQ) && wQ !== QQ && !LQ.includes(wQ) && LQ.push(wQ)
            }
            return LQ
          })(vQ, vQ.startsWith("/") ? (0, Wo.h)() : [], uo.length),
          HQ = vQ.startsWith("/"),
          xQ = HQ ? uo.map(((QQ, FQ) => {
            var wQ;
            return null !== (wQ = mQ[FQ]) && void 0 !== wQ ? wQ : ""
          })) : DQ;
        if ((0, zQ.useEffect)((() => {
            io.editor.setPhraseRow(xQ, HQ)
          })), (0, zQ.useEffect)((() => {
            const QQ = oQ.current;
            if (QQ) return QQ.addEventListener("touchstart", Io, {
              passive: !1
            }), () => {
              QQ.removeEventListener("touchstart", Io)
            }
          }), [wQ.visible]), !wQ.visible) return null;
        const AQ = xo(wQ),
          tQ = wo(AQ),
          eQ = QQ => "char" === QQ.type ? vo(QQ.char, wQ.page, wQ.shift) : "phrase" === QQ.type ? xQ[QQ.phraseIndex] : (QQ => {
            switch (QQ) {
              case "backspace":
                return "\u232b";
              case "shift":
                return "caps" === wQ.shift ? "\u21ea" : "\u21e7";
              case "page":
              case "otherPage":
                return Oo[dq(wQ.page, wQ.accentsFirst)[QQ]];
              case "space":
                return FQ("controller:keyboardSpace");
              case "caretLeft":
                return "\u2190";
              case "caretRight":
                return "\u2192";
              case "newline":
                return "\u21b5";
              case "submit":
                return FQ("chat" === wQ.kind ? "controller:keyboardSend" : "controller:keyboardDone");
              case "close":
                return "\u2715";
              case "channel":
                return "\u21c4"
            }
          })(QQ.command),
          MQ = QQ => {
            io.editor.pressKey(QQ)
          };
        return (0, aQ.jsxs)("div", {
          ref: oQ,
          className: jQ()(sw.i, "top" === wQ.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
            PadKeyboardMultiline: wQ.target instanceof HTMLTextAreaElement
          }),
          style: {
            "--pad-keyboard-rows": AQ.length,
            "--pad-keyboard-height": `${wQ.maxHeightPx}px`
          },
          onPointerDown: Uo,
          onMouseDown: Io,
          children: [(0, aQ.jsx)(To, {
            target: wQ.target,
            label: wQ.kind ? FQ(so[wQ.kind]) : wQ.target.placeholder || FQ("controller:keyboardTargetText")
          }), (0, aQ.jsx)("div", {
            className: "PadKeyboardRows",
            children: AQ.map(((QQ, FQ) => (0, aQ.jsx)("div", {
              className: jQ()("PadKeyboardRow", {
                PadKeyboardPhraseRow: "phrase" === QQ[0].type
              }),
              children: QQ.map(((QQ, qQ) => {
                const oQ = LQ && wQ.focus.row === FQ && wQ.focus.col === qQ,
                  DQ = "command" === QQ.type ? Ro.get(QQ.command) : void 0;
                return (0, aQ.jsx)("div", {
                  className: "PadKeyboardKeySlot",
                  style: {
                    width: QQ.width / tQ * 100 + "%"
                  },
                  children: (0, aQ.jsxs)("div", {
                    className: jQ()("PadKeyboardKey", {
                      PadKeyboardKeyFocused: oQ,
                      PadKeyboardKeyCommand: "command" === QQ.type,
                      PadKeyboardKeyPhrase: "phrase" === QQ.type,
                      PadKeyboardKeyActive: "command" === QQ.type && "shift" === QQ.command && "off" !== wQ.shift,
                      PadKeyboardKeySubmit: "command" === QQ.type && "submit" === QQ.command
                    }),
                    role: "button",
                    onClick: () => {
                      MQ({
                        row: FQ,
                        col: qQ
                      })
                    },
                    onTouchEnd: QQ => {
                      var wQ, LQ;
                      QQ.preventDefault(), wQ = QQ.changedTouches[0], LQ = QQ.currentTarget.getBoundingClientRect(), wQ && wQ.clientX >= LQ.left && wQ.clientX <= LQ.right && wQ.clientY >= LQ.top && wQ.clientY <= LQ.bottom && MQ({
                        row: FQ,
                        col: qQ
                      })
                    },
                    children: [(0, aQ.jsx)("span", {
                      className: "PadKeyboardKeyLabel",
                      children: eQ(QQ)
                    }), LQ && DQ && (0, aQ.jsx)(Cq, {
                      className: "PadKeyboardKeyGlyph",
                      glyph: (0, uQ.g)(DQ)
                    })]
                  })
                }, qQ)
              }))
            }, FQ)))
          })]
        })
      },
      To = QQ => {
        let {
          target: FQ,
          label: wQ
        } = QQ;
        ro(FQ);
        const LQ = (0, zQ.useRef)(null),
          qQ = (0, zQ.useRef)(null),
          oQ = FQ instanceof HTMLTextAreaElement;
        (0, zQ.useLayoutEffect)((() => {
          const QQ = LQ.current,
            FQ = qQ.current;
          oQ ? QQ.scrollTop = FQ.offsetTop - QQ.clientHeight / 2 : QQ.scrollLeft = FQ.offsetLeft - QQ.clientWidth / 2
        }));
        const {
          value: DQ,
          start: kQ,
          end: vQ
        } = (0, gQ.r)(FQ), mQ = "password" === FQ.type ? "\u2022".repeat(DQ.length) : DQ;
        return (0, aQ.jsxs)("div", {
          className: "PadKeyboardPreview",
          children: [(0, aQ.jsx)("div", {
            className: "PadKeyboardPreviewLabel SmallTextBold",
            children: wQ
          }), (0, aQ.jsxs)("div", {
            ref: LQ,
            className: jQ()("PadKeyboardPreviewText", {
              PadKeyboardPreviewMultiline: oQ
            }),
            children: [(0, aQ.jsx)("span", {
              children: mQ.slice(0, kQ)
            }), (0, aQ.jsx)("span", {
              ref: qQ,
              className: "PadKeyboardCaret"
            }), kQ !== vQ && (0, aQ.jsx)("span", {
              className: "PadKeyboardPreviewSelection",
              children: mQ.slice(kQ, vQ)
            }), (0, aQ.jsx)("span", {
              children: mQ.slice(vQ)
            }), 0 === mQ.length && FQ.placeholder && FQ.placeholder !== wQ && (0, aQ.jsx)("span", {
              className: "PadKeyboardPreviewPlaceholder",
              children: FQ.placeholder
            })]
          })]
        })
      };
    var Ko = wQ(1395),
      zo = wQ(3288);
    const jo = function() {
        for (var QQ = arguments.length, FQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) FQ[wQ] = arguments[wQ];
        return FQ.map(uQ.g)
      },
      ao = (QQ, FQ) => {
        const wQ = Jw(QQ);
        return wQ ? [{
          glyphs: [wQ],
          labelKey: FQ
        }] : []
      },
      Xo = [".BottomMiddleElements", ".BottomLeftElements > *", ".BottomRightElements > *", ".MiddleTextBottom .MiddleText"],
      fo = "--pad-hint-bar-clearance",
      Vo = "[data-pad-hint-bar-avoid]",
      ho = QQ => {
        const FQ = [];
        for (const wQ of QQ)(0, BQ.p)(wQ) && FQ.push(wQ.getBoundingClientRect());
        return FQ
      },
      Jo = QQ => {
        if (!QQ) return null;
        const FQ = uL(),
          wQ = FQ ? ho(((QQ, FQ) => {
            const wQ = QQ.closest(Vo);
            return wQ ? [wQ] : ("popup" === FQ ? document : QQ).querySelectorAll(Vo)
          })(FQ.root, FQ.layer.kind)) : [],
          LQ = !FQ || FQ.root.hasAttribute("data-pad-shows-hud");
        if (((0, zo.k)(null === FQ || void 0 === FQ ? void 0 : FQ.layer.kind, (0, zo.l)()) || LQ) && wQ.push(...ho(document.querySelectorAll(Xo.join(",")))), 0 === wQ.length) return null;
        const {
          width: qQ,
          height: oQ
        } = QQ.getBoundingClientRect(), DQ = window.innerHeight - 8, kQ = (0, zo.q)(DQ, {
          width: qQ,
          height: oQ
        }, window.innerWidth / 2, wQ, 8);
        return kQ === DQ ? null : Math.round(window.innerHeight - kQ)
      },
      Eo = QQ => {
        const FQ = document.documentElement.style,
          wQ = QQ ? `${Math.round(window.innerHeight-QQ.getBoundingClientRect().top)}px` : "";
        FQ.getPropertyValue(fo) !== wQ && (wQ ? FQ.setProperty(fo, wQ) : FQ.removeProperty(fo))
      },
      no = () => {
        const {
          t: QQ
        } = (0, qQ.y)(), {
          hideButtonHints: FQ
        } = (0, bQ.o)(), wQ = (0, YQ.z)(), [LQ, oQ] = (0, zQ.useState)(!1), [DQ, mQ] = (0, zQ.useState)([]), [AQ, tQ] = (0, zQ.useState)(null), eQ = (0, zQ.useRef)(null), MQ = (0, zQ.useRef)(null);
        (0, tq.g)(Mo.c, (QQ => {
          oQ(QQ)
        })), (0, tq.g)(zo.p, (() => {
          var QQ;
          null === (QQ = MQ.current) || void 0 === QQ || QQ.call(MQ)
        }));
        const GQ = wQ && !FQ && !LQ;
        return (0, zQ.useEffect)((() => {
          if (!GQ) return;
          let QQ = null;
          const FQ = () => {
            const FQ = (() => {
                var QQ;
                const FQ = HQ.b.getActiveConsumerName(),
                  wQ = (0, zo.i)();
                if (wQ) {
                  const QQ = (0, uQ.g)(wQ),
                    FQ = "emoteWheel" === wQ && "wheel" === (0, bQ.h)().emoteButton || !(0, xQ.J)(HQ.b.getLastFrame().values, QQ) ? {
                      glyphs: jo("menuConfirm"),
                      labelKey: "controller:menusSelect"
                    } : {
                      glyphs: [QQ],
                      labelKey: "controller:wheelReleaseToPick"
                    };
                  return [{
                    glyphs: [(0, uQ.x)(QQ)],
                    labelKey: "controller:wheelChoose"
                  }, FQ, {
                    glyphs: jo("menuBack"),
                    labelKey: "controller:wheelClose"
                  }]
                }
                const LQ = uL();
                if (!LQ || "focus" !== FQ && "cursor" !== FQ) return (0, zo.e)(uQ.g);
                const qQ = [],
                  oQ = {
                    glyphs: jo("menuBack"),
                    labelKey: "controller:menusBack"
                  },
                  DQ = (0, JQ.y)(LQ.root),
                  kQ = DQ ? !(0, BQ.t)(DQ) : Boolean(LQ.layer.close),
                  mQ = !DQ && LQ.layer.closeLabelKey ? LQ.layer.closeLabelKey : oQ.labelKey,
                  YQ = kQ ? [{
                    ...oQ,
                    labelKey: mQ
                  }] : [],
                  AQ = Uw(LQ.layer.kind) ? [{
                    glyphs: jo("chat"),
                    labelKey: "controller:menusQuickChat"
                  }] : [];
                if ("cursor" === FQ) return qQ.push({
                  glyphs: jo("menuConfirm"),
                  labelKey: "controller:menusClick"
                }), qQ.push({
                  glyphs: jo("menuSecondary"),
                  labelKey: "controller:menusRightClick"
                }), qQ.push(...YQ), qQ.push(...AQ), qQ.push({
                  glyphs: ["RightStick"],
                  labelKey: "controller:menusScroll"
                }), WL() && qQ.push({
                  glyphs: jo("menuToggleCursor"),
                  labelKey: "controller:menusFocusMode"
                }), qQ;
                const tQ = dL.getFocused();
                tQ && (0, IL.b)(tQ) ? qQ.push({
                  glyphs: ["Left", "Right"],
                  labelKey: "controller:menusAdjust"
                }) : tQ && (0, JQ.F)(tQ) ? qQ.push({
                  glyphs: [],
                  labelKey: "controller:menusUseMouse"
                }) : qQ.push({
                  glyphs: jo("menuConfirm"),
                  labelKey: "controller:menusSelect"
                });
                const eQ = tQ ? null === (QQ = bw(tQ)) || void 0 === QQ ? void 0 : QQ.dataset.padSecondary : void 0;
                eQ && qQ.push({
                  glyphs: jo("menuSecondary"),
                  labelKey: eQ
                }), qQ.push(...null !== tQ && void 0 !== tQ && tQ.closest("[data-pad-friends-column]") ? [oQ] : YQ), qQ.push(...AQ);
                const MQ = "home" === LQ.layer.kind;
                gw(LQ.root) || !zw(LQ.root) && !Pw(LQ) ? MQ && qQ.push({
                  glyphs: jo("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusRows"
                }) : qQ.push({
                  glyphs: jo("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusTabs"
                }), MQ && (qQ.push(...ao("inventory", "controller:menusFriends")), eQ || qQ.push({
                  glyphs: jo("menuSecondary"),
                  labelKey: "controller:menusSearch"
                }), qQ.push(...ao("pause", "controller:menusSettings")), qQ.push(...ao("leaderboard", "controller:menusNotifications")));
                const GQ = vQ.c.get("openEverythingMenuName");
                return "inGame" === vQ.c.get("gameState") && "popup" !== LQ.layer.kind && null !== GQ && ((0, vw.i)(GQ) ? qQ.push(...ao("leaderboard", "controller:menusClose")) : GQ !== kw.n.LOBBY_LEADERBOARD && qQ.push(...ao("leaderboard", "controller:menusLobby"))), qQ.push({
                  glyphs: jo("menuToggleCursor"),
                  labelKey: "controller:menusCursorMode"
                }), qQ
              })(),
              wQ = Jo(eQ.current),
              LQ = ((QQ, FQ) => `${QQ.map((QQ=>`${QQ.glyphs.join("+")}:${QQ.labelKey}`)).join("|")}@${FQ}`)(FQ, wQ);
            LQ !== QQ && (QQ = LQ, (0, kQ.unstable_batchedUpdates)((() => {
              mQ(FQ), tQ(wQ)
            }))), Eo(eQ.current)
          };
          FQ(), MQ.current = FQ;
          const wQ = requestAnimationFrame(FQ),
            LQ = setInterval(FQ, 150);
          return () => {
            MQ.current = null, cancelAnimationFrame(wQ), clearInterval(LQ), Eo(null)
          }
        }), [GQ]), (0, zQ.useLayoutEffect)((() => {
          if (!GQ) return;
          if (0 === DQ.length) return void Eo(null);
          const QQ = Jo(eQ.current);
          QQ === AQ ? Eo(eQ.current) : tQ(QQ)
        }), [GQ, DQ, AQ]), GQ && 0 !== DQ.length ? (0, aQ.jsx)("div", {
          ref: eQ,
          className: "PadButtonHintBar SmallTextBold",
          style: null === AQ ? void 0 : {
            bottom: AQ
          },
          "aria-hidden": !0,
          children: DQ.map((FQ => (0, aQ.jsxs)("div", {
            className: "PadButtonHint",
            children: [FQ.glyphs.map((QQ => (0, aQ.jsx)(Cq, {
              glyph: QQ,
              className: "PadButtonHintGlyph"
            }, QQ))), (0, aQ.jsx)("span", {
              children: QQ(FQ.labelKey)
            })]
          }, FQ.labelKey)))
        }) : null
      };
    var go = wQ(1729);
    const Po = [BQ.c, "label", "[data-pad-slider]"].join(","),
      Zo = "data-pad-cursor-probe",
      yo = QQ => {
        var FQ;
        const wQ = (QQ => {
          const FQ = [];
          for (let LQ = QQ; LQ && LQ !== document.body && LQ !== document.documentElement && (FQ.push(LQ), !(FQ.length > 8)); LQ = LQ.parentElement);
          const wQ = document.documentElement.classList.contains(YQ.q) ? FQ[FQ.length - 1] : void 0;
          null === wQ || void 0 === wQ || wQ.setAttribute(Zo, "");
          try {
            return FQ.map((QQ => ({
              element: QQ,
              cursor: getComputedStyle(QQ).cursor
            })))
          } finally {
            null === wQ || void 0 === wQ || wQ.removeAttribute(Zo)
          }
        })(QQ);
        if ("pointer" !== (null === (FQ = wQ[0]) || void 0 === FQ ? void 0 : FQ.cursor)) return null;
        let LQ = 0;
        for (; LQ + 1 < wQ.length && "pointer" === wQ[LQ + 1].cursor;) LQ++;
        return wQ[LQ].element
      },
      Bo = (QQ, FQ, wQ, LQ) => {
        const qQ = LQ.root.contains(QQ) ? LQ.root : null;
        for (let oQ = QQ; oQ && oQ !== document.body && oQ !== document.documentElement; oQ = oQ.parentElement) {
          if (oQ instanceof HTMLElement && RQ(oQ, FQ) && UQ(oQ, FQ, wQ)) return oQ;
          if (oQ === qQ) break
        }
        return "home" === LQ.layer.kind || "gamePage" === LQ.layer.kind ? ((QQ, FQ) => {
          const wQ = document.scrollingElement;
          return wQ instanceof HTMLElement && ![document.documentElement, document.body].some((FQ => {
            const wQ = getComputedStyle(FQ),
              LQ = "y" === QQ ? wQ.overflowY : wQ.overflowX;
            return "hidden" === LQ || "clip" === LQ
          })) && UQ(wQ, QQ, FQ) ? wQ : null
        })(FQ, wQ) : null
      };
    const QD = new class {
        constructor() {
          this.state = {
            x: 0,
            y: 0,
            speedRamp: 0
          }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this.confirmRepeat = (0, AQ.d)(xQ.u), this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.layerRoot = null, this.layerOrder = 0, this.layerPoints = new WeakMap, this.page = null, this.pendingPageStart = null
        }
        install() {
          const QQ = HQ.b.register({
              name: "cursor",
              isActive: () => "cursor" === RL(),
              onFrame: QQ => {
                this.onFrame(QQ)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: QQ => (0, HQ.e)(QQ) || QQ === (0, uQ.g)("menuConfirm") && (0, JQ.I)((0, YQ.c)())
            }),
            FQ = (0, wL.h)((QQ => {
              const FQ = QQ.getRoot();
              FQ && this.layerPoints.delete(FQ), FQ === this.layerRoot && (this.layerRoot = null)
            })),
            wQ = mQ.l.subscribe("appManagerUpdated|activeInputDevice", (QQ => {
              "gamepad" !== QQ && this.active && !this.hidden && this.hide()
            }));
          return () => {
            QQ(), FQ(), mQ.l.unsubscribe(wQ), this.deactivate()
          }
        }
        getHighlighted() {
          return this.isVisible() ? this.interactive : null
        }
        isVisible() {
          return this.active && !this.hidden && (0, YQ.j)()
        }
        getPoint() {
          return {
            x: this.state.x,
            y: this.state.y
          }
        }
        hide() {
          this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.GA()
        }
        activate(QQ) {
          this.active = !0, this.hidden = !1;
          const FQ = CL();
          !FQ || FQ.root && FQ.root !== QQ.root ? this.jumpTo(this.hasPosition ? this.getPoint() : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          }) : (this.setLayer(QQ), this.jumpTo(FQ.point))
        }
        jumpTo(QQ) {
          this.state = {
            x: QQ.x,
            y: QQ.y,
            speedRamp: 0
          }, this.hasPosition = !0, this.lastHitTestMs = -1 / 0
        }
        deactivate() {
          this.active && (this.active = !1, this.page = null, this.pendingPageStart = null, this.cancelPress(), this.clearHover(), this.draggedSlider = null, this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.GA())
        }
        onFrame(QQ) {
          const FQ = uL();
          if (!FQ) return;
          if (this.active || this.activate(FQ), this.followPage(FQ)) return;
          this.followLayer(FQ);
          const wQ = QQ.wokeDevice ? (0, YQ.c)() : null;
          if (wQ && this.jumpTo(wQ), !(0, YQ.j)()) return void this.hide();
          const LQ = (0, uQ.g)("menuToggleCursor");
          if (QQ.wasPressed(LQ)) return HQ.b.consumeButton(LQ), void cL(this.getHandoff(null));
          if (this.handBackToFocus(QQ)) return;
          const qQ = (0, uQ.g)("menuConfirm"),
            oQ = (0, uQ.g)("menuSecondary");
          if (QQ.wasPressed((0, uQ.g)("menuBack"))) return (0, JQ.k)(FQ.root) || (0, JQ.f)(FQ.root) || HL(), void this.GA();
          if (Bw(null, QQ, FQ)) return QQ.wasReleased(qQ) && this.press && (this.updateHit(!1), this.updateConfirm(QQ, qQ)), void this.GA();
          if (document.pointerLockElement) return void this.hide();
          const DQ = OL() ? {
              x: 0,
              y: 0
            } : (QQ => {
              const FQ = (QQ, FQ) => (QQ ? 1 : 0) - (FQ ? 1 : 0);
              return {
                x: FQ(QQ.isHeld("Right"), QQ.isHeld("Left")),
                y: FQ(QQ.isHeld("Down"), QQ.isHeld("Up"))
              }
            })(QQ),
            kQ = (0, bQ.h)().moveDeadzone,
            vQ = ((QQ, FQ) => {
              const wQ = (0, xQ.j)(QQ, pQ(FQ));
              return Math.hypot(wQ.x, wQ.y)
            })(QQ.leftStick, kQ) > 0 || 0 !== DQ.x || 0 !== DQ.y;
          if (this.hidden) {
            const FQ = QQ.wasPressed(qQ),
              wQ = QQ.wasPressed(oQ);
            if (!vQ && !SQ(QQ.rightStick) && !FQ && !wQ && !QQ.wokeDevice) return void this.GA();
            if (this.hidden = !1, this.updateHit(!1), FQ || wQ) return FQ && (this.press = {
              kind: "ignored"
            }, QQ.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.GA()
          }
          this.movePendingPageStart(vQ);
          const mQ = this.getPoint();
          this.state = CQ(this.state, {
            stick: QQ.leftStick,
            moveDeadzone: kQ,
            dpad: DQ,
            dtMs: QQ.dtMs,
            cursorSpeedPercent: (0, bQ.h)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: this.getAssistContext()
          });
          const AQ = this.state.x !== mQ.x || this.state.y !== mQ.y,
            tQ = [qQ, oQ].some((FQ => QQ.wasPressed(FQ) || QQ.wasReleased(FQ)));
          (AQ || tQ || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(AQ), this.updateConfirm(QQ, qQ), this.updateSecondary(QQ, oQ), this.updateScroll(QQ, FQ), this.GA()
        }
        followPage(QQ) {
          const FQ = "home" === QQ.layer.kind || "gamePage" === QQ.layer.kind,
            wQ = this.page;
          if (this.page = FQ ? {
              key: (0, wL.l)(QQ.layer),
              root: QQ.root
            } : null, !this.page || !wQ || wQ.root !== QQ.root || wQ.key === this.page.key) return !1;
          if (this.cancelPress(), this.secondaryArmed = !1, this.setLayer(QQ), "hybrid" === pL()) return eL = null, AL = null, ML.lock(), !0;
          const {
            key: LQ
          } = this.page;
          return this.pendingPageStart = {
            root: QQ.root,
            key: LQ,
            returning: dL.notePageEnteredByCursor(LQ),
            enteredAtMs: performance.now()
          }, !1
        }
        movePendingPageStart(QQ) {
          const FQ = this.pendingPageStart;
          if (!FQ) return;
          if (QQ || FQ.root !== this.layerRoot) return void(this.pendingPageStart = null);
          const wQ = FQ.returning ? dL.recallStop(FQ.root, FQ.key) : null;
          if (!wQ && FQ.returning && performance.now() - FQ.enteredAtMs < 1e3) return;
          const LQ = null !== wQ && void 0 !== wQ ? wQ : dL.pickInitial(FQ.root, {
            includeDisabled: !0,
            waitForContent: !0,
            enteredAtMs: FQ.enteredAtMs
          });
          LQ && (this.pendingPageStart = null, this.jumpTo((0, JQ.B)(LQ)))
        }
        setLayer(QQ) {
          this.layerRoot = QQ.root, this.layerOrder = QQ.order
        }
        followLayer(QQ) {
          var FQ;
          if (QQ.root === this.layerRoot) return;
          null !== (FQ = this.layerRoot) && void 0 !== FQ && FQ.isConnected && this.layerPoints.set(this.layerRoot, this.getPoint()), this.cancelPress(), this.draggedSlider = null, this.secondaryArmed = !1;
          const wQ = this.layerPoints.get(QQ.root),
            LQ = wQ && QQ.order <= this.layerOrder ? wQ : dL.getLayerStartPoint(QQ.root);
          this.setLayer(QQ), this.jumpTo(LQ)
        }
        getHandoff(QQ) {
          var FQ;
          return {
            point: this.getPoint(),
            element: null !== (FQ = this.interactive) && void 0 !== FQ ? FQ : this.findDraggedSliderNearby(),
            direction: QQ
          }
        }
        findDraggedSliderNearby() {
          const QQ = this.draggedSlider;
          if (null === QQ || void 0 === QQ || !QQ.isConnected) return null;
          const FQ = QQ.getBoundingClientRect(),
            {
              y: wQ
            } = this.getPoint();
          return wQ >= FQ.top - 40 && wQ <= FQ.bottom + 40 ? QQ : null
        }
        handBackToFocus(QQ) {
          if (!OL()) return !1;
          const FQ = xQ.D.find((FQ => QQ.wasPressed(FQ)));
          return !!FQ && (wQ = this.getHandoff(FQ), eL = YL(wQ), AL = null, ML.lock(), HQ.b.handOffHeldInput(), !0);
          var wQ
        }
        getAssistContext() {
          const QQ = this.interactive;
          if (null === QQ || void 0 === QQ || !QQ.isConnected) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const FQ = QQ.getBoundingClientRect();
          if (FQ.width > .4 * window.innerWidth || FQ.height > .4 * window.innerHeight) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const wQ = (0, bQ.h)().cursorMagnetism && !(0, go.d)(QQ) && !QQ.closest("[data-pad-slider]"),
            LQ = this.magnet && this.magnet !== QQ && this.magnet.isConnected ? this.magnet.getBoundingClientRect() : FQ;
          return {
            overInteractive: !0,
            magnetTarget: wQ ? {
              x: LQ.left + LQ.width / 2,
              y: LQ.top + LQ.height / 2
            } : null
          }
        }
        updateHit(QQ) {
          this.lastHitTestMs = performance.now();
          const FQ = this.getPoint(),
            wQ = document.elementFromPoint(FQ.x, FQ.y),
            LQ = wQ && !(0, eQ.m)(wQ) && (QQ => {
              var FQ;
              const wQ = uL();
              return !(wQ && !wQ.root.contains(QQ) && !QQ.closest(".tooltip-container")) || !(null !== (FQ = document.getElementById("root")) && void 0 !== FQ && FQ.contains(QQ))
            })(wQ) ? wQ : null;
          if (LQ !== this.hit) return (0, JQ.p)(this.hit, LQ, FQ), this.hit = LQ, void this.setInteractive(LQ ? (QQ => {
            const FQ = QQ.closest(Po);
            if (FQ) {
              var wQ, LQ;
              const QQ = null !== (wQ = null === (LQ = FQ.parentElement) || void 0 === LQ ? void 0 : LQ.closest("[data-pad-focusable]")) && void 0 !== wQ ? wQ : FQ;
              return (0, BQ.t)(QQ) ? {
                element: null,
                magnet: null
              } : {
                element: QQ,
                magnet: FQ
              }
            }
            const qQ = yo(QQ);
            return {
              element: qQ,
              magnet: qQ
            }
          })(LQ) : {
            element: null,
            magnet: null
          });
          QQ && LQ && (0, JQ.p)(LQ, LQ, FQ)
        }
        setInteractive(QQ) {
          let {
            element: FQ,
            magnet: wQ
          } = QQ;
          this.interactive = FQ, this.magnet = wQ
        }
        clearHover() {
          this.hit && (0, JQ.p)(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
            element: null,
            magnet: null
          })
        }
        beginPress() {
          const QQ = this.hit;
          if (!QQ || (0, JQ.F)(QQ)) return {
            kind: "ignored"
          };
          const FQ = (0, IL.b)(QQ),
            wQ = QQ.closest("[data-pad-slider]");
          return FQ && wQ ? {
            kind: "slider",
            slider: wQ,
            adjuster: FQ
          } : ((0, JQ.r)(QQ, this.getPoint()), {
            kind: "pointer",
            target: QQ
          })
        }
        applySliderFraction(QQ) {
          var FQ;
          const wQ = QQ.slider.getBoundingClientRect(),
            LQ = wQ.height > wQ.width,
            qQ = null === (FQ = QQ.slider.querySelector("[data-pad-slider-handle]")) || void 0 === FQ ? void 0 : FQ.getBoundingClientRect(),
            oQ = qQ ? LQ ? qQ.height : qQ.width : 0,
            DQ = (LQ ? wQ.height : wQ.width) - oQ;
          if (DQ <= 0) return;
          const kQ = LQ ? wQ.bottom - oQ / 2 - this.state.y : this.state.x - wQ.left - oQ / 2;
          QQ.adjuster.setFraction(Math.max(0, Math.min(1, kQ / DQ)))
        }
        updateConfirm(QQ, FQ) {
          QQ.wasPressed(FQ) && (this.press = QQ.wokeDevice ? {
            kind: "ignored"
          } : this.beginPress(), this.draggedSlider = "slider" === this.press.kind ? this.press.slider : null, this.beginRepeat());
          const wQ = this.press;
          if (!wQ) return;
          if (QQ.isHeld(FQ)) return "slider" === wQ.kind && this.applySliderFraction(wQ), void this.updateRepeat();
          this.press = null;
          const LQ = this.repeated;
          if (this.endRepeat(), !QQ.wasReleased(FQ)) return void this.endPressWithoutClick(wQ);
          const qQ = this.getPoint(),
            oQ = this.hit;
          if ("slider" === wQ.kind && wQ.adjuster.endDrag(), "pointer" === wQ.kind) {
            const QQ = null !== oQ && void 0 !== oQ ? oQ : wQ.target.isConnected ? wQ.target : null;
            QQ && (0, JQ.v)(QQ, qQ);
            const FQ = oQ && wQ.target.isConnected && !LQ ? ((QQ, FQ) => {
              for (let wQ = QQ; wQ; wQ = wQ.parentElement)
                if (wQ.contains(FQ)) return wQ;
              return null
            })(wQ.target, oQ) : null;
            FQ && (dL.noteCursorActivation(FQ), (0, eQ.f)(FQ, new MouseEvent("click", (0, JQ.R)(qQ, 0, 0))), (0, JQ.g)(FQ), (0, JQ.P)(FQ) && (0, JQ.L)(FQ))
          }
        }
        beginRepeat() {
          var QQ, FQ, wQ;
          const LQ = null !== (QQ = null === (FQ = this.hit) || void 0 === FQ ? void 0 : FQ.closest("[data-pad-repeat]")) && void 0 !== QQ ? QQ : null;
          this.repeatStop = LQ, this.repeatKey = null !== (wQ = null === LQ || void 0 === LQ ? void 0 : LQ.getAttribute("data-pad-repeat")) && void 0 !== wQ ? wQ : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
        }
        updateRepeat() {
          const QQ = this.repeatStop;
          if (!QQ) return;
          const FQ = this.hit;
          QQ.isConnected && !(0, BQ.t)(QQ) && QQ.getAttribute("data-pad-repeat") === this.repeatKey && FQ && QQ.contains(FQ) ? QQ.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, dL.noteCursorActivation(QQ), (0, eQ.f)(QQ, new MouseEvent("click", (0, JQ.R)(this.getPoint(), 0, 0)))) : this.repeatStop = null
        }
        endRepeat() {
          this.repeatStop = null, this.repeated = !1
        }
        endPressWithoutClick(QQ) {
          "slider" === QQ.kind && QQ.adjuster.endDrag(), "pointer" === QQ.kind && QQ.target.isConnected && (0, JQ.v)(QQ.target, this.getPoint())
        }
        cancelPress() {
          this.endRepeat(), this.press && (this.endPressWithoutClick(this.press), this.press = null)
        }
        updateSecondary(QQ, FQ) {
          QQ.wasPressed(FQ) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !QQ.isHeld(FQ) && (this.secondaryArmed = !1, QQ.wasReleased(FQ) && this.hit && (0, JQ.m)(this.hit, this.getPoint(), 2))
        }
        updateScroll(QQ, FQ) {
          const wQ = iQ(QQ.rightStick, QQ.dtMs);
          if (0 === wQ.x && 0 === wQ.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          this.scrollRemainder = {
            x: this.scrollRemainder.x + wQ.x,
            y: this.scrollRemainder.y + wQ.y
          };
          const LQ = Math.trunc(this.scrollRemainder.x),
            qQ = Math.trunc(this.scrollRemainder.y);
          this.scrollRemainder = {
            x: this.scrollRemainder.x - LQ,
            y: this.scrollRemainder.y - qQ
          };
          const oQ = this.hit;
          if (!oQ) return;
          let DQ = !1;
          if (0 !== qQ) {
            const QQ = Bo(oQ, "y", qQ > 0 ? 1 : -1, FQ);
            QQ && (QQ.scrollBy({
              top: qQ,
              behavior: "instant"
            }), DQ = !0)
          }
          if (0 !== LQ) {
            const QQ = Bo(oQ, "x", LQ > 0 ? 1 : -1, FQ);
            QQ && (QQ.scrollBy({
              left: LQ,
              behavior: "instant"
            }), DQ = !0)
          }
          DQ && (this.lastHitTestMs = -1 / 0)
        }
        GA() {
          nQ.set({
            x: this.state.x,
            y: this.state.y,
            visible: this.isVisible(),
            pressed: null !== this.press && "ignored" !== this.press.kind
          })
        }
      },
      FD = () => {
        const QQ = (0, zQ.useMemo)((() => new VQ), []),
          FQ = (0, YQ.z)();
        return (0, zQ.useEffect)((() => {
          if (!FQ) return;
          let wQ = 0,
            LQ = {
              of: null,
              atMs: 0,
              list: []
            };
          const qQ = document.getElementsByClassName(sL),
            oQ = QQ => {
              for (const FQ of [...qQ]) FQ !== QQ && FQ.classList.remove(sL)
            },
            DQ = () => {
              var FQ;
              wQ = requestAnimationFrame(DQ);
              const qQ = (() => {
                const QQ = dL.getFocused();
                if (dL.isActive() && null !== QQ && void 0 !== QQ && QQ.isConnected) return QQ;
                const FQ = QD.getHighlighted();
                return null !== FQ && void 0 !== FQ && FQ.isConnected ? FQ : null
              })();
              oQ(qQ), qQ && !qQ.classList.contains(sL) && qQ.classList.add(sL);
              const kQ = null !== (FQ = null === qQ || void 0 === qQ ? void 0 : qQ.closest("[data-pad-reticle-box]")) && void 0 !== FQ ? FQ : qQ;
              QQ.show(kQ ? ((QQ, FQ) => {
                let wQ = QQ.left,
                  LQ = QQ.top,
                  qQ = QQ.right,
                  oQ = QQ.bottom;
                for (const DQ of FQ) {
                  if (!DQ) continue;
                  const QQ = TQ(DQ);
                  wQ = Math.max(wQ, QQ.left), LQ = Math.max(LQ, QQ.top), qQ = Math.min(qQ, QQ.right), oQ = Math.min(oQ, QQ.bottom)
                }
                return qQ <= wQ || oQ <= LQ ? null : {
                  left: wQ,
                  top: LQ,
                  width: qQ - wQ,
                  height: oQ - LQ
                }
              })(kQ.getBoundingClientRect(), (QQ => {
                const FQ = performance.now();
                return (LQ.of !== QQ || FQ - LQ.atMs > 500) && (LQ = {
                  of: QQ,
                  atMs: FQ,
                  list: [OQ(QQ, "y"), OQ(QQ, "x")]
                }), LQ.list
              })(kQ)) : null)
            };
          return wQ = requestAnimationFrame(DQ), () => {
            cancelAnimationFrame(wQ), oQ(null), QQ.hide()
          }
        }), [FQ, QQ]), (0, aQ.jsx)(hQ, {
          placer: QQ,
          className: "PadFocusRing"
        })
      },
      wD = (QQ, FQ) => {
        QQ.style.transform = `translate3d(${FQ.x}px, ${FQ.y}px, 0)`, QQ.classList.toggle("Visible", FQ.visible), QQ.classList.toggle("Pressed", FQ.pressed)
      },
      LD = () => {
        const QQ = (0, zQ.useRef)(null);
        return (0, zQ.useEffect)((() => {
          const FQ = nQ.subscribe((FQ => {
            QQ.current && wD(QQ.current, FQ)
          }));
          return QQ.current && wD(QQ.current, nQ.get()), FQ
        }), []), (0, aQ.jsx)("div", {
          ref: QQ,
          className: "PadCursorView",
          "aria-hidden": "true",
          children: (0, aQ.jsx)("div", {
            className: "PadCursorGlyph",
            children: "+"
          })
        })
      },
      qD = "#ncmp__modal.ncmp__active",
      oD = [{
        id: "nitro-consent-banner",
        find: () => document.querySelector(qD) ? null : document.querySelector("#ncmp__tool > .ncmp__banner.ncmp__active"),
        startSelectors: ["[data-ncmp-cmd='reject']", "[data-ncmp-cmd='showModal']"]
      }, {
        id: "nitro-consent-modal",
        find: () => document.querySelector(qD),
        startSelectors: ["[data-ncmp-cmd='reject']"]
      }, {
        id: "google-consent",
        find: () => document.querySelector(".fc-consent-root"),
        startSelectors: [".fc-cta-do-not-consent", ".fc-cta-manage-options"]
      }],
      DD = "PadOverThirdParty",
      kD = new Set(oD.map((QQ => QQ.id))),
      vD = () => {
        const QQ = oD.map((QQ => {
            let {
              id: FQ,
              find: wQ,
              startSelectors: LQ
            } = QQ;
            return (0, wL.j)({
              id: FQ,
              kind: "popup",
              getRoot: () => {
                const QQ = wQ(),
                  FQ = QQ ? ((QQ, FQ) => {
                    var wQ;
                    for (const LQ of FQ) {
                      const FQ = QQ.querySelector(LQ);
                      if (FQ) return FQ
                    }
                    return null !== (wQ = [...QQ.querySelectorAll("button")].find((QQ => !QQ.matches(".fc-cta-consent, [data-ncmp-cmd='save']")))) && void 0 !== wQ ? wQ : null
                  })(QQ, LQ) : null;
                if (QQ && FQ && !FQ.hasAttribute("data-pad-default-focus")) {
                  for (const FQ of QQ.querySelectorAll("[data-pad-default-focus]")) FQ.removeAttribute("data-pad-default-focus");
                  for (const FQ of QQ.querySelectorAll("[data-pad-hint-bar-avoid]")) FQ.removeAttribute("data-pad-hint-bar-avoid");
                  FQ.setAttribute("data-pad-default-focus", ""), ((QQ, FQ) => {
                    let wQ = QQ;
                    for (let LQ = QQ.parentElement; LQ && FQ.contains(LQ) && !(LQ.getBoundingClientRect().height >= window.innerHeight / 2); LQ = LQ.parentElement) wQ = LQ;
                    return wQ
                  })(FQ, QQ).setAttribute("data-pad-hint-bar-avoid", "")
                }
                return QQ
              },
              close: null,
              memoryKey: null
            })
          })),
          FQ = document.documentElement,
          wQ = DQ.f.onFrame((() => {
            const QQ = (0, YQ.j)() ? uL() : null,
              wQ = !!QQ && (LQ = QQ.layer, kD.has(LQ.id));
            var LQ;
            FQ.classList.contains(DD) !== wQ && FQ.classList.toggle(DD, wQ)
          }));
        return () => {
          for (const FQ of QQ) FQ();
          wQ(), FQ.classList.remove(DD)
        }
      },
      mD = "PadLargePointer",
      uD = () => {
        (0, zQ.useEffect)((() => {
          const QQ = (0, eQ.h)(document.body),
            FQ = dL.install(),
            wQ = QD.install(),
            LQ = vD();
          return () => {
            QQ(), FQ(), wQ(), LQ()
          }
        }), []);
        const {
          largePointer: QQ
        } = (0, bQ.o)(), FQ = (0, Ko.n)() && QQ;
        return (0, zQ.useEffect)((() => {
          if (FQ) return document.documentElement.classList.add(mD), () => {
            document.documentElement.classList.remove(mD)
          }
        }), [FQ]), (0, kQ.createPortal)((0, aQ.jsxs)(aQ.Fragment, {
          children: [(0, aQ.jsx)(no, {}), (0, aQ.jsx)(FD, {}), (0, aQ.jsx)(LD, {})]
        }), document.body)
      };
    var HD = wQ(8537),
      bD = wQ(8566),
      YD = wQ(8550);
    wQ(8575);
    const xD = (QQ, FQ) => {
        const [wQ, LQ] = (0, zQ.useState)(!1), [qQ, oQ] = (0, zQ.useState)(null), DQ = (0, zQ.useRef)(null), kQ = (0, zQ.useCallback)((QQ => {
          DQ.current = QQ, oQ(QQ)
        }), []), vQ = (0, zQ.useCallback)((() => {
          LQ(!1), kQ(null)
        }), [kQ]), uQ = (0, zQ.useCallback)((() => {
          LQ(!0)
        }), []), HQ = (0, zQ.useCallback)(((QQ, FQ) => {
          kQ((0, YD.B)(QQ, FQ, DQ.current))
        }), [kQ]);
        (0, zQ.useLayoutEffect)((() => (FQ(wQ), (0, zo.u)(QQ, wQ), mQ.l.GA(zo.p), () => {
          FQ(!1), (0, zo.u)(QQ, !1), mQ.l.GA(zo.p)
        })), [wQ, QQ, FQ]), (0, tq.g)("appManagerUpdated|activeInputDevice", (QQ => {
          "gamepad" !== QQ && vQ()
        })), (0, tq.g)("appManagerUpdated|gameState", (QQ => {
          "inGame" !== QQ && vQ()
        }));
        const bQ = () => {
          (0, vw.m)() && vQ()
        };
        return (0, tq.g)("appManagerUpdated|openEverythingMenuName", bQ), (0, tq.g)("appManagerUpdated|openInGameMenuName", bQ), {
          open: wQ,
          picked: qQ,
          pickedRef: DQ,
          show: uQ,
          aim: HQ,
          close: vQ
        }
      },
      AD = QQ => {
        let {
          className: FQ,
          slotCount: wQ,
          picked: LQ,
          slotLabel: qQ,
          renderSlot: oQ,
          centre: DQ
        } = QQ;
        const kQ = Array.from({
          length: wQ
        }, ((QQ, FQ) => FQ));
        return (0, aQ.jsx)("div", {
          className: jQ()("EmoteWheelOverlay PadRadialWheel", FQ),
          children: (0, aQ.jsxs)("div", {
            className: "EmoteWheel",
            style: {
              width: 2 * YD.p + "rem",
              height: 2 * YD.p + "rem"
            },
            children: [(0, aQ.jsxs)("svg", {
              className: "EmoteWheelSvg",
              viewBox: `0 0 ${YD.k} ${YD.k}`,
              children: [kQ.map((QQ => (0, aQ.jsx)("path", {
                d: (0, YD.t)(QQ, wQ, YD.d, YD.f, YD.i),
                className: jQ()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: QQ === LQ
                }),
                "aria-label": qQ(QQ)
              }, QQ))), (0, aQ.jsx)("circle", {
                className: "EmoteWheelOuterRing",
                cx: YD.d,
                cy: YD.d,
                r: YD.i
              }), (0, aQ.jsx)("circle", {
                className: "EmoteWheelInnerRing",
                cx: YD.d,
                cy: YD.d,
                r: YD.f
              }), null !== LQ && (0, aQ.jsx)("path", {
                className: "EmoteWheelWedgeOutline",
                d: (0, YD.t)(LQ, wQ, YD.d, YD.f, YD.i)
              })]
            }), kQ.map((QQ => {
              const FQ = (0, YD.y)(QQ, wQ);
              return (0, aQ.jsx)("div", {
                className: jQ()("PadRadialWheelSlot SmallTextBold", {
                  PadRadialWheelSlotPicked: QQ === LQ
                }),
                style: {
                  left: `calc(50% + ${YD.b*Math.cos(FQ)}rem)`,
                  top: `calc(50% + ${YD.b*Math.sin(FQ)}rem)`
                },
                "aria-hidden": !0,
                children: oQ(QQ)
              }, QQ)
            })), (0, aQ.jsx)("div", {
              className: "EmoteWheelHint SmallTextBold",
              children: DQ
            })]
          })
        })
      },
      tD = uo.length,
      eD = () => {
        const {
          t: QQ
        } = (0, qQ.y)(), FQ = xD("chat", Iw.o), wQ = (0, zQ.useMemo)((() => uo.map((FQ => QQ(FQ)))), [QQ]);
        return (0, tq.g)(Iw.l, (() => {
          FQ.open || (0, HD.i)() || (0, bD.r)() || "inGame" !== vQ.c.get("gameState") || (0, vw.m)() || !(0, sw.d)() || FQ.show()
        })), (0, tq.g)(Iw.g, (QQ => {
          FQ.open && FQ.aim(QQ, tD)
        })), (0, tq.g)(Iw.j, (() => {
          var QQ;
          if (!FQ.open) return;
          const LQ = FQ.pickedRef.current;
          null !== LQ ? Ho.claim(performance.now()) && (FQ.close(), null === (QQ = (0, sw.d)()) || void 0 === QQ || QQ.sendLine(wQ[LQ])) : FQ.close()
        })), (0, tq.g)(Iw.h, FQ.close), FQ.open ? (0, aQ.jsx)(AD, {
          className: "QuickChatWheel",
          slotCount: tD,
          picked: FQ.picked,
          slotLabel: QQ => wQ[QQ],
          renderSlot: QQ => wQ[QQ],
          centre: null !== FQ.picked ? wQ[FQ.picked] : QQ("controller:quickChatPick")
        }) : null
      },
      MD = () => {
        const {
          t: QQ
        } = (0, qQ.y)(), FQ = xD("actionButton", bD.t), [wQ, LQ] = (0, zQ.useState)([]);
        if ((0, tq.g)(bD.l, (QQ => {
            FQ.open || (0, HD.i)() || (0, Iw.e)() || "inGame" !== vQ.c.get("gameState") || (0, vw.m)() || (LQ(QQ), FQ.show())
          })), (0, tq.g)(bD.d, (QQ => {
            FQ.open && FQ.aim(QQ, wQ.length)
          })), (0, tq.g)(bD.i, (() => {
            if (!FQ.open) return;
            const QQ = FQ.pickedRef.current;
            FQ.close(), null !== QQ && mQ.l.GA(bD.o, wQ[QQ])
          })), (0, tq.g)(bD.g, FQ.close), !FQ.open) return null;
        const oQ = null !== FQ.picked ? wQ[FQ.picked] : null;
        return (0, aQ.jsx)(AD, {
          className: "ActionWheel",
          slotCount: wQ.length,
          picked: FQ.picked,
          slotLabel: FQ => {
            const LQ = wQ[FQ];
            return "reload" === LQ.kind ? QQ("controller:gameplayReload") : "customButton" === LQ.kind ? LQ.description || LQ.icon : "touchButton" === LQ.kind && "string" === typeof LQ.label ? LQ.label : ""
          },
          renderSlot: QQ => (0, aQ.jsx)(iq, {
            action: wQ[QQ]
          }),
          centre: oQ ? (0, aQ.jsx)(iq, {
            action: oQ
          }) : QQ("controller:actionWheelPick")
        })
      };
    var GD = wQ(96);
    const pD = () => ((0, zQ.useEffect)((() => {
        var QQ, FQ;
        const wQ = (0, eQ.h)(document.getElementById("root")),
          LQ = (0, YQ.e)(),
          qQ = (() => {
            const QQ = [mQ.l.subscribe(Fq.f, (() => {
                oq("blockBreak")
              })), mQ.l.subscribe("damagedByOtherPlayer", (() => {
                oq("damage")
              })), mQ.l.subscribe("yourAttackHit", (QQ => {
                let {
                  hitSelf: FQ
                } = QQ;
                FQ || oq("hit")
              }))],
              FQ = DQ.f.onActivePadChanged((QQ => {
                QQ && oq("connect")
              }));
            return () => {
              for (const FQ of QQ) mQ.l.unsubscribe(FQ);
              FQ()
            }
          })(),
          oQ = (() => {
            const QQ = new Hq({
              getVisitId: uq.c,
              peekVisitId: uq.peekVisitSessionId,
              readReportedVisitId: () => {
                const QQ = mq.m.getItem(bq);
                return "string" === typeof QQ ? QQ : null
              },
              writeReportedVisitId: QQ => {
                mq.m.setItem(bq, QQ)
              },
              isPadActive: YQ.j,
              getPadFamily: () => {
                var QQ, FQ;
                return null !== (QQ = null === (FQ = DQ.f.getActivePad()) || void 0 === FQ ? void 0 : FQ.family) && void 0 !== QQ ? QQ : null
              },
              canReport: kq.i,
              getInputType: vq.e,
              hY: kq.m
            });
            let FQ = 0,
              wQ = null;
            const LQ = qQ => {
                null === wQ && ("notReady" !== QQ.check(qQ) || null !== wQ || FQ >= 20 || (FQ++, wQ = setTimeout((() => {
                  wQ = null, LQ(!1)
                }), 3e3)))
              },
              qQ = mQ.l.subscribe("appManagerUpdated|activeInputDevice", (() => {
                LQ(!0)
              })),
              oQ = (0, uq.i)((() => {
                FQ = 0, LQ(!0)
              }));
            return () => {
              mQ.l.unsubscribe(qQ), oQ(), null !== wQ && clearTimeout(wQ)
            }
          })(),
          kQ = DQ.f.onFrame(((QQ, FQ) => {
            const wQ = (0, YQ.o)(QQ);
            HQ.b.dispatch(QQ, FQ, wQ)
          }));
        let uQ = null !== (QQ = null === (FQ = DQ.f.getActivePad()) || void 0 === FQ ? void 0 : FQ.family) && void 0 !== QQ ? QQ : null;
        const xQ = DQ.f.onActivePadChanged((QQ => {
            var FQ, wQ;
            (HQ.b.reset(), (0, YQ.t)(), mQ.l.GA(DQ.e, QQ), (null !== (FQ = null === QQ || void 0 === QQ ? void 0 : QQ.family) && void 0 !== FQ ? FQ : null) !== uQ) && (uQ = null !== (wQ = null === QQ || void 0 === QQ ? void 0 : QQ.family) && void 0 !== wQ ? wQ : null, mQ.l.GA(bQ.c, (0, bQ.h)()));
            !QQ && (0, YQ.j)() && (0, YQ.x)(vQ.c.get("isTouchScreen") ? "touch" : "keyboardMouse")
          })),
          AQ = () => {
            "visible" !== document.visibilityState && HQ.b.clear()
          },
          tQ = () => {
            HQ.b.clear()
          };
        document.addEventListener("visibilitychange", AQ), window.addEventListener("blur", tQ), DQ.f.start(), (0, Dq.p)();
        const MQ = null;
        return () => {
          wQ(), LQ(), qQ(), oQ(), kQ(), xQ(), document.removeEventListener("visibilitychange", AQ), window.removeEventListener("blur", tQ), DQ.f.stop(), null === MQ || void 0 === MQ || MQ()
        }
      }), []), (0, aQ.jsxs)("div", {
        className: "ControllerRoot",
        children: [(0, aQ.jsx)(Uq, {}), (0, aQ.jsx)(fq, {}), (0, aQ.jsx)(Vq, {}), (0, aQ.jsx)(No, {}), (0, aQ.jsx)(uD, {}), (0, aQ.jsx)(eD, {}), (0, aQ.jsx)(MD, {})]
      })),
      cD = () => GD.featureFlags.useControllerSupport ? (0, aQ.jsx)(pD, {}) : null;
    var CD = wQ(7975),
      SD = wQ(8590);
    const iD = new Set(Dq.l),
      WD = QQ => `${SD.m}${(0,bQ.i)()}/${QQ}`,
      RD = QQ => {
        if (!(0, SD.i)(QQ)) return null;
        const [FQ, wQ] = QQ.slice(SD.m.length).split("/");
        return (0, CD.f)(FQ) && iD.has(wQ) ? (0, Dq.i)(FQ, wQ) : null
      };
    var OD = wQ(8596);
    const sD = () => {
        const {
          t: QQ
        } = (0, qQ.y)(), FQ = (0, YQ.z)(), {
          gameState: wQ,
          isUiHidden: LQ
        } = (0, vQ.l)(["gameState", "isUiHidden"]), {
          hideButtonHints: oQ,
          sneakMode: DQ
        } = (0, bQ.o)(), [kQ, mQ] = (0, zQ.useState)(OD.e);
        return (0, tq.g)(Iq.p, mQ), FQ && !LQ && "inGame" === wQ && kQ ? (0, aQ.jsxs)("div", {
          className: "PadSneakChip SmallTextBold",
          children: [!oQ && (0, aQ.jsx)(Cq, {
            glyph: (0, uQ.g)("toggle" === DQ ? "sneak" : "sneakToggle")
          }), (0, aQ.jsx)("span", {
            children: QQ("controller:gameplaySneaking")
          })]
        }) : null
      },
      rD = 12,
      ID = QQ => {
        let {
          trigger: FQ,
          className: wQ,
          children: LQ
        } = QQ;
        const qQ = (0, zQ.useRef)(null);
        return (0, zQ.useEffect)((() => {
          let QQ = 0;
          const wQ = OQ(FQ, "y"),
            LQ = () => {
              QQ = requestAnimationFrame(LQ);
              const oQ = qQ.current;
              if (!oQ || null === FQ || void 0 === FQ || !FQ.isConnected) return;
              const {
                left: DQ,
                top: kQ
              } = function(QQ, FQ, wQ) {
                let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                const oQ = QQ.left + QQ.width / 2,
                  DQ = Math.max(rD, wQ.width - rD - FQ.width),
                  kQ = Math.min(Math.max(oQ - FQ.width / 2, rD), DQ),
                  vQ = wQ.height - LQ;
                let mQ = 0,
                  uQ = vQ;
                if (qQ) {
                  const QQ = Math.max(0, qQ.top),
                    LQ = Math.min(vQ, qQ.bottom);
                  LQ - QQ >= Math.max(wQ.height / 2, FQ.height + 24) && (mQ = QQ, uQ = LQ)
                }
                const HQ = QQ.top + QQ.height / 2 < (mQ + uQ) / 2 ? uQ - rD - FQ.height : mQ + rD;
                return {
                  left: kQ,
                  top: Math.max(rD, HQ)
                }
              }(FQ.getBoundingClientRect(), {
                width: oQ.offsetWidth,
                height: oQ.offsetHeight
              }, {
                width: window.innerWidth,
                height: window.innerHeight
              }, parseFloat(document.documentElement.style.getPropertyValue(fo)) || 0, null !== wQ && void 0 !== wQ && wQ.isConnected ? wQ.getBoundingClientRect() : null);
              oQ.style.transform = `translate3d(${Math.round(DQ)}px, ${Math.round(kQ)}px, 0)`, oQ.style.visibility = "visible"
            };
          return LQ(), () => {
            cancelAnimationFrame(QQ)
          }
        }), [FQ]), (0, aQ.jsx)("div", {
          ref: qQ,
          className: wQ,
          style: {
            position: "fixed",
            left: 0,
            top: 0,
            visibility: "hidden"
          },
          children: LQ
        })
      };
    var UD = wQ(1079),
      ND = wQ(8601),
      TD = wQ(1451),
      KD = wQ(8604),
      zD = wQ(8611);
    const lD = {
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
      jD = () => {
        const {
          t: QQ
        } = (0, qQ.y)(), FQ = (0, YQ.z)(), wQ = (0, ND.c)(), LQ = (0, jq.l)("_tasks"), oQ = (0, jq.l)("_availableLeaderboards");
        if (!FQ) return null;
        const DQ = (QQ => {
          let {
            hasShop: FQ,
            hasTasksOrLeaderboards: wQ,
            canInvite: LQ
          } = QQ;
          const qQ = [];
          return FQ && qQ.push("shop"), wQ && qQ.push("tasks"), LQ && qQ.push("invite"), qQ.push("leave"), qQ
        })({
          hasShop: wQ,
          hasTasksOrLeaderboards: !(!LQ && !oQ),
          canInvite: !!GD.featureFlags.canUseInviteLinks
        });
        return (0, aQ.jsx)("div", {
          className: "PadLobbyShortcuts",
          children: DQ.map((FQ => {
            const {
              icon: wQ,
              labelKey: LQ
            } = lD[FQ], qQ = "leave" === FQ ? TD.F : TD.f;
            return (0, aQ.jsx)(qQ, {
              className: "PadLobbyShortcut",
              onClick: () => {
                (QQ => {
                  switch (QQ) {
                    case "shop":
                      return mQ.l.GA(zD.k), void vQ.c.set({
                        openEverythingMenuName: kw.n.SHOP
                      });
                    case "tasks":
                      return void mQ.l.GA("toggleMenu", "retentionFeatures");
                    case "invite":
                      return void mQ.l.GA("toggleMenu", "inviteLink");
                    case "leave":
                      (0, KD.b)()
                  }
                })(FQ)
              },
              children: (0, aQ.jsxs)("div", {
                className: "PadLobbyShortcutInner",
                children: [(0, aQ.jsx)(UD.c, {
                  name: wQ
                }), (0, aQ.jsx)("span", {
                  children: QQ(LQ)
                })]
              })
            }, FQ)
          }))
        })
      };
    var aD = wQ(1940);
    const XD = xQ.C,
      fD = ["forward", "backward", "left", "right", "sprint"],
      VD = QQ => QQ.ctrlKey || QQ.altKey || "Alt" === QQ.key || "ArrowUp" === QQ.key || "ArrowDown" === QQ.key || "Tab" === QQ.code || "/" === QQ.key || "Slash" === QQ.code;
    class hD {
      constructor() {
        this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(xQ.U).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
      }
      setArmed(QQ) {
        this.armed = QQ
      }
      blocksGameplay() {
        return this.armed || this.consumeNextFrame
      }
      onKeyDown(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !this.armed || FQ ? !QQ.repeat && this.swallowedKeys.delete(QQ.code) ? {
          swallow: !1,
          continues: !1
        } : {
          swallow: this.swallowedKeys.has(QQ.code),
          continues: !1
        } : "Escape" === QQ.key || QQ.repeat && !this.swallowedKeys.has(QQ.code) ? {
          swallow: !1,
          continues: !1
        } : wQ ? {
          swallow: !1,
          continues: !0
        } : (this.swallowedKeys.add(QQ.code), {
          swallow: !0,
          continues: (0, YQ.g)(QQ)
        })
      }
      onKeyUp(QQ) {
        return this.swallowedKeys.delete(QQ.code)
      }
      forgetKeys() {
        this.swallowedKeys.clear()
      }
      onPadFrame(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          LQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const qQ = (0, xQ.q)(QQ.values, this.previousHeld),
          oQ = null === wQ ? -1 : (0, xQ.l)(wQ),
          DQ = oQ >= 0 && qQ[oQ] && !this.previousHeld[oQ],
          kQ = qQ.some(((QQ, FQ) => QQ && !this.previousHeld[FQ] && FQ !== oQ)),
          vQ = Math.hypot(QQ.leftStick.x, QQ.leftStick.y) >= XD,
          mQ = Math.hypot(QQ.rightStick.x, QQ.rightStick.y) >= XD,
          uQ = vQ && !this.leftStickWasPressed || mQ && !this.rightStickWasPressed;
        this.previousHeld = qQ, this.leftStickWasPressed = vQ, this.rightStickWasPressed = mQ;
        let HQ = !1;
        this.consumeNextFrame && (this.consumeNextFrame = !1, HQ = !0);
        const bQ = !FQ && DQ && !LQ,
          YQ = !bQ && this.armed && !FQ && (kQ || uQ);
        return (bQ || YQ) && (this.consumeNextFrame = !0, this.consumeAfterContinue = YQ, HQ = !0), {
          continues: YQ,
          back: bQ,
          consumeHeld: HQ
        }
      }
      consumeLeavesMoveStick() {
        return this.consumeAfterContinue
      }
    }
    const JD = new Set([...aD.k, ...aD.A]),
      ED = QQ => ((QQ, FQ, wQ) => {
        const LQ = Object.keys(FQ).filter((LQ => !wQ.has(LQ) && FQ[LQ].includes(QQ)));
        return LQ.length > 0 && LQ.every((QQ => fD.includes(QQ)))
      })(QQ, aD.u, JD),
      nD = (QQ, FQ, wQ) => {
        const LQ = new hD,
          qQ = QQ => {
            if (!QQ.isTrusted) return;
            const {
              swallow: wQ,
              continues: qQ
            } = LQ.onKeyDown(QQ, !(0, YQ.G)(QQ) || (0, Qq.j)() || (0, vw.m)(), ED(QQ.code));
            wQ && (QQ.stopImmediatePropagation(), VD(QQ) && QQ.preventDefault()), qQ && ((0, YQ.x)("keyboardMouse"), FQ())
          },
          oQ = QQ => {
            QQ.isTrusted && LQ.onKeyUp(QQ) && (QQ.stopImmediatePropagation(), VD(QQ) && QQ.preventDefault())
          },
          kQ = () => {
            LQ.forgetKeys()
          };
        window.addEventListener("keydown", qQ, !0), window.addEventListener("keyup", oQ, !0), window.addEventListener("blur", kQ);
        const vQ = DQ.f.onFrame((QQ => {
            const qQ = HQ.b.getActiveConsumerName(),
              oQ = wQ(),
              DQ = oQ ? (0, uQ.g)("menuBack") : null,
              kQ = null !== qQ && "gameplay" !== qQ,
              {
                continues: vQ,
                back: mQ,
                consumeHeld: xQ
              } = LQ.onPadFrame(QQ, kQ, DQ, (0, YQ.m)(QQ));
            if (xQ) {
              const QQ = (0, bQ.h)().swapSticks ? "right" : "left";
              HQ.b.consumeAllHeld(LQ.consumeLeavesMoveStick() ? QQ : null)
            }
            mQ ? null === oQ || void 0 === oQ || oQ() : vQ && FQ()
          })),
          mQ = (0, Qq.m)(`pressToContinue:${QQ}`, (() => LQ.blocksGameplay()));
        return {
          setArmed: QQ => {
            LQ.setArmed(QQ)
          },
          dispose: () => {
            window.removeEventListener("keydown", qQ, !0), window.removeEventListener("keyup", oQ, !0), window.removeEventListener("blur", kQ), vQ(), mQ()
          }
        }
      };
    var gD = wQ(4837),
      PD = wQ(3294),
      ZD = wQ(3029),
      yD = wQ(7977);
    const BD = QQ => {
        let {
          text: FQ
        } = QQ;
        return (0, aQ.jsx)("div", {
          className: "ControllerSettingsHeading",
          children: FQ
        })
      },
      dD = QQ => {
        let {
          label: FQ,
          hint: wQ,
          options: LQ,
          value: oQ,
          onChange: DQ
        } = QQ;
        const {
          t: kQ
        } = (0, qQ.y)();
        return (0, aQ.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, aQ.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: [(0, aQ.jsxs)("div", {
              className: "ControllerChoiceText",
              children: [(0, aQ.jsx)("div", {
                className: "SliderText",
                children: FQ
              }), wQ && (0, aQ.jsx)("div", {
                className: "ControllerSettingsHint",
                children: wQ
              })]
            }), (0, aQ.jsx)(ZD.d, {
              options: LQ.map((QQ => ({
                label: "label" in QQ ? QQ.label : kQ(QQ.labelKey),
                value: QQ.value
              }))),
              value: oQ,
              onChange: QQ => {
                DQ(QQ.value)
              }
            })]
          })
        })
      },
      Qk = QQ => {
        let {
          settingKey: FQ,
          label: wQ,
          range: LQ,
          format: qQ
        } = QQ;
        const oQ = (0, bQ.o)();
        return (0, aQ.jsx)(gD.g, {
          name: wQ,
          min: LQ.min,
          max: LQ.max,
          step: LQ.step,
          padStep: LQ.step,
          initValue: oQ[FQ],
          format: qQ,
          onChange: QQ => {
            (0, bQ.k)({
              [FQ]: (0, yD.A)(QQ, LQ)
            })
          }
        })
      };
    var Fk = wQ(8614),
      wk = wQ(8621);
    const Lk = QQ => QQ instanceof DOMException && ("SecurityError" === QQ.name || "NotAllowedError" === QQ.name),
      qk = QQ => {
        const [FQ] = [...QQ.controllers].sort(((QQ, FQ) => wk.u[QQ] - wk.u[FQ]));
        return wk.q[FQ]
      },
      Dk = QQ => {
        (0, Fk.d)().allowPhoneMotion().catch((FQ => {
          QQ && Lk(FQ) ? QQ() : console.warn("Could not enable the motion sensor", FQ)
        }))
      },
      kk = {
        waiting: "controller:settingsGyroPhoneWaiting",
        noSensor: "controller:settingsGyroPhoneNoSensor",
        on: "controller:settingsGyroPhoneOn",
        denied: "controller:settingsGyroPhoneDenied"
      },
      vk = QQ => {
        let {
          status: FQ
        } = QQ;
        const {
          t: wQ
        } = (0, qQ.y)(), [LQ, oQ] = (0, zQ.useState)(null), DQ = `${FQ.controllers.join(",")}|${FQ.phoneMotion}`;
        (0, zQ.useEffect)((() => {
          oQ(null)
        }), [DQ]);
        const kQ = () => {
          (0, Fk.d)().connectController().then((QQ => {
            oQ(QQ > 0 ? "openFailed" : null)
          })).catch((QQ => {
            Lk(QQ) ? oQ("needsClick") : console.warn("Could not connect motion controller", QQ)
          }))
        };
        if (FQ.hidSupported) {
          let QQ = wQ("controller:settingsGyroConnectHint");
          return "needsClick" === LQ ? QQ = wQ("controller:settingsGyroConnectNeedsClick") : "openFailed" === LQ ? QQ = wQ("controller:settingsGyroOpenFailed") : FQ.controllers.length > 0 && (QQ = wQ("controller:settingsGyroConnected", {
            name: qk(FQ)
          })), (0, aQ.jsx)("div", {
            className: "SettingBox ControllerChoiceSetting",
            children: (0, aQ.jsxs)("div", {
              className: "ControllerChoiceRow",
              children: [(0, aQ.jsx)("div", {
                className: "ControllerSettingsHint",
                children: QQ
              }), (0, aQ.jsx)(TD.f, {
                onClick: kQ,
                children: wQ("controller:settingsGyroConnect")
              })]
            })
          })
        }
        if ("needsPermission" === FQ.phoneMotion) return (0, aQ.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, aQ.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: ["needsTap" === LQ && (0, aQ.jsx)("div", {
              className: "ControllerSettingsHint",
              children: wQ("controller:settingsGyroAllowNeedsTap")
            }), (0, aQ.jsx)(TD.f, {
              onClick: () => {
                Dk((() => {
                  oQ("needsTap")
                }))
              },
              children: wQ("controller:settingsGyroAllowMotion")
            })]
          })
        });
        const vQ = kk[FQ.phoneMotion];
        return vQ ? (0, aQ.jsx)("div", {
          className: "ControllerSettingsHint",
          children: wQ(vQ)
        }) : null
      },
      mk = () => {
        const {
          t: QQ
        } = (0, qQ.y)(), FQ = (0, bQ.o)(), wQ = (0, Fk.g)(), LQ = (0, YQ.C)(), oQ = !wQ.hidSupported && wQ.phoneSupported && !wQ.padConnected, DQ = (wQ.hidSupported || wQ.phoneSupported) && !oQ, kQ = (0, uQ.g)("pause");
        return (0, aQ.jsxs)(aQ.Fragment, {
          children: [(0, aQ.jsx)(BD, {
            text: QQ("controller:settingsGyro")
          }), oQ && (0, aQ.jsx)("div", {
            className: "ControllerSettingsHint",
            children: QQ("controller:settingsGyroPhoneNeedsController")
          }), !DQ && !oQ && (0, aQ.jsx)("div", {
            className: "ControllerSettingsHint",
            children: QQ(wQ.hidBlocked || wQ.phoneBlocked ? "controller:settingsGyroBlocked" : "controller:settingsGyroUnsupported")
          }), DQ && (0, aQ.jsx)(gD.e, {
            label: QQ(wQ.hidSupported ? "controller:settingsGyroToggle" : "controller:settingsGyroTogglePhone"),
            checked: FQ.gyroAiming,
            onClick: QQ => {
              var FQ, wQ;
              (0, bQ.k)({
                gyroAiming: QQ
              });
              const LQ = null === (FQ = null === (wQ = navigator.userActivation) || void 0 === wQ ? void 0 : wQ.isActive) || void 0 === FQ || FQ;
              if (!QQ || !LQ) return;
              const qQ = (0, Fk.d)(),
                oQ = qQ.getStatus();
              oQ.hidSupported ? qQ.connectControllerIfNoneGranted().catch((QQ => {
                console.warn("Motion controller picker unavailable", QQ)
              })) : "needsPermission" === oQ.phoneMotion && Dk()
            },
            circleInfoText: QQ(wQ.hidSupported ? "controller:settingsGyroToggleInfo" : "controller:settingsGyroToggleInfoPhone")
          }), DQ && wQ.hidSupported && (0, aQ.jsx)("div", {
            className: "ControllerSettingsHint",
            children: QQ("controller:settingsGyroSteamHint")
          }), DQ && FQ.gyroAiming && (0, aQ.jsxs)(aQ.Fragment, {
            children: [(0, aQ.jsx)(vk, {
              status: wQ
            }), (0, aQ.jsx)(Qk, {
              settingKey: "gyroSensitivity",
              label: QQ("controller:settingsGyroSensitivity"),
              range: yD.Q,
              format: yD.J
            }), (0, aQ.jsx)(dD, {
              label: QQ("controller:settingsGyroActivation"),
              hint: "aiming" === FQ.gyroActivation && (0, aQ.jsx)(PD.d, {
                text: QQ("controller:settingsGyroAimingHint", {
                  button: PD.g
                }),
                glyph: (0, uQ.g)("use")
              }),
              options: yD.M,
              value: FQ.gyroActivation,
              onChange: QQ => {
                (0, bQ.k)({
                  gyroActivation: QQ
                })
              }
            }), "button" === FQ.gyroActivation && (0, aQ.jsx)(dD, {
              label: QQ("controller:settingsGyroButton"),
              hint: QQ("controller:settingsGyroButtonHint"),
              options: yD.t.filter((QQ => QQ !== kQ || QQ === FQ.gyroButton)).map((QQ => ({
                label: cq(LQ, QQ),
                value: QQ
              }))),
              value: FQ.gyroButton,
              onChange: QQ => {
                (0, bQ.k)({
                  gyroButton: QQ
                })
              }
            })]
          })]
        })
      };
    var uk = wQ(1835);
    const Hk = () => {
      const {
        t: QQ
      } = (0, qQ.y)(), FQ = (0, bQ.o)(), wQ = (0, YQ.C)();
      return (0, aQ.jsxs)(aQ.Fragment, {
        children: [(0, aQ.jsx)(BD, {
          text: QQ("controller:settingsAccessibility")
        }), (0, aQ.jsx)(gD.e, {
          label: QQ("controller:settingsSwapConfirmBack"),
          checked: (0, uQ.J)(FQ.swapConfirmBack, wQ),
          onClick: QQ => {
            (0, bQ.k)({
              swapConfirmBack: QQ === (0, uQ.J)(null, wQ) ? null : QQ
            }), uk.f.showMessage({
              translationKey: "controller:settingsSwapToast"
            })
          },
          circleInfoText: QQ("controller:settingsSwapConfirmBackInfo")
        }), (0, aQ.jsx)(dD, {
          label: QQ("controller:settingsButtonRepeat"),
          hint: QQ("controller:settingsButtonRepeatHint"),
          options: yD.p,
          value: FQ.buttonRepeat,
          onChange: QQ => {
            (0, bQ.k)({
              buttonRepeat: QQ
            })
          }
        }), (0, aQ.jsx)(dD, {
          label: QQ("controller:settingsTapHoldTime"),
          hint: QQ("controller:settingsTapHoldTimeHint"),
          options: yD.Bb,
          value: FQ.tapHoldTime,
          onChange: QQ => {
            (0, bQ.k)({
              tapHoldTime: QQ
            })
          }
        }), (0, aQ.jsx)(dD, {
          label: QQ("controller:settingsEmoteButton"),
          hint: QQ("wheel" === FQ.emoteButton ? "controller:settingsEmoteButtonWheelHint" : "controller:settingsEmoteButtonTapHoldHint"),
          options: yD.E,
          value: FQ.emoteButton,
          onChange: QQ => {
            (0, bQ.k)({
              emoteButton: QQ
            })
          }
        }), (0, aQ.jsx)(dD, {
          label: QQ("controller:settingsAttackMode"),
          hint: QQ("toggle" === FQ.attackMode ? "controller:settingsAttackToggleHint" : "controller:settingsAttackHoldHint"),
          options: yD.m,
          value: FQ.attackMode,
          onChange: QQ => {
            (0, bQ.k)({
              attackMode: QQ
            })
          }
        }), (0, aQ.jsx)(gD.e, {
          label: QQ("controller:settingsLargePointer"),
          checked: FQ.largePointer,
          onClick: QQ => {
            (0, bQ.k)({
              largePointer: QQ
            })
          },
          circleInfoText: QQ("controller:settingsLargePointerInfo")
        })]
      })
    };
    var bk = wQ(8625);
    const Yk = new class {
        constructor(QQ) {
          this.router = QQ, this.current = null
        }
        claim(QQ, FQ) {
          const wQ = this.current;
          wQ && (this.current = null, wQ.release(), wQ.onTakenOver());
          const LQ = this.router.register({
              ...QQ,
              name: "capture"
            }),
            qQ = {
              release: LQ,
              onTakenOver: FQ
            };
          return this.current = qQ, () => {
            this.current === qQ && (this.current = null), LQ()
          }
        }
      }(HQ.b),
      xk = QQ => {
        (0, zQ.useEffect)((() => {
          if (!QQ) return;
          const FQ = QQ();
          let wQ = !1;
          const LQ = () => {
              wQ || (wQ = !0, FQ.onEnd())
            },
            qQ = Yk.claim({
              isActive: () => !wQ,
              onFrame: QQ => {
                FQ.onFrame(QQ, LQ)
              }
            }, LQ),
            oQ = void 0 === FQ.timeoutMs ? void 0 : window.setTimeout(LQ, FQ.timeoutMs),
            DQ = QQ => {
              "Escape" === QQ.key && (QQ.preventDefault(), QQ.stopPropagation(), LQ())
            };
          return window.addEventListener("keydown", DQ, !0), () => {
            wQ = !0, qQ(), window.clearTimeout(oQ), window.removeEventListener("keydown", DQ, !0)
          }
        }), [QQ])
      },
      Ak = QQ => {
        let {
          row: FQ,
          capturing: wQ,
          onCapture: LQ,
          holdFillRef: oQ,
          onRebind: DQ,
          swapped: kQ
        } = QQ;
        const {
          t: vQ
        } = (0, qQ.y)();
        if ("fixed" === FQ.kind) return (0, aQ.jsx)("div", {
          className: "ControlRow PadControlRow PadControlRowFixed",
          children: (0, aQ.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, aQ.jsx)("div", {
              className: "ControlName",
              children: vQ(FQ.labelKey)
            }), (0, aQ.jsx)("div", {
              className: "ControlBindingsContainer",
              children: (0, aQ.jsx)("div", {
                className: "ControlBindingsList",
                children: (0, aQ.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  children: (0, aQ.jsx)(Cq, {
                    glyph: "move" === FQ.stick ? (0, uQ.r)() : (0, uQ.p)()
                  })
                })
              })
            })]
          })
        });
        const {
          action: mQ
        } = FQ, HQ = (0, uQ.g)(mQ), bQ = (0, uQ.i)(mQ), YQ = HQ !== bQ && (0, uQ.e)(mQ, bQ);
        return (0, aQ.jsxs)("div", {
          className: jQ()("ControlRow PadControlRow", {
            Capturing: wQ
          }),
          children: [(0, aQ.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, aQ.jsx)("div", {
              className: "ControlName",
              children: vQ(yD.j[mQ])
            }), (0, aQ.jsxs)("div", {
              className: "ControlBindingsContainer",
              children: [!wQ && (0, aQ.jsxs)("div", {
                className: "ControlBindingsList",
                children: [(0, aQ.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    LQ(mQ)
                  },
                  children: (0, aQ.jsx)(Cq, {
                    glyph: HQ
                  })
                }), YQ && (0, aQ.jsx)("div", {
                  className: "ControlBinding PadBindingReset",
                  title: vQ("controller:settingsReset"),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    DQ(mQ, bQ)
                  },
                  children: (0, aQ.jsx)(UD.c, {
                    name: "arrows-rotate"
                  })
                })]
              }), wQ && (0, aQ.jsxs)("div", {
                className: "ControlBindingAddInput",
                children: [(0, aQ.jsxs)("div", {
                  className: "PadCaptureBox",
                  children: [(0, aQ.jsx)("span", {
                    children: vQ("controller:settingsCapturePrompt")
                  }), (0, aQ.jsx)("div", {
                    ref: oQ,
                    className: "PadCaptureHoldFill"
                  })]
                }), (0, aQ.jsx)("div", {
                  className: "ControlBindingAddCancel",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    LQ(null)
                  },
                  children: "\xd7"
                })]
              }), wQ && (0, aQ.jsx)("div", {
                className: "PadCaptureHint",
                children: (0, aQ.jsx)(PD.d, {
                  text: vQ((0, uQ.e)(mQ, (0, uQ.g)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
                    button: PD.g
                  }),
                  glyph: (0, uQ.g)("menuBack")
                })
              })]
            })]
          }), kQ.map((QQ => (0, aQ.jsx)("div", {
            className: "ControlRowWarning PadSwapNotice",
            children: (0, aQ.jsx)(PD.d, {
              text: vQ("controller:settingsSwapNotice", {
                action: vQ(yD.j[QQ]),
                button: PD.g
              }),
              glyph: (0, uQ.g)(QQ)
            })
          }, QQ))), wQ && (0, aQ.jsx)("div", {
            className: "PadCaptureTimer",
            style: {
              animationDuration: `${yD.w}ms`
            }
          })]
        })
      },
      tk = [],
      ek = QQ => {
        let {
          layoutSetting: FQ
        } = QQ;
        const {
          t: wQ
        } = (0, qQ.y)(), LQ = (0, bQ.o)();
        (0, YQ.C)();
        const oQ = (0, zQ.useRef)(null),
          [DQ, kQ] = (0, zQ.useState)(null),
          vQ = (0, zQ.useCallback)(((QQ, FQ) => {
            const wQ = (0, bQ.h)().bindings;
            (0, uQ.D)(QQ, FQ);
            const LQ = (0, uQ.v)(wQ, QQ);
            kQ(LQ.length > 0 ? {
              action: QQ,
              swapped: LQ
            } : null)
          }), []),
          [mQ, AQ] = ((QQ, FQ) => {
            const [wQ, LQ] = (0, zQ.useState)(null), qQ = (0, zQ.useMemo)((() => wQ ? () => {
              const qQ = (0, uQ.g)("menuBack"),
                oQ = new yD.d(qQ, (0, uQ.g)("menuConfirm"), (QQ => (0, uQ.e)(wQ, QQ)));
              return {
                onFrame: (LQ, DQ) => {
                  var kQ;
                  const vQ = LQ.frame.timestampMs,
                    mQ = oQ.update({
                      ...LQ,
                      isDown: QQ => (0, xQ.J)(LQ.frame.values, QQ)
                    }, vQ);
                  null === (kQ = QQ.current) || void 0 === kQ || kQ.style.setProperty("width", 100 * oQ.getBindHoldProgress(vQ) + "%"), mQ && ("bind" === mQ.kind ? (HQ.b.consumeButton(mQ.button), FQ(wQ, mQ.button)) : HQ.b.consumeButton(qQ), DQ())
                },
                onEnd: () => {
                  LQ(null)
                },
                timeoutMs: yD.w
              }
            } : null), [wQ, QQ, FQ]);
            return xk(qQ), [wQ, LQ]
          })(oQ, vQ),
          tQ = QQ => {
            QQ && kQ(null), AQ(QQ)
          };
        (0, zQ.useEffect)((() => {
          if (!DQ) return;
          const QQ = window.setTimeout((() => {
            kQ(null)
          }), yD.Ab);
          return () => {
            window.clearTimeout(QQ)
          }
        }), [DQ]);
        const eQ = !LQ.swapSticks && 0 === Object.keys(LQ.bindings).length;
        return (0, aQ.jsxs)("div", {
          className: "ControlsContainer PadControlsContainer",
          children: [(0, aQ.jsx)("div", {
            className: "SliderText",
            children: wQ("controller:settingsRemap")
          }), (0, aQ.jsx)("div", {
            className: "ControllerSettingsHint",
            children: wQ("controller:settingsRemapHint")
          }), (0, aQ.jsx)(TD.F, {
            className: "ResetBindingsButton PadResetAllButton",
            disabled: eQ,
            onClick: () => {
              tQ(null), kQ(null), (0, uQ.H)()
            },
            children: wQ("controller:settingsResetAll")
          }), FQ, yD.pb.map(((QQ, FQ) => (0, aQ.jsx)(bk.c, {
            title: wQ(QQ.titleKey),
            defaultOpen: 0 === FQ,
            children: QQ.rows.map((QQ => (0, aQ.jsx)(Ak, {
              row: QQ,
              capturing: "action" === QQ.kind && QQ.action === mQ,
              onCapture: tQ,
              holdFillRef: oQ,
              onRebind: vQ,
              swapped: "action" === QQ.kind && (null === DQ || void 0 === DQ ? void 0 : DQ.action) === QQ.action ? DQ.swapped : tk
            }, "action" === QQ.kind ? QQ.action : QQ.labelKey)))
          }, QQ.titleKey)))]
        })
      },
      Mk = QQ => {
        let {
          deadzone: FQ,
          dotRef: wQ,
          labelKey: LQ
        } = QQ;
        const {
          t: oQ
        } = (0, qQ.y)();
        return (0, aQ.jsxs)("div", {
          className: "ControllerTesterStick",
          children: [(0, aQ.jsxs)("div", {
            className: "ControllerTesterStickCircle",
            children: [(0, aQ.jsx)("div", {
              className: "ControllerTesterDeadzone",
              style: {
                width: 100 * FQ + "%",
                height: 100 * FQ + "%"
              }
            }), (0, aQ.jsx)("div", {
              ref: wQ,
              className: "ControllerTesterDot"
            })]
          }), (0, aQ.jsx)("div", {
            className: "ControllerTesterStickLabel",
            children: oQ(LQ)
          })]
        })
      },
      Gk = (QQ, FQ, wQ, LQ) => {
        var qQ;
        QQ && (QQ.style.left = 50 + 50 * Math.max(-1, Math.min(1, FQ.x)) + "%", QQ.style.top = 50 + 50 * Math.max(-1, Math.min(1, FQ.y)) + "%", null === (qQ = QQ.parentElement) || void 0 === qQ || qQ.classList.toggle("Active", LQ || Math.hypot(FQ.x, FQ.y) > wQ))
      },
      pk = QQ => {
        const FQ = {
            deadzone: QQ.moveDeadzone,
            labelKey: "controller:settingsActionMove"
          },
          wQ = {
            deadzone: QQ.lookDeadzone,
            labelKey: "controller:settingsActionLook"
          };
        return QQ.swapSticks ? {
          left: wQ,
          right: FQ
        } : {
          left: FQ,
          right: wQ
        }
      },
      ck = () => {
        const {
          t: QQ
        } = (0, qQ.y)(), FQ = (() => {
          const [QQ, FQ] = (0, zQ.useState)((() => DQ.f.getActivePad()));
          return (0, tq.g)(DQ.e, (() => {
            FQ(DQ.f.getActivePad())
          })), QQ
        })(), wQ = pk((0, bQ.o)()), LQ = (0, zQ.useRef)(null), oQ = (0, zQ.useRef)(null), kQ = (0, zQ.useRef)([]), vQ = (0, zQ.useRef)(null), mQ = (0, zQ.useRef)(null), [YQ, AQ] = (QQ => {
          const [FQ, wQ] = (0, zQ.useState)(!1), LQ = (0, zQ.useMemo)((() => FQ ? () => {
            const FQ = (0, uQ.g)("menuBack"),
              LQ = new yD.g;
            return {
              onFrame: (wQ, qQ) => {
                var oQ;
                const DQ = LQ.update({
                  pressed: wQ.wasPressed(FQ),
                  ym: wQ.isHeld(FQ)
                }, wQ.frame.timestampMs);
                null === (oQ = QQ.current) || void 0 === oQ || oQ.style.setProperty("width", 100 * DQ + "%"), DQ >= 1 && (HQ.b.consumeButton(FQ), qQ())
              },
              onEnd: () => {
                wQ(!1)
              }
            }
          } : null), [FQ, QQ]);
          return xk(LQ), [FQ, wQ]
        })(oQ);
        (0, zQ.useEffect)((() => {
          const QQ = QQ => {
            for (const wQ of xQ.W) {
              const FQ = (0, xQ.l)(wQ),
                LQ = kQ.current[FQ];
              if (!LQ) continue;
              const qQ = QQ.values[FQ];
              LQ.classList.toggle("Pressed", qQ >= xQ.C), (0, xQ.N)(FQ) && LQ.style.setProperty("--trigger-fill", `${Math.round(100*qQ)}%`)
            }
            const FQ = pk((0, bQ.h)());
            Gk(vQ.current, QQ.leftStick, FQ.left.deadzone, QQ.values[(0, xQ.l)("LS")] >= xQ.C), Gk(mQ.current, QQ.rightStick, FQ.right.deadzone, QQ.values[(0, xQ.l)("RS")] >= xQ.C)
          };
          return FQ || QQ((0, xQ.y)()), DQ.f.onFrame(QQ)
        }), [FQ]), (0, zQ.useEffect)((() => {
          FQ || AQ(!1)
        }), [FQ, AQ]), (0, zQ.useEffect)((() => {
          var QQ;
          YQ && (null === (QQ = LQ.current) || void 0 === QQ || QQ.scrollIntoView({
            block: "nearest"
          }))
        }), [YQ]);
        const tQ = yD.jb.find((QQ => QQ.value === (null === FQ || void 0 === FQ ? void 0 : FQ.family)));
        return (0, aQ.jsxs)("div", {
          ref: LQ,
          className: jQ()("SettingBox ControllerTester", {
            Testing: YQ
          }),
          children: [(0, aQ.jsxs)("div", {
            className: "ControllerTesterHeader",
            children: [(0, aQ.jsxs)("div", {
              className: "ControllerTesterInfo",
              children: [FQ && (0, aQ.jsx)("div", {
                children: QQ("controller:settingsTesterFamily", {
                  family: tQ ? QQ(tQ.labelKey) : FQ.family
                })
              }), FQ && (0, aQ.jsx)("div", {
                className: "ControllerTesterPadId",
                children: FQ.id
              }), !FQ && (0, aQ.jsx)("div", {
                children: QQ("controller:settingsTesterNoPad")
              })]
            }), (FQ || YQ) && (0, aQ.jsx)(TD.f, {
              className: "ControllerTesterToggle",
              onClick: () => {
                AQ(!YQ)
              },
              children: QQ(YQ ? "controller:settingsTesterStop" : "controller:settingsTesterStart")
            })]
          }), FQ && !YQ && (0, aQ.jsx)("div", {
            className: "ControllerSettingsHint",
            children: QQ("controller:settingsTesterHint")
          }), YQ && (0, aQ.jsxs)("div", {
            className: "ControllerTesterBanner",
            children: [(0, aQ.jsx)(PD.d, {
              text: QQ("controller:settingsTesterTesting", {
                button: PD.g
              }),
              glyph: (0, uQ.g)("menuBack")
            }), (0, aQ.jsx)("div", {
              ref: oQ,
              className: "ControllerTesterExitFill"
            })]
          }), (0, aQ.jsxs)("div", {
            className: "ControllerTesterBody",
            children: [(0, aQ.jsx)(Mk, {
              deadzone: wQ.left.deadzone,
              dotRef: vQ,
              labelKey: wQ.left.labelKey
            }), (0, aQ.jsx)("div", {
              className: "ControllerTesterButtons",
              children: xQ.W.map((QQ => {
                const wQ = (0, xQ.l)(QQ);
                return (0, aQ.jsx)("div", {
                  ref: QQ => {
                    kQ.current[wQ] = QQ
                  },
                  className: (0, xQ.N)(wQ) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
                  children: (0, aQ.jsx)(Cq, {
                    glyph: QQ,
                    family: null === FQ || void 0 === FQ ? void 0 : FQ.family
                  })
                }, QQ)
              }))
            }), (0, aQ.jsx)(Mk, {
              deadzone: wQ.right.deadzone,
              dotRef: mQ,
              labelKey: wQ.right.labelKey
            })]
          })]
        })
      },
      Ck = (0, zQ.memo)((function() {
        const {
          t: QQ
        } = (0, qQ.y)(), FQ = (0, bQ.o)(), [wQ, LQ] = (0, zQ.useState)(!1);
        return (0, zQ.useEffect)((() => {
          if (!wQ) return;
          const QQ = window.setTimeout((() => {
            LQ(!1)
          }), yD.Ab);
          return () => {
            window.clearTimeout(QQ)
          }
        }), [wQ]), (0, aQ.jsxs)("div", {
          className: "SettingsMenuRightInner ControllerCategory",
          children: [(0, aQ.jsx)(BD, {
            text: QQ("controller:settingsLook")
          }), (0, aQ.jsx)(Qk, {
            settingKey: "lookSensitivityX",
            label: QQ("controller:settingsLookSensitivityX"),
            range: yD.sb,
            format: yD.L
          }), (0, aQ.jsx)(Qk, {
            settingKey: "lookSensitivityY",
            label: QQ("controller:settingsLookSensitivityY"),
            range: yD.sb,
            format: yD.L
          }), (0, aQ.jsx)(Qk, {
            settingKey: "aimLookSensitivity",
            label: QQ("controller:settingsAimLookSensitivity"),
            range: yD.l,
            format: yD.L
          }), (0, aQ.jsx)(dD, {
            label: QQ("controller:settingsLookCurve"),
            hint: QQ("controller:settingsLookCurveHint"),
            options: yD.db,
            value: FQ.lookCurve,
            onChange: QQ => {
              (0, bQ.k)({
                lookCurve: QQ
              })
            }
          }), (0, aQ.jsx)(gD.e, {
            label: QQ("controller:settingsInvertLookX"),
            checked: FQ.invertLookX,
            onClick: QQ => {
              (0, bQ.k)({
                invertLookX: QQ
              })
            }
          }), (0, aQ.jsx)(gD.e, {
            label: QQ("controller:settingsInvertLookY"),
            checked: FQ.invertLookY,
            onClick: QQ => {
              (0, bQ.k)({
                invertLookY: QQ
              })
            }
          }), (0, aQ.jsx)(Qk, {
            settingKey: "lookDeadzone",
            label: QQ("controller:settingsLookDeadzone"),
            range: yD.D,
            format: yD.H
          }), (0, aQ.jsx)(mk, {}), (0, aQ.jsx)(BD, {
            text: QQ("controller:settingsMovement")
          }), (0, aQ.jsx)(Qk, {
            settingKey: "moveDeadzone",
            label: QQ("controller:settingsMoveDeadzone"),
            range: yD.D,
            format: yD.H
          }), (0, aQ.jsx)(gD.e, {
            label: QQ("controller:settingsAutoSprint"),
            checked: FQ.autoSprint,
            onClick: QQ => {
              (0, bQ.k)({
                autoSprint: QQ
              })
            },
            circleInfoText: QQ("controller:settingsAutoSprintInfo")
          }), (0, aQ.jsx)(dD, {
            label: QQ("controller:settingsSneak"),
            options: yD.wb,
            value: FQ.sneakMode,
            onChange: QQ => {
              (0, bQ.k)({
                sneakMode: QQ
              })
            }
          }), (0, aQ.jsx)(BD, {
            text: QQ("controller:settingsButtons")
          }), (0, aQ.jsx)(dD, {
            label: QQ("controller:settingsPromptFamily"),
            options: yD.jb,
            value: FQ.promptFamily,
            onChange: QQ => {
              (0, bQ.k)({
                promptFamily: QQ
              })
            }
          }), (0, aQ.jsx)(gD.e, {
            label: QQ("controller:settingsHideButtonHints"),
            checked: FQ.hideButtonHints,
            onClick: QQ => {
              (0, bQ.k)({
                hideButtonHints: QQ
              })
            }
          }), (0, aQ.jsx)(gD.e, {
            label: QQ("controller:settingsVibration"),
            checked: FQ.vibration,
            onClick: QQ => {
              (0, bQ.k)({
                vibration: QQ
              }), QQ && oq("preview")
            }
          }), (0, aQ.jsx)(Qk, {
            settingKey: "cursorSpeed",
            label: QQ("controller:settingsCursorSpeed"),
            range: yD.C,
            format: yD.L
          }), (0, aQ.jsx)(gD.e, {
            label: QQ("controller:settingsCursorMagnetism"),
            checked: FQ.cursorMagnetism,
            onClick: QQ => {
              (0, bQ.k)({
                cursorMagnetism: QQ
              })
            }
          }), (0, aQ.jsx)(gD.e, {
            label: QQ("controller:settingsMenuBackToCategories"),
            checked: FQ.menuBackToCategories,
            onClick: QQ => {
              (0, bQ.k)({
                menuBackToCategories: QQ
              })
            }
          }), (0, aQ.jsx)(ek, {
            layoutSetting: (0, aQ.jsxs)(aQ.Fragment, {
              children: [uQ.f.map((wQ => (0, aQ.jsx)(gD.e, {
                label: QQ(yD.X[wQ]),
                checked: (0, uQ.z)(wQ, FQ),
                onClick: QQ => {
                  LQ(!(0, uQ.L)(wQ, QQ))
                }
              }, wQ))), wQ && (0, aQ.jsx)("div", {
                className: "PadLayoutRefusedNotice",
                role: "status",
                children: QQ("controller:settingsLayoutRefusedToast")
              })]
            })
          }), (0, aQ.jsx)(Hk, {}), (0, aQ.jsx)(BD, {
            text: QQ("controller:settingsAlternatives")
          }), (0, aQ.jsx)("div", {
            className: "ControllerSettingsHint",
            children: QQ("controller:settingsAlternativesHint")
          }), (0, aQ.jsx)(dD, {
            label: QQ("controller:settingsMenuNavigation"),
            hint: QQ("controller:settingsMenuNavigationHint"),
            options: yD.hb,
            value: FQ.menuNavigation,
            onChange: QQ => {
              (0, bQ.k)({
                menuNavigation: QQ
              })
            }
          }), (0, aQ.jsx)(dD, {
            label: QQ("controller:settingsInventoryNavigation"),
            hint: QQ("controller:settingsInventoryNavigationHint"),
            options: yD.U,
            value: FQ.inventoryNavigation,
            onChange: QQ => {
              (0, bQ.k)({
                inventoryNavigation: QQ
              })
            }
          }), (0, aQ.jsx)(dD, {
            label: QQ("controller:settingsQuickChat"),
            hint: QQ("controller:settingsQuickChatHint"),
            options: yD.nb,
            value: FQ.quickChat,
            onChange: QQ => {
              (0, bQ.k)({
                quickChat: QQ
              })
            }
          }), (0, aQ.jsx)(dD, {
            label: QQ("controller:settingsLeaderboardButton"),
            hint: QQ("controller:settingsLeaderboardButtonHint"),
            options: yD.$,
            value: FQ.leaderboardButton,
            onChange: QQ => {
              (0, bQ.k)({
                leaderboardButton: QQ
              })
            }
          }), (0, aQ.jsx)(BD, {
            text: QQ("controller:settingsTester")
          }), (0, aQ.jsx)(ck, {})]
        })
      }));
    (0, qQ.e)(LQ);
    for (const Ok of (0, oQ.n)()) Ok.connected ? DQ.f.handleConnectionEvent(Ok) : DQ.f.handleDisconnectionEvent(Ok);
    const Sk = () => null !== DQ.f.getActivePad(),
      ik = () => qw.getState(),
      Wk = () => qw.isSteppingSlots(),
      Rk = (QQ, FQ) => {
        const wQ = dL.getFocused();
        dL.isActive() && wQ && QQ.contains(wQ) && dL.setFocus(FQ, {
          scroll: !1
        })
      }
  },
  7957: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => vQ,
      g: () => mQ
    });
    var LQ = wQ(1423),
      qQ = wQ(1414);
    const oQ = {
        "054c": "playstation",
        "057e": "nintendo"
      },
      DQ = "28de",
      kQ = new Set(["1205"]),
      vQ = (QQ, FQ) => {
        const wQ = (0, LQ.c)(QQ);
        if ((null === wQ || void 0 === wQ ? void 0 : wQ.vendor) === DQ) return kQ.has(wQ.product) ? "steamdeck" : "xbox";
        if (wQ && oQ[wQ.vendor]) return oQ[wQ.vendor];
        if ((0, qQ.d)(QQ)) return "nintendo";
        const vQ = `${QQ} ${null!==FQ&&void 0!==FQ?FQ:""}`.toLowerCase();
        return /dualsense|dualshock|playstation|sony/.test(vQ) ? "playstation" : /nintendo|switch|joy-con|pro controller/.test(vQ) ? "nintendo" : /steam deck/.test(vQ) ? "steamdeck" : "xbox"
      },
      mQ = QQ => {
        var FQ;
        return (null === (FQ = (0, LQ.c)(QQ)) || void 0 === FQ ? void 0 : FQ.vendor) === DQ
      }
  },
  7994: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => mQ,
      e: () => kQ
    });
    var LQ = wQ(7950);
    const qQ = ["capture", "keyboard", "wheel", "inventory", "cursor", "focus", "gameplay"],
      oQ = new Set(["capture", "gameplay"]),
      DQ = ["Up", "Down", "Left", "Right"],
      kQ = QQ => DQ.includes(QQ),
      vQ = .25;
    const mQ = new class {
      constructor() {
        this.consumers = new Map, this.activeName = null, this.ym = new Array(LQ.U).fill(!1), this.previousHeld = new Array(LQ.U).fill(!1), this.consumedButtons = new Array(LQ.U).fill(!1), this.suppressedReleases = new Array(LQ.U).fill(!1), this.wakeOwned = new Array(LQ.U).fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.peek = null, this.lastFrame = (0, LQ.y)()
      }
      register(QQ) {
        return this.consumers.has(QQ.name) && console.warn(`Controller consumer "${QQ.name}" registered twice; the newer one replaces it.`), this.consumers.set(QQ.name, QQ), () => {
          var FQ;
          this.consumers.get(QQ.name) === QQ && (this.activeName === QQ.name ? (this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()) : (null === (FQ = this.peek) || void 0 === FQ ? void 0 : FQ.over) === QQ.name && (this.peek = null), this.consumers.delete(QQ.name))
        }
      }
      getActiveConsumerName() {
        return this.activeName
      }
      isButtonHeld(QQ) {
        return this.ym[(0, LQ.l)(QQ)]
      }
      getLastFrame() {
        return this.lastFrame
      }
      clear() {
        this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()
      }
      reset() {
        this.deactivateCurrent(), this.activeName = null, this.ym = new Array(LQ.U).fill(!1), this.previousHeld = new Array(LQ.U).fill(!1), this.consumedButtons.fill(!1), this.suppressedReleases.fill(!1), this.wakeOwned.fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.lastFrame = (0, LQ.y)()
      }
      dispatch(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.lastFrame = QQ, this.previousHeld = this.ym, this.ym = (0, LQ.q)(QQ.values, this.previousHeld);
        for (let oQ = 0; oQ < LQ.U; oQ++) this.suppressedReleases[oQ] = !this.ym[oQ] && this.consumedButtons[oQ], this.ym[oQ] || (this.consumedButtons[oQ] = !1), this.wakeOwned[oQ] && (this.ym[oQ] ? (this.consumedButtons[oQ] = !0, this.wakeOwned[oQ] = !1) : QQ.values[oQ] < LQ.T && (this.wakeOwned[oQ] = !1));
        Math.hypot(QQ.leftStick.x, QQ.leftStick.y) < vQ && (this.leftStickConsumed = !1), Math.hypot(QQ.rightStick.x, QQ.rightStick.y) < vQ && (this.rightStickConsumed = !1);
        const qQ = this.pickActive();
        if ((null === qQ || void 0 === qQ ? void 0 : qQ.name) !== this.activeName) {
          var DQ, kQ, mQ, uQ, HQ, bQ;
          const QQ = this.activeName,
            FQ = {
              left: !this.leftStickConsumed,
              right: !this.rightStickConsumed
            },
            wQ = null !== (DQ = null === qQ || void 0 === qQ || null === (kQ = qQ.peek) || void 0 === kQ ? void 0 : kQ.call(qQ)) && void 0 !== DQ ? DQ : null,
            oQ = null === QQ && !!wQ && !(null === (mQ = this.consumers.get(wQ.over)) || void 0 === mQ || !mQ.onPeekFrame),
            vQ = wQ && (wQ.over === QQ || oQ) ? wQ : null,
            YQ = null !== this.peek && this.peek.over === (null === qQ || void 0 === qQ ? void 0 : qQ.name) ? this.peek : null;
          this.deactivateCurrent(null !== vQ, null !== YQ), this.activeName = null !== (uQ = null === qQ || void 0 === qQ ? void 0 : qQ.name) && void 0 !== uQ ? uQ : null, null === QQ || this.handOffPending || this.consumeAllHeld();
          const xQ = null === (HQ = null !== vQ && void 0 !== vQ ? vQ : YQ) || void 0 === HQ ? void 0 : HQ.stick;
          "left" === xQ && FQ.left ? this.leftStickConsumed = !1 : "right" === xQ && FQ.right && (this.rightStickConsumed = !1), this.peek = vQ, qQ || null === QQ ? qQ && (null === (bQ = this.idleResume) || void 0 === bQ ? void 0 : bQ.name) === qQ.name && (this.idleResume.left && (this.leftStickConsumed = !1), this.idleResume.right && (this.rightStickConsumed = !1)) : this.idleResume = {
            name: QQ,
            left: FQ.left && this.leftStickConsumed,
            right: FQ.right && this.rightStickConsumed
          }, qQ && (this.idleResume = null);
          for (let qQ = 0; qQ < LQ.U; qQ++) this.previousHeld[qQ] && !this.ym[qQ] && (this.suppressedReleases[qQ] = !0)
        }
        var YQ, xQ;
        (this.handOffPending = !1, qQ) && (wQ && !oQ.has(qQ.name) && this.consumeWakePress(qQ), qQ.onFrame(this.buildInput(QQ, FQ, wQ)), this.peek && (null === (YQ = this.consumers.get(this.peek.over)) || void 0 === YQ || null === (xQ = YQ.onPeekFrame) || void 0 === xQ || xQ.call(YQ, this.buildInput(QQ, FQ, !1, this.peek.stick))))
      }
      consumeWakePress(QQ) {
        for (let qQ = 0; qQ < LQ.U; qQ++) {
          var FQ, wQ;
          const oQ = LQ.W[qQ];
          (null !== (FQ = null === (wQ = QQ.wakePressActs) || void 0 === wQ ? void 0 : wQ.call(QQ, oQ)) && void 0 !== FQ ? FQ : DQ.includes(oQ)) || (this.ym[qQ] ? this.consumedButtons[qQ] = !0 : this.lastFrame.values[qQ] >= LQ.R && (this.wakeOwned[qQ] = !0))
        }
      }
      pickActive() {
        for (const QQ of qQ) {
          const FQ = this.consumers.get(QQ);
          if (FQ && FQ.isActive()) return FQ
        }
        return null
      }
      deactivateCurrent() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var wQ, LQ, qQ, oQ;
        this.activeName && (null === (wQ = this.consumers.get(this.activeName)) || void 0 === wQ || null === (LQ = wQ.onDeactivate) || void 0 === LQ || LQ.call(wQ, QQ));
        this.peek && !FQ && (null === (qQ = this.consumers.get(this.peek.over)) || void 0 === qQ || null === (oQ = qQ.onDeactivate) || void 0 === oQ || oQ.call(qQ, !1));
        this.peek = null
      }
      consumeAllHeld() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.idleResume = null;
        for (let qQ = 0; qQ < LQ.U; qQ++) this.ym[qQ] && (this.consumedButtons[qQ] = !0);
        const {
          leftStick: FQ,
          rightStick: wQ
        } = this.lastFrame;
        this.leftStickConsumed = "left" !== QQ && (this.leftStickConsumed || Math.hypot(FQ.x, FQ.y) >= vQ), this.rightStickConsumed = "right" !== QQ && (this.rightStickConsumed || Math.hypot(wQ.x, wQ.y) >= vQ)
      }
      handOffHeldInput() {
        this.handOffPending = !0
      }
      consumeButton(QQ) {
        const FQ = (0, LQ.l)(QQ);
        this.ym[FQ] && (this.consumedButtons[FQ] = !0)
      }
      buildInput(QQ, FQ, wQ, qQ) {
        const oQ = this.ym,
          DQ = this.previousHeld,
          kQ = qQ ? new Array(LQ.U).fill(!0) : [...this.consumedButtons],
          vQ = qQ ? kQ : [...this.suppressedReleases],
          mQ = !this.leftStickConsumed && (!qQ || "left" === qQ),
          uQ = !this.rightStickConsumed && (!qQ || "right" === qQ);
        return {
          frame: QQ,
          dtMs: FQ,
          isHeld: QQ => {
            const FQ = (0, LQ.l)(QQ);
            return oQ[FQ] && !kQ[FQ]
          },
          wasPressed: QQ => {
            const FQ = (0, LQ.l)(QQ);
            return oQ[FQ] && !DQ[FQ] && !kQ[FQ]
          },
          wasReleased: QQ => {
            const FQ = (0, LQ.l)(QQ);
            return !oQ[FQ] && DQ[FQ] && !vQ[FQ]
          },
          value: FQ => {
            const wQ = (0, LQ.l)(FQ);
            return kQ[wQ] ? 0 : QQ.values[wQ]
          },
          leftStick: mQ ? QQ.leftStick : {
            x: 0,
            y: 0
          },
          rightStick: uQ ? QQ.rightStick : {
            x: 0,
            y: 0
          },
          wokeDevice: wQ
        }
      }
    }
  },
  7972: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => HQ.f,
      f: () => HQ.j,
      h: () => OQ,
      i: () => sQ,
      k: () => rQ,
      o: () => IQ
    });
    var LQ = wQ(53),
      qQ = wQ(22),
      oQ = wQ(1447),
      DQ = wQ(27),
      kQ = wQ(7975),
      vQ = wQ(7950),
      mQ = wQ(7967),
      uQ = wQ(7945),
      HQ = wQ(1972),
      bQ = wQ(7977);
    const YQ = {
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
      xQ = "controllerSettings",
      AQ = ["bindings", "promptFamily", "hideButtonHints", "swapSticks", "swapConfirmBack", "leaderboardButton"],
      tQ = ["auto", ...kQ.c],
      eQ = (QQ, FQ) => "string" === typeof FQ && QQ.includes(FQ),
      MQ = QQ => FQ => "number" === typeof FQ && Number.isFinite(FQ) ? (0, bQ.A)(FQ, QQ) : void 0,
      GQ = QQ => "boolean" === typeof QQ ? QQ : void 0,
      pQ = QQ => FQ => eQ(QQ, FQ) ? FQ : void 0,
      cQ = {
        lookSensitivityX: MQ(bQ.sb),
        lookSensitivityY: MQ(bQ.sb),
        aimLookSensitivity: MQ(bQ.l),
        invertLookX: GQ,
        invertLookY: GQ,
        lookCurve: pQ(vQ.O),
        lookDeadzone: MQ(bQ.D),
        moveDeadzone: MQ(bQ.D),
        swapSticks: GQ,
        autoSprint: GQ,
        sneakMode: pQ(["toggle", "hold"]),
        tapHoldTime: pQ(["short", "medium", "long"]),
        attackMode: pQ(["hold", "toggle"]),
        promptFamily: pQ(tQ),
        hideButtonHints: GQ,
        vibration: GQ,
        cursorSpeed: MQ(bQ.C),
        cursorMagnetism: GQ,
        buttonRepeat: pQ(vQ.p),
        largePointer: GQ,
        menuBackToCategories: GQ,
        swapConfirmBack: GQ,
        menuNavigation: pQ(["hybrid", "focus", "cursor"]),
        inventoryNavigation: pQ(["hybrid", "slot", "cursor"]),
        quickChat: pQ(["wheel", "off"]),
        leaderboardButton: pQ(["shop", "leaderboard"]),
        gyroAiming: GQ,
        gyroSensitivity: MQ(bQ.Q),
        gyroActivation: pQ(["always", "aiming", "button"]),
        gyroButton: pQ(vQ.W),
        emoteButton: pQ(["tapHold", "wheel"])
      },
      CQ = [{
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
      SQ = QQ => {
        const FQ = {};
        if ("object" !== typeof QQ || null === QQ) return FQ;
        for (const [wQ, LQ] of Object.entries(QQ)) Object.prototype.hasOwnProperty.call(mQ.g, wQ) && eQ(vQ.W, LQ) && (FQ[wQ] = LQ);
        return FQ
      },
      iQ = QQ => {
        const FQ = {};
        for (const wQ of Object.keys(YQ))("bindings" === wQ ? Object.keys(QQ.bindings).length > 0 : QQ[wQ] !== YQ[wQ]) && (FQ[wQ] = QQ[wQ]);
        0 !== Object.keys(FQ).length ? DQ.i.setItem(xQ, FQ) : DQ.i.removeItem(xQ)
      };
    let WQ = (() => {
        const QQ = DQ.i.getItem(xQ),
          FQ = (QQ => {
            const FQ = "object" === typeof QQ && null !== QQ ? QQ : {},
              wQ = {
                ...YQ,
                bindings: SQ(FQ.bindings)
              };
            for (const qQ of Object.keys(cQ)) {
              const QQ = cQ[qQ](FQ[qQ]);
              void 0 !== QQ && (wQ[qQ] = QQ)
            }
            const LQ = Object.keys(FQ).filter((QQ => !!Object.prototype.hasOwnProperty.call(YQ, QQ) && ("bindings" === QQ ? "object" !== typeof FQ.bindings || null === FQ.bindings || Object.keys(FQ.bindings).length !== Object.keys(wQ.bindings).length : wQ[QQ] !== FQ[QQ])));
            return LQ.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${LQ.join(", ")}`), wQ
          })(QQ);
        return null !== QQ && void 0 !== QQ && iQ(FQ), FQ
      })(),
      RQ = {
        ...WQ,
        ...(() => {
          if ("undefined" === typeof window) return {};
          const QQ = {},
            FQ = new URLSearchParams(window.location.search);
          for (const {
              param: wQ,
              key: LQ
            }
            of CQ) {
            const qQ = cQ[LQ](FQ.get(wQ));
            void 0 !== qQ && (QQ[LQ] = qQ)
          }
          return QQ
        })()
      };
    const OQ = () => RQ,
      sQ = () => {
        var QQ, FQ;
        const wQ = OQ().promptFamily;
        return "auto" !== wQ ? wQ : null !== (QQ = null === (FQ = uQ.f.getActivePad()) || void 0 === FQ ? void 0 : FQ.family) && void 0 !== QQ ? QQ : "xbox"
      },
      rQ = QQ => {
        const FQ = RQ;
        WQ = {
          ...WQ,
          ...QQ
        }, iQ(WQ), RQ = {
          ...RQ,
          ...QQ
        }, (QQ => {
          qQ.l.GA(HQ.j, RQ), AQ.some((FQ => QQ[FQ] !== RQ[FQ])) && qQ.l.GA(HQ.f, RQ)
        })(FQ)
      },
      IQ = () => {
        const [QQ, FQ] = (0, LQ.useState)(RQ);
        return (0, oQ.g)(HQ.j, FQ), QQ
      }
  },
  8389: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => qQ
    });
    const LQ = new Set(["Alt", "AltGraph", "Meta", "OS", "AudioVolumeUp", "AudioVolumeDown", "AudioVolumeMute", "MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "BrowserBack", "BrowserForward", "BrowserHome", "GoBack", "LaunchApplication1", "LaunchApplication2", "LaunchMail", "PrintScreen", "Unidentified"]),
      qQ = QQ => LQ.has(QQ)
  },
  7945: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => AQ.c,
      f: () => GQ
    });
    var LQ = wQ(7950),
      qQ = wQ(7957);
    const oQ = .1,
      DQ = .3;
    class kQ {
      constructor() {
        this.deadzone = 0, this.anchor = null, this.steadyMs = 0, this.lastMs = null, this.returning = !0, this.anchorLearned = !1
      }
      observe(QQ, FQ) {
        const wQ = null === this.lastMs ? 0 : Math.min(Math.max(0, FQ - this.lastMs), 100);
        this.lastMs = FQ;
        const LQ = Math.hypot(QQ.x, QQ.y);
        if (LQ >= DQ) return this.anchor = null, void(this.returning = !0);
        LQ >= oQ || (this.returning = !1);
        const qQ = this.anchor;
        if (!qQ || Math.hypot(QQ.x - qQ.x, QQ.y - qQ.y) > .03) return this.anchorLearned && (this.returning = !1), this.anchor = {
          x: QQ.x,
          y: QQ.y
        }, this.steadyMs = 0, void(this.anchorLearned = !1);
        if (this.steadyMs += wQ, this.steadyMs < 1e3) return;
        const kQ = Math.max(LQ, Math.hypot(qQ.x, qQ.y));
        kQ < oQ ? this.deadzone = 0 : this.returning && (this.deadzone = kQ + .05, this.anchorLearned = !0)
      }
      getDeadzone() {
        return this.deadzone
      }
      apply(QQ) {
        return Math.hypot(QQ.x, QQ.y) < this.deadzone ? {
          x: 0,
          y: 0
        } : QQ
      }
    }
    const vQ = (QQ, FQ) => {
        var wQ, LQ;
        return null !== (wQ = QQ && (null === (LQ = Object.getOwnPropertyDescriptor(QQ, FQ)) || void 0 === LQ ? void 0 : LQ.get)) && void 0 !== wQ ? wQ : null
      },
      mQ = QQ => {
        const FQ = QQ.vendorName;
        return "string" === typeof FQ ? FQ : void 0
      },
      uQ = ((QQ, FQ) => {
        const wQ = vQ(QQ, "index"),
          LQ = vQ(QQ, "id"),
          qQ = vQ(QQ, "connected"),
          oQ = vQ(QQ, "mapping"),
          DQ = vQ(QQ, "buttons"),
          kQ = vQ(QQ, "axes"),
          uQ = vQ(FQ, "pressed"),
          HQ = vQ(FQ, "value");
        return wQ && LQ && qQ && oQ && DQ && kQ && uQ && HQ ? QQ => {
          const FQ = DQ.call(QQ),
            vQ = kQ.call(QQ),
            bQ = {
              index: Number(wQ.call(QQ)),
              id: String(LQ.call(QQ)),
              connected: !0 === qQ.call(QQ),
              mapping: String(oQ.call(QQ)),
              buttons: [],
              axes: [],
              vendorName: mQ(QQ)
            };
          for (let wQ = 0; wQ < FQ.length; wQ++) bQ.buttons.push({
            pressed: !0 === uQ.call(FQ[wQ]),
            value: Number(HQ.call(FQ[wQ]))
          });
          for (let wQ = 0; wQ < vQ.length; wQ++) bQ.axes.push(Number(vQ[wQ]));
          return bQ
        } : null
      })("undefined" === typeof Gamepad ? null : Gamepad.prototype, "undefined" === typeof GamepadButton ? null : GamepadButton.prototype),
      HQ = "undefined" === typeof Navigator ? null : Navigator.prototype.getGamepads;
    var bQ = wQ(1411),
      YQ = wQ(1414);
    const xQ = QQ => ({
      pressed: QQ,
      value: QQ ? 1 : 0
    });
    var AQ = wQ(1972);
    const tQ = DQ,
      eQ = QQ => {
        const FQ = new Array(LQ.U).fill(0);
        for (let wQ = 0; wQ < LQ.U && wQ < QQ.buttons.length; wQ++) {
          const qQ = QQ.buttons[wQ];
          FQ[wQ] = qQ.pressed && !(0, LQ.N)(wQ) ? Math.max(qQ.value, LQ.C) : qQ.value
        }
        return FQ
      },
      MQ = (QQ, FQ) => {
        var wQ, LQ;
        return {
          x: null !== (wQ = QQ.axes[FQ]) && void 0 !== wQ ? wQ : 0,
          y: null !== (LQ = QQ.axes[FQ + 1]) && void 0 !== LQ ? LQ : 0
        }
      };
    const GQ = new class {
      constructor(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : uQ;
        this.readGamepads = QQ, this.requireTrustedPads = FQ, this.nativeReader = wQ, this.running = !1, this.listening = !1, this.rafId = 0, this.lastTimestampMs = 0, this.activeInfo = null, this.slots = [], this.trustedIndices = new Set, this.warnedNonStandardIds = new Set, this.loggedReadError = !1, this.frameListeners = new Set, this.connectionListeners = new Set, this.anyPadConnected = !1, this.connectedListeners = new Set, this.handleConnectionEvent = QQ => {
          QQ.isTrusted && this.trustedIndices.add(QQ.gamepad.index), this.wake()
        }, this.handleDisconnectionEvent = QQ => {
          this.trustedIndices.delete(QQ.gamepad.index)
        }, this.fH = QQ => {
          if (this.rafId = 0, !this.running) return;
          const FQ = 0 === this.lastTimestampMs ? 16 : Math.min(100, QQ - this.lastTimestampMs);
          this.lastTimestampMs = QQ;
          try {
            this.poll(QQ, FQ)
          } finally {
            this.anyPadConnected && (this.rafId = requestAnimationFrame(this.fH))
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
      onFrame(QQ) {
        return this.frameListeners.add(QQ), () => {
          this.frameListeners.delete(QQ)
        }
      }
      onActivePadChanged(QQ) {
        return this.connectionListeners.add(QQ), () => {
          this.connectionListeners.delete(QQ)
        }
      }
      getActivePad() {
        return this.activeInfo
      }
      hasConnectedPad() {
        return this.anyPadConnected
      }
      onConnectedPadsChanged(QQ) {
        return this.connectedListeners.add(QQ), () => {
          this.connectedListeners.delete(QQ)
        }
      }
      getActiveGamepad() {
        if (!this.activeInfo) return null;
        const QQ = this.readPads()[this.activeInfo.index],
          FQ = QQ ? this.readPad(QQ) : null;
        return FQ && FQ.id === this.activeInfo.id ? QQ : null
      }
      poll(QQ, FQ) {
        var wQ, qQ;
        const oQ = this.readPads();
        let DQ = null,
          vQ = !1;
        const mQ = [],
          uQ = Math.max(oQ.length, this.slots.length);
        for (let GQ = 0; GQ < uQ; GQ++) {
          var HQ;
          const FQ = GQ < oQ.length ? oQ[GQ] : null,
            wQ = FQ ? this.readPad(FQ) : null;
          if (!wQ || !wQ.connected || !this.isUsable(wQ)) {
            this.slots[GQ] = null;
            continue
          }
          let qQ = this.slots[GQ];
          qQ && qQ.id === wQ.id || (qQ = {
            id: wQ.id,
            ym: [],
            leftSettled: !1,
            rightSettled: !1,
            leftRest: new kQ,
            rightRest: new kQ
          }, this.slots[GQ] = qQ);
          const uQ = MQ(wQ, 0),
            bQ = MQ(wQ, 2);
          !qQ.leftSettled && Math.hypot(uQ.x, uQ.y) < tQ && (qQ.leftSettled = !0), !qQ.rightSettled && Math.hypot(bQ.x, bQ.y) < tQ && (qQ.rightSettled = !0), qQ.leftRest.observe(uQ, QQ), qQ.rightRest.observe(bQ, QQ);
          const YQ = eQ(wQ),
            xQ = (0, LQ.q)(YQ, qQ.ym),
            AQ = qQ.ym,
            pQ = xQ.map(((QQ, FQ) => QQ && !AQ[FQ]));
          qQ.ym = xQ;
          const cQ = {
            pad: wQ,
            slot: qQ,
            values: YQ
          };
          GQ === (null === (HQ = this.activeInfo) || void 0 === HQ ? void 0 : HQ.index) && wQ.id === this.activeInfo.id ? (DQ = cQ, vQ = pQ.includes(!0)) : pQ.includes(!0) && mQ.push({
            polled: cQ,
            rose: pQ
          })
        }
        const bQ = this.slots.some((QQ => null !== QQ));
        if (bQ !== this.anyPadConnected) {
          this.anyPadConnected = bQ;
          for (const QQ of this.connectedListeners) QQ()
        }
        const YQ = null !== (wQ = null === (qQ = DQ) || void 0 === qQ ? void 0 : qQ.slot.ym) && void 0 !== wQ ? wQ : [],
          xQ = vQ ? void 0 : mQ.find((QQ => {
            let {
              rose: FQ
            } = QQ;
            return FQ.some(((QQ, FQ) => QQ && !YQ[FQ]))
          }));
        if (xQ ? (DQ = xQ.polled, this.setActive(xQ.polled.pad)) : this.activeInfo && !DQ && this.setActive(null), !DQ || !this.activeInfo) return;
        const AQ = ((QQ, FQ) => {
          let {
            pad: wQ,
            slot: qQ,
            values: oQ
          } = QQ;
          const DQ = (0, LQ.y)(FQ);
          return DQ.values = oQ, qQ.leftSettled && (DQ.leftStick = qQ.leftRest.apply(MQ(wQ, 0))), qQ.rightSettled && (DQ.rightStick = qQ.rightRest.apply(MQ(wQ, 2))), DQ
        })(DQ, QQ);
        for (const LQ of this.frameListeners) LQ(AQ, FQ, this.activeInfo)
      }
      readPad(QQ) {
        const FQ = this.readSnapshot(QQ);
        return FQ && (0, YQ.f)(FQ) ? (QQ => {
          const FQ = FQ => {
              var wQ;
              return null !== (wQ = QQ.buttons[FQ]) && void 0 !== wQ ? wQ : xQ(!1)
            },
            wQ = FQ => {
              var wQ;
              return null !== (wQ = QQ.axes[FQ]) && void 0 !== wQ ? wQ : 0
            },
            LQ = QQ.axes.length > 9,
            qQ = LQ ? (QQ => {
              const FQ = 0 !== QQ;
              return {
                up: FQ && (QQ >= -1 && QQ < -.7 || QQ >= .95 && QQ <= 1),
                right: FQ && QQ >= -.75 && QQ < -.1,
                down: FQ && QQ >= -.2 && QQ < .45,
                left: FQ && QQ >= .4 && QQ <= 1
              }
            })(wQ(9)) : {
              up: wQ(5) < -.5,
              down: wQ(5) > .5,
              left: wQ(4) < -.5,
              right: wQ(4) > .5
            };
          return {
            ...QQ,
            mapping: "standard",
            buttons: [FQ(1), FQ(2), FQ(0), FQ(3), FQ(4), FQ(5), FQ(6), FQ(7), FQ(8), FQ(9), FQ(10), FQ(11), xQ(qQ.up), xQ(qQ.down), xQ(qQ.left), xQ(qQ.right), FQ(12)],
            axes: [wQ(0), wQ(1), wQ(2), wQ(LQ ? 5 : 3)]
          }
        })(FQ) : FQ
      }
      readSnapshot(QQ) {
        if (this.nativeReader) try {
          return this.nativeReader(QQ)
        } catch {
          if (this.requireTrustedPads) return null
        }
        return this.requireTrustedPads ? null : (QQ => {
          const FQ = QQ;
          return {
            index: FQ.index,
            id: FQ.id,
            connected: FQ.connected,
            mapping: FQ.mapping,
            buttons: Array.from(FQ.buttons, (QQ => ({
              pressed: QQ.pressed,
              value: QQ.value
            }))),
            axes: Array.from(FQ.axes),
            vendorName: mQ(QQ)
          }
        })(QQ)
      }
      isUsable(QQ) {
        return !(0, bQ.h)(QQ.id) && ("standard" !== QQ.mapping ? (this.warnedNonStandardIds.has(QQ.id) || (this.warnedNonStandardIds.add(QQ.id), console.warn(`Controller "${QQ.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.trustedIndices.has(QQ.index))
      }
      setActive(QQ) {
        this.activeInfo = QQ ? {
          index: QQ.index,
          id: QQ.id,
          family: (0, qQ.d)(QQ.id, QQ.vendorName)
        } : null;
        for (const FQ of this.connectionListeners) FQ(this.activeInfo)
      }
      readPads() {
        try {
          return this.readGamepads()
        } catch (QQ) {
          return this.loggedReadError || (this.loggedReadError = !0, console.warn("Reading gamepads failed; controller input is unavailable.", QQ)), []
        }
      }
      wake() {
        this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.fH))
      }
    }((() => HQ ? HQ.call(navigator) : []), !0);
    GQ.listenForConnections()
  },
  8399: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => LQ
    });
    const LQ = {
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
  8506: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => DQ,
      f: () => kQ
    });
    var LQ = wQ(22),
      qQ = wQ(8497);
    let oQ = !1;
    const DQ = () => oQ,
      kQ = QQ => {
        QQ !== oQ && (oQ = QQ, LQ.l.GA(qQ.h, oQ))
      }
  },
  8503: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => kQ,
      d: () => vQ
    });
    var LQ = wQ(22),
      qQ = wQ(8497);
    let oQ = null,
      DQ = 0;
    const kQ = () => oQ,
      vQ = QQ => {
        null === QQ && null === oQ || (oQ = null === QQ ? null : {
          id: ++DQ,
          holdMs: QQ
        }, LQ.l.GA(qQ.i, oQ))
      }
  },
  8510: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => DQ,
      f: () => kQ
    });
    var LQ = wQ(22),
      qQ = wQ(8497);
    let oQ = !1;
    const DQ = () => oQ,
      kQ = QQ => {
        QQ !== oQ && (oQ = QQ, LQ.l.GA(qQ.m, oQ))
      }
  },
  8596: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => DQ,
      i: () => kQ
    });
    var LQ = wQ(22),
      qQ = wQ(8497);
    let oQ = !1;
    const DQ = () => oQ,
      kQ = QQ => {
        QQ !== oQ && (oQ = QQ, LQ.l.GA(qQ.p, oQ))
      }
  },
  8456: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => LQ
    });
    class LQ {
      constructor() {
        this.downAtMs = null
      }
      update(QQ, FQ, wQ, LQ) {
        if (QQ) return this.downAtMs = wQ, null;
        if (null === this.downAtMs) return null;
        const qQ = wQ - this.downAtMs >= LQ;
        return FQ ? qQ ? (this.downAtMs = null, "hold") : null : (this.downAtMs = null, qQ ? "hold" : "tap")
      }
      release() {
        this.downAtMs = null
      }
    }
  },
  8013: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => HQ,
      i: () => bQ,
      l: () => kQ,
      p: () => GQ,
      r: () => MQ
    });
    var LQ = wQ(27),
      qQ = wQ(7975),
      oQ = wQ(7950);
    const DQ = (() => {
        try {
          return wQ(8021)
        } catch {
          return null
        }
      })(),
      kQ = [...oQ.W, "LeftStick", "RightStick"],
      vQ = new Map,
      mQ = {
        xbox: "xbox",
        playstation: "playstation",
        nintendo: "nintendo",
        steamdeck: "steamdeck",
        generic: "xbox"
      },
      uQ = (new Set(Object.values(mQ)), {
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
      HQ = (QQ, FQ) => {
        var wQ, LQ;
        return null !== (wQ = null === (LQ = uQ[mQ[QQ]]) || void 0 === LQ ? void 0 : LQ[FQ]) && void 0 !== wQ ? wQ : 1
      },
      bQ = (QQ, FQ) => {
        const wQ = `./${mQ[QQ]}/${FQ}.svg`;
        let LQ = vQ.get(wQ);
        return void 0 === LQ && (LQ = DQ ? DQ(wQ) : "", vQ.set(wQ, LQ)), LQ
      },
      YQ = new Set,
      xQ = [],
      AQ = QQ => {
        if (!YQ.has(QQ)) {
          YQ.add(QQ);
          for (const FQ of kQ) {
            const wQ = bQ(QQ, FQ);
            if (wQ) {
              const QQ = new Image;
              QQ.crossOrigin = "anonymous", QQ.src = wQ, xQ.push(QQ)
            }
          }
        }
      },
      tQ = "controllerGlyphFamily";
    let eQ = null;
    const MQ = QQ => {
        QQ !== eQ && (eQ = QQ, LQ.i.setItem(tQ, QQ), AQ(QQ))
      },
      GQ = () => {
        const QQ = LQ.i.getItem(tQ);
        (0, qQ.f)(QQ) && QQ !== eQ && (eQ = QQ, AQ(QQ))
      }
  },
  8614: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => jQ,
      g: () => aQ
    });
    var LQ = wQ(53),
      qQ = wQ(22),
      oQ = wQ(1447),
      DQ = wQ(7959),
      kQ = wQ(7945),
      vQ = wQ(7994),
      mQ = wQ(7972);
    const uQ = {
        x: 0,
        y: 0,
        z: 0
      },
      HQ = Math.PI / 180,
      bQ = QQ => Math.hypot(QQ.x, QQ.y, QQ.z),
      YQ = (QQ, FQ) => ({
        x: QQ.x * FQ,
        y: QQ.y * FQ,
        z: QQ.z * FQ
      }),
      xQ = (QQ, FQ) => ({
        x: QQ.x + FQ.x,
        y: QQ.y + FQ.y,
        z: QQ.z + FQ.z
      }),
      AQ = (QQ, FQ) => ({
        x: QQ.x - FQ.x,
        y: QQ.y - FQ.y,
        z: QQ.z - FQ.z
      }),
      tQ = QQ => {
        const FQ = bQ(QQ);
        return 0 === FQ ? uQ : YQ(QQ, 1 / FQ)
      },
      eQ = QQ => ({
        min: {
          ...QQ
        },
        max: {
          ...QQ
        }
      }),
      MQ = (QQ, FQ) => ({
        min: {
          x: Math.min(QQ.min.x, FQ.x),
          y: Math.min(QQ.min.y, FQ.y),
          z: Math.min(QQ.min.z, FQ.z)
        },
        max: {
          x: Math.max(QQ.max.x, FQ.x),
          y: Math.max(QQ.max.y, FQ.y),
          z: Math.max(QQ.max.z, FQ.z)
        }
      }),
      GQ = (QQ, FQ) => QQ.max.x - QQ.min.x <= FQ && QQ.max.y - QQ.min.y <= FQ && QQ.max.z - QQ.min.z <= FQ;
    class pQ {
      constructor() {
        this.bias = uQ, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = uQ, this.windowSec = 0
      }
      update(QQ) {
        const FQ = this.gyroRange ? MQ(this.gyroRange, QQ.gyro) : eQ(QQ.gyro),
          wQ = QQ.accel ? this.accelRange ? MQ(this.accelRange, QQ.accel) : eQ(QQ.accel) : null;
        if (!GQ(FQ, 1) || wQ && !GQ(wQ, .01)) return void this.restartWindow(QQ);
        if (this.gyroRange = FQ, this.accelRange = wQ, this.sum = xQ(this.sum, YQ(QQ.gyro, QQ.dtSec)), this.windowSec += QQ.dtSec, this.windowSec < 1) return;
        const LQ = YQ(this.sum, 1 / this.windowSec);
        if (bQ(LQ) > 5) return;
        const qQ = AQ(LQ, this.bias);
        let oQ = 0;
        !this.calibrated || this.windowSec >= 3 ? oQ = 1 : bQ(qQ) <= 1 && (oQ = Math.min(1, QQ.dtSec / 1)), this.bias = xQ(this.bias, YQ(qQ, oQ)), this.calibrated = this.calibrated || oQ > 0
      }
      correct(QQ) {
        return AQ(QQ, this.bias)
      }
      getBias() {
        return this.bias
      }
      isCalibrated() {
        return this.calibrated
      }
      reset() {
        this.bias = uQ, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = uQ, this.windowSec = 0
      }
      restartWindow(QQ) {
        this.gyroRange = eQ(QQ.gyro), this.accelRange = QQ.accel ? eQ(QQ.accel) : null, this.sum = uQ, this.windowSec = 0
      }
    }
    class cQ {
      constructor() {
        this.down = null
      }
      update(QQ, FQ, wQ) {
        const LQ = tQ(YQ(FQ, -1));
        if (!this.down) return this.down = LQ, LQ;
        const qQ = YQ(QQ, HQ * wQ),
          oQ = this.down,
          DQ = {
            x: oQ.x - (qQ.y * oQ.z - qQ.z * oQ.y),
            y: oQ.y - (qQ.z * oQ.x - qQ.x * oQ.z),
            z: oQ.z - (qQ.x * oQ.y - qQ.y * oQ.x)
          },
          kQ = 0 === bQ(LQ) ? 0 : Math.min(1, wQ / .25);
        var vQ, mQ;
        return this.down = tQ((mQ = kQ, xQ(vQ = DQ, YQ(AQ(LQ, vQ), mQ)))), this.down
      }
      reset() {
        this.down = null
      }
    }
    class CQ {
      constructor() {
        this.entries = [], this.windowSec = 0
      }
      apply(QQ, FQ, wQ) {
        const LQ = Math.hypot(QQ, FQ),
          qQ = Math.max(0, Math.min(1, (LQ - 2) / 2)),
          oQ = {
            yaw: QQ * (1 - qQ),
            pitch: FQ * (1 - qQ),
            dtSec: wQ
          };
        for (this.entries.push(oQ), this.windowSec += wQ; this.entries.length > 1 && this.windowSec - this.entries[0].dtSec >= .125;) this.windowSec -= this.entries[0].dtSec, this.entries.shift();
        let DQ = 0,
          kQ = 0;
        for (const mQ of this.entries) DQ += mQ.yaw * mQ.dtSec, kQ += mQ.pitch * mQ.dtSec;
        const vQ = this.windowSec > 0 ? {
          yaw: DQ / this.windowSec,
          pitch: kQ / this.windowSec
        } : {
          yaw: oQ.yaw,
          pitch: oQ.pitch
        };
        return {
          yaw: QQ * qQ + vQ.yaw,
          pitch: FQ * qQ + vQ.pitch
        }
      }
      reset() {
        this.entries = [], this.windowSec = 0
      }
    }
    class SQ {
      constructor() {
        this.calibrator = new pQ, this.gravity = new cQ, this.smoother = new CQ
      }
      process(QQ, FQ, wQ) {
        const LQ = Math.max(0, Math.min(.05, FQ));
        this.calibrator.update({
          ...QQ,
          dtSec: LQ
        });
        const qQ = this.calibrator.correct(QQ.gyro);
        let oQ = qQ.y;
        "player" === wQ && QQ.accel && (oQ = ((QQ, FQ) => {
          const wQ = QQ.y * FQ.y + QQ.z * FQ.z;
          return -Math.sign(wQ) * Math.min(1.41 * Math.abs(wQ), Math.hypot(QQ.y, QQ.z))
        })(qQ, this.gravity.update(qQ, QQ.accel, LQ)));
        const DQ = this.smoother.apply(oQ, qQ.x, LQ),
          kQ = ((QQ, FQ) => {
            const wQ = Math.hypot(QQ, FQ);
            if (wQ >= 1) return {
              yaw: QQ,
              pitch: FQ
            };
            const LQ = wQ / 1;
            return {
              yaw: QQ * LQ,
              pitch: FQ * LQ
            }
          })(DQ.yaw, DQ.pitch);
        return {
          yawDeg: kQ.yaw * LQ,
          pitchDeg: kQ.pitch * LQ
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
    const iQ = (QQ, FQ) => {
      var wQ, LQ, qQ;
      const oQ = FQ * HQ,
        DQ = null !== (wQ = QQ.beta) && void 0 !== wQ ? wQ : 0,
        kQ = null !== (LQ = QQ.gamma) && void 0 !== LQ ? LQ : 0;
      return {
        x: DQ * Math.cos(oQ) - kQ * Math.sin(oQ),
        y: DQ * Math.sin(oQ) + kQ * Math.cos(oQ),
        z: null !== (qQ = QQ.alpha) && void 0 !== qQ ? qQ : 0
      }
    };
    var WQ = wQ(8621);
    class RQ {
      constructor(QQ, FQ, wQ) {
        this.hid = QQ, this.sink = FQ, this.onControllersChanged = wQ, this.controllers = new Map, this.running = !1, this.openedCount = 0, this.opening = new Set, this.disconnectedWhileOpening = new Set, this.switchPacketCounter = 0, this.onConnect = QQ => {
          this.openController(QQ.device).catch((QQ => {
            console.warn("Could not open motion controller", QQ)
          }))
        }, this.onDisconnect = QQ => {
          this.opening.has(QQ.device) && this.disconnectedWhileOpening.add(QQ.device);
          const FQ = this.controllers.get(QQ.device);
          FQ && (this.forget(FQ), this.onControllersChanged())
        }
      }
      async start() {
        if (this.running) return;
        this.running = !0, this.hid.addEventListener("connect", this.onConnect), this.hid.addEventListener("disconnect", this.onDisconnect);
        const QQ = await this.hid.getDevices();
        for (const FQ of QQ) await this.openController(FQ).catch((QQ => {
          console.warn("Could not open motion controller", QQ)
        }))
      }
      stop() {
        this.running = !1, this.hid.removeEventListener("connect", this.onConnect), this.hid.removeEventListener("disconnect", this.onDisconnect);
        for (const QQ of [...this.controllers.values()]) this.forget(QQ);
        this.onControllersChanged()
      }
      async request() {
        const QQ = await this.hid.requestDevice({
          filters: WQ.o
        });
        let FQ = 0;
        for (const wQ of QQ) await this.openController(wQ).catch((QQ => {
          console.warn("Could not open motion controller", QQ), FQ++
        }));
        return FQ
      }
      async hasGrantedController() {
        return (await this.hid.getDevices()).some((QQ => null !== (0, WQ.h)(QQ.vendorId, QQ.productId)))
      }
      getConnectedKinds() {
        return [...this.controllers.values()].map((QQ => QQ.kind))
      }
      forget(QQ) {
        QQ.device.removeEventListener("inputreport", QQ.onReport), this.controllers.get(QQ.device) === QQ && this.controllers.delete(QQ.device)
      }
      async openController(QQ) {
        const FQ = (0, WQ.h)(QQ.vendorId, QQ.productId);
        if (!FQ || !this.running || this.controllers.has(QQ) || this.opening.has(QQ)) return;
        this.opening.add(QQ);
        let wQ = !1;
        try {
          QQ.opened || await QQ.open()
        } finally {
          this.opening.delete(QQ), wQ = this.disconnectedWhileOpening.delete(QQ)
        }
        if (wQ) return void QQ.close().catch((QQ => {
          console.debug("Could not close an unplugged motion controller", QQ)
        }));
        if (!this.running) return;
        const LQ = {
          device: QQ,
          kind: FQ,
          lastClock: null,
          lastEventMs: null,
          lastReadingMs: -1 / 0,
          openedOrder: this.openedCount++,
          onReport: QQ => {
            this.onReport(LQ, QQ)
          }
        };
        this.controllers.set(QQ, LQ), QQ.addEventListener("inputreport", LQ.onReport), this.onControllersChanged();
        try {
          await this.enableMotion(LQ)
        } catch (qQ) {
          console.warn(`Could not turn on motion for ${FQ}`, qQ), this.controllers.get(QQ) === LQ && (this.forget(LQ), this.onControllersChanged())
        }
      }
      async enableMotion(QQ) {
        let {
          device: FQ,
          kind: wQ
        } = QQ;
        if ((0, WQ.l)(wQ))
          for (const LQ of WQ.D[wQ]) await FQ.receiveFeatureReport(LQ).catch((QQ => {
            console.debug(`Motion controller feature report ${LQ} unavailable`, QQ)
          }));
        else
          for (let LQ = 0; LQ < 2; LQ++)
            for (const {
                subcommand: QQ,
                args: wQ
              }
              of WQ.F) await FQ.sendReport(WQ.J, (0, WQ.e)(this.switchPacketCounter++, QQ, wQ)), await new Promise((QQ => {
              setTimeout(QQ, 60)
            }))
      }
      onReport(QQ, FQ) {
        const wQ = (0, WQ.v)(QQ.kind, FQ.reportId, FQ.data, QQ.device.productId);
        if (!wQ) return;
        const LQ = null === QQ.lastEventMs ? 0 : (FQ.timeStamp - QQ.lastEventMs) / 1e3;
        QQ.lastEventMs = FQ.timeStamp;
        let qQ = wQ.dtSec;
        if (null !== qQ && LQ > 0 && (qQ = Math.max(.001, Math.min(.017, LQ / wQ.readings.length))), null === qQ && null !== wQ.sensorClock && (0, WQ.l)(QQ.kind)) {
          const FQ = (0, WQ.z)(QQ.kind, QQ.lastClock, wQ.sensorClock);
          QQ.lastClock = wQ.sensorClock, qQ = 0 === FQ ? null : FQ
        }
        if (QQ.lastReadingMs = FQ.timeStamp, this.isPreferred(QQ, FQ.timeStamp))
          for (const DQ of wQ.readings) {
            var oQ;
            this.sink(DQ, null !== (oQ = qQ) && void 0 !== oQ ? oQ : LQ, `hid${QQ.openedOrder}`)
          }
      }
      isPreferred(QQ, FQ) {
        const wQ = QQ => 1e6 * WQ.u[QQ.kind] + QQ.openedOrder;
        for (const LQ of this.controllers.values())
          if (LQ !== QQ && FQ - LQ.lastReadingMs < 500 && wQ(LQ) < wQ(QQ)) return !1;
        return !0
      }
    }
    var OQ = wQ(96);
    const sQ = () => DeviceMotionEvent,
      rQ = () => "undefined" !== typeof window && "undefined" !== typeof DeviceMotionEvent && window.isSecureContext && (0, OQ.isMobile)(),
      IQ = () => {
        var QQ;
        const FQ = null === (QQ = window.screen.orientation) || void 0 === QQ ? void 0 : QQ.angle;
        return "number" === typeof FQ ? FQ : "number" === typeof window.orientation ? window.orientation : 0
      };
    class UQ {
      constructor(QQ, FQ) {
        this.sink = QQ, this.onStateChanged = FQ, this.state = "off", this.lastEventMs = null, this.noSensorTimer = null, this.wanted = !1, this.permissionRequest = null, this.granted = !1, this.onGesture = () => {
          this.requestPermission().catch((QQ => {
            console.warn("Could not enable the motion sensor", QQ)
          }))
        }, this.onMotion = QQ => {
          const FQ = QQ.rotationRate;
          if (!FQ || null === FQ.alpha && null === FQ.beta && null === FQ.gamma) return;
          const wQ = null === this.lastEventMs ? 0 : (QQ.timeStamp - this.lastEventMs) / 1e3;
          this.lastEventMs = QQ.timeStamp, this.clearNoSensorTimer(), this.setState("on"), this.sink({
            gyro: iQ(FQ, IQ()),
            accel: null
          }, wQ, "phone")
        }
      }
      getState() {
        return this.state
      }
      start() {
        if (this.wanted = !0, "off" === this.state) return "function" !== typeof sQ().requestPermission || this.granted ? void this.listen() : (this.setState("needsPermission"), void this.armGestureRequest())
      }
      requestPermission() {
        return this.permissionRequest || (this.permissionRequest = this.askPermission().finally((() => {
          this.permissionRequest = null
        }))), this.permissionRequest
      }
      async askPermission() {
        const QQ = sQ().requestPermission;
        if (!this.wanted) return;
        if ("function" !== typeof QQ) return void this.listen();
        let FQ;
        this.disarmGestureRequest();
        try {
          FQ = await QQ.call(DeviceMotionEvent)
        } catch (wQ) {
          throw this.wanted && "needsPermission" === this.state && this.armGestureRequest(), wQ
        }
        this.wanted && ("granted" === FQ ? (this.granted = !0, this.listen()) : this.setState("denied"))
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
      setState(QQ) {
        this.state !== QQ && (this.state = QQ, this.onStateChanged())
      }
    }
    const NQ = "controllerGyroStatusChanged",
      TQ = {
        PU: 0,
        dU: 0
      },
      KQ = QQ => {
        var FQ, wQ;
        return "undefined" === typeof document || (null === (FQ = null === (wQ = document.featurePolicy) || void 0 === wQ ? void 0 : wQ.allowsFeature(QQ)) || void 0 === FQ || FQ)
      };
    class zQ {
      constructor() {
        this.processor = new SQ, this.hid = void 0, this.hidBlocked = void 0, this.phone = void 0, this.phoneBlocked = void 0, this.source = null, this.pendingYawDeg = 0, this.pendingPitchDeg = 0, this.lastDrainMs = -1 / 0, this.lastHidReadingMs = -1 / 0, this.running = !1, this.phoneRunning = !1, this.syncWithSettings = QQ => {
          const FQ = QQ.gyroAiming && kQ.f.hasConnectedPad();
          var wQ, LQ;
          FQ !== this.phoneRunning && (this.phoneRunning = FQ, FQ ? null === (wQ = this.phone) || void 0 === wQ || wQ.start() : null === (LQ = this.phone) || void 0 === LQ || LQ.stop());
          if (QQ.gyroAiming !== this.running) {
            var qQ, oQ;
            if (this.running = QQ.gyroAiming, this.running) null === (qQ = this.hid) || void 0 === qQ || qQ.start().catch((QQ => {
              console.warn("Could not open motion controllers", QQ)
            }));
            else null === (oQ = this.hid) || void 0 === oQ || oQ.stop(), this.processor.reset(), this.source = null, this.discardPending();
            this.publishStatus()
          }
        }, this.publishStatus = () => {
          qQ.l.GA(NQ, this.getStatus())
        };
        const QQ = (() => {
            var QQ;
            return "undefined" !== typeof navigator && window.isSecureContext && null !== (QQ = navigator.hid) && void 0 !== QQ ? QQ : null
          })(),
          FQ = KQ("hid");
        this.hidBlocked = null !== QQ && !FQ, this.hid = QQ && FQ ? new RQ(QQ, ((QQ, FQ, wQ) => {
          this.lastHidReadingMs = performance.now(), this.feed(QQ, FQ, "player", wQ)
        }), this.publishStatus) : null;
        const wQ = KQ("accelerometer") && KQ("gyroscope");
        this.phoneBlocked = rQ() && !wQ, this.phone = rQ() && wQ ? new UQ(((QQ, FQ, wQ) => {
          performance.now() - this.lastHidReadingMs >= 500 && this.feed(QQ, FQ, "local", wQ)
        }), this.publishStatus) : null, qQ.l.subscribe(mQ.f, this.syncWithSettings), kQ.f.onConnectedPadsChanged((() => {
          this.syncWithSettings((0, mQ.h)()), this.publishStatus()
        })), this.syncWithSettings((0, mQ.h)())
      }
      isSupported() {
        return null !== this.hid || null !== this.phone
      }
      getStatus() {
        var QQ, FQ, wQ, LQ;
        return {
          hidSupported: null !== this.hid,
          hidBlocked: this.hidBlocked,
          phoneSupported: null !== this.phone,
          phoneBlocked: this.phoneBlocked,
          controllers: null !== (QQ = null === (FQ = this.hid) || void 0 === FQ ? void 0 : FQ.getConnectedKinds()) && void 0 !== QQ ? QQ : [],
          phoneMotion: null !== (wQ = null === (LQ = this.phone) || void 0 === LQ ? void 0 : LQ.getState()) && void 0 !== wQ ? wQ : "off",
          padConnected: kQ.f.hasConnectedPad()
        }
      }
      async connectController() {
        return this.hid ? this.hid.request() : 0
      }
      async connectControllerIfNoneGranted() {
        this.hid && !await this.hid.hasGrantedController() && await this.hid.request()
      }
      async allowPhoneMotion() {
        var QQ;
        await (null === (QQ = this.phone) || void 0 === QQ ? void 0 : QQ.requestPermission())
      }
      drainLookDelta() {
        const QQ = performance.now();
        QQ - this.lastDrainMs > 500 && this.discardPending(), this.lastDrainMs = QQ;
        const FQ = {
          yawDeg: this.pendingYawDeg,
          pitchDeg: this.pendingPitchDeg
        };
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0;
        const wQ = (0, mQ.h)();
        return wQ.gyroAiming && (QQ => {
          let {
            activation: FQ,
            isHeld: wQ,
            useButton: LQ,
            gyroButton: qQ
          } = QQ;
          return "always" === FQ || wQ("aiming" === FQ ? LQ : qQ)
        })({
          activation: wQ.gyroActivation,
          isHeld: QQ => vQ.b.isButtonHeld(QQ),
          useButton: (0, DQ.g)("use"),
          gyroButton: wQ.gyroButton
        }) ? ((QQ, FQ) => ({
          PU: -QQ.yawDeg * FQ * HQ,
          dU: -QQ.pitchDeg * FQ * HQ
        }))(FQ, wQ.gyroSensitivity) : TQ
      }
      discardPending() {
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0
      }
      injectMotion(QQ, FQ) {
        this.feed(QQ, FQ, "local", "injected")
      }
      getCalibration() {
        return this.processor.getCalibration()
      }
      feed(QQ, FQ, wQ, LQ) {
        this.source !== LQ && (this.processor.reset(), this.source = LQ);
        const qQ = this.processor.process(QQ, FQ, wQ);
        this.pendingYawDeg += qQ.yawDeg, this.pendingPitchDeg += qQ.pitchDeg
      }
    }
    let lQ = null;
    const jQ = () => (lQ || (lQ = new zQ), lQ),
      aQ = () => {
        const [QQ, FQ] = (0, LQ.useState)((() => jQ().getStatus()));
        return (0, oQ.g)(NQ, FQ), (0, LQ.useEffect)((() => {
          FQ(jQ().getStatus())
        }), []), QQ
      }
  },
  8621: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      D: () => SQ,
      F: () => CQ,
      J: () => GQ,
      e: () => cQ,
      h: () => vQ,
      l: () => LQ,
      o: () => kQ,
      q: () => mQ,
      u: () => uQ,
      v: () => MQ,
      z: () => tQ
    });
    const LQ = QQ => "dualShock4" === QQ || "dualSense" === QQ,
      qQ = 1356,
      oQ = 1406,
      DQ = [{
        vendorId: qQ,
        productId: 1476,
        kind: "dualShock4"
      }, {
        vendorId: qQ,
        productId: 2508,
        kind: "dualShock4"
      }, {
        vendorId: qQ,
        productId: 2976,
        kind: "dualShock4"
      }, {
        vendorId: qQ,
        productId: 3302,
        kind: "dualSense"
      }, {
        vendorId: qQ,
        productId: 3570,
        kind: "dualSense"
      }, {
        vendorId: oQ,
        productId: 8201,
        kind: "switchPro"
      }, {
        vendorId: oQ,
        productId: 8198,
        kind: "joyConLeft"
      }, {
        vendorId: oQ,
        productId: 8199,
        kind: "joyConRight"
      }],
      kQ = DQ.map((QQ => {
        let {
          vendorId: FQ,
          productId: wQ
        } = QQ;
        return {
          vendorId: FQ,
          productId: wQ
        }
      })),
      vQ = (QQ, FQ) => {
        var wQ, LQ;
        return null !== (wQ = null === (LQ = DQ.find((wQ => wQ.vendorId === QQ && wQ.productId === FQ))) || void 0 === LQ ? void 0 : LQ.kind) && void 0 !== wQ ? wQ : null
      },
      mQ = {
        dualShock4: "DualShock 4",
        dualSense: "DualSense",
        switchPro: "Switch Pro Controller",
        joyConLeft: "Joy-Con (L)",
        joyConRight: "Joy-Con (R)"
      },
      uQ = {
        dualSense: 0,
        dualShock4: 0,
        switchPro: 0,
        joyConRight: 1,
        joyConLeft: 2
      },
      HQ = 2e3 / 32767,
      bQ = 1 / 8192,
      YQ = 936 / 13371,
      xQ = (QQ, FQ, wQ) => ({
        x: QQ.getInt16(FQ, !0) * wQ,
        y: QQ.getInt16(FQ + 2, !0) * wQ,
        z: QQ.getInt16(FQ + 4, !0) * wQ
      }),
      AQ = QQ => 0 === QQ.x && 0 === QQ.y && 0 === QQ.z,
      tQ = (QQ, FQ, wQ) => null === FQ ? null : "dualShock4" === QQ ? 16 * (wQ - FQ & 65535) / 3 / 1e6 : (wQ - FQ >>> 0) / 3 / 1e6,
      eQ = (QQ, FQ) => "joyConRight" === FQ ? {
        x: QQ.y,
        y: -QQ.z,
        z: -QQ.x
      } : {
        x: -QQ.y,
        y: QQ.z,
        z: -QQ.x
      },
      MQ = (QQ, FQ, wQ, qQ) => LQ(QQ) ? ((QQ, FQ, wQ, LQ) => {
        const qQ = ((QQ, FQ, wQ) => "dualShock4" === QQ ? 1 === FQ && wQ >= 63 ? 0 : 17 === FQ && wQ >= 65 ? 2 : null : 1 === FQ && wQ >= 62 ? 0 : 49 === FQ && wQ >= 63 ? 1 : null)(QQ, FQ, wQ.byteLength);
        if (null === qQ) return null;
        if (2976 === LQ && 1 === FQ && 0 !== (4 & wQ.getUint8(30))) return null;
        const oQ = qQ + ("dualShock4" === QQ ? 12 : 15),
          DQ = xQ(wQ, oQ, HQ),
          kQ = xQ(wQ, oQ + 6, bQ);
        return AQ(DQ) && AQ(kQ) ? null : {
          readings: [{
            gyro: DQ,
            accel: kQ
          }],
          dtSec: null,
          sensorClock: "dualShock4" === QQ ? wQ.getUint16(qQ + 9, !0) : wQ.getUint32(qQ + 27, !0)
        }
      })(QQ, FQ, wQ, qQ) : ((QQ, FQ, wQ) => {
        if (48 !== FQ && 49 !== FQ || wQ.byteLength < 48) return null;
        const LQ = [];
        for (let qQ = 0; qQ < 3; qQ++) {
          const FQ = xQ(wQ, 12 + 12 * qQ, 244e-6),
            oQ = xQ(wQ, 18 + 12 * qQ, YQ);
          if (AQ(oQ) && AQ(FQ)) return null;
          LQ.push({
            gyro: eQ(oQ, QQ),
            accel: eQ(FQ, QQ)
          })
        }
        return {
          readings: LQ,
          dtSec: .005,
          sensorClock: null
        }
      })(QQ, FQ, wQ),
      GQ = 1,
      pQ = [0, 1, 64, 64, 0, 1, 64, 64],
      cQ = (QQ, FQ, wQ) => new Uint8Array([15 & QQ, ...pQ, FQ, ...wQ]),
      CQ = [{
        subcommand: 64,
        args: [1]
      }, {
        subcommand: 3,
        args: [48]
      }],
      SQ = {
        dualShock4: [2, 5],
        dualSense: [5]
      }
  },
  7996: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => sQ,
      e: () => zQ,
      g: () => eQ,
      j: () => YQ.d,
      m: () => UQ,
      o: () => IQ,
      q: () => MQ,
      t: () => NQ,
      x: () => YQ.l,
      z: () => YQ.n,
      C: () => lQ,
      G: () => YQ.q,
      J: () => iQ
    });
    var LQ = wQ(53),
      qQ = wQ(17),
      oQ = wQ(22),
      DQ = wQ(1447),
      kQ = wQ(1302),
      vQ = wQ(7972),
      mQ = wQ(8005),
      uQ = wQ(7957),
      HQ = wQ(7945),
      bQ = wQ(8013),
      YQ = wQ(1395),
      xQ = wQ(7950),
      AQ = wQ(8389),
      tQ = wQ(4243);
    const eQ = QQ => !QQ.repeat && !(0, AQ.b)(QQ.key),
      MQ = "PadHidesCursor";
    let GQ = !1;
    const pQ = QQ => {
        QQ !== GQ && (GQ = QQ, document.documentElement.classList.toggle(MQ, QQ))
      },
      cQ = new class {
        constructor() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
        observe(QQ) {
          let FQ = !1,
            wQ = !1;
          QQ.values.forEach(((QQ, LQ) => {
            const qQ = QQ >= (this.buttonsDown[LQ] ? xQ.T : xQ.R);
            qQ && !this.buttonsDown[LQ] && (FQ = !0, wQ = !0), this.buttonsDown[LQ] = qQ
          }));
          return [QQ.leftStick, QQ.rightStick].forEach(((QQ, LQ) => {
            const qQ = this.stickAnchors[LQ];
            Math.hypot(QQ.x, QQ.y) < (qQ ? xQ.T : .3) ? this.stickAnchors[LQ] = null : (!qQ || Math.hypot(QQ.x - qQ.x, QQ.y - qQ.y) >= .3) && (this.stickAnchors[LQ] = {
              x: QQ.x,
              y: QQ.y
            }, FQ = !0, wQ ||= !qQ)
          })), FQ && (this.lastActivityMs = QQ.timestampMs), this.onlyMovedOn = FQ && !wQ, FQ
        }
        wasOnlyMoveOn() {
          return this.onlyMovedOn
        }
        isHolding(QQ) {
          return !(QQ - this.lastActivityMs >= 1e3) && (this.buttonsDown.some((QQ => QQ)) || this.stickAnchors.some((QQ => null !== QQ)))
        }
        isStickOffRest() {
          return this.stickAnchors.some((QQ => null !== QQ))
        }
        reset() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
      };
    let CQ = null,
      SQ = !1;
    const iQ = () => SQ;
    let WQ = null,
      RQ = !1,
      OQ = null;
    const sQ = () => OQ;
    let rQ = !1;
    const IQ = QQ => {
        if (!cQ.observe(QQ)) return !1;
        if (rQ && cQ.wasOnlyMoveOn() && !(0, YQ.d)()) return !1;
        rQ = !1, SQ = !1;
        const FQ = !(0, YQ.d)();
        return FQ && (CQ = QQ, OQ = !GQ && RQ && WQ ? {
          ...WQ
        } : null), RQ = !1, (0, YQ.l)("gamepad"), pQ(!0), (0, bQ.r)((0, vQ.i)()), FQ
      },
      UQ = QQ => !(0, YQ.d)() || QQ === CQ,
      NQ = () => {
        cQ.reset()
      },
      TQ = () => {
        const QQ = qQ.c.get("activeInputDevice"),
          FQ = "gamepad" === QQ ? HQ.f.getActivePad() : null;
        return {
          device: QQ,
          inGame: (0, kQ.p)(),
          padMovesMouse: null !== FQ && (0, uQ.g)(FQ.id)
        }
      },
      KQ = QQ => {
        document.pointerLockElement ? WQ = null : (WQ ??= {
          x: 0,
          y: 0
        }, WQ.x = QQ.clientX, WQ.y = QQ.clientY)
      },
      zQ = () => {
        const QQ = new tQ.d,
          FQ = FQ => {
            QQ.reset(), rQ = !1, (0, YQ.l)(FQ)
          },
          wQ = QQ => {
            if (QQ.isTrusted) {
              if (QQ instanceof KeyboardEvent) {
                if ((0, YQ.h)(QQ), !eQ(QQ)) return;
                SQ = !0
              }
              if (QQ instanceof PointerEvent && "touch" === QQ.pointerType) return WQ = null, void FQ("touch");
              QQ instanceof PointerEvent && (KQ(QQ), RQ = !0), ("pointerdown" !== QQ.type || (QQ => {
                let {
                  device: FQ,
                  inGame: wQ,
                  padMovesMouse: LQ
                } = QQ;
                return !("gamepad" === FQ && LQ && wQ)
              })(TQ())) && FQ("keyboardMouse")
            }
          },
          LQ = QQ => {
            QQ.isTrusted && (WQ = null, FQ("touch"))
          },
          DQ = QQ => {
            QQ.isTrusted && "touch" !== QQ.pointerType && !QQ.relatedTarget && (WQ = null)
          },
          kQ = wQ => {
            if (!wQ.isTrusted || "touch" === wQ.pointerType) return;
            KQ(wQ);
            const LQ = wQ.movementX || 0,
              oQ = wQ.movementY || 0;
            if (0 === LQ && 0 === oQ) return;
            if (RQ = !0, pQ(!1), "keyboardMouse" === qQ.c.get("activeInputDevice")) return;
            const DQ = cQ.isHolding(wQ.timeStamp),
              kQ = TQ(),
              vQ = (QQ => {
                let {
                  device: FQ,
                  inGame: wQ,
                  padMovesMouse: LQ,
                  padHolding: qQ
                } = QQ;
                return ("gamepad" !== FQ || !LQ) && "keyboardMouse" !== FQ && (wQ || !qQ)
              })({
                ...kQ,
                inGame: kQ.inGame && (0, mQ.g)(),
                padHolding: DQ
              });
            vQ && QQ.add(LQ, oQ, wQ.timeStamp) && (FQ("keyboardMouse"), rQ = cQ.isStickOffRest())
          },
          vQ = QQ => {
            pQ("gamepad" === QQ)
          },
          uQ = {
            capture: !0,
            passive: !0
          };
        window.addEventListener("keydown", wQ, uQ), window.addEventListener("pointerdown", wQ, uQ), window.addEventListener("wheel", wQ, uQ), window.addEventListener("touchstart", LQ, uQ), window.addEventListener("pointermove", kQ, uQ), window.addEventListener("pointerout", DQ, uQ);
        const HQ = oQ.l.subscribe("appManagerUpdated|activeInputDevice", vQ);
        return vQ(qQ.c.get("activeInputDevice")), () => {
          window.removeEventListener("keydown", wQ, uQ), window.removeEventListener("pointerdown", wQ, uQ), window.removeEventListener("wheel", wQ, uQ), window.removeEventListener("touchstart", LQ, uQ), window.removeEventListener("pointermove", kQ, uQ), window.removeEventListener("pointerout", DQ, uQ), WQ = null, oQ.l.unsubscribe(HQ), pQ(!1)
        }
      },
      lQ = () => {
        const [QQ, FQ] = (0, LQ.useState)(vQ.i);
        return (0, DQ.g)(vQ.c, (() => {
          FQ((0, vQ.i)())
        })), (0, DQ.g)(HQ.e, (() => {
          FQ((0, vQ.i)())
        })), QQ
      }
  },
  7975: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => LQ,
      f: () => qQ
    });
    const LQ = ["xbox", "playstation", "nintendo", "steamdeck", "generic"],
      qQ = QQ => LQ.includes(QQ)
  },
  8005: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => mQ,
      g: () => uQ,
      j: () => vQ,
      m: () => kQ
    });
    var LQ = wQ(17),
      qQ = wQ(1641),
      oQ = wQ(1729);
    const DQ = new Map,
      kQ = (QQ, FQ) => (DQ.has(QQ) && console.warn(`Gameplay blocker "${QQ}" registered twice; the newer one replaces it.`), DQ.set(QQ, FQ), () => {
        DQ.get(QQ) === FQ && DQ.delete(QQ)
      }),
      vQ = () => (0, oQ.d)(document.activeElement),
      mQ = function() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const [FQ, wQ] of DQ)
          if (!QQ.includes(FQ) && wQ()) return FQ;
        return null
      },
      uQ = function() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return "inGame" === LQ.c.get("gameState") && (!(0, qQ.m)() && (!vQ() && null === mQ(QQ)))
      }
  },
  7950: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      C: () => HQ,
      D: () => GQ,
      E: () => rQ,
      I: () => pQ,
      J: () => eQ,
      N: () => tQ,
      O: () => mQ,
      R: () => bQ,
      T: () => YQ,
      U: () => qQ,
      W: () => LQ,
      Z: () => CQ,
      bb: () => OQ,
      d: () => UQ,
      db: () => IQ,
      f: () => sQ,
      gb: () => cQ,
      i: () => uQ,
      j: () => vQ,
      l: () => kQ,
      p: () => iQ,
      q: () => MQ,
      u: () => SQ,
      y: () => oQ
    });
    const LQ = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "View", "Menu", "LS", "RS", "Up", "Down", "Left", "Right", "Home"],
      qQ = LQ.length,
      oQ = function() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return {
          values: new Array(qQ).fill(0),
          leftStick: {
            x: 0,
            y: 0
          },
          rightStick: {
            x: 0,
            y: 0
          },
          timestampMs: QQ
        }
      },
      DQ = Object.fromEntries(LQ.map(((QQ, FQ) => [QQ, FQ]))),
      kQ = QQ => DQ[QQ],
      vQ = function(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .95;
        const LQ = Math.hypot(QQ.x, QQ.y);
        if (LQ <= FQ) return {
          x: 0,
          y: 0
        };
        const qQ = Math.min(1, (LQ - FQ) / Math.max(1e-4, wQ - FQ));
        return {
          x: QQ.x / LQ * qQ,
          y: QQ.y / LQ * qQ
        }
      },
      mQ = ["exponential", "linear", "boost"],
      uQ = (QQ, FQ) => {
        const wQ = Math.hypot(QQ.x, QQ.y);
        if (0 === wQ) return {
          x: 0,
          y: 0
        };
        const LQ = ((QQ, FQ) => {
          const wQ = Math.max(0, Math.min(1, QQ));
          return "linear" === FQ ? wQ : wQ * wQ
        })(wQ, FQ);
        return {
          x: QQ.x / wQ * LQ,
          y: QQ.y / wQ * LQ
        }
      },
      HQ = .5,
      bQ = .3,
      YQ = .2,
      xQ = kQ("LT"),
      AQ = kQ("RT"),
      tQ = QQ => QQ === xQ || QQ === AQ,
      eQ = (QQ, FQ) => {
        const wQ = kQ(FQ);
        return tQ(wQ) ? QQ[wQ] > .35 : QQ[wQ] >= HQ
      },
      MQ = (QQ, FQ) => QQ.map(((QQ, wQ) => tQ(wQ) ? FQ[wQ] ? QQ > .35 : QQ >= .55 : QQ >= HQ)),
      GQ = ["Up", "Down", "Left", "Right"],
      pQ = QQ => GQ.includes(QQ),
      cQ = function(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
        return Math.hypot(QQ.x, QQ.y) < FQ ? null : Math.abs(QQ.x) > Math.abs(QQ.y) ? QQ.x > 0 ? "Right" : "Left" : QQ.y > 0 ? "Down" : "Up"
      },
      CQ = {
        initialDelayMs: 350,
        intervalMs: 120
      },
      SQ = {
        initialDelayMs: 350,
        intervalMs: 150
      },
      iQ = ["default", "slow", "off"],
      WQ = 800,
      RQ = 250,
      OQ = (QQ, FQ) => "off" === FQ ? null : "slow" === FQ ? {
        initialDelayMs: Math.max(QQ.initialDelayMs, WQ),
        intervalMs: Math.max(QQ.intervalMs, RQ)
      } : QQ;
    class sQ {
      constructor(QQ) {
        this.readTiming = QQ, this.ym = !1, this.timing = null, this.nextFireMs = 0
      }
      update(QQ, FQ) {
        return QQ ? this.ym ? !!(this.timing && FQ >= this.nextFireMs) && (this.nextFireMs = FQ + this.timing.intervalMs, !0) : (this.ym = !0, this.timing = this.readTiming(), this.nextFireMs = FQ + (null !== (wQ = null === (LQ = this.timing) || void 0 === LQ ? void 0 : LQ.initialDelayMs) && void 0 !== wQ ? wQ : 0), !0) : (this.ym = !1, !1);
        var wQ, LQ
      }
      reset() {
        this.ym = !1
      }
    }
    const rQ = {
        initialDelayMs: 350,
        intervalMs: 80
      },
      IQ = {
        initialDelayMs: 400,
        intervalMs: 90
      };
    class UQ {
      constructor(QQ) {
        this.timer = QQ, this.direction = null
      }
      update(QQ, FQ) {
        return QQ !== this.direction && (this.timer.reset(), this.direction = QQ), this.timer.update(null !== QQ, FQ) ? QQ : null
      }
      reset() {
        this.timer.reset(), this.direction = null
      }
    }
  },
  8447: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => qQ,
      c: () => oQ
    });
    let LQ = -1 / 0;
    const qQ = () => {
        LQ = performance.now()
      },
      oQ = QQ => performance.now() - LQ < QQ
  },
  8397: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => DQ,
      f: () => oQ
    });
    var LQ = wQ(7972),
      qQ = wQ(7950);
    const oQ = QQ => (0, qQ.bb)(QQ, (0, LQ.h)().buttonRepeat),
      DQ = QQ => new qQ.f((() => oQ(QQ)))
  },
  7986: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => vQ,
      g: () => oQ,
      i: () => kQ
    });
    var LQ = wQ(22),
      qQ = wQ(7972);
    const oQ = (QQ, FQ) => "OpenShop" === QQ ? "shop" === FQ : "OpenLobbyLeaderboard" !== QQ || "leaderboard" === FQ;
    let DQ = !1;
    const kQ = QQ => {
        QQ !== DQ && (DQ = QQ, LQ.l.GA(qQ.c, (0, qQ.h)()))
      },
      vQ = () => ((QQ, FQ) => "shop" === QQ && FQ ? "shop" : "leaderboard")((0, qQ.h)().leaderboardButton, DQ)
  },
  7977: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      $: () => GQ,
      A: () => uQ,
      Ab: () => KQ,
      Bb: () => iQ,
      C: () => vQ,
      D: () => kQ,
      E: () => cQ,
      H: () => bQ,
      J: () => YQ,
      L: () => HQ,
      M: () => pQ,
      Q: () => mQ,
      U: () => eQ,
      X: () => RQ,
      d: () => TQ,
      db: () => AQ,
      g: () => zQ,
      hb: () => tQ,
      j: () => OQ,
      jb: () => xQ,
      l: () => DQ,
      m: () => WQ,
      nb: () => MQ,
      p: () => SQ,
      pb: () => IQ,
      sb: () => oQ,
      t: () => UQ,
      w: () => NQ,
      wb: () => CQ
    });
    var LQ = wQ(7967),
      qQ = wQ(7950);
    const oQ = {
        min: 25,
        max: 500,
        step: 5
      },
      DQ = {
        min: 25,
        max: 100,
        step: 5
      },
      kQ = {
        min: 0,
        max: .4,
        step: .01
      },
      vQ = {
        min: 25,
        max: 300,
        step: 5
      },
      mQ = {
        min: .5,
        max: 6,
        step: .1
      },
      uQ = (QQ, FQ) => {
        if (!Number.isFinite(QQ)) return FQ.min;
        const wQ = FQ.min + Math.round((QQ - FQ.min) / FQ.step) * FQ.step,
          LQ = Math.min(FQ.max, Math.max(FQ.min, wQ));
        return Math.round(1e3 * LQ) / 1e3
      },
      HQ = QQ => `${Math.round(QQ)}%`,
      bQ = QQ => HQ(100 * QQ),
      YQ = QQ => `${QQ.toFixed(1)}\xd7`,
      xQ = [{
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
      AQ = [{
        value: "exponential",
        labelKey: "controller:settingsCurveExponential"
      }, {
        value: "linear",
        labelKey: "controller:settingsCurveLinear"
      }, {
        value: "boost",
        labelKey: "controller:settingsCurveBoost"
      }],
      tQ = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "focus",
        labelKey: "controller:settingsMenuNavFocus"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      eQ = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "slot",
        labelKey: "controller:settingsInventoryNavSlot"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      MQ = [{
        value: "wheel",
        labelKey: "controller:settingsQuickChatWheel"
      }, {
        value: "off",
        labelKey: "controller:settingsQuickChatOff"
      }],
      GQ = [{
        value: "shop",
        labelKey: "controller:settingsLeaderboardButtonShop"
      }, {
        value: "leaderboard",
        labelKey: "controller:settingsLeaderboardButtonLeaderboard"
      }],
      pQ = [{
        value: "always",
        labelKey: "controller:settingsGyroAlways"
      }, {
        value: "aiming",
        labelKey: "controller:settingsGyroWhileAiming"
      }, {
        value: "button",
        labelKey: "controller:settingsGyroWhileButton"
      }],
      cQ = [{
        value: "tapHold",
        labelKey: "controller:settingsEmoteButtonTapHold"
      }, {
        value: "wheel",
        labelKey: "controller:settingsEmoteButtonWheel"
      }],
      CQ = [{
        value: "toggle",
        labelKey: "controller:settingsSneakToggle"
      }, {
        value: "hold",
        labelKey: "controller:settingsSneakHold"
      }],
      SQ = [{
        value: "default",
        labelKey: "controller:settingsButtonRepeatDefault"
      }, {
        value: "slow",
        labelKey: "controller:settingsButtonRepeatSlow"
      }, {
        value: "off",
        labelKey: "controller:settingsButtonRepeatOff"
      }],
      iQ = [{
        value: "short",
        labelKey: "controller:settingsTapHoldShort"
      }, {
        value: "medium",
        labelKey: "controller:settingsTapHoldMedium"
      }, {
        value: "long",
        labelKey: "controller:settingsTapHoldLong"
      }],
      WQ = [{
        value: "hold",
        labelKey: "controller:settingsAttackHold"
      }, {
        value: "toggle",
        labelKey: "controller:settingsAttackToggle"
      }],
      RQ = {
        southpaw: "controller:settingsLayoutSouthpaw",
        triggersSwapped: "controller:settingsLayoutTriggersSwapped"
      },
      OQ = {
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
      sQ = {
        gameplay: "controller:settingsGroupGameplay",
        menu: "controller:settingsGroupMenus",
        inventory: "controller:settingsGroupInventory",
        keyboard: "controller:settingsGroupKeyboard"
      },
      rQ = [{
        kind: "fixed",
        stick: "move",
        labelKey: "controller:settingsActionMove"
      }, {
        kind: "fixed",
        stick: "look",
        labelKey: "controller:settingsActionLook"
      }],
      IQ = LQ.c.map((QQ => {
        let {
          group: FQ,
          actions: wQ
        } = QQ;
        const LQ = wQ.map((QQ => ({
          kind: "action",
          action: QQ
        })));
        return {
          titleKey: sQ[FQ],
          rows: "gameplay" === FQ ? [...rQ, ...LQ] : LQ
        }
      })),
      UQ = qQ.W.filter((QQ => "Home" !== QQ)),
      NQ = 1e4;
    class TQ {
      constructor(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
        this.cancelButton = QQ, this.openButton = FQ, this.accepts = wQ, this.startMs = null, this.ignoredUntilMs = new Map, this.cancelDownAtMs = null
      }
      update(QQ, FQ) {
        var wQ;
        this.updateIgnored(QQ, FQ);
        const LQ = FQ - (null !== (wQ = this.startMs) && void 0 !== wQ ? wQ : FQ) >= 250;
        for (const qQ of UQ)
          if (qQ !== this.cancelButton && LQ && !this.ignoredUntilMs.has(qQ) && QQ.wasPressed(qQ) && this.accepts(qQ)) return {
            kind: "bind",
            button: qQ
          };
        if (this.ignoredUntilMs.has(this.cancelButton)) return null;
        if (QQ.wasPressed(this.cancelButton)) {
          if (!this.accepts(this.cancelButton)) return {
            kind: "cancel"
          };
          this.cancelDownAtMs = FQ
        }
        return null === this.cancelDownAtMs ? null : QQ.isHeld(this.cancelButton) && FQ - this.cancelDownAtMs >= 700 ? (this.cancelDownAtMs = null, {
          kind: "bind",
          button: this.cancelButton
        }) : QQ.wasReleased(this.cancelButton) ? (this.cancelDownAtMs = null, {
          kind: "cancel"
        }) : null
      }
      getBindHoldProgress(QQ) {
        return null === this.cancelDownAtMs ? 0 : Math.min(1, (QQ - this.cancelDownAtMs) / 700)
      }
      updateIgnored(QQ, FQ) {
        if (null === this.startMs) {
          this.startMs = FQ;
          for (const FQ of UQ) QQ.isDown(FQ) && this.ignoredUntilMs.set(FQ, 1 / 0);
          this.openButton && !this.ignoredUntilMs.has(this.openButton) && this.ignoredUntilMs.set(this.openButton, FQ + 250)
        }
        for (const [wQ, LQ] of this.ignoredUntilMs) {
          const qQ = QQ.isDown(wQ);
          LQ === 1 / 0 ? qQ || wQ !== this.openButton ? qQ || this.ignoredUntilMs.delete(wQ) : this.ignoredUntilMs.set(wQ, FQ + 250) : FQ >= LQ ? this.ignoredUntilMs.delete(wQ) : qQ && this.ignoredUntilMs.set(wQ, 1 / 0)
        }
      }
    }
    const KQ = 6e3;
    class zQ {
      constructor() {
        this.downAtMs = null, this.pressesAtMs = []
      }
      update(QQ, FQ) {
        let {
          pressed: wQ,
          ym: LQ
        } = QQ;
        if (wQ) {
          const QQ = this.pressesAtMs.at(-1);
          if (this.pressesAtMs = void 0 !== QQ && FQ - QQ < 1500 ? [...this.pressesAtMs, FQ] : [FQ], this.pressesAtMs.length >= 3) return 1
        }
        return LQ ? (this.downAtMs ??= FQ, Math.min(1, (FQ - this.downAtMs) / 1500)) : (this.downAtMs = null, 0)
      }
    }
  },
  4875: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => oQ,
      c: () => DQ
    });
    var LQ = wQ(53);
    const qQ = new WeakMap,
      oQ = QQ => {
        var FQ;
        const wQ = QQ.closest("[data-pad-slider]");
        return wQ && null !== (FQ = qQ.get(wQ)) && void 0 !== FQ ? FQ : null
      },
      DQ = (QQ, FQ) => {
        const wQ = (0, LQ.useRef)(FQ);
        wQ.current = FQ, (0, LQ.useEffect)((() => {
          if (QQ.current) return ((QQ, FQ) => (qQ.set(QQ, FQ), () => {
            qQ.get(QQ) === FQ && qQ.delete(QQ)
          }))(QQ.current, {
            adjust: QQ => {
              wQ.current.adjust(QQ)
            },
            setFraction: QQ => {
              wQ.current.setFraction(QQ)
            },
            endDrag: () => {
              wQ.current.endDrag()
            }
          })
        }), [QQ])
      }
  },
  8471: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => oQ,
      f: () => qQ
    });
    var LQ = wQ(22);
    const qQ = "localBlockBroken";

    function oQ() {
      return {
        onPlayerChangeBlock(QQ, FQ, wQ, oQ, DQ, kQ) {
          "Air" === kQ && LQ.l.GA(qQ)
        }
      }
    }
  },
  8021: (QQ, FQ, wQ) => {
    var LQ = {
      "./nintendo/A.svg": 8029,
      "./nintendo/B.svg": 8035,
      "./nintendo/Down.svg": 8037,
      "./nintendo/Home.svg": 8041,
      "./nintendo/LB.svg": 8049,
      "./nintendo/LS.svg": 8056,
      "./nintendo/LT.svg": 8060,
      "./nintendo/Left.svg": 8068,
      "./nintendo/LeftStick.svg": 8071,
      "./nintendo/Menu.svg": 8073,
      "./nintendo/RB.svg": 8079,
      "./nintendo/RS.svg": 8081,
      "./nintendo/RT.svg": 8087,
      "./nintendo/Right.svg": 8091,
      "./nintendo/RightStick.svg": 8094,
      "./nintendo/Up.svg": 8096,
      "./nintendo/View.svg": 8098,
      "./nintendo/X.svg": 8100,
      "./nintendo/Y.svg": 8106,
      "./playstation/A.svg": 8113,
      "./playstation/B.svg": 8117,
      "./playstation/Down.svg": 8123,
      "./playstation/Home.svg": 8131,
      "./playstation/LB.svg": 8139,
      "./playstation/LS.svg": 8147,
      "./playstation/LT.svg": 8152,
      "./playstation/Left.svg": 8160,
      "./playstation/LeftStick.svg": 8169,
      "./playstation/Menu.svg": 8171,
      "./playstation/RB.svg": 8174,
      "./playstation/RS.svg": 8178,
      "./playstation/RT.svg": 8186,
      "./playstation/Right.svg": 8191,
      "./playstation/RightStick.svg": 8196,
      "./playstation/Up.svg": 8199,
      "./playstation/View.svg": 8203,
      "./playstation/X.svg": 8211,
      "./playstation/Y.svg": 8213,
      "./steamdeck/A.svg": 8216,
      "./steamdeck/B.svg": 8222,
      "./steamdeck/Down.svg": 8227,
      "./steamdeck/Home.svg": 8231,
      "./steamdeck/LB.svg": 8233,
      "./steamdeck/LS.svg": 8235,
      "./steamdeck/LT.svg": 8242,
      "./steamdeck/Left.svg": 8248,
      "./steamdeck/LeftStick.svg": 8252,
      "./steamdeck/Menu.svg": 8257,
      "./steamdeck/RB.svg": 8264,
      "./steamdeck/RS.svg": 8271,
      "./steamdeck/RT.svg": 8276,
      "./steamdeck/Right.svg": 8278,
      "./steamdeck/RightStick.svg": 8285,
      "./steamdeck/Up.svg": 8292,
      "./steamdeck/View.svg": 8294,
      "./steamdeck/X.svg": 8296,
      "./steamdeck/Y.svg": 8299,
      "./xbox/A.svg": 8301,
      "./xbox/B.svg": 8303,
      "./xbox/Down.svg": 8305,
      "./xbox/Home.svg": 8311,
      "./xbox/LB.svg": 8313,
      "./xbox/LS.svg": 8315,
      "./xbox/LT.svg": 8320,
      "./xbox/Left.svg": 8328,
      "./xbox/LeftStick.svg": 8330,
      "./xbox/Menu.svg": 8337,
      "./xbox/RB.svg": 8345,
      "./xbox/RS.svg": 8350,
      "./xbox/RT.svg": 8354,
      "./xbox/Right.svg": 8360,
      "./xbox/RightStick.svg": 8366,
      "./xbox/Up.svg": 8368,
      "./xbox/View.svg": 8372,
      "./xbox/X.svg": 8374,
      "./xbox/Y.svg": 8380
    };

    function qQ(QQ) {
      var FQ = oQ(QQ);
      return wQ(FQ)
    }

    function oQ(QQ) {
      if (!wQ.o(LQ, QQ)) {
        var FQ = new Error("Cannot find module '" + QQ + "'");
        throw FQ.code = "MODULE_NOT_FOUND", FQ
      }
      return LQ[QQ]
    }
    qQ.keys = function() {
      return Object.keys(LQ)
    }, qQ.resolve = oQ, QQ.exports = qQ, qQ.id = 8021
  },
  8029: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/A.926fb88933484dfbde14.svg"
  },
  8035: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/B.9f5ec099f78f84e44427.svg"
  },
  8037: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8041: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  8049: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/LB.3a20b15927b55d5d8b60.svg"
  },
  8056: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8060: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/LT.9fdc5e69011b9d41f50a.svg"
  },
  8068: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8071: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8073: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Menu.c903a662eb685211e52e.svg"
  },
  8079: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/RB.bba470ddb76ceec5d168.svg"
  },
  8081: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8087: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/RT.e5a9fbcc3c79550111ca.svg"
  },
  8091: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8094: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8096: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8098: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/View.0c9378b5d720a636d50d.svg"
  },
  8100: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/X.c9377519af94e6dce1d7.svg"
  },
  8106: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Y.62d8c17731dd2e172426.svg"
  },
  8113: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/A.958a6de9474f8d0c9caf.svg"
  },
  8117: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/B.d05958bfa88a1162b47a.svg"
  },
  8123: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Down.db68fb3980768eb54671.svg"
  },
  8131: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  8139: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/LB.37a3c5128c958ec2a0c2.svg"
  },
  8147: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/LS.15b0cc5bf3f2fe7bbd8b.svg"
  },
  8152: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/LT.5412ae5222c69f8c833f.svg"
  },
  8160: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Left.4457b2895ce94a5df32e.svg"
  },
  8169: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8171: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Menu.1e8427f8133c9d456c53.svg"
  },
  8174: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/RB.c96c4aa2590209e930c7.svg"
  },
  8178: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/RS.8d70d147cf1ab136e845.svg"
  },
  8186: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/RT.1e4691bb5a7c049693df.svg"
  },
  8191: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Right.a1e101413040c540b879.svg"
  },
  8196: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8199: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Up.7544a65ad4f611a55775.svg"
  },
  8203: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/View.003cae39de89cae0b9d8.svg"
  },
  8211: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/X.d88b6e62dd8fb4bda32a.svg"
  },
  8213: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Y.428d3e70775877892f82.svg"
  },
  8216: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8222: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8227: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8231: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Home.ea8b009cfa9562aa644e.svg"
  },
  8233: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/LB.f283d355d22fc107d6d6.svg"
  },
  8235: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8242: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/LT.13e66c122e7ee04bb876.svg"
  },
  8248: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8252: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8257: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Menu.90fc4e918900eb5062a0.svg"
  },
  8264: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/RB.918a7f16dc054d96b6f3.svg"
  },
  8271: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8276: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/RT.a0523211130959598bed.svg"
  },
  8278: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8285: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8292: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8294: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/View.0bc952e292c28c3baac2.svg"
  },
  8296: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8299: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  },
  8301: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8303: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8305: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8311: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Home.8898f76b20962fe52ab7.svg"
  },
  8313: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/LB.689ba3703ae248f2e4cc.svg"
  },
  8315: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8320: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/LT.9c2d10d335ab5c590525.svg"
  },
  8328: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8330: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8337: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Menu.9e485791ea97009871ca.svg"
  },
  8345: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/RB.7ee5ce48dd551f993f80.svg"
  },
  8350: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8354: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/RT.903ecadc55a9e9e00f07.svg"
  },
  8360: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8366: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8368: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8372: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/View.3c5eeb34f0413bde4a65.svg"
  },
  8374: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8380: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);