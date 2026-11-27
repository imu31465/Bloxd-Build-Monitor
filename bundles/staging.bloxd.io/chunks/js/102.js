export const id = 102;
export const ids = [102];
export const modules = {
  41658: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      startWasmPadGameplay: () => Ce
    });
    He(41666);
    var ye = He(41670),
      be = He(41688),
      Me = He(2018),
      Ke = He(41694),
      Ue = He(5279),
      Fe = He(5262),
      Je = He(41702),
      oe = He(41704),
      Re = He(5286),
      ke = He(41766),
      qe = He(2495),
      fe = He(9584),
      Te = He(41679),
      pe = He(9558),
      Xe = He(39896);
    const ze = ee => {
        const ie = Re.d.indexOf(ee);
        if (ie < 0) throw new Error(`No core action "${ee}"`);
        return ie
      },
      Be = ze("primary-fire"),
      Ee = ze("alt-fire"),
      ge = ze("mid-fire"),
      Oe = ze("jump"),
      de = ze("ReloadGun"),
      We = ze("SwapCameraZoom"),
      te = ze("TouchAction1"),
      Ze = {
        SpecialAction1: ze("SpecialAction1"),
        SpecialAction2: ze("SpecialAction2")
      },
      we = (ee, ie) => {
        (0, qe.v)(Ue.J.PadAction, ee, 0, 0, (0, qe.s)(ie, performance.now()))
      },
      De = ee => {
        we(ee, Ke.Bd.Down)
      },
      Pe = ee => {
        we(ee, 0)
      },
      Ae = ee => {
        De(ee), Pe(ee)
      },
      Ye = () => {
        const ee = (0, oe.h)();
        return null !== ee && void 0 !== ee && ee.isCoreRunning ? ee : null
      },
      Ve = ee => Ke.v.playerFlags(ee.api.apiView, 0),
      ae = ee => null !== ee && Ke.v.targetBlockId(ee.api.apiView, 0) !== Ke.ad,
      ce = () => {
        const ee = (0, fe.d)(),
          ie = new Te.d;
        let He = !1;
        const ye = (ee, ie) => {
            (0, qe.v)(Ue.J.PadLook, Ke.Ld.Rate, ee, ie, 0)
          },
          be = () => {
            He = !1, ie.reset(), ye(0, 0)
          };
        return {
          update: (be, Me, Fe) => {
            He || (ee.discardPending(), He = !0);
            const Je = (0, Te.u)(ie, be, Me, Fe, performance.now());
            ye(Je.yawRadPerSec, Je.pitchRadPerSec);
            const oe = ee.drainLookDelta();
            0 === oe.XV && 0 === oe.zV || (0, qe.v)(Ue.J.PadLook, Ke.Ld.Gyro, oe.XV, oe.zV, 0)
          },
          release: be,
          uninstall: be
        }
      },
      xe = () => {
        const ee = Ye();
        return null !== ee && 0 !== (Ve(ee) & Ke.Pd.PadSneakToggled)
      },
      Le = () => {
        const ee = (ee => {
          const ie = ee => function() {
            return (0, ke.c)(), ee(...arguments)
          };
          return {
            primaryFireDown: ie((ee => (we(Be, Ke.Bd.Down | (ee ? Ke.Bd.Repeat : 0)), 0))),
            primaryFireUp: ie((() => {
              Pe(Be)
            })),
            altFireDown: ie((() => (De(Ee), 0))),
            altFireUp: ie((() => {
              Pe(Ee)
            })),
            jumpDown: ie((() => {
              Ae(Oe)
            })),
            specialActionDown: ie((ee => {
              De(Ze[ee])
            })),
            specialActionUp: ie((ee => {
              Pe(Ze[ee])
            })),
            reloadGun: ie((() => {
              Ae(de)
            })),
            dropItem: ie((ee => {
              we(Ke.Fd.Drop, Ke.Bd.Down | (ee ? Ke.Bd.Stack : 0))
            })),
            swapCameraZoom: ie((() => {
              Ae(We)
            })),
            pickBlock: ie((() => (Ae(ge), ae(ee()))))
          }
        })(Ye);
        let ie = !1,
          He = null;
        const ye = () => {
          var ee;
          null === (ee = He) || void 0 === ee || ee(), He = null
        };
        return {
          bodies: () => ee,
          look: ce(),
          move: (ee, He) => {
            var be;
            ye();
            const {
              bits: Me,
              flips: Ue
            } = (ee => {
              if (null === ee) return {
                bits: Ke.Hd.Peek,
                flips: 0
              };
              const ie = ee.sneakHeld ? Ke.Hd.SneakHeld : 0;
              return "hold" === ee.mode ? {
                bits: ie | Ke.Hd.SneakHoldMode,
                flips: ee.sneakTogglePressed ? 1 : 0
              } : {
                bits: ie,
                flips: ee.sneakPressed || ee.sneakTogglePressed ? 1 : 0
              }
            })(He);
            null !== (be = Ye()) && void 0 !== be && be.padMove(ee.x, ee.y, ee.magnitude, ee.headingOffset, (ee => Ke.Hd.Active | (ee.jumpHeld ? Ke.Hd.JumpHeld : 0) | (ee.jumpPressed ? Ke.Hd.JumpPressed : 0) | (ee.running ? Ke.Hd.Running : 0) | (ee.sprintHeld ? Ke.Hd.SprintHeld : 0))(ee) | Me, Ue) && (ie = !0), (0, pe.f)(xe())
          },
          stopMoving: () => {
            var ee;
            ie && (ie = !(null !== (ee = Ye()) && void 0 !== ee && ee.padMove(0, 0, 0, 0, 0, 0)), ye(), He = (0, Fe.w)((() => {
              ye(), (0, pe.f)(xe())
            })))
          },
          uninstall: ye,
          deviceChanged: ee => {
            var He;
            "touch" === ee ? ((0, pe.f)(!1), null !== (He = Ye()) && void 0 !== He && He.padMove(0, 0, 0, 0, Ke.Hd.EndToggle, 0) && (ie = !1)) : "gamepad" === ee && (0, pe.f)(xe())
          },
          hasPlayer: () => null !== Ye(),
          isPlayerDead: () => {
            var ee;
            return !1 === (null === (ee = Ye()) || void 0 === ee ? void 0 : ee.localPlayerAlive())
          },
          isReplayMode: () => {
            const ee = Ye();
            return null !== ee && 0 !== (Ve(ee) & Ke.Pd.Replay)
          },
          isFreeCameraOn: () => {
            const ee = Ye();
            return null !== ee && 0 !== (Ve(ee) & Ke.Pd.FreeCam)
          },
          targetsBlock: () => ae(Ye()),
          selectedSlotEmpty: () => {
            var ee;
            return !(null !== (ee = Ye()) && void 0 !== ee && ee.items.lJ())
          },
          pickBlockAllowed: () => !!Me.c.get("creative") && !!Me.c.get("canPickBlocks"),
          scrollHotbar: ee => {
            we(Ke.Fd.Hotbar, Ke.Bd.Down | (ee > 0 ? Ke.Bd.Next : 0))
          },
          hasFullInventory: Je.l,
          hasLobbyTab: () => (0, Xe.e)({
            lobbyLeaderboardInfo: Me.c.get("lobbyLeaderboardInfo"),
            lobbyManage: Me.c.get("lobbyManage")
          }),
          contextActionInputs: () => {
            var ee, ie, He, ye;
            const be = Ye();
            return {
              holdingGun: !1 !== (null === be || void 0 === be ? void 0 : be.localPlayerAlive()) && "Gun" === (null === be || void 0 === be || null === (ee = be.items.lJ()) || void 0 === ee || null === (ie = ee.typeObj) || void 0 === ie ? void 0 : ie.type),
              customButtons: null !== (He = Me.c.get("customButtons")) && void 0 !== He ? He : null,
              touchscreenActionButton: null !== (ye = Me.c.get("touchscreenActionButton")) && void 0 !== ye ? ye : null
            }
          },
          pressTouchButton: ee => {
            ee ? De(te) : Pe(te)
          }
        }
      },
      Ce = () => {
        const ee = (0, be.d)(Le()),
          ie = (0, ye.b)(),
          He = null;
        return () => {
          ee(), ie(), null === He || void 0 === He || He()
        }
      }
  },
  5262: (ee, ie, He) => {
    He.d(ie, {
      A: () => we,
      E: () => De,
      H: () => ze,
      K: () => Ke,
      O: () => Ue,
      Q: () => te,
      c: () => We,
      d: () => Ee,
      e: () => Ae,
      g: () => Pe,
      k: () => Xe,
      o: () => Oe,
      q: () => Be,
      u: () => ge,
      w: () => Ze
    });
    var ye = He(5265);
    const be = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let Me = be;

    function Ke(ee) {
      Me = null !== ee && void 0 !== ee ? ee : be
    }

    function Ue() {
      return Me
    }
    const Fe = new Set,
      Je = new Set;
    let oe = -1;
    const Re = new Set,
      ke = new Set;
    let qe = 0,
      fe = 0;
    const Te = new Set,
      pe = new Set;

    function Xe(ee) {
      return Fe.add(ee), () => {
        Fe.delete(ee)
      }
    }

    function ze(ee, ie) {
      for (const ye of Fe) try {
        ye(ee)
      } catch (He) {
        ie(He)
      }
    }

    function Be(ee) {
      return Je.add(ee), () => {
        Je.delete(ee)
      }
    }

    function Ee(ee, ie) {
      const He = oe < 0 ? 0 : ee - oe;
      oe = ee;
      for (const be of Je) try {
        be(He)
      } catch (ye) {
        ie(ye)
      }
    }

    function ge(ee) {
      return Re.add(ee), () => {
        Re.delete(ee)
      }
    }

    function Oe(ee) {
      return ke.add(ee), () => {
        ke.delete(ee)
      }
    }
    let de = 0;

    function We(ee) {
      de += ee
    }

    function te() {
      const ee = de;
      return de = 0, ee
    }

    function Ze(ee) {
      return Te.add(ee), () => {
        Te.delete(ee)
      }
    }

    function we(ee) {
      return pe.add(ee), () => {
        pe.delete(ee)
      }
    }

    function De() {
      qe = 0, fe = 0, oe = -1
    }

    function Pe(ee, ie) {
      if ("paced" === ee) return fe += ie, null;
      if ("drawn" !== ee && "skipped" !== ee) return null;
      const He = ie + fe;
      return fe = 0, He
    }

    function Ae(ee, ie, He, be) {
      const Me = (0, ye.h)(ie),
        Ke = ee > 0 ? performance.now() : 0;
      for (let ye = 0; ye < ee; ye++)
        for (const ee of Te) try {
          ee()
        } catch (Ue) {
          be(Ue)
        }
      if (ee > 0 && We(performance.now() - Ke), null !== He) {
        for (const ee of Re) try {
          ee(He)
        } catch (Ue) {
          be(Ue)
        }
        qe += He
      }
      if ("drawn" === ie) {
        const ee = qe;
        qe = 0;
        for (const ie of ke) try {
          ie(ee)
        } catch (Ue) {
          be(Ue)
        }
      }
      for (const ye of pe) try {
        ye(ee, Me)
      } catch (Ue) {
        be(Ue)
      }
    }
  },
  5286: (ee, ie, He) => {
    He.d(ie, {
      d: () => be,
      h: () => Me,
      l: () => Ke,
      p: () => ye,
      t: () => Ue
    });
    const ye = {
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
      be = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      Me = {
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
      Ke = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      Ue = [16]
  },
  41766: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke,
      d: () => Me,
      g: () => be
    });
    let ye = null;

    function be(ee) {
      ye = ee
    }

    function Me(ee) {
      ye === ee && (ye = null)
    }

    function Ke() {
      var ee;
      null === (ee = ye) || void 0 === ee || ee()
    }
  },
  5291: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ue,
      d: () => Ke,
      h: () => Je
    });
    var ye = He(2492),
      be = He(2495);
    const Me = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function Ke(ee) {
      return ee instanceof HTMLElement && (!!(ee.isContentEditable || ee instanceof HTMLTextAreaElement || ee instanceof HTMLSelectElement) || ee instanceof HTMLInputElement && !Me.has(ee.type))
    }

    function Ue(ee) {
      let ie = null;
      const He = He => {
          const be = Ke(He);
          be !== ie && (ie = be, ee(ye.f.UiCapture, ye.p.Keyboard, 0, 0, be ? ye.p.Keyboard : 0))
        },
        be = ee => {
          He(ee.target)
        },
        Me = ee => {
          He(ee.relatedTarget)
        },
        Ue = () => {
          He(document.activeElement)
        },
        Fe = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", be, Fe), document.addEventListener("focusout", Me, Fe), document.addEventListener("keydown", Ue, Fe), He(document.activeElement), () => {
        document.removeEventListener("focusin", be, Fe), document.removeEventListener("focusout", Me, Fe), document.removeEventListener("keydown", Ue, Fe)
      }
    }
    const Fe = new Map;

    function Je(ee, ie) {
      var He;
      let ye = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      Fe.set(ye, (null !== (He = Fe.get(ye)) && void 0 !== He ? He : 0) & ~ee | ie & ee);
      let Me = 0;
      for (const be of Fe.values()) Me |= be;
      return (0, be.A)(ee, Me & ee)
    }
  },
  37770: (ee, ie, He) => {
    function ye(ee) {
      return ee.includes("Leaf Bed")
    }

    function be(ee) {
      return / Bed(?: Head)?(?:\||$)/.test(ee) && !ye(ee)
    }

    function Me(ee) {
      return ee.includes(" Strongbed")
    }

    function Ke(ee) {
      return ye(ee) || be(ee) || Me(ee)
    }
    He.d(ie, {
      e: () => Ke,
      i: () => ye,
      k: () => Me,
      m: () => be
    })
  },
  37765: (ee, ie, He) => {
    He.d(ie, {
      d: () => Je
    });
    var ye = He(37770),
      be = He(9961);
    const Me = [],
      Ke = [],
      Ue = [],
      Fe = [];
    for (const oe of Object.keys(be.m))(0, ye.i)(oe) ? Me.push(oe) : (0, ye.m)(oe) && Ke.push(oe), (0, ye.k)(oe) && Ue.push(oe), (oe.includes(" Bed Head") || oe.includes(" Strongbed Head")) && Fe.push(oe);
    const Je = {
      leafBeds: Me,
      woolBeds: Ke,
      strongBeds: Ue,
      beds: [...Me, ...Ke, ...Ue],
      bedHeads: Fe,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  7083: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ke,
      f: () => be,
      j: () => Fe,
      m: () => Me,
      o: () => Je,
      s: () => ye,
      u: () => Ue
    });
    let ye = function(ee) {
        return ee[ee.DEFAULT = 0] = "DEFAULT", ee[ee.BOAT = 1] = "BOAT", ee[ee.GLIDER = 2] = "GLIDER", ee[ee.BALLOON = 3] = "BALLOON", ee[ee.SLEEPING = 4] = "SLEEPING", ee[ee.RIDING_MOB = 5] = "RIDING_MOB", ee[ee.CAR = 6] = "CAR", ee[ee.HOVERCRAFT = 7] = "HOVERCRAFT", ee
      }({}),
      be = function(ee) {
        return ee[ee.WOOD = 0] = "WOOD", ee[ee.OBSIDIAN = 1] = "OBSIDIAN", ee[ee.SPEED = 2] = "SPEED", ee
      }({}),
      Me = function(ee) {
        return ee[ee.WOOD = 0] = "WOOD", ee[ee.IRON = 1] = "IRON", ee[ee.GOLD = 2] = "GOLD", ee[ee.DIAMOND = 3] = "DIAMOND", ee
      }({}),
      Ke = function(ee) {
        return ee[ee.YELLOW = 0] = "YELLOW", ee[ee.WHITE = 1] = "WHITE", ee[ee.RED = 2] = "RED", ee[ee.PURPLE = 3] = "PURPLE", ee[ee.PINK = 4] = "PINK", ee[ee.ORANGE = 5] = "ORANGE", ee[ee.MAGENTA = 6] = "MAGENTA", ee[ee.LIME = 7] = "LIME", ee[ee.LIGHT_GRAY = 8] = "LIGHT_GRAY", ee[ee.LIGHT_BLUE = 9] = "LIGHT_BLUE", ee[ee.GREEN = 10] = "GREEN", ee[ee.GRAY = 11] = "GRAY", ee[ee.CYAN = 12] = "CYAN", ee[ee.BROWN = 13] = "BROWN", ee[ee.BLUE = 14] = "BLUE", ee[ee.BLACK = 15] = "BLACK", ee
      }({}),
      Ue = function(ee) {
        return ee[ee.ROTATION_1 = 0] = "ROTATION_1", ee[ee.ROTATION_2 = 1] = "ROTATION_2", ee[ee.ROTATION_3 = 2] = "ROTATION_3", ee[ee.ROTATION_4 = 3] = "ROTATION_4", ee
      }({}),
      Fe = function(ee) {
        return ee[ee.KART = 0] = "KART", ee[ee.OFF_ROADER = 1] = "OFF_ROADER", ee[ee.CAR = 2] = "CAR", ee[ee.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", ee[ee.ARMORED_CAR = 4] = "ARMORED_CAR", ee[ee.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", ee[ee.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", ee[ee.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", ee
      }({});
    ye.DEFAULT, ye.BOAT, be.SPEED, ye.GLIDER, Me.DIAMOND, ye.BALLOON, Ke.BLACK, ye.SLEEPING, Ue.ROTATION_4, ye.RIDING_MOB, ye.CAR, Fe.MOONSTONE_MINING_DRILL, ye.HOVERCRAFT;
    let Je = function(ee) {
      return ee[ee.NORMAL = 0] = "NORMAL", ee[ee.GLIDING = 1] = "GLIDING", ee[ee.FLOATING = 2] = "FLOATING", ee
    }({})
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);