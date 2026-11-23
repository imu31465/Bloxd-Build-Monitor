export const id = 88;
export const ids = [88];
export const modules = {
  40372: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      startWasmPadGameplay: () => uC
    });
    ZC(40381);
    var QC = ZC(40389),
      wC = ZC(40405),
      bC = ZC(1865),
      nC = ZC(40412),
      fC = ZC(4733),
      oC = ZC(4711),
      qC = ZC(40417),
      FC = ZC(40423),
      WC = ZC(4745),
      NC = ZC(40500),
      MC = ZC(2351),
      gC = ZC(8850),
      SC = ZC(40392),
      pC = ZC(8831),
      PC = ZC(38944);
    const GC = CC => {
        const zC = WC.c.indexOf(CC);
        if (zC < 0) throw new Error(`No core action "${CC}"`);
        return zC
      },
      RC = GC("primary-fire"),
      AC = GC("alt-fire"),
      xC = GC("mid-fire"),
      JC = GC("jump"),
      IC = GC("ReloadGun"),
      iC = GC("SwapCameraZoom"),
      vC = GC("TouchAction1"),
      eC = {
        SpecialAction1: GC("SpecialAction1"),
        SpecialAction2: GC("SpecialAction2")
      },
      hC = (CC, zC) => {
        (0, MC.r)(fC.Q.PadAction, CC, 0, 0, (0, MC.q)(zC, performance.now()))
      },
      KC = CC => {
        hC(CC, nC.Rd.Down)
      },
      YC = CC => {
        hC(CC, 0)
      },
      dC = CC => {
        KC(CC), YC(CC)
      },
      mC = () => {
        const CC = (0, FC.k)();
        return null !== CC && void 0 !== CC && CC.isCoreRunning ? CC : null
      },
      HC = CC => nC.w.playerFlags(CC.api.apiView, 0),
      EC = CC => null !== CC && nC.w.targetBlockId(CC.api.apiView, 0) !== nC.rd,
      lC = () => {
        const CC = (0, gC.b)(),
          zC = new SC.c;
        let ZC = !1;
        const QC = (CC, zC) => {
            (0, MC.r)(fC.Q.PadLook, nC._d.Rate, CC, zC, 0)
          },
          wC = () => {
            ZC = !1, zC.reset(), QC(0, 0)
          };
        return {
          update: (wC, bC, oC) => {
            ZC || (CC.discardPending(), ZC = !0);
            const qC = (0, SC.p)(zC, wC, bC, oC, performance.now());
            QC(qC.yawRadPerSec, qC.pitchRadPerSec);
            const FC = CC.drainLookDelta();
            0 === FC.VY && 0 === FC.Zm || (0, MC.r)(fC.Q.PadLook, nC._d.Gyro, FC.VY, FC.Zm, 0)
          },
          release: wC,
          uninstall: wC
        }
      },
      XC = () => {
        const CC = mC();
        return null !== CC && 0 !== (HC(CC) & nC.ce.PadSneakToggled)
      },
      cC = () => {
        const CC = (CC => {
          const zC = CC => function() {
            return (0, NC.d)(), CC(...arguments)
          };
          return {
            primaryFireDown: zC((() => (KC(RC), 0))),
            primaryFireUp: zC((() => {
              YC(RC)
            })),
            altFireDown: zC((() => (KC(AC), 0))),
            altFireUp: zC((() => {
              YC(AC)
            })),
            jumpDown: zC((() => {
              dC(JC)
            })),
            specialActionDown: zC((CC => {
              KC(eC[CC])
            })),
            specialActionUp: zC((CC => {
              YC(eC[CC])
            })),
            reloadGun: zC((() => {
              dC(IC)
            })),
            dropItem: zC((CC => {
              hC(nC.Vd.Drop, nC.Rd.Down | (CC ? nC.Rd.Stack : 0))
            })),
            swapCameraZoom: zC((() => {
              dC(iC)
            })),
            pickBlock: zC((() => (dC(xC), EC(CC()))))
          }
        })(mC);
        let zC = !1,
          ZC = null;
        const QC = () => {
          var CC;
          null === (CC = ZC) || void 0 === CC || CC(), ZC = null
        };
        return {
          bodies: () => CC,
          look: lC(),
          move: (CC, ZC) => {
            var wC;
            QC();
            const {
              bits: bC,
              flips: fC
            } = (CC => {
              if (null === CC) return {
                bits: nC.Yd.Peek,
                flips: 0
              };
              const zC = CC.sneakHeld ? nC.Yd.SneakHeld : 0;
              return "hold" === CC.mode ? {
                bits: zC | nC.Yd.SneakHoldMode,
                flips: CC.sneakTogglePressed ? 1 : 0
              } : {
                bits: zC,
                flips: CC.sneakPressed || CC.sneakTogglePressed ? 1 : 0
              }
            })(ZC);
            null !== (wC = mC()) && void 0 !== wC && wC.padMove(CC.x, CC.y, CC.magnitude, CC.headingOffset, (CC => nC.Yd.Active | (CC.jumpHeld ? nC.Yd.JumpHeld : 0) | (CC.jumpPressed ? nC.Yd.JumpPressed : 0) | (CC.running ? nC.Yd.Running : 0) | (CC.sprintHeld ? nC.Yd.SprintHeld : 0))(CC) | bC, fC) && (zC = !0), (0, pC.e)(XC())
          },
          stopMoving: () => {
            var CC;
            zC && (zC = !(null !== (CC = mC()) && void 0 !== CC && CC.padMove(0, 0, 0, 0, 0, 0)), QC(), ZC = (0, oC.r)((() => {
              QC(), (0, pC.e)(XC())
            })))
          },
          uninstall: QC,
          deviceChanged: CC => {
            var ZC;
            "touch" === CC ? ((0, pC.e)(!1), null !== (ZC = mC()) && void 0 !== ZC && ZC.padMove(0, 0, 0, 0, nC.Yd.EndToggle, 0) && (zC = !1)) : "gamepad" === CC && (0, pC.e)(XC())
          },
          hasPlayer: () => null !== mC(),
          isPlayerDead: () => {
            var CC;
            return !1 === (null === (CC = mC()) || void 0 === CC ? void 0 : CC.localPlayerAlive())
          },
          isReplayMode: () => {
            const CC = mC();
            return null !== CC && 0 !== (HC(CC) & nC.ce.Replay)
          },
          isFreeCameraOn: () => {
            const CC = mC();
            return null !== CC && 0 !== (HC(CC) & nC.ce.FreeCam)
          },
          targetsBlock: () => EC(mC()),
          selectedSlotEmpty: () => {
            var CC;
            return !(null !== (CC = mC()) && void 0 !== CC && CC.items.vq())
          },
          pickBlockAllowed: () => !!bC.e.get("creative") && !!bC.e.get("canPickBlocks"),
          scrollHotbar: CC => {
            hC(nC.Vd.Hotbar, nC.Rd.Down | (CC > 0 ? nC.Rd.Next : 0))
          },
          hasFullInventory: qC.q,
          hasLobbyTab: () => (0, PC.d)({
            lobbyLeaderboardInfo: bC.e.get("lobbyLeaderboardInfo"),
            lobbyManage: bC.e.get("lobbyManage")
          }),
          contextActionInputs: () => {
            var CC, zC, ZC, QC;
            const wC = mC();
            return {
              holdingGun: !1 !== (null === wC || void 0 === wC ? void 0 : wC.localPlayerAlive()) && "Gun" === (null === wC || void 0 === wC || null === (CC = wC.items.vq()) || void 0 === CC || null === (zC = CC.typeObj) || void 0 === zC ? void 0 : zC.type),
              customButtons: null !== (ZC = bC.e.get("customButtons")) && void 0 !== ZC ? ZC : null,
              touchscreenActionButton: null !== (QC = bC.e.get("touchscreenActionButton")) && void 0 !== QC ? QC : null
            }
          },
          pressTouchButton: CC => {
            CC ? KC(vC) : YC(vC)
          }
        }
      },
      uC = () => {
        const CC = (0, wC.b)(cC()),
          zC = (0, QC.e)(),
          ZC = null;
        return () => {
          CC(), zC(), null === ZC || void 0 === ZC || ZC()
        }
      }
  },
  4711: (CC, zC, ZC) => {
    ZC.d(zC, {
      A: () => GC,
      B: () => nC,
      E: () => fC,
      G: () => vC,
      b: () => iC,
      e: () => AC,
      h: () => dC,
      j: () => YC,
      k: () => PC,
      m: () => JC,
      n: () => RC,
      p: () => xC,
      r: () => eC,
      u: () => hC,
      w: () => KC
    });
    var QC = ZC(4719);
    const wC = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let bC = wC;

    function nC(CC) {
      bC = null !== CC && void 0 !== CC ? CC : wC
    }

    function fC() {
      return bC
    }
    const oC = new Set,
      qC = new Set;
    let FC = -1;
    const WC = new Set,
      NC = new Set;
    let MC = 0,
      gC = 0;
    const SC = new Set,
      pC = new Set;

    function PC(CC) {
      return oC.add(CC), () => {
        oC.delete(CC)
      }
    }

    function GC(CC, zC) {
      for (const QC of oC) try {
        QC(CC)
      } catch (ZC) {
        zC(ZC)
      }
    }

    function RC(CC) {
      return qC.add(CC), () => {
        qC.delete(CC)
      }
    }

    function AC(CC, zC) {
      const ZC = FC < 0 ? 0 : CC - FC;
      FC = CC;
      for (const wC of qC) try {
        wC(ZC)
      } catch (QC) {
        zC(QC)
      }
    }

    function xC(CC) {
      return WC.add(CC), () => {
        WC.delete(CC)
      }
    }

    function JC(CC) {
      return NC.add(CC), () => {
        NC.delete(CC)
      }
    }
    let IC = 0;

    function iC(CC) {
      IC += CC
    }

    function vC() {
      const CC = IC;
      return IC = 0, CC
    }

    function eC(CC) {
      return SC.add(CC), () => {
        SC.delete(CC)
      }
    }

    function hC(CC) {
      return pC.add(CC), () => {
        pC.delete(CC)
      }
    }

    function KC() {
      MC = 0, gC = 0, FC = -1
    }

    function YC(CC, zC) {
      if ("paced" === CC) return gC += zC, null;
      if ("drawn" !== CC && "skipped" !== CC) return null;
      const ZC = zC + gC;
      return gC = 0, ZC
    }

    function dC(CC, zC, ZC, wC) {
      const bC = (0, QC.i)(zC),
        nC = CC > 0 ? performance.now() : 0;
      for (let QC = 0; QC < CC; QC++)
        for (const CC of SC) try {
          CC()
        } catch (fC) {
          wC(fC)
        }
      if (CC > 0 && iC(performance.now() - nC), null !== ZC) {
        for (const CC of WC) try {
          CC(ZC)
        } catch (fC) {
          wC(fC)
        }
        MC += ZC
      }
      if ("drawn" === zC) {
        const CC = MC;
        MC = 0;
        for (const zC of NC) try {
          zC(CC)
        } catch (fC) {
          wC(fC)
        }
      }
      for (const QC of pC) try {
        QC(CC, bC)
      } catch (fC) {
        wC(fC)
      }
    }
  },
  4745: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => wC,
      d: () => bC,
      f: () => nC,
      g: () => QC,
      h: () => fC
    });
    const QC = {
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
      wC = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      bC = {
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
      nC = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      fC = [16]
  },
  40500: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => nC,
      f: () => bC,
      i: () => wC
    });
    let QC = null;

    function wC(CC) {
      QC = CC
    }

    function bC(CC) {
      QC === CC && (QC = null)
    }

    function nC() {
      var CC;
      null === (CC = QC) || void 0 === CC || CC()
    }
  },
  4752: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => fC,
      d: () => nC,
      e: () => qC
    });
    var QC = ZC(2348),
      wC = ZC(2351);
    const bC = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function nC(CC) {
      return CC instanceof HTMLElement && (!!(CC.isContentEditable || CC instanceof HTMLTextAreaElement || CC instanceof HTMLSelectElement) || CC instanceof HTMLInputElement && !bC.has(CC.type))
    }

    function fC(CC) {
      let zC = null;
      const ZC = ZC => {
          const wC = nC(ZC);
          wC !== zC && (zC = wC, CC(QC.j.UiCapture, QC.v.Keyboard, 0, 0, wC ? QC.v.Keyboard : 0))
        },
        wC = CC => {
          ZC(CC.target)
        },
        bC = CC => {
          ZC(CC.relatedTarget)
        },
        fC = () => {
          ZC(document.activeElement)
        },
        oC = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", wC, oC), document.addEventListener("focusout", bC, oC), document.addEventListener("keydown", fC, oC), ZC(document.activeElement), () => {
        document.removeEventListener("focusin", wC, oC), document.removeEventListener("focusout", bC, oC), document.removeEventListener("keydown", fC, oC)
      }
    }
    const oC = new Map;

    function qC(CC, zC) {
      var ZC;
      let QC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      oC.set(QC, (null !== (ZC = oC.get(QC)) && void 0 !== ZC ? ZC : 0) & ~CC | zC & CC);
      let bC = 0;
      for (const wC of oC.values()) bC |= wC;
      return (0, wC.v)(CC, bC & CC)
    }
  },
  36796: (CC, zC, ZC) => {
    function QC(CC) {
      return CC.includes("Leaf Bed")
    }

    function wC(CC) {
      return / Bed(?: Head)?(?:\||$)/.test(CC) && !QC(CC)
    }

    function bC(CC) {
      return CC.includes(" Strongbed")
    }

    function nC(CC) {
      return QC(CC) || wC(CC) || bC(CC)
    }
    ZC.d(zC, {
      d: () => nC,
      g: () => QC,
      i: () => bC,
      l: () => wC
    })
  },
  36794: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => qC
    });
    var QC = ZC(36796),
      wC = ZC(9194);
    const bC = [],
      nC = [],
      fC = [],
      oC = [];
    for (const FC of Object.keys(wC.n))(0, QC.g)(FC) ? bC.push(FC) : (0, QC.l)(FC) && nC.push(FC), (0, QC.i)(FC) && fC.push(FC), (FC.includes(" Bed Head") || FC.includes(" Strongbed Head")) && oC.push(FC);
    const qC = {
      leafBeds: bC,
      woolBeds: nC,
      strongBeds: fC,
      beds: [...bC, ...nC, ...fC],
      bedHeads: oC,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6484: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => nC,
      e: () => wC,
      g: () => oC,
      k: () => bC,
      o: () => qC,
      r: () => QC,
      t: () => fC
    });
    let QC = function(CC) {
        return CC[CC.DEFAULT = 0] = "DEFAULT", CC[CC.BOAT = 1] = "BOAT", CC[CC.GLIDER = 2] = "GLIDER", CC[CC.BALLOON = 3] = "BALLOON", CC[CC.SLEEPING = 4] = "SLEEPING", CC[CC.RIDING_MOB = 5] = "RIDING_MOB", CC[CC.CAR = 6] = "CAR", CC[CC.HOVERCRAFT = 7] = "HOVERCRAFT", CC
      }({}),
      wC = function(CC) {
        return CC[CC.WOOD = 0] = "WOOD", CC[CC.OBSIDIAN = 1] = "OBSIDIAN", CC[CC.SPEED = 2] = "SPEED", CC
      }({}),
      bC = function(CC) {
        return CC[CC.WOOD = 0] = "WOOD", CC[CC.IRON = 1] = "IRON", CC[CC.GOLD = 2] = "GOLD", CC[CC.DIAMOND = 3] = "DIAMOND", CC
      }({}),
      nC = function(CC) {
        return CC[CC.YELLOW = 0] = "YELLOW", CC[CC.WHITE = 1] = "WHITE", CC[CC.RED = 2] = "RED", CC[CC.PURPLE = 3] = "PURPLE", CC[CC.PINK = 4] = "PINK", CC[CC.ORANGE = 5] = "ORANGE", CC[CC.MAGENTA = 6] = "MAGENTA", CC[CC.LIME = 7] = "LIME", CC[CC.LIGHT_GRAY = 8] = "LIGHT_GRAY", CC[CC.LIGHT_BLUE = 9] = "LIGHT_BLUE", CC[CC.GREEN = 10] = "GREEN", CC[CC.GRAY = 11] = "GRAY", CC[CC.CYAN = 12] = "CYAN", CC[CC.BROWN = 13] = "BROWN", CC[CC.BLUE = 14] = "BLUE", CC[CC.BLACK = 15] = "BLACK", CC
      }({}),
      fC = function(CC) {
        return CC[CC.ROTATION_1 = 0] = "ROTATION_1", CC[CC.ROTATION_2 = 1] = "ROTATION_2", CC[CC.ROTATION_3 = 2] = "ROTATION_3", CC[CC.ROTATION_4 = 3] = "ROTATION_4", CC
      }({}),
      oC = function(CC) {
        return CC[CC.KART = 0] = "KART", CC[CC.OFF_ROADER = 1] = "OFF_ROADER", CC[CC.CAR = 2] = "CAR", CC[CC.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", CC[CC.ARMORED_CAR = 4] = "ARMORED_CAR", CC[CC.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", CC[CC.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", CC[CC.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", CC
      }({});
    QC.DEFAULT, QC.BOAT, wC.SPEED, QC.GLIDER, bC.DIAMOND, QC.BALLOON, nC.BLACK, QC.SLEEPING, fC.ROTATION_4, QC.RIDING_MOB, QC.CAR, oC.MOONSTONE_MINING_DRILL, QC.HOVERCRAFT;
    let qC = function(CC) {
      return CC[CC.NORMAL = 0] = "NORMAL", CC[CC.GLIDING = 1] = "GLIDING", CC[CC.FLOATING = 2] = "FLOATING", CC
    }({})
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);