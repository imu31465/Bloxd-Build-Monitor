export const id = 102;
export const ids = [102];
export const modules = {
  41634: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      startWasmPadGameplay: () => fM
    });
    iM(41640);
    var OM = iM(41642),
      SM = iM(41656),
      jM = iM(2067),
      aM = iM(41669),
      PM = iM(5200),
      nM = iM(5188),
      QM = iM(41674),
      zM = iM(41677),
      LM = iM(5207),
      mM = iM(41739),
      HM = iM(2622),
      hM = iM(9451),
      JM = iM(41650),
      dM = iM(9425),
      yM = iM(40140);
    const lM = MM => {
        const rM = LM.c.indexOf(MM);
        if (rM < 0) throw new Error(`No core action "${MM}"`);
        return rM
      },
      EM = lM("primary-fire"),
      UM = lM("alt-fire"),
      GM = lM("mid-fire"),
      CM = lM("jump"),
      eM = lM("ReloadGun"),
      bM = lM("SwapCameraZoom"),
      wM = lM("TouchAction1"),
      tM = {
        SpecialAction1: lM("SpecialAction1"),
        SpecialAction2: lM("SpecialAction2")
      },
      gM = (MM, rM) => {
        (0, HM.y)(PM.L.PadAction, MM, 0, 0, (0, HM.u)(rM, performance.now()))
      },
      uM = MM => {
        gM(MM, aM.kd.Down)
      },
      RM = MM => {
        gM(MM, 0)
      },
      pM = MM => {
        uM(MM), RM(MM)
      },
      WM = () => {
        const MM = (0, zM.e)();
        return null !== MM && void 0 !== MM && MM.isCoreRunning ? MM : null
      },
      sM = MM => aM.v.playerFlags(MM.api.apiView, 0),
      DM = MM => null !== MM && aM.v.targetBlockId(MM.api.apiView, 0) !== aM.Pc,
      kM = () => {
        const MM = (0, hM.b)(),
          rM = new JM.e;
        let iM = !1;
        const OM = (MM, rM) => {
            (0, HM.y)(PM.L.PadLook, aM.rd.Rate, MM, rM, 0)
          },
          SM = () => {
            iM = !1, rM.reset(), OM(0, 0)
          };
        return {
          update: (SM, jM, nM) => {
            iM || (MM.discardPending(), iM = !0);
            const QM = (0, JM.n)(rM, SM, jM, nM, performance.now());
            OM(QM.yawRadPerSec, QM.pitchRadPerSec);
            const zM = MM.drainLookDelta();
            0 === zM.PD && 0 === zM.nD || (0, HM.y)(PM.L.PadLook, aM.rd.Gyro, zM.PD, zM.nD, 0)
          },
          release: SM,
          uninstall: SM
        }
      },
      ZM = () => {
        const MM = WM();
        return null !== MM && 0 !== (sM(MM) & aM.yd.PadSneakToggled)
      },
      oM = () => {
        const MM = (MM => {
          const rM = MM => function() {
            return (0, mM.b)(), MM(...arguments)
          };
          return {
            primaryFireDown: rM((MM => (gM(EM, aM.kd.Down | (MM ? aM.kd.Repeat : 0)), 0))),
            primaryFireUp: rM((() => {
              RM(EM)
            })),
            altFireDown: rM((() => (uM(UM), 0))),
            altFireUp: rM((() => {
              RM(UM)
            })),
            jumpDown: rM((() => {
              pM(CM)
            })),
            specialActionDown: rM((MM => {
              uM(tM[MM])
            })),
            specialActionUp: rM((MM => {
              RM(tM[MM])
            })),
            reloadGun: rM((() => {
              pM(eM)
            })),
            dropItem: rM((MM => {
              gM(aM.od.Drop, aM.kd.Down | (MM ? aM.kd.Stack : 0))
            })),
            swapCameraZoom: rM((() => {
              pM(bM)
            })),
            pickBlock: rM((() => (pM(GM), DM(MM()))))
          }
        })(WM);
        let rM = !1,
          iM = null;
        const OM = () => {
          var MM;
          null === (MM = iM) || void 0 === MM || MM(), iM = null
        };
        return {
          bodies: () => MM,
          look: kM(),
          move: (MM, iM) => {
            var SM;
            OM();
            const {
              bits: jM,
              flips: PM
            } = (MM => {
              if (null === MM) return {
                bits: aM.qd.Peek,
                flips: 0
              };
              const rM = MM.sneakHeld ? aM.qd.SneakHeld : 0;
              return "hold" === MM.mode ? {
                bits: rM | aM.qd.SneakHoldMode,
                flips: MM.sneakTogglePressed ? 1 : 0
              } : {
                bits: rM,
                flips: MM.sneakPressed || MM.sneakTogglePressed ? 1 : 0
              }
            })(iM);
            null !== (SM = WM()) && void 0 !== SM && SM.padMove(MM.x, MM.y, MM.magnitude, MM.headingOffset, (MM => aM.qd.Active | (MM.jumpHeld ? aM.qd.JumpHeld : 0) | (MM.jumpPressed ? aM.qd.JumpPressed : 0) | (MM.running ? aM.qd.Running : 0) | (MM.sprintHeld ? aM.qd.SprintHeld : 0))(MM) | jM, PM) && (rM = !0), (0, dM.g)(ZM())
          },
          stopMoving: () => {
            var MM;
            rM && (rM = !(null !== (MM = WM()) && void 0 !== MM && MM.padMove(0, 0, 0, 0, 0, 0)), OM(), iM = (0, nM.y)((() => {
              OM(), (0, dM.g)(ZM())
            })))
          },
          uninstall: OM,
          deviceChanged: MM => {
            var iM;
            "touch" === MM ? ((0, dM.g)(!1), null !== (iM = WM()) && void 0 !== iM && iM.padMove(0, 0, 0, 0, aM.qd.EndToggle, 0) && (rM = !1)) : "gamepad" === MM && (0, dM.g)(ZM())
          },
          hasPlayer: () => null !== WM(),
          isPlayerDead: () => {
            var MM;
            return !1 === (null === (MM = WM()) || void 0 === MM ? void 0 : MM.localPlayerAlive())
          },
          isReplayMode: () => {
            const MM = WM();
            return null !== MM && 0 !== (sM(MM) & aM.yd.Replay)
          },
          isFreeCameraOn: () => {
            const MM = WM();
            return null !== MM && 0 !== (sM(MM) & aM.yd.FreeCam)
          },
          targetsBlock: () => DM(WM()),
          selectedSlotEmpty: () => {
            var MM;
            return !(null !== (MM = WM()) && void 0 !== MM && MM.items.sQ())
          },
          pickBlockAllowed: () => !!jM.d.get("creative") && !!jM.d.get("canPickBlocks"),
          scrollHotbar: MM => {
            gM(aM.od.Hotbar, aM.kd.Down | (MM > 0 ? aM.kd.Next : 0))
          },
          hasFullInventory: QM.m,
          hasLobbyTab: () => (0, yM.d)({
            lobbyLeaderboardInfo: jM.d.get("lobbyLeaderboardInfo"),
            lobbyManage: jM.d.get("lobbyManage")
          }),
          contextActionInputs: () => {
            var MM, rM, iM, OM;
            const SM = WM();
            return {
              holdingGun: !1 !== (null === SM || void 0 === SM ? void 0 : SM.localPlayerAlive()) && "Gun" === (null === SM || void 0 === SM || null === (MM = SM.items.sQ()) || void 0 === MM || null === (rM = MM.typeObj) || void 0 === rM ? void 0 : rM.type),
              customButtons: null !== (iM = jM.d.get("customButtons")) && void 0 !== iM ? iM : null,
              touchscreenActionButton: null !== (OM = jM.d.get("touchscreenActionButton")) && void 0 !== OM ? OM : null
            }
          },
          pressTouchButton: MM => {
            MM ? uM(wM) : RM(wM)
          }
        }
      },
      fM = () => {
        const MM = (0, SM.d)(oM()),
          rM = (0, OM.c)(),
          iM = null;
        return () => {
          MM(), rM(), null === iM || void 0 === iM || iM()
        }
      }
  },
  5188: (MM, rM, iM) => {
    iM.d(rM, {
      A: () => gM,
      B: () => uM,
      F: () => lM,
      H: () => aM,
      I: () => PM,
      K: () => wM,
      e: () => bM,
      g: () => UM,
      i: () => pM,
      k: () => RM,
      n: () => yM,
      r: () => CM,
      v: () => EM,
      x: () => GM,
      y: () => tM
    });
    var OM = iM(5196);
    const SM = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let jM = SM;

    function aM(MM) {
      jM = null !== MM && void 0 !== MM ? MM : SM
    }

    function PM() {
      return jM
    }
    const nM = new Set,
      QM = new Set;
    let zM = -1;
    const LM = new Set,
      mM = new Set;
    let HM = 0,
      hM = 0;
    const JM = new Set,
      dM = new Set;

    function yM(MM) {
      return nM.add(MM), () => {
        nM.delete(MM)
      }
    }

    function lM(MM, rM) {
      for (const OM of nM) try {
        OM(MM)
      } catch (iM) {
        rM(iM)
      }
    }

    function EM(MM) {
      return QM.add(MM), () => {
        QM.delete(MM)
      }
    }

    function UM(MM, rM) {
      const iM = zM < 0 ? 0 : MM - zM;
      zM = MM;
      for (const SM of QM) try {
        SM(iM)
      } catch (OM) {
        rM(OM)
      }
    }

    function GM(MM) {
      return LM.add(MM), () => {
        LM.delete(MM)
      }
    }

    function CM(MM) {
      return mM.add(MM), () => {
        mM.delete(MM)
      }
    }
    let eM = 0;

    function bM(MM) {
      eM += MM
    }

    function wM() {
      const MM = eM;
      return eM = 0, MM
    }

    function tM(MM) {
      return JM.add(MM), () => {
        JM.delete(MM)
      }
    }

    function gM(MM) {
      return dM.add(MM), () => {
        dM.delete(MM)
      }
    }

    function uM() {
      HM = 0, hM = 0, zM = -1
    }

    function RM(MM, rM) {
      if ("paced" === MM) return hM += rM, null;
      if ("drawn" !== MM && "skipped" !== MM) return null;
      const iM = rM + hM;
      return hM = 0, iM
    }

    function pM(MM, rM, iM, SM) {
      const jM = (0, OM.l)(rM),
        aM = MM > 0 ? performance.now() : 0;
      for (let OM = 0; OM < MM; OM++)
        for (const MM of JM) try {
          MM()
        } catch (PM) {
          SM(PM)
        }
      if (MM > 0 && bM(performance.now() - aM), null !== iM) {
        for (const MM of LM) try {
          MM(iM)
        } catch (PM) {
          SM(PM)
        }
        HM += iM
      }
      if ("drawn" === rM) {
        const MM = HM;
        HM = 0;
        for (const rM of mM) try {
          rM(MM)
        } catch (PM) {
          SM(PM)
        }
      }
      for (const OM of dM) try {
        OM(MM, jM)
      } catch (PM) {
        SM(PM)
      }
    }
  },
  5207: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => SM,
      g: () => jM,
      j: () => aM,
      n: () => OM,
      o: () => PM
    });
    const OM = {
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
      SM = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      jM = {
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
      aM = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      PM = [16]
  },
  41739: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => aM,
      c: () => jM,
      e: () => SM
    });
    let OM = null;

    function SM(MM) {
      OM = MM
    }

    function jM(MM) {
      OM === MM && (OM = null)
    }

    function aM() {
      var MM;
      null === (MM = OM) || void 0 === MM || MM()
    }
  },
  5214: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => PM,
      h: () => aM,
      k: () => QM
    });
    var OM = iM(2619),
      SM = iM(2622);
    const jM = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function aM(MM) {
      return MM instanceof HTMLElement && (!!(MM.isContentEditable || MM instanceof HTMLTextAreaElement || MM instanceof HTMLSelectElement) || MM instanceof HTMLInputElement && !jM.has(MM.type))
    }

    function PM(MM) {
      let rM = null;
      const iM = iM => {
          const SM = aM(iM);
          SM !== rM && (rM = SM, MM(OM.l.UiCapture, OM.C.Keyboard, 0, 0, SM ? OM.C.Keyboard : 0))
        },
        SM = MM => {
          iM(MM.target)
        },
        jM = MM => {
          iM(MM.relatedTarget)
        },
        PM = () => {
          iM(document.activeElement)
        },
        nM = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", SM, nM), document.addEventListener("focusout", jM, nM), document.addEventListener("keydown", PM, nM), iM(document.activeElement), () => {
        document.removeEventListener("focusin", SM, nM), document.removeEventListener("focusout", jM, nM), document.removeEventListener("keydown", PM, nM)
      }
    }
    const nM = new Map;

    function QM(MM, rM) {
      var iM;
      let OM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      nM.set(OM, (null !== (iM = nM.get(OM)) && void 0 !== iM ? iM : 0) & ~MM | rM & MM);
      let jM = 0;
      for (const SM of nM.values()) jM |= SM;
      return (0, SM.B)(MM, jM & MM)
    }
  },
  37858: (MM, rM, iM) => {
    function OM(MM) {
      return MM.includes("Leaf Bed")
    }

    function SM(MM) {
      return / Bed(?: Head)?(?:\||$)/.test(MM) && !OM(MM)
    }

    function jM(MM) {
      return MM.includes(" Strongbed")
    }

    function aM(MM) {
      return OM(MM) || SM(MM) || jM(MM)
    }
    iM.d(rM, {
      e: () => aM,
      g: () => OM,
      h: () => jM,
      l: () => SM
    })
  },
  37855: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => QM
    });
    var OM = iM(37858),
      SM = iM(9816);
    const jM = [],
      aM = [],
      PM = [],
      nM = [];
    for (const zM of Object.keys(SM.p))(0, OM.g)(zM) ? jM.push(zM) : (0, OM.l)(zM) && aM.push(zM), (0, OM.h)(zM) && PM.push(zM), (zM.includes(" Bed Head") || zM.includes(" Strongbed Head")) && nM.push(zM);
    const QM = {
      leafBeds: jM,
      woolBeds: aM,
      strongBeds: PM,
      beds: [...jM, ...aM, ...PM],
      bedHeads: nM,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6944: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => aM,
      d: () => SM,
      e: () => nM,
      h: () => jM,
      l: () => QM,
      n: () => OM,
      o: () => PM
    });
    let OM = function(MM) {
        return MM[MM.DEFAULT = 0] = "DEFAULT", MM[MM.BOAT = 1] = "BOAT", MM[MM.GLIDER = 2] = "GLIDER", MM[MM.BALLOON = 3] = "BALLOON", MM[MM.SLEEPING = 4] = "SLEEPING", MM[MM.RIDING_MOB = 5] = "RIDING_MOB", MM[MM.CAR = 6] = "CAR", MM[MM.HOVERCRAFT = 7] = "HOVERCRAFT", MM
      }({}),
      SM = function(MM) {
        return MM[MM.WOOD = 0] = "WOOD", MM[MM.OBSIDIAN = 1] = "OBSIDIAN", MM[MM.SPEED = 2] = "SPEED", MM
      }({}),
      jM = function(MM) {
        return MM[MM.WOOD = 0] = "WOOD", MM[MM.IRON = 1] = "IRON", MM[MM.GOLD = 2] = "GOLD", MM[MM.DIAMOND = 3] = "DIAMOND", MM
      }({}),
      aM = function(MM) {
        return MM[MM.YELLOW = 0] = "YELLOW", MM[MM.WHITE = 1] = "WHITE", MM[MM.RED = 2] = "RED", MM[MM.PURPLE = 3] = "PURPLE", MM[MM.PINK = 4] = "PINK", MM[MM.ORANGE = 5] = "ORANGE", MM[MM.MAGENTA = 6] = "MAGENTA", MM[MM.LIME = 7] = "LIME", MM[MM.LIGHT_GRAY = 8] = "LIGHT_GRAY", MM[MM.LIGHT_BLUE = 9] = "LIGHT_BLUE", MM[MM.GREEN = 10] = "GREEN", MM[MM.GRAY = 11] = "GRAY", MM[MM.CYAN = 12] = "CYAN", MM[MM.BROWN = 13] = "BROWN", MM[MM.BLUE = 14] = "BLUE", MM[MM.BLACK = 15] = "BLACK", MM
      }({}),
      PM = function(MM) {
        return MM[MM.ROTATION_1 = 0] = "ROTATION_1", MM[MM.ROTATION_2 = 1] = "ROTATION_2", MM[MM.ROTATION_3 = 2] = "ROTATION_3", MM[MM.ROTATION_4 = 3] = "ROTATION_4", MM
      }({}),
      nM = function(MM) {
        return MM[MM.KART = 0] = "KART", MM[MM.OFF_ROADER = 1] = "OFF_ROADER", MM[MM.CAR = 2] = "CAR", MM[MM.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", MM[MM.ARMORED_CAR = 4] = "ARMORED_CAR", MM[MM.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", MM[MM.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", MM[MM.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", MM
      }({});
    OM.DEFAULT, OM.BOAT, SM.SPEED, OM.GLIDER, jM.DIAMOND, OM.BALLOON, aM.BLACK, OM.SLEEPING, PM.ROTATION_4, OM.RIDING_MOB, OM.CAR, nM.MOONSTONE_MINING_DRILL, OM.HOVERCRAFT;
    let QM = function(MM) {
      return MM[MM.NORMAL = 0] = "NORMAL", MM[MM.GLIDING = 1] = "GLIDING", MM[MM.FLOATING = 2] = "FLOATING", MM
    }({})
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);