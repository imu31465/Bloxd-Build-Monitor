export const id = 79;
export const ids = [79];
export const modules = {
  39478: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      C: () => gJ,
      D: () => BJ,
      E: () => kJ,
      G: () => bJ,
      K: () => PJ,
      O: () => MJ,
      S: () => uJ,
      W: () => CJ,
      Z: () => WJ,
      e: () => iJ,
      i: () => dJ,
      j: () => SJ,
      m: () => RJ,
      p: () => IJ,
      q: () => yJ,
      u: () => pJ,
      w: () => wJ,
      z: () => HJ
    });
    var FJ = ZJ(1294),
      UJ = ZJ(17),
      eJ = ZJ(1184),
      XJ = ZJ(2146),
      AJ = ZJ(4217),
      qJ = ZJ(4176);
    let jJ, YJ = !1,
      hJ = !1,
      DJ = !1,
      sJ = !1;
    const nJ = 1300,
      GJ = 3e3;
    let fJ = 0,
      xJ = !1,
      rJ = !1,
      vJ = 0;
    const mJ = 2;
    let QJ = !1,
      EJ = !1;
    const VJ = new Set,
      KJ = new Set;

    function yJ() {
      return YJ
    }

    function SJ() {
      return rJ
    }

    function IJ() {
      return EJ
    }

    function MJ() {
      return (0, eJ.j)() && !EJ
    }

    function bJ(JJ) {
      let cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (JJ !== EJ) {
        EJ = JJ;
        for (const JJ of [...KJ]) JJ(EJ);
        cJ && CJ()
      }
    }

    function wJ(JJ) {
      return KJ.add(JJ), () => {
        KJ.delete(JJ)
      }
    }

    function WJ() {
      (0, AJ.g)(XJ.D.Menu, (0, eJ.j)() ? 0 : XJ.D.Menu)
    }

    function gJ() {
      rJ = !1, vJ = 0, WJ(), CJ()
    }

    function HJ(JJ) {
      return VJ.add(JJ), () => {
        VJ.delete(JJ)
      }
    }

    function PJ(JJ) {
      hJ = !1, JJ !== YJ && (YJ = JJ, sJ = !1, clearTimeout(jJ), DJ = !YJ && QJ, YJ ? (xJ = !1, rJ = !1, vJ = 0) : MJ() && !QJ && (rJ = !0), QJ = !1, YJ && !MJ() && aJ(), tJ(), DJ && CJ())
    }

    function kJ(JJ) {
      JJ !== xJ && (xJ = JJ, JJ || CJ())
    }

    function pJ() {
      hJ = !1, sJ || !0 !== OJ() || (sJ = !0, clearTimeout(jJ), jJ = setTimeout(zJ, nJ))
    }

    function dJ() {
      return (!hJ || performance.now() - fJ > GJ) && (hJ = (0, qJ.F)().lockPointer(), fJ = performance.now()), hJ
    }

    function zJ() {
      NJ() && TJ() && dJ()
    }

    function NJ() {
      return MJ() && !YJ && !xJ && !(0, FJ.e)()
    }

    function OJ() {
      var JJ;
      return "undefined" === typeof navigator || null === (JJ = navigator.userActivation) || void 0 === JJ ? void 0 : JJ.isActive
    }

    function TJ() {
      return DJ && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== OJ()
    }

    function CJ() {
      MJ() ? NJ() && !rJ && TJ() && dJ() : YJ && !QJ && aJ()
    }

    function uJ() {
      rJ ? navigator.vendor.startsWith("Apple") ? LJ() : vJ = mJ : CJ()
    }

    function iJ() {
      vJ > 0 && 0 === --vJ && LJ()
    }

    function RJ() {
      vJ = 0
    }

    function LJ() {
      NJ() && !0 === OJ() && dJ()
    }

    function aJ() {
      QJ = !0, (0, qJ.F)().unlockPointer()
    }

    function BJ() {
      hJ = !1, DJ = !1, sJ = !1, clearTimeout(jJ), xJ = !1, rJ = !1, vJ = 0, QJ = !1;
      const JJ = YJ;
      YJ = !1, JJ && tJ()
    }

    function tJ() {
      for (const JJ of [...VJ]) JJ(YJ);
      UJ.i.Uf("pointerLockUpdate", YJ)
    }
  },
  39452: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => DJ,
      f: () => AJ,
      j: () => hJ,
      n: () => jJ,
      o: () => XJ,
      r: () => YJ,
      v: () => qJ
    });
    let FJ = null,
      UJ = null,
      eJ = null;

    function XJ(JJ) {
      FJ = JJ
    }

    function AJ() {
      return FJ
    }

    function qJ(JJ) {
      UJ = JJ
    }

    function jJ() {
      return UJ
    }

    function YJ(JJ) {
      eJ = JJ
    }

    function hJ() {
      return eJ
    }

    function DJ() {
      var JJ, cJ;
      return !0 === (null === (JJ = UJ) || void 0 === JJ || null === (cJ = JJ.currentViewer) || void 0 === cJ ? void 0 : cJ.inPlayback)
    }
  },
  4176: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      A: () => MJ,
      B: () => rJ,
      E: () => XJ,
      F: () => AJ,
      H: () => yJ,
      c: () => KJ,
      e: () => mJ,
      f: () => wJ,
      i: () => bJ,
      m: () => xJ,
      o: () => EJ,
      p: () => vJ,
      s: () => QJ,
      w: () => SJ,
      y: () => IJ
    });
    var FJ = ZJ(4182);
    const UJ = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let eJ = UJ;

    function XJ(JJ) {
      eJ = null !== JJ && void 0 !== JJ ? JJ : UJ
    }

    function AJ() {
      return eJ
    }
    const qJ = new Set,
      jJ = new Set;
    let YJ = -1;
    const hJ = new Set,
      DJ = new Set;
    let sJ = 0,
      nJ = 0;
    const GJ = new Set,
      fJ = new Set;

    function xJ(JJ) {
      return qJ.add(JJ), () => {
        qJ.delete(JJ)
      }
    }

    function rJ(JJ, cJ) {
      for (const FJ of qJ) try {
        FJ(JJ)
      } catch (ZJ) {
        cJ(ZJ)
      }
    }

    function vJ(JJ) {
      return jJ.add(JJ), () => {
        jJ.delete(JJ)
      }
    }

    function mJ(JJ, cJ) {
      const ZJ = YJ < 0 ? 0 : JJ - YJ;
      YJ = JJ;
      for (const UJ of jJ) try {
        UJ(ZJ)
      } catch (FJ) {
        cJ(FJ)
      }
    }

    function QJ(JJ) {
      return hJ.add(JJ), () => {
        hJ.delete(JJ)
      }
    }

    function EJ(JJ) {
      return DJ.add(JJ), () => {
        DJ.delete(JJ)
      }
    }
    let VJ = 0;

    function KJ(JJ) {
      VJ += JJ
    }

    function yJ() {
      const JJ = VJ;
      return VJ = 0, JJ
    }

    function SJ(JJ) {
      return GJ.add(JJ), () => {
        GJ.delete(JJ)
      }
    }

    function IJ(JJ) {
      return fJ.add(JJ), () => {
        fJ.delete(JJ)
      }
    }

    function MJ() {
      sJ = 0, nJ = 0, YJ = -1
    }

    function bJ(JJ, cJ) {
      if ("paced" === JJ) return nJ += cJ, null;
      if ("drawn" !== JJ && "skipped" !== JJ) return null;
      const ZJ = cJ + nJ;
      return nJ = 0, ZJ
    }

    function wJ(JJ, cJ, ZJ, UJ) {
      const eJ = (0, FJ.g)(cJ),
        XJ = JJ > 0 ? performance.now() : 0;
      for (let FJ = 0; FJ < JJ; FJ++)
        for (const JJ of GJ) try {
          JJ()
        } catch (AJ) {
          UJ(AJ)
        }
      if (JJ > 0 && KJ(performance.now() - XJ), null !== ZJ) {
        for (const JJ of hJ) try {
          JJ(ZJ)
        } catch (AJ) {
          UJ(AJ)
        }
        sJ += ZJ
      }
      if ("drawn" === cJ) {
        const JJ = sJ;
        sJ = 0;
        for (const cJ of DJ) try {
          cJ(JJ)
        } catch (AJ) {
          UJ(AJ)
        }
      }
      for (const FJ of fJ) try {
        FJ(JJ, eJ)
      } catch (AJ) {
        UJ(AJ)
      }
    }
  },
  39659: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => FJ
    });
    const FJ = {
      stop: () => FJ,
      fade: () => FJ,
      rate: () => FJ,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => FJ,
      setPannerAttr: () => FJ,
      setPosition: () => FJ
    }
  },
  4207: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => qJ,
      e: () => eJ,
      g: () => AJ
    });
    var FJ = ZJ(2146),
      UJ = ZJ(4210);

    function eJ(JJ) {
      let {
        action: cJ,
        flags: ZJ
      } = JJ;
      return "mid-fire" === cJ && 0 !== (ZJ & FJ.e.AltLeftClick)
    }
    const XJ = new Set;

    function AJ(JJ) {
      return XJ.add(JJ), () => {
        XJ.delete(JJ)
      }
    }

    function qJ(JJ) {
      const cJ = UJ.c[255 & JJ];
      if (void 0 === cJ) return;
      const ZJ = JJ >>> 8 & 255,
        eJ = {
          action: cJ,
          down: 0 !== (ZJ & FJ.e.Down),
          flags: ZJ,
          press: JJ >>> 16
        };
      for (const FJ of XJ) FJ(eJ)
    }
  },
  4210: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => UJ,
      e: () => eJ,
      h: () => XJ,
      l: () => FJ,
      o: () => AJ
    });
    const FJ = {
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
      UJ = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      eJ = {
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
      XJ = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      AJ = [16]
  },
  39775: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => YJ,
      f: () => jJ,
      g: () => qJ
    });
    var FJ = ZJ(4198),
      UJ = ZJ(2146),
      eJ = ZJ(4217);
    let XJ = !1,
      AJ = !1;

    function qJ(JJ) {
      XJ = !0;
      try {
        JJ()
      } finally {
        XJ = !1
      }
    }

    function jJ(JJ, cJ) {
      if (XJ) return !1;
      switch (JJ) {
        case FJ.E.MouseDown:
        case FJ.E.MouseUp:
        case FJ.E.TouchStart:
        case FJ.E.TouchEnd:
        case FJ.E.TouchCancel:
        case FJ.E.TouchButton:
          return !0;
        case FJ.E.KeyDown:
        case FJ.E.KeyUp:
          return 0 === (cJ & UJ.i.Repeat) && !(0, eJ.e)(document.activeElement);
        default:
          return !1
      }
    }

    function YJ(JJ) {
      AJ || (AJ = !0, queueMicrotask((() => {
        AJ = !1, JJ()
      })))
    }
  },
  4217: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => AJ,
      e: () => XJ,
      g: () => jJ
    });
    var FJ = ZJ(2146),
      UJ = ZJ(2153);
    const eJ = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function XJ(JJ) {
      return JJ instanceof HTMLElement && (!!(JJ.isContentEditable || JJ instanceof HTMLTextAreaElement || JJ instanceof HTMLSelectElement) || JJ instanceof HTMLInputElement && !eJ.has(JJ.type))
    }

    function AJ(JJ) {
      let cJ = null;
      const ZJ = ZJ => {
          const UJ = XJ(ZJ);
          UJ !== cJ && (cJ = UJ, JJ(FJ.l.UiCapture, FJ.D.Keyboard, 0, 0, UJ ? FJ.D.Keyboard : 0))
        },
        UJ = JJ => {
          ZJ(JJ.target)
        },
        eJ = JJ => {
          ZJ(JJ.relatedTarget)
        },
        AJ = () => {
          ZJ(document.activeElement)
        },
        qJ = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", UJ, qJ), document.addEventListener("focusout", eJ, qJ), document.addEventListener("keydown", AJ, qJ), ZJ(document.activeElement), () => {
        document.removeEventListener("focusin", UJ, qJ), document.removeEventListener("focusout", eJ, qJ), document.removeEventListener("keydown", AJ, qJ)
      }
    }
    const qJ = new Map;

    function jJ(JJ, cJ) {
      var ZJ;
      let FJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      qJ.set(FJ, (null !== (ZJ = qJ.get(FJ)) && void 0 !== ZJ ? ZJ : 0) & ~JJ | cJ & JJ);
      let eJ = 0;
      for (const UJ of qJ.values()) eJ |= UJ;
      return (0, UJ.H)(JJ, eJ & JJ)
    }
  },
  39831: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => FJ
    });
    const FJ = 2e3
  },
  39767: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => nJ,
      i: () => qJ,
      l: () => DJ,
      n: () => sJ,
      o: () => GJ
    });
    var FJ = ZJ(13),
      UJ = ZJ(17),
      eJ = ZJ(2431),
      XJ = ZJ(8526),
      AJ = ZJ(2433);

    function qJ() {
      var JJ;
      const cJ = (ZJ = FJ.d.get("clientEscMenuOptions"), UJ = (0, eJ.A)(), {
        sampleCount: ZJ.antiAliasing ? 4 : 1,
        n: (0, eJ.u)(ZJ.pixelScale, UJ),
        pixelated: (0, eJ.t)(ZJ.pixelSmoothing)
      });
      var ZJ, UJ;
      return cJ.sampleCount > 1 && (0, XJ.d)() && (cJ.sampleCount = 1), cJ.n = null !== (JJ = (0, XJ.j)()) && void 0 !== JJ ? JJ : cJ.n, cJ
    }
    let jJ = null;
    const YJ = new Set;

    function hJ() {
      if (null === jJ) {
        const JJ = document.createElement("div");
        JJ.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", JJ.setAttribute("aria-hidden", "true"), document.body.append(JJ), jJ = new eJ.d(JJ, (() => {
          for (const JJ of YJ) JJ()
        }))
      }
      return jJ
    }

    function DJ(JJ) {
      const cJ = (0, eJ.l)(),
        [ZJ, FJ] = hJ().size(cJ);
      return (0, eJ.i)(ZJ, FJ, cJ, JJ.n)
    }

    function sJ(JJ) {
      const cJ = (0, eJ.l)(),
        [ZJ, FJ] = hJ().size(cJ);
      if (ZJ <= 0 || FJ <= 0) return null;
      const UJ = (0, eJ.i)(ZJ, FJ, cJ, qJ().n);
      return (0, eJ.e)(JJ, UJ), UJ
    }

    function nJ(JJ, cJ) {
      JJ.style.imageRendering = (0, eJ.B)(cJ.pixelated)
    }

    function GJ(JJ, cJ) {
      const ZJ = (0, UJ.j)("appManagerUpdated|clientEscMenuOptions", (() => {
          nJ(JJ, qJ()), cJ()
        })),
        FJ = (0, XJ.t)(cJ),
        eJ = (0, AJ.j)(cJ);
      return hJ(), YJ.add(cJ), () => {
        ZJ(), FJ(), eJ(), YJ.delete(cJ)
      }
    }
  },
  39839: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => XJ,
      f: () => eJ,
      i: () => UJ
    });
    let FJ = null;

    function UJ(JJ) {
      FJ = JJ
    }

    function eJ(JJ) {
      FJ === JJ && (FJ = null)
    }

    function XJ() {
      var JJ;
      null === (JJ = FJ) || void 0 === JJ || JJ()
    }
  },
  39798: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => UJ,
      e: () => jJ,
      g: () => eJ,
      h: () => hJ,
      l: () => YJ,
      m: () => DJ
    });
    var FJ = ZJ(3183);
    class UJ extends Error {
      constructor(JJ, cJ, ZJ) {
        super(`${"fetch"===JJ?"fetching":"decoding"} ${cJ} failed`, ZJ), this.stage = JJ, this.source = cJ, this.name = "ShellImageError"
      }
    }
    async function eJ(JJ) {
      let cJ, ZJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : FJ.L,
        eJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      if ("string" === typeof JJ) try {
        cJ = await ZJ(JJ)
      } catch (XJ) {
        throw new UJ("fetch", JJ, {
          cause: XJ
        })
      } else cJ = JJ;
      try {
        const JJ = new Blob([cJ.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(JJ, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: eJ
        })
      } catch (XJ) {
        throw new UJ("decode", "string" === typeof JJ ? JJ : `${cJ.byteLength} bytes`, {
          cause: XJ
        })
      }
    }
    let XJ = null;
    const AJ = new Map;
    let qJ = 1;

    function jJ(JJ) {
      if (XJ = JJ, null !== JJ) {
        for (const [cJ, ZJ] of AJ) JJ.dZJ(cJ, ZJ);
        AJ.clear()
      }
    }

    function YJ(JJ) {
      const cJ = qJ++;
      return XJ ? XJ.dZJ(cJ, JJ) : AJ.set(cJ, JJ), cJ
    }
    async function hJ(JJ, cJ, ZJ) {
      const FJ = await eJ(JJ, cJ, ZJ);
      return {
        id: YJ(FJ),
        width: FJ.width,
        height: FJ.height
      }
    }

    function DJ(JJ) {
      var cJ;
      const ZJ = AJ.get(JJ);
      if (ZJ) return ZJ.close(), void AJ.delete(JJ);
      null === (cJ = XJ) || void 0 === cJ || cJ.zZJ(JJ)
    }
  },
  39682: (JJ, cJ, ZJ) => {
    function FJ(JJ, cJ) {
      if (!Object.prototype.hasOwnProperty.call(JJ, cJ)) throw new TypeError("attempted to use private field on non-instance");
      return JJ
    }
    ZJ.d(cJ, {
      d: () => FJ
    })
  },
  39688: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => UJ
    });
    var FJ = 0;

    function UJ(JJ) {
      return "__private_" + FJ++ + "_" + JJ
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);