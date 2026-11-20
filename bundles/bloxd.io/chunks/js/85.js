export const id = 85;
export const ids = [85];
export const modules = {
  40122: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      A: () => ck,
      C: () => nk,
      E: () => rk,
      I: () => Mk,
      K: () => Tk,
      L: () => uk,
      M: () => pk,
      O: () => Zk,
      P: () => Uk,
      c: () => Kk,
      e: () => zk,
      h: () => Nk,
      j: () => xk,
      n: () => Hk,
      o: () => Sk,
      p: () => Dk,
      s: () => gk,
      w: () => Gk
    });
    var Rk = Bk(1344),
      tk = Bk(29),
      ak = Bk(1239),
      Xk = Bk(2303),
      bk = Bk(4546),
      wk = Bk(4511);
    let dk, sk = !1,
      Vk = !1,
      Jk = !1,
      Ak = !1;
    const ek = 1300,
      yk = 3e3;
    let fk = 0,
      mk = !1,
      Wk = !1,
      vk = 0;
    const ik = 2;
    let Yk = !1,
      Lk = !1;
    const Ok = new Set,
      Ek = new Set;

    function Sk() {
      return sk
    }

    function Nk() {
      return Wk
    }

    function Hk() {
      return Lk
    }

    function uk() {
      return (0, ak.o)() && !Lk
    }

    function Mk(kk) {
      let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (kk !== Lk) {
        Lk = kk;
        for (const kk of [...Ek]) kk(Lk);
        Fk && Zk()
      }
    }

    function gk(kk) {
      return Ek.add(kk), () => {
        Ek.delete(kk)
      }
    }

    function Uk() {
      (0, bk.i)(Xk.A.Menu, (0, ak.o)() ? 0 : Xk.A.Menu)
    }

    function ck() {
      Wk = !1, vk = 0, Uk(), Zk()
    }

    function Gk(kk) {
      return Ok.add(kk), () => {
        Ok.delete(kk)
      }
    }

    function Tk(kk) {
      Vk = !1, kk !== sk && (sk = kk, Ak = !1, clearTimeout(dk), Jk = !sk && Yk, sk ? (mk = !1, Wk = !1, vk = 0) : uk() && !Yk && (Wk = !0), Yk = !1, sk && !uk() && lk(), Ik(), Jk && Zk())
    }

    function rk(kk) {
      kk !== mk && (mk = kk, kk || Zk())
    }

    function Dk() {
      Vk = !1, Ak || !0 !== qk() || (Ak = !0, clearTimeout(dk), dk = setTimeout(Pk, ek))
    }

    function zk() {
      return (!Vk || performance.now() - fk > yk) && (Vk = (0, wk.J)().lockPointer(), fk = performance.now()), Vk
    }

    function Pk() {
      hk() && Ck() && zk()
    }

    function hk() {
      return uk() && !sk && !mk && !(0, Rk.h)()
    }

    function qk() {
      var kk;
      return "undefined" === typeof navigator || null === (kk = navigator.userActivation) || void 0 === kk ? void 0 : kk.isActive
    }

    function Ck() {
      return Jk && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== qk()
    }

    function Zk() {
      uk() ? hk() && !Wk && Ck() && zk() : sk && !Yk && lk()
    }

    function pk() {
      Wk ? navigator.vendor.startsWith("Apple") ? jk() : vk = ik : Zk()
    }

    function Kk() {
      vk > 0 && 0 === --vk && jk()
    }

    function xk() {
      vk = 0
    }

    function jk() {
      hk() && !0 === qk() && zk()
    }

    function lk() {
      Yk = !0, (0, wk.J)().unlockPointer()
    }

    function nk() {
      Vk = !1, Jk = !1, Ak = !1, clearTimeout(dk), mk = !1, Wk = !1, vk = 0, Yk = !1;
      const kk = sk;
      sk = !1, kk && Ik()
    }

    function Ik() {
      for (const kk of [...Ok]) kk(sk);
      tk.o.Hf("pointerLockUpdate", sk)
    }
  },
  40097: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Jk,
      d: () => bk,
      e: () => Vk,
      i: () => dk,
      k: () => Xk,
      m: () => sk,
      q: () => wk
    });
    let Rk = null,
      tk = null,
      ak = null;

    function Xk(kk) {
      Rk = kk
    }

    function bk() {
      return Rk
    }

    function wk(kk) {
      tk = kk
    }

    function dk() {
      return tk
    }

    function sk(kk) {
      ak = kk
    }

    function Vk() {
      return ak
    }

    function Jk() {
      var kk, Fk;
      return !0 === (null === (kk = tk) || void 0 === kk || null === (Fk = kk.currentViewer) || void 0 === Fk ? void 0 : Fk.inPlayback)
    }
  },
  4511: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      A: () => Hk,
      B: () => uk,
      D: () => Wk,
      G: () => Xk,
      J: () => bk,
      N: () => Sk,
      b: () => Ek,
      e: () => ik,
      h: () => gk,
      l: () => Mk,
      m: () => mk,
      p: () => Lk,
      s: () => vk,
      t: () => Yk,
      x: () => Nk
    });
    var Rk = Bk(4517);
    const tk = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let ak = tk;

    function Xk(kk) {
      ak = null !== kk && void 0 !== kk ? kk : tk
    }

    function bk() {
      return ak
    }
    const wk = new Set,
      dk = new Set;
    let sk = -1;
    const Vk = new Set,
      Jk = new Set;
    let Ak = 0,
      ek = 0;
    const yk = new Set,
      fk = new Set;

    function mk(kk) {
      return wk.add(kk), () => {
        wk.delete(kk)
      }
    }

    function Wk(kk, Fk) {
      for (const Rk of wk) try {
        Rk(kk)
      } catch (Bk) {
        Fk(Bk)
      }
    }

    function vk(kk) {
      return dk.add(kk), () => {
        dk.delete(kk)
      }
    }

    function ik(kk, Fk) {
      const Bk = sk < 0 ? 0 : kk - sk;
      sk = kk;
      for (const tk of dk) try {
        tk(Bk)
      } catch (Rk) {
        Fk(Rk)
      }
    }

    function Yk(kk) {
      return Vk.add(kk), () => {
        Vk.delete(kk)
      }
    }

    function Lk(kk) {
      return Jk.add(kk), () => {
        Jk.delete(kk)
      }
    }
    let Ok = 0;

    function Ek(kk) {
      Ok += kk
    }

    function Sk() {
      const kk = Ok;
      return Ok = 0, kk
    }

    function Nk(kk) {
      return yk.add(kk), () => {
        yk.delete(kk)
      }
    }

    function Hk(kk) {
      return fk.add(kk), () => {
        fk.delete(kk)
      }
    }

    function uk() {
      Ak = 0, ek = 0, sk = -1
    }

    function Mk(kk, Fk) {
      if ("paced" === kk) return ek += Fk, null;
      if ("drawn" !== kk && "skipped" !== kk) return null;
      const Bk = Fk + ek;
      return ek = 0, Bk
    }

    function gk(kk, Fk, Bk, tk) {
      const ak = (0, Rk.i)(Fk),
        Xk = kk > 0 ? performance.now() : 0;
      for (let Rk = 0; Rk < kk; Rk++)
        for (const kk of yk) try {
          kk()
        } catch (bk) {
          tk(bk)
        }
      if (kk > 0 && Ek(performance.now() - Xk), null !== Bk) {
        for (const kk of Vk) try {
          kk(Bk)
        } catch (bk) {
          tk(bk)
        }
        Ak += Bk
      }
      if ("drawn" === Fk) {
        const kk = Ak;
        Ak = 0;
        for (const Fk of Jk) try {
          Fk(kk)
        } catch (bk) {
          tk(bk)
        }
      }
      for (const Rk of fk) try {
        Rk(kk, ak)
      } catch (bk) {
        tk(bk)
      }
    }
  },
  40322: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Rk
    });
    const Rk = {
      stop: () => Rk,
      fade: () => Rk,
      rate: () => Rk,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => Rk,
      setPannerAttr: () => Rk,
      setPosition: () => Rk
    }
  },
  4533: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => wk,
      h: () => ak,
      l: () => bk
    });
    var Rk = Bk(2303),
      tk = Bk(4541);

    function ak(kk) {
      let {
        action: Fk,
        flags: Bk
      } = kk;
      return "mid-fire" === Fk && 0 !== (Bk & Rk.d.AltLeftClick)
    }
    const Xk = new Set;

    function bk(kk) {
      return Xk.add(kk), () => {
        Xk.delete(kk)
      }
    }

    function wk(kk) {
      const Fk = tk.c[255 & kk];
      if (void 0 === Fk) return;
      const Bk = kk >>> 8 & 255,
        ak = {
          action: Fk,
          down: 0 !== (Bk & Rk.d.Down),
          flags: Bk,
          press: kk >>> 16
        };
      for (const Rk of Xk) Rk(ak)
    }
  },
  4541: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => tk,
      f: () => ak,
      j: () => Xk,
      m: () => Rk,
      o: () => bk
    });
    const Rk = {
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
      tk = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      ak = {
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
      Xk = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      bk = [16]
  },
  40427: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => sk,
      c: () => dk,
      g: () => wk
    });
    var Rk = Bk(4531),
      tk = Bk(2303),
      ak = Bk(4546);
    let Xk = !1,
      bk = !1;

    function wk(kk) {
      Xk = !0;
      try {
        kk()
      } finally {
        Xk = !1
      }
    }

    function dk(kk, Fk) {
      if (Xk) return !1;
      switch (kk) {
        case Rk.A.MouseDown:
        case Rk.A.MouseUp:
        case Rk.A.TouchStart:
        case Rk.A.TouchEnd:
        case Rk.A.TouchCancel:
        case Rk.A.TouchButton:
          return !0;
        case Rk.A.KeyDown:
        case Rk.A.KeyUp:
          return 0 === (Fk & tk.g.Repeat) && !(0, ak.g)(document.activeElement);
        default:
          return !1
      }
    }

    function sk(kk) {
      bk || (bk = !0, queueMicrotask((() => {
        bk = !1, kk()
      })))
    }
  },
  4546: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => bk,
      g: () => Xk,
      i: () => dk
    });
    var Rk = Bk(2303),
      tk = Bk(2305);
    const ak = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function Xk(kk) {
      return kk instanceof HTMLElement && (!!(kk.isContentEditable || kk instanceof HTMLTextAreaElement || kk instanceof HTMLSelectElement) || kk instanceof HTMLInputElement && !ak.has(kk.type))
    }

    function bk(kk) {
      let Fk = null;
      const Bk = Bk => {
          const tk = Xk(Bk);
          tk !== Fk && (Fk = tk, kk(Rk.j.UiCapture, Rk.A.Keyboard, 0, 0, tk ? Rk.A.Keyboard : 0))
        },
        tk = kk => {
          Bk(kk.target)
        },
        ak = kk => {
          Bk(kk.relatedTarget)
        },
        bk = () => {
          Bk(document.activeElement)
        },
        wk = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", tk, wk), document.addEventListener("focusout", ak, wk), document.addEventListener("keydown", bk, wk), Bk(document.activeElement), () => {
        document.removeEventListener("focusin", tk, wk), document.removeEventListener("focusout", ak, wk), document.removeEventListener("keydown", bk, wk)
      }
    }
    const wk = new Map;

    function dk(kk, Fk) {
      var Bk;
      let Rk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      wk.set(Rk, (null !== (Bk = wk.get(Rk)) && void 0 !== Bk ? Bk : 0) & ~kk | Fk & kk);
      let ak = 0;
      for (const tk of wk.values()) ak |= tk;
      return (0, tk.x)(kk, ak & kk)
    }
  },
  40476: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Rk
    });
    const Rk = 2e3
  },
  40319: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => vk,
      h: () => dk,
      l: () => fk,
      p: () => Wk,
      q: () => mk,
      r: () => ik
    });
    var Rk = Bk(22),
      tk = Bk(29),
      ak = Bk(2660),
      Xk = Bk(1245),
      bk = Bk(8926),
      wk = Bk(2667);

    function dk() {
      var kk;
      const Fk = (Bk = Rk.c.get("clientEscMenuOptions"), tk = (0, ak.C)(), {
        sampleCount: Bk.antiAliasing ? 4 : 1,
        n: (0, ak.s)(Bk.pixelScale, tk),
        pixelated: (0, ak.p)(Bk.pixelSmoothing)
      });
      var Bk, tk;
      return Fk.sampleCount > 1 && (0, bk.c)() && (Fk.sampleCount = 1), Fk.n = null !== (kk = (0, bk.l)()) && void 0 !== kk ? kk : Fk.n, Fk
    }
    let sk = null,
      Vk = null;
    const Jk = new Set;
    let Ak = null;

    function ek() {
      for (const kk of Jk) kk()
    }

    function yk() {
      if (null === sk) {
        const kk = document.createElement("div");
        kk.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", kk.setAttribute("aria-hidden", "true"), document.body.append(kk), Vk = kk, sk = new ak.c(kk, ek)
      }
      return sk
    }

    function fk(kk) {
      const Fk = (0, ak.h)(),
        [Bk, Rk] = yk().size(Fk);
      return (0, ak.g)(Bk, Rk, Fk, kk.n)
    }

    function mk(kk) {
      var Fk, Bk, Rk, tk;
      const bk = (0, ak.h)(),
        [wk, sk] = yk().size(bk);
      if (wk <= 0 || sk <= 0) return null;
      const Vk = (0, ak.g)(wk, sk, bk, dk().n);
      return (0, ak.f)(kk, Vk), kk.style.left = `${null!==(Fk=null===(Bk=Ak)||void 0===Bk?void 0:Bk.rect.left)&&void 0!==Fk?Fk:0}px`, kk.style.top = `${null!==(Rk=null===(tk=Ak)||void 0===tk?void 0:tk.rect.top)&&void 0!==Rk?Rk:0}px`, (0, Xk.H)(kk.style, Ak), Vk
    }

    function Wk(kk) {
      Ak = kk, yk(), (0, Xk.z)(Vk.style, kk, ""), ek()
    }

    function vk(kk, Fk) {
      kk.style.imageRendering = (0, ak.D)(Fk.pixelated)
    }

    function ik(kk, Fk) {
      const Bk = (0, tk.p)("appManagerUpdated|clientEscMenuOptions", (() => {
          vk(kk, dk()), Fk()
        })),
        Rk = (0, bk.w)(Fk),
        ak = (0, wk.p)(Fk);
      return yk(), Jk.add(Fk), () => {
        Bk(), Rk(), ak(), Jk.delete(Fk)
      }
    }
  },
  40481: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Xk,
      f: () => ak,
      j: () => tk
    });
    let Rk = null;

    function tk(kk) {
      Rk = kk
    }

    function ak(kk) {
      Rk === kk && (Rk = null)
    }

    function Xk() {
      var kk;
      null === (kk = Rk) || void 0 === kk || kk()
    }
  },
  40440: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => tk,
      f: () => dk,
      j: () => ak,
      n: () => Vk,
      q: () => sk,
      r: () => Jk
    });
    var Rk = Bk(3506);
    class tk extends Error {
      constructor(kk, Fk, Bk) {
        super(`${"fetch"===kk?"fetching":"decoding"} ${Fk} failed`, Bk), this.stage = kk, this.source = Fk, this.name = "ShellImageError"
      }
    }
    async function ak(kk) {
      let Fk, Bk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Rk.N,
        ak = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      if ("string" === typeof kk) try {
        Fk = await Bk(kk)
      } catch (Xk) {
        throw new tk("fetch", kk, {
          cause: Xk
        })
      } else Fk = kk;
      try {
        const kk = new Blob([Fk.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(kk, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: ak
        })
      } catch (Xk) {
        throw new tk("decode", "string" === typeof kk ? kk : `${Fk.byteLength} bytes`, {
          cause: Xk
        })
      }
    }
    let Xk = null;
    const bk = new Map;
    let wk = 1;

    function dk(kk) {
      if (Xk = kk, null !== kk) {
        for (const [Fk, Bk] of bk) kk.NBk(Fk, Bk);
        bk.clear()
      }
    }

    function sk(kk) {
      const Fk = wk++;
      return Xk ? Xk.NBk(Fk, kk) : bk.set(Fk, kk), Fk
    }
    async function Vk(kk, Fk, Bk) {
      const Rk = await ak(kk, Fk, Bk);
      return {
        id: sk(Rk),
        width: Rk.width,
        height: Rk.height
      }
    }

    function Jk(kk) {
      var Fk;
      const Bk = bk.get(kk);
      if (Bk) return Bk.close(), void bk.delete(kk);
      null === (Fk = Xk) || void 0 === Fk || Fk.HBk(kk)
    }
  },
  40342: (kk, Fk, Bk) => {
    function Rk(kk, Fk) {
      if (!Object.prototype.hasOwnProperty.call(kk, Fk)) throw new TypeError("attempted to use private field on non-instance");
      return kk
    }
    Bk.d(Fk, {
      b: () => Rk
    })
  },
  40346: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => tk
    });
    var Rk = 0;

    function tk(kk) {
      return "__private_" + Rk++ + "_" + kk
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);