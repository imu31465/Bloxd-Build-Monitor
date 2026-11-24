export const id = 88;
export const ids = [88];
export const modules = {
  40956: (BB, jB, zB) => {
    zB.d(jB, {
      A: () => DB,
      B: () => VB,
      E: () => YB,
      G: () => bB,
      K: () => XB,
      L: () => HB,
      O: () => hB,
      R: () => oB,
      S: () => wB,
      T: () => lB,
      V: () => FB,
      e: () => xB,
      i: () => AB,
      m: () => qB,
      o: () => KB,
      s: () => fB,
      w: () => iB,
      z: () => ZB
    });
    var QB = zB(1418),
      nB = zB(31),
      dB = zB(1316),
      IB = zB(2482),
      NB = zB(4909),
      uB = zB(4873);
    let UB, aB = !1,
      pB = !1,
      rB = !1,
      sB = !1;
    const JB = 1300,
      mB = 3e3;
    let yB = 0,
      kB = !1,
      GB = !1,
      LB = 0;
    const gB = 2;
    let tB = !1,
      SB = !1;
    const MB = new Set,
      EB = new Set;

    function iB() {
      return aB
    }

    function qB() {
      return GB
    }

    function fB() {
      return SB
    }

    function oB() {
      return (0, dB.y)() && !SB
    }

    function HB(BB) {
      let jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (BB !== SB) {
        SB = BB;
        for (const BB of [...EB]) BB(SB);
        jB && lB()
      }
    }

    function DB(BB) {
      return EB.add(BB), () => {
        EB.delete(BB)
      }
    }

    function FB() {
      (0, NB.l)(IB.t.Menu, (0, dB.y)() ? 0 : IB.t.Menu)
    }

    function YB() {
      GB = !1, LB = 0, FB(), lB()
    }

    function VB(BB) {
      return MB.add(BB), () => {
        MB.delete(BB)
      }
    }

    function hB(BB) {
      pB = !1, BB !== aB && (aB = BB, sB = !1, clearTimeout(UB), rB = !aB && tB, aB ? (kB = !1, GB = !1, LB = 0) : oB() && !tB && (GB = !0), tB = !1, aB && !oB() && cB(), vB(), rB && lB())
    }

    function XB(BB) {
      BB !== kB && (kB = BB, BB || lB())
    }

    function ZB() {
      pB = !1, sB || !0 !== WB() || (sB = !0, clearTimeout(UB), UB = setTimeout(TB, JB))
    }

    function AB() {
      return (!pB || performance.now() - yB > mB) && (pB = (0, uB.I)().lockPointer(), yB = performance.now()), pB
    }

    function TB() {
      PB() && eB() && AB()
    }

    function PB() {
      return oB() && !aB && !kB && !(0, QB.l)()
    }

    function WB() {
      var BB;
      return "undefined" === typeof navigator || null === (BB = navigator.userActivation) || void 0 === BB ? void 0 : BB.isActive
    }

    function eB() {
      return rB && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== WB()
    }

    function lB() {
      oB() ? PB() && !GB && eB() && AB() : aB && !tB && cB()
    }

    function wB() {
      GB ? navigator.vendor.startsWith("Apple") ? CB() : LB = gB : lB()
    }

    function xB() {
      LB > 0 && 0 === --LB && CB()
    }

    function KB() {
      LB = 0
    }

    function CB() {
      PB() && !0 === WB() && AB()
    }

    function cB() {
      tB = !0, (0, uB.I)().unlockPointer()
    }

    function bB() {
      pB = !1, rB = !1, sB = !1, clearTimeout(UB), kB = !1, GB = !1, LB = 0, tB = !1;
      const BB = aB;
      aB = !1, BB && vB()
    }

    function vB() {
      for (const BB of [...MB]) BB(aB);
      nB.n.Ly("pointerLockUpdate", aB)
    }
  },
  40766: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => rB,
      d: () => NB,
      g: () => pB,
      k: () => UB,
      m: () => IB,
      o: () => aB,
      q: () => uB
    });
    let QB = null,
      nB = null,
      dB = null;

    function IB(BB) {
      QB = BB
    }

    function NB() {
      return QB
    }

    function uB(BB) {
      nB = BB
    }

    function UB() {
      return nB
    }

    function aB(BB) {
      dB = BB
    }

    function pB() {
      return dB
    }

    function rB() {
      var BB, jB;
      return !0 === (null === (BB = nB) || void 0 === BB || null === (jB = BB.currentViewer) || void 0 === jB ? void 0 : jB.inPlayback)
    }
  },
  4873: (BB, jB, zB) => {
    zB.d(jB, {
      B: () => fB,
      E: () => oB,
      F: () => GB,
      H: () => IB,
      I: () => NB,
      K: () => iB,
      e: () => EB,
      g: () => gB,
      h: () => DB,
      l: () => HB,
      p: () => kB,
      r: () => SB,
      t: () => LB,
      u: () => tB,
      y: () => qB
    });
    var QB = zB(4879);
    const nB = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let dB = nB;

    function IB(BB) {
      dB = null !== BB && void 0 !== BB ? BB : nB
    }

    function NB() {
      return dB
    }
    const uB = new Set,
      UB = new Set;
    let aB = -1;
    const pB = new Set,
      rB = new Set;
    let sB = 0,
      JB = 0;
    const mB = new Set,
      yB = new Set;

    function kB(BB) {
      return uB.add(BB), () => {
        uB.delete(BB)
      }
    }

    function GB(BB, jB) {
      for (const QB of uB) try {
        QB(BB)
      } catch (zB) {
        jB(zB)
      }
    }

    function LB(BB) {
      return UB.add(BB), () => {
        UB.delete(BB)
      }
    }

    function gB(BB, jB) {
      const zB = aB < 0 ? 0 : BB - aB;
      aB = BB;
      for (const nB of UB) try {
        nB(zB)
      } catch (QB) {
        jB(QB)
      }
    }

    function tB(BB) {
      return pB.add(BB), () => {
        pB.delete(BB)
      }
    }

    function SB(BB) {
      return rB.add(BB), () => {
        rB.delete(BB)
      }
    }
    let MB = 0;

    function EB(BB) {
      MB += BB
    }

    function iB() {
      const BB = MB;
      return MB = 0, BB
    }

    function qB(BB) {
      return mB.add(BB), () => {
        mB.delete(BB)
      }
    }

    function fB(BB) {
      return yB.add(BB), () => {
        yB.delete(BB)
      }
    }

    function oB() {
      sB = 0, JB = 0, aB = -1
    }

    function HB(BB, jB) {
      if ("paced" === BB) return JB += jB, null;
      if ("drawn" !== BB && "skipped" !== BB) return null;
      const zB = jB + JB;
      return JB = 0, zB
    }

    function DB(BB, jB, zB, nB) {
      const dB = (0, QB.i)(jB),
        IB = BB > 0 ? performance.now() : 0;
      for (let QB = 0; QB < BB; QB++)
        for (const BB of mB) try {
          BB()
        } catch (NB) {
          nB(NB)
        }
      if (BB > 0 && EB(performance.now() - IB), null !== zB) {
        for (const BB of pB) try {
          BB(zB)
        } catch (NB) {
          nB(NB)
        }
        sB += zB
      }
      if ("drawn" === jB) {
        const BB = sB;
        sB = 0;
        for (const jB of rB) try {
          jB(BB)
        } catch (NB) {
          nB(NB)
        }
      }
      for (const QB of yB) try {
        QB(BB, dB)
      } catch (NB) {
        nB(NB)
      }
    }
  },
  40965: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => QB
    });
    const QB = {
      stop: () => QB,
      fade: () => QB,
      rate: () => QB,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => QB,
      setPannerAttr: () => QB,
      setPosition: () => QB
    }
  },
  4897: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => uB,
      g: () => dB,
      k: () => NB
    });
    var QB = zB(2482),
      nB = zB(4906);

    function dB(BB) {
      let {
        action: jB,
        flags: zB
      } = BB;
      return "mid-fire" === jB && 0 !== (zB & QB.c.AltLeftClick)
    }
    const IB = new Set;

    function NB(BB) {
      return IB.add(BB), () => {
        IB.delete(BB)
      }
    }

    function uB(BB) {
      const jB = nB.e[255 & BB];
      if (void 0 === jB) return;
      const zB = BB >>> 8 & 255,
        dB = {
          action: jB,
          down: 0 !== (zB & QB.c.Down),
          flags: zB,
          press: BB >>> 16
        };
      for (const QB of IB) QB(dB)
    }
  },
  4906: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => nB,
      i: () => dB,
      m: () => IB,
      n: () => QB,
      r: () => NB
    });
    const QB = {
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
      nB = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      dB = {
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
      IB = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      NB = [16]
  },
  41e3: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => aB,
      h: () => UB,
      i: () => uB
    });
    var QB = zB(4893),
      nB = zB(2482),
      dB = zB(4909);
    let IB = !1,
      NB = !1;

    function uB(BB) {
      IB = !0;
      try {
        BB()
      } finally {
        IB = !1
      }
    }

    function UB(BB, jB) {
      if (IB) return !1;
      switch (BB) {
        case QB.D.MouseDown:
        case QB.D.MouseUp:
        case QB.D.TouchStart:
        case QB.D.TouchEnd:
        case QB.D.TouchCancel:
        case QB.D.TouchButton:
          return !0;
        case QB.D.KeyDown:
        case QB.D.KeyUp:
          return 0 === (jB & nB.g.Repeat) && !(0, dB.h)(document.activeElement);
        default:
          return !1
      }
    }

    function aB(BB) {
      NB || (NB = !0, queueMicrotask((() => {
        NB = !1, BB()
      })))
    }
  },
  4909: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => NB,
      h: () => IB,
      l: () => UB
    });
    var QB = zB(2482),
      nB = zB(2491);
    const dB = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function IB(BB) {
      return BB instanceof HTMLElement && (!!(BB.isContentEditable || BB instanceof HTMLTextAreaElement || BB instanceof HTMLSelectElement) || BB instanceof HTMLInputElement && !dB.has(BB.type))
    }

    function NB(BB) {
      let jB = null;
      const zB = zB => {
          const nB = IB(zB);
          nB !== jB && (jB = nB, BB(QB.j.UiCapture, QB.t.Keyboard, 0, 0, nB ? QB.t.Keyboard : 0))
        },
        nB = BB => {
          zB(BB.target)
        },
        dB = BB => {
          zB(BB.relatedTarget)
        },
        NB = () => {
          zB(document.activeElement)
        },
        uB = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", nB, uB), document.addEventListener("focusout", dB, uB), document.addEventListener("keydown", NB, uB), zB(document.activeElement), () => {
        document.removeEventListener("focusin", nB, uB), document.removeEventListener("focusout", dB, uB), document.removeEventListener("keydown", NB, uB)
      }
    }
    const uB = new Map;

    function UB(BB, jB) {
      var zB;
      let QB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      uB.set(QB, (null !== (zB = uB.get(QB)) && void 0 !== zB ? zB : 0) & ~BB | jB & BB);
      let dB = 0;
      for (const nB of uB.values()) dB |= nB;
      return (0, nB.D)(BB, dB & BB)
    }
  },
  41034: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => aB,
      e: () => uB,
      g: () => NB,
      i: () => UB
    });
    var QB = zB(1995);
    let nB = null,
      dB = 0;
    const IB = new Set;

    function NB() {
      return nB
    }

    function uB() {
      return dB
    }

    function UB(BB) {
      nB = BB, dB++, (0, QB.e)();
      for (const jB of IB) jB()
    }

    function aB(BB) {
      IB.add(BB)
    }
  },
  41070: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => QB
    });
    const QB = 2e3
  },
  40963: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => SB,
      g: () => rB,
      j: () => LB,
      k: () => tB,
      m: () => gB,
      o: () => MB
    });
    var QB = zB(186),
      nB = zB(28),
      dB = zB(31),
      IB = zB(3004),
      NB = zB(1325),
      uB = zB(34179),
      UB = zB(321),
      aB = zB(106),
      pB = zB(184);

    function rB() {
      var BB;
      const jB = (0, IB.L)(),
        zB = function(BB, jB) {
          return {
            sampleCount: BB.antiAliasing ? 4 : 1,
            n: (0, IB.B)(BB.pixelScale, jB),
            pixelated: (0, IB.x)(BB.pixelSmoothing)
          }
        }(nB.c.get("clientEscMenuOptions"), jB);
      return zB.sampleCount > 1 && (0, uB.c)() && (zB.sampleCount = 1), zB.n = null !== (BB = (0, uB.l)()) && void 0 !== BB ? BB : zB.n, QB.h.includes((0, aB.getSoftwareRenderer)()) && (zB.sampleCount = 1, zB.n = Math.max(zB.n, (0, IB.B)(pB.p.pixelScale, jB))), zB
    }
    let sB = null,
      JB = null;
    const mB = new Set;
    let yB = null;

    function kB() {
      for (const BB of mB) BB()
    }

    function GB() {
      if (null === sB) {
        const BB = document.createElement("div");
        BB.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", BB.setAttribute("aria-hidden", "true"), document.body.append(BB), JB = BB, sB = new IB.d(BB, kB)
      }
      return sB
    }

    function LB(BB) {
      const jB = (0, IB.m)(),
        [zB, QB] = GB().size(jB);
      return (0, IB.i)(zB, QB, jB, BB.n)
    }

    function gB(BB) {
      var jB, zB, QB, nB;
      const dB = (0, IB.m)(),
        [uB, UB] = GB().size(dB);
      if (uB <= 0 || UB <= 0) return null;
      const aB = (0, IB.i)(uB, UB, dB, rB().n);
      return (0, IB.f)(BB, aB), BB.style.left = `${null!==(jB=null===(zB=yB)||void 0===zB?void 0:zB.rect.left)&&void 0!==jB?jB:0}px`, BB.style.top = `${null!==(QB=null===(nB=yB)||void 0===nB?void 0:nB.rect.top)&&void 0!==QB?QB:0}px`, (0, NB.N)(BB.style, yB), aB
    }

    function tB(BB) {
      yB = BB, GB(), (0, NB.H)(JB.style, BB, ""), kB()
    }

    function SB(BB, jB) {
      BB.style.imageRendering = (0, IB.O)(jB.pixelated)
    }

    function MB(BB, jB) {
      const zB = (0, dB.q)("appManagerUpdated|clientEscMenuOptions", (() => {
          SB(BB, rB()), jB()
        })),
        QB = (0, uB.y)(jB),
        nB = (0, UB.l)(jB);
      return GB(), mB.add(jB), () => {
        zB(), QB(), nB(), mB.delete(jB)
      }
    }
  },
  41078: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => IB,
      g: () => dB,
      i: () => nB
    });
    let QB = null;

    function nB(BB) {
      QB = BB
    }

    function dB(BB) {
      QB === BB && (QB = null)
    }

    function IB() {
      var BB;
      null === (BB = QB) || void 0 === BB || BB()
    }
  },
  41028: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => nB,
      f: () => UB,
      i: () => dB,
      j: () => pB,
      m: () => aB,
      q: () => rB
    });
    var QB = zB(2974);
    class nB extends Error {
      constructor(BB, jB, zB) {
        super(`${"fetch"===BB?"fetching":"decoding"} ${jB} failed`, zB), this.stage = BB, this.source = jB, this.name = "ShellImageError"
      }
    }
    async function dB(BB) {
      let jB, zB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QB.L,
        dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      if ("string" === typeof BB) try {
        jB = await zB(BB)
      } catch (IB) {
        throw new nB("fetch", BB, {
          cause: IB
        })
      } else jB = BB;
      try {
        const BB = new Blob([jB.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(BB, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: dB
        })
      } catch (IB) {
        throw new nB("decode", "string" === typeof BB ? BB : `${jB.byteLength} bytes`, {
          cause: IB
        })
      }
    }
    let IB = null;
    const NB = new Map;
    let uB = 1;

    function UB(BB) {
      if (IB = BB, null !== BB) {
        for (const [jB, zB] of NB) BB.KzB(jB, zB);
        NB.clear()
      }
    }

    function aB(BB) {
      const jB = uB++;
      return IB ? IB.KzB(jB, BB) : NB.set(jB, BB), jB
    }
    async function pB(BB, jB, zB) {
      const QB = await dB(BB, jB, zB);
      return {
        id: aB(QB),
        width: QB.width,
        height: QB.height
      }
    }

    function rB(BB) {
      var jB;
      const zB = NB.get(BB);
      if (zB) return zB.close(), void NB.delete(BB);
      null === (jB = IB) || void 0 === jB || jB.CzB(BB)
    }
  },
  40974: (BB, jB, zB) => {
    function QB(BB, jB) {
      if (!Object.prototype.hasOwnProperty.call(BB, jB)) throw new TypeError("attempted to use private field on non-instance");
      return BB
    }
    zB.d(jB, {
      d: () => QB
    })
  },
  40977: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => nB
    });
    var QB = 0;

    function nB(BB) {
      return "__private_" + QB++ + "_" + BB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);