export const id = 89;
export const ids = [89];
export const modules = {
  40637: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      startWasmPadGameplay: () => AB
    });
    zB(40640);
    var QB = zB(40647),
      nB = zB(40667),
      dB = zB(2006),
      IB = zB(40682),
      NB = zB(4893),
      uB = zB(4873),
      UB = zB(40686),
      aB = zB(40695),
      pB = zB(4906),
      rB = zB(40753),
      sB = zB(2491),
      JB = zB(8850),
      mB = zB(40650),
      yB = zB(8821),
      kB = zB(39199);
    const GB = BB => {
        const jB = pB.e.indexOf(BB);
        if (jB < 0) throw new Error(`No core action "${BB}"`);
        return jB
      },
      LB = GB("primary-fire"),
      gB = GB("alt-fire"),
      tB = GB("mid-fire"),
      SB = GB("jump"),
      MB = GB("ReloadGun"),
      EB = GB("SwapCameraZoom"),
      iB = GB("TouchAction1"),
      qB = {
        SpecialAction1: GB("SpecialAction1"),
        SpecialAction2: GB("SpecialAction2")
      },
      fB = (BB, jB) => {
        (0, sB.t)(NB.D.PadAction, BB, 0, 0, (0, sB.r)(jB, performance.now()))
      },
      oB = BB => {
        fB(BB, IB.Hd.Down)
      },
      HB = BB => {
        fB(BB, 0)
      },
      DB = BB => {
        oB(BB), HB(BB)
      },
      FB = () => {
        const BB = (0, aB.g)();
        return null !== BB && void 0 !== BB && BB.isCoreRunning ? BB : null
      },
      YB = BB => IB.w.playerFlags(BB.api.apiView, 0),
      VB = BB => null !== BB && IB.w.targetBlockId(BB.api.apiView, 0) !== IB.ld,
      hB = () => {
        const BB = (0, JB.b)(),
          jB = new mB.b;
        let zB = !1;
        const QB = (BB, jB) => {
            (0, sB.t)(NB.D.PadLook, IB.Od.Rate, BB, jB, 0)
          },
          nB = () => {
            zB = !1, jB.reset(), QB(0, 0)
          };
        return {
          update: (nB, dB, uB) => {
            zB || (BB.discardPending(), zB = !0);
            const UB = (0, mB.r)(jB, nB, dB, uB, performance.now());
            QB(UB.yawRadPerSec, UB.pitchRadPerSec);
            const aB = BB.drainLookDelta();
            0 === aB.bD && 0 === aB.RD || (0, sB.t)(NB.D.PadLook, IB.Od.Gyro, aB.bD, aB.RD, 0)
          },
          release: nB,
          uninstall: nB
        }
      },
      XB = () => {
        const BB = FB();
        return null !== BB && 0 !== (YB(BB) & IB.Sd.PadSneakToggled)
      },
      ZB = () => {
        const BB = (BB => {
          const jB = BB => function() {
            return (0, rB.e)(), BB(...arguments)
          };
          return {
            primaryFireDown: jB((BB => (fB(LB, IB.Hd.Down | (BB ? IB.Hd.Repeat : 0)), 0))),
            primaryFireUp: jB((() => {
              HB(LB)
            })),
            altFireDown: jB((() => (oB(gB), 0))),
            altFireUp: jB((() => {
              HB(gB)
            })),
            jumpDown: jB((() => {
              DB(SB)
            })),
            specialActionDown: jB((BB => {
              oB(qB[BB])
            })),
            specialActionUp: jB((BB => {
              HB(qB[BB])
            })),
            reloadGun: jB((() => {
              DB(MB)
            })),
            dropItem: jB((BB => {
              fB(IB.Jd.Drop, IB.Hd.Down | (BB ? IB.Hd.Stack : 0))
            })),
            swapCameraZoom: jB((() => {
              DB(EB)
            })),
            pickBlock: jB((() => (DB(tB), VB(BB()))))
          }
        })(FB);
        let jB = !1,
          zB = null;
        const QB = () => {
          var BB;
          null === (BB = zB) || void 0 === BB || BB(), zB = null
        };
        return {
          bodies: () => BB,
          look: hB(),
          move: (BB, zB) => {
            var nB;
            QB();
            const {
              bits: dB,
              flips: NB
            } = (BB => {
              if (null === BB) return {
                bits: IB.Kd.Peek,
                flips: 0
              };
              const jB = BB.sneakHeld ? IB.Kd.SneakHeld : 0;
              return "hold" === BB.mode ? {
                bits: jB | IB.Kd.SneakHoldMode,
                flips: BB.sneakTogglePressed ? 1 : 0
              } : {
                bits: jB,
                flips: BB.sneakPressed || BB.sneakTogglePressed ? 1 : 0
              }
            })(zB);
            null !== (nB = FB()) && void 0 !== nB && nB.padMove(BB.x, BB.y, BB.magnitude, BB.headingOffset, (BB => IB.Kd.Active | (BB.jumpHeld ? IB.Kd.JumpHeld : 0) | (BB.jumpPressed ? IB.Kd.JumpPressed : 0) | (BB.running ? IB.Kd.Running : 0) | (BB.sprintHeld ? IB.Kd.SprintHeld : 0))(BB) | dB, NB) && (jB = !0), (0, yB.f)(XB())
          },
          stopMoving: () => {
            var BB;
            jB && (jB = !(null !== (BB = FB()) && void 0 !== BB && BB.padMove(0, 0, 0, 0, 0, 0)), QB(), zB = (0, uB.y)((() => {
              QB(), (0, yB.f)(XB())
            })))
          },
          uninstall: QB,
          deviceChanged: BB => {
            var zB;
            "touch" === BB ? ((0, yB.f)(!1), null !== (zB = FB()) && void 0 !== zB && zB.padMove(0, 0, 0, 0, IB.Kd.EndToggle, 0) && (jB = !1)) : "gamepad" === BB && (0, yB.f)(XB())
          },
          hasPlayer: () => null !== FB(),
          isPlayerDead: () => {
            var BB;
            return !1 === (null === (BB = FB()) || void 0 === BB ? void 0 : BB.localPlayerAlive())
          },
          isReplayMode: () => {
            const BB = FB();
            return null !== BB && 0 !== (YB(BB) & IB.Sd.Replay)
          },
          isFreeCameraOn: () => {
            const BB = FB();
            return null !== BB && 0 !== (YB(BB) & IB.Sd.FreeCam)
          },
          targetsBlock: () => VB(FB()),
          selectedSlotEmpty: () => {
            var BB;
            return !(null !== (BB = FB()) && void 0 !== BB && BB.items.DN())
          },
          pickBlockAllowed: () => !!dB.c.get("creative") && !!dB.c.get("canPickBlocks"),
          scrollHotbar: BB => {
            fB(IB.Jd.Hotbar, IB.Hd.Down | (BB > 0 ? IB.Hd.Next : 0))
          },
          hasFullInventory: UB.m,
          hasLobbyTab: () => (0, kB.c)({
            lobbyLeaderboardInfo: dB.c.get("lobbyLeaderboardInfo"),
            lobbyManage: dB.c.get("lobbyManage")
          }),
          contextActionInputs: () => {
            var BB, jB, zB, QB;
            const nB = FB();
            return {
              holdingGun: !1 !== (null === nB || void 0 === nB ? void 0 : nB.localPlayerAlive()) && "Gun" === (null === nB || void 0 === nB || null === (BB = nB.items.DN()) || void 0 === BB || null === (jB = BB.typeObj) || void 0 === jB ? void 0 : jB.type),
              customButtons: null !== (zB = dB.c.get("customButtons")) && void 0 !== zB ? zB : null,
              touchscreenActionButton: null !== (QB = dB.c.get("touchscreenActionButton")) && void 0 !== QB ? QB : null
            }
          },
          pressTouchButton: BB => {
            BB ? oB(iB) : HB(iB)
          }
        }
      },
      AB = () => {
        const BB = (0, nB.c)(ZB()),
          jB = (0, QB.b)(),
          zB = null;
        return () => {
          BB(), jB(), null === zB || void 0 === zB || zB()
        }
      }
  },
  4873: (BB, jB, zB) => {
    zB.d(jB, {
      B: () => fB,
      E: () => oB,
      F: () => GB,
      H: () => IB,
      I: () => NB,
      K: () => iB,
      e: () => EB,
      g: () => gB,
      h: () => DB,
      l: () => HB,
      p: () => kB,
      r: () => SB,
      t: () => LB,
      u: () => tB,
      y: () => qB
    });
    var QB = zB(4879);
    const nB = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let dB = nB;

    function IB(BB) {
      dB = null !== BB && void 0 !== BB ? BB : nB
    }

    function NB() {
      return dB
    }
    const uB = new Set,
      UB = new Set;
    let aB = -1;
    const pB = new Set,
      rB = new Set;
    let sB = 0,
      JB = 0;
    const mB = new Set,
      yB = new Set;

    function kB(BB) {
      return uB.add(BB), () => {
        uB.delete(BB)
      }
    }

    function GB(BB, jB) {
      for (const QB of uB) try {
        QB(BB)
      } catch (zB) {
        jB(zB)
      }
    }

    function LB(BB) {
      return UB.add(BB), () => {
        UB.delete(BB)
      }
    }

    function gB(BB, jB) {
      const zB = aB < 0 ? 0 : BB - aB;
      aB = BB;
      for (const nB of UB) try {
        nB(zB)
      } catch (QB) {
        jB(QB)
      }
    }

    function tB(BB) {
      return pB.add(BB), () => {
        pB.delete(BB)
      }
    }

    function SB(BB) {
      return rB.add(BB), () => {
        rB.delete(BB)
      }
    }
    let MB = 0;

    function EB(BB) {
      MB += BB
    }

    function iB() {
      const BB = MB;
      return MB = 0, BB
    }

    function qB(BB) {
      return mB.add(BB), () => {
        mB.delete(BB)
      }
    }

    function fB(BB) {
      return yB.add(BB), () => {
        yB.delete(BB)
      }
    }

    function oB() {
      sB = 0, JB = 0, aB = -1
    }

    function HB(BB, jB) {
      if ("paced" === BB) return JB += jB, null;
      if ("drawn" !== BB && "skipped" !== BB) return null;
      const zB = jB + JB;
      return JB = 0, zB
    }

    function DB(BB, jB, zB, nB) {
      const dB = (0, QB.i)(jB),
        IB = BB > 0 ? performance.now() : 0;
      for (let QB = 0; QB < BB; QB++)
        for (const BB of mB) try {
          BB()
        } catch (NB) {
          nB(NB)
        }
      if (BB > 0 && EB(performance.now() - IB), null !== zB) {
        for (const BB of pB) try {
          BB(zB)
        } catch (NB) {
          nB(NB)
        }
        sB += zB
      }
      if ("drawn" === jB) {
        const BB = sB;
        sB = 0;
        for (const jB of rB) try {
          jB(BB)
        } catch (NB) {
          nB(NB)
        }
      }
      for (const QB of yB) try {
        QB(BB, dB)
      } catch (NB) {
        nB(NB)
      }
    }
  },
  4906: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => nB,
      i: () => dB,
      m: () => IB,
      n: () => QB,
      r: () => NB
    });
    const QB = {
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
      nB = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      dB = {
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
      IB = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      NB = [16]
  },
  40753: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => IB,
      h: () => dB,
      l: () => nB
    });
    let QB = null;

    function nB(BB) {
      QB = BB
    }

    function dB(BB) {
      QB === BB && (QB = null)
    }

    function IB() {
      var BB;
      null === (BB = QB) || void 0 === BB || BB()
    }
  },
  4909: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => NB,
      h: () => IB,
      l: () => UB
    });
    var QB = zB(2482),
      nB = zB(2491);
    const dB = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function IB(BB) {
      return BB instanceof HTMLElement && (!!(BB.isContentEditable || BB instanceof HTMLTextAreaElement || BB instanceof HTMLSelectElement) || BB instanceof HTMLInputElement && !dB.has(BB.type))
    }

    function NB(BB) {
      let jB = null;
      const zB = zB => {
          const nB = IB(zB);
          nB !== jB && (jB = nB, BB(QB.j.UiCapture, QB.t.Keyboard, 0, 0, nB ? QB.t.Keyboard : 0))
        },
        nB = BB => {
          zB(BB.target)
        },
        dB = BB => {
          zB(BB.relatedTarget)
        },
        NB = () => {
          zB(document.activeElement)
        },
        uB = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", nB, uB), document.addEventListener("focusout", dB, uB), document.addEventListener("keydown", NB, uB), zB(document.activeElement), () => {
        document.removeEventListener("focusin", nB, uB), document.removeEventListener("focusout", dB, uB), document.removeEventListener("keydown", NB, uB)
      }
    }
    const uB = new Map;

    function UB(BB, jB) {
      var zB;
      let QB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      uB.set(QB, (null !== (zB = uB.get(QB)) && void 0 !== zB ? zB : 0) & ~BB | jB & BB);
      let dB = 0;
      for (const nB of uB.values()) dB |= nB;
      return (0, nB.D)(BB, dB & BB)
    }
  },
  37002: (BB, jB, zB) => {
    function QB(BB) {
      return BB.includes("Leaf Bed")
    }

    function nB(BB) {
      return / Bed(?: Head)?(?:\||$)/.test(BB) && !QB(BB)
    }

    function dB(BB) {
      return BB.includes(" Strongbed")
    }

    function IB(BB) {
      return QB(BB) || nB(BB) || dB(BB)
    }
    zB.d(jB, {
      b: () => IB,
      f: () => QB,
      h: () => dB,
      i: () => nB
    })
  },
  36998: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => UB
    });
    var QB = zB(37002),
      nB = zB(9266);
    const dB = [],
      IB = [],
      NB = [],
      uB = [];
    for (const aB of Object.keys(nB.l))(0, QB.f)(aB) ? dB.push(aB) : (0, QB.i)(aB) && IB.push(aB), (0, QB.h)(aB) && NB.push(aB), (aB.includes(" Bed Head") || aB.includes(" Strongbed Head")) && uB.push(aB);
    const UB = {
      leafBeds: dB,
      woolBeds: IB,
      strongBeds: NB,
      beds: [...dB, ...IB, ...NB],
      bedHeads: uB,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6428: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => IB,
      i: () => nB,
      l: () => uB,
      o: () => dB,
      r: () => UB,
      t: () => QB,
      u: () => NB
    });
    let QB = function(BB) {
        return BB[BB.DEFAULT = 0] = "DEFAULT", BB[BB.BOAT = 1] = "BOAT", BB[BB.GLIDER = 2] = "GLIDER", BB[BB.BALLOON = 3] = "BALLOON", BB[BB.SLEEPING = 4] = "SLEEPING", BB[BB.RIDING_MOB = 5] = "RIDING_MOB", BB[BB.CAR = 6] = "CAR", BB[BB.HOVERCRAFT = 7] = "HOVERCRAFT", BB
      }({}),
      nB = function(BB) {
        return BB[BB.WOOD = 0] = "WOOD", BB[BB.OBSIDIAN = 1] = "OBSIDIAN", BB[BB.SPEED = 2] = "SPEED", BB
      }({}),
      dB = function(BB) {
        return BB[BB.WOOD = 0] = "WOOD", BB[BB.IRON = 1] = "IRON", BB[BB.GOLD = 2] = "GOLD", BB[BB.DIAMOND = 3] = "DIAMOND", BB
      }({}),
      IB = function(BB) {
        return BB[BB.YELLOW = 0] = "YELLOW", BB[BB.WHITE = 1] = "WHITE", BB[BB.RED = 2] = "RED", BB[BB.PURPLE = 3] = "PURPLE", BB[BB.PINK = 4] = "PINK", BB[BB.ORANGE = 5] = "ORANGE", BB[BB.MAGENTA = 6] = "MAGENTA", BB[BB.LIME = 7] = "LIME", BB[BB.LIGHT_GRAY = 8] = "LIGHT_GRAY", BB[BB.LIGHT_BLUE = 9] = "LIGHT_BLUE", BB[BB.GREEN = 10] = "GREEN", BB[BB.GRAY = 11] = "GRAY", BB[BB.CYAN = 12] = "CYAN", BB[BB.BROWN = 13] = "BROWN", BB[BB.BLUE = 14] = "BLUE", BB[BB.BLACK = 15] = "BLACK", BB
      }({}),
      NB = function(BB) {
        return BB[BB.ROTATION_1 = 0] = "ROTATION_1", BB[BB.ROTATION_2 = 1] = "ROTATION_2", BB[BB.ROTATION_3 = 2] = "ROTATION_3", BB[BB.ROTATION_4 = 3] = "ROTATION_4", BB
      }({}),
      uB = function(BB) {
        return BB[BB.KART = 0] = "KART", BB[BB.OFF_ROADER = 1] = "OFF_ROADER", BB[BB.CAR = 2] = "CAR", BB[BB.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", BB[BB.ARMORED_CAR = 4] = "ARMORED_CAR", BB[BB.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", BB[BB.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", BB[BB.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", BB
      }({});
    QB.DEFAULT, QB.BOAT, nB.SPEED, QB.GLIDER, dB.DIAMOND, QB.BALLOON, IB.BLACK, QB.SLEEPING, NB.ROTATION_4, QB.RIDING_MOB, QB.CAR, uB.MOONSTONE_MINING_DRILL, QB.HOVERCRAFT;
    let UB = function(BB) {
      return BB[BB.NORMAL = 0] = "NORMAL", BB[BB.GLIDING = 1] = "GLIDING", BB[BB.FLOATING = 2] = "FLOATING", BB
    }({})
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);