export const id = 89;
export const ids = [89];
export const modules = {
  40730: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      startWasmPadGameplay: () => fp
    });
    cp(40736);
    var Op = cp(40739),
      op = cp(40758),
      Ip = cp(1982),
      Sp = cp(40769),
      xp = cp(4911),
      Lp = cp(4886),
      Yp = cp(40778),
      Dp = cp(40783),
      Ap = cp(4921),
      Pp = cp(40867),
      Wp = cp(2463),
      yp = cp(8979),
      Up = cp(40747),
      wp = cp(8952),
      vp = cp(39281);
    const tp = pp => {
        const ip = Ap.c.indexOf(pp);
        if (ip < 0) throw new Error(`No core action "${pp}"`);
        return ip
      },
      Hp = tp("primary-fire"),
      dp = tp("alt-fire"),
      ep = tp("mid-fire"),
      jp = tp("jump"),
      kp = tp("ReloadGun"),
      mp = tp("SwapCameraZoom"),
      Rp = tp("TouchAction1"),
      qp = {
        SpecialAction1: tp("SpecialAction1"),
        SpecialAction2: tp("SpecialAction2")
      },
      Mp = (pp, ip) => {
        (0, Wp.z)(xp.z.PadAction, pp, 0, 0, (0, Wp.v)(ip, performance.now()))
      },
      Cp = pp => {
        Mp(pp, Sp.id.Down)
      },
      Ep = pp => {
        Mp(pp, 0)
      },
      Xp = pp => {
        Cp(pp), Ep(pp)
      },
      lp = () => {
        const pp = (0, Dp.k)();
        return null !== pp && void 0 !== pp && pp.isCoreRunning ? pp : null
      },
      Qp = pp => Sp.q.playerFlags(pp.api.apiView, 0),
      Jp = pp => null !== pp && Sp.q.targetBlockId(pp.api.apiView, 0) !== Sp.Rc,
      Bp = () => {
        const pp = (0, yp.e)(),
          ip = new Up.c;
        let cp = !1;
        const Op = (pp, ip) => {
            (0, Wp.z)(xp.z.PadLook, Sp.rd.Rate, pp, ip, 0)
          },
          op = () => {
            cp = !1, ip.reset(), Op(0, 0)
          };
        return {
          update: (op, Ip, Lp) => {
            cp || (pp.discardPending(), cp = !0);
            const Yp = (0, Up.o)(ip, op, Ip, Lp, performance.now());
            Op(Yp.yawRadPerSec, Yp.pitchRadPerSec);
            const Dp = pp.drainLookDelta();
            0 === Dp.QE && 0 === Dp.TE || (0, Wp.z)(xp.z.PadLook, Sp.rd.Gyro, Dp.QE, Dp.TE, 0)
          },
          release: op,
          uninstall: op
        }
      },
      Np = () => {
        const pp = lp();
        return null !== pp && 0 !== (Qp(pp) & Sp.wd.PadSneakToggled)
      },
      Tp = () => {
        const pp = (pp => {
          const ip = pp => function() {
            return (0, Pp.c)(), pp(...arguments)
          };
          return {
            primaryFireDown: ip((pp => (Mp(Hp, Sp.id.Down | (pp ? Sp.id.Repeat : 0)), 0))),
            primaryFireUp: ip((() => {
              Ep(Hp)
            })),
            altFireDown: ip((() => (Cp(dp), 0))),
            altFireUp: ip((() => {
              Ep(dp)
            })),
            jumpDown: ip((() => {
              Xp(jp)
            })),
            specialActionDown: ip((pp => {
              Cp(qp[pp])
            })),
            specialActionUp: ip((pp => {
              Ep(qp[pp])
            })),
            reloadGun: ip((() => {
              Xp(kp)
            })),
            dropItem: ip((pp => {
              Mp(Sp.ld.Drop, Sp.id.Down | (pp ? Sp.id.Stack : 0))
            })),
            swapCameraZoom: ip((() => {
              Xp(mp)
            })),
            pickBlock: ip((() => (Xp(ep), Jp(pp()))))
          }
        })(lp);
        let ip = !1,
          cp = null;
        const Op = () => {
          var pp;
          null === (pp = cp) || void 0 === pp || pp(), cp = null
        };
        return {
          bodies: () => pp,
          look: Bp(),
          move: (pp, cp) => {
            var op;
            Op();
            const {
              bits: Ip,
              flips: xp
            } = (pp => {
              if (null === pp) return {
                bits: Sp.nd.Peek,
                flips: 0
              };
              const ip = pp.sneakHeld ? Sp.nd.SneakHeld : 0;
              return "hold" === pp.mode ? {
                bits: ip | Sp.nd.SneakHoldMode,
                flips: pp.sneakTogglePressed ? 1 : 0
              } : {
                bits: ip,
                flips: pp.sneakPressed || pp.sneakTogglePressed ? 1 : 0
              }
            })(cp);
            null !== (op = lp()) && void 0 !== op && op.padMove(pp.x, pp.y, pp.magnitude, pp.headingOffset, (pp => Sp.nd.Active | (pp.jumpHeld ? Sp.nd.JumpHeld : 0) | (pp.jumpPressed ? Sp.nd.JumpPressed : 0) | (pp.running ? Sp.nd.Running : 0) | (pp.sprintHeld ? Sp.nd.SprintHeld : 0))(pp) | Ip, xp) && (ip = !0), (0, wp.e)(Np())
          },
          stopMoving: () => {
            var pp;
            ip && (ip = !(null !== (pp = lp()) && void 0 !== pp && pp.padMove(0, 0, 0, 0, 0, 0)), Op(), cp = (0, Lp.s)((() => {
              Op(), (0, wp.e)(Np())
            })))
          },
          uninstall: Op,
          deviceChanged: pp => {
            var cp;
            "touch" === pp ? ((0, wp.e)(!1), null !== (cp = lp()) && void 0 !== cp && cp.padMove(0, 0, 0, 0, Sp.nd.EndToggle, 0) && (ip = !1)) : "gamepad" === pp && (0, wp.e)(Np())
          },
          hasPlayer: () => null !== lp(),
          isPlayerDead: () => {
            var pp;
            return !1 === (null === (pp = lp()) || void 0 === pp ? void 0 : pp.localPlayerAlive())
          },
          isReplayMode: () => {
            const pp = lp();
            return null !== pp && 0 !== (Qp(pp) & Sp.wd.Replay)
          },
          isFreeCameraOn: () => {
            const pp = lp();
            return null !== pp && 0 !== (Qp(pp) & Sp.wd.FreeCam)
          },
          targetsBlock: () => Jp(lp()),
          selectedSlotEmpty: () => {
            var pp;
            return !(null !== (pp = lp()) && void 0 !== pp && pp.items.sx())
          },
          pickBlockAllowed: () => !!Ip.c.get("creative") && !!Ip.c.get("canPickBlocks"),
          scrollHotbar: pp => {
            Mp(Sp.ld.Hotbar, Sp.id.Down | (pp > 0 ? Sp.id.Next : 0))
          },
          hasFullInventory: Yp.o,
          hasLobbyTab: () => (0, vp.d)({
            lobbyLeaderboardInfo: Ip.c.get("lobbyLeaderboardInfo"),
            lobbyManage: Ip.c.get("lobbyManage")
          }),
          contextActionInputs: () => {
            var pp, ip, cp, Op;
            const op = lp();
            return {
              holdingGun: !1 !== (null === op || void 0 === op ? void 0 : op.localPlayerAlive()) && "Gun" === (null === op || void 0 === op || null === (pp = op.items.sx()) || void 0 === pp || null === (ip = pp.typeObj) || void 0 === ip ? void 0 : ip.type),
              customButtons: null !== (cp = Ip.c.get("customButtons")) && void 0 !== cp ? cp : null,
              touchscreenActionButton: null !== (Op = Ip.c.get("touchscreenActionButton")) && void 0 !== Op ? Op : null
            }
          },
          pressTouchButton: pp => {
            pp ? Cp(Rp) : Ep(Rp)
          }
        }
      },
      fp = () => {
        const pp = (0, op.d)(Tp()),
          ip = (0, Op.e)(),
          cp = null;
        return () => {
          pp(), ip(), null === cp || void 0 === cp || cp()
        }
      }
  },
  4886: (pp, ip, cp) => {
    cp.d(ip, {
      B: () => tp,
      D: () => Sp,
      H: () => xp,
      K: () => Rp,
      b: () => mp,
      c: () => dp,
      f: () => Xp,
      h: () => Ep,
      j: () => vp,
      m: () => jp,
      n: () => Hp,
      p: () => ep,
      s: () => qp,
      u: () => Mp,
      y: () => Cp
    });
    var Op = cp(4895);
    const op = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let Ip = op;

    function Sp(pp) {
      Ip = null !== pp && void 0 !== pp ? pp : op
    }

    function xp() {
      return Ip
    }
    const Lp = new Set,
      Yp = new Set;
    let Dp = -1;
    const Ap = new Set,
      Pp = new Set;
    let Wp = 0,
      yp = 0;
    const Up = new Set,
      wp = new Set;

    function vp(pp) {
      return Lp.add(pp), () => {
        Lp.delete(pp)
      }
    }

    function tp(pp, ip) {
      for (const Op of Lp) try {
        Op(pp)
      } catch (cp) {
        ip(cp)
      }
    }

    function Hp(pp) {
      return Yp.add(pp), () => {
        Yp.delete(pp)
      }
    }

    function dp(pp, ip) {
      const cp = Dp < 0 ? 0 : pp - Dp;
      Dp = pp;
      for (const op of Yp) try {
        op(cp)
      } catch (Op) {
        ip(Op)
      }
    }

    function ep(pp) {
      return Ap.add(pp), () => {
        Ap.delete(pp)
      }
    }

    function jp(pp) {
      return Pp.add(pp), () => {
        Pp.delete(pp)
      }
    }
    let kp = 0;

    function mp(pp) {
      kp += pp
    }

    function Rp() {
      const pp = kp;
      return kp = 0, pp
    }

    function qp(pp) {
      return Up.add(pp), () => {
        Up.delete(pp)
      }
    }

    function Mp(pp) {
      return wp.add(pp), () => {
        wp.delete(pp)
      }
    }

    function Cp() {
      Wp = 0, yp = 0, Dp = -1
    }

    function Ep(pp, ip) {
      if ("paced" === pp) return yp += ip, null;
      if ("drawn" !== pp && "skipped" !== pp) return null;
      const cp = ip + yp;
      return yp = 0, cp
    }

    function Xp(pp, ip, cp, op) {
      const Ip = (0, Op.j)(ip),
        Sp = pp > 0 ? performance.now() : 0;
      for (let Op = 0; Op < pp; Op++)
        for (const pp of Up) try {
          pp()
        } catch (xp) {
          op(xp)
        }
      if (pp > 0 && mp(performance.now() - Sp), null !== cp) {
        for (const pp of Ap) try {
          pp(cp)
        } catch (xp) {
          op(xp)
        }
        Wp += cp
      }
      if ("drawn" === ip) {
        const pp = Wp;
        Wp = 0;
        for (const ip of Pp) try {
          ip(pp)
        } catch (xp) {
          op(xp)
        }
      }
      for (const Op of wp) try {
        Op(pp, Ip)
      } catch (xp) {
        op(xp)
      }
    }
  },
  4921: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => op,
      e: () => Ip,
      i: () => Sp,
      j: () => Op,
      n: () => xp
    });
    const Op = {
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
      op = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      Ip = {
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
      Sp = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      xp = [16]
  },
  40867: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Sp,
      f: () => Ip,
      i: () => op
    });
    let Op = null;

    function op(pp) {
      Op = pp
    }

    function Ip(pp) {
      Op === pp && (Op = null)
    }

    function Sp() {
      var pp;
      null === (pp = Op) || void 0 === pp || pp()
    }
  },
  4927: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => xp,
      e: () => Sp,
      g: () => Yp
    });
    var Op = cp(2457),
      op = cp(2463);
    const Ip = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function Sp(pp) {
      return pp instanceof HTMLElement && (!!(pp.isContentEditable || pp instanceof HTMLTextAreaElement || pp instanceof HTMLSelectElement) || pp instanceof HTMLInputElement && !Ip.has(pp.type))
    }

    function xp(pp) {
      let ip = null;
      const cp = cp => {
          const op = Sp(cp);
          op !== ip && (ip = op, pp(Op.i.UiCapture, Op.C.Keyboard, 0, 0, op ? Op.C.Keyboard : 0))
        },
        op = pp => {
          cp(pp.target)
        },
        Ip = pp => {
          cp(pp.relatedTarget)
        },
        xp = () => {
          cp(document.activeElement)
        },
        Lp = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", op, Lp), document.addEventListener("focusout", Ip, Lp), document.addEventListener("keydown", xp, Lp), cp(document.activeElement), () => {
        document.removeEventListener("focusin", op, Lp), document.removeEventListener("focusout", Ip, Lp), document.removeEventListener("keydown", xp, Lp)
      }
    }
    const Lp = new Map;

    function Yp(pp, ip) {
      var cp;
      let Op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      Lp.set(Op, (null !== (cp = Lp.get(Op)) && void 0 !== cp ? cp : 0) & ~pp | ip & pp);
      let Ip = 0;
      for (const op of Lp.values()) Ip |= op;
      return (0, op.E)(pp, Ip & pp)
    }
  },
  37146: (pp, ip, cp) => {
    function Op(pp) {
      return pp.includes("Leaf Bed")
    }

    function op(pp) {
      return / Bed(?: Head)?(?:\||$)/.test(pp) && !Op(pp)
    }

    function Ip(pp) {
      return pp.includes(" Strongbed")
    }

    function Sp(pp) {
      return Op(pp) || op(pp) || Ip(pp)
    }
    cp.d(ip, {
      b: () => Sp,
      f: () => Op,
      g: () => Ip,
      h: () => op
    })
  },
  37142: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Yp
    });
    var Op = cp(37146),
      op = cp(9338);
    const Ip = [],
      Sp = [],
      xp = [],
      Lp = [];
    for (const Dp of Object.keys(op.h))(0, Op.f)(Dp) ? Ip.push(Dp) : (0, Op.h)(Dp) && Sp.push(Dp), (0, Op.g)(Dp) && xp.push(Dp), (Dp.includes(" Bed Head") || Dp.includes(" Strongbed Head")) && Lp.push(Dp);
    const Yp = {
      leafBeds: Ip,
      woolBeds: Sp,
      strongBeds: xp,
      beds: [...Ip, ...Sp, ...xp],
      bedHeads: Lp,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6605: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Sp,
      g: () => op,
      h: () => Lp,
      i: () => Ip,
      k: () => Yp,
      l: () => Op,
      m: () => xp
    });
    let Op = function(pp) {
        return pp[pp.DEFAULT = 0] = "DEFAULT", pp[pp.BOAT = 1] = "BOAT", pp[pp.GLIDER = 2] = "GLIDER", pp[pp.BALLOON = 3] = "BALLOON", pp[pp.SLEEPING = 4] = "SLEEPING", pp[pp.RIDING_MOB = 5] = "RIDING_MOB", pp[pp.CAR = 6] = "CAR", pp[pp.HOVERCRAFT = 7] = "HOVERCRAFT", pp
      }({}),
      op = function(pp) {
        return pp[pp.WOOD = 0] = "WOOD", pp[pp.OBSIDIAN = 1] = "OBSIDIAN", pp[pp.SPEED = 2] = "SPEED", pp
      }({}),
      Ip = function(pp) {
        return pp[pp.WOOD = 0] = "WOOD", pp[pp.IRON = 1] = "IRON", pp[pp.GOLD = 2] = "GOLD", pp[pp.DIAMOND = 3] = "DIAMOND", pp
      }({}),
      Sp = function(pp) {
        return pp[pp.YELLOW = 0] = "YELLOW", pp[pp.WHITE = 1] = "WHITE", pp[pp.RED = 2] = "RED", pp[pp.PURPLE = 3] = "PURPLE", pp[pp.PINK = 4] = "PINK", pp[pp.ORANGE = 5] = "ORANGE", pp[pp.MAGENTA = 6] = "MAGENTA", pp[pp.LIME = 7] = "LIME", pp[pp.LIGHT_GRAY = 8] = "LIGHT_GRAY", pp[pp.LIGHT_BLUE = 9] = "LIGHT_BLUE", pp[pp.GREEN = 10] = "GREEN", pp[pp.GRAY = 11] = "GRAY", pp[pp.CYAN = 12] = "CYAN", pp[pp.BROWN = 13] = "BROWN", pp[pp.BLUE = 14] = "BLUE", pp[pp.BLACK = 15] = "BLACK", pp
      }({}),
      xp = function(pp) {
        return pp[pp.ROTATION_1 = 0] = "ROTATION_1", pp[pp.ROTATION_2 = 1] = "ROTATION_2", pp[pp.ROTATION_3 = 2] = "ROTATION_3", pp[pp.ROTATION_4 = 3] = "ROTATION_4", pp
      }({}),
      Lp = function(pp) {
        return pp[pp.KART = 0] = "KART", pp[pp.OFF_ROADER = 1] = "OFF_ROADER", pp[pp.CAR = 2] = "CAR", pp[pp.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", pp[pp.ARMORED_CAR = 4] = "ARMORED_CAR", pp[pp.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", pp[pp.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", pp[pp.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", pp
      }({});
    Op.DEFAULT, Op.BOAT, op.SPEED, Op.GLIDER, Ip.DIAMOND, Op.BALLOON, Sp.BLACK, Op.SLEEPING, xp.ROTATION_4, Op.RIDING_MOB, Op.CAR, Lp.MOONSTONE_MINING_DRILL, Op.HOVERCRAFT;
    let Yp = function(pp) {
      return pp[pp.NORMAL = 0] = "NORMAL", pp[pp.GLIDING = 1] = "GLIDING", pp[pp.FLOATING = 2] = "FLOATING", pp
    }({})
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);