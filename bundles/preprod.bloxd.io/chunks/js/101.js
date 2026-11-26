export const id = 101;
export const ids = [101];
export const modules = {
  41976: (UU, XU, zU) => {
    zU.d(XU, {
      A: () => KU,
      B: () => fU,
      F: () => wU,
      H: () => uU,
      J: () => CU,
      N: () => mU,
      P: () => nU,
      Q: () => OU,
      b: () => lU,
      c: () => HU,
      g: () => LU,
      h: () => xU,
      k: () => eU,
      o: () => dU,
      p: () => iU,
      s: () => qU,
      w: () => rU,
      x: () => SU
    });
    var cU = zU(1444),
      yU = zU(31),
      QU = zU(1310),
      AU = zU(2580),
      FU = zU(5342),
      oU = zU(5312);
    let DU, EU = !1,
      YU = !1,
      NU = !1,
      IU = !1;
    const pU = 1300,
      aU = 3e3;
    let tU = 0,
      gU = !1,
      kU = !1,
      GU = 0;
    const BU = 2;
    let ZU = !1,
      RU = !1;
    const PU = new Set,
      WU = new Set;

    function dU() {
      return EU
    }

    function LU() {
      return kU
    }

    function eU() {
      return RU
    }

    function CU() {
      return (0, QU.w)() && !RU
    }

    function wU(UU) {
      let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (UU !== RU) {
        RU = UU;
        for (const UU of [...WU]) UU(RU);
        XU && nU()
      }
    }

    function qU(UU) {
      return WU.add(UU), () => {
        WU.delete(UU)
      }
    }

    function OU() {
      (0, FU.f)(AU.F.Menu, (0, QU.w)() ? 0 : AU.F.Menu)
    }

    function SU() {
      kU = !1, GU = 0, OU(), nU()
    }

    function rU(UU) {
      return PU.add(UU), () => {
        PU.delete(UU)
      }
    }

    function uU(UU) {
      YU = !1, UU !== EU && (EU = UU, IU = !1, clearTimeout(DU), NU = !EU && ZU, EU ? (gU = !1, kU = !1, GU = 0) : CU() && !ZU && (kU = !0), ZU = !1, EU && !CU() && jU(), bU(), NU && nU())
    }

    function fU(UU) {
      UU !== gU && (gU = UU, UU || nU())
    }

    function iU() {
      YU = !1, IU || !0 !== VU() || (IU = !0, clearTimeout(DU), DU = setTimeout(MU, pU))
    }

    function HU() {
      return (!YU || performance.now() - tU > aU) && (YU = (0, oU.H)().lockPointer(), tU = performance.now()), YU
    }

    function MU() {
      vU() && sU() && HU()
    }

    function vU() {
      return CU() && !EU && !gU && !(0, cU.n)()
    }

    function VU() {
      var UU;
      return "undefined" === typeof navigator || null === (UU = navigator.userActivation) || void 0 === UU ? void 0 : UU.isActive
    }

    function sU() {
      return NU && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== VU()
    }

    function nU() {
      CU() ? vU() && !kU && sU() && HU() : EU && !ZU && jU()
    }

    function mU() {
      kU ? navigator.vendor.startsWith("Apple") ? JU() : GU = BU : nU()
    }

    function lU() {
      GU > 0 && 0 === --GU && JU()
    }

    function xU() {
      GU = 0
    }

    function JU() {
      vU() && !0 === VU() && HU()
    }

    function jU() {
      ZU = !0, (0, oU.H)().unlockPointer()
    }

    function KU() {
      YU = !1, NU = !1, IU = !1, clearTimeout(DU), gU = !1, kU = !1, GU = 0, ZU = !1;
      const UU = EU;
      EU = !1, UU && bU()
    }

    function bU() {
      for (const UU of [...PU]) UU(EU);
      yU.k.UY("pointerLockUpdate", EU)
    }
  },
  41742: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => NU,
      f: () => FU,
      h: () => YU,
      l: () => DU,
      m: () => AU,
      o: () => EU,
      r: () => oU
    });
    let cU = null,
      yU = null,
      QU = null;

    function AU(UU) {
      cU = UU
    }

    function FU() {
      return cU
    }

    function oU(UU) {
      yU = UU
    }

    function DU() {
      return yU
    }

    function EU(UU) {
      QU = UU
    }

    function YU() {
      return QU
    }

    function NU() {
      var UU, XU;
      return !0 === (null === (UU = yU) || void 0 === UU || null === (XU = UU.currentViewer) || void 0 === XU ? void 0 : XU.inPlayback)
    }
  },
  5312: (UU, XU, zU) => {
    zU.d(XU, {
      B: () => kU,
      D: () => AU,
      H: () => FU,
      L: () => dU,
      b: () => WU,
      c: () => BU,
      f: () => qU,
      h: () => wU,
      j: () => gU,
      m: () => RU,
      n: () => GU,
      r: () => ZU,
      t: () => LU,
      x: () => eU,
      y: () => CU
    });
    var cU = zU(5315);
    const yU = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let QU = yU;

    function AU(UU) {
      QU = null !== UU && void 0 !== UU ? UU : yU
    }

    function FU() {
      return QU
    }
    const oU = new Set,
      DU = new Set;
    let EU = -1;
    const YU = new Set,
      NU = new Set;
    let IU = 0,
      pU = 0;
    const aU = new Set,
      tU = new Set;

    function gU(UU) {
      return oU.add(UU), () => {
        oU.delete(UU)
      }
    }

    function kU(UU, XU) {
      for (const cU of oU) try {
        cU(UU)
      } catch (zU) {
        XU(zU)
      }
    }

    function GU(UU) {
      return DU.add(UU), () => {
        DU.delete(UU)
      }
    }

    function BU(UU, XU) {
      const zU = EU < 0 ? 0 : UU - EU;
      EU = UU;
      for (const yU of DU) try {
        yU(zU)
      } catch (cU) {
        XU(cU)
      }
    }

    function ZU(UU) {
      return YU.add(UU), () => {
        YU.delete(UU)
      }
    }

    function RU(UU) {
      return NU.add(UU), () => {
        NU.delete(UU)
      }
    }
    let PU = 0;

    function WU(UU) {
      PU += UU
    }

    function dU() {
      const UU = PU;
      return PU = 0, UU
    }

    function LU(UU) {
      return aU.add(UU), () => {
        aU.delete(UU)
      }
    }

    function eU(UU) {
      return tU.add(UU), () => {
        tU.delete(UU)
      }
    }

    function CU() {
      IU = 0, pU = 0, EU = -1
    }

    function wU(UU, XU) {
      if ("paced" === UU) return pU += XU, null;
      if ("drawn" !== UU && "skipped" !== UU) return null;
      const zU = XU + pU;
      return pU = 0, zU
    }

    function qU(UU, XU, zU, yU) {
      const QU = (0, cU.j)(XU),
        AU = UU > 0 ? performance.now() : 0;
      for (let cU = 0; cU < UU; cU++)
        for (const UU of aU) try {
          UU()
        } catch (FU) {
          yU(FU)
        }
      if (UU > 0 && WU(performance.now() - AU), null !== zU) {
        for (const UU of YU) try {
          UU(zU)
        } catch (FU) {
          yU(FU)
        }
        IU += zU
      }
      if ("drawn" === XU) {
        const UU = IU;
        IU = 0;
        for (const XU of NU) try {
          XU(UU)
        } catch (FU) {
          yU(FU)
        }
      }
      for (const cU of tU) try {
        cU(UU, QU)
      } catch (FU) {
        yU(FU)
      }
    }
  },
  41987: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => cU
    });
    const cU = {
      stop: () => cU,
      fade: () => cU,
      rate: () => cU,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => cU,
      setPannerAttr: () => cU,
      setPosition: () => cU
    }
  },
  5329: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => oU,
      g: () => QU,
      k: () => FU
    });
    var cU = zU(2580),
      yU = zU(5336);

    function QU(UU) {
      let {
        action: XU,
        flags: zU
      } = UU;
      return "mid-fire" === XU && 0 !== (zU & cU.c.AltLeftClick)
    }
    const AU = new Set;

    function FU(UU) {
      return AU.add(UU), () => {
        AU.delete(UU)
      }
    }

    function oU(UU) {
      const XU = yU.c[255 & UU];
      if (void 0 === XU) return;
      const zU = UU >>> 8 & 255,
        QU = {
          action: XU,
          down: 0 !== (zU & cU.c.Down),
          flags: zU,
          press: UU >>> 16
        };
      for (const cU of AU) cU(QU)
    }
  },
  5336: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => yU,
      g: () => QU,
      h: () => AU,
      j: () => cU,
      n: () => FU
    });
    const cU = {
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
      yU = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      QU = {
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
      AU = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      FU = [16]
  },
  42018: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => EU,
      c: () => DU,
      g: () => oU
    });
    var cU = zU(5326),
      yU = zU(2580),
      QU = zU(5342);
    let AU = !1,
      FU = !1;

    function oU(UU) {
      AU = !0;
      try {
        UU()
      } finally {
        AU = !1
      }
    }

    function DU(UU, XU) {
      if (AU) return !1;
      switch (UU) {
        case cU.K.MouseDown:
        case cU.K.MouseUp:
        case cU.K.TouchStart:
        case cU.K.TouchEnd:
        case cU.K.TouchCancel:
        case cU.K.TouchButton:
          return !0;
        case cU.K.KeyDown:
        case cU.K.KeyUp:
          return 0 === (XU & yU.g.Repeat) && !(0, QU.e)(document.activeElement);
        default:
          return !1
      }
    }

    function EU(UU) {
      FU || (FU = !0, queueMicrotask((() => {
        FU = !1, UU()
      })))
    }
  },
  5342: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => FU,
      e: () => AU,
      f: () => DU
    });
    var cU = zU(2580),
      yU = zU(2588);
    const QU = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function AU(UU) {
      return UU instanceof HTMLElement && (!!(UU.isContentEditable || UU instanceof HTMLTextAreaElement || UU instanceof HTMLSelectElement) || UU instanceof HTMLInputElement && !QU.has(UU.type))
    }

    function FU(UU) {
      let XU = null;
      const zU = zU => {
          const yU = AU(zU);
          yU !== XU && (XU = yU, UU(cU.j.UiCapture, cU.F.Keyboard, 0, 0, yU ? cU.F.Keyboard : 0))
        },
        yU = UU => {
          zU(UU.target)
        },
        QU = UU => {
          zU(UU.relatedTarget)
        },
        FU = () => {
          zU(document.activeElement)
        },
        oU = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", yU, oU), document.addEventListener("focusout", QU, oU), document.addEventListener("keydown", FU, oU), zU(document.activeElement), () => {
        document.removeEventListener("focusin", yU, oU), document.removeEventListener("focusout", QU, oU), document.removeEventListener("keydown", FU, oU)
      }
    }
    const oU = new Map;

    function DU(UU, XU) {
      var zU;
      let cU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      oU.set(cU, (null !== (zU = oU.get(cU)) && void 0 !== zU ? zU : 0) & ~UU | XU & UU);
      let QU = 0;
      for (const yU of oU.values()) QU |= yU;
      return (0, yU.J)(UU, QU & UU)
    }
  },
  42059: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => EU,
      h: () => oU,
      i: () => FU,
      k: () => DU
    });
    var cU = zU(2014);
    let yU = null,
      QU = 0;
    const AU = new Set;

    function FU() {
      return yU
    }

    function oU() {
      return QU
    }

    function DU(UU) {
      yU = UU, QU++, (0, cU.e)();
      for (const XU of AU) XU()
    }

    function EU(UU) {
      AU.add(UU)
    }
  },
  42098: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => cU
    });
    const cU = 2e3
  },
  41979: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => RU,
      d: () => NU,
      e: () => GU,
      f: () => ZU,
      g: () => BU,
      k: () => PU
    });
    var cU = zU(185),
      yU = zU(27),
      QU = zU(31),
      AU = zU(3203),
      FU = zU(1322),
      oU = zU(34798),
      DU = zU(301),
      EU = zU(97),
      YU = zU(180);

    function NU() {
      var UU;
      const XU = (0, AU.G)(),
        zU = function(UU, XU) {
          return {
            sampleCount: UU.antiAliasing ? 4 : 1,
            n: (0, AU.w)(UU.pixelScale, XU),
            pixelated: (0, AU.t)(UU.pixelSmoothing)
          }
        }(yU.e.get("clientEscMenuOptions"), XU);
      return zU.sampleCount > 1 && (0, oU.e)() && (zU.sampleCount = 1), zU.n = null !== (UU = (0, oU.l)()) && void 0 !== UU ? UU : zU.n, cU.j.includes((0, EU.getSoftwareRenderer)()) && (zU.sampleCount = 1, zU.n = Math.max(zU.n, (0, AU.w)(YU.u.pixelScale, XU))), zU
    }
    let IU = null,
      pU = null;
    const aU = new Set;
    let tU = null;

    function gU() {
      for (const UU of aU) UU()
    }

    function kU() {
      if (null === IU) {
        const UU = document.createElement("div");
        UU.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", UU.setAttribute("aria-hidden", "true"), document.body.append(UU), pU = UU, IU = new AU.b(UU, gU)
      }
      return IU
    }

    function GU(UU) {
      const XU = (0, AU.k)(),
        [zU, cU] = kU().size(XU);
      return (0, AU.e)(zU, cU, XU, UU.n)
    }

    function BU(UU) {
      var XU, zU, cU, yU;
      const QU = (0, AU.k)(),
        [oU, DU] = kU().size(QU);
      if (oU <= 0 || DU <= 0) return null;
      const EU = (0, AU.e)(oU, DU, QU, NU().n);
      return (0, AU.c)(UU, EU), UU.style.left = `${null!==(XU=null===(zU=tU)||void 0===zU?void 0:zU.rect.left)&&void 0!==XU?XU:0}px`, UU.style.top = `${null!==(cU=null===(yU=tU)||void 0===yU?void 0:yU.rect.top)&&void 0!==cU?cU:0}px`, (0, FU.L)(UU.style, tU), EU
    }

    function ZU(UU) {
      tU = UU, kU(), (0, FU.D)(pU.style, UU, ""), gU()
    }

    function RU(UU, XU) {
      UU.style.imageRendering = (0, AU.J)(XU.pixelated)
    }

    function PU(UU, XU) {
      const zU = (0, QU.n)("appManagerUpdated|clientEscMenuOptions", (() => {
          RU(UU, NU()), XU()
        })),
        cU = (0, oU.w)(XU),
        yU = (0, DU.o)(XU);
      return kU(), aU.add(XU), () => {
        zU(), cU(), yU(), aU.delete(XU)
      }
    }
  },
  42102: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => AU,
      i: () => QU,
      k: () => yU
    });
    let cU = null;

    function yU(UU) {
      cU = UU
    }

    function QU(UU) {
      cU === UU && (cU = null)
    }

    function AU() {
      var UU;
      null === (UU = cU) || void 0 === UU || UU()
    }
  },
  42053: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => yU,
      i: () => DU,
      l: () => QU,
      n: () => YU,
      r: () => EU,
      v: () => NU
    });
    var cU = zU(3176);
    class yU extends Error {
      constructor(UU, XU, zU) {
        super(`${"fetch"===UU?"fetching":"decoding"} ${XU} failed`, zU), this.stage = UU, this.source = XU, this.name = "ShellImageError"
      }
    }
    async function QU(UU) {
      let XU, zU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cU.Q,
        QU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      if ("string" === typeof UU) try {
        XU = await zU(UU)
      } catch (AU) {
        throw new yU("fetch", UU, {
          cause: AU
        })
      } else XU = UU;
      try {
        const UU = new Blob([XU.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(UU, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: QU
        })
      } catch (AU) {
        throw new yU("decode", "string" === typeof UU ? UU : `${XU.byteLength} bytes`, {
          cause: AU
        })
      }
    }
    let AU = null;
    const FU = new Map;
    let oU = 1;

    function DU(UU) {
      if (AU = UU, null !== UU) {
        for (const [XU, zU] of FU) UU.lcU(XU, zU);
        FU.clear()
      }
    }

    function EU(UU) {
      const XU = oU++;
      return AU ? AU.lcU(XU, UU) : FU.set(XU, UU), XU
    }
    async function YU(UU, XU, zU) {
      const cU = await QU(UU, XU, zU);
      return {
        id: EU(cU),
        width: cU.width,
        height: cU.height
      }
    }

    function NU(UU) {
      var XU;
      const zU = FU.get(UU);
      if (zU) return zU.close(), void FU.delete(UU);
      null === (XU = AU) || void 0 === XU || XU.xcU(UU)
    }
  },
  41990: (UU, XU, zU) => {
    function cU(UU, XU) {
      if (!Object.prototype.hasOwnProperty.call(UU, XU)) throw new TypeError("attempted to use private field on non-instance");
      return UU
    }
    zU.d(XU, {
      d: () => cU
    })
  },
  41999: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => yU
    });
    var cU = 0;

    function yU(UU) {
      return "__private_" + cU++ + "_" + UU
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);