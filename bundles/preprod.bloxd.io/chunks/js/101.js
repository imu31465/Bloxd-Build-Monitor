export const id = 101;
export const ids = [101];
export const modules = {
  41897: (BB, OB, GB) => {
    GB.d(OB, {
      A: () => gB,
      B: () => uB,
      E: () => LB,
      G: () => KB,
      I: () => eB,
      J: () => aB,
      L: () => IB,
      b: () => TB,
      e: () => XB,
      f: () => kB,
      j: () => bB,
      k: () => dB,
      n: () => fB,
      p: () => rB,
      s: () => mB,
      t: () => iB,
      v: () => FB,
      z: () => vB
    });
    var YB = GB(1434),
      DB = GB(25),
      QB = GB(1293),
      oB = GB(2617),
      jB = GB(5313),
      yB = GB(5274);
    let JB, MB = !1,
      PB = !1,
      zB = !1,
      lB = !1;
    const pB = 1300,
      qB = 3e3;
    let ZB = 0,
      NB = !1,
      RB = !1,
      WB = 0;
    const AB = 2;
    let VB = !1,
      SB = !1;
    const nB = new Set,
      UB = new Set;

    function fB() {
      return MB
    }

    function kB() {
      return RB
    }

    function dB() {
      return SB
    }

    function KB() {
      return (0, QB.q)() && !SB
    }

    function uB(BB) {
      let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (BB !== SB) {
        SB = BB;
        for (const BB of [...UB]) BB(SB);
        OB && aB()
      }
    }

    function mB(BB) {
      return UB.add(BB), () => {
        UB.delete(BB)
      }
    }

    function IB() {
      (0, jB.m)(oB.y.Menu, (0, QB.q)() ? 0 : oB.y.Menu)
    }

    function FB() {
      RB = !1, WB = 0, IB(), aB()
    }

    function iB(BB) {
      return nB.add(BB), () => {
        nB.delete(BB)
      }
    }

    function LB(BB) {
      PB = !1, BB !== MB && (MB = BB, lB = !1, clearTimeout(JB), zB = !MB && VB, MB ? (NB = !1, RB = !1, WB = 0) : KB() && !VB && (RB = !0), VB = !1, MB && !KB() && HB(), sB(), zB && aB())
    }

    function gB(BB) {
      BB !== NB && (NB = BB, BB || aB())
    }

    function rB() {
      PB = !1, lB || !0 !== cB() || (lB = !0, clearTimeout(JB), JB = setTimeout(wB, pB))
    }

    function XB() {
      return (!PB || performance.now() - ZB > qB) && (PB = (0, yB.O)().lockPointer(), ZB = performance.now()), PB
    }

    function wB() {
      EB() && hB() && XB()
    }

    function EB() {
      return KB() && !MB && !NB && !(0, YB.j)()
    }

    function cB() {
      var BB;
      return "undefined" === typeof navigator || null === (BB = navigator.userActivation) || void 0 === BB ? void 0 : BB.isActive
    }

    function hB() {
      return zB && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== cB()
    }

    function aB() {
      KB() ? EB() && !RB && hB() && XB() : MB && !VB && HB()
    }

    function eB() {
      RB ? navigator.vendor.startsWith("Apple") ? CB() : WB = AB : aB()
    }

    function TB() {
      WB > 0 && 0 === --WB && CB()
    }

    function bB() {
      WB = 0
    }

    function CB() {
      EB() && !0 === cB() && XB()
    }

    function HB() {
      VB = !0, (0, yB.O)().unlockPointer()
    }

    function vB() {
      PB = !1, zB = !1, lB = !1, clearTimeout(JB), NB = !1, RB = !1, WB = 0, VB = !1;
      const BB = MB;
      MB = !1, BB && sB()
    }

    function sB() {
      for (const BB of [...nB]) BB(MB);
      DB.o.tM("pointerLockUpdate", MB)
    }
  },
  41688: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => zB,
      g: () => jB,
      i: () => PB,
      l: () => JB,
      m: () => oB,
      p: () => MB,
      s: () => yB
    });
    let YB = null,
      DB = null,
      QB = null;

    function oB(BB) {
      YB = BB
    }

    function jB() {
      return YB
    }

    function yB(BB) {
      DB = BB
    }

    function JB() {
      return DB
    }

    function MB(BB) {
      QB = BB
    }

    function PB() {
      return QB
    }

    function zB() {
      var BB, OB;
      return !0 === (null === (BB = DB) || void 0 === BB || null === (OB = BB.currentViewer) || void 0 === OB ? void 0 : OB.inPlayback)
    }
  },
  5274: (BB, OB, GB) => {
    GB.d(OB, {
      C: () => dB,
      E: () => KB,
      I: () => RB,
      M: () => oB,
      O: () => jB,
      P: () => fB,
      d: () => UB,
      e: () => AB,
      i: () => mB,
      m: () => uB,
      o: () => NB,
      s: () => SB,
      v: () => WB,
      w: () => VB,
      z: () => kB
    });
    var YB = GB(5276);
    const DB = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let QB = DB;

    function oB(BB) {
      QB = null !== BB && void 0 !== BB ? BB : DB
    }

    function jB() {
      return QB
    }
    const yB = new Set,
      JB = new Set;
    let MB = -1;
    const PB = new Set,
      zB = new Set;
    let lB = 0,
      pB = 0;
    const qB = new Set,
      ZB = new Set;

    function NB(BB) {
      return yB.add(BB), () => {
        yB.delete(BB)
      }
    }

    function RB(BB, OB) {
      for (const YB of yB) try {
        YB(BB)
      } catch (GB) {
        OB(GB)
      }
    }

    function WB(BB) {
      return JB.add(BB), () => {
        JB.delete(BB)
      }
    }

    function AB(BB, OB) {
      const GB = MB < 0 ? 0 : BB - MB;
      MB = BB;
      for (const DB of JB) try {
        DB(GB)
      } catch (YB) {
        OB(YB)
      }
    }

    function VB(BB) {
      return PB.add(BB), () => {
        PB.delete(BB)
      }
    }

    function SB(BB) {
      return zB.add(BB), () => {
        zB.delete(BB)
      }
    }
    let nB = 0;

    function UB(BB) {
      nB += BB
    }

    function fB() {
      const BB = nB;
      return nB = 0, BB
    }

    function kB(BB) {
      return qB.add(BB), () => {
        qB.delete(BB)
      }
    }

    function dB(BB) {
      return ZB.add(BB), () => {
        ZB.delete(BB)
      }
    }

    function KB() {
      lB = 0, pB = 0, MB = -1
    }

    function uB(BB, OB) {
      if ("paced" === BB) return pB += OB, null;
      if ("drawn" !== BB && "skipped" !== BB) return null;
      const GB = OB + pB;
      return pB = 0, GB
    }

    function mB(BB, OB, GB, DB) {
      const QB = (0, YB.k)(OB),
        oB = BB > 0 ? performance.now() : 0;
      for (let YB = 0; YB < BB; YB++)
        for (const BB of qB) try {
          BB()
        } catch (jB) {
          DB(jB)
        }
      if (BB > 0 && UB(performance.now() - oB), null !== GB) {
        for (const BB of PB) try {
          BB(GB)
        } catch (jB) {
          DB(jB)
        }
        lB += GB
      }
      if ("drawn" === OB) {
        const BB = lB;
        lB = 0;
        for (const OB of zB) try {
          OB(BB)
        } catch (jB) {
          DB(jB)
        }
      }
      for (const YB of ZB) try {
        YB(BB, QB)
      } catch (jB) {
        DB(jB)
      }
    }
  },
  41907: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => YB
    });
    const YB = {
      stop: () => YB,
      fade: () => YB,
      rate: () => YB,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => YB,
      setPannerAttr: () => YB,
      setPosition: () => YB
    }
  },
  5296: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => yB,
      f: () => QB,
      g: () => jB
    });
    var YB = GB(2617),
      DB = GB(5305);

    function QB(BB) {
      let {
        action: OB,
        flags: GB
      } = BB;
      return "mid-fire" === OB && 0 !== (GB & YB.c.AltLeftClick)
    }
    const oB = new Set;

    function jB(BB) {
      return oB.add(BB), () => {
        oB.delete(BB)
      }
    }

    function yB(BB) {
      const OB = DB.c[255 & BB];
      if (void 0 === OB) return;
      const GB = BB >>> 8 & 255,
        QB = {
          action: OB,
          down: 0 !== (GB & YB.c.Down),
          flags: GB,
          press: BB >>> 16
        };
      for (const YB of oB) YB(QB)
    }
  },
  5305: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => DB,
      d: () => QB,
      g: () => oB,
      i: () => YB,
      l: () => jB
    });
    const YB = {
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
      DB = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      QB = {
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
      oB = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      jB = [16]
  },
  41933: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => MB,
      f: () => JB,
      i: () => yB
    });
    var YB = GB(5287),
      DB = GB(2617),
      QB = GB(5313);
    let oB = !1,
      jB = !1;

    function yB(BB) {
      oB = !0;
      try {
        BB()
      } finally {
        oB = !1
      }
    }

    function JB(BB, OB) {
      if (oB) return !1;
      switch (BB) {
        case YB.Q.MouseDown:
        case YB.Q.MouseUp:
        case YB.Q.TouchStart:
        case YB.Q.TouchEnd:
        case YB.Q.TouchCancel:
        case YB.Q.TouchButton:
          return !0;
        case YB.Q.KeyDown:
        case YB.Q.KeyUp:
          return 0 === (OB & DB.d.Repeat) && !(0, QB.i)(document.activeElement);
        default:
          return !1
      }
    }

    function MB(BB) {
      jB || (jB = !0, queueMicrotask((() => {
        jB = !1, BB()
      })))
    }
  },
  5313: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => jB,
      i: () => oB,
      m: () => JB
    });
    var YB = GB(2617),
      DB = GB(2619);
    const QB = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function oB(BB) {
      return BB instanceof HTMLElement && (!!(BB.isContentEditable || BB instanceof HTMLTextAreaElement || BB instanceof HTMLSelectElement) || BB instanceof HTMLInputElement && !QB.has(BB.type))
    }

    function jB(BB) {
      let OB = null;
      const GB = GB => {
          const DB = oB(GB);
          DB !== OB && (OB = DB, BB(YB.f.UiCapture, YB.y.Keyboard, 0, 0, DB ? YB.y.Keyboard : 0))
        },
        DB = BB => {
          GB(BB.target)
        },
        QB = BB => {
          GB(BB.relatedTarget)
        },
        jB = () => {
          GB(document.activeElement)
        },
        yB = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", DB, yB), document.addEventListener("focusout", QB, yB), document.addEventListener("keydown", jB, yB), GB(document.activeElement), () => {
        document.removeEventListener("focusin", DB, yB), document.removeEventListener("focusout", QB, yB), document.removeEventListener("keydown", jB, yB)
      }
    }
    const yB = new Map;

    function JB(BB, OB) {
      var GB;
      let YB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      yB.set(YB, (null !== (GB = yB.get(YB)) && void 0 !== GB ? GB : 0) & ~BB | OB & BB);
      let QB = 0;
      for (const DB of yB.values()) QB |= DB;
      return (0, DB.u)(BB, QB & BB)
    }
  },
  36997: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => MB,
      g: () => yB,
      k: () => jB,
      o: () => JB
    });
    var YB = GB(2034);
    let DB = null,
      QB = 0;
    const oB = new Set;

    function jB() {
      return DB
    }

    function yB() {
      return QB
    }

    function JB(BB) {
      DB = BB, QB++, (0, YB.b)();
      for (const OB of oB) OB()
    }

    function MB(BB) {
      oB.add(BB)
    }
  },
  42006: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => YB
    });
    const YB = 2e3
  },
  41900: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => SB,
      i: () => zB,
      l: () => WB,
      n: () => VB,
      p: () => AB,
      s: () => nB
    });
    var YB = GB(180),
      DB = GB(16),
      QB = GB(25),
      oB = GB(3249),
      jB = GB(1299),
      yB = GB(34725),
      JB = GB(294),
      MB = GB(92),
      PB = GB(173);

    function zB() {
      var BB;
      const OB = (0, oB.L)(),
        GB = function(BB, OB) {
          return {
            sampleCount: BB.antiAliasing ? 4 : 1,
            n: (0, oB.C)(BB.pixelScale, OB),
            pixelated: (0, oB.z)(BB.pixelSmoothing)
          }
        }(DB.c.get("clientEscMenuOptions"), OB);
      return GB.sampleCount > 1 && (0, yB.d)() && (GB.sampleCount = 1), GB.n = null !== (BB = (0, yB.p)()) && void 0 !== BB ? BB : GB.n, YB.f.includes((0, MB.getSoftwareRenderer)()) && (GB.sampleCount = 1, GB.n = Math.max(GB.n, (0, oB.C)(PB.o.pixelScale, OB))), GB
    }
    let lB = null,
      pB = null;
    const qB = new Set;
    let ZB = null;

    function NB() {
      for (const BB of qB) BB()
    }

    function RB() {
      if (null === lB) {
        const BB = document.createElement("div");
        BB.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", BB.setAttribute("aria-hidden", "true"), document.body.append(BB), pB = BB, lB = new oB.d(BB, NB)
      }
      return lB
    }

    function WB(BB) {
      const OB = (0, oB.n)(),
        [GB, YB] = RB().size(OB);
      return (0, oB.i)(GB, YB, OB, BB.n)
    }

    function AB(BB) {
      var OB, GB, YB, DB;
      const QB = (0, oB.n)(),
        [yB, JB] = RB().size(QB);
      if (yB <= 0 || JB <= 0) return null;
      const MB = (0, oB.i)(yB, JB, QB, zB().n);
      return (0, oB.g)(BB, MB), BB.style.left = `${null!==(OB=null===(GB=ZB)||void 0===GB?void 0:GB.rect.left)&&void 0!==OB?OB:0}px`, BB.style.top = `${null!==(YB=null===(DB=ZB)||void 0===DB?void 0:DB.rect.top)&&void 0!==YB?YB:0}px`, (0, jB.Q)(BB.style, ZB), MB
    }

    function VB(BB) {
      ZB = BB, RB(), (0, jB.G)(pB.style, BB, ""), NB()
    }

    function SB(BB, OB) {
      BB.style.imageRendering = (0, oB.P)(OB.pixelated)
    }

    function nB(BB, OB) {
      const GB = (0, QB.p)("appManagerUpdated|clientEscMenuOptions", (() => {
          SB(BB, zB()), OB()
        })),
        YB = (0, yB.A)(OB),
        DB = (0, JB.o)(OB);
      return RB(), qB.add(OB), () => {
        GB(), YB(), DB(), qB.delete(OB)
      }
    }
  },
  42011: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => oB,
      c: () => QB,
      d: () => DB
    });
    let YB = null;

    function DB(BB) {
      YB = BB
    }

    function QB(BB) {
      YB === BB && (YB = null)
    }

    function oB() {
      var BB;
      null === (BB = YB) || void 0 === BB || BB()
    }
  },
  41964: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => DB,
      h: () => JB,
      j: () => QB,
      m: () => PB,
      q: () => MB,
      s: () => zB
    });
    var YB = GB(3210);
    class DB extends Error {
      constructor(BB, OB, GB) {
        super(`${"fetch"===BB?"fetching":"decoding"} ${OB} failed`, GB), this.stage = BB, this.source = OB, this.name = "ShellImageError"
      }
    }
    async function QB(BB) {
      let OB, GB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YB.I,
        QB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      if ("string" === typeof BB) try {
        OB = await GB(BB)
      } catch (oB) {
        throw new DB("fetch", BB, {
          cause: oB
        })
      } else OB = BB;
      try {
        const BB = new Blob([OB.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(BB, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: QB
        })
      } catch (oB) {
        throw new DB("decode", "string" === typeof BB ? BB : `${OB.byteLength} bytes`, {
          cause: oB
        })
      }
    }
    let oB = null;
    const jB = new Map;
    let yB = 1;

    function JB(BB) {
      if (oB = BB, null !== BB) {
        for (const [OB, GB] of jB) BB.ZDB(OB, GB);
        jB.clear()
      }
    }

    function MB(BB) {
      const OB = yB++;
      return oB ? oB.ZDB(OB, BB) : jB.set(OB, BB), OB
    }
    async function PB(BB, OB, GB) {
      const YB = await QB(BB, OB, GB);
      return {
        id: MB(YB),
        width: YB.width,
        height: YB.height
      }
    }

    function zB(BB) {
      var OB;
      const GB = jB.get(BB);
      if (GB) return GB.close(), void jB.delete(BB);
      null === (OB = oB) || void 0 === OB || OB.NDB(BB)
    }
  },
  41911: (BB, OB, GB) => {
    function YB(BB, OB) {
      if (!Object.prototype.hasOwnProperty.call(BB, OB)) throw new TypeError("attempted to use private field on non-instance");
      return BB
    }
    GB.d(OB, {
      e: () => YB
    })
  },
  41913: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => DB
    });
    var YB = 0;

    function DB(BB) {
      return "__private_" + YB++ + "_" + BB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);