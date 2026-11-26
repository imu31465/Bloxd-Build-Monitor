export const id = 102;
export const ids = [102];
export const modules = {
  41543: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      startWasmPadGameplay: () => XB
    });
    GB(41548);
    var YB = GB(41553),
      DB = GB(41562),
      QB = GB(2050),
      oB = GB(41579),
      jB = GB(5287),
      yB = GB(5274),
      JB = GB(41587),
      MB = GB(41593),
      PB = GB(5305),
      zB = GB(41675),
      lB = GB(2619),
      pB = GB(9518),
      qB = GB(41555),
      ZB = GB(9490),
      NB = GB(39804);
    const RB = BB => {
        const OB = PB.c.indexOf(BB);
        if (OB < 0) throw new Error(`No core action "${BB}"`);
        return OB
      },
      WB = RB("primary-fire"),
      AB = RB("alt-fire"),
      VB = RB("mid-fire"),
      SB = RB("jump"),
      nB = RB("ReloadGun"),
      UB = RB("SwapCameraZoom"),
      fB = RB("TouchAction1"),
      kB = {
        SpecialAction1: RB("SpecialAction1"),
        SpecialAction2: RB("SpecialAction2")
      },
      dB = (BB, OB) => {
        (0, lB.o)(jB.Q.PadAction, BB, 0, 0, (0, lB.m)(OB, performance.now()))
      },
      KB = BB => {
        dB(BB, oB.zd.Down)
      },
      uB = BB => {
        dB(BB, 0)
      },
      mB = BB => {
        KB(BB), uB(BB)
      },
      IB = () => {
        const BB = (0, MB.j)();
        return null !== BB && void 0 !== BB && BB.isCoreRunning ? BB : null
      },
      FB = BB => oB.u.playerFlags(BB.api.apiView, 0),
      iB = BB => null !== BB && oB.u.targetBlockId(BB.api.apiView, 0) !== oB.fd,
      LB = () => {
        const BB = (0, pB.b)(),
          OB = new qB.d;
        let GB = !1;
        const YB = (BB, OB) => {
            (0, lB.o)(jB.Q.PadLook, oB.Fd.Rate, BB, OB, 0)
          },
          DB = () => {
            GB = !1, OB.reset(), YB(0, 0)
          };
        return {
          update: (DB, QB, yB) => {
            GB || (BB.discardPending(), GB = !0);
            const JB = (0, qB.q)(OB, DB, QB, yB, performance.now());
            YB(JB.yawRadPerSec, JB.pitchRadPerSec);
            const MB = BB.drainLookDelta();
            0 === MB.Rm && 0 === MB.Wm || (0, lB.o)(jB.Q.PadLook, oB.Fd.Gyro, MB.Rm, MB.Wm, 0)
          },
          release: DB,
          uninstall: DB
        }
      },
      gB = () => {
        const BB = IB();
        return null !== BB && 0 !== (FB(BB) & oB.Id.PadSneakToggled)
      },
      rB = () => {
        const BB = (BB => {
          const OB = BB => function() {
            return (0, zB.d)(), BB(...arguments)
          };
          return {
            primaryFireDown: OB((BB => (dB(WB, oB.zd.Down | (BB ? oB.zd.Repeat : 0)), 0))),
            primaryFireUp: OB((() => {
              uB(WB)
            })),
            altFireDown: OB((() => (KB(AB), 0))),
            altFireUp: OB((() => {
              uB(AB)
            })),
            jumpDown: OB((() => {
              mB(SB)
            })),
            specialActionDown: OB((BB => {
              KB(kB[BB])
            })),
            specialActionUp: OB((BB => {
              uB(kB[BB])
            })),
            reloadGun: OB((() => {
              mB(nB)
            })),
            dropItem: OB((BB => {
              dB(oB.Cd.Drop, oB.zd.Down | (BB ? oB.zd.Stack : 0))
            })),
            swapCameraZoom: OB((() => {
              mB(UB)
            })),
            pickBlock: OB((() => (mB(VB), iB(BB()))))
          }
        })(IB);
        let OB = !1,
          GB = null;
        const YB = () => {
          var BB;
          null === (BB = GB) || void 0 === BB || BB(), GB = null
        };
        return {
          bodies: () => BB,
          look: LB(),
          move: (BB, GB) => {
            var DB;
            YB();
            const {
              bits: QB,
              flips: jB
            } = (BB => {
              if (null === BB) return {
                bits: oB.Ed.Peek,
                flips: 0
              };
              const OB = BB.sneakHeld ? oB.Ed.SneakHeld : 0;
              return "hold" === BB.mode ? {
                bits: OB | oB.Ed.SneakHoldMode,
                flips: BB.sneakTogglePressed ? 1 : 0
              } : {
                bits: OB,
                flips: BB.sneakPressed || BB.sneakTogglePressed ? 1 : 0
              }
            })(GB);
            null !== (DB = IB()) && void 0 !== DB && DB.padMove(BB.x, BB.y, BB.magnitude, BB.headingOffset, (BB => oB.Ed.Active | (BB.jumpHeld ? oB.Ed.JumpHeld : 0) | (BB.jumpPressed ? oB.Ed.JumpPressed : 0) | (BB.running ? oB.Ed.Running : 0) | (BB.sprintHeld ? oB.Ed.SprintHeld : 0))(BB) | QB, jB) && (OB = !0), (0, ZB.h)(gB())
          },
          stopMoving: () => {
            var BB;
            OB && (OB = !(null !== (BB = IB()) && void 0 !== BB && BB.padMove(0, 0, 0, 0, 0, 0)), YB(), GB = (0, yB.z)((() => {
              YB(), (0, ZB.h)(gB())
            })))
          },
          uninstall: YB,
          deviceChanged: BB => {
            var GB;
            "touch" === BB ? ((0, ZB.h)(!1), null !== (GB = IB()) && void 0 !== GB && GB.padMove(0, 0, 0, 0, oB.Ed.EndToggle, 0) && (OB = !1)) : "gamepad" === BB && (0, ZB.h)(gB())
          },
          hasPlayer: () => null !== IB(),
          isPlayerDead: () => {
            var BB;
            return !1 === (null === (BB = IB()) || void 0 === BB ? void 0 : BB.localPlayerAlive())
          },
          isReplayMode: () => {
            const BB = IB();
            return null !== BB && 0 !== (FB(BB) & oB.Id.Replay)
          },
          isFreeCameraOn: () => {
            const BB = IB();
            return null !== BB && 0 !== (FB(BB) & oB.Id.FreeCam)
          },
          targetsBlock: () => iB(IB()),
          selectedSlotEmpty: () => {
            var BB;
            return !(null !== (BB = IB()) && void 0 !== BB && BB.items.sJ())
          },
          pickBlockAllowed: () => !!QB.e.get("creative") && !!QB.e.get("canPickBlocks"),
          scrollHotbar: BB => {
            dB(oB.Cd.Hotbar, oB.zd.Down | (BB > 0 ? oB.zd.Next : 0))
          },
          hasFullInventory: JB.k,
          hasLobbyTab: () => (0, NB.b)({
            lobbyLeaderboardInfo: QB.e.get("lobbyLeaderboardInfo"),
            lobbyManage: QB.e.get("lobbyManage")
          }),
          contextActionInputs: () => {
            var BB, OB, GB, YB;
            const DB = IB();
            return {
              holdingGun: !1 !== (null === DB || void 0 === DB ? void 0 : DB.localPlayerAlive()) && "Gun" === (null === DB || void 0 === DB || null === (BB = DB.items.sJ()) || void 0 === BB || null === (OB = BB.typeObj) || void 0 === OB ? void 0 : OB.type),
              customButtons: null !== (GB = QB.e.get("customButtons")) && void 0 !== GB ? GB : null,
              touchscreenActionButton: null !== (YB = QB.e.get("touchscreenActionButton")) && void 0 !== YB ? YB : null
            }
          },
          pressTouchButton: BB => {
            BB ? KB(fB) : uB(fB)
          }
        }
      },
      XB = () => {
        const BB = (0, DB.e)(rB()),
          OB = (0, YB.b)(),
          GB = null;
        return () => {
          BB(), OB(), null === GB || void 0 === GB || GB()
        }
      }
  },
  5274: (BB, OB, GB) => {
    GB.d(OB, {
      C: () => dB,
      E: () => KB,
      I: () => RB,
      M: () => oB,
      O: () => jB,
      P: () => fB,
      d: () => UB,
      e: () => AB,
      i: () => mB,
      m: () => uB,
      o: () => NB,
      s: () => SB,
      v: () => WB,
      w: () => VB,
      z: () => kB
    });
    var YB = GB(5276);
    const DB = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let QB = DB;

    function oB(BB) {
      QB = null !== BB && void 0 !== BB ? BB : DB
    }

    function jB() {
      return QB
    }
    const yB = new Set,
      JB = new Set;
    let MB = -1;
    const PB = new Set,
      zB = new Set;
    let lB = 0,
      pB = 0;
    const qB = new Set,
      ZB = new Set;

    function NB(BB) {
      return yB.add(BB), () => {
        yB.delete(BB)
      }
    }

    function RB(BB, OB) {
      for (const YB of yB) try {
        YB(BB)
      } catch (GB) {
        OB(GB)
      }
    }

    function WB(BB) {
      return JB.add(BB), () => {
        JB.delete(BB)
      }
    }

    function AB(BB, OB) {
      const GB = MB < 0 ? 0 : BB - MB;
      MB = BB;
      for (const DB of JB) try {
        DB(GB)
      } catch (YB) {
        OB(YB)
      }
    }

    function VB(BB) {
      return PB.add(BB), () => {
        PB.delete(BB)
      }
    }

    function SB(BB) {
      return zB.add(BB), () => {
        zB.delete(BB)
      }
    }
    let nB = 0;

    function UB(BB) {
      nB += BB
    }

    function fB() {
      const BB = nB;
      return nB = 0, BB
    }

    function kB(BB) {
      return qB.add(BB), () => {
        qB.delete(BB)
      }
    }

    function dB(BB) {
      return ZB.add(BB), () => {
        ZB.delete(BB)
      }
    }

    function KB() {
      lB = 0, pB = 0, MB = -1
    }

    function uB(BB, OB) {
      if ("paced" === BB) return pB += OB, null;
      if ("drawn" !== BB && "skipped" !== BB) return null;
      const GB = OB + pB;
      return pB = 0, GB
    }

    function mB(BB, OB, GB, DB) {
      const QB = (0, YB.k)(OB),
        oB = BB > 0 ? performance.now() : 0;
      for (let YB = 0; YB < BB; YB++)
        for (const BB of qB) try {
          BB()
        } catch (jB) {
          DB(jB)
        }
      if (BB > 0 && UB(performance.now() - oB), null !== GB) {
        for (const BB of PB) try {
          BB(GB)
        } catch (jB) {
          DB(jB)
        }
        lB += GB
      }
      if ("drawn" === OB) {
        const BB = lB;
        lB = 0;
        for (const OB of zB) try {
          OB(BB)
        } catch (jB) {
          DB(jB)
        }
      }
      for (const YB of ZB) try {
        YB(BB, QB)
      } catch (jB) {
        DB(jB)
      }
    }
  },
  5305: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => DB,
      d: () => QB,
      g: () => oB,
      i: () => YB,
      l: () => jB
    });
    const YB = {
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
      DB = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      QB = {
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
      oB = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      jB = [16]
  },
  41675: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => oB,
      f: () => QB,
      j: () => DB
    });
    let YB = null;

    function DB(BB) {
      YB = BB
    }

    function QB(BB) {
      YB === BB && (YB = null)
    }

    function oB() {
      var BB;
      null === (BB = YB) || void 0 === BB || BB()
    }
  },
  5313: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => jB,
      i: () => oB,
      m: () => JB
    });
    var YB = GB(2617),
      DB = GB(2619);
    const QB = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function oB(BB) {
      return BB instanceof HTMLElement && (!!(BB.isContentEditable || BB instanceof HTMLTextAreaElement || BB instanceof HTMLSelectElement) || BB instanceof HTMLInputElement && !QB.has(BB.type))
    }

    function jB(BB) {
      let OB = null;
      const GB = GB => {
          const DB = oB(GB);
          DB !== OB && (OB = DB, BB(YB.f.UiCapture, YB.y.Keyboard, 0, 0, DB ? YB.y.Keyboard : 0))
        },
        DB = BB => {
          GB(BB.target)
        },
        QB = BB => {
          GB(BB.relatedTarget)
        },
        jB = () => {
          GB(document.activeElement)
        },
        yB = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", DB, yB), document.addEventListener("focusout", QB, yB), document.addEventListener("keydown", jB, yB), GB(document.activeElement), () => {
        document.removeEventListener("focusin", DB, yB), document.removeEventListener("focusout", QB, yB), document.removeEventListener("keydown", jB, yB)
      }
    }
    const yB = new Map;

    function JB(BB, OB) {
      var GB;
      let YB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      yB.set(YB, (null !== (GB = yB.get(YB)) && void 0 !== GB ? GB : 0) & ~BB | OB & BB);
      let QB = 0;
      for (const DB of yB.values()) QB |= DB;
      return (0, DB.u)(BB, QB & BB)
    }
  },
  37633: (BB, OB, GB) => {
    function YB(BB) {
      return BB.includes("Leaf Bed")
    }

    function DB(BB) {
      return / Bed(?: Head)?(?:\||$)/.test(BB) && !YB(BB)
    }

    function QB(BB) {
      return BB.includes(" Strongbed")
    }

    function oB(BB) {
      return YB(BB) || DB(BB) || QB(BB)
    }
    GB.d(OB, {
      b: () => oB,
      d: () => YB,
      f: () => QB,
      i: () => DB
    })
  },
  37627: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => JB
    });
    var YB = GB(37633),
      DB = GB(9927);
    const QB = [],
      oB = [],
      jB = [],
      yB = [];
    for (const MB of Object.keys(DB.n))(0, YB.d)(MB) ? QB.push(MB) : (0, YB.i)(MB) && oB.push(MB), (0, YB.f)(MB) && jB.push(MB), (MB.includes(" Bed Head") || MB.includes(" Strongbed Head")) && yB.push(MB);
    const JB = {
      leafBeds: QB,
      woolBeds: oB,
      strongBeds: jB,
      beds: [...QB, ...oB, ...jB],
      bedHeads: yB,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6991: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => oB,
      h: () => DB,
      j: () => yB,
      k: () => QB,
      n: () => JB,
      o: () => YB,
      p: () => jB
    });
    let YB = function(BB) {
        return BB[BB.DEFAULT = 0] = "DEFAULT", BB[BB.BOAT = 1] = "BOAT", BB[BB.GLIDER = 2] = "GLIDER", BB[BB.BALLOON = 3] = "BALLOON", BB[BB.SLEEPING = 4] = "SLEEPING", BB[BB.RIDING_MOB = 5] = "RIDING_MOB", BB[BB.CAR = 6] = "CAR", BB[BB.HOVERCRAFT = 7] = "HOVERCRAFT", BB
      }({}),
      DB = function(BB) {
        return BB[BB.WOOD = 0] = "WOOD", BB[BB.OBSIDIAN = 1] = "OBSIDIAN", BB[BB.SPEED = 2] = "SPEED", BB
      }({}),
      QB = function(BB) {
        return BB[BB.WOOD = 0] = "WOOD", BB[BB.IRON = 1] = "IRON", BB[BB.GOLD = 2] = "GOLD", BB[BB.DIAMOND = 3] = "DIAMOND", BB
      }({}),
      oB = function(BB) {
        return BB[BB.YELLOW = 0] = "YELLOW", BB[BB.WHITE = 1] = "WHITE", BB[BB.RED = 2] = "RED", BB[BB.PURPLE = 3] = "PURPLE", BB[BB.PINK = 4] = "PINK", BB[BB.ORANGE = 5] = "ORANGE", BB[BB.MAGENTA = 6] = "MAGENTA", BB[BB.LIME = 7] = "LIME", BB[BB.LIGHT_GRAY = 8] = "LIGHT_GRAY", BB[BB.LIGHT_BLUE = 9] = "LIGHT_BLUE", BB[BB.GREEN = 10] = "GREEN", BB[BB.GRAY = 11] = "GRAY", BB[BB.CYAN = 12] = "CYAN", BB[BB.BROWN = 13] = "BROWN", BB[BB.BLUE = 14] = "BLUE", BB[BB.BLACK = 15] = "BLACK", BB
      }({}),
      jB = function(BB) {
        return BB[BB.ROTATION_1 = 0] = "ROTATION_1", BB[BB.ROTATION_2 = 1] = "ROTATION_2", BB[BB.ROTATION_3 = 2] = "ROTATION_3", BB[BB.ROTATION_4 = 3] = "ROTATION_4", BB
      }({}),
      yB = function(BB) {
        return BB[BB.KART = 0] = "KART", BB[BB.OFF_ROADER = 1] = "OFF_ROADER", BB[BB.CAR = 2] = "CAR", BB[BB.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", BB[BB.ARMORED_CAR = 4] = "ARMORED_CAR", BB[BB.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", BB[BB.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", BB[BB.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", BB
      }({});
    YB.DEFAULT, YB.BOAT, DB.SPEED, YB.GLIDER, QB.DIAMOND, YB.BALLOON, oB.BLACK, YB.SLEEPING, jB.ROTATION_4, YB.RIDING_MOB, YB.CAR, yB.MOONSTONE_MINING_DRILL, YB.HOVERCRAFT;
    let JB = function(BB) {
      return BB[BB.NORMAL = 0] = "NORMAL", BB[BB.GLIDING = 1] = "GLIDING", BB[BB.FLOATING = 2] = "FLOATING", BB
    }({})
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);