export const id = 28;
export const ids = [28];
export const modules = {
  4703: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => mb,
      g: () => Nb,
      i: () => lb,
      m: () => Cb
    });
    var kb = sb(64),
      Wb = sb(4709),
      ab = sb(4129),
      Tb = sb(1341),
      Ub = sb(4728),
      Ib = sb(1033),
      Hb = sb.n(Ib),
      fb = sb(1332),
      Mb = sb(1704),
      Xb = sb(4730),
      nb = sb(1087);

    function mb(bb) {
      let {
        label: cb,
        onClick: sb,
        checked: kb,
        circleInfoText: Wb,
        className: Ub,
        disabled: Ib,
        note: fb
      } = bb;
      return (0, nb.jsxs)("div", {
        "aria-disabled": Ib || void 0,
        "data-pad-focusable": !0,
        className: Hb()("SettingBox CheckboxContainer", {
          [Ub]: Ub,
          SettingBoxDisabled: Ib
        }),
        onClick: () => {
          Ib || sb(!kb)
        },
        children: [(0, nb.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, nb.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, nb.jsx)(ab.e, {
              className: "SettingsCheckbox",
              checked: kb,
              disabled: Ib,
              onChange: () => {}
            })
          }), (0, nb.jsxs)("div", {
            className: "CheckboxText",
            children: [cb, Wb && (0, nb.jsx)("span", {
              onClick: bb => bb.stopPropagation(),
              children: (0, nb.jsx)(Tb.c, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: Wb
              })
            })]
          })]
        }), fb && (0, nb.jsx)("div", {
          className: "SettingNote",
          children: fb
        })]
      })
    }

    function lb(bb) {
      let {
        name: cb,
        onChange: sb,
        min: Wb,
        max: ab,
        step: Ub,
        initValue: Ib,
        circleInfoText: fb,
        format: Mb,
        className: Xb,
        padStep: mb,
        disabled: lb = !1,
        selectableMax: Qb,
        cappedNote: Cb,
        onChangeComplete: Nb
      } = bb;
      const [Vb, Lb] = (0, kb.useState)(Ib), ub = (0, kb.useRef)(Ib);
      (0, kb.useEffect)((() => {
        ub.current = Ib, Lb(Ib)
      }), [Ib]);
      const Yb = void 0 !== Qb && Qb < ab,
        hb = Yb ? {
          "--slider-selectable": (Qb - Wb) / (ab - Wb)
        } : void 0;
      return (0, nb.jsxs)("div", {
        className: Hb()("SettingBox SettingsSliderDiv", {
          [Xb]: Xb,
          SettingBoxDisabled: lb,
          SliderCapped: Yb
        }),
        style: hb,
        children: [(0, nb.jsxs)("div", {
          className: "SliderText",
          children: [`${cb}: ${Mb?Mb(Vb):Vb}`, fb && (0, nb.jsx)(Tb.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: fb
          })]
        }), (0, nb.jsx)("div", {
          className: "SliderDiv",
          children: (0, nb.jsx)(eb, {
            value: Vb,
            min: Wb,
            max: ab,
            step: Ub,
            onChange: bb => {
              if (Yb && bb >= Qb && Vb === Qb) return;
              const cb = Yb ? Math.min(bb, Qb) : bb;
              ub.current = cb, Lb(cb), sb(cb)
            },
            onChangeComplete: Nb && (() => {
              Nb(ub.current)
            }),
            format: Mb,
            padStep: mb,
            disabled: lb
          })
        }), Yb && Cb && (0, nb.jsx)("div", {
          className: "SettingNote",
          children: Cb
        })]
      })
    }
    const Qb = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function eb(bb) {
      var cb;
      let {
        value: sb,
        min: ab,
        max: Tb,
        step: Ub,
        onChange: Ib,
        orientation: Hb,
        reverse: fb,
        setIsChanging: Mb,
        tooltip: mb,
        labels: lb,
        handleLabel: eb,
        format: Cb,
        onChangeStart: Nb,
        onChangeComplete: Vb,
        padStep: Lb,
        disabled: ub = !1
      } = bb;
      const Yb = (0, kb.useRef)(null),
        hb = (0, kb.useRef)(null);
      (0, kb.useLayoutEffect)((() => {
        var bb, cb, sb;
        const kb = null !== (bb = null === (cb = Yb.current) || void 0 === cb ? void 0 : cb.querySelector(".rangeslider")) && void 0 !== bb ? bb : null;
        null === kb || void 0 === kb || kb.setAttribute("data-pad-slider", ""), null === kb || void 0 === kb || kb.setAttribute("data-pad-focusable", ""), null === kb || void 0 === kb || null === (sb = kb.querySelector(".rangeslider__handle")) || void 0 === sb || sb.setAttribute("data-pad-slider-handle", ""), hb.current = kb
      }), []), (0, kb.useLayoutEffect)((() => {
        var bb, cb;
        ub ? null === (bb = hb.current) || void 0 === bb || bb.setAttribute("aria-disabled", "true") : null === (cb = hb.current) || void 0 === cb || cb.removeAttribute("aria-disabled")
      }), [ub]);
      const Jb = (null !== (cb = String(Ub).split(".")[1]) && void 0 !== cb ? cb : "").length,
        gb = bb => {
          const cb = Number((Math.round((bb - ab) / Ub) * Ub + ab).toFixed(Jb));
          return Math.min(Tb, Math.max(ab, cb))
        },
        Bb = (0, kb.useRef)(Vb);
      Bb.current = Vb, (0, kb.useEffect)((() => {
        const bb = Yb.current;
        if (!bb) return;
        const cb = bb => {
          var cb;
          Qb.has(bb.key) && (null === (cb = Bb.current) || void 0 === cb || cb.call(Bb))
        };
        return bb.addEventListener("keyup", cb), () => {
          bb.removeEventListener("keyup", cb)
        }
      }), []);
      const tb = (0, kb.useRef)(!1);
      return (0, Xb.d)(hb, {
        adjust: bb => {
          if (ub) return;
          const cb = null !== Lb && void 0 !== Lb ? Lb : Math.max(Ub, Math.round((Tb - ab) / 20 / Ub) * Ub),
            kb = gb(sb + bb * cb * (fb ? -1 : 1));
          kb !== sb && (null === Nb || void 0 === Nb || Nb(), Ib(kb), null === Vb || void 0 === Vb || Vb())
        },
        setFraction: bb => {
          if (ub) return;
          const cb = gb(ab + (fb ? 1 - bb : bb) * (Tb - ab));
          cb !== sb && (tb.current || (tb.current = !0, null === Nb || void 0 === Nb || Nb()), Ib(cb))
        },
        endDrag: () => {
          tb.current && (tb.current = !1, null === Vb || void 0 === Vb || Vb())
        }
      }), (0, nb.jsx)("div", {
        ref: Yb,
        style: {
          display: "contents"
        },
        children: (0, nb.jsx)(Wb.e, {
          value: sb,
          min: ab,
          max: Tb,
          step: Ub,
          onChange: Ib,
          orientation: Hb,
          reverse: fb,
          tooltip: mb,
          labels: lb,
          handleLabel: eb,
          format: Cb,
          onChangeStart: () => {
            null === Nb || void 0 === Nb || Nb(), null === Mb || void 0 === Mb || Mb(!0)
          },
          onChangeComplete: () => {
            null === Mb || void 0 === Mb || Mb(!1), null === Vb || void 0 === Vb || Vb()
          }
        })
      })
    }
    async function Cb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const cb = fb.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: "",
        unlockPointerKey: bb
      });
      !0 === await cb.getResult() && (0, Mb.reloadBloxd)()
    }

    function Nb(bb) {
      let {
        label: cb,
        options: sb,
        value: kb,
        onChange: Wb,
        circleInfoText: ab
      } = bb;
      return (0, nb.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, nb.jsxs)("div", {
          className: "SliderText",
          children: [cb, ab && (0, nb.jsx)(Tb.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: ab
          })]
        }), (0, nb.jsx)(Ub.e, {
          ariaLabel: cb,
          options: sb,
          value: kb,
          onChange: Wb
        })]
      })
    }
  },
  4728: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Tb
    });
    var kb = sb(1033),
      Wb = sb.n(kb),
      ab = sb(1087);

    function Tb(bb) {
      let {
        options: cb,
        value: sb,
        onChange: kb,
        ariaLabel: Tb,
        className: Ub,
        reselectable: Ib = !1,
        keepsFocus: Hb = !1
      } = bb;
      return (0, ab.jsx)("div", {
        className: Wb()("SegmentedToggle", Ub),
        role: "group",
        "aria-label": Tb,
        children: cb.map((bb => {
          const cb = bb.value === sb;
          return (0, ab.jsx)("button", {
            type: "button",
            "aria-pressed": cb,
            "aria-label": bb.ariaLabel,
            title: bb.ariaLabel,
            className: Wb()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: cb
            }),
            onMouseDown: Hb ? bb => {
              bb.preventDefault()
            } : void 0,
            onClick: () => {
              cb && !Ib || kb(bb.value)
            },
            children: bb.label
          }, bb.value)
        }))
      })
    }
  },
  7786: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Wb,
      g: () => ab,
      h: () => Xb,
      k: () => Mb,
      l: () => Hb,
      o: () => Ub,
      s: () => kb,
      u: () => nb,
      w: () => mb
    });
    const kb = ["menuConfirm", "menuBack", "menuTabPrevious", "menuTabNext", "menuPageUp", "menuPageDown", "menuSecondary", "menuToggleCursor"],
      Wb = [{
        group: "gameplay",
        actions: ["jump", "sneak", "sneakToggle", "sprint", "attack", "use", "hotbarPrevious", "hotbarNext", "inventory", "actionButton", "perspective", "pickBlock", "drop", "emoteWheel", "chat", "pause", "leaderboard"]
      }, {
        group: "menu",
        actions: kb
      }, {
        group: "inventory",
        actions: ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryClose", "inventoryPanelPrevious", "inventoryPanelNext", "inventoryDrop", "inventoryHotbarSwap"]
      }, {
        group: "keyboard",
        actions: ["keyboardType", "keyboardBackspace", "keyboardSpace", "keyboardCaretLeft", "keyboardCaretRight", "keyboardShift", "keyboardSymbols", "keyboardSubmit", "keyboardClose", "keyboardChannel"]
      }],
      ab = {
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
      Tb = ["pickBlock", "perspective"],
      Ub = bb => Tb.includes(bb) ? Tb : [bb],
      Ib = Object.fromEntries(Wb.flatMap((bb => {
        let {
          group: cb,
          actions: sb
        } = bb;
        return sb.map((bb => [bb, cb]))
      }))),
      Hb = bb => Ib[bb],
      fb = {
        pause: ["menu"],
        leaderboard: ["menu"],
        inventory: ["menu"],
        menuPageUp: ["inventory"],
        menuPageDown: ["inventory"]
      },
      Mb = bb => {
        var cb;
        return [Hb(bb), ...null !== (cb = fb[bb]) && void 0 !== cb ? cb : []]
      },
      Xb = new Set(["menu", "inventory", "keyboard"]),
      nb = {
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
      mb = new Set(["forward", "backward", "left", "right"])
  },
  7782: (bb, cb, sb) => {
    sb.d(cb, {
      B: () => Nb,
      E: () => gb,
      I: () => fb,
      L: () => Jb,
      M: () => yb,
      e: () => Cb,
      f: () => Lb,
      i: () => Xb,
      k: () => nb,
      l: () => Db,
      o: () => tb,
      s: () => Bb,
      v: () => Vb,
      w: () => Pb,
      y: () => hb
    });
    var kb = sb(7786),
      Wb = sb(7789),
      ab = sb(7774),
      Tb = sb(7807);
    const Ub = bb => "pickBlock" === bb ? "perspective" : bb,
      Ib = (bb, cb) => {
        var sb;
        const Wb = Ub(cb);
        return null !== (sb = bb[Wb]) && void 0 !== sb ? sb : kb.g[Wb]
      },
      Hb = new Map([
        ["menuConfirm", "menuBack"],
        ["inventoryPrimary", "inventoryClose"],
        ["keyboardType", "keyboardClose"]
      ].flatMap((bb => {
        let [cb, sb] = bb;
        return [
          [cb, sb],
          [sb, cb]
        ]
      }))),
      fb = (bb, cb) => null !== bb && void 0 !== bb ? bb : "nintendo" === cb,
      Mb = bb => fb((0, Wb.g)().swapConfirmBack, (0, Wb.h)()) && Hb.get(bb) || bb,
      Xb = bb => Ib((0, Wb.g)().bindings, Mb(bb)),
      nb = bb => kb.g[Mb(bb)],
      mb = Object.keys(kb.g),
      lb = bb => "gameplay" === (0, kb.l)(bb) ? ["gameplay"] : (0, kb.k)(bb),
      Qb = (bb, cb) => {
        const sb = lb(cb);
        return lb(bb).some((bb => sb.includes(bb)))
      },
      eb = (bb, cb, sb) => {
        const Wb = Ib(bb, cb),
          Tb = new Set((0, kb.o)(cb)),
          Hb = [...Tb];
        for (let kb = Hb.pop(); kb; kb = Hb.pop())
          for (const cb of mb) {
            const ab = Ib(bb, cb);
            Tb.has(cb) || ab !== sb && ab !== Wb || !Qb(kb, cb) || (Tb.add(cb), Hb.push(cb))
          }
        const fb = {
          ...bb
        };
        for (const Mb of Tb) {
          const cb = Ib(bb, Mb) === Wb ? sb : Wb,
            Tb = (0, kb.k)(Mb).some((bb => kb.h.has(bb)));
          if ((0, ab.F)(cb) && Tb) return null;
          fb[Ub(Mb)] = cb
        }
        for (const ab of Object.keys(fb)) fb[ab] === kb.g[ab] && delete fb[ab];
        return fb
      },
      Cb = (bb, cb) => null !== eb((0, Wb.g)().bindings, Mb(bb), cb),
      Nb = (bb, cb) => {
        if (Xb(bb) === cb) return !0;
        const sb = eb((0, Wb.g)().bindings, Mb(bb), cb);
        return !!sb && ((0, Wb.i)({
          bindings: sb
        }), !0)
      },
      Vb = (bb, cb) => {
        const sb = (0, kb.o)(cb);
        return mb.filter((cb => Ub(cb) === cb && !sb.includes(cb) && Ib(bb, Mb(cb)) !== Xb(cb)))
      },
      Lb = ["southpaw", "triggersSwapped"],
      ub = {
        southpaw: {
          sprint: "RS",
          sneakToggle: "LS"
        },
        triggersSwapped: {
          attack: "LT",
          use: "RT"
        }
      },
      Yb = bb => Object.keys(ub[bb]),
      hb = (bb, cb) => "southpaw" === bb ? cb.swapSticks : Yb(bb).every((sb => Ib(cb.bindings, sb) === ub[bb][sb])),
      Jb = (bb, cb) => {
        const sb = (0, Wb.g)();
        let ab = sb.bindings;
        for (const Wb of Yb(bb)) {
          const sb = cb ? ub[bb][Wb] : kb.g[Wb];
          if (ab = eb(ab, Wb, sb), !ab) return !1
        }
        return (0, Wb.i)({
          swapSticks: "southpaw" === bb ? cb : sb.swapSticks,
          bindings: ab
        }), !0
      },
      gb = () => {
        (0, Wb.i)({
          swapSticks: !1,
          bindings: {}
        })
      },
      Bb = () => (0, Wb.g)().swapSticks ? "RightStick" : "LeftStick",
      tb = () => (0, Wb.g)().swapSticks ? "LeftStick" : "RightStick",
      yb = bb => (0, Wb.g)().swapSticks && (0, ab.F)(bb),
      Pb = bb => yb(bb) ? Bb() : tb(),
      Db = bb => {
        if (kb.w.has(bb)) return Bb();
        const cb = kb.u[bb];
        return cb && ("leaderboard" !== cb || (0, Tb.f)(bb, (0, Tb.d)())) ? Xb(cb) : null
      }
  },
  7766: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      ControllerCategory: () => MI,
      ControllerGlyph: () => Qa,
      ControllerRoot: () => MU,
      PadLobbyShortcuts: () => BU,
      PadSneakChip: () => CU,
      PadTooltip: () => VU,
      attachPressToContinue: () => GU,
      getBoundButton: () => fb.i,
      getControllerSettings: () => Xb.g,
      getGlyphForNoaAction: () => fb.l,
      getInventoryCursorState: () => nI,
      getMenuShortcutButton: () => Kk,
      getPadGlyphIconName: () => lU,
      getPadGlyphIconUrl: () => QU,
      getPadRepeatTiming: () => lb.f,
      handOverPadFocus: () => lI,
      hasActivePad: () => XI,
      isPadSteppingSlots: () => mI
    });
    const kb = JSON.parse('{"controller":{"inventoryTake":"Take","inventoryTakeHalf":"Take half","inventoryPlace":"Place","inventoryPlaceOne":"Place one","inventoryQuickMove":"Quick move","inventoryToHotbar":"To hotbar","inventoryPutBack":"Put back","inventoryHotbarSwap":"Swap with hotbar","inventorySwapHere":"Swap here","inventoryCancel":"Cancel","inventoryClose":"Close","inventoryDrop":"Drop (hold: stack)","inventorySelect":"Select","inventoryCraft":"Craft (hold to repeat)","inventoryCraftAll":"Craft all","inventoryChooseRecipe":"Choose","inventoryBackToRecipes":"Back to recipes","inventoryType":"Type","inventoryPanels":"Switch panel","inventoryCategory":"Category","inventoryPage":"Page","disconnected":"Controller disconnected","gameplayReload":"Reload","gameplayActionWheelHint":"(hold for more)","gameplaySneaking":"Sneaking","gameplayLoadFailedTitle":"Controller unavailable","gameplayLoadFailedSubtitle":"Reload the page to play with your controller.","gameplayDropStack":"Keep holding to drop the stack","gameplayAttackLatched":"Attacking","gameplayPickBlock":"Pick block","padButtonView":"View","padButtonMenu":"Menu","padButtonHome":"Home","padButtonCreate":"Create","padButtonOptions":"Options","padButtonDpadUp":"D-pad \u2191","padButtonDpadDown":"D-pad \u2193","padButtonDpadLeft":"D-pad \u2190","padButtonDpadRight":"D-pad \u2192","padButtonLeftStick":"L Stick","padButtonRightStick":"R Stick","settingsLook":"Look","settingsLookSensitivityX":"Look sensitivity (horizontal)","settingsLookSensitivityY":"Look sensitivity (vertical)","settingsAimLookSensitivity":"Look sensitivity while aiming (use held)","settingsInvertLookX":"Invert horizontal look","settingsInvertLookY":"Invert vertical look","settingsLookCurve":"Look curve","settingsLookCurveHint":"Steep gives finer aim near the centre, Linear turns at an even rate, and Boost turns faster when you hold the stick all the way.","settingsCurveExponential":"Steep","settingsCurveLinear":"Linear","settingsCurveBoost":"Boost","settingsLookDeadzone":"Look deadzone","settingsGyro":"Gyro aiming","settingsGyroToggle":"Aim by moving the controller","settingsGyroToggleInfo":"Turn and tilt the controller to aim, on top of the right stick.","settingsGyroTogglePhone":"Aim by moving your phone or tablet","settingsGyroToggleInfoPhone":"Turn and tilt your phone or tablet to aim, on top of the right stick.","settingsGyroUnsupported":"Gyro aiming needs Chrome or Edge.","settingsGyroBlocked":"Gyro aiming isn\'t available on this site.","settingsGyroPhoneNeedsController":"Connect a controller to aim by moving your phone or tablet.","settingsGyroSteamHint":"If Steam already turns your gyro into mouse movement, leave this off.","settingsGyroConnect":"Connect motion controller","settingsGyroConnectHint":"Works with DualSense, DualShock 4 and Switch controllers.","settingsGyroConnectNeedsClick":"Click Connect with your mouse: the browser asks before sharing a controller.","settingsGyroOpenFailed":"Another app is using the controller. Close apps such as Steam or DS4Windows, then try again.","settingsGyroConnected":"Aiming with {{name}}.","settingsGyroAllowMotion":"Allow motion sensor","settingsGyroAllowNeedsTap":"Tap Allow motion sensor on your screen to turn it on.","settingsGyroPhoneOn":"Aiming with this device\'s motion sensor.","settingsGyroPhoneWaiting":"Waiting for this device\'s motion sensor\u2026","settingsGyroPhoneNoSensor":"No motion sensor found on this device.","settingsGyroPhoneDenied":"Motion access is blocked. Allow it in your browser settings.","settingsGyroSensitivity":"Gyro sensitivity","settingsGyroActivation":"Gyro turns on","settingsGyroAlways":"Always","settingsGyroWhileAiming":"While aiming","settingsGyroWhileButton":"While holding a button","settingsGyroAimingHint":"Hold {{button}} to aim with motion.","settingsGyroButton":"Gyro button","settingsGyroButtonHint":"While gyro aiming is on, this button only turns the gyro on in game, so pick one you rarely use.","settingsMovement":"Movement","settingsMoveDeadzone":"Move deadzone","settingsAutoSprint":"Sprint at full tilt","settingsAutoSprintInfo":"Push the movement stick all the way to sprint.","settingsSneak":"Sneak","settingsSneakHold":"Hold","settingsSneakToggle":"Toggle","settingsButtons":"Buttons","settingsPromptFamily":"Button prompts","settingsPromptAuto":"Match my controller","settingsPromptXbox":"Xbox","settingsPromptPlayStation":"PlayStation","settingsPromptNintendo":"Nintendo","settingsPromptSteamDeck":"Steam Deck","settingsPromptGeneric":"Generic","settingsHideButtonHints":"Hide button hints","settingsVibration":"Vibration","settingsCursorSpeed":"Virtual cursor speed","settingsCursorMagnetism":"Cursor snaps onto buttons","settingsMenuBackToCategories":"Back returns to the category list first","settingsAccessibility":"Accessibility","settingsSwapConfirmBack":"Swap confirm and back","settingsSwapToast":"Select and Back have swapped buttons.","settingsLayoutRefusedToast":"This layout doesn\'t fit your current buttons. Reset them to use it.","settingsSwapConfirmBackInfo":"Select with the right face button and go back with the bottom one, in menus, the inventory and the on-screen keyboard. On by default for Nintendo controllers.","settingsButtonRepeat":"Button repeat","settingsButtonRepeatHint":"How a held button repeats in menus, sliders, the on-screen keyboard and crafting. Off acts once per press, and holding drop in game drops just one item.","settingsButtonRepeatDefault":"Default","settingsButtonRepeatSlow":"Slow (0.8 s, then 4 a second)","settingsButtonRepeatOff":"Off (once per press)","settingsTapHoldTime":"Tap/hold time","settingsTapHoldTimeHint":"How long to hold the chat, emote or action button to open its wheel, or the view button to change view where a tap picks a block. Dropping a whole stack takes 0.8, 1 or 1.3 s.","settingsTapHoldShort":"Short (0.25 s)","settingsTapHoldMedium":"Medium (0.5 s)","settingsTapHoldLong":"Long (0.8 s)","settingsEmoteButton":"Emote button","settingsEmoteButtonTapHoldHint":"Tap to repeat your last emote, or hold to open the emote wheel.","settingsEmoteButtonWheelHint":"Any press opens the emote wheel, with no hold to time. Pick with the stick, then select.","settingsEmoteButtonTapHold":"Tap repeats, hold opens wheel","settingsEmoteButtonWheel":"Opens the wheel","settingsAttackMode":"Attack / mine","settingsAttackHoldHint":"Hold attack to keep attacking or mining.","settingsAttackToggleHint":"Press attack once to keep attacking or mining, and again to stop.","settingsAttackHold":"Hold","settingsAttackToggle":"Toggle","settingsLargePointer":"Large pointer and focus","settingsLargePointerInfo":"A bigger menu cursor, thicker selection brackets and bigger button hints.","settingsRemap":"Remap buttons","settingsRemapHint":"Select an action, then press a button. If that button is taken, the two swap.","settingsLayoutSouthpaw":"Southpaw (move with the right stick)","settingsLayoutTriggersSwapped":"Triggers swapped (attack with the left trigger)","settingsCapturePrompt":"Press a button","settingsCaptureCancelHint":"Press {{button}} to cancel","settingsCaptureCancelOrBindHint":"Tap {{button}} to cancel, or hold it to choose it","settingsReset":"Reset","settingsSwapNotice":"{{action}} moved to {{button}}","settingsResetAll":"Reset all buttons and sticks","settingsGroupGameplay":"Movement & gameplay","settingsGroupMenus":"Menus","settingsGroupInventory":"Inventory","settingsGroupKeyboard":"On-screen keyboard","settingsActionMove":"Move","settingsActionLook":"Look around","settingsActionJump":"Jump","settingsActionSneak":"Sneak","settingsActionSneakToggle":"Toggle sneak","settingsActionSprint":"Sprint","settingsActionAttack":"Attack / mine","settingsActionUse":"Use / place","settingsActionHotbarPrevious":"Previous hotbar slot","settingsActionHotbarNext":"Next hotbar slot","settingsActionInventory":"Inventory","settingsActionActionButton":"Game action","settingsActionPerspective":"Change view","settingsActionPickBlock":"Pick block (creative)","settingsActionDrop":"Drop item","settingsActionEmoteWheel":"Emotes","settingsActionChat":"Chat","settingsActionPause":"Pause menu","settingsActionLeaderboard":"Shop / leaderboard","settingsActionMenuConfirm":"Select","settingsActionMenuBack":"Back","settingsActionMenuTabPrevious":"Previous tab","settingsActionMenuTabNext":"Next tab","settingsActionMenuPageUp":"Page up","settingsActionMenuPageDown":"Page down","settingsActionMenuSecondary":"Secondary action","settingsActionMenuToggleCursor":"Switch to virtual cursor","settingsActionInventoryPrimary":"Pick up / place","settingsActionInventorySecondary":"Pick up half / place one","settingsActionInventoryQuickMove":"Quick move","settingsActionInventoryHotbarSwap":"Swap with hotbar slot","settingsActionInventoryClose":"Close","settingsActionInventoryPanelPrevious":"Previous panel","settingsActionInventoryPanelNext":"Next panel","settingsActionInventoryDrop":"Drop item","settingsActionKeyboardType":"Type key","settingsActionKeyboardBackspace":"Backspace","settingsActionKeyboardSpace":"Space","settingsActionKeyboardCaretLeft":"Move cursor left","settingsActionKeyboardCaretRight":"Move cursor right","settingsActionKeyboardShift":"Shift","settingsActionKeyboardSymbols":"Accents and symbols","settingsActionKeyboardSubmit":"Send","settingsActionKeyboardClose":"Close keyboard","settingsActionKeyboardChannel":"Chat channel","settingsAlternatives":"Try alternatives","settingsAlternativesHint":"Try each way of playing and keep the one that feels best.","settingsMenuNavigation":"Menu navigation","settingsMenuNavigationHint":"Steer a cursor with the stick and jump between buttons with the D-pad, or use just one.","settingsNavHybrid":"Cursor and D-pad","settingsMenuNavFocus":"Jump between buttons","settingsVirtualCursor":"Virtual cursor","settingsInventoryNavigation":"Inventory","settingsInventoryNavigationHint":"Steer a cursor with the stick and step slot by slot with the D-pad, or use just one.","settingsInventoryNavSlot":"Slot by slot","settingsQuickChat":"Hold chat button","settingsQuickChatHint":"Hold the chat button to pick a quick phrase. Tapping it still opens chat.","settingsQuickChatWheel":"Quick chat wheel","settingsQuickChatOff":"Off","settingsLeaderboardButton":"Shop / leaderboard button","settingsLeaderboardButtonHint":"Open the shop in one press in games that have one. The lobby leaderboard is still in the pause menu.","settingsLeaderboardButtonShop":"Shop, in games with one","settingsLeaderboardButtonLeaderboard":"Always the leaderboard","settingsTester":"Gamepad tester","settingsTesterNoPad":"Connect a gamepad and press any button to test it.","settingsTesterFamily":"Detected: {{family}}","settingsTesterHint":"Start a test to try every button and stick without moving through the menu.","settingsTesterStart":"Start test","settingsTesterStop":"Stop test","settingsTesterTesting":"Press anything to see it light up. To stop, hold {{button}} or press it three times.","settingsControlsNote":"Playing with a gamepad? Change its buttons and feel in Gamepad settings.","settingsOpenController":"Gamepad settings","keyboardSpace":"Space","keyboardSend":"Send","keyboardDone":"Done","keyboardTargetChat":"Chat","keyboardTargetSign":"Sign","keyboardTargetNameTag":"Name tag","keyboardTargetBook":"Book page","keyboardTargetBookTitle":"Book title","keyboardTargetText":"Text","keyboardPhraseGg":"gg","keyboardPhraseHi":"hi","keyboardPhraseThanks":"thanks","keyboardPhraseGl":"gl","keyboardPhraseBrb":"brb","keyboardPhraseYes":"yes","keyboardPhraseNo":"no","keyboardPhraseHelp":"help!","quickChatPick":"Pick a phrase","actionWheelPick":"Pick an action","wheelReleaseToPick":"Release to pick","wheelClose":"Close","wheelChoose":"Choose","menusSelect":"Select","menusBack":"Back","menusClose":"Close","menusQuickChat":"Quick chat (hold)","menusSkipTutorial":"Skip tutorial","menusTabs":"Tabs","menusRows":"Rows","menusCursorMode":"Cursor","menusFocusMode":"Focus","menusClick":"Click","menusRightClick":"Right-click","menusScroll":"Scroll","menusFriends":"Friends","menusSearch":"Search","menusSettings":"Settings","menusLeaveGameTitle":"Leave the game?","menusLeaveGameLeave":"Leave","menusLeaveGameStay":"Stay","menusNotifications":"Notifications","menusLobby":"Lobby","menusShop":"Shop","menusTasks":"Tasks & leaderboards","menusInvite":"Invite friends","menusAdjust":"Adjust","menusFavourite":"Favourite","screensPressToContinue":"Press {{button}} to continue","screensPressToEnterGame":"Press {{button}} to enter game","screensEnterGame":"Enter game","screensBackToGames":"Back to games","tutorialMine":"Mine","tutorialPlace":"Place / Use","tutorialInventory":"Inventory","tutorialPause":"Pause","menusUseMouse":"Use a mouse or touch here"}}');
    var Wb = sb(1197),
      ab = sb(1381),
      Tb = sb(7771),
      Ub = sb(89),
      Ib = sb(19),
      Hb = sb(26),
      fb = sb(7782),
      Mb = sb(7812),
      Xb = sb(7789),
      nb = sb(7814),
      mb = sb(7774),
      lb = sb(8281),
      Qb = sb(8285),
      eb = sb(1651);
    const Cb = (bb, cb, sb) => Math.max(cb, Math.min(sb, bb)),
      Nb = bb => Math.min(bb.width, bb.height) / 720,
      Vb = bb => Math.max(.15, bb);
    class Lb {
      constructor() {
        this.locked = !1
      }
      lock() {
        this.locked = !0
      }
      update(bb, cb) {
        const sb = Math.hypot(bb.x, bb.y) >= (bb => Math.max(.3, bb))(cb);
        return this.locked ? (this.locked = sb, !1) : sb
      }
    }
    const ub = (bb, cb) => {
        const sb = Cb(cb.dtMs, 0, 100),
          kb = sb / 1e3,
          Wb = Nb(cb.viewport) * (cb.cursorSpeedPercent / 100),
          ab = (0, mb.m)(cb.stick, Vb(cb.moveDeadzone)),
          Tb = Math.hypot(ab.x, ab.y),
          Ub = ((bb, cb, sb) => {
            if (cb < .3) return 0;
            const kb = sb / 350;
            return cb >= .85 ? Math.min(1, bb + kb) : Math.max(0, bb - kb)
          })(bb.speedRamp, Tb, sb);
        let Ib = bb.x,
          Hb = bb.y;
        if (Tb > 0) {
          const bb = .45 + .55 * Ub,
            sb = cb.context.overInteractive ? .45 : 1,
            fb = 1400 * (bb => {
              const cb = Cb(bb, 0, 1);
              return .3 * cb + .7 * cb * cb
            })(Tb) * Wb * bb * sb;
          Ib += ab.x / Tb * fb * kb, Hb += ab.y / Tb * fb * kb
        }
        const fb = Math.hypot(cb.dpad.x, cb.dpad.y);
        if (fb > 0) {
          const bb = 500 * Wb;
          Ib += cb.dpad.x / fb * bb * kb, Hb += cb.dpad.y / fb * bb * kb
        }
        const Mb = cb.context.magnetTarget;
        if (Mb && Tb < .3 && 0 === fb) {
          const bb = ((bb, cb, sb, kb, Wb) => {
            const ab = cb.x - bb.x,
              Tb = cb.y - bb.y,
              Ub = Math.hypot(ab, Tb);
            if (0 === Ub) return {
              x: 0,
              y: 0
            };
            const Ib = Math.min(Ub, Wb * (1 - kb / .3));
            let Hb = ab / Ub * Ib,
              fb = Tb / Ub * Ib;
            if (kb > 0) {
              const bb = sb.x / kb,
                cb = sb.y / kb,
                Wb = Hb * bb + fb * cb;
              Wb < 0 && (Hb -= Wb * bb, fb -= Wb * cb)
            }
            return {
              x: Hb,
              y: fb
            }
          })({
            x: Ib,
            y: Hb
          }, Mb, ab, Tb, 120 * Nb(cb.viewport) * kb);
          Ib += bb.x, Hb += bb.y
        }
        return {
          x: Cb(Ib, 0, Math.max(0, cb.viewport.width - 1)),
          y: Cb(Hb, 0, Math.max(0, cb.viewport.height - 1)),
          speedRamp: Ub
        }
      },
      Yb = bb => {
        const cb = (0, mb.m)(bb, .2);
        return 0 !== cb.x || 0 !== cb.y
      },
      hb = (bb, cb) => {
        const sb = (0, mb.m)(bb, .2),
          kb = Math.hypot(sb.x, sb.y);
        if (0 === kb) return {
          x: 0,
          y: 0
        };
        const Wb = kb * kb * 1600,
          ab = Cb(cb, 0, 100) / 1e3;
        return {
          x: sb.x / kb * Wb * ab,
          y: sb.y / kb * Wb * ab
        }
      },
      Jb = (bb, cb) => "y" === cb ? bb.scrollHeight > bb.clientHeight + 1 : bb.scrollWidth > bb.clientWidth + 1,
      gb = (bb, cb) => {
        if (!Jb(bb, cb)) return !1;
        const sb = getComputedStyle(bb),
          kb = "y" === cb ? sb.overflowY : sb.overflowX;
        return "auto" === kb || "scroll" === kb
      },
      Bb = (bb, cb, sb) => {
        for (let ab = bb instanceof HTMLElement ? bb : null !== (kb = null === bb || void 0 === bb ? void 0 : bb.parentElement) && void 0 !== kb ? kb : null; ab; ab = ab.parentElement) {
          var kb;
          if (gb(ab, cb)) return ab;
          if (ab === sb) return null
        }
        if (sb) return null;
        const Wb = document.scrollingElement;
        return Wb instanceof HTMLElement && Jb(Wb, cb) ? Wb : null
      },
      tb = new WeakMap,
      yb = (bb, cb) => {
        const sb = performance.now(),
          kb = tb.get(bb);
        if (kb && kb.axis === cb && sb - kb.atMs < 500 && (!kb.container || kb.container.isConnected)) return kb.container;
        const Wb = Pb(bb, cb);
        return tb.set(bb, {
          axis: cb,
          atMs: sb,
          container: Wb
        }), Wb
      },
      Pb = (bb, cb) => {
        let sb = gb(bb, cb) ? bb : null,
          kb = sb ? sb.clientWidth * sb.clientHeight : 0;
        for (const Wb of bb.querySelectorAll("*")) {
          const bb = Wb.clientWidth * Wb.clientHeight;
          bb > kb && gb(Wb, cb) && (sb = Wb, kb = bb)
        }
        return sb
      },
      Db = (bb, cb, sb) => "y" === cb ? sb < 0 ? bb.scrollTop > 0 : bb.scrollTop + bb.clientHeight < bb.scrollHeight - 1 : sb < 0 ? bb.scrollLeft > 0 : bb.scrollLeft + bb.clientWidth < bb.scrollWidth - 1,
      Eb = (bb, cb, sb) => {
        "y" === cb ? bb.scrollBy({
          top: sb,
          behavior: "instant"
        }) : bb.scrollBy({
          left: sb,
          behavior: "instant"
        })
      },
      ib = bb => {
        if (!bb || bb === document.scrollingElement) return new DOMRect(0, 0, window.innerWidth, window.innerHeight);
        const cb = bb.getBoundingClientRect(),
          sb = Math.max(0, cb.left),
          kb = Math.max(0, cb.top);
        return new DOMRect(sb, kb, Math.min(window.innerWidth, cb.right) - sb, Math.min(window.innerHeight, cb.bottom) - kb)
      },
      Ob = (bb, cb) => bb.left < cb.right && cb.left < bb.right && bb.top < cb.bottom && cb.top < bb.bottom;
    var Gb = sb(64),
      Kb = sb(1033),
      Zb = sb.n(Kb),
      zb = sb(1087);
    let qb = 0,
      db = !1;
    class Ab {
      constructor() {
        this.element = null, this.shownKey = "", this.gap = null
      }
      setElement(bb) {
        this.element = bb, this.shownKey = "", this.gap = null
      }
      show(bb) {
        const cb = this.element;
        if (!cb) return;
        const sb = bb ? this.keepOnScreen(cb, bb) : null,
          kb = sb ? `${sb.left},${sb.top},${sb.width},${sb.height}` : "";
        if (kb === this.shownKey) return;
        const Wb = "" === this.shownKey;
        this.shownKey = kb, cb.classList.toggle("Visible", null !== sb), sb && (cb.classList.toggle("Snap", Wb), cb.style.width = `${sb.width}px`, cb.style.height = `${sb.height}px`, cb.style.transform = `translate(${sb.left}px, ${sb.top}px)`, Wb && (cb.offsetWidth, cb.classList.remove("Snap")))
      }
      hide() {
        this.show(null)
      }
      keepOnScreen(bb, cb) {
        var sb;
        const kb = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!db){db=!0;const bb=document.createElement("div");bb.setAttribute("aria-hidden","true"),bb.style.cssText="position: fixed; top: 0; left: 0; width: 1rem; height: 0; visibility: hidden; pointer-events: none",document.body.appendChild(bb),new ResizeObserver((()=>{qb++})).observe(bb)}return String(qb)})()}`;
        (null === (sb = this.gap) || void 0 === sb ? void 0 : sb.key) !== kb && (this.gap = {
          px: parseFloat(getComputedStyle(bb).paddingLeft) || 0,
          key: kb
        });
        const Wb = this.gap.px + 2,
          ab = Math.max(cb.left, Wb),
          Tb = Math.max(cb.top, Wb),
          Ub = Math.min(cb.left + cb.width, window.innerWidth - Wb),
          Ib = Math.min(cb.top + cb.height, window.innerHeight - Wb);
        return Ub <= ab || Ib <= Tb ? cb : {
          left: ab,
          top: Tb,
          width: Ub - ab,
          height: Ib - Tb
        }
      }
    }
    const wb = bb => {
      let {
        placer: cb,
        className: sb
      } = bb;
      const kb = (0, Gb.useCallback)((bb => {
        cb.setElement(bb)
      }), [cb]);
      return (0, zb.jsx)("div", {
        ref: kb,
        className: Zb()("PadReticle", sb),
        "aria-hidden": !0
      })
    };
    var rb = sb(8288),
      ob = sb(1706);
    const Sb = bb => bb >= 56320 && bb <= 57343,
      Rb = bb => bb >= 55296 && bb <= 56319,
      vb = (bb, cb) => cb >= 2 && Sb(bb.charCodeAt(cb - 1)) && Rb(bb.charCodeAt(cb - 2)) ? cb - 2 : Math.max(0, cb - 1),
      Fb = (bb, cb) => {
        let sb;
        var kb, Wb;
        return sb = bb.start !== bb.end ? cb < 0 ? bb.start : bb.end : cb < 0 ? vb(bb.value, bb.start) : (kb = bb.value, (Wb = bb.start) + 1 < kb.length && Rb(kb.charCodeAt(Wb)) && Sb(kb.charCodeAt(Wb + 1)) ? Wb + 2 : Math.min(kb.length, Wb + 1)), {
          value: bb.value,
          start: sb,
          end: sb
        }
      },
      xb = ["text", "search", "url", "email", "tel", "password", "number"],
      jb = bb => !(!(0, ob.d)(bb) || bb.isContentEditable || bb.hasAttribute("data-pad-no-osk")) && (bb instanceof HTMLTextAreaElement || bb instanceof HTMLInputElement && xb.includes(bb.type)),
      pb = bb => null !== bb.selectionStart,
      bc = bb => {
        var cb, sb;
        const {
          value: kb
        } = bb;
        return {
          value: kb,
          start: null !== (cb = bb.selectionStart) && void 0 !== cb ? cb : kb.length,
          end: null !== (sb = bb.selectionEnd) && void 0 !== sb ? sb : kb.length
        }
      },
      cc = (bb, cb, sb) => {
        if (bb.readOnly) return;
        const kb = bb instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(kb, "value").set.call(bb, cb.value), pb(bb) && bb.setSelectionRange(cb.start, cb.end), (0, eb.i)(bb, new InputEvent("input", {
          bubbles: !0,
          inputType: sb
        }))
      };
    let sc = !1;
    const kc = (bb, cb) => !!document.execCommand(bb, !1, cb) || (sc || (sc = !0, console.warn(`execCommand("${bb}") failed; the on-screen keyboard is setting the value directly`)), !1),
      Wc = (bb, cb) => {
        kc("insertText", cb) || cc(bb, function(bb, cb) {
          let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
          const kb = bb.value.slice(0, bb.start),
            Wb = bb.value.slice(bb.end);
          let ab = sb < 0 ? cb.length : Math.max(0, sb - kb.length - Wb.length);
          ab > 0 && ab < cb.length && Rb(cb.charCodeAt(ab - 1)) && ab--;
          const Tb = cb.slice(0, ab),
            Ub = kb.length + Tb.length;
          return {
            value: kb + Tb + Wb,
            start: Ub,
            end: Ub
          }
        }(bc(bb), cb, bb.maxLength), "insertText")
      },
      ac = bb => {
        kc("delete") || cc(bb, (bb => {
          const cb = bb.start === bb.end ? vb(bb.value, bb.start) : bb.start;
          return {
            value: bb.value.slice(0, cb) + bb.value.slice(bb.end),
            start: cb,
            end: cb
          }
        })(bc(bb)), "deleteContentBackward")
      },
      Tc = (bb, cb) => {
        if (!pb(bb)) return;
        const sb = Fb(bc(bb), cb);
        bb.setSelectionRange(sb.start, sb.end)
      },
      Uc = ["button", "a[href]", "input:not([type=hidden])", "textarea", "select", "[role=button]", "[role=tab]", "[role=switch]", "[role=checkbox]", "[role=option]", "[role=menuitem]", "[data-pad-focusable]", "[data-pad-tab]", ".Dropdown-control", ".Dropdown-option"].join(","),
      Ic = (bb, cb) => {
        if ("function" === typeof bb.checkVisibility) return !bb.checkVisibility({
          visibilityProperty: !0,
          checkVisibilityCSS: !0,
          opacityProperty: cb,
          checkOpacity: cb
        });
        const {
          visibility: sb
        } = getComputedStyle(bb);
        if ("hidden" === sb || "collapse" === sb) return !0;
        if (!cb) return !1;
        for (let kb = bb; kb; kb = kb.parentElement)
          if ("0" === getComputedStyle(kb).opacity) return !0;
        return !1
      },
      Hc = bb => {
        if (!bb.isConnected || Ic(bb, !0)) return !1;
        const cb = bb.getBoundingClientRect();
        return cb.width > 0 && cb.height > 0
      },
      fc = bb => !!bb.matches(":disabled, [aria-disabled='true']") || "button" === bb.getAttribute("role") && "-1" === bb.getAttribute("tabindex"),
      Mc = bb => {
        var cb;
        if (bb.closest("[data-pad-ignore]")) return !0;
        return !!(null === (cb = bb.parentElement) || void 0 === cb ? void 0 : cb.closest("[data-pad-focusable]"))
      },
      Xc = bb => {
        const cb = bb.querySelectorAll(Uc);
        return bb.matches(Uc) ? [bb, ...cb] : cb
      },
      nc = bb => {
        const cb = [];
        for (const sb of Xc(bb)) !Mc(sb) && Hc(sb) && cb.push(sb);
        return cb
      },
      mc = new WeakMap,
      lc = bb => {
        const cb = mc.get(bb);
        if (cb && Qc(cb, bb)) return !0;
        for (const sb of Xc(bb))
          if (!Mc(sb) && Hc(sb)) return mc.set(bb, sb), !0;
        return mc.delete(bb), !1
      },
      Qc = (bb, cb) => cb.contains(bb) && bb.matches(Uc) && !Mc(bb) && Hc(bb),
      ec = (bb, cb) => Qc(bb, cb) && !fc(bb),
      Cc = bb => {
        const cb = cb => {
          let sb = 0;
          for (let kb = cb.parentElement; kb && kb !== bb; kb = kb.parentElement) sb++;
          return sb
        };
        return [...bb.querySelectorAll("[data-pad-initial-area]")].filter(Hc).sort(((bb, sb) => cb(sb) - cb(bb)))
      },
      Nc = bb => jb(bb),
      Vc = bb => {
        const cb = bb.getBoundingClientRect();
        return {
          x: cb.left + cb.width / 2,
          y: cb.top + cb.height / 2
        }
      },
      Lc = (bb, cb, sb) => ({
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window,
        clientX: bb.x,
        clientY: bb.y,
        screenX: bb.x,
        screenY: bb.y,
        button: cb,
        buttons: sb,
        pointerId: 1,
        pointerType: "mouse",
        isPrimary: !0
      }),
      uc = (bb, cb) => {
        (0, eb.i)(bb, cb)
      },
      Yc = function(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const kb = 0 === sb ? 1 : 2;
        uc(bb, new PointerEvent("pointerdown", Lc(cb, sb, kb))), uc(bb, new MouseEvent("mousedown", Lc(cb, sb, kb)))
      },
      hc = function(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        uc(bb, new PointerEvent("pointerup", Lc(cb, sb, 0))), uc(bb, new MouseEvent("mouseup", Lc(cb, sb, 0)))
      },
      Jc = function(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        Yc(bb, cb, sb), hc(bb, cb, sb), uc(bb, 0 === sb ? new MouseEvent("click", Lc(cb, 0, 0)) : new MouseEvent("contextmenu", Lc(cb, 2, 0)))
      },
      gc = function(bb, cb, sb) {
        let {
          leaveBelow: kb = null,
          enterBelow: Wb = null
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (bb !== cb) {
          if (null !== bb && void 0 !== bb && bb.isConnected) {
            const Wb = {
              ...Lc(sb, 0, 0),
              relatedTarget: cb
            };
            uc(bb, new PointerEvent("pointerout", Wb)), uc(bb, new MouseEvent("mouseout", Wb));
            const ab = bb => !!cb && bb.contains(cb) || !!kb && bb.contains(kb);
            for (let cb = bb; cb && !ab(cb); cb = cb.parentElement) uc(cb, new PointerEvent("pointerleave", {
              ...Wb,
              bubbles: !1
            })), uc(cb, new MouseEvent("mouseleave", {
              ...Wb,
              bubbles: !1
            }))
          }
          if (cb) {
            const kb = {
              ...Lc(sb, 0, 0),
              relatedTarget: bb
            };
            uc(cb, new PointerEvent("pointerover", kb)), uc(cb, new MouseEvent("mouseover", kb));
            const ab = [],
              Tb = cb => !(null === bb || void 0 === bb || !bb.isConnected) && cb.contains(bb) || !!Wb && cb.contains(Wb);
            for (let bb = cb; bb && !Tb(bb); bb = bb.parentElement) ab.push(bb);
            for (const bb of ab.reverse()) uc(bb, new PointerEvent("pointerenter", {
              ...kb,
              bubbles: !1
            })), uc(bb, new MouseEvent("mouseenter", {
              ...kb,
              bubbles: !1
            }));
            uc(cb, new PointerEvent("pointermove", Lc(sb, 0, 0))), uc(cb, new MouseEvent("mousemove", Lc(sb, 0, 0)))
          }
        } else cb && (uc(cb, new PointerEvent("pointermove", Lc(sb, 0, 0))), uc(cb, new MouseEvent("mousemove", Lc(sb, 0, 0))))
      },
      Bc = bb => {
        Hb.j.QQ(rb.h, bb)
      },
      tc = bb => {
        if (Nc(bb)) return void Bc(bb);
        const cb = bb.hasAttribute("data-pad-focusable") ? bb.querySelector("a[href]") : null,
          sb = null !== cb && void 0 !== cb ? cb : bb;
        Jc(sb, Vc(sb))
      },
      yc = ".Dropdown-root.is-open",
      Pc = bb => {
        const cb = bb.querySelector(".Dropdown-control");
        return tc(cb), cb
      },
      Dc = bb => {
        var cb;
        const sb = null !== (cb = bb.closest(yc)) && void 0 !== cb ? cb : bb.querySelector(yc);
        return sb ? Pc(sb) : null
      },
      Ec = bb => {
        for (const cb of document.querySelectorAll(yc)) cb.contains(bb) || Pc(cb)
      },
      ic = bb => null !== bb.closest("input[type=color], input[type=file], [data-pad-mouse-only]"),
      Oc = bb => {
        const cb = bb ? document.elementFromPoint(bb.x, bb.y) : null;
        return !(null === cb || void 0 === cb || !cb.closest("[data-pad-repeat]"))
      },
      Gc = bb => {
        var cb;
        return null !== (cb = [...bb.querySelectorAll("[data-pad-back]")].find(Hc)) && void 0 !== cb ? cb : null
      },
      Kc = bb => {
        const cb = Gc(bb);
        return !!cb && (tc(cb), !0)
      },
      Zc = bb => {
        var cb, sb, kb, Wb;
        return null !== (cb = null !== (sb = null !== (kb = bb.getAttribute("data-pad-key")) && void 0 !== kb ? kb : bb.getAttribute("href")) && void 0 !== sb ? sb : null === (Wb = bb.querySelector("a[href]")) || void 0 === Wb ? void 0 : Wb.getAttribute("href")) && void 0 !== cb ? cb : null
      },
      zc = {
        x: 0,
        y: 0,
        visible: !1,
        pressed: !1
      };
    const qc = new class {
        constructor() {
          this.state = zc, this.listeners = new Set
        }
        get() {
          return this.state
        }
        set(bb) {
          if (cb = this.state, sb = bb, (cb.visible || sb.visible) && (cb.visible !== sb.visible || cb.x !== sb.x || cb.y !== sb.y || cb.pressed !== sb.pressed)) {
            var cb, sb;
            this.state = bb;
            for (const cb of this.listeners) cb(bb)
          }
        }
        hide() {
          this.set(zc)
        }
        subscribe(bb) {
          return this.listeners.add(bb), () => {
            this.listeners.delete(bb)
          }
        }
      },
      dc = (bb, cb) => {
        let {
          kind: sb,
          holding: kb,
          hasPress: Wb,
          hasBack: ab,
          slotHasItem: Tb
        } = cb;
        switch (bb) {
          case "primary":
            return "slot" === sb ? "slotPrimary" : "recipe" === sb || "button" === sb ? Wb ? "pressPrimary" : "click" : "textField" === sb ? "openKeyboard" : null;
          case "secondary":
            return "slot" === sb ? "slotSecondary" : "button" !== sb && "recipe" !== sb || !Wb ? null : "pressSecondary";
          case "quickMove":
            return "slot" === sb && Tb ? "slotQuickMove" : null;
          case "hotbarSwap":
            return "slot" === sb && Tb && !kb ? "hotbarPick" : null;
          case "openButton":
            return "close";
          case "back":
            return kb ? "cancel" : ab ? "pressBack" : "close"
        }
      },
      Ac = bb => {
        const cb = [];
        if (bb.hotbarPicking) return cb.push({
          actions: ["inventoryPrimary", "inventoryHotbarSwap"],
          labelKey: "inventorySwapHere"
        }), cb.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryCancel"
        }), cb;
        if (bb.holding) "slot" === bb.kind ? (cb.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryPlace"
        }), cb.push({
          actions: ["inventorySecondary"],
          labelKey: "inventoryPlaceOne"
        })) : "textField" === bb.kind && cb.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryType"
        }), cb.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryPutBack"
        }), cb.push({
          actions: ["inventoryDrop"],
          labelKey: "inventoryDrop"
        }), bb.openButtonCloses && cb.push({
          actions: ["inventory"],
          labelKey: "inventoryClose"
        });
        else {
          var sb;
          "slot" === bb.kind && bb.slotHasItem ? (cb.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryTake"
          }), cb.push({
            actions: ["inventorySecondary"],
            labelKey: "inventoryTakeHalf"
          }), cb.push({
            actions: ["inventoryQuickMove"],
            labelKey: bb.quickMoveToHotbar ? "inventoryToHotbar" : "inventoryQuickMove"
          }), cb.push({
            actions: ["inventoryHotbarSwap"],
            labelKey: "inventoryHotbarSwap"
          }), cb.push({
            actions: ["inventoryDrop"],
            labelKey: "inventoryDrop"
          })) : "button" !== bb.kind && "recipe" !== bb.kind || !bb.pressHints ? "button" === bb.kind || "recipe" === bb.kind ? cb.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventorySelect"
          }) : "textField" === bb.kind && cb.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryType"
          }) : (bb.pressHints.primary && cb.push({
            actions: ["inventoryPrimary"],
            labelKey: bb.pressHints.primary
          }), bb.pressHints.secondary && cb.push({
            actions: ["inventorySecondary"],
            labelKey: bb.pressHints.secondary
          }));
          const kb = null === (sb = bb.pressHints) || void 0 === sb ? void 0 : sb.back;
          kb && cb.push({
            actions: ["inventoryClose"],
            labelKey: kb
          });
          const Wb = [];
          bb.openButtonCloses && Wb.push("inventory"), kb || Wb.push("inventoryClose"), Wb.length > 0 && cb.push({
            actions: Wb,
            labelKey: "inventoryClose"
          })
        }
        return cb.push({
          actions: ["inventoryPanelPrevious", "inventoryPanelNext"],
          labelKey: "inventoryPanels"
        }), bb.hasCategories ? cb.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryCategory"
        }) : bb.hasList && cb.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryPage"
        }), cb
      };
    var wc = sb(8292);
    class rc {
      constructor(bb) {
        this.probes = bb, this.byContainer = new Map, this.byParent = new Map
      }
      find(bb, cb) {
        const sb = Bb(bb, "y", cb);
        if (!sb) return null;
        let kb = this.byContainer.get(sb);
        return kb || (this.probes.push({
          element: sb,
          rect: vc(sb.getBoundingClientRect())
        }), kb = {
          container: sb,
          box: ib(sb),
          group: Rc(sb)
        }, this.byContainer.set(sb, kb)), kb
      }
      findForParent(bb, cb) {
        let sb = this.byParent.get(bb);
        return void 0 === sb && (sb = this.find(bb, cb), this.byParent.set(bb, sb)), sb
      }
    }
    const oc = new WeakMap;
    let Sc = 0;
    const Rc = bb => {
        let cb = oc.get(bb);
        return cb || (cb = "el:" + Sc++, oc.set(bb, cb)), cb
      },
      vc = bb => ({
        left: bb.left,
        top: bb.top,
        width: bb.width,
        height: bb.height
      }),
      Fc = bb => bb.width > 0 && bb.height > 0,
      xc = (bb, cb) => Fc(bb) && bb.left + bb.width > 0 && bb.top + bb.height > 0 && bb.left < cb.width && bb.top < cb.height,
      jc = (bb, cb, sb) => {
        const kb = bb.top + bb.height / 2;
        return xc(bb, cb) && (!sb || kb >= sb.top && kb <= sb.bottom)
      },
      pc = bb => ({
        x: bb.left + bb.width / 2,
        y: bb.top + bb.height / 2
      }),
      bs = (bb, cb, sb) => bb < 0 ? sb >= 0 ? 0 : cb - 1 : ((bb + sb) % cb + cb) % cb,
      cs = bb => "Left" === bb || "Right" === bb,
      ss = (bb, cb, sb) => {
        const kb = cs(sb),
          Wb = kb ? bb.top : bb.left,
          ab = kb ? bb.height : bb.width,
          Tb = kb ? cb.top : cb.left,
          Ub = kb ? cb.height : cb.width,
          Ib = Math.max(0, Math.max(Tb - (Wb + ab), Wb - (Tb + Ub)));
        return ab > 1.5 * Ub ? {
          gap: Ib,
          offset: Math.max(0, Tb - Wb) + .1 * Math.max(0, Wb - Tb)
        } : {
          gap: Ib,
          offset: Math.abs(Tb + Ub / 2 - (Wb + ab / 2))
        }
      },
      ks = (bb, cb, sb) => {
        const kb = ((bb, cb, sb) => {
          const kb = pc(bb),
            Wb = pc(cb),
            ab = cs(sb) ? Math.min(bb.width, cb.width) / 4 : Math.min(bb.height, cb.height) / 4;
          switch (sb) {
            case "Right":
              return Wb.x - kb.x >= ab ? Math.max(0, cb.left - (bb.left + bb.width)) : null;
            case "Left":
              return kb.x - Wb.x >= ab ? Math.max(0, bb.left - (cb.left + cb.width)) : null;
            case "Down":
              return Wb.y - kb.y >= ab ? Math.max(0, cb.top - (bb.top + bb.height)) : null;
            case "Up":
              return kb.y - Wb.y >= ab ? Math.max(0, bb.top - (cb.top + cb.height)) : null
          }
        })(bb, cb, sb);
        if (null === kb) return null;
        const Wb = ss(bb, cb, sb);
        return kb + 3 * Wb.gap + .5 * Wb.offset
      },
      Ws = (bb, cb) => cb.visible || null !== cb.scrollGroup && cb.scrollGroup === bb.scrollGroup,
      as = (bb, cb, sb, kb) => {
        let Wb = null,
          ab = 1 / 0;
        for (const Tb of cb) {
          if (Tb.key === bb.key || !Ws(bb, Tb) || !kb(Tb)) continue;
          const cb = ks(bb.rect, Tb.rect, sb);
          null !== cb && cb < ab && (Wb = Tb, ab = cb)
        }
        return Wb
      },
      Ts = (bb, cb, sb) => {
        const kb = as(bb, cb, sb, (() => !0));
        if (!kb || cs(sb) || null === bb.scrollGroup || kb.scrollGroup === bb.scrollGroup) return kb;
        const Wb = as(bb, cb, sb, (cb => 0 === ss(bb.rect, cb.rect, sb).gap));
        return null !== Wb && void 0 !== Wb ? Wb : kb
      },
      Us = (bb, cb, sb) => {
        let kb = null,
          Wb = 1 / 0;
        for (const ab of cb) {
          if (!ab.visible || sb && !sb(ab)) continue;
          const cb = pc(ab.rect),
            Tb = Math.hypot(cb.x - bb.x, cb.y - bb.y);
          Tb < Wb && (kb = ab, Wb = Tb)
        }
        return kb
      },
      Is = bb => {
        const {
          rect: cb,
          clip: sb
        } = bb;
        if (!sb) return cb;
        const kb = Math.max(cb.left, sb.left),
          Wb = Math.max(cb.top, sb.top);
        return {
          left: kb,
          top: Wb,
          width: Math.min(cb.left + cb.width, sb.left + sb.width) - kb,
          height: Math.min(cb.top + cb.height, sb.top + sb.height) - Wb
        }
      },
      Hs = (bb, cb) => cb.x >= bb.left && cb.x < bb.left + bb.width && cb.y >= bb.top && cb.y < bb.top + bb.height,
      fs = (bb, cb) => {
        let sb = null,
          kb = 1 / 0;
        for (const Wb of cb) {
          const cb = Is(Wb);
          (Wb.visible || Wb.clip) && Hs(cb, bb) && (cb.width * cb.height < kb && (sb = Wb, kb = cb.width * cb.height))
        }
        return sb
      },
      Ms = bb => {
        let cb = null;
        for (const sb of bb) {
          if (!sb.visible) continue;
          if (!cb) {
            cb = sb;
            continue
          }
          const bb = Math.min(cb.rect.height, sb.rect.height) / 2,
            kb = sb.rect.top - cb.rect.top;
          (kb < -bb || Math.abs(kb) <= bb && sb.rect.left < cb.rect.left) && (cb = sb)
        }
        return cb
      },
      Xs = (bb, cb, sb, kb, Wb) => {
        const ab = Wb % cb,
          Tb = Math.floor(Wb / cb);
        return {
          left: bb.left + ab * sb,
          top: bb.top + Tb * kb,
          width: bb.width,
          height: bb.height
        }
      },
      ns = ".EntireInventoryWrapper .Inventory, .HotBarGameItemsContainer",
      ms = ".LazyLoadedItemWrapper",
      ls = ["[data-inven-idx]", "[data-recipe-key]", "[role=button]", "button", "input:not([type=hidden])", "textarea", ".CreativeCategoryTab", ".CreativeCategoryDropdownButton", ".CreativeCategoryDropdownOption", "[data-craft-ingredient]"].join(","),
      Qs = [
        ["hotbar", ".HotBarGameItemsContainer"],
        ["gameButtons", ".ClientGameInventoryButtons"],
        ["categories", ".CreativeCategoryRail"],
        ["recipe", ".CraftableInfo"],
        ["armour", ".ArmourItemSlots"],
        ["main", ".InvenBodyRight"],
        ["left", ".InvenLeftSide"]
      ],
      es = ["gameButtons", "categories", "left", "recipe", "armour", "main", "hotbar"],
      Cs = bb => bb.hasAttribute("data-inven-idx") ? "slot" : bb.hasAttribute("data-recipe-key") ? "recipe" : bb.hasAttribute("data-craft-ingredient") || fc(bb) ? "info" : Nc(bb) ? "textField" : "button",
      Ns = (bb, cb) => "slot" === cb ? Number(bb.getAttribute("data-inven-idx")) : null,
      Vs = bb => bb.matches(ms) ? bb.querySelector(ls) : bb,
      Ls = bb => {
        var cb, sb;
        return {
          element: bb,
          recipe: null !== (cb = bb && (null === (sb = Vs(bb)) || void 0 === sb ? void 0 : sb.getAttribute("data-recipe-key"))) && void 0 !== cb ? cb : null
        }
      },
      us = bb => {
        const cb = Vs(bb);
        if (!cb) return {
          kind: "pending",
          idx: null
        };
        const sb = Cs(cb);
        return {
          kind: sb,
          idx: Ns(cb, sb)
        }
      },
      Ys = bb => {
        const cb = [];
        for (const [sb, kb] of Qs) {
          bb.matches(kb) && cb.push([sb, bb]);
          for (const Wb of bb.querySelectorAll(kb)) cb.push([sb, Wb])
        }
        return cb
      },
      hs = (bb, cb) => {
        for (const [sb, kb] of bb)
          if (kb.contains(cb)) return sb;
        return "other"
      },
      gs = (bb, cb, sb, kb, Wb, ab, Tb, Ub) => {
        var Ib;
        const Hb = bb.children,
          fb = vc(Hb[0].getBoundingClientRect()),
          Mb = [{
            element: Hb[0],
            rect: fb
          }];
        if (ab.push(Mb[0]), 0 === fb.width || 0 === fb.height) return;
        let Xb = 1;
        for (; Xb < Hb.length && Math.abs(Hb[Xb].getBoundingClientRect().top - fb.top) < 1;) Xb++;
        const nb = bb => {
            const cb = {
              element: Hb[bb],
              rect: vc(Hb[bb].getBoundingClientRect())
            };
            return ab.push(cb), Mb.push(cb), cb.rect
          },
          mb = Xb > 1 ? nb(1).left - fb.left : fb.width,
          lb = Hb.length > Xb ? nb(Xb).top - fb.top : fb.height,
          Qb = Tb.find(bb, cb);
        let eb = null;
        if (Qb) {
          var Cb;
          const {
            container: bb,
            box: cb
          } = Qb;
          eb = null !== (Cb = Ub.get(bb)) && void 0 !== Cb ? Cb : null, eb || (eb = {
            top: bb.scrollTop,
            left: bb.scrollLeft,
            box: cb,
            viewport: kb,
            targets: [],
            probes: [],
            holdsOthers: !1
          }, Ub.set(bb, eb)), eb.probes.push(...Mb)
        }
        const Nb = Wb.length;
        for (let Yb = 0; Yb < Hb.length; Yb++) {
          var Vb, Lb, ub;
          const bb = Hb[Yb],
            cb = Xs(fb, Xb, mb, lb, Yb),
            ab = bb.firstElementChild ? bb.querySelector(ls) : null,
            Tb = ab ? Cs(ab) : "pending";
          Wb.push({
            key: Rc(bb),
            rect: cb,
            panel: sb,
            scrollGroup: null !== (Vb = null === Qb || void 0 === Qb ? void 0 : Qb.group) && void 0 !== Vb ? Vb : null,
            visible: jc(cb, kb, null === Qb || void 0 === Qb ? void 0 : Qb.box),
            clip: null !== (Lb = null === Qb || void 0 === Qb ? void 0 : Qb.box) && void 0 !== Lb ? Lb : null,
            element: bb,
            kind: Tb,
            idx: ab ? Ns(ab, Tb) : null,
            scrollContainer: null !== (ub = null === Qb || void 0 === Qb ? void 0 : Qb.container) && void 0 !== ub ? ub : null
          })
        }
        null === (Ib = eb) || void 0 === Ib || Ib.targets.push(...Wb.slice(Nb))
      },
      Bs = bb => bb instanceof Element && null !== bb.closest(ms),
      ts = bb => null !== bb.scrollContainer && Bs(bb.element);
    class ys {
      constructor() {
        this.latched = null, this.presses = 0
      }
      press(bb, cb, sb, kb) {
        this.latched = {
          source: bb,
          focusKey: cb,
          sinceMs: sb,
          hold: {
            id: ++this.presses,
            holdMs: kb
          }
        }
      }
      update(bb, cb, sb) {
        const kb = this.latched;
        return kb ? bb && cb === kb.focusKey ? sb - kb.sinceMs < kb.hold.holdMs ? null : (this.latched = null, kb.source) : (this.latched = null, null) : null
      }
      getHold() {
        var bb, cb;
        return null !== (bb = null === (cb = this.latched) || void 0 === cb ? void 0 : cb.hold) && void 0 !== bb ? bb : null
      }
      reset() {
        this.latched = null
      }
    }
    var Ps = sb(8301);
    const Ds = {
        kind: "none"
      },
      Es = bb => ({
        x: bb.clientX,
        y: bb.clientY
      }),
      is = () => 2 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
    class Os {
      constructor() {
        this.hovered = Ds, this.signature = "", this.holding = !1, this.lastPoint = {
          clientX: 0,
          clientY: 0
        }
      }
      sync(bb, cb, sb, kb, Wb) {
        const ab = null !== cb ? {
            kind: "slot",
            idx: cb
          } : sb ? {
            kind: "element",
            element: sb
          } : Ds,
          Tb = `${Wb}|${Math.round(kb.clientX)},${Math.round(kb.clientY)}`,
          Ub = (Ib = this.hovered, Hb = ab, "slot" === Ib.kind && "slot" === Hb.kind ? Ib.idx === Hb.idx : "element" === Ib.kind && "element" === Hb.kind ? Ib.element === Hb.element : Ib.kind === Hb.kind);
        var Ib, Hb;
        if (Ub && Tb === this.signature) return;
        const fb = !Ub || Wb !== this.holding || "" === this.signature;
        this.signature = Tb, this.holding = Wb, this.lastPoint = kb;
        const Mb = this.hovered;
        if (this.hovered = ab, "slot" === ab.kind) return this.leaveElement(Mb, null, kb), void(fb ? bb.hover(ab.idx, kb) : bb.moveTo(kb));
        if (Ub) return void("element" === ab.kind ? gc(ab.element, ab.element, Es(kb)) : bb.hover(null, kb));
        bb.hover(null, kb);
        const Xb = "element" === ab.kind ? ab.element : null;
        "element" === Mb.kind ? gc(Mb.element, Xb, Es(kb)) : Xb && gc(null, Xb, Es(kb))
      }
      invalidate() {
        this.signature = ""
      }
      clear(bb) {
        const cb = this.hovered;
        this.hovered = Ds, this.signature = "", "none" !== cb.kind && (this.leaveElement(cb, null, this.lastPoint), bb && "slot" === cb.kind && bb.hover(null, this.lastPoint))
      }
      leaveElement(bb, cb, sb) {
        "element" === bb.kind && gc(bb.element, cb, Es(sb))
      }
    }
    class Gs {
      constructor() {
        this.lastTiltedMs = -1 / 0
      }
      update(bb, cb) {
        Yb(bb) && (this.lastTiltedMs = cb)
      }
      allowsClick(bb) {
        return bb - this.lastTiltedMs > 150
      }
    }
    class Ks {
      constructor() {
        this.remainder = 0, this.container = null
      }
      isScrolling(bb) {
        return 0 !== (0, mb.m)(bb, .2).y
      }
      step(bb, cb, sb) {
        bb !== this.container && (this.container = bb, this.remainder = 0);
        const kb = hb(cb, sb).y;
        if (0 === kb) return this.remainder = 0, !1;
        const Wb = this.remainder + kb,
          ab = Math.trunc(Wb);
        if (this.remainder = Wb - ab, 0 === ab) return !1;
        const Tb = bb.scrollTop;
        return bb.scrollTop = Tb + ab, bb.scrollTop !== Tb
      }
      current() {
        var bb;
        return null !== (bb = this.container) && void 0 !== bb && bb.isConnected ? this.container : null
      }
      reset() {
        this.remainder = 0, this.container = null
      }
    }
    var Zs = sb(8304);
    const zs = "[data-pad-inventory-default]",
      qs = ".HotBarGameItemsContainer .InvenItem.Selected",
      ds = {
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
      As = [
        ["primary", "inventoryPrimary"],
        ["secondary", "inventorySecondary"],
        ["quickMove", "inventoryQuickMove"],
        ["hotbarSwap", "inventoryHotbarSwap"],
        ["back", "inventoryClose"],
        ["openButton", "inventory"]
      ],
      ws = ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryHotbarSwap", "inventoryClose", "inventoryDrop"],
      rs = ["inventoryPanelPrevious", "inventoryPanelNext", "menuPageUp", "menuPageDown"],
      os = [...ws, ...rs],
      Ss = () => {
        return bb = (0, fb.i)("inventory"), !os.map(fb.i).includes(bb) && !(0, mb.F)(bb);
        var bb
      },
      Rs = new Set(["slotPrimary", "slotSecondary", "slotQuickMove", "pressPrimary", "pressSecondary", "openKeyboard"]),
      vs = (bb, cb) => {
        const sb = !(null === cb || void 0 === cb || !cb.isHolding());
        return function(bb, cb) {
          const sb = bb.find((bb => bb.visible && cb(bb)));
          if (sb) return sb;
          for (var kb = arguments.length, Wb = new Array(kb > 2 ? kb - 2 : 0), ab = 2; ab < kb; ab++) Wb[ab - 2] = arguments[ab];
          for (const Tb of Wb) {
            const cb = Ms(bb.filter(Tb));
            if (cb) return cb
          }
          return Ms(bb)
        }(bb, (bb => {
          const {
            element: cb
          } = bb;
          return cb.matches(zs) || null !== cb.querySelector(zs) || cb.matches(qs)
        }), (bb => "slot" === bb.kind ? sb || null !== bb.idx && !(null === cb || void 0 === cb || !cb.hasItemAt(bb.idx)) : "recipe" === bb.kind || "pending" === bb.kind), (bb => "slot" === bb.kind || "button" === bb.kind))
      };
    class Fs {
      constructor() {
        this.set = null, this.observer = new MutationObserver((bb => {
          bb.some((bb => !Bs(bb.target))) && (this.set = null)
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
              cb = [];
            let sb = !1;
            const kb = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              Wb = new Map,
              ab = new rc(cb);
            for (const Mb of document.querySelectorAll(ns)) {
              const fb = Ys(Mb);
              sb ||= null !== Mb.querySelector(".CreativeCategoryTab");
              for (const sb of Mb.querySelectorAll(`${ms}:first-child`)) {
                const Tb = sb.parentElement;
                gs(Tb, Mb, hs(fb, Tb), kb, bb, cb, ab, Wb)
              }
              for (const sb of Mb.querySelectorAll(ls)) {
                var Tb, Ub, Ib, Hb;
                if (sb.closest(ms) || sb.closest("[data-pad-ignore]")) continue;
                const Xb = null === (Tb = sb.parentElement) || void 0 === Tb ? void 0 : Tb.closest(ls);
                if (Xb && Mb.contains(Xb)) continue;
                const nb = Cs(sb),
                  mb = Ns(sb, nb);
                if (-1 === mb) continue;
                const lb = vc(sb.getBoundingClientRect());
                cb.push({
                  element: sb,
                  rect: lb
                });
                const Qb = ab.findForParent(sb.parentElement, Mb),
                  eb = Qb && !Wb.has(Qb.container) ? Qb : null;
                (eb ? Fc(lb) : xc(lb, kb)) && bb.push({
                  key: Rc(sb),
                  rect: lb,
                  panel: hs(fb, sb),
                  scrollGroup: null !== (Ub = null === eb || void 0 === eb ? void 0 : eb.group) && void 0 !== Ub ? Ub : null,
                  visible: jc(lb, kb, null === eb || void 0 === eb ? void 0 : eb.box),
                  clip: null !== (Ib = null === eb || void 0 === eb ? void 0 : eb.box) && void 0 !== Ib ? Ib : null,
                  element: sb,
                  kind: nb,
                  idx: mb,
                  scrollContainer: null !== (Hb = null === eb || void 0 === eb ? void 0 : eb.container) && void 0 !== Hb ? Hb : null
                })
              }
            }
            for (const [Mb, Xb] of Wb) Xb.holdsOthers = cb.some((bb => bb.element !== Mb && Mb.contains(bb.element) && !bb.element.closest(ms)));
            const fb = new Map;
            for (const Mb of bb) fb.set(Mb.element, Mb);
            return {
              targets: bb,
              byElement: fb,
              hasCategories: sb,
              probes: cb,
              scrollers: Wb
            }
          })(), this.observer.disconnect();
          for (const bb of document.querySelectorAll(ns)) this.observer.observe(bb, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "disabled", "aria-disabled", "tabindex", "data-inven-idx"]
          })
        }
        return this.set
      }
      scrolled(bb) {
        !this.set || bb instanceof Element && ((bb, cb) => {
          const sb = bb.scrollers.get(cb);
          if (!sb || sb.holdsOthers || cb.scrollLeft !== sb.left) return !1;
          const kb = cb.scrollTop - sb.top;
          if (0 === kb) return !0;
          sb.top = cb.scrollTop;
          for (const Wb of sb.probes) Wb.rect.top -= kb;
          for (const Wb of sb.targets) Wb.rect.top -= kb, Wb.visible = jc(Wb.rect, sb.viewport, sb.box);
          return !0
        })(this.set, bb) || (this.set = null)
      }
      revalidate() {
        this.set && this.set.probes.some((bb => {
          return cb = bb.rect, sb = bb.element.getBoundingClientRect(), !(cb.left === sb.left && cb.top === sb.top && cb.width === sb.width && cb.height === sb.height);
          var cb, sb
        })) && (this.set = null)
      }
      disconnect() {
        this.observer.disconnect(), this.set = null
      }
    }
    const xs = new class {
        constructor() {
          this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(mb.y.map((bb => [bb, (0, lb.e)(mb.C)]))), this.stickRepeat = new mb.e((0, lb.e)(mb.Y)), this.pageUpTimer = (0, lb.e)(mb.T), this.pageDownTimer = (0, lb.e)(mb.T), this.stickGate = new Lb, this.pointer = null, this.activePress = null, this.dropLatch = new ys, this.scroller = new Ks, this.scrollStickClick = new Gs, this.hover = new Os, this.lastRealPointer = null, this.placeAfterCategory = null, this.hotbarPick = null, this.ring = new Ab, this.targets = new Fs, this.hasCategories = !1, this.wasShowing = !1, this.state = Ps.b, this.isActive = () => (0, wc.h)(), this.isShowing = () => "inventory" === Mb.e.getActiveConsumerName() && (0, nb.k)(), this.getState = () => this.state, this.isSteppingSlots = () => this.isShowing() && null === this.pointer, this.onDeactivate = () => {
            this.endInteraction((0, wc.g)()), (0, wc.h)() || this.forgetSurface()
          }, this.forgetSurface = () => {
            var bb;
            this.reopenSlotIdx = null !== (bb = this.focused ? us(this.focused).idx : null) && void 0 !== bb ? bb : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, wc.r)(), this.panelMemory.clear(), this.targets.disconnect()
          }, this.onFrame = bb => {
            (0, Ub.unstable_batchedUpdates)((() => {
              this.frame(bb)
            }))
          }, this.shouldBlockRealPointer = bb => bb.isTrusted && !(0, eb.p)(bb) && this.isShowing(), this.noteRealPointer = bb => {
            bb instanceof MouseEvent && bb.isTrusted && !(0, eb.p)(bb) && (this.lastRealPointer ??= {
              x: 0,
              y: 0
            }, this.lastRealPointer.x = bb.clientX, this.lastRealPointer.y = bb.clientY)
          }, this.wakePressActs = bb => {
            var cb;
            return bb === (0, fb.i)("inventoryClose") ? !(null !== (cb = (0, wc.g)()) && void 0 !== cb && cb.isHolding()) : !(bb !== (0, fb.i)("inventory") || !Ss()) || ((0, mb.F)(bb) ? this.isNavButton(bb) : rs.some((cb => (0, fb.i)(cb) === bb)))
          }
        }
        frame(bb) {
          var cb, sb, kb, Wb, ab;
          const Tb = (0, wc.g)();
          if (!(0, nb.k)()) return void(this.wasShowing && (this.endInteraction(Tb), this.rehoverRealPointer()));
          this.wasShowing = !0, this.applyFocusRequest(), bb.wokeDevice && this.focusWakePointer(!(null === Tb || void 0 === Tb || !Tb.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, Xb.g)().inventoryNavigation || this.pointer || this.engagePointer();
          const Ub = performance.now();
          this.handleNavigation(bb, Ub), this.handlePanels(bb), this.handlePaging(bb, Ub), this.handleScroll(bb), this.handleButtons(bb, Ub, Tb), this.applyFocusRequest(), this.pointer && this.hoverAtPointer();
          const Ib = this.ensureFocus(),
            Hb = this.focusContext(Tb);
          this.ring.show(Ib);
          const Mb = "slot" === Hb.kind ? Hb.idx : null,
            mb = null !== (cb = null === (sb = Hb.actionElement) || void 0 === sb ? void 0 : sb.querySelector(".DoCraftItem")) && void 0 !== cb ? cb : Hb.actionElement;
          this.pointer ? (this.hover.sync(Tb, Mb, mb, ((bb, cb) => {
            const sb = cb ? is() : 0;
            return {
              clientX: bb.x - sb,
              clientY: bb.y - sb
            }
          })(this.pointer, Hb.holding), Hb.holding), qc.set({
            x: this.pointer.x,
            y: this.pointer.y,
            visible: !0,
            pressed: bb.isHeld((0, fb.i)("inventoryPrimary"))
          })) : Ib && this.focused && this.hover.sync(Tb, Mb, mb, ((bb, cb) => {
            if (!cb) return {
              clientX: bb.left + bb.width - 10,
              clientY: bb.top + bb.height / 2 - 10
            };
            const sb = is();
            return {
              clientX: bb.left + bb.width / 2 - sb,
              clientY: bb.top + bb.height / 2 - sb
            }
          })(Ib, Hb.holding), Hb.holding), this.publishState({
            showing: !0,
            kind: Hb.kind,
            holding: Hb.holding,
            slotHasItem: Hb.slotHasItem,
            pressHints: null !== (kb = null === (Wb = Hb.press) || void 0 === Wb ? void 0 : Wb.hints) && void 0 !== kb ? kb : null,
            hasCategories: this.hasCategories,
            hasList: !!this.focusTarget && ts(this.focusTarget),
            openButtonCloses: Ss(),
            steppingSlots: null === this.pointer,
            quickMoveToHotbar: "slot" === Hb.kind && !(null === (ab = Hb.actionElement) || void 0 === ab || !ab.closest(".CreativeItemSlots")),
            dropStackHold: this.dropLatch.getHold(),
            hotbarPicking: null !== this.hotbarPick
          })
        }
        focusWakePointer(bb) {
          var cb;
          const sb = (0, nb.c)();
          if (!sb) return;
          this.targets.revalidate();
          const kb = this.getTargets().targets;
          this.setFocus(null !== (cb = fs(sb, kb)) && void 0 !== cb ? cb : bb ? Us(sb, kb, (bb => {
            let {
              rect: cb
            } = bb;
            const kb = Math.max(cb.left - sb.x, 0, sb.x - (cb.left + cb.width)),
              Wb = Math.max(cb.top - sb.y, 0, sb.y - (cb.top + cb.height));
            return Math.hypot(kb, Wb) <= Math.min(cb.width, cb.height) / 2
          })) : null, !1), "cursor" === (0, Xb.g)().inventoryNavigation && (this.pointer = {
            x: sb.x,
            y: sb.y,
            speedRamp: 0
          })
        }
        rehoverRealPointer() {
          const bb = this.lastRealPointer;
          if (!bb || "keyboardMouse" !== Ib.d.get("activeInputDevice")) return;
          const cb = document.elementFromPoint(bb.x, bb.y);
          cb && gc(null, cb, bb)
        }
        endInteraction(bb) {
          this.wasShowing = !1, this.hotbarPick = null, this.releasePress(), this.dropLatch.reset(), this.scroller.reset();
          for (const cb of this.dpadTimers.values()) cb.reset();
          this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(bb), this.ring.hide(), this.releasePointer(), this.publishState(Ps.b)
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
          if (null === bb || void 0 === bb || !bb.isConnected || !bb.closest(ns)) return null;
          const cb = bb.getBoundingClientRect();
          return cb.width > 0 && cb.height > 0 ? {
            left: cb.left,
            top: cb.top,
            width: cb.width,
            height: cb.height
          } : null
        }
        ensureFocus() {
          const bb = this.readFocusRect();
          if (bb || this.pointer) return bb;
          const {
            targets: cb,
            byElement: sb
          } = this.getTargets();
          let kb = null,
            Wb = !1;
          if (this.lastRect) kb = Us(pc(this.lastRect), cb);
          else {
            var ab, Tb;
            const bb = ((bb, cb) => {
                const sb = document.querySelector(".EntireInventoryWrapper [data-pad-inventory-start]");
                return sb ? vs(bb.filter((bb => sb.contains(bb.element))), cb) : null
              })(cb, (0, wc.g)()),
              Ub = cb.find((bb => null !== bb.idx && bb.idx === this.reopenSlotIdx)),
              Ib = document.querySelector(qs);
            Wb = null !== bb || void 0 !== Ub, kb = null !== (ab = null !== (Tb = null !== bb && void 0 !== bb ? bb : Ub) && void 0 !== Tb ? Tb : Ib && sb.get(Ib)) && void 0 !== ab ? ab : Ms(cb)
          }
          return this.setFocus(kb, Wb), this.lastRect
        }
        setFocus(bb) {
          let cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          bb && (this.focused = bb.element, this.focusTarget = bb, this.panelMemory.set(bb.panel, bb.element), cb && bb.scrollContainer && ((bb, cb) => {
            const sb = bb.getBoundingClientRect(),
              kb = ib(cb),
              Wb = cb.scrollTop;
            return sb.top < kb.top ? cb.scrollTop -= kb.top - sb.top : sb.bottom > kb.bottom && (cb.scrollTop += sb.bottom - kb.bottom), cb.scrollTop !== Wb
          })(bb.element, bb.scrollContainer) && this.targets.invalidate(), this.lastRect = this.readFocusRect(), this.followFocusJump())
        }
        followFocusJump() {
          if (this.pointer)
            if ("cursor" === (0, Xb.g)().inventoryNavigation) {
              if (this.lastRect) {
                const bb = pc(this.lastRect);
                this.pointer = {
                  x: bb.x,
                  y: bb.y,
                  speedRamp: 0
                }
              }
            } else this.releasePointer()
        }
        engagePointer() {
          const bb = this.lastRect ? pc(this.lastRect) : {
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
          this.pointer = null, qc.hide()
        }
        hoverAtPointer() {
          var bb;
          const cb = fs(this.pointer, this.getTargets().targets);
          this.focusTarget = cb, (null === cb || void 0 === cb ? void 0 : cb.element) !== this.focused && (this.focused = null !== (bb = null === cb || void 0 === cb ? void 0 : cb.element) && void 0 !== bb ? bb : null, cb && (this.panelMemory.set(cb.panel, cb.element), this.lastRect = this.readFocusRect()))
        }
        moveCursor(bb, cb) {
          const sb = this.focusTarget,
            kb = sb && (0, Xb.g)().cursorMagnetism ? pc(Is(sb)) : null;
          this.pointer = ub(this.pointer, {
            stick: bb.leftStick,
            moveDeadzone: (0, Xb.g)().moveDeadzone,
            dpad: cb,
            dtMs: bb.dtMs,
            cursorSpeedPercent: (0, Xb.g)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: {
              overInteractive: !1,
              magnetTarget: kb
            }
          })
        }
        move(bb) {
          this.targets.revalidate();
          const cb = this.currentTarget();
          cb && this.setFocus(Ts(cb, this.getTargets().targets, bb))
        }
        step(bb) {
          const cb = this.pointer;
          if (cb && (this.releasePointer(), !this.focused)) return this.targets.revalidate(), void this.setFocus(((bb, cb, sb) => {
            var kb;
            const Wb = {
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
            return null !== (kb = Ts(Wb, cb, sb)) && void 0 !== kb ? kb : Us(bb, cb)
          })(cb, this.getTargets().targets, bb));
          this.move(bb)
        }
        isNavButton(bb) {
          return !ws.some((cb => (0, fb.i)(cb) === bb)) && !(bb === (0, fb.i)("inventory") && Ss())
        }
        handleNavigation(bb, cb) {
          const sb = (0, Xb.g)().inventoryNavigation,
            kb = {
              x: 0,
              y: 0
            };
          let Wb = null;
          for (const Ib of mb.y) {
            const ab = this.isNavButton(Ib) && bb.isHeld(Ib);
            ab && (kb.x += ds[Ib].x, kb.y += ds[Ib].y), this.dpadTimers.get(Ib).update(ab, cb) && "cursor" !== sb && (Wb ??= Ib)
          }
          const ab = this.stickGate.update(bb.leftStick, (0, Xb.g)().moveDeadzone);
          if (Wb && (this.step(Wb), this.stickGate.lock()), "slot" !== sb) {
            const cb = ((bb, cb, sb, kb) => "hybrid" !== bb ? "cursor" === bb : !kb && (cb || sb))(sb, null !== this.pointer, ab, null !== Wb);
            return cb && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(bb, "cursor" === sb ? kb : {
              x: 0,
              y: 0
            }))
          }
          const Tb = (0, mb.m)(bb.leftStick, (0, Xb.g)().moveDeadzone),
            Ub = this.stickRepeat.update(ab ? (0, mb._)(Tb) : null, cb);
          Ub && this.move(Ub)
        }
        applyCategoryPlace() {
          const bb = this.placeAfterCategory;
          if (!bb) return;
          this.placeAfterCategory = null, this.targets.invalidate();
          const cb = Us(pc(bb.rect), this.getTargets().targets, (cb => cb.scrollGroup === bb.scrollGroup));
          this.setFocus(cb, !1)
        }
        applyFocusRequest() {
          const bb = (0, wc.r)();
          bb && (this.targets.invalidate(), this.setFocus((0, wc.e)(this.getTargets().targets, bb)))
        }
        handlePanels(bb) {
          var cb, sb, kb;
          const Wb = bb.wasPressed((0, fb.i)("inventoryPanelPrevious")),
            ab = bb.wasPressed((0, fb.i)("inventoryPanelNext"));
          if (!Wb && !ab) return;
          const {
            targets: Tb
          } = this.getTargets(), Ub = (Ib = ((bb, cb) => {
            const sb = [];
            for (const Wb of bb) Wb.visible && !sb.includes(Wb.panel) && sb.push(Wb.panel);
            const kb = bb => {
              const kb = cb.indexOf(bb);
              return -1 === kb ? cb.length + sb.indexOf(bb) : kb
            };
            return sb.sort(((bb, cb) => kb(bb) - kb(cb)))
          })(Tb, es), Hb = null !== (cb = null === (sb = this.focusTarget) || void 0 === sb ? void 0 : sb.panel) && void 0 !== cb ? cb : null, Mb = ab ? 1 : -1, 0 === Ib.length ? null : Ib[bs(null === Hb ? -1 : Ib.indexOf(Hb), Ib.length, Mb)]);
          var Ib, Hb, Mb;
          if (null === Ub) return;
          const Xb = this.panelMemory.get(Ub),
            nb = Tb.filter((bb => bb.panel === Ub)),
            mb = null !== (kb = nb.find((bb => bb.element === Xb && bb.visible))) && void 0 !== kb ? kb : vs(nb, (0, wc.g)());
          this.setFocus(mb)
        }
        handlePaging(bb, cb) {
          const sb = (0, fb.i)("menuPageUp"),
            kb = (0, fb.i)("menuPageDown"),
            Wb = this.pageUpTimer.update(bb.isHeld(sb), cb),
            ab = this.pageDownTimer.update(bb.isHeld(kb), cb);
          if (!Wb && !ab) return;
          const Tb = ab ? 1 : -1;
          if (!bb.wasPressed(ab ? kb : sb) && this.hasCategories) return;
          if ((bb => {
              const cb = Array.from(document.querySelectorAll(".EntireInventoryWrapper .CreativeCategoryTab"));
              if (0 === cb.length) return !1;
              const sb = cb.findIndex((bb => bb.classList.contains("Selected"))),
                kb = cb[bs(sb, cb.length, bb)];
              return Jc(kb, Vc(kb)), !0
            })(Tb)) {
            var Ub, Ib;
            this.targets.invalidate();
            const bb = null !== (Ub = null === (Ib = this.focusTarget) || void 0 === Ib ? void 0 : Ib.scrollGroup) && void 0 !== Ub ? Ub : null,
              cb = this.readFocusRect();
            return void(this.placeAfterCategory = null !== bb && cb && !this.pointer ? {
              rect: cb,
              scrollGroup: bb
            } : null)
          }
          const {
            targets: Hb
          } = this.getTargets(), Mb = this.currentTarget(), Xb = Mb && ts(Mb) ? Mb : Hb.find((bb => ts(bb) && bb.visible));
          if (!Xb) return;
          const nb = ((bb, cb, sb, kb) => {
            if (null === bb.scrollGroup) return null;
            const Wb = pc(bb.rect),
              ab = Wb.x,
              Tb = Wb.y + ("Down" === sb ? kb : -kb);
            let Ub = null,
              Ib = 1 / 0;
            for (const Hb of cb) {
              if (Hb.scrollGroup !== bb.scrollGroup || Hb.key === bb.key) continue;
              const cb = pc(Hb.rect);
              if ("Down" === sb ? cb.y <= Wb.y : cb.y >= Wb.y) continue;
              const kb = Math.hypot(cb.x - ab, cb.y - Tb);
              kb < Ib && (Ub = Hb, Ib = kb)
            }
            return Ub
          })(Xb, Hb, Tb > 0 ? "Down" : "Up", Xb.scrollContainer.clientHeight);
          this.setFocus(null !== nb && void 0 !== nb ? nb : Xb)
        }
        handleScroll(bb) {
          var cb, sb, kb, Wb, ab, Tb;
          if (!this.scroller.isScrolling(bb.rightStick)) return void this.scroller.reset();
          const {
            targets: Ub
          } = this.getTargets(), Ib = this.pointer, Hb = !Ib && this.focusTarget && ts(this.focusTarget) ? this.focusTarget.scrollContainer : null, fb = Ib && (null === (cb = Ub.find((bb => bb.clip && Hs(bb.clip, Ib)))) || void 0 === cb ? void 0 : cb.scrollContainer), Mb = null !== (sb = null !== (kb = null !== (Wb = this.scroller.current()) && void 0 !== Wb ? Wb : fb) && void 0 !== kb ? kb : Hb) && void 0 !== sb ? sb : null === (ab = Ub.find(ts)) || void 0 === ab ? void 0 : ab.scrollContainer;
          if (!Mb || !this.scroller.step(Mb, bb.rightStick, bb.dtMs)) return;
          this.targets.scrolled(Mb);
          const Xb = Ib || (null === (Tb = this.focusTarget) || void 0 === Tb ? void 0 : Tb.scrollContainer) !== Mb ? null : this.readFocusRect();
          if (!Xb) return;
          const nb = ib(Mb),
            mb = pc(Xb);
          if (mb.y < nb.top || mb.y > nb.bottom) {
            const bb = this.focusTarget.scrollGroup,
              cb = Us(mb, this.getTargets().targets, (cb => cb.scrollGroup === bb));
            this.setFocus(cb, !1)
          }
        }
        focusContext(bb) {
          const {
            kind: cb,
            idx: sb
          } = this.focused ? us(this.focused) : {
            kind: null,
            idx: null
          }, kb = this.focused ? Vs(this.focused) : null, Wb = kb ? (0, Zs.e)(kb) : null;
          return {
            kind: cb,
            idx: sb,
            actionElement: kb,
            press: Wb,
            hasPress: null !== Wb,
            hasBack: !(null === Wb || void 0 === Wb || !Wb.back),
            holding: bb.isHolding(),
            slotHasItem: null !== sb && bb.hasItemAt(sb)
          }
        }
        handleButtons(bb, cb, sb) {
          var kb, Wb;
          if (!this.activePress || bb.isHeld(this.activePress.button) && (kb = this.activePress.target, Wb = this.focused, null !== kb.recipe ? Ls(Wb).recipe === kb.recipe : Wb === kb.element) || this.releasePress(), this.scrollStickClick.update(bb.rightStick, cb), !this.handleHotbarPick(bb, sb)) {
            for (const [kb, Wb] of As) {
              const ab = (0, fb.i)(Wb);
              if (!bb.wasPressed(ab) || "openButton" === kb && !Ss()) continue;
              if ("RS" === ab && !this.scrollStickClick.allowsClick(cb)) continue;
              const Tb = this.focusContext(sb),
                Ub = dc(kb, Tb);
              Ub && this.runIntent(Ub, Tb, ab, sb)
            }
            this.handleDrop(bb, cb, sb)
          }
        }
        handleHotbarPick(bb, cb) {
          const sb = this.hotbarPick;
          if (!sb) return !1;
          const kb = bb.wasPressed((0, fb.i)("inventoryPrimary")) || bb.wasPressed((0, fb.i)("inventoryHotbarSwap"));
          if (!kb && !bb.wasPressed((0, fb.i)("inventoryClose")) && !cb.isHolding()) return !(bb.wasPressed((0, fb.i)("inventory")) && Ss());
          const Wb = this.focusTarget;
          kb && "hotbar" === (null === Wb || void 0 === Wb ? void 0 : Wb.panel) && null !== Wb.idx && Wb.idx !== sb.idx && (cb.swapWithHotbar(Wb.idx, sb.idx), this.afterAction()), this.hotbarPick = null;
          const ab = sb.element.isConnected ? this.getTargets().byElement.get(sb.element) : void 0;
          return ab && this.setFocus(ab), !0
        }
        startHotbarPick(bb) {
          var cb;
          const {
            targets: sb,
            byElement: kb
          } = this.getTargets(), Wb = document.querySelector(qs), ab = null !== (cb = Wb && kb.get(Wb)) && void 0 !== cb ? cb : sb.find((bb => "hotbar" === bb.panel));
          ab && this.focused && (this.hotbarPick = {
            idx: bb,
            element: this.focused
          }, this.setFocus(ab))
        }
        focusKey() {
          return this.focused ? Rc(this.focused) : null
        }
        handleDrop(bb, cb, sb) {
          const kb = (0, fb.i)("inventoryDrop");
          if (bb.wasPressed(kb)) {
            const bb = (Wb = this.focusContext(sb)).holding ? {
              kind: "qU"
            } : "slot" === Wb.kind && Wb.slotHasItem && null !== Wb.idx ? {
              kind: "slot",
              idx: Wb.idx
            } : null;
            return void(bb && (this.dropFrom(bb, !1, sb), this.dropLatch.press(bb, this.focusKey(), cb, Qb.d[(0, Xb.g)().tapHoldTime].dropStackMs), this.afterAction()))
          }
          var Wb;
          const ab = this.dropLatch.update(bb.isHeld(kb), this.focusKey(), cb);
          ab && ((bb, cb, sb) => "qU" === bb.kind ? cb : !cb && sb(bb.idx))(ab, sb.isHolding(), sb.hasItemAt) && (this.dropFrom(ab, !0, sb), this.afterAction())
        }
        dropFrom(bb, cb, sb) {
          "qU" === bb.kind ? sb.dropHeld(cb, this.slotPoint()) : sb.dropSlot(bb.idx, cb)
        }
        slotPoint() {
          return this.pointer ? {
            clientX: this.pointer.x,
            clientY: this.pointer.y
          } : this.lastRect ? (bb => {
            const cb = pc(bb);
            return {
              clientX: cb.x,
              clientY: cb.y
            }
          })(this.lastRect) : {
            clientX: 0,
            clientY: 0
          }
        }
        runIntent(bb, cb, sb, kb) {
          const Wb = cb.idx,
            ab = cb.actionElement;
          switch (ab && Rs.has(bb) && (0, eb.t)(ab), bb) {
            case "slotPrimary":
              kb.primary(Wb, this.slotPoint());
              break;
            case "slotSecondary":
              kb.secondary(Wb, this.slotPoint());
              break;
            case "slotQuickMove":
              kb.quickMove(Wb, this.slotPoint());
              break;
            case "hotbarPick":
              this.startHotbarPick(Wb);
              break;
            case "pressPrimary":
            case "pressSecondary":
              this.startPress(cb.press, "pressPrimary" === bb ? "primary" : "secondary", sb);
              break;
            case "click":
              Jc(ab, Vc(ab));
              break;
            case "openKeyboard":
              Nc(ab) && Bc(ab);
              break;
            case "pressBack":
              cb.press.back();
              break;
            case "cancel":
              kb.cancel();
              break;
            case "close":
              return this.releasePress(), void kb.close()
          }
          this.afterAction()
        }
        startPress(bb, cb, sb) {
          this.releasePress(), bb.press(cb) && (this.activePress = {
            handlers: bb,
            button: sb,
            target: Ls(this.focused)
          })
        }
        releasePress() {
          var bb, cb, sb;
          null === (bb = this.activePress) || void 0 === bb || null === (cb = (sb = bb.handlers).release) || void 0 === cb || cb.call(sb), this.activePress = null
        }
        afterAction() {
          this.targets.invalidate(), this.hover.invalidate()
        }
        publishState(bb) {
          ((bb, cb) => {
            var sb, kb, Wb, ab, Tb, Ub;
            return bb.showing === cb.showing && bb.kind === cb.kind && bb.holding === cb.holding && bb.slotHasItem === cb.slotHasItem && (null === (sb = bb.pressHints) || void 0 === sb ? void 0 : sb.primary) === (null === (kb = cb.pressHints) || void 0 === kb ? void 0 : kb.primary) && (null === (Wb = bb.pressHints) || void 0 === Wb ? void 0 : Wb.secondary) === (null === (ab = cb.pressHints) || void 0 === ab ? void 0 : ab.secondary) && (null === (Tb = bb.pressHints) || void 0 === Tb ? void 0 : Tb.back) === (null === (Ub = cb.pressHints) || void 0 === Ub ? void 0 : Ub.back) && bb.hasCategories === cb.hasCategories && bb.hasList === cb.hasList && bb.openButtonCloses === cb.openButtonCloses && bb.steppingSlots === cb.steppingSlots && bb.hotbarPicking === cb.hotbarPicking && bb.quickMoveToHotbar === cb.quickMoveToHotbar && bb.dropStackHold === cb.dropStackHold
          })(bb, this.state) || (this.state = bb, Hb.j.QQ(Ps.c, bb))
        }
      },
      ps = ["pointermove", "pointerover", "pointerout", "mouseover", "mouseout"];
    var bk = sb(8311),
      ck = sb(334),
      sk = sb(1626),
      kk = sb(7786);
    const Wk = "[data-pad-secondary]",
      ak = bb => bb instanceof HTMLElement && Hc(bb) && !fc(bb),
      Tk = bb => {
        const cb = bb.querySelector(Wk);
        if (cb && ak(cb)) return cb;
        for (const Wb of null !== (sb = null === (kb = bb.parentElement) || void 0 === kb ? void 0 : kb.children) && void 0 !== sb ? sb : []) {
          var sb, kb;
          if (Wb !== bb && Wb.matches(Wk) && ak(Wb)) return Wb
        }
        return null
      },
      Uk = (bb, cb, sb, kb) => Math.max(0, Math.max(bb, sb) - Math.min(cb, kb)),
      Ik = (bb, cb, sb, kb) => Math.max(0, Math.min(cb, kb) - Math.max(bb, sb)),
      Hk = (bb, cb, sb) => {
        const kb = (bb.left + bb.right) / 2,
          Wb = (bb.top + bb.bottom) / 2,
          ab = (cb.left + cb.right) / 2,
          Tb = (cb.top + cb.bottom) / 2;
        if ("Left" === sb || "Right" === sb) {
          const Ub = "Right" === sb ? 1 : -1;
          return {
            forwardGap: "Right" === sb ? cb.left - bb.right : bb.left - cb.right,
            centreForward: (ab - kb) * Ub,
            sidewaysGap: Uk(bb.top, bb.bottom, cb.top, cb.bottom),
            sidewaysOverlap: Ik(bb.top, bb.bottom, cb.top, cb.bottom),
            centreSideways: Math.abs(Tb - Wb),
            startSideways: Math.abs(cb.top - bb.top),
            fromSidewaysSize: bb.bottom - bb.top,
            toSidewaysSize: cb.bottom - cb.top,
            toLength: cb.right - cb.left
          }
        }
        const Ub = "Down" === sb ? 1 : -1;
        return {
          forwardGap: "Down" === sb ? cb.top - bb.bottom : bb.top - cb.bottom,
          centreForward: (Tb - Wb) * Ub,
          sidewaysGap: Uk(bb.left, bb.right, cb.left, cb.right),
          sidewaysOverlap: Ik(bb.left, bb.right, cb.left, cb.right),
          centreSideways: Math.abs(ab - kb),
          startSideways: Math.abs(cb.left - bb.left),
          fromSidewaysSize: bb.right - bb.left,
          toSidewaysSize: cb.right - cb.left,
          toLength: cb.bottom - cb.top
        }
      },
      fk = bb => bb.centreForward > .5 && bb.forwardGap >= -bb.toLength / 2,
      Mk = bb => {
        const cb = bb.sidewaysOverlap > 0 ? 0 : 2 * bb.fromSidewaysSize,
          sb = bb.fromSidewaysSize > 1.5 * bb.toSidewaysSize ? bb.startSideways : bb.centreSideways;
        return Math.max(0, bb.forwardGap) + 3 * bb.sidewaysGap + cb + .1 * sb
      },
      Xk = (bb, cb) => Ik(bb.top, bb.bottom, cb.top, cb.bottom) > 0 || cb.bottom - cb.top > cb.right - cb.left,
      nk = (bb, cb, sb, kb, Wb, ab) => {
        const Tb = Wb ? lk(bb, cb, sb, Wb) : new Set,
          Ub = ek(bb, cb, sb, Tb);
        return Ub < 0 && Tb.size > 0 && ab ? mk(bb, cb, sb, ab) : kb && Ub >= 0 ? Qk(bb, cb, sb, kb, Ub, Tb) : Ub
      },
      mk = (bb, cb, sb, kb) => {
        const Wb = new Set,
          ab = ek(bb, cb, "Up", Wb) >= 0,
          Tb = ek(bb, cb, "Down", Wb) >= 0,
          Ub = new Set;
        return cb.forEach(((cb, sb) => {
          const Wb = cb.top + cb.bottom < bb.top + bb.bottom;
          kb[sb] && !(Wb ? ab : Tb) || Ub.add(sb)
        })), ek(bb, cb, sb, Ub)
      },
      lk = (bb, cb, sb, kb) => {
        const Wb = new Set;
        return "Left" !== sb && "Right" !== sb || cb.forEach(((cb, sb) => {
          kb[sb] && Ik(bb.top, bb.bottom, cb.top, cb.bottom) <= 0 && Wb.add(sb)
        })), Wb
      },
      Qk = (bb, cb, sb, kb, Wb, ab) => {
        const Tb = Hk(bb, cb[Wb], sb).forwardGap;
        let Ub = Wb,
          Ib = kb[Wb],
          Hb = 1 / 0;
        return cb.forEach(((cb, fb) => {
          const Mb = kb[fb];
          if (ab.has(fb) || Mb < Ib || Mb === Ib && Ub === Wb) return;
          const Xb = Hk(bb, cb, sb);
          if (!fk(Xb) || Xb.forwardGap < 0 || Xb.forwardGap >= Tb) return;
          const nb = Mk(Xb);
          (Mb > Ib || nb < Hb) && (Ub = fb, Ib = Mb, Hb = nb)
        })), Ub
      },
      ek = (bb, cb, sb, kb) => {
        let Wb = -1,
          ab = 1 / 0;
        if (cb.forEach(((cb, Tb) => {
            const Ub = ((bb, cb, sb) => {
              const kb = Hk(bb, cb, sb);
              if (!fk(kb)) return null;
              const Wb = Math.max(0, kb.forwardGap);
              return kb.sidewaysOverlap <= 0 && kb.sidewaysGap > 2 * (Wb + 1) ? null : Mk(kb)
            })(bb, cb, sb);
            null !== Ub && Ub < ab && !kb.has(Tb) && (ab = Ub, Wb = Tb)
          })), Wb < 0) return -1;
        const Tb = cb[Wb],
          Ub = Hk(bb, Tb, sb).forwardGap;
        let Ib = Ub,
          Hb = Wb;
        return cb.forEach(((cb, ab) => {
          if (ab === Wb || kb.has(ab) || !((bb, cb, sb) => {
              const kb = "Left" === sb || "Right" === sb,
                Wb = kb ? Ik(bb.top, bb.bottom, cb.top, cb.bottom) : Ik(bb.left, bb.right, cb.left, cb.right),
                ab = kb ? Math.min(bb.bottom - bb.top, cb.bottom - cb.top) : Math.min(bb.right - bb.left, cb.right - cb.left);
              return Wb > 0 && Wb >= ab / 2
            })(cb, Tb, sb)) return;
          const fb = Hk(bb, cb, sb);
          fk(fb) && fb.forwardGap + fb.toLength <= Ub + 1 && fb.forwardGap < Ib && (Ib = fb.forwardGap, Hb = ab)
        })), Hb
      },
      Ck = (bb, cb) => {
        let sb = -1,
          kb = 1 / 0;
        return cb.forEach(((cb, Wb) => {
          const ab = Math.max(cb.left - bb.x, 0, bb.x - cb.right),
            Tb = Math.max(cb.top - bb.y, 0, bb.y - cb.bottom),
            Ub = Math.hypot(ab, Tb);
          Ub < kb && (kb = Ub, sb = Wb)
        })), sb
      },
      Nk = (bb, cb) => {
        const sb = Math.min(bb.bottom - bb.top, cb.bottom - cb.top) / 2;
        return Math.abs(bb.top - cb.top) > sb ? bb.top - cb.top : bb.left - cb.left
      },
      Vk = bb => {
        let cb = -1;
        for (let sb = 0; sb < bb.length; sb++)(cb < 0 || Nk(bb[sb], bb[cb]) < 0) && (cb = sb);
        return cb
      };
    var Lk = sb(1666),
      uk = sb(8315),
      Yk = sb(8323);
    const hk = bb => {
        if ("death" !== bb || "inGame" !== Ib.d.get("gameState") || "off" === (0, Xb.g)().quickChat || null === (0, Lk.e)()) return !1;
        const cb = (0, fb.i)("chat");
        return cb !== (0, fb.i)("menuConfirm") && cb !== (0, fb.i)("menuBack")
      },
      Jk = new uk.b;
    var gk = sb(4069),
      Bk = sb(8330);
    const tk = bb => {
        let cb = null;
        for (const sb of bb.querySelectorAll("[data-pad-tabs]")) Hc(sb) && (!cb || Number(sb.dataset.padTabs) < Number(cb.dataset.padTabs)) && (cb = sb);
        return cb
      },
      yk = (bb, cb, sb, kb) => {
        bb.focusWhenFound((() => {
          const Wb = bb.pickInitial(cb);
          if (Wb && !sb.has(Wb) && (null === kb || void 0 === kb || !kb.contains(Wb))) return Wb;
          const ab = ((bb, cb) => {
              const sb = cb => bb.getEnabledCandidates(cb).filter((bb => !bb.closest("[data-pad-tabs]")));
              for (const kb of Cc(cb)) {
                const bb = sb(kb);
                if (bb.length > 0) return bb
              }
              return sb(cb)
            })(bb, cb).filter((bb => !sb.has(bb))),
            Tb = Vk(ab.map((bb => bb.getBoundingClientRect())));
          return Tb >= 0 ? ab[Tb] : null
        }), 3e3)
      },
      Pk = (bb, cb, sb, kb) => {
        var Wb;
        const ab = ((bb, cb) => {
          if (0 === bb.length) return null;
          const sb = bb.findIndex((bb => "true" === bb.dataset.padSelected));
          return sb < 0 ? cb > 0 ? bb[0] : bb[bb.length - 1] : bb[(sb + cb + bb.length) % bb.length]
        })([...sb.querySelectorAll("[data-pad-tab]")].filter((bb => Hc(bb) && !fc(bb))), kb);
        if (!ab) return;
        const Tb = null !== (Wb = null === bb || void 0 === bb ? void 0 : bb.getFocused()) && void 0 !== Wb ? Wb : null,
          Ub = !(null === Tb || void 0 === Tb || !Tb.isConnected) && sb.contains(Tb),
          Ib = bb && !Ub ? new Set(bb.getEnabledCandidates(cb)) : null;
        tc(ab), bb && (Ib ? yk(bb, cb, Ib, sb) : bb.setFocus(ab, {
          byUser: !0
        }))
      },
      Dk = bb => {
        var cb;
        const sb = ib(null !== (cb = Bb(bb, "x")) && void 0 !== cb ? cb : bb),
          kb = nc(bb).filter((bb => !fc(bb))),
          Wb = kb.filter((bb => Ob(bb.getBoundingClientRect(), sb)));
        return (Wb.length > 0 ? Wb : kb).sort(((bb, cb) => Nk(bb.getBoundingClientRect(), cb.getBoundingClientRect())))
      },
      Ek = (bb, cb, sb) => {
        const kb = [...cb.querySelectorAll("[data-pad-row]")].filter(Hc),
          Wb = bb.getFocused(),
          ab = Wb ? kb.findIndex((bb => bb.contains(Wb))) : -1;
        let Tb = 0,
          Ub = sb > 0 ? 0 : kb.length - 1;
        if (ab >= 0 && Wb) Tb = Math.max(0, Dk(kb[ab]).indexOf(Wb)), Ub = ab + sb;
        else if (Wb) {
          const bb = Wb.getBoundingClientRect(),
            cb = kb.map((cb => {
              const kb = cb.getBoundingClientRect();
              return sb > 0 ? kb.top >= bb.top : kb.bottom <= bb.bottom
            }));
          Ub = sb > 0 ? cb.indexOf(!0) : cb.lastIndexOf(!0)
        }
        for (let Ib = Ub; Ib >= 0 && Ib < kb.length; Ib += sb) {
          const cb = Dk(kb[Ib]);
          if (cb.length > 0) return void bb.setFocus(cb[Math.min(Tb, cb.length - 1)], {
            byUser: !0
          })
        }
      },
      ik = (bb, cb, sb) => {
        var kb, Wb;
        const ab = null !== (kb = null === bb || void 0 === bb ? void 0 : bb.getFocused()) && void 0 !== kb ? kb : null,
          Tb = null !== ab && void 0 !== ab && ab.closest("[data-pad-row]") ? "x" : "y",
          Ub = null !== (Wb = ab ? Bb(ab, Tb, cb) : null) && void 0 !== Wb ? Wb : yb(cb, Tb);
        if (!Ub) return;
        const Ib = ab ? Vc(ab) : null;
        if (Eb(Ub, Tb, sb * ("y" === Tb ? Ub.clientHeight : Ub.clientWidth) * .85), !bb || !Ib) return;
        const Hb = ib(Ub),
          fb = bb.getEnabledCandidates(cb).filter((bb => Ub.contains(bb) && Ob(bb.getBoundingClientRect(), Hb))),
          Mb = Ck(Ib, fb.map((bb => bb.getBoundingClientRect())));
        Mb >= 0 && bb.setFocus(fb[Mb], {
          scroll: !1,
          byUser: !0
        })
      };
    let Ok = null;
    const Gk = (bb, cb) => {
        var sb, kb;
        const Wb = cb.querySelector("[data-pad-friends-column]"),
          ab = bb.getFocused();
        if (!Wb || !ab || !Wb.contains(ab)) return !1;
        const Tb = bb.getEnabledCandidates(cb).filter((bb => !Wb.contains(bb))),
          Ub = Ck(Vc(ab), Tb.map((bb => bb.getBoundingClientRect()))),
          Ib = null === (sb = Ok) || void 0 === sb ? void 0 : sb.deref();
        return bb.setFocus(null !== Ib && void 0 !== Ib && Ib.isConnected ? Ib : null !== (kb = Tb[Ub]) && void 0 !== kb ? kb : null, {
          byUser: !0
        }), !0
      },
      Kk = bb => {
        const cb = (0, fb.i)(bb);
        return (0, mb.F)(cb) || kk.s.some((bb => (0, fb.i)(bb) === cb)) ? null : cb
      },
      Zk = (bb, cb) => {
        const sb = Kk(cb);
        return null !== sb && bb.wasPressed(sb)
      },
      zk = function(bb, cb, sb) {
        let kb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Wb = (bb => {
            var cb, sb;
            return null !== (cb = null === (sb = tk(bb)) || void 0 === sb ? void 0 : sb.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== cb ? cb : null
          })(cb),
          ab = bb && Wb ? new Set(bb.getEnabledCandidates(cb)) : null;
        (0, bk.b)(), sb === ck.r.SETTINGS && (0, sk.k)(Ib.d.get("openEverythingMenuName")) ? Ib.d.set({
          openEverythingMenuName: sb
        }) : (0, sk.v)(new Event("padMenuShortcut"), sb, kb), bb && ab && Wb && yk(bb, cb, ab, Wb.closest("[data-pad-tabs]"))
      },
      qk = bb => null !== bb.closest(".Dropdown-root") || null !== bb.querySelector(".Dropdown-root.is-open"),
      dk = bb => null !== (0, Bk.c)() && "popup" !== bb.layer.kind && !tk(bb.root) && !qk(bb.root),
      Ak = (0, lb.e)(mb.T),
      wk = (0, lb.e)(mb.T),
      rk = (bb, cb, sb) => {
        if (((bb, cb) => {
            const sb = (0, fb.i)("chat");
            return hk(cb) && bb.isHeld(sb) ? "hold" === Jk.update(bb.wasPressed(sb), bb.isHeld(sb), performance.now(), Qb.d[(0, Xb.g)().tapHoldTime].wheelMs) && (Mb.e.consumeButton(sb), Hb.j.QQ(Yk.p), !0) : (Jk.release(), !1)
          })(cb, sb.layer.kind)) return !0;
        const kb = sb.root;
        for (const [Tb, Ub] of [
            ["menuTabPrevious", -1],
            ["menuTabNext", 1]
          ])
          if (cb.wasPressed((0, fb.i)(Tb))) {
            const cb = qk(kb) ? null : tk(kb);
            if (cb) Pk(bb, kb, cb, Ub);
            else if (dk(sb)) {
              var Wb;
              const cb = bb ? new Set(bb.getEnabledCandidates(kb)) : null;
              null !== (Wb = (0, Bk.c)()) && void 0 !== Wb && Wb(Ub) && bb && cb && yk(bb, kb, cb, null)
            } else bb && Ek(bb, kb, Ub);
            return !0
          } for (const [Tb, Ub, Ib] of [
            ["menuPageUp", -1, Ak],
            ["menuPageDown", 1, wk]
          ]) {
          const sb = (0, fb.i)(Tb);
          if (cb.wasPressed(sb) && Ib.reset(), Ib.update(cb.isHeld(sb), performance.now())) return ik(bb, kb, Ub), !0
        }
        const ab = "popup" === sb.layer.kind;
        return Zk(cb, "pause") ? (ab || (0, sk.r)() && "menu" !== sb.layer.kind || zk(bb, kb, (0, sk.r)() ? ck.r.SETTINGS : (0, gk.c)()), !0) : !!Zk(cb, "leaderboard") && ("home" === sb.layer.kind ? (bb => {
          const cb = [...bb.querySelectorAll("[data-pad-notifications]")].find(Hc);
          cb && tc(cb)
        })(kb) : ab || zk(bb, kb, ck.r.LOBBY_LEADERBOARD, "inGame" === Ib.d.get("gameState")), !0)
      },
      Sk = (bb, cb, sb) => {
        if (rk(bb, cb, sb)) return !0;
        const kb = "home" === sb.layer.kind;
        if (cb.wasPressed((0, fb.i)("menuSecondary"))) {
          const cb = bb.getFocused(),
            Wb = cb ? Tk(cb) : null;
          if (Wb) return tc(Wb), !0;
          if (kb) {
            const cb = sb.root.querySelector("[data-pad-search] input");
            return cb && ec(cb, sb.root) ? (bb.setFocus(cb, {
              byUser: !0
            }), tc(cb)) : Ib.d.set({
              searchOpen: !0
            }), !0
          }
        }
        return !(!kb || !Zk(cb, "inventory")) && (((bb, cb) => {
          var sb, kb;
          const Wb = cb.querySelector("[data-pad-friends-column]");
          if (!Wb || !Hc(Wb)) return void(0, sk.v)(new Event("padMenuShortcut"), ck.r.SOCIAL);
          if (Gk(bb, cb)) return;
          const ab = null !== (sb = null === (kb = Wb.querySelector("[data-pad-friends-start]")) || void 0 === kb ? void 0 : kb.getBoundingClientRect().top) && void 0 !== sb ? sb : -1 / 0,
            Tb = bb.getEnabledCandidates(Wb),
            Ub = Tb.filter((bb => bb.getBoundingClientRect().top >= ab)),
            Ib = Ub.length > 0 ? Ub : Tb,
            Hb = Vk(Ib.map((bb => bb.getBoundingClientRect())));
          bb.setFocus(Hb >= 0 ? Ib[Hb] : null, {
            byUser: !0
          })
        })(bb, sb.root), !0)
      },
      Rk = bb => {
        var cb, sb, kb;
        const Wb = Zc(bb);
        if (null !== Wb) return Wb;
        const ab = (null !== (cb = null !== (sb = null !== (kb = bb.getAttribute("aria-label")) && void 0 !== kb ? kb : bb.getAttribute("title")) && void 0 !== sb ? sb : bb.textContent) && void 0 !== cb ? cb : "").replace(/\s+/g, " ").trim();
        return ab ? `${bb.tagName}:${ab.slice(0,100)}` : null
      };
    class vk {
      constructor() {
        this.remembered = new Map, this.history = []
      }
      enter(bb) {
        const cb = this.history.indexOf(bb);
        if (cb >= 0) {
          for (const bb of this.history.splice(cb + 1)) this.remembered.delete(bb);
          return !0
        }
        return this.remembered.delete(bb), this.history.push(bb), this.history.length > 32 && this.forget(this.history[0]), !1
      }
      forget(bb) {
        this.remembered.delete(bb);
        const cb = this.history.indexOf(bb);
        cb >= 0 && this.history.splice(cb, 1)
      }
      remember(bb, cb, sb, kb) {
        const Wb = Rk(cb),
          ab = Zc(cb),
          Tb = null !== ab && ((bb, cb) => {
            let sb = 0;
            for (const kb of bb.querySelectorAll("[data-pad-key], [href]"))
              if ((kb.getAttribute("data-pad-key") === cb || kb.getAttribute("href") === cb) && (sb++, sb > 1)) return !0;
            return !1
          })(sb, ab) ? Math.max(0, this.twins(kb(), ab).indexOf(cb)) : 0;
        this.remembered.set(bb, {
          element: new WeakRef(cb),
          identity: Wb,
          ordinal: Tb
        })
      }
      has(bb) {
        return this.remembered.has(bb)
      }
      recall(bb, cb) {
        var sb, kb;
        const Wb = this.remembered.get(bb);
        if (!Wb) return null;
        const ab = Wb.element.deref();
        if (ab && cb.includes(ab)) return ab;
        if (null === Wb.identity) return null;
        const Tb = this.twins(cb, Wb.identity);
        return null !== (sb = null !== (kb = Tb[Wb.ordinal]) && void 0 !== kb ? kb : Tb[0]) && void 0 !== sb ? sb : null
      }
      twins(bb, cb) {
        return bb.filter((bb => Rk(bb) === cb))
      }
    }
    var Fk = sb(1278);
    const xk = bb => {
        const cb = [];
        let sb = bb;
        for (; sb && sb !== document.body;) {
          const bb = getComputedStyle(sb).zIndex;
          "auto" !== bb && cb.push(Number(bb) || 0), sb = sb.parentElement
        }
        return cb.reverse()
      },
      jk = (bb, cb) => {
        const sb = ((bb, cb) => {
          const sb = Math.max(bb.length, cb.length);
          for (let ab = 0; ab < sb; ab++) {
            var kb, Wb;
            const sb = (null !== (kb = bb[ab]) && void 0 !== kb ? kb : 0) - (null !== (Wb = cb[ab]) && void 0 !== Wb ? Wb : 0);
            if (0 !== sb) return sb
          }
          return 0
        })(xk(bb), xk(cb));
        if (0 !== sb) return sb > 0;
        if (bb.contains(cb)) return !1;
        if (cb.contains(bb)) return !0;
        const kb = bb.compareDocumentPosition(cb);
        return !!(kb & Node.DOCUMENT_POSITION_PRECEDING) || !(kb & Node.DOCUMENT_POSITION_FOLLOWING) && null
      },
      pk = (bb, cb) => {
        var sb;
        return null !== (sb = jk(bb.root, cb.root)) && void 0 !== sb ? sb : bb.order > cb.order
      },
      bW = (bb, cb) => cb.some((cb => !cb.contains(bb) && !bb.contains(cb) && !0 === jk(cb, bb)));
    let cW = null,
      sW = null,
      kW = -1;
    const WW = () => {
        var bb;
        const cb = null === (bb = document.timeline) || void 0 === bb ? void 0 : bb.currentTime,
          sb = "number" === typeof cb ? cb : null;
        if (null !== sb && sb === sW && kW === (0, Fk.e)()) return cW;
        let kb = null;
        const Wb = [],
          ab = [...document.querySelectorAll("[data-pad-covers]")].filter(Hc);
        for (const Tb of (0, Fk.f)()) {
          const bb = Tb.getRoot(),
            cb = !!bb && Hc(bb) && !bW(bb, ab);
          if (Tb.shown && !cb && Wb.push(Tb), Tb.shown = cb, !bb || !cb) continue;
          const sb = {
            layer: Tb,
            root: bb,
            order: Tb.order
          };
          kb && !pk(sb, kb) || (kb = sb)
        }
        cW = kb, sW = sb, kW = (0, Fk.e)();
        for (const Tb of Wb)(0, Fk.i)(Tb);
        return cW
      },
      aW = () => {
        const bb = WW();
        return !(null === bb || void 0 === bb || !bb.layer.close) && (bb.layer.close(), sW = null, !0)
      },
      TW = () => {
        var bb, cb;
        return null !== (bb = null === (cb = WW()) || void 0 === cb ? void 0 : cb.root) && void 0 !== bb ? bb : null
      },
      UW = bb => bb ? {
        ...bb,
        root: TW()
      } : null;
    let IW = null,
      HW = null,
      fW = (0, Xb.g)().menuNavigation,
      MW = null;
    const XW = new Lb;
    let nW = null;
    Hb.j.subscribe(Xb.f, (() => {
      const bb = (0, Xb.g)().menuNavigation;
      bb !== fW && (fW = bb, IW = null, HW = null)
    }));
    const mW = () => {
        var bb;
        return null !== (bb = IW) && void 0 !== bb ? bb : (0, Xb.g)().menuNavigation
      },
      lW = bb => {
        if (NW()) {
          if (MW = UW(bb), "hybrid" === mW()) return XW.lock(), void(HW = HW ? null : TW());
          IW = "focus" === mW() ? "cursor" : "focus"
        }
      },
      QW = () => {
        const bb = MW;
        return MW = null, bb
      };
    let eW = {
      root: null,
      firstSeenMs: -1 / 0,
      atMs: -1 / 0,
      has: !1
    };
    const CW = function(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const sb = eW.root === bb,
          kb = sb ? eW.firstSeenMs : cb,
          Wb = eW.has || cb - kb > 1e3;
        return (!sb || !Wb || cb - eW.atMs > 250) && (eW = {
          root: bb,
          firstSeenMs: kb,
          atMs: cb,
          has: lc(bb)
        }), eW.has
      },
      NW = () => {
        const bb = TW();
        return null !== bb && CW(bb)
      },
      VW = () => {
        const bb = WW();
        return HW && (null === bb || void 0 === bb ? void 0 : bb.root) !== HW && (HW = null), (bb => {
          let {
            mode: cb,
            hasLayer: sb,
            hasCandidates: kb,
            hybridCursorEngaged: Wb
          } = bb;
          return sb ? "cursor" !== cb && kb() ? "hybrid" === cb && Wb ? "cursor" : "focus" : "cursor" : null
        })({
          mode: mW(),
          hasLayer: null !== bb,
          hasCandidates: () => null !== bb && CW(bb.root),
          hybridCursorEngaged: null !== HW
        })
      },
      LW = () => "hybrid" === mW() && NW(),
      uW = "pad-focused";
    var YW = sb(4287),
      hW = sb(4730);
    const JW = "[data-pad-destructive]",
      gW = `${JW}, [data-pad-back]`,
      BW = bb => ({
        rect: bb.getBoundingClientRect(),
        destructive: bb.matches(JW),
        closes: null !== bb.closest("[data-pad-close-button]"),
        unavailable: bb.matches("[data-pad-unavailable]")
      }),
      tW = bb => {
        let {
          destructive: cb,
          closes: sb,
          unavailable: kb
        } = bb;
        return cb ? sb ? 2 : 3 : kb ? 1 : 0
      },
      yW = bb => {
        let cb = -1;
        for (let sb = 0; sb < bb.length; sb++) {
          if (cb < 0) {
            cb = sb;
            continue
          }
          const kb = bb[sb],
            Wb = bb[cb];
          tW(kb) === tW(Wb) ? Nk(kb.rect, Wb.rect) < 0 && (cb = sb) : tW(kb) < tW(Wb) && (cb = sb)
        }
        return cb
      },
      PW = "[data-pad-tabs]",
      DW = "[data-pad-tab]",
      EW = (bb, cb) => {
        const sb = bb.querySelector(`${DW}[data-pad-selected='true']`);
        return sb && cb.includes(sb) ? sb : null
      },
      iW = (bb, cb) => {
        let sb = cb;
        for (let kb = cb.parentElement; kb && !kb.contains(bb); kb = kb.parentElement) sb = kb;
        return sb
      };
    class OW {
      constructor() {
        this.contentReturn = null
      }
      redirect(bb, cb, sb, kb) {
        var Wb, ab;
        const Tb = bb.closest(PW),
          Ub = cb.closest(PW);
        var Ib;
        if (Ub && Ub !== Tb) return Tb || (this.contentReturn = new WeakRef(bb)), null !== (Ib = EW(Ub, sb)) && void 0 !== Ib ? Ib : cb;
        if (!Tb || Ub) return cb;
        const Hb = iW(bb, cb),
          fb = null === (Wb = this.contentReturn) || void 0 === Wb ? void 0 : Wb.deref();
        return fb && Hb.contains(fb) && sb.includes(fb) ? fb : null !== (ab = this.pickRegionStart(Hb, Bb(cb, "y", kb), sb)) && void 0 !== ab ? ab : cb
      }
      findTabContent(bb, cb, sb) {
        const kb = bb.closest(PW);
        if (!kb || !bb.matches(DW) || kb.contains(cb)) return null;
        const Wb = cb.closest(PW);
        if (Wb && Number(Wb.dataset.padTabs) <= Number(kb.dataset.padTabs)) return null;
        const ab = iW(bb, cb);
        return sb.some((bb => ab.contains(bb) && !bb.closest(gW))) || !cb.closest(gW) ? ab : null
      }
      pickContentStart(bb, cb, sb) {
        return this.contentReturn = null, this.pickRegionStart(bb, Bb(bb, "y", sb), cb)
      }
      pickReplacedContentStart(bb, cb, sb, kb) {
        if (!cb.contains(bb)) return null;
        const Wb = iW(cb, bb),
          ab = sb.filter((bb => cb.contains(bb) && !Wb.contains(bb) && !bb.closest(gW)));
        return 0 === ab.length ? null : (this.contentReturn = null, this.pickRegionStart(cb, Bb(ab[0], "y", kb), ab))
      }
      backToStrip(bb, cb, sb) {
        if (bb.closest(PW)) return null;
        const kb = tk(sb);
        for (const Wb of sb.querySelectorAll(PW)) {
          if (Number(Wb.dataset.padTabs) <= 1 || Wb === kb) continue;
          const ab = EW(Wb, cb),
            Tb = ab ? iW(bb, Wb).parentElement : null;
          if (ab && Tb && Tb !== sb && sb.contains(Tb)) return this.contentReturn = new WeakRef(bb), ab
        }
        return null
      }
      pickRegionStart(bb, cb, sb) {
        const kb = ib(cb),
          Wb = bb => {
            const cb = sb.filter((cb => bb.contains(cb) && !cb.closest(PW) && Ob(cb.getBoundingClientRect(), kb))),
              Wb = yW(cb.map(BW));
            return Wb >= 0 ? cb[Wb] : null
          };
        for (const ab of Cc(bb)) {
          const bb = Wb(ab);
          if (bb) return bb
        }
        for (const ab of bb.querySelectorAll(PW)) {
          const bb = EW(ab, sb);
          if (bb) return bb
        }
        return Wb(bb)
      }
    }
    const GW = "[data-pad-default-focus], .Dropdown-option.is-selected",
      KW = ".Dropdown-root.is-open > .Dropdown-menu",
      ZW = "[data-pad-no-step-in]",
      zW = "[data-pad-tabs]",
      qW = "[data-pad-press-area]",
      dW = bb => {
        let cb = bb;
        for (let sb = 0; cb && sb <= 4; sb++, cb = cb.parentElement) {
          const sb = cb.querySelector(".CircleInfo");
          if (sb) return cb === bb || cb.querySelectorAll(Uc).length <= 1 ? sb : null;
          if (cb !== bb && cb.querySelectorAll(Uc).length > 1) return null
        }
        return null
      },
      AW = (bb, cb, sb) => {
        gc(bb, cb, sb);
        const kb = null !== bb && void 0 !== bb && bb.isConnected ? dW(bb) : null,
          Wb = dW(cb);
        kb !== Wb && gc(kb, Wb, Wb ? Vc(Wb) : sb, {
          leaveBelow: bb,
          enterBelow: cb
        })
      },
      wW = bb => bb.getBoundingClientRect(),
      rW = (bb, cb, sb) => {
        const kb = new Set(sb);
        for (let Wb = bb; Wb; Wb = Wb === cb ? null : Wb.parentElement)
          if (kb.has(Wb)) return Wb;
        return null
      },
      oW = (bb, cb) => !bb.root || bb.root === cb || cb.matches(KW) && bb.root.contains(cb);
    const SW = new class {
      constructor() {
        this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new vk, this.tabStripNav = new OW, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepeatKey = null, this.confirmRepeated = !1, this.confirmRepeat = (0, lb.e)(mb.v), this.dpadRepeats = new Map(mb.y.map((bb => [bb, (0, lb.e)(mb.C)]))), this.stickRepeat = new mb.e((0, lb.e)(mb.Y)), this.lastRefocusCheckMs = -1 / 0, this.enteredLayerAtMs = 0, this.lastFocusedCentre = null, this.lastActivatedKey = null, this.lastActivated = null, this.lastActivatedAtMs = -1 / 0, this.pendingFocus = null, this.tabOpenWait = null, this.retryMove = null, this.scrollRemainder = {
          x: 0,
          y: 0
        }, this.wasActive = !1, this.layerKind = null, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.listeners = new Set, this.dropdownLayers = new WeakMap, this.dropdownLayerCounter = 0
      }
      install() {
        const bb = Mb.e.register({
            name: "focus",
            isActive: () => (0, nb.k)() && "focus" === VW(),
            onFrame: bb => {
              this.onFrame(bb)
            },
            onDeactivate: () => {
              this.deactivate()
            },
            wakePressActs: bb => (0, Mb.h)(bb) || bb === (0, fb.i)("menuConfirm") && Oc((0, nb.c)())
          }),
          cb = (0, Fk.k)((bb => {
            const cb = (0, Fk.m)(bb);
            null === bb.memoryKey && this.memory.forget(cb), cb === this.layerKey && (this.layerKey = null)
          }));
        let sb = -1 / 0;
        const kb = Tb.i.onFrame((bb => {
            (0, nb.k)() || bb.timestampMs - sb < 100 || (sb = bb.timestampMs, WW())
          })),
          Wb = bb => {
            bb.isTrusted && bb.target instanceof Element && Tb.i.getActivePad() && this.noteChosenStop(bb.target)
          };
        return document.addEventListener("click", Wb, !0), () => {
          bb(), cb(), kb(), document.removeEventListener("click", Wb, !0), this.deactivate()
        }
      }
      noteChosenStop(bb) {
        var cb, sb;
        const kb = WW();
        if (!kb || !kb.root.contains(bb)) return;
        const Wb = null !== (cb = null === (sb = bb.closest(".Dropdown-root")) || void 0 === sb ? void 0 : sb.querySelector(".Dropdown-control")) && void 0 !== cb ? cb : bb,
          ab = rW(Wb, kb.root, this.getEnabledCandidates(kb.root));
        if (!ab) return;
        const Tb = (0, Fk.m)(kb.layer);
        Tb === this.layerKey && kb.root === this.layerRoot || this.beginLayer(kb, Tb), this.wasActive ? this.setFocus(ab, {
          scroll: !1,
          byUser: !0
        }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = ab, this.lastFocusedCentre = Vc(ab), this.rememberFocus(ab), this.notify())
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
          this.stickRepeat.reset(), null !== (bb = this.focused) && void 0 !== bb && bb.isConnected && AW(this.focused, null, Vc(this.focused)), this.notify()
        }
      }
      setFocus(bb) {
        var cb;
        let {
          scroll: sb = !0,
          byUser: kb = !1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (kb && (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1), bb === this.focused) return;
        const Wb = null !== (cb = this.focused) && void 0 !== cb && cb.isConnected ? this.focused : null;
        if (this.focused = bb, bb) {
          sb && (bb.classList.add(uW), bb.scrollIntoView({
            block: "nearest",
            inline: "nearest",
            behavior: "instant"
          })), kb && ((bb, cb) => {
            const sb = cb.closest("[data-pad-friends-column]");
            sb && bb && !sb.contains(bb) && (Ok = new WeakRef(bb))
          })(Wb, bb);
          const cb = Vc(bb);
          this.lastFocusedCentre = cb, this.movedInLayer && this.rememberFocus(bb), AW(Wb, bb, cb), "false" === bb.getAttribute("aria-pressed") && bb.closest("[data-pad-select-on-focus]") && tc(bb)
        } else Wb && AW(Wb, null, Vc(Wb));
        this.notify()
      }
      rememberFocus(bb) {
        const cb = this.layerRoot;
        this.layerKey && cb && this.memory.remember(this.layerKey, bb, cb, (() => this.getEnabledCandidates(cb)))
      }
      noteCursorActivation(bb) {
        const cb = WW();
        if (!cb || !cb.root.contains(bb)) return;
        const sb = this.getEnabledCandidates(cb.root),
          kb = new Set(sb);
        let Wb = bb;
        for (; Wb && !kb.has(Wb);) Wb = Wb === cb.root ? null : Wb.parentElement;
        if (!(Wb instanceof HTMLElement)) return;
        const ab = (0, Fk.m)(cb.layer);
        this.memory.enter(ab), this.memory.remember(ab, Wb, cb.root, (() => sb))
      }
      notePageEnteredByCursor(bb) {
        return this.memory.enter(bb)
      }
      recallStop(bb, cb) {
        return this.findRemembered(bb, cb)
      }
      focusWhenFound(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.pendingFocus = {
          find: bb,
          untilMs: performance.now() + cb,
          holdWhile: sb
        }
      }
      getEnabledCandidates(bb) {
        return nc(bb).filter((bb => !fc(bb)))
      }
      onFrame(bb) {
        var cb;
        const sb = WW();
        if (!sb) return;
        const kb = null !== (cb = this.findOpenDropdown(sb)) && void 0 !== cb ? cb : sb,
          Wb = performance.now(),
          ab = (0, Fk.m)(kb.layer);
        if (ab !== this.layerKey || kb.root !== this.layerRoot) {
          const cb = this.focused;
          if (null !== this.layerKey && kb.root === this.layerRoot && cb && ec(cb, kb.root)) this.continueLayer(ab, cb), this.wasActive || this.resume(kb.root, Wb);
          else {
            const cb = !this.wasActive && !bb.wokeDevice,
              Tb = "death" === this.layerKind || cb,
              Ub = this.enterLayer(kb, ab);
            "popup" !== kb.layer.kind || kb !== sb || Ub ? "menu" === kb.layer.kind && Tb && "inGame" === Ib.d.get("gameState") && !(0, bk.d)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = Wb + YW.b) : (this.pressGuardExtends = cb, this.pressGuardUntilMs = Wb + (cb ? YW.b : Tb ? 500 : 250))
          }
        } else this.wasActive || this.resume(kb.root, Wb);
        if (this.layerKind = kb.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), bb.wokeDevice && this.focusPointedStop(kb.root), this.validateFocus(kb, Wb), Wb < this.pressGuardUntilMs && this.pressGuardExtends && (bb.wasPressed((0, fb.i)("menuConfirm")) || bb.wasPressed((0, fb.i)("menuBack"))) && (this.pressGuardUntilMs = Wb + YW.b), Wb >= this.pressGuardUntilMs && this.handleButtons(bb, kb)) return;
        const Tb = "hybrid" === mW();
        if (Tb && (bb => {
            const cb = TW();
            return cb !== nW && (nW = cb, XW.lock()), XW.update(bb, (0, Xb.g)().moveDeadzone)
          })(bb.leftStick)) return Ub = this.getHandoff(), MW = UW(Ub), HW = TW(), void Mb.e.handOffHeldInput();
        var Ub;
        this.handleDirections(bb, kb, Wb, !Tb), this.handleScroll(bb, kb)
      }
      findOpenDropdown(bb) {
        const cb = bb.root.querySelector(KW);
        if (!cb || !Hc(cb)) return null;
        let sb = this.dropdownLayers.get(cb);
        return sb || (this.dropdownLayerCounter++, sb = {
          id: `dropdown-${this.dropdownLayerCounter}`,
          kind: bb.layer.kind,
          getRoot: () => cb,
          close: () => {
            Dc(cb)
          },
          memoryKey: null
        }, this.dropdownLayers.set(cb, sb)), {
          layer: sb,
          root: cb,
          order: bb.order
        }
      }
      focusPointedStop(bb) {
        const cb = (0, nb.c)(),
          sb = cb ? document.elementFromPoint(cb.x, cb.y) : null;
        if (!sb || !bb.contains(sb)) return;
        const kb = rW(sb, bb, this.getEnabledCandidates(bb));
        kb && this.setFocus(kb, {
          scroll: !1,
          byUser: !0
        })
      }
      enterLayer(bb, cb) {
        const sb = this.beginLayer(bb, cb),
          kb = QW();
        return kb && oW(kb, bb.root) ? (this.takeOver(bb.root, kb, this.enteredLayerAtMs), sb) : (this.restoreLayerFocus(bb.root, sb), sb)
      }
      beginLayer(bb, cb) {
        return this.layerKey = cb, this.layerRoot = bb.root, this.lastActivatedKey = null, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoreOnFocusLoss = !1, this.retryMove = null, this.pendingFocus = null, this.confirmPressedOn = null, this.lastRefocusCheckMs = -1 / 0, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.enteredLayerAtMs = performance.now(), this.lastFocusedCentre = null, this.memory.enter(cb)
      }
      restoreLayerFocus(bb, cb) {
        const sb = cb && this.layerKey ? this.findRemembered(bb, this.layerKey) : null;
        this.restoredFromMemory = null !== sb, this.setFocus(null !== sb && void 0 !== sb ? sb : this.pickInitial(bb, {
          waitForContent: !0
        }))
      }
      continueLayer(bb, cb) {
        this.layerKey = bb;
        const sb = this.memory.enter(bb);
        this.restoreOnFocusLoss = sb, this.movedInLayer && !sb && this.rememberFocus(cb)
      }
      resume(bb, cb) {
        var sb;
        const kb = QW();
        kb && oW(kb, bb) ? this.takeOver(bb, kb, cb) : null !== (sb = this.focused) && void 0 !== sb && sb.isConnected && AW(null, this.focused, Vc(this.focused))
      }
      pickPreferred(bb) {
        var cb;
        return null !== (cb = this.layerKey ? this.findRemembered(bb, this.layerKey) : null) && void 0 !== cb ? cb : this.pickInitial(bb, {
          waitForContent: !0
        })
      }
      findRemembered(bb, cb) {
        return this.memory.has(cb) ? this.memory.recall(cb, this.getEnabledCandidates(bb)) : null
      }
      getHandoff() {
        var bb, cb, sb;
        const kb = null !== (bb = this.focused) && void 0 !== bb && bb.isConnected ? this.focused : null,
          Wb = null !== (cb = this.layerRoot) && void 0 !== cb && cb.isConnected ? this.layerRoot : null;
        return {
          point: kb ? Vc(kb) : null !== (sb = this.lastFocusedCentre) && void 0 !== sb ? sb : this.getLayerStartPoint(Wb),
          element: kb,
          direction: null
        }
      }
      getLayerStartPoint(bb) {
        if (!bb) return {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2
        };
        const cb = this.pickInitial(bb, {
          includeDisabled: !0
        });
        return Vc(null !== cb && void 0 !== cb ? cb : bb)
      }
      takeOver(bb, cb, sb) {
        const {
          element: kb,
          direction: Wb,
          point: ab
        } = cb, Tb = kb instanceof HTMLElement && ec(kb, bb) ? kb : null;
        if (!Wb) {
          const cb = this.focused;
          return Tb ? this.setFocus(Tb, {
            scroll: !1,
            byUser: !0
          }) : this.focusNearest(bb, ab), void(this.focused && this.focused === cb && this.focused.isConnected && AW(null, this.focused, Vc(this.focused)))
        }
        if (this.dpadRepeats.get(Wb).update(!0, sb), Tb) return this.setFocus(Tb, {
          scroll: !1,
          byUser: !0
        }), void this.move(bb, Wb, sb, !0);
        const Ub = this.getEnabledCandidates(bb),
          Ib = Ub.map(wW),
          Hb = nk(new DOMRect(ab.x, ab.y, 0, 0), Ib, Wb),
          fb = Hb >= 0 ? Hb : Ck(ab, Ib);
        this.setFocus(fb >= 0 ? Ub[fb] : this.pickInitial(bb), {
          byUser: !0
        })
      }
      focusNearest(bb, cb) {
        const sb = this.getEnabledCandidates(bb),
          kb = Ck(cb, sb.map(wW));
        this.setFocus(kb >= 0 ? sb[kb] : this.pickInitial(bb), {
          byUser: !0
        })
      }
      pickDefault(bb) {
        let {
          includeDisabled: cb = !1,
          exclude: sb = null
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const kb = [...bb.querySelectorAll(GW)].filter((kb => (null === sb || void 0 === sb || !sb.has(kb)) && (cb ? Qc(kb, bb) : ec(kb, bb)))),
          Wb = yW(kb.map(BW));
        return Wb >= 0 ? kb[Wb] : null
      }
      pickNewAreaStart(bb, cb) {
        const sb = [...bb.querySelectorAll(qW)].filter(Hc);
        for (const kb of [...Cc(bb), ...sb]) {
          if (cb.has(kb)) continue;
          const bb = this.getEnabledCandidates(kb),
            sb = yW(bb.map(BW));
          if (sb >= 0) return bb[sb]
        }
        return null
      }
      pickInitial(bb) {
        let {
          includeDisabled: cb = !1,
          waitForContent: sb = !1,
          enteredAtMs: kb = this.enteredLayerAtMs
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Wb = this.pickDefault(bb, {
          includeDisabled: cb
        });
        if (Wb) return Wb;
        const ab = bb => cb ? nc(bb) : this.getEnabledCandidates(bb);
        let Tb = [];
        for (const Xb of Cc(bb))
          if (Tb = ab(Xb), Tb.length > 0) break;
        if (0 === Tb.length) {
          if (sb && performance.now() - kb < 1e4 && (bb => {
              for (const cb of bb.querySelectorAll("[data-pad-initial-area]"))
                if (!Ic(cb, !1)) return !0;
              return !1
            })(bb)) return null;
          Tb = ab(bb)
        }
        const Ub = Tb.map(wW),
          Ib = ib(null),
          Hb = Tb.filter(((bb, cb) => Ob(Ub[cb], Ib))),
          fb = Hb.length > 0 ? Hb : Tb,
          Mb = yW(fb.map(BW));
        return Mb >= 0 ? fb[Mb] : null
      }
      validateFocus(bb, cb) {
        if (this.pendingFocus) {
          var sb, kb;
          const Wb = this.pendingFocus.find();
          if (Wb && ec(Wb, bb.root)) return this.pendingFocus = null, void this.setFocus(Wb, {
            byUser: !0
          });
          cb > this.pendingFocus.untilMs && (null === (sb = (kb = this.pendingFocus).holdWhile) || void 0 === sb || !sb.call(kb)) && (this.pendingFocus = null)
        }
        const Wb = this.focused,
          ab = !!Wb && ec(Wb, bb.root);
        if (!(!ab && Wb && Wb === this.lastActivated && cb - this.lastActivatedAtMs < 5e3 && bb.root.contains(Wb) && Hc(Wb) && fc(Wb))) {
          if (!ab && this.restoreOnFocusLoss && this.layerKey) return this.restoreOnFocusLoss = !1, this.movedInLayer = !1, this.scrolledInLayer = !1, this.enteredLayerAtMs = cb, void this.restoreLayerFocus(bb.root, !0);
          if ((!ab || !this.movedInLayer && !this.scrolledInLayer) && !(cb - this.lastRefocusCheckMs < (ab ? 200 : 50)))
            if (this.lastRefocusCheckMs = cb, ab) {
              const sb = cb - this.enteredLayerAtMs < 15e3 ? this.pickPreferred(bb.root) : null,
                kb = null !== sb && void 0 !== sb ? sb : this.restoredFromMemory ? null : this.pickDefault(bb.root);
              kb && kb !== Wb && this.setFocus(kb)
            } else {
              if (this.lastFocusedCentre && this.movedInLayer) {
                const cb = this.pendingFocus;
                return this.focusNearest(bb.root, this.lastFocusedCentre), void(this.pendingFocus = cb)
              }
              this.setFocus(this.pickPreferred(bb.root))
            }
        }
      }
      handleButtons(bb, cb) {
        if (bb.wasPressed((0, fb.i)("menuToggleCursor"))) return lW(this.getHandoff()), !0;
        if (bb.wasPressed((0, fb.i)("menuBack"))) {
          const bb = Dc(cb.root);
          return bb ? this.setFocus(bb, {
            byUser: !0
          }) : Gk(this, cb.root) || (Kc(cb.root) ? this.returnToOpener(cb.root) : this.backToStrip(cb.root) || aW()), !0
        }
        const sb = (0, fb.i)("menuConfirm");
        var kb, Wb;
        bb.wasPressed(sb) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (kb = null === (Wb = this.focused) || void 0 === Wb ? void 0 : Wb.getAttribute("data-pad-repeat")) && void 0 !== kb ? kb : null, this.confirmRepeated = bb.wokeDevice, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now()));
        if (bb.wasReleased(sb)) {
          const bb = this.confirmPressedOn;
          if (this.confirmPressedOn = null, bb && !this.confirmRepeated && bb === this.focused && bb.isConnected && !fc(bb)) {
            const sb = bb.matches("[data-pad-tab]") ? bb.closest(zW) : null;
            sb ? this.enterTab(bb, sb, cb.root, performance.now()) : this.activate(bb)
          }
          return !0
        }
        return this.repeatConfirm(bb, sb), Sk(this, bb, cb)
      }
      repeatConfirm(bb, cb) {
        const sb = this.confirmPressedOn;
        sb && null !== this.confirmRepeatKey && bb.isHeld(cb) && (sb === this.focused && sb.isConnected && !fc(sb) && sb.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? sb.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.confirmRepeated = !0, this.activate(sb)) : this.confirmRepeatKey = null)
      }
      backToStrip(bb) {
        const cb = this.focused;
        if (!(0, Xb.g)().menuBackToCategories) return !1;
        const sb = null !== cb && void 0 !== cb && cb.isConnected ? this.tabStripNav.backToStrip(cb, this.getEnabledCandidates(bb), bb) : null;
        return sb && this.setFocus(sb, {
          byUser: !0
        }), null !== sb
      }
      returnToOpener(bb) {
        const cb = this.lastActivatedKey;
        cb && (this.lastActivatedKey = null, this.focusWhenFound((() => {
          var sb;
          return null !== (sb = this.getEnabledCandidates(bb).find((bb => Zc(bb) === cb))) && void 0 !== sb ? sb : null
        })))
      }
      activate(bb) {
        var cb;
        if ((0, hW.b)(bb) || ic(bb)) return;
        this.lastActivatedKey = null !== (cb = Zc(bb)) && void 0 !== cb ? cb : this.lastActivatedKey, this.lastActivated = bb, this.lastActivatedAtMs = performance.now(), this.rememberFocus(bb);
        const sb = this.layerRoot;
        if (sb) {
          const cb = new Set(sb.querySelectorAll(GW)),
            kb = new Set(sb.querySelectorAll(`[data-pad-initial-area], ${qW}`)),
            Wb = this.lastActivatedAtMs;
          this.focusWhenFound((() => {
            var Wb;
            return ec(bb, sb) ? null : null !== (Wb = this.pickDefault(sb, {
              exclude: cb
            })) && void 0 !== Wb ? Wb : this.pickNewAreaStart(sb, kb)
          }), 5e3, (() => bb.isConnected && fc(bb) && performance.now() - Wb < 6e4))
        }
        tc(bb), Ec(bb)
      }
      handleDirections(bb, cb, sb, kb) {
        const Wb = hk(cb.layer.kind) ? (0, fb.i)("chat") : null;
        for (const Ub of mb.y) {
          this.dpadRepeats.get(Ub).update(bb.isHeld(Ub), sb) && (Ub !== Wb || bb.wasPressed(Ub)) && this.move(cb.root, Ub, sb, !0)
        }
        const ab = kb ? (0, mb.m)(bb.leftStick, (0, Xb.g)().moveDeadzone) : {
            x: 0,
            y: 0
          },
          Tb = this.stickRepeat.update((0, mb._)(ab), sb);
        if (Tb && this.move(cb.root, Tb, sb, !0), this.retryMove && sb >= this.retryMove.atMs) {
          const {
            direction: bb
          } = this.retryMove;
          this.retryMove = null, this.move(cb.root, bb, sb, !1)
        }
      }
      move(bb, cb, sb, kb) {
        var Wb;
        let ab = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.pendingFocus && this.pendingFocus === (null === (Wb = this.tabOpenWait) || void 0 === Wb ? void 0 : Wb.wait) && cb === this.tabOpenWait.direction) return;
        this.pendingFocus = null;
        const Tb = this.focused;
        if (!Tb || !Tb.isConnected) {
          const cb = this.pickInitial(bb);
          return void(cb && this.setFocus(cb, {
            byUser: !0
          }))
        }
        const Ub = "Left" === cb || "Right" === cb,
          Ib = Ub ? (0, hW.b)(Tb) : null;
        if (Ib) return void Ib.adjust("Left" === cb ? -1 : 1);
        const Hb = bb => null !== bb.closest("[data-pad-friends-column]"),
          fb = Hb(Tb),
          Mb = wW(Tb),
          Xb = Ub || Tb.closest(zW) ? null : (bb => {
            const cb = new Map;
            return sb => {
              const kb = sb.closest(zW);
              if (!kb) return !1;
              let Wb = cb.get(kb);
              if (void 0 === Wb) {
                const sb = wW(kb);
                Wb = Xk(bb, sb) && (sb.right <= bb.left || sb.left >= bb.right), cb.set(kb, Wb)
              }
              return Wb
            }
          })(Mb),
          nb = null !== Tb.closest(ZW),
          mb = this.getEnabledCandidates(bb).filter((bb => bb !== Tb && (Ub || Hb(bb) === fb) && !(null !== Xb && void 0 !== Xb && Xb(bb)) && (nb || !bb.closest(ZW)))),
          lb = mb.map(wW),
          Qb = Bb(Tb, "y", bb),
          eb = ib(Qb);
        if (!ab && !Ob(Mb, eb)) {
          const bb = mb.filter(((bb, cb) => Ob(lb[cb], eb)));
          if (bb.length > 0) {
            const cb = {
              x: eb.left + eb.width / 2,
              y: eb.top + eb.height / 2
            };
            return void this.setFocus(bb[Ck(cb, bb.map(wW))], {
              byUser: !0
            })
          }
        }
        const Cb = Ub ? ((bb, cb, sb) => {
            const kb = wW(bb),
              Wb = bb.closest(zW),
              ab = Wb ? wW(Wb) : null;
            return cb.map(((cb, Tb) => {
              const Ub = sb[Tb];
              if (Ub.bottom > kb.top && Ub.top < kb.bottom) return !0;
              const Ib = cb.closest(zW);
              if (Wb && ab) return Ib !== Wb && (null !== Ib || Ub.bottom <= ab.top || Ub.top >= ab.bottom);
              if (Ib) return !Xk(kb, wW(Ib));
              let Hb = bb;
              for (let sb = bb.parentElement; sb && !sb.contains(cb); sb = sb.parentElement) Hb = sb;
              const fb = wW(Hb);
              return Ub.right > fb.left && Ub.left < fb.right
            }))
          })(Tb, mb, lb) : void 0,
          Nb = Ub && !Tb.closest(zW) ? (bb => bb.map((bb => !bb.closest(gW))))(mb) : void 0,
          Vb = ((bb, cb) => {
            const sb = [];
            for (let Wb = bb; Wb; Wb = Wb.parentElement) sb.push(Wb);
            const kb = new Map;
            return sb.forEach(((bb, cb) => {
              kb.set(bb, sb.length - 1 - cb)
            })), cb.map((bb => {
              for (let cb = bb; cb; cb = cb.parentElement) {
                const bb = kb.get(cb);
                if (void 0 !== bb) return bb
              }
              return -1
            }))
          })(Tb, mb),
          Lb = Ub ? "x" : "y",
          ub = Bb(Tb, Lb, bb);
        let Yb = nk(Mb, lb, cb, Vb, Cb, Nb);
        if (Yb >= 0 && ub && !ub.contains(mb[Yb])) {
          const bb = mb.flatMap(((bb, cb) => ub.contains(bb) ? [cb] : [])),
            sb = cb => cb && bb.map((bb => cb[bb])),
            kb = nk(Mb, bb.map((bb => lb[bb])), cb, bb.map((bb => Vb[bb])), sb(Cb), sb(Nb));
          Yb = kb >= 0 ? bb[kb] : Yb
        }
        if (Yb >= 0) return void this.moveTo(Tb, mb[Yb], mb, bb, cb, ab);
        if (!kb) return;
        const hb = "Right" === cb || "Down" === cb ? 1 : -1;
        if (ub && Db(ub, Lb, hb)) {
          const bb = "y" === Lb ? ub.clientHeight : ub.clientWidth;
          Eb(ub, Lb, hb * bb * .5), this.retryMove = {
            direction: cb,
            atMs: sb + 80
          }
        }
      }
      moveTo(bb, cb, sb, kb, Wb, ab) {
        const Tb = this.tabStripNav.findTabContent(bb, cb, sb);
        Tb && "true" !== bb.dataset.padSelected ? this.openTab(bb, Tb, kb, Wb) : ab && !Tb || this.setFocus(this.tabStripNav.redirect(bb, cb, sb, kb), {
          byUser: !0
        })
      }
      openTab(bb, cb, sb, kb) {
        const Wb = cb.parentElement;
        tc(bb), this.focusWhenFound((() => "true" !== bb.dataset.padSelected ? null : cb.isConnected ? this.tabStripNav.pickContentStart(cb, this.getEnabledCandidates(sb), sb) : Wb ? this.tabStripNav.pickReplacedContentStart(bb, Wb, this.getEnabledCandidates(sb), sb) : null), 3e3), this.tabOpenWait = {
          wait: this.pendingFocus,
          direction: kb
        }
      }
      enterTab(bb, cb, sb, kb) {
        this.move(sb, (bb => {
          const cb = [...bb.querySelectorAll(DW)].filter((cb => cb.closest(PW) === bb));
          if (cb.length >= 2) {
            const bb = cb[0].getBoundingClientRect(),
              sb = cb[1].getBoundingClientRect();
            return Math.abs(sb.top - bb.top) > Math.abs(sb.left - bb.left) ? "Right" : "Down"
          }
          const sb = bb.getBoundingClientRect();
          return sb.height > sb.width ? "Right" : "Down"
        })(cb), kb, !1, !0), this.focused !== bb || this.pendingFocus || this.activate(bb)
      }
      handleScroll(bb, cb) {
        const sb = (0, mb.m)(bb.rightStick, .2);
        if (0 === sb.x && 0 === sb.y) return void(this.scrollRemainder = {
          x: 0,
          y: 0
        });
        const kb = bb.dtMs / 1e3;
        for (const ab of ["x", "y"]) {
          var Wb;
          const bb = sb[ab];
          if (0 === bb) continue;
          const Tb = null !== (Wb = Bb(this.focused, ab, cb.root)) && void 0 !== Wb ? Wb : yb(cb.root, ab);
          if (!Tb) continue;
          const Ub = Math.sign(bb) * bb * bb * 1500 * kb + this.scrollRemainder[ab],
            Ib = Math.trunc(Ub);
          this.scrollRemainder[ab] = Ub - Ib, 0 !== Ib && (Eb(Tb, ab, Ib), this.scrolledInLayer = !0)
        }
      }
    };
    var RW = sb(7818);
    var vW = sb(8338);
    const FW = {
        duration: 80,
        strongMagnitude: .2,
        weakMagnitude: .2,
        needsPadInUse: !1
      },
      xW = {
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
          ...FW,
          minIntervalMs: 1e3
        },
        preview: {
          ...FW,
          minIntervalMs: 0
        }
      };
    const jW = new class {
        constructor(bb) {
          this.deps = bb, this.lastPlayedMs = {}, this.loggedFailure = !1, this.logFailure = bb => {
            this.loggedFailure || (this.loggedFailure = !0, console.warn("Controller vibration failed; further failures are not logged.", bb))
          }
        }
        play(bb, cb) {
          const sb = xW[bb];
          if (!this.deps.isVibrationOn() || sb.needsPadInUse && !this.deps.isPadInUse()) return !1;
          const kb = this.lastPlayedMs[bb];
          if (void 0 !== kb && cb - kb < sb.minIntervalMs) return !1;
          const Wb = this.deps.getActuator();
          if (!Wb) return !1;
          this.lastPlayedMs[bb] = cb;
          const {
            duration: ab,
            strongMagnitude: Tb,
            weakMagnitude: Ub
          } = sb;
          try {
            Wb.playEffect("dual-rumble", {
              duration: ab,
              strongMagnitude: Tb,
              weakMagnitude: Ub
            }).catch(this.logFailure)
          } catch (Ib) {
            this.logFailure(Ib)
          }
          return !0
        }
      }({
        getActuator: () => (bb => {
          const cb = null === bb || void 0 === bb ? void 0 : bb.vibrationActuator;
          return "function" === typeof(null === cb || void 0 === cb ? void 0 : cb.playEffect) ? cb : null
        })(Tb.i.getActiveGamepad()),
        isVibrationOn: () => (0, Xb.g)().vibration,
        isPadInUse: nb.k
      }),
      pW = bb => {
        jW.play(bb, performance.now())
      };
    var ba = sb(7820),
      ca = sb(2697),
      sa = sb(137),
      ka = sb(37),
      Wa = sb(667);
    class aa {
      constructor(bb) {
        this.deps = bb
      }
      check() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const cb = this.deps.isPadActive() ? this.deps.getPadFamily() : null;
        if (!cb) return "skipped";
        const sb = bb ? this.deps.getVisitId() : this.deps.peekVisitId();
        return null === sb || this.deps.readReportedVisitId() === sb ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(sb), this.deps.lm(cb, this.deps.getInputType()), "reported") : "notReady"
      }
    }
    const Ta = "controllerUsageReportedVisit";
    var Ua = sb(1332),
      Ia = sb(1704),
      Ha = sb(649),
      fa = sb(1423),
      Ma = sb(1258);
    const Xa = bb => ({
        translationKey: `controller:${bb}`
      }),
      na = {
        A: "A",
        B: "B",
        X: "X",
        Y: "Y",
        LB: "LB",
        RB: "RB",
        LT: "LT",
        RT: "RT",
        View: Xa("padButtonView"),
        Menu: Xa("padButtonMenu"),
        LS: "L3",
        RS: "R3",
        Up: Xa("padButtonDpadUp"),
        Down: Xa("padButtonDpadDown"),
        Left: Xa("padButtonDpadLeft"),
        Right: Xa("padButtonDpadRight"),
        Home: Xa("padButtonHome"),
        LeftStick: Xa("padButtonLeftStick"),
        RightStick: Xa("padButtonRightStick")
      },
      ma = {
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
          View: Xa("padButtonCreate"),
          Menu: Xa("padButtonOptions")
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
      la = (bb, cb) => {
        var sb;
        const kb = null !== (sb = ma[bb][cb]) && void 0 !== sb ? sb : na[cb];
        return "string" === typeof kb ? kb : (0, Wb.y)(Ma.e.get().getCurrentLanguageCode(), kb.translationKey)
      },
      Qa = bb => {
        let {
          glyph: cb,
          family: sb,
          className: kb
        } = bb;
        const Wb = (0, nb.B)(),
          ab = null !== sb && void 0 !== sb ? sb : Wb,
          Tb = (0, ba.f)(ab, cb);
        return (0, zb.jsx)("span", {
          className: Zb()("ControllerGlyph", kb),
          role: "img",
          "aria-label": la(ab, cb),
          style: {
            "--pad-glyph-mask": `url(${Tb})`,
            "--pad-glyph-aspect": (0, ba.d)(ab, cb)
          }
        })
      };
    var ea = sb(1839);
    const Ca = bb => {
      let {
        action: cb
      } = bb;
      const {
        t: sb
      } = (0, Wb.E)();
      switch (cb.kind) {
        case "reload":
          return (0, zb.jsx)("span", {
            children: sb("controller:gameplayReload")
          });
        case "specialAction":
          return null;
        case "customButton":
          return (0, zb.jsx)(ea.d, {
            text: cb.description ? [{
              icon: cb.icon
            }, ` ${cb.description}`] : [{
              icon: cb.icon
            }]
          });
        case "touchButton":
          return (0, zb.jsx)(ea.d, {
            text: cb.label
          })
      }
    };
    var Na = sb(8345);
    const Va = bb => {
      let {
        hold: cb
      } = bb;
      return (0, zb.jsx)("div", {
        className: "DropStackFillTrack",
        style: {
          "--pad-drop-stack-hold": `${cb.holdMs}ms`
        },
        children: (0, zb.jsx)("div", {
          className: "DropStackFillBar"
        })
      }, cb.id)
    };
    var La = sb(8366),
      ua = sb(8375),
      Ya = sb(8379),
      ha = sb(8359);
    const Ja = () => {
        const {
          gameState: bb
        } = (0, Ib.p)(["gameState"]), cb = (0, nb.y)(), [kb, Wb] = (0, Gb.useState)(!1), [ab, Tb] = (0, Gb.useState)(!1);
        return (0, Gb.useEffect)((() => {
          "inGame" === bb && Wb(!0)
        }), [bb]), (0, Gb.useEffect)((() => {
          if (!kb) return;
          let bb = null,
            cb = !1;
          return (Ha.s ? Promise.all([sb.e(69), sb.e(259), sb.e(199), sb.e(217), sb.e(216), sb.e(84)]).then((() => sb(39964))).then((bb => bb.startWasmPadGameplay)) : Promise.all([sb.e(69), sb.e(226), sb.e(225), sb.e(94), sb.e(72), sb.e(71), sb.e(70), sb.e(218), sb.e(182), sb.e(222), sb.e(74), sb.e(196), sb.e(215), sb.e(219), sb.e(93), sb.e(83), sb.e(113), sb.e(234), sb.e(73), sb.e(112), sb.e(155), sb.e(217), sb.e(188)]).then((() => sb(40103))).then((bb => bb.startPadGameplay))).then((sb => {
            cb || (bb = sb())
          })).catch((bb => {
            console.error("Pad gameplay failed to load", bb), cb || Tb(!0)
          })), () => {
            var sb;
            cb = !0, null === (sb = bb) || void 0 === sb || sb()
          }
        }), [kb]), (0, Gb.useEffect)((() => {
          ab && cb && (Tb(!1), Ua.NotificationProvider.showPromptPopup({
            title: "controller:gameplayLoadFailedTitle",
            subtitle: "controller:gameplayLoadFailedSubtitle",
            confirmText: "settingsMenu:reloadPagePopupConfirm",
            confirmTooltip: "",
            cancelText: "general:cancel",
            cancelTooltip: ""
          }).getResult().then((bb => {
            !0 === bb && (0, Ia.reloadBloxd)()
          })))
        }), [ab, cb]), (0, zb.jsxs)(zb.Fragment, {
          children: [(0, zb.jsx)(ga, {}), (0, zb.jsx)(Ba, {}), (0, zb.jsx)(ta, {})]
        })
      },
      ga = () => {
        const {
          t: bb
        } = (0, Wb.E)(), cb = (0, nb.y)(), {
          gameState: sb,
          isUiHidden: kb
        } = (0, Ib.p)(["gameState", "isUiHidden"]), {
          hideButtonHints: ab
        } = (0, Xb.l)(), Tb = (0, Na.h)(), Ub = (0, Na.l)(), [Hb, Mb] = (0, Gb.useState)(Ya.d);
        return (0, fa.f)(ha.s, Mb), !cb || ab || kb || "inGame" !== sb || !Tb && !Hb ? null : (0, zb.jsxs)("div", {
          className: "PadActionHint SmallTextBold",
          children: [Tb && (0, zb.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, zb.jsx)(Qa, {
              glyph: (0, fb.i)("actionButton")
            }), (0, zb.jsx)(Ca, {
              action: Tb
            }), Ub && (0, zb.jsx)("span", {
              className: "PadActionHintMore",
              children: bb("controller:gameplayActionWheelHint")
            })]
          }), Hb && (0, zb.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, zb.jsx)(Qa, {
              glyph: (0, fb.i)("pickBlock")
            }), (0, zb.jsx)("span", {
              children: bb("controller:gameplayPickBlock")
            })]
          })]
        })
      },
      Ba = () => {
        const {
          t: bb
        } = (0, Wb.E)(), cb = (0, nb.y)(), {
          gameState: sb,
          isUiHidden: kb
        } = (0, Ib.p)(["gameState", "isUiHidden"]), [ab, Tb] = (0, Gb.useState)(La.b);
        return (0, fa.f)(ha.q, Tb), cb && !kb && "inGame" === sb && ab ? (0, zb.jsxs)("div", {
          className: "PadDropStackFill SmallTextBold",
          children: [(0, zb.jsx)("span", {
            children: bb("controller:gameplayDropStack")
          }), (0, zb.jsx)(Va, {
            hold: ab
          })]
        }) : null
      },
      ta = () => {
        const {
          t: bb
        } = (0, Wb.E)(), cb = (0, nb.y)(), {
          gameState: sb,
          isUiHidden: kb
        } = (0, Ib.p)(["gameState", "isUiHidden"]), {
          hideButtonHints: ab
        } = (0, Xb.l)(), [Tb, Ub] = (0, Gb.useState)(ua.d);
        return (0, fa.f)(ha.n, Ub), cb && !kb && "inGame" === sb && Tb ? (0, zb.jsxs)("div", {
          className: "PadAttackLatchedHint SmallTextBold",
          children: [!ab && (0, zb.jsx)(Qa, {
            glyph: (0, fb.i)("attack")
          }), (0, zb.jsx)("span", {
            children: bb("controller:gameplayAttackLatched")
          })]
        }) : null
      };
    var ya = sb(8383),
      Pa = sb(1895),
      Da = sb(2337),
      Ea = sb(7807);
    const ia = bb => bb && !(0, ya.d)(Pa.e.get("shopInfo")),
      Oa = () => {
        const bb = "inGame" === (0, Ib.p)(["gameState"]).gameState;
        return (0, Da.c)("shopInfo", (() => {
          (0, Ea.g)(ia(bb))
        })), (0, Gb.useEffect)((() => {
          (0, Ea.g)(ia(bb))
        }), [bb]), null
      },
      Ga = () => {
        const {
          t: bb
        } = (0, Wb.E)(), {
          hideButtonHints: cb
        } = (0, Xb.l)();
        (0, nb.B)();
        const sb = (0, Ps.g)();
        return (0, Gb.useEffect)((() => (() => {
          const bb = Mb.e.register({
              name: "inventory",
              isActive: xs.isActive,
              onFrame: xs.onFrame,
              onDeactivate: xs.onDeactivate,
              wakePressActs: xs.wakePressActs
            }),
            cb = bb => {
              xs.noteRealPointer(bb), xs.shouldBlockRealPointer(bb) && bb.stopPropagation()
            };
          for (const Tb of ps) window.addEventListener(Tb, cb, !0);
          const sb = (0, wc.i)((() => {
              "inventory" !== Mb.e.getActiveConsumerName() && xs.forgetSurface()
            })),
            kb = bb => {
              const cb = bb.target;
              (0, nb.k)() && jb(cb) && cb.closest(ns) && (0, wc.h)() && (0, wc.n)(cb)
            };
          document.addEventListener("focusout", kb, !0);
          const {
            invalidate: Wb,
            onScroll: ab
          } = xs.targets;
          return document.addEventListener("scroll", ab, !0), window.addEventListener("resize", Wb), () => {
            bb(), sb();
            for (const bb of ps) window.removeEventListener(bb, cb, !0);
            document.removeEventListener("scroll", ab, !0), document.removeEventListener("focusout", kb, !0), window.removeEventListener("resize", Wb), xs.targets.disconnect()
          }
        })()), []), (0, zb.jsxs)(zb.Fragment, {
          children: [(0, zb.jsx)(wb, {
            placer: xs.ring,
            className: "InventorySlotCursorRing"
          }), sb.showing && !cb && (0, zb.jsx)("div", {
            className: "InventorySlotCursorHints SmallTextBold",
            children: Ac(sb).map((cb => {
              let {
                actions: kb,
                labelKey: Wb
              } = cb;
              return (0, zb.jsxs)("div", {
                className: "InventorySlotCursorHint",
                children: [kb.map((bb => (0, zb.jsx)(Qa, {
                  glyph: (0, fb.i)(bb)
                }, bb))), (0, zb.jsx)("span", {
                  children: bb(`controller:${Wb}`)
                }), "inventoryDrop" === Wb && sb.dropStackHold && (0, zb.jsx)(Va, {
                  hold: sb.dropStackHold
                })]
              }, Wb)
            }))
          })]
        })
      },
      Ka = [{
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
      Za = bb => Array.from(bb).map((bb => ({
        type: "char",
        char: bb,
        width: 1
      }))),
      za = function(bb) {
        return {
          type: "command",
          command: bb,
          width: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
        }
      },
      qa = [za("page", 2), za("otherPage"), za("caretLeft"), za("space", 3), za("caretRight"), za("close", 1.5), za("submit", 1.5)],
      da = [za("page", 2), za("otherPage"), za("caretLeft"), za("space", 2), za("caretRight"), za("newline"), za("close", 1.5), za("submit", 1.5)],
      Aa = [
        [...Za("1234567890"), za("backspace")], Za("qwertyuiop/"), Za("asdfghjkl'?"), [za("shift", 2), ...Za("zxcvbnm,.")]
      ],
      wa = [
        [...Za("1234567890"), za("backspace")], Za("!@#$%^&*()/"), Za('-_=+[]{};:"'), Za("~`|\\<>'\u20ac\xa3,.")
      ],
      ra = {
        letters: Aa,
        accents: [
          [...Za("1234567890"), za("backspace")], Za("\xe1\xe9\xed\xf3\xfa\xe0\xe8\xec\xf2\xf9\xf1"), Za("\xe2\xea\xee\xf4\xfb\xe4\xeb\xef\xf6\xfc\xe7"), [za("shift", 2), ...Za("\xe3\xf5\xdf\u0153\u011f\u015f\u0131\xbf\xa1")]
        ],
        symbols: wa
      },
      oa = new Set(["de", "es", "fr", "it", "nl", "pt", "pt-BR", "tr", "vi"]),
      Sa = (bb, cb) => "letters" === bb ? cb ? {
        page: "accents",
        otherPage: "symbols"
      } : {
        page: "symbols",
        otherPage: "accents"
      } : {
        page: "letters",
        otherPage: "accents" === bb ? "symbols" : "accents"
      },
      Ra = function(bb, cb) {
        const sb = ((bb, cb) => [...ra[bb], cb ? da : qa])(bb, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
        if (0 === cb) return sb;
        const kb = Math.min(2, va(sb[0]) / cb);
        return [Array.from({
          length: cb
        }, ((bb, cb) => ({
          type: "phrase",
          phraseIndex: cb,
          width: kb
        }))), ...sb]
      },
      va = bb => bb.reduce(((bb, cb) => bb + cb.width), 0),
      Fa = bb => Math.max(...bb.map(va)),
      xa = (bb, cb) => {
        const sb = bb[cb.row];
        let kb = (Fa(bb) - va(sb)) / 2;
        for (let Wb = 0; Wb < cb.col; Wb++) kb += sb[Wb].width;
        return kb + sb[cb.col].width / 2
      },
      ja = (bb, cb, sb) => {
        let kb = 0,
          Wb = 1 / 0;
        for (let ab = 0; ab < bb[cb].length; ab++) {
          const Tb = Math.abs(xa(bb, {
            row: cb,
            col: ab
          }) - sb);
          Tb < Wb - 1e-9 && (kb = ab, Wb = Tb)
        }
        return kb
      },
      pa = (bb, cb) => {
        const sb = Math.max(0, Math.min(bb.length - 1, cb.row));
        return {
          row: sb,
          col: Math.max(0, Math.min(bb[sb].length - 1, cb.col))
        }
      },
      bT = (bb, cb, sb) => "once" === bb && cb - sb <= 400 ? "caps" : "off" === bb ? "once" : "off",
      cT = (bb, cb) => "once" === bb && (bb => bb.toLowerCase() !== bb.toUpperCase())(cb) ? "off" : bb,
      sT = (bb, cb, sb) => {
        if ("symbols" === cb || "off" === sb) return bb;
        const kb = bb.toUpperCase();
        return 1 === kb.length ? kb : bb
      };
    var kT = sb(8277);
    const WT = ["controller:keyboardPhraseGg", "controller:keyboardPhraseHi", "controller:keyboardPhraseThanks", "controller:keyboardPhraseGl", "controller:keyboardPhraseBrb", "controller:keyboardPhraseYes", "controller:keyboardPhraseNo", "controller:keyboardPhraseHelp"];
    const aT = new class {
        constructor() {
          this.lastSendMs = -1 / 0
        }
        claim(bb) {
          return !(bb - this.lastSendMs < 2e3) && (this.lastSendMs = bb, !0)
        }
      },
      TT = {
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
      UT = ["KU", "nameTag"],
      IT = bb => {
        const cb = bb.target instanceof HTMLTextAreaElement && !UT.includes(bb.kind);
        return Ra(bb.page, "chat" === bb.kind ? WT.length : 0, cb)
      },
      HT = bb => {
        const cb = bb.getBoundingClientRect(),
          sb = window.innerHeight,
          kb = cb.top + cb.height / 2 < sb / 2 ? "bottom" : "top",
          Wb = "bottom" === kb ? sb - cb.bottom - 6 : cb.top - 6;
        return {
          placement: kb,
          maxHeightPx: Math.min(.46 * sb, Math.max(.3 * sb, Wb))
        }
      },
      fT = bb => {
        (0, Lk.h)(bb) ? (0, Lk.e)().close(): (SW.noteChosenStop(bb), bb.blur())
      };
    class MT {
      constructor(bb) {
        this.host = bb, this.lastShiftPressMs = -1 / 0, this.phraseTexts = [], this.phrasesFill = !1
      }
      setPhraseRow(bb, cb) {
        this.phraseTexts = bb, this.phrasesFill = cb
      }
      pressKey(bb) {
        const cb = this.host.getState(),
          sb = IT(cb),
          kb = sb[bb.row][bb.col];
        this.host.setState({
          ...cb,
          focus: bb,
          preferredX: xa(sb, bb)
        }), "char" === kb.type ? this.typeChar(kb.char) : "command" === kb.type ? this.runCommand(kb.command) : this.sendPhrase(kb.phraseIndex)
      }
      runCommand(bb) {
        const cb = this.host.getState();
        switch (bb) {
          case "backspace":
            ac(cb.target);
            break;
          case "space":
            Wc(cb.target, " ");
            break;
          case "newline":
            Wc(cb.target, "\n");
            break;
          case "caretLeft":
            Tc(cb.target, -1);
            break;
          case "caretRight":
            Tc(cb.target, 1);
            break;
          case "shift": {
            const bb = performance.now();
            this.host.setState({
              ...cb,
              shift: bT(cb.shift, bb, this.lastShiftPressMs)
            }), this.lastShiftPressMs = bb;
            break
          }
          case "page":
          case "otherPage": {
            const sb = Sa(cb.page, cb.accentsFirst)[bb];
            this.host.setState({
              ...cb,
              page: sb,
              focus: pa(IT({
                ...cb,
                page: sb
              }), cb.focus)
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
            (0, Lk.h)(cb.target) && (0, Lk.e)().selectNextChannel()
        }
      }
      submit() {
        var bb, cb;
        const {
          target: sb
        } = this.host.getState();
        this.host.hide(), (0, Lk.h)(sb) ? (0, Lk.e)().submit() : (SW.noteChosenStop(sb), null === (bb = (cb = (0, Lk.f)(sb)).submit) || void 0 === bb || bb.call(cb), document.activeElement === sb && sb.blur())
      }
      close() {
        const {
          target: bb
        } = this.host.getState();
        this.host.hide(), fT(bb)
      }
      typeChar(bb) {
        const {
          target: cb,
          page: sb,
          shift: kb
        } = this.host.getState();
        Wc(cb, sT(bb, sb, kb)), this.host.setState({
          ...this.host.getState(),
          shift: cT(kb, bb)
        })
      }
      sendPhrase(bb) {
        if (this.phrasesFill) {
          const {
            target: cb
          } = this.host.getState(), sb = this.phraseTexts[bb];
          sb && (cb.setSelectionRange(0, cb.value.length), Wc(cb, sb))
        } else aT.claim(performance.now()) && (this.host.hide(), (0, Lk.e)().sendLine(this.phraseTexts[bb]))
      }
    }
    const XT = {
        initialDelayMs: 380,
        intervalMs: 85
      },
      nT = {
        initialDelayMs: 400,
        intervalMs: 55
      };
    class mT {
      constructor(bb, cb) {
        this.host = bb, this.editor = cb, this.lastDirection = null, this.navRepeat = new mb.e((0, lb.e)(XT)), this.commandRepeats = new Map(Ka.filter((bb => {
          let {
            repeats: cb
          } = bb;
          return cb
        })).map((bb => {
          let {
            command: cb
          } = bb;
          return [cb, (0, lb.e)(nT)]
        })))
      }
      reset() {
        this.navRepeat.reset();
        for (const bb of this.commandRepeats.values()) bb.reset()
      }
      onVisibleFrame(bb) {
        const cb = performance.now();
        for (const {
            command: Wb,
            action: ab
          }
          of Ka) {
          const sb = (0, fb.i)(ab),
            kb = this.commandRepeats.get(Wb);
          if ((kb ? kb.update(bb.isHeld(sb), cb) : bb.wasPressed(sb)) && (this.editor.runCommand(Wb), !this.host.getState().visible)) return
        }
        if (bb.wasPressed((0, fb.i)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
        const sb = this.readNavDirection(bb);
        this.lastDirection = sb;
        const kb = this.navRepeat.update(sb, cb);
        kb && this.navigate(kb)
      }
      onHiddenFrame(bb, cb) {
        var sb;
        if (bb.wasPressed((0, fb.i)("keyboardClose"))) return void fT(cb);
        const kb = (0, fb.i)("keyboardType");
        if (bb.wasPressed(kb)) return Mb.e.consumeButton(kb), void this.host.open(cb);
        const Wb = this.readNavDirection(bb),
          ab = null !== Wb && Wb !== this.lastDirection;
        if (this.lastDirection = Wb, !ab || (0, Lk.h)(cb)) return;
        const Tb = (null === (sb = WW()) || void 0 === sb ? void 0 : sb.root.contains(cb)) || null !== cb.closest(".EntireInventoryWrapper");
        fT(cb), Tb && Mb.e.handOffHeldInput()
      }
      navigate(bb) {
        const cb = this.host.getState();
        if ("Up" === bb && 0 === cb.focus.row && "chat" === cb.kind) return (0, Lk.e)().stepHistory(), void this.host.setState({
          ...cb
        });
        const sb = ((bb, cb, sb, kb) => {
          if ("Left" === sb || "Right" === sb) {
            const kb = bb[cb.row].length,
              Wb = (cb.col + ("Right" === sb ? 1 : -1) + kb) % kb,
              ab = {
                row: cb.row,
                col: Wb
              };
            return {
              pos: ab,
              preferredX: xa(bb, ab)
            }
          }
          const Wb = (cb.row + ("Down" === sb ? 1 : -1) + bb.length) % bb.length;
          return {
            pos: {
              row: Wb,
              col: ja(bb, Wb, kb)
            },
            preferredX: kb
          }
        })(IT(cb), cb.focus, bb, cb.preferredX);
        this.host.setState({
          ...cb,
          focus: sb.pos,
          preferredX: sb.preferredX
        })
      }
      readNavDirection(bb) {
        for (const cb of mb.y)
          if (bb.isHeld(cb)) return cb;
        return (0, mb._)((0, mb.m)(bb.leftStick, (0, Xb.g)().moveDeadzone))
      }
    }
    const lT = ["Up", "Down", "Left", "Right"],
      QT = new Set(["CapsLock", "Control", "Fn", "FnLock", "Hyper", "NumLock", "ScrollLock", "Shift", "Super"]);
    const eT = new class {
      constructor() {
        this.state = TT, this.listeners = new Set, this.ownedField = null, this.pendingChatInput = null, this.pendingChatTimeout = 0, this.savedInputMode = null, this.editor = new MT(this), this.padInput = new mT(this, this.editor)
      }
      getState() {
        return this.state
      }
      setState(bb) {
        const cb = bb.visible !== this.state.visible;
        this.state = bb;
        for (const sb of this.listeners) sb();
        cb && Hb.j.QQ(rb.e, bb.visible)
      }
      subscribe(bb) {
        return this.listeners.add(bb), () => {
          this.listeners.delete(bb)
        }
      }
      install() {
        const bb = Mb.e.register({
            name: "keyboard",
            isActive: () => this.state.visible || jb(document.activeElement),
            onFrame: bb => {
              this.onFrame(bb)
            },
            onDeactivate: () => {
              this.padInput.reset()
            },
            wakePressActs: bb => lT.includes(bb) || !this.state.visible && bb === (0, fb.i)("keyboardType")
          }),
          cb = bb => {
            const cb = bb.target;
            jb(cb) && (cb === this.pendingChatInput || (0, nb.k)() ? this.open(cb) : this.state.visible && cb !== this.state.target && (this.ownedField = null, this.hide()))
          },
          sb = () => {
            setTimeout((() => {
              this.releaseLostField()
            }), 0)
          },
          kb = bb => {
            bb.isTrusted && this.state.visible && (bb => !bb.repeat && !QT.has(bb.key) && !(0, kT.e)(bb.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(bb.key))(bb) && this.hide()
          },
          Wb = () => {
            this.state.visible && this.setState({
              ...this.state,
              ...HT(this.state.target)
            })
          };
        document.addEventListener("focusin", cb, !0), document.addEventListener("focusout", sb, !0), window.addEventListener("keydown", kb, !0), window.addEventListener("resize", Wb);
        const ab = Hb.j.subscribe(ha.e, (() => {
            this.openChat()
          })),
          Tb = Hb.j.subscribe(rb.h, (bb => {
            this.openForField(bb)
          }));
        return () => {
          bb(), document.removeEventListener("focusin", cb, !0), document.removeEventListener("focusout", sb, !0), window.removeEventListener("keydown", kb, !0), window.removeEventListener("resize", Wb), Hb.j.unsubscribe(ab), Hb.j.unsubscribe(Tb), this.clearPendingChat(), this.hide(), this.ownedField = null
        }
      }
      openChat() {
        const bb = (0, Lk.e)();
        bb ? document.activeElement !== bb.input ? (this.clearPendingChat(), this.pendingChatInput = bb.input, this.pendingChatTimeout = window.setTimeout((() => {
          this.pendingChatInput = null
        }), 250), bb.open()) : this.open(bb.input) : console.warn("controllerOpenChat with no chat mounted")
      }
      openForField(bb) {
        jb(bb) ? (document.activeElement !== bb && bb.focus(), document.activeElement === bb && this.open(bb)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", bb)
      }
      open(bb) {
        var cb;
        if (this.clearPendingChat(), this.ownedField = bb, this.state.visible && this.state.target === bb) return;
        this.restoreInputMode(), (bb => {
          pb(bb) && 0 === bb.selectionStart && 0 === bb.selectionEnd && bb.setSelectionRange(bb.value.length, bb.value.length)
        })(bb), this.savedInputMode = bb.getAttribute("inputmode"), bb.setAttribute("inputmode", "none");
        const sb = {
          ...TT,
          visible: !0,
          target: bb,
          kind: (0, Lk.h)(bb) ? "chat" : null !== (cb = (0, Lk.f)(bb).kind) && void 0 !== cb ? cb : null,
          accentsFirst: (kb = Ma.e.get().getCurrentLanguageCode(), oa.has(kb)),
          ...HT(bb)
        };
        var kb;
        const Wb = IT(sb),
          ab = ((bb, cb) => {
            for (let sb = 0; sb < bb.length; sb++) {
              const kb = bb[sb].findIndex((bb => "char" === bb.type && bb.char === cb));
              if (-1 !== kb) return {
                row: sb,
                col: kb
              }
            }
            return null
          })(Wb, "q");
        this.padInput.reset(), this.setState({
          ...sb,
          focus: ab,
          preferredX: xa(Wb, ab)
        })
      }
      hide() {
        this.state.visible && (this.restoreInputMode(), this.padInput.reset(), this.setState(TT))
      }
      onFrame(bb) {
        if (this.releaseLostField()) return;
        const cb = document.activeElement;
        this.state.visible ? this.padInput.onVisibleFrame(bb) : jb(cb) && this.padInput.onHiddenFrame(bb, cb)
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
    var CT = sb(8394);
    const NT = new Map(Ka.map((bb => {
        let {
          command: cb,
          action: sb
        } = bb;
        return [cb, sb]
      }))),
      VT = {
        letters: "ABC",
        accents: "\xe0\xe9",
        symbols: "&123"
      },
      LT = {
        chat: "controller:keyboardTargetChat",
        sign: "controller:keyboardTargetSign",
        nameTag: "controller:keyboardTargetNameTag",
        book: "controller:keyboardTargetBook",
        KU: "controller:keyboardTargetBookTitle"
      },
      uT = bb => {
        const cb = (() => {
          const [, bb] = (0, Gb.useReducer)((bb => bb + 1), 0);
          return bb
        })();
        (0, Gb.useEffect)((() => {
          if (!bb) return;
          const sb = ["input", "select", "selectionchange", "keyup", "pointerup"];
          for (const Wb of sb) bb.addEventListener(Wb, cb);
          document.addEventListener("selectionchange", cb);
          const kb = new MutationObserver(cb);
          return kb.observe(bb, {
            attributeFilter: ["placeholder"]
          }), () => {
            kb.disconnect();
            for (const kb of sb) bb.removeEventListener(kb, cb);
            document.removeEventListener("selectionchange", cb)
          }
        }), [bb, cb])
      },
      YT = bb => {
        bb.preventDefault()
      },
      hT = bb => {
        "mouse" !== bb.pointerType && bb.preventDefault()
      },
      JT = () => {
        var bb;
        const {
          t: cb
        } = (0, Wb.E)(), sb = (() => {
          const [bb, cb] = (0, Gb.useState)(eT.getState());
          return (0, Gb.useEffect)((() => eT.subscribe((() => {
            cb(eT.getState())
          }))), []), bb
        })(), kb = (0, nb.y)(), ab = (0, Gb.useRef)(null);
        (0, Xb.l)(), (0, nb.B)(), (0, Gb.useEffect)((() => {
          const bb = eT.install(),
            cb = null;
          return () => {
            bb(), null === cb || void 0 === cb || cb()
          }
        }), []);
        const Tb = (0, Gb.useMemo)((() => WT.map((bb => cb(bb)))), [cb]),
          Ub = sb.visible && "chat" === sb.kind ? sb.target : null;
        uT(Ub);
        const Ib = null !== (bb = null === Ub || void 0 === Ub ? void 0 : Ub.value) && void 0 !== bb ? bb : "",
          Hb = ((bb, cb, sb) => {
            if (!bb.startsWith("/")) return [];
            const kb = [];
            for (let Wb = cb.length - 1; Wb >= 0 && kb.length < sb; Wb--) {
              const sb = cb[Wb].trim();
              sb.startsWith(bb) && sb !== bb && !kb.includes(sb) && kb.push(sb)
            }
            return kb
          })(Ib, Ib.startsWith("/") ? (0, CT.e)() : [], WT.length),
          Mb = Ib.startsWith("/"),
          mb = Mb ? WT.map(((bb, cb) => {
            var sb;
            return null !== (sb = Hb[cb]) && void 0 !== sb ? sb : ""
          })) : Tb;
        if ((0, Gb.useEffect)((() => {
            eT.editor.setPhraseRow(mb, Mb)
          })), (0, Gb.useEffect)((() => {
            const bb = ab.current;
            if (bb) return bb.addEventListener("touchstart", YT, {
              passive: !1
            }), () => {
              bb.removeEventListener("touchstart", YT)
            }
          }), [sb.visible]), !sb.visible) return null;
        const lb = IT(sb),
          Qb = Fa(lb),
          eb = bb => "char" === bb.type ? sT(bb.char, sb.page, sb.shift) : "phrase" === bb.type ? mb[bb.phraseIndex] : (bb => {
            switch (bb) {
              case "backspace":
                return "\u232b";
              case "shift":
                return "caps" === sb.shift ? "\u21ea" : "\u21e7";
              case "page":
              case "otherPage":
                return VT[Sa(sb.page, sb.accentsFirst)[bb]];
              case "space":
                return cb("controller:keyboardSpace");
              case "caretLeft":
                return "\u2190";
              case "caretRight":
                return "\u2192";
              case "newline":
                return "\u21b5";
              case "submit":
                return cb("chat" === sb.kind ? "controller:keyboardSend" : "controller:keyboardDone");
              case "close":
                return "\u2715";
              case "channel":
                return "\u21c4"
            }
          })(bb.command),
          Cb = bb => {
            eT.editor.pressKey(bb)
          };
        return (0, zb.jsxs)("div", {
          ref: ab,
          className: Zb()(Lk.l, "top" === sb.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
            PadKeyboardMultiline: sb.target instanceof HTMLTextAreaElement
          }),
          style: {
            "--pad-keyboard-rows": lb.length,
            "--pad-keyboard-height": `${sb.maxHeightPx}px`
          },
          onPointerDown: hT,
          onMouseDown: YT,
          children: [(0, zb.jsx)(gT, {
            target: sb.target,
            label: sb.kind ? cb(LT[sb.kind]) : sb.target.placeholder || cb("controller:keyboardTargetText")
          }), (0, zb.jsx)("div", {
            className: "PadKeyboardRows",
            children: lb.map(((bb, cb) => (0, zb.jsx)("div", {
              className: Zb()("PadKeyboardRow", {
                PadKeyboardPhraseRow: "phrase" === bb[0].type
              }),
              children: bb.map(((bb, Wb) => {
                const ab = kb && sb.focus.row === cb && sb.focus.col === Wb,
                  Tb = "command" === bb.type ? NT.get(bb.command) : void 0;
                return (0, zb.jsx)("div", {
                  className: "PadKeyboardKeySlot",
                  style: {
                    width: bb.width / Qb * 100 + "%"
                  },
                  children: (0, zb.jsxs)("div", {
                    className: Zb()("PadKeyboardKey", {
                      PadKeyboardKeyFocused: ab,
                      PadKeyboardKeyCommand: "command" === bb.type,
                      PadKeyboardKeyPhrase: "phrase" === bb.type,
                      PadKeyboardKeyActive: "command" === bb.type && "shift" === bb.command && "off" !== sb.shift,
                      PadKeyboardKeySubmit: "command" === bb.type && "submit" === bb.command
                    }),
                    role: "button",
                    onClick: () => {
                      Cb({
                        row: cb,
                        col: Wb
                      })
                    },
                    onTouchEnd: bb => {
                      var sb, kb;
                      bb.preventDefault(), sb = bb.changedTouches[0], kb = bb.currentTarget.getBoundingClientRect(), sb && sb.clientX >= kb.left && sb.clientX <= kb.right && sb.clientY >= kb.top && sb.clientY <= kb.bottom && Cb({
                        row: cb,
                        col: Wb
                      })
                    },
                    children: [(0, zb.jsx)("span", {
                      className: "PadKeyboardKeyLabel",
                      children: eb(bb)
                    }), kb && Tb && (0, zb.jsx)(Qa, {
                      className: "PadKeyboardKeyGlyph",
                      glyph: (0, fb.i)(Tb)
                    })]
                  })
                }, Wb)
              }))
            }, cb)))
          })]
        })
      },
      gT = bb => {
        let {
          target: cb,
          label: sb
        } = bb;
        uT(cb);
        const kb = (0, Gb.useRef)(null),
          Wb = (0, Gb.useRef)(null),
          ab = cb instanceof HTMLTextAreaElement;
        (0, Gb.useLayoutEffect)((() => {
          const bb = kb.current,
            cb = Wb.current;
          ab ? bb.scrollTop = cb.offsetTop - bb.clientHeight / 2 : bb.scrollLeft = cb.offsetLeft - bb.clientWidth / 2
        }));
        const {
          value: Tb,
          start: Ub,
          end: Ib
        } = bc(cb), Hb = "password" === cb.type ? "\u2022".repeat(Tb.length) : Tb;
        return (0, zb.jsxs)("div", {
          className: "PadKeyboardPreview",
          children: [(0, zb.jsx)("div", {
            className: "PadKeyboardPreviewLabel SmallTextBold",
            children: sb
          }), (0, zb.jsxs)("div", {
            ref: kb,
            className: Zb()("PadKeyboardPreviewText", {
              PadKeyboardPreviewMultiline: ab
            }),
            children: [(0, zb.jsx)("span", {
              children: Hb.slice(0, Ub)
            }), (0, zb.jsx)("span", {
              ref: Wb,
              className: "PadKeyboardCaret"
            }), Ub !== Ib && (0, zb.jsx)("span", {
              className: "PadKeyboardPreviewSelection",
              children: Hb.slice(Ub, Ib)
            }), (0, zb.jsx)("span", {
              children: Hb.slice(Ib)
            }), 0 === Hb.length && cb.placeholder && cb.placeholder !== sb && (0, zb.jsx)("span", {
              className: "PadKeyboardPreviewPlaceholder",
              children: cb.placeholder
            })]
          })]
        })
      };
    var BT = sb(1371),
      tT = sb(3194);
    const yT = function() {
        for (var bb = arguments.length, cb = new Array(bb), sb = 0; sb < bb; sb++) cb[sb] = arguments[sb];
        return cb.map(fb.i)
      },
      PT = (bb, cb) => {
        const sb = Kk(bb);
        return sb ? [{
          glyphs: [sb],
          labelKey: cb
        }] : []
      },
      DT = [".BottomMiddleElements", ".BottomLeftElements > *", ".BottomRightElements > *", ".MiddleTextBottom .MiddleText"],
      ET = "--pad-hint-bar-clearance",
      iT = "[data-pad-hint-bar-avoid]",
      OT = bb => {
        const cb = [];
        for (const sb of bb) Hc(sb) && cb.push(sb.getBoundingClientRect());
        return cb
      },
      GT = bb => {
        if (!bb) return null;
        const cb = WW(),
          sb = cb ? OT(((bb, cb) => {
            const sb = bb.closest(iT);
            return sb ? [sb] : ("popup" === cb ? document : bb).querySelectorAll(iT)
          })(cb.root, cb.layer.kind)) : [],
          kb = !cb || cb.root.hasAttribute("data-pad-shows-hud");
        if (((0, tT.f)(null === cb || void 0 === cb ? void 0 : cb.layer.kind, (0, tT.h)()) || kb) && sb.push(...OT(document.querySelectorAll(DT.join(",")))), 0 === sb.length) return null;
        const {
          width: Wb,
          height: ab
        } = bb.getBoundingClientRect(), Tb = window.innerHeight - 8, Ub = (0, tT.o)(Tb, {
          width: Wb,
          height: ab
        }, window.innerWidth / 2, sb, 8);
        return Ub === Tb ? null : Math.round(window.innerHeight - Ub)
      },
      KT = bb => {
        const cb = document.documentElement.style,
          sb = bb ? `${Math.round(window.innerHeight-bb.getBoundingClientRect().top)}px` : "";
        cb.getPropertyValue(ET) !== sb && (sb ? cb.setProperty(ET, sb) : cb.removeProperty(ET))
      },
      ZT = () => {
        const {
          t: bb
        } = (0, Wb.E)(), {
          hideButtonHints: cb
        } = (0, Xb.l)(), sb = (0, nb.y)(), [kb, ab] = (0, Gb.useState)(!1), [Tb, Hb] = (0, Gb.useState)([]), [lb, Qb] = (0, Gb.useState)(null), eb = (0, Gb.useRef)(null), Cb = (0, Gb.useRef)(null);
        (0, fa.f)(rb.e, (bb => {
          ab(bb)
        })), (0, fa.f)(tT.k, (() => {
          var bb;
          null === (bb = Cb.current) || void 0 === bb || bb.call(Cb)
        }));
        const Nb = sb && !cb && !kb;
        return (0, Gb.useEffect)((() => {
          if (!Nb) return;
          let bb = null;
          const cb = () => {
            const cb = (() => {
                var bb;
                const cb = Mb.e.getActiveConsumerName(),
                  sb = (0, tT.e)();
                if (sb) {
                  const bb = (0, fb.i)(sb),
                    cb = "emoteWheel" === sb && "wheel" === (0, Xb.g)().emoteButton || !(0, mb.G)(Mb.e.getLastFrame().values, bb) ? {
                      glyphs: yT("menuConfirm"),
                      labelKey: "controller:menusSelect"
                    } : {
                      glyphs: [bb],
                      labelKey: "controller:wheelReleaseToPick"
                    };
                  return [{
                    glyphs: [(0, fb.w)(bb)],
                    labelKey: "controller:wheelChoose"
                  }, cb, {
                    glyphs: yT("menuBack"),
                    labelKey: "controller:wheelClose"
                  }]
                }
                const kb = WW();
                if (!kb || "focus" !== cb && "cursor" !== cb) return (0, tT.c)(fb.i);
                const Wb = [],
                  ab = {
                    glyphs: yT("menuBack"),
                    labelKey: "controller:menusBack"
                  },
                  Tb = Gc(kb.root),
                  Ub = Tb ? !fc(Tb) : Boolean(kb.layer.close),
                  Hb = !Tb && kb.layer.closeLabelKey ? kb.layer.closeLabelKey : ab.labelKey,
                  nb = Ub ? [{
                    ...ab,
                    labelKey: Hb
                  }] : [],
                  lb = hk(kb.layer.kind) ? [{
                    glyphs: yT("chat"),
                    labelKey: "controller:menusQuickChat"
                  }] : [];
                if ("cursor" === cb) return Wb.push({
                  glyphs: yT("menuConfirm"),
                  labelKey: "controller:menusClick"
                }), Wb.push({
                  glyphs: yT("menuSecondary"),
                  labelKey: "controller:menusRightClick"
                }), Wb.push(...nb), Wb.push(...lb), Wb.push({
                  glyphs: ["RightStick"],
                  labelKey: "controller:menusScroll"
                }), NW() && Wb.push({
                  glyphs: yT("menuToggleCursor"),
                  labelKey: "controller:menusFocusMode"
                }), Wb;
                const Qb = SW.getFocused();
                Qb && (0, hW.b)(Qb) ? Wb.push({
                  glyphs: ["Left", "Right"],
                  labelKey: "controller:menusAdjust"
                }) : Qb && ic(Qb) ? Wb.push({
                  glyphs: [],
                  labelKey: "controller:menusUseMouse"
                }) : Wb.push({
                  glyphs: yT("menuConfirm"),
                  labelKey: "controller:menusSelect"
                });
                const eb = Qb ? null === (bb = Tk(Qb)) || void 0 === bb ? void 0 : bb.dataset.padSecondary : void 0;
                eb && Wb.push({
                  glyphs: yT("menuSecondary"),
                  labelKey: eb
                }), Wb.push(...null !== Qb && void 0 !== Qb && Qb.closest("[data-pad-friends-column]") ? [ab] : nb), Wb.push(...lb);
                const Cb = "home" === kb.layer.kind;
                qk(kb.root) || !tk(kb.root) && !dk(kb) ? Cb && Wb.push({
                  glyphs: yT("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusRows"
                }) : Wb.push({
                  glyphs: yT("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusTabs"
                }), Cb && (Wb.push(...PT("inventory", "controller:menusFriends")), eb || Wb.push({
                  glyphs: yT("menuSecondary"),
                  labelKey: "controller:menusSearch"
                }), Wb.push(...PT("pause", "controller:menusSettings")), Wb.push(...PT("leaderboard", "controller:menusNotifications")));
                const Nb = Ib.d.get("openEverythingMenuName");
                return "inGame" === Ib.d.get("gameState") && "popup" !== kb.layer.kind && null !== Nb && ((0, sk.k)(Nb) ? Wb.push(...PT("leaderboard", "controller:menusClose")) : Nb !== ck.r.LOBBY_LEADERBOARD && Wb.push(...PT("leaderboard", "controller:menusLobby"))), Wb.push({
                  glyphs: yT("menuToggleCursor"),
                  labelKey: "controller:menusCursorMode"
                }), Wb
              })(),
              sb = GT(eb.current),
              kb = ((bb, cb) => `${bb.map((bb=>`${bb.glyphs.join("+")}:${bb.labelKey}`)).join("|")}@${cb}`)(cb, sb);
            kb !== bb && (bb = kb, (0, Ub.unstable_batchedUpdates)((() => {
              Hb(cb), Qb(sb)
            }))), KT(eb.current)
          };
          cb(), Cb.current = cb;
          const sb = requestAnimationFrame(cb),
            kb = setInterval(cb, 150);
          return () => {
            Cb.current = null, cancelAnimationFrame(sb), clearInterval(kb), KT(null)
          }
        }), [Nb]), (0, Gb.useLayoutEffect)((() => {
          if (!Nb) return;
          if (0 === Tb.length) return void KT(null);
          const bb = GT(eb.current);
          bb === lb ? KT(eb.current) : Qb(bb)
        }), [Nb, Tb, lb]), Nb && 0 !== Tb.length ? (0, zb.jsx)("div", {
          ref: eb,
          className: "PadButtonHintBar SmallTextBold",
          style: null === lb ? void 0 : {
            bottom: lb
          },
          "aria-hidden": !0,
          children: Tb.map((cb => (0, zb.jsxs)("div", {
            className: "PadButtonHint",
            children: [cb.glyphs.map((bb => (0, zb.jsx)(Qa, {
              glyph: bb,
              className: "PadButtonHintGlyph"
            }, bb))), (0, zb.jsx)("span", {
              children: bb(cb.labelKey)
            })]
          }, cb.labelKey)))
        }) : null
      },
      zT = [Uc, "label", "[data-pad-slider]"].join(","),
      qT = "data-pad-cursor-probe",
      dT = bb => {
        var cb;
        const sb = (bb => {
          const cb = [];
          for (let kb = bb; kb && kb !== document.body && kb !== document.documentElement && (cb.push(kb), !(cb.length > 8)); kb = kb.parentElement);
          const sb = document.documentElement.classList.contains(nb.p) ? cb[cb.length - 1] : void 0;
          null === sb || void 0 === sb || sb.setAttribute(qT, "");
          try {
            return cb.map((bb => ({
              element: bb,
              cursor: getComputedStyle(bb).cursor
            })))
          } finally {
            null === sb || void 0 === sb || sb.removeAttribute(qT)
          }
        })(bb);
        if ("pointer" !== (null === (cb = sb[0]) || void 0 === cb ? void 0 : cb.cursor)) return null;
        let kb = 0;
        for (; kb + 1 < sb.length && "pointer" === sb[kb + 1].cursor;) kb++;
        return sb[kb].element
      },
      AT = (bb, cb, sb, kb) => {
        const Wb = kb.root.contains(bb) ? kb.root : null;
        for (let ab = bb; ab && ab !== document.body && ab !== document.documentElement; ab = ab.parentElement) {
          if (ab instanceof HTMLElement && gb(ab, cb) && Db(ab, cb, sb)) return ab;
          if (ab === Wb) break
        }
        return "home" === kb.layer.kind || "gamePage" === kb.layer.kind ? ((bb, cb) => {
          const sb = document.scrollingElement;
          return sb instanceof HTMLElement && ![document.documentElement, document.body].some((cb => {
            const sb = getComputedStyle(cb),
              kb = "y" === bb ? sb.overflowY : sb.overflowX;
            return "hidden" === kb || "clip" === kb
          })) && Db(sb, bb, cb) ? sb : null
        })(cb, sb) : null
      };
    const wT = new class {
        constructor() {
          this.state = {
            x: 0,
            y: 0,
            speedRamp: 0
          }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this.confirmRepeat = (0, lb.e)(mb.v), this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.layerRoot = null, this.layerOrder = 0, this.layerPoints = new WeakMap, this.page = null, this.pendingPageStart = null
        }
        install() {
          const bb = Mb.e.register({
              name: "cursor",
              isActive: () => "cursor" === VW(),
              onFrame: bb => {
                this.onFrame(bb)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: bb => (0, Mb.h)(bb) || bb === (0, fb.i)("menuConfirm") && Oc((0, nb.c)())
            }),
            cb = (0, Fk.k)((bb => {
              const cb = bb.getRoot();
              cb && this.layerPoints.delete(cb), cb === this.layerRoot && (this.layerRoot = null)
            })),
            sb = Hb.j.subscribe("appManagerUpdated|activeInputDevice", (bb => {
              "gamepad" !== bb && this.active && !this.hidden && this.hide()
            }));
          return () => {
            bb(), cb(), Hb.j.unsubscribe(sb), this.deactivate()
          }
        }
        getHighlighted() {
          return this.isVisible() ? this.interactive : null
        }
        isVisible() {
          return this.active && !this.hidden && (0, nb.k)()
        }
        getPoint() {
          return {
            x: this.state.x,
            y: this.state.y
          }
        }
        hide() {
          this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.QQ()
        }
        activate(bb) {
          this.active = !0, this.hidden = !1;
          const cb = QW();
          !cb || cb.root && cb.root !== bb.root ? this.jumpTo(this.hasPosition ? this.getPoint() : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          }) : (this.setLayer(bb), this.jumpTo(cb.point))
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
          }, this.QQ())
        }
        onFrame(bb) {
          const cb = WW();
          if (!cb) return;
          if (this.active || this.activate(cb), this.followPage(cb)) return;
          this.followLayer(cb);
          const sb = bb.wokeDevice ? (0, nb.c)() : null;
          if (sb && this.jumpTo(sb), !(0, nb.k)()) return void this.hide();
          const kb = (0, fb.i)("menuToggleCursor");
          if (bb.wasPressed(kb)) return Mb.e.consumeButton(kb), void lW(this.getHandoff(null));
          if (this.handBackToFocus(bb)) return;
          const Wb = (0, fb.i)("menuConfirm"),
            ab = (0, fb.i)("menuSecondary");
          if (bb.wasPressed((0, fb.i)("menuBack"))) return Dc(cb.root) || Kc(cb.root) || aW(), void this.QQ();
          if (rk(null, bb, cb)) return bb.wasReleased(Wb) && this.press && (this.updateHit(!1), this.updateConfirm(bb, Wb)), void this.QQ();
          if (document.pointerLockElement) return void this.hide();
          const Tb = LW() ? {
              x: 0,
              y: 0
            } : (bb => {
              const cb = (bb, cb) => (bb ? 1 : 0) - (cb ? 1 : 0);
              return {
                x: cb(bb.isHeld("Right"), bb.isHeld("Left")),
                y: cb(bb.isHeld("Down"), bb.isHeld("Up"))
              }
            })(bb),
            Ub = (0, Xb.g)().moveDeadzone,
            Ib = ((bb, cb) => {
              const sb = (0, mb.m)(bb, Vb(cb));
              return Math.hypot(sb.x, sb.y)
            })(bb.leftStick, Ub) > 0 || 0 !== Tb.x || 0 !== Tb.y;
          if (this.hidden) {
            const cb = bb.wasPressed(Wb),
              sb = bb.wasPressed(ab);
            if (!Ib && !Yb(bb.rightStick) && !cb && !sb && !bb.wokeDevice) return void this.QQ();
            if (this.hidden = !1, this.updateHit(!1), cb || sb) return cb && (this.press = {
              kind: "ignored"
            }, bb.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.QQ()
          }
          this.movePendingPageStart(Ib);
          const Hb = this.getPoint();
          this.state = ub(this.state, {
            stick: bb.leftStick,
            moveDeadzone: Ub,
            dpad: Tb,
            dtMs: bb.dtMs,
            cursorSpeedPercent: (0, Xb.g)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: this.getAssistContext()
          });
          const lb = this.state.x !== Hb.x || this.state.y !== Hb.y,
            Qb = [Wb, ab].some((cb => bb.wasPressed(cb) || bb.wasReleased(cb)));
          (lb || Qb || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(lb), this.updateConfirm(bb, Wb), this.updateSecondary(bb, ab), this.updateScroll(bb, cb), this.QQ()
        }
        followPage(bb) {
          const cb = "home" === bb.layer.kind || "gamePage" === bb.layer.kind,
            sb = this.page;
          if (this.page = cb ? {
              key: (0, Fk.m)(bb.layer),
              root: bb.root
            } : null, !this.page || !sb || sb.root !== bb.root || sb.key === this.page.key) return !1;
          if (this.cancelPress(), this.secondaryArmed = !1, this.setLayer(bb), "hybrid" === mW()) return MW = null, HW = null, XW.lock(), !0;
          const {
            key: kb
          } = this.page;
          return this.pendingPageStart = {
            root: bb.root,
            key: kb,
            returning: SW.notePageEnteredByCursor(kb),
            enteredAtMs: performance.now()
          }, !1
        }
        movePendingPageStart(bb) {
          const cb = this.pendingPageStart;
          if (!cb) return;
          if (bb || cb.root !== this.layerRoot) return void(this.pendingPageStart = null);
          const sb = cb.returning ? SW.recallStop(cb.root, cb.key) : null;
          if (!sb && cb.returning && performance.now() - cb.enteredAtMs < 1e3) return;
          const kb = null !== sb && void 0 !== sb ? sb : SW.pickInitial(cb.root, {
            includeDisabled: !0,
            waitForContent: !0,
            enteredAtMs: cb.enteredAtMs
          });
          kb && (this.pendingPageStart = null, this.jumpTo(Vc(kb)))
        }
        setLayer(bb) {
          this.layerRoot = bb.root, this.layerOrder = bb.order
        }
        followLayer(bb) {
          var cb;
          if (bb.root === this.layerRoot) return;
          null !== (cb = this.layerRoot) && void 0 !== cb && cb.isConnected && this.layerPoints.set(this.layerRoot, this.getPoint()), this.cancelPress(), this.draggedSlider = null, this.secondaryArmed = !1;
          const sb = this.layerPoints.get(bb.root),
            kb = sb && bb.order <= this.layerOrder ? sb : SW.getLayerStartPoint(bb.root);
          this.setLayer(bb), this.jumpTo(kb)
        }
        getHandoff(bb) {
          var cb;
          return {
            point: this.getPoint(),
            element: null !== (cb = this.interactive) && void 0 !== cb ? cb : this.findDraggedSliderNearby(),
            direction: bb
          }
        }
        findDraggedSliderNearby() {
          const bb = this.draggedSlider;
          if (null === bb || void 0 === bb || !bb.isConnected) return null;
          const cb = bb.getBoundingClientRect(),
            {
              y: sb
            } = this.getPoint();
          return sb >= cb.top - 40 && sb <= cb.bottom + 40 ? bb : null
        }
        handBackToFocus(bb) {
          if (!LW()) return !1;
          const cb = mb.y.find((cb => bb.wasPressed(cb)));
          return !!cb && (sb = this.getHandoff(cb), MW = UW(sb), HW = null, XW.lock(), Mb.e.handOffHeldInput(), !0);
          var sb
        }
        getAssistContext() {
          const bb = this.interactive;
          if (null === bb || void 0 === bb || !bb.isConnected) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const cb = bb.getBoundingClientRect();
          if (cb.width > .4 * window.innerWidth || cb.height > .4 * window.innerHeight) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const sb = (0, Xb.g)().cursorMagnetism && !(0, ob.d)(bb) && !bb.closest("[data-pad-slider]"),
            kb = this.magnet && this.magnet !== bb && this.magnet.isConnected ? this.magnet.getBoundingClientRect() : cb;
          return {
            overInteractive: !0,
            magnetTarget: sb ? {
              x: kb.left + kb.width / 2,
              y: kb.top + kb.height / 2
            } : null
          }
        }
        updateHit(bb) {
          this.lastHitTestMs = performance.now();
          const cb = this.getPoint(),
            sb = document.elementFromPoint(cb.x, cb.y),
            kb = sb && !(0, eb.n)(sb) && (bb => {
              var cb;
              const sb = WW();
              return !(sb && !sb.root.contains(bb) && !bb.closest(".tooltip-container")) || !(null !== (cb = document.getElementById("root")) && void 0 !== cb && cb.contains(bb))
            })(sb) ? sb : null;
          if (kb !== this.hit) return gc(this.hit, kb, cb), this.hit = kb, void this.setInteractive(kb ? (bb => {
            const cb = bb.closest(zT);
            if (cb) {
              var sb, kb;
              const bb = null !== (sb = null === (kb = cb.parentElement) || void 0 === kb ? void 0 : kb.closest("[data-pad-focusable]")) && void 0 !== sb ? sb : cb;
              return fc(bb) ? {
                element: null,
                magnet: null
              } : {
                element: bb,
                magnet: cb
              }
            }
            const Wb = dT(bb);
            return {
              element: Wb,
              magnet: Wb
            }
          })(kb) : {
            element: null,
            magnet: null
          });
          bb && kb && gc(kb, kb, cb)
        }
        setInteractive(bb) {
          let {
            element: cb,
            magnet: sb
          } = bb;
          this.interactive = cb, this.magnet = sb
        }
        clearHover() {
          this.hit && gc(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
            element: null,
            magnet: null
          })
        }
        beginPress() {
          const bb = this.hit;
          if (!bb || ic(bb)) return {
            kind: "ignored"
          };
          const cb = (0, hW.b)(bb),
            sb = bb.closest("[data-pad-slider]");
          return cb && sb ? {
            kind: "slider",
            slider: sb,
            adjuster: cb
          } : (Yc(bb, this.getPoint()), {
            kind: "pointer",
            target: bb
          })
        }
        applySliderFraction(bb) {
          var cb;
          const sb = bb.slider.getBoundingClientRect(),
            kb = sb.height > sb.width,
            Wb = null === (cb = bb.slider.querySelector("[data-pad-slider-handle]")) || void 0 === cb ? void 0 : cb.getBoundingClientRect(),
            ab = Wb ? kb ? Wb.height : Wb.width : 0,
            Tb = (kb ? sb.height : sb.width) - ab;
          if (Tb <= 0) return;
          const Ub = kb ? sb.bottom - ab / 2 - this.state.y : this.state.x - sb.left - ab / 2;
          bb.adjuster.setFraction(Math.max(0, Math.min(1, Ub / Tb)))
        }
        updateConfirm(bb, cb) {
          bb.wasPressed(cb) && (this.press = bb.wokeDevice ? {
            kind: "ignored"
          } : this.beginPress(), this.draggedSlider = "slider" === this.press.kind ? this.press.slider : null, this.beginRepeat());
          const sb = this.press;
          if (!sb) return;
          if (bb.isHeld(cb)) return "slider" === sb.kind && this.applySliderFraction(sb), void this.updateRepeat();
          this.press = null;
          const kb = this.repeated;
          if (this.endRepeat(), !bb.wasReleased(cb)) return void this.endPressWithoutClick(sb);
          const Wb = this.getPoint(),
            ab = this.hit;
          if ("slider" === sb.kind && sb.adjuster.endDrag(), "pointer" === sb.kind) {
            const bb = null !== ab && void 0 !== ab ? ab : sb.target.isConnected ? sb.target : null;
            bb && hc(bb, Wb);
            const cb = ab && sb.target.isConnected && !kb ? ((bb, cb) => {
              for (let sb = bb; sb; sb = sb.parentElement)
                if (sb.contains(cb)) return sb;
              return null
            })(sb.target, ab) : null;
            cb && (SW.noteCursorActivation(cb), (0, eb.i)(cb, new MouseEvent("click", Lc(Wb, 0, 0))), Ec(cb), Nc(cb) && Bc(cb))
          }
        }
        beginRepeat() {
          var bb, cb, sb;
          const kb = null !== (bb = null === (cb = this.hit) || void 0 === cb ? void 0 : cb.closest("[data-pad-repeat]")) && void 0 !== bb ? bb : null;
          this.repeatStop = kb, this.repeatKey = null !== (sb = null === kb || void 0 === kb ? void 0 : kb.getAttribute("data-pad-repeat")) && void 0 !== sb ? sb : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
        }
        updateRepeat() {
          const bb = this.repeatStop;
          if (!bb) return;
          const cb = this.hit;
          bb.isConnected && !fc(bb) && bb.getAttribute("data-pad-repeat") === this.repeatKey && cb && bb.contains(cb) ? bb.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, SW.noteCursorActivation(bb), (0, eb.i)(bb, new MouseEvent("click", Lc(this.getPoint(), 0, 0)))) : this.repeatStop = null
        }
        endRepeat() {
          this.repeatStop = null, this.repeated = !1
        }
        endPressWithoutClick(bb) {
          "slider" === bb.kind && bb.adjuster.endDrag(), "pointer" === bb.kind && bb.target.isConnected && hc(bb.target, this.getPoint())
        }
        cancelPress() {
          this.endRepeat(), this.press && (this.endPressWithoutClick(this.press), this.press = null)
        }
        updateSecondary(bb, cb) {
          bb.wasPressed(cb) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !bb.isHeld(cb) && (this.secondaryArmed = !1, bb.wasReleased(cb) && this.hit && Jc(this.hit, this.getPoint(), 2))
        }
        updateScroll(bb, cb) {
          const sb = hb(bb.rightStick, bb.dtMs);
          if (0 === sb.x && 0 === sb.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          this.scrollRemainder = {
            x: this.scrollRemainder.x + sb.x,
            y: this.scrollRemainder.y + sb.y
          };
          const kb = Math.trunc(this.scrollRemainder.x),
            Wb = Math.trunc(this.scrollRemainder.y);
          this.scrollRemainder = {
            x: this.scrollRemainder.x - kb,
            y: this.scrollRemainder.y - Wb
          };
          const ab = this.hit;
          if (!ab) return;
          let Tb = !1;
          if (0 !== Wb) {
            const bb = AT(ab, "y", Wb > 0 ? 1 : -1, cb);
            bb && (bb.scrollBy({
              top: Wb,
              behavior: "instant"
            }), Tb = !0)
          }
          if (0 !== kb) {
            const bb = AT(ab, "x", kb > 0 ? 1 : -1, cb);
            bb && (bb.scrollBy({
              left: kb,
              behavior: "instant"
            }), Tb = !0)
          }
          Tb && (this.lastHitTestMs = -1 / 0)
        }
        QQ() {
          qc.set({
            x: this.state.x,
            y: this.state.y,
            visible: this.isVisible(),
            pressed: null !== this.press && "ignored" !== this.press.kind
          })
        }
      },
      rT = () => {
        const bb = (0, Gb.useMemo)((() => new Ab), []),
          cb = (0, nb.y)();
        return (0, Gb.useEffect)((() => {
          if (!cb) return;
          let sb = 0,
            kb = {
              of: null,
              atMs: 0,
              list: []
            };
          const Wb = document.getElementsByClassName(uW),
            ab = bb => {
              for (const cb of [...Wb]) cb !== bb && cb.classList.remove(uW)
            },
            Tb = () => {
              var cb;
              sb = requestAnimationFrame(Tb);
              const Wb = (() => {
                const bb = SW.getFocused();
                if (SW.isActive() && null !== bb && void 0 !== bb && bb.isConnected) return bb;
                const cb = wT.getHighlighted();
                return null !== cb && void 0 !== cb && cb.isConnected ? cb : null
              })();
              ab(Wb), Wb && !Wb.classList.contains(uW) && Wb.classList.add(uW);
              const Ub = null !== (cb = null === Wb || void 0 === Wb ? void 0 : Wb.closest("[data-pad-reticle-box]")) && void 0 !== cb ? cb : Wb;
              bb.show(Ub ? ((bb, cb) => {
                let sb = bb.left,
                  kb = bb.top,
                  Wb = bb.right,
                  ab = bb.bottom;
                for (const Tb of cb) {
                  if (!Tb) continue;
                  const bb = ib(Tb);
                  sb = Math.max(sb, bb.left), kb = Math.max(kb, bb.top), Wb = Math.min(Wb, bb.right), ab = Math.min(ab, bb.bottom)
                }
                return Wb <= sb || ab <= kb ? null : {
                  left: sb,
                  top: kb,
                  width: Wb - sb,
                  height: ab - kb
                }
              })(Ub.getBoundingClientRect(), (bb => {
                const cb = performance.now();
                return (kb.of !== bb || cb - kb.atMs > 500) && (kb = {
                  of: bb,
                  atMs: cb,
                  list: [Bb(bb, "y"), Bb(bb, "x")]
                }), kb.list
              })(Ub)) : null)
            };
          return sb = requestAnimationFrame(Tb), () => {
            cancelAnimationFrame(sb), ab(null), bb.hide()
          }
        }), [cb, bb]), (0, zb.jsx)(wb, {
          placer: bb,
          className: "PadFocusRing"
        })
      },
      oT = (bb, cb) => {
        bb.style.transform = `translate3d(${cb.x}px, ${cb.y}px, 0)`, bb.classList.toggle("Visible", cb.visible), bb.classList.toggle("Pressed", cb.pressed)
      },
      ST = () => {
        const bb = (0, Gb.useRef)(null);
        return (0, Gb.useEffect)((() => {
          const cb = qc.subscribe((cb => {
            bb.current && oT(bb.current, cb)
          }));
          return bb.current && oT(bb.current, qc.get()), cb
        }), []), (0, zb.jsx)("div", {
          ref: bb,
          className: "PadCursorView",
          "aria-hidden": "true",
          children: (0, zb.jsx)("div", {
            className: "PadCursorGlyph",
            children: "+"
          })
        })
      },
      RT = "#ncmp__modal.ncmp__active",
      vT = [{
        id: "nitro-consent-banner",
        find: () => document.querySelector(RT) ? null : document.querySelector("#ncmp__tool > .ncmp__banner.ncmp__active"),
        startSelectors: ["[data-ncmp-cmd='reject']", "[data-ncmp-cmd='showModal']"]
      }, {
        id: "nitro-consent-modal",
        find: () => document.querySelector(RT),
        startSelectors: ["[data-ncmp-cmd='reject']"]
      }, {
        id: "google-consent",
        find: () => document.querySelector(".fc-consent-root"),
        startSelectors: [".fc-cta-do-not-consent", ".fc-cta-manage-options"]
      }],
      FT = "PadOverThirdParty",
      xT = new Set(vT.map((bb => bb.id))),
      jT = () => {
        const bb = vT.map((bb => {
            let {
              id: cb,
              find: sb,
              startSelectors: kb
            } = bb;
            return (0, Fk.l)({
              id: cb,
              kind: "popup",
              getRoot: () => {
                const bb = sb(),
                  cb = bb ? ((bb, cb) => {
                    var sb;
                    for (const kb of cb) {
                      const cb = bb.querySelector(kb);
                      if (cb) return cb
                    }
                    return null !== (sb = [...bb.querySelectorAll("button")].find((bb => !bb.matches(".fc-cta-consent, [data-ncmp-cmd='save']")))) && void 0 !== sb ? sb : null
                  })(bb, kb) : null;
                if (bb && cb && !cb.hasAttribute("data-pad-default-focus")) {
                  for (const cb of bb.querySelectorAll("[data-pad-default-focus]")) cb.removeAttribute("data-pad-default-focus");
                  for (const cb of bb.querySelectorAll("[data-pad-hint-bar-avoid]")) cb.removeAttribute("data-pad-hint-bar-avoid");
                  cb.setAttribute("data-pad-default-focus", ""), ((bb, cb) => {
                    let sb = bb;
                    for (let kb = bb.parentElement; kb && cb.contains(kb) && !(kb.getBoundingClientRect().height >= window.innerHeight / 2); kb = kb.parentElement) sb = kb;
                    return sb
                  })(cb, bb).setAttribute("data-pad-hint-bar-avoid", "")
                }
                return bb
              },
              close: null,
              memoryKey: null
            })
          })),
          cb = document.documentElement,
          sb = Tb.i.onFrame((() => {
            const bb = (0, nb.k)() ? WW() : null,
              sb = !!bb && (kb = bb.layer, xT.has(kb.id));
            var kb;
            cb.classList.contains(FT) !== sb && cb.classList.toggle(FT, sb)
          }));
        return () => {
          for (const cb of bb) cb();
          sb(), cb.classList.remove(FT)
        }
      },
      pT = "PadLargePointer",
      bU = () => {
        (0, Gb.useEffect)((() => {
          const bb = (0, eb.l)(document.body),
            cb = SW.install(),
            sb = wT.install(),
            kb = jT();
          return () => {
            bb(), cb(), sb(), kb()
          }
        }), []);
        const {
          largePointer: bb
        } = (0, Xb.l)(), cb = (0, BT.l)() && bb;
        return (0, Gb.useEffect)((() => {
          if (cb) return document.documentElement.classList.add(pT), () => {
            document.documentElement.classList.remove(pT)
          }
        }), [cb]), (0, Ub.createPortal)((0, zb.jsxs)(zb.Fragment, {
          children: [(0, zb.jsx)(ZT, {}), (0, zb.jsx)(rT, {}), (0, zb.jsx)(ST, {})]
        }), document.body)
      };
    var cU = sb(8402),
      sU = sb(8425),
      kU = sb(8414);
    sb(8427);
    const WU = (bb, cb) => {
        const [sb, kb] = (0, Gb.useState)(!1), [Wb, ab] = (0, Gb.useState)(null), Tb = (0, Gb.useRef)(null), Ub = (0, Gb.useCallback)((bb => {
          Tb.current = bb, ab(bb)
        }), []), Ib = (0, Gb.useCallback)((() => {
          kb(!1), Ub(null)
        }), [Ub]), fb = (0, Gb.useCallback)((() => {
          kb(!0)
        }), []), Mb = (0, Gb.useCallback)(((bb, cb) => {
          Ub((0, kU.C)(bb, cb, Tb.current))
        }), [Ub]);
        (0, Gb.useLayoutEffect)((() => (cb(sb), (0, tT.w)(bb, sb), Hb.j.QQ(tT.k), () => {
          cb(!1), (0, tT.w)(bb, !1), Hb.j.QQ(tT.k)
        })), [sb, bb, cb]), (0, fa.f)("appManagerUpdated|activeInputDevice", (bb => {
          "gamepad" !== bb && Ib()
        })), (0, fa.f)("appManagerUpdated|gameState", (bb => {
          "inGame" !== bb && Ib()
        }));
        const Xb = () => {
          (0, sk.q)() && Ib()
        };
        return (0, fa.f)("appManagerUpdated|openEverythingMenuName", Xb), (0, fa.f)("appManagerUpdated|openInGameMenuName", Xb), {
          open: sb,
          picked: Wb,
          pickedRef: Tb,
          show: fb,
          aim: Mb,
          close: Ib
        }
      },
      aU = bb => {
        let {
          className: cb,
          slotCount: sb,
          picked: kb,
          slotLabel: Wb,
          renderSlot: ab,
          centre: Tb
        } = bb;
        const Ub = Array.from({
          length: sb
        }, ((bb, cb) => cb));
        return (0, zb.jsx)("div", {
          className: Zb()("EmoteWheelOverlay PadRadialWheel", cb),
          children: (0, zb.jsxs)("div", {
            className: "EmoteWheel",
            style: {
              width: 2 * kU.q + "rem",
              height: 2 * kU.q + "rem"
            },
            children: [(0, zb.jsxs)("svg", {
              className: "EmoteWheelSvg",
              viewBox: `0 0 ${kU.l} ${kU.l}`,
              children: [Ub.map((bb => (0, zb.jsx)("path", {
                d: (0, kU.r)(bb, sb, kU.f, kU.g, kU.k),
                className: Zb()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: bb === kb
                }),
                "aria-label": Wb(bb)
              }, bb))), (0, zb.jsx)("circle", {
                className: "EmoteWheelOuterRing",
                cx: kU.f,
                cy: kU.f,
                r: kU.k
              }), (0, zb.jsx)("circle", {
                className: "EmoteWheelInnerRing",
                cx: kU.f,
                cy: kU.f,
                r: kU.g
              }), null !== kb && (0, zb.jsx)("path", {
                className: "EmoteWheelWedgeOutline",
                d: (0, kU.r)(kb, sb, kU.f, kU.g, kU.k)
              })]
            }), Ub.map((bb => {
              const cb = (0, kU.w)(bb, sb);
              return (0, zb.jsx)("div", {
                className: Zb()("PadRadialWheelSlot SmallTextBold", {
                  PadRadialWheelSlotPicked: bb === kb
                }),
                style: {
                  left: `calc(50% + ${kU.b*Math.cos(cb)}rem)`,
                  top: `calc(50% + ${kU.b*Math.sin(cb)}rem)`
                },
                "aria-hidden": !0,
                children: ab(bb)
              }, bb)
            })), (0, zb.jsx)("div", {
              className: "EmoteWheelHint SmallTextBold",
              children: Tb
            })]
          })
        })
      },
      TU = WT.length,
      UU = () => {
        const {
          t: bb
        } = (0, Wb.E)(), cb = WU("chat", Yk.r), sb = (0, Gb.useMemo)((() => WT.map((cb => bb(cb)))), [bb]);
        return (0, fa.f)(Yk.p, (() => {
          cb.open || (0, cU.c)() || (0, sU.q)() || "inGame" !== Ib.d.get("gameState") || (0, sk.q)() || !(0, Lk.e)() || cb.show()
        })), (0, fa.f)(Yk.f, (bb => {
          cb.open && cb.aim(bb, TU)
        })), (0, fa.f)(Yk.l, (() => {
          var bb;
          if (!cb.open) return;
          const kb = cb.pickedRef.current;
          null !== kb ? aT.claim(performance.now()) && (cb.close(), null === (bb = (0, Lk.e)()) || void 0 === bb || bb.sendLine(sb[kb])) : cb.close()
        })), (0, fa.f)(Yk.h, cb.close), cb.open ? (0, zb.jsx)(aU, {
          className: "QuickChatWheel",
          slotCount: TU,
          picked: cb.picked,
          slotLabel: bb => sb[bb],
          renderSlot: bb => sb[bb],
          centre: null !== cb.picked ? sb[cb.picked] : bb("controller:quickChatPick")
        }) : null
      },
      IU = () => {
        const {
          t: bb
        } = (0, Wb.E)(), cb = WU("actionButton", sU.r), [sb, kb] = (0, Gb.useState)([]);
        if ((0, fa.f)(sU.l, (bb => {
            cb.open || (0, cU.c)() || (0, Yk.c)() || "inGame" !== Ib.d.get("gameState") || (0, sk.q)() || (kb(bb), cb.show())
          })), (0, fa.f)(sU.e, (bb => {
            cb.open && cb.aim(bb, sb.length)
          })), (0, fa.f)(sU.j, (() => {
            if (!cb.open) return;
            const bb = cb.pickedRef.current;
            cb.close(), null !== bb && Hb.j.QQ(sU.n, sb[bb])
          })), (0, fa.f)(sU.i, cb.close), !cb.open) return null;
        const ab = null !== cb.picked ? sb[cb.picked] : null;
        return (0, zb.jsx)(aU, {
          className: "ActionWheel",
          slotCount: sb.length,
          picked: cb.picked,
          slotLabel: cb => {
            const kb = sb[cb];
            return "reload" === kb.kind ? bb("controller:gameplayReload") : "customButton" === kb.kind ? kb.description || kb.icon : "touchButton" === kb.kind && "string" === typeof kb.label ? kb.label : ""
          },
          renderSlot: bb => (0, zb.jsx)(Ca, {
            action: sb[bb]
          }),
          centre: ab ? (0, zb.jsx)(Ca, {
            action: ab
          }) : bb("controller:actionWheelPick")
        })
      };
    var HU = sb(117);
    const fU = () => ((0, Gb.useEffect)((() => {
        var bb, cb;
        const sb = (0, eb.l)(document.getElementById("root")),
          kb = (0, nb.f)(),
          Wb = (() => {
            const bb = [Hb.j.subscribe(vW.g, (() => {
                pW("blockBreak")
              })), Hb.j.subscribe("damagedByOtherPlayer", (() => {
                pW("damage")
              })), Hb.j.subscribe("yourAttackHit", (bb => {
                let {
                  hitSelf: cb
                } = bb;
                cb || pW("hit")
              }))],
              cb = Tb.i.onActivePadChanged((bb => {
                bb && pW("connect")
              }));
            return () => {
              for (const cb of bb) Hb.j.unsubscribe(cb);
              cb()
            }
          })(),
          ab = (() => {
            const bb = new aa({
              getVisitId: Wa.c,
              peekVisitId: Wa.peekVisitSessionId,
              readReportedVisitId: () => {
                const bb = ka.i.getItem(Ta);
                return "string" === typeof bb ? bb : null
              },
              writeReportedVisitId: bb => {
                ka.i.setItem(Ta, bb)
              },
              isPadActive: nb.k,
              getPadFamily: () => {
                var bb, cb;
                return null !== (bb = null === (cb = Tb.i.getActivePad()) || void 0 === cb ? void 0 : cb.family) && void 0 !== bb ? bb : null
              },
              canReport: ca.f,
              getInputType: sa.c,
              lm: ca.i
            });
            let cb = 0,
              sb = null;
            const kb = Wb => {
                null === sb && ("notReady" !== bb.check(Wb) || null !== sb || cb >= 20 || (cb++, sb = setTimeout((() => {
                  sb = null, kb(!1)
                }), 3e3)))
              },
              Wb = Hb.j.subscribe("appManagerUpdated|activeInputDevice", (() => {
                kb(!0)
              })),
              ab = (0, Wa.g)((() => {
                cb = 0, kb(!0)
              }));
            return () => {
              Hb.j.unsubscribe(Wb), ab(), null !== sb && clearTimeout(sb)
            }
          })(),
          Ub = Tb.i.onFrame(((bb, cb) => {
            const sb = (0, nb.n)(bb);
            Mb.e.dispatch(bb, cb, sb)
          }));
        let fb = null !== (bb = null === (cb = Tb.i.getActivePad()) || void 0 === cb ? void 0 : cb.family) && void 0 !== bb ? bb : null;
        const mb = Tb.i.onActivePadChanged((bb => {
            var cb, sb;
            (Mb.e.reset(), (0, nb.r)(), Hb.j.QQ(Tb.e, bb), (null !== (cb = null === bb || void 0 === bb ? void 0 : bb.family) && void 0 !== cb ? cb : null) !== fb) && (fb = null !== (sb = null === bb || void 0 === bb ? void 0 : bb.family) && void 0 !== sb ? sb : null, Hb.j.QQ(Xb.e, (0, Xb.g)()));
            !bb && (0, nb.k)() && (0, nb.u)(Ib.d.get("isTouchScreen") ? "touch" : "keyboardMouse")
          })),
          lb = () => {
            "visible" !== document.visibilityState && Mb.e.clear()
          },
          Qb = () => {
            Mb.e.clear()
          };
        document.addEventListener("visibilitychange", lb), window.addEventListener("blur", Qb), Tb.i.start(), (0, ba.h)();
        const Cb = null;
        return () => {
          sb(), kb(), Wb(), ab(), Ub(), mb(), document.removeEventListener("visibilitychange", lb), window.removeEventListener("blur", Qb), Tb.i.stop(), null === Cb || void 0 === Cb || Cb()
        }
      }), []), (0, zb.jsxs)("div", {
        className: "ControllerRoot",
        children: [(0, zb.jsx)(Ja, {}), (0, zb.jsx)(Oa, {}), (0, zb.jsx)(Ga, {}), (0, zb.jsx)(JT, {}), (0, zb.jsx)(bU, {}), (0, zb.jsx)(UU, {}), (0, zb.jsx)(IU, {})]
      })),
      MU = () => HU.featureFlags.useControllerSupport ? (0, zb.jsx)(fU, {}) : null;
    var XU = sb(7796),
      nU = sb(8434);
    const mU = new Set(ba.g),
      lU = bb => `${nU.l}${(0,Xb.h)()}/${bb}`,
      QU = bb => {
        if (!(0, nU.h)(bb)) return null;
        const [cb, sb] = bb.slice(nU.l.length).split("/");
        return (0, XU.i)(cb) && mU.has(sb) ? (0, ba.f)(cb, sb) : null
      };
    var eU = sb(8442);
    const CU = () => {
        const {
          t: bb
        } = (0, Wb.E)(), cb = (0, nb.y)(), {
          gameState: sb,
          isUiHidden: kb
        } = (0, Ib.p)(["gameState", "isUiHidden"]), {
          hideButtonHints: ab,
          sneakMode: Tb
        } = (0, Xb.l)(), [Ub, Hb] = (0, Gb.useState)(eU.d);
        return (0, fa.f)(ha.t, Hb), cb && !kb && "inGame" === sb && Ub ? (0, zb.jsxs)("div", {
          className: "PadSneakChip SmallTextBold",
          children: [!ab && (0, zb.jsx)(Qa, {
            glyph: (0, fb.i)("toggle" === Tb ? "sneak" : "sneakToggle")
          }), (0, zb.jsx)("span", {
            children: bb("controller:gameplaySneaking")
          })]
        }) : null
      },
      NU = 12,
      VU = bb => {
        let {
          trigger: cb,
          className: sb,
          children: kb
        } = bb;
        const Wb = (0, Gb.useRef)(null);
        return (0, Gb.useEffect)((() => {
          let bb = 0;
          const sb = Bb(cb, "y"),
            kb = () => {
              bb = requestAnimationFrame(kb);
              const ab = Wb.current;
              if (!ab || null === cb || void 0 === cb || !cb.isConnected) return;
              const {
                left: Tb,
                top: Ub
              } = function(bb, cb, sb) {
                let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                const ab = bb.left + bb.width / 2,
                  Tb = Math.max(NU, sb.width - NU - cb.width),
                  Ub = Math.min(Math.max(ab - cb.width / 2, NU), Tb),
                  Ib = sb.height - kb;
                let Hb = 0,
                  fb = Ib;
                if (Wb) {
                  const bb = Math.max(0, Wb.top),
                    kb = Math.min(Ib, Wb.bottom);
                  kb - bb >= Math.max(sb.height / 2, cb.height + 24) && (Hb = bb, fb = kb)
                }
                const Mb = bb.top + bb.height / 2 < (Hb + fb) / 2 ? fb - NU - cb.height : Hb + NU;
                return {
                  left: Ub,
                  top: Math.max(NU, Mb)
                }
              }(cb.getBoundingClientRect(), {
                width: ab.offsetWidth,
                height: ab.offsetHeight
              }, {
                width: window.innerWidth,
                height: window.innerHeight
              }, parseFloat(document.documentElement.style.getPropertyValue(ET)) || 0, null !== sb && void 0 !== sb && sb.isConnected ? sb.getBoundingClientRect() : null);
              ab.style.transform = `translate3d(${Math.round(Tb)}px, ${Math.round(Ub)}px, 0)`, ab.style.visibility = "visible"
            };
          return kb(), () => {
            cancelAnimationFrame(bb)
          }
        }), [cb]), (0, zb.jsx)("div", {
          ref: Wb,
          className: sb,
          style: {
            position: "fixed",
            left: 0,
            top: 0,
            visibility: "hidden"
          },
          children: kb
        })
      };
    var LU = sb(1039),
      uU = sb(8451),
      YU = sb(1431),
      hU = sb(8457),
      JU = sb(8466);
    const gU = {
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
      BU = () => {
        const {
          t: bb
        } = (0, Wb.E)(), cb = (0, nb.y)(), sb = (0, uU.b)(), kb = (0, Da.d)("_tasks"), ab = (0, Da.d)("_availableLeaderboards");
        if (!cb) return null;
        const Tb = (bb => {
          let {
            hasShop: cb,
            hasTasksOrLeaderboards: sb,
            canInvite: kb
          } = bb;
          const Wb = [];
          return cb && Wb.push("shop"), sb && Wb.push("tasks"), kb && Wb.push("invite"), Wb.push("leave"), Wb
        })({
          hasShop: sb,
          hasTasksOrLeaderboards: !(!kb && !ab),
          canInvite: !!HU.featureFlags.canUseInviteLinks
        });
        return (0, zb.jsx)("div", {
          className: "PadLobbyShortcuts",
          children: Tb.map((cb => {
            const {
              icon: sb,
              labelKey: kb
            } = gU[cb], Wb = "leave" === cb ? YU.G : YU.d;
            return (0, zb.jsx)(Wb, {
              className: "PadLobbyShortcut",
              onClick: () => {
                (bb => {
                  switch (bb) {
                    case "shop":
                      return Hb.j.QQ(JU.h), void Ib.d.set({
                        openEverythingMenuName: ck.r.SHOP
                      });
                    case "tasks":
                      return void Hb.j.QQ("toggleMenu", "retentionFeatures");
                    case "invite":
                      return void Hb.j.QQ("toggleMenu", "inviteLink");
                    case "leave":
                      (0, hU.c)()
                  }
                })(cb)
              },
              children: (0, zb.jsxs)("div", {
                className: "PadLobbyShortcutInner",
                children: [(0, zb.jsx)(LU.b, {
                  name: sb
                }), (0, zb.jsx)("span", {
                  children: bb(kb)
                })]
              })
            }, cb)
          }))
        })
      };
    var tU = sb(1917);
    const yU = mb.x,
      PU = ["forward", "backward", "left", "right", "sprint"],
      DU = bb => bb.ctrlKey || bb.altKey || "Alt" === bb.key || "ArrowUp" === bb.key || "ArrowDown" === bb.key || "Tab" === bb.code || "/" === bb.key || "Slash" === bb.code;
    class EU {
      constructor() {
        this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(mb.P).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
      }
      setArmed(bb) {
        this.armed = bb
      }
      blocksGameplay() {
        return this.armed || this.consumeNextFrame
      }
      onKeyDown(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !this.armed || cb ? !bb.repeat && this.swallowedKeys.delete(bb.code) ? {
          swallow: !1,
          continues: !1
        } : {
          swallow: this.swallowedKeys.has(bb.code),
          continues: !1
        } : "Escape" === bb.key || bb.repeat && !this.swallowedKeys.has(bb.code) ? {
          swallow: !1,
          continues: !1
        } : sb ? {
          swallow: !1,
          continues: !0
        } : (this.swallowedKeys.add(bb.code), {
          swallow: !0,
          continues: (0, nb.g)(bb)
        })
      }
      onKeyUp(bb) {
        return this.swallowedKeys.delete(bb.code)
      }
      forgetKeys() {
        this.swallowedKeys.clear()
      }
      onPadFrame(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          kb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Wb = (0, mb.t)(bb.values, this.previousHeld),
          ab = null === sb ? -1 : (0, mb.o)(sb),
          Tb = ab >= 0 && Wb[ab] && !this.previousHeld[ab],
          Ub = Wb.some(((bb, cb) => bb && !this.previousHeld[cb] && cb !== ab)),
          Ib = Math.hypot(bb.leftStick.x, bb.leftStick.y) >= yU,
          Hb = Math.hypot(bb.rightStick.x, bb.rightStick.y) >= yU,
          fb = Ib && !this.leftStickWasPressed || Hb && !this.rightStickWasPressed;
        this.previousHeld = Wb, this.leftStickWasPressed = Ib, this.rightStickWasPressed = Hb;
        let Mb = !1;
        this.consumeNextFrame && (this.consumeNextFrame = !1, Mb = !0);
        const Xb = !cb && Tb && !kb,
          nb = !Xb && this.armed && !cb && (Ub || fb);
        return (Xb || nb) && (this.consumeNextFrame = !0, this.consumeAfterContinue = nb, Mb = !0), {
          continues: nb,
          back: Xb,
          consumeHeld: Mb
        }
      }
      consumeLeavesMoveStick() {
        return this.consumeAfterContinue
      }
    }
    const iU = new Set([...tU.m, ...tU.D]),
      OU = bb => ((bb, cb, sb) => {
        const kb = Object.keys(cb).filter((kb => !sb.has(kb) && cb[kb].includes(bb)));
        return kb.length > 0 && kb.every((bb => PU.includes(bb)))
      })(bb, tU.v, iU),
      GU = (bb, cb, sb) => {
        const kb = new EU,
          Wb = bb => {
            if (!bb.isTrusted) return;
            const {
              swallow: sb,
              continues: Wb
            } = kb.onKeyDown(bb, !(0, nb.D)(bb) || (0, RW.k)() || (0, sk.q)(), OU(bb.code));
            sb && (bb.stopImmediatePropagation(), DU(bb) && bb.preventDefault()), Wb && ((0, nb.u)("keyboardMouse"), cb())
          },
          ab = bb => {
            bb.isTrusted && kb.onKeyUp(bb) && (bb.stopImmediatePropagation(), DU(bb) && bb.preventDefault())
          },
          Ub = () => {
            kb.forgetKeys()
          };
        window.addEventListener("keydown", Wb, !0), window.addEventListener("keyup", ab, !0), window.addEventListener("blur", Ub);
        const Ib = Tb.i.onFrame((bb => {
            const Wb = Mb.e.getActiveConsumerName(),
              ab = sb(),
              Tb = ab ? (0, fb.i)("menuBack") : null,
              Ub = null !== Wb && "gameplay" !== Wb,
              {
                continues: Ib,
                back: Hb,
                consumeHeld: mb
              } = kb.onPadFrame(bb, Ub, Tb, (0, nb.m)(bb));
            if (mb) {
              const bb = (0, Xb.g)().swapSticks ? "right" : "left";
              Mb.e.consumeAllHeld(kb.consumeLeavesMoveStick() ? bb : null)
            }
            Hb ? null === ab || void 0 === ab || ab() : Ib && cb()
          })),
          Hb = (0, RW.o)(`pressToContinue:${bb}`, (() => kb.blocksGameplay()));
        return {
          setArmed: bb => {
            kb.setArmed(bb)
          },
          dispose: () => {
            window.removeEventListener("keydown", Wb, !0), window.removeEventListener("keyup", ab, !0), window.removeEventListener("blur", Ub), Ib(), Hb()
          }
        }
      };
    var KU = sb(4703),
      ZU = sb(3201),
      zU = sb(2889),
      qU = sb(7801);
    const dU = bb => {
        let {
          text: cb
        } = bb;
        return (0, zb.jsx)("div", {
          className: "ControllerSettingsHeading",
          children: cb
        })
      },
      AU = bb => {
        let {
          label: cb,
          hint: sb,
          options: kb,
          value: ab,
          onChange: Tb
        } = bb;
        const {
          t: Ub
        } = (0, Wb.E)();
        return (0, zb.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, zb.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: [(0, zb.jsxs)("div", {
              className: "ControllerChoiceText",
              children: [(0, zb.jsx)("div", {
                className: "SliderText",
                children: cb
              }), sb && (0, zb.jsx)("div", {
                className: "ControllerSettingsHint",
                children: sb
              })]
            }), (0, zb.jsx)(zU.e, {
              options: kb.map((bb => ({
                label: "label" in bb ? bb.label : Ub(bb.labelKey),
                value: bb.value
              }))),
              value: ab,
              onChange: bb => {
                Tb(bb.value)
              }
            })]
          })
        })
      },
      wU = bb => {
        let {
          settingKey: cb,
          label: sb,
          range: kb,
          format: Wb
        } = bb;
        const ab = (0, Xb.l)();
        return (0, zb.jsx)(KU.i, {
          name: sb,
          min: kb.min,
          max: kb.max,
          step: kb.step,
          padStep: kb.step,
          initValue: ab[cb],
          format: Wb,
          onChange: bb => {
            (0, Xb.i)({
              [cb]: (0, qU.B)(bb, kb)
            })
          }
        })
      };
    var rU = sb(8468),
      oU = sb(8475);
    const SU = bb => bb instanceof DOMException && ("SecurityError" === bb.name || "NotAllowedError" === bb.name),
      RU = bb => {
        const [cb] = [...bb.controllers].sort(((bb, cb) => oU.p[bb] - oU.p[cb]));
        return oU.o[cb]
      },
      vU = bb => {
        (0, rU.d)().allowPhoneMotion().catch((cb => {
          bb && SU(cb) ? bb() : console.warn("Could not enable the motion sensor", cb)
        }))
      },
      FU = {
        waiting: "controller:settingsGyroPhoneWaiting",
        noSensor: "controller:settingsGyroPhoneNoSensor",
        on: "controller:settingsGyroPhoneOn",
        denied: "controller:settingsGyroPhoneDenied"
      },
      xU = bb => {
        let {
          status: cb
        } = bb;
        const {
          t: sb
        } = (0, Wb.E)(), [kb, ab] = (0, Gb.useState)(null), Tb = `${cb.controllers.join(",")}|${cb.phoneMotion}`;
        (0, Gb.useEffect)((() => {
          ab(null)
        }), [Tb]);
        const Ub = () => {
          (0, rU.d)().connectController().then((bb => {
            ab(bb > 0 ? "openFailed" : null)
          })).catch((bb => {
            SU(bb) ? ab("needsClick") : console.warn("Could not connect motion controller", bb)
          }))
        };
        if (cb.hidSupported) {
          let bb = sb("controller:settingsGyroConnectHint");
          return "needsClick" === kb ? bb = sb("controller:settingsGyroConnectNeedsClick") : "openFailed" === kb ? bb = sb("controller:settingsGyroOpenFailed") : cb.controllers.length > 0 && (bb = sb("controller:settingsGyroConnected", {
            name: RU(cb)
          })), (0, zb.jsx)("div", {
            className: "SettingBox ControllerChoiceSetting",
            children: (0, zb.jsxs)("div", {
              className: "ControllerChoiceRow",
              children: [(0, zb.jsx)("div", {
                className: "ControllerSettingsHint",
                children: bb
              }), (0, zb.jsx)(YU.d, {
                onClick: Ub,
                children: sb("controller:settingsGyroConnect")
              })]
            })
          })
        }
        if ("needsPermission" === cb.phoneMotion) return (0, zb.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, zb.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: ["needsTap" === kb && (0, zb.jsx)("div", {
              className: "ControllerSettingsHint",
              children: sb("controller:settingsGyroAllowNeedsTap")
            }), (0, zb.jsx)(YU.d, {
              onClick: () => {
                vU((() => {
                  ab("needsTap")
                }))
              },
              children: sb("controller:settingsGyroAllowMotion")
            })]
          })
        });
        const Ib = FU[cb.phoneMotion];
        return Ib ? (0, zb.jsx)("div", {
          className: "ControllerSettingsHint",
          children: sb(Ib)
        }) : null
      },
      jU = () => {
        const {
          t: bb
        } = (0, Wb.E)(), cb = (0, Xb.l)(), sb = (0, rU.g)(), kb = (0, nb.B)(), ab = !sb.hidSupported && sb.phoneSupported && !sb.padConnected, Tb = (sb.hidSupported || sb.phoneSupported) && !ab, Ub = (0, fb.i)("pause");
        return (0, zb.jsxs)(zb.Fragment, {
          children: [(0, zb.jsx)(dU, {
            text: bb("controller:settingsGyro")
          }), ab && (0, zb.jsx)("div", {
            className: "ControllerSettingsHint",
            children: bb("controller:settingsGyroPhoneNeedsController")
          }), !Tb && !ab && (0, zb.jsx)("div", {
            className: "ControllerSettingsHint",
            children: bb(sb.hidBlocked || sb.phoneBlocked ? "controller:settingsGyroBlocked" : "controller:settingsGyroUnsupported")
          }), Tb && (0, zb.jsx)(KU.d, {
            label: bb(sb.hidSupported ? "controller:settingsGyroToggle" : "controller:settingsGyroTogglePhone"),
            checked: cb.gyroAiming,
            onClick: bb => {
              var cb, sb;
              (0, Xb.i)({
                gyroAiming: bb
              });
              const kb = null === (cb = null === (sb = navigator.userActivation) || void 0 === sb ? void 0 : sb.isActive) || void 0 === cb || cb;
              if (!bb || !kb) return;
              const Wb = (0, rU.d)(),
                ab = Wb.getStatus();
              ab.hidSupported ? Wb.connectControllerIfNoneGranted().catch((bb => {
                console.warn("Motion controller picker unavailable", bb)
              })) : "needsPermission" === ab.phoneMotion && vU()
            },
            circleInfoText: bb(sb.hidSupported ? "controller:settingsGyroToggleInfo" : "controller:settingsGyroToggleInfoPhone")
          }), Tb && sb.hidSupported && (0, zb.jsx)("div", {
            className: "ControllerSettingsHint",
            children: bb("controller:settingsGyroSteamHint")
          }), Tb && cb.gyroAiming && (0, zb.jsxs)(zb.Fragment, {
            children: [(0, zb.jsx)(xU, {
              status: sb
            }), (0, zb.jsx)(wU, {
              settingKey: "gyroSensitivity",
              label: bb("controller:settingsGyroSensitivity"),
              range: qU.Z,
              format: qU.R
            }), (0, zb.jsx)(AU, {
              label: bb("controller:settingsGyroActivation"),
              hint: "aiming" === cb.gyroActivation && (0, zb.jsx)(ZU.d, {
                text: bb("controller:settingsGyroAimingHint", {
                  button: ZU.g
                }),
                glyph: (0, fb.i)("use")
              }),
              options: qU.W,
              value: cb.gyroActivation,
              onChange: bb => {
                (0, Xb.i)({
                  gyroActivation: bb
                })
              }
            }), "button" === cb.gyroActivation && (0, zb.jsx)(AU, {
              label: bb("controller:settingsGyroButton"),
              hint: bb("controller:settingsGyroButtonHint"),
              options: qU.w.filter((bb => bb !== Ub || bb === cb.gyroButton)).map((bb => ({
                label: la(kb, bb),
                value: bb
              }))),
              value: cb.gyroButton,
              onChange: bb => {
                (0, Xb.i)({
                  gyroButton: bb
                })
              }
            })]
          })]
        })
      };
    var pU = sb(1800);
    const bI = () => {
      const {
        t: bb
      } = (0, Wb.E)(), cb = (0, Xb.l)(), sb = (0, nb.B)();
      return (0, zb.jsxs)(zb.Fragment, {
        children: [(0, zb.jsx)(dU, {
          text: bb("controller:settingsAccessibility")
        }), (0, zb.jsx)(KU.d, {
          label: bb("controller:settingsSwapConfirmBack"),
          checked: (0, fb.I)(cb.swapConfirmBack, sb),
          onClick: bb => {
            (0, Xb.i)({
              swapConfirmBack: bb === (0, fb.I)(null, sb) ? null : bb
            }), pU.f.showMessage({
              translationKey: "controller:settingsSwapToast"
            })
          },
          circleInfoText: bb("controller:settingsSwapConfirmBackInfo")
        }), (0, zb.jsx)(AU, {
          label: bb("controller:settingsButtonRepeat"),
          hint: bb("controller:settingsButtonRepeatHint"),
          options: qU.s,
          value: cb.buttonRepeat,
          onChange: bb => {
            (0, Xb.i)({
              buttonRepeat: bb
            })
          }
        }), (0, zb.jsx)(AU, {
          label: bb("controller:settingsTapHoldTime"),
          hint: bb("controller:settingsTapHoldTimeHint"),
          options: qU.Ab,
          value: cb.tapHoldTime,
          onChange: bb => {
            (0, Xb.i)({
              tapHoldTime: bb
            })
          }
        }), (0, zb.jsx)(AU, {
          label: bb("controller:settingsEmoteButton"),
          hint: bb("wheel" === cb.emoteButton ? "controller:settingsEmoteButtonWheelHint" : "controller:settingsEmoteButtonTapHoldHint"),
          options: qU.N,
          value: cb.emoteButton,
          onChange: bb => {
            (0, Xb.i)({
              emoteButton: bb
            })
          }
        }), (0, zb.jsx)(AU, {
          label: bb("controller:settingsAttackMode"),
          hint: bb("toggle" === cb.attackMode ? "controller:settingsAttackToggleHint" : "controller:settingsAttackHoldHint"),
          options: qU.p,
          value: cb.attackMode,
          onChange: bb => {
            (0, Xb.i)({
              attackMode: bb
            })
          }
        }), (0, zb.jsx)(KU.d, {
          label: bb("controller:settingsLargePointer"),
          checked: cb.largePointer,
          onClick: bb => {
            (0, Xb.i)({
              largePointer: bb
            })
          },
          circleInfoText: bb("controller:settingsLargePointerInfo")
        })]
      })
    };
    var cI = sb(8478);
    const sI = new class {
        constructor(bb) {
          this.router = bb, this.current = null
        }
        claim(bb, cb) {
          const sb = this.current;
          sb && (this.current = null, sb.release(), sb.onTakenOver());
          const kb = this.router.register({
              ...bb,
              name: "capture"
            }),
            Wb = {
              release: kb,
              onTakenOver: cb
            };
          return this.current = Wb, () => {
            this.current === Wb && (this.current = null), kb()
          }
        }
      }(Mb.e),
      kI = bb => {
        (0, Gb.useEffect)((() => {
          if (!bb) return;
          const cb = bb();
          let sb = !1;
          const kb = () => {
              sb || (sb = !0, cb.onEnd())
            },
            Wb = sI.claim({
              isActive: () => !sb,
              onFrame: bb => {
                cb.onFrame(bb, kb)
              }
            }, kb),
            ab = void 0 === cb.timeoutMs ? void 0 : window.setTimeout(kb, cb.timeoutMs),
            Tb = bb => {
              "Escape" === bb.key && (bb.preventDefault(), bb.stopPropagation(), kb())
            };
          return window.addEventListener("keydown", Tb, !0), () => {
            sb = !0, Wb(), window.clearTimeout(ab), window.removeEventListener("keydown", Tb, !0)
          }
        }), [bb])
      },
      WI = bb => {
        let {
          row: cb,
          capturing: sb,
          onCapture: kb,
          holdFillRef: ab,
          onRebind: Tb,
          swapped: Ub
        } = bb;
        const {
          t: Ib
        } = (0, Wb.E)();
        if ("fixed" === cb.kind) return (0, zb.jsx)("div", {
          className: "ControlRow PadControlRow PadControlRowFixed",
          children: (0, zb.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, zb.jsx)("div", {
              className: "ControlName",
              children: Ib(cb.labelKey)
            }), (0, zb.jsx)("div", {
              className: "ControlBindingsContainer",
              children: (0, zb.jsx)("div", {
                className: "ControlBindingsList",
                children: (0, zb.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  children: (0, zb.jsx)(Qa, {
                    glyph: "move" === cb.stick ? (0, fb.s)() : (0, fb.o)()
                  })
                })
              })
            })]
          })
        });
        const {
          action: Hb
        } = cb, Mb = (0, fb.i)(Hb), Xb = (0, fb.k)(Hb), nb = Mb !== Xb && (0, fb.e)(Hb, Xb);
        return (0, zb.jsxs)("div", {
          className: Zb()("ControlRow PadControlRow", {
            Capturing: sb
          }),
          children: [(0, zb.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, zb.jsx)("div", {
              className: "ControlName",
              children: Ib(qU.h[Hb])
            }), (0, zb.jsxs)("div", {
              className: "ControlBindingsContainer",
              children: [!sb && (0, zb.jsxs)("div", {
                className: "ControlBindingsList",
                children: [(0, zb.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    kb(Hb)
                  },
                  children: (0, zb.jsx)(Qa, {
                    glyph: Mb
                  })
                }), nb && (0, zb.jsx)("div", {
                  className: "ControlBinding PadBindingReset",
                  title: Ib("controller:settingsReset"),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Tb(Hb, Xb)
                  },
                  children: (0, zb.jsx)(LU.b, {
                    name: "arrows-rotate"
                  })
                })]
              }), sb && (0, zb.jsxs)("div", {
                className: "ControlBindingAddInput",
                children: [(0, zb.jsxs)("div", {
                  className: "PadCaptureBox",
                  children: [(0, zb.jsx)("span", {
                    children: Ib("controller:settingsCapturePrompt")
                  }), (0, zb.jsx)("div", {
                    ref: ab,
                    className: "PadCaptureHoldFill"
                  })]
                }), (0, zb.jsx)("div", {
                  className: "ControlBindingAddCancel",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    kb(null)
                  },
                  children: "\xd7"
                })]
              }), sb && (0, zb.jsx)("div", {
                className: "PadCaptureHint",
                children: (0, zb.jsx)(ZU.d, {
                  text: Ib((0, fb.e)(Hb, (0, fb.i)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
                    button: ZU.g
                  }),
                  glyph: (0, fb.i)("menuBack")
                })
              })]
            })]
          }), Ub.map((bb => (0, zb.jsx)("div", {
            className: "ControlRowWarning PadSwapNotice",
            children: (0, zb.jsx)(ZU.d, {
              text: Ib("controller:settingsSwapNotice", {
                action: Ib(qU.h[bb]),
                button: ZU.g
              }),
              glyph: (0, fb.i)(bb)
            })
          }, bb))), sb && (0, zb.jsx)("div", {
            className: "PadCaptureTimer",
            style: {
              animationDuration: `${qU.y}ms`
            }
          })]
        })
      },
      aI = [],
      TI = bb => {
        let {
          layoutSetting: cb
        } = bb;
        const {
          t: sb
        } = (0, Wb.E)(), kb = (0, Xb.l)();
        (0, nb.B)();
        const ab = (0, Gb.useRef)(null),
          [Tb, Ub] = (0, Gb.useState)(null),
          Ib = (0, Gb.useCallback)(((bb, cb) => {
            const sb = (0, Xb.g)().bindings;
            (0, fb.B)(bb, cb);
            const kb = (0, fb.v)(sb, bb);
            Ub(kb.length > 0 ? {
              action: bb,
              swapped: kb
            } : null)
          }), []),
          [Hb, lb] = ((bb, cb) => {
            const [sb, kb] = (0, Gb.useState)(null), Wb = (0, Gb.useMemo)((() => sb ? () => {
              const Wb = (0, fb.i)("menuBack"),
                ab = new qU.d(Wb, (0, fb.i)("menuConfirm"), (bb => (0, fb.e)(sb, bb)));
              return {
                onFrame: (kb, Tb) => {
                  var Ub;
                  const Ib = kb.frame.timestampMs,
                    Hb = ab.update({
                      ...kb,
                      isDown: bb => (0, mb.G)(kb.frame.values, bb)
                    }, Ib);
                  null === (Ub = bb.current) || void 0 === Ub || Ub.style.setProperty("width", 100 * ab.getBindHoldProgress(Ib) + "%"), Hb && ("bind" === Hb.kind ? (Mb.e.consumeButton(Hb.button), cb(sb, Hb.button)) : Mb.e.consumeButton(Wb), Tb())
                },
                onEnd: () => {
                  kb(null)
                },
                timeoutMs: qU.y
              }
            } : null), [sb, bb, cb]);
            return kI(Wb), [sb, kb]
          })(ab, Ib),
          Qb = bb => {
            bb && Ub(null), lb(bb)
          };
        (0, Gb.useEffect)((() => {
          if (!Tb) return;
          const bb = window.setTimeout((() => {
            Ub(null)
          }), qU.xb);
          return () => {
            window.clearTimeout(bb)
          }
        }), [Tb]);
        const eb = !kb.swapSticks && 0 === Object.keys(kb.bindings).length;
        return (0, zb.jsxs)("div", {
          className: "ControlsContainer PadControlsContainer",
          children: [(0, zb.jsx)("div", {
            className: "SliderText",
            children: sb("controller:settingsRemap")
          }), (0, zb.jsx)("div", {
            className: "ControllerSettingsHint",
            children: sb("controller:settingsRemapHint")
          }), (0, zb.jsx)(YU.G, {
            className: "ResetBindingsButton PadResetAllButton",
            disabled: eb,
            onClick: () => {
              Qb(null), Ub(null), (0, fb.E)()
            },
            children: sb("controller:settingsResetAll")
          }), cb, qU.qb.map(((bb, cb) => (0, zb.jsx)(cI.d, {
            title: sb(bb.titleKey),
            defaultOpen: 0 === cb,
            children: bb.rows.map((bb => (0, zb.jsx)(WI, {
              row: bb,
              capturing: "action" === bb.kind && bb.action === Hb,
              onCapture: Qb,
              holdFillRef: ab,
              onRebind: Ib,
              swapped: "action" === bb.kind && (null === Tb || void 0 === Tb ? void 0 : Tb.action) === bb.action ? Tb.swapped : aI
            }, "action" === bb.kind ? bb.action : bb.labelKey)))
          }, bb.titleKey)))]
        })
      },
      UI = bb => {
        let {
          deadzone: cb,
          dotRef: sb,
          labelKey: kb
        } = bb;
        const {
          t: ab
        } = (0, Wb.E)();
        return (0, zb.jsxs)("div", {
          className: "ControllerTesterStick",
          children: [(0, zb.jsxs)("div", {
            className: "ControllerTesterStickCircle",
            children: [(0, zb.jsx)("div", {
              className: "ControllerTesterDeadzone",
              style: {
                width: 100 * cb + "%",
                height: 100 * cb + "%"
              }
            }), (0, zb.jsx)("div", {
              ref: sb,
              className: "ControllerTesterDot"
            })]
          }), (0, zb.jsx)("div", {
            className: "ControllerTesterStickLabel",
            children: ab(kb)
          })]
        })
      },
      II = (bb, cb, sb, kb) => {
        var Wb;
        bb && (bb.style.left = 50 + 50 * Math.max(-1, Math.min(1, cb.x)) + "%", bb.style.top = 50 + 50 * Math.max(-1, Math.min(1, cb.y)) + "%", null === (Wb = bb.parentElement) || void 0 === Wb || Wb.classList.toggle("Active", kb || Math.hypot(cb.x, cb.y) > sb))
      },
      HI = bb => {
        const cb = {
            deadzone: bb.moveDeadzone,
            labelKey: "controller:settingsActionMove"
          },
          sb = {
            deadzone: bb.lookDeadzone,
            labelKey: "controller:settingsActionLook"
          };
        return bb.swapSticks ? {
          left: sb,
          right: cb
        } : {
          left: cb,
          right: sb
        }
      },
      fI = () => {
        const {
          t: bb
        } = (0, Wb.E)(), cb = (() => {
          const [bb, cb] = (0, Gb.useState)((() => Tb.i.getActivePad()));
          return (0, fa.f)(Tb.e, (() => {
            cb(Tb.i.getActivePad())
          })), bb
        })(), sb = HI((0, Xb.l)()), kb = (0, Gb.useRef)(null), ab = (0, Gb.useRef)(null), Ub = (0, Gb.useRef)([]), Ib = (0, Gb.useRef)(null), Hb = (0, Gb.useRef)(null), [nb, lb] = (bb => {
          const [cb, sb] = (0, Gb.useState)(!1), kb = (0, Gb.useMemo)((() => cb ? () => {
            const cb = (0, fb.i)("menuBack"),
              kb = new qU.e;
            return {
              onFrame: (sb, Wb) => {
                var ab;
                const Tb = kb.update({
                  pressed: sb.wasPressed(cb),
                  qU: sb.isHeld(cb)
                }, sb.frame.timestampMs);
                null === (ab = bb.current) || void 0 === ab || ab.style.setProperty("width", 100 * Tb + "%"), Tb >= 1 && (Mb.e.consumeButton(cb), Wb())
              },
              onEnd: () => {
                sb(!1)
              }
            }
          } : null), [cb, bb]);
          return kI(kb), [cb, sb]
        })(ab);
        (0, Gb.useEffect)((() => {
          const bb = bb => {
            for (const sb of mb.R) {
              const cb = (0, mb.o)(sb),
                kb = Ub.current[cb];
              if (!kb) continue;
              const Wb = bb.values[cb];
              kb.classList.toggle("Pressed", Wb >= mb.x), (0, mb.J)(cb) && kb.style.setProperty("--trigger-fill", `${Math.round(100*Wb)}%`)
            }
            const cb = HI((0, Xb.g)());
            II(Ib.current, bb.leftStick, cb.left.deadzone, bb.values[(0, mb.o)("LS")] >= mb.x), II(Hb.current, bb.rightStick, cb.right.deadzone, bb.values[(0, mb.o)("RS")] >= mb.x)
          };
          return cb || bb((0, mb.w)()), Tb.i.onFrame(bb)
        }), [cb]), (0, Gb.useEffect)((() => {
          cb || lb(!1)
        }), [cb, lb]), (0, Gb.useEffect)((() => {
          var bb;
          nb && (null === (bb = kb.current) || void 0 === bb || bb.scrollIntoView({
            block: "nearest"
          }))
        }), [nb]);
        const Qb = qU.jb.find((bb => bb.value === (null === cb || void 0 === cb ? void 0 : cb.family)));
        return (0, zb.jsxs)("div", {
          ref: kb,
          className: Zb()("SettingBox ControllerTester", {
            Testing: nb
          }),
          children: [(0, zb.jsxs)("div", {
            className: "ControllerTesterHeader",
            children: [(0, zb.jsxs)("div", {
              className: "ControllerTesterInfo",
              children: [cb && (0, zb.jsx)("div", {
                children: bb("controller:settingsTesterFamily", {
                  family: Qb ? bb(Qb.labelKey) : cb.family
                })
              }), cb && (0, zb.jsx)("div", {
                className: "ControllerTesterPadId",
                children: cb.id
              }), !cb && (0, zb.jsx)("div", {
                children: bb("controller:settingsTesterNoPad")
              })]
            }), (cb || nb) && (0, zb.jsx)(YU.d, {
              className: "ControllerTesterToggle",
              onClick: () => {
                lb(!nb)
              },
              children: bb(nb ? "controller:settingsTesterStop" : "controller:settingsTesterStart")
            })]
          }), cb && !nb && (0, zb.jsx)("div", {
            className: "ControllerSettingsHint",
            children: bb("controller:settingsTesterHint")
          }), nb && (0, zb.jsxs)("div", {
            className: "ControllerTesterBanner",
            children: [(0, zb.jsx)(ZU.d, {
              text: bb("controller:settingsTesterTesting", {
                button: ZU.g
              }),
              glyph: (0, fb.i)("menuBack")
            }), (0, zb.jsx)("div", {
              ref: ab,
              className: "ControllerTesterExitFill"
            })]
          }), (0, zb.jsxs)("div", {
            className: "ControllerTesterBody",
            children: [(0, zb.jsx)(UI, {
              deadzone: sb.left.deadzone,
              dotRef: Ib,
              labelKey: sb.left.labelKey
            }), (0, zb.jsx)("div", {
              className: "ControllerTesterButtons",
              children: mb.R.map((bb => {
                const sb = (0, mb.o)(bb);
                return (0, zb.jsx)("div", {
                  ref: bb => {
                    Ub.current[sb] = bb
                  },
                  className: (0, mb.J)(sb) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
                  children: (0, zb.jsx)(Qa, {
                    glyph: bb,
                    family: null === cb || void 0 === cb ? void 0 : cb.family
                  })
                }, bb)
              }))
            }), (0, zb.jsx)(UI, {
              deadzone: sb.right.deadzone,
              dotRef: Hb,
              labelKey: sb.right.labelKey
            })]
          })]
        })
      },
      MI = (0, Gb.memo)((function() {
        const {
          t: bb
        } = (0, Wb.E)(), cb = (0, Xb.l)(), [sb, kb] = (0, Gb.useState)(!1);
        return (0, Gb.useEffect)((() => {
          if (!sb) return;
          const bb = window.setTimeout((() => {
            kb(!1)
          }), qU.xb);
          return () => {
            window.clearTimeout(bb)
          }
        }), [sb]), (0, zb.jsxs)("div", {
          className: "SettingsMenuRightInner ControllerCategory",
          children: [(0, zb.jsx)(dU, {
            text: bb("controller:settingsLook")
          }), (0, zb.jsx)(wU, {
            settingKey: "lookSensitivityX",
            label: bb("controller:settingsLookSensitivityX"),
            range: qU.tb,
            format: qU.V
          }), (0, zb.jsx)(wU, {
            settingKey: "lookSensitivityY",
            label: bb("controller:settingsLookSensitivityY"),
            range: qU.tb,
            format: qU.V
          }), (0, zb.jsx)(wU, {
            settingKey: "aimLookSensitivity",
            label: bb("controller:settingsAimLookSensitivity"),
            range: qU.l,
            format: qU.V
          }), (0, zb.jsx)(AU, {
            label: bb("controller:settingsLookCurve"),
            hint: bb("controller:settingsLookCurveHint"),
            options: qU.hb,
            value: cb.lookCurve,
            onChange: bb => {
              (0, Xb.i)({
                lookCurve: bb
              })
            }
          }), (0, zb.jsx)(KU.d, {
            label: bb("controller:settingsInvertLookX"),
            checked: cb.invertLookX,
            onClick: bb => {
              (0, Xb.i)({
                invertLookX: bb
              })
            }
          }), (0, zb.jsx)(KU.d, {
            label: bb("controller:settingsInvertLookY"),
            checked: cb.invertLookY,
            onClick: bb => {
              (0, Xb.i)({
                invertLookY: bb
              })
            }
          }), (0, zb.jsx)(wU, {
            settingKey: "lookDeadzone",
            label: bb("controller:settingsLookDeadzone"),
            range: qU.J,
            format: qU.P
          }), (0, zb.jsx)(jU, {}), (0, zb.jsx)(dU, {
            text: bb("controller:settingsMovement")
          }), (0, zb.jsx)(wU, {
            settingKey: "moveDeadzone",
            label: bb("controller:settingsMoveDeadzone"),
            range: qU.J,
            format: qU.P
          }), (0, zb.jsx)(KU.d, {
            label: bb("controller:settingsAutoSprint"),
            checked: cb.autoSprint,
            onClick: bb => {
              (0, Xb.i)({
                autoSprint: bb
              })
            },
            circleInfoText: bb("controller:settingsAutoSprintInfo")
          }), (0, zb.jsx)(AU, {
            label: bb("controller:settingsSneak"),
            options: qU.vb,
            value: cb.sneakMode,
            onChange: bb => {
              (0, Xb.i)({
                sneakMode: bb
              })
            }
          }), (0, zb.jsx)(dU, {
            text: bb("controller:settingsButtons")
          }), (0, zb.jsx)(AU, {
            label: bb("controller:settingsPromptFamily"),
            options: qU.jb,
            value: cb.promptFamily,
            onChange: bb => {
              (0, Xb.i)({
                promptFamily: bb
              })
            }
          }), (0, zb.jsx)(KU.d, {
            label: bb("controller:settingsHideButtonHints"),
            checked: cb.hideButtonHints,
            onClick: bb => {
              (0, Xb.i)({
                hideButtonHints: bb
              })
            }
          }), (0, zb.jsx)(KU.d, {
            label: bb("controller:settingsVibration"),
            checked: cb.vibration,
            onClick: bb => {
              (0, Xb.i)({
                vibration: bb
              }), bb && pW("preview")
            }
          }), (0, zb.jsx)(wU, {
            settingKey: "cursorSpeed",
            label: bb("controller:settingsCursorSpeed"),
            range: qU.F,
            format: qU.V
          }), (0, zb.jsx)(KU.d, {
            label: bb("controller:settingsCursorMagnetism"),
            checked: cb.cursorMagnetism,
            onClick: bb => {
              (0, Xb.i)({
                cursorMagnetism: bb
              })
            }
          }), (0, zb.jsx)(KU.d, {
            label: bb("controller:settingsMenuBackToCategories"),
            checked: cb.menuBackToCategories,
            onClick: bb => {
              (0, Xb.i)({
                menuBackToCategories: bb
              })
            }
          }), (0, zb.jsx)(TI, {
            layoutSetting: (0, zb.jsxs)(zb.Fragment, {
              children: [fb.f.map((sb => (0, zb.jsx)(KU.d, {
                label: bb(qU.db[sb]),
                checked: (0, fb.y)(sb, cb),
                onClick: bb => {
                  kb(!(0, fb.L)(sb, bb))
                }
              }, sb))), sb && (0, zb.jsx)("div", {
                className: "PadLayoutRefusedNotice",
                role: "status",
                children: bb("controller:settingsLayoutRefusedToast")
              })]
            })
          }), (0, zb.jsx)(bI, {}), (0, zb.jsx)(dU, {
            text: bb("controller:settingsAlternatives")
          }), (0, zb.jsx)("div", {
            className: "ControllerSettingsHint",
            children: bb("controller:settingsAlternativesHint")
          }), (0, zb.jsx)(AU, {
            label: bb("controller:settingsMenuNavigation"),
            hint: bb("controller:settingsMenuNavigationHint"),
            options: qU.ib,
            value: cb.menuNavigation,
            onChange: bb => {
              (0, Xb.i)({
                menuNavigation: bb
              })
            }
          }), (0, zb.jsx)(AU, {
            label: bb("controller:settingsInventoryNavigation"),
            hint: bb("controller:settingsInventoryNavigationHint"),
            options: qU.bb,
            value: cb.inventoryNavigation,
            onChange: bb => {
              (0, Xb.i)({
                inventoryNavigation: bb
              })
            }
          }), (0, zb.jsx)(AU, {
            label: bb("controller:settingsQuickChat"),
            hint: bb("controller:settingsQuickChatHint"),
            options: qU.nb,
            value: cb.quickChat,
            onChange: bb => {
              (0, Xb.i)({
                quickChat: bb
              })
            }
          }), (0, zb.jsx)(AU, {
            label: bb("controller:settingsLeaderboardButton"),
            hint: bb("controller:settingsLeaderboardButtonHint"),
            options: qU.fb,
            value: cb.leaderboardButton,
            onChange: bb => {
              (0, Xb.i)({
                leaderboardButton: bb
              })
            }
          }), (0, zb.jsx)(dU, {
            text: bb("controller:settingsTester")
          }), (0, zb.jsx)(fI, {})]
        })
      }));
    (0, Wb.d)(kb);
    for (const QI of (0, ab.q)()) QI.connected ? Tb.i.handleConnectionEvent(QI) : Tb.i.handleDisconnectionEvent(QI);
    const XI = () => null !== Tb.i.getActivePad(),
      nI = () => xs.getState(),
      mI = () => xs.isSteppingSlots(),
      lI = (bb, cb) => {
        const sb = SW.getFocused();
        SW.isActive() && sb && bb.contains(sb) && SW.setFocus(cb, {
          scroll: !1
        })
      }
  },
  7777: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Ib,
      e: () => Hb
    });
    var kb = sb(1398),
      Wb = sb(1393);
    const ab = {
        "054c": "playstation",
        "057e": "nintendo"
      },
      Tb = "28de",
      Ub = new Set(["1205"]),
      Ib = (bb, cb) => {
        const sb = (0, kb.b)(bb);
        if ((null === sb || void 0 === sb ? void 0 : sb.vendor) === Tb) return Ub.has(sb.product) ? "steamdeck" : "xbox";
        if (sb && ab[sb.vendor]) return ab[sb.vendor];
        if ((0, Wb.e)(bb)) return "nintendo";
        const Ib = `${bb} ${null!==cb&&void 0!==cb?cb:""}`.toLowerCase();
        return /dualsense|dualshock|playstation|sony/.test(Ib) ? "playstation" : /nintendo|switch|joy-con|pro controller/.test(Ib) ? "nintendo" : /steam deck/.test(Ib) ? "steamdeck" : "xbox"
      },
      Hb = bb => {
        var cb;
        return (null === (cb = (0, kb.b)(bb)) || void 0 === cb ? void 0 : cb.vendor) === Tb
      }
  },
  7812: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Hb,
      h: () => Ub
    });
    var kb = sb(7774);
    const Wb = ["capture", "keyboard", "wheel", "inventory", "cursor", "focus", "gameplay"],
      ab = new Set(["capture", "gameplay"]),
      Tb = ["Up", "Down", "Left", "Right"],
      Ub = bb => Tb.includes(bb),
      Ib = .25;
    const Hb = new class {
      constructor() {
        this.consumers = new Map, this.activeName = null, this.qU = new Array(kb.P).fill(!1), this.previousHeld = new Array(kb.P).fill(!1), this.consumedButtons = new Array(kb.P).fill(!1), this.suppressedReleases = new Array(kb.P).fill(!1), this.wakeOwned = new Array(kb.P).fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.peek = null, this.lastFrame = (0, kb.w)()
      }
      register(bb) {
        return this.consumers.has(bb.name) && console.warn(`Controller consumer "${bb.name}" registered twice; the newer one replaces it.`), this.consumers.set(bb.name, bb), () => {
          var cb;
          this.consumers.get(bb.name) === bb && (this.activeName === bb.name ? (this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()) : (null === (cb = this.peek) || void 0 === cb ? void 0 : cb.over) === bb.name && (this.peek = null), this.consumers.delete(bb.name))
        }
      }
      getActiveConsumerName() {
        return this.activeName
      }
      isButtonHeld(bb) {
        return this.qU[(0, kb.o)(bb)]
      }
      getLastFrame() {
        return this.lastFrame
      }
      clear() {
        this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()
      }
      reset() {
        this.deactivateCurrent(), this.activeName = null, this.qU = new Array(kb.P).fill(!1), this.previousHeld = new Array(kb.P).fill(!1), this.consumedButtons.fill(!1), this.suppressedReleases.fill(!1), this.wakeOwned.fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.lastFrame = (0, kb.w)()
      }
      dispatch(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.lastFrame = bb, this.previousHeld = this.qU, this.qU = (0, kb.t)(bb.values, this.previousHeld);
        for (let ab = 0; ab < kb.P; ab++) this.suppressedReleases[ab] = !this.qU[ab] && this.consumedButtons[ab], this.qU[ab] || (this.consumedButtons[ab] = !1), this.wakeOwned[ab] && (this.qU[ab] ? (this.consumedButtons[ab] = !0, this.wakeOwned[ab] = !1) : bb.values[ab] < kb.O && (this.wakeOwned[ab] = !1));
        Math.hypot(bb.leftStick.x, bb.leftStick.y) < Ib && (this.leftStickConsumed = !1), Math.hypot(bb.rightStick.x, bb.rightStick.y) < Ib && (this.rightStickConsumed = !1);
        const Wb = this.pickActive();
        if ((null === Wb || void 0 === Wb ? void 0 : Wb.name) !== this.activeName) {
          var Tb, Ub, Hb, fb, Mb, Xb;
          const bb = this.activeName,
            cb = {
              left: !this.leftStickConsumed,
              right: !this.rightStickConsumed
            },
            sb = null !== (Tb = null === Wb || void 0 === Wb || null === (Ub = Wb.peek) || void 0 === Ub ? void 0 : Ub.call(Wb)) && void 0 !== Tb ? Tb : null,
            ab = null === bb && !!sb && !(null === (Hb = this.consumers.get(sb.over)) || void 0 === Hb || !Hb.onPeekFrame),
            Ib = sb && (sb.over === bb || ab) ? sb : null,
            nb = null !== this.peek && this.peek.over === (null === Wb || void 0 === Wb ? void 0 : Wb.name) ? this.peek : null;
          this.deactivateCurrent(null !== Ib, null !== nb), this.activeName = null !== (fb = null === Wb || void 0 === Wb ? void 0 : Wb.name) && void 0 !== fb ? fb : null, null === bb || this.handOffPending || this.consumeAllHeld();
          const mb = null === (Mb = null !== Ib && void 0 !== Ib ? Ib : nb) || void 0 === Mb ? void 0 : Mb.stick;
          "left" === mb && cb.left ? this.leftStickConsumed = !1 : "right" === mb && cb.right && (this.rightStickConsumed = !1), this.peek = Ib, Wb || null === bb ? Wb && (null === (Xb = this.idleResume) || void 0 === Xb ? void 0 : Xb.name) === Wb.name && (this.idleResume.left && (this.leftStickConsumed = !1), this.idleResume.right && (this.rightStickConsumed = !1)) : this.idleResume = {
            name: bb,
            left: cb.left && this.leftStickConsumed,
            right: cb.right && this.rightStickConsumed
          }, Wb && (this.idleResume = null);
          for (let Wb = 0; Wb < kb.P; Wb++) this.previousHeld[Wb] && !this.qU[Wb] && (this.suppressedReleases[Wb] = !0)
        }
        var nb, mb;
        (this.handOffPending = !1, Wb) && (sb && !ab.has(Wb.name) && this.consumeWakePress(Wb), Wb.onFrame(this.buildInput(bb, cb, sb)), this.peek && (null === (nb = this.consumers.get(this.peek.over)) || void 0 === nb || null === (mb = nb.onPeekFrame) || void 0 === mb || mb.call(nb, this.buildInput(bb, cb, !1, this.peek.stick))))
      }
      consumeWakePress(bb) {
        for (let Wb = 0; Wb < kb.P; Wb++) {
          var cb, sb;
          const ab = kb.R[Wb];
          (null !== (cb = null === (sb = bb.wakePressActs) || void 0 === sb ? void 0 : sb.call(bb, ab)) && void 0 !== cb ? cb : Tb.includes(ab)) || (this.qU[Wb] ? this.consumedButtons[Wb] = !0 : this.lastFrame.values[Wb] >= kb.L && (this.wakeOwned[Wb] = !0))
        }
      }
      pickActive() {
        for (const bb of Wb) {
          const cb = this.consumers.get(bb);
          if (cb && cb.isActive()) return cb
        }
        return null
      }
      deactivateCurrent() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var sb, kb, Wb, ab;
        this.activeName && (null === (sb = this.consumers.get(this.activeName)) || void 0 === sb || null === (kb = sb.onDeactivate) || void 0 === kb || kb.call(sb, bb));
        this.peek && !cb && (null === (Wb = this.consumers.get(this.peek.over)) || void 0 === Wb || null === (ab = Wb.onDeactivate) || void 0 === ab || ab.call(Wb, !1));
        this.peek = null
      }
      consumeAllHeld() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.idleResume = null;
        for (let Wb = 0; Wb < kb.P; Wb++) this.qU[Wb] && (this.consumedButtons[Wb] = !0);
        const {
          leftStick: cb,
          rightStick: sb
        } = this.lastFrame;
        this.leftStickConsumed = "left" !== bb && (this.leftStickConsumed || Math.hypot(cb.x, cb.y) >= Ib), this.rightStickConsumed = "right" !== bb && (this.rightStickConsumed || Math.hypot(sb.x, sb.y) >= Ib)
      }
      handOffHeldInput() {
        this.handOffPending = !0
      }
      consumeButton(bb) {
        const cb = (0, kb.o)(bb);
        this.qU[cb] && (this.consumedButtons[cb] = !0)
      }
      buildInput(bb, cb, sb, Wb) {
        const ab = this.qU,
          Tb = this.previousHeld,
          Ub = Wb ? new Array(kb.P).fill(!0) : [...this.consumedButtons],
          Ib = Wb ? Ub : [...this.suppressedReleases],
          Hb = !this.leftStickConsumed && (!Wb || "left" === Wb),
          fb = !this.rightStickConsumed && (!Wb || "right" === Wb);
        return {
          frame: bb,
          dtMs: cb,
          isHeld: bb => {
            const cb = (0, kb.o)(bb);
            return ab[cb] && !Ub[cb]
          },
          wasPressed: bb => {
            const cb = (0, kb.o)(bb);
            return ab[cb] && !Tb[cb] && !Ub[cb]
          },
          wasReleased: bb => {
            const cb = (0, kb.o)(bb);
            return !ab[cb] && Tb[cb] && !Ib[cb]
          },
          value: cb => {
            const sb = (0, kb.o)(cb);
            return Ub[sb] ? 0 : bb.values[sb]
          },
          leftStick: Hb ? bb.leftStick : {
            x: 0,
            y: 0
          },
          rightStick: fb ? bb.rightStick : {
            x: 0,
            y: 0
          },
          wokeDevice: sb
        }
      }
    }
  },
  7789: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Mb.e,
      f: () => Mb.i,
      g: () => Bb,
      h: () => tb,
      i: () => yb,
      l: () => Pb
    });
    var kb = sb(64),
      Wb = sb(26),
      ab = sb(1423),
      Tb = sb(37),
      Ub = sb(7796),
      Ib = sb(7774),
      Hb = sb(7786),
      fb = sb(7771),
      Mb = sb(1943),
      Xb = sb(7801);
    const nb = {
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
      mb = "controllerSettings",
      lb = ["bindings", "promptFamily", "hideButtonHints", "swapSticks", "swapConfirmBack", "leaderboardButton"],
      Qb = ["auto", ...Ub.e],
      eb = (bb, cb) => "string" === typeof cb && bb.includes(cb),
      Cb = bb => cb => "number" === typeof cb && Number.isFinite(cb) ? (0, Xb.B)(cb, bb) : void 0,
      Nb = bb => "boolean" === typeof bb ? bb : void 0,
      Vb = bb => cb => eb(bb, cb) ? cb : void 0,
      Lb = {
        lookSensitivityX: Cb(Xb.tb),
        lookSensitivityY: Cb(Xb.tb),
        aimLookSensitivity: Cb(Xb.l),
        invertLookX: Nb,
        invertLookY: Nb,
        lookCurve: Vb(Ib.K),
        lookDeadzone: Cb(Xb.J),
        moveDeadzone: Cb(Xb.J),
        swapSticks: Nb,
        autoSprint: Nb,
        sneakMode: Vb(["toggle", "hold"]),
        tapHoldTime: Vb(["short", "medium", "long"]),
        attackMode: Vb(["hold", "toggle"]),
        promptFamily: Vb(Qb),
        hideButtonHints: Nb,
        vibration: Nb,
        cursorSpeed: Cb(Xb.F),
        cursorMagnetism: Nb,
        buttonRepeat: Vb(Ib.p),
        largePointer: Nb,
        menuBackToCategories: Nb,
        swapConfirmBack: Nb,
        menuNavigation: Vb(["hybrid", "focus", "cursor"]),
        inventoryNavigation: Vb(["hybrid", "slot", "cursor"]),
        quickChat: Vb(["wheel", "off"]),
        leaderboardButton: Vb(["shop", "leaderboard"]),
        gyroAiming: Nb,
        gyroSensitivity: Cb(Xb.Z),
        gyroActivation: Vb(["always", "aiming", "button"]),
        gyroButton: Vb(Ib.R),
        emoteButton: Vb(["tapHold", "wheel"])
      },
      ub = [{
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
      Yb = bb => {
        const cb = {};
        if ("object" !== typeof bb || null === bb) return cb;
        for (const [sb, kb] of Object.entries(bb)) Object.prototype.hasOwnProperty.call(Hb.g, sb) && eb(Ib.R, kb) && (cb[sb] = kb);
        return cb
      },
      hb = bb => {
        const cb = {};
        for (const sb of Object.keys(nb))("bindings" === sb ? Object.keys(bb.bindings).length > 0 : bb[sb] !== nb[sb]) && (cb[sb] = bb[sb]);
        0 !== Object.keys(cb).length ? Tb.h.setItem(mb, cb) : Tb.h.removeItem(mb)
      };
    let Jb = (() => {
        const bb = Tb.h.getItem(mb),
          cb = (bb => {
            const cb = "object" === typeof bb && null !== bb ? bb : {},
              sb = {
                ...nb,
                bindings: Yb(cb.bindings)
              };
            for (const Wb of Object.keys(Lb)) {
              const bb = Lb[Wb](cb[Wb]);
              void 0 !== bb && (sb[Wb] = bb)
            }
            const kb = Object.keys(cb).filter((bb => !!Object.prototype.hasOwnProperty.call(nb, bb) && ("bindings" === bb ? "object" !== typeof cb.bindings || null === cb.bindings || Object.keys(cb.bindings).length !== Object.keys(sb.bindings).length : sb[bb] !== cb[bb])));
            return kb.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${kb.join(", ")}`), sb
          })(bb);
        return null !== bb && void 0 !== bb && hb(cb), cb
      })(),
      gb = {
        ...Jb,
        ...(() => {
          if ("undefined" === typeof window) return {};
          const bb = {},
            cb = new URLSearchParams(window.location.search);
          for (const {
              param: sb,
              key: kb
            }
            of ub) {
            const Wb = Lb[kb](cb.get(sb));
            void 0 !== Wb && (bb[kb] = Wb)
          }
          return bb
        })()
      };
    const Bb = () => gb,
      tb = () => {
        var bb, cb;
        const sb = Bb().promptFamily;
        return "auto" !== sb ? sb : null !== (bb = null === (cb = fb.i.getActivePad()) || void 0 === cb ? void 0 : cb.family) && void 0 !== bb ? bb : "xbox"
      },
      yb = bb => {
        const cb = gb;
        Jb = {
          ...Jb,
          ...bb
        }, hb(Jb), gb = {
          ...gb,
          ...bb
        }, (bb => {
          Wb.j.QQ(Mb.i, gb), lb.some((cb => bb[cb] !== gb[cb])) && Wb.j.QQ(Mb.e, gb)
        })(cb)
      },
      Pb = () => {
        const [bb, cb] = (0, kb.useState)(gb);
        return (0, ab.f)(Mb.i, cb), bb
      }
  },
  8277: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Wb
    });
    const kb = new Set(["Alt", "AltGraph", "Meta", "OS", "AudioVolumeUp", "AudioVolumeDown", "AudioVolumeMute", "MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "BrowserBack", "BrowserForward", "BrowserHome", "GoBack", "LaunchApplication1", "LaunchApplication2", "LaunchMail", "PrintScreen", "Unidentified"]),
      Wb = bb => kb.has(bb)
  },
  7771: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => lb.b,
      i: () => Nb
    });
    var kb = sb(7774),
      Wb = sb(7777);
    const ab = .1,
      Tb = .3;
    class Ub {
      constructor() {
        this.deadzone = 0, this.anchor = null, this.steadyMs = 0, this.lastMs = null, this.returning = !0, this.anchorLearned = !1
      }
      observe(bb, cb) {
        const sb = null === this.lastMs ? 0 : Math.min(Math.max(0, cb - this.lastMs), 100);
        this.lastMs = cb;
        const kb = Math.hypot(bb.x, bb.y);
        if (kb >= Tb) return this.anchor = null, void(this.returning = !0);
        kb >= ab || (this.returning = !1);
        const Wb = this.anchor;
        if (!Wb || Math.hypot(bb.x - Wb.x, bb.y - Wb.y) > .03) return this.anchorLearned && (this.returning = !1), this.anchor = {
          x: bb.x,
          y: bb.y
        }, this.steadyMs = 0, void(this.anchorLearned = !1);
        if (this.steadyMs += sb, this.steadyMs < 1e3) return;
        const Ub = Math.max(kb, Math.hypot(Wb.x, Wb.y));
        Ub < ab ? this.deadzone = 0 : this.returning && (this.deadzone = Ub + .05, this.anchorLearned = !0)
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
    const Ib = (bb, cb) => {
        var sb, kb;
        return null !== (sb = bb && (null === (kb = Object.getOwnPropertyDescriptor(bb, cb)) || void 0 === kb ? void 0 : kb.get)) && void 0 !== sb ? sb : null
      },
      Hb = bb => {
        const cb = bb.vendorName;
        return "string" === typeof cb ? cb : void 0
      },
      fb = ((bb, cb) => {
        const sb = Ib(bb, "index"),
          kb = Ib(bb, "id"),
          Wb = Ib(bb, "connected"),
          ab = Ib(bb, "mapping"),
          Tb = Ib(bb, "buttons"),
          Ub = Ib(bb, "axes"),
          fb = Ib(cb, "pressed"),
          Mb = Ib(cb, "value");
        return sb && kb && Wb && ab && Tb && Ub && fb && Mb ? bb => {
          const cb = Tb.call(bb),
            Ib = Ub.call(bb),
            Xb = {
              index: Number(sb.call(bb)),
              id: String(kb.call(bb)),
              connected: !0 === Wb.call(bb),
              mapping: String(ab.call(bb)),
              buttons: [],
              axes: [],
              vendorName: Hb(bb)
            };
          for (let sb = 0; sb < cb.length; sb++) Xb.buttons.push({
            pressed: !0 === fb.call(cb[sb]),
            value: Number(Mb.call(cb[sb]))
          });
          for (let sb = 0; sb < Ib.length; sb++) Xb.axes.push(Number(Ib[sb]));
          return Xb
        } : null
      })("undefined" === typeof Gamepad ? null : Gamepad.prototype, "undefined" === typeof GamepadButton ? null : GamepadButton.prototype),
      Mb = "undefined" === typeof Navigator ? null : Navigator.prototype.getGamepads;
    var Xb = sb(1387),
      nb = sb(1393);
    const mb = bb => ({
      pressed: bb,
      value: bb ? 1 : 0
    });
    var lb = sb(1943);
    const Qb = Tb,
      eb = bb => {
        const cb = new Array(kb.P).fill(0);
        for (let sb = 0; sb < kb.P && sb < bb.buttons.length; sb++) {
          const Wb = bb.buttons[sb];
          cb[sb] = Wb.pressed && !(0, kb.J)(sb) ? Math.max(Wb.value, kb.x) : Wb.value
        }
        return cb
      },
      Cb = (bb, cb) => {
        var sb, kb;
        return {
          x: null !== (sb = bb.axes[cb]) && void 0 !== sb ? sb : 0,
          y: null !== (kb = bb.axes[cb + 1]) && void 0 !== kb ? kb : 0
        }
      };
    const Nb = new class {
      constructor(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : fb;
        this.readGamepads = bb, this.requireTrustedPads = cb, this.nativeReader = sb, this.running = !1, this.listening = !1, this.rafId = 0, this.lastTimestampMs = 0, this.activeInfo = null, this.slots = [], this.trustedIndices = new Set, this.warnedNonStandardIds = new Set, this.loggedReadError = !1, this.frameListeners = new Set, this.connectionListeners = new Set, this.anyPadConnected = !1, this.connectedListeners = new Set, this.handleConnectionEvent = bb => {
          bb.isTrusted && this.trustedIndices.add(bb.gamepad.index), this.wake()
        }, this.handleDisconnectionEvent = bb => {
          this.trustedIndices.delete(bb.gamepad.index)
        }, this.aX = bb => {
          if (this.rafId = 0, !this.running) return;
          const cb = 0 === this.lastTimestampMs ? 16 : Math.min(100, bb - this.lastTimestampMs);
          this.lastTimestampMs = bb;
          try {
            this.poll(bb, cb)
          } finally {
            this.anyPadConnected && (this.rafId = requestAnimationFrame(this.aX))
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
          cb = bb ? this.readPad(bb) : null;
        return cb && cb.id === this.activeInfo.id ? bb : null
      }
      poll(bb, cb) {
        var sb, Wb;
        const ab = this.readPads();
        let Tb = null,
          Ib = !1;
        const Hb = [],
          fb = Math.max(ab.length, this.slots.length);
        for (let Nb = 0; Nb < fb; Nb++) {
          var Mb;
          const cb = Nb < ab.length ? ab[Nb] : null,
            sb = cb ? this.readPad(cb) : null;
          if (!sb || !sb.connected || !this.isUsable(sb)) {
            this.slots[Nb] = null;
            continue
          }
          let Wb = this.slots[Nb];
          Wb && Wb.id === sb.id || (Wb = {
            id: sb.id,
            qU: [],
            leftSettled: !1,
            rightSettled: !1,
            leftRest: new Ub,
            rightRest: new Ub
          }, this.slots[Nb] = Wb);
          const fb = Cb(sb, 0),
            Xb = Cb(sb, 2);
          !Wb.leftSettled && Math.hypot(fb.x, fb.y) < Qb && (Wb.leftSettled = !0), !Wb.rightSettled && Math.hypot(Xb.x, Xb.y) < Qb && (Wb.rightSettled = !0), Wb.leftRest.observe(fb, bb), Wb.rightRest.observe(Xb, bb);
          const nb = eb(sb),
            mb = (0, kb.t)(nb, Wb.qU),
            lb = Wb.qU,
            Vb = mb.map(((bb, cb) => bb && !lb[cb]));
          Wb.qU = mb;
          const Lb = {
            pad: sb,
            slot: Wb,
            values: nb
          };
          Nb === (null === (Mb = this.activeInfo) || void 0 === Mb ? void 0 : Mb.index) && sb.id === this.activeInfo.id ? (Tb = Lb, Ib = Vb.includes(!0)) : Vb.includes(!0) && Hb.push({
            polled: Lb,
            rose: Vb
          })
        }
        const Xb = this.slots.some((bb => null !== bb));
        if (Xb !== this.anyPadConnected) {
          this.anyPadConnected = Xb;
          for (const bb of this.connectedListeners) bb()
        }
        const nb = null !== (sb = null === (Wb = Tb) || void 0 === Wb ? void 0 : Wb.slot.qU) && void 0 !== sb ? sb : [],
          mb = Ib ? void 0 : Hb.find((bb => {
            let {
              rose: cb
            } = bb;
            return cb.some(((bb, cb) => bb && !nb[cb]))
          }));
        if (mb ? (Tb = mb.polled, this.setActive(mb.polled.pad)) : this.activeInfo && !Tb && this.setActive(null), !Tb || !this.activeInfo) return;
        const lb = ((bb, cb) => {
          let {
            pad: sb,
            slot: Wb,
            values: ab
          } = bb;
          const Tb = (0, kb.w)(cb);
          return Tb.values = ab, Wb.leftSettled && (Tb.leftStick = Wb.leftRest.apply(Cb(sb, 0))), Wb.rightSettled && (Tb.rightStick = Wb.rightRest.apply(Cb(sb, 2))), Tb
        })(Tb, bb);
        for (const kb of this.frameListeners) kb(lb, cb, this.activeInfo)
      }
      readPad(bb) {
        const cb = this.readSnapshot(bb);
        return cb && (0, nb.i)(cb) ? (bb => {
          const cb = cb => {
              var sb;
              return null !== (sb = bb.buttons[cb]) && void 0 !== sb ? sb : mb(!1)
            },
            sb = cb => {
              var sb;
              return null !== (sb = bb.axes[cb]) && void 0 !== sb ? sb : 0
            },
            kb = bb.axes.length > 9,
            Wb = kb ? (bb => {
              const cb = 0 !== bb;
              return {
                up: cb && (bb >= -1 && bb < -.7 || bb >= .95 && bb <= 1),
                right: cb && bb >= -.75 && bb < -.1,
                down: cb && bb >= -.2 && bb < .45,
                left: cb && bb >= .4 && bb <= 1
              }
            })(sb(9)) : {
              up: sb(5) < -.5,
              down: sb(5) > .5,
              left: sb(4) < -.5,
              right: sb(4) > .5
            };
          return {
            ...bb,
            mapping: "standard",
            buttons: [cb(1), cb(2), cb(0), cb(3), cb(4), cb(5), cb(6), cb(7), cb(8), cb(9), cb(10), cb(11), mb(Wb.up), mb(Wb.down), mb(Wb.left), mb(Wb.right), cb(12)],
            axes: [sb(0), sb(1), sb(2), sb(kb ? 5 : 3)]
          }
        })(cb) : cb
      }
      readSnapshot(bb) {
        if (this.nativeReader) try {
          return this.nativeReader(bb)
        } catch {
          if (this.requireTrustedPads) return null
        }
        return this.requireTrustedPads ? null : (bb => {
          const cb = bb;
          return {
            index: cb.index,
            id: cb.id,
            connected: cb.connected,
            mapping: cb.mapping,
            buttons: Array.from(cb.buttons, (bb => ({
              pressed: bb.pressed,
              value: bb.value
            }))),
            axes: Array.from(cb.axes),
            vendorName: Hb(bb)
          }
        })(bb)
      }
      isUsable(bb) {
        return !(0, Xb.g)(bb.id) && ("standard" !== bb.mapping ? (this.warnedNonStandardIds.has(bb.id) || (this.warnedNonStandardIds.add(bb.id), console.warn(`Controller "${bb.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.trustedIndices.has(bb.index))
      }
      setActive(bb) {
        this.activeInfo = bb ? {
          index: bb.index,
          id: bb.id,
          family: (0, Wb.c)(bb.id, bb.vendorName)
        } : null;
        for (const cb of this.connectionListeners) cb(this.activeInfo)
      }
      readPads() {
        try {
          return this.readGamepads()
        } catch (bb) {
          return this.loggedReadError || (this.loggedReadError = !0, console.warn("Reading gamepads failed; controller input is unavailable.", bb)), []
        }
      }
      wake() {
        this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.aX))
      }
    }((() => Mb ? Mb.call(navigator) : []), !0);
    Nb.listenForConnections()
  },
  8285: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => kb
    });
    const kb = {
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
  8375: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Tb,
      e: () => Ub
    });
    var kb = sb(26),
      Wb = sb(8359);
    let ab = !1;
    const Tb = () => ab,
      Ub = bb => {
        bb !== ab && (ab = bb, kb.j.QQ(Wb.n, ab))
      }
  },
  8366: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Ub,
      d: () => Ib
    });
    var kb = sb(26),
      Wb = sb(8359);
    let ab = null,
      Tb = 0;
    const Ub = () => ab,
      Ib = bb => {
        null === bb && null === ab || (ab = null === bb ? null : {
          id: ++Tb,
          holdMs: bb
        }, kb.j.QQ(Wb.q, ab))
      }
  },
  8379: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Tb,
      h: () => Ub
    });
    var kb = sb(26),
      Wb = sb(8359);
    let ab = !1;
    const Tb = () => ab,
      Ub = bb => {
        bb !== ab && (ab = bb, kb.j.QQ(Wb.s, ab))
      }
  },
  8442: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Tb,
      h: () => Ub
    });
    var kb = sb(26),
      Wb = sb(8359);
    let ab = !1;
    const Tb = () => ab,
      Ub = bb => {
        bb !== ab && (ab = bb, kb.j.QQ(Wb.t, ab))
      }
  },
  8315: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => kb
    });
    class kb {
      constructor() {
        this.downAtMs = null
      }
      update(bb, cb, sb, kb) {
        if (bb) return this.downAtMs = sb, null;
        if (null === this.downAtMs) return null;
        const Wb = sb - this.downAtMs >= kb;
        return cb ? Wb ? (this.downAtMs = null, "hold") : null : (this.downAtMs = null, Wb ? "hold" : "tap")
      }
      release() {
        this.downAtMs = null
      }
    }
  },
  7820: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Mb,
      f: () => Xb,
      g: () => Ub,
      h: () => Nb,
      l: () => Cb
    });
    var kb = sb(37),
      Wb = sb(7796),
      ab = sb(7774);
    const Tb = (() => {
        try {
          return sb(7826)
        } catch {
          return null
        }
      })(),
      Ub = [...ab.R, "LeftStick", "RightStick"],
      Ib = new Map,
      Hb = {
        xbox: "xbox",
        playstation: "playstation",
        nintendo: "nintendo",
        steamdeck: "steamdeck",
        generic: "xbox"
      },
      fb = (new Set(Object.values(Hb)), {
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
      Mb = (bb, cb) => {
        var sb, kb;
        return null !== (sb = null === (kb = fb[Hb[bb]]) || void 0 === kb ? void 0 : kb[cb]) && void 0 !== sb ? sb : 1
      },
      Xb = (bb, cb) => {
        const sb = `./${Hb[bb]}/${cb}.svg`;
        let kb = Ib.get(sb);
        return void 0 === kb && (kb = Tb ? Tb(sb) : "", Ib.set(sb, kb)), kb
      },
      nb = new Set,
      mb = [],
      lb = bb => {
        if (!nb.has(bb)) {
          nb.add(bb);
          for (const cb of Ub) {
            const sb = Xb(bb, cb);
            if (sb) {
              const bb = new Image;
              bb.crossOrigin = "anonymous", bb.src = sb, mb.push(bb)
            }
          }
        }
      },
      Qb = "controllerGlyphFamily";
    let eb = null;
    const Cb = bb => {
        bb !== eb && (eb = bb, kb.h.setItem(Qb, bb), lb(bb))
      },
      Nb = () => {
        const bb = kb.h.getItem(Qb);
        (0, Wb.i)(bb) && bb !== eb && (eb = bb, lb(bb))
      }
  },
  8468: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Zb,
      g: () => zb
    });
    var kb = sb(64),
      Wb = sb(26),
      ab = sb(1423),
      Tb = sb(7782),
      Ub = sb(7771),
      Ib = sb(7812),
      Hb = sb(7789);
    const fb = {
        x: 0,
        y: 0,
        z: 0
      },
      Mb = Math.PI / 180,
      Xb = bb => Math.hypot(bb.x, bb.y, bb.z),
      nb = (bb, cb) => ({
        x: bb.x * cb,
        y: bb.y * cb,
        z: bb.z * cb
      }),
      mb = (bb, cb) => ({
        x: bb.x + cb.x,
        y: bb.y + cb.y,
        z: bb.z + cb.z
      }),
      lb = (bb, cb) => ({
        x: bb.x - cb.x,
        y: bb.y - cb.y,
        z: bb.z - cb.z
      }),
      Qb = bb => {
        const cb = Xb(bb);
        return 0 === cb ? fb : nb(bb, 1 / cb)
      },
      eb = bb => ({
        min: {
          ...bb
        },
        max: {
          ...bb
        }
      }),
      Cb = (bb, cb) => ({
        min: {
          x: Math.min(bb.min.x, cb.x),
          y: Math.min(bb.min.y, cb.y),
          z: Math.min(bb.min.z, cb.z)
        },
        max: {
          x: Math.max(bb.max.x, cb.x),
          y: Math.max(bb.max.y, cb.y),
          z: Math.max(bb.max.z, cb.z)
        }
      }),
      Nb = (bb, cb) => bb.max.x - bb.min.x <= cb && bb.max.y - bb.min.y <= cb && bb.max.z - bb.min.z <= cb;
    class Vb {
      constructor() {
        this.bias = fb, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = fb, this.windowSec = 0
      }
      update(bb) {
        const cb = this.gyroRange ? Cb(this.gyroRange, bb.gyro) : eb(bb.gyro),
          sb = bb.accel ? this.accelRange ? Cb(this.accelRange, bb.accel) : eb(bb.accel) : null;
        if (!Nb(cb, 1) || sb && !Nb(sb, .01)) return void this.restartWindow(bb);
        if (this.gyroRange = cb, this.accelRange = sb, this.sum = mb(this.sum, nb(bb.gyro, bb.dtSec)), this.windowSec += bb.dtSec, this.windowSec < 1) return;
        const kb = nb(this.sum, 1 / this.windowSec);
        if (Xb(kb) > 5) return;
        const Wb = lb(kb, this.bias);
        let ab = 0;
        !this.calibrated || this.windowSec >= 3 ? ab = 1 : Xb(Wb) <= 1 && (ab = Math.min(1, bb.dtSec / 1)), this.bias = mb(this.bias, nb(Wb, ab)), this.calibrated = this.calibrated || ab > 0
      }
      correct(bb) {
        return lb(bb, this.bias)
      }
      getBias() {
        return this.bias
      }
      isCalibrated() {
        return this.calibrated
      }
      reset() {
        this.bias = fb, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = fb, this.windowSec = 0
      }
      restartWindow(bb) {
        this.gyroRange = eb(bb.gyro), this.accelRange = bb.accel ? eb(bb.accel) : null, this.sum = fb, this.windowSec = 0
      }
    }
    class Lb {
      constructor() {
        this.down = null
      }
      update(bb, cb, sb) {
        const kb = Qb(nb(cb, -1));
        if (!this.down) return this.down = kb, kb;
        const Wb = nb(bb, Mb * sb),
          ab = this.down,
          Tb = {
            x: ab.x - (Wb.y * ab.z - Wb.z * ab.y),
            y: ab.y - (Wb.z * ab.x - Wb.x * ab.z),
            z: ab.z - (Wb.x * ab.y - Wb.y * ab.x)
          },
          Ub = 0 === Xb(kb) ? 0 : Math.min(1, sb / .25);
        var Ib, Hb;
        return this.down = Qb((Hb = Ub, mb(Ib = Tb, nb(lb(kb, Ib), Hb)))), this.down
      }
      reset() {
        this.down = null
      }
    }
    class ub {
      constructor() {
        this.entries = [], this.windowSec = 0
      }
      apply(bb, cb, sb) {
        const kb = Math.hypot(bb, cb),
          Wb = Math.max(0, Math.min(1, (kb - 2) / 2)),
          ab = {
            yaw: bb * (1 - Wb),
            pitch: cb * (1 - Wb),
            dtSec: sb
          };
        for (this.entries.push(ab), this.windowSec += sb; this.entries.length > 1 && this.windowSec - this.entries[0].dtSec >= .125;) this.windowSec -= this.entries[0].dtSec, this.entries.shift();
        let Tb = 0,
          Ub = 0;
        for (const Hb of this.entries) Tb += Hb.yaw * Hb.dtSec, Ub += Hb.pitch * Hb.dtSec;
        const Ib = this.windowSec > 0 ? {
          yaw: Tb / this.windowSec,
          pitch: Ub / this.windowSec
        } : {
          yaw: ab.yaw,
          pitch: ab.pitch
        };
        return {
          yaw: bb * Wb + Ib.yaw,
          pitch: cb * Wb + Ib.pitch
        }
      }
      reset() {
        this.entries = [], this.windowSec = 0
      }
    }
    class Yb {
      constructor() {
        this.calibrator = new Vb, this.gravity = new Lb, this.smoother = new ub
      }
      process(bb, cb, sb) {
        const kb = Math.max(0, Math.min(.05, cb));
        this.calibrator.update({
          ...bb,
          dtSec: kb
        });
        const Wb = this.calibrator.correct(bb.gyro);
        let ab = Wb.y;
        "player" === sb && bb.accel && (ab = ((bb, cb) => {
          const sb = bb.y * cb.y + bb.z * cb.z;
          return -Math.sign(sb) * Math.min(1.41 * Math.abs(sb), Math.hypot(bb.y, bb.z))
        })(Wb, this.gravity.update(Wb, bb.accel, kb)));
        const Tb = this.smoother.apply(ab, Wb.x, kb),
          Ub = ((bb, cb) => {
            const sb = Math.hypot(bb, cb);
            if (sb >= 1) return {
              yaw: bb,
              pitch: cb
            };
            const kb = sb / 1;
            return {
              yaw: bb * kb,
              pitch: cb * kb
            }
          })(Tb.yaw, Tb.pitch);
        return {
          yawDeg: Ub.yaw * kb,
          pitchDeg: Ub.pitch * kb
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
    const hb = (bb, cb) => {
      var sb, kb, Wb;
      const ab = cb * Mb,
        Tb = null !== (sb = bb.beta) && void 0 !== sb ? sb : 0,
        Ub = null !== (kb = bb.gamma) && void 0 !== kb ? kb : 0;
      return {
        x: Tb * Math.cos(ab) - Ub * Math.sin(ab),
        y: Tb * Math.sin(ab) + Ub * Math.cos(ab),
        z: null !== (Wb = bb.alpha) && void 0 !== Wb ? Wb : 0
      }
    };
    var Jb = sb(8475);
    class gb {
      constructor(bb, cb, sb) {
        this.hid = bb, this.sink = cb, this.onControllersChanged = sb, this.controllers = new Map, this.running = !1, this.openedCount = 0, this.opening = new Set, this.disconnectedWhileOpening = new Set, this.switchPacketCounter = 0, this.onConnect = bb => {
          this.openController(bb.device).catch((bb => {
            console.warn("Could not open motion controller", bb)
          }))
        }, this.onDisconnect = bb => {
          this.opening.has(bb.device) && this.disconnectedWhileOpening.add(bb.device);
          const cb = this.controllers.get(bb.device);
          cb && (this.forget(cb), this.onControllersChanged())
        }
      }
      async start() {
        if (this.running) return;
        this.running = !0, this.hid.addEventListener("connect", this.onConnect), this.hid.addEventListener("disconnect", this.onDisconnect);
        const bb = await this.hid.getDevices();
        for (const cb of bb) await this.openController(cb).catch((bb => {
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
          filters: Jb.m
        });
        let cb = 0;
        for (const sb of bb) await this.openController(sb).catch((bb => {
          console.warn("Could not open motion controller", bb), cb++
        }));
        return cb
      }
      async hasGrantedController() {
        return (await this.hid.getDevices()).some((bb => null !== (0, Jb.i)(bb.vendorId, bb.productId)))
      }
      getConnectedKinds() {
        return [...this.controllers.values()].map((bb => bb.kind))
      }
      forget(bb) {
        bb.device.removeEventListener("inputreport", bb.onReport), this.controllers.get(bb.device) === bb && this.controllers.delete(bb.device)
      }
      async openController(bb) {
        const cb = (0, Jb.i)(bb.vendorId, bb.productId);
        if (!cb || !this.running || this.controllers.has(bb) || this.opening.has(bb)) return;
        this.opening.add(bb);
        let sb = !1;
        try {
          bb.opened || await bb.open()
        } finally {
          this.opening.delete(bb), sb = this.disconnectedWhileOpening.delete(bb)
        }
        if (sb) return void bb.close().catch((bb => {
          console.debug("Could not close an unplugged motion controller", bb)
        }));
        if (!this.running) return;
        const kb = {
          device: bb,
          kind: cb,
          lastClock: null,
          lastEventMs: null,
          lastReadingMs: -1 / 0,
          openedOrder: this.openedCount++,
          onReport: bb => {
            this.onReport(kb, bb)
          }
        };
        this.controllers.set(bb, kb), bb.addEventListener("inputreport", kb.onReport), this.onControllersChanged();
        try {
          await this.enableMotion(kb)
        } catch (Wb) {
          console.warn(`Could not turn on motion for ${cb}`, Wb), this.controllers.get(bb) === kb && (this.forget(kb), this.onControllersChanged())
        }
      }
      async enableMotion(bb) {
        let {
          device: cb,
          kind: sb
        } = bb;
        if ((0, Jb.k)(sb))
          for (const kb of Jb.v[sb]) await cb.receiveFeatureReport(kb).catch((bb => {
            console.debug(`Motion controller feature report ${kb} unavailable`, bb)
          }));
        else
          for (let kb = 0; kb < 2; kb++)
            for (const {
                subcommand: bb,
                args: sb
              }
              of Jb.w) await cb.sendReport(Jb.x, (0, Jb.e)(this.switchPacketCounter++, bb, sb)), await new Promise((bb => {
              setTimeout(bb, 60)
            }))
      }
      onReport(bb, cb) {
        const sb = (0, Jb.r)(bb.kind, cb.reportId, cb.data, bb.device.productId);
        if (!sb) return;
        const kb = null === bb.lastEventMs ? 0 : (cb.timeStamp - bb.lastEventMs) / 1e3;
        bb.lastEventMs = cb.timeStamp;
        let Wb = sb.dtSec;
        if (null !== Wb && kb > 0 && (Wb = Math.max(.001, Math.min(.017, kb / sb.readings.length))), null === Wb && null !== sb.sensorClock && (0, Jb.k)(bb.kind)) {
          const cb = (0, Jb.s)(bb.kind, bb.lastClock, sb.sensorClock);
          bb.lastClock = sb.sensorClock, Wb = 0 === cb ? null : cb
        }
        if (bb.lastReadingMs = cb.timeStamp, this.isPreferred(bb, cb.timeStamp))
          for (const Tb of sb.readings) {
            var ab;
            this.sink(Tb, null !== (ab = Wb) && void 0 !== ab ? ab : kb, `hid${bb.openedOrder}`)
          }
      }
      isPreferred(bb, cb) {
        const sb = bb => 1e6 * Jb.p[bb.kind] + bb.openedOrder;
        for (const kb of this.controllers.values())
          if (kb !== bb && cb - kb.lastReadingMs < 500 && sb(kb) < sb(bb)) return !1;
        return !0
      }
    }
    var Bb = sb(117);
    const tb = () => DeviceMotionEvent,
      yb = () => "undefined" !== typeof window && "undefined" !== typeof DeviceMotionEvent && window.isSecureContext && (0, Bb.isMobile)(),
      Pb = () => {
        var bb;
        const cb = null === (bb = window.screen.orientation) || void 0 === bb ? void 0 : bb.angle;
        return "number" === typeof cb ? cb : "number" === typeof window.orientation ? window.orientation : 0
      };
    class Db {
      constructor(bb, cb) {
        this.sink = bb, this.onStateChanged = cb, this.state = "off", this.lastEventMs = null, this.noSensorTimer = null, this.wanted = !1, this.permissionRequest = null, this.granted = !1, this.onGesture = () => {
          this.requestPermission().catch((bb => {
            console.warn("Could not enable the motion sensor", bb)
          }))
        }, this.onMotion = bb => {
          const cb = bb.rotationRate;
          if (!cb || null === cb.alpha && null === cb.beta && null === cb.gamma) return;
          const sb = null === this.lastEventMs ? 0 : (bb.timeStamp - this.lastEventMs) / 1e3;
          this.lastEventMs = bb.timeStamp, this.clearNoSensorTimer(), this.setState("on"), this.sink({
            gyro: hb(cb, Pb()),
            accel: null
          }, sb, "phone")
        }
      }
      getState() {
        return this.state
      }
      start() {
        if (this.wanted = !0, "off" === this.state) return "function" !== typeof tb().requestPermission || this.granted ? void this.listen() : (this.setState("needsPermission"), void this.armGestureRequest())
      }
      requestPermission() {
        return this.permissionRequest || (this.permissionRequest = this.askPermission().finally((() => {
          this.permissionRequest = null
        }))), this.permissionRequest
      }
      async askPermission() {
        const bb = tb().requestPermission;
        if (!this.wanted) return;
        if ("function" !== typeof bb) return void this.listen();
        let cb;
        this.disarmGestureRequest();
        try {
          cb = await bb.call(DeviceMotionEvent)
        } catch (sb) {
          throw this.wanted && "needsPermission" === this.state && this.armGestureRequest(), sb
        }
        this.wanted && ("granted" === cb ? (this.granted = !0, this.listen()) : this.setState("denied"))
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
    const Eb = "controllerGyroStatusChanged",
      ib = {
        Eu: 0,
        bY: 0
      },
      Ob = bb => {
        var cb, sb;
        return "undefined" === typeof document || (null === (cb = null === (sb = document.featurePolicy) || void 0 === sb ? void 0 : sb.allowsFeature(bb)) || void 0 === cb || cb)
      };
    class Gb {
      constructor() {
        this.processor = new Yb, this.hid = void 0, this.hidBlocked = void 0, this.phone = void 0, this.phoneBlocked = void 0, this.source = null, this.pendingYawDeg = 0, this.pendingPitchDeg = 0, this.lastDrainMs = -1 / 0, this.lastHidReadingMs = -1 / 0, this.running = !1, this.phoneRunning = !1, this.syncWithSettings = bb => {
          const cb = bb.gyroAiming && Ub.i.hasConnectedPad();
          var sb, kb;
          cb !== this.phoneRunning && (this.phoneRunning = cb, cb ? null === (sb = this.phone) || void 0 === sb || sb.start() : null === (kb = this.phone) || void 0 === kb || kb.stop());
          if (bb.gyroAiming !== this.running) {
            var Wb, ab;
            if (this.running = bb.gyroAiming, this.running) null === (Wb = this.hid) || void 0 === Wb || Wb.start().catch((bb => {
              console.warn("Could not open motion controllers", bb)
            }));
            else null === (ab = this.hid) || void 0 === ab || ab.stop(), this.processor.reset(), this.source = null, this.discardPending();
            this.publishStatus()
          }
        }, this.publishStatus = () => {
          Wb.j.QQ(Eb, this.getStatus())
        };
        const bb = (() => {
            var bb;
            return "undefined" !== typeof navigator && window.isSecureContext && null !== (bb = navigator.hid) && void 0 !== bb ? bb : null
          })(),
          cb = Ob("hid");
        this.hidBlocked = null !== bb && !cb, this.hid = bb && cb ? new gb(bb, ((bb, cb, sb) => {
          this.lastHidReadingMs = performance.now(), this.feed(bb, cb, "player", sb)
        }), this.publishStatus) : null;
        const sb = Ob("accelerometer") && Ob("gyroscope");
        this.phoneBlocked = yb() && !sb, this.phone = yb() && sb ? new Db(((bb, cb, sb) => {
          performance.now() - this.lastHidReadingMs >= 500 && this.feed(bb, cb, "local", sb)
        }), this.publishStatus) : null, Wb.j.subscribe(Hb.f, this.syncWithSettings), Ub.i.onConnectedPadsChanged((() => {
          this.syncWithSettings((0, Hb.g)()), this.publishStatus()
        })), this.syncWithSettings((0, Hb.g)())
      }
      isSupported() {
        return null !== this.hid || null !== this.phone
      }
      getStatus() {
        var bb, cb, sb, kb;
        return {
          hidSupported: null !== this.hid,
          hidBlocked: this.hidBlocked,
          phoneSupported: null !== this.phone,
          phoneBlocked: this.phoneBlocked,
          controllers: null !== (bb = null === (cb = this.hid) || void 0 === cb ? void 0 : cb.getConnectedKinds()) && void 0 !== bb ? bb : [],
          phoneMotion: null !== (sb = null === (kb = this.phone) || void 0 === kb ? void 0 : kb.getState()) && void 0 !== sb ? sb : "off",
          padConnected: Ub.i.hasConnectedPad()
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
        const cb = {
          yawDeg: this.pendingYawDeg,
          pitchDeg: this.pendingPitchDeg
        };
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0;
        const sb = (0, Hb.g)();
        return sb.gyroAiming && (bb => {
          let {
            activation: cb,
            isHeld: sb,
            useButton: kb,
            gyroButton: Wb
          } = bb;
          return "always" === cb || sb("aiming" === cb ? kb : Wb)
        })({
          activation: sb.gyroActivation,
          isHeld: bb => Ib.e.isButtonHeld(bb),
          useButton: (0, Tb.i)("use"),
          gyroButton: sb.gyroButton
        }) ? ((bb, cb) => ({
          Eu: -bb.yawDeg * cb * Mb,
          bY: -bb.pitchDeg * cb * Mb
        }))(cb, sb.gyroSensitivity) : ib
      }
      discardPending() {
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0
      }
      injectMotion(bb, cb) {
        this.feed(bb, cb, "local", "injected")
      }
      getCalibration() {
        return this.processor.getCalibration()
      }
      feed(bb, cb, sb, kb) {
        this.source !== kb && (this.processor.reset(), this.source = kb);
        const Wb = this.processor.process(bb, cb, sb);
        this.pendingYawDeg += Wb.yawDeg, this.pendingPitchDeg += Wb.pitchDeg
      }
    }
    let Kb = null;
    const Zb = () => (Kb || (Kb = new Gb), Kb),
      zb = () => {
        const [bb, cb] = (0, kb.useState)((() => Zb().getStatus()));
        return (0, ab.f)(Eb, cb), (0, kb.useEffect)((() => {
          cb(Zb().getStatus())
        }), []), bb
      }
  },
  8475: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Lb,
      i: () => Ib,
      k: () => kb,
      m: () => Ub,
      o: () => Hb,
      p: () => fb,
      r: () => Cb,
      s: () => Qb,
      v: () => Yb,
      w: () => ub,
      x: () => Nb
    });
    const kb = bb => "dualShock4" === bb || "dualSense" === bb,
      Wb = 1356,
      ab = 1406,
      Tb = [{
        vendorId: Wb,
        productId: 1476,
        kind: "dualShock4"
      }, {
        vendorId: Wb,
        productId: 2508,
        kind: "dualShock4"
      }, {
        vendorId: Wb,
        productId: 2976,
        kind: "dualShock4"
      }, {
        vendorId: Wb,
        productId: 3302,
        kind: "dualSense"
      }, {
        vendorId: Wb,
        productId: 3570,
        kind: "dualSense"
      }, {
        vendorId: ab,
        productId: 8201,
        kind: "switchPro"
      }, {
        vendorId: ab,
        productId: 8198,
        kind: "joyConLeft"
      }, {
        vendorId: ab,
        productId: 8199,
        kind: "joyConRight"
      }],
      Ub = Tb.map((bb => {
        let {
          vendorId: cb,
          productId: sb
        } = bb;
        return {
          vendorId: cb,
          productId: sb
        }
      })),
      Ib = (bb, cb) => {
        var sb, kb;
        return null !== (sb = null === (kb = Tb.find((sb => sb.vendorId === bb && sb.productId === cb))) || void 0 === kb ? void 0 : kb.kind) && void 0 !== sb ? sb : null
      },
      Hb = {
        dualShock4: "DualShock 4",
        dualSense: "DualSense",
        switchPro: "Switch Pro Controller",
        joyConLeft: "Joy-Con (L)",
        joyConRight: "Joy-Con (R)"
      },
      fb = {
        dualSense: 0,
        dualShock4: 0,
        switchPro: 0,
        joyConRight: 1,
        joyConLeft: 2
      },
      Mb = 2e3 / 32767,
      Xb = 1 / 8192,
      nb = 936 / 13371,
      mb = (bb, cb, sb) => ({
        x: bb.getInt16(cb, !0) * sb,
        y: bb.getInt16(cb + 2, !0) * sb,
        z: bb.getInt16(cb + 4, !0) * sb
      }),
      lb = bb => 0 === bb.x && 0 === bb.y && 0 === bb.z,
      Qb = (bb, cb, sb) => null === cb ? null : "dualShock4" === bb ? 16 * (sb - cb & 65535) / 3 / 1e6 : (sb - cb >>> 0) / 3 / 1e6,
      eb = (bb, cb) => "joyConRight" === cb ? {
        x: bb.y,
        y: -bb.z,
        z: -bb.x
      } : {
        x: -bb.y,
        y: bb.z,
        z: -bb.x
      },
      Cb = (bb, cb, sb, Wb) => kb(bb) ? ((bb, cb, sb, kb) => {
        const Wb = ((bb, cb, sb) => "dualShock4" === bb ? 1 === cb && sb >= 63 ? 0 : 17 === cb && sb >= 65 ? 2 : null : 1 === cb && sb >= 62 ? 0 : 49 === cb && sb >= 63 ? 1 : null)(bb, cb, sb.byteLength);
        if (null === Wb) return null;
        if (2976 === kb && 1 === cb && 0 !== (4 & sb.getUint8(30))) return null;
        const ab = Wb + ("dualShock4" === bb ? 12 : 15),
          Tb = mb(sb, ab, Mb),
          Ub = mb(sb, ab + 6, Xb);
        return lb(Tb) && lb(Ub) ? null : {
          readings: [{
            gyro: Tb,
            accel: Ub
          }],
          dtSec: null,
          sensorClock: "dualShock4" === bb ? sb.getUint16(Wb + 9, !0) : sb.getUint32(Wb + 27, !0)
        }
      })(bb, cb, sb, Wb) : ((bb, cb, sb) => {
        if (48 !== cb && 49 !== cb || sb.byteLength < 48) return null;
        const kb = [];
        for (let Wb = 0; Wb < 3; Wb++) {
          const cb = mb(sb, 12 + 12 * Wb, 244e-6),
            ab = mb(sb, 18 + 12 * Wb, nb);
          if (lb(ab) && lb(cb)) return null;
          kb.push({
            gyro: eb(ab, bb),
            accel: eb(cb, bb)
          })
        }
        return {
          readings: kb,
          dtSec: .005,
          sensorClock: null
        }
      })(bb, cb, sb),
      Nb = 1,
      Vb = [0, 1, 64, 64, 0, 1, 64, 64],
      Lb = (bb, cb, sb) => new Uint8Array([15 & bb, ...Vb, cb, ...sb]),
      ub = [{
        subcommand: 64,
        args: [1]
      }, {
        subcommand: 3,
        args: [48]
      }],
      Yb = {
        dualShock4: [2, 5],
        dualSense: [5]
      }
  },
  7814: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => tb,
      f: () => Gb,
      g: () => eb,
      k: () => nb.g,
      m: () => Db,
      n: () => Pb,
      p: () => Cb,
      r: () => Eb,
      u: () => nb.k,
      y: () => nb.l,
      B: () => Kb,
      D: () => nb.n,
      F: () => hb
    });
    var kb = sb(64),
      Wb = sb(19),
      ab = sb(26),
      Tb = sb(1423),
      Ub = sb(1287),
      Ib = sb(7789),
      Hb = sb(7818),
      fb = sb(7777),
      Mb = sb(7771),
      Xb = sb(7820),
      nb = sb(1371),
      mb = sb(7774),
      lb = sb(8277),
      Qb = sb(4138);
    const eb = bb => !bb.repeat && !(0, lb.e)(bb.key),
      Cb = "PadHidesCursor";
    let Nb = !1;
    const Vb = bb => {
        bb !== Nb && (Nb = bb, document.documentElement.classList.toggle(Cb, bb))
      },
      Lb = new class {
        constructor() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
        observe(bb) {
          let cb = !1,
            sb = !1;
          bb.values.forEach(((bb, kb) => {
            const Wb = bb >= (this.buttonsDown[kb] ? mb.O : mb.L);
            Wb && !this.buttonsDown[kb] && (cb = !0, sb = !0), this.buttonsDown[kb] = Wb
          }));
          return [bb.leftStick, bb.rightStick].forEach(((bb, kb) => {
            const Wb = this.stickAnchors[kb];
            Math.hypot(bb.x, bb.y) < (Wb ? mb.O : .3) ? this.stickAnchors[kb] = null : (!Wb || Math.hypot(bb.x - Wb.x, bb.y - Wb.y) >= .3) && (this.stickAnchors[kb] = {
              x: bb.x,
              y: bb.y
            }, cb = !0, sb ||= !Wb)
          })), cb && (this.lastActivityMs = bb.timestampMs), this.onlyMovedOn = cb && !sb, cb
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
    let ub = null,
      Yb = !1;
    const hb = () => Yb;
    let Jb = null,
      gb = !1,
      Bb = null;
    const tb = () => Bb;
    let yb = !1;
    const Pb = bb => {
        if (!Lb.observe(bb)) return !1;
        if (yb && Lb.wasOnlyMoveOn() && !(0, nb.g)()) return !1;
        yb = !1, Yb = !1;
        const cb = !(0, nb.g)();
        return cb && (ub = bb, Bb = !Nb && gb && Jb ? {
          ...Jb
        } : null), gb = !1, (0, nb.k)("gamepad"), Vb(!0), (0, Xb.l)((0, Ib.h)()), cb
      },
      Db = bb => !(0, nb.g)() || bb === ub,
      Eb = () => {
        Lb.reset()
      },
      ib = () => {
        const bb = Wb.d.get("activeInputDevice"),
          cb = "gamepad" === bb ? Mb.i.getActivePad() : null;
        return {
          device: bb,
          inGame: (0, Ub.r)(),
          padMovesMouse: null !== cb && (0, fb.e)(cb.id)
        }
      },
      Ob = bb => {
        document.pointerLockElement ? Jb = null : (Jb ??= {
          x: 0,
          y: 0
        }, Jb.x = bb.clientX, Jb.y = bb.clientY)
      },
      Gb = () => {
        const bb = new Qb.d,
          cb = cb => {
            bb.reset(), yb = !1, (0, nb.k)(cb)
          },
          sb = bb => {
            if (bb.isTrusted) {
              if (bb instanceof KeyboardEvent) {
                if ((0, nb.j)(bb), !eb(bb)) return;
                Yb = !0
              }
              if (bb instanceof PointerEvent && "touch" === bb.pointerType) return Jb = null, void cb("touch");
              bb instanceof PointerEvent && (Ob(bb), gb = !0), ("pointerdown" !== bb.type || (bb => {
                let {
                  device: cb,
                  inGame: sb,
                  padMovesMouse: kb
                } = bb;
                return !("gamepad" === cb && kb && sb)
              })(ib())) && cb("keyboardMouse")
            }
          },
          kb = bb => {
            bb.isTrusted && (Jb = null, cb("touch"))
          },
          Tb = bb => {
            bb.isTrusted && "touch" !== bb.pointerType && !bb.relatedTarget && (Jb = null)
          },
          Ub = sb => {
            if (!sb.isTrusted || "touch" === sb.pointerType) return;
            Ob(sb);
            const kb = sb.movementX || 0,
              ab = sb.movementY || 0;
            if (0 === kb && 0 === ab) return;
            if (gb = !0, Vb(!1), "keyboardMouse" === Wb.d.get("activeInputDevice")) return;
            const Tb = Lb.isHolding(sb.timeStamp),
              Ub = ib(),
              Ib = (bb => {
                let {
                  device: cb,
                  inGame: sb,
                  padMovesMouse: kb,
                  padHolding: Wb
                } = bb;
                return ("gamepad" !== cb || !kb) && "keyboardMouse" !== cb && (sb || !Wb)
              })({
                ...Ub,
                inGame: Ub.inGame && (0, Hb.i)(),
                padHolding: Tb
              });
            Ib && bb.add(kb, ab, sb.timeStamp) && (cb("keyboardMouse"), yb = Lb.isStickOffRest())
          },
          Ib = bb => {
            Vb("gamepad" === bb)
          },
          fb = {
            capture: !0,
            passive: !0
          };
        window.addEventListener("keydown", sb, fb), window.addEventListener("pointerdown", sb, fb), window.addEventListener("wheel", sb, fb), window.addEventListener("touchstart", kb, fb), window.addEventListener("pointermove", Ub, fb), window.addEventListener("pointerout", Tb, fb);
        const Mb = ab.j.subscribe("appManagerUpdated|activeInputDevice", Ib);
        return Ib(Wb.d.get("activeInputDevice")), () => {
          window.removeEventListener("keydown", sb, fb), window.removeEventListener("pointerdown", sb, fb), window.removeEventListener("wheel", sb, fb), window.removeEventListener("touchstart", kb, fb), window.removeEventListener("pointermove", Ub, fb), window.removeEventListener("pointerout", Tb, fb), Jb = null, ab.j.unsubscribe(Mb), Vb(!1)
        }
      },
      Kb = () => {
        const [bb, cb] = (0, kb.useState)(Ib.h);
        return (0, Tb.f)(Ib.e, (() => {
          cb((0, Ib.h)())
        })), (0, Tb.f)(Mb.e, (() => {
          cb((0, Ib.h)())
        })), bb
      }
  },
  7796: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => kb,
      i: () => Wb
    });
    const kb = ["xbox", "playstation", "nintendo", "steamdeck", "generic"],
      Wb = bb => kb.includes(bb)
  },
  7818: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Hb,
      i: () => fb,
      k: () => Ib,
      o: () => Ub
    });
    var kb = sb(19),
      Wb = sb(1626),
      ab = sb(1706);
    const Tb = new Map,
      Ub = (bb, cb) => (Tb.has(bb) && console.warn(`Gameplay blocker "${bb}" registered twice; the newer one replaces it.`), Tb.set(bb, cb), () => {
        Tb.get(bb) === cb && Tb.delete(bb)
      }),
      Ib = () => (0, ab.d)(document.activeElement),
      Hb = function() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const [cb, sb] of Tb)
          if (!bb.includes(cb) && sb()) return cb;
        return null
      },
      fb = function() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return "inGame" === kb.d.get("gameState") && (!(0, Wb.q)() && (!Ib() && null === Hb(bb)))
      }
  },
  7774: (bb, cb, sb) => {
    sb.d(cb, {
      C: () => yb,
      F: () => Vb,
      G: () => eb,
      J: () => Qb,
      K: () => Hb,
      L: () => Xb,
      O: () => nb,
      P: () => Wb,
      R: () => kb,
      T: () => ub,
      X: () => Bb,
      Y: () => Pb,
      _: () => Lb,
      e: () => Db,
      h: () => tb,
      i: () => fb,
      m: () => Ib,
      o: () => Ub,
      p: () => hb,
      t: () => Cb,
      v: () => Yb,
      w: () => ab,
      x: () => Mb,
      y: () => Nb
    });
    const kb = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "View", "Menu", "LS", "RS", "Up", "Down", "Left", "Right", "Home"],
      Wb = kb.length,
      ab = function() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return {
          values: new Array(Wb).fill(0),
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
      Tb = Object.fromEntries(kb.map(((bb, cb) => [bb, cb]))),
      Ub = bb => Tb[bb],
      Ib = function(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .95;
        const kb = Math.hypot(bb.x, bb.y);
        if (kb <= cb) return {
          x: 0,
          y: 0
        };
        const Wb = Math.min(1, (kb - cb) / Math.max(1e-4, sb - cb));
        return {
          x: bb.x / kb * Wb,
          y: bb.y / kb * Wb
        }
      },
      Hb = ["exponential", "linear", "boost"],
      fb = (bb, cb) => {
        const sb = Math.hypot(bb.x, bb.y);
        if (0 === sb) return {
          x: 0,
          y: 0
        };
        const kb = ((bb, cb) => {
          const sb = Math.max(0, Math.min(1, bb));
          return "linear" === cb ? sb : sb * sb
        })(sb, cb);
        return {
          x: bb.x / sb * kb,
          y: bb.y / sb * kb
        }
      },
      Mb = .5,
      Xb = .3,
      nb = .2,
      mb = Ub("LT"),
      lb = Ub("RT"),
      Qb = bb => bb === mb || bb === lb,
      eb = (bb, cb) => {
        const sb = Ub(cb);
        return Qb(sb) ? bb[sb] > .35 : bb[sb] >= Mb
      },
      Cb = (bb, cb) => bb.map(((bb, sb) => Qb(sb) ? cb[sb] ? bb > .35 : bb >= .55 : bb >= Mb)),
      Nb = ["Up", "Down", "Left", "Right"],
      Vb = bb => Nb.includes(bb),
      Lb = function(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
        return Math.hypot(bb.x, bb.y) < cb ? null : Math.abs(bb.x) > Math.abs(bb.y) ? bb.x > 0 ? "Right" : "Left" : bb.y > 0 ? "Down" : "Up"
      },
      ub = {
        initialDelayMs: 350,
        intervalMs: 120
      },
      Yb = {
        initialDelayMs: 350,
        intervalMs: 150
      },
      hb = ["default", "slow", "off"],
      Jb = 800,
      gb = 250,
      Bb = (bb, cb) => "off" === cb ? null : "slow" === cb ? {
        initialDelayMs: Math.max(bb.initialDelayMs, Jb),
        intervalMs: Math.max(bb.intervalMs, gb)
      } : bb;
    class tb {
      constructor(bb) {
        this.readTiming = bb, this.qU = !1, this.timing = null, this.nextFireMs = 0
      }
      update(bb, cb) {
        return bb ? this.qU ? !!(this.timing && cb >= this.nextFireMs) && (this.nextFireMs = cb + this.timing.intervalMs, !0) : (this.qU = !0, this.timing = this.readTiming(), this.nextFireMs = cb + (null !== (sb = null === (kb = this.timing) || void 0 === kb ? void 0 : kb.initialDelayMs) && void 0 !== sb ? sb : 0), !0) : (this.qU = !1, !1);
        var sb, kb
      }
      reset() {
        this.qU = !1
      }
    }
    const yb = {
        initialDelayMs: 350,
        intervalMs: 80
      },
      Pb = {
        initialDelayMs: 400,
        intervalMs: 90
      };
    class Db {
      constructor(bb) {
        this.timer = bb, this.direction = null
      }
      update(bb, cb) {
        return bb !== this.direction && (this.timer.reset(), this.direction = bb), this.timer.update(null !== bb, cb) ? bb : null
      }
      reset() {
        this.timer.reset(), this.direction = null
      }
    }
  },
  8311: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Wb,
      d: () => ab
    });
    let kb = -1 / 0;
    const Wb = () => {
        kb = performance.now()
      },
      ab = bb => performance.now() - kb < bb
  },
  8281: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Tb,
      f: () => ab
    });
    var kb = sb(7789),
      Wb = sb(7774);
    const ab = bb => (0, Wb.X)(bb, (0, kb.g)().buttonRepeat),
      Tb = bb => new Wb.h((() => ab(bb)))
  },
  7807: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Ib,
      f: () => ab,
      g: () => Ub
    });
    var kb = sb(26),
      Wb = sb(7789);
    const ab = (bb, cb) => "OpenShop" === bb ? "shop" === cb : "OpenLobbyLeaderboard" !== bb || "leaderboard" === cb;
    let Tb = !1;
    const Ub = bb => {
        bb !== Tb && (Tb = bb, kb.j.QQ(Wb.e, (0, Wb.g)()))
      },
      Ib = () => ((bb, cb) => "shop" === bb && cb ? "shop" : "leaderboard")((0, Wb.g)().leaderboardButton, Tb)
  },
  7801: (bb, cb, sb) => {
    sb.d(cb, {
      Ab: () => hb,
      B: () => fb,
      F: () => Ib,
      J: () => Ub,
      N: () => Lb,
      P: () => Xb,
      R: () => nb,
      V: () => Mb,
      W: () => Vb,
      Z: () => Hb,
      bb: () => eb,
      d: () => ib,
      db: () => gb,
      e: () => Gb,
      fb: () => Nb,
      h: () => Bb,
      hb: () => lb,
      ib: () => Qb,
      jb: () => mb,
      l: () => Tb,
      nb: () => Cb,
      p: () => Jb,
      qb: () => Pb,
      s: () => Yb,
      tb: () => ab,
      vb: () => ub,
      w: () => Db,
      xb: () => Ob,
      y: () => Eb
    });
    var kb = sb(7786),
      Wb = sb(7774);
    const ab = {
        min: 25,
        max: 500,
        step: 5
      },
      Tb = {
        min: 25,
        max: 100,
        step: 5
      },
      Ub = {
        min: 0,
        max: .4,
        step: .01
      },
      Ib = {
        min: 25,
        max: 300,
        step: 5
      },
      Hb = {
        min: .5,
        max: 6,
        step: .1
      },
      fb = (bb, cb) => {
        if (!Number.isFinite(bb)) return cb.min;
        const sb = cb.min + Math.round((bb - cb.min) / cb.step) * cb.step,
          kb = Math.min(cb.max, Math.max(cb.min, sb));
        return Math.round(1e3 * kb) / 1e3
      },
      Mb = bb => `${Math.round(bb)}%`,
      Xb = bb => Mb(100 * bb),
      nb = bb => `${bb.toFixed(1)}\xd7`,
      mb = [{
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
      lb = [{
        value: "exponential",
        labelKey: "controller:settingsCurveExponential"
      }, {
        value: "linear",
        labelKey: "controller:settingsCurveLinear"
      }, {
        value: "boost",
        labelKey: "controller:settingsCurveBoost"
      }],
      Qb = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "focus",
        labelKey: "controller:settingsMenuNavFocus"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      eb = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "slot",
        labelKey: "controller:settingsInventoryNavSlot"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      Cb = [{
        value: "wheel",
        labelKey: "controller:settingsQuickChatWheel"
      }, {
        value: "off",
        labelKey: "controller:settingsQuickChatOff"
      }],
      Nb = [{
        value: "shop",
        labelKey: "controller:settingsLeaderboardButtonShop"
      }, {
        value: "leaderboard",
        labelKey: "controller:settingsLeaderboardButtonLeaderboard"
      }],
      Vb = [{
        value: "always",
        labelKey: "controller:settingsGyroAlways"
      }, {
        value: "aiming",
        labelKey: "controller:settingsGyroWhileAiming"
      }, {
        value: "button",
        labelKey: "controller:settingsGyroWhileButton"
      }],
      Lb = [{
        value: "tapHold",
        labelKey: "controller:settingsEmoteButtonTapHold"
      }, {
        value: "wheel",
        labelKey: "controller:settingsEmoteButtonWheel"
      }],
      ub = [{
        value: "toggle",
        labelKey: "controller:settingsSneakToggle"
      }, {
        value: "hold",
        labelKey: "controller:settingsSneakHold"
      }],
      Yb = [{
        value: "default",
        labelKey: "controller:settingsButtonRepeatDefault"
      }, {
        value: "slow",
        labelKey: "controller:settingsButtonRepeatSlow"
      }, {
        value: "off",
        labelKey: "controller:settingsButtonRepeatOff"
      }],
      hb = [{
        value: "short",
        labelKey: "controller:settingsTapHoldShort"
      }, {
        value: "medium",
        labelKey: "controller:settingsTapHoldMedium"
      }, {
        value: "long",
        labelKey: "controller:settingsTapHoldLong"
      }],
      Jb = [{
        value: "hold",
        labelKey: "controller:settingsAttackHold"
      }, {
        value: "toggle",
        labelKey: "controller:settingsAttackToggle"
      }],
      gb = {
        southpaw: "controller:settingsLayoutSouthpaw",
        triggersSwapped: "controller:settingsLayoutTriggersSwapped"
      },
      Bb = {
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
      tb = {
        gameplay: "controller:settingsGroupGameplay",
        menu: "controller:settingsGroupMenus",
        inventory: "controller:settingsGroupInventory",
        keyboard: "controller:settingsGroupKeyboard"
      },
      yb = [{
        kind: "fixed",
        stick: "move",
        labelKey: "controller:settingsActionMove"
      }, {
        kind: "fixed",
        stick: "look",
        labelKey: "controller:settingsActionLook"
      }],
      Pb = kb.c.map((bb => {
        let {
          group: cb,
          actions: sb
        } = bb;
        const kb = sb.map((bb => ({
          kind: "action",
          action: bb
        })));
        return {
          titleKey: tb[cb],
          rows: "gameplay" === cb ? [...yb, ...kb] : kb
        }
      })),
      Db = Wb.R.filter((bb => "Home" !== bb)),
      Eb = 1e4;
    class ib {
      constructor(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
        this.cancelButton = bb, this.openButton = cb, this.accepts = sb, this.startMs = null, this.ignoredUntilMs = new Map, this.cancelDownAtMs = null
      }
      update(bb, cb) {
        var sb;
        this.updateIgnored(bb, cb);
        const kb = cb - (null !== (sb = this.startMs) && void 0 !== sb ? sb : cb) >= 250;
        for (const Wb of Db)
          if (Wb !== this.cancelButton && kb && !this.ignoredUntilMs.has(Wb) && bb.wasPressed(Wb) && this.accepts(Wb)) return {
            kind: "bind",
            button: Wb
          };
        if (this.ignoredUntilMs.has(this.cancelButton)) return null;
        if (bb.wasPressed(this.cancelButton)) {
          if (!this.accepts(this.cancelButton)) return {
            kind: "cancel"
          };
          this.cancelDownAtMs = cb
        }
        return null === this.cancelDownAtMs ? null : bb.isHeld(this.cancelButton) && cb - this.cancelDownAtMs >= 700 ? (this.cancelDownAtMs = null, {
          kind: "bind",
          button: this.cancelButton
        }) : bb.wasReleased(this.cancelButton) ? (this.cancelDownAtMs = null, {
          kind: "cancel"
        }) : null
      }
      getBindHoldProgress(bb) {
        return null === this.cancelDownAtMs ? 0 : Math.min(1, (bb - this.cancelDownAtMs) / 700)
      }
      updateIgnored(bb, cb) {
        if (null === this.startMs) {
          this.startMs = cb;
          for (const cb of Db) bb.isDown(cb) && this.ignoredUntilMs.set(cb, 1 / 0);
          this.openButton && !this.ignoredUntilMs.has(this.openButton) && this.ignoredUntilMs.set(this.openButton, cb + 250)
        }
        for (const [sb, kb] of this.ignoredUntilMs) {
          const Wb = bb.isDown(sb);
          kb === 1 / 0 ? Wb || sb !== this.openButton ? Wb || this.ignoredUntilMs.delete(sb) : this.ignoredUntilMs.set(sb, cb + 250) : cb >= kb ? this.ignoredUntilMs.delete(sb) : Wb && this.ignoredUntilMs.set(sb, 1 / 0)
        }
      }
    }
    const Ob = 6e3;
    class Gb {
      constructor() {
        this.downAtMs = null, this.pressesAtMs = []
      }
      update(bb, cb) {
        let {
          pressed: sb,
          qU: kb
        } = bb;
        if (sb) {
          const bb = this.pressesAtMs.at(-1);
          if (this.pressesAtMs = void 0 !== bb && cb - bb < 1500 ? [...this.pressesAtMs, cb] : [cb], this.pressesAtMs.length >= 3) return 1
        }
        return kb ? (this.downAtMs ??= cb, Math.min(1, (cb - this.downAtMs) / 1500)) : (this.downAtMs = null, 0)
      }
    }
  },
  4730: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => ab,
      d: () => Tb
    });
    var kb = sb(64);
    const Wb = new WeakMap,
      ab = bb => {
        var cb;
        const sb = bb.closest("[data-pad-slider]");
        return sb && null !== (cb = Wb.get(sb)) && void 0 !== cb ? cb : null
      },
      Tb = (bb, cb) => {
        const sb = (0, kb.useRef)(cb);
        sb.current = cb, (0, kb.useEffect)((() => {
          if (bb.current) return ((bb, cb) => (Wb.set(bb, cb), () => {
            Wb.get(bb) === cb && Wb.delete(bb)
          }))(bb.current, {
            adjust: bb => {
              sb.current.adjust(bb)
            },
            setFraction: bb => {
              sb.current.setFraction(bb)
            },
            endDrag: () => {
              sb.current.endDrag()
            }
          })
        }), [bb])
      }
  },
  8338: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => ab,
      g: () => Wb
    });
    var kb = sb(26);
    const Wb = "localBlockBroken";

    function ab() {
      return {
        onPlayerChangeBlock(bb, cb, sb, ab, Tb, Ub) {
          "Air" === Ub && kb.j.QQ(Wb)
        }
      }
    }
  },
  7826: (bb, cb, sb) => {
    var kb = {
      "./nintendo/A.svg": 7835,
      "./nintendo/B.svg": 7840,
      "./nintendo/Down.svg": 7844,
      "./nintendo/Home.svg": 7850,
      "./nintendo/LB.svg": 7855,
      "./nintendo/LS.svg": 7857,
      "./nintendo/LT.svg": 7860,
      "./nintendo/Left.svg": 7862,
      "./nintendo/LeftStick.svg": 7871,
      "./nintendo/Menu.svg": 7877,
      "./nintendo/RB.svg": 7884,
      "./nintendo/RS.svg": 7893,
      "./nintendo/RT.svg": 7897,
      "./nintendo/Right.svg": 7903,
      "./nintendo/RightStick.svg": 7905,
      "./nintendo/Up.svg": 7907,
      "./nintendo/View.svg": 7915,
      "./nintendo/X.svg": 7921,
      "./nintendo/Y.svg": 7930,
      "./playstation/A.svg": 7935,
      "./playstation/B.svg": 7941,
      "./playstation/Down.svg": 7947,
      "./playstation/Home.svg": 7954,
      "./playstation/LB.svg": 7961,
      "./playstation/LS.svg": 7968,
      "./playstation/LT.svg": 7975,
      "./playstation/Left.svg": 7983,
      "./playstation/LeftStick.svg": 7990,
      "./playstation/Menu.svg": 7996,
      "./playstation/RB.svg": 7999,
      "./playstation/RS.svg": 8007,
      "./playstation/RT.svg": 8014,
      "./playstation/Right.svg": 8018,
      "./playstation/RightStick.svg": 8021,
      "./playstation/Up.svg": 8029,
      "./playstation/View.svg": 8034,
      "./playstation/X.svg": 8039,
      "./playstation/Y.svg": 8042,
      "./steamdeck/A.svg": 8047,
      "./steamdeck/B.svg": 8050,
      "./steamdeck/Down.svg": 8053,
      "./steamdeck/Home.svg": 8057,
      "./steamdeck/LB.svg": 8061,
      "./steamdeck/LS.svg": 8066,
      "./steamdeck/LT.svg": 8075,
      "./steamdeck/Left.svg": 8081,
      "./steamdeck/LeftStick.svg": 8084,
      "./steamdeck/Menu.svg": 8092,
      "./steamdeck/RB.svg": 8095,
      "./steamdeck/RS.svg": 8101,
      "./steamdeck/RT.svg": 8107,
      "./steamdeck/Right.svg": 8114,
      "./steamdeck/RightStick.svg": 8122,
      "./steamdeck/Up.svg": 8131,
      "./steamdeck/View.svg": 8139,
      "./steamdeck/X.svg": 8147,
      "./steamdeck/Y.svg": 8149,
      "./xbox/A.svg": 8154,
      "./xbox/B.svg": 8162,
      "./xbox/Down.svg": 8170,
      "./xbox/Home.svg": 8178,
      "./xbox/LB.svg": 8182,
      "./xbox/LS.svg": 8185,
      "./xbox/LT.svg": 8194,
      "./xbox/Left.svg": 8200,
      "./xbox/LeftStick.svg": 8209,
      "./xbox/Menu.svg": 8213,
      "./xbox/RB.svg": 8219,
      "./xbox/RS.svg": 8224,
      "./xbox/RT.svg": 8230,
      "./xbox/Right.svg": 8239,
      "./xbox/RightStick.svg": 8243,
      "./xbox/Up.svg": 8249,
      "./xbox/View.svg": 8257,
      "./xbox/X.svg": 8264,
      "./xbox/Y.svg": 8269
    };

    function Wb(bb) {
      var cb = ab(bb);
      return sb(cb)
    }

    function ab(bb) {
      if (!sb.o(kb, bb)) {
        var cb = new Error("Cannot find module '" + bb + "'");
        throw cb.code = "MODULE_NOT_FOUND", cb
      }
      return kb[bb]
    }
    Wb.keys = function() {
      return Object.keys(kb)
    }, Wb.resolve = ab, bb.exports = Wb, Wb.id = 7826
  },
  7835: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/A.926fb88933484dfbde14.svg"
  },
  7840: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/B.9f5ec099f78f84e44427.svg"
  },
  7844: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  7850: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  7855: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/LB.3a20b15927b55d5d8b60.svg"
  },
  7857: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  7860: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/LT.9fdc5e69011b9d41f50a.svg"
  },
  7862: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  7871: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  7877: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Menu.c903a662eb685211e52e.svg"
  },
  7884: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/RB.bba470ddb76ceec5d168.svg"
  },
  7893: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  7897: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/RT.e5a9fbcc3c79550111ca.svg"
  },
  7903: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  7905: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  7907: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  7915: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/View.0c9378b5d720a636d50d.svg"
  },
  7921: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/X.c9377519af94e6dce1d7.svg"
  },
  7930: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Y.62d8c17731dd2e172426.svg"
  },
  7935: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/A.958a6de9474f8d0c9caf.svg"
  },
  7941: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/B.d05958bfa88a1162b47a.svg"
  },
  7947: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Down.db68fb3980768eb54671.svg"
  },
  7954: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  7961: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/LB.37a3c5128c958ec2a0c2.svg"
  },
  7968: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/LS.15b0cc5bf3f2fe7bbd8b.svg"
  },
  7975: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/LT.5412ae5222c69f8c833f.svg"
  },
  7983: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Left.4457b2895ce94a5df32e.svg"
  },
  7990: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  7996: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Menu.1e8427f8133c9d456c53.svg"
  },
  7999: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/RB.c96c4aa2590209e930c7.svg"
  },
  8007: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/RS.8d70d147cf1ab136e845.svg"
  },
  8014: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/RT.1e4691bb5a7c049693df.svg"
  },
  8018: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Right.a1e101413040c540b879.svg"
  },
  8021: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8029: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Up.7544a65ad4f611a55775.svg"
  },
  8034: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/View.003cae39de89cae0b9d8.svg"
  },
  8039: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/X.d88b6e62dd8fb4bda32a.svg"
  },
  8042: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Y.428d3e70775877892f82.svg"
  },
  8047: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8050: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8053: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8057: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Home.ea8b009cfa9562aa644e.svg"
  },
  8061: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/LB.f283d355d22fc107d6d6.svg"
  },
  8066: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8075: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/LT.13e66c122e7ee04bb876.svg"
  },
  8081: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8084: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8092: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Menu.90fc4e918900eb5062a0.svg"
  },
  8095: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/RB.918a7f16dc054d96b6f3.svg"
  },
  8101: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8107: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/RT.a0523211130959598bed.svg"
  },
  8114: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8122: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8131: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8139: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/View.0bc952e292c28c3baac2.svg"
  },
  8147: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8149: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  },
  8154: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8162: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8170: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8178: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Home.8898f76b20962fe52ab7.svg"
  },
  8182: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/LB.689ba3703ae248f2e4cc.svg"
  },
  8185: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8194: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/LT.9c2d10d335ab5c590525.svg"
  },
  8200: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8209: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8213: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Menu.9e485791ea97009871ca.svg"
  },
  8219: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/RB.7ee5ce48dd551f993f80.svg"
  },
  8224: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8230: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/RT.903ecadc55a9e9e00f07.svg"
  },
  8239: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8243: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8249: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8257: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/View.3c5eeb34f0413bde4a65.svg"
  },
  8264: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8269: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);