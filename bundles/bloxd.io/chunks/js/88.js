export const id = 88;
export const ids = [88];
export const modules = {
  40630: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      startWasmPadGameplay: () => Cm
    });
    fm(40633);
    var hm = fm(40639),
      Am = fm(40648),
      am = fm(1928),
      xm = fm(40663),
      wm = fm(4741),
      Dm = fm(4722),
      im = fm(40665),
      Rm = fm(40669),
      pm = fm(4755),
      Em = fm(40743),
      om = fm(2373),
      Om = fm(8792),
      Ym = fm(40641),
      qm = fm(8778),
      jm = fm(39237);
    const Vm = mm => {
        const Tm = pm.e.indexOf(mm);
        if (Tm < 0) throw new Error(`No core action "${mm}"`);
        return Tm
      },
      Im = Vm("primary-fire"),
      Km = Vm("alt-fire"),
      Qm = Vm("mid-fire"),
      nm = Vm("jump"),
      Jm = Vm("ReloadGun"),
      cm = Vm("SwapCameraZoom"),
      zm = Vm("TouchAction1"),
      Zm = {
        SpecialAction1: Vm("SpecialAction1"),
        SpecialAction2: Vm("SpecialAction2")
      },
      km = (mm, Tm) => {
        (0, om.u)(wm.M.PadAction, mm, 0, 0, (0, om.t)(Tm, performance.now()))
      },
      bm = mm => {
        km(mm, xm.Bd.Down)
      },
      Sm = mm => {
        km(mm, 0)
      },
      em = mm => {
        bm(mm), Sm(mm)
      },
      Nm = () => {
        const mm = (0, Rm.i)();
        return null !== mm && void 0 !== mm && mm.isCoreRunning ? mm : null
      },
      Gm = mm => xm.x.playerFlags(mm.api.apiView, 0),
      Xm = mm => null !== mm && xm.x.targetBlockId(mm.api.apiView, 0) !== xm.md,
      Pm = () => {
        const mm = (0, Om.b)(),
          Tm = new Ym.b;
        let fm = !1;
        const hm = (mm, Tm) => {
            (0, om.u)(wm.M.PadLook, xm.Id.Rate, mm, Tm, 0)
          },
          Am = () => {
            fm = !1, Tm.reset(), hm(0, 0)
          };
        return {
          update: (Am, am, Dm) => {
            fm || (mm.discardPending(), fm = !0);
            const im = (0, Ym.m)(Tm, Am, am, Dm, performance.now());
            hm(im.yawRadPerSec, im.pitchRadPerSec);
            const Rm = mm.drainLookDelta();
            0 === Rm.XN && 0 === Rm.yN || (0, om.u)(wm.M.PadLook, xm.Id.Gyro, Rm.XN, Rm.yN, 0)
          },
          release: Am,
          uninstall: Am
        }
      },
      Hm = () => {
        const mm = Nm();
        return null !== mm && 0 !== (Gm(mm) & xm.Od.PadSneakToggled)
      },
      ym = () => {
        const mm = (mm => {
          const Tm = mm => function() {
            return (0, Em.d)(), mm(...arguments)
          };
          return {
            primaryFireDown: Tm((() => (bm(Im), 0))),
            primaryFireUp: Tm((() => {
              Sm(Im)
            })),
            altFireDown: Tm((() => (bm(Km), 0))),
            altFireUp: Tm((() => {
              Sm(Km)
            })),
            jumpDown: Tm((() => {
              em(nm)
            })),
            specialActionDown: Tm((mm => {
              bm(Zm[mm])
            })),
            specialActionUp: Tm((mm => {
              Sm(Zm[mm])
            })),
            reloadGun: Tm((() => {
              em(Jm)
            })),
            dropItem: Tm((mm => {
              km(xm.Ed.Drop, xm.Bd.Down | (mm ? xm.Bd.Stack : 0))
            })),
            swapCameraZoom: Tm((() => {
              em(cm)
            })),
            pickBlock: Tm((() => (em(Qm), Xm(mm()))))
          }
        })(Nm);
        let Tm = !1,
          fm = null;
        const hm = () => {
          var mm;
          null === (mm = fm) || void 0 === mm || mm(), fm = null
        };
        return {
          bodies: () => mm,
          look: Pm(),
          move: (mm, fm) => {
            var Am;
            hm();
            const {
              bits: am,
              flips: wm
            } = (mm => {
              if (null === mm) return {
                bits: xm.Gd.Peek,
                flips: 0
              };
              const Tm = mm.sneakHeld ? xm.Gd.SneakHeld : 0;
              return "hold" === mm.mode ? {
                bits: Tm | xm.Gd.SneakHoldMode,
                flips: mm.sneakTogglePressed ? 1 : 0
              } : {
                bits: Tm,
                flips: mm.sneakPressed || mm.sneakTogglePressed ? 1 : 0
              }
            })(fm);
            null !== (Am = Nm()) && void 0 !== Am && Am.padMove(mm.x, mm.y, mm.magnitude, mm.headingOffset, (mm => xm.Gd.Active | (mm.jumpHeld ? xm.Gd.JumpHeld : 0) | (mm.jumpPressed ? xm.Gd.JumpPressed : 0) | (mm.running ? xm.Gd.Running : 0) | (mm.sprintHeld ? xm.Gd.SprintHeld : 0))(mm) | am, wm) && (Tm = !0), (0, qm.f)(Hm())
          },
          stopMoving: () => {
            var mm;
            Tm && (Tm = !(null !== (mm = Nm()) && void 0 !== mm && mm.padMove(0, 0, 0, 0, 0, 0)), hm(), fm = (0, Dm.y)((() => {
              hm(), (0, qm.f)(Hm())
            })))
          },
          uninstall: hm,
          deviceChanged: mm => {
            var fm;
            "touch" === mm ? ((0, qm.f)(!1), null !== (fm = Nm()) && void 0 !== fm && fm.padMove(0, 0, 0, 0, xm.Gd.EndToggle, 0) && (Tm = !1)) : "gamepad" === mm && (0, qm.f)(Hm())
          },
          hasPlayer: () => null !== Nm(),
          isPlayerDead: () => {
            var mm;
            return !1 === (null === (mm = Nm()) || void 0 === mm ? void 0 : mm.localPlayerAlive())
          },
          isReplayMode: () => {
            const mm = Nm();
            return null !== mm && 0 !== (Gm(mm) & xm.Od.Replay)
          },
          isFreeCameraOn: () => {
            const mm = Nm();
            return null !== mm && 0 !== (Gm(mm) & xm.Od.FreeCam)
          },
          targetsBlock: () => Xm(Nm()),
          selectedSlotEmpty: () => {
            var mm;
            return !(null !== (mm = Nm()) && void 0 !== mm && mm.items.ni())
          },
          pickBlockAllowed: () => !!am.b.get("creative") && !!am.b.get("canPickBlocks"),
          scrollHotbar: mm => {
            km(xm.Ed.Hotbar, xm.Bd.Down | (mm > 0 ? xm.Bd.Next : 0))
          },
          hasFullInventory: im.n,
          hasLobbyTab: () => (0, jm.c)({
            lobbyLeaderboardInfo: am.b.get("lobbyLeaderboardInfo"),
            lobbyManage: am.b.get("lobbyManage")
          }),
          contextActionInputs: () => {
            var mm, Tm, fm, hm;
            const Am = Nm();
            return {
              holdingGun: !1 !== (null === Am || void 0 === Am ? void 0 : Am.localPlayerAlive()) && "Gun" === (null === Am || void 0 === Am || null === (mm = Am.items.ni()) || void 0 === mm || null === (Tm = mm.typeObj) || void 0 === Tm ? void 0 : Tm.type),
              customButtons: null !== (fm = am.b.get("customButtons")) && void 0 !== fm ? fm : null,
              touchscreenActionButton: null !== (hm = am.b.get("touchscreenActionButton")) && void 0 !== hm ? hm : null
            }
          },
          pressTouchButton: mm => {
            mm ? bm(zm) : Sm(zm)
          }
        }
      },
      Cm = () => {
        const mm = (0, Am.b)(ym()),
          Tm = (0, hm.c)(),
          fm = null;
        return () => {
          mm(), Tm(), null === fm || void 0 === fm || fm()
        }
      }
  },
  4722: (mm, Tm, fm) => {
    fm.d(Tm, {
      B: () => bm,
      F: () => Vm,
      G: () => xm,
      J: () => wm,
      K: () => zm,
      d: () => cm,
      h: () => Km,
      j: () => em,
      m: () => Sm,
      p: () => jm,
      q: () => nm,
      s: () => Im,
      u: () => Qm,
      y: () => Zm,
      z: () => km
    });
    var hm = fm(4729);
    const Am = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let am = Am;

    function xm(mm) {
      am = null !== mm && void 0 !== mm ? mm : Am
    }

    function wm() {
      return am
    }
    const Dm = new Set,
      im = new Set;
    let Rm = -1;
    const pm = new Set,
      Em = new Set;
    let om = 0,
      Om = 0;
    const Ym = new Set,
      qm = new Set;

    function jm(mm) {
      return Dm.add(mm), () => {
        Dm.delete(mm)
      }
    }

    function Vm(mm, Tm) {
      for (const hm of Dm) try {
        hm(mm)
      } catch (fm) {
        Tm(fm)
      }
    }

    function Im(mm) {
      return im.add(mm), () => {
        im.delete(mm)
      }
    }

    function Km(mm, Tm) {
      const fm = Rm < 0 ? 0 : mm - Rm;
      Rm = mm;
      for (const Am of im) try {
        Am(fm)
      } catch (hm) {
        Tm(hm)
      }
    }

    function Qm(mm) {
      return pm.add(mm), () => {
        pm.delete(mm)
      }
    }

    function nm(mm) {
      return Em.add(mm), () => {
        Em.delete(mm)
      }
    }
    let Jm = 0;

    function cm(mm) {
      Jm += mm
    }

    function zm() {
      const mm = Jm;
      return Jm = 0, mm
    }

    function Zm(mm) {
      return Ym.add(mm), () => {
        Ym.delete(mm)
      }
    }

    function km(mm) {
      return qm.add(mm), () => {
        qm.delete(mm)
      }
    }

    function bm() {
      om = 0, Om = 0, Rm = -1
    }

    function Sm(mm, Tm) {
      if ("paced" === mm) return Om += Tm, null;
      if ("drawn" !== mm && "skipped" !== mm) return null;
      const fm = Tm + Om;
      return Om = 0, fm
    }

    function em(mm, Tm, fm, Am) {
      const am = (0, hm.f)(Tm),
        xm = mm > 0 ? performance.now() : 0;
      for (let hm = 0; hm < mm; hm++)
        for (const mm of Ym) try {
          mm()
        } catch (wm) {
          Am(wm)
        }
      if (mm > 0 && cm(performance.now() - xm), null !== fm) {
        for (const mm of pm) try {
          mm(fm)
        } catch (wm) {
          Am(wm)
        }
        om += fm
      }
      if ("drawn" === Tm) {
        const mm = om;
        om = 0;
        for (const Tm of Em) try {
          Tm(mm)
        } catch (wm) {
          Am(wm)
        }
      }
      for (const hm of qm) try {
        hm(mm, am)
      } catch (wm) {
        Am(wm)
      }
    }
  },
  4755: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Am,
      g: () => am,
      h: () => xm,
      i: () => hm,
      m: () => wm
    });
    const hm = {
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
      Am = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      am = {
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
      xm = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      wm = [16]
  },
  40743: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => xm,
      e: () => am,
      i: () => Am
    });
    let hm = null;

    function Am(mm) {
      hm = mm
    }

    function am(mm) {
      hm === mm && (hm = null)
    }

    function xm() {
      var mm;
      null === (mm = hm) || void 0 === mm || mm()
    }
  },
  4763: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => wm,
      f: () => xm,
      h: () => im
    });
    var hm = fm(2364),
      Am = fm(2373);
    const am = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function xm(mm) {
      return mm instanceof HTMLElement && (!!(mm.isContentEditable || mm instanceof HTMLTextAreaElement || mm instanceof HTMLSelectElement) || mm instanceof HTMLInputElement && !am.has(mm.type))
    }

    function wm(mm) {
      let Tm = null;
      const fm = fm => {
          const Am = xm(fm);
          Am !== Tm && (Tm = Am, mm(hm.i.UiCapture, hm.w.Keyboard, 0, 0, Am ? hm.w.Keyboard : 0))
        },
        Am = mm => {
          fm(mm.target)
        },
        am = mm => {
          fm(mm.relatedTarget)
        },
        wm = () => {
          fm(document.activeElement)
        },
        Dm = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", Am, Dm), document.addEventListener("focusout", am, Dm), document.addEventListener("keydown", wm, Dm), fm(document.activeElement), () => {
        document.removeEventListener("focusin", Am, Dm), document.removeEventListener("focusout", am, Dm), document.removeEventListener("keydown", wm, Dm)
      }
    }
    const Dm = new Map;

    function im(mm, Tm) {
      var fm;
      let hm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      Dm.set(hm, (null !== (fm = Dm.get(hm)) && void 0 !== fm ? fm : 0) & ~mm | Tm & mm);
      let am = 0;
      for (const Am of Dm.values()) am |= Am;
      return (0, Am.E)(mm, am & mm)
    }
  },
  37039: (mm, Tm, fm) => {
    function hm(mm) {
      return mm.includes("Leaf Bed")
    }

    function Am(mm) {
      return / Bed(?: Head)?(?:\||$)/.test(mm) && !hm(mm)
    }

    function am(mm) {
      return mm.includes(" Strongbed")
    }

    function xm(mm) {
      return hm(mm) || Am(mm) || am(mm)
    }
    fm.d(Tm, {
      b: () => xm,
      f: () => hm,
      j: () => am,
      l: () => Am
    })
  },
  37032: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => im
    });
    var hm = fm(37039),
      Am = fm(9141);
    const am = [],
      xm = [],
      wm = [],
      Dm = [];
    for (const Rm of Object.keys(Am.m))(0, hm.f)(Rm) ? am.push(Rm) : (0, hm.l)(Rm) && xm.push(Rm), (0, hm.j)(Rm) && wm.push(Rm), (Rm.includes(" Bed Head") || Rm.includes(" Strongbed Head")) && Dm.push(Rm);
    const im = {
      leafBeds: am,
      woolBeds: xm,
      strongBeds: wm,
      beds: [...am, ...xm, ...wm],
      bedHeads: Dm,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6451: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => xm,
      c: () => Am,
      g: () => Dm,
      i: () => am,
      l: () => im,
      m: () => hm,
      n: () => wm
    });
    let hm = function(mm) {
        return mm[mm.DEFAULT = 0] = "DEFAULT", mm[mm.BOAT = 1] = "BOAT", mm[mm.GLIDER = 2] = "GLIDER", mm[mm.BALLOON = 3] = "BALLOON", mm[mm.SLEEPING = 4] = "SLEEPING", mm[mm.RIDING_MOB = 5] = "RIDING_MOB", mm[mm.CAR = 6] = "CAR", mm[mm.HOVERCRAFT = 7] = "HOVERCRAFT", mm
      }({}),
      Am = function(mm) {
        return mm[mm.WOOD = 0] = "WOOD", mm[mm.OBSIDIAN = 1] = "OBSIDIAN", mm[mm.SPEED = 2] = "SPEED", mm
      }({}),
      am = function(mm) {
        return mm[mm.WOOD = 0] = "WOOD", mm[mm.IRON = 1] = "IRON", mm[mm.GOLD = 2] = "GOLD", mm[mm.DIAMOND = 3] = "DIAMOND", mm
      }({}),
      xm = function(mm) {
        return mm[mm.YELLOW = 0] = "YELLOW", mm[mm.WHITE = 1] = "WHITE", mm[mm.RED = 2] = "RED", mm[mm.PURPLE = 3] = "PURPLE", mm[mm.PINK = 4] = "PINK", mm[mm.ORANGE = 5] = "ORANGE", mm[mm.MAGENTA = 6] = "MAGENTA", mm[mm.LIME = 7] = "LIME", mm[mm.LIGHT_GRAY = 8] = "LIGHT_GRAY", mm[mm.LIGHT_BLUE = 9] = "LIGHT_BLUE", mm[mm.GREEN = 10] = "GREEN", mm[mm.GRAY = 11] = "GRAY", mm[mm.CYAN = 12] = "CYAN", mm[mm.BROWN = 13] = "BROWN", mm[mm.BLUE = 14] = "BLUE", mm[mm.BLACK = 15] = "BLACK", mm
      }({}),
      wm = function(mm) {
        return mm[mm.ROTATION_1 = 0] = "ROTATION_1", mm[mm.ROTATION_2 = 1] = "ROTATION_2", mm[mm.ROTATION_3 = 2] = "ROTATION_3", mm[mm.ROTATION_4 = 3] = "ROTATION_4", mm
      }({}),
      Dm = function(mm) {
        return mm[mm.KART = 0] = "KART", mm[mm.OFF_ROADER = 1] = "OFF_ROADER", mm[mm.CAR = 2] = "CAR", mm[mm.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", mm[mm.ARMORED_CAR = 4] = "ARMORED_CAR", mm[mm.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", mm[mm.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", mm[mm.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", mm
      }({});
    hm.DEFAULT, hm.BOAT, Am.SPEED, hm.GLIDER, am.DIAMOND, hm.BALLOON, xm.BLACK, hm.SLEEPING, wm.ROTATION_4, hm.RIDING_MOB, hm.CAR, Dm.MOONSTONE_MINING_DRILL, hm.HOVERCRAFT;
    let im = function(mm) {
      return mm[mm.NORMAL = 0] = "NORMAL", mm[mm.GLIDING = 1] = "GLIDING", mm[mm.FLOATING = 2] = "FLOATING", mm
    }({})
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);