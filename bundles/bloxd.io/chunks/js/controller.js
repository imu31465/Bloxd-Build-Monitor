export const id = 28;
export const ids = [28];
export const modules = {
  4765: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Xb,
      g: () => Kb,
      h: () => pb,
      k: () => lb
    });
    var Bb = hb(49),
      Ob = hb(4770),
      Gb = hb(4123),
      Ub = hb(1260),
      Lb = hb(4791),
      Yb = hb(958),
      Sb = hb.n(Yb),
      ab = hb(1249),
      Hb = hb(1622),
      wb = hb(4800),
      Zb = hb(1007);

    function Xb(bb) {
      let {
        label: ub,
        onClick: hb,
        checked: Bb,
        circleInfoText: Ob,
        className: Lb,
        disabled: Yb,
        note: ab
      } = bb;
      return (0, Zb.jsxs)("div", {
        "aria-disabled": Yb || void 0,
        "data-pad-focusable": !0,
        className: Sb()("SettingBox CheckboxContainer", {
          [Lb]: Lb,
          SettingBoxDisabled: Yb
        }),
        onClick: () => {
          Yb || hb(!Bb)
        },
        children: [(0, Zb.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, Zb.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, Zb.jsx)(Gb.d, {
              className: "SettingsCheckbox",
              checked: Bb,
              disabled: Yb,
              onChange: () => {}
            })
          }), (0, Zb.jsxs)("div", {
            className: "CheckboxText",
            children: [ub, Ob && (0, Zb.jsx)("span", {
              onClick: bb => bb.stopPropagation(),
              children: (0, Zb.jsx)(Ub.b, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: Ob
              })
            })]
          })]
        }), ab && (0, Zb.jsx)("div", {
          className: "SettingNote",
          children: ab
        })]
      })
    }

    function pb(bb) {
      let {
        name: ub,
        onChange: hb,
        min: Ob,
        max: Gb,
        step: Lb,
        initValue: Yb,
        circleInfoText: ab,
        format: Hb,
        className: wb,
        padStep: Xb,
        disabled: pb = !1,
        selectableMax: ob,
        cappedNote: lb,
        onChangeComplete: Kb
      } = bb;
      const [Wb, Cb] = (0, Bb.useState)(Yb), db = (0, Bb.useRef)(Yb);
      (0, Bb.useEffect)((() => {
        db.current = Yb, Cb(Yb)
      }), [Yb]);
      const rb = void 0 !== ob && ob < Gb,
        jb = rb ? {
          "--slider-selectable": (ob - Ob) / (Gb - Ob)
        } : void 0;
      return (0, Zb.jsxs)("div", {
        className: Sb()("SettingBox SettingsSliderDiv", {
          [wb]: wb,
          SettingBoxDisabled: pb,
          SliderCapped: rb
        }),
        style: jb,
        children: [(0, Zb.jsxs)("div", {
          className: "SliderText",
          children: [`${ub}: ${Hb?Hb(Wb):Wb}`, ab && (0, Zb.jsx)(Ub.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: ab
          })]
        }), (0, Zb.jsx)("div", {
          className: "SliderDiv",
          children: (0, Zb.jsx)(Ab, {
            value: Wb,
            min: Ob,
            max: Gb,
            step: Lb,
            onChange: bb => {
              if (rb && bb >= ob && Wb === ob) return;
              const ub = rb ? Math.min(bb, ob) : bb;
              db.current = ub, Cb(ub), hb(ub)
            },
            onChangeComplete: Kb && (() => {
              Kb(db.current)
            }),
            format: Hb,
            padStep: Xb,
            disabled: pb
          })
        }), rb && lb && (0, Zb.jsx)("div", {
          className: "SettingNote",
          children: lb
        })]
      })
    }
    const ob = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function Ab(bb) {
      var ub;
      let {
        value: hb,
        min: Gb,
        max: Ub,
        step: Lb,
        onChange: Yb,
        orientation: Sb,
        reverse: ab,
        setIsChanging: Hb,
        tooltip: Xb,
        labels: pb,
        handleLabel: Ab,
        format: lb,
        onChangeStart: Kb,
        onChangeComplete: Wb,
        padStep: Cb,
        disabled: db = !1
      } = bb;
      const rb = (0, Bb.useRef)(null),
        jb = (0, Bb.useRef)(null);
      (0, Bb.useLayoutEffect)((() => {
        var bb, ub, hb;
        const Bb = null !== (bb = null === (ub = rb.current) || void 0 === ub ? void 0 : ub.querySelector(".rangeslider")) && void 0 !== bb ? bb : null;
        null === Bb || void 0 === Bb || Bb.setAttribute("data-pad-slider", ""), null === Bb || void 0 === Bb || Bb.setAttribute("data-pad-focusable", ""), null === Bb || void 0 === Bb || null === (hb = Bb.querySelector(".rangeslider__handle")) || void 0 === hb || hb.setAttribute("data-pad-slider-handle", ""), jb.current = Bb
      }), []), (0, Bb.useLayoutEffect)((() => {
        var bb, ub;
        db ? null === (bb = jb.current) || void 0 === bb || bb.setAttribute("aria-disabled", "true") : null === (ub = jb.current) || void 0 === ub || ub.removeAttribute("aria-disabled")
      }), [db]);
      const nb = (null !== (ub = String(Lb).split(".")[1]) && void 0 !== ub ? ub : "").length,
        Db = bb => {
          const ub = Number((Math.round((bb - Gb) / Lb) * Lb + Gb).toFixed(nb));
          return Math.min(Ub, Math.max(Gb, ub))
        },
        xb = (0, Bb.useRef)(Wb);
      xb.current = Wb, (0, Bb.useEffect)((() => {
        const bb = rb.current;
        if (!bb) return;
        const ub = bb => {
          var ub;
          ob.has(bb.key) && (null === (ub = xb.current) || void 0 === ub || ub.call(xb))
        };
        return bb.addEventListener("keyup", ub), () => {
          bb.removeEventListener("keyup", ub)
        }
      }), []);
      const zb = (0, Bb.useRef)(!1);
      return (0, wb.h)(jb, {
        adjust: bb => {
          if (db) return;
          const ub = null !== Cb && void 0 !== Cb ? Cb : Math.max(Lb, Math.round((Ub - Gb) / 20 / Lb) * Lb),
            Bb = Db(hb + bb * ub * (ab ? -1 : 1));
          Bb !== hb && (null === Kb || void 0 === Kb || Kb(), Yb(Bb), null === Wb || void 0 === Wb || Wb())
        },
        setFraction: bb => {
          if (db) return;
          const ub = Db(Gb + (ab ? 1 - bb : bb) * (Ub - Gb));
          ub !== hb && (zb.current || (zb.current = !0, null === Kb || void 0 === Kb || Kb()), Yb(ub))
        },
        endDrag: () => {
          zb.current && (zb.current = !1, null === Wb || void 0 === Wb || Wb())
        }
      }), (0, Zb.jsx)("div", {
        ref: rb,
        style: {
          display: "contents"
        },
        children: (0, Zb.jsx)(Ob.b, {
          value: hb,
          min: Gb,
          max: Ub,
          step: Lb,
          onChange: Yb,
          orientation: Sb,
          reverse: ab,
          tooltip: Xb,
          labels: pb,
          handleLabel: Ab,
          format: lb,
          onChangeStart: () => {
            null === Kb || void 0 === Kb || Kb(), null === Hb || void 0 === Hb || Hb(!0)
          },
          onChangeComplete: () => {
            null === Hb || void 0 === Hb || Hb(!1), null === Wb || void 0 === Wb || Wb()
          }
        })
      })
    }
    async function lb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const ub = ab.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: "",
        unlockPointerKey: bb
      });
      !0 === await ub.getResult() && (0, Hb.reloadBloxd)()
    }

    function Kb(bb) {
      let {
        label: ub,
        options: hb,
        value: Bb,
        onChange: Ob,
        circleInfoText: Gb
      } = bb;
      return (0, Zb.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, Zb.jsxs)("div", {
          className: "SliderText",
          children: [ub, Gb && (0, Zb.jsx)(Ub.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Gb
          })]
        }), (0, Zb.jsx)(Lb.c, {
          ariaLabel: ub,
          options: hb,
          value: Bb,
          onChange: Ob
        })]
      })
    }
  },
  4791: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Ub
    });
    var Bb = hb(958),
      Ob = hb.n(Bb),
      Gb = hb(1007);

    function Ub(bb) {
      let {
        options: ub,
        value: hb,
        onChange: Bb,
        ariaLabel: Ub,
        className: Lb,
        reselectable: Yb = !1,
        keepsFocus: Sb = !1,
        padTabs: ab
      } = bb;
      const Hb = void 0 !== ab;
      return (0, Gb.jsx)("div", {
        className: Ob()("SegmentedToggle", Lb),
        role: "group",
        "aria-label": Ub,
        "data-pad-tabs": ab,
        children: ub.map((bb => {
          const ub = bb.value === hb;
          return (0, Gb.jsx)("button", {
            type: "button",
            "aria-pressed": ub,
            "data-pad-tab": Hb || void 0,
            "data-pad-selected": Hb && ub ? "true" : void 0,
            "data-pad-default-focus": Hb && ub || void 0,
            "aria-label": bb.ariaLabel,
            title: bb.ariaLabel,
            className: Ob()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: ub
            }),
            onMouseDown: Sb ? bb => {
              bb.preventDefault()
            } : void 0,
            onClick: () => {
              ub && !Yb || Bb(bb.value)
            },
            children: bb.label
          }, bb.value)
        }))
      })
    }
  },
  7850: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ob,
      c: () => Gb,
      g: () => wb,
      h: () => Hb,
      j: () => Sb,
      k: () => Lb,
      l: () => Bb,
      o: () => Zb,
      q: () => Xb
    });
    const Bb = ["menuConfirm", "menuBack", "menuTabPrevious", "menuTabNext", "menuPageUp", "menuPageDown", "menuSecondary", "menuToggleCursor"],
      Ob = [{
        group: "gameplay",
        actions: ["jump", "sneak", "sneakToggle", "sprint", "attack", "use", "hotbarPrevious", "hotbarNext", "inventory", "actionButton", "perspective", "pickBlock", "drop", "emoteWheel", "chat", "pause", "leaderboard"]
      }, {
        group: "menu",
        actions: Bb
      }, {
        group: "inventory",
        actions: ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryClose", "inventoryPanelPrevious", "inventoryPanelNext", "inventoryDrop", "inventoryHotbarSwap"]
      }, {
        group: "keyboard",
        actions: ["keyboardType", "keyboardBackspace", "keyboardSpace", "keyboardCaretLeft", "keyboardCaretRight", "keyboardShift", "keyboardSymbols", "keyboardSubmit", "keyboardClose", "keyboardChannel"]
      }],
      Gb = {
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
      Ub = ["pickBlock", "perspective"],
      Lb = bb => Ub.includes(bb) ? Ub : [bb],
      Yb = Object.fromEntries(Ob.flatMap((bb => {
        let {
          group: ub,
          actions: hb
        } = bb;
        return hb.map((bb => [bb, ub]))
      }))),
      Sb = bb => Yb[bb],
      ab = {
        pause: ["menu"],
        leaderboard: ["menu"],
        inventory: ["menu"],
        menuPageUp: ["inventory"],
        menuPageDown: ["inventory"]
      },
      Hb = bb => {
        var ub;
        return [Sb(bb), ...null !== (ub = ab[bb]) && void 0 !== ub ? ub : []]
      },
      wb = new Set(["menu", "inventory", "keyboard"]),
      Zb = {
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
      Xb = new Set(["forward", "backward", "left", "right"])
  },
  7843: (bb, ub, hb) => {
    hb.d(ub, {
      A: () => jb,
      C: () => Kb,
      F: () => Db,
      I: () => ab,
      L: () => nb,
      M: () => gb,
      c: () => lb,
      e: () => Cb,
      f: () => wb,
      g: () => Zb,
      h: () => vb,
      k: () => zb,
      o: () => xb,
      s: () => Wb,
      w: () => ib
    });
    var Bb = hb(7850),
      Ob = hb(7857),
      Gb = hb(7836),
      Ub = hb(7874);
    const Lb = bb => "pickBlock" === bb ? "perspective" : bb,
      Yb = (bb, ub) => {
        var hb;
        const Ob = Lb(ub);
        return null !== (hb = bb[Ob]) && void 0 !== hb ? hb : Bb.c[Ob]
      },
      Sb = new Map([
        ["menuConfirm", "menuBack"],
        ["inventoryPrimary", "inventoryClose"],
        ["keyboardType", "keyboardClose"]
      ].flatMap((bb => {
        let [ub, hb] = bb;
        return [
          [ub, hb],
          [hb, ub]
        ]
      }))),
      ab = (bb, ub) => null !== bb && void 0 !== bb ? bb : "nintendo" === ub,
      Hb = bb => ab((0, Ob.e)().swapConfirmBack, (0, Ob.f)()) && Sb.get(bb) || bb,
      wb = bb => Yb((0, Ob.e)().bindings, Hb(bb)),
      Zb = bb => Bb.c[Hb(bb)],
      Xb = Object.keys(Bb.c),
      pb = bb => "gameplay" === (0, Bb.j)(bb) ? ["gameplay"] : (0, Bb.h)(bb),
      ob = (bb, ub) => {
        const hb = pb(ub);
        return pb(bb).some((bb => hb.includes(bb)))
      },
      Ab = (bb, ub, hb) => {
        const Ob = Yb(bb, ub),
          Ub = new Set((0, Bb.k)(ub)),
          Sb = [...Ub];
        for (let Bb = Sb.pop(); Bb; Bb = Sb.pop())
          for (const ub of Xb) {
            const Gb = Yb(bb, ub);
            Ub.has(ub) || Gb !== hb && Gb !== Ob || !ob(Bb, ub) || (Ub.add(ub), Sb.push(ub))
          }
        const ab = {
          ...bb
        };
        for (const Hb of Ub) {
          const ub = Yb(bb, Hb) === Ob ? hb : Ob,
            Ub = (0, Bb.h)(Hb).some((bb => Bb.g.has(bb)));
          if ((0, Gb.H)(ub) && Ub) return null;
          ab[Lb(Hb)] = ub
        }
        for (const Gb of Object.keys(ab)) ab[Gb] === Bb.c[Gb] && delete ab[Gb];
        return ab
      },
      lb = (bb, ub) => null !== Ab((0, Ob.e)().bindings, Hb(bb), ub),
      Kb = (bb, ub) => {
        if (wb(bb) === ub) return !0;
        const hb = Ab((0, Ob.e)().bindings, Hb(bb), ub);
        return !!hb && ((0, Ob.i)({
          bindings: hb
        }), !0)
      },
      Wb = (bb, ub) => {
        const hb = (0, Bb.k)(ub);
        return Xb.filter((ub => Lb(ub) === ub && !hb.includes(ub) && Yb(bb, Hb(ub)) !== wb(ub)))
      },
      Cb = ["southpaw", "triggersSwapped"],
      db = {
        southpaw: {
          sprint: "RS",
          sneakToggle: "LS"
        },
        triggersSwapped: {
          attack: "LT",
          use: "RT"
        }
      },
      rb = bb => Object.keys(db[bb]),
      jb = (bb, ub) => "southpaw" === bb ? ub.swapSticks : rb(bb).every((hb => Yb(ub.bindings, hb) === db[bb][hb])),
      nb = (bb, ub) => {
        const hb = (0, Ob.e)();
        let Gb = hb.bindings;
        for (const Ob of rb(bb)) {
          const hb = ub ? db[bb][Ob] : Bb.c[Ob];
          if (Gb = Ab(Gb, Ob, hb), !Gb) return !1
        }
        return (0, Ob.i)({
          swapSticks: "southpaw" === bb ? ub : hb.swapSticks,
          bindings: Gb
        }), !0
      },
      Db = () => {
        (0, Ob.i)({
          swapSticks: !1,
          bindings: {}
        })
      },
      xb = () => (0, Ob.e)().swapSticks ? "RightStick" : "LeftStick",
      zb = () => (0, Ob.e)().swapSticks ? "LeftStick" : "RightStick",
      gb = bb => (0, Ob.e)().swapSticks && (0, Gb.H)(bb),
      ib = bb => gb(bb) ? xb() : zb(),
      vb = bb => {
        if (Bb.q.has(bb)) return xb();
        const ub = Bb.o[bb];
        return ub && ("leaderboard" !== ub || (0, Ub.f)(bb, (0, Ub.c)())) ? wb(ub) : null
      }
  },
  7828: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      ControllerCategory: () => lL,
      ControllerGlyph: () => CO,
      ControllerRoot: () => lU,
      PadLobbyShortcuts: () => eU,
      PadSneakChip: () => nU,
      PadTooltip: () => xU,
      attachPressToContinue: () => EU,
      getBoundButton: () => ab.f,
      getControllerSettings: () => wb.e,
      getGlyphForNoaAction: () => ab.h,
      getInventoryCursorState: () => WL,
      getMenuShortcutButton: () => Eh,
      getPadGlyphIconName: () => dU,
      getPadGlyphIconUrl: () => rU,
      getPadRepeatTiming: () => pb.f,
      handOverPadFocus: () => dL,
      hasActivePad: () => KL,
      isPadSteppingSlots: () => CL
    });
    const Bb = JSON.parse('{"controller":{"inventoryTake":"Take","inventoryTakeHalf":"Take half","inventoryPlace":"Place","inventoryPlaceOne":"Place one","inventoryQuickMove":"Quick move","inventoryToHotbar":"To hotbar","inventoryPutBack":"Put back","inventoryHotbarSwap":"Swap with hotbar","inventorySwapHere":"Swap here","inventoryCancel":"Cancel","inventoryClose":"Close","inventoryDrop":"Drop (hold: stack)","inventorySelect":"Select","inventoryCraft":"Craft (hold to repeat)","inventoryCraftAll":"Craft all","inventoryChooseRecipe":"Choose","inventoryBackToRecipes":"Back to recipes","inventoryType":"Type","inventoryPanels":"Switch panel","inventoryCategory":"Category","inventoryPage":"Page","disconnected":"Controller disconnected","gameplayReload":"Reload","gameplayActionWheelHint":"(hold for more)","gameplaySneaking":"Sneaking","gameplayLoadFailedTitle":"Controller unavailable","gameplayLoadFailedSubtitle":"Reload the page to play with your controller.","gameplayDropStack":"Keep holding to drop the stack","gameplayAttackLatched":"Attacking","gameplayPickBlock":"Pick block","padButtonView":"View","padButtonMenu":"Menu","padButtonHome":"Home","padButtonCreate":"Create","padButtonOptions":"Options","padButtonDpadUp":"D-pad \u2191","padButtonDpadDown":"D-pad \u2193","padButtonDpadLeft":"D-pad \u2190","padButtonDpadRight":"D-pad \u2192","padButtonLeftStick":"L Stick","padButtonRightStick":"R Stick","settingsLook":"Look","settingsLookSensitivityX":"Look sensitivity (horizontal)","settingsLookSensitivityY":"Look sensitivity (vertical)","settingsAimLookSensitivity":"Look sensitivity while aiming (use held)","settingsInvertLookX":"Invert horizontal look","settingsInvertLookY":"Invert vertical look","settingsLookCurve":"Look curve","settingsLookCurveHint":"Steep gives finer aim near the centre, Linear turns at an even rate, and Boost turns faster when you hold the stick all the way.","settingsCurveExponential":"Steep","settingsCurveLinear":"Linear","settingsCurveBoost":"Boost","settingsLookDeadzone":"Look deadzone","settingsGyro":"Gyro aiming","settingsGyroToggle":"Aim by moving the controller","settingsGyroToggleInfo":"Turn and tilt the controller to aim, on top of the right stick.","settingsGyroTogglePhone":"Aim by moving your phone or tablet","settingsGyroToggleInfoPhone":"Turn and tilt your phone or tablet to aim, on top of the right stick.","settingsGyroUnsupported":"Gyro aiming needs Chrome or Edge.","settingsGyroBlocked":"Gyro aiming isn\'t available on this site.","settingsGyroPhoneNeedsController":"Connect a controller to aim by moving your phone or tablet.","settingsGyroSteamHint":"If Steam already turns your gyro into mouse movement, leave this off.","settingsGyroConnect":"Connect motion controller","settingsGyroConnectHint":"Works with DualSense, DualShock 4 and Switch controllers.","settingsGyroConnectNeedsClick":"Click Connect with your mouse: the browser asks before sharing a controller.","settingsGyroOpenFailed":"Another app is using the controller. Close apps such as Steam or DS4Windows, then try again.","settingsGyroConnected":"Aiming with {{name}}.","settingsGyroAllowMotion":"Allow motion sensor","settingsGyroAllowNeedsTap":"Tap Allow motion sensor on your screen to turn it on.","settingsGyroPhoneOn":"Aiming with this device\'s motion sensor.","settingsGyroPhoneWaiting":"Waiting for this device\'s motion sensor\u2026","settingsGyroPhoneNoSensor":"No motion sensor found on this device.","settingsGyroPhoneDenied":"Motion access is blocked. Allow it in your browser settings.","settingsGyroSensitivity":"Gyro sensitivity","settingsGyroActivation":"Gyro turns on","settingsGyroAlways":"Always","settingsGyroWhileAiming":"While aiming","settingsGyroWhileButton":"While holding a button","settingsGyroAimingHint":"Hold {{button}} to aim with motion.","settingsGyroButton":"Gyro button","settingsGyroButtonHint":"While gyro aiming is on, this button only turns the gyro on in game, so pick one you rarely use.","settingsMovement":"Movement","settingsMoveDeadzone":"Move deadzone","settingsAutoSprint":"Sprint at full tilt","settingsAutoSprintInfo":"Push the movement stick all the way to sprint.","settingsSneak":"Sneak","settingsSneakHold":"Hold","settingsSneakToggle":"Toggle","settingsButtons":"Buttons","settingsPromptFamily":"Button prompts","settingsPromptAuto":"Match my controller","settingsPromptXbox":"Xbox","settingsPromptPlayStation":"PlayStation","settingsPromptNintendo":"Nintendo","settingsPromptSteamDeck":"Steam Deck","settingsPromptGeneric":"Generic","settingsHideButtonHints":"Hide button hints","settingsVibration":"Vibration","settingsCursorSpeed":"Virtual cursor speed","settingsCursorMagnetism":"Cursor snaps onto buttons","settingsMenuBackToCategories":"Back returns to the category list first","settingsAccessibility":"Accessibility","settingsSwapConfirmBack":"Swap confirm and back","settingsSwapToast":"Select and Back have swapped buttons.","settingsLayoutRefusedToast":"This layout doesn\'t fit your current buttons. Reset them to use it.","settingsSwapConfirmBackInfo":"Select with the right face button and go back with the bottom one, in menus, the inventory and the on-screen keyboard. On by default for Nintendo controllers.","settingsButtonRepeat":"Button repeat","settingsButtonRepeatHint":"How a held button repeats in menus, sliders, the on-screen keyboard and crafting. Off acts once per press, and holding drop in game drops just one item.","settingsButtonRepeatDefault":"Default","settingsButtonRepeatSlow":"Slow (0.8 s, then 4 a second)","settingsButtonRepeatOff":"Off (once per press)","settingsTapHoldTime":"Tap/hold time","settingsTapHoldTimeHint":"How long to hold the chat, emote or action button to open its wheel, or the view button to change view where a tap picks a block. Dropping a whole stack takes 0.8, 1 or 1.3 s.","settingsTapHoldShort":"Short (0.25 s)","settingsTapHoldMedium":"Medium (0.5 s)","settingsTapHoldLong":"Long (0.8 s)","settingsEmoteButton":"Emote button","settingsEmoteButtonTapHoldHint":"Tap to repeat your last emote, or hold to open the emote wheel.","settingsEmoteButtonWheelHint":"Any press opens the emote wheel, with no hold to time. Pick with the stick, then select.","settingsEmoteButtonTapHold":"Tap repeats, hold opens wheel","settingsEmoteButtonWheel":"Opens the wheel","settingsAttackMode":"Attack / mine","settingsAttackHoldHint":"Hold attack to keep attacking or mining.","settingsAttackToggleHint":"Press attack once to keep attacking or mining, and again to stop.","settingsAttackHold":"Hold","settingsAttackToggle":"Toggle","settingsLargePointer":"Large pointer and focus","settingsLargePointerInfo":"A bigger menu cursor, thicker selection brackets and bigger button hints.","settingsRemap":"Remap buttons","settingsRemapHint":"Select an action, then press a button. If that button is taken, the two swap.","settingsLayoutSouthpaw":"Southpaw (move with the right stick)","settingsLayoutTriggersSwapped":"Triggers swapped (attack with the left trigger)","settingsCapturePrompt":"Press a button","settingsCaptureCancelHint":"Press {{button}} to cancel","settingsCaptureCancelOrBindHint":"Tap {{button}} to cancel, or hold it to choose it","settingsReset":"Reset","settingsSwapNotice":"{{action}} moved to {{button}}","settingsResetAll":"Reset all buttons and sticks","settingsGroupGameplay":"Movement & gameplay","settingsGroupMenus":"Menus","settingsGroupInventory":"Inventory","settingsGroupKeyboard":"On-screen keyboard","settingsActionMove":"Move","settingsActionLook":"Look around","settingsActionJump":"Jump","settingsActionSneak":"Sneak","settingsActionSneakToggle":"Toggle sneak","settingsActionSprint":"Sprint","settingsActionAttack":"Attack / mine","settingsActionUse":"Use / place","settingsActionHotbarPrevious":"Previous hotbar slot","settingsActionHotbarNext":"Next hotbar slot","settingsActionInventory":"Inventory","settingsActionActionButton":"Game action","settingsActionPerspective":"Change view","settingsActionPickBlock":"Pick block (creative)","settingsActionDrop":"Drop item","settingsActionEmoteWheel":"Emotes","settingsActionChat":"Chat","settingsActionPause":"Pause menu","settingsActionLeaderboard":"Shop / leaderboard","settingsActionMenuConfirm":"Select","settingsActionMenuBack":"Back","settingsActionMenuTabPrevious":"Previous tab","settingsActionMenuTabNext":"Next tab","settingsActionMenuPageUp":"Page up","settingsActionMenuPageDown":"Page down","settingsActionMenuSecondary":"Secondary action","settingsActionMenuToggleCursor":"Switch to virtual cursor","settingsActionInventoryPrimary":"Pick up / place","settingsActionInventorySecondary":"Pick up half / place one","settingsActionInventoryQuickMove":"Quick move","settingsActionInventoryHotbarSwap":"Swap with hotbar slot","settingsActionInventoryClose":"Close","settingsActionInventoryPanelPrevious":"Previous panel","settingsActionInventoryPanelNext":"Next panel","settingsActionInventoryDrop":"Drop item","settingsActionKeyboardType":"Type key","settingsActionKeyboardBackspace":"Backspace","settingsActionKeyboardSpace":"Space","settingsActionKeyboardCaretLeft":"Move cursor left","settingsActionKeyboardCaretRight":"Move cursor right","settingsActionKeyboardShift":"Shift","settingsActionKeyboardSymbols":"Accents and symbols","settingsActionKeyboardSubmit":"Send","settingsActionKeyboardClose":"Close keyboard","settingsActionKeyboardChannel":"Chat channel","settingsAlternatives":"Try alternatives","settingsAlternativesHint":"Try each way of playing and keep the one that feels best.","settingsMenuNavigation":"Menu navigation","settingsMenuNavigationHint":"Steer a cursor with the stick and jump between buttons with the D-pad, or use just one.","settingsNavHybrid":"Cursor and D-pad","settingsMenuNavFocus":"Jump between buttons","settingsVirtualCursor":"Virtual cursor","settingsInventoryNavigation":"Inventory","settingsInventoryNavigationHint":"Steer a cursor with the stick and step slot by slot with the D-pad, or use just one.","settingsInventoryNavSlot":"Slot by slot","settingsQuickChat":"Hold chat button","settingsQuickChatHint":"Hold the chat button to pick a quick phrase. Tapping it still opens chat.","settingsQuickChatWheel":"Quick chat wheel","settingsQuickChatOff":"Off","settingsLeaderboardButton":"Shop / leaderboard button","settingsLeaderboardButtonHint":"Open the shop in one press in games that have one. The lobby leaderboard is still in the pause menu.","settingsLeaderboardButtonShop":"Shop, in games with one","settingsLeaderboardButtonLeaderboard":"Always the leaderboard","settingsTester":"Gamepad tester","settingsTesterNoPad":"Connect a gamepad and press any button to test it.","settingsTesterFamily":"Detected: {{family}}","settingsTesterHint":"Start a test to try every button and stick without moving through the menu.","settingsTesterStart":"Start test","settingsTesterStop":"Stop test","settingsTesterTesting":"Press anything to see it light up. To stop, hold {{button}} or press it three times.","settingsControlsNote":"Playing with a gamepad? Change its buttons and feel in Gamepad settings.","settingsOpenController":"Gamepad settings","keyboardSpace":"Space","keyboardSend":"Send","keyboardDone":"Done","keyboardTargetChat":"Chat","keyboardTargetSign":"Sign","keyboardTargetNameTag":"Name tag","keyboardTargetBook":"Book page","keyboardTargetBookTitle":"Book title","keyboardTargetText":"Text","keyboardPhraseGg":"gg","keyboardPhraseHi":"hi","keyboardPhraseThanks":"thanks","keyboardPhraseGl":"gl","keyboardPhraseBrb":"brb","keyboardPhraseYes":"yes","keyboardPhraseNo":"no","keyboardPhraseHelp":"help!","quickChatPick":"Pick a phrase","actionWheelPick":"Pick an action","wheelReleaseToPick":"Release to pick","wheelClose":"Close","wheelChoose":"Choose","menusSelect":"Select","menusBack":"Back","menusClose":"Close","menusQuickChat":"Quick chat (hold)","menusSkipTutorial":"Skip tutorial","menusTabs":"Tabs","menusRows":"Rows","menusCursorMode":"Cursor","menusFocusMode":"Focus","menusClick":"Click","menusRightClick":"Right-click","menusScroll":"Scroll","menusFriends":"Friends","menusSearch":"Search","menusSettings":"Settings","menusLeaveGameTitle":"Leave the game?","menusLeaveGameLeave":"Leave","menusLeaveGameStay":"Stay","menusNotifications":"Notifications","menusLobby":"Lobby","menusShop":"Shop","menusTasks":"Tasks & leaderboards","menusInvite":"Invite friends","menusAdjust":"Adjust","menusFavourite":"Favourite","screensPressToContinue":"Press {{button}} to continue","screensPressToEnterGame":"Press {{button}} to enter game","screensEnterGame":"Enter game","screensBackToGames":"Back to games","tutorialMine":"Mine","tutorialPlace":"Place / Use","tutorialInventory":"Inventory","tutorialPause":"Pause","menusUseMouse":"Use a mouse or touch here"}}');
    var Ob = hb(1095),
      Gb = hb(1302),
      Ub = hb(7830),
      Lb = hb(65),
      Yb = hb(13),
      Sb = hb(16),
      ab = hb(7843),
      Hb = hb(7882),
      wb = hb(7857),
      Zb = hb(7886),
      Xb = hb(7836),
      pb = hb(8377),
      ob = hb(8384),
      Ab = hb(1572);
    const lb = (bb, ub, hb) => Math.max(ub, Math.min(hb, bb)),
      Kb = bb => Math.min(bb.width, bb.height) / 720,
      Wb = bb => Math.max(.15, bb);
    class Cb {
      constructor() {
        this.locked = !1
      }
      lock() {
        this.locked = !0
      }
      update(bb, ub) {
        const hb = Math.hypot(bb.x, bb.y) >= (bb => Math.max(.3, bb))(ub);
        return this.locked ? (this.locked = hb, !1) : hb
      }
    }
    const db = (bb, ub) => {
        const hb = lb(ub.dtMs, 0, 100),
          Bb = hb / 1e3,
          Ob = Kb(ub.viewport) * (ub.cursorSpeedPercent / 100),
          Gb = (0, Xb.j)(ub.stick, Wb(ub.moveDeadzone)),
          Ub = Math.hypot(Gb.x, Gb.y),
          Lb = ((bb, ub, hb) => {
            if (ub < .3) return 0;
            const Bb = hb / 350;
            return ub >= .85 ? Math.min(1, bb + Bb) : Math.max(0, bb - Bb)
          })(bb.speedRamp, Ub, hb);
        let Yb = bb.x,
          Sb = bb.y;
        if (Ub > 0) {
          const bb = .45 + .55 * Lb,
            hb = ub.context.overInteractive ? .45 : 1,
            ab = 1400 * (bb => {
              const ub = lb(bb, 0, 1);
              return .3 * ub + .7 * ub * ub
            })(Ub) * Ob * bb * hb;
          Yb += Gb.x / Ub * ab * Bb, Sb += Gb.y / Ub * ab * Bb
        }
        const ab = Math.hypot(ub.dpad.x, ub.dpad.y);
        if (ab > 0) {
          const bb = 500 * Ob;
          Yb += ub.dpad.x / ab * bb * Bb, Sb += ub.dpad.y / ab * bb * Bb
        }
        const Hb = ub.context.magnetTarget;
        if (Hb && Ub < .3 && 0 === ab) {
          const bb = ((bb, ub, hb, Bb, Ob) => {
            const Gb = ub.x - bb.x,
              Ub = ub.y - bb.y,
              Lb = Math.hypot(Gb, Ub);
            if (0 === Lb) return {
              x: 0,
              y: 0
            };
            const Yb = Math.min(Lb, Ob * (1 - Bb / .3));
            let Sb = Gb / Lb * Yb,
              ab = Ub / Lb * Yb;
            if (Bb > 0) {
              const bb = hb.x / Bb,
                ub = hb.y / Bb,
                Ob = Sb * bb + ab * ub;
              Ob < 0 && (Sb -= Ob * bb, ab -= Ob * ub)
            }
            return {
              x: Sb,
              y: ab
            }
          })({
            x: Yb,
            y: Sb
          }, Hb, Gb, Ub, 120 * Kb(ub.viewport) * Bb);
          Yb += bb.x, Sb += bb.y
        }
        return {
          x: lb(Yb, 0, Math.max(0, ub.viewport.width - 1)),
          y: lb(Sb, 0, Math.max(0, ub.viewport.height - 1)),
          speedRamp: Lb
        }
      },
      rb = bb => {
        const ub = (0, Xb.j)(bb, .2);
        return 0 !== ub.x || 0 !== ub.y
      },
      jb = (bb, ub) => {
        const hb = (0, Xb.j)(bb, .2),
          Bb = Math.hypot(hb.x, hb.y);
        if (0 === Bb) return {
          x: 0,
          y: 0
        };
        const Ob = Bb * Bb * 1600,
          Gb = lb(ub, 0, 100) / 1e3;
        return {
          x: hb.x / Bb * Ob * Gb,
          y: hb.y / Bb * Ob * Gb
        }
      },
      nb = (bb, ub) => "y" === ub ? bb.scrollHeight > bb.clientHeight + 1 : bb.scrollWidth > bb.clientWidth + 1,
      Db = (bb, ub) => {
        if (!nb(bb, ub)) return !1;
        const hb = getComputedStyle(bb),
          Bb = "y" === ub ? hb.overflowY : hb.overflowX;
        return "auto" === Bb || "scroll" === Bb
      },
      xb = (bb, ub, hb) => {
        for (let Gb = bb instanceof HTMLElement ? bb : null !== (Bb = null === bb || void 0 === bb ? void 0 : bb.parentElement) && void 0 !== Bb ? Bb : null; Gb; Gb = Gb.parentElement) {
          var Bb;
          if (Db(Gb, ub)) return Gb;
          if (Gb === hb) return null
        }
        if (hb) return null;
        const Ob = document.scrollingElement;
        return Ob instanceof HTMLElement && nb(Ob, ub) ? Ob : null
      },
      zb = new WeakMap,
      gb = (bb, ub) => {
        const hb = performance.now(),
          Bb = zb.get(bb);
        if (Bb && Bb.axis === ub && hb - Bb.atMs < 500 && (!Bb.container || Bb.container.isConnected)) return Bb.container;
        const Ob = ib(bb, ub);
        return zb.set(bb, {
          axis: ub,
          atMs: hb,
          container: Ob
        }), Ob
      },
      ib = (bb, ub) => {
        let hb = Db(bb, ub) ? bb : null,
          Bb = hb ? hb.clientWidth * hb.clientHeight : 0;
        for (const Ob of bb.querySelectorAll("*")) {
          const bb = Ob.clientWidth * Ob.clientHeight;
          bb > Bb && Db(Ob, ub) && (hb = Ob, Bb = bb)
        }
        return hb
      },
      vb = (bb, ub, hb) => "y" === ub ? hb < 0 ? bb.scrollTop > 0 : bb.scrollTop + bb.clientHeight < bb.scrollHeight - 1 : hb < 0 ? bb.scrollLeft > 0 : bb.scrollLeft + bb.clientWidth < bb.scrollWidth - 1,
      tb = (bb, ub, hb) => {
        "y" === ub ? bb.scrollBy({
          top: hb,
          behavior: "instant"
        }) : bb.scrollBy({
          left: hb,
          behavior: "instant"
        })
      },
      Jb = bb => {
        if (!bb || bb === document.scrollingElement) return new DOMRect(0, 0, window.innerWidth, window.innerHeight);
        const ub = bb.getBoundingClientRect(),
          hb = Math.max(0, ub.left),
          Bb = Math.max(0, ub.top);
        return new DOMRect(hb, Bb, Math.min(window.innerWidth, ub.right) - hb, Math.min(window.innerHeight, ub.bottom) - Bb)
      },
      eb = (bb, ub) => bb.left < ub.right && ub.left < bb.right && bb.top < ub.bottom && ub.top < bb.bottom;
    var Nb = hb(49),
      sb = hb(958),
      Mb = hb.n(sb),
      mb = hb(1007);
    let Ib = 0,
      Pb = !1;
    class qb {
      constructor() {
        this.element = null, this.shownKey = "", this.gap = null
      }
      setElement(bb) {
        this.element = bb, this.shownKey = "", this.gap = null
      }
      show(bb) {
        const ub = this.element;
        if (!ub) return;
        const hb = bb ? this.keepOnScreen(ub, bb) : null,
          Bb = hb ? `${hb.left},${hb.top},${hb.width},${hb.height}` : "";
        if (Bb === this.shownKey) return;
        const Ob = "" === this.shownKey;
        this.shownKey = Bb, ub.classList.toggle("Visible", null !== hb), hb && (ub.classList.toggle("Snap", Ob), ub.style.width = `${hb.width}px`, ub.style.height = `${hb.height}px`, ub.style.transform = `translate(${hb.left}px, ${hb.top}px)`, Ob && (ub.offsetWidth, ub.classList.remove("Snap")))
      }
      hide() {
        this.show(null)
      }
      keepOnScreen(bb, ub) {
        var hb;
        const Bb = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!Pb){Pb=!0;const bb=document.createElement("div");bb.setAttribute("aria-hidden","true"),bb.style.cssText="position: fixed; top: 0; left: 0; width: 1rem; height: 0; visibility: hidden; pointer-events: none",document.body.appendChild(bb),new ResizeObserver((()=>{Ib++})).observe(bb)}return String(Ib)})()}`;
        (null === (hb = this.gap) || void 0 === hb ? void 0 : hb.key) !== Bb && (this.gap = {
          px: parseFloat(getComputedStyle(bb).paddingLeft) || 0,
          key: Bb
        });
        const Ob = this.gap.px + 2,
          Gb = Math.max(ub.left, Ob),
          Ub = Math.max(ub.top, Ob),
          Lb = Math.min(ub.left + ub.width, window.innerWidth - Ob),
          Yb = Math.min(ub.top + ub.height, window.innerHeight - Ob);
        return Lb <= Gb || Yb <= Ub ? ub : {
          left: Gb,
          top: Ub,
          width: Lb - Gb,
          height: Yb - Ub
        }
      }
    }
    const Eb = bb => {
      let {
        placer: ub,
        className: hb
      } = bb;
      const Bb = (0, Nb.useCallback)((bb => {
        ub.setElement(bb)
      }), [ub]);
      return (0, mb.jsx)("div", {
        ref: Bb,
        className: Mb()("PadReticle", hb),
        "aria-hidden": !0
      })
    };
    var yb = hb(8386);
    const Vb = {
      x: 0,
      y: 0,
      visible: !1,
      pressed: !1
    };
    const Fb = new class {
      constructor() {
        this.state = Vb, this.listeners = new Set
      }
      get() {
        return this.state
      }
      set(bb) {
        if (ub = this.state, hb = bb, (ub.visible || hb.visible) && (ub.visible !== hb.visible || ub.x !== hb.x || ub.y !== hb.y || ub.pressed !== hb.pressed)) {
          var ub, hb;
          this.state = bb;
          for (const ub of this.listeners) ub(bb)
        }
      }
      hide() {
        this.set(Vb)
      }
      subscribe(bb) {
        return this.listeners.add(bb), () => {
          this.listeners.delete(bb)
        }
      }
    };
    var fb = hb(8397);
    const kb = (bb, ub) => {
        let {
          kind: hb,
          holding: Bb,
          hasPress: Ob,
          hasBack: Gb,
          slotHasItem: Ub
        } = ub;
        switch (bb) {
          case "primary":
            return "slot" === hb ? "slotPrimary" : "recipe" === hb || "button" === hb ? Ob ? "pressPrimary" : "click" : "textField" === hb ? "openKeyboard" : null;
          case "secondary":
            return "slot" === hb ? "slotSecondary" : "button" !== hb && "recipe" !== hb || !Ob ? null : "pressSecondary";
          case "quickMove":
            return "slot" === hb && Ub ? "slotQuickMove" : null;
          case "hotbarSwap":
            return "slot" === hb && Ub && !Bb ? "hotbarPick" : null;
          case "openButton":
            return "close";
          case "back":
            return Bb ? "cancel" : Gb ? "pressBack" : "close"
        }
      },
      Tb = bb => {
        const ub = [];
        if (bb.hotbarPicking) return ub.push({
          actions: ["inventoryPrimary", "inventoryHotbarSwap"],
          labelKey: "inventorySwapHere"
        }), ub.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryCancel"
        }), ub;
        if (bb.holding) "slot" === bb.kind ? (ub.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryPlace"
        }), ub.push({
          actions: ["inventorySecondary"],
          labelKey: "inventoryPlaceOne"
        })) : "textField" === bb.kind && ub.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryType"
        }), ub.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryPutBack"
        }), ub.push({
          actions: ["inventoryDrop"],
          labelKey: "inventoryDrop"
        }), bb.openButtonCloses && ub.push({
          actions: ["inventory"],
          labelKey: "inventoryClose"
        });
        else {
          var hb;
          "slot" === bb.kind && bb.slotHasItem ? (ub.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryTake"
          }), ub.push({
            actions: ["inventorySecondary"],
            labelKey: "inventoryTakeHalf"
          }), ub.push({
            actions: ["inventoryQuickMove"],
            labelKey: bb.quickMoveToHotbar ? "inventoryToHotbar" : "inventoryQuickMove"
          }), ub.push({
            actions: ["inventoryHotbarSwap"],
            labelKey: "inventoryHotbarSwap"
          }), ub.push({
            actions: ["inventoryDrop"],
            labelKey: "inventoryDrop"
          })) : "button" !== bb.kind && "recipe" !== bb.kind || !bb.pressHints ? "button" === bb.kind || "recipe" === bb.kind ? ub.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventorySelect"
          }) : "textField" === bb.kind && ub.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryType"
          }) : (bb.pressHints.primary && ub.push({
            actions: ["inventoryPrimary"],
            labelKey: bb.pressHints.primary
          }), bb.pressHints.secondary && ub.push({
            actions: ["inventorySecondary"],
            labelKey: bb.pressHints.secondary
          }));
          const Bb = null === (hb = bb.pressHints) || void 0 === hb ? void 0 : hb.back;
          Bb && ub.push({
            actions: ["inventoryClose"],
            labelKey: Bb
          });
          const Ob = [];
          bb.openButtonCloses && Ob.push("inventory"), Bb || Ob.push("inventoryClose"), Ob.length > 0 && ub.push({
            actions: Ob,
            labelKey: "inventoryClose"
          })
        }
        return ub.push({
          actions: ["inventoryPanelPrevious", "inventoryPanelNext"],
          labelKey: "inventoryPanels"
        }), bb.hasCategories ? ub.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryCategory"
        }) : bb.hasList && ub.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryPage"
        }), ub
      };
    var cb = hb(8410),
      Qb = hb(8401);
    class Rb {
      constructor(bb) {
        this.probes = bb, this.byContainer = new Map, this.byParent = new Map
      }
      find(bb, ub) {
        const hb = xb(bb, "y", ub);
        if (!hb) return null;
        let Bb = this.byContainer.get(hb);
        return Bb || (this.probes.push({
          element: hb,
          rect: Bu(hb.getBoundingClientRect())
        }), Bb = {
          container: hb,
          box: Jb(hb),
          group: hu(hb)
        }, this.byContainer.set(hb, Bb)), Bb
      }
      findForParent(bb, ub) {
        let hb = this.byParent.get(bb);
        return void 0 === hb && (hb = this.find(bb, ub), this.byParent.set(bb, hb)), hb
      }
    }
    const bu = new WeakMap;
    let uu = 0;
    const hu = bb => {
        let ub = bu.get(bb);
        return ub || (ub = "el:" + uu++, bu.set(bb, ub)), ub
      },
      Bu = bb => ({
        left: bb.left,
        top: bb.top,
        width: bb.width,
        height: bb.height
      }),
      Ou = bb => bb.width > 0 && bb.height > 0,
      Gu = (bb, ub) => Ou(bb) && bb.left + bb.width > 0 && bb.top + bb.height > 0 && bb.left < ub.width && bb.top < ub.height,
      Uu = (bb, ub, hb) => {
        const Bb = bb.top + bb.height / 2;
        return Gu(bb, ub) && (!hb || Bb >= hb.top && Bb <= hb.bottom)
      },
      Lu = bb => ({
        x: bb.left + bb.width / 2,
        y: bb.top + bb.height / 2
      }),
      Yu = (bb, ub, hb) => bb < 0 ? hb >= 0 ? 0 : ub - 1 : ((bb + hb) % ub + ub) % ub,
      Su = bb => "Left" === bb || "Right" === bb,
      au = (bb, ub, hb) => {
        const Bb = Su(hb),
          Ob = Bb ? bb.top : bb.left,
          Gb = Bb ? bb.height : bb.width,
          Ub = Bb ? ub.top : ub.left,
          Lb = Bb ? ub.height : ub.width,
          Yb = Math.max(0, Math.max(Ub - (Ob + Gb), Ob - (Ub + Lb)));
        return Gb > 1.5 * Lb ? {
          gap: Yb,
          offset: Math.max(0, Ub - Ob) + .1 * Math.max(0, Ob - Ub)
        } : {
          gap: Yb,
          offset: Math.abs(Ub + Lb / 2 - (Ob + Gb / 2))
        }
      },
      Hu = (bb, ub, hb) => {
        const Bb = ((bb, ub, hb) => {
          const Bb = Lu(bb),
            Ob = Lu(ub),
            Gb = Su(hb) ? Math.min(bb.width, ub.width) / 4 : Math.min(bb.height, ub.height) / 4;
          switch (hb) {
            case "Right":
              return Ob.x - Bb.x >= Gb ? Math.max(0, ub.left - (bb.left + bb.width)) : null;
            case "Left":
              return Bb.x - Ob.x >= Gb ? Math.max(0, bb.left - (ub.left + ub.width)) : null;
            case "Down":
              return Ob.y - Bb.y >= Gb ? Math.max(0, ub.top - (bb.top + bb.height)) : null;
            case "Up":
              return Bb.y - Ob.y >= Gb ? Math.max(0, bb.top - (ub.top + ub.height)) : null
          }
        })(bb, ub, hb);
        if (null === Bb) return null;
        const Ob = au(bb, ub, hb);
        return Bb + 3 * Ob.gap + .5 * Ob.offset
      },
      wu = (bb, ub) => ub.visible || null !== ub.scrollGroup && ub.scrollGroup === bb.scrollGroup,
      Zu = (bb, ub, hb, Bb) => {
        let Ob = null,
          Gb = 1 / 0;
        for (const Ub of ub) {
          if (Ub.key === bb.key || !wu(bb, Ub) || !Bb(Ub)) continue;
          const ub = Hu(bb.rect, Ub.rect, hb);
          null !== ub && ub < Gb && (Ob = Ub, Gb = ub)
        }
        return Ob
      },
      Xu = (bb, ub, hb) => {
        const Bb = Zu(bb, ub, hb, (() => !0));
        if (!Bb || Su(hb) || null === bb.scrollGroup || Bb.scrollGroup === bb.scrollGroup) return Bb;
        const Ob = Zu(bb, ub, hb, (ub => 0 === au(bb.rect, ub.rect, hb).gap));
        return null !== Ob && void 0 !== Ob ? Ob : Bb
      },
      pu = (bb, ub, hb) => {
        let Bb = null,
          Ob = 1 / 0;
        for (const Gb of ub) {
          if (!Gb.visible || hb && !hb(Gb)) continue;
          const ub = Lu(Gb.rect),
            Ub = Math.hypot(ub.x - bb.x, ub.y - bb.y);
          Ub < Ob && (Bb = Gb, Ob = Ub)
        }
        return Bb
      },
      ou = bb => {
        const {
          rect: ub,
          clip: hb
        } = bb;
        if (!hb) return ub;
        const Bb = Math.max(ub.left, hb.left),
          Ob = Math.max(ub.top, hb.top);
        return {
          left: Bb,
          top: Ob,
          width: Math.min(ub.left + ub.width, hb.left + hb.width) - Bb,
          height: Math.min(ub.top + ub.height, hb.top + hb.height) - Ob
        }
      },
      Au = (bb, ub) => ub.x >= bb.left && ub.x < bb.left + bb.width && ub.y >= bb.top && ub.y < bb.top + bb.height,
      lu = (bb, ub) => {
        let hb = null,
          Bb = 1 / 0;
        for (const Ob of ub) {
          const ub = ou(Ob);
          (Ob.visible || Ob.clip) && Au(ub, bb) && (ub.width * ub.height < Bb && (hb = Ob, Bb = ub.width * ub.height))
        }
        return hb
      },
      Ku = bb => {
        let ub = null;
        for (const hb of bb) {
          if (!hb.visible) continue;
          if (!ub) {
            ub = hb;
            continue
          }
          const bb = Math.min(ub.rect.height, hb.rect.height) / 2,
            Bb = hb.rect.top - ub.rect.top;
          (Bb < -bb || Math.abs(Bb) <= bb && hb.rect.left < ub.rect.left) && (ub = hb)
        }
        return ub
      },
      Wu = (bb, ub, hb, Bb, Ob) => {
        const Gb = Ob % ub,
          Ub = Math.floor(Ob / ub);
        return {
          left: bb.left + Gb * hb,
          top: bb.top + Ub * Bb,
          width: bb.width,
          height: bb.height
        }
      },
      Cu = ".EntireInventoryWrapper .Inventory, .HotBarGameItemsContainer",
      du = ".LazyLoadedItemWrapper",
      ru = ["[data-inven-idx]", "[data-recipe-key]", "[role=button]", "button", "input:not([type=hidden])", "textarea", ".CreativeCategoryTab", ".CreativeCategoryDropdownButton", ".CreativeCategoryDropdownOption", "[data-craft-ingredient]"].join(","),
      ju = [
        ["hotbar", ".HotBarGameItemsContainer"],
        ["gameButtons", ".ClientGameInventoryButtons"],
        ["categories", ".CreativeCategoryRail"],
        ["recipe", ".CraftableInfo"],
        ["armour", ".ArmourItemSlots"],
        ["main", ".InvenBodyRight"],
        ["left", ".InvenLeftSide"]
      ],
      nu = ["gameButtons", "categories", "left", "recipe", "armour", "main", "hotbar"],
      Du = bb => bb.hasAttribute("data-inven-idx") ? "slot" : bb.hasAttribute("data-recipe-key") ? "recipe" : bb.hasAttribute("data-craft-ingredient") || (0, Qb.t)(bb) ? "info" : (0, yb.R)(bb) ? "textField" : "button",
      xu = (bb, ub) => "slot" === ub ? Number(bb.getAttribute("data-inven-idx")) : null,
      zu = bb => bb.matches(du) ? bb.querySelector(ru) : bb,
      gu = bb => {
        var ub, hb;
        return {
          element: bb,
          recipe: null !== (ub = bb && (null === (hb = zu(bb)) || void 0 === hb ? void 0 : hb.getAttribute("data-recipe-key"))) && void 0 !== ub ? ub : null
        }
      },
      iu = bb => {
        const ub = zu(bb);
        if (!ub) return {
          kind: "pending",
          idx: null
        };
        const hb = Du(ub);
        return {
          kind: hb,
          idx: xu(ub, hb)
        }
      },
      vu = bb => {
        const ub = [];
        for (const [hb, Bb] of ju) {
          bb.matches(Bb) && ub.push([hb, bb]);
          for (const Ob of bb.querySelectorAll(Bb)) ub.push([hb, Ob])
        }
        return ub
      },
      tu = (bb, ub) => {
        for (const [hb, Bb] of bb)
          if (Bb.contains(ub)) return hb;
        return "other"
      },
      Ju = (bb, ub, hb, Bb, Ob, Gb, Ub, Lb) => {
        var Yb;
        const Sb = bb.children,
          ab = Bu(Sb[0].getBoundingClientRect()),
          Hb = [{
            element: Sb[0],
            rect: ab
          }];
        if (Gb.push(Hb[0]), 0 === ab.width || 0 === ab.height) return;
        let wb = 1;
        for (; wb < Sb.length && Math.abs(Sb[wb].getBoundingClientRect().top - ab.top) < 1;) wb++;
        const Zb = bb => {
            const ub = {
              element: Sb[bb],
              rect: Bu(Sb[bb].getBoundingClientRect())
            };
            return Gb.push(ub), Hb.push(ub), ub.rect
          },
          Xb = wb > 1 ? Zb(1).left - ab.left : ab.width,
          pb = Sb.length > wb ? Zb(wb).top - ab.top : ab.height,
          ob = Ub.find(bb, ub);
        let Ab = null;
        if (ob) {
          var lb;
          const {
            container: bb,
            box: ub
          } = ob;
          Ab = null !== (lb = Lb.get(bb)) && void 0 !== lb ? lb : null, Ab || (Ab = {
            top: bb.scrollTop,
            left: bb.scrollLeft,
            box: ub,
            viewport: Bb,
            targets: [],
            probes: [],
            holdsOthers: !1
          }, Lb.set(bb, Ab)), Ab.probes.push(...Hb)
        }
        const Kb = Ob.length;
        for (let rb = 0; rb < Sb.length; rb++) {
          var Wb, Cb, db;
          const bb = Sb[rb],
            ub = Wu(ab, wb, Xb, pb, rb),
            Gb = bb.firstElementChild ? bb.querySelector(ru) : null,
            Ub = Gb ? Du(Gb) : "pending";
          Ob.push({
            key: hu(bb),
            rect: ub,
            panel: hb,
            scrollGroup: null !== (Wb = null === ob || void 0 === ob ? void 0 : ob.group) && void 0 !== Wb ? Wb : null,
            visible: Uu(ub, Bb, null === ob || void 0 === ob ? void 0 : ob.box),
            clip: null !== (Cb = null === ob || void 0 === ob ? void 0 : ob.box) && void 0 !== Cb ? Cb : null,
            element: bb,
            kind: Ub,
            idx: Gb ? xu(Gb, Ub) : null,
            scrollContainer: null !== (db = null === ob || void 0 === ob ? void 0 : ob.container) && void 0 !== db ? db : null
          })
        }
        null === (Yb = Ab) || void 0 === Yb || Yb.targets.push(...Ob.slice(Kb))
      },
      eu = bb => bb instanceof Element && null !== bb.closest(du),
      Nu = bb => null !== bb.scrollContainer && eu(bb.element);
    class su {
      constructor() {
        this.latched = null, this.presses = 0
      }
      press(bb, ub, hb, Bb) {
        this.latched = {
          source: bb,
          focusKey: ub,
          sinceMs: hb,
          hold: {
            id: ++this.presses,
            holdMs: Bb
          }
        }
      }
      update(bb, ub, hb) {
        const Bb = this.latched;
        return Bb ? bb && ub === Bb.focusKey ? hb - Bb.sinceMs < Bb.hold.holdMs ? null : (this.latched = null, Bb.source) : (this.latched = null, null) : null
      }
      getHold() {
        var bb, ub;
        return null !== (bb = null === (ub = this.latched) || void 0 === ub ? void 0 : ub.hold) && void 0 !== bb ? bb : null
      }
      reset() {
        this.latched = null
      }
    }
    var Mu = hb(8417);
    const mu = {
        kind: "none"
      },
      Iu = bb => ({
        x: bb.clientX,
        y: bb.clientY
      }),
      Pu = () => 2 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
    class qu {
      constructor() {
        this.hovered = mu, this.signature = "", this.holding = !1, this.lastPoint = {
          clientX: 0,
          clientY: 0
        }
      }
      sync(bb, ub, hb, Bb, Ob) {
        const Gb = null !== ub ? {
            kind: "slot",
            idx: ub
          } : hb ? {
            kind: "element",
            element: hb
          } : mu,
          Ub = `${Ob}|${Math.round(Bb.clientX)},${Math.round(Bb.clientY)}`,
          Lb = (Yb = this.hovered, Sb = Gb, "slot" === Yb.kind && "slot" === Sb.kind ? Yb.idx === Sb.idx : "element" === Yb.kind && "element" === Sb.kind ? Yb.element === Sb.element : Yb.kind === Sb.kind);
        var Yb, Sb;
        if (Lb && Ub === this.signature) return;
        const ab = !Lb || Ob !== this.holding || "" === this.signature;
        this.signature = Ub, this.holding = Ob, this.lastPoint = Bb;
        const Hb = this.hovered;
        if (this.hovered = Gb, "slot" === Gb.kind) return this.leaveElement(Hb, null, Bb), void(ab ? bb.hover(Gb.idx, Bb) : bb.moveTo(Bb));
        if (Lb) return void("element" === Gb.kind ? (0, yb.r)(Gb.element, Gb.element, Iu(Bb)) : bb.hover(null, Bb));
        bb.hover(null, Bb);
        const wb = "element" === Gb.kind ? Gb.element : null;
        "element" === Hb.kind ? (0, yb.r)(Hb.element, wb, Iu(Bb)) : wb && (0, yb.r)(null, wb, Iu(Bb))
      }
      invalidate() {
        this.signature = ""
      }
      clear(bb) {
        const ub = this.hovered;
        this.hovered = mu, this.signature = "", "none" !== ub.kind && (this.leaveElement(ub, null, this.lastPoint), bb && "slot" === ub.kind && bb.hover(null, this.lastPoint))
      }
      leaveElement(bb, ub, hb) {
        "element" === bb.kind && (0, yb.r)(bb.element, ub, Iu(hb))
      }
    }
    class Eu {
      constructor() {
        this.lastTiltedMs = -1 / 0
      }
      update(bb, ub) {
        rb(bb) && (this.lastTiltedMs = ub)
      }
      allowsClick(bb) {
        return bb - this.lastTiltedMs > 150
      }
    }
    class yu {
      constructor() {
        this.remainder = 0, this.container = null
      }
      isScrolling(bb) {
        return 0 !== (0, Xb.j)(bb, .2).y
      }
      step(bb, ub, hb) {
        bb !== this.container && (this.container = bb, this.remainder = 0);
        const Bb = jb(ub, hb).y;
        if (0 === Bb) return this.remainder = 0, !1;
        const Ob = this.remainder + Bb,
          Gb = Math.trunc(Ob);
        if (this.remainder = Ob - Gb, 0 === Gb) return !1;
        const Ub = bb.scrollTop;
        return bb.scrollTop = Ub + Gb, bb.scrollTop !== Ub
      }
      current() {
        var bb;
        return null !== (bb = this.container) && void 0 !== bb && bb.isConnected ? this.container : null
      }
      reset() {
        this.remainder = 0, this.container = null
      }
    }
    var Vu = hb(8419);
    const Fu = "[data-pad-inventory-default]",
      fu = ".HotBarGameItemsContainer .InvenItem.Selected",
      ku = {
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
      Tu = [
        ["primary", "inventoryPrimary"],
        ["secondary", "inventorySecondary"],
        ["quickMove", "inventoryQuickMove"],
        ["hotbarSwap", "inventoryHotbarSwap"],
        ["back", "inventoryClose"],
        ["openButton", "inventory"]
      ],
      cu = ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryHotbarSwap", "inventoryClose", "inventoryDrop"],
      Qu = ["inventoryPanelPrevious", "inventoryPanelNext", "menuPageUp", "menuPageDown"],
      Ru = [...cu, ...Qu],
      bh = () => {
        return bb = (0, ab.f)("inventory"), !Ru.map(ab.f).includes(bb) && !(0, Xb.H)(bb);
        var bb
      },
      uh = new Set(["slotPrimary", "slotSecondary", "slotQuickMove", "pressPrimary", "pressSecondary", "openKeyboard"]),
      hh = (bb, ub) => {
        const hb = !(null === ub || void 0 === ub || !ub.isHolding());
        return function(bb, ub) {
          const hb = bb.find((bb => bb.visible && ub(bb)));
          if (hb) return hb;
          for (var Bb = arguments.length, Ob = new Array(Bb > 2 ? Bb - 2 : 0), Gb = 2; Gb < Bb; Gb++) Ob[Gb - 2] = arguments[Gb];
          for (const Ub of Ob) {
            const ub = Ku(bb.filter(Ub));
            if (ub) return ub
          }
          return Ku(bb)
        }(bb, (bb => {
          const {
            element: ub
          } = bb;
          return ub.matches(Fu) || null !== ub.querySelector(Fu) || ub.matches(fu)
        }), (bb => "slot" === bb.kind ? hb || null !== bb.idx && !(null === ub || void 0 === ub || !ub.hasItemAt(bb.idx)) : "recipe" === bb.kind || "pending" === bb.kind), (bb => "slot" === bb.kind || "button" === bb.kind))
      };
    class Bh {
      constructor() {
        this.set = null, this.observer = new MutationObserver((bb => {
          bb.some((bb => !eu(bb.target))) && (this.set = null)
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
              ub = [];
            let hb = !1;
            const Bb = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              Ob = new Map,
              Gb = new Rb(ub);
            for (const Hb of document.querySelectorAll(Cu)) {
              const ab = vu(Hb);
              hb ||= null !== Hb.querySelector(".CreativeCategoryTab");
              for (const hb of Hb.querySelectorAll(`${du}:first-child`)) {
                const Ub = hb.parentElement;
                Ju(Ub, Hb, tu(ab, Ub), Bb, bb, ub, Gb, Ob)
              }
              for (const hb of Hb.querySelectorAll(ru)) {
                var Ub, Lb, Yb, Sb;
                if (hb.closest(du) || hb.closest("[data-pad-ignore]")) continue;
                const wb = null === (Ub = hb.parentElement) || void 0 === Ub ? void 0 : Ub.closest(ru);
                if (wb && Hb.contains(wb)) continue;
                const Zb = Du(hb),
                  Xb = xu(hb, Zb);
                if (-1 === Xb) continue;
                const pb = Bu(hb.getBoundingClientRect());
                ub.push({
                  element: hb,
                  rect: pb
                });
                const ob = Gb.findForParent(hb.parentElement, Hb),
                  Ab = ob && !Ob.has(ob.container) ? ob : null;
                (Ab ? Ou(pb) : Gu(pb, Bb)) && bb.push({
                  key: hu(hb),
                  rect: pb,
                  panel: tu(ab, hb),
                  scrollGroup: null !== (Lb = null === Ab || void 0 === Ab ? void 0 : Ab.group) && void 0 !== Lb ? Lb : null,
                  visible: Uu(pb, Bb, null === Ab || void 0 === Ab ? void 0 : Ab.box),
                  clip: null !== (Yb = null === Ab || void 0 === Ab ? void 0 : Ab.box) && void 0 !== Yb ? Yb : null,
                  element: hb,
                  kind: Zb,
                  idx: Xb,
                  scrollContainer: null !== (Sb = null === Ab || void 0 === Ab ? void 0 : Ab.container) && void 0 !== Sb ? Sb : null
                })
              }
            }
            for (const [Hb, wb] of Ob) wb.holdsOthers = ub.some((bb => bb.element !== Hb && Hb.contains(bb.element) && !bb.element.closest(du)));
            const ab = new Map;
            for (const Hb of bb) ab.set(Hb.element, Hb);
            return {
              targets: bb,
              byElement: ab,
              hasCategories: hb,
              probes: ub,
              scrollers: Ob
            }
          })(), this.observer.disconnect();
          for (const bb of document.querySelectorAll(Cu)) this.observer.observe(bb, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "disabled", "aria-disabled", "tabindex", "data-inven-idx"]
          })
        }
        return this.set
      }
      scrolled(bb) {
        !this.set || bb instanceof Element && ((bb, ub) => {
          const hb = bb.scrollers.get(ub);
          if (!hb || hb.holdsOthers || ub.scrollLeft !== hb.left) return !1;
          const Bb = ub.scrollTop - hb.top;
          if (0 === Bb) return !0;
          hb.top = ub.scrollTop;
          for (const Ob of hb.probes) Ob.rect.top -= Bb;
          for (const Ob of hb.targets) Ob.rect.top -= Bb, Ob.visible = Uu(Ob.rect, hb.viewport, hb.box);
          return !0
        })(this.set, bb) || (this.set = null)
      }
      revalidate() {
        this.set && this.set.probes.some((bb => {
          return ub = bb.rect, hb = bb.element.getBoundingClientRect(), !(ub.left === hb.left && ub.top === hb.top && ub.width === hb.width && ub.height === hb.height);
          var ub, hb
        })) && (this.set = null)
      }
      disconnect() {
        this.observer.disconnect(), this.set = null
      }
    }
    const Oh = new class {
        constructor() {
          this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(Xb.A.map((bb => [bb, (0, pb.c)(Xb.D)]))), this.stickRepeat = new Xb.c((0, pb.c)(Xb.hb)), this.pageUpTimer = (0, pb.c)(Xb.$), this.pageDownTimer = (0, pb.c)(Xb.$), this.stickGate = new Cb, this.pointer = null, this.activePress = null, this.dropLatch = new su, this.scroller = new yu, this.scrollStickClick = new Eu, this.hover = new qu, this.lastRealPointer = null, this.placeAfterCategory = null, this.hotbarPick = null, this.ring = new qb, this.targets = new Bh, this.hasCategories = !1, this.wasShowing = !1, this.state = Mu.b, this.isActive = () => (0, cb.i)(), this.isShowing = () => "inventory" === Hb.c.getActiveConsumerName() && (0, Zb.k)(), this.getState = () => this.state, this.isSteppingSlots = () => this.isShowing() && null === this.pointer, this.onDeactivate = () => {
            this.endInteraction((0, cb.e)()), (0, cb.i)() || this.forgetSurface()
          }, this.forgetSurface = () => {
            var bb;
            this.reopenSlotIdx = null !== (bb = this.focused ? iu(this.focused).idx : null) && void 0 !== bb ? bb : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, cb.v)(), this.panelMemory.clear(), this.targets.disconnect()
          }, this.onFrame = bb => {
            (0, Lb.unstable_batchedUpdates)((() => {
              this.frame(bb)
            }))
          }, this.shouldBlockRealPointer = bb => bb.isTrusted && !(0, Ab.r)(bb) && this.isShowing(), this.noteRealPointer = bb => {
            bb instanceof MouseEvent && bb.isTrusted && !(0, Ab.r)(bb) && (this.lastRealPointer ??= {
              x: 0,
              y: 0
            }, this.lastRealPointer.x = bb.clientX, this.lastRealPointer.y = bb.clientY)
          }, this.wakePressActs = bb => {
            var ub;
            return bb === (0, ab.f)("inventoryClose") ? !(null !== (ub = (0, cb.e)()) && void 0 !== ub && ub.isHolding()) : !(bb !== (0, ab.f)("inventory") || !bh()) || ((0, Xb.H)(bb) ? this.isNavButton(bb) : Qu.some((ub => (0, ab.f)(ub) === bb)))
          }
        }
        frame(bb) {
          var ub, hb, Bb, Ob, Gb;
          const Ub = (0, cb.e)();
          if (!(0, Zb.k)()) return void(this.wasShowing && (this.endInteraction(Ub), this.rehoverRealPointer()));
          this.wasShowing = !0, this.applyFocusRequest(), bb.wokeDevice && this.focusWakePointer(!(null === Ub || void 0 === Ub || !Ub.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, wb.e)().inventoryNavigation || this.pointer || this.engagePointer();
          const Lb = performance.now();
          this.handleNavigation(bb, Lb), this.handlePanels(bb), this.handlePaging(bb, Lb), this.handleScroll(bb), this.handleButtons(bb, Lb, Ub), this.applyFocusRequest(), this.pointer && this.hoverAtPointer();
          const Yb = this.ensureFocus(),
            Sb = this.focusContext(Ub);
          this.ring.show(Yb);
          const Hb = "slot" === Sb.kind ? Sb.idx : null,
            Xb = null !== (ub = null === (hb = Sb.actionElement) || void 0 === hb ? void 0 : hb.querySelector(".DoCraftItem")) && void 0 !== ub ? ub : Sb.actionElement;
          this.pointer ? (this.hover.sync(Ub, Hb, Xb, ((bb, ub) => {
            const hb = ub ? Pu() : 0;
            return {
              clientX: bb.x - hb,
              clientY: bb.y - hb
            }
          })(this.pointer, Sb.holding), Sb.holding), Fb.set({
            x: this.pointer.x,
            y: this.pointer.y,
            visible: !0,
            pressed: bb.isHeld((0, ab.f)("inventoryPrimary"))
          })) : Yb && this.focused && this.hover.sync(Ub, Hb, Xb, ((bb, ub) => {
            if (!ub) return {
              clientX: bb.left + bb.width - 10,
              clientY: bb.top + bb.height / 2 - 10
            };
            const hb = Pu();
            return {
              clientX: bb.left + bb.width / 2 - hb,
              clientY: bb.top + bb.height / 2 - hb
            }
          })(Yb, Sb.holding), Sb.holding), this.publishState({
            showing: !0,
            kind: Sb.kind,
            holding: Sb.holding,
            slotHasItem: Sb.slotHasItem,
            pressHints: null !== (Bb = null === (Ob = Sb.press) || void 0 === Ob ? void 0 : Ob.hints) && void 0 !== Bb ? Bb : null,
            hasCategories: this.hasCategories,
            hasList: !!this.focusTarget && Nu(this.focusTarget),
            openButtonCloses: bh(),
            steppingSlots: null === this.pointer,
            quickMoveToHotbar: "slot" === Sb.kind && !(null === (Gb = Sb.actionElement) || void 0 === Gb || !Gb.closest(".CreativeItemSlots")),
            dropStackHold: this.dropLatch.getHold(),
            hotbarPicking: null !== this.hotbarPick
          })
        }
        focusWakePointer(bb) {
          var ub;
          const hb = (0, Zb.e)();
          if (!hb) return;
          this.targets.revalidate();
          const Bb = this.getTargets().targets;
          this.setFocus(null !== (ub = lu(hb, Bb)) && void 0 !== ub ? ub : bb ? pu(hb, Bb, (bb => {
            let {
              rect: ub
            } = bb;
            const Bb = Math.max(ub.left - hb.x, 0, hb.x - (ub.left + ub.width)),
              Ob = Math.max(ub.top - hb.y, 0, hb.y - (ub.top + ub.height));
            return Math.hypot(Bb, Ob) <= Math.min(ub.width, ub.height) / 2
          })) : null, !1), "cursor" === (0, wb.e)().inventoryNavigation && (this.pointer = {
            x: hb.x,
            y: hb.y,
            speedRamp: 0
          })
        }
        rehoverRealPointer() {
          const bb = this.lastRealPointer;
          if (!bb || "keyboardMouse" !== Yb.d.get("activeInputDevice")) return;
          const ub = document.elementFromPoint(bb.x, bb.y);
          ub && (0, yb.r)(null, ub, bb)
        }
        endInteraction(bb) {
          this.wasShowing = !1, this.hotbarPick = null, this.releasePress(), this.dropLatch.reset(), this.scroller.reset();
          for (const ub of this.dpadTimers.values()) ub.reset();
          this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(bb), this.ring.hide(), this.releasePointer(), this.publishState(Mu.b)
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
          if (null === bb || void 0 === bb || !bb.isConnected || !bb.closest(Cu)) return null;
          const ub = bb.getBoundingClientRect();
          return ub.width > 0 && ub.height > 0 ? {
            left: ub.left,
            top: ub.top,
            width: ub.width,
            height: ub.height
          } : null
        }
        ensureFocus() {
          const bb = this.readFocusRect();
          if (bb || this.pointer) return bb;
          const {
            targets: ub,
            byElement: hb
          } = this.getTargets();
          let Bb = null,
            Ob = !1;
          if (this.lastRect) Bb = pu(Lu(this.lastRect), ub);
          else {
            var Gb, Ub;
            const bb = ((bb, ub) => {
                const hb = document.querySelector(".EntireInventoryWrapper [data-pad-inventory-start]");
                return hb ? hh(bb.filter((bb => hb.contains(bb.element))), ub) : null
              })(ub, (0, cb.e)()),
              Lb = ub.find((bb => null !== bb.idx && bb.idx === this.reopenSlotIdx)),
              Yb = document.querySelector(fu);
            Ob = null !== bb || void 0 !== Lb, Bb = null !== (Gb = null !== (Ub = null !== bb && void 0 !== bb ? bb : Lb) && void 0 !== Ub ? Ub : Yb && hb.get(Yb)) && void 0 !== Gb ? Gb : Ku(ub)
          }
          return this.setFocus(Bb, Ob), this.lastRect
        }
        setFocus(bb) {
          let ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          bb && (this.focused = bb.element, this.focusTarget = bb, this.panelMemory.set(bb.panel, bb.element), ub && bb.scrollContainer && ((bb, ub) => {
            const hb = bb.getBoundingClientRect(),
              Bb = Jb(ub),
              Ob = ub.scrollTop;
            return hb.top < Bb.top ? ub.scrollTop -= Bb.top - hb.top : hb.bottom > Bb.bottom && (ub.scrollTop += hb.bottom - Bb.bottom), ub.scrollTop !== Ob
          })(bb.element, bb.scrollContainer) && this.targets.invalidate(), this.lastRect = this.readFocusRect(), this.followFocusJump())
        }
        followFocusJump() {
          if (this.pointer)
            if ("cursor" === (0, wb.e)().inventoryNavigation) {
              if (this.lastRect) {
                const bb = Lu(this.lastRect);
                this.pointer = {
                  x: bb.x,
                  y: bb.y,
                  speedRamp: 0
                }
              }
            } else this.releasePointer()
        }
        engagePointer() {
          const bb = this.lastRect ? Lu(this.lastRect) : {
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
          this.pointer = null, Fb.hide()
        }
        hoverAtPointer() {
          var bb;
          const ub = lu(this.pointer, this.getTargets().targets);
          this.focusTarget = ub, (null === ub || void 0 === ub ? void 0 : ub.element) !== this.focused && (this.focused = null !== (bb = null === ub || void 0 === ub ? void 0 : ub.element) && void 0 !== bb ? bb : null, ub && (this.panelMemory.set(ub.panel, ub.element), this.lastRect = this.readFocusRect()))
        }
        moveCursor(bb, ub) {
          const hb = this.focusTarget,
            Bb = hb && (0, wb.e)().cursorMagnetism ? Lu(ou(hb)) : null;
          this.pointer = db(this.pointer, {
            stick: bb.leftStick,
            moveDeadzone: (0, wb.e)().moveDeadzone,
            dpad: ub,
            dtMs: bb.dtMs,
            cursorSpeedPercent: (0, wb.e)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: {
              overInteractive: !1,
              magnetTarget: Bb
            }
          })
        }
        move(bb) {
          this.targets.revalidate();
          const ub = this.currentTarget();
          ub && this.setFocus(Xu(ub, this.getTargets().targets, bb))
        }
        step(bb) {
          const ub = this.pointer;
          if (ub && (this.releasePointer(), !this.focused)) return this.targets.revalidate(), void this.setFocus(((bb, ub, hb) => {
            var Bb;
            const Ob = {
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
            return null !== (Bb = Xu(Ob, ub, hb)) && void 0 !== Bb ? Bb : pu(bb, ub)
          })(ub, this.getTargets().targets, bb));
          this.move(bb)
        }
        isNavButton(bb) {
          return !cu.some((ub => (0, ab.f)(ub) === bb)) && !(bb === (0, ab.f)("inventory") && bh())
        }
        handleNavigation(bb, ub) {
          const hb = (0, wb.e)().inventoryNavigation,
            Bb = {
              x: 0,
              y: 0
            };
          let Ob = null;
          for (const Yb of Xb.A) {
            const Gb = this.isNavButton(Yb) && bb.isHeld(Yb);
            Gb && (Bb.x += ku[Yb].x, Bb.y += ku[Yb].y), this.dpadTimers.get(Yb).update(Gb, ub) && "cursor" !== hb && (Ob ??= Yb)
          }
          const Gb = this.stickGate.update(bb.leftStick, (0, wb.e)().moveDeadzone);
          if (Ob && (this.step(Ob), this.stickGate.lock()), "slot" !== hb) {
            const ub = ((bb, ub, hb, Bb) => "hybrid" !== bb ? "cursor" === bb : !Bb && (ub || hb))(hb, null !== this.pointer, Gb, null !== Ob);
            return ub && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(bb, "cursor" === hb ? Bb : {
              x: 0,
              y: 0
            }))
          }
          const Ub = (0, Xb.j)(bb.leftStick, (0, wb.e)().moveDeadzone),
            Lb = this.stickRepeat.update(Gb ? (0, Xb.ib)(Ub) : null, ub);
          Lb && this.move(Lb)
        }
        applyCategoryPlace() {
          const bb = this.placeAfterCategory;
          if (!bb) return;
          this.placeAfterCategory = null, this.targets.invalidate();
          const ub = pu(Lu(bb.rect), this.getTargets().targets, (ub => ub.scrollGroup === bb.scrollGroup));
          this.setFocus(ub, !1)
        }
        applyFocusRequest() {
          const bb = (0, cb.v)();
          bb && (this.targets.invalidate(), this.setFocus((0, cb.d)(this.getTargets().targets, bb)))
        }
        handlePanels(bb) {
          var ub, hb, Bb;
          const Ob = bb.wasPressed((0, ab.f)("inventoryPanelPrevious")),
            Gb = bb.wasPressed((0, ab.f)("inventoryPanelNext"));
          if (!Ob && !Gb) return;
          const {
            targets: Ub
          } = this.getTargets(), Lb = (Yb = ((bb, ub) => {
            const hb = [];
            for (const Ob of bb) Ob.visible && !hb.includes(Ob.panel) && hb.push(Ob.panel);
            const Bb = bb => {
              const Bb = ub.indexOf(bb);
              return -1 === Bb ? ub.length + hb.indexOf(bb) : Bb
            };
            return hb.sort(((bb, ub) => Bb(bb) - Bb(ub)))
          })(Ub, nu), Sb = null !== (ub = null === (hb = this.focusTarget) || void 0 === hb ? void 0 : hb.panel) && void 0 !== ub ? ub : null, Hb = Gb ? 1 : -1, 0 === Yb.length ? null : Yb[Yu(null === Sb ? -1 : Yb.indexOf(Sb), Yb.length, Hb)]);
          var Yb, Sb, Hb;
          if (null === Lb) return;
          const wb = this.panelMemory.get(Lb),
            Zb = Ub.filter((bb => bb.panel === Lb)),
            Xb = null !== (Bb = Zb.find((bb => bb.element === wb && bb.visible))) && void 0 !== Bb ? Bb : hh(Zb, (0, cb.e)());
          this.setFocus(Xb)
        }
        handlePaging(bb, ub) {
          const hb = (0, ab.f)("menuPageUp"),
            Bb = (0, ab.f)("menuPageDown"),
            Ob = this.pageUpTimer.update(bb.isHeld(hb), ub),
            Gb = this.pageDownTimer.update(bb.isHeld(Bb), ub);
          if (!Ob && !Gb) return;
          const Ub = Gb ? 1 : -1;
          if (!bb.wasPressed(Gb ? Bb : hb) && this.hasCategories) return;
          if ((bb => {
              const ub = Array.from(document.querySelectorAll(".EntireInventoryWrapper .CreativeCategoryTab"));
              if (0 === ub.length) return !1;
              const hb = ub.findIndex((bb => bb.classList.contains("Selected"))),
                Bb = ub[Yu(hb, ub.length, bb)];
              return (0, yb.o)(Bb, (0, yb.C)(Bb)), !0
            })(Ub)) {
            var Lb, Yb;
            this.targets.invalidate();
            const bb = null !== (Lb = null === (Yb = this.focusTarget) || void 0 === Yb ? void 0 : Yb.scrollGroup) && void 0 !== Lb ? Lb : null,
              ub = this.readFocusRect();
            return void(this.placeAfterCategory = null !== bb && ub && !this.pointer ? {
              rect: ub,
              scrollGroup: bb
            } : null)
          }
          const {
            targets: Sb
          } = this.getTargets(), Hb = this.currentTarget(), wb = Hb && Nu(Hb) ? Hb : Sb.find((bb => Nu(bb) && bb.visible));
          if (!wb) return;
          const Zb = ((bb, ub, hb, Bb) => {
            if (null === bb.scrollGroup) return null;
            const Ob = Lu(bb.rect),
              Gb = Ob.x,
              Ub = Ob.y + ("Down" === hb ? Bb : -Bb);
            let Lb = null,
              Yb = 1 / 0;
            for (const Sb of ub) {
              if (Sb.scrollGroup !== bb.scrollGroup || Sb.key === bb.key) continue;
              const ub = Lu(Sb.rect);
              if ("Down" === hb ? ub.y <= Ob.y : ub.y >= Ob.y) continue;
              const Bb = Math.hypot(ub.x - Gb, ub.y - Ub);
              Bb < Yb && (Lb = Sb, Yb = Bb)
            }
            return Lb
          })(wb, Sb, Ub > 0 ? "Down" : "Up", wb.scrollContainer.clientHeight);
          this.setFocus(null !== Zb && void 0 !== Zb ? Zb : wb)
        }
        handleScroll(bb) {
          var ub, hb, Bb, Ob, Gb, Ub;
          if (!this.scroller.isScrolling(bb.rightStick)) return void this.scroller.reset();
          const {
            targets: Lb
          } = this.getTargets(), Yb = this.pointer, Sb = !Yb && this.focusTarget && Nu(this.focusTarget) ? this.focusTarget.scrollContainer : null, ab = Yb && (null === (ub = Lb.find((bb => bb.clip && Au(bb.clip, Yb)))) || void 0 === ub ? void 0 : ub.scrollContainer), Hb = null !== (hb = null !== (Bb = null !== (Ob = this.scroller.current()) && void 0 !== Ob ? Ob : ab) && void 0 !== Bb ? Bb : Sb) && void 0 !== hb ? hb : null === (Gb = Lb.find(Nu)) || void 0 === Gb ? void 0 : Gb.scrollContainer;
          if (!Hb || !this.scroller.step(Hb, bb.rightStick, bb.dtMs)) return;
          this.targets.scrolled(Hb);
          const wb = Yb || (null === (Ub = this.focusTarget) || void 0 === Ub ? void 0 : Ub.scrollContainer) !== Hb ? null : this.readFocusRect();
          if (!wb) return;
          const Zb = Jb(Hb),
            Xb = Lu(wb);
          if (Xb.y < Zb.top || Xb.y > Zb.bottom) {
            const bb = this.focusTarget.scrollGroup,
              ub = pu(Xb, this.getTargets().targets, (ub => ub.scrollGroup === bb));
            this.setFocus(ub, !1)
          }
        }
        focusContext(bb) {
          const {
            kind: ub,
            idx: hb
          } = this.focused ? iu(this.focused) : {
            kind: null,
            idx: null
          }, Bb = this.focused ? zu(this.focused) : null, Ob = Bb ? (0, Vu.d)(Bb) : null;
          return {
            kind: ub,
            idx: hb,
            actionElement: Bb,
            press: Ob,
            hasPress: null !== Ob,
            hasBack: !(null === Ob || void 0 === Ob || !Ob.back),
            holding: bb.isHolding(),
            slotHasItem: null !== hb && bb.hasItemAt(hb)
          }
        }
        handleButtons(bb, ub, hb) {
          var Bb, Ob;
          if (!this.activePress || bb.isHeld(this.activePress.button) && (Bb = this.activePress.target, Ob = this.focused, null !== Bb.recipe ? gu(Ob).recipe === Bb.recipe : Ob === Bb.element) || this.releasePress(), this.scrollStickClick.update(bb.rightStick, ub), !this.handleHotbarPick(bb, hb)) {
            for (const [Bb, Ob] of Tu) {
              const Gb = (0, ab.f)(Ob);
              if (!bb.wasPressed(Gb) || "openButton" === Bb && !bh()) continue;
              if ("RS" === Gb && !this.scrollStickClick.allowsClick(ub)) continue;
              const Ub = this.focusContext(hb),
                Lb = kb(Bb, Ub);
              Lb && this.runIntent(Lb, Ub, Gb, hb)
            }
            this.handleDrop(bb, ub, hb)
          }
        }
        handleHotbarPick(bb, ub) {
          const hb = this.hotbarPick;
          if (!hb) return !1;
          const Bb = bb.wasPressed((0, ab.f)("inventoryPrimary")) || bb.wasPressed((0, ab.f)("inventoryHotbarSwap"));
          if (!Bb && !bb.wasPressed((0, ab.f)("inventoryClose")) && !ub.isHolding()) return !(bb.wasPressed((0, ab.f)("inventory")) && bh());
          const Ob = this.focusTarget;
          Bb && "hotbar" === (null === Ob || void 0 === Ob ? void 0 : Ob.panel) && null !== Ob.idx && Ob.idx !== hb.idx && (ub.swapWithHotbar(Ob.idx, hb.idx), this.afterAction()), this.hotbarPick = null;
          const Gb = hb.element.isConnected ? this.getTargets().byElement.get(hb.element) : void 0;
          return Gb && this.setFocus(Gb), !0
        }
        startHotbarPick(bb) {
          var ub;
          const {
            targets: hb,
            byElement: Bb
          } = this.getTargets(), Ob = document.querySelector(fu), Gb = null !== (ub = Ob && Bb.get(Ob)) && void 0 !== ub ? ub : hb.find((bb => "hotbar" === bb.panel));
          Gb && this.focused && (this.hotbarPick = {
            idx: bb,
            element: this.focused
          }, this.setFocus(Gb))
        }
        focusKey() {
          return this.focused ? hu(this.focused) : null
        }
        handleDrop(bb, ub, hb) {
          const Bb = (0, ab.f)("inventoryDrop");
          if (bb.wasPressed(Bb)) {
            const bb = (Ob = this.focusContext(hb)).holding ? {
              kind: "MS"
            } : "slot" === Ob.kind && Ob.slotHasItem && null !== Ob.idx ? {
              kind: "slot",
              idx: Ob.idx
            } : null;
            return void(bb && (this.dropFrom(bb, !1, hb), this.dropLatch.press(bb, this.focusKey(), ub, ob.c[(0, wb.e)().tapHoldTime].dropStackMs), this.afterAction()))
          }
          var Ob;
          const Gb = this.dropLatch.update(bb.isHeld(Bb), this.focusKey(), ub);
          Gb && ((bb, ub, hb) => "MS" === bb.kind ? ub : !ub && hb(bb.idx))(Gb, hb.isHolding(), hb.hasItemAt) && (this.dropFrom(Gb, !0, hb), this.afterAction())
        }
        dropFrom(bb, ub, hb) {
          "MS" === bb.kind ? hb.dropHeld(ub, this.slotPoint()) : hb.dropSlot(bb.idx, ub)
        }
        slotPoint() {
          return this.pointer ? {
            clientX: this.pointer.x,
            clientY: this.pointer.y
          } : this.lastRect ? (bb => {
            const ub = Lu(bb);
            return {
              clientX: ub.x,
              clientY: ub.y
            }
          })(this.lastRect) : {
            clientX: 0,
            clientY: 0
          }
        }
        runIntent(bb, ub, hb, Bb) {
          const Ob = ub.idx,
            Gb = ub.actionElement;
          switch (Gb && uh.has(bb) && (0, Ab.u)(Gb), bb) {
            case "slotPrimary":
              Bb.primary(Ob, this.slotPoint());
              break;
            case "slotSecondary":
              Bb.secondary(Ob, this.slotPoint());
              break;
            case "slotQuickMove":
              Bb.quickMove(Ob, this.slotPoint());
              break;
            case "hotbarPick":
              this.startHotbarPick(Ob);
              break;
            case "pressPrimary":
            case "pressSecondary":
              this.startPress(ub.press, "pressPrimary" === bb ? "primary" : "secondary", hb);
              break;
            case "click":
              (0, yb.o)(Gb, (0, yb.C)(Gb));
              break;
            case "openKeyboard":
              (0, yb.R)(Gb) && (0, yb.N)(Gb);
              break;
            case "pressBack":
              ub.press.back();
              break;
            case "cancel":
              Bb.cancel();
              break;
            case "close":
              return this.releasePress(), void Bb.close()
          }
          this.afterAction()
        }
        startPress(bb, ub, hb) {
          this.releasePress(), bb.press(ub) && (this.activePress = {
            handlers: bb,
            button: hb,
            target: gu(this.focused)
          })
        }
        releasePress() {
          var bb, ub, hb;
          null === (bb = this.activePress) || void 0 === bb || null === (ub = (hb = bb.handlers).release) || void 0 === ub || ub.call(hb), this.activePress = null
        }
        afterAction() {
          this.targets.invalidate(), this.hover.invalidate()
        }
        publishState(bb) {
          ((bb, ub) => {
            var hb, Bb, Ob, Gb, Ub, Lb;
            return bb.showing === ub.showing && bb.kind === ub.kind && bb.holding === ub.holding && bb.slotHasItem === ub.slotHasItem && (null === (hb = bb.pressHints) || void 0 === hb ? void 0 : hb.primary) === (null === (Bb = ub.pressHints) || void 0 === Bb ? void 0 : Bb.primary) && (null === (Ob = bb.pressHints) || void 0 === Ob ? void 0 : Ob.secondary) === (null === (Gb = ub.pressHints) || void 0 === Gb ? void 0 : Gb.secondary) && (null === (Ub = bb.pressHints) || void 0 === Ub ? void 0 : Ub.back) === (null === (Lb = ub.pressHints) || void 0 === Lb ? void 0 : Lb.back) && bb.hasCategories === ub.hasCategories && bb.hasList === ub.hasList && bb.openButtonCloses === ub.openButtonCloses && bb.steppingSlots === ub.steppingSlots && bb.hotbarPicking === ub.hotbarPicking && bb.quickMoveToHotbar === ub.quickMoveToHotbar && bb.dropStackHold === ub.dropStackHold
          })(bb, this.state) || (this.state = bb, Sb.i.vp(Mu.d, bb))
        }
      },
      Gh = ["pointermove", "pointerover", "pointerout", "mouseover", "mouseout"];
    var Uh = hb(8424),
      Lh = hb(298),
      Yh = hb(1537),
      Sh = hb(7850);
    const ah = "[data-pad-secondary]",
      Hh = bb => bb instanceof HTMLElement && (0, Qb.q)(bb) && !(0, Qb.t)(bb),
      wh = bb => {
        const ub = bb.querySelector(ah);
        if (ub && Hh(ub)) return ub;
        for (const Ob of null !== (hb = null === (Bb = bb.parentElement) || void 0 === Bb ? void 0 : Bb.children) && void 0 !== hb ? hb : []) {
          var hb, Bb;
          if (Ob !== bb && Ob.matches(ah) && Hh(Ob)) return Ob
        }
        return null
      },
      Zh = (bb, ub, hb, Bb) => Math.max(0, Math.max(bb, hb) - Math.min(ub, Bb)),
      Xh = (bb, ub, hb, Bb) => Math.max(0, Math.min(ub, Bb) - Math.max(bb, hb)),
      ph = (bb, ub, hb) => {
        const Bb = (bb.left + bb.right) / 2,
          Ob = (bb.top + bb.bottom) / 2,
          Gb = (ub.left + ub.right) / 2,
          Ub = (ub.top + ub.bottom) / 2;
        if ("Left" === hb || "Right" === hb) {
          const Lb = "Right" === hb ? 1 : -1;
          return {
            forwardGap: "Right" === hb ? ub.left - bb.right : bb.left - ub.right,
            centreForward: (Gb - Bb) * Lb,
            sidewaysGap: Zh(bb.top, bb.bottom, ub.top, ub.bottom),
            sidewaysOverlap: Xh(bb.top, bb.bottom, ub.top, ub.bottom),
            centreSideways: Math.abs(Ub - Ob),
            startSideways: Math.abs(ub.top - bb.top),
            fromSidewaysSize: bb.bottom - bb.top,
            toSidewaysSize: ub.bottom - ub.top,
            toLength: ub.right - ub.left
          }
        }
        const Lb = "Down" === hb ? 1 : -1;
        return {
          forwardGap: "Down" === hb ? ub.top - bb.bottom : bb.top - ub.bottom,
          centreForward: (Ub - Ob) * Lb,
          sidewaysGap: Zh(bb.left, bb.right, ub.left, ub.right),
          sidewaysOverlap: Xh(bb.left, bb.right, ub.left, ub.right),
          centreSideways: Math.abs(Gb - Bb),
          startSideways: Math.abs(ub.left - bb.left),
          fromSidewaysSize: bb.right - bb.left,
          toSidewaysSize: ub.right - ub.left,
          toLength: ub.bottom - ub.top
        }
      },
      oh = bb => bb.centreForward > .5 && bb.forwardGap >= -bb.toLength / 2,
      Ah = bb => {
        const ub = bb.sidewaysOverlap > 0 ? 0 : 2 * bb.fromSidewaysSize,
          hb = bb.fromSidewaysSize > 1.5 * bb.toSidewaysSize ? bb.startSideways : bb.centreSideways;
        return Math.max(0, bb.forwardGap) + 3 * bb.sidewaysGap + ub + .1 * hb
      },
      lh = (bb, ub) => Xh(bb.top, bb.bottom, ub.top, ub.bottom) > 0 || ub.bottom - ub.top > ub.right - ub.left,
      Kh = (bb, ub, hb, Bb, Ob, Gb) => {
        const Ub = Ob ? Ch(bb, ub, hb, Ob) : new Set,
          Lb = rh(bb, ub, hb, Ub);
        return Lb < 0 && Ub.size > 0 && Gb ? Wh(bb, ub, hb, Gb) : Bb && Lb >= 0 ? dh(bb, ub, hb, Bb, Lb, Ub) : Lb
      },
      Wh = (bb, ub, hb, Bb) => {
        const Ob = new Set,
          Gb = rh(bb, ub, "Up", Ob) >= 0,
          Ub = rh(bb, ub, "Down", Ob) >= 0,
          Lb = new Set;
        return ub.forEach(((ub, hb) => {
          const Ob = ub.top + ub.bottom < bb.top + bb.bottom;
          Bb[hb] && !(Ob ? Gb : Ub) || Lb.add(hb)
        })), rh(bb, ub, hb, Lb)
      },
      Ch = (bb, ub, hb, Bb) => {
        const Ob = new Set;
        return "Left" !== hb && "Right" !== hb || ub.forEach(((ub, hb) => {
          Bb[hb] && Xh(bb.top, bb.bottom, ub.top, ub.bottom) <= 0 && Ob.add(hb)
        })), Ob
      },
      dh = (bb, ub, hb, Bb, Ob, Gb) => {
        const Ub = ph(bb, ub[Ob], hb).forwardGap;
        let Lb = Ob,
          Yb = Bb[Ob],
          Sb = 1 / 0;
        return ub.forEach(((ub, ab) => {
          const Hb = Bb[ab];
          if (Gb.has(ab) || Hb < Yb || Hb === Yb && Lb === Ob) return;
          const wb = ph(bb, ub, hb);
          if (!oh(wb) || wb.forwardGap < 0 || wb.forwardGap >= Ub) return;
          const Zb = Ah(wb);
          (Hb > Yb || Zb < Sb) && (Lb = ab, Yb = Hb, Sb = Zb)
        })), Lb
      },
      rh = (bb, ub, hb, Bb) => {
        let Ob = -1,
          Gb = 1 / 0;
        if (ub.forEach(((ub, Ub) => {
            const Lb = ((bb, ub, hb) => {
              const Bb = ph(bb, ub, hb);
              if (!oh(Bb)) return null;
              const Ob = Math.max(0, Bb.forwardGap);
              return Bb.sidewaysOverlap <= 0 && Bb.sidewaysGap > 2 * (Ob + 1) ? null : Ah(Bb)
            })(bb, ub, hb);
            null !== Lb && Lb < Gb && !Bb.has(Ub) && (Gb = Lb, Ob = Ub)
          })), Ob < 0) return -1;
        const Ub = ub[Ob],
          Lb = ph(bb, Ub, hb).forwardGap;
        let Yb = Lb,
          Sb = Ob;
        return ub.forEach(((ub, Gb) => {
          if (Gb === Ob || Bb.has(Gb) || !((bb, ub, hb) => {
              const Bb = "Left" === hb || "Right" === hb,
                Ob = Bb ? Xh(bb.top, bb.bottom, ub.top, ub.bottom) : Xh(bb.left, bb.right, ub.left, ub.right),
                Gb = Bb ? Math.min(bb.bottom - bb.top, ub.bottom - ub.top) : Math.min(bb.right - bb.left, ub.right - ub.left);
              return Ob > 0 && Ob >= Gb / 2
            })(ub, Ub, hb)) return;
          const ab = ph(bb, ub, hb);
          oh(ab) && ab.forwardGap + ab.toLength <= Lb + 1 && ab.forwardGap < Yb && (Yb = ab.forwardGap, Sb = Gb)
        })), Sb
      },
      jh = (bb, ub) => {
        let hb = -1,
          Bb = 1 / 0;
        return ub.forEach(((ub, Ob) => {
          const Gb = Math.max(ub.left - bb.x, 0, bb.x - ub.right),
            Ub = Math.max(ub.top - bb.y, 0, bb.y - ub.bottom),
            Lb = Math.hypot(Gb, Ub);
          Lb < Bb && (Bb = Lb, hb = Ob)
        })), hb
      },
      nh = (bb, ub) => {
        const hb = Math.min(bb.bottom - bb.top, ub.bottom - ub.top) / 2;
        return Math.abs(bb.top - ub.top) > hb ? bb.top - ub.top : bb.left - ub.left
      },
      Dh = bb => {
        let ub = -1;
        for (let hb = 0; hb < bb.length; hb++)(ub < 0 || nh(bb[hb], bb[ub]) < 0) && (ub = hb);
        return ub
      };
    var xh = hb(1587),
      zh = hb(8433),
      gh = hb(8442);
    const ih = bb => {
        if ("death" !== bb || "inGame" !== Yb.d.get("gameState") || "off" === (0, wb.e)().quickChat || null === (0, xh.e)()) return !1;
        const ub = (0, ab.f)("chat");
        return ub !== (0, ab.f)("menuConfirm") && ub !== (0, ab.f)("menuBack")
      },
      vh = new zh.e;
    var th = hb(4068),
      Jh = hb(8444);
    const eh = bb => {
        let ub = null;
        for (const hb of bb.querySelectorAll("[data-pad-tabs]"))(0, Qb.q)(hb) && (!ub || Number(hb.dataset.padTabs) < Number(ub.dataset.padTabs)) && (ub = hb);
        return ub
      },
      Nh = (bb, ub, hb, Bb) => {
        bb.focusWhenFound((() => {
          const Ob = bb.pickInitial(ub);
          if (Ob && !hb.has(Ob) && (null === Bb || void 0 === Bb || !Bb.contains(Ob))) return Ob;
          const Gb = ((bb, ub) => {
              const hb = ub => bb.getEnabledCandidates(ub).filter((bb => !bb.closest("[data-pad-tabs]")));
              for (const Bb of (0, Qb.k)(ub)) {
                const bb = hb(Bb);
                if (bb.length > 0) return bb
              }
              return hb(ub)
            })(bb, ub).filter((bb => !hb.has(bb))),
            Ub = Dh(Gb.map((bb => bb.getBoundingClientRect())));
          return Ub >= 0 ? Gb[Ub] : null
        }), 3e3)
      },
      sh = (bb, ub, hb, Bb) => {
        var Ob;
        const Gb = ((bb, ub) => {
          if (0 === bb.length) return null;
          const hb = bb.findIndex((bb => "true" === bb.dataset.padSelected));
          return hb < 0 ? ub > 0 ? bb[0] : bb[bb.length - 1] : bb[(hb + ub + bb.length) % bb.length]
        })([...hb.querySelectorAll("[data-pad-tab]")].filter((bb => (0, Qb.q)(bb) && !(0, Qb.t)(bb))), Bb);
        if (!Gb) return;
        const Ub = null !== (Ob = null === bb || void 0 === bb ? void 0 : bb.getFocused()) && void 0 !== Ob ? Ob : null,
          Lb = !(null === Ub || void 0 === Ub || !Ub.isConnected) && hb.contains(Ub),
          Yb = bb && !Lb ? new Set(bb.getEnabledCandidates(ub)) : null;
        (0, yb.e)(Gb), bb && (Yb ? Nh(bb, ub, Yb, hb) : bb.setFocus(Gb, {
          byUser: !0
        }))
      },
      Mh = bb => {
        var ub;
        const hb = Jb(null !== (ub = xb(bb, "x")) && void 0 !== ub ? ub : bb),
          Bb = (0, Qb.g)(bb).filter((bb => !(0, Qb.t)(bb))),
          Ob = Bb.filter((bb => eb(bb.getBoundingClientRect(), hb)));
        return (Ob.length > 0 ? Ob : Bb).sort(((bb, ub) => nh(bb.getBoundingClientRect(), ub.getBoundingClientRect())))
      },
      mh = (bb, ub, hb) => {
        const Bb = [...ub.querySelectorAll("[data-pad-row]")].filter(Qb.q),
          Ob = bb.getFocused(),
          Gb = Ob ? Bb.findIndex((bb => bb.contains(Ob))) : -1;
        let Ub = 0,
          Lb = hb > 0 ? 0 : Bb.length - 1;
        if (Gb >= 0 && Ob) Ub = Math.max(0, Mh(Bb[Gb]).indexOf(Ob)), Lb = Gb + hb;
        else if (Ob) {
          const bb = Ob.getBoundingClientRect(),
            ub = Bb.map((ub => {
              const Bb = ub.getBoundingClientRect();
              return hb > 0 ? Bb.top >= bb.top : Bb.bottom <= bb.bottom
            }));
          Lb = hb > 0 ? ub.indexOf(!0) : ub.lastIndexOf(!0)
        }
        for (let Yb = Lb; Yb >= 0 && Yb < Bb.length; Yb += hb) {
          const ub = Mh(Bb[Yb]);
          if (ub.length > 0) return void bb.setFocus(ub[Math.min(Ub, ub.length - 1)], {
            byUser: !0
          })
        }
      },
      Ih = (bb, ub, hb) => {
        var Bb, Ob;
        const Gb = null !== (Bb = null === bb || void 0 === bb ? void 0 : bb.getFocused()) && void 0 !== Bb ? Bb : null,
          Ub = null !== Gb && void 0 !== Gb && Gb.closest("[data-pad-row]") ? "x" : "y",
          Lb = null !== (Ob = Gb ? xb(Gb, Ub, ub) : null) && void 0 !== Ob ? Ob : gb(ub, Ub);
        if (!Lb) return;
        const Yb = Gb ? (0, yb.C)(Gb) : null;
        if (tb(Lb, Ub, hb * ("y" === Ub ? Lb.clientHeight : Lb.clientWidth) * .85), !bb || !Yb) return;
        const Sb = Jb(Lb),
          ab = bb.getEnabledCandidates(ub).filter((bb => Lb.contains(bb) && eb(bb.getBoundingClientRect(), Sb))),
          Hb = jh(Yb, ab.map((bb => bb.getBoundingClientRect())));
        Hb >= 0 && bb.setFocus(ab[Hb], {
          scroll: !1,
          byUser: !0
        })
      };
    let Ph = null;
    const qh = (bb, ub) => {
        var hb, Bb;
        const Ob = ub.querySelector("[data-pad-friends-column]"),
          Gb = bb.getFocused();
        if (!Ob || !Gb || !Ob.contains(Gb)) return !1;
        const Ub = bb.getEnabledCandidates(ub).filter((bb => !Ob.contains(bb))),
          Lb = jh((0, yb.C)(Gb), Ub.map((bb => bb.getBoundingClientRect()))),
          Yb = null === (hb = Ph) || void 0 === hb ? void 0 : hb.deref();
        return bb.setFocus(null !== Yb && void 0 !== Yb && Yb.isConnected ? Yb : null !== (Bb = Ub[Lb]) && void 0 !== Bb ? Bb : null, {
          byUser: !0
        }), !0
      },
      Eh = bb => {
        const ub = (0, ab.f)(bb);
        return (0, Xb.H)(ub) || Sh.l.some((bb => (0, ab.f)(bb) === ub)) ? null : ub
      },
      yh = (bb, ub) => {
        const hb = Eh(ub);
        return null !== hb && bb.wasPressed(hb)
      },
      Vh = function(bb, ub, hb) {
        let Bb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Ob = (bb => {
            var ub, hb;
            return null !== (ub = null === (hb = eh(bb)) || void 0 === hb ? void 0 : hb.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== ub ? ub : null
          })(ub),
          Gb = bb && Ob ? new Set(bb.getEnabledCandidates(ub)) : null;
        (0, Uh.d)(), hb === Lh.u.SETTINGS && (0, Yh.o)(Yb.d.get("openEverythingMenuName")) ? Yb.d.set({
          openEverythingMenuName: hb
        }) : (0, Yh.B)(new Event("padMenuShortcut"), hb, Bb), bb && Gb && Ob && Nh(bb, ub, Gb, Ob.closest("[data-pad-tabs]"))
      },
      Fh = bb => null !== bb.closest(".Dropdown-root") || null !== bb.querySelector(".Dropdown-root.is-open"),
      fh = bb => null !== (0, Jh.d)() && "popup" !== bb.layer.kind && !eh(bb.root) && !Fh(bb.root),
      kh = (0, pb.c)(Xb.$),
      Th = (0, pb.c)(Xb.$),
      ch = (bb, ub, hb) => {
        if (((bb, ub) => {
            const hb = (0, ab.f)("chat");
            return ih(ub) && bb.isHeld(hb) ? "hold" === vh.update(bb.wasPressed(hb), bb.isHeld(hb), performance.now(), ob.c[(0, wb.e)().tapHoldTime].wheelMs) && (Hb.c.consumeButton(hb), Sb.i.vp(gh.l), !0) : (vh.release(), !1)
          })(ub, hb.layer.kind)) return !0;
        const Bb = hb.root;
        for (const [Ub, Lb] of [
            ["menuTabPrevious", -1],
            ["menuTabNext", 1]
          ])
          if (ub.wasPressed((0, ab.f)(Ub))) {
            const ub = Fh(Bb) ? null : eh(Bb);
            if (ub) sh(bb, Bb, ub, Lb);
            else if (fh(hb)) {
              var Ob;
              const ub = bb ? new Set(bb.getEnabledCandidates(Bb)) : null;
              null !== (Ob = (0, Jh.d)()) && void 0 !== Ob && Ob(Lb) && bb && ub && Nh(bb, Bb, ub, null)
            } else bb && mh(bb, Bb, Lb);
            return !0
          } for (const [Ub, Lb, Yb] of [
            ["menuPageUp", -1, kh],
            ["menuPageDown", 1, Th]
          ]) {
          const hb = (0, ab.f)(Ub);
          if (ub.wasPressed(hb) && Yb.reset(), Yb.update(ub.isHeld(hb), performance.now())) return Ih(bb, Bb, Lb), !0
        }
        const Gb = "popup" === hb.layer.kind;
        return yh(ub, "pause") ? (Gb || (0, Yh.t)() && "menu" !== hb.layer.kind || Vh(bb, Bb, (0, Yh.t)() ? Lh.u.SETTINGS : (0, th.b)()), !0) : !!yh(ub, "leaderboard") && ("home" === hb.layer.kind ? (bb => {
          const ub = [...bb.querySelectorAll("[data-pad-notifications]")].find(Qb.q);
          ub && (0, yb.e)(ub)
        })(Bb) : Gb || Vh(bb, Bb, Lh.u.LOBBY_LEADERBOARD, "inGame" === Yb.d.get("gameState")), !0)
      },
      Qh = (bb, ub, hb) => {
        if (ch(bb, ub, hb)) return !0;
        const Bb = "home" === hb.layer.kind;
        if (ub.wasPressed((0, ab.f)("menuSecondary"))) {
          const ub = bb.getFocused(),
            Ob = ub ? wh(ub) : null;
          if (Ob) return (0, yb.e)(Ob), !0;
          if (Bb) {
            const ub = hb.root.querySelector("[data-pad-search] input");
            return ub && (0, Qb.r)(ub, hb.root) ? (bb.setFocus(ub, {
              byUser: !0
            }), (0, yb.e)(ub)) : Yb.d.set({
              searchOpen: !0
            }), !0
          }
        }
        return !(!Bb || !yh(ub, "inventory")) && (((bb, ub) => {
          var hb, Bb;
          const Ob = ub.querySelector("[data-pad-friends-column]");
          if (!Ob || !(0, Qb.q)(Ob)) return void(0, Yh.B)(new Event("padMenuShortcut"), Lh.u.SOCIAL);
          if (qh(bb, ub)) return;
          const Gb = null !== (hb = null === (Bb = Ob.querySelector("[data-pad-friends-start]")) || void 0 === Bb ? void 0 : Bb.getBoundingClientRect().top) && void 0 !== hb ? hb : -1 / 0,
            Ub = bb.getEnabledCandidates(Ob),
            Lb = Ub.filter((bb => bb.getBoundingClientRect().top >= Gb)),
            Yb = Lb.length > 0 ? Lb : Ub,
            Sb = Dh(Yb.map((bb => bb.getBoundingClientRect())));
          bb.setFocus(Sb >= 0 ? Yb[Sb] : null, {
            byUser: !0
          })
        })(bb, hb.root), !0)
      },
      Rh = bb => {
        var ub, hb, Bb;
        const Ob = (0, yb.E)(bb);
        if (null !== Ob) return Ob;
        const Gb = (null !== (ub = null !== (hb = null !== (Bb = bb.getAttribute("aria-label")) && void 0 !== Bb ? Bb : bb.getAttribute("title")) && void 0 !== hb ? hb : bb.textContent) && void 0 !== ub ? ub : "").replace(/\s+/g, " ").trim();
        return Gb ? `${bb.tagName}:${Gb.slice(0,100)}` : null
      };
    class bB {
      constructor() {
        this.remembered = new Map, this.history = []
      }
      enter(bb) {
        const ub = this.history.indexOf(bb);
        if (ub >= 0) {
          for (const bb of this.history.splice(ub + 1)) this.remembered.delete(bb);
          return !0
        }
        return this.remembered.delete(bb), this.history.push(bb), this.history.length > 32 && this.forget(this.history[0]), !1
      }
      forget(bb) {
        this.remembered.delete(bb);
        const ub = this.history.indexOf(bb);
        ub >= 0 && this.history.splice(ub, 1)
      }
      remember(bb, ub, hb, Bb) {
        const Ob = Rh(ub),
          Gb = (0, yb.E)(ub),
          Ub = null !== Gb && ((bb, ub) => {
            let hb = 0;
            for (const Bb of bb.querySelectorAll("[data-pad-key], [href]"))
              if ((Bb.getAttribute("data-pad-key") === ub || Bb.getAttribute("href") === ub) && (hb++, hb > 1)) return !0;
            return !1
          })(hb, Gb) ? Math.max(0, this.twins(Bb(), Gb).indexOf(ub)) : 0;
        this.remembered.set(bb, {
          element: new WeakRef(ub),
          identity: Ob,
          ordinal: Ub
        })
      }
      has(bb) {
        return this.remembered.has(bb)
      }
      recall(bb, ub) {
        var hb, Bb;
        const Ob = this.remembered.get(bb);
        if (!Ob) return null;
        const Gb = Ob.element.deref();
        if (Gb && ub.includes(Gb)) return Gb;
        if (null === Ob.identity) return null;
        const Ub = this.twins(ub, Ob.identity);
        return null !== (hb = null !== (Bb = Ub[Ob.ordinal]) && void 0 !== Bb ? Bb : Ub[0]) && void 0 !== hb ? hb : null
      }
      twins(bb, ub) {
        return bb.filter((bb => Rh(bb) === ub))
      }
    }
    var uB = hb(1177);
    const hB = bb => {
        const ub = [];
        let hb = bb;
        for (; hb && hb !== document.body;) {
          const bb = getComputedStyle(hb).zIndex;
          "auto" !== bb && ub.push(Number(bb) || 0), hb = hb.parentElement
        }
        return ub.reverse()
      },
      BB = (bb, ub) => {
        const hb = ((bb, ub) => {
          const hb = Math.max(bb.length, ub.length);
          for (let Gb = 0; Gb < hb; Gb++) {
            var Bb, Ob;
            const hb = (null !== (Bb = bb[Gb]) && void 0 !== Bb ? Bb : 0) - (null !== (Ob = ub[Gb]) && void 0 !== Ob ? Ob : 0);
            if (0 !== hb) return hb
          }
          return 0
        })(hB(bb), hB(ub));
        if (0 !== hb) return hb > 0;
        if (bb.contains(ub)) return !1;
        if (ub.contains(bb)) return !0;
        const Bb = bb.compareDocumentPosition(ub);
        return !!(Bb & Node.DOCUMENT_POSITION_PRECEDING) || !(Bb & Node.DOCUMENT_POSITION_FOLLOWING) && null
      },
      OB = (bb, ub) => {
        var hb;
        return null !== (hb = BB(bb.root, ub.root)) && void 0 !== hb ? hb : bb.order > ub.order
      },
      GB = (bb, ub) => ub.some((ub => !ub.contains(bb) && !bb.contains(ub) && !0 === BB(ub, bb)));
    let UB = null,
      LB = null,
      YB = -1;
    const SB = () => {
        var bb;
        const ub = null === (bb = document.timeline) || void 0 === bb ? void 0 : bb.currentTime,
          hb = "number" === typeof ub ? ub : null;
        if (null !== hb && hb === LB && YB === (0, uB.e)()) return UB;
        let Bb = null;
        const Ob = [],
          Gb = [...document.querySelectorAll("[data-pad-covers]")].filter(Qb.q);
        for (const Ub of (0, uB.i)()) {
          const bb = Ub.getRoot(),
            ub = !!bb && (0, Qb.q)(bb) && !GB(bb, Gb);
          if (Ub.shown && !ub && Ob.push(Ub), Ub.shown = ub, !bb || !ub) continue;
          const hb = {
            layer: Ub,
            root: bb,
            order: Ub.order
          };
          Bb && !OB(hb, Bb) || (Bb = hb)
        }
        UB = Bb, LB = hb, YB = (0, uB.e)();
        for (const Ub of Ob)(0, uB.l)(Ub);
        return UB
      },
      aB = () => {
        const bb = SB();
        return !(null === bb || void 0 === bb || !bb.layer.close) && (bb.layer.close(), LB = null, !0)
      },
      HB = () => {
        var bb, ub;
        return null !== (bb = null === (ub = SB()) || void 0 === ub ? void 0 : ub.root) && void 0 !== bb ? bb : null
      },
      wB = bb => bb ? {
        ...bb,
        root: HB()
      } : null;
    let ZB = null,
      XB = null,
      pB = (0, wb.e)().menuNavigation,
      oB = null;
    const AB = new Cb;
    let lB = null;
    Sb.i.subscribe(wb.d, (() => {
      const bb = (0, wb.e)().menuNavigation;
      bb !== pB && (pB = bb, ZB = null, XB = null)
    }));
    const KB = () => {
        var bb;
        return null !== (bb = ZB) && void 0 !== bb ? bb : (0, wb.e)().menuNavigation
      },
      WB = bb => {
        if (jB()) {
          if (oB = wB(bb), "hybrid" === KB()) return AB.lock(), void(XB = XB ? null : HB());
          ZB = "focus" === KB() ? "cursor" : "focus"
        }
      },
      CB = () => {
        const bb = oB;
        return oB = null, bb
      };
    let dB = {
      root: null,
      firstSeenMs: -1 / 0,
      atMs: -1 / 0,
      has: !1
    };
    const rB = function(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const hb = dB.root === bb,
          Bb = hb ? dB.firstSeenMs : ub,
          Ob = dB.has || ub - Bb > 1e3;
        return (!hb || !Ob || ub - dB.atMs > 250) && (dB = {
          root: bb,
          firstSeenMs: Bb,
          atMs: ub,
          has: (0, Qb.n)(bb)
        }), dB.has
      },
      jB = () => {
        const bb = HB();
        return null !== bb && rB(bb)
      },
      nB = () => {
        const bb = SB();
        return XB && (null === bb || void 0 === bb ? void 0 : bb.root) !== XB && (XB = null), (bb => {
          let {
            mode: ub,
            hasLayer: hb,
            hasCandidates: Bb,
            hybridCursorEngaged: Ob
          } = bb;
          return hb ? "cursor" !== ub && Bb() ? "hybrid" === ub && Ob ? "cursor" : "focus" : "cursor" : null
        })({
          mode: KB(),
          hasLayer: null !== bb,
          hasCandidates: () => null !== bb && rB(bb.root),
          hybridCursorEngaged: null !== XB
        })
      },
      DB = () => "hybrid" === KB() && jB(),
      xB = "pad-focused";
    var zB = hb(4311),
      gB = hb(4800);
    const iB = "[data-pad-destructive]",
      vB = `${iB}, [data-pad-back]`,
      tB = bb => ({
        rect: bb.getBoundingClientRect(),
        destructive: bb.matches(iB),
        closes: null !== bb.closest("[data-pad-close-button]"),
        unavailable: bb.matches("[data-pad-unavailable]")
      }),
      JB = bb => {
        let {
          destructive: ub,
          closes: hb,
          unavailable: Bb
        } = bb;
        return ub ? hb ? 2 : 3 : Bb ? 1 : 0
      },
      eB = bb => {
        let ub = -1;
        for (let hb = 0; hb < bb.length; hb++) {
          if (ub < 0) {
            ub = hb;
            continue
          }
          const Bb = bb[hb],
            Ob = bb[ub];
          JB(Bb) === JB(Ob) ? nh(Bb.rect, Ob.rect) < 0 && (ub = hb) : JB(Bb) < JB(Ob) && (ub = hb)
        }
        return ub
      },
      NB = "[data-pad-tabs]",
      sB = "[data-pad-tab]",
      MB = (bb, ub) => {
        const hb = bb.querySelector(`${sB}[data-pad-selected='true']`);
        return hb && ub.includes(hb) ? hb : null
      },
      mB = (bb, ub) => {
        let hb = ub;
        for (let Bb = ub.parentElement; Bb && !Bb.contains(bb); Bb = Bb.parentElement) hb = Bb;
        return hb
      };
    class IB {
      constructor() {
        this.contentReturn = null
      }
      redirect(bb, ub, hb, Bb) {
        var Ob, Gb;
        const Ub = bb.closest(NB),
          Lb = ub.closest(NB);
        var Yb;
        if (Lb && Lb !== Ub) return Ub || (this.contentReturn = new WeakRef(bb)), null !== (Yb = MB(Lb, hb)) && void 0 !== Yb ? Yb : ub;
        if (!Ub || Lb) return ub;
        const Sb = mB(bb, ub),
          ab = null === (Ob = this.contentReturn) || void 0 === Ob ? void 0 : Ob.deref();
        return ab && Sb.contains(ab) && hb.includes(ab) ? ab : null !== (Gb = this.pickRegionStart(Sb, xb(ub, "y", Bb), hb)) && void 0 !== Gb ? Gb : ub
      }
      findTabContent(bb, ub, hb) {
        const Bb = bb.closest(NB);
        if (!Bb || !bb.matches(sB) || Bb.contains(ub)) return null;
        const Ob = ub.closest(NB);
        if (Ob && Number(Ob.dataset.padTabs) <= Number(Bb.dataset.padTabs)) return null;
        const Gb = mB(bb, ub);
        return hb.some((bb => Gb.contains(bb) && !bb.closest(vB))) || !ub.closest(vB) ? Gb : null
      }
      pickContentStart(bb, ub, hb) {
        return this.contentReturn = null, this.pickRegionStart(bb, xb(bb, "y", hb), ub)
      }
      pickReplacedContentStart(bb, ub, hb, Bb) {
        if (!ub.contains(bb)) return null;
        const Ob = mB(ub, bb),
          Gb = hb.filter((bb => ub.contains(bb) && !Ob.contains(bb) && !bb.closest(vB)));
        return 0 === Gb.length ? null : (this.contentReturn = null, this.pickRegionStart(ub, xb(Gb[0], "y", Bb), Gb))
      }
      backToStrip(bb, ub, hb) {
        if (bb.closest(NB)) return null;
        const Bb = eh(hb);
        for (const Ob of hb.querySelectorAll(NB)) {
          if (Number(Ob.dataset.padTabs) <= 1 || Ob === Bb) continue;
          const Gb = MB(Ob, ub),
            Ub = Gb ? mB(bb, Ob).parentElement : null;
          if (Gb && Ub && Ub !== hb && hb.contains(Ub)) return this.contentReturn = new WeakRef(bb), Gb
        }
        return null
      }
      pickRegionStart(bb, ub, hb) {
        const Bb = Jb(ub),
          Ob = bb => {
            const ub = hb.filter((ub => bb.contains(ub) && !ub.closest(NB) && eb(ub.getBoundingClientRect(), Bb))),
              Ob = eB(ub.map(tB));
            return Ob >= 0 ? ub[Ob] : null
          };
        for (const Gb of (0, Qb.k)(bb)) {
          const bb = Ob(Gb);
          if (bb) return bb
        }
        for (const Gb of bb.querySelectorAll(NB)) {
          const bb = MB(Gb, hb);
          if (bb) return bb
        }
        return Ob(bb)
      }
    }
    const PB = "[data-pad-default-focus], .Dropdown-option.is-selected",
      qB = ".Dropdown-root.is-open > .Dropdown-menu",
      EB = "[data-pad-no-step-in]",
      yB = "[data-pad-tabs]",
      VB = "[data-pad-press-area]",
      FB = bb => {
        let ub = bb;
        for (let hb = 0; ub && hb <= 4; hb++, ub = ub.parentElement) {
          const hb = ub.querySelector(".CircleInfo");
          if (hb) return ub === bb || ub.querySelectorAll(Qb.d).length <= 1 ? hb : null;
          if (ub !== bb && ub.querySelectorAll(Qb.d).length > 1) return null
        }
        return null
      },
      fB = (bb, ub, hb) => {
        (0, yb.r)(bb, ub, hb);
        const Bb = null !== bb && void 0 !== bb && bb.isConnected ? FB(bb) : null,
          Ob = FB(ub);
        Bb !== Ob && (0, yb.r)(Bb, Ob, Ob ? (0, yb.C)(Ob) : hb, {
          leaveBelow: bb,
          enterBelow: ub
        })
      },
      kB = bb => bb.getBoundingClientRect(),
      TB = (bb, ub, hb) => {
        const Bb = new Set(hb);
        for (let Ob = bb; Ob; Ob = Ob === ub ? null : Ob.parentElement)
          if (Bb.has(Ob)) return Ob;
        return null
      },
      cB = (bb, ub) => !bb.root || bb.root === ub || ub.matches(qB) && bb.root.contains(ub);
    const QB = new class {
      constructor() {
        this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new bB, this.tabStripNav = new IB, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepeatKey = null, this.confirmRepeated = !1, this.confirmRepeat = (0, pb.c)(Xb.t), this.dpadRepeats = new Map(Xb.A.map((bb => [bb, (0, pb.c)(Xb.D)]))), this.stickRepeat = new Xb.c((0, pb.c)(Xb.hb)), this.lastRefocusCheckMs = -1 / 0, this.enteredLayerAtMs = 0, this.lastFocusedCentre = null, this.lastActivatedKey = null, this.lastActivated = null, this.lastActivatedAtMs = -1 / 0, this.pendingFocus = null, this.tabOpenWait = null, this.retryMove = null, this.scrollRemainder = {
          x: 0,
          y: 0
        }, this.wasActive = !1, this.layerKind = null, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.listeners = new Set, this.dropdownLayers = new WeakMap, this.dropdownLayerCounter = 0
      }
      install() {
        const bb = Hb.c.register({
            name: "focus",
            isActive: () => (0, Zb.k)() && "focus" === nB(),
            onFrame: bb => {
              this.onFrame(bb)
            },
            onDeactivate: () => {
              this.deactivate()
            },
            wakePressActs: bb => (0, Hb.e)(bb) || bb === (0, ab.f)("menuConfirm") && (0, yb.L)((0, Zb.e)())
          }),
          ub = (0, uB.m)((bb => {
            const ub = (0, uB.s)(bb);
            null === bb.memoryKey && this.memory.forget(ub), ub === this.layerKey && (this.layerKey = null)
          }));
        let hb = -1 / 0;
        const Bb = Ub.g.onFrame((bb => {
            (0, Zb.k)() || bb.timestampMs - hb < 100 || (hb = bb.timestampMs, SB())
          })),
          Ob = bb => {
            bb.isTrusted && bb.target instanceof Element && Ub.g.getActivePad() && this.noteChosenStop(bb.target)
          };
        return document.addEventListener("click", Ob, !0), () => {
          bb(), ub(), Bb(), document.removeEventListener("click", Ob, !0), this.deactivate()
        }
      }
      noteChosenStop(bb) {
        var ub, hb;
        const Bb = SB();
        if (!Bb || !Bb.root.contains(bb)) return;
        const Ob = null !== (ub = null === (hb = bb.closest(".Dropdown-root")) || void 0 === hb ? void 0 : hb.querySelector(".Dropdown-control")) && void 0 !== ub ? ub : bb,
          Gb = TB(Ob, Bb.root, this.getEnabledCandidates(Bb.root));
        if (!Gb) return;
        const Ub = (0, uB.s)(Bb.layer);
        Ub === this.layerKey && Bb.root === this.layerRoot || this.beginLayer(Bb, Ub), this.wasActive ? this.setFocus(Gb, {
          scroll: !1,
          byUser: !0
        }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = Gb, this.lastFocusedCentre = (0, yb.C)(Gb), this.rememberFocus(Gb), this.notify())
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
          this.stickRepeat.reset(), null !== (bb = this.focused) && void 0 !== bb && bb.isConnected && fB(this.focused, null, (0, yb.C)(this.focused)), this.notify()
        }
      }
      setFocus(bb) {
        var ub;
        let {
          scroll: hb = !0,
          byUser: Bb = !1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (Bb && (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1), bb === this.focused) return;
        const Ob = null !== (ub = this.focused) && void 0 !== ub && ub.isConnected ? this.focused : null;
        if (this.focused = bb, bb) {
          hb && (bb.classList.add(xB), bb.scrollIntoView({
            block: "nearest",
            inline: "nearest",
            behavior: "instant"
          })), Bb && ((bb, ub) => {
            const hb = ub.closest("[data-pad-friends-column]");
            hb && bb && !hb.contains(bb) && (Ph = new WeakRef(bb))
          })(Ob, bb);
          const ub = (0, yb.C)(bb);
          this.lastFocusedCentre = ub, this.movedInLayer && this.rememberFocus(bb), fB(Ob, bb, ub), "false" === bb.getAttribute("aria-pressed") && bb.closest("[data-pad-select-on-focus]") && (0, yb.e)(bb)
        } else Ob && fB(Ob, null, (0, yb.C)(Ob));
        this.notify()
      }
      rememberFocus(bb) {
        const ub = this.layerRoot;
        this.layerKey && ub && this.memory.remember(this.layerKey, bb, ub, (() => this.getEnabledCandidates(ub)))
      }
      noteCursorActivation(bb) {
        const ub = SB();
        if (!ub || !ub.root.contains(bb)) return;
        const hb = this.getEnabledCandidates(ub.root),
          Bb = new Set(hb);
        let Ob = bb;
        for (; Ob && !Bb.has(Ob);) Ob = Ob === ub.root ? null : Ob.parentElement;
        if (!(Ob instanceof HTMLElement)) return;
        const Gb = (0, uB.s)(ub.layer);
        this.memory.enter(Gb), this.memory.remember(Gb, Ob, ub.root, (() => hb))
      }
      notePageEnteredByCursor(bb) {
        return this.memory.enter(bb)
      }
      recallStop(bb, ub) {
        return this.findRemembered(bb, ub)
      }
      focusWhenFound(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.pendingFocus = {
          find: bb,
          untilMs: performance.now() + ub,
          holdWhile: hb
        }
      }
      getEnabledCandidates(bb) {
        return (0, Qb.g)(bb).filter((bb => !(0, Qb.t)(bb)))
      }
      onFrame(bb) {
        var ub;
        const hb = SB();
        if (!hb) return;
        const Bb = null !== (ub = this.findOpenDropdown(hb)) && void 0 !== ub ? ub : hb,
          Ob = performance.now(),
          Gb = (0, uB.s)(Bb.layer);
        if (Gb !== this.layerKey || Bb.root !== this.layerRoot) {
          const ub = this.focused;
          if (null !== this.layerKey && Bb.root === this.layerRoot && ub && (0, Qb.r)(ub, Bb.root)) this.continueLayer(Gb, ub), this.wasActive || this.resume(Bb.root, Ob);
          else {
            const ub = !this.wasActive && !bb.wokeDevice,
              Ub = "death" === this.layerKind || ub,
              Lb = this.enterLayer(Bb, Gb);
            "popup" !== Bb.layer.kind || Bb !== hb || Lb ? "menu" === Bb.layer.kind && Ub && "inGame" === Yb.d.get("gameState") && !(0, Uh.f)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = Ob + zB.c) : (this.pressGuardExtends = ub, this.pressGuardUntilMs = Ob + (ub ? zB.c : Ub ? 500 : 250))
          }
        } else this.wasActive || this.resume(Bb.root, Ob);
        if (this.layerKind = Bb.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), bb.wokeDevice && this.focusPointedStop(Bb.root), this.validateFocus(Bb, Ob), Ob < this.pressGuardUntilMs && this.pressGuardExtends && (bb.wasPressed((0, ab.f)("menuConfirm")) || bb.wasPressed((0, ab.f)("menuBack"))) && (this.pressGuardUntilMs = Ob + zB.c), Ob >= this.pressGuardUntilMs && this.handleButtons(bb, Bb)) return;
        const Ub = "hybrid" === KB();
        if (Ub && (bb => {
            const ub = HB();
            return ub !== lB && (lB = ub, AB.lock()), AB.update(bb, (0, wb.e)().moveDeadzone)
          })(bb.leftStick)) return Lb = this.getHandoff(), oB = wB(Lb), XB = HB(), void Hb.c.handOffHeldInput();
        var Lb;
        this.handleDirections(bb, Bb, Ob, !Ub), this.handleScroll(bb, Bb)
      }
      findOpenDropdown(bb) {
        const ub = bb.root.querySelector(qB);
        if (!ub || !(0, Qb.q)(ub)) return null;
        let hb = this.dropdownLayers.get(ub);
        return hb || (this.dropdownLayerCounter++, hb = {
          id: `dropdown-${this.dropdownLayerCounter}`,
          kind: bb.layer.kind,
          getRoot: () => ub,
          close: () => {
            (0, yb.l)(ub)
          },
          memoryKey: null
        }, this.dropdownLayers.set(ub, hb)), {
          layer: hb,
          root: ub,
          order: bb.order
        }
      }
      focusPointedStop(bb) {
        const ub = (0, Zb.e)(),
          hb = ub ? document.elementFromPoint(ub.x, ub.y) : null;
        if (!hb || !bb.contains(hb)) return;
        const Bb = TB(hb, bb, this.getEnabledCandidates(bb));
        Bb && this.setFocus(Bb, {
          scroll: !1,
          byUser: !0
        })
      }
      enterLayer(bb, ub) {
        const hb = this.beginLayer(bb, ub),
          Bb = CB();
        return Bb && cB(Bb, bb.root) ? (this.takeOver(bb.root, Bb, this.enteredLayerAtMs), hb) : (this.restoreLayerFocus(bb.root, hb), hb)
      }
      beginLayer(bb, ub) {
        return this.layerKey = ub, this.layerRoot = bb.root, this.lastActivatedKey = null, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoreOnFocusLoss = !1, this.retryMove = null, this.pendingFocus = null, this.confirmPressedOn = null, this.lastRefocusCheckMs = -1 / 0, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.enteredLayerAtMs = performance.now(), this.lastFocusedCentre = null, this.memory.enter(ub)
      }
      restoreLayerFocus(bb, ub) {
        const hb = ub && this.layerKey ? this.findRemembered(bb, this.layerKey) : null;
        this.restoredFromMemory = null !== hb, this.setFocus(null !== hb && void 0 !== hb ? hb : this.pickInitial(bb, {
          waitForContent: !0
        }))
      }
      continueLayer(bb, ub) {
        this.layerKey = bb;
        const hb = this.memory.enter(bb);
        this.restoreOnFocusLoss = hb, this.movedInLayer && !hb && this.rememberFocus(ub)
      }
      resume(bb, ub) {
        var hb;
        const Bb = CB();
        Bb && cB(Bb, bb) ? this.takeOver(bb, Bb, ub) : null !== (hb = this.focused) && void 0 !== hb && hb.isConnected && fB(null, this.focused, (0, yb.C)(this.focused))
      }
      pickPreferred(bb) {
        var ub;
        return null !== (ub = this.layerKey ? this.findRemembered(bb, this.layerKey) : null) && void 0 !== ub ? ub : this.pickInitial(bb, {
          waitForContent: !0
        })
      }
      findRemembered(bb, ub) {
        return this.memory.has(ub) ? this.memory.recall(ub, this.getEnabledCandidates(bb)) : null
      }
      getHandoff() {
        var bb, ub, hb;
        const Bb = null !== (bb = this.focused) && void 0 !== bb && bb.isConnected ? this.focused : null,
          Ob = null !== (ub = this.layerRoot) && void 0 !== ub && ub.isConnected ? this.layerRoot : null;
        return {
          point: Bb ? (0, yb.C)(Bb) : null !== (hb = this.lastFocusedCentre) && void 0 !== hb ? hb : this.getLayerStartPoint(Ob),
          element: Bb,
          direction: null
        }
      }
      getLayerStartPoint(bb) {
        if (!bb) return {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2
        };
        const ub = this.pickInitial(bb, {
          includeDisabled: !0
        });
        return (0, yb.C)(null !== ub && void 0 !== ub ? ub : bb)
      }
      takeOver(bb, ub, hb) {
        const {
          element: Bb,
          direction: Ob,
          point: Gb
        } = ub, Ub = Bb instanceof HTMLElement && (0, Qb.r)(Bb, bb) ? Bb : null;
        if (!Ob) {
          const ub = this.focused;
          return Ub ? this.setFocus(Ub, {
            scroll: !1,
            byUser: !0
          }) : this.focusNearest(bb, Gb), void(this.focused && this.focused === ub && this.focused.isConnected && fB(null, this.focused, (0, yb.C)(this.focused)))
        }
        if (this.dpadRepeats.get(Ob).update(!0, hb), Ub) return this.setFocus(Ub, {
          scroll: !1,
          byUser: !0
        }), void this.move(bb, Ob, hb, !0);
        const Lb = this.getEnabledCandidates(bb),
          Yb = Lb.map(kB),
          Sb = Kh(new DOMRect(Gb.x, Gb.y, 0, 0), Yb, Ob),
          ab = Sb >= 0 ? Sb : jh(Gb, Yb);
        this.setFocus(ab >= 0 ? Lb[ab] : this.pickInitial(bb), {
          byUser: !0
        })
      }
      focusNearest(bb, ub) {
        const hb = this.getEnabledCandidates(bb),
          Bb = jh(ub, hb.map(kB));
        this.setFocus(Bb >= 0 ? hb[Bb] : this.pickInitial(bb), {
          byUser: !0
        })
      }
      pickDefault(bb) {
        let {
          includeDisabled: ub = !1,
          exclude: hb = null
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Bb = [...bb.querySelectorAll(PB)].filter((Bb => (null === hb || void 0 === hb || !hb.has(Bb)) && (ub ? (0, Qb.w)(Bb, bb) : (0, Qb.r)(Bb, bb)))),
          Ob = eB(Bb.map(tB));
        return Ob >= 0 ? Bb[Ob] : null
      }
      pickNewAreaStart(bb, ub) {
        const hb = [...bb.querySelectorAll(VB)].filter(Qb.q);
        for (const Bb of [...(0, Qb.k)(bb), ...hb]) {
          if (ub.has(Bb)) continue;
          const bb = this.getEnabledCandidates(Bb),
            hb = eB(bb.map(tB));
          if (hb >= 0) return bb[hb]
        }
        return null
      }
      pickInitial(bb) {
        let {
          includeDisabled: ub = !1,
          waitForContent: hb = !1,
          enteredAtMs: Bb = this.enteredLayerAtMs
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Ob = this.pickDefault(bb, {
          includeDisabled: ub
        });
        if (Ob) return Ob;
        const Gb = bb => ub ? (0, Qb.g)(bb) : this.getEnabledCandidates(bb);
        let Ub = [];
        for (const wb of (0, Qb.k)(bb))
          if (Ub = Gb(wb), Ub.length > 0) break;
        if (0 === Ub.length) {
          if (hb && performance.now() - Bb < 1e4 && (0, Qb.o)(bb)) return null;
          Ub = Gb(bb)
        }
        const Lb = Ub.map(kB),
          Yb = Jb(null),
          Sb = Ub.filter(((bb, ub) => eb(Lb[ub], Yb))),
          ab = Sb.length > 0 ? Sb : Ub,
          Hb = eB(ab.map(tB));
        return Hb >= 0 ? ab[Hb] : null
      }
      validateFocus(bb, ub) {
        if (this.pendingFocus) {
          var hb, Bb;
          const Ob = this.pendingFocus.find();
          if (Ob && (0, Qb.r)(Ob, bb.root)) return this.pendingFocus = null, void this.setFocus(Ob, {
            byUser: !0
          });
          ub > this.pendingFocus.untilMs && (null === (hb = (Bb = this.pendingFocus).holdWhile) || void 0 === hb || !hb.call(Bb)) && (this.pendingFocus = null)
        }
        const Ob = this.focused,
          Gb = !!Ob && (0, Qb.r)(Ob, bb.root);
        if (!(!Gb && Ob && Ob === this.lastActivated && ub - this.lastActivatedAtMs < 5e3 && bb.root.contains(Ob) && (0, Qb.q)(Ob) && (0, Qb.t)(Ob))) {
          if (!Gb && this.restoreOnFocusLoss && this.layerKey) return this.restoreOnFocusLoss = !1, this.movedInLayer = !1, this.scrolledInLayer = !1, this.enteredLayerAtMs = ub, void this.restoreLayerFocus(bb.root, !0);
          if ((!Gb || !this.movedInLayer && !this.scrolledInLayer) && !(ub - this.lastRefocusCheckMs < (Gb ? 200 : 50)))
            if (this.lastRefocusCheckMs = ub, Gb) {
              const hb = ub - this.enteredLayerAtMs < 15e3 ? this.pickPreferred(bb.root) : null,
                Bb = null !== hb && void 0 !== hb ? hb : this.restoredFromMemory ? null : this.pickDefault(bb.root);
              Bb && Bb !== Ob && this.setFocus(Bb)
            } else {
              if (this.lastFocusedCentre && this.movedInLayer) {
                const ub = this.pendingFocus;
                return this.focusNearest(bb.root, this.lastFocusedCentre), void(this.pendingFocus = ub)
              }
              this.setFocus(this.pickPreferred(bb.root))
            }
        }
      }
      handleButtons(bb, ub) {
        if (bb.wasPressed((0, ab.f)("menuToggleCursor"))) return WB(this.getHandoff()), !0;
        if (bb.wasPressed((0, ab.f)("menuBack"))) {
          const bb = (0, yb.l)(ub.root);
          return bb ? this.setFocus(bb, {
            byUser: !0
          }) : qh(this, ub.root) || ((0, yb.h)(ub.root) ? this.returnToOpener(ub.root) : this.backToStrip(ub.root) || aB()), !0
        }
        const hb = (0, ab.f)("menuConfirm");
        var Bb, Ob;
        bb.wasPressed(hb) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (Bb = null === (Ob = this.focused) || void 0 === Ob ? void 0 : Ob.getAttribute("data-pad-repeat")) && void 0 !== Bb ? Bb : null, this.confirmRepeated = bb.wokeDevice, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now()));
        if (bb.wasReleased(hb)) {
          const bb = this.confirmPressedOn;
          if (this.confirmPressedOn = null, bb && !this.confirmRepeated && bb === this.focused && bb.isConnected && !(0, Qb.t)(bb)) {
            const hb = bb.matches("[data-pad-tab]") ? bb.closest(yB) : null;
            hb ? this.enterTab(bb, hb, ub.root, performance.now()) : this.activate(bb)
          }
          return !0
        }
        return this.repeatConfirm(bb, hb), Qh(this, bb, ub)
      }
      repeatConfirm(bb, ub) {
        const hb = this.confirmPressedOn;
        hb && null !== this.confirmRepeatKey && bb.isHeld(ub) && (hb === this.focused && hb.isConnected && !(0, Qb.t)(hb) && hb.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? hb.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.confirmRepeated = !0, this.activate(hb)) : this.confirmRepeatKey = null)
      }
      backToStrip(bb) {
        const ub = this.focused;
        if (!(0, wb.e)().menuBackToCategories) return !1;
        const hb = null !== ub && void 0 !== ub && ub.isConnected ? this.tabStripNav.backToStrip(ub, this.getEnabledCandidates(bb), bb) : null;
        return hb && this.setFocus(hb, {
          byUser: !0
        }), null !== hb
      }
      returnToOpener(bb) {
        const ub = this.lastActivatedKey;
        ub && (this.lastActivatedKey = null, this.focusWhenFound((() => {
          var hb;
          return null !== (hb = this.getEnabledCandidates(bb).find((bb => (0, yb.E)(bb) === ub))) && void 0 !== hb ? hb : null
        })))
      }
      activate(bb) {
        var ub;
        if ((0, gB.e)(bb) || (0, yb.I)(bb)) return;
        this.lastActivatedKey = null !== (ub = (0, yb.E)(bb)) && void 0 !== ub ? ub : this.lastActivatedKey, this.lastActivated = bb, this.lastActivatedAtMs = performance.now(), this.rememberFocus(bb);
        const hb = this.layerRoot;
        if (hb) {
          const ub = new Set(hb.querySelectorAll(PB)),
            Bb = new Set(hb.querySelectorAll(`[data-pad-initial-area], ${VB}`)),
            Ob = this.lastActivatedAtMs;
          this.focusWhenFound((() => {
            var Ob;
            return (0, Qb.r)(bb, hb) ? null : null !== (Ob = this.pickDefault(hb, {
              exclude: ub
            })) && void 0 !== Ob ? Ob : this.pickNewAreaStart(hb, Bb)
          }), 5e3, (() => bb.isConnected && (0, Qb.t)(bb) && performance.now() - Ob < 6e4))
        }(0, yb.e)(bb), (0, yb.j)(bb)
      }
      handleDirections(bb, ub, hb, Bb) {
        const Ob = ih(ub.layer.kind) ? (0, ab.f)("chat") : null;
        for (const Lb of Xb.A) {
          this.dpadRepeats.get(Lb).update(bb.isHeld(Lb), hb) && (Lb !== Ob || bb.wasPressed(Lb)) && this.move(ub.root, Lb, hb, !0)
        }
        const Gb = Bb ? (0, Xb.j)(bb.leftStick, (0, wb.e)().moveDeadzone) : {
            x: 0,
            y: 0
          },
          Ub = this.stickRepeat.update((0, Xb.ib)(Gb), hb);
        if (Ub && this.move(ub.root, Ub, hb, !0), this.retryMove && hb >= this.retryMove.atMs) {
          const {
            direction: bb
          } = this.retryMove;
          this.retryMove = null, this.move(ub.root, bb, hb, !1)
        }
      }
      move(bb, ub, hb, Bb) {
        var Ob;
        let Gb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.pendingFocus && this.pendingFocus === (null === (Ob = this.tabOpenWait) || void 0 === Ob ? void 0 : Ob.wait) && ub === this.tabOpenWait.direction) return;
        this.pendingFocus = null;
        const Ub = this.focused;
        if (!Ub || !Ub.isConnected) {
          const ub = this.pickInitial(bb);
          return void(ub && this.setFocus(ub, {
            byUser: !0
          }))
        }
        const Lb = "Left" === ub || "Right" === ub,
          Yb = Lb ? (0, gB.e)(Ub) : null;
        if (Yb) return void Yb.adjust("Left" === ub ? -1 : 1);
        const Sb = bb => null !== bb.closest("[data-pad-friends-column]"),
          ab = Sb(Ub),
          Hb = kB(Ub),
          wb = Lb || Ub.closest(yB) ? null : (bb => {
            const ub = new Map;
            return hb => {
              const Bb = hb.closest(yB);
              if (!Bb) return !1;
              let Ob = ub.get(Bb);
              if (void 0 === Ob) {
                const hb = kB(Bb);
                Ob = lh(bb, hb) && (hb.right <= bb.left || hb.left >= bb.right), ub.set(Bb, Ob)
              }
              return Ob
            }
          })(Hb),
          Zb = null !== Ub.closest(EB),
          Xb = this.getEnabledCandidates(bb).filter((bb => bb !== Ub && (Lb || Sb(bb) === ab) && !(null !== wb && void 0 !== wb && wb(bb)) && (Zb || !bb.closest(EB)))),
          pb = Xb.map(kB),
          ob = xb(Ub, "y", bb),
          Ab = Jb(ob);
        if (!Gb && !eb(Hb, Ab)) {
          const bb = Xb.filter(((bb, ub) => eb(pb[ub], Ab)));
          if (bb.length > 0) {
            const ub = {
              x: Ab.left + Ab.width / 2,
              y: Ab.top + Ab.height / 2
            };
            return void this.setFocus(bb[jh(ub, bb.map(kB))], {
              byUser: !0
            })
          }
        }
        const lb = Lb ? ((bb, ub, hb) => {
            const Bb = kB(bb),
              Ob = bb.closest(yB),
              Gb = Ob ? kB(Ob) : null;
            return ub.map(((ub, Ub) => {
              const Lb = hb[Ub];
              if (Lb.bottom > Bb.top && Lb.top < Bb.bottom) return !0;
              const Yb = ub.closest(yB);
              if (Ob && Gb) return Yb !== Ob && (null !== Yb || Lb.bottom <= Gb.top || Lb.top >= Gb.bottom);
              if (Yb) return !lh(Bb, kB(Yb));
              let Sb = bb;
              for (let hb = bb.parentElement; hb && !hb.contains(ub); hb = hb.parentElement) Sb = hb;
              const ab = kB(Sb);
              return Lb.right > ab.left && Lb.left < ab.right
            }))
          })(Ub, Xb, pb) : void 0,
          Kb = Lb && !Ub.closest(yB) ? (bb => bb.map((bb => !bb.closest(vB))))(Xb) : void 0,
          Wb = ((bb, ub) => {
            const hb = [];
            for (let Ob = bb; Ob; Ob = Ob.parentElement) hb.push(Ob);
            const Bb = new Map;
            return hb.forEach(((bb, ub) => {
              Bb.set(bb, hb.length - 1 - ub)
            })), ub.map((bb => {
              for (let ub = bb; ub; ub = ub.parentElement) {
                const bb = Bb.get(ub);
                if (void 0 !== bb) return bb
              }
              return -1
            }))
          })(Ub, Xb),
          Cb = Lb ? "x" : "y",
          db = xb(Ub, Cb, bb);
        let rb = Kh(Hb, pb, ub, Wb, lb, Kb);
        if (rb >= 0 && db && !db.contains(Xb[rb])) {
          const bb = Xb.flatMap(((bb, ub) => db.contains(bb) ? [ub] : [])),
            hb = ub => ub && bb.map((bb => ub[bb])),
            Bb = Kh(Hb, bb.map((bb => pb[bb])), ub, bb.map((bb => Wb[bb])), hb(lb), hb(Kb));
          rb = Bb >= 0 ? bb[Bb] : rb
        }
        if (rb >= 0) return void this.moveTo(Ub, Xb[rb], Xb, bb, ub, Gb);
        if (!Bb) return;
        const jb = "Right" === ub || "Down" === ub ? 1 : -1;
        if (db && vb(db, Cb, jb)) {
          const bb = "y" === Cb ? db.clientHeight : db.clientWidth;
          tb(db, Cb, jb * bb * .5), this.retryMove = {
            direction: ub,
            atMs: hb + 80
          }
        }
      }
      moveTo(bb, ub, hb, Bb, Ob, Gb) {
        const Ub = this.tabStripNav.findTabContent(bb, ub, hb);
        Ub && "true" !== bb.dataset.padSelected ? this.openTab(bb, Ub, Bb, Ob) : Gb && !Ub || this.setFocus(this.tabStripNav.redirect(bb, ub, hb, Bb), {
          byUser: !0
        })
      }
      openTab(bb, ub, hb, Bb) {
        const Ob = ub.parentElement;
        (0, yb.e)(bb), this.focusWhenFound((() => "true" !== bb.dataset.padSelected ? null : ub.isConnected ? this.tabStripNav.pickContentStart(ub, this.getEnabledCandidates(hb), hb) : Ob ? this.tabStripNav.pickReplacedContentStart(bb, Ob, this.getEnabledCandidates(hb), hb) : null), 3e3), this.tabOpenWait = {
          wait: this.pendingFocus,
          direction: Bb
        }
      }
      enterTab(bb, ub, hb, Bb) {
        this.move(hb, (bb => {
          const ub = [...bb.querySelectorAll(sB)].filter((ub => ub.closest(NB) === bb));
          if (ub.length >= 2) {
            const bb = ub[0].getBoundingClientRect(),
              hb = ub[1].getBoundingClientRect();
            return Math.abs(hb.top - bb.top) > Math.abs(hb.left - bb.left) ? "Right" : "Down"
          }
          const hb = bb.getBoundingClientRect();
          return hb.height > hb.width ? "Right" : "Down"
        })(ub), Bb, !1, !0), this.focused !== bb || this.pendingFocus || this.activate(bb)
      }
      handleScroll(bb, ub) {
        const hb = (0, Xb.j)(bb.rightStick, .2);
        if (0 === hb.x && 0 === hb.y) return void(this.scrollRemainder = {
          x: 0,
          y: 0
        });
        const Bb = bb.dtMs / 1e3;
        for (const Gb of ["x", "y"]) {
          var Ob;
          const bb = hb[Gb];
          if (0 === bb) continue;
          const Ub = null !== (Ob = xb(this.focused, Gb, ub.root)) && void 0 !== Ob ? Ob : gb(ub.root, Gb);
          if (!Ub) continue;
          const Lb = Math.sign(bb) * bb * bb * 1500 * Bb + this.scrollRemainder[Gb],
            Yb = Math.trunc(Lb);
          this.scrollRemainder[Gb] = Lb - Yb, 0 !== Yb && (tb(Ub, Gb, Yb), this.scrolledInLayer = !0)
        }
      }
    };
    var RB = hb(7888);
    var bO = hb(8449);
    const uO = {
        duration: 80,
        strongMagnitude: .2,
        weakMagnitude: .2,
        needsPadInUse: !1
      },
      hO = {
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
          ...uO,
          minIntervalMs: 1e3
        },
        preview: {
          ...uO,
          minIntervalMs: 0
        }
      };
    const BO = new class {
        constructor(bb) {
          this.deps = bb, this.lastPlayedMs = {}, this.loggedFailure = !1, this.logFailure = bb => {
            this.loggedFailure || (this.loggedFailure = !0, console.warn("Controller vibration failed; further failures are not logged.", bb))
          }
        }
        play(bb, ub) {
          const hb = hO[bb];
          if (!this.deps.isVibrationOn() || hb.needsPadInUse && !this.deps.isPadInUse()) return !1;
          const Bb = this.lastPlayedMs[bb];
          if (void 0 !== Bb && ub - Bb < hb.minIntervalMs) return !1;
          const Ob = this.deps.getActuator();
          if (!Ob) return !1;
          this.lastPlayedMs[bb] = ub;
          const {
            duration: Gb,
            strongMagnitude: Ub,
            weakMagnitude: Lb
          } = hb;
          try {
            Ob.playEffect("dual-rumble", {
              duration: Gb,
              strongMagnitude: Ub,
              weakMagnitude: Lb
            }).catch(this.logFailure)
          } catch (Yb) {
            this.logFailure(Yb)
          }
          return !0
        }
      }({
        getActuator: () => (bb => {
          const ub = null === bb || void 0 === bb ? void 0 : bb.vibrationActuator;
          return "function" === typeof(null === ub || void 0 === ub ? void 0 : ub.playEffect) ? ub : null
        })(Ub.g.getActiveGamepad()),
        isVibrationOn: () => (0, wb.e)().vibration,
        isPadInUse: Zb.k
      }),
      OO = bb => {
        BO.play(bb, performance.now())
      };
    var GO = hb(7897),
      UO = hb(2712),
      LO = hb(101),
      YO = hb(29),
      SO = hb(612);
    class aO {
      constructor(bb) {
        this.deps = bb
      }
      check() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const ub = this.deps.isPadActive() ? this.deps.getPadFamily() : null;
        if (!ub) return "skipped";
        const hb = bb ? this.deps.getVisitId() : this.deps.peekVisitId();
        return null === hb || this.deps.readReportedVisitId() === hb ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(hb), this.deps.iZ(ub, this.deps.getInputType()), "reported") : "notReady"
      }
    }
    const HO = "controllerUsageReportedVisit";
    var wO = hb(1249),
      ZO = hb(1622),
      XO = hb(599),
      pO = hb(1348),
      oO = hb(1144);
    const AO = bb => ({
        translationKey: `controller:${bb}`
      }),
      lO = {
        A: "A",
        B: "B",
        X: "X",
        Y: "Y",
        LB: "LB",
        RB: "RB",
        LT: "LT",
        RT: "RT",
        View: AO("padButtonView"),
        Menu: AO("padButtonMenu"),
        LS: "L3",
        RS: "R3",
        Up: AO("padButtonDpadUp"),
        Down: AO("padButtonDpadDown"),
        Left: AO("padButtonDpadLeft"),
        Right: AO("padButtonDpadRight"),
        Home: AO("padButtonHome"),
        LeftStick: AO("padButtonLeftStick"),
        RightStick: AO("padButtonRightStick")
      },
      KO = {
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
          View: AO("padButtonCreate"),
          Menu: AO("padButtonOptions")
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
      WO = (bb, ub) => {
        var hb;
        const Bb = null !== (hb = KO[bb][ub]) && void 0 !== hb ? hb : lO[ub];
        return "string" === typeof Bb ? Bb : (0, Ob.D)(oO.h.get().getCurrentLanguageCode(), Bb.translationKey)
      },
      CO = bb => {
        let {
          glyph: ub,
          family: hb,
          className: Bb
        } = bb;
        const Ob = (0, Zb.u)(),
          Gb = null !== hb && void 0 !== hb ? hb : Ob,
          Ub = (0, GO.f)(Gb, ub);
        return (0, mb.jsx)("span", {
          className: Mb()("ControllerGlyph", Bb),
          role: "img",
          "aria-label": WO(Gb, ub),
          style: {
            "--pad-glyph-mask": `url(${Ub})`,
            "--pad-glyph-aspect": (0, GO.d)(Gb, ub)
          }
        })
      };
    var dO = hb(1789);
    const rO = bb => {
      let {
        action: ub
      } = bb;
      const {
        t: hb
      } = (0, Ob.K)();
      switch (ub.kind) {
        case "reload":
          return (0, mb.jsx)("span", {
            children: hb("controller:gameplayReload")
          });
        case "specialAction":
          return null;
        case "customButton":
          return (0, mb.jsx)(dO.c, {
            text: ub.description ? [{
              icon: ub.icon
            }, ` ${ub.description}`] : [{
              icon: ub.icon
            }]
          });
        case "touchButton":
          return (0, mb.jsx)(dO.c, {
            text: ub.label
          })
      }
    };
    var jO = hb(8452);
    const nO = bb => {
      let {
        hold: ub
      } = bb;
      return (0, mb.jsx)("div", {
        className: "DropStackFillTrack",
        style: {
          "--pad-drop-stack-hold": `${ub.holdMs}ms`
        },
        children: (0, mb.jsx)("div", {
          className: "DropStackFillBar"
        })
      }, ub.id)
    };
    var DO = hb(8470),
      xO = hb(8475),
      zO = hb(8480),
      gO = hb(8467);
    const iO = () => {
        const {
          gameState: bb
        } = (0, Yb.j)(["gameState"]), ub = (0, Zb.t)(), [Bb, Ob] = (0, Nb.useState)(!1), [Gb, Ub] = (0, Nb.useState)(!1);
        return (0, Nb.useEffect)((() => {
          "inGame" === bb && Ob(!0)
        }), [bb]), (0, Nb.useEffect)((() => {
          if (!Bb) return;
          let bb = null,
            ub = !1;
          return (XO.o ? Promise.all([hb.e(70), hb.e(261), hb.e(200), hb.e(219), hb.e(218), hb.e(85)]).then((() => hb(39997))).then((bb => bb.startWasmPadGameplay)) : Promise.all([hb.e(70), hb.e(227), hb.e(226), hb.e(95), hb.e(73), hb.e(72), hb.e(71), hb.e(183), hb.e(223), hb.e(75), hb.e(197), hb.e(217), hb.e(94), hb.e(220), hb.e(84), hb.e(235), hb.e(114), hb.e(236), hb.e(74), hb.e(113), hb.e(156), hb.e(219), hb.e(189)]).then((() => hb(40123))).then((bb => bb.startPadGameplay))).then((hb => {
            ub || (bb = hb())
          })).catch((bb => {
            console.error("Pad gameplay failed to load", bb), ub || Ub(!0)
          })), () => {
            var hb;
            ub = !0, null === (hb = bb) || void 0 === hb || hb()
          }
        }), [Bb]), (0, Nb.useEffect)((() => {
          Gb && ub && (Ub(!1), wO.NotificationProvider.showPromptPopup({
            title: "controller:gameplayLoadFailedTitle",
            subtitle: "controller:gameplayLoadFailedSubtitle",
            confirmText: "settingsMenu:reloadPagePopupConfirm",
            confirmTooltip: "",
            cancelText: "general:cancel",
            cancelTooltip: ""
          }).getResult().then((bb => {
            !0 === bb && (0, ZO.reloadBloxd)()
          })))
        }), [Gb, ub]), (0, mb.jsxs)(mb.Fragment, {
          children: [(0, mb.jsx)(vO, {}), (0, mb.jsx)(tO, {}), (0, mb.jsx)(JO, {})]
        })
      },
      vO = () => {
        const {
          t: bb
        } = (0, Ob.K)(), ub = (0, Zb.t)(), {
          gameState: hb,
          isUiHidden: Bb
        } = (0, Yb.j)(["gameState", "isUiHidden"]), {
          hideButtonHints: Gb
        } = (0, wb.l)(), Ub = (0, jO.j)(), Lb = (0, jO.k)(), [Sb, Hb] = (0, Nb.useState)(zO.e);
        return (0, pO.h)(gO.q, Hb), !ub || Gb || Bb || "inGame" !== hb || !Ub && !Sb ? null : (0, mb.jsxs)("div", {
          className: "PadActionHint SmallTextBold",
          children: [Ub && (0, mb.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, mb.jsx)(CO, {
              glyph: (0, ab.f)("actionButton")
            }), (0, mb.jsx)(rO, {
              action: Ub
            }), Lb && (0, mb.jsx)("span", {
              className: "PadActionHintMore",
              children: bb("controller:gameplayActionWheelHint")
            })]
          }), Sb && (0, mb.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, mb.jsx)(CO, {
              glyph: (0, ab.f)("pickBlock")
            }), (0, mb.jsx)("span", {
              children: bb("controller:gameplayPickBlock")
            })]
          })]
        })
      },
      tO = () => {
        const {
          t: bb
        } = (0, Ob.K)(), ub = (0, Zb.t)(), {
          gameState: hb,
          isUiHidden: Bb
        } = (0, Yb.j)(["gameState", "isUiHidden"]), [Gb, Ub] = (0, Nb.useState)(DO.b);
        return (0, pO.h)(gO.p, Ub), ub && !Bb && "inGame" === hb && Gb ? (0, mb.jsxs)("div", {
          className: "PadDropStackFill SmallTextBold",
          children: [(0, mb.jsx)("span", {
            children: bb("controller:gameplayDropStack")
          }), (0, mb.jsx)(nO, {
            hold: Gb
          })]
        }) : null
      },
      JO = () => {
        const {
          t: bb
        } = (0, Ob.K)(), ub = (0, Zb.t)(), {
          gameState: hb,
          isUiHidden: Bb
        } = (0, Yb.j)(["gameState", "isUiHidden"]), {
          hideButtonHints: Gb
        } = (0, wb.l)(), [Ub, Lb] = (0, Nb.useState)(xO.e);
        return (0, pO.h)(gO.l, Lb), ub && !Bb && "inGame" === hb && Ub ? (0, mb.jsxs)("div", {
          className: "PadAttackLatchedHint SmallTextBold",
          children: [!Gb && (0, mb.jsx)(CO, {
            glyph: (0, ab.f)("attack")
          }), (0, mb.jsx)("span", {
            children: bb("controller:gameplayAttackLatched")
          })]
        }) : null
      };
    var eO = hb(8487),
      NO = hb(1836),
      sO = hb(2288),
      MO = hb(7874);
    const mO = bb => bb && !(0, eO.d)(NO.b.get("shopInfo")),
      IO = () => {
        const bb = "inGame" === (0, Yb.j)(["gameState"]).gameState;
        return (0, sO.e)("shopInfo", (() => {
          (0, MO.i)(mO(bb))
        })), (0, Nb.useEffect)((() => {
          (0, MO.i)(mO(bb))
        }), [bb]), null
      },
      PO = () => {
        const {
          t: bb
        } = (0, Ob.K)(), {
          hideButtonHints: ub
        } = (0, wb.l)();
        (0, Zb.u)();
        const hb = (0, Mu.h)();
        return (0, Nb.useEffect)((() => (() => {
          const bb = Hb.c.register({
              name: "inventory",
              isActive: Oh.isActive,
              onFrame: Oh.onFrame,
              onDeactivate: Oh.onDeactivate,
              wakePressActs: Oh.wakePressActs
            }),
            ub = bb => {
              Oh.noteRealPointer(bb), Oh.shouldBlockRealPointer(bb) && bb.stopPropagation()
            };
          for (const Ub of Gh) window.addEventListener(Ub, ub, !0);
          const hb = (0, cb.j)((() => {
              "inventory" !== Hb.c.getActiveConsumerName() && Oh.forgetSurface()
            })),
            Bb = bb => {
              const ub = bb.target;
              (0, Zb.k)() && (0, fb.i)(ub) && ub.closest(Cu) && (0, cb.i)() && (0, cb.r)(ub)
            };
          document.addEventListener("focusout", Bb, !0);
          const {
            invalidate: Ob,
            onScroll: Gb
          } = Oh.targets;
          return document.addEventListener("scroll", Gb, !0), window.addEventListener("resize", Ob), () => {
            bb(), hb();
            for (const bb of Gh) window.removeEventListener(bb, ub, !0);
            document.removeEventListener("scroll", Gb, !0), document.removeEventListener("focusout", Bb, !0), window.removeEventListener("resize", Ob), Oh.targets.disconnect()
          }
        })()), []), (0, mb.jsxs)(mb.Fragment, {
          children: [(0, mb.jsx)(Eb, {
            placer: Oh.ring,
            className: "InventorySlotCursorRing"
          }), hb.showing && !ub && (0, mb.jsx)("div", {
            className: "InventorySlotCursorHints SmallTextBold",
            children: Tb(hb).map((ub => {
              let {
                actions: Bb,
                labelKey: Ob
              } = ub;
              return (0, mb.jsxs)("div", {
                className: "InventorySlotCursorHint",
                children: [Bb.map((bb => (0, mb.jsx)(CO, {
                  glyph: (0, ab.f)(bb)
                }, bb))), (0, mb.jsx)("span", {
                  children: bb(`controller:${Ob}`)
                }), "inventoryDrop" === Ob && hb.dropStackHold && (0, mb.jsx)(nO, {
                  hold: hb.dropStackHold
                })]
              }, Ob)
            }))
          })]
        })
      },
      qO = [{
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
      EO = bb => Array.from(bb).map((bb => ({
        type: "char",
        char: bb,
        width: 1
      }))),
      yO = function(bb) {
        return {
          type: "command",
          command: bb,
          width: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
        }
      },
      VO = [yO("page", 2), yO("otherPage"), yO("caretLeft"), yO("space", 3), yO("caretRight"), yO("close", 1.5), yO("submit", 1.5)],
      FO = [yO("page", 2), yO("otherPage"), yO("caretLeft"), yO("space", 2), yO("caretRight"), yO("newline"), yO("close", 1.5), yO("submit", 1.5)],
      fO = [
        [...EO("1234567890"), yO("backspace")], EO("qwertyuiop/"), EO("asdfghjkl'?"), [yO("shift", 2), ...EO("zxcvbnm,.")]
      ],
      kO = [
        [...EO("1234567890"), yO("backspace")], EO("!@#$%^&*()/"), EO('-_=+[]{};:"'), EO("~`|\\<>'\u20ac\xa3,.")
      ],
      TO = {
        letters: fO,
        accents: [
          [...EO("1234567890"), yO("backspace")], EO("\xe1\xe9\xed\xf3\xfa\xe0\xe8\xec\xf2\xf9\xf1"), EO("\xe2\xea\xee\xf4\xfb\xe4\xeb\xef\xf6\xfc\xe7"), [yO("shift", 2), ...EO("\xe3\xf5\xdf\u0153\u011f\u015f\u0131\xbf\xa1")]
        ],
        symbols: kO
      },
      cO = new Set(["de", "es", "fr", "it", "nl", "pt", "pt-BR", "tr", "vi"]),
      QO = (bb, ub) => "letters" === bb ? ub ? {
        page: "accents",
        otherPage: "symbols"
      } : {
        page: "symbols",
        otherPage: "accents"
      } : {
        page: "letters",
        otherPage: "accents" === bb ? "symbols" : "accents"
      },
      RO = function(bb, ub) {
        const hb = ((bb, ub) => [...TO[bb], ub ? FO : VO])(bb, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
        if (0 === ub) return hb;
        const Bb = Math.min(2, bG(hb[0]) / ub);
        return [Array.from({
          length: ub
        }, ((bb, ub) => ({
          type: "phrase",
          phraseIndex: ub,
          width: Bb
        }))), ...hb]
      },
      bG = bb => bb.reduce(((bb, ub) => bb + ub.width), 0),
      uG = bb => Math.max(...bb.map(bG)),
      hG = (bb, ub) => {
        const hb = bb[ub.row];
        let Bb = (uG(bb) - bG(hb)) / 2;
        for (let Ob = 0; Ob < ub.col; Ob++) Bb += hb[Ob].width;
        return Bb + hb[ub.col].width / 2
      },
      BG = (bb, ub, hb) => {
        let Bb = 0,
          Ob = 1 / 0;
        for (let Gb = 0; Gb < bb[ub].length; Gb++) {
          const Ub = Math.abs(hG(bb, {
            row: ub,
            col: Gb
          }) - hb);
          Ub < Ob - 1e-9 && (Bb = Gb, Ob = Ub)
        }
        return Bb
      },
      OG = (bb, ub) => {
        const hb = Math.max(0, Math.min(bb.length - 1, ub.row));
        return {
          row: hb,
          col: Math.max(0, Math.min(bb[hb].length - 1, ub.col))
        }
      },
      GG = (bb, ub, hb) => "once" === bb && ub - hb <= 400 ? "caps" : "off" === bb ? "once" : "off",
      UG = (bb, ub) => "once" === bb && (bb => bb.toLowerCase() !== bb.toUpperCase())(ub) ? "off" : bb,
      LG = (bb, ub, hb) => {
        if ("symbols" === ub || "off" === hb) return bb;
        const Bb = bb.toUpperCase();
        return 1 === Bb.length ? Bb : bb
      };
    var YG = hb(8368);
    const SG = ["controller:keyboardPhraseGg", "controller:keyboardPhraseHi", "controller:keyboardPhraseThanks", "controller:keyboardPhraseGl", "controller:keyboardPhraseBrb", "controller:keyboardPhraseYes", "controller:keyboardPhraseNo", "controller:keyboardPhraseHelp"];
    const aG = new class {
        constructor() {
          this.lastSendMs = -1 / 0
        }
        claim(bb) {
          return !(bb - this.lastSendMs < 2e3) && (this.lastSendMs = bb, !0)
        }
      },
      HG = {
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
      wG = ["WS", "nameTag"],
      ZG = bb => {
        const ub = bb.target instanceof HTMLTextAreaElement && !wG.includes(bb.kind);
        return RO(bb.page, "chat" === bb.kind ? SG.length : 0, ub)
      },
      XG = bb => {
        const ub = bb.getBoundingClientRect(),
          hb = window.innerHeight,
          Bb = ub.top + ub.height / 2 < hb / 2 ? "bottom" : "top",
          Ob = "bottom" === Bb ? hb - ub.bottom - 6 : ub.top - 6;
        return {
          placement: Bb,
          maxHeightPx: Math.min(.46 * hb, Math.max(.3 * hb, Ob))
        }
      },
      pG = bb => {
        (0, xh.h)(bb) ? (0, xh.e)().close(): (QB.noteChosenStop(bb), bb.blur())
      };
    class oG {
      constructor(bb) {
        this.host = bb, this.lastShiftPressMs = -1 / 0, this.phraseTexts = [], this.phrasesFill = !1
      }
      setPhraseRow(bb, ub) {
        this.phraseTexts = bb, this.phrasesFill = ub
      }
      pressKey(bb) {
        const ub = this.host.getState(),
          hb = ZG(ub),
          Bb = hb[bb.row][bb.col];
        this.host.setState({
          ...ub,
          focus: bb,
          preferredX: hG(hb, bb)
        }), "char" === Bb.type ? this.typeChar(Bb.char) : "command" === Bb.type ? this.runCommand(Bb.command) : this.sendPhrase(Bb.phraseIndex)
      }
      runCommand(bb) {
        const ub = this.host.getState();
        switch (bb) {
          case "backspace":
            (0, fb.d)(ub.target);
            break;
          case "space":
            (0, fb.g)(ub.target, " ");
            break;
          case "newline":
            (0, fb.g)(ub.target, "\n");
            break;
          case "caretLeft":
            (0, fb.k)(ub.target, -1);
            break;
          case "caretRight":
            (0, fb.k)(ub.target, 1);
            break;
          case "shift": {
            const bb = performance.now();
            this.host.setState({
              ...ub,
              shift: GG(ub.shift, bb, this.lastShiftPressMs)
            }), this.lastShiftPressMs = bb;
            break
          }
          case "page":
          case "otherPage": {
            const hb = QO(ub.page, ub.accentsFirst)[bb];
            this.host.setState({
              ...ub,
              page: hb,
              focus: OG(ZG({
                ...ub,
                page: hb
              }), ub.focus)
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
            (0, xh.h)(ub.target) && (0, xh.e)().selectNextChannel()
        }
      }
      submit() {
        var bb, ub;
        const {
          target: hb
        } = this.host.getState();
        this.host.hide(), (0, xh.h)(hb) ? (0, xh.e)().submit() : (QB.noteChosenStop(hb), null === (bb = (ub = (0, xh.f)(hb)).submit) || void 0 === bb || bb.call(ub), document.activeElement === hb && hb.blur())
      }
      close() {
        const {
          target: bb
        } = this.host.getState();
        this.host.hide(), pG(bb)
      }
      typeChar(bb) {
        const {
          target: ub,
          page: hb,
          shift: Bb
        } = this.host.getState();
        (0, fb.g)(ub, LG(bb, hb, Bb)), this.host.setState({
          ...this.host.getState(),
          shift: UG(Bb, bb)
        })
      }
      sendPhrase(bb) {
        if (this.phrasesFill) {
          const {
            target: ub
          } = this.host.getState(), hb = this.phraseTexts[bb];
          hb && (ub.setSelectionRange(0, ub.value.length), (0, fb.g)(ub, hb))
        } else aG.claim(performance.now()) && (this.host.hide(), (0, xh.e)().sendLine(this.phraseTexts[bb]))
      }
    }
    var AG = hb(8391);
    const lG = {
        initialDelayMs: 380,
        intervalMs: 85
      },
      KG = {
        initialDelayMs: 400,
        intervalMs: 55
      };
    class WG {
      constructor(bb, ub) {
        this.host = bb, this.editor = ub, this.lastDirection = null, this.navRepeat = new Xb.c((0, pb.c)(lG)), this.commandRepeats = new Map(qO.filter((bb => {
          let {
            repeats: ub
          } = bb;
          return ub
        })).map((bb => {
          let {
            command: ub
          } = bb;
          return [ub, (0, pb.c)(KG)]
        })))
      }
      reset() {
        this.navRepeat.reset();
        for (const bb of this.commandRepeats.values()) bb.reset()
      }
      onVisibleFrame(bb) {
        const ub = performance.now();
        for (const {
            command: Ob,
            action: Gb
          }
          of qO) {
          const hb = (0, ab.f)(Gb),
            Bb = this.commandRepeats.get(Ob);
          if ((Bb ? Bb.update(bb.isHeld(hb), ub) : bb.wasPressed(hb)) && (this.editor.runCommand(Ob), !this.host.getState().visible)) return
        }
        if (bb.wasPressed((0, ab.f)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
        const hb = this.readNavDirection(bb);
        this.lastDirection = hb;
        const Bb = this.navRepeat.update(hb, ub);
        Bb && this.navigate(Bb)
      }
      onHiddenFrame(bb, ub) {
        var hb;
        if (bb.wasPressed((0, ab.f)("keyboardClose"))) return void pG(ub);
        const Bb = (0, ab.f)("keyboardType");
        if (bb.wasPressed(Bb)) return Hb.c.consumeButton(Bb), void this.host.open(ub);
        const Ob = this.readNavDirection(bb),
          Gb = null !== Ob && Ob !== this.lastDirection;
        if (this.lastDirection = Ob, !Gb || (0, xh.h)(ub)) return;
        const Ub = (null === (hb = SB()) || void 0 === hb ? void 0 : hb.root.contains(ub)) || null !== ub.closest(".EntireInventoryWrapper");
        pG(ub), Ub && Hb.c.handOffHeldInput()
      }
      navigate(bb) {
        const ub = this.host.getState();
        if ("Up" === bb && 0 === ub.focus.row && "chat" === ub.kind) return (0, xh.e)().stepHistory(), void this.host.setState({
          ...ub
        });
        const hb = ((bb, ub, hb, Bb) => {
          if ("Left" === hb || "Right" === hb) {
            const Bb = bb[ub.row].length,
              Ob = (ub.col + ("Right" === hb ? 1 : -1) + Bb) % Bb,
              Gb = {
                row: ub.row,
                col: Ob
              };
            return {
              pos: Gb,
              preferredX: hG(bb, Gb)
            }
          }
          const Ob = (ub.row + ("Down" === hb ? 1 : -1) + bb.length) % bb.length;
          return {
            pos: {
              row: Ob,
              col: BG(bb, Ob, Bb)
            },
            preferredX: Bb
          }
        })(ZG(ub), ub.focus, bb, ub.preferredX);
        this.host.setState({
          ...ub,
          focus: hb.pos,
          preferredX: hb.preferredX
        })
      }
      readNavDirection(bb) {
        for (const ub of Xb.A)
          if (bb.isHeld(ub)) return ub;
        return (0, Xb.ib)((0, Xb.j)(bb.leftStick, (0, wb.e)().moveDeadzone))
      }
    }
    const CG = ["Up", "Down", "Left", "Right"],
      dG = new Set(["CapsLock", "Control", "Fn", "FnLock", "Hyper", "NumLock", "ScrollLock", "Shift", "Super"]);
    const rG = new class {
      constructor() {
        this.state = HG, this.listeners = new Set, this.ownedField = null, this.pendingChatInput = null, this.pendingChatTimeout = 0, this.savedInputMode = null, this.editor = new oG(this), this.padInput = new WG(this, this.editor)
      }
      getState() {
        return this.state
      }
      setState(bb) {
        const ub = bb.visible !== this.state.visible;
        this.state = bb;
        for (const hb of this.listeners) hb();
        ub && Sb.i.vp(AG.c, bb.visible)
      }
      subscribe(bb) {
        return this.listeners.add(bb), () => {
          this.listeners.delete(bb)
        }
      }
      install() {
        const bb = Hb.c.register({
            name: "keyboard",
            isActive: () => this.state.visible || (0, fb.i)(document.activeElement),
            onFrame: bb => {
              this.onFrame(bb)
            },
            onDeactivate: () => {
              this.padInput.reset()
            },
            wakePressActs: bb => CG.includes(bb) || !this.state.visible && bb === (0, ab.f)("keyboardType")
          }),
          ub = bb => {
            const ub = bb.target;
            (0, fb.i)(ub) && (ub === this.pendingChatInput || (0, Zb.k)() ? this.open(ub) : this.state.visible && ub !== this.state.target && (this.ownedField = null, this.hide()))
          },
          hb = () => {
            setTimeout((() => {
              this.releaseLostField()
            }), 0)
          },
          Bb = bb => {
            bb.isTrusted && this.state.visible && (bb => !bb.repeat && !dG.has(bb.key) && !(0, YG.d)(bb.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(bb.key))(bb) && this.hide()
          },
          Ob = () => {
            this.state.visible && this.setState({
              ...this.state,
              ...XG(this.state.target)
            })
          };
        document.addEventListener("focusin", ub, !0), document.addEventListener("focusout", hb, !0), window.addEventListener("keydown", Bb, !0), window.addEventListener("resize", Ob);
        const Gb = Sb.i.subscribe(gO.e, (() => {
            this.openChat()
          })),
          Ub = Sb.i.subscribe(AG.e, (bb => {
            this.openForField(bb)
          }));
        return () => {
          bb(), document.removeEventListener("focusin", ub, !0), document.removeEventListener("focusout", hb, !0), window.removeEventListener("keydown", Bb, !0), window.removeEventListener("resize", Ob), Sb.i.unsubscribe(Gb), Sb.i.unsubscribe(Ub), this.clearPendingChat(), this.hide(), this.ownedField = null
        }
      }
      openChat() {
        const bb = (0, xh.e)();
        bb ? document.activeElement !== bb.input ? (this.clearPendingChat(), this.pendingChatInput = bb.input, this.pendingChatTimeout = window.setTimeout((() => {
          this.pendingChatInput = null
        }), 250), bb.open()) : this.open(bb.input) : console.warn("controllerOpenChat with no chat mounted")
      }
      openForField(bb) {
        (0, fb.i)(bb) ? (document.activeElement !== bb && bb.focus(), document.activeElement === bb && this.open(bb)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", bb)
      }
      open(bb) {
        var ub;
        if (this.clearPendingChat(), this.ownedField = bb, this.state.visible && this.state.target === bb) return;
        this.restoreInputMode(), (0, fb.o)(bb), this.savedInputMode = bb.getAttribute("inputmode"), bb.setAttribute("inputmode", "none");
        const hb = {
          ...HG,
          visible: !0,
          target: bb,
          kind: (0, xh.h)(bb) ? "chat" : null !== (ub = (0, xh.f)(bb).kind) && void 0 !== ub ? ub : null,
          accentsFirst: (Bb = oO.h.get().getCurrentLanguageCode(), cO.has(Bb)),
          ...XG(bb)
        };
        var Bb;
        const Ob = ZG(hb),
          Gb = ((bb, ub) => {
            for (let hb = 0; hb < bb.length; hb++) {
              const Bb = bb[hb].findIndex((bb => "char" === bb.type && bb.char === ub));
              if (-1 !== Bb) return {
                row: hb,
                col: Bb
              }
            }
            return null
          })(Ob, "q");
        this.padInput.reset(), this.setState({
          ...hb,
          focus: Gb,
          preferredX: hG(Ob, Gb)
        })
      }
      hide() {
        this.state.visible && (this.restoreInputMode(), this.padInput.reset(), this.setState(HG))
      }
      onFrame(bb) {
        if (this.releaseLostField()) return;
        const ub = document.activeElement;
        this.state.visible ? this.padInput.onVisibleFrame(bb) : (0, fb.i)(ub) && this.padInput.onHiddenFrame(bb, ub)
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
    var jG = hb(8502);
    const nG = new Map(qO.map((bb => {
        let {
          command: ub,
          action: hb
        } = bb;
        return [ub, hb]
      }))),
      DG = {
        letters: "ABC",
        accents: "\xe0\xe9",
        symbols: "&123"
      },
      xG = {
        chat: "controller:keyboardTargetChat",
        sign: "controller:keyboardTargetSign",
        nameTag: "controller:keyboardTargetNameTag",
        book: "controller:keyboardTargetBook",
        WS: "controller:keyboardTargetBookTitle"
      },
      zG = bb => {
        const ub = (() => {
          const [, bb] = (0, Nb.useReducer)((bb => bb + 1), 0);
          return bb
        })();
        (0, Nb.useEffect)((() => {
          if (!bb) return;
          const hb = ["input", "select", "selectionchange", "keyup", "pointerup"];
          for (const Ob of hb) bb.addEventListener(Ob, ub);
          document.addEventListener("selectionchange", ub);
          const Bb = new MutationObserver(ub);
          return Bb.observe(bb, {
            attributeFilter: ["placeholder"]
          }), () => {
            Bb.disconnect();
            for (const Bb of hb) bb.removeEventListener(Bb, ub);
            document.removeEventListener("selectionchange", ub)
          }
        }), [bb, ub])
      },
      gG = bb => {
        bb.preventDefault()
      },
      iG = bb => {
        "mouse" !== bb.pointerType && bb.preventDefault()
      },
      vG = () => {
        var bb;
        const {
          t: ub
        } = (0, Ob.K)(), hb = (() => {
          const [bb, ub] = (0, Nb.useState)(rG.getState());
          return (0, Nb.useEffect)((() => rG.subscribe((() => {
            ub(rG.getState())
          }))), []), bb
        })(), Bb = (0, Zb.t)(), Gb = (0, Nb.useRef)(null);
        (0, wb.l)(), (0, Zb.u)(), (0, Nb.useEffect)((() => {
          const bb = rG.install(),
            ub = null;
          return () => {
            bb(), null === ub || void 0 === ub || ub()
          }
        }), []);
        const Ub = (0, Nb.useMemo)((() => SG.map((bb => ub(bb)))), [ub]),
          Lb = hb.visible && "chat" === hb.kind ? hb.target : null;
        zG(Lb);
        const Yb = null !== (bb = null === Lb || void 0 === Lb ? void 0 : Lb.value) && void 0 !== bb ? bb : "",
          Sb = ((bb, ub, hb) => {
            if (!bb.startsWith("/")) return [];
            const Bb = [];
            for (let Ob = ub.length - 1; Ob >= 0 && Bb.length < hb; Ob--) {
              const hb = ub[Ob].trim();
              hb.startsWith(bb) && hb !== bb && !Bb.includes(hb) && Bb.push(hb)
            }
            return Bb
          })(Yb, Yb.startsWith("/") ? (0, jG.c)() : [], SG.length),
          Hb = Yb.startsWith("/"),
          Xb = Hb ? SG.map(((bb, ub) => {
            var hb;
            return null !== (hb = Sb[ub]) && void 0 !== hb ? hb : ""
          })) : Ub;
        if ((0, Nb.useEffect)((() => {
            rG.editor.setPhraseRow(Xb, Hb)
          })), (0, Nb.useEffect)((() => {
            const bb = Gb.current;
            if (bb) return bb.addEventListener("touchstart", gG, {
              passive: !1
            }), () => {
              bb.removeEventListener("touchstart", gG)
            }
          }), [hb.visible]), !hb.visible) return null;
        const pb = ZG(hb),
          ob = uG(pb),
          Ab = bb => "char" === bb.type ? LG(bb.char, hb.page, hb.shift) : "phrase" === bb.type ? Xb[bb.phraseIndex] : (bb => {
            switch (bb) {
              case "backspace":
                return "\u232b";
              case "shift":
                return "caps" === hb.shift ? "\u21ea" : "\u21e7";
              case "page":
              case "otherPage":
                return DG[QO(hb.page, hb.accentsFirst)[bb]];
              case "space":
                return ub("controller:keyboardSpace");
              case "caretLeft":
                return "\u2190";
              case "caretRight":
                return "\u2192";
              case "newline":
                return "\u21b5";
              case "submit":
                return ub("chat" === hb.kind ? "controller:keyboardSend" : "controller:keyboardDone");
              case "close":
                return "\u2715";
              case "channel":
                return "\u21c4"
            }
          })(bb.command),
          lb = bb => {
            rG.editor.pressKey(bb)
          };
        return (0, mb.jsxs)("div", {
          ref: Gb,
          className: Mb()(xh.m, "top" === hb.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
            PadKeyboardMultiline: hb.target instanceof HTMLTextAreaElement
          }),
          style: {
            "--pad-keyboard-rows": pb.length,
            "--pad-keyboard-height": `${hb.maxHeightPx}px`
          },
          onPointerDown: iG,
          onMouseDown: gG,
          children: [(0, mb.jsx)(tG, {
            target: hb.target,
            label: hb.kind ? ub(xG[hb.kind]) : hb.target.placeholder || ub("controller:keyboardTargetText")
          }), (0, mb.jsx)("div", {
            className: "PadKeyboardRows",
            children: pb.map(((bb, ub) => (0, mb.jsx)("div", {
              className: Mb()("PadKeyboardRow", {
                PadKeyboardPhraseRow: "phrase" === bb[0].type
              }),
              children: bb.map(((bb, Ob) => {
                const Gb = Bb && hb.focus.row === ub && hb.focus.col === Ob,
                  Ub = "command" === bb.type ? nG.get(bb.command) : void 0;
                return (0, mb.jsx)("div", {
                  className: "PadKeyboardKeySlot",
                  style: {
                    width: bb.width / ob * 100 + "%"
                  },
                  children: (0, mb.jsxs)("div", {
                    className: Mb()("PadKeyboardKey", {
                      PadKeyboardKeyFocused: Gb,
                      PadKeyboardKeyCommand: "command" === bb.type,
                      PadKeyboardKeyPhrase: "phrase" === bb.type,
                      PadKeyboardKeyActive: "command" === bb.type && "shift" === bb.command && "off" !== hb.shift,
                      PadKeyboardKeySubmit: "command" === bb.type && "submit" === bb.command
                    }),
                    role: "button",
                    onClick: () => {
                      lb({
                        row: ub,
                        col: Ob
                      })
                    },
                    onTouchEnd: bb => {
                      var hb, Bb;
                      bb.preventDefault(), hb = bb.changedTouches[0], Bb = bb.currentTarget.getBoundingClientRect(), hb && hb.clientX >= Bb.left && hb.clientX <= Bb.right && hb.clientY >= Bb.top && hb.clientY <= Bb.bottom && lb({
                        row: ub,
                        col: Ob
                      })
                    },
                    children: [(0, mb.jsx)("span", {
                      className: "PadKeyboardKeyLabel",
                      children: Ab(bb)
                    }), Bb && Ub && (0, mb.jsx)(CO, {
                      className: "PadKeyboardKeyGlyph",
                      glyph: (0, ab.f)(Ub)
                    })]
                  })
                }, Ob)
              }))
            }, ub)))
          })]
        })
      },
      tG = bb => {
        let {
          target: ub,
          label: hb
        } = bb;
        zG(ub);
        const Bb = (0, Nb.useRef)(null),
          Ob = (0, Nb.useRef)(null),
          Gb = ub instanceof HTMLTextAreaElement;
        (0, Nb.useLayoutEffect)((() => {
          const bb = Bb.current,
            ub = Ob.current;
          Gb ? bb.scrollTop = ub.offsetTop - bb.clientHeight / 2 : bb.scrollLeft = ub.offsetLeft - bb.clientWidth / 2
        }));
        const {
          value: Ub,
          start: Lb,
          end: Yb
        } = (0, fb.s)(ub), Sb = "password" === ub.type ? "\u2022".repeat(Ub.length) : Ub;
        return (0, mb.jsxs)("div", {
          className: "PadKeyboardPreview",
          children: [(0, mb.jsx)("div", {
            className: "PadKeyboardPreviewLabel SmallTextBold",
            children: hb
          }), (0, mb.jsxs)("div", {
            ref: Bb,
            className: Mb()("PadKeyboardPreviewText", {
              PadKeyboardPreviewMultiline: Gb
            }),
            children: [(0, mb.jsx)("span", {
              children: Sb.slice(0, Lb)
            }), (0, mb.jsx)("span", {
              ref: Ob,
              className: "PadKeyboardCaret"
            }), Lb !== Yb && (0, mb.jsx)("span", {
              className: "PadKeyboardPreviewSelection",
              children: Sb.slice(Lb, Yb)
            }), (0, mb.jsx)("span", {
              children: Sb.slice(Yb)
            }), 0 === Sb.length && ub.placeholder && ub.placeholder !== hb && (0, mb.jsx)("span", {
              className: "PadKeyboardPreviewPlaceholder",
              children: ub.placeholder
            })]
          })]
        })
      };
    var JG = hb(1288),
      eG = hb(3206);
    const NG = function() {
        for (var bb = arguments.length, ub = new Array(bb), hb = 0; hb < bb; hb++) ub[hb] = arguments[hb];
        return ub.map(ab.f)
      },
      sG = (bb, ub) => {
        const hb = Eh(bb);
        return hb ? [{
          glyphs: [hb],
          labelKey: ub
        }] : []
      },
      MG = [".BottomMiddleElements", ".BottomLeftElements > *", ".BottomRightElements > *", ".MiddleTextBottom .MiddleText"],
      mG = "--pad-hint-bar-clearance",
      IG = "[data-pad-hint-bar-avoid]",
      PG = bb => {
        const ub = [];
        for (const hb of bb)(0, Qb.q)(hb) && ub.push(hb.getBoundingClientRect());
        return ub
      },
      qG = bb => {
        if (!bb) return null;
        const ub = SB(),
          hb = ub ? PG(((bb, ub) => {
            const hb = bb.closest(IG);
            return hb ? [hb] : ("popup" === ub ? document : bb).querySelectorAll(IG)
          })(ub.root, ub.layer.kind)) : [],
          Bb = !ub || ub.root.hasAttribute("data-pad-shows-hud");
        if (((0, eG.l)(null === ub || void 0 === ub ? void 0 : ub.layer.kind, (0, eG.o)()) || Bb) && hb.push(...PG(document.querySelectorAll(MG.join(",")))), 0 === hb.length) return null;
        const {
          width: Ob,
          height: Gb
        } = bb.getBoundingClientRect(), Ub = window.innerHeight - 8, Lb = (0, eG.u)(Ub, {
          width: Ob,
          height: Gb
        }, window.innerWidth / 2, hb, 8);
        return Lb === Ub ? null : Math.round(window.innerHeight - Lb)
      },
      EG = bb => {
        const ub = document.documentElement.style,
          hb = bb ? `${Math.round(window.innerHeight-bb.getBoundingClientRect().top)}px` : "";
        ub.getPropertyValue(mG) !== hb && (hb ? ub.setProperty(mG, hb) : ub.removeProperty(mG))
      },
      yG = () => {
        const {
          t: bb
        } = (0, Ob.K)(), {
          hideButtonHints: ub
        } = (0, wb.l)(), hb = (0, Zb.t)(), [Bb, Gb] = (0, Nb.useState)(!1), [Ub, Sb] = (0, Nb.useState)([]), [pb, ob] = (0, Nb.useState)(null), Ab = (0, Nb.useRef)(null), lb = (0, Nb.useRef)(null);
        (0, pO.h)(AG.c, (bb => {
          Gb(bb)
        })), (0, pO.h)(eG.q, (() => {
          var bb;
          null === (bb = lb.current) || void 0 === bb || bb.call(lb)
        }));
        const Kb = hb && !ub && !Bb;
        return (0, Nb.useEffect)((() => {
          if (!Kb) return;
          let bb = null;
          const ub = () => {
            const ub = (() => {
                var bb;
                const ub = Hb.c.getActiveConsumerName(),
                  hb = (0, eG.h)();
                if (hb) {
                  const bb = (0, ab.f)(hb),
                    ub = "emoteWheel" === hb && "wheel" === (0, wb.e)().emoteButton || !(0, Xb.L)(Hb.c.getLastFrame().values, bb) ? {
                      glyphs: NG("menuConfirm"),
                      labelKey: "controller:menusSelect"
                    } : {
                      glyphs: [bb],
                      labelKey: "controller:wheelReleaseToPick"
                    };
                  return [{
                    glyphs: [(0, ab.w)(bb)],
                    labelKey: "controller:wheelChoose"
                  }, ub, {
                    glyphs: NG("menuBack"),
                    labelKey: "controller:wheelClose"
                  }]
                }
                const Bb = SB();
                if (!Bb || "focus" !== ub && "cursor" !== ub) return (0, eG.e)(ab.f);
                const Ob = [],
                  Gb = {
                    glyphs: NG("menuBack"),
                    labelKey: "controller:menusBack"
                  },
                  Ub = (0, yb.B)(Bb.root),
                  Lb = Ub ? !(0, Qb.t)(Ub) : Boolean(Bb.layer.close),
                  Sb = !Ub && Bb.layer.closeLabelKey ? Bb.layer.closeLabelKey : Gb.labelKey,
                  Zb = Lb ? [{
                    ...Gb,
                    labelKey: Sb
                  }] : [],
                  pb = ih(Bb.layer.kind) ? [{
                    glyphs: NG("chat"),
                    labelKey: "controller:menusQuickChat"
                  }] : [];
                if ("cursor" === ub) return Ob.push({
                  glyphs: NG("menuConfirm"),
                  labelKey: "controller:menusClick"
                }), Ob.push({
                  glyphs: NG("menuSecondary"),
                  labelKey: "controller:menusRightClick"
                }), Ob.push(...Zb), Ob.push(...pb), Ob.push({
                  glyphs: ["RightStick"],
                  labelKey: "controller:menusScroll"
                }), jB() && Ob.push({
                  glyphs: NG("menuToggleCursor"),
                  labelKey: "controller:menusFocusMode"
                }), Ob;
                const ob = QB.getFocused();
                ob && (0, gB.e)(ob) ? Ob.push({
                  glyphs: ["Left", "Right"],
                  labelKey: "controller:menusAdjust"
                }) : ob && (0, yb.I)(ob) ? Ob.push({
                  glyphs: [],
                  labelKey: "controller:menusUseMouse"
                }) : Ob.push({
                  glyphs: NG("menuConfirm"),
                  labelKey: "controller:menusSelect"
                });
                const Ab = ob ? null === (bb = wh(ob)) || void 0 === bb ? void 0 : bb.dataset.padSecondary : void 0;
                Ab && Ob.push({
                  glyphs: NG("menuSecondary"),
                  labelKey: Ab
                }), Ob.push(...null !== ob && void 0 !== ob && ob.closest("[data-pad-friends-column]") ? [Gb] : Zb), Ob.push(...pb);
                const lb = "home" === Bb.layer.kind;
                Fh(Bb.root) || !eh(Bb.root) && !fh(Bb) ? lb && Ob.push({
                  glyphs: NG("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusRows"
                }) : Ob.push({
                  glyphs: NG("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusTabs"
                }), lb && (Ob.push(...sG("inventory", "controller:menusFriends")), Ab || Ob.push({
                  glyphs: NG("menuSecondary"),
                  labelKey: "controller:menusSearch"
                }), Ob.push(...sG("pause", "controller:menusSettings")), Ob.push(...sG("leaderboard", "controller:menusNotifications")));
                const Kb = Yb.d.get("openEverythingMenuName");
                return "inGame" === Yb.d.get("gameState") && "popup" !== Bb.layer.kind && null !== Kb && ((0, Yh.o)(Kb) ? Ob.push(...sG("leaderboard", "controller:menusClose")) : Kb !== Lh.u.LOBBY_LEADERBOARD && Ob.push(...sG("leaderboard", "controller:menusLobby"))), Ob.push({
                  glyphs: NG("menuToggleCursor"),
                  labelKey: "controller:menusCursorMode"
                }), Ob
              })(),
              hb = qG(Ab.current),
              Bb = ((bb, ub) => `${bb.map((bb=>`${bb.glyphs.join("+")}:${bb.labelKey}`)).join("|")}@${ub}`)(ub, hb);
            Bb !== bb && (bb = Bb, (0, Lb.unstable_batchedUpdates)((() => {
              Sb(ub), ob(hb)
            }))), EG(Ab.current)
          };
          ub(), lb.current = ub;
          const hb = requestAnimationFrame(ub),
            Bb = setInterval(ub, 150);
          return () => {
            lb.current = null, cancelAnimationFrame(hb), clearInterval(Bb), EG(null)
          }
        }), [Kb]), (0, Nb.useLayoutEffect)((() => {
          if (!Kb) return;
          if (0 === Ub.length) return void EG(null);
          const bb = qG(Ab.current);
          bb === pb ? EG(Ab.current) : ob(bb)
        }), [Kb, Ub, pb]), Kb && 0 !== Ub.length ? (0, mb.jsx)("div", {
          ref: Ab,
          className: "PadButtonHintBar SmallTextBold",
          style: null === pb ? void 0 : {
            bottom: pb
          },
          "aria-hidden": !0,
          children: Ub.map((ub => (0, mb.jsxs)("div", {
            className: "PadButtonHint",
            children: [ub.glyphs.map((bb => (0, mb.jsx)(CO, {
              glyph: bb,
              className: "PadButtonHintGlyph"
            }, bb))), (0, mb.jsx)("span", {
              children: bb(ub.labelKey)
            })]
          }, ub.labelKey)))
        }) : null
      };
    var VG = hb(1625);
    const FG = [Qb.d, "label", "[data-pad-slider]"].join(","),
      fG = "data-pad-cursor-probe",
      kG = bb => {
        var ub;
        const hb = (bb => {
          const ub = [];
          for (let Bb = bb; Bb && Bb !== document.body && Bb !== document.documentElement && (ub.push(Bb), !(ub.length > 8)); Bb = Bb.parentElement);
          const hb = document.documentElement.classList.contains(Zb.o) ? ub[ub.length - 1] : void 0;
          null === hb || void 0 === hb || hb.setAttribute(fG, "");
          try {
            return ub.map((bb => ({
              element: bb,
              cursor: getComputedStyle(bb).cursor
            })))
          } finally {
            null === hb || void 0 === hb || hb.removeAttribute(fG)
          }
        })(bb);
        if ("pointer" !== (null === (ub = hb[0]) || void 0 === ub ? void 0 : ub.cursor)) return null;
        let Bb = 0;
        for (; Bb + 1 < hb.length && "pointer" === hb[Bb + 1].cursor;) Bb++;
        return hb[Bb].element
      },
      TG = (bb, ub, hb, Bb) => {
        const Ob = Bb.root.contains(bb) ? Bb.root : null;
        for (let Gb = bb; Gb && Gb !== document.body && Gb !== document.documentElement; Gb = Gb.parentElement) {
          if (Gb instanceof HTMLElement && Db(Gb, ub) && vb(Gb, ub, hb)) return Gb;
          if (Gb === Ob) break
        }
        return "home" === Bb.layer.kind || "gamePage" === Bb.layer.kind ? ((bb, ub) => {
          const hb = document.scrollingElement;
          return hb instanceof HTMLElement && ![document.documentElement, document.body].some((ub => {
            const hb = getComputedStyle(ub),
              Bb = "y" === bb ? hb.overflowY : hb.overflowX;
            return "hidden" === Bb || "clip" === Bb
          })) && vb(hb, bb, ub) ? hb : null
        })(ub, hb) : null
      };
    const cG = new class {
        constructor() {
          this.state = {
            x: 0,
            y: 0,
            speedRamp: 0
          }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this.confirmRepeat = (0, pb.c)(Xb.t), this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.layerRoot = null, this.layerOrder = 0, this.layerPoints = new WeakMap, this.page = null, this.pendingPageStart = null
        }
        install() {
          const bb = Hb.c.register({
              name: "cursor",
              isActive: () => "cursor" === nB(),
              onFrame: bb => {
                this.onFrame(bb)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: bb => (0, Hb.e)(bb) || bb === (0, ab.f)("menuConfirm") && (0, yb.L)((0, Zb.e)())
            }),
            ub = (0, uB.m)((bb => {
              const ub = bb.getRoot();
              ub && this.layerPoints.delete(ub), ub === this.layerRoot && (this.layerRoot = null)
            })),
            hb = Sb.i.subscribe("appManagerUpdated|activeInputDevice", (bb => {
              "gamepad" !== bb && this.active && !this.hidden && this.hide()
            }));
          return () => {
            bb(), ub(), Sb.i.unsubscribe(hb), this.deactivate()
          }
        }
        getHighlighted() {
          return this.isVisible() ? this.interactive : null
        }
        isVisible() {
          return this.active && !this.hidden && (0, Zb.k)()
        }
        getPoint() {
          return {
            x: this.state.x,
            y: this.state.y
          }
        }
        hide() {
          this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.vp()
        }
        activate(bb) {
          this.active = !0, this.hidden = !1;
          const ub = CB();
          !ub || ub.root && ub.root !== bb.root ? this.jumpTo(this.hasPosition ? this.getPoint() : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          }) : (this.setLayer(bb), this.jumpTo(ub.point))
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
          }, this.vp())
        }
        onFrame(bb) {
          const ub = SB();
          if (!ub) return;
          if (this.active || this.activate(ub), this.followPage(ub)) return;
          this.followLayer(ub);
          const hb = bb.wokeDevice ? (0, Zb.e)() : null;
          if (hb && this.jumpTo(hb), !(0, Zb.k)()) return void this.hide();
          const Bb = (0, ab.f)("menuToggleCursor");
          if (bb.wasPressed(Bb)) return Hb.c.consumeButton(Bb), void WB(this.getHandoff(null));
          if (this.handBackToFocus(bb)) return;
          const Ob = (0, ab.f)("menuConfirm"),
            Gb = (0, ab.f)("menuSecondary");
          if (bb.wasPressed((0, ab.f)("menuBack"))) return (0, yb.l)(ub.root) || (0, yb.h)(ub.root) || aB(), void this.vp();
          if (ch(null, bb, ub)) return bb.wasReleased(Ob) && this.press && (this.updateHit(!1), this.updateConfirm(bb, Ob)), void this.vp();
          if (document.pointerLockElement) return void this.hide();
          const Ub = DB() ? {
              x: 0,
              y: 0
            } : (bb => {
              const ub = (bb, ub) => (bb ? 1 : 0) - (ub ? 1 : 0);
              return {
                x: ub(bb.isHeld("Right"), bb.isHeld("Left")),
                y: ub(bb.isHeld("Down"), bb.isHeld("Up"))
              }
            })(bb),
            Lb = (0, wb.e)().moveDeadzone,
            Yb = ((bb, ub) => {
              const hb = (0, Xb.j)(bb, Wb(ub));
              return Math.hypot(hb.x, hb.y)
            })(bb.leftStick, Lb) > 0 || 0 !== Ub.x || 0 !== Ub.y;
          if (this.hidden) {
            const ub = bb.wasPressed(Ob),
              hb = bb.wasPressed(Gb);
            if (!Yb && !rb(bb.rightStick) && !ub && !hb && !bb.wokeDevice) return void this.vp();
            if (this.hidden = !1, this.updateHit(!1), ub || hb) return ub && (this.press = {
              kind: "ignored"
            }, bb.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.vp()
          }
          this.movePendingPageStart(Yb);
          const Sb = this.getPoint();
          this.state = db(this.state, {
            stick: bb.leftStick,
            moveDeadzone: Lb,
            dpad: Ub,
            dtMs: bb.dtMs,
            cursorSpeedPercent: (0, wb.e)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: this.getAssistContext()
          });
          const pb = this.state.x !== Sb.x || this.state.y !== Sb.y,
            ob = [Ob, Gb].some((ub => bb.wasPressed(ub) || bb.wasReleased(ub)));
          (pb || ob || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(pb), this.updateConfirm(bb, Ob), this.updateSecondary(bb, Gb), this.updateScroll(bb, ub), this.vp()
        }
        followPage(bb) {
          const ub = "home" === bb.layer.kind || "gamePage" === bb.layer.kind,
            hb = this.page;
          if (this.page = ub ? {
              key: (0, uB.s)(bb.layer),
              root: bb.root
            } : null, !this.page || !hb || hb.root !== bb.root || hb.key === this.page.key) return !1;
          if (this.cancelPress(), this.secondaryArmed = !1, this.setLayer(bb), "hybrid" === KB()) return oB = null, XB = null, AB.lock(), !0;
          const {
            key: Bb
          } = this.page;
          return this.pendingPageStart = {
            root: bb.root,
            key: Bb,
            returning: QB.notePageEnteredByCursor(Bb),
            enteredAtMs: performance.now()
          }, !1
        }
        movePendingPageStart(bb) {
          const ub = this.pendingPageStart;
          if (!ub) return;
          if (bb || ub.root !== this.layerRoot) return void(this.pendingPageStart = null);
          const hb = ub.returning ? QB.recallStop(ub.root, ub.key) : null;
          if (!hb && ub.returning && performance.now() - ub.enteredAtMs < 1e3) return;
          const Bb = null !== hb && void 0 !== hb ? hb : QB.pickInitial(ub.root, {
            includeDisabled: !0,
            waitForContent: !0,
            enteredAtMs: ub.enteredAtMs
          });
          Bb && (this.pendingPageStart = null, this.jumpTo((0, yb.C)(Bb)))
        }
        setLayer(bb) {
          this.layerRoot = bb.root, this.layerOrder = bb.order
        }
        followLayer(bb) {
          var ub;
          if (bb.root === this.layerRoot) return;
          null !== (ub = this.layerRoot) && void 0 !== ub && ub.isConnected && this.layerPoints.set(this.layerRoot, this.getPoint()), this.cancelPress(), this.draggedSlider = null, this.secondaryArmed = !1;
          const hb = this.layerPoints.get(bb.root),
            Bb = hb && bb.order <= this.layerOrder ? hb : QB.getLayerStartPoint(bb.root);
          this.setLayer(bb), this.jumpTo(Bb)
        }
        getHandoff(bb) {
          var ub;
          return {
            point: this.getPoint(),
            element: null !== (ub = this.interactive) && void 0 !== ub ? ub : this.findDraggedSliderNearby(),
            direction: bb
          }
        }
        findDraggedSliderNearby() {
          const bb = this.draggedSlider;
          if (null === bb || void 0 === bb || !bb.isConnected) return null;
          const ub = bb.getBoundingClientRect(),
            {
              y: hb
            } = this.getPoint();
          return hb >= ub.top - 40 && hb <= ub.bottom + 40 ? bb : null
        }
        handBackToFocus(bb) {
          if (!DB()) return !1;
          const ub = Xb.A.find((ub => bb.wasPressed(ub)));
          return !!ub && (hb = this.getHandoff(ub), oB = wB(hb), XB = null, AB.lock(), Hb.c.handOffHeldInput(), !0);
          var hb
        }
        getAssistContext() {
          const bb = this.interactive;
          if (null === bb || void 0 === bb || !bb.isConnected) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const ub = bb.getBoundingClientRect();
          if (ub.width > .4 * window.innerWidth || ub.height > .4 * window.innerHeight) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const hb = (0, wb.e)().cursorMagnetism && !(0, VG.d)(bb) && !bb.closest("[data-pad-slider]"),
            Bb = this.magnet && this.magnet !== bb && this.magnet.isConnected ? this.magnet.getBoundingClientRect() : ub;
          return {
            overInteractive: !0,
            magnetTarget: hb ? {
              x: Bb.left + Bb.width / 2,
              y: Bb.top + Bb.height / 2
            } : null
          }
        }
        updateHit(bb) {
          this.lastHitTestMs = performance.now();
          const ub = this.getPoint(),
            hb = document.elementFromPoint(ub.x, ub.y),
            Bb = hb && !(0, Ab.p)(hb) && (bb => {
              var ub;
              const hb = SB();
              return !(hb && !hb.root.contains(bb) && !bb.closest(".tooltip-container")) || !(null !== (ub = document.getElementById("root")) && void 0 !== ub && ub.contains(bb))
            })(hb) ? hb : null;
          if (Bb !== this.hit) return (0, yb.r)(this.hit, Bb, ub), this.hit = Bb, void this.setInteractive(Bb ? (bb => {
            const ub = bb.closest(FG);
            if (ub) {
              var hb, Bb;
              const bb = null !== (hb = null === (Bb = ub.parentElement) || void 0 === Bb ? void 0 : Bb.closest("[data-pad-focusable]")) && void 0 !== hb ? hb : ub;
              return (0, Qb.t)(bb) ? {
                element: null,
                magnet: null
              } : {
                element: bb,
                magnet: ub
              }
            }
            const Ob = kG(bb);
            return {
              element: Ob,
              magnet: Ob
            }
          })(Bb) : {
            element: null,
            magnet: null
          });
          bb && Bb && (0, yb.r)(Bb, Bb, ub)
        }
        setInteractive(bb) {
          let {
            element: ub,
            magnet: hb
          } = bb;
          this.interactive = ub, this.magnet = hb
        }
        clearHover() {
          this.hit && (0, yb.r)(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
            element: null,
            magnet: null
          })
        }
        beginPress() {
          const bb = this.hit;
          if (!bb || (0, yb.I)(bb)) return {
            kind: "ignored"
          };
          const ub = (0, gB.e)(bb),
            hb = bb.closest("[data-pad-slider]");
          return ub && hb ? {
            kind: "slider",
            slider: hb,
            adjuster: ub
          } : ((0, yb.u)(bb, this.getPoint()), {
            kind: "pointer",
            target: bb
          })
        }
        applySliderFraction(bb) {
          var ub;
          const hb = bb.slider.getBoundingClientRect(),
            Bb = hb.height > hb.width,
            Ob = null === (ub = bb.slider.querySelector("[data-pad-slider-handle]")) || void 0 === ub ? void 0 : ub.getBoundingClientRect(),
            Gb = Ob ? Bb ? Ob.height : Ob.width : 0,
            Ub = (Bb ? hb.height : hb.width) - Gb;
          if (Ub <= 0) return;
          const Lb = Bb ? hb.bottom - Gb / 2 - this.state.y : this.state.x - hb.left - Gb / 2;
          bb.adjuster.setFraction(Math.max(0, Math.min(1, Lb / Ub)))
        }
        updateConfirm(bb, ub) {
          bb.wasPressed(ub) && (this.press = bb.wokeDevice ? {
            kind: "ignored"
          } : this.beginPress(), this.draggedSlider = "slider" === this.press.kind ? this.press.slider : null, this.beginRepeat());
          const hb = this.press;
          if (!hb) return;
          if (bb.isHeld(ub)) return "slider" === hb.kind && this.applySliderFraction(hb), void this.updateRepeat();
          this.press = null;
          const Bb = this.repeated;
          if (this.endRepeat(), !bb.wasReleased(ub)) return void this.endPressWithoutClick(hb);
          const Ob = this.getPoint(),
            Gb = this.hit;
          if ("slider" === hb.kind && hb.adjuster.endDrag(), "pointer" === hb.kind) {
            const bb = null !== Gb && void 0 !== Gb ? Gb : hb.target.isConnected ? hb.target : null;
            bb && (0, yb.y)(bb, Ob);
            const ub = Gb && hb.target.isConnected && !Bb ? ((bb, ub) => {
              for (let hb = bb; hb; hb = hb.parentElement)
                if (hb.contains(ub)) return hb;
              return null
            })(hb.target, Gb) : null;
            ub && (QB.noteCursorActivation(ub), (0, Ab.d)(ub, new MouseEvent("click", (0, yb.S)(Ob, 0, 0))), (0, yb.j)(ub), (0, yb.R)(ub) && (0, yb.N)(ub))
          }
        }
        beginRepeat() {
          var bb, ub, hb;
          const Bb = null !== (bb = null === (ub = this.hit) || void 0 === ub ? void 0 : ub.closest("[data-pad-repeat]")) && void 0 !== bb ? bb : null;
          this.repeatStop = Bb, this.repeatKey = null !== (hb = null === Bb || void 0 === Bb ? void 0 : Bb.getAttribute("data-pad-repeat")) && void 0 !== hb ? hb : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
        }
        updateRepeat() {
          const bb = this.repeatStop;
          if (!bb) return;
          const ub = this.hit;
          bb.isConnected && !(0, Qb.t)(bb) && bb.getAttribute("data-pad-repeat") === this.repeatKey && ub && bb.contains(ub) ? bb.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, QB.noteCursorActivation(bb), (0, Ab.d)(bb, new MouseEvent("click", (0, yb.S)(this.getPoint(), 0, 0)))) : this.repeatStop = null
        }
        endRepeat() {
          this.repeatStop = null, this.repeated = !1
        }
        endPressWithoutClick(bb) {
          "slider" === bb.kind && bb.adjuster.endDrag(), "pointer" === bb.kind && bb.target.isConnected && (0, yb.y)(bb.target, this.getPoint())
        }
        cancelPress() {
          this.endRepeat(), this.press && (this.endPressWithoutClick(this.press), this.press = null)
        }
        updateSecondary(bb, ub) {
          bb.wasPressed(ub) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !bb.isHeld(ub) && (this.secondaryArmed = !1, bb.wasReleased(ub) && this.hit && (0, yb.o)(this.hit, this.getPoint(), 2))
        }
        updateScroll(bb, ub) {
          const hb = jb(bb.rightStick, bb.dtMs);
          if (0 === hb.x && 0 === hb.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          this.scrollRemainder = {
            x: this.scrollRemainder.x + hb.x,
            y: this.scrollRemainder.y + hb.y
          };
          const Bb = Math.trunc(this.scrollRemainder.x),
            Ob = Math.trunc(this.scrollRemainder.y);
          this.scrollRemainder = {
            x: this.scrollRemainder.x - Bb,
            y: this.scrollRemainder.y - Ob
          };
          const Gb = this.hit;
          if (!Gb) return;
          let Ub = !1;
          if (0 !== Ob) {
            const bb = TG(Gb, "y", Ob > 0 ? 1 : -1, ub);
            bb && (bb.scrollBy({
              top: Ob,
              behavior: "instant"
            }), Ub = !0)
          }
          if (0 !== Bb) {
            const bb = TG(Gb, "x", Bb > 0 ? 1 : -1, ub);
            bb && (bb.scrollBy({
              left: Bb,
              behavior: "instant"
            }), Ub = !0)
          }
          Ub && (this.lastHitTestMs = -1 / 0)
        }
        vp() {
          Fb.set({
            x: this.state.x,
            y: this.state.y,
            visible: this.isVisible(),
            pressed: null !== this.press && "ignored" !== this.press.kind
          })
        }
      },
      QG = () => {
        const bb = (0, Nb.useMemo)((() => new qb), []),
          ub = (0, Zb.t)();
        return (0, Nb.useEffect)((() => {
          if (!ub) return;
          let hb = 0,
            Bb = {
              of: null,
              atMs: 0,
              list: []
            };
          const Ob = document.getElementsByClassName(xB),
            Gb = bb => {
              for (const ub of [...Ob]) ub !== bb && ub.classList.remove(xB)
            },
            Ub = () => {
              var ub;
              hb = requestAnimationFrame(Ub);
              const Ob = (() => {
                const bb = QB.getFocused();
                if (QB.isActive() && null !== bb && void 0 !== bb && bb.isConnected) return bb;
                const ub = cG.getHighlighted();
                return null !== ub && void 0 !== ub && ub.isConnected ? ub : null
              })();
              Gb(Ob), Ob && !Ob.classList.contains(xB) && Ob.classList.add(xB);
              const Lb = null !== (ub = null === Ob || void 0 === Ob ? void 0 : Ob.closest("[data-pad-reticle-box]")) && void 0 !== ub ? ub : Ob;
              bb.show(Lb ? ((bb, ub) => {
                let hb = bb.left,
                  Bb = bb.top,
                  Ob = bb.right,
                  Gb = bb.bottom;
                for (const Ub of ub) {
                  if (!Ub) continue;
                  const bb = Jb(Ub);
                  hb = Math.max(hb, bb.left), Bb = Math.max(Bb, bb.top), Ob = Math.min(Ob, bb.right), Gb = Math.min(Gb, bb.bottom)
                }
                return Ob <= hb || Gb <= Bb ? null : {
                  left: hb,
                  top: Bb,
                  width: Ob - hb,
                  height: Gb - Bb
                }
              })(Lb.getBoundingClientRect(), (bb => {
                const ub = performance.now();
                return (Bb.of !== bb || ub - Bb.atMs > 500) && (Bb = {
                  of: bb,
                  atMs: ub,
                  list: [xb(bb, "y"), xb(bb, "x")]
                }), Bb.list
              })(Lb)) : null)
            };
          return hb = requestAnimationFrame(Ub), () => {
            cancelAnimationFrame(hb), Gb(null), bb.hide()
          }
        }), [ub, bb]), (0, mb.jsx)(Eb, {
          placer: bb,
          className: "PadFocusRing"
        })
      },
      RG = (bb, ub) => {
        bb.style.transform = `translate3d(${ub.x}px, ${ub.y}px, 0)`, bb.classList.toggle("Visible", ub.visible), bb.classList.toggle("Pressed", ub.pressed)
      },
      bU = () => {
        const bb = (0, Nb.useRef)(null);
        return (0, Nb.useEffect)((() => {
          const ub = Fb.subscribe((ub => {
            bb.current && RG(bb.current, ub)
          }));
          return bb.current && RG(bb.current, Fb.get()), ub
        }), []), (0, mb.jsx)("div", {
          ref: bb,
          className: "PadCursorView",
          "aria-hidden": "true",
          children: (0, mb.jsx)("div", {
            className: "PadCursorGlyph",
            children: "+"
          })
        })
      },
      uU = "#ncmp__modal.ncmp__active",
      hU = [{
        id: "nitro-consent-banner",
        find: () => document.querySelector(uU) ? null : document.querySelector("#ncmp__tool > .ncmp__banner.ncmp__active"),
        startSelectors: ["[data-ncmp-cmd='reject']", "[data-ncmp-cmd='showModal']"]
      }, {
        id: "nitro-consent-modal",
        find: () => document.querySelector(uU),
        startSelectors: ["[data-ncmp-cmd='reject']"]
      }, {
        id: "google-consent",
        find: () => document.querySelector(".fc-consent-root"),
        startSelectors: [".fc-cta-do-not-consent", ".fc-cta-manage-options"]
      }],
      BU = "PadOverThirdParty",
      OU = new Set(hU.map((bb => bb.id))),
      GU = () => {
        const bb = hU.map((bb => {
            let {
              id: ub,
              find: hb,
              startSelectors: Bb
            } = bb;
            return (0, uB.o)({
              id: ub,
              kind: "popup",
              getRoot: () => {
                const bb = hb(),
                  ub = bb ? ((bb, ub) => {
                    var hb;
                    for (const Bb of ub) {
                      const ub = bb.querySelector(Bb);
                      if (ub) return ub
                    }
                    return null !== (hb = [...bb.querySelectorAll("button")].find((bb => !bb.matches(".fc-cta-consent, [data-ncmp-cmd='save']")))) && void 0 !== hb ? hb : null
                  })(bb, Bb) : null;
                if (bb && ub && !ub.hasAttribute("data-pad-default-focus")) {
                  for (const ub of bb.querySelectorAll("[data-pad-default-focus]")) ub.removeAttribute("data-pad-default-focus");
                  for (const ub of bb.querySelectorAll("[data-pad-hint-bar-avoid]")) ub.removeAttribute("data-pad-hint-bar-avoid");
                  ub.setAttribute("data-pad-default-focus", ""), ((bb, ub) => {
                    let hb = bb;
                    for (let Bb = bb.parentElement; Bb && ub.contains(Bb) && !(Bb.getBoundingClientRect().height >= window.innerHeight / 2); Bb = Bb.parentElement) hb = Bb;
                    return hb
                  })(ub, bb).setAttribute("data-pad-hint-bar-avoid", "")
                }
                return bb
              },
              close: null,
              memoryKey: null
            })
          })),
          ub = document.documentElement,
          hb = Ub.g.onFrame((() => {
            const bb = (0, Zb.k)() ? SB() : null,
              hb = !!bb && (Bb = bb.layer, OU.has(Bb.id));
            var Bb;
            ub.classList.contains(BU) !== hb && ub.classList.toggle(BU, hb)
          }));
        return () => {
          for (const ub of bb) ub();
          hb(), ub.classList.remove(BU)
        }
      },
      UU = "PadLargePointer",
      LU = () => {
        (0, Nb.useEffect)((() => {
          const bb = (0, Ab.l)(document.body),
            ub = QB.install(),
            hb = cG.install(),
            Bb = GU();
          return () => {
            bb(), ub(), hb(), Bb()
          }
        }), []);
        const {
          largePointer: bb
        } = (0, wb.l)(), ub = (0, JG.r)() && bb;
        return (0, Nb.useEffect)((() => {
          if (ub) return document.documentElement.classList.add(UU), () => {
            document.documentElement.classList.remove(UU)
          }
        }), [ub]), (0, Lb.createPortal)((0, mb.jsxs)(mb.Fragment, {
          children: [(0, mb.jsx)(yG, {}), (0, mb.jsx)(QG, {}), (0, mb.jsx)(bU, {})]
        }), document.body)
      };
    var YU = hb(8517),
      SU = hb(8537),
      aU = hb(8522);
    hb(8546);
    const HU = (bb, ub) => {
        const [hb, Bb] = (0, Nb.useState)(!1), [Ob, Gb] = (0, Nb.useState)(null), Ub = (0, Nb.useRef)(null), Lb = (0, Nb.useCallback)((bb => {
          Ub.current = bb, Gb(bb)
        }), []), Yb = (0, Nb.useCallback)((() => {
          Bb(!1), Lb(null)
        }), [Lb]), ab = (0, Nb.useCallback)((() => {
          Bb(!0)
        }), []), Hb = (0, Nb.useCallback)(((bb, ub) => {
          Lb((0, aU.z)(bb, ub, Ub.current))
        }), [Lb]);
        (0, Nb.useLayoutEffect)((() => (ub(hb), (0, eG.z)(bb, hb), Sb.i.vp(eG.q), () => {
          ub(!1), (0, eG.z)(bb, !1), Sb.i.vp(eG.q)
        })), [hb, bb, ub]), (0, pO.h)("appManagerUpdated|activeInputDevice", (bb => {
          "gamepad" !== bb && Yb()
        })), (0, pO.h)("appManagerUpdated|gameState", (bb => {
          "inGame" !== bb && Yb()
        }));
        const wb = () => {
          (0, Yh.q)() && Yb()
        };
        return (0, pO.h)("appManagerUpdated|openEverythingMenuName", wb), (0, pO.h)("appManagerUpdated|openInGameMenuName", wb), {
          open: hb,
          picked: Ob,
          pickedRef: Ub,
          show: ab,
          aim: Hb,
          close: Yb
        }
      },
      wU = bb => {
        let {
          className: ub,
          slotCount: hb,
          picked: Bb,
          slotLabel: Ob,
          renderSlot: Gb,
          centre: Ub
        } = bb;
        const Lb = Array.from({
          length: hb
        }, ((bb, ub) => ub));
        return (0, mb.jsx)("div", {
          className: Mb()("EmoteWheelOverlay PadRadialWheel", ub),
          children: (0, mb.jsxs)("div", {
            className: "EmoteWheel",
            style: {
              width: 2 * aU.p + "rem",
              height: 2 * aU.p + "rem"
            },
            children: [(0, mb.jsxs)("svg", {
              className: "EmoteWheelSvg",
              viewBox: `0 0 ${aU.j} ${aU.j}`,
              children: [Lb.map((bb => (0, mb.jsx)("path", {
                d: (0, aU.q)(bb, hb, aU.d, aU.h, aU.i),
                className: Mb()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: bb === Bb
                }),
                "aria-label": Ob(bb)
              }, bb))), (0, mb.jsx)("circle", {
                className: "EmoteWheelOuterRing",
                cx: aU.d,
                cy: aU.d,
                r: aU.i
              }), (0, mb.jsx)("circle", {
                className: "EmoteWheelInnerRing",
                cx: aU.d,
                cy: aU.d,
                r: aU.h
              }), null !== Bb && (0, mb.jsx)("path", {
                className: "EmoteWheelWedgeOutline",
                d: (0, aU.q)(Bb, hb, aU.d, aU.h, aU.i)
              })]
            }), Lb.map((bb => {
              const ub = (0, aU.u)(bb, hb);
              return (0, mb.jsx)("div", {
                className: Mb()("PadRadialWheelSlot SmallTextBold", {
                  PadRadialWheelSlotPicked: bb === Bb
                }),
                style: {
                  left: `calc(50% + ${aU.b*Math.cos(ub)}rem)`,
                  top: `calc(50% + ${aU.b*Math.sin(ub)}rem)`
                },
                "aria-hidden": !0,
                children: Gb(bb)
              }, bb)
            })), (0, mb.jsx)("div", {
              className: "EmoteWheelHint SmallTextBold",
              children: Ub
            })]
          })
        })
      },
      ZU = SG.length,
      XU = () => {
        const {
          t: bb
        } = (0, Ob.K)(), ub = HU("chat", gh.p), hb = (0, Nb.useMemo)((() => SG.map((ub => bb(ub)))), [bb]);
        return (0, pO.h)(gh.l, (() => {
          ub.open || (0, YU.g)() || (0, SU.s)() || "inGame" !== Yb.d.get("gameState") || (0, Yh.q)() || !(0, xh.e)() || ub.show()
        })), (0, pO.h)(gh.e, (bb => {
          ub.open && ub.aim(bb, ZU)
        })), (0, pO.h)(gh.k, (() => {
          var bb;
          if (!ub.open) return;
          const Bb = ub.pickedRef.current;
          null !== Bb ? aG.claim(performance.now()) && (ub.close(), null === (bb = (0, xh.e)()) || void 0 === bb || bb.sendLine(hb[Bb])) : ub.close()
        })), (0, pO.h)(gh.g, ub.close), ub.open ? (0, mb.jsx)(wU, {
          className: "QuickChatWheel",
          slotCount: ZU,
          picked: ub.picked,
          slotLabel: bb => hb[bb],
          renderSlot: bb => hb[bb],
          centre: null !== ub.picked ? hb[ub.picked] : bb("controller:quickChatPick")
        }) : null
      },
      pU = () => {
        const {
          t: bb
        } = (0, Ob.K)(), ub = HU("actionButton", SU.t), [hb, Bb] = (0, Nb.useState)([]);
        if ((0, pO.h)(SU.l, (bb => {
            ub.open || (0, YU.g)() || (0, gh.c)() || "inGame" !== Yb.d.get("gameState") || (0, Yh.q)() || (Bb(bb), ub.show())
          })), (0, pO.h)(SU.e, (bb => {
            ub.open && ub.aim(bb, hb.length)
          })), (0, pO.h)(SU.k, (() => {
            if (!ub.open) return;
            const bb = ub.pickedRef.current;
            ub.close(), null !== bb && Sb.i.vp(SU.o, hb[bb])
          })), (0, pO.h)(SU.i, ub.close), !ub.open) return null;
        const Gb = null !== ub.picked ? hb[ub.picked] : null;
        return (0, mb.jsx)(wU, {
          className: "ActionWheel",
          slotCount: hb.length,
          picked: ub.picked,
          slotLabel: ub => {
            const Bb = hb[ub];
            return "reload" === Bb.kind ? bb("controller:gameplayReload") : "customButton" === Bb.kind ? Bb.description || Bb.icon : "touchButton" === Bb.kind && "string" === typeof Bb.label ? Bb.label : ""
          },
          renderSlot: bb => (0, mb.jsx)(rO, {
            action: hb[bb]
          }),
          centre: Gb ? (0, mb.jsx)(rO, {
            action: Gb
          }) : bb("controller:actionWheelPick")
        })
      };
    var oU = hb(86);
    const AU = () => ((0, Nb.useEffect)((() => {
        var bb, ub;
        const hb = (0, Ab.l)(document.getElementById("root")),
          Bb = (0, Zb.g)(),
          Ob = (() => {
            const bb = [Sb.i.subscribe(bO.d, (() => {
                OO("blockBreak")
              })), Sb.i.subscribe("damagedByOtherPlayer", (() => {
                OO("damage")
              })), Sb.i.subscribe("yourAttackHit", (bb => {
                let {
                  hitSelf: ub
                } = bb;
                ub || OO("hit")
              }))],
              ub = Ub.g.onActivePadChanged((bb => {
                bb && OO("connect")
              }));
            return () => {
              for (const ub of bb) Sb.i.unsubscribe(ub);
              ub()
            }
          })(),
          Gb = (() => {
            const bb = new aO({
              getVisitId: SO.b,
              peekVisitId: SO.peekVisitSessionId,
              readReportedVisitId: () => {
                const bb = YO.m.getItem(HO);
                return "string" === typeof bb ? bb : null
              },
              writeReportedVisitId: bb => {
                YO.m.setItem(HO, bb)
              },
              isPadActive: Zb.k,
              getPadFamily: () => {
                var bb, ub;
                return null !== (bb = null === (ub = Ub.g.getActivePad()) || void 0 === ub ? void 0 : ub.family) && void 0 !== bb ? bb : null
              },
              canReport: UO.h,
              getInputType: LO.b,
              iZ: UO.l
            });
            let ub = 0,
              hb = null;
            const Bb = Ob => {
                null === hb && ("notReady" !== bb.check(Ob) || null !== hb || ub >= 20 || (ub++, hb = setTimeout((() => {
                  hb = null, Bb(!1)
                }), 3e3)))
              },
              Ob = Sb.i.subscribe("appManagerUpdated|activeInputDevice", (() => {
                Bb(!0)
              })),
              Gb = (0, SO.e)((() => {
                ub = 0, Bb(!0)
              }));
            return () => {
              Sb.i.unsubscribe(Ob), Gb(), null !== hb && clearTimeout(hb)
            }
          })(),
          Lb = Ub.g.onFrame(((bb, ub) => {
            const hb = (0, Zb.n)(bb);
            Hb.c.dispatch(bb, ub, hb)
          }));
        let ab = null !== (bb = null === (ub = Ub.g.getActivePad()) || void 0 === ub ? void 0 : ub.family) && void 0 !== bb ? bb : null;
        const Xb = Ub.g.onActivePadChanged((bb => {
            var ub, hb;
            (Hb.c.reset(), (0, Zb.p)(), Sb.i.vp(Ub.c, bb), (null !== (ub = null === bb || void 0 === bb ? void 0 : bb.family) && void 0 !== ub ? ub : null) !== ab) && (ab = null !== (hb = null === bb || void 0 === bb ? void 0 : bb.family) && void 0 !== hb ? hb : null, Sb.i.vp(wb.c, (0, wb.e)()));
            !bb && (0, Zb.k)() && (0, Zb.q)(Yb.d.get("isTouchScreen") ? "touch" : "keyboardMouse")
          })),
          pb = () => {
            "visible" !== document.visibilityState && Hb.c.clear()
          },
          ob = () => {
            Hb.c.clear()
          };
        document.addEventListener("visibilitychange", pb), window.addEventListener("blur", ob), Ub.g.start(), (0, GO.k)();
        const lb = null;
        return () => {
          hb(), Bb(), Ob(), Gb(), Lb(), Xb(), document.removeEventListener("visibilitychange", pb), window.removeEventListener("blur", ob), Ub.g.stop(), null === lb || void 0 === lb || lb()
        }
      }), []), (0, mb.jsxs)("div", {
        className: "ControllerRoot",
        children: [(0, mb.jsx)(iO, {}), (0, mb.jsx)(IO, {}), (0, mb.jsx)(PO, {}), (0, mb.jsx)(vG, {}), (0, mb.jsx)(LU, {}), (0, mb.jsx)(XU, {}), (0, mb.jsx)(pU, {})]
      })),
      lU = () => oU.featureFlags.useControllerSupport ? (0, mb.jsx)(AU, {}) : null;
    var KU = hb(7859),
      WU = hb(8551);
    const CU = new Set(GO.g),
      dU = bb => `${WU.q}${(0,wb.f)()}/${bb}`,
      rU = bb => {
        if (!(0, WU.p)(bb)) return null;
        const [ub, hb] = bb.slice(WU.q.length).split("/");
        return (0, KU.d)(ub) && CU.has(hb) ? (0, GO.f)(ub, hb) : null
      };
    var jU = hb(8558);
    const nU = () => {
        const {
          t: bb
        } = (0, Ob.K)(), ub = (0, Zb.t)(), {
          gameState: hb,
          isUiHidden: Bb
        } = (0, Yb.j)(["gameState", "isUiHidden"]), {
          hideButtonHints: Gb,
          sneakMode: Ub
        } = (0, wb.l)(), [Lb, Sb] = (0, Nb.useState)(jU.e);
        return (0, pO.h)(gO.r, Sb), ub && !Bb && "inGame" === hb && Lb ? (0, mb.jsxs)("div", {
          className: "PadSneakChip SmallTextBold",
          children: [!Gb && (0, mb.jsx)(CO, {
            glyph: (0, ab.f)("toggle" === Ub ? "sneak" : "sneakToggle")
          }), (0, mb.jsx)("span", {
            children: bb("controller:gameplaySneaking")
          })]
        }) : null
      },
      DU = 12,
      xU = bb => {
        let {
          trigger: ub,
          className: hb,
          children: Bb
        } = bb;
        const Ob = (0, Nb.useRef)(null);
        return (0, Nb.useEffect)((() => {
          let bb = 0;
          const hb = xb(ub, "y"),
            Bb = () => {
              bb = requestAnimationFrame(Bb);
              const Gb = Ob.current;
              if (!Gb || null === ub || void 0 === ub || !ub.isConnected) return;
              const {
                left: Ub,
                top: Lb
              } = function(bb, ub, hb) {
                let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                const Gb = bb.left + bb.width / 2,
                  Ub = Math.max(DU, hb.width - DU - ub.width),
                  Lb = Math.min(Math.max(Gb - ub.width / 2, DU), Ub),
                  Yb = hb.height - Bb;
                let Sb = 0,
                  ab = Yb;
                if (Ob) {
                  const bb = Math.max(0, Ob.top),
                    Bb = Math.min(Yb, Ob.bottom);
                  Bb - bb >= Math.max(hb.height / 2, ub.height + 24) && (Sb = bb, ab = Bb)
                }
                const Hb = bb.top + bb.height / 2 < (Sb + ab) / 2 ? ab - DU - ub.height : Sb + DU;
                return {
                  left: Lb,
                  top: Math.max(DU, Hb)
                }
              }(ub.getBoundingClientRect(), {
                width: Gb.offsetWidth,
                height: Gb.offsetHeight
              }, {
                width: window.innerWidth,
                height: window.innerHeight
              }, parseFloat(document.documentElement.style.getPropertyValue(mG)) || 0, null !== hb && void 0 !== hb && hb.isConnected ? hb.getBoundingClientRect() : null);
              Gb.style.transform = `translate3d(${Math.round(Ub)}px, ${Math.round(Lb)}px, 0)`, Gb.style.visibility = "visible"
            };
          return Bb(), () => {
            cancelAnimationFrame(bb)
          }
        }), [ub]), (0, mb.jsx)("div", {
          ref: Ob,
          className: hb,
          style: {
            position: "fixed",
            left: 0,
            top: 0,
            visibility: "hidden"
          },
          children: Bb
        })
      };
    var zU = hb(966),
      gU = hb(8567),
      iU = hb(1357),
      vU = hb(8575),
      tU = hb(8581);
    const JU = {
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
      eU = () => {
        const {
          t: bb
        } = (0, Ob.K)(), ub = (0, Zb.t)(), hb = (0, gU.c)(), Bb = (0, sO.f)("_tasks"), Gb = (0, sO.f)("_availableLeaderboards");
        if (!ub) return null;
        const Ub = (bb => {
          let {
            hasShop: ub,
            hasTasksOrLeaderboards: hb,
            canInvite: Bb
          } = bb;
          const Ob = [];
          return ub && Ob.push("shop"), hb && Ob.push("tasks"), Bb && Ob.push("invite"), Ob.push("leave"), Ob
        })({
          hasShop: hb,
          hasTasksOrLeaderboards: !(!Bb && !Gb),
          canInvite: !!oU.featureFlags.canUseInviteLinks
        });
        return (0, mb.jsx)("div", {
          className: "PadLobbyShortcuts",
          children: Ub.map((ub => {
            const {
              icon: hb,
              labelKey: Bb
            } = JU[ub], Ob = "leave" === ub ? iU.H : iU.e;
            return (0, mb.jsx)(Ob, {
              className: "PadLobbyShortcut",
              onClick: () => {
                (bb => {
                  switch (bb) {
                    case "shop":
                      return Sb.i.vp(tU.l), void Yb.d.set({
                        openEverythingMenuName: Lh.u.SHOP
                      });
                    case "tasks":
                      return void Sb.i.vp("toggleMenu", "retentionFeatures");
                    case "invite":
                      return void Sb.i.vp("toggleMenu", "inviteLink");
                    case "leave":
                      (0, vU.c)()
                  }
                })(ub)
              },
              children: (0, mb.jsxs)("div", {
                className: "PadLobbyShortcutInner",
                children: [(0, mb.jsx)(zU.e, {
                  name: hb
                }), (0, mb.jsx)("span", {
                  children: bb(Bb)
                })]
              })
            }, ub)
          }))
        })
      };
    var NU = hb(1874);
    const sU = Xb.x,
      MU = ["forward", "backward", "left", "right", "sprint"],
      mU = bb => bb.ctrlKey || bb.altKey || "Alt" === bb.key || "ArrowUp" === bb.key || "ArrowDown" === bb.key || "Tab" === bb.code || "/" === bb.key || "Slash" === bb.code;
    class IU {
      constructor() {
        this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(Xb.U).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
      }
      setArmed(bb) {
        this.armed = bb
      }
      blocksGameplay() {
        return this.armed || this.consumeNextFrame
      }
      onKeyDown(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !this.armed || ub ? !bb.repeat && this.swallowedKeys.delete(bb.code) ? {
          swallow: !1,
          continues: !1
        } : {
          swallow: this.swallowedKeys.has(bb.code),
          continues: !1
        } : "Escape" === bb.key || bb.repeat && !this.swallowedKeys.has(bb.code) ? {
          swallow: !1,
          continues: !1
        } : hb ? {
          swallow: !1,
          continues: !0
        } : (this.swallowedKeys.add(bb.code), {
          swallow: !0,
          continues: (0, Zb.i)(bb)
        })
      }
      onKeyUp(bb) {
        return this.swallowedKeys.delete(bb.code)
      }
      forgetKeys() {
        this.swallowedKeys.clear()
      }
      onPadFrame(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Bb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Ob = (0, Xb.s)(bb.values, this.previousHeld),
          Gb = null === hb ? -1 : (0, Xb.l)(hb),
          Ub = Gb >= 0 && Ob[Gb] && !this.previousHeld[Gb],
          Lb = Ob.some(((bb, ub) => bb && !this.previousHeld[ub] && ub !== Gb)),
          Yb = Math.hypot(bb.leftStick.x, bb.leftStick.y) >= sU,
          Sb = Math.hypot(bb.rightStick.x, bb.rightStick.y) >= sU,
          ab = Yb && !this.leftStickWasPressed || Sb && !this.rightStickWasPressed;
        this.previousHeld = Ob, this.leftStickWasPressed = Yb, this.rightStickWasPressed = Sb;
        let Hb = !1;
        this.consumeNextFrame && (this.consumeNextFrame = !1, Hb = !0);
        const wb = !ub && Ub && !Bb,
          Zb = !wb && this.armed && !ub && (Lb || ab);
        return (wb || Zb) && (this.consumeNextFrame = !0, this.consumeAfterContinue = Zb, Hb = !0), {
          continues: Zb,
          back: wb,
          consumeHeld: Hb
        }
      }
      consumeLeavesMoveStick() {
        return this.consumeAfterContinue
      }
    }
    const PU = new Set([...NU.k, ...NU.w]),
      qU = bb => ((bb, ub, hb) => {
        const Bb = Object.keys(ub).filter((Bb => !hb.has(Bb) && ub[Bb].includes(bb)));
        return Bb.length > 0 && Bb.every((bb => MU.includes(bb)))
      })(bb, NU.r, PU),
      EU = (bb, ub, hb) => {
        const Bb = new IU,
          Ob = bb => {
            if (!bb.isTrusted) return;
            const {
              swallow: hb,
              continues: Ob
            } = Bb.onKeyDown(bb, !(0, Zb.x)(bb) || (0, RB.g)() || (0, Yh.q)(), qU(bb.code));
            hb && (bb.stopImmediatePropagation(), mU(bb) && bb.preventDefault()), Ob && ((0, Zb.q)("keyboardMouse"), ub())
          },
          Gb = bb => {
            bb.isTrusted && Bb.onKeyUp(bb) && (bb.stopImmediatePropagation(), mU(bb) && bb.preventDefault())
          },
          Lb = () => {
            Bb.forgetKeys()
          };
        window.addEventListener("keydown", Ob, !0), window.addEventListener("keyup", Gb, !0), window.addEventListener("blur", Lb);
        const Yb = Ub.g.onFrame((bb => {
            const Ob = Hb.c.getActiveConsumerName(),
              Gb = hb(),
              Ub = Gb ? (0, ab.f)("menuBack") : null,
              Lb = null !== Ob && "gameplay" !== Ob,
              {
                continues: Yb,
                back: Sb,
                consumeHeld: Xb
              } = Bb.onPadFrame(bb, Lb, Ub, (0, Zb.l)(bb));
            if (Xb) {
              const bb = (0, wb.e)().swapSticks ? "right" : "left";
              Hb.c.consumeAllHeld(Bb.consumeLeavesMoveStick() ? bb : null)
            }
            Sb ? null === Gb || void 0 === Gb || Gb() : Yb && ub()
          })),
          Sb = (0, RB.i)(`pressToContinue:${bb}`, (() => Bb.blocksGameplay()));
        return {
          setArmed: bb => {
            Bb.setArmed(bb)
          },
          dispose: () => {
            window.removeEventListener("keydown", Ob, !0), window.removeEventListener("keyup", Gb, !0), window.removeEventListener("blur", Lb), Yb(), Sb()
          }
        }
      };
    var yU = hb(4765),
      VU = hb(3208),
      FU = hb(2925),
      fU = hb(7867);
    const kU = bb => {
        let {
          text: ub
        } = bb;
        return (0, mb.jsx)("div", {
          className: "ControllerSettingsHeading",
          children: ub
        })
      },
      TU = bb => {
        let {
          label: ub,
          hint: hb,
          options: Bb,
          value: Gb,
          onChange: Ub
        } = bb;
        const {
          t: Lb
        } = (0, Ob.K)();
        return (0, mb.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, mb.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: [(0, mb.jsxs)("div", {
              className: "ControllerChoiceText",
              children: [(0, mb.jsx)("div", {
                className: "SliderText",
                children: ub
              }), hb && (0, mb.jsx)("div", {
                className: "ControllerSettingsHint",
                children: hb
              })]
            }), (0, mb.jsx)(FU.b, {
              options: Bb.map((bb => ({
                label: "label" in bb ? bb.label : Lb(bb.labelKey),
                value: bb.value
              }))),
              value: Gb,
              onChange: bb => {
                Ub(bb.value)
              }
            })]
          })
        })
      },
      cU = bb => {
        let {
          settingKey: ub,
          label: hb,
          range: Bb,
          format: Ob
        } = bb;
        const Gb = (0, wb.l)();
        return (0, mb.jsx)(yU.h, {
          name: hb,
          min: Bb.min,
          max: Bb.max,
          step: Bb.step,
          padStep: Bb.step,
          initValue: Gb[ub],
          format: Ob,
          onChange: bb => {
            (0, wb.i)({
              [ub]: (0, fU.t)(bb, Bb)
            })
          }
        })
      };
    var QU = hb(8589),
      RU = hb(8591);
    const bL = bb => bb instanceof DOMException && ("SecurityError" === bb.name || "NotAllowedError" === bb.name),
      uL = bb => {
        const [ub] = [...bb.controllers].sort(((bb, ub) => RU.m[bb] - RU.m[ub]));
        return RU.l[ub]
      },
      hL = bb => {
        (0, QU.d)().allowPhoneMotion().catch((ub => {
          bb && bL(ub) ? bb() : console.warn("Could not enable the motion sensor", ub)
        }))
      },
      BL = {
        waiting: "controller:settingsGyroPhoneWaiting",
        noSensor: "controller:settingsGyroPhoneNoSensor",
        on: "controller:settingsGyroPhoneOn",
        denied: "controller:settingsGyroPhoneDenied"
      },
      OL = bb => {
        let {
          status: ub
        } = bb;
        const {
          t: hb
        } = (0, Ob.K)(), [Bb, Gb] = (0, Nb.useState)(null), Ub = `${ub.controllers.join(",")}|${ub.phoneMotion}`;
        (0, Nb.useEffect)((() => {
          Gb(null)
        }), [Ub]);
        const Lb = () => {
          (0, QU.d)().connectController().then((bb => {
            Gb(bb > 0 ? "openFailed" : null)
          })).catch((bb => {
            bL(bb) ? Gb("needsClick") : console.warn("Could not connect motion controller", bb)
          }))
        };
        if (ub.hidSupported) {
          let bb = hb("controller:settingsGyroConnectHint");
          return "needsClick" === Bb ? bb = hb("controller:settingsGyroConnectNeedsClick") : "openFailed" === Bb ? bb = hb("controller:settingsGyroOpenFailed") : ub.controllers.length > 0 && (bb = hb("controller:settingsGyroConnected", {
            name: uL(ub)
          })), (0, mb.jsx)("div", {
            className: "SettingBox ControllerChoiceSetting",
            children: (0, mb.jsxs)("div", {
              className: "ControllerChoiceRow",
              children: [(0, mb.jsx)("div", {
                className: "ControllerSettingsHint",
                children: bb
              }), (0, mb.jsx)(iU.e, {
                onClick: Lb,
                children: hb("controller:settingsGyroConnect")
              })]
            })
          })
        }
        if ("needsPermission" === ub.phoneMotion) return (0, mb.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, mb.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: ["needsTap" === Bb && (0, mb.jsx)("div", {
              className: "ControllerSettingsHint",
              children: hb("controller:settingsGyroAllowNeedsTap")
            }), (0, mb.jsx)(iU.e, {
              onClick: () => {
                hL((() => {
                  Gb("needsTap")
                }))
              },
              children: hb("controller:settingsGyroAllowMotion")
            })]
          })
        });
        const Yb = BL[ub.phoneMotion];
        return Yb ? (0, mb.jsx)("div", {
          className: "ControllerSettingsHint",
          children: hb(Yb)
        }) : null
      },
      GL = () => {
        const {
          t: bb
        } = (0, Ob.K)(), ub = (0, wb.l)(), hb = (0, QU.g)(), Bb = (0, Zb.u)(), Gb = !hb.hidSupported && hb.phoneSupported && !hb.padConnected, Ub = (hb.hidSupported || hb.phoneSupported) && !Gb, Lb = (0, ab.f)("pause");
        return (0, mb.jsxs)(mb.Fragment, {
          children: [(0, mb.jsx)(kU, {
            text: bb("controller:settingsGyro")
          }), Gb && (0, mb.jsx)("div", {
            className: "ControllerSettingsHint",
            children: bb("controller:settingsGyroPhoneNeedsController")
          }), !Ub && !Gb && (0, mb.jsx)("div", {
            className: "ControllerSettingsHint",
            children: bb(hb.hidBlocked || hb.phoneBlocked ? "controller:settingsGyroBlocked" : "controller:settingsGyroUnsupported")
          }), Ub && (0, mb.jsx)(yU.c, {
            label: bb(hb.hidSupported ? "controller:settingsGyroToggle" : "controller:settingsGyroTogglePhone"),
            checked: ub.gyroAiming,
            onClick: bb => {
              var ub, hb;
              (0, wb.i)({
                gyroAiming: bb
              });
              const Bb = null === (ub = null === (hb = navigator.userActivation) || void 0 === hb ? void 0 : hb.isActive) || void 0 === ub || ub;
              if (!bb || !Bb) return;
              const Ob = (0, QU.d)(),
                Gb = Ob.getStatus();
              Gb.hidSupported ? Ob.connectControllerIfNoneGranted().catch((bb => {
                console.warn("Motion controller picker unavailable", bb)
              })) : "needsPermission" === Gb.phoneMotion && hL()
            },
            circleInfoText: bb(hb.hidSupported ? "controller:settingsGyroToggleInfo" : "controller:settingsGyroToggleInfoPhone")
          }), Ub && hb.hidSupported && (0, mb.jsx)("div", {
            className: "ControllerSettingsHint",
            children: bb("controller:settingsGyroSteamHint")
          }), Ub && ub.gyroAiming && (0, mb.jsxs)(mb.Fragment, {
            children: [(0, mb.jsx)(OL, {
              status: hb
            }), (0, mb.jsx)(cU, {
              settingKey: "gyroSensitivity",
              label: bb("controller:settingsGyroSensitivity"),
              range: fU.O,
              format: fU.G
            }), (0, mb.jsx)(TU, {
              label: bb("controller:settingsGyroActivation"),
              hint: "aiming" === ub.gyroActivation && (0, mb.jsx)(VU.b, {
                text: bb("controller:settingsGyroAimingHint", {
                  button: VU.f
                }),
                glyph: (0, ab.f)("use")
              }),
              options: fU.K,
              value: ub.gyroActivation,
              onChange: bb => {
                (0, wb.i)({
                  gyroActivation: bb
                })
              }
            }), "button" === ub.gyroActivation && (0, mb.jsx)(TU, {
              label: bb("controller:settingsGyroButton"),
              hint: bb("controller:settingsGyroButtonHint"),
              options: fU.m.filter((bb => bb !== Lb || bb === ub.gyroButton)).map((bb => ({
                label: WO(Bb, bb),
                value: bb
              }))),
              value: ub.gyroButton,
              onChange: bb => {
                (0, wb.i)({
                  gyroButton: bb
                })
              }
            })]
          })]
        })
      };
    var UL = hb(1746);
    const LL = () => {
      const {
        t: bb
      } = (0, Ob.K)(), ub = (0, wb.l)(), hb = (0, Zb.u)();
      return (0, mb.jsxs)(mb.Fragment, {
        children: [(0, mb.jsx)(kU, {
          text: bb("controller:settingsAccessibility")
        }), (0, mb.jsx)(yU.c, {
          label: bb("controller:settingsSwapConfirmBack"),
          checked: (0, ab.I)(ub.swapConfirmBack, hb),
          onClick: bb => {
            (0, wb.i)({
              swapConfirmBack: bb === (0, ab.I)(null, hb) ? null : bb
            }), UL.f.showMessage({
              translationKey: "controller:settingsSwapToast"
            })
          },
          circleInfoText: bb("controller:settingsSwapConfirmBackInfo")
        }), (0, mb.jsx)(TU, {
          label: bb("controller:settingsButtonRepeat"),
          hint: bb("controller:settingsButtonRepeatHint"),
          options: fU.k,
          value: ub.buttonRepeat,
          onChange: bb => {
            (0, wb.i)({
              buttonRepeat: bb
            })
          }
        }), (0, mb.jsx)(TU, {
          label: bb("controller:settingsTapHoldTime"),
          hint: bb("controller:settingsTapHoldTimeHint"),
          options: fU.kb,
          value: ub.tapHoldTime,
          onChange: bb => {
            (0, wb.i)({
              tapHoldTime: bb
            })
          }
        }), (0, mb.jsx)(TU, {
          label: bb("controller:settingsEmoteButton"),
          hint: bb("wheel" === ub.emoteButton ? "controller:settingsEmoteButtonWheelHint" : "controller:settingsEmoteButtonTapHoldHint"),
          options: fU.z,
          value: ub.emoteButton,
          onChange: bb => {
            (0, wb.i)({
              emoteButton: bb
            })
          }
        }), (0, mb.jsx)(TU, {
          label: bb("controller:settingsAttackMode"),
          hint: bb("toggle" === ub.attackMode ? "controller:settingsAttackToggleHint" : "controller:settingsAttackHoldHint"),
          options: fU.j,
          value: ub.attackMode,
          onChange: bb => {
            (0, wb.i)({
              attackMode: bb
            })
          }
        }), (0, mb.jsx)(yU.c, {
          label: bb("controller:settingsLargePointer"),
          checked: ub.largePointer,
          onClick: bb => {
            (0, wb.i)({
              largePointer: bb
            })
          },
          circleInfoText: bb("controller:settingsLargePointerInfo")
        })]
      })
    };
    var YL = hb(8599);
    const SL = new class {
        constructor(bb) {
          this.router = bb, this.current = null
        }
        claim(bb, ub) {
          const hb = this.current;
          hb && (this.current = null, hb.release(), hb.onTakenOver());
          const Bb = this.router.register({
              ...bb,
              name: "capture"
            }),
            Ob = {
              release: Bb,
              onTakenOver: ub
            };
          return this.current = Ob, () => {
            this.current === Ob && (this.current = null), Bb()
          }
        }
      }(Hb.c),
      aL = bb => {
        (0, Nb.useEffect)((() => {
          if (!bb) return;
          const ub = bb();
          let hb = !1;
          const Bb = () => {
              hb || (hb = !0, ub.onEnd())
            },
            Ob = SL.claim({
              isActive: () => !hb,
              onFrame: bb => {
                ub.onFrame(bb, Bb)
              }
            }, Bb),
            Gb = void 0 === ub.timeoutMs ? void 0 : window.setTimeout(Bb, ub.timeoutMs),
            Ub = bb => {
              "Escape" === bb.key && (bb.preventDefault(), bb.stopPropagation(), Bb())
            };
          return window.addEventListener("keydown", Ub, !0), () => {
            hb = !0, Ob(), window.clearTimeout(Gb), window.removeEventListener("keydown", Ub, !0)
          }
        }), [bb])
      },
      HL = bb => {
        let {
          row: ub,
          capturing: hb,
          onCapture: Bb,
          holdFillRef: Gb,
          onRebind: Ub,
          swapped: Lb
        } = bb;
        const {
          t: Yb
        } = (0, Ob.K)();
        if ("fixed" === ub.kind) return (0, mb.jsx)("div", {
          className: "ControlRow PadControlRow PadControlRowFixed",
          children: (0, mb.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, mb.jsx)("div", {
              className: "ControlName",
              children: Yb(ub.labelKey)
            }), (0, mb.jsx)("div", {
              className: "ControlBindingsContainer",
              children: (0, mb.jsx)("div", {
                className: "ControlBindingsList",
                children: (0, mb.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  children: (0, mb.jsx)(CO, {
                    glyph: "move" === ub.stick ? (0, ab.o)() : (0, ab.k)()
                  })
                })
              })
            })]
          })
        });
        const {
          action: Sb
        } = ub, Hb = (0, ab.f)(Sb), wb = (0, ab.g)(Sb), Zb = Hb !== wb && (0, ab.c)(Sb, wb);
        return (0, mb.jsxs)("div", {
          className: Mb()("ControlRow PadControlRow", {
            Capturing: hb
          }),
          children: [(0, mb.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, mb.jsx)("div", {
              className: "ControlName",
              children: Yb(fU.g[Sb])
            }), (0, mb.jsxs)("div", {
              className: "ControlBindingsContainer",
              children: [!hb && (0, mb.jsxs)("div", {
                className: "ControlBindingsList",
                children: [(0, mb.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Bb(Sb)
                  },
                  children: (0, mb.jsx)(CO, {
                    glyph: Hb
                  })
                }), Zb && (0, mb.jsx)("div", {
                  className: "ControlBinding PadBindingReset",
                  title: Yb("controller:settingsReset"),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Ub(Sb, wb)
                  },
                  children: (0, mb.jsx)(zU.e, {
                    name: "arrows-rotate"
                  })
                })]
              }), hb && (0, mb.jsxs)("div", {
                className: "ControlBindingAddInput",
                children: [(0, mb.jsxs)("div", {
                  className: "PadCaptureBox",
                  children: [(0, mb.jsx)("span", {
                    children: Yb("controller:settingsCapturePrompt")
                  }), (0, mb.jsx)("div", {
                    ref: Gb,
                    className: "PadCaptureHoldFill"
                  })]
                }), (0, mb.jsx)("div", {
                  className: "ControlBindingAddCancel",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Bb(null)
                  },
                  children: "\xd7"
                })]
              }), hb && (0, mb.jsx)("div", {
                className: "PadCaptureHint",
                children: (0, mb.jsx)(VU.b, {
                  text: Yb((0, ab.c)(Sb, (0, ab.f)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
                    button: VU.f
                  }),
                  glyph: (0, ab.f)("menuBack")
                })
              })]
            })]
          }), Lb.map((bb => (0, mb.jsx)("div", {
            className: "ControlRowWarning PadSwapNotice",
            children: (0, mb.jsx)(VU.b, {
              text: Yb("controller:settingsSwapNotice", {
                action: Yb(fU.g[bb]),
                button: VU.f
              }),
              glyph: (0, ab.f)(bb)
            })
          }, bb))), hb && (0, mb.jsx)("div", {
            className: "PadCaptureTimer",
            style: {
              animationDuration: `${fU.q}ms`
            }
          })]
        })
      },
      wL = [],
      ZL = bb => {
        let {
          layoutSetting: ub
        } = bb;
        const {
          t: hb
        } = (0, Ob.K)(), Bb = (0, wb.l)();
        (0, Zb.u)();
        const Gb = (0, Nb.useRef)(null),
          [Ub, Lb] = (0, Nb.useState)(null),
          Yb = (0, Nb.useCallback)(((bb, ub) => {
            const hb = (0, wb.e)().bindings;
            (0, ab.C)(bb, ub);
            const Bb = (0, ab.s)(hb, bb);
            Lb(Bb.length > 0 ? {
              action: bb,
              swapped: Bb
            } : null)
          }), []),
          [Sb, pb] = ((bb, ub) => {
            const [hb, Bb] = (0, Nb.useState)(null), Ob = (0, Nb.useMemo)((() => hb ? () => {
              const Ob = (0, ab.f)("menuBack"),
                Gb = new fU.b(Ob, (0, ab.f)("menuConfirm"), (bb => (0, ab.c)(hb, bb)));
              return {
                onFrame: (Bb, Ub) => {
                  var Lb;
                  const Yb = Bb.frame.timestampMs,
                    Sb = Gb.update({
                      ...Bb,
                      isDown: bb => (0, Xb.L)(Bb.frame.values, bb)
                    }, Yb);
                  null === (Lb = bb.current) || void 0 === Lb || Lb.style.setProperty("width", 100 * Gb.getBindHoldProgress(Yb) + "%"), Sb && ("bind" === Sb.kind ? (Hb.c.consumeButton(Sb.button), ub(hb, Sb.button)) : Hb.c.consumeButton(Ob), Ub())
                },
                onEnd: () => {
                  Bb(null)
                },
                timeoutMs: fU.q
              }
            } : null), [hb, bb, ub]);
            return aL(Ob), [hb, Bb]
          })(Gb, Yb),
          ob = bb => {
            bb && Lb(null), pb(bb)
          };
        (0, Nb.useEffect)((() => {
          if (!Ub) return;
          const bb = window.setTimeout((() => {
            Lb(null)
          }), fU.jb);
          return () => {
            window.clearTimeout(bb)
          }
        }), [Ub]);
        const Ab = !Bb.swapSticks && 0 === Object.keys(Bb.bindings).length;
        return (0, mb.jsxs)("div", {
          className: "ControlsContainer PadControlsContainer",
          children: [(0, mb.jsx)("div", {
            className: "SliderText",
            children: hb("controller:settingsRemap")
          }), (0, mb.jsx)("div", {
            className: "ControllerSettingsHint",
            children: hb("controller:settingsRemapHint")
          }), (0, mb.jsx)(iU.H, {
            className: "ResetBindingsButton PadResetAllButton",
            disabled: Ab,
            onClick: () => {
              ob(null), Lb(null), (0, ab.F)()
            },
            children: hb("controller:settingsResetAll")
          }), ub, fU.db.map(((bb, ub) => (0, mb.jsx)(YL.d, {
            title: hb(bb.titleKey),
            defaultOpen: 0 === ub,
            children: bb.rows.map((bb => (0, mb.jsx)(HL, {
              row: bb,
              capturing: "action" === bb.kind && bb.action === Sb,
              onCapture: ob,
              holdFillRef: Gb,
              onRebind: Yb,
              swapped: "action" === bb.kind && (null === Ub || void 0 === Ub ? void 0 : Ub.action) === bb.action ? Ub.swapped : wL
            }, "action" === bb.kind ? bb.action : bb.labelKey)))
          }, bb.titleKey)))]
        })
      },
      XL = bb => {
        let {
          deadzone: ub,
          dotRef: hb,
          labelKey: Bb
        } = bb;
        const {
          t: Gb
        } = (0, Ob.K)();
        return (0, mb.jsxs)("div", {
          className: "ControllerTesterStick",
          children: [(0, mb.jsxs)("div", {
            className: "ControllerTesterStickCircle",
            children: [(0, mb.jsx)("div", {
              className: "ControllerTesterDeadzone",
              style: {
                width: 100 * ub + "%",
                height: 100 * ub + "%"
              }
            }), (0, mb.jsx)("div", {
              ref: hb,
              className: "ControllerTesterDot"
            })]
          }), (0, mb.jsx)("div", {
            className: "ControllerTesterStickLabel",
            children: Gb(Bb)
          })]
        })
      },
      pL = (bb, ub, hb, Bb) => {
        var Ob;
        bb && (bb.style.left = 50 + 50 * Math.max(-1, Math.min(1, ub.x)) + "%", bb.style.top = 50 + 50 * Math.max(-1, Math.min(1, ub.y)) + "%", null === (Ob = bb.parentElement) || void 0 === Ob || Ob.classList.toggle("Active", Bb || Math.hypot(ub.x, ub.y) > hb))
      },
      oL = bb => {
        const ub = {
            deadzone: bb.moveDeadzone,
            labelKey: "controller:settingsActionMove"
          },
          hb = {
            deadzone: bb.lookDeadzone,
            labelKey: "controller:settingsActionLook"
          };
        return bb.swapSticks ? {
          left: hb,
          right: ub
        } : {
          left: ub,
          right: hb
        }
      },
      AL = () => {
        const {
          t: bb
        } = (0, Ob.K)(), ub = (() => {
          const [bb, ub] = (0, Nb.useState)((() => Ub.g.getActivePad()));
          return (0, pO.h)(Ub.c, (() => {
            ub(Ub.g.getActivePad())
          })), bb
        })(), hb = oL((0, wb.l)()), Bb = (0, Nb.useRef)(null), Gb = (0, Nb.useRef)(null), Lb = (0, Nb.useRef)([]), Yb = (0, Nb.useRef)(null), Sb = (0, Nb.useRef)(null), [Zb, pb] = (bb => {
          const [ub, hb] = (0, Nb.useState)(!1), Bb = (0, Nb.useMemo)((() => ub ? () => {
            const ub = (0, ab.f)("menuBack"),
              Bb = new fU.e;
            return {
              onFrame: (hb, Ob) => {
                var Gb;
                const Ub = Bb.update({
                  pressed: hb.wasPressed(ub),
                  MS: hb.isHeld(ub)
                }, hb.frame.timestampMs);
                null === (Gb = bb.current) || void 0 === Gb || Gb.style.setProperty("width", 100 * Ub + "%"), Ub >= 1 && (Hb.c.consumeButton(ub), Ob())
              },
              onEnd: () => {
                hb(!1)
              }
            }
          } : null), [ub, bb]);
          return aL(Bb), [ub, hb]
        })(Gb);
        (0, Nb.useEffect)((() => {
          const bb = bb => {
            for (const hb of Xb.X) {
              const ub = (0, Xb.l)(hb),
                Bb = Lb.current[ub];
              if (!Bb) continue;
              const Ob = bb.values[ub];
              Bb.classList.toggle("Pressed", Ob >= Xb.x), (0, Xb.M)(ub) && Bb.style.setProperty("--trigger-fill", `${Math.round(100*Ob)}%`)
            }
            const ub = oL((0, wb.e)());
            pL(Yb.current, bb.leftStick, ub.left.deadzone, bb.values[(0, Xb.l)("LS")] >= Xb.x), pL(Sb.current, bb.rightStick, ub.right.deadzone, bb.values[(0, Xb.l)("RS")] >= Xb.x)
          };
          return ub || bb((0, Xb.u)()), Ub.g.onFrame(bb)
        }), [ub]), (0, Nb.useEffect)((() => {
          ub || pb(!1)
        }), [ub, pb]), (0, Nb.useEffect)((() => {
          var bb;
          Zb && (null === (bb = Bb.current) || void 0 === bb || bb.scrollIntoView({
            block: "nearest"
          }))
        }), [Zb]);
        const ob = fU.ab.find((bb => bb.value === (null === ub || void 0 === ub ? void 0 : ub.family)));
        return (0, mb.jsxs)("div", {
          ref: Bb,
          className: Mb()("SettingBox ControllerTester", {
            Testing: Zb
          }),
          children: [(0, mb.jsxs)("div", {
            className: "ControllerTesterHeader",
            children: [(0, mb.jsxs)("div", {
              className: "ControllerTesterInfo",
              children: [ub && (0, mb.jsx)("div", {
                children: bb("controller:settingsTesterFamily", {
                  family: ob ? bb(ob.labelKey) : ub.family
                })
              }), ub && (0, mb.jsx)("div", {
                className: "ControllerTesterPadId",
                children: ub.id
              }), !ub && (0, mb.jsx)("div", {
                children: bb("controller:settingsTesterNoPad")
              })]
            }), (ub || Zb) && (0, mb.jsx)(iU.e, {
              className: "ControllerTesterToggle",
              onClick: () => {
                pb(!Zb)
              },
              children: bb(Zb ? "controller:settingsTesterStop" : "controller:settingsTesterStart")
            })]
          }), ub && !Zb && (0, mb.jsx)("div", {
            className: "ControllerSettingsHint",
            children: bb("controller:settingsTesterHint")
          }), Zb && (0, mb.jsxs)("div", {
            className: "ControllerTesterBanner",
            children: [(0, mb.jsx)(VU.b, {
              text: bb("controller:settingsTesterTesting", {
                button: VU.f
              }),
              glyph: (0, ab.f)("menuBack")
            }), (0, mb.jsx)("div", {
              ref: Gb,
              className: "ControllerTesterExitFill"
            })]
          }), (0, mb.jsxs)("div", {
            className: "ControllerTesterBody",
            children: [(0, mb.jsx)(XL, {
              deadzone: hb.left.deadzone,
              dotRef: Yb,
              labelKey: hb.left.labelKey
            }), (0, mb.jsx)("div", {
              className: "ControllerTesterButtons",
              children: Xb.X.map((bb => {
                const hb = (0, Xb.l)(bb);
                return (0, mb.jsx)("div", {
                  ref: bb => {
                    Lb.current[hb] = bb
                  },
                  className: (0, Xb.M)(hb) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
                  children: (0, mb.jsx)(CO, {
                    glyph: bb,
                    family: null === ub || void 0 === ub ? void 0 : ub.family
                  })
                }, bb)
              }))
            }), (0, mb.jsx)(XL, {
              deadzone: hb.right.deadzone,
              dotRef: Sb,
              labelKey: hb.right.labelKey
            })]
          })]
        })
      },
      lL = (0, Nb.memo)((function() {
        const {
          t: bb
        } = (0, Ob.K)(), ub = (0, wb.l)(), [hb, Bb] = (0, Nb.useState)(!1);
        return (0, Nb.useEffect)((() => {
          if (!hb) return;
          const bb = window.setTimeout((() => {
            Bb(!1)
          }), fU.jb);
          return () => {
            window.clearTimeout(bb)
          }
        }), [hb]), (0, mb.jsxs)("div", {
          className: "SettingsMenuRightInner ControllerCategory",
          children: [(0, mb.jsx)(kU, {
            text: bb("controller:settingsLook")
          }), (0, mb.jsx)(cU, {
            settingKey: "lookSensitivityX",
            label: bb("controller:settingsLookSensitivityX"),
            range: fU.gb,
            format: fU.H
          }), (0, mb.jsx)(cU, {
            settingKey: "lookSensitivityY",
            label: bb("controller:settingsLookSensitivityY"),
            range: fU.gb,
            format: fU.H
          }), (0, mb.jsx)(cU, {
            settingKey: "aimLookSensitivity",
            label: bb("controller:settingsAimLookSensitivity"),
            range: fU.i,
            format: fU.H
          }), (0, mb.jsx)(TU, {
            label: bb("controller:settingsLookCurve"),
            hint: bb("controller:settingsLookCurveHint"),
            options: fU.Y,
            value: ub.lookCurve,
            onChange: bb => {
              (0, wb.i)({
                lookCurve: bb
              })
            }
          }), (0, mb.jsx)(yU.c, {
            label: bb("controller:settingsInvertLookX"),
            checked: ub.invertLookX,
            onClick: bb => {
              (0, wb.i)({
                invertLookX: bb
              })
            }
          }), (0, mb.jsx)(yU.c, {
            label: bb("controller:settingsInvertLookY"),
            checked: ub.invertLookY,
            onClick: bb => {
              (0, wb.i)({
                invertLookY: bb
              })
            }
          }), (0, mb.jsx)(cU, {
            settingKey: "lookDeadzone",
            label: bb("controller:settingsLookDeadzone"),
            range: fU.y,
            format: fU.C
          }), (0, mb.jsx)(GL, {}), (0, mb.jsx)(kU, {
            text: bb("controller:settingsMovement")
          }), (0, mb.jsx)(cU, {
            settingKey: "moveDeadzone",
            label: bb("controller:settingsMoveDeadzone"),
            range: fU.y,
            format: fU.C
          }), (0, mb.jsx)(yU.c, {
            label: bb("controller:settingsAutoSprint"),
            checked: ub.autoSprint,
            onClick: bb => {
              (0, wb.i)({
                autoSprint: bb
              })
            },
            circleInfoText: bb("controller:settingsAutoSprintInfo")
          }), (0, mb.jsx)(TU, {
            label: bb("controller:settingsSneak"),
            options: fU.ib,
            value: ub.sneakMode,
            onChange: bb => {
              (0, wb.i)({
                sneakMode: bb
              })
            }
          }), (0, mb.jsx)(kU, {
            text: bb("controller:settingsButtons")
          }), (0, mb.jsx)(TU, {
            label: bb("controller:settingsPromptFamily"),
            options: fU.ab,
            value: ub.promptFamily,
            onChange: bb => {
              (0, wb.i)({
                promptFamily: bb
              })
            }
          }), (0, mb.jsx)(yU.c, {
            label: bb("controller:settingsHideButtonHints"),
            checked: ub.hideButtonHints,
            onClick: bb => {
              (0, wb.i)({
                hideButtonHints: bb
              })
            }
          }), (0, mb.jsx)(yU.c, {
            label: bb("controller:settingsVibration"),
            checked: ub.vibration,
            onClick: bb => {
              (0, wb.i)({
                vibration: bb
              }), bb && OO("preview")
            }
          }), (0, mb.jsx)(cU, {
            settingKey: "cursorSpeed",
            label: bb("controller:settingsCursorSpeed"),
            range: fU.w,
            format: fU.H
          }), (0, mb.jsx)(yU.c, {
            label: bb("controller:settingsCursorMagnetism"),
            checked: ub.cursorMagnetism,
            onClick: bb => {
              (0, wb.i)({
                cursorMagnetism: bb
              })
            }
          }), (0, mb.jsx)(yU.c, {
            label: bb("controller:settingsMenuBackToCategories"),
            checked: ub.menuBackToCategories,
            onClick: bb => {
              (0, wb.i)({
                menuBackToCategories: bb
              })
            }
          }), (0, mb.jsx)(ZL, {
            layoutSetting: (0, mb.jsxs)(mb.Fragment, {
              children: [ab.e.map((hb => (0, mb.jsx)(yU.c, {
                label: bb(fU.T[hb]),
                checked: (0, ab.A)(hb, ub),
                onClick: bb => {
                  Bb(!(0, ab.L)(hb, bb))
                }
              }, hb))), hb && (0, mb.jsx)("div", {
                className: "PadLayoutRefusedNotice",
                role: "status",
                children: bb("controller:settingsLayoutRefusedToast")
              })]
            })
          }), (0, mb.jsx)(LL, {}), (0, mb.jsx)(kU, {
            text: bb("controller:settingsAlternatives")
          }), (0, mb.jsx)("div", {
            className: "ControllerSettingsHint",
            children: bb("controller:settingsAlternativesHint")
          }), (0, mb.jsx)(TU, {
            label: bb("controller:settingsMenuNavigation"),
            hint: bb("controller:settingsMenuNavigationHint"),
            options: fU.$,
            value: ub.menuNavigation,
            onChange: bb => {
              (0, wb.i)({
                menuNavigation: bb
              })
            }
          }), (0, mb.jsx)(TU, {
            label: bb("controller:settingsInventoryNavigation"),
            hint: bb("controller:settingsInventoryNavigationHint"),
            options: fU.Q,
            value: ub.inventoryNavigation,
            onChange: bb => {
              (0, wb.i)({
                inventoryNavigation: bb
              })
            }
          }), (0, mb.jsx)(TU, {
            label: bb("controller:settingsQuickChat"),
            hint: bb("controller:settingsQuickChatHint"),
            options: fU.bb,
            value: ub.quickChat,
            onChange: bb => {
              (0, wb.i)({
                quickChat: bb
              })
            }
          }), (0, mb.jsx)(TU, {
            label: bb("controller:settingsLeaderboardButton"),
            hint: bb("controller:settingsLeaderboardButtonHint"),
            options: fU.X,
            value: ub.leaderboardButton,
            onChange: bb => {
              (0, wb.i)({
                leaderboardButton: bb
              })
            }
          }), (0, mb.jsx)(kU, {
            text: bb("controller:settingsTester")
          }), (0, mb.jsx)(AL, {})]
        })
      }));
    (0, Ob.c)(Bb);
    for (const rL of (0, Gb.s)()) rL.connected ? Ub.g.handleConnectionEvent(rL) : Ub.g.handleDisconnectionEvent(rL);
    const KL = () => null !== Ub.g.getActivePad(),
      WL = () => Oh.getState(),
      CL = () => Oh.isSteppingSlots(),
      dL = (bb, ub) => {
        const hb = QB.getFocused();
        QB.isActive() && hb && bb.contains(hb) && QB.setFocus(ub, {
          scroll: !1
        })
      }
  },
  7841: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Yb,
      h: () => Sb
    });
    var Bb = hb(1322),
      Ob = hb(1313);
    const Gb = {
        "054c": "playstation",
        "057e": "nintendo"
      },
      Ub = "28de",
      Lb = new Set(["1205"]),
      Yb = (bb, ub) => {
        const hb = (0, Bb.e)(bb);
        if ((null === hb || void 0 === hb ? void 0 : hb.vendor) === Ub) return Lb.has(hb.product) ? "steamdeck" : "xbox";
        if (hb && Gb[hb.vendor]) return Gb[hb.vendor];
        if ((0, Ob.d)(bb)) return "nintendo";
        const Yb = `${bb} ${null!==ub&&void 0!==ub?ub:""}`.toLowerCase();
        return /dualsense|dualshock|playstation|sony/.test(Yb) ? "playstation" : /nintendo|switch|joy-con|pro controller/.test(Yb) ? "nintendo" : /steam deck/.test(Yb) ? "steamdeck" : "xbox"
      },
      Sb = bb => {
        var ub;
        return (null === (ub = (0, Bb.e)(bb)) || void 0 === ub ? void 0 : ub.vendor) === Ub
      }
  },
  7882: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Sb,
      e: () => Lb
    });
    var Bb = hb(7836);
    const Ob = ["capture", "keyboard", "wheel", "inventory", "cursor", "focus", "gameplay"],
      Gb = new Set(["capture", "gameplay"]),
      Ub = ["Up", "Down", "Left", "Right"],
      Lb = bb => Ub.includes(bb),
      Yb = .25;
    const Sb = new class {
      constructor() {
        this.consumers = new Map, this.activeName = null, this.MS = new Array(Bb.U).fill(!1), this.previousHeld = new Array(Bb.U).fill(!1), this.consumedButtons = new Array(Bb.U).fill(!1), this.suppressedReleases = new Array(Bb.U).fill(!1), this.wakeOwned = new Array(Bb.U).fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.peek = null, this.lastFrame = (0, Bb.u)()
      }
      register(bb) {
        return this.consumers.has(bb.name) && console.warn(`Controller consumer "${bb.name}" registered twice; the newer one replaces it.`), this.consumers.set(bb.name, bb), () => {
          var ub;
          this.consumers.get(bb.name) === bb && (this.activeName === bb.name ? (this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()) : (null === (ub = this.peek) || void 0 === ub ? void 0 : ub.over) === bb.name && (this.peek = null), this.consumers.delete(bb.name))
        }
      }
      getActiveConsumerName() {
        return this.activeName
      }
      isButtonHeld(bb) {
        return this.MS[(0, Bb.l)(bb)]
      }
      getLastFrame() {
        return this.lastFrame
      }
      clear() {
        this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()
      }
      reset() {
        this.deactivateCurrent(), this.activeName = null, this.MS = new Array(Bb.U).fill(!1), this.previousHeld = new Array(Bb.U).fill(!1), this.consumedButtons.fill(!1), this.suppressedReleases.fill(!1), this.wakeOwned.fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.lastFrame = (0, Bb.u)()
      }
      dispatch(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.lastFrame = bb, this.previousHeld = this.MS, this.MS = (0, Bb.s)(bb.values, this.previousHeld);
        for (let Gb = 0; Gb < Bb.U; Gb++) this.suppressedReleases[Gb] = !this.MS[Gb] && this.consumedButtons[Gb], this.MS[Gb] || (this.consumedButtons[Gb] = !1), this.wakeOwned[Gb] && (this.MS[Gb] ? (this.consumedButtons[Gb] = !0, this.wakeOwned[Gb] = !1) : bb.values[Gb] < Bb.T && (this.wakeOwned[Gb] = !1));
        Math.hypot(bb.leftStick.x, bb.leftStick.y) < Yb && (this.leftStickConsumed = !1), Math.hypot(bb.rightStick.x, bb.rightStick.y) < Yb && (this.rightStickConsumed = !1);
        const Ob = this.pickActive();
        if ((null === Ob || void 0 === Ob ? void 0 : Ob.name) !== this.activeName) {
          var Ub, Lb, Sb, ab, Hb, wb;
          const bb = this.activeName,
            ub = {
              left: !this.leftStickConsumed,
              right: !this.rightStickConsumed
            },
            hb = null !== (Ub = null === Ob || void 0 === Ob || null === (Lb = Ob.peek) || void 0 === Lb ? void 0 : Lb.call(Ob)) && void 0 !== Ub ? Ub : null,
            Gb = null === bb && !!hb && !(null === (Sb = this.consumers.get(hb.over)) || void 0 === Sb || !Sb.onPeekFrame),
            Yb = hb && (hb.over === bb || Gb) ? hb : null,
            Zb = null !== this.peek && this.peek.over === (null === Ob || void 0 === Ob ? void 0 : Ob.name) ? this.peek : null;
          this.deactivateCurrent(null !== Yb, null !== Zb), this.activeName = null !== (ab = null === Ob || void 0 === Ob ? void 0 : Ob.name) && void 0 !== ab ? ab : null, null === bb || this.handOffPending || this.consumeAllHeld();
          const Xb = null === (Hb = null !== Yb && void 0 !== Yb ? Yb : Zb) || void 0 === Hb ? void 0 : Hb.stick;
          "left" === Xb && ub.left ? this.leftStickConsumed = !1 : "right" === Xb && ub.right && (this.rightStickConsumed = !1), this.peek = Yb, Ob || null === bb ? Ob && (null === (wb = this.idleResume) || void 0 === wb ? void 0 : wb.name) === Ob.name && (this.idleResume.left && (this.leftStickConsumed = !1), this.idleResume.right && (this.rightStickConsumed = !1)) : this.idleResume = {
            name: bb,
            left: ub.left && this.leftStickConsumed,
            right: ub.right && this.rightStickConsumed
          }, Ob && (this.idleResume = null);
          for (let Ob = 0; Ob < Bb.U; Ob++) this.previousHeld[Ob] && !this.MS[Ob] && (this.suppressedReleases[Ob] = !0)
        }
        var Zb, Xb;
        (this.handOffPending = !1, Ob) && (hb && !Gb.has(Ob.name) && this.consumeWakePress(Ob), Ob.onFrame(this.buildInput(bb, ub, hb)), this.peek && (null === (Zb = this.consumers.get(this.peek.over)) || void 0 === Zb || null === (Xb = Zb.onPeekFrame) || void 0 === Xb || Xb.call(Zb, this.buildInput(bb, ub, !1, this.peek.stick))))
      }
      consumeWakePress(bb) {
        for (let Ob = 0; Ob < Bb.U; Ob++) {
          var ub, hb;
          const Gb = Bb.X[Ob];
          (null !== (ub = null === (hb = bb.wakePressActs) || void 0 === hb ? void 0 : hb.call(bb, Gb)) && void 0 !== ub ? ub : Ub.includes(Gb)) || (this.MS[Ob] ? this.consumedButtons[Ob] = !0 : this.lastFrame.values[Ob] >= Bb.S && (this.wakeOwned[Ob] = !0))
        }
      }
      pickActive() {
        for (const bb of Ob) {
          const ub = this.consumers.get(bb);
          if (ub && ub.isActive()) return ub
        }
        return null
      }
      deactivateCurrent() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var hb, Bb, Ob, Gb;
        this.activeName && (null === (hb = this.consumers.get(this.activeName)) || void 0 === hb || null === (Bb = hb.onDeactivate) || void 0 === Bb || Bb.call(hb, bb));
        this.peek && !ub && (null === (Ob = this.consumers.get(this.peek.over)) || void 0 === Ob || null === (Gb = Ob.onDeactivate) || void 0 === Gb || Gb.call(Ob, !1));
        this.peek = null
      }
      consumeAllHeld() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.idleResume = null;
        for (let Ob = 0; Ob < Bb.U; Ob++) this.MS[Ob] && (this.consumedButtons[Ob] = !0);
        const {
          leftStick: ub,
          rightStick: hb
        } = this.lastFrame;
        this.leftStickConsumed = "left" !== bb && (this.leftStickConsumed || Math.hypot(ub.x, ub.y) >= Yb), this.rightStickConsumed = "right" !== bb && (this.rightStickConsumed || Math.hypot(hb.x, hb.y) >= Yb)
      }
      handOffHeldInput() {
        this.handOffPending = !0
      }
      consumeButton(bb) {
        const ub = (0, Bb.l)(bb);
        this.MS[ub] && (this.consumedButtons[ub] = !0)
      }
      buildInput(bb, ub, hb, Ob) {
        const Gb = this.MS,
          Ub = this.previousHeld,
          Lb = Ob ? new Array(Bb.U).fill(!0) : [...this.consumedButtons],
          Yb = Ob ? Lb : [...this.suppressedReleases],
          Sb = !this.leftStickConsumed && (!Ob || "left" === Ob),
          ab = !this.rightStickConsumed && (!Ob || "right" === Ob);
        return {
          frame: bb,
          dtMs: ub,
          isHeld: bb => {
            const ub = (0, Bb.l)(bb);
            return Gb[ub] && !Lb[ub]
          },
          wasPressed: bb => {
            const ub = (0, Bb.l)(bb);
            return Gb[ub] && !Ub[ub] && !Lb[ub]
          },
          wasReleased: bb => {
            const ub = (0, Bb.l)(bb);
            return !Gb[ub] && Ub[ub] && !Yb[ub]
          },
          value: ub => {
            const hb = (0, Bb.l)(ub);
            return Lb[hb] ? 0 : bb.values[hb]
          },
          leftStick: Sb ? bb.leftStick : {
            x: 0,
            y: 0
          },
          rightStick: ab ? bb.rightStick : {
            x: 0,
            y: 0
          },
          wokeDevice: hb
        }
      }
    }
  },
  7857: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Hb.e,
      d: () => Hb.f,
      e: () => xb,
      f: () => zb,
      i: () => gb,
      l: () => ib
    });
    var Bb = hb(49),
      Ob = hb(16),
      Gb = hb(1348),
      Ub = hb(29),
      Lb = hb(7859),
      Yb = hb(7836),
      Sb = hb(7850),
      ab = hb(7830),
      Hb = hb(1895),
      wb = hb(7867);
    const Zb = {
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
      Xb = "controllerSettings",
      pb = ["bindings", "promptFamily", "hideButtonHints", "swapSticks", "swapConfirmBack", "leaderboardButton"],
      ob = ["auto", ...Lb.b],
      Ab = (bb, ub) => "string" === typeof ub && bb.includes(ub),
      lb = bb => ub => "number" === typeof ub && Number.isFinite(ub) ? (0, wb.t)(ub, bb) : void 0,
      Kb = bb => "boolean" === typeof bb ? bb : void 0,
      Wb = bb => ub => Ab(bb, ub) ? ub : void 0,
      Cb = {
        lookSensitivityX: lb(wb.gb),
        lookSensitivityY: lb(wb.gb),
        aimLookSensitivity: lb(wb.i),
        invertLookX: Kb,
        invertLookY: Kb,
        lookCurve: Wb(Yb.P),
        lookDeadzone: lb(wb.y),
        moveDeadzone: lb(wb.y),
        swapSticks: Kb,
        autoSprint: Kb,
        sneakMode: Wb(["toggle", "hold"]),
        tapHoldTime: Wb(["short", "medium", "long"]),
        attackMode: Wb(["hold", "toggle"]),
        promptFamily: Wb(ob),
        hideButtonHints: Kb,
        vibration: Kb,
        cursorSpeed: lb(wb.w),
        cursorMagnetism: Kb,
        buttonRepeat: Wb(Yb.p),
        largePointer: Kb,
        menuBackToCategories: Kb,
        swapConfirmBack: Kb,
        menuNavigation: Wb(["hybrid", "focus", "cursor"]),
        inventoryNavigation: Wb(["hybrid", "slot", "cursor"]),
        quickChat: Wb(["wheel", "off"]),
        leaderboardButton: Wb(["shop", "leaderboard"]),
        gyroAiming: Kb,
        gyroSensitivity: lb(wb.O),
        gyroActivation: Wb(["always", "aiming", "button"]),
        gyroButton: Wb(Yb.X),
        emoteButton: Wb(["tapHold", "wheel"])
      },
      db = [{
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
      rb = bb => {
        const ub = {};
        if ("object" !== typeof bb || null === bb) return ub;
        for (const [hb, Bb] of Object.entries(bb)) Object.prototype.hasOwnProperty.call(Sb.c, hb) && Ab(Yb.X, Bb) && (ub[hb] = Bb);
        return ub
      },
      jb = bb => {
        const ub = {};
        for (const hb of Object.keys(Zb))("bindings" === hb ? Object.keys(bb.bindings).length > 0 : bb[hb] !== Zb[hb]) && (ub[hb] = bb[hb]);
        0 !== Object.keys(ub).length ? Ub.j.setItem(Xb, ub) : Ub.j.removeItem(Xb)
      };
    let nb = (() => {
        const bb = Ub.j.getItem(Xb),
          ub = (bb => {
            const ub = "object" === typeof bb && null !== bb ? bb : {},
              hb = {
                ...Zb,
                bindings: rb(ub.bindings)
              };
            for (const Ob of Object.keys(Cb)) {
              const bb = Cb[Ob](ub[Ob]);
              void 0 !== bb && (hb[Ob] = bb)
            }
            const Bb = Object.keys(ub).filter((bb => !!Object.prototype.hasOwnProperty.call(Zb, bb) && ("bindings" === bb ? "object" !== typeof ub.bindings || null === ub.bindings || Object.keys(ub.bindings).length !== Object.keys(hb.bindings).length : hb[bb] !== ub[bb])));
            return Bb.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${Bb.join(", ")}`), hb
          })(bb);
        return null !== bb && void 0 !== bb && jb(ub), ub
      })(),
      Db = {
        ...nb,
        ...(() => {
          if ("undefined" === typeof window) return {};
          const bb = {},
            ub = new URLSearchParams(window.location.search);
          for (const {
              param: hb,
              key: Bb
            }
            of db) {
            const Ob = Cb[Bb](ub.get(hb));
            void 0 !== Ob && (bb[Bb] = Ob)
          }
          return bb
        })()
      };
    const xb = () => Db,
      zb = () => {
        var bb, ub;
        const hb = xb().promptFamily;
        return "auto" !== hb ? hb : null !== (bb = null === (ub = ab.g.getActivePad()) || void 0 === ub ? void 0 : ub.family) && void 0 !== bb ? bb : "xbox"
      },
      gb = bb => {
        const ub = Db;
        nb = {
          ...nb,
          ...bb
        }, jb(nb), Db = {
          ...Db,
          ...bb
        }, (bb => {
          Ob.i.vp(Hb.f, Db), pb.some((ub => bb[ub] !== Db[ub])) && Ob.i.vp(Hb.e, Db)
        })(ub)
      },
      ib = () => {
        const [bb, ub] = (0, Bb.useState)(Db);
        return (0, Gb.h)(Hb.f, ub), bb
      }
  },
  8368: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ob
    });
    const Bb = new Set(["Alt", "AltGraph", "Meta", "OS", "AudioVolumeUp", "AudioVolumeDown", "AudioVolumeMute", "MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "BrowserBack", "BrowserForward", "BrowserHome", "GoBack", "LaunchApplication1", "LaunchApplication2", "LaunchMail", "PrintScreen", "Unidentified"]),
      Ob = bb => Bb.has(bb)
  },
  7830: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => pb.d,
      g: () => Kb
    });
    var Bb = hb(7836),
      Ob = hb(7841);
    const Gb = .1,
      Ub = .3;
    class Lb {
      constructor() {
        this.deadzone = 0, this.anchor = null, this.steadyMs = 0, this.lastMs = null, this.returning = !0, this.anchorLearned = !1
      }
      observe(bb, ub) {
        const hb = null === this.lastMs ? 0 : Math.min(Math.max(0, ub - this.lastMs), 100);
        this.lastMs = ub;
        const Bb = Math.hypot(bb.x, bb.y);
        if (Bb >= Ub) return this.anchor = null, void(this.returning = !0);
        Bb >= Gb || (this.returning = !1);
        const Ob = this.anchor;
        if (!Ob || Math.hypot(bb.x - Ob.x, bb.y - Ob.y) > .03) return this.anchorLearned && (this.returning = !1), this.anchor = {
          x: bb.x,
          y: bb.y
        }, this.steadyMs = 0, void(this.anchorLearned = !1);
        if (this.steadyMs += hb, this.steadyMs < 1e3) return;
        const Lb = Math.max(Bb, Math.hypot(Ob.x, Ob.y));
        Lb < Gb ? this.deadzone = 0 : this.returning && (this.deadzone = Lb + .05, this.anchorLearned = !0)
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
    const Yb = (bb, ub) => {
        var hb, Bb;
        return null !== (hb = bb && (null === (Bb = Object.getOwnPropertyDescriptor(bb, ub)) || void 0 === Bb ? void 0 : Bb.get)) && void 0 !== hb ? hb : null
      },
      Sb = bb => {
        const ub = bb.vendorName;
        return "string" === typeof ub ? ub : void 0
      },
      ab = ((bb, ub) => {
        const hb = Yb(bb, "index"),
          Bb = Yb(bb, "id"),
          Ob = Yb(bb, "connected"),
          Gb = Yb(bb, "mapping"),
          Ub = Yb(bb, "buttons"),
          Lb = Yb(bb, "axes"),
          ab = Yb(ub, "pressed"),
          Hb = Yb(ub, "value");
        return hb && Bb && Ob && Gb && Ub && Lb && ab && Hb ? bb => {
          const ub = Ub.call(bb),
            Yb = Lb.call(bb),
            wb = {
              index: Number(hb.call(bb)),
              id: String(Bb.call(bb)),
              connected: !0 === Ob.call(bb),
              mapping: String(Gb.call(bb)),
              buttons: [],
              axes: [],
              vendorName: Sb(bb)
            };
          for (let hb = 0; hb < ub.length; hb++) wb.buttons.push({
            pressed: !0 === ab.call(ub[hb]),
            value: Number(Hb.call(ub[hb]))
          });
          for (let hb = 0; hb < Yb.length; hb++) wb.axes.push(Number(Yb[hb]));
          return wb
        } : null
      })("undefined" === typeof Gamepad ? null : Gamepad.prototype, "undefined" === typeof GamepadButton ? null : GamepadButton.prototype),
      Hb = "undefined" === typeof Navigator ? null : Navigator.prototype.getGamepads;
    var wb = hb(1307),
      Zb = hb(1313);
    const Xb = bb => ({
      pressed: bb,
      value: bb ? 1 : 0
    });
    var pb = hb(1895);
    const ob = Ub,
      Ab = bb => {
        const ub = new Array(Bb.U).fill(0);
        for (let hb = 0; hb < Bb.U && hb < bb.buttons.length; hb++) {
          const Ob = bb.buttons[hb];
          ub[hb] = Ob.pressed && !(0, Bb.M)(hb) ? Math.max(Ob.value, Bb.x) : Ob.value
        }
        return ub
      },
      lb = (bb, ub) => {
        var hb, Bb;
        return {
          x: null !== (hb = bb.axes[ub]) && void 0 !== hb ? hb : 0,
          y: null !== (Bb = bb.axes[ub + 1]) && void 0 !== Bb ? Bb : 0
        }
      };
    const Kb = new class {
      constructor(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ab;
        this.readGamepads = bb, this.requireTrustedPads = ub, this.nativeReader = hb, this.running = !1, this.listening = !1, this.rafId = 0, this.lastTimestampMs = 0, this.activeInfo = null, this.slots = [], this.trustedIndices = new Set, this.warnedNonStandardIds = new Set, this.loggedReadError = !1, this.frameListeners = new Set, this.connectionListeners = new Set, this.anyPadConnected = !1, this.connectedListeners = new Set, this.handleConnectionEvent = bb => {
          bb.isTrusted && this.trustedIndices.add(bb.gamepad.index), this.wake()
        }, this.handleDisconnectionEvent = bb => {
          this.trustedIndices.delete(bb.gamepad.index)
        }, this.gH = bb => {
          if (this.rafId = 0, !this.running) return;
          const ub = 0 === this.lastTimestampMs ? 16 : Math.min(100, bb - this.lastTimestampMs);
          this.lastTimestampMs = bb;
          try {
            this.poll(bb, ub)
          } finally {
            this.anyPadConnected && (this.rafId = requestAnimationFrame(this.gH))
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
          ub = bb ? this.readPad(bb) : null;
        return ub && ub.id === this.activeInfo.id ? bb : null
      }
      poll(bb, ub) {
        var hb, Ob;
        const Gb = this.readPads();
        let Ub = null,
          Yb = !1;
        const Sb = [],
          ab = Math.max(Gb.length, this.slots.length);
        for (let Kb = 0; Kb < ab; Kb++) {
          var Hb;
          const ub = Kb < Gb.length ? Gb[Kb] : null,
            hb = ub ? this.readPad(ub) : null;
          if (!hb || !hb.connected || !this.isUsable(hb)) {
            this.slots[Kb] = null;
            continue
          }
          let Ob = this.slots[Kb];
          Ob && Ob.id === hb.id || (Ob = {
            id: hb.id,
            MS: [],
            leftSettled: !1,
            rightSettled: !1,
            leftRest: new Lb,
            rightRest: new Lb
          }, this.slots[Kb] = Ob);
          const ab = lb(hb, 0),
            wb = lb(hb, 2);
          !Ob.leftSettled && Math.hypot(ab.x, ab.y) < ob && (Ob.leftSettled = !0), !Ob.rightSettled && Math.hypot(wb.x, wb.y) < ob && (Ob.rightSettled = !0), Ob.leftRest.observe(ab, bb), Ob.rightRest.observe(wb, bb);
          const Zb = Ab(hb),
            Xb = (0, Bb.s)(Zb, Ob.MS),
            pb = Ob.MS,
            Wb = Xb.map(((bb, ub) => bb && !pb[ub]));
          Ob.MS = Xb;
          const Cb = {
            pad: hb,
            slot: Ob,
            values: Zb
          };
          Kb === (null === (Hb = this.activeInfo) || void 0 === Hb ? void 0 : Hb.index) && hb.id === this.activeInfo.id ? (Ub = Cb, Yb = Wb.includes(!0)) : Wb.includes(!0) && Sb.push({
            polled: Cb,
            rose: Wb
          })
        }
        const wb = this.slots.some((bb => null !== bb));
        if (wb !== this.anyPadConnected) {
          this.anyPadConnected = wb;
          for (const bb of this.connectedListeners) bb()
        }
        const Zb = null !== (hb = null === (Ob = Ub) || void 0 === Ob ? void 0 : Ob.slot.MS) && void 0 !== hb ? hb : [],
          Xb = Yb ? void 0 : Sb.find((bb => {
            let {
              rose: ub
            } = bb;
            return ub.some(((bb, ub) => bb && !Zb[ub]))
          }));
        if (Xb ? (Ub = Xb.polled, this.setActive(Xb.polled.pad)) : this.activeInfo && !Ub && this.setActive(null), !Ub || !this.activeInfo) return;
        const pb = ((bb, ub) => {
          let {
            pad: hb,
            slot: Ob,
            values: Gb
          } = bb;
          const Ub = (0, Bb.u)(ub);
          return Ub.values = Gb, Ob.leftSettled && (Ub.leftStick = Ob.leftRest.apply(lb(hb, 0))), Ob.rightSettled && (Ub.rightStick = Ob.rightRest.apply(lb(hb, 2))), Ub
        })(Ub, bb);
        for (const Bb of this.frameListeners) Bb(pb, ub, this.activeInfo)
      }
      readPad(bb) {
        const ub = this.readSnapshot(bb);
        return ub && (0, Zb.g)(ub) ? (bb => {
          const ub = ub => {
              var hb;
              return null !== (hb = bb.buttons[ub]) && void 0 !== hb ? hb : Xb(!1)
            },
            hb = ub => {
              var hb;
              return null !== (hb = bb.axes[ub]) && void 0 !== hb ? hb : 0
            },
            Bb = bb.axes.length > 9,
            Ob = Bb ? (bb => {
              const ub = 0 !== bb;
              return {
                up: ub && (bb >= -1 && bb < -.7 || bb >= .95 && bb <= 1),
                right: ub && bb >= -.75 && bb < -.1,
                down: ub && bb >= -.2 && bb < .45,
                left: ub && bb >= .4 && bb <= 1
              }
            })(hb(9)) : {
              up: hb(5) < -.5,
              down: hb(5) > .5,
              left: hb(4) < -.5,
              right: hb(4) > .5
            };
          return {
            ...bb,
            mapping: "standard",
            buttons: [ub(1), ub(2), ub(0), ub(3), ub(4), ub(5), ub(6), ub(7), ub(8), ub(9), ub(10), ub(11), Xb(Ob.up), Xb(Ob.down), Xb(Ob.left), Xb(Ob.right), ub(12)],
            axes: [hb(0), hb(1), hb(2), hb(Bb ? 5 : 3)]
          }
        })(ub) : ub
      }
      readSnapshot(bb) {
        if (this.nativeReader) try {
          return this.nativeReader(bb)
        } catch {
          if (this.requireTrustedPads) return null
        }
        return this.requireTrustedPads ? null : (bb => {
          const ub = bb;
          return {
            index: ub.index,
            id: ub.id,
            connected: ub.connected,
            mapping: ub.mapping,
            buttons: Array.from(ub.buttons, (bb => ({
              pressed: bb.pressed,
              value: bb.value
            }))),
            axes: Array.from(ub.axes),
            vendorName: Sb(bb)
          }
        })(bb)
      }
      isUsable(bb) {
        return !(0, wb.g)(bb.id) && ("standard" !== bb.mapping ? (this.warnedNonStandardIds.has(bb.id) || (this.warnedNonStandardIds.add(bb.id), console.warn(`Controller "${bb.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.trustedIndices.has(bb.index))
      }
      setActive(bb) {
        this.activeInfo = bb ? {
          index: bb.index,
          id: bb.id,
          family: (0, Ob.e)(bb.id, bb.vendorName)
        } : null;
        for (const ub of this.connectionListeners) ub(this.activeInfo)
      }
      readPads() {
        try {
          return this.readGamepads()
        } catch (bb) {
          return this.loggedReadError || (this.loggedReadError = !0, console.warn("Reading gamepads failed; controller input is unavailable.", bb)), []
        }
      }
      wake() {
        this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.gH))
      }
    }((() => Hb ? Hb.call(navigator) : []), !0);
    Kb.listenForConnections()
  },
  8384: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Bb
    });
    const Bb = {
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
  8475: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Ub,
      h: () => Lb
    });
    var Bb = hb(16),
      Ob = hb(8467);
    let Gb = !1;
    const Ub = () => Gb,
      Lb = bb => {
        bb !== Gb && (Gb = bb, Bb.i.vp(Ob.l, Gb))
      }
  },
  8470: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Lb,
      f: () => Yb
    });
    var Bb = hb(16),
      Ob = hb(8467);
    let Gb = null,
      Ub = 0;
    const Lb = () => Gb,
      Yb = bb => {
        null === bb && null === Gb || (Gb = null === bb ? null : {
          id: ++Ub,
          holdMs: bb
        }, Bb.i.vp(Ob.p, Gb))
      }
  },
  8480: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Ub,
      i: () => Lb
    });
    var Bb = hb(16),
      Ob = hb(8467);
    let Gb = !1;
    const Ub = () => Gb,
      Lb = bb => {
        bb !== Gb && (Gb = bb, Bb.i.vp(Ob.q, Gb))
      }
  },
  8558: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Ub,
      g: () => Lb
    });
    var Bb = hb(16),
      Ob = hb(8467);
    let Gb = !1;
    const Ub = () => Gb,
      Lb = bb => {
        bb !== Gb && (Gb = bb, Bb.i.vp(Ob.r, Gb))
      }
  },
  8433: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Bb
    });
    class Bb {
      constructor() {
        this.downAtMs = null
      }
      update(bb, ub, hb, Bb) {
        if (bb) return this.downAtMs = hb, null;
        if (null === this.downAtMs) return null;
        const Ob = hb - this.downAtMs >= Bb;
        return ub ? Ob ? (this.downAtMs = null, "hold") : null : (this.downAtMs = null, Ob ? "hold" : "tap")
      }
      release() {
        this.downAtMs = null
      }
    }
  },
  7897: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Hb,
      f: () => wb,
      g: () => Lb,
      k: () => Kb,
      m: () => lb
    });
    var Bb = hb(29),
      Ob = hb(7859),
      Gb = hb(7836);
    const Ub = (() => {
        try {
          return hb(7906)
        } catch {
          return null
        }
      })(),
      Lb = [...Gb.X, "LeftStick", "RightStick"],
      Yb = new Map,
      Sb = {
        xbox: "xbox",
        playstation: "playstation",
        nintendo: "nintendo",
        steamdeck: "steamdeck",
        generic: "xbox"
      },
      ab = (new Set(Object.values(Sb)), {
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
      Hb = (bb, ub) => {
        var hb, Bb;
        return null !== (hb = null === (Bb = ab[Sb[bb]]) || void 0 === Bb ? void 0 : Bb[ub]) && void 0 !== hb ? hb : 1
      },
      wb = (bb, ub) => {
        const hb = `./${Sb[bb]}/${ub}.svg`;
        let Bb = Yb.get(hb);
        return void 0 === Bb && (Bb = Ub ? Ub(hb) : "", Yb.set(hb, Bb)), Bb
      },
      Zb = new Set,
      Xb = [],
      pb = bb => {
        if (!Zb.has(bb)) {
          Zb.add(bb);
          for (const ub of Lb) {
            const hb = wb(bb, ub);
            if (hb) {
              const bb = new Image;
              bb.crossOrigin = "anonymous", bb.src = hb, Xb.push(bb)
            }
          }
        }
      },
      ob = "controllerGlyphFamily";
    let Ab = null;
    const lb = bb => {
        bb !== Ab && (Ab = bb, Bb.j.setItem(ob, bb), pb(bb))
      },
      Kb = () => {
        const bb = Bb.j.getItem(ob);
        (0, Ob.d)(bb) && bb !== Ab && (Ab = bb, pb(bb))
      }
  },
  8589: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Mb,
      g: () => mb
    });
    var Bb = hb(49),
      Ob = hb(16),
      Gb = hb(1348),
      Ub = hb(7843),
      Lb = hb(7830),
      Yb = hb(7882),
      Sb = hb(7857);
    const ab = {
        x: 0,
        y: 0,
        z: 0
      },
      Hb = Math.PI / 180,
      wb = bb => Math.hypot(bb.x, bb.y, bb.z),
      Zb = (bb, ub) => ({
        x: bb.x * ub,
        y: bb.y * ub,
        z: bb.z * ub
      }),
      Xb = (bb, ub) => ({
        x: bb.x + ub.x,
        y: bb.y + ub.y,
        z: bb.z + ub.z
      }),
      pb = (bb, ub) => ({
        x: bb.x - ub.x,
        y: bb.y - ub.y,
        z: bb.z - ub.z
      }),
      ob = bb => {
        const ub = wb(bb);
        return 0 === ub ? ab : Zb(bb, 1 / ub)
      },
      Ab = bb => ({
        min: {
          ...bb
        },
        max: {
          ...bb
        }
      }),
      lb = (bb, ub) => ({
        min: {
          x: Math.min(bb.min.x, ub.x),
          y: Math.min(bb.min.y, ub.y),
          z: Math.min(bb.min.z, ub.z)
        },
        max: {
          x: Math.max(bb.max.x, ub.x),
          y: Math.max(bb.max.y, ub.y),
          z: Math.max(bb.max.z, ub.z)
        }
      }),
      Kb = (bb, ub) => bb.max.x - bb.min.x <= ub && bb.max.y - bb.min.y <= ub && bb.max.z - bb.min.z <= ub;
    class Wb {
      constructor() {
        this.bias = ab, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = ab, this.windowSec = 0
      }
      update(bb) {
        const ub = this.gyroRange ? lb(this.gyroRange, bb.gyro) : Ab(bb.gyro),
          hb = bb.accel ? this.accelRange ? lb(this.accelRange, bb.accel) : Ab(bb.accel) : null;
        if (!Kb(ub, 1) || hb && !Kb(hb, .01)) return void this.restartWindow(bb);
        if (this.gyroRange = ub, this.accelRange = hb, this.sum = Xb(this.sum, Zb(bb.gyro, bb.dtSec)), this.windowSec += bb.dtSec, this.windowSec < 1) return;
        const Bb = Zb(this.sum, 1 / this.windowSec);
        if (wb(Bb) > 5) return;
        const Ob = pb(Bb, this.bias);
        let Gb = 0;
        !this.calibrated || this.windowSec >= 3 ? Gb = 1 : wb(Ob) <= 1 && (Gb = Math.min(1, bb.dtSec / 1)), this.bias = Xb(this.bias, Zb(Ob, Gb)), this.calibrated = this.calibrated || Gb > 0
      }
      correct(bb) {
        return pb(bb, this.bias)
      }
      getBias() {
        return this.bias
      }
      isCalibrated() {
        return this.calibrated
      }
      reset() {
        this.bias = ab, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = ab, this.windowSec = 0
      }
      restartWindow(bb) {
        this.gyroRange = Ab(bb.gyro), this.accelRange = bb.accel ? Ab(bb.accel) : null, this.sum = ab, this.windowSec = 0
      }
    }
    class Cb {
      constructor() {
        this.down = null
      }
      update(bb, ub, hb) {
        const Bb = ob(Zb(ub, -1));
        if (!this.down) return this.down = Bb, Bb;
        const Ob = Zb(bb, Hb * hb),
          Gb = this.down,
          Ub = {
            x: Gb.x - (Ob.y * Gb.z - Ob.z * Gb.y),
            y: Gb.y - (Ob.z * Gb.x - Ob.x * Gb.z),
            z: Gb.z - (Ob.x * Gb.y - Ob.y * Gb.x)
          },
          Lb = 0 === wb(Bb) ? 0 : Math.min(1, hb / .25);
        var Yb, Sb;
        return this.down = ob((Sb = Lb, Xb(Yb = Ub, Zb(pb(Bb, Yb), Sb)))), this.down
      }
      reset() {
        this.down = null
      }
    }
    class db {
      constructor() {
        this.entries = [], this.windowSec = 0
      }
      apply(bb, ub, hb) {
        const Bb = Math.hypot(bb, ub),
          Ob = Math.max(0, Math.min(1, (Bb - 2) / 2)),
          Gb = {
            yaw: bb * (1 - Ob),
            pitch: ub * (1 - Ob),
            dtSec: hb
          };
        for (this.entries.push(Gb), this.windowSec += hb; this.entries.length > 1 && this.windowSec - this.entries[0].dtSec >= .125;) this.windowSec -= this.entries[0].dtSec, this.entries.shift();
        let Ub = 0,
          Lb = 0;
        for (const Sb of this.entries) Ub += Sb.yaw * Sb.dtSec, Lb += Sb.pitch * Sb.dtSec;
        const Yb = this.windowSec > 0 ? {
          yaw: Ub / this.windowSec,
          pitch: Lb / this.windowSec
        } : {
          yaw: Gb.yaw,
          pitch: Gb.pitch
        };
        return {
          yaw: bb * Ob + Yb.yaw,
          pitch: ub * Ob + Yb.pitch
        }
      }
      reset() {
        this.entries = [], this.windowSec = 0
      }
    }
    class rb {
      constructor() {
        this.calibrator = new Wb, this.gravity = new Cb, this.smoother = new db
      }
      process(bb, ub, hb) {
        const Bb = Math.max(0, Math.min(.05, ub));
        this.calibrator.update({
          ...bb,
          dtSec: Bb
        });
        const Ob = this.calibrator.correct(bb.gyro);
        let Gb = Ob.y;
        "player" === hb && bb.accel && (Gb = ((bb, ub) => {
          const hb = bb.y * ub.y + bb.z * ub.z;
          return -Math.sign(hb) * Math.min(1.41 * Math.abs(hb), Math.hypot(bb.y, bb.z))
        })(Ob, this.gravity.update(Ob, bb.accel, Bb)));
        const Ub = this.smoother.apply(Gb, Ob.x, Bb),
          Lb = ((bb, ub) => {
            const hb = Math.hypot(bb, ub);
            if (hb >= 1) return {
              yaw: bb,
              pitch: ub
            };
            const Bb = hb / 1;
            return {
              yaw: bb * Bb,
              pitch: ub * Bb
            }
          })(Ub.yaw, Ub.pitch);
        return {
          yawDeg: Lb.yaw * Bb,
          pitchDeg: Lb.pitch * Bb
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
    const jb = (bb, ub) => {
      var hb, Bb, Ob;
      const Gb = ub * Hb,
        Ub = null !== (hb = bb.beta) && void 0 !== hb ? hb : 0,
        Lb = null !== (Bb = bb.gamma) && void 0 !== Bb ? Bb : 0;
      return {
        x: Ub * Math.cos(Gb) - Lb * Math.sin(Gb),
        y: Ub * Math.sin(Gb) + Lb * Math.cos(Gb),
        z: null !== (Ob = bb.alpha) && void 0 !== Ob ? Ob : 0
      }
    };
    var nb = hb(8591);
    class Db {
      constructor(bb, ub, hb) {
        this.hid = bb, this.sink = ub, this.onControllersChanged = hb, this.controllers = new Map, this.running = !1, this.openedCount = 0, this.opening = new Set, this.disconnectedWhileOpening = new Set, this.switchPacketCounter = 0, this.onConnect = bb => {
          this.openController(bb.device).catch((bb => {
            console.warn("Could not open motion controller", bb)
          }))
        }, this.onDisconnect = bb => {
          this.opening.has(bb.device) && this.disconnectedWhileOpening.add(bb.device);
          const ub = this.controllers.get(bb.device);
          ub && (this.forget(ub), this.onControllersChanged())
        }
      }
      async start() {
        if (this.running) return;
        this.running = !0, this.hid.addEventListener("connect", this.onConnect), this.hid.addEventListener("disconnect", this.onDisconnect);
        const bb = await this.hid.getDevices();
        for (const ub of bb) await this.openController(ub).catch((bb => {
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
          filters: nb.i
        });
        let ub = 0;
        for (const hb of bb) await this.openController(hb).catch((bb => {
          console.warn("Could not open motion controller", bb), ub++
        }));
        return ub
      }
      async hasGrantedController() {
        return (await this.hid.getDevices()).some((bb => null !== (0, nb.d)(bb.vendorId, bb.productId)))
      }
      getConnectedKinds() {
        return [...this.controllers.values()].map((bb => bb.kind))
      }
      forget(bb) {
        bb.device.removeEventListener("inputreport", bb.onReport), this.controllers.get(bb.device) === bb && this.controllers.delete(bb.device)
      }
      async openController(bb) {
        const ub = (0, nb.d)(bb.vendorId, bb.productId);
        if (!ub || !this.running || this.controllers.has(bb) || this.opening.has(bb)) return;
        this.opening.add(bb);
        let hb = !1;
        try {
          bb.opened || await bb.open()
        } finally {
          this.opening.delete(bb), hb = this.disconnectedWhileOpening.delete(bb)
        }
        if (hb) return void bb.close().catch((bb => {
          console.debug("Could not close an unplugged motion controller", bb)
        }));
        if (!this.running) return;
        const Bb = {
          device: bb,
          kind: ub,
          lastClock: null,
          lastEventMs: null,
          lastReadingMs: -1 / 0,
          openedOrder: this.openedCount++,
          onReport: bb => {
            this.onReport(Bb, bb)
          }
        };
        this.controllers.set(bb, Bb), bb.addEventListener("inputreport", Bb.onReport), this.onControllersChanged();
        try {
          await this.enableMotion(Bb)
        } catch (Ob) {
          console.warn(`Could not turn on motion for ${ub}`, Ob), this.controllers.get(bb) === Bb && (this.forget(Bb), this.onControllersChanged())
        }
      }
      async enableMotion(bb) {
        let {
          device: ub,
          kind: hb
        } = bb;
        if ((0, nb.f)(hb))
          for (const Bb of nb.r[hb]) await ub.receiveFeatureReport(Bb).catch((bb => {
            console.debug(`Motion controller feature report ${Bb} unavailable`, bb)
          }));
        else
          for (let Bb = 0; Bb < 2; Bb++)
            for (const {
                subcommand: bb,
                args: hb
              }
              of nb.u) await ub.sendReport(nb.w, (0, nb.c)(this.switchPacketCounter++, bb, hb)), await new Promise((bb => {
              setTimeout(bb, 60)
            }))
      }
      onReport(bb, ub) {
        const hb = (0, nb.n)(bb.kind, ub.reportId, ub.data, bb.device.productId);
        if (!hb) return;
        const Bb = null === bb.lastEventMs ? 0 : (ub.timeStamp - bb.lastEventMs) / 1e3;
        bb.lastEventMs = ub.timeStamp;
        let Ob = hb.dtSec;
        if (null !== Ob && Bb > 0 && (Ob = Math.max(.001, Math.min(.017, Bb / hb.readings.length))), null === Ob && null !== hb.sensorClock && (0, nb.f)(bb.kind)) {
          const ub = (0, nb.p)(bb.kind, bb.lastClock, hb.sensorClock);
          bb.lastClock = hb.sensorClock, Ob = 0 === ub ? null : ub
        }
        if (bb.lastReadingMs = ub.timeStamp, this.isPreferred(bb, ub.timeStamp))
          for (const Ub of hb.readings) {
            var Gb;
            this.sink(Ub, null !== (Gb = Ob) && void 0 !== Gb ? Gb : Bb, `hid${bb.openedOrder}`)
          }
      }
      isPreferred(bb, ub) {
        const hb = bb => 1e6 * nb.m[bb.kind] + bb.openedOrder;
        for (const Bb of this.controllers.values())
          if (Bb !== bb && ub - Bb.lastReadingMs < 500 && hb(Bb) < hb(bb)) return !1;
        return !0
      }
    }
    var xb = hb(86);
    const zb = () => DeviceMotionEvent,
      gb = () => "undefined" !== typeof window && "undefined" !== typeof DeviceMotionEvent && window.isSecureContext && (0, xb.isMobile)(),
      ib = () => {
        var bb;
        const ub = null === (bb = window.screen.orientation) || void 0 === bb ? void 0 : bb.angle;
        return "number" === typeof ub ? ub : "number" === typeof window.orientation ? window.orientation : 0
      };
    class vb {
      constructor(bb, ub) {
        this.sink = bb, this.onStateChanged = ub, this.state = "off", this.lastEventMs = null, this.noSensorTimer = null, this.wanted = !1, this.permissionRequest = null, this.granted = !1, this.onGesture = () => {
          this.requestPermission().catch((bb => {
            console.warn("Could not enable the motion sensor", bb)
          }))
        }, this.onMotion = bb => {
          const ub = bb.rotationRate;
          if (!ub || null === ub.alpha && null === ub.beta && null === ub.gamma) return;
          const hb = null === this.lastEventMs ? 0 : (bb.timeStamp - this.lastEventMs) / 1e3;
          this.lastEventMs = bb.timeStamp, this.clearNoSensorTimer(), this.setState("on"), this.sink({
            gyro: jb(ub, ib()),
            accel: null
          }, hb, "phone")
        }
      }
      getState() {
        return this.state
      }
      start() {
        if (this.wanted = !0, "off" === this.state) return "function" !== typeof zb().requestPermission || this.granted ? void this.listen() : (this.setState("needsPermission"), void this.armGestureRequest())
      }
      requestPermission() {
        return this.permissionRequest || (this.permissionRequest = this.askPermission().finally((() => {
          this.permissionRequest = null
        }))), this.permissionRequest
      }
      async askPermission() {
        const bb = zb().requestPermission;
        if (!this.wanted) return;
        if ("function" !== typeof bb) return void this.listen();
        let ub;
        this.disarmGestureRequest();
        try {
          ub = await bb.call(DeviceMotionEvent)
        } catch (hb) {
          throw this.wanted && "needsPermission" === this.state && this.armGestureRequest(), hb
        }
        this.wanted && ("granted" === ub ? (this.granted = !0, this.listen()) : this.setState("denied"))
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
    const tb = "controllerGyroStatusChanged",
      Jb = {
        MJ: 0,
        mJ: 0
      },
      eb = bb => {
        var ub, hb;
        return "undefined" === typeof document || (null === (ub = null === (hb = document.featurePolicy) || void 0 === hb ? void 0 : hb.allowsFeature(bb)) || void 0 === ub || ub)
      };
    class Nb {
      constructor() {
        this.processor = new rb, this.hid = void 0, this.hidBlocked = void 0, this.phone = void 0, this.phoneBlocked = void 0, this.source = null, this.pendingYawDeg = 0, this.pendingPitchDeg = 0, this.lastDrainMs = -1 / 0, this.lastHidReadingMs = -1 / 0, this.running = !1, this.phoneRunning = !1, this.syncWithSettings = bb => {
          const ub = bb.gyroAiming && Lb.g.hasConnectedPad();
          var hb, Bb;
          ub !== this.phoneRunning && (this.phoneRunning = ub, ub ? null === (hb = this.phone) || void 0 === hb || hb.start() : null === (Bb = this.phone) || void 0 === Bb || Bb.stop());
          if (bb.gyroAiming !== this.running) {
            var Ob, Gb;
            if (this.running = bb.gyroAiming, this.running) null === (Ob = this.hid) || void 0 === Ob || Ob.start().catch((bb => {
              console.warn("Could not open motion controllers", bb)
            }));
            else null === (Gb = this.hid) || void 0 === Gb || Gb.stop(), this.processor.reset(), this.source = null, this.discardPending();
            this.publishStatus()
          }
        }, this.publishStatus = () => {
          Ob.i.vp(tb, this.getStatus())
        };
        const bb = (() => {
            var bb;
            return "undefined" !== typeof navigator && window.isSecureContext && null !== (bb = navigator.hid) && void 0 !== bb ? bb : null
          })(),
          ub = eb("hid");
        this.hidBlocked = null !== bb && !ub, this.hid = bb && ub ? new Db(bb, ((bb, ub, hb) => {
          this.lastHidReadingMs = performance.now(), this.feed(bb, ub, "player", hb)
        }), this.publishStatus) : null;
        const hb = eb("accelerometer") && eb("gyroscope");
        this.phoneBlocked = gb() && !hb, this.phone = gb() && hb ? new vb(((bb, ub, hb) => {
          performance.now() - this.lastHidReadingMs >= 500 && this.feed(bb, ub, "local", hb)
        }), this.publishStatus) : null, Ob.i.subscribe(Sb.d, this.syncWithSettings), Lb.g.onConnectedPadsChanged((() => {
          this.syncWithSettings((0, Sb.e)()), this.publishStatus()
        })), this.syncWithSettings((0, Sb.e)())
      }
      isSupported() {
        return null !== this.hid || null !== this.phone
      }
      getStatus() {
        var bb, ub, hb, Bb;
        return {
          hidSupported: null !== this.hid,
          hidBlocked: this.hidBlocked,
          phoneSupported: null !== this.phone,
          phoneBlocked: this.phoneBlocked,
          controllers: null !== (bb = null === (ub = this.hid) || void 0 === ub ? void 0 : ub.getConnectedKinds()) && void 0 !== bb ? bb : [],
          phoneMotion: null !== (hb = null === (Bb = this.phone) || void 0 === Bb ? void 0 : Bb.getState()) && void 0 !== hb ? hb : "off",
          padConnected: Lb.g.hasConnectedPad()
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
        const ub = {
          yawDeg: this.pendingYawDeg,
          pitchDeg: this.pendingPitchDeg
        };
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0;
        const hb = (0, Sb.e)();
        return hb.gyroAiming && (bb => {
          let {
            activation: ub,
            isHeld: hb,
            useButton: Bb,
            gyroButton: Ob
          } = bb;
          return "always" === ub || hb("aiming" === ub ? Bb : Ob)
        })({
          activation: hb.gyroActivation,
          isHeld: bb => Yb.c.isButtonHeld(bb),
          useButton: (0, Ub.f)("use"),
          gyroButton: hb.gyroButton
        }) ? ((bb, ub) => ({
          MJ: -bb.yawDeg * ub * Hb,
          mJ: -bb.pitchDeg * ub * Hb
        }))(ub, hb.gyroSensitivity) : Jb
      }
      discardPending() {
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0
      }
      injectMotion(bb, ub) {
        this.feed(bb, ub, "local", "injected")
      }
      getCalibration() {
        return this.processor.getCalibration()
      }
      feed(bb, ub, hb, Bb) {
        this.source !== Bb && (this.processor.reset(), this.source = Bb);
        const Ob = this.processor.process(bb, ub, hb);
        this.pendingYawDeg += Ob.yawDeg, this.pendingPitchDeg += Ob.pitchDeg
      }
    }
    let sb = null;
    const Mb = () => (sb || (sb = new Nb), sb),
      mb = () => {
        const [bb, ub] = (0, Bb.useState)((() => Mb().getStatus()));
        return (0, Gb.h)(tb, ub), (0, Bb.useEffect)((() => {
          ub(Mb().getStatus())
        }), []), bb
      }
  },
  8591: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Cb,
      d: () => Yb,
      f: () => Bb,
      i: () => Lb,
      l: () => Sb,
      m: () => ab,
      n: () => lb,
      p: () => ob,
      r: () => rb,
      u: () => db,
      w: () => Kb
    });
    const Bb = bb => "dualShock4" === bb || "dualSense" === bb,
      Ob = 1356,
      Gb = 1406,
      Ub = [{
        vendorId: Ob,
        productId: 1476,
        kind: "dualShock4"
      }, {
        vendorId: Ob,
        productId: 2508,
        kind: "dualShock4"
      }, {
        vendorId: Ob,
        productId: 2976,
        kind: "dualShock4"
      }, {
        vendorId: Ob,
        productId: 3302,
        kind: "dualSense"
      }, {
        vendorId: Ob,
        productId: 3570,
        kind: "dualSense"
      }, {
        vendorId: Gb,
        productId: 8201,
        kind: "switchPro"
      }, {
        vendorId: Gb,
        productId: 8198,
        kind: "joyConLeft"
      }, {
        vendorId: Gb,
        productId: 8199,
        kind: "joyConRight"
      }],
      Lb = Ub.map((bb => {
        let {
          vendorId: ub,
          productId: hb
        } = bb;
        return {
          vendorId: ub,
          productId: hb
        }
      })),
      Yb = (bb, ub) => {
        var hb, Bb;
        return null !== (hb = null === (Bb = Ub.find((hb => hb.vendorId === bb && hb.productId === ub))) || void 0 === Bb ? void 0 : Bb.kind) && void 0 !== hb ? hb : null
      },
      Sb = {
        dualShock4: "DualShock 4",
        dualSense: "DualSense",
        switchPro: "Switch Pro Controller",
        joyConLeft: "Joy-Con (L)",
        joyConRight: "Joy-Con (R)"
      },
      ab = {
        dualSense: 0,
        dualShock4: 0,
        switchPro: 0,
        joyConRight: 1,
        joyConLeft: 2
      },
      Hb = 2e3 / 32767,
      wb = 1 / 8192,
      Zb = 936 / 13371,
      Xb = (bb, ub, hb) => ({
        x: bb.getInt16(ub, !0) * hb,
        y: bb.getInt16(ub + 2, !0) * hb,
        z: bb.getInt16(ub + 4, !0) * hb
      }),
      pb = bb => 0 === bb.x && 0 === bb.y && 0 === bb.z,
      ob = (bb, ub, hb) => null === ub ? null : "dualShock4" === bb ? 16 * (hb - ub & 65535) / 3 / 1e6 : (hb - ub >>> 0) / 3 / 1e6,
      Ab = (bb, ub) => "joyConRight" === ub ? {
        x: bb.y,
        y: -bb.z,
        z: -bb.x
      } : {
        x: -bb.y,
        y: bb.z,
        z: -bb.x
      },
      lb = (bb, ub, hb, Ob) => Bb(bb) ? ((bb, ub, hb, Bb) => {
        const Ob = ((bb, ub, hb) => "dualShock4" === bb ? 1 === ub && hb >= 63 ? 0 : 17 === ub && hb >= 65 ? 2 : null : 1 === ub && hb >= 62 ? 0 : 49 === ub && hb >= 63 ? 1 : null)(bb, ub, hb.byteLength);
        if (null === Ob) return null;
        if (2976 === Bb && 1 === ub && 0 !== (4 & hb.getUint8(30))) return null;
        const Gb = Ob + ("dualShock4" === bb ? 12 : 15),
          Ub = Xb(hb, Gb, Hb),
          Lb = Xb(hb, Gb + 6, wb);
        return pb(Ub) && pb(Lb) ? null : {
          readings: [{
            gyro: Ub,
            accel: Lb
          }],
          dtSec: null,
          sensorClock: "dualShock4" === bb ? hb.getUint16(Ob + 9, !0) : hb.getUint32(Ob + 27, !0)
        }
      })(bb, ub, hb, Ob) : ((bb, ub, hb) => {
        if (48 !== ub && 49 !== ub || hb.byteLength < 48) return null;
        const Bb = [];
        for (let Ob = 0; Ob < 3; Ob++) {
          const ub = Xb(hb, 12 + 12 * Ob, 244e-6),
            Gb = Xb(hb, 18 + 12 * Ob, Zb);
          if (pb(Gb) && pb(ub)) return null;
          Bb.push({
            gyro: Ab(Gb, bb),
            accel: Ab(ub, bb)
          })
        }
        return {
          readings: Bb,
          dtSec: .005,
          sensorClock: null
        }
      })(bb, ub, hb),
      Kb = 1,
      Wb = [0, 1, 64, 64, 0, 1, 64, 64],
      Cb = (bb, ub, hb) => new Uint8Array([15 & bb, ...Wb, ub, ...hb]),
      db = [{
        subcommand: 64,
        args: [1]
      }, {
        subcommand: 3,
        args: [48]
      }],
      rb = {
        dualShock4: [2, 5],
        dualSense: [5]
      }
  },
  7886: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => zb,
      g: () => Nb,
      i: () => Ab,
      k: () => Zb.f,
      l: () => vb,
      n: () => ib,
      o: () => lb,
      p: () => tb,
      q: () => Zb.n,
      t: () => Zb.r,
      u: () => sb,
      x: () => Zb.t,
      z: () => jb
    });
    var Bb = hb(49),
      Ob = hb(13),
      Gb = hb(16),
      Ub = hb(1348),
      Lb = hb(1184),
      Yb = hb(7857),
      Sb = hb(7888),
      ab = hb(7841),
      Hb = hb(7830),
      wb = hb(7897),
      Zb = hb(1288),
      Xb = hb(7836),
      pb = hb(8368),
      ob = hb(4134);
    const Ab = bb => !bb.repeat && !(0, pb.d)(bb.key),
      lb = "PadHidesCursor";
    let Kb = !1;
    const Wb = bb => {
        bb !== Kb && (Kb = bb, document.documentElement.classList.toggle(lb, bb))
      },
      Cb = new class {
        constructor() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
        observe(bb) {
          let ub = !1,
            hb = !1;
          bb.values.forEach(((bb, Bb) => {
            const Ob = bb >= (this.buttonsDown[Bb] ? Xb.T : Xb.S);
            Ob && !this.buttonsDown[Bb] && (ub = !0, hb = !0), this.buttonsDown[Bb] = Ob
          }));
          return [bb.leftStick, bb.rightStick].forEach(((bb, Bb) => {
            const Ob = this.stickAnchors[Bb];
            Math.hypot(bb.x, bb.y) < (Ob ? Xb.T : .3) ? this.stickAnchors[Bb] = null : (!Ob || Math.hypot(bb.x - Ob.x, bb.y - Ob.y) >= .3) && (this.stickAnchors[Bb] = {
              x: bb.x,
              y: bb.y
            }, ub = !0, hb ||= !Ob)
          })), ub && (this.lastActivityMs = bb.timestampMs), this.onlyMovedOn = ub && !hb, ub
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
    let db = null,
      rb = !1;
    const jb = () => rb;
    let nb = null,
      Db = !1,
      xb = null;
    const zb = () => xb;
    let gb = !1;
    const ib = bb => {
        if (!Cb.observe(bb)) return !1;
        if (gb && Cb.wasOnlyMoveOn() && !(0, Zb.f)()) return !1;
        gb = !1, rb = !1;
        const ub = !(0, Zb.f)();
        return ub && (db = bb, xb = !Kb && Db && nb ? {
          ...nb
        } : null), Db = !1, (0, Zb.n)("gamepad"), Wb(!0), (0, wb.m)((0, Yb.f)()), ub
      },
      vb = bb => !(0, Zb.f)() || bb === db,
      tb = () => {
        Cb.reset()
      },
      Jb = () => {
        const bb = Ob.d.get("activeInputDevice"),
          ub = "gamepad" === bb ? Hb.g.getActivePad() : null;
        return {
          device: bb,
          inGame: (0, Lb.m)(),
          padMovesMouse: null !== ub && (0, ab.h)(ub.id)
        }
      },
      eb = bb => {
        document.pointerLockElement ? nb = null : (nb ??= {
          x: 0,
          y: 0
        }, nb.x = bb.clientX, nb.y = bb.clientY)
      },
      Nb = () => {
        const bb = new ob.b,
          ub = ub => {
            bb.reset(), gb = !1, (0, Zb.n)(ub)
          },
          hb = bb => {
            if (bb.isTrusted) {
              if (bb instanceof KeyboardEvent) {
                if ((0, Zb.k)(bb), !Ab(bb)) return;
                rb = !0
              }
              if (bb instanceof PointerEvent && "touch" === bb.pointerType) return nb = null, void ub("touch");
              bb instanceof PointerEvent && (eb(bb), Db = !0), ("pointerdown" !== bb.type || (bb => {
                let {
                  device: ub,
                  inGame: hb,
                  padMovesMouse: Bb
                } = bb;
                return !("gamepad" === ub && Bb && hb)
              })(Jb())) && ub("keyboardMouse")
            }
          },
          Bb = bb => {
            bb.isTrusted && (nb = null, ub("touch"))
          },
          Ub = bb => {
            bb.isTrusted && "touch" !== bb.pointerType && !bb.relatedTarget && (nb = null)
          },
          Lb = hb => {
            if (!hb.isTrusted || "touch" === hb.pointerType) return;
            eb(hb);
            const Bb = hb.movementX || 0,
              Gb = hb.movementY || 0;
            if (0 === Bb && 0 === Gb) return;
            if (Db = !0, Wb(!1), "keyboardMouse" === Ob.d.get("activeInputDevice")) return;
            const Ub = Cb.isHolding(hb.timeStamp),
              Lb = Jb(),
              Yb = (bb => {
                let {
                  device: ub,
                  inGame: hb,
                  padMovesMouse: Bb,
                  padHolding: Ob
                } = bb;
                return ("gamepad" !== ub || !Bb) && "keyboardMouse" !== ub && (hb || !Ob)
              })({
                ...Lb,
                inGame: Lb.inGame && (0, Sb.c)(),
                padHolding: Ub
              });
            Yb && bb.add(Bb, Gb, hb.timeStamp) && (ub("keyboardMouse"), gb = Cb.isStickOffRest())
          },
          Yb = bb => {
            Wb("gamepad" === bb)
          },
          ab = {
            capture: !0,
            passive: !0
          };
        window.addEventListener("keydown", hb, ab), window.addEventListener("pointerdown", hb, ab), window.addEventListener("wheel", hb, ab), window.addEventListener("touchstart", Bb, ab), window.addEventListener("pointermove", Lb, ab), window.addEventListener("pointerout", Ub, ab);
        const Hb = Gb.i.subscribe("appManagerUpdated|activeInputDevice", Yb);
        return Yb(Ob.d.get("activeInputDevice")), () => {
          window.removeEventListener("keydown", hb, ab), window.removeEventListener("pointerdown", hb, ab), window.removeEventListener("wheel", hb, ab), window.removeEventListener("touchstart", Bb, ab), window.removeEventListener("pointermove", Lb, ab), window.removeEventListener("pointerout", Ub, ab), nb = null, Gb.i.unsubscribe(Hb), Wb(!1)
        }
      },
      sb = () => {
        const [bb, ub] = (0, Bb.useState)(Yb.f);
        return (0, Ub.h)(Yb.c, (() => {
          ub((0, Yb.f)())
        })), (0, Ub.h)(Hb.c, (() => {
          ub((0, Yb.f)())
        })), bb
      }
  },
  7859: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Bb,
      d: () => Ob
    });
    const Bb = ["xbox", "playstation", "nintendo", "steamdeck", "generic"],
      Ob = bb => Bb.includes(bb)
  },
  7888: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Sb,
      c: () => ab,
      g: () => Yb,
      i: () => Lb
    });
    var Bb = hb(13),
      Ob = hb(1537),
      Gb = hb(1625);
    const Ub = new Map,
      Lb = (bb, ub) => (Ub.has(bb) && console.warn(`Gameplay blocker "${bb}" registered twice; the newer one replaces it.`), Ub.set(bb, ub), () => {
        Ub.get(bb) === ub && Ub.delete(bb)
      }),
      Yb = () => (0, Gb.d)(document.activeElement),
      Sb = function() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const [ub, hb] of Ub)
          if (!bb.includes(ub) && hb()) return ub;
        return null
      },
      ab = function() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return "inGame" === Bb.d.get("gameState") && (!(0, Ob.q)() && (!Yb() && null === Sb(bb)))
      }
  },
  7836: (bb, ub, hb) => {
    hb.d(ub, {
      $: () => db,
      A: () => Kb,
      D: () => gb,
      H: () => Wb,
      L: () => Ab,
      M: () => ob,
      P: () => Sb,
      S: () => wb,
      T: () => Zb,
      U: () => Ob,
      X: () => Bb,
      c: () => vb,
      d: () => zb,
      db: () => xb,
      h: () => ab,
      hb: () => ib,
      ib: () => Cb,
      j: () => Yb,
      l: () => Lb,
      p: () => jb,
      s: () => lb,
      t: () => rb,
      u: () => Gb,
      x: () => Hb
    });
    const Bb = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "View", "Menu", "LS", "RS", "Up", "Down", "Left", "Right", "Home"],
      Ob = Bb.length,
      Gb = function() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return {
          values: new Array(Ob).fill(0),
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
      Ub = Object.fromEntries(Bb.map(((bb, ub) => [bb, ub]))),
      Lb = bb => Ub[bb],
      Yb = function(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .95;
        const Bb = Math.hypot(bb.x, bb.y);
        if (Bb <= ub) return {
          x: 0,
          y: 0
        };
        const Ob = Math.min(1, (Bb - ub) / Math.max(1e-4, hb - ub));
        return {
          x: bb.x / Bb * Ob,
          y: bb.y / Bb * Ob
        }
      },
      Sb = ["exponential", "linear", "boost"],
      ab = (bb, ub) => {
        const hb = Math.hypot(bb.x, bb.y);
        if (0 === hb) return {
          x: 0,
          y: 0
        };
        const Bb = ((bb, ub) => {
          const hb = Math.max(0, Math.min(1, bb));
          return "linear" === ub ? hb : hb * hb
        })(hb, ub);
        return {
          x: bb.x / hb * Bb,
          y: bb.y / hb * Bb
        }
      },
      Hb = .5,
      wb = .3,
      Zb = .2,
      Xb = Lb("LT"),
      pb = Lb("RT"),
      ob = bb => bb === Xb || bb === pb,
      Ab = (bb, ub) => {
        const hb = Lb(ub);
        return ob(hb) ? bb[hb] > .35 : bb[hb] >= Hb
      },
      lb = (bb, ub) => bb.map(((bb, hb) => ob(hb) ? ub[hb] ? bb > .35 : bb >= .55 : bb >= Hb)),
      Kb = ["Up", "Down", "Left", "Right"],
      Wb = bb => Kb.includes(bb),
      Cb = function(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
        return Math.hypot(bb.x, bb.y) < ub ? null : Math.abs(bb.x) > Math.abs(bb.y) ? bb.x > 0 ? "Right" : "Left" : bb.y > 0 ? "Down" : "Up"
      },
      db = {
        initialDelayMs: 350,
        intervalMs: 120
      },
      rb = {
        initialDelayMs: 350,
        intervalMs: 150
      },
      jb = ["default", "slow", "off"],
      nb = 800,
      Db = 250,
      xb = (bb, ub) => "off" === ub ? null : "slow" === ub ? {
        initialDelayMs: Math.max(bb.initialDelayMs, nb),
        intervalMs: Math.max(bb.intervalMs, Db)
      } : bb;
    class zb {
      constructor(bb) {
        this.readTiming = bb, this.MS = !1, this.timing = null, this.nextFireMs = 0
      }
      update(bb, ub) {
        return bb ? this.MS ? !!(this.timing && ub >= this.nextFireMs) && (this.nextFireMs = ub + this.timing.intervalMs, !0) : (this.MS = !0, this.timing = this.readTiming(), this.nextFireMs = ub + (null !== (hb = null === (Bb = this.timing) || void 0 === Bb ? void 0 : Bb.initialDelayMs) && void 0 !== hb ? hb : 0), !0) : (this.MS = !1, !1);
        var hb, Bb
      }
      reset() {
        this.MS = !1
      }
    }
    const gb = {
        initialDelayMs: 350,
        intervalMs: 80
      },
      ib = {
        initialDelayMs: 400,
        intervalMs: 90
      };
    class vb {
      constructor(bb) {
        this.timer = bb, this.direction = null
      }
      update(bb, ub) {
        return bb !== this.direction && (this.timer.reset(), this.direction = bb), this.timer.update(null !== bb, ub) ? bb : null
      }
      reset() {
        this.timer.reset(), this.direction = null
      }
    }
  },
  8424: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ob,
      f: () => Gb
    });
    let Bb = -1 / 0;
    const Ob = () => {
        Bb = performance.now()
      },
      Gb = bb => performance.now() - Bb < bb
  },
  8377: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Ub,
      f: () => Gb
    });
    var Bb = hb(7857),
      Ob = hb(7836);
    const Gb = bb => (0, Ob.db)(bb, (0, Bb.e)().buttonRepeat),
      Ub = bb => new Ob.d((() => Gb(bb)))
  },
  7874: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Yb,
      f: () => Gb,
      i: () => Lb
    });
    var Bb = hb(16),
      Ob = hb(7857);
    const Gb = (bb, ub) => "OpenShop" === bb ? "shop" === ub : "OpenLobbyLeaderboard" !== bb || "leaderboard" === ub;
    let Ub = !1;
    const Lb = bb => {
        bb !== Ub && (Ub = bb, Bb.i.vp(Ob.c, (0, Ob.e)()))
      },
      Yb = () => ((bb, ub) => "shop" === bb && ub ? "shop" : "leaderboard")((0, Ob.e)().leaderboardButton, Ub)
  },
  7867: (bb, ub, hb) => {
    hb.d(ub, {
      $: () => ob,
      C: () => wb,
      G: () => Zb,
      H: () => Hb,
      K: () => Wb,
      O: () => Sb,
      Q: () => Ab,
      T: () => Db,
      X: () => Kb,
      Y: () => pb,
      ab: () => Xb,
      b: () => Jb,
      bb: () => lb,
      db: () => ib,
      e: () => Nb,
      g: () => xb,
      gb: () => Gb,
      i: () => Ub,
      ib: () => db,
      j: () => nb,
      jb: () => eb,
      k: () => rb,
      kb: () => jb,
      m: () => vb,
      q: () => tb,
      t: () => ab,
      w: () => Yb,
      y: () => Lb,
      z: () => Cb
    });
    var Bb = hb(7850),
      Ob = hb(7836);
    const Gb = {
        min: 25,
        max: 500,
        step: 5
      },
      Ub = {
        min: 25,
        max: 100,
        step: 5
      },
      Lb = {
        min: 0,
        max: .4,
        step: .01
      },
      Yb = {
        min: 25,
        max: 300,
        step: 5
      },
      Sb = {
        min: .5,
        max: 6,
        step: .1
      },
      ab = (bb, ub) => {
        if (!Number.isFinite(bb)) return ub.min;
        const hb = ub.min + Math.round((bb - ub.min) / ub.step) * ub.step,
          Bb = Math.min(ub.max, Math.max(ub.min, hb));
        return Math.round(1e3 * Bb) / 1e3
      },
      Hb = bb => `${Math.round(bb)}%`,
      wb = bb => Hb(100 * bb),
      Zb = bb => `${bb.toFixed(1)}\xd7`,
      Xb = [{
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
      pb = [{
        value: "exponential",
        labelKey: "controller:settingsCurveExponential"
      }, {
        value: "linear",
        labelKey: "controller:settingsCurveLinear"
      }, {
        value: "boost",
        labelKey: "controller:settingsCurveBoost"
      }],
      ob = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "focus",
        labelKey: "controller:settingsMenuNavFocus"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      Ab = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "slot",
        labelKey: "controller:settingsInventoryNavSlot"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      lb = [{
        value: "wheel",
        labelKey: "controller:settingsQuickChatWheel"
      }, {
        value: "off",
        labelKey: "controller:settingsQuickChatOff"
      }],
      Kb = [{
        value: "shop",
        labelKey: "controller:settingsLeaderboardButtonShop"
      }, {
        value: "leaderboard",
        labelKey: "controller:settingsLeaderboardButtonLeaderboard"
      }],
      Wb = [{
        value: "always",
        labelKey: "controller:settingsGyroAlways"
      }, {
        value: "aiming",
        labelKey: "controller:settingsGyroWhileAiming"
      }, {
        value: "button",
        labelKey: "controller:settingsGyroWhileButton"
      }],
      Cb = [{
        value: "tapHold",
        labelKey: "controller:settingsEmoteButtonTapHold"
      }, {
        value: "wheel",
        labelKey: "controller:settingsEmoteButtonWheel"
      }],
      db = [{
        value: "toggle",
        labelKey: "controller:settingsSneakToggle"
      }, {
        value: "hold",
        labelKey: "controller:settingsSneakHold"
      }],
      rb = [{
        value: "default",
        labelKey: "controller:settingsButtonRepeatDefault"
      }, {
        value: "slow",
        labelKey: "controller:settingsButtonRepeatSlow"
      }, {
        value: "off",
        labelKey: "controller:settingsButtonRepeatOff"
      }],
      jb = [{
        value: "short",
        labelKey: "controller:settingsTapHoldShort"
      }, {
        value: "medium",
        labelKey: "controller:settingsTapHoldMedium"
      }, {
        value: "long",
        labelKey: "controller:settingsTapHoldLong"
      }],
      nb = [{
        value: "hold",
        labelKey: "controller:settingsAttackHold"
      }, {
        value: "toggle",
        labelKey: "controller:settingsAttackToggle"
      }],
      Db = {
        southpaw: "controller:settingsLayoutSouthpaw",
        triggersSwapped: "controller:settingsLayoutTriggersSwapped"
      },
      xb = {
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
      zb = {
        gameplay: "controller:settingsGroupGameplay",
        menu: "controller:settingsGroupMenus",
        inventory: "controller:settingsGroupInventory",
        keyboard: "controller:settingsGroupKeyboard"
      },
      gb = [{
        kind: "fixed",
        stick: "move",
        labelKey: "controller:settingsActionMove"
      }, {
        kind: "fixed",
        stick: "look",
        labelKey: "controller:settingsActionLook"
      }],
      ib = Bb.b.map((bb => {
        let {
          group: ub,
          actions: hb
        } = bb;
        const Bb = hb.map((bb => ({
          kind: "action",
          action: bb
        })));
        return {
          titleKey: zb[ub],
          rows: "gameplay" === ub ? [...gb, ...Bb] : Bb
        }
      })),
      vb = Ob.X.filter((bb => "Home" !== bb)),
      tb = 1e4;
    class Jb {
      constructor(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
        this.cancelButton = bb, this.openButton = ub, this.accepts = hb, this.startMs = null, this.ignoredUntilMs = new Map, this.cancelDownAtMs = null
      }
      update(bb, ub) {
        var hb;
        this.updateIgnored(bb, ub);
        const Bb = ub - (null !== (hb = this.startMs) && void 0 !== hb ? hb : ub) >= 250;
        for (const Ob of vb)
          if (Ob !== this.cancelButton && Bb && !this.ignoredUntilMs.has(Ob) && bb.wasPressed(Ob) && this.accepts(Ob)) return {
            kind: "bind",
            button: Ob
          };
        if (this.ignoredUntilMs.has(this.cancelButton)) return null;
        if (bb.wasPressed(this.cancelButton)) {
          if (!this.accepts(this.cancelButton)) return {
            kind: "cancel"
          };
          this.cancelDownAtMs = ub
        }
        return null === this.cancelDownAtMs ? null : bb.isHeld(this.cancelButton) && ub - this.cancelDownAtMs >= 700 ? (this.cancelDownAtMs = null, {
          kind: "bind",
          button: this.cancelButton
        }) : bb.wasReleased(this.cancelButton) ? (this.cancelDownAtMs = null, {
          kind: "cancel"
        }) : null
      }
      getBindHoldProgress(bb) {
        return null === this.cancelDownAtMs ? 0 : Math.min(1, (bb - this.cancelDownAtMs) / 700)
      }
      updateIgnored(bb, ub) {
        if (null === this.startMs) {
          this.startMs = ub;
          for (const ub of vb) bb.isDown(ub) && this.ignoredUntilMs.set(ub, 1 / 0);
          this.openButton && !this.ignoredUntilMs.has(this.openButton) && this.ignoredUntilMs.set(this.openButton, ub + 250)
        }
        for (const [hb, Bb] of this.ignoredUntilMs) {
          const Ob = bb.isDown(hb);
          Bb === 1 / 0 ? Ob || hb !== this.openButton ? Ob || this.ignoredUntilMs.delete(hb) : this.ignoredUntilMs.set(hb, ub + 250) : ub >= Bb ? this.ignoredUntilMs.delete(hb) : Ob && this.ignoredUntilMs.set(hb, 1 / 0)
        }
      }
    }
    const eb = 6e3;
    class Nb {
      constructor() {
        this.downAtMs = null, this.pressesAtMs = []
      }
      update(bb, ub) {
        let {
          pressed: hb,
          MS: Bb
        } = bb;
        if (hb) {
          const bb = this.pressesAtMs.at(-1);
          if (this.pressesAtMs = void 0 !== bb && ub - bb < 1500 ? [...this.pressesAtMs, ub] : [ub], this.pressesAtMs.length >= 3) return 1
        }
        return Bb ? (this.downAtMs ??= ub, Math.min(1, (ub - this.downAtMs) / 1500)) : (this.downAtMs = null, 0)
      }
    }
  },
  4800: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Gb,
      h: () => Ub
    });
    var Bb = hb(49);
    const Ob = new WeakMap,
      Gb = bb => {
        var ub;
        const hb = bb.closest("[data-pad-slider]");
        return hb && null !== (ub = Ob.get(hb)) && void 0 !== ub ? ub : null
      },
      Ub = (bb, ub) => {
        const hb = (0, Bb.useRef)(ub);
        hb.current = ub, (0, Bb.useEffect)((() => {
          if (bb.current) return ((bb, ub) => (Ob.set(bb, ub), () => {
            Ob.get(bb) === ub && Ob.delete(bb)
          }))(bb.current, {
            adjust: bb => {
              hb.current.adjust(bb)
            },
            setFraction: bb => {
              hb.current.setFraction(bb)
            },
            endDrag: () => {
              hb.current.endDrag()
            }
          })
        }), [bb])
      }
  },
  8449: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Gb,
      d: () => Ob
    });
    var Bb = hb(16);
    const Ob = "localBlockBroken";

    function Gb() {
      return {
        onPlayerChangeBlock(bb, ub, hb, Gb, Ub, Lb) {
          "Air" === Lb && Bb.i.vp(Ob)
        }
      }
    }
  },
  7906: (bb, ub, hb) => {
    var Bb = {
      "./nintendo/A.svg": 7914,
      "./nintendo/B.svg": 7922,
      "./nintendo/Down.svg": 7931,
      "./nintendo/Home.svg": 7940,
      "./nintendo/LB.svg": 7946,
      "./nintendo/LS.svg": 7952,
      "./nintendo/LT.svg": 7961,
      "./nintendo/Left.svg": 7968,
      "./nintendo/LeftStick.svg": 7971,
      "./nintendo/Menu.svg": 7974,
      "./nintendo/RB.svg": 7980,
      "./nintendo/RS.svg": 7989,
      "./nintendo/RT.svg": 7996,
      "./nintendo/Right.svg": 8004,
      "./nintendo/RightStick.svg": 8013,
      "./nintendo/Up.svg": 8020,
      "./nintendo/View.svg": 8024,
      "./nintendo/X.svg": 8030,
      "./nintendo/Y.svg": 8036,
      "./playstation/A.svg": 8042,
      "./playstation/B.svg": 8046,
      "./playstation/Down.svg": 8048,
      "./playstation/Home.svg": 8053,
      "./playstation/LB.svg": 8055,
      "./playstation/LS.svg": 8060,
      "./playstation/LT.svg": 8068,
      "./playstation/Left.svg": 8075,
      "./playstation/LeftStick.svg": 8082,
      "./playstation/Menu.svg": 8091,
      "./playstation/RB.svg": 8099,
      "./playstation/RS.svg": 8108,
      "./playstation/RT.svg": 8111,
      "./playstation/Right.svg": 8117,
      "./playstation/RightStick.svg": 8122,
      "./playstation/Up.svg": 8124,
      "./playstation/View.svg": 8133,
      "./playstation/X.svg": 8135,
      "./playstation/Y.svg": 8142,
      "./steamdeck/A.svg": 8147,
      "./steamdeck/B.svg": 8151,
      "./steamdeck/Down.svg": 8159,
      "./steamdeck/Home.svg": 8166,
      "./steamdeck/LB.svg": 8174,
      "./steamdeck/LS.svg": 8183,
      "./steamdeck/LT.svg": 8189,
      "./steamdeck/Left.svg": 8197,
      "./steamdeck/LeftStick.svg": 8199,
      "./steamdeck/Menu.svg": 8205,
      "./steamdeck/RB.svg": 8213,
      "./steamdeck/RS.svg": 8221,
      "./steamdeck/RT.svg": 8229,
      "./steamdeck/Right.svg": 8237,
      "./steamdeck/RightStick.svg": 8245,
      "./steamdeck/Up.svg": 8252,
      "./steamdeck/View.svg": 8256,
      "./steamdeck/X.svg": 8258,
      "./steamdeck/Y.svg": 8260,
      "./xbox/A.svg": 8267,
      "./xbox/B.svg": 8273,
      "./xbox/Down.svg": 8278,
      "./xbox/Home.svg": 8284,
      "./xbox/LB.svg": 8290,
      "./xbox/LS.svg": 8292,
      "./xbox/LT.svg": 8297,
      "./xbox/Left.svg": 8301,
      "./xbox/LeftStick.svg": 8308,
      "./xbox/Menu.svg": 8310,
      "./xbox/RB.svg": 8318,
      "./xbox/RS.svg": 8322,
      "./xbox/RT.svg": 8329,
      "./xbox/Right.svg": 8337,
      "./xbox/RightStick.svg": 8344,
      "./xbox/Up.svg": 8347,
      "./xbox/View.svg": 8352,
      "./xbox/X.svg": 8357,
      "./xbox/Y.svg": 8362
    };

    function Ob(bb) {
      var ub = Gb(bb);
      return hb(ub)
    }

    function Gb(bb) {
      if (!hb.o(Bb, bb)) {
        var ub = new Error("Cannot find module '" + bb + "'");
        throw ub.code = "MODULE_NOT_FOUND", ub
      }
      return Bb[bb]
    }
    Ob.keys = function() {
      return Object.keys(Bb)
    }, Ob.resolve = Gb, bb.exports = Ob, Ob.id = 7906
  },
  7914: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/A.926fb88933484dfbde14.svg"
  },
  7922: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/B.9f5ec099f78f84e44427.svg"
  },
  7931: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  7940: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  7946: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/LB.3a20b15927b55d5d8b60.svg"
  },
  7952: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  7961: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/LT.9fdc5e69011b9d41f50a.svg"
  },
  7968: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  7971: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  7974: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Menu.c903a662eb685211e52e.svg"
  },
  7980: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/RB.bba470ddb76ceec5d168.svg"
  },
  7989: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  7996: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/RT.e5a9fbcc3c79550111ca.svg"
  },
  8004: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8013: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8020: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8024: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/View.0c9378b5d720a636d50d.svg"
  },
  8030: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/X.c9377519af94e6dce1d7.svg"
  },
  8036: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Y.62d8c17731dd2e172426.svg"
  },
  8042: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/A.958a6de9474f8d0c9caf.svg"
  },
  8046: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/B.d05958bfa88a1162b47a.svg"
  },
  8048: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Down.db68fb3980768eb54671.svg"
  },
  8053: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  8055: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/LB.37a3c5128c958ec2a0c2.svg"
  },
  8060: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/LS.15b0cc5bf3f2fe7bbd8b.svg"
  },
  8068: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/LT.5412ae5222c69f8c833f.svg"
  },
  8075: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Left.4457b2895ce94a5df32e.svg"
  },
  8082: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8091: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Menu.1e8427f8133c9d456c53.svg"
  },
  8099: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/RB.c96c4aa2590209e930c7.svg"
  },
  8108: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/RS.8d70d147cf1ab136e845.svg"
  },
  8111: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/RT.1e4691bb5a7c049693df.svg"
  },
  8117: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Right.a1e101413040c540b879.svg"
  },
  8122: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8124: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Up.7544a65ad4f611a55775.svg"
  },
  8133: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/View.003cae39de89cae0b9d8.svg"
  },
  8135: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/X.d88b6e62dd8fb4bda32a.svg"
  },
  8142: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Y.428d3e70775877892f82.svg"
  },
  8147: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8151: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8159: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8166: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Home.ea8b009cfa9562aa644e.svg"
  },
  8174: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/LB.f283d355d22fc107d6d6.svg"
  },
  8183: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8189: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/LT.13e66c122e7ee04bb876.svg"
  },
  8197: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8199: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8205: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Menu.90fc4e918900eb5062a0.svg"
  },
  8213: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/RB.918a7f16dc054d96b6f3.svg"
  },
  8221: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8229: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/RT.a0523211130959598bed.svg"
  },
  8237: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8245: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8252: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8256: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/View.0bc952e292c28c3baac2.svg"
  },
  8258: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8260: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  },
  8267: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8273: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8278: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8284: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Home.8898f76b20962fe52ab7.svg"
  },
  8290: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/LB.689ba3703ae248f2e4cc.svg"
  },
  8292: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8297: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/LT.9c2d10d335ab5c590525.svg"
  },
  8301: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8308: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8310: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Menu.9e485791ea97009871ca.svg"
  },
  8318: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/RB.7ee5ce48dd551f993f80.svg"
  },
  8322: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8329: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/RT.903ecadc55a9e9e00f07.svg"
  },
  8337: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8344: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8347: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8352: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/View.3c5eeb34f0413bde4a65.svg"
  },
  8357: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8362: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);