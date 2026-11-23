export const id = 87;
export const ids = [87];
export const modules = {
  40891: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      C: () => uk,
      G: () => rk,
      H: () => Uk,
      I: () => nk,
      M: () => Rk,
      Q: () => Ok,
      U: () => Yk,
      X: () => dk,
      _: () => pk,
      d: () => Ak,
      e: () => Nk,
      h: () => vk,
      l: () => gk,
      n: () => Ek,
      p: () => Sk,
      t: () => Ck,
      x: () => Gk,
      z: () => bk
    });
    var Xk = Ik(1364),
      Tk = Ik(34),
      ik = Ik(1270),
      yk = Ik(2331),
      lk = Ik(4814),
      ak = Ik(4792);
    let qk, Lk = !1,
      tk = !1,
      Zk = !1,
      jk = !1;
    const ek = 1300,
      wk = 3e3;
    let Hk = 0,
      Jk = !1,
      xk = !1,
      Pk = 0;
    const Kk = 2;
    let Qk = !1,
      sk = !1;
    const Vk = new Set,
      zk = new Set;

    function Sk() {
      return Lk
    }

    function vk() {
      return xk
    }

    function Ek() {
      return sk
    }

    function Ok() {
      return (0, ik.n)() && !sk
    }

    function nk(kk) {
      let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (kk !== sk) {
        sk = kk;
        for (const kk of [...zk]) kk(sk);
        Fk && dk()
      }
    }

    function Gk(kk) {
      return zk.add(kk), () => {
        zk.delete(kk)
      }
    }

    function pk() {
      (0, lk.g)(yk.A.Menu, (0, ik.n)() ? 0 : yk.A.Menu)
    }

    function uk() {
      xk = !1, Pk = 0, pk(), dk()
    }

    function bk(kk) {
      return Vk.add(kk), () => {
        Vk.delete(kk)
      }
    }

    function Rk(kk) {
      tk = !1, kk !== Lk && (Lk = kk, jk = !1, clearTimeout(qk), Zk = !Lk && Qk, Lk ? (Jk = !1, xk = !1, Pk = 0) : Ok() && !Qk && (xk = !0), Qk = !1, Lk && !Ok() && hk(), Dk(), Zk && dk())
    }

    function Uk(kk) {
      kk !== Jk && (Jk = kk, kk || dk())
    }

    function Ck() {
      tk = !1, jk || !0 !== fk() || (jk = !0, clearTimeout(qk), qk = setTimeout(ck, ek))
    }

    function Nk() {
      return (!tk || performance.now() - Hk > wk) && (tk = (0, ak.I)().lockPointer(), Hk = performance.now()), tk
    }

    function ck() {
      Wk() && Bk() && Nk()
    }

    function Wk() {
      return Ok() && !Lk && !Jk && !(0, Xk.f)()
    }

    function fk() {
      var kk;
      return "undefined" === typeof navigator || null === (kk = navigator.userActivation) || void 0 === kk ? void 0 : kk.isActive
    }

    function Bk() {
      return Zk && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== fk()
    }

    function dk() {
      Ok() ? Wk() && !xk && Bk() && Nk() : Lk && !Qk && hk()
    }

    function Yk() {
      xk ? navigator.vendor.startsWith("Apple") ? mk() : Pk = Kk : dk()
    }

    function Ak() {
      Pk > 0 && 0 === --Pk && mk()
    }

    function gk() {
      Pk = 0
    }

    function mk() {
      Wk() && !0 === fk() && Nk()
    }

    function hk() {
      Qk = !0, (0, ak.I)().unlockPointer()
    }

    function rk() {
      tk = !1, Zk = !1, jk = !1, clearTimeout(qk), Jk = !1, xk = !1, Pk = 0, Qk = !1;
      const kk = Lk;
      Lk = !1, kk && Dk()
    }

    function Dk() {
      for (const kk of [...Vk]) kk(Lk);
      Tk.g.GL("pointerLockUpdate", Lk)
    }
  },
  40685: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Zk,
      f: () => lk,
      g: () => tk,
      j: () => qk,
      n: () => yk,
      q: () => Lk,
      r: () => ak
    });
    let Xk = null,
      Tk = null,
      ik = null;

    function yk(kk) {
      Xk = kk
    }

    function lk() {
      return Xk
    }

    function ak(kk) {
      Tk = kk
    }

    function qk() {
      return Tk
    }

    function Lk(kk) {
      ik = kk
    }

    function tk() {
      return ik
    }

    function Zk() {
      var kk, Fk;
      return !0 === (null === (kk = Tk) || void 0 === kk || null === (Fk = kk.currentViewer) || void 0 === Fk ? void 0 : Fk.inPlayback)
    }
  },
  4792: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      A: () => Ok,
      D: () => xk,
      F: () => yk,
      I: () => lk,
      L: () => Sk,
      c: () => zk,
      g: () => Kk,
      k: () => Gk,
      l: () => nk,
      o: () => Jk,
      s: () => sk,
      t: () => Pk,
      u: () => Qk,
      y: () => vk,
      z: () => Ek
    });
    var Xk = Ik(4794);
    const Tk = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let ik = Tk;

    function yk(kk) {
      ik = null !== kk && void 0 !== kk ? kk : Tk
    }

    function lk() {
      return ik
    }
    const ak = new Set,
      qk = new Set;
    let Lk = -1;
    const tk = new Set,
      Zk = new Set;
    let jk = 0,
      ek = 0;
    const wk = new Set,
      Hk = new Set;

    function Jk(kk) {
      return ak.add(kk), () => {
        ak.delete(kk)
      }
    }

    function xk(kk, Fk) {
      for (const Xk of ak) try {
        Xk(kk)
      } catch (Ik) {
        Fk(Ik)
      }
    }

    function Pk(kk) {
      return qk.add(kk), () => {
        qk.delete(kk)
      }
    }

    function Kk(kk, Fk) {
      const Ik = Lk < 0 ? 0 : kk - Lk;
      Lk = kk;
      for (const Tk of qk) try {
        Tk(Ik)
      } catch (Xk) {
        Fk(Xk)
      }
    }

    function Qk(kk) {
      return tk.add(kk), () => {
        tk.delete(kk)
      }
    }

    function sk(kk) {
      return Zk.add(kk), () => {
        Zk.delete(kk)
      }
    }
    let Vk = 0;

    function zk(kk) {
      Vk += kk
    }

    function Sk() {
      const kk = Vk;
      return Vk = 0, kk
    }

    function vk(kk) {
      return wk.add(kk), () => {
        wk.delete(kk)
      }
    }

    function Ek(kk) {
      return Hk.add(kk), () => {
        Hk.delete(kk)
      }
    }

    function Ok() {
      jk = 0, ek = 0, Lk = -1
    }

    function nk(kk, Fk) {
      if ("paced" === kk) return ek += Fk, null;
      if ("drawn" !== kk && "skipped" !== kk) return null;
      const Ik = Fk + ek;
      return ek = 0, Ik
    }

    function Gk(kk, Fk, Ik, Tk) {
      const ik = (0, Xk.f)(Fk),
        yk = kk > 0 ? performance.now() : 0;
      for (let Xk = 0; Xk < kk; Xk++)
        for (const kk of wk) try {
          kk()
        } catch (lk) {
          Tk(lk)
        }
      if (kk > 0 && zk(performance.now() - yk), null !== Ik) {
        for (const kk of tk) try {
          kk(Ik)
        } catch (lk) {
          Tk(lk)
        }
        jk += Ik
      }
      if ("drawn" === Fk) {
        const kk = jk;
        jk = 0;
        for (const Fk of Zk) try {
          Fk(kk)
        } catch (lk) {
          Tk(lk)
        }
      }
      for (const Xk of Hk) try {
        Xk(kk, ik)
      } catch (lk) {
        Tk(lk)
      }
    }
  },
  40900: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Xk
    });
    const Xk = {
      stop: () => Xk,
      fade: () => Xk,
      rate: () => Xk,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => Xk,
      setPannerAttr: () => Xk,
      setPosition: () => Xk
    }
  },
  4801: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => ak,
      f: () => ik,
      g: () => lk
    });
    var Xk = Ik(2331),
      Tk = Ik(4810);

    function ik(kk) {
      let {
        action: Fk,
        flags: Ik
      } = kk;
      return "mid-fire" === Fk && 0 !== (Ik & Xk.e.AltLeftClick)
    }
    const yk = new Set;

    function lk(kk) {
      return yk.add(kk), () => {
        yk.delete(kk)
      }
    }

    function ak(kk) {
      const Fk = Tk.e[255 & kk];
      if (void 0 === Fk) return;
      const Ik = kk >>> 8 & 255,
        ik = {
          action: Fk,
          down: 0 !== (Ik & Xk.e.Down),
          flags: Ik,
          press: kk >>> 16
        };
      for (const Xk of yk) Xk(ik)
    }
  },
  4810: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Tk,
      g: () => ik,
      k: () => yk,
      o: () => Xk,
      s: () => lk
    });
    const Xk = {
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
      Tk = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      ik = {
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
      yk = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      lk = [16]
  },
  40930: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Lk,
      e: () => qk,
      h: () => ak
    });
    var Xk = Ik(4799),
      Tk = Ik(2331),
      ik = Ik(4814);
    let yk = !1,
      lk = !1;

    function ak(kk) {
      yk = !0;
      try {
        kk()
      } finally {
        yk = !1
      }
    }

    function qk(kk, Fk) {
      if (yk) return !1;
      switch (kk) {
        case Xk.I.MouseDown:
        case Xk.I.MouseUp:
        case Xk.I.TouchStart:
        case Xk.I.TouchEnd:
        case Xk.I.TouchCancel:
        case Xk.I.TouchButton:
          return !0;
        case Xk.I.KeyDown:
        case Xk.I.KeyUp:
          return 0 === (Fk & Tk.i.Repeat) && !(0, ik.f)(document.activeElement);
        default:
          return !1
      }
    }

    function Lk(kk) {
      lk || (lk = !0, queueMicrotask((() => {
        lk = !1, kk()
      })))
    }
  },
  4814: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => lk,
      f: () => yk,
      g: () => qk
    });
    var Xk = Ik(2331),
      Tk = Ik(2338);
    const ik = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function yk(kk) {
      return kk instanceof HTMLElement && (!!(kk.isContentEditable || kk instanceof HTMLTextAreaElement || kk instanceof HTMLSelectElement) || kk instanceof HTMLInputElement && !ik.has(kk.type))
    }

    function lk(kk) {
      let Fk = null;
      const Ik = Ik => {
          const Tk = yk(Ik);
          Tk !== Fk && (Fk = Tk, kk(Xk.m.UiCapture, Xk.A.Keyboard, 0, 0, Tk ? Xk.A.Keyboard : 0))
        },
        Tk = kk => {
          Ik(kk.target)
        },
        ik = kk => {
          Ik(kk.relatedTarget)
        },
        lk = () => {
          Ik(document.activeElement)
        },
        ak = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", Tk, ak), document.addEventListener("focusout", ik, ak), document.addEventListener("keydown", lk, ak), Ik(document.activeElement), () => {
        document.removeEventListener("focusin", Tk, ak), document.removeEventListener("focusout", ik, ak), document.removeEventListener("keydown", lk, ak)
      }
    }
    const ak = new Map;

    function qk(kk, Fk) {
      var Ik;
      let Xk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      ak.set(Xk, (null !== (Ik = ak.get(Xk)) && void 0 !== Ik ? Ik : 0) & ~kk | Fk & kk);
      let ik = 0;
      for (const Tk of ak.values()) ik |= Tk;
      return (0, Tk.x)(kk, ik & kk)
    }
  },
  40963: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Lk,
      e: () => ak,
      i: () => lk,
      m: () => qk
    });
    var Xk = Ik(1886);
    let Tk = null,
      ik = 0;
    const yk = new Set;

    function lk() {
      return Tk
    }

    function ak() {
      return ik
    }

    function qk(kk) {
      Tk = kk, ik++, (0, Xk.c)();
      for (const Fk of yk) Fk()
    }

    function Lk(kk) {
      yk.add(kk)
    }
  },
  41003: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Xk
    });
    const Xk = 2e3
  },
  40896: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => sk,
      d: () => Zk,
      e: () => Pk,
      f: () => Qk,
      i: () => Kk,
      l: () => Vk
    });
    var Xk = Ik(165),
      Tk = Ik(25),
      ik = Ik(34),
      yk = Ik(2830),
      lk = Ik(1276),
      ak = Ik(34095),
      qk = Ik(293),
      Lk = Ik(95),
      tk = Ik(161);

    function Zk() {
      var kk;
      const Fk = (0, yk.L)(),
        Ik = function(kk, Fk) {
          return {
            sampleCount: kk.antiAliasing ? 4 : 1,
            n: (0, yk.B)(kk.pixelScale, Fk),
            pixelated: (0, yk.x)(kk.pixelSmoothing)
          }
        }(Tk.d.get("clientEscMenuOptions"), Fk);
      return Ik.sampleCount > 1 && (0, ak.e)() && (Ik.sampleCount = 1), Ik.n = null !== (kk = (0, ak.m)()) && void 0 !== kk ? kk : Ik.n, Xk.h.includes((0, Lk.getSoftwareRenderer)()) && (Ik.sampleCount = 1, Ik.n = Math.max(Ik.n, (0, yk.B)(tk.q.pixelScale, Fk))), Ik
    }
    let jk = null,
      ek = null;
    const wk = new Set;
    let Hk = null;

    function Jk() {
      for (const kk of wk) kk()
    }

    function xk() {
      if (null === jk) {
        const kk = document.createElement("div");
        kk.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", kk.setAttribute("aria-hidden", "true"), document.body.append(kk), ek = kk, jk = new yk.e(kk, Jk)
      }
      return jk
    }

    function Pk(kk) {
      const Fk = (0, yk.m)(),
        [Ik, Xk] = xk().size(Fk);
      return (0, yk.h)(Ik, Xk, Fk, kk.n)
    }

    function Kk(kk) {
      var Fk, Ik, Xk, Tk;
      const ik = (0, yk.m)(),
        [ak, qk] = xk().size(ik);
      if (ak <= 0 || qk <= 0) return null;
      const Lk = (0, yk.h)(ak, qk, ik, Zk().n);
      return (0, yk.f)(kk, Lk), kk.style.left = `${null!==(Fk=null===(Ik=Hk)||void 0===Ik?void 0:Ik.rect.left)&&void 0!==Fk?Fk:0}px`, kk.style.top = `${null!==(Xk=null===(Tk=Hk)||void 0===Tk?void 0:Tk.rect.top)&&void 0!==Xk?Xk:0}px`, (0, lk.P)(kk.style, Hk), Lk
    }

    function Qk(kk) {
      Hk = kk, xk(), (0, lk.M)(ek.style, kk, ""), Jk()
    }

    function sk(kk, Fk) {
      kk.style.imageRendering = (0, yk.N)(Fk.pixelated)
    }

    function Vk(kk, Fk) {
      const Ik = (0, ik.i)("appManagerUpdated|clientEscMenuOptions", (() => {
          sk(kk, Zk()), Fk()
        })),
        Xk = (0, ak.v)(Fk),
        Tk = (0, qk.n)(Fk);
      return xk(), wk.add(Fk), () => {
        Ik(), Xk(), Tk(), wk.delete(Fk)
      }
    }
  },
  41009: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => yk,
      g: () => ik,
      i: () => Tk
    });
    let Xk = null;

    function Tk(kk) {
      Xk = kk
    }

    function ik(kk) {
      Xk === kk && (Xk = null)
    }

    function yk() {
      var kk;
      null === (kk = Xk) || void 0 === kk || kk()
    }
  },
  40957: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Tk,
      f: () => qk,
      i: () => ik,
      l: () => tk,
      o: () => Lk,
      p: () => Zk
    });
    var Xk = Ik(2803);
    class Tk extends Error {
      constructor(kk, Fk, Ik) {
        super(`${"fetch"===kk?"fetching":"decoding"} ${Fk} failed`, Ik), this.stage = kk, this.source = Fk, this.name = "ShellImageError"
      }
    }
    async function ik(kk) {
      let Fk, Ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xk.K,
        ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      if ("string" === typeof kk) try {
        Fk = await Ik(kk)
      } catch (yk) {
        throw new Tk("fetch", kk, {
          cause: yk
        })
      } else Fk = kk;
      try {
        const kk = new Blob([Fk.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(kk, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: ik
        })
      } catch (yk) {
        throw new Tk("decode", "string" === typeof kk ? kk : `${Fk.byteLength} bytes`, {
          cause: yk
        })
      }
    }
    let yk = null;
    const lk = new Map;
    let ak = 1;

    function qk(kk) {
      if (yk = kk, null !== kk) {
        for (const [Fk, Ik] of lk) kk.gIk(Fk, Ik);
        lk.clear()
      }
    }

    function Lk(kk) {
      const Fk = ak++;
      return yk ? yk.gIk(Fk, kk) : lk.set(Fk, kk), Fk
    }
    async function tk(kk, Fk, Ik) {
      const Xk = await ik(kk, Fk, Ik);
      return {
        id: Lk(Xk),
        width: Xk.width,
        height: Xk.height
      }
    }

    function Zk(kk) {
      var Fk;
      const Ik = lk.get(kk);
      if (Ik) return Ik.close(), void lk.delete(kk);
      null === (Fk = yk) || void 0 === Fk || Fk.mIk(kk)
    }
  },
  40905: (kk, Fk, Ik) => {
    function Xk(kk, Fk) {
      if (!Object.prototype.hasOwnProperty.call(kk, Fk)) throw new TypeError("attempted to use private field on non-instance");
      return kk
    }
    Ik.d(Fk, {
      c: () => Xk
    })
  },
  40914: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Tk
    });
    var Xk = 0;

    function Tk(kk) {
      return "__private_" + Xk++ + "_" + kk
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);