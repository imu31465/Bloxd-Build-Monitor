export const id = 86;
export const ids = [86];
export const modules = {
  40145: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      C: () => zQ,
      E: () => rQ,
      F: () => KQ,
      J: () => sQ,
      K: () => JQ,
      N: () => hQ,
      Q: () => UQ,
      d: () => EQ,
      e: () => jQ,
      f: () => RQ,
      i: () => nQ,
      k: () => OQ,
      o: () => WQ,
      r: () => lQ,
      v: () => IQ,
      x: () => TQ,
      y: () => NQ,
      z: () => ZQ
    });
    var LQ = wQ(1395),
      qQ = wQ(22),
      oQ = wQ(1302),
      DQ = wQ(2313),
      kQ = wQ(4657),
      vQ = wQ(4621);
    let mQ, uQ = !1,
      HQ = !1,
      bQ = !1,
      YQ = !1;
    const xQ = 1300,
      AQ = 3e3;
    let tQ = 0,
      eQ = !1,
      MQ = !1,
      GQ = 0;
    const pQ = 2;
    let cQ = !1,
      CQ = !1;
    const SQ = new Set,
      iQ = new Set;

    function WQ() {
      return uQ
    }

    function RQ() {
      return MQ
    }

    function OQ() {
      return CQ
    }

    function sQ() {
      return (0, oQ.p)() && !CQ
    }

    function rQ(QQ) {
      let FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (QQ !== CQ) {
        CQ = QQ;
        for (const QQ of [...iQ]) QQ(CQ);
        FQ && hQ()
      }
    }

    function IQ(QQ) {
      return iQ.add(QQ), () => {
        iQ.delete(QQ)
      }
    }

    function UQ() {
      (0, kQ.i)(DQ.w.Menu, (0, oQ.p)() ? 0 : DQ.w.Menu)
    }

    function NQ() {
      MQ = !1, GQ = 0, UQ(), hQ()
    }

    function TQ(QQ) {
      return SQ.add(QQ), () => {
        SQ.delete(QQ)
      }
    }

    function KQ(QQ) {
      HQ = !1, QQ !== uQ && (uQ = QQ, YQ = !1, clearTimeout(mQ), bQ = !uQ && cQ, uQ ? (eQ = !1, MQ = !1, GQ = 0) : sQ() && !cQ && (MQ = !0), cQ = !1, uQ && !sQ() && PQ(), yQ(), bQ && hQ())
    }

    function zQ(QQ) {
      QQ !== eQ && (eQ = QQ, QQ || hQ())
    }

    function lQ() {
      HQ = !1, YQ || !0 !== fQ() || (YQ = !0, clearTimeout(mQ), mQ = setTimeout(aQ, xQ))
    }

    function jQ() {
      return (!HQ || performance.now() - tQ > AQ) && (HQ = (0, vQ.H)().lockPointer(), tQ = performance.now()), HQ
    }

    function aQ() {
      XQ() && VQ() && jQ()
    }

    function XQ() {
      return sQ() && !uQ && !eQ && !(0, LQ.d)()
    }

    function fQ() {
      var QQ;
      return "undefined" === typeof navigator || null === (QQ = navigator.userActivation) || void 0 === QQ ? void 0 : QQ.isActive
    }

    function VQ() {
      return bQ && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== fQ()
    }

    function hQ() {
      sQ() ? XQ() && !MQ && VQ() && jQ() : uQ && !cQ && PQ()
    }

    function JQ() {
      MQ ? navigator.vendor.startsWith("Apple") ? gQ() : GQ = pQ : hQ()
    }

    function EQ() {
      GQ > 0 && 0 === --GQ && gQ()
    }

    function nQ() {
      GQ = 0
    }

    function gQ() {
      XQ() && !0 === fQ() && jQ()
    }

    function PQ() {
      cQ = !0, (0, vQ.H)().unlockPointer()
    }

    function ZQ() {
      HQ = !1, bQ = !1, YQ = !1, clearTimeout(mQ), eQ = !1, MQ = !1, GQ = 0, cQ = !1;
      const QQ = uQ;
      uQ = !1, QQ && yQ()
    }

    function yQ() {
      for (const QQ of [...SQ]) QQ(uQ);
      qQ.l.GA("pointerLockUpdate", uQ)
    }
  },
  40108: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => bQ,
      f: () => kQ,
      h: () => HQ,
      k: () => mQ,
      l: () => DQ,
      m: () => uQ,
      q: () => vQ
    });
    let LQ = null,
      qQ = null,
      oQ = null;

    function DQ(QQ) {
      LQ = QQ
    }

    function kQ() {
      return LQ
    }

    function vQ(QQ) {
      qQ = QQ
    }

    function mQ() {
      return qQ
    }

    function uQ(QQ) {
      oQ = QQ
    }

    function HQ() {
      return oQ
    }

    function bQ() {
      var QQ, FQ;
      return !0 === (null === (QQ = qQ) || void 0 === QQ || null === (FQ = QQ.currentViewer) || void 0 === FQ ? void 0 : FQ.inPlayback)
    }
  },
  4621: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      A: () => sQ,
      B: () => MQ,
      F: () => DQ,
      H: () => kQ,
      I: () => WQ,
      d: () => iQ,
      e: () => pQ,
      f: () => IQ,
      g: () => rQ,
      k: () => eQ,
      n: () => CQ,
      r: () => GQ,
      v: () => cQ,
      x: () => RQ,
      y: () => OQ
    });
    var LQ = wQ(4626);
    const qQ = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let oQ = qQ;

    function DQ(QQ) {
      oQ = null !== QQ && void 0 !== QQ ? QQ : qQ
    }

    function kQ() {
      return oQ
    }
    const vQ = new Set,
      mQ = new Set;
    let uQ = -1;
    const HQ = new Set,
      bQ = new Set;
    let YQ = 0,
      xQ = 0;
    const AQ = new Set,
      tQ = new Set;

    function eQ(QQ) {
      return vQ.add(QQ), () => {
        vQ.delete(QQ)
      }
    }

    function MQ(QQ, FQ) {
      for (const LQ of vQ) try {
        LQ(QQ)
      } catch (wQ) {
        FQ(wQ)
      }
    }

    function GQ(QQ) {
      return mQ.add(QQ), () => {
        mQ.delete(QQ)
      }
    }

    function pQ(QQ, FQ) {
      const wQ = uQ < 0 ? 0 : QQ - uQ;
      uQ = QQ;
      for (const qQ of mQ) try {
        qQ(wQ)
      } catch (LQ) {
        FQ(LQ)
      }
    }

    function cQ(QQ) {
      return HQ.add(QQ), () => {
        HQ.delete(QQ)
      }
    }

    function CQ(QQ) {
      return bQ.add(QQ), () => {
        bQ.delete(QQ)
      }
    }
    let SQ = 0;

    function iQ(QQ) {
      SQ += QQ
    }

    function WQ() {
      const QQ = SQ;
      return SQ = 0, QQ
    }

    function RQ(QQ) {
      return AQ.add(QQ), () => {
        AQ.delete(QQ)
      }
    }

    function OQ(QQ) {
      return tQ.add(QQ), () => {
        tQ.delete(QQ)
      }
    }

    function sQ() {
      YQ = 0, xQ = 0, uQ = -1
    }

    function rQ(QQ, FQ) {
      if ("paced" === QQ) return xQ += FQ, null;
      if ("drawn" !== QQ && "skipped" !== QQ) return null;
      const wQ = FQ + xQ;
      return xQ = 0, wQ
    }

    function IQ(QQ, FQ, wQ, qQ) {
      const oQ = (0, LQ.h)(FQ),
        DQ = QQ > 0 ? performance.now() : 0;
      for (let LQ = 0; LQ < QQ; LQ++)
        for (const QQ of AQ) try {
          QQ()
        } catch (kQ) {
          qQ(kQ)
        }
      if (QQ > 0 && iQ(performance.now() - DQ), null !== wQ) {
        for (const QQ of HQ) try {
          QQ(wQ)
        } catch (kQ) {
          qQ(kQ)
        }
        YQ += wQ
      }
      if ("drawn" === FQ) {
        const QQ = YQ;
        YQ = 0;
        for (const FQ of bQ) try {
          FQ(QQ)
        } catch (kQ) {
          qQ(kQ)
        }
      }
      for (const LQ of tQ) try {
        LQ(QQ, oQ)
      } catch (kQ) {
        qQ(kQ)
      }
    }
  },
  40335: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => LQ
    });
    const LQ = {
      stop: () => LQ,
      fade: () => LQ,
      rate: () => LQ,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => LQ,
      setPannerAttr: () => LQ,
      setPosition: () => LQ
    }
  },
  4642: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => vQ,
      g: () => oQ,
      j: () => kQ
    });
    var LQ = wQ(2313),
      qQ = wQ(4651);

    function oQ(QQ) {
      let {
        action: FQ,
        flags: wQ
      } = QQ;
      return "mid-fire" === FQ && 0 !== (wQ & LQ.c.AltLeftClick)
    }
    const DQ = new Set;

    function kQ(QQ) {
      return DQ.add(QQ), () => {
        DQ.delete(QQ)
      }
    }

    function vQ(QQ) {
      const FQ = qQ.b[255 & QQ];
      if (void 0 === FQ) return;
      const wQ = QQ >>> 8 & 255,
        oQ = {
          action: FQ,
          down: 0 !== (wQ & LQ.c.Down),
          flags: wQ,
          press: QQ >>> 16
        };
      for (const LQ of DQ) LQ(oQ)
    }
  },
  4651: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => qQ,
      c: () => oQ,
      d: () => DQ,
      f: () => LQ,
      g: () => kQ
    });
    const LQ = {
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
      qQ = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      oQ = {
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
      DQ = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      kQ = [16]
  },
  40418: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => uQ,
      g: () => mQ,
      i: () => vQ
    });
    var LQ = wQ(4638),
      qQ = wQ(2313),
      oQ = wQ(4657);
    let DQ = !1,
      kQ = !1;

    function vQ(QQ) {
      DQ = !0;
      try {
        QQ()
      } finally {
        DQ = !1
      }
    }

    function mQ(QQ, FQ) {
      if (DQ) return !1;
      switch (QQ) {
        case LQ.I.MouseDown:
        case LQ.I.MouseUp:
        case LQ.I.TouchStart:
        case LQ.I.TouchEnd:
        case LQ.I.TouchCancel:
        case LQ.I.TouchButton:
          return !0;
        case LQ.I.KeyDown:
        case LQ.I.KeyUp:
          return 0 === (FQ & qQ.g.Repeat) && !(0, oQ.g)(document.activeElement);
        default:
          return !1
      }
    }

    function uQ(QQ) {
      kQ || (kQ = !0, queueMicrotask((() => {
        kQ = !1, QQ()
      })))
    }
  },
  4657: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => kQ,
      g: () => DQ,
      i: () => mQ
    });
    var LQ = wQ(2313),
      qQ = wQ(2320);
    const oQ = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function DQ(QQ) {
      return QQ instanceof HTMLElement && (!!(QQ.isContentEditable || QQ instanceof HTMLTextAreaElement || QQ instanceof HTMLSelectElement) || QQ instanceof HTMLInputElement && !oQ.has(QQ.type))
    }

    function kQ(QQ) {
      let FQ = null;
      const wQ = wQ => {
          const qQ = DQ(wQ);
          qQ !== FQ && (FQ = qQ, QQ(LQ.i.UiCapture, LQ.w.Keyboard, 0, 0, qQ ? LQ.w.Keyboard : 0))
        },
        qQ = QQ => {
          wQ(QQ.target)
        },
        oQ = QQ => {
          wQ(QQ.relatedTarget)
        },
        kQ = () => {
          wQ(document.activeElement)
        },
        vQ = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", qQ, vQ), document.addEventListener("focusout", oQ, vQ), document.addEventListener("keydown", kQ, vQ), wQ(document.activeElement), () => {
        document.removeEventListener("focusin", qQ, vQ), document.removeEventListener("focusout", oQ, vQ), document.removeEventListener("keydown", kQ, vQ)
      }
    }
    const vQ = new Map;

    function mQ(QQ, FQ) {
      var wQ;
      let LQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      vQ.set(LQ, (null !== (wQ = vQ.get(LQ)) && void 0 !== wQ ? wQ : 0) & ~QQ | FQ & QQ);
      let oQ = 0;
      for (const qQ of vQ.values()) oQ |= qQ;
      return (0, qQ.A)(QQ, oQ & QQ)
    }
  },
  40175: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => uQ,
      c: () => vQ,
      f: () => kQ,
      j: () => mQ
    });
    var LQ = wQ(1904);
    let qQ = null,
      oQ = 0;
    const DQ = new Set;

    function kQ() {
      return qQ
    }

    function vQ() {
      return oQ
    }

    function mQ(QQ) {
      qQ = QQ, oQ++, (0, LQ.b)();
      for (const FQ of DQ) FQ()
    }

    function uQ(QQ) {
      DQ.add(QQ)
    }
  },
  40461: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => LQ
    });
    const LQ = 2e3
  },
  40332: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => GQ,
      f: () => mQ,
      j: () => tQ,
      k: () => MQ,
      l: () => eQ,
      o: () => pQ
    });
    var LQ = wQ(17),
      qQ = wQ(22),
      oQ = wQ(2706),
      DQ = wQ(1314),
      kQ = wQ(9013),
      vQ = wQ(2712);

    function mQ() {
      var QQ;
      const FQ = (wQ = LQ.c.get("clientEscMenuOptions"), qQ = (0, oQ.C)(), {
        sampleCount: wQ.antiAliasing ? 4 : 1,
        n: (0, oQ.s)(wQ.pixelScale, qQ),
        pixelated: (0, oQ.o)(wQ.pixelSmoothing)
      });
      var wQ, qQ;
      return FQ.sampleCount > 1 && (0, kQ.c)() && (FQ.sampleCount = 1), FQ.n = null !== (QQ = (0, kQ.h)()) && void 0 !== QQ ? QQ : FQ.n, FQ
    }
    let uQ = null,
      HQ = null;
    const bQ = new Set;
    let YQ = null;

    function xQ() {
      for (const QQ of bQ) QQ()
    }

    function AQ() {
      if (null === uQ) {
        const QQ = document.createElement("div");
        QQ.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", QQ.setAttribute("aria-hidden", "true"), document.body.append(QQ), HQ = QQ, uQ = new oQ.b(QQ, xQ)
      }
      return uQ
    }

    function tQ(QQ) {
      const FQ = (0, oQ.j)(),
        [wQ, LQ] = AQ().size(FQ);
      return (0, oQ.g)(wQ, LQ, FQ, QQ.n)
    }

    function eQ(QQ) {
      var FQ, wQ, LQ, qQ;
      const kQ = (0, oQ.j)(),
        [vQ, uQ] = AQ().size(kQ);
      if (vQ <= 0 || uQ <= 0) return null;
      const HQ = (0, oQ.g)(vQ, uQ, kQ, mQ().n);
      return (0, oQ.c)(QQ, HQ), QQ.style.left = `${null!==(FQ=null===(wQ=YQ)||void 0===wQ?void 0:wQ.rect.left)&&void 0!==FQ?FQ:0}px`, QQ.style.top = `${null!==(LQ=null===(qQ=YQ)||void 0===qQ?void 0:qQ.rect.top)&&void 0!==LQ?LQ:0}px`, (0, DQ.J)(QQ.style, YQ), HQ
    }

    function MQ(QQ) {
      YQ = QQ, AQ(), (0, DQ.E)(HQ.style, QQ, ""), xQ()
    }

    function GQ(QQ, FQ) {
      QQ.style.imageRendering = (0, oQ.F)(FQ.pixelated)
    }

    function pQ(QQ, FQ) {
      const wQ = (0, qQ.o)("appManagerUpdated|clientEscMenuOptions", (() => {
          GQ(QQ, mQ()), FQ()
        })),
        LQ = (0, kQ.s)(FQ),
        oQ = (0, vQ.q)(FQ);
      return AQ(), bQ.add(FQ), () => {
        wQ(), LQ(), oQ(), bQ.delete(FQ)
      }
    }
  },
  40465: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => DQ,
      h: () => oQ,
      l: () => qQ
    });
    let LQ = null;

    function qQ(QQ) {
      LQ = QQ
    }

    function oQ(QQ) {
      LQ === QQ && (LQ = null)
    }

    function DQ() {
      var QQ;
      null === (QQ = LQ) || void 0 === QQ || QQ()
    }
  },
  40430: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => qQ,
      c: () => mQ,
      d: () => oQ,
      f: () => HQ,
      i: () => uQ,
      m: () => bQ
    });
    var LQ = wQ(2811);
    class qQ extends Error {
      constructor(QQ, FQ, wQ) {
        super(`${"fetch"===QQ?"fetching":"decoding"} ${FQ} failed`, wQ), this.stage = QQ, this.source = FQ, this.name = "ShellImageError"
      }
    }
    async function oQ(QQ) {
      let FQ, wQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : LQ.T,
        oQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      if ("string" === typeof QQ) try {
        FQ = await wQ(QQ)
      } catch (DQ) {
        throw new qQ("fetch", QQ, {
          cause: DQ
        })
      } else FQ = QQ;
      try {
        const QQ = new Blob([FQ.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(QQ, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: oQ
        })
      } catch (DQ) {
        throw new qQ("decode", "string" === typeof QQ ? QQ : `${FQ.byteLength} bytes`, {
          cause: DQ
        })
      }
    }
    let DQ = null;
    const kQ = new Map;
    let vQ = 1;

    function mQ(QQ) {
      if (DQ = QQ, null !== QQ) {
        for (const [FQ, wQ] of kQ) QQ.bLQ(FQ, wQ);
        kQ.clear()
      }
    }

    function uQ(QQ) {
      const FQ = vQ++;
      return DQ ? DQ.bLQ(FQ, QQ) : kQ.set(FQ, QQ), FQ
    }
    async function HQ(QQ, FQ, wQ) {
      const LQ = await oQ(QQ, FQ, wQ);
      return {
        id: uQ(LQ),
        width: LQ.width,
        height: LQ.height
      }
    }

    function bQ(QQ) {
      var FQ;
      const wQ = kQ.get(QQ);
      if (wQ) return wQ.close(), void kQ.delete(QQ);
      null === (FQ = DQ) || void 0 === FQ || FQ.YLQ(QQ)
    }
  },
  40351: (QQ, FQ, wQ) => {
    function LQ(QQ, FQ) {
      if (!Object.prototype.hasOwnProperty.call(QQ, FQ)) throw new TypeError("attempted to use private field on non-instance");
      return QQ
    }
    wQ.d(FQ, {
      e: () => LQ
    })
  },
  40360: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => qQ
    });
    var LQ = 0;

    function qQ(QQ) {
      return "__private_" + LQ++ + "_" + QQ
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);