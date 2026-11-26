export const id = 102;
export const ids = [102];
export const modules = {
  41618: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      startWasmPadGameplay: () => HU
    });
    zU(41624);
    var cU = zU(41633),
      yU = zU(41640),
      QU = zU(2032),
      AU = zU(41652),
      FU = zU(5326),
      oU = zU(5312),
      DU = zU(41657),
      EU = zU(41660),
      YU = zU(5336),
      NU = zU(41727),
      IU = zU(2588),
      pU = zU(9431),
      aU = zU(41636),
      tU = zU(9404),
      gU = zU(39926);
    const kU = UU => {
        const XU = YU.c.indexOf(UU);
        if (XU < 0) throw new Error(`No core action "${UU}"`);
        return XU
      },
      GU = kU("primary-fire"),
      BU = kU("alt-fire"),
      ZU = kU("mid-fire"),
      RU = kU("jump"),
      PU = kU("ReloadGun"),
      WU = kU("SwapCameraZoom"),
      dU = kU("TouchAction1"),
      LU = {
        SpecialAction1: kU("SpecialAction1"),
        SpecialAction2: kU("SpecialAction2")
      },
      eU = (UU, XU) => {
        (0, IU.y)(FU.K.PadAction, UU, 0, 0, (0, IU.v)(XU, performance.now()))
      },
      CU = UU => {
        eU(UU, AU.Bd.Down)
      },
      wU = UU => {
        eU(UU, 0)
      },
      qU = UU => {
        CU(UU), wU(UU)
      },
      OU = () => {
        const UU = (0, EU.f)();
        return null !== UU && void 0 !== UU && UU.isCoreRunning ? UU : null
      },
      SU = UU => AU.w.playerFlags(UU.api.apiView, 0),
      rU = UU => null !== UU && AU.w.targetBlockId(UU.api.apiView, 0) !== AU.cd,
      uU = () => {
        const UU = (0, pU.b)(),
          XU = new aU.c;
        let zU = !1;
        const cU = (UU, XU) => {
            (0, IU.y)(FU.K.PadLook, AU.Hd.Rate, UU, XU, 0)
          },
          yU = () => {
            zU = !1, XU.reset(), cU(0, 0)
          };
        return {
          update: (yU, QU, oU) => {
            zU || (UU.discardPending(), zU = !0);
            const DU = (0, aU.n)(XU, yU, QU, oU, performance.now());
            cU(DU.yawRadPerSec, DU.pitchRadPerSec);
            const EU = UU.drainLookDelta();
            0 === EU.zq && 0 === EU.Qq || (0, IU.y)(FU.K.PadLook, AU.Hd.Gyro, EU.zq, EU.Qq, 0)
          },
          release: yU,
          uninstall: yU
        }
      },
      fU = () => {
        const UU = OU();
        return null !== UU && 0 !== (SU(UU) & AU.Od.PadSneakToggled)
      },
      iU = () => {
        const UU = (UU => {
          const XU = UU => function() {
            return (0, NU.c)(), UU(...arguments)
          };
          return {
            primaryFireDown: XU((UU => (eU(GU, AU.Bd.Down | (UU ? AU.Bd.Repeat : 0)), 0))),
            primaryFireUp: XU((() => {
              wU(GU)
            })),
            altFireDown: XU((() => (CU(BU), 0))),
            altFireUp: XU((() => {
              wU(BU)
            })),
            jumpDown: XU((() => {
              qU(RU)
            })),
            specialActionDown: XU((UU => {
              CU(LU[UU])
            })),
            specialActionUp: XU((UU => {
              wU(LU[UU])
            })),
            reloadGun: XU((() => {
              qU(PU)
            })),
            dropItem: XU((UU => {
              eU(AU.Ed.Drop, AU.Bd.Down | (UU ? AU.Bd.Stack : 0))
            })),
            swapCameraZoom: XU((() => {
              qU(WU)
            })),
            pickBlock: XU((() => (qU(ZU), rU(UU()))))
          }
        })(OU);
        let XU = !1,
          zU = null;
        const cU = () => {
          var UU;
          null === (UU = zU) || void 0 === UU || UU(), zU = null
        };
        return {
          bodies: () => UU,
          look: uU(),
          move: (UU, zU) => {
            var yU;
            cU();
            const {
              bits: QU,
              flips: FU
            } = (UU => {
              if (null === UU) return {
                bits: AU.Gd.Peek,
                flips: 0
              };
              const XU = UU.sneakHeld ? AU.Gd.SneakHeld : 0;
              return "hold" === UU.mode ? {
                bits: XU | AU.Gd.SneakHoldMode,
                flips: UU.sneakTogglePressed ? 1 : 0
              } : {
                bits: XU,
                flips: UU.sneakPressed || UU.sneakTogglePressed ? 1 : 0
              }
            })(zU);
            null !== (yU = OU()) && void 0 !== yU && yU.padMove(UU.x, UU.y, UU.magnitude, UU.headingOffset, (UU => AU.Gd.Active | (UU.jumpHeld ? AU.Gd.JumpHeld : 0) | (UU.jumpPressed ? AU.Gd.JumpPressed : 0) | (UU.running ? AU.Gd.Running : 0) | (UU.sprintHeld ? AU.Gd.SprintHeld : 0))(UU) | QU, FU) && (XU = !0), (0, tU.f)(fU())
          },
          stopMoving: () => {
            var UU;
            XU && (XU = !(null !== (UU = OU()) && void 0 !== UU && UU.padMove(0, 0, 0, 0, 0, 0)), cU(), zU = (0, oU.t)((() => {
              cU(), (0, tU.f)(fU())
            })))
          },
          uninstall: cU,
          deviceChanged: UU => {
            var zU;
            "touch" === UU ? ((0, tU.f)(!1), null !== (zU = OU()) && void 0 !== zU && zU.padMove(0, 0, 0, 0, AU.Gd.EndToggle, 0) && (XU = !1)) : "gamepad" === UU && (0, tU.f)(fU())
          },
          hasPlayer: () => null !== OU(),
          isPlayerDead: () => {
            var UU;
            return !1 === (null === (UU = OU()) || void 0 === UU ? void 0 : UU.localPlayerAlive())
          },
          isReplayMode: () => {
            const UU = OU();
            return null !== UU && 0 !== (SU(UU) & AU.Od.Replay)
          },
          isFreeCameraOn: () => {
            const UU = OU();
            return null !== UU && 0 !== (SU(UU) & AU.Od.FreeCam)
          },
          targetsBlock: () => rU(OU()),
          selectedSlotEmpty: () => {
            var UU;
            return !(null !== (UU = OU()) && void 0 !== UU && UU.items.uD())
          },
          pickBlockAllowed: () => !!QU.d.get("creative") && !!QU.d.get("canPickBlocks"),
          scrollHotbar: UU => {
            eU(AU.Ed.Hotbar, AU.Bd.Down | (UU > 0 ? AU.Bd.Next : 0))
          },
          hasFullInventory: DU.n,
          hasLobbyTab: () => (0, gU.c)({
            lobbyLeaderboardInfo: QU.d.get("lobbyLeaderboardInfo"),
            lobbyManage: QU.d.get("lobbyManage")
          }),
          contextActionInputs: () => {
            var UU, XU, zU, cU;
            const yU = OU();
            return {
              holdingGun: !1 !== (null === yU || void 0 === yU ? void 0 : yU.localPlayerAlive()) && "Gun" === (null === yU || void 0 === yU || null === (UU = yU.items.uD()) || void 0 === UU || null === (XU = UU.typeObj) || void 0 === XU ? void 0 : XU.type),
              customButtons: null !== (zU = QU.d.get("customButtons")) && void 0 !== zU ? zU : null,
              touchscreenActionButton: null !== (cU = QU.d.get("touchscreenActionButton")) && void 0 !== cU ? cU : null
            }
          },
          pressTouchButton: UU => {
            UU ? CU(dU) : wU(dU)
          }
        }
      },
      HU = () => {
        const UU = (0, yU.e)(iU()),
          XU = (0, cU.e)(),
          zU = null;
        return () => {
          UU(), XU(), null === zU || void 0 === zU || zU()
        }
      }
  },
  5312: (UU, XU, zU) => {
    zU.d(XU, {
      B: () => kU,
      D: () => AU,
      H: () => FU,
      L: () => dU,
      b: () => WU,
      c: () => BU,
      f: () => qU,
      h: () => wU,
      j: () => gU,
      m: () => RU,
      n: () => GU,
      r: () => ZU,
      t: () => LU,
      x: () => eU,
      y: () => CU
    });
    var cU = zU(5315);
    const yU = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let QU = yU;

    function AU(UU) {
      QU = null !== UU && void 0 !== UU ? UU : yU
    }

    function FU() {
      return QU
    }
    const oU = new Set,
      DU = new Set;
    let EU = -1;
    const YU = new Set,
      NU = new Set;
    let IU = 0,
      pU = 0;
    const aU = new Set,
      tU = new Set;

    function gU(UU) {
      return oU.add(UU), () => {
        oU.delete(UU)
      }
    }

    function kU(UU, XU) {
      for (const cU of oU) try {
        cU(UU)
      } catch (zU) {
        XU(zU)
      }
    }

    function GU(UU) {
      return DU.add(UU), () => {
        DU.delete(UU)
      }
    }

    function BU(UU, XU) {
      const zU = EU < 0 ? 0 : UU - EU;
      EU = UU;
      for (const yU of DU) try {
        yU(zU)
      } catch (cU) {
        XU(cU)
      }
    }

    function ZU(UU) {
      return YU.add(UU), () => {
        YU.delete(UU)
      }
    }

    function RU(UU) {
      return NU.add(UU), () => {
        NU.delete(UU)
      }
    }
    let PU = 0;

    function WU(UU) {
      PU += UU
    }

    function dU() {
      const UU = PU;
      return PU = 0, UU
    }

    function LU(UU) {
      return aU.add(UU), () => {
        aU.delete(UU)
      }
    }

    function eU(UU) {
      return tU.add(UU), () => {
        tU.delete(UU)
      }
    }

    function CU() {
      IU = 0, pU = 0, EU = -1
    }

    function wU(UU, XU) {
      if ("paced" === UU) return pU += XU, null;
      if ("drawn" !== UU && "skipped" !== UU) return null;
      const zU = XU + pU;
      return pU = 0, zU
    }

    function qU(UU, XU, zU, yU) {
      const QU = (0, cU.j)(XU),
        AU = UU > 0 ? performance.now() : 0;
      for (let cU = 0; cU < UU; cU++)
        for (const UU of aU) try {
          UU()
        } catch (FU) {
          yU(FU)
        }
      if (UU > 0 && WU(performance.now() - AU), null !== zU) {
        for (const UU of YU) try {
          UU(zU)
        } catch (FU) {
          yU(FU)
        }
        IU += zU
      }
      if ("drawn" === XU) {
        const UU = IU;
        IU = 0;
        for (const XU of NU) try {
          XU(UU)
        } catch (FU) {
          yU(FU)
        }
      }
      for (const cU of tU) try {
        cU(UU, QU)
      } catch (FU) {
        yU(FU)
      }
    }
  },
  5336: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => yU,
      g: () => QU,
      h: () => AU,
      j: () => cU,
      n: () => FU
    });
    const cU = {
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
      yU = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      QU = {
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
      AU = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      FU = [16]
  },
  41727: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => AU,
      d: () => QU,
      f: () => yU
    });
    let cU = null;

    function yU(UU) {
      cU = UU
    }

    function QU(UU) {
      cU === UU && (cU = null)
    }

    function AU() {
      var UU;
      null === (UU = cU) || void 0 === UU || UU()
    }
  },
  5342: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => FU,
      e: () => AU,
      f: () => DU
    });
    var cU = zU(2580),
      yU = zU(2588);
    const QU = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function AU(UU) {
      return UU instanceof HTMLElement && (!!(UU.isContentEditable || UU instanceof HTMLTextAreaElement || UU instanceof HTMLSelectElement) || UU instanceof HTMLInputElement && !QU.has(UU.type))
    }

    function FU(UU) {
      let XU = null;
      const zU = zU => {
          const yU = AU(zU);
          yU !== XU && (XU = yU, UU(cU.j.UiCapture, cU.F.Keyboard, 0, 0, yU ? cU.F.Keyboard : 0))
        },
        yU = UU => {
          zU(UU.target)
        },
        QU = UU => {
          zU(UU.relatedTarget)
        },
        FU = () => {
          zU(document.activeElement)
        },
        oU = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", yU, oU), document.addEventListener("focusout", QU, oU), document.addEventListener("keydown", FU, oU), zU(document.activeElement), () => {
        document.removeEventListener("focusin", yU, oU), document.removeEventListener("focusout", QU, oU), document.removeEventListener("keydown", FU, oU)
      }
    }
    const oU = new Map;

    function DU(UU, XU) {
      var zU;
      let cU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      oU.set(cU, (null !== (zU = oU.get(cU)) && void 0 !== zU ? zU : 0) & ~UU | XU & UU);
      let QU = 0;
      for (const yU of oU.values()) QU |= yU;
      return (0, yU.J)(UU, QU & UU)
    }
  },
  37662: (UU, XU, zU) => {
    function cU(UU) {
      return UU.includes("Leaf Bed")
    }

    function yU(UU) {
      return / Bed(?: Head)?(?:\||$)/.test(UU) && !cU(UU)
    }

    function QU(UU) {
      return UU.includes(" Strongbed")
    }

    function AU(UU) {
      return cU(UU) || yU(UU) || QU(UU)
    }
    zU.d(XU, {
      b: () => AU,
      c: () => cU,
      g: () => QU,
      j: () => yU
    })
  },
  37659: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => DU
    });
    var cU = zU(37662),
      yU = zU(9782);
    const QU = [],
      AU = [],
      FU = [],
      oU = [];
    for (const EU of Object.keys(yU.l))(0, cU.c)(EU) ? QU.push(EU) : (0, cU.j)(EU) && AU.push(EU), (0, cU.g)(EU) && FU.push(EU), (EU.includes(" Bed Head") || EU.includes(" Strongbed Head")) && oU.push(EU);
    const DU = {
      leafBeds: QU,
      woolBeds: AU,
      strongBeds: FU,
      beds: [...QU, ...AU, ...FU],
      bedHeads: oU,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  7056: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => AU,
      f: () => yU,
      j: () => oU,
      k: () => QU,
      l: () => DU,
      o: () => cU,
      p: () => FU
    });
    let cU = function(UU) {
        return UU[UU.DEFAULT = 0] = "DEFAULT", UU[UU.BOAT = 1] = "BOAT", UU[UU.GLIDER = 2] = "GLIDER", UU[UU.BALLOON = 3] = "BALLOON", UU[UU.SLEEPING = 4] = "SLEEPING", UU[UU.RIDING_MOB = 5] = "RIDING_MOB", UU[UU.CAR = 6] = "CAR", UU[UU.HOVERCRAFT = 7] = "HOVERCRAFT", UU
      }({}),
      yU = function(UU) {
        return UU[UU.WOOD = 0] = "WOOD", UU[UU.OBSIDIAN = 1] = "OBSIDIAN", UU[UU.SPEED = 2] = "SPEED", UU
      }({}),
      QU = function(UU) {
        return UU[UU.WOOD = 0] = "WOOD", UU[UU.IRON = 1] = "IRON", UU[UU.GOLD = 2] = "GOLD", UU[UU.DIAMOND = 3] = "DIAMOND", UU
      }({}),
      AU = function(UU) {
        return UU[UU.YELLOW = 0] = "YELLOW", UU[UU.WHITE = 1] = "WHITE", UU[UU.RED = 2] = "RED", UU[UU.PURPLE = 3] = "PURPLE", UU[UU.PINK = 4] = "PINK", UU[UU.ORANGE = 5] = "ORANGE", UU[UU.MAGENTA = 6] = "MAGENTA", UU[UU.LIME = 7] = "LIME", UU[UU.LIGHT_GRAY = 8] = "LIGHT_GRAY", UU[UU.LIGHT_BLUE = 9] = "LIGHT_BLUE", UU[UU.GREEN = 10] = "GREEN", UU[UU.GRAY = 11] = "GRAY", UU[UU.CYAN = 12] = "CYAN", UU[UU.BROWN = 13] = "BROWN", UU[UU.BLUE = 14] = "BLUE", UU[UU.BLACK = 15] = "BLACK", UU
      }({}),
      FU = function(UU) {
        return UU[UU.ROTATION_1 = 0] = "ROTATION_1", UU[UU.ROTATION_2 = 1] = "ROTATION_2", UU[UU.ROTATION_3 = 2] = "ROTATION_3", UU[UU.ROTATION_4 = 3] = "ROTATION_4", UU
      }({}),
      oU = function(UU) {
        return UU[UU.KART = 0] = "KART", UU[UU.OFF_ROADER = 1] = "OFF_ROADER", UU[UU.CAR = 2] = "CAR", UU[UU.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", UU[UU.ARMORED_CAR = 4] = "ARMORED_CAR", UU[UU.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", UU[UU.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", UU[UU.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", UU
      }({});
    cU.DEFAULT, cU.BOAT, yU.SPEED, cU.GLIDER, QU.DIAMOND, cU.BALLOON, AU.BLACK, cU.SLEEPING, FU.ROTATION_4, cU.RIDING_MOB, cU.CAR, oU.MOONSTONE_MINING_DRILL, cU.HOVERCRAFT;
    let DU = function(UU) {
      return UU[UU.NORMAL = 0] = "NORMAL", UU[UU.GLIDING = 1] = "GLIDING", UU[UU.FLOATING = 2] = "FLOATING", UU
    }({})
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);