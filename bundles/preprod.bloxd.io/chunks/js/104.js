export const id = 104;
export const ids = [104];
export const modules = {
  42056: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      startWasmPadGameplay: () => pW
    });
    OW(42060);
    var mW = OW(42067),
      EW = OW(42086),
      NW = OW(2061),
      PW = OW(42094),
      LW = OW(5551),
      cW = OW(5533),
      wW = OW(42103),
      tW = OW(42109),
      ZW = OW(5568),
      xW = OW(42185),
      lW = OW(3308),
      AW = OW(10079),
      bW = OW(42075),
      jW = OW(10053),
      UW = OW(40305);
    const kW = WW => {
        const iW = ZW.e.indexOf(WW);
        if (iW < 0) throw new Error(`No core action "${WW}"`);
        return iW
      },
      sW = kW("primary-fire"),
      MW = kW("alt-fire"),
      KW = kW("mid-fire"),
      SW = kW("jump"),
      YW = kW("ReloadGun"),
      yW = kW("SwapCameraZoom"),
      TW = kW("Zoom"),
      JW = kW("TouchAction1"),
      hW = {
        SpecialAction1: kW("SpecialAction1"),
        SpecialAction2: kW("SpecialAction2")
      },
      HW = (WW, iW) => {
        (0, lW.t)(LW.N.PadAction, WW, 0, 0, (0, lW.q)(iW, performance.now()))
      },
      nW = WW => {
        HW(WW, PW.Id.Down)
      },
      uW = WW => {
        HW(WW, 0)
      },
      oW = WW => {
        nW(WW), uW(WW)
      },
      dW = () => {
        const WW = (0, tW.f)();
        return null !== WW && void 0 !== WW && WW.isCoreRunning ? WW : null
      },
      eW = WW => PW.z.playerFlags(WW.api.apiView, 0),
      vW = WW => null !== WW && PW.z.targetBlockId(WW.api.apiView, 0) !== PW.nd,
      gW = () => {
        const WW = (0, AW.d)(),
          iW = new bW.b;
        let OW = !1;
        const mW = (WW, iW) => {
            (0, lW.t)(LW.N.PadLook, PW.Pd.Rate, WW, iW, 0)
          },
          EW = () => {
            OW = !1, iW.reset(), mW(0, 0)
          };
        return {
          update: (EW, NW, cW) => {
            OW || (WW.discardPending(), OW = !0);
            const wW = (0, bW.p)(iW, EW, NW, cW, performance.now());
            mW(wW.yawRadPerSec, wW.pitchRadPerSec);
            const tW = WW.drainLookDelta();
            0 === tW.jH && 0 === tW.UH || (0, lW.t)(LW.N.PadLook, PW.Pd.Gyro, tW.jH, tW.UH, 0)
          },
          release: EW,
          uninstall: EW
        }
      },
      DW = () => {
        const WW = dW();
        return null !== WW && 0 !== (eW(WW) & PW.Ud.PadSneakToggled)
      },
      VW = () => {
        const WW = (WW => {
          const iW = WW => function() {
            return (0, xW.e)(), WW(...arguments)
          };
          return {
            primaryFireDown: iW((WW => (HW(sW, PW.Id.Down | (WW ? PW.Id.Repeat : 0)), 0))),
            primaryFireUp: iW((() => {
              uW(sW)
            })),
            altFireDown: iW((() => (nW(MW), 0))),
            altFireUp: iW((() => {
              uW(MW)
            })),
            jumpDown: iW((() => {
              oW(SW)
            })),
            specialActionDown: iW((WW => {
              nW(hW[WW])
            })),
            specialActionUp: iW((WW => {
              uW(hW[WW])
            })),
            reloadGun: iW((() => {
              oW(YW)
            })),
            dropItem: iW((WW => {
              HW(PW.Md.Drop, PW.Id.Down | (WW ? PW.Id.Stack : 0))
            })),
            swapCameraZoom: iW((() => {
              oW(yW)
            })),
            zoom: iW((WW => {
              WW ? nW(TW) : uW(TW)
            })),
            pickBlock: iW((() => (oW(KW), vW(WW()))))
          }
        })(dW);
        let iW = !1,
          OW = null;
        const mW = () => {
          var WW;
          null === (WW = OW) || void 0 === WW || WW(), OW = null
        };
        return {
          bodies: () => WW,
          look: gW(),
          move: (WW, OW) => {
            var EW;
            mW();
            const {
              bits: NW,
              flips: LW
            } = (WW => {
              if (null === WW) return {
                bits: PW.Nd.Peek,
                flips: 0
              };
              const iW = WW.sneakHeld ? PW.Nd.SneakHeld : 0;
              return "hold" === WW.mode ? {
                bits: iW | PW.Nd.SneakHoldMode,
                flips: WW.sneakTogglePressed ? 1 : 0
              } : {
                bits: iW,
                flips: WW.sneakPressed || WW.sneakTogglePressed ? 1 : 0
              }
            })(OW);
            null !== (EW = dW()) && void 0 !== EW && EW.padMove(WW.x, WW.y, WW.magnitude, WW.headingOffset, (WW => PW.Nd.Active | (WW.jumpHeld ? PW.Nd.JumpHeld : 0) | (WW.jumpPressed ? PW.Nd.JumpPressed : 0) | (WW.running ? PW.Nd.Running : 0) | (WW.sprintHeld ? PW.Nd.SprintHeld : 0))(WW) | NW, LW) && (iW = !0), (0, jW.g)(DW())
          },
          stopMoving: () => {
            var WW;
            iW && (iW = !(null !== (WW = dW()) && void 0 !== WW && WW.padMove(0, 0, 0, 0, 0, 0)), mW(), OW = (0, cW.x)((() => {
              mW(), (0, jW.g)(DW())
            })))
          },
          uninstall: mW,
          deviceChanged: WW => {
            var OW;
            "touch" === WW ? ((0, jW.g)(!1), null !== (OW = dW()) && void 0 !== OW && OW.padMove(0, 0, 0, 0, PW.Nd.EndToggle, 0) && (iW = !1)) : "gamepad" === WW && (0, jW.g)(DW())
          },
          hasPlayer: () => null !== dW(),
          isPlayerDead: () => {
            var WW;
            return !1 === (null === (WW = dW()) || void 0 === WW ? void 0 : WW.localPlayerAlive())
          },
          isReplayMode: () => {
            const WW = dW();
            return null !== WW && 0 !== (eW(WW) & PW.Ud.Replay)
          },
          isFreeCameraOn: () => {
            const WW = dW();
            return null !== WW && 0 !== (eW(WW) & PW.Ud.FreeCam)
          },
          targetsBlock: () => vW(dW()),
          selectedSlotEmpty: () => {
            var WW;
            return !(null !== (WW = dW()) && void 0 !== WW && WW.items.BL())
          },
          pickBlockAllowed: () => !!NW.d.get("creative") && !!NW.d.get("canPickBlocks"),
          zoomAllowed: () => !!NW.d.get("canUseZoomKey"),
          scrollHotbar: WW => {
            HW(PW.Md.Hotbar, PW.Id.Down | (WW > 0 ? PW.Id.Next : 0))
          },
          hasFullInventory: wW.h,
          hasLobbyTab: () => (0, UW.d)({
            lobbyLeaderboardInfo: NW.d.get("lobbyLeaderboardInfo"),
            lobbyManage: NW.d.get("lobbyManage")
          }),
          contextActionInputs: () => {
            var WW, iW, OW, mW;
            const EW = dW();
            return {
              holdingGun: !1 !== (null === EW || void 0 === EW ? void 0 : EW.localPlayerAlive()) && "Gun" === (null === EW || void 0 === EW || null === (WW = EW.items.BL()) || void 0 === WW || null === (iW = WW.typeObj) || void 0 === iW ? void 0 : iW.type),
              customButtons: null !== (OW = NW.d.get("customButtons")) && void 0 !== OW ? OW : null,
              touchscreenActionButton: null !== (mW = NW.d.get("touchscreenActionButton")) && void 0 !== mW ? mW : null
            }
          },
          pressTouchButton: WW => {
            WW ? nW(JW) : uW(JW)
          }
        }
      },
      pW = () => {
        const WW = (0, EW.b)(VW()),
          iW = (0, mW.b)(),
          OW = null;
        return () => {
          WW(), iW(), null === OW || void 0 === OW || OW()
        }
      }
  },
  5533: (WW, iW, OW) => {
    OW.d(iW, {
      B: () => hW,
      D: () => HW,
      F: () => kW,
      G: () => PW,
      K: () => LW,
      N: () => TW,
      e: () => yW,
      g: () => MW,
      k: () => uW,
      m: () => nW,
      n: () => UW,
      o: () => SW,
      r: () => sW,
      v: () => KW,
      x: () => JW
    });
    var mW = OW(5540);
    const EW = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let NW = EW;

    function PW(WW) {
      NW = null !== WW && void 0 !== WW ? WW : EW
    }

    function LW() {
      return NW
    }
    const cW = new Set,
      wW = new Set;
    let tW = -1;
    const ZW = new Set,
      xW = new Set;
    let lW = 0,
      AW = 0;
    const bW = new Set,
      jW = new Set;

    function UW(WW) {
      return cW.add(WW), () => {
        cW.delete(WW)
      }
    }

    function kW(WW, iW) {
      for (const mW of cW) try {
        mW(WW)
      } catch (OW) {
        iW(OW)
      }
    }

    function sW(WW) {
      return wW.add(WW), () => {
        wW.delete(WW)
      }
    }

    function MW(WW, iW) {
      const OW = tW < 0 ? 0 : WW - tW;
      tW = WW;
      for (const EW of wW) try {
        EW(OW)
      } catch (mW) {
        iW(mW)
      }
    }

    function KW(WW) {
      return ZW.add(WW), () => {
        ZW.delete(WW)
      }
    }

    function SW(WW) {
      return xW.add(WW), () => {
        xW.delete(WW)
      }
    }
    let YW = 0;

    function yW(WW) {
      YW += WW
    }

    function TW() {
      const WW = YW;
      return YW = 0, WW
    }

    function JW(WW) {
      return bW.add(WW), () => {
        bW.delete(WW)
      }
    }

    function hW(WW) {
      return jW.add(WW), () => {
        jW.delete(WW)
      }
    }

    function HW() {
      lW = 0, AW = 0, tW = -1
    }

    function nW(WW, iW) {
      if ("paced" === WW) return AW += iW, null;
      if ("drawn" !== WW && "skipped" !== WW) return null;
      const OW = iW + AW;
      return AW = 0, OW
    }

    function uW(WW, iW, OW, EW) {
      const NW = (0, mW.g)(iW),
        PW = WW > 0 ? performance.now() : 0;
      for (let mW = 0; mW < WW; mW++)
        for (const WW of bW) try {
          WW()
        } catch (LW) {
          EW(LW)
        }
      if (WW > 0 && yW(performance.now() - PW), null !== OW) {
        for (const WW of ZW) try {
          WW(OW)
        } catch (LW) {
          EW(LW)
        }
        lW += OW
      }
      if ("drawn" === iW) {
        const WW = lW;
        lW = 0;
        for (const iW of xW) try {
          iW(WW)
        } catch (LW) {
          EW(LW)
        }
      }
      for (const mW of jW) try {
        mW(WW, NW)
      } catch (LW) {
        EW(LW)
      }
    }
  },
  5568: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => EW,
      i: () => NW,
      m: () => PW,
      n: () => mW,
      q: () => LW
    });
    const mW = {
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
        TouchZoom: 191,
        TouchAction1: 192,
        TouchAction2: 193,
        TouchAction3: 194,
        TouchAttack: 195,
        TouchUse: 196
      },
      EW = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      NW = {
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
      PW = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        Zoom: [191],
        "primary-fire": [195],
        "alt-fire": [196]
      },
      LW = [16]
  },
  42185: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => PW,
      h: () => NW,
      i: () => EW
    });
    let mW = null;

    function EW(WW) {
      mW = WW
    }

    function NW(WW) {
      mW === WW && (mW = null)
    }

    function PW() {
      var WW;
      null === (WW = mW) || void 0 === WW || WW()
    }
  },
  5575: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => LW,
      h: () => PW,
      j: () => wW
    });
    var mW = OW(3305),
      EW = OW(3308);
    const NW = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function PW(WW) {
      return WW instanceof HTMLElement && (!!(WW.isContentEditable || WW instanceof HTMLTextAreaElement || WW instanceof HTMLSelectElement) || WW instanceof HTMLInputElement && !NW.has(WW.type))
    }

    function LW(WW) {
      let iW = null;
      const OW = OW => {
          const EW = PW(OW);
          EW !== iW && (iW = EW, WW(mW.k.UiCapture, mW.y.Keyboard, 0, 0, EW ? mW.y.Keyboard : 0))
        },
        EW = WW => {
          OW(WW.target)
        },
        NW = WW => {
          OW(WW.relatedTarget)
        },
        LW = () => {
          OW(document.activeElement)
        },
        cW = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", EW, cW), document.addEventListener("focusout", NW, cW), document.addEventListener("keydown", LW, cW), OW(document.activeElement), () => {
        document.removeEventListener("focusin", EW, cW), document.removeEventListener("focusout", NW, cW), document.removeEventListener("keydown", LW, cW)
      }
    }
    const cW = new Map;

    function wW(WW, iW) {
      var OW;
      let mW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      cW.set(mW, (null !== (OW = cW.get(mW)) && void 0 !== OW ? OW : 0) & ~WW | iW & WW);
      let NW = 0;
      for (const EW of cW.values()) NW |= EW;
      return (0, EW.z)(WW, NW & WW)
    }
  },
  38097: (WW, iW, OW) => {
    function mW(WW) {
      return WW.includes("Leaf Bed")
    }

    function EW(WW) {
      return / Bed(?: Head)?(?:\||$)/.test(WW) && !mW(WW)
    }

    function NW(WW) {
      return WW.includes(" Strongbed")
    }

    function PW(WW) {
      return mW(WW) || EW(WW) || NW(WW)
    }
    OW.d(iW, {
      d: () => PW,
      f: () => mW,
      j: () => NW,
      l: () => EW
    })
  },
  38088: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => wW
    });
    var mW = OW(38097),
      EW = OW(5725);
    const NW = [],
      PW = [],
      LW = [],
      cW = [];
    for (const tW of Object.keys(EW.p))(0, mW.f)(tW) ? NW.push(tW) : (0, mW.l)(tW) && PW.push(tW), (0, mW.j)(tW) && LW.push(tW), (tW.includes(" Bed Head") || tW.includes(" Strongbed Head")) && cW.push(tW);
    const wW = {
      leafBeds: NW,
      woolBeds: PW,
      strongBeds: LW,
      beds: [...NW, ...PW, ...LW],
      bedHeads: cW,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  7453: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => PW,
      f: () => EW,
      g: () => cW,
      k: () => NW,
      m: () => wW,
      p: () => mW,
      s: () => LW
    });
    let mW = function(WW) {
        return WW[WW.DEFAULT = 0] = "DEFAULT", WW[WW.BOAT = 1] = "BOAT", WW[WW.GLIDER = 2] = "GLIDER", WW[WW.BALLOON = 3] = "BALLOON", WW[WW.SLEEPING = 4] = "SLEEPING", WW[WW.RIDING_MOB = 5] = "RIDING_MOB", WW[WW.CAR = 6] = "CAR", WW[WW.HOVERCRAFT = 7] = "HOVERCRAFT", WW
      }({}),
      EW = function(WW) {
        return WW[WW.WOOD = 0] = "WOOD", WW[WW.OBSIDIAN = 1] = "OBSIDIAN", WW[WW.SPEED = 2] = "SPEED", WW
      }({}),
      NW = function(WW) {
        return WW[WW.WOOD = 0] = "WOOD", WW[WW.IRON = 1] = "IRON", WW[WW.GOLD = 2] = "GOLD", WW[WW.DIAMOND = 3] = "DIAMOND", WW
      }({}),
      PW = function(WW) {
        return WW[WW.YELLOW = 0] = "YELLOW", WW[WW.WHITE = 1] = "WHITE", WW[WW.RED = 2] = "RED", WW[WW.PURPLE = 3] = "PURPLE", WW[WW.PINK = 4] = "PINK", WW[WW.ORANGE = 5] = "ORANGE", WW[WW.MAGENTA = 6] = "MAGENTA", WW[WW.LIME = 7] = "LIME", WW[WW.LIGHT_GRAY = 8] = "LIGHT_GRAY", WW[WW.LIGHT_BLUE = 9] = "LIGHT_BLUE", WW[WW.GREEN = 10] = "GREEN", WW[WW.GRAY = 11] = "GRAY", WW[WW.CYAN = 12] = "CYAN", WW[WW.BROWN = 13] = "BROWN", WW[WW.BLUE = 14] = "BLUE", WW[WW.BLACK = 15] = "BLACK", WW
      }({}),
      LW = function(WW) {
        return WW[WW.ROTATION_1 = 0] = "ROTATION_1", WW[WW.ROTATION_2 = 1] = "ROTATION_2", WW[WW.ROTATION_3 = 2] = "ROTATION_3", WW[WW.ROTATION_4 = 3] = "ROTATION_4", WW
      }({}),
      cW = function(WW) {
        return WW[WW.KART = 0] = "KART", WW[WW.OFF_ROADER = 1] = "OFF_ROADER", WW[WW.CAR = 2] = "CAR", WW[WW.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", WW[WW.ARMORED_CAR = 4] = "ARMORED_CAR", WW[WW.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", WW[WW.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", WW[WW.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", WW
      }({});
    mW.DEFAULT, mW.BOAT, EW.SPEED, mW.GLIDER, NW.DIAMOND, mW.BALLOON, PW.BLACK, mW.SLEEPING, LW.ROTATION_4, mW.RIDING_MOB, mW.CAR, cW.MOONSTONE_MINING_DRILL, mW.HOVERCRAFT;
    let wW = function(WW) {
      return WW[WW.NORMAL = 0] = "NORMAL", WW[WW.GLIDING = 1] = "GLIDING", WW[WW.FLOATING = 2] = "FLOATING", WW
    }({})
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);