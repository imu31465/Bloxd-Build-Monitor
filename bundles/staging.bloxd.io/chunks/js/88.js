export const id = 88;
export const ids = [88];
export const modules = {
  41023: (TT, UT, mT) => {
    mT.d(UT, {
      A: () => XT,
      B: () => DT,
      E: () => sT,
      H: () => tT,
      J: () => QT,
      L: () => wT,
      N: () => ST,
      Q: () => KT,
      T: () => yT,
      e: () => GT,
      f: () => PT,
      h: () => xT,
      l: () => NT,
      p: () => dT,
      s: () => JT,
      v: () => FT,
      w: () => aT,
      y: () => IT
    });
    var WT = mT(1513),
      zT = mT(31),
      MT = mT(1388),
      gT = mT(2522),
      nT = mT(4915),
      HT = mT(4883);
    let kT, jT = !1,
      lT = !1,
      LT = !1,
      pT = !1;
    const BT = 1300,
      ZT = 3e3;
    let cT = 0,
      vT = !1,
      fT = !1,
      qT = 0;
    const iT = 2;
    let bT = !1,
      OT = !1;
    const eT = new Set,
      YT = new Set;

    function JT() {
      return jT
    }

    function xT() {
      return fT
    }

    function dT() {
      return OT
    }

    function wT() {
      return (0, MT.u)() && !OT
    }

    function tT(TT) {
      let UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (TT !== OT) {
        OT = TT;
        for (const TT of [...YT]) TT(OT);
        UT && KT()
      }
    }

    function aT(TT) {
      return YT.add(TT), () => {
        YT.delete(TT)
      }
    }

    function yT() {
      (0, nT.g)(gT.y.Menu, (0, MT.u)() ? 0 : gT.y.Menu)
    }

    function XT() {
      fT = !1, qT = 0, yT(), KT()
    }

    function IT(TT) {
      return eT.add(TT), () => {
        eT.delete(TT)
      }
    }

    function QT(TT) {
      lT = !1, TT !== jT && (jT = TT, pT = !1, clearTimeout(kT), LT = !jT && bT, jT ? (vT = !1, fT = !1, qT = 0) : wT() && !bT && (fT = !0), bT = !1, jT && !wT() && hT(), oT(), LT && KT())
    }

    function sT(TT) {
      TT !== vT && (vT = TT, TT || KT())
    }

    function FT() {
      lT = !1, pT || !0 !== CT() || (pT = !0, clearTimeout(kT), kT = setTimeout(VT, BT))
    }

    function PT() {
      return (!lT || performance.now() - cT > ZT) && (lT = (0, HT.N)().lockPointer(), cT = performance.now()), lT
    }

    function VT() {
      uT() && rT() && PT()
    }

    function uT() {
      return wT() && !jT && !vT && !(0, WT.k)()
    }

    function CT() {
      var TT;
      return "undefined" === typeof navigator || null === (TT = navigator.userActivation) || void 0 === TT ? void 0 : TT.isActive
    }

    function rT() {
      return LT && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== CT()
    }

    function KT() {
      wT() ? uT() && !fT && rT() && PT() : jT && !bT && hT()
    }

    function ST() {
      fT ? navigator.vendor.startsWith("Apple") ? ET() : qT = iT : KT()
    }

    function GT() {
      qT > 0 && 0 === --qT && ET()
    }

    function NT() {
      qT = 0
    }

    function ET() {
      uT() && !0 === CT() && PT()
    }

    function hT() {
      bT = !0, (0, HT.N)().unlockPointer()
    }

    function DT() {
      lT = !1, LT = !1, pT = !1, clearTimeout(kT), vT = !1, fT = !1, qT = 0, bT = !1;
      const TT = jT;
      jT = !1, TT && oT()
    }

    function oT() {
      for (const TT of [...eT]) TT(jT);
      zT.j.EZ("pointerLockUpdate", jT)
    }
  },
  40820: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => LT,
      i: () => nT,
      m: () => lT,
      p: () => kT,
      s: () => gT,
      v: () => jT,
      y: () => HT
    });
    let WT = null,
      zT = null,
      MT = null;

    function gT(TT) {
      WT = TT
    }

    function nT() {
      return WT
    }

    function HT(TT) {
      zT = TT
    }

    function kT() {
      return zT
    }

    function jT(TT) {
      MT = TT
    }

    function lT() {
      return MT
    }

    function LT() {
      var TT, UT;
      return !0 === (null === (TT = zT) || void 0 === TT || null === (UT = TT.currentViewer) || void 0 === UT ? void 0 : UT.inPlayback)
    }
  },
  4883: (TT, UT, mT) => {
    mT.d(UT, {
      A: () => bT,
      C: () => xT,
      G: () => dT,
      I: () => wT,
      K: () => fT,
      L: () => gT,
      N: () => nT,
      Q: () => JT,
      c: () => YT,
      g: () => iT,
      k: () => aT,
      n: () => tT,
      r: () => vT,
      u: () => OT,
      x: () => qT
    });
    var WT = mT(4890);
    const zT = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let MT = zT;

    function gT(TT) {
      MT = null !== TT && void 0 !== TT ? TT : zT
    }

    function nT() {
      return MT
    }
    const HT = new Set,
      kT = new Set;
    let jT = -1;
    const lT = new Set,
      LT = new Set;
    let pT = 0,
      BT = 0;
    const ZT = new Set,
      cT = new Set;

    function vT(TT) {
      return HT.add(TT), () => {
        HT.delete(TT)
      }
    }

    function fT(TT, UT) {
      for (const WT of HT) try {
        WT(TT)
      } catch (mT) {
        UT(mT)
      }
    }

    function qT(TT) {
      return kT.add(TT), () => {
        kT.delete(TT)
      }
    }

    function iT(TT, UT) {
      const mT = jT < 0 ? 0 : TT - jT;
      jT = TT;
      for (const zT of kT) try {
        zT(mT)
      } catch (WT) {
        UT(WT)
      }
    }

    function bT(TT) {
      return lT.add(TT), () => {
        lT.delete(TT)
      }
    }

    function OT(TT) {
      return LT.add(TT), () => {
        LT.delete(TT)
      }
    }
    let eT = 0;

    function YT(TT) {
      eT += TT
    }

    function JT() {
      const TT = eT;
      return eT = 0, TT
    }

    function xT(TT) {
      return ZT.add(TT), () => {
        ZT.delete(TT)
      }
    }

    function dT(TT) {
      return cT.add(TT), () => {
        cT.delete(TT)
      }
    }

    function wT() {
      pT = 0, BT = 0, jT = -1
    }

    function tT(TT, UT) {
      if ("paced" === TT) return BT += UT, null;
      if ("drawn" !== TT && "skipped" !== TT) return null;
      const mT = UT + BT;
      return BT = 0, mT
    }

    function aT(TT, UT, mT, zT) {
      const MT = (0, WT.g)(UT),
        gT = TT > 0 ? performance.now() : 0;
      for (let WT = 0; WT < TT; WT++)
        for (const TT of ZT) try {
          TT()
        } catch (nT) {
          zT(nT)
        }
      if (TT > 0 && YT(performance.now() - gT), null !== mT) {
        for (const TT of lT) try {
          TT(mT)
        } catch (nT) {
          zT(nT)
        }
        pT += mT
      }
      if ("drawn" === UT) {
        const TT = pT;
        pT = 0;
        for (const UT of LT) try {
          UT(TT)
        } catch (nT) {
          zT(nT)
        }
      }
      for (const WT of cT) try {
        WT(TT, MT)
      } catch (nT) {
        zT(nT)
      }
    }
  },
  41030: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => WT
    });
    const WT = {
      stop: () => WT,
      fade: () => WT,
      rate: () => WT,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => WT,
      setPannerAttr: () => WT,
      setPosition: () => WT
    }
  },
  4906: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => HT,
      f: () => MT,
      h: () => nT
    });
    var WT = mT(2522),
      zT = mT(4912);

    function MT(TT) {
      let {
        action: UT,
        flags: mT
      } = TT;
      return "mid-fire" === UT && 0 !== (mT & WT.b.AltLeftClick)
    }
    const gT = new Set;

    function nT(TT) {
      return gT.add(TT), () => {
        gT.delete(TT)
      }
    }

    function HT(TT) {
      const UT = zT.c[255 & TT];
      if (void 0 === UT) return;
      const mT = TT >>> 8 & 255,
        MT = {
          action: UT,
          down: 0 !== (mT & WT.b.Down),
          flags: mT,
          press: TT >>> 16
        };
      for (const WT of gT) WT(MT)
    }
  },
  4912: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => zT,
      e: () => MT,
      f: () => gT,
      g: () => WT,
      i: () => nT
    });
    const WT = {
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
      zT = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      MT = {
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
      gT = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      nT = [16]
  },
  41053: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => jT,
      e: () => kT,
      g: () => HT
    });
    var WT = mT(4904),
      zT = mT(2522),
      MT = mT(4915);
    let gT = !1,
      nT = !1;

    function HT(TT) {
      gT = !0;
      try {
        TT()
      } finally {
        gT = !1
      }
    }

    function kT(TT, UT) {
      if (gT) return !1;
      switch (TT) {
        case WT.G.MouseDown:
        case WT.G.MouseUp:
        case WT.G.TouchStart:
        case WT.G.TouchEnd:
        case WT.G.TouchCancel:
        case WT.G.TouchButton:
          return !0;
        case WT.G.KeyDown:
        case WT.G.KeyUp:
          return 0 === (UT & zT.e.Repeat) && !(0, MT.e)(document.activeElement);
        default:
          return !1
      }
    }

    function jT(TT) {
      nT || (nT = !0, queueMicrotask((() => {
        nT = !1, TT()
      })))
    }
  },
  4915: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => nT,
      e: () => gT,
      g: () => kT
    });
    var WT = mT(2522),
      zT = mT(2525);
    const MT = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function gT(TT) {
      return TT instanceof HTMLElement && (!!(TT.isContentEditable || TT instanceof HTMLTextAreaElement || TT instanceof HTMLSelectElement) || TT instanceof HTMLInputElement && !MT.has(TT.type))
    }

    function nT(TT) {
      let UT = null;
      const mT = mT => {
          const zT = gT(mT);
          zT !== UT && (UT = zT, TT(WT.g.UiCapture, WT.y.Keyboard, 0, 0, zT ? WT.y.Keyboard : 0))
        },
        zT = TT => {
          mT(TT.target)
        },
        MT = TT => {
          mT(TT.relatedTarget)
        },
        nT = () => {
          mT(document.activeElement)
        },
        HT = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", zT, HT), document.addEventListener("focusout", MT, HT), document.addEventListener("keydown", nT, HT), mT(document.activeElement), () => {
        document.removeEventListener("focusin", zT, HT), document.removeEventListener("focusout", MT, HT), document.removeEventListener("keydown", nT, HT)
      }
    }
    const HT = new Map;

    function kT(TT, UT) {
      var mT;
      let WT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      HT.set(WT, (null !== (mT = HT.get(WT)) && void 0 !== mT ? mT : 0) & ~TT | UT & TT);
      let MT = 0;
      for (const zT of HT.values()) MT |= zT;
      return (0, zT.A)(TT, MT & TT)
    }
  },
  41085: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => jT,
      g: () => HT,
      k: () => nT,
      m: () => kT
    });
    var WT = mT(2057);
    let zT = null,
      MT = 0;
    const gT = new Set;

    function nT() {
      return zT
    }

    function HT() {
      return MT
    }

    function kT(TT) {
      zT = TT, MT++, (0, WT.c)();
      for (const UT of gT) UT()
    }

    function jT(TT) {
      gT.add(TT)
    }
  },
  41127: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => WT
    });
    const WT = 2e3
  },
  41025: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => OT,
      f: () => LT,
      i: () => qT,
      m: () => bT,
      p: () => iT,
      t: () => eT
    });
    var WT = mT(180),
      zT = mT(25),
      MT = mT(31),
      gT = mT(3032),
      nT = mT(1398),
      HT = mT(34206),
      kT = mT(314),
      jT = mT(102),
      lT = mT(176);

    function LT() {
      var TT;
      const UT = (0, gT.H)(),
        mT = function(TT, UT) {
          return {
            sampleCount: TT.antiAliasing ? 4 : 1,
            n: (0, gT.x)(TT.pixelScale, UT),
            pixelated: (0, gT.w)(TT.pixelSmoothing)
          }
        }(zT.b.get("clientEscMenuOptions"), UT);
      return mT.sampleCount > 1 && (0, HT.b)() && (mT.sampleCount = 1), mT.n = null !== (TT = (0, HT.i)()) && void 0 !== TT ? TT : mT.n, WT.f.includes((0, jT.getSoftwareRenderer)()) && (mT.sampleCount = 1, mT.n = Math.max(mT.n, (0, gT.x)(lT.n.pixelScale, UT))), mT
    }
    let pT = null,
      BT = null;
    const ZT = new Set;
    let cT = null;

    function vT() {
      for (const TT of ZT) TT()
    }

    function fT() {
      if (null === pT) {
        const TT = document.createElement("div");
        TT.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", TT.setAttribute("aria-hidden", "true"), document.body.append(TT), BT = TT, pT = new gT.b(TT, vT)
      }
      return pT
    }

    function qT(TT) {
      const UT = (0, gT.n)(),
        [mT, WT] = fT().size(UT);
      return (0, gT.i)(mT, WT, UT, TT.n)
    }

    function iT(TT) {
      var UT, mT, WT, zT;
      const MT = (0, gT.n)(),
        [HT, kT] = fT().size(MT);
      if (HT <= 0 || kT <= 0) return null;
      const jT = (0, gT.i)(HT, kT, MT, LT().n);
      return (0, gT.e)(TT, jT), TT.style.left = `${null!==(UT=null===(mT=cT)||void 0===mT?void 0:mT.rect.left)&&void 0!==UT?UT:0}px`, TT.style.top = `${null!==(WT=null===(zT=cT)||void 0===zT?void 0:zT.rect.top)&&void 0!==WT?WT:0}px`, (0, nT.E)(TT.style, cT), jT
    }

    function bT(TT) {
      cT = TT, fT(), (0, nT.w)(BT.style, TT, ""), vT()
    }

    function OT(TT, UT) {
      TT.style.imageRendering = (0, gT.I)(UT.pixelated)
    }

    function eT(TT, UT) {
      const mT = (0, MT.k)("appManagerUpdated|clientEscMenuOptions", (() => {
          OT(TT, LT()), UT()
        })),
        WT = (0, HT.u)(UT),
        zT = (0, kT.l)(UT);
      return fT(), ZT.add(UT), () => {
        mT(), WT(), zT(), ZT.delete(UT)
      }
    }
  },
  41130: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => gT,
      e: () => MT,
      f: () => zT
    });
    let WT = null;

    function zT(TT) {
      WT = TT
    }

    function MT(TT) {
      WT === TT && (WT = null)
    }

    function gT() {
      var TT;
      null === (TT = WT) || void 0 === TT || TT()
    }
  },
  41080: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => zT,
      h: () => kT,
      j: () => MT,
      l: () => lT,
      o: () => jT,
      s: () => LT
    });
    var WT = mT(3001);
    class zT extends Error {
      constructor(TT, UT, mT) {
        super(`${"fetch"===TT?"fetching":"decoding"} ${UT} failed`, mT), this.stage = TT, this.source = UT, this.name = "ShellImageError"
      }
    }
    async function MT(TT) {
      let UT, mT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WT.M,
        MT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      if ("string" === typeof TT) try {
        UT = await mT(TT)
      } catch (gT) {
        throw new zT("fetch", TT, {
          cause: gT
        })
      } else UT = TT;
      try {
        const TT = new Blob([UT.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(TT, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: MT
        })
      } catch (gT) {
        throw new zT("decode", "string" === typeof TT ? TT : `${UT.byteLength} bytes`, {
          cause: gT
        })
      }
    }
    let gT = null;
    const nT = new Map;
    let HT = 1;

    function kT(TT) {
      if (gT = TT, null !== TT) {
        for (const [UT, mT] of nT) TT.MWT(UT, mT);
        nT.clear()
      }
    }

    function jT(TT) {
      const UT = HT++;
      return gT ? gT.MWT(UT, TT) : nT.set(UT, TT), UT
    }
    async function lT(TT, UT, mT) {
      const WT = await MT(TT, UT, mT);
      return {
        id: jT(WT),
        width: WT.width,
        height: WT.height
      }
    }

    function LT(TT) {
      var UT;
      const mT = nT.get(TT);
      if (mT) return mT.close(), void nT.delete(TT);
      null === (UT = gT) || void 0 === UT || UT.gWT(TT)
    }
  },
  41034: (TT, UT, mT) => {
    function WT(TT, UT) {
      if (!Object.prototype.hasOwnProperty.call(TT, UT)) throw new TypeError("attempted to use private field on non-instance");
      return TT
    }
    mT.d(UT, {
      c: () => WT
    })
  },
  41036: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => zT
    });
    var WT = 0;

    function zT(TT) {
      return "__private_" + WT++ + "_" + TT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);