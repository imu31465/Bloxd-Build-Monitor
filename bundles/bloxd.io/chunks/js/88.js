export const id = 88;
export const ids = [88];
export const modules = {
  40542: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      startWasmPadGameplay: () => Nk
    });
    Ik(40546);
    var Xk = Ik(40554),
      Tk = Ik(40570),
      ik = Ik(1894),
      yk = Ik(40583),
      lk = Ik(4799),
      ak = Ik(4792),
      qk = Ik(40592),
      Lk = Ik(40596),
      tk = Ik(4810),
      Zk = Ik(40670),
      jk = Ik(2338),
      ek = Ik(8833),
      wk = Ik(40560),
      Hk = Ik(8814),
      Jk = Ik(39109);
    const xk = kk => {
        const Fk = tk.e.indexOf(kk);
        if (Fk < 0) throw new Error(`No core action "${kk}"`);
        return Fk
      },
      Pk = xk("primary-fire"),
      Kk = xk("alt-fire"),
      Qk = xk("mid-fire"),
      sk = xk("jump"),
      Vk = xk("ReloadGun"),
      zk = xk("SwapCameraZoom"),
      Sk = xk("TouchAction1"),
      vk = {
        SpecialAction1: xk("SpecialAction1"),
        SpecialAction2: xk("SpecialAction2")
      },
      Ek = (kk, Fk) => {
        (0, jk.o)(lk.I.PadAction, kk, 0, 0, (0, jk.l)(Fk, performance.now()))
      },
      Ok = kk => {
        Ek(kk, yk.td.Down)
      },
      nk = kk => {
        Ek(kk, 0)
      },
      Gk = kk => {
        Ok(kk), nk(kk)
      },
      pk = () => {
        const kk = (0, Lk.k)();
        return null !== kk && void 0 !== kk && kk.isCoreRunning ? kk : null
      },
      uk = kk => yk.y.playerFlags(kk.api.apiView, 0),
      bk = kk => null !== kk && yk.y.targetBlockId(kk.api.apiView, 0) !== yk._c,
      Rk = () => {
        const kk = (0, ek.c)(),
          Fk = new wk.b;
        let Ik = !1;
        const Xk = (kk, Fk) => {
            (0, jk.o)(lk.I.PadLook, yk.Ad.Rate, kk, Fk, 0)
          },
          Tk = () => {
            Ik = !1, Fk.reset(), Xk(0, 0)
          };
        return {
          update: (Tk, ik, ak) => {
            Ik || (kk.discardPending(), Ik = !0);
            const qk = (0, wk.s)(Fk, Tk, ik, ak, performance.now());
            Xk(qk.yawRadPerSec, qk.pitchRadPerSec);
            const Lk = kk.drainLookDelta();
            0 === Lk.JG && 0 === Lk.xG || (0, jk.o)(lk.I.PadLook, yk.Ad.Gyro, Lk.JG, Lk.xG, 0)
          },
          release: Tk,
          uninstall: Tk
        }
      },
      Uk = () => {
        const kk = pk();
        return null !== kk && 0 !== (uk(kk) & yk.Ed.PadSneakToggled)
      },
      Ck = () => {
        const kk = (kk => {
          const Fk = kk => function() {
            return (0, Zk.b)(), kk(...arguments)
          };
          return {
            primaryFireDown: Fk((() => (Ok(Pk), 0))),
            primaryFireUp: Fk((() => {
              nk(Pk)
            })),
            altFireDown: Fk((() => (Ok(Kk), 0))),
            altFireUp: Fk((() => {
              nk(Kk)
            })),
            jumpDown: Fk((() => {
              Gk(sk)
            })),
            specialActionDown: Fk((kk => {
              Ok(vk[kk])
            })),
            specialActionUp: Fk((kk => {
              nk(vk[kk])
            })),
            reloadGun: Fk((() => {
              Gk(Vk)
            })),
            dropItem: Fk((kk => {
              Ek(yk.vd.Drop, yk.td.Down | (kk ? yk.td.Stack : 0))
            })),
            swapCameraZoom: Fk((() => {
              Gk(zk)
            })),
            pickBlock: Fk((() => (Gk(Qk), bk(kk()))))
          }
        })(pk);
        let Fk = !1,
          Ik = null;
        const Xk = () => {
          var kk;
          null === (kk = Ik) || void 0 === kk || kk(), Ik = null
        };
        return {
          bodies: () => kk,
          look: Rk(),
          move: (kk, Ik) => {
            var Tk;
            Xk();
            const {
              bits: ik,
              flips: lk
            } = (kk => {
              if (null === kk) return {
                bits: yk.xd.Peek,
                flips: 0
              };
              const Fk = kk.sneakHeld ? yk.xd.SneakHeld : 0;
              return "hold" === kk.mode ? {
                bits: Fk | yk.xd.SneakHoldMode,
                flips: kk.sneakTogglePressed ? 1 : 0
              } : {
                bits: Fk,
                flips: kk.sneakPressed || kk.sneakTogglePressed ? 1 : 0
              }
            })(Ik);
            null !== (Tk = pk()) && void 0 !== Tk && Tk.padMove(kk.x, kk.y, kk.magnitude, kk.headingOffset, (kk => yk.xd.Active | (kk.jumpHeld ? yk.xd.JumpHeld : 0) | (kk.jumpPressed ? yk.xd.JumpPressed : 0) | (kk.running ? yk.xd.Running : 0) | (kk.sprintHeld ? yk.xd.SprintHeld : 0))(kk) | ik, lk) && (Fk = !0), (0, Hk.g)(Uk())
          },
          stopMoving: () => {
            var kk;
            Fk && (Fk = !(null !== (kk = pk()) && void 0 !== kk && kk.padMove(0, 0, 0, 0, 0, 0)), Xk(), Ik = (0, ak.y)((() => {
              Xk(), (0, Hk.g)(Uk())
            })))
          },
          uninstall: Xk,
          deviceChanged: kk => {
            var Ik;
            "touch" === kk ? ((0, Hk.g)(!1), null !== (Ik = pk()) && void 0 !== Ik && Ik.padMove(0, 0, 0, 0, yk.xd.EndToggle, 0) && (Fk = !1)) : "gamepad" === kk && (0, Hk.g)(Uk())
          },
          hasPlayer: () => null !== pk(),
          isPlayerDead: () => {
            var kk;
            return !1 === (null === (kk = pk()) || void 0 === kk ? void 0 : kk.localPlayerAlive())
          },
          isReplayMode: () => {
            const kk = pk();
            return null !== kk && 0 !== (uk(kk) & yk.Ed.Replay)
          },
          isFreeCameraOn: () => {
            const kk = pk();
            return null !== kk && 0 !== (uk(kk) & yk.Ed.FreeCam)
          },
          targetsBlock: () => bk(pk()),
          selectedSlotEmpty: () => {
            var kk;
            return !(null !== (kk = pk()) && void 0 !== kk && kk.items.eq())
          },
          pickBlockAllowed: () => !!ik.e.get("creative") && !!ik.e.get("canPickBlocks"),
          scrollHotbar: kk => {
            Ek(yk.vd.Hotbar, yk.td.Down | (kk > 0 ? yk.td.Next : 0))
          },
          hasFullInventory: qk.n,
          hasLobbyTab: () => (0, Jk.b)({
            lobbyLeaderboardInfo: ik.e.get("lobbyLeaderboardInfo"),
            lobbyManage: ik.e.get("lobbyManage")
          }),
          contextActionInputs: () => {
            var kk, Fk, Ik, Xk;
            const Tk = pk();
            return {
              holdingGun: !1 !== (null === Tk || void 0 === Tk ? void 0 : Tk.localPlayerAlive()) && "Gun" === (null === Tk || void 0 === Tk || null === (kk = Tk.items.eq()) || void 0 === kk || null === (Fk = kk.typeObj) || void 0 === Fk ? void 0 : Fk.type),
              customButtons: null !== (Ik = ik.e.get("customButtons")) && void 0 !== Ik ? Ik : null,
              touchscreenActionButton: null !== (Xk = ik.e.get("touchscreenActionButton")) && void 0 !== Xk ? Xk : null
            }
          },
          pressTouchButton: kk => {
            kk ? Ok(Sk) : nk(Sk)
          }
        }
      },
      Nk = () => {
        const kk = (0, Tk.b)(Ck()),
          Fk = (0, Xk.c)(),
          Ik = null;
        return () => {
          kk(), Fk(), null === Ik || void 0 === Ik || Ik()
        }
      }
  },
  4792: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      A: () => Ok,
      D: () => xk,
      F: () => yk,
      I: () => lk,
      L: () => Sk,
      c: () => zk,
      g: () => Kk,
      k: () => Gk,
      l: () => nk,
      o: () => Jk,
      s: () => sk,
      t: () => Pk,
      u: () => Qk,
      y: () => vk,
      z: () => Ek
    });
    var Xk = Ik(4794);
    const Tk = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let ik = Tk;

    function yk(kk) {
      ik = null !== kk && void 0 !== kk ? kk : Tk
    }

    function lk() {
      return ik
    }
    const ak = new Set,
      qk = new Set;
    let Lk = -1;
    const tk = new Set,
      Zk = new Set;
    let jk = 0,
      ek = 0;
    const wk = new Set,
      Hk = new Set;

    function Jk(kk) {
      return ak.add(kk), () => {
        ak.delete(kk)
      }
    }

    function xk(kk, Fk) {
      for (const Xk of ak) try {
        Xk(kk)
      } catch (Ik) {
        Fk(Ik)
      }
    }

    function Pk(kk) {
      return qk.add(kk), () => {
        qk.delete(kk)
      }
    }

    function Kk(kk, Fk) {
      const Ik = Lk < 0 ? 0 : kk - Lk;
      Lk = kk;
      for (const Tk of qk) try {
        Tk(Ik)
      } catch (Xk) {
        Fk(Xk)
      }
    }

    function Qk(kk) {
      return tk.add(kk), () => {
        tk.delete(kk)
      }
    }

    function sk(kk) {
      return Zk.add(kk), () => {
        Zk.delete(kk)
      }
    }
    let Vk = 0;

    function zk(kk) {
      Vk += kk
    }

    function Sk() {
      const kk = Vk;
      return Vk = 0, kk
    }

    function vk(kk) {
      return wk.add(kk), () => {
        wk.delete(kk)
      }
    }

    function Ek(kk) {
      return Hk.add(kk), () => {
        Hk.delete(kk)
      }
    }

    function Ok() {
      jk = 0, ek = 0, Lk = -1
    }

    function nk(kk, Fk) {
      if ("paced" === kk) return ek += Fk, null;
      if ("drawn" !== kk && "skipped" !== kk) return null;
      const Ik = Fk + ek;
      return ek = 0, Ik
    }

    function Gk(kk, Fk, Ik, Tk) {
      const ik = (0, Xk.f)(Fk),
        yk = kk > 0 ? performance.now() : 0;
      for (let Xk = 0; Xk < kk; Xk++)
        for (const kk of wk) try {
          kk()
        } catch (lk) {
          Tk(lk)
        }
      if (kk > 0 && zk(performance.now() - yk), null !== Ik) {
        for (const kk of tk) try {
          kk(Ik)
        } catch (lk) {
          Tk(lk)
        }
        jk += Ik
      }
      if ("drawn" === Fk) {
        const kk = jk;
        jk = 0;
        for (const Fk of Zk) try {
          Fk(kk)
        } catch (lk) {
          Tk(lk)
        }
      }
      for (const Xk of Hk) try {
        Xk(kk, ik)
      } catch (lk) {
        Tk(lk)
      }
    }
  },
  4810: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Tk,
      g: () => ik,
      k: () => yk,
      o: () => Xk,
      s: () => lk
    });
    const Xk = {
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
      Tk = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      ik = {
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
      yk = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      lk = [16]
  },
  40670: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => yk,
      c: () => ik,
      e: () => Tk
    });
    let Xk = null;

    function Tk(kk) {
      Xk = kk
    }

    function ik(kk) {
      Xk === kk && (Xk = null)
    }

    function yk() {
      var kk;
      null === (kk = Xk) || void 0 === kk || kk()
    }
  },
  4814: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => lk,
      f: () => yk,
      g: () => qk
    });
    var Xk = Ik(2331),
      Tk = Ik(2338);
    const ik = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function yk(kk) {
      return kk instanceof HTMLElement && (!!(kk.isContentEditable || kk instanceof HTMLTextAreaElement || kk instanceof HTMLSelectElement) || kk instanceof HTMLInputElement && !ik.has(kk.type))
    }

    function lk(kk) {
      let Fk = null;
      const Ik = Ik => {
          const Tk = yk(Ik);
          Tk !== Fk && (Fk = Tk, kk(Xk.m.UiCapture, Xk.A.Keyboard, 0, 0, Tk ? Xk.A.Keyboard : 0))
        },
        Tk = kk => {
          Ik(kk.target)
        },
        ik = kk => {
          Ik(kk.relatedTarget)
        },
        lk = () => {
          Ik(document.activeElement)
        },
        ak = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", Tk, ak), document.addEventListener("focusout", ik, ak), document.addEventListener("keydown", lk, ak), Ik(document.activeElement), () => {
        document.removeEventListener("focusin", Tk, ak), document.removeEventListener("focusout", ik, ak), document.removeEventListener("keydown", lk, ak)
      }
    }
    const ak = new Map;

    function qk(kk, Fk) {
      var Ik;
      let Xk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      ak.set(Xk, (null !== (Ik = ak.get(Xk)) && void 0 !== Ik ? Ik : 0) & ~kk | Fk & kk);
      let ik = 0;
      for (const Tk of ak.values()) ik |= Tk;
      return (0, Tk.x)(kk, ik & kk)
    }
  },
  36976: (kk, Fk, Ik) => {
    function Xk(kk) {
      return kk.includes("Leaf Bed")
    }

    function Tk(kk) {
      return / Bed(?: Head)?(?:\||$)/.test(kk) && !Xk(kk)
    }

    function ik(kk) {
      return kk.includes(" Strongbed")
    }

    function yk(kk) {
      return Xk(kk) || Tk(kk) || ik(kk)
    }
    Ik.d(Fk, {
      e: () => yk,
      h: () => Xk,
      i: () => ik,
      l: () => Tk
    })
  },
  36969: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => qk
    });
    var Xk = Ik(36976),
      Tk = Ik(9183);
    const ik = [],
      yk = [],
      lk = [],
      ak = [];
    for (const Lk of Object.keys(Tk.n))(0, Xk.h)(Lk) ? ik.push(Lk) : (0, Xk.l)(Lk) && yk.push(Lk), (0, Xk.i)(Lk) && lk.push(Lk), (Lk.includes(" Bed Head") || Lk.includes(" Strongbed Head")) && ak.push(Lk);
    const qk = {
      leafBeds: ik,
      woolBeds: yk,
      strongBeds: lk,
      beds: [...ik, ...yk, ...lk],
      bedHeads: ak,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6475: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => yk,
      f: () => Tk,
      g: () => ak,
      j: () => ik,
      m: () => qk,
      n: () => Xk,
      o: () => lk
    });
    let Xk = function(kk) {
        return kk[kk.DEFAULT = 0] = "DEFAULT", kk[kk.BOAT = 1] = "BOAT", kk[kk.GLIDER = 2] = "GLIDER", kk[kk.BALLOON = 3] = "BALLOON", kk[kk.SLEEPING = 4] = "SLEEPING", kk[kk.RIDING_MOB = 5] = "RIDING_MOB", kk[kk.CAR = 6] = "CAR", kk[kk.HOVERCRAFT = 7] = "HOVERCRAFT", kk
      }({}),
      Tk = function(kk) {
        return kk[kk.WOOD = 0] = "WOOD", kk[kk.OBSIDIAN = 1] = "OBSIDIAN", kk[kk.SPEED = 2] = "SPEED", kk
      }({}),
      ik = function(kk) {
        return kk[kk.WOOD = 0] = "WOOD", kk[kk.IRON = 1] = "IRON", kk[kk.GOLD = 2] = "GOLD", kk[kk.DIAMOND = 3] = "DIAMOND", kk
      }({}),
      yk = function(kk) {
        return kk[kk.YELLOW = 0] = "YELLOW", kk[kk.WHITE = 1] = "WHITE", kk[kk.RED = 2] = "RED", kk[kk.PURPLE = 3] = "PURPLE", kk[kk.PINK = 4] = "PINK", kk[kk.ORANGE = 5] = "ORANGE", kk[kk.MAGENTA = 6] = "MAGENTA", kk[kk.LIME = 7] = "LIME", kk[kk.LIGHT_GRAY = 8] = "LIGHT_GRAY", kk[kk.LIGHT_BLUE = 9] = "LIGHT_BLUE", kk[kk.GREEN = 10] = "GREEN", kk[kk.GRAY = 11] = "GRAY", kk[kk.CYAN = 12] = "CYAN", kk[kk.BROWN = 13] = "BROWN", kk[kk.BLUE = 14] = "BLUE", kk[kk.BLACK = 15] = "BLACK", kk
      }({}),
      lk = function(kk) {
        return kk[kk.ROTATION_1 = 0] = "ROTATION_1", kk[kk.ROTATION_2 = 1] = "ROTATION_2", kk[kk.ROTATION_3 = 2] = "ROTATION_3", kk[kk.ROTATION_4 = 3] = "ROTATION_4", kk
      }({}),
      ak = function(kk) {
        return kk[kk.KART = 0] = "KART", kk[kk.OFF_ROADER = 1] = "OFF_ROADER", kk[kk.CAR = 2] = "CAR", kk[kk.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", kk[kk.ARMORED_CAR = 4] = "ARMORED_CAR", kk[kk.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", kk[kk.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", kk[kk.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", kk
      }({});
    Xk.DEFAULT, Xk.BOAT, Tk.SPEED, Xk.GLIDER, ik.DIAMOND, Xk.BALLOON, yk.BLACK, Xk.SLEEPING, lk.ROTATION_4, Xk.RIDING_MOB, Xk.CAR, ak.MOONSTONE_MINING_DRILL, Xk.HOVERCRAFT;
    let qk = function(kk) {
      return kk[kk.NORMAL = 0] = "NORMAL", kk[kk.GLIDING = 1] = "GLIDING", kk[kk.FLOATING = 2] = "FLOATING", kk
    }({})
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);