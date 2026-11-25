export const id = 89;
export const ids = [89];
export const modules = {
  40591: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      startWasmPadGameplay: () => XB
    });
    ZB(40595);
    var TB = ZB(40599),
      JB = ZB(40619),
      oB = ZB(2029),
      GB = ZB(40633),
      vB = ZB(4975),
      kB = ZB(4958),
      cB = ZB(40640),
      nB = ZB(40643),
      hB = ZB(4983),
      zB = ZB(40721),
      FB = ZB(2489),
      NB = ZB(8956),
      gB = ZB(40606),
      qB = ZB(8937),
      yB = ZB(39175);
    const UB = BB => {
        const IB = hB.d.indexOf(BB);
        if (IB < 0) throw new Error(`No core action "${BB}"`);
        return IB
      },
      WB = UB("primary-fire"),
      dB = UB("alt-fire"),
      CB = UB("mid-fire"),
      QB = UB("jump"),
      sB = UB("ReloadGun"),
      wB = UB("SwapCameraZoom"),
      OB = UB("TouchAction1"),
      YB = {
        SpecialAction1: UB("SpecialAction1"),
        SpecialAction2: UB("SpecialAction2")
      },
      iB = (BB, IB) => {
        (0, FB.w)(vB.L.PadAction, BB, 0, 0, (0, FB.v)(IB, performance.now()))
      },
      pB = BB => {
        iB(BB, GB.pd.Down)
      },
      aB = BB => {
        iB(BB, 0)
      },
      HB = BB => {
        pB(BB), aB(BB)
      },
      MB = () => {
        const BB = (0, nB.j)();
        return null !== BB && void 0 !== BB && BB.isCoreRunning ? BB : null
      },
      jB = BB => GB.p.playerFlags(BB.api.apiView, 0),
      PB = BB => null !== BB && GB.p.targetBlockId(BB.api.apiView, 0) !== GB.Tc,
      RB = () => {
        const BB = (0, NB.d)(),
          IB = new gB.c;
        let ZB = !1;
        const TB = (BB, IB) => {
            (0, FB.w)(vB.L.PadLook, GB.vd.Rate, BB, IB, 0)
          },
          JB = () => {
            ZB = !1, IB.reset(), TB(0, 0)
          };
        return {
          update: (JB, oB, kB) => {
            ZB || (BB.discardPending(), ZB = !0);
            const cB = (0, gB.l)(IB, JB, oB, kB, performance.now());
            TB(cB.yawRadPerSec, cB.pitchRadPerSec);
            const nB = BB.drainLookDelta();
            0 === nB.YH && 0 === nB.iH || (0, FB.w)(vB.L.PadLook, GB.vd.Gyro, nB.YH, nB.iH, 0)
          },
          release: JB,
          uninstall: JB
        }
      },
      rB = () => {
        const BB = MB();
        return null !== BB && 0 !== (jB(BB) & GB.Bd.PadSneakToggled)
      },
      mB = () => {
        const BB = (BB => {
          const IB = BB => function() {
            return (0, zB.e)(), BB(...arguments)
          };
          return {
            primaryFireDown: IB((BB => (iB(WB, GB.pd.Down | (BB ? GB.pd.Repeat : 0)), 0))),
            primaryFireUp: IB((() => {
              aB(WB)
            })),
            altFireDown: IB((() => (pB(dB), 0))),
            altFireUp: IB((() => {
              aB(dB)
            })),
            jumpDown: IB((() => {
              HB(QB)
            })),
            specialActionDown: IB((BB => {
              pB(YB[BB])
            })),
            specialActionUp: IB((BB => {
              aB(YB[BB])
            })),
            reloadGun: IB((() => {
              HB(sB)
            })),
            dropItem: IB((BB => {
              iB(GB.sd.Drop, GB.pd.Down | (BB ? GB.pd.Stack : 0))
            })),
            swapCameraZoom: IB((() => {
              HB(wB)
            })),
            pickBlock: IB((() => (HB(CB), PB(BB()))))
          }
        })(MB);
        let IB = !1,
          ZB = null;
        const TB = () => {
          var BB;
          null === (BB = ZB) || void 0 === BB || BB(), ZB = null
        };
        return {
          bodies: () => BB,
          look: RB(),
          move: (BB, ZB) => {
            var JB;
            TB();
            const {
              bits: oB,
              flips: vB
            } = (BB => {
              if (null === BB) return {
                bits: GB.ud.Peek,
                flips: 0
              };
              const IB = BB.sneakHeld ? GB.ud.SneakHeld : 0;
              return "hold" === BB.mode ? {
                bits: IB | GB.ud.SneakHoldMode,
                flips: BB.sneakTogglePressed ? 1 : 0
              } : {
                bits: IB,
                flips: BB.sneakPressed || BB.sneakTogglePressed ? 1 : 0
              }
            })(ZB);
            null !== (JB = MB()) && void 0 !== JB && JB.padMove(BB.x, BB.y, BB.magnitude, BB.headingOffset, (BB => GB.ud.Active | (BB.jumpHeld ? GB.ud.JumpHeld : 0) | (BB.jumpPressed ? GB.ud.JumpPressed : 0) | (BB.running ? GB.ud.Running : 0) | (BB.sprintHeld ? GB.ud.SprintHeld : 0))(BB) | oB, vB) && (IB = !0), (0, qB.f)(rB())
          },
          stopMoving: () => {
            var BB;
            IB && (IB = !(null !== (BB = MB()) && void 0 !== BB && BB.padMove(0, 0, 0, 0, 0, 0)), TB(), ZB = (0, kB.u)((() => {
              TB(), (0, qB.f)(rB())
            })))
          },
          uninstall: TB,
          deviceChanged: BB => {
            var ZB;
            "touch" === BB ? ((0, qB.f)(!1), null !== (ZB = MB()) && void 0 !== ZB && ZB.padMove(0, 0, 0, 0, GB.ud.EndToggle, 0) && (IB = !1)) : "gamepad" === BB && (0, qB.f)(rB())
          },
          hasPlayer: () => null !== MB(),
          isPlayerDead: () => {
            var BB;
            return !1 === (null === (BB = MB()) || void 0 === BB ? void 0 : BB.localPlayerAlive())
          },
          isReplayMode: () => {
            const BB = MB();
            return null !== BB && 0 !== (jB(BB) & GB.Bd.Replay)
          },
          isFreeCameraOn: () => {
            const BB = MB();
            return null !== BB && 0 !== (jB(BB) & GB.Bd.FreeCam)
          },
          targetsBlock: () => PB(MB()),
          selectedSlotEmpty: () => {
            var BB;
            return !(null !== (BB = MB()) && void 0 !== BB && BB.items.sv())
          },
          pickBlockAllowed: () => !!oB.c.get("creative") && !!oB.c.get("canPickBlocks"),
          scrollHotbar: BB => {
            iB(GB.sd.Hotbar, GB.pd.Down | (BB > 0 ? GB.pd.Next : 0))
          },
          hasFullInventory: cB.p,
          hasLobbyTab: () => (0, yB.d)({
            lobbyLeaderboardInfo: oB.c.get("lobbyLeaderboardInfo"),
            lobbyManage: oB.c.get("lobbyManage")
          }),
          contextActionInputs: () => {
            var BB, IB, ZB, TB;
            const JB = MB();
            return {
              holdingGun: !1 !== (null === JB || void 0 === JB ? void 0 : JB.localPlayerAlive()) && "Gun" === (null === JB || void 0 === JB || null === (BB = JB.items.sv()) || void 0 === BB || null === (IB = BB.typeObj) || void 0 === IB ? void 0 : IB.type),
              customButtons: null !== (ZB = oB.c.get("customButtons")) && void 0 !== ZB ? ZB : null,
              touchscreenActionButton: null !== (TB = oB.c.get("touchscreenActionButton")) && void 0 !== TB ? TB : null
            }
          },
          pressTouchButton: BB => {
            BB ? pB(OB) : aB(OB)
          }
        }
      },
      XB = () => {
        const BB = (0, JB.b)(mB()),
          IB = (0, TB.e)(),
          ZB = null;
        return () => {
          BB(), IB(), null === ZB || void 0 === ZB || ZB()
        }
      }
  },
  4958: (BB, IB, ZB) => {
    ZB.d(IB, {
      A: () => pB,
      B: () => UB,
      E: () => GB,
      H: () => vB,
      I: () => OB,
      b: () => wB,
      e: () => dB,
      f: () => HB,
      g: () => aB,
      j: () => yB,
      n: () => QB,
      p: () => WB,
      s: () => CB,
      u: () => YB,
      y: () => iB
    });
    var TB = ZB(4960);
    const JB = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let oB = JB;

    function GB(BB) {
      oB = null !== BB && void 0 !== BB ? BB : JB
    }

    function vB() {
      return oB
    }
    const kB = new Set,
      cB = new Set;
    let nB = -1;
    const hB = new Set,
      zB = new Set;
    let FB = 0,
      NB = 0;
    const gB = new Set,
      qB = new Set;

    function yB(BB) {
      return kB.add(BB), () => {
        kB.delete(BB)
      }
    }

    function UB(BB, IB) {
      for (const TB of kB) try {
        TB(BB)
      } catch (ZB) {
        IB(ZB)
      }
    }

    function WB(BB) {
      return cB.add(BB), () => {
        cB.delete(BB)
      }
    }

    function dB(BB, IB) {
      const ZB = nB < 0 ? 0 : BB - nB;
      nB = BB;
      for (const JB of cB) try {
        JB(ZB)
      } catch (TB) {
        IB(TB)
      }
    }

    function CB(BB) {
      return hB.add(BB), () => {
        hB.delete(BB)
      }
    }

    function QB(BB) {
      return zB.add(BB), () => {
        zB.delete(BB)
      }
    }
    let sB = 0;

    function wB(BB) {
      sB += BB
    }

    function OB() {
      const BB = sB;
      return sB = 0, BB
    }

    function YB(BB) {
      return gB.add(BB), () => {
        gB.delete(BB)
      }
    }

    function iB(BB) {
      return qB.add(BB), () => {
        qB.delete(BB)
      }
    }

    function pB() {
      FB = 0, NB = 0, nB = -1
    }

    function aB(BB, IB) {
      if ("paced" === BB) return NB += IB, null;
      if ("drawn" !== BB && "skipped" !== BB) return null;
      const ZB = IB + NB;
      return NB = 0, ZB
    }

    function HB(BB, IB, ZB, JB) {
      const oB = (0, TB.j)(IB),
        GB = BB > 0 ? performance.now() : 0;
      for (let TB = 0; TB < BB; TB++)
        for (const BB of gB) try {
          BB()
        } catch (vB) {
          JB(vB)
        }
      if (BB > 0 && wB(performance.now() - GB), null !== ZB) {
        for (const BB of hB) try {
          BB(ZB)
        } catch (vB) {
          JB(vB)
        }
        FB += ZB
      }
      if ("drawn" === IB) {
        const BB = FB;
        FB = 0;
        for (const IB of zB) try {
          IB(BB)
        } catch (vB) {
          JB(vB)
        }
      }
      for (const TB of qB) try {
        TB(BB, oB)
      } catch (vB) {
        JB(vB)
      }
    }
  },
  4983: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => JB,
      f: () => oB,
      h: () => GB,
      i: () => TB,
      k: () => vB
    });
    const TB = {
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
      JB = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      oB = {
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
      GB = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      vB = [16]
  },
  40721: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => GB,
      g: () => oB,
      j: () => JB
    });
    let TB = null;

    function JB(BB) {
      TB = BB
    }

    function oB(BB) {
      TB === BB && (TB = null)
    }

    function GB() {
      var BB;
      null === (BB = TB) || void 0 === BB || BB()
    }
  },
  4990: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => vB,
      d: () => GB,
      f: () => cB
    });
    var TB = ZB(2481),
      JB = ZB(2489);
    const oB = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function GB(BB) {
      return BB instanceof HTMLElement && (!!(BB.isContentEditable || BB instanceof HTMLTextAreaElement || BB instanceof HTMLSelectElement) || BB instanceof HTMLInputElement && !oB.has(BB.type))
    }

    function vB(BB) {
      let IB = null;
      const ZB = ZB => {
          const JB = GB(ZB);
          JB !== IB && (IB = JB, BB(TB.d.UiCapture, TB.o.Keyboard, 0, 0, JB ? TB.o.Keyboard : 0))
        },
        JB = BB => {
          ZB(BB.target)
        },
        oB = BB => {
          ZB(BB.relatedTarget)
        },
        vB = () => {
          ZB(document.activeElement)
        },
        kB = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", JB, kB), document.addEventListener("focusout", oB, kB), document.addEventListener("keydown", vB, kB), ZB(document.activeElement), () => {
        document.removeEventListener("focusin", JB, kB), document.removeEventListener("focusout", oB, kB), document.removeEventListener("keydown", vB, kB)
      }
    }
    const kB = new Map;

    function cB(BB, IB) {
      var ZB;
      let TB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      kB.set(TB, (null !== (ZB = kB.get(TB)) && void 0 !== ZB ? ZB : 0) & ~BB | IB & BB);
      let oB = 0;
      for (const JB of kB.values()) oB |= JB;
      return (0, JB.D)(BB, oB & BB)
    }
  },
  36964: (BB, IB, ZB) => {
    function TB(BB) {
      return BB.includes("Leaf Bed")
    }

    function JB(BB) {
      return / Bed(?: Head)?(?:\||$)/.test(BB) && !TB(BB)
    }

    function oB(BB) {
      return BB.includes(" Strongbed")
    }

    function GB(BB) {
      return TB(BB) || JB(BB) || oB(BB)
    }
    ZB.d(IB, {
      d: () => GB,
      h: () => TB,
      i: () => oB,
      k: () => JB
    })
  },
  36958: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => cB
    });
    var TB = ZB(36964),
      JB = ZB(9296);
    const oB = [],
      GB = [],
      vB = [],
      kB = [];
    for (const nB of Object.keys(JB.h))(0, TB.h)(nB) ? oB.push(nB) : (0, TB.k)(nB) && GB.push(nB), (0, TB.i)(nB) && vB.push(nB), (nB.includes(" Bed Head") || nB.includes(" Strongbed Head")) && kB.push(nB);
    const cB = {
      leafBeds: oB,
      woolBeds: GB,
      strongBeds: vB,
      beds: [...oB, ...GB, ...vB],
      bedHeads: kB,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6635: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => GB,
      e: () => JB,
      g: () => kB,
      h: () => oB,
      l: () => cB,
      o: () => TB,
      p: () => vB
    });
    let TB = function(BB) {
        return BB[BB.DEFAULT = 0] = "DEFAULT", BB[BB.BOAT = 1] = "BOAT", BB[BB.GLIDER = 2] = "GLIDER", BB[BB.BALLOON = 3] = "BALLOON", BB[BB.SLEEPING = 4] = "SLEEPING", BB[BB.RIDING_MOB = 5] = "RIDING_MOB", BB[BB.CAR = 6] = "CAR", BB[BB.HOVERCRAFT = 7] = "HOVERCRAFT", BB
      }({}),
      JB = function(BB) {
        return BB[BB.WOOD = 0] = "WOOD", BB[BB.OBSIDIAN = 1] = "OBSIDIAN", BB[BB.SPEED = 2] = "SPEED", BB
      }({}),
      oB = function(BB) {
        return BB[BB.WOOD = 0] = "WOOD", BB[BB.IRON = 1] = "IRON", BB[BB.GOLD = 2] = "GOLD", BB[BB.DIAMOND = 3] = "DIAMOND", BB
      }({}),
      GB = function(BB) {
        return BB[BB.YELLOW = 0] = "YELLOW", BB[BB.WHITE = 1] = "WHITE", BB[BB.RED = 2] = "RED", BB[BB.PURPLE = 3] = "PURPLE", BB[BB.PINK = 4] = "PINK", BB[BB.ORANGE = 5] = "ORANGE", BB[BB.MAGENTA = 6] = "MAGENTA", BB[BB.LIME = 7] = "LIME", BB[BB.LIGHT_GRAY = 8] = "LIGHT_GRAY", BB[BB.LIGHT_BLUE = 9] = "LIGHT_BLUE", BB[BB.GREEN = 10] = "GREEN", BB[BB.GRAY = 11] = "GRAY", BB[BB.CYAN = 12] = "CYAN", BB[BB.BROWN = 13] = "BROWN", BB[BB.BLUE = 14] = "BLUE", BB[BB.BLACK = 15] = "BLACK", BB
      }({}),
      vB = function(BB) {
        return BB[BB.ROTATION_1 = 0] = "ROTATION_1", BB[BB.ROTATION_2 = 1] = "ROTATION_2", BB[BB.ROTATION_3 = 2] = "ROTATION_3", BB[BB.ROTATION_4 = 3] = "ROTATION_4", BB
      }({}),
      kB = function(BB) {
        return BB[BB.KART = 0] = "KART", BB[BB.OFF_ROADER = 1] = "OFF_ROADER", BB[BB.CAR = 2] = "CAR", BB[BB.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", BB[BB.ARMORED_CAR = 4] = "ARMORED_CAR", BB[BB.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", BB[BB.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", BB[BB.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", BB
      }({});
    TB.DEFAULT, TB.BOAT, JB.SPEED, TB.GLIDER, oB.DIAMOND, TB.BALLOON, GB.BLACK, TB.SLEEPING, vB.ROTATION_4, TB.RIDING_MOB, TB.CAR, kB.MOONSTONE_MINING_DRILL, TB.HOVERCRAFT;
    let cB = function(BB) {
      return BB[BB.NORMAL = 0] = "NORMAL", BB[BB.GLIDING = 1] = "GLIDING", BB[BB.FLOATING = 2] = "FLOATING", BB
    }({})
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);