export const id = 89;
export const ids = [89];
export const modules = {
  40719: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      startWasmPadGameplay: () => zt
    });
    Vt(40724);
    var Ot = Vt(40730),
      qt = Vt(40745),
      Dt = Vt(2043),
      mt = Vt(40761),
      dt = Vt(4963),
      jt = Vt(4951),
      Ht = Vt(40767),
      Xt = Vt(40769),
      Qt = Vt(4974),
      lt = Vt(40858),
      Et = Vt(2465),
      ft = Vt(9068),
      wt = Vt(40735),
      yt = Vt(9052),
      Nt = Vt(39316);
    const Mt = tt => {
        const et = Qt.c.indexOf(tt);
        if (et < 0) throw new Error(`No core action "${tt}"`);
        return et
      },
      bt = Mt("primary-fire"),
      Jt = Mt("alt-fire"),
      Ct = Mt("mid-fire"),
      ut = Mt("jump"),
      Kt = Mt("ReloadGun"),
      ht = Mt("SwapCameraZoom"),
      vt = Mt("TouchAction1"),
      Wt = {
        SpecialAction1: Mt("SpecialAction1"),
        SpecialAction2: Mt("SpecialAction2")
      },
      St = (tt, et) => {
        (0, Et.u)(dt.L.PadAction, tt, 0, 0, (0, Et.r)(et, performance.now()))
      },
      ct = tt => {
        St(tt, mt.Dd.Down)
      },
      Rt = tt => {
        St(tt, 0)
      },
      It = tt => {
        ct(tt), Rt(tt)
      },
      Pt = () => {
        const tt = (0, Xt.g)();
        return null !== tt && void 0 !== tt && tt.isCoreRunning ? tt : null
      },
      Zt = tt => mt.x.playerFlags(tt.api.apiView, 0),
      Lt = tt => null !== tt && mt.x.targetBlockId(tt.api.apiView, 0) !== mt.ld,
      Ft = () => {
        const tt = (0, ft.c)(),
          et = new wt.b;
        let Vt = !1;
        const Ot = (tt, et) => {
            (0, Et.u)(dt.L.PadLook, mt.Jd.Rate, tt, et, 0)
          },
          qt = () => {
            Vt = !1, et.reset(), Ot(0, 0)
          };
        return {
          update: (qt, Dt, jt) => {
            Vt || (tt.discardPending(), Vt = !0);
            const Ht = (0, wt.k)(et, qt, Dt, jt, performance.now());
            Ot(Ht.yawRadPerSec, Ht.pitchRadPerSec);
            const Xt = tt.drainLookDelta();
            0 === Xt.JR && 0 === Xt.uR || (0, Et.u)(dt.L.PadLook, mt.Jd.Gyro, Xt.JR, Xt.uR, 0)
          },
          release: qt,
          uninstall: qt
        }
      },
      kt = () => {
        const tt = Pt();
        return null !== tt && 0 !== (Zt(tt) & mt.Pd.PadSneakToggled)
      },
      Gt = () => {
        const tt = (tt => {
          const et = tt => function() {
            return (0, lt.e)(), tt(...arguments)
          };
          return {
            primaryFireDown: et((tt => (St(bt, mt.Dd.Down | (tt ? mt.Dd.Repeat : 0)), 0))),
            primaryFireUp: et((() => {
              Rt(bt)
            })),
            altFireDown: et((() => (ct(Jt), 0))),
            altFireUp: et((() => {
              Rt(Jt)
            })),
            jumpDown: et((() => {
              It(ut)
            })),
            specialActionDown: et((tt => {
              ct(Wt[tt])
            })),
            specialActionUp: et((tt => {
              Rt(Wt[tt])
            })),
            reloadGun: et((() => {
              It(Kt)
            })),
            dropItem: et((tt => {
              St(mt.Ed.Drop, mt.Dd.Down | (tt ? mt.Dd.Stack : 0))
            })),
            swapCameraZoom: et((() => {
              It(ht)
            })),
            pickBlock: et((() => (It(Ct), Lt(tt()))))
          }
        })(Pt);
        let et = !1,
          Vt = null;
        const Ot = () => {
          var tt;
          null === (tt = Vt) || void 0 === tt || tt(), Vt = null
        };
        return {
          bodies: () => tt,
          look: Ft(),
          move: (tt, Vt) => {
            var qt;
            Ot();
            const {
              bits: Dt,
              flips: dt
            } = (tt => {
              if (null === tt) return {
                bits: mt.Hd.Peek,
                flips: 0
              };
              const et = tt.sneakHeld ? mt.Hd.SneakHeld : 0;
              return "hold" === tt.mode ? {
                bits: et | mt.Hd.SneakHoldMode,
                flips: tt.sneakTogglePressed ? 1 : 0
              } : {
                bits: et,
                flips: tt.sneakPressed || tt.sneakTogglePressed ? 1 : 0
              }
            })(Vt);
            null !== (qt = Pt()) && void 0 !== qt && qt.padMove(tt.x, tt.y, tt.magnitude, tt.headingOffset, (tt => mt.Hd.Active | (tt.jumpHeld ? mt.Hd.JumpHeld : 0) | (tt.jumpPressed ? mt.Hd.JumpPressed : 0) | (tt.running ? mt.Hd.Running : 0) | (tt.sprintHeld ? mt.Hd.SprintHeld : 0))(tt) | Dt, dt) && (et = !0), (0, yt.d)(kt())
          },
          stopMoving: () => {
            var tt;
            et && (et = !(null !== (tt = Pt()) && void 0 !== tt && tt.padMove(0, 0, 0, 0, 0, 0)), Ot(), Vt = (0, jt.p)((() => {
              Ot(), (0, yt.d)(kt())
            })))
          },
          uninstall: Ot,
          deviceChanged: tt => {
            var Vt;
            "touch" === tt ? ((0, yt.d)(!1), null !== (Vt = Pt()) && void 0 !== Vt && Vt.padMove(0, 0, 0, 0, mt.Hd.EndToggle, 0) && (et = !1)) : "gamepad" === tt && (0, yt.d)(kt())
          },
          hasPlayer: () => null !== Pt(),
          isPlayerDead: () => {
            var tt;
            return !1 === (null === (tt = Pt()) || void 0 === tt ? void 0 : tt.localPlayerAlive())
          },
          isReplayMode: () => {
            const tt = Pt();
            return null !== tt && 0 !== (Zt(tt) & mt.Pd.Replay)
          },
          isFreeCameraOn: () => {
            const tt = Pt();
            return null !== tt && 0 !== (Zt(tt) & mt.Pd.FreeCam)
          },
          targetsBlock: () => Lt(Pt()),
          selectedSlotEmpty: () => {
            var tt;
            return !(null !== (tt = Pt()) && void 0 !== tt && tt.items.Pd())
          },
          pickBlockAllowed: () => !!Dt.b.get("creative") && !!Dt.b.get("canPickBlocks"),
          scrollHotbar: tt => {
            St(mt.Ed.Hotbar, mt.Dd.Down | (tt > 0 ? mt.Dd.Next : 0))
          },
          hasFullInventory: Ht.n,
          hasLobbyTab: () => (0, Nt.d)({
            lobbyLeaderboardInfo: Dt.b.get("lobbyLeaderboardInfo"),
            lobbyManage: Dt.b.get("lobbyManage")
          }),
          contextActionInputs: () => {
            var tt, et, Vt, Ot;
            const qt = Pt();
            return {
              holdingGun: !1 !== (null === qt || void 0 === qt ? void 0 : qt.localPlayerAlive()) && "Gun" === (null === qt || void 0 === qt || null === (tt = qt.items.Pd()) || void 0 === tt || null === (et = tt.typeObj) || void 0 === et ? void 0 : et.type),
              customButtons: null !== (Vt = Dt.b.get("customButtons")) && void 0 !== Vt ? Vt : null,
              touchscreenActionButton: null !== (Ot = Dt.b.get("touchscreenActionButton")) && void 0 !== Ot ? Ot : null
            }
          },
          pressTouchButton: tt => {
            tt ? ct(vt) : Rt(vt)
          }
        }
      },
      zt = () => {
        const tt = (0, qt.d)(Gt()),
          et = (0, Ot.b)(),
          Vt = null;
        return () => {
          tt(), et(), null === Vt || void 0 === Vt || Vt()
        }
      }
  },
  4951: (tt, et, Vt) => {
    Vt.d(et, {
      A: () => mt,
      C: () => dt,
      E: () => vt,
      c: () => ht,
      d: () => Jt,
      h: () => It,
      i: () => Rt,
      j: () => Nt,
      k: () => ut,
      m: () => bt,
      o: () => Ct,
      p: () => Wt,
      t: () => St,
      x: () => ct,
      z: () => Mt
    });
    var Ot = Vt(4958);
    const qt = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let Dt = qt;

    function mt(tt) {
      Dt = null !== tt && void 0 !== tt ? tt : qt
    }

    function dt() {
      return Dt
    }
    const jt = new Set,
      Ht = new Set;
    let Xt = -1;
    const Qt = new Set,
      lt = new Set;
    let Et = 0,
      ft = 0;
    const wt = new Set,
      yt = new Set;

    function Nt(tt) {
      return jt.add(tt), () => {
        jt.delete(tt)
      }
    }

    function Mt(tt, et) {
      for (const Ot of jt) try {
        Ot(tt)
      } catch (Vt) {
        et(Vt)
      }
    }

    function bt(tt) {
      return Ht.add(tt), () => {
        Ht.delete(tt)
      }
    }

    function Jt(tt, et) {
      const Vt = Xt < 0 ? 0 : tt - Xt;
      Xt = tt;
      for (const qt of Ht) try {
        qt(Vt)
      } catch (Ot) {
        et(Ot)
      }
    }

    function Ct(tt) {
      return Qt.add(tt), () => {
        Qt.delete(tt)
      }
    }

    function ut(tt) {
      return lt.add(tt), () => {
        lt.delete(tt)
      }
    }
    let Kt = 0;

    function ht(tt) {
      Kt += tt
    }

    function vt() {
      const tt = Kt;
      return Kt = 0, tt
    }

    function Wt(tt) {
      return wt.add(tt), () => {
        wt.delete(tt)
      }
    }

    function St(tt) {
      return yt.add(tt), () => {
        yt.delete(tt)
      }
    }

    function ct() {
      Et = 0, ft = 0, Xt = -1
    }

    function Rt(tt, et) {
      if ("paced" === tt) return ft += et, null;
      if ("drawn" !== tt && "skipped" !== tt) return null;
      const Vt = et + ft;
      return ft = 0, Vt
    }

    function It(tt, et, Vt, qt) {
      const Dt = (0, Ot.f)(et),
        mt = tt > 0 ? performance.now() : 0;
      for (let Ot = 0; Ot < tt; Ot++)
        for (const tt of wt) try {
          tt()
        } catch (dt) {
          qt(dt)
        }
      if (tt > 0 && ht(performance.now() - mt), null !== Vt) {
        for (const tt of Qt) try {
          tt(Vt)
        } catch (dt) {
          qt(dt)
        }
        Et += Vt
      }
      if ("drawn" === et) {
        const tt = Et;
        Et = 0;
        for (const et of lt) try {
          et(tt)
        } catch (dt) {
          qt(dt)
        }
      }
      for (const Ot of yt) try {
        Ot(tt, Dt)
      } catch (dt) {
        qt(dt)
      }
    }
  },
  4974: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => qt,
      e: () => Dt,
      g: () => mt,
      h: () => Ot,
      i: () => dt
    });
    const Ot = {
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
      qt = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      Dt = {
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
      mt = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      dt = [16]
  },
  40858: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => mt,
      i: () => Dt,
      j: () => qt
    });
    let Ot = null;

    function qt(tt) {
      Ot = tt
    }

    function Dt(tt) {
      Ot === tt && (Ot = null)
    }

    function mt() {
      var tt;
      null === (tt = Ot) || void 0 === tt || tt()
    }
  },
  4980: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => dt,
      f: () => mt,
      g: () => Ht
    });
    var Ot = Vt(2458),
      qt = Vt(2465);
    const Dt = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function mt(tt) {
      return tt instanceof HTMLElement && (!!(tt.isContentEditable || tt instanceof HTMLTextAreaElement || tt instanceof HTMLSelectElement) || tt instanceof HTMLInputElement && !Dt.has(tt.type))
    }

    function dt(tt) {
      let et = null;
      const Vt = Vt => {
          const qt = mt(Vt);
          qt !== et && (et = qt, tt(Ot.g.UiCapture, Ot.u.Keyboard, 0, 0, qt ? Ot.u.Keyboard : 0))
        },
        qt = tt => {
          Vt(tt.target)
        },
        Dt = tt => {
          Vt(tt.relatedTarget)
        },
        dt = () => {
          Vt(document.activeElement)
        },
        jt = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", qt, jt), document.addEventListener("focusout", Dt, jt), document.addEventListener("keydown", dt, jt), Vt(document.activeElement), () => {
        document.removeEventListener("focusin", qt, jt), document.removeEventListener("focusout", Dt, jt), document.removeEventListener("keydown", dt, jt)
      }
    }
    const jt = new Map;

    function Ht(tt, et) {
      var Vt;
      let Ot = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      jt.set(Ot, (null !== (Vt = jt.get(Ot)) && void 0 !== Vt ? Vt : 0) & ~tt | et & tt);
      let Dt = 0;
      for (const qt of jt.values()) Dt |= qt;
      return (0, qt.A)(tt, Dt & tt)
    }
  },
  37172: (tt, et, Vt) => {
    function Ot(tt) {
      return tt.includes("Leaf Bed")
    }

    function qt(tt) {
      return / Bed(?: Head)?(?:\||$)/.test(tt) && !Ot(tt)
    }

    function Dt(tt) {
      return tt.includes(" Strongbed")
    }

    function mt(tt) {
      return Ot(tt) || qt(tt) || Dt(tt)
    }
    Vt.d(et, {
      e: () => mt,
      i: () => Ot,
      l: () => Dt,
      o: () => qt
    })
  },
  37164: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Ht
    });
    var Ot = Vt(37172),
      qt = Vt(9425);
    const Dt = [],
      mt = [],
      dt = [],
      jt = [];
    for (const Xt of Object.keys(qt.l))(0, Ot.i)(Xt) ? Dt.push(Xt) : (0, Ot.o)(Xt) && mt.push(Xt), (0, Ot.l)(Xt) && dt.push(Xt), (Xt.includes(" Bed Head") || Xt.includes(" Strongbed Head")) && jt.push(Xt);
    const Ht = {
      leafBeds: Dt,
      woolBeds: mt,
      strongBeds: dt,
      beds: [...Dt, ...mt, ...dt],
      bedHeads: jt,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6667: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => mt,
      e: () => qt,
      i: () => jt,
      j: () => Dt,
      m: () => Ht,
      n: () => Ot,
      q: () => dt
    });
    let Ot = function(tt) {
        return tt[tt.DEFAULT = 0] = "DEFAULT", tt[tt.BOAT = 1] = "BOAT", tt[tt.GLIDER = 2] = "GLIDER", tt[tt.BALLOON = 3] = "BALLOON", tt[tt.SLEEPING = 4] = "SLEEPING", tt[tt.RIDING_MOB = 5] = "RIDING_MOB", tt[tt.CAR = 6] = "CAR", tt[tt.HOVERCRAFT = 7] = "HOVERCRAFT", tt
      }({}),
      qt = function(tt) {
        return tt[tt.WOOD = 0] = "WOOD", tt[tt.OBSIDIAN = 1] = "OBSIDIAN", tt[tt.SPEED = 2] = "SPEED", tt
      }({}),
      Dt = function(tt) {
        return tt[tt.WOOD = 0] = "WOOD", tt[tt.IRON = 1] = "IRON", tt[tt.GOLD = 2] = "GOLD", tt[tt.DIAMOND = 3] = "DIAMOND", tt
      }({}),
      mt = function(tt) {
        return tt[tt.YELLOW = 0] = "YELLOW", tt[tt.WHITE = 1] = "WHITE", tt[tt.RED = 2] = "RED", tt[tt.PURPLE = 3] = "PURPLE", tt[tt.PINK = 4] = "PINK", tt[tt.ORANGE = 5] = "ORANGE", tt[tt.MAGENTA = 6] = "MAGENTA", tt[tt.LIME = 7] = "LIME", tt[tt.LIGHT_GRAY = 8] = "LIGHT_GRAY", tt[tt.LIGHT_BLUE = 9] = "LIGHT_BLUE", tt[tt.GREEN = 10] = "GREEN", tt[tt.GRAY = 11] = "GRAY", tt[tt.CYAN = 12] = "CYAN", tt[tt.BROWN = 13] = "BROWN", tt[tt.BLUE = 14] = "BLUE", tt[tt.BLACK = 15] = "BLACK", tt
      }({}),
      dt = function(tt) {
        return tt[tt.ROTATION_1 = 0] = "ROTATION_1", tt[tt.ROTATION_2 = 1] = "ROTATION_2", tt[tt.ROTATION_3 = 2] = "ROTATION_3", tt[tt.ROTATION_4 = 3] = "ROTATION_4", tt
      }({}),
      jt = function(tt) {
        return tt[tt.KART = 0] = "KART", tt[tt.OFF_ROADER = 1] = "OFF_ROADER", tt[tt.CAR = 2] = "CAR", tt[tt.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", tt[tt.ARMORED_CAR = 4] = "ARMORED_CAR", tt[tt.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", tt[tt.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", tt[tt.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", tt
      }({});
    Ot.DEFAULT, Ot.BOAT, qt.SPEED, Ot.GLIDER, Dt.DIAMOND, Ot.BALLOON, mt.BLACK, Ot.SLEEPING, dt.ROTATION_4, Ot.RIDING_MOB, Ot.CAR, jt.MOONSTONE_MINING_DRILL, Ot.HOVERCRAFT;
    let Ht = function(tt) {
      return tt[tt.NORMAL = 0] = "NORMAL", tt[tt.GLIDING = 1] = "GLIDING", tt[tt.FLOATING = 2] = "FLOATING", tt
    }({})
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);