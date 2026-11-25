export const id = 92;
export const ids = [92];
export const modules = {
  40781: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      startWasmPadGameplay: () => kQ
    });
    XQ(40787);
    var wQ = XQ(40790),
      qQ = XQ(40802),
      TQ = XQ(2036),
      zQ = XQ(40813),
      sQ = XQ(5140),
      FQ = XQ(5118),
      PQ = XQ(40822),
      gQ = XQ(40829),
      JQ = XQ(5148),
      rQ = XQ(40889),
      IQ = XQ(2510),
      jQ = XQ(9220),
      BQ = XQ(40796),
      yQ = XQ(9189),
      VQ = XQ(39373);
    const DQ = QQ => {
        const WQ = JQ.b.indexOf(QQ);
        if (WQ < 0) throw new Error(`No core action "${QQ}"`);
        return WQ
      },
      pQ = DQ("primary-fire"),
      GQ = DQ("alt-fire"),
      UQ = DQ("mid-fire"),
      bQ = DQ("jump"),
      vQ = DQ("ReloadGun"),
      dQ = DQ("SwapCameraZoom"),
      HQ = DQ("TouchAction1"),
      aQ = {
        SpecialAction1: DQ("SpecialAction1"),
        SpecialAction2: DQ("SpecialAction2")
      },
      lQ = (QQ, WQ) => {
        (0, IQ.u)(sQ.G.PadAction, QQ, 0, 0, (0, IQ.s)(WQ, performance.now()))
      },
      hQ = QQ => {
        lQ(QQ, zQ.Td.Down)
      },
      iQ = QQ => {
        lQ(QQ, 0)
      },
      cQ = QQ => {
        hQ(QQ), iQ(QQ)
      },
      AQ = () => {
        const QQ = (0, gQ.j)();
        return null !== QQ && void 0 !== QQ && QQ.isCoreRunning ? QQ : null
      },
      RQ = QQ => zQ.x.playerFlags(QQ.api.apiView, 0),
      EQ = QQ => null !== QQ && zQ.x.targetBlockId(QQ.api.apiView, 0) !== zQ.Ad,
      CQ = () => {
        const QQ = (0, jQ.d)(),
          WQ = new BQ.d;
        let XQ = !1;
        const wQ = (QQ, WQ) => {
            (0, IQ.u)(sQ.G.PadLook, zQ.Zd.Rate, QQ, WQ, 0)
          },
          qQ = () => {
            XQ = !1, WQ.reset(), wQ(0, 0)
          };
        return {
          update: (qQ, TQ, FQ) => {
            XQ || (QQ.discardPending(), XQ = !0);
            const PQ = (0, BQ.p)(WQ, qQ, TQ, FQ, performance.now());
            wQ(PQ.yawRadPerSec, PQ.pitchRadPerSec);
            const gQ = QQ.drainLookDelta();
            0 === gQ.jR && 0 === gQ.yR || (0, IQ.u)(sQ.G.PadLook, zQ.Zd.Gyro, gQ.jR, gQ.yR, 0)
          },
          release: qQ,
          uninstall: qQ
        }
      },
      uQ = () => {
        const QQ = AQ();
        return null !== QQ && 0 !== (RQ(QQ) & zQ.ae.PadSneakToggled)
      },
      LQ = () => {
        const QQ = (QQ => {
          const WQ = QQ => function() {
            return (0, rQ.e)(), QQ(...arguments)
          };
          return {
            primaryFireDown: WQ((QQ => (lQ(pQ, zQ.Td.Down | (QQ ? zQ.Td.Repeat : 0)), 0))),
            primaryFireUp: WQ((() => {
              iQ(pQ)
            })),
            altFireDown: WQ((() => (hQ(GQ), 0))),
            altFireUp: WQ((() => {
              iQ(GQ)
            })),
            jumpDown: WQ((() => {
              cQ(bQ)
            })),
            specialActionDown: WQ((QQ => {
              hQ(aQ[QQ])
            })),
            specialActionUp: WQ((QQ => {
              iQ(aQ[QQ])
            })),
            reloadGun: WQ((() => {
              cQ(vQ)
            })),
            dropItem: WQ((QQ => {
              lQ(zQ.Vd.Drop, zQ.Td.Down | (QQ ? zQ.Td.Stack : 0))
            })),
            swapCameraZoom: WQ((() => {
              cQ(dQ)
            })),
            pickBlock: WQ((() => (cQ(UQ), EQ(QQ()))))
          }
        })(AQ);
        let WQ = !1,
          XQ = null;
        const wQ = () => {
          var QQ;
          null === (QQ = XQ) || void 0 === QQ || QQ(), XQ = null
        };
        return {
          bodies: () => QQ,
          look: CQ(),
          move: (QQ, XQ) => {
            var qQ;
            wQ();
            const {
              bits: TQ,
              flips: sQ
            } = (QQ => {
              if (null === QQ) return {
                bits: zQ.Xd.Peek,
                flips: 0
              };
              const WQ = QQ.sneakHeld ? zQ.Xd.SneakHeld : 0;
              return "hold" === QQ.mode ? {
                bits: WQ | zQ.Xd.SneakHoldMode,
                flips: QQ.sneakTogglePressed ? 1 : 0
              } : {
                bits: WQ,
                flips: QQ.sneakPressed || QQ.sneakTogglePressed ? 1 : 0
              }
            })(XQ);
            null !== (qQ = AQ()) && void 0 !== qQ && qQ.padMove(QQ.x, QQ.y, QQ.magnitude, QQ.headingOffset, (QQ => zQ.Xd.Active | (QQ.jumpHeld ? zQ.Xd.JumpHeld : 0) | (QQ.jumpPressed ? zQ.Xd.JumpPressed : 0) | (QQ.running ? zQ.Xd.Running : 0) | (QQ.sprintHeld ? zQ.Xd.SprintHeld : 0))(QQ) | TQ, sQ) && (WQ = !0), (0, yQ.g)(uQ())
          },
          stopMoving: () => {
            var QQ;
            WQ && (WQ = !(null !== (QQ = AQ()) && void 0 !== QQ && QQ.padMove(0, 0, 0, 0, 0, 0)), wQ(), XQ = (0, FQ.w)((() => {
              wQ(), (0, yQ.g)(uQ())
            })))
          },
          uninstall: wQ,
          deviceChanged: QQ => {
            var XQ;
            "touch" === QQ ? ((0, yQ.g)(!1), null !== (XQ = AQ()) && void 0 !== XQ && XQ.padMove(0, 0, 0, 0, zQ.Xd.EndToggle, 0) && (WQ = !1)) : "gamepad" === QQ && (0, yQ.g)(uQ())
          },
          hasPlayer: () => null !== AQ(),
          isPlayerDead: () => {
            var QQ;
            return !1 === (null === (QQ = AQ()) || void 0 === QQ ? void 0 : QQ.localPlayerAlive())
          },
          isReplayMode: () => {
            const QQ = AQ();
            return null !== QQ && 0 !== (RQ(QQ) & zQ.ae.Replay)
          },
          isFreeCameraOn: () => {
            const QQ = AQ();
            return null !== QQ && 0 !== (RQ(QQ) & zQ.ae.FreeCam)
          },
          targetsBlock: () => EQ(AQ()),
          selectedSlotEmpty: () => {
            var QQ;
            return !(null !== (QQ = AQ()) && void 0 !== QQ && QQ.items.Ds())
          },
          pickBlockAllowed: () => !!TQ.e.get("creative") && !!TQ.e.get("canPickBlocks"),
          scrollHotbar: QQ => {
            lQ(zQ.Vd.Hotbar, zQ.Td.Down | (QQ > 0 ? zQ.Td.Next : 0))
          },
          hasFullInventory: PQ.k,
          hasLobbyTab: () => (0, VQ.b)({
            lobbyLeaderboardInfo: TQ.e.get("lobbyLeaderboardInfo"),
            lobbyManage: TQ.e.get("lobbyManage")
          }),
          contextActionInputs: () => {
            var QQ, WQ, XQ, wQ;
            const qQ = AQ();
            return {
              holdingGun: !1 !== (null === qQ || void 0 === qQ ? void 0 : qQ.localPlayerAlive()) && "Gun" === (null === qQ || void 0 === qQ || null === (QQ = qQ.items.Ds()) || void 0 === QQ || null === (WQ = QQ.typeObj) || void 0 === WQ ? void 0 : WQ.type),
              customButtons: null !== (XQ = TQ.e.get("customButtons")) && void 0 !== XQ ? XQ : null,
              touchscreenActionButton: null !== (wQ = TQ.e.get("touchscreenActionButton")) && void 0 !== wQ ? wQ : null
            }
          },
          pressTouchButton: QQ => {
            QQ ? hQ(HQ) : iQ(HQ)
          }
        }
      },
      kQ = () => {
        const QQ = (0, qQ.d)(LQ()),
          WQ = (0, wQ.d)(),
          XQ = null;
        return () => {
          QQ(), WQ(), null === XQ || void 0 === XQ || XQ()
        }
      }
  },
  5118: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      B: () => DQ,
      F: () => zQ,
      H: () => sQ,
      I: () => HQ,
      d: () => dQ,
      e: () => GQ,
      g: () => cQ,
      h: () => iQ,
      k: () => VQ,
      o: () => bQ,
      s: () => pQ,
      t: () => UQ,
      w: () => aQ,
      x: () => lQ,
      y: () => hQ
    });
    var wQ = XQ(5126);
    const qQ = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let TQ = qQ;

    function zQ(QQ) {
      TQ = null !== QQ && void 0 !== QQ ? QQ : qQ
    }

    function sQ() {
      return TQ
    }
    const FQ = new Set,
      PQ = new Set;
    let gQ = -1;
    const JQ = new Set,
      rQ = new Set;
    let IQ = 0,
      jQ = 0;
    const BQ = new Set,
      yQ = new Set;

    function VQ(QQ) {
      return FQ.add(QQ), () => {
        FQ.delete(QQ)
      }
    }

    function DQ(QQ, WQ) {
      for (const wQ of FQ) try {
        wQ(QQ)
      } catch (XQ) {
        WQ(XQ)
      }
    }

    function pQ(QQ) {
      return PQ.add(QQ), () => {
        PQ.delete(QQ)
      }
    }

    function GQ(QQ, WQ) {
      const XQ = gQ < 0 ? 0 : QQ - gQ;
      gQ = QQ;
      for (const qQ of PQ) try {
        qQ(XQ)
      } catch (wQ) {
        WQ(wQ)
      }
    }

    function UQ(QQ) {
      return JQ.add(QQ), () => {
        JQ.delete(QQ)
      }
    }

    function bQ(QQ) {
      return rQ.add(QQ), () => {
        rQ.delete(QQ)
      }
    }
    let vQ = 0;

    function dQ(QQ) {
      vQ += QQ
    }

    function HQ() {
      const QQ = vQ;
      return vQ = 0, QQ
    }

    function aQ(QQ) {
      return BQ.add(QQ), () => {
        BQ.delete(QQ)
      }
    }

    function lQ(QQ) {
      return yQ.add(QQ), () => {
        yQ.delete(QQ)
      }
    }

    function hQ() {
      IQ = 0, jQ = 0, gQ = -1
    }

    function iQ(QQ, WQ) {
      if ("paced" === QQ) return jQ += WQ, null;
      if ("drawn" !== QQ && "skipped" !== QQ) return null;
      const XQ = WQ + jQ;
      return jQ = 0, XQ
    }

    function cQ(QQ, WQ, XQ, qQ) {
      const TQ = (0, wQ.f)(WQ),
        zQ = QQ > 0 ? performance.now() : 0;
      for (let wQ = 0; wQ < QQ; wQ++)
        for (const QQ of BQ) try {
          QQ()
        } catch (sQ) {
          qQ(sQ)
        }
      if (QQ > 0 && dQ(performance.now() - zQ), null !== XQ) {
        for (const QQ of JQ) try {
          QQ(XQ)
        } catch (sQ) {
          qQ(sQ)
        }
        IQ += XQ
      }
      if ("drawn" === WQ) {
        const QQ = IQ;
        IQ = 0;
        for (const WQ of rQ) try {
          WQ(QQ)
        } catch (sQ) {
          qQ(sQ)
        }
      }
      for (const wQ of yQ) try {
        wQ(QQ, TQ)
      } catch (sQ) {
        qQ(sQ)
      }
    }
  },
  5148: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => qQ,
      c: () => TQ,
      e: () => zQ,
      i: () => wQ,
      j: () => sQ
    });
    const wQ = {
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
      qQ = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      TQ = {
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
      zQ = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      sQ = [16]
  },
  40889: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => zQ,
      g: () => TQ,
      k: () => qQ
    });
    let wQ = null;

    function qQ(QQ) {
      wQ = QQ
    }

    function TQ(QQ) {
      wQ === QQ && (wQ = null)
    }

    function zQ() {
      var QQ;
      null === (QQ = wQ) || void 0 === QQ || QQ()
    }
  },
  5153: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => sQ,
      f: () => zQ,
      i: () => PQ
    });
    var wQ = XQ(2506),
      qQ = XQ(2510);
    const TQ = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function zQ(QQ) {
      return QQ instanceof HTMLElement && (!!(QQ.isContentEditable || QQ instanceof HTMLTextAreaElement || QQ instanceof HTMLSelectElement) || QQ instanceof HTMLInputElement && !TQ.has(QQ.type))
    }

    function sQ(QQ) {
      let WQ = null;
      const XQ = XQ => {
          const qQ = zQ(XQ);
          qQ !== WQ && (WQ = qQ, QQ(wQ.j.UiCapture, wQ.x.Keyboard, 0, 0, qQ ? wQ.x.Keyboard : 0))
        },
        qQ = QQ => {
          XQ(QQ.target)
        },
        TQ = QQ => {
          XQ(QQ.relatedTarget)
        },
        sQ = () => {
          XQ(document.activeElement)
        },
        FQ = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", qQ, FQ), document.addEventListener("focusout", TQ, FQ), document.addEventListener("keydown", sQ, FQ), XQ(document.activeElement), () => {
        document.removeEventListener("focusin", qQ, FQ), document.removeEventListener("focusout", TQ, FQ), document.removeEventListener("keydown", sQ, FQ)
      }
    }
    const FQ = new Map;

    function PQ(QQ, WQ) {
      var XQ;
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      FQ.set(wQ, (null !== (XQ = FQ.get(wQ)) && void 0 !== XQ ? XQ : 0) & ~QQ | WQ & QQ);
      let TQ = 0;
      for (const qQ of FQ.values()) TQ |= qQ;
      return (0, qQ.C)(QQ, TQ & QQ)
    }
  },
  37217: (QQ, WQ, XQ) => {
    function wQ(QQ) {
      return QQ.includes("Leaf Bed")
    }

    function qQ(QQ) {
      return / Bed(?: Head)?(?:\||$)/.test(QQ) && !wQ(QQ)
    }

    function TQ(QQ) {
      return QQ.includes(" Strongbed")
    }

    function zQ(QQ) {
      return wQ(QQ) || qQ(QQ) || TQ(QQ)
    }
    XQ.d(WQ, {
      e: () => zQ,
      f: () => wQ,
      h: () => TQ,
      l: () => qQ
    })
  },
  37212: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => PQ
    });
    var wQ = XQ(37217),
      qQ = XQ(9580);
    const TQ = [],
      zQ = [],
      sQ = [],
      FQ = [];
    for (const gQ of Object.keys(qQ.o))(0, wQ.f)(gQ) ? TQ.push(gQ) : (0, wQ.l)(gQ) && zQ.push(gQ), (0, wQ.h)(gQ) && sQ.push(gQ), (gQ.includes(" Bed Head") || gQ.includes(" Strongbed Head")) && FQ.push(gQ);
    const PQ = {
      leafBeds: TQ,
      woolBeds: zQ,
      strongBeds: sQ,
      beds: [...TQ, ...zQ, ...sQ],
      bedHeads: FQ,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6873: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => zQ,
      g: () => qQ,
      j: () => FQ,
      n: () => TQ,
      q: () => PQ,
      s: () => wQ,
      u: () => sQ
    });
    let wQ = function(QQ) {
        return QQ[QQ.DEFAULT = 0] = "DEFAULT", QQ[QQ.BOAT = 1] = "BOAT", QQ[QQ.GLIDER = 2] = "GLIDER", QQ[QQ.BALLOON = 3] = "BALLOON", QQ[QQ.SLEEPING = 4] = "SLEEPING", QQ[QQ.RIDING_MOB = 5] = "RIDING_MOB", QQ[QQ.CAR = 6] = "CAR", QQ[QQ.HOVERCRAFT = 7] = "HOVERCRAFT", QQ
      }({}),
      qQ = function(QQ) {
        return QQ[QQ.WOOD = 0] = "WOOD", QQ[QQ.OBSIDIAN = 1] = "OBSIDIAN", QQ[QQ.SPEED = 2] = "SPEED", QQ
      }({}),
      TQ = function(QQ) {
        return QQ[QQ.WOOD = 0] = "WOOD", QQ[QQ.IRON = 1] = "IRON", QQ[QQ.GOLD = 2] = "GOLD", QQ[QQ.DIAMOND = 3] = "DIAMOND", QQ
      }({}),
      zQ = function(QQ) {
        return QQ[QQ.YELLOW = 0] = "YELLOW", QQ[QQ.WHITE = 1] = "WHITE", QQ[QQ.RED = 2] = "RED", QQ[QQ.PURPLE = 3] = "PURPLE", QQ[QQ.PINK = 4] = "PINK", QQ[QQ.ORANGE = 5] = "ORANGE", QQ[QQ.MAGENTA = 6] = "MAGENTA", QQ[QQ.LIME = 7] = "LIME", QQ[QQ.LIGHT_GRAY = 8] = "LIGHT_GRAY", QQ[QQ.LIGHT_BLUE = 9] = "LIGHT_BLUE", QQ[QQ.GREEN = 10] = "GREEN", QQ[QQ.GRAY = 11] = "GRAY", QQ[QQ.CYAN = 12] = "CYAN", QQ[QQ.BROWN = 13] = "BROWN", QQ[QQ.BLUE = 14] = "BLUE", QQ[QQ.BLACK = 15] = "BLACK", QQ
      }({}),
      sQ = function(QQ) {
        return QQ[QQ.ROTATION_1 = 0] = "ROTATION_1", QQ[QQ.ROTATION_2 = 1] = "ROTATION_2", QQ[QQ.ROTATION_3 = 2] = "ROTATION_3", QQ[QQ.ROTATION_4 = 3] = "ROTATION_4", QQ
      }({}),
      FQ = function(QQ) {
        return QQ[QQ.KART = 0] = "KART", QQ[QQ.OFF_ROADER = 1] = "OFF_ROADER", QQ[QQ.CAR = 2] = "CAR", QQ[QQ.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", QQ[QQ.ARMORED_CAR = 4] = "ARMORED_CAR", QQ[QQ.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", QQ[QQ.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", QQ[QQ.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", QQ
      }({});
    wQ.DEFAULT, wQ.BOAT, qQ.SPEED, wQ.GLIDER, TQ.DIAMOND, wQ.BALLOON, zQ.BLACK, wQ.SLEEPING, sQ.ROTATION_4, wQ.RIDING_MOB, wQ.CAR, FQ.MOONSTONE_MINING_DRILL, wQ.HOVERCRAFT;
    let PQ = function(QQ) {
      return QQ[QQ.NORMAL = 0] = "NORMAL", QQ[QQ.GLIDING = 1] = "GLIDING", QQ[QQ.FLOATING = 2] = "FLOATING", QQ
    }({})
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);