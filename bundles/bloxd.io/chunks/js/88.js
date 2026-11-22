export const id = 88;
export const ids = [88];
export const modules = {
  40118: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      startWasmPadGameplay: () => ak
    });
    ik(40123);
    var Dk = ik(40130),
      fk = ik(40145),
      Sk = ik(1911),
      bk = ik(40157),
      rk = ik(4741),
      Pk = ik(4721),
      mk = ik(40161),
      Mk = ik(40165),
      Kk = ik(4750),
      xk = ik(40247),
      nk = ik(2395),
      Uk = ik(8683),
      Hk = ik(40133),
      wk = ik(8665),
      lk = ik(38676);
    const pk = kk => {
        const ek = Kk.e.indexOf(kk);
        if (ek < 0) throw new Error(`No core action "${kk}"`);
        return ek
      },
      yk = pk("primary-fire"),
      Yk = pk("alt-fire"),
      Lk = pk("mid-fire"),
      Ck = pk("jump"),
      Ak = pk("ReloadGun"),
      jk = pk("SwapCameraZoom"),
      sk = pk("TouchAction1"),
      dk = {
        SpecialAction1: pk("SpecialAction1"),
        SpecialAction2: pk("SpecialAction2")
      },
      Vk = (kk, ek) => {
        (0, nk.r)(rk.O.PadAction, kk, 0, 0, (0, nk.o)(ek, performance.now()))
      },
      Fk = kk => {
        Vk(kk, bk.ld.Down)
      },
      uk = kk => {
        Vk(kk, 0)
      },
      qk = kk => {
        Fk(kk), uk(kk)
      },
      Ik = () => {
        const kk = (0, Mk.g)();
        return null !== kk && void 0 !== kk && kk.isCoreRunning ? kk : null
      },
      zk = kk => bk.t.playerFlags(kk.api.apiView, 0),
      Qk = kk => null !== kk && bk.t.targetBlockId(kk.api.apiView, 0) !== bk.Vc,
      vk = () => {
        const kk = (0, Uk.c)(),
          ek = new Hk.b;
        let ik = !1;
        const Dk = (kk, ek) => {
            (0, nk.r)(rk.O.PadLook, bk.rd.Rate, kk, ek, 0)
          },
          fk = () => {
            ik = !1, ek.reset(), Dk(0, 0)
          };
        return {
          update: (fk, Sk, Pk) => {
            ik || (kk.discardPending(), ik = !0);
            const mk = (0, Hk.r)(ek, fk, Sk, Pk, performance.now());
            Dk(mk.yawRadPerSec, mk.pitchRadPerSec);
            const Mk = kk.drainLookDelta();
            0 === Mk.SF && 0 === Mk.mF || (0, nk.r)(rk.O.PadLook, bk.rd.Gyro, Mk.SF, Mk.mF, 0)
          },
          release: fk,
          uninstall: fk
        }
      },
      Ek = () => {
        const kk = Ik();
        return null !== kk && 0 !== (zk(kk) & bk.yd.PadSneakToggled)
      },
      hk = () => {
        const kk = (kk => {
          const ek = kk => function() {
            return (0, xk.c)(), kk(...arguments)
          };
          return {
            primaryFireDown: ek((() => (Fk(yk), 0))),
            primaryFireUp: ek((() => {
              uk(yk)
            })),
            altFireDown: ek((() => (Fk(Yk), 0))),
            altFireUp: ek((() => {
              uk(Yk)
            })),
            jumpDown: ek((() => {
              qk(Ck)
            })),
            specialActionDown: ek((kk => {
              Fk(dk[kk])
            })),
            specialActionUp: ek((kk => {
              uk(dk[kk])
            })),
            reloadGun: ek((() => {
              qk(Ak)
            })),
            dropItem: ek((kk => {
              Vk(bk.od.Drop, bk.ld.Down | (kk ? bk.ld.Stack : 0))
            })),
            swapCameraZoom: ek((() => {
              qk(jk)
            })),
            pickBlock: ek((() => (qk(Lk), Qk(kk()))))
          }
        })(Ik);
        let ek = !1,
          ik = null;
        const Dk = () => {
          var kk;
          null === (kk = ik) || void 0 === kk || kk(), ik = null
        };
        return {
          bodies: () => kk,
          look: vk(),
          move: (kk, ik) => {
            var fk;
            Dk();
            const {
              bits: Sk,
              flips: rk
            } = (kk => {
              if (null === kk) return {
                bits: bk.qd.Peek,
                flips: 0
              };
              const ek = kk.sneakHeld ? bk.qd.SneakHeld : 0;
              return "hold" === kk.mode ? {
                bits: ek | bk.qd.SneakHoldMode,
                flips: kk.sneakTogglePressed ? 1 : 0
              } : {
                bits: ek,
                flips: kk.sneakPressed || kk.sneakTogglePressed ? 1 : 0
              }
            })(ik);
            null !== (fk = Ik()) && void 0 !== fk && fk.padMove(kk.x, kk.y, kk.magnitude, kk.headingOffset, (kk => bk.qd.Active | (kk.jumpHeld ? bk.qd.JumpHeld : 0) | (kk.jumpPressed ? bk.qd.JumpPressed : 0) | (kk.running ? bk.qd.Running : 0) | (kk.sprintHeld ? bk.qd.SprintHeld : 0))(kk) | Sk, rk) && (ek = !0), (0, wk.c)(Ek())
          },
          stopMoving: () => {
            var kk;
            ek && (ek = !(null !== (kk = Ik()) && void 0 !== kk && kk.padMove(0, 0, 0, 0, 0, 0)), Dk(), ik = (0, Pk.x)((() => {
              Dk(), (0, wk.c)(Ek())
            })))
          },
          uninstall: Dk,
          deviceChanged: kk => {
            var ik;
            "touch" === kk ? ((0, wk.c)(!1), null !== (ik = Ik()) && void 0 !== ik && ik.padMove(0, 0, 0, 0, bk.qd.EndToggle, 0) && (ek = !1)) : "gamepad" === kk && (0, wk.c)(Ek())
          },
          hasPlayer: () => null !== Ik(),
          isPlayerDead: () => {
            var kk;
            return !1 === (null === (kk = Ik()) || void 0 === kk ? void 0 : kk.localPlayerAlive())
          },
          isReplayMode: () => {
            const kk = Ik();
            return null !== kk && 0 !== (zk(kk) & bk.yd.Replay)
          },
          isFreeCameraOn: () => {
            const kk = Ik();
            return null !== kk && 0 !== (zk(kk) & bk.yd.FreeCam)
          },
          targetsBlock: () => Qk(Ik()),
          selectedSlotEmpty: () => {
            var kk;
            return !(null !== (kk = Ik()) && void 0 !== kk && kk.items.XM())
          },
          pickBlockAllowed: () => !!Sk.c.get("creative") && !!Sk.c.get("canPickBlocks"),
          scrollHotbar: kk => {
            Vk(bk.od.Hotbar, bk.ld.Down | (kk > 0 ? bk.ld.Next : 0))
          },
          hasFullInventory: mk.k,
          hasLobbyTab: () => (0, lk.c)({
            lobbyLeaderboardInfo: Sk.c.get("lobbyLeaderboardInfo"),
            lobbyManage: Sk.c.get("lobbyManage")
          }),
          contextActionInputs: () => {
            var kk, ek, ik, Dk;
            const fk = Ik();
            return {
              holdingGun: !1 !== (null === fk || void 0 === fk ? void 0 : fk.localPlayerAlive()) && "Gun" === (null === fk || void 0 === fk || null === (kk = fk.items.XM()) || void 0 === kk || null === (ek = kk.typeObj) || void 0 === ek ? void 0 : ek.type),
              customButtons: null !== (ik = Sk.c.get("customButtons")) && void 0 !== ik ? ik : null,
              touchscreenActionButton: null !== (Dk = Sk.c.get("touchscreenActionButton")) && void 0 !== Dk ? Dk : null
            }
          },
          pressTouchButton: kk => {
            kk ? Fk(sk) : uk(sk)
          }
        }
      },
      ak = () => {
        const kk = (0, fk.d)(hk()),
          ek = (0, Dk.b)(),
          ik = null;
        return () => {
          kk(), ek(), null === ik || void 0 === ik || ik()
        }
      }
  },
  4721: (kk, ek, ik) => {
    ik.d(ek, {
      A: () => Fk,
      D: () => pk,
      F: () => bk,
      J: () => rk,
      K: () => sk,
      c: () => jk,
      g: () => Yk,
      j: () => qk,
      l: () => uk,
      n: () => lk,
      q: () => Ck,
      r: () => yk,
      v: () => Lk,
      x: () => dk,
      y: () => Vk
    });
    var Dk = ik(4728);
    const fk = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let Sk = fk;

    function bk(kk) {
      Sk = null !== kk && void 0 !== kk ? kk : fk
    }

    function rk() {
      return Sk
    }
    const Pk = new Set,
      mk = new Set;
    let Mk = -1;
    const Kk = new Set,
      xk = new Set;
    let nk = 0,
      Uk = 0;
    const Hk = new Set,
      wk = new Set;

    function lk(kk) {
      return Pk.add(kk), () => {
        Pk.delete(kk)
      }
    }

    function pk(kk, ek) {
      for (const Dk of Pk) try {
        Dk(kk)
      } catch (ik) {
        ek(ik)
      }
    }

    function yk(kk) {
      return mk.add(kk), () => {
        mk.delete(kk)
      }
    }

    function Yk(kk, ek) {
      const ik = Mk < 0 ? 0 : kk - Mk;
      Mk = kk;
      for (const fk of mk) try {
        fk(ik)
      } catch (Dk) {
        ek(Dk)
      }
    }

    function Lk(kk) {
      return Kk.add(kk), () => {
        Kk.delete(kk)
      }
    }

    function Ck(kk) {
      return xk.add(kk), () => {
        xk.delete(kk)
      }
    }
    let Ak = 0;

    function jk(kk) {
      Ak += kk
    }

    function sk() {
      const kk = Ak;
      return Ak = 0, kk
    }

    function dk(kk) {
      return Hk.add(kk), () => {
        Hk.delete(kk)
      }
    }

    function Vk(kk) {
      return wk.add(kk), () => {
        wk.delete(kk)
      }
    }

    function Fk() {
      nk = 0, Uk = 0, Mk = -1
    }

    function uk(kk, ek) {
      if ("paced" === kk) return Uk += ek, null;
      if ("drawn" !== kk && "skipped" !== kk) return null;
      const ik = ek + Uk;
      return Uk = 0, ik
    }

    function qk(kk, ek, ik, fk) {
      const Sk = (0, Dk.j)(ek),
        bk = kk > 0 ? performance.now() : 0;
      for (let Dk = 0; Dk < kk; Dk++)
        for (const kk of Hk) try {
          kk()
        } catch (rk) {
          fk(rk)
        }
      if (kk > 0 && jk(performance.now() - bk), null !== ik) {
        for (const kk of Kk) try {
          kk(ik)
        } catch (rk) {
          fk(rk)
        }
        nk += ik
      }
      if ("drawn" === ek) {
        const kk = nk;
        nk = 0;
        for (const ek of xk) try {
          ek(kk)
        } catch (rk) {
          fk(rk)
        }
      }
      for (const Dk of wk) try {
        Dk(kk, Sk)
      } catch (rk) {
        fk(rk)
      }
    }
  },
  4750: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => fk,
      g: () => Sk,
      k: () => bk,
      n: () => Dk,
      q: () => rk
    });
    const Dk = {
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
      fk = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      Sk = {
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
      bk = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      rk = [16]
  },
  40247: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => bk,
      g: () => Sk,
      h: () => fk
    });
    let Dk = null;

    function fk(kk) {
      Dk = kk
    }

    function Sk(kk) {
      Dk === kk && (Dk = null)
    }

    function bk() {
      var kk;
      null === (kk = Dk) || void 0 === kk || kk()
    }
  },
  4752: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => rk,
      i: () => bk,
      j: () => mk
    });
    var Dk = ik(2388),
      fk = ik(2395);
    const Sk = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function bk(kk) {
      return kk instanceof HTMLElement && (!!(kk.isContentEditable || kk instanceof HTMLTextAreaElement || kk instanceof HTMLSelectElement) || kk instanceof HTMLInputElement && !Sk.has(kk.type))
    }

    function rk(kk) {
      let ek = null;
      const ik = ik => {
          const fk = bk(ik);
          fk !== ek && (ek = fk, kk(Dk.k.UiCapture, Dk.t.Keyboard, 0, 0, fk ? Dk.t.Keyboard : 0))
        },
        fk = kk => {
          ik(kk.target)
        },
        Sk = kk => {
          ik(kk.relatedTarget)
        },
        rk = () => {
          ik(document.activeElement)
        },
        Pk = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", fk, Pk), document.addEventListener("focusout", Sk, Pk), document.addEventListener("keydown", rk, Pk), ik(document.activeElement), () => {
        document.removeEventListener("focusin", fk, Pk), document.removeEventListener("focusout", Sk, Pk), document.removeEventListener("keydown", rk, Pk)
      }
    }
    const Pk = new Map;

    function mk(kk, ek) {
      var ik;
      let Dk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      Pk.set(Dk, (null !== (ik = Pk.get(Dk)) && void 0 !== ik ? ik : 0) & ~kk | ek & kk);
      let Sk = 0;
      for (const fk of Pk.values()) Sk |= fk;
      return (0, fk.x)(kk, Sk & kk)
    }
  },
  36530: (kk, ek, ik) => {
    function Dk(kk) {
      return kk.includes("Leaf Bed")
    }

    function fk(kk) {
      return / Bed(?: Head)?(?:\||$)/.test(kk) && !Dk(kk)
    }

    function Sk(kk) {
      return kk.includes(" Strongbed")
    }

    function bk(kk) {
      return Dk(kk) || fk(kk) || Sk(kk)
    }
    ik.d(ek, {
      d: () => bk,
      h: () => Dk,
      i: () => Sk,
      l: () => fk
    })
  },
  36528: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => mk
    });
    var Dk = ik(36530),
      fk = ik(9020);
    const Sk = [],
      bk = [],
      rk = [],
      Pk = [];
    for (const Mk of Object.keys(fk.j))(0, Dk.h)(Mk) ? Sk.push(Mk) : (0, Dk.l)(Mk) && bk.push(Mk), (0, Dk.i)(Mk) && rk.push(Mk), (Mk.includes(" Bed Head") || Mk.includes(" Strongbed Head")) && Pk.push(Mk);
    const mk = {
      leafBeds: Sk,
      woolBeds: bk,
      strongBeds: rk,
      beds: [...Sk, ...bk, ...rk],
      bedHeads: Pk,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6328: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => bk,
      f: () => fk,
      g: () => Pk,
      h: () => Sk,
      l: () => mk,
      o: () => Dk,
      r: () => rk
    });
    let Dk = function(kk) {
        return kk[kk.DEFAULT = 0] = "DEFAULT", kk[kk.BOAT = 1] = "BOAT", kk[kk.GLIDER = 2] = "GLIDER", kk[kk.BALLOON = 3] = "BALLOON", kk[kk.SLEEPING = 4] = "SLEEPING", kk[kk.RIDING_MOB = 5] = "RIDING_MOB", kk[kk.CAR = 6] = "CAR", kk[kk.HOVERCRAFT = 7] = "HOVERCRAFT", kk
      }({}),
      fk = function(kk) {
        return kk[kk.WOOD = 0] = "WOOD", kk[kk.OBSIDIAN = 1] = "OBSIDIAN", kk[kk.SPEED = 2] = "SPEED", kk
      }({}),
      Sk = function(kk) {
        return kk[kk.WOOD = 0] = "WOOD", kk[kk.IRON = 1] = "IRON", kk[kk.GOLD = 2] = "GOLD", kk[kk.DIAMOND = 3] = "DIAMOND", kk
      }({}),
      bk = function(kk) {
        return kk[kk.YELLOW = 0] = "YELLOW", kk[kk.WHITE = 1] = "WHITE", kk[kk.RED = 2] = "RED", kk[kk.PURPLE = 3] = "PURPLE", kk[kk.PINK = 4] = "PINK", kk[kk.ORANGE = 5] = "ORANGE", kk[kk.MAGENTA = 6] = "MAGENTA", kk[kk.LIME = 7] = "LIME", kk[kk.LIGHT_GRAY = 8] = "LIGHT_GRAY", kk[kk.LIGHT_BLUE = 9] = "LIGHT_BLUE", kk[kk.GREEN = 10] = "GREEN", kk[kk.GRAY = 11] = "GRAY", kk[kk.CYAN = 12] = "CYAN", kk[kk.BROWN = 13] = "BROWN", kk[kk.BLUE = 14] = "BLUE", kk[kk.BLACK = 15] = "BLACK", kk
      }({}),
      rk = function(kk) {
        return kk[kk.ROTATION_1 = 0] = "ROTATION_1", kk[kk.ROTATION_2 = 1] = "ROTATION_2", kk[kk.ROTATION_3 = 2] = "ROTATION_3", kk[kk.ROTATION_4 = 3] = "ROTATION_4", kk
      }({}),
      Pk = function(kk) {
        return kk[kk.KART = 0] = "KART", kk[kk.OFF_ROADER = 1] = "OFF_ROADER", kk[kk.CAR = 2] = "CAR", kk[kk.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", kk[kk.ARMORED_CAR = 4] = "ARMORED_CAR", kk[kk.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", kk[kk.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", kk[kk.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", kk
      }({});
    Dk.DEFAULT, Dk.BOAT, fk.SPEED, Dk.GLIDER, Sk.DIAMOND, Dk.BALLOON, bk.BLACK, Dk.SLEEPING, rk.ROTATION_4, Dk.RIDING_MOB, Dk.CAR, Pk.MOONSTONE_MINING_DRILL, Dk.HOVERCRAFT;
    let mk = function(kk) {
      return kk[kk.NORMAL = 0] = "NORMAL", kk[kk.GLIDING = 1] = "GLIDING", kk[kk.FLOATING = 2] = "FLOATING", kk
    }({})
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);