export const id = 86;
export const ids = [86];
export const modules = {
  40692: (dd, Jd, kd) => {
    kd.d(Jd, {
      C: () => Xd,
      G: () => jd,
      H: () => Hd,
      I: () => nd,
      K: () => md,
      N: () => fd,
      O: () => Yd,
      P: () => rd,
      T: () => hd,
      W: () => Sd,
      e: () => ud,
      f: () => yd,
      j: () => Md,
      m: () => td,
      o: () => Fd,
      s: () => ad,
      w: () => Ud,
      z: () => bd
    });
    var pd = kd(1404),
      Nd = kd(29),
      Wd = kd(1307),
      Pd = kd(2337),
      Zd = kd(4709),
      gd = kd(4666);
    let Cd, Kd = !1,
      od = !1,
      ld = !1,
      Qd = !1;
    const Ld = 1300,
      Od = 3e3;
    let ed = 0,
      Rd = !1,
      Id = !1,
      Gd = 0;
    const vd = 2;
    let xd = !1,
      qd = !1;
    const Bd = new Set,
      sd = new Set;

    function ad() {
      return Kd
    }

    function Md() {
      return Id
    }

    function Fd() {
      return qd
    }

    function Yd() {
      return (0, Wd.s)() && !qd
    }

    function md(dd) {
      let Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (dd !== qd) {
        qd = dd;
        for (const dd of [...sd]) dd(qd);
        Jd && hd()
      }
    }

    function bd(dd) {
      return sd.add(dd), () => {
        sd.delete(dd)
      }
    }

    function Sd() {
      (0, Zd.i)(Pd.y.Menu, (0, Wd.s)() ? 0 : Pd.y.Menu)
    }

    function jd() {
      Id = !1, Gd = 0, Sd(), hd()
    }

    function Xd(dd) {
      return Bd.add(dd), () => {
        Bd.delete(dd)
      }
    }

    function fd(dd) {
      od = !1, dd !== Kd && (Kd = dd, Qd = !1, clearTimeout(Cd), ld = !Kd && xd, Kd ? (Rd = !1, Id = !1, Gd = 0) : Yd() && !xd && (Id = !0), xd = !1, Kd && !Yd() && zd(), wd(), ld && hd())
    }

    function nd(dd) {
      dd !== Rd && (Rd = dd, dd || hd())
    }

    function Ud() {
      od = !1, Qd || !0 !== Ed() || (Qd = !0, clearTimeout(Cd), Cd = setTimeout(Dd, Ld))
    }

    function yd() {
      return (!od || performance.now() - ed > Od) && (od = (0, gd.P)().lockPointer(), ed = performance.now()), od
    }

    function Dd() {
      Td() && cd() && yd()
    }

    function Td() {
      return Yd() && !Kd && !Rd && !(0, pd.d)()
    }

    function Ed() {
      var dd;
      return "undefined" === typeof navigator || null === (dd = navigator.userActivation) || void 0 === dd ? void 0 : dd.isActive
    }

    function cd() {
      return ld && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== Ed()
    }

    function hd() {
      Yd() ? Td() && !Id && cd() && yd() : Kd && !xd && zd()
    }

    function rd() {
      Id ? navigator.vendor.startsWith("Apple") ? Vd() : Gd = vd : hd()
    }

    function ud() {
      Gd > 0 && 0 === --Gd && Vd()
    }

    function td() {
      Gd = 0
    }

    function Vd() {
      Td() && !0 === Ed() && yd()
    }

    function zd() {
      xd = !0, (0, gd.P)().unlockPointer()
    }

    function Hd() {
      od = !1, ld = !1, Qd = !1, clearTimeout(Cd), Rd = !1, Id = !1, Gd = 0, xd = !1;
      const dd = Kd;
      Kd = !1, dd && wd()
    }

    function wd() {
      for (const dd of [...Bd]) dd(Kd);
      Nd.j.nO("pointerLockUpdate", Kd)
    }
  },
  40672: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => ld,
      f: () => Zd,
      g: () => od,
      k: () => Cd,
      o: () => Pd,
      s: () => Kd,
      v: () => gd
    });
    let pd = null,
      Nd = null,
      Wd = null;

    function Pd(dd) {
      pd = dd
    }

    function Zd() {
      return pd
    }

    function gd(dd) {
      Nd = dd
    }

    function Cd() {
      return Nd
    }

    function Kd(dd) {
      Wd = dd
    }

    function od() {
      return Wd
    }

    function ld() {
      var dd, Jd;
      return !0 === (null === (dd = Nd) || void 0 === dd || null === (Jd = dd.currentViewer) || void 0 === Jd ? void 0 : Jd.inPlayback)
    }
  },
  4666: (dd, Jd, kd) => {
    kd.d(Jd, {
      D: () => Md,
      G: () => Fd,
      J: () => Yd,
      L: () => Id,
      O: () => Pd,
      P: () => Zd,
      T: () => ad,
      e: () => sd,
      i: () => vd,
      m: () => bd,
      n: () => md,
      q: () => Rd,
      s: () => qd,
      v: () => Gd,
      z: () => xd
    });
    var pd = kd(4673);
    const Nd = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let Wd = Nd;

    function Pd(dd) {
      Wd = null !== dd && void 0 !== dd ? dd : Nd
    }

    function Zd() {
      return Wd
    }
    const gd = new Set,
      Cd = new Set;
    let Kd = -1;
    const od = new Set,
      ld = new Set;
    let Qd = 0,
      Ld = 0;
    const Od = new Set,
      ed = new Set;

    function Rd(dd) {
      return gd.add(dd), () => {
        gd.delete(dd)
      }
    }

    function Id(dd, Jd) {
      for (const pd of gd) try {
        pd(dd)
      } catch (kd) {
        Jd(kd)
      }
    }

    function Gd(dd) {
      return Cd.add(dd), () => {
        Cd.delete(dd)
      }
    }

    function vd(dd, Jd) {
      const kd = Kd < 0 ? 0 : dd - Kd;
      Kd = dd;
      for (const Nd of Cd) try {
        Nd(kd)
      } catch (pd) {
        Jd(pd)
      }
    }

    function xd(dd) {
      return od.add(dd), () => {
        od.delete(dd)
      }
    }

    function qd(dd) {
      return ld.add(dd), () => {
        ld.delete(dd)
      }
    }
    let Bd = 0;

    function sd(dd) {
      Bd += dd
    }

    function ad() {
      const dd = Bd;
      return Bd = 0, dd
    }

    function Md(dd) {
      return Od.add(dd), () => {
        Od.delete(dd)
      }
    }

    function Fd(dd) {
      return ed.add(dd), () => {
        ed.delete(dd)
      }
    }

    function Yd() {
      Qd = 0, Ld = 0, Kd = -1
    }

    function md(dd, Jd) {
      if ("paced" === dd) return Ld += Jd, null;
      if ("drawn" !== dd && "skipped" !== dd) return null;
      const kd = Jd + Ld;
      return Ld = 0, kd
    }

    function bd(dd, Jd, kd, Nd) {
      const Wd = (0, pd.h)(Jd),
        Pd = dd > 0 ? performance.now() : 0;
      for (let pd = 0; pd < dd; pd++)
        for (const dd of Od) try {
          dd()
        } catch (Zd) {
          Nd(Zd)
        }
      if (dd > 0 && sd(performance.now() - Pd), null !== kd) {
        for (const dd of od) try {
          dd(kd)
        } catch (Zd) {
          Nd(Zd)
        }
        Qd += kd
      }
      if ("drawn" === Jd) {
        const dd = Qd;
        Qd = 0;
        for (const Jd of ld) try {
          Jd(dd)
        } catch (Zd) {
          Nd(Zd)
        }
      }
      for (const pd of ed) try {
        pd(dd, Wd)
      } catch (Zd) {
        Nd(Zd)
      }
    }
  },
  40900: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => pd
    });
    const pd = {
      stop: () => pd,
      fade: () => pd,
      rate: () => pd,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => pd,
      setPannerAttr: () => pd,
      setPosition: () => pd
    }
  },
  4696: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => gd,
      e: () => Wd,
      i: () => Zd
    });
    var pd = kd(2337),
      Nd = kd(4704);

    function Wd(dd) {
      let {
        action: Jd,
        flags: kd
      } = dd;
      return "mid-fire" === Jd && 0 !== (kd & pd.d.AltLeftClick)
    }
    const Pd = new Set;

    function Zd(dd) {
      return Pd.add(dd), () => {
        Pd.delete(dd)
      }
    }

    function gd(dd) {
      const Jd = Nd.c[255 & dd];
      if (void 0 === Jd) return;
      const kd = dd >>> 8 & 255,
        Wd = {
          action: Jd,
          down: 0 !== (kd & pd.d.Down),
          flags: kd,
          press: dd >>> 16
        };
      for (const pd of Pd) pd(Wd)
    }
  },
  4704: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Nd,
      f: () => Wd,
      j: () => Pd,
      n: () => pd,
      r: () => Zd
    });
    const pd = {
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
      Nd = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      Wd = {
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
      Pd = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      Zd = [16]
  },
  40993: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Kd,
      c: () => Cd,
      f: () => gd
    });
    var pd = kd(4688),
      Nd = kd(2337),
      Wd = kd(4709);
    let Pd = !1,
      Zd = !1;

    function gd(dd) {
      Pd = !0;
      try {
        dd()
      } finally {
        Pd = !1
      }
    }

    function Cd(dd, Jd) {
      if (Pd) return !1;
      switch (dd) {
        case pd.F.MouseDown:
        case pd.F.MouseUp:
        case pd.F.TouchStart:
        case pd.F.TouchEnd:
        case pd.F.TouchCancel:
        case pd.F.TouchButton:
          return !0;
        case pd.F.KeyDown:
        case pd.F.KeyUp:
          return 0 === (Jd & Nd.g.Repeat) && !(0, Wd.f)(document.activeElement);
        default:
          return !1
      }
    }

    function Kd(dd) {
      Zd || (Zd = !0, queueMicrotask((() => {
        Zd = !1, dd()
      })))
    }
  },
  4709: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Zd,
      f: () => Pd,
      i: () => Cd
    });
    var pd = kd(2337),
      Nd = kd(2345);
    const Wd = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function Pd(dd) {
      return dd instanceof HTMLElement && (!!(dd.isContentEditable || dd instanceof HTMLTextAreaElement || dd instanceof HTMLSelectElement) || dd instanceof HTMLInputElement && !Wd.has(dd.type))
    }

    function Zd(dd) {
      let Jd = null;
      const kd = kd => {
          const Nd = Pd(kd);
          Nd !== Jd && (Jd = Nd, dd(pd.k.UiCapture, pd.y.Keyboard, 0, 0, Nd ? pd.y.Keyboard : 0))
        },
        Nd = dd => {
          kd(dd.target)
        },
        Wd = dd => {
          kd(dd.relatedTarget)
        },
        Zd = () => {
          kd(document.activeElement)
        },
        gd = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", Nd, gd), document.addEventListener("focusout", Wd, gd), document.addEventListener("keydown", Zd, gd), kd(document.activeElement), () => {
        document.removeEventListener("focusin", Nd, gd), document.removeEventListener("focusout", Wd, gd), document.removeEventListener("keydown", Zd, gd)
      }
    }
    const gd = new Map;

    function Cd(dd, Jd) {
      var kd;
      let pd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      gd.set(pd, (null !== (kd = gd.get(pd)) && void 0 !== kd ? kd : 0) & ~dd | Jd & dd);
      let Wd = 0;
      for (const Nd of gd.values()) Wd |= Nd;
      return (0, Nd.F)(dd, Wd & dd)
    }
  },
  40728: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Kd,
      e: () => gd,
      g: () => Zd,
      k: () => Cd
    });
    var pd = kd(1942);
    let Nd = null,
      Wd = 0;
    const Pd = new Set;

    function Zd() {
      return Nd
    }

    function gd() {
      return Wd
    }

    function Cd(dd) {
      Nd = dd, Wd++, (0, pd.e)();
      for (const Jd of Pd) Jd()
    }

    function Kd(dd) {
      Pd.add(dd)
    }
  },
  41049: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => pd
    });
    const pd = 2e3
  },
  40893: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Gd,
      d: () => Cd,
      g: () => ed,
      k: () => Id,
      n: () => Rd,
      o: () => vd
    });
    var pd = kd(22),
      Nd = kd(29),
      Wd = kd(2656),
      Pd = kd(1320),
      Zd = kd(9162),
      gd = kd(2663);

    function Cd() {
      var dd;
      const Jd = (kd = pd.d.get("clientEscMenuOptions"), Nd = (0, Wd.z)(), {
        sampleCount: kd.antiAliasing ? 4 : 1,
        n: (0, Wd.p)(kd.pixelScale, Nd),
        pixelated: (0, Wd.m)(kd.pixelSmoothing)
      });
      var kd, Nd;
      return Jd.sampleCount > 1 && (0, Zd.e)() && (Jd.sampleCount = 1), Jd.n = null !== (dd = (0, Zd.o)()) && void 0 !== dd ? dd : Jd.n, Jd
    }
    let Kd = null,
      od = null;
    const ld = new Set;
    let Qd = null;

    function Ld() {
      for (const dd of ld) dd()
    }

    function Od() {
      if (null === Kd) {
        const dd = document.createElement("div");
        dd.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", dd.setAttribute("aria-hidden", "true"), document.body.append(dd), od = dd, Kd = new Wd.b(dd, Ld)
      }
      return Kd
    }

    function ed(dd) {
      const Jd = (0, Wd.e)(),
        [kd, pd] = Od().size(Jd);
      return (0, Wd.d)(kd, pd, Jd, dd.n)
    }

    function Rd(dd) {
      var Jd, kd, pd, Nd;
      const Zd = (0, Wd.e)(),
        [gd, Kd] = Od().size(Zd);
      if (gd <= 0 || Kd <= 0) return null;
      const od = (0, Wd.d)(gd, Kd, Zd, Cd().n);
      return (0, Wd.c)(dd, od), dd.style.left = `${null!==(Jd=null===(kd=Qd)||void 0===kd?void 0:kd.rect.left)&&void 0!==Jd?Jd:0}px`, dd.style.top = `${null!==(pd=null===(Nd=Qd)||void 0===Nd?void 0:Nd.rect.top)&&void 0!==pd?pd:0}px`, (0, Pd.H)(dd.style, Qd), od
    }

    function Id(dd) {
      Qd = dd, Od(), (0, Pd.y)(od.style, dd, ""), Ld()
    }

    function Gd(dd, Jd) {
      dd.style.imageRendering = (0, Wd.C)(Jd.pixelated)
    }

    function vd(dd, Jd) {
      const kd = (0, Nd.n)("appManagerUpdated|clientEscMenuOptions", (() => {
          Gd(dd, Cd()), Jd()
        })),
        pd = (0, Zd.y)(Jd),
        Wd = (0, gd.l)(Jd);
      return Od(), ld.add(Jd), () => {
        kd(), pd(), Wd(), ld.delete(Jd)
      }
    }
  },
  41051: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Pd,
      c: () => Wd,
      e: () => Nd
    });
    let pd = null;

    function Nd(dd) {
      pd = dd
    }

    function Wd(dd) {
      pd === dd && (pd = null)
    }

    function Pd() {
      var dd;
      null === (dd = pd) || void 0 === dd || dd()
    }
  },
  41011: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Nd,
      h: () => Cd,
      j: () => Wd,
      k: () => od,
      n: () => Kd,
      p: () => ld
    });
    var pd = kd(2770);
    class Nd extends Error {
      constructor(dd, Jd, kd) {
        super(`${"fetch"===dd?"fetching":"decoding"} ${Jd} failed`, kd), this.stage = dd, this.source = Jd, this.name = "ShellImageError"
      }
    }
    async function Wd(dd) {
      let Jd, kd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pd.D,
        Wd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      if ("string" === typeof dd) try {
        Jd = await kd(dd)
      } catch (Pd) {
        throw new Nd("fetch", dd, {
          cause: Pd
        })
      } else Jd = dd;
      try {
        const dd = new Blob([Jd.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(dd, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: Wd
        })
      } catch (Pd) {
        throw new Nd("decode", "string" === typeof dd ? dd : `${Jd.byteLength} bytes`, {
          cause: Pd
        })
      }
    }
    let Pd = null;
    const Zd = new Map;
    let gd = 1;

    function Cd(dd) {
      if (Pd = dd, null !== dd) {
        for (const [Jd, kd] of Zd) dd.Kpd(Jd, kd);
        Zd.clear()
      }
    }

    function Kd(dd) {
      const Jd = gd++;
      return Pd ? Pd.Kpd(Jd, dd) : Zd.set(Jd, dd), Jd
    }
    async function od(dd, Jd, kd) {
      const pd = await Wd(dd, Jd, kd);
      return {
        id: Kd(pd),
        width: pd.width,
        height: pd.height
      }
    }

    function ld(dd) {
      var Jd;
      const kd = Zd.get(dd);
      if (kd) return kd.close(), void Zd.delete(dd);
      null === (Jd = Pd) || void 0 === Jd || Jd.lpd(dd)
    }
  },
  40919: (dd, Jd, kd) => {
    function pd(dd, Jd) {
      if (!Object.prototype.hasOwnProperty.call(dd, Jd)) throw new TypeError("attempted to use private field on non-instance");
      return dd
    }
    kd.d(Jd, {
      b: () => pd
    })
  },
  40924: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Nd
    });
    var pd = 0;

    function Nd(dd) {
      return "__private_" + pd++ + "_" + dd
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);