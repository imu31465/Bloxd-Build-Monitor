export const id = 101;
export const ids = [101];
export const modules = {
  42192: (HH, BH, LH) => {
    LH.d(BH, {
      B: () => JH,
      E: () => qH,
      F: () => IH,
      G: () => eH,
      J: () => oH,
      N: () => wH,
      P: () => DH,
      S: () => lH,
      d: () => ZH,
      f: () => NH,
      g: () => kH,
      i: () => dH,
      k: () => mH,
      o: () => bH,
      q: () => gH,
      r: () => fH,
      u: () => cH,
      x: () => KH
    });
    var AH = LH(1390),
      rH = LH(18),
      SH = LH(1241),
      hH = LH(2600),
      tH = LH(5288),
      zH = LH(5255);
    let CH, EH = !1,
      XH = !1,
      GH = !1,
      YH = !1;
    const uH = 1300,
      QH = 3e3;
    let WH = 0,
      MH = !1,
      xH = !1,
      vH = 0;
    const PH = 2;
    let TH = !1,
      UH = !1;
    const VH = new Set,
      OH = new Set;

    function bH() {
      return EH
    }

    function kH() {
      return xH
    }

    function mH() {
      return UH
    }

    function oH() {
      return (0, SH.A)() && !UH
    }

    function IH(HH) {
      let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (HH !== UH) {
        UH = HH;
        for (const HH of [...OH]) HH(UH);
        BH && DH()
      }
    }

    function fH(HH) {
      return OH.add(HH), () => {
        OH.delete(HH)
      }
    }

    function lH() {
      (0, tH.k)(hH.w.Menu, (0, SH.A)() ? 0 : hH.w.Menu)
    }

    function KH() {
      xH = !1, vH = 0, lH(), DH()
    }

    function cH(HH) {
      return VH.add(HH), () => {
        VH.delete(HH)
      }
    }

    function eH(HH) {
      XH = !1, HH !== EH && (EH = HH, YH = !1, clearTimeout(CH), GH = !EH && TH, EH ? (MH = !1, xH = !1, vH = 0) : oH() && !TH && (xH = !0), TH = !1, EH && !oH() && sH(), iH(), GH && DH())
    }

    function qH(HH) {
      HH !== MH && (MH = HH, HH || DH())
    }

    function gH() {
      XH = !1, YH || !0 !== nH() || (YH = !0, clearTimeout(CH), CH = setTimeout(RH, uH))
    }

    function NH() {
      return (!XH || performance.now() - WH > QH) && (XH = (0, zH.L)().lockPointer(), WH = performance.now()), XH
    }

    function RH() {
      jH() && FH() && NH()
    }

    function jH() {
      return oH() && !EH && !MH && !(0, AH.m)()
    }

    function nH() {
      var HH;
      return "undefined" === typeof navigator || null === (HH = navigator.userActivation) || void 0 === HH ? void 0 : HH.isActive
    }

    function FH() {
      return GH && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== nH()
    }

    function DH() {
      oH() ? jH() && !xH && FH() && NH() : EH && !TH && sH()
    }

    function wH() {
      xH ? navigator.vendor.startsWith("Apple") ? aH() : vH = PH : DH()
    }

    function ZH() {
      vH > 0 && 0 === --vH && aH()
    }

    function dH() {
      vH = 0
    }

    function aH() {
      jH() && !0 === nH() && NH()
    }

    function sH() {
      TH = !0, (0, zH.L)().unlockPointer()
    }

    function JH() {
      XH = !1, GH = !1, YH = !1, clearTimeout(CH), MH = !1, xH = !1, vH = 0, TH = !1;
      const HH = EH;
      EH = !1, HH && iH()
    }

    function iH() {
      for (const HH of [...VH]) HH(EH);
      rH.k.AX("pointerLockUpdate", EH)
    }
  },
  42002: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => GH,
      g: () => tH,
      j: () => XH,
      n: () => CH,
      p: () => hH,
      r: () => EH,
      t: () => zH
    });
    let AH = null,
      rH = null,
      SH = null;

    function hH(HH) {
      AH = HH
    }

    function tH() {
      return AH
    }

    function zH(HH) {
      rH = HH
    }

    function CH() {
      return rH
    }

    function EH(HH) {
      SH = HH
    }

    function XH() {
      return SH
    }

    function GH() {
      var HH, BH;
      return !0 === (null === (HH = rH) || void 0 === HH || null === (BH = HH.currentViewer) || void 0 === BH ? void 0 : BH.inPlayback)
    }
  },
  5255: (HH, BH, LH) => {
    LH.d(BH, {
      D: () => oH,
      F: () => xH,
      J: () => hH,
      L: () => tH,
      P: () => bH,
      c: () => OH,
      d: () => PH,
      e: () => fH,
      g: () => IH,
      k: () => MH,
      n: () => UH,
      p: () => vH,
      r: () => TH,
      v: () => kH,
      z: () => mH
    });
    var AH = LH(5260);
    const rH = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let SH = rH;

    function hH(HH) {
      SH = null !== HH && void 0 !== HH ? HH : rH
    }

    function tH() {
      return SH
    }
    const zH = new Set,
      CH = new Set;
    let EH = -1;
    const XH = new Set,
      GH = new Set;
    let YH = 0,
      uH = 0;
    const QH = new Set,
      WH = new Set;

    function MH(HH) {
      return zH.add(HH), () => {
        zH.delete(HH)
      }
    }

    function xH(HH, BH) {
      for (const AH of zH) try {
        AH(HH)
      } catch (LH) {
        BH(LH)
      }
    }

    function vH(HH) {
      return CH.add(HH), () => {
        CH.delete(HH)
      }
    }

    function PH(HH, BH) {
      const LH = EH < 0 ? 0 : HH - EH;
      EH = HH;
      for (const rH of CH) try {
        rH(LH)
      } catch (AH) {
        BH(AH)
      }
    }

    function TH(HH) {
      return XH.add(HH), () => {
        XH.delete(HH)
      }
    }

    function UH(HH) {
      return GH.add(HH), () => {
        GH.delete(HH)
      }
    }
    let VH = 0;

    function OH(HH) {
      VH += HH
    }

    function bH() {
      const HH = VH;
      return VH = 0, HH
    }

    function kH(HH) {
      return QH.add(HH), () => {
        QH.delete(HH)
      }
    }

    function mH(HH) {
      return WH.add(HH), () => {
        WH.delete(HH)
      }
    }

    function oH() {
      YH = 0, uH = 0, EH = -1
    }

    function IH(HH, BH) {
      if ("paced" === HH) return uH += BH, null;
      if ("drawn" !== HH && "skipped" !== HH) return null;
      const LH = BH + uH;
      return uH = 0, LH
    }

    function fH(HH, BH, LH, rH) {
      const SH = (0, AH.e)(BH),
        hH = HH > 0 ? performance.now() : 0;
      for (let AH = 0; AH < HH; AH++)
        for (const HH of QH) try {
          HH()
        } catch (tH) {
          rH(tH)
        }
      if (HH > 0 && OH(performance.now() - hH), null !== LH) {
        for (const HH of XH) try {
          HH(LH)
        } catch (tH) {
          rH(tH)
        }
        YH += LH
      }
      if ("drawn" === BH) {
        const HH = YH;
        YH = 0;
        for (const BH of GH) try {
          BH(HH)
        } catch (tH) {
          rH(tH)
        }
      }
      for (const AH of WH) try {
        AH(HH, SH)
      } catch (tH) {
        rH(tH)
      }
    }
  },
  42209: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => AH
    });
    const AH = {
      stop: () => AH,
      fade: () => AH,
      rate: () => AH,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => AH,
      setPannerAttr: () => AH,
      setPosition: () => AH
    }
  },
  5275: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => zH,
      i: () => SH,
      k: () => tH
    });
    var AH = LH(2600),
      rH = LH(5279);

    function SH(HH) {
      let {
        action: BH,
        flags: LH
      } = HH;
      return "mid-fire" === BH && 0 !== (LH & AH.c.AltLeftClick)
    }
    const hH = new Set;

    function tH(HH) {
      return hH.add(HH), () => {
        hH.delete(HH)
      }
    }

    function zH(HH) {
      const BH = rH.c[255 & HH];
      if (void 0 === BH) return;
      const LH = HH >>> 8 & 255,
        SH = {
          action: BH,
          down: 0 !== (LH & AH.c.Down),
          flags: LH,
          press: HH >>> 16
        };
      for (const AH of hH) AH(SH)
    }
  },
  5279: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => rH,
      f: () => SH,
      i: () => hH,
      j: () => AH,
      k: () => tH
    });
    const AH = {
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
      rH = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      SH = {
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
      hH = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      tH = [16]
  },
  42240: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => EH,
      g: () => CH,
      h: () => zH
    });
    var AH = LH(5268),
      rH = LH(2600),
      SH = LH(5288);
    let hH = !1,
      tH = !1;

    function zH(HH) {
      hH = !0;
      try {
        HH()
      } finally {
        hH = !1
      }
    }

    function CH(HH, BH) {
      if (hH) return !1;
      switch (HH) {
        case AH.M.MouseDown:
        case AH.M.MouseUp:
        case AH.M.TouchStart:
        case AH.M.TouchEnd:
        case AH.M.TouchCancel:
        case AH.M.TouchButton:
          return !0;
        case AH.M.KeyDown:
        case AH.M.KeyUp:
          return 0 === (BH & rH.e.Repeat) && !(0, SH.g)(document.activeElement);
        default:
          return !1
      }
    }

    function EH(HH) {
      tH || (tH = !0, queueMicrotask((() => {
        tH = !1, HH()
      })))
    }
  },
  5288: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => tH,
      g: () => hH,
      k: () => CH
    });
    var AH = LH(2600),
      rH = LH(2605);
    const SH = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function hH(HH) {
      return HH instanceof HTMLElement && (!!(HH.isContentEditable || HH instanceof HTMLTextAreaElement || HH instanceof HTMLSelectElement) || HH instanceof HTMLInputElement && !SH.has(HH.type))
    }

    function tH(HH) {
      let BH = null;
      const LH = LH => {
          const rH = hH(LH);
          rH !== BH && (BH = rH, HH(AH.g.UiCapture, AH.w.Keyboard, 0, 0, rH ? AH.w.Keyboard : 0))
        },
        rH = HH => {
          LH(HH.target)
        },
        SH = HH => {
          LH(HH.relatedTarget)
        },
        tH = () => {
          LH(document.activeElement)
        },
        zH = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", rH, zH), document.addEventListener("focusout", SH, zH), document.addEventListener("keydown", tH, zH), LH(document.activeElement), () => {
        document.removeEventListener("focusin", rH, zH), document.removeEventListener("focusout", SH, zH), document.removeEventListener("keydown", tH, zH)
      }
    }
    const zH = new Map;

    function CH(HH, BH) {
      var LH;
      let AH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      zH.set(AH, (null !== (LH = zH.get(AH)) && void 0 !== LH ? LH : 0) & ~HH | BH & HH);
      let SH = 0;
      for (const rH of zH.values()) SH |= rH;
      return (0, rH.E)(HH, SH & HH)
    }
  },
  37162: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => EH,
      h: () => zH,
      k: () => tH,
      l: () => CH
    });
    var AH = LH(2010);
    let rH = null,
      SH = 0;
    const hH = new Set;

    function tH() {
      return rH
    }

    function zH() {
      return SH
    }

    function CH(HH) {
      rH = HH, SH++, (0, AH.e)();
      for (const BH of hH) BH()
    }

    function EH(HH) {
      hH.add(HH)
    }
  },
  42307: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => AH
    });
    const AH = 2e3
  },
  42200: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => UH,
      d: () => GH,
      f: () => vH,
      h: () => TH,
      l: () => PH,
      o: () => VH
    });
    var AH = LH(159),
      rH = LH(15),
      SH = LH(18),
      hH = LH(3195),
      tH = LH(1253),
      zH = LH(34915),
      CH = LH(280),
      EH = LH(81),
      XH = LH(157);

    function GH() {
      var HH;
      const BH = (0, hH.O)(),
        LH = function(HH, BH) {
          return {
            sampleCount: HH.antiAliasing ? 4 : 1,
            n: (0, hH.E)(HH.pixelScale, BH),
            pixelated: (0, hH.B)(HH.pixelSmoothing)
          }
        }(rH.c.get("clientEscMenuOptions"), BH);
      return LH.sampleCount > 1 && (0, zH.e)() && (LH.sampleCount = 1), LH.n = null !== (HH = (0, zH.n)()) && void 0 !== HH ? HH : LH.n, AH.k.includes((0, EH.getSoftwareRenderer)()) && (LH.sampleCount = 1, LH.n = Math.max(LH.n, (0, hH.E)(XH.o.pixelScale, BH))), LH
    }
    let YH = null,
      uH = null;
    const QH = new Set;
    let WH = null;

    function MH() {
      for (const HH of QH) HH()
    }

    function xH() {
      if (null === YH) {
        const HH = document.createElement("div");
        HH.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", HH.setAttribute("aria-hidden", "true"), document.body.append(HH), uH = HH, YH = new hH.b(HH, MH)
      }
      return YH
    }

    function vH(HH) {
      const BH = (0, hH.q)(),
        [LH, AH] = xH().size(BH);
      return (0, hH.i)(LH, AH, BH, HH.n)
    }

    function PH(HH) {
      var BH, LH, AH, rH;
      const SH = (0, hH.q)(),
        [zH, CH] = xH().size(SH);
      if (zH <= 0 || CH <= 0) return null;
      const EH = (0, hH.i)(zH, CH, SH, GH().n);
      return (0, hH.f)(HH, EH), HH.style.left = `${null!==(BH=null===(LH=WH)||void 0===LH?void 0:LH.rect.left)&&void 0!==BH?BH:0}px`, HH.style.top = `${null!==(AH=null===(rH=WH)||void 0===rH?void 0:rH.rect.top)&&void 0!==AH?AH:0}px`, (0, tH.W)(HH.style, WH), EH
    }

    function TH(HH) {
      WH = HH, xH(), (0, tH.N)(uH.style, HH, ""), MH()
    }

    function UH(HH, BH) {
      HH.style.imageRendering = (0, hH.S)(BH.pixelated)
    }

    function VH(HH, BH) {
      const LH = (0, SH.m)("appManagerUpdated|clientEscMenuOptions", (() => {
          UH(HH, GH()), BH()
        })),
        AH = (0, zH.z)(BH),
        rH = (0, CH.n)(BH);
      return xH(), QH.add(BH), () => {
        LH(), AH(), rH(), QH.delete(BH)
      }
    }
  },
  42314: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => hH,
      c: () => SH,
      f: () => rH
    });
    let AH = null;

    function rH(HH) {
      AH = HH
    }

    function SH(HH) {
      AH === HH && (AH = null)
    }

    function hH() {
      var HH;
      null === (HH = AH) || void 0 === HH || HH()
    }
  },
  42271: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => rH,
      d: () => CH,
      g: () => SH,
      h: () => XH,
      i: () => EH,
      k: () => GH
    });
    var AH = LH(3171);
    class rH extends Error {
      constructor(HH, BH, LH) {
        super(`${"fetch"===HH?"fetching":"decoding"} ${BH} failed`, LH), this.stage = HH, this.source = BH, this.name = "ShellImageError"
      }
    }
    async function SH(HH) {
      let BH, LH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AH.M,
        SH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      if ("string" === typeof HH) try {
        BH = await LH(HH)
      } catch (hH) {
        throw new rH("fetch", HH, {
          cause: hH
        })
      } else BH = HH;
      try {
        const HH = new Blob([BH.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(HH, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: SH
        })
      } catch (hH) {
        throw new rH("decode", "string" === typeof HH ? HH : `${BH.byteLength} bytes`, {
          cause: hH
        })
      }
    }
    let hH = null;
    const tH = new Map;
    let zH = 1;

    function CH(HH) {
      if (hH = HH, null !== HH) {
        for (const [BH, LH] of tH) HH.trH(BH, LH);
        tH.clear()
      }
    }

    function EH(HH) {
      const BH = zH++;
      return hH ? hH.trH(BH, HH) : tH.set(BH, HH), BH
    }
    async function XH(HH, BH, LH) {
      const AH = await SH(HH, BH, LH);
      return {
        id: EH(AH),
        width: AH.width,
        height: AH.height
      }
    }

    function GH(HH) {
      var BH;
      const LH = tH.get(HH);
      if (LH) return LH.close(), void tH.delete(HH);
      null === (BH = hH) || void 0 === BH || BH.zrH(HH)
    }
  },
  42216: (HH, BH, LH) => {
    function AH(HH, BH) {
      if (!Object.prototype.hasOwnProperty.call(HH, BH)) throw new TypeError("attempted to use private field on non-instance");
      return HH
    }
    LH.d(BH, {
      e: () => AH
    })
  },
  42222: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => rH
    });
    var AH = 0;

    function rH(HH) {
      return "__private_" + AH++ + "_" + HH
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);