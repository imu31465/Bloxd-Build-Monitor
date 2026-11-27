export const id = 103;
export const ids = [103];
export const modules = {
  5665: (RR, JR, GR) => {
    GR.d(JR, {
      B: () => ZR,
      E: () => qR,
      H: () => lR,
      c: () => BR,
      d: () => AR,
      e: () => OR,
      f: () => vR,
      g: () => nR,
      k: () => XR,
      m: () => WR,
      n: () => CR,
      r: () => pR,
      t: () => gR,
      v: () => bR,
      z: () => UR
    });
    var yR = GR(5671);
    const tR = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let uR = tR;

    function ZR(RR) {
      uR = null !== RR && void 0 !== RR ? RR : tR
    }

    function qR() {
      return uR
    }
    const iR = new Set,
      fR = new Set;
    let VR = -1;
    const KR = new Set,
      wR = new Set;
    let rR = 0,
      eR = 0;
    const aR = new Set,
      LR = new Set;

    function nR(RR) {
      return iR.add(RR), () => {
        iR.delete(RR)
      }
    }

    function UR(RR, JR) {
      for (const yR of iR) try {
        yR(RR)
      } catch (GR) {
        JR(GR)
      }
    }

    function WR(RR) {
      return fR.add(RR), () => {
        fR.delete(RR)
      }
    }

    function AR(RR, JR) {
      const GR = VR < 0 ? 0 : RR - VR;
      VR = RR;
      for (const tR of fR) try {
        tR(GR)
      } catch (yR) {
        JR(yR)
      }
    }

    function CR(RR) {
      return KR.add(RR), () => {
        KR.delete(RR)
      }
    }

    function XR(RR) {
      return wR.add(RR), () => {
        wR.delete(RR)
      }
    }
    let MR = 0;

    function BR(RR) {
      MR += RR
    }

    function lR() {
      const RR = MR;
      return MR = 0, RR
    }

    function pR(RR) {
      return aR.add(RR), () => {
        aR.delete(RR)
      }
    }

    function gR(RR) {
      return LR.add(RR), () => {
        LR.delete(RR)
      }
    }

    function bR() {
      rR = 0, eR = 0, VR = -1
    }

    function vR(RR, JR) {
      if ("paced" === RR) return eR += JR, null;
      if ("drawn" !== RR && "skipped" !== RR) return null;
      const GR = JR + eR;
      return eR = 0, GR
    }

    function OR(RR, JR, GR, tR) {
      const uR = (0, yR.f)(JR),
        ZR = RR > 0 ? performance.now() : 0;
      for (let yR = 0; yR < RR; yR++)
        for (const RR of aR) try {
          RR()
        } catch (qR) {
          tR(qR)
        }
      if (RR > 0 && BR(performance.now() - ZR), null !== GR) {
        for (const RR of KR) try {
          RR(GR)
        } catch (qR) {
          tR(qR)
        }
        rR += GR
      }
      if ("drawn" === JR) {
        const RR = rR;
        rR = 0;
        for (const JR of wR) try {
          JR(RR)
        } catch (qR) {
          tR(qR)
        }
      }
      for (const yR of LR) try {
        yR(RR, uR)
      } catch (qR) {
        tR(qR)
      }
    }
  },
  42435: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => yR
    });
    const yR = {
      stop: () => yR,
      fade: () => yR,
      rate: () => yR,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => yR,
      setPannerAttr: () => yR,
      setPosition: () => yR
    }
  },
  5692: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => iR,
      d: () => uR,
      f: () => qR
    });
    var yR = GR(3428),
      tR = GR(5697);

    function uR(RR) {
      let {
        action: JR,
        flags: GR
      } = RR;
      return "mid-fire" === JR && 0 !== (GR & yR.b.AltLeftClick)
    }
    const ZR = new Set;

    function qR(RR) {
      return ZR.add(RR), () => {
        ZR.delete(RR)
      }
    }

    function iR(RR) {
      const JR = tR.e[255 & RR];
      if (void 0 === JR) return;
      const GR = RR >>> 8 & 255,
        uR = {
          action: JR,
          down: 0 !== (GR & yR.b.Down),
          flags: GR,
          press: RR >>> 16
        };
      for (const yR of ZR) yR(uR)
    }
  },
  5697: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => tR,
      f: () => uR,
      g: () => ZR,
      i: () => yR,
      k: () => qR
    });
    const yR = {
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
      tR = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      uR = {
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
      ZR = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        Zoom: [191],
        "primary-fire": [195],
        "alt-fire": [196]
      },
      qR = [16]
  },
  42457: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => VR,
      c: () => fR,
      f: () => iR
    });
    var yR = GR(5685),
      tR = GR(3428),
      uR = GR(5699);
    let ZR = !1,
      qR = !1;

    function iR(RR) {
      ZR = !0;
      try {
        RR()
      } finally {
        ZR = !1
      }
    }

    function fR(RR, JR) {
      if (ZR) return !1;
      switch (RR) {
        case yR.N.MouseDown:
        case yR.N.MouseUp:
        case yR.N.TouchStart:
        case yR.N.TouchEnd:
        case yR.N.TouchCancel:
        case yR.N.TouchButton:
          return !0;
        case yR.N.KeyDown:
        case yR.N.KeyUp:
          return 0 === (JR & tR.f.Repeat) && !(0, uR.h)(document.activeElement);
        default:
          return !1
      }
    }

    function VR(RR) {
      qR || (qR = !0, queueMicrotask((() => {
        qR = !1, RR()
      })))
    }
  },
  5699: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => qR,
      h: () => ZR,
      i: () => fR
    });
    var yR = GR(3428),
      tR = GR(3437);
    const uR = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function ZR(RR) {
      return RR instanceof HTMLElement && (!!(RR.isContentEditable || RR instanceof HTMLTextAreaElement || RR instanceof HTMLSelectElement) || RR instanceof HTMLInputElement && !uR.has(RR.type))
    }

    function qR(RR) {
      let JR = null;
      const GR = GR => {
          const tR = ZR(GR);
          tR !== JR && (JR = tR, RR(yR.j.UiCapture, yR.C.Keyboard, 0, 0, tR ? yR.C.Keyboard : 0))
        },
        tR = RR => {
          GR(RR.target)
        },
        uR = RR => {
          GR(RR.relatedTarget)
        },
        qR = () => {
          GR(document.activeElement)
        },
        iR = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", tR, iR), document.addEventListener("focusout", uR, iR), document.addEventListener("keydown", qR, iR), GR(document.activeElement), () => {
        document.removeEventListener("focusin", tR, iR), document.removeEventListener("focusout", uR, iR), document.removeEventListener("keydown", qR, iR)
      }
    }
    const iR = new Map;

    function fR(RR, JR) {
      var GR;
      let yR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      iR.set(yR, (null !== (GR = iR.get(yR)) && void 0 !== GR ? GR : 0) & ~RR | JR & RR);
      let uR = 0;
      for (const tR of iR.values()) uR |= tR;
      return (0, tR.H)(RR, uR & RR)
    }
  },
  42526: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => yR
    });
    const yR = 2e3
  },
  42534: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => ZR,
      c: () => uR,
      e: () => tR
    });
    let yR = null;

    function tR(RR) {
      yR = RR
    }

    function uR(RR) {
      yR === RR && (yR = null)
    }

    function ZR() {
      var RR;
      null === (RR = yR) || void 0 === RR || RR()
    }
  },
  42444: (RR, JR, GR) => {
    function yR(RR, JR) {
      if (!Object.prototype.hasOwnProperty.call(RR, JR)) throw new TypeError("attempted to use private field on non-instance");
      return RR
    }
    GR.d(JR, {
      e: () => yR
    })
  },
  42449: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => tR
    });
    var yR = 0;

    function tR(RR) {
      return "__private_" + yR++ + "_" + RR
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);