export const id = 91;
export const ids = [91];
export const modules = {
  41094: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      B: () => OQ,
      E: () => uQ,
      H: () => iQ,
      L: () => CQ,
      O: () => hQ,
      R: () => nQ,
      U: () => eQ,
      Y: () => AQ,
      b: () => xQ,
      e: () => kQ,
      h: () => aQ,
      j: () => YQ,
      l: () => lQ,
      p: () => HQ,
      r: () => LQ,
      v: () => cQ,
      x: () => EQ,
      y: () => RQ
    });
    var wQ = XQ(1454),
      qQ = XQ(31),
      TQ = XQ(1335),
      zQ = XQ(2506),
      sQ = XQ(5153),
      FQ = XQ(5118);
    let PQ, gQ = !1,
      JQ = !1,
      rQ = !1,
      IQ = !1;
    const jQ = 1300,
      BQ = 3e3;
    let yQ = 0,
      VQ = !1,
      DQ = !1,
      pQ = 0;
    const GQ = 2;
    let UQ = !1,
      bQ = !1;
    const vQ = new Set,
      dQ = new Set;

    function HQ() {
      return gQ
    }

    function aQ() {
      return DQ
    }

    function lQ() {
      return bQ
    }

    function hQ() {
      return (0, TQ.A)() && !bQ
    }

    function iQ(QQ) {
      let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (QQ !== bQ) {
        bQ = QQ;
        for (const QQ of [...dQ]) QQ(bQ);
        WQ && eQ()
      }
    }

    function cQ(QQ) {
      return dQ.add(QQ), () => {
        dQ.delete(QQ)
      }
    }

    function AQ() {
      (0, sQ.i)(zQ.x.Menu, (0, TQ.A)() ? 0 : zQ.x.Menu)
    }

    function RQ() {
      DQ = !1, pQ = 0, AQ(), eQ()
    }

    function EQ(QQ) {
      return vQ.add(QQ), () => {
        vQ.delete(QQ)
      }
    }

    function CQ(QQ) {
      JQ = !1, QQ !== gQ && (gQ = QQ, IQ = !1, clearTimeout(PQ), rQ = !gQ && UQ, gQ ? (VQ = !1, DQ = !1, pQ = 0) : hQ() && !UQ && (DQ = !0), UQ = !1, gQ && !hQ() && ZQ(), KQ(), rQ && eQ())
    }

    function uQ(QQ) {
      QQ !== VQ && (VQ = QQ, QQ || eQ())
    }

    function LQ() {
      JQ = !1, IQ || !0 !== tQ() || (IQ = !0, clearTimeout(PQ), PQ = setTimeout(fQ, jQ))
    }

    function kQ() {
      return (!JQ || performance.now() - yQ > BQ) && (JQ = (0, FQ.H)().lockPointer(), yQ = performance.now()), JQ
    }

    function fQ() {
      SQ() && oQ() && kQ()
    }

    function SQ() {
      return hQ() && !gQ && !VQ && !(0, wQ.l)()
    }

    function tQ() {
      var QQ;
      return "undefined" === typeof navigator || null === (QQ = navigator.userActivation) || void 0 === QQ ? void 0 : QQ.isActive
    }

    function oQ() {
      return rQ && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== tQ()
    }

    function eQ() {
      hQ() ? SQ() && !DQ && oQ() && kQ() : gQ && !UQ && ZQ()
    }

    function nQ() {
      DQ ? navigator.vendor.startsWith("Apple") ? NQ() : pQ = GQ : eQ()
    }

    function xQ() {
      pQ > 0 && 0 === --pQ && NQ()
    }

    function YQ() {
      pQ = 0
    }

    function NQ() {
      SQ() && !0 === tQ() && kQ()
    }

    function ZQ() {
      UQ = !0, (0, FQ.H)().unlockPointer()
    }

    function OQ() {
      JQ = !1, rQ = !1, IQ = !1, clearTimeout(PQ), VQ = !1, DQ = !1, pQ = 0, UQ = !1;
      const QQ = gQ;
      gQ = !1, QQ && KQ()
    }

    function KQ() {
      for (const QQ of [...vQ]) QQ(gQ);
      qQ.k.mB("pointerLockUpdate", gQ)
    }
  },
  40902: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => rQ,
      d: () => sQ,
      e: () => JQ,
      f: () => PQ,
      j: () => zQ,
      n: () => gQ,
      o: () => FQ
    });
    let wQ = null,
      qQ = null,
      TQ = null;

    function zQ(QQ) {
      wQ = QQ
    }

    function sQ() {
      return wQ
    }

    function FQ(QQ) {
      qQ = QQ
    }

    function PQ() {
      return qQ
    }

    function gQ(QQ) {
      TQ = QQ
    }

    function JQ() {
      return TQ
    }

    function rQ() {
      var QQ, WQ;
      return !0 === (null === (QQ = qQ) || void 0 === QQ || null === (WQ = QQ.currentViewer) || void 0 === WQ ? void 0 : WQ.inPlayback)
    }
  },
  5118: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      B: () => DQ,
      F: () => zQ,
      H: () => sQ,
      I: () => HQ,
      d: () => dQ,
      e: () => GQ,
      g: () => cQ,
      h: () => iQ,
      k: () => VQ,
      o: () => bQ,
      s: () => pQ,
      t: () => UQ,
      w: () => aQ,
      x: () => lQ,
      y: () => hQ
    });
    var wQ = XQ(5126);
    const qQ = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let TQ = qQ;

    function zQ(QQ) {
      TQ = null !== QQ && void 0 !== QQ ? QQ : qQ
    }

    function sQ() {
      return TQ
    }
    const FQ = new Set,
      PQ = new Set;
    let gQ = -1;
    const JQ = new Set,
      rQ = new Set;
    let IQ = 0,
      jQ = 0;
    const BQ = new Set,
      yQ = new Set;

    function VQ(QQ) {
      return FQ.add(QQ), () => {
        FQ.delete(QQ)
      }
    }

    function DQ(QQ, WQ) {
      for (const wQ of FQ) try {
        wQ(QQ)
      } catch (XQ) {
        WQ(XQ)
      }
    }

    function pQ(QQ) {
      return PQ.add(QQ), () => {
        PQ.delete(QQ)
      }
    }

    function GQ(QQ, WQ) {
      const XQ = gQ < 0 ? 0 : QQ - gQ;
      gQ = QQ;
      for (const qQ of PQ) try {
        qQ(XQ)
      } catch (wQ) {
        WQ(wQ)
      }
    }

    function UQ(QQ) {
      return JQ.add(QQ), () => {
        JQ.delete(QQ)
      }
    }

    function bQ(QQ) {
      return rQ.add(QQ), () => {
        rQ.delete(QQ)
      }
    }
    let vQ = 0;

    function dQ(QQ) {
      vQ += QQ
    }

    function HQ() {
      const QQ = vQ;
      return vQ = 0, QQ
    }

    function aQ(QQ) {
      return BQ.add(QQ), () => {
        BQ.delete(QQ)
      }
    }

    function lQ(QQ) {
      return yQ.add(QQ), () => {
        yQ.delete(QQ)
      }
    }

    function hQ() {
      IQ = 0, jQ = 0, gQ = -1
    }

    function iQ(QQ, WQ) {
      if ("paced" === QQ) return jQ += WQ, null;
      if ("drawn" !== QQ && "skipped" !== QQ) return null;
      const XQ = WQ + jQ;
      return jQ = 0, XQ
    }

    function cQ(QQ, WQ, XQ, qQ) {
      const TQ = (0, wQ.f)(WQ),
        zQ = QQ > 0 ? performance.now() : 0;
      for (let wQ = 0; wQ < QQ; wQ++)
        for (const QQ of BQ) try {
          QQ()
        } catch (sQ) {
          qQ(sQ)
        }
      if (QQ > 0 && dQ(performance.now() - zQ), null !== XQ) {
        for (const QQ of JQ) try {
          QQ(XQ)
        } catch (sQ) {
          qQ(sQ)
        }
        IQ += XQ
      }
      if ("drawn" === WQ) {
        const QQ = IQ;
        IQ = 0;
        for (const WQ of rQ) try {
          WQ(QQ)
        } catch (sQ) {
          qQ(sQ)
        }
      }
      for (const wQ of yQ) try {
        wQ(QQ, TQ)
      } catch (sQ) {
        qQ(sQ)
      }
    }
  },
  41106: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => wQ
    });
    const wQ = {
      stop: () => wQ,
      fade: () => wQ,
      rate: () => wQ,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => wQ,
      setPannerAttr: () => wQ,
      setPosition: () => wQ
    }
  },
  5146: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => FQ,
      h: () => TQ,
      j: () => sQ
    });
    var wQ = XQ(2506),
      qQ = XQ(5148);

    function TQ(QQ) {
      let {
        action: WQ,
        flags: XQ
      } = QQ;
      return "mid-fire" === WQ && 0 !== (XQ & wQ.e.AltLeftClick)
    }
    const zQ = new Set;

    function sQ(QQ) {
      return zQ.add(QQ), () => {
        zQ.delete(QQ)
      }
    }

    function FQ(QQ) {
      const WQ = qQ.b[255 & QQ];
      if (void 0 === WQ) return;
      const XQ = QQ >>> 8 & 255,
        TQ = {
          action: WQ,
          down: 0 !== (XQ & wQ.e.Down),
          flags: XQ,
          press: QQ >>> 16
        };
      for (const wQ of zQ) wQ(TQ)
    }
  },
  5148: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => qQ,
      c: () => TQ,
      e: () => zQ,
      i: () => wQ,
      j: () => sQ
    });
    const wQ = {
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
      TQ = {
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
      zQ = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      sQ = [16]
  },
  41136: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => gQ,
      e: () => PQ,
      h: () => FQ
    });
    var wQ = XQ(5140),
      qQ = XQ(2506),
      TQ = XQ(5153);
    let zQ = !1,
      sQ = !1;

    function FQ(QQ) {
      zQ = !0;
      try {
        QQ()
      } finally {
        zQ = !1
      }
    }

    function PQ(QQ, WQ) {
      if (zQ) return !1;
      switch (QQ) {
        case wQ.G.MouseDown:
        case wQ.G.MouseUp:
        case wQ.G.TouchStart:
        case wQ.G.TouchEnd:
        case wQ.G.TouchCancel:
        case wQ.G.TouchButton:
          return !0;
        case wQ.G.KeyDown:
        case wQ.G.KeyUp:
          return 0 === (WQ & qQ.g.Repeat) && !(0, TQ.f)(document.activeElement);
        default:
          return !1
      }
    }

    function gQ(QQ) {
      sQ || (sQ = !0, queueMicrotask((() => {
        sQ = !1, QQ()
      })))
    }
  },
  5153: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => sQ,
      f: () => zQ,
      i: () => PQ
    });
    var wQ = XQ(2506),
      qQ = XQ(2510);
    const TQ = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function zQ(QQ) {
      return QQ instanceof HTMLElement && (!!(QQ.isContentEditable || QQ instanceof HTMLTextAreaElement || QQ instanceof HTMLSelectElement) || QQ instanceof HTMLInputElement && !TQ.has(QQ.type))
    }

    function sQ(QQ) {
      let WQ = null;
      const XQ = XQ => {
          const qQ = zQ(XQ);
          qQ !== WQ && (WQ = qQ, QQ(wQ.j.UiCapture, wQ.x.Keyboard, 0, 0, qQ ? wQ.x.Keyboard : 0))
        },
        qQ = QQ => {
          XQ(QQ.target)
        },
        TQ = QQ => {
          XQ(QQ.relatedTarget)
        },
        sQ = () => {
          XQ(document.activeElement)
        },
        FQ = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", qQ, FQ), document.addEventListener("focusout", TQ, FQ), document.addEventListener("keydown", sQ, FQ), XQ(document.activeElement), () => {
        document.removeEventListener("focusin", qQ, FQ), document.removeEventListener("focusout", TQ, FQ), document.removeEventListener("keydown", sQ, FQ)
      }
    }
    const FQ = new Map;

    function PQ(QQ, WQ) {
      var XQ;
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      FQ.set(wQ, (null !== (XQ = FQ.get(wQ)) && void 0 !== XQ ? XQ : 0) & ~QQ | WQ & QQ);
      let TQ = 0;
      for (const qQ of FQ.values()) TQ |= qQ;
      return (0, qQ.C)(QQ, TQ & QQ)
    }
  },
  41170: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => gQ,
      g: () => FQ,
      j: () => sQ,
      m: () => PQ
    });
    var wQ = XQ(2015);
    let qQ = null,
      TQ = 0;
    const zQ = new Set;

    function sQ() {
      return qQ
    }

    function FQ() {
      return TQ
    }

    function PQ(QQ) {
      qQ = QQ, TQ++, (0, wQ.c)();
      for (const WQ of zQ) WQ()
    }

    function gQ(QQ) {
      zQ.add(QQ)
    }
  },
  41202: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => wQ
    });
    const wQ = 2e3
  },
  41102: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => bQ,
      f: () => rQ,
      h: () => pQ,
      i: () => UQ,
      l: () => GQ,
      o: () => vQ
    });
    var wQ = XQ(212),
      qQ = XQ(26),
      TQ = XQ(31),
      zQ = XQ(3146),
      sQ = XQ(1345),
      FQ = XQ(34443),
      PQ = XQ(341),
      gQ = XQ(105),
      JQ = XQ(207);

    function rQ() {
      var QQ;
      const WQ = (0, zQ.J)(),
        XQ = function(QQ, WQ) {
          return {
            sampleCount: QQ.antiAliasing ? 4 : 1,
            n: (0, zQ.y)(QQ.pixelScale, WQ),
            pixelated: (0, zQ.w)(QQ.pixelSmoothing)
          }
        }(qQ.b.get("clientEscMenuOptions"), WQ);
      return XQ.sampleCount > 1 && (0, FQ.e)() && (XQ.sampleCount = 1), XQ.n = null !== (QQ = (0, FQ.n)()) && void 0 !== QQ ? QQ : XQ.n, wQ.g.includes((0, gQ.getSoftwareRenderer)()) && (XQ.sampleCount = 1, XQ.n = Math.max(XQ.n, (0, zQ.y)(JQ.n.pixelScale, WQ))), XQ
    }
    let IQ = null,
      jQ = null;
    const BQ = new Set;
    let yQ = null;

    function VQ() {
      for (const QQ of BQ) QQ()
    }

    function DQ() {
      if (null === IQ) {
        const QQ = document.createElement("div");
        QQ.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", QQ.setAttribute("aria-hidden", "true"), document.body.append(QQ), jQ = QQ, IQ = new zQ.b(QQ, VQ)
      }
      return IQ
    }

    function pQ(QQ) {
      const WQ = (0, zQ.m)(),
        [XQ, wQ] = DQ().size(WQ);
      return (0, zQ.g)(XQ, wQ, WQ, QQ.n)
    }

    function GQ(QQ) {
      var WQ, XQ, wQ, qQ;
      const TQ = (0, zQ.m)(),
        [FQ, PQ] = DQ().size(TQ);
      if (FQ <= 0 || PQ <= 0) return null;
      const gQ = (0, zQ.g)(FQ, PQ, TQ, rQ().n);
      return (0, zQ.c)(QQ, gQ), QQ.style.left = `${null!==(WQ=null===(XQ=yQ)||void 0===XQ?void 0:XQ.rect.left)&&void 0!==WQ?WQ:0}px`, QQ.style.top = `${null!==(wQ=null===(qQ=yQ)||void 0===qQ?void 0:qQ.rect.top)&&void 0!==wQ?wQ:0}px`, (0, sQ.L)(QQ.style, yQ), gQ
    }

    function UQ(QQ) {
      yQ = QQ, DQ(), (0, sQ.F)(jQ.style, QQ, ""), VQ()
    }

    function bQ(QQ, WQ) {
      QQ.style.imageRendering = (0, zQ.M)(WQ.pixelated)
    }

    function vQ(QQ, WQ) {
      const XQ = (0, TQ.o)("appManagerUpdated|clientEscMenuOptions", (() => {
          bQ(QQ, rQ()), WQ()
        })),
        wQ = (0, FQ.A)(WQ),
        qQ = (0, PQ.m)(WQ);
      return DQ(), BQ.add(WQ), () => {
        XQ(), wQ(), qQ(), BQ.delete(WQ)
      }
    }
  },
  41204: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => zQ,
      d: () => TQ,
      f: () => qQ
    });
    let wQ = null;

    function qQ(QQ) {
      wQ = QQ
    }

    function TQ(QQ) {
      wQ === QQ && (wQ = null)
    }

    function zQ() {
      var QQ;
      null === (QQ = wQ) || void 0 === QQ || QQ()
    }
  },
  41164: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => qQ,
      g: () => PQ,
      i: () => TQ,
      j: () => JQ,
      l: () => gQ,
      p: () => rQ
    });
    var wQ = XQ(3110);
    class qQ extends Error {
      constructor(QQ, WQ, XQ) {
        super(`${"fetch"===QQ?"fetching":"decoding"} ${WQ} failed`, XQ), this.stage = QQ, this.source = WQ, this.name = "ShellImageError"
      }
    }
    async function TQ(QQ) {
      let WQ, XQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wQ.K,
        TQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      if ("string" === typeof QQ) try {
        WQ = await XQ(QQ)
      } catch (zQ) {
        throw new qQ("fetch", QQ, {
          cause: zQ
        })
      } else WQ = QQ;
      try {
        const QQ = new Blob([WQ.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(QQ, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: TQ
        })
      } catch (zQ) {
        throw new qQ("decode", "string" === typeof QQ ? QQ : `${WQ.byteLength} bytes`, {
          cause: zQ
        })
      }
    }
    let zQ = null;
    const sQ = new Map;
    let FQ = 1;

    function PQ(QQ) {
      if (zQ = QQ, null !== QQ) {
        for (const [WQ, XQ] of sQ) QQ.jwQ(WQ, XQ);
        sQ.clear()
      }
    }

    function gQ(QQ) {
      const WQ = FQ++;
      return zQ ? zQ.jwQ(WQ, QQ) : sQ.set(WQ, QQ), WQ
    }
    async function JQ(QQ, WQ, XQ) {
      const wQ = await TQ(QQ, WQ, XQ);
      return {
        id: gQ(wQ),
        width: wQ.width,
        height: wQ.height
      }
    }

    function rQ(QQ) {
      var WQ;
      const XQ = sQ.get(QQ);
      if (XQ) return XQ.close(), void sQ.delete(QQ);
      null === (WQ = zQ) || void 0 === WQ || WQ.BwQ(QQ)
    }
  },
  41114: (QQ, WQ, XQ) => {
    function wQ(QQ, WQ) {
      if (!Object.prototype.hasOwnProperty.call(QQ, WQ)) throw new TypeError("attempted to use private field on non-instance");
      return QQ
    }
    XQ.d(WQ, {
      d: () => wQ
    })
  },
  41122: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => qQ
    });
    var wQ = 0;

    function qQ(QQ) {
      return "__private_" + wQ++ + "_" + QQ
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);