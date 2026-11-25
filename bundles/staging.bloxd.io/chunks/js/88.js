export const id = 88;
export const ids = [88];
export const modules = {
  41263: (GG, bG, ZG) => {
    ZG.d(bG, {
      A: () => lG,
      C: () => cG,
      F: () => NG,
      G: () => PG,
      K: () => FG,
      O: () => jG,
      R: () => IG,
      U: () => RG,
      W: () => eG,
      _: () => aG,
      e: () => TG,
      i: () => AG,
      k: () => WG,
      o: () => HG,
      q: () => mG,
      s: () => CG,
      v: () => MG,
      y: () => vG
    });
    var wG = ZG(1343),
      SG = ZG(19),
      LG = ZG(1251),
      yG = ZG(2380),
      kG = ZG(4842),
      UG = ZG(4800);
    let YG, VG = !1,
      pG = !1,
      fG = !1,
      QG = !1;
    const KG = 1300,
      hG = 3e3;
    let dG = 0,
      JG = !1,
      rG = !1,
      zG = 0;
    const EG = 2;
    let oG = !1,
      XG = !1;
    const uG = new Set,
      iG = new Set;

    function CG() {
      return VG
    }

    function WG() {
      return rG
    }

    function mG() {
      return XG
    }

    function IG() {
      return (0, LG.A)() && !XG
    }

    function FG(GG) {
      let bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (GG !== XG) {
        XG = GG;
        for (const GG of [...iG]) GG(XG);
        bG && eG()
      }
    }

    function vG(GG) {
      return iG.add(GG), () => {
        iG.delete(GG)
      }
    }

    function aG() {
      (0, kG.j)(yG.t.Menu, (0, LG.A)() ? 0 : yG.t.Menu)
    }

    function cG() {
      rG = !1, zG = 0, aG(), eG()
    }

    function lG(GG) {
      return uG.add(GG), () => {
        uG.delete(GG)
      }
    }

    function jG(GG) {
      pG = !1, GG !== VG && (VG = GG, QG = !1, clearTimeout(YG), fG = !VG && oG, VG ? (JG = !1, rG = !1, zG = 0) : IG() && !oG && (rG = !0), oG = !1, VG && !IG() && DG(), OG(), fG && eG())
    }

    function PG(GG) {
      GG !== JG && (JG = GG, GG || eG())
    }

    function MG() {
      pG = !1, QG || !0 !== nG() || (QG = !0, clearTimeout(YG), YG = setTimeout(sG, KG))
    }

    function AG() {
      return (!pG || performance.now() - dG > hG) && (pG = (0, UG.I)().lockPointer(), dG = performance.now()), pG
    }

    function sG() {
      qG() && gG() && AG()
    }

    function qG() {
      return IG() && !VG && !JG && !(0, wG.k)()
    }

    function nG() {
      var GG;
      return "undefined" === typeof navigator || null === (GG = navigator.userActivation) || void 0 === GG ? void 0 : GG.isActive
    }

    function gG() {
      return fG && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== nG()
    }

    function eG() {
      IG() ? qG() && !rG && gG() && AG() : VG && !oG && DG()
    }

    function RG() {
      rG ? navigator.vendor.startsWith("Apple") ? tG() : zG = EG : eG()
    }

    function TG() {
      zG > 0 && 0 === --zG && tG()
    }

    function HG() {
      zG = 0
    }

    function tG() {
      qG() && !0 === nG() && AG()
    }

    function DG() {
      oG = !0, (0, UG.I)().unlockPointer()
    }

    function NG() {
      pG = !1, fG = !1, QG = !1, clearTimeout(YG), JG = !1, rG = !1, zG = 0, oG = !1;
      const GG = VG;
      VG = !1, GG && OG()
    }

    function OG() {
      for (const GG of [...uG]) GG(VG);
      SG.l.xh("pointerLockUpdate", VG)
    }
  },
  41056: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => fG,
      g: () => kG,
      k: () => pG,
      l: () => YG,
      m: () => yG,
      n: () => VG,
      q: () => UG
    });
    let wG = null,
      SG = null,
      LG = null;

    function yG(GG) {
      wG = GG
    }

    function kG() {
      return wG
    }

    function UG(GG) {
      SG = GG
    }

    function YG() {
      return SG
    }

    function VG(GG) {
      LG = GG
    }

    function pG() {
      return LG
    }

    function fG() {
      var GG, bG;
      return !0 === (null === (GG = SG) || void 0 === GG || null === (bG = GG.currentViewer) || void 0 === bG ? void 0 : bG.inPlayback)
    }
  },
  4800: (GG, bG, ZG) => {
    ZG.d(bG, {
      A: () => rG,
      E: () => yG,
      I: () => kG,
      K: () => CG,
      c: () => iG,
      g: () => EG,
      j: () => vG,
      k: () => FG,
      l: () => JG,
      n: () => XG,
      p: () => zG,
      r: () => oG,
      t: () => WG,
      u: () => mG,
      y: () => IG
    });
    var wG = ZG(4804);
    const SG = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let LG = SG;

    function yG(GG) {
      LG = null !== GG && void 0 !== GG ? GG : SG
    }

    function kG() {
      return LG
    }
    const UG = new Set,
      YG = new Set;
    let VG = -1;
    const pG = new Set,
      fG = new Set;
    let QG = 0,
      KG = 0;
    const hG = new Set,
      dG = new Set;

    function JG(GG) {
      return UG.add(GG), () => {
        UG.delete(GG)
      }
    }

    function rG(GG, bG) {
      for (const wG of UG) try {
        wG(GG)
      } catch (ZG) {
        bG(ZG)
      }
    }

    function zG(GG) {
      return YG.add(GG), () => {
        YG.delete(GG)
      }
    }

    function EG(GG, bG) {
      const ZG = VG < 0 ? 0 : GG - VG;
      VG = GG;
      for (const SG of YG) try {
        SG(ZG)
      } catch (wG) {
        bG(wG)
      }
    }

    function oG(GG) {
      return pG.add(GG), () => {
        pG.delete(GG)
      }
    }

    function XG(GG) {
      return fG.add(GG), () => {
        fG.delete(GG)
      }
    }
    let uG = 0;

    function iG(GG) {
      uG += GG
    }

    function CG() {
      const GG = uG;
      return uG = 0, GG
    }

    function WG(GG) {
      return hG.add(GG), () => {
        hG.delete(GG)
      }
    }

    function mG(GG) {
      return dG.add(GG), () => {
        dG.delete(GG)
      }
    }

    function IG() {
      QG = 0, KG = 0, VG = -1
    }

    function FG(GG, bG) {
      if ("paced" === GG) return KG += bG, null;
      if ("drawn" !== GG && "skipped" !== GG) return null;
      const ZG = bG + KG;
      return KG = 0, ZG
    }

    function vG(GG, bG, ZG, SG) {
      const LG = (0, wG.l)(bG),
        yG = GG > 0 ? performance.now() : 0;
      for (let wG = 0; wG < GG; wG++)
        for (const GG of hG) try {
          GG()
        } catch (kG) {
          SG(kG)
        }
      if (GG > 0 && iG(performance.now() - yG), null !== ZG) {
        for (const GG of pG) try {
          GG(ZG)
        } catch (kG) {
          SG(kG)
        }
        QG += ZG
      }
      if ("drawn" === bG) {
        const GG = QG;
        QG = 0;
        for (const bG of fG) try {
          bG(GG)
        } catch (kG) {
          SG(kG)
        }
      }
      for (const wG of dG) try {
        wG(GG, LG)
      } catch (kG) {
        SG(kG)
      }
    }
  },
  41278: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => wG
    });
    const wG = {
      stop: () => wG,
      fade: () => wG,
      rate: () => wG,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => wG,
      setPannerAttr: () => wG,
      setPosition: () => wG
    }
  },
  4827: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => UG,
      g: () => LG,
      j: () => kG
    });
    var wG = ZG(2380),
      SG = ZG(4836);

    function LG(GG) {
      let {
        action: bG,
        flags: ZG
      } = GG;
      return "mid-fire" === bG && 0 !== (ZG & wG.b.AltLeftClick)
    }
    const yG = new Set;

    function kG(GG) {
      return yG.add(GG), () => {
        yG.delete(GG)
      }
    }

    function UG(GG) {
      const bG = SG.e[255 & GG];
      if (void 0 === bG) return;
      const ZG = GG >>> 8 & 255,
        LG = {
          action: bG,
          down: 0 !== (ZG & wG.b.Down),
          flags: ZG,
          press: GG >>> 16
        };
      for (const wG of yG) wG(LG)
    }
  },
  4836: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => SG,
      h: () => LG,
      i: () => yG,
      k: () => wG,
      m: () => kG
    });
    const wG = {
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
      SG = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      LG = {
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
      yG = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      kG = [16]
  },
  41311: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => VG,
      f: () => YG,
      g: () => UG
    });
    var wG = ZG(4818),
      SG = ZG(2380),
      LG = ZG(4842);
    let yG = !1,
      kG = !1;

    function UG(GG) {
      yG = !0;
      try {
        GG()
      } finally {
        yG = !1
      }
    }

    function YG(GG, bG) {
      if (yG) return !1;
      switch (GG) {
        case wG.M.MouseDown:
        case wG.M.MouseUp:
        case wG.M.TouchStart:
        case wG.M.TouchEnd:
        case wG.M.TouchCancel:
        case wG.M.TouchButton:
          return !0;
        case wG.M.KeyDown:
        case wG.M.KeyUp:
          return 0 === (bG & SG.e.Repeat) && !(0, LG.f)(document.activeElement);
        default:
          return !1
      }
    }

    function VG(GG) {
      kG || (kG = !0, queueMicrotask((() => {
        kG = !1, GG()
      })))
    }
  },
  4842: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => kG,
      f: () => yG,
      j: () => YG
    });
    var wG = ZG(2380),
      SG = ZG(2388);
    const LG = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function yG(GG) {
      return GG instanceof HTMLElement && (!!(GG.isContentEditable || GG instanceof HTMLTextAreaElement || GG instanceof HTMLSelectElement) || GG instanceof HTMLInputElement && !LG.has(GG.type))
    }

    function kG(GG) {
      let bG = null;
      const ZG = ZG => {
          const SG = yG(ZG);
          SG !== bG && (bG = SG, GG(wG.g.UiCapture, wG.t.Keyboard, 0, 0, SG ? wG.t.Keyboard : 0))
        },
        SG = GG => {
          ZG(GG.target)
        },
        LG = GG => {
          ZG(GG.relatedTarget)
        },
        kG = () => {
          ZG(document.activeElement)
        },
        UG = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", SG, UG), document.addEventListener("focusout", LG, UG), document.addEventListener("keydown", kG, UG), ZG(document.activeElement), () => {
        document.removeEventListener("focusin", SG, UG), document.removeEventListener("focusout", LG, UG), document.removeEventListener("keydown", kG, UG)
      }
    }
    const UG = new Map;

    function YG(GG, bG) {
      var ZG;
      let wG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      UG.set(wG, (null !== (ZG = UG.get(wG)) && void 0 !== ZG ? ZG : 0) & ~GG | bG & GG);
      let LG = 0;
      for (const SG of UG.values()) LG |= SG;
      return (0, SG.G)(GG, LG & GG)
    }
  },
  41344: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => VG,
      g: () => UG,
      k: () => kG,
      n: () => YG
    });
    var wG = ZG(1910);
    let SG = null,
      LG = 0;
    const yG = new Set;

    function kG() {
      return SG
    }

    function UG() {
      return LG
    }

    function YG(GG) {
      SG = GG, LG++, (0, wG.d)();
      for (const bG of yG) bG()
    }

    function VG(GG) {
      yG.add(GG)
    }
  },
  41390: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => wG
    });
    const wG = 2e3
  },
  41271: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => XG,
      d: () => fG,
      f: () => zG,
      h: () => oG,
      k: () => EG,
      l: () => uG
    });
    var wG = ZG(161),
      SG = ZG(17),
      LG = ZG(19),
      yG = ZG(2889),
      kG = ZG(1260),
      UG = ZG(34414),
      YG = ZG(300),
      VG = ZG(80),
      pG = ZG(153);

    function fG() {
      var GG;
      const bG = (0, yG.G)(),
        ZG = function(GG, bG) {
          return {
            sampleCount: GG.antiAliasing ? 4 : 1,
            n: (0, yG.A)(GG.pixelScale, bG),
            pixelated: (0, yG.w)(GG.pixelSmoothing)
          }
        }(SG.e.get("clientEscMenuOptions"), bG);
      return ZG.sampleCount > 1 && (0, UG.b)() && (ZG.sampleCount = 1), ZG.n = null !== (GG = (0, UG.l)()) && void 0 !== GG ? GG : ZG.n, wG.f.includes((0, VG.getSoftwareRenderer)()) && (ZG.sampleCount = 1, ZG.n = Math.max(ZG.n, (0, yG.A)(pG.o.pixelScale, bG))), ZG
    }
    let QG = null,
      KG = null;
    const hG = new Set;
    let dG = null;

    function JG() {
      for (const GG of hG) GG()
    }

    function rG() {
      if (null === QG) {
        const GG = document.createElement("div");
        GG.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", GG.setAttribute("aria-hidden", "true"), document.body.append(GG), KG = GG, QG = new yG.d(GG, JG)
      }
      return QG
    }

    function zG(GG) {
      const bG = (0, yG.n)(),
        [ZG, wG] = rG().size(bG);
      return (0, yG.j)(ZG, wG, bG, GG.n)
    }

    function EG(GG) {
      var bG, ZG, wG, SG;
      const LG = (0, yG.n)(),
        [UG, YG] = rG().size(LG);
      if (UG <= 0 || YG <= 0) return null;
      const VG = (0, yG.j)(UG, YG, LG, fG().n);
      return (0, yG.h)(GG, VG), GG.style.left = `${null!==(bG=null===(ZG=dG)||void 0===ZG?void 0:ZG.rect.left)&&void 0!==bG?bG:0}px`, GG.style.top = `${null!==(wG=null===(SG=dG)||void 0===SG?void 0:SG.rect.top)&&void 0!==wG?wG:0}px`, (0, kG.P)(GG.style, dG), VG
    }

    function oG(GG) {
      dG = GG, rG(), (0, kG.G)(KG.style, GG, ""), JG()
    }

    function XG(GG, bG) {
      GG.style.imageRendering = (0, yG.J)(bG.pixelated)
    }

    function uG(GG, bG) {
      const ZG = (0, LG.p)("appManagerUpdated|clientEscMenuOptions", (() => {
          XG(GG, fG()), bG()
        })),
        wG = (0, UG.v)(bG),
        SG = (0, YG.k)(bG);
      return rG(), hG.add(bG), () => {
        ZG(), wG(), SG(), hG.delete(bG)
      }
    }
  },
  41392: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => yG,
      e: () => LG,
      h: () => SG
    });
    let wG = null;

    function SG(GG) {
      wG = GG
    }

    function LG(GG) {
      wG === GG && (wG = null)
    }

    function yG() {
      var GG;
      null === (GG = wG) || void 0 === GG || GG()
    }
  },
  41340: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => SG,
      f: () => YG,
      j: () => LG,
      n: () => pG,
      o: () => VG,
      p: () => fG
    });
    var wG = ZG(2872);
    class SG extends Error {
      constructor(GG, bG, ZG) {
        super(`${"fetch"===GG?"fetching":"decoding"} ${bG} failed`, ZG), this.stage = GG, this.source = bG, this.name = "ShellImageError"
      }
    }
    async function LG(GG) {
      let bG, ZG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wG.K,
        LG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      if ("string" === typeof GG) try {
        bG = await ZG(GG)
      } catch (yG) {
        throw new SG("fetch", GG, {
          cause: yG
        })
      } else bG = GG;
      try {
        const GG = new Blob([bG.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(GG, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: LG
        })
      } catch (yG) {
        throw new SG("decode", "string" === typeof GG ? GG : `${bG.byteLength} bytes`, {
          cause: yG
        })
      }
    }
    let yG = null;
    const kG = new Map;
    let UG = 1;

    function YG(GG) {
      if (yG = GG, null !== GG) {
        for (const [bG, ZG] of kG) GG.dwG(bG, ZG);
        kG.clear()
      }
    }

    function VG(GG) {
      const bG = UG++;
      return yG ? yG.dwG(bG, GG) : kG.set(bG, GG), bG
    }
    async function pG(GG, bG, ZG) {
      const wG = await LG(GG, bG, ZG);
      return {
        id: VG(wG),
        width: wG.width,
        height: wG.height
      }
    }

    function fG(GG) {
      var bG;
      const ZG = kG.get(GG);
      if (ZG) return ZG.close(), void kG.delete(GG);
      null === (bG = yG) || void 0 === bG || bG.JwG(GG)
    }
  },
  41284: (GG, bG, ZG) => {
    function wG(GG, bG) {
      if (!Object.prototype.hasOwnProperty.call(GG, bG)) throw new TypeError("attempted to use private field on non-instance");
      return GG
    }
    ZG.d(bG, {
      b: () => wG
    })
  },
  41292: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => SG
    });
    var wG = 0;

    function SG(GG) {
      return "__private_" + wG++ + "_" + GG
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);