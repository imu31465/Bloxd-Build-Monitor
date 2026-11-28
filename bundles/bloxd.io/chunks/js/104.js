export const id = 104;
export const ids = [104];
export const modules = {
  42485: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      startWasmPadGameplay: () => zd
    });
    md(42494);
    var Wd = md(42501),
      Fd = md(42526),
      Rd = md(2116),
      Xd = md(42540),
      Kd = md(5571),
      hd = md(5558),
      vd = md(42544),
      Qd = md(42552),
      td = md(5588),
      od = md(42628),
      Nd = md(3378),
      qd = md(9989),
      Hd = md(42510),
      yd = md(9967),
      bd = md(40676);
    const Td = dd => {
        const Od = td.e.indexOf(dd);
        if (Od < 0) throw new Error(`No core action "${dd}"`);
        return Od
      },
      pd = Td("primary-fire"),
      Yd = Td("alt-fire"),
      gd = Td("mid-fire"),
      wd = Td("jump"),
      Ed = Td("ReloadGun"),
      Jd = Td("SwapCameraZoom"),
      Ud = Td("Zoom"),
      xd = Td("TouchAction1"),
      Bd = {
        SpecialAction1: Td("SpecialAction1"),
        SpecialAction2: Td("SpecialAction2")
      },
      Sd = (dd, Od) => {
        (0, Nd.m)(Kd.L.PadAction, dd, 0, 0, (0, Nd.k)(Od, performance.now()))
      },
      sd = dd => {
        Sd(dd, Xd.xd.Down)
      },
      ud = dd => {
        Sd(dd, 0)
      },
      Vd = dd => {
        sd(dd), ud(dd)
      },
      Ad = () => {
        const dd = (0, Qd.l)();
        return null !== dd && void 0 !== dd && dd.isCoreRunning ? dd : null
      },
      rd = dd => Xd.q.playerFlags(dd.api.apiView, 0),
      Gd = dd => null !== dd && Xd.q.targetBlockId(dd.api.apiView, 0) !== Xd.dd,
      nd = () => {
        const dd = (0, qd.c)(),
          Od = new Hd.c;
        let md = !1;
        const Wd = (dd, Od) => {
            (0, Nd.m)(Kd.L.PadLook, Xd.Fd.Rate, dd, Od, 0)
          },
          Fd = () => {
            md = !1, Od.reset(), Wd(0, 0)
          };
        return {
          update: (Fd, Rd, hd) => {
            md || (dd.discardPending(), md = !0);
            const vd = (0, Hd.n)(Od, Fd, Rd, hd, performance.now());
            Wd(vd.yawRadPerSec, vd.pitchRadPerSec);
            const Qd = dd.drainLookDelta();
            0 === Qd.mV && 0 === Qd.RV || (0, Nd.m)(Kd.L.PadLook, Xd.Fd.Gyro, Qd.mV, Qd.RV, 0)
          },
          release: Fd,
          uninstall: Fd
        }
      },
      Ld = () => {
        const dd = Ad();
        return null !== dd && 0 !== (rd(dd) & Xd.Md.PadSneakToggled)
      },
      Pd = () => {
        const dd = (dd => {
          const Od = dd => function() {
            return (0, od.e)(), dd(...arguments)
          };
          return {
            primaryFireDown: Od((dd => (Sd(pd, Xd.xd.Down | (dd ? Xd.xd.Repeat : 0)), 0))),
            primaryFireUp: Od((() => {
              ud(pd)
            })),
            altFireDown: Od((() => (sd(Yd), 0))),
            altFireUp: Od((() => {
              ud(Yd)
            })),
            jumpDown: Od((() => {
              Vd(wd)
            })),
            specialActionDown: Od((dd => {
              sd(Bd[dd])
            })),
            specialActionUp: Od((dd => {
              ud(Bd[dd])
            })),
            reloadGun: Od((() => {
              Vd(Ed)
            })),
            dropItem: Od((dd => {
              Sd(Xd.yd.Drop, Xd.xd.Down | (dd ? Xd.xd.Stack : 0))
            })),
            swapCameraZoom: Od((() => {
              Vd(Jd)
            })),
            zoom: Od((dd => {
              dd ? sd(Ud) : ud(Ud)
            })),
            pickBlock: Od((() => (Vd(gd), Gd(dd()))))
          }
        })(Ad);
        let Od = !1,
          md = null;
        const Wd = () => {
          var dd;
          null === (dd = md) || void 0 === dd || dd(), md = null
        };
        return {
          bodies: () => dd,
          look: nd(),
          move: (dd, md) => {
            var Fd;
            Wd();
            const {
              bits: Rd,
              flips: Kd
            } = (dd => {
              if (null === dd) return {
                bits: Xd.Bd.Peek,
                flips: 0
              };
              const Od = dd.sneakHeld ? Xd.Bd.SneakHeld : 0;
              return "hold" === dd.mode ? {
                bits: Od | Xd.Bd.SneakHoldMode,
                flips: dd.sneakTogglePressed ? 1 : 0
              } : {
                bits: Od,
                flips: dd.sneakPressed || dd.sneakTogglePressed ? 1 : 0
              }
            })(md);
            null !== (Fd = Ad()) && void 0 !== Fd && Fd.padMove(dd.x, dd.y, dd.magnitude, dd.headingOffset, (dd => Xd.Bd.Active | (dd.jumpHeld ? Xd.Bd.JumpHeld : 0) | (dd.jumpPressed ? Xd.Bd.JumpPressed : 0) | (dd.running ? Xd.Bd.Running : 0) | (dd.sprintHeld ? Xd.Bd.SprintHeld : 0))(dd) | Rd, Kd) && (Od = !0), (0, yd.d)(Ld())
          },
          stopMoving: () => {
            var dd;
            Od && (Od = !(null !== (dd = Ad()) && void 0 !== dd && dd.padMove(0, 0, 0, 0, 0, 0)), Wd(), md = (0, hd.A)((() => {
              Wd(), (0, yd.d)(Ld())
            })))
          },
          uninstall: Wd,
          deviceChanged: dd => {
            var md;
            "touch" === dd ? ((0, yd.d)(!1), null !== (md = Ad()) && void 0 !== md && md.padMove(0, 0, 0, 0, Xd.Bd.EndToggle, 0) && (Od = !1)) : "gamepad" === dd && (0, yd.d)(Ld())
          },
          hasPlayer: () => null !== Ad(),
          isPlayerDead: () => {
            var dd;
            return !1 === (null === (dd = Ad()) || void 0 === dd ? void 0 : dd.localPlayerAlive())
          },
          isReplayMode: () => {
            const dd = Ad();
            return null !== dd && 0 !== (rd(dd) & Xd.Md.Replay)
          },
          isFreeCameraOn: () => {
            const dd = Ad();
            return null !== dd && 0 !== (rd(dd) & Xd.Md.FreeCam)
          },
          targetsBlock: () => Gd(Ad()),
          selectedSlotEmpty: () => {
            var dd;
            return !(null !== (dd = Ad()) && void 0 !== dd && dd.items.jK())
          },
          pickBlockAllowed: () => !!Rd.e.get("creative") && !!Rd.e.get("canPickBlocks"),
          zoomAllowed: () => !!Rd.e.get("canUseZoomKey"),
          scrollHotbar: dd => {
            Sd(Xd.yd.Hotbar, Xd.xd.Down | (dd > 0 ? Xd.xd.Next : 0))
          },
          hasFullInventory: vd.l,
          hasLobbyTab: () => (0, bd.b)({
            lobbyLeaderboardInfo: Rd.e.get("lobbyLeaderboardInfo"),
            lobbyManage: Rd.e.get("lobbyManage")
          }),
          contextActionInputs: () => {
            var dd, Od, md, Wd;
            const Fd = Ad();
            return {
              holdingGun: !1 !== (null === Fd || void 0 === Fd ? void 0 : Fd.localPlayerAlive()) && "Gun" === (null === Fd || void 0 === Fd || null === (dd = Fd.items.jK()) || void 0 === dd || null === (Od = dd.typeObj) || void 0 === Od ? void 0 : Od.type),
              customButtons: null !== (md = Rd.e.get("customButtons")) && void 0 !== md ? md : null,
              touchscreenActionButton: null !== (Wd = Rd.e.get("touchscreenActionButton")) && void 0 !== Wd ? Wd : null
            }
          },
          pressTouchButton: dd => {
            dd ? sd(xd) : ud(xd)
          }
        }
      },
      zd = () => {
        const dd = (0, Fd.c)(Pd()),
          Od = (0, Wd.d)(),
          md = null;
        return () => {
          dd(), Od(), null === md || void 0 === md || md()
        }
      }
  },
  5558: (dd, Od, md) => {
    md.d(Od, {
      A: () => xd,
      B: () => Bd,
      F: () => Sd,
      I: () => Td,
      M: () => Xd,
      O: () => Kd,
      S: () => Ud,
      e: () => Jd,
      h: () => Yd,
      i: () => ud,
      l: () => sd,
      n: () => bd,
      r: () => wd,
      u: () => pd,
      x: () => gd
    });
    var Wd = md(5565);
    const Fd = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let Rd = Fd;

    function Xd(dd) {
      Rd = null !== dd && void 0 !== dd ? dd : Fd
    }

    function Kd() {
      return Rd
    }
    const hd = new Set,
      vd = new Set;
    let Qd = -1;
    const td = new Set,
      od = new Set;
    let Nd = 0,
      qd = 0;
    const Hd = new Set,
      yd = new Set;

    function bd(dd) {
      return hd.add(dd), () => {
        hd.delete(dd)
      }
    }

    function Td(dd, Od) {
      for (const Wd of hd) try {
        Wd(dd)
      } catch (md) {
        Od(md)
      }
    }

    function pd(dd) {
      return vd.add(dd), () => {
        vd.delete(dd)
      }
    }

    function Yd(dd, Od) {
      const md = Qd < 0 ? 0 : dd - Qd;
      Qd = dd;
      for (const Fd of vd) try {
        Fd(md)
      } catch (Wd) {
        Od(Wd)
      }
    }

    function gd(dd) {
      return td.add(dd), () => {
        td.delete(dd)
      }
    }

    function wd(dd) {
      return od.add(dd), () => {
        od.delete(dd)
      }
    }
    let Ed = 0;

    function Jd(dd) {
      Ed += dd
    }

    function Ud() {
      const dd = Ed;
      return Ed = 0, dd
    }

    function xd(dd) {
      return Hd.add(dd), () => {
        Hd.delete(dd)
      }
    }

    function Bd(dd) {
      return yd.add(dd), () => {
        yd.delete(dd)
      }
    }

    function Sd() {
      Nd = 0, qd = 0, Qd = -1
    }

    function sd(dd, Od) {
      if ("paced" === dd) return qd += Od, null;
      if ("drawn" !== dd && "skipped" !== dd) return null;
      const md = Od + qd;
      return qd = 0, md
    }

    function ud(dd, Od, md, Fd) {
      const Rd = (0, Wd.i)(Od),
        Xd = dd > 0 ? performance.now() : 0;
      for (let Wd = 0; Wd < dd; Wd++)
        for (const dd of Hd) try {
          dd()
        } catch (Kd) {
          Fd(Kd)
        }
      if (dd > 0 && Jd(performance.now() - Xd), null !== md) {
        for (const dd of td) try {
          dd(md)
        } catch (Kd) {
          Fd(Kd)
        }
        Nd += md
      }
      if ("drawn" === Od) {
        const dd = Nd;
        Nd = 0;
        for (const Od of od) try {
          Od(dd)
        } catch (Kd) {
          Fd(Kd)
        }
      }
      for (const Wd of yd) try {
        Wd(dd, Rd)
      } catch (Kd) {
        Fd(Kd)
      }
    }
  },
  5588: (dd, Od, md) => {
    md.d(Od, {
      e: () => Fd,
      f: () => Rd,
      i: () => Xd,
      m: () => Wd,
      n: () => Kd
    });
    const Wd = {
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
      Fd = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      Rd = {
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
      Xd = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        Zoom: [191],
        "primary-fire": [195],
        "alt-fire": [196]
      },
      Kd = [16]
  },
  42628: (dd, Od, md) => {
    md.d(Od, {
      e: () => Xd,
      f: () => Rd,
      h: () => Fd
    });
    let Wd = null;

    function Fd(dd) {
      Wd = dd
    }

    function Rd(dd) {
      Wd === dd && (Wd = null)
    }

    function Xd() {
      var dd;
      null === (dd = Wd) || void 0 === dd || dd()
    }
  },
  5590: (dd, Od, md) => {
    md.d(Od, {
      d: () => Kd,
      e: () => Xd,
      i: () => vd
    });
    var Wd = md(3372),
      Fd = md(3378);
    const Rd = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function Xd(dd) {
      return dd instanceof HTMLElement && (!!(dd.isContentEditable || dd instanceof HTMLTextAreaElement || dd instanceof HTMLSelectElement) || dd instanceof HTMLInputElement && !Rd.has(dd.type))
    }

    function Kd(dd) {
      let Od = null;
      const md = md => {
          const Fd = Xd(md);
          Fd !== Od && (Od = Fd, dd(Wd.h.UiCapture, Wd.w.Keyboard, 0, 0, Fd ? Wd.w.Keyboard : 0))
        },
        Fd = dd => {
          md(dd.target)
        },
        Rd = dd => {
          md(dd.relatedTarget)
        },
        Kd = () => {
          md(document.activeElement)
        },
        hd = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", Fd, hd), document.addEventListener("focusout", Rd, hd), document.addEventListener("keydown", Kd, hd), md(document.activeElement), () => {
        document.removeEventListener("focusin", Fd, hd), document.removeEventListener("focusout", Rd, hd), document.removeEventListener("keydown", Kd, hd)
      }
    }
    const hd = new Map;

    function vd(dd, Od) {
      var md;
      let Wd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      hd.set(Wd, (null !== (md = hd.get(Wd)) && void 0 !== md ? md : 0) & ~dd | Od & dd);
      let Rd = 0;
      for (const Fd of hd.values()) Rd |= Fd;
      return (0, Fd.s)(dd, Rd & dd)
    }
  },
  38474: (dd, Od, md) => {
    function Wd(dd) {
      return dd.includes("Leaf Bed")
    }

    function Fd(dd) {
      return / Bed(?: Head)?(?:\||$)/.test(dd) && !Wd(dd)
    }

    function Rd(dd) {
      return dd.includes(" Strongbed")
    }

    function Xd(dd) {
      return Wd(dd) || Fd(dd) || Rd(dd)
    }
    md.d(Od, {
      e: () => Xd,
      f: () => Wd,
      j: () => Rd,
      l: () => Fd
    })
  },
  38469: (dd, Od, md) => {
    md.d(Od, {
      c: () => vd
    });
    var Wd = md(38474),
      Fd = md(5733);
    const Rd = [],
      Xd = [],
      Kd = [],
      hd = [];
    for (const Qd of Object.keys(Fd.k))(0, Wd.f)(Qd) ? Rd.push(Qd) : (0, Wd.l)(Qd) && Xd.push(Qd), (0, Wd.j)(Qd) && Kd.push(Qd), (Qd.includes(" Bed Head") || Qd.includes(" Strongbed Head")) && hd.push(Qd);
    const vd = {
      leafBeds: Rd,
      woolBeds: Xd,
      strongBeds: Kd,
      beds: [...Rd, ...Xd, ...Kd],
      bedHeads: hd,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  7410: (dd, Od, md) => {
    md.d(Od, {
      c: () => Xd,
      f: () => Fd,
      g: () => hd,
      k: () => Rd,
      n: () => vd,
      q: () => Wd,
      t: () => Kd
    });
    let Wd = function(dd) {
        return dd[dd.DEFAULT = 0] = "DEFAULT", dd[dd.BOAT = 1] = "BOAT", dd[dd.GLIDER = 2] = "GLIDER", dd[dd.BALLOON = 3] = "BALLOON", dd[dd.SLEEPING = 4] = "SLEEPING", dd[dd.RIDING_MOB = 5] = "RIDING_MOB", dd[dd.CAR = 6] = "CAR", dd[dd.HOVERCRAFT = 7] = "HOVERCRAFT", dd
      }({}),
      Fd = function(dd) {
        return dd[dd.WOOD = 0] = "WOOD", dd[dd.OBSIDIAN = 1] = "OBSIDIAN", dd[dd.SPEED = 2] = "SPEED", dd
      }({}),
      Rd = function(dd) {
        return dd[dd.WOOD = 0] = "WOOD", dd[dd.IRON = 1] = "IRON", dd[dd.GOLD = 2] = "GOLD", dd[dd.DIAMOND = 3] = "DIAMOND", dd
      }({}),
      Xd = function(dd) {
        return dd[dd.YELLOW = 0] = "YELLOW", dd[dd.WHITE = 1] = "WHITE", dd[dd.RED = 2] = "RED", dd[dd.PURPLE = 3] = "PURPLE", dd[dd.PINK = 4] = "PINK", dd[dd.ORANGE = 5] = "ORANGE", dd[dd.MAGENTA = 6] = "MAGENTA", dd[dd.LIME = 7] = "LIME", dd[dd.LIGHT_GRAY = 8] = "LIGHT_GRAY", dd[dd.LIGHT_BLUE = 9] = "LIGHT_BLUE", dd[dd.GREEN = 10] = "GREEN", dd[dd.GRAY = 11] = "GRAY", dd[dd.CYAN = 12] = "CYAN", dd[dd.BROWN = 13] = "BROWN", dd[dd.BLUE = 14] = "BLUE", dd[dd.BLACK = 15] = "BLACK", dd
      }({}),
      Kd = function(dd) {
        return dd[dd.ROTATION_1 = 0] = "ROTATION_1", dd[dd.ROTATION_2 = 1] = "ROTATION_2", dd[dd.ROTATION_3 = 2] = "ROTATION_3", dd[dd.ROTATION_4 = 3] = "ROTATION_4", dd
      }({}),
      hd = function(dd) {
        return dd[dd.KART = 0] = "KART", dd[dd.OFF_ROADER = 1] = "OFF_ROADER", dd[dd.CAR = 2] = "CAR", dd[dd.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", dd[dd.ARMORED_CAR = 4] = "ARMORED_CAR", dd[dd.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", dd[dd.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", dd[dd.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", dd
      }({});
    Wd.DEFAULT, Wd.BOAT, Fd.SPEED, Wd.GLIDER, Rd.DIAMOND, Wd.BALLOON, Xd.BLACK, Wd.SLEEPING, Kd.ROTATION_4, Wd.RIDING_MOB, Wd.CAR, hd.MOONSTONE_MINING_DRILL, Wd.HOVERCRAFT;
    let vd = function(dd) {
      return dd[dd.NORMAL = 0] = "NORMAL", dd[dd.GLIDING = 1] = "GLIDING", dd[dd.FLOATING = 2] = "FLOATING", dd
    }({})
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);