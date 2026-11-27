export const id = 103;
export const ids = [103];
export const modules = {
  5602: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      A: () => Lr,
      E: () => lr,
      G: () => Yr,
      K: () => jr,
      N: () => Ir,
      Q: () => vr,
      e: () => Tr,
      i: () => er,
      m: () => Pr,
      p: () => Xr,
      r: () => zr,
      u: () => yr,
      v: () => nr,
      w: () => Kr,
      z: () => Or
    });
    var Zr = Qr(5604);
    const Wr = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let ar = Wr;

    function jr(rr) {
      ar = null !== rr && void 0 !== rr ? rr : Wr
    }

    function Ir() {
      return ar
    }
    const fr = new Set,
      Er = new Set;
    let pr = -1;
    const xr = new Set,
      mr = new Set;
    let Nr = 0,
      Ur = 0;
    const tr = new Set,
      hr = new Set;

    function zr(rr) {
      return fr.add(rr), () => {
        fr.delete(rr)
      }
    }

    function Yr(rr, Sr) {
      for (const Zr of fr) try {
        Zr(rr)
      } catch (Qr) {
        Sr(Qr)
      }
    }

    function nr(rr) {
      return Er.add(rr), () => {
        Er.delete(rr)
      }
    }

    function er(rr, Sr) {
      const Qr = pr < 0 ? 0 : rr - pr;
      pr = rr;
      for (const Wr of Er) try {
        Wr(Qr)
      } catch (Zr) {
        Sr(Zr)
      }
    }

    function Kr(rr) {
      return xr.add(rr), () => {
        xr.delete(rr)
      }
    }

    function yr(rr) {
      return mr.add(rr), () => {
        mr.delete(rr)
      }
    }
    let Br = 0;

    function Tr(rr) {
      Br += rr
    }

    function vr() {
      const rr = Br;
      return Br = 0, rr
    }

    function Or(rr) {
      return tr.add(rr), () => {
        tr.delete(rr)
      }
    }

    function Lr(rr) {
      return hr.add(rr), () => {
        hr.delete(rr)
      }
    }

    function lr() {
      Nr = 0, Ur = 0, pr = -1
    }

    function Xr(rr, Sr) {
      if ("paced" === rr) return Ur += Sr, null;
      if ("drawn" !== rr && "skipped" !== rr) return null;
      const Qr = Sr + Ur;
      return Ur = 0, Qr
    }

    function Pr(rr, Sr, Qr, Wr) {
      const ar = (0, Zr.i)(Sr),
        jr = rr > 0 ? performance.now() : 0;
      for (let Zr = 0; Zr < rr; Zr++)
        for (const rr of tr) try {
          rr()
        } catch (Ir) {
          Wr(Ir)
        }
      if (rr > 0 && Tr(performance.now() - jr), null !== Qr) {
        for (const rr of xr) try {
          rr(Qr)
        } catch (Ir) {
          Wr(Ir)
        }
        Nr += Qr
      }
      if ("drawn" === Sr) {
        const rr = Nr;
        Nr = 0;
        for (const Sr of mr) try {
          Sr(rr)
        } catch (Ir) {
          Wr(Ir)
        }
      }
      for (const Zr of hr) try {
        Zr(rr, ar)
      } catch (Ir) {
        Wr(Ir)
      }
    }
  },
  42756: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Zr
    });
    const Zr = {
      stop: () => Zr,
      fade: () => Zr,
      rate: () => Zr,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => Zr,
      setPannerAttr: () => Zr,
      setPosition: () => Zr
    }
  },
  5619: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => fr,
      i: () => ar,
      l: () => Ir
    });
    var Zr = Qr(3372),
      Wr = Qr(5623);

    function ar(rr) {
      let {
        action: Sr,
        flags: Qr
      } = rr;
      return "mid-fire" === Sr && 0 !== (Qr & Zr.e.AltLeftClick)
    }
    const jr = new Set;

    function Ir(rr) {
      return jr.add(rr), () => {
        jr.delete(rr)
      }
    }

    function fr(rr) {
      const Sr = Wr.d[255 & rr];
      if (void 0 === Sr) return;
      const Qr = rr >>> 8 & 255,
        ar = {
          action: Sr,
          down: 0 !== (Qr & Zr.e.Down),
          flags: Qr,
          press: rr >>> 16
        };
      for (const Zr of jr) Zr(ar)
    }
  },
  5623: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Wr,
      e: () => ar,
      g: () => jr,
      i: () => Zr,
      m: () => Ir
    });
    const Zr = {
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
      Wr = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      ar = {
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
      jr = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        Zoom: [191],
        "primary-fire": [195],
        "alt-fire": [196]
      },
      Ir = [16]
  },
  42784: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => pr,
      e: () => Er,
      h: () => fr
    });
    var Zr = Qr(5617),
      Wr = Qr(3372),
      ar = Qr(5628);
    let jr = !1,
      Ir = !1;

    function fr(rr) {
      jr = !0;
      try {
        rr()
      } finally {
        jr = !1
      }
    }

    function Er(rr, Sr) {
      if (jr) return !1;
      switch (rr) {
        case Zr.M.MouseDown:
        case Zr.M.MouseUp:
        case Zr.M.TouchStart:
        case Zr.M.TouchEnd:
        case Zr.M.TouchCancel:
        case Zr.M.TouchButton:
          return !0;
        case Zr.M.KeyDown:
        case Zr.M.KeyUp:
          return 0 === (Sr & Wr.f.Repeat) && !(0, ar.e)(document.activeElement);
        default:
          return !1
      }
    }

    function pr(rr) {
      Ir || (Ir = !0, queueMicrotask((() => {
        Ir = !1, rr()
      })))
    }
  },
  5628: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Ir,
      e: () => jr,
      f: () => Er
    });
    var Zr = Qr(3372),
      Wr = Qr(3378);
    const ar = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function jr(rr) {
      return rr instanceof HTMLElement && (!!(rr.isContentEditable || rr instanceof HTMLTextAreaElement || rr instanceof HTMLSelectElement) || rr instanceof HTMLInputElement && !ar.has(rr.type))
    }

    function Ir(rr) {
      let Sr = null;
      const Qr = Qr => {
          const Wr = jr(Qr);
          Wr !== Sr && (Sr = Wr, rr(Zr.g.UiCapture, Zr.y.Keyboard, 0, 0, Wr ? Zr.y.Keyboard : 0))
        },
        Wr = rr => {
          Qr(rr.target)
        },
        ar = rr => {
          Qr(rr.relatedTarget)
        },
        Ir = () => {
          Qr(document.activeElement)
        },
        fr = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", Wr, fr), document.addEventListener("focusout", ar, fr), document.addEventListener("keydown", Ir, fr), Qr(document.activeElement), () => {
        document.removeEventListener("focusin", Wr, fr), document.removeEventListener("focusout", ar, fr), document.removeEventListener("keydown", Ir, fr)
      }
    }
    const fr = new Map;

    function Er(rr, Sr) {
      var Qr;
      let Zr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      fr.set(Zr, (null !== (Qr = fr.get(Zr)) && void 0 !== Qr ? Qr : 0) & ~rr | Sr & rr);
      let ar = 0;
      for (const Wr of fr.values()) ar |= Wr;
      return (0, Wr.A)(rr, ar & rr)
    }
  },
  42853: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Zr
    });
    const Zr = 2e3
  },
  42862: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => jr,
      c: () => ar,
      f: () => Wr
    });
    let Zr = null;

    function Wr(rr) {
      Zr = rr
    }

    function ar(rr) {
      Zr === rr && (Zr = null)
    }

    function jr() {
      var rr;
      null === (rr = Zr) || void 0 === rr || rr()
    }
  },
  42758: (rr, Sr, Qr) => {
    function Zr(rr, Sr) {
      if (!Object.prototype.hasOwnProperty.call(rr, Sr)) throw new TypeError("attempted to use private field on non-instance");
      return rr
    }
    Qr.d(Sr, {
      e: () => Zr
    })
  },
  42767: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Wr
    });
    var Zr = 0;

    function Wr(rr) {
      return "__private_" + Zr++ + "_" + rr
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);