export const id = 102;
export const ids = [102];
export const modules = {
  41821: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      startWasmPadGameplay: () => oV
    });
    xV(41825);
    var JV = xV(41827),
      YV = xV(41841),
      UV = xV(2080),
      yV = xV(41852),
      pV = xV(5301),
      QV = xV(5281),
      nV = xV(41856),
      wV = xV(41861),
      ZV = xV(5310),
      vV = xV(41942),
      rV = xV(2663),
      kV = xV(9462),
      bV = xV(41831),
      EV = xV(9435),
      BV = xV(40310);
    const jV = VV => {
        const eV = ZV.e.indexOf(VV);
        if (eV < 0) throw new Error(`No core action "${VV}"`);
        return eV
      },
      qV = jV("primary-fire"),
      tV = jV("alt-fire"),
      FV = jV("mid-fire"),
      TV = jV("jump"),
      PV = jV("ReloadGun"),
      AV = jV("SwapCameraZoom"),
      NV = jV("TouchAction1"),
      XV = {
        SpecialAction1: jV("SpecialAction1"),
        SpecialAction2: jV("SpecialAction2")
      },
      MV = (VV, eV) => {
        (0, rV.v)(pV.T.PadAction, VV, 0, 0, (0, rV.s)(eV, performance.now()))
      },
      zV = VV => {
        MV(VV, yV.td.Down)
      },
      GV = VV => {
        MV(VV, 0)
      },
      WV = VV => {
        zV(VV), GV(VV)
      },
      RV = () => {
        const VV = (0, wV.k)();
        return null !== VV && void 0 !== VV && VV.isCoreRunning ? VV : null
      },
      gV = VV => yV.s.playerFlags(VV.api.apiView, 0),
      DV = VV => null !== VV && yV.s.targetBlockId(VV.api.apiView, 0) !== yV.Yc,
      iV = () => {
        const VV = (0, kV.c)(),
          eV = new bV.e;
        let xV = !1;
        const JV = (VV, eV) => {
            (0, rV.v)(pV.T.PadLook, yV.Dd.Rate, VV, eV, 0)
          },
          YV = () => {
            xV = !1, eV.reset(), JV(0, 0)
          };
        return {
          update: (YV, UV, QV) => {
            xV || (VV.discardPending(), xV = !0);
            const nV = (0, bV.q)(eV, YV, UV, QV, performance.now());
            JV(nV.yawRadPerSec, nV.pitchRadPerSec);
            const wV = VV.drainLookDelta();
            0 === wV.uR && 0 === wV.eD || (0, rV.v)(pV.T.PadLook, yV.Dd.Gyro, wV.uR, wV.eD, 0)
          },
          release: YV,
          uninstall: YV
        }
      },
      CV = () => {
        const VV = RV();
        return null !== VV && 0 !== (gV(VV) & yV.Ld.PadSneakToggled)
      },
      aV = () => {
        const VV = (VV => {
          const eV = VV => function() {
            return (0, vV.c)(), VV(...arguments)
          };
          return {
            primaryFireDown: eV((VV => (MV(qV, yV.td.Down | (VV ? yV.td.Repeat : 0)), 0))),
            primaryFireUp: eV((() => {
              GV(qV)
            })),
            altFireDown: eV((() => (zV(tV), 0))),
            altFireUp: eV((() => {
              GV(tV)
            })),
            jumpDown: eV((() => {
              WV(TV)
            })),
            specialActionDown: eV((VV => {
              zV(XV[VV])
            })),
            specialActionUp: eV((VV => {
              GV(XV[VV])
            })),
            reloadGun: eV((() => {
              WV(PV)
            })),
            dropItem: eV((VV => {
              MV(yV.vd.Drop, yV.td.Down | (VV ? yV.td.Stack : 0))
            })),
            swapCameraZoom: eV((() => {
              WV(AV)
            })),
            pickBlock: eV((() => (WV(FV), DV(VV()))))
          }
        })(RV);
        let eV = !1,
          xV = null;
        const JV = () => {
          var VV;
          null === (VV = xV) || void 0 === VV || VV(), xV = null
        };
        return {
          bodies: () => VV,
          look: iV(),
          move: (VV, xV) => {
            var YV;
            JV();
            const {
              bits: UV,
              flips: pV
            } = (VV => {
              if (null === VV) return {
                bits: yV.zd.Peek,
                flips: 0
              };
              const eV = VV.sneakHeld ? yV.zd.SneakHeld : 0;
              return "hold" === VV.mode ? {
                bits: eV | yV.zd.SneakHoldMode,
                flips: VV.sneakTogglePressed ? 1 : 0
              } : {
                bits: eV,
                flips: VV.sneakPressed || VV.sneakTogglePressed ? 1 : 0
              }
            })(xV);
            null !== (YV = RV()) && void 0 !== YV && YV.padMove(VV.x, VV.y, VV.magnitude, VV.headingOffset, (VV => yV.zd.Active | (VV.jumpHeld ? yV.zd.JumpHeld : 0) | (VV.jumpPressed ? yV.zd.JumpPressed : 0) | (VV.running ? yV.zd.Running : 0) | (VV.sprintHeld ? yV.zd.SprintHeld : 0))(VV) | UV, pV) && (eV = !0), (0, EV.h)(CV())
          },
          stopMoving: () => {
            var VV;
            eV && (eV = !(null !== (VV = RV()) && void 0 !== VV && VV.padMove(0, 0, 0, 0, 0, 0)), JV(), xV = (0, QV.u)((() => {
              JV(), (0, EV.h)(CV())
            })))
          },
          uninstall: JV,
          deviceChanged: VV => {
            var xV;
            "touch" === VV ? ((0, EV.h)(!1), null !== (xV = RV()) && void 0 !== xV && xV.padMove(0, 0, 0, 0, yV.zd.EndToggle, 0) && (eV = !1)) : "gamepad" === VV && (0, EV.h)(CV())
          },
          hasPlayer: () => null !== RV(),
          isPlayerDead: () => {
            var VV;
            return !1 === (null === (VV = RV()) || void 0 === VV ? void 0 : VV.localPlayerAlive())
          },
          isReplayMode: () => {
            const VV = RV();
            return null !== VV && 0 !== (gV(VV) & yV.Ld.Replay)
          },
          isFreeCameraOn: () => {
            const VV = RV();
            return null !== VV && 0 !== (gV(VV) & yV.Ld.FreeCam)
          },
          targetsBlock: () => DV(RV()),
          selectedSlotEmpty: () => {
            var VV;
            return !(null !== (VV = RV()) && void 0 !== VV && VV.items.hn())
          },
          pickBlockAllowed: () => !!UV.c.get("creative") && !!UV.c.get("canPickBlocks"),
          scrollHotbar: VV => {
            MV(yV.vd.Hotbar, yV.td.Down | (VV > 0 ? yV.td.Next : 0))
          },
          hasFullInventory: nV.j,
          hasLobbyTab: () => (0, BV.c)({
            lobbyLeaderboardInfo: UV.c.get("lobbyLeaderboardInfo"),
            lobbyManage: UV.c.get("lobbyManage")
          }),
          contextActionInputs: () => {
            var VV, eV, xV, JV;
            const YV = RV();
            return {
              holdingGun: !1 !== (null === YV || void 0 === YV ? void 0 : YV.localPlayerAlive()) && "Gun" === (null === YV || void 0 === YV || null === (VV = YV.items.hn()) || void 0 === VV || null === (eV = VV.typeObj) || void 0 === eV ? void 0 : eV.type),
              customButtons: null !== (xV = UV.c.get("customButtons")) && void 0 !== xV ? xV : null,
              touchscreenActionButton: null !== (JV = UV.c.get("touchscreenActionButton")) && void 0 !== JV ? JV : null
            }
          },
          pressTouchButton: VV => {
            VV ? zV(NV) : GV(NV)
          }
        }
      },
      oV = () => {
        const VV = (0, YV.b)(aV()),
          eV = (0, JV.b)(),
          xV = null;
        return () => {
          VV(), eV(), null === xV || void 0 === xV || xV()
        }
      }
  },
  5281: (VV, eV, xV) => {
    xV.d(eV, {
      A: () => zV,
      C: () => jV,
      E: () => yV,
      G: () => pV,
      J: () => NV,
      b: () => AV,
      d: () => tV,
      g: () => WV,
      h: () => GV,
      l: () => BV,
      m: () => TV,
      o: () => qV,
      s: () => FV,
      u: () => XV,
      w: () => MV
    });
    var JV = xV(5288);
    const YV = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let UV = YV;

    function yV(VV) {
      UV = null !== VV && void 0 !== VV ? VV : YV
    }

    function pV() {
      return UV
    }
    const QV = new Set,
      nV = new Set;
    let wV = -1;
    const ZV = new Set,
      vV = new Set;
    let rV = 0,
      kV = 0;
    const bV = new Set,
      EV = new Set;

    function BV(VV) {
      return QV.add(VV), () => {
        QV.delete(VV)
      }
    }

    function jV(VV, eV) {
      for (const JV of QV) try {
        JV(VV)
      } catch (xV) {
        eV(xV)
      }
    }

    function qV(VV) {
      return nV.add(VV), () => {
        nV.delete(VV)
      }
    }

    function tV(VV, eV) {
      const xV = wV < 0 ? 0 : VV - wV;
      wV = VV;
      for (const YV of nV) try {
        YV(xV)
      } catch (JV) {
        eV(JV)
      }
    }

    function FV(VV) {
      return ZV.add(VV), () => {
        ZV.delete(VV)
      }
    }

    function TV(VV) {
      return vV.add(VV), () => {
        vV.delete(VV)
      }
    }
    let PV = 0;

    function AV(VV) {
      PV += VV
    }

    function NV() {
      const VV = PV;
      return PV = 0, VV
    }

    function XV(VV) {
      return bV.add(VV), () => {
        bV.delete(VV)
      }
    }

    function MV(VV) {
      return EV.add(VV), () => {
        EV.delete(VV)
      }
    }

    function zV() {
      rV = 0, kV = 0, wV = -1
    }

    function GV(VV, eV) {
      if ("paced" === VV) return kV += eV, null;
      if ("drawn" !== VV && "skipped" !== VV) return null;
      const xV = eV + kV;
      return kV = 0, xV
    }

    function WV(VV, eV, xV, YV) {
      const UV = (0, JV.e)(eV),
        yV = VV > 0 ? performance.now() : 0;
      for (let JV = 0; JV < VV; JV++)
        for (const VV of bV) try {
          VV()
        } catch (pV) {
          YV(pV)
        }
      if (VV > 0 && AV(performance.now() - yV), null !== xV) {
        for (const VV of ZV) try {
          VV(xV)
        } catch (pV) {
          YV(pV)
        }
        rV += xV
      }
      if ("drawn" === eV) {
        const VV = rV;
        rV = 0;
        for (const eV of vV) try {
          eV(VV)
        } catch (pV) {
          YV(pV)
        }
      }
      for (const JV of EV) try {
        JV(VV, UV)
      } catch (pV) {
        YV(pV)
      }
    }
  },
  5310: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => YV,
      h: () => UV,
      l: () => yV,
      p: () => JV,
      q: () => pV
    });
    const JV = {
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
      YV = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      UV = {
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
      yV = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      pV = [16]
  },
  41942: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => yV,
      g: () => UV,
      h: () => YV
    });
    let JV = null;

    function YV(VV) {
      JV = VV
    }

    function UV(VV) {
      JV === VV && (JV = null)
    }

    function yV() {
      var VV;
      null === (VV = JV) || void 0 === VV || VV()
    }
  },
  5319: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => pV,
      f: () => yV,
      h: () => nV
    });
    var JV = xV(2660),
      YV = xV(2663);
    const UV = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function yV(VV) {
      return VV instanceof HTMLElement && (!!(VV.isContentEditable || VV instanceof HTMLTextAreaElement || VV instanceof HTMLSelectElement) || VV instanceof HTMLInputElement && !UV.has(VV.type))
    }

    function pV(VV) {
      let eV = null;
      const xV = xV => {
          const YV = yV(xV);
          YV !== eV && (eV = YV, VV(JV.i.UiCapture, JV.y.Keyboard, 0, 0, YV ? JV.y.Keyboard : 0))
        },
        YV = VV => {
          xV(VV.target)
        },
        UV = VV => {
          xV(VV.relatedTarget)
        },
        pV = () => {
          xV(document.activeElement)
        },
        QV = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", YV, QV), document.addEventListener("focusout", UV, QV), document.addEventListener("keydown", pV, QV), xV(document.activeElement), () => {
        document.removeEventListener("focusin", YV, QV), document.removeEventListener("focusout", UV, QV), document.removeEventListener("keydown", pV, QV)
      }
    }
    const QV = new Map;

    function nV(VV, eV) {
      var xV;
      let JV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      QV.set(JV, (null !== (xV = QV.get(JV)) && void 0 !== xV ? xV : 0) & ~VV | eV & VV);
      let UV = 0;
      for (const YV of QV.values()) UV |= YV;
      return (0, YV.D)(VV, UV & VV)
    }
  },
  38114: (VV, eV, xV) => {
    function JV(VV) {
      return VV.includes("Leaf Bed")
    }

    function YV(VV) {
      return / Bed(?: Head)?(?:\||$)/.test(VV) && !JV(VV)
    }

    function UV(VV) {
      return VV.includes(" Strongbed")
    }

    function yV(VV) {
      return JV(VV) || YV(VV) || UV(VV)
    }
    xV.d(eV, {
      d: () => yV,
      e: () => JV,
      f: () => UV,
      j: () => YV
    })
  },
  38112: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => nV
    });
    var JV = xV(38114),
      YV = xV(9820);
    const UV = [],
      yV = [],
      pV = [],
      QV = [];
    for (const wV of Object.keys(YV.p))(0, JV.e)(wV) ? UV.push(wV) : (0, JV.j)(wV) && yV.push(wV), (0, JV.f)(wV) && pV.push(wV), (wV.includes(" Bed Head") || wV.includes(" Strongbed Head")) && QV.push(wV);
    const nV = {
      leafBeds: UV,
      woolBeds: yV,
      strongBeds: pV,
      beds: [...UV, ...yV, ...pV],
      bedHeads: QV,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  7024: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => yV,
      i: () => YV,
      j: () => QV,
      n: () => UV,
      o: () => nV,
      q: () => JV,
      s: () => pV
    });
    let JV = function(VV) {
        return VV[VV.DEFAULT = 0] = "DEFAULT", VV[VV.BOAT = 1] = "BOAT", VV[VV.GLIDER = 2] = "GLIDER", VV[VV.BALLOON = 3] = "BALLOON", VV[VV.SLEEPING = 4] = "SLEEPING", VV[VV.RIDING_MOB = 5] = "RIDING_MOB", VV[VV.CAR = 6] = "CAR", VV[VV.HOVERCRAFT = 7] = "HOVERCRAFT", VV
      }({}),
      YV = function(VV) {
        return VV[VV.WOOD = 0] = "WOOD", VV[VV.OBSIDIAN = 1] = "OBSIDIAN", VV[VV.SPEED = 2] = "SPEED", VV
      }({}),
      UV = function(VV) {
        return VV[VV.WOOD = 0] = "WOOD", VV[VV.IRON = 1] = "IRON", VV[VV.GOLD = 2] = "GOLD", VV[VV.DIAMOND = 3] = "DIAMOND", VV
      }({}),
      yV = function(VV) {
        return VV[VV.YELLOW = 0] = "YELLOW", VV[VV.WHITE = 1] = "WHITE", VV[VV.RED = 2] = "RED", VV[VV.PURPLE = 3] = "PURPLE", VV[VV.PINK = 4] = "PINK", VV[VV.ORANGE = 5] = "ORANGE", VV[VV.MAGENTA = 6] = "MAGENTA", VV[VV.LIME = 7] = "LIME", VV[VV.LIGHT_GRAY = 8] = "LIGHT_GRAY", VV[VV.LIGHT_BLUE = 9] = "LIGHT_BLUE", VV[VV.GREEN = 10] = "GREEN", VV[VV.GRAY = 11] = "GRAY", VV[VV.CYAN = 12] = "CYAN", VV[VV.BROWN = 13] = "BROWN", VV[VV.BLUE = 14] = "BLUE", VV[VV.BLACK = 15] = "BLACK", VV
      }({}),
      pV = function(VV) {
        return VV[VV.ROTATION_1 = 0] = "ROTATION_1", VV[VV.ROTATION_2 = 1] = "ROTATION_2", VV[VV.ROTATION_3 = 2] = "ROTATION_3", VV[VV.ROTATION_4 = 3] = "ROTATION_4", VV
      }({}),
      QV = function(VV) {
        return VV[VV.KART = 0] = "KART", VV[VV.OFF_ROADER = 1] = "OFF_ROADER", VV[VV.CAR = 2] = "CAR", VV[VV.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", VV[VV.ARMORED_CAR = 4] = "ARMORED_CAR", VV[VV.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", VV[VV.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", VV[VV.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", VV
      }({});
    JV.DEFAULT, JV.BOAT, YV.SPEED, JV.GLIDER, UV.DIAMOND, JV.BALLOON, yV.BLACK, JV.SLEEPING, pV.ROTATION_4, JV.RIDING_MOB, JV.CAR, QV.MOONSTONE_MINING_DRILL, JV.HOVERCRAFT;
    let nV = function(VV) {
      return VV[VV.NORMAL = 0] = "NORMAL", VV[VV.GLIDING = 1] = "GLIDING", VV[VV.FLOATING = 2] = "FLOATING", VV
    }({})
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);