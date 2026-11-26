export const id = 101;
export const ids = [101];
export const modules = {
  42171: (VV, eV, xV) => {
    xV.d(eV, {
      A: () => SV,
      C: () => CV,
      D: () => GV,
      F: () => iV,
      H: () => zV,
      K: () => mV,
      N: () => fV,
      O: () => RV,
      d: () => KV,
      e: () => oV,
      h: () => XV,
      i: () => HV,
      l: () => MV,
      n: () => NV,
      p: () => aV,
      s: () => WV,
      v: () => DV,
      x: () => gV
    });
    var JV = xV(1473),
      YV = xV(32),
      UV = xV(1332),
      yV = xV(2660),
      pV = xV(5319),
      QV = xV(5281);
    let nV, wV = !1,
      ZV = !1,
      vV = !1,
      rV = !1;
    const kV = 1300,
      bV = 3e3;
    let EV = 0,
      BV = !1,
      jV = !1,
      qV = 0;
    const tV = 2;
    let FV = !1,
      TV = !1;
    const PV = new Set,
      AV = new Set;

    function NV() {
      return wV
    }

    function XV() {
      return jV
    }

    function MV() {
      return TV
    }

    function zV() {
      return (0, UV.r)() && !TV
    }

    function GV(VV) {
      let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (VV !== TV) {
        TV = VV;
        for (const VV of [...AV]) VV(TV);
        eV && fV()
      }
    }

    function WV(VV) {
      return AV.add(VV), () => {
        AV.delete(VV)
      }
    }

    function RV() {
      (0, pV.h)(yV.y.Menu, (0, UV.r)() ? 0 : yV.y.Menu)
    }

    function gV() {
      jV = !1, qV = 0, RV(), fV()
    }

    function DV(VV) {
      return PV.add(VV), () => {
        PV.delete(VV)
      }
    }

    function iV(VV) {
      ZV = !1, VV !== wV && (wV = VV, rV = !1, clearTimeout(nV), vV = !wV && FV, wV ? (BV = !1, jV = !1, qV = 0) : zV() && !FV && (jV = !0), FV = !1, wV && !zV() && sV(), IV(), vV && fV())
    }

    function CV(VV) {
      VV !== BV && (BV = VV, VV || fV())
    }

    function aV() {
      ZV = !1, rV || !0 !== lV() || (rV = !0, clearTimeout(nV), nV = setTimeout(cV, kV))
    }

    function oV() {
      return (!ZV || performance.now() - EV > bV) && (ZV = (0, QV.G)().lockPointer(), EV = performance.now()), ZV
    }

    function cV() {
      hV() && LV() && oV()
    }

    function hV() {
      return zV() && !wV && !BV && !(0, JV.m)()
    }

    function lV() {
      var VV;
      return "undefined" === typeof navigator || null === (VV = navigator.userActivation) || void 0 === VV ? void 0 : VV.isActive
    }

    function LV() {
      return vV && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== lV()
    }

    function fV() {
      zV() ? hV() && !jV && LV() && oV() : wV && !FV && sV()
    }

    function mV() {
      jV ? navigator.vendor.startsWith("Apple") ? uV() : qV = tV : fV()
    }

    function KV() {
      qV > 0 && 0 === --qV && uV()
    }

    function HV() {
      qV = 0
    }

    function uV() {
      hV() && !0 === lV() && oV()
    }

    function sV() {
      FV = !0, (0, QV.G)().unlockPointer()
    }

    function SV() {
      ZV = !1, vV = !1, rV = !1, clearTimeout(nV), BV = !1, jV = !1, qV = 0, FV = !1;
      const VV = wV;
      wV = !1, VV && IV()
    }

    function IV() {
      for (const VV of [...PV]) VV(wV);
      YV.h.QZ("pointerLockUpdate", wV)
    }
  },
  41955: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => vV,
      f: () => pV,
      h: () => ZV,
      l: () => nV,
      o: () => yV,
      q: () => wV,
      s: () => QV
    });
    let JV = null,
      YV = null,
      UV = null;

    function yV(VV) {
      JV = VV
    }

    function pV() {
      return JV
    }

    function QV(VV) {
      YV = VV
    }

    function nV() {
      return YV
    }

    function wV(VV) {
      UV = VV
    }

    function ZV() {
      return UV
    }

    function vV() {
      var VV, eV;
      return !0 === (null === (VV = YV) || void 0 === VV || null === (eV = VV.currentViewer) || void 0 === eV ? void 0 : eV.inPlayback)
    }
  },
  5281: (VV, eV, xV) => {
    xV.d(eV, {
      A: () => zV,
      C: () => jV,
      E: () => yV,
      G: () => pV,
      J: () => NV,
      b: () => AV,
      d: () => tV,
      g: () => WV,
      h: () => GV,
      l: () => BV,
      m: () => TV,
      o: () => qV,
      s: () => FV,
      u: () => XV,
      w: () => MV
    });
    var JV = xV(5288);
    const YV = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let UV = YV;

    function yV(VV) {
      UV = null !== VV && void 0 !== VV ? VV : YV
    }

    function pV() {
      return UV
    }
    const QV = new Set,
      nV = new Set;
    let wV = -1;
    const ZV = new Set,
      vV = new Set;
    let rV = 0,
      kV = 0;
    const bV = new Set,
      EV = new Set;

    function BV(VV) {
      return QV.add(VV), () => {
        QV.delete(VV)
      }
    }

    function jV(VV, eV) {
      for (const JV of QV) try {
        JV(VV)
      } catch (xV) {
        eV(xV)
      }
    }

    function qV(VV) {
      return nV.add(VV), () => {
        nV.delete(VV)
      }
    }

    function tV(VV, eV) {
      const xV = wV < 0 ? 0 : VV - wV;
      wV = VV;
      for (const YV of nV) try {
        YV(xV)
      } catch (JV) {
        eV(JV)
      }
    }

    function FV(VV) {
      return ZV.add(VV), () => {
        ZV.delete(VV)
      }
    }

    function TV(VV) {
      return vV.add(VV), () => {
        vV.delete(VV)
      }
    }
    let PV = 0;

    function AV(VV) {
      PV += VV
    }

    function NV() {
      const VV = PV;
      return PV = 0, VV
    }

    function XV(VV) {
      return bV.add(VV), () => {
        bV.delete(VV)
      }
    }

    function MV(VV) {
      return EV.add(VV), () => {
        EV.delete(VV)
      }
    }

    function zV() {
      rV = 0, kV = 0, wV = -1
    }

    function GV(VV, eV) {
      if ("paced" === VV) return kV += eV, null;
      if ("drawn" !== VV && "skipped" !== VV) return null;
      const xV = eV + kV;
      return kV = 0, xV
    }

    function WV(VV, eV, xV, YV) {
      const UV = (0, JV.e)(eV),
        yV = VV > 0 ? performance.now() : 0;
      for (let JV = 0; JV < VV; JV++)
        for (const VV of bV) try {
          VV()
        } catch (pV) {
          YV(pV)
        }
      if (VV > 0 && AV(performance.now() - yV), null !== xV) {
        for (const VV of ZV) try {
          VV(xV)
        } catch (pV) {
          YV(pV)
        }
        rV += xV
      }
      if ("drawn" === eV) {
        const VV = rV;
        rV = 0;
        for (const eV of vV) try {
          eV(VV)
        } catch (pV) {
          YV(pV)
        }
      }
      for (const JV of EV) try {
        JV(VV, UV)
      } catch (pV) {
        YV(pV)
      }
    }
  },
  42179: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => JV
    });
    const JV = {
      stop: () => JV,
      fade: () => JV,
      rate: () => JV,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => JV,
      setPannerAttr: () => JV,
      setPosition: () => JV
    }
  },
  5307: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => QV,
      d: () => UV,
      e: () => pV
    });
    var JV = xV(2660),
      YV = xV(5310);

    function UV(VV) {
      let {
        action: eV,
        flags: xV
      } = VV;
      return "mid-fire" === eV && 0 !== (xV & JV.c.AltLeftClick)
    }
    const yV = new Set;

    function pV(VV) {
      return yV.add(VV), () => {
        yV.delete(VV)
      }
    }

    function QV(VV) {
      const eV = YV.e[255 & VV];
      if (void 0 === eV) return;
      const xV = VV >>> 8 & 255,
        UV = {
          action: eV,
          down: 0 !== (xV & JV.c.Down),
          flags: xV,
          press: VV >>> 16
        };
      for (const JV of yV) JV(UV)
    }
  },
  5310: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => YV,
      h: () => UV,
      l: () => yV,
      p: () => JV,
      q: () => pV
    });
    const JV = {
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
      YV = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      UV = {
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
      yV = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      pV = [16]
  },
  42210: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => wV,
      e: () => nV,
      f: () => QV
    });
    var JV = xV(5301),
      YV = xV(2660),
      UV = xV(5319);
    let yV = !1,
      pV = !1;

    function QV(VV) {
      yV = !0;
      try {
        VV()
      } finally {
        yV = !1
      }
    }

    function nV(VV, eV) {
      if (yV) return !1;
      switch (VV) {
        case JV.T.MouseDown:
        case JV.T.MouseUp:
        case JV.T.TouchStart:
        case JV.T.TouchEnd:
        case JV.T.TouchCancel:
        case JV.T.TouchButton:
          return !0;
        case JV.T.KeyDown:
        case JV.T.KeyUp:
          return 0 === (eV & YV.e.Repeat) && !(0, UV.f)(document.activeElement);
        default:
          return !1
      }
    }

    function wV(VV) {
      pV || (pV = !0, queueMicrotask((() => {
        pV = !1, VV()
      })))
    }
  },
  5319: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => pV,
      f: () => yV,
      h: () => nV
    });
    var JV = xV(2660),
      YV = xV(2663);
    const UV = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function yV(VV) {
      return VV instanceof HTMLElement && (!!(VV.isContentEditable || VV instanceof HTMLTextAreaElement || VV instanceof HTMLSelectElement) || VV instanceof HTMLInputElement && !UV.has(VV.type))
    }

    function pV(VV) {
      let eV = null;
      const xV = xV => {
          const YV = yV(xV);
          YV !== eV && (eV = YV, VV(JV.i.UiCapture, JV.y.Keyboard, 0, 0, YV ? JV.y.Keyboard : 0))
        },
        YV = VV => {
          xV(VV.target)
        },
        UV = VV => {
          xV(VV.relatedTarget)
        },
        pV = () => {
          xV(document.activeElement)
        },
        QV = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", YV, QV), document.addEventListener("focusout", UV, QV), document.addEventListener("keydown", pV, QV), xV(document.activeElement), () => {
        document.removeEventListener("focusin", YV, QV), document.removeEventListener("focusout", UV, QV), document.removeEventListener("keydown", pV, QV)
      }
    }
    const QV = new Map;

    function nV(VV, eV) {
      var xV;
      let JV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      QV.set(JV, (null !== (xV = QV.get(JV)) && void 0 !== xV ? xV : 0) & ~VV | eV & VV);
      let UV = 0;
      for (const YV of QV.values()) UV |= YV;
      return (0, YV.D)(VV, UV & VV)
    }
  },
  42259: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => wV,
      g: () => QV,
      h: () => pV,
      l: () => nV
    });
    var JV = xV(2066);
    let YV = null,
      UV = 0;
    const yV = new Set;

    function pV() {
      return YV
    }

    function QV() {
      return UV
    }

    function nV(VV) {
      YV = VV, UV++, (0, JV.d)();
      for (const eV of yV) eV()
    }

    function wV(VV) {
      yV.add(VV)
    }
  },
  42303: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => JV
    });
    const JV = 2e3
  },
  42177: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => TV,
      d: () => vV,
      f: () => qV,
      g: () => FV,
      j: () => tV,
      l: () => PV
    });
    var JV = xV(183),
      YV = xV(27),
      UV = xV(32),
      yV = xV(3239),
      pV = xV(1348),
      QV = xV(35247),
      nV = xV(330),
      wV = xV(99),
      ZV = xV(178);

    function vV() {
      var VV;
      const eV = (0, yV.K)(),
        xV = function(VV, eV) {
          return {
            sampleCount: VV.antiAliasing ? 4 : 1,
            n: (0, yV.A)(VV.pixelScale, eV),
            pixelated: (0, yV.y)(VV.pixelSmoothing)
          }
        }(YV.b.get("clientEscMenuOptions"), eV);
      return xV.sampleCount > 1 && (0, QV.b)() && (xV.sampleCount = 1), xV.n = null !== (VV = (0, QV.m)()) && void 0 !== VV ? VV : xV.n, JV.j.includes((0, wV.getSoftwareRenderer)()) && (xV.sampleCount = 1, xV.n = Math.max(xV.n, (0, yV.A)(ZV.u.pixelScale, eV))), xV
    }
    let rV = null,
      kV = null;
    const bV = new Set;
    let EV = null;

    function BV() {
      for (const VV of bV) VV()
    }

    function jV() {
      if (null === rV) {
        const VV = document.createElement("div");
        VV.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", VV.setAttribute("aria-hidden", "true"), document.body.append(VV), kV = VV, rV = new yV.c(VV, BV)
      }
      return rV
    }

    function qV(VV) {
      const eV = (0, yV.n)(),
        [xV, JV] = jV().size(eV);
      return (0, yV.i)(xV, JV, eV, VV.n)
    }

    function tV(VV) {
      var eV, xV, JV, YV;
      const UV = (0, yV.n)(),
        [QV, nV] = jV().size(UV);
      if (QV <= 0 || nV <= 0) return null;
      const wV = (0, yV.i)(QV, nV, UV, vV().n);
      return (0, yV.g)(VV, wV), VV.style.left = `${null!==(eV=null===(xV=EV)||void 0===xV?void 0:xV.rect.left)&&void 0!==eV?eV:0}px`, VV.style.top = `${null!==(JV=null===(YV=EV)||void 0===YV?void 0:YV.rect.top)&&void 0!==JV?JV:0}px`, (0, pV.S)(VV.style, EV), wV
    }

    function FV(VV) {
      EV = VV, jV(), (0, pV.N)(kV.style, VV, ""), BV()
    }

    function TV(VV, eV) {
      VV.style.imageRendering = (0, yV.M)(eV.pixelated)
    }

    function PV(VV, eV) {
      const xV = (0, UV.i)("appManagerUpdated|clientEscMenuOptions", (() => {
          TV(VV, vV()), eV()
        })),
        JV = (0, QV.v)(eV),
        YV = (0, nV.l)(eV);
      return jV(), bV.add(eV), () => {
        xV(), JV(), YV(), bV.delete(eV)
      }
    }
  },
  42305: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => yV,
      h: () => UV,
      k: () => YV
    });
    let JV = null;

    function YV(VV) {
      JV = VV
    }

    function UV(VV) {
      JV === VV && (JV = null)
    }

    function yV() {
      var VV;
      null === (VV = JV) || void 0 === VV || VV()
    }
  },
  42252: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => YV,
      h: () => nV,
      j: () => UV,
      l: () => ZV,
      m: () => wV,
      q: () => vV
    });
    var JV = xV(3196);
    class YV extends Error {
      constructor(VV, eV, xV) {
        super(`${"fetch"===VV?"fetching":"decoding"} ${eV} failed`, xV), this.stage = VV, this.source = eV, this.name = "ShellImageError"
      }
    }
    async function UV(VV) {
      let eV, xV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JV.H,
        UV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      if ("string" === typeof VV) try {
        eV = await xV(VV)
      } catch (yV) {
        throw new YV("fetch", VV, {
          cause: yV
        })
      } else eV = VV;
      try {
        const VV = new Blob([eV.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(VV, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: UV
        })
      } catch (yV) {
        throw new YV("decode", "string" === typeof VV ? VV : `${eV.byteLength} bytes`, {
          cause: yV
        })
      }
    }
    let yV = null;
    const pV = new Map;
    let QV = 1;

    function nV(VV) {
      if (yV = VV, null !== VV) {
        for (const [eV, xV] of pV) VV.tYV(eV, xV);
        pV.clear()
      }
    }

    function wV(VV) {
      const eV = QV++;
      return yV ? yV.tYV(eV, VV) : pV.set(eV, VV), eV
    }
    async function ZV(VV, eV, xV) {
      const JV = await UV(VV, eV, xV);
      return {
        id: wV(JV),
        width: JV.width,
        height: JV.height
      }
    }

    function vV(VV) {
      var eV;
      const xV = pV.get(VV);
      if (xV) return xV.close(), void pV.delete(VV);
      null === (eV = yV) || void 0 === eV || eV.FYV(VV)
    }
  },
  42184: (VV, eV, xV) => {
    function JV(VV, eV) {
      if (!Object.prototype.hasOwnProperty.call(VV, eV)) throw new TypeError("attempted to use private field on non-instance");
      return VV
    }
    xV.d(eV, {
      d: () => JV
    })
  },
  42192: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => YV
    });
    var JV = 0;

    function YV(VV) {
      return "__private_" + JV++ + "_" + VV
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);