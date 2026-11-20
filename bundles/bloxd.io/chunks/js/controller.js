export const id = 28;
export const ids = [28];
export const modules = {
  4673: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => jb,
      e: () => Db,
      g: () => Rb,
      h: () => Zb
    });
    var Ab = Ub(52),
      Mb = Ub(4675),
      Tb = Ub(4054),
      Eb = Ub(1268),
      Yb = Ub(4690),
      Bb = Ub(984),
      eb = Ub.n(Bb),
      vb = Ub(1260),
      Lb = Ub(1639),
      Pb = Ub(4697),
      Xb = Ub(1023);

    function jb(bb) {
      let {
        label: ab,
        onClick: Ub,
        checked: Ab,
        circleInfoText: Mb,
        className: Yb,
        disabled: Bb,
        note: vb
      } = bb;
      return (0, Xb.jsxs)("div", {
        "aria-disabled": Bb || void 0,
        "data-pad-focusable": !0,
        className: eb()("SettingBox CheckboxContainer", {
          [Yb]: Yb,
          SettingBoxDisabled: Bb
        }),
        onClick: () => {
          Bb || Ub(!Ab)
        },
        children: [(0, Xb.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, Xb.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, Xb.jsx)(Tb.d, {
              className: "SettingsCheckbox",
              checked: Ab,
              disabled: Bb,
              onChange: () => {}
            })
          }), (0, Xb.jsxs)("div", {
            className: "CheckboxText",
            children: [ab, Mb && (0, Xb.jsx)("span", {
              onClick: bb => bb.stopPropagation(),
              children: (0, Xb.jsx)(Eb.d, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: Mb
              })
            })]
          })]
        }), vb && (0, Xb.jsx)("div", {
          className: "SettingNote",
          children: vb
        })]
      })
    }

    function Rb(bb) {
      let {
        name: ab,
        onChange: Ub,
        min: Mb,
        max: Tb,
        step: Yb,
        initValue: Bb,
        circleInfoText: vb,
        format: Lb,
        className: Pb,
        padStep: jb,
        disabled: Rb = !1,
        selectableMax: kb,
        cappedNote: Zb,
        onChangeComplete: Db
      } = bb;
      const [zb, xb] = (0, Ab.useState)(Bb), ib = (0, Ab.useRef)(Bb);
      (0, Ab.useEffect)((() => {
        ib.current = Bb, xb(Bb)
      }), [Bb]);
      const fb = void 0 !== kb && kb < Tb,
        mb = fb ? {
          "--slider-selectable": (kb - Mb) / (Tb - Mb)
        } : void 0;
      return (0, Xb.jsxs)("div", {
        className: eb()("SettingBox SettingsSliderDiv", {
          [Pb]: Pb,
          SettingBoxDisabled: Rb,
          SliderCapped: fb
        }),
        style: mb,
        children: [(0, Xb.jsxs)("div", {
          className: "SliderText",
          children: [`${ab}: ${Lb?Lb(zb):zb}`, vb && (0, Xb.jsx)(Eb.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: vb
          })]
        }), (0, Xb.jsx)("div", {
          className: "SliderDiv",
          children: (0, Xb.jsx)(yb, {
            value: zb,
            min: Mb,
            max: Tb,
            step: Yb,
            onChange: bb => {
              if (fb && bb >= kb && zb === kb) return;
              const ab = fb ? Math.min(bb, kb) : bb;
              ib.current = ab, xb(ab), Ub(ab)
            },
            onChangeComplete: Db && (() => {
              Db(ib.current)
            }),
            format: Lb,
            padStep: jb,
            disabled: Rb
          })
        }), fb && Zb && (0, Xb.jsx)("div", {
          className: "SettingNote",
          children: Zb
        })]
      })
    }
    const kb = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function yb(bb) {
      var ab;
      let {
        value: Ub,
        min: Tb,
        max: Eb,
        step: Yb,
        onChange: Bb,
        orientation: eb,
        reverse: vb,
        setIsChanging: Lb,
        tooltip: jb,
        labels: Rb,
        handleLabel: yb,
        format: Zb,
        onChangeStart: Db,
        onChangeComplete: zb,
        padStep: xb,
        disabled: ib = !1
      } = bb;
      const fb = (0, Ab.useRef)(null),
        mb = (0, Ab.useRef)(null);
      (0, Ab.useLayoutEffect)((() => {
        var bb, ab, Ub;
        const Ab = null !== (bb = null === (ab = fb.current) || void 0 === ab ? void 0 : ab.querySelector(".rangeslider")) && void 0 !== bb ? bb : null;
        null === Ab || void 0 === Ab || Ab.setAttribute("data-pad-slider", ""), null === Ab || void 0 === Ab || Ab.setAttribute("data-pad-focusable", ""), null === Ab || void 0 === Ab || null === (Ub = Ab.querySelector(".rangeslider__handle")) || void 0 === Ub || Ub.setAttribute("data-pad-slider-handle", ""), mb.current = Ab
      }), []), (0, Ab.useLayoutEffect)((() => {
        var bb, ab;
        ib ? null === (bb = mb.current) || void 0 === bb || bb.setAttribute("aria-disabled", "true") : null === (ab = mb.current) || void 0 === ab || ab.removeAttribute("aria-disabled")
      }), [ib]);
      const pb = (null !== (ab = String(Yb).split(".")[1]) && void 0 !== ab ? ab : "").length,
        Nb = bb => {
          const ab = Number((Math.round((bb - Tb) / Yb) * Yb + Tb).toFixed(pb));
          return Math.min(Eb, Math.max(Tb, ab))
        },
        Wb = (0, Ab.useRef)(zb);
      Wb.current = zb, (0, Ab.useEffect)((() => {
        const bb = fb.current;
        if (!bb) return;
        const ab = bb => {
          var ab;
          kb.has(bb.key) && (null === (ab = Wb.current) || void 0 === ab || ab.call(Wb))
        };
        return bb.addEventListener("keyup", ab), () => {
          bb.removeEventListener("keyup", ab)
        }
      }), []);
      const Hb = (0, Ab.useRef)(!1);
      return (0, Pb.e)(mb, {
        adjust: bb => {
          if (ib) return;
          const ab = null !== xb && void 0 !== xb ? xb : Math.max(Yb, Math.round((Eb - Tb) / 20 / Yb) * Yb),
            Ab = Nb(Ub + bb * ab * (vb ? -1 : 1));
          Ab !== Ub && (null === Db || void 0 === Db || Db(), Bb(Ab), null === zb || void 0 === zb || zb())
        },
        setFraction: bb => {
          if (ib) return;
          const ab = Nb(Tb + (vb ? 1 - bb : bb) * (Eb - Tb));
          ab !== Ub && (Hb.current || (Hb.current = !0, null === Db || void 0 === Db || Db()), Bb(ab))
        },
        endDrag: () => {
          Hb.current && (Hb.current = !1, null === zb || void 0 === zb || zb())
        }
      }), (0, Xb.jsx)("div", {
        ref: fb,
        style: {
          display: "contents"
        },
        children: (0, Xb.jsx)(Mb.d, {
          value: Ub,
          min: Tb,
          max: Eb,
          step: Yb,
          onChange: Bb,
          orientation: eb,
          reverse: vb,
          tooltip: jb,
          labels: Rb,
          handleLabel: yb,
          format: Zb,
          onChangeStart: () => {
            null === Db || void 0 === Db || Db(), null === Lb || void 0 === Lb || Lb(!0)
          },
          onChangeComplete: () => {
            null === Lb || void 0 === Lb || Lb(!1), null === zb || void 0 === zb || zb()
          }
        })
      })
    }
    async function Zb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const ab = vb.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: "",
        unlockPointerKey: bb
      });
      !0 === await ab.getResult() && (0, Lb.reloadBloxd)()
    }

    function Db(bb) {
      let {
        label: ab,
        options: Ub,
        value: Ab,
        onChange: Mb,
        circleInfoText: Tb
      } = bb;
      return (0, Xb.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, Xb.jsxs)("div", {
          className: "SliderText",
          children: [ab, Tb && (0, Xb.jsx)(Eb.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Tb
          })]
        }), (0, Xb.jsx)(Yb.e, {
          ariaLabel: ab,
          options: Ub,
          value: Ab,
          onChange: Mb
        })]
      })
    }
  },
  4690: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Eb
    });
    var Ab = Ub(984),
      Mb = Ub.n(Ab),
      Tb = Ub(1023);

    function Eb(bb) {
      let {
        options: ab,
        value: Ub,
        onChange: Ab,
        ariaLabel: Eb,
        className: Yb,
        reselectable: Bb = !1,
        keepsFocus: eb = !1
      } = bb;
      return (0, Tb.jsx)("div", {
        className: Mb()("SegmentedToggle", Yb),
        role: "group",
        "aria-label": Eb,
        children: ab.map((bb => {
          const ab = bb.value === Ub;
          return (0, Tb.jsx)("button", {
            type: "button",
            "aria-pressed": ab,
            "aria-label": bb.ariaLabel,
            title: bb.ariaLabel,
            className: Mb()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: ab
            }),
            onMouseDown: eb ? bb => {
              bb.preventDefault()
            } : void 0,
            onClick: () => {
              ab && !Bb || Ab(bb.value)
            },
            children: bb.label
          }, bb.value)
        }))
      })
    }
  },
  7753: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Mb,
      f: () => Tb,
      g: () => Pb,
      i: () => Lb,
      j: () => eb,
      k: () => Yb,
      n: () => Ab,
      p: () => Xb,
      s: () => jb
    });
    const Ab = ["menuConfirm", "menuBack", "menuTabPrevious", "menuTabNext", "menuPageUp", "menuPageDown", "menuSecondary", "menuToggleCursor"],
      Mb = [{
        group: "gameplay",
        actions: ["jump", "sneak", "sneakToggle", "sprint", "attack", "use", "hotbarPrevious", "hotbarNext", "inventory", "actionButton", "perspective", "pickBlock", "drop", "emoteWheel", "chat", "pause", "leaderboard"]
      }, {
        group: "menu",
        actions: Ab
      }, {
        group: "inventory",
        actions: ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryClose", "inventoryPanelPrevious", "inventoryPanelNext", "inventoryDrop", "inventoryHotbarSwap"]
      }, {
        group: "keyboard",
        actions: ["keyboardType", "keyboardBackspace", "keyboardSpace", "keyboardCaretLeft", "keyboardCaretRight", "keyboardShift", "keyboardSymbols", "keyboardSubmit", "keyboardClose", "keyboardChannel"]
      }],
      Tb = {
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
      Eb = ["pickBlock", "perspective"],
      Yb = bb => Eb.includes(bb) ? Eb : [bb],
      Bb = Object.fromEntries(Mb.flatMap((bb => {
        let {
          group: ab,
          actions: Ub
        } = bb;
        return Ub.map((bb => [bb, ab]))
      }))),
      eb = bb => Bb[bb],
      vb = {
        pause: ["menu"],
        leaderboard: ["menu"],
        inventory: ["menu"],
        menuPageUp: ["inventory"],
        menuPageDown: ["inventory"]
      },
      Lb = bb => {
        var ab;
        return [eb(bb), ...null !== (ab = vb[bb]) && void 0 !== ab ? ab : []]
      },
      Pb = new Set(["menu", "inventory", "keyboard"]),
      Xb = {
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
      jb = new Set(["forward", "backward", "left", "right"])
  },
  7750: (bb, ab, Ub) => {
    Ub.d(ab, {
      D: () => Db,
      F: () => Nb,
      G: () => vb,
      K: () => pb,
      M: () => Ib,
      c: () => Zb,
      f: () => xb,
      h: () => Pb,
      j: () => Xb,
      n: () => Fb,
      o: () => Hb,
      q: () => Wb,
      r: () => zb,
      v: () => db,
      z: () => mb
    });
    var Ab = Ub(7753),
      Mb = Ub(7759),
      Tb = Ub(7739),
      Eb = Ub(7773);
    const Yb = bb => "pickBlock" === bb ? "perspective" : bb,
      Bb = (bb, ab) => {
        var Ub;
        const Mb = Yb(ab);
        return null !== (Ub = bb[Mb]) && void 0 !== Ub ? Ub : Ab.f[Mb]
      },
      eb = new Map([
        ["menuConfirm", "menuBack"],
        ["inventoryPrimary", "inventoryClose"],
        ["keyboardType", "keyboardClose"]
      ].flatMap((bb => {
        let [ab, Ub] = bb;
        return [
          [ab, Ub],
          [Ub, ab]
        ]
      }))),
      vb = (bb, ab) => null !== bb && void 0 !== bb ? bb : "nintendo" === ab,
      Lb = bb => vb((0, Mb.i)().swapConfirmBack, (0, Mb.m)()) && eb.get(bb) || bb,
      Pb = bb => Bb((0, Mb.i)().bindings, Lb(bb)),
      Xb = bb => Ab.f[Lb(bb)],
      jb = Object.keys(Ab.f),
      Rb = bb => "gameplay" === (0, Ab.j)(bb) ? ["gameplay"] : (0, Ab.i)(bb),
      kb = (bb, ab) => {
        const Ub = Rb(ab);
        return Rb(bb).some((bb => Ub.includes(bb)))
      },
      yb = (bb, ab, Ub) => {
        const Mb = Bb(bb, ab),
          Eb = new Set((0, Ab.k)(ab)),
          eb = [...Eb];
        for (let Ab = eb.pop(); Ab; Ab = eb.pop())
          for (const ab of jb) {
            const Tb = Bb(bb, ab);
            Eb.has(ab) || Tb !== Ub && Tb !== Mb || !kb(Ab, ab) || (Eb.add(ab), eb.push(ab))
          }
        const vb = {
          ...bb
        };
        for (const Lb of Eb) {
          const ab = Bb(bb, Lb) === Mb ? Ub : Mb,
            Eb = (0, Ab.i)(Lb).some((bb => Ab.g.has(bb)));
          if ((0, Tb.B)(ab) && Eb) return null;
          vb[Yb(Lb)] = ab
        }
        for (const Tb of Object.keys(vb)) vb[Tb] === Ab.f[Tb] && delete vb[Tb];
        return vb
      },
      Zb = (bb, ab) => null !== yb((0, Mb.i)().bindings, Lb(bb), ab),
      Db = (bb, ab) => {
        if (Pb(bb) === ab) return !0;
        const Ub = yb((0, Mb.i)().bindings, Lb(bb), ab);
        return !!Ub && ((0, Mb.p)({
          bindings: Ub
        }), !0)
      },
      zb = (bb, ab) => {
        const Ub = (0, Ab.k)(ab);
        return jb.filter((ab => Yb(ab) === ab && !Ub.includes(ab) && Bb(bb, Lb(ab)) !== Pb(ab)))
      },
      xb = ["southpaw", "triggersSwapped"],
      ib = {
        southpaw: {
          sprint: "RS",
          sneakToggle: "LS"
        },
        triggersSwapped: {
          attack: "LT",
          use: "RT"
        }
      },
      fb = bb => Object.keys(ib[bb]),
      mb = (bb, ab) => "southpaw" === bb ? ab.swapSticks : fb(bb).every((Ub => Bb(ab.bindings, Ub) === ib[bb][Ub])),
      pb = (bb, ab) => {
        const Ub = (0, Mb.i)();
        let Tb = Ub.bindings;
        for (const Mb of fb(bb)) {
          const Ub = ab ? ib[bb][Mb] : Ab.f[Mb];
          if (Tb = yb(Tb, Mb, Ub), !Tb) return !1
        }
        return (0, Mb.p)({
          swapSticks: "southpaw" === bb ? ab : Ub.swapSticks,
          bindings: Tb
        }), !0
      },
      Nb = () => {
        (0, Mb.p)({
          swapSticks: !1,
          bindings: {}
        })
      },
      Wb = () => (0, Mb.i)().swapSticks ? "RightStick" : "LeftStick",
      Hb = () => (0, Mb.i)().swapSticks ? "LeftStick" : "RightStick",
      Ib = bb => (0, Mb.i)().swapSticks && (0, Tb.B)(bb),
      db = bb => Ib(bb) ? Wb() : Hb(),
      Fb = bb => {
        if (Ab.s.has(bb)) return Wb();
        const ab = Ab.p[bb];
        return ab && ("leaderboard" !== ab || (0, Eb.d)(bb, (0, Eb.c)())) ? Pb(ab) : null
      }
  },
  7731: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      ControllerCategory: () => BB,
      ControllerGlyph: () => XT,
      ControllerRoot: () => BY,
      PadLobbyShortcuts: () => mY,
      PadSneakChip: () => RY,
      PadTooltip: () => yY,
      attachPressToContinue: () => hY,
      getBoundButton: () => vb.h,
      getControllerSettings: () => Pb.i,
      getGlyphForNoaAction: () => vb.n,
      getInventoryCursorState: () => vB,
      getMenuShortcutButton: () => QA,
      getPadGlyphIconName: () => PY,
      getPadGlyphIconUrl: () => XY,
      getPadRepeatTiming: () => Rb.g,
      handOverPadFocus: () => PB,
      hasActivePad: () => eB,
      isPadSteppingSlots: () => LB
    });
    const Ab = JSON.parse('{"controller":{"inventoryTake":"Take","inventoryTakeHalf":"Take half","inventoryPlace":"Place","inventoryPlaceOne":"Place one","inventoryQuickMove":"Quick move","inventoryToHotbar":"To hotbar","inventoryPutBack":"Put back","inventoryHotbarSwap":"Swap with hotbar","inventorySwapHere":"Swap here","inventoryCancel":"Cancel","inventoryClose":"Close","inventoryDrop":"Drop (hold: stack)","inventorySelect":"Select","inventoryCraft":"Craft (hold to repeat)","inventoryCraftAll":"Craft all","inventoryChooseRecipe":"Choose","inventoryBackToRecipes":"Back to recipes","inventoryType":"Type","inventoryPanels":"Switch panel","inventoryCategory":"Category","inventoryPage":"Page","disconnected":"Controller disconnected","gameplayReload":"Reload","gameplayActionWheelHint":"(hold for more)","gameplaySneaking":"Sneaking","gameplayLoadFailedTitle":"Controller unavailable","gameplayLoadFailedSubtitle":"Reload the page to play with your controller.","gameplayDropStack":"Keep holding to drop the stack","gameplayAttackLatched":"Attacking","gameplayPickBlock":"Pick block","padButtonView":"View","padButtonMenu":"Menu","padButtonHome":"Home","padButtonCreate":"Create","padButtonOptions":"Options","padButtonDpadUp":"D-pad \u2191","padButtonDpadDown":"D-pad \u2193","padButtonDpadLeft":"D-pad \u2190","padButtonDpadRight":"D-pad \u2192","padButtonLeftStick":"L Stick","padButtonRightStick":"R Stick","settingsLook":"Look","settingsLookSensitivityX":"Look sensitivity (horizontal)","settingsLookSensitivityY":"Look sensitivity (vertical)","settingsAimLookSensitivity":"Look sensitivity while aiming (use held)","settingsInvertLookX":"Invert horizontal look","settingsInvertLookY":"Invert vertical look","settingsLookCurve":"Look curve","settingsLookCurveHint":"Steep gives finer aim near the centre, Linear turns at an even rate, and Boost turns faster when you hold the stick all the way.","settingsCurveExponential":"Steep","settingsCurveLinear":"Linear","settingsCurveBoost":"Boost","settingsLookDeadzone":"Look deadzone","settingsGyro":"Gyro aiming","settingsGyroToggle":"Aim by moving the controller","settingsGyroToggleInfo":"Turn and tilt the controller to aim, on top of the right stick.","settingsGyroTogglePhone":"Aim by moving your phone or tablet","settingsGyroToggleInfoPhone":"Turn and tilt your phone or tablet to aim, on top of the right stick.","settingsGyroUnsupported":"Gyro aiming needs Chrome or Edge.","settingsGyroBlocked":"Gyro aiming isn\'t available on this site.","settingsGyroPhoneNeedsController":"Connect a controller to aim by moving your phone or tablet.","settingsGyroSteamHint":"If Steam already turns your gyro into mouse movement, leave this off.","settingsGyroConnect":"Connect motion controller","settingsGyroConnectHint":"Works with DualSense, DualShock 4 and Switch controllers.","settingsGyroConnectNeedsClick":"Click Connect with your mouse: the browser asks before sharing a controller.","settingsGyroOpenFailed":"Another app is using the controller. Close apps such as Steam or DS4Windows, then try again.","settingsGyroConnected":"Aiming with {{name}}.","settingsGyroAllowMotion":"Allow motion sensor","settingsGyroAllowNeedsTap":"Tap Allow motion sensor on your screen to turn it on.","settingsGyroPhoneOn":"Aiming with this device\'s motion sensor.","settingsGyroPhoneWaiting":"Waiting for this device\'s motion sensor\u2026","settingsGyroPhoneNoSensor":"No motion sensor found on this device.","settingsGyroPhoneDenied":"Motion access is blocked. Allow it in your browser settings.","settingsGyroSensitivity":"Gyro sensitivity","settingsGyroActivation":"Gyro turns on","settingsGyroAlways":"Always","settingsGyroWhileAiming":"While aiming","settingsGyroWhileButton":"While holding a button","settingsGyroAimingHint":"Hold {{button}} to aim with motion.","settingsGyroButton":"Gyro button","settingsGyroButtonHint":"While gyro aiming is on, this button only turns the gyro on in game, so pick one you rarely use.","settingsMovement":"Movement","settingsMoveDeadzone":"Move deadzone","settingsAutoSprint":"Sprint at full tilt","settingsAutoSprintInfo":"Push the movement stick all the way to sprint.","settingsSneak":"Sneak","settingsSneakHold":"Hold","settingsSneakToggle":"Toggle","settingsButtons":"Buttons","settingsPromptFamily":"Button prompts","settingsPromptAuto":"Match my controller","settingsPromptXbox":"Xbox","settingsPromptPlayStation":"PlayStation","settingsPromptNintendo":"Nintendo","settingsPromptSteamDeck":"Steam Deck","settingsPromptGeneric":"Generic","settingsHideButtonHints":"Hide button hints","settingsVibration":"Vibration","settingsCursorSpeed":"Virtual cursor speed","settingsCursorMagnetism":"Cursor snaps onto buttons","settingsMenuBackToCategories":"Back returns to the category list first","settingsAccessibility":"Accessibility","settingsSwapConfirmBack":"Swap confirm and back","settingsSwapToast":"Select and Back have swapped buttons.","settingsLayoutRefusedToast":"This layout doesn\'t fit your current buttons. Reset them to use it.","settingsSwapConfirmBackInfo":"Select with the right face button and go back with the bottom one, in menus, the inventory and the on-screen keyboard. On by default for Nintendo controllers.","settingsButtonRepeat":"Button repeat","settingsButtonRepeatHint":"How a held button repeats in menus, sliders, the on-screen keyboard and crafting. Off acts once per press, and holding drop in game drops just one item.","settingsButtonRepeatDefault":"Default","settingsButtonRepeatSlow":"Slow (0.8 s, then 4 a second)","settingsButtonRepeatOff":"Off (once per press)","settingsTapHoldTime":"Tap/hold time","settingsTapHoldTimeHint":"How long to hold the chat, emote or action button to open its wheel, or the view button to change view where a tap picks a block. Dropping a whole stack takes 0.8, 1 or 1.3 s.","settingsTapHoldShort":"Short (0.25 s)","settingsTapHoldMedium":"Medium (0.5 s)","settingsTapHoldLong":"Long (0.8 s)","settingsEmoteButton":"Emote button","settingsEmoteButtonTapHoldHint":"Tap to repeat your last emote, or hold to open the emote wheel.","settingsEmoteButtonWheelHint":"Any press opens the emote wheel, with no hold to time. Pick with the stick, then select.","settingsEmoteButtonTapHold":"Tap repeats, hold opens wheel","settingsEmoteButtonWheel":"Opens the wheel","settingsAttackMode":"Attack / mine","settingsAttackHoldHint":"Hold attack to keep attacking or mining.","settingsAttackToggleHint":"Press attack once to keep attacking or mining, and again to stop.","settingsAttackHold":"Hold","settingsAttackToggle":"Toggle","settingsLargePointer":"Large pointer and focus","settingsLargePointerInfo":"A bigger menu cursor, thicker selection brackets and bigger button hints.","settingsRemap":"Remap buttons","settingsRemapHint":"Select an action, then press a button. If that button is taken, the two swap.","settingsLayoutSouthpaw":"Southpaw (move with the right stick)","settingsLayoutTriggersSwapped":"Triggers swapped (attack with the left trigger)","settingsCapturePrompt":"Press a button","settingsCaptureCancelHint":"Press {{button}} to cancel","settingsCaptureCancelOrBindHint":"Tap {{button}} to cancel, or hold it to choose it","settingsReset":"Reset","settingsSwapNotice":"{{action}} moved to {{button}}","settingsResetAll":"Reset all buttons and sticks","settingsGroupGameplay":"Movement & gameplay","settingsGroupMenus":"Menus","settingsGroupInventory":"Inventory","settingsGroupKeyboard":"On-screen keyboard","settingsActionMove":"Move","settingsActionLook":"Look around","settingsActionJump":"Jump","settingsActionSneak":"Sneak","settingsActionSneakToggle":"Toggle sneak","settingsActionSprint":"Sprint","settingsActionAttack":"Attack / mine","settingsActionUse":"Use / place","settingsActionHotbarPrevious":"Previous hotbar slot","settingsActionHotbarNext":"Next hotbar slot","settingsActionInventory":"Inventory","settingsActionActionButton":"Game action","settingsActionPerspective":"Change view","settingsActionPickBlock":"Pick block (creative)","settingsActionDrop":"Drop item","settingsActionEmoteWheel":"Emotes","settingsActionChat":"Chat","settingsActionPause":"Pause menu","settingsActionLeaderboard":"Shop / leaderboard","settingsActionMenuConfirm":"Select","settingsActionMenuBack":"Back","settingsActionMenuTabPrevious":"Previous tab","settingsActionMenuTabNext":"Next tab","settingsActionMenuPageUp":"Page up","settingsActionMenuPageDown":"Page down","settingsActionMenuSecondary":"Secondary action","settingsActionMenuToggleCursor":"Switch to virtual cursor","settingsActionInventoryPrimary":"Pick up / place","settingsActionInventorySecondary":"Pick up half / place one","settingsActionInventoryQuickMove":"Quick move","settingsActionInventoryHotbarSwap":"Swap with hotbar slot","settingsActionInventoryClose":"Close","settingsActionInventoryPanelPrevious":"Previous panel","settingsActionInventoryPanelNext":"Next panel","settingsActionInventoryDrop":"Drop item","settingsActionKeyboardType":"Type key","settingsActionKeyboardBackspace":"Backspace","settingsActionKeyboardSpace":"Space","settingsActionKeyboardCaretLeft":"Move cursor left","settingsActionKeyboardCaretRight":"Move cursor right","settingsActionKeyboardShift":"Shift","settingsActionKeyboardSymbols":"Accents and symbols","settingsActionKeyboardSubmit":"Send","settingsActionKeyboardClose":"Close keyboard","settingsActionKeyboardChannel":"Chat channel","settingsAlternatives":"Try alternatives","settingsAlternativesHint":"Try each way of playing and keep the one that feels best.","settingsMenuNavigation":"Menu navigation","settingsMenuNavigationHint":"Steer a cursor with the stick and jump between buttons with the D-pad, or use just one.","settingsNavHybrid":"Cursor and D-pad","settingsMenuNavFocus":"Jump between buttons","settingsVirtualCursor":"Virtual cursor","settingsInventoryNavigation":"Inventory","settingsInventoryNavigationHint":"Steer a cursor with the stick and step slot by slot with the D-pad, or use just one.","settingsInventoryNavSlot":"Slot by slot","settingsQuickChat":"Hold chat button","settingsQuickChatHint":"Hold the chat button to pick a quick phrase. Tapping it still opens chat.","settingsQuickChatWheel":"Quick chat wheel","settingsQuickChatOff":"Off","settingsLeaderboardButton":"Shop / leaderboard button","settingsLeaderboardButtonHint":"Open the shop in one press in games that have one. The lobby leaderboard is still in the pause menu.","settingsLeaderboardButtonShop":"Shop, in games with one","settingsLeaderboardButtonLeaderboard":"Always the leaderboard","settingsTester":"Gamepad tester","settingsTesterNoPad":"Connect a gamepad and press any button to test it.","settingsTesterFamily":"Detected: {{family}}","settingsTesterHint":"Start a test to try every button and stick without moving through the menu.","settingsTesterStart":"Start test","settingsTesterStop":"Stop test","settingsTesterTesting":"Press anything to see it light up. To stop, hold {{button}} or press it three times.","settingsControlsNote":"Playing with a gamepad? Change its buttons and feel in Gamepad settings.","settingsOpenController":"Gamepad settings","keyboardSpace":"Space","keyboardSend":"Send","keyboardDone":"Done","keyboardTargetChat":"Chat","keyboardTargetSign":"Sign","keyboardTargetNameTag":"Name tag","keyboardTargetBook":"Book page","keyboardTargetBookTitle":"Book title","keyboardTargetText":"Text","keyboardPhraseGg":"gg","keyboardPhraseHi":"hi","keyboardPhraseThanks":"thanks","keyboardPhraseGl":"gl","keyboardPhraseBrb":"brb","keyboardPhraseYes":"yes","keyboardPhraseNo":"no","keyboardPhraseHelp":"help!","quickChatPick":"Pick a phrase","actionWheelPick":"Pick an action","wheelReleaseToPick":"Release to pick","wheelClose":"Close","wheelChoose":"Choose","menusSelect":"Select","menusBack":"Back","menusClose":"Close","menusQuickChat":"Quick chat (hold)","menusSkipTutorial":"Skip tutorial","menusTabs":"Tabs","menusRows":"Rows","menusCursorMode":"Cursor","menusFocusMode":"Focus","menusClick":"Click","menusRightClick":"Right-click","menusScroll":"Scroll","menusFriends":"Friends","menusSearch":"Search","menusSettings":"Settings","menusLeaveGameTitle":"Leave the game?","menusLeaveGameLeave":"Leave","menusLeaveGameStay":"Stay","menusNotifications":"Notifications","menusLobby":"Lobby","menusShop":"Shop","menusTasks":"Tasks & leaderboards","menusInvite":"Invite friends","menusAdjust":"Adjust","menusFavourite":"Favourite","screensPressToContinue":"Press {{button}} to continue","screensPressToEnterGame":"Press {{button}} to enter game","screensEnterGame":"Enter game","screensBackToGames":"Back to games","tutorialMine":"Mine","tutorialPlace":"Place / Use","tutorialInventory":"Inventory","tutorialPause":"Pause","menusUseMouse":"Use a mouse or touch here"}}');
    var Mb = Ub(1134),
      Tb = Ub(1304),
      Eb = Ub(7736),
      Yb = Ub(75),
      Bb = Ub(19),
      eb = Ub(22),
      vb = Ub(7750),
      Lb = Ub(7782),
      Pb = Ub(7759),
      Xb = Ub(7788),
      jb = Ub(7739),
      Rb = Ub(8222),
      kb = Ub(8225),
      yb = Ub(1578);
    const Zb = (bb, ab, Ub) => Math.max(ab, Math.min(Ub, bb)),
      Db = bb => Math.min(bb.width, bb.height) / 720,
      zb = bb => Math.max(.15, bb);
    class xb {
      constructor() {
        this.locked = !1
      }
      lock() {
        this.locked = !0
      }
      update(bb, ab) {
        const Ub = Math.hypot(bb.x, bb.y) >= (bb => Math.max(.3, bb))(ab);
        return this.locked ? (this.locked = Ub, !1) : Ub
      }
    }
    const ib = (bb, ab) => {
        const Ub = Zb(ab.dtMs, 0, 100),
          Ab = Ub / 1e3,
          Mb = Db(ab.viewport) * (ab.cursorSpeedPercent / 100),
          Tb = (0, jb.i)(ab.stick, zb(ab.moveDeadzone)),
          Eb = Math.hypot(Tb.x, Tb.y),
          Yb = ((bb, ab, Ub) => {
            if (ab < .3) return 0;
            const Ab = Ub / 350;
            return ab >= .85 ? Math.min(1, bb + Ab) : Math.max(0, bb - Ab)
          })(bb.speedRamp, Eb, Ub);
        let Bb = bb.x,
          eb = bb.y;
        if (Eb > 0) {
          const bb = .45 + .55 * Yb,
            Ub = ab.context.overInteractive ? .45 : 1,
            vb = 1400 * (bb => {
              const ab = Zb(bb, 0, 1);
              return .3 * ab + .7 * ab * ab
            })(Eb) * Mb * bb * Ub;
          Bb += Tb.x / Eb * vb * Ab, eb += Tb.y / Eb * vb * Ab
        }
        const vb = Math.hypot(ab.dpad.x, ab.dpad.y);
        if (vb > 0) {
          const bb = 500 * Mb;
          Bb += ab.dpad.x / vb * bb * Ab, eb += ab.dpad.y / vb * bb * Ab
        }
        const Lb = ab.context.magnetTarget;
        if (Lb && Eb < .3 && 0 === vb) {
          const bb = ((bb, ab, Ub, Ab, Mb) => {
            const Tb = ab.x - bb.x,
              Eb = ab.y - bb.y,
              Yb = Math.hypot(Tb, Eb);
            if (0 === Yb) return {
              x: 0,
              y: 0
            };
            const Bb = Math.min(Yb, Mb * (1 - Ab / .3));
            let eb = Tb / Yb * Bb,
              vb = Eb / Yb * Bb;
            if (Ab > 0) {
              const bb = Ub.x / Ab,
                ab = Ub.y / Ab,
                Mb = eb * bb + vb * ab;
              Mb < 0 && (eb -= Mb * bb, vb -= Mb * ab)
            }
            return {
              x: eb,
              y: vb
            }
          })({
            x: Bb,
            y: eb
          }, Lb, Tb, Eb, 120 * Db(ab.viewport) * Ab);
          Bb += bb.x, eb += bb.y
        }
        return {
          x: Zb(Bb, 0, Math.max(0, ab.viewport.width - 1)),
          y: Zb(eb, 0, Math.max(0, ab.viewport.height - 1)),
          speedRamp: Yb
        }
      },
      fb = bb => {
        const ab = (0, jb.i)(bb, .2);
        return 0 !== ab.x || 0 !== ab.y
      },
      mb = (bb, ab) => {
        const Ub = (0, jb.i)(bb, .2),
          Ab = Math.hypot(Ub.x, Ub.y);
        if (0 === Ab) return {
          x: 0,
          y: 0
        };
        const Mb = Ab * Ab * 1600,
          Tb = Zb(ab, 0, 100) / 1e3;
        return {
          x: Ub.x / Ab * Mb * Tb,
          y: Ub.y / Ab * Mb * Tb
        }
      },
      pb = (bb, ab) => "y" === ab ? bb.scrollHeight > bb.clientHeight + 1 : bb.scrollWidth > bb.clientWidth + 1,
      Nb = (bb, ab) => {
        if (!pb(bb, ab)) return !1;
        const Ub = getComputedStyle(bb),
          Ab = "y" === ab ? Ub.overflowY : Ub.overflowX;
        return "auto" === Ab || "scroll" === Ab
      },
      Wb = (bb, ab, Ub) => {
        for (let Tb = bb instanceof HTMLElement ? bb : null !== (Ab = null === bb || void 0 === bb ? void 0 : bb.parentElement) && void 0 !== Ab ? Ab : null; Tb; Tb = Tb.parentElement) {
          var Ab;
          if (Nb(Tb, ab)) return Tb;
          if (Tb === Ub) return null
        }
        if (Ub) return null;
        const Mb = document.scrollingElement;
        return Mb instanceof HTMLElement && pb(Mb, ab) ? Mb : null
      },
      Hb = new WeakMap,
      Ib = (bb, ab) => {
        const Ub = performance.now(),
          Ab = Hb.get(bb);
        if (Ab && Ab.axis === ab && Ub - Ab.atMs < 500 && (!Ab.container || Ab.container.isConnected)) return Ab.container;
        const Mb = db(bb, ab);
        return Hb.set(bb, {
          axis: ab,
          atMs: Ub,
          container: Mb
        }), Mb
      },
      db = (bb, ab) => {
        let Ub = Nb(bb, ab) ? bb : null,
          Ab = Ub ? Ub.clientWidth * Ub.clientHeight : 0;
        for (const Mb of bb.querySelectorAll("*")) {
          const bb = Mb.clientWidth * Mb.clientHeight;
          bb > Ab && Nb(Mb, ab) && (Ub = Mb, Ab = bb)
        }
        return Ub
      },
      Fb = (bb, ab, Ub) => "y" === ab ? Ub < 0 ? bb.scrollTop > 0 : bb.scrollTop + bb.clientHeight < bb.scrollHeight - 1 : Ub < 0 ? bb.scrollLeft > 0 : bb.scrollLeft + bb.clientWidth < bb.scrollWidth - 1,
      hb = (bb, ab, Ub) => {
        "y" === ab ? bb.scrollBy({
          top: Ub,
          behavior: "instant"
        }) : bb.scrollBy({
          left: Ub,
          behavior: "instant"
        })
      },
      Gb = bb => {
        if (!bb || bb === document.scrollingElement) return new DOMRect(0, 0, window.innerWidth, window.innerHeight);
        const ab = bb.getBoundingClientRect(),
          Ub = Math.max(0, ab.left),
          Ab = Math.max(0, ab.top);
        return new DOMRect(Ub, Ab, Math.min(window.innerWidth, ab.right) - Ub, Math.min(window.innerHeight, ab.bottom) - Ab)
      },
      Qb = (bb, ab) => bb.left < ab.right && ab.left < bb.right && bb.top < ab.bottom && ab.top < bb.bottom;
    var qb = Ub(52),
      ub = Ub(984),
      rb = Ub.n(ub),
      Kb = Ub(1023);
    let ob = 0,
      lb = !1;
    class tb {
      constructor() {
        this.element = null, this.shownKey = "", this.gap = null
      }
      setElement(bb) {
        this.element = bb, this.shownKey = "", this.gap = null
      }
      show(bb) {
        const ab = this.element;
        if (!ab) return;
        const Ub = bb ? this.keepOnScreen(ab, bb) : null,
          Ab = Ub ? `${Ub.left},${Ub.top},${Ub.width},${Ub.height}` : "";
        if (Ab === this.shownKey) return;
        const Mb = "" === this.shownKey;
        this.shownKey = Ab, ab.classList.toggle("Visible", null !== Ub), Ub && (ab.classList.toggle("Snap", Mb), ab.style.width = `${Ub.width}px`, ab.style.height = `${Ub.height}px`, ab.style.transform = `translate(${Ub.left}px, ${Ub.top}px)`, Mb && (ab.offsetWidth, ab.classList.remove("Snap")))
      }
      hide() {
        this.show(null)
      }
      keepOnScreen(bb, ab) {
        var Ub;
        const Ab = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!lb){lb=!0;const bb=document.createElement("div");bb.setAttribute("aria-hidden","true"),bb.style.cssText="position: fixed; top: 0; left: 0; width: 1rem; height: 0; visibility: hidden; pointer-events: none",document.body.appendChild(bb),new ResizeObserver((()=>{ob++})).observe(bb)}return String(ob)})()}`;
        (null === (Ub = this.gap) || void 0 === Ub ? void 0 : Ub.key) !== Ab && (this.gap = {
          px: parseFloat(getComputedStyle(bb).paddingLeft) || 0,
          key: Ab
        });
        const Mb = this.gap.px + 2,
          Tb = Math.max(ab.left, Mb),
          Eb = Math.max(ab.top, Mb),
          Yb = Math.min(ab.left + ab.width, window.innerWidth - Mb),
          Bb = Math.min(ab.top + ab.height, window.innerHeight - Mb);
        return Yb <= Tb || Bb <= Eb ? ab : {
          left: Tb,
          top: Eb,
          width: Yb - Tb,
          height: Bb - Eb
        }
      }
    }
    const wb = bb => {
      let {
        placer: ab,
        className: Ub
      } = bb;
      const Ab = (0, qb.useCallback)((bb => {
        ab.setElement(bb)
      }), [ab]);
      return (0, Kb.jsx)("div", {
        ref: Ab,
        className: rb()("PadReticle", Ub),
        "aria-hidden": !0
      })
    };
    var sb = Ub(8227),
      gb = Ub(1641);
    const Cb = bb => bb >= 56320 && bb <= 57343,
      Vb = bb => bb >= 55296 && bb <= 56319,
      Ob = (bb, ab) => ab >= 2 && Cb(bb.charCodeAt(ab - 1)) && Vb(bb.charCodeAt(ab - 2)) ? ab - 2 : Math.max(0, ab - 1),
      cb = (bb, ab) => {
        let Ub;
        var Ab, Mb;
        return Ub = bb.start !== bb.end ? ab < 0 ? bb.start : bb.end : ab < 0 ? Ob(bb.value, bb.start) : (Ab = bb.value, (Mb = bb.start) + 1 < Ab.length && Vb(Ab.charCodeAt(Mb)) && Cb(Ab.charCodeAt(Mb + 1)) ? Mb + 2 : Math.min(Ab.length, Mb + 1)), {
          value: bb.value,
          start: Ub,
          end: Ub
        }
      },
      Jb = ["text", "search", "url", "email", "tel", "password", "number"],
      nb = bb => !(!(0, gb.e)(bb) || bb.isContentEditable || bb.hasAttribute("data-pad-no-osk")) && (bb instanceof HTMLTextAreaElement || bb instanceof HTMLInputElement && Jb.includes(bb.type)),
      Sb = bb => null !== bb.selectionStart,
      ba = bb => {
        var ab, Ub;
        const {
          value: Ab
        } = bb;
        return {
          value: Ab,
          start: null !== (ab = bb.selectionStart) && void 0 !== ab ? ab : Ab.length,
          end: null !== (Ub = bb.selectionEnd) && void 0 !== Ub ? Ub : Ab.length
        }
      },
      aa = (bb, ab, Ub) => {
        if (bb.readOnly) return;
        const Ab = bb instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(Ab, "value").set.call(bb, ab.value), Sb(bb) && bb.setSelectionRange(ab.start, ab.end), (0, yb.f)(bb, new InputEvent("input", {
          bubbles: !0,
          inputType: Ub
        }))
      };
    let Ua = !1;
    const Aa = (bb, ab) => !!document.execCommand(bb, !1, ab) || (Ua || (Ua = !0, console.warn(`execCommand("${bb}") failed; the on-screen keyboard is setting the value directly`)), !1),
      Ma = (bb, ab) => {
        Aa("insertText", ab) || aa(bb, function(bb, ab) {
          let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
          const Ab = bb.value.slice(0, bb.start),
            Mb = bb.value.slice(bb.end);
          let Tb = Ub < 0 ? ab.length : Math.max(0, Ub - Ab.length - Mb.length);
          Tb > 0 && Tb < ab.length && Vb(ab.charCodeAt(Tb - 1)) && Tb--;
          const Eb = ab.slice(0, Tb),
            Yb = Ab.length + Eb.length;
          return {
            value: Ab + Eb + Mb,
            start: Yb,
            end: Yb
          }
        }(ba(bb), ab, bb.maxLength), "insertText")
      },
      Ta = bb => {
        Aa("delete") || aa(bb, (bb => {
          const ab = bb.start === bb.end ? Ob(bb.value, bb.start) : bb.start;
          return {
            value: bb.value.slice(0, ab) + bb.value.slice(bb.end),
            start: ab,
            end: ab
          }
        })(ba(bb)), "deleteContentBackward")
      },
      Ea = (bb, ab) => {
        if (!Sb(bb)) return;
        const Ub = cb(ba(bb), ab);
        bb.setSelectionRange(Ub.start, Ub.end)
      },
      Ya = ["button", "a[href]", "input:not([type=hidden])", "textarea", "select", "[role=button]", "[role=tab]", "[role=switch]", "[role=checkbox]", "[role=option]", "[role=menuitem]", "[data-pad-focusable]", "[data-pad-tab]", ".Dropdown-control", ".Dropdown-option"].join(","),
      Ba = (bb, ab) => {
        if ("function" === typeof bb.checkVisibility) return !bb.checkVisibility({
          visibilityProperty: !0,
          checkVisibilityCSS: !0,
          opacityProperty: ab,
          checkOpacity: ab
        });
        const {
          visibility: Ub
        } = getComputedStyle(bb);
        if ("hidden" === Ub || "collapse" === Ub) return !0;
        if (!ab) return !1;
        for (let Ab = bb; Ab; Ab = Ab.parentElement)
          if ("0" === getComputedStyle(Ab).opacity) return !0;
        return !1
      },
      ea = bb => {
        if (!bb.isConnected || Ba(bb, !0)) return !1;
        const ab = bb.getBoundingClientRect();
        return ab.width > 0 && ab.height > 0
      },
      va = bb => !!bb.matches(":disabled, [aria-disabled='true']") || "button" === bb.getAttribute("role") && "-1" === bb.getAttribute("tabindex"),
      La = bb => {
        var ab;
        if (bb.closest("[data-pad-ignore]")) return !0;
        return !!(null === (ab = bb.parentElement) || void 0 === ab ? void 0 : ab.closest("[data-pad-focusable]"))
      },
      Pa = bb => {
        const ab = bb.querySelectorAll(Ya);
        return bb.matches(Ya) ? [bb, ...ab] : ab
      },
      Xa = bb => {
        const ab = [];
        for (const Ub of Pa(bb)) !La(Ub) && ea(Ub) && ab.push(Ub);
        return ab
      },
      ja = new WeakMap,
      Ra = bb => {
        const ab = ja.get(bb);
        if (ab && ka(ab, bb)) return !0;
        for (const Ub of Pa(bb))
          if (!La(Ub) && ea(Ub)) return ja.set(bb, Ub), !0;
        return ja.delete(bb), !1
      },
      ka = (bb, ab) => ab.contains(bb) && bb.matches(Ya) && !La(bb) && ea(bb),
      ya = (bb, ab) => ka(bb, ab) && !va(bb),
      Za = bb => {
        const ab = ab => {
          let Ub = 0;
          for (let Ab = ab.parentElement; Ab && Ab !== bb; Ab = Ab.parentElement) Ub++;
          return Ub
        };
        return [...bb.querySelectorAll("[data-pad-initial-area]")].filter(ea).sort(((bb, Ub) => ab(Ub) - ab(bb)))
      },
      Da = bb => nb(bb),
      za = bb => {
        const ab = bb.getBoundingClientRect();
        return {
          x: ab.left + ab.width / 2,
          y: ab.top + ab.height / 2
        }
      },
      xa = (bb, ab, Ub) => ({
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window,
        clientX: bb.x,
        clientY: bb.y,
        screenX: bb.x,
        screenY: bb.y,
        button: ab,
        buttons: Ub,
        pointerId: 1,
        pointerType: "mouse",
        isPrimary: !0
      }),
      ia = (bb, ab) => {
        (0, yb.f)(bb, ab)
      },
      fa = function(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const Ab = 0 === Ub ? 1 : 2;
        ia(bb, new PointerEvent("pointerdown", xa(ab, Ub, Ab))), ia(bb, new MouseEvent("mousedown", xa(ab, Ub, Ab)))
      },
      ma = function(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        ia(bb, new PointerEvent("pointerup", xa(ab, Ub, 0))), ia(bb, new MouseEvent("mouseup", xa(ab, Ub, 0)))
      },
      pa = function(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        fa(bb, ab, Ub), ma(bb, ab, Ub), ia(bb, 0 === Ub ? new MouseEvent("click", xa(ab, 0, 0)) : new MouseEvent("contextmenu", xa(ab, 2, 0)))
      },
      Na = function(bb, ab, Ub) {
        let {
          leaveBelow: Ab = null,
          enterBelow: Mb = null
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (bb !== ab) {
          if (null !== bb && void 0 !== bb && bb.isConnected) {
            const Mb = {
              ...xa(Ub, 0, 0),
              relatedTarget: ab
            };
            ia(bb, new PointerEvent("pointerout", Mb)), ia(bb, new MouseEvent("mouseout", Mb));
            const Tb = bb => !!ab && bb.contains(ab) || !!Ab && bb.contains(Ab);
            for (let ab = bb; ab && !Tb(ab); ab = ab.parentElement) ia(ab, new PointerEvent("pointerleave", {
              ...Mb,
              bubbles: !1
            })), ia(ab, new MouseEvent("mouseleave", {
              ...Mb,
              bubbles: !1
            }))
          }
          if (ab) {
            const Ab = {
              ...xa(Ub, 0, 0),
              relatedTarget: bb
            };
            ia(ab, new PointerEvent("pointerover", Ab)), ia(ab, new MouseEvent("mouseover", Ab));
            const Tb = [],
              Eb = ab => !(null === bb || void 0 === bb || !bb.isConnected) && ab.contains(bb) || !!Mb && ab.contains(Mb);
            for (let bb = ab; bb && !Eb(bb); bb = bb.parentElement) Tb.push(bb);
            for (const bb of Tb.reverse()) ia(bb, new PointerEvent("pointerenter", {
              ...Ab,
              bubbles: !1
            })), ia(bb, new MouseEvent("mouseenter", {
              ...Ab,
              bubbles: !1
            }));
            ia(ab, new PointerEvent("pointermove", xa(Ub, 0, 0))), ia(ab, new MouseEvent("mousemove", xa(Ub, 0, 0)))
          }
        } else ab && (ia(ab, new PointerEvent("pointermove", xa(Ub, 0, 0))), ia(ab, new MouseEvent("mousemove", xa(Ub, 0, 0))))
      },
      Wa = bb => {
        eb.m.IR(sb.e, bb)
      },
      Ha = bb => {
        if (Da(bb)) return void Wa(bb);
        const ab = bb.hasAttribute("data-pad-focusable") ? bb.querySelector("a[href]") : null,
          Ub = null !== ab && void 0 !== ab ? ab : bb;
        pa(Ub, za(Ub))
      },
      Ia = ".Dropdown-root.is-open",
      da = bb => {
        const ab = bb.querySelector(".Dropdown-control");
        return Ha(ab), ab
      },
      Fa = bb => {
        var ab;
        const Ub = null !== (ab = bb.closest(Ia)) && void 0 !== ab ? ab : bb.querySelector(Ia);
        return Ub ? da(Ub) : null
      },
      ha = bb => {
        for (const ab of document.querySelectorAll(Ia)) ab.contains(bb) || da(ab)
      },
      Ga = bb => null !== bb.closest("input[type=color], input[type=file], [data-pad-mouse-only]"),
      Qa = bb => {
        const ab = bb ? document.elementFromPoint(bb.x, bb.y) : null;
        return !(null === ab || void 0 === ab || !ab.closest("[data-pad-repeat]"))
      },
      qa = bb => {
        var ab;
        return null !== (ab = [...bb.querySelectorAll("[data-pad-back]")].find(ea)) && void 0 !== ab ? ab : null
      },
      ua = bb => {
        const ab = qa(bb);
        return !!ab && (Ha(ab), !0)
      },
      ra = bb => {
        var ab, Ub, Ab, Mb;
        return null !== (ab = null !== (Ub = null !== (Ab = bb.getAttribute("data-pad-key")) && void 0 !== Ab ? Ab : bb.getAttribute("href")) && void 0 !== Ub ? Ub : null === (Mb = bb.querySelector("a[href]")) || void 0 === Mb ? void 0 : Mb.getAttribute("href")) && void 0 !== ab ? ab : null
      },
      Ka = {
        x: 0,
        y: 0,
        visible: !1,
        pressed: !1
      };
    const oa = new class {
        constructor() {
          this.state = Ka, this.listeners = new Set
        }
        get() {
          return this.state
        }
        set(bb) {
          if (ab = this.state, Ub = bb, (ab.visible || Ub.visible) && (ab.visible !== Ub.visible || ab.x !== Ub.x || ab.y !== Ub.y || ab.pressed !== Ub.pressed)) {
            var ab, Ub;
            this.state = bb;
            for (const ab of this.listeners) ab(bb)
          }
        }
        hide() {
          this.set(Ka)
        }
        subscribe(bb) {
          return this.listeners.add(bb), () => {
            this.listeners.delete(bb)
          }
        }
      },
      la = (bb, ab) => {
        let {
          kind: Ub,
          holding: Ab,
          hasPress: Mb,
          hasBack: Tb,
          slotHasItem: Eb
        } = ab;
        switch (bb) {
          case "primary":
            return "slot" === Ub ? "slotPrimary" : "recipe" === Ub || "button" === Ub ? Mb ? "pressPrimary" : "click" : "textField" === Ub ? "openKeyboard" : null;
          case "secondary":
            return "slot" === Ub ? "slotSecondary" : "button" !== Ub && "recipe" !== Ub || !Mb ? null : "pressSecondary";
          case "quickMove":
            return "slot" === Ub && Eb ? "slotQuickMove" : null;
          case "hotbarSwap":
            return "slot" === Ub && Eb && !Ab ? "hotbarPick" : null;
          case "openButton":
            return "close";
          case "back":
            return Ab ? "cancel" : Tb ? "pressBack" : "close"
        }
      },
      ta = bb => {
        const ab = [];
        if (bb.hotbarPicking) return ab.push({
          actions: ["inventoryPrimary", "inventoryHotbarSwap"],
          labelKey: "inventorySwapHere"
        }), ab.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryCancel"
        }), ab;
        if (bb.holding) "slot" === bb.kind ? (ab.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryPlace"
        }), ab.push({
          actions: ["inventorySecondary"],
          labelKey: "inventoryPlaceOne"
        })) : "textField" === bb.kind && ab.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryType"
        }), ab.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryPutBack"
        }), ab.push({
          actions: ["inventoryDrop"],
          labelKey: "inventoryDrop"
        }), bb.openButtonCloses && ab.push({
          actions: ["inventory"],
          labelKey: "inventoryClose"
        });
        else {
          var Ub;
          "slot" === bb.kind && bb.slotHasItem ? (ab.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryTake"
          }), ab.push({
            actions: ["inventorySecondary"],
            labelKey: "inventoryTakeHalf"
          }), ab.push({
            actions: ["inventoryQuickMove"],
            labelKey: bb.quickMoveToHotbar ? "inventoryToHotbar" : "inventoryQuickMove"
          }), ab.push({
            actions: ["inventoryHotbarSwap"],
            labelKey: "inventoryHotbarSwap"
          }), ab.push({
            actions: ["inventoryDrop"],
            labelKey: "inventoryDrop"
          })) : "button" !== bb.kind && "recipe" !== bb.kind || !bb.pressHints ? "button" === bb.kind || "recipe" === bb.kind ? ab.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventorySelect"
          }) : "textField" === bb.kind && ab.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryType"
          }) : (bb.pressHints.primary && ab.push({
            actions: ["inventoryPrimary"],
            labelKey: bb.pressHints.primary
          }), bb.pressHints.secondary && ab.push({
            actions: ["inventorySecondary"],
            labelKey: bb.pressHints.secondary
          }));
          const Ab = null === (Ub = bb.pressHints) || void 0 === Ub ? void 0 : Ub.back;
          Ab && ab.push({
            actions: ["inventoryClose"],
            labelKey: Ab
          });
          const Mb = [];
          bb.openButtonCloses && Mb.push("inventory"), Ab || Mb.push("inventoryClose"), Mb.length > 0 && ab.push({
            actions: Mb,
            labelKey: "inventoryClose"
          })
        }
        return ab.push({
          actions: ["inventoryPanelPrevious", "inventoryPanelNext"],
          labelKey: "inventoryPanels"
        }), bb.hasCategories ? ab.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryCategory"
        }) : bb.hasList && ab.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryPage"
        }), ab
      };
    var wa = Ub(8235);
    class sa {
      constructor(bb) {
        this.probes = bb, this.byContainer = new Map, this.byParent = new Map
      }
      find(bb, ab) {
        const Ub = Wb(bb, "y", ab);
        if (!Ub) return null;
        let Ab = this.byContainer.get(Ub);
        return Ab || (this.probes.push({
          element: Ub,
          rect: Oa(Ub.getBoundingClientRect())
        }), Ab = {
          container: Ub,
          box: Gb(Ub),
          group: Va(Ub)
        }, this.byContainer.set(Ub, Ab)), Ab
      }
      findForParent(bb, ab) {
        let Ub = this.byParent.get(bb);
        return void 0 === Ub && (Ub = this.find(bb, ab), this.byParent.set(bb, Ub)), Ub
      }
    }
    const ga = new WeakMap;
    let Ca = 0;
    const Va = bb => {
        let ab = ga.get(bb);
        return ab || (ab = "el:" + Ca++, ga.set(bb, ab)), ab
      },
      Oa = bb => ({
        left: bb.left,
        top: bb.top,
        width: bb.width,
        height: bb.height
      }),
      ca = bb => bb.width > 0 && bb.height > 0,
      Ja = (bb, ab) => ca(bb) && bb.left + bb.width > 0 && bb.top + bb.height > 0 && bb.left < ab.width && bb.top < ab.height,
      na = (bb, ab, Ub) => {
        const Ab = bb.top + bb.height / 2;
        return Ja(bb, ab) && (!Ub || Ab >= Ub.top && Ab <= Ub.bottom)
      },
      Sa = bb => ({
        x: bb.left + bb.width / 2,
        y: bb.top + bb.height / 2
      }),
      bU = (bb, ab, Ub) => bb < 0 ? Ub >= 0 ? 0 : ab - 1 : ((bb + Ub) % ab + ab) % ab,
      aU = bb => "Left" === bb || "Right" === bb,
      UU = (bb, ab, Ub) => {
        const Ab = aU(Ub),
          Mb = Ab ? bb.top : bb.left,
          Tb = Ab ? bb.height : bb.width,
          Eb = Ab ? ab.top : ab.left,
          Yb = Ab ? ab.height : ab.width,
          Bb = Math.max(0, Math.max(Eb - (Mb + Tb), Mb - (Eb + Yb)));
        return Tb > 1.5 * Yb ? {
          gap: Bb,
          offset: Math.max(0, Eb - Mb) + .1 * Math.max(0, Mb - Eb)
        } : {
          gap: Bb,
          offset: Math.abs(Eb + Yb / 2 - (Mb + Tb / 2))
        }
      },
      AU = (bb, ab, Ub) => {
        const Ab = ((bb, ab, Ub) => {
          const Ab = Sa(bb),
            Mb = Sa(ab),
            Tb = aU(Ub) ? Math.min(bb.width, ab.width) / 4 : Math.min(bb.height, ab.height) / 4;
          switch (Ub) {
            case "Right":
              return Mb.x - Ab.x >= Tb ? Math.max(0, ab.left - (bb.left + bb.width)) : null;
            case "Left":
              return Ab.x - Mb.x >= Tb ? Math.max(0, bb.left - (ab.left + ab.width)) : null;
            case "Down":
              return Mb.y - Ab.y >= Tb ? Math.max(0, ab.top - (bb.top + bb.height)) : null;
            case "Up":
              return Ab.y - Mb.y >= Tb ? Math.max(0, bb.top - (ab.top + ab.height)) : null
          }
        })(bb, ab, Ub);
        if (null === Ab) return null;
        const Mb = UU(bb, ab, Ub);
        return Ab + 3 * Mb.gap + .5 * Mb.offset
      },
      MU = (bb, ab) => ab.visible || null !== ab.scrollGroup && ab.scrollGroup === bb.scrollGroup,
      TU = (bb, ab, Ub, Ab) => {
        let Mb = null,
          Tb = 1 / 0;
        for (const Eb of ab) {
          if (Eb.key === bb.key || !MU(bb, Eb) || !Ab(Eb)) continue;
          const ab = AU(bb.rect, Eb.rect, Ub);
          null !== ab && ab < Tb && (Mb = Eb, Tb = ab)
        }
        return Mb
      },
      EU = (bb, ab, Ub) => {
        const Ab = TU(bb, ab, Ub, (() => !0));
        if (!Ab || aU(Ub) || null === bb.scrollGroup || Ab.scrollGroup === bb.scrollGroup) return Ab;
        const Mb = TU(bb, ab, Ub, (ab => 0 === UU(bb.rect, ab.rect, Ub).gap));
        return null !== Mb && void 0 !== Mb ? Mb : Ab
      },
      YU = (bb, ab, Ub) => {
        let Ab = null,
          Mb = 1 / 0;
        for (const Tb of ab) {
          if (!Tb.visible || Ub && !Ub(Tb)) continue;
          const ab = Sa(Tb.rect),
            Eb = Math.hypot(ab.x - bb.x, ab.y - bb.y);
          Eb < Mb && (Ab = Tb, Mb = Eb)
        }
        return Ab
      },
      BU = bb => {
        const {
          rect: ab,
          clip: Ub
        } = bb;
        if (!Ub) return ab;
        const Ab = Math.max(ab.left, Ub.left),
          Mb = Math.max(ab.top, Ub.top);
        return {
          left: Ab,
          top: Mb,
          width: Math.min(ab.left + ab.width, Ub.left + Ub.width) - Ab,
          height: Math.min(ab.top + ab.height, Ub.top + Ub.height) - Mb
        }
      },
      eU = (bb, ab) => ab.x >= bb.left && ab.x < bb.left + bb.width && ab.y >= bb.top && ab.y < bb.top + bb.height,
      vU = (bb, ab) => {
        let Ub = null,
          Ab = 1 / 0;
        for (const Mb of ab) {
          const ab = BU(Mb);
          (Mb.visible || Mb.clip) && eU(ab, bb) && (ab.width * ab.height < Ab && (Ub = Mb, Ab = ab.width * ab.height))
        }
        return Ub
      },
      LU = bb => {
        let ab = null;
        for (const Ub of bb) {
          if (!Ub.visible) continue;
          if (!ab) {
            ab = Ub;
            continue
          }
          const bb = Math.min(ab.rect.height, Ub.rect.height) / 2,
            Ab = Ub.rect.top - ab.rect.top;
          (Ab < -bb || Math.abs(Ab) <= bb && Ub.rect.left < ab.rect.left) && (ab = Ub)
        }
        return ab
      },
      PU = (bb, ab, Ub, Ab, Mb) => {
        const Tb = Mb % ab,
          Eb = Math.floor(Mb / ab);
        return {
          left: bb.left + Tb * Ub,
          top: bb.top + Eb * Ab,
          width: bb.width,
          height: bb.height
        }
      },
      XU = ".EntireInventoryWrapper .Inventory, .HotBarGameItemsContainer",
      jU = ".LazyLoadedItemWrapper",
      RU = ["[data-inven-idx]", "[data-recipe-key]", "[role=button]", "button", "input:not([type=hidden])", "textarea", ".CreativeCategoryTab", ".CreativeCategoryDropdownButton", ".CreativeCategoryDropdownOption", "[data-craft-ingredient]"].join(","),
      kU = [
        ["hotbar", ".HotBarGameItemsContainer"],
        ["gameButtons", ".ClientGameInventoryButtons"],
        ["categories", ".CreativeCategoryRail"],
        ["recipe", ".CraftableInfo"],
        ["armour", ".ArmourItemSlots"],
        ["main", ".InvenBodyRight"],
        ["left", ".InvenLeftSide"]
      ],
      yU = ["gameButtons", "categories", "left", "recipe", "armour", "main", "hotbar"],
      ZU = bb => bb.hasAttribute("data-inven-idx") ? "slot" : bb.hasAttribute("data-recipe-key") ? "recipe" : bb.hasAttribute("data-craft-ingredient") || va(bb) ? "info" : Da(bb) ? "textField" : "button",
      DU = (bb, ab) => "slot" === ab ? Number(bb.getAttribute("data-inven-idx")) : null,
      zU = bb => bb.matches(jU) ? bb.querySelector(RU) : bb,
      xU = bb => {
        var ab, Ub;
        return {
          element: bb,
          recipe: null !== (ab = bb && (null === (Ub = zU(bb)) || void 0 === Ub ? void 0 : Ub.getAttribute("data-recipe-key"))) && void 0 !== ab ? ab : null
        }
      },
      iU = bb => {
        const ab = zU(bb);
        if (!ab) return {
          kind: "pending",
          idx: null
        };
        const Ub = ZU(ab);
        return {
          kind: Ub,
          idx: DU(ab, Ub)
        }
      },
      fU = bb => {
        const ab = [];
        for (const [Ub, Ab] of kU) {
          bb.matches(Ab) && ab.push([Ub, bb]);
          for (const Mb of bb.querySelectorAll(Ab)) ab.push([Ub, Mb])
        }
        return ab
      },
      mU = (bb, ab) => {
        for (const [Ub, Ab] of bb)
          if (Ab.contains(ab)) return Ub;
        return "other"
      },
      pU = (bb, ab, Ub, Ab, Mb, Tb, Eb, Yb) => {
        var Bb;
        const eb = bb.children,
          vb = Oa(eb[0].getBoundingClientRect()),
          Lb = [{
            element: eb[0],
            rect: vb
          }];
        if (Tb.push(Lb[0]), 0 === vb.width || 0 === vb.height) return;
        let Pb = 1;
        for (; Pb < eb.length && Math.abs(eb[Pb].getBoundingClientRect().top - vb.top) < 1;) Pb++;
        const Xb = bb => {
            const ab = {
              element: eb[bb],
              rect: Oa(eb[bb].getBoundingClientRect())
            };
            return Tb.push(ab), Lb.push(ab), ab.rect
          },
          jb = Pb > 1 ? Xb(1).left - vb.left : vb.width,
          Rb = eb.length > Pb ? Xb(Pb).top - vb.top : vb.height,
          kb = Eb.find(bb, ab);
        let yb = null;
        if (kb) {
          var Zb;
          const {
            container: bb,
            box: ab
          } = kb;
          yb = null !== (Zb = Yb.get(bb)) && void 0 !== Zb ? Zb : null, yb || (yb = {
            top: bb.scrollTop,
            left: bb.scrollLeft,
            box: ab,
            viewport: Ab,
            targets: [],
            probes: [],
            holdsOthers: !1
          }, Yb.set(bb, yb)), yb.probes.push(...Lb)
        }
        const Db = Mb.length;
        for (let fb = 0; fb < eb.length; fb++) {
          var zb, xb, ib;
          const bb = eb[fb],
            ab = PU(vb, Pb, jb, Rb, fb),
            Tb = bb.firstElementChild ? bb.querySelector(RU) : null,
            Eb = Tb ? ZU(Tb) : "pending";
          Mb.push({
            key: Va(bb),
            rect: ab,
            panel: Ub,
            scrollGroup: null !== (zb = null === kb || void 0 === kb ? void 0 : kb.group) && void 0 !== zb ? zb : null,
            visible: na(ab, Ab, null === kb || void 0 === kb ? void 0 : kb.box),
            clip: null !== (xb = null === kb || void 0 === kb ? void 0 : kb.box) && void 0 !== xb ? xb : null,
            element: bb,
            kind: Eb,
            idx: Tb ? DU(Tb, Eb) : null,
            scrollContainer: null !== (ib = null === kb || void 0 === kb ? void 0 : kb.container) && void 0 !== ib ? ib : null
          })
        }
        null === (Bb = yb) || void 0 === Bb || Bb.targets.push(...Mb.slice(Db))
      },
      NU = bb => bb instanceof Element && null !== bb.closest(jU),
      WU = bb => null !== bb.scrollContainer && NU(bb.element);
    class HU {
      constructor() {
        this.latched = null, this.presses = 0
      }
      press(bb, ab, Ub, Ab) {
        this.latched = {
          source: bb,
          focusKey: ab,
          sinceMs: Ub,
          hold: {
            id: ++this.presses,
            holdMs: Ab
          }
        }
      }
      update(bb, ab, Ub) {
        const Ab = this.latched;
        return Ab ? bb && ab === Ab.focusKey ? Ub - Ab.sinceMs < Ab.hold.holdMs ? null : (this.latched = null, Ab.source) : (this.latched = null, null) : null
      }
      getHold() {
        var bb, ab;
        return null !== (bb = null === (ab = this.latched) || void 0 === ab ? void 0 : ab.hold) && void 0 !== bb ? bb : null
      }
      reset() {
        this.latched = null
      }
    }
    var IU = Ub(8241);
    const dU = {
        kind: "none"
      },
      FU = bb => ({
        x: bb.clientX,
        y: bb.clientY
      }),
      hU = () => 2 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
    class GU {
      constructor() {
        this.hovered = dU, this.signature = "", this.holding = !1, this.lastPoint = {
          clientX: 0,
          clientY: 0
        }
      }
      sync(bb, ab, Ub, Ab, Mb) {
        const Tb = null !== ab ? {
            kind: "slot",
            idx: ab
          } : Ub ? {
            kind: "element",
            element: Ub
          } : dU,
          Eb = `${Mb}|${Math.round(Ab.clientX)},${Math.round(Ab.clientY)}`,
          Yb = (Bb = this.hovered, eb = Tb, "slot" === Bb.kind && "slot" === eb.kind ? Bb.idx === eb.idx : "element" === Bb.kind && "element" === eb.kind ? Bb.element === eb.element : Bb.kind === eb.kind);
        var Bb, eb;
        if (Yb && Eb === this.signature) return;
        const vb = !Yb || Mb !== this.holding || "" === this.signature;
        this.signature = Eb, this.holding = Mb, this.lastPoint = Ab;
        const Lb = this.hovered;
        if (this.hovered = Tb, "slot" === Tb.kind) return this.leaveElement(Lb, null, Ab), void(vb ? bb.hover(Tb.idx, Ab) : bb.moveTo(Ab));
        if (Yb) return void("element" === Tb.kind ? Na(Tb.element, Tb.element, FU(Ab)) : bb.hover(null, Ab));
        bb.hover(null, Ab);
        const Pb = "element" === Tb.kind ? Tb.element : null;
        "element" === Lb.kind ? Na(Lb.element, Pb, FU(Ab)) : Pb && Na(null, Pb, FU(Ab))
      }
      invalidate() {
        this.signature = ""
      }
      clear(bb) {
        const ab = this.hovered;
        this.hovered = dU, this.signature = "", "none" !== ab.kind && (this.leaveElement(ab, null, this.lastPoint), bb && "slot" === ab.kind && bb.hover(null, this.lastPoint))
      }
      leaveElement(bb, ab, Ub) {
        "element" === bb.kind && Na(bb.element, ab, FU(Ub))
      }
    }
    class QU {
      constructor() {
        this.lastTiltedMs = -1 / 0
      }
      update(bb, ab) {
        fb(bb) && (this.lastTiltedMs = ab)
      }
      allowsClick(bb) {
        return bb - this.lastTiltedMs > 150
      }
    }
    class qU {
      constructor() {
        this.remainder = 0, this.container = null
      }
      isScrolling(bb) {
        return 0 !== (0, jb.i)(bb, .2).y
      }
      step(bb, ab, Ub) {
        bb !== this.container && (this.container = bb, this.remainder = 0);
        const Ab = mb(ab, Ub).y;
        if (0 === Ab) return this.remainder = 0, !1;
        const Mb = this.remainder + Ab,
          Tb = Math.trunc(Mb);
        if (this.remainder = Mb - Tb, 0 === Tb) return !1;
        const Eb = bb.scrollTop;
        return bb.scrollTop = Eb + Tb, bb.scrollTop !== Eb
      }
      current() {
        var bb;
        return null !== (bb = this.container) && void 0 !== bb && bb.isConnected ? this.container : null
      }
      reset() {
        this.remainder = 0, this.container = null
      }
    }
    var uU = Ub(8250);
    const rU = "[data-pad-inventory-default]",
      KU = ".HotBarGameItemsContainer .InvenItem.Selected",
      oU = {
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
      lU = [
        ["primary", "inventoryPrimary"],
        ["secondary", "inventorySecondary"],
        ["quickMove", "inventoryQuickMove"],
        ["hotbarSwap", "inventoryHotbarSwap"],
        ["back", "inventoryClose"],
        ["openButton", "inventory"]
      ],
      tU = ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryHotbarSwap", "inventoryClose", "inventoryDrop"],
      wU = ["inventoryPanelPrevious", "inventoryPanelNext", "menuPageUp", "menuPageDown"],
      sU = [...tU, ...wU],
      gU = () => {
        return bb = (0, vb.h)("inventory"), !sU.map(vb.h).includes(bb) && !(0, jb.B)(bb);
        var bb
      },
      CU = new Set(["slotPrimary", "slotSecondary", "slotQuickMove", "pressPrimary", "pressSecondary", "openKeyboard"]),
      VU = (bb, ab) => {
        const Ub = !(null === ab || void 0 === ab || !ab.isHolding());
        return function(bb, ab) {
          const Ub = bb.find((bb => bb.visible && ab(bb)));
          if (Ub) return Ub;
          for (var Ab = arguments.length, Mb = new Array(Ab > 2 ? Ab - 2 : 0), Tb = 2; Tb < Ab; Tb++) Mb[Tb - 2] = arguments[Tb];
          for (const Eb of Mb) {
            const ab = LU(bb.filter(Eb));
            if (ab) return ab
          }
          return LU(bb)
        }(bb, (bb => {
          const {
            element: ab
          } = bb;
          return ab.matches(rU) || null !== ab.querySelector(rU) || ab.matches(KU)
        }), (bb => "slot" === bb.kind ? Ub || null !== bb.idx && !(null === ab || void 0 === ab || !ab.hasItemAt(bb.idx)) : "recipe" === bb.kind || "pending" === bb.kind), (bb => "slot" === bb.kind || "button" === bb.kind))
      };
    class OU {
      constructor() {
        this.set = null, this.observer = new MutationObserver((bb => {
          bb.some((bb => !NU(bb.target))) && (this.set = null)
        })), this.invalidate = () => {
          this.set = null
        }, this.onScroll = bb => {
          this.scrolled(bb.target)
        }
      }
      get() {
        if (!this.set) {
          this.set = (() => {
            const bb = [],
              ab = [];
            let Ub = !1;
            const Ab = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              Mb = new Map,
              Tb = new sa(ab);
            for (const Lb of document.querySelectorAll(XU)) {
              const vb = fU(Lb);
              Ub ||= null !== Lb.querySelector(".CreativeCategoryTab");
              for (const Ub of Lb.querySelectorAll(`${jU}:first-child`)) {
                const Eb = Ub.parentElement;
                pU(Eb, Lb, mU(vb, Eb), Ab, bb, ab, Tb, Mb)
              }
              for (const Ub of Lb.querySelectorAll(RU)) {
                var Eb, Yb, Bb, eb;
                if (Ub.closest(jU) || Ub.closest("[data-pad-ignore]")) continue;
                const Pb = null === (Eb = Ub.parentElement) || void 0 === Eb ? void 0 : Eb.closest(RU);
                if (Pb && Lb.contains(Pb)) continue;
                const Xb = ZU(Ub),
                  jb = DU(Ub, Xb);
                if (-1 === jb) continue;
                const Rb = Oa(Ub.getBoundingClientRect());
                ab.push({
                  element: Ub,
                  rect: Rb
                });
                const kb = Tb.findForParent(Ub.parentElement, Lb),
                  yb = kb && !Mb.has(kb.container) ? kb : null;
                (yb ? ca(Rb) : Ja(Rb, Ab)) && bb.push({
                  key: Va(Ub),
                  rect: Rb,
                  panel: mU(vb, Ub),
                  scrollGroup: null !== (Yb = null === yb || void 0 === yb ? void 0 : yb.group) && void 0 !== Yb ? Yb : null,
                  visible: na(Rb, Ab, null === yb || void 0 === yb ? void 0 : yb.box),
                  clip: null !== (Bb = null === yb || void 0 === yb ? void 0 : yb.box) && void 0 !== Bb ? Bb : null,
                  element: Ub,
                  kind: Xb,
                  idx: jb,
                  scrollContainer: null !== (eb = null === yb || void 0 === yb ? void 0 : yb.container) && void 0 !== eb ? eb : null
                })
              }
            }
            for (const [Lb, Pb] of Mb) Pb.holdsOthers = ab.some((bb => bb.element !== Lb && Lb.contains(bb.element) && !bb.element.closest(jU)));
            const vb = new Map;
            for (const Lb of bb) vb.set(Lb.element, Lb);
            return {
              targets: bb,
              byElement: vb,
              hasCategories: Ub,
              probes: ab,
              scrollers: Mb
            }
          })(), this.observer.disconnect();
          for (const bb of document.querySelectorAll(XU)) this.observer.observe(bb, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "disabled", "aria-disabled", "tabindex", "data-inven-idx"]
          })
        }
        return this.set
      }
      scrolled(bb) {
        !this.set || bb instanceof Element && ((bb, ab) => {
          const Ub = bb.scrollers.get(ab);
          if (!Ub || Ub.holdsOthers || ab.scrollLeft !== Ub.left) return !1;
          const Ab = ab.scrollTop - Ub.top;
          if (0 === Ab) return !0;
          Ub.top = ab.scrollTop;
          for (const Mb of Ub.probes) Mb.rect.top -= Ab;
          for (const Mb of Ub.targets) Mb.rect.top -= Ab, Mb.visible = na(Mb.rect, Ub.viewport, Ub.box);
          return !0
        })(this.set, bb) || (this.set = null)
      }
      revalidate() {
        this.set && this.set.probes.some((bb => {
          return ab = bb.rect, Ub = bb.element.getBoundingClientRect(), !(ab.left === Ub.left && ab.top === Ub.top && ab.width === Ub.width && ab.height === Ub.height);
          var ab, Ub
        })) && (this.set = null)
      }
      disconnect() {
        this.observer.disconnect(), this.set = null
      }
    }
    const cU = new class {
        constructor() {
          this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(jb.u.map((bb => [bb, (0, Rb.c)(jb.x)]))), this.stickRepeat = new jb.b((0, Rb.c)(jb.X)), this.pageUpTimer = (0, Rb.c)(jb.Q), this.pageDownTimer = (0, Rb.c)(jb.Q), this.stickGate = new xb, this.pointer = null, this.activePress = null, this.dropLatch = new HU, this.scroller = new qU, this.scrollStickClick = new QU, this.hover = new GU, this.lastRealPointer = null, this.placeAfterCategory = null, this.hotbarPick = null, this.ring = new tb, this.targets = new OU, this.hasCategories = !1, this.wasShowing = !1, this.state = IU.d, this.isActive = () => (0, wa.h)(), this.isShowing = () => "inventory" === Lb.c.getActiveConsumerName() && (0, Xb.n)(), this.getState = () => this.state, this.isSteppingSlots = () => this.isShowing() && null === this.pointer, this.onDeactivate = () => {
            this.endInteraction((0, wa.d)()), (0, wa.h)() || this.forgetSurface()
          }, this.forgetSurface = () => {
            var bb;
            this.reopenSlotIdx = null !== (bb = this.focused ? iU(this.focused).idx : null) && void 0 !== bb ? bb : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, wa.n)(), this.panelMemory.clear(), this.targets.disconnect()
          }, this.onFrame = bb => {
            (0, Yb.unstable_batchedUpdates)((() => {
              this.frame(bb)
            }))
          }, this.shouldBlockRealPointer = bb => bb.isTrusted && !(0, yb.l)(bb) && this.isShowing(), this.noteRealPointer = bb => {
            bb instanceof MouseEvent && bb.isTrusted && !(0, yb.l)(bb) && (this.lastRealPointer ??= {
              x: 0,
              y: 0
            }, this.lastRealPointer.x = bb.clientX, this.lastRealPointer.y = bb.clientY)
          }, this.wakePressActs = bb => {
            var ab;
            return bb === (0, vb.h)("inventoryClose") ? !(null !== (ab = (0, wa.d)()) && void 0 !== ab && ab.isHolding()) : !(bb !== (0, vb.h)("inventory") || !gU()) || ((0, jb.B)(bb) ? this.isNavButton(bb) : wU.some((ab => (0, vb.h)(ab) === bb)))
          }
        }
        frame(bb) {
          var ab, Ub, Ab, Mb, Tb;
          const Eb = (0, wa.d)();
          if (!(0, Xb.n)()) return void(this.wasShowing && (this.endInteraction(Eb), this.rehoverRealPointer()));
          this.wasShowing = !0, this.applyFocusRequest(), bb.wokeDevice && this.focusWakePointer(!(null === Eb || void 0 === Eb || !Eb.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, Pb.i)().inventoryNavigation || this.pointer || this.engagePointer();
          const Yb = performance.now();
          this.handleNavigation(bb, Yb), this.handlePanels(bb), this.handlePaging(bb, Yb), this.handleScroll(bb), this.handleButtons(bb, Yb, Eb), this.applyFocusRequest(), this.pointer && this.hoverAtPointer();
          const Bb = this.ensureFocus(),
            eb = this.focusContext(Eb);
          this.ring.show(Bb);
          const Lb = "slot" === eb.kind ? eb.idx : null,
            jb = null !== (ab = null === (Ub = eb.actionElement) || void 0 === Ub ? void 0 : Ub.querySelector(".DoCraftItem")) && void 0 !== ab ? ab : eb.actionElement;
          this.pointer ? (this.hover.sync(Eb, Lb, jb, ((bb, ab) => {
            const Ub = ab ? hU() : 0;
            return {
              clientX: bb.x - Ub,
              clientY: bb.y - Ub
            }
          })(this.pointer, eb.holding), eb.holding), oa.set({
            x: this.pointer.x,
            y: this.pointer.y,
            visible: !0,
            pressed: bb.isHeld((0, vb.h)("inventoryPrimary"))
          })) : Bb && this.focused && this.hover.sync(Eb, Lb, jb, ((bb, ab) => {
            if (!ab) return {
              clientX: bb.left + bb.width - 10,
              clientY: bb.top + bb.height / 2 - 10
            };
            const Ub = hU();
            return {
              clientX: bb.left + bb.width / 2 - Ub,
              clientY: bb.top + bb.height / 2 - Ub
            }
          })(Bb, eb.holding), eb.holding), this.publishState({
            showing: !0,
            kind: eb.kind,
            holding: eb.holding,
            slotHasItem: eb.slotHasItem,
            pressHints: null !== (Ab = null === (Mb = eb.press) || void 0 === Mb ? void 0 : Mb.hints) && void 0 !== Ab ? Ab : null,
            hasCategories: this.hasCategories,
            hasList: !!this.focusTarget && WU(this.focusTarget),
            openButtonCloses: gU(),
            steppingSlots: null === this.pointer,
            quickMoveToHotbar: "slot" === eb.kind && !(null === (Tb = eb.actionElement) || void 0 === Tb || !Tb.closest(".CreativeItemSlots")),
            dropStackHold: this.dropLatch.getHold(),
            hotbarPicking: null !== this.hotbarPick
          })
        }
        focusWakePointer(bb) {
          var ab;
          const Ub = (0, Xb.e)();
          if (!Ub) return;
          this.targets.revalidate();
          const Ab = this.getTargets().targets;
          this.setFocus(null !== (ab = vU(Ub, Ab)) && void 0 !== ab ? ab : bb ? YU(Ub, Ab, (bb => {
            let {
              rect: ab
            } = bb;
            const Ab = Math.max(ab.left - Ub.x, 0, Ub.x - (ab.left + ab.width)),
              Mb = Math.max(ab.top - Ub.y, 0, Ub.y - (ab.top + ab.height));
            return Math.hypot(Ab, Mb) <= Math.min(ab.width, ab.height) / 2
          })) : null, !1), "cursor" === (0, Pb.i)().inventoryNavigation && (this.pointer = {
            x: Ub.x,
            y: Ub.y,
            speedRamp: 0
          })
        }
        rehoverRealPointer() {
          const bb = this.lastRealPointer;
          if (!bb || "keyboardMouse" !== Bb.c.get("activeInputDevice")) return;
          const ab = document.elementFromPoint(bb.x, bb.y);
          ab && Na(null, ab, bb)
        }
        endInteraction(bb) {
          this.wasShowing = !1, this.hotbarPick = null, this.releasePress(), this.dropLatch.reset(), this.scroller.reset();
          for (const ab of this.dpadTimers.values()) ab.reset();
          this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(bb), this.ring.hide(), this.releasePointer(), this.publishState(IU.d)
        }
        getTargets() {
          const bb = this.targets.get();
          return this.hasCategories = bb.hasCategories, bb
        }
        currentTarget() {
          var bb;
          return this.focused && null !== (bb = this.getTargets().byElement.get(this.focused)) && void 0 !== bb ? bb : null
        }
        readFocusRect() {
          const bb = this.focused;
          if (null === bb || void 0 === bb || !bb.isConnected || !bb.closest(XU)) return null;
          const ab = bb.getBoundingClientRect();
          return ab.width > 0 && ab.height > 0 ? {
            left: ab.left,
            top: ab.top,
            width: ab.width,
            height: ab.height
          } : null
        }
        ensureFocus() {
          const bb = this.readFocusRect();
          if (bb || this.pointer) return bb;
          const {
            targets: ab,
            byElement: Ub
          } = this.getTargets();
          let Ab = null,
            Mb = !1;
          if (this.lastRect) Ab = YU(Sa(this.lastRect), ab);
          else {
            var Tb, Eb;
            const bb = ((bb, ab) => {
                const Ub = document.querySelector(".EntireInventoryWrapper [data-pad-inventory-start]");
                return Ub ? VU(bb.filter((bb => Ub.contains(bb.element))), ab) : null
              })(ab, (0, wa.d)()),
              Yb = ab.find((bb => null !== bb.idx && bb.idx === this.reopenSlotIdx)),
              Bb = document.querySelector(KU);
            Mb = null !== bb || void 0 !== Yb, Ab = null !== (Tb = null !== (Eb = null !== bb && void 0 !== bb ? bb : Yb) && void 0 !== Eb ? Eb : Bb && Ub.get(Bb)) && void 0 !== Tb ? Tb : LU(ab)
          }
          return this.setFocus(Ab, Mb), this.lastRect
        }
        setFocus(bb) {
          let ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          bb && (this.focused = bb.element, this.focusTarget = bb, this.panelMemory.set(bb.panel, bb.element), ab && bb.scrollContainer && ((bb, ab) => {
            const Ub = bb.getBoundingClientRect(),
              Ab = Gb(ab),
              Mb = ab.scrollTop;
            return Ub.top < Ab.top ? ab.scrollTop -= Ab.top - Ub.top : Ub.bottom > Ab.bottom && (ab.scrollTop += Ub.bottom - Ab.bottom), ab.scrollTop !== Mb
          })(bb.element, bb.scrollContainer) && this.targets.invalidate(), this.lastRect = this.readFocusRect(), this.followFocusJump())
        }
        followFocusJump() {
          if (this.pointer)
            if ("cursor" === (0, Pb.i)().inventoryNavigation) {
              if (this.lastRect) {
                const bb = Sa(this.lastRect);
                this.pointer = {
                  x: bb.x,
                  y: bb.y,
                  speedRamp: 0
                }
              }
            } else this.releasePointer()
        }
        engagePointer() {
          const bb = this.lastRect ? Sa(this.lastRect) : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          };
          this.pointer = {
            x: bb.x,
            y: bb.y,
            speedRamp: 0
          }
        }
        releasePointer() {
          this.pointer = null, oa.hide()
        }
        hoverAtPointer() {
          var bb;
          const ab = vU(this.pointer, this.getTargets().targets);
          this.focusTarget = ab, (null === ab || void 0 === ab ? void 0 : ab.element) !== this.focused && (this.focused = null !== (bb = null === ab || void 0 === ab ? void 0 : ab.element) && void 0 !== bb ? bb : null, ab && (this.panelMemory.set(ab.panel, ab.element), this.lastRect = this.readFocusRect()))
        }
        moveCursor(bb, ab) {
          const Ub = this.focusTarget,
            Ab = Ub && (0, Pb.i)().cursorMagnetism ? Sa(BU(Ub)) : null;
          this.pointer = ib(this.pointer, {
            stick: bb.leftStick,
            moveDeadzone: (0, Pb.i)().moveDeadzone,
            dpad: ab,
            dtMs: bb.dtMs,
            cursorSpeedPercent: (0, Pb.i)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: {
              overInteractive: !1,
              magnetTarget: Ab
            }
          })
        }
        move(bb) {
          this.targets.revalidate();
          const ab = this.currentTarget();
          ab && this.setFocus(EU(ab, this.getTargets().targets, bb))
        }
        step(bb) {
          const ab = this.pointer;
          if (ab && (this.releasePointer(), !this.focused)) return this.targets.revalidate(), void this.setFocus(((bb, ab, Ub) => {
            var Ab;
            const Mb = {
              key: "",
              rect: {
                left: bb.x,
                top: bb.y,
                width: 0,
                height: 0
              },
              panel: "",
              scrollGroup: null,
              visible: !0,
              clip: null
            };
            return null !== (Ab = EU(Mb, ab, Ub)) && void 0 !== Ab ? Ab : YU(bb, ab)
          })(ab, this.getTargets().targets, bb));
          this.move(bb)
        }
        isNavButton(bb) {
          return !tU.some((ab => (0, vb.h)(ab) === bb)) && !(bb === (0, vb.h)("inventory") && gU())
        }
        handleNavigation(bb, ab) {
          const Ub = (0, Pb.i)().inventoryNavigation,
            Ab = {
              x: 0,
              y: 0
            };
          let Mb = null;
          for (const Bb of jb.u) {
            const Tb = this.isNavButton(Bb) && bb.isHeld(Bb);
            Tb && (Ab.x += oU[Bb].x, Ab.y += oU[Bb].y), this.dpadTimers.get(Bb).update(Tb, ab) && "cursor" !== Ub && (Mb ??= Bb)
          }
          const Tb = this.stickGate.update(bb.leftStick, (0, Pb.i)().moveDeadzone);
          if (Mb && (this.step(Mb), this.stickGate.lock()), "slot" !== Ub) {
            const ab = ((bb, ab, Ub, Ab) => "hybrid" !== bb ? "cursor" === bb : !Ab && (ab || Ub))(Ub, null !== this.pointer, Tb, null !== Mb);
            return ab && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(bb, "cursor" === Ub ? Ab : {
              x: 0,
              y: 0
            }))
          }
          const Eb = (0, jb.i)(bb.leftStick, (0, Pb.i)().moveDeadzone),
            Yb = this.stickRepeat.update(Tb ? (0, jb.Y)(Eb) : null, ab);
          Yb && this.move(Yb)
        }
        applyCategoryPlace() {
          const bb = this.placeAfterCategory;
          if (!bb) return;
          this.placeAfterCategory = null, this.targets.invalidate();
          const ab = YU(Sa(bb.rect), this.getTargets().targets, (ab => ab.scrollGroup === bb.scrollGroup));
          this.setFocus(ab, !1)
        }
        applyFocusRequest() {
          const bb = (0, wa.n)();
          bb && (this.targets.invalidate(), this.setFocus((0, wa.c)(this.getTargets().targets, bb)))
        }
        handlePanels(bb) {
          var ab, Ub, Ab;
          const Mb = bb.wasPressed((0, vb.h)("inventoryPanelPrevious")),
            Tb = bb.wasPressed((0, vb.h)("inventoryPanelNext"));
          if (!Mb && !Tb) return;
          const {
            targets: Eb
          } = this.getTargets(), Yb = (Bb = ((bb, ab) => {
            const Ub = [];
            for (const Mb of bb) Mb.visible && !Ub.includes(Mb.panel) && Ub.push(Mb.panel);
            const Ab = bb => {
              const Ab = ab.indexOf(bb);
              return -1 === Ab ? ab.length + Ub.indexOf(bb) : Ab
            };
            return Ub.sort(((bb, ab) => Ab(bb) - Ab(ab)))
          })(Eb, yU), eb = null !== (ab = null === (Ub = this.focusTarget) || void 0 === Ub ? void 0 : Ub.panel) && void 0 !== ab ? ab : null, Lb = Tb ? 1 : -1, 0 === Bb.length ? null : Bb[bU(null === eb ? -1 : Bb.indexOf(eb), Bb.length, Lb)]);
          var Bb, eb, Lb;
          if (null === Yb) return;
          const Pb = this.panelMemory.get(Yb),
            Xb = Eb.filter((bb => bb.panel === Yb)),
            jb = null !== (Ab = Xb.find((bb => bb.element === Pb && bb.visible))) && void 0 !== Ab ? Ab : VU(Xb, (0, wa.d)());
          this.setFocus(jb)
        }
        handlePaging(bb, ab) {
          const Ub = (0, vb.h)("menuPageUp"),
            Ab = (0, vb.h)("menuPageDown"),
            Mb = this.pageUpTimer.update(bb.isHeld(Ub), ab),
            Tb = this.pageDownTimer.update(bb.isHeld(Ab), ab);
          if (!Mb && !Tb) return;
          const Eb = Tb ? 1 : -1;
          if (!bb.wasPressed(Tb ? Ab : Ub) && this.hasCategories) return;
          if ((bb => {
              const ab = Array.from(document.querySelectorAll(".EntireInventoryWrapper .CreativeCategoryTab"));
              if (0 === ab.length) return !1;
              const Ub = ab.findIndex((bb => bb.classList.contains("Selected"))),
                Ab = ab[bU(Ub, ab.length, bb)];
              return pa(Ab, za(Ab)), !0
            })(Eb)) {
            var Yb, Bb;
            this.targets.invalidate();
            const bb = null !== (Yb = null === (Bb = this.focusTarget) || void 0 === Bb ? void 0 : Bb.scrollGroup) && void 0 !== Yb ? Yb : null,
              ab = this.readFocusRect();
            return void(this.placeAfterCategory = null !== bb && ab && !this.pointer ? {
              rect: ab,
              scrollGroup: bb
            } : null)
          }
          const {
            targets: eb
          } = this.getTargets(), Lb = this.currentTarget(), Pb = Lb && WU(Lb) ? Lb : eb.find((bb => WU(bb) && bb.visible));
          if (!Pb) return;
          const Xb = ((bb, ab, Ub, Ab) => {
            if (null === bb.scrollGroup) return null;
            const Mb = Sa(bb.rect),
              Tb = Mb.x,
              Eb = Mb.y + ("Down" === Ub ? Ab : -Ab);
            let Yb = null,
              Bb = 1 / 0;
            for (const eb of ab) {
              if (eb.scrollGroup !== bb.scrollGroup || eb.key === bb.key) continue;
              const ab = Sa(eb.rect);
              if ("Down" === Ub ? ab.y <= Mb.y : ab.y >= Mb.y) continue;
              const Ab = Math.hypot(ab.x - Tb, ab.y - Eb);
              Ab < Bb && (Yb = eb, Bb = Ab)
            }
            return Yb
          })(Pb, eb, Eb > 0 ? "Down" : "Up", Pb.scrollContainer.clientHeight);
          this.setFocus(null !== Xb && void 0 !== Xb ? Xb : Pb)
        }
        handleScroll(bb) {
          var ab, Ub, Ab, Mb, Tb, Eb;
          if (!this.scroller.isScrolling(bb.rightStick)) return void this.scroller.reset();
          const {
            targets: Yb
          } = this.getTargets(), Bb = this.pointer, eb = !Bb && this.focusTarget && WU(this.focusTarget) ? this.focusTarget.scrollContainer : null, vb = Bb && (null === (ab = Yb.find((bb => bb.clip && eU(bb.clip, Bb)))) || void 0 === ab ? void 0 : ab.scrollContainer), Lb = null !== (Ub = null !== (Ab = null !== (Mb = this.scroller.current()) && void 0 !== Mb ? Mb : vb) && void 0 !== Ab ? Ab : eb) && void 0 !== Ub ? Ub : null === (Tb = Yb.find(WU)) || void 0 === Tb ? void 0 : Tb.scrollContainer;
          if (!Lb || !this.scroller.step(Lb, bb.rightStick, bb.dtMs)) return;
          this.targets.scrolled(Lb);
          const Pb = Bb || (null === (Eb = this.focusTarget) || void 0 === Eb ? void 0 : Eb.scrollContainer) !== Lb ? null : this.readFocusRect();
          if (!Pb) return;
          const Xb = Gb(Lb),
            jb = Sa(Pb);
          if (jb.y < Xb.top || jb.y > Xb.bottom) {
            const bb = this.focusTarget.scrollGroup,
              ab = YU(jb, this.getTargets().targets, (ab => ab.scrollGroup === bb));
            this.setFocus(ab, !1)
          }
        }
        focusContext(bb) {
          const {
            kind: ab,
            idx: Ub
          } = this.focused ? iU(this.focused) : {
            kind: null,
            idx: null
          }, Ab = this.focused ? zU(this.focused) : null, Mb = Ab ? (0, uU.b)(Ab) : null;
          return {
            kind: ab,
            idx: Ub,
            actionElement: Ab,
            press: Mb,
            hasPress: null !== Mb,
            hasBack: !(null === Mb || void 0 === Mb || !Mb.back),
            holding: bb.isHolding(),
            slotHasItem: null !== Ub && bb.hasItemAt(Ub)
          }
        }
        handleButtons(bb, ab, Ub) {
          var Ab, Mb;
          if (!this.activePress || bb.isHeld(this.activePress.button) && (Ab = this.activePress.target, Mb = this.focused, null !== Ab.recipe ? xU(Mb).recipe === Ab.recipe : Mb === Ab.element) || this.releasePress(), this.scrollStickClick.update(bb.rightStick, ab), !this.handleHotbarPick(bb, Ub)) {
            for (const [Ab, Mb] of lU) {
              const Tb = (0, vb.h)(Mb);
              if (!bb.wasPressed(Tb) || "openButton" === Ab && !gU()) continue;
              if ("RS" === Tb && !this.scrollStickClick.allowsClick(ab)) continue;
              const Eb = this.focusContext(Ub),
                Yb = la(Ab, Eb);
              Yb && this.runIntent(Yb, Eb, Tb, Ub)
            }
            this.handleDrop(bb, ab, Ub)
          }
        }
        handleHotbarPick(bb, ab) {
          const Ub = this.hotbarPick;
          if (!Ub) return !1;
          const Ab = bb.wasPressed((0, vb.h)("inventoryPrimary")) || bb.wasPressed((0, vb.h)("inventoryHotbarSwap"));
          if (!Ab && !bb.wasPressed((0, vb.h)("inventoryClose")) && !ab.isHolding()) return !(bb.wasPressed((0, vb.h)("inventory")) && gU());
          const Mb = this.focusTarget;
          Ab && "hotbar" === (null === Mb || void 0 === Mb ? void 0 : Mb.panel) && null !== Mb.idx && Mb.idx !== Ub.idx && (ab.swapWithHotbar(Mb.idx, Ub.idx), this.afterAction()), this.hotbarPick = null;
          const Tb = Ub.element.isConnected ? this.getTargets().byElement.get(Ub.element) : void 0;
          return Tb && this.setFocus(Tb), !0
        }
        startHotbarPick(bb) {
          var ab;
          const {
            targets: Ub,
            byElement: Ab
          } = this.getTargets(), Mb = document.querySelector(KU), Tb = null !== (ab = Mb && Ab.get(Mb)) && void 0 !== ab ? ab : Ub.find((bb => "hotbar" === bb.panel));
          Tb && this.focused && (this.hotbarPick = {
            idx: bb,
            element: this.focused
          }, this.setFocus(Tb))
        }
        focusKey() {
          return this.focused ? Va(this.focused) : null
        }
        handleDrop(bb, ab, Ub) {
          const Ab = (0, vb.h)("inventoryDrop");
          if (bb.wasPressed(Ab)) {
            const bb = (Mb = this.focusContext(Ub)).holding ? {
              kind: "PY"
            } : "slot" === Mb.kind && Mb.slotHasItem && null !== Mb.idx ? {
              kind: "slot",
              idx: Mb.idx
            } : null;
            return void(bb && (this.dropFrom(bb, !1, Ub), this.dropLatch.press(bb, this.focusKey(), ab, kb.c[(0, Pb.i)().tapHoldTime].dropStackMs), this.afterAction()))
          }
          var Mb;
          const Tb = this.dropLatch.update(bb.isHeld(Ab), this.focusKey(), ab);
          Tb && ((bb, ab, Ub) => "PY" === bb.kind ? ab : !ab && Ub(bb.idx))(Tb, Ub.isHolding(), Ub.hasItemAt) && (this.dropFrom(Tb, !0, Ub), this.afterAction())
        }
        dropFrom(bb, ab, Ub) {
          "PY" === bb.kind ? Ub.dropHeld(ab, this.slotPoint()) : Ub.dropSlot(bb.idx, ab)
        }
        slotPoint() {
          return this.pointer ? {
            clientX: this.pointer.x,
            clientY: this.pointer.y
          } : this.lastRect ? (bb => {
            const ab = Sa(bb);
            return {
              clientX: ab.x,
              clientY: ab.y
            }
          })(this.lastRect) : {
            clientX: 0,
            clientY: 0
          }
        }
        runIntent(bb, ab, Ub, Ab) {
          const Mb = ab.idx,
            Tb = ab.actionElement;
          switch (Tb && CU.has(bb) && (0, yb.m)(Tb), bb) {
            case "slotPrimary":
              Ab.primary(Mb, this.slotPoint());
              break;
            case "slotSecondary":
              Ab.secondary(Mb, this.slotPoint());
              break;
            case "slotQuickMove":
              Ab.quickMove(Mb, this.slotPoint());
              break;
            case "hotbarPick":
              this.startHotbarPick(Mb);
              break;
            case "pressPrimary":
            case "pressSecondary":
              this.startPress(ab.press, "pressPrimary" === bb ? "primary" : "secondary", Ub);
              break;
            case "click":
              pa(Tb, za(Tb));
              break;
            case "openKeyboard":
              Da(Tb) && Wa(Tb);
              break;
            case "pressBack":
              ab.press.back();
              break;
            case "cancel":
              Ab.cancel();
              break;
            case "close":
              return this.releasePress(), void Ab.close()
          }
          this.afterAction()
        }
        startPress(bb, ab, Ub) {
          this.releasePress(), bb.press(ab) && (this.activePress = {
            handlers: bb,
            button: Ub,
            target: xU(this.focused)
          })
        }
        releasePress() {
          var bb, ab, Ub;
          null === (bb = this.activePress) || void 0 === bb || null === (ab = (Ub = bb.handlers).release) || void 0 === ab || ab.call(Ub), this.activePress = null
        }
        afterAction() {
          this.targets.invalidate(), this.hover.invalidate()
        }
        publishState(bb) {
          ((bb, ab) => {
            var Ub, Ab, Mb, Tb, Eb, Yb;
            return bb.showing === ab.showing && bb.kind === ab.kind && bb.holding === ab.holding && bb.slotHasItem === ab.slotHasItem && (null === (Ub = bb.pressHints) || void 0 === Ub ? void 0 : Ub.primary) === (null === (Ab = ab.pressHints) || void 0 === Ab ? void 0 : Ab.primary) && (null === (Mb = bb.pressHints) || void 0 === Mb ? void 0 : Mb.secondary) === (null === (Tb = ab.pressHints) || void 0 === Tb ? void 0 : Tb.secondary) && (null === (Eb = bb.pressHints) || void 0 === Eb ? void 0 : Eb.back) === (null === (Yb = ab.pressHints) || void 0 === Yb ? void 0 : Yb.back) && bb.hasCategories === ab.hasCategories && bb.hasList === ab.hasList && bb.openButtonCloses === ab.openButtonCloses && bb.steppingSlots === ab.steppingSlots && bb.hotbarPicking === ab.hotbarPicking && bb.quickMoveToHotbar === ab.quickMoveToHotbar && bb.dropStackHold === ab.dropStackHold
          })(bb, this.state) || (this.state = bb, eb.m.IR(IU.g, bb))
        }
      },
      JU = ["pointermove", "pointerover", "pointerout", "mouseover", "mouseout"];
    var nU = Ub(8258),
      SU = Ub(307),
      bA = Ub(1548),
      aA = Ub(7753);
    const UA = "[data-pad-secondary]",
      AA = bb => bb instanceof HTMLElement && ea(bb) && !va(bb),
      MA = bb => {
        const ab = bb.querySelector(UA);
        if (ab && AA(ab)) return ab;
        for (const Mb of null !== (Ub = null === (Ab = bb.parentElement) || void 0 === Ab ? void 0 : Ab.children) && void 0 !== Ub ? Ub : []) {
          var Ub, Ab;
          if (Mb !== bb && Mb.matches(UA) && AA(Mb)) return Mb
        }
        return null
      },
      TA = (bb, ab, Ub, Ab) => Math.max(0, Math.max(bb, Ub) - Math.min(ab, Ab)),
      EA = (bb, ab, Ub, Ab) => Math.max(0, Math.min(ab, Ab) - Math.max(bb, Ub)),
      YA = (bb, ab, Ub) => {
        const Ab = (bb.left + bb.right) / 2,
          Mb = (bb.top + bb.bottom) / 2,
          Tb = (ab.left + ab.right) / 2,
          Eb = (ab.top + ab.bottom) / 2;
        if ("Left" === Ub || "Right" === Ub) {
          const Yb = "Right" === Ub ? 1 : -1;
          return {
            forwardGap: "Right" === Ub ? ab.left - bb.right : bb.left - ab.right,
            centreForward: (Tb - Ab) * Yb,
            sidewaysGap: TA(bb.top, bb.bottom, ab.top, ab.bottom),
            sidewaysOverlap: EA(bb.top, bb.bottom, ab.top, ab.bottom),
            centreSideways: Math.abs(Eb - Mb),
            startSideways: Math.abs(ab.top - bb.top),
            fromSidewaysSize: bb.bottom - bb.top,
            toSidewaysSize: ab.bottom - ab.top,
            toLength: ab.right - ab.left
          }
        }
        const Yb = "Down" === Ub ? 1 : -1;
        return {
          forwardGap: "Down" === Ub ? ab.top - bb.bottom : bb.top - ab.bottom,
          centreForward: (Eb - Mb) * Yb,
          sidewaysGap: TA(bb.left, bb.right, ab.left, ab.right),
          sidewaysOverlap: EA(bb.left, bb.right, ab.left, ab.right),
          centreSideways: Math.abs(Tb - Ab),
          startSideways: Math.abs(ab.left - bb.left),
          fromSidewaysSize: bb.right - bb.left,
          toSidewaysSize: ab.right - ab.left,
          toLength: ab.bottom - ab.top
        }
      },
      BA = bb => bb.centreForward > .5 && bb.forwardGap >= -bb.toLength / 2,
      eA = bb => {
        const ab = bb.sidewaysOverlap > 0 ? 0 : 2 * bb.fromSidewaysSize,
          Ub = bb.fromSidewaysSize > 1.5 * bb.toSidewaysSize ? bb.startSideways : bb.centreSideways;
        return Math.max(0, bb.forwardGap) + 3 * bb.sidewaysGap + ab + .1 * Ub
      },
      vA = (bb, ab) => EA(bb.top, bb.bottom, ab.top, ab.bottom) > 0 || ab.bottom - ab.top > ab.right - ab.left,
      LA = (bb, ab, Ub, Ab, Mb, Tb) => {
        const Eb = Mb ? XA(bb, ab, Ub, Mb) : new Set,
          Yb = RA(bb, ab, Ub, Eb);
        return Yb < 0 && Eb.size > 0 && Tb ? PA(bb, ab, Ub, Tb) : Ab && Yb >= 0 ? jA(bb, ab, Ub, Ab, Yb, Eb) : Yb
      },
      PA = (bb, ab, Ub, Ab) => {
        const Mb = new Set,
          Tb = RA(bb, ab, "Up", Mb) >= 0,
          Eb = RA(bb, ab, "Down", Mb) >= 0,
          Yb = new Set;
        return ab.forEach(((ab, Ub) => {
          const Mb = ab.top + ab.bottom < bb.top + bb.bottom;
          Ab[Ub] && !(Mb ? Tb : Eb) || Yb.add(Ub)
        })), RA(bb, ab, Ub, Yb)
      },
      XA = (bb, ab, Ub, Ab) => {
        const Mb = new Set;
        return "Left" !== Ub && "Right" !== Ub || ab.forEach(((ab, Ub) => {
          Ab[Ub] && EA(bb.top, bb.bottom, ab.top, ab.bottom) <= 0 && Mb.add(Ub)
        })), Mb
      },
      jA = (bb, ab, Ub, Ab, Mb, Tb) => {
        const Eb = YA(bb, ab[Mb], Ub).forwardGap;
        let Yb = Mb,
          Bb = Ab[Mb],
          eb = 1 / 0;
        return ab.forEach(((ab, vb) => {
          const Lb = Ab[vb];
          if (Tb.has(vb) || Lb < Bb || Lb === Bb && Yb === Mb) return;
          const Pb = YA(bb, ab, Ub);
          if (!BA(Pb) || Pb.forwardGap < 0 || Pb.forwardGap >= Eb) return;
          const Xb = eA(Pb);
          (Lb > Bb || Xb < eb) && (Yb = vb, Bb = Lb, eb = Xb)
        })), Yb
      },
      RA = (bb, ab, Ub, Ab) => {
        let Mb = -1,
          Tb = 1 / 0;
        if (ab.forEach(((ab, Eb) => {
            const Yb = ((bb, ab, Ub) => {
              const Ab = YA(bb, ab, Ub);
              if (!BA(Ab)) return null;
              const Mb = Math.max(0, Ab.forwardGap);
              return Ab.sidewaysOverlap <= 0 && Ab.sidewaysGap > 2 * (Mb + 1) ? null : eA(Ab)
            })(bb, ab, Ub);
            null !== Yb && Yb < Tb && !Ab.has(Eb) && (Tb = Yb, Mb = Eb)
          })), Mb < 0) return -1;
        const Eb = ab[Mb],
          Yb = YA(bb, Eb, Ub).forwardGap;
        let Bb = Yb,
          eb = Mb;
        return ab.forEach(((ab, Tb) => {
          if (Tb === Mb || Ab.has(Tb) || !((bb, ab, Ub) => {
              const Ab = "Left" === Ub || "Right" === Ub,
                Mb = Ab ? EA(bb.top, bb.bottom, ab.top, ab.bottom) : EA(bb.left, bb.right, ab.left, ab.right),
                Tb = Ab ? Math.min(bb.bottom - bb.top, ab.bottom - ab.top) : Math.min(bb.right - bb.left, ab.right - ab.left);
              return Mb > 0 && Mb >= Tb / 2
            })(ab, Eb, Ub)) return;
          const vb = YA(bb, ab, Ub);
          BA(vb) && vb.forwardGap + vb.toLength <= Yb + 1 && vb.forwardGap < Bb && (Bb = vb.forwardGap, eb = Tb)
        })), eb
      },
      kA = (bb, ab) => {
        let Ub = -1,
          Ab = 1 / 0;
        return ab.forEach(((ab, Mb) => {
          const Tb = Math.max(ab.left - bb.x, 0, bb.x - ab.right),
            Eb = Math.max(ab.top - bb.y, 0, bb.y - ab.bottom),
            Yb = Math.hypot(Tb, Eb);
          Yb < Ab && (Ab = Yb, Ub = Mb)
        })), Ub
      },
      yA = (bb, ab) => {
        const Ub = Math.min(bb.bottom - bb.top, ab.bottom - ab.top) / 2;
        return Math.abs(bb.top - ab.top) > Ub ? bb.top - ab.top : bb.left - ab.left
      },
      ZA = bb => {
        let ab = -1;
        for (let Ub = 0; Ub < bb.length; Ub++)(ab < 0 || yA(bb[Ub], bb[ab]) < 0) && (ab = Ub);
        return ab
      };
    var DA = Ub(1597),
      zA = Ub(8264),
      xA = Ub(8272);
    const iA = bb => {
        if ("death" !== bb || "inGame" !== Bb.c.get("gameState") || "off" === (0, Pb.i)().quickChat || null === (0, DA.b)()) return !1;
        const ab = (0, vb.h)("chat");
        return ab !== (0, vb.h)("menuConfirm") && ab !== (0, vb.h)("menuBack")
      },
      fA = new zA.c;
    var mA = Ub(4011),
      pA = Ub(8280);
    const NA = bb => {
        let ab = null;
        for (const Ub of bb.querySelectorAll("[data-pad-tabs]")) ea(Ub) && (!ab || Number(Ub.dataset.padTabs) < Number(ab.dataset.padTabs)) && (ab = Ub);
        return ab
      },
      WA = (bb, ab, Ub, Ab) => {
        bb.focusWhenFound((() => {
          const Mb = bb.pickInitial(ab);
          if (Mb && !Ub.has(Mb) && (null === Ab || void 0 === Ab || !Ab.contains(Mb))) return Mb;
          const Tb = ((bb, ab) => {
              const Ub = ab => bb.getEnabledCandidates(ab).filter((bb => !bb.closest("[data-pad-tabs]")));
              for (const Ab of Za(ab)) {
                const bb = Ub(Ab);
                if (bb.length > 0) return bb
              }
              return Ub(ab)
            })(bb, ab).filter((bb => !Ub.has(bb))),
            Eb = ZA(Tb.map((bb => bb.getBoundingClientRect())));
          return Eb >= 0 ? Tb[Eb] : null
        }), 3e3)
      },
      HA = (bb, ab, Ub, Ab) => {
        var Mb;
        const Tb = ((bb, ab) => {
          if (0 === bb.length) return null;
          const Ub = bb.findIndex((bb => "true" === bb.dataset.padSelected));
          return Ub < 0 ? ab > 0 ? bb[0] : bb[bb.length - 1] : bb[(Ub + ab + bb.length) % bb.length]
        })([...Ub.querySelectorAll("[data-pad-tab]")].filter((bb => ea(bb) && !va(bb))), Ab);
        if (!Tb) return;
        const Eb = null !== (Mb = null === bb || void 0 === bb ? void 0 : bb.getFocused()) && void 0 !== Mb ? Mb : null,
          Yb = !(null === Eb || void 0 === Eb || !Eb.isConnected) && Ub.contains(Eb),
          Bb = bb && !Yb ? new Set(bb.getEnabledCandidates(ab)) : null;
        Ha(Tb), bb && (Bb ? WA(bb, ab, Bb, Ub) : bb.setFocus(Tb, {
          byUser: !0
        }))
      },
      IA = bb => {
        var ab;
        const Ub = Gb(null !== (ab = Wb(bb, "x")) && void 0 !== ab ? ab : bb),
          Ab = Xa(bb).filter((bb => !va(bb))),
          Mb = Ab.filter((bb => Qb(bb.getBoundingClientRect(), Ub)));
        return (Mb.length > 0 ? Mb : Ab).sort(((bb, ab) => yA(bb.getBoundingClientRect(), ab.getBoundingClientRect())))
      },
      dA = (bb, ab, Ub) => {
        const Ab = [...ab.querySelectorAll("[data-pad-row]")].filter(ea),
          Mb = bb.getFocused(),
          Tb = Mb ? Ab.findIndex((bb => bb.contains(Mb))) : -1;
        let Eb = 0,
          Yb = Ub > 0 ? 0 : Ab.length - 1;
        if (Tb >= 0 && Mb) Eb = Math.max(0, IA(Ab[Tb]).indexOf(Mb)), Yb = Tb + Ub;
        else if (Mb) {
          const bb = Mb.getBoundingClientRect(),
            ab = Ab.map((ab => {
              const Ab = ab.getBoundingClientRect();
              return Ub > 0 ? Ab.top >= bb.top : Ab.bottom <= bb.bottom
            }));
          Yb = Ub > 0 ? ab.indexOf(!0) : ab.lastIndexOf(!0)
        }
        for (let Bb = Yb; Bb >= 0 && Bb < Ab.length; Bb += Ub) {
          const ab = IA(Ab[Bb]);
          if (ab.length > 0) return void bb.setFocus(ab[Math.min(Eb, ab.length - 1)], {
            byUser: !0
          })
        }
      },
      FA = (bb, ab, Ub) => {
        var Ab, Mb;
        const Tb = null !== (Ab = null === bb || void 0 === bb ? void 0 : bb.getFocused()) && void 0 !== Ab ? Ab : null,
          Eb = null !== Tb && void 0 !== Tb && Tb.closest("[data-pad-row]") ? "x" : "y",
          Yb = null !== (Mb = Tb ? Wb(Tb, Eb, ab) : null) && void 0 !== Mb ? Mb : Ib(ab, Eb);
        if (!Yb) return;
        const Bb = Tb ? za(Tb) : null;
        if (hb(Yb, Eb, Ub * ("y" === Eb ? Yb.clientHeight : Yb.clientWidth) * .85), !bb || !Bb) return;
        const eb = Gb(Yb),
          vb = bb.getEnabledCandidates(ab).filter((bb => Yb.contains(bb) && Qb(bb.getBoundingClientRect(), eb))),
          Lb = kA(Bb, vb.map((bb => bb.getBoundingClientRect())));
        Lb >= 0 && bb.setFocus(vb[Lb], {
          scroll: !1,
          byUser: !0
        })
      };
    let hA = null;
    const GA = (bb, ab) => {
        var Ub, Ab;
        const Mb = ab.querySelector("[data-pad-friends-column]"),
          Tb = bb.getFocused();
        if (!Mb || !Tb || !Mb.contains(Tb)) return !1;
        const Eb = bb.getEnabledCandidates(ab).filter((bb => !Mb.contains(bb))),
          Yb = kA(za(Tb), Eb.map((bb => bb.getBoundingClientRect()))),
          Bb = null === (Ub = hA) || void 0 === Ub ? void 0 : Ub.deref();
        return bb.setFocus(null !== Bb && void 0 !== Bb && Bb.isConnected ? Bb : null !== (Ab = Eb[Yb]) && void 0 !== Ab ? Ab : null, {
          byUser: !0
        }), !0
      },
      QA = bb => {
        const ab = (0, vb.h)(bb);
        return (0, jb.B)(ab) || aA.n.some((bb => (0, vb.h)(bb) === ab)) ? null : ab
      },
      qA = (bb, ab) => {
        const Ub = QA(ab);
        return null !== Ub && bb.wasPressed(Ub)
      },
      uA = function(bb, ab, Ub) {
        let Ab = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Mb = (bb => {
            var ab, Ub;
            return null !== (ab = null === (Ub = NA(bb)) || void 0 === Ub ? void 0 : Ub.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== ab ? ab : null
          })(ab),
          Tb = bb && Mb ? new Set(bb.getEnabledCandidates(ab)) : null;
        (0, nU.d)(), Ub === SU.j.SETTINGS && (0, bA.j)(Bb.c.get("openEverythingMenuName")) ? Bb.c.set({
          openEverythingMenuName: Ub
        }) : (0, bA.q)(new Event("padMenuShortcut"), Ub, Ab), bb && Tb && Mb && WA(bb, ab, Tb, Mb.closest("[data-pad-tabs]"))
      },
      rA = bb => null !== bb.closest(".Dropdown-root") || null !== bb.querySelector(".Dropdown-root.is-open"),
      KA = bb => null !== (0, pA.d)() && "popup" !== bb.layer.kind && !NA(bb.root) && !rA(bb.root),
      oA = (0, Rb.c)(jb.Q),
      lA = (0, Rb.c)(jb.Q),
      tA = (bb, ab, Ub) => {
        if (((bb, ab) => {
            const Ub = (0, vb.h)("chat");
            return iA(ab) && bb.isHeld(Ub) ? "hold" === fA.update(bb.wasPressed(Ub), bb.isHeld(Ub), performance.now(), kb.c[(0, Pb.i)().tapHoldTime].wheelMs) && (Lb.c.consumeButton(Ub), eb.m.IR(xA.o), !0) : (fA.release(), !1)
          })(ab, Ub.layer.kind)) return !0;
        const Ab = Ub.root;
        for (const [Eb, Yb] of [
            ["menuTabPrevious", -1],
            ["menuTabNext", 1]
          ])
          if (ab.wasPressed((0, vb.h)(Eb))) {
            const ab = rA(Ab) ? null : NA(Ab);
            if (ab) HA(bb, Ab, ab, Yb);
            else if (KA(Ub)) {
              var Mb;
              const ab = bb ? new Set(bb.getEnabledCandidates(Ab)) : null;
              null !== (Mb = (0, pA.d)()) && void 0 !== Mb && Mb(Yb) && bb && ab && WA(bb, Ab, ab, null)
            } else bb && dA(bb, Ab, Yb);
            return !0
          } for (const [Eb, Yb, Bb] of [
            ["menuPageUp", -1, oA],
            ["menuPageDown", 1, lA]
          ]) {
          const Ub = (0, vb.h)(Eb);
          if (ab.wasPressed(Ub) && Bb.reset(), Bb.update(ab.isHeld(Ub), performance.now())) return FA(bb, Ab, Yb), !0
        }
        const Tb = "popup" === Ub.layer.kind;
        return qA(ab, "pause") ? (Tb || (0, bA.p)() && "menu" !== Ub.layer.kind || uA(bb, Ab, (0, bA.p)() ? SU.j.SETTINGS : (0, mA.d)()), !0) : !!qA(ab, "leaderboard") && ("home" === Ub.layer.kind ? (bb => {
          const ab = [...bb.querySelectorAll("[data-pad-notifications]")].find(ea);
          ab && Ha(ab)
        })(Ab) : Tb || uA(bb, Ab, SU.j.LOBBY_LEADERBOARD, "inGame" === Bb.c.get("gameState")), !0)
      },
      wA = (bb, ab, Ub) => {
        if (tA(bb, ab, Ub)) return !0;
        const Ab = "home" === Ub.layer.kind;
        if (ab.wasPressed((0, vb.h)("menuSecondary"))) {
          const ab = bb.getFocused(),
            Mb = ab ? MA(ab) : null;
          if (Mb) return Ha(Mb), !0;
          if (Ab) {
            const ab = Ub.root.querySelector("[data-pad-search] input");
            return ab && ya(ab, Ub.root) ? (bb.setFocus(ab, {
              byUser: !0
            }), Ha(ab)) : Bb.c.set({
              searchOpen: !0
            }), !0
          }
        }
        return !(!Ab || !qA(ab, "inventory")) && (((bb, ab) => {
          var Ub, Ab;
          const Mb = ab.querySelector("[data-pad-friends-column]");
          if (!Mb || !ea(Mb)) return void(0, bA.q)(new Event("padMenuShortcut"), SU.j.SOCIAL);
          if (GA(bb, ab)) return;
          const Tb = null !== (Ub = null === (Ab = Mb.querySelector("[data-pad-friends-start]")) || void 0 === Ab ? void 0 : Ab.getBoundingClientRect().top) && void 0 !== Ub ? Ub : -1 / 0,
            Eb = bb.getEnabledCandidates(Mb),
            Yb = Eb.filter((bb => bb.getBoundingClientRect().top >= Tb)),
            Bb = Yb.length > 0 ? Yb : Eb,
            eb = ZA(Bb.map((bb => bb.getBoundingClientRect())));
          bb.setFocus(eb >= 0 ? Bb[eb] : null, {
            byUser: !0
          })
        })(bb, Ub.root), !0)
      },
      sA = bb => {
        var ab, Ub, Ab;
        const Mb = ra(bb);
        if (null !== Mb) return Mb;
        const Tb = (null !== (ab = null !== (Ub = null !== (Ab = bb.getAttribute("aria-label")) && void 0 !== Ab ? Ab : bb.getAttribute("title")) && void 0 !== Ub ? Ub : bb.textContent) && void 0 !== ab ? ab : "").replace(/\s+/g, " ").trim();
        return Tb ? `${bb.tagName}:${Tb.slice(0,100)}` : null
      };
    class gA {
      constructor() {
        this.remembered = new Map, this.history = []
      }
      enter(bb) {
        const ab = this.history.indexOf(bb);
        if (ab >= 0) {
          for (const bb of this.history.splice(ab + 1)) this.remembered.delete(bb);
          return !0
        }
        return this.remembered.delete(bb), this.history.push(bb), this.history.length > 32 && this.forget(this.history[0]), !1
      }
      forget(bb) {
        this.remembered.delete(bb);
        const ab = this.history.indexOf(bb);
        ab >= 0 && this.history.splice(ab, 1)
      }
      remember(bb, ab, Ub, Ab) {
        const Mb = sA(ab),
          Tb = ra(ab),
          Eb = null !== Tb && ((bb, ab) => {
            let Ub = 0;
            for (const Ab of bb.querySelectorAll("[data-pad-key], [href]"))
              if ((Ab.getAttribute("data-pad-key") === ab || Ab.getAttribute("href") === ab) && (Ub++, Ub > 1)) return !0;
            return !1
          })(Ub, Tb) ? Math.max(0, this.twins(Ab(), Tb).indexOf(ab)) : 0;
        this.remembered.set(bb, {
          element: new WeakRef(ab),
          identity: Mb,
          ordinal: Eb
        })
      }
      has(bb) {
        return this.remembered.has(bb)
      }
      recall(bb, ab) {
        var Ub, Ab;
        const Mb = this.remembered.get(bb);
        if (!Mb) return null;
        const Tb = Mb.element.deref();
        if (Tb && ab.includes(Tb)) return Tb;
        if (null === Mb.identity) return null;
        const Eb = this.twins(ab, Mb.identity);
        return null !== (Ub = null !== (Ab = Eb[Mb.ordinal]) && void 0 !== Ab ? Ab : Eb[0]) && void 0 !== Ub ? Ub : null
      }
      twins(bb, ab) {
        return bb.filter((bb => sA(bb) === ab))
      }
    }
    var CA = Ub(1213);
    const VA = bb => {
        const ab = [];
        let Ub = bb;
        for (; Ub && Ub !== document.body;) {
          const bb = getComputedStyle(Ub).zIndex;
          "auto" !== bb && ab.push(Number(bb) || 0), Ub = Ub.parentElement
        }
        return ab.reverse()
      },
      OA = (bb, ab) => {
        const Ub = ((bb, ab) => {
          const Ub = Math.max(bb.length, ab.length);
          for (let Tb = 0; Tb < Ub; Tb++) {
            var Ab, Mb;
            const Ub = (null !== (Ab = bb[Tb]) && void 0 !== Ab ? Ab : 0) - (null !== (Mb = ab[Tb]) && void 0 !== Mb ? Mb : 0);
            if (0 !== Ub) return Ub
          }
          return 0
        })(VA(bb), VA(ab));
        if (0 !== Ub) return Ub > 0;
        if (bb.contains(ab)) return !1;
        if (ab.contains(bb)) return !0;
        const Ab = bb.compareDocumentPosition(ab);
        return !!(Ab & Node.DOCUMENT_POSITION_PRECEDING) || !(Ab & Node.DOCUMENT_POSITION_FOLLOWING) && null
      },
      cA = (bb, ab) => {
        var Ub;
        return null !== (Ub = OA(bb.root, ab.root)) && void 0 !== Ub ? Ub : bb.order > ab.order
      },
      JA = (bb, ab) => ab.some((ab => !ab.contains(bb) && !bb.contains(ab) && !0 === OA(ab, bb)));
    let nA = null,
      SA = null,
      bM = -1;
    const aM = () => {
        var bb;
        const ab = null === (bb = document.timeline) || void 0 === bb ? void 0 : bb.currentTime,
          Ub = "number" === typeof ab ? ab : null;
        if (null !== Ub && Ub === SA && bM === (0, CA.e)()) return nA;
        let Ab = null;
        const Mb = [],
          Tb = [...document.querySelectorAll("[data-pad-covers]")].filter(ea);
        for (const Eb of (0, CA.g)()) {
          const bb = Eb.getRoot(),
            ab = !!bb && ea(bb) && !JA(bb, Tb);
          if (Eb.shown && !ab && Mb.push(Eb), Eb.shown = ab, !bb || !ab) continue;
          const Ub = {
            layer: Eb,
            root: bb,
            order: Eb.order
          };
          Ab && !cA(Ub, Ab) || (Ab = Ub)
        }
        nA = Ab, SA = Ub, bM = (0, CA.e)();
        for (const Eb of Mb)(0, CA.i)(Eb);
        return nA
      },
      UM = () => {
        const bb = aM();
        return !(null === bb || void 0 === bb || !bb.layer.close) && (bb.layer.close(), SA = null, !0)
      },
      AM = () => {
        var bb, ab;
        return null !== (bb = null === (ab = aM()) || void 0 === ab ? void 0 : ab.root) && void 0 !== bb ? bb : null
      },
      MM = bb => bb ? {
        ...bb,
        root: AM()
      } : null;
    let TM = null,
      EM = null,
      YM = (0, Pb.i)().menuNavigation,
      BM = null;
    const eM = new xb;
    let vM = null;
    eb.m.subscribe(Pb.f, (() => {
      const bb = (0, Pb.i)().menuNavigation;
      bb !== YM && (YM = bb, TM = null, EM = null)
    }));
    const LM = () => {
        var bb;
        return null !== (bb = TM) && void 0 !== bb ? bb : (0, Pb.i)().menuNavigation
      },
      PM = bb => {
        if (kM()) {
          if (BM = MM(bb), "hybrid" === LM()) return eM.lock(), void(EM = EM ? null : AM());
          TM = "focus" === LM() ? "cursor" : "focus"
        }
      },
      XM = () => {
        const bb = BM;
        return BM = null, bb
      };
    let jM = {
      root: null,
      firstSeenMs: -1 / 0,
      atMs: -1 / 0,
      has: !1
    };
    const RM = function(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const Ub = jM.root === bb,
          Ab = Ub ? jM.firstSeenMs : ab,
          Mb = jM.has || ab - Ab > 1e3;
        return (!Ub || !Mb || ab - jM.atMs > 250) && (jM = {
          root: bb,
          firstSeenMs: Ab,
          atMs: ab,
          has: Ra(bb)
        }), jM.has
      },
      kM = () => {
        const bb = AM();
        return null !== bb && RM(bb)
      },
      yM = () => {
        const bb = aM();
        return EM && (null === bb || void 0 === bb ? void 0 : bb.root) !== EM && (EM = null), (bb => {
          let {
            mode: ab,
            hasLayer: Ub,
            hasCandidates: Ab,
            hybridCursorEngaged: Mb
          } = bb;
          return Ub ? "cursor" !== ab && Ab() ? "hybrid" === ab && Mb ? "cursor" : "focus" : "cursor" : null
        })({
          mode: LM(),
          hasLayer: null !== bb,
          hasCandidates: () => null !== bb && RM(bb.root),
          hybridCursorEngaged: null !== EM
        })
      },
      ZM = () => "hybrid" === LM() && kM(),
      DM = "pad-focused";
    var zM = Ub(4231),
      xM = Ub(4697);
    const iM = "[data-pad-destructive]",
      fM = `${iM}, [data-pad-back]`,
      mM = bb => ({
        rect: bb.getBoundingClientRect(),
        destructive: bb.matches(iM),
        closes: null !== bb.closest("[data-pad-close-button]"),
        unavailable: bb.matches("[data-pad-unavailable]")
      }),
      pM = bb => {
        let {
          destructive: ab,
          closes: Ub,
          unavailable: Ab
        } = bb;
        return ab ? Ub ? 2 : 3 : Ab ? 1 : 0
      },
      NM = bb => {
        let ab = -1;
        for (let Ub = 0; Ub < bb.length; Ub++) {
          if (ab < 0) {
            ab = Ub;
            continue
          }
          const Ab = bb[Ub],
            Mb = bb[ab];
          pM(Ab) === pM(Mb) ? yA(Ab.rect, Mb.rect) < 0 && (ab = Ub) : pM(Ab) < pM(Mb) && (ab = Ub)
        }
        return ab
      },
      WM = "[data-pad-tabs]",
      HM = "[data-pad-tab]",
      IM = (bb, ab) => {
        const Ub = bb.querySelector(`${HM}[data-pad-selected='true']`);
        return Ub && ab.includes(Ub) ? Ub : null
      },
      dM = (bb, ab) => {
        let Ub = ab;
        for (let Ab = ab.parentElement; Ab && !Ab.contains(bb); Ab = Ab.parentElement) Ub = Ab;
        return Ub
      };
    class FM {
      constructor() {
        this.contentReturn = null
      }
      redirect(bb, ab, Ub, Ab) {
        var Mb, Tb;
        const Eb = bb.closest(WM),
          Yb = ab.closest(WM);
        var Bb;
        if (Yb && Yb !== Eb) return Eb || (this.contentReturn = new WeakRef(bb)), null !== (Bb = IM(Yb, Ub)) && void 0 !== Bb ? Bb : ab;
        if (!Eb || Yb) return ab;
        const eb = dM(bb, ab),
          vb = null === (Mb = this.contentReturn) || void 0 === Mb ? void 0 : Mb.deref();
        return vb && eb.contains(vb) && Ub.includes(vb) ? vb : null !== (Tb = this.pickRegionStart(eb, Wb(ab, "y", Ab), Ub)) && void 0 !== Tb ? Tb : ab
      }
      findTabContent(bb, ab, Ub) {
        const Ab = bb.closest(WM);
        if (!Ab || !bb.matches(HM) || Ab.contains(ab)) return null;
        const Mb = ab.closest(WM);
        if (Mb && Number(Mb.dataset.padTabs) <= Number(Ab.dataset.padTabs)) return null;
        const Tb = dM(bb, ab);
        return Ub.some((bb => Tb.contains(bb) && !bb.closest(fM))) || !ab.closest(fM) ? Tb : null
      }
      pickContentStart(bb, ab, Ub) {
        return this.contentReturn = null, this.pickRegionStart(bb, Wb(bb, "y", Ub), ab)
      }
      pickReplacedContentStart(bb, ab, Ub, Ab) {
        if (!ab.contains(bb)) return null;
        const Mb = dM(ab, bb),
          Tb = Ub.filter((bb => ab.contains(bb) && !Mb.contains(bb) && !bb.closest(fM)));
        return 0 === Tb.length ? null : (this.contentReturn = null, this.pickRegionStart(ab, Wb(Tb[0], "y", Ab), Tb))
      }
      backToStrip(bb, ab, Ub) {
        if (bb.closest(WM)) return null;
        const Ab = NA(Ub);
        for (const Mb of Ub.querySelectorAll(WM)) {
          if (Number(Mb.dataset.padTabs) <= 1 || Mb === Ab) continue;
          const Tb = IM(Mb, ab),
            Eb = Tb ? dM(bb, Mb).parentElement : null;
          if (Tb && Eb && Eb !== Ub && Ub.contains(Eb)) return this.contentReturn = new WeakRef(bb), Tb
        }
        return null
      }
      pickRegionStart(bb, ab, Ub) {
        const Ab = Gb(ab),
          Mb = bb => {
            const ab = Ub.filter((ab => bb.contains(ab) && !ab.closest(WM) && Qb(ab.getBoundingClientRect(), Ab))),
              Mb = NM(ab.map(mM));
            return Mb >= 0 ? ab[Mb] : null
          };
        for (const Tb of Za(bb)) {
          const bb = Mb(Tb);
          if (bb) return bb
        }
        for (const Tb of bb.querySelectorAll(WM)) {
          const bb = IM(Tb, Ub);
          if (bb) return bb
        }
        return Mb(bb)
      }
    }
    const hM = "[data-pad-default-focus], .Dropdown-option.is-selected",
      GM = ".Dropdown-root.is-open > .Dropdown-menu",
      QM = "[data-pad-no-step-in]",
      qM = "[data-pad-tabs]",
      uM = "[data-pad-press-area]",
      rM = bb => {
        let ab = bb;
        for (let Ub = 0; ab && Ub <= 4; Ub++, ab = ab.parentElement) {
          const Ub = ab.querySelector(".CircleInfo");
          if (Ub) return ab === bb || ab.querySelectorAll(Ya).length <= 1 ? Ub : null;
          if (ab !== bb && ab.querySelectorAll(Ya).length > 1) return null
        }
        return null
      },
      KM = (bb, ab, Ub) => {
        Na(bb, ab, Ub);
        const Ab = null !== bb && void 0 !== bb && bb.isConnected ? rM(bb) : null,
          Mb = rM(ab);
        Ab !== Mb && Na(Ab, Mb, Mb ? za(Mb) : Ub, {
          leaveBelow: bb,
          enterBelow: ab
        })
      },
      oM = bb => bb.getBoundingClientRect(),
      lM = (bb, ab, Ub) => {
        const Ab = new Set(Ub);
        for (let Mb = bb; Mb; Mb = Mb === ab ? null : Mb.parentElement)
          if (Ab.has(Mb)) return Mb;
        return null
      },
      tM = (bb, ab) => !bb.root || bb.root === ab || ab.matches(GM) && bb.root.contains(ab);
    const wM = new class {
      constructor() {
        this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new gA, this.tabStripNav = new FM, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepeatKey = null, this.confirmRepeated = !1, this.confirmRepeat = (0, Rb.c)(jb.o), this.dpadRepeats = new Map(jb.u.map((bb => [bb, (0, Rb.c)(jb.x)]))), this.stickRepeat = new jb.b((0, Rb.c)(jb.X)), this.lastRefocusCheckMs = -1 / 0, this.enteredLayerAtMs = 0, this.lastFocusedCentre = null, this.lastActivatedKey = null, this.lastActivated = null, this.lastActivatedAtMs = -1 / 0, this.pendingFocus = null, this.tabOpenWait = null, this.retryMove = null, this.scrollRemainder = {
          x: 0,
          y: 0
        }, this.wasActive = !1, this.layerKind = null, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.listeners = new Set, this.dropdownLayers = new WeakMap, this.dropdownLayerCounter = 0
      }
      install() {
        const bb = Lb.c.register({
            name: "focus",
            isActive: () => (0, Xb.n)() && "focus" === yM(),
            onFrame: bb => {
              this.onFrame(bb)
            },
            onDeactivate: () => {
              this.deactivate()
            },
            wakePressActs: bb => (0, Lb.d)(bb) || bb === (0, vb.h)("menuConfirm") && Qa((0, Xb.e)())
          }),
          ab = (0, CA.l)((bb => {
            const ab = (0, CA.o)(bb);
            null === bb.memoryKey && this.memory.forget(ab), ab === this.layerKey && (this.layerKey = null)
          }));
        let Ub = -1 / 0;
        const Ab = Eb.g.onFrame((bb => {
            (0, Xb.n)() || bb.timestampMs - Ub < 100 || (Ub = bb.timestampMs, aM())
          })),
          Mb = bb => {
            bb.isTrusted && bb.target instanceof Element && Eb.g.getActivePad() && this.noteChosenStop(bb.target)
          };
        return document.addEventListener("click", Mb, !0), () => {
          bb(), ab(), Ab(), document.removeEventListener("click", Mb, !0), this.deactivate()
        }
      }
      noteChosenStop(bb) {
        var ab, Ub;
        const Ab = aM();
        if (!Ab || !Ab.root.contains(bb)) return;
        const Mb = null !== (ab = null === (Ub = bb.closest(".Dropdown-root")) || void 0 === Ub ? void 0 : Ub.querySelector(".Dropdown-control")) && void 0 !== ab ? ab : bb,
          Tb = lM(Mb, Ab.root, this.getEnabledCandidates(Ab.root));
        if (!Tb) return;
        const Eb = (0, CA.o)(Ab.layer);
        Eb === this.layerKey && Ab.root === this.layerRoot || this.beginLayer(Ab, Eb), this.wasActive ? this.setFocus(Tb, {
          scroll: !1,
          byUser: !0
        }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = Tb, this.lastFocusedCentre = za(Tb), this.rememberFocus(Tb), this.notify())
      }
      getFocused() {
        return this.focused
      }
      isActive() {
        return this.wasActive
      }
      onChange(bb) {
        return this.listeners.add(bb), () => {
          this.listeners.delete(bb)
        }
      }
      notify() {
        for (const bb of this.listeners) bb()
      }
      deactivate() {
        var bb;
        if (this.wasActive) {
          this.wasActive = !1, this.layerKind = null, this.confirmPressedOn = null, this.retryMove = null, this.pendingFocus = null;
          for (const bb of this.dpadRepeats.values()) bb.reset();
          this.stickRepeat.reset(), null !== (bb = this.focused) && void 0 !== bb && bb.isConnected && KM(this.focused, null, za(this.focused)), this.notify()
        }
      }
      setFocus(bb) {
        var ab;
        let {
          scroll: Ub = !0,
          byUser: Ab = !1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (Ab && (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1), bb === this.focused) return;
        const Mb = null !== (ab = this.focused) && void 0 !== ab && ab.isConnected ? this.focused : null;
        if (this.focused = bb, bb) {
          Ub && (bb.classList.add(DM), bb.scrollIntoView({
            block: "nearest",
            inline: "nearest",
            behavior: "instant"
          })), Ab && ((bb, ab) => {
            const Ub = ab.closest("[data-pad-friends-column]");
            Ub && bb && !Ub.contains(bb) && (hA = new WeakRef(bb))
          })(Mb, bb);
          const ab = za(bb);
          this.lastFocusedCentre = ab, this.movedInLayer && this.rememberFocus(bb), KM(Mb, bb, ab), "false" === bb.getAttribute("aria-pressed") && bb.closest("[data-pad-select-on-focus]") && Ha(bb)
        } else Mb && KM(Mb, null, za(Mb));
        this.notify()
      }
      rememberFocus(bb) {
        const ab = this.layerRoot;
        this.layerKey && ab && this.memory.remember(this.layerKey, bb, ab, (() => this.getEnabledCandidates(ab)))
      }
      noteCursorActivation(bb) {
        const ab = aM();
        if (!ab || !ab.root.contains(bb)) return;
        const Ub = this.getEnabledCandidates(ab.root),
          Ab = new Set(Ub);
        let Mb = bb;
        for (; Mb && !Ab.has(Mb);) Mb = Mb === ab.root ? null : Mb.parentElement;
        if (!(Mb instanceof HTMLElement)) return;
        const Tb = (0, CA.o)(ab.layer);
        this.memory.enter(Tb), this.memory.remember(Tb, Mb, ab.root, (() => Ub))
      }
      notePageEnteredByCursor(bb) {
        return this.memory.enter(bb)
      }
      recallStop(bb, ab) {
        return this.findRemembered(bb, ab)
      }
      focusWhenFound(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.pendingFocus = {
          find: bb,
          untilMs: performance.now() + ab,
          holdWhile: Ub
        }
      }
      getEnabledCandidates(bb) {
        return Xa(bb).filter((bb => !va(bb)))
      }
      onFrame(bb) {
        var ab;
        const Ub = aM();
        if (!Ub) return;
        const Ab = null !== (ab = this.findOpenDropdown(Ub)) && void 0 !== ab ? ab : Ub,
          Mb = performance.now(),
          Tb = (0, CA.o)(Ab.layer);
        if (Tb !== this.layerKey || Ab.root !== this.layerRoot) {
          const ab = this.focused;
          if (null !== this.layerKey && Ab.root === this.layerRoot && ab && ya(ab, Ab.root)) this.continueLayer(Tb, ab), this.wasActive || this.resume(Ab.root, Mb);
          else {
            const ab = !this.wasActive && !bb.wokeDevice,
              Eb = "death" === this.layerKind || ab,
              Yb = this.enterLayer(Ab, Tb);
            "popup" !== Ab.layer.kind || Ab !== Ub || Yb ? "menu" === Ab.layer.kind && Eb && "inGame" === Bb.c.get("gameState") && !(0, nU.e)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = Mb + zM.e) : (this.pressGuardExtends = ab, this.pressGuardUntilMs = Mb + (ab ? zM.e : Eb ? 500 : 250))
          }
        } else this.wasActive || this.resume(Ab.root, Mb);
        if (this.layerKind = Ab.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), bb.wokeDevice && this.focusPointedStop(Ab.root), this.validateFocus(Ab, Mb), Mb < this.pressGuardUntilMs && this.pressGuardExtends && (bb.wasPressed((0, vb.h)("menuConfirm")) || bb.wasPressed((0, vb.h)("menuBack"))) && (this.pressGuardUntilMs = Mb + zM.e), Mb >= this.pressGuardUntilMs && this.handleButtons(bb, Ab)) return;
        const Eb = "hybrid" === LM();
        if (Eb && (bb => {
            const ab = AM();
            return ab !== vM && (vM = ab, eM.lock()), eM.update(bb, (0, Pb.i)().moveDeadzone)
          })(bb.leftStick)) return Yb = this.getHandoff(), BM = MM(Yb), EM = AM(), void Lb.c.handOffHeldInput();
        var Yb;
        this.handleDirections(bb, Ab, Mb, !Eb), this.handleScroll(bb, Ab)
      }
      findOpenDropdown(bb) {
        const ab = bb.root.querySelector(GM);
        if (!ab || !ea(ab)) return null;
        let Ub = this.dropdownLayers.get(ab);
        return Ub || (this.dropdownLayerCounter++, Ub = {
          id: `dropdown-${this.dropdownLayerCounter}`,
          kind: bb.layer.kind,
          getRoot: () => ab,
          close: () => {
            Fa(ab)
          },
          memoryKey: null
        }, this.dropdownLayers.set(ab, Ub)), {
          layer: Ub,
          root: ab,
          order: bb.order
        }
      }
      focusPointedStop(bb) {
        const ab = (0, Xb.e)(),
          Ub = ab ? document.elementFromPoint(ab.x, ab.y) : null;
        if (!Ub || !bb.contains(Ub)) return;
        const Ab = lM(Ub, bb, this.getEnabledCandidates(bb));
        Ab && this.setFocus(Ab, {
          scroll: !1,
          byUser: !0
        })
      }
      enterLayer(bb, ab) {
        const Ub = this.beginLayer(bb, ab),
          Ab = XM();
        return Ab && tM(Ab, bb.root) ? (this.takeOver(bb.root, Ab, this.enteredLayerAtMs), Ub) : (this.restoreLayerFocus(bb.root, Ub), Ub)
      }
      beginLayer(bb, ab) {
        return this.layerKey = ab, this.layerRoot = bb.root, this.lastActivatedKey = null, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoreOnFocusLoss = !1, this.retryMove = null, this.pendingFocus = null, this.confirmPressedOn = null, this.lastRefocusCheckMs = -1 / 0, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.enteredLayerAtMs = performance.now(), this.lastFocusedCentre = null, this.memory.enter(ab)
      }
      restoreLayerFocus(bb, ab) {
        const Ub = ab && this.layerKey ? this.findRemembered(bb, this.layerKey) : null;
        this.restoredFromMemory = null !== Ub, this.setFocus(null !== Ub && void 0 !== Ub ? Ub : this.pickInitial(bb, {
          waitForContent: !0
        }))
      }
      continueLayer(bb, ab) {
        this.layerKey = bb;
        const Ub = this.memory.enter(bb);
        this.restoreOnFocusLoss = Ub, this.movedInLayer && !Ub && this.rememberFocus(ab)
      }
      resume(bb, ab) {
        var Ub;
        const Ab = XM();
        Ab && tM(Ab, bb) ? this.takeOver(bb, Ab, ab) : null !== (Ub = this.focused) && void 0 !== Ub && Ub.isConnected && KM(null, this.focused, za(this.focused))
      }
      pickPreferred(bb) {
        var ab;
        return null !== (ab = this.layerKey ? this.findRemembered(bb, this.layerKey) : null) && void 0 !== ab ? ab : this.pickInitial(bb, {
          waitForContent: !0
        })
      }
      findRemembered(bb, ab) {
        return this.memory.has(ab) ? this.memory.recall(ab, this.getEnabledCandidates(bb)) : null
      }
      getHandoff() {
        var bb, ab, Ub;
        const Ab = null !== (bb = this.focused) && void 0 !== bb && bb.isConnected ? this.focused : null,
          Mb = null !== (ab = this.layerRoot) && void 0 !== ab && ab.isConnected ? this.layerRoot : null;
        return {
          point: Ab ? za(Ab) : null !== (Ub = this.lastFocusedCentre) && void 0 !== Ub ? Ub : this.getLayerStartPoint(Mb),
          element: Ab,
          direction: null
        }
      }
      getLayerStartPoint(bb) {
        if (!bb) return {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2
        };
        const ab = this.pickInitial(bb, {
          includeDisabled: !0
        });
        return za(null !== ab && void 0 !== ab ? ab : bb)
      }
      takeOver(bb, ab, Ub) {
        const {
          element: Ab,
          direction: Mb,
          point: Tb
        } = ab, Eb = Ab instanceof HTMLElement && ya(Ab, bb) ? Ab : null;
        if (!Mb) {
          const ab = this.focused;
          return Eb ? this.setFocus(Eb, {
            scroll: !1,
            byUser: !0
          }) : this.focusNearest(bb, Tb), void(this.focused && this.focused === ab && this.focused.isConnected && KM(null, this.focused, za(this.focused)))
        }
        if (this.dpadRepeats.get(Mb).update(!0, Ub), Eb) return this.setFocus(Eb, {
          scroll: !1,
          byUser: !0
        }), void this.move(bb, Mb, Ub, !0);
        const Yb = this.getEnabledCandidates(bb),
          Bb = Yb.map(oM),
          eb = LA(new DOMRect(Tb.x, Tb.y, 0, 0), Bb, Mb),
          vb = eb >= 0 ? eb : kA(Tb, Bb);
        this.setFocus(vb >= 0 ? Yb[vb] : this.pickInitial(bb), {
          byUser: !0
        })
      }
      focusNearest(bb, ab) {
        const Ub = this.getEnabledCandidates(bb),
          Ab = kA(ab, Ub.map(oM));
        this.setFocus(Ab >= 0 ? Ub[Ab] : this.pickInitial(bb), {
          byUser: !0
        })
      }
      pickDefault(bb) {
        let {
          includeDisabled: ab = !1,
          exclude: Ub = null
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Ab = [...bb.querySelectorAll(hM)].filter((Ab => (null === Ub || void 0 === Ub || !Ub.has(Ab)) && (ab ? ka(Ab, bb) : ya(Ab, bb)))),
          Mb = NM(Ab.map(mM));
        return Mb >= 0 ? Ab[Mb] : null
      }
      pickNewAreaStart(bb, ab) {
        const Ub = [...bb.querySelectorAll(uM)].filter(ea);
        for (const Ab of [...Za(bb), ...Ub]) {
          if (ab.has(Ab)) continue;
          const bb = this.getEnabledCandidates(Ab),
            Ub = NM(bb.map(mM));
          if (Ub >= 0) return bb[Ub]
        }
        return null
      }
      pickInitial(bb) {
        let {
          includeDisabled: ab = !1,
          waitForContent: Ub = !1,
          enteredAtMs: Ab = this.enteredLayerAtMs
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Mb = this.pickDefault(bb, {
          includeDisabled: ab
        });
        if (Mb) return Mb;
        const Tb = bb => ab ? Xa(bb) : this.getEnabledCandidates(bb);
        let Eb = [];
        for (const Pb of Za(bb))
          if (Eb = Tb(Pb), Eb.length > 0) break;
        if (0 === Eb.length) {
          if (Ub && performance.now() - Ab < 1e4 && (bb => {
              for (const ab of bb.querySelectorAll("[data-pad-initial-area]"))
                if (!Ba(ab, !1)) return !0;
              return !1
            })(bb)) return null;
          Eb = Tb(bb)
        }
        const Yb = Eb.map(oM),
          Bb = Gb(null),
          eb = Eb.filter(((bb, ab) => Qb(Yb[ab], Bb))),
          vb = eb.length > 0 ? eb : Eb,
          Lb = NM(vb.map(mM));
        return Lb >= 0 ? vb[Lb] : null
      }
      validateFocus(bb, ab) {
        if (this.pendingFocus) {
          var Ub, Ab;
          const Mb = this.pendingFocus.find();
          if (Mb && ya(Mb, bb.root)) return this.pendingFocus = null, void this.setFocus(Mb, {
            byUser: !0
          });
          ab > this.pendingFocus.untilMs && (null === (Ub = (Ab = this.pendingFocus).holdWhile) || void 0 === Ub || !Ub.call(Ab)) && (this.pendingFocus = null)
        }
        const Mb = this.focused,
          Tb = !!Mb && ya(Mb, bb.root);
        if (!(!Tb && Mb && Mb === this.lastActivated && ab - this.lastActivatedAtMs < 5e3 && bb.root.contains(Mb) && ea(Mb) && va(Mb))) {
          if (!Tb && this.restoreOnFocusLoss && this.layerKey) return this.restoreOnFocusLoss = !1, this.movedInLayer = !1, this.scrolledInLayer = !1, this.enteredLayerAtMs = ab, void this.restoreLayerFocus(bb.root, !0);
          if ((!Tb || !this.movedInLayer && !this.scrolledInLayer) && !(ab - this.lastRefocusCheckMs < (Tb ? 200 : 50)))
            if (this.lastRefocusCheckMs = ab, Tb) {
              const Ub = ab - this.enteredLayerAtMs < 15e3 ? this.pickPreferred(bb.root) : null,
                Ab = null !== Ub && void 0 !== Ub ? Ub : this.restoredFromMemory ? null : this.pickDefault(bb.root);
              Ab && Ab !== Mb && this.setFocus(Ab)
            } else {
              if (this.lastFocusedCentre && this.movedInLayer) {
                const ab = this.pendingFocus;
                return this.focusNearest(bb.root, this.lastFocusedCentre), void(this.pendingFocus = ab)
              }
              this.setFocus(this.pickPreferred(bb.root))
            }
        }
      }
      handleButtons(bb, ab) {
        if (bb.wasPressed((0, vb.h)("menuToggleCursor"))) return PM(this.getHandoff()), !0;
        if (bb.wasPressed((0, vb.h)("menuBack"))) {
          const bb = Fa(ab.root);
          return bb ? this.setFocus(bb, {
            byUser: !0
          }) : GA(this, ab.root) || (ua(ab.root) ? this.returnToOpener(ab.root) : this.backToStrip(ab.root) || UM()), !0
        }
        const Ub = (0, vb.h)("menuConfirm");
        var Ab, Mb;
        bb.wasPressed(Ub) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (Ab = null === (Mb = this.focused) || void 0 === Mb ? void 0 : Mb.getAttribute("data-pad-repeat")) && void 0 !== Ab ? Ab : null, this.confirmRepeated = bb.wokeDevice, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now()));
        if (bb.wasReleased(Ub)) {
          const bb = this.confirmPressedOn;
          if (this.confirmPressedOn = null, bb && !this.confirmRepeated && bb === this.focused && bb.isConnected && !va(bb)) {
            const Ub = bb.matches("[data-pad-tab]") ? bb.closest(qM) : null;
            Ub ? this.enterTab(bb, Ub, ab.root, performance.now()) : this.activate(bb)
          }
          return !0
        }
        return this.repeatConfirm(bb, Ub), wA(this, bb, ab)
      }
      repeatConfirm(bb, ab) {
        const Ub = this.confirmPressedOn;
        Ub && null !== this.confirmRepeatKey && bb.isHeld(ab) && (Ub === this.focused && Ub.isConnected && !va(Ub) && Ub.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? Ub.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.confirmRepeated = !0, this.activate(Ub)) : this.confirmRepeatKey = null)
      }
      backToStrip(bb) {
        const ab = this.focused;
        if (!(0, Pb.i)().menuBackToCategories) return !1;
        const Ub = null !== ab && void 0 !== ab && ab.isConnected ? this.tabStripNav.backToStrip(ab, this.getEnabledCandidates(bb), bb) : null;
        return Ub && this.setFocus(Ub, {
          byUser: !0
        }), null !== Ub
      }
      returnToOpener(bb) {
        const ab = this.lastActivatedKey;
        ab && (this.lastActivatedKey = null, this.focusWhenFound((() => {
          var Ub;
          return null !== (Ub = this.getEnabledCandidates(bb).find((bb => ra(bb) === ab))) && void 0 !== Ub ? Ub : null
        })))
      }
      activate(bb) {
        var ab;
        if ((0, xM.d)(bb) || Ga(bb)) return;
        this.lastActivatedKey = null !== (ab = ra(bb)) && void 0 !== ab ? ab : this.lastActivatedKey, this.lastActivated = bb, this.lastActivatedAtMs = performance.now(), this.rememberFocus(bb);
        const Ub = this.layerRoot;
        if (Ub) {
          const ab = new Set(Ub.querySelectorAll(hM)),
            Ab = new Set(Ub.querySelectorAll(`[data-pad-initial-area], ${uM}`)),
            Mb = this.lastActivatedAtMs;
          this.focusWhenFound((() => {
            var Mb;
            return ya(bb, Ub) ? null : null !== (Mb = this.pickDefault(Ub, {
              exclude: ab
            })) && void 0 !== Mb ? Mb : this.pickNewAreaStart(Ub, Ab)
          }), 5e3, (() => bb.isConnected && va(bb) && performance.now() - Mb < 6e4))
        }
        Ha(bb), ha(bb)
      }
      handleDirections(bb, ab, Ub, Ab) {
        const Mb = iA(ab.layer.kind) ? (0, vb.h)("chat") : null;
        for (const Yb of jb.u) {
          this.dpadRepeats.get(Yb).update(bb.isHeld(Yb), Ub) && (Yb !== Mb || bb.wasPressed(Yb)) && this.move(ab.root, Yb, Ub, !0)
        }
        const Tb = Ab ? (0, jb.i)(bb.leftStick, (0, Pb.i)().moveDeadzone) : {
            x: 0,
            y: 0
          },
          Eb = this.stickRepeat.update((0, jb.Y)(Tb), Ub);
        if (Eb && this.move(ab.root, Eb, Ub, !0), this.retryMove && Ub >= this.retryMove.atMs) {
          const {
            direction: bb
          } = this.retryMove;
          this.retryMove = null, this.move(ab.root, bb, Ub, !1)
        }
      }
      move(bb, ab, Ub, Ab) {
        var Mb;
        let Tb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.pendingFocus && this.pendingFocus === (null === (Mb = this.tabOpenWait) || void 0 === Mb ? void 0 : Mb.wait) && ab === this.tabOpenWait.direction) return;
        this.pendingFocus = null;
        const Eb = this.focused;
        if (!Eb || !Eb.isConnected) {
          const ab = this.pickInitial(bb);
          return void(ab && this.setFocus(ab, {
            byUser: !0
          }))
        }
        const Yb = "Left" === ab || "Right" === ab,
          Bb = Yb ? (0, xM.d)(Eb) : null;
        if (Bb) return void Bb.adjust("Left" === ab ? -1 : 1);
        const eb = bb => null !== bb.closest("[data-pad-friends-column]"),
          vb = eb(Eb),
          Lb = oM(Eb),
          Pb = Yb || Eb.closest(qM) ? null : (bb => {
            const ab = new Map;
            return Ub => {
              const Ab = Ub.closest(qM);
              if (!Ab) return !1;
              let Mb = ab.get(Ab);
              if (void 0 === Mb) {
                const Ub = oM(Ab);
                Mb = vA(bb, Ub) && (Ub.right <= bb.left || Ub.left >= bb.right), ab.set(Ab, Mb)
              }
              return Mb
            }
          })(Lb),
          Xb = null !== Eb.closest(QM),
          jb = this.getEnabledCandidates(bb).filter((bb => bb !== Eb && (Yb || eb(bb) === vb) && !(null !== Pb && void 0 !== Pb && Pb(bb)) && (Xb || !bb.closest(QM)))),
          Rb = jb.map(oM),
          kb = Wb(Eb, "y", bb),
          yb = Gb(kb);
        if (!Tb && !Qb(Lb, yb)) {
          const bb = jb.filter(((bb, ab) => Qb(Rb[ab], yb)));
          if (bb.length > 0) {
            const ab = {
              x: yb.left + yb.width / 2,
              y: yb.top + yb.height / 2
            };
            return void this.setFocus(bb[kA(ab, bb.map(oM))], {
              byUser: !0
            })
          }
        }
        const Zb = Yb ? ((bb, ab, Ub) => {
            const Ab = oM(bb),
              Mb = bb.closest(qM),
              Tb = Mb ? oM(Mb) : null;
            return ab.map(((ab, Eb) => {
              const Yb = Ub[Eb];
              if (Yb.bottom > Ab.top && Yb.top < Ab.bottom) return !0;
              const Bb = ab.closest(qM);
              if (Mb && Tb) return Bb !== Mb && (null !== Bb || Yb.bottom <= Tb.top || Yb.top >= Tb.bottom);
              if (Bb) return !vA(Ab, oM(Bb));
              let eb = bb;
              for (let Ub = bb.parentElement; Ub && !Ub.contains(ab); Ub = Ub.parentElement) eb = Ub;
              const vb = oM(eb);
              return Yb.right > vb.left && Yb.left < vb.right
            }))
          })(Eb, jb, Rb) : void 0,
          Db = Yb && !Eb.closest(qM) ? (bb => bb.map((bb => !bb.closest(fM))))(jb) : void 0,
          zb = ((bb, ab) => {
            const Ub = [];
            for (let Mb = bb; Mb; Mb = Mb.parentElement) Ub.push(Mb);
            const Ab = new Map;
            return Ub.forEach(((bb, ab) => {
              Ab.set(bb, Ub.length - 1 - ab)
            })), ab.map((bb => {
              for (let ab = bb; ab; ab = ab.parentElement) {
                const bb = Ab.get(ab);
                if (void 0 !== bb) return bb
              }
              return -1
            }))
          })(Eb, jb),
          xb = Yb ? "x" : "y",
          ib = Wb(Eb, xb, bb);
        let fb = LA(Lb, Rb, ab, zb, Zb, Db);
        if (fb >= 0 && ib && !ib.contains(jb[fb])) {
          const bb = jb.flatMap(((bb, ab) => ib.contains(bb) ? [ab] : [])),
            Ub = ab => ab && bb.map((bb => ab[bb])),
            Ab = LA(Lb, bb.map((bb => Rb[bb])), ab, bb.map((bb => zb[bb])), Ub(Zb), Ub(Db));
          fb = Ab >= 0 ? bb[Ab] : fb
        }
        if (fb >= 0) return void this.moveTo(Eb, jb[fb], jb, bb, ab, Tb);
        if (!Ab) return;
        const mb = "Right" === ab || "Down" === ab ? 1 : -1;
        if (ib && Fb(ib, xb, mb)) {
          const bb = "y" === xb ? ib.clientHeight : ib.clientWidth;
          hb(ib, xb, mb * bb * .5), this.retryMove = {
            direction: ab,
            atMs: Ub + 80
          }
        }
      }
      moveTo(bb, ab, Ub, Ab, Mb, Tb) {
        const Eb = this.tabStripNav.findTabContent(bb, ab, Ub);
        Eb && "true" !== bb.dataset.padSelected ? this.openTab(bb, Eb, Ab, Mb) : Tb && !Eb || this.setFocus(this.tabStripNav.redirect(bb, ab, Ub, Ab), {
          byUser: !0
        })
      }
      openTab(bb, ab, Ub, Ab) {
        const Mb = ab.parentElement;
        Ha(bb), this.focusWhenFound((() => "true" !== bb.dataset.padSelected ? null : ab.isConnected ? this.tabStripNav.pickContentStart(ab, this.getEnabledCandidates(Ub), Ub) : Mb ? this.tabStripNav.pickReplacedContentStart(bb, Mb, this.getEnabledCandidates(Ub), Ub) : null), 3e3), this.tabOpenWait = {
          wait: this.pendingFocus,
          direction: Ab
        }
      }
      enterTab(bb, ab, Ub, Ab) {
        this.move(Ub, (bb => {
          const ab = [...bb.querySelectorAll(HM)].filter((ab => ab.closest(WM) === bb));
          if (ab.length >= 2) {
            const bb = ab[0].getBoundingClientRect(),
              Ub = ab[1].getBoundingClientRect();
            return Math.abs(Ub.top - bb.top) > Math.abs(Ub.left - bb.left) ? "Right" : "Down"
          }
          const Ub = bb.getBoundingClientRect();
          return Ub.height > Ub.width ? "Right" : "Down"
        })(ab), Ab, !1, !0), this.focused !== bb || this.pendingFocus || this.activate(bb)
      }
      handleScroll(bb, ab) {
        const Ub = (0, jb.i)(bb.rightStick, .2);
        if (0 === Ub.x && 0 === Ub.y) return void(this.scrollRemainder = {
          x: 0,
          y: 0
        });
        const Ab = bb.dtMs / 1e3;
        for (const Tb of ["x", "y"]) {
          var Mb;
          const bb = Ub[Tb];
          if (0 === bb) continue;
          const Eb = null !== (Mb = Wb(this.focused, Tb, ab.root)) && void 0 !== Mb ? Mb : Ib(ab.root, Tb);
          if (!Eb) continue;
          const Yb = Math.sign(bb) * bb * bb * 1500 * Ab + this.scrollRemainder[Tb],
            Bb = Math.trunc(Yb);
          this.scrollRemainder[Tb] = Yb - Bb, 0 !== Bb && (hb(Eb, Tb, Bb), this.scrolledInLayer = !0)
        }
      }
    };
    var sM = Ub(7793);
    var gM = Ub(8284);
    const CM = {
        duration: 80,
        strongMagnitude: .2,
        weakMagnitude: .2,
        needsPadInUse: !1
      },
      VM = {
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
          ...CM,
          minIntervalMs: 1e3
        },
        preview: {
          ...CM,
          minIntervalMs: 0
        }
      };
    const OM = new class {
        constructor(bb) {
          this.deps = bb, this.lastPlayedMs = {}, this.loggedFailure = !1, this.logFailure = bb => {
            this.loggedFailure || (this.loggedFailure = !0, console.warn("Controller vibration failed; further failures are not logged.", bb))
          }
        }
        play(bb, ab) {
          const Ub = VM[bb];
          if (!this.deps.isVibrationOn() || Ub.needsPadInUse && !this.deps.isPadInUse()) return !1;
          const Ab = this.lastPlayedMs[bb];
          if (void 0 !== Ab && ab - Ab < Ub.minIntervalMs) return !1;
          const Mb = this.deps.getActuator();
          if (!Mb) return !1;
          this.lastPlayedMs[bb] = ab;
          const {
            duration: Tb,
            strongMagnitude: Eb,
            weakMagnitude: Yb
          } = Ub;
          try {
            Mb.playEffect("dual-rumble", {
              duration: Tb,
              strongMagnitude: Eb,
              weakMagnitude: Yb
            }).catch(this.logFailure)
          } catch (Bb) {
            this.logFailure(Bb)
          }
          return !0
        }
      }({
        getActuator: () => (bb => {
          const ab = null === bb || void 0 === bb ? void 0 : bb.vibrationActuator;
          return "function" === typeof(null === ab || void 0 === ab ? void 0 : ab.playEffect) ? ab : null
        })(Eb.g.getActiveGamepad()),
        isVibrationOn: () => (0, Pb.i)().vibration,
        isPadInUse: Xb.n
      }),
      cM = bb => {
        OM.play(bb, performance.now())
      };
    var JM = Ub(7795),
      nM = Ub(2636),
      SM = Ub(116),
      bT = Ub(31),
      aT = Ub(622);
    class UT {
      constructor(bb) {
        this.deps = bb
      }
      check() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const ab = this.deps.isPadActive() ? this.deps.getPadFamily() : null;
        if (!ab) return "skipped";
        const Ub = bb ? this.deps.getVisitId() : this.deps.peekVisitId();
        return null === Ub || this.deps.readReportedVisitId() === Ub ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(Ub), this.deps.GX(ab, this.deps.getInputType()), "reported") : "notReady"
      }
    }
    const AT = "controllerUsageReportedVisit";
    var MT = Ub(1260),
      TT = Ub(1639),
      ET = Ub(603),
      YT = Ub(1345),
      BT = Ub(1198);
    const eT = bb => ({
        translationKey: `controller:${bb}`
      }),
      vT = {
        A: "A",
        B: "B",
        X: "X",
        Y: "Y",
        LB: "LB",
        RB: "RB",
        LT: "LT",
        RT: "RT",
        View: eT("padButtonView"),
        Menu: eT("padButtonMenu"),
        LS: "L3",
        RS: "R3",
        Up: eT("padButtonDpadUp"),
        Down: eT("padButtonDpadDown"),
        Left: eT("padButtonDpadLeft"),
        Right: eT("padButtonDpadRight"),
        Home: eT("padButtonHome"),
        LeftStick: eT("padButtonLeftStick"),
        RightStick: eT("padButtonRightStick")
      },
      LT = {
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
          View: eT("padButtonCreate"),
          Menu: eT("padButtonOptions")
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
      PT = (bb, ab) => {
        var Ub;
        const Ab = null !== (Ub = LT[bb][ab]) && void 0 !== Ub ? Ub : vT[ab];
        return "string" === typeof Ab ? Ab : (0, Mb.w)(BT.f.get().getCurrentLanguageCode(), Ab.translationKey)
      },
      XT = bb => {
        let {
          glyph: ab,
          family: Ub,
          className: Ab
        } = bb;
        const Mb = (0, Xb.B)(),
          Tb = null !== Ub && void 0 !== Ub ? Ub : Mb,
          Eb = (0, JM.i)(Tb, ab);
        return (0, Kb.jsx)("span", {
          className: rb()("ControllerGlyph", Ab),
          role: "img",
          "aria-label": PT(Tb, ab),
          style: {
            "--pad-glyph-mask": `url(${Eb})`,
            "--pad-glyph-aspect": (0, JM.e)(Tb, ab)
          }
        })
      };
    var jT = Ub(1794);
    const RT = bb => {
      let {
        action: ab
      } = bb;
      const {
        t: Ub
      } = (0, Mb.A)();
      switch (ab.kind) {
        case "reload":
          return (0, Kb.jsx)("span", {
            children: Ub("controller:gameplayReload")
          });
        case "specialAction":
          return null;
        case "customButton":
          return (0, Kb.jsx)(jT.c, {
            text: ab.description ? [{
              icon: ab.icon
            }, ` ${ab.description}`] : [{
              icon: ab.icon
            }]
          });
        case "touchButton":
          return (0, Kb.jsx)(jT.c, {
            text: ab.label
          })
      }
    };
    var kT = Ub(8293);
    const yT = bb => {
      let {
        hold: ab
      } = bb;
      return (0, Kb.jsx)("div", {
        className: "DropStackFillTrack",
        style: {
          "--pad-drop-stack-hold": `${ab.holdMs}ms`
        },
        children: (0, Kb.jsx)("div", {
          className: "DropStackFillBar"
        })
      }, ab.id)
    };
    var ZT = Ub(8315),
      DT = Ub(8320),
      zT = Ub(8323),
      xT = Ub(8311);
    const iT = () => {
        const {
          gameState: bb
        } = (0, Bb.n)(["gameState"]), ab = (0, Xb.x)(), [Ab, Mb] = (0, qb.useState)(!1), [Tb, Eb] = (0, qb.useState)(!1);
        return (0, qb.useEffect)((() => {
          "inGame" === bb && Mb(!0)
        }), [bb]), (0, qb.useEffect)((() => {
          if (!Ab) return;
          let bb = null,
            ab = !1;
          return (ET.o ? Promise.all([Ub.e(69), Ub.e(259), Ub.e(199), Ub.e(217), Ub.e(216), Ub.e(84)]).then((() => Ub(39660))).then((bb => bb.startWasmPadGameplay)) : Promise.all([Ub.e(69), Ub.e(226), Ub.e(225), Ub.e(94), Ub.e(72), Ub.e(71), Ub.e(70), Ub.e(218), Ub.e(182), Ub.e(222), Ub.e(74), Ub.e(196), Ub.e(215), Ub.e(219), Ub.e(93), Ub.e(83), Ub.e(113), Ub.e(234), Ub.e(73), Ub.e(112), Ub.e(155), Ub.e(217), Ub.e(188)]).then((() => Ub(39789))).then((bb => bb.startPadGameplay))).then((Ub => {
            ab || (bb = Ub())
          })).catch((bb => {
            console.error("Pad gameplay failed to load", bb), ab || Eb(!0)
          })), () => {
            var Ub;
            ab = !0, null === (Ub = bb) || void 0 === Ub || Ub()
          }
        }), [Ab]), (0, qb.useEffect)((() => {
          Tb && ab && (Eb(!1), MT.NotificationProvider.showPromptPopup({
            title: "controller:gameplayLoadFailedTitle",
            subtitle: "controller:gameplayLoadFailedSubtitle",
            confirmText: "settingsMenu:reloadPagePopupConfirm",
            confirmTooltip: "",
            cancelText: "general:cancel",
            cancelTooltip: ""
          }).getResult().then((bb => {
            !0 === bb && (0, TT.reloadBloxd)()
          })))
        }), [Tb, ab]), (0, Kb.jsxs)(Kb.Fragment, {
          children: [(0, Kb.jsx)(fT, {}), (0, Kb.jsx)(mT, {}), (0, Kb.jsx)(pT, {})]
        })
      },
      fT = () => {
        const {
          t: bb
        } = (0, Mb.A)(), ab = (0, Xb.x)(), {
          gameState: Ub,
          isUiHidden: Ab
        } = (0, Bb.n)(["gameState", "isUiHidden"]), {
          hideButtonHints: Tb
        } = (0, Pb.t)(), Eb = (0, kT.f)(), Yb = (0, kT.h)(), [eb, Lb] = (0, qb.useState)(zT.e);
        return (0, YT.f)(xT.o, Lb), !ab || Tb || Ab || "inGame" !== Ub || !Eb && !eb ? null : (0, Kb.jsxs)("div", {
          className: "PadActionHint SmallTextBold",
          children: [Eb && (0, Kb.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, Kb.jsx)(XT, {
              glyph: (0, vb.h)("actionButton")
            }), (0, Kb.jsx)(RT, {
              action: Eb
            }), Yb && (0, Kb.jsx)("span", {
              className: "PadActionHintMore",
              children: bb("controller:gameplayActionWheelHint")
            })]
          }), eb && (0, Kb.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, Kb.jsx)(XT, {
              glyph: (0, vb.h)("pickBlock")
            }), (0, Kb.jsx)("span", {
              children: bb("controller:gameplayPickBlock")
            })]
          })]
        })
      },
      mT = () => {
        const {
          t: bb
        } = (0, Mb.A)(), ab = (0, Xb.x)(), {
          gameState: Ub,
          isUiHidden: Ab
        } = (0, Bb.n)(["gameState", "isUiHidden"]), [Tb, Eb] = (0, qb.useState)(ZT.d);
        return (0, YT.f)(xT.l, Eb), ab && !Ab && "inGame" === Ub && Tb ? (0, Kb.jsxs)("div", {
          className: "PadDropStackFill SmallTextBold",
          children: [(0, Kb.jsx)("span", {
            children: bb("controller:gameplayDropStack")
          }), (0, Kb.jsx)(yT, {
            hold: Tb
          })]
        }) : null
      },
      pT = () => {
        const {
          t: bb
        } = (0, Mb.A)(), ab = (0, Xb.x)(), {
          gameState: Ub,
          isUiHidden: Ab
        } = (0, Bb.n)(["gameState", "isUiHidden"]), {
          hideButtonHints: Tb
        } = (0, Pb.t)(), [Eb, Yb] = (0, qb.useState)(DT.c);
        return (0, YT.f)(xT.i, Yb), ab && !Ab && "inGame" === Ub && Eb ? (0, Kb.jsxs)("div", {
          className: "PadAttackLatchedHint SmallTextBold",
          children: [!Tb && (0, Kb.jsx)(XT, {
            glyph: (0, vb.h)("attack")
          }), (0, Kb.jsx)("span", {
            children: bb("controller:gameplayAttackLatched")
          })]
        }) : null
      };
    var NT = Ub(8326),
      WT = Ub(1844),
      HT = Ub(2268),
      IT = Ub(7773);
    const dT = bb => bb && !(0, NT.e)(WT.e.get("shopInfo")),
      FT = () => {
        const bb = "inGame" === (0, Bb.n)(["gameState"]).gameState;
        return (0, HT.f)("shopInfo", (() => {
          (0, IT.g)(dT(bb))
        })), (0, qb.useEffect)((() => {
          (0, IT.g)(dT(bb))
        }), [bb]), null
      },
      hT = () => {
        const {
          t: bb
        } = (0, Mb.A)(), {
          hideButtonHints: ab
        } = (0, Pb.t)();
        (0, Xb.B)();
        const Ub = (0, IU.j)();
        return (0, qb.useEffect)((() => (() => {
          const bb = Lb.c.register({
              name: "inventory",
              isActive: cU.isActive,
              onFrame: cU.onFrame,
              onDeactivate: cU.onDeactivate,
              wakePressActs: cU.wakePressActs
            }),
            ab = bb => {
              cU.noteRealPointer(bb), cU.shouldBlockRealPointer(bb) && bb.stopPropagation()
            };
          for (const Eb of JU) window.addEventListener(Eb, ab, !0);
          const Ub = (0, wa.i)((() => {
              "inventory" !== Lb.c.getActiveConsumerName() && cU.forgetSurface()
            })),
            Ab = bb => {
              const ab = bb.target;
              (0, Xb.n)() && nb(ab) && ab.closest(XU) && (0, wa.h)() && (0, wa.m)(ab)
            };
          document.addEventListener("focusout", Ab, !0);
          const {
            invalidate: Mb,
            onScroll: Tb
          } = cU.targets;
          return document.addEventListener("scroll", Tb, !0), window.addEventListener("resize", Mb), () => {
            bb(), Ub();
            for (const bb of JU) window.removeEventListener(bb, ab, !0);
            document.removeEventListener("scroll", Tb, !0), document.removeEventListener("focusout", Ab, !0), window.removeEventListener("resize", Mb), cU.targets.disconnect()
          }
        })()), []), (0, Kb.jsxs)(Kb.Fragment, {
          children: [(0, Kb.jsx)(wb, {
            placer: cU.ring,
            className: "InventorySlotCursorRing"
          }), Ub.showing && !ab && (0, Kb.jsx)("div", {
            className: "InventorySlotCursorHints SmallTextBold",
            children: ta(Ub).map((ab => {
              let {
                actions: Ab,
                labelKey: Mb
              } = ab;
              return (0, Kb.jsxs)("div", {
                className: "InventorySlotCursorHint",
                children: [Ab.map((bb => (0, Kb.jsx)(XT, {
                  glyph: (0, vb.h)(bb)
                }, bb))), (0, Kb.jsx)("span", {
                  children: bb(`controller:${Mb}`)
                }), "inventoryDrop" === Mb && Ub.dropStackHold && (0, Kb.jsx)(yT, {
                  hold: Ub.dropStackHold
                })]
              }, Mb)
            }))
          })]
        })
      },
      GT = [{
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
      QT = bb => Array.from(bb).map((bb => ({
        type: "char",
        char: bb,
        width: 1
      }))),
      qT = function(bb) {
        return {
          type: "command",
          command: bb,
          width: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
        }
      },
      uT = [qT("page", 2), qT("otherPage"), qT("caretLeft"), qT("space", 3), qT("caretRight"), qT("close", 1.5), qT("submit", 1.5)],
      rT = [qT("page", 2), qT("otherPage"), qT("caretLeft"), qT("space", 2), qT("caretRight"), qT("newline"), qT("close", 1.5), qT("submit", 1.5)],
      KT = [
        [...QT("1234567890"), qT("backspace")], QT("qwertyuiop/"), QT("asdfghjkl'?"), [qT("shift", 2), ...QT("zxcvbnm,.")]
      ],
      oT = [
        [...QT("1234567890"), qT("backspace")], QT("!@#$%^&*()/"), QT('-_=+[]{};:"'), QT("~`|\\<>'\u20ac\xa3,.")
      ],
      lT = {
        letters: KT,
        accents: [
          [...QT("1234567890"), qT("backspace")], QT("\xe1\xe9\xed\xf3\xfa\xe0\xe8\xec\xf2\xf9\xf1"), QT("\xe2\xea\xee\xf4\xfb\xe4\xeb\xef\xf6\xfc\xe7"), [qT("shift", 2), ...QT("\xe3\xf5\xdf\u0153\u011f\u015f\u0131\xbf\xa1")]
        ],
        symbols: oT
      },
      tT = new Set(["de", "es", "fr", "it", "nl", "pt", "pt-BR", "tr", "vi"]),
      wT = (bb, ab) => "letters" === bb ? ab ? {
        page: "accents",
        otherPage: "symbols"
      } : {
        page: "symbols",
        otherPage: "accents"
      } : {
        page: "letters",
        otherPage: "accents" === bb ? "symbols" : "accents"
      },
      sT = function(bb, ab) {
        const Ub = ((bb, ab) => [...lT[bb], ab ? rT : uT])(bb, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
        if (0 === ab) return Ub;
        const Ab = Math.min(2, gT(Ub[0]) / ab);
        return [Array.from({
          length: ab
        }, ((bb, ab) => ({
          type: "phrase",
          phraseIndex: ab,
          width: Ab
        }))), ...Ub]
      },
      gT = bb => bb.reduce(((bb, ab) => bb + ab.width), 0),
      CT = bb => Math.max(...bb.map(gT)),
      VT = (bb, ab) => {
        const Ub = bb[ab.row];
        let Ab = (CT(bb) - gT(Ub)) / 2;
        for (let Mb = 0; Mb < ab.col; Mb++) Ab += Ub[Mb].width;
        return Ab + Ub[ab.col].width / 2
      },
      OT = (bb, ab, Ub) => {
        let Ab = 0,
          Mb = 1 / 0;
        for (let Tb = 0; Tb < bb[ab].length; Tb++) {
          const Eb = Math.abs(VT(bb, {
            row: ab,
            col: Tb
          }) - Ub);
          Eb < Mb - 1e-9 && (Ab = Tb, Mb = Eb)
        }
        return Ab
      },
      cT = (bb, ab) => {
        const Ub = Math.max(0, Math.min(bb.length - 1, ab.row));
        return {
          row: Ub,
          col: Math.max(0, Math.min(bb[Ub].length - 1, ab.col))
        }
      },
      JT = (bb, ab, Ub) => "once" === bb && ab - Ub <= 400 ? "caps" : "off" === bb ? "once" : "off",
      nT = (bb, ab) => "once" === bb && (bb => bb.toLowerCase() !== bb.toUpperCase())(ab) ? "off" : bb,
      ST = (bb, ab, Ub) => {
        if ("symbols" === ab || "off" === Ub) return bb;
        const Ab = bb.toUpperCase();
        return 1 === Ab.length ? Ab : bb
      };
    var bE = Ub(8218);
    const aE = ["controller:keyboardPhraseGg", "controller:keyboardPhraseHi", "controller:keyboardPhraseThanks", "controller:keyboardPhraseGl", "controller:keyboardPhraseBrb", "controller:keyboardPhraseYes", "controller:keyboardPhraseNo", "controller:keyboardPhraseHelp"];
    const UE = new class {
        constructor() {
          this.lastSendMs = -1 / 0
        }
        claim(bb) {
          return !(bb - this.lastSendMs < 2e3) && (this.lastSendMs = bb, !0)
        }
      },
      AE = {
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
      ME = ["eY", "nameTag"],
      TE = bb => {
        const ab = bb.target instanceof HTMLTextAreaElement && !ME.includes(bb.kind);
        return sT(bb.page, "chat" === bb.kind ? aE.length : 0, ab)
      },
      EE = bb => {
        const ab = bb.getBoundingClientRect(),
          Ub = window.innerHeight,
          Ab = ab.top + ab.height / 2 < Ub / 2 ? "bottom" : "top",
          Mb = "bottom" === Ab ? Ub - ab.bottom - 6 : ab.top - 6;
        return {
          placement: Ab,
          maxHeightPx: Math.min(.46 * Ub, Math.max(.3 * Ub, Mb))
        }
      },
      YE = bb => {
        (0, DA.i)(bb) ? (0, DA.b)().close(): (wM.noteChosenStop(bb), bb.blur())
      };
    class BE {
      constructor(bb) {
        this.host = bb, this.lastShiftPressMs = -1 / 0, this.phraseTexts = [], this.phrasesFill = !1
      }
      setPhraseRow(bb, ab) {
        this.phraseTexts = bb, this.phrasesFill = ab
      }
      pressKey(bb) {
        const ab = this.host.getState(),
          Ub = TE(ab),
          Ab = Ub[bb.row][bb.col];
        this.host.setState({
          ...ab,
          focus: bb,
          preferredX: VT(Ub, bb)
        }), "char" === Ab.type ? this.typeChar(Ab.char) : "command" === Ab.type ? this.runCommand(Ab.command) : this.sendPhrase(Ab.phraseIndex)
      }
      runCommand(bb) {
        const ab = this.host.getState();
        switch (bb) {
          case "backspace":
            Ta(ab.target);
            break;
          case "space":
            Ma(ab.target, " ");
            break;
          case "newline":
            Ma(ab.target, "\n");
            break;
          case "caretLeft":
            Ea(ab.target, -1);
            break;
          case "caretRight":
            Ea(ab.target, 1);
            break;
          case "shift": {
            const bb = performance.now();
            this.host.setState({
              ...ab,
              shift: JT(ab.shift, bb, this.lastShiftPressMs)
            }), this.lastShiftPressMs = bb;
            break
          }
          case "page":
          case "otherPage": {
            const Ub = wT(ab.page, ab.accentsFirst)[bb];
            this.host.setState({
              ...ab,
              page: Ub,
              focus: cT(TE({
                ...ab,
                page: Ub
              }), ab.focus)
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
            (0, DA.i)(ab.target) && (0, DA.b)().selectNextChannel()
        }
      }
      submit() {
        var bb, ab;
        const {
          target: Ub
        } = this.host.getState();
        this.host.hide(), (0, DA.i)(Ub) ? (0, DA.b)().submit() : (wM.noteChosenStop(Ub), null === (bb = (ab = (0, DA.f)(Ub)).submit) || void 0 === bb || bb.call(ab), document.activeElement === Ub && Ub.blur())
      }
      close() {
        const {
          target: bb
        } = this.host.getState();
        this.host.hide(), YE(bb)
      }
      typeChar(bb) {
        const {
          target: ab,
          page: Ub,
          shift: Ab
        } = this.host.getState();
        Ma(ab, ST(bb, Ub, Ab)), this.host.setState({
          ...this.host.getState(),
          shift: nT(Ab, bb)
        })
      }
      sendPhrase(bb) {
        if (this.phrasesFill) {
          const {
            target: ab
          } = this.host.getState(), Ub = this.phraseTexts[bb];
          Ub && (ab.setSelectionRange(0, ab.value.length), Ma(ab, Ub))
        } else UE.claim(performance.now()) && (this.host.hide(), (0, DA.b)().sendLine(this.phraseTexts[bb]))
      }
    }
    const eE = {
        initialDelayMs: 380,
        intervalMs: 85
      },
      vE = {
        initialDelayMs: 400,
        intervalMs: 55
      };
    class LE {
      constructor(bb, ab) {
        this.host = bb, this.editor = ab, this.lastDirection = null, this.navRepeat = new jb.b((0, Rb.c)(eE)), this.commandRepeats = new Map(GT.filter((bb => {
          let {
            repeats: ab
          } = bb;
          return ab
        })).map((bb => {
          let {
            command: ab
          } = bb;
          return [ab, (0, Rb.c)(vE)]
        })))
      }
      reset() {
        this.navRepeat.reset();
        for (const bb of this.commandRepeats.values()) bb.reset()
      }
      onVisibleFrame(bb) {
        const ab = performance.now();
        for (const {
            command: Mb,
            action: Tb
          }
          of GT) {
          const Ub = (0, vb.h)(Tb),
            Ab = this.commandRepeats.get(Mb);
          if ((Ab ? Ab.update(bb.isHeld(Ub), ab) : bb.wasPressed(Ub)) && (this.editor.runCommand(Mb), !this.host.getState().visible)) return
        }
        if (bb.wasPressed((0, vb.h)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
        const Ub = this.readNavDirection(bb);
        this.lastDirection = Ub;
        const Ab = this.navRepeat.update(Ub, ab);
        Ab && this.navigate(Ab)
      }
      onHiddenFrame(bb, ab) {
        var Ub;
        if (bb.wasPressed((0, vb.h)("keyboardClose"))) return void YE(ab);
        const Ab = (0, vb.h)("keyboardType");
        if (bb.wasPressed(Ab)) return Lb.c.consumeButton(Ab), void this.host.open(ab);
        const Mb = this.readNavDirection(bb),
          Tb = null !== Mb && Mb !== this.lastDirection;
        if (this.lastDirection = Mb, !Tb || (0, DA.i)(ab)) return;
        const Eb = (null === (Ub = aM()) || void 0 === Ub ? void 0 : Ub.root.contains(ab)) || null !== ab.closest(".EntireInventoryWrapper");
        YE(ab), Eb && Lb.c.handOffHeldInput()
      }
      navigate(bb) {
        const ab = this.host.getState();
        if ("Up" === bb && 0 === ab.focus.row && "chat" === ab.kind) return (0, DA.b)().stepHistory(), void this.host.setState({
          ...ab
        });
        const Ub = ((bb, ab, Ub, Ab) => {
          if ("Left" === Ub || "Right" === Ub) {
            const Ab = bb[ab.row].length,
              Mb = (ab.col + ("Right" === Ub ? 1 : -1) + Ab) % Ab,
              Tb = {
                row: ab.row,
                col: Mb
              };
            return {
              pos: Tb,
              preferredX: VT(bb, Tb)
            }
          }
          const Mb = (ab.row + ("Down" === Ub ? 1 : -1) + bb.length) % bb.length;
          return {
            pos: {
              row: Mb,
              col: OT(bb, Mb, Ab)
            },
            preferredX: Ab
          }
        })(TE(ab), ab.focus, bb, ab.preferredX);
        this.host.setState({
          ...ab,
          focus: Ub.pos,
          preferredX: Ub.preferredX
        })
      }
      readNavDirection(bb) {
        for (const ab of jb.u)
          if (bb.isHeld(ab)) return ab;
        return (0, jb.Y)((0, jb.i)(bb.leftStick, (0, Pb.i)().moveDeadzone))
      }
    }
    const PE = ["Up", "Down", "Left", "Right"],
      XE = new Set(["CapsLock", "Control", "Fn", "FnLock", "Hyper", "NumLock", "ScrollLock", "Shift", "Super"]);
    const jE = new class {
      constructor() {
        this.state = AE, this.listeners = new Set, this.ownedField = null, this.pendingChatInput = null, this.pendingChatTimeout = 0, this.savedInputMode = null, this.editor = new BE(this), this.padInput = new LE(this, this.editor)
      }
      getState() {
        return this.state
      }
      setState(bb) {
        const ab = bb.visible !== this.state.visible;
        this.state = bb;
        for (const Ub of this.listeners) Ub();
        ab && eb.m.IR(sb.d, bb.visible)
      }
      subscribe(bb) {
        return this.listeners.add(bb), () => {
          this.listeners.delete(bb)
        }
      }
      install() {
        const bb = Lb.c.register({
            name: "keyboard",
            isActive: () => this.state.visible || nb(document.activeElement),
            onFrame: bb => {
              this.onFrame(bb)
            },
            onDeactivate: () => {
              this.padInput.reset()
            },
            wakePressActs: bb => PE.includes(bb) || !this.state.visible && bb === (0, vb.h)("keyboardType")
          }),
          ab = bb => {
            const ab = bb.target;
            nb(ab) && (ab === this.pendingChatInput || (0, Xb.n)() ? this.open(ab) : this.state.visible && ab !== this.state.target && (this.ownedField = null, this.hide()))
          },
          Ub = () => {
            setTimeout((() => {
              this.releaseLostField()
            }), 0)
          },
          Ab = bb => {
            bb.isTrusted && this.state.visible && (bb => !bb.repeat && !XE.has(bb.key) && !(0, bE.e)(bb.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(bb.key))(bb) && this.hide()
          },
          Mb = () => {
            this.state.visible && this.setState({
              ...this.state,
              ...EE(this.state.target)
            })
          };
        document.addEventListener("focusin", ab, !0), document.addEventListener("focusout", Ub, !0), window.addEventListener("keydown", Ab, !0), window.addEventListener("resize", Mb);
        const Tb = eb.m.subscribe(xT.b, (() => {
            this.openChat()
          })),
          Eb = eb.m.subscribe(sb.e, (bb => {
            this.openForField(bb)
          }));
        return () => {
          bb(), document.removeEventListener("focusin", ab, !0), document.removeEventListener("focusout", Ub, !0), window.removeEventListener("keydown", Ab, !0), window.removeEventListener("resize", Mb), eb.m.unsubscribe(Tb), eb.m.unsubscribe(Eb), this.clearPendingChat(), this.hide(), this.ownedField = null
        }
      }
      openChat() {
        const bb = (0, DA.b)();
        bb ? document.activeElement !== bb.input ? (this.clearPendingChat(), this.pendingChatInput = bb.input, this.pendingChatTimeout = window.setTimeout((() => {
          this.pendingChatInput = null
        }), 250), bb.open()) : this.open(bb.input) : console.warn("controllerOpenChat with no chat mounted")
      }
      openForField(bb) {
        nb(bb) ? (document.activeElement !== bb && bb.focus(), document.activeElement === bb && this.open(bb)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", bb)
      }
      open(bb) {
        var ab;
        if (this.clearPendingChat(), this.ownedField = bb, this.state.visible && this.state.target === bb) return;
        this.restoreInputMode(), (bb => {
          Sb(bb) && 0 === bb.selectionStart && 0 === bb.selectionEnd && bb.setSelectionRange(bb.value.length, bb.value.length)
        })(bb), this.savedInputMode = bb.getAttribute("inputmode"), bb.setAttribute("inputmode", "none");
        const Ub = {
          ...AE,
          visible: !0,
          target: bb,
          kind: (0, DA.i)(bb) ? "chat" : null !== (ab = (0, DA.f)(bb).kind) && void 0 !== ab ? ab : null,
          accentsFirst: (Ab = BT.f.get().getCurrentLanguageCode(), tT.has(Ab)),
          ...EE(bb)
        };
        var Ab;
        const Mb = TE(Ub),
          Tb = ((bb, ab) => {
            for (let Ub = 0; Ub < bb.length; Ub++) {
              const Ab = bb[Ub].findIndex((bb => "char" === bb.type && bb.char === ab));
              if (-1 !== Ab) return {
                row: Ub,
                col: Ab
              }
            }
            return null
          })(Mb, "q");
        this.padInput.reset(), this.setState({
          ...Ub,
          focus: Tb,
          preferredX: VT(Mb, Tb)
        })
      }
      hide() {
        this.state.visible && (this.restoreInputMode(), this.padInput.reset(), this.setState(AE))
      }
      onFrame(bb) {
        if (this.releaseLostField()) return;
        const ab = document.activeElement;
        this.state.visible ? this.padInput.onVisibleFrame(bb) : nb(ab) && this.padInput.onHiddenFrame(bb, ab)
      }
      releaseLostField() {
        const bb = this.ownedField;
        return !(null === bb || bb.isConnected && document.activeElement === bb) && (this.ownedField = null, this.hide(), !0)
      }
      clearPendingChat() {
        window.clearTimeout(this.pendingChatTimeout), this.pendingChatInput = null
      }
      restoreInputMode() {
        const {
          target: bb
        } = this.state;
        bb && (null === this.savedInputMode ? bb.removeAttribute("inputmode") : bb.setAttribute("inputmode", this.savedInputMode), this.savedInputMode = null)
      }
    };
    var RE = Ub(8340);
    const kE = new Map(GT.map((bb => {
        let {
          command: ab,
          action: Ub
        } = bb;
        return [ab, Ub]
      }))),
      yE = {
        letters: "ABC",
        accents: "\xe0\xe9",
        symbols: "&123"
      },
      ZE = {
        chat: "controller:keyboardTargetChat",
        sign: "controller:keyboardTargetSign",
        nameTag: "controller:keyboardTargetNameTag",
        book: "controller:keyboardTargetBook",
        eY: "controller:keyboardTargetBookTitle"
      },
      DE = bb => {
        const ab = (() => {
          const [, bb] = (0, qb.useReducer)((bb => bb + 1), 0);
          return bb
        })();
        (0, qb.useEffect)((() => {
          if (!bb) return;
          const Ub = ["input", "select", "selectionchange", "keyup", "pointerup"];
          for (const Mb of Ub) bb.addEventListener(Mb, ab);
          document.addEventListener("selectionchange", ab);
          const Ab = new MutationObserver(ab);
          return Ab.observe(bb, {
            attributeFilter: ["placeholder"]
          }), () => {
            Ab.disconnect();
            for (const Ab of Ub) bb.removeEventListener(Ab, ab);
            document.removeEventListener("selectionchange", ab)
          }
        }), [bb, ab])
      },
      zE = bb => {
        bb.preventDefault()
      },
      xE = bb => {
        "mouse" !== bb.pointerType && bb.preventDefault()
      },
      iE = () => {
        var bb;
        const {
          t: ab
        } = (0, Mb.A)(), Ub = (() => {
          const [bb, ab] = (0, qb.useState)(jE.getState());
          return (0, qb.useEffect)((() => jE.subscribe((() => {
            ab(jE.getState())
          }))), []), bb
        })(), Ab = (0, Xb.x)(), Tb = (0, qb.useRef)(null);
        (0, Pb.t)(), (0, Xb.B)(), (0, qb.useEffect)((() => {
          const bb = jE.install(),
            ab = null;
          return () => {
            bb(), null === ab || void 0 === ab || ab()
          }
        }), []);
        const Eb = (0, qb.useMemo)((() => aE.map((bb => ab(bb)))), [ab]),
          Yb = Ub.visible && "chat" === Ub.kind ? Ub.target : null;
        DE(Yb);
        const Bb = null !== (bb = null === Yb || void 0 === Yb ? void 0 : Yb.value) && void 0 !== bb ? bb : "",
          eb = ((bb, ab, Ub) => {
            if (!bb.startsWith("/")) return [];
            const Ab = [];
            for (let Mb = ab.length - 1; Mb >= 0 && Ab.length < Ub; Mb--) {
              const Ub = ab[Mb].trim();
              Ub.startsWith(bb) && Ub !== bb && !Ab.includes(Ub) && Ab.push(Ub)
            }
            return Ab
          })(Bb, Bb.startsWith("/") ? (0, RE.c)() : [], aE.length),
          Lb = Bb.startsWith("/"),
          jb = Lb ? aE.map(((bb, ab) => {
            var Ub;
            return null !== (Ub = eb[ab]) && void 0 !== Ub ? Ub : ""
          })) : Eb;
        if ((0, qb.useEffect)((() => {
            jE.editor.setPhraseRow(jb, Lb)
          })), (0, qb.useEffect)((() => {
            const bb = Tb.current;
            if (bb) return bb.addEventListener("touchstart", zE, {
              passive: !1
            }), () => {
              bb.removeEventListener("touchstart", zE)
            }
          }), [Ub.visible]), !Ub.visible) return null;
        const Rb = TE(Ub),
          kb = CT(Rb),
          yb = bb => "char" === bb.type ? ST(bb.char, Ub.page, Ub.shift) : "phrase" === bb.type ? jb[bb.phraseIndex] : (bb => {
            switch (bb) {
              case "backspace":
                return "\u232b";
              case "shift":
                return "caps" === Ub.shift ? "\u21ea" : "\u21e7";
              case "page":
              case "otherPage":
                return yE[wT(Ub.page, Ub.accentsFirst)[bb]];
              case "space":
                return ab("controller:keyboardSpace");
              case "caretLeft":
                return "\u2190";
              case "caretRight":
                return "\u2192";
              case "newline":
                return "\u21b5";
              case "submit":
                return ab("chat" === Ub.kind ? "controller:keyboardSend" : "controller:keyboardDone");
              case "close":
                return "\u2715";
              case "channel":
                return "\u21c4"
            }
          })(bb.command),
          Zb = bb => {
            jE.editor.pressKey(bb)
          };
        return (0, Kb.jsxs)("div", {
          ref: Tb,
          className: rb()(DA.o, "top" === Ub.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
            PadKeyboardMultiline: Ub.target instanceof HTMLTextAreaElement
          }),
          style: {
            "--pad-keyboard-rows": Rb.length,
            "--pad-keyboard-height": `${Ub.maxHeightPx}px`
          },
          onPointerDown: xE,
          onMouseDown: zE,
          children: [(0, Kb.jsx)(fE, {
            target: Ub.target,
            label: Ub.kind ? ab(ZE[Ub.kind]) : Ub.target.placeholder || ab("controller:keyboardTargetText")
          }), (0, Kb.jsx)("div", {
            className: "PadKeyboardRows",
            children: Rb.map(((bb, ab) => (0, Kb.jsx)("div", {
              className: rb()("PadKeyboardRow", {
                PadKeyboardPhraseRow: "phrase" === bb[0].type
              }),
              children: bb.map(((bb, Mb) => {
                const Tb = Ab && Ub.focus.row === ab && Ub.focus.col === Mb,
                  Eb = "command" === bb.type ? kE.get(bb.command) : void 0;
                return (0, Kb.jsx)("div", {
                  className: "PadKeyboardKeySlot",
                  style: {
                    width: bb.width / kb * 100 + "%"
                  },
                  children: (0, Kb.jsxs)("div", {
                    className: rb()("PadKeyboardKey", {
                      PadKeyboardKeyFocused: Tb,
                      PadKeyboardKeyCommand: "command" === bb.type,
                      PadKeyboardKeyPhrase: "phrase" === bb.type,
                      PadKeyboardKeyActive: "command" === bb.type && "shift" === bb.command && "off" !== Ub.shift,
                      PadKeyboardKeySubmit: "command" === bb.type && "submit" === bb.command
                    }),
                    role: "button",
                    onClick: () => {
                      Zb({
                        row: ab,
                        col: Mb
                      })
                    },
                    onTouchEnd: bb => {
                      var Ub, Ab;
                      bb.preventDefault(), Ub = bb.changedTouches[0], Ab = bb.currentTarget.getBoundingClientRect(), Ub && Ub.clientX >= Ab.left && Ub.clientX <= Ab.right && Ub.clientY >= Ab.top && Ub.clientY <= Ab.bottom && Zb({
                        row: ab,
                        col: Mb
                      })
                    },
                    children: [(0, Kb.jsx)("span", {
                      className: "PadKeyboardKeyLabel",
                      children: yb(bb)
                    }), Ab && Eb && (0, Kb.jsx)(XT, {
                      className: "PadKeyboardKeyGlyph",
                      glyph: (0, vb.h)(Eb)
                    })]
                  })
                }, Mb)
              }))
            }, ab)))
          })]
        })
      },
      fE = bb => {
        let {
          target: ab,
          label: Ub
        } = bb;
        DE(ab);
        const Ab = (0, qb.useRef)(null),
          Mb = (0, qb.useRef)(null),
          Tb = ab instanceof HTMLTextAreaElement;
        (0, qb.useLayoutEffect)((() => {
          const bb = Ab.current,
            ab = Mb.current;
          Tb ? bb.scrollTop = ab.offsetTop - bb.clientHeight / 2 : bb.scrollLeft = ab.offsetLeft - bb.clientWidth / 2
        }));
        const {
          value: Eb,
          start: Yb,
          end: Bb
        } = ba(ab), eb = "password" === ab.type ? "\u2022".repeat(Eb.length) : Eb;
        return (0, Kb.jsxs)("div", {
          className: "PadKeyboardPreview",
          children: [(0, Kb.jsx)("div", {
            className: "PadKeyboardPreviewLabel SmallTextBold",
            children: Ub
          }), (0, Kb.jsxs)("div", {
            ref: Ab,
            className: rb()("PadKeyboardPreviewText", {
              PadKeyboardPreviewMultiline: Tb
            }),
            children: [(0, Kb.jsx)("span", {
              children: eb.slice(0, Yb)
            }), (0, Kb.jsx)("span", {
              ref: Mb,
              className: "PadKeyboardCaret"
            }), Yb !== Bb && (0, Kb.jsx)("span", {
              className: "PadKeyboardPreviewSelection",
              children: eb.slice(Yb, Bb)
            }), (0, Kb.jsx)("span", {
              children: eb.slice(Bb)
            }), 0 === eb.length && ab.placeholder && ab.placeholder !== Ub && (0, Kb.jsx)("span", {
              className: "PadKeyboardPreviewPlaceholder",
              children: ab.placeholder
            })]
          })]
        })
      };
    var mE = Ub(1294),
      pE = Ub(3094);
    const NE = function() {
        for (var bb = arguments.length, ab = new Array(bb), Ub = 0; Ub < bb; Ub++) ab[Ub] = arguments[Ub];
        return ab.map(vb.h)
      },
      WE = (bb, ab) => {
        const Ub = QA(bb);
        return Ub ? [{
          glyphs: [Ub],
          labelKey: ab
        }] : []
      },
      HE = [".BottomMiddleElements", ".BottomLeftElements > *", ".BottomRightElements > *", ".MiddleTextBottom .MiddleText"],
      IE = "--pad-hint-bar-clearance",
      dE = "[data-pad-hint-bar-avoid]",
      FE = bb => {
        const ab = [];
        for (const Ub of bb) ea(Ub) && ab.push(Ub.getBoundingClientRect());
        return ab
      },
      hE = bb => {
        if (!bb) return null;
        const ab = aM(),
          Ub = ab ? FE(((bb, ab) => {
            const Ub = bb.closest(dE);
            return Ub ? [Ub] : ("popup" === ab ? document : bb).querySelectorAll(dE)
          })(ab.root, ab.layer.kind)) : [],
          Ab = !ab || ab.root.hasAttribute("data-pad-shows-hud");
        if (((0, pE.g)(null === ab || void 0 === ab ? void 0 : ab.layer.kind, (0, pE.h)()) || Ab) && Ub.push(...FE(document.querySelectorAll(HE.join(",")))), 0 === Ub.length) return null;
        const {
          width: Mb,
          height: Tb
        } = bb.getBoundingClientRect(), Eb = window.innerHeight - 8, Yb = (0, pE.k)(Eb, {
          width: Mb,
          height: Tb
        }, window.innerWidth / 2, Ub, 8);
        return Yb === Eb ? null : Math.round(window.innerHeight - Yb)
      },
      GE = bb => {
        const ab = document.documentElement.style,
          Ub = bb ? `${Math.round(window.innerHeight-bb.getBoundingClientRect().top)}px` : "";
        ab.getPropertyValue(IE) !== Ub && (Ub ? ab.setProperty(IE, Ub) : ab.removeProperty(IE))
      },
      QE = () => {
        const {
          t: bb
        } = (0, Mb.A)(), {
          hideButtonHints: ab
        } = (0, Pb.t)(), Ub = (0, Xb.x)(), [Ab, Tb] = (0, qb.useState)(!1), [Eb, eb] = (0, qb.useState)([]), [Rb, kb] = (0, qb.useState)(null), yb = (0, qb.useRef)(null), Zb = (0, qb.useRef)(null);
        (0, YT.f)(sb.d, (bb => {
          Tb(bb)
        })), (0, YT.f)(pE.i, (() => {
          var bb;
          null === (bb = Zb.current) || void 0 === bb || bb.call(Zb)
        }));
        const Db = Ub && !ab && !Ab;
        return (0, qb.useEffect)((() => {
          if (!Db) return;
          let bb = null;
          const ab = () => {
            const ab = (() => {
                var bb;
                const ab = Lb.c.getActiveConsumerName(),
                  Ub = (0, pE.e)();
                if (Ub) {
                  const bb = (0, vb.h)(Ub),
                    ab = "emoteWheel" === Ub && "wheel" === (0, Pb.i)().emoteButton || !(0, jb.D)(Lb.c.getLastFrame().values, bb) ? {
                      glyphs: NE("menuConfirm"),
                      labelKey: "controller:menusSelect"
                    } : {
                      glyphs: [bb],
                      labelKey: "controller:wheelReleaseToPick"
                    };
                  return [{
                    glyphs: [(0, vb.v)(bb)],
                    labelKey: "controller:wheelChoose"
                  }, ab, {
                    glyphs: NE("menuBack"),
                    labelKey: "controller:wheelClose"
                  }]
                }
                const Ab = aM();
                if (!Ab || "focus" !== ab && "cursor" !== ab) return (0, pE.b)(vb.h);
                const Mb = [],
                  Tb = {
                    glyphs: NE("menuBack"),
                    labelKey: "controller:menusBack"
                  },
                  Eb = qa(Ab.root),
                  Yb = Eb ? !va(Eb) : Boolean(Ab.layer.close),
                  eb = !Eb && Ab.layer.closeLabelKey ? Ab.layer.closeLabelKey : Tb.labelKey,
                  Xb = Yb ? [{
                    ...Tb,
                    labelKey: eb
                  }] : [],
                  Rb = iA(Ab.layer.kind) ? [{
                    glyphs: NE("chat"),
                    labelKey: "controller:menusQuickChat"
                  }] : [];
                if ("cursor" === ab) return Mb.push({
                  glyphs: NE("menuConfirm"),
                  labelKey: "controller:menusClick"
                }), Mb.push({
                  glyphs: NE("menuSecondary"),
                  labelKey: "controller:menusRightClick"
                }), Mb.push(...Xb), Mb.push(...Rb), Mb.push({
                  glyphs: ["RightStick"],
                  labelKey: "controller:menusScroll"
                }), kM() && Mb.push({
                  glyphs: NE("menuToggleCursor"),
                  labelKey: "controller:menusFocusMode"
                }), Mb;
                const kb = wM.getFocused();
                kb && (0, xM.d)(kb) ? Mb.push({
                  glyphs: ["Left", "Right"],
                  labelKey: "controller:menusAdjust"
                }) : kb && Ga(kb) ? Mb.push({
                  glyphs: [],
                  labelKey: "controller:menusUseMouse"
                }) : Mb.push({
                  glyphs: NE("menuConfirm"),
                  labelKey: "controller:menusSelect"
                });
                const yb = kb ? null === (bb = MA(kb)) || void 0 === bb ? void 0 : bb.dataset.padSecondary : void 0;
                yb && Mb.push({
                  glyphs: NE("menuSecondary"),
                  labelKey: yb
                }), Mb.push(...null !== kb && void 0 !== kb && kb.closest("[data-pad-friends-column]") ? [Tb] : Xb), Mb.push(...Rb);
                const Zb = "home" === Ab.layer.kind;
                rA(Ab.root) || !NA(Ab.root) && !KA(Ab) ? Zb && Mb.push({
                  glyphs: NE("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusRows"
                }) : Mb.push({
                  glyphs: NE("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusTabs"
                }), Zb && (Mb.push(...WE("inventory", "controller:menusFriends")), yb || Mb.push({
                  glyphs: NE("menuSecondary"),
                  labelKey: "controller:menusSearch"
                }), Mb.push(...WE("pause", "controller:menusSettings")), Mb.push(...WE("leaderboard", "controller:menusNotifications")));
                const Db = Bb.c.get("openEverythingMenuName");
                return "inGame" === Bb.c.get("gameState") && "popup" !== Ab.layer.kind && null !== Db && ((0, bA.j)(Db) ? Mb.push(...WE("leaderboard", "controller:menusClose")) : Db !== SU.j.LOBBY_LEADERBOARD && Mb.push(...WE("leaderboard", "controller:menusLobby"))), Mb.push({
                  glyphs: NE("menuToggleCursor"),
                  labelKey: "controller:menusCursorMode"
                }), Mb
              })(),
              Ub = hE(yb.current),
              Ab = ((bb, ab) => `${bb.map((bb=>`${bb.glyphs.join("+")}:${bb.labelKey}`)).join("|")}@${ab}`)(ab, Ub);
            Ab !== bb && (bb = Ab, (0, Yb.unstable_batchedUpdates)((() => {
              eb(ab), kb(Ub)
            }))), GE(yb.current)
          };
          ab(), Zb.current = ab;
          const Ub = requestAnimationFrame(ab),
            Ab = setInterval(ab, 150);
          return () => {
            Zb.current = null, cancelAnimationFrame(Ub), clearInterval(Ab), GE(null)
          }
        }), [Db]), (0, qb.useLayoutEffect)((() => {
          if (!Db) return;
          if (0 === Eb.length) return void GE(null);
          const bb = hE(yb.current);
          bb === Rb ? GE(yb.current) : kb(bb)
        }), [Db, Eb, Rb]), Db && 0 !== Eb.length ? (0, Kb.jsx)("div", {
          ref: yb,
          className: "PadButtonHintBar SmallTextBold",
          style: null === Rb ? void 0 : {
            bottom: Rb
          },
          "aria-hidden": !0,
          children: Eb.map((ab => (0, Kb.jsxs)("div", {
            className: "PadButtonHint",
            children: [ab.glyphs.map((bb => (0, Kb.jsx)(XT, {
              glyph: bb,
              className: "PadButtonHintGlyph"
            }, bb))), (0, Kb.jsx)("span", {
              children: bb(ab.labelKey)
            })]
          }, ab.labelKey)))
        }) : null
      },
      qE = [Ya, "label", "[data-pad-slider]"].join(","),
      uE = "data-pad-cursor-probe",
      rE = bb => {
        var ab;
        const Ub = (bb => {
          const ab = [];
          for (let Ab = bb; Ab && Ab !== document.body && Ab !== document.documentElement && (ab.push(Ab), !(ab.length > 8)); Ab = Ab.parentElement);
          const Ub = document.documentElement.classList.contains(Xb.t) ? ab[ab.length - 1] : void 0;
          null === Ub || void 0 === Ub || Ub.setAttribute(uE, "");
          try {
            return ab.map((bb => ({
              element: bb,
              cursor: getComputedStyle(bb).cursor
            })))
          } finally {
            null === Ub || void 0 === Ub || Ub.removeAttribute(uE)
          }
        })(bb);
        if ("pointer" !== (null === (ab = Ub[0]) || void 0 === ab ? void 0 : ab.cursor)) return null;
        let Ab = 0;
        for (; Ab + 1 < Ub.length && "pointer" === Ub[Ab + 1].cursor;) Ab++;
        return Ub[Ab].element
      },
      KE = (bb, ab, Ub, Ab) => {
        const Mb = Ab.root.contains(bb) ? Ab.root : null;
        for (let Tb = bb; Tb && Tb !== document.body && Tb !== document.documentElement; Tb = Tb.parentElement) {
          if (Tb instanceof HTMLElement && Nb(Tb, ab) && Fb(Tb, ab, Ub)) return Tb;
          if (Tb === Mb) break
        }
        return "home" === Ab.layer.kind || "gamePage" === Ab.layer.kind ? ((bb, ab) => {
          const Ub = document.scrollingElement;
          return Ub instanceof HTMLElement && ![document.documentElement, document.body].some((ab => {
            const Ub = getComputedStyle(ab),
              Ab = "y" === bb ? Ub.overflowY : Ub.overflowX;
            return "hidden" === Ab || "clip" === Ab
          })) && Fb(Ub, bb, ab) ? Ub : null
        })(ab, Ub) : null
      };
    const oE = new class {
        constructor() {
          this.state = {
            x: 0,
            y: 0,
            speedRamp: 0
          }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this.confirmRepeat = (0, Rb.c)(jb.o), this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.layerRoot = null, this.layerOrder = 0, this.layerPoints = new WeakMap, this.page = null, this.pendingPageStart = null
        }
        install() {
          const bb = Lb.c.register({
              name: "cursor",
              isActive: () => "cursor" === yM(),
              onFrame: bb => {
                this.onFrame(bb)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: bb => (0, Lb.d)(bb) || bb === (0, vb.h)("menuConfirm") && Qa((0, Xb.e)())
            }),
            ab = (0, CA.l)((bb => {
              const ab = bb.getRoot();
              ab && this.layerPoints.delete(ab), ab === this.layerRoot && (this.layerRoot = null)
            })),
            Ub = eb.m.subscribe("appManagerUpdated|activeInputDevice", (bb => {
              "gamepad" !== bb && this.active && !this.hidden && this.hide()
            }));
          return () => {
            bb(), ab(), eb.m.unsubscribe(Ub), this.deactivate()
          }
        }
        getHighlighted() {
          return this.isVisible() ? this.interactive : null
        }
        isVisible() {
          return this.active && !this.hidden && (0, Xb.n)()
        }
        getPoint() {
          return {
            x: this.state.x,
            y: this.state.y
          }
        }
        hide() {
          this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.IR()
        }
        activate(bb) {
          this.active = !0, this.hidden = !1;
          const ab = XM();
          !ab || ab.root && ab.root !== bb.root ? this.jumpTo(this.hasPosition ? this.getPoint() : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          }) : (this.setLayer(bb), this.jumpTo(ab.point))
        }
        jumpTo(bb) {
          this.state = {
            x: bb.x,
            y: bb.y,
            speedRamp: 0
          }, this.hasPosition = !0, this.lastHitTestMs = -1 / 0
        }
        deactivate() {
          this.active && (this.active = !1, this.page = null, this.pendingPageStart = null, this.cancelPress(), this.clearHover(), this.draggedSlider = null, this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.IR())
        }
        onFrame(bb) {
          const ab = aM();
          if (!ab) return;
          if (this.active || this.activate(ab), this.followPage(ab)) return;
          this.followLayer(ab);
          const Ub = bb.wokeDevice ? (0, Xb.e)() : null;
          if (Ub && this.jumpTo(Ub), !(0, Xb.n)()) return void this.hide();
          const Ab = (0, vb.h)("menuToggleCursor");
          if (bb.wasPressed(Ab)) return Lb.c.consumeButton(Ab), void PM(this.getHandoff(null));
          if (this.handBackToFocus(bb)) return;
          const Mb = (0, vb.h)("menuConfirm"),
            Tb = (0, vb.h)("menuSecondary");
          if (bb.wasPressed((0, vb.h)("menuBack"))) return Fa(ab.root) || ua(ab.root) || UM(), void this.IR();
          if (tA(null, bb, ab)) return bb.wasReleased(Mb) && this.press && (this.updateHit(!1), this.updateConfirm(bb, Mb)), void this.IR();
          if (document.pointerLockElement) return void this.hide();
          const Eb = ZM() ? {
              x: 0,
              y: 0
            } : (bb => {
              const ab = (bb, ab) => (bb ? 1 : 0) - (ab ? 1 : 0);
              return {
                x: ab(bb.isHeld("Right"), bb.isHeld("Left")),
                y: ab(bb.isHeld("Down"), bb.isHeld("Up"))
              }
            })(bb),
            Yb = (0, Pb.i)().moveDeadzone,
            Bb = ((bb, ab) => {
              const Ub = (0, jb.i)(bb, zb(ab));
              return Math.hypot(Ub.x, Ub.y)
            })(bb.leftStick, Yb) > 0 || 0 !== Eb.x || 0 !== Eb.y;
          if (this.hidden) {
            const ab = bb.wasPressed(Mb),
              Ub = bb.wasPressed(Tb);
            if (!Bb && !fb(bb.rightStick) && !ab && !Ub && !bb.wokeDevice) return void this.IR();
            if (this.hidden = !1, this.updateHit(!1), ab || Ub) return ab && (this.press = {
              kind: "ignored"
            }, bb.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.IR()
          }
          this.movePendingPageStart(Bb);
          const eb = this.getPoint();
          this.state = ib(this.state, {
            stick: bb.leftStick,
            moveDeadzone: Yb,
            dpad: Eb,
            dtMs: bb.dtMs,
            cursorSpeedPercent: (0, Pb.i)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: this.getAssistContext()
          });
          const Rb = this.state.x !== eb.x || this.state.y !== eb.y,
            kb = [Mb, Tb].some((ab => bb.wasPressed(ab) || bb.wasReleased(ab)));
          (Rb || kb || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(Rb), this.updateConfirm(bb, Mb), this.updateSecondary(bb, Tb), this.updateScroll(bb, ab), this.IR()
        }
        followPage(bb) {
          const ab = "home" === bb.layer.kind || "gamePage" === bb.layer.kind,
            Ub = this.page;
          if (this.page = ab ? {
              key: (0, CA.o)(bb.layer),
              root: bb.root
            } : null, !this.page || !Ub || Ub.root !== bb.root || Ub.key === this.page.key) return !1;
          if (this.cancelPress(), this.secondaryArmed = !1, this.setLayer(bb), "hybrid" === LM()) return BM = null, EM = null, eM.lock(), !0;
          const {
            key: Ab
          } = this.page;
          return this.pendingPageStart = {
            root: bb.root,
            key: Ab,
            returning: wM.notePageEnteredByCursor(Ab),
            enteredAtMs: performance.now()
          }, !1
        }
        movePendingPageStart(bb) {
          const ab = this.pendingPageStart;
          if (!ab) return;
          if (bb || ab.root !== this.layerRoot) return void(this.pendingPageStart = null);
          const Ub = ab.returning ? wM.recallStop(ab.root, ab.key) : null;
          if (!Ub && ab.returning && performance.now() - ab.enteredAtMs < 1e3) return;
          const Ab = null !== Ub && void 0 !== Ub ? Ub : wM.pickInitial(ab.root, {
            includeDisabled: !0,
            waitForContent: !0,
            enteredAtMs: ab.enteredAtMs
          });
          Ab && (this.pendingPageStart = null, this.jumpTo(za(Ab)))
        }
        setLayer(bb) {
          this.layerRoot = bb.root, this.layerOrder = bb.order
        }
        followLayer(bb) {
          var ab;
          if (bb.root === this.layerRoot) return;
          null !== (ab = this.layerRoot) && void 0 !== ab && ab.isConnected && this.layerPoints.set(this.layerRoot, this.getPoint()), this.cancelPress(), this.draggedSlider = null, this.secondaryArmed = !1;
          const Ub = this.layerPoints.get(bb.root),
            Ab = Ub && bb.order <= this.layerOrder ? Ub : wM.getLayerStartPoint(bb.root);
          this.setLayer(bb), this.jumpTo(Ab)
        }
        getHandoff(bb) {
          var ab;
          return {
            point: this.getPoint(),
            element: null !== (ab = this.interactive) && void 0 !== ab ? ab : this.findDraggedSliderNearby(),
            direction: bb
          }
        }
        findDraggedSliderNearby() {
          const bb = this.draggedSlider;
          if (null === bb || void 0 === bb || !bb.isConnected) return null;
          const ab = bb.getBoundingClientRect(),
            {
              y: Ub
            } = this.getPoint();
          return Ub >= ab.top - 40 && Ub <= ab.bottom + 40 ? bb : null
        }
        handBackToFocus(bb) {
          if (!ZM()) return !1;
          const ab = jb.u.find((ab => bb.wasPressed(ab)));
          return !!ab && (Ub = this.getHandoff(ab), BM = MM(Ub), EM = null, eM.lock(), Lb.c.handOffHeldInput(), !0);
          var Ub
        }
        getAssistContext() {
          const bb = this.interactive;
          if (null === bb || void 0 === bb || !bb.isConnected) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const ab = bb.getBoundingClientRect();
          if (ab.width > .4 * window.innerWidth || ab.height > .4 * window.innerHeight) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const Ub = (0, Pb.i)().cursorMagnetism && !(0, gb.e)(bb) && !bb.closest("[data-pad-slider]"),
            Ab = this.magnet && this.magnet !== bb && this.magnet.isConnected ? this.magnet.getBoundingClientRect() : ab;
          return {
            overInteractive: !0,
            magnetTarget: Ub ? {
              x: Ab.left + Ab.width / 2,
              y: Ab.top + Ab.height / 2
            } : null
          }
        }
        updateHit(bb) {
          this.lastHitTestMs = performance.now();
          const ab = this.getPoint(),
            Ub = document.elementFromPoint(ab.x, ab.y),
            Ab = Ub && !(0, yb.k)(Ub) && (bb => {
              var ab;
              const Ub = aM();
              return !(Ub && !Ub.root.contains(bb) && !bb.closest(".tooltip-container")) || !(null !== (ab = document.getElementById("root")) && void 0 !== ab && ab.contains(bb))
            })(Ub) ? Ub : null;
          if (Ab !== this.hit) return Na(this.hit, Ab, ab), this.hit = Ab, void this.setInteractive(Ab ? (bb => {
            const ab = bb.closest(qE);
            if (ab) {
              var Ub, Ab;
              const bb = null !== (Ub = null === (Ab = ab.parentElement) || void 0 === Ab ? void 0 : Ab.closest("[data-pad-focusable]")) && void 0 !== Ub ? Ub : ab;
              return va(bb) ? {
                element: null,
                magnet: null
              } : {
                element: bb,
                magnet: ab
              }
            }
            const Mb = rE(bb);
            return {
              element: Mb,
              magnet: Mb
            }
          })(Ab) : {
            element: null,
            magnet: null
          });
          bb && Ab && Na(Ab, Ab, ab)
        }
        setInteractive(bb) {
          let {
            element: ab,
            magnet: Ub
          } = bb;
          this.interactive = ab, this.magnet = Ub
        }
        clearHover() {
          this.hit && Na(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
            element: null,
            magnet: null
          })
        }
        beginPress() {
          const bb = this.hit;
          if (!bb || Ga(bb)) return {
            kind: "ignored"
          };
          const ab = (0, xM.d)(bb),
            Ub = bb.closest("[data-pad-slider]");
          return ab && Ub ? {
            kind: "slider",
            slider: Ub,
            adjuster: ab
          } : (fa(bb, this.getPoint()), {
            kind: "pointer",
            target: bb
          })
        }
        applySliderFraction(bb) {
          var ab;
          const Ub = bb.slider.getBoundingClientRect(),
            Ab = Ub.height > Ub.width,
            Mb = null === (ab = bb.slider.querySelector("[data-pad-slider-handle]")) || void 0 === ab ? void 0 : ab.getBoundingClientRect(),
            Tb = Mb ? Ab ? Mb.height : Mb.width : 0,
            Eb = (Ab ? Ub.height : Ub.width) - Tb;
          if (Eb <= 0) return;
          const Yb = Ab ? Ub.bottom - Tb / 2 - this.state.y : this.state.x - Ub.left - Tb / 2;
          bb.adjuster.setFraction(Math.max(0, Math.min(1, Yb / Eb)))
        }
        updateConfirm(bb, ab) {
          bb.wasPressed(ab) && (this.press = bb.wokeDevice ? {
            kind: "ignored"
          } : this.beginPress(), this.draggedSlider = "slider" === this.press.kind ? this.press.slider : null, this.beginRepeat());
          const Ub = this.press;
          if (!Ub) return;
          if (bb.isHeld(ab)) return "slider" === Ub.kind && this.applySliderFraction(Ub), void this.updateRepeat();
          this.press = null;
          const Ab = this.repeated;
          if (this.endRepeat(), !bb.wasReleased(ab)) return void this.endPressWithoutClick(Ub);
          const Mb = this.getPoint(),
            Tb = this.hit;
          if ("slider" === Ub.kind && Ub.adjuster.endDrag(), "pointer" === Ub.kind) {
            const bb = null !== Tb && void 0 !== Tb ? Tb : Ub.target.isConnected ? Ub.target : null;
            bb && ma(bb, Mb);
            const ab = Tb && Ub.target.isConnected && !Ab ? ((bb, ab) => {
              for (let Ub = bb; Ub; Ub = Ub.parentElement)
                if (Ub.contains(ab)) return Ub;
              return null
            })(Ub.target, Tb) : null;
            ab && (wM.noteCursorActivation(ab), (0, yb.f)(ab, new MouseEvent("click", xa(Mb, 0, 0))), ha(ab), Da(ab) && Wa(ab))
          }
        }
        beginRepeat() {
          var bb, ab, Ub;
          const Ab = null !== (bb = null === (ab = this.hit) || void 0 === ab ? void 0 : ab.closest("[data-pad-repeat]")) && void 0 !== bb ? bb : null;
          this.repeatStop = Ab, this.repeatKey = null !== (Ub = null === Ab || void 0 === Ab ? void 0 : Ab.getAttribute("data-pad-repeat")) && void 0 !== Ub ? Ub : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
        }
        updateRepeat() {
          const bb = this.repeatStop;
          if (!bb) return;
          const ab = this.hit;
          bb.isConnected && !va(bb) && bb.getAttribute("data-pad-repeat") === this.repeatKey && ab && bb.contains(ab) ? bb.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, wM.noteCursorActivation(bb), (0, yb.f)(bb, new MouseEvent("click", xa(this.getPoint(), 0, 0)))) : this.repeatStop = null
        }
        endRepeat() {
          this.repeatStop = null, this.repeated = !1
        }
        endPressWithoutClick(bb) {
          "slider" === bb.kind && bb.adjuster.endDrag(), "pointer" === bb.kind && bb.target.isConnected && ma(bb.target, this.getPoint())
        }
        cancelPress() {
          this.endRepeat(), this.press && (this.endPressWithoutClick(this.press), this.press = null)
        }
        updateSecondary(bb, ab) {
          bb.wasPressed(ab) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !bb.isHeld(ab) && (this.secondaryArmed = !1, bb.wasReleased(ab) && this.hit && pa(this.hit, this.getPoint(), 2))
        }
        updateScroll(bb, ab) {
          const Ub = mb(bb.rightStick, bb.dtMs);
          if (0 === Ub.x && 0 === Ub.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          this.scrollRemainder = {
            x: this.scrollRemainder.x + Ub.x,
            y: this.scrollRemainder.y + Ub.y
          };
          const Ab = Math.trunc(this.scrollRemainder.x),
            Mb = Math.trunc(this.scrollRemainder.y);
          this.scrollRemainder = {
            x: this.scrollRemainder.x - Ab,
            y: this.scrollRemainder.y - Mb
          };
          const Tb = this.hit;
          if (!Tb) return;
          let Eb = !1;
          if (0 !== Mb) {
            const bb = KE(Tb, "y", Mb > 0 ? 1 : -1, ab);
            bb && (bb.scrollBy({
              top: Mb,
              behavior: "instant"
            }), Eb = !0)
          }
          if (0 !== Ab) {
            const bb = KE(Tb, "x", Ab > 0 ? 1 : -1, ab);
            bb && (bb.scrollBy({
              left: Ab,
              behavior: "instant"
            }), Eb = !0)
          }
          Eb && (this.lastHitTestMs = -1 / 0)
        }
        IR() {
          oa.set({
            x: this.state.x,
            y: this.state.y,
            visible: this.isVisible(),
            pressed: null !== this.press && "ignored" !== this.press.kind
          })
        }
      },
      lE = () => {
        const bb = (0, qb.useMemo)((() => new tb), []),
          ab = (0, Xb.x)();
        return (0, qb.useEffect)((() => {
          if (!ab) return;
          let Ub = 0,
            Ab = {
              of: null,
              atMs: 0,
              list: []
            };
          const Mb = document.getElementsByClassName(DM),
            Tb = bb => {
              for (const ab of [...Mb]) ab !== bb && ab.classList.remove(DM)
            },
            Eb = () => {
              var ab;
              Ub = requestAnimationFrame(Eb);
              const Mb = (() => {
                const bb = wM.getFocused();
                if (wM.isActive() && null !== bb && void 0 !== bb && bb.isConnected) return bb;
                const ab = oE.getHighlighted();
                return null !== ab && void 0 !== ab && ab.isConnected ? ab : null
              })();
              Tb(Mb), Mb && !Mb.classList.contains(DM) && Mb.classList.add(DM);
              const Yb = null !== (ab = null === Mb || void 0 === Mb ? void 0 : Mb.closest("[data-pad-reticle-box]")) && void 0 !== ab ? ab : Mb;
              bb.show(Yb ? ((bb, ab) => {
                let Ub = bb.left,
                  Ab = bb.top,
                  Mb = bb.right,
                  Tb = bb.bottom;
                for (const Eb of ab) {
                  if (!Eb) continue;
                  const bb = Gb(Eb);
                  Ub = Math.max(Ub, bb.left), Ab = Math.max(Ab, bb.top), Mb = Math.min(Mb, bb.right), Tb = Math.min(Tb, bb.bottom)
                }
                return Mb <= Ub || Tb <= Ab ? null : {
                  left: Ub,
                  top: Ab,
                  width: Mb - Ub,
                  height: Tb - Ab
                }
              })(Yb.getBoundingClientRect(), (bb => {
                const ab = performance.now();
                return (Ab.of !== bb || ab - Ab.atMs > 500) && (Ab = {
                  of: bb,
                  atMs: ab,
                  list: [Wb(bb, "y"), Wb(bb, "x")]
                }), Ab.list
              })(Yb)) : null)
            };
          return Ub = requestAnimationFrame(Eb), () => {
            cancelAnimationFrame(Ub), Tb(null), bb.hide()
          }
        }), [ab, bb]), (0, Kb.jsx)(wb, {
          placer: bb,
          className: "PadFocusRing"
        })
      },
      tE = (bb, ab) => {
        bb.style.transform = `translate3d(${ab.x}px, ${ab.y}px, 0)`, bb.classList.toggle("Visible", ab.visible), bb.classList.toggle("Pressed", ab.pressed)
      },
      wE = () => {
        const bb = (0, qb.useRef)(null);
        return (0, qb.useEffect)((() => {
          const ab = oa.subscribe((ab => {
            bb.current && tE(bb.current, ab)
          }));
          return bb.current && tE(bb.current, oa.get()), ab
        }), []), (0, Kb.jsx)("div", {
          ref: bb,
          className: "PadCursorView",
          "aria-hidden": "true",
          children: (0, Kb.jsx)("div", {
            className: "PadCursorGlyph",
            children: "+"
          })
        })
      },
      sE = "#ncmp__modal.ncmp__active",
      gE = [{
        id: "nitro-consent-banner",
        find: () => document.querySelector(sE) ? null : document.querySelector("#ncmp__tool > .ncmp__banner.ncmp__active"),
        startSelectors: ["[data-ncmp-cmd='reject']", "[data-ncmp-cmd='showModal']"]
      }, {
        id: "nitro-consent-modal",
        find: () => document.querySelector(sE),
        startSelectors: ["[data-ncmp-cmd='reject']"]
      }, {
        id: "google-consent",
        find: () => document.querySelector(".fc-consent-root"),
        startSelectors: [".fc-cta-do-not-consent", ".fc-cta-manage-options"]
      }],
      CE = "PadOverThirdParty",
      VE = new Set(gE.map((bb => bb.id))),
      OE = () => {
        const bb = gE.map((bb => {
            let {
              id: ab,
              find: Ub,
              startSelectors: Ab
            } = bb;
            return (0, CA.m)({
              id: ab,
              kind: "popup",
              getRoot: () => {
                const bb = Ub(),
                  ab = bb ? ((bb, ab) => {
                    var Ub;
                    for (const Ab of ab) {
                      const ab = bb.querySelector(Ab);
                      if (ab) return ab
                    }
                    return null !== (Ub = [...bb.querySelectorAll("button")].find((bb => !bb.matches(".fc-cta-consent, [data-ncmp-cmd='save']")))) && void 0 !== Ub ? Ub : null
                  })(bb, Ab) : null;
                if (bb && ab && !ab.hasAttribute("data-pad-default-focus")) {
                  for (const ab of bb.querySelectorAll("[data-pad-default-focus]")) ab.removeAttribute("data-pad-default-focus");
                  for (const ab of bb.querySelectorAll("[data-pad-hint-bar-avoid]")) ab.removeAttribute("data-pad-hint-bar-avoid");
                  ab.setAttribute("data-pad-default-focus", ""), ((bb, ab) => {
                    let Ub = bb;
                    for (let Ab = bb.parentElement; Ab && ab.contains(Ab) && !(Ab.getBoundingClientRect().height >= window.innerHeight / 2); Ab = Ab.parentElement) Ub = Ab;
                    return Ub
                  })(ab, bb).setAttribute("data-pad-hint-bar-avoid", "")
                }
                return bb
              },
              close: null,
              memoryKey: null
            })
          })),
          ab = document.documentElement,
          Ub = Eb.g.onFrame((() => {
            const bb = (0, Xb.n)() ? aM() : null,
              Ub = !!bb && (Ab = bb.layer, VE.has(Ab.id));
            var Ab;
            ab.classList.contains(CE) !== Ub && ab.classList.toggle(CE, Ub)
          }));
        return () => {
          for (const ab of bb) ab();
          Ub(), ab.classList.remove(CE)
        }
      },
      cE = "PadLargePointer",
      JE = () => {
        (0, qb.useEffect)((() => {
          const bb = (0, yb.i)(document.body),
            ab = wM.install(),
            Ub = oE.install(),
            Ab = OE();
          return () => {
            bb(), ab(), Ub(), Ab()
          }
        }), []);
        const {
          largePointer: bb
        } = (0, Pb.t)(), ab = (0, mE.o)() && bb;
        return (0, qb.useEffect)((() => {
          if (ab) return document.documentElement.classList.add(cE), () => {
            document.documentElement.classList.remove(cE)
          }
        }), [ab]), (0, Yb.createPortal)((0, Kb.jsxs)(Kb.Fragment, {
          children: [(0, Kb.jsx)(QE, {}), (0, Kb.jsx)(lE, {}), (0, Kb.jsx)(wE, {})]
        }), document.body)
      };
    var nE = Ub(8352),
      SE = Ub(8378),
      bY = Ub(8365);
    Ub(8381);
    const aY = (bb, ab) => {
        const [Ub, Ab] = (0, qb.useState)(!1), [Mb, Tb] = (0, qb.useState)(null), Eb = (0, qb.useRef)(null), Yb = (0, qb.useCallback)((bb => {
          Eb.current = bb, Tb(bb)
        }), []), Bb = (0, qb.useCallback)((() => {
          Ab(!1), Yb(null)
        }), [Yb]), vb = (0, qb.useCallback)((() => {
          Ab(!0)
        }), []), Lb = (0, qb.useCallback)(((bb, ab) => {
          Yb((0, bY.F)(bb, ab, Eb.current))
        }), [Yb]);
        (0, qb.useLayoutEffect)((() => (ab(Ub), (0, pE.n)(bb, Ub), eb.m.IR(pE.i), () => {
          ab(!1), (0, pE.n)(bb, !1), eb.m.IR(pE.i)
        })), [Ub, bb, ab]), (0, YT.f)("appManagerUpdated|activeInputDevice", (bb => {
          "gamepad" !== bb && Bb()
        })), (0, YT.f)("appManagerUpdated|gameState", (bb => {
          "inGame" !== bb && Bb()
        }));
        const Pb = () => {
          (0, bA.o)() && Bb()
        };
        return (0, YT.f)("appManagerUpdated|openEverythingMenuName", Pb), (0, YT.f)("appManagerUpdated|openInGameMenuName", Pb), {
          open: Ub,
          picked: Mb,
          pickedRef: Eb,
          show: vb,
          aim: Lb,
          close: Bb
        }
      },
      UY = bb => {
        let {
          className: ab,
          slotCount: Ub,
          picked: Ab,
          slotLabel: Mb,
          renderSlot: Tb,
          centre: Eb
        } = bb;
        const Yb = Array.from({
          length: Ub
        }, ((bb, ab) => ab));
        return (0, Kb.jsx)("div", {
          className: rb()("EmoteWheelOverlay PadRadialWheel", ab),
          children: (0, Kb.jsxs)("div", {
            className: "EmoteWheel",
            style: {
              width: 2 * bY.s + "rem",
              height: 2 * bY.s + "rem"
            },
            children: [(0, Kb.jsxs)("svg", {
              className: "EmoteWheelSvg",
              viewBox: `0 0 ${bY.l} ${bY.l}`,
              children: [Yb.map((bb => (0, Kb.jsx)("path", {
                d: (0, bY.u)(bb, Ub, bY.d, bY.g, bY.i),
                className: rb()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: bb === Ab
                }),
                "aria-label": Mb(bb)
              }, bb))), (0, Kb.jsx)("circle", {
                className: "EmoteWheelOuterRing",
                cx: bY.d,
                cy: bY.d,
                r: bY.i
              }), (0, Kb.jsx)("circle", {
                className: "EmoteWheelInnerRing",
                cx: bY.d,
                cy: bY.d,
                r: bY.g
              }), null !== Ab && (0, Kb.jsx)("path", {
                className: "EmoteWheelWedgeOutline",
                d: (0, bY.u)(Ab, Ub, bY.d, bY.g, bY.i)
              })]
            }), Yb.map((bb => {
              const ab = (0, bY.z)(bb, Ub);
              return (0, Kb.jsx)("div", {
                className: rb()("PadRadialWheelSlot SmallTextBold", {
                  PadRadialWheelSlotPicked: bb === Ab
                }),
                style: {
                  left: `calc(50% + ${bY.c*Math.cos(ab)}rem)`,
                  top: `calc(50% + ${bY.c*Math.sin(ab)}rem)`
                },
                "aria-hidden": !0,
                children: Tb(bb)
              }, bb)
            })), (0, Kb.jsx)("div", {
              className: "EmoteWheelHint SmallTextBold",
              children: Eb
            })]
          })
        })
      },
      AY = aE.length,
      MY = () => {
        const {
          t: bb
        } = (0, Mb.A)(), ab = aY("chat", xA.p), Ub = (0, qb.useMemo)((() => aE.map((ab => bb(ab)))), [bb]);
        return (0, YT.f)(xA.o, (() => {
          ab.open || (0, nE.e)() || (0, SE.r)() || "inGame" !== Bb.c.get("gameState") || (0, bA.o)() || !(0, DA.b)() || ab.show()
        })), (0, YT.f)(xA.d, (bb => {
          ab.open && ab.aim(bb, AY)
        })), (0, YT.f)(xA.k, (() => {
          var bb;
          if (!ab.open) return;
          const Ab = ab.pickedRef.current;
          null !== Ab ? UE.claim(performance.now()) && (ab.close(), null === (bb = (0, DA.b)()) || void 0 === bb || bb.sendLine(Ub[Ab])) : ab.close()
        })), (0, YT.f)(xA.g, ab.close), ab.open ? (0, Kb.jsx)(UY, {
          className: "QuickChatWheel",
          slotCount: AY,
          picked: ab.picked,
          slotLabel: bb => Ub[bb],
          renderSlot: bb => Ub[bb],
          centre: null !== ab.picked ? Ub[ab.picked] : bb("controller:quickChatPick")
        }) : null
      },
      TY = () => {
        const {
          t: bb
        } = (0, Mb.A)(), ab = aY("actionButton", SE.s), [Ub, Ab] = (0, qb.useState)([]);
        if ((0, YT.f)(SE.k, (bb => {
            ab.open || (0, nE.e)() || (0, xA.c)() || "inGame" !== Bb.c.get("gameState") || (0, bA.o)() || (Ab(bb), ab.show())
          })), (0, YT.f)(SE.c, (bb => {
            ab.open && ab.aim(bb, Ub.length)
          })), (0, YT.f)(SE.h, (() => {
            if (!ab.open) return;
            const bb = ab.pickedRef.current;
            ab.close(), null !== bb && eb.m.IR(SE.n, Ub[bb])
          })), (0, YT.f)(SE.e, ab.close), !ab.open) return null;
        const Tb = null !== ab.picked ? Ub[ab.picked] : null;
        return (0, Kb.jsx)(UY, {
          className: "ActionWheel",
          slotCount: Ub.length,
          picked: ab.picked,
          slotLabel: ab => {
            const Ab = Ub[ab];
            return "reload" === Ab.kind ? bb("controller:gameplayReload") : "customButton" === Ab.kind ? Ab.description || Ab.icon : "touchButton" === Ab.kind && "string" === typeof Ab.label ? Ab.label : ""
          },
          renderSlot: bb => (0, Kb.jsx)(RT, {
            action: Ub[bb]
          }),
          centre: Tb ? (0, Kb.jsx)(RT, {
            action: Tb
          }) : bb("controller:actionWheelPick")
        })
      };
    var EY = Ub(101);
    const YY = () => ((0, qb.useEffect)((() => {
        var bb, ab;
        const Ub = (0, yb.i)(document.getElementById("root")),
          Ab = (0, Xb.i)(),
          Mb = (() => {
            const bb = [eb.m.subscribe(gM.g, (() => {
                cM("blockBreak")
              })), eb.m.subscribe("damagedByOtherPlayer", (() => {
                cM("damage")
              })), eb.m.subscribe("yourAttackHit", (bb => {
                let {
                  hitSelf: ab
                } = bb;
                ab || cM("hit")
              }))],
              ab = Eb.g.onActivePadChanged((bb => {
                bb && cM("connect")
              }));
            return () => {
              for (const ab of bb) eb.m.unsubscribe(ab);
              ab()
            }
          })(),
          Tb = (() => {
            const bb = new UT({
              getVisitId: aT.e,
              peekVisitId: aT.peekVisitSessionId,
              readReportedVisitId: () => {
                const bb = bT.j.getItem(AT);
                return "string" === typeof bb ? bb : null
              },
              writeReportedVisitId: bb => {
                bT.j.setItem(AT, bb)
              },
              isPadActive: Xb.n,
              getPadFamily: () => {
                var bb, ab;
                return null !== (bb = null === (ab = Eb.g.getActivePad()) || void 0 === ab ? void 0 : ab.family) && void 0 !== bb ? bb : null
              },
              canReport: nM.f,
              getInputType: SM.b,
              GX: nM.k
            });
            let ab = 0,
              Ub = null;
            const Ab = Mb => {
                null === Ub && ("notReady" !== bb.check(Mb) || null !== Ub || ab >= 20 || (ab++, Ub = setTimeout((() => {
                  Ub = null, Ab(!1)
                }), 3e3)))
              },
              Mb = eb.m.subscribe("appManagerUpdated|activeInputDevice", (() => {
                Ab(!0)
              })),
              Tb = (0, aT.j)((() => {
                ab = 0, Ab(!0)
              }));
            return () => {
              eb.m.unsubscribe(Mb), Tb(), null !== Ub && clearTimeout(Ub)
            }
          })(),
          Yb = Eb.g.onFrame(((bb, ab) => {
            const Ub = (0, Xb.r)(bb);
            Lb.c.dispatch(bb, ab, Ub)
          }));
        let vb = null !== (bb = null === (ab = Eb.g.getActivePad()) || void 0 === ab ? void 0 : ab.family) && void 0 !== bb ? bb : null;
        const jb = Eb.g.onActivePadChanged((bb => {
            var ab, Ub;
            (Lb.c.reset(), (0, Xb.u)(), eb.m.IR(Eb.d, bb), (null !== (ab = null === bb || void 0 === bb ? void 0 : bb.family) && void 0 !== ab ? ab : null) !== vb) && (vb = null !== (Ub = null === bb || void 0 === bb ? void 0 : bb.family) && void 0 !== Ub ? Ub : null, eb.m.IR(Pb.b, (0, Pb.i)()));
            !bb && (0, Xb.n)() && (0, Xb.v)(Bb.c.get("isTouchScreen") ? "touch" : "keyboardMouse")
          })),
          Rb = () => {
            "visible" !== document.visibilityState && Lb.c.clear()
          },
          kb = () => {
            Lb.c.clear()
          };
        document.addEventListener("visibilitychange", Rb), window.addEventListener("blur", kb), Eb.g.start(), (0, JM.l)();
        const Zb = null;
        return () => {
          Ub(), Ab(), Mb(), Tb(), Yb(), jb(), document.removeEventListener("visibilitychange", Rb), window.removeEventListener("blur", kb), Eb.g.stop(), null === Zb || void 0 === Zb || Zb()
        }
      }), []), (0, Kb.jsxs)("div", {
        className: "ControllerRoot",
        children: [(0, Kb.jsx)(iT, {}), (0, Kb.jsx)(FT, {}), (0, Kb.jsx)(hT, {}), (0, Kb.jsx)(iE, {}), (0, Kb.jsx)(JE, {}), (0, Kb.jsx)(MY, {}), (0, Kb.jsx)(TY, {})]
      })),
      BY = () => EY.featureFlags.useControllerSupport ? (0, Kb.jsx)(YY, {}) : null;
    var eY = Ub(7764),
      vY = Ub(8387);
    const LY = new Set(JM.j),
      PY = bb => `${vY.m}${(0,Pb.m)()}/${bb}`,
      XY = bb => {
        if (!(0, vY.l)(bb)) return null;
        const [ab, Ub] = bb.slice(vY.m.length).split("/");
        return (0, eY.g)(ab) && LY.has(Ub) ? (0, JM.i)(ab, Ub) : null
      };
    var jY = Ub(8394);
    const RY = () => {
        const {
          t: bb
        } = (0, Mb.A)(), ab = (0, Xb.x)(), {
          gameState: Ub,
          isUiHidden: Ab
        } = (0, Bb.n)(["gameState", "isUiHidden"]), {
          hideButtonHints: Tb,
          sneakMode: Eb
        } = (0, Pb.t)(), [Yb, eb] = (0, qb.useState)(jY.b);
        return (0, YT.f)(xT.r, eb), ab && !Ab && "inGame" === Ub && Yb ? (0, Kb.jsxs)("div", {
          className: "PadSneakChip SmallTextBold",
          children: [!Tb && (0, Kb.jsx)(XT, {
            glyph: (0, vb.h)("toggle" === Eb ? "sneak" : "sneakToggle")
          }), (0, Kb.jsx)("span", {
            children: bb("controller:gameplaySneaking")
          })]
        }) : null
      },
      kY = 12,
      yY = bb => {
        let {
          trigger: ab,
          className: Ub,
          children: Ab
        } = bb;
        const Mb = (0, qb.useRef)(null);
        return (0, qb.useEffect)((() => {
          let bb = 0;
          const Ub = Wb(ab, "y"),
            Ab = () => {
              bb = requestAnimationFrame(Ab);
              const Tb = Mb.current;
              if (!Tb || null === ab || void 0 === ab || !ab.isConnected) return;
              const {
                left: Eb,
                top: Yb
              } = function(bb, ab, Ub) {
                let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                const Tb = bb.left + bb.width / 2,
                  Eb = Math.max(kY, Ub.width - kY - ab.width),
                  Yb = Math.min(Math.max(Tb - ab.width / 2, kY), Eb),
                  Bb = Ub.height - Ab;
                let eb = 0,
                  vb = Bb;
                if (Mb) {
                  const bb = Math.max(0, Mb.top),
                    Ab = Math.min(Bb, Mb.bottom);
                  Ab - bb >= Math.max(Ub.height / 2, ab.height + 24) && (eb = bb, vb = Ab)
                }
                const Lb = bb.top + bb.height / 2 < (eb + vb) / 2 ? vb - kY - ab.height : eb + kY;
                return {
                  left: Yb,
                  top: Math.max(kY, Lb)
                }
              }(ab.getBoundingClientRect(), {
                width: Tb.offsetWidth,
                height: Tb.offsetHeight
              }, {
                width: window.innerWidth,
                height: window.innerHeight
              }, parseFloat(document.documentElement.style.getPropertyValue(IE)) || 0, null !== Ub && void 0 !== Ub && Ub.isConnected ? Ub.getBoundingClientRect() : null);
              Tb.style.transform = `translate3d(${Math.round(Eb)}px, ${Math.round(Yb)}px, 0)`, Tb.style.visibility = "visible"
            };
          return Ab(), () => {
            cancelAnimationFrame(bb)
          }
        }), [ab]), (0, Kb.jsx)("div", {
          ref: Mb,
          className: Ub,
          style: {
            position: "fixed",
            left: 0,
            top: 0,
            visibility: "hidden"
          },
          children: Ab
        })
      };
    var ZY = Ub(990),
      DY = Ub(8403),
      zY = Ub(1352),
      xY = Ub(8410),
      iY = Ub(8418);
    const fY = {
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
      mY = () => {
        const {
          t: bb
        } = (0, Mb.A)(), ab = (0, Xb.x)(), Ub = (0, DY.b)(), Ab = (0, HT.h)("_tasks"), Tb = (0, HT.h)("_availableLeaderboards");
        if (!ab) return null;
        const Eb = (bb => {
          let {
            hasShop: ab,
            hasTasksOrLeaderboards: Ub,
            canInvite: Ab
          } = bb;
          const Mb = [];
          return ab && Mb.push("shop"), Ub && Mb.push("tasks"), Ab && Mb.push("invite"), Mb.push("leave"), Mb
        })({
          hasShop: Ub,
          hasTasksOrLeaderboards: !(!Ab && !Tb),
          canInvite: !!EY.featureFlags.canUseInviteLinks
        });
        return (0, Kb.jsx)("div", {
          className: "PadLobbyShortcuts",
          children: Eb.map((ab => {
            const {
              icon: Ub,
              labelKey: Ab
            } = fY[ab], Mb = "leave" === ab ? zY.D : zY.g;
            return (0, Kb.jsx)(Mb, {
              className: "PadLobbyShortcut",
              onClick: () => {
                (bb => {
                  switch (bb) {
                    case "shop":
                      return eb.m.IR(iY.m), void Bb.c.set({
                        openEverythingMenuName: SU.j.SHOP
                      });
                    case "tasks":
                      return void eb.m.IR("toggleMenu", "retentionFeatures");
                    case "invite":
                      return void eb.m.IR("toggleMenu", "inviteLink");
                    case "leave":
                      (0, xY.e)()
                  }
                })(ab)
              },
              children: (0, Kb.jsxs)("div", {
                className: "PadLobbyShortcutInner",
                children: [(0, Kb.jsx)(ZY.e, {
                  name: Ub
                }), (0, Kb.jsx)("span", {
                  children: bb(Ab)
                })]
              })
            }, ab)
          }))
        })
      };
    var pY = Ub(1874);
    const NY = jb.t,
      WY = ["forward", "backward", "left", "right", "sprint"],
      HY = bb => bb.ctrlKey || bb.altKey || "Alt" === bb.key || "ArrowUp" === bb.key || "ArrowDown" === bb.key || "Tab" === bb.code || "/" === bb.key || "Slash" === bb.code;
    class IY {
      constructor() {
        this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(jb.N).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
      }
      setArmed(bb) {
        this.armed = bb
      }
      blocksGameplay() {
        return this.armed || this.consumeNextFrame
      }
      onKeyDown(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !this.armed || ab ? !bb.repeat && this.swallowedKeys.delete(bb.code) ? {
          swallow: !1,
          continues: !1
        } : {
          swallow: this.swallowedKeys.has(bb.code),
          continues: !1
        } : "Escape" === bb.key || bb.repeat && !this.swallowedKeys.has(bb.code) ? {
          swallow: !1,
          continues: !1
        } : Ub ? {
          swallow: !1,
          continues: !0
        } : (this.swallowedKeys.add(bb.code), {
          swallow: !0,
          continues: (0, Xb.j)(bb)
        })
      }
      onKeyUp(bb) {
        return this.swallowedKeys.delete(bb.code)
      }
      forgetKeys() {
        this.swallowedKeys.clear()
      }
      onPadFrame(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Ab = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Mb = (0, jb.n)(bb.values, this.previousHeld),
          Tb = null === Ub ? -1 : (0, jb.j)(Ub),
          Eb = Tb >= 0 && Mb[Tb] && !this.previousHeld[Tb],
          Yb = Mb.some(((bb, ab) => bb && !this.previousHeld[ab] && ab !== Tb)),
          Bb = Math.hypot(bb.leftStick.x, bb.leftStick.y) >= NY,
          eb = Math.hypot(bb.rightStick.x, bb.rightStick.y) >= NY,
          vb = Bb && !this.leftStickWasPressed || eb && !this.rightStickWasPressed;
        this.previousHeld = Mb, this.leftStickWasPressed = Bb, this.rightStickWasPressed = eb;
        let Lb = !1;
        this.consumeNextFrame && (this.consumeNextFrame = !1, Lb = !0);
        const Pb = !ab && Eb && !Ab,
          Xb = !Pb && this.armed && !ab && (Yb || vb);
        return (Pb || Xb) && (this.consumeNextFrame = !0, this.consumeAfterContinue = Xb, Lb = !0), {
          continues: Xb,
          back: Pb,
          consumeHeld: Lb
        }
      }
      consumeLeavesMoveStick() {
        return this.consumeAfterContinue
      }
    }
    const dY = new Set([...pY.m, ...pY.F]),
      FY = bb => ((bb, ab, Ub) => {
        const Ab = Object.keys(ab).filter((Ab => !Ub.has(Ab) && ab[Ab].includes(bb)));
        return Ab.length > 0 && Ab.every((bb => WY.includes(bb)))
      })(bb, pY.x, dY),
      hY = (bb, ab, Ub) => {
        const Ab = new IY,
          Mb = bb => {
            if (!bb.isTrusted) return;
            const {
              swallow: Ub,
              continues: Mb
            } = Ab.onKeyDown(bb, !(0, Xb.C)(bb) || (0, sM.e)() || (0, bA.o)(), FY(bb.code));
            Ub && (bb.stopImmediatePropagation(), HY(bb) && bb.preventDefault()), Mb && ((0, Xb.v)("keyboardMouse"), ab())
          },
          Tb = bb => {
            bb.isTrusted && Ab.onKeyUp(bb) && (bb.stopImmediatePropagation(), HY(bb) && bb.preventDefault())
          },
          Yb = () => {
            Ab.forgetKeys()
          };
        window.addEventListener("keydown", Mb, !0), window.addEventListener("keyup", Tb, !0), window.addEventListener("blur", Yb);
        const Bb = Eb.g.onFrame((bb => {
            const Mb = Lb.c.getActiveConsumerName(),
              Tb = Ub(),
              Eb = Tb ? (0, vb.h)("menuBack") : null,
              Yb = null !== Mb && "gameplay" !== Mb,
              {
                continues: Bb,
                back: eb,
                consumeHeld: jb
              } = Ab.onPadFrame(bb, Yb, Eb, (0, Xb.o)(bb));
            if (jb) {
              const bb = (0, Pb.i)().swapSticks ? "right" : "left";
              Lb.c.consumeAllHeld(Ab.consumeLeavesMoveStick() ? bb : null)
            }
            eb ? null === Tb || void 0 === Tb || Tb() : Bb && ab()
          })),
          eb = (0, sM.h)(`pressToContinue:${bb}`, (() => Ab.blocksGameplay()));
        return {
          setArmed: bb => {
            Ab.setArmed(bb)
          },
          dispose: () => {
            window.removeEventListener("keydown", Mb, !0), window.removeEventListener("keyup", Tb, !0), window.removeEventListener("blur", Yb), Bb(), eb()
          }
        }
      };
    var GY = Ub(4673),
      QY = Ub(3102),
      qY = Ub(2851),
      uY = Ub(7771);
    const rY = bb => {
        let {
          text: ab
        } = bb;
        return (0, Kb.jsx)("div", {
          className: "ControllerSettingsHeading",
          children: ab
        })
      },
      KY = bb => {
        let {
          label: ab,
          hint: Ub,
          options: Ab,
          value: Tb,
          onChange: Eb
        } = bb;
        const {
          t: Yb
        } = (0, Mb.A)();
        return (0, Kb.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, Kb.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: [(0, Kb.jsxs)("div", {
              className: "ControllerChoiceText",
              children: [(0, Kb.jsx)("div", {
                className: "SliderText",
                children: ab
              }), Ub && (0, Kb.jsx)("div", {
                className: "ControllerSettingsHint",
                children: Ub
              })]
            }), (0, Kb.jsx)(qY.c, {
              options: Ab.map((bb => ({
                label: "label" in bb ? bb.label : Yb(bb.labelKey),
                value: bb.value
              }))),
              value: Tb,
              onChange: bb => {
                Eb(bb.value)
              }
            })]
          })
        })
      },
      oY = bb => {
        let {
          settingKey: ab,
          label: Ub,
          range: Ab,
          format: Mb
        } = bb;
        const Tb = (0, Pb.t)();
        return (0, Kb.jsx)(GY.g, {
          name: Ub,
          min: Ab.min,
          max: Ab.max,
          step: Ab.step,
          padStep: Ab.step,
          initValue: Tb[ab],
          format: Mb,
          onChange: bb => {
            (0, Pb.p)({
              [ab]: (0, uY.q)(bb, Ab)
            })
          }
        })
      };
    var lY = Ub(8423),
      tY = Ub(8425);
    const wY = bb => bb instanceof DOMException && ("SecurityError" === bb.name || "NotAllowedError" === bb.name),
      sY = bb => {
        const [ab] = [...bb.controllers].sort(((bb, ab) => tY.o[bb] - tY.o[ab]));
        return tY.k[ab]
      },
      gY = bb => {
        (0, lY.b)().allowPhoneMotion().catch((ab => {
          bb && wY(ab) ? bb() : console.warn("Could not enable the motion sensor", ab)
        }))
      },
      CY = {
        waiting: "controller:settingsGyroPhoneWaiting",
        noSensor: "controller:settingsGyroPhoneNoSensor",
        on: "controller:settingsGyroPhoneOn",
        denied: "controller:settingsGyroPhoneDenied"
      },
      VY = bb => {
        let {
          status: ab
        } = bb;
        const {
          t: Ub
        } = (0, Mb.A)(), [Ab, Tb] = (0, qb.useState)(null), Eb = `${ab.controllers.join(",")}|${ab.phoneMotion}`;
        (0, qb.useEffect)((() => {
          Tb(null)
        }), [Eb]);
        const Yb = () => {
          (0, lY.b)().connectController().then((bb => {
            Tb(bb > 0 ? "openFailed" : null)
          })).catch((bb => {
            wY(bb) ? Tb("needsClick") : console.warn("Could not connect motion controller", bb)
          }))
        };
        if (ab.hidSupported) {
          let bb = Ub("controller:settingsGyroConnectHint");
          return "needsClick" === Ab ? bb = Ub("controller:settingsGyroConnectNeedsClick") : "openFailed" === Ab ? bb = Ub("controller:settingsGyroOpenFailed") : ab.controllers.length > 0 && (bb = Ub("controller:settingsGyroConnected", {
            name: sY(ab)
          })), (0, Kb.jsx)("div", {
            className: "SettingBox ControllerChoiceSetting",
            children: (0, Kb.jsxs)("div", {
              className: "ControllerChoiceRow",
              children: [(0, Kb.jsx)("div", {
                className: "ControllerSettingsHint",
                children: bb
              }), (0, Kb.jsx)(zY.g, {
                onClick: Yb,
                children: Ub("controller:settingsGyroConnect")
              })]
            })
          })
        }
        if ("needsPermission" === ab.phoneMotion) return (0, Kb.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, Kb.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: ["needsTap" === Ab && (0, Kb.jsx)("div", {
              className: "ControllerSettingsHint",
              children: Ub("controller:settingsGyroAllowNeedsTap")
            }), (0, Kb.jsx)(zY.g, {
              onClick: () => {
                gY((() => {
                  Tb("needsTap")
                }))
              },
              children: Ub("controller:settingsGyroAllowMotion")
            })]
          })
        });
        const Bb = CY[ab.phoneMotion];
        return Bb ? (0, Kb.jsx)("div", {
          className: "ControllerSettingsHint",
          children: Ub(Bb)
        }) : null
      },
      OY = () => {
        const {
          t: bb
        } = (0, Mb.A)(), ab = (0, Pb.t)(), Ub = (0, lY.d)(), Ab = (0, Xb.B)(), Tb = !Ub.hidSupported && Ub.phoneSupported && !Ub.padConnected, Eb = (Ub.hidSupported || Ub.phoneSupported) && !Tb, Yb = (0, vb.h)("pause");
        return (0, Kb.jsxs)(Kb.Fragment, {
          children: [(0, Kb.jsx)(rY, {
            text: bb("controller:settingsGyro")
          }), Tb && (0, Kb.jsx)("div", {
            className: "ControllerSettingsHint",
            children: bb("controller:settingsGyroPhoneNeedsController")
          }), !Eb && !Tb && (0, Kb.jsx)("div", {
            className: "ControllerSettingsHint",
            children: bb(Ub.hidBlocked || Ub.phoneBlocked ? "controller:settingsGyroBlocked" : "controller:settingsGyroUnsupported")
          }), Eb && (0, Kb.jsx)(GY.d, {
            label: bb(Ub.hidSupported ? "controller:settingsGyroToggle" : "controller:settingsGyroTogglePhone"),
            checked: ab.gyroAiming,
            onClick: bb => {
              var ab, Ub;
              (0, Pb.p)({
                gyroAiming: bb
              });
              const Ab = null === (ab = null === (Ub = navigator.userActivation) || void 0 === Ub ? void 0 : Ub.isActive) || void 0 === ab || ab;
              if (!bb || !Ab) return;
              const Mb = (0, lY.b)(),
                Tb = Mb.getStatus();
              Tb.hidSupported ? Mb.connectControllerIfNoneGranted().catch((bb => {
                console.warn("Motion controller picker unavailable", bb)
              })) : "needsPermission" === Tb.phoneMotion && gY()
            },
            circleInfoText: bb(Ub.hidSupported ? "controller:settingsGyroToggleInfo" : "controller:settingsGyroToggleInfoPhone")
          }), Eb && Ub.hidSupported && (0, Kb.jsx)("div", {
            className: "ControllerSettingsHint",
            children: bb("controller:settingsGyroSteamHint")
          }), Eb && ab.gyroAiming && (0, Kb.jsxs)(Kb.Fragment, {
            children: [(0, Kb.jsx)(VY, {
              status: Ub
            }), (0, Kb.jsx)(oY, {
              settingKey: "gyroSensitivity",
              label: bb("controller:settingsGyroSensitivity"),
              range: uY.O,
              format: uY.E
            }), (0, Kb.jsx)(KY, {
              label: bb("controller:settingsGyroActivation"),
              hint: "aiming" === ab.gyroActivation && (0, Kb.jsx)(QY.c, {
                text: bb("controller:settingsGyroAimingHint", {
                  button: QY.f
                }),
                glyph: (0, vb.h)("use")
              }),
              options: uY.K,
              value: ab.gyroActivation,
              onChange: bb => {
                (0, Pb.p)({
                  gyroActivation: bb
                })
              }
            }), "button" === ab.gyroActivation && (0, Kb.jsx)(KY, {
              label: bb("controller:settingsGyroButton"),
              hint: bb("controller:settingsGyroButtonHint"),
              options: uY.n.filter((bb => bb !== Yb || bb === ab.gyroButton)).map((bb => ({
                label: PT(Ab, bb),
                value: bb
              }))),
              value: ab.gyroButton,
              onChange: bb => {
                (0, Pb.p)({
                  gyroButton: bb
                })
              }
            })]
          })]
        })
      };
    var cY = Ub(1738);
    const JY = () => {
      const {
        t: bb
      } = (0, Mb.A)(), ab = (0, Pb.t)(), Ub = (0, Xb.B)();
      return (0, Kb.jsxs)(Kb.Fragment, {
        children: [(0, Kb.jsx)(rY, {
          text: bb("controller:settingsAccessibility")
        }), (0, Kb.jsx)(GY.d, {
          label: bb("controller:settingsSwapConfirmBack"),
          checked: (0, vb.G)(ab.swapConfirmBack, Ub),
          onClick: bb => {
            (0, Pb.p)({
              swapConfirmBack: bb === (0, vb.G)(null, Ub) ? null : bb
            }), cY.f.showMessage({
              translationKey: "controller:settingsSwapToast"
            })
          },
          circleInfoText: bb("controller:settingsSwapConfirmBackInfo")
        }), (0, Kb.jsx)(KY, {
          label: bb("controller:settingsButtonRepeat"),
          hint: bb("controller:settingsButtonRepeatHint"),
          options: uY.m,
          value: ab.buttonRepeat,
          onChange: bb => {
            (0, Pb.p)({
              buttonRepeat: bb
            })
          }
        }), (0, Kb.jsx)(KY, {
          label: bb("controller:settingsTapHoldTime"),
          hint: bb("controller:settingsTapHoldTimeHint"),
          options: uY.kb,
          value: ab.tapHoldTime,
          onChange: bb => {
            (0, Pb.p)({
              tapHoldTime: bb
            })
          }
        }), (0, Kb.jsx)(KY, {
          label: bb("controller:settingsEmoteButton"),
          hint: bb("wheel" === ab.emoteButton ? "controller:settingsEmoteButtonWheelHint" : "controller:settingsEmoteButtonTapHoldHint"),
          options: uY.x,
          value: ab.emoteButton,
          onChange: bb => {
            (0, Pb.p)({
              emoteButton: bb
            })
          }
        }), (0, Kb.jsx)(KY, {
          label: bb("controller:settingsAttackMode"),
          hint: bb("toggle" === ab.attackMode ? "controller:settingsAttackToggleHint" : "controller:settingsAttackHoldHint"),
          options: uY.k,
          value: ab.attackMode,
          onChange: bb => {
            (0, Pb.p)({
              attackMode: bb
            })
          }
        }), (0, Kb.jsx)(GY.d, {
          label: bb("controller:settingsLargePointer"),
          checked: ab.largePointer,
          onClick: bb => {
            (0, Pb.p)({
              largePointer: bb
            })
          },
          circleInfoText: bb("controller:settingsLargePointerInfo")
        })]
      })
    };
    var nY = Ub(8427);
    const SY = new class {
        constructor(bb) {
          this.router = bb, this.current = null
        }
        claim(bb, ab) {
          const Ub = this.current;
          Ub && (this.current = null, Ub.release(), Ub.onTakenOver());
          const Ab = this.router.register({
              ...bb,
              name: "capture"
            }),
            Mb = {
              release: Ab,
              onTakenOver: ab
            };
          return this.current = Mb, () => {
            this.current === Mb && (this.current = null), Ab()
          }
        }
      }(Lb.c),
      bB = bb => {
        (0, qb.useEffect)((() => {
          if (!bb) return;
          const ab = bb();
          let Ub = !1;
          const Ab = () => {
              Ub || (Ub = !0, ab.onEnd())
            },
            Mb = SY.claim({
              isActive: () => !Ub,
              onFrame: bb => {
                ab.onFrame(bb, Ab)
              }
            }, Ab),
            Tb = void 0 === ab.timeoutMs ? void 0 : window.setTimeout(Ab, ab.timeoutMs),
            Eb = bb => {
              "Escape" === bb.key && (bb.preventDefault(), bb.stopPropagation(), Ab())
            };
          return window.addEventListener("keydown", Eb, !0), () => {
            Ub = !0, Mb(), window.clearTimeout(Tb), window.removeEventListener("keydown", Eb, !0)
          }
        }), [bb])
      },
      aB = bb => {
        let {
          row: ab,
          capturing: Ub,
          onCapture: Ab,
          holdFillRef: Tb,
          onRebind: Eb,
          swapped: Yb
        } = bb;
        const {
          t: Bb
        } = (0, Mb.A)();
        if ("fixed" === ab.kind) return (0, Kb.jsx)("div", {
          className: "ControlRow PadControlRow PadControlRowFixed",
          children: (0, Kb.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, Kb.jsx)("div", {
              className: "ControlName",
              children: Bb(ab.labelKey)
            }), (0, Kb.jsx)("div", {
              className: "ControlBindingsContainer",
              children: (0, Kb.jsx)("div", {
                className: "ControlBindingsList",
                children: (0, Kb.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  children: (0, Kb.jsx)(XT, {
                    glyph: "move" === ab.stick ? (0, vb.q)() : (0, vb.o)()
                  })
                })
              })
            })]
          })
        });
        const {
          action: eb
        } = ab, Lb = (0, vb.h)(eb), Pb = (0, vb.j)(eb), Xb = Lb !== Pb && (0, vb.c)(eb, Pb);
        return (0, Kb.jsxs)("div", {
          className: rb()("ControlRow PadControlRow", {
            Capturing: Ub
          }),
          children: [(0, Kb.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, Kb.jsx)("div", {
              className: "ControlName",
              children: Bb(uY.g[eb])
            }), (0, Kb.jsxs)("div", {
              className: "ControlBindingsContainer",
              children: [!Ub && (0, Kb.jsxs)("div", {
                className: "ControlBindingsList",
                children: [(0, Kb.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Ab(eb)
                  },
                  children: (0, Kb.jsx)(XT, {
                    glyph: Lb
                  })
                }), Xb && (0, Kb.jsx)("div", {
                  className: "ControlBinding PadBindingReset",
                  title: Bb("controller:settingsReset"),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Eb(eb, Pb)
                  },
                  children: (0, Kb.jsx)(ZY.e, {
                    name: "arrows-rotate"
                  })
                })]
              }), Ub && (0, Kb.jsxs)("div", {
                className: "ControlBindingAddInput",
                children: [(0, Kb.jsxs)("div", {
                  className: "PadCaptureBox",
                  children: [(0, Kb.jsx)("span", {
                    children: Bb("controller:settingsCapturePrompt")
                  }), (0, Kb.jsx)("div", {
                    ref: Tb,
                    className: "PadCaptureHoldFill"
                  })]
                }), (0, Kb.jsx)("div", {
                  className: "ControlBindingAddCancel",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Ab(null)
                  },
                  children: "\xd7"
                })]
              }), Ub && (0, Kb.jsx)("div", {
                className: "PadCaptureHint",
                children: (0, Kb.jsx)(QY.c, {
                  text: Bb((0, vb.c)(eb, (0, vb.h)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
                    button: QY.f
                  }),
                  glyph: (0, vb.h)("menuBack")
                })
              })]
            })]
          }), Yb.map((bb => (0, Kb.jsx)("div", {
            className: "ControlRowWarning PadSwapNotice",
            children: (0, Kb.jsx)(QY.c, {
              text: Bb("controller:settingsSwapNotice", {
                action: Bb(uY.g[bb]),
                button: QY.f
              }),
              glyph: (0, vb.h)(bb)
            })
          }, bb))), Ub && (0, Kb.jsx)("div", {
            className: "PadCaptureTimer",
            style: {
              animationDuration: `${uY.o}ms`
            }
          })]
        })
      },
      UB = [],
      AB = bb => {
        let {
          layoutSetting: ab
        } = bb;
        const {
          t: Ub
        } = (0, Mb.A)(), Ab = (0, Pb.t)();
        (0, Xb.B)();
        const Tb = (0, qb.useRef)(null),
          [Eb, Yb] = (0, qb.useState)(null),
          Bb = (0, qb.useCallback)(((bb, ab) => {
            const Ub = (0, Pb.i)().bindings;
            (0, vb.D)(bb, ab);
            const Ab = (0, vb.r)(Ub, bb);
            Yb(Ab.length > 0 ? {
              action: bb,
              swapped: Ab
            } : null)
          }), []),
          [eb, Rb] = ((bb, ab) => {
            const [Ub, Ab] = (0, qb.useState)(null), Mb = (0, qb.useMemo)((() => Ub ? () => {
              const Mb = (0, vb.h)("menuBack"),
                Tb = new uY.c(Mb, (0, vb.h)("menuConfirm"), (bb => (0, vb.c)(Ub, bb)));
              return {
                onFrame: (Ab, Eb) => {
                  var Yb;
                  const Bb = Ab.frame.timestampMs,
                    eb = Tb.update({
                      ...Ab,
                      isDown: bb => (0, jb.D)(Ab.frame.values, bb)
                    }, Bb);
                  null === (Yb = bb.current) || void 0 === Yb || Yb.style.setProperty("width", 100 * Tb.getBindHoldProgress(Bb) + "%"), eb && ("bind" === eb.kind ? (Lb.c.consumeButton(eb.button), ab(Ub, eb.button)) : Lb.c.consumeButton(Mb), Eb())
                },
                onEnd: () => {
                  Ab(null)
                },
                timeoutMs: uY.o
              }
            } : null), [Ub, bb, ab]);
            return bB(Mb), [Ub, Ab]
          })(Tb, Bb),
          kb = bb => {
            bb && Yb(null), Rb(bb)
          };
        (0, qb.useEffect)((() => {
          if (!Eb) return;
          const bb = window.setTimeout((() => {
            Yb(null)
          }), uY.jb);
          return () => {
            window.clearTimeout(bb)
          }
        }), [Eb]);
        const yb = !Ab.swapSticks && 0 === Object.keys(Ab.bindings).length;
        return (0, Kb.jsxs)("div", {
          className: "ControlsContainer PadControlsContainer",
          children: [(0, Kb.jsx)("div", {
            className: "SliderText",
            children: Ub("controller:settingsRemap")
          }), (0, Kb.jsx)("div", {
            className: "ControllerSettingsHint",
            children: Ub("controller:settingsRemapHint")
          }), (0, Kb.jsx)(zY.D, {
            className: "ResetBindingsButton PadResetAllButton",
            disabled: yb,
            onClick: () => {
              kb(null), Yb(null), (0, vb.F)()
            },
            children: Ub("controller:settingsResetAll")
          }), ab, uY.bb.map(((bb, ab) => (0, Kb.jsx)(nY.d, {
            title: Ub(bb.titleKey),
            defaultOpen: 0 === ab,
            children: bb.rows.map((bb => (0, Kb.jsx)(aB, {
              row: bb,
              capturing: "action" === bb.kind && bb.action === eb,
              onCapture: kb,
              holdFillRef: Tb,
              onRebind: Bb,
              swapped: "action" === bb.kind && (null === Eb || void 0 === Eb ? void 0 : Eb.action) === bb.action ? Eb.swapped : UB
            }, "action" === bb.kind ? bb.action : bb.labelKey)))
          }, bb.titleKey)))]
        })
      },
      MB = bb => {
        let {
          deadzone: ab,
          dotRef: Ub,
          labelKey: Ab
        } = bb;
        const {
          t: Tb
        } = (0, Mb.A)();
        return (0, Kb.jsxs)("div", {
          className: "ControllerTesterStick",
          children: [(0, Kb.jsxs)("div", {
            className: "ControllerTesterStickCircle",
            children: [(0, Kb.jsx)("div", {
              className: "ControllerTesterDeadzone",
              style: {
                width: 100 * ab + "%",
                height: 100 * ab + "%"
              }
            }), (0, Kb.jsx)("div", {
              ref: Ub,
              className: "ControllerTesterDot"
            })]
          }), (0, Kb.jsx)("div", {
            className: "ControllerTesterStickLabel",
            children: Tb(Ab)
          })]
        })
      },
      TB = (bb, ab, Ub, Ab) => {
        var Mb;
        bb && (bb.style.left = 50 + 50 * Math.max(-1, Math.min(1, ab.x)) + "%", bb.style.top = 50 + 50 * Math.max(-1, Math.min(1, ab.y)) + "%", null === (Mb = bb.parentElement) || void 0 === Mb || Mb.classList.toggle("Active", Ab || Math.hypot(ab.x, ab.y) > Ub))
      },
      EB = bb => {
        const ab = {
            deadzone: bb.moveDeadzone,
            labelKey: "controller:settingsActionMove"
          },
          Ub = {
            deadzone: bb.lookDeadzone,
            labelKey: "controller:settingsActionLook"
          };
        return bb.swapSticks ? {
          left: Ub,
          right: ab
        } : {
          left: ab,
          right: Ub
        }
      },
      YB = () => {
        const {
          t: bb
        } = (0, Mb.A)(), ab = (() => {
          const [bb, ab] = (0, qb.useState)((() => Eb.g.getActivePad()));
          return (0, YT.f)(Eb.d, (() => {
            ab(Eb.g.getActivePad())
          })), bb
        })(), Ub = EB((0, Pb.t)()), Ab = (0, qb.useRef)(null), Tb = (0, qb.useRef)(null), Yb = (0, qb.useRef)([]), Bb = (0, qb.useRef)(null), eb = (0, qb.useRef)(null), [Xb, Rb] = (bb => {
          const [ab, Ub] = (0, qb.useState)(!1), Ab = (0, qb.useMemo)((() => ab ? () => {
            const ab = (0, vb.h)("menuBack"),
              Ab = new uY.f;
            return {
              onFrame: (Ub, Mb) => {
                var Tb;
                const Eb = Ab.update({
                  pressed: Ub.wasPressed(ab),
                  PY: Ub.isHeld(ab)
                }, Ub.frame.timestampMs);
                null === (Tb = bb.current) || void 0 === Tb || Tb.style.setProperty("width", 100 * Eb + "%"), Eb >= 1 && (Lb.c.consumeButton(ab), Mb())
              },
              onEnd: () => {
                Ub(!1)
              }
            }
          } : null), [ab, bb]);
          return bB(Ab), [ab, Ub]
        })(Tb);
        (0, qb.useEffect)((() => {
          const bb = bb => {
            for (const Ub of jb.P) {
              const ab = (0, jb.j)(Ub),
                Ab = Yb.current[ab];
              if (!Ab) continue;
              const Mb = bb.values[ab];
              Ab.classList.toggle("Pressed", Mb >= jb.t), (0, jb.H)(ab) && Ab.style.setProperty("--trigger-fill", `${Math.round(100*Mb)}%`)
            }
            const ab = EB((0, Pb.i)());
            TB(Bb.current, bb.leftStick, ab.left.deadzone, bb.values[(0, jb.j)("LS")] >= jb.t), TB(eb.current, bb.rightStick, ab.right.deadzone, bb.values[(0, jb.j)("RS")] >= jb.t)
          };
          return ab || bb((0, jb.s)()), Eb.g.onFrame(bb)
        }), [ab]), (0, qb.useEffect)((() => {
          ab || Rb(!1)
        }), [ab, Rb]), (0, qb.useEffect)((() => {
          var bb;
          Xb && (null === (bb = Ab.current) || void 0 === bb || bb.scrollIntoView({
            block: "nearest"
          }))
        }), [Xb]);
        const kb = uY._.find((bb => bb.value === (null === ab || void 0 === ab ? void 0 : ab.family)));
        return (0, Kb.jsxs)("div", {
          ref: Ab,
          className: rb()("SettingBox ControllerTester", {
            Testing: Xb
          }),
          children: [(0, Kb.jsxs)("div", {
            className: "ControllerTesterHeader",
            children: [(0, Kb.jsxs)("div", {
              className: "ControllerTesterInfo",
              children: [ab && (0, Kb.jsx)("div", {
                children: bb("controller:settingsTesterFamily", {
                  family: kb ? bb(kb.labelKey) : ab.family
                })
              }), ab && (0, Kb.jsx)("div", {
                className: "ControllerTesterPadId",
                children: ab.id
              }), !ab && (0, Kb.jsx)("div", {
                children: bb("controller:settingsTesterNoPad")
              })]
            }), (ab || Xb) && (0, Kb.jsx)(zY.g, {
              className: "ControllerTesterToggle",
              onClick: () => {
                Rb(!Xb)
              },
              children: bb(Xb ? "controller:settingsTesterStop" : "controller:settingsTesterStart")
            })]
          }), ab && !Xb && (0, Kb.jsx)("div", {
            className: "ControllerSettingsHint",
            children: bb("controller:settingsTesterHint")
          }), Xb && (0, Kb.jsxs)("div", {
            className: "ControllerTesterBanner",
            children: [(0, Kb.jsx)(QY.c, {
              text: bb("controller:settingsTesterTesting", {
                button: QY.f
              }),
              glyph: (0, vb.h)("menuBack")
            }), (0, Kb.jsx)("div", {
              ref: Tb,
              className: "ControllerTesterExitFill"
            })]
          }), (0, Kb.jsxs)("div", {
            className: "ControllerTesterBody",
            children: [(0, Kb.jsx)(MB, {
              deadzone: Ub.left.deadzone,
              dotRef: Bb,
              labelKey: Ub.left.labelKey
            }), (0, Kb.jsx)("div", {
              className: "ControllerTesterButtons",
              children: jb.P.map((bb => {
                const Ub = (0, jb.j)(bb);
                return (0, Kb.jsx)("div", {
                  ref: bb => {
                    Yb.current[Ub] = bb
                  },
                  className: (0, jb.H)(Ub) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
                  children: (0, Kb.jsx)(XT, {
                    glyph: bb,
                    family: null === ab || void 0 === ab ? void 0 : ab.family
                  })
                }, bb)
              }))
            }), (0, Kb.jsx)(MB, {
              deadzone: Ub.right.deadzone,
              dotRef: eb,
              labelKey: Ub.right.labelKey
            })]
          })]
        })
      },
      BB = (0, qb.memo)((function() {
        const {
          t: bb
        } = (0, Mb.A)(), ab = (0, Pb.t)(), [Ub, Ab] = (0, qb.useState)(!1);
        return (0, qb.useEffect)((() => {
          if (!Ub) return;
          const bb = window.setTimeout((() => {
            Ab(!1)
          }), uY.jb);
          return () => {
            window.clearTimeout(bb)
          }
        }), [Ub]), (0, Kb.jsxs)("div", {
          className: "SettingsMenuRightInner ControllerCategory",
          children: [(0, Kb.jsx)(rY, {
            text: bb("controller:settingsLook")
          }), (0, Kb.jsx)(oY, {
            settingKey: "lookSensitivityX",
            label: bb("controller:settingsLookSensitivityX"),
            range: uY.eb,
            format: uY.G
          }), (0, Kb.jsx)(oY, {
            settingKey: "lookSensitivityY",
            label: bb("controller:settingsLookSensitivityY"),
            range: uY.eb,
            format: uY.G
          }), (0, Kb.jsx)(oY, {
            settingKey: "aimLookSensitivity",
            label: bb("controller:settingsAimLookSensitivity"),
            range: uY.h,
            format: uY.G
          }), (0, Kb.jsx)(KY, {
            label: bb("controller:settingsLookCurve"),
            hint: bb("controller:settingsLookCurveHint"),
            options: uY.X,
            value: ab.lookCurve,
            onChange: bb => {
              (0, Pb.p)({
                lookCurve: bb
              })
            }
          }), (0, Kb.jsx)(GY.d, {
            label: bb("controller:settingsInvertLookX"),
            checked: ab.invertLookX,
            onClick: bb => {
              (0, Pb.p)({
                invertLookX: bb
              })
            }
          }), (0, Kb.jsx)(GY.d, {
            label: bb("controller:settingsInvertLookY"),
            checked: ab.invertLookY,
            onClick: bb => {
              (0, Pb.p)({
                invertLookY: bb
              })
            }
          }), (0, Kb.jsx)(oY, {
            settingKey: "lookDeadzone",
            label: bb("controller:settingsLookDeadzone"),
            range: uY.v,
            format: uY.B
          }), (0, Kb.jsx)(OY, {}), (0, Kb.jsx)(rY, {
            text: bb("controller:settingsMovement")
          }), (0, Kb.jsx)(oY, {
            settingKey: "moveDeadzone",
            label: bb("controller:settingsMoveDeadzone"),
            range: uY.v,
            format: uY.B
          }), (0, Kb.jsx)(GY.d, {
            label: bb("controller:settingsAutoSprint"),
            checked: ab.autoSprint,
            onClick: bb => {
              (0, Pb.p)({
                autoSprint: bb
              })
            },
            circleInfoText: bb("controller:settingsAutoSprintInfo")
          }), (0, Kb.jsx)(KY, {
            label: bb("controller:settingsSneak"),
            options: uY.fb,
            value: ab.sneakMode,
            onChange: bb => {
              (0, Pb.p)({
                sneakMode: bb
              })
            }
          }), (0, Kb.jsx)(rY, {
            text: bb("controller:settingsButtons")
          }), (0, Kb.jsx)(KY, {
            label: bb("controller:settingsPromptFamily"),
            options: uY._,
            value: ab.promptFamily,
            onChange: bb => {
              (0, Pb.p)({
                promptFamily: bb
              })
            }
          }), (0, Kb.jsx)(GY.d, {
            label: bb("controller:settingsHideButtonHints"),
            checked: ab.hideButtonHints,
            onClick: bb => {
              (0, Pb.p)({
                hideButtonHints: bb
              })
            }
          }), (0, Kb.jsx)(GY.d, {
            label: bb("controller:settingsVibration"),
            checked: ab.vibration,
            onClick: bb => {
              (0, Pb.p)({
                vibration: bb
              }), bb && cM("preview")
            }
          }), (0, Kb.jsx)(oY, {
            settingKey: "cursorSpeed",
            label: bb("controller:settingsCursorSpeed"),
            range: uY.t,
            format: uY.G
          }), (0, Kb.jsx)(GY.d, {
            label: bb("controller:settingsCursorMagnetism"),
            checked: ab.cursorMagnetism,
            onClick: bb => {
              (0, Pb.p)({
                cursorMagnetism: bb
              })
            }
          }), (0, Kb.jsx)(GY.d, {
            label: bb("controller:settingsMenuBackToCategories"),
            checked: ab.menuBackToCategories,
            onClick: bb => {
              (0, Pb.p)({
                menuBackToCategories: bb
              })
            }
          }), (0, Kb.jsx)(AB, {
            layoutSetting: (0, Kb.jsxs)(Kb.Fragment, {
              children: [vb.f.map((Ub => (0, Kb.jsx)(GY.d, {
                label: bb(uY.T[Ub]),
                checked: (0, vb.z)(Ub, ab),
                onClick: bb => {
                  Ab(!(0, vb.K)(Ub, bb))
                }
              }, Ub))), Ub && (0, Kb.jsx)("div", {
                className: "PadLayoutRefusedNotice",
                role: "status",
                children: bb("controller:settingsLayoutRefusedToast")
              })]
            })
          }), (0, Kb.jsx)(JY, {}), (0, Kb.jsx)(rY, {
            text: bb("controller:settingsAlternatives")
          }), (0, Kb.jsx)("div", {
            className: "ControllerSettingsHint",
            children: bb("controller:settingsAlternativesHint")
          }), (0, Kb.jsx)(KY, {
            label: bb("controller:settingsMenuNavigation"),
            hint: bb("controller:settingsMenuNavigationHint"),
            options: uY.Y,
            value: ab.menuNavigation,
            onChange: bb => {
              (0, Pb.p)({
                menuNavigation: bb
              })
            }
          }), (0, Kb.jsx)(KY, {
            label: bb("controller:settingsInventoryNavigation"),
            hint: bb("controller:settingsInventoryNavigationHint"),
            options: uY.R,
            value: ab.inventoryNavigation,
            onChange: bb => {
              (0, Pb.p)({
                inventoryNavigation: bb
              })
            }
          }), (0, Kb.jsx)(KY, {
            label: bb("controller:settingsQuickChat"),
            hint: bb("controller:settingsQuickChatHint"),
            options: uY.$,
            value: ab.quickChat,
            onChange: bb => {
              (0, Pb.p)({
                quickChat: bb
              })
            }
          }), (0, Kb.jsx)(KY, {
            label: bb("controller:settingsLeaderboardButton"),
            hint: bb("controller:settingsLeaderboardButtonHint"),
            options: uY.U,
            value: ab.leaderboardButton,
            onChange: bb => {
              (0, Pb.p)({
                leaderboardButton: bb
              })
            }
          }), (0, Kb.jsx)(rY, {
            text: bb("controller:settingsTester")
          }), (0, Kb.jsx)(YB, {})]
        })
      }));
    (0, Mb.b)(Ab);
    for (const XB of (0, Tb.n)()) XB.connected ? Eb.g.handleConnectionEvent(XB) : Eb.g.handleDisconnectionEvent(XB);
    const eB = () => null !== Eb.g.getActivePad(),
      vB = () => cU.getState(),
      LB = () => cU.isSteppingSlots(),
      PB = (bb, ab) => {
        const Ub = wM.getFocused();
        wM.isActive() && Ub && bb.contains(Ub) && wM.setFocus(ab, {
          scroll: !1
        })
      }
  },
  7743: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Bb,
      d: () => eb
    });
    var Ab = Ub(1324),
      Mb = Ub(1315);
    const Tb = {
        "054c": "playstation",
        "057e": "nintendo"
      },
      Eb = "28de",
      Yb = new Set(["1205"]),
      Bb = (bb, ab) => {
        const Ub = (0, Ab.e)(bb);
        if ((null === Ub || void 0 === Ub ? void 0 : Ub.vendor) === Eb) return Yb.has(Ub.product) ? "steamdeck" : "xbox";
        if (Ub && Tb[Ub.vendor]) return Tb[Ub.vendor];
        if ((0, Mb.e)(bb)) return "nintendo";
        const Bb = `${bb} ${null!==ab&&void 0!==ab?ab:""}`.toLowerCase();
        return /dualsense|dualshock|playstation|sony/.test(Bb) ? "playstation" : /nintendo|switch|joy-con|pro controller/.test(Bb) ? "nintendo" : /steam deck/.test(Bb) ? "steamdeck" : "xbox"
      },
      eb = bb => {
        var ab;
        return (null === (ab = (0, Ab.e)(bb)) || void 0 === ab ? void 0 : ab.vendor) === Eb
      }
  },
  7782: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => eb,
      d: () => Yb
    });
    var Ab = Ub(7739);
    const Mb = ["capture", "keyboard", "wheel", "inventory", "cursor", "focus", "gameplay"],
      Tb = new Set(["capture", "gameplay"]),
      Eb = ["Up", "Down", "Left", "Right"],
      Yb = bb => Eb.includes(bb),
      Bb = .25;
    const eb = new class {
      constructor() {
        this.consumers = new Map, this.activeName = null, this.PY = new Array(Ab.N).fill(!1), this.previousHeld = new Array(Ab.N).fill(!1), this.consumedButtons = new Array(Ab.N).fill(!1), this.suppressedReleases = new Array(Ab.N).fill(!1), this.wakeOwned = new Array(Ab.N).fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.peek = null, this.lastFrame = (0, Ab.s)()
      }
      register(bb) {
        return this.consumers.has(bb.name) && console.warn(`Controller consumer "${bb.name}" registered twice; the newer one replaces it.`), this.consumers.set(bb.name, bb), () => {
          var ab;
          this.consumers.get(bb.name) === bb && (this.activeName === bb.name ? (this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()) : (null === (ab = this.peek) || void 0 === ab ? void 0 : ab.over) === bb.name && (this.peek = null), this.consumers.delete(bb.name))
        }
      }
      getActiveConsumerName() {
        return this.activeName
      }
      isButtonHeld(bb) {
        return this.PY[(0, Ab.j)(bb)]
      }
      getLastFrame() {
        return this.lastFrame
      }
      clear() {
        this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()
      }
      reset() {
        this.deactivateCurrent(), this.activeName = null, this.PY = new Array(Ab.N).fill(!1), this.previousHeld = new Array(Ab.N).fill(!1), this.consumedButtons.fill(!1), this.suppressedReleases.fill(!1), this.wakeOwned.fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.lastFrame = (0, Ab.s)()
      }
      dispatch(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.lastFrame = bb, this.previousHeld = this.PY, this.PY = (0, Ab.n)(bb.values, this.previousHeld);
        for (let Tb = 0; Tb < Ab.N; Tb++) this.suppressedReleases[Tb] = !this.PY[Tb] && this.consumedButtons[Tb], this.PY[Tb] || (this.consumedButtons[Tb] = !1), this.wakeOwned[Tb] && (this.PY[Tb] ? (this.consumedButtons[Tb] = !0, this.wakeOwned[Tb] = !1) : bb.values[Tb] < Ab.K && (this.wakeOwned[Tb] = !1));
        Math.hypot(bb.leftStick.x, bb.leftStick.y) < Bb && (this.leftStickConsumed = !1), Math.hypot(bb.rightStick.x, bb.rightStick.y) < Bb && (this.rightStickConsumed = !1);
        const Mb = this.pickActive();
        if ((null === Mb || void 0 === Mb ? void 0 : Mb.name) !== this.activeName) {
          var Eb, Yb, eb, vb, Lb, Pb;
          const bb = this.activeName,
            ab = {
              left: !this.leftStickConsumed,
              right: !this.rightStickConsumed
            },
            Ub = null !== (Eb = null === Mb || void 0 === Mb || null === (Yb = Mb.peek) || void 0 === Yb ? void 0 : Yb.call(Mb)) && void 0 !== Eb ? Eb : null,
            Tb = null === bb && !!Ub && !(null === (eb = this.consumers.get(Ub.over)) || void 0 === eb || !eb.onPeekFrame),
            Bb = Ub && (Ub.over === bb || Tb) ? Ub : null,
            Xb = null !== this.peek && this.peek.over === (null === Mb || void 0 === Mb ? void 0 : Mb.name) ? this.peek : null;
          this.deactivateCurrent(null !== Bb, null !== Xb), this.activeName = null !== (vb = null === Mb || void 0 === Mb ? void 0 : Mb.name) && void 0 !== vb ? vb : null, null === bb || this.handOffPending || this.consumeAllHeld();
          const jb = null === (Lb = null !== Bb && void 0 !== Bb ? Bb : Xb) || void 0 === Lb ? void 0 : Lb.stick;
          "left" === jb && ab.left ? this.leftStickConsumed = !1 : "right" === jb && ab.right && (this.rightStickConsumed = !1), this.peek = Bb, Mb || null === bb ? Mb && (null === (Pb = this.idleResume) || void 0 === Pb ? void 0 : Pb.name) === Mb.name && (this.idleResume.left && (this.leftStickConsumed = !1), this.idleResume.right && (this.rightStickConsumed = !1)) : this.idleResume = {
            name: bb,
            left: ab.left && this.leftStickConsumed,
            right: ab.right && this.rightStickConsumed
          }, Mb && (this.idleResume = null);
          for (let Mb = 0; Mb < Ab.N; Mb++) this.previousHeld[Mb] && !this.PY[Mb] && (this.suppressedReleases[Mb] = !0)
        }
        var Xb, jb;
        (this.handOffPending = !1, Mb) && (Ub && !Tb.has(Mb.name) && this.consumeWakePress(Mb), Mb.onFrame(this.buildInput(bb, ab, Ub)), this.peek && (null === (Xb = this.consumers.get(this.peek.over)) || void 0 === Xb || null === (jb = Xb.onPeekFrame) || void 0 === jb || jb.call(Xb, this.buildInput(bb, ab, !1, this.peek.stick))))
      }
      consumeWakePress(bb) {
        for (let Mb = 0; Mb < Ab.N; Mb++) {
          var ab, Ub;
          const Tb = Ab.P[Mb];
          (null !== (ab = null === (Ub = bb.wakePressActs) || void 0 === Ub ? void 0 : Ub.call(bb, Tb)) && void 0 !== ab ? ab : Eb.includes(Tb)) || (this.PY[Mb] ? this.consumedButtons[Mb] = !0 : this.lastFrame.values[Mb] >= Ab.J && (this.wakeOwned[Mb] = !0))
        }
      }
      pickActive() {
        for (const bb of Mb) {
          const ab = this.consumers.get(bb);
          if (ab && ab.isActive()) return ab
        }
        return null
      }
      deactivateCurrent() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var Ub, Ab, Mb, Tb;
        this.activeName && (null === (Ub = this.consumers.get(this.activeName)) || void 0 === Ub || null === (Ab = Ub.onDeactivate) || void 0 === Ab || Ab.call(Ub, bb));
        this.peek && !ab && (null === (Mb = this.consumers.get(this.peek.over)) || void 0 === Mb || null === (Tb = Mb.onDeactivate) || void 0 === Tb || Tb.call(Mb, !1));
        this.peek = null
      }
      consumeAllHeld() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.idleResume = null;
        for (let Mb = 0; Mb < Ab.N; Mb++) this.PY[Mb] && (this.consumedButtons[Mb] = !0);
        const {
          leftStick: ab,
          rightStick: Ub
        } = this.lastFrame;
        this.leftStickConsumed = "left" !== bb && (this.leftStickConsumed || Math.hypot(ab.x, ab.y) >= Bb), this.rightStickConsumed = "right" !== bb && (this.rightStickConsumed || Math.hypot(Ub.x, Ub.y) >= Bb)
      }
      handOffHeldInput() {
        this.handOffPending = !0
      }
      consumeButton(bb) {
        const ab = (0, Ab.j)(bb);
        this.PY[ab] && (this.consumedButtons[ab] = !0)
      }
      buildInput(bb, ab, Ub, Mb) {
        const Tb = this.PY,
          Eb = this.previousHeld,
          Yb = Mb ? new Array(Ab.N).fill(!0) : [...this.consumedButtons],
          Bb = Mb ? Yb : [...this.suppressedReleases],
          eb = !this.leftStickConsumed && (!Mb || "left" === Mb),
          vb = !this.rightStickConsumed && (!Mb || "right" === Mb);
        return {
          frame: bb,
          dtMs: ab,
          isHeld: bb => {
            const ab = (0, Ab.j)(bb);
            return Tb[ab] && !Yb[ab]
          },
          wasPressed: bb => {
            const ab = (0, Ab.j)(bb);
            return Tb[ab] && !Eb[ab] && !Yb[ab]
          },
          wasReleased: bb => {
            const ab = (0, Ab.j)(bb);
            return !Tb[ab] && Eb[ab] && !Bb[ab]
          },
          value: ab => {
            const Ub = (0, Ab.j)(ab);
            return Yb[Ub] ? 0 : bb.values[Ub]
          },
          leftStick: eb ? bb.leftStick : {
            x: 0,
            y: 0
          },
          rightStick: vb ? bb.rightStick : {
            x: 0,
            y: 0
          },
          wokeDevice: Ub
        }
      }
    }
  },
  7759: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Lb.h,
      f: () => Lb.i,
      i: () => Wb,
      m: () => Hb,
      p: () => Ib,
      t: () => db
    });
    var Ab = Ub(52),
      Mb = Ub(22),
      Tb = Ub(1345),
      Eb = Ub(31),
      Yb = Ub(7764),
      Bb = Ub(7739),
      eb = Ub(7753),
      vb = Ub(7736),
      Lb = Ub(1910),
      Pb = Ub(7771);
    const Xb = {
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
      jb = "controllerSettings",
      Rb = ["bindings", "promptFamily", "hideButtonHints", "swapSticks", "swapConfirmBack", "leaderboardButton"],
      kb = ["auto", ...Yb.e],
      yb = (bb, ab) => "string" === typeof ab && bb.includes(ab),
      Zb = bb => ab => "number" === typeof ab && Number.isFinite(ab) ? (0, Pb.q)(ab, bb) : void 0,
      Db = bb => "boolean" === typeof bb ? bb : void 0,
      zb = bb => ab => yb(bb, ab) ? ab : void 0,
      xb = {
        lookSensitivityX: Zb(Pb.eb),
        lookSensitivityY: Zb(Pb.eb),
        aimLookSensitivity: Zb(Pb.h),
        invertLookX: Db,
        invertLookY: Db,
        lookCurve: zb(Bb.I),
        lookDeadzone: Zb(Pb.v),
        moveDeadzone: Zb(Pb.v),
        swapSticks: Db,
        autoSprint: Db,
        sneakMode: zb(["toggle", "hold"]),
        tapHoldTime: zb(["short", "medium", "long"]),
        attackMode: zb(["hold", "toggle"]),
        promptFamily: zb(kb),
        hideButtonHints: Db,
        vibration: Db,
        cursorSpeed: Zb(Pb.t),
        cursorMagnetism: Db,
        buttonRepeat: zb(Bb.m),
        largePointer: Db,
        menuBackToCategories: Db,
        swapConfirmBack: Db,
        menuNavigation: zb(["hybrid", "focus", "cursor"]),
        inventoryNavigation: zb(["hybrid", "slot", "cursor"]),
        quickChat: zb(["wheel", "off"]),
        leaderboardButton: zb(["shop", "leaderboard"]),
        gyroAiming: Db,
        gyroSensitivity: Zb(Pb.O),
        gyroActivation: zb(["always", "aiming", "button"]),
        gyroButton: zb(Bb.P),
        emoteButton: zb(["tapHold", "wheel"])
      },
      ib = [{
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
      fb = bb => {
        const ab = {};
        if ("object" !== typeof bb || null === bb) return ab;
        for (const [Ub, Ab] of Object.entries(bb)) Object.prototype.hasOwnProperty.call(eb.f, Ub) && yb(Bb.P, Ab) && (ab[Ub] = Ab);
        return ab
      },
      mb = bb => {
        const ab = {};
        for (const Ub of Object.keys(Xb))("bindings" === Ub ? Object.keys(bb.bindings).length > 0 : bb[Ub] !== Xb[Ub]) && (ab[Ub] = bb[Ub]);
        0 !== Object.keys(ab).length ? Eb.f.setItem(jb, ab) : Eb.f.removeItem(jb)
      };
    let pb = (() => {
        const bb = Eb.f.getItem(jb),
          ab = (bb => {
            const ab = "object" === typeof bb && null !== bb ? bb : {},
              Ub = {
                ...Xb,
                bindings: fb(ab.bindings)
              };
            for (const Mb of Object.keys(xb)) {
              const bb = xb[Mb](ab[Mb]);
              void 0 !== bb && (Ub[Mb] = bb)
            }
            const Ab = Object.keys(ab).filter((bb => !!Object.prototype.hasOwnProperty.call(Xb, bb) && ("bindings" === bb ? "object" !== typeof ab.bindings || null === ab.bindings || Object.keys(ab.bindings).length !== Object.keys(Ub.bindings).length : Ub[bb] !== ab[bb])));
            return Ab.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${Ab.join(", ")}`), Ub
          })(bb);
        return null !== bb && void 0 !== bb && mb(ab), ab
      })(),
      Nb = {
        ...pb,
        ...(() => {
          if ("undefined" === typeof window) return {};
          const bb = {},
            ab = new URLSearchParams(window.location.search);
          for (const {
              param: Ub,
              key: Ab
            }
            of ib) {
            const Mb = xb[Ab](ab.get(Ub));
            void 0 !== Mb && (bb[Ab] = Mb)
          }
          return bb
        })()
      };
    const Wb = () => Nb,
      Hb = () => {
        var bb, ab;
        const Ub = Wb().promptFamily;
        return "auto" !== Ub ? Ub : null !== (bb = null === (ab = vb.g.getActivePad()) || void 0 === ab ? void 0 : ab.family) && void 0 !== bb ? bb : "xbox"
      },
      Ib = bb => {
        const ab = Nb;
        pb = {
          ...pb,
          ...bb
        }, mb(pb), Nb = {
          ...Nb,
          ...bb
        }, (bb => {
          Mb.m.IR(Lb.i, Nb), Rb.some((ab => bb[ab] !== Nb[ab])) && Mb.m.IR(Lb.h, Nb)
        })(ab)
      },
      db = () => {
        const [bb, ab] = (0, Ab.useState)(Nb);
        return (0, Tb.f)(Lb.i, ab), bb
      }
  },
  8218: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Mb
    });
    const Ab = new Set(["Alt", "AltGraph", "Meta", "OS", "AudioVolumeUp", "AudioVolumeDown", "AudioVolumeMute", "MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "BrowserBack", "BrowserForward", "BrowserHome", "GoBack", "LaunchApplication1", "LaunchApplication2", "LaunchMail", "PrintScreen", "Unidentified"]),
      Mb = bb => Ab.has(bb)
  },
  7736: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Rb.d,
      g: () => Db
    });
    var Ab = Ub(7739),
      Mb = Ub(7743);
    const Tb = .1,
      Eb = .3;
    class Yb {
      constructor() {
        this.deadzone = 0, this.anchor = null, this.steadyMs = 0, this.lastMs = null, this.returning = !0, this.anchorLearned = !1
      }
      observe(bb, ab) {
        const Ub = null === this.lastMs ? 0 : Math.min(Math.max(0, ab - this.lastMs), 100);
        this.lastMs = ab;
        const Ab = Math.hypot(bb.x, bb.y);
        if (Ab >= Eb) return this.anchor = null, void(this.returning = !0);
        Ab >= Tb || (this.returning = !1);
        const Mb = this.anchor;
        if (!Mb || Math.hypot(bb.x - Mb.x, bb.y - Mb.y) > .03) return this.anchorLearned && (this.returning = !1), this.anchor = {
          x: bb.x,
          y: bb.y
        }, this.steadyMs = 0, void(this.anchorLearned = !1);
        if (this.steadyMs += Ub, this.steadyMs < 1e3) return;
        const Yb = Math.max(Ab, Math.hypot(Mb.x, Mb.y));
        Yb < Tb ? this.deadzone = 0 : this.returning && (this.deadzone = Yb + .05, this.anchorLearned = !0)
      }
      getDeadzone() {
        return this.deadzone
      }
      apply(bb) {
        return Math.hypot(bb.x, bb.y) < this.deadzone ? {
          x: 0,
          y: 0
        } : bb
      }
    }
    const Bb = (bb, ab) => {
        var Ub, Ab;
        return null !== (Ub = bb && (null === (Ab = Object.getOwnPropertyDescriptor(bb, ab)) || void 0 === Ab ? void 0 : Ab.get)) && void 0 !== Ub ? Ub : null
      },
      eb = bb => {
        const ab = bb.vendorName;
        return "string" === typeof ab ? ab : void 0
      },
      vb = ((bb, ab) => {
        const Ub = Bb(bb, "index"),
          Ab = Bb(bb, "id"),
          Mb = Bb(bb, "connected"),
          Tb = Bb(bb, "mapping"),
          Eb = Bb(bb, "buttons"),
          Yb = Bb(bb, "axes"),
          vb = Bb(ab, "pressed"),
          Lb = Bb(ab, "value");
        return Ub && Ab && Mb && Tb && Eb && Yb && vb && Lb ? bb => {
          const ab = Eb.call(bb),
            Bb = Yb.call(bb),
            Pb = {
              index: Number(Ub.call(bb)),
              id: String(Ab.call(bb)),
              connected: !0 === Mb.call(bb),
              mapping: String(Tb.call(bb)),
              buttons: [],
              axes: [],
              vendorName: eb(bb)
            };
          for (let Ub = 0; Ub < ab.length; Ub++) Pb.buttons.push({
            pressed: !0 === vb.call(ab[Ub]),
            value: Number(Lb.call(ab[Ub]))
          });
          for (let Ub = 0; Ub < Bb.length; Ub++) Pb.axes.push(Number(Bb[Ub]));
          return Pb
        } : null
      })("undefined" === typeof Gamepad ? null : Gamepad.prototype, "undefined" === typeof GamepadButton ? null : GamepadButton.prototype),
      Lb = "undefined" === typeof Navigator ? null : Navigator.prototype.getGamepads;
    var Pb = Ub(1306),
      Xb = Ub(1315);
    const jb = bb => ({
      pressed: bb,
      value: bb ? 1 : 0
    });
    var Rb = Ub(1910);
    const kb = Eb,
      yb = bb => {
        const ab = new Array(Ab.N).fill(0);
        for (let Ub = 0; Ub < Ab.N && Ub < bb.buttons.length; Ub++) {
          const Mb = bb.buttons[Ub];
          ab[Ub] = Mb.pressed && !(0, Ab.H)(Ub) ? Math.max(Mb.value, Ab.t) : Mb.value
        }
        return ab
      },
      Zb = (bb, ab) => {
        var Ub, Ab;
        return {
          x: null !== (Ub = bb.axes[ab]) && void 0 !== Ub ? Ub : 0,
          y: null !== (Ab = bb.axes[ab + 1]) && void 0 !== Ab ? Ab : 0
        }
      };
    const Db = new class {
      constructor(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : vb;
        this.readGamepads = bb, this.requireTrustedPads = ab, this.nativeReader = Ub, this.running = !1, this.listening = !1, this.rafId = 0, this.lastTimestampMs = 0, this.activeInfo = null, this.slots = [], this.trustedIndices = new Set, this.warnedNonStandardIds = new Set, this.loggedReadError = !1, this.frameListeners = new Set, this.connectionListeners = new Set, this.anyPadConnected = !1, this.connectedListeners = new Set, this.handleConnectionEvent = bb => {
          bb.isTrusted && this.trustedIndices.add(bb.gamepad.index), this.wake()
        }, this.handleDisconnectionEvent = bb => {
          this.trustedIndices.delete(bb.gamepad.index)
        }, this.qL = bb => {
          if (this.rafId = 0, !this.running) return;
          const ab = 0 === this.lastTimestampMs ? 16 : Math.min(100, bb - this.lastTimestampMs);
          this.lastTimestampMs = bb;
          try {
            this.poll(bb, ab)
          } finally {
            this.anyPadConnected && (this.rafId = requestAnimationFrame(this.qL))
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
      onFrame(bb) {
        return this.frameListeners.add(bb), () => {
          this.frameListeners.delete(bb)
        }
      }
      onActivePadChanged(bb) {
        return this.connectionListeners.add(bb), () => {
          this.connectionListeners.delete(bb)
        }
      }
      getActivePad() {
        return this.activeInfo
      }
      hasConnectedPad() {
        return this.anyPadConnected
      }
      onConnectedPadsChanged(bb) {
        return this.connectedListeners.add(bb), () => {
          this.connectedListeners.delete(bb)
        }
      }
      getActiveGamepad() {
        if (!this.activeInfo) return null;
        const bb = this.readPads()[this.activeInfo.index],
          ab = bb ? this.readPad(bb) : null;
        return ab && ab.id === this.activeInfo.id ? bb : null
      }
      poll(bb, ab) {
        var Ub, Mb;
        const Tb = this.readPads();
        let Eb = null,
          Bb = !1;
        const eb = [],
          vb = Math.max(Tb.length, this.slots.length);
        for (let Db = 0; Db < vb; Db++) {
          var Lb;
          const ab = Db < Tb.length ? Tb[Db] : null,
            Ub = ab ? this.readPad(ab) : null;
          if (!Ub || !Ub.connected || !this.isUsable(Ub)) {
            this.slots[Db] = null;
            continue
          }
          let Mb = this.slots[Db];
          Mb && Mb.id === Ub.id || (Mb = {
            id: Ub.id,
            PY: [],
            leftSettled: !1,
            rightSettled: !1,
            leftRest: new Yb,
            rightRest: new Yb
          }, this.slots[Db] = Mb);
          const vb = Zb(Ub, 0),
            Pb = Zb(Ub, 2);
          !Mb.leftSettled && Math.hypot(vb.x, vb.y) < kb && (Mb.leftSettled = !0), !Mb.rightSettled && Math.hypot(Pb.x, Pb.y) < kb && (Mb.rightSettled = !0), Mb.leftRest.observe(vb, bb), Mb.rightRest.observe(Pb, bb);
          const Xb = yb(Ub),
            jb = (0, Ab.n)(Xb, Mb.PY),
            Rb = Mb.PY,
            zb = jb.map(((bb, ab) => bb && !Rb[ab]));
          Mb.PY = jb;
          const xb = {
            pad: Ub,
            slot: Mb,
            values: Xb
          };
          Db === (null === (Lb = this.activeInfo) || void 0 === Lb ? void 0 : Lb.index) && Ub.id === this.activeInfo.id ? (Eb = xb, Bb = zb.includes(!0)) : zb.includes(!0) && eb.push({
            polled: xb,
            rose: zb
          })
        }
        const Pb = this.slots.some((bb => null !== bb));
        if (Pb !== this.anyPadConnected) {
          this.anyPadConnected = Pb;
          for (const bb of this.connectedListeners) bb()
        }
        const Xb = null !== (Ub = null === (Mb = Eb) || void 0 === Mb ? void 0 : Mb.slot.PY) && void 0 !== Ub ? Ub : [],
          jb = Bb ? void 0 : eb.find((bb => {
            let {
              rose: ab
            } = bb;
            return ab.some(((bb, ab) => bb && !Xb[ab]))
          }));
        if (jb ? (Eb = jb.polled, this.setActive(jb.polled.pad)) : this.activeInfo && !Eb && this.setActive(null), !Eb || !this.activeInfo) return;
        const Rb = ((bb, ab) => {
          let {
            pad: Ub,
            slot: Mb,
            values: Tb
          } = bb;
          const Eb = (0, Ab.s)(ab);
          return Eb.values = Tb, Mb.leftSettled && (Eb.leftStick = Mb.leftRest.apply(Zb(Ub, 0))), Mb.rightSettled && (Eb.rightStick = Mb.rightRest.apply(Zb(Ub, 2))), Eb
        })(Eb, bb);
        for (const Ab of this.frameListeners) Ab(Rb, ab, this.activeInfo)
      }
      readPad(bb) {
        const ab = this.readSnapshot(bb);
        return ab && (0, Xb.f)(ab) ? (bb => {
          const ab = ab => {
              var Ub;
              return null !== (Ub = bb.buttons[ab]) && void 0 !== Ub ? Ub : jb(!1)
            },
            Ub = ab => {
              var Ub;
              return null !== (Ub = bb.axes[ab]) && void 0 !== Ub ? Ub : 0
            },
            Ab = bb.axes.length > 9,
            Mb = Ab ? (bb => {
              const ab = 0 !== bb;
              return {
                up: ab && (bb >= -1 && bb < -.7 || bb >= .95 && bb <= 1),
                right: ab && bb >= -.75 && bb < -.1,
                down: ab && bb >= -.2 && bb < .45,
                left: ab && bb >= .4 && bb <= 1
              }
            })(Ub(9)) : {
              up: Ub(5) < -.5,
              down: Ub(5) > .5,
              left: Ub(4) < -.5,
              right: Ub(4) > .5
            };
          return {
            ...bb,
            mapping: "standard",
            buttons: [ab(1), ab(2), ab(0), ab(3), ab(4), ab(5), ab(6), ab(7), ab(8), ab(9), ab(10), ab(11), jb(Mb.up), jb(Mb.down), jb(Mb.left), jb(Mb.right), ab(12)],
            axes: [Ub(0), Ub(1), Ub(2), Ub(Ab ? 5 : 3)]
          }
        })(ab) : ab
      }
      readSnapshot(bb) {
        if (this.nativeReader) try {
          return this.nativeReader(bb)
        } catch {
          if (this.requireTrustedPads) return null
        }
        return this.requireTrustedPads ? null : (bb => {
          const ab = bb;
          return {
            index: ab.index,
            id: ab.id,
            connected: ab.connected,
            mapping: ab.mapping,
            buttons: Array.from(ab.buttons, (bb => ({
              pressed: bb.pressed,
              value: bb.value
            }))),
            axes: Array.from(ab.axes),
            vendorName: eb(bb)
          }
        })(bb)
      }
      isUsable(bb) {
        return !(0, Pb.f)(bb.id) && ("standard" !== bb.mapping ? (this.warnedNonStandardIds.has(bb.id) || (this.warnedNonStandardIds.add(bb.id), console.warn(`Controller "${bb.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.trustedIndices.has(bb.index))
      }
      setActive(bb) {
        this.activeInfo = bb ? {
          index: bb.index,
          id: bb.id,
          family: (0, Mb.c)(bb.id, bb.vendorName)
        } : null;
        for (const ab of this.connectionListeners) ab(this.activeInfo)
      }
      readPads() {
        try {
          return this.readGamepads()
        } catch (bb) {
          return this.loggedReadError || (this.loggedReadError = !0, console.warn("Reading gamepads failed; controller input is unavailable.", bb)), []
        }
      }
      wake() {
        this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.qL))
      }
    }((() => Lb ? Lb.call(navigator) : []), !0);
    Db.listenForConnections()
  },
  8225: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Ab
    });
    const Ab = {
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
  8320: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Eb,
      e: () => Yb
    });
    var Ab = Ub(22),
      Mb = Ub(8311);
    let Tb = !1;
    const Eb = () => Tb,
      Yb = bb => {
        bb !== Tb && (Tb = bb, Ab.m.IR(Mb.i, Tb))
      }
  },
  8315: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Yb,
      h: () => Bb
    });
    var Ab = Ub(22),
      Mb = Ub(8311);
    let Tb = null,
      Eb = 0;
    const Yb = () => Tb,
      Bb = bb => {
        null === bb && null === Tb || (Tb = null === bb ? null : {
          id: ++Eb,
          holdMs: bb
        }, Ab.m.IR(Mb.l, Tb))
      }
  },
  8323: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Eb,
      f: () => Yb
    });
    var Ab = Ub(22),
      Mb = Ub(8311);
    let Tb = !1;
    const Eb = () => Tb,
      Yb = bb => {
        bb !== Tb && (Tb = bb, Ab.m.IR(Mb.o, Tb))
      }
  },
  8394: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Eb,
      f: () => Yb
    });
    var Ab = Ub(22),
      Mb = Ub(8311);
    let Tb = !1;
    const Eb = () => Tb,
      Yb = bb => {
        bb !== Tb && (Tb = bb, Ab.m.IR(Mb.r, Tb))
      }
  },
  8264: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Ab
    });
    class Ab {
      constructor() {
        this.downAtMs = null
      }
      update(bb, ab, Ub, Ab) {
        if (bb) return this.downAtMs = Ub, null;
        if (null === this.downAtMs) return null;
        const Mb = Ub - this.downAtMs >= Ab;
        return ab ? Mb ? (this.downAtMs = null, "hold") : null : (this.downAtMs = null, Mb ? "hold" : "tap")
      }
      release() {
        this.downAtMs = null
      }
    }
  },
  7795: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Lb,
      i: () => Pb,
      j: () => Yb,
      l: () => Db,
      o: () => Zb
    });
    var Ab = Ub(31),
      Mb = Ub(7764),
      Tb = Ub(7739);
    const Eb = (() => {
        try {
          return Ub(7799)
        } catch {
          return null
        }
      })(),
      Yb = [...Tb.P, "LeftStick", "RightStick"],
      Bb = new Map,
      eb = {
        xbox: "xbox",
        playstation: "playstation",
        nintendo: "nintendo",
        steamdeck: "steamdeck",
        generic: "xbox"
      },
      vb = (new Set(Object.values(eb)), {
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
      Lb = (bb, ab) => {
        var Ub, Ab;
        return null !== (Ub = null === (Ab = vb[eb[bb]]) || void 0 === Ab ? void 0 : Ab[ab]) && void 0 !== Ub ? Ub : 1
      },
      Pb = (bb, ab) => {
        const Ub = `./${eb[bb]}/${ab}.svg`;
        let Ab = Bb.get(Ub);
        return void 0 === Ab && (Ab = Eb ? Eb(Ub) : "", Bb.set(Ub, Ab)), Ab
      },
      Xb = new Set,
      jb = [],
      Rb = bb => {
        if (!Xb.has(bb)) {
          Xb.add(bb);
          for (const ab of Yb) {
            const Ub = Pb(bb, ab);
            if (Ub) {
              const bb = new Image;
              bb.crossOrigin = "anonymous", bb.src = Ub, jb.push(bb)
            }
          }
        }
      },
      kb = "controllerGlyphFamily";
    let yb = null;
    const Zb = bb => {
        bb !== yb && (yb = bb, Ab.f.setItem(kb, bb), Rb(bb))
      },
      Db = () => {
        const bb = Ab.f.getItem(kb);
        (0, Mb.g)(bb) && bb !== yb && (yb = bb, Rb(bb))
      }
  },
  8423: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => rb,
      d: () => Kb
    });
    var Ab = Ub(52),
      Mb = Ub(22),
      Tb = Ub(1345),
      Eb = Ub(7750),
      Yb = Ub(7736),
      Bb = Ub(7782),
      eb = Ub(7759);
    const vb = {
        x: 0,
        y: 0,
        z: 0
      },
      Lb = Math.PI / 180,
      Pb = bb => Math.hypot(bb.x, bb.y, bb.z),
      Xb = (bb, ab) => ({
        x: bb.x * ab,
        y: bb.y * ab,
        z: bb.z * ab
      }),
      jb = (bb, ab) => ({
        x: bb.x + ab.x,
        y: bb.y + ab.y,
        z: bb.z + ab.z
      }),
      Rb = (bb, ab) => ({
        x: bb.x - ab.x,
        y: bb.y - ab.y,
        z: bb.z - ab.z
      }),
      kb = bb => {
        const ab = Pb(bb);
        return 0 === ab ? vb : Xb(bb, 1 / ab)
      },
      yb = bb => ({
        min: {
          ...bb
        },
        max: {
          ...bb
        }
      }),
      Zb = (bb, ab) => ({
        min: {
          x: Math.min(bb.min.x, ab.x),
          y: Math.min(bb.min.y, ab.y),
          z: Math.min(bb.min.z, ab.z)
        },
        max: {
          x: Math.max(bb.max.x, ab.x),
          y: Math.max(bb.max.y, ab.y),
          z: Math.max(bb.max.z, ab.z)
        }
      }),
      Db = (bb, ab) => bb.max.x - bb.min.x <= ab && bb.max.y - bb.min.y <= ab && bb.max.z - bb.min.z <= ab;
    class zb {
      constructor() {
        this.bias = vb, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = vb, this.windowSec = 0
      }
      update(bb) {
        const ab = this.gyroRange ? Zb(this.gyroRange, bb.gyro) : yb(bb.gyro),
          Ub = bb.accel ? this.accelRange ? Zb(this.accelRange, bb.accel) : yb(bb.accel) : null;
        if (!Db(ab, 1) || Ub && !Db(Ub, .01)) return void this.restartWindow(bb);
        if (this.gyroRange = ab, this.accelRange = Ub, this.sum = jb(this.sum, Xb(bb.gyro, bb.dtSec)), this.windowSec += bb.dtSec, this.windowSec < 1) return;
        const Ab = Xb(this.sum, 1 / this.windowSec);
        if (Pb(Ab) > 5) return;
        const Mb = Rb(Ab, this.bias);
        let Tb = 0;
        !this.calibrated || this.windowSec >= 3 ? Tb = 1 : Pb(Mb) <= 1 && (Tb = Math.min(1, bb.dtSec / 1)), this.bias = jb(this.bias, Xb(Mb, Tb)), this.calibrated = this.calibrated || Tb > 0
      }
      correct(bb) {
        return Rb(bb, this.bias)
      }
      getBias() {
        return this.bias
      }
      isCalibrated() {
        return this.calibrated
      }
      reset() {
        this.bias = vb, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = vb, this.windowSec = 0
      }
      restartWindow(bb) {
        this.gyroRange = yb(bb.gyro), this.accelRange = bb.accel ? yb(bb.accel) : null, this.sum = vb, this.windowSec = 0
      }
    }
    class xb {
      constructor() {
        this.down = null
      }
      update(bb, ab, Ub) {
        const Ab = kb(Xb(ab, -1));
        if (!this.down) return this.down = Ab, Ab;
        const Mb = Xb(bb, Lb * Ub),
          Tb = this.down,
          Eb = {
            x: Tb.x - (Mb.y * Tb.z - Mb.z * Tb.y),
            y: Tb.y - (Mb.z * Tb.x - Mb.x * Tb.z),
            z: Tb.z - (Mb.x * Tb.y - Mb.y * Tb.x)
          },
          Yb = 0 === Pb(Ab) ? 0 : Math.min(1, Ub / .25);
        var Bb, eb;
        return this.down = kb((eb = Yb, jb(Bb = Eb, Xb(Rb(Ab, Bb), eb)))), this.down
      }
      reset() {
        this.down = null
      }
    }
    class ib {
      constructor() {
        this.entries = [], this.windowSec = 0
      }
      apply(bb, ab, Ub) {
        const Ab = Math.hypot(bb, ab),
          Mb = Math.max(0, Math.min(1, (Ab - 2) / 2)),
          Tb = {
            yaw: bb * (1 - Mb),
            pitch: ab * (1 - Mb),
            dtSec: Ub
          };
        for (this.entries.push(Tb), this.windowSec += Ub; this.entries.length > 1 && this.windowSec - this.entries[0].dtSec >= .125;) this.windowSec -= this.entries[0].dtSec, this.entries.shift();
        let Eb = 0,
          Yb = 0;
        for (const eb of this.entries) Eb += eb.yaw * eb.dtSec, Yb += eb.pitch * eb.dtSec;
        const Bb = this.windowSec > 0 ? {
          yaw: Eb / this.windowSec,
          pitch: Yb / this.windowSec
        } : {
          yaw: Tb.yaw,
          pitch: Tb.pitch
        };
        return {
          yaw: bb * Mb + Bb.yaw,
          pitch: ab * Mb + Bb.pitch
        }
      }
      reset() {
        this.entries = [], this.windowSec = 0
      }
    }
    class fb {
      constructor() {
        this.calibrator = new zb, this.gravity = new xb, this.smoother = new ib
      }
      process(bb, ab, Ub) {
        const Ab = Math.max(0, Math.min(.05, ab));
        this.calibrator.update({
          ...bb,
          dtSec: Ab
        });
        const Mb = this.calibrator.correct(bb.gyro);
        let Tb = Mb.y;
        "player" === Ub && bb.accel && (Tb = ((bb, ab) => {
          const Ub = bb.y * ab.y + bb.z * ab.z;
          return -Math.sign(Ub) * Math.min(1.41 * Math.abs(Ub), Math.hypot(bb.y, bb.z))
        })(Mb, this.gravity.update(Mb, bb.accel, Ab)));
        const Eb = this.smoother.apply(Tb, Mb.x, Ab),
          Yb = ((bb, ab) => {
            const Ub = Math.hypot(bb, ab);
            if (Ub >= 1) return {
              yaw: bb,
              pitch: ab
            };
            const Ab = Ub / 1;
            return {
              yaw: bb * Ab,
              pitch: ab * Ab
            }
          })(Eb.yaw, Eb.pitch);
        return {
          yawDeg: Yb.yaw * Ab,
          pitchDeg: Yb.pitch * Ab
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
    const mb = (bb, ab) => {
      var Ub, Ab, Mb;
      const Tb = ab * Lb,
        Eb = null !== (Ub = bb.beta) && void 0 !== Ub ? Ub : 0,
        Yb = null !== (Ab = bb.gamma) && void 0 !== Ab ? Ab : 0;
      return {
        x: Eb * Math.cos(Tb) - Yb * Math.sin(Tb),
        y: Eb * Math.sin(Tb) + Yb * Math.cos(Tb),
        z: null !== (Mb = bb.alpha) && void 0 !== Mb ? Mb : 0
      }
    };
    var pb = Ub(8425);
    class Nb {
      constructor(bb, ab, Ub) {
        this.hid = bb, this.sink = ab, this.onControllersChanged = Ub, this.controllers = new Map, this.running = !1, this.openedCount = 0, this.opening = new Set, this.disconnectedWhileOpening = new Set, this.switchPacketCounter = 0, this.onConnect = bb => {
          this.openController(bb.device).catch((bb => {
            console.warn("Could not open motion controller", bb)
          }))
        }, this.onDisconnect = bb => {
          this.opening.has(bb.device) && this.disconnectedWhileOpening.add(bb.device);
          const ab = this.controllers.get(bb.device);
          ab && (this.forget(ab), this.onControllersChanged())
        }
      }
      async start() {
        if (this.running) return;
        this.running = !0, this.hid.addEventListener("connect", this.onConnect), this.hid.addEventListener("disconnect", this.onDisconnect);
        const bb = await this.hid.getDevices();
        for (const ab of bb) await this.openController(ab).catch((bb => {
          console.warn("Could not open motion controller", bb)
        }))
      }
      stop() {
        this.running = !1, this.hid.removeEventListener("connect", this.onConnect), this.hid.removeEventListener("disconnect", this.onDisconnect);
        for (const bb of [...this.controllers.values()]) this.forget(bb);
        this.onControllersChanged()
      }
      async request() {
        const bb = await this.hid.requestDevice({
          filters: pb.j
        });
        let ab = 0;
        for (const Ub of bb) await this.openController(Ub).catch((bb => {
          console.warn("Could not open motion controller", bb), ab++
        }));
        return ab
      }
      async hasGrantedController() {
        return (await this.hid.getDevices()).some((bb => null !== (0, pb.f)(bb.vendorId, bb.productId)))
      }
      getConnectedKinds() {
        return [...this.controllers.values()].map((bb => bb.kind))
      }
      forget(bb) {
        bb.device.removeEventListener("inputreport", bb.onReport), this.controllers.get(bb.device) === bb && this.controllers.delete(bb.device)
      }
      async openController(bb) {
        const ab = (0, pb.f)(bb.vendorId, bb.productId);
        if (!ab || !this.running || this.controllers.has(bb) || this.opening.has(bb)) return;
        this.opening.add(bb);
        let Ub = !1;
        try {
          bb.opened || await bb.open()
        } finally {
          this.opening.delete(bb), Ub = this.disconnectedWhileOpening.delete(bb)
        }
        if (Ub) return void bb.close().catch((bb => {
          console.debug("Could not close an unplugged motion controller", bb)
        }));
        if (!this.running) return;
        const Ab = {
          device: bb,
          kind: ab,
          lastClock: null,
          lastEventMs: null,
          lastReadingMs: -1 / 0,
          openedOrder: this.openedCount++,
          onReport: bb => {
            this.onReport(Ab, bb)
          }
        };
        this.controllers.set(bb, Ab), bb.addEventListener("inputreport", Ab.onReport), this.onControllersChanged();
        try {
          await this.enableMotion(Ab)
        } catch (Mb) {
          console.warn(`Could not turn on motion for ${ab}`, Mb), this.controllers.get(bb) === Ab && (this.forget(Ab), this.onControllersChanged())
        }
      }
      async enableMotion(bb) {
        let {
          device: ab,
          kind: Ub
        } = bb;
        if ((0, pb.h)(Ub))
          for (const Ab of pb.y[Ub]) await ab.receiveFeatureReport(Ab).catch((bb => {
            console.debug(`Motion controller feature report ${Ab} unavailable`, bb)
          }));
        else
          for (let Ab = 0; Ab < 2; Ab++)
            for (const {
                subcommand: bb,
                args: Ub
              }
              of pb.A) await ab.sendReport(pb.D, (0, pb.b)(this.switchPacketCounter++, bb, Ub)), await new Promise((bb => {
              setTimeout(bb, 60)
            }))
      }
      onReport(bb, ab) {
        const Ub = (0, pb.s)(bb.kind, ab.reportId, ab.data, bb.device.productId);
        if (!Ub) return;
        const Ab = null === bb.lastEventMs ? 0 : (ab.timeStamp - bb.lastEventMs) / 1e3;
        bb.lastEventMs = ab.timeStamp;
        let Mb = Ub.dtSec;
        if (null !== Mb && Ab > 0 && (Mb = Math.max(.001, Math.min(.017, Ab / Ub.readings.length))), null === Mb && null !== Ub.sensorClock && (0, pb.h)(bb.kind)) {
          const ab = (0, pb.v)(bb.kind, bb.lastClock, Ub.sensorClock);
          bb.lastClock = Ub.sensorClock, Mb = 0 === ab ? null : ab
        }
        if (bb.lastReadingMs = ab.timeStamp, this.isPreferred(bb, ab.timeStamp))
          for (const Eb of Ub.readings) {
            var Tb;
            this.sink(Eb, null !== (Tb = Mb) && void 0 !== Tb ? Tb : Ab, `hid${bb.openedOrder}`)
          }
      }
      isPreferred(bb, ab) {
        const Ub = bb => 1e6 * pb.o[bb.kind] + bb.openedOrder;
        for (const Ab of this.controllers.values())
          if (Ab !== bb && ab - Ab.lastReadingMs < 500 && Ub(Ab) < Ub(bb)) return !1;
        return !0
      }
    }
    var Wb = Ub(101);
    const Hb = () => DeviceMotionEvent,
      Ib = () => "undefined" !== typeof window && "undefined" !== typeof DeviceMotionEvent && window.isSecureContext && (0, Wb.isMobile)(),
      db = () => {
        var bb;
        const ab = null === (bb = window.screen.orientation) || void 0 === bb ? void 0 : bb.angle;
        return "number" === typeof ab ? ab : "number" === typeof window.orientation ? window.orientation : 0
      };
    class Fb {
      constructor(bb, ab) {
        this.sink = bb, this.onStateChanged = ab, this.state = "off", this.lastEventMs = null, this.noSensorTimer = null, this.wanted = !1, this.permissionRequest = null, this.granted = !1, this.onGesture = () => {
          this.requestPermission().catch((bb => {
            console.warn("Could not enable the motion sensor", bb)
          }))
        }, this.onMotion = bb => {
          const ab = bb.rotationRate;
          if (!ab || null === ab.alpha && null === ab.beta && null === ab.gamma) return;
          const Ub = null === this.lastEventMs ? 0 : (bb.timeStamp - this.lastEventMs) / 1e3;
          this.lastEventMs = bb.timeStamp, this.clearNoSensorTimer(), this.setState("on"), this.sink({
            gyro: mb(ab, db()),
            accel: null
          }, Ub, "phone")
        }
      }
      getState() {
        return this.state
      }
      start() {
        if (this.wanted = !0, "off" === this.state) return "function" !== typeof Hb().requestPermission || this.granted ? void this.listen() : (this.setState("needsPermission"), void this.armGestureRequest())
      }
      requestPermission() {
        return this.permissionRequest || (this.permissionRequest = this.askPermission().finally((() => {
          this.permissionRequest = null
        }))), this.permissionRequest
      }
      async askPermission() {
        const bb = Hb().requestPermission;
        if (!this.wanted) return;
        if ("function" !== typeof bb) return void this.listen();
        let ab;
        this.disarmGestureRequest();
        try {
          ab = await bb.call(DeviceMotionEvent)
        } catch (Ub) {
          throw this.wanted && "needsPermission" === this.state && this.armGestureRequest(), Ub
        }
        this.wanted && ("granted" === ab ? (this.granted = !0, this.listen()) : this.setState("denied"))
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
      setState(bb) {
        this.state !== bb && (this.state = bb, this.onStateChanged())
      }
    }
    const hb = "controllerGyroStatusChanged",
      Gb = {
        XN: 0,
        kN: 0
      },
      Qb = bb => {
        var ab, Ub;
        return "undefined" === typeof document || (null === (ab = null === (Ub = document.featurePolicy) || void 0 === Ub ? void 0 : Ub.allowsFeature(bb)) || void 0 === ab || ab)
      };
    class qb {
      constructor() {
        this.processor = new fb, this.hid = void 0, this.hidBlocked = void 0, this.phone = void 0, this.phoneBlocked = void 0, this.source = null, this.pendingYawDeg = 0, this.pendingPitchDeg = 0, this.lastDrainMs = -1 / 0, this.lastHidReadingMs = -1 / 0, this.running = !1, this.phoneRunning = !1, this.syncWithSettings = bb => {
          const ab = bb.gyroAiming && Yb.g.hasConnectedPad();
          var Ub, Ab;
          ab !== this.phoneRunning && (this.phoneRunning = ab, ab ? null === (Ub = this.phone) || void 0 === Ub || Ub.start() : null === (Ab = this.phone) || void 0 === Ab || Ab.stop());
          if (bb.gyroAiming !== this.running) {
            var Mb, Tb;
            if (this.running = bb.gyroAiming, this.running) null === (Mb = this.hid) || void 0 === Mb || Mb.start().catch((bb => {
              console.warn("Could not open motion controllers", bb)
            }));
            else null === (Tb = this.hid) || void 0 === Tb || Tb.stop(), this.processor.reset(), this.source = null, this.discardPending();
            this.publishStatus()
          }
        }, this.publishStatus = () => {
          Mb.m.IR(hb, this.getStatus())
        };
        const bb = (() => {
            var bb;
            return "undefined" !== typeof navigator && window.isSecureContext && null !== (bb = navigator.hid) && void 0 !== bb ? bb : null
          })(),
          ab = Qb("hid");
        this.hidBlocked = null !== bb && !ab, this.hid = bb && ab ? new Nb(bb, ((bb, ab, Ub) => {
          this.lastHidReadingMs = performance.now(), this.feed(bb, ab, "player", Ub)
        }), this.publishStatus) : null;
        const Ub = Qb("accelerometer") && Qb("gyroscope");
        this.phoneBlocked = Ib() && !Ub, this.phone = Ib() && Ub ? new Fb(((bb, ab, Ub) => {
          performance.now() - this.lastHidReadingMs >= 500 && this.feed(bb, ab, "local", Ub)
        }), this.publishStatus) : null, Mb.m.subscribe(eb.f, this.syncWithSettings), Yb.g.onConnectedPadsChanged((() => {
          this.syncWithSettings((0, eb.i)()), this.publishStatus()
        })), this.syncWithSettings((0, eb.i)())
      }
      isSupported() {
        return null !== this.hid || null !== this.phone
      }
      getStatus() {
        var bb, ab, Ub, Ab;
        return {
          hidSupported: null !== this.hid,
          hidBlocked: this.hidBlocked,
          phoneSupported: null !== this.phone,
          phoneBlocked: this.phoneBlocked,
          controllers: null !== (bb = null === (ab = this.hid) || void 0 === ab ? void 0 : ab.getConnectedKinds()) && void 0 !== bb ? bb : [],
          phoneMotion: null !== (Ub = null === (Ab = this.phone) || void 0 === Ab ? void 0 : Ab.getState()) && void 0 !== Ub ? Ub : "off",
          padConnected: Yb.g.hasConnectedPad()
        }
      }
      async connectController() {
        return this.hid ? this.hid.request() : 0
      }
      async connectControllerIfNoneGranted() {
        this.hid && !await this.hid.hasGrantedController() && await this.hid.request()
      }
      async allowPhoneMotion() {
        var bb;
        await (null === (bb = this.phone) || void 0 === bb ? void 0 : bb.requestPermission())
      }
      drainLookDelta() {
        const bb = performance.now();
        bb - this.lastDrainMs > 500 && this.discardPending(), this.lastDrainMs = bb;
        const ab = {
          yawDeg: this.pendingYawDeg,
          pitchDeg: this.pendingPitchDeg
        };
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0;
        const Ub = (0, eb.i)();
        return Ub.gyroAiming && (bb => {
          let {
            activation: ab,
            isHeld: Ub,
            useButton: Ab,
            gyroButton: Mb
          } = bb;
          return "always" === ab || Ub("aiming" === ab ? Ab : Mb)
        })({
          activation: Ub.gyroActivation,
          isHeld: bb => Bb.c.isButtonHeld(bb),
          useButton: (0, Eb.h)("use"),
          gyroButton: Ub.gyroButton
        }) ? ((bb, ab) => ({
          XN: -bb.yawDeg * ab * Lb,
          kN: -bb.pitchDeg * ab * Lb
        }))(ab, Ub.gyroSensitivity) : Gb
      }
      discardPending() {
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0
      }
      injectMotion(bb, ab) {
        this.feed(bb, ab, "local", "injected")
      }
      getCalibration() {
        return this.processor.getCalibration()
      }
      feed(bb, ab, Ub, Ab) {
        this.source !== Ab && (this.processor.reset(), this.source = Ab);
        const Mb = this.processor.process(bb, ab, Ub);
        this.pendingYawDeg += Mb.yawDeg, this.pendingPitchDeg += Mb.pitchDeg
      }
    }
    let ub = null;
    const rb = () => (ub || (ub = new qb), ub),
      Kb = () => {
        const [bb, ab] = (0, Ab.useState)((() => rb().getStatus()));
        return (0, Tb.f)(hb, ab), (0, Ab.useEffect)((() => {
          ab(rb().getStatus())
        }), []), bb
      }
  },
  8425: (bb, ab, Ub) => {
    Ub.d(ab, {
      A: () => ib,
      D: () => Db,
      b: () => xb,
      f: () => Bb,
      h: () => Ab,
      j: () => Yb,
      k: () => eb,
      o: () => vb,
      s: () => Zb,
      v: () => kb,
      y: () => fb
    });
    const Ab = bb => "dualShock4" === bb || "dualSense" === bb,
      Mb = 1356,
      Tb = 1406,
      Eb = [{
        vendorId: Mb,
        productId: 1476,
        kind: "dualShock4"
      }, {
        vendorId: Mb,
        productId: 2508,
        kind: "dualShock4"
      }, {
        vendorId: Mb,
        productId: 2976,
        kind: "dualShock4"
      }, {
        vendorId: Mb,
        productId: 3302,
        kind: "dualSense"
      }, {
        vendorId: Mb,
        productId: 3570,
        kind: "dualSense"
      }, {
        vendorId: Tb,
        productId: 8201,
        kind: "switchPro"
      }, {
        vendorId: Tb,
        productId: 8198,
        kind: "joyConLeft"
      }, {
        vendorId: Tb,
        productId: 8199,
        kind: "joyConRight"
      }],
      Yb = Eb.map((bb => {
        let {
          vendorId: ab,
          productId: Ub
        } = bb;
        return {
          vendorId: ab,
          productId: Ub
        }
      })),
      Bb = (bb, ab) => {
        var Ub, Ab;
        return null !== (Ub = null === (Ab = Eb.find((Ub => Ub.vendorId === bb && Ub.productId === ab))) || void 0 === Ab ? void 0 : Ab.kind) && void 0 !== Ub ? Ub : null
      },
      eb = {
        dualShock4: "DualShock 4",
        dualSense: "DualSense",
        switchPro: "Switch Pro Controller",
        joyConLeft: "Joy-Con (L)",
        joyConRight: "Joy-Con (R)"
      },
      vb = {
        dualSense: 0,
        dualShock4: 0,
        switchPro: 0,
        joyConRight: 1,
        joyConLeft: 2
      },
      Lb = 2e3 / 32767,
      Pb = 1 / 8192,
      Xb = 936 / 13371,
      jb = (bb, ab, Ub) => ({
        x: bb.getInt16(ab, !0) * Ub,
        y: bb.getInt16(ab + 2, !0) * Ub,
        z: bb.getInt16(ab + 4, !0) * Ub
      }),
      Rb = bb => 0 === bb.x && 0 === bb.y && 0 === bb.z,
      kb = (bb, ab, Ub) => null === ab ? null : "dualShock4" === bb ? 16 * (Ub - ab & 65535) / 3 / 1e6 : (Ub - ab >>> 0) / 3 / 1e6,
      yb = (bb, ab) => "joyConRight" === ab ? {
        x: bb.y,
        y: -bb.z,
        z: -bb.x
      } : {
        x: -bb.y,
        y: bb.z,
        z: -bb.x
      },
      Zb = (bb, ab, Ub, Mb) => Ab(bb) ? ((bb, ab, Ub, Ab) => {
        const Mb = ((bb, ab, Ub) => "dualShock4" === bb ? 1 === ab && Ub >= 63 ? 0 : 17 === ab && Ub >= 65 ? 2 : null : 1 === ab && Ub >= 62 ? 0 : 49 === ab && Ub >= 63 ? 1 : null)(bb, ab, Ub.byteLength);
        if (null === Mb) return null;
        if (2976 === Ab && 1 === ab && 0 !== (4 & Ub.getUint8(30))) return null;
        const Tb = Mb + ("dualShock4" === bb ? 12 : 15),
          Eb = jb(Ub, Tb, Lb),
          Yb = jb(Ub, Tb + 6, Pb);
        return Rb(Eb) && Rb(Yb) ? null : {
          readings: [{
            gyro: Eb,
            accel: Yb
          }],
          dtSec: null,
          sensorClock: "dualShock4" === bb ? Ub.getUint16(Mb + 9, !0) : Ub.getUint32(Mb + 27, !0)
        }
      })(bb, ab, Ub, Mb) : ((bb, ab, Ub) => {
        if (48 !== ab && 49 !== ab || Ub.byteLength < 48) return null;
        const Ab = [];
        for (let Mb = 0; Mb < 3; Mb++) {
          const ab = jb(Ub, 12 + 12 * Mb, 244e-6),
            Tb = jb(Ub, 18 + 12 * Mb, Xb);
          if (Rb(Tb) && Rb(ab)) return null;
          Ab.push({
            gyro: yb(Tb, bb),
            accel: yb(ab, bb)
          })
        }
        return {
          readings: Ab,
          dtSec: .005,
          sensorClock: null
        }
      })(bb, ab, Ub),
      Db = 1,
      zb = [0, 1, 64, 64, 0, 1, 64, 64],
      xb = (bb, ab, Ub) => new Uint8Array([15 & bb, ...zb, ab, ...Ub]),
      ib = [{
        subcommand: 64,
        args: [1]
      }, {
        subcommand: 3,
        args: [48]
      }],
      fb = {
        dualShock4: [2, 5],
        dualSense: [5]
      }
  },
  7788: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Hb,
      i: () => qb,
      j: () => yb,
      n: () => Xb.d,
      o: () => Fb,
      r: () => db,
      t: () => Zb,
      u: () => hb,
      v: () => Xb.n,
      x: () => Xb.o,
      B: () => ub,
      C: () => Xb.p,
      D: () => mb
    });
    var Ab = Ub(52),
      Mb = Ub(19),
      Tb = Ub(22),
      Eb = Ub(1345),
      Yb = Ub(1216),
      Bb = Ub(7759),
      eb = Ub(7793),
      vb = Ub(7743),
      Lb = Ub(7736),
      Pb = Ub(7795),
      Xb = Ub(1294),
      jb = Ub(7739),
      Rb = Ub(8218),
      kb = Ub(4061);
    const yb = bb => !bb.repeat && !(0, Rb.e)(bb.key),
      Zb = "PadHidesCursor";
    let Db = !1;
    const zb = bb => {
        bb !== Db && (Db = bb, document.documentElement.classList.toggle(Zb, bb))
      },
      xb = new class {
        constructor() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
        observe(bb) {
          let ab = !1,
            Ub = !1;
          bb.values.forEach(((bb, Ab) => {
            const Mb = bb >= (this.buttonsDown[Ab] ? jb.K : jb.J);
            Mb && !this.buttonsDown[Ab] && (ab = !0, Ub = !0), this.buttonsDown[Ab] = Mb
          }));
          return [bb.leftStick, bb.rightStick].forEach(((bb, Ab) => {
            const Mb = this.stickAnchors[Ab];
            Math.hypot(bb.x, bb.y) < (Mb ? jb.K : .3) ? this.stickAnchors[Ab] = null : (!Mb || Math.hypot(bb.x - Mb.x, bb.y - Mb.y) >= .3) && (this.stickAnchors[Ab] = {
              x: bb.x,
              y: bb.y
            }, ab = !0, Ub ||= !Mb)
          })), ab && (this.lastActivityMs = bb.timestampMs), this.onlyMovedOn = ab && !Ub, ab
        }
        wasOnlyMoveOn() {
          return this.onlyMovedOn
        }
        isHolding(bb) {
          return !(bb - this.lastActivityMs >= 1e3) && (this.buttonsDown.some((bb => bb)) || this.stickAnchors.some((bb => null !== bb)))
        }
        isStickOffRest() {
          return this.stickAnchors.some((bb => null !== bb))
        }
        reset() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
      };
    let ib = null,
      fb = !1;
    const mb = () => fb;
    let pb = null,
      Nb = !1,
      Wb = null;
    const Hb = () => Wb;
    let Ib = !1;
    const db = bb => {
        if (!xb.observe(bb)) return !1;
        if (Ib && xb.wasOnlyMoveOn() && !(0, Xb.d)()) return !1;
        Ib = !1, fb = !1;
        const ab = !(0, Xb.d)();
        return ab && (ib = bb, Wb = !Db && Nb && pb ? {
          ...pb
        } : null), Nb = !1, (0, Xb.n)("gamepad"), zb(!0), (0, Pb.o)((0, Bb.m)()), ab
      },
      Fb = bb => !(0, Xb.d)() || bb === ib,
      hb = () => {
        xb.reset()
      },
      Gb = () => {
        const bb = Mb.c.get("activeInputDevice"),
          ab = "gamepad" === bb ? Lb.g.getActivePad() : null;
        return {
          device: bb,
          inGame: (0, Yb.i)(),
          padMovesMouse: null !== ab && (0, vb.d)(ab.id)
        }
      },
      Qb = bb => {
        document.pointerLockElement ? pb = null : (pb ??= {
          x: 0,
          y: 0
        }, pb.x = bb.clientX, pb.y = bb.clientY)
      },
      qb = () => {
        const bb = new kb.e,
          ab = ab => {
            bb.reset(), Ib = !1, (0, Xb.n)(ab)
          },
          Ub = bb => {
            if (bb.isTrusted) {
              if (bb instanceof KeyboardEvent) {
                if ((0, Xb.j)(bb), !yb(bb)) return;
                fb = !0
              }
              if (bb instanceof PointerEvent && "touch" === bb.pointerType) return pb = null, void ab("touch");
              bb instanceof PointerEvent && (Qb(bb), Nb = !0), ("pointerdown" !== bb.type || (bb => {
                let {
                  device: ab,
                  inGame: Ub,
                  padMovesMouse: Ab
                } = bb;
                return !("gamepad" === ab && Ab && Ub)
              })(Gb())) && ab("keyboardMouse")
            }
          },
          Ab = bb => {
            bb.isTrusted && (pb = null, ab("touch"))
          },
          Eb = bb => {
            bb.isTrusted && "touch" !== bb.pointerType && !bb.relatedTarget && (pb = null)
          },
          Yb = Ub => {
            if (!Ub.isTrusted || "touch" === Ub.pointerType) return;
            Qb(Ub);
            const Ab = Ub.movementX || 0,
              Tb = Ub.movementY || 0;
            if (0 === Ab && 0 === Tb) return;
            if (Nb = !0, zb(!1), "keyboardMouse" === Mb.c.get("activeInputDevice")) return;
            const Eb = xb.isHolding(Ub.timeStamp),
              Yb = Gb(),
              Bb = (bb => {
                let {
                  device: ab,
                  inGame: Ub,
                  padMovesMouse: Ab,
                  padHolding: Mb
                } = bb;
                return ("gamepad" !== ab || !Ab) && "keyboardMouse" !== ab && (Ub || !Mb)
              })({
                ...Yb,
                inGame: Yb.inGame && (0, eb.c)(),
                padHolding: Eb
              });
            Bb && bb.add(Ab, Tb, Ub.timeStamp) && (ab("keyboardMouse"), Ib = xb.isStickOffRest())
          },
          Bb = bb => {
            zb("gamepad" === bb)
          },
          vb = {
            capture: !0,
            passive: !0
          };
        window.addEventListener("keydown", Ub, vb), window.addEventListener("pointerdown", Ub, vb), window.addEventListener("wheel", Ub, vb), window.addEventListener("touchstart", Ab, vb), window.addEventListener("pointermove", Yb, vb), window.addEventListener("pointerout", Eb, vb);
        const Lb = Tb.m.subscribe("appManagerUpdated|activeInputDevice", Bb);
        return Bb(Mb.c.get("activeInputDevice")), () => {
          window.removeEventListener("keydown", Ub, vb), window.removeEventListener("pointerdown", Ub, vb), window.removeEventListener("wheel", Ub, vb), window.removeEventListener("touchstart", Ab, vb), window.removeEventListener("pointermove", Yb, vb), window.removeEventListener("pointerout", Eb, vb), pb = null, Tb.m.unsubscribe(Lb), zb(!1)
        }
      },
      ub = () => {
        const [bb, ab] = (0, Ab.useState)(Bb.m);
        return (0, Eb.f)(Bb.b, (() => {
          ab((0, Bb.m)())
        })), (0, Eb.f)(Lb.d, (() => {
          ab((0, Bb.m)())
        })), bb
      }
  },
  7764: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Ab,
      g: () => Mb
    });
    const Ab = ["xbox", "playstation", "nintendo", "steamdeck", "generic"],
      Mb = bb => Ab.includes(bb)
  },
  7793: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => eb,
      c: () => vb,
      e: () => Bb,
      h: () => Yb
    });
    var Ab = Ub(19),
      Mb = Ub(1548),
      Tb = Ub(1641);
    const Eb = new Map,
      Yb = (bb, ab) => (Eb.has(bb) && console.warn(`Gameplay blocker "${bb}" registered twice; the newer one replaces it.`), Eb.set(bb, ab), () => {
        Eb.get(bb) === ab && Eb.delete(bb)
      }),
      Bb = () => (0, Tb.e)(document.activeElement),
      eb = function() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const [ab, Ub] of Eb)
          if (!bb.includes(ab) && Ub()) return ab;
        return null
      },
      vb = function() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return "inGame" === Ab.c.get("gameState") && (!(0, Mb.o)() && (!Bb() && null === eb(bb)))
      }
  },
  7739: (bb, ab, Ub) => {
    Ub.d(ab, {
      B: () => zb,
      D: () => yb,
      H: () => kb,
      I: () => eb,
      J: () => Pb,
      K: () => Xb,
      N: () => Mb,
      P: () => Ab,
      Q: () => ib,
      T: () => Wb,
      X: () => db,
      Y: () => xb,
      b: () => Fb,
      d: () => Hb,
      h: () => vb,
      i: () => Bb,
      j: () => Yb,
      m: () => mb,
      n: () => Zb,
      o: () => fb,
      s: () => Tb,
      t: () => Lb,
      u: () => Db,
      x: () => Ib
    });
    const Ab = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "View", "Menu", "LS", "RS", "Up", "Down", "Left", "Right", "Home"],
      Mb = Ab.length,
      Tb = function() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return {
          values: new Array(Mb).fill(0),
          leftStick: {
            x: 0,
            y: 0
          },
          rightStick: {
            x: 0,
            y: 0
          },
          timestampMs: bb
        }
      },
      Eb = Object.fromEntries(Ab.map(((bb, ab) => [bb, ab]))),
      Yb = bb => Eb[bb],
      Bb = function(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .95;
        const Ab = Math.hypot(bb.x, bb.y);
        if (Ab <= ab) return {
          x: 0,
          y: 0
        };
        const Mb = Math.min(1, (Ab - ab) / Math.max(1e-4, Ub - ab));
        return {
          x: bb.x / Ab * Mb,
          y: bb.y / Ab * Mb
        }
      },
      eb = ["exponential", "linear", "boost"],
      vb = (bb, ab) => {
        const Ub = Math.hypot(bb.x, bb.y);
        if (0 === Ub) return {
          x: 0,
          y: 0
        };
        const Ab = ((bb, ab) => {
          const Ub = Math.max(0, Math.min(1, bb));
          return "linear" === ab ? Ub : Ub * Ub
        })(Ub, ab);
        return {
          x: bb.x / Ub * Ab,
          y: bb.y / Ub * Ab
        }
      },
      Lb = .5,
      Pb = .3,
      Xb = .2,
      jb = Yb("LT"),
      Rb = Yb("RT"),
      kb = bb => bb === jb || bb === Rb,
      yb = (bb, ab) => {
        const Ub = Yb(ab);
        return kb(Ub) ? bb[Ub] > .35 : bb[Ub] >= Lb
      },
      Zb = (bb, ab) => bb.map(((bb, Ub) => kb(Ub) ? ab[Ub] ? bb > .35 : bb >= .55 : bb >= Lb)),
      Db = ["Up", "Down", "Left", "Right"],
      zb = bb => Db.includes(bb),
      xb = function(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
        return Math.hypot(bb.x, bb.y) < ab ? null : Math.abs(bb.x) > Math.abs(bb.y) ? bb.x > 0 ? "Right" : "Left" : bb.y > 0 ? "Down" : "Up"
      },
      ib = {
        initialDelayMs: 350,
        intervalMs: 120
      },
      fb = {
        initialDelayMs: 350,
        intervalMs: 150
      },
      mb = ["default", "slow", "off"],
      pb = 800,
      Nb = 250,
      Wb = (bb, ab) => "off" === ab ? null : "slow" === ab ? {
        initialDelayMs: Math.max(bb.initialDelayMs, pb),
        intervalMs: Math.max(bb.intervalMs, Nb)
      } : bb;
    class Hb {
      constructor(bb) {
        this.readTiming = bb, this.PY = !1, this.timing = null, this.nextFireMs = 0
      }
      update(bb, ab) {
        return bb ? this.PY ? !!(this.timing && ab >= this.nextFireMs) && (this.nextFireMs = ab + this.timing.intervalMs, !0) : (this.PY = !0, this.timing = this.readTiming(), this.nextFireMs = ab + (null !== (Ub = null === (Ab = this.timing) || void 0 === Ab ? void 0 : Ab.initialDelayMs) && void 0 !== Ub ? Ub : 0), !0) : (this.PY = !1, !1);
        var Ub, Ab
      }
      reset() {
        this.PY = !1
      }
    }
    const Ib = {
        initialDelayMs: 350,
        intervalMs: 80
      },
      db = {
        initialDelayMs: 400,
        intervalMs: 90
      };
    class Fb {
      constructor(bb) {
        this.timer = bb, this.direction = null
      }
      update(bb, ab) {
        return bb !== this.direction && (this.timer.reset(), this.direction = bb), this.timer.update(null !== bb, ab) ? bb : null
      }
      reset() {
        this.timer.reset(), this.direction = null
      }
    }
  },
  8258: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Mb,
      e: () => Tb
    });
    let Ab = -1 / 0;
    const Mb = () => {
        Ab = performance.now()
      },
      Tb = bb => performance.now() - Ab < bb
  },
  8222: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Eb,
      g: () => Tb
    });
    var Ab = Ub(7759),
      Mb = Ub(7739);
    const Tb = bb => (0, Mb.T)(bb, (0, Ab.i)().buttonRepeat),
      Eb = bb => new Mb.d((() => Tb(bb)))
  },
  7773: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Bb,
      d: () => Tb,
      g: () => Yb
    });
    var Ab = Ub(22),
      Mb = Ub(7759);
    const Tb = (bb, ab) => "OpenShop" === bb ? "shop" === ab : "OpenLobbyLeaderboard" !== bb || "leaderboard" === ab;
    let Eb = !1;
    const Yb = bb => {
        bb !== Eb && (Eb = bb, Ab.m.IR(Mb.b, (0, Mb.i)()))
      },
      Bb = () => ((bb, ab) => "shop" === bb && ab ? "shop" : "leaderboard")((0, Mb.i)().leaderboardButton, Eb)
  },
  7771: (bb, ab, Ub) => {
    Ub.d(ab, {
      $: () => Zb,
      B: () => Pb,
      E: () => Xb,
      G: () => Lb,
      K: () => zb,
      O: () => eb,
      R: () => yb,
      T: () => Nb,
      U: () => Db,
      X: () => Rb,
      Y: () => kb,
      _: () => jb,
      bb: () => db,
      c: () => Gb,
      eb: () => Tb,
      f: () => qb,
      fb: () => ib,
      g: () => Wb,
      h: () => Eb,
      jb: () => Qb,
      k: () => pb,
      kb: () => mb,
      m: () => fb,
      n: () => Fb,
      o: () => hb,
      q: () => vb,
      t: () => Bb,
      v: () => Yb,
      x: () => xb
    });
    var Ab = Ub(7753),
      Mb = Ub(7739);
    const Tb = {
        min: 25,
        max: 500,
        step: 5
      },
      Eb = {
        min: 25,
        max: 100,
        step: 5
      },
      Yb = {
        min: 0,
        max: .4,
        step: .01
      },
      Bb = {
        min: 25,
        max: 300,
        step: 5
      },
      eb = {
        min: .5,
        max: 6,
        step: .1
      },
      vb = (bb, ab) => {
        if (!Number.isFinite(bb)) return ab.min;
        const Ub = ab.min + Math.round((bb - ab.min) / ab.step) * ab.step,
          Ab = Math.min(ab.max, Math.max(ab.min, Ub));
        return Math.round(1e3 * Ab) / 1e3
      },
      Lb = bb => `${Math.round(bb)}%`,
      Pb = bb => Lb(100 * bb),
      Xb = bb => `${bb.toFixed(1)}\xd7`,
      jb = [{
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
      Rb = [{
        value: "exponential",
        labelKey: "controller:settingsCurveExponential"
      }, {
        value: "linear",
        labelKey: "controller:settingsCurveLinear"
      }, {
        value: "boost",
        labelKey: "controller:settingsCurveBoost"
      }],
      kb = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "focus",
        labelKey: "controller:settingsMenuNavFocus"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      yb = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "slot",
        labelKey: "controller:settingsInventoryNavSlot"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      Zb = [{
        value: "wheel",
        labelKey: "controller:settingsQuickChatWheel"
      }, {
        value: "off",
        labelKey: "controller:settingsQuickChatOff"
      }],
      Db = [{
        value: "shop",
        labelKey: "controller:settingsLeaderboardButtonShop"
      }, {
        value: "leaderboard",
        labelKey: "controller:settingsLeaderboardButtonLeaderboard"
      }],
      zb = [{
        value: "always",
        labelKey: "controller:settingsGyroAlways"
      }, {
        value: "aiming",
        labelKey: "controller:settingsGyroWhileAiming"
      }, {
        value: "button",
        labelKey: "controller:settingsGyroWhileButton"
      }],
      xb = [{
        value: "tapHold",
        labelKey: "controller:settingsEmoteButtonTapHold"
      }, {
        value: "wheel",
        labelKey: "controller:settingsEmoteButtonWheel"
      }],
      ib = [{
        value: "toggle",
        labelKey: "controller:settingsSneakToggle"
      }, {
        value: "hold",
        labelKey: "controller:settingsSneakHold"
      }],
      fb = [{
        value: "default",
        labelKey: "controller:settingsButtonRepeatDefault"
      }, {
        value: "slow",
        labelKey: "controller:settingsButtonRepeatSlow"
      }, {
        value: "off",
        labelKey: "controller:settingsButtonRepeatOff"
      }],
      mb = [{
        value: "short",
        labelKey: "controller:settingsTapHoldShort"
      }, {
        value: "medium",
        labelKey: "controller:settingsTapHoldMedium"
      }, {
        value: "long",
        labelKey: "controller:settingsTapHoldLong"
      }],
      pb = [{
        value: "hold",
        labelKey: "controller:settingsAttackHold"
      }, {
        value: "toggle",
        labelKey: "controller:settingsAttackToggle"
      }],
      Nb = {
        southpaw: "controller:settingsLayoutSouthpaw",
        triggersSwapped: "controller:settingsLayoutTriggersSwapped"
      },
      Wb = {
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
      Hb = {
        gameplay: "controller:settingsGroupGameplay",
        menu: "controller:settingsGroupMenus",
        inventory: "controller:settingsGroupInventory",
        keyboard: "controller:settingsGroupKeyboard"
      },
      Ib = [{
        kind: "fixed",
        stick: "move",
        labelKey: "controller:settingsActionMove"
      }, {
        kind: "fixed",
        stick: "look",
        labelKey: "controller:settingsActionLook"
      }],
      db = Ab.b.map((bb => {
        let {
          group: ab,
          actions: Ub
        } = bb;
        const Ab = Ub.map((bb => ({
          kind: "action",
          action: bb
        })));
        return {
          titleKey: Hb[ab],
          rows: "gameplay" === ab ? [...Ib, ...Ab] : Ab
        }
      })),
      Fb = Mb.P.filter((bb => "Home" !== bb)),
      hb = 1e4;
    class Gb {
      constructor(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
        this.cancelButton = bb, this.openButton = ab, this.accepts = Ub, this.startMs = null, this.ignoredUntilMs = new Map, this.cancelDownAtMs = null
      }
      update(bb, ab) {
        var Ub;
        this.updateIgnored(bb, ab);
        const Ab = ab - (null !== (Ub = this.startMs) && void 0 !== Ub ? Ub : ab) >= 250;
        for (const Mb of Fb)
          if (Mb !== this.cancelButton && Ab && !this.ignoredUntilMs.has(Mb) && bb.wasPressed(Mb) && this.accepts(Mb)) return {
            kind: "bind",
            button: Mb
          };
        if (this.ignoredUntilMs.has(this.cancelButton)) return null;
        if (bb.wasPressed(this.cancelButton)) {
          if (!this.accepts(this.cancelButton)) return {
            kind: "cancel"
          };
          this.cancelDownAtMs = ab
        }
        return null === this.cancelDownAtMs ? null : bb.isHeld(this.cancelButton) && ab - this.cancelDownAtMs >= 700 ? (this.cancelDownAtMs = null, {
          kind: "bind",
          button: this.cancelButton
        }) : bb.wasReleased(this.cancelButton) ? (this.cancelDownAtMs = null, {
          kind: "cancel"
        }) : null
      }
      getBindHoldProgress(bb) {
        return null === this.cancelDownAtMs ? 0 : Math.min(1, (bb - this.cancelDownAtMs) / 700)
      }
      updateIgnored(bb, ab) {
        if (null === this.startMs) {
          this.startMs = ab;
          for (const ab of Fb) bb.isDown(ab) && this.ignoredUntilMs.set(ab, 1 / 0);
          this.openButton && !this.ignoredUntilMs.has(this.openButton) && this.ignoredUntilMs.set(this.openButton, ab + 250)
        }
        for (const [Ub, Ab] of this.ignoredUntilMs) {
          const Mb = bb.isDown(Ub);
          Ab === 1 / 0 ? Mb || Ub !== this.openButton ? Mb || this.ignoredUntilMs.delete(Ub) : this.ignoredUntilMs.set(Ub, ab + 250) : ab >= Ab ? this.ignoredUntilMs.delete(Ub) : Mb && this.ignoredUntilMs.set(Ub, 1 / 0)
        }
      }
    }
    const Qb = 6e3;
    class qb {
      constructor() {
        this.downAtMs = null, this.pressesAtMs = []
      }
      update(bb, ab) {
        let {
          pressed: Ub,
          PY: Ab
        } = bb;
        if (Ub) {
          const bb = this.pressesAtMs.at(-1);
          if (this.pressesAtMs = void 0 !== bb && ab - bb < 1500 ? [...this.pressesAtMs, ab] : [ab], this.pressesAtMs.length >= 3) return 1
        }
        return Ab ? (this.downAtMs ??= ab, Math.min(1, (ab - this.downAtMs) / 1500)) : (this.downAtMs = null, 0)
      }
    }
  },
  4697: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Tb,
      e: () => Eb
    });
    var Ab = Ub(52);
    const Mb = new WeakMap,
      Tb = bb => {
        var ab;
        const Ub = bb.closest("[data-pad-slider]");
        return Ub && null !== (ab = Mb.get(Ub)) && void 0 !== ab ? ab : null
      },
      Eb = (bb, ab) => {
        const Ub = (0, Ab.useRef)(ab);
        Ub.current = ab, (0, Ab.useEffect)((() => {
          if (bb.current) return ((bb, ab) => (Mb.set(bb, ab), () => {
            Mb.get(bb) === ab && Mb.delete(bb)
          }))(bb.current, {
            adjust: bb => {
              Ub.current.adjust(bb)
            },
            setFraction: bb => {
              Ub.current.setFraction(bb)
            },
            endDrag: () => {
              Ub.current.endDrag()
            }
          })
        }), [bb])
      }
  },
  8284: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Tb,
      g: () => Mb
    });
    var Ab = Ub(22);
    const Mb = "localBlockBroken";

    function Tb() {
      return {
        onPlayerChangeBlock(bb, ab, Ub, Tb, Eb, Yb) {
          "Air" === Yb && Ab.m.IR(Mb)
        }
      }
    }
  },
  7799: (bb, ab, Ub) => {
    var Ab = {
      "./nintendo/A.svg": 7803,
      "./nintendo/B.svg": 7811,
      "./nintendo/Down.svg": 7816,
      "./nintendo/Home.svg": 7823,
      "./nintendo/LB.svg": 7828,
      "./nintendo/LS.svg": 7833,
      "./nintendo/LT.svg": 7839,
      "./nintendo/Left.svg": 7846,
      "./nintendo/LeftStick.svg": 7851,
      "./nintendo/Menu.svg": 7856,
      "./nintendo/RB.svg": 7862,
      "./nintendo/RS.svg": 7871,
      "./nintendo/RT.svg": 7880,
      "./nintendo/Right.svg": 7882,
      "./nintendo/RightStick.svg": 7887,
      "./nintendo/Up.svg": 7896,
      "./nintendo/View.svg": 7899,
      "./nintendo/X.svg": 7907,
      "./nintendo/Y.svg": 7911,
      "./playstation/A.svg": 7920,
      "./playstation/B.svg": 7922,
      "./playstation/Down.svg": 7925,
      "./playstation/Home.svg": 7929,
      "./playstation/LB.svg": 7932,
      "./playstation/LS.svg": 7935,
      "./playstation/LT.svg": 7941,
      "./playstation/Left.svg": 7945,
      "./playstation/LeftStick.svg": 7953,
      "./playstation/Menu.svg": 7960,
      "./playstation/RB.svg": 7967,
      "./playstation/RS.svg": 7974,
      "./playstation/RT.svg": 7980,
      "./playstation/Right.svg": 7986,
      "./playstation/RightStick.svg": 7994,
      "./playstation/Up.svg": 7998,
      "./playstation/View.svg": 8005,
      "./playstation/X.svg": 8014,
      "./playstation/Y.svg": 8016,
      "./steamdeck/A.svg": 8022,
      "./steamdeck/B.svg": 8029,
      "./steamdeck/Down.svg": 8033,
      "./steamdeck/Home.svg": 8039,
      "./steamdeck/LB.svg": 8044,
      "./steamdeck/LS.svg": 8049,
      "./steamdeck/LT.svg": 8055,
      "./steamdeck/Left.svg": 8063,
      "./steamdeck/LeftStick.svg": 8067,
      "./steamdeck/Menu.svg": 8070,
      "./steamdeck/RB.svg": 8072,
      "./steamdeck/RS.svg": 8077,
      "./steamdeck/RT.svg": 8083,
      "./steamdeck/Right.svg": 8088,
      "./steamdeck/RightStick.svg": 8091,
      "./steamdeck/Up.svg": 8093,
      "./steamdeck/View.svg": 8097,
      "./steamdeck/X.svg": 8102,
      "./steamdeck/Y.svg": 8104,
      "./xbox/A.svg": 8109,
      "./xbox/B.svg": 8112,
      "./xbox/Down.svg": 8118,
      "./xbox/Home.svg": 8126,
      "./xbox/LB.svg": 8133,
      "./xbox/LS.svg": 8142,
      "./xbox/LT.svg": 8148,
      "./xbox/Left.svg": 8153,
      "./xbox/LeftStick.svg": 8155,
      "./xbox/Menu.svg": 8160,
      "./xbox/RB.svg": 8165,
      "./xbox/RS.svg": 8173,
      "./xbox/RT.svg": 8181,
      "./xbox/Right.svg": 8189,
      "./xbox/RightStick.svg": 8195,
      "./xbox/Up.svg": 8199,
      "./xbox/View.svg": 8201,
      "./xbox/X.svg": 8205,
      "./xbox/Y.svg": 8210
    };

    function Mb(bb) {
      var ab = Tb(bb);
      return Ub(ab)
    }

    function Tb(bb) {
      if (!Ub.o(Ab, bb)) {
        var ab = new Error("Cannot find module '" + bb + "'");
        throw ab.code = "MODULE_NOT_FOUND", ab
      }
      return Ab[bb]
    }
    Mb.keys = function() {
      return Object.keys(Ab)
    }, Mb.resolve = Tb, bb.exports = Mb, Mb.id = 7799
  },
  7803: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/A.926fb88933484dfbde14.svg"
  },
  7811: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/B.9f5ec099f78f84e44427.svg"
  },
  7816: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  7823: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  7828: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/LB.3a20b15927b55d5d8b60.svg"
  },
  7833: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  7839: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/LT.9fdc5e69011b9d41f50a.svg"
  },
  7846: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  7851: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  7856: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Menu.c903a662eb685211e52e.svg"
  },
  7862: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/RB.bba470ddb76ceec5d168.svg"
  },
  7871: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  7880: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/RT.e5a9fbcc3c79550111ca.svg"
  },
  7882: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  7887: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  7896: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  7899: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/View.0c9378b5d720a636d50d.svg"
  },
  7907: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/X.c9377519af94e6dce1d7.svg"
  },
  7911: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Y.62d8c17731dd2e172426.svg"
  },
  7920: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/A.958a6de9474f8d0c9caf.svg"
  },
  7922: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/B.d05958bfa88a1162b47a.svg"
  },
  7925: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Down.db68fb3980768eb54671.svg"
  },
  7929: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  7932: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/LB.37a3c5128c958ec2a0c2.svg"
  },
  7935: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/LS.15b0cc5bf3f2fe7bbd8b.svg"
  },
  7941: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/LT.5412ae5222c69f8c833f.svg"
  },
  7945: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Left.4457b2895ce94a5df32e.svg"
  },
  7953: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  7960: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Menu.1e8427f8133c9d456c53.svg"
  },
  7967: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/RB.c96c4aa2590209e930c7.svg"
  },
  7974: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/RS.8d70d147cf1ab136e845.svg"
  },
  7980: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/RT.1e4691bb5a7c049693df.svg"
  },
  7986: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Right.a1e101413040c540b879.svg"
  },
  7994: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  7998: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Up.7544a65ad4f611a55775.svg"
  },
  8005: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/View.003cae39de89cae0b9d8.svg"
  },
  8014: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/X.d88b6e62dd8fb4bda32a.svg"
  },
  8016: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Y.428d3e70775877892f82.svg"
  },
  8022: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8029: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8033: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8039: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Home.ea8b009cfa9562aa644e.svg"
  },
  8044: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/LB.f283d355d22fc107d6d6.svg"
  },
  8049: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8055: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/LT.13e66c122e7ee04bb876.svg"
  },
  8063: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8067: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8070: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Menu.90fc4e918900eb5062a0.svg"
  },
  8072: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/RB.918a7f16dc054d96b6f3.svg"
  },
  8077: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8083: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/RT.a0523211130959598bed.svg"
  },
  8088: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8091: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8093: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8097: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/View.0bc952e292c28c3baac2.svg"
  },
  8102: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8104: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  },
  8109: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8112: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8118: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8126: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Home.8898f76b20962fe52ab7.svg"
  },
  8133: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/LB.689ba3703ae248f2e4cc.svg"
  },
  8142: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8148: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/LT.9c2d10d335ab5c590525.svg"
  },
  8153: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8155: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8160: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Menu.9e485791ea97009871ca.svg"
  },
  8165: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/RB.7ee5ce48dd551f993f80.svg"
  },
  8173: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8181: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/RT.903ecadc55a9e9e00f07.svg"
  },
  8189: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8195: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8199: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8201: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/View.3c5eeb34f0413bde4a65.svg"
  },
  8205: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8210: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);