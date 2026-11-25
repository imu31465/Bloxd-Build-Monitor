export const id = 89;
export const ids = [89];
export const modules = {
  40793: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      startWasmPadGameplay: () => Wu
    });
    ju(40798);
    var su = ju(40806),
      Uu = ju(40819),
      Zu = ju(2011),
      Xu = ju(40833),
      lu = ju(4976),
      qu = ju(4962),
      fu = ju(40840),
      Cu = ju(40847),
      bu = ju(4983),
      cu = ju(40914),
      Nu = ju(2519),
      Ou = ju(9056),
      Yu = ju(40810),
      hu = ju(9034),
      Du = ju(39416);
    const gu = uu => {
        const Eu = bu.e.indexOf(uu);
        if (Eu < 0) throw new Error(`No core action "${uu}"`);
        return Eu
      },
      Mu = gu("primary-fire"),
      eu = gu("alt-fire"),
      Gu = gu("mid-fire"),
      pu = gu("jump"),
      wu = gu("ReloadGun"),
      Ju = gu("SwapCameraZoom"),
      du = gu("TouchAction1"),
      au = {
        SpecialAction1: gu("SpecialAction1"),
        SpecialAction2: gu("SpecialAction2")
      },
      Pu = (uu, Eu) => {
        (0, Nu.s)(lu.L.PadAction, uu, 0, 0, (0, Nu.r)(Eu, performance.now()))
      },
      ou = uu => {
        Pu(uu, Xu.ld.Down)
      },
      ku = uu => {
        Pu(uu, 0)
      },
      mu = uu => {
        ou(uu), ku(uu)
      },
      vu = () => {
        const uu = (0, Cu.l)();
        return null !== uu && void 0 !== uu && uu.isCoreRunning ? uu : null
      },
      Ku = uu => Xu.u.playerFlags(uu.api.apiView, 0),
      Vu = uu => null !== uu && Xu.u.targetBlockId(uu.api.apiView, 0) !== Xu.Tc,
      ru = () => {
        const uu = (0, Ou.b)(),
          Eu = new Yu.e;
        let ju = !1;
        const su = (uu, Eu) => {
            (0, Nu.s)(lu.L.PadLook, Xu.qd.Rate, uu, Eu, 0)
          },
          Uu = () => {
            ju = !1, Eu.reset(), su(0, 0)
          };
        return {
          update: (Uu, Zu, qu) => {
            ju || (uu.discardPending(), ju = !0);
            const fu = (0, Yu.r)(Eu, Uu, Zu, qu, performance.now());
            su(fu.yawRadPerSec, fu.pitchRadPerSec);
            const Cu = uu.drainLookDelta();
            0 === Cu.hK && 0 === Cu.VK || (0, Nu.s)(lu.L.PadLook, Xu.qd.Gyro, Cu.hK, Cu.VK, 0)
          },
          release: Uu,
          uninstall: Uu
        }
      },
      Qu = () => {
        const uu = vu();
        return null !== uu && 0 !== (Ku(uu) & Xu.td.PadSneakToggled)
      },
      iu = () => {
        const uu = (uu => {
          const Eu = uu => function() {
            return (0, cu.d)(), uu(...arguments)
          };
          return {
            primaryFireDown: Eu((uu => (Pu(Mu, Xu.ld.Down | (uu ? Xu.ld.Repeat : 0)), 0))),
            primaryFireUp: Eu((() => {
              ku(Mu)
            })),
            altFireDown: Eu((() => (ou(eu), 0))),
            altFireUp: Eu((() => {
              ku(eu)
            })),
            jumpDown: Eu((() => {
              mu(pu)
            })),
            specialActionDown: Eu((uu => {
              ou(au[uu])
            })),
            specialActionUp: Eu((uu => {
              ku(au[uu])
            })),
            reloadGun: Eu((() => {
              mu(wu)
            })),
            dropItem: Eu((uu => {
              Pu(Xu.nd.Drop, Xu.ld.Down | (uu ? Xu.ld.Stack : 0))
            })),
            swapCameraZoom: Eu((() => {
              mu(Ju)
            })),
            pickBlock: Eu((() => (mu(Gu), Vu(uu()))))
          }
        })(vu);
        let Eu = !1,
          ju = null;
        const su = () => {
          var uu;
          null === (uu = ju) || void 0 === uu || uu(), ju = null
        };
        return {
          bodies: () => uu,
          look: ru(),
          move: (uu, ju) => {
            var Uu;
            su();
            const {
              bits: Zu,
              flips: lu
            } = (uu => {
              if (null === uu) return {
                bits: Xu.od.Peek,
                flips: 0
              };
              const Eu = uu.sneakHeld ? Xu.od.SneakHeld : 0;
              return "hold" === uu.mode ? {
                bits: Eu | Xu.od.SneakHoldMode,
                flips: uu.sneakTogglePressed ? 1 : 0
              } : {
                bits: Eu,
                flips: uu.sneakPressed || uu.sneakTogglePressed ? 1 : 0
              }
            })(ju);
            null !== (Uu = vu()) && void 0 !== Uu && Uu.padMove(uu.x, uu.y, uu.magnitude, uu.headingOffset, (uu => Xu.od.Active | (uu.jumpHeld ? Xu.od.JumpHeld : 0) | (uu.jumpPressed ? Xu.od.JumpPressed : 0) | (uu.running ? Xu.od.Running : 0) | (uu.sprintHeld ? Xu.od.SprintHeld : 0))(uu) | Zu, lu) && (Eu = !0), (0, hu.g)(Qu())
          },
          stopMoving: () => {
            var uu;
            Eu && (Eu = !(null !== (uu = vu()) && void 0 !== uu && uu.padMove(0, 0, 0, 0, 0, 0)), su(), ju = (0, qu.u)((() => {
              su(), (0, hu.g)(Qu())
            })))
          },
          uninstall: su,
          deviceChanged: uu => {
            var ju;
            "touch" === uu ? ((0, hu.g)(!1), null !== (ju = vu()) && void 0 !== ju && ju.padMove(0, 0, 0, 0, Xu.od.EndToggle, 0) && (Eu = !1)) : "gamepad" === uu && (0, hu.g)(Qu())
          },
          hasPlayer: () => null !== vu(),
          isPlayerDead: () => {
            var uu;
            return !1 === (null === (uu = vu()) || void 0 === uu ? void 0 : uu.localPlayerAlive())
          },
          isReplayMode: () => {
            const uu = vu();
            return null !== uu && 0 !== (Ku(uu) & Xu.td.Replay)
          },
          isFreeCameraOn: () => {
            const uu = vu();
            return null !== uu && 0 !== (Ku(uu) & Xu.td.FreeCam)
          },
          targetsBlock: () => Vu(vu()),
          selectedSlotEmpty: () => {
            var uu;
            return !(null !== (uu = vu()) && void 0 !== uu && uu.items.dl())
          },
          pickBlockAllowed: () => !!Zu.e.get("creative") && !!Zu.e.get("canPickBlocks"),
          scrollHotbar: uu => {
            Pu(Xu.nd.Hotbar, Xu.ld.Down | (uu > 0 ? Xu.ld.Next : 0))
          },
          hasFullInventory: fu.p,
          hasLobbyTab: () => (0, Du.c)({
            lobbyLeaderboardInfo: Zu.e.get("lobbyLeaderboardInfo"),
            lobbyManage: Zu.e.get("lobbyManage")
          }),
          contextActionInputs: () => {
            var uu, Eu, ju, su;
            const Uu = vu();
            return {
              holdingGun: !1 !== (null === Uu || void 0 === Uu ? void 0 : Uu.localPlayerAlive()) && "Gun" === (null === Uu || void 0 === Uu || null === (uu = Uu.items.dl()) || void 0 === uu || null === (Eu = uu.typeObj) || void 0 === Eu ? void 0 : Eu.type),
              customButtons: null !== (ju = Zu.e.get("customButtons")) && void 0 !== ju ? ju : null,
              touchscreenActionButton: null !== (su = Zu.e.get("touchscreenActionButton")) && void 0 !== su ? su : null
            }
          },
          pressTouchButton: uu => {
            uu ? ou(du) : ku(du)
          }
        }
      },
      Wu = () => {
        const uu = (0, Uu.e)(iu()),
          Eu = (0, su.d)(),
          ju = null;
        return () => {
          uu(), Eu(), null === ju || void 0 === ju || ju()
        }
      }
  },
  4962: (uu, Eu, ju) => {
    ju.d(Eu, {
      A: () => ou,
      C: () => gu,
      F: () => Xu,
      H: () => lu,
      I: () => du,
      b: () => Ju,
      e: () => eu,
      h: () => mu,
      l: () => ku,
      m: () => Du,
      p: () => pu,
      r: () => Mu,
      t: () => Gu,
      u: () => au,
      y: () => Pu
    });
    var su = ju(4965);
    const Uu = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let Zu = Uu;

    function Xu(uu) {
      Zu = null !== uu && void 0 !== uu ? uu : Uu
    }

    function lu() {
      return Zu
    }
    const qu = new Set,
      fu = new Set;
    let Cu = -1;
    const bu = new Set,
      cu = new Set;
    let Nu = 0,
      Ou = 0;
    const Yu = new Set,
      hu = new Set;

    function Du(uu) {
      return qu.add(uu), () => {
        qu.delete(uu)
      }
    }

    function gu(uu, Eu) {
      for (const su of qu) try {
        su(uu)
      } catch (ju) {
        Eu(ju)
      }
    }

    function Mu(uu) {
      return fu.add(uu), () => {
        fu.delete(uu)
      }
    }

    function eu(uu, Eu) {
      const ju = Cu < 0 ? 0 : uu - Cu;
      Cu = uu;
      for (const Uu of fu) try {
        Uu(ju)
      } catch (su) {
        Eu(su)
      }
    }

    function Gu(uu) {
      return bu.add(uu), () => {
        bu.delete(uu)
      }
    }

    function pu(uu) {
      return cu.add(uu), () => {
        cu.delete(uu)
      }
    }
    let wu = 0;

    function Ju(uu) {
      wu += uu
    }

    function du() {
      const uu = wu;
      return wu = 0, uu
    }

    function au(uu) {
      return Yu.add(uu), () => {
        Yu.delete(uu)
      }
    }

    function Pu(uu) {
      return hu.add(uu), () => {
        hu.delete(uu)
      }
    }

    function ou() {
      Nu = 0, Ou = 0, Cu = -1
    }

    function ku(uu, Eu) {
      if ("paced" === uu) return Ou += Eu, null;
      if ("drawn" !== uu && "skipped" !== uu) return null;
      const ju = Eu + Ou;
      return Ou = 0, ju
    }

    function mu(uu, Eu, ju, Uu) {
      const Zu = (0, su.k)(Eu),
        Xu = uu > 0 ? performance.now() : 0;
      for (let su = 0; su < uu; su++)
        for (const uu of Yu) try {
          uu()
        } catch (lu) {
          Uu(lu)
        }
      if (uu > 0 && Ju(performance.now() - Xu), null !== ju) {
        for (const uu of bu) try {
          uu(ju)
        } catch (lu) {
          Uu(lu)
        }
        Nu += ju
      }
      if ("drawn" === Eu) {
        const uu = Nu;
        Nu = 0;
        for (const Eu of cu) try {
          Eu(uu)
        } catch (lu) {
          Uu(lu)
        }
      }
      for (const su of hu) try {
        su(uu, Zu)
      } catch (lu) {
        Uu(lu)
      }
    }
  },
  4983: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Uu,
      h: () => Zu,
      j: () => Xu,
      k: () => su,
      l: () => lu
    });
    const su = {
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
      Uu = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      Zu = {
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
      Xu = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      lu = [16]
  },
  40914: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Xu,
      h: () => Zu,
      i: () => Uu
    });
    let su = null;

    function Uu(uu) {
      su = uu
    }

    function Zu(uu) {
      su === uu && (su = null)
    }

    function Xu() {
      var uu;
      null === (uu = su) || void 0 === uu || uu()
    }
  },
  4986: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => lu,
      d: () => Xu,
      g: () => fu
    });
    var su = ju(2516),
      Uu = ju(2519);
    const Zu = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function Xu(uu) {
      return uu instanceof HTMLElement && (!!(uu.isContentEditable || uu instanceof HTMLTextAreaElement || uu instanceof HTMLSelectElement) || uu instanceof HTMLInputElement && !Zu.has(uu.type))
    }

    function lu(uu) {
      let Eu = null;
      const ju = ju => {
          const Uu = Xu(ju);
          Uu !== Eu && (Eu = Uu, uu(su.h.UiCapture, su.x.Keyboard, 0, 0, Uu ? su.x.Keyboard : 0))
        },
        Uu = uu => {
          ju(uu.target)
        },
        Zu = uu => {
          ju(uu.relatedTarget)
        },
        lu = () => {
          ju(document.activeElement)
        },
        qu = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", Uu, qu), document.addEventListener("focusout", Zu, qu), document.addEventListener("keydown", lu, qu), ju(document.activeElement), () => {
        document.removeEventListener("focusin", Uu, qu), document.removeEventListener("focusout", Zu, qu), document.removeEventListener("keydown", lu, qu)
      }
    }
    const qu = new Map;

    function fu(uu, Eu) {
      var ju;
      let su = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      qu.set(su, (null !== (ju = qu.get(su)) && void 0 !== ju ? ju : 0) & ~uu | Eu & uu);
      let Zu = 0;
      for (const Uu of qu.values()) Zu |= Uu;
      return (0, Uu.x)(uu, Zu & uu)
    }
  },
  37332: (uu, Eu, ju) => {
    function su(uu) {
      return uu.includes("Leaf Bed")
    }

    function Uu(uu) {
      return / Bed(?: Head)?(?:\||$)/.test(uu) && !su(uu)
    }

    function Zu(uu) {
      return uu.includes(" Strongbed")
    }

    function Xu(uu) {
      return su(uu) || Uu(uu) || Zu(uu)
    }
    ju.d(Eu, {
      d: () => Xu,
      f: () => su,
      j: () => Zu,
      n: () => Uu
    })
  },
  37328: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => fu
    });
    var su = ju(37332),
      Uu = ju(9409);
    const Zu = [],
      Xu = [],
      lu = [],
      qu = [];
    for (const Cu of Object.keys(Uu.j))(0, su.f)(Cu) ? Zu.push(Cu) : (0, su.n)(Cu) && Xu.push(Cu), (0, su.j)(Cu) && lu.push(Cu), (Cu.includes(" Bed Head") || Cu.includes(" Strongbed Head")) && qu.push(Cu);
    const fu = {
      leafBeds: Zu,
      woolBeds: Xu,
      strongBeds: lu,
      beds: [...Zu, ...Xu, ...lu],
      bedHeads: qu,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6677: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Xu,
      i: () => Uu,
      m: () => qu,
      p: () => Zu,
      r: () => fu,
      v: () => su,
      y: () => lu
    });
    let su = function(uu) {
        return uu[uu.DEFAULT = 0] = "DEFAULT", uu[uu.BOAT = 1] = "BOAT", uu[uu.GLIDER = 2] = "GLIDER", uu[uu.BALLOON = 3] = "BALLOON", uu[uu.SLEEPING = 4] = "SLEEPING", uu[uu.RIDING_MOB = 5] = "RIDING_MOB", uu[uu.CAR = 6] = "CAR", uu[uu.HOVERCRAFT = 7] = "HOVERCRAFT", uu
      }({}),
      Uu = function(uu) {
        return uu[uu.WOOD = 0] = "WOOD", uu[uu.OBSIDIAN = 1] = "OBSIDIAN", uu[uu.SPEED = 2] = "SPEED", uu
      }({}),
      Zu = function(uu) {
        return uu[uu.WOOD = 0] = "WOOD", uu[uu.IRON = 1] = "IRON", uu[uu.GOLD = 2] = "GOLD", uu[uu.DIAMOND = 3] = "DIAMOND", uu
      }({}),
      Xu = function(uu) {
        return uu[uu.YELLOW = 0] = "YELLOW", uu[uu.WHITE = 1] = "WHITE", uu[uu.RED = 2] = "RED", uu[uu.PURPLE = 3] = "PURPLE", uu[uu.PINK = 4] = "PINK", uu[uu.ORANGE = 5] = "ORANGE", uu[uu.MAGENTA = 6] = "MAGENTA", uu[uu.LIME = 7] = "LIME", uu[uu.LIGHT_GRAY = 8] = "LIGHT_GRAY", uu[uu.LIGHT_BLUE = 9] = "LIGHT_BLUE", uu[uu.GREEN = 10] = "GREEN", uu[uu.GRAY = 11] = "GRAY", uu[uu.CYAN = 12] = "CYAN", uu[uu.BROWN = 13] = "BROWN", uu[uu.BLUE = 14] = "BLUE", uu[uu.BLACK = 15] = "BLACK", uu
      }({}),
      lu = function(uu) {
        return uu[uu.ROTATION_1 = 0] = "ROTATION_1", uu[uu.ROTATION_2 = 1] = "ROTATION_2", uu[uu.ROTATION_3 = 2] = "ROTATION_3", uu[uu.ROTATION_4 = 3] = "ROTATION_4", uu
      }({}),
      qu = function(uu) {
        return uu[uu.KART = 0] = "KART", uu[uu.OFF_ROADER = 1] = "OFF_ROADER", uu[uu.CAR = 2] = "CAR", uu[uu.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", uu[uu.ARMORED_CAR = 4] = "ARMORED_CAR", uu[uu.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", uu[uu.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", uu[uu.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", uu
      }({});
    su.DEFAULT, su.BOAT, Uu.SPEED, su.GLIDER, Zu.DIAMOND, su.BALLOON, Xu.BLACK, su.SLEEPING, lu.ROTATION_4, su.RIDING_MOB, su.CAR, qu.MOONSTONE_MINING_DRILL, su.HOVERCRAFT;
    let fu = function(uu) {
      return uu[uu.NORMAL = 0] = "NORMAL", uu[uu.GLIDING = 1] = "GLIDING", uu[uu.FLOATING = 2] = "FLOATING", uu
    }({})
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);