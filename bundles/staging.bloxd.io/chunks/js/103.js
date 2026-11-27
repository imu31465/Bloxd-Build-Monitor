export const id = 103;
export const ids = [103];
export const modules = {
  5533: (WW, iW, OW) => {
    OW.d(iW, {
      B: () => hW,
      D: () => HW,
      F: () => kW,
      G: () => PW,
      K: () => LW,
      N: () => TW,
      e: () => yW,
      g: () => MW,
      k: () => uW,
      m: () => nW,
      n: () => UW,
      o: () => SW,
      r: () => sW,
      v: () => KW,
      x: () => JW
    });
    var mW = OW(5540);
    const EW = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let NW = EW;

    function PW(WW) {
      NW = null !== WW && void 0 !== WW ? WW : EW
    }

    function LW() {
      return NW
    }
    const cW = new Set,
      wW = new Set;
    let tW = -1;
    const ZW = new Set,
      xW = new Set;
    let lW = 0,
      AW = 0;
    const bW = new Set,
      jW = new Set;

    function UW(WW) {
      return cW.add(WW), () => {
        cW.delete(WW)
      }
    }

    function kW(WW, iW) {
      for (const mW of cW) try {
        mW(WW)
      } catch (OW) {
        iW(OW)
      }
    }

    function sW(WW) {
      return wW.add(WW), () => {
        wW.delete(WW)
      }
    }

    function MW(WW, iW) {
      const OW = tW < 0 ? 0 : WW - tW;
      tW = WW;
      for (const EW of wW) try {
        EW(OW)
      } catch (mW) {
        iW(mW)
      }
    }

    function KW(WW) {
      return ZW.add(WW), () => {
        ZW.delete(WW)
      }
    }

    function SW(WW) {
      return xW.add(WW), () => {
        xW.delete(WW)
      }
    }
    let YW = 0;

    function yW(WW) {
      YW += WW
    }

    function TW() {
      const WW = YW;
      return YW = 0, WW
    }

    function JW(WW) {
      return bW.add(WW), () => {
        bW.delete(WW)
      }
    }

    function hW(WW) {
      return jW.add(WW), () => {
        jW.delete(WW)
      }
    }

    function HW() {
      lW = 0, AW = 0, tW = -1
    }

    function nW(WW, iW) {
      if ("paced" === WW) return AW += iW, null;
      if ("drawn" !== WW && "skipped" !== WW) return null;
      const OW = iW + AW;
      return AW = 0, OW
    }

    function uW(WW, iW, OW, EW) {
      const NW = (0, mW.g)(iW),
        PW = WW > 0 ? performance.now() : 0;
      for (let mW = 0; mW < WW; mW++)
        for (const WW of bW) try {
          WW()
        } catch (LW) {
          EW(LW)
        }
      if (WW > 0 && yW(performance.now() - PW), null !== OW) {
        for (const WW of ZW) try {
          WW(OW)
        } catch (LW) {
          EW(LW)
        }
        lW += OW
      }
      if ("drawn" === iW) {
        const WW = lW;
        lW = 0;
        for (const iW of xW) try {
          iW(WW)
        } catch (LW) {
          EW(LW)
        }
      }
      for (const mW of jW) try {
        mW(WW, NW)
      } catch (LW) {
        EW(LW)
      }
    }
  },
  42411: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => mW
    });
    const mW = {
      stop: () => mW,
      fade: () => mW,
      rate: () => mW,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => mW,
      setPannerAttr: () => mW,
      setPosition: () => mW
    }
  },
  5560: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => cW,
      f: () => NW,
      g: () => LW
    });
    var mW = OW(3305),
      EW = OW(5568);

    function NW(WW) {
      let {
        action: iW,
        flags: OW
      } = WW;
      return "mid-fire" === iW && 0 !== (OW & mW.e.AltLeftClick)
    }
    const PW = new Set;

    function LW(WW) {
      return PW.add(WW), () => {
        PW.delete(WW)
      }
    }

    function cW(WW) {
      const iW = EW.e[255 & WW];
      if (void 0 === iW) return;
      const OW = WW >>> 8 & 255,
        NW = {
          action: iW,
          down: 0 !== (OW & mW.e.Down),
          flags: OW,
          press: WW >>> 16
        };
      for (const mW of PW) mW(NW)
    }
  },
  5568: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => EW,
      i: () => NW,
      m: () => PW,
      n: () => mW,
      q: () => LW
    });
    const mW = {
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
      EW = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      NW = {
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
      PW = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        Zoom: [191],
        "primary-fire": [195],
        "alt-fire": [196]
      },
      LW = [16]
  },
  42429: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => tW,
      f: () => wW,
      i: () => cW
    });
    var mW = OW(5551),
      EW = OW(3305),
      NW = OW(5575);
    let PW = !1,
      LW = !1;

    function cW(WW) {
      PW = !0;
      try {
        WW()
      } finally {
        PW = !1
      }
    }

    function wW(WW, iW) {
      if (PW) return !1;
      switch (WW) {
        case mW.N.MouseDown:
        case mW.N.MouseUp:
        case mW.N.TouchStart:
        case mW.N.TouchEnd:
        case mW.N.TouchCancel:
        case mW.N.TouchButton:
          return !0;
        case mW.N.KeyDown:
        case mW.N.KeyUp:
          return 0 === (iW & EW.h.Repeat) && !(0, NW.h)(document.activeElement);
        default:
          return !1
      }
    }

    function tW(WW) {
      LW || (LW = !0, queueMicrotask((() => {
        LW = !1, WW()
      })))
    }
  },
  5575: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => LW,
      h: () => PW,
      j: () => wW
    });
    var mW = OW(3305),
      EW = OW(3308);
    const NW = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function PW(WW) {
      return WW instanceof HTMLElement && (!!(WW.isContentEditable || WW instanceof HTMLTextAreaElement || WW instanceof HTMLSelectElement) || WW instanceof HTMLInputElement && !NW.has(WW.type))
    }

    function LW(WW) {
      let iW = null;
      const OW = OW => {
          const EW = PW(OW);
          EW !== iW && (iW = EW, WW(mW.k.UiCapture, mW.y.Keyboard, 0, 0, EW ? mW.y.Keyboard : 0))
        },
        EW = WW => {
          OW(WW.target)
        },
        NW = WW => {
          OW(WW.relatedTarget)
        },
        LW = () => {
          OW(document.activeElement)
        },
        cW = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", EW, cW), document.addEventListener("focusout", NW, cW), document.addEventListener("keydown", LW, cW), OW(document.activeElement), () => {
        document.removeEventListener("focusin", EW, cW), document.removeEventListener("focusout", NW, cW), document.removeEventListener("keydown", LW, cW)
      }
    }
    const cW = new Map;

    function wW(WW, iW) {
      var OW;
      let mW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      cW.set(mW, (null !== (OW = cW.get(mW)) && void 0 !== OW ? OW : 0) & ~WW | iW & WW);
      let NW = 0;
      for (const EW of cW.values()) NW |= EW;
      return (0, EW.z)(WW, NW & WW)
    }
  },
  42482: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => mW
    });
    const mW = 2e3
  },
  42491: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => PW,
      f: () => NW,
      i: () => EW
    });
    let mW = null;

    function EW(WW) {
      mW = WW
    }

    function NW(WW) {
      mW === WW && (mW = null)
    }

    function PW() {
      var WW;
      null === (WW = mW) || void 0 === WW || WW()
    }
  },
  42416: (WW, iW, OW) => {
    function mW(WW, iW) {
      if (!Object.prototype.hasOwnProperty.call(WW, iW)) throw new TypeError("attempted to use private field on non-instance");
      return WW
    }
    OW.d(iW, {
      d: () => mW
    })
  },
  42419: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => EW
    });
    var mW = 0;

    function EW(WW) {
      return "__private_" + mW++ + "_" + WW
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);