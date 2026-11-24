export const id = 88;
export const ids = [88];
export const modules = {
  40566: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      startWasmPadGameplay: () => WS
    });
    gS(40573);
    var tS = gS(40581),
      bS = gS(40599),
      XS = gS(2083),
      xS = gS(40612),
      NS = gS(4935),
      qS = gS(4911),
      uS = gS(40616),
      IS = gS(40625),
      fS = gS(4947),
      kS = gS(40692),
      aS = gS(2517),
      KS = gS(9048),
      jS = gS(40589),
      GS = gS(9025),
      CS = gS(39127);
    const nS = SS => {
        const HS = fS.b.indexOf(SS);
        if (HS < 0) throw new Error(`No core action "${SS}"`);
        return HS
      },
      PS = nS("primary-fire"),
      QS = nS("alt-fire"),
      DS = nS("mid-fire"),
      wS = nS("jump"),
      hS = nS("ReloadGun"),
      ZS = nS("SwapCameraZoom"),
      JS = nS("TouchAction1"),
      OS = {
        SpecialAction1: nS("SpecialAction1"),
        SpecialAction2: nS("SpecialAction2")
      },
      dS = (SS, HS) => {
        (0, aS.v)(NS.K.PadAction, SS, 0, 0, (0, aS.r)(HS, performance.now()))
      },
      cS = SS => {
        dS(SS, xS.md.Down)
      },
      vS = SS => {
        dS(SS, 0)
      },
      ES = SS => {
        cS(SS), vS(SS)
      },
      LS = () => {
        const SS = (0, IS.h)();
        return null !== SS && void 0 !== SS && SS.isCoreRunning ? SS : null
      },
      YS = SS => xS.t.playerFlags(SS.api.apiView, 0),
      AS = SS => null !== SS && xS.t.targetBlockId(SS.api.apiView, 0) !== xS.Tc,
      yS = () => {
        const SS = (0, KS.d)(),
          HS = new jS.b;
        let gS = !1;
        const tS = (SS, HS) => {
            (0, aS.v)(NS.K.PadLook, xS.sd.Rate, SS, HS, 0)
          },
          bS = () => {
            gS = !1, HS.reset(), tS(0, 0)
          };
        return {
          update: (bS, XS, qS) => {
            gS || (SS.discardPending(), gS = !0);
            const uS = (0, jS.p)(HS, bS, XS, qS, performance.now());
            tS(uS.yawRadPerSec, uS.pitchRadPerSec);
            const IS = SS.drainLookDelta();
            0 === IS.tL && 0 === IS.qL || (0, aS.v)(NS.K.PadLook, xS.sd.Gyro, IS.tL, IS.qL, 0)
          },
          release: bS,
          uninstall: bS
        }
      },
      VS = () => {
        const SS = LS();
        return null !== SS && 0 !== (YS(SS) & xS.zd.PadSneakToggled)
      },
      iS = () => {
        const SS = (SS => {
          const HS = SS => function() {
            return (0, kS.b)(), SS(...arguments)
          };
          return {
            primaryFireDown: HS((() => (cS(PS), 0))),
            primaryFireUp: HS((() => {
              vS(PS)
            })),
            altFireDown: HS((() => (cS(QS), 0))),
            altFireUp: HS((() => {
              vS(QS)
            })),
            jumpDown: HS((() => {
              ES(wS)
            })),
            specialActionDown: HS((SS => {
              cS(OS[SS])
            })),
            specialActionUp: HS((SS => {
              vS(OS[SS])
            })),
            reloadGun: HS((() => {
              ES(hS)
            })),
            dropItem: HS((SS => {
              dS(xS.od.Drop, xS.md.Down | (SS ? xS.md.Stack : 0))
            })),
            swapCameraZoom: HS((() => {
              ES(ZS)
            })),
            pickBlock: HS((() => (ES(DS), AS(SS()))))
          }
        })(LS);
        let HS = !1,
          gS = null;
        const tS = () => {
          var SS;
          null === (SS = gS) || void 0 === SS || SS(), gS = null
        };
        return {
          bodies: () => SS,
          look: yS(),
          move: (SS, gS) => {
            var bS;
            tS();
            const {
              bits: XS,
              flips: NS
            } = (SS => {
              if (null === SS) return {
                bits: xS.pd.Peek,
                flips: 0
              };
              const HS = SS.sneakHeld ? xS.pd.SneakHeld : 0;
              return "hold" === SS.mode ? {
                bits: HS | xS.pd.SneakHoldMode,
                flips: SS.sneakTogglePressed ? 1 : 0
              } : {
                bits: HS,
                flips: SS.sneakPressed || SS.sneakTogglePressed ? 1 : 0
              }
            })(gS);
            null !== (bS = LS()) && void 0 !== bS && bS.padMove(SS.x, SS.y, SS.magnitude, SS.headingOffset, (SS => xS.pd.Active | (SS.jumpHeld ? xS.pd.JumpHeld : 0) | (SS.jumpPressed ? xS.pd.JumpPressed : 0) | (SS.running ? xS.pd.Running : 0) | (SS.sprintHeld ? xS.pd.SprintHeld : 0))(SS) | XS, NS) && (HS = !0), (0, GS.f)(VS())
          },
          stopMoving: () => {
            var SS;
            HS && (HS = !(null !== (SS = LS()) && void 0 !== SS && SS.padMove(0, 0, 0, 0, 0, 0)), tS(), gS = (0, qS.w)((() => {
              tS(), (0, GS.f)(VS())
            })))
          },
          uninstall: tS,
          deviceChanged: SS => {
            var gS;
            "touch" === SS ? ((0, GS.f)(!1), null !== (gS = LS()) && void 0 !== gS && gS.padMove(0, 0, 0, 0, xS.pd.EndToggle, 0) && (HS = !1)) : "gamepad" === SS && (0, GS.f)(VS())
          },
          hasPlayer: () => null !== LS(),
          isPlayerDead: () => {
            var SS;
            return !1 === (null === (SS = LS()) || void 0 === SS ? void 0 : SS.localPlayerAlive())
          },
          isReplayMode: () => {
            const SS = LS();
            return null !== SS && 0 !== (YS(SS) & xS.zd.Replay)
          },
          isFreeCameraOn: () => {
            const SS = LS();
            return null !== SS && 0 !== (YS(SS) & xS.zd.FreeCam)
          },
          targetsBlock: () => AS(LS()),
          selectedSlotEmpty: () => {
            var SS;
            return !(null !== (SS = LS()) && void 0 !== SS && SS.items.Ku())
          },
          pickBlockAllowed: () => !!XS.d.get("creative") && !!XS.d.get("canPickBlocks"),
          scrollHotbar: SS => {
            dS(xS.od.Hotbar, xS.md.Down | (SS > 0 ? xS.md.Next : 0))
          },
          hasFullInventory: uS.o,
          hasLobbyTab: () => (0, CS.e)({
            lobbyLeaderboardInfo: XS.d.get("lobbyLeaderboardInfo"),
            lobbyManage: XS.d.get("lobbyManage")
          }),
          contextActionInputs: () => {
            var SS, HS, gS, tS;
            const bS = LS();
            return {
              holdingGun: !1 !== (null === bS || void 0 === bS ? void 0 : bS.localPlayerAlive()) && "Gun" === (null === bS || void 0 === bS || null === (SS = bS.items.Ku()) || void 0 === SS || null === (HS = SS.typeObj) || void 0 === HS ? void 0 : HS.type),
              customButtons: null !== (gS = XS.d.get("customButtons")) && void 0 !== gS ? gS : null,
              touchscreenActionButton: null !== (tS = XS.d.get("touchscreenActionButton")) && void 0 !== tS ? tS : null
            }
          },
          pressTouchButton: SS => {
            SS ? cS(JS) : vS(JS)
          }
        }
      },
      WS = () => {
        const SS = (0, bS.b)(iS()),
          HS = (0, tS.d)(),
          gS = null;
        return () => {
          SS(), HS(), null === gS || void 0 === gS || gS()
        }
      }
  },
  4911: (SS, HS, gS) => {
    gS.d(HS, {
      A: () => dS,
      B: () => cS,
      D: () => nS,
      H: () => xS,
      J: () => NS,
      M: () => JS,
      e: () => ZS,
      f: () => QS,
      i: () => ES,
      j: () => vS,
      k: () => CS,
      n: () => wS,
      r: () => PS,
      t: () => DS,
      w: () => OS
    });
    var tS = gS(4917);
    const bS = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let XS = bS;

    function xS(SS) {
      XS = null !== SS && void 0 !== SS ? SS : bS
    }

    function NS() {
      return XS
    }
    const qS = new Set,
      uS = new Set;
    let IS = -1;
    const fS = new Set,
      kS = new Set;
    let aS = 0,
      KS = 0;
    const jS = new Set,
      GS = new Set;

    function CS(SS) {
      return qS.add(SS), () => {
        qS.delete(SS)
      }
    }

    function nS(SS, HS) {
      for (const tS of qS) try {
        tS(SS)
      } catch (gS) {
        HS(gS)
      }
    }

    function PS(SS) {
      return uS.add(SS), () => {
        uS.delete(SS)
      }
    }

    function QS(SS, HS) {
      const gS = IS < 0 ? 0 : SS - IS;
      IS = SS;
      for (const bS of uS) try {
        bS(gS)
      } catch (tS) {
        HS(tS)
      }
    }

    function DS(SS) {
      return fS.add(SS), () => {
        fS.delete(SS)
      }
    }

    function wS(SS) {
      return kS.add(SS), () => {
        kS.delete(SS)
      }
    }
    let hS = 0;

    function ZS(SS) {
      hS += SS
    }

    function JS() {
      const SS = hS;
      return hS = 0, SS
    }

    function OS(SS) {
      return jS.add(SS), () => {
        jS.delete(SS)
      }
    }

    function dS(SS) {
      return GS.add(SS), () => {
        GS.delete(SS)
      }
    }

    function cS() {
      aS = 0, KS = 0, IS = -1
    }

    function vS(SS, HS) {
      if ("paced" === SS) return KS += HS, null;
      if ("drawn" !== SS && "skipped" !== SS) return null;
      const gS = HS + KS;
      return KS = 0, gS
    }

    function ES(SS, HS, gS, bS) {
      const XS = (0, tS.h)(HS),
        xS = SS > 0 ? performance.now() : 0;
      for (let tS = 0; tS < SS; tS++)
        for (const SS of jS) try {
          SS()
        } catch (NS) {
          bS(NS)
        }
      if (SS > 0 && ZS(performance.now() - xS), null !== gS) {
        for (const SS of fS) try {
          SS(gS)
        } catch (NS) {
          bS(NS)
        }
        aS += gS
      }
      if ("drawn" === HS) {
        const SS = aS;
        aS = 0;
        for (const HS of kS) try {
          HS(SS)
        } catch (NS) {
          bS(NS)
        }
      }
      for (const tS of GS) try {
        tS(SS, XS)
      } catch (NS) {
        bS(NS)
      }
    }
  },
  4947: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => bS,
      f: () => XS,
      g: () => xS,
      i: () => tS,
      j: () => NS
    });
    const tS = {
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
      bS = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      XS = {
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
      xS = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      NS = [16]
  },
  40692: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => xS,
      e: () => XS,
      i: () => bS
    });
    let tS = null;

    function bS(SS) {
      tS = SS
    }

    function XS(SS) {
      tS === SS && (tS = null)
    }

    function xS() {
      var SS;
      null === (SS = tS) || void 0 === SS || SS()
    }
  },
  4954: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => NS,
      e: () => xS,
      i: () => uS
    });
    var tS = gS(2510),
      bS = gS(2517);
    const XS = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function xS(SS) {
      return SS instanceof HTMLElement && (!!(SS.isContentEditable || SS instanceof HTMLTextAreaElement || SS instanceof HTMLSelectElement) || SS instanceof HTMLInputElement && !XS.has(SS.type))
    }

    function NS(SS) {
      let HS = null;
      const gS = gS => {
          const bS = xS(gS);
          bS !== HS && (HS = bS, SS(tS.g.UiCapture, tS.A.Keyboard, 0, 0, bS ? tS.A.Keyboard : 0))
        },
        bS = SS => {
          gS(SS.target)
        },
        XS = SS => {
          gS(SS.relatedTarget)
        },
        NS = () => {
          gS(document.activeElement)
        },
        qS = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", bS, qS), document.addEventListener("focusout", XS, qS), document.addEventListener("keydown", NS, qS), gS(document.activeElement), () => {
        document.removeEventListener("focusin", bS, qS), document.removeEventListener("focusout", XS, qS), document.removeEventListener("keydown", NS, qS)
      }
    }
    const qS = new Map;

    function uS(SS, HS) {
      var gS;
      let tS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      qS.set(tS, (null !== (gS = qS.get(tS)) && void 0 !== gS ? gS : 0) & ~SS | HS & SS);
      let XS = 0;
      for (const bS of qS.values()) XS |= bS;
      return (0, bS.D)(SS, XS & SS)
    }
  },
  36961: (SS, HS, gS) => {
    function tS(SS) {
      return SS.includes("Leaf Bed")
    }

    function bS(SS) {
      return / Bed(?: Head)?(?:\||$)/.test(SS) && !tS(SS)
    }

    function XS(SS) {
      return SS.includes(" Strongbed")
    }

    function xS(SS) {
      return tS(SS) || bS(SS) || XS(SS)
    }
    gS.d(HS, {
      e: () => xS,
      g: () => tS,
      k: () => XS,
      l: () => bS
    })
  },
  36959: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => uS
    });
    var tS = gS(36961),
      bS = gS(9361);
    const XS = [],
      xS = [],
      NS = [],
      qS = [];
    for (const IS of Object.keys(bS.o))(0, tS.g)(IS) ? XS.push(IS) : (0, tS.l)(IS) && xS.push(IS), (0, tS.k)(IS) && NS.push(IS), (IS.includes(" Bed Head") || IS.includes(" Strongbed Head")) && qS.push(IS);
    const uS = {
      leafBeds: XS,
      woolBeds: xS,
      strongBeds: NS,
      beds: [...XS, ...xS, ...NS],
      bedHeads: qS,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6672: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => xS,
      c: () => bS,
      g: () => qS,
      i: () => XS,
      l: () => uS,
      o: () => tS,
      r: () => NS
    });
    let tS = function(SS) {
        return SS[SS.DEFAULT = 0] = "DEFAULT", SS[SS.BOAT = 1] = "BOAT", SS[SS.GLIDER = 2] = "GLIDER", SS[SS.BALLOON = 3] = "BALLOON", SS[SS.SLEEPING = 4] = "SLEEPING", SS[SS.RIDING_MOB = 5] = "RIDING_MOB", SS[SS.CAR = 6] = "CAR", SS[SS.HOVERCRAFT = 7] = "HOVERCRAFT", SS
      }({}),
      bS = function(SS) {
        return SS[SS.WOOD = 0] = "WOOD", SS[SS.OBSIDIAN = 1] = "OBSIDIAN", SS[SS.SPEED = 2] = "SPEED", SS
      }({}),
      XS = function(SS) {
        return SS[SS.WOOD = 0] = "WOOD", SS[SS.IRON = 1] = "IRON", SS[SS.GOLD = 2] = "GOLD", SS[SS.DIAMOND = 3] = "DIAMOND", SS
      }({}),
      xS = function(SS) {
        return SS[SS.YELLOW = 0] = "YELLOW", SS[SS.WHITE = 1] = "WHITE", SS[SS.RED = 2] = "RED", SS[SS.PURPLE = 3] = "PURPLE", SS[SS.PINK = 4] = "PINK", SS[SS.ORANGE = 5] = "ORANGE", SS[SS.MAGENTA = 6] = "MAGENTA", SS[SS.LIME = 7] = "LIME", SS[SS.LIGHT_GRAY = 8] = "LIGHT_GRAY", SS[SS.LIGHT_BLUE = 9] = "LIGHT_BLUE", SS[SS.GREEN = 10] = "GREEN", SS[SS.GRAY = 11] = "GRAY", SS[SS.CYAN = 12] = "CYAN", SS[SS.BROWN = 13] = "BROWN", SS[SS.BLUE = 14] = "BLUE", SS[SS.BLACK = 15] = "BLACK", SS
      }({}),
      NS = function(SS) {
        return SS[SS.ROTATION_1 = 0] = "ROTATION_1", SS[SS.ROTATION_2 = 1] = "ROTATION_2", SS[SS.ROTATION_3 = 2] = "ROTATION_3", SS[SS.ROTATION_4 = 3] = "ROTATION_4", SS
      }({}),
      qS = function(SS) {
        return SS[SS.KART = 0] = "KART", SS[SS.OFF_ROADER = 1] = "OFF_ROADER", SS[SS.CAR = 2] = "CAR", SS[SS.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", SS[SS.ARMORED_CAR = 4] = "ARMORED_CAR", SS[SS.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", SS[SS.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", SS[SS.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", SS
      }({});
    tS.DEFAULT, tS.BOAT, bS.SPEED, tS.GLIDER, XS.DIAMOND, tS.BALLOON, xS.BLACK, tS.SLEEPING, NS.ROTATION_4, tS.RIDING_MOB, tS.CAR, qS.MOONSTONE_MINING_DRILL, tS.HOVERCRAFT;
    let uS = function(SS) {
      return SS[SS.NORMAL = 0] = "NORMAL", SS[SS.GLIDING = 1] = "GLIDING", SS[SS.FLOATING = 2] = "FLOATING", SS
    }({})
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);