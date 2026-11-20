export const id = 86;
export const ids = [86];
export const modules = {
  40339: (TT, kT, cT) => {
    cT.d(kT, {
      B: () => pT,
      E: () => ET,
      G: () => JT,
      J: () => VT,
      K: () => zT,
      O: () => UT,
      Q: () => gT,
      R: () => HT,
      d: () => YT,
      g: () => uT,
      k: () => mT,
      l: () => BT,
      m: () => bT,
      o: () => wT,
      s: () => ZT,
      v: () => oT,
      w: () => GT,
      z: () => eT
    });
    var lT = cT(1409),
      MT = cT(36),
      KT = cT(1292),
      OT = cT(2435),
      yT = cT(4787),
      fT = cT(4748);
    let xT, IT = !1,
      AT = !1,
      CT = !1,
      jT = !1;
    const vT = 1300,
      tT = 3e3;
    let hT = 0,
      NT = !1,
      QT = !1,
      ST = 0;
    const DT = 2;
    let aT = !1,
      FT = !1;
    const rT = new Set,
      PT = new Set;

    function wT() {
      return IT
    }

    function mT() {
      return QT
    }

    function bT() {
      return FT
    }

    function zT() {
      return (0, KT.q)() && !FT
    }

    function JT(TT) {
      let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (TT !== FT) {
        FT = TT;
        for (const TT of [...PT]) TT(FT);
        kT && gT()
      }
    }

    function oT(TT) {
      return PT.add(TT), () => {
        PT.delete(TT)
      }
    }

    function HT() {
      (0, yT.h)(OT.s.Menu, (0, KT.q)() ? 0 : OT.s.Menu)
    }

    function eT() {
      QT = !1, ST = 0, HT(), gT()
    }

    function GT(TT) {
      return rT.add(TT), () => {
        rT.delete(TT)
      }
    }

    function VT(TT) {
      AT = !1, TT !== IT && (IT = TT, jT = !1, clearTimeout(xT), CT = !IT && aT, IT ? (NT = !1, QT = !1, ST = 0) : zT() && !aT && (QT = !0), aT = !1, IT && !zT() && nT(), iT(), CT && gT())
    }

    function ET(TT) {
      TT !== NT && (NT = TT, TT || gT())
    }

    function ZT() {
      AT = !1, jT || !0 !== LT() || (jT = !0, clearTimeout(xT), xT = setTimeout(XT, vT))
    }

    function uT() {
      return (!AT || performance.now() - hT > tT) && (AT = (0, fT.G)().lockPointer(), hT = performance.now()), AT
    }

    function XT() {
      dT() && RT() && uT()
    }

    function dT() {
      return zT() && !IT && !NT && !(0, lT.h)()
    }

    function LT() {
      var TT;
      return "undefined" === typeof navigator || null === (TT = navigator.userActivation) || void 0 === TT ? void 0 : TT.isActive
    }

    function RT() {
      return CT && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== LT()
    }

    function gT() {
      zT() ? dT() && !QT && RT() && uT() : IT && !aT && nT()
    }

    function UT() {
      QT ? navigator.vendor.startsWith("Apple") ? WT() : ST = DT : gT()
    }

    function YT() {
      ST > 0 && 0 === --ST && WT()
    }

    function BT() {
      ST = 0
    }

    function WT() {
      dT() && !0 === LT() && uT()
    }

    function nT() {
      aT = !0, (0, fT.G)().unlockPointer()
    }

    function pT() {
      AT = !1, CT = !1, jT = !1, clearTimeout(xT), NT = !1, QT = !1, ST = 0, aT = !1;
      const TT = IT;
      IT = !1, TT && iT()
    }

    function iT() {
      for (const TT of [...rT]) TT(IT);
      MT.k.nt("pointerLockUpdate", IT)
    }
  },
  40318: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => CT,
      f: () => yT,
      g: () => AT,
      h: () => xT,
      i: () => OT,
      m: () => IT,
      o: () => fT
    });
    let lT = null,
      MT = null,
      KT = null;

    function OT(TT) {
      lT = TT
    }

    function yT() {
      return lT
    }

    function fT(TT) {
      MT = TT
    }

    function xT() {
      return MT
    }

    function IT(TT) {
      KT = TT
    }

    function AT() {
      return KT
    }

    function CT() {
      var TT, kT;
      return !0 === (null === (TT = MT) || void 0 === TT || null === (kT = TT.currentViewer) || void 0 === kT ? void 0 : kT.inPlayback)
    }
  },
  4748: (TT, kT, cT) => {
    cT.d(kT, {
      A: () => QT,
      E: () => OT,
      G: () => yT,
      J: () => wT,
      c: () => PT,
      g: () => DT,
      h: () => oT,
      i: () => JT,
      j: () => NT,
      m: () => FT,
      n: () => ST,
      q: () => aT,
      s: () => mT,
      u: () => bT,
      y: () => zT
    });
    var lT = cT(4755);
    const MT = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let KT = MT;

    function OT(TT) {
      KT = null !== TT && void 0 !== TT ? TT : MT
    }

    function yT() {
      return KT
    }
    const fT = new Set,
      xT = new Set;
    let IT = -1;
    const AT = new Set,
      CT = new Set;
    let jT = 0,
      vT = 0;
    const tT = new Set,
      hT = new Set;

    function NT(TT) {
      return fT.add(TT), () => {
        fT.delete(TT)
      }
    }

    function QT(TT, kT) {
      for (const lT of fT) try {
        lT(TT)
      } catch (cT) {
        kT(cT)
      }
    }

    function ST(TT) {
      return xT.add(TT), () => {
        xT.delete(TT)
      }
    }

    function DT(TT, kT) {
      const cT = IT < 0 ? 0 : TT - IT;
      IT = TT;
      for (const MT of xT) try {
        MT(cT)
      } catch (lT) {
        kT(lT)
      }
    }

    function aT(TT) {
      return AT.add(TT), () => {
        AT.delete(TT)
      }
    }

    function FT(TT) {
      return CT.add(TT), () => {
        CT.delete(TT)
      }
    }
    let rT = 0;

    function PT(TT) {
      rT += TT
    }

    function wT() {
      const TT = rT;
      return rT = 0, TT
    }

    function mT(TT) {
      return tT.add(TT), () => {
        tT.delete(TT)
      }
    }

    function bT(TT) {
      return hT.add(TT), () => {
        hT.delete(TT)
      }
    }

    function zT() {
      jT = 0, vT = 0, IT = -1
    }

    function JT(TT, kT) {
      if ("paced" === TT) return vT += kT, null;
      if ("drawn" !== TT && "skipped" !== TT) return null;
      const cT = kT + vT;
      return vT = 0, cT
    }

    function oT(TT, kT, cT, MT) {
      const KT = (0, lT.k)(kT),
        OT = TT > 0 ? performance.now() : 0;
      for (let lT = 0; lT < TT; lT++)
        for (const TT of tT) try {
          TT()
        } catch (yT) {
          MT(yT)
        }
      if (TT > 0 && PT(performance.now() - OT), null !== cT) {
        for (const TT of AT) try {
          TT(cT)
        } catch (yT) {
          MT(yT)
        }
        jT += cT
      }
      if ("drawn" === kT) {
        const TT = jT;
        jT = 0;
        for (const kT of CT) try {
          kT(TT)
        } catch (yT) {
          MT(yT)
        }
      }
      for (const lT of hT) try {
        lT(TT, KT)
      } catch (yT) {
        MT(yT)
      }
    }
  },
  40536: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => lT
    });
    const lT = {
      stop: () => lT,
      fade: () => lT,
      rate: () => lT,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => lT,
      setPannerAttr: () => lT,
      setPosition: () => lT
    }
  },
  4773: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => fT,
      e: () => KT,
      h: () => yT
    });
    var lT = cT(2435),
      MT = cT(4782);

    function KT(TT) {
      let {
        action: kT,
        flags: cT
      } = TT;
      return "mid-fire" === kT && 0 !== (cT & lT.b.AltLeftClick)
    }
    const OT = new Set;

    function yT(TT) {
      return OT.add(TT), () => {
        OT.delete(TT)
      }
    }

    function fT(TT) {
      const kT = MT.e[255 & TT];
      if (void 0 === kT) return;
      const cT = TT >>> 8 & 255,
        KT = {
          action: kT,
          down: 0 !== (cT & lT.b.Down),
          flags: cT,
          press: TT >>> 16
        };
      for (const lT of OT) lT(KT)
    }
  },
  4782: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => MT,
      i: () => KT,
      j: () => OT,
      k: () => lT,
      l: () => yT
    });
    const lT = {
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
      MT = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      KT = {
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
      OT = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      yT = [16]
  },
  40622: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => IT,
      f: () => xT,
      h: () => fT
    });
    var lT = cT(4769),
      MT = cT(2435),
      KT = cT(4787);
    let OT = !1,
      yT = !1;

    function fT(TT) {
      OT = !0;
      try {
        TT()
      } finally {
        OT = !1
      }
    }

    function xT(TT, kT) {
      if (OT) return !1;
      switch (TT) {
        case lT.C.MouseDown:
        case lT.C.MouseUp:
        case lT.C.TouchStart:
        case lT.C.TouchEnd:
        case lT.C.TouchCancel:
        case lT.C.TouchButton:
          return !0;
        case lT.C.KeyDown:
        case lT.C.KeyUp:
          return 0 === (kT & MT.c.Repeat) && !(0, KT.f)(document.activeElement);
        default:
          return !1
      }
    }

    function IT(TT) {
      yT || (yT = !0, queueMicrotask((() => {
        yT = !1, TT()
      })))
    }
  },
  4787: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => yT,
      f: () => OT,
      h: () => xT
    });
    var lT = cT(2435),
      MT = cT(2443);
    const KT = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function OT(TT) {
      return TT instanceof HTMLElement && (!!(TT.isContentEditable || TT instanceof HTMLTextAreaElement || TT instanceof HTMLSelectElement) || TT instanceof HTMLInputElement && !KT.has(TT.type))
    }

    function yT(TT) {
      let kT = null;
      const cT = cT => {
          const MT = OT(cT);
          MT !== kT && (kT = MT, TT(lT.g.UiCapture, lT.s.Keyboard, 0, 0, MT ? lT.s.Keyboard : 0))
        },
        MT = TT => {
          cT(TT.target)
        },
        KT = TT => {
          cT(TT.relatedTarget)
        },
        yT = () => {
          cT(document.activeElement)
        },
        fT = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", MT, fT), document.addEventListener("focusout", KT, fT), document.addEventListener("keydown", yT, fT), cT(document.activeElement), () => {
        document.removeEventListener("focusin", MT, fT), document.removeEventListener("focusout", KT, fT), document.removeEventListener("keydown", yT, fT)
      }
    }
    const fT = new Map;

    function xT(TT, kT) {
      var cT;
      let lT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      fT.set(lT, (null !== (cT = fT.get(lT)) && void 0 !== cT ? cT : 0) & ~TT | kT & TT);
      let KT = 0;
      for (const MT of fT.values()) KT |= MT;
      return (0, MT.B)(TT, KT & TT)
    }
  },
  40380: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => IT,
      d: () => fT,
      g: () => yT,
      k: () => xT
    });
    var lT = cT(1964);
    let MT = null,
      KT = 0;
    const OT = new Set;

    function yT() {
      return MT
    }

    function fT() {
      return KT
    }

    function xT(TT) {
      MT = TT, KT++, (0, lT.b)();
      for (const kT of OT) kT()
    }

    function IT(TT) {
      OT.add(TT)
    }
  },
  40669: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => lT
    });
    const lT = 2e3
  },
  40528: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => ST,
      i: () => xT,
      k: () => hT,
      n: () => QT,
      q: () => NT,
      u: () => DT
    });
    var lT = cT(31),
      MT = cT(36),
      KT = cT(2819),
      OT = cT(1303),
      yT = cT(9284),
      fT = cT(2821);

    function xT() {
      var TT;
      const kT = (cT = lT.e.get("clientEscMenuOptions"), MT = (0, KT.v)(), {
        sampleCount: cT.antiAliasing ? 4 : 1,
        n: (0, KT.l)(cT.pixelScale, MT),
        pixelated: (0, KT.j)(cT.pixelSmoothing)
      });
      var cT, MT;
      return kT.sampleCount > 1 && (0, yT.d)() && (kT.sampleCount = 1), kT.n = null !== (TT = (0, yT.q)()) && void 0 !== TT ? TT : kT.n, kT
    }
    let IT = null,
      AT = null;
    const CT = new Set;
    let jT = null;

    function vT() {
      for (const TT of CT) TT()
    }

    function tT() {
      if (null === IT) {
        const TT = document.createElement("div");
        TT.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", TT.setAttribute("aria-hidden", "true"), document.body.append(TT), AT = TT, IT = new KT.b(TT, vT)
      }
      return IT
    }

    function hT(TT) {
      const kT = (0, KT.e)(),
        [cT, lT] = tT().size(kT);
      return (0, KT.d)(cT, lT, kT, TT.n)
    }

    function NT(TT) {
      var kT, cT, lT, MT;
      const yT = (0, KT.e)(),
        [fT, IT] = tT().size(yT);
      if (fT <= 0 || IT <= 0) return null;
      const AT = (0, KT.d)(fT, IT, yT, xT().n);
      return (0, KT.c)(TT, AT), TT.style.left = `${null!==(kT=null===(cT=jT)||void 0===cT?void 0:cT.rect.left)&&void 0!==kT?kT:0}px`, TT.style.top = `${null!==(lT=null===(MT=jT)||void 0===MT?void 0:MT.rect.top)&&void 0!==lT?lT:0}px`, (0, OT.Q)(TT.style, jT), AT
    }

    function QT(TT) {
      jT = TT, tT(), (0, OT.H)(AT.style, TT, ""), vT()
    }

    function ST(TT, kT) {
      TT.style.imageRendering = (0, KT.w)(kT.pixelated)
    }

    function DT(TT, kT) {
      const cT = (0, MT.m)("appManagerUpdated|clientEscMenuOptions", (() => {
          ST(TT, xT()), kT()
        })),
        lT = (0, yT.z)(kT),
        KT = (0, fT.o)(kT);
      return tT(), CT.add(kT), () => {
        cT(), lT(), KT(), CT.delete(kT)
      }
    }
  },
  40675: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => OT,
      f: () => KT,
      i: () => MT
    });
    let lT = null;

    function MT(TT) {
      lT = TT
    }

    function KT(TT) {
      lT === TT && (lT = null)
    }

    function OT() {
      var TT;
      null === (TT = lT) || void 0 === TT || TT()
    }
  },
  40644: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => MT,
      g: () => xT,
      j: () => KT,
      k: () => AT,
      l: () => IT,
      o: () => CT
    });
    var lT = cT(3684);
    class MT extends Error {
      constructor(TT, kT, cT) {
        super(`${"fetch"===TT?"fetching":"decoding"} ${kT} failed`, cT), this.stage = TT, this.source = kT, this.name = "ShellImageError"
      }
    }
    async function KT(TT) {
      let kT, cT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lT.N,
        KT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      if ("string" === typeof TT) try {
        kT = await cT(TT)
      } catch (OT) {
        throw new MT("fetch", TT, {
          cause: OT
        })
      } else kT = TT;
      try {
        const TT = new Blob([kT.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(TT, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: KT
        })
      } catch (OT) {
        throw new MT("decode", "string" === typeof TT ? TT : `${kT.byteLength} bytes`, {
          cause: OT
        })
      }
    }
    let OT = null;
    const yT = new Map;
    let fT = 1;

    function xT(TT) {
      if (OT = TT, null !== TT) {
        for (const [kT, cT] of yT) TT.xcT(kT, cT);
        yT.clear()
      }
    }

    function IT(TT) {
      const kT = fT++;
      return OT ? OT.xcT(kT, TT) : yT.set(kT, TT), kT
    }
    async function AT(TT, kT, cT) {
      const lT = await KT(TT, kT, cT);
      return {
        id: IT(lT),
        width: lT.width,
        height: lT.height
      }
    }

    function CT(TT) {
      var kT;
      const cT = yT.get(TT);
      if (cT) return cT.close(), void yT.delete(TT);
      null === (kT = OT) || void 0 === kT || kT.IcT(TT)
    }
  },
  40550: (TT, kT, cT) => {
    function lT(TT, kT) {
      if (!Object.prototype.hasOwnProperty.call(TT, kT)) throw new TypeError("attempted to use private field on non-instance");
      return TT
    }
    cT.d(kT, {
      c: () => lT
    })
  },
  40553: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => MT
    });
    var lT = 0;

    function MT(TT) {
      return "__private_" + lT++ + "_" + TT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);