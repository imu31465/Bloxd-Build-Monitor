export const id = 102;
export const ids = [102];
export const modules = {
  41856: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      startWasmPadGameplay: () => NH
    });
    LH(41860);
    var AH = LH(41864),
      rH = LH(41884),
      SH = LH(2036),
      hH = LH(41898),
      tH = LH(5268),
      zH = LH(5255),
      CH = LH(41905),
      EH = LH(41911),
      XH = LH(5279),
      GH = LH(41985),
      YH = LH(2605),
      uH = LH(9543),
      QH = LH(41871),
      WH = LH(9522),
      MH = LH(40035);
    const xH = HH => {
        const BH = XH.c.indexOf(HH);
        if (BH < 0) throw new Error(`No core action "${HH}"`);
        return BH
      },
      vH = xH("primary-fire"),
      PH = xH("alt-fire"),
      TH = xH("mid-fire"),
      UH = xH("jump"),
      VH = xH("ReloadGun"),
      OH = xH("SwapCameraZoom"),
      bH = xH("TouchAction1"),
      kH = {
        SpecialAction1: xH("SpecialAction1"),
        SpecialAction2: xH("SpecialAction2")
      },
      mH = (HH, BH) => {
        (0, YH.w)(tH.M.PadAction, HH, 0, 0, (0, YH.u)(BH, performance.now()))
      },
      oH = HH => {
        mH(HH, hH.xd.Down)
      },
      IH = HH => {
        mH(HH, 0)
      },
      fH = HH => {
        oH(HH), IH(HH)
      },
      lH = () => {
        const HH = (0, EH.i)();
        return null !== HH && void 0 !== HH && HH.isCoreRunning ? HH : null
      },
      KH = HH => hH.y.playerFlags(HH.api.apiView, 0),
      cH = HH => null !== HH && hH.y.targetBlockId(HH.api.apiView, 0) !== hH.cd,
      eH = () => {
        const HH = (0, uH.d)(),
          BH = new QH.b;
        let LH = !1;
        const AH = (HH, BH) => {
            (0, YH.w)(tH.M.PadLook, hH.Hd.Rate, HH, BH, 0)
          },
          rH = () => {
            LH = !1, BH.reset(), AH(0, 0)
          };
        return {
          update: (rH, SH, zH) => {
            LH || (HH.discardPending(), LH = !0);
            const CH = (0, QH.q)(BH, rH, SH, zH, performance.now());
            AH(CH.yawRadPerSec, CH.pitchRadPerSec);
            const EH = HH.drainLookDelta();
            0 === EH.lq && 0 === EH.Fq || (0, YH.w)(tH.M.PadLook, hH.Hd.Gyro, EH.lq, EH.Fq, 0)
          },
          release: rH,
          uninstall: rH
        }
      },
      qH = () => {
        const HH = lH();
        return null !== HH && 0 !== (KH(HH) & hH.Md.PadSneakToggled)
      },
      gH = () => {
        const HH = (HH => {
          const BH = HH => function() {
            return (0, GH.c)(), HH(...arguments)
          };
          return {
            primaryFireDown: BH((HH => (mH(vH, hH.xd.Down | (HH ? hH.xd.Repeat : 0)), 0))),
            primaryFireUp: BH((() => {
              IH(vH)
            })),
            altFireDown: BH((() => (oH(PH), 0))),
            altFireUp: BH((() => {
              IH(PH)
            })),
            jumpDown: BH((() => {
              fH(UH)
            })),
            specialActionDown: BH((HH => {
              oH(kH[HH])
            })),
            specialActionUp: BH((HH => {
              IH(kH[HH])
            })),
            reloadGun: BH((() => {
              fH(VH)
            })),
            dropItem: BH((HH => {
              mH(hH.Ad.Drop, hH.xd.Down | (HH ? hH.xd.Stack : 0))
            })),
            swapCameraZoom: BH((() => {
              fH(OH)
            })),
            pickBlock: BH((() => (fH(TH), cH(HH()))))
          }
        })(lH);
        let BH = !1,
          LH = null;
        const AH = () => {
          var HH;
          null === (HH = LH) || void 0 === HH || HH(), LH = null
        };
        return {
          bodies: () => HH,
          look: eH(),
          move: (HH, LH) => {
            var rH;
            AH();
            const {
              bits: SH,
              flips: tH
            } = (HH => {
              if (null === HH) return {
                bits: hH.Ed.Peek,
                flips: 0
              };
              const BH = HH.sneakHeld ? hH.Ed.SneakHeld : 0;
              return "hold" === HH.mode ? {
                bits: BH | hH.Ed.SneakHoldMode,
                flips: HH.sneakTogglePressed ? 1 : 0
              } : {
                bits: BH,
                flips: HH.sneakPressed || HH.sneakTogglePressed ? 1 : 0
              }
            })(LH);
            null !== (rH = lH()) && void 0 !== rH && rH.padMove(HH.x, HH.y, HH.magnitude, HH.headingOffset, (HH => hH.Ed.Active | (HH.jumpHeld ? hH.Ed.JumpHeld : 0) | (HH.jumpPressed ? hH.Ed.JumpPressed : 0) | (HH.running ? hH.Ed.Running : 0) | (HH.sprintHeld ? hH.Ed.SprintHeld : 0))(HH) | SH, tH) && (BH = !0), (0, WH.h)(qH())
          },
          stopMoving: () => {
            var HH;
            BH && (BH = !(null !== (HH = lH()) && void 0 !== HH && HH.padMove(0, 0, 0, 0, 0, 0)), AH(), LH = (0, zH.v)((() => {
              AH(), (0, WH.h)(qH())
            })))
          },
          uninstall: AH,
          deviceChanged: HH => {
            var LH;
            "touch" === HH ? ((0, WH.h)(!1), null !== (LH = lH()) && void 0 !== LH && LH.padMove(0, 0, 0, 0, hH.Ed.EndToggle, 0) && (BH = !1)) : "gamepad" === HH && (0, WH.h)(qH())
          },
          hasPlayer: () => null !== lH(),
          isPlayerDead: () => {
            var HH;
            return !1 === (null === (HH = lH()) || void 0 === HH ? void 0 : HH.localPlayerAlive())
          },
          isReplayMode: () => {
            const HH = lH();
            return null !== HH && 0 !== (KH(HH) & hH.Md.Replay)
          },
          isFreeCameraOn: () => {
            const HH = lH();
            return null !== HH && 0 !== (KH(HH) & hH.Md.FreeCam)
          },
          targetsBlock: () => cH(lH()),
          selectedSlotEmpty: () => {
            var HH;
            return !(null !== (HH = lH()) && void 0 !== HH && HH.items.LX())
          },
          pickBlockAllowed: () => !!SH.e.get("creative") && !!SH.e.get("canPickBlocks"),
          scrollHotbar: HH => {
            mH(hH.Ad.Hotbar, hH.xd.Down | (HH > 0 ? hH.xd.Next : 0))
          },
          hasFullInventory: CH.m,
          hasLobbyTab: () => (0, MH.e)({
            lobbyLeaderboardInfo: SH.e.get("lobbyLeaderboardInfo"),
            lobbyManage: SH.e.get("lobbyManage")
          }),
          contextActionInputs: () => {
            var HH, BH, LH, AH;
            const rH = lH();
            return {
              holdingGun: !1 !== (null === rH || void 0 === rH ? void 0 : rH.localPlayerAlive()) && "Gun" === (null === rH || void 0 === rH || null === (HH = rH.items.LX()) || void 0 === HH || null === (BH = HH.typeObj) || void 0 === BH ? void 0 : BH.type),
              customButtons: null !== (LH = SH.e.get("customButtons")) && void 0 !== LH ? LH : null,
              touchscreenActionButton: null !== (AH = SH.e.get("touchscreenActionButton")) && void 0 !== AH ? AH : null
            }
          },
          pressTouchButton: HH => {
            HH ? oH(bH) : IH(bH)
          }
        }
      },
      NH = () => {
        const HH = (0, rH.d)(gH()),
          BH = (0, AH.e)(),
          LH = null;
        return () => {
          HH(), BH(), null === LH || void 0 === LH || LH()
        }
      }
  },
  5255: (HH, BH, LH) => {
    LH.d(BH, {
      D: () => oH,
      F: () => xH,
      J: () => hH,
      L: () => tH,
      P: () => bH,
      c: () => OH,
      d: () => PH,
      e: () => fH,
      g: () => IH,
      k: () => MH,
      n: () => UH,
      p: () => vH,
      r: () => TH,
      v: () => kH,
      z: () => mH
    });
    var AH = LH(5260);
    const rH = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let SH = rH;

    function hH(HH) {
      SH = null !== HH && void 0 !== HH ? HH : rH
    }

    function tH() {
      return SH
    }
    const zH = new Set,
      CH = new Set;
    let EH = -1;
    const XH = new Set,
      GH = new Set;
    let YH = 0,
      uH = 0;
    const QH = new Set,
      WH = new Set;

    function MH(HH) {
      return zH.add(HH), () => {
        zH.delete(HH)
      }
    }

    function xH(HH, BH) {
      for (const AH of zH) try {
        AH(HH)
      } catch (LH) {
        BH(LH)
      }
    }

    function vH(HH) {
      return CH.add(HH), () => {
        CH.delete(HH)
      }
    }

    function PH(HH, BH) {
      const LH = EH < 0 ? 0 : HH - EH;
      EH = HH;
      for (const rH of CH) try {
        rH(LH)
      } catch (AH) {
        BH(AH)
      }
    }

    function TH(HH) {
      return XH.add(HH), () => {
        XH.delete(HH)
      }
    }

    function UH(HH) {
      return GH.add(HH), () => {
        GH.delete(HH)
      }
    }
    let VH = 0;

    function OH(HH) {
      VH += HH
    }

    function bH() {
      const HH = VH;
      return VH = 0, HH
    }

    function kH(HH) {
      return QH.add(HH), () => {
        QH.delete(HH)
      }
    }

    function mH(HH) {
      return WH.add(HH), () => {
        WH.delete(HH)
      }
    }

    function oH() {
      YH = 0, uH = 0, EH = -1
    }

    function IH(HH, BH) {
      if ("paced" === HH) return uH += BH, null;
      if ("drawn" !== HH && "skipped" !== HH) return null;
      const LH = BH + uH;
      return uH = 0, LH
    }

    function fH(HH, BH, LH, rH) {
      const SH = (0, AH.e)(BH),
        hH = HH > 0 ? performance.now() : 0;
      for (let AH = 0; AH < HH; AH++)
        for (const HH of QH) try {
          HH()
        } catch (tH) {
          rH(tH)
        }
      if (HH > 0 && OH(performance.now() - hH), null !== LH) {
        for (const HH of XH) try {
          HH(LH)
        } catch (tH) {
          rH(tH)
        }
        YH += LH
      }
      if ("drawn" === BH) {
        const HH = YH;
        YH = 0;
        for (const BH of GH) try {
          BH(HH)
        } catch (tH) {
          rH(tH)
        }
      }
      for (const AH of WH) try {
        AH(HH, SH)
      } catch (tH) {
        rH(tH)
      }
    }
  },
  5279: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => rH,
      f: () => SH,
      i: () => hH,
      j: () => AH,
      k: () => tH
    });
    const AH = {
        Mouse1: 1,
        Mouse2: 2,
        Mouse3: 3,
        "Alt+Left Click": 4,
        F2: 5,
        F4: 6,
        F5: 7,
        F8: 8,
        F9: 9,
        Digit0: 10,
        Digit1: 11,
        Digit2: 12,
        Digit3: 13,
        Digit4: 14,
        Digit5: 15,
        Digit6: 16,
        Digit7: 17,
        Digit8: 18,
        Digit9: 19,
        KeyQ: 20,
        KeyW: 21,
        KeyE: 22,
        KeyR: 23,
        KeyT: 24,
        KeyY: 25,
        KeyU: 26,
        KeyI: 27,
        KeyO: 28,
        KeyP: 29,
        KeyA: 30,
        KeyS: 31,
        KeyD: 32,
        KeyF: 33,
        KeyG: 34,
        KeyH: 35,
        KeyJ: 36,
        KeyK: 37,
        KeyL: 38,
        KeyZ: 39,
        KeyX: 40,
        KeyC: 41,
        KeyV: 42,
        KeyB: 43,
        KeyN: 44,
        KeyM: 45,
        ArrowUp: 46,
        ArrowLeft: 47,
        ArrowRight: 48,
        ArrowDown: 49,
        ShiftLeft: 50,
        ShiftRight: 51,
        ControlLeft: 52,
        ControlRight: 53,
        Minus: 54,
        Equal: 55,
        BracketLeft: 56,
        BracketRight: 57,
        Tab: 58,
        Space: 59,
        CapsLock: 60,
        Backslash: 61,
        IntlBackslash: 62,
        PageUp: 63,
        PageDown: 64,
        Backquote: 65,
        Comma: 66,
        IntlRo: 67,
        IntlYen: 68,
        Period: 69,
        Quote: 70,
        Semicolon: 71,
        Slash: 72,
        AltLeft: 73,
        AltRight: 74,
        Backspace: 75,
        ContextMenu: 76,
        Enter: 77,
        MetaLeft: 78,
        MetaRight: 79,
        Convert: 80,
        KanaMode: 81,
        Lang1: 82,
        Lang2: 83,
        Lang3: 84,
        Lang4: 85,
        Lang5: 86,
        NonConvert: 87,
        Delete: 88,
        End: 89,
        Help: 90,
        Home: 91,
        Insert: 92,
        NumLock: 93,
        Numpad0: 94,
        Numpad1: 95,
        Numpad2: 96,
        Numpad3: 97,
        Numpad4: 98,
        Numpad5: 99,
        Numpad6: 100,
        Numpad7: 101,
        Numpad8: 102,
        Numpad9: 103,
        NumpadAdd: 104,
        NumpadBackspace: 105,
        NumpadClear: 106,
        NumpadClearEntry: 107,
        NumpadComma: 108,
        NumpadDecimal: 109,
        NumpadDivide: 110,
        NumpadEnter: 111,
        NumpadEqual: 112,
        NumpadHash: 113,
        NumpadMemoryAdd: 114,
        NumpadMemoryClear: 115,
        NumpadMemoryRecall: 116,
        NumpadMemoryStore: 117,
        NumpadMemorySubtract: 118,
        NumpadMultiply: 119,
        NumpadParenLeft: 120,
        NumpadParenRight: 121,
        NumpadStar: 122,
        NumpadSubtract: 123,
        Escape: 124,
        F1: 125,
        F3: 126,
        F6: 127,
        F7: 128,
        F10: 129,
        F11: 130,
        F12: 131,
        F13: 132,
        F14: 133,
        F15: 134,
        F16: 135,
        F17: 136,
        F18: 137,
        F19: 138,
        F20: 139,
        F21: 140,
        F22: 141,
        F23: 142,
        F24: 143,
        Fn: 144,
        FnLock: 145,
        PrintScreen: 146,
        ScrollLock: 147,
        Pause: 148,
        BrowserBack: 149,
        BrowserFavorites: 150,
        BrowserForward: 151,
        BrowserHome: 152,
        BrowserRefresh: 153,
        BrowserSearch: 154,
        BrowserStop: 155,
        Eject: 156,
        LaunchApp1: 157,
        LaunchApp2: 158,
        LaunchMail: 159,
        MediaPlayPause: 160,
        MediaSelect: 161,
        MediaStop: 162,
        MediaTrackNext: 163,
        MediaTrackPrevious: 164,
        Power: 165,
        Sleep: 166,
        AudioVolumeDown: 167,
        AudioVolumeMute: 168,
        AudioVolumeUp: 169,
        WakeUp: 170,
        Hyper: 171,
        Super: 172,
        Turbo: 173,
        Abort: 174,
        Resume: 175,
        Suspend: 176,
        Again: 177,
        Copy: 178,
        Cut: 179,
        Find: 180,
        Open: 181,
        Paste: 182,
        Props: 183,
        Select: 184,
        Undo: 185,
        Hiragana: 186,
        Katakana: 187,
        TouchJump: 188,
        TouchCrouch: 189,
        TouchPov: 190,
        TouchAction1: 191,
        TouchAction2: 192,
        TouchAction3: 193,
        TouchAttack: 194,
        TouchUse: 195
      },
      rH = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      SH = {
        forward: [21, 46],
        backward: [31, 49],
        left: [30, 47],
        right: [32, 48],
        sprint: [50, 51],
        jump: [59],
        crouch: [52, 41, 60, 61, 62, 53],
        "primary-fire": [1],
        "alt-fire": [3, 22],
        SpecialAction1: [23],
        SpecialAction2: [33],
        ReloadGun: [23],
        DropItem: [20],
        "mid-fire": [2, 4],
        Zoom: [42],
        SwapCameraZoom: [29, 7],
        OpenInventory: [58],
        OpenLobbyLeaderboard: [34],
        OpenShop: [43],
        OpenCharacterCustomization: [44],
        OpenSettings: [28],
        OpenInviteLink: [27],
        OpenTasksAndLeaderboard: [45],
        OpenCodeEditor: [8],
        OpenEmoteWheel: [39, 2],
        HideUi: [6],
        ShowDebugOverlay: [5],
        HotBarSlot1: [11],
        HotBarSlot2: [12],
        HotBarSlot3: [13],
        HotBarSlot4: [14],
        HotBarSlot5: [15],
        HotBarSlot6: [16],
        HotBarSlot7: [17],
        HotBarSlot8: [18],
        HotBarSlot9: [19],
        HotBarSlot10: [10],
        toggleFreeCam: [9],
        freeCamForward: [46],
        freeCamBackward: [49],
        freeCamLeft: [47],
        freeCamRight: [48],
        freeCamUp: [63],
        freeCamDown: [64],
        recordGame: [56],
        recordClip: [35],
        replayViewerOpen: [26],
        replayPlayPause: [42, 58],
        replaySkipBack: [20],
        replaySkipForward: [22],
        replayChangeCameraMode: [23],
        replayLoad: [38],
        replaySave: [37],
        replaySaveAs: [36],
        replayExit: [29],
        replaySpeedUp: [55],
        replaySpeedDown: [54],
        replayTimelineZoomIn: [10],
        replayTimelineZoomOut: [19],
        replayRecordKeyframe: [24],
        replayExportVideo: [40]
      },
      hH = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      tH = [16]
  },
  41985: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => hH,
      d: () => SH,
      g: () => rH
    });
    let AH = null;

    function rH(HH) {
      AH = HH
    }

    function SH(HH) {
      AH === HH && (AH = null)
    }

    function hH() {
      var HH;
      null === (HH = AH) || void 0 === HH || HH()
    }
  },
  5288: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => tH,
      g: () => hH,
      k: () => CH
    });
    var AH = LH(2600),
      rH = LH(2605);
    const SH = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function hH(HH) {
      return HH instanceof HTMLElement && (!!(HH.isContentEditable || HH instanceof HTMLTextAreaElement || HH instanceof HTMLSelectElement) || HH instanceof HTMLInputElement && !SH.has(HH.type))
    }

    function tH(HH) {
      let BH = null;
      const LH = LH => {
          const rH = hH(LH);
          rH !== BH && (BH = rH, HH(AH.g.UiCapture, AH.w.Keyboard, 0, 0, rH ? AH.w.Keyboard : 0))
        },
        rH = HH => {
          LH(HH.target)
        },
        SH = HH => {
          LH(HH.relatedTarget)
        },
        tH = () => {
          LH(document.activeElement)
        },
        zH = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", rH, zH), document.addEventListener("focusout", SH, zH), document.addEventListener("keydown", tH, zH), LH(document.activeElement), () => {
        document.removeEventListener("focusin", rH, zH), document.removeEventListener("focusout", SH, zH), document.removeEventListener("keydown", tH, zH)
      }
    }
    const zH = new Map;

    function CH(HH, BH) {
      var LH;
      let AH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      zH.set(AH, (null !== (LH = zH.get(AH)) && void 0 !== LH ? LH : 0) & ~HH | BH & HH);
      let SH = 0;
      for (const rH of zH.values()) SH |= rH;
      return (0, rH.E)(HH, SH & HH)
    }
  },
  37798: (HH, BH, LH) => {
    function AH(HH) {
      return HH.includes("Leaf Bed")
    }

    function rH(HH) {
      return / Bed(?: Head)?(?:\||$)/.test(HH) && !AH(HH)
    }

    function SH(HH) {
      return HH.includes(" Strongbed")
    }

    function hH(HH) {
      return AH(HH) || rH(HH) || SH(HH)
    }
    LH.d(BH, {
      d: () => hH,
      h: () => AH,
      l: () => SH,
      m: () => rH
    })
  },
  37793: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => CH
    });
    var AH = LH(37798),
      rH = LH(9940);
    const SH = [],
      hH = [],
      tH = [],
      zH = [];
    for (const EH of Object.keys(rH.l))(0, AH.h)(EH) ? SH.push(EH) : (0, AH.m)(EH) && hH.push(EH), (0, AH.l)(EH) && tH.push(EH), (EH.includes(" Bed Head") || EH.includes(" Strongbed Head")) && zH.push(EH);
    const CH = {
      leafBeds: SH,
      woolBeds: hH,
      strongBeds: tH,
      beds: [...SH, ...hH, ...tH],
      bedHeads: zH,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  7007: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => hH,
      e: () => rH,
      h: () => zH,
      i: () => SH,
      m: () => CH,
      o: () => AH,
      p: () => tH
    });
    let AH = function(HH) {
        return HH[HH.DEFAULT = 0] = "DEFAULT", HH[HH.BOAT = 1] = "BOAT", HH[HH.GLIDER = 2] = "GLIDER", HH[HH.BALLOON = 3] = "BALLOON", HH[HH.SLEEPING = 4] = "SLEEPING", HH[HH.RIDING_MOB = 5] = "RIDING_MOB", HH[HH.CAR = 6] = "CAR", HH[HH.HOVERCRAFT = 7] = "HOVERCRAFT", HH
      }({}),
      rH = function(HH) {
        return HH[HH.WOOD = 0] = "WOOD", HH[HH.OBSIDIAN = 1] = "OBSIDIAN", HH[HH.SPEED = 2] = "SPEED", HH
      }({}),
      SH = function(HH) {
        return HH[HH.WOOD = 0] = "WOOD", HH[HH.IRON = 1] = "IRON", HH[HH.GOLD = 2] = "GOLD", HH[HH.DIAMOND = 3] = "DIAMOND", HH
      }({}),
      hH = function(HH) {
        return HH[HH.YELLOW = 0] = "YELLOW", HH[HH.WHITE = 1] = "WHITE", HH[HH.RED = 2] = "RED", HH[HH.PURPLE = 3] = "PURPLE", HH[HH.PINK = 4] = "PINK", HH[HH.ORANGE = 5] = "ORANGE", HH[HH.MAGENTA = 6] = "MAGENTA", HH[HH.LIME = 7] = "LIME", HH[HH.LIGHT_GRAY = 8] = "LIGHT_GRAY", HH[HH.LIGHT_BLUE = 9] = "LIGHT_BLUE", HH[HH.GREEN = 10] = "GREEN", HH[HH.GRAY = 11] = "GRAY", HH[HH.CYAN = 12] = "CYAN", HH[HH.BROWN = 13] = "BROWN", HH[HH.BLUE = 14] = "BLUE", HH[HH.BLACK = 15] = "BLACK", HH
      }({}),
      tH = function(HH) {
        return HH[HH.ROTATION_1 = 0] = "ROTATION_1", HH[HH.ROTATION_2 = 1] = "ROTATION_2", HH[HH.ROTATION_3 = 2] = "ROTATION_3", HH[HH.ROTATION_4 = 3] = "ROTATION_4", HH
      }({}),
      zH = function(HH) {
        return HH[HH.KART = 0] = "KART", HH[HH.OFF_ROADER = 1] = "OFF_ROADER", HH[HH.CAR = 2] = "CAR", HH[HH.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", HH[HH.ARMORED_CAR = 4] = "ARMORED_CAR", HH[HH.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", HH[HH.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", HH[HH.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", HH
      }({});
    AH.DEFAULT, AH.BOAT, rH.SPEED, AH.GLIDER, SH.DIAMOND, AH.BALLOON, hH.BLACK, AH.SLEEPING, tH.ROTATION_4, AH.RIDING_MOB, AH.CAR, zH.MOONSTONE_MINING_DRILL, AH.HOVERCRAFT;
    let CH = function(HH) {
      return HH[HH.NORMAL = 0] = "NORMAL", HH[HH.GLIDING = 1] = "GLIDING", HH[HH.FLOATING = 2] = "FLOATING", HH
    }({})
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);