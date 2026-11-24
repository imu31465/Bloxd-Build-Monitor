export const id = 89;
export const ids = [89];
export const modules = {
  40666: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      startWasmPadGameplay: () => PT
    });
    mT(40670);
    var WT = mT(40677),
      zT = mT(40699),
      MT = mT(2067),
      gT = mT(40709),
      nT = mT(4904),
      HT = mT(4883),
      kT = mT(40717),
      jT = mT(40724),
      lT = mT(4912),
      LT = mT(40802),
      pT = mT(2525),
      BT = mT(8967),
      ZT = mT(40686),
      cT = mT(8950),
      vT = mT(39251);
    const fT = TT => {
        const UT = lT.c.indexOf(TT);
        if (UT < 0) throw new Error(`No core action "${TT}"`);
        return UT
      },
      qT = fT("primary-fire"),
      iT = fT("alt-fire"),
      bT = fT("mid-fire"),
      OT = fT("jump"),
      eT = fT("ReloadGun"),
      YT = fT("SwapCameraZoom"),
      JT = fT("TouchAction1"),
      xT = {
        SpecialAction1: fT("SpecialAction1"),
        SpecialAction2: fT("SpecialAction2")
      },
      dT = (TT, UT) => {
        (0, pT.u)(nT.G.PadAction, TT, 0, 0, (0, pT.r)(UT, performance.now()))
      },
      wT = TT => {
        dT(TT, gT.qd.Down)
      },
      tT = TT => {
        dT(TT, 0)
      },
      aT = TT => {
        wT(TT), tT(TT)
      },
      yT = () => {
        const TT = (0, jT.i)();
        return null !== TT && void 0 !== TT && TT.isCoreRunning ? TT : null
      },
      XT = TT => gT.x.playerFlags(TT.api.apiView, 0),
      IT = TT => null !== TT && gT.x.targetBlockId(TT.api.apiView, 0) !== gT.Wc,
      QT = () => {
        const TT = (0, BT.b)(),
          UT = new ZT.e;
        let mT = !1;
        const WT = (TT, UT) => {
            (0, pT.u)(nT.G.PadLook, gT.xd.Rate, TT, UT, 0)
          },
          zT = () => {
            mT = !1, UT.reset(), WT(0, 0)
          };
        return {
          update: (zT, MT, HT) => {
            mT || (TT.discardPending(), mT = !0);
            const kT = (0, ZT.r)(UT, zT, MT, HT, performance.now());
            WT(kT.yawRadPerSec, kT.pitchRadPerSec);
            const jT = TT.drainLookDelta();
            0 === jT.Xs && 0 === jT.Qs || (0, pT.u)(nT.G.PadLook, gT.xd.Gyro, jT.Xs, jT.Qs, 0)
          },
          release: zT,
          uninstall: zT
        }
      },
      sT = () => {
        const TT = yT();
        return null !== TT && 0 !== (XT(TT) & gT.Cd.PadSneakToggled)
      },
      FT = () => {
        const TT = (TT => {
          const UT = TT => function() {
            return (0, LT.c)(), TT(...arguments)
          };
          return {
            primaryFireDown: UT((TT => (dT(qT, gT.qd.Down | (TT ? gT.qd.Repeat : 0)), 0))),
            primaryFireUp: UT((() => {
              tT(qT)
            })),
            altFireDown: UT((() => (wT(iT), 0))),
            altFireUp: UT((() => {
              tT(iT)
            })),
            jumpDown: UT((() => {
              aT(OT)
            })),
            specialActionDown: UT((TT => {
              wT(xT[TT])
            })),
            specialActionUp: UT((TT => {
              tT(xT[TT])
            })),
            reloadGun: UT((() => {
              aT(eT)
            })),
            dropItem: UT((TT => {
              dT(gT.td.Drop, gT.qd.Down | (TT ? gT.qd.Stack : 0))
            })),
            swapCameraZoom: UT((() => {
              aT(YT)
            })),
            pickBlock: UT((() => (aT(bT), IT(TT()))))
          }
        })(yT);
        let UT = !1,
          mT = null;
        const WT = () => {
          var TT;
          null === (TT = mT) || void 0 === TT || TT(), mT = null
        };
        return {
          bodies: () => TT,
          look: QT(),
          move: (TT, mT) => {
            var zT;
            WT();
            const {
              bits: MT,
              flips: nT
            } = (TT => {
              if (null === TT) return {
                bits: gT.ud.Peek,
                flips: 0
              };
              const UT = TT.sneakHeld ? gT.ud.SneakHeld : 0;
              return "hold" === TT.mode ? {
                bits: UT | gT.ud.SneakHoldMode,
                flips: TT.sneakTogglePressed ? 1 : 0
              } : {
                bits: UT,
                flips: TT.sneakPressed || TT.sneakTogglePressed ? 1 : 0
              }
            })(mT);
            null !== (zT = yT()) && void 0 !== zT && zT.padMove(TT.x, TT.y, TT.magnitude, TT.headingOffset, (TT => gT.ud.Active | (TT.jumpHeld ? gT.ud.JumpHeld : 0) | (TT.jumpPressed ? gT.ud.JumpPressed : 0) | (TT.running ? gT.ud.Running : 0) | (TT.sprintHeld ? gT.ud.SprintHeld : 0))(TT) | MT, nT) && (UT = !0), (0, cT.g)(sT())
          },
          stopMoving: () => {
            var TT;
            UT && (UT = !(null !== (TT = yT()) && void 0 !== TT && TT.padMove(0, 0, 0, 0, 0, 0)), WT(), mT = (0, HT.C)((() => {
              WT(), (0, cT.g)(sT())
            })))
          },
          uninstall: WT,
          deviceChanged: TT => {
            var mT;
            "touch" === TT ? ((0, cT.g)(!1), null !== (mT = yT()) && void 0 !== mT && mT.padMove(0, 0, 0, 0, gT.ud.EndToggle, 0) && (UT = !1)) : "gamepad" === TT && (0, cT.g)(sT())
          },
          hasPlayer: () => null !== yT(),
          isPlayerDead: () => {
            var TT;
            return !1 === (null === (TT = yT()) || void 0 === TT ? void 0 : TT.localPlayerAlive())
          },
          isReplayMode: () => {
            const TT = yT();
            return null !== TT && 0 !== (XT(TT) & gT.Cd.Replay)
          },
          isFreeCameraOn: () => {
            const TT = yT();
            return null !== TT && 0 !== (XT(TT) & gT.Cd.FreeCam)
          },
          targetsBlock: () => IT(yT()),
          selectedSlotEmpty: () => {
            var TT;
            return !(null !== (TT = yT()) && void 0 !== TT && TT.items.fn())
          },
          pickBlockAllowed: () => !!MT.d.get("creative") && !!MT.d.get("canPickBlocks"),
          scrollHotbar: TT => {
            dT(gT.td.Hotbar, gT.qd.Down | (TT > 0 ? gT.qd.Next : 0))
          },
          hasFullInventory: kT.n,
          hasLobbyTab: () => (0, vT.b)({
            lobbyLeaderboardInfo: MT.d.get("lobbyLeaderboardInfo"),
            lobbyManage: MT.d.get("lobbyManage")
          }),
          contextActionInputs: () => {
            var TT, UT, mT, WT;
            const zT = yT();
            return {
              holdingGun: !1 !== (null === zT || void 0 === zT ? void 0 : zT.localPlayerAlive()) && "Gun" === (null === zT || void 0 === zT || null === (TT = zT.items.fn()) || void 0 === TT || null === (UT = TT.typeObj) || void 0 === UT ? void 0 : UT.type),
              customButtons: null !== (mT = MT.d.get("customButtons")) && void 0 !== mT ? mT : null,
              touchscreenActionButton: null !== (WT = MT.d.get("touchscreenActionButton")) && void 0 !== WT ? WT : null
            }
          },
          pressTouchButton: TT => {
            TT ? wT(JT) : tT(JT)
          }
        }
      },
      PT = () => {
        const TT = (0, zT.c)(FT()),
          UT = (0, WT.d)(),
          mT = null;
        return () => {
          TT(), UT(), null === mT || void 0 === mT || mT()
        }
      }
  },
  4883: (TT, UT, mT) => {
    mT.d(UT, {
      A: () => bT,
      C: () => xT,
      G: () => dT,
      I: () => wT,
      K: () => fT,
      L: () => gT,
      N: () => nT,
      Q: () => JT,
      c: () => YT,
      g: () => iT,
      k: () => aT,
      n: () => tT,
      r: () => vT,
      u: () => OT,
      x: () => qT
    });
    var WT = mT(4890);
    const zT = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let MT = zT;

    function gT(TT) {
      MT = null !== TT && void 0 !== TT ? TT : zT
    }

    function nT() {
      return MT
    }
    const HT = new Set,
      kT = new Set;
    let jT = -1;
    const lT = new Set,
      LT = new Set;
    let pT = 0,
      BT = 0;
    const ZT = new Set,
      cT = new Set;

    function vT(TT) {
      return HT.add(TT), () => {
        HT.delete(TT)
      }
    }

    function fT(TT, UT) {
      for (const WT of HT) try {
        WT(TT)
      } catch (mT) {
        UT(mT)
      }
    }

    function qT(TT) {
      return kT.add(TT), () => {
        kT.delete(TT)
      }
    }

    function iT(TT, UT) {
      const mT = jT < 0 ? 0 : TT - jT;
      jT = TT;
      for (const zT of kT) try {
        zT(mT)
      } catch (WT) {
        UT(WT)
      }
    }

    function bT(TT) {
      return lT.add(TT), () => {
        lT.delete(TT)
      }
    }

    function OT(TT) {
      return LT.add(TT), () => {
        LT.delete(TT)
      }
    }
    let eT = 0;

    function YT(TT) {
      eT += TT
    }

    function JT() {
      const TT = eT;
      return eT = 0, TT
    }

    function xT(TT) {
      return ZT.add(TT), () => {
        ZT.delete(TT)
      }
    }

    function dT(TT) {
      return cT.add(TT), () => {
        cT.delete(TT)
      }
    }

    function wT() {
      pT = 0, BT = 0, jT = -1
    }

    function tT(TT, UT) {
      if ("paced" === TT) return BT += UT, null;
      if ("drawn" !== TT && "skipped" !== TT) return null;
      const mT = UT + BT;
      return BT = 0, mT
    }

    function aT(TT, UT, mT, zT) {
      const MT = (0, WT.g)(UT),
        gT = TT > 0 ? performance.now() : 0;
      for (let WT = 0; WT < TT; WT++)
        for (const TT of ZT) try {
          TT()
        } catch (nT) {
          zT(nT)
        }
      if (TT > 0 && YT(performance.now() - gT), null !== mT) {
        for (const TT of lT) try {
          TT(mT)
        } catch (nT) {
          zT(nT)
        }
        pT += mT
      }
      if ("drawn" === UT) {
        const TT = pT;
        pT = 0;
        for (const UT of LT) try {
          UT(TT)
        } catch (nT) {
          zT(nT)
        }
      }
      for (const WT of cT) try {
        WT(TT, MT)
      } catch (nT) {
        zT(nT)
      }
    }
  },
  4912: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => zT,
      e: () => MT,
      f: () => gT,
      g: () => WT,
      i: () => nT
    });
    const WT = {
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
      zT = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      MT = {
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
      gT = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      nT = [16]
  },
  40802: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => gT,
      d: () => MT,
      e: () => zT
    });
    let WT = null;

    function zT(TT) {
      WT = TT
    }

    function MT(TT) {
      WT === TT && (WT = null)
    }

    function gT() {
      var TT;
      null === (TT = WT) || void 0 === TT || TT()
    }
  },
  4915: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => nT,
      e: () => gT,
      g: () => kT
    });
    var WT = mT(2522),
      zT = mT(2525);
    const MT = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function gT(TT) {
      return TT instanceof HTMLElement && (!!(TT.isContentEditable || TT instanceof HTMLTextAreaElement || TT instanceof HTMLSelectElement) || TT instanceof HTMLInputElement && !MT.has(TT.type))
    }

    function nT(TT) {
      let UT = null;
      const mT = mT => {
          const zT = gT(mT);
          zT !== UT && (UT = zT, TT(WT.g.UiCapture, WT.y.Keyboard, 0, 0, zT ? WT.y.Keyboard : 0))
        },
        zT = TT => {
          mT(TT.target)
        },
        MT = TT => {
          mT(TT.relatedTarget)
        },
        nT = () => {
          mT(document.activeElement)
        },
        HT = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", zT, HT), document.addEventListener("focusout", MT, HT), document.addEventListener("keydown", nT, HT), mT(document.activeElement), () => {
        document.removeEventListener("focusin", zT, HT), document.removeEventListener("focusout", MT, HT), document.removeEventListener("keydown", nT, HT)
      }
    }
    const HT = new Map;

    function kT(TT, UT) {
      var mT;
      let WT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      HT.set(WT, (null !== (mT = HT.get(WT)) && void 0 !== mT ? mT : 0) & ~TT | UT & TT);
      let MT = 0;
      for (const zT of HT.values()) MT |= zT;
      return (0, zT.A)(TT, MT & TT)
    }
  },
  37032: (TT, UT, mT) => {
    function WT(TT) {
      return TT.includes("Leaf Bed")
    }

    function zT(TT) {
      return / Bed(?: Head)?(?:\||$)/.test(TT) && !WT(TT)
    }

    function MT(TT) {
      return TT.includes(" Strongbed")
    }

    function gT(TT) {
      return WT(TT) || zT(TT) || MT(TT)
    }
    mT.d(UT, {
      c: () => gT,
      g: () => WT,
      j: () => MT,
      l: () => zT
    })
  },
  37030: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => kT
    });
    var WT = mT(37032),
      zT = mT(9330);
    const MT = [],
      gT = [],
      nT = [],
      HT = [];
    for (const jT of Object.keys(zT.k))(0, WT.g)(jT) ? MT.push(jT) : (0, WT.l)(jT) && gT.push(jT), (0, WT.j)(jT) && nT.push(jT), (jT.includes(" Bed Head") || jT.includes(" Strongbed Head")) && HT.push(jT);
    const kT = {
      leafBeds: MT,
      woolBeds: gT,
      strongBeds: nT,
      beds: [...MT, ...gT, ...nT],
      bedHeads: HT,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6542: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => gT,
      g: () => zT,
      i: () => HT,
      l: () => MT,
      p: () => kT,
      q: () => WT,
      u: () => nT
    });
    let WT = function(TT) {
        return TT[TT.DEFAULT = 0] = "DEFAULT", TT[TT.BOAT = 1] = "BOAT", TT[TT.GLIDER = 2] = "GLIDER", TT[TT.BALLOON = 3] = "BALLOON", TT[TT.SLEEPING = 4] = "SLEEPING", TT[TT.RIDING_MOB = 5] = "RIDING_MOB", TT[TT.CAR = 6] = "CAR", TT[TT.HOVERCRAFT = 7] = "HOVERCRAFT", TT
      }({}),
      zT = function(TT) {
        return TT[TT.WOOD = 0] = "WOOD", TT[TT.OBSIDIAN = 1] = "OBSIDIAN", TT[TT.SPEED = 2] = "SPEED", TT
      }({}),
      MT = function(TT) {
        return TT[TT.WOOD = 0] = "WOOD", TT[TT.IRON = 1] = "IRON", TT[TT.GOLD = 2] = "GOLD", TT[TT.DIAMOND = 3] = "DIAMOND", TT
      }({}),
      gT = function(TT) {
        return TT[TT.YELLOW = 0] = "YELLOW", TT[TT.WHITE = 1] = "WHITE", TT[TT.RED = 2] = "RED", TT[TT.PURPLE = 3] = "PURPLE", TT[TT.PINK = 4] = "PINK", TT[TT.ORANGE = 5] = "ORANGE", TT[TT.MAGENTA = 6] = "MAGENTA", TT[TT.LIME = 7] = "LIME", TT[TT.LIGHT_GRAY = 8] = "LIGHT_GRAY", TT[TT.LIGHT_BLUE = 9] = "LIGHT_BLUE", TT[TT.GREEN = 10] = "GREEN", TT[TT.GRAY = 11] = "GRAY", TT[TT.CYAN = 12] = "CYAN", TT[TT.BROWN = 13] = "BROWN", TT[TT.BLUE = 14] = "BLUE", TT[TT.BLACK = 15] = "BLACK", TT
      }({}),
      nT = function(TT) {
        return TT[TT.ROTATION_1 = 0] = "ROTATION_1", TT[TT.ROTATION_2 = 1] = "ROTATION_2", TT[TT.ROTATION_3 = 2] = "ROTATION_3", TT[TT.ROTATION_4 = 3] = "ROTATION_4", TT
      }({}),
      HT = function(TT) {
        return TT[TT.KART = 0] = "KART", TT[TT.OFF_ROADER = 1] = "OFF_ROADER", TT[TT.CAR = 2] = "CAR", TT[TT.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", TT[TT.ARMORED_CAR = 4] = "ARMORED_CAR", TT[TT.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", TT[TT.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", TT[TT.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", TT
      }({});
    WT.DEFAULT, WT.BOAT, zT.SPEED, WT.GLIDER, MT.DIAMOND, WT.BALLOON, gT.BLACK, WT.SLEEPING, nT.ROTATION_4, WT.RIDING_MOB, WT.CAR, HT.MOONSTONE_MINING_DRILL, WT.HOVERCRAFT;
    let kT = function(TT) {
      return TT[TT.NORMAL = 0] = "NORMAL", TT[TT.GLIDING = 1] = "GLIDING", TT[TT.FLOATING = 2] = "FLOATING", TT
    }({})
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);