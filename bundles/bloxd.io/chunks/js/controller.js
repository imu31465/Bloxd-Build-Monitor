export const id = 28;
export const ids = [28];
export const modules = {
  4609: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => wz,
      d: () => Pz,
      g: () => Dz,
      h: () => Bz
    });
    var Fz = sz(65),
      Wz = sz(4616),
      Xz = sz(4022),
      Oz = sz(1333),
      oz = sz(4636),
      vz = sz(1020),
      Uz = sz.n(vz),
      Kz = sz(1319),
      uz = sz(1664),
      Nz = sz(4644),
      bz = sz(1087);

    function wz(zz) {
      let {
        label: tz,
        onClick: sz,
        checked: Fz,
        circleInfoText: Wz,
        className: oz,
        disabled: vz,
        note: Kz
      } = zz;
      return (0, bz.jsxs)("div", {
        "aria-disabled": vz || void 0,
        "data-pad-focusable": !0,
        className: Uz()("SettingBox CheckboxContainer", {
          [oz]: oz,
          SettingBoxDisabled: vz
        }),
        onClick: () => {
          vz || sz(!Fz)
        },
        children: [(0, bz.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, bz.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, bz.jsx)(Xz.e, {
              className: "SettingsCheckbox",
              checked: Fz,
              disabled: vz,
              onChange: () => {}
            })
          }), (0, bz.jsxs)("div", {
            className: "CheckboxText",
            children: [tz, Wz && (0, bz.jsx)("span", {
              onClick: zz => zz.stopPropagation(),
              children: (0, bz.jsx)(Oz.d, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: Wz
              })
            })]
          })]
        }), Kz && (0, bz.jsx)("div", {
          className: "SettingNote",
          children: Kz
        })]
      })
    }

    function Dz(zz) {
      let {
        name: tz,
        onChange: sz,
        min: Wz,
        max: Xz,
        step: oz,
        initValue: vz,
        circleInfoText: Kz,
        format: uz,
        className: Nz,
        padStep: wz,
        disabled: Dz = !1,
        selectableMax: gz,
        cappedNote: Bz,
        onChangeComplete: Pz
      } = zz;
      const [rz, Yz] = (0, Fz.useState)(vz), xz = (0, Fz.useRef)(vz);
      (0, Fz.useEffect)((() => {
        xz.current = vz, Yz(vz)
      }), [vz]);
      const mz = void 0 !== gz && gz < Xz,
        Jz = mz ? {
          "--slider-selectable": (gz - Wz) / (Xz - Wz)
        } : void 0;
      return (0, bz.jsxs)("div", {
        className: Uz()("SettingBox SettingsSliderDiv", {
          [Nz]: Nz,
          SettingBoxDisabled: Dz,
          SliderCapped: mz
        }),
        style: Jz,
        children: [(0, bz.jsxs)("div", {
          className: "SliderText",
          children: [`${tz}: ${uz?uz(rz):rz}`, Kz && (0, bz.jsx)(Oz.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Kz
          })]
        }), (0, bz.jsx)("div", {
          className: "SliderDiv",
          children: (0, bz.jsx)(Hz, {
            value: rz,
            min: Wz,
            max: Xz,
            step: oz,
            onChange: zz => {
              if (mz && zz >= gz && rz === gz) return;
              const tz = mz ? Math.min(zz, gz) : zz;
              xz.current = tz, Yz(tz), sz(tz)
            },
            onChangeComplete: Pz && (() => {
              Pz(xz.current)
            }),
            format: uz,
            padStep: wz,
            disabled: Dz
          })
        }), mz && Bz && (0, bz.jsx)("div", {
          className: "SettingNote",
          children: Bz
        })]
      })
    }
    const gz = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function Hz(zz) {
      var tz;
      let {
        value: sz,
        min: Xz,
        max: Oz,
        step: oz,
        onChange: vz,
        orientation: Uz,
        reverse: Kz,
        setIsChanging: uz,
        tooltip: wz,
        labels: Dz,
        handleLabel: Hz,
        format: Bz,
        onChangeStart: Pz,
        onChangeComplete: rz,
        padStep: Yz,
        disabled: xz = !1
      } = zz;
      const mz = (0, Fz.useRef)(null),
        Jz = (0, Fz.useRef)(null);
      (0, Fz.useLayoutEffect)((() => {
        var zz, tz, sz;
        const Fz = null !== (zz = null === (tz = mz.current) || void 0 === tz ? void 0 : tz.querySelector(".rangeslider")) && void 0 !== zz ? zz : null;
        null === Fz || void 0 === Fz || Fz.setAttribute("data-pad-slider", ""), null === Fz || void 0 === Fz || Fz.setAttribute("data-pad-focusable", ""), null === Fz || void 0 === Fz || null === (sz = Fz.querySelector(".rangeslider__handle")) || void 0 === sz || sz.setAttribute("data-pad-slider-handle", ""), Jz.current = Fz
      }), []), (0, Fz.useLayoutEffect)((() => {
        var zz, tz;
        xz ? null === (zz = Jz.current) || void 0 === zz || zz.setAttribute("aria-disabled", "true") : null === (tz = Jz.current) || void 0 === tz || tz.removeAttribute("aria-disabled")
      }), [xz]);
      const Iz = (null !== (tz = String(oz).split(".")[1]) && void 0 !== tz ? tz : "").length,
        Cz = zz => {
          const tz = Number((Math.round((zz - Xz) / oz) * oz + Xz).toFixed(Iz));
          return Math.min(Oz, Math.max(Xz, tz))
        },
        ez = (0, Fz.useRef)(rz);
      ez.current = rz, (0, Fz.useEffect)((() => {
        const zz = mz.current;
        if (!zz) return;
        const tz = zz => {
          var tz;
          gz.has(zz.key) && (null === (tz = ez.current) || void 0 === tz || tz.call(ez))
        };
        return zz.addEventListener("keyup", tz), () => {
          zz.removeEventListener("keyup", tz)
        }
      }), []);
      const Zz = (0, Fz.useRef)(!1);
      return (0, Nz.g)(Jz, {
        adjust: zz => {
          if (xz) return;
          const tz = null !== Yz && void 0 !== Yz ? Yz : Math.max(oz, Math.round((Oz - Xz) / 20 / oz) * oz),
            Fz = Cz(sz + zz * tz * (Kz ? -1 : 1));
          Fz !== sz && (null === Pz || void 0 === Pz || Pz(), vz(Fz), null === rz || void 0 === rz || rz())
        },
        setFraction: zz => {
          if (xz) return;
          const tz = Cz(Xz + (Kz ? 1 - zz : zz) * (Oz - Xz));
          tz !== sz && (Zz.current || (Zz.current = !0, null === Pz || void 0 === Pz || Pz()), vz(tz))
        },
        endDrag: () => {
          Zz.current && (Zz.current = !1, null === rz || void 0 === rz || rz())
        }
      }), (0, bz.jsx)("div", {
        ref: mz,
        style: {
          display: "contents"
        },
        children: (0, bz.jsx)(Wz.c, {
          value: sz,
          min: Xz,
          max: Oz,
          step: oz,
          onChange: vz,
          orientation: Uz,
          reverse: Kz,
          tooltip: wz,
          labels: Dz,
          handleLabel: Hz,
          format: Bz,
          onChangeStart: () => {
            null === Pz || void 0 === Pz || Pz(), null === uz || void 0 === uz || uz(!0)
          },
          onChangeComplete: () => {
            null === uz || void 0 === uz || uz(!1), null === rz || void 0 === rz || rz()
          }
        })
      })
    }
    async function Bz() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const tz = Kz.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: "",
        unlockPointerKey: zz
      });
      !0 === await tz.getResult() && (0, uz.reloadBloxd)()
    }

    function Pz(zz) {
      let {
        label: tz,
        options: sz,
        value: Fz,
        onChange: Wz,
        circleInfoText: Xz
      } = zz;
      return (0, bz.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, bz.jsxs)("div", {
          className: "SliderText",
          children: [tz, Xz && (0, bz.jsx)(Oz.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Xz
          })]
        }), (0, bz.jsx)(oz.b, {
          ariaLabel: tz,
          options: sz,
          value: Fz,
          onChange: Wz
        })]
      })
    }
  },
  4636: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Oz
    });
    var Fz = sz(1020),
      Wz = sz.n(Fz),
      Xz = sz(1087);

    function Oz(zz) {
      let {
        options: tz,
        value: sz,
        onChange: Fz,
        ariaLabel: Oz,
        className: oz,
        reselectable: vz = !1,
        keepsFocus: Uz = !1
      } = zz;
      return (0, Xz.jsx)("div", {
        className: Wz()("SegmentedToggle", oz),
        role: "group",
        "aria-label": Oz,
        children: tz.map((zz => {
          const tz = zz.value === sz;
          return (0, Xz.jsx)("button", {
            type: "button",
            "aria-pressed": tz,
            "aria-label": zz.ariaLabel,
            title: zz.ariaLabel,
            className: Wz()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: tz
            }),
            onMouseDown: Uz ? zz => {
              zz.preventDefault()
            } : void 0,
            onClick: () => {
              tz && !vz || Fz(zz.value)
            },
            children: zz.label
          }, zz.value)
        }))
      })
    }
  },
  7687: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Wz,
      f: () => Xz,
      i: () => Nz,
      j: () => uz,
      n: () => Uz,
      p: () => oz,
      s: () => Fz,
      t: () => bz,
      v: () => wz
    });
    const Fz = ["menuConfirm", "menuBack", "menuTabPrevious", "menuTabNext", "menuPageUp", "menuPageDown", "menuSecondary", "menuToggleCursor"],
      Wz = [{
        group: "gameplay",
        actions: ["jump", "sneak", "sneakToggle", "sprint", "attack", "use", "hotbarPrevious", "hotbarNext", "inventory", "actionButton", "perspective", "pickBlock", "drop", "emoteWheel", "chat", "pause", "leaderboard"]
      }, {
        group: "menu",
        actions: Fz
      }, {
        group: "inventory",
        actions: ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryClose", "inventoryPanelPrevious", "inventoryPanelNext", "inventoryDrop", "inventoryHotbarSwap"]
      }, {
        group: "keyboard",
        actions: ["keyboardType", "keyboardBackspace", "keyboardSpace", "keyboardCaretLeft", "keyboardCaretRight", "keyboardShift", "keyboardSymbols", "keyboardSubmit", "keyboardClose", "keyboardChannel"]
      }],
      Xz = {
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
      Oz = ["pickBlock", "perspective"],
      oz = zz => Oz.includes(zz) ? Oz : [zz],
      vz = Object.fromEntries(Wz.flatMap((zz => {
        let {
          group: tz,
          actions: sz
        } = zz;
        return sz.map((zz => [zz, tz]))
      }))),
      Uz = zz => vz[zz],
      Kz = {
        pause: ["menu"],
        leaderboard: ["menu"],
        inventory: ["menu"],
        menuPageUp: ["inventory"],
        menuPageDown: ["inventory"]
      },
      uz = zz => {
        var tz;
        return [Uz(zz), ...null !== (tz = Kz[zz]) && void 0 !== tz ? tz : []]
      },
      Nz = new Set(["menu", "inventory", "keyboard"]),
      bz = {
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
      wz = new Set(["forward", "backward", "left", "right"])
  },
  7682: (zz, tz, sz) => {
    sz.d(tz, {
      B: () => Cz,
      E: () => Kz,
      G: () => Iz,
      I: () => Gz,
      c: () => Bz,
      e: () => Yz,
      f: () => Nz,
      h: () => bz,
      i: () => cz,
      k: () => Zz,
      m: () => ez,
      o: () => rz,
      r: () => Tz,
      t: () => Jz,
      x: () => Pz
    });
    var Fz = sz(7687),
      Wz = sz(7691),
      Xz = sz(7674),
      Oz = sz(7713);
    const oz = zz => "pickBlock" === zz ? "perspective" : zz,
      vz = (zz, tz) => {
        var sz;
        const Wz = oz(tz);
        return null !== (sz = zz[Wz]) && void 0 !== sz ? sz : Fz.f[Wz]
      },
      Uz = new Map([
        ["menuConfirm", "menuBack"],
        ["inventoryPrimary", "inventoryClose"],
        ["keyboardType", "keyboardClose"]
      ].flatMap((zz => {
        let [tz, sz] = zz;
        return [
          [tz, sz],
          [sz, tz]
        ]
      }))),
      Kz = (zz, tz) => null !== zz && void 0 !== zz ? zz : "nintendo" === tz,
      uz = zz => Kz((0, Wz.k)().swapConfirmBack, (0, Wz.o)()) && Uz.get(zz) || zz,
      Nz = zz => vz((0, Wz.k)().bindings, uz(zz)),
      bz = zz => Fz.f[uz(zz)],
      wz = Object.keys(Fz.f),
      Dz = zz => "gameplay" === (0, Fz.n)(zz) ? ["gameplay"] : (0, Fz.j)(zz),
      gz = (zz, tz) => {
        const sz = Dz(tz);
        return Dz(zz).some((zz => sz.includes(zz)))
      },
      Hz = (zz, tz, sz) => {
        const Wz = vz(zz, tz),
          Oz = new Set((0, Fz.p)(tz)),
          Uz = [...Oz];
        for (let Fz = Uz.pop(); Fz; Fz = Uz.pop())
          for (const tz of wz) {
            const Xz = vz(zz, tz);
            Oz.has(tz) || Xz !== sz && Xz !== Wz || !gz(Fz, tz) || (Oz.add(tz), Uz.push(tz))
          }
        const Kz = {
          ...zz
        };
        for (const uz of Oz) {
          const tz = vz(zz, uz) === Wz ? sz : Wz,
            Oz = (0, Fz.j)(uz).some((zz => Fz.i.has(zz)));
          if ((0, Xz.H)(tz) && Oz) return null;
          Kz[oz(uz)] = tz
        }
        for (const Xz of Object.keys(Kz)) Kz[Xz] === Fz.f[Xz] && delete Kz[Xz];
        return Kz
      },
      Bz = (zz, tz) => null !== Hz((0, Wz.k)().bindings, uz(zz), tz),
      Pz = (zz, tz) => {
        if (Nz(zz) === tz) return !0;
        const sz = Hz((0, Wz.k)().bindings, uz(zz), tz);
        return !!sz && ((0, Wz.q)({
          bindings: sz
        }), !0)
      },
      rz = (zz, tz) => {
        const sz = (0, Fz.p)(tz);
        return wz.filter((tz => oz(tz) === tz && !sz.includes(tz) && vz(zz, uz(tz)) !== Nz(tz)))
      },
      Yz = ["southpaw", "triggersSwapped"],
      xz = {
        southpaw: {
          sprint: "RS",
          sneakToggle: "LS"
        },
        triggersSwapped: {
          attack: "LT",
          use: "RT"
        }
      },
      mz = zz => Object.keys(xz[zz]),
      Jz = (zz, tz) => "southpaw" === zz ? tz.swapSticks : mz(zz).every((sz => vz(tz.bindings, sz) === xz[zz][sz])),
      Iz = (zz, tz) => {
        const sz = (0, Wz.k)();
        let Xz = sz.bindings;
        for (const Wz of mz(zz)) {
          const sz = tz ? xz[zz][Wz] : Fz.f[Wz];
          if (Xz = Hz(Xz, Wz, sz), !Xz) return !1
        }
        return (0, Wz.q)({
          swapSticks: "southpaw" === zz ? tz : sz.swapSticks,
          bindings: Xz
        }), !0
      },
      Cz = () => {
        (0, Wz.q)({
          swapSticks: !1,
          bindings: {}
        })
      },
      ez = () => (0, Wz.k)().swapSticks ? "RightStick" : "LeftStick",
      Zz = () => (0, Wz.k)().swapSticks ? "LeftStick" : "RightStick",
      Gz = zz => (0, Wz.k)().swapSticks && (0, Xz.H)(zz),
      Tz = zz => Gz(zz) ? ez() : Zz(),
      cz = zz => {
        if (Fz.v.has(zz)) return ez();
        const tz = Fz.t[zz];
        return tz && ("leaderboard" !== tz || (0, Oz.e)(zz, (0, Oz.c)())) ? Nz(tz) : null
      }
  },
  7663: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      ControllerCategory: () => bv,
      ControllerGlyph: () => gX,
      ControllerRoot: () => uo,
      PadLobbyShortcuts: () => eo,
      PadSneakChip: () => Bo,
      PadTooltip: () => ro,
      attachPressToContinue: () => Mo,
      getBoundButton: () => Kz.f,
      getControllerSettings: () => Nz.k,
      getGlyphForNoaAction: () => Kz.i,
      getInventoryCursorState: () => Dv,
      getMenuShortcutButton: () => hF,
      getPadGlyphIconName: () => Do,
      getPadGlyphIconUrl: () => go,
      getPadRepeatTiming: () => Dz.g,
      handOverPadFocus: () => Hv,
      hasActivePad: () => wv,
      isPadSteppingSlots: () => gv
    });
    const Fz = JSON.parse('{"controller":{"inventoryTake":"Take","inventoryTakeHalf":"Take half","inventoryPlace":"Place","inventoryPlaceOne":"Place one","inventoryQuickMove":"Quick move","inventoryToHotbar":"To hotbar","inventoryPutBack":"Put back","inventoryHotbarSwap":"Swap with hotbar","inventorySwapHere":"Swap here","inventoryCancel":"Cancel","inventoryClose":"Close","inventoryDrop":"Drop (hold: stack)","inventorySelect":"Select","inventoryCraft":"Craft (hold to repeat)","inventoryCraftAll":"Craft all","inventoryChooseRecipe":"Choose","inventoryBackToRecipes":"Back to recipes","inventoryType":"Type","inventoryPanels":"Switch panel","inventoryCategory":"Category","inventoryPage":"Page","disconnected":"Controller disconnected","gameplayReload":"Reload","gameplayActionWheelHint":"(hold for more)","gameplaySneaking":"Sneaking","gameplayLoadFailedTitle":"Controller unavailable","gameplayLoadFailedSubtitle":"Reload the page to play with your controller.","gameplayDropStack":"Keep holding to drop the stack","gameplayAttackLatched":"Attacking","gameplayPickBlock":"Pick block","padButtonView":"View","padButtonMenu":"Menu","padButtonHome":"Home","padButtonCreate":"Create","padButtonOptions":"Options","padButtonDpadUp":"D-pad \u2191","padButtonDpadDown":"D-pad \u2193","padButtonDpadLeft":"D-pad \u2190","padButtonDpadRight":"D-pad \u2192","padButtonLeftStick":"L Stick","padButtonRightStick":"R Stick","settingsLook":"Look","settingsLookSensitivityX":"Look sensitivity (horizontal)","settingsLookSensitivityY":"Look sensitivity (vertical)","settingsAimLookSensitivity":"Look sensitivity while aiming (use held)","settingsInvertLookX":"Invert horizontal look","settingsInvertLookY":"Invert vertical look","settingsLookCurve":"Look curve","settingsLookCurveHint":"Steep gives finer aim near the centre, Linear turns at an even rate, and Boost turns faster when you hold the stick all the way.","settingsCurveExponential":"Steep","settingsCurveLinear":"Linear","settingsCurveBoost":"Boost","settingsLookDeadzone":"Look deadzone","settingsGyro":"Gyro aiming","settingsGyroToggle":"Aim by moving the controller","settingsGyroToggleInfo":"Turn and tilt the controller to aim, on top of the right stick.","settingsGyroTogglePhone":"Aim by moving your phone or tablet","settingsGyroToggleInfoPhone":"Turn and tilt your phone or tablet to aim, on top of the right stick.","settingsGyroUnsupported":"Gyro aiming needs Chrome or Edge.","settingsGyroBlocked":"Gyro aiming isn\'t available on this site.","settingsGyroPhoneNeedsController":"Connect a controller to aim by moving your phone or tablet.","settingsGyroSteamHint":"If Steam already turns your gyro into mouse movement, leave this off.","settingsGyroConnect":"Connect motion controller","settingsGyroConnectHint":"Works with DualSense, DualShock 4 and Switch controllers.","settingsGyroConnectNeedsClick":"Click Connect with your mouse: the browser asks before sharing a controller.","settingsGyroOpenFailed":"Another app is using the controller. Close apps such as Steam or DS4Windows, then try again.","settingsGyroConnected":"Aiming with {{name}}.","settingsGyroAllowMotion":"Allow motion sensor","settingsGyroAllowNeedsTap":"Tap Allow motion sensor on your screen to turn it on.","settingsGyroPhoneOn":"Aiming with this device\'s motion sensor.","settingsGyroPhoneWaiting":"Waiting for this device\'s motion sensor\u2026","settingsGyroPhoneNoSensor":"No motion sensor found on this device.","settingsGyroPhoneDenied":"Motion access is blocked. Allow it in your browser settings.","settingsGyroSensitivity":"Gyro sensitivity","settingsGyroActivation":"Gyro turns on","settingsGyroAlways":"Always","settingsGyroWhileAiming":"While aiming","settingsGyroWhileButton":"While holding a button","settingsGyroAimingHint":"Hold {{button}} to aim with motion.","settingsGyroButton":"Gyro button","settingsGyroButtonHint":"While gyro aiming is on, this button only turns the gyro on in game, so pick one you rarely use.","settingsMovement":"Movement","settingsMoveDeadzone":"Move deadzone","settingsAutoSprint":"Sprint at full tilt","settingsAutoSprintInfo":"Push the movement stick all the way to sprint.","settingsSneak":"Sneak","settingsSneakHold":"Hold","settingsSneakToggle":"Toggle","settingsButtons":"Buttons","settingsPromptFamily":"Button prompts","settingsPromptAuto":"Match my controller","settingsPromptXbox":"Xbox","settingsPromptPlayStation":"PlayStation","settingsPromptNintendo":"Nintendo","settingsPromptSteamDeck":"Steam Deck","settingsPromptGeneric":"Generic","settingsHideButtonHints":"Hide button hints","settingsVibration":"Vibration","settingsCursorSpeed":"Virtual cursor speed","settingsCursorMagnetism":"Cursor snaps onto buttons","settingsMenuBackToCategories":"Back returns to the category list first","settingsAccessibility":"Accessibility","settingsSwapConfirmBack":"Swap confirm and back","settingsSwapToast":"Select and Back have swapped buttons.","settingsLayoutRefusedToast":"This layout doesn\'t fit your current buttons. Reset them to use it.","settingsSwapConfirmBackInfo":"Select with the right face button and go back with the bottom one, in menus, the inventory and the on-screen keyboard. On by default for Nintendo controllers.","settingsButtonRepeat":"Button repeat","settingsButtonRepeatHint":"How a held button repeats in menus, sliders, the on-screen keyboard and crafting. Off acts once per press, and holding drop in game drops just one item.","settingsButtonRepeatDefault":"Default","settingsButtonRepeatSlow":"Slow (0.8 s, then 4 a second)","settingsButtonRepeatOff":"Off (once per press)","settingsTapHoldTime":"Tap/hold time","settingsTapHoldTimeHint":"How long to hold the chat, emote or action button to open its wheel, or the view button to change view where a tap picks a block. Dropping a whole stack takes 0.8, 1 or 1.3 s.","settingsTapHoldShort":"Short (0.25 s)","settingsTapHoldMedium":"Medium (0.5 s)","settingsTapHoldLong":"Long (0.8 s)","settingsEmoteButton":"Emote button","settingsEmoteButtonTapHoldHint":"Tap to repeat your last emote, or hold to open the emote wheel.","settingsEmoteButtonWheelHint":"Any press opens the emote wheel, with no hold to time. Pick with the stick, then select.","settingsEmoteButtonTapHold":"Tap repeats, hold opens wheel","settingsEmoteButtonWheel":"Opens the wheel","settingsAttackMode":"Attack / mine","settingsAttackHoldHint":"Hold attack to keep attacking or mining.","settingsAttackToggleHint":"Press attack once to keep attacking or mining, and again to stop.","settingsAttackHold":"Hold","settingsAttackToggle":"Toggle","settingsLargePointer":"Large pointer and focus","settingsLargePointerInfo":"A bigger menu cursor, thicker selection brackets and bigger button hints.","settingsRemap":"Remap buttons","settingsRemapHint":"Select an action, then press a button. If that button is taken, the two swap.","settingsLayoutSouthpaw":"Southpaw (move with the right stick)","settingsLayoutTriggersSwapped":"Triggers swapped (attack with the left trigger)","settingsCapturePrompt":"Press a button","settingsCaptureCancelHint":"Press {{button}} to cancel","settingsCaptureCancelOrBindHint":"Tap {{button}} to cancel, or hold it to choose it","settingsReset":"Reset","settingsSwapNotice":"{{action}} moved to {{button}}","settingsResetAll":"Reset all buttons and sticks","settingsGroupGameplay":"Movement & gameplay","settingsGroupMenus":"Menus","settingsGroupInventory":"Inventory","settingsGroupKeyboard":"On-screen keyboard","settingsActionMove":"Move","settingsActionLook":"Look around","settingsActionJump":"Jump","settingsActionSneak":"Sneak","settingsActionSneakToggle":"Toggle sneak","settingsActionSprint":"Sprint","settingsActionAttack":"Attack / mine","settingsActionUse":"Use / place","settingsActionHotbarPrevious":"Previous hotbar slot","settingsActionHotbarNext":"Next hotbar slot","settingsActionInventory":"Inventory","settingsActionActionButton":"Game action","settingsActionPerspective":"Change view","settingsActionPickBlock":"Pick block (creative)","settingsActionDrop":"Drop item","settingsActionEmoteWheel":"Emotes","settingsActionChat":"Chat","settingsActionPause":"Pause menu","settingsActionLeaderboard":"Shop / leaderboard","settingsActionMenuConfirm":"Select","settingsActionMenuBack":"Back","settingsActionMenuTabPrevious":"Previous tab","settingsActionMenuTabNext":"Next tab","settingsActionMenuPageUp":"Page up","settingsActionMenuPageDown":"Page down","settingsActionMenuSecondary":"Secondary action","settingsActionMenuToggleCursor":"Switch to virtual cursor","settingsActionInventoryPrimary":"Pick up / place","settingsActionInventorySecondary":"Pick up half / place one","settingsActionInventoryQuickMove":"Quick move","settingsActionInventoryHotbarSwap":"Swap with hotbar slot","settingsActionInventoryClose":"Close","settingsActionInventoryPanelPrevious":"Previous panel","settingsActionInventoryPanelNext":"Next panel","settingsActionInventoryDrop":"Drop item","settingsActionKeyboardType":"Type key","settingsActionKeyboardBackspace":"Backspace","settingsActionKeyboardSpace":"Space","settingsActionKeyboardCaretLeft":"Move cursor left","settingsActionKeyboardCaretRight":"Move cursor right","settingsActionKeyboardShift":"Shift","settingsActionKeyboardSymbols":"Accents and symbols","settingsActionKeyboardSubmit":"Send","settingsActionKeyboardClose":"Close keyboard","settingsActionKeyboardChannel":"Chat channel","settingsAlternatives":"Try alternatives","settingsAlternativesHint":"Try each way of playing and keep the one that feels best.","settingsMenuNavigation":"Menu navigation","settingsMenuNavigationHint":"Steer a cursor with the stick and jump between buttons with the D-pad, or use just one.","settingsNavHybrid":"Cursor and D-pad","settingsMenuNavFocus":"Jump between buttons","settingsVirtualCursor":"Virtual cursor","settingsInventoryNavigation":"Inventory","settingsInventoryNavigationHint":"Steer a cursor with the stick and step slot by slot with the D-pad, or use just one.","settingsInventoryNavSlot":"Slot by slot","settingsQuickChat":"Hold chat button","settingsQuickChatHint":"Hold the chat button to pick a quick phrase. Tapping it still opens chat.","settingsQuickChatWheel":"Quick chat wheel","settingsQuickChatOff":"Off","settingsLeaderboardButton":"Shop / leaderboard button","settingsLeaderboardButtonHint":"Open the shop in one press in games that have one. The lobby leaderboard is still in the pause menu.","settingsLeaderboardButtonShop":"Shop, in games with one","settingsLeaderboardButtonLeaderboard":"Always the leaderboard","settingsTester":"Gamepad tester","settingsTesterNoPad":"Connect a gamepad and press any button to test it.","settingsTesterFamily":"Detected: {{family}}","settingsTesterHint":"Start a test to try every button and stick without moving through the menu.","settingsTesterStart":"Start test","settingsTesterStop":"Stop test","settingsTesterTesting":"Press anything to see it light up. To stop, hold {{button}} or press it three times.","settingsControlsNote":"Playing with a gamepad? Change its buttons and feel in Gamepad settings.","settingsOpenController":"Gamepad settings","keyboardSpace":"Space","keyboardSend":"Send","keyboardDone":"Done","keyboardTargetChat":"Chat","keyboardTargetSign":"Sign","keyboardTargetNameTag":"Name tag","keyboardTargetBook":"Book page","keyboardTargetBookTitle":"Book title","keyboardTargetText":"Text","keyboardPhraseGg":"gg","keyboardPhraseHi":"hi","keyboardPhraseThanks":"thanks","keyboardPhraseGl":"gl","keyboardPhraseBrb":"brb","keyboardPhraseYes":"yes","keyboardPhraseNo":"no","keyboardPhraseHelp":"help!","quickChatPick":"Pick a phrase","actionWheelPick":"Pick an action","wheelReleaseToPick":"Release to pick","wheelClose":"Close","wheelChoose":"Choose","menusSelect":"Select","menusBack":"Back","menusClose":"Close","menusQuickChat":"Quick chat (hold)","menusSkipTutorial":"Skip tutorial","menusTabs":"Tabs","menusRows":"Rows","menusCursorMode":"Cursor","menusFocusMode":"Focus","menusClick":"Click","menusRightClick":"Right-click","menusScroll":"Scroll","menusFriends":"Friends","menusSearch":"Search","menusSettings":"Settings","menusLeaveGameTitle":"Leave the game?","menusLeaveGameLeave":"Leave","menusLeaveGameStay":"Stay","menusNotifications":"Notifications","menusLobby":"Lobby","menusShop":"Shop","menusTasks":"Tasks & leaderboards","menusInvite":"Invite friends","menusAdjust":"Adjust","menusFavourite":"Favourite","screensPressToContinue":"Press {{button}} to continue","screensPressToEnterGame":"Press {{button}} to enter game","screensEnterGame":"Enter game","screensBackToGames":"Back to games","tutorialMine":"Mine","tutorialPlace":"Place / Use","tutorialInventory":"Inventory","tutorialPause":"Pause","menusUseMouse":"Use a mouse or touch here"}}');
    var Wz = sz(1173),
      Xz = sz(1375),
      Oz = sz(7665),
      oz = sz(78),
      vz = sz(30),
      Uz = sz(34),
      Kz = sz(7682),
      uz = sz(7717),
      Nz = sz(7691),
      bz = sz(7724),
      wz = sz(7674),
      Dz = sz(8186),
      gz = sz(8195),
      Hz = sz(1608);
    const Bz = (zz, tz, sz) => Math.max(tz, Math.min(sz, zz)),
      Pz = zz => Math.min(zz.width, zz.height) / 720,
      rz = zz => Math.max(.15, zz);
    class Yz {
      constructor() {
        this.locked = !1
      }
      lock() {
        this.locked = !0
      }
      update(zz, tz) {
        const sz = Math.hypot(zz.x, zz.y) >= (zz => Math.max(.3, zz))(tz);
        return this.locked ? (this.locked = sz, !1) : sz
      }
    }
    const xz = (zz, tz) => {
        const sz = Bz(tz.dtMs, 0, 100),
          Fz = sz / 1e3,
          Wz = Pz(tz.viewport) * (tz.cursorSpeedPercent / 100),
          Xz = (0, wz.k)(tz.stick, rz(tz.moveDeadzone)),
          Oz = Math.hypot(Xz.x, Xz.y),
          oz = ((zz, tz, sz) => {
            if (tz < .3) return 0;
            const Fz = sz / 350;
            return tz >= .85 ? Math.min(1, zz + Fz) : Math.max(0, zz - Fz)
          })(zz.speedRamp, Oz, sz);
        let vz = zz.x,
          Uz = zz.y;
        if (Oz > 0) {
          const zz = .45 + .55 * oz,
            sz = tz.context.overInteractive ? .45 : 1,
            Kz = 1400 * (zz => {
              const tz = Bz(zz, 0, 1);
              return .3 * tz + .7 * tz * tz
            })(Oz) * Wz * zz * sz;
          vz += Xz.x / Oz * Kz * Fz, Uz += Xz.y / Oz * Kz * Fz
        }
        const Kz = Math.hypot(tz.dpad.x, tz.dpad.y);
        if (Kz > 0) {
          const zz = 500 * Wz;
          vz += tz.dpad.x / Kz * zz * Fz, Uz += tz.dpad.y / Kz * zz * Fz
        }
        const uz = tz.context.magnetTarget;
        if (uz && Oz < .3 && 0 === Kz) {
          const zz = ((zz, tz, sz, Fz, Wz) => {
            const Xz = tz.x - zz.x,
              Oz = tz.y - zz.y,
              oz = Math.hypot(Xz, Oz);
            if (0 === oz) return {
              x: 0,
              y: 0
            };
            const vz = Math.min(oz, Wz * (1 - Fz / .3));
            let Uz = Xz / oz * vz,
              Kz = Oz / oz * vz;
            if (Fz > 0) {
              const zz = sz.x / Fz,
                tz = sz.y / Fz,
                Wz = Uz * zz + Kz * tz;
              Wz < 0 && (Uz -= Wz * zz, Kz -= Wz * tz)
            }
            return {
              x: Uz,
              y: Kz
            }
          })({
            x: vz,
            y: Uz
          }, uz, Xz, Oz, 120 * Pz(tz.viewport) * Fz);
          vz += zz.x, Uz += zz.y
        }
        return {
          x: Bz(vz, 0, Math.max(0, tz.viewport.width - 1)),
          y: Bz(Uz, 0, Math.max(0, tz.viewport.height - 1)),
          speedRamp: oz
        }
      },
      mz = zz => {
        const tz = (0, wz.k)(zz, .2);
        return 0 !== tz.x || 0 !== tz.y
      },
      Jz = (zz, tz) => {
        const sz = (0, wz.k)(zz, .2),
          Fz = Math.hypot(sz.x, sz.y);
        if (0 === Fz) return {
          x: 0,
          y: 0
        };
        const Wz = Fz * Fz * 1600,
          Xz = Bz(tz, 0, 100) / 1e3;
        return {
          x: sz.x / Fz * Wz * Xz,
          y: sz.y / Fz * Wz * Xz
        }
      },
      Iz = (zz, tz) => "y" === tz ? zz.scrollHeight > zz.clientHeight + 1 : zz.scrollWidth > zz.clientWidth + 1,
      Cz = (zz, tz) => {
        if (!Iz(zz, tz)) return !1;
        const sz = getComputedStyle(zz),
          Fz = "y" === tz ? sz.overflowY : sz.overflowX;
        return "auto" === Fz || "scroll" === Fz
      },
      ez = (zz, tz, sz) => {
        for (let Xz = zz instanceof HTMLElement ? zz : null !== (Fz = null === zz || void 0 === zz ? void 0 : zz.parentElement) && void 0 !== Fz ? Fz : null; Xz; Xz = Xz.parentElement) {
          var Fz;
          if (Cz(Xz, tz)) return Xz;
          if (Xz === sz) return null
        }
        if (sz) return null;
        const Wz = document.scrollingElement;
        return Wz instanceof HTMLElement && Iz(Wz, tz) ? Wz : null
      },
      Zz = new WeakMap,
      Gz = (zz, tz) => {
        const sz = performance.now(),
          Fz = Zz.get(zz);
        if (Fz && Fz.axis === tz && sz - Fz.atMs < 500 && (!Fz.container || Fz.container.isConnected)) return Fz.container;
        const Wz = Tz(zz, tz);
        return Zz.set(zz, {
          axis: tz,
          atMs: sz,
          container: Wz
        }), Wz
      },
      Tz = (zz, tz) => {
        let sz = Cz(zz, tz) ? zz : null,
          Fz = sz ? sz.clientWidth * sz.clientHeight : 0;
        for (const Wz of zz.querySelectorAll("*")) {
          const zz = Wz.clientWidth * Wz.clientHeight;
          zz > Fz && Cz(Wz, tz) && (sz = Wz, Fz = zz)
        }
        return sz
      },
      cz = (zz, tz, sz) => "y" === tz ? sz < 0 ? zz.scrollTop > 0 : zz.scrollTop + zz.clientHeight < zz.scrollHeight - 1 : sz < 0 ? zz.scrollLeft > 0 : zz.scrollLeft + zz.clientWidth < zz.scrollWidth - 1,
      jz = (zz, tz, sz) => {
        "y" === tz ? zz.scrollBy({
          top: sz,
          behavior: "instant"
        }) : zz.scrollBy({
          left: sz,
          behavior: "instant"
        })
      },
      Az = zz => {
        if (!zz || zz === document.scrollingElement) return new DOMRect(0, 0, window.innerWidth, window.innerHeight);
        const tz = zz.getBoundingClientRect(),
          sz = Math.max(0, tz.left),
          Fz = Math.max(0, tz.top);
        return new DOMRect(sz, Fz, Math.min(window.innerWidth, tz.right) - sz, Math.min(window.innerHeight, tz.bottom) - Fz)
      },
      yz = (zz, tz) => zz.left < tz.right && tz.left < zz.right && zz.top < tz.bottom && tz.top < zz.bottom;
    var Mz = sz(65),
      dz = sz(1020),
      hz = sz.n(dz),
      Qz = sz(1087);
    let kz = 0,
      iz = !1;
    class Lz {
      constructor() {
        this.element = null, this.shownKey = "", this.gap = null
      }
      setElement(zz) {
        this.element = zz, this.shownKey = "", this.gap = null
      }
      show(zz) {
        const tz = this.element;
        if (!tz) return;
        const sz = zz ? this.keepOnScreen(tz, zz) : null,
          Fz = sz ? `${sz.left},${sz.top},${sz.width},${sz.height}` : "";
        if (Fz === this.shownKey) return;
        const Wz = "" === this.shownKey;
        this.shownKey = Fz, tz.classList.toggle("Visible", null !== sz), sz && (tz.classList.toggle("Snap", Wz), tz.style.width = `${sz.width}px`, tz.style.height = `${sz.height}px`, tz.style.transform = `translate(${sz.left}px, ${sz.top}px)`, Wz && (tz.offsetWidth, tz.classList.remove("Snap")))
      }
      hide() {
        this.show(null)
      }
      keepOnScreen(zz, tz) {
        var sz;
        const Fz = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!iz){iz=!0;const zz=document.createElement("div");zz.setAttribute("aria-hidden","true"),zz.style.cssText="position: fixed; top: 0; left: 0; width: 1rem; height: 0; visibility: hidden; pointer-events: none",document.body.appendChild(zz),new ResizeObserver((()=>{kz++})).observe(zz)}return String(kz)})()}`;
        (null === (sz = this.gap) || void 0 === sz ? void 0 : sz.key) !== Fz && (this.gap = {
          px: parseFloat(getComputedStyle(zz).paddingLeft) || 0,
          key: Fz
        });
        const Wz = this.gap.px + 2,
          Xz = Math.max(tz.left, Wz),
          Oz = Math.max(tz.top, Wz),
          oz = Math.min(tz.left + tz.width, window.innerWidth - Wz),
          vz = Math.min(tz.top + tz.height, window.innerHeight - Wz);
        return oz <= Xz || vz <= Oz ? tz : {
          left: Xz,
          top: Oz,
          width: oz - Xz,
          height: vz - Oz
        }
      }
    }
    const lz = zz => {
      let {
        placer: tz,
        className: sz
      } = zz;
      const Fz = (0, Mz.useCallback)((zz => {
        tz.setElement(zz)
      }), [tz]);
      return (0, Qz.jsx)("div", {
        ref: Fz,
        className: hz()("PadReticle", sz),
        "aria-hidden": !0
      })
    };
    var nz = sz(8204),
      az = sz(1668);
    const qz = zz => zz >= 56320 && zz <= 57343,
      Sz = zz => zz >= 55296 && zz <= 56319,
      Vz = (zz, tz) => tz >= 2 && qz(zz.charCodeAt(tz - 1)) && Sz(zz.charCodeAt(tz - 2)) ? tz - 2 : Math.max(0, tz - 1),
      Rz = (zz, tz) => {
        let sz;
        var Fz, Wz;
        return sz = zz.start !== zz.end ? tz < 0 ? zz.start : zz.end : tz < 0 ? Vz(zz.value, zz.start) : (Fz = zz.value, (Wz = zz.start) + 1 < Fz.length && Sz(Fz.charCodeAt(Wz)) && qz(Fz.charCodeAt(Wz + 1)) ? Wz + 2 : Math.min(Fz.length, Wz + 1)), {
          value: zz.value,
          start: sz,
          end: sz
        }
      },
      pz = ["text", "search", "url", "email", "tel", "password", "number"],
      fz = zz => !(!(0, az.c)(zz) || zz.isContentEditable || zz.hasAttribute("data-pad-no-osk")) && (zz instanceof HTMLTextAreaElement || zz instanceof HTMLInputElement && pz.includes(zz.type)),
      Ez = zz => null !== zz.selectionStart,
      zt = zz => {
        var tz, sz;
        const {
          value: Fz
        } = zz;
        return {
          value: Fz,
          start: null !== (tz = zz.selectionStart) && void 0 !== tz ? tz : Fz.length,
          end: null !== (sz = zz.selectionEnd) && void 0 !== sz ? sz : Fz.length
        }
      },
      tt = (zz, tz, sz) => {
        if (zz.readOnly) return;
        const Fz = zz instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(Fz, "value").set.call(zz, tz.value), Ez(zz) && zz.setSelectionRange(tz.start, tz.end), (0, Hz.e)(zz, new InputEvent("input", {
          bubbles: !0,
          inputType: sz
        }))
      };
    let st = !1;
    const Ft = (zz, tz) => !!document.execCommand(zz, !1, tz) || (st || (st = !0, console.warn(`execCommand("${zz}") failed; the on-screen keyboard is setting the value directly`)), !1),
      Wt = (zz, tz) => {
        Ft("insertText", tz) || tt(zz, function(zz, tz) {
          let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
          const Fz = zz.value.slice(0, zz.start),
            Wz = zz.value.slice(zz.end);
          let Xz = sz < 0 ? tz.length : Math.max(0, sz - Fz.length - Wz.length);
          Xz > 0 && Xz < tz.length && Sz(tz.charCodeAt(Xz - 1)) && Xz--;
          const Oz = tz.slice(0, Xz),
            oz = Fz.length + Oz.length;
          return {
            value: Fz + Oz + Wz,
            start: oz,
            end: oz
          }
        }(zt(zz), tz, zz.maxLength), "insertText")
      },
      Xt = zz => {
        Ft("delete") || tt(zz, (zz => {
          const tz = zz.start === zz.end ? Vz(zz.value, zz.start) : zz.start;
          return {
            value: zz.value.slice(0, tz) + zz.value.slice(zz.end),
            start: tz,
            end: tz
          }
        })(zt(zz)), "deleteContentBackward")
      },
      Ot = (zz, tz) => {
        if (!Ez(zz)) return;
        const sz = Rz(zt(zz), tz);
        zz.setSelectionRange(sz.start, sz.end)
      },
      ot = ["button", "a[href]", "input:not([type=hidden])", "textarea", "select", "[role=button]", "[role=tab]", "[role=switch]", "[role=checkbox]", "[role=option]", "[role=menuitem]", "[data-pad-focusable]", "[data-pad-tab]", ".Dropdown-control", ".Dropdown-option"].join(","),
      vt = (zz, tz) => {
        if ("function" === typeof zz.checkVisibility) return !zz.checkVisibility({
          visibilityProperty: !0,
          checkVisibilityCSS: !0,
          opacityProperty: tz,
          checkOpacity: tz
        });
        const {
          visibility: sz
        } = getComputedStyle(zz);
        if ("hidden" === sz || "collapse" === sz) return !0;
        if (!tz) return !1;
        for (let Fz = zz; Fz; Fz = Fz.parentElement)
          if ("0" === getComputedStyle(Fz).opacity) return !0;
        return !1
      },
      Ut = zz => {
        if (!zz.isConnected || vt(zz, !0)) return !1;
        const tz = zz.getBoundingClientRect();
        return tz.width > 0 && tz.height > 0
      },
      Kt = zz => !!zz.matches(":disabled, [aria-disabled='true']") || "button" === zz.getAttribute("role") && "-1" === zz.getAttribute("tabindex"),
      ut = zz => {
        var tz;
        if (zz.closest("[data-pad-ignore]")) return !0;
        return !!(null === (tz = zz.parentElement) || void 0 === tz ? void 0 : tz.closest("[data-pad-focusable]"))
      },
      Nt = zz => {
        const tz = zz.querySelectorAll(ot);
        return zz.matches(ot) ? [zz, ...tz] : tz
      },
      bt = zz => {
        const tz = [];
        for (const sz of Nt(zz)) !ut(sz) && Ut(sz) && tz.push(sz);
        return tz
      },
      wt = new WeakMap,
      Dt = zz => {
        const tz = wt.get(zz);
        if (tz && gt(tz, zz)) return !0;
        for (const sz of Nt(zz))
          if (!ut(sz) && Ut(sz)) return wt.set(zz, sz), !0;
        return wt.delete(zz), !1
      },
      gt = (zz, tz) => tz.contains(zz) && zz.matches(ot) && !ut(zz) && Ut(zz),
      Ht = (zz, tz) => gt(zz, tz) && !Kt(zz),
      Bt = zz => {
        const tz = tz => {
          let sz = 0;
          for (let Fz = tz.parentElement; Fz && Fz !== zz; Fz = Fz.parentElement) sz++;
          return sz
        };
        return [...zz.querySelectorAll("[data-pad-initial-area]")].filter(Ut).sort(((zz, sz) => tz(sz) - tz(zz)))
      },
      Pt = zz => fz(zz),
      rt = zz => {
        const tz = zz.getBoundingClientRect();
        return {
          x: tz.left + tz.width / 2,
          y: tz.top + tz.height / 2
        }
      },
      Yt = (zz, tz, sz) => ({
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window,
        clientX: zz.x,
        clientY: zz.y,
        screenX: zz.x,
        screenY: zz.y,
        button: tz,
        buttons: sz,
        pointerId: 1,
        pointerType: "mouse",
        isPrimary: !0
      }),
      xt = (zz, tz) => {
        (0, Hz.e)(zz, tz)
      },
      mt = function(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const Fz = 0 === sz ? 1 : 2;
        xt(zz, new PointerEvent("pointerdown", Yt(tz, sz, Fz))), xt(zz, new MouseEvent("mousedown", Yt(tz, sz, Fz)))
      },
      Jt = function(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        xt(zz, new PointerEvent("pointerup", Yt(tz, sz, 0))), xt(zz, new MouseEvent("mouseup", Yt(tz, sz, 0)))
      },
      It = function(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        mt(zz, tz, sz), Jt(zz, tz, sz), xt(zz, 0 === sz ? new MouseEvent("click", Yt(tz, 0, 0)) : new MouseEvent("contextmenu", Yt(tz, 2, 0)))
      },
      Ct = function(zz, tz, sz) {
        let {
          leaveBelow: Fz = null,
          enterBelow: Wz = null
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (zz !== tz) {
          if (null !== zz && void 0 !== zz && zz.isConnected) {
            const Wz = {
              ...Yt(sz, 0, 0),
              relatedTarget: tz
            };
            xt(zz, new PointerEvent("pointerout", Wz)), xt(zz, new MouseEvent("mouseout", Wz));
            const Xz = zz => !!tz && zz.contains(tz) || !!Fz && zz.contains(Fz);
            for (let tz = zz; tz && !Xz(tz); tz = tz.parentElement) xt(tz, new PointerEvent("pointerleave", {
              ...Wz,
              bubbles: !1
            })), xt(tz, new MouseEvent("mouseleave", {
              ...Wz,
              bubbles: !1
            }))
          }
          if (tz) {
            const Fz = {
              ...Yt(sz, 0, 0),
              relatedTarget: zz
            };
            xt(tz, new PointerEvent("pointerover", Fz)), xt(tz, new MouseEvent("mouseover", Fz));
            const Xz = [],
              Oz = tz => !(null === zz || void 0 === zz || !zz.isConnected) && tz.contains(zz) || !!Wz && tz.contains(Wz);
            for (let zz = tz; zz && !Oz(zz); zz = zz.parentElement) Xz.push(zz);
            for (const zz of Xz.reverse()) xt(zz, new PointerEvent("pointerenter", {
              ...Fz,
              bubbles: !1
            })), xt(zz, new MouseEvent("mouseenter", {
              ...Fz,
              bubbles: !1
            }));
            xt(tz, new PointerEvent("pointermove", Yt(sz, 0, 0))), xt(tz, new MouseEvent("mousemove", Yt(sz, 0, 0)))
          }
        } else tz && (xt(tz, new PointerEvent("pointermove", Yt(sz, 0, 0))), xt(tz, new MouseEvent("mousemove", Yt(sz, 0, 0))))
      },
      et = zz => {
        Uz.o.Yg(nz.e, zz)
      },
      Zt = zz => {
        if (Pt(zz)) return void et(zz);
        const tz = zz.hasAttribute("data-pad-focusable") ? zz.querySelector("a[href]") : null,
          sz = null !== tz && void 0 !== tz ? tz : zz;
        It(sz, rt(sz))
      },
      Gt = ".Dropdown-root.is-open",
      Tt = zz => {
        const tz = zz.querySelector(".Dropdown-control");
        return Zt(tz), tz
      },
      ct = zz => {
        var tz;
        const sz = null !== (tz = zz.closest(Gt)) && void 0 !== tz ? tz : zz.querySelector(Gt);
        return sz ? Tt(sz) : null
      },
      jt = zz => {
        for (const tz of document.querySelectorAll(Gt)) tz.contains(zz) || Tt(tz)
      },
      At = zz => null !== zz.closest("input[type=color], input[type=file], [data-pad-mouse-only]"),
      yt = zz => {
        const tz = zz ? document.elementFromPoint(zz.x, zz.y) : null;
        return !(null === tz || void 0 === tz || !tz.closest("[data-pad-repeat]"))
      },
      Mt = zz => {
        var tz;
        return null !== (tz = [...zz.querySelectorAll("[data-pad-back]")].find(Ut)) && void 0 !== tz ? tz : null
      },
      dt = zz => {
        const tz = Mt(zz);
        return !!tz && (Zt(tz), !0)
      },
      ht = zz => {
        var tz, sz, Fz, Wz;
        return null !== (tz = null !== (sz = null !== (Fz = zz.getAttribute("data-pad-key")) && void 0 !== Fz ? Fz : zz.getAttribute("href")) && void 0 !== sz ? sz : null === (Wz = zz.querySelector("a[href]")) || void 0 === Wz ? void 0 : Wz.getAttribute("href")) && void 0 !== tz ? tz : null
      },
      Qt = {
        x: 0,
        y: 0,
        visible: !1,
        pressed: !1
      };
    const kt = new class {
        constructor() {
          this.state = Qt, this.listeners = new Set
        }
        get() {
          return this.state
        }
        set(zz) {
          if (tz = this.state, sz = zz, (tz.visible || sz.visible) && (tz.visible !== sz.visible || tz.x !== sz.x || tz.y !== sz.y || tz.pressed !== sz.pressed)) {
            var tz, sz;
            this.state = zz;
            for (const tz of this.listeners) tz(zz)
          }
        }
        hide() {
          this.set(Qt)
        }
        subscribe(zz) {
          return this.listeners.add(zz), () => {
            this.listeners.delete(zz)
          }
        }
      },
      it = (zz, tz) => {
        let {
          kind: sz,
          holding: Fz,
          hasPress: Wz,
          hasBack: Xz,
          slotHasItem: Oz
        } = tz;
        switch (zz) {
          case "primary":
            return "slot" === sz ? "slotPrimary" : "recipe" === sz || "button" === sz ? Wz ? "pressPrimary" : "click" : "textField" === sz ? "openKeyboard" : null;
          case "secondary":
            return "slot" === sz ? "slotSecondary" : "button" !== sz && "recipe" !== sz || !Wz ? null : "pressSecondary";
          case "quickMove":
            return "slot" === sz && Oz ? "slotQuickMove" : null;
          case "hotbarSwap":
            return "slot" === sz && Oz && !Fz ? "hotbarPick" : null;
          case "openButton":
            return "close";
          case "back":
            return Fz ? "cancel" : Xz ? "pressBack" : "close"
        }
      },
      Lt = zz => {
        const tz = [];
        if (zz.hotbarPicking) return tz.push({
          actions: ["inventoryPrimary", "inventoryHotbarSwap"],
          labelKey: "inventorySwapHere"
        }), tz.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryCancel"
        }), tz;
        if (zz.holding) "slot" === zz.kind ? (tz.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryPlace"
        }), tz.push({
          actions: ["inventorySecondary"],
          labelKey: "inventoryPlaceOne"
        })) : "textField" === zz.kind && tz.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryType"
        }), tz.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryPutBack"
        }), tz.push({
          actions: ["inventoryDrop"],
          labelKey: "inventoryDrop"
        }), zz.openButtonCloses && tz.push({
          actions: ["inventory"],
          labelKey: "inventoryClose"
        });
        else {
          var sz;
          "slot" === zz.kind && zz.slotHasItem ? (tz.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryTake"
          }), tz.push({
            actions: ["inventorySecondary"],
            labelKey: "inventoryTakeHalf"
          }), tz.push({
            actions: ["inventoryQuickMove"],
            labelKey: zz.quickMoveToHotbar ? "inventoryToHotbar" : "inventoryQuickMove"
          }), tz.push({
            actions: ["inventoryHotbarSwap"],
            labelKey: "inventoryHotbarSwap"
          }), tz.push({
            actions: ["inventoryDrop"],
            labelKey: "inventoryDrop"
          })) : "button" !== zz.kind && "recipe" !== zz.kind || !zz.pressHints ? "button" === zz.kind || "recipe" === zz.kind ? tz.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventorySelect"
          }) : "textField" === zz.kind && tz.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryType"
          }) : (zz.pressHints.primary && tz.push({
            actions: ["inventoryPrimary"],
            labelKey: zz.pressHints.primary
          }), zz.pressHints.secondary && tz.push({
            actions: ["inventorySecondary"],
            labelKey: zz.pressHints.secondary
          }));
          const Fz = null === (sz = zz.pressHints) || void 0 === sz ? void 0 : sz.back;
          Fz && tz.push({
            actions: ["inventoryClose"],
            labelKey: Fz
          });
          const Wz = [];
          zz.openButtonCloses && Wz.push("inventory"), Fz || Wz.push("inventoryClose"), Wz.length > 0 && tz.push({
            actions: Wz,
            labelKey: "inventoryClose"
          })
        }
        return tz.push({
          actions: ["inventoryPanelPrevious", "inventoryPanelNext"],
          labelKey: "inventoryPanels"
        }), zz.hasCategories ? tz.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryCategory"
        }) : zz.hasList && tz.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryPage"
        }), tz
      };
    var lt = sz(8207);
    class nt {
      constructor(zz) {
        this.probes = zz, this.byContainer = new Map, this.byParent = new Map
      }
      find(zz, tz) {
        const sz = ez(zz, "y", tz);
        if (!sz) return null;
        let Fz = this.byContainer.get(sz);
        return Fz || (this.probes.push({
          element: sz,
          rect: Rt(sz.getBoundingClientRect())
        }), Fz = {
          container: sz,
          box: Az(sz),
          group: Vt(sz)
        }, this.byContainer.set(sz, Fz)), Fz
      }
      findForParent(zz, tz) {
        let sz = this.byParent.get(zz);
        return void 0 === sz && (sz = this.find(zz, tz), this.byParent.set(zz, sz)), sz
      }
    }
    const qt = new WeakMap;
    let St = 0;
    const Vt = zz => {
        let tz = qt.get(zz);
        return tz || (tz = "el:" + St++, qt.set(zz, tz)), tz
      },
      Rt = zz => ({
        left: zz.left,
        top: zz.top,
        width: zz.width,
        height: zz.height
      }),
      pt = zz => zz.width > 0 && zz.height > 0,
      ft = (zz, tz) => pt(zz) && zz.left + zz.width > 0 && zz.top + zz.height > 0 && zz.left < tz.width && zz.top < tz.height,
      Et = (zz, tz, sz) => {
        const Fz = zz.top + zz.height / 2;
        return ft(zz, tz) && (!sz || Fz >= sz.top && Fz <= sz.bottom)
      },
      zs = zz => ({
        x: zz.left + zz.width / 2,
        y: zz.top + zz.height / 2
      }),
      ts = (zz, tz, sz) => zz < 0 ? sz >= 0 ? 0 : tz - 1 : ((zz + sz) % tz + tz) % tz,
      ss = zz => "Left" === zz || "Right" === zz,
      Fs = (zz, tz, sz) => {
        const Fz = ss(sz),
          Wz = Fz ? zz.top : zz.left,
          Xz = Fz ? zz.height : zz.width,
          Oz = Fz ? tz.top : tz.left,
          oz = Fz ? tz.height : tz.width,
          vz = Math.max(0, Math.max(Oz - (Wz + Xz), Wz - (Oz + oz)));
        return Xz > 1.5 * oz ? {
          gap: vz,
          offset: Math.max(0, Oz - Wz) + .1 * Math.max(0, Wz - Oz)
        } : {
          gap: vz,
          offset: Math.abs(Oz + oz / 2 - (Wz + Xz / 2))
        }
      },
      Ws = (zz, tz, sz) => {
        const Fz = ((zz, tz, sz) => {
          const Fz = zs(zz),
            Wz = zs(tz),
            Xz = ss(sz) ? Math.min(zz.width, tz.width) / 4 : Math.min(zz.height, tz.height) / 4;
          switch (sz) {
            case "Right":
              return Wz.x - Fz.x >= Xz ? Math.max(0, tz.left - (zz.left + zz.width)) : null;
            case "Left":
              return Fz.x - Wz.x >= Xz ? Math.max(0, zz.left - (tz.left + tz.width)) : null;
            case "Down":
              return Wz.y - Fz.y >= Xz ? Math.max(0, tz.top - (zz.top + zz.height)) : null;
            case "Up":
              return Fz.y - Wz.y >= Xz ? Math.max(0, zz.top - (tz.top + tz.height)) : null
          }
        })(zz, tz, sz);
        if (null === Fz) return null;
        const Wz = Fs(zz, tz, sz);
        return Fz + 3 * Wz.gap + .5 * Wz.offset
      },
      Xs = (zz, tz) => tz.visible || null !== tz.scrollGroup && tz.scrollGroup === zz.scrollGroup,
      Os = (zz, tz, sz, Fz) => {
        let Wz = null,
          Xz = 1 / 0;
        for (const Oz of tz) {
          if (Oz.key === zz.key || !Xs(zz, Oz) || !Fz(Oz)) continue;
          const tz = Ws(zz.rect, Oz.rect, sz);
          null !== tz && tz < Xz && (Wz = Oz, Xz = tz)
        }
        return Wz
      },
      os = (zz, tz, sz) => {
        const Fz = Os(zz, tz, sz, (() => !0));
        if (!Fz || ss(sz) || null === zz.scrollGroup || Fz.scrollGroup === zz.scrollGroup) return Fz;
        const Wz = Os(zz, tz, sz, (tz => 0 === Fs(zz.rect, tz.rect, sz).gap));
        return null !== Wz && void 0 !== Wz ? Wz : Fz
      },
      vs = (zz, tz, sz) => {
        let Fz = null,
          Wz = 1 / 0;
        for (const Xz of tz) {
          if (!Xz.visible || sz && !sz(Xz)) continue;
          const tz = zs(Xz.rect),
            Oz = Math.hypot(tz.x - zz.x, tz.y - zz.y);
          Oz < Wz && (Fz = Xz, Wz = Oz)
        }
        return Fz
      },
      Us = zz => {
        const {
          rect: tz,
          clip: sz
        } = zz;
        if (!sz) return tz;
        const Fz = Math.max(tz.left, sz.left),
          Wz = Math.max(tz.top, sz.top);
        return {
          left: Fz,
          top: Wz,
          width: Math.min(tz.left + tz.width, sz.left + sz.width) - Fz,
          height: Math.min(tz.top + tz.height, sz.top + sz.height) - Wz
        }
      },
      Ks = (zz, tz) => tz.x >= zz.left && tz.x < zz.left + zz.width && tz.y >= zz.top && tz.y < zz.top + zz.height,
      us = (zz, tz) => {
        let sz = null,
          Fz = 1 / 0;
        for (const Wz of tz) {
          const tz = Us(Wz);
          (Wz.visible || Wz.clip) && Ks(tz, zz) && (tz.width * tz.height < Fz && (sz = Wz, Fz = tz.width * tz.height))
        }
        return sz
      },
      Ns = zz => {
        let tz = null;
        for (const sz of zz) {
          if (!sz.visible) continue;
          if (!tz) {
            tz = sz;
            continue
          }
          const zz = Math.min(tz.rect.height, sz.rect.height) / 2,
            Fz = sz.rect.top - tz.rect.top;
          (Fz < -zz || Math.abs(Fz) <= zz && sz.rect.left < tz.rect.left) && (tz = sz)
        }
        return tz
      },
      bs = (zz, tz, sz, Fz, Wz) => {
        const Xz = Wz % tz,
          Oz = Math.floor(Wz / tz);
        return {
          left: zz.left + Xz * sz,
          top: zz.top + Oz * Fz,
          width: zz.width,
          height: zz.height
        }
      },
      ws = ".EntireInventoryWrapper .Inventory, .HotBarGameItemsContainer",
      Ds = ".LazyLoadedItemWrapper",
      gs = ["[data-inven-idx]", "[data-recipe-key]", "[role=button]", "button", "input:not([type=hidden])", "textarea", ".CreativeCategoryTab", ".CreativeCategoryDropdownButton", ".CreativeCategoryDropdownOption", "[data-craft-ingredient]"].join(","),
      Hs = [
        ["hotbar", ".HotBarGameItemsContainer"],
        ["gameButtons", ".ClientGameInventoryButtons"],
        ["categories", ".CreativeCategoryRail"],
        ["recipe", ".CraftableInfo"],
        ["armour", ".ArmourItemSlots"],
        ["main", ".InvenBodyRight"],
        ["left", ".InvenLeftSide"]
      ],
      Bs = ["gameButtons", "categories", "left", "recipe", "armour", "main", "hotbar"],
      Ps = zz => zz.hasAttribute("data-inven-idx") ? "slot" : zz.hasAttribute("data-recipe-key") ? "recipe" : zz.hasAttribute("data-craft-ingredient") || Kt(zz) ? "info" : Pt(zz) ? "textField" : "button",
      rs = (zz, tz) => "slot" === tz ? Number(zz.getAttribute("data-inven-idx")) : null,
      Ys = zz => zz.matches(Ds) ? zz.querySelector(gs) : zz,
      xs = zz => {
        var tz, sz;
        return {
          element: zz,
          recipe: null !== (tz = zz && (null === (sz = Ys(zz)) || void 0 === sz ? void 0 : sz.getAttribute("data-recipe-key"))) && void 0 !== tz ? tz : null
        }
      },
      ms = zz => {
        const tz = Ys(zz);
        if (!tz) return {
          kind: "pending",
          idx: null
        };
        const sz = Ps(tz);
        return {
          kind: sz,
          idx: rs(tz, sz)
        }
      },
      Is = zz => {
        const tz = [];
        for (const [sz, Fz] of Hs) {
          zz.matches(Fz) && tz.push([sz, zz]);
          for (const Wz of zz.querySelectorAll(Fz)) tz.push([sz, Wz])
        }
        return tz
      },
      Cs = (zz, tz) => {
        for (const [sz, Fz] of zz)
          if (Fz.contains(tz)) return sz;
        return "other"
      },
      es = (zz, tz, sz, Fz, Wz, Xz, Oz, oz) => {
        var vz;
        const Uz = zz.children,
          Kz = Rt(Uz[0].getBoundingClientRect()),
          uz = [{
            element: Uz[0],
            rect: Kz
          }];
        if (Xz.push(uz[0]), 0 === Kz.width || 0 === Kz.height) return;
        let Nz = 1;
        for (; Nz < Uz.length && Math.abs(Uz[Nz].getBoundingClientRect().top - Kz.top) < 1;) Nz++;
        const bz = zz => {
            const tz = {
              element: Uz[zz],
              rect: Rt(Uz[zz].getBoundingClientRect())
            };
            return Xz.push(tz), uz.push(tz), tz.rect
          },
          wz = Nz > 1 ? bz(1).left - Kz.left : Kz.width,
          Dz = Uz.length > Nz ? bz(Nz).top - Kz.top : Kz.height,
          gz = Oz.find(zz, tz);
        let Hz = null;
        if (gz) {
          var Bz;
          const {
            container: zz,
            box: tz
          } = gz;
          Hz = null !== (Bz = oz.get(zz)) && void 0 !== Bz ? Bz : null, Hz || (Hz = {
            top: zz.scrollTop,
            left: zz.scrollLeft,
            box: tz,
            viewport: Fz,
            targets: [],
            probes: [],
            holdsOthers: !1
          }, oz.set(zz, Hz)), Hz.probes.push(...uz)
        }
        const Pz = Wz.length;
        for (let mz = 0; mz < Uz.length; mz++) {
          var rz, Yz, xz;
          const zz = Uz[mz],
            tz = bs(Kz, Nz, wz, Dz, mz),
            Xz = zz.firstElementChild ? zz.querySelector(gs) : null,
            Oz = Xz ? Ps(Xz) : "pending";
          Wz.push({
            key: Vt(zz),
            rect: tz,
            panel: sz,
            scrollGroup: null !== (rz = null === gz || void 0 === gz ? void 0 : gz.group) && void 0 !== rz ? rz : null,
            visible: Et(tz, Fz, null === gz || void 0 === gz ? void 0 : gz.box),
            clip: null !== (Yz = null === gz || void 0 === gz ? void 0 : gz.box) && void 0 !== Yz ? Yz : null,
            element: zz,
            kind: Oz,
            idx: Xz ? rs(Xz, Oz) : null,
            scrollContainer: null !== (xz = null === gz || void 0 === gz ? void 0 : gz.container) && void 0 !== xz ? xz : null
          })
        }
        null === (vz = Hz) || void 0 === vz || vz.targets.push(...Wz.slice(Pz))
      },
      Zs = zz => zz instanceof Element && null !== zz.closest(Ds),
      Gs = zz => null !== zz.scrollContainer && Zs(zz.element);
    class Ts {
      constructor() {
        this.latched = null, this.presses = 0
      }
      press(zz, tz, sz, Fz) {
        this.latched = {
          source: zz,
          focusKey: tz,
          sinceMs: sz,
          hold: {
            id: ++this.presses,
            holdMs: Fz
          }
        }
      }
      update(zz, tz, sz) {
        const Fz = this.latched;
        return Fz ? zz && tz === Fz.focusKey ? sz - Fz.sinceMs < Fz.hold.holdMs ? null : (this.latched = null, Fz.source) : (this.latched = null, null) : null
      }
      getHold() {
        var zz, tz;
        return null !== (zz = null === (tz = this.latched) || void 0 === tz ? void 0 : tz.hold) && void 0 !== zz ? zz : null
      }
      reset() {
        this.latched = null
      }
    }
    var cs = sz(8214);
    const As = {
        kind: "none"
      },
      ys = zz => ({
        x: zz.clientX,
        y: zz.clientY
      }),
      Ms = () => 2 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
    class ds {
      constructor() {
        this.hovered = As, this.signature = "", this.holding = !1, this.lastPoint = {
          clientX: 0,
          clientY: 0
        }
      }
      sync(zz, tz, sz, Fz, Wz) {
        const Xz = null !== tz ? {
            kind: "slot",
            idx: tz
          } : sz ? {
            kind: "element",
            element: sz
          } : As,
          Oz = `${Wz}|${Math.round(Fz.clientX)},${Math.round(Fz.clientY)}`,
          oz = (vz = this.hovered, Uz = Xz, "slot" === vz.kind && "slot" === Uz.kind ? vz.idx === Uz.idx : "element" === vz.kind && "element" === Uz.kind ? vz.element === Uz.element : vz.kind === Uz.kind);
        var vz, Uz;
        if (oz && Oz === this.signature) return;
        const Kz = !oz || Wz !== this.holding || "" === this.signature;
        this.signature = Oz, this.holding = Wz, this.lastPoint = Fz;
        const uz = this.hovered;
        if (this.hovered = Xz, "slot" === Xz.kind) return this.leaveElement(uz, null, Fz), void(Kz ? zz.hover(Xz.idx, Fz) : zz.moveTo(Fz));
        if (oz) return void("element" === Xz.kind ? Ct(Xz.element, Xz.element, ys(Fz)) : zz.hover(null, Fz));
        zz.hover(null, Fz);
        const Nz = "element" === Xz.kind ? Xz.element : null;
        "element" === uz.kind ? Ct(uz.element, Nz, ys(Fz)) : Nz && Ct(null, Nz, ys(Fz))
      }
      invalidate() {
        this.signature = ""
      }
      clear(zz) {
        const tz = this.hovered;
        this.hovered = As, this.signature = "", "none" !== tz.kind && (this.leaveElement(tz, null, this.lastPoint), zz && "slot" === tz.kind && zz.hover(null, this.lastPoint))
      }
      leaveElement(zz, tz, sz) {
        "element" === zz.kind && Ct(zz.element, tz, ys(sz))
      }
    }
    class hs {
      constructor() {
        this.lastTiltedMs = -1 / 0
      }
      update(zz, tz) {
        mz(zz) && (this.lastTiltedMs = tz)
      }
      allowsClick(zz) {
        return zz - this.lastTiltedMs > 150
      }
    }
    class Qs {
      constructor() {
        this.remainder = 0, this.container = null
      }
      isScrolling(zz) {
        return 0 !== (0, wz.k)(zz, .2).y
      }
      step(zz, tz, sz) {
        zz !== this.container && (this.container = zz, this.remainder = 0);
        const Fz = Jz(tz, sz).y;
        if (0 === Fz) return this.remainder = 0, !1;
        const Wz = this.remainder + Fz,
          Xz = Math.trunc(Wz);
        if (this.remainder = Wz - Xz, 0 === Xz) return !1;
        const Oz = zz.scrollTop;
        return zz.scrollTop = Oz + Xz, zz.scrollTop !== Oz
      }
      current() {
        var zz;
        return null !== (zz = this.container) && void 0 !== zz && zz.isConnected ? this.container : null
      }
      reset() {
        this.remainder = 0, this.container = null
      }
    }
    var ks = sz(8216);
    const is = "[data-pad-inventory-default]",
      Ls = ".HotBarGameItemsContainer .InvenItem.Selected",
      ls = {
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
      ns = [
        ["primary", "inventoryPrimary"],
        ["secondary", "inventorySecondary"],
        ["quickMove", "inventoryQuickMove"],
        ["hotbarSwap", "inventoryHotbarSwap"],
        ["back", "inventoryClose"],
        ["openButton", "inventory"]
      ],
      as = ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryHotbarSwap", "inventoryClose", "inventoryDrop"],
      qs = ["inventoryPanelPrevious", "inventoryPanelNext", "menuPageUp", "menuPageDown"],
      Ss = [...as, ...qs],
      Vs = () => {
        return zz = (0, Kz.f)("inventory"), !Ss.map(Kz.f).includes(zz) && !(0, wz.H)(zz);
        var zz
      },
      Rs = new Set(["slotPrimary", "slotSecondary", "slotQuickMove", "pressPrimary", "pressSecondary", "openKeyboard"]),
      ps = (zz, tz) => {
        const sz = !(null === tz || void 0 === tz || !tz.isHolding());
        return function(zz, tz) {
          const sz = zz.find((zz => zz.visible && tz(zz)));
          if (sz) return sz;
          for (var Fz = arguments.length, Wz = new Array(Fz > 2 ? Fz - 2 : 0), Xz = 2; Xz < Fz; Xz++) Wz[Xz - 2] = arguments[Xz];
          for (const Oz of Wz) {
            const tz = Ns(zz.filter(Oz));
            if (tz) return tz
          }
          return Ns(zz)
        }(zz, (zz => {
          const {
            element: tz
          } = zz;
          return tz.matches(is) || null !== tz.querySelector(is) || tz.matches(Ls)
        }), (zz => "slot" === zz.kind ? sz || null !== zz.idx && !(null === tz || void 0 === tz || !tz.hasItemAt(zz.idx)) : "recipe" === zz.kind || "pending" === zz.kind), (zz => "slot" === zz.kind || "button" === zz.kind))
      };
    class fs {
      constructor() {
        this.set = null, this.observer = new MutationObserver((zz => {
          zz.some((zz => !Zs(zz.target))) && (this.set = null)
        })), this.invalidate = () => {
          this.set = null
        }, this.onScroll = zz => {
          this.scrolled(zz.target)
        }
      }
      get() {
        if (!this.set) {
          this.set = (() => {
            const zz = [],
              tz = [];
            let sz = !1;
            const Fz = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              Wz = new Map,
              Xz = new nt(tz);
            for (const uz of document.querySelectorAll(ws)) {
              const Kz = Is(uz);
              sz ||= null !== uz.querySelector(".CreativeCategoryTab");
              for (const sz of uz.querySelectorAll(`${Ds}:first-child`)) {
                const Oz = sz.parentElement;
                es(Oz, uz, Cs(Kz, Oz), Fz, zz, tz, Xz, Wz)
              }
              for (const sz of uz.querySelectorAll(gs)) {
                var Oz, oz, vz, Uz;
                if (sz.closest(Ds) || sz.closest("[data-pad-ignore]")) continue;
                const Nz = null === (Oz = sz.parentElement) || void 0 === Oz ? void 0 : Oz.closest(gs);
                if (Nz && uz.contains(Nz)) continue;
                const bz = Ps(sz),
                  wz = rs(sz, bz);
                if (-1 === wz) continue;
                const Dz = Rt(sz.getBoundingClientRect());
                tz.push({
                  element: sz,
                  rect: Dz
                });
                const gz = Xz.findForParent(sz.parentElement, uz),
                  Hz = gz && !Wz.has(gz.container) ? gz : null;
                (Hz ? pt(Dz) : ft(Dz, Fz)) && zz.push({
                  key: Vt(sz),
                  rect: Dz,
                  panel: Cs(Kz, sz),
                  scrollGroup: null !== (oz = null === Hz || void 0 === Hz ? void 0 : Hz.group) && void 0 !== oz ? oz : null,
                  visible: Et(Dz, Fz, null === Hz || void 0 === Hz ? void 0 : Hz.box),
                  clip: null !== (vz = null === Hz || void 0 === Hz ? void 0 : Hz.box) && void 0 !== vz ? vz : null,
                  element: sz,
                  kind: bz,
                  idx: wz,
                  scrollContainer: null !== (Uz = null === Hz || void 0 === Hz ? void 0 : Hz.container) && void 0 !== Uz ? Uz : null
                })
              }
            }
            for (const [uz, Nz] of Wz) Nz.holdsOthers = tz.some((zz => zz.element !== uz && uz.contains(zz.element) && !zz.element.closest(Ds)));
            const Kz = new Map;
            for (const uz of zz) Kz.set(uz.element, uz);
            return {
              targets: zz,
              byElement: Kz,
              hasCategories: sz,
              probes: tz,
              scrollers: Wz
            }
          })(), this.observer.disconnect();
          for (const zz of document.querySelectorAll(ws)) this.observer.observe(zz, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "disabled", "aria-disabled", "tabindex", "data-inven-idx"]
          })
        }
        return this.set
      }
      scrolled(zz) {
        !this.set || zz instanceof Element && ((zz, tz) => {
          const sz = zz.scrollers.get(tz);
          if (!sz || sz.holdsOthers || tz.scrollLeft !== sz.left) return !1;
          const Fz = tz.scrollTop - sz.top;
          if (0 === Fz) return !0;
          sz.top = tz.scrollTop;
          for (const Wz of sz.probes) Wz.rect.top -= Fz;
          for (const Wz of sz.targets) Wz.rect.top -= Fz, Wz.visible = Et(Wz.rect, sz.viewport, sz.box);
          return !0
        })(this.set, zz) || (this.set = null)
      }
      revalidate() {
        this.set && this.set.probes.some((zz => {
          return tz = zz.rect, sz = zz.element.getBoundingClientRect(), !(tz.left === sz.left && tz.top === sz.top && tz.width === sz.width && tz.height === sz.height);
          var tz, sz
        })) && (this.set = null)
      }
      disconnect() {
        this.observer.disconnect(), this.set = null
      }
    }
    const Es = new class {
        constructor() {
          this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(wz.D.map((zz => [zz, (0, Dz.e)(wz.G)]))), this.stickRepeat = new wz.c((0, Dz.e)(wz._)), this.pageUpTimer = (0, Dz.e)(wz.W), this.pageDownTimer = (0, Dz.e)(wz.W), this.stickGate = new Yz, this.pointer = null, this.activePress = null, this.dropLatch = new Ts, this.scroller = new Qs, this.scrollStickClick = new hs, this.hover = new ds, this.lastRealPointer = null, this.placeAfterCategory = null, this.hotbarPick = null, this.ring = new Lz, this.targets = new fs, this.hasCategories = !1, this.wasShowing = !1, this.state = cs.b, this.isActive = () => (0, lt.i)(), this.isShowing = () => "inventory" === uz.c.getActiveConsumerName() && (0, bz.k)(), this.getState = () => this.state, this.isSteppingSlots = () => this.isShowing() && null === this.pointer, this.onDeactivate = () => {
            this.endInteraction((0, lt.h)()), (0, lt.i)() || this.forgetSurface()
          }, this.forgetSurface = () => {
            var zz;
            this.reopenSlotIdx = null !== (zz = this.focused ? ms(this.focused).idx : null) && void 0 !== zz ? zz : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, lt.r)(), this.panelMemory.clear(), this.targets.disconnect()
          }, this.onFrame = zz => {
            (0, oz.unstable_batchedUpdates)((() => {
              this.frame(zz)
            }))
          }, this.shouldBlockRealPointer = zz => zz.isTrusted && !(0, Hz.r)(zz) && this.isShowing(), this.noteRealPointer = zz => {
            zz instanceof MouseEvent && zz.isTrusted && !(0, Hz.r)(zz) && (this.lastRealPointer ??= {
              x: 0,
              y: 0
            }, this.lastRealPointer.x = zz.clientX, this.lastRealPointer.y = zz.clientY)
          }, this.wakePressActs = zz => {
            var tz;
            return zz === (0, Kz.f)("inventoryClose") ? !(null !== (tz = (0, lt.h)()) && void 0 !== tz && tz.isHolding()) : !(zz !== (0, Kz.f)("inventory") || !Vs()) || ((0, wz.H)(zz) ? this.isNavButton(zz) : qs.some((tz => (0, Kz.f)(tz) === zz)))
          }
        }
        frame(zz) {
          var tz, sz, Fz, Wz, Xz;
          const Oz = (0, lt.h)();
          if (!(0, bz.k)()) return void(this.wasShowing && (this.endInteraction(Oz), this.rehoverRealPointer()));
          this.wasShowing = !0, this.applyFocusRequest(), zz.wokeDevice && this.focusWakePointer(!(null === Oz || void 0 === Oz || !Oz.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, Nz.k)().inventoryNavigation || this.pointer || this.engagePointer();
          const oz = performance.now();
          this.handleNavigation(zz, oz), this.handlePanels(zz), this.handlePaging(zz, oz), this.handleScroll(zz), this.handleButtons(zz, oz, Oz), this.applyFocusRequest(), this.pointer && this.hoverAtPointer();
          const vz = this.ensureFocus(),
            Uz = this.focusContext(Oz);
          this.ring.show(vz);
          const uz = "slot" === Uz.kind ? Uz.idx : null,
            wz = null !== (tz = null === (sz = Uz.actionElement) || void 0 === sz ? void 0 : sz.querySelector(".DoCraftItem")) && void 0 !== tz ? tz : Uz.actionElement;
          this.pointer ? (this.hover.sync(Oz, uz, wz, ((zz, tz) => {
            const sz = tz ? Ms() : 0;
            return {
              clientX: zz.x - sz,
              clientY: zz.y - sz
            }
          })(this.pointer, Uz.holding), Uz.holding), kt.set({
            x: this.pointer.x,
            y: this.pointer.y,
            visible: !0,
            pressed: zz.isHeld((0, Kz.f)("inventoryPrimary"))
          })) : vz && this.focused && this.hover.sync(Oz, uz, wz, ((zz, tz) => {
            if (!tz) return {
              clientX: zz.left + zz.width - 10,
              clientY: zz.top + zz.height / 2 - 10
            };
            const sz = Ms();
            return {
              clientX: zz.left + zz.width / 2 - sz,
              clientY: zz.top + zz.height / 2 - sz
            }
          })(vz, Uz.holding), Uz.holding), this.publishState({
            showing: !0,
            kind: Uz.kind,
            holding: Uz.holding,
            slotHasItem: Uz.slotHasItem,
            pressHints: null !== (Fz = null === (Wz = Uz.press) || void 0 === Wz ? void 0 : Wz.hints) && void 0 !== Fz ? Fz : null,
            hasCategories: this.hasCategories,
            hasList: !!this.focusTarget && Gs(this.focusTarget),
            openButtonCloses: Vs(),
            steppingSlots: null === this.pointer,
            quickMoveToHotbar: "slot" === Uz.kind && !(null === (Xz = Uz.actionElement) || void 0 === Xz || !Xz.closest(".CreativeItemSlots")),
            dropStackHold: this.dropLatch.getHold(),
            hotbarPicking: null !== this.hotbarPick
          })
        }
        focusWakePointer(zz) {
          var tz;
          const sz = (0, bz.e)();
          if (!sz) return;
          this.targets.revalidate();
          const Fz = this.getTargets().targets;
          this.setFocus(null !== (tz = us(sz, Fz)) && void 0 !== tz ? tz : zz ? vs(sz, Fz, (zz => {
            let {
              rect: tz
            } = zz;
            const Fz = Math.max(tz.left - sz.x, 0, sz.x - (tz.left + tz.width)),
              Wz = Math.max(tz.top - sz.y, 0, sz.y - (tz.top + tz.height));
            return Math.hypot(Fz, Wz) <= Math.min(tz.width, tz.height) / 2
          })) : null, !1), "cursor" === (0, Nz.k)().inventoryNavigation && (this.pointer = {
            x: sz.x,
            y: sz.y,
            speedRamp: 0
          })
        }
        rehoverRealPointer() {
          const zz = this.lastRealPointer;
          if (!zz || "keyboardMouse" !== vz.b.get("activeInputDevice")) return;
          const tz = document.elementFromPoint(zz.x, zz.y);
          tz && Ct(null, tz, zz)
        }
        endInteraction(zz) {
          this.wasShowing = !1, this.hotbarPick = null, this.releasePress(), this.dropLatch.reset(), this.scroller.reset();
          for (const tz of this.dpadTimers.values()) tz.reset();
          this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(zz), this.ring.hide(), this.releasePointer(), this.publishState(cs.b)
        }
        getTargets() {
          const zz = this.targets.get();
          return this.hasCategories = zz.hasCategories, zz
        }
        currentTarget() {
          var zz;
          return this.focused && null !== (zz = this.getTargets().byElement.get(this.focused)) && void 0 !== zz ? zz : null
        }
        readFocusRect() {
          const zz = this.focused;
          if (null === zz || void 0 === zz || !zz.isConnected || !zz.closest(ws)) return null;
          const tz = zz.getBoundingClientRect();
          return tz.width > 0 && tz.height > 0 ? {
            left: tz.left,
            top: tz.top,
            width: tz.width,
            height: tz.height
          } : null
        }
        ensureFocus() {
          const zz = this.readFocusRect();
          if (zz || this.pointer) return zz;
          const {
            targets: tz,
            byElement: sz
          } = this.getTargets();
          let Fz = null,
            Wz = !1;
          if (this.lastRect) Fz = vs(zs(this.lastRect), tz);
          else {
            var Xz, Oz;
            const zz = ((zz, tz) => {
                const sz = document.querySelector(".EntireInventoryWrapper [data-pad-inventory-start]");
                return sz ? ps(zz.filter((zz => sz.contains(zz.element))), tz) : null
              })(tz, (0, lt.h)()),
              oz = tz.find((zz => null !== zz.idx && zz.idx === this.reopenSlotIdx)),
              vz = document.querySelector(Ls);
            Wz = null !== zz || void 0 !== oz, Fz = null !== (Xz = null !== (Oz = null !== zz && void 0 !== zz ? zz : oz) && void 0 !== Oz ? Oz : vz && sz.get(vz)) && void 0 !== Xz ? Xz : Ns(tz)
          }
          return this.setFocus(Fz, Wz), this.lastRect
        }
        setFocus(zz) {
          let tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          zz && (this.focused = zz.element, this.focusTarget = zz, this.panelMemory.set(zz.panel, zz.element), tz && zz.scrollContainer && ((zz, tz) => {
            const sz = zz.getBoundingClientRect(),
              Fz = Az(tz),
              Wz = tz.scrollTop;
            return sz.top < Fz.top ? tz.scrollTop -= Fz.top - sz.top : sz.bottom > Fz.bottom && (tz.scrollTop += sz.bottom - Fz.bottom), tz.scrollTop !== Wz
          })(zz.element, zz.scrollContainer) && this.targets.invalidate(), this.lastRect = this.readFocusRect(), this.followFocusJump())
        }
        followFocusJump() {
          if (this.pointer)
            if ("cursor" === (0, Nz.k)().inventoryNavigation) {
              if (this.lastRect) {
                const zz = zs(this.lastRect);
                this.pointer = {
                  x: zz.x,
                  y: zz.y,
                  speedRamp: 0
                }
              }
            } else this.releasePointer()
        }
        engagePointer() {
          const zz = this.lastRect ? zs(this.lastRect) : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          };
          this.pointer = {
            x: zz.x,
            y: zz.y,
            speedRamp: 0
          }
        }
        releasePointer() {
          this.pointer = null, kt.hide()
        }
        hoverAtPointer() {
          var zz;
          const tz = us(this.pointer, this.getTargets().targets);
          this.focusTarget = tz, (null === tz || void 0 === tz ? void 0 : tz.element) !== this.focused && (this.focused = null !== (zz = null === tz || void 0 === tz ? void 0 : tz.element) && void 0 !== zz ? zz : null, tz && (this.panelMemory.set(tz.panel, tz.element), this.lastRect = this.readFocusRect()))
        }
        moveCursor(zz, tz) {
          const sz = this.focusTarget,
            Fz = sz && (0, Nz.k)().cursorMagnetism ? zs(Us(sz)) : null;
          this.pointer = xz(this.pointer, {
            stick: zz.leftStick,
            moveDeadzone: (0, Nz.k)().moveDeadzone,
            dpad: tz,
            dtMs: zz.dtMs,
            cursorSpeedPercent: (0, Nz.k)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: {
              overInteractive: !1,
              magnetTarget: Fz
            }
          })
        }
        move(zz) {
          this.targets.revalidate();
          const tz = this.currentTarget();
          tz && this.setFocus(os(tz, this.getTargets().targets, zz))
        }
        step(zz) {
          const tz = this.pointer;
          if (tz && (this.releasePointer(), !this.focused)) return this.targets.revalidate(), void this.setFocus(((zz, tz, sz) => {
            var Fz;
            const Wz = {
              key: "",
              rect: {
                left: zz.x,
                top: zz.y,
                width: 0,
                height: 0
              },
              panel: "",
              scrollGroup: null,
              visible: !0,
              clip: null
            };
            return null !== (Fz = os(Wz, tz, sz)) && void 0 !== Fz ? Fz : vs(zz, tz)
          })(tz, this.getTargets().targets, zz));
          this.move(zz)
        }
        isNavButton(zz) {
          return !as.some((tz => (0, Kz.f)(tz) === zz)) && !(zz === (0, Kz.f)("inventory") && Vs())
        }
        handleNavigation(zz, tz) {
          const sz = (0, Nz.k)().inventoryNavigation,
            Fz = {
              x: 0,
              y: 0
            };
          let Wz = null;
          for (const vz of wz.D) {
            const Xz = this.isNavButton(vz) && zz.isHeld(vz);
            Xz && (Fz.x += ls[vz].x, Fz.y += ls[vz].y), this.dpadTimers.get(vz).update(Xz, tz) && "cursor" !== sz && (Wz ??= vz)
          }
          const Xz = this.stickGate.update(zz.leftStick, (0, Nz.k)().moveDeadzone);
          if (Wz && (this.step(Wz), this.stickGate.lock()), "slot" !== sz) {
            const tz = ((zz, tz, sz, Fz) => "hybrid" !== zz ? "cursor" === zz : !Fz && (tz || sz))(sz, null !== this.pointer, Xz, null !== Wz);
            return tz && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(zz, "cursor" === sz ? Fz : {
              x: 0,
              y: 0
            }))
          }
          const Oz = (0, wz.k)(zz.leftStick, (0, Nz.k)().moveDeadzone),
            oz = this.stickRepeat.update(Xz ? (0, wz.ab)(Oz) : null, tz);
          oz && this.move(oz)
        }
        applyCategoryPlace() {
          const zz = this.placeAfterCategory;
          if (!zz) return;
          this.placeAfterCategory = null, this.targets.invalidate();
          const tz = vs(zs(zz.rect), this.getTargets().targets, (tz => tz.scrollGroup === zz.scrollGroup));
          this.setFocus(tz, !1)
        }
        applyFocusRequest() {
          const zz = (0, lt.r)();
          zz && (this.targets.invalidate(), this.setFocus((0, lt.e)(this.getTargets().targets, zz)))
        }
        handlePanels(zz) {
          var tz, sz, Fz;
          const Wz = zz.wasPressed((0, Kz.f)("inventoryPanelPrevious")),
            Xz = zz.wasPressed((0, Kz.f)("inventoryPanelNext"));
          if (!Wz && !Xz) return;
          const {
            targets: Oz
          } = this.getTargets(), oz = (vz = ((zz, tz) => {
            const sz = [];
            for (const Wz of zz) Wz.visible && !sz.includes(Wz.panel) && sz.push(Wz.panel);
            const Fz = zz => {
              const Fz = tz.indexOf(zz);
              return -1 === Fz ? tz.length + sz.indexOf(zz) : Fz
            };
            return sz.sort(((zz, tz) => Fz(zz) - Fz(tz)))
          })(Oz, Bs), Uz = null !== (tz = null === (sz = this.focusTarget) || void 0 === sz ? void 0 : sz.panel) && void 0 !== tz ? tz : null, uz = Xz ? 1 : -1, 0 === vz.length ? null : vz[ts(null === Uz ? -1 : vz.indexOf(Uz), vz.length, uz)]);
          var vz, Uz, uz;
          if (null === oz) return;
          const Nz = this.panelMemory.get(oz),
            bz = Oz.filter((zz => zz.panel === oz)),
            wz = null !== (Fz = bz.find((zz => zz.element === Nz && zz.visible))) && void 0 !== Fz ? Fz : ps(bz, (0, lt.h)());
          this.setFocus(wz)
        }
        handlePaging(zz, tz) {
          const sz = (0, Kz.f)("menuPageUp"),
            Fz = (0, Kz.f)("menuPageDown"),
            Wz = this.pageUpTimer.update(zz.isHeld(sz), tz),
            Xz = this.pageDownTimer.update(zz.isHeld(Fz), tz);
          if (!Wz && !Xz) return;
          const Oz = Xz ? 1 : -1;
          if (!zz.wasPressed(Xz ? Fz : sz) && this.hasCategories) return;
          if ((zz => {
              const tz = Array.from(document.querySelectorAll(".EntireInventoryWrapper .CreativeCategoryTab"));
              if (0 === tz.length) return !1;
              const sz = tz.findIndex((zz => zz.classList.contains("Selected"))),
                Fz = tz[ts(sz, tz.length, zz)];
              return It(Fz, rt(Fz)), !0
            })(Oz)) {
            var oz, vz;
            this.targets.invalidate();
            const zz = null !== (oz = null === (vz = this.focusTarget) || void 0 === vz ? void 0 : vz.scrollGroup) && void 0 !== oz ? oz : null,
              tz = this.readFocusRect();
            return void(this.placeAfterCategory = null !== zz && tz && !this.pointer ? {
              rect: tz,
              scrollGroup: zz
            } : null)
          }
          const {
            targets: Uz
          } = this.getTargets(), uz = this.currentTarget(), Nz = uz && Gs(uz) ? uz : Uz.find((zz => Gs(zz) && zz.visible));
          if (!Nz) return;
          const bz = ((zz, tz, sz, Fz) => {
            if (null === zz.scrollGroup) return null;
            const Wz = zs(zz.rect),
              Xz = Wz.x,
              Oz = Wz.y + ("Down" === sz ? Fz : -Fz);
            let oz = null,
              vz = 1 / 0;
            for (const Uz of tz) {
              if (Uz.scrollGroup !== zz.scrollGroup || Uz.key === zz.key) continue;
              const tz = zs(Uz.rect);
              if ("Down" === sz ? tz.y <= Wz.y : tz.y >= Wz.y) continue;
              const Fz = Math.hypot(tz.x - Xz, tz.y - Oz);
              Fz < vz && (oz = Uz, vz = Fz)
            }
            return oz
          })(Nz, Uz, Oz > 0 ? "Down" : "Up", Nz.scrollContainer.clientHeight);
          this.setFocus(null !== bz && void 0 !== bz ? bz : Nz)
        }
        handleScroll(zz) {
          var tz, sz, Fz, Wz, Xz, Oz;
          if (!this.scroller.isScrolling(zz.rightStick)) return void this.scroller.reset();
          const {
            targets: oz
          } = this.getTargets(), vz = this.pointer, Uz = !vz && this.focusTarget && Gs(this.focusTarget) ? this.focusTarget.scrollContainer : null, Kz = vz && (null === (tz = oz.find((zz => zz.clip && Ks(zz.clip, vz)))) || void 0 === tz ? void 0 : tz.scrollContainer), uz = null !== (sz = null !== (Fz = null !== (Wz = this.scroller.current()) && void 0 !== Wz ? Wz : Kz) && void 0 !== Fz ? Fz : Uz) && void 0 !== sz ? sz : null === (Xz = oz.find(Gs)) || void 0 === Xz ? void 0 : Xz.scrollContainer;
          if (!uz || !this.scroller.step(uz, zz.rightStick, zz.dtMs)) return;
          this.targets.scrolled(uz);
          const Nz = vz || (null === (Oz = this.focusTarget) || void 0 === Oz ? void 0 : Oz.scrollContainer) !== uz ? null : this.readFocusRect();
          if (!Nz) return;
          const bz = Az(uz),
            wz = zs(Nz);
          if (wz.y < bz.top || wz.y > bz.bottom) {
            const zz = this.focusTarget.scrollGroup,
              tz = vs(wz, this.getTargets().targets, (tz => tz.scrollGroup === zz));
            this.setFocus(tz, !1)
          }
        }
        focusContext(zz) {
          const {
            kind: tz,
            idx: sz
          } = this.focused ? ms(this.focused) : {
            kind: null,
            idx: null
          }, Fz = this.focused ? Ys(this.focused) : null, Wz = Fz ? (0, ks.b)(Fz) : null;
          return {
            kind: tz,
            idx: sz,
            actionElement: Fz,
            press: Wz,
            hasPress: null !== Wz,
            hasBack: !(null === Wz || void 0 === Wz || !Wz.back),
            holding: zz.isHolding(),
            slotHasItem: null !== sz && zz.hasItemAt(sz)
          }
        }
        handleButtons(zz, tz, sz) {
          var Fz, Wz;
          if (!this.activePress || zz.isHeld(this.activePress.button) && (Fz = this.activePress.target, Wz = this.focused, null !== Fz.recipe ? xs(Wz).recipe === Fz.recipe : Wz === Fz.element) || this.releasePress(), this.scrollStickClick.update(zz.rightStick, tz), !this.handleHotbarPick(zz, sz)) {
            for (const [Fz, Wz] of ns) {
              const Xz = (0, Kz.f)(Wz);
              if (!zz.wasPressed(Xz) || "openButton" === Fz && !Vs()) continue;
              if ("RS" === Xz && !this.scrollStickClick.allowsClick(tz)) continue;
              const Oz = this.focusContext(sz),
                oz = it(Fz, Oz);
              oz && this.runIntent(oz, Oz, Xz, sz)
            }
            this.handleDrop(zz, tz, sz)
          }
        }
        handleHotbarPick(zz, tz) {
          const sz = this.hotbarPick;
          if (!sz) return !1;
          const Fz = zz.wasPressed((0, Kz.f)("inventoryPrimary")) || zz.wasPressed((0, Kz.f)("inventoryHotbarSwap"));
          if (!Fz && !zz.wasPressed((0, Kz.f)("inventoryClose")) && !tz.isHolding()) return !(zz.wasPressed((0, Kz.f)("inventory")) && Vs());
          const Wz = this.focusTarget;
          Fz && "hotbar" === (null === Wz || void 0 === Wz ? void 0 : Wz.panel) && null !== Wz.idx && Wz.idx !== sz.idx && (tz.swapWithHotbar(Wz.idx, sz.idx), this.afterAction()), this.hotbarPick = null;
          const Xz = sz.element.isConnected ? this.getTargets().byElement.get(sz.element) : void 0;
          return Xz && this.setFocus(Xz), !0
        }
        startHotbarPick(zz) {
          var tz;
          const {
            targets: sz,
            byElement: Fz
          } = this.getTargets(), Wz = document.querySelector(Ls), Xz = null !== (tz = Wz && Fz.get(Wz)) && void 0 !== tz ? tz : sz.find((zz => "hotbar" === zz.panel));
          Xz && this.focused && (this.hotbarPick = {
            idx: zz,
            element: this.focused
          }, this.setFocus(Xz))
        }
        focusKey() {
          return this.focused ? Vt(this.focused) : null
        }
        handleDrop(zz, tz, sz) {
          const Fz = (0, Kz.f)("inventoryDrop");
          if (zz.wasPressed(Fz)) {
            const zz = (Wz = this.focusContext(sz)).holding ? {
              kind: "po"
            } : "slot" === Wz.kind && Wz.slotHasItem && null !== Wz.idx ? {
              kind: "slot",
              idx: Wz.idx
            } : null;
            return void(zz && (this.dropFrom(zz, !1, sz), this.dropLatch.press(zz, this.focusKey(), tz, gz.c[(0, Nz.k)().tapHoldTime].dropStackMs), this.afterAction()))
          }
          var Wz;
          const Xz = this.dropLatch.update(zz.isHeld(Fz), this.focusKey(), tz);
          Xz && ((zz, tz, sz) => "po" === zz.kind ? tz : !tz && sz(zz.idx))(Xz, sz.isHolding(), sz.hasItemAt) && (this.dropFrom(Xz, !0, sz), this.afterAction())
        }
        dropFrom(zz, tz, sz) {
          "po" === zz.kind ? sz.dropHeld(tz, this.slotPoint()) : sz.dropSlot(zz.idx, tz)
        }
        slotPoint() {
          return this.pointer ? {
            clientX: this.pointer.x,
            clientY: this.pointer.y
          } : this.lastRect ? (zz => {
            const tz = zs(zz);
            return {
              clientX: tz.x,
              clientY: tz.y
            }
          })(this.lastRect) : {
            clientX: 0,
            clientY: 0
          }
        }
        runIntent(zz, tz, sz, Fz) {
          const Wz = tz.idx,
            Xz = tz.actionElement;
          switch (Xz && Rs.has(zz) && (0, Hz.s)(Xz), zz) {
            case "slotPrimary":
              Fz.primary(Wz, this.slotPoint());
              break;
            case "slotSecondary":
              Fz.secondary(Wz, this.slotPoint());
              break;
            case "slotQuickMove":
              Fz.quickMove(Wz, this.slotPoint());
              break;
            case "hotbarPick":
              this.startHotbarPick(Wz);
              break;
            case "pressPrimary":
            case "pressSecondary":
              this.startPress(tz.press, "pressPrimary" === zz ? "primary" : "secondary", sz);
              break;
            case "click":
              It(Xz, rt(Xz));
              break;
            case "openKeyboard":
              Pt(Xz) && et(Xz);
              break;
            case "pressBack":
              tz.press.back();
              break;
            case "cancel":
              Fz.cancel();
              break;
            case "close":
              return this.releasePress(), void Fz.close()
          }
          this.afterAction()
        }
        startPress(zz, tz, sz) {
          this.releasePress(), zz.press(tz) && (this.activePress = {
            handlers: zz,
            button: sz,
            target: xs(this.focused)
          })
        }
        releasePress() {
          var zz, tz, sz;
          null === (zz = this.activePress) || void 0 === zz || null === (tz = (sz = zz.handlers).release) || void 0 === tz || tz.call(sz), this.activePress = null
        }
        afterAction() {
          this.targets.invalidate(), this.hover.invalidate()
        }
        publishState(zz) {
          ((zz, tz) => {
            var sz, Fz, Wz, Xz, Oz, oz;
            return zz.showing === tz.showing && zz.kind === tz.kind && zz.holding === tz.holding && zz.slotHasItem === tz.slotHasItem && (null === (sz = zz.pressHints) || void 0 === sz ? void 0 : sz.primary) === (null === (Fz = tz.pressHints) || void 0 === Fz ? void 0 : Fz.primary) && (null === (Wz = zz.pressHints) || void 0 === Wz ? void 0 : Wz.secondary) === (null === (Xz = tz.pressHints) || void 0 === Xz ? void 0 : Xz.secondary) && (null === (Oz = zz.pressHints) || void 0 === Oz ? void 0 : Oz.back) === (null === (oz = tz.pressHints) || void 0 === oz ? void 0 : oz.back) && zz.hasCategories === tz.hasCategories && zz.hasList === tz.hasList && zz.openButtonCloses === tz.openButtonCloses && zz.steppingSlots === tz.steppingSlots && zz.hotbarPicking === tz.hotbarPicking && zz.quickMoveToHotbar === tz.quickMoveToHotbar && zz.dropStackHold === tz.dropStackHold
          })(zz, this.state) || (this.state = zz, Uz.o.Yg(cs.f, zz))
        }
      },
      zF = ["pointermove", "pointerover", "pointerout", "mouseover", "mouseout"];
    var tF = sz(8218),
      sF = sz(308),
      FF = sz(1571),
      WF = sz(7687);
    const XF = "[data-pad-secondary]",
      OF = zz => zz instanceof HTMLElement && Ut(zz) && !Kt(zz),
      oF = zz => {
        const tz = zz.querySelector(XF);
        if (tz && OF(tz)) return tz;
        for (const Wz of null !== (sz = null === (Fz = zz.parentElement) || void 0 === Fz ? void 0 : Fz.children) && void 0 !== sz ? sz : []) {
          var sz, Fz;
          if (Wz !== zz && Wz.matches(XF) && OF(Wz)) return Wz
        }
        return null
      },
      vF = (zz, tz, sz, Fz) => Math.max(0, Math.max(zz, sz) - Math.min(tz, Fz)),
      UF = (zz, tz, sz, Fz) => Math.max(0, Math.min(tz, Fz) - Math.max(zz, sz)),
      KF = (zz, tz, sz) => {
        const Fz = (zz.left + zz.right) / 2,
          Wz = (zz.top + zz.bottom) / 2,
          Xz = (tz.left + tz.right) / 2,
          Oz = (tz.top + tz.bottom) / 2;
        if ("Left" === sz || "Right" === sz) {
          const oz = "Right" === sz ? 1 : -1;
          return {
            forwardGap: "Right" === sz ? tz.left - zz.right : zz.left - tz.right,
            centreForward: (Xz - Fz) * oz,
            sidewaysGap: vF(zz.top, zz.bottom, tz.top, tz.bottom),
            sidewaysOverlap: UF(zz.top, zz.bottom, tz.top, tz.bottom),
            centreSideways: Math.abs(Oz - Wz),
            startSideways: Math.abs(tz.top - zz.top),
            fromSidewaysSize: zz.bottom - zz.top,
            toSidewaysSize: tz.bottom - tz.top,
            toLength: tz.right - tz.left
          }
        }
        const oz = "Down" === sz ? 1 : -1;
        return {
          forwardGap: "Down" === sz ? tz.top - zz.bottom : zz.top - tz.bottom,
          centreForward: (Oz - Wz) * oz,
          sidewaysGap: vF(zz.left, zz.right, tz.left, tz.right),
          sidewaysOverlap: UF(zz.left, zz.right, tz.left, tz.right),
          centreSideways: Math.abs(Xz - Fz),
          startSideways: Math.abs(tz.left - zz.left),
          fromSidewaysSize: zz.right - zz.left,
          toSidewaysSize: tz.right - tz.left,
          toLength: tz.bottom - tz.top
        }
      },
      uF = zz => zz.centreForward > .5 && zz.forwardGap >= -zz.toLength / 2,
      NF = zz => {
        const tz = zz.sidewaysOverlap > 0 ? 0 : 2 * zz.fromSidewaysSize,
          sz = zz.fromSidewaysSize > 1.5 * zz.toSidewaysSize ? zz.startSideways : zz.centreSideways;
        return Math.max(0, zz.forwardGap) + 3 * zz.sidewaysGap + tz + .1 * sz
      },
      bF = (zz, tz) => UF(zz.top, zz.bottom, tz.top, tz.bottom) > 0 || tz.bottom - tz.top > tz.right - tz.left,
      wF = (zz, tz, sz, Fz, Wz, Xz) => {
        const Oz = Wz ? gF(zz, tz, sz, Wz) : new Set,
          oz = BF(zz, tz, sz, Oz);
        return oz < 0 && Oz.size > 0 && Xz ? DF(zz, tz, sz, Xz) : Fz && oz >= 0 ? HF(zz, tz, sz, Fz, oz, Oz) : oz
      },
      DF = (zz, tz, sz, Fz) => {
        const Wz = new Set,
          Xz = BF(zz, tz, "Up", Wz) >= 0,
          Oz = BF(zz, tz, "Down", Wz) >= 0,
          oz = new Set;
        return tz.forEach(((tz, sz) => {
          const Wz = tz.top + tz.bottom < zz.top + zz.bottom;
          Fz[sz] && !(Wz ? Xz : Oz) || oz.add(sz)
        })), BF(zz, tz, sz, oz)
      },
      gF = (zz, tz, sz, Fz) => {
        const Wz = new Set;
        return "Left" !== sz && "Right" !== sz || tz.forEach(((tz, sz) => {
          Fz[sz] && UF(zz.top, zz.bottom, tz.top, tz.bottom) <= 0 && Wz.add(sz)
        })), Wz
      },
      HF = (zz, tz, sz, Fz, Wz, Xz) => {
        const Oz = KF(zz, tz[Wz], sz).forwardGap;
        let oz = Wz,
          vz = Fz[Wz],
          Uz = 1 / 0;
        return tz.forEach(((tz, Kz) => {
          const uz = Fz[Kz];
          if (Xz.has(Kz) || uz < vz || uz === vz && oz === Wz) return;
          const Nz = KF(zz, tz, sz);
          if (!uF(Nz) || Nz.forwardGap < 0 || Nz.forwardGap >= Oz) return;
          const bz = NF(Nz);
          (uz > vz || bz < Uz) && (oz = Kz, vz = uz, Uz = bz)
        })), oz
      },
      BF = (zz, tz, sz, Fz) => {
        let Wz = -1,
          Xz = 1 / 0;
        if (tz.forEach(((tz, Oz) => {
            const oz = ((zz, tz, sz) => {
              const Fz = KF(zz, tz, sz);
              if (!uF(Fz)) return null;
              const Wz = Math.max(0, Fz.forwardGap);
              return Fz.sidewaysOverlap <= 0 && Fz.sidewaysGap > 2 * (Wz + 1) ? null : NF(Fz)
            })(zz, tz, sz);
            null !== oz && oz < Xz && !Fz.has(Oz) && (Xz = oz, Wz = Oz)
          })), Wz < 0) return -1;
        const Oz = tz[Wz],
          oz = KF(zz, Oz, sz).forwardGap;
        let vz = oz,
          Uz = Wz;
        return tz.forEach(((tz, Xz) => {
          if (Xz === Wz || Fz.has(Xz) || !((zz, tz, sz) => {
              const Fz = "Left" === sz || "Right" === sz,
                Wz = Fz ? UF(zz.top, zz.bottom, tz.top, tz.bottom) : UF(zz.left, zz.right, tz.left, tz.right),
                Xz = Fz ? Math.min(zz.bottom - zz.top, tz.bottom - tz.top) : Math.min(zz.right - zz.left, tz.right - tz.left);
              return Wz > 0 && Wz >= Xz / 2
            })(tz, Oz, sz)) return;
          const Kz = KF(zz, tz, sz);
          uF(Kz) && Kz.forwardGap + Kz.toLength <= oz + 1 && Kz.forwardGap < vz && (vz = Kz.forwardGap, Uz = Xz)
        })), Uz
      },
      PF = (zz, tz) => {
        let sz = -1,
          Fz = 1 / 0;
        return tz.forEach(((tz, Wz) => {
          const Xz = Math.max(tz.left - zz.x, 0, zz.x - tz.right),
            Oz = Math.max(tz.top - zz.y, 0, zz.y - tz.bottom),
            oz = Math.hypot(Xz, Oz);
          oz < Fz && (Fz = oz, sz = Wz)
        })), sz
      },
      rF = (zz, tz) => {
        const sz = Math.min(zz.bottom - zz.top, tz.bottom - tz.top) / 2;
        return Math.abs(zz.top - tz.top) > sz ? zz.top - tz.top : zz.left - tz.left
      },
      YF = zz => {
        let tz = -1;
        for (let sz = 0; sz < zz.length; sz++)(tz < 0 || rF(zz[sz], zz[tz]) < 0) && (tz = sz);
        return tz
      };
    var xF = sz(1628),
      mF = sz(8227),
      JF = sz(8230);
    const IF = zz => {
        if ("death" !== zz || "inGame" !== vz.b.get("gameState") || "off" === (0, Nz.k)().quickChat || null === (0, xF.c)()) return !1;
        const tz = (0, Kz.f)("chat");
        return tz !== (0, Kz.f)("menuConfirm") && tz !== (0, Kz.f)("menuBack")
      },
      CF = new mF.e;
    var eF = sz(3976),
      ZF = sz(8238);
    const GF = zz => {
        let tz = null;
        for (const sz of zz.querySelectorAll("[data-pad-tabs]")) Ut(sz) && (!tz || Number(sz.dataset.padTabs) < Number(tz.dataset.padTabs)) && (tz = sz);
        return tz
      },
      TF = (zz, tz, sz, Fz) => {
        zz.focusWhenFound((() => {
          const Wz = zz.pickInitial(tz);
          if (Wz && !sz.has(Wz) && (null === Fz || void 0 === Fz || !Fz.contains(Wz))) return Wz;
          const Xz = ((zz, tz) => {
              const sz = tz => zz.getEnabledCandidates(tz).filter((zz => !zz.closest("[data-pad-tabs]")));
              for (const Fz of Bt(tz)) {
                const zz = sz(Fz);
                if (zz.length > 0) return zz
              }
              return sz(tz)
            })(zz, tz).filter((zz => !sz.has(zz))),
            Oz = YF(Xz.map((zz => zz.getBoundingClientRect())));
          return Oz >= 0 ? Xz[Oz] : null
        }), 3e3)
      },
      cF = (zz, tz, sz, Fz) => {
        var Wz;
        const Xz = ((zz, tz) => {
          if (0 === zz.length) return null;
          const sz = zz.findIndex((zz => "true" === zz.dataset.padSelected));
          return sz < 0 ? tz > 0 ? zz[0] : zz[zz.length - 1] : zz[(sz + tz + zz.length) % zz.length]
        })([...sz.querySelectorAll("[data-pad-tab]")].filter((zz => Ut(zz) && !Kt(zz))), Fz);
        if (!Xz) return;
        const Oz = null !== (Wz = null === zz || void 0 === zz ? void 0 : zz.getFocused()) && void 0 !== Wz ? Wz : null,
          oz = !(null === Oz || void 0 === Oz || !Oz.isConnected) && sz.contains(Oz),
          vz = zz && !oz ? new Set(zz.getEnabledCandidates(tz)) : null;
        Zt(Xz), zz && (vz ? TF(zz, tz, vz, sz) : zz.setFocus(Xz, {
          byUser: !0
        }))
      },
      jF = zz => {
        var tz;
        const sz = Az(null !== (tz = ez(zz, "x")) && void 0 !== tz ? tz : zz),
          Fz = bt(zz).filter((zz => !Kt(zz))),
          Wz = Fz.filter((zz => yz(zz.getBoundingClientRect(), sz)));
        return (Wz.length > 0 ? Wz : Fz).sort(((zz, tz) => rF(zz.getBoundingClientRect(), tz.getBoundingClientRect())))
      },
      AF = (zz, tz, sz) => {
        const Fz = [...tz.querySelectorAll("[data-pad-row]")].filter(Ut),
          Wz = zz.getFocused(),
          Xz = Wz ? Fz.findIndex((zz => zz.contains(Wz))) : -1;
        let Oz = 0,
          oz = sz > 0 ? 0 : Fz.length - 1;
        if (Xz >= 0 && Wz) Oz = Math.max(0, jF(Fz[Xz]).indexOf(Wz)), oz = Xz + sz;
        else if (Wz) {
          const zz = Wz.getBoundingClientRect(),
            tz = Fz.map((tz => {
              const Fz = tz.getBoundingClientRect();
              return sz > 0 ? Fz.top >= zz.top : Fz.bottom <= zz.bottom
            }));
          oz = sz > 0 ? tz.indexOf(!0) : tz.lastIndexOf(!0)
        }
        for (let vz = oz; vz >= 0 && vz < Fz.length; vz += sz) {
          const tz = jF(Fz[vz]);
          if (tz.length > 0) return void zz.setFocus(tz[Math.min(Oz, tz.length - 1)], {
            byUser: !0
          })
        }
      },
      yF = (zz, tz, sz) => {
        var Fz, Wz;
        const Xz = null !== (Fz = null === zz || void 0 === zz ? void 0 : zz.getFocused()) && void 0 !== Fz ? Fz : null,
          Oz = null !== Xz && void 0 !== Xz && Xz.closest("[data-pad-row]") ? "x" : "y",
          oz = null !== (Wz = Xz ? ez(Xz, Oz, tz) : null) && void 0 !== Wz ? Wz : Gz(tz, Oz);
        if (!oz) return;
        const vz = Xz ? rt(Xz) : null;
        if (jz(oz, Oz, sz * ("y" === Oz ? oz.clientHeight : oz.clientWidth) * .85), !zz || !vz) return;
        const Uz = Az(oz),
          Kz = zz.getEnabledCandidates(tz).filter((zz => oz.contains(zz) && yz(zz.getBoundingClientRect(), Uz))),
          uz = PF(vz, Kz.map((zz => zz.getBoundingClientRect())));
        uz >= 0 && zz.setFocus(Kz[uz], {
          scroll: !1,
          byUser: !0
        })
      };
    let MF = null;
    const dF = (zz, tz) => {
        var sz, Fz;
        const Wz = tz.querySelector("[data-pad-friends-column]"),
          Xz = zz.getFocused();
        if (!Wz || !Xz || !Wz.contains(Xz)) return !1;
        const Oz = zz.getEnabledCandidates(tz).filter((zz => !Wz.contains(zz))),
          oz = PF(rt(Xz), Oz.map((zz => zz.getBoundingClientRect()))),
          vz = null === (sz = MF) || void 0 === sz ? void 0 : sz.deref();
        return zz.setFocus(null !== vz && void 0 !== vz && vz.isConnected ? vz : null !== (Fz = Oz[oz]) && void 0 !== Fz ? Fz : null, {
          byUser: !0
        }), !0
      },
      hF = zz => {
        const tz = (0, Kz.f)(zz);
        return (0, wz.H)(tz) || WF.s.some((zz => (0, Kz.f)(zz) === tz)) ? null : tz
      },
      QF = (zz, tz) => {
        const sz = hF(tz);
        return null !== sz && zz.wasPressed(sz)
      },
      kF = function(zz, tz, sz) {
        let Fz = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Wz = (zz => {
            var tz, sz;
            return null !== (tz = null === (sz = GF(zz)) || void 0 === sz ? void 0 : sz.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== tz ? tz : null
          })(tz),
          Xz = zz && Wz ? new Set(zz.getEnabledCandidates(tz)) : null;
        (0, tF.c)(), sz === sF.r.SETTINGS && (0, FF.m)(vz.b.get("openEverythingMenuName")) ? vz.b.set({
          openEverythingMenuName: sz
        }) : (0, FF.w)(new Event("padMenuShortcut"), sz, Fz), zz && Xz && Wz && TF(zz, tz, Xz, Wz.closest("[data-pad-tabs]"))
      },
      iF = zz => null !== zz.closest(".Dropdown-root") || null !== zz.querySelector(".Dropdown-root.is-open"),
      LF = zz => null !== (0, ZF.b)() && "popup" !== zz.layer.kind && !GF(zz.root) && !iF(zz.root),
      lF = (0, Dz.e)(wz.W),
      nF = (0, Dz.e)(wz.W),
      aF = (zz, tz, sz) => {
        if (((zz, tz) => {
            const sz = (0, Kz.f)("chat");
            return IF(tz) && zz.isHeld(sz) ? "hold" === CF.update(zz.wasPressed(sz), zz.isHeld(sz), performance.now(), gz.c[(0, Nz.k)().tapHoldTime].wheelMs) && (uz.c.consumeButton(sz), Uz.o.Yg(JF.o), !0) : (CF.release(), !1)
          })(tz, sz.layer.kind)) return !0;
        const Fz = sz.root;
        for (const [Oz, oz] of [
            ["menuTabPrevious", -1],
            ["menuTabNext", 1]
          ])
          if (tz.wasPressed((0, Kz.f)(Oz))) {
            const tz = iF(Fz) ? null : GF(Fz);
            if (tz) cF(zz, Fz, tz, oz);
            else if (LF(sz)) {
              var Wz;
              const tz = zz ? new Set(zz.getEnabledCandidates(Fz)) : null;
              null !== (Wz = (0, ZF.b)()) && void 0 !== Wz && Wz(oz) && zz && tz && TF(zz, Fz, tz, null)
            } else zz && AF(zz, Fz, oz);
            return !0
          } for (const [Oz, oz, vz] of [
            ["menuPageUp", -1, lF],
            ["menuPageDown", 1, nF]
          ]) {
          const sz = (0, Kz.f)(Oz);
          if (tz.wasPressed(sz) && vz.reset(), vz.update(tz.isHeld(sz), performance.now())) return yF(zz, Fz, oz), !0
        }
        const Xz = "popup" === sz.layer.kind;
        return QF(tz, "pause") ? (Xz || (0, FF.v)() && "menu" !== sz.layer.kind || kF(zz, Fz, (0, FF.v)() ? sF.r.SETTINGS : (0, eF.e)()), !0) : !!QF(tz, "leaderboard") && ("home" === sz.layer.kind ? (zz => {
          const tz = [...zz.querySelectorAll("[data-pad-notifications]")].find(Ut);
          tz && Zt(tz)
        })(Fz) : Xz || kF(zz, Fz, sF.r.LOBBY_LEADERBOARD, "inGame" === vz.b.get("gameState")), !0)
      },
      qF = (zz, tz, sz) => {
        if (aF(zz, tz, sz)) return !0;
        const Fz = "home" === sz.layer.kind;
        if (tz.wasPressed((0, Kz.f)("menuSecondary"))) {
          const tz = zz.getFocused(),
            Wz = tz ? oF(tz) : null;
          if (Wz) return Zt(Wz), !0;
          if (Fz) {
            const tz = sz.root.querySelector("[data-pad-search] input");
            return tz && Ht(tz, sz.root) ? (zz.setFocus(tz, {
              byUser: !0
            }), Zt(tz)) : vz.b.set({
              searchOpen: !0
            }), !0
          }
        }
        return !(!Fz || !QF(tz, "inventory")) && (((zz, tz) => {
          var sz, Fz;
          const Wz = tz.querySelector("[data-pad-friends-column]");
          if (!Wz || !Ut(Wz)) return void(0, FF.w)(new Event("padMenuShortcut"), sF.r.SOCIAL);
          if (dF(zz, tz)) return;
          const Xz = null !== (sz = null === (Fz = Wz.querySelector("[data-pad-friends-start]")) || void 0 === Fz ? void 0 : Fz.getBoundingClientRect().top) && void 0 !== sz ? sz : -1 / 0,
            Oz = zz.getEnabledCandidates(Wz),
            oz = Oz.filter((zz => zz.getBoundingClientRect().top >= Xz)),
            vz = oz.length > 0 ? oz : Oz,
            Uz = YF(vz.map((zz => zz.getBoundingClientRect())));
          zz.setFocus(Uz >= 0 ? vz[Uz] : null, {
            byUser: !0
          })
        })(zz, sz.root), !0)
      },
      SF = zz => {
        var tz, sz, Fz;
        const Wz = ht(zz);
        if (null !== Wz) return Wz;
        const Xz = (null !== (tz = null !== (sz = null !== (Fz = zz.getAttribute("aria-label")) && void 0 !== Fz ? Fz : zz.getAttribute("title")) && void 0 !== sz ? sz : zz.textContent) && void 0 !== tz ? tz : "").replace(/\s+/g, " ").trim();
        return Xz ? `${zz.tagName}:${Xz.slice(0,100)}` : null
      };
    class VF {
      constructor() {
        this.remembered = new Map, this.history = []
      }
      enter(zz) {
        const tz = this.history.indexOf(zz);
        if (tz >= 0) {
          for (const zz of this.history.splice(tz + 1)) this.remembered.delete(zz);
          return !0
        }
        return this.remembered.delete(zz), this.history.push(zz), this.history.length > 32 && this.forget(this.history[0]), !1
      }
      forget(zz) {
        this.remembered.delete(zz);
        const tz = this.history.indexOf(zz);
        tz >= 0 && this.history.splice(tz, 1)
      }
      remember(zz, tz, sz, Fz) {
        const Wz = SF(tz),
          Xz = ht(tz),
          Oz = null !== Xz && ((zz, tz) => {
            let sz = 0;
            for (const Fz of zz.querySelectorAll("[data-pad-key], [href]"))
              if ((Fz.getAttribute("data-pad-key") === tz || Fz.getAttribute("href") === tz) && (sz++, sz > 1)) return !0;
            return !1
          })(sz, Xz) ? Math.max(0, this.twins(Fz(), Xz).indexOf(tz)) : 0;
        this.remembered.set(zz, {
          element: new WeakRef(tz),
          identity: Wz,
          ordinal: Oz
        })
      }
      has(zz) {
        return this.remembered.has(zz)
      }
      recall(zz, tz) {
        var sz, Fz;
        const Wz = this.remembered.get(zz);
        if (!Wz) return null;
        const Xz = Wz.element.deref();
        if (Xz && tz.includes(Xz)) return Xz;
        if (null === Wz.identity) return null;
        const Oz = this.twins(tz, Wz.identity);
        return null !== (sz = null !== (Fz = Oz[Wz.ordinal]) && void 0 !== Fz ? Fz : Oz[0]) && void 0 !== sz ? sz : null
      }
      twins(zz, tz) {
        return zz.filter((zz => SF(zz) === tz))
      }
    }
    var RF = sz(1264);
    const pF = zz => {
        const tz = [];
        let sz = zz;
        for (; sz && sz !== document.body;) {
          const zz = getComputedStyle(sz).zIndex;
          "auto" !== zz && tz.push(Number(zz) || 0), sz = sz.parentElement
        }
        return tz.reverse()
      },
      fF = (zz, tz) => {
        const sz = ((zz, tz) => {
          const sz = Math.max(zz.length, tz.length);
          for (let Xz = 0; Xz < sz; Xz++) {
            var Fz, Wz;
            const sz = (null !== (Fz = zz[Xz]) && void 0 !== Fz ? Fz : 0) - (null !== (Wz = tz[Xz]) && void 0 !== Wz ? Wz : 0);
            if (0 !== sz) return sz
          }
          return 0
        })(pF(zz), pF(tz));
        if (0 !== sz) return sz > 0;
        if (zz.contains(tz)) return !1;
        if (tz.contains(zz)) return !0;
        const Fz = zz.compareDocumentPosition(tz);
        return !!(Fz & Node.DOCUMENT_POSITION_PRECEDING) || !(Fz & Node.DOCUMENT_POSITION_FOLLOWING) && null
      },
      EF = (zz, tz) => {
        var sz;
        return null !== (sz = fF(zz.root, tz.root)) && void 0 !== sz ? sz : zz.order > tz.order
      },
      zW = (zz, tz) => tz.some((tz => !tz.contains(zz) && !zz.contains(tz) && !0 === fF(tz, zz)));
    let tW = null,
      sW = null,
      FW = -1;
    const WW = () => {
        var zz;
        const tz = null === (zz = document.timeline) || void 0 === zz ? void 0 : zz.currentTime,
          sz = "number" === typeof tz ? tz : null;
        if (null !== sz && sz === sW && FW === (0, RF.d)()) return tW;
        let Fz = null;
        const Wz = [],
          Xz = [...document.querySelectorAll("[data-pad-covers]")].filter(Ut);
        for (const Oz of (0, RF.h)()) {
          const zz = Oz.getRoot(),
            tz = !!zz && Ut(zz) && !zW(zz, Xz);
          if (Oz.shown && !tz && Wz.push(Oz), Oz.shown = tz, !zz || !tz) continue;
          const sz = {
            layer: Oz,
            root: zz,
            order: Oz.order
          };
          Fz && !EF(sz, Fz) || (Fz = sz)
        }
        tW = Fz, sW = sz, FW = (0, RF.d)();
        for (const Oz of Wz)(0, RF.i)(Oz);
        return tW
      },
      XW = () => {
        const zz = WW();
        return !(null === zz || void 0 === zz || !zz.layer.close) && (zz.layer.close(), sW = null, !0)
      },
      OW = () => {
        var zz, tz;
        return null !== (zz = null === (tz = WW()) || void 0 === tz ? void 0 : tz.root) && void 0 !== zz ? zz : null
      },
      oW = zz => zz ? {
        ...zz,
        root: OW()
      } : null;
    let vW = null,
      UW = null,
      KW = (0, Nz.k)().menuNavigation,
      uW = null;
    const NW = new Yz;
    let bW = null;
    Uz.o.subscribe(Nz.h, (() => {
      const zz = (0, Nz.k)().menuNavigation;
      zz !== KW && (KW = zz, vW = null, UW = null)
    }));
    const wW = () => {
        var zz;
        return null !== (zz = vW) && void 0 !== zz ? zz : (0, Nz.k)().menuNavigation
      },
      DW = zz => {
        if (PW()) {
          if (uW = oW(zz), "hybrid" === wW()) return NW.lock(), void(UW = UW ? null : OW());
          vW = "focus" === wW() ? "cursor" : "focus"
        }
      },
      gW = () => {
        const zz = uW;
        return uW = null, zz
      };
    let HW = {
      root: null,
      firstSeenMs: -1 / 0,
      atMs: -1 / 0,
      has: !1
    };
    const BW = function(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const sz = HW.root === zz,
          Fz = sz ? HW.firstSeenMs : tz,
          Wz = HW.has || tz - Fz > 1e3;
        return (!sz || !Wz || tz - HW.atMs > 250) && (HW = {
          root: zz,
          firstSeenMs: Fz,
          atMs: tz,
          has: Dt(zz)
        }), HW.has
      },
      PW = () => {
        const zz = OW();
        return null !== zz && BW(zz)
      },
      rW = () => {
        const zz = WW();
        return UW && (null === zz || void 0 === zz ? void 0 : zz.root) !== UW && (UW = null), (zz => {
          let {
            mode: tz,
            hasLayer: sz,
            hasCandidates: Fz,
            hybridCursorEngaged: Wz
          } = zz;
          return sz ? "cursor" !== tz && Fz() ? "hybrid" === tz && Wz ? "cursor" : "focus" : "cursor" : null
        })({
          mode: wW(),
          hasLayer: null !== zz,
          hasCandidates: () => null !== zz && BW(zz.root),
          hybridCursorEngaged: null !== UW
        })
      },
      YW = () => "hybrid" === wW() && PW(),
      xW = "pad-focused";
    var mW = sz(4183),
      JW = sz(4644);
    const IW = "[data-pad-destructive]",
      CW = `${IW}, [data-pad-back]`,
      eW = zz => ({
        rect: zz.getBoundingClientRect(),
        destructive: zz.matches(IW),
        closes: null !== zz.closest("[data-pad-close-button]"),
        unavailable: zz.matches("[data-pad-unavailable]")
      }),
      ZW = zz => {
        let {
          destructive: tz,
          closes: sz,
          unavailable: Fz
        } = zz;
        return tz ? sz ? 2 : 3 : Fz ? 1 : 0
      },
      GW = zz => {
        let tz = -1;
        for (let sz = 0; sz < zz.length; sz++) {
          if (tz < 0) {
            tz = sz;
            continue
          }
          const Fz = zz[sz],
            Wz = zz[tz];
          ZW(Fz) === ZW(Wz) ? rF(Fz.rect, Wz.rect) < 0 && (tz = sz) : ZW(Fz) < ZW(Wz) && (tz = sz)
        }
        return tz
      },
      TW = "[data-pad-tabs]",
      cW = "[data-pad-tab]",
      jW = (zz, tz) => {
        const sz = zz.querySelector(`${cW}[data-pad-selected='true']`);
        return sz && tz.includes(sz) ? sz : null
      },
      AW = (zz, tz) => {
        let sz = tz;
        for (let Fz = tz.parentElement; Fz && !Fz.contains(zz); Fz = Fz.parentElement) sz = Fz;
        return sz
      };
    class yW {
      constructor() {
        this.contentReturn = null
      }
      redirect(zz, tz, sz, Fz) {
        var Wz, Xz;
        const Oz = zz.closest(TW),
          oz = tz.closest(TW);
        var vz;
        if (oz && oz !== Oz) return Oz || (this.contentReturn = new WeakRef(zz)), null !== (vz = jW(oz, sz)) && void 0 !== vz ? vz : tz;
        if (!Oz || oz) return tz;
        const Uz = AW(zz, tz),
          Kz = null === (Wz = this.contentReturn) || void 0 === Wz ? void 0 : Wz.deref();
        return Kz && Uz.contains(Kz) && sz.includes(Kz) ? Kz : null !== (Xz = this.pickRegionStart(Uz, ez(tz, "y", Fz), sz)) && void 0 !== Xz ? Xz : tz
      }
      findTabContent(zz, tz, sz) {
        const Fz = zz.closest(TW);
        if (!Fz || !zz.matches(cW) || Fz.contains(tz)) return null;
        const Wz = tz.closest(TW);
        if (Wz && Number(Wz.dataset.padTabs) <= Number(Fz.dataset.padTabs)) return null;
        const Xz = AW(zz, tz);
        return sz.some((zz => Xz.contains(zz) && !zz.closest(CW))) || !tz.closest(CW) ? Xz : null
      }
      pickContentStart(zz, tz, sz) {
        return this.contentReturn = null, this.pickRegionStart(zz, ez(zz, "y", sz), tz)
      }
      pickReplacedContentStart(zz, tz, sz, Fz) {
        if (!tz.contains(zz)) return null;
        const Wz = AW(tz, zz),
          Xz = sz.filter((zz => tz.contains(zz) && !Wz.contains(zz) && !zz.closest(CW)));
        return 0 === Xz.length ? null : (this.contentReturn = null, this.pickRegionStart(tz, ez(Xz[0], "y", Fz), Xz))
      }
      backToStrip(zz, tz, sz) {
        if (zz.closest(TW)) return null;
        const Fz = GF(sz);
        for (const Wz of sz.querySelectorAll(TW)) {
          if (Number(Wz.dataset.padTabs) <= 1 || Wz === Fz) continue;
          const Xz = jW(Wz, tz),
            Oz = Xz ? AW(zz, Wz).parentElement : null;
          if (Xz && Oz && Oz !== sz && sz.contains(Oz)) return this.contentReturn = new WeakRef(zz), Xz
        }
        return null
      }
      pickRegionStart(zz, tz, sz) {
        const Fz = Az(tz),
          Wz = zz => {
            const tz = sz.filter((tz => zz.contains(tz) && !tz.closest(TW) && yz(tz.getBoundingClientRect(), Fz))),
              Wz = GW(tz.map(eW));
            return Wz >= 0 ? tz[Wz] : null
          };
        for (const Xz of Bt(zz)) {
          const zz = Wz(Xz);
          if (zz) return zz
        }
        for (const Xz of zz.querySelectorAll(TW)) {
          const zz = jW(Xz, sz);
          if (zz) return zz
        }
        return Wz(zz)
      }
    }
    const MW = "[data-pad-default-focus], .Dropdown-option.is-selected",
      dW = ".Dropdown-root.is-open > .Dropdown-menu",
      hW = "[data-pad-no-step-in]",
      QW = "[data-pad-tabs]",
      kW = "[data-pad-press-area]",
      iW = zz => {
        let tz = zz;
        for (let sz = 0; tz && sz <= 4; sz++, tz = tz.parentElement) {
          const sz = tz.querySelector(".CircleInfo");
          if (sz) return tz === zz || tz.querySelectorAll(ot).length <= 1 ? sz : null;
          if (tz !== zz && tz.querySelectorAll(ot).length > 1) return null
        }
        return null
      },
      LW = (zz, tz, sz) => {
        Ct(zz, tz, sz);
        const Fz = null !== zz && void 0 !== zz && zz.isConnected ? iW(zz) : null,
          Wz = iW(tz);
        Fz !== Wz && Ct(Fz, Wz, Wz ? rt(Wz) : sz, {
          leaveBelow: zz,
          enterBelow: tz
        })
      },
      lW = zz => zz.getBoundingClientRect(),
      nW = (zz, tz, sz) => {
        const Fz = new Set(sz);
        for (let Wz = zz; Wz; Wz = Wz === tz ? null : Wz.parentElement)
          if (Fz.has(Wz)) return Wz;
        return null
      },
      aW = (zz, tz) => !zz.root || zz.root === tz || tz.matches(dW) && zz.root.contains(tz);
    const qW = new class {
      constructor() {
        this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new VF, this.tabStripNav = new yW, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepeatKey = null, this.confirmRepeated = !1, this.confirmRepeat = (0, Dz.e)(wz.u), this.dpadRepeats = new Map(wz.D.map((zz => [zz, (0, Dz.e)(wz.G)]))), this.stickRepeat = new wz.c((0, Dz.e)(wz._)), this.lastRefocusCheckMs = -1 / 0, this.enteredLayerAtMs = 0, this.lastFocusedCentre = null, this.lastActivatedKey = null, this.lastActivated = null, this.lastActivatedAtMs = -1 / 0, this.pendingFocus = null, this.tabOpenWait = null, this.retryMove = null, this.scrollRemainder = {
          x: 0,
          y: 0
        }, this.wasActive = !1, this.layerKind = null, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.listeners = new Set, this.dropdownLayers = new WeakMap, this.dropdownLayerCounter = 0
      }
      install() {
        const zz = uz.c.register({
            name: "focus",
            isActive: () => (0, bz.k)() && "focus" === rW(),
            onFrame: zz => {
              this.onFrame(zz)
            },
            onDeactivate: () => {
              this.deactivate()
            },
            wakePressActs: zz => (0, uz.g)(zz) || zz === (0, Kz.f)("menuConfirm") && yt((0, bz.e)())
          }),
          tz = (0, RF.j)((zz => {
            const tz = (0, RF.q)(zz);
            null === zz.memoryKey && this.memory.forget(tz), tz === this.layerKey && (this.layerKey = null)
          }));
        let sz = -1 / 0;
        const Fz = Oz.e.onFrame((zz => {
            (0, bz.k)() || zz.timestampMs - sz < 100 || (sz = zz.timestampMs, WW())
          })),
          Wz = zz => {
            zz.isTrusted && zz.target instanceof Element && Oz.e.getActivePad() && this.noteChosenStop(zz.target)
          };
        return document.addEventListener("click", Wz, !0), () => {
          zz(), tz(), Fz(), document.removeEventListener("click", Wz, !0), this.deactivate()
        }
      }
      noteChosenStop(zz) {
        var tz, sz;
        const Fz = WW();
        if (!Fz || !Fz.root.contains(zz)) return;
        const Wz = null !== (tz = null === (sz = zz.closest(".Dropdown-root")) || void 0 === sz ? void 0 : sz.querySelector(".Dropdown-control")) && void 0 !== tz ? tz : zz,
          Xz = nW(Wz, Fz.root, this.getEnabledCandidates(Fz.root));
        if (!Xz) return;
        const Oz = (0, RF.q)(Fz.layer);
        Oz === this.layerKey && Fz.root === this.layerRoot || this.beginLayer(Fz, Oz), this.wasActive ? this.setFocus(Xz, {
          scroll: !1,
          byUser: !0
        }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = Xz, this.lastFocusedCentre = rt(Xz), this.rememberFocus(Xz), this.notify())
      }
      getFocused() {
        return this.focused
      }
      isActive() {
        return this.wasActive
      }
      onChange(zz) {
        return this.listeners.add(zz), () => {
          this.listeners.delete(zz)
        }
      }
      notify() {
        for (const zz of this.listeners) zz()
      }
      deactivate() {
        var zz;
        if (this.wasActive) {
          this.wasActive = !1, this.layerKind = null, this.confirmPressedOn = null, this.retryMove = null, this.pendingFocus = null;
          for (const zz of this.dpadRepeats.values()) zz.reset();
          this.stickRepeat.reset(), null !== (zz = this.focused) && void 0 !== zz && zz.isConnected && LW(this.focused, null, rt(this.focused)), this.notify()
        }
      }
      setFocus(zz) {
        var tz;
        let {
          scroll: sz = !0,
          byUser: Fz = !1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (Fz && (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1), zz === this.focused) return;
        const Wz = null !== (tz = this.focused) && void 0 !== tz && tz.isConnected ? this.focused : null;
        if (this.focused = zz, zz) {
          sz && (zz.classList.add(xW), zz.scrollIntoView({
            block: "nearest",
            inline: "nearest",
            behavior: "instant"
          })), Fz && ((zz, tz) => {
            const sz = tz.closest("[data-pad-friends-column]");
            sz && zz && !sz.contains(zz) && (MF = new WeakRef(zz))
          })(Wz, zz);
          const tz = rt(zz);
          this.lastFocusedCentre = tz, this.movedInLayer && this.rememberFocus(zz), LW(Wz, zz, tz), "false" === zz.getAttribute("aria-pressed") && zz.closest("[data-pad-select-on-focus]") && Zt(zz)
        } else Wz && LW(Wz, null, rt(Wz));
        this.notify()
      }
      rememberFocus(zz) {
        const tz = this.layerRoot;
        this.layerKey && tz && this.memory.remember(this.layerKey, zz, tz, (() => this.getEnabledCandidates(tz)))
      }
      noteCursorActivation(zz) {
        const tz = WW();
        if (!tz || !tz.root.contains(zz)) return;
        const sz = this.getEnabledCandidates(tz.root),
          Fz = new Set(sz);
        let Wz = zz;
        for (; Wz && !Fz.has(Wz);) Wz = Wz === tz.root ? null : Wz.parentElement;
        if (!(Wz instanceof HTMLElement)) return;
        const Xz = (0, RF.q)(tz.layer);
        this.memory.enter(Xz), this.memory.remember(Xz, Wz, tz.root, (() => sz))
      }
      notePageEnteredByCursor(zz) {
        return this.memory.enter(zz)
      }
      recallStop(zz, tz) {
        return this.findRemembered(zz, tz)
      }
      focusWhenFound(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.pendingFocus = {
          find: zz,
          untilMs: performance.now() + tz,
          holdWhile: sz
        }
      }
      getEnabledCandidates(zz) {
        return bt(zz).filter((zz => !Kt(zz)))
      }
      onFrame(zz) {
        var tz;
        const sz = WW();
        if (!sz) return;
        const Fz = null !== (tz = this.findOpenDropdown(sz)) && void 0 !== tz ? tz : sz,
          Wz = performance.now(),
          Xz = (0, RF.q)(Fz.layer);
        if (Xz !== this.layerKey || Fz.root !== this.layerRoot) {
          const tz = this.focused;
          if (null !== this.layerKey && Fz.root === this.layerRoot && tz && Ht(tz, Fz.root)) this.continueLayer(Xz, tz), this.wasActive || this.resume(Fz.root, Wz);
          else {
            const tz = !this.wasActive && !zz.wokeDevice,
              Oz = "death" === this.layerKind || tz,
              oz = this.enterLayer(Fz, Xz);
            "popup" !== Fz.layer.kind || Fz !== sz || oz ? "menu" === Fz.layer.kind && Oz && "inGame" === vz.b.get("gameState") && !(0, tF.f)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = Wz + mW.c) : (this.pressGuardExtends = tz, this.pressGuardUntilMs = Wz + (tz ? mW.c : Oz ? 500 : 250))
          }
        } else this.wasActive || this.resume(Fz.root, Wz);
        if (this.layerKind = Fz.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), zz.wokeDevice && this.focusPointedStop(Fz.root), this.validateFocus(Fz, Wz), Wz < this.pressGuardUntilMs && this.pressGuardExtends && (zz.wasPressed((0, Kz.f)("menuConfirm")) || zz.wasPressed((0, Kz.f)("menuBack"))) && (this.pressGuardUntilMs = Wz + mW.c), Wz >= this.pressGuardUntilMs && this.handleButtons(zz, Fz)) return;
        const Oz = "hybrid" === wW();
        if (Oz && (zz => {
            const tz = OW();
            return tz !== bW && (bW = tz, NW.lock()), NW.update(zz, (0, Nz.k)().moveDeadzone)
          })(zz.leftStick)) return oz = this.getHandoff(), uW = oW(oz), UW = OW(), void uz.c.handOffHeldInput();
        var oz;
        this.handleDirections(zz, Fz, Wz, !Oz), this.handleScroll(zz, Fz)
      }
      findOpenDropdown(zz) {
        const tz = zz.root.querySelector(dW);
        if (!tz || !Ut(tz)) return null;
        let sz = this.dropdownLayers.get(tz);
        return sz || (this.dropdownLayerCounter++, sz = {
          id: `dropdown-${this.dropdownLayerCounter}`,
          kind: zz.layer.kind,
          getRoot: () => tz,
          close: () => {
            ct(tz)
          },
          memoryKey: null
        }, this.dropdownLayers.set(tz, sz)), {
          layer: sz,
          root: tz,
          order: zz.order
        }
      }
      focusPointedStop(zz) {
        const tz = (0, bz.e)(),
          sz = tz ? document.elementFromPoint(tz.x, tz.y) : null;
        if (!sz || !zz.contains(sz)) return;
        const Fz = nW(sz, zz, this.getEnabledCandidates(zz));
        Fz && this.setFocus(Fz, {
          scroll: !1,
          byUser: !0
        })
      }
      enterLayer(zz, tz) {
        const sz = this.beginLayer(zz, tz),
          Fz = gW();
        return Fz && aW(Fz, zz.root) ? (this.takeOver(zz.root, Fz, this.enteredLayerAtMs), sz) : (this.restoreLayerFocus(zz.root, sz), sz)
      }
      beginLayer(zz, tz) {
        return this.layerKey = tz, this.layerRoot = zz.root, this.lastActivatedKey = null, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoreOnFocusLoss = !1, this.retryMove = null, this.pendingFocus = null, this.confirmPressedOn = null, this.lastRefocusCheckMs = -1 / 0, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.enteredLayerAtMs = performance.now(), this.lastFocusedCentre = null, this.memory.enter(tz)
      }
      restoreLayerFocus(zz, tz) {
        const sz = tz && this.layerKey ? this.findRemembered(zz, this.layerKey) : null;
        this.restoredFromMemory = null !== sz, this.setFocus(null !== sz && void 0 !== sz ? sz : this.pickInitial(zz, {
          waitForContent: !0
        }))
      }
      continueLayer(zz, tz) {
        this.layerKey = zz;
        const sz = this.memory.enter(zz);
        this.restoreOnFocusLoss = sz, this.movedInLayer && !sz && this.rememberFocus(tz)
      }
      resume(zz, tz) {
        var sz;
        const Fz = gW();
        Fz && aW(Fz, zz) ? this.takeOver(zz, Fz, tz) : null !== (sz = this.focused) && void 0 !== sz && sz.isConnected && LW(null, this.focused, rt(this.focused))
      }
      pickPreferred(zz) {
        var tz;
        return null !== (tz = this.layerKey ? this.findRemembered(zz, this.layerKey) : null) && void 0 !== tz ? tz : this.pickInitial(zz, {
          waitForContent: !0
        })
      }
      findRemembered(zz, tz) {
        return this.memory.has(tz) ? this.memory.recall(tz, this.getEnabledCandidates(zz)) : null
      }
      getHandoff() {
        var zz, tz, sz;
        const Fz = null !== (zz = this.focused) && void 0 !== zz && zz.isConnected ? this.focused : null,
          Wz = null !== (tz = this.layerRoot) && void 0 !== tz && tz.isConnected ? this.layerRoot : null;
        return {
          point: Fz ? rt(Fz) : null !== (sz = this.lastFocusedCentre) && void 0 !== sz ? sz : this.getLayerStartPoint(Wz),
          element: Fz,
          direction: null
        }
      }
      getLayerStartPoint(zz) {
        if (!zz) return {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2
        };
        const tz = this.pickInitial(zz, {
          includeDisabled: !0
        });
        return rt(null !== tz && void 0 !== tz ? tz : zz)
      }
      takeOver(zz, tz, sz) {
        const {
          element: Fz,
          direction: Wz,
          point: Xz
        } = tz, Oz = Fz instanceof HTMLElement && Ht(Fz, zz) ? Fz : null;
        if (!Wz) {
          const tz = this.focused;
          return Oz ? this.setFocus(Oz, {
            scroll: !1,
            byUser: !0
          }) : this.focusNearest(zz, Xz), void(this.focused && this.focused === tz && this.focused.isConnected && LW(null, this.focused, rt(this.focused)))
        }
        if (this.dpadRepeats.get(Wz).update(!0, sz), Oz) return this.setFocus(Oz, {
          scroll: !1,
          byUser: !0
        }), void this.move(zz, Wz, sz, !0);
        const oz = this.getEnabledCandidates(zz),
          vz = oz.map(lW),
          Uz = wF(new DOMRect(Xz.x, Xz.y, 0, 0), vz, Wz),
          Kz = Uz >= 0 ? Uz : PF(Xz, vz);
        this.setFocus(Kz >= 0 ? oz[Kz] : this.pickInitial(zz), {
          byUser: !0
        })
      }
      focusNearest(zz, tz) {
        const sz = this.getEnabledCandidates(zz),
          Fz = PF(tz, sz.map(lW));
        this.setFocus(Fz >= 0 ? sz[Fz] : this.pickInitial(zz), {
          byUser: !0
        })
      }
      pickDefault(zz) {
        let {
          includeDisabled: tz = !1,
          exclude: sz = null
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Fz = [...zz.querySelectorAll(MW)].filter((Fz => (null === sz || void 0 === sz || !sz.has(Fz)) && (tz ? gt(Fz, zz) : Ht(Fz, zz)))),
          Wz = GW(Fz.map(eW));
        return Wz >= 0 ? Fz[Wz] : null
      }
      pickNewAreaStart(zz, tz) {
        const sz = [...zz.querySelectorAll(kW)].filter(Ut);
        for (const Fz of [...Bt(zz), ...sz]) {
          if (tz.has(Fz)) continue;
          const zz = this.getEnabledCandidates(Fz),
            sz = GW(zz.map(eW));
          if (sz >= 0) return zz[sz]
        }
        return null
      }
      pickInitial(zz) {
        let {
          includeDisabled: tz = !1,
          waitForContent: sz = !1,
          enteredAtMs: Fz = this.enteredLayerAtMs
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Wz = this.pickDefault(zz, {
          includeDisabled: tz
        });
        if (Wz) return Wz;
        const Xz = zz => tz ? bt(zz) : this.getEnabledCandidates(zz);
        let Oz = [];
        for (const Nz of Bt(zz))
          if (Oz = Xz(Nz), Oz.length > 0) break;
        if (0 === Oz.length) {
          if (sz && performance.now() - Fz < 1e4 && (zz => {
              for (const tz of zz.querySelectorAll("[data-pad-initial-area]"))
                if (!vt(tz, !1)) return !0;
              return !1
            })(zz)) return null;
          Oz = Xz(zz)
        }
        const oz = Oz.map(lW),
          vz = Az(null),
          Uz = Oz.filter(((zz, tz) => yz(oz[tz], vz))),
          Kz = Uz.length > 0 ? Uz : Oz,
          uz = GW(Kz.map(eW));
        return uz >= 0 ? Kz[uz] : null
      }
      validateFocus(zz, tz) {
        if (this.pendingFocus) {
          var sz, Fz;
          const Wz = this.pendingFocus.find();
          if (Wz && Ht(Wz, zz.root)) return this.pendingFocus = null, void this.setFocus(Wz, {
            byUser: !0
          });
          tz > this.pendingFocus.untilMs && (null === (sz = (Fz = this.pendingFocus).holdWhile) || void 0 === sz || !sz.call(Fz)) && (this.pendingFocus = null)
        }
        const Wz = this.focused,
          Xz = !!Wz && Ht(Wz, zz.root);
        if (!(!Xz && Wz && Wz === this.lastActivated && tz - this.lastActivatedAtMs < 5e3 && zz.root.contains(Wz) && Ut(Wz) && Kt(Wz))) {
          if (!Xz && this.restoreOnFocusLoss && this.layerKey) return this.restoreOnFocusLoss = !1, this.movedInLayer = !1, this.scrolledInLayer = !1, this.enteredLayerAtMs = tz, void this.restoreLayerFocus(zz.root, !0);
          if ((!Xz || !this.movedInLayer && !this.scrolledInLayer) && !(tz - this.lastRefocusCheckMs < (Xz ? 200 : 50)))
            if (this.lastRefocusCheckMs = tz, Xz) {
              const sz = tz - this.enteredLayerAtMs < 15e3 ? this.pickPreferred(zz.root) : null,
                Fz = null !== sz && void 0 !== sz ? sz : this.restoredFromMemory ? null : this.pickDefault(zz.root);
              Fz && Fz !== Wz && this.setFocus(Fz)
            } else {
              if (this.lastFocusedCentre && this.movedInLayer) {
                const tz = this.pendingFocus;
                return this.focusNearest(zz.root, this.lastFocusedCentre), void(this.pendingFocus = tz)
              }
              this.setFocus(this.pickPreferred(zz.root))
            }
        }
      }
      handleButtons(zz, tz) {
        if (zz.wasPressed((0, Kz.f)("menuToggleCursor"))) return DW(this.getHandoff()), !0;
        if (zz.wasPressed((0, Kz.f)("menuBack"))) {
          const zz = ct(tz.root);
          return zz ? this.setFocus(zz, {
            byUser: !0
          }) : dF(this, tz.root) || (dt(tz.root) ? this.returnToOpener(tz.root) : this.backToStrip(tz.root) || XW()), !0
        }
        const sz = (0, Kz.f)("menuConfirm");
        var Fz, Wz;
        zz.wasPressed(sz) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (Fz = null === (Wz = this.focused) || void 0 === Wz ? void 0 : Wz.getAttribute("data-pad-repeat")) && void 0 !== Fz ? Fz : null, this.confirmRepeated = zz.wokeDevice, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now()));
        if (zz.wasReleased(sz)) {
          const zz = this.confirmPressedOn;
          if (this.confirmPressedOn = null, zz && !this.confirmRepeated && zz === this.focused && zz.isConnected && !Kt(zz)) {
            const sz = zz.matches("[data-pad-tab]") ? zz.closest(QW) : null;
            sz ? this.enterTab(zz, sz, tz.root, performance.now()) : this.activate(zz)
          }
          return !0
        }
        return this.repeatConfirm(zz, sz), qF(this, zz, tz)
      }
      repeatConfirm(zz, tz) {
        const sz = this.confirmPressedOn;
        sz && null !== this.confirmRepeatKey && zz.isHeld(tz) && (sz === this.focused && sz.isConnected && !Kt(sz) && sz.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? sz.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.confirmRepeated = !0, this.activate(sz)) : this.confirmRepeatKey = null)
      }
      backToStrip(zz) {
        const tz = this.focused;
        if (!(0, Nz.k)().menuBackToCategories) return !1;
        const sz = null !== tz && void 0 !== tz && tz.isConnected ? this.tabStripNav.backToStrip(tz, this.getEnabledCandidates(zz), zz) : null;
        return sz && this.setFocus(sz, {
          byUser: !0
        }), null !== sz
      }
      returnToOpener(zz) {
        const tz = this.lastActivatedKey;
        tz && (this.lastActivatedKey = null, this.focusWhenFound((() => {
          var sz;
          return null !== (sz = this.getEnabledCandidates(zz).find((zz => ht(zz) === tz))) && void 0 !== sz ? sz : null
        })))
      }
      activate(zz) {
        var tz;
        if ((0, JW.e)(zz) || At(zz)) return;
        this.lastActivatedKey = null !== (tz = ht(zz)) && void 0 !== tz ? tz : this.lastActivatedKey, this.lastActivated = zz, this.lastActivatedAtMs = performance.now(), this.rememberFocus(zz);
        const sz = this.layerRoot;
        if (sz) {
          const tz = new Set(sz.querySelectorAll(MW)),
            Fz = new Set(sz.querySelectorAll(`[data-pad-initial-area], ${kW}`)),
            Wz = this.lastActivatedAtMs;
          this.focusWhenFound((() => {
            var Wz;
            return Ht(zz, sz) ? null : null !== (Wz = this.pickDefault(sz, {
              exclude: tz
            })) && void 0 !== Wz ? Wz : this.pickNewAreaStart(sz, Fz)
          }), 5e3, (() => zz.isConnected && Kt(zz) && performance.now() - Wz < 6e4))
        }
        Zt(zz), jt(zz)
      }
      handleDirections(zz, tz, sz, Fz) {
        const Wz = IF(tz.layer.kind) ? (0, Kz.f)("chat") : null;
        for (const oz of wz.D) {
          this.dpadRepeats.get(oz).update(zz.isHeld(oz), sz) && (oz !== Wz || zz.wasPressed(oz)) && this.move(tz.root, oz, sz, !0)
        }
        const Xz = Fz ? (0, wz.k)(zz.leftStick, (0, Nz.k)().moveDeadzone) : {
            x: 0,
            y: 0
          },
          Oz = this.stickRepeat.update((0, wz.ab)(Xz), sz);
        if (Oz && this.move(tz.root, Oz, sz, !0), this.retryMove && sz >= this.retryMove.atMs) {
          const {
            direction: zz
          } = this.retryMove;
          this.retryMove = null, this.move(tz.root, zz, sz, !1)
        }
      }
      move(zz, tz, sz, Fz) {
        var Wz;
        let Xz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.pendingFocus && this.pendingFocus === (null === (Wz = this.tabOpenWait) || void 0 === Wz ? void 0 : Wz.wait) && tz === this.tabOpenWait.direction) return;
        this.pendingFocus = null;
        const Oz = this.focused;
        if (!Oz || !Oz.isConnected) {
          const tz = this.pickInitial(zz);
          return void(tz && this.setFocus(tz, {
            byUser: !0
          }))
        }
        const oz = "Left" === tz || "Right" === tz,
          vz = oz ? (0, JW.e)(Oz) : null;
        if (vz) return void vz.adjust("Left" === tz ? -1 : 1);
        const Uz = zz => null !== zz.closest("[data-pad-friends-column]"),
          Kz = Uz(Oz),
          uz = lW(Oz),
          Nz = oz || Oz.closest(QW) ? null : (zz => {
            const tz = new Map;
            return sz => {
              const Fz = sz.closest(QW);
              if (!Fz) return !1;
              let Wz = tz.get(Fz);
              if (void 0 === Wz) {
                const sz = lW(Fz);
                Wz = bF(zz, sz) && (sz.right <= zz.left || sz.left >= zz.right), tz.set(Fz, Wz)
              }
              return Wz
            }
          })(uz),
          bz = null !== Oz.closest(hW),
          wz = this.getEnabledCandidates(zz).filter((zz => zz !== Oz && (oz || Uz(zz) === Kz) && !(null !== Nz && void 0 !== Nz && Nz(zz)) && (bz || !zz.closest(hW)))),
          Dz = wz.map(lW),
          gz = ez(Oz, "y", zz),
          Hz = Az(gz);
        if (!Xz && !yz(uz, Hz)) {
          const zz = wz.filter(((zz, tz) => yz(Dz[tz], Hz)));
          if (zz.length > 0) {
            const tz = {
              x: Hz.left + Hz.width / 2,
              y: Hz.top + Hz.height / 2
            };
            return void this.setFocus(zz[PF(tz, zz.map(lW))], {
              byUser: !0
            })
          }
        }
        const Bz = oz ? ((zz, tz, sz) => {
            const Fz = lW(zz),
              Wz = zz.closest(QW),
              Xz = Wz ? lW(Wz) : null;
            return tz.map(((tz, Oz) => {
              const oz = sz[Oz];
              if (oz.bottom > Fz.top && oz.top < Fz.bottom) return !0;
              const vz = tz.closest(QW);
              if (Wz && Xz) return vz !== Wz && (null !== vz || oz.bottom <= Xz.top || oz.top >= Xz.bottom);
              if (vz) return !bF(Fz, lW(vz));
              let Uz = zz;
              for (let sz = zz.parentElement; sz && !sz.contains(tz); sz = sz.parentElement) Uz = sz;
              const Kz = lW(Uz);
              return oz.right > Kz.left && oz.left < Kz.right
            }))
          })(Oz, wz, Dz) : void 0,
          Pz = oz && !Oz.closest(QW) ? (zz => zz.map((zz => !zz.closest(CW))))(wz) : void 0,
          rz = ((zz, tz) => {
            const sz = [];
            for (let Wz = zz; Wz; Wz = Wz.parentElement) sz.push(Wz);
            const Fz = new Map;
            return sz.forEach(((zz, tz) => {
              Fz.set(zz, sz.length - 1 - tz)
            })), tz.map((zz => {
              for (let tz = zz; tz; tz = tz.parentElement) {
                const zz = Fz.get(tz);
                if (void 0 !== zz) return zz
              }
              return -1
            }))
          })(Oz, wz),
          Yz = oz ? "x" : "y",
          xz = ez(Oz, Yz, zz);
        let mz = wF(uz, Dz, tz, rz, Bz, Pz);
        if (mz >= 0 && xz && !xz.contains(wz[mz])) {
          const zz = wz.flatMap(((zz, tz) => xz.contains(zz) ? [tz] : [])),
            sz = tz => tz && zz.map((zz => tz[zz])),
            Fz = wF(uz, zz.map((zz => Dz[zz])), tz, zz.map((zz => rz[zz])), sz(Bz), sz(Pz));
          mz = Fz >= 0 ? zz[Fz] : mz
        }
        if (mz >= 0) return void this.moveTo(Oz, wz[mz], wz, zz, tz, Xz);
        if (!Fz) return;
        const Jz = "Right" === tz || "Down" === tz ? 1 : -1;
        if (xz && cz(xz, Yz, Jz)) {
          const zz = "y" === Yz ? xz.clientHeight : xz.clientWidth;
          jz(xz, Yz, Jz * zz * .5), this.retryMove = {
            direction: tz,
            atMs: sz + 80
          }
        }
      }
      moveTo(zz, tz, sz, Fz, Wz, Xz) {
        const Oz = this.tabStripNav.findTabContent(zz, tz, sz);
        Oz && "true" !== zz.dataset.padSelected ? this.openTab(zz, Oz, Fz, Wz) : Xz && !Oz || this.setFocus(this.tabStripNav.redirect(zz, tz, sz, Fz), {
          byUser: !0
        })
      }
      openTab(zz, tz, sz, Fz) {
        const Wz = tz.parentElement;
        Zt(zz), this.focusWhenFound((() => "true" !== zz.dataset.padSelected ? null : tz.isConnected ? this.tabStripNav.pickContentStart(tz, this.getEnabledCandidates(sz), sz) : Wz ? this.tabStripNav.pickReplacedContentStart(zz, Wz, this.getEnabledCandidates(sz), sz) : null), 3e3), this.tabOpenWait = {
          wait: this.pendingFocus,
          direction: Fz
        }
      }
      enterTab(zz, tz, sz, Fz) {
        this.move(sz, (zz => {
          const tz = [...zz.querySelectorAll(cW)].filter((tz => tz.closest(TW) === zz));
          if (tz.length >= 2) {
            const zz = tz[0].getBoundingClientRect(),
              sz = tz[1].getBoundingClientRect();
            return Math.abs(sz.top - zz.top) > Math.abs(sz.left - zz.left) ? "Right" : "Down"
          }
          const sz = zz.getBoundingClientRect();
          return sz.height > sz.width ? "Right" : "Down"
        })(tz), Fz, !1, !0), this.focused !== zz || this.pendingFocus || this.activate(zz)
      }
      handleScroll(zz, tz) {
        const sz = (0, wz.k)(zz.rightStick, .2);
        if (0 === sz.x && 0 === sz.y) return void(this.scrollRemainder = {
          x: 0,
          y: 0
        });
        const Fz = zz.dtMs / 1e3;
        for (const Xz of ["x", "y"]) {
          var Wz;
          const zz = sz[Xz];
          if (0 === zz) continue;
          const Oz = null !== (Wz = ez(this.focused, Xz, tz.root)) && void 0 !== Wz ? Wz : Gz(tz.root, Xz);
          if (!Oz) continue;
          const oz = Math.sign(zz) * zz * zz * 1500 * Fz + this.scrollRemainder[Xz],
            vz = Math.trunc(oz);
          this.scrollRemainder[Xz] = oz - vz, 0 !== vz && (jz(Oz, Xz, vz), this.scrolledInLayer = !0)
        }
      }
    };
    var SW = sz(7731);
    var VW = sz(8246);
    const RW = {
        duration: 80,
        strongMagnitude: .2,
        weakMagnitude: .2,
        needsPadInUse: !1
      },
      pW = {
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
          ...RW,
          minIntervalMs: 1e3
        },
        preview: {
          ...RW,
          minIntervalMs: 0
        }
      };
    const fW = new class {
        constructor(zz) {
          this.deps = zz, this.lastPlayedMs = {}, this.loggedFailure = !1, this.logFailure = zz => {
            this.loggedFailure || (this.loggedFailure = !0, console.warn("Controller vibration failed; further failures are not logged.", zz))
          }
        }
        play(zz, tz) {
          const sz = pW[zz];
          if (!this.deps.isVibrationOn() || sz.needsPadInUse && !this.deps.isPadInUse()) return !1;
          const Fz = this.lastPlayedMs[zz];
          if (void 0 !== Fz && tz - Fz < sz.minIntervalMs) return !1;
          const Wz = this.deps.getActuator();
          if (!Wz) return !1;
          this.lastPlayedMs[zz] = tz;
          const {
            duration: Xz,
            strongMagnitude: Oz,
            weakMagnitude: oz
          } = sz;
          try {
            Wz.playEffect("dual-rumble", {
              duration: Xz,
              strongMagnitude: Oz,
              weakMagnitude: oz
            }).catch(this.logFailure)
          } catch (vz) {
            this.logFailure(vz)
          }
          return !0
        }
      }({
        getActuator: () => (zz => {
          const tz = null === zz || void 0 === zz ? void 0 : zz.vibrationActuator;
          return "function" === typeof(null === tz || void 0 === tz ? void 0 : tz.playEffect) ? tz : null
        })(Oz.e.getActiveGamepad()),
        isVibrationOn: () => (0, Nz.k)().vibration,
        isPadInUse: bz.k
      }),
      EW = zz => {
        fW.play(zz, performance.now())
      };
    var zX = sz(7739),
      tX = sz(2662),
      sX = sz(119),
      FX = sz(44),
      WX = sz(624);
    class XX {
      constructor(zz) {
        this.deps = zz
      }
      check() {
        let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const tz = this.deps.isPadActive() ? this.deps.getPadFamily() : null;
        if (!tz) return "skipped";
        const sz = zz ? this.deps.getVisitId() : this.deps.peekVisitId();
        return null === sz || this.deps.readReportedVisitId() === sz ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(sz), this.deps.Iw(tz, this.deps.getInputType()), "reported") : "notReady"
      }
    }
    const OX = "controllerUsageReportedVisit";
    var oX = sz(1319),
      vX = sz(1664),
      UX = sz(601),
      KX = sz(1416),
      uX = sz(1237);
    const NX = zz => ({
        translationKey: `controller:${zz}`
      }),
      bX = {
        A: "A",
        B: "B",
        X: "X",
        Y: "Y",
        LB: "LB",
        RB: "RB",
        LT: "LT",
        RT: "RT",
        View: NX("padButtonView"),
        Menu: NX("padButtonMenu"),
        LS: "L3",
        RS: "R3",
        Up: NX("padButtonDpadUp"),
        Down: NX("padButtonDpadDown"),
        Left: NX("padButtonDpadLeft"),
        Right: NX("padButtonDpadRight"),
        Home: NX("padButtonHome"),
        LeftStick: NX("padButtonLeftStick"),
        RightStick: NX("padButtonRightStick")
      },
      wX = {
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
          View: NX("padButtonCreate"),
          Menu: NX("padButtonOptions")
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
      DX = (zz, tz) => {
        var sz;
        const Fz = null !== (sz = wX[zz][tz]) && void 0 !== sz ? sz : bX[tz];
        return "string" === typeof Fz ? Fz : (0, Wz.v)(uX.g.get().getCurrentLanguageCode(), Fz.translationKey)
      },
      gX = zz => {
        let {
          glyph: tz,
          family: sz,
          className: Fz
        } = zz;
        const Wz = (0, bz.C)(),
          Xz = null !== sz && void 0 !== sz ? sz : Wz,
          Oz = (0, zX.h)(Xz, tz);
        return (0, Qz.jsx)("span", {
          className: hz()("ControllerGlyph", Fz),
          role: "img",
          "aria-label": DX(Xz, tz),
          style: {
            "--pad-glyph-mask": `url(${Oz})`,
            "--pad-glyph-aspect": (0, zX.e)(Xz, tz)
          }
        })
      };
    var HX = sz(1831);
    const BX = zz => {
      let {
        action: tz
      } = zz;
      const {
        t: sz
      } = (0, Wz.B)();
      switch (tz.kind) {
        case "reload":
          return (0, Qz.jsx)("span", {
            children: sz("controller:gameplayReload")
          });
        case "specialAction":
          return null;
        case "customButton":
          return (0, Qz.jsx)(HX.c, {
            text: tz.description ? [{
              icon: tz.icon
            }, ` ${tz.description}`] : [{
              icon: tz.icon
            }]
          });
        case "touchButton":
          return (0, Qz.jsx)(HX.c, {
            text: tz.label
          })
      }
    };
    var PX = sz(8253);
    const rX = zz => {
      let {
        hold: tz
      } = zz;
      return (0, Qz.jsx)("div", {
        className: "DropStackFillTrack",
        style: {
          "--pad-drop-stack-hold": `${tz.holdMs}ms`
        },
        children: (0, Qz.jsx)("div", {
          className: "DropStackFillBar"
        })
      }, tz.id)
    };
    var YX = sz(8263),
      xX = sz(8266),
      mX = sz(8271),
      JX = sz(8261);
    const IX = () => {
        const {
          gameState: zz
        } = (0, vz.h)(["gameState"]), tz = (0, bz.B)(), [Fz, Wz] = (0, Mz.useState)(!1), [Xz, Oz] = (0, Mz.useState)(!1);
        return (0, Mz.useEffect)((() => {
          "inGame" === zz && Wz(!0)
        }), [zz]), (0, Mz.useEffect)((() => {
          if (!Fz) return;
          let zz = null,
            tz = !1;
          return (UX.p ? Promise.all([sz.e(69), sz.e(259), sz.e(199), sz.e(217), sz.e(216), sz.e(84)]).then((() => sz(39680))).then((zz => zz.startWasmPadGameplay)) : Promise.all([sz.e(69), sz.e(226), sz.e(225), sz.e(94), sz.e(72), sz.e(71), sz.e(70), sz.e(218), sz.e(182), sz.e(222), sz.e(74), sz.e(196), sz.e(215), sz.e(219), sz.e(93), sz.e(83), sz.e(113), sz.e(234), sz.e(73), sz.e(112), sz.e(155), sz.e(217), sz.e(188)]).then((() => sz(39800))).then((zz => zz.startPadGameplay))).then((sz => {
            tz || (zz = sz())
          })).catch((zz => {
            console.error("Pad gameplay failed to load", zz), tz || Oz(!0)
          })), () => {
            var sz;
            tz = !0, null === (sz = zz) || void 0 === sz || sz()
          }
        }), [Fz]), (0, Mz.useEffect)((() => {
          Xz && tz && (Oz(!1), oX.NotificationProvider.showPromptPopup({
            title: "controller:gameplayLoadFailedTitle",
            subtitle: "controller:gameplayLoadFailedSubtitle",
            confirmText: "settingsMenu:reloadPagePopupConfirm",
            confirmTooltip: "",
            cancelText: "general:cancel",
            cancelTooltip: ""
          }).getResult().then((zz => {
            !0 === zz && (0, vX.reloadBloxd)()
          })))
        }), [Xz, tz]), (0, Qz.jsxs)(Qz.Fragment, {
          children: [(0, Qz.jsx)(CX, {}), (0, Qz.jsx)(eX, {}), (0, Qz.jsx)(ZX, {})]
        })
      },
      CX = () => {
        const {
          t: zz
        } = (0, Wz.B)(), tz = (0, bz.B)(), {
          gameState: sz,
          isUiHidden: Fz
        } = (0, vz.h)(["gameState", "isUiHidden"]), {
          hideButtonHints: Xz
        } = (0, Nz.t)(), Oz = (0, PX.i)(), oz = (0, PX.j)(), [Uz, uz] = (0, Mz.useState)(mX.c);
        return (0, KX.g)(JX.u, uz), !tz || Xz || Fz || "inGame" !== sz || !Oz && !Uz ? null : (0, Qz.jsxs)("div", {
          className: "PadActionHint SmallTextBold",
          children: [Oz && (0, Qz.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, Qz.jsx)(gX, {
              glyph: (0, Kz.f)("actionButton")
            }), (0, Qz.jsx)(BX, {
              action: Oz
            }), oz && (0, Qz.jsx)("span", {
              className: "PadActionHintMore",
              children: zz("controller:gameplayActionWheelHint")
            })]
          }), Uz && (0, Qz.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, Qz.jsx)(gX, {
              glyph: (0, Kz.f)("pickBlock")
            }), (0, Qz.jsx)("span", {
              children: zz("controller:gameplayPickBlock")
            })]
          })]
        })
      },
      eX = () => {
        const {
          t: zz
        } = (0, Wz.B)(), tz = (0, bz.B)(), {
          gameState: sz,
          isUiHidden: Fz
        } = (0, vz.h)(["gameState", "isUiHidden"]), [Xz, Oz] = (0, Mz.useState)(YX.c);
        return (0, KX.g)(JX.s, Oz), tz && !Fz && "inGame" === sz && Xz ? (0, Qz.jsxs)("div", {
          className: "PadDropStackFill SmallTextBold",
          children: [(0, Qz.jsx)("span", {
            children: zz("controller:gameplayDropStack")
          }), (0, Qz.jsx)(rX, {
            hold: Xz
          })]
        }) : null
      },
      ZX = () => {
        const {
          t: zz
        } = (0, Wz.B)(), tz = (0, bz.B)(), {
          gameState: sz,
          isUiHidden: Fz
        } = (0, vz.h)(["gameState", "isUiHidden"]), {
          hideButtonHints: Xz
        } = (0, Nz.t)(), [Oz, oz] = (0, Mz.useState)(xX.d);
        return (0, KX.g)(JX.p, oz), tz && !Fz && "inGame" === sz && Oz ? (0, Qz.jsxs)("div", {
          className: "PadAttackLatchedHint SmallTextBold",
          children: [!Xz && (0, Qz.jsx)(gX, {
            glyph: (0, Kz.f)("attack")
          }), (0, Qz.jsx)("span", {
            children: zz("controller:gameplayAttackLatched")
          })]
        }) : null
      };
    var GX = sz(8275),
      TX = sz(1884),
      cX = sz(2290),
      jX = sz(7713);
    const AX = zz => zz && !(0, GX.b)(TX.e.get("shopInfo")),
      yX = () => {
        const zz = "inGame" === (0, vz.h)(["gameState"]).gameState;
        return (0, cX.d)("shopInfo", (() => {
          (0, jX.h)(AX(zz))
        })), (0, Mz.useEffect)((() => {
          (0, jX.h)(AX(zz))
        }), [zz]), null
      },
      MX = () => {
        const {
          t: zz
        } = (0, Wz.B)(), {
          hideButtonHints: tz
        } = (0, Nz.t)();
        (0, bz.C)();
        const sz = (0, cs.i)();
        return (0, Mz.useEffect)((() => (() => {
          const zz = uz.c.register({
              name: "inventory",
              isActive: Es.isActive,
              onFrame: Es.onFrame,
              onDeactivate: Es.onDeactivate,
              wakePressActs: Es.wakePressActs
            }),
            tz = zz => {
              Es.noteRealPointer(zz), Es.shouldBlockRealPointer(zz) && zz.stopPropagation()
            };
          for (const Oz of zF) window.addEventListener(Oz, tz, !0);
          const sz = (0, lt.j)((() => {
              "inventory" !== uz.c.getActiveConsumerName() && Es.forgetSurface()
            })),
            Fz = zz => {
              const tz = zz.target;
              (0, bz.k)() && fz(tz) && tz.closest(ws) && (0, lt.i)() && (0, lt.o)(tz)
            };
          document.addEventListener("focusout", Fz, !0);
          const {
            invalidate: Wz,
            onScroll: Xz
          } = Es.targets;
          return document.addEventListener("scroll", Xz, !0), window.addEventListener("resize", Wz), () => {
            zz(), sz();
            for (const zz of zF) window.removeEventListener(zz, tz, !0);
            document.removeEventListener("scroll", Xz, !0), document.removeEventListener("focusout", Fz, !0), window.removeEventListener("resize", Wz), Es.targets.disconnect()
          }
        })()), []), (0, Qz.jsxs)(Qz.Fragment, {
          children: [(0, Qz.jsx)(lz, {
            placer: Es.ring,
            className: "InventorySlotCursorRing"
          }), sz.showing && !tz && (0, Qz.jsx)("div", {
            className: "InventorySlotCursorHints SmallTextBold",
            children: Lt(sz).map((tz => {
              let {
                actions: Fz,
                labelKey: Wz
              } = tz;
              return (0, Qz.jsxs)("div", {
                className: "InventorySlotCursorHint",
                children: [Fz.map((zz => (0, Qz.jsx)(gX, {
                  glyph: (0, Kz.f)(zz)
                }, zz))), (0, Qz.jsx)("span", {
                  children: zz(`controller:${Wz}`)
                }), "inventoryDrop" === Wz && sz.dropStackHold && (0, Qz.jsx)(rX, {
                  hold: sz.dropStackHold
                })]
              }, Wz)
            }))
          })]
        })
      },
      dX = [{
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
      hX = zz => Array.from(zz).map((zz => ({
        type: "char",
        char: zz,
        width: 1
      }))),
      QX = function(zz) {
        return {
          type: "command",
          command: zz,
          width: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
        }
      },
      kX = [QX("page", 2), QX("otherPage"), QX("caretLeft"), QX("space", 3), QX("caretRight"), QX("close", 1.5), QX("submit", 1.5)],
      iX = [QX("page", 2), QX("otherPage"), QX("caretLeft"), QX("space", 2), QX("caretRight"), QX("newline"), QX("close", 1.5), QX("submit", 1.5)],
      LX = [
        [...hX("1234567890"), QX("backspace")], hX("qwertyuiop/"), hX("asdfghjkl'?"), [QX("shift", 2), ...hX("zxcvbnm,.")]
      ],
      lX = [
        [...hX("1234567890"), QX("backspace")], hX("!@#$%^&*()/"), hX('-_=+[]{};:"'), hX("~`|\\<>'\u20ac\xa3,.")
      ],
      nX = {
        letters: LX,
        accents: [
          [...hX("1234567890"), QX("backspace")], hX("\xe1\xe9\xed\xf3\xfa\xe0\xe8\xec\xf2\xf9\xf1"), hX("\xe2\xea\xee\xf4\xfb\xe4\xeb\xef\xf6\xfc\xe7"), [QX("shift", 2), ...hX("\xe3\xf5\xdf\u0153\u011f\u015f\u0131\xbf\xa1")]
        ],
        symbols: lX
      },
      aX = new Set(["de", "es", "fr", "it", "nl", "pt", "pt-BR", "tr", "vi"]),
      qX = (zz, tz) => "letters" === zz ? tz ? {
        page: "accents",
        otherPage: "symbols"
      } : {
        page: "symbols",
        otherPage: "accents"
      } : {
        page: "letters",
        otherPage: "accents" === zz ? "symbols" : "accents"
      },
      SX = function(zz, tz) {
        const sz = ((zz, tz) => [...nX[zz], tz ? iX : kX])(zz, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
        if (0 === tz) return sz;
        const Fz = Math.min(2, VX(sz[0]) / tz);
        return [Array.from({
          length: tz
        }, ((zz, tz) => ({
          type: "phrase",
          phraseIndex: tz,
          width: Fz
        }))), ...sz]
      },
      VX = zz => zz.reduce(((zz, tz) => zz + tz.width), 0),
      RX = zz => Math.max(...zz.map(VX)),
      pX = (zz, tz) => {
        const sz = zz[tz.row];
        let Fz = (RX(zz) - VX(sz)) / 2;
        for (let Wz = 0; Wz < tz.col; Wz++) Fz += sz[Wz].width;
        return Fz + sz[tz.col].width / 2
      },
      fX = (zz, tz, sz) => {
        let Fz = 0,
          Wz = 1 / 0;
        for (let Xz = 0; Xz < zz[tz].length; Xz++) {
          const Oz = Math.abs(pX(zz, {
            row: tz,
            col: Xz
          }) - sz);
          Oz < Wz - 1e-9 && (Fz = Xz, Wz = Oz)
        }
        return Fz
      },
      EX = (zz, tz) => {
        const sz = Math.max(0, Math.min(zz.length - 1, tz.row));
        return {
          row: sz,
          col: Math.max(0, Math.min(zz[sz].length - 1, tz.col))
        }
      },
      zO = (zz, tz, sz) => "once" === zz && tz - sz <= 400 ? "caps" : "off" === zz ? "once" : "off",
      tO = (zz, tz) => "once" === zz && (zz => zz.toLowerCase() !== zz.toUpperCase())(tz) ? "off" : zz,
      sO = (zz, tz, sz) => {
        if ("symbols" === tz || "off" === sz) return zz;
        const Fz = zz.toUpperCase();
        return 1 === Fz.length ? Fz : zz
      };
    var FO = sz(8180);
    const WO = ["controller:keyboardPhraseGg", "controller:keyboardPhraseHi", "controller:keyboardPhraseThanks", "controller:keyboardPhraseGl", "controller:keyboardPhraseBrb", "controller:keyboardPhraseYes", "controller:keyboardPhraseNo", "controller:keyboardPhraseHelp"];
    const XO = new class {
        constructor() {
          this.lastSendMs = -1 / 0
        }
        claim(zz) {
          return !(zz - this.lastSendMs < 2e3) && (this.lastSendMs = zz, !0)
        }
      },
      OO = {
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
      oO = ["qo", "nameTag"],
      vO = zz => {
        const tz = zz.target instanceof HTMLTextAreaElement && !oO.includes(zz.kind);
        return SX(zz.page, "chat" === zz.kind ? WO.length : 0, tz)
      },
      UO = zz => {
        const tz = zz.getBoundingClientRect(),
          sz = window.innerHeight,
          Fz = tz.top + tz.height / 2 < sz / 2 ? "bottom" : "top",
          Wz = "bottom" === Fz ? sz - tz.bottom - 6 : tz.top - 6;
        return {
          placement: Fz,
          maxHeightPx: Math.min(.46 * sz, Math.max(.3 * sz, Wz))
        }
      },
      KO = zz => {
        (0, xF.g)(zz) ? (0, xF.c)().close(): (qW.noteChosenStop(zz), zz.blur())
      };
    class uO {
      constructor(zz) {
        this.host = zz, this.lastShiftPressMs = -1 / 0, this.phraseTexts = [], this.phrasesFill = !1
      }
      setPhraseRow(zz, tz) {
        this.phraseTexts = zz, this.phrasesFill = tz
      }
      pressKey(zz) {
        const tz = this.host.getState(),
          sz = vO(tz),
          Fz = sz[zz.row][zz.col];
        this.host.setState({
          ...tz,
          focus: zz,
          preferredX: pX(sz, zz)
        }), "char" === Fz.type ? this.typeChar(Fz.char) : "command" === Fz.type ? this.runCommand(Fz.command) : this.sendPhrase(Fz.phraseIndex)
      }
      runCommand(zz) {
        const tz = this.host.getState();
        switch (zz) {
          case "backspace":
            Xt(tz.target);
            break;
          case "space":
            Wt(tz.target, " ");
            break;
          case "newline":
            Wt(tz.target, "\n");
            break;
          case "caretLeft":
            Ot(tz.target, -1);
            break;
          case "caretRight":
            Ot(tz.target, 1);
            break;
          case "shift": {
            const zz = performance.now();
            this.host.setState({
              ...tz,
              shift: zO(tz.shift, zz, this.lastShiftPressMs)
            }), this.lastShiftPressMs = zz;
            break
          }
          case "page":
          case "otherPage": {
            const sz = qX(tz.page, tz.accentsFirst)[zz];
            this.host.setState({
              ...tz,
              page: sz,
              focus: EX(vO({
                ...tz,
                page: sz
              }), tz.focus)
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
            (0, xF.g)(tz.target) && (0, xF.c)().selectNextChannel()
        }
      }
      submit() {
        var zz, tz;
        const {
          target: sz
        } = this.host.getState();
        this.host.hide(), (0, xF.g)(sz) ? (0, xF.c)().submit() : (qW.noteChosenStop(sz), null === (zz = (tz = (0, xF.d)(sz)).submit) || void 0 === zz || zz.call(tz), document.activeElement === sz && sz.blur())
      }
      close() {
        const {
          target: zz
        } = this.host.getState();
        this.host.hide(), KO(zz)
      }
      typeChar(zz) {
        const {
          target: tz,
          page: sz,
          shift: Fz
        } = this.host.getState();
        Wt(tz, sO(zz, sz, Fz)), this.host.setState({
          ...this.host.getState(),
          shift: tO(Fz, zz)
        })
      }
      sendPhrase(zz) {
        if (this.phrasesFill) {
          const {
            target: tz
          } = this.host.getState(), sz = this.phraseTexts[zz];
          sz && (tz.setSelectionRange(0, tz.value.length), Wt(tz, sz))
        } else XO.claim(performance.now()) && (this.host.hide(), (0, xF.c)().sendLine(this.phraseTexts[zz]))
      }
    }
    const NO = {
        initialDelayMs: 380,
        intervalMs: 85
      },
      bO = {
        initialDelayMs: 400,
        intervalMs: 55
      };
    class wO {
      constructor(zz, tz) {
        this.host = zz, this.editor = tz, this.lastDirection = null, this.navRepeat = new wz.c((0, Dz.e)(NO)), this.commandRepeats = new Map(dX.filter((zz => {
          let {
            repeats: tz
          } = zz;
          return tz
        })).map((zz => {
          let {
            command: tz
          } = zz;
          return [tz, (0, Dz.e)(bO)]
        })))
      }
      reset() {
        this.navRepeat.reset();
        for (const zz of this.commandRepeats.values()) zz.reset()
      }
      onVisibleFrame(zz) {
        const tz = performance.now();
        for (const {
            command: Wz,
            action: Xz
          }
          of dX) {
          const sz = (0, Kz.f)(Xz),
            Fz = this.commandRepeats.get(Wz);
          if ((Fz ? Fz.update(zz.isHeld(sz), tz) : zz.wasPressed(sz)) && (this.editor.runCommand(Wz), !this.host.getState().visible)) return
        }
        if (zz.wasPressed((0, Kz.f)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
        const sz = this.readNavDirection(zz);
        this.lastDirection = sz;
        const Fz = this.navRepeat.update(sz, tz);
        Fz && this.navigate(Fz)
      }
      onHiddenFrame(zz, tz) {
        var sz;
        if (zz.wasPressed((0, Kz.f)("keyboardClose"))) return void KO(tz);
        const Fz = (0, Kz.f)("keyboardType");
        if (zz.wasPressed(Fz)) return uz.c.consumeButton(Fz), void this.host.open(tz);
        const Wz = this.readNavDirection(zz),
          Xz = null !== Wz && Wz !== this.lastDirection;
        if (this.lastDirection = Wz, !Xz || (0, xF.g)(tz)) return;
        const Oz = (null === (sz = WW()) || void 0 === sz ? void 0 : sz.root.contains(tz)) || null !== tz.closest(".EntireInventoryWrapper");
        KO(tz), Oz && uz.c.handOffHeldInput()
      }
      navigate(zz) {
        const tz = this.host.getState();
        if ("Up" === zz && 0 === tz.focus.row && "chat" === tz.kind) return (0, xF.c)().stepHistory(), void this.host.setState({
          ...tz
        });
        const sz = ((zz, tz, sz, Fz) => {
          if ("Left" === sz || "Right" === sz) {
            const Fz = zz[tz.row].length,
              Wz = (tz.col + ("Right" === sz ? 1 : -1) + Fz) % Fz,
              Xz = {
                row: tz.row,
                col: Wz
              };
            return {
              pos: Xz,
              preferredX: pX(zz, Xz)
            }
          }
          const Wz = (tz.row + ("Down" === sz ? 1 : -1) + zz.length) % zz.length;
          return {
            pos: {
              row: Wz,
              col: fX(zz, Wz, Fz)
            },
            preferredX: Fz
          }
        })(vO(tz), tz.focus, zz, tz.preferredX);
        this.host.setState({
          ...tz,
          focus: sz.pos,
          preferredX: sz.preferredX
        })
      }
      readNavDirection(zz) {
        for (const tz of wz.D)
          if (zz.isHeld(tz)) return tz;
        return (0, wz.ab)((0, wz.k)(zz.leftStick, (0, Nz.k)().moveDeadzone))
      }
    }
    const DO = ["Up", "Down", "Left", "Right"],
      gO = new Set(["CapsLock", "Control", "Fn", "FnLock", "Hyper", "NumLock", "ScrollLock", "Shift", "Super"]);
    const HO = new class {
      constructor() {
        this.state = OO, this.listeners = new Set, this.ownedField = null, this.pendingChatInput = null, this.pendingChatTimeout = 0, this.savedInputMode = null, this.editor = new uO(this), this.padInput = new wO(this, this.editor)
      }
      getState() {
        return this.state
      }
      setState(zz) {
        const tz = zz.visible !== this.state.visible;
        this.state = zz;
        for (const sz of this.listeners) sz();
        tz && Uz.o.Yg(nz.d, zz.visible)
      }
      subscribe(zz) {
        return this.listeners.add(zz), () => {
          this.listeners.delete(zz)
        }
      }
      install() {
        const zz = uz.c.register({
            name: "keyboard",
            isActive: () => this.state.visible || fz(document.activeElement),
            onFrame: zz => {
              this.onFrame(zz)
            },
            onDeactivate: () => {
              this.padInput.reset()
            },
            wakePressActs: zz => DO.includes(zz) || !this.state.visible && zz === (0, Kz.f)("keyboardType")
          }),
          tz = zz => {
            const tz = zz.target;
            fz(tz) && (tz === this.pendingChatInput || (0, bz.k)() ? this.open(tz) : this.state.visible && tz !== this.state.target && (this.ownedField = null, this.hide()))
          },
          sz = () => {
            setTimeout((() => {
              this.releaseLostField()
            }), 0)
          },
          Fz = zz => {
            zz.isTrusted && this.state.visible && (zz => !zz.repeat && !gO.has(zz.key) && !(0, FO.d)(zz.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(zz.key))(zz) && this.hide()
          },
          Wz = () => {
            this.state.visible && this.setState({
              ...this.state,
              ...UO(this.state.target)
            })
          };
        document.addEventListener("focusin", tz, !0), document.addEventListener("focusout", sz, !0), window.addEventListener("keydown", Fz, !0), window.addEventListener("resize", Wz);
        const Xz = Uz.o.subscribe(JX.d, (() => {
            this.openChat()
          })),
          Oz = Uz.o.subscribe(nz.e, (zz => {
            this.openForField(zz)
          }));
        return () => {
          zz(), document.removeEventListener("focusin", tz, !0), document.removeEventListener("focusout", sz, !0), window.removeEventListener("keydown", Fz, !0), window.removeEventListener("resize", Wz), Uz.o.unsubscribe(Xz), Uz.o.unsubscribe(Oz), this.clearPendingChat(), this.hide(), this.ownedField = null
        }
      }
      openChat() {
        const zz = (0, xF.c)();
        zz ? document.activeElement !== zz.input ? (this.clearPendingChat(), this.pendingChatInput = zz.input, this.pendingChatTimeout = window.setTimeout((() => {
          this.pendingChatInput = null
        }), 250), zz.open()) : this.open(zz.input) : console.warn("controllerOpenChat with no chat mounted")
      }
      openForField(zz) {
        fz(zz) ? (document.activeElement !== zz && zz.focus(), document.activeElement === zz && this.open(zz)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", zz)
      }
      open(zz) {
        var tz;
        if (this.clearPendingChat(), this.ownedField = zz, this.state.visible && this.state.target === zz) return;
        this.restoreInputMode(), (zz => {
          Ez(zz) && 0 === zz.selectionStart && 0 === zz.selectionEnd && zz.setSelectionRange(zz.value.length, zz.value.length)
        })(zz), this.savedInputMode = zz.getAttribute("inputmode"), zz.setAttribute("inputmode", "none");
        const sz = {
          ...OO,
          visible: !0,
          target: zz,
          kind: (0, xF.g)(zz) ? "chat" : null !== (tz = (0, xF.d)(zz).kind) && void 0 !== tz ? tz : null,
          accentsFirst: (Fz = uX.g.get().getCurrentLanguageCode(), aX.has(Fz)),
          ...UO(zz)
        };
        var Fz;
        const Wz = vO(sz),
          Xz = ((zz, tz) => {
            for (let sz = 0; sz < zz.length; sz++) {
              const Fz = zz[sz].findIndex((zz => "char" === zz.type && zz.char === tz));
              if (-1 !== Fz) return {
                row: sz,
                col: Fz
              }
            }
            return null
          })(Wz, "q");
        this.padInput.reset(), this.setState({
          ...sz,
          focus: Xz,
          preferredX: pX(Wz, Xz)
        })
      }
      hide() {
        this.state.visible && (this.restoreInputMode(), this.padInput.reset(), this.setState(OO))
      }
      onFrame(zz) {
        if (this.releaseLostField()) return;
        const tz = document.activeElement;
        this.state.visible ? this.padInput.onVisibleFrame(zz) : fz(tz) && this.padInput.onHiddenFrame(zz, tz)
      }
      releaseLostField() {
        const zz = this.ownedField;
        return !(null === zz || zz.isConnected && document.activeElement === zz) && (this.ownedField = null, this.hide(), !0)
      }
      clearPendingChat() {
        window.clearTimeout(this.pendingChatTimeout), this.pendingChatInput = null
      }
      restoreInputMode() {
        const {
          target: zz
        } = this.state;
        zz && (null === this.savedInputMode ? zz.removeAttribute("inputmode") : zz.setAttribute("inputmode", this.savedInputMode), this.savedInputMode = null)
      }
    };
    var BO = sz(8283);
    const PO = new Map(dX.map((zz => {
        let {
          command: tz,
          action: sz
        } = zz;
        return [tz, sz]
      }))),
      rO = {
        letters: "ABC",
        accents: "\xe0\xe9",
        symbols: "&123"
      },
      YO = {
        chat: "controller:keyboardTargetChat",
        sign: "controller:keyboardTargetSign",
        nameTag: "controller:keyboardTargetNameTag",
        book: "controller:keyboardTargetBook",
        qo: "controller:keyboardTargetBookTitle"
      },
      xO = zz => {
        const tz = (() => {
          const [, zz] = (0, Mz.useReducer)((zz => zz + 1), 0);
          return zz
        })();
        (0, Mz.useEffect)((() => {
          if (!zz) return;
          const sz = ["input", "select", "selectionchange", "keyup", "pointerup"];
          for (const Wz of sz) zz.addEventListener(Wz, tz);
          document.addEventListener("selectionchange", tz);
          const Fz = new MutationObserver(tz);
          return Fz.observe(zz, {
            attributeFilter: ["placeholder"]
          }), () => {
            Fz.disconnect();
            for (const Fz of sz) zz.removeEventListener(Fz, tz);
            document.removeEventListener("selectionchange", tz)
          }
        }), [zz, tz])
      },
      mO = zz => {
        zz.preventDefault()
      },
      JO = zz => {
        "mouse" !== zz.pointerType && zz.preventDefault()
      },
      IO = () => {
        var zz;
        const {
          t: tz
        } = (0, Wz.B)(), sz = (() => {
          const [zz, tz] = (0, Mz.useState)(HO.getState());
          return (0, Mz.useEffect)((() => HO.subscribe((() => {
            tz(HO.getState())
          }))), []), zz
        })(), Fz = (0, bz.B)(), Xz = (0, Mz.useRef)(null);
        (0, Nz.t)(), (0, bz.C)(), (0, Mz.useEffect)((() => {
          const zz = HO.install(),
            tz = null;
          return () => {
            zz(), null === tz || void 0 === tz || tz()
          }
        }), []);
        const Oz = (0, Mz.useMemo)((() => WO.map((zz => tz(zz)))), [tz]),
          oz = sz.visible && "chat" === sz.kind ? sz.target : null;
        xO(oz);
        const vz = null !== (zz = null === oz || void 0 === oz ? void 0 : oz.value) && void 0 !== zz ? zz : "",
          Uz = ((zz, tz, sz) => {
            if (!zz.startsWith("/")) return [];
            const Fz = [];
            for (let Wz = tz.length - 1; Wz >= 0 && Fz.length < sz; Wz--) {
              const sz = tz[Wz].trim();
              sz.startsWith(zz) && sz !== zz && !Fz.includes(sz) && Fz.push(sz)
            }
            return Fz
          })(vz, vz.startsWith("/") ? (0, BO.d)() : [], WO.length),
          uz = vz.startsWith("/"),
          wz = uz ? WO.map(((zz, tz) => {
            var sz;
            return null !== (sz = Uz[tz]) && void 0 !== sz ? sz : ""
          })) : Oz;
        if ((0, Mz.useEffect)((() => {
            HO.editor.setPhraseRow(wz, uz)
          })), (0, Mz.useEffect)((() => {
            const zz = Xz.current;
            if (zz) return zz.addEventListener("touchstart", mO, {
              passive: !1
            }), () => {
              zz.removeEventListener("touchstart", mO)
            }
          }), [sz.visible]), !sz.visible) return null;
        const Dz = vO(sz),
          gz = RX(Dz),
          Hz = zz => "char" === zz.type ? sO(zz.char, sz.page, sz.shift) : "phrase" === zz.type ? wz[zz.phraseIndex] : (zz => {
            switch (zz) {
              case "backspace":
                return "\u232b";
              case "shift":
                return "caps" === sz.shift ? "\u21ea" : "\u21e7";
              case "page":
              case "otherPage":
                return rO[qX(sz.page, sz.accentsFirst)[zz]];
              case "space":
                return tz("controller:keyboardSpace");
              case "caretLeft":
                return "\u2190";
              case "caretRight":
                return "\u2192";
              case "newline":
                return "\u21b5";
              case "submit":
                return tz("chat" === sz.kind ? "controller:keyboardSend" : "controller:keyboardDone");
              case "close":
                return "\u2715";
              case "channel":
                return "\u21c4"
            }
          })(zz.command),
          Bz = zz => {
            HO.editor.pressKey(zz)
          };
        return (0, Qz.jsxs)("div", {
          ref: Xz,
          className: hz()(xF.n, "top" === sz.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
            PadKeyboardMultiline: sz.target instanceof HTMLTextAreaElement
          }),
          style: {
            "--pad-keyboard-rows": Dz.length,
            "--pad-keyboard-height": `${sz.maxHeightPx}px`
          },
          onPointerDown: JO,
          onMouseDown: mO,
          children: [(0, Qz.jsx)(CO, {
            target: sz.target,
            label: sz.kind ? tz(YO[sz.kind]) : sz.target.placeholder || tz("controller:keyboardTargetText")
          }), (0, Qz.jsx)("div", {
            className: "PadKeyboardRows",
            children: Dz.map(((zz, tz) => (0, Qz.jsx)("div", {
              className: hz()("PadKeyboardRow", {
                PadKeyboardPhraseRow: "phrase" === zz[0].type
              }),
              children: zz.map(((zz, Wz) => {
                const Xz = Fz && sz.focus.row === tz && sz.focus.col === Wz,
                  Oz = "command" === zz.type ? PO.get(zz.command) : void 0;
                return (0, Qz.jsx)("div", {
                  className: "PadKeyboardKeySlot",
                  style: {
                    width: zz.width / gz * 100 + "%"
                  },
                  children: (0, Qz.jsxs)("div", {
                    className: hz()("PadKeyboardKey", {
                      PadKeyboardKeyFocused: Xz,
                      PadKeyboardKeyCommand: "command" === zz.type,
                      PadKeyboardKeyPhrase: "phrase" === zz.type,
                      PadKeyboardKeyActive: "command" === zz.type && "shift" === zz.command && "off" !== sz.shift,
                      PadKeyboardKeySubmit: "command" === zz.type && "submit" === zz.command
                    }),
                    role: "button",
                    onClick: () => {
                      Bz({
                        row: tz,
                        col: Wz
                      })
                    },
                    onTouchEnd: zz => {
                      var sz, Fz;
                      zz.preventDefault(), sz = zz.changedTouches[0], Fz = zz.currentTarget.getBoundingClientRect(), sz && sz.clientX >= Fz.left && sz.clientX <= Fz.right && sz.clientY >= Fz.top && sz.clientY <= Fz.bottom && Bz({
                        row: tz,
                        col: Wz
                      })
                    },
                    children: [(0, Qz.jsx)("span", {
                      className: "PadKeyboardKeyLabel",
                      children: Hz(zz)
                    }), Fz && Oz && (0, Qz.jsx)(gX, {
                      className: "PadKeyboardKeyGlyph",
                      glyph: (0, Kz.f)(Oz)
                    })]
                  })
                }, Wz)
              }))
            }, tz)))
          })]
        })
      },
      CO = zz => {
        let {
          target: tz,
          label: sz
        } = zz;
        xO(tz);
        const Fz = (0, Mz.useRef)(null),
          Wz = (0, Mz.useRef)(null),
          Xz = tz instanceof HTMLTextAreaElement;
        (0, Mz.useLayoutEffect)((() => {
          const zz = Fz.current,
            tz = Wz.current;
          Xz ? zz.scrollTop = tz.offsetTop - zz.clientHeight / 2 : zz.scrollLeft = tz.offsetLeft - zz.clientWidth / 2
        }));
        const {
          value: Oz,
          start: oz,
          end: vz
        } = zt(tz), Uz = "password" === tz.type ? "\u2022".repeat(Oz.length) : Oz;
        return (0, Qz.jsxs)("div", {
          className: "PadKeyboardPreview",
          children: [(0, Qz.jsx)("div", {
            className: "PadKeyboardPreviewLabel SmallTextBold",
            children: sz
          }), (0, Qz.jsxs)("div", {
            ref: Fz,
            className: hz()("PadKeyboardPreviewText", {
              PadKeyboardPreviewMultiline: Xz
            }),
            children: [(0, Qz.jsx)("span", {
              children: Uz.slice(0, oz)
            }), (0, Qz.jsx)("span", {
              ref: Wz,
              className: "PadKeyboardCaret"
            }), oz !== vz && (0, Qz.jsx)("span", {
              className: "PadKeyboardPreviewSelection",
              children: Uz.slice(oz, vz)
            }), (0, Qz.jsx)("span", {
              children: Uz.slice(vz)
            }), 0 === Uz.length && tz.placeholder && tz.placeholder !== sz && (0, Qz.jsx)("span", {
              className: "PadKeyboardPreviewPlaceholder",
              children: tz.placeholder
            })]
          })]
        })
      };
    var eO = sz(1358),
      ZO = sz(3088);
    const GO = function() {
        for (var zz = arguments.length, tz = new Array(zz), sz = 0; sz < zz; sz++) tz[sz] = arguments[sz];
        return tz.map(Kz.f)
      },
      TO = (zz, tz) => {
        const sz = hF(zz);
        return sz ? [{
          glyphs: [sz],
          labelKey: tz
        }] : []
      },
      cO = [".BottomMiddleElements", ".BottomLeftElements > *", ".BottomRightElements > *", ".MiddleTextBottom .MiddleText"],
      jO = "--pad-hint-bar-clearance",
      AO = "[data-pad-hint-bar-avoid]",
      yO = zz => {
        const tz = [];
        for (const sz of zz) Ut(sz) && tz.push(sz.getBoundingClientRect());
        return tz
      },
      MO = zz => {
        if (!zz) return null;
        const tz = WW(),
          sz = tz ? yO(((zz, tz) => {
            const sz = zz.closest(AO);
            return sz ? [sz] : ("popup" === tz ? document : zz).querySelectorAll(AO)
          })(tz.root, tz.layer.kind)) : [],
          Fz = !tz || tz.root.hasAttribute("data-pad-shows-hud");
        if (((0, ZO.h)(null === tz || void 0 === tz ? void 0 : tz.layer.kind, (0, ZO.i)()) || Fz) && sz.push(...yO(document.querySelectorAll(cO.join(",")))), 0 === sz.length) return null;
        const {
          width: Wz,
          height: Xz
        } = zz.getBoundingClientRect(), Oz = window.innerHeight - 8, oz = (0, ZO.n)(Oz, {
          width: Wz,
          height: Xz
        }, window.innerWidth / 2, sz, 8);
        return oz === Oz ? null : Math.round(window.innerHeight - oz)
      },
      dO = zz => {
        const tz = document.documentElement.style,
          sz = zz ? `${Math.round(window.innerHeight-zz.getBoundingClientRect().top)}px` : "";
        tz.getPropertyValue(jO) !== sz && (sz ? tz.setProperty(jO, sz) : tz.removeProperty(jO))
      },
      hO = () => {
        const {
          t: zz
        } = (0, Wz.B)(), {
          hideButtonHints: tz
        } = (0, Nz.t)(), sz = (0, bz.B)(), [Fz, Xz] = (0, Mz.useState)(!1), [Oz, Uz] = (0, Mz.useState)([]), [Dz, gz] = (0, Mz.useState)(null), Hz = (0, Mz.useRef)(null), Bz = (0, Mz.useRef)(null);
        (0, KX.g)(nz.d, (zz => {
          Xz(zz)
        })), (0, KX.g)(ZO.l, (() => {
          var zz;
          null === (zz = Bz.current) || void 0 === zz || zz.call(Bz)
        }));
        const Pz = sz && !tz && !Fz;
        return (0, Mz.useEffect)((() => {
          if (!Pz) return;
          let zz = null;
          const tz = () => {
            const tz = (() => {
                var zz;
                const tz = uz.c.getActiveConsumerName(),
                  sz = (0, ZO.d)();
                if (sz) {
                  const zz = (0, Kz.f)(sz),
                    tz = "emoteWheel" === sz && "wheel" === (0, Nz.k)().emoteButton || !(0, wz.I)(uz.c.getLastFrame().values, zz) ? {
                      glyphs: GO("menuConfirm"),
                      labelKey: "controller:menusSelect"
                    } : {
                      glyphs: [zz],
                      labelKey: "controller:wheelReleaseToPick"
                    };
                  return [{
                    glyphs: [(0, Kz.r)(zz)],
                    labelKey: "controller:wheelChoose"
                  }, tz, {
                    glyphs: GO("menuBack"),
                    labelKey: "controller:wheelClose"
                  }]
                }
                const Fz = WW();
                if (!Fz || "focus" !== tz && "cursor" !== tz) return (0, ZO.b)(Kz.f);
                const Wz = [],
                  Xz = {
                    glyphs: GO("menuBack"),
                    labelKey: "controller:menusBack"
                  },
                  Oz = Mt(Fz.root),
                  oz = Oz ? !Kt(Oz) : Boolean(Fz.layer.close),
                  Uz = !Oz && Fz.layer.closeLabelKey ? Fz.layer.closeLabelKey : Xz.labelKey,
                  bz = oz ? [{
                    ...Xz,
                    labelKey: Uz
                  }] : [],
                  Dz = IF(Fz.layer.kind) ? [{
                    glyphs: GO("chat"),
                    labelKey: "controller:menusQuickChat"
                  }] : [];
                if ("cursor" === tz) return Wz.push({
                  glyphs: GO("menuConfirm"),
                  labelKey: "controller:menusClick"
                }), Wz.push({
                  glyphs: GO("menuSecondary"),
                  labelKey: "controller:menusRightClick"
                }), Wz.push(...bz), Wz.push(...Dz), Wz.push({
                  glyphs: ["RightStick"],
                  labelKey: "controller:menusScroll"
                }), PW() && Wz.push({
                  glyphs: GO("menuToggleCursor"),
                  labelKey: "controller:menusFocusMode"
                }), Wz;
                const gz = qW.getFocused();
                gz && (0, JW.e)(gz) ? Wz.push({
                  glyphs: ["Left", "Right"],
                  labelKey: "controller:menusAdjust"
                }) : gz && At(gz) ? Wz.push({
                  glyphs: [],
                  labelKey: "controller:menusUseMouse"
                }) : Wz.push({
                  glyphs: GO("menuConfirm"),
                  labelKey: "controller:menusSelect"
                });
                const Hz = gz ? null === (zz = oF(gz)) || void 0 === zz ? void 0 : zz.dataset.padSecondary : void 0;
                Hz && Wz.push({
                  glyphs: GO("menuSecondary"),
                  labelKey: Hz
                }), Wz.push(...null !== gz && void 0 !== gz && gz.closest("[data-pad-friends-column]") ? [Xz] : bz), Wz.push(...Dz);
                const Bz = "home" === Fz.layer.kind;
                iF(Fz.root) || !GF(Fz.root) && !LF(Fz) ? Bz && Wz.push({
                  glyphs: GO("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusRows"
                }) : Wz.push({
                  glyphs: GO("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusTabs"
                }), Bz && (Wz.push(...TO("inventory", "controller:menusFriends")), Hz || Wz.push({
                  glyphs: GO("menuSecondary"),
                  labelKey: "controller:menusSearch"
                }), Wz.push(...TO("pause", "controller:menusSettings")), Wz.push(...TO("leaderboard", "controller:menusNotifications")));
                const Pz = vz.b.get("openEverythingMenuName");
                return "inGame" === vz.b.get("gameState") && "popup" !== Fz.layer.kind && null !== Pz && ((0, FF.m)(Pz) ? Wz.push(...TO("leaderboard", "controller:menusClose")) : Pz !== sF.r.LOBBY_LEADERBOARD && Wz.push(...TO("leaderboard", "controller:menusLobby"))), Wz.push({
                  glyphs: GO("menuToggleCursor"),
                  labelKey: "controller:menusCursorMode"
                }), Wz
              })(),
              sz = MO(Hz.current),
              Fz = ((zz, tz) => `${zz.map((zz=>`${zz.glyphs.join("+")}:${zz.labelKey}`)).join("|")}@${tz}`)(tz, sz);
            Fz !== zz && (zz = Fz, (0, oz.unstable_batchedUpdates)((() => {
              Uz(tz), gz(sz)
            }))), dO(Hz.current)
          };
          tz(), Bz.current = tz;
          const sz = requestAnimationFrame(tz),
            Fz = setInterval(tz, 150);
          return () => {
            Bz.current = null, cancelAnimationFrame(sz), clearInterval(Fz), dO(null)
          }
        }), [Pz]), (0, Mz.useLayoutEffect)((() => {
          if (!Pz) return;
          if (0 === Oz.length) return void dO(null);
          const zz = MO(Hz.current);
          zz === Dz ? dO(Hz.current) : gz(zz)
        }), [Pz, Oz, Dz]), Pz && 0 !== Oz.length ? (0, Qz.jsx)("div", {
          ref: Hz,
          className: "PadButtonHintBar SmallTextBold",
          style: null === Dz ? void 0 : {
            bottom: Dz
          },
          "aria-hidden": !0,
          children: Oz.map((tz => (0, Qz.jsxs)("div", {
            className: "PadButtonHint",
            children: [tz.glyphs.map((zz => (0, Qz.jsx)(gX, {
              glyph: zz,
              className: "PadButtonHintGlyph"
            }, zz))), (0, Qz.jsx)("span", {
              children: zz(tz.labelKey)
            })]
          }, tz.labelKey)))
        }) : null
      },
      QO = [ot, "label", "[data-pad-slider]"].join(","),
      kO = "data-pad-cursor-probe",
      iO = zz => {
        var tz;
        const sz = (zz => {
          const tz = [];
          for (let Fz = zz; Fz && Fz !== document.body && Fz !== document.documentElement && (tz.push(Fz), !(tz.length > 8)); Fz = Fz.parentElement);
          const sz = document.documentElement.classList.contains(bz.r) ? tz[tz.length - 1] : void 0;
          null === sz || void 0 === sz || sz.setAttribute(kO, "");
          try {
            return tz.map((zz => ({
              element: zz,
              cursor: getComputedStyle(zz).cursor
            })))
          } finally {
            null === sz || void 0 === sz || sz.removeAttribute(kO)
          }
        })(zz);
        if ("pointer" !== (null === (tz = sz[0]) || void 0 === tz ? void 0 : tz.cursor)) return null;
        let Fz = 0;
        for (; Fz + 1 < sz.length && "pointer" === sz[Fz + 1].cursor;) Fz++;
        return sz[Fz].element
      },
      LO = (zz, tz, sz, Fz) => {
        const Wz = Fz.root.contains(zz) ? Fz.root : null;
        for (let Xz = zz; Xz && Xz !== document.body && Xz !== document.documentElement; Xz = Xz.parentElement) {
          if (Xz instanceof HTMLElement && Cz(Xz, tz) && cz(Xz, tz, sz)) return Xz;
          if (Xz === Wz) break
        }
        return "home" === Fz.layer.kind || "gamePage" === Fz.layer.kind ? ((zz, tz) => {
          const sz = document.scrollingElement;
          return sz instanceof HTMLElement && ![document.documentElement, document.body].some((tz => {
            const sz = getComputedStyle(tz),
              Fz = "y" === zz ? sz.overflowY : sz.overflowX;
            return "hidden" === Fz || "clip" === Fz
          })) && cz(sz, zz, tz) ? sz : null
        })(tz, sz) : null
      };
    const lO = new class {
        constructor() {
          this.state = {
            x: 0,
            y: 0,
            speedRamp: 0
          }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this.confirmRepeat = (0, Dz.e)(wz.u), this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.layerRoot = null, this.layerOrder = 0, this.layerPoints = new WeakMap, this.page = null, this.pendingPageStart = null
        }
        install() {
          const zz = uz.c.register({
              name: "cursor",
              isActive: () => "cursor" === rW(),
              onFrame: zz => {
                this.onFrame(zz)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: zz => (0, uz.g)(zz) || zz === (0, Kz.f)("menuConfirm") && yt((0, bz.e)())
            }),
            tz = (0, RF.j)((zz => {
              const tz = zz.getRoot();
              tz && this.layerPoints.delete(tz), tz === this.layerRoot && (this.layerRoot = null)
            })),
            sz = Uz.o.subscribe("appManagerUpdated|activeInputDevice", (zz => {
              "gamepad" !== zz && this.active && !this.hidden && this.hide()
            }));
          return () => {
            zz(), tz(), Uz.o.unsubscribe(sz), this.deactivate()
          }
        }
        getHighlighted() {
          return this.isVisible() ? this.interactive : null
        }
        isVisible() {
          return this.active && !this.hidden && (0, bz.k)()
        }
        getPoint() {
          return {
            x: this.state.x,
            y: this.state.y
          }
        }
        hide() {
          this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.Yg()
        }
        activate(zz) {
          this.active = !0, this.hidden = !1;
          const tz = gW();
          !tz || tz.root && tz.root !== zz.root ? this.jumpTo(this.hasPosition ? this.getPoint() : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          }) : (this.setLayer(zz), this.jumpTo(tz.point))
        }
        jumpTo(zz) {
          this.state = {
            x: zz.x,
            y: zz.y,
            speedRamp: 0
          }, this.hasPosition = !0, this.lastHitTestMs = -1 / 0
        }
        deactivate() {
          this.active && (this.active = !1, this.page = null, this.pendingPageStart = null, this.cancelPress(), this.clearHover(), this.draggedSlider = null, this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.Yg())
        }
        onFrame(zz) {
          const tz = WW();
          if (!tz) return;
          if (this.active || this.activate(tz), this.followPage(tz)) return;
          this.followLayer(tz);
          const sz = zz.wokeDevice ? (0, bz.e)() : null;
          if (sz && this.jumpTo(sz), !(0, bz.k)()) return void this.hide();
          const Fz = (0, Kz.f)("menuToggleCursor");
          if (zz.wasPressed(Fz)) return uz.c.consumeButton(Fz), void DW(this.getHandoff(null));
          if (this.handBackToFocus(zz)) return;
          const Wz = (0, Kz.f)("menuConfirm"),
            Xz = (0, Kz.f)("menuSecondary");
          if (zz.wasPressed((0, Kz.f)("menuBack"))) return ct(tz.root) || dt(tz.root) || XW(), void this.Yg();
          if (aF(null, zz, tz)) return zz.wasReleased(Wz) && this.press && (this.updateHit(!1), this.updateConfirm(zz, Wz)), void this.Yg();
          if (document.pointerLockElement) return void this.hide();
          const Oz = YW() ? {
              x: 0,
              y: 0
            } : (zz => {
              const tz = (zz, tz) => (zz ? 1 : 0) - (tz ? 1 : 0);
              return {
                x: tz(zz.isHeld("Right"), zz.isHeld("Left")),
                y: tz(zz.isHeld("Down"), zz.isHeld("Up"))
              }
            })(zz),
            oz = (0, Nz.k)().moveDeadzone,
            vz = ((zz, tz) => {
              const sz = (0, wz.k)(zz, rz(tz));
              return Math.hypot(sz.x, sz.y)
            })(zz.leftStick, oz) > 0 || 0 !== Oz.x || 0 !== Oz.y;
          if (this.hidden) {
            const tz = zz.wasPressed(Wz),
              sz = zz.wasPressed(Xz);
            if (!vz && !mz(zz.rightStick) && !tz && !sz && !zz.wokeDevice) return void this.Yg();
            if (this.hidden = !1, this.updateHit(!1), tz || sz) return tz && (this.press = {
              kind: "ignored"
            }, zz.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.Yg()
          }
          this.movePendingPageStart(vz);
          const Uz = this.getPoint();
          this.state = xz(this.state, {
            stick: zz.leftStick,
            moveDeadzone: oz,
            dpad: Oz,
            dtMs: zz.dtMs,
            cursorSpeedPercent: (0, Nz.k)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: this.getAssistContext()
          });
          const Dz = this.state.x !== Uz.x || this.state.y !== Uz.y,
            gz = [Wz, Xz].some((tz => zz.wasPressed(tz) || zz.wasReleased(tz)));
          (Dz || gz || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(Dz), this.updateConfirm(zz, Wz), this.updateSecondary(zz, Xz), this.updateScroll(zz, tz), this.Yg()
        }
        followPage(zz) {
          const tz = "home" === zz.layer.kind || "gamePage" === zz.layer.kind,
            sz = this.page;
          if (this.page = tz ? {
              key: (0, RF.q)(zz.layer),
              root: zz.root
            } : null, !this.page || !sz || sz.root !== zz.root || sz.key === this.page.key) return !1;
          if (this.cancelPress(), this.secondaryArmed = !1, this.setLayer(zz), "hybrid" === wW()) return uW = null, UW = null, NW.lock(), !0;
          const {
            key: Fz
          } = this.page;
          return this.pendingPageStart = {
            root: zz.root,
            key: Fz,
            returning: qW.notePageEnteredByCursor(Fz),
            enteredAtMs: performance.now()
          }, !1
        }
        movePendingPageStart(zz) {
          const tz = this.pendingPageStart;
          if (!tz) return;
          if (zz || tz.root !== this.layerRoot) return void(this.pendingPageStart = null);
          const sz = tz.returning ? qW.recallStop(tz.root, tz.key) : null;
          if (!sz && tz.returning && performance.now() - tz.enteredAtMs < 1e3) return;
          const Fz = null !== sz && void 0 !== sz ? sz : qW.pickInitial(tz.root, {
            includeDisabled: !0,
            waitForContent: !0,
            enteredAtMs: tz.enteredAtMs
          });
          Fz && (this.pendingPageStart = null, this.jumpTo(rt(Fz)))
        }
        setLayer(zz) {
          this.layerRoot = zz.root, this.layerOrder = zz.order
        }
        followLayer(zz) {
          var tz;
          if (zz.root === this.layerRoot) return;
          null !== (tz = this.layerRoot) && void 0 !== tz && tz.isConnected && this.layerPoints.set(this.layerRoot, this.getPoint()), this.cancelPress(), this.draggedSlider = null, this.secondaryArmed = !1;
          const sz = this.layerPoints.get(zz.root),
            Fz = sz && zz.order <= this.layerOrder ? sz : qW.getLayerStartPoint(zz.root);
          this.setLayer(zz), this.jumpTo(Fz)
        }
        getHandoff(zz) {
          var tz;
          return {
            point: this.getPoint(),
            element: null !== (tz = this.interactive) && void 0 !== tz ? tz : this.findDraggedSliderNearby(),
            direction: zz
          }
        }
        findDraggedSliderNearby() {
          const zz = this.draggedSlider;
          if (null === zz || void 0 === zz || !zz.isConnected) return null;
          const tz = zz.getBoundingClientRect(),
            {
              y: sz
            } = this.getPoint();
          return sz >= tz.top - 40 && sz <= tz.bottom + 40 ? zz : null
        }
        handBackToFocus(zz) {
          if (!YW()) return !1;
          const tz = wz.D.find((tz => zz.wasPressed(tz)));
          return !!tz && (sz = this.getHandoff(tz), uW = oW(sz), UW = null, NW.lock(), uz.c.handOffHeldInput(), !0);
          var sz
        }
        getAssistContext() {
          const zz = this.interactive;
          if (null === zz || void 0 === zz || !zz.isConnected) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const tz = zz.getBoundingClientRect();
          if (tz.width > .4 * window.innerWidth || tz.height > .4 * window.innerHeight) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const sz = (0, Nz.k)().cursorMagnetism && !(0, az.c)(zz) && !zz.closest("[data-pad-slider]"),
            Fz = this.magnet && this.magnet !== zz && this.magnet.isConnected ? this.magnet.getBoundingClientRect() : tz;
          return {
            overInteractive: !0,
            magnetTarget: sz ? {
              x: Fz.left + Fz.width / 2,
              y: Fz.top + Fz.height / 2
            } : null
          }
        }
        updateHit(zz) {
          this.lastHitTestMs = performance.now();
          const tz = this.getPoint(),
            sz = document.elementFromPoint(tz.x, tz.y),
            Fz = sz && !(0, Hz.n)(sz) && (zz => {
              var tz;
              const sz = WW();
              return !(sz && !sz.root.contains(zz) && !zz.closest(".tooltip-container")) || !(null !== (tz = document.getElementById("root")) && void 0 !== tz && tz.contains(zz))
            })(sz) ? sz : null;
          if (Fz !== this.hit) return Ct(this.hit, Fz, tz), this.hit = Fz, void this.setInteractive(Fz ? (zz => {
            const tz = zz.closest(QO);
            if (tz) {
              var sz, Fz;
              const zz = null !== (sz = null === (Fz = tz.parentElement) || void 0 === Fz ? void 0 : Fz.closest("[data-pad-focusable]")) && void 0 !== sz ? sz : tz;
              return Kt(zz) ? {
                element: null,
                magnet: null
              } : {
                element: zz,
                magnet: tz
              }
            }
            const Wz = iO(zz);
            return {
              element: Wz,
              magnet: Wz
            }
          })(Fz) : {
            element: null,
            magnet: null
          });
          zz && Fz && Ct(Fz, Fz, tz)
        }
        setInteractive(zz) {
          let {
            element: tz,
            magnet: sz
          } = zz;
          this.interactive = tz, this.magnet = sz
        }
        clearHover() {
          this.hit && Ct(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
            element: null,
            magnet: null
          })
        }
        beginPress() {
          const zz = this.hit;
          if (!zz || At(zz)) return {
            kind: "ignored"
          };
          const tz = (0, JW.e)(zz),
            sz = zz.closest("[data-pad-slider]");
          return tz && sz ? {
            kind: "slider",
            slider: sz,
            adjuster: tz
          } : (mt(zz, this.getPoint()), {
            kind: "pointer",
            target: zz
          })
        }
        applySliderFraction(zz) {
          var tz;
          const sz = zz.slider.getBoundingClientRect(),
            Fz = sz.height > sz.width,
            Wz = null === (tz = zz.slider.querySelector("[data-pad-slider-handle]")) || void 0 === tz ? void 0 : tz.getBoundingClientRect(),
            Xz = Wz ? Fz ? Wz.height : Wz.width : 0,
            Oz = (Fz ? sz.height : sz.width) - Xz;
          if (Oz <= 0) return;
          const oz = Fz ? sz.bottom - Xz / 2 - this.state.y : this.state.x - sz.left - Xz / 2;
          zz.adjuster.setFraction(Math.max(0, Math.min(1, oz / Oz)))
        }
        updateConfirm(zz, tz) {
          zz.wasPressed(tz) && (this.press = zz.wokeDevice ? {
            kind: "ignored"
          } : this.beginPress(), this.draggedSlider = "slider" === this.press.kind ? this.press.slider : null, this.beginRepeat());
          const sz = this.press;
          if (!sz) return;
          if (zz.isHeld(tz)) return "slider" === sz.kind && this.applySliderFraction(sz), void this.updateRepeat();
          this.press = null;
          const Fz = this.repeated;
          if (this.endRepeat(), !zz.wasReleased(tz)) return void this.endPressWithoutClick(sz);
          const Wz = this.getPoint(),
            Xz = this.hit;
          if ("slider" === sz.kind && sz.adjuster.endDrag(), "pointer" === sz.kind) {
            const zz = null !== Xz && void 0 !== Xz ? Xz : sz.target.isConnected ? sz.target : null;
            zz && Jt(zz, Wz);
            const tz = Xz && sz.target.isConnected && !Fz ? ((zz, tz) => {
              for (let sz = zz; sz; sz = sz.parentElement)
                if (sz.contains(tz)) return sz;
              return null
            })(sz.target, Xz) : null;
            tz && (qW.noteCursorActivation(tz), (0, Hz.e)(tz, new MouseEvent("click", Yt(Wz, 0, 0))), jt(tz), Pt(tz) && et(tz))
          }
        }
        beginRepeat() {
          var zz, tz, sz;
          const Fz = null !== (zz = null === (tz = this.hit) || void 0 === tz ? void 0 : tz.closest("[data-pad-repeat]")) && void 0 !== zz ? zz : null;
          this.repeatStop = Fz, this.repeatKey = null !== (sz = null === Fz || void 0 === Fz ? void 0 : Fz.getAttribute("data-pad-repeat")) && void 0 !== sz ? sz : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
        }
        updateRepeat() {
          const zz = this.repeatStop;
          if (!zz) return;
          const tz = this.hit;
          zz.isConnected && !Kt(zz) && zz.getAttribute("data-pad-repeat") === this.repeatKey && tz && zz.contains(tz) ? zz.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, qW.noteCursorActivation(zz), (0, Hz.e)(zz, new MouseEvent("click", Yt(this.getPoint(), 0, 0)))) : this.repeatStop = null
        }
        endRepeat() {
          this.repeatStop = null, this.repeated = !1
        }
        endPressWithoutClick(zz) {
          "slider" === zz.kind && zz.adjuster.endDrag(), "pointer" === zz.kind && zz.target.isConnected && Jt(zz.target, this.getPoint())
        }
        cancelPress() {
          this.endRepeat(), this.press && (this.endPressWithoutClick(this.press), this.press = null)
        }
        updateSecondary(zz, tz) {
          zz.wasPressed(tz) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !zz.isHeld(tz) && (this.secondaryArmed = !1, zz.wasReleased(tz) && this.hit && It(this.hit, this.getPoint(), 2))
        }
        updateScroll(zz, tz) {
          const sz = Jz(zz.rightStick, zz.dtMs);
          if (0 === sz.x && 0 === sz.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          this.scrollRemainder = {
            x: this.scrollRemainder.x + sz.x,
            y: this.scrollRemainder.y + sz.y
          };
          const Fz = Math.trunc(this.scrollRemainder.x),
            Wz = Math.trunc(this.scrollRemainder.y);
          this.scrollRemainder = {
            x: this.scrollRemainder.x - Fz,
            y: this.scrollRemainder.y - Wz
          };
          const Xz = this.hit;
          if (!Xz) return;
          let Oz = !1;
          if (0 !== Wz) {
            const zz = LO(Xz, "y", Wz > 0 ? 1 : -1, tz);
            zz && (zz.scrollBy({
              top: Wz,
              behavior: "instant"
            }), Oz = !0)
          }
          if (0 !== Fz) {
            const zz = LO(Xz, "x", Fz > 0 ? 1 : -1, tz);
            zz && (zz.scrollBy({
              left: Fz,
              behavior: "instant"
            }), Oz = !0)
          }
          Oz && (this.lastHitTestMs = -1 / 0)
        }
        Yg() {
          kt.set({
            x: this.state.x,
            y: this.state.y,
            visible: this.isVisible(),
            pressed: null !== this.press && "ignored" !== this.press.kind
          })
        }
      },
      nO = () => {
        const zz = (0, Mz.useMemo)((() => new Lz), []),
          tz = (0, bz.B)();
        return (0, Mz.useEffect)((() => {
          if (!tz) return;
          let sz = 0,
            Fz = {
              of: null,
              atMs: 0,
              list: []
            };
          const Wz = document.getElementsByClassName(xW),
            Xz = zz => {
              for (const tz of [...Wz]) tz !== zz && tz.classList.remove(xW)
            },
            Oz = () => {
              var tz;
              sz = requestAnimationFrame(Oz);
              const Wz = (() => {
                const zz = qW.getFocused();
                if (qW.isActive() && null !== zz && void 0 !== zz && zz.isConnected) return zz;
                const tz = lO.getHighlighted();
                return null !== tz && void 0 !== tz && tz.isConnected ? tz : null
              })();
              Xz(Wz), Wz && !Wz.classList.contains(xW) && Wz.classList.add(xW);
              const oz = null !== (tz = null === Wz || void 0 === Wz ? void 0 : Wz.closest("[data-pad-reticle-box]")) && void 0 !== tz ? tz : Wz;
              zz.show(oz ? ((zz, tz) => {
                let sz = zz.left,
                  Fz = zz.top,
                  Wz = zz.right,
                  Xz = zz.bottom;
                for (const Oz of tz) {
                  if (!Oz) continue;
                  const zz = Az(Oz);
                  sz = Math.max(sz, zz.left), Fz = Math.max(Fz, zz.top), Wz = Math.min(Wz, zz.right), Xz = Math.min(Xz, zz.bottom)
                }
                return Wz <= sz || Xz <= Fz ? null : {
                  left: sz,
                  top: Fz,
                  width: Wz - sz,
                  height: Xz - Fz
                }
              })(oz.getBoundingClientRect(), (zz => {
                const tz = performance.now();
                return (Fz.of !== zz || tz - Fz.atMs > 500) && (Fz = {
                  of: zz,
                  atMs: tz,
                  list: [ez(zz, "y"), ez(zz, "x")]
                }), Fz.list
              })(oz)) : null)
            };
          return sz = requestAnimationFrame(Oz), () => {
            cancelAnimationFrame(sz), Xz(null), zz.hide()
          }
        }), [tz, zz]), (0, Qz.jsx)(lz, {
          placer: zz,
          className: "PadFocusRing"
        })
      },
      aO = (zz, tz) => {
        zz.style.transform = `translate3d(${tz.x}px, ${tz.y}px, 0)`, zz.classList.toggle("Visible", tz.visible), zz.classList.toggle("Pressed", tz.pressed)
      },
      qO = () => {
        const zz = (0, Mz.useRef)(null);
        return (0, Mz.useEffect)((() => {
          const tz = kt.subscribe((tz => {
            zz.current && aO(zz.current, tz)
          }));
          return zz.current && aO(zz.current, kt.get()), tz
        }), []), (0, Qz.jsx)("div", {
          ref: zz,
          className: "PadCursorView",
          "aria-hidden": "true",
          children: (0, Qz.jsx)("div", {
            className: "PadCursorGlyph",
            children: "+"
          })
        })
      },
      SO = "#ncmp__modal.ncmp__active",
      VO = [{
        id: "nitro-consent-banner",
        find: () => document.querySelector(SO) ? null : document.querySelector("#ncmp__tool > .ncmp__banner.ncmp__active"),
        startSelectors: ["[data-ncmp-cmd='reject']", "[data-ncmp-cmd='showModal']"]
      }, {
        id: "nitro-consent-modal",
        find: () => document.querySelector(SO),
        startSelectors: ["[data-ncmp-cmd='reject']"]
      }, {
        id: "google-consent",
        find: () => document.querySelector(".fc-consent-root"),
        startSelectors: [".fc-cta-do-not-consent", ".fc-cta-manage-options"]
      }],
      RO = "PadOverThirdParty",
      pO = new Set(VO.map((zz => zz.id))),
      fO = () => {
        const zz = VO.map((zz => {
            let {
              id: tz,
              find: sz,
              startSelectors: Fz
            } = zz;
            return (0, RF.m)({
              id: tz,
              kind: "popup",
              getRoot: () => {
                const zz = sz(),
                  tz = zz ? ((zz, tz) => {
                    var sz;
                    for (const Fz of tz) {
                      const tz = zz.querySelector(Fz);
                      if (tz) return tz
                    }
                    return null !== (sz = [...zz.querySelectorAll("button")].find((zz => !zz.matches(".fc-cta-consent, [data-ncmp-cmd='save']")))) && void 0 !== sz ? sz : null
                  })(zz, Fz) : null;
                if (zz && tz && !tz.hasAttribute("data-pad-default-focus")) {
                  for (const tz of zz.querySelectorAll("[data-pad-default-focus]")) tz.removeAttribute("data-pad-default-focus");
                  for (const tz of zz.querySelectorAll("[data-pad-hint-bar-avoid]")) tz.removeAttribute("data-pad-hint-bar-avoid");
                  tz.setAttribute("data-pad-default-focus", ""), ((zz, tz) => {
                    let sz = zz;
                    for (let Fz = zz.parentElement; Fz && tz.contains(Fz) && !(Fz.getBoundingClientRect().height >= window.innerHeight / 2); Fz = Fz.parentElement) sz = Fz;
                    return sz
                  })(tz, zz).setAttribute("data-pad-hint-bar-avoid", "")
                }
                return zz
              },
              close: null,
              memoryKey: null
            })
          })),
          tz = document.documentElement,
          sz = Oz.e.onFrame((() => {
            const zz = (0, bz.k)() ? WW() : null,
              sz = !!zz && (Fz = zz.layer, pO.has(Fz.id));
            var Fz;
            tz.classList.contains(RO) !== sz && tz.classList.toggle(RO, sz)
          }));
        return () => {
          for (const tz of zz) tz();
          sz(), tz.classList.remove(RO)
        }
      },
      EO = "PadLargePointer",
      zo = () => {
        (0, Mz.useEffect)((() => {
          const zz = (0, Hz.m)(document.body),
            tz = qW.install(),
            sz = lO.install(),
            Fz = fO();
          return () => {
            zz(), tz(), sz(), Fz()
          }
        }), []);
        const {
          largePointer: zz
        } = (0, Nz.t)(), tz = (0, eO.j)() && zz;
        return (0, Mz.useEffect)((() => {
          if (tz) return document.documentElement.classList.add(EO), () => {
            document.documentElement.classList.remove(EO)
          }
        }), [tz]), (0, oz.createPortal)((0, Qz.jsxs)(Qz.Fragment, {
          children: [(0, Qz.jsx)(hO, {}), (0, Qz.jsx)(nO, {}), (0, Qz.jsx)(qO, {})]
        }), document.body)
      };
    var to = sz(8291),
      so = sz(8310),
      Fo = sz(8298);
    sz(8314);
    const Wo = (zz, tz) => {
        const [sz, Fz] = (0, Mz.useState)(!1), [Wz, Xz] = (0, Mz.useState)(null), Oz = (0, Mz.useRef)(null), oz = (0, Mz.useCallback)((zz => {
          Oz.current = zz, Xz(zz)
        }), []), vz = (0, Mz.useCallback)((() => {
          Fz(!1), oz(null)
        }), [oz]), Kz = (0, Mz.useCallback)((() => {
          Fz(!0)
        }), []), uz = (0, Mz.useCallback)(((zz, tz) => {
          oz((0, Fo.z)(zz, tz, Oz.current))
        }), [oz]);
        (0, Mz.useLayoutEffect)((() => (tz(sz), (0, ZO.s)(zz, sz), Uz.o.Yg(ZO.l), () => {
          tz(!1), (0, ZO.s)(zz, !1), Uz.o.Yg(ZO.l)
        })), [sz, zz, tz]), (0, KX.g)("appManagerUpdated|activeInputDevice", (zz => {
          "gamepad" !== zz && vz()
        })), (0, KX.g)("appManagerUpdated|gameState", (zz => {
          "inGame" !== zz && vz()
        }));
        const Nz = () => {
          (0, FF.r)() && vz()
        };
        return (0, KX.g)("appManagerUpdated|openEverythingMenuName", Nz), (0, KX.g)("appManagerUpdated|openInGameMenuName", Nz), {
          open: sz,
          picked: Wz,
          pickedRef: Oz,
          show: Kz,
          aim: uz,
          close: vz
        }
      },
      Xo = zz => {
        let {
          className: tz,
          slotCount: sz,
          picked: Fz,
          slotLabel: Wz,
          renderSlot: Xz,
          centre: Oz
        } = zz;
        const oz = Array.from({
          length: sz
        }, ((zz, tz) => tz));
        return (0, Qz.jsx)("div", {
          className: hz()("EmoteWheelOverlay PadRadialWheel", tz),
          children: (0, Qz.jsxs)("div", {
            className: "EmoteWheel",
            style: {
              width: 2 * Fo.n + "rem",
              height: 2 * Fo.n + "rem"
            },
            children: [(0, Qz.jsxs)("svg", {
              className: "EmoteWheelSvg",
              viewBox: `0 0 ${Fo.i} ${Fo.i}`,
              children: [oz.map((zz => (0, Qz.jsx)("path", {
                d: (0, Fo.r)(zz, sz, Fo.d, Fo.e, Fo.f),
                className: hz()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: zz === Fz
                }),
                "aria-label": Wz(zz)
              }, zz))), (0, Qz.jsx)("circle", {
                className: "EmoteWheelOuterRing",
                cx: Fo.d,
                cy: Fo.d,
                r: Fo.f
              }), (0, Qz.jsx)("circle", {
                className: "EmoteWheelInnerRing",
                cx: Fo.d,
                cy: Fo.d,
                r: Fo.e
              }), null !== Fz && (0, Qz.jsx)("path", {
                className: "EmoteWheelWedgeOutline",
                d: (0, Fo.r)(Fz, sz, Fo.d, Fo.e, Fo.f)
              })]
            }), oz.map((zz => {
              const tz = (0, Fo.u)(zz, sz);
              return (0, Qz.jsx)("div", {
                className: hz()("PadRadialWheelSlot SmallTextBold", {
                  PadRadialWheelSlotPicked: zz === Fz
                }),
                style: {
                  left: `calc(50% + ${Fo.b*Math.cos(tz)}rem)`,
                  top: `calc(50% + ${Fo.b*Math.sin(tz)}rem)`
                },
                "aria-hidden": !0,
                children: Xz(zz)
              }, zz)
            })), (0, Qz.jsx)("div", {
              className: "EmoteWheelHint SmallTextBold",
              children: Oz
            })]
          })
        })
      },
      Oo = WO.length,
      oo = () => {
        const {
          t: zz
        } = (0, Wz.B)(), tz = Wo("chat", JF.s), sz = (0, Mz.useMemo)((() => WO.map((tz => zz(tz)))), [zz]);
        return (0, KX.g)(JF.o, (() => {
          tz.open || (0, to.g)() || (0, so.n)() || "inGame" !== vz.b.get("gameState") || (0, FF.r)() || !(0, xF.c)() || tz.show()
        })), (0, KX.g)(JF.d, (zz => {
          tz.open && tz.aim(zz, Oo)
        })), (0, KX.g)(JF.k, (() => {
          var zz;
          if (!tz.open) return;
          const Fz = tz.pickedRef.current;
          null !== Fz ? XO.claim(performance.now()) && (tz.close(), null === (zz = (0, xF.c)()) || void 0 === zz || zz.sendLine(sz[Fz])) : tz.close()
        })), (0, KX.g)(JF.h, tz.close), tz.open ? (0, Qz.jsx)(Xo, {
          className: "QuickChatWheel",
          slotCount: Oo,
          picked: tz.picked,
          slotLabel: zz => sz[zz],
          renderSlot: zz => sz[zz],
          centre: null !== tz.picked ? sz[tz.picked] : zz("controller:quickChatPick")
        }) : null
      },
      vo = () => {
        const {
          t: zz
        } = (0, Wz.B)(), tz = Wo("actionButton", so.o), [sz, Fz] = (0, Mz.useState)([]);
        if ((0, KX.g)(so.k, (zz => {
            tz.open || (0, to.g)() || (0, JF.c)() || "inGame" !== vz.b.get("gameState") || (0, FF.r)() || (Fz(zz), tz.show())
          })), (0, KX.g)(so.d, (zz => {
            tz.open && tz.aim(zz, sz.length)
          })), (0, KX.g)(so.j, (() => {
            if (!tz.open) return;
            const zz = tz.pickedRef.current;
            tz.close(), null !== zz && Uz.o.Yg(so.l, sz[zz])
          })), (0, KX.g)(so.f, tz.close), !tz.open) return null;
        const Xz = null !== tz.picked ? sz[tz.picked] : null;
        return (0, Qz.jsx)(Xo, {
          className: "ActionWheel",
          slotCount: sz.length,
          picked: tz.picked,
          slotLabel: tz => {
            const Fz = sz[tz];
            return "reload" === Fz.kind ? zz("controller:gameplayReload") : "customButton" === Fz.kind ? Fz.description || Fz.icon : "touchButton" === Fz.kind && "string" === typeof Fz.label ? Fz.label : ""
          },
          renderSlot: zz => (0, Qz.jsx)(BX, {
            action: sz[zz]
          }),
          centre: Xz ? (0, Qz.jsx)(BX, {
            action: Xz
          }) : zz("controller:actionWheelPick")
        })
      };
    var Uo = sz(106);
    const Ko = () => ((0, Mz.useEffect)((() => {
        var zz, tz;
        const sz = (0, Hz.m)(document.getElementById("root")),
          Fz = (0, bz.g)(),
          Wz = (() => {
            const zz = [Uz.o.subscribe(VW.d, (() => {
                EW("blockBreak")
              })), Uz.o.subscribe("damagedByOtherPlayer", (() => {
                EW("damage")
              })), Uz.o.subscribe("yourAttackHit", (zz => {
                let {
                  hitSelf: tz
                } = zz;
                tz || EW("hit")
              }))],
              tz = Oz.e.onActivePadChanged((zz => {
                zz && EW("connect")
              }));
            return () => {
              for (const tz of zz) Uz.o.unsubscribe(tz);
              tz()
            }
          })(),
          Xz = (() => {
            const zz = new XX({
              getVisitId: WX.e,
              peekVisitId: WX.peekVisitSessionId,
              readReportedVisitId: () => {
                const zz = FX.j.getItem(OX);
                return "string" === typeof zz ? zz : null
              },
              writeReportedVisitId: zz => {
                FX.j.setItem(OX, zz)
              },
              isPadActive: bz.k,
              getPadFamily: () => {
                var zz, tz;
                return null !== (zz = null === (tz = Oz.e.getActivePad()) || void 0 === tz ? void 0 : tz.family) && void 0 !== zz ? zz : null
              },
              canReport: tX.i,
              getInputType: sX.c,
              Iw: tX.p
            });
            let tz = 0,
              sz = null;
            const Fz = Wz => {
                null === sz && ("notReady" !== zz.check(Wz) || null !== sz || tz >= 20 || (tz++, sz = setTimeout((() => {
                  sz = null, Fz(!1)
                }), 3e3)))
              },
              Wz = Uz.o.subscribe("appManagerUpdated|activeInputDevice", (() => {
                Fz(!0)
              })),
              Xz = (0, WX.g)((() => {
                tz = 0, Fz(!0)
              }));
            return () => {
              Uz.o.unsubscribe(Wz), Xz(), null !== sz && clearTimeout(sz)
            }
          })(),
          oz = Oz.e.onFrame(((zz, tz) => {
            const sz = (0, bz.p)(zz);
            uz.c.dispatch(zz, tz, sz)
          }));
        let Kz = null !== (zz = null === (tz = Oz.e.getActivePad()) || void 0 === tz ? void 0 : tz.family) && void 0 !== zz ? zz : null;
        const wz = Oz.e.onActivePadChanged((zz => {
            var tz, sz;
            (uz.c.reset(), (0, bz.t)(), Uz.o.Yg(Oz.c, zz), (null !== (tz = null === zz || void 0 === zz ? void 0 : zz.family) && void 0 !== tz ? tz : null) !== Kz) && (Kz = null !== (sz = null === zz || void 0 === zz ? void 0 : zz.family) && void 0 !== sz ? sz : null, Uz.o.Yg(Nz.e, (0, Nz.k)()));
            !zz && (0, bz.k)() && (0, bz.x)(vz.b.get("isTouchScreen") ? "touch" : "keyboardMouse")
          })),
          Dz = () => {
            "visible" !== document.visibilityState && uz.c.clear()
          },
          gz = () => {
            uz.c.clear()
          };
        document.addEventListener("visibilitychange", Dz), window.addEventListener("blur", gz), Oz.e.start(), (0, zX.k)();
        const Bz = null;
        return () => {
          sz(), Fz(), Wz(), Xz(), oz(), wz(), document.removeEventListener("visibilitychange", Dz), window.removeEventListener("blur", gz), Oz.e.stop(), null === Bz || void 0 === Bz || Bz()
        }
      }), []), (0, Qz.jsxs)("div", {
        className: "ControllerRoot",
        children: [(0, Qz.jsx)(IX, {}), (0, Qz.jsx)(yX, {}), (0, Qz.jsx)(MX, {}), (0, Qz.jsx)(IO, {}), (0, Qz.jsx)(zo, {}), (0, Qz.jsx)(oo, {}), (0, Qz.jsx)(vo, {})]
      })),
      uo = () => Uo.featureFlags.useControllerSupport ? (0, Qz.jsx)(Ko, {}) : null;
    var No = sz(7699),
      bo = sz(8321);
    const wo = new Set(zX.i),
      Do = zz => `${bo.j}${(0,Nz.o)()}/${zz}`,
      go = zz => {
        if (!(0, bo.h)(zz)) return null;
        const [tz, sz] = zz.slice(bo.j.length).split("/");
        return (0, No.g)(tz) && wo.has(sz) ? (0, zX.h)(tz, sz) : null
      };
    var Ho = sz(8325);
    const Bo = () => {
        const {
          t: zz
        } = (0, Wz.B)(), tz = (0, bz.B)(), {
          gameState: sz,
          isUiHidden: Fz
        } = (0, vz.h)(["gameState", "isUiHidden"]), {
          hideButtonHints: Xz,
          sneakMode: Oz
        } = (0, Nz.t)(), [oz, Uz] = (0, Mz.useState)(Ho.c);
        return (0, KX.g)(JX.y, Uz), tz && !Fz && "inGame" === sz && oz ? (0, Qz.jsxs)("div", {
          className: "PadSneakChip SmallTextBold",
          children: [!Xz && (0, Qz.jsx)(gX, {
            glyph: (0, Kz.f)("toggle" === Oz ? "sneak" : "sneakToggle")
          }), (0, Qz.jsx)("span", {
            children: zz("controller:gameplaySneaking")
          })]
        }) : null
      },
      Po = 12,
      ro = zz => {
        let {
          trigger: tz,
          className: sz,
          children: Fz
        } = zz;
        const Wz = (0, Mz.useRef)(null);
        return (0, Mz.useEffect)((() => {
          let zz = 0;
          const sz = ez(tz, "y"),
            Fz = () => {
              zz = requestAnimationFrame(Fz);
              const Xz = Wz.current;
              if (!Xz || null === tz || void 0 === tz || !tz.isConnected) return;
              const {
                left: Oz,
                top: oz
              } = function(zz, tz, sz) {
                let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                const Xz = zz.left + zz.width / 2,
                  Oz = Math.max(Po, sz.width - Po - tz.width),
                  oz = Math.min(Math.max(Xz - tz.width / 2, Po), Oz),
                  vz = sz.height - Fz;
                let Uz = 0,
                  Kz = vz;
                if (Wz) {
                  const zz = Math.max(0, Wz.top),
                    Fz = Math.min(vz, Wz.bottom);
                  Fz - zz >= Math.max(sz.height / 2, tz.height + 24) && (Uz = zz, Kz = Fz)
                }
                const uz = zz.top + zz.height / 2 < (Uz + Kz) / 2 ? Kz - Po - tz.height : Uz + Po;
                return {
                  left: oz,
                  top: Math.max(Po, uz)
                }
              }(tz.getBoundingClientRect(), {
                width: Xz.offsetWidth,
                height: Xz.offsetHeight
              }, {
                width: window.innerWidth,
                height: window.innerHeight
              }, parseFloat(document.documentElement.style.getPropertyValue(jO)) || 0, null !== sz && void 0 !== sz && sz.isConnected ? sz.getBoundingClientRect() : null);
              Xz.style.transform = `translate3d(${Math.round(Oz)}px, ${Math.round(oz)}px, 0)`, Xz.style.visibility = "visible"
            };
          return Fz(), () => {
            cancelAnimationFrame(zz)
          }
        }), [tz]), (0, Qz.jsx)("div", {
          ref: Wz,
          className: sz,
          style: {
            position: "fixed",
            left: 0,
            top: 0,
            visibility: "hidden"
          },
          children: Fz
        })
      };
    var Yo = sz(1036),
      xo = sz(8332),
      mo = sz(1419),
      Jo = sz(8337),
      Io = sz(8345);
    const Co = {
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
      eo = () => {
        const {
          t: zz
        } = (0, Wz.B)(), tz = (0, bz.B)(), sz = (0, xo.c)(), Fz = (0, cX.e)("_tasks"), Xz = (0, cX.e)("_availableLeaderboards");
        if (!tz) return null;
        const Oz = (zz => {
          let {
            hasShop: tz,
            hasTasksOrLeaderboards: sz,
            canInvite: Fz
          } = zz;
          const Wz = [];
          return tz && Wz.push("shop"), sz && Wz.push("tasks"), Fz && Wz.push("invite"), Wz.push("leave"), Wz
        })({
          hasShop: sz,
          hasTasksOrLeaderboards: !(!Fz && !Xz),
          canInvite: !!Uo.featureFlags.canUseInviteLinks
        });
        return (0, Qz.jsx)("div", {
          className: "PadLobbyShortcuts",
          children: Oz.map((tz => {
            const {
              icon: sz,
              labelKey: Fz
            } = Co[tz], Wz = "leave" === tz ? mo.H : mo.h;
            return (0, Qz.jsx)(Wz, {
              className: "PadLobbyShortcut",
              onClick: () => {
                (zz => {
                  switch (zz) {
                    case "shop":
                      return Uz.o.Yg(Io.i), void vz.b.set({
                        openEverythingMenuName: sF.r.SHOP
                      });
                    case "tasks":
                      return void Uz.o.Yg("toggleMenu", "retentionFeatures");
                    case "invite":
                      return void Uz.o.Yg("toggleMenu", "inviteLink");
                    case "leave":
                      (0, Jo.e)()
                  }
                })(tz)
              },
              children: (0, Qz.jsxs)("div", {
                className: "PadLobbyShortcutInner",
                children: [(0, Qz.jsx)(Yo.c, {
                  name: sz
                }), (0, Qz.jsx)("span", {
                  children: zz(Fz)
                })]
              })
            }, tz)
          }))
        })
      };
    var Zo = sz(1910);
    const Go = wz.A,
      To = ["forward", "backward", "left", "right", "sprint"],
      co = zz => zz.ctrlKey || zz.altKey || "Alt" === zz.key || "ArrowUp" === zz.key || "ArrowDown" === zz.key || "Tab" === zz.code || "/" === zz.key || "Slash" === zz.code;
    class jo {
      constructor() {
        this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(wz.U).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
      }
      setArmed(zz) {
        this.armed = zz
      }
      blocksGameplay() {
        return this.armed || this.consumeNextFrame
      }
      onKeyDown(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !this.armed || tz ? !zz.repeat && this.swallowedKeys.delete(zz.code) ? {
          swallow: !1,
          continues: !1
        } : {
          swallow: this.swallowedKeys.has(zz.code),
          continues: !1
        } : "Escape" === zz.key || zz.repeat && !this.swallowedKeys.has(zz.code) ? {
          swallow: !1,
          continues: !1
        } : sz ? {
          swallow: !1,
          continues: !0
        } : (this.swallowedKeys.add(zz.code), {
          swallow: !0,
          continues: (0, bz.j)(zz)
        })
      }
      onKeyUp(zz) {
        return this.swallowedKeys.delete(zz.code)
      }
      forgetKeys() {
        this.swallowedKeys.clear()
      }
      onPadFrame(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Fz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Wz = (0, wz.t)(zz.values, this.previousHeld),
          Xz = null === sz ? -1 : (0, wz.o)(sz),
          Oz = Xz >= 0 && Wz[Xz] && !this.previousHeld[Xz],
          oz = Wz.some(((zz, tz) => zz && !this.previousHeld[tz] && tz !== Xz)),
          vz = Math.hypot(zz.leftStick.x, zz.leftStick.y) >= Go,
          Uz = Math.hypot(zz.rightStick.x, zz.rightStick.y) >= Go,
          Kz = vz && !this.leftStickWasPressed || Uz && !this.rightStickWasPressed;
        this.previousHeld = Wz, this.leftStickWasPressed = vz, this.rightStickWasPressed = Uz;
        let uz = !1;
        this.consumeNextFrame && (this.consumeNextFrame = !1, uz = !0);
        const Nz = !tz && Oz && !Fz,
          bz = !Nz && this.armed && !tz && (oz || Kz);
        return (Nz || bz) && (this.consumeNextFrame = !0, this.consumeAfterContinue = bz, uz = !0), {
          continues: bz,
          back: Nz,
          consumeHeld: uz
        }
      }
      consumeLeavesMoveStick() {
        return this.consumeAfterContinue
      }
    }
    const Ao = new Set([...Zo.n, ...Zo.G]),
      yo = zz => ((zz, tz, sz) => {
        const Fz = Object.keys(tz).filter((Fz => !sz.has(Fz) && tz[Fz].includes(zz)));
        return Fz.length > 0 && Fz.every((zz => To.includes(zz)))
      })(zz, Zo.x, Ao),
      Mo = (zz, tz, sz) => {
        const Fz = new jo,
          Wz = zz => {
            if (!zz.isTrusted) return;
            const {
              swallow: sz,
              continues: Wz
            } = Fz.onKeyDown(zz, !(0, bz.F)(zz) || (0, SW.f)() || (0, FF.r)(), yo(zz.code));
            sz && (zz.stopImmediatePropagation(), co(zz) && zz.preventDefault()), Wz && ((0, bz.x)("keyboardMouse"), tz())
          },
          Xz = zz => {
            zz.isTrusted && Fz.onKeyUp(zz) && (zz.stopImmediatePropagation(), co(zz) && zz.preventDefault())
          },
          oz = () => {
            Fz.forgetKeys()
          };
        window.addEventListener("keydown", Wz, !0), window.addEventListener("keyup", Xz, !0), window.addEventListener("blur", oz);
        const vz = Oz.e.onFrame((zz => {
            const Wz = uz.c.getActiveConsumerName(),
              Xz = sz(),
              Oz = Xz ? (0, Kz.f)("menuBack") : null,
              oz = null !== Wz && "gameplay" !== Wz,
              {
                continues: vz,
                back: Uz,
                consumeHeld: wz
              } = Fz.onPadFrame(zz, oz, Oz, (0, bz.m)(zz));
            if (wz) {
              const zz = (0, Nz.k)().swapSticks ? "right" : "left";
              uz.c.consumeAllHeld(Fz.consumeLeavesMoveStick() ? zz : null)
            }
            Uz ? null === Xz || void 0 === Xz || Xz() : vz && tz()
          })),
          Uz = (0, SW.i)(`pressToContinue:${zz}`, (() => Fz.blocksGameplay()));
        return {
          setArmed: zz => {
            Fz.setArmed(zz)
          },
          dispose: () => {
            window.removeEventListener("keydown", Wz, !0), window.removeEventListener("keyup", Xz, !0), window.removeEventListener("blur", oz), vz(), Uz()
          }
        }
      };
    var ho = sz(4609),
      Qo = sz(3097),
      ko = sz(2862),
      io = sz(7707);
    const Lo = zz => {
        let {
          text: tz
        } = zz;
        return (0, Qz.jsx)("div", {
          className: "ControllerSettingsHeading",
          children: tz
        })
      },
      no = zz => {
        let {
          label: tz,
          hint: sz,
          options: Fz,
          value: Xz,
          onChange: Oz
        } = zz;
        const {
          t: oz
        } = (0, Wz.B)();
        return (0, Qz.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, Qz.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: [(0, Qz.jsxs)("div", {
              className: "ControllerChoiceText",
              children: [(0, Qz.jsx)("div", {
                className: "SliderText",
                children: tz
              }), sz && (0, Qz.jsx)("div", {
                className: "ControllerSettingsHint",
                children: sz
              })]
            }), (0, Qz.jsx)(ko.d, {
              options: Fz.map((zz => ({
                label: "label" in zz ? zz.label : oz(zz.labelKey),
                value: zz.value
              }))),
              value: Xz,
              onChange: zz => {
                Oz(zz.value)
              }
            })]
          })
        })
      },
      ao = zz => {
        let {
          settingKey: tz,
          label: sz,
          range: Fz,
          format: Wz
        } = zz;
        const Xz = (0, Nz.t)();
        return (0, Qz.jsx)(ho.g, {
          name: sz,
          min: Fz.min,
          max: Fz.max,
          step: Fz.step,
          padStep: Fz.step,
          initValue: Xz[tz],
          format: Wz,
          onChange: zz => {
            (0, Nz.q)({
              [tz]: (0, io.y)(zz, Fz)
            })
          }
        })
      };
    var qo = sz(8351),
      So = sz(8356);
    const Vo = zz => zz instanceof DOMException && ("SecurityError" === zz.name || "NotAllowedError" === zz.name),
      Ro = zz => {
        const [tz] = [...zz.controllers].sort(((zz, tz) => So.m[zz] - So.m[tz]));
        return So.k[tz]
      },
      po = zz => {
        (0, qo.b)().allowPhoneMotion().catch((tz => {
          zz && Vo(tz) ? zz() : console.warn("Could not enable the motion sensor", tz)
        }))
      },
      fo = {
        waiting: "controller:settingsGyroPhoneWaiting",
        noSensor: "controller:settingsGyroPhoneNoSensor",
        on: "controller:settingsGyroPhoneOn",
        denied: "controller:settingsGyroPhoneDenied"
      },
      Eo = zz => {
        let {
          status: tz
        } = zz;
        const {
          t: sz
        } = (0, Wz.B)(), [Fz, Xz] = (0, Mz.useState)(null), Oz = `${tz.controllers.join(",")}|${tz.phoneMotion}`;
        (0, Mz.useEffect)((() => {
          Xz(null)
        }), [Oz]);
        const oz = () => {
          (0, qo.b)().connectController().then((zz => {
            Xz(zz > 0 ? "openFailed" : null)
          })).catch((zz => {
            Vo(zz) ? Xz("needsClick") : console.warn("Could not connect motion controller", zz)
          }))
        };
        if (tz.hidSupported) {
          let zz = sz("controller:settingsGyroConnectHint");
          return "needsClick" === Fz ? zz = sz("controller:settingsGyroConnectNeedsClick") : "openFailed" === Fz ? zz = sz("controller:settingsGyroOpenFailed") : tz.controllers.length > 0 && (zz = sz("controller:settingsGyroConnected", {
            name: Ro(tz)
          })), (0, Qz.jsx)("div", {
            className: "SettingBox ControllerChoiceSetting",
            children: (0, Qz.jsxs)("div", {
              className: "ControllerChoiceRow",
              children: [(0, Qz.jsx)("div", {
                className: "ControllerSettingsHint",
                children: zz
              }), (0, Qz.jsx)(mo.h, {
                onClick: oz,
                children: sz("controller:settingsGyroConnect")
              })]
            })
          })
        }
        if ("needsPermission" === tz.phoneMotion) return (0, Qz.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, Qz.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: ["needsTap" === Fz && (0, Qz.jsx)("div", {
              className: "ControllerSettingsHint",
              children: sz("controller:settingsGyroAllowNeedsTap")
            }), (0, Qz.jsx)(mo.h, {
              onClick: () => {
                po((() => {
                  Xz("needsTap")
                }))
              },
              children: sz("controller:settingsGyroAllowMotion")
            })]
          })
        });
        const vz = fo[tz.phoneMotion];
        return vz ? (0, Qz.jsx)("div", {
          className: "ControllerSettingsHint",
          children: sz(vz)
        }) : null
      },
      zv = () => {
        const {
          t: zz
        } = (0, Wz.B)(), tz = (0, Nz.t)(), sz = (0, qo.c)(), Fz = (0, bz.C)(), Xz = !sz.hidSupported && sz.phoneSupported && !sz.padConnected, Oz = (sz.hidSupported || sz.phoneSupported) && !Xz, oz = (0, Kz.f)("pause");
        return (0, Qz.jsxs)(Qz.Fragment, {
          children: [(0, Qz.jsx)(Lo, {
            text: zz("controller:settingsGyro")
          }), Xz && (0, Qz.jsx)("div", {
            className: "ControllerSettingsHint",
            children: zz("controller:settingsGyroPhoneNeedsController")
          }), !Oz && !Xz && (0, Qz.jsx)("div", {
            className: "ControllerSettingsHint",
            children: zz(sz.hidBlocked || sz.phoneBlocked ? "controller:settingsGyroBlocked" : "controller:settingsGyroUnsupported")
          }), Oz && (0, Qz.jsx)(ho.b, {
            label: zz(sz.hidSupported ? "controller:settingsGyroToggle" : "controller:settingsGyroTogglePhone"),
            checked: tz.gyroAiming,
            onClick: zz => {
              var tz, sz;
              (0, Nz.q)({
                gyroAiming: zz
              });
              const Fz = null === (tz = null === (sz = navigator.userActivation) || void 0 === sz ? void 0 : sz.isActive) || void 0 === tz || tz;
              if (!zz || !Fz) return;
              const Wz = (0, qo.b)(),
                Xz = Wz.getStatus();
              Xz.hidSupported ? Wz.connectControllerIfNoneGranted().catch((zz => {
                console.warn("Motion controller picker unavailable", zz)
              })) : "needsPermission" === Xz.phoneMotion && po()
            },
            circleInfoText: zz(sz.hidSupported ? "controller:settingsGyroToggleInfo" : "controller:settingsGyroToggleInfoPhone")
          }), Oz && sz.hidSupported && (0, Qz.jsx)("div", {
            className: "ControllerSettingsHint",
            children: zz("controller:settingsGyroSteamHint")
          }), Oz && tz.gyroAiming && (0, Qz.jsxs)(Qz.Fragment, {
            children: [(0, Qz.jsx)(Eo, {
              status: sz
            }), (0, Qz.jsx)(ao, {
              settingKey: "gyroSensitivity",
              label: zz("controller:settingsGyroSensitivity"),
              range: io.R,
              format: io.L
            }), (0, Qz.jsx)(no, {
              label: zz("controller:settingsGyroActivation"),
              hint: "aiming" === tz.gyroActivation && (0, Qz.jsx)(Qo.e, {
                text: zz("controller:settingsGyroAimingHint", {
                  button: Qo.f
                }),
                glyph: (0, Kz.f)("use")
              }),
              options: io.O,
              value: tz.gyroActivation,
              onChange: zz => {
                (0, Nz.q)({
                  gyroActivation: zz
                })
              }
            }), "button" === tz.gyroActivation && (0, Qz.jsx)(no, {
              label: zz("controller:settingsGyroButton"),
              hint: zz("controller:settingsGyroButtonHint"),
              options: io.t.filter((zz => zz !== oz || zz === tz.gyroButton)).map((zz => ({
                label: DX(Fz, zz),
                value: zz
              }))),
              value: tz.gyroButton,
              onChange: zz => {
                (0, Nz.q)({
                  gyroButton: zz
                })
              }
            })]
          })]
        })
      };
    var tv = sz(1786);
    const sv = () => {
      const {
        t: zz
      } = (0, Wz.B)(), tz = (0, Nz.t)(), sz = (0, bz.C)();
      return (0, Qz.jsxs)(Qz.Fragment, {
        children: [(0, Qz.jsx)(Lo, {
          text: zz("controller:settingsAccessibility")
        }), (0, Qz.jsx)(ho.b, {
          label: zz("controller:settingsSwapConfirmBack"),
          checked: (0, Kz.E)(tz.swapConfirmBack, sz),
          onClick: zz => {
            (0, Nz.q)({
              swapConfirmBack: zz === (0, Kz.E)(null, sz) ? null : zz
            }), tv.f.showMessage({
              translationKey: "controller:settingsSwapToast"
            })
          },
          circleInfoText: zz("controller:settingsSwapConfirmBackInfo")
        }), (0, Qz.jsx)(no, {
          label: zz("controller:settingsButtonRepeat"),
          hint: zz("controller:settingsButtonRepeatHint"),
          options: io.p,
          value: tz.buttonRepeat,
          onChange: zz => {
            (0, Nz.q)({
              buttonRepeat: zz
            })
          }
        }), (0, Qz.jsx)(no, {
          label: zz("controller:settingsTapHoldTime"),
          hint: zz("controller:settingsTapHoldTimeHint"),
          options: io.yb,
          value: tz.tapHoldTime,
          onChange: zz => {
            (0, Nz.q)({
              tapHoldTime: zz
            })
          }
        }), (0, Qz.jsx)(no, {
          label: zz("controller:settingsEmoteButton"),
          hint: zz("wheel" === tz.emoteButton ? "controller:settingsEmoteButtonWheelHint" : "controller:settingsEmoteButtonTapHoldHint"),
          options: io.F,
          value: tz.emoteButton,
          onChange: zz => {
            (0, Nz.q)({
              emoteButton: zz
            })
          }
        }), (0, Qz.jsx)(no, {
          label: zz("controller:settingsAttackMode"),
          hint: zz("toggle" === tz.attackMode ? "controller:settingsAttackToggleHint" : "controller:settingsAttackHoldHint"),
          options: io.o,
          value: tz.attackMode,
          onChange: zz => {
            (0, Nz.q)({
              attackMode: zz
            })
          }
        }), (0, Qz.jsx)(ho.b, {
          label: zz("controller:settingsLargePointer"),
          checked: tz.largePointer,
          onClick: zz => {
            (0, Nz.q)({
              largePointer: zz
            })
          },
          circleInfoText: zz("controller:settingsLargePointerInfo")
        })]
      })
    };
    var Fv = sz(8361);
    const Wv = new class {
        constructor(zz) {
          this.router = zz, this.current = null
        }
        claim(zz, tz) {
          const sz = this.current;
          sz && (this.current = null, sz.release(), sz.onTakenOver());
          const Fz = this.router.register({
              ...zz,
              name: "capture"
            }),
            Wz = {
              release: Fz,
              onTakenOver: tz
            };
          return this.current = Wz, () => {
            this.current === Wz && (this.current = null), Fz()
          }
        }
      }(uz.c),
      Xv = zz => {
        (0, Mz.useEffect)((() => {
          if (!zz) return;
          const tz = zz();
          let sz = !1;
          const Fz = () => {
              sz || (sz = !0, tz.onEnd())
            },
            Wz = Wv.claim({
              isActive: () => !sz,
              onFrame: zz => {
                tz.onFrame(zz, Fz)
              }
            }, Fz),
            Xz = void 0 === tz.timeoutMs ? void 0 : window.setTimeout(Fz, tz.timeoutMs),
            Oz = zz => {
              "Escape" === zz.key && (zz.preventDefault(), zz.stopPropagation(), Fz())
            };
          return window.addEventListener("keydown", Oz, !0), () => {
            sz = !0, Wz(), window.clearTimeout(Xz), window.removeEventListener("keydown", Oz, !0)
          }
        }), [zz])
      },
      Ov = zz => {
        let {
          row: tz,
          capturing: sz,
          onCapture: Fz,
          holdFillRef: Xz,
          onRebind: Oz,
          swapped: oz
        } = zz;
        const {
          t: vz
        } = (0, Wz.B)();
        if ("fixed" === tz.kind) return (0, Qz.jsx)("div", {
          className: "ControlRow PadControlRow PadControlRowFixed",
          children: (0, Qz.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, Qz.jsx)("div", {
              className: "ControlName",
              children: vz(tz.labelKey)
            }), (0, Qz.jsx)("div", {
              className: "ControlBindingsContainer",
              children: (0, Qz.jsx)("div", {
                className: "ControlBindingsList",
                children: (0, Qz.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  children: (0, Qz.jsx)(gX, {
                    glyph: "move" === tz.stick ? (0, Kz.m)() : (0, Kz.k)()
                  })
                })
              })
            })]
          })
        });
        const {
          action: Uz
        } = tz, uz = (0, Kz.f)(Uz), Nz = (0, Kz.h)(Uz), bz = uz !== Nz && (0, Kz.c)(Uz, Nz);
        return (0, Qz.jsxs)("div", {
          className: hz()("ControlRow PadControlRow", {
            Capturing: sz
          }),
          children: [(0, Qz.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, Qz.jsx)("div", {
              className: "ControlName",
              children: vz(io.i[Uz])
            }), (0, Qz.jsxs)("div", {
              className: "ControlBindingsContainer",
              children: [!sz && (0, Qz.jsxs)("div", {
                className: "ControlBindingsList",
                children: [(0, Qz.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Fz(Uz)
                  },
                  children: (0, Qz.jsx)(gX, {
                    glyph: uz
                  })
                }), bz && (0, Qz.jsx)("div", {
                  className: "ControlBinding PadBindingReset",
                  title: vz("controller:settingsReset"),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Oz(Uz, Nz)
                  },
                  children: (0, Qz.jsx)(Yo.c, {
                    name: "arrows-rotate"
                  })
                })]
              }), sz && (0, Qz.jsxs)("div", {
                className: "ControlBindingAddInput",
                children: [(0, Qz.jsxs)("div", {
                  className: "PadCaptureBox",
                  children: [(0, Qz.jsx)("span", {
                    children: vz("controller:settingsCapturePrompt")
                  }), (0, Qz.jsx)("div", {
                    ref: Xz,
                    className: "PadCaptureHoldFill"
                  })]
                }), (0, Qz.jsx)("div", {
                  className: "ControlBindingAddCancel",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Fz(null)
                  },
                  children: "\xd7"
                })]
              }), sz && (0, Qz.jsx)("div", {
                className: "PadCaptureHint",
                children: (0, Qz.jsx)(Qo.e, {
                  text: vz((0, Kz.c)(Uz, (0, Kz.f)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
                    button: Qo.f
                  }),
                  glyph: (0, Kz.f)("menuBack")
                })
              })]
            })]
          }), oz.map((zz => (0, Qz.jsx)("div", {
            className: "ControlRowWarning PadSwapNotice",
            children: (0, Qz.jsx)(Qo.e, {
              text: vz("controller:settingsSwapNotice", {
                action: vz(io.i[zz]),
                button: Qo.f
              }),
              glyph: (0, Kz.f)(zz)
            })
          }, zz))), sz && (0, Qz.jsx)("div", {
            className: "PadCaptureTimer",
            style: {
              animationDuration: `${io.u}ms`
            }
          })]
        })
      },
      ov = [],
      vv = zz => {
        let {
          layoutSetting: tz
        } = zz;
        const {
          t: sz
        } = (0, Wz.B)(), Fz = (0, Nz.t)();
        (0, bz.C)();
        const Xz = (0, Mz.useRef)(null),
          [Oz, oz] = (0, Mz.useState)(null),
          vz = (0, Mz.useCallback)(((zz, tz) => {
            const sz = (0, Nz.k)().bindings;
            (0, Kz.x)(zz, tz);
            const Fz = (0, Kz.o)(sz, zz);
            oz(Fz.length > 0 ? {
              action: zz,
              swapped: Fz
            } : null)
          }), []),
          [Uz, Dz] = ((zz, tz) => {
            const [sz, Fz] = (0, Mz.useState)(null), Wz = (0, Mz.useMemo)((() => sz ? () => {
              const Wz = (0, Kz.f)("menuBack"),
                Xz = new io.c(Wz, (0, Kz.f)("menuConfirm"), (zz => (0, Kz.c)(sz, zz)));
              return {
                onFrame: (Fz, Oz) => {
                  var oz;
                  const vz = Fz.frame.timestampMs,
                    Uz = Xz.update({
                      ...Fz,
                      isDown: zz => (0, wz.I)(Fz.frame.values, zz)
                    }, vz);
                  null === (oz = zz.current) || void 0 === oz || oz.style.setProperty("width", 100 * Xz.getBindHoldProgress(vz) + "%"), Uz && ("bind" === Uz.kind ? (uz.c.consumeButton(Uz.button), tz(sz, Uz.button)) : uz.c.consumeButton(Wz), Oz())
                },
                onEnd: () => {
                  Fz(null)
                },
                timeoutMs: io.u
              }
            } : null), [sz, zz, tz]);
            return Xv(Wz), [sz, Fz]
          })(Xz, vz),
          gz = zz => {
            zz && oz(null), Dz(zz)
          };
        (0, Mz.useEffect)((() => {
          if (!Oz) return;
          const zz = window.setTimeout((() => {
            oz(null)
          }), io.ub);
          return () => {
            window.clearTimeout(zz)
          }
        }), [Oz]);
        const Hz = !Fz.swapSticks && 0 === Object.keys(Fz.bindings).length;
        return (0, Qz.jsxs)("div", {
          className: "ControlsContainer PadControlsContainer",
          children: [(0, Qz.jsx)("div", {
            className: "SliderText",
            children: sz("controller:settingsRemap")
          }), (0, Qz.jsx)("div", {
            className: "ControllerSettingsHint",
            children: sz("controller:settingsRemapHint")
          }), (0, Qz.jsx)(mo.H, {
            className: "ResetBindingsButton PadResetAllButton",
            disabled: Hz,
            onClick: () => {
              gz(null), oz(null), (0, Kz.B)()
            },
            children: sz("controller:settingsResetAll")
          }), tz, io.nb.map(((zz, tz) => (0, Qz.jsx)(Fv.c, {
            title: sz(zz.titleKey),
            defaultOpen: 0 === tz,
            children: zz.rows.map((zz => (0, Qz.jsx)(Ov, {
              row: zz,
              capturing: "action" === zz.kind && zz.action === Uz,
              onCapture: gz,
              holdFillRef: Xz,
              onRebind: vz,
              swapped: "action" === zz.kind && (null === Oz || void 0 === Oz ? void 0 : Oz.action) === zz.action ? Oz.swapped : ov
            }, "action" === zz.kind ? zz.action : zz.labelKey)))
          }, zz.titleKey)))]
        })
      },
      Uv = zz => {
        let {
          deadzone: tz,
          dotRef: sz,
          labelKey: Fz
        } = zz;
        const {
          t: Xz
        } = (0, Wz.B)();
        return (0, Qz.jsxs)("div", {
          className: "ControllerTesterStick",
          children: [(0, Qz.jsxs)("div", {
            className: "ControllerTesterStickCircle",
            children: [(0, Qz.jsx)("div", {
              className: "ControllerTesterDeadzone",
              style: {
                width: 100 * tz + "%",
                height: 100 * tz + "%"
              }
            }), (0, Qz.jsx)("div", {
              ref: sz,
              className: "ControllerTesterDot"
            })]
          }), (0, Qz.jsx)("div", {
            className: "ControllerTesterStickLabel",
            children: Xz(Fz)
          })]
        })
      },
      Kv = (zz, tz, sz, Fz) => {
        var Wz;
        zz && (zz.style.left = 50 + 50 * Math.max(-1, Math.min(1, tz.x)) + "%", zz.style.top = 50 + 50 * Math.max(-1, Math.min(1, tz.y)) + "%", null === (Wz = zz.parentElement) || void 0 === Wz || Wz.classList.toggle("Active", Fz || Math.hypot(tz.x, tz.y) > sz))
      },
      uv = zz => {
        const tz = {
            deadzone: zz.moveDeadzone,
            labelKey: "controller:settingsActionMove"
          },
          sz = {
            deadzone: zz.lookDeadzone,
            labelKey: "controller:settingsActionLook"
          };
        return zz.swapSticks ? {
          left: sz,
          right: tz
        } : {
          left: tz,
          right: sz
        }
      },
      Nv = () => {
        const {
          t: zz
        } = (0, Wz.B)(), tz = (() => {
          const [zz, tz] = (0, Mz.useState)((() => Oz.e.getActivePad()));
          return (0, KX.g)(Oz.c, (() => {
            tz(Oz.e.getActivePad())
          })), zz
        })(), sz = uv((0, Nz.t)()), Fz = (0, Mz.useRef)(null), Xz = (0, Mz.useRef)(null), oz = (0, Mz.useRef)([]), vz = (0, Mz.useRef)(null), Uz = (0, Mz.useRef)(null), [bz, Dz] = (zz => {
          const [tz, sz] = (0, Mz.useState)(!1), Fz = (0, Mz.useMemo)((() => tz ? () => {
            const tz = (0, Kz.f)("menuBack"),
              Fz = new io.g;
            return {
              onFrame: (sz, Wz) => {
                var Xz;
                const Oz = Fz.update({
                  pressed: sz.wasPressed(tz),
                  po: sz.isHeld(tz)
                }, sz.frame.timestampMs);
                null === (Xz = zz.current) || void 0 === Xz || Xz.style.setProperty("width", 100 * Oz + "%"), Oz >= 1 && (uz.c.consumeButton(tz), Wz())
              },
              onEnd: () => {
                sz(!1)
              }
            }
          } : null), [tz, zz]);
          return Xv(Fz), [tz, sz]
        })(Xz);
        (0, Mz.useEffect)((() => {
          const zz = zz => {
            for (const sz of wz.V) {
              const tz = (0, wz.o)(sz),
                Fz = oz.current[tz];
              if (!Fz) continue;
              const Wz = zz.values[tz];
              Fz.classList.toggle("Pressed", Wz >= wz.A), (0, wz.K)(tz) && Fz.style.setProperty("--trigger-fill", `${Math.round(100*Wz)}%`)
            }
            const tz = uv((0, Nz.k)());
            Kv(vz.current, zz.leftStick, tz.left.deadzone, zz.values[(0, wz.o)("LS")] >= wz.A), Kv(Uz.current, zz.rightStick, tz.right.deadzone, zz.values[(0, wz.o)("RS")] >= wz.A)
          };
          return tz || zz((0, wz.y)()), Oz.e.onFrame(zz)
        }), [tz]), (0, Mz.useEffect)((() => {
          tz || Dz(!1)
        }), [tz, Dz]), (0, Mz.useEffect)((() => {
          var zz;
          bz && (null === (zz = Fz.current) || void 0 === zz || zz.scrollIntoView({
            block: "nearest"
          }))
        }), [bz]);
        const gz = io.jb.find((zz => zz.value === (null === tz || void 0 === tz ? void 0 : tz.family)));
        return (0, Qz.jsxs)("div", {
          ref: Fz,
          className: hz()("SettingBox ControllerTester", {
            Testing: bz
          }),
          children: [(0, Qz.jsxs)("div", {
            className: "ControllerTesterHeader",
            children: [(0, Qz.jsxs)("div", {
              className: "ControllerTesterInfo",
              children: [tz && (0, Qz.jsx)("div", {
                children: zz("controller:settingsTesterFamily", {
                  family: gz ? zz(gz.labelKey) : tz.family
                })
              }), tz && (0, Qz.jsx)("div", {
                className: "ControllerTesterPadId",
                children: tz.id
              }), !tz && (0, Qz.jsx)("div", {
                children: zz("controller:settingsTesterNoPad")
              })]
            }), (tz || bz) && (0, Qz.jsx)(mo.h, {
              className: "ControllerTesterToggle",
              onClick: () => {
                Dz(!bz)
              },
              children: zz(bz ? "controller:settingsTesterStop" : "controller:settingsTesterStart")
            })]
          }), tz && !bz && (0, Qz.jsx)("div", {
            className: "ControllerSettingsHint",
            children: zz("controller:settingsTesterHint")
          }), bz && (0, Qz.jsxs)("div", {
            className: "ControllerTesterBanner",
            children: [(0, Qz.jsx)(Qo.e, {
              text: zz("controller:settingsTesterTesting", {
                button: Qo.f
              }),
              glyph: (0, Kz.f)("menuBack")
            }), (0, Qz.jsx)("div", {
              ref: Xz,
              className: "ControllerTesterExitFill"
            })]
          }), (0, Qz.jsxs)("div", {
            className: "ControllerTesterBody",
            children: [(0, Qz.jsx)(Uv, {
              deadzone: sz.left.deadzone,
              dotRef: vz,
              labelKey: sz.left.labelKey
            }), (0, Qz.jsx)("div", {
              className: "ControllerTesterButtons",
              children: wz.V.map((zz => {
                const sz = (0, wz.o)(zz);
                return (0, Qz.jsx)("div", {
                  ref: zz => {
                    oz.current[sz] = zz
                  },
                  className: (0, wz.K)(sz) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
                  children: (0, Qz.jsx)(gX, {
                    glyph: zz,
                    family: null === tz || void 0 === tz ? void 0 : tz.family
                  })
                }, zz)
              }))
            }), (0, Qz.jsx)(Uv, {
              deadzone: sz.right.deadzone,
              dotRef: Uz,
              labelKey: sz.right.labelKey
            })]
          })]
        })
      },
      bv = (0, Mz.memo)((function() {
        const {
          t: zz
        } = (0, Wz.B)(), tz = (0, Nz.t)(), [sz, Fz] = (0, Mz.useState)(!1);
        return (0, Mz.useEffect)((() => {
          if (!sz) return;
          const zz = window.setTimeout((() => {
            Fz(!1)
          }), io.ub);
          return () => {
            window.clearTimeout(zz)
          }
        }), [sz]), (0, Qz.jsxs)("div", {
          className: "SettingsMenuRightInner ControllerCategory",
          children: [(0, Qz.jsx)(Lo, {
            text: zz("controller:settingsLook")
          }), (0, Qz.jsx)(ao, {
            settingKey: "lookSensitivityX",
            label: zz("controller:settingsLookSensitivityX"),
            range: io.ob,
            format: io.N
          }), (0, Qz.jsx)(ao, {
            settingKey: "lookSensitivityY",
            label: zz("controller:settingsLookSensitivityY"),
            range: io.ob,
            format: io.N
          }), (0, Qz.jsx)(ao, {
            settingKey: "aimLookSensitivity",
            label: zz("controller:settingsAimLookSensitivity"),
            range: io.k,
            format: io.N
          }), (0, Qz.jsx)(no, {
            label: zz("controller:settingsLookCurve"),
            hint: zz("controller:settingsLookCurveHint"),
            options: io.db,
            value: tz.lookCurve,
            onChange: zz => {
              (0, Nz.q)({
                lookCurve: zz
              })
            }
          }), (0, Qz.jsx)(ho.b, {
            label: zz("controller:settingsInvertLookX"),
            checked: tz.invertLookX,
            onClick: zz => {
              (0, Nz.q)({
                invertLookX: zz
              })
            }
          }), (0, Qz.jsx)(ho.b, {
            label: zz("controller:settingsInvertLookY"),
            checked: tz.invertLookY,
            onClick: zz => {
              (0, Nz.q)({
                invertLookY: zz
              })
            }
          }), (0, Qz.jsx)(ao, {
            settingKey: "lookDeadzone",
            label: zz("controller:settingsLookDeadzone"),
            range: io.E,
            format: io.I
          }), (0, Qz.jsx)(zv, {}), (0, Qz.jsx)(Lo, {
            text: zz("controller:settingsMovement")
          }), (0, Qz.jsx)(ao, {
            settingKey: "moveDeadzone",
            label: zz("controller:settingsMoveDeadzone"),
            range: io.E,
            format: io.I
          }), (0, Qz.jsx)(ho.b, {
            label: zz("controller:settingsAutoSprint"),
            checked: tz.autoSprint,
            onClick: zz => {
              (0, Nz.q)({
                autoSprint: zz
              })
            },
            circleInfoText: zz("controller:settingsAutoSprintInfo")
          }), (0, Qz.jsx)(no, {
            label: zz("controller:settingsSneak"),
            options: io.sb,
            value: tz.sneakMode,
            onChange: zz => {
              (0, Nz.q)({
                sneakMode: zz
              })
            }
          }), (0, Qz.jsx)(Lo, {
            text: zz("controller:settingsButtons")
          }), (0, Qz.jsx)(no, {
            label: zz("controller:settingsPromptFamily"),
            options: io.jb,
            value: tz.promptFamily,
            onChange: zz => {
              (0, Nz.q)({
                promptFamily: zz
              })
            }
          }), (0, Qz.jsx)(ho.b, {
            label: zz("controller:settingsHideButtonHints"),
            checked: tz.hideButtonHints,
            onClick: zz => {
              (0, Nz.q)({
                hideButtonHints: zz
              })
            }
          }), (0, Qz.jsx)(ho.b, {
            label: zz("controller:settingsVibration"),
            checked: tz.vibration,
            onClick: zz => {
              (0, Nz.q)({
                vibration: zz
              }), zz && EW("preview")
            }
          }), (0, Qz.jsx)(ao, {
            settingKey: "cursorSpeed",
            label: zz("controller:settingsCursorSpeed"),
            range: io.B,
            format: io.N
          }), (0, Qz.jsx)(ho.b, {
            label: zz("controller:settingsCursorMagnetism"),
            checked: tz.cursorMagnetism,
            onClick: zz => {
              (0, Nz.q)({
                cursorMagnetism: zz
              })
            }
          }), (0, Qz.jsx)(ho.b, {
            label: zz("controller:settingsMenuBackToCategories"),
            checked: tz.menuBackToCategories,
            onClick: zz => {
              (0, Nz.q)({
                menuBackToCategories: zz
              })
            }
          }), (0, Qz.jsx)(vv, {
            layoutSetting: (0, Qz.jsxs)(Qz.Fragment, {
              children: [Kz.e.map((sz => (0, Qz.jsx)(ho.b, {
                label: zz(io.Y[sz]),
                checked: (0, Kz.t)(sz, tz),
                onClick: zz => {
                  Fz(!(0, Kz.G)(sz, zz))
                }
              }, sz))), sz && (0, Qz.jsx)("div", {
                className: "PadLayoutRefusedNotice",
                role: "status",
                children: zz("controller:settingsLayoutRefusedToast")
              })]
            })
          }), (0, Qz.jsx)(sv, {}), (0, Qz.jsx)(Lo, {
            text: zz("controller:settingsAlternatives")
          }), (0, Qz.jsx)("div", {
            className: "ControllerSettingsHint",
            children: zz("controller:settingsAlternativesHint")
          }), (0, Qz.jsx)(no, {
            label: zz("controller:settingsMenuNavigation"),
            hint: zz("controller:settingsMenuNavigationHint"),
            options: io.gb,
            value: tz.menuNavigation,
            onChange: zz => {
              (0, Nz.q)({
                menuNavigation: zz
              })
            }
          }), (0, Qz.jsx)(no, {
            label: zz("controller:settingsInventoryNavigation"),
            hint: zz("controller:settingsInventoryNavigationHint"),
            options: io.U,
            value: tz.inventoryNavigation,
            onChange: zz => {
              (0, Nz.q)({
                inventoryNavigation: zz
              })
            }
          }), (0, Qz.jsx)(no, {
            label: zz("controller:settingsQuickChat"),
            hint: zz("controller:settingsQuickChatHint"),
            options: io.lb,
            value: tz.quickChat,
            onChange: zz => {
              (0, Nz.q)({
                quickChat: zz
              })
            }
          }), (0, Qz.jsx)(no, {
            label: zz("controller:settingsLeaderboardButton"),
            hint: zz("controller:settingsLeaderboardButtonHint"),
            options: io.$,
            value: tz.leaderboardButton,
            onChange: zz => {
              (0, Nz.q)({
                leaderboardButton: zz
              })
            }
          }), (0, Qz.jsx)(Lo, {
            text: zz("controller:settingsTester")
          }), (0, Qz.jsx)(Nv, {})]
        })
      }));
    (0, Wz.c)(Fz);
    for (const Bv of (0, Xz.m)()) Bv.connected ? Oz.e.handleConnectionEvent(Bv) : Oz.e.handleDisconnectionEvent(Bv);
    const wv = () => null !== Oz.e.getActivePad(),
      Dv = () => Es.getState(),
      gv = () => Es.isSteppingSlots(),
      Hv = (zz, tz) => {
        const sz = qW.getFocused();
        qW.isActive() && sz && zz.contains(sz) && qW.setFocus(tz, {
          scroll: !1
        })
      }
  },
  7676: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => vz,
      i: () => Uz
    });
    var Fz = sz(1393),
      Wz = sz(1386);
    const Xz = {
        "054c": "playstation",
        "057e": "nintendo"
      },
      Oz = "28de",
      oz = new Set(["1205"]),
      vz = (zz, tz) => {
        const sz = (0, Fz.e)(zz);
        if ((null === sz || void 0 === sz ? void 0 : sz.vendor) === Oz) return oz.has(sz.product) ? "steamdeck" : "xbox";
        if (sz && Xz[sz.vendor]) return Xz[sz.vendor];
        if ((0, Wz.c)(zz)) return "nintendo";
        const vz = `${zz} ${null!==tz&&void 0!==tz?tz:""}`.toLowerCase();
        return /dualsense|dualshock|playstation|sony/.test(vz) ? "playstation" : /nintendo|switch|joy-con|pro controller/.test(vz) ? "nintendo" : /steam deck/.test(vz) ? "steamdeck" : "xbox"
      },
      Uz = zz => {
        var tz;
        return (null === (tz = (0, Fz.e)(zz)) || void 0 === tz ? void 0 : tz.vendor) === Oz
      }
  },
  7717: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Uz,
      g: () => oz
    });
    var Fz = sz(7674);
    const Wz = ["capture", "keyboard", "wheel", "inventory", "cursor", "focus", "gameplay"],
      Xz = new Set(["capture", "gameplay"]),
      Oz = ["Up", "Down", "Left", "Right"],
      oz = zz => Oz.includes(zz),
      vz = .25;
    const Uz = new class {
      constructor() {
        this.consumers = new Map, this.activeName = null, this.po = new Array(Fz.U).fill(!1), this.previousHeld = new Array(Fz.U).fill(!1), this.consumedButtons = new Array(Fz.U).fill(!1), this.suppressedReleases = new Array(Fz.U).fill(!1), this.wakeOwned = new Array(Fz.U).fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.peek = null, this.lastFrame = (0, Fz.y)()
      }
      register(zz) {
        return this.consumers.has(zz.name) && console.warn(`Controller consumer "${zz.name}" registered twice; the newer one replaces it.`), this.consumers.set(zz.name, zz), () => {
          var tz;
          this.consumers.get(zz.name) === zz && (this.activeName === zz.name ? (this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()) : (null === (tz = this.peek) || void 0 === tz ? void 0 : tz.over) === zz.name && (this.peek = null), this.consumers.delete(zz.name))
        }
      }
      getActiveConsumerName() {
        return this.activeName
      }
      isButtonHeld(zz) {
        return this.po[(0, Fz.o)(zz)]
      }
      getLastFrame() {
        return this.lastFrame
      }
      clear() {
        this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()
      }
      reset() {
        this.deactivateCurrent(), this.activeName = null, this.po = new Array(Fz.U).fill(!1), this.previousHeld = new Array(Fz.U).fill(!1), this.consumedButtons.fill(!1), this.suppressedReleases.fill(!1), this.wakeOwned.fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.lastFrame = (0, Fz.y)()
      }
      dispatch(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.lastFrame = zz, this.previousHeld = this.po, this.po = (0, Fz.t)(zz.values, this.previousHeld);
        for (let Xz = 0; Xz < Fz.U; Xz++) this.suppressedReleases[Xz] = !this.po[Xz] && this.consumedButtons[Xz], this.po[Xz] || (this.consumedButtons[Xz] = !1), this.wakeOwned[Xz] && (this.po[Xz] ? (this.consumedButtons[Xz] = !0, this.wakeOwned[Xz] = !1) : zz.values[Xz] < Fz.Q && (this.wakeOwned[Xz] = !1));
        Math.hypot(zz.leftStick.x, zz.leftStick.y) < vz && (this.leftStickConsumed = !1), Math.hypot(zz.rightStick.x, zz.rightStick.y) < vz && (this.rightStickConsumed = !1);
        const Wz = this.pickActive();
        if ((null === Wz || void 0 === Wz ? void 0 : Wz.name) !== this.activeName) {
          var Oz, oz, Uz, Kz, uz, Nz;
          const zz = this.activeName,
            tz = {
              left: !this.leftStickConsumed,
              right: !this.rightStickConsumed
            },
            sz = null !== (Oz = null === Wz || void 0 === Wz || null === (oz = Wz.peek) || void 0 === oz ? void 0 : oz.call(Wz)) && void 0 !== Oz ? Oz : null,
            Xz = null === zz && !!sz && !(null === (Uz = this.consumers.get(sz.over)) || void 0 === Uz || !Uz.onPeekFrame),
            vz = sz && (sz.over === zz || Xz) ? sz : null,
            bz = null !== this.peek && this.peek.over === (null === Wz || void 0 === Wz ? void 0 : Wz.name) ? this.peek : null;
          this.deactivateCurrent(null !== vz, null !== bz), this.activeName = null !== (Kz = null === Wz || void 0 === Wz ? void 0 : Wz.name) && void 0 !== Kz ? Kz : null, null === zz || this.handOffPending || this.consumeAllHeld();
          const wz = null === (uz = null !== vz && void 0 !== vz ? vz : bz) || void 0 === uz ? void 0 : uz.stick;
          "left" === wz && tz.left ? this.leftStickConsumed = !1 : "right" === wz && tz.right && (this.rightStickConsumed = !1), this.peek = vz, Wz || null === zz ? Wz && (null === (Nz = this.idleResume) || void 0 === Nz ? void 0 : Nz.name) === Wz.name && (this.idleResume.left && (this.leftStickConsumed = !1), this.idleResume.right && (this.rightStickConsumed = !1)) : this.idleResume = {
            name: zz,
            left: tz.left && this.leftStickConsumed,
            right: tz.right && this.rightStickConsumed
          }, Wz && (this.idleResume = null);
          for (let Wz = 0; Wz < Fz.U; Wz++) this.previousHeld[Wz] && !this.po[Wz] && (this.suppressedReleases[Wz] = !0)
        }
        var bz, wz;
        (this.handOffPending = !1, Wz) && (sz && !Xz.has(Wz.name) && this.consumeWakePress(Wz), Wz.onFrame(this.buildInput(zz, tz, sz)), this.peek && (null === (bz = this.consumers.get(this.peek.over)) || void 0 === bz || null === (wz = bz.onPeekFrame) || void 0 === wz || wz.call(bz, this.buildInput(zz, tz, !1, this.peek.stick))))
      }
      consumeWakePress(zz) {
        for (let Wz = 0; Wz < Fz.U; Wz++) {
          var tz, sz;
          const Xz = Fz.V[Wz];
          (null !== (tz = null === (sz = zz.wakePressActs) || void 0 === sz ? void 0 : sz.call(zz, Xz)) && void 0 !== tz ? tz : Oz.includes(Xz)) || (this.po[Wz] ? this.consumedButtons[Wz] = !0 : this.lastFrame.values[Wz] >= Fz.P && (this.wakeOwned[Wz] = !0))
        }
      }
      pickActive() {
        for (const zz of Wz) {
          const tz = this.consumers.get(zz);
          if (tz && tz.isActive()) return tz
        }
        return null
      }
      deactivateCurrent() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var sz, Fz, Wz, Xz;
        this.activeName && (null === (sz = this.consumers.get(this.activeName)) || void 0 === sz || null === (Fz = sz.onDeactivate) || void 0 === Fz || Fz.call(sz, zz));
        this.peek && !tz && (null === (Wz = this.consumers.get(this.peek.over)) || void 0 === Wz || null === (Xz = Wz.onDeactivate) || void 0 === Xz || Xz.call(Wz, !1));
        this.peek = null
      }
      consumeAllHeld() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.idleResume = null;
        for (let Wz = 0; Wz < Fz.U; Wz++) this.po[Wz] && (this.consumedButtons[Wz] = !0);
        const {
          leftStick: tz,
          rightStick: sz
        } = this.lastFrame;
        this.leftStickConsumed = "left" !== zz && (this.leftStickConsumed || Math.hypot(tz.x, tz.y) >= vz), this.rightStickConsumed = "right" !== zz && (this.rightStickConsumed || Math.hypot(sz.x, sz.y) >= vz)
      }
      handOffHeldInput() {
        this.handOffPending = !0
      }
      consumeButton(zz) {
        const tz = (0, Fz.o)(zz);
        this.po[tz] && (this.consumedButtons[tz] = !0)
      }
      buildInput(zz, tz, sz, Wz) {
        const Xz = this.po,
          Oz = this.previousHeld,
          oz = Wz ? new Array(Fz.U).fill(!0) : [...this.consumedButtons],
          vz = Wz ? oz : [...this.suppressedReleases],
          Uz = !this.leftStickConsumed && (!Wz || "left" === Wz),
          Kz = !this.rightStickConsumed && (!Wz || "right" === Wz);
        return {
          frame: zz,
          dtMs: tz,
          isHeld: zz => {
            const tz = (0, Fz.o)(zz);
            return Xz[tz] && !oz[tz]
          },
          wasPressed: zz => {
            const tz = (0, Fz.o)(zz);
            return Xz[tz] && !Oz[tz] && !oz[tz]
          },
          wasReleased: zz => {
            const tz = (0, Fz.o)(zz);
            return !Xz[tz] && Oz[tz] && !vz[tz]
          },
          value: tz => {
            const sz = (0, Fz.o)(tz);
            return oz[sz] ? 0 : zz.values[sz]
          },
          leftStick: Uz ? zz.leftStick : {
            x: 0,
            y: 0
          },
          rightStick: Kz ? zz.rightStick : {
            x: 0,
            y: 0
          },
          wokeDevice: sz
        }
      }
    }
  },
  7691: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => uz.d,
      h: () => uz.e,
      k: () => ez,
      o: () => Zz,
      q: () => Gz,
      t: () => Tz
    });
    var Fz = sz(65),
      Wz = sz(34),
      Xz = sz(1416),
      Oz = sz(44),
      oz = sz(7699),
      vz = sz(7674),
      Uz = sz(7687),
      Kz = sz(7665),
      uz = sz(1935),
      Nz = sz(7707);
    const bz = {
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
      wz = "controllerSettings",
      Dz = ["bindings", "promptFamily", "hideButtonHints", "swapSticks", "swapConfirmBack", "leaderboardButton"],
      gz = ["auto", ...oz.c],
      Hz = (zz, tz) => "string" === typeof tz && zz.includes(tz),
      Bz = zz => tz => "number" === typeof tz && Number.isFinite(tz) ? (0, Nz.y)(tz, zz) : void 0,
      Pz = zz => "boolean" === typeof zz ? zz : void 0,
      rz = zz => tz => Hz(zz, tz) ? tz : void 0,
      Yz = {
        lookSensitivityX: Bz(Nz.ob),
        lookSensitivityY: Bz(Nz.ob),
        aimLookSensitivity: Bz(Nz.k),
        invertLookX: Pz,
        invertLookY: Pz,
        lookCurve: rz(vz.M),
        lookDeadzone: Bz(Nz.E),
        moveDeadzone: Bz(Nz.E),
        swapSticks: Pz,
        autoSprint: Pz,
        sneakMode: rz(["toggle", "hold"]),
        tapHoldTime: rz(["short", "medium", "long"]),
        attackMode: rz(["hold", "toggle"]),
        promptFamily: rz(gz),
        hideButtonHints: Pz,
        vibration: Pz,
        cursorSpeed: Bz(Nz.B),
        cursorMagnetism: Pz,
        buttonRepeat: rz(vz.r),
        largePointer: Pz,
        menuBackToCategories: Pz,
        swapConfirmBack: Pz,
        menuNavigation: rz(["hybrid", "focus", "cursor"]),
        inventoryNavigation: rz(["hybrid", "slot", "cursor"]),
        quickChat: rz(["wheel", "off"]),
        leaderboardButton: rz(["shop", "leaderboard"]),
        gyroAiming: Pz,
        gyroSensitivity: Bz(Nz.R),
        gyroActivation: rz(["always", "aiming", "button"]),
        gyroButton: rz(vz.V),
        emoteButton: rz(["tapHold", "wheel"])
      },
      xz = [{
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
      mz = zz => {
        const tz = {};
        if ("object" !== typeof zz || null === zz) return tz;
        for (const [sz, Fz] of Object.entries(zz)) Object.prototype.hasOwnProperty.call(Uz.f, sz) && Hz(vz.V, Fz) && (tz[sz] = Fz);
        return tz
      },
      Jz = zz => {
        const tz = {};
        for (const sz of Object.keys(bz))("bindings" === sz ? Object.keys(zz.bindings).length > 0 : zz[sz] !== bz[sz]) && (tz[sz] = zz[sz]);
        0 !== Object.keys(tz).length ? Oz.f.setItem(wz, tz) : Oz.f.removeItem(wz)
      };
    let Iz = (() => {
        const zz = Oz.f.getItem(wz),
          tz = (zz => {
            const tz = "object" === typeof zz && null !== zz ? zz : {},
              sz = {
                ...bz,
                bindings: mz(tz.bindings)
              };
            for (const Wz of Object.keys(Yz)) {
              const zz = Yz[Wz](tz[Wz]);
              void 0 !== zz && (sz[Wz] = zz)
            }
            const Fz = Object.keys(tz).filter((zz => !!Object.prototype.hasOwnProperty.call(bz, zz) && ("bindings" === zz ? "object" !== typeof tz.bindings || null === tz.bindings || Object.keys(tz.bindings).length !== Object.keys(sz.bindings).length : sz[zz] !== tz[zz])));
            return Fz.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${Fz.join(", ")}`), sz
          })(zz);
        return null !== zz && void 0 !== zz && Jz(tz), tz
      })(),
      Cz = {
        ...Iz,
        ...(() => {
          if ("undefined" === typeof window) return {};
          const zz = {},
            tz = new URLSearchParams(window.location.search);
          for (const {
              param: sz,
              key: Fz
            }
            of xz) {
            const Wz = Yz[Fz](tz.get(sz));
            void 0 !== Wz && (zz[Fz] = Wz)
          }
          return zz
        })()
      };
    const ez = () => Cz,
      Zz = () => {
        var zz, tz;
        const sz = ez().promptFamily;
        return "auto" !== sz ? sz : null !== (zz = null === (tz = Kz.e.getActivePad()) || void 0 === tz ? void 0 : tz.family) && void 0 !== zz ? zz : "xbox"
      },
      Gz = zz => {
        const tz = Cz;
        Iz = {
          ...Iz,
          ...zz
        }, Jz(Iz), Cz = {
          ...Cz,
          ...zz
        }, (zz => {
          Wz.o.Yg(uz.e, Cz), Dz.some((tz => zz[tz] !== Cz[tz])) && Wz.o.Yg(uz.d, Cz)
        })(tz)
      },
      Tz = () => {
        const [zz, tz] = (0, Fz.useState)(Cz);
        return (0, Xz.g)(uz.e, tz), zz
      }
  },
  8180: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Wz
    });
    const Fz = new Set(["Alt", "AltGraph", "Meta", "OS", "AudioVolumeUp", "AudioVolumeDown", "AudioVolumeMute", "MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "BrowserBack", "BrowserForward", "BrowserHome", "GoBack", "LaunchApplication1", "LaunchApplication2", "LaunchMail", "PrintScreen", "Unidentified"]),
      Wz = zz => Fz.has(zz)
  },
  7665: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Dz.b,
      e: () => Pz
    });
    var Fz = sz(7674),
      Wz = sz(7676);
    const Xz = .1,
      Oz = .3;
    class oz {
      constructor() {
        this.deadzone = 0, this.anchor = null, this.steadyMs = 0, this.lastMs = null, this.returning = !0, this.anchorLearned = !1
      }
      observe(zz, tz) {
        const sz = null === this.lastMs ? 0 : Math.min(Math.max(0, tz - this.lastMs), 100);
        this.lastMs = tz;
        const Fz = Math.hypot(zz.x, zz.y);
        if (Fz >= Oz) return this.anchor = null, void(this.returning = !0);
        Fz >= Xz || (this.returning = !1);
        const Wz = this.anchor;
        if (!Wz || Math.hypot(zz.x - Wz.x, zz.y - Wz.y) > .03) return this.anchorLearned && (this.returning = !1), this.anchor = {
          x: zz.x,
          y: zz.y
        }, this.steadyMs = 0, void(this.anchorLearned = !1);
        if (this.steadyMs += sz, this.steadyMs < 1e3) return;
        const oz = Math.max(Fz, Math.hypot(Wz.x, Wz.y));
        oz < Xz ? this.deadzone = 0 : this.returning && (this.deadzone = oz + .05, this.anchorLearned = !0)
      }
      getDeadzone() {
        return this.deadzone
      }
      apply(zz) {
        return Math.hypot(zz.x, zz.y) < this.deadzone ? {
          x: 0,
          y: 0
        } : zz
      }
    }
    const vz = (zz, tz) => {
        var sz, Fz;
        return null !== (sz = zz && (null === (Fz = Object.getOwnPropertyDescriptor(zz, tz)) || void 0 === Fz ? void 0 : Fz.get)) && void 0 !== sz ? sz : null
      },
      Uz = zz => {
        const tz = zz.vendorName;
        return "string" === typeof tz ? tz : void 0
      },
      Kz = ((zz, tz) => {
        const sz = vz(zz, "index"),
          Fz = vz(zz, "id"),
          Wz = vz(zz, "connected"),
          Xz = vz(zz, "mapping"),
          Oz = vz(zz, "buttons"),
          oz = vz(zz, "axes"),
          Kz = vz(tz, "pressed"),
          uz = vz(tz, "value");
        return sz && Fz && Wz && Xz && Oz && oz && Kz && uz ? zz => {
          const tz = Oz.call(zz),
            vz = oz.call(zz),
            Nz = {
              index: Number(sz.call(zz)),
              id: String(Fz.call(zz)),
              connected: !0 === Wz.call(zz),
              mapping: String(Xz.call(zz)),
              buttons: [],
              axes: [],
              vendorName: Uz(zz)
            };
          for (let sz = 0; sz < tz.length; sz++) Nz.buttons.push({
            pressed: !0 === Kz.call(tz[sz]),
            value: Number(uz.call(tz[sz]))
          });
          for (let sz = 0; sz < vz.length; sz++) Nz.axes.push(Number(vz[sz]));
          return Nz
        } : null
      })("undefined" === typeof Gamepad ? null : Gamepad.prototype, "undefined" === typeof GamepadButton ? null : GamepadButton.prototype),
      uz = "undefined" === typeof Navigator ? null : Navigator.prototype.getGamepads;
    var Nz = sz(1384),
      bz = sz(1386);
    const wz = zz => ({
      pressed: zz,
      value: zz ? 1 : 0
    });
    var Dz = sz(1935);
    const gz = Oz,
      Hz = zz => {
        const tz = new Array(Fz.U).fill(0);
        for (let sz = 0; sz < Fz.U && sz < zz.buttons.length; sz++) {
          const Wz = zz.buttons[sz];
          tz[sz] = Wz.pressed && !(0, Fz.K)(sz) ? Math.max(Wz.value, Fz.A) : Wz.value
        }
        return tz
      },
      Bz = (zz, tz) => {
        var sz, Fz;
        return {
          x: null !== (sz = zz.axes[tz]) && void 0 !== sz ? sz : 0,
          y: null !== (Fz = zz.axes[tz + 1]) && void 0 !== Fz ? Fz : 0
        }
      };
    const Pz = new class {
      constructor(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Kz;
        this.readGamepads = zz, this.requireTrustedPads = tz, this.nativeReader = sz, this.running = !1, this.listening = !1, this.rafId = 0, this.lastTimestampMs = 0, this.activeInfo = null, this.slots = [], this.trustedIndices = new Set, this.warnedNonStandardIds = new Set, this.loggedReadError = !1, this.frameListeners = new Set, this.connectionListeners = new Set, this.anyPadConnected = !1, this.connectedListeners = new Set, this.handleConnectionEvent = zz => {
          zz.isTrusted && this.trustedIndices.add(zz.gamepad.index), this.wake()
        }, this.handleDisconnectionEvent = zz => {
          this.trustedIndices.delete(zz.gamepad.index)
        }, this.wN = zz => {
          if (this.rafId = 0, !this.running) return;
          const tz = 0 === this.lastTimestampMs ? 16 : Math.min(100, zz - this.lastTimestampMs);
          this.lastTimestampMs = zz;
          try {
            this.poll(zz, tz)
          } finally {
            this.anyPadConnected && (this.rafId = requestAnimationFrame(this.wN))
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
      onFrame(zz) {
        return this.frameListeners.add(zz), () => {
          this.frameListeners.delete(zz)
        }
      }
      onActivePadChanged(zz) {
        return this.connectionListeners.add(zz), () => {
          this.connectionListeners.delete(zz)
        }
      }
      getActivePad() {
        return this.activeInfo
      }
      hasConnectedPad() {
        return this.anyPadConnected
      }
      onConnectedPadsChanged(zz) {
        return this.connectedListeners.add(zz), () => {
          this.connectedListeners.delete(zz)
        }
      }
      getActiveGamepad() {
        if (!this.activeInfo) return null;
        const zz = this.readPads()[this.activeInfo.index],
          tz = zz ? this.readPad(zz) : null;
        return tz && tz.id === this.activeInfo.id ? zz : null
      }
      poll(zz, tz) {
        var sz, Wz;
        const Xz = this.readPads();
        let Oz = null,
          vz = !1;
        const Uz = [],
          Kz = Math.max(Xz.length, this.slots.length);
        for (let Pz = 0; Pz < Kz; Pz++) {
          var uz;
          const tz = Pz < Xz.length ? Xz[Pz] : null,
            sz = tz ? this.readPad(tz) : null;
          if (!sz || !sz.connected || !this.isUsable(sz)) {
            this.slots[Pz] = null;
            continue
          }
          let Wz = this.slots[Pz];
          Wz && Wz.id === sz.id || (Wz = {
            id: sz.id,
            po: [],
            leftSettled: !1,
            rightSettled: !1,
            leftRest: new oz,
            rightRest: new oz
          }, this.slots[Pz] = Wz);
          const Kz = Bz(sz, 0),
            Nz = Bz(sz, 2);
          !Wz.leftSettled && Math.hypot(Kz.x, Kz.y) < gz && (Wz.leftSettled = !0), !Wz.rightSettled && Math.hypot(Nz.x, Nz.y) < gz && (Wz.rightSettled = !0), Wz.leftRest.observe(Kz, zz), Wz.rightRest.observe(Nz, zz);
          const bz = Hz(sz),
            wz = (0, Fz.t)(bz, Wz.po),
            Dz = Wz.po,
            rz = wz.map(((zz, tz) => zz && !Dz[tz]));
          Wz.po = wz;
          const Yz = {
            pad: sz,
            slot: Wz,
            values: bz
          };
          Pz === (null === (uz = this.activeInfo) || void 0 === uz ? void 0 : uz.index) && sz.id === this.activeInfo.id ? (Oz = Yz, vz = rz.includes(!0)) : rz.includes(!0) && Uz.push({
            polled: Yz,
            rose: rz
          })
        }
        const Nz = this.slots.some((zz => null !== zz));
        if (Nz !== this.anyPadConnected) {
          this.anyPadConnected = Nz;
          for (const zz of this.connectedListeners) zz()
        }
        const bz = null !== (sz = null === (Wz = Oz) || void 0 === Wz ? void 0 : Wz.slot.po) && void 0 !== sz ? sz : [],
          wz = vz ? void 0 : Uz.find((zz => {
            let {
              rose: tz
            } = zz;
            return tz.some(((zz, tz) => zz && !bz[tz]))
          }));
        if (wz ? (Oz = wz.polled, this.setActive(wz.polled.pad)) : this.activeInfo && !Oz && this.setActive(null), !Oz || !this.activeInfo) return;
        const Dz = ((zz, tz) => {
          let {
            pad: sz,
            slot: Wz,
            values: Xz
          } = zz;
          const Oz = (0, Fz.y)(tz);
          return Oz.values = Xz, Wz.leftSettled && (Oz.leftStick = Wz.leftRest.apply(Bz(sz, 0))), Wz.rightSettled && (Oz.rightStick = Wz.rightRest.apply(Bz(sz, 2))), Oz
        })(Oz, zz);
        for (const Fz of this.frameListeners) Fz(Dz, tz, this.activeInfo)
      }
      readPad(zz) {
        const tz = this.readSnapshot(zz);
        return tz && (0, bz.g)(tz) ? (zz => {
          const tz = tz => {
              var sz;
              return null !== (sz = zz.buttons[tz]) && void 0 !== sz ? sz : wz(!1)
            },
            sz = tz => {
              var sz;
              return null !== (sz = zz.axes[tz]) && void 0 !== sz ? sz : 0
            },
            Fz = zz.axes.length > 9,
            Wz = Fz ? (zz => {
              const tz = 0 !== zz;
              return {
                up: tz && (zz >= -1 && zz < -.7 || zz >= .95 && zz <= 1),
                right: tz && zz >= -.75 && zz < -.1,
                down: tz && zz >= -.2 && zz < .45,
                left: tz && zz >= .4 && zz <= 1
              }
            })(sz(9)) : {
              up: sz(5) < -.5,
              down: sz(5) > .5,
              left: sz(4) < -.5,
              right: sz(4) > .5
            };
          return {
            ...zz,
            mapping: "standard",
            buttons: [tz(1), tz(2), tz(0), tz(3), tz(4), tz(5), tz(6), tz(7), tz(8), tz(9), tz(10), tz(11), wz(Wz.up), wz(Wz.down), wz(Wz.left), wz(Wz.right), tz(12)],
            axes: [sz(0), sz(1), sz(2), sz(Fz ? 5 : 3)]
          }
        })(tz) : tz
      }
      readSnapshot(zz) {
        if (this.nativeReader) try {
          return this.nativeReader(zz)
        } catch {
          if (this.requireTrustedPads) return null
        }
        return this.requireTrustedPads ? null : (zz => {
          const tz = zz;
          return {
            index: tz.index,
            id: tz.id,
            connected: tz.connected,
            mapping: tz.mapping,
            buttons: Array.from(tz.buttons, (zz => ({
              pressed: zz.pressed,
              value: zz.value
            }))),
            axes: Array.from(tz.axes),
            vendorName: Uz(zz)
          }
        })(zz)
      }
      isUsable(zz) {
        return !(0, Nz.e)(zz.id) && ("standard" !== zz.mapping ? (this.warnedNonStandardIds.has(zz.id) || (this.warnedNonStandardIds.add(zz.id), console.warn(`Controller "${zz.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.trustedIndices.has(zz.index))
      }
      setActive(zz) {
        this.activeInfo = zz ? {
          index: zz.index,
          id: zz.id,
          family: (0, Wz.e)(zz.id, zz.vendorName)
        } : null;
        for (const tz of this.connectionListeners) tz(this.activeInfo)
      }
      readPads() {
        try {
          return this.readGamepads()
        } catch (zz) {
          return this.loggedReadError || (this.loggedReadError = !0, console.warn("Reading gamepads failed; controller input is unavailable.", zz)), []
        }
      }
      wake() {
        this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.wN))
      }
    }((() => uz ? uz.call(navigator) : []), !0);
    Pz.listenForConnections()
  },
  8195: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Fz
    });
    const Fz = {
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
  8266: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Oz,
      f: () => oz
    });
    var Fz = sz(34),
      Wz = sz(8261);
    let Xz = !1;
    const Oz = () => Xz,
      oz = zz => {
        zz !== Xz && (Xz = zz, Fz.o.Yg(Wz.p, Xz))
      }
  },
  8263: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => oz,
      g: () => vz
    });
    var Fz = sz(34),
      Wz = sz(8261);
    let Xz = null,
      Oz = 0;
    const oz = () => Xz,
      vz = zz => {
        null === zz && null === Xz || (Xz = null === zz ? null : {
          id: ++Oz,
          holdMs: zz
        }, Fz.o.Yg(Wz.s, Xz))
      }
  },
  8271: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Oz,
      g: () => oz
    });
    var Fz = sz(34),
      Wz = sz(8261);
    let Xz = !1;
    const Oz = () => Xz,
      oz = zz => {
        zz !== Xz && (Xz = zz, Fz.o.Yg(Wz.u, Xz))
      }
  },
  8325: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Oz,
      g: () => oz
    });
    var Fz = sz(34),
      Wz = sz(8261);
    let Xz = !1;
    const Oz = () => Xz,
      oz = zz => {
        zz !== Xz && (Xz = zz, Fz.o.Yg(Wz.y, Xz))
      }
  },
  8227: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Fz
    });
    class Fz {
      constructor() {
        this.downAtMs = null
      }
      update(zz, tz, sz, Fz) {
        if (zz) return this.downAtMs = sz, null;
        if (null === this.downAtMs) return null;
        const Wz = sz - this.downAtMs >= Fz;
        return tz ? Wz ? (this.downAtMs = null, "hold") : null : (this.downAtMs = null, Wz ? "hold" : "tap")
      }
      release() {
        this.downAtMs = null
      }
    }
  },
  7739: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => uz,
      h: () => Nz,
      i: () => oz,
      k: () => Pz,
      l: () => Bz
    });
    var Fz = sz(44),
      Wz = sz(7699),
      Xz = sz(7674);
    const Oz = (() => {
        try {
          return sz(7743)
        } catch {
          return null
        }
      })(),
      oz = [...Xz.V, "LeftStick", "RightStick"],
      vz = new Map,
      Uz = {
        xbox: "xbox",
        playstation: "playstation",
        nintendo: "nintendo",
        steamdeck: "steamdeck",
        generic: "xbox"
      },
      Kz = (new Set(Object.values(Uz)), {
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
      uz = (zz, tz) => {
        var sz, Fz;
        return null !== (sz = null === (Fz = Kz[Uz[zz]]) || void 0 === Fz ? void 0 : Fz[tz]) && void 0 !== sz ? sz : 1
      },
      Nz = (zz, tz) => {
        const sz = `./${Uz[zz]}/${tz}.svg`;
        let Fz = vz.get(sz);
        return void 0 === Fz && (Fz = Oz ? Oz(sz) : "", vz.set(sz, Fz)), Fz
      },
      bz = new Set,
      wz = [],
      Dz = zz => {
        if (!bz.has(zz)) {
          bz.add(zz);
          for (const tz of oz) {
            const sz = Nz(zz, tz);
            if (sz) {
              const zz = new Image;
              zz.crossOrigin = "anonymous", zz.src = sz, wz.push(zz)
            }
          }
        }
      },
      gz = "controllerGlyphFamily";
    let Hz = null;
    const Bz = zz => {
        zz !== Hz && (Hz = zz, Fz.f.setItem(gz, zz), Dz(zz))
      },
      Pz = () => {
        const zz = Fz.f.getItem(gz);
        (0, Wz.g)(zz) && zz !== Hz && (Hz = zz, Dz(zz))
      }
  },
  8351: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => hz,
      c: () => Qz
    });
    var Fz = sz(65),
      Wz = sz(34),
      Xz = sz(1416),
      Oz = sz(7682),
      oz = sz(7665),
      vz = sz(7717),
      Uz = sz(7691);
    const Kz = {
        x: 0,
        y: 0,
        z: 0
      },
      uz = Math.PI / 180,
      Nz = zz => Math.hypot(zz.x, zz.y, zz.z),
      bz = (zz, tz) => ({
        x: zz.x * tz,
        y: zz.y * tz,
        z: zz.z * tz
      }),
      wz = (zz, tz) => ({
        x: zz.x + tz.x,
        y: zz.y + tz.y,
        z: zz.z + tz.z
      }),
      Dz = (zz, tz) => ({
        x: zz.x - tz.x,
        y: zz.y - tz.y,
        z: zz.z - tz.z
      }),
      gz = zz => {
        const tz = Nz(zz);
        return 0 === tz ? Kz : bz(zz, 1 / tz)
      },
      Hz = zz => ({
        min: {
          ...zz
        },
        max: {
          ...zz
        }
      }),
      Bz = (zz, tz) => ({
        min: {
          x: Math.min(zz.min.x, tz.x),
          y: Math.min(zz.min.y, tz.y),
          z: Math.min(zz.min.z, tz.z)
        },
        max: {
          x: Math.max(zz.max.x, tz.x),
          y: Math.max(zz.max.y, tz.y),
          z: Math.max(zz.max.z, tz.z)
        }
      }),
      Pz = (zz, tz) => zz.max.x - zz.min.x <= tz && zz.max.y - zz.min.y <= tz && zz.max.z - zz.min.z <= tz;
    class rz {
      constructor() {
        this.bias = Kz, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = Kz, this.windowSec = 0
      }
      update(zz) {
        const tz = this.gyroRange ? Bz(this.gyroRange, zz.gyro) : Hz(zz.gyro),
          sz = zz.accel ? this.accelRange ? Bz(this.accelRange, zz.accel) : Hz(zz.accel) : null;
        if (!Pz(tz, 1) || sz && !Pz(sz, .01)) return void this.restartWindow(zz);
        if (this.gyroRange = tz, this.accelRange = sz, this.sum = wz(this.sum, bz(zz.gyro, zz.dtSec)), this.windowSec += zz.dtSec, this.windowSec < 1) return;
        const Fz = bz(this.sum, 1 / this.windowSec);
        if (Nz(Fz) > 5) return;
        const Wz = Dz(Fz, this.bias);
        let Xz = 0;
        !this.calibrated || this.windowSec >= 3 ? Xz = 1 : Nz(Wz) <= 1 && (Xz = Math.min(1, zz.dtSec / 1)), this.bias = wz(this.bias, bz(Wz, Xz)), this.calibrated = this.calibrated || Xz > 0
      }
      correct(zz) {
        return Dz(zz, this.bias)
      }
      getBias() {
        return this.bias
      }
      isCalibrated() {
        return this.calibrated
      }
      reset() {
        this.bias = Kz, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = Kz, this.windowSec = 0
      }
      restartWindow(zz) {
        this.gyroRange = Hz(zz.gyro), this.accelRange = zz.accel ? Hz(zz.accel) : null, this.sum = Kz, this.windowSec = 0
      }
    }
    class Yz {
      constructor() {
        this.down = null
      }
      update(zz, tz, sz) {
        const Fz = gz(bz(tz, -1));
        if (!this.down) return this.down = Fz, Fz;
        const Wz = bz(zz, uz * sz),
          Xz = this.down,
          Oz = {
            x: Xz.x - (Wz.y * Xz.z - Wz.z * Xz.y),
            y: Xz.y - (Wz.z * Xz.x - Wz.x * Xz.z),
            z: Xz.z - (Wz.x * Xz.y - Wz.y * Xz.x)
          },
          oz = 0 === Nz(Fz) ? 0 : Math.min(1, sz / .25);
        var vz, Uz;
        return this.down = gz((Uz = oz, wz(vz = Oz, bz(Dz(Fz, vz), Uz)))), this.down
      }
      reset() {
        this.down = null
      }
    }
    class xz {
      constructor() {
        this.entries = [], this.windowSec = 0
      }
      apply(zz, tz, sz) {
        const Fz = Math.hypot(zz, tz),
          Wz = Math.max(0, Math.min(1, (Fz - 2) / 2)),
          Xz = {
            yaw: zz * (1 - Wz),
            pitch: tz * (1 - Wz),
            dtSec: sz
          };
        for (this.entries.push(Xz), this.windowSec += sz; this.entries.length > 1 && this.windowSec - this.entries[0].dtSec >= .125;) this.windowSec -= this.entries[0].dtSec, this.entries.shift();
        let Oz = 0,
          oz = 0;
        for (const Uz of this.entries) Oz += Uz.yaw * Uz.dtSec, oz += Uz.pitch * Uz.dtSec;
        const vz = this.windowSec > 0 ? {
          yaw: Oz / this.windowSec,
          pitch: oz / this.windowSec
        } : {
          yaw: Xz.yaw,
          pitch: Xz.pitch
        };
        return {
          yaw: zz * Wz + vz.yaw,
          pitch: tz * Wz + vz.pitch
        }
      }
      reset() {
        this.entries = [], this.windowSec = 0
      }
    }
    class mz {
      constructor() {
        this.calibrator = new rz, this.gravity = new Yz, this.smoother = new xz
      }
      process(zz, tz, sz) {
        const Fz = Math.max(0, Math.min(.05, tz));
        this.calibrator.update({
          ...zz,
          dtSec: Fz
        });
        const Wz = this.calibrator.correct(zz.gyro);
        let Xz = Wz.y;
        "player" === sz && zz.accel && (Xz = ((zz, tz) => {
          const sz = zz.y * tz.y + zz.z * tz.z;
          return -Math.sign(sz) * Math.min(1.41 * Math.abs(sz), Math.hypot(zz.y, zz.z))
        })(Wz, this.gravity.update(Wz, zz.accel, Fz)));
        const Oz = this.smoother.apply(Xz, Wz.x, Fz),
          oz = ((zz, tz) => {
            const sz = Math.hypot(zz, tz);
            if (sz >= 1) return {
              yaw: zz,
              pitch: tz
            };
            const Fz = sz / 1;
            return {
              yaw: zz * Fz,
              pitch: tz * Fz
            }
          })(Oz.yaw, Oz.pitch);
        return {
          yawDeg: oz.yaw * Fz,
          pitchDeg: oz.pitch * Fz
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
    const Jz = (zz, tz) => {
      var sz, Fz, Wz;
      const Xz = tz * uz,
        Oz = null !== (sz = zz.beta) && void 0 !== sz ? sz : 0,
        oz = null !== (Fz = zz.gamma) && void 0 !== Fz ? Fz : 0;
      return {
        x: Oz * Math.cos(Xz) - oz * Math.sin(Xz),
        y: Oz * Math.sin(Xz) + oz * Math.cos(Xz),
        z: null !== (Wz = zz.alpha) && void 0 !== Wz ? Wz : 0
      }
    };
    var Iz = sz(8356);
    class Cz {
      constructor(zz, tz, sz) {
        this.hid = zz, this.sink = tz, this.onControllersChanged = sz, this.controllers = new Map, this.running = !1, this.openedCount = 0, this.opening = new Set, this.disconnectedWhileOpening = new Set, this.switchPacketCounter = 0, this.onConnect = zz => {
          this.openController(zz.device).catch((zz => {
            console.warn("Could not open motion controller", zz)
          }))
        }, this.onDisconnect = zz => {
          this.opening.has(zz.device) && this.disconnectedWhileOpening.add(zz.device);
          const tz = this.controllers.get(zz.device);
          tz && (this.forget(tz), this.onControllersChanged())
        }
      }
      async start() {
        if (this.running) return;
        this.running = !0, this.hid.addEventListener("connect", this.onConnect), this.hid.addEventListener("disconnect", this.onDisconnect);
        const zz = await this.hid.getDevices();
        for (const tz of zz) await this.openController(tz).catch((zz => {
          console.warn("Could not open motion controller", zz)
        }))
      }
      stop() {
        this.running = !1, this.hid.removeEventListener("connect", this.onConnect), this.hid.removeEventListener("disconnect", this.onDisconnect);
        for (const zz of [...this.controllers.values()]) this.forget(zz);
        this.onControllersChanged()
      }
      async request() {
        const zz = await this.hid.requestDevice({
          filters: Iz.h
        });
        let tz = 0;
        for (const sz of zz) await this.openController(sz).catch((zz => {
          console.warn("Could not open motion controller", zz), tz++
        }));
        return tz
      }
      async hasGrantedController() {
        return (await this.hid.getDevices()).some((zz => null !== (0, Iz.c)(zz.vendorId, zz.productId)))
      }
      getConnectedKinds() {
        return [...this.controllers.values()].map((zz => zz.kind))
      }
      forget(zz) {
        zz.device.removeEventListener("inputreport", zz.onReport), this.controllers.get(zz.device) === zz && this.controllers.delete(zz.device)
      }
      async openController(zz) {
        const tz = (0, Iz.c)(zz.vendorId, zz.productId);
        if (!tz || !this.running || this.controllers.has(zz) || this.opening.has(zz)) return;
        this.opening.add(zz);
        let sz = !1;
        try {
          zz.opened || await zz.open()
        } finally {
          this.opening.delete(zz), sz = this.disconnectedWhileOpening.delete(zz)
        }
        if (sz) return void zz.close().catch((zz => {
          console.debug("Could not close an unplugged motion controller", zz)
        }));
        if (!this.running) return;
        const Fz = {
          device: zz,
          kind: tz,
          lastClock: null,
          lastEventMs: null,
          lastReadingMs: -1 / 0,
          openedOrder: this.openedCount++,
          onReport: zz => {
            this.onReport(Fz, zz)
          }
        };
        this.controllers.set(zz, Fz), zz.addEventListener("inputreport", Fz.onReport), this.onControllersChanged();
        try {
          await this.enableMotion(Fz)
        } catch (Wz) {
          console.warn(`Could not turn on motion for ${tz}`, Wz), this.controllers.get(zz) === Fz && (this.forget(Fz), this.onControllersChanged())
        }
      }
      async enableMotion(zz) {
        let {
          device: tz,
          kind: sz
        } = zz;
        if ((0, Iz.e)(sz))
          for (const Fz of Iz.x[sz]) await tz.receiveFeatureReport(Fz).catch((zz => {
            console.debug(`Motion controller feature report ${Fz} unavailable`, zz)
          }));
        else
          for (let Fz = 0; Fz < 2; Fz++)
            for (const {
                subcommand: zz,
                args: sz
              }
              of Iz.y) await tz.sendReport(Iz.B, (0, Iz.b)(this.switchPacketCounter++, zz, sz)), await new Promise((zz => {
              setTimeout(zz, 60)
            }))
      }
      onReport(zz, tz) {
        const sz = (0, Iz.q)(zz.kind, tz.reportId, tz.data, zz.device.productId);
        if (!sz) return;
        const Fz = null === zz.lastEventMs ? 0 : (tz.timeStamp - zz.lastEventMs) / 1e3;
        zz.lastEventMs = tz.timeStamp;
        let Wz = sz.dtSec;
        if (null !== Wz && Fz > 0 && (Wz = Math.max(.001, Math.min(.017, Fz / sz.readings.length))), null === Wz && null !== sz.sensorClock && (0, Iz.e)(zz.kind)) {
          const tz = (0, Iz.u)(zz.kind, zz.lastClock, sz.sensorClock);
          zz.lastClock = sz.sensorClock, Wz = 0 === tz ? null : tz
        }
        if (zz.lastReadingMs = tz.timeStamp, this.isPreferred(zz, tz.timeStamp))
          for (const Oz of sz.readings) {
            var Xz;
            this.sink(Oz, null !== (Xz = Wz) && void 0 !== Xz ? Xz : Fz, `hid${zz.openedOrder}`)
          }
      }
      isPreferred(zz, tz) {
        const sz = zz => 1e6 * Iz.m[zz.kind] + zz.openedOrder;
        for (const Fz of this.controllers.values())
          if (Fz !== zz && tz - Fz.lastReadingMs < 500 && sz(Fz) < sz(zz)) return !1;
        return !0
      }
    }
    var ez = sz(106);
    const Zz = () => DeviceMotionEvent,
      Gz = () => "undefined" !== typeof window && "undefined" !== typeof DeviceMotionEvent && window.isSecureContext && (0, ez.isMobile)(),
      Tz = () => {
        var zz;
        const tz = null === (zz = window.screen.orientation) || void 0 === zz ? void 0 : zz.angle;
        return "number" === typeof tz ? tz : "number" === typeof window.orientation ? window.orientation : 0
      };
    class cz {
      constructor(zz, tz) {
        this.sink = zz, this.onStateChanged = tz, this.state = "off", this.lastEventMs = null, this.noSensorTimer = null, this.wanted = !1, this.permissionRequest = null, this.granted = !1, this.onGesture = () => {
          this.requestPermission().catch((zz => {
            console.warn("Could not enable the motion sensor", zz)
          }))
        }, this.onMotion = zz => {
          const tz = zz.rotationRate;
          if (!tz || null === tz.alpha && null === tz.beta && null === tz.gamma) return;
          const sz = null === this.lastEventMs ? 0 : (zz.timeStamp - this.lastEventMs) / 1e3;
          this.lastEventMs = zz.timeStamp, this.clearNoSensorTimer(), this.setState("on"), this.sink({
            gyro: Jz(tz, Tz()),
            accel: null
          }, sz, "phone")
        }
      }
      getState() {
        return this.state
      }
      start() {
        if (this.wanted = !0, "off" === this.state) return "function" !== typeof Zz().requestPermission || this.granted ? void this.listen() : (this.setState("needsPermission"), void this.armGestureRequest())
      }
      requestPermission() {
        return this.permissionRequest || (this.permissionRequest = this.askPermission().finally((() => {
          this.permissionRequest = null
        }))), this.permissionRequest
      }
      async askPermission() {
        const zz = Zz().requestPermission;
        if (!this.wanted) return;
        if ("function" !== typeof zz) return void this.listen();
        let tz;
        this.disarmGestureRequest();
        try {
          tz = await zz.call(DeviceMotionEvent)
        } catch (sz) {
          throw this.wanted && "needsPermission" === this.state && this.armGestureRequest(), sz
        }
        this.wanted && ("granted" === tz ? (this.granted = !0, this.listen()) : this.setState("denied"))
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
      setState(zz) {
        this.state !== zz && (this.state = zz, this.onStateChanged())
      }
    }
    const jz = "controllerGyroStatusChanged",
      Az = {
        mJ: 0,
        eJ: 0
      },
      yz = zz => {
        var tz, sz;
        return "undefined" === typeof document || (null === (tz = null === (sz = document.featurePolicy) || void 0 === sz ? void 0 : sz.allowsFeature(zz)) || void 0 === tz || tz)
      };
    class Mz {
      constructor() {
        this.processor = new mz, this.hid = void 0, this.hidBlocked = void 0, this.phone = void 0, this.phoneBlocked = void 0, this.source = null, this.pendingYawDeg = 0, this.pendingPitchDeg = 0, this.lastDrainMs = -1 / 0, this.lastHidReadingMs = -1 / 0, this.running = !1, this.phoneRunning = !1, this.syncWithSettings = zz => {
          const tz = zz.gyroAiming && oz.e.hasConnectedPad();
          var sz, Fz;
          tz !== this.phoneRunning && (this.phoneRunning = tz, tz ? null === (sz = this.phone) || void 0 === sz || sz.start() : null === (Fz = this.phone) || void 0 === Fz || Fz.stop());
          if (zz.gyroAiming !== this.running) {
            var Wz, Xz;
            if (this.running = zz.gyroAiming, this.running) null === (Wz = this.hid) || void 0 === Wz || Wz.start().catch((zz => {
              console.warn("Could not open motion controllers", zz)
            }));
            else null === (Xz = this.hid) || void 0 === Xz || Xz.stop(), this.processor.reset(), this.source = null, this.discardPending();
            this.publishStatus()
          }
        }, this.publishStatus = () => {
          Wz.o.Yg(jz, this.getStatus())
        };
        const zz = (() => {
            var zz;
            return "undefined" !== typeof navigator && window.isSecureContext && null !== (zz = navigator.hid) && void 0 !== zz ? zz : null
          })(),
          tz = yz("hid");
        this.hidBlocked = null !== zz && !tz, this.hid = zz && tz ? new Cz(zz, ((zz, tz, sz) => {
          this.lastHidReadingMs = performance.now(), this.feed(zz, tz, "player", sz)
        }), this.publishStatus) : null;
        const sz = yz("accelerometer") && yz("gyroscope");
        this.phoneBlocked = Gz() && !sz, this.phone = Gz() && sz ? new cz(((zz, tz, sz) => {
          performance.now() - this.lastHidReadingMs >= 500 && this.feed(zz, tz, "local", sz)
        }), this.publishStatus) : null, Wz.o.subscribe(Uz.h, this.syncWithSettings), oz.e.onConnectedPadsChanged((() => {
          this.syncWithSettings((0, Uz.k)()), this.publishStatus()
        })), this.syncWithSettings((0, Uz.k)())
      }
      isSupported() {
        return null !== this.hid || null !== this.phone
      }
      getStatus() {
        var zz, tz, sz, Fz;
        return {
          hidSupported: null !== this.hid,
          hidBlocked: this.hidBlocked,
          phoneSupported: null !== this.phone,
          phoneBlocked: this.phoneBlocked,
          controllers: null !== (zz = null === (tz = this.hid) || void 0 === tz ? void 0 : tz.getConnectedKinds()) && void 0 !== zz ? zz : [],
          phoneMotion: null !== (sz = null === (Fz = this.phone) || void 0 === Fz ? void 0 : Fz.getState()) && void 0 !== sz ? sz : "off",
          padConnected: oz.e.hasConnectedPad()
        }
      }
      async connectController() {
        return this.hid ? this.hid.request() : 0
      }
      async connectControllerIfNoneGranted() {
        this.hid && !await this.hid.hasGrantedController() && await this.hid.request()
      }
      async allowPhoneMotion() {
        var zz;
        await (null === (zz = this.phone) || void 0 === zz ? void 0 : zz.requestPermission())
      }
      drainLookDelta() {
        const zz = performance.now();
        zz - this.lastDrainMs > 500 && this.discardPending(), this.lastDrainMs = zz;
        const tz = {
          yawDeg: this.pendingYawDeg,
          pitchDeg: this.pendingPitchDeg
        };
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0;
        const sz = (0, Uz.k)();
        return sz.gyroAiming && (zz => {
          let {
            activation: tz,
            isHeld: sz,
            useButton: Fz,
            gyroButton: Wz
          } = zz;
          return "always" === tz || sz("aiming" === tz ? Fz : Wz)
        })({
          activation: sz.gyroActivation,
          isHeld: zz => vz.c.isButtonHeld(zz),
          useButton: (0, Oz.f)("use"),
          gyroButton: sz.gyroButton
        }) ? ((zz, tz) => ({
          mJ: -zz.yawDeg * tz * uz,
          eJ: -zz.pitchDeg * tz * uz
        }))(tz, sz.gyroSensitivity) : Az
      }
      discardPending() {
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0
      }
      injectMotion(zz, tz) {
        this.feed(zz, tz, "local", "injected")
      }
      getCalibration() {
        return this.processor.getCalibration()
      }
      feed(zz, tz, sz, Fz) {
        this.source !== Fz && (this.processor.reset(), this.source = Fz);
        const Wz = this.processor.process(zz, tz, sz);
        this.pendingYawDeg += Wz.yawDeg, this.pendingPitchDeg += Wz.pitchDeg
      }
    }
    let dz = null;
    const hz = () => (dz || (dz = new Mz), dz),
      Qz = () => {
        const [zz, tz] = (0, Fz.useState)((() => hz().getStatus()));
        return (0, Xz.g)(jz, tz), (0, Fz.useEffect)((() => {
          tz(hz().getStatus())
        }), []), zz
      }
  },
  8356: (zz, tz, sz) => {
    sz.d(tz, {
      B: () => Pz,
      b: () => Yz,
      c: () => vz,
      e: () => Fz,
      h: () => oz,
      k: () => Uz,
      m: () => Kz,
      q: () => Bz,
      u: () => gz,
      x: () => mz,
      y: () => xz
    });
    const Fz = zz => "dualShock4" === zz || "dualSense" === zz,
      Wz = 1356,
      Xz = 1406,
      Oz = [{
        vendorId: Wz,
        productId: 1476,
        kind: "dualShock4"
      }, {
        vendorId: Wz,
        productId: 2508,
        kind: "dualShock4"
      }, {
        vendorId: Wz,
        productId: 2976,
        kind: "dualShock4"
      }, {
        vendorId: Wz,
        productId: 3302,
        kind: "dualSense"
      }, {
        vendorId: Wz,
        productId: 3570,
        kind: "dualSense"
      }, {
        vendorId: Xz,
        productId: 8201,
        kind: "switchPro"
      }, {
        vendorId: Xz,
        productId: 8198,
        kind: "joyConLeft"
      }, {
        vendorId: Xz,
        productId: 8199,
        kind: "joyConRight"
      }],
      oz = Oz.map((zz => {
        let {
          vendorId: tz,
          productId: sz
        } = zz;
        return {
          vendorId: tz,
          productId: sz
        }
      })),
      vz = (zz, tz) => {
        var sz, Fz;
        return null !== (sz = null === (Fz = Oz.find((sz => sz.vendorId === zz && sz.productId === tz))) || void 0 === Fz ? void 0 : Fz.kind) && void 0 !== sz ? sz : null
      },
      Uz = {
        dualShock4: "DualShock 4",
        dualSense: "DualSense",
        switchPro: "Switch Pro Controller",
        joyConLeft: "Joy-Con (L)",
        joyConRight: "Joy-Con (R)"
      },
      Kz = {
        dualSense: 0,
        dualShock4: 0,
        switchPro: 0,
        joyConRight: 1,
        joyConLeft: 2
      },
      uz = 2e3 / 32767,
      Nz = 1 / 8192,
      bz = 936 / 13371,
      wz = (zz, tz, sz) => ({
        x: zz.getInt16(tz, !0) * sz,
        y: zz.getInt16(tz + 2, !0) * sz,
        z: zz.getInt16(tz + 4, !0) * sz
      }),
      Dz = zz => 0 === zz.x && 0 === zz.y && 0 === zz.z,
      gz = (zz, tz, sz) => null === tz ? null : "dualShock4" === zz ? 16 * (sz - tz & 65535) / 3 / 1e6 : (sz - tz >>> 0) / 3 / 1e6,
      Hz = (zz, tz) => "joyConRight" === tz ? {
        x: zz.y,
        y: -zz.z,
        z: -zz.x
      } : {
        x: -zz.y,
        y: zz.z,
        z: -zz.x
      },
      Bz = (zz, tz, sz, Wz) => Fz(zz) ? ((zz, tz, sz, Fz) => {
        const Wz = ((zz, tz, sz) => "dualShock4" === zz ? 1 === tz && sz >= 63 ? 0 : 17 === tz && sz >= 65 ? 2 : null : 1 === tz && sz >= 62 ? 0 : 49 === tz && sz >= 63 ? 1 : null)(zz, tz, sz.byteLength);
        if (null === Wz) return null;
        if (2976 === Fz && 1 === tz && 0 !== (4 & sz.getUint8(30))) return null;
        const Xz = Wz + ("dualShock4" === zz ? 12 : 15),
          Oz = wz(sz, Xz, uz),
          oz = wz(sz, Xz + 6, Nz);
        return Dz(Oz) && Dz(oz) ? null : {
          readings: [{
            gyro: Oz,
            accel: oz
          }],
          dtSec: null,
          sensorClock: "dualShock4" === zz ? sz.getUint16(Wz + 9, !0) : sz.getUint32(Wz + 27, !0)
        }
      })(zz, tz, sz, Wz) : ((zz, tz, sz) => {
        if (48 !== tz && 49 !== tz || sz.byteLength < 48) return null;
        const Fz = [];
        for (let Wz = 0; Wz < 3; Wz++) {
          const tz = wz(sz, 12 + 12 * Wz, 244e-6),
            Xz = wz(sz, 18 + 12 * Wz, bz);
          if (Dz(Xz) && Dz(tz)) return null;
          Fz.push({
            gyro: Hz(Xz, zz),
            accel: Hz(tz, zz)
          })
        }
        return {
          readings: Fz,
          dtSec: .005,
          sensorClock: null
        }
      })(zz, tz, sz),
      Pz = 1,
      rz = [0, 1, 64, 64, 0, 1, 64, 64],
      Yz = (zz, tz, sz) => new Uint8Array([15 & zz, ...rz, tz, ...sz]),
      xz = [{
        subcommand: 64,
        args: [1]
      }, {
        subcommand: 3,
        args: [48]
      }],
      mz = {
        dualShock4: [2, 5],
        dualSense: [5]
      }
  },
  7724: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Zz,
      g: () => Mz,
      j: () => Hz,
      k: () => bz.c,
      m: () => cz,
      p: () => Tz,
      r: () => Bz,
      t: () => jz,
      x: () => bz.h,
      B: () => bz.j,
      C: () => dz,
      F: () => bz.n,
      H: () => Jz
    });
    var Fz = sz(65),
      Wz = sz(30),
      Xz = sz(34),
      Oz = sz(1416),
      oz = sz(1269),
      vz = sz(7691),
      Uz = sz(7731),
      Kz = sz(7676),
      uz = sz(7665),
      Nz = sz(7739),
      bz = sz(1358),
      wz = sz(7674),
      Dz = sz(8180),
      gz = sz(4031);
    const Hz = zz => !zz.repeat && !(0, Dz.d)(zz.key),
      Bz = "PadHidesCursor";
    let Pz = !1;
    const rz = zz => {
        zz !== Pz && (Pz = zz, document.documentElement.classList.toggle(Bz, zz))
      },
      Yz = new class {
        constructor() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
        observe(zz) {
          let tz = !1,
            sz = !1;
          zz.values.forEach(((zz, Fz) => {
            const Wz = zz >= (this.buttonsDown[Fz] ? wz.Q : wz.P);
            Wz && !this.buttonsDown[Fz] && (tz = !0, sz = !0), this.buttonsDown[Fz] = Wz
          }));
          return [zz.leftStick, zz.rightStick].forEach(((zz, Fz) => {
            const Wz = this.stickAnchors[Fz];
            Math.hypot(zz.x, zz.y) < (Wz ? wz.Q : .3) ? this.stickAnchors[Fz] = null : (!Wz || Math.hypot(zz.x - Wz.x, zz.y - Wz.y) >= .3) && (this.stickAnchors[Fz] = {
              x: zz.x,
              y: zz.y
            }, tz = !0, sz ||= !Wz)
          })), tz && (this.lastActivityMs = zz.timestampMs), this.onlyMovedOn = tz && !sz, tz
        }
        wasOnlyMoveOn() {
          return this.onlyMovedOn
        }
        isHolding(zz) {
          return !(zz - this.lastActivityMs >= 1e3) && (this.buttonsDown.some((zz => zz)) || this.stickAnchors.some((zz => null !== zz)))
        }
        isStickOffRest() {
          return this.stickAnchors.some((zz => null !== zz))
        }
        reset() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
      };
    let xz = null,
      mz = !1;
    const Jz = () => mz;
    let Iz = null,
      Cz = !1,
      ez = null;
    const Zz = () => ez;
    let Gz = !1;
    const Tz = zz => {
        if (!Yz.observe(zz)) return !1;
        if (Gz && Yz.wasOnlyMoveOn() && !(0, bz.c)()) return !1;
        Gz = !1, mz = !1;
        const tz = !(0, bz.c)();
        return tz && (xz = zz, ez = !Pz && Cz && Iz ? {
          ...Iz
        } : null), Cz = !1, (0, bz.h)("gamepad"), rz(!0), (0, Nz.l)((0, vz.o)()), tz
      },
      cz = zz => !(0, bz.c)() || zz === xz,
      jz = () => {
        Yz.reset()
      },
      Az = () => {
        const zz = Wz.b.get("activeInputDevice"),
          tz = "gamepad" === zz ? uz.e.getActivePad() : null;
        return {
          device: zz,
          inGame: (0, oz.o)(),
          padMovesMouse: null !== tz && (0, Kz.i)(tz.id)
        }
      },
      yz = zz => {
        document.pointerLockElement ? Iz = null : (Iz ??= {
          x: 0,
          y: 0
        }, Iz.x = zz.clientX, Iz.y = zz.clientY)
      },
      Mz = () => {
        const zz = new gz.d,
          tz = tz => {
            zz.reset(), Gz = !1, (0, bz.h)(tz)
          },
          sz = zz => {
            if (zz.isTrusted) {
              if (zz instanceof KeyboardEvent) {
                if ((0, bz.g)(zz), !Hz(zz)) return;
                mz = !0
              }
              if (zz instanceof PointerEvent && "touch" === zz.pointerType) return Iz = null, void tz("touch");
              zz instanceof PointerEvent && (yz(zz), Cz = !0), ("pointerdown" !== zz.type || (zz => {
                let {
                  device: tz,
                  inGame: sz,
                  padMovesMouse: Fz
                } = zz;
                return !("gamepad" === tz && Fz && sz)
              })(Az())) && tz("keyboardMouse")
            }
          },
          Fz = zz => {
            zz.isTrusted && (Iz = null, tz("touch"))
          },
          Oz = zz => {
            zz.isTrusted && "touch" !== zz.pointerType && !zz.relatedTarget && (Iz = null)
          },
          oz = sz => {
            if (!sz.isTrusted || "touch" === sz.pointerType) return;
            yz(sz);
            const Fz = sz.movementX || 0,
              Xz = sz.movementY || 0;
            if (0 === Fz && 0 === Xz) return;
            if (Cz = !0, rz(!1), "keyboardMouse" === Wz.b.get("activeInputDevice")) return;
            const Oz = Yz.isHolding(sz.timeStamp),
              oz = Az(),
              vz = (zz => {
                let {
                  device: tz,
                  inGame: sz,
                  padMovesMouse: Fz,
                  padHolding: Wz
                } = zz;
                return ("gamepad" !== tz || !Fz) && "keyboardMouse" !== tz && (sz || !Wz)
              })({
                ...oz,
                inGame: oz.inGame && (0, Uz.d)(),
                padHolding: Oz
              });
            vz && zz.add(Fz, Xz, sz.timeStamp) && (tz("keyboardMouse"), Gz = Yz.isStickOffRest())
          },
          vz = zz => {
            rz("gamepad" === zz)
          },
          Kz = {
            capture: !0,
            passive: !0
          };
        window.addEventListener("keydown", sz, Kz), window.addEventListener("pointerdown", sz, Kz), window.addEventListener("wheel", sz, Kz), window.addEventListener("touchstart", Fz, Kz), window.addEventListener("pointermove", oz, Kz), window.addEventListener("pointerout", Oz, Kz);
        const uz = Xz.o.subscribe("appManagerUpdated|activeInputDevice", vz);
        return vz(Wz.b.get("activeInputDevice")), () => {
          window.removeEventListener("keydown", sz, Kz), window.removeEventListener("pointerdown", sz, Kz), window.removeEventListener("wheel", sz, Kz), window.removeEventListener("touchstart", Fz, Kz), window.removeEventListener("pointermove", oz, Kz), window.removeEventListener("pointerout", Oz, Kz), Iz = null, Xz.o.unsubscribe(uz), rz(!1)
        }
      },
      dz = () => {
        const [zz, tz] = (0, Fz.useState)(vz.o);
        return (0, Oz.g)(vz.e, (() => {
          tz((0, vz.o)())
        })), (0, Oz.g)(uz.c, (() => {
          tz((0, vz.o)())
        })), zz
      }
  },
  7699: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Fz,
      g: () => Wz
    });
    const Fz = ["xbox", "playstation", "nintendo", "steamdeck", "generic"],
      Wz = zz => Fz.includes(zz)
  },
  7731: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Uz,
      d: () => Kz,
      f: () => vz,
      i: () => oz
    });
    var Fz = sz(30),
      Wz = sz(1571),
      Xz = sz(1668);
    const Oz = new Map,
      oz = (zz, tz) => (Oz.has(zz) && console.warn(`Gameplay blocker "${zz}" registered twice; the newer one replaces it.`), Oz.set(zz, tz), () => {
        Oz.get(zz) === tz && Oz.delete(zz)
      }),
      vz = () => (0, Xz.c)(document.activeElement),
      Uz = function() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const [tz, sz] of Oz)
          if (!zz.includes(tz) && sz()) return tz;
        return null
      },
      Kz = function() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return "inGame" === Fz.b.get("gameState") && (!(0, Wz.r)() && (!vz() && null === Uz(zz)))
      }
  },
  7674: (zz, tz, sz) => {
    sz.d(tz, {
      A: () => uz,
      D: () => Pz,
      G: () => Gz,
      H: () => rz,
      I: () => Hz,
      K: () => gz,
      M: () => Uz,
      P: () => Nz,
      Q: () => bz,
      U: () => Wz,
      V: () => Fz,
      W: () => xz,
      X: () => ez,
      _: () => Tz,
      ab: () => Yz,
      c: () => cz,
      f: () => Zz,
      h: () => Kz,
      k: () => vz,
      o: () => oz,
      r: () => Jz,
      t: () => Bz,
      u: () => mz,
      y: () => Xz
    });
    const Fz = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "View", "Menu", "LS", "RS", "Up", "Down", "Left", "Right", "Home"],
      Wz = Fz.length,
      Xz = function() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return {
          values: new Array(Wz).fill(0),
          leftStick: {
            x: 0,
            y: 0
          },
          rightStick: {
            x: 0,
            y: 0
          },
          timestampMs: zz
        }
      },
      Oz = Object.fromEntries(Fz.map(((zz, tz) => [zz, tz]))),
      oz = zz => Oz[zz],
      vz = function(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .95;
        const Fz = Math.hypot(zz.x, zz.y);
        if (Fz <= tz) return {
          x: 0,
          y: 0
        };
        const Wz = Math.min(1, (Fz - tz) / Math.max(1e-4, sz - tz));
        return {
          x: zz.x / Fz * Wz,
          y: zz.y / Fz * Wz
        }
      },
      Uz = ["exponential", "linear", "boost"],
      Kz = (zz, tz) => {
        const sz = Math.hypot(zz.x, zz.y);
        if (0 === sz) return {
          x: 0,
          y: 0
        };
        const Fz = ((zz, tz) => {
          const sz = Math.max(0, Math.min(1, zz));
          return "linear" === tz ? sz : sz * sz
        })(sz, tz);
        return {
          x: zz.x / sz * Fz,
          y: zz.y / sz * Fz
        }
      },
      uz = .5,
      Nz = .3,
      bz = .2,
      wz = oz("LT"),
      Dz = oz("RT"),
      gz = zz => zz === wz || zz === Dz,
      Hz = (zz, tz) => {
        const sz = oz(tz);
        return gz(sz) ? zz[sz] > .35 : zz[sz] >= uz
      },
      Bz = (zz, tz) => zz.map(((zz, sz) => gz(sz) ? tz[sz] ? zz > .35 : zz >= .55 : zz >= uz)),
      Pz = ["Up", "Down", "Left", "Right"],
      rz = zz => Pz.includes(zz),
      Yz = function(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
        return Math.hypot(zz.x, zz.y) < tz ? null : Math.abs(zz.x) > Math.abs(zz.y) ? zz.x > 0 ? "Right" : "Left" : zz.y > 0 ? "Down" : "Up"
      },
      xz = {
        initialDelayMs: 350,
        intervalMs: 120
      },
      mz = {
        initialDelayMs: 350,
        intervalMs: 150
      },
      Jz = ["default", "slow", "off"],
      Iz = 800,
      Cz = 250,
      ez = (zz, tz) => "off" === tz ? null : "slow" === tz ? {
        initialDelayMs: Math.max(zz.initialDelayMs, Iz),
        intervalMs: Math.max(zz.intervalMs, Cz)
      } : zz;
    class Zz {
      constructor(zz) {
        this.readTiming = zz, this.po = !1, this.timing = null, this.nextFireMs = 0
      }
      update(zz, tz) {
        return zz ? this.po ? !!(this.timing && tz >= this.nextFireMs) && (this.nextFireMs = tz + this.timing.intervalMs, !0) : (this.po = !0, this.timing = this.readTiming(), this.nextFireMs = tz + (null !== (sz = null === (Fz = this.timing) || void 0 === Fz ? void 0 : Fz.initialDelayMs) && void 0 !== sz ? sz : 0), !0) : (this.po = !1, !1);
        var sz, Fz
      }
      reset() {
        this.po = !1
      }
    }
    const Gz = {
        initialDelayMs: 350,
        intervalMs: 80
      },
      Tz = {
        initialDelayMs: 400,
        intervalMs: 90
      };
    class cz {
      constructor(zz) {
        this.timer = zz, this.direction = null
      }
      update(zz, tz) {
        return zz !== this.direction && (this.timer.reset(), this.direction = zz), this.timer.update(null !== zz, tz) ? zz : null
      }
      reset() {
        this.timer.reset(), this.direction = null
      }
    }
  },
  8218: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Wz,
      f: () => Xz
    });
    let Fz = -1 / 0;
    const Wz = () => {
        Fz = performance.now()
      },
      Xz = zz => performance.now() - Fz < zz
  },
  8186: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Oz,
      g: () => Xz
    });
    var Fz = sz(7691),
      Wz = sz(7674);
    const Xz = zz => (0, Wz.X)(zz, (0, Fz.k)().buttonRepeat),
      Oz = zz => new Wz.f((() => Xz(zz)))
  },
  7713: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => vz,
      e: () => Xz,
      h: () => oz
    });
    var Fz = sz(34),
      Wz = sz(7691);
    const Xz = (zz, tz) => "OpenShop" === zz ? "shop" === tz : "OpenLobbyLeaderboard" !== zz || "leaderboard" === tz;
    let Oz = !1;
    const oz = zz => {
        zz !== Oz && (Oz = zz, Fz.o.Yg(Wz.e, (0, Wz.k)()))
      },
      vz = () => ((zz, tz) => "shop" === zz && tz ? "shop" : "leaderboard")((0, Wz.k)().leaderboardButton, Oz)
  },
  7707: (zz, tz, sz) => {
    sz.d(tz, {
      $: () => Pz,
      B: () => vz,
      E: () => oz,
      F: () => Yz,
      I: () => Nz,
      L: () => bz,
      N: () => uz,
      O: () => rz,
      R: () => Uz,
      U: () => Hz,
      Y: () => Cz,
      c: () => Az,
      db: () => Dz,
      g: () => Mz,
      gb: () => gz,
      i: () => ez,
      jb: () => wz,
      k: () => Oz,
      lb: () => Bz,
      nb: () => Tz,
      o: () => Iz,
      ob: () => Xz,
      p: () => mz,
      sb: () => xz,
      t: () => cz,
      u: () => jz,
      ub: () => yz,
      y: () => Kz,
      yb: () => Jz
    });
    var Fz = sz(7687),
      Wz = sz(7674);
    const Xz = {
        min: 25,
        max: 500,
        step: 5
      },
      Oz = {
        min: 25,
        max: 100,
        step: 5
      },
      oz = {
        min: 0,
        max: .4,
        step: .01
      },
      vz = {
        min: 25,
        max: 300,
        step: 5
      },
      Uz = {
        min: .5,
        max: 6,
        step: .1
      },
      Kz = (zz, tz) => {
        if (!Number.isFinite(zz)) return tz.min;
        const sz = tz.min + Math.round((zz - tz.min) / tz.step) * tz.step,
          Fz = Math.min(tz.max, Math.max(tz.min, sz));
        return Math.round(1e3 * Fz) / 1e3
      },
      uz = zz => `${Math.round(zz)}%`,
      Nz = zz => uz(100 * zz),
      bz = zz => `${zz.toFixed(1)}\xd7`,
      wz = [{
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
      Dz = [{
        value: "exponential",
        labelKey: "controller:settingsCurveExponential"
      }, {
        value: "linear",
        labelKey: "controller:settingsCurveLinear"
      }, {
        value: "boost",
        labelKey: "controller:settingsCurveBoost"
      }],
      gz = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "focus",
        labelKey: "controller:settingsMenuNavFocus"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      Hz = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "slot",
        labelKey: "controller:settingsInventoryNavSlot"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      Bz = [{
        value: "wheel",
        labelKey: "controller:settingsQuickChatWheel"
      }, {
        value: "off",
        labelKey: "controller:settingsQuickChatOff"
      }],
      Pz = [{
        value: "shop",
        labelKey: "controller:settingsLeaderboardButtonShop"
      }, {
        value: "leaderboard",
        labelKey: "controller:settingsLeaderboardButtonLeaderboard"
      }],
      rz = [{
        value: "always",
        labelKey: "controller:settingsGyroAlways"
      }, {
        value: "aiming",
        labelKey: "controller:settingsGyroWhileAiming"
      }, {
        value: "button",
        labelKey: "controller:settingsGyroWhileButton"
      }],
      Yz = [{
        value: "tapHold",
        labelKey: "controller:settingsEmoteButtonTapHold"
      }, {
        value: "wheel",
        labelKey: "controller:settingsEmoteButtonWheel"
      }],
      xz = [{
        value: "toggle",
        labelKey: "controller:settingsSneakToggle"
      }, {
        value: "hold",
        labelKey: "controller:settingsSneakHold"
      }],
      mz = [{
        value: "default",
        labelKey: "controller:settingsButtonRepeatDefault"
      }, {
        value: "slow",
        labelKey: "controller:settingsButtonRepeatSlow"
      }, {
        value: "off",
        labelKey: "controller:settingsButtonRepeatOff"
      }],
      Jz = [{
        value: "short",
        labelKey: "controller:settingsTapHoldShort"
      }, {
        value: "medium",
        labelKey: "controller:settingsTapHoldMedium"
      }, {
        value: "long",
        labelKey: "controller:settingsTapHoldLong"
      }],
      Iz = [{
        value: "hold",
        labelKey: "controller:settingsAttackHold"
      }, {
        value: "toggle",
        labelKey: "controller:settingsAttackToggle"
      }],
      Cz = {
        southpaw: "controller:settingsLayoutSouthpaw",
        triggersSwapped: "controller:settingsLayoutTriggersSwapped"
      },
      ez = {
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
      Zz = {
        gameplay: "controller:settingsGroupGameplay",
        menu: "controller:settingsGroupMenus",
        inventory: "controller:settingsGroupInventory",
        keyboard: "controller:settingsGroupKeyboard"
      },
      Gz = [{
        kind: "fixed",
        stick: "move",
        labelKey: "controller:settingsActionMove"
      }, {
        kind: "fixed",
        stick: "look",
        labelKey: "controller:settingsActionLook"
      }],
      Tz = Fz.d.map((zz => {
        let {
          group: tz,
          actions: sz
        } = zz;
        const Fz = sz.map((zz => ({
          kind: "action",
          action: zz
        })));
        return {
          titleKey: Zz[tz],
          rows: "gameplay" === tz ? [...Gz, ...Fz] : Fz
        }
      })),
      cz = Wz.V.filter((zz => "Home" !== zz)),
      jz = 1e4;
    class Az {
      constructor(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
        this.cancelButton = zz, this.openButton = tz, this.accepts = sz, this.startMs = null, this.ignoredUntilMs = new Map, this.cancelDownAtMs = null
      }
      update(zz, tz) {
        var sz;
        this.updateIgnored(zz, tz);
        const Fz = tz - (null !== (sz = this.startMs) && void 0 !== sz ? sz : tz) >= 250;
        for (const Wz of cz)
          if (Wz !== this.cancelButton && Fz && !this.ignoredUntilMs.has(Wz) && zz.wasPressed(Wz) && this.accepts(Wz)) return {
            kind: "bind",
            button: Wz
          };
        if (this.ignoredUntilMs.has(this.cancelButton)) return null;
        if (zz.wasPressed(this.cancelButton)) {
          if (!this.accepts(this.cancelButton)) return {
            kind: "cancel"
          };
          this.cancelDownAtMs = tz
        }
        return null === this.cancelDownAtMs ? null : zz.isHeld(this.cancelButton) && tz - this.cancelDownAtMs >= 700 ? (this.cancelDownAtMs = null, {
          kind: "bind",
          button: this.cancelButton
        }) : zz.wasReleased(this.cancelButton) ? (this.cancelDownAtMs = null, {
          kind: "cancel"
        }) : null
      }
      getBindHoldProgress(zz) {
        return null === this.cancelDownAtMs ? 0 : Math.min(1, (zz - this.cancelDownAtMs) / 700)
      }
      updateIgnored(zz, tz) {
        if (null === this.startMs) {
          this.startMs = tz;
          for (const tz of cz) zz.isDown(tz) && this.ignoredUntilMs.set(tz, 1 / 0);
          this.openButton && !this.ignoredUntilMs.has(this.openButton) && this.ignoredUntilMs.set(this.openButton, tz + 250)
        }
        for (const [sz, Fz] of this.ignoredUntilMs) {
          const Wz = zz.isDown(sz);
          Fz === 1 / 0 ? Wz || sz !== this.openButton ? Wz || this.ignoredUntilMs.delete(sz) : this.ignoredUntilMs.set(sz, tz + 250) : tz >= Fz ? this.ignoredUntilMs.delete(sz) : Wz && this.ignoredUntilMs.set(sz, 1 / 0)
        }
      }
    }
    const yz = 6e3;
    class Mz {
      constructor() {
        this.downAtMs = null, this.pressesAtMs = []
      }
      update(zz, tz) {
        let {
          pressed: sz,
          po: Fz
        } = zz;
        if (sz) {
          const zz = this.pressesAtMs.at(-1);
          if (this.pressesAtMs = void 0 !== zz && tz - zz < 1500 ? [...this.pressesAtMs, tz] : [tz], this.pressesAtMs.length >= 3) return 1
        }
        return Fz ? (this.downAtMs ??= tz, Math.min(1, (tz - this.downAtMs) / 1500)) : (this.downAtMs = null, 0)
      }
    }
  },
  4644: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Xz,
      g: () => Oz
    });
    var Fz = sz(65);
    const Wz = new WeakMap,
      Xz = zz => {
        var tz;
        const sz = zz.closest("[data-pad-slider]");
        return sz && null !== (tz = Wz.get(sz)) && void 0 !== tz ? tz : null
      },
      Oz = (zz, tz) => {
        const sz = (0, Fz.useRef)(tz);
        sz.current = tz, (0, Fz.useEffect)((() => {
          if (zz.current) return ((zz, tz) => (Wz.set(zz, tz), () => {
            Wz.get(zz) === tz && Wz.delete(zz)
          }))(zz.current, {
            adjust: zz => {
              sz.current.adjust(zz)
            },
            setFraction: zz => {
              sz.current.setFraction(zz)
            },
            endDrag: () => {
              sz.current.endDrag()
            }
          })
        }), [zz])
      }
  },
  8246: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Xz,
      d: () => Wz
    });
    var Fz = sz(34);
    const Wz = "localBlockBroken";

    function Xz() {
      return {
        onPlayerChangeBlock(zz, tz, sz, Xz, Oz, oz) {
          "Air" === oz && Fz.o.Yg(Wz)
        }
      }
    }
  },
  7743: (zz, tz, sz) => {
    var Fz = {
      "./nintendo/A.svg": 7751,
      "./nintendo/B.svg": 7754,
      "./nintendo/Down.svg": 7757,
      "./nintendo/Home.svg": 7760,
      "./nintendo/LB.svg": 7765,
      "./nintendo/LS.svg": 7767,
      "./nintendo/LT.svg": 7775,
      "./nintendo/Left.svg": 7783,
      "./nintendo/LeftStick.svg": 7786,
      "./nintendo/Menu.svg": 7790,
      "./nintendo/RB.svg": 7799,
      "./nintendo/RS.svg": 7807,
      "./nintendo/RT.svg": 7813,
      "./nintendo/Right.svg": 7817,
      "./nintendo/RightStick.svg": 7823,
      "./nintendo/Up.svg": 7832,
      "./nintendo/View.svg": 7836,
      "./nintendo/X.svg": 7845,
      "./nintendo/Y.svg": 7854,
      "./playstation/A.svg": 7859,
      "./playstation/B.svg": 7867,
      "./playstation/Down.svg": 7873,
      "./playstation/Home.svg": 7881,
      "./playstation/LB.svg": 7889,
      "./playstation/LS.svg": 7891,
      "./playstation/LT.svg": 7897,
      "./playstation/Left.svg": 7901,
      "./playstation/LeftStick.svg": 7908,
      "./playstation/Menu.svg": 7911,
      "./playstation/RB.svg": 7917,
      "./playstation/RS.svg": 7923,
      "./playstation/RT.svg": 7932,
      "./playstation/Right.svg": 7940,
      "./playstation/RightStick.svg": 7944,
      "./playstation/Up.svg": 7949,
      "./playstation/View.svg": 7951,
      "./playstation/X.svg": 7957,
      "./playstation/Y.svg": 7964,
      "./steamdeck/A.svg": 7972,
      "./steamdeck/B.svg": 7975,
      "./steamdeck/Down.svg": 7981,
      "./steamdeck/Home.svg": 7983,
      "./steamdeck/LB.svg": 7989,
      "./steamdeck/LS.svg": 7998,
      "./steamdeck/LT.svg": 8e3,
      "./steamdeck/Left.svg": 8004,
      "./steamdeck/LeftStick.svg": 8007,
      "./steamdeck/Menu.svg": 8011,
      "./steamdeck/RB.svg": 8018,
      "./steamdeck/RS.svg": 8025,
      "./steamdeck/RT.svg": 8034,
      "./steamdeck/Right.svg": 8036,
      "./steamdeck/RightStick.svg": 8042,
      "./steamdeck/Up.svg": 8051,
      "./steamdeck/View.svg": 8056,
      "./steamdeck/X.svg": 8064,
      "./steamdeck/Y.svg": 8072,
      "./xbox/A.svg": 8081,
      "./xbox/B.svg": 8090,
      "./xbox/Down.svg": 8096,
      "./xbox/Home.svg": 8101,
      "./xbox/LB.svg": 8106,
      "./xbox/LS.svg": 8108,
      "./xbox/LT.svg": 8115,
      "./xbox/Left.svg": 8124,
      "./xbox/LeftStick.svg": 8127,
      "./xbox/Menu.svg": 8129,
      "./xbox/RB.svg": 8131,
      "./xbox/RS.svg": 8136,
      "./xbox/RT.svg": 8143,
      "./xbox/Right.svg": 8148,
      "./xbox/RightStick.svg": 8155,
      "./xbox/Up.svg": 8160,
      "./xbox/View.svg": 8163,
      "./xbox/X.svg": 8165,
      "./xbox/Y.svg": 8173
    };

    function Wz(zz) {
      var tz = Xz(zz);
      return sz(tz)
    }

    function Xz(zz) {
      if (!sz.o(Fz, zz)) {
        var tz = new Error("Cannot find module '" + zz + "'");
        throw tz.code = "MODULE_NOT_FOUND", tz
      }
      return Fz[zz]
    }
    Wz.keys = function() {
      return Object.keys(Fz)
    }, Wz.resolve = Xz, zz.exports = Wz, Wz.id = 7743
  },
  7751: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/A.926fb88933484dfbde14.svg"
  },
  7754: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/B.9f5ec099f78f84e44427.svg"
  },
  7757: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  7760: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  7765: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/LB.3a20b15927b55d5d8b60.svg"
  },
  7767: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  7775: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/LT.9fdc5e69011b9d41f50a.svg"
  },
  7783: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  7786: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  7790: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Menu.c903a662eb685211e52e.svg"
  },
  7799: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/RB.bba470ddb76ceec5d168.svg"
  },
  7807: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  7813: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/RT.e5a9fbcc3c79550111ca.svg"
  },
  7817: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  7823: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  7832: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  7836: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/View.0c9378b5d720a636d50d.svg"
  },
  7845: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/X.c9377519af94e6dce1d7.svg"
  },
  7854: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Y.62d8c17731dd2e172426.svg"
  },
  7859: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/A.958a6de9474f8d0c9caf.svg"
  },
  7867: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/B.d05958bfa88a1162b47a.svg"
  },
  7873: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Down.db68fb3980768eb54671.svg"
  },
  7881: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  7889: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/LB.37a3c5128c958ec2a0c2.svg"
  },
  7891: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/LS.15b0cc5bf3f2fe7bbd8b.svg"
  },
  7897: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/LT.5412ae5222c69f8c833f.svg"
  },
  7901: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Left.4457b2895ce94a5df32e.svg"
  },
  7908: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  7911: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Menu.1e8427f8133c9d456c53.svg"
  },
  7917: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/RB.c96c4aa2590209e930c7.svg"
  },
  7923: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/RS.8d70d147cf1ab136e845.svg"
  },
  7932: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/RT.1e4691bb5a7c049693df.svg"
  },
  7940: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Right.a1e101413040c540b879.svg"
  },
  7944: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  7949: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Up.7544a65ad4f611a55775.svg"
  },
  7951: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/View.003cae39de89cae0b9d8.svg"
  },
  7957: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/X.d88b6e62dd8fb4bda32a.svg"
  },
  7964: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Y.428d3e70775877892f82.svg"
  },
  7972: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  7975: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  7981: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  7983: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Home.ea8b009cfa9562aa644e.svg"
  },
  7989: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/LB.f283d355d22fc107d6d6.svg"
  },
  7998: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8e3: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/LT.13e66c122e7ee04bb876.svg"
  },
  8004: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8007: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8011: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Menu.90fc4e918900eb5062a0.svg"
  },
  8018: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/RB.918a7f16dc054d96b6f3.svg"
  },
  8025: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8034: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/RT.a0523211130959598bed.svg"
  },
  8036: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8042: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8051: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8056: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/View.0bc952e292c28c3baac2.svg"
  },
  8064: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8072: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  },
  8081: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8090: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8096: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8101: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Home.8898f76b20962fe52ab7.svg"
  },
  8106: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/LB.689ba3703ae248f2e4cc.svg"
  },
  8108: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8115: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/LT.9c2d10d335ab5c590525.svg"
  },
  8124: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8127: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8129: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Menu.9e485791ea97009871ca.svg"
  },
  8131: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/RB.7ee5ce48dd551f993f80.svg"
  },
  8136: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8143: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/RT.903ecadc55a9e9e00f07.svg"
  },
  8148: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8155: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8160: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8163: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/View.3c5eeb34f0413bde4a65.svg"
  },
  8165: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8173: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);