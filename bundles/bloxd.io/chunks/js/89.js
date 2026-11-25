export const id = 89;
export const ids = [89];
export const modules = {
  40920: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      startWasmPadGameplay: () => AG
    });
    ZG(40929);
    var wG = ZG(40932),
      SG = ZG(40947),
      LG = ZG(1923),
      yG = ZG(40954),
      kG = ZG(4818),
      UG = ZG(4800),
      YG = ZG(40963),
      VG = ZG(40971),
      pG = ZG(4836),
      fG = ZG(41034),
      QG = ZG(2388),
      KG = ZG(8889),
      hG = ZG(40935),
      dG = ZG(8866),
      JG = ZG(39519);
    const rG = GG => {
        const bG = pG.e.indexOf(GG);
        if (bG < 0) throw new Error(`No core action "${GG}"`);
        return bG
      },
      zG = rG("primary-fire"),
      EG = rG("alt-fire"),
      oG = rG("mid-fire"),
      XG = rG("jump"),
      uG = rG("ReloadGun"),
      iG = rG("SwapCameraZoom"),
      CG = rG("TouchAction1"),
      WG = {
        SpecialAction1: rG("SpecialAction1"),
        SpecialAction2: rG("SpecialAction2")
      },
      mG = (GG, bG) => {
        (0, QG.x)(kG.M.PadAction, GG, 0, 0, (0, QG.v)(bG, performance.now()))
      },
      IG = GG => {
        mG(GG, yG.rd.Down)
      },
      FG = GG => {
        mG(GG, 0)
      },
      vG = GG => {
        IG(GG), FG(GG)
      },
      aG = () => {
        const GG = (0, VG.f)();
        return null !== GG && void 0 !== GG && GG.isCoreRunning ? GG : null
      },
      cG = GG => yG.v.playerFlags(GG.api.apiView, 0),
      lG = GG => null !== GG && yG.v.targetBlockId(GG.api.apiView, 0) !== yG.Yc,
      jG = () => {
        const GG = (0, KG.b)(),
          bG = new hG.e;
        let ZG = !1;
        const wG = (GG, bG) => {
            (0, QG.x)(kG.M.PadLook, yG.zd.Rate, GG, bG, 0)
          },
          SG = () => {
            ZG = !1, bG.reset(), wG(0, 0)
          };
        return {
          update: (SG, LG, UG) => {
            ZG || (GG.discardPending(), ZG = !0);
            const YG = (0, hG.t)(bG, SG, LG, UG, performance.now());
            wG(YG.yawRadPerSec, YG.pitchRadPerSec);
            const VG = GG.drainLookDelta();
            0 === VG.SF && 0 === VG.kF || (0, QG.x)(kG.M.PadLook, yG.zd.Gyro, VG.SF, VG.kF, 0)
          },
          release: SG,
          uninstall: SG
        }
      },
      PG = () => {
        const GG = aG();
        return null !== GG && 0 !== (cG(GG) & yG.Hd.PadSneakToggled)
      },
      MG = () => {
        const GG = (GG => {
          const bG = GG => function() {
            return (0, fG.c)(), GG(...arguments)
          };
          return {
            primaryFireDown: bG((GG => (mG(zG, yG.rd.Down | (GG ? yG.rd.Repeat : 0)), 0))),
            primaryFireUp: bG((() => {
              FG(zG)
            })),
            altFireDown: bG((() => (IG(EG), 0))),
            altFireUp: bG((() => {
              FG(EG)
            })),
            jumpDown: bG((() => {
              vG(XG)
            })),
            specialActionDown: bG((GG => {
              IG(WG[GG])
            })),
            specialActionUp: bG((GG => {
              FG(WG[GG])
            })),
            reloadGun: bG((() => {
              vG(uG)
            })),
            dropItem: bG((GG => {
              mG(yG.ud.Drop, yG.rd.Down | (GG ? yG.rd.Stack : 0))
            })),
            swapCameraZoom: bG((() => {
              vG(iG)
            })),
            pickBlock: bG((() => (vG(oG), lG(GG()))))
          }
        })(aG);
        let bG = !1,
          ZG = null;
        const wG = () => {
          var GG;
          null === (GG = ZG) || void 0 === GG || GG(), ZG = null
        };
        return {
          bodies: () => GG,
          look: jG(),
          move: (GG, ZG) => {
            var SG;
            wG();
            const {
              bits: LG,
              flips: kG
            } = (GG => {
              if (null === GG) return {
                bits: yG.wd.Peek,
                flips: 0
              };
              const bG = GG.sneakHeld ? yG.wd.SneakHeld : 0;
              return "hold" === GG.mode ? {
                bits: bG | yG.wd.SneakHoldMode,
                flips: GG.sneakTogglePressed ? 1 : 0
              } : {
                bits: bG,
                flips: GG.sneakPressed || GG.sneakTogglePressed ? 1 : 0
              }
            })(ZG);
            null !== (SG = aG()) && void 0 !== SG && SG.padMove(GG.x, GG.y, GG.magnitude, GG.headingOffset, (GG => yG.wd.Active | (GG.jumpHeld ? yG.wd.JumpHeld : 0) | (GG.jumpPressed ? yG.wd.JumpPressed : 0) | (GG.running ? yG.wd.Running : 0) | (GG.sprintHeld ? yG.wd.SprintHeld : 0))(GG) | LG, kG) && (bG = !0), (0, dG.f)(PG())
          },
          stopMoving: () => {
            var GG;
            bG && (bG = !(null !== (GG = aG()) && void 0 !== GG && GG.padMove(0, 0, 0, 0, 0, 0)), wG(), ZG = (0, UG.t)((() => {
              wG(), (0, dG.f)(PG())
            })))
          },
          uninstall: wG,
          deviceChanged: GG => {
            var ZG;
            "touch" === GG ? ((0, dG.f)(!1), null !== (ZG = aG()) && void 0 !== ZG && ZG.padMove(0, 0, 0, 0, yG.wd.EndToggle, 0) && (bG = !1)) : "gamepad" === GG && (0, dG.f)(PG())
          },
          hasPlayer: () => null !== aG(),
          isPlayerDead: () => {
            var GG;
            return !1 === (null === (GG = aG()) || void 0 === GG ? void 0 : GG.localPlayerAlive())
          },
          isReplayMode: () => {
            const GG = aG();
            return null !== GG && 0 !== (cG(GG) & yG.Hd.Replay)
          },
          isFreeCameraOn: () => {
            const GG = aG();
            return null !== GG && 0 !== (cG(GG) & yG.Hd.FreeCam)
          },
          targetsBlock: () => lG(aG()),
          selectedSlotEmpty: () => {
            var GG;
            return !(null !== (GG = aG()) && void 0 !== GG && GG.items.Ik())
          },
          pickBlockAllowed: () => !!LG.c.get("creative") && !!LG.c.get("canPickBlocks"),
          scrollHotbar: GG => {
            mG(yG.ud.Hotbar, yG.rd.Down | (GG > 0 ? yG.rd.Next : 0))
          },
          hasFullInventory: YG.n,
          hasLobbyTab: () => (0, JG.b)({
            lobbyLeaderboardInfo: LG.c.get("lobbyLeaderboardInfo"),
            lobbyManage: LG.c.get("lobbyManage")
          }),
          contextActionInputs: () => {
            var GG, bG, ZG, wG;
            const SG = aG();
            return {
              holdingGun: !1 !== (null === SG || void 0 === SG ? void 0 : SG.localPlayerAlive()) && "Gun" === (null === SG || void 0 === SG || null === (GG = SG.items.Ik()) || void 0 === GG || null === (bG = GG.typeObj) || void 0 === bG ? void 0 : bG.type),
              customButtons: null !== (ZG = LG.c.get("customButtons")) && void 0 !== ZG ? ZG : null,
              touchscreenActionButton: null !== (wG = LG.c.get("touchscreenActionButton")) && void 0 !== wG ? wG : null
            }
          },
          pressTouchButton: GG => {
            GG ? IG(CG) : FG(CG)
          }
        }
      },
      AG = () => {
        const GG = (0, SG.e)(MG()),
          bG = (0, wG.c)(),
          ZG = null;
        return () => {
          GG(), bG(), null === ZG || void 0 === ZG || ZG()
        }
      }
  },
  4800: (GG, bG, ZG) => {
    ZG.d(bG, {
      A: () => rG,
      E: () => yG,
      I: () => kG,
      K: () => CG,
      c: () => iG,
      g: () => EG,
      j: () => vG,
      k: () => FG,
      l: () => JG,
      n: () => XG,
      p: () => zG,
      r: () => oG,
      t: () => WG,
      u: () => mG,
      y: () => IG
    });
    var wG = ZG(4804);
    const SG = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let LG = SG;

    function yG(GG) {
      LG = null !== GG && void 0 !== GG ? GG : SG
    }

    function kG() {
      return LG
    }
    const UG = new Set,
      YG = new Set;
    let VG = -1;
    const pG = new Set,
      fG = new Set;
    let QG = 0,
      KG = 0;
    const hG = new Set,
      dG = new Set;

    function JG(GG) {
      return UG.add(GG), () => {
        UG.delete(GG)
      }
    }

    function rG(GG, bG) {
      for (const wG of UG) try {
        wG(GG)
      } catch (ZG) {
        bG(ZG)
      }
    }

    function zG(GG) {
      return YG.add(GG), () => {
        YG.delete(GG)
      }
    }

    function EG(GG, bG) {
      const ZG = VG < 0 ? 0 : GG - VG;
      VG = GG;
      for (const SG of YG) try {
        SG(ZG)
      } catch (wG) {
        bG(wG)
      }
    }

    function oG(GG) {
      return pG.add(GG), () => {
        pG.delete(GG)
      }
    }

    function XG(GG) {
      return fG.add(GG), () => {
        fG.delete(GG)
      }
    }
    let uG = 0;

    function iG(GG) {
      uG += GG
    }

    function CG() {
      const GG = uG;
      return uG = 0, GG
    }

    function WG(GG) {
      return hG.add(GG), () => {
        hG.delete(GG)
      }
    }

    function mG(GG) {
      return dG.add(GG), () => {
        dG.delete(GG)
      }
    }

    function IG() {
      QG = 0, KG = 0, VG = -1
    }

    function FG(GG, bG) {
      if ("paced" === GG) return KG += bG, null;
      if ("drawn" !== GG && "skipped" !== GG) return null;
      const ZG = bG + KG;
      return KG = 0, ZG
    }

    function vG(GG, bG, ZG, SG) {
      const LG = (0, wG.l)(bG),
        yG = GG > 0 ? performance.now() : 0;
      for (let wG = 0; wG < GG; wG++)
        for (const GG of hG) try {
          GG()
        } catch (kG) {
          SG(kG)
        }
      if (GG > 0 && iG(performance.now() - yG), null !== ZG) {
        for (const GG of pG) try {
          GG(ZG)
        } catch (kG) {
          SG(kG)
        }
        QG += ZG
      }
      if ("drawn" === bG) {
        const GG = QG;
        QG = 0;
        for (const bG of fG) try {
          bG(GG)
        } catch (kG) {
          SG(kG)
        }
      }
      for (const wG of dG) try {
        wG(GG, LG)
      } catch (kG) {
        SG(kG)
      }
    }
  },
  4836: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => SG,
      h: () => LG,
      i: () => yG,
      k: () => wG,
      m: () => kG
    });
    const wG = {
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
      SG = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      LG = {
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
      yG = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      kG = [16]
  },
  41034: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => yG,
      e: () => LG,
      f: () => SG
    });
    let wG = null;

    function SG(GG) {
      wG = GG
    }

    function LG(GG) {
      wG === GG && (wG = null)
    }

    function yG() {
      var GG;
      null === (GG = wG) || void 0 === GG || GG()
    }
  },
  4842: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => kG,
      f: () => yG,
      j: () => YG
    });
    var wG = ZG(2380),
      SG = ZG(2388);
    const LG = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function yG(GG) {
      return GG instanceof HTMLElement && (!!(GG.isContentEditable || GG instanceof HTMLTextAreaElement || GG instanceof HTMLSelectElement) || GG instanceof HTMLInputElement && !LG.has(GG.type))
    }

    function kG(GG) {
      let bG = null;
      const ZG = ZG => {
          const SG = yG(ZG);
          SG !== bG && (bG = SG, GG(wG.g.UiCapture, wG.t.Keyboard, 0, 0, SG ? wG.t.Keyboard : 0))
        },
        SG = GG => {
          ZG(GG.target)
        },
        LG = GG => {
          ZG(GG.relatedTarget)
        },
        kG = () => {
          ZG(document.activeElement)
        },
        UG = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", SG, UG), document.addEventListener("focusout", LG, UG), document.addEventListener("keydown", kG, UG), ZG(document.activeElement), () => {
        document.removeEventListener("focusin", SG, UG), document.removeEventListener("focusout", LG, UG), document.removeEventListener("keydown", kG, UG)
      }
    }
    const UG = new Map;

    function YG(GG, bG) {
      var ZG;
      let wG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      UG.set(wG, (null !== (ZG = UG.get(wG)) && void 0 !== ZG ? ZG : 0) & ~GG | bG & GG);
      let LG = 0;
      for (const SG of UG.values()) LG |= SG;
      return (0, SG.G)(GG, LG & GG)
    }
  },
  37287: (GG, bG, ZG) => {
    function wG(GG) {
      return GG.includes("Leaf Bed")
    }

    function SG(GG) {
      return / Bed(?: Head)?(?:\||$)/.test(GG) && !wG(GG)
    }

    function LG(GG) {
      return GG.includes(" Strongbed")
    }

    function yG(GG) {
      return wG(GG) || SG(GG) || LG(GG)
    }
    ZG.d(bG, {
      d: () => yG,
      f: () => wG,
      j: () => LG,
      n: () => SG
    })
  },
  37283: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => YG
    });
    var wG = ZG(37287),
      SG = ZG(9249);
    const LG = [],
      yG = [],
      kG = [],
      UG = [];
    for (const VG of Object.keys(SG.t))(0, wG.f)(VG) ? LG.push(VG) : (0, wG.n)(VG) && yG.push(VG), (0, wG.j)(VG) && kG.push(VG), (VG.includes(" Bed Head") || VG.includes(" Strongbed Head")) && UG.push(VG);
    const YG = {
      leafBeds: LG,
      woolBeds: yG,
      strongBeds: kG,
      beds: [...LG, ...yG, ...kG],
      bedHeads: UG,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6488: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => yG,
      i: () => SG,
      j: () => UG,
      m: () => LG,
      o: () => YG,
      q: () => wG,
      t: () => kG
    });
    let wG = function(GG) {
        return GG[GG.DEFAULT = 0] = "DEFAULT", GG[GG.BOAT = 1] = "BOAT", GG[GG.GLIDER = 2] = "GLIDER", GG[GG.BALLOON = 3] = "BALLOON", GG[GG.SLEEPING = 4] = "SLEEPING", GG[GG.RIDING_MOB = 5] = "RIDING_MOB", GG[GG.CAR = 6] = "CAR", GG[GG.HOVERCRAFT = 7] = "HOVERCRAFT", GG
      }({}),
      SG = function(GG) {
        return GG[GG.WOOD = 0] = "WOOD", GG[GG.OBSIDIAN = 1] = "OBSIDIAN", GG[GG.SPEED = 2] = "SPEED", GG
      }({}),
      LG = function(GG) {
        return GG[GG.WOOD = 0] = "WOOD", GG[GG.IRON = 1] = "IRON", GG[GG.GOLD = 2] = "GOLD", GG[GG.DIAMOND = 3] = "DIAMOND", GG
      }({}),
      yG = function(GG) {
        return GG[GG.YELLOW = 0] = "YELLOW", GG[GG.WHITE = 1] = "WHITE", GG[GG.RED = 2] = "RED", GG[GG.PURPLE = 3] = "PURPLE", GG[GG.PINK = 4] = "PINK", GG[GG.ORANGE = 5] = "ORANGE", GG[GG.MAGENTA = 6] = "MAGENTA", GG[GG.LIME = 7] = "LIME", GG[GG.LIGHT_GRAY = 8] = "LIGHT_GRAY", GG[GG.LIGHT_BLUE = 9] = "LIGHT_BLUE", GG[GG.GREEN = 10] = "GREEN", GG[GG.GRAY = 11] = "GRAY", GG[GG.CYAN = 12] = "CYAN", GG[GG.BROWN = 13] = "BROWN", GG[GG.BLUE = 14] = "BLUE", GG[GG.BLACK = 15] = "BLACK", GG
      }({}),
      kG = function(GG) {
        return GG[GG.ROTATION_1 = 0] = "ROTATION_1", GG[GG.ROTATION_2 = 1] = "ROTATION_2", GG[GG.ROTATION_3 = 2] = "ROTATION_3", GG[GG.ROTATION_4 = 3] = "ROTATION_4", GG
      }({}),
      UG = function(GG) {
        return GG[GG.KART = 0] = "KART", GG[GG.OFF_ROADER = 1] = "OFF_ROADER", GG[GG.CAR = 2] = "CAR", GG[GG.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", GG[GG.ARMORED_CAR = 4] = "ARMORED_CAR", GG[GG.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", GG[GG.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", GG[GG.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", GG
      }({});
    wG.DEFAULT, wG.BOAT, SG.SPEED, wG.GLIDER, LG.DIAMOND, wG.BALLOON, yG.BLACK, wG.SLEEPING, kG.ROTATION_4, wG.RIDING_MOB, wG.CAR, UG.MOONSTONE_MINING_DRILL, wG.HOVERCRAFT;
    let YG = function(GG) {
      return GG[GG.NORMAL = 0] = "NORMAL", GG[GG.GLIDING = 1] = "GLIDING", GG[GG.FLOATING = 2] = "FLOATING", GG
    }({})
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);