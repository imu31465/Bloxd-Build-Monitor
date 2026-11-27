export const id = 104;
export const ids = [104];
export const modules = {
  42071: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      startWasmPadGameplay: () => IR
    });
    GR(42078);
    var yR = GR(42086),
      tR = GR(42097),
      uR = GR(2163),
      ZR = GR(42106),
      qR = GR(5685),
      iR = GR(5665),
      fR = GR(42114),
      VR = GR(42118),
      KR = GR(5697),
      wR = GR(42194),
      rR = GR(3437),
      eR = GR(10203),
      aR = GR(42088),
      LR = GR(10181),
      nR = GR(40356);
    const UR = RR => {
        const JR = KR.e.indexOf(RR);
        if (JR < 0) throw new Error(`No core action "${RR}"`);
        return JR
      },
      WR = UR("primary-fire"),
      AR = UR("alt-fire"),
      CR = UR("mid-fire"),
      XR = UR("jump"),
      MR = UR("ReloadGun"),
      BR = UR("SwapCameraZoom"),
      lR = UR("Zoom"),
      pR = UR("TouchAction1"),
      gR = {
        SpecialAction1: UR("SpecialAction1"),
        SpecialAction2: UR("SpecialAction2")
      },
      bR = (RR, JR) => {
        (0, rR.w)(qR.N.PadAction, RR, 0, 0, (0, rR.s)(JR, performance.now()))
      },
      vR = RR => {
        bR(RR, ZR.md.Down)
      },
      OR = RR => {
        bR(RR, 0)
      },
      xR = RR => {
        vR(RR), OR(RR)
      },
      NR = () => {
        const RR = (0, VR.l)();
        return null !== RR && void 0 !== RR && RR.isCoreRunning ? RR : null
      },
      DR = RR => ZR.s.playerFlags(RR.api.apiView, 0),
      HR = RR => null !== RR && ZR.s.targetBlockId(RR.api.apiView, 0) !== ZR.Yc,
      oR = () => {
        const RR = (0, eR.e)(),
          JR = new aR.e;
        let GR = !1;
        const yR = (RR, JR) => {
            (0, rR.w)(qR.N.PadLook, ZR.qd.Rate, RR, JR, 0)
          },
          tR = () => {
            GR = !1, JR.reset(), yR(0, 0)
          };
        return {
          update: (tR, uR, iR) => {
            GR || (RR.discardPending(), GR = !0);
            const fR = (0, aR.r)(JR, tR, uR, iR, performance.now());
            yR(fR.yawRadPerSec, fR.pitchRadPerSec);
            const VR = RR.drainLookDelta();
            0 === VR.bD && 0 === VR.PD || (0, rR.w)(qR.N.PadLook, ZR.qd.Gyro, VR.bD, VR.PD, 0)
          },
          release: tR,
          uninstall: tR
        }
      },
      cR = () => {
        const RR = NR();
        return null !== RR && 0 !== (DR(RR) & ZR.xd.PadSneakToggled)
      },
      PR = () => {
        const RR = (RR => {
          const JR = RR => function() {
            return (0, wR.c)(), RR(...arguments)
          };
          return {
            primaryFireDown: JR((RR => (bR(WR, ZR.md.Down | (RR ? ZR.md.Repeat : 0)), 0))),
            primaryFireUp: JR((() => {
              OR(WR)
            })),
            altFireDown: JR((() => (vR(AR), 0))),
            altFireUp: JR((() => {
              OR(AR)
            })),
            jumpDown: JR((() => {
              xR(XR)
            })),
            specialActionDown: JR((RR => {
              vR(gR[RR])
            })),
            specialActionUp: JR((RR => {
              OR(gR[RR])
            })),
            reloadGun: JR((() => {
              xR(MR)
            })),
            dropItem: JR((RR => {
              bR(ZR.nd.Drop, ZR.md.Down | (RR ? ZR.md.Stack : 0))
            })),
            swapCameraZoom: JR((() => {
              xR(BR)
            })),
            zoom: JR((RR => {
              RR ? vR(lR) : OR(lR)
            })),
            pickBlock: JR((() => (xR(CR), HR(RR()))))
          }
        })(NR);
        let JR = !1,
          GR = null;
        const yR = () => {
          var RR;
          null === (RR = GR) || void 0 === RR || RR(), GR = null
        };
        return {
          bodies: () => RR,
          look: oR(),
          move: (RR, GR) => {
            var tR;
            yR();
            const {
              bits: uR,
              flips: qR
            } = (RR => {
              if (null === RR) return {
                bits: ZR.pd.Peek,
                flips: 0
              };
              const JR = RR.sneakHeld ? ZR.pd.SneakHeld : 0;
              return "hold" === RR.mode ? {
                bits: JR | ZR.pd.SneakHoldMode,
                flips: RR.sneakTogglePressed ? 1 : 0
              } : {
                bits: JR,
                flips: RR.sneakPressed || RR.sneakTogglePressed ? 1 : 0
              }
            })(GR);
            null !== (tR = NR()) && void 0 !== tR && tR.padMove(RR.x, RR.y, RR.magnitude, RR.headingOffset, (RR => ZR.pd.Active | (RR.jumpHeld ? ZR.pd.JumpHeld : 0) | (RR.jumpPressed ? ZR.pd.JumpPressed : 0) | (RR.running ? ZR.pd.Running : 0) | (RR.sprintHeld ? ZR.pd.SprintHeld : 0))(RR) | uR, qR) && (JR = !0), (0, LR.f)(cR())
          },
          stopMoving: () => {
            var RR;
            JR && (JR = !(null !== (RR = NR()) && void 0 !== RR && RR.padMove(0, 0, 0, 0, 0, 0)), yR(), GR = (0, iR.r)((() => {
              yR(), (0, LR.f)(cR())
            })))
          },
          uninstall: yR,
          deviceChanged: RR => {
            var GR;
            "touch" === RR ? ((0, LR.f)(!1), null !== (GR = NR()) && void 0 !== GR && GR.padMove(0, 0, 0, 0, ZR.pd.EndToggle, 0) && (JR = !1)) : "gamepad" === RR && (0, LR.f)(cR())
          },
          hasPlayer: () => null !== NR(),
          isPlayerDead: () => {
            var RR;
            return !1 === (null === (RR = NR()) || void 0 === RR ? void 0 : RR.localPlayerAlive())
          },
          isReplayMode: () => {
            const RR = NR();
            return null !== RR && 0 !== (DR(RR) & ZR.xd.Replay)
          },
          isFreeCameraOn: () => {
            const RR = NR();
            return null !== RR && 0 !== (DR(RR) & ZR.xd.FreeCam)
          },
          targetsBlock: () => HR(NR()),
          selectedSlotEmpty: () => {
            var RR;
            return !(null !== (RR = NR()) && void 0 !== RR && RR.items.Qq())
          },
          pickBlockAllowed: () => !!uR.c.get("creative") && !!uR.c.get("canPickBlocks"),
          zoomAllowed: () => !!uR.c.get("canUseZoomKey"),
          scrollHotbar: RR => {
            bR(ZR.nd.Hotbar, ZR.md.Down | (RR > 0 ? ZR.md.Next : 0))
          },
          hasFullInventory: fR.p,
          hasLobbyTab: () => (0, nR.b)({
            lobbyLeaderboardInfo: uR.c.get("lobbyLeaderboardInfo"),
            lobbyManage: uR.c.get("lobbyManage")
          }),
          contextActionInputs: () => {
            var RR, JR, GR, yR;
            const tR = NR();
            return {
              holdingGun: !1 !== (null === tR || void 0 === tR ? void 0 : tR.localPlayerAlive()) && "Gun" === (null === tR || void 0 === tR || null === (RR = tR.items.Qq()) || void 0 === RR || null === (JR = RR.typeObj) || void 0 === JR ? void 0 : JR.type),
              customButtons: null !== (GR = uR.c.get("customButtons")) && void 0 !== GR ? GR : null,
              touchscreenActionButton: null !== (yR = uR.c.get("touchscreenActionButton")) && void 0 !== yR ? yR : null
            }
          },
          pressTouchButton: RR => {
            RR ? vR(pR) : OR(pR)
          }
        }
      },
      IR = () => {
        const RR = (0, tR.b)(PR()),
          JR = (0, yR.c)(),
          GR = null;
        return () => {
          RR(), JR(), null === GR || void 0 === GR || GR()
        }
      }
  },
  5665: (RR, JR, GR) => {
    GR.d(JR, {
      B: () => ZR,
      E: () => qR,
      H: () => lR,
      c: () => BR,
      d: () => AR,
      e: () => OR,
      f: () => vR,
      g: () => nR,
      k: () => XR,
      m: () => WR,
      n: () => CR,
      r: () => pR,
      t: () => gR,
      v: () => bR,
      z: () => UR
    });
    var yR = GR(5671);
    const tR = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let uR = tR;

    function ZR(RR) {
      uR = null !== RR && void 0 !== RR ? RR : tR
    }

    function qR() {
      return uR
    }
    const iR = new Set,
      fR = new Set;
    let VR = -1;
    const KR = new Set,
      wR = new Set;
    let rR = 0,
      eR = 0;
    const aR = new Set,
      LR = new Set;

    function nR(RR) {
      return iR.add(RR), () => {
        iR.delete(RR)
      }
    }

    function UR(RR, JR) {
      for (const yR of iR) try {
        yR(RR)
      } catch (GR) {
        JR(GR)
      }
    }

    function WR(RR) {
      return fR.add(RR), () => {
        fR.delete(RR)
      }
    }

    function AR(RR, JR) {
      const GR = VR < 0 ? 0 : RR - VR;
      VR = RR;
      for (const tR of fR) try {
        tR(GR)
      } catch (yR) {
        JR(yR)
      }
    }

    function CR(RR) {
      return KR.add(RR), () => {
        KR.delete(RR)
      }
    }

    function XR(RR) {
      return wR.add(RR), () => {
        wR.delete(RR)
      }
    }
    let MR = 0;

    function BR(RR) {
      MR += RR
    }

    function lR() {
      const RR = MR;
      return MR = 0, RR
    }

    function pR(RR) {
      return aR.add(RR), () => {
        aR.delete(RR)
      }
    }

    function gR(RR) {
      return LR.add(RR), () => {
        LR.delete(RR)
      }
    }

    function bR() {
      rR = 0, eR = 0, VR = -1
    }

    function vR(RR, JR) {
      if ("paced" === RR) return eR += JR, null;
      if ("drawn" !== RR && "skipped" !== RR) return null;
      const GR = JR + eR;
      return eR = 0, GR
    }

    function OR(RR, JR, GR, tR) {
      const uR = (0, yR.f)(JR),
        ZR = RR > 0 ? performance.now() : 0;
      for (let yR = 0; yR < RR; yR++)
        for (const RR of aR) try {
          RR()
        } catch (qR) {
          tR(qR)
        }
      if (RR > 0 && BR(performance.now() - ZR), null !== GR) {
        for (const RR of KR) try {
          RR(GR)
        } catch (qR) {
          tR(qR)
        }
        rR += GR
      }
      if ("drawn" === JR) {
        const RR = rR;
        rR = 0;
        for (const JR of wR) try {
          JR(RR)
        } catch (qR) {
          tR(qR)
        }
      }
      for (const yR of LR) try {
        yR(RR, uR)
      } catch (qR) {
        tR(qR)
      }
    }
  },
  5697: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => tR,
      f: () => uR,
      g: () => ZR,
      i: () => yR,
      k: () => qR
    });
    const yR = {
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
        TouchZoom: 191,
        TouchAction1: 192,
        TouchAction2: 193,
        TouchAction3: 194,
        TouchAttack: 195,
        TouchUse: 196
      },
      tR = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      uR = {
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
      ZR = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        Zoom: [191],
        "primary-fire": [195],
        "alt-fire": [196]
      },
      qR = [16]
  },
  42194: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => ZR,
      g: () => uR,
      h: () => tR
    });
    let yR = null;

    function tR(RR) {
      yR = RR
    }

    function uR(RR) {
      yR === RR && (yR = null)
    }

    function ZR() {
      var RR;
      null === (RR = yR) || void 0 === RR || RR()
    }
  },
  5699: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => qR,
      h: () => ZR,
      i: () => fR
    });
    var yR = GR(3428),
      tR = GR(3437);
    const uR = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function ZR(RR) {
      return RR instanceof HTMLElement && (!!(RR.isContentEditable || RR instanceof HTMLTextAreaElement || RR instanceof HTMLSelectElement) || RR instanceof HTMLInputElement && !uR.has(RR.type))
    }

    function qR(RR) {
      let JR = null;
      const GR = GR => {
          const tR = ZR(GR);
          tR !== JR && (JR = tR, RR(yR.j.UiCapture, yR.C.Keyboard, 0, 0, tR ? yR.C.Keyboard : 0))
        },
        tR = RR => {
          GR(RR.target)
        },
        uR = RR => {
          GR(RR.relatedTarget)
        },
        qR = () => {
          GR(document.activeElement)
        },
        iR = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", tR, iR), document.addEventListener("focusout", uR, iR), document.addEventListener("keydown", qR, iR), GR(document.activeElement), () => {
        document.removeEventListener("focusin", tR, iR), document.removeEventListener("focusout", uR, iR), document.removeEventListener("keydown", qR, iR)
      }
    }
    const iR = new Map;

    function fR(RR, JR) {
      var GR;
      let yR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      iR.set(yR, (null !== (GR = iR.get(yR)) && void 0 !== GR ? GR : 0) & ~RR | JR & RR);
      let uR = 0;
      for (const tR of iR.values()) uR |= tR;
      return (0, tR.H)(RR, uR & RR)
    }
  },
  38040: (RR, JR, GR) => {
    function yR(RR) {
      return RR.includes("Leaf Bed")
    }

    function tR(RR) {
      return / Bed(?: Head)?(?:\||$)/.test(RR) && !yR(RR)
    }

    function uR(RR) {
      return RR.includes(" Strongbed")
    }

    function ZR(RR) {
      return yR(RR) || tR(RR) || uR(RR)
    }
    GR.d(JR, {
      d: () => ZR,
      f: () => yR,
      h: () => uR,
      k: () => tR
    })
  },
  38034: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => fR
    });
    var yR = GR(38040),
      tR = GR(5844);
    const uR = [],
      ZR = [],
      qR = [],
      iR = [];
    for (const VR of Object.keys(tR.q))(0, yR.f)(VR) ? uR.push(VR) : (0, yR.k)(VR) && ZR.push(VR), (0, yR.h)(VR) && qR.push(VR), (VR.includes(" Bed Head") || VR.includes(" Strongbed Head")) && iR.push(VR);
    const fR = {
      leafBeds: uR,
      woolBeds: ZR,
      strongBeds: qR,
      beds: [...uR, ...ZR, ...qR],
      bedHeads: iR,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  7588: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => ZR,
      c: () => tR,
      d: () => iR,
      g: () => uR,
      j: () => fR,
      k: () => yR,
      n: () => qR
    });
    let yR = function(RR) {
        return RR[RR.DEFAULT = 0] = "DEFAULT", RR[RR.BOAT = 1] = "BOAT", RR[RR.GLIDER = 2] = "GLIDER", RR[RR.BALLOON = 3] = "BALLOON", RR[RR.SLEEPING = 4] = "SLEEPING", RR[RR.RIDING_MOB = 5] = "RIDING_MOB", RR[RR.CAR = 6] = "CAR", RR[RR.HOVERCRAFT = 7] = "HOVERCRAFT", RR
      }({}),
      tR = function(RR) {
        return RR[RR.WOOD = 0] = "WOOD", RR[RR.OBSIDIAN = 1] = "OBSIDIAN", RR[RR.SPEED = 2] = "SPEED", RR
      }({}),
      uR = function(RR) {
        return RR[RR.WOOD = 0] = "WOOD", RR[RR.IRON = 1] = "IRON", RR[RR.GOLD = 2] = "GOLD", RR[RR.DIAMOND = 3] = "DIAMOND", RR
      }({}),
      ZR = function(RR) {
        return RR[RR.YELLOW = 0] = "YELLOW", RR[RR.WHITE = 1] = "WHITE", RR[RR.RED = 2] = "RED", RR[RR.PURPLE = 3] = "PURPLE", RR[RR.PINK = 4] = "PINK", RR[RR.ORANGE = 5] = "ORANGE", RR[RR.MAGENTA = 6] = "MAGENTA", RR[RR.LIME = 7] = "LIME", RR[RR.LIGHT_GRAY = 8] = "LIGHT_GRAY", RR[RR.LIGHT_BLUE = 9] = "LIGHT_BLUE", RR[RR.GREEN = 10] = "GREEN", RR[RR.GRAY = 11] = "GRAY", RR[RR.CYAN = 12] = "CYAN", RR[RR.BROWN = 13] = "BROWN", RR[RR.BLUE = 14] = "BLUE", RR[RR.BLACK = 15] = "BLACK", RR
      }({}),
      qR = function(RR) {
        return RR[RR.ROTATION_1 = 0] = "ROTATION_1", RR[RR.ROTATION_2 = 1] = "ROTATION_2", RR[RR.ROTATION_3 = 2] = "ROTATION_3", RR[RR.ROTATION_4 = 3] = "ROTATION_4", RR
      }({}),
      iR = function(RR) {
        return RR[RR.KART = 0] = "KART", RR[RR.OFF_ROADER = 1] = "OFF_ROADER", RR[RR.CAR = 2] = "CAR", RR[RR.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", RR[RR.ARMORED_CAR = 4] = "ARMORED_CAR", RR[RR.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", RR[RR.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", RR[RR.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", RR
      }({});
    yR.DEFAULT, yR.BOAT, tR.SPEED, yR.GLIDER, uR.DIAMOND, yR.BALLOON, ZR.BLACK, yR.SLEEPING, qR.ROTATION_4, yR.RIDING_MOB, yR.CAR, iR.MOONSTONE_MINING_DRILL, yR.HOVERCRAFT;
    let fR = function(RR) {
      return RR[RR.NORMAL = 0] = "NORMAL", RR[RR.GLIDING = 1] = "GLIDING", RR[RR.FLOATING = 2] = "FLOATING", RR
    }({})
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);