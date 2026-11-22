export const id = 87;
export const ids = [87];
export const modules = {
  40466: (kk, ek, ik) => {
    ik.d(ek, {
      A: () => Ek,
      B: () => uk,
      C: () => vk,
      G: () => Fk,
      K: () => Tk,
      N: () => ck,
      P: () => Ik,
      d: () => Zk,
      e: () => ak,
      g: () => dk,
      j: () => Ok,
      m: () => Vk,
      o: () => sk,
      s: () => hk,
      t: () => qk,
      x: () => Qk,
      y: () => zk,
      z: () => Nk
    });
    var Dk = ik(1371),
      fk = ik(26),
      Sk = ik(1273),
      bk = ik(2388),
      rk = ik(4752),
      Pk = ik(4721);
    let mk, Mk = !1,
      Kk = !1,
      xk = !1,
      nk = !1;
    const Uk = 1300,
      Hk = 3e3;
    let wk = 0,
      lk = !1,
      pk = !1,
      yk = 0;
    const Yk = 2;
    let Lk = !1,
      Ck = !1;
    const Ak = new Set,
      jk = new Set;

    function sk() {
      return Mk
    }

    function dk() {
      return pk
    }

    function Vk() {
      return Ck
    }

    function Fk() {
      return (0, Sk.w)() && !Ck
    }

    function uk(kk) {
      let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (kk !== Ck) {
        Ck = kk;
        for (const kk of [...jk]) kk(Ck);
        ek && ck()
      }
    }

    function qk(kk) {
      return jk.add(kk), () => {
        jk.delete(kk)
      }
    }

    function Ik() {
      (0, rk.j)(bk.t.Menu, (0, Sk.w)() ? 0 : bk.t.Menu)
    }

    function zk() {
      pk = !1, yk = 0, Ik(), ck()
    }

    function Qk(kk) {
      return Ak.add(kk), () => {
        Ak.delete(kk)
      }
    }

    function vk(kk) {
      Kk = !1, kk !== Mk && (Mk = kk, nk = !1, clearTimeout(mk), xk = !Mk && Lk, Mk ? (lk = !1, pk = !1, yk = 0) : Fk() && !Lk && (pk = !0), Lk = !1, Mk && !Fk() && Gk(), Rk(), xk && ck())
    }

    function Ek(kk) {
      kk !== lk && (lk = kk, kk || ck())
    }

    function hk() {
      Kk = !1, nk || !0 !== Xk() || (nk = !0, clearTimeout(mk), mk = setTimeout(Wk, Uk))
    }

    function ak() {
      return (!Kk || performance.now() - wk > Hk) && (Kk = (0, Pk.J)().lockPointer(), wk = performance.now()), Kk
    }

    function Wk() {
      tk() && Bk() && ak()
    }

    function tk() {
      return Fk() && !Mk && !lk && !(0, Dk.d)()
    }

    function Xk() {
      var kk;
      return "undefined" === typeof navigator || null === (kk = navigator.userActivation) || void 0 === kk ? void 0 : kk.isActive
    }

    function Bk() {
      return xk && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== Xk()
    }

    function ck() {
      Fk() ? tk() && !pk && Bk() && ak() : Mk && !Lk && Gk()
    }

    function Tk() {
      pk ? navigator.vendor.startsWith("Apple") ? gk() : yk = Yk : ck()
    }

    function Zk() {
      yk > 0 && 0 === --yk && gk()
    }

    function Ok() {
      yk = 0
    }

    function gk() {
      tk() && !0 === Xk() && ak()
    }

    function Gk() {
      Lk = !0, (0, Pk.J)().unlockPointer()
    }

    function Nk() {
      Kk = !1, xk = !1, nk = !1, clearTimeout(mk), lk = !1, pk = !1, yk = 0, Lk = !1;
      const kk = Mk;
      Mk = !1, kk && Rk()
    }

    function Rk() {
      for (const kk of [...Ak]) kk(Mk);
      fk.j.tm("pointerLockUpdate", Mk)
    }
  },
  40262: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => xk,
      h: () => rk,
      j: () => Kk,
      n: () => mk,
      p: () => bk,
      s: () => Mk,
      t: () => Pk
    });
    let Dk = null,
      fk = null,
      Sk = null;

    function bk(kk) {
      Dk = kk
    }

    function rk() {
      return Dk
    }

    function Pk(kk) {
      fk = kk
    }

    function mk() {
      return fk
    }

    function Mk(kk) {
      Sk = kk
    }

    function Kk() {
      return Sk
    }

    function xk() {
      var kk, ek;
      return !0 === (null === (kk = fk) || void 0 === kk || null === (ek = kk.currentViewer) || void 0 === ek ? void 0 : ek.inPlayback)
    }
  },
  4721: (kk, ek, ik) => {
    ik.d(ek, {
      A: () => Fk,
      D: () => pk,
      F: () => bk,
      J: () => rk,
      K: () => sk,
      c: () => jk,
      g: () => Yk,
      j: () => qk,
      l: () => uk,
      n: () => lk,
      q: () => Ck,
      r: () => yk,
      v: () => Lk,
      x: () => dk,
      y: () => Vk
    });
    var Dk = ik(4728);
    const fk = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let Sk = fk;

    function bk(kk) {
      Sk = null !== kk && void 0 !== kk ? kk : fk
    }

    function rk() {
      return Sk
    }
    const Pk = new Set,
      mk = new Set;
    let Mk = -1;
    const Kk = new Set,
      xk = new Set;
    let nk = 0,
      Uk = 0;
    const Hk = new Set,
      wk = new Set;

    function lk(kk) {
      return Pk.add(kk), () => {
        Pk.delete(kk)
      }
    }

    function pk(kk, ek) {
      for (const Dk of Pk) try {
        Dk(kk)
      } catch (ik) {
        ek(ik)
      }
    }

    function yk(kk) {
      return mk.add(kk), () => {
        mk.delete(kk)
      }
    }

    function Yk(kk, ek) {
      const ik = Mk < 0 ? 0 : kk - Mk;
      Mk = kk;
      for (const fk of mk) try {
        fk(ik)
      } catch (Dk) {
        ek(Dk)
      }
    }

    function Lk(kk) {
      return Kk.add(kk), () => {
        Kk.delete(kk)
      }
    }

    function Ck(kk) {
      return xk.add(kk), () => {
        xk.delete(kk)
      }
    }
    let Ak = 0;

    function jk(kk) {
      Ak += kk
    }

    function sk() {
      const kk = Ak;
      return Ak = 0, kk
    }

    function dk(kk) {
      return Hk.add(kk), () => {
        Hk.delete(kk)
      }
    }

    function Vk(kk) {
      return wk.add(kk), () => {
        wk.delete(kk)
      }
    }

    function Fk() {
      nk = 0, Uk = 0, Mk = -1
    }

    function uk(kk, ek) {
      if ("paced" === kk) return Uk += ek, null;
      if ("drawn" !== kk && "skipped" !== kk) return null;
      const ik = ek + Uk;
      return Uk = 0, ik
    }

    function qk(kk, ek, ik, fk) {
      const Sk = (0, Dk.j)(ek),
        bk = kk > 0 ? performance.now() : 0;
      for (let Dk = 0; Dk < kk; Dk++)
        for (const kk of Hk) try {
          kk()
        } catch (rk) {
          fk(rk)
        }
      if (kk > 0 && jk(performance.now() - bk), null !== ik) {
        for (const kk of Kk) try {
          kk(ik)
        } catch (rk) {
          fk(rk)
        }
        nk += ik
      }
      if ("drawn" === ek) {
        const kk = nk;
        nk = 0;
        for (const ek of xk) try {
          ek(kk)
        } catch (rk) {
          fk(rk)
        }
      }
      for (const Dk of wk) try {
        Dk(kk, Sk)
      } catch (rk) {
        fk(rk)
      }
    }
  },
  40483: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Dk
    });
    const Dk = {
      stop: () => Dk,
      fade: () => Dk,
      rate: () => Dk,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => Dk,
      setPannerAttr: () => Dk,
      setPosition: () => Dk
    }
  },
  4745: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Pk,
      f: () => Sk,
      j: () => rk
    });
    var Dk = ik(2388),
      fk = ik(4750);

    function Sk(kk) {
      let {
        action: ek,
        flags: ik
      } = kk;
      return "mid-fire" === ek && 0 !== (ik & Dk.d.AltLeftClick)
    }
    const bk = new Set;

    function rk(kk) {
      return bk.add(kk), () => {
        bk.delete(kk)
      }
    }

    function Pk(kk) {
      const ek = fk.e[255 & kk];
      if (void 0 === ek) return;
      const ik = kk >>> 8 & 255,
        Sk = {
          action: ek,
          down: 0 !== (ik & Dk.d.Down),
          flags: ik,
          press: kk >>> 16
        };
      for (const Dk of bk) Dk(Sk)
    }
  },
  4750: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => fk,
      g: () => Sk,
      k: () => bk,
      n: () => Dk,
      q: () => rk
    });
    const Dk = {
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
      fk = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      Sk = {
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
      bk = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      rk = [16]
  },
  40505: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Mk,
      f: () => mk,
      h: () => Pk
    });
    var Dk = ik(4741),
      fk = ik(2388),
      Sk = ik(4752);
    let bk = !1,
      rk = !1;

    function Pk(kk) {
      bk = !0;
      try {
        kk()
      } finally {
        bk = !1
      }
    }

    function mk(kk, ek) {
      if (bk) return !1;
      switch (kk) {
        case Dk.O.MouseDown:
        case Dk.O.MouseUp:
        case Dk.O.TouchStart:
        case Dk.O.TouchEnd:
        case Dk.O.TouchCancel:
        case Dk.O.TouchButton:
          return !0;
        case Dk.O.KeyDown:
        case Dk.O.KeyUp:
          return 0 === (ek & fk.h.Repeat) && !(0, Sk.i)(document.activeElement);
        default:
          return !1
      }
    }

    function Mk(kk) {
      rk || (rk = !0, queueMicrotask((() => {
        rk = !1, kk()
      })))
    }
  },
  4752: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => rk,
      i: () => bk,
      j: () => mk
    });
    var Dk = ik(2388),
      fk = ik(2395);
    const Sk = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function bk(kk) {
      return kk instanceof HTMLElement && (!!(kk.isContentEditable || kk instanceof HTMLTextAreaElement || kk instanceof HTMLSelectElement) || kk instanceof HTMLInputElement && !Sk.has(kk.type))
    }

    function rk(kk) {
      let ek = null;
      const ik = ik => {
          const fk = bk(ik);
          fk !== ek && (ek = fk, kk(Dk.k.UiCapture, Dk.t.Keyboard, 0, 0, fk ? Dk.t.Keyboard : 0))
        },
        fk = kk => {
          ik(kk.target)
        },
        Sk = kk => {
          ik(kk.relatedTarget)
        },
        rk = () => {
          ik(document.activeElement)
        },
        Pk = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", fk, Pk), document.addEventListener("focusout", Sk, Pk), document.addEventListener("keydown", rk, Pk), ik(document.activeElement), () => {
        document.removeEventListener("focusin", fk, Pk), document.removeEventListener("focusout", Sk, Pk), document.removeEventListener("keydown", rk, Pk)
      }
    }
    const Pk = new Map;

    function mk(kk, ek) {
      var ik;
      let Dk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      Pk.set(Dk, (null !== (ik = Pk.get(Dk)) && void 0 !== ik ? ik : 0) & ~kk | ek & kk);
      let Sk = 0;
      for (const fk of Pk.values()) Sk |= fk;
      return (0, fk.x)(kk, Sk & kk)
    }
  },
  40550: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Mk,
      e: () => Pk,
      f: () => rk,
      i: () => mk
    });
    var Dk = ik(1903);
    let fk = null,
      Sk = 0;
    const bk = new Set;

    function rk() {
      return fk
    }

    function Pk() {
      return Sk
    }

    function mk(kk) {
      fk = kk, Sk++, (0, Dk.c)();
      for (const ek of bk) ek()
    }

    function Mk(kk) {
      bk.add(kk)
    }
  },
  40581: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Dk
    });
    const Dk = 2e3
  },
  40475: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Ck,
      g: () => xk,
      k: () => yk,
      l: () => Lk,
      o: () => Yk,
      r: () => Ak
    });
    var Dk = ik(171),
      fk = ik(22),
      Sk = ik(26),
      bk = ik(2727),
      rk = ik(1284),
      Pk = ik(33707),
      mk = ik(689),
      Mk = ik(99),
      Kk = ik(169);

    function xk() {
      var kk;
      const ek = (0, bk.K)(),
        ik = function(kk, ek) {
          return {
            sampleCount: kk.antiAliasing ? 4 : 1,
            n: (0, bk.B)(kk.pixelScale, ek),
            pixelated: (0, bk.z)(kk.pixelSmoothing)
          }
        }(fk.b.get("clientEscMenuOptions"), ek);
      return ik.sampleCount > 1 && (0, Pk.b)() && (ik.sampleCount = 1), ik.n = null !== (kk = (0, Pk.m)()) && void 0 !== kk ? kk : ik.n, Dk.h.includes((0, Mk.getSoftwareRenderer)()) && (ik.sampleCount = 1, ik.n = Math.max(ik.n, (0, bk.B)(Kk.u.pixelScale, ek))), ik
    }
    let nk = null,
      Uk = null;
    const Hk = new Set;
    let wk = null;

    function lk() {
      for (const kk of Hk) kk()
    }

    function pk() {
      if (null === nk) {
        const kk = document.createElement("div");
        kk.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", kk.setAttribute("aria-hidden", "true"), document.body.append(kk), Uk = kk, nk = new bk.b(kk, lk)
      }
      return nk
    }

    function yk(kk) {
      const ek = (0, bk.o)(),
        [ik, Dk] = pk().size(ek);
      return (0, bk.i)(ik, Dk, ek, kk.n)
    }

    function Yk(kk) {
      var ek, ik, Dk, fk;
      const Sk = (0, bk.o)(),
        [Pk, mk] = pk().size(Sk);
      if (Pk <= 0 || mk <= 0) return null;
      const Mk = (0, bk.i)(Pk, mk, Sk, xk().n);
      return (0, bk.e)(kk, Mk), kk.style.left = `${null!==(ek=null===(ik=wk)||void 0===ik?void 0:ik.rect.left)&&void 0!==ek?ek:0}px`, kk.style.top = `${null!==(Dk=null===(fk=wk)||void 0===fk?void 0:fk.rect.top)&&void 0!==Dk?Dk:0}px`, (0, rk.I)(kk.style, wk), Mk
    }

    function Lk(kk) {
      wk = kk, pk(), (0, rk.E)(Uk.style, kk, ""), lk()
    }

    function Ck(kk, ek) {
      kk.style.imageRendering = (0, bk.L)(ek.pixelated)
    }

    function Ak(kk, ek) {
      const ik = (0, Sk.k)("appManagerUpdated|clientEscMenuOptions", (() => {
          Ck(kk, xk()), ek()
        })),
        Dk = (0, Pk.t)(ek),
        fk = (0, mk.o)(ek);
      return pk(), Hk.add(ek), () => {
        ik(), Dk(), fk(), Hk.delete(ek)
      }
    }
  },
  40587: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => bk,
      d: () => Sk,
      f: () => fk
    });
    let Dk = null;

    function fk(kk) {
      Dk = kk
    }

    function Sk(kk) {
      Dk === kk && (Dk = null)
    }

    function bk() {
      var kk;
      null === (kk = Dk) || void 0 === kk || kk()
    }
  },
  40541: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => fk,
      f: () => mk,
      h: () => Sk,
      j: () => Kk,
      n: () => Mk,
      p: () => xk
    });
    var Dk = ik(2823);
    class fk extends Error {
      constructor(kk, ek, ik) {
        super(`${"fetch"===kk?"fetching":"decoding"} ${ek} failed`, ik), this.stage = kk, this.source = ek, this.name = "ShellImageError"
      }
    }
    async function Sk(kk) {
      let ek, ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Dk.M,
        Sk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      if ("string" === typeof kk) try {
        ek = await ik(kk)
      } catch (bk) {
        throw new fk("fetch", kk, {
          cause: bk
        })
      } else ek = kk;
      try {
        const kk = new Blob([ek.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(kk, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: Sk
        })
      } catch (bk) {
        throw new fk("decode", "string" === typeof kk ? kk : `${ek.byteLength} bytes`, {
          cause: bk
        })
      }
    }
    let bk = null;
    const rk = new Map;
    let Pk = 1;

    function mk(kk) {
      if (bk = kk, null !== kk) {
        for (const [ek, ik] of rk) kk.Iik(ek, ik);
        rk.clear()
      }
    }

    function Mk(kk) {
      const ek = Pk++;
      return bk ? bk.Iik(ek, kk) : rk.set(ek, kk), ek
    }
    async function Kk(kk, ek, ik) {
      const Dk = await Sk(kk, ek, ik);
      return {
        id: Mk(Dk),
        width: Dk.width,
        height: Dk.height
      }
    }

    function xk(kk) {
      var ek;
      const ik = rk.get(kk);
      if (ik) return ik.close(), void rk.delete(kk);
      null === (ek = bk) || void 0 === ek || ek.zik(kk)
    }
  },
  40489: (kk, ek, ik) => {
    function Dk(kk, ek) {
      if (!Object.prototype.hasOwnProperty.call(kk, ek)) throw new TypeError("attempted to use private field on non-instance");
      return kk
    }
    ik.d(ek, {
      e: () => Dk
    })
  },
  40492: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => fk
    });
    var Dk = 0;

    function fk(kk) {
      return "__private_" + Dk++ + "_" + kk
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);