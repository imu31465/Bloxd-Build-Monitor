export const id = 103;
export const ids = [103];
export const modules = {
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
  42575: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => eb
    });
    const eb = {
      stop: () => eb,
      fade: () => eb,
      rate: () => eb,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => eb,
      setPannerAttr: () => eb,
      setPosition: () => eb
    }
  },
  5693: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => lb,
      g: () => pb,
      k: () => gb
    });
    var eb = Mb(3470),
      Hb = Mb(5701);

    function pb(bb) {
      let {
        action: wb,
        flags: Mb
      } = bb;
      return "mid-fire" === wb && 0 !== (Mb & eb.b.AltLeftClick)
    }
    const Vb = new Set;

    function gb(bb) {
      return Vb.add(bb), () => {
        Vb.delete(bb)
      }
    }

    function lb(bb) {
      const wb = Hb.c[255 & bb];
      if (void 0 === wb) return;
      const Mb = bb >>> 8 & 255,
        pb = {
          action: wb,
          down: 0 !== (Mb & eb.b.Down),
          flags: Mb,
          press: bb >>> 16
        };
      for (const eb of Vb) eb(pb)
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
  42611: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Ib,
      f: () => Lb,
      i: () => lb
    });
    var eb = Mb(5685),
      Hb = Mb(3470),
      pb = Mb(5706);
    let Vb = !1,
      gb = !1;

    function lb(bb) {
      Vb = !0;
      try {
        bb()
      } finally {
        Vb = !1
      }
    }

    function Lb(bb, wb) {
      if (Vb) return !1;
      switch (bb) {
        case eb.O.MouseDown:
        case eb.O.MouseUp:
        case eb.O.TouchStart:
        case eb.O.TouchEnd:
        case eb.O.TouchCancel:
        case eb.O.TouchButton:
          return !0;
        case eb.O.KeyDown:
        case eb.O.KeyUp:
          return 0 === (wb & Hb.e.Repeat) && !(0, pb.f)(document.activeElement);
        default:
          return !1
      }
    }

    function Ib(bb) {
      gb || (gb = !0, queueMicrotask((() => {
        gb = !1, bb()
      })))
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
  42665: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => eb
    });
    const eb = 2e3
  },
  42673: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Vb,
      h: () => pb,
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
  42583: (bb, wb, Mb) => {
    function eb(bb, wb) {
      if (!Object.prototype.hasOwnProperty.call(bb, wb)) throw new TypeError("attempted to use private field on non-instance");
      return bb
    }
    Mb.d(wb, {
      d: () => eb
    })
  },
  42592: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Hb
    });
    var eb = 0;

    function Hb(bb) {
      return "__private_" + eb++ + "_" + bb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);