export const id = 88;
export const ids = [88];
export const modules = {
  40901: (BB, IB, ZB) => {
    ZB.d(IB, {
      A: () => PB,
      C: () => jB,
      D: () => DB,
      G: () => rB,
      K: () => aB,
      L: () => RB,
      P: () => pB,
      S: () => AB,
      T: () => lB,
      U: () => MB,
      c: () => tB,
      e: () => XB,
      h: () => YB,
      l: () => bB,
      p: () => iB,
      t: () => OB,
      v: () => mB,
      z: () => HB
    });
    var TB = ZB(1454),
      JB = ZB(24),
      oB = ZB(1353),
      GB = ZB(2481),
      vB = ZB(4990),
      kB = ZB(4958);
    let cB, nB = !1,
      hB = !1,
      zB = !1,
      FB = !1;
    const NB = 1300,
      gB = 3e3;
    let qB = 0,
      yB = !1,
      UB = !1,
      WB = 0;
    const dB = 2;
    let CB = !1,
      QB = !1;
    const sB = new Set,
      wB = new Set;

    function OB() {
      return nB
    }

    function YB() {
      return UB
    }

    function iB() {
      return QB
    }

    function pB() {
      return (0, oB.w)() && !QB
    }

    function aB(BB) {
      let IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (BB !== QB) {
        QB = BB;
        for (const BB of [...wB]) BB(QB);
        IB && lB()
      }
    }

    function HB(BB) {
      return wB.add(BB), () => {
        wB.delete(BB)
      }
    }

    function MB() {
      (0, vB.f)(GB.o.Menu, (0, oB.w)() ? 0 : GB.o.Menu)
    }

    function jB() {
      UB = !1, WB = 0, MB(), lB()
    }

    function PB(BB) {
      return sB.add(BB), () => {
        sB.delete(BB)
      }
    }

    function RB(BB) {
      hB = !1, BB !== nB && (nB = BB, FB = !1, clearTimeout(cB), zB = !nB && CB, nB ? (yB = !1, UB = !1, WB = 0) : pB() && !CB && (UB = !0), CB = !1, nB && !pB() && EB(), KB(), zB && lB())
    }

    function rB(BB) {
      BB !== yB && (yB = BB, BB || lB())
    }

    function mB() {
      hB = !1, FB || !0 !== uB() || (FB = !0, clearTimeout(cB), cB = setTimeout(LB, NB))
    }

    function XB() {
      return (!hB || performance.now() - qB > gB) && (hB = (0, kB.H)().lockPointer(), qB = performance.now()), hB
    }

    function LB() {
      eB() && fB() && XB()
    }

    function eB() {
      return pB() && !nB && !yB && !(0, TB.j)()
    }

    function uB() {
      var BB;
      return "undefined" === typeof navigator || null === (BB = navigator.userActivation) || void 0 === BB ? void 0 : BB.isActive
    }

    function fB() {
      return zB && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== uB()
    }

    function lB() {
      pB() ? eB() && !UB && fB() && XB() : nB && !CB && EB()
    }

    function AB() {
      UB ? navigator.vendor.startsWith("Apple") ? xB() : WB = dB : lB()
    }

    function tB() {
      WB > 0 && 0 === --WB && xB()
    }

    function bB() {
      WB = 0
    }

    function xB() {
      eB() && !0 === uB() && XB()
    }

    function EB() {
      CB = !0, (0, kB.H)().unlockPointer()
    }

    function DB() {
      hB = !1, zB = !1, FB = !1, clearTimeout(cB), yB = !1, UB = !1, WB = 0, CB = !1;
      const BB = nB;
      nB = !1, BB && KB()
    }

    function KB() {
      for (const BB of [...sB]) BB(nB);
      JB.l.Gq("pointerLockUpdate", nB)
    }
  },
  40729: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => zB,
      f: () => vB,
      h: () => hB,
      k: () => cB,
      l: () => GB,
      o: () => nB,
      p: () => kB
    });
    let TB = null,
      JB = null,
      oB = null;

    function GB(BB) {
      TB = BB
    }

    function vB() {
      return TB
    }

    function kB(BB) {
      JB = BB
    }

    function cB() {
      return JB
    }

    function nB(BB) {
      oB = BB
    }

    function hB() {
      return oB
    }

    function zB() {
      var BB, IB;
      return !0 === (null === (BB = JB) || void 0 === BB || null === (IB = BB.currentViewer) || void 0 === IB ? void 0 : IB.inPlayback)
    }
  },
  4958: (BB, IB, ZB) => {
    ZB.d(IB, {
      A: () => pB,
      B: () => UB,
      E: () => GB,
      H: () => vB,
      I: () => OB,
      b: () => wB,
      e: () => dB,
      f: () => HB,
      g: () => aB,
      j: () => yB,
      n: () => QB,
      p: () => WB,
      s: () => CB,
      u: () => YB,
      y: () => iB
    });
    var TB = ZB(4960);
    const JB = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let oB = JB;

    function GB(BB) {
      oB = null !== BB && void 0 !== BB ? BB : JB
    }

    function vB() {
      return oB
    }
    const kB = new Set,
      cB = new Set;
    let nB = -1;
    const hB = new Set,
      zB = new Set;
    let FB = 0,
      NB = 0;
    const gB = new Set,
      qB = new Set;

    function yB(BB) {
      return kB.add(BB), () => {
        kB.delete(BB)
      }
    }

    function UB(BB, IB) {
      for (const TB of kB) try {
        TB(BB)
      } catch (ZB) {
        IB(ZB)
      }
    }

    function WB(BB) {
      return cB.add(BB), () => {
        cB.delete(BB)
      }
    }

    function dB(BB, IB) {
      const ZB = nB < 0 ? 0 : BB - nB;
      nB = BB;
      for (const JB of cB) try {
        JB(ZB)
      } catch (TB) {
        IB(TB)
      }
    }

    function CB(BB) {
      return hB.add(BB), () => {
        hB.delete(BB)
      }
    }

    function QB(BB) {
      return zB.add(BB), () => {
        zB.delete(BB)
      }
    }
    let sB = 0;

    function wB(BB) {
      sB += BB
    }

    function OB() {
      const BB = sB;
      return sB = 0, BB
    }

    function YB(BB) {
      return gB.add(BB), () => {
        gB.delete(BB)
      }
    }

    function iB(BB) {
      return qB.add(BB), () => {
        qB.delete(BB)
      }
    }

    function pB() {
      FB = 0, NB = 0, nB = -1
    }

    function aB(BB, IB) {
      if ("paced" === BB) return NB += IB, null;
      if ("drawn" !== BB && "skipped" !== BB) return null;
      const ZB = IB + NB;
      return NB = 0, ZB
    }

    function HB(BB, IB, ZB, JB) {
      const oB = (0, TB.j)(IB),
        GB = BB > 0 ? performance.now() : 0;
      for (let TB = 0; TB < BB; TB++)
        for (const BB of gB) try {
          BB()
        } catch (vB) {
          JB(vB)
        }
      if (BB > 0 && wB(performance.now() - GB), null !== ZB) {
        for (const BB of hB) try {
          BB(ZB)
        } catch (vB) {
          JB(vB)
        }
        FB += ZB
      }
      if ("drawn" === IB) {
        const BB = FB;
        FB = 0;
        for (const IB of zB) try {
          IB(BB)
        } catch (vB) {
          JB(vB)
        }
      }
      for (const TB of qB) try {
        TB(BB, oB)
      } catch (vB) {
        JB(vB)
      }
    }
  },
  40910: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => TB
    });
    const TB = {
      stop: () => TB,
      fade: () => TB,
      rate: () => TB,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => TB,
      setPannerAttr: () => TB,
      setPosition: () => TB
    }
  },
  4978: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => kB,
      c: () => oB,
      e: () => vB
    });
    var TB = ZB(2481),
      JB = ZB(4983);

    function oB(BB) {
      let {
        action: IB,
        flags: ZB
      } = BB;
      return "mid-fire" === IB && 0 !== (ZB & TB.b.AltLeftClick)
    }
    const GB = new Set;

    function vB(BB) {
      return GB.add(BB), () => {
        GB.delete(BB)
      }
    }

    function kB(BB) {
      const IB = JB.d[255 & BB];
      if (void 0 === IB) return;
      const ZB = BB >>> 8 & 255,
        oB = {
          action: IB,
          down: 0 !== (ZB & TB.b.Down),
          flags: ZB,
          press: BB >>> 16
        };
      for (const TB of GB) TB(oB)
    }
  },
  4983: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => JB,
      f: () => oB,
      h: () => GB,
      i: () => TB,
      k: () => vB
    });
    const TB = {
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
      JB = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      oB = {
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
      GB = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      vB = [16]
  },
  40946: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => nB,
      f: () => cB,
      h: () => kB
    });
    var TB = ZB(4975),
      JB = ZB(2481),
      oB = ZB(4990);
    let GB = !1,
      vB = !1;

    function kB(BB) {
      GB = !0;
      try {
        BB()
      } finally {
        GB = !1
      }
    }

    function cB(BB, IB) {
      if (GB) return !1;
      switch (BB) {
        case TB.L.MouseDown:
        case TB.L.MouseUp:
        case TB.L.TouchStart:
        case TB.L.TouchEnd:
        case TB.L.TouchCancel:
        case TB.L.TouchButton:
          return !0;
        case TB.L.KeyDown:
        case TB.L.KeyUp:
          return 0 === (IB & JB.c.Repeat) && !(0, oB.d)(document.activeElement);
        default:
          return !1
      }
    }

    function nB(BB) {
      vB || (vB = !0, queueMicrotask((() => {
        vB = !1, BB()
      })))
    }
  },
  4990: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => vB,
      d: () => GB,
      f: () => cB
    });
    var TB = ZB(2481),
      JB = ZB(2489);
    const oB = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function GB(BB) {
      return BB instanceof HTMLElement && (!!(BB.isContentEditable || BB instanceof HTMLTextAreaElement || BB instanceof HTMLSelectElement) || BB instanceof HTMLInputElement && !oB.has(BB.type))
    }

    function vB(BB) {
      let IB = null;
      const ZB = ZB => {
          const JB = GB(ZB);
          JB !== IB && (IB = JB, BB(TB.d.UiCapture, TB.o.Keyboard, 0, 0, JB ? TB.o.Keyboard : 0))
        },
        JB = BB => {
          ZB(BB.target)
        },
        oB = BB => {
          ZB(BB.relatedTarget)
        },
        vB = () => {
          ZB(document.activeElement)
        },
        kB = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", JB, kB), document.addEventListener("focusout", oB, kB), document.addEventListener("keydown", vB, kB), ZB(document.activeElement), () => {
        document.removeEventListener("focusin", JB, kB), document.removeEventListener("focusout", oB, kB), document.removeEventListener("keydown", vB, kB)
      }
    }
    const kB = new Map;

    function cB(BB, IB) {
      var ZB;
      let TB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      kB.set(TB, (null !== (ZB = kB.get(TB)) && void 0 !== ZB ? ZB : 0) & ~BB | IB & BB);
      let oB = 0;
      for (const JB of kB.values()) oB |= JB;
      return (0, JB.D)(BB, oB & BB)
    }
  },
  40974: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => nB,
      d: () => kB,
      h: () => vB,
      j: () => cB
    });
    var TB = ZB(2012);
    let JB = null,
      oB = 0;
    const GB = new Set;

    function vB() {
      return JB
    }

    function kB() {
      return oB
    }

    function cB(BB) {
      JB = BB, oB++, (0, TB.d)();
      for (const IB of GB) IB()
    }

    function nB(BB) {
      GB.add(BB)
    }
  },
  41023: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => TB
    });
    const TB = 2e3
  },
  40906: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => QB,
      c: () => zB,
      f: () => WB,
      g: () => CB,
      j: () => dB,
      m: () => sB
    });
    var TB = ZB(185),
      JB = ZB(20),
      oB = ZB(24),
      GB = ZB(3071),
      vB = ZB(1362),
      kB = ZB(34110),
      cB = ZB(311),
      nB = ZB(105),
      hB = ZB(179);

    function zB() {
      var BB;
      const IB = (0, GB.P)(),
        ZB = function(BB, IB) {
          return {
            sampleCount: BB.antiAliasing ? 4 : 1,
            n: (0, GB.E)(BB.pixelScale, IB),
            pixelated: (0, GB.D)(BB.pixelSmoothing)
          }
        }(JB.d.get("clientEscMenuOptions"), IB);
      return ZB.sampleCount > 1 && (0, kB.e)() && (ZB.sampleCount = 1), ZB.n = null !== (BB = (0, kB.q)()) && void 0 !== BB ? BB : ZB.n, TB.g.includes((0, nB.getSoftwareRenderer)()) && (ZB.sampleCount = 1, ZB.n = Math.max(ZB.n, (0, GB.E)(hB.p.pixelScale, IB))), ZB
    }
    let FB = null,
      NB = null;
    const gB = new Set;
    let qB = null;

    function yB() {
      for (const BB of gB) BB()
    }

    function UB() {
      if (null === FB) {
        const BB = document.createElement("div");
        BB.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", BB.setAttribute("aria-hidden", "true"), document.body.append(BB), NB = BB, FB = new GB.d(BB, yB)
      }
      return FB
    }

    function WB(BB) {
      const IB = (0, GB.o)(),
        [ZB, TB] = UB().size(IB);
      return (0, GB.g)(ZB, TB, IB, BB.n)
    }

    function dB(BB) {
      var IB, ZB, TB, JB;
      const oB = (0, GB.o)(),
        [kB, cB] = UB().size(oB);
      if (kB <= 0 || cB <= 0) return null;
      const nB = (0, GB.g)(kB, cB, oB, zB().n);
      return (0, GB.f)(BB, nB), BB.style.left = `${null!==(IB=null===(ZB=qB)||void 0===ZB?void 0:ZB.rect.left)&&void 0!==IB?IB:0}px`, BB.style.top = `${null!==(TB=null===(JB=qB)||void 0===JB?void 0:JB.rect.top)&&void 0!==TB?TB:0}px`, (0, vB.O)(BB.style, qB), nB
    }

    function CB(BB) {
      qB = BB, UB(), (0, vB.E)(NB.style, BB, ""), yB()
    }

    function QB(BB, IB) {
      BB.style.imageRendering = (0, GB.Q)(IB.pixelated)
    }

    function sB(BB, IB) {
      const ZB = (0, oB.p)("appManagerUpdated|clientEscMenuOptions", (() => {
          QB(BB, zB()), IB()
        })),
        TB = (0, kB.B)(IB),
        JB = (0, cB.j)(IB);
      return UB(), gB.add(IB), () => {
        ZB(), TB(), JB(), gB.delete(IB)
      }
    }
  },
  41028: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => GB,
      f: () => oB,
      h: () => JB
    });
    let TB = null;

    function JB(BB) {
      TB = BB
    }

    function oB(BB) {
      TB === BB && (TB = null)
    }

    function GB() {
      var BB;
      null === (BB = TB) || void 0 === BB || BB()
    }
  },
  40971: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => JB,
      g: () => cB,
      j: () => oB,
      k: () => hB,
      o: () => nB,
      s: () => zB
    });
    var TB = ZB(3043);
    class JB extends Error {
      constructor(BB, IB, ZB) {
        super(`${"fetch"===BB?"fetching":"decoding"} ${IB} failed`, ZB), this.stage = BB, this.source = IB, this.name = "ShellImageError"
      }
    }
    async function oB(BB) {
      let IB, ZB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TB.K,
        oB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      if ("string" === typeof BB) try {
        IB = await ZB(BB)
      } catch (GB) {
        throw new JB("fetch", BB, {
          cause: GB
        })
      } else IB = BB;
      try {
        const BB = new Blob([IB.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(BB, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: oB
        })
      } catch (GB) {
        throw new JB("decode", "string" === typeof BB ? BB : `${IB.byteLength} bytes`, {
          cause: GB
        })
      }
    }
    let GB = null;
    const vB = new Map;
    let kB = 1;

    function cB(BB) {
      if (GB = BB, null !== BB) {
        for (const [IB, ZB] of vB) BB.WTB(IB, ZB);
        vB.clear()
      }
    }

    function nB(BB) {
      const IB = kB++;
      return GB ? GB.WTB(IB, BB) : vB.set(IB, BB), IB
    }
    async function hB(BB, IB, ZB) {
      const TB = await oB(BB, IB, ZB);
      return {
        id: nB(TB),
        width: TB.width,
        height: TB.height
      }
    }

    function zB(BB) {
      var IB;
      const ZB = vB.get(BB);
      if (ZB) return ZB.close(), void vB.delete(BB);
      null === (IB = GB) || void 0 === IB || IB.dTB(BB)
    }
  },
  40919: (BB, IB, ZB) => {
    function TB(BB, IB) {
      if (!Object.prototype.hasOwnProperty.call(BB, IB)) throw new TypeError("attempted to use private field on non-instance");
      return BB
    }
    ZB.d(IB, {
      b: () => TB
    })
  },
  40928: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => JB
    });
    var TB = 0;

    function JB(BB) {
      return "__private_" + TB++ + "_" + BB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);