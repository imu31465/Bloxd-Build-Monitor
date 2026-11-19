export const id = 85;
export const ids = [85];
export const modules = {
  39815: (YY, rY, DY) => {
    DY.d(rY, {
      B: () => fY,
      F: () => CY,
      H: () => PY,
      I: () => hY,
      J: () => HY,
      M: () => jY,
      O: () => KY,
      Q: () => pY,
      U: () => qY,
      X: () => ZY,
      e: () => kY,
      i: () => JY,
      j: () => BY,
      l: () => GY,
      n: () => cY,
      r: () => NY,
      u: () => dY,
      y: () => zY
    });
    var FY = DY(1384),
      AY = DY(25),
      IY = DY(1287),
      RY = DY(2251),
      OY = DY(4396),
      gY = DY(4365);
    let aY, vY = !1,
      uY = !1,
      sY = !1,
      iY = !1;
    const yY = 1300,
      QY = 3e3;
    let oY = 0,
      WY = !1,
      EY = !1,
      mY = 0;
    const VY = 2;
    let SY = !1,
      lY = !1;
    const TY = new Set,
      eY = new Set;

    function NY() {
      return vY
    }

    function BY() {
      return EY
    }

    function cY() {
      return lY
    }

    function KY() {
      return (0, IY.l)() && !lY
    }

    function HY(YY) {
      let rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (YY !== lY) {
        lY = YY;
        for (const YY of [...eY]) YY(lY);
        rY && qY()
      }
    }

    function zY(YY) {
      return eY.add(YY), () => {
        eY.delete(YY)
      }
    }

    function ZY() {
      (0, OY.k)(RY.w.Menu, (0, IY.l)() ? 0 : RY.w.Menu)
    }

    function CY() {
      EY = !1, mY = 0, ZY(), qY()
    }

    function fY(YY) {
      return TY.add(YY), () => {
        TY.delete(YY)
      }
    }

    function jY(YY) {
      uY = !1, YY !== vY && (vY = YY, iY = !1, clearTimeout(aY), sY = !vY && SY, vY ? (WY = !1, EY = !1, mY = 0) : KY() && !SY && (EY = !0), SY = !1, vY && !KY() && nY(), UY(), sY && qY())
    }

    function hY(YY) {
      YY !== WY && (WY = YY, YY || qY())
    }

    function dY() {
      uY = !1, iY || !0 !== bY() || (iY = !0, clearTimeout(aY), aY = setTimeout(MY, yY))
    }

    function JY() {
      return (!uY || performance.now() - oY > QY) && (uY = (0, gY.D)().lockPointer(), oY = performance.now()), uY
    }

    function MY() {
      wY() && XY() && JY()
    }

    function wY() {
      return KY() && !vY && !WY && !(0, FY.f)()
    }

    function bY() {
      var YY;
      return "undefined" === typeof navigator || null === (YY = navigator.userActivation) || void 0 === YY ? void 0 : YY.isActive
    }

    function XY() {
      return sY && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== bY()
    }

    function qY() {
      KY() ? wY() && !EY && XY() && JY() : vY && !SY && nY()
    }

    function pY() {
      EY ? navigator.vendor.startsWith("Apple") ? xY() : mY = VY : qY()
    }

    function kY() {
      mY > 0 && 0 === --mY && xY()
    }

    function GY() {
      mY = 0
    }

    function xY() {
      wY() && !0 === bY() && JY()
    }

    function nY() {
      SY = !0, (0, gY.D)().unlockPointer()
    }

    function PY() {
      uY = !1, sY = !1, iY = !1, clearTimeout(aY), WY = !1, EY = !1, mY = 0, SY = !1;
      const YY = vY;
      vY = !1, YY && UY()
    }

    function UY() {
      for (const YY of [...TY]) YY(vY);
      AY.g.vo("pointerLockUpdate", vY)
    }
  },
  39785: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => sY,
      e: () => OY,
      i: () => uY,
      m: () => aY,
      o: () => RY,
      s: () => vY,
      u: () => gY
    });
    let FY = null,
      AY = null,
      IY = null;

    function RY(YY) {
      FY = YY
    }

    function OY() {
      return FY
    }

    function gY(YY) {
      AY = YY
    }

    function aY() {
      return AY
    }

    function vY(YY) {
      IY = YY
    }

    function uY() {
      return IY
    }

    function sY() {
      var YY, rY;
      return !0 === (null === (YY = AY) || void 0 === YY || null === (rY = YY.currentViewer) || void 0 === rY ? void 0 : rY.inPlayback)
    }
  },
  4365: (YY, rY, DY) => {
    DY.d(rY, {
      B: () => EY,
      C: () => RY,
      D: () => OY,
      H: () => NY,
      d: () => eY,
      f: () => VY,
      j: () => zY,
      k: () => HY,
      l: () => WY,
      m: () => lY,
      o: () => mY,
      s: () => SY,
      w: () => BY,
      x: () => cY,
      z: () => KY
    });
    var FY = DY(4371);
    const AY = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let IY = AY;

    function RY(YY) {
      IY = null !== YY && void 0 !== YY ? YY : AY
    }

    function OY() {
      return IY
    }
    const gY = new Set,
      aY = new Set;
    let vY = -1;
    const uY = new Set,
      sY = new Set;
    let iY = 0,
      yY = 0;
    const QY = new Set,
      oY = new Set;

    function WY(YY) {
      return gY.add(YY), () => {
        gY.delete(YY)
      }
    }

    function EY(YY, rY) {
      for (const FY of gY) try {
        FY(YY)
      } catch (DY) {
        rY(DY)
      }
    }

    function mY(YY) {
      return aY.add(YY), () => {
        aY.delete(YY)
      }
    }

    function VY(YY, rY) {
      const DY = vY < 0 ? 0 : YY - vY;
      vY = YY;
      for (const AY of aY) try {
        AY(DY)
      } catch (FY) {
        rY(FY)
      }
    }

    function SY(YY) {
      return uY.add(YY), () => {
        uY.delete(YY)
      }
    }

    function lY(YY) {
      return sY.add(YY), () => {
        sY.delete(YY)
      }
    }
    let TY = 0;

    function eY(YY) {
      TY += YY
    }

    function NY() {
      const YY = TY;
      return TY = 0, YY
    }

    function BY(YY) {
      return QY.add(YY), () => {
        QY.delete(YY)
      }
    }

    function cY(YY) {
      return oY.add(YY), () => {
        oY.delete(YY)
      }
    }

    function KY() {
      iY = 0, yY = 0, vY = -1
    }

    function HY(YY, rY) {
      if ("paced" === YY) return yY += rY, null;
      if ("drawn" !== YY && "skipped" !== YY) return null;
      const DY = rY + yY;
      return yY = 0, DY
    }

    function zY(YY, rY, DY, AY) {
      const IY = (0, FY.j)(rY),
        RY = YY > 0 ? performance.now() : 0;
      for (let FY = 0; FY < YY; FY++)
        for (const YY of QY) try {
          YY()
        } catch (OY) {
          AY(OY)
        }
      if (YY > 0 && eY(performance.now() - RY), null !== DY) {
        for (const YY of uY) try {
          YY(DY)
        } catch (OY) {
          AY(OY)
        }
        iY += DY
      }
      if ("drawn" === rY) {
        const YY = iY;
        iY = 0;
        for (const rY of sY) try {
          rY(YY)
        } catch (OY) {
          AY(OY)
        }
      }
      for (const FY of oY) try {
        FY(YY, IY)
      } catch (OY) {
        AY(OY)
      }
    }
  },
  40012: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => FY
    });
    const FY = {
      stop: () => FY,
      fade: () => FY,
      rate: () => FY,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => FY,
      setPannerAttr: () => FY,
      setPosition: () => FY
    }
  },
  4386: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => gY,
      e: () => IY,
      h: () => OY
    });
    var FY = DY(2251),
      AY = DY(4392);

    function IY(YY) {
      let {
        action: rY,
        flags: DY
      } = YY;
      return "mid-fire" === rY && 0 !== (DY & FY.c.AltLeftClick)
    }
    const RY = new Set;

    function OY(YY) {
      return RY.add(YY), () => {
        RY.delete(YY)
      }
    }

    function gY(YY) {
      const rY = AY.c[255 & YY];
      if (void 0 === rY) return;
      const DY = YY >>> 8 & 255,
        IY = {
          action: rY,
          down: 0 !== (DY & FY.c.Down),
          flags: DY,
          press: YY >>> 16
        };
      for (const FY of RY) FY(IY)
    }
  },
  4392: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => AY,
      d: () => IY,
      g: () => RY,
      k: () => FY,
      l: () => OY
    });
    const FY = {
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
      AY = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      IY = {
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
      RY = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      OY = [16]
  },
  40122: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => vY,
      f: () => aY,
      h: () => gY
    });
    var FY = DY(4382),
      AY = DY(2251),
      IY = DY(4396);
    let RY = !1,
      OY = !1;

    function gY(YY) {
      RY = !0;
      try {
        YY()
      } finally {
        RY = !1
      }
    }

    function aY(YY, rY) {
      if (RY) return !1;
      switch (YY) {
        case FY.C.MouseDown:
        case FY.C.MouseUp:
        case FY.C.TouchStart:
        case FY.C.TouchEnd:
        case FY.C.TouchCancel:
        case FY.C.TouchButton:
          return !0;
        case FY.C.KeyDown:
        case FY.C.KeyUp:
          return 0 === (rY & AY.g.Repeat) && !(0, IY.g)(document.activeElement);
        default:
          return !1
      }
    }

    function vY(YY) {
      OY || (OY = !0, queueMicrotask((() => {
        OY = !1, YY()
      })))
    }
  },
  4396: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => OY,
      g: () => RY,
      k: () => aY
    });
    var FY = DY(2251),
      AY = DY(2256);
    const IY = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function RY(YY) {
      return YY instanceof HTMLElement && (!!(YY.isContentEditable || YY instanceof HTMLTextAreaElement || YY instanceof HTMLSelectElement) || YY instanceof HTMLInputElement && !IY.has(YY.type))
    }

    function OY(YY) {
      let rY = null;
      const DY = DY => {
          const AY = RY(DY);
          AY !== rY && (rY = AY, YY(FY.j.UiCapture, FY.w.Keyboard, 0, 0, AY ? FY.w.Keyboard : 0))
        },
        AY = YY => {
          DY(YY.target)
        },
        IY = YY => {
          DY(YY.relatedTarget)
        },
        OY = () => {
          DY(document.activeElement)
        },
        gY = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", AY, gY), document.addEventListener("focusout", IY, gY), document.addEventListener("keydown", OY, gY), DY(document.activeElement), () => {
        document.removeEventListener("focusin", AY, gY), document.removeEventListener("focusout", IY, gY), document.removeEventListener("keydown", OY, gY)
      }
    }
    const gY = new Map;

    function aY(YY, rY) {
      var DY;
      let FY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      gY.set(FY, (null !== (DY = gY.get(FY)) && void 0 !== DY ? DY : 0) & ~YY | rY & YY);
      let IY = 0;
      for (const AY of gY.values()) IY |= AY;
      return (0, AY.D)(YY, IY & YY)
    }
  },
  40149: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => FY
    });
    const FY = 2e3
  },
  40006: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => mY,
      e: () => aY,
      f: () => oY,
      i: () => EY,
      m: () => WY,
      n: () => VY
    });
    var FY = DY(19),
      AY = DY(25),
      IY = DY(2523),
      RY = DY(1298),
      OY = DY(8667),
      gY = DY(2526);

    function aY() {
      var YY;
      const rY = (DY = FY.b.get("clientEscMenuOptions"), AY = (0, IY.H)(), {
        sampleCount: DY.antiAliasing ? 4 : 1,
        n: (0, IY.y)(DY.pixelScale, AY),
        pixelated: (0, IY.v)(DY.pixelSmoothing)
      });
      var DY, AY;
      return rY.sampleCount > 1 && (0, OY.c)() && (rY.sampleCount = 1), rY.n = null !== (YY = (0, OY.n)()) && void 0 !== YY ? YY : rY.n, rY
    }
    let vY = null,
      uY = null;
    const sY = new Set;
    let iY = null;

    function yY() {
      for (const YY of sY) YY()
    }

    function QY() {
      if (null === vY) {
        const YY = document.createElement("div");
        YY.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", YY.setAttribute("aria-hidden", "true"), document.body.append(YY), uY = YY, vY = new IY.c(YY, yY)
      }
      return vY
    }

    function oY(YY) {
      const rY = (0, IY.m)(),
        [DY, FY] = QY().size(rY);
      return (0, IY.k)(DY, FY, rY, YY.n)
    }

    function WY(YY) {
      var rY, DY, FY, AY;
      const OY = (0, IY.m)(),
        [gY, vY] = QY().size(OY);
      if (gY <= 0 || vY <= 0) return null;
      const uY = (0, IY.k)(gY, vY, OY, aY().n);
      return (0, IY.g)(YY, uY), YY.style.left = `${null!==(rY=null===(DY=iY)||void 0===DY?void 0:DY.rect.left)&&void 0!==rY?rY:0}px`, YY.style.top = `${null!==(FY=null===(AY=iY)||void 0===AY?void 0:AY.rect.top)&&void 0!==FY?FY:0}px`, (0, RY.P)(YY.style, iY), uY
    }

    function EY(YY) {
      iY = YY, QY(), (0, RY.G)(uY.style, YY, ""), yY()
    }

    function mY(YY, rY) {
      YY.style.imageRendering = (0, IY.I)(rY.pixelated)
    }

    function VY(YY, rY) {
      const DY = (0, AY.j)("appManagerUpdated|clientEscMenuOptions", (() => {
          mY(YY, aY()), rY()
        })),
        FY = (0, OY.w)(rY),
        IY = (0, gY.o)(rY);
      return QY(), sY.add(rY), () => {
        DY(), FY(), IY(), sY.delete(rY)
      }
    }
  },
  40152: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => RY,
      e: () => IY,
      h: () => AY
    });
    let FY = null;

    function AY(YY) {
      FY = YY
    }

    function IY(YY) {
      FY === YY && (FY = null)
    }

    function RY() {
      var YY;
      null === (YY = FY) || void 0 === YY || YY()
    }
  },
  40132: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => AY,
      d: () => aY,
      g: () => IY,
      j: () => uY,
      k: () => vY,
      o: () => sY
    });
    var FY = DY(3316);
    class AY extends Error {
      constructor(YY, rY, DY) {
        super(`${"fetch"===YY?"fetching":"decoding"} ${rY} failed`, DY), this.stage = YY, this.source = rY, this.name = "ShellImageError"
      }
    }
    async function IY(YY) {
      let rY, DY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : FY.D,
        IY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      if ("string" === typeof YY) try {
        rY = await DY(YY)
      } catch (RY) {
        throw new AY("fetch", YY, {
          cause: RY
        })
      } else rY = YY;
      try {
        const YY = new Blob([rY.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(YY, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: IY
        })
      } catch (RY) {
        throw new AY("decode", "string" === typeof YY ? YY : `${rY.byteLength} bytes`, {
          cause: RY
        })
      }
    }
    let RY = null;
    const OY = new Map;
    let gY = 1;

    function aY(YY) {
      if (RY = YY, null !== YY) {
        for (const [rY, DY] of OY) YY.IDY(rY, DY);
        OY.clear()
      }
    }

    function vY(YY) {
      const rY = gY++;
      return RY ? RY.IDY(rY, YY) : OY.set(rY, YY), rY
    }
    async function uY(YY, rY, DY) {
      const FY = await IY(YY, rY, DY);
      return {
        id: vY(FY),
        width: FY.width,
        height: FY.height
      }
    }

    function sY(YY) {
      var rY;
      const DY = OY.get(YY);
      if (DY) return DY.close(), void OY.delete(YY);
      null === (rY = RY) || void 0 === rY || rY.RDY(YY)
    }
  },
  40028: (YY, rY, DY) => {
    function FY(YY, rY) {
      if (!Object.prototype.hasOwnProperty.call(YY, rY)) throw new TypeError("attempted to use private field on non-instance");
      return YY
    }
    DY.d(rY, {
      d: () => FY
    })
  },
  40034: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => AY
    });
    var FY = 0;

    function AY(YY) {
      return "__private_" + FY++ + "_" + YY
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);