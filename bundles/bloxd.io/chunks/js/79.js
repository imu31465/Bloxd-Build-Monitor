export const id = 79;
export const ids = [79];
export const modules = {
  39434: (BB, TB, dB) => {
    dB.d(TB, {
      C: () => AB,
      G: () => PB,
      K: () => FB,
      M: () => SB,
      N: () => UB,
      Q: () => CB,
      U: () => hB,
      V: () => rB,
      b: () => GB,
      e: () => RB,
      h: () => zB,
      k: () => qB,
      l: () => wB,
      m: () => MB,
      n: () => QB,
      r: () => KB,
      v: () => cB,
      y: () => IB
    });
    var VB = dB(1275),
      yB = dB(24),
      pB = dB(1173),
      lB = dB(2101),
      JB = dB(4209),
      YB = dB(4169);
    let gB, oB = !1,
      kB = !1,
      LB = !1,
      OB = !1;
    const DB = 1300,
      uB = 3e3;
    let HB = 0,
      EB = !1,
      vB = !1,
      mB = 0;
    const iB = 2;
    let NB = !1,
      tB = !1;
    const fB = new Set,
      sB = new Set;

    function MB() {
      return oB
    }

    function zB() {
      return vB
    }

    function wB() {
      return tB
    }

    function UB() {
      return (0, pB.r)() && !tB
    }

    function FB(BB) {
      let TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (BB !== tB) {
        tB = BB;
        for (const BB of [...sB]) BB(tB);
        TB && hB()
      }
    }

    function KB(BB) {
      return sB.add(BB), () => {
        sB.delete(BB)
      }
    }

    function rB() {
      (0, JB.f)(lB.A.Menu, (0, pB.r)() ? 0 : lB.A.Menu)
    }

    function IB() {
      vB = !1, mB = 0, rB(), hB()
    }

    function cB(BB) {
      return fB.add(BB), () => {
        fB.delete(BB)
      }
    }

    function SB(BB) {
      kB = !1, BB !== oB && (oB = BB, OB = !1, clearTimeout(gB), LB = !oB && NB, oB ? (EB = !1, vB = !1, mB = 0) : UB() && !NB && (vB = !0), NB = !1, oB && !UB() && jB(), bB(), LB && hB())
    }

    function PB(BB) {
      BB !== EB && (EB = BB, BB || hB())
    }

    function QB() {
      kB = !1, OB || !0 !== XB() || (OB = !0, clearTimeout(gB), gB = setTimeout(aB, DB))
    }

    function RB() {
      return (!kB || performance.now() - HB > uB) && (kB = (0, YB.N)().lockPointer(), HB = performance.now()), kB
    }

    function aB() {
      ZB() && WB() && RB()
    }

    function ZB() {
      return UB() && !oB && !EB && !(0, VB.i)()
    }

    function XB() {
      var BB;
      return "undefined" === typeof navigator || null === (BB = navigator.userActivation) || void 0 === BB ? void 0 : BB.isActive
    }

    function WB() {
      return LB && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== XB()
    }

    function hB() {
      UB() ? ZB() && !vB && WB() && RB() : oB && !NB && jB()
    }

    function CB() {
      vB ? navigator.vendor.startsWith("Apple") ? xB() : mB = iB : hB()
    }

    function GB() {
      mB > 0 && 0 === --mB && xB()
    }

    function qB() {
      mB = 0
    }

    function xB() {
      ZB() && !0 === XB() && RB()
    }

    function jB() {
      NB = !0, (0, YB.N)().unlockPointer()
    }

    function AB() {
      kB = !1, LB = !1, OB = !1, clearTimeout(gB), EB = !1, vB = !1, mB = 0, NB = !1;
      const BB = oB;
      oB = !1, BB && bB()
    }

    function bB() {
      for (const BB of [...fB]) BB(oB);
      yB.h.yH("pointerLockUpdate", oB)
    }
  },
  39412: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => LB,
      c: () => JB,
      e: () => kB,
      f: () => gB,
      i: () => lB,
      l: () => oB,
      o: () => YB
    });
    let VB = null,
      yB = null,
      pB = null;

    function lB(BB) {
      VB = BB
    }

    function JB() {
      return VB
    }

    function YB(BB) {
      yB = BB
    }

    function gB() {
      return yB
    }

    function oB(BB) {
      pB = BB
    }

    function kB() {
      return pB
    }

    function LB() {
      var BB, TB;
      return !0 === (null === (BB = yB) || void 0 === BB || null === (TB = BB.currentViewer) || void 0 === TB ? void 0 : TB.inPlayback)
    }
  },
  4169: (BB, TB, dB) => {
    dB.d(TB, {
      A: () => wB,
      D: () => UB,
      H: () => vB,
      K: () => lB,
      N: () => JB,
      P: () => MB,
      e: () => sB,
      g: () => iB,
      j: () => KB,
      n: () => FB,
      p: () => EB,
      s: () => tB,
      t: () => mB,
      v: () => NB,
      w: () => zB
    });
    var VB = dB(4177);
    const yB = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let pB = yB;

    function lB(BB) {
      pB = null !== BB && void 0 !== BB ? BB : yB
    }

    function JB() {
      return pB
    }
    const YB = new Set,
      gB = new Set;
    let oB = -1;
    const kB = new Set,
      LB = new Set;
    let OB = 0,
      DB = 0;
    const uB = new Set,
      HB = new Set;

    function EB(BB) {
      return YB.add(BB), () => {
        YB.delete(BB)
      }
    }

    function vB(BB, TB) {
      for (const VB of YB) try {
        VB(BB)
      } catch (dB) {
        TB(dB)
      }
    }

    function mB(BB) {
      return gB.add(BB), () => {
        gB.delete(BB)
      }
    }

    function iB(BB, TB) {
      const dB = oB < 0 ? 0 : BB - oB;
      oB = BB;
      for (const yB of gB) try {
        yB(dB)
      } catch (VB) {
        TB(VB)
      }
    }

    function NB(BB) {
      return kB.add(BB), () => {
        kB.delete(BB)
      }
    }

    function tB(BB) {
      return LB.add(BB), () => {
        LB.delete(BB)
      }
    }
    let fB = 0;

    function sB(BB) {
      fB += BB
    }

    function MB() {
      const BB = fB;
      return fB = 0, BB
    }

    function zB(BB) {
      return uB.add(BB), () => {
        uB.delete(BB)
      }
    }

    function wB(BB) {
      return HB.add(BB), () => {
        HB.delete(BB)
      }
    }

    function UB() {
      OB = 0, DB = 0, oB = -1
    }

    function FB(BB, TB) {
      if ("paced" === BB) return DB += TB, null;
      if ("drawn" !== BB && "skipped" !== BB) return null;
      const dB = TB + DB;
      return DB = 0, dB
    }

    function KB(BB, TB, dB, yB) {
      const pB = (0, VB.k)(TB),
        lB = BB > 0 ? performance.now() : 0;
      for (let VB = 0; VB < BB; VB++)
        for (const BB of uB) try {
          BB()
        } catch (JB) {
          yB(JB)
        }
      if (BB > 0 && sB(performance.now() - lB), null !== dB) {
        for (const BB of kB) try {
          BB(dB)
        } catch (JB) {
          yB(JB)
        }
        OB += dB
      }
      if ("drawn" === TB) {
        const BB = OB;
        OB = 0;
        for (const TB of LB) try {
          TB(BB)
        } catch (JB) {
          yB(JB)
        }
      }
      for (const VB of HB) try {
        VB(BB, pB)
      } catch (JB) {
        yB(JB)
      }
    }
  },
  39635: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => VB
    });
    const VB = {
      stop: () => VB,
      fade: () => VB,
      rate: () => VB,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => VB,
      setPannerAttr: () => VB,
      setPosition: () => VB
    }
  },
  4199: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => YB,
      c: () => pB,
      f: () => JB
    });
    var VB = dB(2101),
      yB = dB(4206);

    function pB(BB) {
      let {
        action: TB,
        flags: dB
      } = BB;
      return "mid-fire" === TB && 0 !== (dB & VB.e.AltLeftClick)
    }
    const lB = new Set;

    function JB(BB) {
      return lB.add(BB), () => {
        lB.delete(BB)
      }
    }

    function YB(BB) {
      const TB = yB.e[255 & BB];
      if (void 0 === TB) return;
      const dB = BB >>> 8 & 255,
        pB = {
          action: TB,
          down: 0 !== (dB & VB.e.Down),
          flags: dB,
          press: BB >>> 16
        };
      for (const VB of lB) VB(pB)
    }
  },
  4206: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => yB,
      i: () => pB,
      j: () => lB,
      n: () => VB,
      q: () => JB
    });
    const VB = {
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
      yB = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      pB = {
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
      lB = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      JB = [16]
  },
  39743: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => oB,
      d: () => gB,
      h: () => YB
    });
    var VB = dB(4192),
      yB = dB(2101),
      pB = dB(4209);
    let lB = !1,
      JB = !1;

    function YB(BB) {
      lB = !0;
      try {
        BB()
      } finally {
        lB = !1
      }
    }

    function gB(BB, TB) {
      if (lB) return !1;
      switch (BB) {
        case VB.C.MouseDown:
        case VB.C.MouseUp:
        case VB.C.TouchStart:
        case VB.C.TouchEnd:
        case VB.C.TouchCancel:
        case VB.C.TouchButton:
          return !0;
        case VB.C.KeyDown:
        case VB.C.KeyUp:
          return 0 === (TB & yB.g.Repeat) && !(0, pB.d)(document.activeElement);
        default:
          return !1
      }
    }

    function oB(BB) {
      JB || (JB = !0, queueMicrotask((() => {
        JB = !1, BB()
      })))
    }
  },
  4209: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => JB,
      d: () => lB,
      f: () => gB
    });
    var VB = dB(2101),
      yB = dB(2109);
    const pB = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function lB(BB) {
      return BB instanceof HTMLElement && (!!(BB.isContentEditable || BB instanceof HTMLTextAreaElement || BB instanceof HTMLSelectElement) || BB instanceof HTMLInputElement && !pB.has(BB.type))
    }

    function JB(BB) {
      let TB = null;
      const dB = dB => {
          const yB = lB(dB);
          yB !== TB && (TB = yB, BB(VB.k.UiCapture, VB.A.Keyboard, 0, 0, yB ? VB.A.Keyboard : 0))
        },
        yB = BB => {
          dB(BB.target)
        },
        pB = BB => {
          dB(BB.relatedTarget)
        },
        JB = () => {
          dB(document.activeElement)
        },
        YB = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", yB, YB), document.addEventListener("focusout", pB, YB), document.addEventListener("keydown", JB, YB), dB(document.activeElement), () => {
        document.removeEventListener("focusin", yB, YB), document.removeEventListener("focusout", pB, YB), document.removeEventListener("keydown", JB, YB)
      }
    }
    const YB = new Map;

    function gB(BB, TB) {
      var dB;
      let VB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      YB.set(VB, (null !== (dB = YB.get(VB)) && void 0 !== dB ? dB : 0) & ~BB | TB & BB);
      let pB = 0;
      for (const yB of YB.values()) pB |= yB;
      return (0, yB.x)(BB, pB & BB)
    }
  },
  39779: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => VB
    });
    const VB = 2e3
  },
  39740: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => DB,
      f: () => YB,
      g: () => LB,
      i: () => OB,
      m: () => uB
    });
    var VB = dB(21),
      yB = dB(24),
      pB = dB(2409),
      lB = dB(8552),
      JB = dB(2411);

    function YB() {
      var BB;
      const TB = (dB = VB.d.get("clientEscMenuOptions"), yB = (0, pB.G)(), {
        sampleCount: dB.antiAliasing ? 4 : 1,
        n: (0, pB.v)(dB.pixelScale, yB),
        pixelated: (0, pB.t)(dB.pixelSmoothing)
      });
      var dB, yB;
      return TB.sampleCount > 1 && (0, lB.c)() && (TB.sampleCount = 1), TB.n = null !== (BB = (0, lB.m)()) && void 0 !== BB ? BB : TB.n, TB
    }
    let gB = null;
    const oB = new Set;

    function kB() {
      if (null === gB) {
        const BB = document.createElement("div");
        BB.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", BB.setAttribute("aria-hidden", "true"), document.body.append(BB), gB = new pB.d(BB, (() => {
          for (const BB of oB) BB()
        }))
      }
      return gB
    }

    function LB(BB) {
      const TB = (0, pB.k)(),
        [dB, VB] = kB().size(TB);
      return (0, pB.h)(dB, VB, TB, BB.n)
    }

    function OB(BB) {
      const TB = (0, pB.k)(),
        [dB, VB] = kB().size(TB);
      if (dB <= 0 || VB <= 0) return null;
      const yB = (0, pB.h)(dB, VB, TB, YB().n);
      return (0, pB.e)(BB, yB), yB
    }

    function DB(BB, TB) {
      BB.style.imageRendering = (0, pB.J)(TB.pixelated)
    }

    function uB(BB, TB) {
      const dB = (0, yB.i)("appManagerUpdated|clientEscMenuOptions", (() => {
          DB(BB, YB()), TB()
        })),
        VB = (0, lB.r)(TB),
        pB = (0, JB.n)(TB);
      return kB(), oB.add(TB), () => {
        dB(), VB(), pB(), oB.delete(TB)
      }
    }
  },
  39781: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => lB,
      g: () => pB,
      h: () => yB
    });
    let VB = null;

    function yB(BB) {
      VB = BB
    }

    function pB(BB) {
      VB === BB && (VB = null)
    }

    function lB() {
      var BB;
      null === (BB = VB) || void 0 === BB || BB()
    }
  },
  39753: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => yB,
      e: () => gB,
      i: () => pB,
      l: () => kB,
      o: () => oB,
      q: () => LB
    });
    var VB = dB(3216);
    class yB extends Error {
      constructor(BB, TB, dB) {
        super(`${"fetch"===BB?"fetching":"decoding"} ${TB} failed`, dB), this.stage = BB, this.source = TB, this.name = "ShellImageError"
      }
    }
    async function pB(BB) {
      let TB, dB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : VB.K,
        pB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      if ("string" === typeof BB) try {
        TB = await dB(BB)
      } catch (lB) {
        throw new yB("fetch", BB, {
          cause: lB
        })
      } else TB = BB;
      try {
        const BB = new Blob([TB.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(BB, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: pB
        })
      } catch (lB) {
        throw new yB("decode", "string" === typeof BB ? BB : `${TB.byteLength} bytes`, {
          cause: lB
        })
      }
    }
    let lB = null;
    const JB = new Map;
    let YB = 1;

    function gB(BB) {
      if (lB = BB, null !== BB) {
        for (const [TB, dB] of JB) BB.DVB(TB, dB);
        JB.clear()
      }
    }

    function oB(BB) {
      const TB = YB++;
      return lB ? lB.DVB(TB, BB) : JB.set(TB, BB), TB
    }
    async function kB(BB, TB, dB) {
      const VB = await pB(BB, TB, dB);
      return {
        id: oB(VB),
        width: VB.width,
        height: VB.height
      }
    }

    function LB(BB) {
      var TB;
      const dB = JB.get(BB);
      if (dB) return dB.close(), void JB.delete(BB);
      null === (TB = lB) || void 0 === TB || TB.uVB(BB)
    }
  },
  39661: (BB, TB, dB) => {
    function VB(BB, TB) {
      if (!Object.prototype.hasOwnProperty.call(BB, TB)) throw new TypeError("attempted to use private field on non-instance");
      return BB
    }
    dB.d(TB, {
      e: () => VB
    })
  },
  39664: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => yB
    });
    var VB = 0;

    function yB(BB) {
      return "__private_" + VB++ + "_" + BB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);