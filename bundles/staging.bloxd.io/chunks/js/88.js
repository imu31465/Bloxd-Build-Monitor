export const id = 88;
export const ids = [88];
export const modules = {
  40461: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      startWasmPadGameplay: () => ND
    });
    wD(40468);
    var pD = wD(40477),
      sD = wD(40495),
      KD = wD(1956),
      rD = wD(40506),
      LD = wD(4820),
      cD = wD(4800),
      gD = wD(40512),
      RD = wD(40516),
      AD = wD(4827),
      UD = wD(40582),
      fD = wD(2389),
      ID = wD(8855),
      BD = wD(40483),
      GD = wD(8833),
      hD = wD(39079);
    const nD = DD => {
        const zD = AD.c.indexOf(DD);
        if (zD < 0) throw new Error(`No core action "${DD}"`);
        return zD
      },
      MD = nD("primary-fire"),
      OD = nD("alt-fire"),
      JD = nD("mid-fire"),
      ED = nD("jump"),
      QD = nD("ReloadGun"),
      XD = nD("SwapCameraZoom"),
      VD = nD("TouchAction1"),
      PD = {
        SpecialAction1: nD("SpecialAction1"),
        SpecialAction2: nD("SpecialAction2")
      },
      CD = (DD, zD) => {
        (0, fD.s)(LD.J.PadAction, DD, 0, 0, (0, fD.p)(zD, performance.now()))
      },
      xD = DD => {
        CD(DD, rD.pd.Down)
      },
      TD = DD => {
        CD(DD, 0)
      },
      bD = DD => {
        xD(DD), TD(DD)
      },
      jD = () => {
        const DD = (0, RD.i)();
        return null !== DD && void 0 !== DD && DD.isCoreRunning ? DD : null
      },
      dD = DD => rD.v.playerFlags(DD.api.apiView, 0),
      SD = DD => null !== DD && rD.v.targetBlockId(DD.api.apiView, 0) !== rD.Xc,
      iD = () => {
        const DD = (0, ID.c)(),
          zD = new BD.e;
        let wD = !1;
        const pD = (DD, zD) => {
            (0, fD.s)(LD.J.PadLook, rD.ud.Rate, DD, zD, 0)
          },
          sD = () => {
            wD = !1, zD.reset(), pD(0, 0)
          };
        return {
          update: (sD, KD, cD) => {
            wD || (DD.discardPending(), wD = !0);
            const gD = (0, BD.t)(zD, sD, KD, cD, performance.now());
            pD(gD.yawRadPerSec, gD.pitchRadPerSec);
            const RD = DD.drainLookDelta();
            0 === RD.aT && 0 === RD.qT || (0, fD.s)(LD.J.PadLook, rD.ud.Gyro, RD.aT, RD.qT, 0)
          },
          release: sD,
          uninstall: sD
        }
      },
      lD = () => {
        const DD = jD();
        return null !== DD && 0 !== (dD(DD) & rD.Ad.PadSneakToggled)
      },
      WD = () => {
        const DD = (DD => {
          const zD = DD => function() {
            return (0, UD.e)(), DD(...arguments)
          };
          return {
            primaryFireDown: zD((() => (xD(MD), 0))),
            primaryFireUp: zD((() => {
              TD(MD)
            })),
            altFireDown: zD((() => (xD(OD), 0))),
            altFireUp: zD((() => {
              TD(OD)
            })),
            jumpDown: zD((() => {
              bD(ED)
            })),
            specialActionDown: zD((DD => {
              xD(PD[DD])
            })),
            specialActionUp: zD((DD => {
              TD(PD[DD])
            })),
            reloadGun: zD((() => {
              bD(QD)
            })),
            dropItem: zD((DD => {
              CD(rD.qd.Drop, rD.pd.Down | (DD ? rD.pd.Stack : 0))
            })),
            swapCameraZoom: zD((() => {
              bD(XD)
            })),
            pickBlock: zD((() => (bD(JD), SD(DD()))))
          }
        })(jD);
        let zD = !1,
          wD = null;
        const pD = () => {
          var DD;
          null === (DD = wD) || void 0 === DD || DD(), wD = null
        };
        return {
          bodies: () => DD,
          look: iD(),
          move: (DD, wD) => {
            var sD;
            pD();
            const {
              bits: KD,
              flips: LD
            } = (DD => {
              if (null === DD) return {
                bits: rD.sd.Peek,
                flips: 0
              };
              const zD = DD.sneakHeld ? rD.sd.SneakHeld : 0;
              return "hold" === DD.mode ? {
                bits: zD | rD.sd.SneakHoldMode,
                flips: DD.sneakTogglePressed ? 1 : 0
              } : {
                bits: zD,
                flips: DD.sneakPressed || DD.sneakTogglePressed ? 1 : 0
              }
            })(wD);
            null !== (sD = jD()) && void 0 !== sD && sD.padMove(DD.x, DD.y, DD.magnitude, DD.headingOffset, (DD => rD.sd.Active | (DD.jumpHeld ? rD.sd.JumpHeld : 0) | (DD.jumpPressed ? rD.sd.JumpPressed : 0) | (DD.running ? rD.sd.Running : 0) | (DD.sprintHeld ? rD.sd.SprintHeld : 0))(DD) | KD, LD) && (zD = !0), (0, GD.e)(lD())
          },
          stopMoving: () => {
            var DD;
            zD && (zD = !(null !== (DD = jD()) && void 0 !== DD && DD.padMove(0, 0, 0, 0, 0, 0)), pD(), wD = (0, cD.v)((() => {
              pD(), (0, GD.e)(lD())
            })))
          },
          uninstall: pD,
          deviceChanged: DD => {
            var wD;
            "touch" === DD ? ((0, GD.e)(!1), null !== (wD = jD()) && void 0 !== wD && wD.padMove(0, 0, 0, 0, rD.sd.EndToggle, 0) && (zD = !1)) : "gamepad" === DD && (0, GD.e)(lD())
          },
          hasPlayer: () => null !== jD(),
          isPlayerDead: () => {
            var DD;
            return !1 === (null === (DD = jD()) || void 0 === DD ? void 0 : DD.localPlayerAlive())
          },
          isReplayMode: () => {
            const DD = jD();
            return null !== DD && 0 !== (dD(DD) & rD.Ad.Replay)
          },
          isFreeCameraOn: () => {
            const DD = jD();
            return null !== DD && 0 !== (dD(DD) & rD.Ad.FreeCam)
          },
          targetsBlock: () => SD(jD()),
          selectedSlotEmpty: () => {
            var DD;
            return !(null !== (DD = jD()) && void 0 !== DD && DD.items.Qg())
          },
          pickBlockAllowed: () => !!KD.e.get("creative") && !!KD.e.get("canPickBlocks"),
          scrollHotbar: DD => {
            CD(rD.qd.Hotbar, rD.pd.Down | (DD > 0 ? rD.pd.Next : 0))
          },
          hasFullInventory: gD.l,
          hasLobbyTab: () => (0, hD.b)({
            lobbyLeaderboardInfo: KD.e.get("lobbyLeaderboardInfo"),
            lobbyManage: KD.e.get("lobbyManage")
          }),
          contextActionInputs: () => {
            var DD, zD, wD, pD;
            const sD = jD();
            return {
              holdingGun: !1 !== (null === sD || void 0 === sD ? void 0 : sD.localPlayerAlive()) && "Gun" === (null === sD || void 0 === sD || null === (DD = sD.items.Qg()) || void 0 === DD || null === (zD = DD.typeObj) || void 0 === zD ? void 0 : zD.type),
              customButtons: null !== (wD = KD.e.get("customButtons")) && void 0 !== wD ? wD : null,
              touchscreenActionButton: null !== (pD = KD.e.get("touchscreenActionButton")) && void 0 !== pD ? pD : null
            }
          },
          pressTouchButton: DD => {
            DD ? xD(VD) : TD(VD)
          }
        }
      },
      ND = () => {
        const DD = (0, sD.e)(WD()),
          zD = (0, pD.e)(),
          wD = null;
        return () => {
          DD(), zD(), null === wD || void 0 === wD || wD()
        }
      }
  },
  4800: (DD, zD, wD) => {
    wD.d(zD, {
      A: () => nD,
      C: () => rD,
      G: () => LD,
      I: () => VD,
      b: () => XD,
      c: () => OD,
      f: () => bD,
      h: () => TD,
      l: () => hD,
      p: () => ED,
      q: () => MD,
      t: () => JD,
      v: () => PD,
      w: () => CD,
      y: () => xD
    });
    var pD = wD(4808);
    const sD = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let KD = sD;

    function rD(DD) {
      KD = null !== DD && void 0 !== DD ? DD : sD
    }

    function LD() {
      return KD
    }
    const cD = new Set,
      gD = new Set;
    let RD = -1;
    const AD = new Set,
      UD = new Set;
    let fD = 0,
      ID = 0;
    const BD = new Set,
      GD = new Set;

    function hD(DD) {
      return cD.add(DD), () => {
        cD.delete(DD)
      }
    }

    function nD(DD, zD) {
      for (const pD of cD) try {
        pD(DD)
      } catch (wD) {
        zD(wD)
      }
    }

    function MD(DD) {
      return gD.add(DD), () => {
        gD.delete(DD)
      }
    }

    function OD(DD, zD) {
      const wD = RD < 0 ? 0 : DD - RD;
      RD = DD;
      for (const sD of gD) try {
        sD(wD)
      } catch (pD) {
        zD(pD)
      }
    }

    function JD(DD) {
      return AD.add(DD), () => {
        AD.delete(DD)
      }
    }

    function ED(DD) {
      return UD.add(DD), () => {
        UD.delete(DD)
      }
    }
    let QD = 0;

    function XD(DD) {
      QD += DD
    }

    function VD() {
      const DD = QD;
      return QD = 0, DD
    }

    function PD(DD) {
      return BD.add(DD), () => {
        BD.delete(DD)
      }
    }

    function CD(DD) {
      return GD.add(DD), () => {
        GD.delete(DD)
      }
    }

    function xD() {
      fD = 0, ID = 0, RD = -1
    }

    function TD(DD, zD) {
      if ("paced" === DD) return ID += zD, null;
      if ("drawn" !== DD && "skipped" !== DD) return null;
      const wD = zD + ID;
      return ID = 0, wD
    }

    function bD(DD, zD, wD, sD) {
      const KD = (0, pD.f)(zD),
        rD = DD > 0 ? performance.now() : 0;
      for (let pD = 0; pD < DD; pD++)
        for (const DD of BD) try {
          DD()
        } catch (LD) {
          sD(LD)
        }
      if (DD > 0 && XD(performance.now() - rD), null !== wD) {
        for (const DD of AD) try {
          DD(wD)
        } catch (LD) {
          sD(LD)
        }
        fD += wD
      }
      if ("drawn" === zD) {
        const DD = fD;
        fD = 0;
        for (const zD of UD) try {
          zD(DD)
        } catch (LD) {
          sD(LD)
        }
      }
      for (const pD of GD) try {
        pD(DD, KD)
      } catch (LD) {
        sD(LD)
      }
    }
  },
  4827: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => sD,
      f: () => KD,
      i: () => rD,
      j: () => pD,
      l: () => LD
    });
    const pD = {
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
      sD = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      KD = {
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
      rD = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      LD = [16]
  },
  40582: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => rD,
      i: () => KD,
      m: () => sD
    });
    let pD = null;

    function sD(DD) {
      pD = DD
    }

    function KD(DD) {
      pD === DD && (pD = null)
    }

    function rD() {
      var DD;
      null === (DD = pD) || void 0 === DD || DD()
    }
  },
  4832: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => LD,
      g: () => rD,
      j: () => gD
    });
    var pD = wD(2382),
      sD = wD(2389);
    const KD = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function rD(DD) {
      return DD instanceof HTMLElement && (!!(DD.isContentEditable || DD instanceof HTMLTextAreaElement || DD instanceof HTMLSelectElement) || DD instanceof HTMLInputElement && !KD.has(DD.type))
    }

    function LD(DD) {
      let zD = null;
      const wD = wD => {
          const sD = rD(wD);
          sD !== zD && (zD = sD, DD(pD.h.UiCapture, pD.s.Keyboard, 0, 0, sD ? pD.s.Keyboard : 0))
        },
        sD = DD => {
          wD(DD.target)
        },
        KD = DD => {
          wD(DD.relatedTarget)
        },
        LD = () => {
          wD(document.activeElement)
        },
        cD = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", sD, cD), document.addEventListener("focusout", KD, cD), document.addEventListener("keydown", LD, cD), wD(document.activeElement), () => {
        document.removeEventListener("focusin", sD, cD), document.removeEventListener("focusout", KD, cD), document.removeEventListener("keydown", LD, cD)
      }
    }
    const cD = new Map;

    function gD(DD, zD) {
      var wD;
      let pD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      cD.set(pD, (null !== (wD = cD.get(pD)) && void 0 !== wD ? wD : 0) & ~DD | zD & DD);
      let KD = 0;
      for (const sD of cD.values()) KD |= sD;
      return (0, sD.A)(DD, KD & DD)
    }
  },
  36897: (DD, zD, wD) => {
    function pD(DD) {
      return DD.includes("Leaf Bed")
    }

    function sD(DD) {
      return / Bed(?: Head)?(?:\||$)/.test(DD) && !pD(DD)
    }

    function KD(DD) {
      return DD.includes(" Strongbed")
    }

    function rD(DD) {
      return pD(DD) || sD(DD) || KD(DD)
    }
    wD.d(zD, {
      b: () => rD,
      d: () => pD,
      e: () => KD,
      f: () => sD
    })
  },
  36891: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => gD
    });
    var pD = wD(36897),
      sD = wD(9198);
    const KD = [],
      rD = [],
      LD = [],
      cD = [];
    for (const RD of Object.keys(sD.q))(0, pD.d)(RD) ? KD.push(RD) : (0, pD.f)(RD) && rD.push(RD), (0, pD.e)(RD) && LD.push(RD), (RD.includes(" Bed Head") || RD.includes(" Strongbed Head")) && cD.push(RD);
    const gD = {
      leafBeds: KD,
      woolBeds: rD,
      strongBeds: LD,
      beds: [...KD, ...rD, ...LD],
      bedHeads: cD,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6520: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => rD,
      i: () => sD,
      j: () => cD,
      k: () => KD,
      o: () => gD,
      q: () => pD,
      t: () => LD
    });
    let pD = function(DD) {
        return DD[DD.DEFAULT = 0] = "DEFAULT", DD[DD.BOAT = 1] = "BOAT", DD[DD.GLIDER = 2] = "GLIDER", DD[DD.BALLOON = 3] = "BALLOON", DD[DD.SLEEPING = 4] = "SLEEPING", DD[DD.RIDING_MOB = 5] = "RIDING_MOB", DD[DD.CAR = 6] = "CAR", DD[DD.HOVERCRAFT = 7] = "HOVERCRAFT", DD
      }({}),
      sD = function(DD) {
        return DD[DD.WOOD = 0] = "WOOD", DD[DD.OBSIDIAN = 1] = "OBSIDIAN", DD[DD.SPEED = 2] = "SPEED", DD
      }({}),
      KD = function(DD) {
        return DD[DD.WOOD = 0] = "WOOD", DD[DD.IRON = 1] = "IRON", DD[DD.GOLD = 2] = "GOLD", DD[DD.DIAMOND = 3] = "DIAMOND", DD
      }({}),
      rD = function(DD) {
        return DD[DD.YELLOW = 0] = "YELLOW", DD[DD.WHITE = 1] = "WHITE", DD[DD.RED = 2] = "RED", DD[DD.PURPLE = 3] = "PURPLE", DD[DD.PINK = 4] = "PINK", DD[DD.ORANGE = 5] = "ORANGE", DD[DD.MAGENTA = 6] = "MAGENTA", DD[DD.LIME = 7] = "LIME", DD[DD.LIGHT_GRAY = 8] = "LIGHT_GRAY", DD[DD.LIGHT_BLUE = 9] = "LIGHT_BLUE", DD[DD.GREEN = 10] = "GREEN", DD[DD.GRAY = 11] = "GRAY", DD[DD.CYAN = 12] = "CYAN", DD[DD.BROWN = 13] = "BROWN", DD[DD.BLUE = 14] = "BLUE", DD[DD.BLACK = 15] = "BLACK", DD
      }({}),
      LD = function(DD) {
        return DD[DD.ROTATION_1 = 0] = "ROTATION_1", DD[DD.ROTATION_2 = 1] = "ROTATION_2", DD[DD.ROTATION_3 = 2] = "ROTATION_3", DD[DD.ROTATION_4 = 3] = "ROTATION_4", DD
      }({}),
      cD = function(DD) {
        return DD[DD.KART = 0] = "KART", DD[DD.OFF_ROADER = 1] = "OFF_ROADER", DD[DD.CAR = 2] = "CAR", DD[DD.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", DD[DD.ARMORED_CAR = 4] = "ARMORED_CAR", DD[DD.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", DD[DD.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", DD[DD.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", DD
      }({});
    pD.DEFAULT, pD.BOAT, sD.SPEED, pD.GLIDER, KD.DIAMOND, pD.BALLOON, rD.BLACK, pD.SLEEPING, LD.ROTATION_4, pD.RIDING_MOB, pD.CAR, cD.MOONSTONE_MINING_DRILL, pD.HOVERCRAFT;
    let gD = function(DD) {
      return DD[DD.NORMAL = 0] = "NORMAL", DD[DD.GLIDING = 1] = "GLIDING", DD[DD.FLOATING = 2] = "FLOATING", DD
    }({})
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);