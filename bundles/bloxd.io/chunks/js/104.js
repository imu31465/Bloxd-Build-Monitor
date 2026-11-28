export const id = 104;
export const ids = [104];
export const modules = {
  42214: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      startWasmPadGameplay: () => vb
    });
    Mb(42222);
    var eb = Mb(42230),
      Hb = Mb(42249),
      pb = Mb(2167),
      Vb = Mb(42253),
      gb = Mb(5685),
      lb = Mb(5672),
      Lb = Mb(42258),
      Ib = Mb(42263),
      Ob = Mb(5701),
      Ub = Mb(42330),
      tb = Mb(3479),
      Cb = Mb(10183),
      Eb = Mb(42236),
      Fb = Mb(10160),
      Bb = Mb(40427);
    const sb = bb => {
        const wb = Ob.c.indexOf(bb);
        if (wb < 0) throw new Error(`No core action "${bb}"`);
        return wb
      },
      mb = sb("primary-fire"),
      hb = sb("alt-fire"),
      zb = sb("mid-fire"),
      Xb = sb("jump"),
      xb = sb("ReloadGun"),
      jb = sb("SwapCameraZoom"),
      Kb = sb("Zoom"),
      rb = sb("TouchAction1"),
      Rb = {
        SpecialAction1: sb("SpecialAction1"),
        SpecialAction2: sb("SpecialAction2")
      },
      Db = (bb, wb) => {
        (0, tb.p)(gb.O.PadAction, bb, 0, 0, (0, tb.o)(wb, performance.now()))
      },
      cb = bb => {
        Db(bb, Vb.rd.Down)
      },
      Yb = bb => {
        Db(bb, 0)
      },
      Zb = bb => {
        cb(bb), Yb(bb)
      },
      fb = () => {
        const bb = (0, Ib.m)();
        return null !== bb && void 0 !== bb && bb.isCoreRunning ? bb : null
      },
      Ab = bb => Vb.q.playerFlags(bb.api.apiView, 0),
      Wb = bb => null !== bb && Vb.q.targetBlockId(bb.api.apiView, 0) !== Vb.Tc,
      Jb = () => {
        const bb = (0, Cb.c)(),
          wb = new Eb.b;
        let Mb = !1;
        const eb = (bb, wb) => {
            (0, tb.p)(gb.O.PadLook, Vb.wd.Rate, bb, wb, 0)
          },
          Hb = () => {
            Mb = !1, wb.reset(), eb(0, 0)
          };
        return {
          update: (Hb, pb, lb) => {
            Mb || (bb.discardPending(), Mb = !0);
            const Lb = (0, Eb.s)(wb, Hb, pb, lb, performance.now());
            eb(Lb.yawRadPerSec, Lb.pitchRadPerSec);
            const Ib = bb.drainLookDelta();
            0 === Ib.DW && 0 === Ib.cW || (0, tb.p)(gb.O.PadLook, Vb.wd.Gyro, Ib.DW, Ib.cW, 0)
          },
          release: Hb,
          uninstall: Hb
        }
      },
      Sb = () => {
        const bb = fb();
        return null !== bb && 0 !== (Ab(bb) & Vb.Ad.PadSneakToggled)
      },
      Nb = () => {
        const bb = (bb => {
          const wb = bb => function() {
            return (0, Ub.d)(), bb(...arguments)
          };
          return {
            primaryFireDown: wb((bb => (Db(mb, Vb.rd.Down | (bb ? Vb.rd.Repeat : 0)), 0))),
            primaryFireUp: wb((() => {
              Yb(mb)
            })),
            altFireDown: wb((() => (cb(hb), 0))),
            altFireUp: wb((() => {
              Yb(hb)
            })),
            jumpDown: wb((() => {
              Zb(Xb)
            })),
            specialActionDown: wb((bb => {
              cb(Rb[bb])
            })),
            specialActionUp: wb((bb => {
              Yb(Rb[bb])
            })),
            reloadGun: wb((() => {
              Zb(xb)
            })),
            dropItem: wb((bb => {
              Db(Vb.td.Drop, Vb.rd.Down | (bb ? Vb.rd.Stack : 0))
            })),
            swapCameraZoom: wb((() => {
              Zb(jb)
            })),
            zoom: wb((bb => {
              bb ? cb(Kb) : Yb(Kb)
            })),
            pickBlock: wb((() => (Zb(zb), Wb(bb()))))
          }
        })(fb);
        let wb = !1,
          Mb = null;
        const eb = () => {
          var bb;
          null === (bb = Mb) || void 0 === bb || bb(), Mb = null
        };
        return {
          bodies: () => bb,
          look: Jb(),
          move: (bb, Mb) => {
            var Hb;
            eb();
            const {
              bits: pb,
              flips: gb
            } = (bb => {
              if (null === bb) return {
                bits: Vb.vd.Peek,
                flips: 0
              };
              const wb = bb.sneakHeld ? Vb.vd.SneakHeld : 0;
              return "hold" === bb.mode ? {
                bits: wb | Vb.vd.SneakHoldMode,
                flips: bb.sneakTogglePressed ? 1 : 0
              } : {
                bits: wb,
                flips: bb.sneakPressed || bb.sneakTogglePressed ? 1 : 0
              }
            })(Mb);
            null !== (Hb = fb()) && void 0 !== Hb && Hb.padMove(bb.x, bb.y, bb.magnitude, bb.headingOffset, (bb => Vb.vd.Active | (bb.jumpHeld ? Vb.vd.JumpHeld : 0) | (bb.jumpPressed ? Vb.vd.JumpPressed : 0) | (bb.running ? Vb.vd.Running : 0) | (bb.sprintHeld ? Vb.vd.SprintHeld : 0))(bb) | pb, gb) && (wb = !0), (0, Fb.c)(Sb())
          },
          stopMoving: () => {
            var bb;
            wb && (wb = !(null !== (bb = fb()) && void 0 !== bb && bb.padMove(0, 0, 0, 0, 0, 0)), eb(), Mb = (0, lb.x)((() => {
              eb(), (0, Fb.c)(Sb())
            })))
          },
          uninstall: eb,
          deviceChanged: bb => {
            var Mb;
            "touch" === bb ? ((0, Fb.c)(!1), null !== (Mb = fb()) && void 0 !== Mb && Mb.padMove(0, 0, 0, 0, Vb.vd.EndToggle, 0) && (wb = !1)) : "gamepad" === bb && (0, Fb.c)(Sb())
          },
          hasPlayer: () => null !== fb(),
          isPlayerDead: () => {
            var bb;
            return !1 === (null === (bb = fb()) || void 0 === bb ? void 0 : bb.localPlayerAlive())
          },
          isReplayMode: () => {
            const bb = fb();
            return null !== bb && 0 !== (Ab(bb) & Vb.Ad.Replay)
          },
          isFreeCameraOn: () => {
            const bb = fb();
            return null !== bb && 0 !== (Ab(bb) & Vb.Ad.FreeCam)
          },
          targetsBlock: () => Wb(fb()),
          selectedSlotEmpty: () => {
            var bb;
            return !(null !== (bb = fb()) && void 0 !== bb && bb.items.dg())
          },
          pickBlockAllowed: () => !!pb.c.get("creative") && !!pb.c.get("canPickBlocks"),
          zoomAllowed: () => !!pb.c.get("canUseZoomKey"),
          scrollHotbar: bb => {
            Db(Vb.td.Hotbar, Vb.rd.Down | (bb > 0 ? Vb.rd.Next : 0))
          },
          hasFullInventory: Lb.n,
          hasLobbyTab: () => (0, Bb.b)({
            lobbyLeaderboardInfo: pb.c.get("lobbyLeaderboardInfo"),
            lobbyManage: pb.c.get("lobbyManage")
          }),
          contextActionInputs: () => {
            var bb, wb, Mb, eb;
            const Hb = fb();
            return {
              holdingGun: !1 !== (null === Hb || void 0 === Hb ? void 0 : Hb.localPlayerAlive()) && "Gun" === (null === Hb || void 0 === Hb || null === (bb = Hb.items.dg()) || void 0 === bb || null === (wb = bb.typeObj) || void 0 === wb ? void 0 : wb.type),
              customButtons: null !== (Mb = pb.c.get("customButtons")) && void 0 !== Mb ? Mb : null,
              touchscreenActionButton: null !== (eb = pb.c.get("touchscreenActionButton")) && void 0 !== eb ? eb : null
            }
          },
          pressTouchButton: bb => {
            bb ? cb(rb) : Yb(rb)
          }
        }
      },
      vb = () => {
        const bb = (0, Hb.b)(Nb()),
          wb = (0, eb.d)(),
          Mb = null;
        return () => {
          bb(), wb(), null === Mb || void 0 === Mb || Mb()
        }
      }
  },
  5672: (bb, wb, Mb) => {
    Mb.d(wb, {
      A: () => Rb,
      E: () => Db,
      I: () => sb,
      K: () => Vb,
      O: () => gb,
      R: () => Kb,
      b: () => jb,
      f: () => hb,
      i: () => Yb,
      l: () => cb,
      m: () => Bb,
      o: () => Xb,
      s: () => mb,
      w: () => zb,
      x: () => rb
    });
    var eb = Mb(5675);
    const Hb = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let pb = Hb;

    function Vb(bb) {
      pb = null !== bb && void 0 !== bb ? bb : Hb
    }

    function gb() {
      return pb
    }
    const lb = new Set,
      Lb = new Set;
    let Ib = -1;
    const Ob = new Set,
      Ub = new Set;
    let tb = 0,
      Cb = 0;
    const Eb = new Set,
      Fb = new Set;

    function Bb(bb) {
      return lb.add(bb), () => {
        lb.delete(bb)
      }
    }

    function sb(bb, wb) {
      for (const eb of lb) try {
        eb(bb)
      } catch (Mb) {
        wb(Mb)
      }
    }

    function mb(bb) {
      return Lb.add(bb), () => {
        Lb.delete(bb)
      }
    }

    function hb(bb, wb) {
      const Mb = Ib < 0 ? 0 : bb - Ib;
      Ib = bb;
      for (const Hb of Lb) try {
        Hb(Mb)
      } catch (eb) {
        wb(eb)
      }
    }

    function zb(bb) {
      return Ob.add(bb), () => {
        Ob.delete(bb)
      }
    }

    function Xb(bb) {
      return Ub.add(bb), () => {
        Ub.delete(bb)
      }
    }
    let xb = 0;

    function jb(bb) {
      xb += bb
    }

    function Kb() {
      const bb = xb;
      return xb = 0, bb
    }

    function rb(bb) {
      return Eb.add(bb), () => {
        Eb.delete(bb)
      }
    }

    function Rb(bb) {
      return Fb.add(bb), () => {
        Fb.delete(bb)
      }
    }

    function Db() {
      tb = 0, Cb = 0, Ib = -1
    }

    function cb(bb, wb) {
      if ("paced" === bb) return Cb += wb, null;
      if ("drawn" !== bb && "skipped" !== bb) return null;
      const Mb = wb + Cb;
      return Cb = 0, Mb
    }

    function Yb(bb, wb, Mb, Hb) {
      const pb = (0, eb.g)(wb),
        Vb = bb > 0 ? performance.now() : 0;
      for (let eb = 0; eb < bb; eb++)
        for (const bb of Eb) try {
          bb()
        } catch (gb) {
          Hb(gb)
        }
      if (bb > 0 && jb(performance.now() - Vb), null !== Mb) {
        for (const bb of Ob) try {
          bb(Mb)
        } catch (gb) {
          Hb(gb)
        }
        tb += Mb
      }
      if ("drawn" === wb) {
        const bb = tb;
        tb = 0;
        for (const wb of Ub) try {
          wb(bb)
        } catch (gb) {
          Hb(gb)
        }
      }
      for (const eb of Fb) try {
        eb(bb, pb)
      } catch (gb) {
        Hb(gb)
      }
    }
  },
  5701: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Hb,
      d: () => pb,
      h: () => Vb,
      k: () => eb,
      o: () => gb
    });
    const eb = {
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
      Hb = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      pb = {
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
      Vb = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        Zoom: [191],
        "primary-fire": [195],
        "alt-fire": [196]
      },
      gb = [16]
  },
  42330: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Vb,
      e: () => pb,
      i: () => Hb
    });
    let eb = null;

    function Hb(bb) {
      eb = bb
    }

    function pb(bb) {
      eb === bb && (eb = null)
    }

    function Vb() {
      var bb;
      null === (bb = eb) || void 0 === bb || bb()
    }
  },
  5706: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => gb,
      f: () => Vb,
      h: () => Lb
    });
    var eb = Mb(3470),
      Hb = Mb(3479);
    const pb = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function Vb(bb) {
      return bb instanceof HTMLElement && (!!(bb.isContentEditable || bb instanceof HTMLTextAreaElement || bb instanceof HTMLSelectElement) || bb instanceof HTMLInputElement && !pb.has(bb.type))
    }

    function gb(bb) {
      let wb = null;
      const Mb = Mb => {
          const Hb = Vb(Mb);
          Hb !== wb && (wb = Hb, bb(eb.h.UiCapture, eb.y.Keyboard, 0, 0, Hb ? eb.y.Keyboard : 0))
        },
        Hb = bb => {
          Mb(bb.target)
        },
        pb = bb => {
          Mb(bb.relatedTarget)
        },
        gb = () => {
          Mb(document.activeElement)
        },
        lb = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", Hb, lb), document.addEventListener("focusout", pb, lb), document.addEventListener("keydown", gb, lb), Mb(document.activeElement), () => {
        document.removeEventListener("focusin", Hb, lb), document.removeEventListener("focusout", pb, lb), document.removeEventListener("keydown", gb, lb)
      }
    }
    const lb = new Map;

    function Lb(bb, wb) {
      var Mb;
      let eb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      lb.set(eb, (null !== (Mb = lb.get(eb)) && void 0 !== Mb ? Mb : 0) & ~bb | wb & bb);
      let pb = 0;
      for (const Hb of lb.values()) pb |= Hb;
      return (0, Hb.u)(bb, pb & bb)
    }
  },
  38145: (bb, wb, Mb) => {
    function eb(bb) {
      return bb.includes("Leaf Bed")
    }

    function Hb(bb) {
      return / Bed(?: Head)?(?:\||$)/.test(bb) && !eb(bb)
    }

    function pb(bb) {
      return bb.includes(" Strongbed")
    }

    function Vb(bb) {
      return eb(bb) || Hb(bb) || pb(bb)
    }
    Mb.d(wb, {
      e: () => Vb,
      f: () => eb,
      g: () => pb,
      i: () => Hb
    })
  },
  38139: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Lb
    });
    var eb = Mb(38145),
      Hb = Mb(5868);
    const pb = [],
      Vb = [],
      gb = [],
      lb = [];
    for (const Ib of Object.keys(Hb.l))(0, eb.f)(Ib) ? pb.push(Ib) : (0, eb.i)(Ib) && Vb.push(Ib), (0, eb.g)(Ib) && gb.push(Ib), (Ib.includes(" Bed Head") || Ib.includes(" Strongbed Head")) && lb.push(Ib);
    const Lb = {
      leafBeds: pb,
      woolBeds: Vb,
      strongBeds: gb,
      beds: [...pb, ...Vb, ...gb],
      bedHeads: lb,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  7634: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Vb,
      h: () => Hb,
      j: () => lb,
      n: () => pb,
      p: () => Lb,
      r: () => eb,
      t: () => gb
    });
    let eb = function(bb) {
        return bb[bb.DEFAULT = 0] = "DEFAULT", bb[bb.BOAT = 1] = "BOAT", bb[bb.GLIDER = 2] = "GLIDER", bb[bb.BALLOON = 3] = "BALLOON", bb[bb.SLEEPING = 4] = "SLEEPING", bb[bb.RIDING_MOB = 5] = "RIDING_MOB", bb[bb.CAR = 6] = "CAR", bb[bb.HOVERCRAFT = 7] = "HOVERCRAFT", bb
      }({}),
      Hb = function(bb) {
        return bb[bb.WOOD = 0] = "WOOD", bb[bb.OBSIDIAN = 1] = "OBSIDIAN", bb[bb.SPEED = 2] = "SPEED", bb
      }({}),
      pb = function(bb) {
        return bb[bb.WOOD = 0] = "WOOD", bb[bb.IRON = 1] = "IRON", bb[bb.GOLD = 2] = "GOLD", bb[bb.DIAMOND = 3] = "DIAMOND", bb
      }({}),
      Vb = function(bb) {
        return bb[bb.YELLOW = 0] = "YELLOW", bb[bb.WHITE = 1] = "WHITE", bb[bb.RED = 2] = "RED", bb[bb.PURPLE = 3] = "PURPLE", bb[bb.PINK = 4] = "PINK", bb[bb.ORANGE = 5] = "ORANGE", bb[bb.MAGENTA = 6] = "MAGENTA", bb[bb.LIME = 7] = "LIME", bb[bb.LIGHT_GRAY = 8] = "LIGHT_GRAY", bb[bb.LIGHT_BLUE = 9] = "LIGHT_BLUE", bb[bb.GREEN = 10] = "GREEN", bb[bb.GRAY = 11] = "GRAY", bb[bb.CYAN = 12] = "CYAN", bb[bb.BROWN = 13] = "BROWN", bb[bb.BLUE = 14] = "BLUE", bb[bb.BLACK = 15] = "BLACK", bb
      }({}),
      gb = function(bb) {
        return bb[bb.ROTATION_1 = 0] = "ROTATION_1", bb[bb.ROTATION_2 = 1] = "ROTATION_2", bb[bb.ROTATION_3 = 2] = "ROTATION_3", bb[bb.ROTATION_4 = 3] = "ROTATION_4", bb
      }({}),
      lb = function(bb) {
        return bb[bb.KART = 0] = "KART", bb[bb.OFF_ROADER = 1] = "OFF_ROADER", bb[bb.CAR = 2] = "CAR", bb[bb.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", bb[bb.ARMORED_CAR = 4] = "ARMORED_CAR", bb[bb.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", bb[bb.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", bb[bb.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", bb
      }({});
    eb.DEFAULT, eb.BOAT, Hb.SPEED, eb.GLIDER, pb.DIAMOND, eb.BALLOON, Vb.BLACK, eb.SLEEPING, gb.ROTATION_4, eb.RIDING_MOB, eb.CAR, lb.MOONSTONE_MINING_DRILL, eb.HOVERCRAFT;
    let Lb = function(bb) {
      return bb[bb.NORMAL = 0] = "NORMAL", bb[bb.GLIDING = 1] = "GLIDING", bb[bb.FLOATING = 2] = "FLOATING", bb
    }({})
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);