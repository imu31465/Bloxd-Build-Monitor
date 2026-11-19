export const id = 85;
export const ids = [85];
export const modules = {
  39487: (TT, oT, IT) => {
    IT.d(oT, {
      B: () => NT,
      E: () => QT,
      H: () => CT,
      J: () => YT,
      M: () => fT,
      N: () => tT,
      P: () => sT,
      Q: () => JT,
      e: () => GT,
      f: () => HT,
      i: () => vT,
      k: () => pT,
      m: () => ET,
      q: () => uT,
      s: () => OT,
      u: () => jT,
      x: () => aT,
      z: () => UT
    });
    var iT = IT(1357),
      zT = IT(16),
      kT = IT(1253),
      WT = IT(2201),
      XT = IT(4299),
      BT = IT(4269);
    let FT, ST = !1,
      DT = !1,
      LT = !1,
      xT = !1;
    const cT = 1300,
      KT = 3e3;
    let MT = 0,
      rT = !1,
      AT = !1,
      gT = 0;
    const hT = 2;
    let wT = !1,
      mT = !1;
    const eT = new Set,
      RT = new Set;

    function uT() {
      return ST
    }

    function vT() {
      return AT
    }

    function ET() {
      return mT
    }

    function fT() {
      return (0, kT.q)() && !mT
    }

    function CT(TT) {
      let oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (TT !== mT) {
        mT = TT;
        for (const TT of [...RT]) TT(mT);
        oT && sT()
      }
    }

    function jT(TT) {
      return RT.add(TT), () => {
        RT.delete(TT)
      }
    }

    function JT() {
      (0, XT.g)(WT.A.Menu, (0, kT.q)() ? 0 : WT.A.Menu)
    }

    function UT() {
      AT = !1, gT = 0, JT(), sT()
    }

    function aT(TT) {
      return eT.add(TT), () => {
        eT.delete(TT)
      }
    }

    function YT(TT) {
      DT = !1, TT !== ST && (ST = TT, xT = !1, clearTimeout(FT), LT = !ST && wT, ST ? (rT = !1, AT = !1, gT = 0) : fT() && !wT && (AT = !0), wT = !1, ST && !fT() && yT(), PT(), LT && sT())
    }

    function QT(TT) {
      TT !== rT && (rT = TT, TT || sT())
    }

    function OT() {
      DT = !1, xT || !0 !== ZT() || (xT = !0, clearTimeout(FT), FT = setTimeout(nT, cT))
    }

    function HT() {
      return (!DT || performance.now() - MT > KT) && (DT = (0, BT.O)().lockPointer(), MT = performance.now()), DT
    }

    function nT() {
      qT() && lT() && HT()
    }

    function qT() {
      return fT() && !ST && !rT && !(0, iT.f)()
    }

    function ZT() {
      var TT;
      return "undefined" === typeof navigator || null === (TT = navigator.userActivation) || void 0 === TT ? void 0 : TT.isActive
    }

    function lT() {
      return LT && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== ZT()
    }

    function sT() {
      fT() ? qT() && !AT && lT() && HT() : ST && !wT && yT()
    }

    function tT() {
      AT ? navigator.vendor.startsWith("Apple") ? bT() : gT = hT : sT()
    }

    function GT() {
      gT > 0 && 0 === --gT && bT()
    }

    function pT() {
      gT = 0
    }

    function bT() {
      qT() && !0 === ZT() && HT()
    }

    function yT() {
      wT = !0, (0, BT.O)().unlockPointer()
    }

    function NT() {
      DT = !1, LT = !1, xT = !1, clearTimeout(FT), rT = !1, AT = !1, gT = 0, wT = !1;
      const TT = ST;
      ST = !1, TT && PT()
    }

    function PT() {
      for (const TT of [...eT]) TT(ST);
      zT.h.XM("pointerLockUpdate", ST)
    }
  },
  39465: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => LT,
      f: () => XT,
      i: () => DT,
      j: () => FT,
      k: () => WT,
      o: () => ST,
      p: () => BT
    });
    let iT = null,
      zT = null,
      kT = null;

    function WT(TT) {
      iT = TT
    }

    function XT() {
      return iT
    }

    function BT(TT) {
      zT = TT
    }

    function FT() {
      return zT
    }

    function ST(TT) {
      kT = TT
    }

    function DT() {
      return kT
    }

    function LT() {
      var TT, oT;
      return !0 === (null === (TT = zT) || void 0 === TT || null === (oT = TT.currentViewer) || void 0 === oT ? void 0 : oT.inPlayback)
    }
  },
  4269: (TT, oT, IT) => {
    IT.d(oT, {
      C: () => ET,
      G: () => fT,
      J: () => AT,
      M: () => WT,
      O: () => XT,
      S: () => uT,
      c: () => RT,
      e: () => hT,
      i: () => jT,
      m: () => CT,
      o: () => rT,
      q: () => mT,
      s: () => gT,
      u: () => wT,
      y: () => vT
    });
    var iT = IT(4274);
    const zT = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let kT = zT;

    function WT(TT) {
      kT = null !== TT && void 0 !== TT ? TT : zT
    }

    function XT() {
      return kT
    }
    const BT = new Set,
      FT = new Set;
    let ST = -1;
    const DT = new Set,
      LT = new Set;
    let xT = 0,
      cT = 0;
    const KT = new Set,
      MT = new Set;

    function rT(TT) {
      return BT.add(TT), () => {
        BT.delete(TT)
      }
    }

    function AT(TT, oT) {
      for (const iT of BT) try {
        iT(TT)
      } catch (IT) {
        oT(IT)
      }
    }

    function gT(TT) {
      return FT.add(TT), () => {
        FT.delete(TT)
      }
    }

    function hT(TT, oT) {
      const IT = ST < 0 ? 0 : TT - ST;
      ST = TT;
      for (const zT of FT) try {
        zT(IT)
      } catch (iT) {
        oT(iT)
      }
    }

    function wT(TT) {
      return DT.add(TT), () => {
        DT.delete(TT)
      }
    }

    function mT(TT) {
      return LT.add(TT), () => {
        LT.delete(TT)
      }
    }
    let eT = 0;

    function RT(TT) {
      eT += TT
    }

    function uT() {
      const TT = eT;
      return eT = 0, TT
    }

    function vT(TT) {
      return KT.add(TT), () => {
        KT.delete(TT)
      }
    }

    function ET(TT) {
      return MT.add(TT), () => {
        MT.delete(TT)
      }
    }

    function fT() {
      xT = 0, cT = 0, ST = -1
    }

    function CT(TT, oT) {
      if ("paced" === TT) return cT += oT, null;
      if ("drawn" !== TT && "skipped" !== TT) return null;
      const IT = oT + cT;
      return cT = 0, IT
    }

    function jT(TT, oT, IT, zT) {
      const kT = (0, iT.j)(oT),
        WT = TT > 0 ? performance.now() : 0;
      for (let iT = 0; iT < TT; iT++)
        for (const TT of KT) try {
          TT()
        } catch (XT) {
          zT(XT)
        }
      if (TT > 0 && RT(performance.now() - WT), null !== IT) {
        for (const TT of DT) try {
          TT(IT)
        } catch (XT) {
          zT(XT)
        }
        xT += IT
      }
      if ("drawn" === oT) {
        const TT = xT;
        xT = 0;
        for (const oT of LT) try {
          oT(TT)
        } catch (XT) {
          zT(XT)
        }
      }
      for (const iT of MT) try {
        iT(TT, kT)
      } catch (XT) {
        zT(XT)
      }
    }
  },
  39703: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => iT
    });
    const iT = {
      stop: () => iT,
      fade: () => iT,
      rate: () => iT,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => iT,
      setPannerAttr: () => iT,
      setPosition: () => iT
    }
  },
  4292: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => BT,
      e: () => kT,
      f: () => XT
    });
    var iT = IT(2201),
      zT = IT(4295);

    function kT(TT) {
      let {
        action: oT,
        flags: IT
      } = TT;
      return "mid-fire" === oT && 0 !== (IT & iT.d.AltLeftClick)
    }
    const WT = new Set;

    function XT(TT) {
      return WT.add(TT), () => {
        WT.delete(TT)
      }
    }

    function BT(TT) {
      const oT = zT.d[255 & TT];
      if (void 0 === oT) return;
      const IT = TT >>> 8 & 255,
        kT = {
          action: oT,
          down: 0 !== (IT & iT.d.Down),
          flags: IT,
          press: TT >>> 16
        };
      for (const iT of WT) iT(kT)
    }
  },
  4295: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => zT,
      e: () => kT,
      h: () => WT,
      i: () => iT,
      j: () => XT
    });
    const iT = {
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
      kT = {
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
      WT = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      XT = [16]
  },
  39790: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => ST,
      f: () => FT,
      h: () => BT
    });
    var iT = IT(4285),
      zT = IT(2201),
      kT = IT(4299);
    let WT = !1,
      XT = !1;

    function BT(TT) {
      WT = !0;
      try {
        TT()
      } finally {
        WT = !1
      }
    }

    function FT(TT, oT) {
      if (WT) return !1;
      switch (TT) {
        case iT.C.MouseDown:
        case iT.C.MouseUp:
        case iT.C.TouchStart:
        case iT.C.TouchEnd:
        case iT.C.TouchCancel:
        case iT.C.TouchButton:
          return !0;
        case iT.C.KeyDown:
        case iT.C.KeyUp:
          return 0 === (oT & zT.f.Repeat) && !(0, kT.f)(document.activeElement);
        default:
          return !1
      }
    }

    function ST(TT) {
      XT || (XT = !0, queueMicrotask((() => {
        XT = !1, TT()
      })))
    }
  },
  4299: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => XT,
      f: () => WT,
      g: () => FT
    });
    var iT = IT(2201),
      zT = IT(2204);
    const kT = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function WT(TT) {
      return TT instanceof HTMLElement && (!!(TT.isContentEditable || TT instanceof HTMLTextAreaElement || TT instanceof HTMLSelectElement) || TT instanceof HTMLInputElement && !kT.has(TT.type))
    }

    function XT(TT) {
      let oT = null;
      const IT = IT => {
          const zT = WT(IT);
          zT !== oT && (oT = zT, TT(iT.j.UiCapture, iT.A.Keyboard, 0, 0, zT ? iT.A.Keyboard : 0))
        },
        zT = TT => {
          IT(TT.target)
        },
        kT = TT => {
          IT(TT.relatedTarget)
        },
        XT = () => {
          IT(document.activeElement)
        },
        BT = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", zT, BT), document.addEventListener("focusout", kT, BT), document.addEventListener("keydown", XT, BT), IT(document.activeElement), () => {
        document.removeEventListener("focusin", zT, BT), document.removeEventListener("focusout", kT, BT), document.removeEventListener("keydown", XT, BT)
      }
    }
    const BT = new Map;

    function FT(TT, oT) {
      var IT;
      let iT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      BT.set(iT, (null !== (IT = BT.get(iT)) && void 0 !== IT ? IT : 0) & ~TT | oT & TT);
      let kT = 0;
      for (const zT of BT.values()) kT |= zT;
      return (0, zT.D)(TT, kT & TT)
    }
  },
  39834: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => iT
    });
    const iT = 2e3
  },
  39697: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => gT,
      g: () => FT,
      h: () => MT,
      i: () => AT,
      m: () => rT,
      o: () => hT
    });
    var iT = IT(12),
      zT = IT(16),
      kT = IT(2494),
      WT = IT(1266),
      XT = IT(8674),
      BT = IT(2502);

    function FT() {
      var TT;
      const oT = (IT = iT.c.get("clientEscMenuOptions"), zT = (0, kT.H)(), {
        sampleCount: IT.antiAliasing ? 4 : 1,
        n: (0, kT.x)(IT.pixelScale, zT),
        pixelated: (0, kT.t)(IT.pixelSmoothing)
      });
      var IT, zT;
      return oT.sampleCount > 1 && (0, XT.d)() && (oT.sampleCount = 1), oT.n = null !== (TT = (0, XT.p)()) && void 0 !== TT ? TT : oT.n, oT
    }
    let ST = null,
      DT = null;
    const LT = new Set;
    let xT = null;

    function cT() {
      for (const TT of LT) TT()
    }

    function KT() {
      if (null === ST) {
        const TT = document.createElement("div");
        TT.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", TT.setAttribute("aria-hidden", "true"), document.body.append(TT), DT = TT, ST = new kT.e(TT, cT)
      }
      return ST
    }

    function MT(TT) {
      const oT = (0, kT.n)(),
        [IT, iT] = KT().size(oT);
      return (0, kT.k)(IT, iT, oT, TT.n)
    }

    function rT(TT) {
      var oT, IT, iT, zT;
      const XT = (0, kT.n)(),
        [BT, ST] = KT().size(XT);
      if (BT <= 0 || ST <= 0) return null;
      const DT = (0, kT.k)(BT, ST, XT, FT().n);
      return (0, kT.i)(TT, DT), TT.style.left = `${null!==(oT=null===(IT=xT)||void 0===IT?void 0:IT.rect.left)&&void 0!==oT?oT:0}px`, TT.style.top = `${null!==(iT=null===(zT=xT)||void 0===zT?void 0:zT.rect.top)&&void 0!==iT?iT:0}px`, (0, WT.J)(TT.style, xT), DT
    }

    function AT(TT) {
      xT = TT, KT(), (0, WT.C)(DT.style, TT, ""), cT()
    }

    function gT(TT, oT) {
      TT.style.imageRendering = (0, kT.I)(oT.pixelated)
    }

    function hT(TT, oT) {
      const IT = (0, zT.k)("appManagerUpdated|clientEscMenuOptions", (() => {
          gT(TT, FT()), oT()
        })),
        iT = (0, XT.z)(oT),
        kT = (0, BT.o)(oT);
      return KT(), LT.add(oT), () => {
        IT(), iT(), kT(), LT.delete(oT)
      }
    }
  },
  39839: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => WT,
      e: () => kT,
      i: () => zT
    });
    let iT = null;

    function zT(TT) {
      iT = TT
    }

    function kT(TT) {
      iT === TT && (iT = null)
    }

    function WT() {
      var TT;
      null === (TT = iT) || void 0 === TT || TT()
    }
  },
  39807: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => zT,
      c: () => FT,
      e: () => kT,
      f: () => DT,
      h: () => ST,
      k: () => LT
    });
    var iT = IT(3280);
    class zT extends Error {
      constructor(TT, oT, IT) {
        super(`${"fetch"===TT?"fetching":"decoding"} ${oT} failed`, IT), this.stage = TT, this.source = oT, this.name = "ShellImageError"
      }
    }
    async function kT(TT) {
      let oT, IT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : iT.K,
        kT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      if ("string" === typeof TT) try {
        oT = await IT(TT)
      } catch (WT) {
        throw new zT("fetch", TT, {
          cause: WT
        })
      } else oT = TT;
      try {
        const TT = new Blob([oT.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(TT, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: kT
        })
      } catch (WT) {
        throw new zT("decode", "string" === typeof TT ? TT : `${oT.byteLength} bytes`, {
          cause: WT
        })
      }
    }
    let WT = null;
    const XT = new Map;
    let BT = 1;

    function FT(TT) {
      if (WT = TT, null !== TT) {
        for (const [oT, IT] of XT) TT.CIT(oT, IT);
        XT.clear()
      }
    }

    function ST(TT) {
      const oT = BT++;
      return WT ? WT.CIT(oT, TT) : XT.set(oT, TT), oT
    }
    async function DT(TT, oT, IT) {
      const iT = await kT(TT, oT, IT);
      return {
        id: ST(iT),
        width: iT.width,
        height: iT.height
      }
    }

    function LT(TT) {
      var oT;
      const IT = XT.get(TT);
      if (IT) return IT.close(), void XT.delete(TT);
      null === (oT = WT) || void 0 === oT || oT.jIT(TT)
    }
  },
  39726: (TT, oT, IT) => {
    function iT(TT, oT) {
      if (!Object.prototype.hasOwnProperty.call(TT, oT)) throw new TypeError("attempted to use private field on non-instance");
      return TT
    }
    IT.d(oT, {
      c: () => iT
    })
  },
  39735: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => zT
    });
    var iT = 0;

    function zT(TT) {
      return "__private_" + iT++ + "_" + TT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);