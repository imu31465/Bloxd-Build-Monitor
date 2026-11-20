export const id = 85;
export const ids = [85];
export const modules = {
  40096: (UU, RU, gU) => {
    gU.d(RU, {
      A: () => VU,
      E: () => LU,
      I: () => vU,
      K: () => aU,
      M: () => XU,
      O: () => ZU,
      Q: () => iU,
      U: () => FU,
      W: () => BU,
      c: () => AU,
      g: () => HU,
      h: () => bU,
      j: () => zU,
      n: () => oU,
      q: () => nU,
      u: () => dU,
      w: () => YU,
      z: () => rU
    });
    var tU = gU(1362),
      pU = gU(24),
      EU = gU(1287),
      PU = gU(2233),
      TU = gU(4477),
      qU = gU(4443);
    let KU, cU = !1,
      GU = !1,
      jU = !1,
      uU = !1;
    const CU = 1300,
      hU = 3e3;
    let QU = 0,
      eU = !1,
      WU = !1,
      fU = 0;
    const xU = 2;
    let mU = !1,
      IU = !1;
    const JU = new Set,
      wU = new Set;

    function nU() {
      return cU
    }

    function bU() {
      return WU
    }

    function oU() {
      return IU
    }

    function ZU() {
      return (0, EU.r)() && !IU
    }

    function aU(UU) {
      let RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (UU !== IU) {
        IU = UU;
        for (const UU of [...wU]) UU(IU);
        RU && FU()
      }
    }

    function YU(UU) {
      return wU.add(UU), () => {
        wU.delete(UU)
      }
    }

    function BU() {
      (0, TU.f)(PU.z.Menu, (0, EU.r)() ? 0 : PU.z.Menu)
    }

    function VU() {
      WU = !1, fU = 0, BU(), FU()
    }

    function rU(UU) {
      return JU.add(UU), () => {
        JU.delete(UU)
      }
    }

    function XU(UU) {
      GU = !1, UU !== cU && (cU = UU, uU = !1, clearTimeout(KU), jU = !cU && mU, cU ? (eU = !1, WU = !1, fU = 0) : ZU() && !mU && (WU = !0), mU = !1, cU && !ZU() && DU(), NU(), jU && FU())
    }

    function vU(UU) {
      UU !== eU && (eU = UU, UU || FU())
    }

    function dU() {
      GU = !1, uU || !0 !== yU() || (uU = !0, clearTimeout(KU), KU = setTimeout(SU, CU))
    }

    function HU() {
      return (!GU || performance.now() - QU > hU) && (GU = (0, qU.J)().lockPointer(), QU = performance.now()), GU
    }

    function SU() {
      sU() && kU() && HU()
    }

    function sU() {
      return ZU() && !cU && !eU && !(0, tU.g)()
    }

    function yU() {
      var UU;
      return "undefined" === typeof navigator || null === (UU = navigator.userActivation) || void 0 === UU ? void 0 : UU.isActive
    }

    function kU() {
      return jU && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== yU()
    }

    function FU() {
      ZU() ? sU() && !WU && kU() && HU() : cU && !mU && DU()
    }

    function iU() {
      WU ? navigator.vendor.startsWith("Apple") ? MU() : fU = xU : FU()
    }

    function AU() {
      fU > 0 && 0 === --fU && MU()
    }

    function zU() {
      fU = 0
    }

    function MU() {
      sU() && !0 === yU() && HU()
    }

    function DU() {
      mU = !0, (0, qU.J)().unlockPointer()
    }

    function LU() {
      GU = !1, jU = !1, uU = !1, clearTimeout(KU), eU = !1, WU = !1, fU = 0, mU = !1;
      const UU = cU;
      cU = !1, UU && NU()
    }

    function NU() {
      for (const UU of [...JU]) UU(cU);
      pU.p.yh("pointerLockUpdate", cU)
    }
  },
  40067: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => jU,
      f: () => TU,
      h: () => GU,
      i: () => KU,
      k: () => PU,
      o: () => cU,
      p: () => qU
    });
    let tU = null,
      pU = null,
      EU = null;

    function PU(UU) {
      tU = UU
    }

    function TU() {
      return tU
    }

    function qU(UU) {
      pU = UU
    }

    function KU() {
      return pU
    }

    function cU(UU) {
      EU = UU
    }

    function GU() {
      return EU
    }

    function jU() {
      var UU, RU;
      return !0 === (null === (UU = pU) || void 0 === UU || null === (RU = UU.currentViewer) || void 0 === RU ? void 0 : RU.inPlayback)
    }
  },
  4443: (UU, RU, gU) => {
    gU.d(RU, {
      B: () => oU,
      D: () => ZU,
      F: () => WU,
      G: () => PU,
      J: () => TU,
      L: () => nU,
      c: () => wU,
      e: () => xU,
      i: () => YU,
      l: () => aU,
      n: () => eU,
      o: () => IU,
      s: () => fU,
      u: () => mU,
      x: () => bU
    });
    var tU = gU(4446);
    const pU = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let EU = pU;

    function PU(UU) {
      EU = null !== UU && void 0 !== UU ? UU : pU
    }

    function TU() {
      return EU
    }
    const qU = new Set,
      KU = new Set;
    let cU = -1;
    const GU = new Set,
      jU = new Set;
    let uU = 0,
      CU = 0;
    const hU = new Set,
      QU = new Set;

    function eU(UU) {
      return qU.add(UU), () => {
        qU.delete(UU)
      }
    }

    function WU(UU, RU) {
      for (const tU of qU) try {
        tU(UU)
      } catch (gU) {
        RU(gU)
      }
    }

    function fU(UU) {
      return KU.add(UU), () => {
        KU.delete(UU)
      }
    }

    function xU(UU, RU) {
      const gU = cU < 0 ? 0 : UU - cU;
      cU = UU;
      for (const pU of KU) try {
        pU(gU)
      } catch (tU) {
        RU(tU)
      }
    }

    function mU(UU) {
      return GU.add(UU), () => {
        GU.delete(UU)
      }
    }

    function IU(UU) {
      return jU.add(UU), () => {
        jU.delete(UU)
      }
    }
    let JU = 0;

    function wU(UU) {
      JU += UU
    }

    function nU() {
      const UU = JU;
      return JU = 0, UU
    }

    function bU(UU) {
      return hU.add(UU), () => {
        hU.delete(UU)
      }
    }

    function oU(UU) {
      return QU.add(UU), () => {
        QU.delete(UU)
      }
    }

    function ZU() {
      uU = 0, CU = 0, cU = -1
    }

    function aU(UU, RU) {
      if ("paced" === UU) return CU += RU, null;
      if ("drawn" !== UU && "skipped" !== UU) return null;
      const gU = RU + CU;
      return CU = 0, gU
    }

    function YU(UU, RU, gU, pU) {
      const EU = (0, tU.j)(RU),
        PU = UU > 0 ? performance.now() : 0;
      for (let tU = 0; tU < UU; tU++)
        for (const UU of hU) try {
          UU()
        } catch (TU) {
          pU(TU)
        }
      if (UU > 0 && wU(performance.now() - PU), null !== gU) {
        for (const UU of GU) try {
          UU(gU)
        } catch (TU) {
          pU(TU)
        }
        uU += gU
      }
      if ("drawn" === RU) {
        const UU = uU;
        uU = 0;
        for (const RU of jU) try {
          RU(UU)
        } catch (TU) {
          pU(TU)
        }
      }
      for (const tU of QU) try {
        tU(UU, EU)
      } catch (TU) {
        pU(TU)
      }
    }
  },
  40293: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => tU
    });
    const tU = {
      stop: () => tU,
      fade: () => tU,
      rate: () => tU,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => tU,
      setPannerAttr: () => tU,
      setPosition: () => tU
    }
  },
  4460: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => qU,
      e: () => EU,
      i: () => TU
    });
    var tU = gU(2233),
      pU = gU(4469);

    function EU(UU) {
      let {
        action: RU,
        flags: gU
      } = UU;
      return "mid-fire" === RU && 0 !== (gU & tU.b.AltLeftClick)
    }
    const PU = new Set;

    function TU(UU) {
      return PU.add(UU), () => {
        PU.delete(UU)
      }
    }

    function qU(UU) {
      const RU = pU.e[255 & UU];
      if (void 0 === RU) return;
      const gU = UU >>> 8 & 255,
        EU = {
          action: RU,
          down: 0 !== (gU & tU.b.Down),
          flags: gU,
          press: UU >>> 16
        };
      for (const tU of PU) tU(EU)
    }
  },
  4469: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => pU,
      g: () => EU,
      j: () => PU,
      n: () => tU,
      r: () => TU
    });
    const tU = {
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
      pU = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      EU = {
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
      PU = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      TU = [16]
  },
  40389: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => cU,
      f: () => KU,
      i: () => qU
    });
    var tU = gU(4456),
      pU = gU(2233),
      EU = gU(4477);
    let PU = !1,
      TU = !1;

    function qU(UU) {
      PU = !0;
      try {
        UU()
      } finally {
        PU = !1
      }
    }

    function KU(UU, RU) {
      if (PU) return !1;
      switch (UU) {
        case tU.B.MouseDown:
        case tU.B.MouseUp:
        case tU.B.TouchStart:
        case tU.B.TouchEnd:
        case tU.B.TouchCancel:
        case tU.B.TouchButton:
          return !0;
        case tU.B.KeyDown:
        case tU.B.KeyUp:
          return 0 === (RU & pU.d.Repeat) && !(0, EU.e)(document.activeElement);
        default:
          return !1
      }
    }

    function cU(UU) {
      TU || (TU = !0, queueMicrotask((() => {
        TU = !1, UU()
      })))
    }
  },
  4477: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => TU,
      e: () => PU,
      f: () => KU
    });
    var tU = gU(2233),
      pU = gU(2241);
    const EU = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function PU(UU) {
      return UU instanceof HTMLElement && (!!(UU.isContentEditable || UU instanceof HTMLTextAreaElement || UU instanceof HTMLSelectElement) || UU instanceof HTMLInputElement && !EU.has(UU.type))
    }

    function TU(UU) {
      let RU = null;
      const gU = gU => {
          const pU = PU(gU);
          pU !== RU && (RU = pU, UU(tU.h.UiCapture, tU.z.Keyboard, 0, 0, pU ? tU.z.Keyboard : 0))
        },
        pU = UU => {
          gU(UU.target)
        },
        EU = UU => {
          gU(UU.relatedTarget)
        },
        TU = () => {
          gU(document.activeElement)
        },
        qU = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", pU, qU), document.addEventListener("focusout", EU, qU), document.addEventListener("keydown", TU, qU), gU(document.activeElement), () => {
        document.removeEventListener("focusin", pU, qU), document.removeEventListener("focusout", EU, qU), document.removeEventListener("keydown", TU, qU)
      }
    }
    const qU = new Map;

    function KU(UU, RU) {
      var gU;
      let tU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      qU.set(tU, (null !== (gU = qU.get(tU)) && void 0 !== gU ? gU : 0) & ~UU | RU & UU);
      let EU = 0;
      for (const pU of qU.values()) EU |= pU;
      return (0, pU.H)(UU, EU & UU)
    }
  },
  40441: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => tU
    });
    const tU = 2e3
  },
  40291: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => fU,
      f: () => KU,
      i: () => QU,
      j: () => WU,
      m: () => eU,
      n: () => xU
    });
    var tU = gU(21),
      pU = gU(24),
      EU = gU(2581),
      PU = gU(1293),
      TU = gU(8910),
      qU = gU(2590);

    function KU() {
      var UU;
      const RU = (gU = tU.b.get("clientEscMenuOptions"), pU = (0, EU.v)(), {
        sampleCount: gU.antiAliasing ? 4 : 1,
        n: (0, EU.o)(gU.pixelScale, pU),
        pixelated: (0, EU.l)(gU.pixelSmoothing)
      });
      var gU, pU;
      return RU.sampleCount > 1 && (0, TU.b)() && (RU.sampleCount = 1), RU.n = null !== (UU = (0, TU.m)()) && void 0 !== UU ? UU : RU.n, RU
    }
    let cU = null,
      GU = null;
    const jU = new Set;
    let uU = null;

    function CU() {
      for (const UU of jU) UU()
    }

    function hU() {
      if (null === cU) {
        const UU = document.createElement("div");
        UU.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", UU.setAttribute("aria-hidden", "true"), document.body.append(UU), GU = UU, cU = new EU.c(UU, CU)
      }
      return cU
    }

    function QU(UU) {
      const RU = (0, EU.f)(),
        [gU, tU] = hU().size(RU);
      return (0, EU.e)(gU, tU, RU, UU.n)
    }

    function eU(UU) {
      var RU, gU, tU, pU;
      const TU = (0, EU.f)(),
        [qU, cU] = hU().size(TU);
      if (qU <= 0 || cU <= 0) return null;
      const GU = (0, EU.e)(qU, cU, TU, KU().n);
      return (0, EU.d)(UU, GU), UU.style.left = `${null!==(RU=null===(gU=uU)||void 0===gU?void 0:gU.rect.left)&&void 0!==RU?RU:0}px`, UU.style.top = `${null!==(tU=null===(pU=uU)||void 0===pU?void 0:pU.rect.top)&&void 0!==tU?tU:0}px`, (0, PU.P)(UU.style, uU), GU
    }

    function WU(UU) {
      uU = UU, hU(), (0, PU.I)(GU.style, UU, ""), CU()
    }

    function fU(UU, RU) {
      UU.style.imageRendering = (0, EU.w)(RU.pixelated)
    }

    function xU(UU, RU) {
      const gU = (0, pU.t)("appManagerUpdated|clientEscMenuOptions", (() => {
          fU(UU, KU()), RU()
        })),
        tU = (0, TU.v)(RU),
        EU = (0, qU.n)(RU);
      return hU(), jU.add(RU), () => {
        gU(), tU(), EU(), jU.delete(RU)
      }
    }
  },
  40444: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => PU,
      g: () => EU,
      j: () => pU
    });
    let tU = null;

    function pU(UU) {
      tU = UU
    }

    function EU(UU) {
      tU === UU && (tU = null)
    }

    function PU() {
      var UU;
      null === (UU = tU) || void 0 === UU || UU()
    }
  },
  40415: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => pU,
      c: () => KU,
      f: () => EU,
      g: () => GU,
      i: () => cU,
      l: () => jU
    });
    var tU = gU(3377);
    class pU extends Error {
      constructor(UU, RU, gU) {
        super(`${"fetch"===UU?"fetching":"decoding"} ${RU} failed`, gU), this.stage = UU, this.source = RU, this.name = "ShellImageError"
      }
    }
    async function EU(UU) {
      let RU, gU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tU.H,
        EU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      if ("string" === typeof UU) try {
        RU = await gU(UU)
      } catch (PU) {
        throw new pU("fetch", UU, {
          cause: PU
        })
      } else RU = UU;
      try {
        const UU = new Blob([RU.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(UU, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: EU
        })
      } catch (PU) {
        throw new pU("decode", "string" === typeof UU ? UU : `${RU.byteLength} bytes`, {
          cause: PU
        })
      }
    }
    let PU = null;
    const TU = new Map;
    let qU = 1;

    function KU(UU) {
      if (PU = UU, null !== UU) {
        for (const [RU, gU] of TU) UU.JgU(RU, gU);
        TU.clear()
      }
    }

    function cU(UU) {
      const RU = qU++;
      return PU ? PU.JgU(RU, UU) : TU.set(RU, UU), RU
    }
    async function GU(UU, RU, gU) {
      const tU = await EU(UU, RU, gU);
      return {
        id: cU(tU),
        width: tU.width,
        height: tU.height
      }
    }

    function jU(UU) {
      var RU;
      const gU = TU.get(UU);
      if (gU) return gU.close(), void TU.delete(UU);
      null === (RU = PU) || void 0 === RU || RU.wgU(UU)
    }
  },
  40308: (UU, RU, gU) => {
    function tU(UU, RU) {
      if (!Object.prototype.hasOwnProperty.call(UU, RU)) throw new TypeError("attempted to use private field on non-instance");
      return UU
    }
    gU.d(RU, {
      b: () => tU
    })
  },
  40312: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => pU
    });
    var tU = 0;

    function pU(UU) {
      return "__private_" + tU++ + "_" + UU
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);