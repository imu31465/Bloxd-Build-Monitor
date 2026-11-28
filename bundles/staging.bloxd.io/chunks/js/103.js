export const id = 103;
export const ids = [103];
export const modules = {
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
  42867: (dd, Od, md) => {
    md.d(Od, {
      d: () => Wd
    });
    const Wd = {
      stop: () => Wd,
      fade: () => Wd,
      rate: () => Wd,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => Wd,
      setPannerAttr: () => Wd,
      setPosition: () => Wd
    }
  },
  5580: (dd, Od, md) => {
    md.d(Od, {
      c: () => hd,
      e: () => Rd,
      h: () => Kd
    });
    var Wd = md(3372),
      Fd = md(5588);

    function Rd(dd) {
      let {
        action: Od,
        flags: md
      } = dd;
      return "mid-fire" === Od && 0 !== (md & Wd.c.AltLeftClick)
    }
    const Xd = new Set;

    function Kd(dd) {
      return Xd.add(dd), () => {
        Xd.delete(dd)
      }
    }

    function hd(dd) {
      const Od = Fd.e[255 & dd];
      if (void 0 === Od) return;
      const md = dd >>> 8 & 255,
        Rd = {
          action: Od,
          down: 0 !== (md & Wd.c.Down),
          flags: md,
          press: dd >>> 16
        };
      for (const Wd of Xd) Wd(Rd)
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
  42904: (dd, Od, md) => {
    md.d(Od, {
      c: () => Qd,
      f: () => vd,
      g: () => hd
    });
    var Wd = md(5571),
      Fd = md(3372),
      Rd = md(5590);
    let Xd = !1,
      Kd = !1;

    function hd(dd) {
      Xd = !0;
      try {
        dd()
      } finally {
        Xd = !1
      }
    }

    function vd(dd, Od) {
      if (Xd) return !1;
      switch (dd) {
        case Wd.L.MouseDown:
        case Wd.L.MouseUp:
        case Wd.L.TouchStart:
        case Wd.L.TouchEnd:
        case Wd.L.TouchCancel:
        case Wd.L.TouchButton:
          return !0;
        case Wd.L.KeyDown:
        case Wd.L.KeyUp:
          return 0 === (Od & Fd.f.Repeat) && !(0, Rd.e)(document.activeElement);
        default:
          return !1
      }
    }

    function Qd(dd) {
      Kd || (Kd = !0, queueMicrotask((() => {
        Kd = !1, dd()
      })))
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
  42963: (dd, Od, md) => {
    md.d(Od, {
      b: () => Wd
    });
    const Wd = 2e3
  },
  42965: (dd, Od, md) => {
    md.d(Od, {
      d: () => Xd,
      f: () => Rd,
      j: () => Fd
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
  42876: (dd, Od, md) => {
    function Wd(dd, Od) {
      if (!Object.prototype.hasOwnProperty.call(dd, Od)) throw new TypeError("attempted to use private field on non-instance");
      return dd
    }
    md.d(Od, {
      b: () => Wd
    })
  },
  42883: (dd, Od, md) => {
    md.d(Od, {
      d: () => Fd
    });
    var Wd = 0;

    function Fd(dd) {
      return "__private_" + Wd++ + "_" + dd
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);