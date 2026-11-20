export const id = 28;
export const ids = [28];
export const modules = {
  4688: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => ek,
      i: () => vk,
      l: () => yk,
      m: () => Wk
    });
    var Rk = Bk(61),
      tk = Bk(4696),
      ak = Bk(4121),
      Xk = Bk(1312),
      bk = Bk(4712),
      wk = Bk(1020),
      dk = Bk.n(wk),
      sk = Bk(1300),
      Vk = Bk(1650),
      Jk = Bk(4717),
      Ak = Bk(1069);

    function ek(kk) {
      let {
        label: Fk,
        onClick: Bk,
        checked: Rk,
        circleInfoText: tk,
        className: bk,
        disabled: wk,
        note: sk
      } = kk;
      return (0, Ak.jsxs)("div", {
        "aria-disabled": wk || void 0,
        "data-pad-focusable": !0,
        className: dk()("SettingBox CheckboxContainer", {
          [bk]: bk,
          SettingBoxDisabled: wk
        }),
        onClick: () => {
          wk || Bk(!Rk)
        },
        children: [(0, Ak.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, Ak.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, Ak.jsx)(ak.c, {
              className: "SettingsCheckbox",
              checked: Rk,
              disabled: wk,
              onChange: () => {}
            })
          }), (0, Ak.jsxs)("div", {
            className: "CheckboxText",
            children: [Fk, tk && (0, Ak.jsx)("span", {
              onClick: kk => kk.stopPropagation(),
              children: (0, Ak.jsx)(Xk.b, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: tk
              })
            })]
          })]
        }), sk && (0, Ak.jsx)("div", {
          className: "SettingNote",
          children: sk
        })]
      })
    }

    function yk(kk) {
      let {
        name: Fk,
        onChange: Bk,
        min: tk,
        max: ak,
        step: bk,
        initValue: wk,
        circleInfoText: sk,
        format: Vk,
        className: Jk,
        padStep: ek,
        disabled: yk = !1,
        selectableMax: fk,
        cappedNote: Wk,
        onChangeComplete: vk
      } = kk;
      const [ik, Yk] = (0, Rk.useState)(wk), Lk = (0, Rk.useRef)(wk);
      (0, Rk.useEffect)((() => {
        Lk.current = wk, Yk(wk)
      }), [wk]);
      const Ok = void 0 !== fk && fk < ak,
        Ek = Ok ? {
          "--slider-selectable": (fk - tk) / (ak - tk)
        } : void 0;
      return (0, Ak.jsxs)("div", {
        className: dk()("SettingBox SettingsSliderDiv", {
          [Jk]: Jk,
          SettingBoxDisabled: yk,
          SliderCapped: Ok
        }),
        style: Ek,
        children: [(0, Ak.jsxs)("div", {
          className: "SliderText",
          children: [`${Fk}: ${Vk?Vk(ik):ik}`, sk && (0, Ak.jsx)(Xk.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: sk
          })]
        }), (0, Ak.jsx)("div", {
          className: "SliderDiv",
          children: (0, Ak.jsx)(mk, {
            value: ik,
            min: tk,
            max: ak,
            step: bk,
            onChange: kk => {
              if (Ok && kk >= fk && ik === fk) return;
              const Fk = Ok ? Math.min(kk, fk) : kk;
              Lk.current = Fk, Yk(Fk), Bk(Fk)
            },
            onChangeComplete: vk && (() => {
              vk(Lk.current)
            }),
            format: Vk,
            padStep: ek,
            disabled: yk
          })
        }), Ok && Wk && (0, Ak.jsx)("div", {
          className: "SettingNote",
          children: Wk
        })]
      })
    }
    const fk = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function mk(kk) {
      var Fk;
      let {
        value: Bk,
        min: ak,
        max: Xk,
        step: bk,
        onChange: wk,
        orientation: dk,
        reverse: sk,
        setIsChanging: Vk,
        tooltip: ek,
        labels: yk,
        handleLabel: mk,
        format: Wk,
        onChangeStart: vk,
        onChangeComplete: ik,
        padStep: Yk,
        disabled: Lk = !1
      } = kk;
      const Ok = (0, Rk.useRef)(null),
        Ek = (0, Rk.useRef)(null);
      (0, Rk.useLayoutEffect)((() => {
        var kk, Fk, Bk;
        const Rk = null !== (kk = null === (Fk = Ok.current) || void 0 === Fk ? void 0 : Fk.querySelector(".rangeslider")) && void 0 !== kk ? kk : null;
        null === Rk || void 0 === Rk || Rk.setAttribute("data-pad-slider", ""), null === Rk || void 0 === Rk || Rk.setAttribute("data-pad-focusable", ""), null === Rk || void 0 === Rk || null === (Bk = Rk.querySelector(".rangeslider__handle")) || void 0 === Bk || Bk.setAttribute("data-pad-slider-handle", ""), Ek.current = Rk
      }), []), (0, Rk.useLayoutEffect)((() => {
        var kk, Fk;
        Lk ? null === (kk = Ek.current) || void 0 === kk || kk.setAttribute("aria-disabled", "true") : null === (Fk = Ek.current) || void 0 === Fk || Fk.removeAttribute("aria-disabled")
      }), [Lk]);
      const Sk = (null !== (Fk = String(bk).split(".")[1]) && void 0 !== Fk ? Fk : "").length,
        Nk = kk => {
          const Fk = Number((Math.round((kk - ak) / bk) * bk + ak).toFixed(Sk));
          return Math.min(Xk, Math.max(ak, Fk))
        },
        Hk = (0, Rk.useRef)(ik);
      Hk.current = ik, (0, Rk.useEffect)((() => {
        const kk = Ok.current;
        if (!kk) return;
        const Fk = kk => {
          var Fk;
          fk.has(kk.key) && (null === (Fk = Hk.current) || void 0 === Fk || Fk.call(Hk))
        };
        return kk.addEventListener("keyup", Fk), () => {
          kk.removeEventListener("keyup", Fk)
        }
      }), []);
      const uk = (0, Rk.useRef)(!1);
      return (0, Jk.i)(Ek, {
        adjust: kk => {
          if (Lk) return;
          const Fk = null !== Yk && void 0 !== Yk ? Yk : Math.max(bk, Math.round((Xk - ak) / 20 / bk) * bk),
            Rk = Nk(Bk + kk * Fk * (sk ? -1 : 1));
          Rk !== Bk && (null === vk || void 0 === vk || vk(), wk(Rk), null === ik || void 0 === ik || ik())
        },
        setFraction: kk => {
          if (Lk) return;
          const Fk = Nk(ak + (sk ? 1 - kk : kk) * (Xk - ak));
          Fk !== Bk && (uk.current || (uk.current = !0, null === vk || void 0 === vk || vk()), wk(Fk))
        },
        endDrag: () => {
          uk.current && (uk.current = !1, null === ik || void 0 === ik || ik())
        }
      }), (0, Ak.jsx)("div", {
        ref: Ok,
        style: {
          display: "contents"
        },
        children: (0, Ak.jsx)(tk.d, {
          value: Bk,
          min: ak,
          max: Xk,
          step: bk,
          onChange: wk,
          orientation: dk,
          reverse: sk,
          tooltip: ek,
          labels: yk,
          handleLabel: mk,
          format: Wk,
          onChangeStart: () => {
            null === vk || void 0 === vk || vk(), null === Vk || void 0 === Vk || Vk(!0)
          },
          onChangeComplete: () => {
            null === Vk || void 0 === Vk || Vk(!1), null === ik || void 0 === ik || ik()
          }
        })
      })
    }
    async function Wk() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const Fk = sk.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: "",
        unlockPointerKey: kk
      });
      !0 === await Fk.getResult() && (0, Vk.reloadBloxd)()
    }

    function vk(kk) {
      let {
        label: Fk,
        options: Bk,
        value: Rk,
        onChange: tk,
        circleInfoText: ak
      } = kk;
      return (0, Ak.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, Ak.jsxs)("div", {
          className: "SliderText",
          children: [Fk, ak && (0, Ak.jsx)(Xk.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: ak
          })]
        }), (0, Ak.jsx)(bk.b, {
          ariaLabel: Fk,
          options: Bk,
          value: Rk,
          onChange: tk
        })]
      })
    }
  },
  4712: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Xk
    });
    var Rk = Bk(1020),
      tk = Bk.n(Rk),
      ak = Bk(1069);

    function Xk(kk) {
      let {
        options: Fk,
        value: Bk,
        onChange: Rk,
        ariaLabel: Xk,
        className: bk,
        reselectable: wk = !1,
        keepsFocus: dk = !1
      } = kk;
      return (0, ak.jsx)("div", {
        className: tk()("SegmentedToggle", bk),
        role: "group",
        "aria-label": Xk,
        children: Fk.map((kk => {
          const Fk = kk.value === Bk;
          return (0, ak.jsx)("button", {
            type: "button",
            "aria-pressed": Fk,
            "aria-label": kk.ariaLabel,
            title: kk.ariaLabel,
            className: tk()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: Fk
            }),
            onMouseDown: dk ? kk => {
              kk.preventDefault()
            } : void 0,
            onClick: () => {
              Fk && !wk || Rk(kk.value)
            },
            children: kk.label
          }, kk.value)
        }))
      })
    }
  },
  7831: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => tk,
      h: () => ak,
      l: () => Jk,
      m: () => Vk,
      n: () => dk,
      p: () => bk,
      s: () => Rk,
      w: () => Ak,
      y: () => ek
    });
    const Rk = ["menuConfirm", "menuBack", "menuTabPrevious", "menuTabNext", "menuPageUp", "menuPageDown", "menuSecondary", "menuToggleCursor"],
      tk = [{
        group: "gameplay",
        actions: ["jump", "sneak", "sneakToggle", "sprint", "attack", "use", "hotbarPrevious", "hotbarNext", "inventory", "actionButton", "perspective", "pickBlock", "drop", "emoteWheel", "chat", "pause", "leaderboard"]
      }, {
        group: "menu",
        actions: Rk
      }, {
        group: "inventory",
        actions: ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryClose", "inventoryPanelPrevious", "inventoryPanelNext", "inventoryDrop", "inventoryHotbarSwap"]
      }, {
        group: "keyboard",
        actions: ["keyboardType", "keyboardBackspace", "keyboardSpace", "keyboardCaretLeft", "keyboardCaretRight", "keyboardShift", "keyboardSymbols", "keyboardSubmit", "keyboardClose", "keyboardChannel"]
      }],
      ak = {
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
      Xk = ["pickBlock", "perspective"],
      bk = kk => Xk.includes(kk) ? Xk : [kk],
      wk = Object.fromEntries(tk.flatMap((kk => {
        let {
          group: Fk,
          actions: Bk
        } = kk;
        return Bk.map((kk => [kk, Fk]))
      }))),
      dk = kk => wk[kk],
      sk = {
        pause: ["menu"],
        leaderboard: ["menu"],
        inventory: ["menu"],
        menuPageUp: ["inventory"],
        menuPageDown: ["inventory"]
      },
      Vk = kk => {
        var Fk;
        return [dk(kk), ...null !== (Fk = sk[kk]) && void 0 !== Fk ? Fk : []]
      },
      Jk = new Set(["menu", "inventory", "keyboard"]),
      Ak = {
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
      ek = new Set(["forward", "backward", "left", "right"])
  },
  7826: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      D: () => sk,
      E: () => Sk,
      F: () => Mk,
      d: () => Wk,
      e: () => Yk,
      f: () => Jk,
      g: () => Ak,
      k: () => Uk,
      l: () => uk,
      o: () => Hk,
      r: () => ik,
      t: () => gk,
      u: () => Ek,
      x: () => vk,
      z: () => Nk
    });
    var Rk = Bk(7831),
      tk = Bk(7840),
      ak = Bk(7815),
      Xk = Bk(7852);
    const bk = kk => "pickBlock" === kk ? "perspective" : kk,
      wk = (kk, Fk) => {
        var Bk;
        const tk = bk(Fk);
        return null !== (Bk = kk[tk]) && void 0 !== Bk ? Bk : Rk.h[tk]
      },
      dk = new Map([
        ["menuConfirm", "menuBack"],
        ["inventoryPrimary", "inventoryClose"],
        ["keyboardType", "keyboardClose"]
      ].flatMap((kk => {
        let [Fk, Bk] = kk;
        return [
          [Fk, Bk],
          [Bk, Fk]
        ]
      }))),
      sk = (kk, Fk) => null !== kk && void 0 !== kk ? kk : "nintendo" === Fk,
      Vk = kk => sk((0, tk.g)().swapConfirmBack, (0, tk.h)()) && dk.get(kk) || kk,
      Jk = kk => wk((0, tk.g)().bindings, Vk(kk)),
      Ak = kk => Rk.h[Vk(kk)],
      ek = Object.keys(Rk.h),
      yk = kk => "gameplay" === (0, Rk.n)(kk) ? ["gameplay"] : (0, Rk.m)(kk),
      fk = (kk, Fk) => {
        const Bk = yk(Fk);
        return yk(kk).some((kk => Bk.includes(kk)))
      },
      mk = (kk, Fk, Bk) => {
        const tk = wk(kk, Fk),
          Xk = new Set((0, Rk.p)(Fk)),
          dk = [...Xk];
        for (let Rk = dk.pop(); Rk; Rk = dk.pop())
          for (const Fk of ek) {
            const ak = wk(kk, Fk);
            Xk.has(Fk) || ak !== Bk && ak !== tk || !fk(Rk, Fk) || (Xk.add(Fk), dk.push(Fk))
          }
        const sk = {
          ...kk
        };
        for (const Vk of Xk) {
          const Fk = wk(kk, Vk) === tk ? Bk : tk,
            Xk = (0, Rk.m)(Vk).some((kk => Rk.l.has(kk)));
          if ((0, ak.H)(Fk) && Xk) return null;
          sk[bk(Vk)] = Fk
        }
        for (const ak of Object.keys(sk)) sk[ak] === Rk.h[ak] && delete sk[ak];
        return sk
      },
      Wk = (kk, Fk) => null !== mk((0, tk.g)().bindings, Vk(kk), Fk),
      vk = (kk, Fk) => {
        if (Jk(kk) === Fk) return !0;
        const Bk = mk((0, tk.g)().bindings, Vk(kk), Fk);
        return !!Bk && ((0, tk.l)({
          bindings: Bk
        }), !0)
      },
      ik = (kk, Fk) => {
        const Bk = (0, Rk.p)(Fk);
        return ek.filter((Fk => bk(Fk) === Fk && !Bk.includes(Fk) && wk(kk, Vk(Fk)) !== Jk(Fk)))
      },
      Yk = ["southpaw", "triggersSwapped"],
      Lk = {
        southpaw: {
          sprint: "RS",
          sneakToggle: "LS"
        },
        triggersSwapped: {
          attack: "LT",
          use: "RT"
        }
      },
      Ok = kk => Object.keys(Lk[kk]),
      Ek = (kk, Fk) => "southpaw" === kk ? Fk.swapSticks : Ok(kk).every((Bk => wk(Fk.bindings, Bk) === Lk[kk][Bk])),
      Sk = (kk, Fk) => {
        const Bk = (0, tk.g)();
        let ak = Bk.bindings;
        for (const tk of Ok(kk)) {
          const Bk = Fk ? Lk[kk][tk] : Rk.h[tk];
          if (ak = mk(ak, tk, Bk), !ak) return !1
        }
        return (0, tk.l)({
          swapSticks: "southpaw" === kk ? Fk : Bk.swapSticks,
          bindings: ak
        }), !0
      },
      Nk = () => {
        (0, tk.l)({
          swapSticks: !1,
          bindings: {}
        })
      },
      Hk = () => (0, tk.g)().swapSticks ? "RightStick" : "LeftStick",
      uk = () => (0, tk.g)().swapSticks ? "LeftStick" : "RightStick",
      Mk = kk => (0, tk.g)().swapSticks && (0, ak.H)(kk),
      gk = kk => Mk(kk) ? Hk() : uk(),
      Uk = kk => {
        if (Rk.y.has(kk)) return Hk();
        const Fk = Rk.w[kk];
        return Fk && ("leaderboard" !== Fk || (0, Xk.g)(kk, (0, Xk.d)())) ? Jk(Fk) : null
      }
  },
  7806: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      ControllerCategory: () => sw,
      ControllerGlyph: () => ya,
      ControllerRoot: () => sb,
      PadLobbyShortcuts: () => Sb,
      PadSneakChip: () => mb,
      PadTooltip: () => vb,
      attachPressToContinue: () => Gb,
      getBoundButton: () => sk.f,
      getControllerSettings: () => Jk.g,
      getGlyphForNoaAction: () => sk.k,
      getInventoryCursorState: () => Jw,
      getMenuShortcutButton: () => TR,
      getPadGlyphIconName: () => eb,
      getPadGlyphIconUrl: () => yb,
      getPadRepeatTiming: () => yk.e,
      handOverPadFocus: () => ew,
      hasActivePad: () => Vw,
      isPadSteppingSlots: () => Aw
    });
    const Rk = JSON.parse('{"controller":{"inventoryTake":"Take","inventoryTakeHalf":"Take half","inventoryPlace":"Place","inventoryPlaceOne":"Place one","inventoryQuickMove":"Quick move","inventoryToHotbar":"To hotbar","inventoryPutBack":"Put back","inventoryHotbarSwap":"Swap with hotbar","inventorySwapHere":"Swap here","inventoryCancel":"Cancel","inventoryClose":"Close","inventoryDrop":"Drop (hold: stack)","inventorySelect":"Select","inventoryCraft":"Craft (hold to repeat)","inventoryCraftAll":"Craft all","inventoryChooseRecipe":"Choose","inventoryBackToRecipes":"Back to recipes","inventoryType":"Type","inventoryPanels":"Switch panel","inventoryCategory":"Category","inventoryPage":"Page","disconnected":"Controller disconnected","gameplayReload":"Reload","gameplayActionWheelHint":"(hold for more)","gameplaySneaking":"Sneaking","gameplayLoadFailedTitle":"Controller unavailable","gameplayLoadFailedSubtitle":"Reload the page to play with your controller.","gameplayDropStack":"Keep holding to drop the stack","gameplayAttackLatched":"Attacking","gameplayPickBlock":"Pick block","padButtonView":"View","padButtonMenu":"Menu","padButtonHome":"Home","padButtonCreate":"Create","padButtonOptions":"Options","padButtonDpadUp":"D-pad \u2191","padButtonDpadDown":"D-pad \u2193","padButtonDpadLeft":"D-pad \u2190","padButtonDpadRight":"D-pad \u2192","padButtonLeftStick":"L Stick","padButtonRightStick":"R Stick","settingsLook":"Look","settingsLookSensitivityX":"Look sensitivity (horizontal)","settingsLookSensitivityY":"Look sensitivity (vertical)","settingsAimLookSensitivity":"Look sensitivity while aiming (use held)","settingsInvertLookX":"Invert horizontal look","settingsInvertLookY":"Invert vertical look","settingsLookCurve":"Look curve","settingsLookCurveHint":"Steep gives finer aim near the centre, Linear turns at an even rate, and Boost turns faster when you hold the stick all the way.","settingsCurveExponential":"Steep","settingsCurveLinear":"Linear","settingsCurveBoost":"Boost","settingsLookDeadzone":"Look deadzone","settingsGyro":"Gyro aiming","settingsGyroToggle":"Aim by moving the controller","settingsGyroToggleInfo":"Turn and tilt the controller to aim, on top of the right stick.","settingsGyroTogglePhone":"Aim by moving your phone or tablet","settingsGyroToggleInfoPhone":"Turn and tilt your phone or tablet to aim, on top of the right stick.","settingsGyroUnsupported":"Gyro aiming needs Chrome or Edge.","settingsGyroBlocked":"Gyro aiming isn\'t available on this site.","settingsGyroPhoneNeedsController":"Connect a controller to aim by moving your phone or tablet.","settingsGyroSteamHint":"If Steam already turns your gyro into mouse movement, leave this off.","settingsGyroConnect":"Connect motion controller","settingsGyroConnectHint":"Works with DualSense, DualShock 4 and Switch controllers.","settingsGyroConnectNeedsClick":"Click Connect with your mouse: the browser asks before sharing a controller.","settingsGyroOpenFailed":"Another app is using the controller. Close apps such as Steam or DS4Windows, then try again.","settingsGyroConnected":"Aiming with {{name}}.","settingsGyroAllowMotion":"Allow motion sensor","settingsGyroAllowNeedsTap":"Tap Allow motion sensor on your screen to turn it on.","settingsGyroPhoneOn":"Aiming with this device\'s motion sensor.","settingsGyroPhoneWaiting":"Waiting for this device\'s motion sensor\u2026","settingsGyroPhoneNoSensor":"No motion sensor found on this device.","settingsGyroPhoneDenied":"Motion access is blocked. Allow it in your browser settings.","settingsGyroSensitivity":"Gyro sensitivity","settingsGyroActivation":"Gyro turns on","settingsGyroAlways":"Always","settingsGyroWhileAiming":"While aiming","settingsGyroWhileButton":"While holding a button","settingsGyroAimingHint":"Hold {{button}} to aim with motion.","settingsGyroButton":"Gyro button","settingsGyroButtonHint":"While gyro aiming is on, this button only turns the gyro on in game, so pick one you rarely use.","settingsMovement":"Movement","settingsMoveDeadzone":"Move deadzone","settingsAutoSprint":"Sprint at full tilt","settingsAutoSprintInfo":"Push the movement stick all the way to sprint.","settingsSneak":"Sneak","settingsSneakHold":"Hold","settingsSneakToggle":"Toggle","settingsButtons":"Buttons","settingsPromptFamily":"Button prompts","settingsPromptAuto":"Match my controller","settingsPromptXbox":"Xbox","settingsPromptPlayStation":"PlayStation","settingsPromptNintendo":"Nintendo","settingsPromptSteamDeck":"Steam Deck","settingsPromptGeneric":"Generic","settingsHideButtonHints":"Hide button hints","settingsVibration":"Vibration","settingsCursorSpeed":"Virtual cursor speed","settingsCursorMagnetism":"Cursor snaps onto buttons","settingsMenuBackToCategories":"Back returns to the category list first","settingsAccessibility":"Accessibility","settingsSwapConfirmBack":"Swap confirm and back","settingsSwapToast":"Select and Back have swapped buttons.","settingsLayoutRefusedToast":"This layout doesn\'t fit your current buttons. Reset them to use it.","settingsSwapConfirmBackInfo":"Select with the right face button and go back with the bottom one, in menus, the inventory and the on-screen keyboard. On by default for Nintendo controllers.","settingsButtonRepeat":"Button repeat","settingsButtonRepeatHint":"How a held button repeats in menus, sliders, the on-screen keyboard and crafting. Off acts once per press, and holding drop in game drops just one item.","settingsButtonRepeatDefault":"Default","settingsButtonRepeatSlow":"Slow (0.8 s, then 4 a second)","settingsButtonRepeatOff":"Off (once per press)","settingsTapHoldTime":"Tap/hold time","settingsTapHoldTimeHint":"How long to hold the chat, emote or action button to open its wheel, or the view button to change view where a tap picks a block. Dropping a whole stack takes 0.8, 1 or 1.3 s.","settingsTapHoldShort":"Short (0.25 s)","settingsTapHoldMedium":"Medium (0.5 s)","settingsTapHoldLong":"Long (0.8 s)","settingsEmoteButton":"Emote button","settingsEmoteButtonTapHoldHint":"Tap to repeat your last emote, or hold to open the emote wheel.","settingsEmoteButtonWheelHint":"Any press opens the emote wheel, with no hold to time. Pick with the stick, then select.","settingsEmoteButtonTapHold":"Tap repeats, hold opens wheel","settingsEmoteButtonWheel":"Opens the wheel","settingsAttackMode":"Attack / mine","settingsAttackHoldHint":"Hold attack to keep attacking or mining.","settingsAttackToggleHint":"Press attack once to keep attacking or mining, and again to stop.","settingsAttackHold":"Hold","settingsAttackToggle":"Toggle","settingsLargePointer":"Large pointer and focus","settingsLargePointerInfo":"A bigger menu cursor, thicker selection brackets and bigger button hints.","settingsRemap":"Remap buttons","settingsRemapHint":"Select an action, then press a button. If that button is taken, the two swap.","settingsLayoutSouthpaw":"Southpaw (move with the right stick)","settingsLayoutTriggersSwapped":"Triggers swapped (attack with the left trigger)","settingsCapturePrompt":"Press a button","settingsCaptureCancelHint":"Press {{button}} to cancel","settingsCaptureCancelOrBindHint":"Tap {{button}} to cancel, or hold it to choose it","settingsReset":"Reset","settingsSwapNotice":"{{action}} moved to {{button}}","settingsResetAll":"Reset all buttons and sticks","settingsGroupGameplay":"Movement & gameplay","settingsGroupMenus":"Menus","settingsGroupInventory":"Inventory","settingsGroupKeyboard":"On-screen keyboard","settingsActionMove":"Move","settingsActionLook":"Look around","settingsActionJump":"Jump","settingsActionSneak":"Sneak","settingsActionSneakToggle":"Toggle sneak","settingsActionSprint":"Sprint","settingsActionAttack":"Attack / mine","settingsActionUse":"Use / place","settingsActionHotbarPrevious":"Previous hotbar slot","settingsActionHotbarNext":"Next hotbar slot","settingsActionInventory":"Inventory","settingsActionActionButton":"Game action","settingsActionPerspective":"Change view","settingsActionPickBlock":"Pick block (creative)","settingsActionDrop":"Drop item","settingsActionEmoteWheel":"Emotes","settingsActionChat":"Chat","settingsActionPause":"Pause menu","settingsActionLeaderboard":"Shop / leaderboard","settingsActionMenuConfirm":"Select","settingsActionMenuBack":"Back","settingsActionMenuTabPrevious":"Previous tab","settingsActionMenuTabNext":"Next tab","settingsActionMenuPageUp":"Page up","settingsActionMenuPageDown":"Page down","settingsActionMenuSecondary":"Secondary action","settingsActionMenuToggleCursor":"Switch to virtual cursor","settingsActionInventoryPrimary":"Pick up / place","settingsActionInventorySecondary":"Pick up half / place one","settingsActionInventoryQuickMove":"Quick move","settingsActionInventoryHotbarSwap":"Swap with hotbar slot","settingsActionInventoryClose":"Close","settingsActionInventoryPanelPrevious":"Previous panel","settingsActionInventoryPanelNext":"Next panel","settingsActionInventoryDrop":"Drop item","settingsActionKeyboardType":"Type key","settingsActionKeyboardBackspace":"Backspace","settingsActionKeyboardSpace":"Space","settingsActionKeyboardCaretLeft":"Move cursor left","settingsActionKeyboardCaretRight":"Move cursor right","settingsActionKeyboardShift":"Shift","settingsActionKeyboardSymbols":"Accents and symbols","settingsActionKeyboardSubmit":"Send","settingsActionKeyboardClose":"Close keyboard","settingsActionKeyboardChannel":"Chat channel","settingsAlternatives":"Try alternatives","settingsAlternativesHint":"Try each way of playing and keep the one that feels best.","settingsMenuNavigation":"Menu navigation","settingsMenuNavigationHint":"Steer a cursor with the stick and jump between buttons with the D-pad, or use just one.","settingsNavHybrid":"Cursor and D-pad","settingsMenuNavFocus":"Jump between buttons","settingsVirtualCursor":"Virtual cursor","settingsInventoryNavigation":"Inventory","settingsInventoryNavigationHint":"Steer a cursor with the stick and step slot by slot with the D-pad, or use just one.","settingsInventoryNavSlot":"Slot by slot","settingsQuickChat":"Hold chat button","settingsQuickChatHint":"Hold the chat button to pick a quick phrase. Tapping it still opens chat.","settingsQuickChatWheel":"Quick chat wheel","settingsQuickChatOff":"Off","settingsLeaderboardButton":"Shop / leaderboard button","settingsLeaderboardButtonHint":"Open the shop in one press in games that have one. The lobby leaderboard is still in the pause menu.","settingsLeaderboardButtonShop":"Shop, in games with one","settingsLeaderboardButtonLeaderboard":"Always the leaderboard","settingsTester":"Gamepad tester","settingsTesterNoPad":"Connect a gamepad and press any button to test it.","settingsTesterFamily":"Detected: {{family}}","settingsTesterHint":"Start a test to try every button and stick without moving through the menu.","settingsTesterStart":"Start test","settingsTesterStop":"Stop test","settingsTesterTesting":"Press anything to see it light up. To stop, hold {{button}} or press it three times.","settingsControlsNote":"Playing with a gamepad? Change its buttons and feel in Gamepad settings.","settingsOpenController":"Gamepad settings","keyboardSpace":"Space","keyboardSend":"Send","keyboardDone":"Done","keyboardTargetChat":"Chat","keyboardTargetSign":"Sign","keyboardTargetNameTag":"Name tag","keyboardTargetBook":"Book page","keyboardTargetBookTitle":"Book title","keyboardTargetText":"Text","keyboardPhraseGg":"gg","keyboardPhraseHi":"hi","keyboardPhraseThanks":"thanks","keyboardPhraseGl":"gl","keyboardPhraseBrb":"brb","keyboardPhraseYes":"yes","keyboardPhraseNo":"no","keyboardPhraseHelp":"help!","quickChatPick":"Pick a phrase","actionWheelPick":"Pick an action","wheelReleaseToPick":"Release to pick","wheelClose":"Close","wheelChoose":"Choose","menusSelect":"Select","menusBack":"Back","menusClose":"Close","menusQuickChat":"Quick chat (hold)","menusSkipTutorial":"Skip tutorial","menusTabs":"Tabs","menusRows":"Rows","menusCursorMode":"Cursor","menusFocusMode":"Focus","menusClick":"Click","menusRightClick":"Right-click","menusScroll":"Scroll","menusFriends":"Friends","menusSearch":"Search","menusSettings":"Settings","menusLeaveGameTitle":"Leave the game?","menusLeaveGameLeave":"Leave","menusLeaveGameStay":"Stay","menusNotifications":"Notifications","menusLobby":"Lobby","menusShop":"Shop","menusTasks":"Tasks & leaderboards","menusInvite":"Invite friends","menusAdjust":"Adjust","menusFavourite":"Favourite","screensPressToContinue":"Press {{button}} to continue","screensPressToEnterGame":"Press {{button}} to enter game","screensEnterGame":"Enter game","screensBackToGames":"Back to games","tutorialMine":"Mine","tutorialPlace":"Place / Use","tutorialInventory":"Inventory","tutorialPause":"Pause","menusUseMouse":"Use a mouse or touch here"}}');
    var tk = Bk(1149),
      ak = Bk(1355),
      Xk = Bk(7810),
      bk = Bk(67),
      wk = Bk(22),
      dk = Bk(29),
      sk = Bk(7826),
      Vk = Bk(7861),
      Jk = Bk(7840),
      Ak = Bk(7870),
      ek = Bk(7815),
      yk = Bk(8325),
      fk = Bk(8334),
      mk = Bk(1614);
    const Wk = (kk, Fk, Bk) => Math.max(Fk, Math.min(Bk, kk)),
      vk = kk => Math.min(kk.width, kk.height) / 720,
      ik = kk => Math.max(.15, kk);
    class Yk {
      constructor() {
        this.locked = !1
      }
      lock() {
        this.locked = !0
      }
      update(kk, Fk) {
        const Bk = Math.hypot(kk.x, kk.y) >= (kk => Math.max(.3, kk))(Fk);
        return this.locked ? (this.locked = Bk, !1) : Bk
      }
    }
    const Lk = (kk, Fk) => {
        const Bk = Wk(Fk.dtMs, 0, 100),
          Rk = Bk / 1e3,
          tk = vk(Fk.viewport) * (Fk.cursorSpeedPercent / 100),
          ak = (0, ek.i)(Fk.stick, ik(Fk.moveDeadzone)),
          Xk = Math.hypot(ak.x, ak.y),
          bk = ((kk, Fk, Bk) => {
            if (Fk < .3) return 0;
            const Rk = Bk / 350;
            return Fk >= .85 ? Math.min(1, kk + Rk) : Math.max(0, kk - Rk)
          })(kk.speedRamp, Xk, Bk);
        let wk = kk.x,
          dk = kk.y;
        if (Xk > 0) {
          const kk = .45 + .55 * bk,
            Bk = Fk.context.overInteractive ? .45 : 1,
            sk = 1400 * (kk => {
              const Fk = Wk(kk, 0, 1);
              return .3 * Fk + .7 * Fk * Fk
            })(Xk) * tk * kk * Bk;
          wk += ak.x / Xk * sk * Rk, dk += ak.y / Xk * sk * Rk
        }
        const sk = Math.hypot(Fk.dpad.x, Fk.dpad.y);
        if (sk > 0) {
          const kk = 500 * tk;
          wk += Fk.dpad.x / sk * kk * Rk, dk += Fk.dpad.y / sk * kk * Rk
        }
        const Vk = Fk.context.magnetTarget;
        if (Vk && Xk < .3 && 0 === sk) {
          const kk = ((kk, Fk, Bk, Rk, tk) => {
            const ak = Fk.x - kk.x,
              Xk = Fk.y - kk.y,
              bk = Math.hypot(ak, Xk);
            if (0 === bk) return {
              x: 0,
              y: 0
            };
            const wk = Math.min(bk, tk * (1 - Rk / .3));
            let dk = ak / bk * wk,
              sk = Xk / bk * wk;
            if (Rk > 0) {
              const kk = Bk.x / Rk,
                Fk = Bk.y / Rk,
                tk = dk * kk + sk * Fk;
              tk < 0 && (dk -= tk * kk, sk -= tk * Fk)
            }
            return {
              x: dk,
              y: sk
            }
          })({
            x: wk,
            y: dk
          }, Vk, ak, Xk, 120 * vk(Fk.viewport) * Rk);
          wk += kk.x, dk += kk.y
        }
        return {
          x: Wk(wk, 0, Math.max(0, Fk.viewport.width - 1)),
          y: Wk(dk, 0, Math.max(0, Fk.viewport.height - 1)),
          speedRamp: bk
        }
      },
      Ok = kk => {
        const Fk = (0, ek.i)(kk, .2);
        return 0 !== Fk.x || 0 !== Fk.y
      },
      Ek = (kk, Fk) => {
        const Bk = (0, ek.i)(kk, .2),
          Rk = Math.hypot(Bk.x, Bk.y);
        if (0 === Rk) return {
          x: 0,
          y: 0
        };
        const tk = Rk * Rk * 1600,
          ak = Wk(Fk, 0, 100) / 1e3;
        return {
          x: Bk.x / Rk * tk * ak,
          y: Bk.y / Rk * tk * ak
        }
      },
      Sk = (kk, Fk) => "y" === Fk ? kk.scrollHeight > kk.clientHeight + 1 : kk.scrollWidth > kk.clientWidth + 1,
      Nk = (kk, Fk) => {
        if (!Sk(kk, Fk)) return !1;
        const Bk = getComputedStyle(kk),
          Rk = "y" === Fk ? Bk.overflowY : Bk.overflowX;
        return "auto" === Rk || "scroll" === Rk
      },
      Hk = (kk, Fk, Bk) => {
        for (let ak = kk instanceof HTMLElement ? kk : null !== (Rk = null === kk || void 0 === kk ? void 0 : kk.parentElement) && void 0 !== Rk ? Rk : null; ak; ak = ak.parentElement) {
          var Rk;
          if (Nk(ak, Fk)) return ak;
          if (ak === Bk) return null
        }
        if (Bk) return null;
        const tk = document.scrollingElement;
        return tk instanceof HTMLElement && Sk(tk, Fk) ? tk : null
      },
      uk = new WeakMap,
      Mk = (kk, Fk) => {
        const Bk = performance.now(),
          Rk = uk.get(kk);
        if (Rk && Rk.axis === Fk && Bk - Rk.atMs < 500 && (!Rk.container || Rk.container.isConnected)) return Rk.container;
        const tk = gk(kk, Fk);
        return uk.set(kk, {
          axis: Fk,
          atMs: Bk,
          container: tk
        }), tk
      },
      gk = (kk, Fk) => {
        let Bk = Nk(kk, Fk) ? kk : null,
          Rk = Bk ? Bk.clientWidth * Bk.clientHeight : 0;
        for (const tk of kk.querySelectorAll("*")) {
          const kk = tk.clientWidth * tk.clientHeight;
          kk > Rk && Nk(tk, Fk) && (Bk = tk, Rk = kk)
        }
        return Bk
      },
      Uk = (kk, Fk, Bk) => "y" === Fk ? Bk < 0 ? kk.scrollTop > 0 : kk.scrollTop + kk.clientHeight < kk.scrollHeight - 1 : Bk < 0 ? kk.scrollLeft > 0 : kk.scrollLeft + kk.clientWidth < kk.scrollWidth - 1,
      ck = (kk, Fk, Bk) => {
        "y" === Fk ? kk.scrollBy({
          top: Bk,
          behavior: "instant"
        }) : kk.scrollBy({
          left: Bk,
          behavior: "instant"
        })
      },
      Gk = kk => {
        if (!kk || kk === document.scrollingElement) return new DOMRect(0, 0, window.innerWidth, window.innerHeight);
        const Fk = kk.getBoundingClientRect(),
          Bk = Math.max(0, Fk.left),
          Rk = Math.max(0, Fk.top);
        return new DOMRect(Bk, Rk, Math.min(window.innerWidth, Fk.right) - Bk, Math.min(window.innerHeight, Fk.bottom) - Rk)
      },
      Tk = (kk, Fk) => kk.left < Fk.right && Fk.left < kk.right && kk.top < Fk.bottom && Fk.top < kk.bottom;
    var rk = Bk(61),
      Dk = Bk(1020),
      zk = Bk.n(Dk),
      Pk = Bk(1069);
    let hk = 0,
      qk = !1;
    class Ck {
      constructor() {
        this.element = null, this.shownKey = "", this.gap = null
      }
      setElement(kk) {
        this.element = kk, this.shownKey = "", this.gap = null
      }
      show(kk) {
        const Fk = this.element;
        if (!Fk) return;
        const Bk = kk ? this.keepOnScreen(Fk, kk) : null,
          Rk = Bk ? `${Bk.left},${Bk.top},${Bk.width},${Bk.height}` : "";
        if (Rk === this.shownKey) return;
        const tk = "" === this.shownKey;
        this.shownKey = Rk, Fk.classList.toggle("Visible", null !== Bk), Bk && (Fk.classList.toggle("Snap", tk), Fk.style.width = `${Bk.width}px`, Fk.style.height = `${Bk.height}px`, Fk.style.transform = `translate(${Bk.left}px, ${Bk.top}px)`, tk && (Fk.offsetWidth, Fk.classList.remove("Snap")))
      }
      hide() {
        this.show(null)
      }
      keepOnScreen(kk, Fk) {
        var Bk;
        const Rk = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!qk){qk=!0;const kk=document.createElement("div");kk.setAttribute("aria-hidden","true"),kk.style.cssText="position: fixed; top: 0; left: 0; width: 1rem; height: 0; visibility: hidden; pointer-events: none",document.body.appendChild(kk),new ResizeObserver((()=>{hk++})).observe(kk)}return String(hk)})()}`;
        (null === (Bk = this.gap) || void 0 === Bk ? void 0 : Bk.key) !== Rk && (this.gap = {
          px: parseFloat(getComputedStyle(kk).paddingLeft) || 0,
          key: Rk
        });
        const tk = this.gap.px + 2,
          ak = Math.max(Fk.left, tk),
          Xk = Math.max(Fk.top, tk),
          bk = Math.min(Fk.left + Fk.width, window.innerWidth - tk),
          wk = Math.min(Fk.top + Fk.height, window.innerHeight - tk);
        return bk <= ak || wk <= Xk ? Fk : {
          left: ak,
          top: Xk,
          width: bk - ak,
          height: wk - Xk
        }
      }
    }
    const Zk = kk => {
      let {
        placer: Fk,
        className: Bk
      } = kk;
      const Rk = (0, rk.useCallback)((kk => {
        Fk.setElement(kk)
      }), [Fk]);
      return (0, Pk.jsx)("div", {
        ref: Rk,
        className: zk()("PadReticle", Bk),
        "aria-hidden": !0
      })
    };
    var pk = Bk(8342),
      Kk = Bk(1654);
    const xk = kk => kk >= 56320 && kk <= 57343,
      jk = kk => kk >= 55296 && kk <= 56319,
      lk = (kk, Fk) => Fk >= 2 && xk(kk.charCodeAt(Fk - 1)) && jk(kk.charCodeAt(Fk - 2)) ? Fk - 2 : Math.max(0, Fk - 1),
      nk = (kk, Fk) => {
        let Bk;
        var Rk, tk;
        return Bk = kk.start !== kk.end ? Fk < 0 ? kk.start : kk.end : Fk < 0 ? lk(kk.value, kk.start) : (Rk = kk.value, (tk = kk.start) + 1 < Rk.length && jk(Rk.charCodeAt(tk)) && xk(Rk.charCodeAt(tk + 1)) ? tk + 2 : Math.min(Rk.length, tk + 1)), {
          value: kk.value,
          start: Bk,
          end: Bk
        }
      },
      Ik = ["text", "search", "url", "email", "tel", "password", "number"],
      Qk = kk => !(!(0, Kk.b)(kk) || kk.isContentEditable || kk.hasAttribute("data-pad-no-osk")) && (kk instanceof HTMLTextAreaElement || kk instanceof HTMLInputElement && Ik.includes(kk.type)),
      kF = kk => null !== kk.selectionStart,
      FF = kk => {
        var Fk, Bk;
        const {
          value: Rk
        } = kk;
        return {
          value: Rk,
          start: null !== (Fk = kk.selectionStart) && void 0 !== Fk ? Fk : Rk.length,
          end: null !== (Bk = kk.selectionEnd) && void 0 !== Bk ? Bk : Rk.length
        }
      },
      BF = (kk, Fk, Bk) => {
        if (kk.readOnly) return;
        const Rk = kk instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(Rk, "value").set.call(kk, Fk.value), kF(kk) && kk.setSelectionRange(Fk.start, Fk.end), (0, mk.i)(kk, new InputEvent("input", {
          bubbles: !0,
          inputType: Bk
        }))
      };
    let RF = !1;
    const tF = (kk, Fk) => !!document.execCommand(kk, !1, Fk) || (RF || (RF = !0, console.warn(`execCommand("${kk}") failed; the on-screen keyboard is setting the value directly`)), !1),
      aF = (kk, Fk) => {
        tF("insertText", Fk) || BF(kk, function(kk, Fk) {
          let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
          const Rk = kk.value.slice(0, kk.start),
            tk = kk.value.slice(kk.end);
          let ak = Bk < 0 ? Fk.length : Math.max(0, Bk - Rk.length - tk.length);
          ak > 0 && ak < Fk.length && jk(Fk.charCodeAt(ak - 1)) && ak--;
          const Xk = Fk.slice(0, ak),
            bk = Rk.length + Xk.length;
          return {
            value: Rk + Xk + tk,
            start: bk,
            end: bk
          }
        }(FF(kk), Fk, kk.maxLength), "insertText")
      },
      XF = kk => {
        tF("delete") || BF(kk, (kk => {
          const Fk = kk.start === kk.end ? lk(kk.value, kk.start) : kk.start;
          return {
            value: kk.value.slice(0, Fk) + kk.value.slice(kk.end),
            start: Fk,
            end: Fk
          }
        })(FF(kk)), "deleteContentBackward")
      },
      bF = (kk, Fk) => {
        if (!kF(kk)) return;
        const Bk = nk(FF(kk), Fk);
        kk.setSelectionRange(Bk.start, Bk.end)
      },
      wF = ["button", "a[href]", "input:not([type=hidden])", "textarea", "select", "[role=button]", "[role=tab]", "[role=switch]", "[role=checkbox]", "[role=option]", "[role=menuitem]", "[data-pad-focusable]", "[data-pad-tab]", ".Dropdown-control", ".Dropdown-option"].join(","),
      dF = (kk, Fk) => {
        if ("function" === typeof kk.checkVisibility) return !kk.checkVisibility({
          visibilityProperty: !0,
          checkVisibilityCSS: !0,
          opacityProperty: Fk,
          checkOpacity: Fk
        });
        const {
          visibility: Bk
        } = getComputedStyle(kk);
        if ("hidden" === Bk || "collapse" === Bk) return !0;
        if (!Fk) return !1;
        for (let Rk = kk; Rk; Rk = Rk.parentElement)
          if ("0" === getComputedStyle(Rk).opacity) return !0;
        return !1
      },
      sF = kk => {
        if (!kk.isConnected || dF(kk, !0)) return !1;
        const Fk = kk.getBoundingClientRect();
        return Fk.width > 0 && Fk.height > 0
      },
      VF = kk => !!kk.matches(":disabled, [aria-disabled='true']") || "button" === kk.getAttribute("role") && "-1" === kk.getAttribute("tabindex"),
      JF = kk => {
        var Fk;
        if (kk.closest("[data-pad-ignore]")) return !0;
        return !!(null === (Fk = kk.parentElement) || void 0 === Fk ? void 0 : Fk.closest("[data-pad-focusable]"))
      },
      AF = kk => {
        const Fk = kk.querySelectorAll(wF);
        return kk.matches(wF) ? [kk, ...Fk] : Fk
      },
      eF = kk => {
        const Fk = [];
        for (const Bk of AF(kk)) !JF(Bk) && sF(Bk) && Fk.push(Bk);
        return Fk
      },
      yF = new WeakMap,
      fF = kk => {
        const Fk = yF.get(kk);
        if (Fk && mF(Fk, kk)) return !0;
        for (const Bk of AF(kk))
          if (!JF(Bk) && sF(Bk)) return yF.set(kk, Bk), !0;
        return yF.delete(kk), !1
      },
      mF = (kk, Fk) => Fk.contains(kk) && kk.matches(wF) && !JF(kk) && sF(kk),
      WF = (kk, Fk) => mF(kk, Fk) && !VF(kk),
      vF = kk => {
        const Fk = Fk => {
          let Bk = 0;
          for (let Rk = Fk.parentElement; Rk && Rk !== kk; Rk = Rk.parentElement) Bk++;
          return Bk
        };
        return [...kk.querySelectorAll("[data-pad-initial-area]")].filter(sF).sort(((kk, Bk) => Fk(Bk) - Fk(kk)))
      },
      iF = kk => Qk(kk),
      YF = kk => {
        const Fk = kk.getBoundingClientRect();
        return {
          x: Fk.left + Fk.width / 2,
          y: Fk.top + Fk.height / 2
        }
      },
      oF = (kk, Fk, Bk) => ({
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window,
        clientX: kk.x,
        clientY: kk.y,
        screenX: kk.x,
        screenY: kk.y,
        button: Fk,
        buttons: Bk,
        pointerId: 1,
        pointerType: "mouse",
        isPrimary: !0
      }),
      LF = (kk, Fk) => {
        (0, mk.i)(kk, Fk)
      },
      OF = function(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const Rk = 0 === Bk ? 1 : 2;
        LF(kk, new PointerEvent("pointerdown", oF(Fk, Bk, Rk))), LF(kk, new MouseEvent("mousedown", oF(Fk, Bk, Rk)))
      },
      EF = function(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        LF(kk, new PointerEvent("pointerup", oF(Fk, Bk, 0))), LF(kk, new MouseEvent("mouseup", oF(Fk, Bk, 0)))
      },
      SF = function(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        OF(kk, Fk, Bk), EF(kk, Fk, Bk), LF(kk, 0 === Bk ? new MouseEvent("click", oF(Fk, 0, 0)) : new MouseEvent("contextmenu", oF(Fk, 2, 0)))
      },
      NF = function(kk, Fk, Bk) {
        let {
          leaveBelow: Rk = null,
          enterBelow: tk = null
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (kk !== Fk) {
          if (null !== kk && void 0 !== kk && kk.isConnected) {
            const tk = {
              ...oF(Bk, 0, 0),
              relatedTarget: Fk
            };
            LF(kk, new PointerEvent("pointerout", tk)), LF(kk, new MouseEvent("mouseout", tk));
            const ak = kk => !!Fk && kk.contains(Fk) || !!Rk && kk.contains(Rk);
            for (let Fk = kk; Fk && !ak(Fk); Fk = Fk.parentElement) LF(Fk, new PointerEvent("pointerleave", {
              ...tk,
              bubbles: !1
            })), LF(Fk, new MouseEvent("mouseleave", {
              ...tk,
              bubbles: !1
            }))
          }
          if (Fk) {
            const Rk = {
              ...oF(Bk, 0, 0),
              relatedTarget: kk
            };
            LF(Fk, new PointerEvent("pointerover", Rk)), LF(Fk, new MouseEvent("mouseover", Rk));
            const ak = [],
              Xk = Fk => !(null === kk || void 0 === kk || !kk.isConnected) && Fk.contains(kk) || !!tk && Fk.contains(tk);
            for (let kk = Fk; kk && !Xk(kk); kk = kk.parentElement) ak.push(kk);
            for (const kk of ak.reverse()) LF(kk, new PointerEvent("pointerenter", {
              ...Rk,
              bubbles: !1
            })), LF(kk, new MouseEvent("mouseenter", {
              ...Rk,
              bubbles: !1
            }));
            LF(Fk, new PointerEvent("pointermove", oF(Bk, 0, 0))), LF(Fk, new MouseEvent("mousemove", oF(Bk, 0, 0)))
          }
        } else Fk && (LF(Fk, new PointerEvent("pointermove", oF(Bk, 0, 0))), LF(Fk, new MouseEvent("mousemove", oF(Bk, 0, 0))))
      },
      HF = kk => {
        dk.o.Hf(pk.e, kk)
      },
      uF = kk => {
        if (iF(kk)) return void HF(kk);
        const Fk = kk.hasAttribute("data-pad-focusable") ? kk.querySelector("a[href]") : null,
          Bk = null !== Fk && void 0 !== Fk ? Fk : kk;
        SF(Bk, YF(Bk))
      },
      MF = ".Dropdown-root.is-open",
      gF = kk => {
        const Fk = kk.querySelector(".Dropdown-control");
        return uF(Fk), Fk
      },
      UF = kk => {
        var Fk;
        const Bk = null !== (Fk = kk.closest(MF)) && void 0 !== Fk ? Fk : kk.querySelector(MF);
        return Bk ? gF(Bk) : null
      },
      cF = kk => {
        for (const Fk of document.querySelectorAll(MF)) Fk.contains(kk) || gF(Fk)
      },
      GF = kk => null !== kk.closest("input[type=color], input[type=file], [data-pad-mouse-only]"),
      TF = kk => {
        const Fk = kk ? document.elementFromPoint(kk.x, kk.y) : null;
        return !(null === Fk || void 0 === Fk || !Fk.closest("[data-pad-repeat]"))
      },
      rF = kk => {
        var Fk;
        return null !== (Fk = [...kk.querySelectorAll("[data-pad-back]")].find(sF)) && void 0 !== Fk ? Fk : null
      },
      DF = kk => {
        const Fk = rF(kk);
        return !!Fk && (uF(Fk), !0)
      },
      zF = kk => {
        var Fk, Bk, Rk, tk;
        return null !== (Fk = null !== (Bk = null !== (Rk = kk.getAttribute("data-pad-key")) && void 0 !== Rk ? Rk : kk.getAttribute("href")) && void 0 !== Bk ? Bk : null === (tk = kk.querySelector("a[href]")) || void 0 === tk ? void 0 : tk.getAttribute("href")) && void 0 !== Fk ? Fk : null
      },
      PF = {
        x: 0,
        y: 0,
        visible: !1,
        pressed: !1
      };
    const hF = new class {
        constructor() {
          this.state = PF, this.listeners = new Set
        }
        get() {
          return this.state
        }
        set(kk) {
          if (Fk = this.state, Bk = kk, (Fk.visible || Bk.visible) && (Fk.visible !== Bk.visible || Fk.x !== Bk.x || Fk.y !== Bk.y || Fk.pressed !== Bk.pressed)) {
            var Fk, Bk;
            this.state = kk;
            for (const Fk of this.listeners) Fk(kk)
          }
        }
        hide() {
          this.set(PF)
        }
        subscribe(kk) {
          return this.listeners.add(kk), () => {
            this.listeners.delete(kk)
          }
        }
      },
      qF = (kk, Fk) => {
        let {
          kind: Bk,
          holding: Rk,
          hasPress: tk,
          hasBack: ak,
          slotHasItem: Xk
        } = Fk;
        switch (kk) {
          case "primary":
            return "slot" === Bk ? "slotPrimary" : "recipe" === Bk || "button" === Bk ? tk ? "pressPrimary" : "click" : "textField" === Bk ? "openKeyboard" : null;
          case "secondary":
            return "slot" === Bk ? "slotSecondary" : "button" !== Bk && "recipe" !== Bk || !tk ? null : "pressSecondary";
          case "quickMove":
            return "slot" === Bk && Xk ? "slotQuickMove" : null;
          case "hotbarSwap":
            return "slot" === Bk && Xk && !Rk ? "hotbarPick" : null;
          case "openButton":
            return "close";
          case "back":
            return Rk ? "cancel" : ak ? "pressBack" : "close"
        }
      },
      CF = kk => {
        const Fk = [];
        if (kk.hotbarPicking) return Fk.push({
          actions: ["inventoryPrimary", "inventoryHotbarSwap"],
          labelKey: "inventorySwapHere"
        }), Fk.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryCancel"
        }), Fk;
        if (kk.holding) "slot" === kk.kind ? (Fk.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryPlace"
        }), Fk.push({
          actions: ["inventorySecondary"],
          labelKey: "inventoryPlaceOne"
        })) : "textField" === kk.kind && Fk.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryType"
        }), Fk.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryPutBack"
        }), Fk.push({
          actions: ["inventoryDrop"],
          labelKey: "inventoryDrop"
        }), kk.openButtonCloses && Fk.push({
          actions: ["inventory"],
          labelKey: "inventoryClose"
        });
        else {
          var Bk;
          "slot" === kk.kind && kk.slotHasItem ? (Fk.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryTake"
          }), Fk.push({
            actions: ["inventorySecondary"],
            labelKey: "inventoryTakeHalf"
          }), Fk.push({
            actions: ["inventoryQuickMove"],
            labelKey: kk.quickMoveToHotbar ? "inventoryToHotbar" : "inventoryQuickMove"
          }), Fk.push({
            actions: ["inventoryHotbarSwap"],
            labelKey: "inventoryHotbarSwap"
          }), Fk.push({
            actions: ["inventoryDrop"],
            labelKey: "inventoryDrop"
          })) : "button" !== kk.kind && "recipe" !== kk.kind || !kk.pressHints ? "button" === kk.kind || "recipe" === kk.kind ? Fk.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventorySelect"
          }) : "textField" === kk.kind && Fk.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryType"
          }) : (kk.pressHints.primary && Fk.push({
            actions: ["inventoryPrimary"],
            labelKey: kk.pressHints.primary
          }), kk.pressHints.secondary && Fk.push({
            actions: ["inventorySecondary"],
            labelKey: kk.pressHints.secondary
          }));
          const Rk = null === (Bk = kk.pressHints) || void 0 === Bk ? void 0 : Bk.back;
          Rk && Fk.push({
            actions: ["inventoryClose"],
            labelKey: Rk
          });
          const tk = [];
          kk.openButtonCloses && tk.push("inventory"), Rk || tk.push("inventoryClose"), tk.length > 0 && Fk.push({
            actions: tk,
            labelKey: "inventoryClose"
          })
        }
        return Fk.push({
          actions: ["inventoryPanelPrevious", "inventoryPanelNext"],
          labelKey: "inventoryPanels"
        }), kk.hasCategories ? Fk.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryCategory"
        }) : kk.hasList && Fk.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryPage"
        }), Fk
      };
    var ZF = Bk(8347);
    class pF {
      constructor(kk) {
        this.probes = kk, this.byContainer = new Map, this.byParent = new Map
      }
      find(kk, Fk) {
        const Bk = Hk(kk, "y", Fk);
        if (!Bk) return null;
        let Rk = this.byContainer.get(Bk);
        return Rk || (this.probes.push({
          element: Bk,
          rect: lF(Bk.getBoundingClientRect())
        }), Rk = {
          container: Bk,
          box: Gk(Bk),
          group: jF(Bk)
        }, this.byContainer.set(Bk, Rk)), Rk
      }
      findForParent(kk, Fk) {
        let Bk = this.byParent.get(kk);
        return void 0 === Bk && (Bk = this.find(kk, Fk), this.byParent.set(kk, Bk)), Bk
      }
    }
    const KF = new WeakMap;
    let xF = 0;
    const jF = kk => {
        let Fk = KF.get(kk);
        return Fk || (Fk = "el:" + xF++, KF.set(kk, Fk)), Fk
      },
      lF = kk => ({
        left: kk.left,
        top: kk.top,
        width: kk.width,
        height: kk.height
      }),
      nF = kk => kk.width > 0 && kk.height > 0,
      IF = (kk, Fk) => nF(kk) && kk.left + kk.width > 0 && kk.top + kk.height > 0 && kk.left < Fk.width && kk.top < Fk.height,
      QF = (kk, Fk, Bk) => {
        const Rk = kk.top + kk.height / 2;
        return IF(kk, Fk) && (!Bk || Rk >= Bk.top && Rk <= Bk.bottom)
      },
      kB = kk => ({
        x: kk.left + kk.width / 2,
        y: kk.top + kk.height / 2
      }),
      FB = (kk, Fk, Bk) => kk < 0 ? Bk >= 0 ? 0 : Fk - 1 : ((kk + Bk) % Fk + Fk) % Fk,
      BB = kk => "Left" === kk || "Right" === kk,
      RB = (kk, Fk, Bk) => {
        const Rk = BB(Bk),
          tk = Rk ? kk.top : kk.left,
          ak = Rk ? kk.height : kk.width,
          Xk = Rk ? Fk.top : Fk.left,
          bk = Rk ? Fk.height : Fk.width,
          wk = Math.max(0, Math.max(Xk - (tk + ak), tk - (Xk + bk)));
        return ak > 1.5 * bk ? {
          gap: wk,
          offset: Math.max(0, Xk - tk) + .1 * Math.max(0, tk - Xk)
        } : {
          gap: wk,
          offset: Math.abs(Xk + bk / 2 - (tk + ak / 2))
        }
      },
      tB = (kk, Fk, Bk) => {
        const Rk = ((kk, Fk, Bk) => {
          const Rk = kB(kk),
            tk = kB(Fk),
            ak = BB(Bk) ? Math.min(kk.width, Fk.width) / 4 : Math.min(kk.height, Fk.height) / 4;
          switch (Bk) {
            case "Right":
              return tk.x - Rk.x >= ak ? Math.max(0, Fk.left - (kk.left + kk.width)) : null;
            case "Left":
              return Rk.x - tk.x >= ak ? Math.max(0, kk.left - (Fk.left + Fk.width)) : null;
            case "Down":
              return tk.y - Rk.y >= ak ? Math.max(0, Fk.top - (kk.top + kk.height)) : null;
            case "Up":
              return Rk.y - tk.y >= ak ? Math.max(0, kk.top - (Fk.top + Fk.height)) : null
          }
        })(kk, Fk, Bk);
        if (null === Rk) return null;
        const tk = RB(kk, Fk, Bk);
        return Rk + 3 * tk.gap + .5 * tk.offset
      },
      aB = (kk, Fk) => Fk.visible || null !== Fk.scrollGroup && Fk.scrollGroup === kk.scrollGroup,
      XB = (kk, Fk, Bk, Rk) => {
        let tk = null,
          ak = 1 / 0;
        for (const Xk of Fk) {
          if (Xk.key === kk.key || !aB(kk, Xk) || !Rk(Xk)) continue;
          const Fk = tB(kk.rect, Xk.rect, Bk);
          null !== Fk && Fk < ak && (tk = Xk, ak = Fk)
        }
        return tk
      },
      bB = (kk, Fk, Bk) => {
        const Rk = XB(kk, Fk, Bk, (() => !0));
        if (!Rk || BB(Bk) || null === kk.scrollGroup || Rk.scrollGroup === kk.scrollGroup) return Rk;
        const tk = XB(kk, Fk, Bk, (Fk => 0 === RB(kk.rect, Fk.rect, Bk).gap));
        return null !== tk && void 0 !== tk ? tk : Rk
      },
      wB = (kk, Fk, Bk) => {
        let Rk = null,
          tk = 1 / 0;
        for (const ak of Fk) {
          if (!ak.visible || Bk && !Bk(ak)) continue;
          const Fk = kB(ak.rect),
            Xk = Math.hypot(Fk.x - kk.x, Fk.y - kk.y);
          Xk < tk && (Rk = ak, tk = Xk)
        }
        return Rk
      },
      dB = kk => {
        const {
          rect: Fk,
          clip: Bk
        } = kk;
        if (!Bk) return Fk;
        const Rk = Math.max(Fk.left, Bk.left),
          tk = Math.max(Fk.top, Bk.top);
        return {
          left: Rk,
          top: tk,
          width: Math.min(Fk.left + Fk.width, Bk.left + Bk.width) - Rk,
          height: Math.min(Fk.top + Fk.height, Bk.top + Bk.height) - tk
        }
      },
      sB = (kk, Fk) => Fk.x >= kk.left && Fk.x < kk.left + kk.width && Fk.y >= kk.top && Fk.y < kk.top + kk.height,
      VB = (kk, Fk) => {
        let Bk = null,
          Rk = 1 / 0;
        for (const tk of Fk) {
          const Fk = dB(tk);
          (tk.visible || tk.clip) && sB(Fk, kk) && (Fk.width * Fk.height < Rk && (Bk = tk, Rk = Fk.width * Fk.height))
        }
        return Bk
      },
      JB = kk => {
        let Fk = null;
        for (const Bk of kk) {
          if (!Bk.visible) continue;
          if (!Fk) {
            Fk = Bk;
            continue
          }
          const kk = Math.min(Fk.rect.height, Bk.rect.height) / 2,
            Rk = Bk.rect.top - Fk.rect.top;
          (Rk < -kk || Math.abs(Rk) <= kk && Bk.rect.left < Fk.rect.left) && (Fk = Bk)
        }
        return Fk
      },
      AB = (kk, Fk, Bk, Rk, tk) => {
        const ak = tk % Fk,
          Xk = Math.floor(tk / Fk);
        return {
          left: kk.left + ak * Bk,
          top: kk.top + Xk * Rk,
          width: kk.width,
          height: kk.height
        }
      },
      eB = ".EntireInventoryWrapper .Inventory, .HotBarGameItemsContainer",
      yB = ".LazyLoadedItemWrapper",
      fB = ["[data-inven-idx]", "[data-recipe-key]", "[role=button]", "button", "input:not([type=hidden])", "textarea", ".CreativeCategoryTab", ".CreativeCategoryDropdownButton", ".CreativeCategoryDropdownOption", "[data-craft-ingredient]"].join(","),
      mB = [
        ["hotbar", ".HotBarGameItemsContainer"],
        ["gameButtons", ".ClientGameInventoryButtons"],
        ["categories", ".CreativeCategoryRail"],
        ["recipe", ".CraftableInfo"],
        ["armour", ".ArmourItemSlots"],
        ["main", ".InvenBodyRight"],
        ["left", ".InvenLeftSide"]
      ],
      WB = ["gameButtons", "categories", "left", "recipe", "armour", "main", "hotbar"],
      vB = kk => kk.hasAttribute("data-inven-idx") ? "slot" : kk.hasAttribute("data-recipe-key") ? "recipe" : kk.hasAttribute("data-craft-ingredient") || VF(kk) ? "info" : iF(kk) ? "textField" : "button",
      iB = (kk, Fk) => "slot" === Fk ? Number(kk.getAttribute("data-inven-idx")) : null,
      YB = kk => kk.matches(yB) ? kk.querySelector(fB) : kk,
      oB = kk => {
        var Fk, Bk;
        return {
          element: kk,
          recipe: null !== (Fk = kk && (null === (Bk = YB(kk)) || void 0 === Bk ? void 0 : Bk.getAttribute("data-recipe-key"))) && void 0 !== Fk ? Fk : null
        }
      },
      LB = kk => {
        const Fk = YB(kk);
        if (!Fk) return {
          kind: "pending",
          idx: null
        };
        const Bk = vB(Fk);
        return {
          kind: Bk,
          idx: iB(Fk, Bk)
        }
      },
      OB = kk => {
        const Fk = [];
        for (const [Bk, Rk] of mB) {
          kk.matches(Rk) && Fk.push([Bk, kk]);
          for (const tk of kk.querySelectorAll(Rk)) Fk.push([Bk, tk])
        }
        return Fk
      },
      EB = (kk, Fk) => {
        for (const [Bk, Rk] of kk)
          if (Rk.contains(Fk)) return Bk;
        return "other"
      },
      SB = (kk, Fk, Bk, Rk, tk, ak, Xk, bk) => {
        var wk;
        const dk = kk.children,
          sk = lF(dk[0].getBoundingClientRect()),
          Vk = [{
            element: dk[0],
            rect: sk
          }];
        if (ak.push(Vk[0]), 0 === sk.width || 0 === sk.height) return;
        let Jk = 1;
        for (; Jk < dk.length && Math.abs(dk[Jk].getBoundingClientRect().top - sk.top) < 1;) Jk++;
        const Ak = kk => {
            const Fk = {
              element: dk[kk],
              rect: lF(dk[kk].getBoundingClientRect())
            };
            return ak.push(Fk), Vk.push(Fk), Fk.rect
          },
          ek = Jk > 1 ? Ak(1).left - sk.left : sk.width,
          yk = dk.length > Jk ? Ak(Jk).top - sk.top : sk.height,
          fk = Xk.find(kk, Fk);
        let mk = null;
        if (fk) {
          var Wk;
          const {
            container: kk,
            box: Fk
          } = fk;
          mk = null !== (Wk = bk.get(kk)) && void 0 !== Wk ? Wk : null, mk || (mk = {
            top: kk.scrollTop,
            left: kk.scrollLeft,
            box: Fk,
            viewport: Rk,
            targets: [],
            probes: [],
            holdsOthers: !1
          }, bk.set(kk, mk)), mk.probes.push(...Vk)
        }
        const vk = tk.length;
        for (let Ok = 0; Ok < dk.length; Ok++) {
          var ik, Yk, Lk;
          const kk = dk[Ok],
            Fk = AB(sk, Jk, ek, yk, Ok),
            ak = kk.firstElementChild ? kk.querySelector(fB) : null,
            Xk = ak ? vB(ak) : "pending";
          tk.push({
            key: jF(kk),
            rect: Fk,
            panel: Bk,
            scrollGroup: null !== (ik = null === fk || void 0 === fk ? void 0 : fk.group) && void 0 !== ik ? ik : null,
            visible: QF(Fk, Rk, null === fk || void 0 === fk ? void 0 : fk.box),
            clip: null !== (Yk = null === fk || void 0 === fk ? void 0 : fk.box) && void 0 !== Yk ? Yk : null,
            element: kk,
            kind: Xk,
            idx: ak ? iB(ak, Xk) : null,
            scrollContainer: null !== (Lk = null === fk || void 0 === fk ? void 0 : fk.container) && void 0 !== Lk ? Lk : null
          })
        }
        null === (wk = mk) || void 0 === wk || wk.targets.push(...tk.slice(vk))
      },
      NB = kk => kk instanceof Element && null !== kk.closest(yB),
      HB = kk => null !== kk.scrollContainer && NB(kk.element);
    class uB {
      constructor() {
        this.latched = null, this.presses = 0
      }
      press(kk, Fk, Bk, Rk) {
        this.latched = {
          source: kk,
          focusKey: Fk,
          sinceMs: Bk,
          hold: {
            id: ++this.presses,
            holdMs: Rk
          }
        }
      }
      update(kk, Fk, Bk) {
        const Rk = this.latched;
        return Rk ? kk && Fk === Rk.focusKey ? Bk - Rk.sinceMs < Rk.hold.holdMs ? null : (this.latched = null, Rk.source) : (this.latched = null, null) : null
      }
      getHold() {
        var kk, Fk;
        return null !== (kk = null === (Fk = this.latched) || void 0 === Fk ? void 0 : Fk.hold) && void 0 !== kk ? kk : null
      }
      reset() {
        this.latched = null
      }
    }
    var MB = Bk(8352);
    const gB = {
        kind: "none"
      },
      UB = kk => ({
        x: kk.clientX,
        y: kk.clientY
      }),
      cB = () => 2 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
    class GB {
      constructor() {
        this.hovered = gB, this.signature = "", this.holding = !1, this.lastPoint = {
          clientX: 0,
          clientY: 0
        }
      }
      sync(kk, Fk, Bk, Rk, tk) {
        const ak = null !== Fk ? {
            kind: "slot",
            idx: Fk
          } : Bk ? {
            kind: "element",
            element: Bk
          } : gB,
          Xk = `${tk}|${Math.round(Rk.clientX)},${Math.round(Rk.clientY)}`,
          bk = (wk = this.hovered, dk = ak, "slot" === wk.kind && "slot" === dk.kind ? wk.idx === dk.idx : "element" === wk.kind && "element" === dk.kind ? wk.element === dk.element : wk.kind === dk.kind);
        var wk, dk;
        if (bk && Xk === this.signature) return;
        const sk = !bk || tk !== this.holding || "" === this.signature;
        this.signature = Xk, this.holding = tk, this.lastPoint = Rk;
        const Vk = this.hovered;
        if (this.hovered = ak, "slot" === ak.kind) return this.leaveElement(Vk, null, Rk), void(sk ? kk.hover(ak.idx, Rk) : kk.moveTo(Rk));
        if (bk) return void("element" === ak.kind ? NF(ak.element, ak.element, UB(Rk)) : kk.hover(null, Rk));
        kk.hover(null, Rk);
        const Jk = "element" === ak.kind ? ak.element : null;
        "element" === Vk.kind ? NF(Vk.element, Jk, UB(Rk)) : Jk && NF(null, Jk, UB(Rk))
      }
      invalidate() {
        this.signature = ""
      }
      clear(kk) {
        const Fk = this.hovered;
        this.hovered = gB, this.signature = "", "none" !== Fk.kind && (this.leaveElement(Fk, null, this.lastPoint), kk && "slot" === Fk.kind && kk.hover(null, this.lastPoint))
      }
      leaveElement(kk, Fk, Bk) {
        "element" === kk.kind && NF(kk.element, Fk, UB(Bk))
      }
    }
    class TB {
      constructor() {
        this.lastTiltedMs = -1 / 0
      }
      update(kk, Fk) {
        Ok(kk) && (this.lastTiltedMs = Fk)
      }
      allowsClick(kk) {
        return kk - this.lastTiltedMs > 150
      }
    }
    class rB {
      constructor() {
        this.remainder = 0, this.container = null
      }
      isScrolling(kk) {
        return 0 !== (0, ek.i)(kk, .2).y
      }
      step(kk, Fk, Bk) {
        kk !== this.container && (this.container = kk, this.remainder = 0);
        const Rk = Ek(Fk, Bk).y;
        if (0 === Rk) return this.remainder = 0, !1;
        const tk = this.remainder + Rk,
          ak = Math.trunc(tk);
        if (this.remainder = tk - ak, 0 === ak) return !1;
        const Xk = kk.scrollTop;
        return kk.scrollTop = Xk + ak, kk.scrollTop !== Xk
      }
      current() {
        var kk;
        return null !== (kk = this.container) && void 0 !== kk && kk.isConnected ? this.container : null
      }
      reset() {
        this.remainder = 0, this.container = null
      }
    }
    var DB = Bk(8354);
    const zB = "[data-pad-inventory-default]",
      PB = ".HotBarGameItemsContainer .InvenItem.Selected",
      hB = {
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
      qB = [
        ["primary", "inventoryPrimary"],
        ["secondary", "inventorySecondary"],
        ["quickMove", "inventoryQuickMove"],
        ["hotbarSwap", "inventoryHotbarSwap"],
        ["back", "inventoryClose"],
        ["openButton", "inventory"]
      ],
      CB = ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryHotbarSwap", "inventoryClose", "inventoryDrop"],
      ZB = ["inventoryPanelPrevious", "inventoryPanelNext", "menuPageUp", "menuPageDown"],
      pB = [...CB, ...ZB],
      KB = () => {
        return kk = (0, sk.f)("inventory"), !pB.map(sk.f).includes(kk) && !(0, ek.H)(kk);
        var kk
      },
      xB = new Set(["slotPrimary", "slotSecondary", "slotQuickMove", "pressPrimary", "pressSecondary", "openKeyboard"]),
      jB = (kk, Fk) => {
        const Bk = !(null === Fk || void 0 === Fk || !Fk.isHolding());
        return function(kk, Fk) {
          const Bk = kk.find((kk => kk.visible && Fk(kk)));
          if (Bk) return Bk;
          for (var Rk = arguments.length, tk = new Array(Rk > 2 ? Rk - 2 : 0), ak = 2; ak < Rk; ak++) tk[ak - 2] = arguments[ak];
          for (const Xk of tk) {
            const Fk = JB(kk.filter(Xk));
            if (Fk) return Fk
          }
          return JB(kk)
        }(kk, (kk => {
          const {
            element: Fk
          } = kk;
          return Fk.matches(zB) || null !== Fk.querySelector(zB) || Fk.matches(PB)
        }), (kk => "slot" === kk.kind ? Bk || null !== kk.idx && !(null === Fk || void 0 === Fk || !Fk.hasItemAt(kk.idx)) : "recipe" === kk.kind || "pending" === kk.kind), (kk => "slot" === kk.kind || "button" === kk.kind))
      };
    class lB {
      constructor() {
        this.set = null, this.observer = new MutationObserver((kk => {
          kk.some((kk => !NB(kk.target))) && (this.set = null)
        })), this.invalidate = () => {
          this.set = null
        }, this.onScroll = kk => {
          this.scrolled(kk.target)
        }
      }
      get() {
        if (!this.set) {
          this.set = (() => {
            const kk = [],
              Fk = [];
            let Bk = !1;
            const Rk = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              tk = new Map,
              ak = new pF(Fk);
            for (const Vk of document.querySelectorAll(eB)) {
              const sk = OB(Vk);
              Bk ||= null !== Vk.querySelector(".CreativeCategoryTab");
              for (const Bk of Vk.querySelectorAll(`${yB}:first-child`)) {
                const Xk = Bk.parentElement;
                SB(Xk, Vk, EB(sk, Xk), Rk, kk, Fk, ak, tk)
              }
              for (const Bk of Vk.querySelectorAll(fB)) {
                var Xk, bk, wk, dk;
                if (Bk.closest(yB) || Bk.closest("[data-pad-ignore]")) continue;
                const Jk = null === (Xk = Bk.parentElement) || void 0 === Xk ? void 0 : Xk.closest(fB);
                if (Jk && Vk.contains(Jk)) continue;
                const Ak = vB(Bk),
                  ek = iB(Bk, Ak);
                if (-1 === ek) continue;
                const yk = lF(Bk.getBoundingClientRect());
                Fk.push({
                  element: Bk,
                  rect: yk
                });
                const fk = ak.findForParent(Bk.parentElement, Vk),
                  mk = fk && !tk.has(fk.container) ? fk : null;
                (mk ? nF(yk) : IF(yk, Rk)) && kk.push({
                  key: jF(Bk),
                  rect: yk,
                  panel: EB(sk, Bk),
                  scrollGroup: null !== (bk = null === mk || void 0 === mk ? void 0 : mk.group) && void 0 !== bk ? bk : null,
                  visible: QF(yk, Rk, null === mk || void 0 === mk ? void 0 : mk.box),
                  clip: null !== (wk = null === mk || void 0 === mk ? void 0 : mk.box) && void 0 !== wk ? wk : null,
                  element: Bk,
                  kind: Ak,
                  idx: ek,
                  scrollContainer: null !== (dk = null === mk || void 0 === mk ? void 0 : mk.container) && void 0 !== dk ? dk : null
                })
              }
            }
            for (const [Vk, Jk] of tk) Jk.holdsOthers = Fk.some((kk => kk.element !== Vk && Vk.contains(kk.element) && !kk.element.closest(yB)));
            const sk = new Map;
            for (const Vk of kk) sk.set(Vk.element, Vk);
            return {
              targets: kk,
              byElement: sk,
              hasCategories: Bk,
              probes: Fk,
              scrollers: tk
            }
          })(), this.observer.disconnect();
          for (const kk of document.querySelectorAll(eB)) this.observer.observe(kk, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "disabled", "aria-disabled", "tabindex", "data-inven-idx"]
          })
        }
        return this.set
      }
      scrolled(kk) {
        !this.set || kk instanceof Element && ((kk, Fk) => {
          const Bk = kk.scrollers.get(Fk);
          if (!Bk || Bk.holdsOthers || Fk.scrollLeft !== Bk.left) return !1;
          const Rk = Fk.scrollTop - Bk.top;
          if (0 === Rk) return !0;
          Bk.top = Fk.scrollTop;
          for (const tk of Bk.probes) tk.rect.top -= Rk;
          for (const tk of Bk.targets) tk.rect.top -= Rk, tk.visible = QF(tk.rect, Bk.viewport, Bk.box);
          return !0
        })(this.set, kk) || (this.set = null)
      }
      revalidate() {
        this.set && this.set.probes.some((kk => {
          return Fk = kk.rect, Bk = kk.element.getBoundingClientRect(), !(Fk.left === Bk.left && Fk.top === Bk.top && Fk.width === Bk.width && Fk.height === Bk.height);
          var Fk, Bk
        })) && (this.set = null)
      }
      disconnect() {
        this.observer.disconnect(), this.set = null
      }
    }
    const nB = new class {
        constructor() {
          this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(ek.B.map((kk => [kk, (0, yk.c)(ek.E)]))), this.stickRepeat = new ek.c((0, yk.c)(ek.fb)), this.pageUpTimer = (0, yk.c)(ek.ab), this.pageDownTimer = (0, yk.c)(ek.ab), this.stickGate = new Yk, this.pointer = null, this.activePress = null, this.dropLatch = new uB, this.scroller = new rB, this.scrollStickClick = new TB, this.hover = new GB, this.lastRealPointer = null, this.placeAfterCategory = null, this.hotbarPick = null, this.ring = new Ck, this.targets = new lB, this.hasCategories = !1, this.wasShowing = !1, this.state = MB.c, this.isActive = () => (0, ZF.g)(), this.isShowing = () => "inventory" === Vk.d.getActiveConsumerName() && (0, Ak.m)(), this.getState = () => this.state, this.isSteppingSlots = () => this.isShowing() && null === this.pointer, this.onDeactivate = () => {
            this.endInteraction((0, ZF.e)()), (0, ZF.g)() || this.forgetSurface()
          }, this.forgetSurface = () => {
            var kk;
            this.reopenSlotIdx = null !== (kk = this.focused ? LB(this.focused).idx : null) && void 0 !== kk ? kk : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, ZF.q)(), this.panelMemory.clear(), this.targets.disconnect()
          }, this.onFrame = kk => {
            (0, bk.unstable_batchedUpdates)((() => {
              this.frame(kk)
            }))
          }, this.shouldBlockRealPointer = kk => kk.isTrusted && !(0, mk.r)(kk) && this.isShowing(), this.noteRealPointer = kk => {
            kk instanceof MouseEvent && kk.isTrusted && !(0, mk.r)(kk) && (this.lastRealPointer ??= {
              x: 0,
              y: 0
            }, this.lastRealPointer.x = kk.clientX, this.lastRealPointer.y = kk.clientY)
          }, this.wakePressActs = kk => {
            var Fk;
            return kk === (0, sk.f)("inventoryClose") ? !(null !== (Fk = (0, ZF.e)()) && void 0 !== Fk && Fk.isHolding()) : !(kk !== (0, sk.f)("inventory") || !KB()) || ((0, ek.H)(kk) ? this.isNavButton(kk) : ZB.some((Fk => (0, sk.f)(Fk) === kk)))
          }
        }
        frame(kk) {
          var Fk, Bk, Rk, tk, ak;
          const Xk = (0, ZF.e)();
          if (!(0, Ak.m)()) return void(this.wasShowing && (this.endInteraction(Xk), this.rehoverRealPointer()));
          this.wasShowing = !0, this.applyFocusRequest(), kk.wokeDevice && this.focusWakePointer(!(null === Xk || void 0 === Xk || !Xk.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, Jk.g)().inventoryNavigation || this.pointer || this.engagePointer();
          const bk = performance.now();
          this.handleNavigation(kk, bk), this.handlePanels(kk), this.handlePaging(kk, bk), this.handleScroll(kk), this.handleButtons(kk, bk, Xk), this.applyFocusRequest(), this.pointer && this.hoverAtPointer();
          const wk = this.ensureFocus(),
            dk = this.focusContext(Xk);
          this.ring.show(wk);
          const Vk = "slot" === dk.kind ? dk.idx : null,
            ek = null !== (Fk = null === (Bk = dk.actionElement) || void 0 === Bk ? void 0 : Bk.querySelector(".DoCraftItem")) && void 0 !== Fk ? Fk : dk.actionElement;
          this.pointer ? (this.hover.sync(Xk, Vk, ek, ((kk, Fk) => {
            const Bk = Fk ? cB() : 0;
            return {
              clientX: kk.x - Bk,
              clientY: kk.y - Bk
            }
          })(this.pointer, dk.holding), dk.holding), hF.set({
            x: this.pointer.x,
            y: this.pointer.y,
            visible: !0,
            pressed: kk.isHeld((0, sk.f)("inventoryPrimary"))
          })) : wk && this.focused && this.hover.sync(Xk, Vk, ek, ((kk, Fk) => {
            if (!Fk) return {
              clientX: kk.left + kk.width - 10,
              clientY: kk.top + kk.height / 2 - 10
            };
            const Bk = cB();
            return {
              clientX: kk.left + kk.width / 2 - Bk,
              clientY: kk.top + kk.height / 2 - Bk
            }
          })(wk, dk.holding), dk.holding), this.publishState({
            showing: !0,
            kind: dk.kind,
            holding: dk.holding,
            slotHasItem: dk.slotHasItem,
            pressHints: null !== (Rk = null === (tk = dk.press) || void 0 === tk ? void 0 : tk.hints) && void 0 !== Rk ? Rk : null,
            hasCategories: this.hasCategories,
            hasList: !!this.focusTarget && HB(this.focusTarget),
            openButtonCloses: KB(),
            steppingSlots: null === this.pointer,
            quickMoveToHotbar: "slot" === dk.kind && !(null === (ak = dk.actionElement) || void 0 === ak || !ak.closest(".CreativeItemSlots")),
            dropStackHold: this.dropLatch.getHold(),
            hotbarPicking: null !== this.hotbarPick
          })
        }
        focusWakePointer(kk) {
          var Fk;
          const Bk = (0, Ak.e)();
          if (!Bk) return;
          this.targets.revalidate();
          const Rk = this.getTargets().targets;
          this.setFocus(null !== (Fk = VB(Bk, Rk)) && void 0 !== Fk ? Fk : kk ? wB(Bk, Rk, (kk => {
            let {
              rect: Fk
            } = kk;
            const Rk = Math.max(Fk.left - Bk.x, 0, Bk.x - (Fk.left + Fk.width)),
              tk = Math.max(Fk.top - Bk.y, 0, Bk.y - (Fk.top + Fk.height));
            return Math.hypot(Rk, tk) <= Math.min(Fk.width, Fk.height) / 2
          })) : null, !1), "cursor" === (0, Jk.g)().inventoryNavigation && (this.pointer = {
            x: Bk.x,
            y: Bk.y,
            speedRamp: 0
          })
        }
        rehoverRealPointer() {
          const kk = this.lastRealPointer;
          if (!kk || "keyboardMouse" !== wk.c.get("activeInputDevice")) return;
          const Fk = document.elementFromPoint(kk.x, kk.y);
          Fk && NF(null, Fk, kk)
        }
        endInteraction(kk) {
          this.wasShowing = !1, this.hotbarPick = null, this.releasePress(), this.dropLatch.reset(), this.scroller.reset();
          for (const Fk of this.dpadTimers.values()) Fk.reset();
          this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(kk), this.ring.hide(), this.releasePointer(), this.publishState(MB.c)
        }
        getTargets() {
          const kk = this.targets.get();
          return this.hasCategories = kk.hasCategories, kk
        }
        currentTarget() {
          var kk;
          return this.focused && null !== (kk = this.getTargets().byElement.get(this.focused)) && void 0 !== kk ? kk : null
        }
        readFocusRect() {
          const kk = this.focused;
          if (null === kk || void 0 === kk || !kk.isConnected || !kk.closest(eB)) return null;
          const Fk = kk.getBoundingClientRect();
          return Fk.width > 0 && Fk.height > 0 ? {
            left: Fk.left,
            top: Fk.top,
            width: Fk.width,
            height: Fk.height
          } : null
        }
        ensureFocus() {
          const kk = this.readFocusRect();
          if (kk || this.pointer) return kk;
          const {
            targets: Fk,
            byElement: Bk
          } = this.getTargets();
          let Rk = null,
            tk = !1;
          if (this.lastRect) Rk = wB(kB(this.lastRect), Fk);
          else {
            var ak, Xk;
            const kk = ((kk, Fk) => {
                const Bk = document.querySelector(".EntireInventoryWrapper [data-pad-inventory-start]");
                return Bk ? jB(kk.filter((kk => Bk.contains(kk.element))), Fk) : null
              })(Fk, (0, ZF.e)()),
              bk = Fk.find((kk => null !== kk.idx && kk.idx === this.reopenSlotIdx)),
              wk = document.querySelector(PB);
            tk = null !== kk || void 0 !== bk, Rk = null !== (ak = null !== (Xk = null !== kk && void 0 !== kk ? kk : bk) && void 0 !== Xk ? Xk : wk && Bk.get(wk)) && void 0 !== ak ? ak : JB(Fk)
          }
          return this.setFocus(Rk, tk), this.lastRect
        }
        setFocus(kk) {
          let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          kk && (this.focused = kk.element, this.focusTarget = kk, this.panelMemory.set(kk.panel, kk.element), Fk && kk.scrollContainer && ((kk, Fk) => {
            const Bk = kk.getBoundingClientRect(),
              Rk = Gk(Fk),
              tk = Fk.scrollTop;
            return Bk.top < Rk.top ? Fk.scrollTop -= Rk.top - Bk.top : Bk.bottom > Rk.bottom && (Fk.scrollTop += Bk.bottom - Rk.bottom), Fk.scrollTop !== tk
          })(kk.element, kk.scrollContainer) && this.targets.invalidate(), this.lastRect = this.readFocusRect(), this.followFocusJump())
        }
        followFocusJump() {
          if (this.pointer)
            if ("cursor" === (0, Jk.g)().inventoryNavigation) {
              if (this.lastRect) {
                const kk = kB(this.lastRect);
                this.pointer = {
                  x: kk.x,
                  y: kk.y,
                  speedRamp: 0
                }
              }
            } else this.releasePointer()
        }
        engagePointer() {
          const kk = this.lastRect ? kB(this.lastRect) : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          };
          this.pointer = {
            x: kk.x,
            y: kk.y,
            speedRamp: 0
          }
        }
        releasePointer() {
          this.pointer = null, hF.hide()
        }
        hoverAtPointer() {
          var kk;
          const Fk = VB(this.pointer, this.getTargets().targets);
          this.focusTarget = Fk, (null === Fk || void 0 === Fk ? void 0 : Fk.element) !== this.focused && (this.focused = null !== (kk = null === Fk || void 0 === Fk ? void 0 : Fk.element) && void 0 !== kk ? kk : null, Fk && (this.panelMemory.set(Fk.panel, Fk.element), this.lastRect = this.readFocusRect()))
        }
        moveCursor(kk, Fk) {
          const Bk = this.focusTarget,
            Rk = Bk && (0, Jk.g)().cursorMagnetism ? kB(dB(Bk)) : null;
          this.pointer = Lk(this.pointer, {
            stick: kk.leftStick,
            moveDeadzone: (0, Jk.g)().moveDeadzone,
            dpad: Fk,
            dtMs: kk.dtMs,
            cursorSpeedPercent: (0, Jk.g)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: {
              overInteractive: !1,
              magnetTarget: Rk
            }
          })
        }
        move(kk) {
          this.targets.revalidate();
          const Fk = this.currentTarget();
          Fk && this.setFocus(bB(Fk, this.getTargets().targets, kk))
        }
        step(kk) {
          const Fk = this.pointer;
          if (Fk && (this.releasePointer(), !this.focused)) return this.targets.revalidate(), void this.setFocus(((kk, Fk, Bk) => {
            var Rk;
            const tk = {
              key: "",
              rect: {
                left: kk.x,
                top: kk.y,
                width: 0,
                height: 0
              },
              panel: "",
              scrollGroup: null,
              visible: !0,
              clip: null
            };
            return null !== (Rk = bB(tk, Fk, Bk)) && void 0 !== Rk ? Rk : wB(kk, Fk)
          })(Fk, this.getTargets().targets, kk));
          this.move(kk)
        }
        isNavButton(kk) {
          return !CB.some((Fk => (0, sk.f)(Fk) === kk)) && !(kk === (0, sk.f)("inventory") && KB())
        }
        handleNavigation(kk, Fk) {
          const Bk = (0, Jk.g)().inventoryNavigation,
            Rk = {
              x: 0,
              y: 0
            };
          let tk = null;
          for (const wk of ek.B) {
            const ak = this.isNavButton(wk) && kk.isHeld(wk);
            ak && (Rk.x += hB[wk].x, Rk.y += hB[wk].y), this.dpadTimers.get(wk).update(ak, Fk) && "cursor" !== Bk && (tk ??= wk)
          }
          const ak = this.stickGate.update(kk.leftStick, (0, Jk.g)().moveDeadzone);
          if (tk && (this.step(tk), this.stickGate.lock()), "slot" !== Bk) {
            const Fk = ((kk, Fk, Bk, Rk) => "hybrid" !== kk ? "cursor" === kk : !Rk && (Fk || Bk))(Bk, null !== this.pointer, ak, null !== tk);
            return Fk && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(kk, "cursor" === Bk ? Rk : {
              x: 0,
              y: 0
            }))
          }
          const Xk = (0, ek.i)(kk.leftStick, (0, Jk.g)().moveDeadzone),
            bk = this.stickRepeat.update(ak ? (0, ek.ib)(Xk) : null, Fk);
          bk && this.move(bk)
        }
        applyCategoryPlace() {
          const kk = this.placeAfterCategory;
          if (!kk) return;
          this.placeAfterCategory = null, this.targets.invalidate();
          const Fk = wB(kB(kk.rect), this.getTargets().targets, (Fk => Fk.scrollGroup === kk.scrollGroup));
          this.setFocus(Fk, !1)
        }
        applyFocusRequest() {
          const kk = (0, ZF.q)();
          kk && (this.targets.invalidate(), this.setFocus((0, ZF.b)(this.getTargets().targets, kk)))
        }
        handlePanels(kk) {
          var Fk, Bk, Rk;
          const tk = kk.wasPressed((0, sk.f)("inventoryPanelPrevious")),
            ak = kk.wasPressed((0, sk.f)("inventoryPanelNext"));
          if (!tk && !ak) return;
          const {
            targets: Xk
          } = this.getTargets(), bk = (wk = ((kk, Fk) => {
            const Bk = [];
            for (const tk of kk) tk.visible && !Bk.includes(tk.panel) && Bk.push(tk.panel);
            const Rk = kk => {
              const Rk = Fk.indexOf(kk);
              return -1 === Rk ? Fk.length + Bk.indexOf(kk) : Rk
            };
            return Bk.sort(((kk, Fk) => Rk(kk) - Rk(Fk)))
          })(Xk, WB), dk = null !== (Fk = null === (Bk = this.focusTarget) || void 0 === Bk ? void 0 : Bk.panel) && void 0 !== Fk ? Fk : null, Vk = ak ? 1 : -1, 0 === wk.length ? null : wk[FB(null === dk ? -1 : wk.indexOf(dk), wk.length, Vk)]);
          var wk, dk, Vk;
          if (null === bk) return;
          const Jk = this.panelMemory.get(bk),
            Ak = Xk.filter((kk => kk.panel === bk)),
            ek = null !== (Rk = Ak.find((kk => kk.element === Jk && kk.visible))) && void 0 !== Rk ? Rk : jB(Ak, (0, ZF.e)());
          this.setFocus(ek)
        }
        handlePaging(kk, Fk) {
          const Bk = (0, sk.f)("menuPageUp"),
            Rk = (0, sk.f)("menuPageDown"),
            tk = this.pageUpTimer.update(kk.isHeld(Bk), Fk),
            ak = this.pageDownTimer.update(kk.isHeld(Rk), Fk);
          if (!tk && !ak) return;
          const Xk = ak ? 1 : -1;
          if (!kk.wasPressed(ak ? Rk : Bk) && this.hasCategories) return;
          if ((kk => {
              const Fk = Array.from(document.querySelectorAll(".EntireInventoryWrapper .CreativeCategoryTab"));
              if (0 === Fk.length) return !1;
              const Bk = Fk.findIndex((kk => kk.classList.contains("Selected"))),
                Rk = Fk[FB(Bk, Fk.length, kk)];
              return SF(Rk, YF(Rk)), !0
            })(Xk)) {
            var bk, wk;
            this.targets.invalidate();
            const kk = null !== (bk = null === (wk = this.focusTarget) || void 0 === wk ? void 0 : wk.scrollGroup) && void 0 !== bk ? bk : null,
              Fk = this.readFocusRect();
            return void(this.placeAfterCategory = null !== kk && Fk && !this.pointer ? {
              rect: Fk,
              scrollGroup: kk
            } : null)
          }
          const {
            targets: dk
          } = this.getTargets(), Vk = this.currentTarget(), Jk = Vk && HB(Vk) ? Vk : dk.find((kk => HB(kk) && kk.visible));
          if (!Jk) return;
          const Ak = ((kk, Fk, Bk, Rk) => {
            if (null === kk.scrollGroup) return null;
            const tk = kB(kk.rect),
              ak = tk.x,
              Xk = tk.y + ("Down" === Bk ? Rk : -Rk);
            let bk = null,
              wk = 1 / 0;
            for (const dk of Fk) {
              if (dk.scrollGroup !== kk.scrollGroup || dk.key === kk.key) continue;
              const Fk = kB(dk.rect);
              if ("Down" === Bk ? Fk.y <= tk.y : Fk.y >= tk.y) continue;
              const Rk = Math.hypot(Fk.x - ak, Fk.y - Xk);
              Rk < wk && (bk = dk, wk = Rk)
            }
            return bk
          })(Jk, dk, Xk > 0 ? "Down" : "Up", Jk.scrollContainer.clientHeight);
          this.setFocus(null !== Ak && void 0 !== Ak ? Ak : Jk)
        }
        handleScroll(kk) {
          var Fk, Bk, Rk, tk, ak, Xk;
          if (!this.scroller.isScrolling(kk.rightStick)) return void this.scroller.reset();
          const {
            targets: bk
          } = this.getTargets(), wk = this.pointer, dk = !wk && this.focusTarget && HB(this.focusTarget) ? this.focusTarget.scrollContainer : null, sk = wk && (null === (Fk = bk.find((kk => kk.clip && sB(kk.clip, wk)))) || void 0 === Fk ? void 0 : Fk.scrollContainer), Vk = null !== (Bk = null !== (Rk = null !== (tk = this.scroller.current()) && void 0 !== tk ? tk : sk) && void 0 !== Rk ? Rk : dk) && void 0 !== Bk ? Bk : null === (ak = bk.find(HB)) || void 0 === ak ? void 0 : ak.scrollContainer;
          if (!Vk || !this.scroller.step(Vk, kk.rightStick, kk.dtMs)) return;
          this.targets.scrolled(Vk);
          const Jk = wk || (null === (Xk = this.focusTarget) || void 0 === Xk ? void 0 : Xk.scrollContainer) !== Vk ? null : this.readFocusRect();
          if (!Jk) return;
          const Ak = Gk(Vk),
            ek = kB(Jk);
          if (ek.y < Ak.top || ek.y > Ak.bottom) {
            const kk = this.focusTarget.scrollGroup,
              Fk = wB(ek, this.getTargets().targets, (Fk => Fk.scrollGroup === kk));
            this.setFocus(Fk, !1)
          }
        }
        focusContext(kk) {
          const {
            kind: Fk,
            idx: Bk
          } = this.focused ? LB(this.focused) : {
            kind: null,
            idx: null
          }, Rk = this.focused ? YB(this.focused) : null, tk = Rk ? (0, DB.b)(Rk) : null;
          return {
            kind: Fk,
            idx: Bk,
            actionElement: Rk,
            press: tk,
            hasPress: null !== tk,
            hasBack: !(null === tk || void 0 === tk || !tk.back),
            holding: kk.isHolding(),
            slotHasItem: null !== Bk && kk.hasItemAt(Bk)
          }
        }
        handleButtons(kk, Fk, Bk) {
          var Rk, tk;
          if (!this.activePress || kk.isHeld(this.activePress.button) && (Rk = this.activePress.target, tk = this.focused, null !== Rk.recipe ? oB(tk).recipe === Rk.recipe : tk === Rk.element) || this.releasePress(), this.scrollStickClick.update(kk.rightStick, Fk), !this.handleHotbarPick(kk, Bk)) {
            for (const [Rk, tk] of qB) {
              const ak = (0, sk.f)(tk);
              if (!kk.wasPressed(ak) || "openButton" === Rk && !KB()) continue;
              if ("RS" === ak && !this.scrollStickClick.allowsClick(Fk)) continue;
              const Xk = this.focusContext(Bk),
                bk = qF(Rk, Xk);
              bk && this.runIntent(bk, Xk, ak, Bk)
            }
            this.handleDrop(kk, Fk, Bk)
          }
        }
        handleHotbarPick(kk, Fk) {
          const Bk = this.hotbarPick;
          if (!Bk) return !1;
          const Rk = kk.wasPressed((0, sk.f)("inventoryPrimary")) || kk.wasPressed((0, sk.f)("inventoryHotbarSwap"));
          if (!Rk && !kk.wasPressed((0, sk.f)("inventoryClose")) && !Fk.isHolding()) return !(kk.wasPressed((0, sk.f)("inventory")) && KB());
          const tk = this.focusTarget;
          Rk && "hotbar" === (null === tk || void 0 === tk ? void 0 : tk.panel) && null !== tk.idx && tk.idx !== Bk.idx && (Fk.swapWithHotbar(tk.idx, Bk.idx), this.afterAction()), this.hotbarPick = null;
          const ak = Bk.element.isConnected ? this.getTargets().byElement.get(Bk.element) : void 0;
          return ak && this.setFocus(ak), !0
        }
        startHotbarPick(kk) {
          var Fk;
          const {
            targets: Bk,
            byElement: Rk
          } = this.getTargets(), tk = document.querySelector(PB), ak = null !== (Fk = tk && Rk.get(tk)) && void 0 !== Fk ? Fk : Bk.find((kk => "hotbar" === kk.panel));
          ak && this.focused && (this.hotbarPick = {
            idx: kk,
            element: this.focused
          }, this.setFocus(ak))
        }
        focusKey() {
          return this.focused ? jF(this.focused) : null
        }
        handleDrop(kk, Fk, Bk) {
          const Rk = (0, sk.f)("inventoryDrop");
          if (kk.wasPressed(Rk)) {
            const kk = (tk = this.focusContext(Bk)).holding ? {
              kind: "Hb"
            } : "slot" === tk.kind && tk.slotHasItem && null !== tk.idx ? {
              kind: "slot",
              idx: tk.idx
            } : null;
            return void(kk && (this.dropFrom(kk, !1, Bk), this.dropLatch.press(kk, this.focusKey(), Fk, fk.e[(0, Jk.g)().tapHoldTime].dropStackMs), this.afterAction()))
          }
          var tk;
          const ak = this.dropLatch.update(kk.isHeld(Rk), this.focusKey(), Fk);
          ak && ((kk, Fk, Bk) => "Hb" === kk.kind ? Fk : !Fk && Bk(kk.idx))(ak, Bk.isHolding(), Bk.hasItemAt) && (this.dropFrom(ak, !0, Bk), this.afterAction())
        }
        dropFrom(kk, Fk, Bk) {
          "Hb" === kk.kind ? Bk.dropHeld(Fk, this.slotPoint()) : Bk.dropSlot(kk.idx, Fk)
        }
        slotPoint() {
          return this.pointer ? {
            clientX: this.pointer.x,
            clientY: this.pointer.y
          } : this.lastRect ? (kk => {
            const Fk = kB(kk);
            return {
              clientX: Fk.x,
              clientY: Fk.y
            }
          })(this.lastRect) : {
            clientX: 0,
            clientY: 0
          }
        }
        runIntent(kk, Fk, Bk, Rk) {
          const tk = Fk.idx,
            ak = Fk.actionElement;
          switch (ak && xB.has(kk) && (0, mk.u)(ak), kk) {
            case "slotPrimary":
              Rk.primary(tk, this.slotPoint());
              break;
            case "slotSecondary":
              Rk.secondary(tk, this.slotPoint());
              break;
            case "slotQuickMove":
              Rk.quickMove(tk, this.slotPoint());
              break;
            case "hotbarPick":
              this.startHotbarPick(tk);
              break;
            case "pressPrimary":
            case "pressSecondary":
              this.startPress(Fk.press, "pressPrimary" === kk ? "primary" : "secondary", Bk);
              break;
            case "click":
              SF(ak, YF(ak));
              break;
            case "openKeyboard":
              iF(ak) && HF(ak);
              break;
            case "pressBack":
              Fk.press.back();
              break;
            case "cancel":
              Rk.cancel();
              break;
            case "close":
              return this.releasePress(), void Rk.close()
          }
          this.afterAction()
        }
        startPress(kk, Fk, Bk) {
          this.releasePress(), kk.press(Fk) && (this.activePress = {
            handlers: kk,
            button: Bk,
            target: oB(this.focused)
          })
        }
        releasePress() {
          var kk, Fk, Bk;
          null === (kk = this.activePress) || void 0 === kk || null === (Fk = (Bk = kk.handlers).release) || void 0 === Fk || Fk.call(Bk), this.activePress = null
        }
        afterAction() {
          this.targets.invalidate(), this.hover.invalidate()
        }
        publishState(kk) {
          ((kk, Fk) => {
            var Bk, Rk, tk, ak, Xk, bk;
            return kk.showing === Fk.showing && kk.kind === Fk.kind && kk.holding === Fk.holding && kk.slotHasItem === Fk.slotHasItem && (null === (Bk = kk.pressHints) || void 0 === Bk ? void 0 : Bk.primary) === (null === (Rk = Fk.pressHints) || void 0 === Rk ? void 0 : Rk.primary) && (null === (tk = kk.pressHints) || void 0 === tk ? void 0 : tk.secondary) === (null === (ak = Fk.pressHints) || void 0 === ak ? void 0 : ak.secondary) && (null === (Xk = kk.pressHints) || void 0 === Xk ? void 0 : Xk.back) === (null === (bk = Fk.pressHints) || void 0 === bk ? void 0 : bk.back) && kk.hasCategories === Fk.hasCategories && kk.hasList === Fk.hasList && kk.openButtonCloses === Fk.openButtonCloses && kk.steppingSlots === Fk.steppingSlots && kk.hotbarPicking === Fk.hotbarPicking && kk.quickMoveToHotbar === Fk.quickMoveToHotbar && kk.dropStackHold === Fk.dropStackHold
          })(kk, this.state) || (this.state = kk, dk.o.Hf(MB.e, kk))
        }
      },
      IB = ["pointermove", "pointerover", "pointerout", "mouseover", "mouseout"];
    var QB = Bk(8360),
      kR = Bk(279),
      FR = Bk(1585),
      BR = Bk(7831);
    const RR = "[data-pad-secondary]",
      tR = kk => kk instanceof HTMLElement && sF(kk) && !VF(kk),
      aR = kk => {
        const Fk = kk.querySelector(RR);
        if (Fk && tR(Fk)) return Fk;
        for (const tk of null !== (Bk = null === (Rk = kk.parentElement) || void 0 === Rk ? void 0 : Rk.children) && void 0 !== Bk ? Bk : []) {
          var Bk, Rk;
          if (tk !== kk && tk.matches(RR) && tR(tk)) return tk
        }
        return null
      },
      XR = (kk, Fk, Bk, Rk) => Math.max(0, Math.max(kk, Bk) - Math.min(Fk, Rk)),
      bR = (kk, Fk, Bk, Rk) => Math.max(0, Math.min(Fk, Rk) - Math.max(kk, Bk)),
      wR = (kk, Fk, Bk) => {
        const Rk = (kk.left + kk.right) / 2,
          tk = (kk.top + kk.bottom) / 2,
          ak = (Fk.left + Fk.right) / 2,
          Xk = (Fk.top + Fk.bottom) / 2;
        if ("Left" === Bk || "Right" === Bk) {
          const bk = "Right" === Bk ? 1 : -1;
          return {
            forwardGap: "Right" === Bk ? Fk.left - kk.right : kk.left - Fk.right,
            centreForward: (ak - Rk) * bk,
            sidewaysGap: XR(kk.top, kk.bottom, Fk.top, Fk.bottom),
            sidewaysOverlap: bR(kk.top, kk.bottom, Fk.top, Fk.bottom),
            centreSideways: Math.abs(Xk - tk),
            startSideways: Math.abs(Fk.top - kk.top),
            fromSidewaysSize: kk.bottom - kk.top,
            toSidewaysSize: Fk.bottom - Fk.top,
            toLength: Fk.right - Fk.left
          }
        }
        const bk = "Down" === Bk ? 1 : -1;
        return {
          forwardGap: "Down" === Bk ? Fk.top - kk.bottom : kk.top - Fk.bottom,
          centreForward: (Xk - tk) * bk,
          sidewaysGap: XR(kk.left, kk.right, Fk.left, Fk.right),
          sidewaysOverlap: bR(kk.left, kk.right, Fk.left, Fk.right),
          centreSideways: Math.abs(ak - Rk),
          startSideways: Math.abs(Fk.left - kk.left),
          fromSidewaysSize: kk.right - kk.left,
          toSidewaysSize: Fk.right - Fk.left,
          toLength: Fk.bottom - Fk.top
        }
      },
      dR = kk => kk.centreForward > .5 && kk.forwardGap >= -kk.toLength / 2,
      sR = kk => {
        const Fk = kk.sidewaysOverlap > 0 ? 0 : 2 * kk.fromSidewaysSize,
          Bk = kk.fromSidewaysSize > 1.5 * kk.toSidewaysSize ? kk.startSideways : kk.centreSideways;
        return Math.max(0, kk.forwardGap) + 3 * kk.sidewaysGap + Fk + .1 * Bk
      },
      VR = (kk, Fk) => bR(kk.top, kk.bottom, Fk.top, Fk.bottom) > 0 || Fk.bottom - Fk.top > Fk.right - Fk.left,
      JR = (kk, Fk, Bk, Rk, tk, ak) => {
        const Xk = tk ? eR(kk, Fk, Bk, tk) : new Set,
          bk = fR(kk, Fk, Bk, Xk);
        return bk < 0 && Xk.size > 0 && ak ? AR(kk, Fk, Bk, ak) : Rk && bk >= 0 ? yR(kk, Fk, Bk, Rk, bk, Xk) : bk
      },
      AR = (kk, Fk, Bk, Rk) => {
        const tk = new Set,
          ak = fR(kk, Fk, "Up", tk) >= 0,
          Xk = fR(kk, Fk, "Down", tk) >= 0,
          bk = new Set;
        return Fk.forEach(((Fk, Bk) => {
          const tk = Fk.top + Fk.bottom < kk.top + kk.bottom;
          Rk[Bk] && !(tk ? ak : Xk) || bk.add(Bk)
        })), fR(kk, Fk, Bk, bk)
      },
      eR = (kk, Fk, Bk, Rk) => {
        const tk = new Set;
        return "Left" !== Bk && "Right" !== Bk || Fk.forEach(((Fk, Bk) => {
          Rk[Bk] && bR(kk.top, kk.bottom, Fk.top, Fk.bottom) <= 0 && tk.add(Bk)
        })), tk
      },
      yR = (kk, Fk, Bk, Rk, tk, ak) => {
        const Xk = wR(kk, Fk[tk], Bk).forwardGap;
        let bk = tk,
          wk = Rk[tk],
          dk = 1 / 0;
        return Fk.forEach(((Fk, sk) => {
          const Vk = Rk[sk];
          if (ak.has(sk) || Vk < wk || Vk === wk && bk === tk) return;
          const Jk = wR(kk, Fk, Bk);
          if (!dR(Jk) || Jk.forwardGap < 0 || Jk.forwardGap >= Xk) return;
          const Ak = sR(Jk);
          (Vk > wk || Ak < dk) && (bk = sk, wk = Vk, dk = Ak)
        })), bk
      },
      fR = (kk, Fk, Bk, Rk) => {
        let tk = -1,
          ak = 1 / 0;
        if (Fk.forEach(((Fk, Xk) => {
            const bk = ((kk, Fk, Bk) => {
              const Rk = wR(kk, Fk, Bk);
              if (!dR(Rk)) return null;
              const tk = Math.max(0, Rk.forwardGap);
              return Rk.sidewaysOverlap <= 0 && Rk.sidewaysGap > 2 * (tk + 1) ? null : sR(Rk)
            })(kk, Fk, Bk);
            null !== bk && bk < ak && !Rk.has(Xk) && (ak = bk, tk = Xk)
          })), tk < 0) return -1;
        const Xk = Fk[tk],
          bk = wR(kk, Xk, Bk).forwardGap;
        let wk = bk,
          dk = tk;
        return Fk.forEach(((Fk, ak) => {
          if (ak === tk || Rk.has(ak) || !((kk, Fk, Bk) => {
              const Rk = "Left" === Bk || "Right" === Bk,
                tk = Rk ? bR(kk.top, kk.bottom, Fk.top, Fk.bottom) : bR(kk.left, kk.right, Fk.left, Fk.right),
                ak = Rk ? Math.min(kk.bottom - kk.top, Fk.bottom - Fk.top) : Math.min(kk.right - kk.left, Fk.right - Fk.left);
              return tk > 0 && tk >= ak / 2
            })(Fk, Xk, Bk)) return;
          const sk = wR(kk, Fk, Bk);
          dR(sk) && sk.forwardGap + sk.toLength <= bk + 1 && sk.forwardGap < wk && (wk = sk.forwardGap, dk = ak)
        })), dk
      },
      mR = (kk, Fk) => {
        let Bk = -1,
          Rk = 1 / 0;
        return Fk.forEach(((Fk, tk) => {
          const ak = Math.max(Fk.left - kk.x, 0, kk.x - Fk.right),
            Xk = Math.max(Fk.top - kk.y, 0, kk.y - Fk.bottom),
            bk = Math.hypot(ak, Xk);
          bk < Rk && (Rk = bk, Bk = tk)
        })), Bk
      },
      WR = (kk, Fk) => {
        const Bk = Math.min(kk.bottom - kk.top, Fk.bottom - Fk.top) / 2;
        return Math.abs(kk.top - Fk.top) > Bk ? kk.top - Fk.top : kk.left - Fk.left
      },
      vR = kk => {
        let Fk = -1;
        for (let Bk = 0; Bk < kk.length; Bk++)(Fk < 0 || WR(kk[Bk], kk[Fk]) < 0) && (Fk = Bk);
        return Fk
      };
    var iR = Bk(1623),
      YR = Bk(8364),
      oR = Bk(8369);
    const LR = kk => {
        if ("death" !== kk || "inGame" !== wk.c.get("gameState") || "off" === (0, Jk.g)().quickChat || null === (0, iR.e)()) return !1;
        const Fk = (0, sk.f)("chat");
        return Fk !== (0, sk.f)("menuConfirm") && Fk !== (0, sk.f)("menuBack")
      },
      OR = new YR.d;
    var ER = Bk(4060),
      SR = Bk(8372);
    const NR = kk => {
        let Fk = null;
        for (const Bk of kk.querySelectorAll("[data-pad-tabs]")) sF(Bk) && (!Fk || Number(Bk.dataset.padTabs) < Number(Fk.dataset.padTabs)) && (Fk = Bk);
        return Fk
      },
      HR = (kk, Fk, Bk, Rk) => {
        kk.focusWhenFound((() => {
          const tk = kk.pickInitial(Fk);
          if (tk && !Bk.has(tk) && (null === Rk || void 0 === Rk || !Rk.contains(tk))) return tk;
          const ak = ((kk, Fk) => {
              const Bk = Fk => kk.getEnabledCandidates(Fk).filter((kk => !kk.closest("[data-pad-tabs]")));
              for (const Rk of vF(Fk)) {
                const kk = Bk(Rk);
                if (kk.length > 0) return kk
              }
              return Bk(Fk)
            })(kk, Fk).filter((kk => !Bk.has(kk))),
            Xk = vR(ak.map((kk => kk.getBoundingClientRect())));
          return Xk >= 0 ? ak[Xk] : null
        }), 3e3)
      },
      uR = (kk, Fk, Bk, Rk) => {
        var tk;
        const ak = ((kk, Fk) => {
          if (0 === kk.length) return null;
          const Bk = kk.findIndex((kk => "true" === kk.dataset.padSelected));
          return Bk < 0 ? Fk > 0 ? kk[0] : kk[kk.length - 1] : kk[(Bk + Fk + kk.length) % kk.length]
        })([...Bk.querySelectorAll("[data-pad-tab]")].filter((kk => sF(kk) && !VF(kk))), Rk);
        if (!ak) return;
        const Xk = null !== (tk = null === kk || void 0 === kk ? void 0 : kk.getFocused()) && void 0 !== tk ? tk : null,
          bk = !(null === Xk || void 0 === Xk || !Xk.isConnected) && Bk.contains(Xk),
          wk = kk && !bk ? new Set(kk.getEnabledCandidates(Fk)) : null;
        uF(ak), kk && (wk ? HR(kk, Fk, wk, Bk) : kk.setFocus(ak, {
          byUser: !0
        }))
      },
      MR = kk => {
        var Fk;
        const Bk = Gk(null !== (Fk = Hk(kk, "x")) && void 0 !== Fk ? Fk : kk),
          Rk = eF(kk).filter((kk => !VF(kk))),
          tk = Rk.filter((kk => Tk(kk.getBoundingClientRect(), Bk)));
        return (tk.length > 0 ? tk : Rk).sort(((kk, Fk) => WR(kk.getBoundingClientRect(), Fk.getBoundingClientRect())))
      },
      gR = (kk, Fk, Bk) => {
        const Rk = [...Fk.querySelectorAll("[data-pad-row]")].filter(sF),
          tk = kk.getFocused(),
          ak = tk ? Rk.findIndex((kk => kk.contains(tk))) : -1;
        let Xk = 0,
          bk = Bk > 0 ? 0 : Rk.length - 1;
        if (ak >= 0 && tk) Xk = Math.max(0, MR(Rk[ak]).indexOf(tk)), bk = ak + Bk;
        else if (tk) {
          const kk = tk.getBoundingClientRect(),
            Fk = Rk.map((Fk => {
              const Rk = Fk.getBoundingClientRect();
              return Bk > 0 ? Rk.top >= kk.top : Rk.bottom <= kk.bottom
            }));
          bk = Bk > 0 ? Fk.indexOf(!0) : Fk.lastIndexOf(!0)
        }
        for (let wk = bk; wk >= 0 && wk < Rk.length; wk += Bk) {
          const Fk = MR(Rk[wk]);
          if (Fk.length > 0) return void kk.setFocus(Fk[Math.min(Xk, Fk.length - 1)], {
            byUser: !0
          })
        }
      },
      UR = (kk, Fk, Bk) => {
        var Rk, tk;
        const ak = null !== (Rk = null === kk || void 0 === kk ? void 0 : kk.getFocused()) && void 0 !== Rk ? Rk : null,
          Xk = null !== ak && void 0 !== ak && ak.closest("[data-pad-row]") ? "x" : "y",
          bk = null !== (tk = ak ? Hk(ak, Xk, Fk) : null) && void 0 !== tk ? tk : Mk(Fk, Xk);
        if (!bk) return;
        const wk = ak ? YF(ak) : null;
        if (ck(bk, Xk, Bk * ("y" === Xk ? bk.clientHeight : bk.clientWidth) * .85), !kk || !wk) return;
        const dk = Gk(bk),
          sk = kk.getEnabledCandidates(Fk).filter((kk => bk.contains(kk) && Tk(kk.getBoundingClientRect(), dk))),
          Vk = mR(wk, sk.map((kk => kk.getBoundingClientRect())));
        Vk >= 0 && kk.setFocus(sk[Vk], {
          scroll: !1,
          byUser: !0
        })
      };
    let cR = null;
    const GR = (kk, Fk) => {
        var Bk, Rk;
        const tk = Fk.querySelector("[data-pad-friends-column]"),
          ak = kk.getFocused();
        if (!tk || !ak || !tk.contains(ak)) return !1;
        const Xk = kk.getEnabledCandidates(Fk).filter((kk => !tk.contains(kk))),
          bk = mR(YF(ak), Xk.map((kk => kk.getBoundingClientRect()))),
          wk = null === (Bk = cR) || void 0 === Bk ? void 0 : Bk.deref();
        return kk.setFocus(null !== wk && void 0 !== wk && wk.isConnected ? wk : null !== (Rk = Xk[bk]) && void 0 !== Rk ? Rk : null, {
          byUser: !0
        }), !0
      },
      TR = kk => {
        const Fk = (0, sk.f)(kk);
        return (0, ek.H)(Fk) || BR.s.some((kk => (0, sk.f)(kk) === Fk)) ? null : Fk
      },
      rR = (kk, Fk) => {
        const Bk = TR(Fk);
        return null !== Bk && kk.wasPressed(Bk)
      },
      DR = function(kk, Fk, Bk) {
        let Rk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const tk = (kk => {
            var Fk, Bk;
            return null !== (Fk = null === (Bk = NR(kk)) || void 0 === Bk ? void 0 : Bk.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== Fk ? Fk : null
          })(Fk),
          ak = kk && tk ? new Set(kk.getEnabledCandidates(Fk)) : null;
        (0, QB.c)(), Bk === kR.p.SETTINGS && (0, FR.k)(wk.c.get("openEverythingMenuName")) ? wk.c.set({
          openEverythingMenuName: Bk
        }) : (0, FR.x)(new Event("padMenuShortcut"), Bk, Rk), kk && ak && tk && HR(kk, Fk, ak, tk.closest("[data-pad-tabs]"))
      },
      zR = kk => null !== kk.closest(".Dropdown-root") || null !== kk.querySelector(".Dropdown-root.is-open"),
      PR = kk => null !== (0, SR.e)() && "popup" !== kk.layer.kind && !NR(kk.root) && !zR(kk.root),
      hR = (0, yk.c)(ek.ab),
      qR = (0, yk.c)(ek.ab),
      CR = (kk, Fk, Bk) => {
        if (((kk, Fk) => {
            const Bk = (0, sk.f)("chat");
            return LR(Fk) && kk.isHeld(Bk) ? "hold" === OR.update(kk.wasPressed(Bk), kk.isHeld(Bk), performance.now(), fk.e[(0, Jk.g)().tapHoldTime].wheelMs) && (Vk.d.consumeButton(Bk), dk.o.Hf(oR.m), !0) : (OR.release(), !1)
          })(Fk, Bk.layer.kind)) return !0;
        const Rk = Bk.root;
        for (const [Xk, bk] of [
            ["menuTabPrevious", -1],
            ["menuTabNext", 1]
          ])
          if (Fk.wasPressed((0, sk.f)(Xk))) {
            const Fk = zR(Rk) ? null : NR(Rk);
            if (Fk) uR(kk, Rk, Fk, bk);
            else if (PR(Bk)) {
              var tk;
              const Fk = kk ? new Set(kk.getEnabledCandidates(Rk)) : null;
              null !== (tk = (0, SR.e)()) && void 0 !== tk && tk(bk) && kk && Fk && HR(kk, Rk, Fk, null)
            } else kk && gR(kk, Rk, bk);
            return !0
          } for (const [Xk, bk, wk] of [
            ["menuPageUp", -1, hR],
            ["menuPageDown", 1, qR]
          ]) {
          const Bk = (0, sk.f)(Xk);
          if (Fk.wasPressed(Bk) && wk.reset(), wk.update(Fk.isHeld(Bk), performance.now())) return UR(kk, Rk, bk), !0
        }
        const ak = "popup" === Bk.layer.kind;
        return rR(Fk, "pause") ? (ak || (0, FR.v)() && "menu" !== Bk.layer.kind || DR(kk, Rk, (0, FR.v)() ? kR.p.SETTINGS : (0, ER.e)()), !0) : !!rR(Fk, "leaderboard") && ("home" === Bk.layer.kind ? (kk => {
          const Fk = [...kk.querySelectorAll("[data-pad-notifications]")].find(sF);
          Fk && uF(Fk)
        })(Rk) : ak || DR(kk, Rk, kR.p.LOBBY_LEADERBOARD, "inGame" === wk.c.get("gameState")), !0)
      },
      ZR = (kk, Fk, Bk) => {
        if (CR(kk, Fk, Bk)) return !0;
        const Rk = "home" === Bk.layer.kind;
        if (Fk.wasPressed((0, sk.f)("menuSecondary"))) {
          const Fk = kk.getFocused(),
            tk = Fk ? aR(Fk) : null;
          if (tk) return uF(tk), !0;
          if (Rk) {
            const Fk = Bk.root.querySelector("[data-pad-search] input");
            return Fk && WF(Fk, Bk.root) ? (kk.setFocus(Fk, {
              byUser: !0
            }), uF(Fk)) : wk.c.set({
              searchOpen: !0
            }), !0
          }
        }
        return !(!Rk || !rR(Fk, "inventory")) && (((kk, Fk) => {
          var Bk, Rk;
          const tk = Fk.querySelector("[data-pad-friends-column]");
          if (!tk || !sF(tk)) return void(0, FR.x)(new Event("padMenuShortcut"), kR.p.SOCIAL);
          if (GR(kk, Fk)) return;
          const ak = null !== (Bk = null === (Rk = tk.querySelector("[data-pad-friends-start]")) || void 0 === Rk ? void 0 : Rk.getBoundingClientRect().top) && void 0 !== Bk ? Bk : -1 / 0,
            Xk = kk.getEnabledCandidates(tk),
            bk = Xk.filter((kk => kk.getBoundingClientRect().top >= ak)),
            wk = bk.length > 0 ? bk : Xk,
            dk = vR(wk.map((kk => kk.getBoundingClientRect())));
          kk.setFocus(dk >= 0 ? wk[dk] : null, {
            byUser: !0
          })
        })(kk, Bk.root), !0)
      },
      pR = kk => {
        var Fk, Bk, Rk;
        const tk = zF(kk);
        if (null !== tk) return tk;
        const ak = (null !== (Fk = null !== (Bk = null !== (Rk = kk.getAttribute("aria-label")) && void 0 !== Rk ? Rk : kk.getAttribute("title")) && void 0 !== Bk ? Bk : kk.textContent) && void 0 !== Fk ? Fk : "").replace(/\s+/g, " ").trim();
        return ak ? `${kk.tagName}:${ak.slice(0,100)}` : null
      };
    class KR {
      constructor() {
        this.remembered = new Map, this.history = []
      }
      enter(kk) {
        const Fk = this.history.indexOf(kk);
        if (Fk >= 0) {
          for (const kk of this.history.splice(Fk + 1)) this.remembered.delete(kk);
          return !0
        }
        return this.remembered.delete(kk), this.history.push(kk), this.history.length > 32 && this.forget(this.history[0]), !1
      }
      forget(kk) {
        this.remembered.delete(kk);
        const Fk = this.history.indexOf(kk);
        Fk >= 0 && this.history.splice(Fk, 1)
      }
      remember(kk, Fk, Bk, Rk) {
        const tk = pR(Fk),
          ak = zF(Fk),
          Xk = null !== ak && ((kk, Fk) => {
            let Bk = 0;
            for (const Rk of kk.querySelectorAll("[data-pad-key], [href]"))
              if ((Rk.getAttribute("data-pad-key") === Fk || Rk.getAttribute("href") === Fk) && (Bk++, Bk > 1)) return !0;
            return !1
          })(Bk, ak) ? Math.max(0, this.twins(Rk(), ak).indexOf(Fk)) : 0;
        this.remembered.set(kk, {
          element: new WeakRef(Fk),
          identity: tk,
          ordinal: Xk
        })
      }
      has(kk) {
        return this.remembered.has(kk)
      }
      recall(kk, Fk) {
        var Bk, Rk;
        const tk = this.remembered.get(kk);
        if (!tk) return null;
        const ak = tk.element.deref();
        if (ak && Fk.includes(ak)) return ak;
        if (null === tk.identity) return null;
        const Xk = this.twins(Fk, tk.identity);
        return null !== (Bk = null !== (Rk = Xk[tk.ordinal]) && void 0 !== Rk ? Rk : Xk[0]) && void 0 !== Bk ? Bk : null
      }
      twins(kk, Fk) {
        return kk.filter((kk => pR(kk) === Fk))
      }
    }
    var xR = Bk(1230);
    const jR = kk => {
        const Fk = [];
        let Bk = kk;
        for (; Bk && Bk !== document.body;) {
          const kk = getComputedStyle(Bk).zIndex;
          "auto" !== kk && Fk.push(Number(kk) || 0), Bk = Bk.parentElement
        }
        return Fk.reverse()
      },
      lR = (kk, Fk) => {
        const Bk = ((kk, Fk) => {
          const Bk = Math.max(kk.length, Fk.length);
          for (let ak = 0; ak < Bk; ak++) {
            var Rk, tk;
            const Bk = (null !== (Rk = kk[ak]) && void 0 !== Rk ? Rk : 0) - (null !== (tk = Fk[ak]) && void 0 !== tk ? tk : 0);
            if (0 !== Bk) return Bk
          }
          return 0
        })(jR(kk), jR(Fk));
        if (0 !== Bk) return Bk > 0;
        if (kk.contains(Fk)) return !1;
        if (Fk.contains(kk)) return !0;
        const Rk = kk.compareDocumentPosition(Fk);
        return !!(Rk & Node.DOCUMENT_POSITION_PRECEDING) || !(Rk & Node.DOCUMENT_POSITION_FOLLOWING) && null
      },
      nR = (kk, Fk) => {
        var Bk;
        return null !== (Bk = lR(kk.root, Fk.root)) && void 0 !== Bk ? Bk : kk.order > Fk.order
      },
      IR = (kk, Fk) => Fk.some((Fk => !Fk.contains(kk) && !kk.contains(Fk) && !0 === lR(Fk, kk)));
    let QR = null,
      kt = null,
      Ft = -1;
    const Bt = () => {
        var kk;
        const Fk = null === (kk = document.timeline) || void 0 === kk ? void 0 : kk.currentTime,
          Bk = "number" === typeof Fk ? Fk : null;
        if (null !== Bk && Bk === kt && Ft === (0, xR.c)()) return QR;
        let Rk = null;
        const tk = [],
          ak = [...document.querySelectorAll("[data-pad-covers]")].filter(sF);
        for (const Xk of (0, xR.f)()) {
          const kk = Xk.getRoot(),
            Fk = !!kk && sF(kk) && !IR(kk, ak);
          if (Xk.shown && !Fk && tk.push(Xk), Xk.shown = Fk, !kk || !Fk) continue;
          const Bk = {
            layer: Xk,
            root: kk,
            order: Xk.order
          };
          Rk && !nR(Bk, Rk) || (Rk = Bk)
        }
        QR = Rk, kt = Bk, Ft = (0, xR.c)();
        for (const Xk of tk)(0, xR.i)(Xk);
        return QR
      },
      Rt = () => {
        const kk = Bt();
        return !(null === kk || void 0 === kk || !kk.layer.close) && (kk.layer.close(), kt = null, !0)
      },
      tt = () => {
        var kk, Fk;
        return null !== (kk = null === (Fk = Bt()) || void 0 === Fk ? void 0 : Fk.root) && void 0 !== kk ? kk : null
      },
      Xt = kk => kk ? {
        ...kk,
        root: tt()
      } : null;
    let bt = null,
      wt = null,
      dt = (0, Jk.g)().menuNavigation,
      st = null;
    const Vt = new Yk;
    let Jt = null;
    dk.o.subscribe(Jk.d, (() => {
      const kk = (0, Jk.g)().menuNavigation;
      kk !== dt && (dt = kk, bt = null, wt = null)
    }));
    const At = () => {
        var kk;
        return null !== (kk = bt) && void 0 !== kk ? kk : (0, Jk.g)().menuNavigation
      },
      et = kk => {
        if (Wt()) {
          if (st = Xt(kk), "hybrid" === At()) return Vt.lock(), void(wt = wt ? null : tt());
          bt = "focus" === At() ? "cursor" : "focus"
        }
      },
      yt = () => {
        const kk = st;
        return st = null, kk
      };
    let ft = {
      root: null,
      firstSeenMs: -1 / 0,
      atMs: -1 / 0,
      has: !1
    };
    const mt = function(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const Bk = ft.root === kk,
          Rk = Bk ? ft.firstSeenMs : Fk,
          tk = ft.has || Fk - Rk > 1e3;
        return (!Bk || !tk || Fk - ft.atMs > 250) && (ft = {
          root: kk,
          firstSeenMs: Rk,
          atMs: Fk,
          has: fF(kk)
        }), ft.has
      },
      Wt = () => {
        const kk = tt();
        return null !== kk && mt(kk)
      },
      vt = () => {
        const kk = Bt();
        return wt && (null === kk || void 0 === kk ? void 0 : kk.root) !== wt && (wt = null), (kk => {
          let {
            mode: Fk,
            hasLayer: Bk,
            hasCandidates: Rk,
            hybridCursorEngaged: tk
          } = kk;
          return Bk ? "cursor" !== Fk && Rk() ? "hybrid" === Fk && tk ? "cursor" : "focus" : "cursor" : null
        })({
          mode: At(),
          hasLayer: null !== kk,
          hasCandidates: () => null !== kk && mt(kk.root),
          hybridCursorEngaged: null !== wt
        })
      },
      it = () => "hybrid" === At() && Wt(),
      Yt = "pad-focused";
    var ot = Bk(4285),
      Lt = Bk(4717);
    const Ot = "[data-pad-destructive]",
      Et = `${Ot}, [data-pad-back]`,
      St = kk => ({
        rect: kk.getBoundingClientRect(),
        destructive: kk.matches(Ot),
        closes: null !== kk.closest("[data-pad-close-button]"),
        unavailable: kk.matches("[data-pad-unavailable]")
      }),
      Nt = kk => {
        let {
          destructive: Fk,
          closes: Bk,
          unavailable: Rk
        } = kk;
        return Fk ? Bk ? 2 : 3 : Rk ? 1 : 0
      },
      Ht = kk => {
        let Fk = -1;
        for (let Bk = 0; Bk < kk.length; Bk++) {
          if (Fk < 0) {
            Fk = Bk;
            continue
          }
          const Rk = kk[Bk],
            tk = kk[Fk];
          Nt(Rk) === Nt(tk) ? WR(Rk.rect, tk.rect) < 0 && (Fk = Bk) : Nt(Rk) < Nt(tk) && (Fk = Bk)
        }
        return Fk
      },
      ut = "[data-pad-tabs]",
      Mt = "[data-pad-tab]",
      gt = (kk, Fk) => {
        const Bk = kk.querySelector(`${Mt}[data-pad-selected='true']`);
        return Bk && Fk.includes(Bk) ? Bk : null
      },
      Ut = (kk, Fk) => {
        let Bk = Fk;
        for (let Rk = Fk.parentElement; Rk && !Rk.contains(kk); Rk = Rk.parentElement) Bk = Rk;
        return Bk
      };
    class ct {
      constructor() {
        this.contentReturn = null
      }
      redirect(kk, Fk, Bk, Rk) {
        var tk, ak;
        const Xk = kk.closest(ut),
          bk = Fk.closest(ut);
        var wk;
        if (bk && bk !== Xk) return Xk || (this.contentReturn = new WeakRef(kk)), null !== (wk = gt(bk, Bk)) && void 0 !== wk ? wk : Fk;
        if (!Xk || bk) return Fk;
        const dk = Ut(kk, Fk),
          sk = null === (tk = this.contentReturn) || void 0 === tk ? void 0 : tk.deref();
        return sk && dk.contains(sk) && Bk.includes(sk) ? sk : null !== (ak = this.pickRegionStart(dk, Hk(Fk, "y", Rk), Bk)) && void 0 !== ak ? ak : Fk
      }
      findTabContent(kk, Fk, Bk) {
        const Rk = kk.closest(ut);
        if (!Rk || !kk.matches(Mt) || Rk.contains(Fk)) return null;
        const tk = Fk.closest(ut);
        if (tk && Number(tk.dataset.padTabs) <= Number(Rk.dataset.padTabs)) return null;
        const ak = Ut(kk, Fk);
        return Bk.some((kk => ak.contains(kk) && !kk.closest(Et))) || !Fk.closest(Et) ? ak : null
      }
      pickContentStart(kk, Fk, Bk) {
        return this.contentReturn = null, this.pickRegionStart(kk, Hk(kk, "y", Bk), Fk)
      }
      pickReplacedContentStart(kk, Fk, Bk, Rk) {
        if (!Fk.contains(kk)) return null;
        const tk = Ut(Fk, kk),
          ak = Bk.filter((kk => Fk.contains(kk) && !tk.contains(kk) && !kk.closest(Et)));
        return 0 === ak.length ? null : (this.contentReturn = null, this.pickRegionStart(Fk, Hk(ak[0], "y", Rk), ak))
      }
      backToStrip(kk, Fk, Bk) {
        if (kk.closest(ut)) return null;
        const Rk = NR(Bk);
        for (const tk of Bk.querySelectorAll(ut)) {
          if (Number(tk.dataset.padTabs) <= 1 || tk === Rk) continue;
          const ak = gt(tk, Fk),
            Xk = ak ? Ut(kk, tk).parentElement : null;
          if (ak && Xk && Xk !== Bk && Bk.contains(Xk)) return this.contentReturn = new WeakRef(kk), ak
        }
        return null
      }
      pickRegionStart(kk, Fk, Bk) {
        const Rk = Gk(Fk),
          tk = kk => {
            const Fk = Bk.filter((Fk => kk.contains(Fk) && !Fk.closest(ut) && Tk(Fk.getBoundingClientRect(), Rk))),
              tk = Ht(Fk.map(St));
            return tk >= 0 ? Fk[tk] : null
          };
        for (const ak of vF(kk)) {
          const kk = tk(ak);
          if (kk) return kk
        }
        for (const ak of kk.querySelectorAll(ut)) {
          const kk = gt(ak, Bk);
          if (kk) return kk
        }
        return tk(kk)
      }
    }
    const Gt = "[data-pad-default-focus], .Dropdown-option.is-selected",
      Tt = ".Dropdown-root.is-open > .Dropdown-menu",
      rt = "[data-pad-no-step-in]",
      Dt = "[data-pad-tabs]",
      zt = "[data-pad-press-area]",
      Pt = kk => {
        let Fk = kk;
        for (let Bk = 0; Fk && Bk <= 4; Bk++, Fk = Fk.parentElement) {
          const Bk = Fk.querySelector(".CircleInfo");
          if (Bk) return Fk === kk || Fk.querySelectorAll(wF).length <= 1 ? Bk : null;
          if (Fk !== kk && Fk.querySelectorAll(wF).length > 1) return null
        }
        return null
      },
      ht = (kk, Fk, Bk) => {
        NF(kk, Fk, Bk);
        const Rk = null !== kk && void 0 !== kk && kk.isConnected ? Pt(kk) : null,
          tk = Pt(Fk);
        Rk !== tk && NF(Rk, tk, tk ? YF(tk) : Bk, {
          leaveBelow: kk,
          enterBelow: Fk
        })
      },
      qt = kk => kk.getBoundingClientRect(),
      Ct = (kk, Fk, Bk) => {
        const Rk = new Set(Bk);
        for (let tk = kk; tk; tk = tk === Fk ? null : tk.parentElement)
          if (Rk.has(tk)) return tk;
        return null
      },
      Zt = (kk, Fk) => !kk.root || kk.root === Fk || Fk.matches(Tt) && kk.root.contains(Fk);
    const pt = new class {
      constructor() {
        this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new KR, this.tabStripNav = new ct, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepeatKey = null, this.confirmRepeated = !1, this.confirmRepeat = (0, yk.c)(ek.u), this.dpadRepeats = new Map(ek.B.map((kk => [kk, (0, yk.c)(ek.E)]))), this.stickRepeat = new ek.c((0, yk.c)(ek.fb)), this.lastRefocusCheckMs = -1 / 0, this.enteredLayerAtMs = 0, this.lastFocusedCentre = null, this.lastActivatedKey = null, this.lastActivated = null, this.lastActivatedAtMs = -1 / 0, this.pendingFocus = null, this.tabOpenWait = null, this.retryMove = null, this.scrollRemainder = {
          x: 0,
          y: 0
        }, this.wasActive = !1, this.layerKind = null, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.listeners = new Set, this.dropdownLayers = new WeakMap, this.dropdownLayerCounter = 0
      }
      install() {
        const kk = Vk.d.register({
            name: "focus",
            isActive: () => (0, Ak.m)() && "focus" === vt(),
            onFrame: kk => {
              this.onFrame(kk)
            },
            onDeactivate: () => {
              this.deactivate()
            },
            wakePressActs: kk => (0, Vk.h)(kk) || kk === (0, sk.f)("menuConfirm") && TF((0, Ak.e)())
          }),
          Fk = (0, xR.k)((kk => {
            const Fk = (0, xR.o)(kk);
            null === kk.memoryKey && this.memory.forget(Fk), Fk === this.layerKey && (this.layerKey = null)
          }));
        let Bk = -1 / 0;
        const Rk = Xk.g.onFrame((kk => {
            (0, Ak.m)() || kk.timestampMs - Bk < 100 || (Bk = kk.timestampMs, Bt())
          })),
          tk = kk => {
            kk.isTrusted && kk.target instanceof Element && Xk.g.getActivePad() && this.noteChosenStop(kk.target)
          };
        return document.addEventListener("click", tk, !0), () => {
          kk(), Fk(), Rk(), document.removeEventListener("click", tk, !0), this.deactivate()
        }
      }
      noteChosenStop(kk) {
        var Fk, Bk;
        const Rk = Bt();
        if (!Rk || !Rk.root.contains(kk)) return;
        const tk = null !== (Fk = null === (Bk = kk.closest(".Dropdown-root")) || void 0 === Bk ? void 0 : Bk.querySelector(".Dropdown-control")) && void 0 !== Fk ? Fk : kk,
          ak = Ct(tk, Rk.root, this.getEnabledCandidates(Rk.root));
        if (!ak) return;
        const Xk = (0, xR.o)(Rk.layer);
        Xk === this.layerKey && Rk.root === this.layerRoot || this.beginLayer(Rk, Xk), this.wasActive ? this.setFocus(ak, {
          scroll: !1,
          byUser: !0
        }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = ak, this.lastFocusedCentre = YF(ak), this.rememberFocus(ak), this.notify())
      }
      getFocused() {
        return this.focused
      }
      isActive() {
        return this.wasActive
      }
      onChange(kk) {
        return this.listeners.add(kk), () => {
          this.listeners.delete(kk)
        }
      }
      notify() {
        for (const kk of this.listeners) kk()
      }
      deactivate() {
        var kk;
        if (this.wasActive) {
          this.wasActive = !1, this.layerKind = null, this.confirmPressedOn = null, this.retryMove = null, this.pendingFocus = null;
          for (const kk of this.dpadRepeats.values()) kk.reset();
          this.stickRepeat.reset(), null !== (kk = this.focused) && void 0 !== kk && kk.isConnected && ht(this.focused, null, YF(this.focused)), this.notify()
        }
      }
      setFocus(kk) {
        var Fk;
        let {
          scroll: Bk = !0,
          byUser: Rk = !1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (Rk && (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1), kk === this.focused) return;
        const tk = null !== (Fk = this.focused) && void 0 !== Fk && Fk.isConnected ? this.focused : null;
        if (this.focused = kk, kk) {
          Bk && (kk.classList.add(Yt), kk.scrollIntoView({
            block: "nearest",
            inline: "nearest",
            behavior: "instant"
          })), Rk && ((kk, Fk) => {
            const Bk = Fk.closest("[data-pad-friends-column]");
            Bk && kk && !Bk.contains(kk) && (cR = new WeakRef(kk))
          })(tk, kk);
          const Fk = YF(kk);
          this.lastFocusedCentre = Fk, this.movedInLayer && this.rememberFocus(kk), ht(tk, kk, Fk), "false" === kk.getAttribute("aria-pressed") && kk.closest("[data-pad-select-on-focus]") && uF(kk)
        } else tk && ht(tk, null, YF(tk));
        this.notify()
      }
      rememberFocus(kk) {
        const Fk = this.layerRoot;
        this.layerKey && Fk && this.memory.remember(this.layerKey, kk, Fk, (() => this.getEnabledCandidates(Fk)))
      }
      noteCursorActivation(kk) {
        const Fk = Bt();
        if (!Fk || !Fk.root.contains(kk)) return;
        const Bk = this.getEnabledCandidates(Fk.root),
          Rk = new Set(Bk);
        let tk = kk;
        for (; tk && !Rk.has(tk);) tk = tk === Fk.root ? null : tk.parentElement;
        if (!(tk instanceof HTMLElement)) return;
        const ak = (0, xR.o)(Fk.layer);
        this.memory.enter(ak), this.memory.remember(ak, tk, Fk.root, (() => Bk))
      }
      notePageEnteredByCursor(kk) {
        return this.memory.enter(kk)
      }
      recallStop(kk, Fk) {
        return this.findRemembered(kk, Fk)
      }
      focusWhenFound(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.pendingFocus = {
          find: kk,
          untilMs: performance.now() + Fk,
          holdWhile: Bk
        }
      }
      getEnabledCandidates(kk) {
        return eF(kk).filter((kk => !VF(kk)))
      }
      onFrame(kk) {
        var Fk;
        const Bk = Bt();
        if (!Bk) return;
        const Rk = null !== (Fk = this.findOpenDropdown(Bk)) && void 0 !== Fk ? Fk : Bk,
          tk = performance.now(),
          ak = (0, xR.o)(Rk.layer);
        if (ak !== this.layerKey || Rk.root !== this.layerRoot) {
          const Fk = this.focused;
          if (null !== this.layerKey && Rk.root === this.layerRoot && Fk && WF(Fk, Rk.root)) this.continueLayer(ak, Fk), this.wasActive || this.resume(Rk.root, tk);
          else {
            const Fk = !this.wasActive && !kk.wokeDevice,
              Xk = "death" === this.layerKind || Fk,
              bk = this.enterLayer(Rk, ak);
            "popup" !== Rk.layer.kind || Rk !== Bk || bk ? "menu" === Rk.layer.kind && Xk && "inGame" === wk.c.get("gameState") && !(0, QB.d)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = tk + ot.c) : (this.pressGuardExtends = Fk, this.pressGuardUntilMs = tk + (Fk ? ot.c : Xk ? 500 : 250))
          }
        } else this.wasActive || this.resume(Rk.root, tk);
        if (this.layerKind = Rk.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), kk.wokeDevice && this.focusPointedStop(Rk.root), this.validateFocus(Rk, tk), tk < this.pressGuardUntilMs && this.pressGuardExtends && (kk.wasPressed((0, sk.f)("menuConfirm")) || kk.wasPressed((0, sk.f)("menuBack"))) && (this.pressGuardUntilMs = tk + ot.c), tk >= this.pressGuardUntilMs && this.handleButtons(kk, Rk)) return;
        const Xk = "hybrid" === At();
        if (Xk && (kk => {
            const Fk = tt();
            return Fk !== Jt && (Jt = Fk, Vt.lock()), Vt.update(kk, (0, Jk.g)().moveDeadzone)
          })(kk.leftStick)) return bk = this.getHandoff(), st = Xt(bk), wt = tt(), void Vk.d.handOffHeldInput();
        var bk;
        this.handleDirections(kk, Rk, tk, !Xk), this.handleScroll(kk, Rk)
      }
      findOpenDropdown(kk) {
        const Fk = kk.root.querySelector(Tt);
        if (!Fk || !sF(Fk)) return null;
        let Bk = this.dropdownLayers.get(Fk);
        return Bk || (this.dropdownLayerCounter++, Bk = {
          id: `dropdown-${this.dropdownLayerCounter}`,
          kind: kk.layer.kind,
          getRoot: () => Fk,
          close: () => {
            UF(Fk)
          },
          memoryKey: null
        }, this.dropdownLayers.set(Fk, Bk)), {
          layer: Bk,
          root: Fk,
          order: kk.order
        }
      }
      focusPointedStop(kk) {
        const Fk = (0, Ak.e)(),
          Bk = Fk ? document.elementFromPoint(Fk.x, Fk.y) : null;
        if (!Bk || !kk.contains(Bk)) return;
        const Rk = Ct(Bk, kk, this.getEnabledCandidates(kk));
        Rk && this.setFocus(Rk, {
          scroll: !1,
          byUser: !0
        })
      }
      enterLayer(kk, Fk) {
        const Bk = this.beginLayer(kk, Fk),
          Rk = yt();
        return Rk && Zt(Rk, kk.root) ? (this.takeOver(kk.root, Rk, this.enteredLayerAtMs), Bk) : (this.restoreLayerFocus(kk.root, Bk), Bk)
      }
      beginLayer(kk, Fk) {
        return this.layerKey = Fk, this.layerRoot = kk.root, this.lastActivatedKey = null, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoreOnFocusLoss = !1, this.retryMove = null, this.pendingFocus = null, this.confirmPressedOn = null, this.lastRefocusCheckMs = -1 / 0, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.enteredLayerAtMs = performance.now(), this.lastFocusedCentre = null, this.memory.enter(Fk)
      }
      restoreLayerFocus(kk, Fk) {
        const Bk = Fk && this.layerKey ? this.findRemembered(kk, this.layerKey) : null;
        this.restoredFromMemory = null !== Bk, this.setFocus(null !== Bk && void 0 !== Bk ? Bk : this.pickInitial(kk, {
          waitForContent: !0
        }))
      }
      continueLayer(kk, Fk) {
        this.layerKey = kk;
        const Bk = this.memory.enter(kk);
        this.restoreOnFocusLoss = Bk, this.movedInLayer && !Bk && this.rememberFocus(Fk)
      }
      resume(kk, Fk) {
        var Bk;
        const Rk = yt();
        Rk && Zt(Rk, kk) ? this.takeOver(kk, Rk, Fk) : null !== (Bk = this.focused) && void 0 !== Bk && Bk.isConnected && ht(null, this.focused, YF(this.focused))
      }
      pickPreferred(kk) {
        var Fk;
        return null !== (Fk = this.layerKey ? this.findRemembered(kk, this.layerKey) : null) && void 0 !== Fk ? Fk : this.pickInitial(kk, {
          waitForContent: !0
        })
      }
      findRemembered(kk, Fk) {
        return this.memory.has(Fk) ? this.memory.recall(Fk, this.getEnabledCandidates(kk)) : null
      }
      getHandoff() {
        var kk, Fk, Bk;
        const Rk = null !== (kk = this.focused) && void 0 !== kk && kk.isConnected ? this.focused : null,
          tk = null !== (Fk = this.layerRoot) && void 0 !== Fk && Fk.isConnected ? this.layerRoot : null;
        return {
          point: Rk ? YF(Rk) : null !== (Bk = this.lastFocusedCentre) && void 0 !== Bk ? Bk : this.getLayerStartPoint(tk),
          element: Rk,
          direction: null
        }
      }
      getLayerStartPoint(kk) {
        if (!kk) return {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2
        };
        const Fk = this.pickInitial(kk, {
          includeDisabled: !0
        });
        return YF(null !== Fk && void 0 !== Fk ? Fk : kk)
      }
      takeOver(kk, Fk, Bk) {
        const {
          element: Rk,
          direction: tk,
          point: ak
        } = Fk, Xk = Rk instanceof HTMLElement && WF(Rk, kk) ? Rk : null;
        if (!tk) {
          const Fk = this.focused;
          return Xk ? this.setFocus(Xk, {
            scroll: !1,
            byUser: !0
          }) : this.focusNearest(kk, ak), void(this.focused && this.focused === Fk && this.focused.isConnected && ht(null, this.focused, YF(this.focused)))
        }
        if (this.dpadRepeats.get(tk).update(!0, Bk), Xk) return this.setFocus(Xk, {
          scroll: !1,
          byUser: !0
        }), void this.move(kk, tk, Bk, !0);
        const bk = this.getEnabledCandidates(kk),
          wk = bk.map(qt),
          dk = JR(new DOMRect(ak.x, ak.y, 0, 0), wk, tk),
          sk = dk >= 0 ? dk : mR(ak, wk);
        this.setFocus(sk >= 0 ? bk[sk] : this.pickInitial(kk), {
          byUser: !0
        })
      }
      focusNearest(kk, Fk) {
        const Bk = this.getEnabledCandidates(kk),
          Rk = mR(Fk, Bk.map(qt));
        this.setFocus(Rk >= 0 ? Bk[Rk] : this.pickInitial(kk), {
          byUser: !0
        })
      }
      pickDefault(kk) {
        let {
          includeDisabled: Fk = !1,
          exclude: Bk = null
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Rk = [...kk.querySelectorAll(Gt)].filter((Rk => (null === Bk || void 0 === Bk || !Bk.has(Rk)) && (Fk ? mF(Rk, kk) : WF(Rk, kk)))),
          tk = Ht(Rk.map(St));
        return tk >= 0 ? Rk[tk] : null
      }
      pickNewAreaStart(kk, Fk) {
        const Bk = [...kk.querySelectorAll(zt)].filter(sF);
        for (const Rk of [...vF(kk), ...Bk]) {
          if (Fk.has(Rk)) continue;
          const kk = this.getEnabledCandidates(Rk),
            Bk = Ht(kk.map(St));
          if (Bk >= 0) return kk[Bk]
        }
        return null
      }
      pickInitial(kk) {
        let {
          includeDisabled: Fk = !1,
          waitForContent: Bk = !1,
          enteredAtMs: Rk = this.enteredLayerAtMs
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const tk = this.pickDefault(kk, {
          includeDisabled: Fk
        });
        if (tk) return tk;
        const ak = kk => Fk ? eF(kk) : this.getEnabledCandidates(kk);
        let Xk = [];
        for (const Jk of vF(kk))
          if (Xk = ak(Jk), Xk.length > 0) break;
        if (0 === Xk.length) {
          if (Bk && performance.now() - Rk < 1e4 && (kk => {
              for (const Fk of kk.querySelectorAll("[data-pad-initial-area]"))
                if (!dF(Fk, !1)) return !0;
              return !1
            })(kk)) return null;
          Xk = ak(kk)
        }
        const bk = Xk.map(qt),
          wk = Gk(null),
          dk = Xk.filter(((kk, Fk) => Tk(bk[Fk], wk))),
          sk = dk.length > 0 ? dk : Xk,
          Vk = Ht(sk.map(St));
        return Vk >= 0 ? sk[Vk] : null
      }
      validateFocus(kk, Fk) {
        if (this.pendingFocus) {
          var Bk, Rk;
          const tk = this.pendingFocus.find();
          if (tk && WF(tk, kk.root)) return this.pendingFocus = null, void this.setFocus(tk, {
            byUser: !0
          });
          Fk > this.pendingFocus.untilMs && (null === (Bk = (Rk = this.pendingFocus).holdWhile) || void 0 === Bk || !Bk.call(Rk)) && (this.pendingFocus = null)
        }
        const tk = this.focused,
          ak = !!tk && WF(tk, kk.root);
        if (!(!ak && tk && tk === this.lastActivated && Fk - this.lastActivatedAtMs < 5e3 && kk.root.contains(tk) && sF(tk) && VF(tk))) {
          if (!ak && this.restoreOnFocusLoss && this.layerKey) return this.restoreOnFocusLoss = !1, this.movedInLayer = !1, this.scrolledInLayer = !1, this.enteredLayerAtMs = Fk, void this.restoreLayerFocus(kk.root, !0);
          if ((!ak || !this.movedInLayer && !this.scrolledInLayer) && !(Fk - this.lastRefocusCheckMs < (ak ? 200 : 50)))
            if (this.lastRefocusCheckMs = Fk, ak) {
              const Bk = Fk - this.enteredLayerAtMs < 15e3 ? this.pickPreferred(kk.root) : null,
                Rk = null !== Bk && void 0 !== Bk ? Bk : this.restoredFromMemory ? null : this.pickDefault(kk.root);
              Rk && Rk !== tk && this.setFocus(Rk)
            } else {
              if (this.lastFocusedCentre && this.movedInLayer) {
                const Fk = this.pendingFocus;
                return this.focusNearest(kk.root, this.lastFocusedCentre), void(this.pendingFocus = Fk)
              }
              this.setFocus(this.pickPreferred(kk.root))
            }
        }
      }
      handleButtons(kk, Fk) {
        if (kk.wasPressed((0, sk.f)("menuToggleCursor"))) return et(this.getHandoff()), !0;
        if (kk.wasPressed((0, sk.f)("menuBack"))) {
          const kk = UF(Fk.root);
          return kk ? this.setFocus(kk, {
            byUser: !0
          }) : GR(this, Fk.root) || (DF(Fk.root) ? this.returnToOpener(Fk.root) : this.backToStrip(Fk.root) || Rt()), !0
        }
        const Bk = (0, sk.f)("menuConfirm");
        var Rk, tk;
        kk.wasPressed(Bk) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (Rk = null === (tk = this.focused) || void 0 === tk ? void 0 : tk.getAttribute("data-pad-repeat")) && void 0 !== Rk ? Rk : null, this.confirmRepeated = kk.wokeDevice, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now()));
        if (kk.wasReleased(Bk)) {
          const kk = this.confirmPressedOn;
          if (this.confirmPressedOn = null, kk && !this.confirmRepeated && kk === this.focused && kk.isConnected && !VF(kk)) {
            const Bk = kk.matches("[data-pad-tab]") ? kk.closest(Dt) : null;
            Bk ? this.enterTab(kk, Bk, Fk.root, performance.now()) : this.activate(kk)
          }
          return !0
        }
        return this.repeatConfirm(kk, Bk), ZR(this, kk, Fk)
      }
      repeatConfirm(kk, Fk) {
        const Bk = this.confirmPressedOn;
        Bk && null !== this.confirmRepeatKey && kk.isHeld(Fk) && (Bk === this.focused && Bk.isConnected && !VF(Bk) && Bk.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? Bk.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.confirmRepeated = !0, this.activate(Bk)) : this.confirmRepeatKey = null)
      }
      backToStrip(kk) {
        const Fk = this.focused;
        if (!(0, Jk.g)().menuBackToCategories) return !1;
        const Bk = null !== Fk && void 0 !== Fk && Fk.isConnected ? this.tabStripNav.backToStrip(Fk, this.getEnabledCandidates(kk), kk) : null;
        return Bk && this.setFocus(Bk, {
          byUser: !0
        }), null !== Bk
      }
      returnToOpener(kk) {
        const Fk = this.lastActivatedKey;
        Fk && (this.lastActivatedKey = null, this.focusWhenFound((() => {
          var Bk;
          return null !== (Bk = this.getEnabledCandidates(kk).find((kk => zF(kk) === Fk))) && void 0 !== Bk ? Bk : null
        })))
      }
      activate(kk) {
        var Fk;
        if ((0, Lt.e)(kk) || GF(kk)) return;
        this.lastActivatedKey = null !== (Fk = zF(kk)) && void 0 !== Fk ? Fk : this.lastActivatedKey, this.lastActivated = kk, this.lastActivatedAtMs = performance.now(), this.rememberFocus(kk);
        const Bk = this.layerRoot;
        if (Bk) {
          const Fk = new Set(Bk.querySelectorAll(Gt)),
            Rk = new Set(Bk.querySelectorAll(`[data-pad-initial-area], ${zt}`)),
            tk = this.lastActivatedAtMs;
          this.focusWhenFound((() => {
            var tk;
            return WF(kk, Bk) ? null : null !== (tk = this.pickDefault(Bk, {
              exclude: Fk
            })) && void 0 !== tk ? tk : this.pickNewAreaStart(Bk, Rk)
          }), 5e3, (() => kk.isConnected && VF(kk) && performance.now() - tk < 6e4))
        }
        uF(kk), cF(kk)
      }
      handleDirections(kk, Fk, Bk, Rk) {
        const tk = LR(Fk.layer.kind) ? (0, sk.f)("chat") : null;
        for (const bk of ek.B) {
          this.dpadRepeats.get(bk).update(kk.isHeld(bk), Bk) && (bk !== tk || kk.wasPressed(bk)) && this.move(Fk.root, bk, Bk, !0)
        }
        const ak = Rk ? (0, ek.i)(kk.leftStick, (0, Jk.g)().moveDeadzone) : {
            x: 0,
            y: 0
          },
          Xk = this.stickRepeat.update((0, ek.ib)(ak), Bk);
        if (Xk && this.move(Fk.root, Xk, Bk, !0), this.retryMove && Bk >= this.retryMove.atMs) {
          const {
            direction: kk
          } = this.retryMove;
          this.retryMove = null, this.move(Fk.root, kk, Bk, !1)
        }
      }
      move(kk, Fk, Bk, Rk) {
        var tk;
        let ak = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.pendingFocus && this.pendingFocus === (null === (tk = this.tabOpenWait) || void 0 === tk ? void 0 : tk.wait) && Fk === this.tabOpenWait.direction) return;
        this.pendingFocus = null;
        const Xk = this.focused;
        if (!Xk || !Xk.isConnected) {
          const Fk = this.pickInitial(kk);
          return void(Fk && this.setFocus(Fk, {
            byUser: !0
          }))
        }
        const bk = "Left" === Fk || "Right" === Fk,
          wk = bk ? (0, Lt.e)(Xk) : null;
        if (wk) return void wk.adjust("Left" === Fk ? -1 : 1);
        const dk = kk => null !== kk.closest("[data-pad-friends-column]"),
          sk = dk(Xk),
          Vk = qt(Xk),
          Jk = bk || Xk.closest(Dt) ? null : (kk => {
            const Fk = new Map;
            return Bk => {
              const Rk = Bk.closest(Dt);
              if (!Rk) return !1;
              let tk = Fk.get(Rk);
              if (void 0 === tk) {
                const Bk = qt(Rk);
                tk = VR(kk, Bk) && (Bk.right <= kk.left || Bk.left >= kk.right), Fk.set(Rk, tk)
              }
              return tk
            }
          })(Vk),
          Ak = null !== Xk.closest(rt),
          ek = this.getEnabledCandidates(kk).filter((kk => kk !== Xk && (bk || dk(kk) === sk) && !(null !== Jk && void 0 !== Jk && Jk(kk)) && (Ak || !kk.closest(rt)))),
          yk = ek.map(qt),
          fk = Hk(Xk, "y", kk),
          mk = Gk(fk);
        if (!ak && !Tk(Vk, mk)) {
          const kk = ek.filter(((kk, Fk) => Tk(yk[Fk], mk)));
          if (kk.length > 0) {
            const Fk = {
              x: mk.left + mk.width / 2,
              y: mk.top + mk.height / 2
            };
            return void this.setFocus(kk[mR(Fk, kk.map(qt))], {
              byUser: !0
            })
          }
        }
        const Wk = bk ? ((kk, Fk, Bk) => {
            const Rk = qt(kk),
              tk = kk.closest(Dt),
              ak = tk ? qt(tk) : null;
            return Fk.map(((Fk, Xk) => {
              const bk = Bk[Xk];
              if (bk.bottom > Rk.top && bk.top < Rk.bottom) return !0;
              const wk = Fk.closest(Dt);
              if (tk && ak) return wk !== tk && (null !== wk || bk.bottom <= ak.top || bk.top >= ak.bottom);
              if (wk) return !VR(Rk, qt(wk));
              let dk = kk;
              for (let Bk = kk.parentElement; Bk && !Bk.contains(Fk); Bk = Bk.parentElement) dk = Bk;
              const sk = qt(dk);
              return bk.right > sk.left && bk.left < sk.right
            }))
          })(Xk, ek, yk) : void 0,
          vk = bk && !Xk.closest(Dt) ? (kk => kk.map((kk => !kk.closest(Et))))(ek) : void 0,
          ik = ((kk, Fk) => {
            const Bk = [];
            for (let tk = kk; tk; tk = tk.parentElement) Bk.push(tk);
            const Rk = new Map;
            return Bk.forEach(((kk, Fk) => {
              Rk.set(kk, Bk.length - 1 - Fk)
            })), Fk.map((kk => {
              for (let Fk = kk; Fk; Fk = Fk.parentElement) {
                const kk = Rk.get(Fk);
                if (void 0 !== kk) return kk
              }
              return -1
            }))
          })(Xk, ek),
          Yk = bk ? "x" : "y",
          Lk = Hk(Xk, Yk, kk);
        let Ok = JR(Vk, yk, Fk, ik, Wk, vk);
        if (Ok >= 0 && Lk && !Lk.contains(ek[Ok])) {
          const kk = ek.flatMap(((kk, Fk) => Lk.contains(kk) ? [Fk] : [])),
            Bk = Fk => Fk && kk.map((kk => Fk[kk])),
            Rk = JR(Vk, kk.map((kk => yk[kk])), Fk, kk.map((kk => ik[kk])), Bk(Wk), Bk(vk));
          Ok = Rk >= 0 ? kk[Rk] : Ok
        }
        if (Ok >= 0) return void this.moveTo(Xk, ek[Ok], ek, kk, Fk, ak);
        if (!Rk) return;
        const Ek = "Right" === Fk || "Down" === Fk ? 1 : -1;
        if (Lk && Uk(Lk, Yk, Ek)) {
          const kk = "y" === Yk ? Lk.clientHeight : Lk.clientWidth;
          ck(Lk, Yk, Ek * kk * .5), this.retryMove = {
            direction: Fk,
            atMs: Bk + 80
          }
        }
      }
      moveTo(kk, Fk, Bk, Rk, tk, ak) {
        const Xk = this.tabStripNav.findTabContent(kk, Fk, Bk);
        Xk && "true" !== kk.dataset.padSelected ? this.openTab(kk, Xk, Rk, tk) : ak && !Xk || this.setFocus(this.tabStripNav.redirect(kk, Fk, Bk, Rk), {
          byUser: !0
        })
      }
      openTab(kk, Fk, Bk, Rk) {
        const tk = Fk.parentElement;
        uF(kk), this.focusWhenFound((() => "true" !== kk.dataset.padSelected ? null : Fk.isConnected ? this.tabStripNav.pickContentStart(Fk, this.getEnabledCandidates(Bk), Bk) : tk ? this.tabStripNav.pickReplacedContentStart(kk, tk, this.getEnabledCandidates(Bk), Bk) : null), 3e3), this.tabOpenWait = {
          wait: this.pendingFocus,
          direction: Rk
        }
      }
      enterTab(kk, Fk, Bk, Rk) {
        this.move(Bk, (kk => {
          const Fk = [...kk.querySelectorAll(Mt)].filter((Fk => Fk.closest(ut) === kk));
          if (Fk.length >= 2) {
            const kk = Fk[0].getBoundingClientRect(),
              Bk = Fk[1].getBoundingClientRect();
            return Math.abs(Bk.top - kk.top) > Math.abs(Bk.left - kk.left) ? "Right" : "Down"
          }
          const Bk = kk.getBoundingClientRect();
          return Bk.height > Bk.width ? "Right" : "Down"
        })(Fk), Rk, !1, !0), this.focused !== kk || this.pendingFocus || this.activate(kk)
      }
      handleScroll(kk, Fk) {
        const Bk = (0, ek.i)(kk.rightStick, .2);
        if (0 === Bk.x && 0 === Bk.y) return void(this.scrollRemainder = {
          x: 0,
          y: 0
        });
        const Rk = kk.dtMs / 1e3;
        for (const ak of ["x", "y"]) {
          var tk;
          const kk = Bk[ak];
          if (0 === kk) continue;
          const Xk = null !== (tk = Hk(this.focused, ak, Fk.root)) && void 0 !== tk ? tk : Mk(Fk.root, ak);
          if (!Xk) continue;
          const bk = Math.sign(kk) * kk * kk * 1500 * Rk + this.scrollRemainder[ak],
            wk = Math.trunc(bk);
          this.scrollRemainder[ak] = bk - wk, 0 !== wk && (ck(Xk, ak, wk), this.scrolledInLayer = !0)
        }
      }
    };
    var Kt = Bk(7874);
    var xt = Bk(8381);
    const jt = {
        duration: 80,
        strongMagnitude: .2,
        weakMagnitude: .2,
        needsPadInUse: !1
      },
      lt = {
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
          ...jt,
          minIntervalMs: 1e3
        },
        preview: {
          ...jt,
          minIntervalMs: 0
        }
      };
    const nt = new class {
        constructor(kk) {
          this.deps = kk, this.lastPlayedMs = {}, this.loggedFailure = !1, this.logFailure = kk => {
            this.loggedFailure || (this.loggedFailure = !0, console.warn("Controller vibration failed; further failures are not logged.", kk))
          }
        }
        play(kk, Fk) {
          const Bk = lt[kk];
          if (!this.deps.isVibrationOn() || Bk.needsPadInUse && !this.deps.isPadInUse()) return !1;
          const Rk = this.lastPlayedMs[kk];
          if (void 0 !== Rk && Fk - Rk < Bk.minIntervalMs) return !1;
          const tk = this.deps.getActuator();
          if (!tk) return !1;
          this.lastPlayedMs[kk] = Fk;
          const {
            duration: ak,
            strongMagnitude: Xk,
            weakMagnitude: bk
          } = Bk;
          try {
            tk.playEffect("dual-rumble", {
              duration: ak,
              strongMagnitude: Xk,
              weakMagnitude: bk
            }).catch(this.logFailure)
          } catch (wk) {
            this.logFailure(wk)
          }
          return !0
        }
      }({
        getActuator: () => (kk => {
          const Fk = null === kk || void 0 === kk ? void 0 : kk.vibrationActuator;
          return "function" === typeof(null === Fk || void 0 === Fk ? void 0 : Fk.playEffect) ? Fk : null
        })(Xk.g.getActiveGamepad()),
        isVibrationOn: () => (0, Jk.g)().vibration,
        isPadInUse: Ak.m
      }),
      It = kk => {
        nt.play(kk, performance.now())
      };
    var Qt = Bk(7880),
      ka = Bk(2728),
      Fa = Bk(112),
      Ba = Bk(42),
      Ra = Bk(633);
    class ta {
      constructor(kk) {
        this.deps = kk
      }
      check() {
        let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const Fk = this.deps.isPadActive() ? this.deps.getPadFamily() : null;
        if (!Fk) return "skipped";
        const Bk = kk ? this.deps.getVisitId() : this.deps.peekVisitId();
        return null === Bk || this.deps.readReportedVisitId() === Bk ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(Bk), this.deps.ve(Fk, this.deps.getInputType()), "reported") : "notReady"
      }
    }
    const aa = "controllerUsageReportedVisit";
    var Xa = Bk(1300),
      ba = Bk(1650),
      wa = Bk(624),
      da = Bk(1387),
      sa = Bk(1203);
    const Va = kk => ({
        translationKey: `controller:${kk}`
      }),
      Ja = {
        A: "A",
        B: "B",
        X: "X",
        Y: "Y",
        LB: "LB",
        RB: "RB",
        LT: "LT",
        RT: "RT",
        View: Va("padButtonView"),
        Menu: Va("padButtonMenu"),
        LS: "L3",
        RS: "R3",
        Up: Va("padButtonDpadUp"),
        Down: Va("padButtonDpadDown"),
        Left: Va("padButtonDpadLeft"),
        Right: Va("padButtonDpadRight"),
        Home: Va("padButtonHome"),
        LeftStick: Va("padButtonLeftStick"),
        RightStick: Va("padButtonRightStick")
      },
      Aa = {
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
          View: Va("padButtonCreate"),
          Menu: Va("padButtonOptions")
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
      ea = (kk, Fk) => {
        var Bk;
        const Rk = null !== (Bk = Aa[kk][Fk]) && void 0 !== Bk ? Bk : Ja[Fk];
        return "string" === typeof Rk ? Rk : (0, tk.r)(sa.c.get().getCurrentLanguageCode(), Rk.translationKey)
      },
      ya = kk => {
        let {
          glyph: Fk,
          family: Bk,
          className: Rk
        } = kk;
        const tk = (0, Ak.E)(),
          ak = null !== Bk && void 0 !== Bk ? Bk : tk,
          Xk = (0, Qt.f)(ak, Fk);
        return (0, Pk.jsx)("span", {
          className: zk()("ControllerGlyph", Rk),
          role: "img",
          "aria-label": ea(ak, Fk),
          style: {
            "--pad-glyph-mask": `url(${Xk})`,
            "--pad-glyph-aspect": (0, Qt.e)(ak, Fk)
          }
        })
      };
    var fa = Bk(1812);
    const ma = kk => {
      let {
        action: Fk
      } = kk;
      const {
        t: Bk
      } = (0, tk.x)();
      switch (Fk.kind) {
        case "reload":
          return (0, Pk.jsx)("span", {
            children: Bk("controller:gameplayReload")
          });
        case "specialAction":
          return null;
        case "customButton":
          return (0, Pk.jsx)(fa.d, {
            text: Fk.description ? [{
              icon: Fk.icon
            }, ` ${Fk.description}`] : [{
              icon: Fk.icon
            }]
          });
        case "touchButton":
          return (0, Pk.jsx)(fa.d, {
            text: Fk.label
          })
      }
    };
    var Wa = Bk(8388);
    const va = kk => {
      let {
        hold: Fk
      } = kk;
      return (0, Pk.jsx)("div", {
        className: "DropStackFillTrack",
        style: {
          "--pad-drop-stack-hold": `${Fk.holdMs}ms`
        },
        children: (0, Pk.jsx)("div", {
          className: "DropStackFillBar"
        })
      }, Fk.id)
    };
    var ia = Bk(8415),
      Ya = Bk(8422),
      oa = Bk(8428),
      La = Bk(8407);
    const Oa = () => {
        const {
          gameState: kk
        } = (0, wk.h)(["gameState"]), Fk = (0, Ak.C)(), [Rk, tk] = (0, rk.useState)(!1), [ak, Xk] = (0, rk.useState)(!1);
        return (0, rk.useEffect)((() => {
          "inGame" === kk && tk(!0)
        }), [kk]), (0, rk.useEffect)((() => {
          if (!Rk) return;
          let kk = null,
            Fk = !1;
          return (wa.p ? Promise.all([Bk.e(69), Bk.e(259), Bk.e(199), Bk.e(217), Bk.e(216), Bk.e(84)]).then((() => Bk(39950))).then((kk => kk.startWasmPadGameplay)) : Promise.all([Bk.e(69), Bk.e(226), Bk.e(225), Bk.e(94), Bk.e(72), Bk.e(71), Bk.e(70), Bk.e(218), Bk.e(182), Bk.e(222), Bk.e(74), Bk.e(196), Bk.e(215), Bk.e(219), Bk.e(93), Bk.e(83), Bk.e(113), Bk.e(234), Bk.e(73), Bk.e(112), Bk.e(155), Bk.e(217), Bk.e(188)]).then((() => Bk(40089))).then((kk => kk.startPadGameplay))).then((Bk => {
            Fk || (kk = Bk())
          })).catch((kk => {
            console.error("Pad gameplay failed to load", kk), Fk || Xk(!0)
          })), () => {
            var Bk;
            Fk = !0, null === (Bk = kk) || void 0 === Bk || Bk()
          }
        }), [Rk]), (0, rk.useEffect)((() => {
          ak && Fk && (Xk(!1), Xa.NotificationProvider.showPromptPopup({
            title: "controller:gameplayLoadFailedTitle",
            subtitle: "controller:gameplayLoadFailedSubtitle",
            confirmText: "settingsMenu:reloadPagePopupConfirm",
            confirmTooltip: "",
            cancelText: "general:cancel",
            cancelTooltip: ""
          }).getResult().then((kk => {
            !0 === kk && (0, ba.reloadBloxd)()
          })))
        }), [ak, Fk]), (0, Pk.jsxs)(Pk.Fragment, {
          children: [(0, Pk.jsx)(Ea, {}), (0, Pk.jsx)(Sa, {}), (0, Pk.jsx)(Na, {})]
        })
      },
      Ea = () => {
        const {
          t: kk
        } = (0, tk.x)(), Fk = (0, Ak.C)(), {
          gameState: Bk,
          isUiHidden: Rk
        } = (0, wk.h)(["gameState", "isUiHidden"]), {
          hideButtonHints: ak
        } = (0, Jk.m)(), Xk = (0, Wa.j)(), bk = (0, Wa.n)(), [dk, Vk] = (0, rk.useState)(oa.b);
        return (0, da.f)(La.m, Vk), !Fk || ak || Rk || "inGame" !== Bk || !Xk && !dk ? null : (0, Pk.jsxs)("div", {
          className: "PadActionHint SmallTextBold",
          children: [Xk && (0, Pk.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, Pk.jsx)(ya, {
              glyph: (0, sk.f)("actionButton")
            }), (0, Pk.jsx)(ma, {
              action: Xk
            }), bk && (0, Pk.jsx)("span", {
              className: "PadActionHintMore",
              children: kk("controller:gameplayActionWheelHint")
            })]
          }), dk && (0, Pk.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, Pk.jsx)(ya, {
              glyph: (0, sk.f)("pickBlock")
            }), (0, Pk.jsx)("span", {
              children: kk("controller:gameplayPickBlock")
            })]
          })]
        })
      },
      Sa = () => {
        const {
          t: kk
        } = (0, tk.x)(), Fk = (0, Ak.C)(), {
          gameState: Bk,
          isUiHidden: Rk
        } = (0, wk.h)(["gameState", "isUiHidden"]), [ak, Xk] = (0, rk.useState)(ia.c);
        return (0, da.f)(La.l, Xk), Fk && !Rk && "inGame" === Bk && ak ? (0, Pk.jsxs)("div", {
          className: "PadDropStackFill SmallTextBold",
          children: [(0, Pk.jsx)("span", {
            children: kk("controller:gameplayDropStack")
          }), (0, Pk.jsx)(va, {
            hold: ak
          })]
        }) : null
      },
      Na = () => {
        const {
          t: kk
        } = (0, tk.x)(), Fk = (0, Ak.C)(), {
          gameState: Bk,
          isUiHidden: Rk
        } = (0, wk.h)(["gameState", "isUiHidden"]), {
          hideButtonHints: ak
        } = (0, Jk.m)(), [Xk, bk] = (0, rk.useState)(Ya.c);
        return (0, da.f)(La.k, bk), Fk && !Rk && "inGame" === Bk && Xk ? (0, Pk.jsxs)("div", {
          className: "PadAttackLatchedHint SmallTextBold",
          children: [!ak && (0, Pk.jsx)(ya, {
            glyph: (0, sk.f)("attack")
          }), (0, Pk.jsx)("span", {
            children: kk("controller:gameplayAttackLatched")
          })]
        }) : null
      };
    var Ha = Bk(8437),
      ua = Bk(1863),
      Ma = Bk(2320),
      ga = Bk(7852);
    const Ua = kk => kk && !(0, Ha.b)(ua.b.get("shopInfo")),
      ca = () => {
        const kk = "inGame" === (0, wk.h)(["gameState"]).gameState;
        return (0, Ma.f)("shopInfo", (() => {
          (0, ga.h)(Ua(kk))
        })), (0, rk.useEffect)((() => {
          (0, ga.h)(Ua(kk))
        }), [kk]), null
      },
      Ga = () => {
        const {
          t: kk
        } = (0, tk.x)(), {
          hideButtonHints: Fk
        } = (0, Jk.m)();
        (0, Ak.E)();
        const Bk = (0, MB.m)();
        return (0, rk.useEffect)((() => (() => {
          const kk = Vk.d.register({
              name: "inventory",
              isActive: nB.isActive,
              onFrame: nB.onFrame,
              onDeactivate: nB.onDeactivate,
              wakePressActs: nB.wakePressActs
            }),
            Fk = kk => {
              nB.noteRealPointer(kk), nB.shouldBlockRealPointer(kk) && kk.stopPropagation()
            };
          for (const Xk of IB) window.addEventListener(Xk, Fk, !0);
          const Bk = (0, ZF.i)((() => {
              "inventory" !== Vk.d.getActiveConsumerName() && nB.forgetSurface()
            })),
            Rk = kk => {
              const Fk = kk.target;
              (0, Ak.m)() && Qk(Fk) && Fk.closest(eB) && (0, ZF.g)() && (0, ZF.m)(Fk)
            };
          document.addEventListener("focusout", Rk, !0);
          const {
            invalidate: tk,
            onScroll: ak
          } = nB.targets;
          return document.addEventListener("scroll", ak, !0), window.addEventListener("resize", tk), () => {
            kk(), Bk();
            for (const kk of IB) window.removeEventListener(kk, Fk, !0);
            document.removeEventListener("scroll", ak, !0), document.removeEventListener("focusout", Rk, !0), window.removeEventListener("resize", tk), nB.targets.disconnect()
          }
        })()), []), (0, Pk.jsxs)(Pk.Fragment, {
          children: [(0, Pk.jsx)(Zk, {
            placer: nB.ring,
            className: "InventorySlotCursorRing"
          }), Bk.showing && !Fk && (0, Pk.jsx)("div", {
            className: "InventorySlotCursorHints SmallTextBold",
            children: CF(Bk).map((Fk => {
              let {
                actions: Rk,
                labelKey: tk
              } = Fk;
              return (0, Pk.jsxs)("div", {
                className: "InventorySlotCursorHint",
                children: [Rk.map((kk => (0, Pk.jsx)(ya, {
                  glyph: (0, sk.f)(kk)
                }, kk))), (0, Pk.jsx)("span", {
                  children: kk(`controller:${tk}`)
                }), "inventoryDrop" === tk && Bk.dropStackHold && (0, Pk.jsx)(va, {
                  hold: Bk.dropStackHold
                })]
              }, tk)
            }))
          })]
        })
      },
      Ta = [{
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
      ra = kk => Array.from(kk).map((kk => ({
        type: "char",
        char: kk,
        width: 1
      }))),
      Da = function(kk) {
        return {
          type: "command",
          command: kk,
          width: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
        }
      },
      za = [Da("page", 2), Da("otherPage"), Da("caretLeft"), Da("space", 3), Da("caretRight"), Da("close", 1.5), Da("submit", 1.5)],
      Pa = [Da("page", 2), Da("otherPage"), Da("caretLeft"), Da("space", 2), Da("caretRight"), Da("newline"), Da("close", 1.5), Da("submit", 1.5)],
      ha = [
        [...ra("1234567890"), Da("backspace")], ra("qwertyuiop/"), ra("asdfghjkl'?"), [Da("shift", 2), ...ra("zxcvbnm,.")]
      ],
      qa = [
        [...ra("1234567890"), Da("backspace")], ra("!@#$%^&*()/"), ra('-_=+[]{};:"'), ra("~`|\\<>'\u20ac\xa3,.")
      ],
      Ca = {
        letters: ha,
        accents: [
          [...ra("1234567890"), Da("backspace")], ra("\xe1\xe9\xed\xf3\xfa\xe0\xe8\xec\xf2\xf9\xf1"), ra("\xe2\xea\xee\xf4\xfb\xe4\xeb\xef\xf6\xfc\xe7"), [Da("shift", 2), ...ra("\xe3\xf5\xdf\u0153\u011f\u015f\u0131\xbf\xa1")]
        ],
        symbols: qa
      },
      Za = new Set(["de", "es", "fr", "it", "nl", "pt", "pt-BR", "tr", "vi"]),
      pa = (kk, Fk) => "letters" === kk ? Fk ? {
        page: "accents",
        otherPage: "symbols"
      } : {
        page: "symbols",
        otherPage: "accents"
      } : {
        page: "letters",
        otherPage: "accents" === kk ? "symbols" : "accents"
      },
      Ka = function(kk, Fk) {
        const Bk = ((kk, Fk) => [...Ca[kk], Fk ? Pa : za])(kk, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
        if (0 === Fk) return Bk;
        const Rk = Math.min(2, xa(Bk[0]) / Fk);
        return [Array.from({
          length: Fk
        }, ((kk, Fk) => ({
          type: "phrase",
          phraseIndex: Fk,
          width: Rk
        }))), ...Bk]
      },
      xa = kk => kk.reduce(((kk, Fk) => kk + Fk.width), 0),
      ja = kk => Math.max(...kk.map(xa)),
      la = (kk, Fk) => {
        const Bk = kk[Fk.row];
        let Rk = (ja(kk) - xa(Bk)) / 2;
        for (let tk = 0; tk < Fk.col; tk++) Rk += Bk[tk].width;
        return Rk + Bk[Fk.col].width / 2
      },
      na = (kk, Fk, Bk) => {
        let Rk = 0,
          tk = 1 / 0;
        for (let ak = 0; ak < kk[Fk].length; ak++) {
          const Xk = Math.abs(la(kk, {
            row: Fk,
            col: ak
          }) - Bk);
          Xk < tk - 1e-9 && (Rk = ak, tk = Xk)
        }
        return Rk
      },
      Ia = (kk, Fk) => {
        const Bk = Math.max(0, Math.min(kk.length - 1, Fk.row));
        return {
          row: Bk,
          col: Math.max(0, Math.min(kk[Bk].length - 1, Fk.col))
        }
      },
      Qa = (kk, Fk, Bk) => "once" === kk && Fk - Bk <= 400 ? "caps" : "off" === kk ? "once" : "off",
      kX = (kk, Fk) => "once" === kk && (kk => kk.toLowerCase() !== kk.toUpperCase())(Fk) ? "off" : kk,
      FX = (kk, Fk, Bk) => {
        if ("symbols" === Fk || "off" === Bk) return kk;
        const Rk = kk.toUpperCase();
        return 1 === Rk.length ? Rk : kk
      };
    var BX = Bk(8322);
    const RX = ["controller:keyboardPhraseGg", "controller:keyboardPhraseHi", "controller:keyboardPhraseThanks", "controller:keyboardPhraseGl", "controller:keyboardPhraseBrb", "controller:keyboardPhraseYes", "controller:keyboardPhraseNo", "controller:keyboardPhraseHelp"];
    const tX = new class {
        constructor() {
          this.lastSendMs = -1 / 0
        }
        claim(kk) {
          return !(kk - this.lastSendMs < 2e3) && (this.lastSendMs = kk, !0)
        }
      },
      aX = {
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
      XX = ["Eb", "nameTag"],
      bX = kk => {
        const Fk = kk.target instanceof HTMLTextAreaElement && !XX.includes(kk.kind);
        return Ka(kk.page, "chat" === kk.kind ? RX.length : 0, Fk)
      },
      wX = kk => {
        const Fk = kk.getBoundingClientRect(),
          Bk = window.innerHeight,
          Rk = Fk.top + Fk.height / 2 < Bk / 2 ? "bottom" : "top",
          tk = "bottom" === Rk ? Bk - Fk.bottom - 6 : Fk.top - 6;
        return {
          placement: Rk,
          maxHeightPx: Math.min(.46 * Bk, Math.max(.3 * Bk, tk))
        }
      },
      dX = kk => {
        (0, iR.j)(kk) ? (0, iR.e)().close(): (pt.noteChosenStop(kk), kk.blur())
      };
    class sX {
      constructor(kk) {
        this.host = kk, this.lastShiftPressMs = -1 / 0, this.phraseTexts = [], this.phrasesFill = !1
      }
      setPhraseRow(kk, Fk) {
        this.phraseTexts = kk, this.phrasesFill = Fk
      }
      pressKey(kk) {
        const Fk = this.host.getState(),
          Bk = bX(Fk),
          Rk = Bk[kk.row][kk.col];
        this.host.setState({
          ...Fk,
          focus: kk,
          preferredX: la(Bk, kk)
        }), "char" === Rk.type ? this.typeChar(Rk.char) : "command" === Rk.type ? this.runCommand(Rk.command) : this.sendPhrase(Rk.phraseIndex)
      }
      runCommand(kk) {
        const Fk = this.host.getState();
        switch (kk) {
          case "backspace":
            XF(Fk.target);
            break;
          case "space":
            aF(Fk.target, " ");
            break;
          case "newline":
            aF(Fk.target, "\n");
            break;
          case "caretLeft":
            bF(Fk.target, -1);
            break;
          case "caretRight":
            bF(Fk.target, 1);
            break;
          case "shift": {
            const kk = performance.now();
            this.host.setState({
              ...Fk,
              shift: Qa(Fk.shift, kk, this.lastShiftPressMs)
            }), this.lastShiftPressMs = kk;
            break
          }
          case "page":
          case "otherPage": {
            const Bk = pa(Fk.page, Fk.accentsFirst)[kk];
            this.host.setState({
              ...Fk,
              page: Bk,
              focus: Ia(bX({
                ...Fk,
                page: Bk
              }), Fk.focus)
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
            (0, iR.j)(Fk.target) && (0, iR.e)().selectNextChannel()
        }
      }
      submit() {
        var kk, Fk;
        const {
          target: Bk
        } = this.host.getState();
        this.host.hide(), (0, iR.j)(Bk) ? (0, iR.e)().submit() : (pt.noteChosenStop(Bk), null === (kk = (Fk = (0, iR.i)(Bk)).submit) || void 0 === kk || kk.call(Fk), document.activeElement === Bk && Bk.blur())
      }
      close() {
        const {
          target: kk
        } = this.host.getState();
        this.host.hide(), dX(kk)
      }
      typeChar(kk) {
        const {
          target: Fk,
          page: Bk,
          shift: Rk
        } = this.host.getState();
        aF(Fk, FX(kk, Bk, Rk)), this.host.setState({
          ...this.host.getState(),
          shift: kX(Rk, kk)
        })
      }
      sendPhrase(kk) {
        if (this.phrasesFill) {
          const {
            target: Fk
          } = this.host.getState(), Bk = this.phraseTexts[kk];
          Bk && (Fk.setSelectionRange(0, Fk.value.length), aF(Fk, Bk))
        } else tX.claim(performance.now()) && (this.host.hide(), (0, iR.e)().sendLine(this.phraseTexts[kk]))
      }
    }
    const VX = {
        initialDelayMs: 380,
        intervalMs: 85
      },
      JX = {
        initialDelayMs: 400,
        intervalMs: 55
      };
    class AX {
      constructor(kk, Fk) {
        this.host = kk, this.editor = Fk, this.lastDirection = null, this.navRepeat = new ek.c((0, yk.c)(VX)), this.commandRepeats = new Map(Ta.filter((kk => {
          let {
            repeats: Fk
          } = kk;
          return Fk
        })).map((kk => {
          let {
            command: Fk
          } = kk;
          return [Fk, (0, yk.c)(JX)]
        })))
      }
      reset() {
        this.navRepeat.reset();
        for (const kk of this.commandRepeats.values()) kk.reset()
      }
      onVisibleFrame(kk) {
        const Fk = performance.now();
        for (const {
            command: tk,
            action: ak
          }
          of Ta) {
          const Bk = (0, sk.f)(ak),
            Rk = this.commandRepeats.get(tk);
          if ((Rk ? Rk.update(kk.isHeld(Bk), Fk) : kk.wasPressed(Bk)) && (this.editor.runCommand(tk), !this.host.getState().visible)) return
        }
        if (kk.wasPressed((0, sk.f)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
        const Bk = this.readNavDirection(kk);
        this.lastDirection = Bk;
        const Rk = this.navRepeat.update(Bk, Fk);
        Rk && this.navigate(Rk)
      }
      onHiddenFrame(kk, Fk) {
        var Bk;
        if (kk.wasPressed((0, sk.f)("keyboardClose"))) return void dX(Fk);
        const Rk = (0, sk.f)("keyboardType");
        if (kk.wasPressed(Rk)) return Vk.d.consumeButton(Rk), void this.host.open(Fk);
        const tk = this.readNavDirection(kk),
          ak = null !== tk && tk !== this.lastDirection;
        if (this.lastDirection = tk, !ak || (0, iR.j)(Fk)) return;
        const Xk = (null === (Bk = Bt()) || void 0 === Bk ? void 0 : Bk.root.contains(Fk)) || null !== Fk.closest(".EntireInventoryWrapper");
        dX(Fk), Xk && Vk.d.handOffHeldInput()
      }
      navigate(kk) {
        const Fk = this.host.getState();
        if ("Up" === kk && 0 === Fk.focus.row && "chat" === Fk.kind) return (0, iR.e)().stepHistory(), void this.host.setState({
          ...Fk
        });
        const Bk = ((kk, Fk, Bk, Rk) => {
          if ("Left" === Bk || "Right" === Bk) {
            const Rk = kk[Fk.row].length,
              tk = (Fk.col + ("Right" === Bk ? 1 : -1) + Rk) % Rk,
              ak = {
                row: Fk.row,
                col: tk
              };
            return {
              pos: ak,
              preferredX: la(kk, ak)
            }
          }
          const tk = (Fk.row + ("Down" === Bk ? 1 : -1) + kk.length) % kk.length;
          return {
            pos: {
              row: tk,
              col: na(kk, tk, Rk)
            },
            preferredX: Rk
          }
        })(bX(Fk), Fk.focus, kk, Fk.preferredX);
        this.host.setState({
          ...Fk,
          focus: Bk.pos,
          preferredX: Bk.preferredX
        })
      }
      readNavDirection(kk) {
        for (const Fk of ek.B)
          if (kk.isHeld(Fk)) return Fk;
        return (0, ek.ib)((0, ek.i)(kk.leftStick, (0, Jk.g)().moveDeadzone))
      }
    }
    const eX = ["Up", "Down", "Left", "Right"],
      yX = new Set(["CapsLock", "Control", "Fn", "FnLock", "Hyper", "NumLock", "ScrollLock", "Shift", "Super"]);
    const fX = new class {
      constructor() {
        this.state = aX, this.listeners = new Set, this.ownedField = null, this.pendingChatInput = null, this.pendingChatTimeout = 0, this.savedInputMode = null, this.editor = new sX(this), this.padInput = new AX(this, this.editor)
      }
      getState() {
        return this.state
      }
      setState(kk) {
        const Fk = kk.visible !== this.state.visible;
        this.state = kk;
        for (const Bk of this.listeners) Bk();
        Fk && dk.o.Hf(pk.d, kk.visible)
      }
      subscribe(kk) {
        return this.listeners.add(kk), () => {
          this.listeners.delete(kk)
        }
      }
      install() {
        const kk = Vk.d.register({
            name: "keyboard",
            isActive: () => this.state.visible || Qk(document.activeElement),
            onFrame: kk => {
              this.onFrame(kk)
            },
            onDeactivate: () => {
              this.padInput.reset()
            },
            wakePressActs: kk => eX.includes(kk) || !this.state.visible && kk === (0, sk.f)("keyboardType")
          }),
          Fk = kk => {
            const Fk = kk.target;
            Qk(Fk) && (Fk === this.pendingChatInput || (0, Ak.m)() ? this.open(Fk) : this.state.visible && Fk !== this.state.target && (this.ownedField = null, this.hide()))
          },
          Bk = () => {
            setTimeout((() => {
              this.releaseLostField()
            }), 0)
          },
          Rk = kk => {
            kk.isTrusted && this.state.visible && (kk => !kk.repeat && !yX.has(kk.key) && !(0, BX.d)(kk.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(kk.key))(kk) && this.hide()
          },
          tk = () => {
            this.state.visible && this.setState({
              ...this.state,
              ...wX(this.state.target)
            })
          };
        document.addEventListener("focusin", Fk, !0), document.addEventListener("focusout", Bk, !0), window.addEventListener("keydown", Rk, !0), window.addEventListener("resize", tk);
        const ak = dk.o.subscribe(La.c, (() => {
            this.openChat()
          })),
          Xk = dk.o.subscribe(pk.e, (kk => {
            this.openForField(kk)
          }));
        return () => {
          kk(), document.removeEventListener("focusin", Fk, !0), document.removeEventListener("focusout", Bk, !0), window.removeEventListener("keydown", Rk, !0), window.removeEventListener("resize", tk), dk.o.unsubscribe(ak), dk.o.unsubscribe(Xk), this.clearPendingChat(), this.hide(), this.ownedField = null
        }
      }
      openChat() {
        const kk = (0, iR.e)();
        kk ? document.activeElement !== kk.input ? (this.clearPendingChat(), this.pendingChatInput = kk.input, this.pendingChatTimeout = window.setTimeout((() => {
          this.pendingChatInput = null
        }), 250), kk.open()) : this.open(kk.input) : console.warn("controllerOpenChat with no chat mounted")
      }
      openForField(kk) {
        Qk(kk) ? (document.activeElement !== kk && kk.focus(), document.activeElement === kk && this.open(kk)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", kk)
      }
      open(kk) {
        var Fk;
        if (this.clearPendingChat(), this.ownedField = kk, this.state.visible && this.state.target === kk) return;
        this.restoreInputMode(), (kk => {
          kF(kk) && 0 === kk.selectionStart && 0 === kk.selectionEnd && kk.setSelectionRange(kk.value.length, kk.value.length)
        })(kk), this.savedInputMode = kk.getAttribute("inputmode"), kk.setAttribute("inputmode", "none");
        const Bk = {
          ...aX,
          visible: !0,
          target: kk,
          kind: (0, iR.j)(kk) ? "chat" : null !== (Fk = (0, iR.i)(kk).kind) && void 0 !== Fk ? Fk : null,
          accentsFirst: (Rk = sa.c.get().getCurrentLanguageCode(), Za.has(Rk)),
          ...wX(kk)
        };
        var Rk;
        const tk = bX(Bk),
          ak = ((kk, Fk) => {
            for (let Bk = 0; Bk < kk.length; Bk++) {
              const Rk = kk[Bk].findIndex((kk => "char" === kk.type && kk.char === Fk));
              if (-1 !== Rk) return {
                row: Bk,
                col: Rk
              }
            }
            return null
          })(tk, "q");
        this.padInput.reset(), this.setState({
          ...Bk,
          focus: ak,
          preferredX: la(tk, ak)
        })
      }
      hide() {
        this.state.visible && (this.restoreInputMode(), this.padInput.reset(), this.setState(aX))
      }
      onFrame(kk) {
        if (this.releaseLostField()) return;
        const Fk = document.activeElement;
        this.state.visible ? this.padInput.onVisibleFrame(kk) : Qk(Fk) && this.padInput.onHiddenFrame(kk, Fk)
      }
      releaseLostField() {
        const kk = this.ownedField;
        return !(null === kk || kk.isConnected && document.activeElement === kk) && (this.ownedField = null, this.hide(), !0)
      }
      clearPendingChat() {
        window.clearTimeout(this.pendingChatTimeout), this.pendingChatInput = null
      }
      restoreInputMode() {
        const {
          target: kk
        } = this.state;
        kk && (null === this.savedInputMode ? kk.removeAttribute("inputmode") : kk.setAttribute("inputmode", this.savedInputMode), this.savedInputMode = null)
      }
    };
    var mX = Bk(8451);
    const WX = new Map(Ta.map((kk => {
        let {
          command: Fk,
          action: Bk
        } = kk;
        return [Fk, Bk]
      }))),
      vX = {
        letters: "ABC",
        accents: "\xe0\xe9",
        symbols: "&123"
      },
      iX = {
        chat: "controller:keyboardTargetChat",
        sign: "controller:keyboardTargetSign",
        nameTag: "controller:keyboardTargetNameTag",
        book: "controller:keyboardTargetBook",
        Eb: "controller:keyboardTargetBookTitle"
      },
      YX = kk => {
        const Fk = (() => {
          const [, kk] = (0, rk.useReducer)((kk => kk + 1), 0);
          return kk
        })();
        (0, rk.useEffect)((() => {
          if (!kk) return;
          const Bk = ["input", "select", "selectionchange", "keyup", "pointerup"];
          for (const tk of Bk) kk.addEventListener(tk, Fk);
          document.addEventListener("selectionchange", Fk);
          const Rk = new MutationObserver(Fk);
          return Rk.observe(kk, {
            attributeFilter: ["placeholder"]
          }), () => {
            Rk.disconnect();
            for (const Rk of Bk) kk.removeEventListener(Rk, Fk);
            document.removeEventListener("selectionchange", Fk)
          }
        }), [kk, Fk])
      },
      oX = kk => {
        kk.preventDefault()
      },
      LX = kk => {
        "mouse" !== kk.pointerType && kk.preventDefault()
      },
      OX = () => {
        var kk;
        const {
          t: Fk
        } = (0, tk.x)(), Bk = (() => {
          const [kk, Fk] = (0, rk.useState)(fX.getState());
          return (0, rk.useEffect)((() => fX.subscribe((() => {
            Fk(fX.getState())
          }))), []), kk
        })(), Rk = (0, Ak.C)(), ak = (0, rk.useRef)(null);
        (0, Jk.m)(), (0, Ak.E)(), (0, rk.useEffect)((() => {
          const kk = fX.install(),
            Fk = null;
          return () => {
            kk(), null === Fk || void 0 === Fk || Fk()
          }
        }), []);
        const Xk = (0, rk.useMemo)((() => RX.map((kk => Fk(kk)))), [Fk]),
          bk = Bk.visible && "chat" === Bk.kind ? Bk.target : null;
        YX(bk);
        const wk = null !== (kk = null === bk || void 0 === bk ? void 0 : bk.value) && void 0 !== kk ? kk : "",
          dk = ((kk, Fk, Bk) => {
            if (!kk.startsWith("/")) return [];
            const Rk = [];
            for (let tk = Fk.length - 1; tk >= 0 && Rk.length < Bk; tk--) {
              const Bk = Fk[tk].trim();
              Bk.startsWith(kk) && Bk !== kk && !Rk.includes(Bk) && Rk.push(Bk)
            }
            return Rk
          })(wk, wk.startsWith("/") ? (0, mX.f)() : [], RX.length),
          Vk = wk.startsWith("/"),
          ek = Vk ? RX.map(((kk, Fk) => {
            var Bk;
            return null !== (Bk = dk[Fk]) && void 0 !== Bk ? Bk : ""
          })) : Xk;
        if ((0, rk.useEffect)((() => {
            fX.editor.setPhraseRow(ek, Vk)
          })), (0, rk.useEffect)((() => {
            const kk = ak.current;
            if (kk) return kk.addEventListener("touchstart", oX, {
              passive: !1
            }), () => {
              kk.removeEventListener("touchstart", oX)
            }
          }), [Bk.visible]), !Bk.visible) return null;
        const yk = bX(Bk),
          fk = ja(yk),
          mk = kk => "char" === kk.type ? FX(kk.char, Bk.page, Bk.shift) : "phrase" === kk.type ? ek[kk.phraseIndex] : (kk => {
            switch (kk) {
              case "backspace":
                return "\u232b";
              case "shift":
                return "caps" === Bk.shift ? "\u21ea" : "\u21e7";
              case "page":
              case "otherPage":
                return vX[pa(Bk.page, Bk.accentsFirst)[kk]];
              case "space":
                return Fk("controller:keyboardSpace");
              case "caretLeft":
                return "\u2190";
              case "caretRight":
                return "\u2192";
              case "newline":
                return "\u21b5";
              case "submit":
                return Fk("chat" === Bk.kind ? "controller:keyboardSend" : "controller:keyboardDone");
              case "close":
                return "\u2715";
              case "channel":
                return "\u21c4"
            }
          })(kk.command),
          Wk = kk => {
            fX.editor.pressKey(kk)
          };
        return (0, Pk.jsxs)("div", {
          ref: ak,
          className: zk()(iR.m, "top" === Bk.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
            PadKeyboardMultiline: Bk.target instanceof HTMLTextAreaElement
          }),
          style: {
            "--pad-keyboard-rows": yk.length,
            "--pad-keyboard-height": `${Bk.maxHeightPx}px`
          },
          onPointerDown: LX,
          onMouseDown: oX,
          children: [(0, Pk.jsx)(EX, {
            target: Bk.target,
            label: Bk.kind ? Fk(iX[Bk.kind]) : Bk.target.placeholder || Fk("controller:keyboardTargetText")
          }), (0, Pk.jsx)("div", {
            className: "PadKeyboardRows",
            children: yk.map(((kk, Fk) => (0, Pk.jsx)("div", {
              className: zk()("PadKeyboardRow", {
                PadKeyboardPhraseRow: "phrase" === kk[0].type
              }),
              children: kk.map(((kk, tk) => {
                const ak = Rk && Bk.focus.row === Fk && Bk.focus.col === tk,
                  Xk = "command" === kk.type ? WX.get(kk.command) : void 0;
                return (0, Pk.jsx)("div", {
                  className: "PadKeyboardKeySlot",
                  style: {
                    width: kk.width / fk * 100 + "%"
                  },
                  children: (0, Pk.jsxs)("div", {
                    className: zk()("PadKeyboardKey", {
                      PadKeyboardKeyFocused: ak,
                      PadKeyboardKeyCommand: "command" === kk.type,
                      PadKeyboardKeyPhrase: "phrase" === kk.type,
                      PadKeyboardKeyActive: "command" === kk.type && "shift" === kk.command && "off" !== Bk.shift,
                      PadKeyboardKeySubmit: "command" === kk.type && "submit" === kk.command
                    }),
                    role: "button",
                    onClick: () => {
                      Wk({
                        row: Fk,
                        col: tk
                      })
                    },
                    onTouchEnd: kk => {
                      var Bk, Rk;
                      kk.preventDefault(), Bk = kk.changedTouches[0], Rk = kk.currentTarget.getBoundingClientRect(), Bk && Bk.clientX >= Rk.left && Bk.clientX <= Rk.right && Bk.clientY >= Rk.top && Bk.clientY <= Rk.bottom && Wk({
                        row: Fk,
                        col: tk
                      })
                    },
                    children: [(0, Pk.jsx)("span", {
                      className: "PadKeyboardKeyLabel",
                      children: mk(kk)
                    }), Rk && Xk && (0, Pk.jsx)(ya, {
                      className: "PadKeyboardKeyGlyph",
                      glyph: (0, sk.f)(Xk)
                    })]
                  })
                }, tk)
              }))
            }, Fk)))
          })]
        })
      },
      EX = kk => {
        let {
          target: Fk,
          label: Bk
        } = kk;
        YX(Fk);
        const Rk = (0, rk.useRef)(null),
          tk = (0, rk.useRef)(null),
          ak = Fk instanceof HTMLTextAreaElement;
        (0, rk.useLayoutEffect)((() => {
          const kk = Rk.current,
            Fk = tk.current;
          ak ? kk.scrollTop = Fk.offsetTop - kk.clientHeight / 2 : kk.scrollLeft = Fk.offsetLeft - kk.clientWidth / 2
        }));
        const {
          value: Xk,
          start: bk,
          end: wk
        } = FF(Fk), dk = "password" === Fk.type ? "\u2022".repeat(Xk.length) : Xk;
        return (0, Pk.jsxs)("div", {
          className: "PadKeyboardPreview",
          children: [(0, Pk.jsx)("div", {
            className: "PadKeyboardPreviewLabel SmallTextBold",
            children: Bk
          }), (0, Pk.jsxs)("div", {
            ref: Rk,
            className: zk()("PadKeyboardPreviewText", {
              PadKeyboardPreviewMultiline: ak
            }),
            children: [(0, Pk.jsx)("span", {
              children: dk.slice(0, bk)
            }), (0, Pk.jsx)("span", {
              ref: tk,
              className: "PadKeyboardCaret"
            }), bk !== wk && (0, Pk.jsx)("span", {
              className: "PadKeyboardPreviewSelection",
              children: dk.slice(bk, wk)
            }), (0, Pk.jsx)("span", {
              children: dk.slice(wk)
            }), 0 === dk.length && Fk.placeholder && Fk.placeholder !== Bk && (0, Pk.jsx)("span", {
              className: "PadKeyboardPreviewPlaceholder",
              children: Fk.placeholder
            })]
          })]
        })
      };
    var SX = Bk(1344),
      NX = Bk(3218);
    const HX = function() {
        for (var kk = arguments.length, Fk = new Array(kk), Bk = 0; Bk < kk; Bk++) Fk[Bk] = arguments[Bk];
        return Fk.map(sk.f)
      },
      uX = (kk, Fk) => {
        const Bk = TR(kk);
        return Bk ? [{
          glyphs: [Bk],
          labelKey: Fk
        }] : []
      },
      MX = [".BottomMiddleElements", ".BottomLeftElements > *", ".BottomRightElements > *", ".MiddleTextBottom .MiddleText"],
      gX = "--pad-hint-bar-clearance",
      UX = "[data-pad-hint-bar-avoid]",
      cX = kk => {
        const Fk = [];
        for (const Bk of kk) sF(Bk) && Fk.push(Bk.getBoundingClientRect());
        return Fk
      },
      GX = kk => {
        if (!kk) return null;
        const Fk = Bt(),
          Bk = Fk ? cX(((kk, Fk) => {
            const Bk = kk.closest(UX);
            return Bk ? [Bk] : ("popup" === Fk ? document : kk).querySelectorAll(UX)
          })(Fk.root, Fk.layer.kind)) : [],
          Rk = !Fk || Fk.root.hasAttribute("data-pad-shows-hud");
        if (((0, NX.f)(null === Fk || void 0 === Fk ? void 0 : Fk.layer.kind, (0, NX.g)()) || Rk) && Bk.push(...cX(document.querySelectorAll(MX.join(",")))), 0 === Bk.length) return null;
        const {
          width: tk,
          height: ak
        } = kk.getBoundingClientRect(), Xk = window.innerHeight - 8, bk = (0, NX.k)(Xk, {
          width: tk,
          height: ak
        }, window.innerWidth / 2, Bk, 8);
        return bk === Xk ? null : Math.round(window.innerHeight - bk)
      },
      TX = kk => {
        const Fk = document.documentElement.style,
          Bk = kk ? `${Math.round(window.innerHeight-kk.getBoundingClientRect().top)}px` : "";
        Fk.getPropertyValue(gX) !== Bk && (Bk ? Fk.setProperty(gX, Bk) : Fk.removeProperty(gX))
      },
      rX = () => {
        const {
          t: kk
        } = (0, tk.x)(), {
          hideButtonHints: Fk
        } = (0, Jk.m)(), Bk = (0, Ak.C)(), [Rk, ak] = (0, rk.useState)(!1), [Xk, dk] = (0, rk.useState)([]), [yk, fk] = (0, rk.useState)(null), mk = (0, rk.useRef)(null), Wk = (0, rk.useRef)(null);
        (0, da.f)(pk.d, (kk => {
          ak(kk)
        })), (0, da.f)(NX.j, (() => {
          var kk;
          null === (kk = Wk.current) || void 0 === kk || kk.call(Wk)
        }));
        const vk = Bk && !Fk && !Rk;
        return (0, rk.useEffect)((() => {
          if (!vk) return;
          let kk = null;
          const Fk = () => {
            const Fk = (() => {
                var kk;
                const Fk = Vk.d.getActiveConsumerName(),
                  Bk = (0, NX.d)();
                if (Bk) {
                  const kk = (0, sk.f)(Bk),
                    Fk = "emoteWheel" === Bk && "wheel" === (0, Jk.g)().emoteButton || !(0, ek.L)(Vk.d.getLastFrame().values, kk) ? {
                      glyphs: HX("menuConfirm"),
                      labelKey: "controller:menusSelect"
                    } : {
                      glyphs: [kk],
                      labelKey: "controller:wheelReleaseToPick"
                    };
                  return [{
                    glyphs: [(0, sk.t)(kk)],
                    labelKey: "controller:wheelChoose"
                  }, Fk, {
                    glyphs: HX("menuBack"),
                    labelKey: "controller:wheelClose"
                  }]
                }
                const Rk = Bt();
                if (!Rk || "focus" !== Fk && "cursor" !== Fk) return (0, NX.c)(sk.f);
                const tk = [],
                  ak = {
                    glyphs: HX("menuBack"),
                    labelKey: "controller:menusBack"
                  },
                  Xk = rF(Rk.root),
                  bk = Xk ? !VF(Xk) : Boolean(Rk.layer.close),
                  dk = !Xk && Rk.layer.closeLabelKey ? Rk.layer.closeLabelKey : ak.labelKey,
                  Ak = bk ? [{
                    ...ak,
                    labelKey: dk
                  }] : [],
                  yk = LR(Rk.layer.kind) ? [{
                    glyphs: HX("chat"),
                    labelKey: "controller:menusQuickChat"
                  }] : [];
                if ("cursor" === Fk) return tk.push({
                  glyphs: HX("menuConfirm"),
                  labelKey: "controller:menusClick"
                }), tk.push({
                  glyphs: HX("menuSecondary"),
                  labelKey: "controller:menusRightClick"
                }), tk.push(...Ak), tk.push(...yk), tk.push({
                  glyphs: ["RightStick"],
                  labelKey: "controller:menusScroll"
                }), Wt() && tk.push({
                  glyphs: HX("menuToggleCursor"),
                  labelKey: "controller:menusFocusMode"
                }), tk;
                const fk = pt.getFocused();
                fk && (0, Lt.e)(fk) ? tk.push({
                  glyphs: ["Left", "Right"],
                  labelKey: "controller:menusAdjust"
                }) : fk && GF(fk) ? tk.push({
                  glyphs: [],
                  labelKey: "controller:menusUseMouse"
                }) : tk.push({
                  glyphs: HX("menuConfirm"),
                  labelKey: "controller:menusSelect"
                });
                const mk = fk ? null === (kk = aR(fk)) || void 0 === kk ? void 0 : kk.dataset.padSecondary : void 0;
                mk && tk.push({
                  glyphs: HX("menuSecondary"),
                  labelKey: mk
                }), tk.push(...null !== fk && void 0 !== fk && fk.closest("[data-pad-friends-column]") ? [ak] : Ak), tk.push(...yk);
                const Wk = "home" === Rk.layer.kind;
                zR(Rk.root) || !NR(Rk.root) && !PR(Rk) ? Wk && tk.push({
                  glyphs: HX("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusRows"
                }) : tk.push({
                  glyphs: HX("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusTabs"
                }), Wk && (tk.push(...uX("inventory", "controller:menusFriends")), mk || tk.push({
                  glyphs: HX("menuSecondary"),
                  labelKey: "controller:menusSearch"
                }), tk.push(...uX("pause", "controller:menusSettings")), tk.push(...uX("leaderboard", "controller:menusNotifications")));
                const vk = wk.c.get("openEverythingMenuName");
                return "inGame" === wk.c.get("gameState") && "popup" !== Rk.layer.kind && null !== vk && ((0, FR.k)(vk) ? tk.push(...uX("leaderboard", "controller:menusClose")) : vk !== kR.p.LOBBY_LEADERBOARD && tk.push(...uX("leaderboard", "controller:menusLobby"))), tk.push({
                  glyphs: HX("menuToggleCursor"),
                  labelKey: "controller:menusCursorMode"
                }), tk
              })(),
              Bk = GX(mk.current),
              Rk = ((kk, Fk) => `${kk.map((kk=>`${kk.glyphs.join("+")}:${kk.labelKey}`)).join("|")}@${Fk}`)(Fk, Bk);
            Rk !== kk && (kk = Rk, (0, bk.unstable_batchedUpdates)((() => {
              dk(Fk), fk(Bk)
            }))), TX(mk.current)
          };
          Fk(), Wk.current = Fk;
          const Bk = requestAnimationFrame(Fk),
            Rk = setInterval(Fk, 150);
          return () => {
            Wk.current = null, cancelAnimationFrame(Bk), clearInterval(Rk), TX(null)
          }
        }), [vk]), (0, rk.useLayoutEffect)((() => {
          if (!vk) return;
          if (0 === Xk.length) return void TX(null);
          const kk = GX(mk.current);
          kk === yk ? TX(mk.current) : fk(kk)
        }), [vk, Xk, yk]), vk && 0 !== Xk.length ? (0, Pk.jsx)("div", {
          ref: mk,
          className: "PadButtonHintBar SmallTextBold",
          style: null === yk ? void 0 : {
            bottom: yk
          },
          "aria-hidden": !0,
          children: Xk.map((Fk => (0, Pk.jsxs)("div", {
            className: "PadButtonHint",
            children: [Fk.glyphs.map((kk => (0, Pk.jsx)(ya, {
              glyph: kk,
              className: "PadButtonHintGlyph"
            }, kk))), (0, Pk.jsx)("span", {
              children: kk(Fk.labelKey)
            })]
          }, Fk.labelKey)))
        }) : null
      },
      DX = [wF, "label", "[data-pad-slider]"].join(","),
      zX = "data-pad-cursor-probe",
      PX = kk => {
        var Fk;
        const Bk = (kk => {
          const Fk = [];
          for (let Rk = kk; Rk && Rk !== document.body && Rk !== document.documentElement && (Fk.push(Rk), !(Fk.length > 8)); Rk = Rk.parentElement);
          const Bk = document.documentElement.classList.contains(Ak.x) ? Fk[Fk.length - 1] : void 0;
          null === Bk || void 0 === Bk || Bk.setAttribute(zX, "");
          try {
            return Fk.map((kk => ({
              element: kk,
              cursor: getComputedStyle(kk).cursor
            })))
          } finally {
            null === Bk || void 0 === Bk || Bk.removeAttribute(zX)
          }
        })(kk);
        if ("pointer" !== (null === (Fk = Bk[0]) || void 0 === Fk ? void 0 : Fk.cursor)) return null;
        let Rk = 0;
        for (; Rk + 1 < Bk.length && "pointer" === Bk[Rk + 1].cursor;) Rk++;
        return Bk[Rk].element
      },
      hX = (kk, Fk, Bk, Rk) => {
        const tk = Rk.root.contains(kk) ? Rk.root : null;
        for (let ak = kk; ak && ak !== document.body && ak !== document.documentElement; ak = ak.parentElement) {
          if (ak instanceof HTMLElement && Nk(ak, Fk) && Uk(ak, Fk, Bk)) return ak;
          if (ak === tk) break
        }
        return "home" === Rk.layer.kind || "gamePage" === Rk.layer.kind ? ((kk, Fk) => {
          const Bk = document.scrollingElement;
          return Bk instanceof HTMLElement && ![document.documentElement, document.body].some((Fk => {
            const Bk = getComputedStyle(Fk),
              Rk = "y" === kk ? Bk.overflowY : Bk.overflowX;
            return "hidden" === Rk || "clip" === Rk
          })) && Uk(Bk, kk, Fk) ? Bk : null
        })(Fk, Bk) : null
      };
    const qX = new class {
        constructor() {
          this.state = {
            x: 0,
            y: 0,
            speedRamp: 0
          }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this.confirmRepeat = (0, yk.c)(ek.u), this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.layerRoot = null, this.layerOrder = 0, this.layerPoints = new WeakMap, this.page = null, this.pendingPageStart = null
        }
        install() {
          const kk = Vk.d.register({
              name: "cursor",
              isActive: () => "cursor" === vt(),
              onFrame: kk => {
                this.onFrame(kk)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: kk => (0, Vk.h)(kk) || kk === (0, sk.f)("menuConfirm") && TF((0, Ak.e)())
            }),
            Fk = (0, xR.k)((kk => {
              const Fk = kk.getRoot();
              Fk && this.layerPoints.delete(Fk), Fk === this.layerRoot && (this.layerRoot = null)
            })),
            Bk = dk.o.subscribe("appManagerUpdated|activeInputDevice", (kk => {
              "gamepad" !== kk && this.active && !this.hidden && this.hide()
            }));
          return () => {
            kk(), Fk(), dk.o.unsubscribe(Bk), this.deactivate()
          }
        }
        getHighlighted() {
          return this.isVisible() ? this.interactive : null
        }
        isVisible() {
          return this.active && !this.hidden && (0, Ak.m)()
        }
        getPoint() {
          return {
            x: this.state.x,
            y: this.state.y
          }
        }
        hide() {
          this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.Hf()
        }
        activate(kk) {
          this.active = !0, this.hidden = !1;
          const Fk = yt();
          !Fk || Fk.root && Fk.root !== kk.root ? this.jumpTo(this.hasPosition ? this.getPoint() : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          }) : (this.setLayer(kk), this.jumpTo(Fk.point))
        }
        jumpTo(kk) {
          this.state = {
            x: kk.x,
            y: kk.y,
            speedRamp: 0
          }, this.hasPosition = !0, this.lastHitTestMs = -1 / 0
        }
        deactivate() {
          this.active && (this.active = !1, this.page = null, this.pendingPageStart = null, this.cancelPress(), this.clearHover(), this.draggedSlider = null, this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.Hf())
        }
        onFrame(kk) {
          const Fk = Bt();
          if (!Fk) return;
          if (this.active || this.activate(Fk), this.followPage(Fk)) return;
          this.followLayer(Fk);
          const Bk = kk.wokeDevice ? (0, Ak.e)() : null;
          if (Bk && this.jumpTo(Bk), !(0, Ak.m)()) return void this.hide();
          const Rk = (0, sk.f)("menuToggleCursor");
          if (kk.wasPressed(Rk)) return Vk.d.consumeButton(Rk), void et(this.getHandoff(null));
          if (this.handBackToFocus(kk)) return;
          const tk = (0, sk.f)("menuConfirm"),
            ak = (0, sk.f)("menuSecondary");
          if (kk.wasPressed((0, sk.f)("menuBack"))) return UF(Fk.root) || DF(Fk.root) || Rt(), void this.Hf();
          if (CR(null, kk, Fk)) return kk.wasReleased(tk) && this.press && (this.updateHit(!1), this.updateConfirm(kk, tk)), void this.Hf();
          if (document.pointerLockElement) return void this.hide();
          const Xk = it() ? {
              x: 0,
              y: 0
            } : (kk => {
              const Fk = (kk, Fk) => (kk ? 1 : 0) - (Fk ? 1 : 0);
              return {
                x: Fk(kk.isHeld("Right"), kk.isHeld("Left")),
                y: Fk(kk.isHeld("Down"), kk.isHeld("Up"))
              }
            })(kk),
            bk = (0, Jk.g)().moveDeadzone,
            wk = ((kk, Fk) => {
              const Bk = (0, ek.i)(kk, ik(Fk));
              return Math.hypot(Bk.x, Bk.y)
            })(kk.leftStick, bk) > 0 || 0 !== Xk.x || 0 !== Xk.y;
          if (this.hidden) {
            const Fk = kk.wasPressed(tk),
              Bk = kk.wasPressed(ak);
            if (!wk && !Ok(kk.rightStick) && !Fk && !Bk && !kk.wokeDevice) return void this.Hf();
            if (this.hidden = !1, this.updateHit(!1), Fk || Bk) return Fk && (this.press = {
              kind: "ignored"
            }, kk.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.Hf()
          }
          this.movePendingPageStart(wk);
          const dk = this.getPoint();
          this.state = Lk(this.state, {
            stick: kk.leftStick,
            moveDeadzone: bk,
            dpad: Xk,
            dtMs: kk.dtMs,
            cursorSpeedPercent: (0, Jk.g)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: this.getAssistContext()
          });
          const yk = this.state.x !== dk.x || this.state.y !== dk.y,
            fk = [tk, ak].some((Fk => kk.wasPressed(Fk) || kk.wasReleased(Fk)));
          (yk || fk || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(yk), this.updateConfirm(kk, tk), this.updateSecondary(kk, ak), this.updateScroll(kk, Fk), this.Hf()
        }
        followPage(kk) {
          const Fk = "home" === kk.layer.kind || "gamePage" === kk.layer.kind,
            Bk = this.page;
          if (this.page = Fk ? {
              key: (0, xR.o)(kk.layer),
              root: kk.root
            } : null, !this.page || !Bk || Bk.root !== kk.root || Bk.key === this.page.key) return !1;
          if (this.cancelPress(), this.secondaryArmed = !1, this.setLayer(kk), "hybrid" === At()) return st = null, wt = null, Vt.lock(), !0;
          const {
            key: Rk
          } = this.page;
          return this.pendingPageStart = {
            root: kk.root,
            key: Rk,
            returning: pt.notePageEnteredByCursor(Rk),
            enteredAtMs: performance.now()
          }, !1
        }
        movePendingPageStart(kk) {
          const Fk = this.pendingPageStart;
          if (!Fk) return;
          if (kk || Fk.root !== this.layerRoot) return void(this.pendingPageStart = null);
          const Bk = Fk.returning ? pt.recallStop(Fk.root, Fk.key) : null;
          if (!Bk && Fk.returning && performance.now() - Fk.enteredAtMs < 1e3) return;
          const Rk = null !== Bk && void 0 !== Bk ? Bk : pt.pickInitial(Fk.root, {
            includeDisabled: !0,
            waitForContent: !0,
            enteredAtMs: Fk.enteredAtMs
          });
          Rk && (this.pendingPageStart = null, this.jumpTo(YF(Rk)))
        }
        setLayer(kk) {
          this.layerRoot = kk.root, this.layerOrder = kk.order
        }
        followLayer(kk) {
          var Fk;
          if (kk.root === this.layerRoot) return;
          null !== (Fk = this.layerRoot) && void 0 !== Fk && Fk.isConnected && this.layerPoints.set(this.layerRoot, this.getPoint()), this.cancelPress(), this.draggedSlider = null, this.secondaryArmed = !1;
          const Bk = this.layerPoints.get(kk.root),
            Rk = Bk && kk.order <= this.layerOrder ? Bk : pt.getLayerStartPoint(kk.root);
          this.setLayer(kk), this.jumpTo(Rk)
        }
        getHandoff(kk) {
          var Fk;
          return {
            point: this.getPoint(),
            element: null !== (Fk = this.interactive) && void 0 !== Fk ? Fk : this.findDraggedSliderNearby(),
            direction: kk
          }
        }
        findDraggedSliderNearby() {
          const kk = this.draggedSlider;
          if (null === kk || void 0 === kk || !kk.isConnected) return null;
          const Fk = kk.getBoundingClientRect(),
            {
              y: Bk
            } = this.getPoint();
          return Bk >= Fk.top - 40 && Bk <= Fk.bottom + 40 ? kk : null
        }
        handBackToFocus(kk) {
          if (!it()) return !1;
          const Fk = ek.B.find((Fk => kk.wasPressed(Fk)));
          return !!Fk && (Bk = this.getHandoff(Fk), st = Xt(Bk), wt = null, Vt.lock(), Vk.d.handOffHeldInput(), !0);
          var Bk
        }
        getAssistContext() {
          const kk = this.interactive;
          if (null === kk || void 0 === kk || !kk.isConnected) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const Fk = kk.getBoundingClientRect();
          if (Fk.width > .4 * window.innerWidth || Fk.height > .4 * window.innerHeight) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const Bk = (0, Jk.g)().cursorMagnetism && !(0, Kk.b)(kk) && !kk.closest("[data-pad-slider]"),
            Rk = this.magnet && this.magnet !== kk && this.magnet.isConnected ? this.magnet.getBoundingClientRect() : Fk;
          return {
            overInteractive: !0,
            magnetTarget: Bk ? {
              x: Rk.left + Rk.width / 2,
              y: Rk.top + Rk.height / 2
            } : null
          }
        }
        updateHit(kk) {
          this.lastHitTestMs = performance.now();
          const Fk = this.getPoint(),
            Bk = document.elementFromPoint(Fk.x, Fk.y),
            Rk = Bk && !(0, mk.o)(Bk) && (kk => {
              var Fk;
              const Bk = Bt();
              return !(Bk && !Bk.root.contains(kk) && !kk.closest(".tooltip-container")) || !(null !== (Fk = document.getElementById("root")) && void 0 !== Fk && Fk.contains(kk))
            })(Bk) ? Bk : null;
          if (Rk !== this.hit) return NF(this.hit, Rk, Fk), this.hit = Rk, void this.setInteractive(Rk ? (kk => {
            const Fk = kk.closest(DX);
            if (Fk) {
              var Bk, Rk;
              const kk = null !== (Bk = null === (Rk = Fk.parentElement) || void 0 === Rk ? void 0 : Rk.closest("[data-pad-focusable]")) && void 0 !== Bk ? Bk : Fk;
              return VF(kk) ? {
                element: null,
                magnet: null
              } : {
                element: kk,
                magnet: Fk
              }
            }
            const tk = PX(kk);
            return {
              element: tk,
              magnet: tk
            }
          })(Rk) : {
            element: null,
            magnet: null
          });
          kk && Rk && NF(Rk, Rk, Fk)
        }
        setInteractive(kk) {
          let {
            element: Fk,
            magnet: Bk
          } = kk;
          this.interactive = Fk, this.magnet = Bk
        }
        clearHover() {
          this.hit && NF(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
            element: null,
            magnet: null
          })
        }
        beginPress() {
          const kk = this.hit;
          if (!kk || GF(kk)) return {
            kind: "ignored"
          };
          const Fk = (0, Lt.e)(kk),
            Bk = kk.closest("[data-pad-slider]");
          return Fk && Bk ? {
            kind: "slider",
            slider: Bk,
            adjuster: Fk
          } : (OF(kk, this.getPoint()), {
            kind: "pointer",
            target: kk
          })
        }
        applySliderFraction(kk) {
          var Fk;
          const Bk = kk.slider.getBoundingClientRect(),
            Rk = Bk.height > Bk.width,
            tk = null === (Fk = kk.slider.querySelector("[data-pad-slider-handle]")) || void 0 === Fk ? void 0 : Fk.getBoundingClientRect(),
            ak = tk ? Rk ? tk.height : tk.width : 0,
            Xk = (Rk ? Bk.height : Bk.width) - ak;
          if (Xk <= 0) return;
          const bk = Rk ? Bk.bottom - ak / 2 - this.state.y : this.state.x - Bk.left - ak / 2;
          kk.adjuster.setFraction(Math.max(0, Math.min(1, bk / Xk)))
        }
        updateConfirm(kk, Fk) {
          kk.wasPressed(Fk) && (this.press = kk.wokeDevice ? {
            kind: "ignored"
          } : this.beginPress(), this.draggedSlider = "slider" === this.press.kind ? this.press.slider : null, this.beginRepeat());
          const Bk = this.press;
          if (!Bk) return;
          if (kk.isHeld(Fk)) return "slider" === Bk.kind && this.applySliderFraction(Bk), void this.updateRepeat();
          this.press = null;
          const Rk = this.repeated;
          if (this.endRepeat(), !kk.wasReleased(Fk)) return void this.endPressWithoutClick(Bk);
          const tk = this.getPoint(),
            ak = this.hit;
          if ("slider" === Bk.kind && Bk.adjuster.endDrag(), "pointer" === Bk.kind) {
            const kk = null !== ak && void 0 !== ak ? ak : Bk.target.isConnected ? Bk.target : null;
            kk && EF(kk, tk);
            const Fk = ak && Bk.target.isConnected && !Rk ? ((kk, Fk) => {
              for (let Bk = kk; Bk; Bk = Bk.parentElement)
                if (Bk.contains(Fk)) return Bk;
              return null
            })(Bk.target, ak) : null;
            Fk && (pt.noteCursorActivation(Fk), (0, mk.i)(Fk, new MouseEvent("click", oF(tk, 0, 0))), cF(Fk), iF(Fk) && HF(Fk))
          }
        }
        beginRepeat() {
          var kk, Fk, Bk;
          const Rk = null !== (kk = null === (Fk = this.hit) || void 0 === Fk ? void 0 : Fk.closest("[data-pad-repeat]")) && void 0 !== kk ? kk : null;
          this.repeatStop = Rk, this.repeatKey = null !== (Bk = null === Rk || void 0 === Rk ? void 0 : Rk.getAttribute("data-pad-repeat")) && void 0 !== Bk ? Bk : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
        }
        updateRepeat() {
          const kk = this.repeatStop;
          if (!kk) return;
          const Fk = this.hit;
          kk.isConnected && !VF(kk) && kk.getAttribute("data-pad-repeat") === this.repeatKey && Fk && kk.contains(Fk) ? kk.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, pt.noteCursorActivation(kk), (0, mk.i)(kk, new MouseEvent("click", oF(this.getPoint(), 0, 0)))) : this.repeatStop = null
        }
        endRepeat() {
          this.repeatStop = null, this.repeated = !1
        }
        endPressWithoutClick(kk) {
          "slider" === kk.kind && kk.adjuster.endDrag(), "pointer" === kk.kind && kk.target.isConnected && EF(kk.target, this.getPoint())
        }
        cancelPress() {
          this.endRepeat(), this.press && (this.endPressWithoutClick(this.press), this.press = null)
        }
        updateSecondary(kk, Fk) {
          kk.wasPressed(Fk) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !kk.isHeld(Fk) && (this.secondaryArmed = !1, kk.wasReleased(Fk) && this.hit && SF(this.hit, this.getPoint(), 2))
        }
        updateScroll(kk, Fk) {
          const Bk = Ek(kk.rightStick, kk.dtMs);
          if (0 === Bk.x && 0 === Bk.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          this.scrollRemainder = {
            x: this.scrollRemainder.x + Bk.x,
            y: this.scrollRemainder.y + Bk.y
          };
          const Rk = Math.trunc(this.scrollRemainder.x),
            tk = Math.trunc(this.scrollRemainder.y);
          this.scrollRemainder = {
            x: this.scrollRemainder.x - Rk,
            y: this.scrollRemainder.y - tk
          };
          const ak = this.hit;
          if (!ak) return;
          let Xk = !1;
          if (0 !== tk) {
            const kk = hX(ak, "y", tk > 0 ? 1 : -1, Fk);
            kk && (kk.scrollBy({
              top: tk,
              behavior: "instant"
            }), Xk = !0)
          }
          if (0 !== Rk) {
            const kk = hX(ak, "x", Rk > 0 ? 1 : -1, Fk);
            kk && (kk.scrollBy({
              left: Rk,
              behavior: "instant"
            }), Xk = !0)
          }
          Xk && (this.lastHitTestMs = -1 / 0)
        }
        Hf() {
          hF.set({
            x: this.state.x,
            y: this.state.y,
            visible: this.isVisible(),
            pressed: null !== this.press && "ignored" !== this.press.kind
          })
        }
      },
      CX = () => {
        const kk = (0, rk.useMemo)((() => new Ck), []),
          Fk = (0, Ak.C)();
        return (0, rk.useEffect)((() => {
          if (!Fk) return;
          let Bk = 0,
            Rk = {
              of: null,
              atMs: 0,
              list: []
            };
          const tk = document.getElementsByClassName(Yt),
            ak = kk => {
              for (const Fk of [...tk]) Fk !== kk && Fk.classList.remove(Yt)
            },
            Xk = () => {
              var Fk;
              Bk = requestAnimationFrame(Xk);
              const tk = (() => {
                const kk = pt.getFocused();
                if (pt.isActive() && null !== kk && void 0 !== kk && kk.isConnected) return kk;
                const Fk = qX.getHighlighted();
                return null !== Fk && void 0 !== Fk && Fk.isConnected ? Fk : null
              })();
              ak(tk), tk && !tk.classList.contains(Yt) && tk.classList.add(Yt);
              const bk = null !== (Fk = null === tk || void 0 === tk ? void 0 : tk.closest("[data-pad-reticle-box]")) && void 0 !== Fk ? Fk : tk;
              kk.show(bk ? ((kk, Fk) => {
                let Bk = kk.left,
                  Rk = kk.top,
                  tk = kk.right,
                  ak = kk.bottom;
                for (const Xk of Fk) {
                  if (!Xk) continue;
                  const kk = Gk(Xk);
                  Bk = Math.max(Bk, kk.left), Rk = Math.max(Rk, kk.top), tk = Math.min(tk, kk.right), ak = Math.min(ak, kk.bottom)
                }
                return tk <= Bk || ak <= Rk ? null : {
                  left: Bk,
                  top: Rk,
                  width: tk - Bk,
                  height: ak - Rk
                }
              })(bk.getBoundingClientRect(), (kk => {
                const Fk = performance.now();
                return (Rk.of !== kk || Fk - Rk.atMs > 500) && (Rk = {
                  of: kk,
                  atMs: Fk,
                  list: [Hk(kk, "y"), Hk(kk, "x")]
                }), Rk.list
              })(bk)) : null)
            };
          return Bk = requestAnimationFrame(Xk), () => {
            cancelAnimationFrame(Bk), ak(null), kk.hide()
          }
        }), [Fk, kk]), (0, Pk.jsx)(Zk, {
          placer: kk,
          className: "PadFocusRing"
        })
      },
      ZX = (kk, Fk) => {
        kk.style.transform = `translate3d(${Fk.x}px, ${Fk.y}px, 0)`, kk.classList.toggle("Visible", Fk.visible), kk.classList.toggle("Pressed", Fk.pressed)
      },
      pX = () => {
        const kk = (0, rk.useRef)(null);
        return (0, rk.useEffect)((() => {
          const Fk = hF.subscribe((Fk => {
            kk.current && ZX(kk.current, Fk)
          }));
          return kk.current && ZX(kk.current, hF.get()), Fk
        }), []), (0, Pk.jsx)("div", {
          ref: kk,
          className: "PadCursorView",
          "aria-hidden": "true",
          children: (0, Pk.jsx)("div", {
            className: "PadCursorGlyph",
            children: "+"
          })
        })
      },
      KX = "#ncmp__modal.ncmp__active",
      xX = [{
        id: "nitro-consent-banner",
        find: () => document.querySelector(KX) ? null : document.querySelector("#ncmp__tool > .ncmp__banner.ncmp__active"),
        startSelectors: ["[data-ncmp-cmd='reject']", "[data-ncmp-cmd='showModal']"]
      }, {
        id: "nitro-consent-modal",
        find: () => document.querySelector(KX),
        startSelectors: ["[data-ncmp-cmd='reject']"]
      }, {
        id: "google-consent",
        find: () => document.querySelector(".fc-consent-root"),
        startSelectors: [".fc-cta-do-not-consent", ".fc-cta-manage-options"]
      }],
      jX = "PadOverThirdParty",
      lX = new Set(xX.map((kk => kk.id))),
      nX = () => {
        const kk = xX.map((kk => {
            let {
              id: Fk,
              find: Bk,
              startSelectors: Rk
            } = kk;
            return (0, xR.l)({
              id: Fk,
              kind: "popup",
              getRoot: () => {
                const kk = Bk(),
                  Fk = kk ? ((kk, Fk) => {
                    var Bk;
                    for (const Rk of Fk) {
                      const Fk = kk.querySelector(Rk);
                      if (Fk) return Fk
                    }
                    return null !== (Bk = [...kk.querySelectorAll("button")].find((kk => !kk.matches(".fc-cta-consent, [data-ncmp-cmd='save']")))) && void 0 !== Bk ? Bk : null
                  })(kk, Rk) : null;
                if (kk && Fk && !Fk.hasAttribute("data-pad-default-focus")) {
                  for (const Fk of kk.querySelectorAll("[data-pad-default-focus]")) Fk.removeAttribute("data-pad-default-focus");
                  for (const Fk of kk.querySelectorAll("[data-pad-hint-bar-avoid]")) Fk.removeAttribute("data-pad-hint-bar-avoid");
                  Fk.setAttribute("data-pad-default-focus", ""), ((kk, Fk) => {
                    let Bk = kk;
                    for (let Rk = kk.parentElement; Rk && Fk.contains(Rk) && !(Rk.getBoundingClientRect().height >= window.innerHeight / 2); Rk = Rk.parentElement) Bk = Rk;
                    return Bk
                  })(Fk, kk).setAttribute("data-pad-hint-bar-avoid", "")
                }
                return kk
              },
              close: null,
              memoryKey: null
            })
          })),
          Fk = document.documentElement,
          Bk = Xk.g.onFrame((() => {
            const kk = (0, Ak.m)() ? Bt() : null,
              Bk = !!kk && (Rk = kk.layer, lX.has(Rk.id));
            var Rk;
            Fk.classList.contains(jX) !== Bk && Fk.classList.toggle(jX, Bk)
          }));
        return () => {
          for (const Fk of kk) Fk();
          Bk(), Fk.classList.remove(jX)
        }
      },
      IX = "PadLargePointer",
      QX = () => {
        (0, rk.useEffect)((() => {
          const kk = (0, mk.l)(document.body),
            Fk = pt.install(),
            Bk = qX.install(),
            Rk = nX();
          return () => {
            kk(), Fk(), Bk(), Rk()
          }
        }), []);
        const {
          largePointer: kk
        } = (0, Jk.m)(), Fk = (0, SX.o)() && kk;
        return (0, rk.useEffect)((() => {
          if (Fk) return document.documentElement.classList.add(IX), () => {
            document.documentElement.classList.remove(IX)
          }
        }), [Fk]), (0, bk.createPortal)((0, Pk.jsxs)(Pk.Fragment, {
          children: [(0, Pk.jsx)(rX, {}), (0, Pk.jsx)(CX, {}), (0, Pk.jsx)(pX, {})]
        }), document.body)
      };
    var kb = Bk(8462),
      Fb = Bk(8484),
      Bb = Bk(8476);
    Bk(8492);
    const Rb = (kk, Fk) => {
        const [Bk, Rk] = (0, rk.useState)(!1), [tk, ak] = (0, rk.useState)(null), Xk = (0, rk.useRef)(null), bk = (0, rk.useCallback)((kk => {
          Xk.current = kk, ak(kk)
        }), []), wk = (0, rk.useCallback)((() => {
          Rk(!1), bk(null)
        }), [bk]), sk = (0, rk.useCallback)((() => {
          Rk(!0)
        }), []), Vk = (0, rk.useCallback)(((kk, Fk) => {
          bk((0, Bb.H)(kk, Fk, Xk.current))
        }), [bk]);
        (0, rk.useLayoutEffect)((() => (Fk(Bk), (0, NX.o)(kk, Bk), dk.o.Hf(NX.j), () => {
          Fk(!1), (0, NX.o)(kk, !1), dk.o.Hf(NX.j)
        })), [Bk, kk, Fk]), (0, da.f)("appManagerUpdated|activeInputDevice", (kk => {
          "gamepad" !== kk && wk()
        })), (0, da.f)("appManagerUpdated|gameState", (kk => {
          "inGame" !== kk && wk()
        }));
        const Jk = () => {
          (0, FR.s)() && wk()
        };
        return (0, da.f)("appManagerUpdated|openEverythingMenuName", Jk), (0, da.f)("appManagerUpdated|openInGameMenuName", Jk), {
          open: Bk,
          picked: tk,
          pickedRef: Xk,
          show: sk,
          aim: Vk,
          close: wk
        }
      },
      tb = kk => {
        let {
          className: Fk,
          slotCount: Bk,
          picked: Rk,
          slotLabel: tk,
          renderSlot: ak,
          centre: Xk
        } = kk;
        const bk = Array.from({
          length: Bk
        }, ((kk, Fk) => Fk));
        return (0, Pk.jsx)("div", {
          className: zk()("EmoteWheelOverlay PadRadialWheel", Fk),
          children: (0, Pk.jsxs)("div", {
            className: "EmoteWheel",
            style: {
              width: 2 * Bb.t + "rem",
              height: 2 * Bb.t + "rem"
            },
            children: [(0, Pk.jsxs)("svg", {
              className: "EmoteWheelSvg",
              viewBox: `0 0 ${Bb.o} ${Bb.o}`,
              children: [bk.map((kk => (0, Pk.jsx)("path", {
                d: (0, Bb.w)(kk, Bk, Bb.f, Bb.h, Bb.k),
                className: zk()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: kk === Rk
                }),
                "aria-label": tk(kk)
              }, kk))), (0, Pk.jsx)("circle", {
                className: "EmoteWheelOuterRing",
                cx: Bb.f,
                cy: Bb.f,
                r: Bb.k
              }), (0, Pk.jsx)("circle", {
                className: "EmoteWheelInnerRing",
                cx: Bb.f,
                cy: Bb.f,
                r: Bb.h
              }), null !== Rk && (0, Pk.jsx)("path", {
                className: "EmoteWheelWedgeOutline",
                d: (0, Bb.w)(Rk, Bk, Bb.f, Bb.h, Bb.k)
              })]
            }), bk.map((kk => {
              const Fk = (0, Bb.C)(kk, Bk);
              return (0, Pk.jsx)("div", {
                className: zk()("PadRadialWheelSlot SmallTextBold", {
                  PadRadialWheelSlotPicked: kk === Rk
                }),
                style: {
                  left: `calc(50% + ${Bb.d*Math.cos(Fk)}rem)`,
                  top: `calc(50% + ${Bb.d*Math.sin(Fk)}rem)`
                },
                "aria-hidden": !0,
                children: ak(kk)
              }, kk)
            })), (0, Pk.jsx)("div", {
              className: "EmoteWheelHint SmallTextBold",
              children: Xk
            })]
          })
        })
      },
      ab = RX.length,
      Xb = () => {
        const {
          t: kk
        } = (0, tk.x)(), Fk = Rb("chat", oR.p), Bk = (0, rk.useMemo)((() => RX.map((Fk => kk(Fk)))), [kk]);
        return (0, da.f)(oR.m, (() => {
          Fk.open || (0, kb.e)() || (0, Fb.p)() || "inGame" !== wk.c.get("gameState") || (0, FR.s)() || !(0, iR.e)() || Fk.show()
        })), (0, da.f)(oR.f, (kk => {
          Fk.open && Fk.aim(kk, ab)
        })), (0, da.f)(oR.i, (() => {
          var kk;
          if (!Fk.open) return;
          const Rk = Fk.pickedRef.current;
          null !== Rk ? tX.claim(performance.now()) && (Fk.close(), null === (kk = (0, iR.e)()) || void 0 === kk || kk.sendLine(Bk[Rk])) : Fk.close()
        })), (0, da.f)(oR.h, Fk.close), Fk.open ? (0, Pk.jsx)(tb, {
          className: "QuickChatWheel",
          slotCount: ab,
          picked: Fk.picked,
          slotLabel: kk => Bk[kk],
          renderSlot: kk => Bk[kk],
          centre: null !== Fk.picked ? Bk[Fk.picked] : kk("controller:quickChatPick")
        }) : null
      },
      bb = () => {
        const {
          t: kk
        } = (0, tk.x)(), Fk = Rb("actionButton", Fb.q), [Bk, Rk] = (0, rk.useState)([]);
        if ((0, da.f)(Fb.k, (kk => {
            Fk.open || (0, kb.e)() || (0, oR.b)() || "inGame" !== wk.c.get("gameState") || (0, FR.s)() || (Rk(kk), Fk.show())
          })), (0, da.f)(Fb.b, (kk => {
            Fk.open && Fk.aim(kk, Bk.length)
          })), (0, da.f)(Fb.g, (() => {
            if (!Fk.open) return;
            const kk = Fk.pickedRef.current;
            Fk.close(), null !== kk && dk.o.Hf(Fb.n, Bk[kk])
          })), (0, da.f)(Fb.d, Fk.close), !Fk.open) return null;
        const ak = null !== Fk.picked ? Bk[Fk.picked] : null;
        return (0, Pk.jsx)(tb, {
          className: "ActionWheel",
          slotCount: Bk.length,
          picked: Fk.picked,
          slotLabel: Fk => {
            const Rk = Bk[Fk];
            return "reload" === Rk.kind ? kk("controller:gameplayReload") : "customButton" === Rk.kind ? Rk.description || Rk.icon : "touchButton" === Rk.kind && "string" === typeof Rk.label ? Rk.label : ""
          },
          renderSlot: kk => (0, Pk.jsx)(ma, {
            action: Bk[kk]
          }),
          centre: ak ? (0, Pk.jsx)(ma, {
            action: ak
          }) : kk("controller:actionWheelPick")
        })
      };
    var wb = Bk(98);
    const db = () => ((0, rk.useEffect)((() => {
        var kk, Fk;
        const Bk = (0, mk.l)(document.getElementById("root")),
          Rk = (0, Ak.g)(),
          tk = (() => {
            const kk = [dk.o.subscribe(xt.g, (() => {
                It("blockBreak")
              })), dk.o.subscribe("damagedByOtherPlayer", (() => {
                It("damage")
              })), dk.o.subscribe("yourAttackHit", (kk => {
                let {
                  hitSelf: Fk
                } = kk;
                Fk || It("hit")
              }))],
              Fk = Xk.g.onActivePadChanged((kk => {
                kk && It("connect")
              }));
            return () => {
              for (const Fk of kk) dk.o.unsubscribe(Fk);
              Fk()
            }
          })(),
          ak = (() => {
            const kk = new ta({
              getVisitId: Ra.e,
              peekVisitId: Ra.peekVisitSessionId,
              readReportedVisitId: () => {
                const kk = Ba.j.getItem(aa);
                return "string" === typeof kk ? kk : null
              },
              writeReportedVisitId: kk => {
                Ba.j.setItem(aa, kk)
              },
              isPadActive: Ak.m,
              getPadFamily: () => {
                var kk, Fk;
                return null !== (kk = null === (Fk = Xk.g.getActivePad()) || void 0 === Fk ? void 0 : Fk.family) && void 0 !== kk ? kk : null
              },
              canReport: ka.k,
              getInputType: Fa.c,
              ve: ka.p
            });
            let Fk = 0,
              Bk = null;
            const Rk = tk => {
                null === Bk && ("notReady" !== kk.check(tk) || null !== Bk || Fk >= 20 || (Fk++, Bk = setTimeout((() => {
                  Bk = null, Rk(!1)
                }), 3e3)))
              },
              tk = dk.o.subscribe("appManagerUpdated|activeInputDevice", (() => {
                Rk(!0)
              })),
              ak = (0, Ra.m)((() => {
                Fk = 0, Rk(!0)
              }));
            return () => {
              dk.o.unsubscribe(tk), ak(), null !== Bk && clearTimeout(Bk)
            }
          })(),
          bk = Xk.g.onFrame(((kk, Fk) => {
            const Bk = (0, Ak.t)(kk);
            Vk.d.dispatch(kk, Fk, Bk)
          }));
        let sk = null !== (kk = null === (Fk = Xk.g.getActivePad()) || void 0 === Fk ? void 0 : Fk.family) && void 0 !== kk ? kk : null;
        const ek = Xk.g.onActivePadChanged((kk => {
            var Fk, Bk;
            (Vk.d.reset(), (0, Ak.z)(), dk.o.Hf(Xk.c, kk), (null !== (Fk = null === kk || void 0 === kk ? void 0 : kk.family) && void 0 !== Fk ? Fk : null) !== sk) && (sk = null !== (Bk = null === kk || void 0 === kk ? void 0 : kk.family) && void 0 !== Bk ? Bk : null, dk.o.Hf(Jk.c, (0, Jk.g)()));
            !kk && (0, Ak.m)() && (0, Ak.B)(wk.c.get("isTouchScreen") ? "touch" : "keyboardMouse")
          })),
          yk = () => {
            "visible" !== document.visibilityState && Vk.d.clear()
          },
          fk = () => {
            Vk.d.clear()
          };
        document.addEventListener("visibilitychange", yk), window.addEventListener("blur", fk), Xk.g.start(), (0, Qt.i)();
        const Wk = null;
        return () => {
          Bk(), Rk(), tk(), ak(), bk(), ek(), document.removeEventListener("visibilitychange", yk), window.removeEventListener("blur", fk), Xk.g.stop(), null === Wk || void 0 === Wk || Wk()
        }
      }), []), (0, Pk.jsxs)("div", {
        className: "ControllerRoot",
        children: [(0, Pk.jsx)(Oa, {}), (0, Pk.jsx)(ca, {}), (0, Pk.jsx)(Ga, {}), (0, Pk.jsx)(OX, {}), (0, Pk.jsx)(QX, {}), (0, Pk.jsx)(Xb, {}), (0, Pk.jsx)(bb, {})]
      })),
      sb = () => wb.featureFlags.useControllerSupport ? (0, Pk.jsx)(db, {}) : null;
    var Vb = Bk(7845),
      Jb = Bk(8503);
    const Ab = new Set(Qt.g),
      eb = kk => `${Jb.j}${(0,Jk.h)()}/${kk}`,
      yb = kk => {
        if (!(0, Jb.i)(kk)) return null;
        const [Fk, Bk] = kk.slice(Jb.j.length).split("/");
        return (0, Vb.h)(Fk) && Ab.has(Bk) ? (0, Qt.f)(Fk, Bk) : null
      };
    var fb = Bk(8509);
    const mb = () => {
        const {
          t: kk
        } = (0, tk.x)(), Fk = (0, Ak.C)(), {
          gameState: Bk,
          isUiHidden: Rk
        } = (0, wk.h)(["gameState", "isUiHidden"]), {
          hideButtonHints: ak,
          sneakMode: Xk
        } = (0, Jk.m)(), [bk, dk] = (0, rk.useState)(fb.b);
        return (0, da.f)(La.o, dk), Fk && !Rk && "inGame" === Bk && bk ? (0, Pk.jsxs)("div", {
          className: "PadSneakChip SmallTextBold",
          children: [!ak && (0, Pk.jsx)(ya, {
            glyph: (0, sk.f)("toggle" === Xk ? "sneak" : "sneakToggle")
          }), (0, Pk.jsx)("span", {
            children: kk("controller:gameplaySneaking")
          })]
        }) : null
      },
      Wb = 12,
      vb = kk => {
        let {
          trigger: Fk,
          className: Bk,
          children: Rk
        } = kk;
        const tk = (0, rk.useRef)(null);
        return (0, rk.useEffect)((() => {
          let kk = 0;
          const Bk = Hk(Fk, "y"),
            Rk = () => {
              kk = requestAnimationFrame(Rk);
              const ak = tk.current;
              if (!ak || null === Fk || void 0 === Fk || !Fk.isConnected) return;
              const {
                left: Xk,
                top: bk
              } = function(kk, Fk, Bk) {
                let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                const ak = kk.left + kk.width / 2,
                  Xk = Math.max(Wb, Bk.width - Wb - Fk.width),
                  bk = Math.min(Math.max(ak - Fk.width / 2, Wb), Xk),
                  wk = Bk.height - Rk;
                let dk = 0,
                  sk = wk;
                if (tk) {
                  const kk = Math.max(0, tk.top),
                    Rk = Math.min(wk, tk.bottom);
                  Rk - kk >= Math.max(Bk.height / 2, Fk.height + 24) && (dk = kk, sk = Rk)
                }
                const Vk = kk.top + kk.height / 2 < (dk + sk) / 2 ? sk - Wb - Fk.height : dk + Wb;
                return {
                  left: bk,
                  top: Math.max(Wb, Vk)
                }
              }(Fk.getBoundingClientRect(), {
                width: ak.offsetWidth,
                height: ak.offsetHeight
              }, {
                width: window.innerWidth,
                height: window.innerHeight
              }, parseFloat(document.documentElement.style.getPropertyValue(gX)) || 0, null !== Bk && void 0 !== Bk && Bk.isConnected ? Bk.getBoundingClientRect() : null);
              ak.style.transform = `translate3d(${Math.round(Xk)}px, ${Math.round(bk)}px, 0)`, ak.style.visibility = "visible"
            };
          return Rk(), () => {
            cancelAnimationFrame(kk)
          }
        }), [Fk]), (0, Pk.jsx)("div", {
          ref: tk,
          className: Bk,
          style: {
            position: "fixed",
            left: 0,
            top: 0,
            visibility: "hidden"
          },
          children: Rk
        })
      };
    var ib = Bk(1028),
      Yb = Bk(8513),
      ob = Bk(1389),
      Lb = Bk(8519),
      Ob = Bk(8521);
    const Eb = {
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
      Sb = () => {
        const {
          t: kk
        } = (0, tk.x)(), Fk = (0, Ak.C)(), Bk = (0, Yb.e)(), Rk = (0, Ma.j)("_tasks"), ak = (0, Ma.j)("_availableLeaderboards");
        if (!Fk) return null;
        const Xk = (kk => {
          let {
            hasShop: Fk,
            hasTasksOrLeaderboards: Bk,
            canInvite: Rk
          } = kk;
          const tk = [];
          return Fk && tk.push("shop"), Bk && tk.push("tasks"), Rk && tk.push("invite"), tk.push("leave"), tk
        })({
          hasShop: Bk,
          hasTasksOrLeaderboards: !(!Rk && !ak),
          canInvite: !!wb.featureFlags.canUseInviteLinks
        });
        return (0, Pk.jsx)("div", {
          className: "PadLobbyShortcuts",
          children: Xk.map((Fk => {
            const {
              icon: Bk,
              labelKey: Rk
            } = Eb[Fk], tk = "leave" === Fk ? ob.J : ob.g;
            return (0, Pk.jsx)(tk, {
              className: "PadLobbyShortcut",
              onClick: () => {
                (kk => {
                  switch (kk) {
                    case "shop":
                      return dk.o.Hf(Ob.j), void wk.c.set({
                        openEverythingMenuName: kR.p.SHOP
                      });
                    case "tasks":
                      return void dk.o.Hf("toggleMenu", "retentionFeatures");
                    case "invite":
                      return void dk.o.Hf("toggleMenu", "inviteLink");
                    case "leave":
                      (0, Lb.b)()
                  }
                })(Fk)
              },
              children: (0, Pk.jsxs)("div", {
                className: "PadLobbyShortcutInner",
                children: [(0, Pk.jsx)(ib.d, {
                  name: Bk
                }), (0, Pk.jsx)("span", {
                  children: kk(Rk)
                })]
              })
            }, Fk)
          }))
        })
      };
    var Nb = Bk(1881);
    const Hb = ek.y,
      ub = ["forward", "backward", "left", "right", "sprint"],
      Mb = kk => kk.ctrlKey || kk.altKey || "Alt" === kk.key || "ArrowUp" === kk.key || "ArrowDown" === kk.key || "Tab" === kk.code || "/" === kk.key || "Slash" === kk.code;
    class gb {
      constructor() {
        this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(ek.X).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
      }
      setArmed(kk) {
        this.armed = kk
      }
      blocksGameplay() {
        return this.armed || this.consumeNextFrame
      }
      onKeyDown(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !this.armed || Fk ? !kk.repeat && this.swallowedKeys.delete(kk.code) ? {
          swallow: !1,
          continues: !1
        } : {
          swallow: this.swallowedKeys.has(kk.code),
          continues: !1
        } : "Escape" === kk.key || kk.repeat && !this.swallowedKeys.has(kk.code) ? {
          swallow: !1,
          continues: !1
        } : Bk ? {
          swallow: !1,
          continues: !0
        } : (this.swallowedKeys.add(kk.code), {
          swallow: !0,
          continues: (0, Ak.j)(kk)
        })
      }
      onKeyUp(kk) {
        return this.swallowedKeys.delete(kk.code)
      }
      forgetKeys() {
        this.swallowedKeys.clear()
      }
      onPadFrame(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Rk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const tk = (0, ek.r)(kk.values, this.previousHeld),
          ak = null === Bk ? -1 : (0, ek.l)(Bk),
          Xk = ak >= 0 && tk[ak] && !this.previousHeld[ak],
          bk = tk.some(((kk, Fk) => kk && !this.previousHeld[Fk] && Fk !== ak)),
          wk = Math.hypot(kk.leftStick.x, kk.leftStick.y) >= Hb,
          dk = Math.hypot(kk.rightStick.x, kk.rightStick.y) >= Hb,
          sk = wk && !this.leftStickWasPressed || dk && !this.rightStickWasPressed;
        this.previousHeld = tk, this.leftStickWasPressed = wk, this.rightStickWasPressed = dk;
        let Vk = !1;
        this.consumeNextFrame && (this.consumeNextFrame = !1, Vk = !0);
        const Jk = !Fk && Xk && !Rk,
          Ak = !Jk && this.armed && !Fk && (bk || sk);
        return (Jk || Ak) && (this.consumeNextFrame = !0, this.consumeAfterContinue = Ak, Vk = !0), {
          continues: Ak,
          back: Jk,
          consumeHeld: Vk
        }
      }
      consumeLeavesMoveStick() {
        return this.consumeAfterContinue
      }
    }
    const Ub = new Set([...Nb.j, ...Nb.x]),
      cb = kk => ((kk, Fk, Bk) => {
        const Rk = Object.keys(Fk).filter((Rk => !Bk.has(Rk) && Fk[Rk].includes(kk)));
        return Rk.length > 0 && Rk.every((kk => ub.includes(kk)))
      })(kk, Nb.s, Ub),
      Gb = (kk, Fk, Bk) => {
        const Rk = new gb,
          tk = kk => {
            if (!kk.isTrusted) return;
            const {
              swallow: Bk,
              continues: tk
            } = Rk.onKeyDown(kk, !(0, Ak.I)(kk) || (0, Kt.h)() || (0, FR.s)(), cb(kk.code));
            Bk && (kk.stopImmediatePropagation(), Mb(kk) && kk.preventDefault()), tk && ((0, Ak.B)("keyboardMouse"), Fk())
          },
          ak = kk => {
            kk.isTrusted && Rk.onKeyUp(kk) && (kk.stopImmediatePropagation(), Mb(kk) && kk.preventDefault())
          },
          bk = () => {
            Rk.forgetKeys()
          };
        window.addEventListener("keydown", tk, !0), window.addEventListener("keyup", ak, !0), window.addEventListener("blur", bk);
        const wk = Xk.g.onFrame((kk => {
            const tk = Vk.d.getActiveConsumerName(),
              ak = Bk(),
              Xk = ak ? (0, sk.f)("menuBack") : null,
              bk = null !== tk && "gameplay" !== tk,
              {
                continues: wk,
                back: dk,
                consumeHeld: ek
              } = Rk.onPadFrame(kk, bk, Xk, (0, Ak.q)(kk));
            if (ek) {
              const kk = (0, Jk.g)().swapSticks ? "right" : "left";
              Vk.d.consumeAllHeld(Rk.consumeLeavesMoveStick() ? kk : null)
            }
            dk ? null === ak || void 0 === ak || ak() : wk && Fk()
          })),
          dk = (0, Kt.k)(`pressToContinue:${kk}`, (() => Rk.blocksGameplay()));
        return {
          setArmed: kk => {
            Rk.setArmed(kk)
          },
          dispose: () => {
            window.removeEventListener("keydown", tk, !0), window.removeEventListener("keyup", ak, !0), window.removeEventListener("blur", bk), wk(), dk()
          }
        }
      };
    var Tb = Bk(4688),
      rb = Bk(3227),
      Db = Bk(2926),
      zb = Bk(7847);
    const Pb = kk => {
        let {
          text: Fk
        } = kk;
        return (0, Pk.jsx)("div", {
          className: "ControllerSettingsHeading",
          children: Fk
        })
      },
      hb = kk => {
        let {
          label: Fk,
          hint: Bk,
          options: Rk,
          value: ak,
          onChange: Xk
        } = kk;
        const {
          t: bk
        } = (0, tk.x)();
        return (0, Pk.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, Pk.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: [(0, Pk.jsxs)("div", {
              className: "ControllerChoiceText",
              children: [(0, Pk.jsx)("div", {
                className: "SliderText",
                children: Fk
              }), Bk && (0, Pk.jsx)("div", {
                className: "ControllerSettingsHint",
                children: Bk
              })]
            }), (0, Pk.jsx)(Db.c, {
              options: Rk.map((kk => ({
                label: "label" in kk ? kk.label : bk(kk.labelKey),
                value: kk.value
              }))),
              value: ak,
              onChange: kk => {
                Xk(kk.value)
              }
            })]
          })
        })
      },
      qb = kk => {
        let {
          settingKey: Fk,
          label: Bk,
          range: Rk,
          format: tk
        } = kk;
        const ak = (0, Jk.m)();
        return (0, Pk.jsx)(Tb.l, {
          name: Bk,
          min: Rk.min,
          max: Rk.max,
          step: Rk.step,
          padStep: Rk.step,
          initValue: ak[Fk],
          format: tk,
          onChange: kk => {
            (0, Jk.l)({
              [Fk]: (0, zb.p)(kk, Rk)
            })
          }
        })
      };
    var Cb = Bk(8529),
      Zb = Bk(8538);
    const pb = kk => kk instanceof DOMException && ("SecurityError" === kk.name || "NotAllowedError" === kk.name),
      Kb = kk => {
        const [Fk] = [...kk.controllers].sort(((kk, Fk) => Zb.n[kk] - Zb.n[Fk]));
        return Zb.l[Fk]
      },
      xb = kk => {
        (0, Cb.e)().allowPhoneMotion().catch((Fk => {
          kk && pb(Fk) ? kk() : console.warn("Could not enable the motion sensor", Fk)
        }))
      },
      jb = {
        waiting: "controller:settingsGyroPhoneWaiting",
        noSensor: "controller:settingsGyroPhoneNoSensor",
        on: "controller:settingsGyroPhoneOn",
        denied: "controller:settingsGyroPhoneDenied"
      },
      lb = kk => {
        let {
          status: Fk
        } = kk;
        const {
          t: Bk
        } = (0, tk.x)(), [Rk, ak] = (0, rk.useState)(null), Xk = `${Fk.controllers.join(",")}|${Fk.phoneMotion}`;
        (0, rk.useEffect)((() => {
          ak(null)
        }), [Xk]);
        const bk = () => {
          (0, Cb.e)().connectController().then((kk => {
            ak(kk > 0 ? "openFailed" : null)
          })).catch((kk => {
            pb(kk) ? ak("needsClick") : console.warn("Could not connect motion controller", kk)
          }))
        };
        if (Fk.hidSupported) {
          let kk = Bk("controller:settingsGyroConnectHint");
          return "needsClick" === Rk ? kk = Bk("controller:settingsGyroConnectNeedsClick") : "openFailed" === Rk ? kk = Bk("controller:settingsGyroOpenFailed") : Fk.controllers.length > 0 && (kk = Bk("controller:settingsGyroConnected", {
            name: Kb(Fk)
          })), (0, Pk.jsx)("div", {
            className: "SettingBox ControllerChoiceSetting",
            children: (0, Pk.jsxs)("div", {
              className: "ControllerChoiceRow",
              children: [(0, Pk.jsx)("div", {
                className: "ControllerSettingsHint",
                children: kk
              }), (0, Pk.jsx)(ob.g, {
                onClick: bk,
                children: Bk("controller:settingsGyroConnect")
              })]
            })
          })
        }
        if ("needsPermission" === Fk.phoneMotion) return (0, Pk.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, Pk.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: ["needsTap" === Rk && (0, Pk.jsx)("div", {
              className: "ControllerSettingsHint",
              children: Bk("controller:settingsGyroAllowNeedsTap")
            }), (0, Pk.jsx)(ob.g, {
              onClick: () => {
                xb((() => {
                  ak("needsTap")
                }))
              },
              children: Bk("controller:settingsGyroAllowMotion")
            })]
          })
        });
        const wk = jb[Fk.phoneMotion];
        return wk ? (0, Pk.jsx)("div", {
          className: "ControllerSettingsHint",
          children: Bk(wk)
        }) : null
      },
      nb = () => {
        const {
          t: kk
        } = (0, tk.x)(), Fk = (0, Jk.m)(), Bk = (0, Cb.h)(), Rk = (0, Ak.E)(), ak = !Bk.hidSupported && Bk.phoneSupported && !Bk.padConnected, Xk = (Bk.hidSupported || Bk.phoneSupported) && !ak, bk = (0, sk.f)("pause");
        return (0, Pk.jsxs)(Pk.Fragment, {
          children: [(0, Pk.jsx)(Pb, {
            text: kk("controller:settingsGyro")
          }), ak && (0, Pk.jsx)("div", {
            className: "ControllerSettingsHint",
            children: kk("controller:settingsGyroPhoneNeedsController")
          }), !Xk && !ak && (0, Pk.jsx)("div", {
            className: "ControllerSettingsHint",
            children: kk(Bk.hidBlocked || Bk.phoneBlocked ? "controller:settingsGyroBlocked" : "controller:settingsGyroUnsupported")
          }), Xk && (0, Pk.jsx)(Tb.e, {
            label: kk(Bk.hidSupported ? "controller:settingsGyroToggle" : "controller:settingsGyroTogglePhone"),
            checked: Fk.gyroAiming,
            onClick: kk => {
              var Fk, Bk;
              (0, Jk.l)({
                gyroAiming: kk
              });
              const Rk = null === (Fk = null === (Bk = navigator.userActivation) || void 0 === Bk ? void 0 : Bk.isActive) || void 0 === Fk || Fk;
              if (!kk || !Rk) return;
              const tk = (0, Cb.e)(),
                ak = tk.getStatus();
              ak.hidSupported ? tk.connectControllerIfNoneGranted().catch((kk => {
                console.warn("Motion controller picker unavailable", kk)
              })) : "needsPermission" === ak.phoneMotion && xb()
            },
            circleInfoText: kk(Bk.hidSupported ? "controller:settingsGyroToggleInfo" : "controller:settingsGyroToggleInfoPhone")
          }), Xk && Bk.hidSupported && (0, Pk.jsx)("div", {
            className: "ControllerSettingsHint",
            children: kk("controller:settingsGyroSteamHint")
          }), Xk && Fk.gyroAiming && (0, Pk.jsxs)(Pk.Fragment, {
            children: [(0, Pk.jsx)(lb, {
              status: Bk
            }), (0, Pk.jsx)(qb, {
              settingKey: "gyroSensitivity",
              label: kk("controller:settingsGyroSensitivity"),
              range: zb.M,
              format: zb.C
            }), (0, Pk.jsx)(hb, {
              label: kk("controller:settingsGyroActivation"),
              hint: "aiming" === Fk.gyroActivation && (0, Pk.jsx)(rb.e, {
                text: kk("controller:settingsGyroAimingHint", {
                  button: rb.i
                }),
                glyph: (0, sk.f)("use")
              }),
              options: zb.I,
              value: Fk.gyroActivation,
              onChange: kk => {
                (0, Jk.l)({
                  gyroActivation: kk
                })
              }
            }), "button" === Fk.gyroActivation && (0, Pk.jsx)(hb, {
              label: kk("controller:settingsGyroButton"),
              hint: kk("controller:settingsGyroButtonHint"),
              options: zb.m.filter((kk => kk !== bk || kk === Fk.gyroButton)).map((kk => ({
                label: ea(Rk, kk),
                value: kk
              }))),
              value: Fk.gyroButton,
              onChange: kk => {
                (0, Jk.l)({
                  gyroButton: kk
                })
              }
            })]
          })]
        })
      };
    var Ib = Bk(1770);
    const Qb = () => {
      const {
        t: kk
      } = (0, tk.x)(), Fk = (0, Jk.m)(), Bk = (0, Ak.E)();
      return (0, Pk.jsxs)(Pk.Fragment, {
        children: [(0, Pk.jsx)(Pb, {
          text: kk("controller:settingsAccessibility")
        }), (0, Pk.jsx)(Tb.e, {
          label: kk("controller:settingsSwapConfirmBack"),
          checked: (0, sk.D)(Fk.swapConfirmBack, Bk),
          onClick: kk => {
            (0, Jk.l)({
              swapConfirmBack: kk === (0, sk.D)(null, Bk) ? null : kk
            }), Ib.h.showMessage({
              translationKey: "controller:settingsSwapToast"
            })
          },
          circleInfoText: kk("controller:settingsSwapConfirmBackInfo")
        }), (0, Pk.jsx)(hb, {
          label: kk("controller:settingsButtonRepeat"),
          hint: kk("controller:settingsButtonRepeatHint"),
          options: zb.k,
          value: Fk.buttonRepeat,
          onChange: kk => {
            (0, Jk.l)({
              buttonRepeat: kk
            })
          }
        }), (0, Pk.jsx)(hb, {
          label: kk("controller:settingsTapHoldTime"),
          hint: kk("controller:settingsTapHoldTimeHint"),
          options: zb.hb,
          value: Fk.tapHoldTime,
          onChange: kk => {
            (0, Jk.l)({
              tapHoldTime: kk
            })
          }
        }), (0, Pk.jsx)(hb, {
          label: kk("controller:settingsEmoteButton"),
          hint: kk("wheel" === Fk.emoteButton ? "controller:settingsEmoteButtonWheelHint" : "controller:settingsEmoteButtonTapHoldHint"),
          options: zb.v,
          value: Fk.emoteButton,
          onChange: kk => {
            (0, Jk.l)({
              emoteButton: kk
            })
          }
        }), (0, Pk.jsx)(hb, {
          label: kk("controller:settingsAttackMode"),
          hint: kk("toggle" === Fk.attackMode ? "controller:settingsAttackToggleHint" : "controller:settingsAttackHoldHint"),
          options: zb.j,
          value: Fk.attackMode,
          onChange: kk => {
            (0, Jk.l)({
              attackMode: kk
            })
          }
        }), (0, Pk.jsx)(Tb.e, {
          label: kk("controller:settingsLargePointer"),
          checked: Fk.largePointer,
          onClick: kk => {
            (0, Jk.l)({
              largePointer: kk
            })
          },
          circleInfoText: kk("controller:settingsLargePointerInfo")
        })]
      })
    };
    var kw = Bk(8540);
    const Fw = new class {
        constructor(kk) {
          this.router = kk, this.current = null
        }
        claim(kk, Fk) {
          const Bk = this.current;
          Bk && (this.current = null, Bk.release(), Bk.onTakenOver());
          const Rk = this.router.register({
              ...kk,
              name: "capture"
            }),
            tk = {
              release: Rk,
              onTakenOver: Fk
            };
          return this.current = tk, () => {
            this.current === tk && (this.current = null), Rk()
          }
        }
      }(Vk.d),
      Bw = kk => {
        (0, rk.useEffect)((() => {
          if (!kk) return;
          const Fk = kk();
          let Bk = !1;
          const Rk = () => {
              Bk || (Bk = !0, Fk.onEnd())
            },
            tk = Fw.claim({
              isActive: () => !Bk,
              onFrame: kk => {
                Fk.onFrame(kk, Rk)
              }
            }, Rk),
            ak = void 0 === Fk.timeoutMs ? void 0 : window.setTimeout(Rk, Fk.timeoutMs),
            Xk = kk => {
              "Escape" === kk.key && (kk.preventDefault(), kk.stopPropagation(), Rk())
            };
          return window.addEventListener("keydown", Xk, !0), () => {
            Bk = !0, tk(), window.clearTimeout(ak), window.removeEventListener("keydown", Xk, !0)
          }
        }), [kk])
      },
      Rw = kk => {
        let {
          row: Fk,
          capturing: Bk,
          onCapture: Rk,
          holdFillRef: ak,
          onRebind: Xk,
          swapped: bk
        } = kk;
        const {
          t: wk
        } = (0, tk.x)();
        if ("fixed" === Fk.kind) return (0, Pk.jsx)("div", {
          className: "ControlRow PadControlRow PadControlRowFixed",
          children: (0, Pk.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, Pk.jsx)("div", {
              className: "ControlName",
              children: wk(Fk.labelKey)
            }), (0, Pk.jsx)("div", {
              className: "ControlBindingsContainer",
              children: (0, Pk.jsx)("div", {
                className: "ControlBindingsList",
                children: (0, Pk.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  children: (0, Pk.jsx)(ya, {
                    glyph: "move" === Fk.stick ? (0, sk.o)() : (0, sk.l)()
                  })
                })
              })
            })]
          })
        });
        const {
          action: dk
        } = Fk, Vk = (0, sk.f)(dk), Jk = (0, sk.g)(dk), Ak = Vk !== Jk && (0, sk.d)(dk, Jk);
        return (0, Pk.jsxs)("div", {
          className: zk()("ControlRow PadControlRow", {
            Capturing: Bk
          }),
          children: [(0, Pk.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, Pk.jsx)("div", {
              className: "ControlName",
              children: wk(zb.h[dk])
            }), (0, Pk.jsxs)("div", {
              className: "ControlBindingsContainer",
              children: [!Bk && (0, Pk.jsxs)("div", {
                className: "ControlBindingsList",
                children: [(0, Pk.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Rk(dk)
                  },
                  children: (0, Pk.jsx)(ya, {
                    glyph: Vk
                  })
                }), Ak && (0, Pk.jsx)("div", {
                  className: "ControlBinding PadBindingReset",
                  title: wk("controller:settingsReset"),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Xk(dk, Jk)
                  },
                  children: (0, Pk.jsx)(ib.d, {
                    name: "arrows-rotate"
                  })
                })]
              }), Bk && (0, Pk.jsxs)("div", {
                className: "ControlBindingAddInput",
                children: [(0, Pk.jsxs)("div", {
                  className: "PadCaptureBox",
                  children: [(0, Pk.jsx)("span", {
                    children: wk("controller:settingsCapturePrompt")
                  }), (0, Pk.jsx)("div", {
                    ref: ak,
                    className: "PadCaptureHoldFill"
                  })]
                }), (0, Pk.jsx)("div", {
                  className: "ControlBindingAddCancel",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Rk(null)
                  },
                  children: "\xd7"
                })]
              }), Bk && (0, Pk.jsx)("div", {
                className: "PadCaptureHint",
                children: (0, Pk.jsx)(rb.e, {
                  text: wk((0, sk.d)(dk, (0, sk.f)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
                    button: rb.i
                  }),
                  glyph: (0, sk.f)("menuBack")
                })
              })]
            })]
          }), bk.map((kk => (0, Pk.jsx)("div", {
            className: "ControlRowWarning PadSwapNotice",
            children: (0, Pk.jsx)(rb.e, {
              text: wk("controller:settingsSwapNotice", {
                action: wk(zb.h[kk]),
                button: rb.i
              }),
              glyph: (0, sk.f)(kk)
            })
          }, kk))), Bk && (0, Pk.jsx)("div", {
            className: "PadCaptureTimer",
            style: {
              animationDuration: `${zb.o}ms`
            }
          })]
        })
      },
      tw = [],
      aw = kk => {
        let {
          layoutSetting: Fk
        } = kk;
        const {
          t: Bk
        } = (0, tk.x)(), Rk = (0, Jk.m)();
        (0, Ak.E)();
        const ak = (0, rk.useRef)(null),
          [Xk, bk] = (0, rk.useState)(null),
          wk = (0, rk.useCallback)(((kk, Fk) => {
            const Bk = (0, Jk.g)().bindings;
            (0, sk.x)(kk, Fk);
            const Rk = (0, sk.r)(Bk, kk);
            bk(Rk.length > 0 ? {
              action: kk,
              swapped: Rk
            } : null)
          }), []),
          [dk, yk] = ((kk, Fk) => {
            const [Bk, Rk] = (0, rk.useState)(null), tk = (0, rk.useMemo)((() => Bk ? () => {
              const tk = (0, sk.f)("menuBack"),
                ak = new zb.b(tk, (0, sk.f)("menuConfirm"), (kk => (0, sk.d)(Bk, kk)));
              return {
                onFrame: (Rk, Xk) => {
                  var bk;
                  const wk = Rk.frame.timestampMs,
                    dk = ak.update({
                      ...Rk,
                      isDown: kk => (0, ek.L)(Rk.frame.values, kk)
                    }, wk);
                  null === (bk = kk.current) || void 0 === bk || bk.style.setProperty("width", 100 * ak.getBindHoldProgress(wk) + "%"), dk && ("bind" === dk.kind ? (Vk.d.consumeButton(dk.button), Fk(Bk, dk.button)) : Vk.d.consumeButton(tk), Xk())
                },
                onEnd: () => {
                  Rk(null)
                },
                timeoutMs: zb.o
              }
            } : null), [Bk, kk, Fk]);
            return Bw(tk), [Bk, Rk]
          })(ak, wk),
          fk = kk => {
            kk && bk(null), yk(kk)
          };
        (0, rk.useEffect)((() => {
          if (!Xk) return;
          const kk = window.setTimeout((() => {
            bk(null)
          }), zb.gb);
          return () => {
            window.clearTimeout(kk)
          }
        }), [Xk]);
        const mk = !Rk.swapSticks && 0 === Object.keys(Rk.bindings).length;
        return (0, Pk.jsxs)("div", {
          className: "ControlsContainer PadControlsContainer",
          children: [(0, Pk.jsx)("div", {
            className: "SliderText",
            children: Bk("controller:settingsRemap")
          }), (0, Pk.jsx)("div", {
            className: "ControllerSettingsHint",
            children: Bk("controller:settingsRemapHint")
          }), (0, Pk.jsx)(ob.J, {
            className: "ResetBindingsButton PadResetAllButton",
            disabled: mk,
            onClick: () => {
              fk(null), bk(null), (0, sk.z)()
            },
            children: Bk("controller:settingsResetAll")
          }), Fk, zb.$.map(((kk, Fk) => (0, Pk.jsx)(kw.b, {
            title: Bk(kk.titleKey),
            defaultOpen: 0 === Fk,
            children: kk.rows.map((kk => (0, Pk.jsx)(Rw, {
              row: kk,
              capturing: "action" === kk.kind && kk.action === dk,
              onCapture: fk,
              holdFillRef: ak,
              onRebind: wk,
              swapped: "action" === kk.kind && (null === Xk || void 0 === Xk ? void 0 : Xk.action) === kk.action ? Xk.swapped : tw
            }, "action" === kk.kind ? kk.action : kk.labelKey)))
          }, kk.titleKey)))]
        })
      },
      Xw = kk => {
        let {
          deadzone: Fk,
          dotRef: Bk,
          labelKey: Rk
        } = kk;
        const {
          t: ak
        } = (0, tk.x)();
        return (0, Pk.jsxs)("div", {
          className: "ControllerTesterStick",
          children: [(0, Pk.jsxs)("div", {
            className: "ControllerTesterStickCircle",
            children: [(0, Pk.jsx)("div", {
              className: "ControllerTesterDeadzone",
              style: {
                width: 100 * Fk + "%",
                height: 100 * Fk + "%"
              }
            }), (0, Pk.jsx)("div", {
              ref: Bk,
              className: "ControllerTesterDot"
            })]
          }), (0, Pk.jsx)("div", {
            className: "ControllerTesterStickLabel",
            children: ak(Rk)
          })]
        })
      },
      bw = (kk, Fk, Bk, Rk) => {
        var tk;
        kk && (kk.style.left = 50 + 50 * Math.max(-1, Math.min(1, Fk.x)) + "%", kk.style.top = 50 + 50 * Math.max(-1, Math.min(1, Fk.y)) + "%", null === (tk = kk.parentElement) || void 0 === tk || tk.classList.toggle("Active", Rk || Math.hypot(Fk.x, Fk.y) > Bk))
      },
      ww = kk => {
        const Fk = {
            deadzone: kk.moveDeadzone,
            labelKey: "controller:settingsActionMove"
          },
          Bk = {
            deadzone: kk.lookDeadzone,
            labelKey: "controller:settingsActionLook"
          };
        return kk.swapSticks ? {
          left: Bk,
          right: Fk
        } : {
          left: Fk,
          right: Bk
        }
      },
      dw = () => {
        const {
          t: kk
        } = (0, tk.x)(), Fk = (() => {
          const [kk, Fk] = (0, rk.useState)((() => Xk.g.getActivePad()));
          return (0, da.f)(Xk.c, (() => {
            Fk(Xk.g.getActivePad())
          })), kk
        })(), Bk = ww((0, Jk.m)()), Rk = (0, rk.useRef)(null), ak = (0, rk.useRef)(null), bk = (0, rk.useRef)([]), wk = (0, rk.useRef)(null), dk = (0, rk.useRef)(null), [Ak, yk] = (kk => {
          const [Fk, Bk] = (0, rk.useState)(!1), Rk = (0, rk.useMemo)((() => Fk ? () => {
            const Fk = (0, sk.f)("menuBack"),
              Rk = new zb.d;
            return {
              onFrame: (Bk, tk) => {
                var ak;
                const Xk = Rk.update({
                  pressed: Bk.wasPressed(Fk),
                  Hb: Bk.isHeld(Fk)
                }, Bk.frame.timestampMs);
                null === (ak = kk.current) || void 0 === ak || ak.style.setProperty("width", 100 * Xk + "%"), Xk >= 1 && (Vk.d.consumeButton(Fk), tk())
              },
              onEnd: () => {
                Bk(!1)
              }
            }
          } : null), [Fk, kk]);
          return Bw(Rk), [Fk, Bk]
        })(ak);
        (0, rk.useEffect)((() => {
          const kk = kk => {
            for (const Bk of ek.Z) {
              const Fk = (0, ek.l)(Bk),
                Rk = bk.current[Fk];
              if (!Rk) continue;
              const tk = kk.values[Fk];
              Rk.classList.toggle("Pressed", tk >= ek.y), (0, ek.N)(Fk) && Rk.style.setProperty("--trigger-fill", `${Math.round(100*tk)}%`)
            }
            const Fk = ww((0, Jk.g)());
            bw(wk.current, kk.leftStick, Fk.left.deadzone, kk.values[(0, ek.l)("LS")] >= ek.y), bw(dk.current, kk.rightStick, Fk.right.deadzone, kk.values[(0, ek.l)("RS")] >= ek.y)
          };
          return Fk || kk((0, ek.w)()), Xk.g.onFrame(kk)
        }), [Fk]), (0, rk.useEffect)((() => {
          Fk || yk(!1)
        }), [Fk, yk]), (0, rk.useEffect)((() => {
          var kk;
          Ak && (null === (kk = Rk.current) || void 0 === kk || kk.scrollIntoView({
            block: "nearest"
          }))
        }), [Ak]);
        const fk = zb.W.find((kk => kk.value === (null === Fk || void 0 === Fk ? void 0 : Fk.family)));
        return (0, Pk.jsxs)("div", {
          ref: Rk,
          className: zk()("SettingBox ControllerTester", {
            Testing: Ak
          }),
          children: [(0, Pk.jsxs)("div", {
            className: "ControllerTesterHeader",
            children: [(0, Pk.jsxs)("div", {
              className: "ControllerTesterInfo",
              children: [Fk && (0, Pk.jsx)("div", {
                children: kk("controller:settingsTesterFamily", {
                  family: fk ? kk(fk.labelKey) : Fk.family
                })
              }), Fk && (0, Pk.jsx)("div", {
                className: "ControllerTesterPadId",
                children: Fk.id
              }), !Fk && (0, Pk.jsx)("div", {
                children: kk("controller:settingsTesterNoPad")
              })]
            }), (Fk || Ak) && (0, Pk.jsx)(ob.g, {
              className: "ControllerTesterToggle",
              onClick: () => {
                yk(!Ak)
              },
              children: kk(Ak ? "controller:settingsTesterStop" : "controller:settingsTesterStart")
            })]
          }), Fk && !Ak && (0, Pk.jsx)("div", {
            className: "ControllerSettingsHint",
            children: kk("controller:settingsTesterHint")
          }), Ak && (0, Pk.jsxs)("div", {
            className: "ControllerTesterBanner",
            children: [(0, Pk.jsx)(rb.e, {
              text: kk("controller:settingsTesterTesting", {
                button: rb.i
              }),
              glyph: (0, sk.f)("menuBack")
            }), (0, Pk.jsx)("div", {
              ref: ak,
              className: "ControllerTesterExitFill"
            })]
          }), (0, Pk.jsxs)("div", {
            className: "ControllerTesterBody",
            children: [(0, Pk.jsx)(Xw, {
              deadzone: Bk.left.deadzone,
              dotRef: wk,
              labelKey: Bk.left.labelKey
            }), (0, Pk.jsx)("div", {
              className: "ControllerTesterButtons",
              children: ek.Z.map((kk => {
                const Bk = (0, ek.l)(kk);
                return (0, Pk.jsx)("div", {
                  ref: kk => {
                    bk.current[Bk] = kk
                  },
                  className: (0, ek.N)(Bk) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
                  children: (0, Pk.jsx)(ya, {
                    glyph: kk,
                    family: null === Fk || void 0 === Fk ? void 0 : Fk.family
                  })
                }, kk)
              }))
            }), (0, Pk.jsx)(Xw, {
              deadzone: Bk.right.deadzone,
              dotRef: dk,
              labelKey: Bk.right.labelKey
            })]
          })]
        })
      },
      sw = (0, rk.memo)((function() {
        const {
          t: kk
        } = (0, tk.x)(), Fk = (0, Jk.m)(), [Bk, Rk] = (0, rk.useState)(!1);
        return (0, rk.useEffect)((() => {
          if (!Bk) return;
          const kk = window.setTimeout((() => {
            Rk(!1)
          }), zb.gb);
          return () => {
            window.clearTimeout(kk)
          }
        }), [Bk]), (0, Pk.jsxs)("div", {
          className: "SettingsMenuRightInner ControllerCategory",
          children: [(0, Pk.jsx)(Pb, {
            text: kk("controller:settingsLook")
          }), (0, Pk.jsx)(qb, {
            settingKey: "lookSensitivityX",
            label: kk("controller:settingsLookSensitivityX"),
            range: zb.ab,
            format: zb.G
          }), (0, Pk.jsx)(qb, {
            settingKey: "lookSensitivityY",
            label: kk("controller:settingsLookSensitivityY"),
            range: zb.ab,
            format: zb.G
          }), (0, Pk.jsx)(qb, {
            settingKey: "aimLookSensitivity",
            label: kk("controller:settingsAimLookSensitivity"),
            range: zb.i,
            format: zb.G
          }), (0, Pk.jsx)(hb, {
            label: kk("controller:settingsLookCurve"),
            hint: kk("controller:settingsLookCurveHint"),
            options: zb.T,
            value: Fk.lookCurve,
            onChange: kk => {
              (0, Jk.l)({
                lookCurve: kk
              })
            }
          }), (0, Pk.jsx)(Tb.e, {
            label: kk("controller:settingsInvertLookX"),
            checked: Fk.invertLookX,
            onClick: kk => {
              (0, Jk.l)({
                invertLookX: kk
              })
            }
          }), (0, Pk.jsx)(Tb.e, {
            label: kk("controller:settingsInvertLookY"),
            checked: Fk.invertLookY,
            onClick: kk => {
              (0, Jk.l)({
                invertLookY: kk
              })
            }
          }), (0, Pk.jsx)(qb, {
            settingKey: "lookDeadzone",
            label: kk("controller:settingsLookDeadzone"),
            range: zb.t,
            format: zb.y
          }), (0, Pk.jsx)(nb, {}), (0, Pk.jsx)(Pb, {
            text: kk("controller:settingsMovement")
          }), (0, Pk.jsx)(qb, {
            settingKey: "moveDeadzone",
            label: kk("controller:settingsMoveDeadzone"),
            range: zb.t,
            format: zb.y
          }), (0, Pk.jsx)(Tb.e, {
            label: kk("controller:settingsAutoSprint"),
            checked: Fk.autoSprint,
            onClick: kk => {
              (0, Jk.l)({
                autoSprint: kk
              })
            },
            circleInfoText: kk("controller:settingsAutoSprintInfo")
          }), (0, Pk.jsx)(hb, {
            label: kk("controller:settingsSneak"),
            options: zb.db,
            value: Fk.sneakMode,
            onChange: kk => {
              (0, Jk.l)({
                sneakMode: kk
              })
            }
          }), (0, Pk.jsx)(Pb, {
            text: kk("controller:settingsButtons")
          }), (0, Pk.jsx)(hb, {
            label: kk("controller:settingsPromptFamily"),
            options: zb.W,
            value: Fk.promptFamily,
            onChange: kk => {
              (0, Jk.l)({
                promptFamily: kk
              })
            }
          }), (0, Pk.jsx)(Tb.e, {
            label: kk("controller:settingsHideButtonHints"),
            checked: Fk.hideButtonHints,
            onClick: kk => {
              (0, Jk.l)({
                hideButtonHints: kk
              })
            }
          }), (0, Pk.jsx)(Tb.e, {
            label: kk("controller:settingsVibration"),
            checked: Fk.vibration,
            onClick: kk => {
              (0, Jk.l)({
                vibration: kk
              }), kk && It("preview")
            }
          }), (0, Pk.jsx)(qb, {
            settingKey: "cursorSpeed",
            label: kk("controller:settingsCursorSpeed"),
            range: zb.r,
            format: zb.G
          }), (0, Pk.jsx)(Tb.e, {
            label: kk("controller:settingsCursorMagnetism"),
            checked: Fk.cursorMagnetism,
            onClick: kk => {
              (0, Jk.l)({
                cursorMagnetism: kk
              })
            }
          }), (0, Pk.jsx)(Tb.e, {
            label: kk("controller:settingsMenuBackToCategories"),
            checked: Fk.menuBackToCategories,
            onClick: kk => {
              (0, Jk.l)({
                menuBackToCategories: kk
              })
            }
          }), (0, Pk.jsx)(aw, {
            layoutSetting: (0, Pk.jsxs)(Pk.Fragment, {
              children: [sk.e.map((Bk => (0, Pk.jsx)(Tb.e, {
                label: kk(zb.R[Bk]),
                checked: (0, sk.u)(Bk, Fk),
                onClick: kk => {
                  Rk(!(0, sk.E)(Bk, kk))
                }
              }, Bk))), Bk && (0, Pk.jsx)("div", {
                className: "PadLayoutRefusedNotice",
                role: "status",
                children: kk("controller:settingsLayoutRefusedToast")
              })]
            })
          }), (0, Pk.jsx)(Qb, {}), (0, Pk.jsx)(Pb, {
            text: kk("controller:settingsAlternatives")
          }), (0, Pk.jsx)("div", {
            className: "ControllerSettingsHint",
            children: kk("controller:settingsAlternativesHint")
          }), (0, Pk.jsx)(hb, {
            label: kk("controller:settingsMenuNavigation"),
            hint: kk("controller:settingsMenuNavigationHint"),
            options: zb.U,
            value: Fk.menuNavigation,
            onChange: kk => {
              (0, Jk.l)({
                menuNavigation: kk
              })
            }
          }), (0, Pk.jsx)(hb, {
            label: kk("controller:settingsInventoryNavigation"),
            hint: kk("controller:settingsInventoryNavigationHint"),
            options: zb.Q,
            value: Fk.inventoryNavigation,
            onChange: kk => {
              (0, Jk.l)({
                inventoryNavigation: kk
              })
            }
          }), (0, Pk.jsx)(hb, {
            label: kk("controller:settingsQuickChat"),
            hint: kk("controller:settingsQuickChatHint"),
            options: zb.Z,
            value: Fk.quickChat,
            onChange: kk => {
              (0, Jk.l)({
                quickChat: kk
              })
            }
          }), (0, Pk.jsx)(hb, {
            label: kk("controller:settingsLeaderboardButton"),
            hint: kk("controller:settingsLeaderboardButtonHint"),
            options: zb.S,
            value: Fk.leaderboardButton,
            onChange: kk => {
              (0, Jk.l)({
                leaderboardButton: kk
              })
            }
          }), (0, Pk.jsx)(Pb, {
            text: kk("controller:settingsTester")
          }), (0, Pk.jsx)(dw, {})]
        })
      }));
    (0, tk.e)(Rk);
    for (const yw of (0, ak.o)()) yw.connected ? Xk.g.handleConnectionEvent(yw) : Xk.g.handleDisconnectionEvent(yw);
    const Vw = () => null !== Xk.g.getActivePad(),
      Jw = () => nB.getState(),
      Aw = () => nB.isSteppingSlots(),
      ew = (kk, Fk) => {
        const Bk = pt.getFocused();
        pt.isActive() && Bk && kk.contains(Bk) && pt.setFocus(Fk, {
          scroll: !1
        })
      }
  },
  7819: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => wk,
      g: () => dk
    });
    var Rk = Bk(1374),
      tk = Bk(1367);
    const ak = {
        "054c": "playstation",
        "057e": "nintendo"
      },
      Xk = "28de",
      bk = new Set(["1205"]),
      wk = (kk, Fk) => {
        const Bk = (0, Rk.b)(kk);
        if ((null === Bk || void 0 === Bk ? void 0 : Bk.vendor) === Xk) return bk.has(Bk.product) ? "steamdeck" : "xbox";
        if (Bk && ak[Bk.vendor]) return ak[Bk.vendor];
        if ((0, tk.b)(kk)) return "nintendo";
        const wk = `${kk} ${null!==Fk&&void 0!==Fk?Fk:""}`.toLowerCase();
        return /dualsense|dualshock|playstation|sony/.test(wk) ? "playstation" : /nintendo|switch|joy-con|pro controller/.test(wk) ? "nintendo" : /steam deck/.test(wk) ? "steamdeck" : "xbox"
      },
      dk = kk => {
        var Fk;
        return (null === (Fk = (0, Rk.b)(kk)) || void 0 === Fk ? void 0 : Fk.vendor) === Xk
      }
  },
  7861: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => dk,
      h: () => bk
    });
    var Rk = Bk(7815);
    const tk = ["capture", "keyboard", "wheel", "inventory", "cursor", "focus", "gameplay"],
      ak = new Set(["capture", "gameplay"]),
      Xk = ["Up", "Down", "Left", "Right"],
      bk = kk => Xk.includes(kk),
      wk = .25;
    const dk = new class {
      constructor() {
        this.consumers = new Map, this.activeName = null, this.Hb = new Array(Rk.X).fill(!1), this.previousHeld = new Array(Rk.X).fill(!1), this.consumedButtons = new Array(Rk.X).fill(!1), this.suppressedReleases = new Array(Rk.X).fill(!1), this.wakeOwned = new Array(Rk.X).fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.peek = null, this.lastFrame = (0, Rk.w)()
      }
      register(kk) {
        return this.consumers.has(kk.name) && console.warn(`Controller consumer "${kk.name}" registered twice; the newer one replaces it.`), this.consumers.set(kk.name, kk), () => {
          var Fk;
          this.consumers.get(kk.name) === kk && (this.activeName === kk.name ? (this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()) : (null === (Fk = this.peek) || void 0 === Fk ? void 0 : Fk.over) === kk.name && (this.peek = null), this.consumers.delete(kk.name))
        }
      }
      getActiveConsumerName() {
        return this.activeName
      }
      isButtonHeld(kk) {
        return this.Hb[(0, Rk.l)(kk)]
      }
      getLastFrame() {
        return this.lastFrame
      }
      clear() {
        this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()
      }
      reset() {
        this.deactivateCurrent(), this.activeName = null, this.Hb = new Array(Rk.X).fill(!1), this.previousHeld = new Array(Rk.X).fill(!1), this.consumedButtons.fill(!1), this.suppressedReleases.fill(!1), this.wakeOwned.fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.lastFrame = (0, Rk.w)()
      }
      dispatch(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.lastFrame = kk, this.previousHeld = this.Hb, this.Hb = (0, Rk.r)(kk.values, this.previousHeld);
        for (let ak = 0; ak < Rk.X; ak++) this.suppressedReleases[ak] = !this.Hb[ak] && this.consumedButtons[ak], this.Hb[ak] || (this.consumedButtons[ak] = !1), this.wakeOwned[ak] && (this.Hb[ak] ? (this.consumedButtons[ak] = !0, this.wakeOwned[ak] = !1) : kk.values[ak] < Rk.T && (this.wakeOwned[ak] = !1));
        Math.hypot(kk.leftStick.x, kk.leftStick.y) < wk && (this.leftStickConsumed = !1), Math.hypot(kk.rightStick.x, kk.rightStick.y) < wk && (this.rightStickConsumed = !1);
        const tk = this.pickActive();
        if ((null === tk || void 0 === tk ? void 0 : tk.name) !== this.activeName) {
          var Xk, bk, dk, sk, Vk, Jk;
          const kk = this.activeName,
            Fk = {
              left: !this.leftStickConsumed,
              right: !this.rightStickConsumed
            },
            Bk = null !== (Xk = null === tk || void 0 === tk || null === (bk = tk.peek) || void 0 === bk ? void 0 : bk.call(tk)) && void 0 !== Xk ? Xk : null,
            ak = null === kk && !!Bk && !(null === (dk = this.consumers.get(Bk.over)) || void 0 === dk || !dk.onPeekFrame),
            wk = Bk && (Bk.over === kk || ak) ? Bk : null,
            Ak = null !== this.peek && this.peek.over === (null === tk || void 0 === tk ? void 0 : tk.name) ? this.peek : null;
          this.deactivateCurrent(null !== wk, null !== Ak), this.activeName = null !== (sk = null === tk || void 0 === tk ? void 0 : tk.name) && void 0 !== sk ? sk : null, null === kk || this.handOffPending || this.consumeAllHeld();
          const ek = null === (Vk = null !== wk && void 0 !== wk ? wk : Ak) || void 0 === Vk ? void 0 : Vk.stick;
          "left" === ek && Fk.left ? this.leftStickConsumed = !1 : "right" === ek && Fk.right && (this.rightStickConsumed = !1), this.peek = wk, tk || null === kk ? tk && (null === (Jk = this.idleResume) || void 0 === Jk ? void 0 : Jk.name) === tk.name && (this.idleResume.left && (this.leftStickConsumed = !1), this.idleResume.right && (this.rightStickConsumed = !1)) : this.idleResume = {
            name: kk,
            left: Fk.left && this.leftStickConsumed,
            right: Fk.right && this.rightStickConsumed
          }, tk && (this.idleResume = null);
          for (let tk = 0; tk < Rk.X; tk++) this.previousHeld[tk] && !this.Hb[tk] && (this.suppressedReleases[tk] = !0)
        }
        var Ak, ek;
        (this.handOffPending = !1, tk) && (Bk && !ak.has(tk.name) && this.consumeWakePress(tk), tk.onFrame(this.buildInput(kk, Fk, Bk)), this.peek && (null === (Ak = this.consumers.get(this.peek.over)) || void 0 === Ak || null === (ek = Ak.onPeekFrame) || void 0 === ek || ek.call(Ak, this.buildInput(kk, Fk, !1, this.peek.stick))))
      }
      consumeWakePress(kk) {
        for (let tk = 0; tk < Rk.X; tk++) {
          var Fk, Bk;
          const ak = Rk.Z[tk];
          (null !== (Fk = null === (Bk = kk.wakePressActs) || void 0 === Bk ? void 0 : Bk.call(kk, ak)) && void 0 !== Fk ? Fk : Xk.includes(ak)) || (this.Hb[tk] ? this.consumedButtons[tk] = !0 : this.lastFrame.values[tk] >= Rk.Q && (this.wakeOwned[tk] = !0))
        }
      }
      pickActive() {
        for (const kk of tk) {
          const Fk = this.consumers.get(kk);
          if (Fk && Fk.isActive()) return Fk
        }
        return null
      }
      deactivateCurrent() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var Bk, Rk, tk, ak;
        this.activeName && (null === (Bk = this.consumers.get(this.activeName)) || void 0 === Bk || null === (Rk = Bk.onDeactivate) || void 0 === Rk || Rk.call(Bk, kk));
        this.peek && !Fk && (null === (tk = this.consumers.get(this.peek.over)) || void 0 === tk || null === (ak = tk.onDeactivate) || void 0 === ak || ak.call(tk, !1));
        this.peek = null
      }
      consumeAllHeld() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.idleResume = null;
        for (let tk = 0; tk < Rk.X; tk++) this.Hb[tk] && (this.consumedButtons[tk] = !0);
        const {
          leftStick: Fk,
          rightStick: Bk
        } = this.lastFrame;
        this.leftStickConsumed = "left" !== kk && (this.leftStickConsumed || Math.hypot(Fk.x, Fk.y) >= wk), this.rightStickConsumed = "right" !== kk && (this.rightStickConsumed || Math.hypot(Bk.x, Bk.y) >= wk)
      }
      handOffHeldInput() {
        this.handOffPending = !0
      }
      consumeButton(kk) {
        const Fk = (0, Rk.l)(kk);
        this.Hb[Fk] && (this.consumedButtons[Fk] = !0)
      }
      buildInput(kk, Fk, Bk, tk) {
        const ak = this.Hb,
          Xk = this.previousHeld,
          bk = tk ? new Array(Rk.X).fill(!0) : [...this.consumedButtons],
          wk = tk ? bk : [...this.suppressedReleases],
          dk = !this.leftStickConsumed && (!tk || "left" === tk),
          sk = !this.rightStickConsumed && (!tk || "right" === tk);
        return {
          frame: kk,
          dtMs: Fk,
          isHeld: kk => {
            const Fk = (0, Rk.l)(kk);
            return ak[Fk] && !bk[Fk]
          },
          wasPressed: kk => {
            const Fk = (0, Rk.l)(kk);
            return ak[Fk] && !Xk[Fk] && !bk[Fk]
          },
          wasReleased: kk => {
            const Fk = (0, Rk.l)(kk);
            return !ak[Fk] && Xk[Fk] && !wk[Fk]
          },
          value: Fk => {
            const Bk = (0, Rk.l)(Fk);
            return bk[Bk] ? 0 : kk.values[Bk]
          },
          leftStick: dk ? kk.leftStick : {
            x: 0,
            y: 0
          },
          rightStick: sk ? kk.rightStick : {
            x: 0,
            y: 0
          },
          wokeDevice: Bk
        }
      }
    }
  },
  7840: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Vk.f,
      d: () => Vk.h,
      g: () => Hk,
      h: () => uk,
      l: () => Mk,
      m: () => gk
    });
    var Rk = Bk(61),
      tk = Bk(29),
      ak = Bk(1387),
      Xk = Bk(42),
      bk = Bk(7845),
      wk = Bk(7815),
      dk = Bk(7831),
      sk = Bk(7810),
      Vk = Bk(1912),
      Jk = Bk(7847);
    const Ak = {
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
      ek = "controllerSettings",
      yk = ["bindings", "promptFamily", "hideButtonHints", "swapSticks", "swapConfirmBack", "leaderboardButton"],
      fk = ["auto", ...bk.e],
      mk = (kk, Fk) => "string" === typeof Fk && kk.includes(Fk),
      Wk = kk => Fk => "number" === typeof Fk && Number.isFinite(Fk) ? (0, Jk.p)(Fk, kk) : void 0,
      vk = kk => "boolean" === typeof kk ? kk : void 0,
      ik = kk => Fk => mk(kk, Fk) ? Fk : void 0,
      Yk = {
        lookSensitivityX: Wk(Jk.ab),
        lookSensitivityY: Wk(Jk.ab),
        aimLookSensitivity: Wk(Jk.i),
        invertLookX: vk,
        invertLookY: vk,
        lookCurve: ik(wk.O),
        lookDeadzone: Wk(Jk.t),
        moveDeadzone: Wk(Jk.t),
        swapSticks: vk,
        autoSprint: vk,
        sneakMode: ik(["toggle", "hold"]),
        tapHoldTime: ik(["short", "medium", "long"]),
        attackMode: ik(["hold", "toggle"]),
        promptFamily: ik(fk),
        hideButtonHints: vk,
        vibration: vk,
        cursorSpeed: Wk(Jk.r),
        cursorMagnetism: vk,
        buttonRepeat: ik(wk.o),
        largePointer: vk,
        menuBackToCategories: vk,
        swapConfirmBack: vk,
        menuNavigation: ik(["hybrid", "focus", "cursor"]),
        inventoryNavigation: ik(["hybrid", "slot", "cursor"]),
        quickChat: ik(["wheel", "off"]),
        leaderboardButton: ik(["shop", "leaderboard"]),
        gyroAiming: vk,
        gyroSensitivity: Wk(Jk.M),
        gyroActivation: ik(["always", "aiming", "button"]),
        gyroButton: ik(wk.Z),
        emoteButton: ik(["tapHold", "wheel"])
      },
      Lk = [{
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
      Ok = kk => {
        const Fk = {};
        if ("object" !== typeof kk || null === kk) return Fk;
        for (const [Bk, Rk] of Object.entries(kk)) Object.prototype.hasOwnProperty.call(dk.h, Bk) && mk(wk.Z, Rk) && (Fk[Bk] = Rk);
        return Fk
      },
      Ek = kk => {
        const Fk = {};
        for (const Bk of Object.keys(Ak))("bindings" === Bk ? Object.keys(kk.bindings).length > 0 : kk[Bk] !== Ak[Bk]) && (Fk[Bk] = kk[Bk]);
        0 !== Object.keys(Fk).length ? Xk.i.setItem(ek, Fk) : Xk.i.removeItem(ek)
      };
    let Sk = (() => {
        const kk = Xk.i.getItem(ek),
          Fk = (kk => {
            const Fk = "object" === typeof kk && null !== kk ? kk : {},
              Bk = {
                ...Ak,
                bindings: Ok(Fk.bindings)
              };
            for (const tk of Object.keys(Yk)) {
              const kk = Yk[tk](Fk[tk]);
              void 0 !== kk && (Bk[tk] = kk)
            }
            const Rk = Object.keys(Fk).filter((kk => !!Object.prototype.hasOwnProperty.call(Ak, kk) && ("bindings" === kk ? "object" !== typeof Fk.bindings || null === Fk.bindings || Object.keys(Fk.bindings).length !== Object.keys(Bk.bindings).length : Bk[kk] !== Fk[kk])));
            return Rk.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${Rk.join(", ")}`), Bk
          })(kk);
        return null !== kk && void 0 !== kk && Ek(Fk), Fk
      })(),
      Nk = {
        ...Sk,
        ...(() => {
          if ("undefined" === typeof window) return {};
          const kk = {},
            Fk = new URLSearchParams(window.location.search);
          for (const {
              param: Bk,
              key: Rk
            }
            of Lk) {
            const tk = Yk[Rk](Fk.get(Bk));
            void 0 !== tk && (kk[Rk] = tk)
          }
          return kk
        })()
      };
    const Hk = () => Nk,
      uk = () => {
        var kk, Fk;
        const Bk = Hk().promptFamily;
        return "auto" !== Bk ? Bk : null !== (kk = null === (Fk = sk.g.getActivePad()) || void 0 === Fk ? void 0 : Fk.family) && void 0 !== kk ? kk : "xbox"
      },
      Mk = kk => {
        const Fk = Nk;
        Sk = {
          ...Sk,
          ...kk
        }, Ek(Sk), Nk = {
          ...Nk,
          ...kk
        }, (kk => {
          tk.o.Hf(Vk.h, Nk), yk.some((Fk => kk[Fk] !== Nk[Fk])) && tk.o.Hf(Vk.f, Nk)
        })(Fk)
      },
      gk = () => {
        const [kk, Fk] = (0, Rk.useState)(Nk);
        return (0, ak.f)(Vk.h, Fk), kk
      }
  },
  8322: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => tk
    });
    const Rk = new Set(["Alt", "AltGraph", "Meta", "OS", "AudioVolumeUp", "AudioVolumeDown", "AudioVolumeMute", "MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "BrowserBack", "BrowserForward", "BrowserHome", "GoBack", "LaunchApplication1", "LaunchApplication2", "LaunchMail", "PrintScreen", "Unidentified"]),
      tk = kk => Rk.has(kk)
  },
  7810: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => yk.d,
      g: () => vk
    });
    var Rk = Bk(7815),
      tk = Bk(7819);
    const ak = .1,
      Xk = .3;
    class bk {
      constructor() {
        this.deadzone = 0, this.anchor = null, this.steadyMs = 0, this.lastMs = null, this.returning = !0, this.anchorLearned = !1
      }
      observe(kk, Fk) {
        const Bk = null === this.lastMs ? 0 : Math.min(Math.max(0, Fk - this.lastMs), 100);
        this.lastMs = Fk;
        const Rk = Math.hypot(kk.x, kk.y);
        if (Rk >= Xk) return this.anchor = null, void(this.returning = !0);
        Rk >= ak || (this.returning = !1);
        const tk = this.anchor;
        if (!tk || Math.hypot(kk.x - tk.x, kk.y - tk.y) > .03) return this.anchorLearned && (this.returning = !1), this.anchor = {
          x: kk.x,
          y: kk.y
        }, this.steadyMs = 0, void(this.anchorLearned = !1);
        if (this.steadyMs += Bk, this.steadyMs < 1e3) return;
        const bk = Math.max(Rk, Math.hypot(tk.x, tk.y));
        bk < ak ? this.deadzone = 0 : this.returning && (this.deadzone = bk + .05, this.anchorLearned = !0)
      }
      getDeadzone() {
        return this.deadzone
      }
      apply(kk) {
        return Math.hypot(kk.x, kk.y) < this.deadzone ? {
          x: 0,
          y: 0
        } : kk
      }
    }
    const wk = (kk, Fk) => {
        var Bk, Rk;
        return null !== (Bk = kk && (null === (Rk = Object.getOwnPropertyDescriptor(kk, Fk)) || void 0 === Rk ? void 0 : Rk.get)) && void 0 !== Bk ? Bk : null
      },
      dk = kk => {
        const Fk = kk.vendorName;
        return "string" === typeof Fk ? Fk : void 0
      },
      sk = ((kk, Fk) => {
        const Bk = wk(kk, "index"),
          Rk = wk(kk, "id"),
          tk = wk(kk, "connected"),
          ak = wk(kk, "mapping"),
          Xk = wk(kk, "buttons"),
          bk = wk(kk, "axes"),
          sk = wk(Fk, "pressed"),
          Vk = wk(Fk, "value");
        return Bk && Rk && tk && ak && Xk && bk && sk && Vk ? kk => {
          const Fk = Xk.call(kk),
            wk = bk.call(kk),
            Jk = {
              index: Number(Bk.call(kk)),
              id: String(Rk.call(kk)),
              connected: !0 === tk.call(kk),
              mapping: String(ak.call(kk)),
              buttons: [],
              axes: [],
              vendorName: dk(kk)
            };
          for (let Bk = 0; Bk < Fk.length; Bk++) Jk.buttons.push({
            pressed: !0 === sk.call(Fk[Bk]),
            value: Number(Vk.call(Fk[Bk]))
          });
          for (let Bk = 0; Bk < wk.length; Bk++) Jk.axes.push(Number(wk[Bk]));
          return Jk
        } : null
      })("undefined" === typeof Gamepad ? null : Gamepad.prototype, "undefined" === typeof GamepadButton ? null : GamepadButton.prototype),
      Vk = "undefined" === typeof Navigator ? null : Navigator.prototype.getGamepads;
    var Jk = Bk(1361),
      Ak = Bk(1367);
    const ek = kk => ({
      pressed: kk,
      value: kk ? 1 : 0
    });
    var yk = Bk(1912);
    const fk = Xk,
      mk = kk => {
        const Fk = new Array(Rk.X).fill(0);
        for (let Bk = 0; Bk < Rk.X && Bk < kk.buttons.length; Bk++) {
          const tk = kk.buttons[Bk];
          Fk[Bk] = tk.pressed && !(0, Rk.N)(Bk) ? Math.max(tk.value, Rk.y) : tk.value
        }
        return Fk
      },
      Wk = (kk, Fk) => {
        var Bk, Rk;
        return {
          x: null !== (Bk = kk.axes[Fk]) && void 0 !== Bk ? Bk : 0,
          y: null !== (Rk = kk.axes[Fk + 1]) && void 0 !== Rk ? Rk : 0
        }
      };
    const vk = new class {
      constructor(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : sk;
        this.readGamepads = kk, this.requireTrustedPads = Fk, this.nativeReader = Bk, this.running = !1, this.listening = !1, this.rafId = 0, this.lastTimestampMs = 0, this.activeInfo = null, this.slots = [], this.trustedIndices = new Set, this.warnedNonStandardIds = new Set, this.loggedReadError = !1, this.frameListeners = new Set, this.connectionListeners = new Set, this.anyPadConnected = !1, this.connectedListeners = new Set, this.handleConnectionEvent = kk => {
          kk.isTrusted && this.trustedIndices.add(kk.gamepad.index), this.wake()
        }, this.handleDisconnectionEvent = kk => {
          this.trustedIndices.delete(kk.gamepad.index)
        }, this.yJ = kk => {
          if (this.rafId = 0, !this.running) return;
          const Fk = 0 === this.lastTimestampMs ? 16 : Math.min(100, kk - this.lastTimestampMs);
          this.lastTimestampMs = kk;
          try {
            this.poll(kk, Fk)
          } finally {
            this.anyPadConnected && (this.rafId = requestAnimationFrame(this.yJ))
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
      onFrame(kk) {
        return this.frameListeners.add(kk), () => {
          this.frameListeners.delete(kk)
        }
      }
      onActivePadChanged(kk) {
        return this.connectionListeners.add(kk), () => {
          this.connectionListeners.delete(kk)
        }
      }
      getActivePad() {
        return this.activeInfo
      }
      hasConnectedPad() {
        return this.anyPadConnected
      }
      onConnectedPadsChanged(kk) {
        return this.connectedListeners.add(kk), () => {
          this.connectedListeners.delete(kk)
        }
      }
      getActiveGamepad() {
        if (!this.activeInfo) return null;
        const kk = this.readPads()[this.activeInfo.index],
          Fk = kk ? this.readPad(kk) : null;
        return Fk && Fk.id === this.activeInfo.id ? kk : null
      }
      poll(kk, Fk) {
        var Bk, tk;
        const ak = this.readPads();
        let Xk = null,
          wk = !1;
        const dk = [],
          sk = Math.max(ak.length, this.slots.length);
        for (let vk = 0; vk < sk; vk++) {
          var Vk;
          const Fk = vk < ak.length ? ak[vk] : null,
            Bk = Fk ? this.readPad(Fk) : null;
          if (!Bk || !Bk.connected || !this.isUsable(Bk)) {
            this.slots[vk] = null;
            continue
          }
          let tk = this.slots[vk];
          tk && tk.id === Bk.id || (tk = {
            id: Bk.id,
            Hb: [],
            leftSettled: !1,
            rightSettled: !1,
            leftRest: new bk,
            rightRest: new bk
          }, this.slots[vk] = tk);
          const sk = Wk(Bk, 0),
            Jk = Wk(Bk, 2);
          !tk.leftSettled && Math.hypot(sk.x, sk.y) < fk && (tk.leftSettled = !0), !tk.rightSettled && Math.hypot(Jk.x, Jk.y) < fk && (tk.rightSettled = !0), tk.leftRest.observe(sk, kk), tk.rightRest.observe(Jk, kk);
          const Ak = mk(Bk),
            ek = (0, Rk.r)(Ak, tk.Hb),
            yk = tk.Hb,
            ik = ek.map(((kk, Fk) => kk && !yk[Fk]));
          tk.Hb = ek;
          const Yk = {
            pad: Bk,
            slot: tk,
            values: Ak
          };
          vk === (null === (Vk = this.activeInfo) || void 0 === Vk ? void 0 : Vk.index) && Bk.id === this.activeInfo.id ? (Xk = Yk, wk = ik.includes(!0)) : ik.includes(!0) && dk.push({
            polled: Yk,
            rose: ik
          })
        }
        const Jk = this.slots.some((kk => null !== kk));
        if (Jk !== this.anyPadConnected) {
          this.anyPadConnected = Jk;
          for (const kk of this.connectedListeners) kk()
        }
        const Ak = null !== (Bk = null === (tk = Xk) || void 0 === tk ? void 0 : tk.slot.Hb) && void 0 !== Bk ? Bk : [],
          ek = wk ? void 0 : dk.find((kk => {
            let {
              rose: Fk
            } = kk;
            return Fk.some(((kk, Fk) => kk && !Ak[Fk]))
          }));
        if (ek ? (Xk = ek.polled, this.setActive(ek.polled.pad)) : this.activeInfo && !Xk && this.setActive(null), !Xk || !this.activeInfo) return;
        const yk = ((kk, Fk) => {
          let {
            pad: Bk,
            slot: tk,
            values: ak
          } = kk;
          const Xk = (0, Rk.w)(Fk);
          return Xk.values = ak, tk.leftSettled && (Xk.leftStick = tk.leftRest.apply(Wk(Bk, 0))), tk.rightSettled && (Xk.rightStick = tk.rightRest.apply(Wk(Bk, 2))), Xk
        })(Xk, kk);
        for (const Rk of this.frameListeners) Rk(yk, Fk, this.activeInfo)
      }
      readPad(kk) {
        const Fk = this.readSnapshot(kk);
        return Fk && (0, Ak.d)(Fk) ? (kk => {
          const Fk = Fk => {
              var Bk;
              return null !== (Bk = kk.buttons[Fk]) && void 0 !== Bk ? Bk : ek(!1)
            },
            Bk = Fk => {
              var Bk;
              return null !== (Bk = kk.axes[Fk]) && void 0 !== Bk ? Bk : 0
            },
            Rk = kk.axes.length > 9,
            tk = Rk ? (kk => {
              const Fk = 0 !== kk;
              return {
                up: Fk && (kk >= -1 && kk < -.7 || kk >= .95 && kk <= 1),
                right: Fk && kk >= -.75 && kk < -.1,
                down: Fk && kk >= -.2 && kk < .45,
                left: Fk && kk >= .4 && kk <= 1
              }
            })(Bk(9)) : {
              up: Bk(5) < -.5,
              down: Bk(5) > .5,
              left: Bk(4) < -.5,
              right: Bk(4) > .5
            };
          return {
            ...kk,
            mapping: "standard",
            buttons: [Fk(1), Fk(2), Fk(0), Fk(3), Fk(4), Fk(5), Fk(6), Fk(7), Fk(8), Fk(9), Fk(10), Fk(11), ek(tk.up), ek(tk.down), ek(tk.left), ek(tk.right), Fk(12)],
            axes: [Bk(0), Bk(1), Bk(2), Bk(Rk ? 5 : 3)]
          }
        })(Fk) : Fk
      }
      readSnapshot(kk) {
        if (this.nativeReader) try {
          return this.nativeReader(kk)
        } catch {
          if (this.requireTrustedPads) return null
        }
        return this.requireTrustedPads ? null : (kk => {
          const Fk = kk;
          return {
            index: Fk.index,
            id: Fk.id,
            connected: Fk.connected,
            mapping: Fk.mapping,
            buttons: Array.from(Fk.buttons, (kk => ({
              pressed: kk.pressed,
              value: kk.value
            }))),
            axes: Array.from(Fk.axes),
            vendorName: dk(kk)
          }
        })(kk)
      }
      isUsable(kk) {
        return !(0, Jk.i)(kk.id) && ("standard" !== kk.mapping ? (this.warnedNonStandardIds.has(kk.id) || (this.warnedNonStandardIds.add(kk.id), console.warn(`Controller "${kk.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.trustedIndices.has(kk.index))
      }
      setActive(kk) {
        this.activeInfo = kk ? {
          index: kk.index,
          id: kk.id,
          family: (0, tk.e)(kk.id, kk.vendorName)
        } : null;
        for (const Fk of this.connectionListeners) Fk(this.activeInfo)
      }
      readPads() {
        try {
          return this.readGamepads()
        } catch (kk) {
          return this.loggedReadError || (this.loggedReadError = !0, console.warn("Reading gamepads failed; controller input is unavailable.", kk)), []
        }
      }
      wake() {
        this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.yJ))
      }
    }((() => Vk ? Vk.call(navigator) : []), !0);
    vk.listenForConnections()
  },
  8334: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Rk
    });
    const Rk = {
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
  8422: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Xk,
      g: () => bk
    });
    var Rk = Bk(29),
      tk = Bk(8407);
    let ak = !1;
    const Xk = () => ak,
      bk = kk => {
        kk !== ak && (ak = kk, Rk.o.Hf(tk.k, ak))
      }
  },
  8415: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => bk,
      e: () => wk
    });
    var Rk = Bk(29),
      tk = Bk(8407);
    let ak = null,
      Xk = 0;
    const bk = () => ak,
      wk = kk => {
        null === kk && null === ak || (ak = null === kk ? null : {
          id: ++Xk,
          holdMs: kk
        }, Rk.o.Hf(tk.l, ak))
      }
  },
  8428: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Xk,
      e: () => bk
    });
    var Rk = Bk(29),
      tk = Bk(8407);
    let ak = !1;
    const Xk = () => ak,
      bk = kk => {
        kk !== ak && (ak = kk, Rk.o.Hf(tk.m, ak))
      }
  },
  8509: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Xk,
      c: () => bk
    });
    var Rk = Bk(29),
      tk = Bk(8407);
    let ak = !1;
    const Xk = () => ak,
      bk = kk => {
        kk !== ak && (ak = kk, Rk.o.Hf(tk.o, ak))
      }
  },
  8364: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Rk
    });
    class Rk {
      constructor() {
        this.downAtMs = null
      }
      update(kk, Fk, Bk, Rk) {
        if (kk) return this.downAtMs = Bk, null;
        if (null === this.downAtMs) return null;
        const tk = Bk - this.downAtMs >= Rk;
        return Fk ? tk ? (this.downAtMs = null, "hold") : null : (this.downAtMs = null, tk ? "hold" : "tap")
      }
      release() {
        this.downAtMs = null
      }
    }
  },
  7880: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Vk,
      f: () => Jk,
      g: () => bk,
      i: () => vk,
      m: () => Wk
    });
    var Rk = Bk(42),
      tk = Bk(7845),
      ak = Bk(7815);
    const Xk = (() => {
        try {
          return Bk(7889)
        } catch {
          return null
        }
      })(),
      bk = [...ak.Z, "LeftStick", "RightStick"],
      wk = new Map,
      dk = {
        xbox: "xbox",
        playstation: "playstation",
        nintendo: "nintendo",
        steamdeck: "steamdeck",
        generic: "xbox"
      },
      sk = (new Set(Object.values(dk)), {
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
      Vk = (kk, Fk) => {
        var Bk, Rk;
        return null !== (Bk = null === (Rk = sk[dk[kk]]) || void 0 === Rk ? void 0 : Rk[Fk]) && void 0 !== Bk ? Bk : 1
      },
      Jk = (kk, Fk) => {
        const Bk = `./${dk[kk]}/${Fk}.svg`;
        let Rk = wk.get(Bk);
        return void 0 === Rk && (Rk = Xk ? Xk(Bk) : "", wk.set(Bk, Rk)), Rk
      },
      Ak = new Set,
      ek = [],
      yk = kk => {
        if (!Ak.has(kk)) {
          Ak.add(kk);
          for (const Fk of bk) {
            const Bk = Jk(kk, Fk);
            if (Bk) {
              const kk = new Image;
              kk.crossOrigin = "anonymous", kk.src = Bk, ek.push(kk)
            }
          }
        }
      },
      fk = "controllerGlyphFamily";
    let mk = null;
    const Wk = kk => {
        kk !== mk && (mk = kk, Rk.i.setItem(fk, kk), yk(kk))
      },
      vk = () => {
        const kk = Rk.i.getItem(fk);
        (0, tk.h)(kk) && kk !== mk && (mk = kk, yk(kk))
      }
  },
  8529: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => zk,
      h: () => Pk
    });
    var Rk = Bk(61),
      tk = Bk(29),
      ak = Bk(1387),
      Xk = Bk(7826),
      bk = Bk(7810),
      wk = Bk(7861),
      dk = Bk(7840);
    const sk = {
        x: 0,
        y: 0,
        z: 0
      },
      Vk = Math.PI / 180,
      Jk = kk => Math.hypot(kk.x, kk.y, kk.z),
      Ak = (kk, Fk) => ({
        x: kk.x * Fk,
        y: kk.y * Fk,
        z: kk.z * Fk
      }),
      ek = (kk, Fk) => ({
        x: kk.x + Fk.x,
        y: kk.y + Fk.y,
        z: kk.z + Fk.z
      }),
      yk = (kk, Fk) => ({
        x: kk.x - Fk.x,
        y: kk.y - Fk.y,
        z: kk.z - Fk.z
      }),
      fk = kk => {
        const Fk = Jk(kk);
        return 0 === Fk ? sk : Ak(kk, 1 / Fk)
      },
      mk = kk => ({
        min: {
          ...kk
        },
        max: {
          ...kk
        }
      }),
      Wk = (kk, Fk) => ({
        min: {
          x: Math.min(kk.min.x, Fk.x),
          y: Math.min(kk.min.y, Fk.y),
          z: Math.min(kk.min.z, Fk.z)
        },
        max: {
          x: Math.max(kk.max.x, Fk.x),
          y: Math.max(kk.max.y, Fk.y),
          z: Math.max(kk.max.z, Fk.z)
        }
      }),
      vk = (kk, Fk) => kk.max.x - kk.min.x <= Fk && kk.max.y - kk.min.y <= Fk && kk.max.z - kk.min.z <= Fk;
    class ik {
      constructor() {
        this.bias = sk, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = sk, this.windowSec = 0
      }
      update(kk) {
        const Fk = this.gyroRange ? Wk(this.gyroRange, kk.gyro) : mk(kk.gyro),
          Bk = kk.accel ? this.accelRange ? Wk(this.accelRange, kk.accel) : mk(kk.accel) : null;
        if (!vk(Fk, 1) || Bk && !vk(Bk, .01)) return void this.restartWindow(kk);
        if (this.gyroRange = Fk, this.accelRange = Bk, this.sum = ek(this.sum, Ak(kk.gyro, kk.dtSec)), this.windowSec += kk.dtSec, this.windowSec < 1) return;
        const Rk = Ak(this.sum, 1 / this.windowSec);
        if (Jk(Rk) > 5) return;
        const tk = yk(Rk, this.bias);
        let ak = 0;
        !this.calibrated || this.windowSec >= 3 ? ak = 1 : Jk(tk) <= 1 && (ak = Math.min(1, kk.dtSec / 1)), this.bias = ek(this.bias, Ak(tk, ak)), this.calibrated = this.calibrated || ak > 0
      }
      correct(kk) {
        return yk(kk, this.bias)
      }
      getBias() {
        return this.bias
      }
      isCalibrated() {
        return this.calibrated
      }
      reset() {
        this.bias = sk, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = sk, this.windowSec = 0
      }
      restartWindow(kk) {
        this.gyroRange = mk(kk.gyro), this.accelRange = kk.accel ? mk(kk.accel) : null, this.sum = sk, this.windowSec = 0
      }
    }
    class Yk {
      constructor() {
        this.down = null
      }
      update(kk, Fk, Bk) {
        const Rk = fk(Ak(Fk, -1));
        if (!this.down) return this.down = Rk, Rk;
        const tk = Ak(kk, Vk * Bk),
          ak = this.down,
          Xk = {
            x: ak.x - (tk.y * ak.z - tk.z * ak.y),
            y: ak.y - (tk.z * ak.x - tk.x * ak.z),
            z: ak.z - (tk.x * ak.y - tk.y * ak.x)
          },
          bk = 0 === Jk(Rk) ? 0 : Math.min(1, Bk / .25);
        var wk, dk;
        return this.down = fk((dk = bk, ek(wk = Xk, Ak(yk(Rk, wk), dk)))), this.down
      }
      reset() {
        this.down = null
      }
    }
    class Lk {
      constructor() {
        this.entries = [], this.windowSec = 0
      }
      apply(kk, Fk, Bk) {
        const Rk = Math.hypot(kk, Fk),
          tk = Math.max(0, Math.min(1, (Rk - 2) / 2)),
          ak = {
            yaw: kk * (1 - tk),
            pitch: Fk * (1 - tk),
            dtSec: Bk
          };
        for (this.entries.push(ak), this.windowSec += Bk; this.entries.length > 1 && this.windowSec - this.entries[0].dtSec >= .125;) this.windowSec -= this.entries[0].dtSec, this.entries.shift();
        let Xk = 0,
          bk = 0;
        for (const dk of this.entries) Xk += dk.yaw * dk.dtSec, bk += dk.pitch * dk.dtSec;
        const wk = this.windowSec > 0 ? {
          yaw: Xk / this.windowSec,
          pitch: bk / this.windowSec
        } : {
          yaw: ak.yaw,
          pitch: ak.pitch
        };
        return {
          yaw: kk * tk + wk.yaw,
          pitch: Fk * tk + wk.pitch
        }
      }
      reset() {
        this.entries = [], this.windowSec = 0
      }
    }
    class Ok {
      constructor() {
        this.calibrator = new ik, this.gravity = new Yk, this.smoother = new Lk
      }
      process(kk, Fk, Bk) {
        const Rk = Math.max(0, Math.min(.05, Fk));
        this.calibrator.update({
          ...kk,
          dtSec: Rk
        });
        const tk = this.calibrator.correct(kk.gyro);
        let ak = tk.y;
        "player" === Bk && kk.accel && (ak = ((kk, Fk) => {
          const Bk = kk.y * Fk.y + kk.z * Fk.z;
          return -Math.sign(Bk) * Math.min(1.41 * Math.abs(Bk), Math.hypot(kk.y, kk.z))
        })(tk, this.gravity.update(tk, kk.accel, Rk)));
        const Xk = this.smoother.apply(ak, tk.x, Rk),
          bk = ((kk, Fk) => {
            const Bk = Math.hypot(kk, Fk);
            if (Bk >= 1) return {
              yaw: kk,
              pitch: Fk
            };
            const Rk = Bk / 1;
            return {
              yaw: kk * Rk,
              pitch: Fk * Rk
            }
          })(Xk.yaw, Xk.pitch);
        return {
          yawDeg: bk.yaw * Rk,
          pitchDeg: bk.pitch * Rk
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
    const Ek = (kk, Fk) => {
      var Bk, Rk, tk;
      const ak = Fk * Vk,
        Xk = null !== (Bk = kk.beta) && void 0 !== Bk ? Bk : 0,
        bk = null !== (Rk = kk.gamma) && void 0 !== Rk ? Rk : 0;
      return {
        x: Xk * Math.cos(ak) - bk * Math.sin(ak),
        y: Xk * Math.sin(ak) + bk * Math.cos(ak),
        z: null !== (tk = kk.alpha) && void 0 !== tk ? tk : 0
      }
    };
    var Sk = Bk(8538);
    class Nk {
      constructor(kk, Fk, Bk) {
        this.hid = kk, this.sink = Fk, this.onControllersChanged = Bk, this.controllers = new Map, this.running = !1, this.openedCount = 0, this.opening = new Set, this.disconnectedWhileOpening = new Set, this.switchPacketCounter = 0, this.onConnect = kk => {
          this.openController(kk.device).catch((kk => {
            console.warn("Could not open motion controller", kk)
          }))
        }, this.onDisconnect = kk => {
          this.opening.has(kk.device) && this.disconnectedWhileOpening.add(kk.device);
          const Fk = this.controllers.get(kk.device);
          Fk && (this.forget(Fk), this.onControllersChanged())
        }
      }
      async start() {
        if (this.running) return;
        this.running = !0, this.hid.addEventListener("connect", this.onConnect), this.hid.addEventListener("disconnect", this.onDisconnect);
        const kk = await this.hid.getDevices();
        for (const Fk of kk) await this.openController(Fk).catch((kk => {
          console.warn("Could not open motion controller", kk)
        }))
      }
      stop() {
        this.running = !1, this.hid.removeEventListener("connect", this.onConnect), this.hid.removeEventListener("disconnect", this.onDisconnect);
        for (const kk of [...this.controllers.values()]) this.forget(kk);
        this.onControllersChanged()
      }
      async request() {
        const kk = await this.hid.requestDevice({
          filters: Sk.k
        });
        let Fk = 0;
        for (const Bk of kk) await this.openController(Bk).catch((kk => {
          console.warn("Could not open motion controller", kk), Fk++
        }));
        return Fk
      }
      async hasGrantedController() {
        return (await this.hid.getDevices()).some((kk => null !== (0, Sk.f)(kk.vendorId, kk.productId)))
      }
      getConnectedKinds() {
        return [...this.controllers.values()].map((kk => kk.kind))
      }
      forget(kk) {
        kk.device.removeEventListener("inputreport", kk.onReport), this.controllers.get(kk.device) === kk && this.controllers.delete(kk.device)
      }
      async openController(kk) {
        const Fk = (0, Sk.f)(kk.vendorId, kk.productId);
        if (!Fk || !this.running || this.controllers.has(kk) || this.opening.has(kk)) return;
        this.opening.add(kk);
        let Bk = !1;
        try {
          kk.opened || await kk.open()
        } finally {
          this.opening.delete(kk), Bk = this.disconnectedWhileOpening.delete(kk)
        }
        if (Bk) return void kk.close().catch((kk => {
          console.debug("Could not close an unplugged motion controller", kk)
        }));
        if (!this.running) return;
        const Rk = {
          device: kk,
          kind: Fk,
          lastClock: null,
          lastEventMs: null,
          lastReadingMs: -1 / 0,
          openedOrder: this.openedCount++,
          onReport: kk => {
            this.onReport(Rk, kk)
          }
        };
        this.controllers.set(kk, Rk), kk.addEventListener("inputreport", Rk.onReport), this.onControllersChanged();
        try {
          await this.enableMotion(Rk)
        } catch (tk) {
          console.warn(`Could not turn on motion for ${Fk}`, tk), this.controllers.get(kk) === Rk && (this.forget(Rk), this.onControllersChanged())
        }
      }
      async enableMotion(kk) {
        let {
          device: Fk,
          kind: Bk
        } = kk;
        if ((0, Sk.j)(Bk))
          for (const Rk of Sk.w[Bk]) await Fk.receiveFeatureReport(Rk).catch((kk => {
            console.debug(`Motion controller feature report ${Rk} unavailable`, kk)
          }));
        else
          for (let Rk = 0; Rk < 2; Rk++)
            for (const {
                subcommand: kk,
                args: Bk
              }
              of Sk.y) await Fk.sendReport(Sk.z, (0, Sk.d)(this.switchPacketCounter++, kk, Bk)), await new Promise((kk => {
              setTimeout(kk, 60)
            }))
      }
      onReport(kk, Fk) {
        const Bk = (0, Sk.q)(kk.kind, Fk.reportId, Fk.data, kk.device.productId);
        if (!Bk) return;
        const Rk = null === kk.lastEventMs ? 0 : (Fk.timeStamp - kk.lastEventMs) / 1e3;
        kk.lastEventMs = Fk.timeStamp;
        let tk = Bk.dtSec;
        if (null !== tk && Rk > 0 && (tk = Math.max(.001, Math.min(.017, Rk / Bk.readings.length))), null === tk && null !== Bk.sensorClock && (0, Sk.j)(kk.kind)) {
          const Fk = (0, Sk.s)(kk.kind, kk.lastClock, Bk.sensorClock);
          kk.lastClock = Bk.sensorClock, tk = 0 === Fk ? null : Fk
        }
        if (kk.lastReadingMs = Fk.timeStamp, this.isPreferred(kk, Fk.timeStamp))
          for (const Xk of Bk.readings) {
            var ak;
            this.sink(Xk, null !== (ak = tk) && void 0 !== ak ? ak : Rk, `hid${kk.openedOrder}`)
          }
      }
      isPreferred(kk, Fk) {
        const Bk = kk => 1e6 * Sk.n[kk.kind] + kk.openedOrder;
        for (const Rk of this.controllers.values())
          if (Rk !== kk && Fk - Rk.lastReadingMs < 500 && Bk(Rk) < Bk(kk)) return !1;
        return !0
      }
    }
    var Hk = Bk(98);
    const uk = () => DeviceMotionEvent,
      Mk = () => "undefined" !== typeof window && "undefined" !== typeof DeviceMotionEvent && window.isSecureContext && (0, Hk.isMobile)(),
      gk = () => {
        var kk;
        const Fk = null === (kk = window.screen.orientation) || void 0 === kk ? void 0 : kk.angle;
        return "number" === typeof Fk ? Fk : "number" === typeof window.orientation ? window.orientation : 0
      };
    class Uk {
      constructor(kk, Fk) {
        this.sink = kk, this.onStateChanged = Fk, this.state = "off", this.lastEventMs = null, this.noSensorTimer = null, this.wanted = !1, this.permissionRequest = null, this.granted = !1, this.onGesture = () => {
          this.requestPermission().catch((kk => {
            console.warn("Could not enable the motion sensor", kk)
          }))
        }, this.onMotion = kk => {
          const Fk = kk.rotationRate;
          if (!Fk || null === Fk.alpha && null === Fk.beta && null === Fk.gamma) return;
          const Bk = null === this.lastEventMs ? 0 : (kk.timeStamp - this.lastEventMs) / 1e3;
          this.lastEventMs = kk.timeStamp, this.clearNoSensorTimer(), this.setState("on"), this.sink({
            gyro: Ek(Fk, gk()),
            accel: null
          }, Bk, "phone")
        }
      }
      getState() {
        return this.state
      }
      start() {
        if (this.wanted = !0, "off" === this.state) return "function" !== typeof uk().requestPermission || this.granted ? void this.listen() : (this.setState("needsPermission"), void this.armGestureRequest())
      }
      requestPermission() {
        return this.permissionRequest || (this.permissionRequest = this.askPermission().finally((() => {
          this.permissionRequest = null
        }))), this.permissionRequest
      }
      async askPermission() {
        const kk = uk().requestPermission;
        if (!this.wanted) return;
        if ("function" !== typeof kk) return void this.listen();
        let Fk;
        this.disarmGestureRequest();
        try {
          Fk = await kk.call(DeviceMotionEvent)
        } catch (Bk) {
          throw this.wanted && "needsPermission" === this.state && this.armGestureRequest(), Bk
        }
        this.wanted && ("granted" === Fk ? (this.granted = !0, this.listen()) : this.setState("denied"))
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
      setState(kk) {
        this.state !== kk && (this.state = kk, this.onStateChanged())
      }
    }
    const ck = "controllerGyroStatusChanged",
      Gk = {
        ZE: 0,
        pE: 0
      },
      Tk = kk => {
        var Fk, Bk;
        return "undefined" === typeof document || (null === (Fk = null === (Bk = document.featurePolicy) || void 0 === Bk ? void 0 : Bk.allowsFeature(kk)) || void 0 === Fk || Fk)
      };
    class rk {
      constructor() {
        this.processor = new Ok, this.hid = void 0, this.hidBlocked = void 0, this.phone = void 0, this.phoneBlocked = void 0, this.source = null, this.pendingYawDeg = 0, this.pendingPitchDeg = 0, this.lastDrainMs = -1 / 0, this.lastHidReadingMs = -1 / 0, this.running = !1, this.phoneRunning = !1, this.syncWithSettings = kk => {
          const Fk = kk.gyroAiming && bk.g.hasConnectedPad();
          var Bk, Rk;
          Fk !== this.phoneRunning && (this.phoneRunning = Fk, Fk ? null === (Bk = this.phone) || void 0 === Bk || Bk.start() : null === (Rk = this.phone) || void 0 === Rk || Rk.stop());
          if (kk.gyroAiming !== this.running) {
            var tk, ak;
            if (this.running = kk.gyroAiming, this.running) null === (tk = this.hid) || void 0 === tk || tk.start().catch((kk => {
              console.warn("Could not open motion controllers", kk)
            }));
            else null === (ak = this.hid) || void 0 === ak || ak.stop(), this.processor.reset(), this.source = null, this.discardPending();
            this.publishStatus()
          }
        }, this.publishStatus = () => {
          tk.o.Hf(ck, this.getStatus())
        };
        const kk = (() => {
            var kk;
            return "undefined" !== typeof navigator && window.isSecureContext && null !== (kk = navigator.hid) && void 0 !== kk ? kk : null
          })(),
          Fk = Tk("hid");
        this.hidBlocked = null !== kk && !Fk, this.hid = kk && Fk ? new Nk(kk, ((kk, Fk, Bk) => {
          this.lastHidReadingMs = performance.now(), this.feed(kk, Fk, "player", Bk)
        }), this.publishStatus) : null;
        const Bk = Tk("accelerometer") && Tk("gyroscope");
        this.phoneBlocked = Mk() && !Bk, this.phone = Mk() && Bk ? new Uk(((kk, Fk, Bk) => {
          performance.now() - this.lastHidReadingMs >= 500 && this.feed(kk, Fk, "local", Bk)
        }), this.publishStatus) : null, tk.o.subscribe(dk.d, this.syncWithSettings), bk.g.onConnectedPadsChanged((() => {
          this.syncWithSettings((0, dk.g)()), this.publishStatus()
        })), this.syncWithSettings((0, dk.g)())
      }
      isSupported() {
        return null !== this.hid || null !== this.phone
      }
      getStatus() {
        var kk, Fk, Bk, Rk;
        return {
          hidSupported: null !== this.hid,
          hidBlocked: this.hidBlocked,
          phoneSupported: null !== this.phone,
          phoneBlocked: this.phoneBlocked,
          controllers: null !== (kk = null === (Fk = this.hid) || void 0 === Fk ? void 0 : Fk.getConnectedKinds()) && void 0 !== kk ? kk : [],
          phoneMotion: null !== (Bk = null === (Rk = this.phone) || void 0 === Rk ? void 0 : Rk.getState()) && void 0 !== Bk ? Bk : "off",
          padConnected: bk.g.hasConnectedPad()
        }
      }
      async connectController() {
        return this.hid ? this.hid.request() : 0
      }
      async connectControllerIfNoneGranted() {
        this.hid && !await this.hid.hasGrantedController() && await this.hid.request()
      }
      async allowPhoneMotion() {
        var kk;
        await (null === (kk = this.phone) || void 0 === kk ? void 0 : kk.requestPermission())
      }
      drainLookDelta() {
        const kk = performance.now();
        kk - this.lastDrainMs > 500 && this.discardPending(), this.lastDrainMs = kk;
        const Fk = {
          yawDeg: this.pendingYawDeg,
          pitchDeg: this.pendingPitchDeg
        };
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0;
        const Bk = (0, dk.g)();
        return Bk.gyroAiming && (kk => {
          let {
            activation: Fk,
            isHeld: Bk,
            useButton: Rk,
            gyroButton: tk
          } = kk;
          return "always" === Fk || Bk("aiming" === Fk ? Rk : tk)
        })({
          activation: Bk.gyroActivation,
          isHeld: kk => wk.d.isButtonHeld(kk),
          useButton: (0, Xk.f)("use"),
          gyroButton: Bk.gyroButton
        }) ? ((kk, Fk) => ({
          ZE: -kk.yawDeg * Fk * Vk,
          pE: -kk.pitchDeg * Fk * Vk
        }))(Fk, Bk.gyroSensitivity) : Gk
      }
      discardPending() {
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0
      }
      injectMotion(kk, Fk) {
        this.feed(kk, Fk, "local", "injected")
      }
      getCalibration() {
        return this.processor.getCalibration()
      }
      feed(kk, Fk, Bk, Rk) {
        this.source !== Rk && (this.processor.reset(), this.source = Rk);
        const tk = this.processor.process(kk, Fk, Bk);
        this.pendingYawDeg += tk.yawDeg, this.pendingPitchDeg += tk.pitchDeg
      }
    }
    let Dk = null;
    const zk = () => (Dk || (Dk = new rk), Dk),
      Pk = () => {
        const [kk, Fk] = (0, Rk.useState)((() => zk().getStatus()));
        return (0, ak.f)(ck, Fk), (0, Rk.useEffect)((() => {
          Fk(zk().getStatus())
        }), []), kk
      }
  },
  8538: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Yk,
      f: () => wk,
      j: () => Rk,
      k: () => bk,
      l: () => dk,
      n: () => sk,
      q: () => Wk,
      s: () => fk,
      w: () => Ok,
      y: () => Lk,
      z: () => vk
    });
    const Rk = kk => "dualShock4" === kk || "dualSense" === kk,
      tk = 1356,
      ak = 1406,
      Xk = [{
        vendorId: tk,
        productId: 1476,
        kind: "dualShock4"
      }, {
        vendorId: tk,
        productId: 2508,
        kind: "dualShock4"
      }, {
        vendorId: tk,
        productId: 2976,
        kind: "dualShock4"
      }, {
        vendorId: tk,
        productId: 3302,
        kind: "dualSense"
      }, {
        vendorId: tk,
        productId: 3570,
        kind: "dualSense"
      }, {
        vendorId: ak,
        productId: 8201,
        kind: "switchPro"
      }, {
        vendorId: ak,
        productId: 8198,
        kind: "joyConLeft"
      }, {
        vendorId: ak,
        productId: 8199,
        kind: "joyConRight"
      }],
      bk = Xk.map((kk => {
        let {
          vendorId: Fk,
          productId: Bk
        } = kk;
        return {
          vendorId: Fk,
          productId: Bk
        }
      })),
      wk = (kk, Fk) => {
        var Bk, Rk;
        return null !== (Bk = null === (Rk = Xk.find((Bk => Bk.vendorId === kk && Bk.productId === Fk))) || void 0 === Rk ? void 0 : Rk.kind) && void 0 !== Bk ? Bk : null
      },
      dk = {
        dualShock4: "DualShock 4",
        dualSense: "DualSense",
        switchPro: "Switch Pro Controller",
        joyConLeft: "Joy-Con (L)",
        joyConRight: "Joy-Con (R)"
      },
      sk = {
        dualSense: 0,
        dualShock4: 0,
        switchPro: 0,
        joyConRight: 1,
        joyConLeft: 2
      },
      Vk = 2e3 / 32767,
      Jk = 1 / 8192,
      Ak = 936 / 13371,
      ek = (kk, Fk, Bk) => ({
        x: kk.getInt16(Fk, !0) * Bk,
        y: kk.getInt16(Fk + 2, !0) * Bk,
        z: kk.getInt16(Fk + 4, !0) * Bk
      }),
      yk = kk => 0 === kk.x && 0 === kk.y && 0 === kk.z,
      fk = (kk, Fk, Bk) => null === Fk ? null : "dualShock4" === kk ? 16 * (Bk - Fk & 65535) / 3 / 1e6 : (Bk - Fk >>> 0) / 3 / 1e6,
      mk = (kk, Fk) => "joyConRight" === Fk ? {
        x: kk.y,
        y: -kk.z,
        z: -kk.x
      } : {
        x: -kk.y,
        y: kk.z,
        z: -kk.x
      },
      Wk = (kk, Fk, Bk, tk) => Rk(kk) ? ((kk, Fk, Bk, Rk) => {
        const tk = ((kk, Fk, Bk) => "dualShock4" === kk ? 1 === Fk && Bk >= 63 ? 0 : 17 === Fk && Bk >= 65 ? 2 : null : 1 === Fk && Bk >= 62 ? 0 : 49 === Fk && Bk >= 63 ? 1 : null)(kk, Fk, Bk.byteLength);
        if (null === tk) return null;
        if (2976 === Rk && 1 === Fk && 0 !== (4 & Bk.getUint8(30))) return null;
        const ak = tk + ("dualShock4" === kk ? 12 : 15),
          Xk = ek(Bk, ak, Vk),
          bk = ek(Bk, ak + 6, Jk);
        return yk(Xk) && yk(bk) ? null : {
          readings: [{
            gyro: Xk,
            accel: bk
          }],
          dtSec: null,
          sensorClock: "dualShock4" === kk ? Bk.getUint16(tk + 9, !0) : Bk.getUint32(tk + 27, !0)
        }
      })(kk, Fk, Bk, tk) : ((kk, Fk, Bk) => {
        if (48 !== Fk && 49 !== Fk || Bk.byteLength < 48) return null;
        const Rk = [];
        for (let tk = 0; tk < 3; tk++) {
          const Fk = ek(Bk, 12 + 12 * tk, 244e-6),
            ak = ek(Bk, 18 + 12 * tk, Ak);
          if (yk(ak) && yk(Fk)) return null;
          Rk.push({
            gyro: mk(ak, kk),
            accel: mk(Fk, kk)
          })
        }
        return {
          readings: Rk,
          dtSec: .005,
          sensorClock: null
        }
      })(kk, Fk, Bk),
      vk = 1,
      ik = [0, 1, 64, 64, 0, 1, 64, 64],
      Yk = (kk, Fk, Bk) => new Uint8Array([15 & kk, ...ik, Fk, ...Bk]),
      Lk = [{
        subcommand: 64,
        args: [1]
      }, {
        subcommand: 3,
        args: [48]
      }],
      Ok = {
        dualShock4: [2, 5],
        dualSense: [5]
      }
  },
  7870: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => uk,
      g: () => rk,
      j: () => mk,
      m: () => Ak.h,
      q: () => Uk,
      t: () => gk,
      x: () => Wk,
      z: () => ck,
      B: () => Ak.m,
      C: () => Ak.o,
      E: () => Dk,
      I: () => Ak.r,
      M: () => Ek
    });
    var Rk = Bk(61),
      tk = Bk(22),
      ak = Bk(29),
      Xk = Bk(1387),
      bk = Bk(1239),
      wk = Bk(7840),
      dk = Bk(7874),
      sk = Bk(7819),
      Vk = Bk(7810),
      Jk = Bk(7880),
      Ak = Bk(1344),
      ek = Bk(7815),
      yk = Bk(8322),
      fk = Bk(4129);
    const mk = kk => !kk.repeat && !(0, yk.d)(kk.key),
      Wk = "PadHidesCursor";
    let vk = !1;
    const ik = kk => {
        kk !== vk && (vk = kk, document.documentElement.classList.toggle(Wk, kk))
      },
      Yk = new class {
        constructor() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
        observe(kk) {
          let Fk = !1,
            Bk = !1;
          kk.values.forEach(((kk, Rk) => {
            const tk = kk >= (this.buttonsDown[Rk] ? ek.T : ek.Q);
            tk && !this.buttonsDown[Rk] && (Fk = !0, Bk = !0), this.buttonsDown[Rk] = tk
          }));
          return [kk.leftStick, kk.rightStick].forEach(((kk, Rk) => {
            const tk = this.stickAnchors[Rk];
            Math.hypot(kk.x, kk.y) < (tk ? ek.T : .3) ? this.stickAnchors[Rk] = null : (!tk || Math.hypot(kk.x - tk.x, kk.y - tk.y) >= .3) && (this.stickAnchors[Rk] = {
              x: kk.x,
              y: kk.y
            }, Fk = !0, Bk ||= !tk)
          })), Fk && (this.lastActivityMs = kk.timestampMs), this.onlyMovedOn = Fk && !Bk, Fk
        }
        wasOnlyMoveOn() {
          return this.onlyMovedOn
        }
        isHolding(kk) {
          return !(kk - this.lastActivityMs >= 1e3) && (this.buttonsDown.some((kk => kk)) || this.stickAnchors.some((kk => null !== kk)))
        }
        isStickOffRest() {
          return this.stickAnchors.some((kk => null !== kk))
        }
        reset() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
      };
    let Lk = null,
      Ok = !1;
    const Ek = () => Ok;
    let Sk = null,
      Nk = !1,
      Hk = null;
    const uk = () => Hk;
    let Mk = !1;
    const gk = kk => {
        if (!Yk.observe(kk)) return !1;
        if (Mk && Yk.wasOnlyMoveOn() && !(0, Ak.h)()) return !1;
        Mk = !1, Ok = !1;
        const Fk = !(0, Ak.h)();
        return Fk && (Lk = kk, Hk = !vk && Nk && Sk ? {
          ...Sk
        } : null), Nk = !1, (0, Ak.m)("gamepad"), ik(!0), (0, Jk.m)((0, wk.h)()), Fk
      },
      Uk = kk => !(0, Ak.h)() || kk === Lk,
      ck = () => {
        Yk.reset()
      },
      Gk = () => {
        const kk = tk.c.get("activeInputDevice"),
          Fk = "gamepad" === kk ? Vk.g.getActivePad() : null;
        return {
          device: kk,
          inGame: (0, bk.o)(),
          padMovesMouse: null !== Fk && (0, sk.g)(Fk.id)
        }
      },
      Tk = kk => {
        document.pointerLockElement ? Sk = null : (Sk ??= {
          x: 0,
          y: 0
        }, Sk.x = kk.clientX, Sk.y = kk.clientY)
      },
      rk = () => {
        const kk = new fk.c,
          Fk = Fk => {
            kk.reset(), Mk = !1, (0, Ak.m)(Fk)
          },
          Bk = kk => {
            if (kk.isTrusted) {
              if (kk instanceof KeyboardEvent) {
                if ((0, Ak.k)(kk), !mk(kk)) return;
                Ok = !0
              }
              if (kk instanceof PointerEvent && "touch" === kk.pointerType) return Sk = null, void Fk("touch");
              kk instanceof PointerEvent && (Tk(kk), Nk = !0), ("pointerdown" !== kk.type || (kk => {
                let {
                  device: Fk,
                  inGame: Bk,
                  padMovesMouse: Rk
                } = kk;
                return !("gamepad" === Fk && Rk && Bk)
              })(Gk())) && Fk("keyboardMouse")
            }
          },
          Rk = kk => {
            kk.isTrusted && (Sk = null, Fk("touch"))
          },
          Xk = kk => {
            kk.isTrusted && "touch" !== kk.pointerType && !kk.relatedTarget && (Sk = null)
          },
          bk = Bk => {
            if (!Bk.isTrusted || "touch" === Bk.pointerType) return;
            Tk(Bk);
            const Rk = Bk.movementX || 0,
              ak = Bk.movementY || 0;
            if (0 === Rk && 0 === ak) return;
            if (Nk = !0, ik(!1), "keyboardMouse" === tk.c.get("activeInputDevice")) return;
            const Xk = Yk.isHolding(Bk.timeStamp),
              bk = Gk(),
              wk = (kk => {
                let {
                  device: Fk,
                  inGame: Bk,
                  padMovesMouse: Rk,
                  padHolding: tk
                } = kk;
                return ("gamepad" !== Fk || !Rk) && "keyboardMouse" !== Fk && (Bk || !tk)
              })({
                ...bk,
                inGame: bk.inGame && (0, dk.d)(),
                padHolding: Xk
              });
            wk && kk.add(Rk, ak, Bk.timeStamp) && (Fk("keyboardMouse"), Mk = Yk.isStickOffRest())
          },
          wk = kk => {
            ik("gamepad" === kk)
          },
          sk = {
            capture: !0,
            passive: !0
          };
        window.addEventListener("keydown", Bk, sk), window.addEventListener("pointerdown", Bk, sk), window.addEventListener("wheel", Bk, sk), window.addEventListener("touchstart", Rk, sk), window.addEventListener("pointermove", bk, sk), window.addEventListener("pointerout", Xk, sk);
        const Vk = ak.o.subscribe("appManagerUpdated|activeInputDevice", wk);
        return wk(tk.c.get("activeInputDevice")), () => {
          window.removeEventListener("keydown", Bk, sk), window.removeEventListener("pointerdown", Bk, sk), window.removeEventListener("wheel", Bk, sk), window.removeEventListener("touchstart", Rk, sk), window.removeEventListener("pointermove", bk, sk), window.removeEventListener("pointerout", Xk, sk), Sk = null, ak.o.unsubscribe(Vk), ik(!1)
        }
      },
      Dk = () => {
        const [kk, Fk] = (0, Rk.useState)(wk.h);
        return (0, Xk.f)(wk.c, (() => {
          Fk((0, wk.h)())
        })), (0, Xk.f)(Vk.c, (() => {
          Fk((0, wk.h)())
        })), kk
      }
  },
  7845: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Rk,
      h: () => tk
    });
    const Rk = ["xbox", "playstation", "nintendo", "steamdeck", "generic"],
      tk = kk => Rk.includes(kk)
  },
  7874: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => dk,
      d: () => sk,
      h: () => wk,
      k: () => bk
    });
    var Rk = Bk(22),
      tk = Bk(1585),
      ak = Bk(1654);
    const Xk = new Map,
      bk = (kk, Fk) => (Xk.has(kk) && console.warn(`Gameplay blocker "${kk}" registered twice; the newer one replaces it.`), Xk.set(kk, Fk), () => {
        Xk.get(kk) === Fk && Xk.delete(kk)
      }),
      wk = () => (0, ak.b)(document.activeElement),
      dk = function() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const [Fk, Bk] of Xk)
          if (!kk.includes(Fk) && Bk()) return Fk;
        return null
      },
      sk = function() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return "inGame" === Rk.c.get("gameState") && (!(0, tk.s)() && (!wk() && null === dk(kk)))
      }
  },
  7815: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      B: () => vk,
      E: () => Mk,
      H: () => ik,
      L: () => mk,
      N: () => fk,
      O: () => dk,
      Q: () => Jk,
      T: () => Ak,
      X: () => tk,
      Z: () => Rk,
      ab: () => Lk,
      c: () => Uk,
      cb: () => Hk,
      d: () => uk,
      e: () => sk,
      fb: () => gk,
      i: () => wk,
      ib: () => Yk,
      l: () => bk,
      o: () => Ek,
      r: () => Wk,
      u: () => Ok,
      w: () => ak,
      y: () => Vk
    });
    const Rk = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "View", "Menu", "LS", "RS", "Up", "Down", "Left", "Right", "Home"],
      tk = Rk.length,
      ak = function() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return {
          values: new Array(tk).fill(0),
          leftStick: {
            x: 0,
            y: 0
          },
          rightStick: {
            x: 0,
            y: 0
          },
          timestampMs: kk
        }
      },
      Xk = Object.fromEntries(Rk.map(((kk, Fk) => [kk, Fk]))),
      bk = kk => Xk[kk],
      wk = function(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .95;
        const Rk = Math.hypot(kk.x, kk.y);
        if (Rk <= Fk) return {
          x: 0,
          y: 0
        };
        const tk = Math.min(1, (Rk - Fk) / Math.max(1e-4, Bk - Fk));
        return {
          x: kk.x / Rk * tk,
          y: kk.y / Rk * tk
        }
      },
      dk = ["exponential", "linear", "boost"],
      sk = (kk, Fk) => {
        const Bk = Math.hypot(kk.x, kk.y);
        if (0 === Bk) return {
          x: 0,
          y: 0
        };
        const Rk = ((kk, Fk) => {
          const Bk = Math.max(0, Math.min(1, kk));
          return "linear" === Fk ? Bk : Bk * Bk
        })(Bk, Fk);
        return {
          x: kk.x / Bk * Rk,
          y: kk.y / Bk * Rk
        }
      },
      Vk = .5,
      Jk = .3,
      Ak = .2,
      ek = bk("LT"),
      yk = bk("RT"),
      fk = kk => kk === ek || kk === yk,
      mk = (kk, Fk) => {
        const Bk = bk(Fk);
        return fk(Bk) ? kk[Bk] > .35 : kk[Bk] >= Vk
      },
      Wk = (kk, Fk) => kk.map(((kk, Bk) => fk(Bk) ? Fk[Bk] ? kk > .35 : kk >= .55 : kk >= Vk)),
      vk = ["Up", "Down", "Left", "Right"],
      ik = kk => vk.includes(kk),
      Yk = function(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
        return Math.hypot(kk.x, kk.y) < Fk ? null : Math.abs(kk.x) > Math.abs(kk.y) ? kk.x > 0 ? "Right" : "Left" : kk.y > 0 ? "Down" : "Up"
      },
      Lk = {
        initialDelayMs: 350,
        intervalMs: 120
      },
      Ok = {
        initialDelayMs: 350,
        intervalMs: 150
      },
      Ek = ["default", "slow", "off"],
      Sk = 800,
      Nk = 250,
      Hk = (kk, Fk) => "off" === Fk ? null : "slow" === Fk ? {
        initialDelayMs: Math.max(kk.initialDelayMs, Sk),
        intervalMs: Math.max(kk.intervalMs, Nk)
      } : kk;
    class uk {
      constructor(kk) {
        this.readTiming = kk, this.Hb = !1, this.timing = null, this.nextFireMs = 0
      }
      update(kk, Fk) {
        return kk ? this.Hb ? !!(this.timing && Fk >= this.nextFireMs) && (this.nextFireMs = Fk + this.timing.intervalMs, !0) : (this.Hb = !0, this.timing = this.readTiming(), this.nextFireMs = Fk + (null !== (Bk = null === (Rk = this.timing) || void 0 === Rk ? void 0 : Rk.initialDelayMs) && void 0 !== Bk ? Bk : 0), !0) : (this.Hb = !1, !1);
        var Bk, Rk
      }
      reset() {
        this.Hb = !1
      }
    }
    const Mk = {
        initialDelayMs: 350,
        intervalMs: 80
      },
      gk = {
        initialDelayMs: 400,
        intervalMs: 90
      };
    class Uk {
      constructor(kk) {
        this.timer = kk, this.direction = null
      }
      update(kk, Fk) {
        return kk !== this.direction && (this.timer.reset(), this.direction = kk), this.timer.update(null !== kk, Fk) ? kk : null
      }
      reset() {
        this.timer.reset(), this.direction = null
      }
    }
  },
  8360: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => tk,
      d: () => ak
    });
    let Rk = -1 / 0;
    const tk = () => {
        Rk = performance.now()
      },
      ak = kk => performance.now() - Rk < kk
  },
  8325: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Xk,
      e: () => ak
    });
    var Rk = Bk(7840),
      tk = Bk(7815);
    const ak = kk => (0, tk.cb)(kk, (0, Rk.g)().buttonRepeat),
      Xk = kk => new tk.d((() => ak(kk)))
  },
  7852: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => wk,
      g: () => ak,
      h: () => bk
    });
    var Rk = Bk(29),
      tk = Bk(7840);
    const ak = (kk, Fk) => "OpenShop" === kk ? "shop" === Fk : "OpenLobbyLeaderboard" !== kk || "leaderboard" === Fk;
    let Xk = !1;
    const bk = kk => {
        kk !== Xk && (Xk = kk, Rk.o.Hf(tk.c, (0, tk.g)()))
      },
      wk = () => ((kk, Fk) => "shop" === kk && Fk ? "shop" : "leaderboard")((0, tk.g)().leaderboardButton, Xk)
  },
  7847: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      $: () => gk,
      C: () => Ak,
      G: () => Vk,
      I: () => ik,
      M: () => dk,
      Q: () => mk,
      R: () => Nk,
      S: () => vk,
      T: () => yk,
      U: () => fk,
      W: () => ek,
      Z: () => Wk,
      ab: () => ak,
      b: () => Gk,
      d: () => rk,
      db: () => Lk,
      gb: () => Tk,
      h: () => Hk,
      hb: () => Ek,
      i: () => Xk,
      j: () => Sk,
      k: () => Ok,
      m: () => Uk,
      o: () => ck,
      p: () => sk,
      r: () => wk,
      t: () => bk,
      v: () => Yk,
      y: () => Jk
    });
    var Rk = Bk(7831),
      tk = Bk(7815);
    const ak = {
        min: 25,
        max: 500,
        step: 5
      },
      Xk = {
        min: 25,
        max: 100,
        step: 5
      },
      bk = {
        min: 0,
        max: .4,
        step: .01
      },
      wk = {
        min: 25,
        max: 300,
        step: 5
      },
      dk = {
        min: .5,
        max: 6,
        step: .1
      },
      sk = (kk, Fk) => {
        if (!Number.isFinite(kk)) return Fk.min;
        const Bk = Fk.min + Math.round((kk - Fk.min) / Fk.step) * Fk.step,
          Rk = Math.min(Fk.max, Math.max(Fk.min, Bk));
        return Math.round(1e3 * Rk) / 1e3
      },
      Vk = kk => `${Math.round(kk)}%`,
      Jk = kk => Vk(100 * kk),
      Ak = kk => `${kk.toFixed(1)}\xd7`,
      ek = [{
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
      yk = [{
        value: "exponential",
        labelKey: "controller:settingsCurveExponential"
      }, {
        value: "linear",
        labelKey: "controller:settingsCurveLinear"
      }, {
        value: "boost",
        labelKey: "controller:settingsCurveBoost"
      }],
      fk = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "focus",
        labelKey: "controller:settingsMenuNavFocus"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      mk = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "slot",
        labelKey: "controller:settingsInventoryNavSlot"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      Wk = [{
        value: "wheel",
        labelKey: "controller:settingsQuickChatWheel"
      }, {
        value: "off",
        labelKey: "controller:settingsQuickChatOff"
      }],
      vk = [{
        value: "shop",
        labelKey: "controller:settingsLeaderboardButtonShop"
      }, {
        value: "leaderboard",
        labelKey: "controller:settingsLeaderboardButtonLeaderboard"
      }],
      ik = [{
        value: "always",
        labelKey: "controller:settingsGyroAlways"
      }, {
        value: "aiming",
        labelKey: "controller:settingsGyroWhileAiming"
      }, {
        value: "button",
        labelKey: "controller:settingsGyroWhileButton"
      }],
      Yk = [{
        value: "tapHold",
        labelKey: "controller:settingsEmoteButtonTapHold"
      }, {
        value: "wheel",
        labelKey: "controller:settingsEmoteButtonWheel"
      }],
      Lk = [{
        value: "toggle",
        labelKey: "controller:settingsSneakToggle"
      }, {
        value: "hold",
        labelKey: "controller:settingsSneakHold"
      }],
      Ok = [{
        value: "default",
        labelKey: "controller:settingsButtonRepeatDefault"
      }, {
        value: "slow",
        labelKey: "controller:settingsButtonRepeatSlow"
      }, {
        value: "off",
        labelKey: "controller:settingsButtonRepeatOff"
      }],
      Ek = [{
        value: "short",
        labelKey: "controller:settingsTapHoldShort"
      }, {
        value: "medium",
        labelKey: "controller:settingsTapHoldMedium"
      }, {
        value: "long",
        labelKey: "controller:settingsTapHoldLong"
      }],
      Sk = [{
        value: "hold",
        labelKey: "controller:settingsAttackHold"
      }, {
        value: "toggle",
        labelKey: "controller:settingsAttackToggle"
      }],
      Nk = {
        southpaw: "controller:settingsLayoutSouthpaw",
        triggersSwapped: "controller:settingsLayoutTriggersSwapped"
      },
      Hk = {
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
      uk = {
        gameplay: "controller:settingsGroupGameplay",
        menu: "controller:settingsGroupMenus",
        inventory: "controller:settingsGroupInventory",
        keyboard: "controller:settingsGroupKeyboard"
      },
      Mk = [{
        kind: "fixed",
        stick: "move",
        labelKey: "controller:settingsActionMove"
      }, {
        kind: "fixed",
        stick: "look",
        labelKey: "controller:settingsActionLook"
      }],
      gk = Rk.e.map((kk => {
        let {
          group: Fk,
          actions: Bk
        } = kk;
        const Rk = Bk.map((kk => ({
          kind: "action",
          action: kk
        })));
        return {
          titleKey: uk[Fk],
          rows: "gameplay" === Fk ? [...Mk, ...Rk] : Rk
        }
      })),
      Uk = tk.Z.filter((kk => "Home" !== kk)),
      ck = 1e4;
    class Gk {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
        this.cancelButton = kk, this.openButton = Fk, this.accepts = Bk, this.startMs = null, this.ignoredUntilMs = new Map, this.cancelDownAtMs = null
      }
      update(kk, Fk) {
        var Bk;
        this.updateIgnored(kk, Fk);
        const Rk = Fk - (null !== (Bk = this.startMs) && void 0 !== Bk ? Bk : Fk) >= 250;
        for (const tk of Uk)
          if (tk !== this.cancelButton && Rk && !this.ignoredUntilMs.has(tk) && kk.wasPressed(tk) && this.accepts(tk)) return {
            kind: "bind",
            button: tk
          };
        if (this.ignoredUntilMs.has(this.cancelButton)) return null;
        if (kk.wasPressed(this.cancelButton)) {
          if (!this.accepts(this.cancelButton)) return {
            kind: "cancel"
          };
          this.cancelDownAtMs = Fk
        }
        return null === this.cancelDownAtMs ? null : kk.isHeld(this.cancelButton) && Fk - this.cancelDownAtMs >= 700 ? (this.cancelDownAtMs = null, {
          kind: "bind",
          button: this.cancelButton
        }) : kk.wasReleased(this.cancelButton) ? (this.cancelDownAtMs = null, {
          kind: "cancel"
        }) : null
      }
      getBindHoldProgress(kk) {
        return null === this.cancelDownAtMs ? 0 : Math.min(1, (kk - this.cancelDownAtMs) / 700)
      }
      updateIgnored(kk, Fk) {
        if (null === this.startMs) {
          this.startMs = Fk;
          for (const Fk of Uk) kk.isDown(Fk) && this.ignoredUntilMs.set(Fk, 1 / 0);
          this.openButton && !this.ignoredUntilMs.has(this.openButton) && this.ignoredUntilMs.set(this.openButton, Fk + 250)
        }
        for (const [Bk, Rk] of this.ignoredUntilMs) {
          const tk = kk.isDown(Bk);
          Rk === 1 / 0 ? tk || Bk !== this.openButton ? tk || this.ignoredUntilMs.delete(Bk) : this.ignoredUntilMs.set(Bk, Fk + 250) : Fk >= Rk ? this.ignoredUntilMs.delete(Bk) : tk && this.ignoredUntilMs.set(Bk, 1 / 0)
        }
      }
    }
    const Tk = 6e3;
    class rk {
      constructor() {
        this.downAtMs = null, this.pressesAtMs = []
      }
      update(kk, Fk) {
        let {
          pressed: Bk,
          Hb: Rk
        } = kk;
        if (Bk) {
          const kk = this.pressesAtMs.at(-1);
          if (this.pressesAtMs = void 0 !== kk && Fk - kk < 1500 ? [...this.pressesAtMs, Fk] : [Fk], this.pressesAtMs.length >= 3) return 1
        }
        return Rk ? (this.downAtMs ??= Fk, Math.min(1, (Fk - this.downAtMs) / 1500)) : (this.downAtMs = null, 0)
      }
    }
  },
  4717: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => ak,
      i: () => Xk
    });
    var Rk = Bk(61);
    const tk = new WeakMap,
      ak = kk => {
        var Fk;
        const Bk = kk.closest("[data-pad-slider]");
        return Bk && null !== (Fk = tk.get(Bk)) && void 0 !== Fk ? Fk : null
      },
      Xk = (kk, Fk) => {
        const Bk = (0, Rk.useRef)(Fk);
        Bk.current = Fk, (0, Rk.useEffect)((() => {
          if (kk.current) return ((kk, Fk) => (tk.set(kk, Fk), () => {
            tk.get(kk) === Fk && tk.delete(kk)
          }))(kk.current, {
            adjust: kk => {
              Bk.current.adjust(kk)
            },
            setFraction: kk => {
              Bk.current.setFraction(kk)
            },
            endDrag: () => {
              Bk.current.endDrag()
            }
          })
        }), [kk])
      }
  },
  8381: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => ak,
      g: () => tk
    });
    var Rk = Bk(29);
    const tk = "localBlockBroken";

    function ak() {
      return {
        onPlayerChangeBlock(kk, Fk, Bk, ak, Xk, bk) {
          "Air" === bk && Rk.o.Hf(tk)
        }
      }
    }
  },
  7889: (kk, Fk, Bk) => {
    var Rk = {
      "./nintendo/A.svg": 7894,
      "./nintendo/B.svg": 7901,
      "./nintendo/Down.svg": 7910,
      "./nintendo/Home.svg": 7916,
      "./nintendo/LB.svg": 7922,
      "./nintendo/LS.svg": 7924,
      "./nintendo/LT.svg": 7932,
      "./nintendo/Left.svg": 7934,
      "./nintendo/LeftStick.svg": 7941,
      "./nintendo/Menu.svg": 7946,
      "./nintendo/RB.svg": 7955,
      "./nintendo/RS.svg": 7960,
      "./nintendo/RT.svg": 7968,
      "./nintendo/Right.svg": 7974,
      "./nintendo/RightStick.svg": 7978,
      "./nintendo/Up.svg": 7987,
      "./nintendo/View.svg": 7996,
      "./nintendo/X.svg": 8005,
      "./nintendo/Y.svg": 8013,
      "./playstation/A.svg": 8019,
      "./playstation/B.svg": 8028,
      "./playstation/Down.svg": 8037,
      "./playstation/Home.svg": 8039,
      "./playstation/LB.svg": 8046,
      "./playstation/LS.svg": 8051,
      "./playstation/LT.svg": 8060,
      "./playstation/Left.svg": 8069,
      "./playstation/LeftStick.svg": 8074,
      "./playstation/Menu.svg": 8083,
      "./playstation/RB.svg": 8090,
      "./playstation/RS.svg": 8099,
      "./playstation/RT.svg": 8101,
      "./playstation/Right.svg": 8110,
      "./playstation/RightStick.svg": 8112,
      "./playstation/Up.svg": 8114,
      "./playstation/View.svg": 8117,
      "./playstation/X.svg": 8126,
      "./playstation/Y.svg": 8128,
      "./steamdeck/A.svg": 8131,
      "./steamdeck/B.svg": 8140,
      "./steamdeck/Down.svg": 8142,
      "./steamdeck/Home.svg": 8150,
      "./steamdeck/LB.svg": 8152,
      "./steamdeck/LS.svg": 8154,
      "./steamdeck/LT.svg": 8157,
      "./steamdeck/Left.svg": 8159,
      "./steamdeck/LeftStick.svg": 8166,
      "./steamdeck/Menu.svg": 8174,
      "./steamdeck/RB.svg": 8183,
      "./steamdeck/RS.svg": 8187,
      "./steamdeck/RT.svg": 8189,
      "./steamdeck/Right.svg": 8192,
      "./steamdeck/RightStick.svg": 8194,
      "./steamdeck/Up.svg": 8202,
      "./steamdeck/View.svg": 8210,
      "./steamdeck/X.svg": 8215,
      "./steamdeck/Y.svg": 8223,
      "./xbox/A.svg": 8227,
      "./xbox/B.svg": 8232,
      "./xbox/Down.svg": 8240,
      "./xbox/Home.svg": 8249,
      "./xbox/LB.svg": 8251,
      "./xbox/LS.svg": 8257,
      "./xbox/LT.svg": 8262,
      "./xbox/Left.svg": 8269,
      "./xbox/LeftStick.svg": 8271,
      "./xbox/Menu.svg": 8273,
      "./xbox/RB.svg": 8279,
      "./xbox/RS.svg": 8286,
      "./xbox/RT.svg": 8289,
      "./xbox/Right.svg": 8291,
      "./xbox/RightStick.svg": 8294,
      "./xbox/Up.svg": 8299,
      "./xbox/View.svg": 8308,
      "./xbox/X.svg": 8313,
      "./xbox/Y.svg": 8315
    };

    function tk(kk) {
      var Fk = ak(kk);
      return Bk(Fk)
    }

    function ak(kk) {
      if (!Bk.o(Rk, kk)) {
        var Fk = new Error("Cannot find module '" + kk + "'");
        throw Fk.code = "MODULE_NOT_FOUND", Fk
      }
      return Rk[kk]
    }
    tk.keys = function() {
      return Object.keys(Rk)
    }, tk.resolve = ak, kk.exports = tk, tk.id = 7889
  },
  7894: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/A.926fb88933484dfbde14.svg"
  },
  7901: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/B.9f5ec099f78f84e44427.svg"
  },
  7910: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  7916: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  7922: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/LB.3a20b15927b55d5d8b60.svg"
  },
  7924: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  7932: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/LT.9fdc5e69011b9d41f50a.svg"
  },
  7934: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  7941: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  7946: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Menu.c903a662eb685211e52e.svg"
  },
  7955: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/RB.bba470ddb76ceec5d168.svg"
  },
  7960: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  7968: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/RT.e5a9fbcc3c79550111ca.svg"
  },
  7974: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  7978: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  7987: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  7996: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/View.0c9378b5d720a636d50d.svg"
  },
  8005: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/X.c9377519af94e6dce1d7.svg"
  },
  8013: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Y.62d8c17731dd2e172426.svg"
  },
  8019: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/A.958a6de9474f8d0c9caf.svg"
  },
  8028: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/B.d05958bfa88a1162b47a.svg"
  },
  8037: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Down.db68fb3980768eb54671.svg"
  },
  8039: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  8046: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/LB.37a3c5128c958ec2a0c2.svg"
  },
  8051: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/LS.15b0cc5bf3f2fe7bbd8b.svg"
  },
  8060: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/LT.5412ae5222c69f8c833f.svg"
  },
  8069: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Left.4457b2895ce94a5df32e.svg"
  },
  8074: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8083: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Menu.1e8427f8133c9d456c53.svg"
  },
  8090: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/RB.c96c4aa2590209e930c7.svg"
  },
  8099: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/RS.8d70d147cf1ab136e845.svg"
  },
  8101: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/RT.1e4691bb5a7c049693df.svg"
  },
  8110: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Right.a1e101413040c540b879.svg"
  },
  8112: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8114: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Up.7544a65ad4f611a55775.svg"
  },
  8117: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/View.003cae39de89cae0b9d8.svg"
  },
  8126: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/X.d88b6e62dd8fb4bda32a.svg"
  },
  8128: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Y.428d3e70775877892f82.svg"
  },
  8131: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8140: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8142: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8150: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Home.ea8b009cfa9562aa644e.svg"
  },
  8152: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/LB.f283d355d22fc107d6d6.svg"
  },
  8154: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8157: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/LT.13e66c122e7ee04bb876.svg"
  },
  8159: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8166: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8174: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Menu.90fc4e918900eb5062a0.svg"
  },
  8183: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/RB.918a7f16dc054d96b6f3.svg"
  },
  8187: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8189: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/RT.a0523211130959598bed.svg"
  },
  8192: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8194: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8202: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8210: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/View.0bc952e292c28c3baac2.svg"
  },
  8215: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8223: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  },
  8227: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8232: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8240: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8249: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Home.8898f76b20962fe52ab7.svg"
  },
  8251: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/LB.689ba3703ae248f2e4cc.svg"
  },
  8257: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8262: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/LT.9c2d10d335ab5c590525.svg"
  },
  8269: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8271: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8273: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Menu.9e485791ea97009871ca.svg"
  },
  8279: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/RB.7ee5ce48dd551f993f80.svg"
  },
  8286: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8289: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/RT.903ecadc55a9e9e00f07.svg"
  },
  8291: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8294: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8299: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8308: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/View.3c5eeb34f0413bde4a65.svg"
  },
  8313: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8315: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);