export const id = 87;
export const ids = [87];
export const modules = {
  40796: (DD, zD, wD) => {
    wD.d(zD, {
      D: () => lD,
      H: () => TD,
      L: () => iD,
      N: () => xD,
      P: () => oD,
      T: () => eD,
      U: () => jD,
      c: () => aD,
      f: () => ND,
      g: () => PD,
      i: () => uD,
      l: () => CD,
      m: () => VD,
      p: () => WD,
      s: () => bD,
      t: () => SD,
      x: () => dD,
      z: () => FD
    });
    var pD = wD(1383),
      sD = wD(25),
      KD = wD(1299),
      rD = wD(2382),
      LD = wD(4832),
      cD = wD(4800);
    let gD, RD = !1,
      AD = !1,
      UD = !1,
      fD = !1;
    const ID = 1300,
      BD = 3e3;
    let GD = 0,
      hD = !1,
      nD = !1,
      MD = 0;
    const OD = 2;
    let JD = !1,
      ED = !1;
    const QD = new Set,
      XD = new Set;

    function VD() {
      return RD
    }

    function PD() {
      return nD
    }

    function CD() {
      return ED
    }

    function xD() {
      return (0, KD.s)() && !ED
    }

    function TD(DD) {
      let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (DD !== ED) {
        ED = DD;
        for (const DD of [...XD]) DD(ED);
        zD && eD()
      }
    }

    function bD(DD) {
      return XD.add(DD), () => {
        XD.delete(DD)
      }
    }

    function jD() {
      (0, LD.j)(rD.s.Menu, (0, KD.s)() ? 0 : rD.s.Menu)
    }

    function dD() {
      nD = !1, MD = 0, jD(), eD()
    }

    function SD(DD) {
      return QD.add(DD), () => {
        QD.delete(DD)
      }
    }

    function iD(DD) {
      AD = !1, DD !== RD && (RD = DD, fD = !1, clearTimeout(gD), UD = !RD && JD, RD ? (hD = !1, nD = !1, MD = 0) : xD() && !JD && (nD = !0), JD = !1, RD && !xD() && tD(), YD(), UD && eD())
    }

    function lD(DD) {
      DD !== hD && (hD = DD, DD || eD())
    }

    function WD() {
      AD = !1, fD || !0 !== kD() || (fD = !0, clearTimeout(gD), gD = setTimeout(ZD, ID))
    }

    function ND() {
      return (!AD || performance.now() - GD > BD) && (AD = (0, cD.G)().lockPointer(), GD = performance.now()), AD
    }

    function ZD() {
      yD() && mD() && ND()
    }

    function yD() {
      return xD() && !RD && !hD && !(0, pD.f)()
    }

    function kD() {
      var DD;
      return "undefined" === typeof navigator || null === (DD = navigator.userActivation) || void 0 === DD ? void 0 : DD.isActive
    }

    function mD() {
      return UD && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== kD()
    }

    function eD() {
      xD() ? yD() && !nD && mD() && ND() : RD && !JD && tD()
    }

    function oD() {
      nD ? navigator.vendor.startsWith("Apple") ? vD() : MD = OD : eD()
    }

    function aD() {
      MD > 0 && 0 === --MD && vD()
    }

    function uD() {
      MD = 0
    }

    function vD() {
      yD() && !0 === kD() && ND()
    }

    function tD() {
      JD = !0, (0, cD.G)().unlockPointer()
    }

    function FD() {
      AD = !1, UD = !1, fD = !1, clearTimeout(gD), hD = !1, nD = !1, MD = 0, JD = !1;
      const DD = RD;
      RD = !1, DD && YD()
    }

    function YD() {
      for (const DD of [...QD]) DD(RD);
      sD.l.KG("pointerLockUpdate", RD)
    }
  },
  40598: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => UD,
      g: () => LD,
      k: () => AD,
      m: () => gD,
      n: () => rD,
      r: () => RD,
      v: () => cD
    });
    let pD = null,
      sD = null,
      KD = null;

    function rD(DD) {
      pD = DD
    }

    function LD() {
      return pD
    }

    function cD(DD) {
      sD = DD
    }

    function gD() {
      return sD
    }

    function RD(DD) {
      KD = DD
    }

    function AD() {
      return KD
    }

    function UD() {
      var DD, zD;
      return !0 === (null === (DD = sD) || void 0 === DD || null === (zD = DD.currentViewer) || void 0 === zD ? void 0 : zD.inPlayback)
    }
  },
  4800: (DD, zD, wD) => {
    wD.d(zD, {
      A: () => nD,
      C: () => rD,
      G: () => LD,
      I: () => VD,
      b: () => XD,
      c: () => OD,
      f: () => bD,
      h: () => TD,
      l: () => hD,
      p: () => ED,
      q: () => MD,
      t: () => JD,
      v: () => PD,
      w: () => CD,
      y: () => xD
    });
    var pD = wD(4808);
    const sD = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let KD = sD;

    function rD(DD) {
      KD = null !== DD && void 0 !== DD ? DD : sD
    }

    function LD() {
      return KD
    }
    const cD = new Set,
      gD = new Set;
    let RD = -1;
    const AD = new Set,
      UD = new Set;
    let fD = 0,
      ID = 0;
    const BD = new Set,
      GD = new Set;

    function hD(DD) {
      return cD.add(DD), () => {
        cD.delete(DD)
      }
    }

    function nD(DD, zD) {
      for (const pD of cD) try {
        pD(DD)
      } catch (wD) {
        zD(wD)
      }
    }

    function MD(DD) {
      return gD.add(DD), () => {
        gD.delete(DD)
      }
    }

    function OD(DD, zD) {
      const wD = RD < 0 ? 0 : DD - RD;
      RD = DD;
      for (const sD of gD) try {
        sD(wD)
      } catch (pD) {
        zD(pD)
      }
    }

    function JD(DD) {
      return AD.add(DD), () => {
        AD.delete(DD)
      }
    }

    function ED(DD) {
      return UD.add(DD), () => {
        UD.delete(DD)
      }
    }
    let QD = 0;

    function XD(DD) {
      QD += DD
    }

    function VD() {
      const DD = QD;
      return QD = 0, DD
    }

    function PD(DD) {
      return BD.add(DD), () => {
        BD.delete(DD)
      }
    }

    function CD(DD) {
      return GD.add(DD), () => {
        GD.delete(DD)
      }
    }

    function xD() {
      fD = 0, ID = 0, RD = -1
    }

    function TD(DD, zD) {
      if ("paced" === DD) return ID += zD, null;
      if ("drawn" !== DD && "skipped" !== DD) return null;
      const wD = zD + ID;
      return ID = 0, wD
    }

    function bD(DD, zD, wD, sD) {
      const KD = (0, pD.f)(zD),
        rD = DD > 0 ? performance.now() : 0;
      for (let pD = 0; pD < DD; pD++)
        for (const DD of BD) try {
          DD()
        } catch (LD) {
          sD(LD)
        }
      if (DD > 0 && XD(performance.now() - rD), null !== wD) {
        for (const DD of AD) try {
          DD(wD)
        } catch (LD) {
          sD(LD)
        }
        fD += wD
      }
      if ("drawn" === zD) {
        const DD = fD;
        fD = 0;
        for (const zD of UD) try {
          zD(DD)
        } catch (LD) {
          sD(LD)
        }
      }
      for (const pD of GD) try {
        pD(DD, KD)
      } catch (LD) {
        sD(LD)
      }
    }
  },
  40801: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => pD
    });
    const pD = {
      stop: () => pD,
      fade: () => pD,
      rate: () => pD,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => pD,
      setPannerAttr: () => pD,
      setPosition: () => pD
    }
  },
  4823: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => cD,
      h: () => KD,
      l: () => LD
    });
    var pD = wD(2382),
      sD = wD(4827);

    function KD(DD) {
      let {
        action: zD,
        flags: wD
      } = DD;
      return "mid-fire" === zD && 0 !== (wD & pD.c.AltLeftClick)
    }
    const rD = new Set;

    function LD(DD) {
      return rD.add(DD), () => {
        rD.delete(DD)
      }
    }

    function cD(DD) {
      const zD = sD.c[255 & DD];
      if (void 0 === zD) return;
      const wD = DD >>> 8 & 255,
        KD = {
          action: zD,
          down: 0 !== (wD & pD.c.Down),
          flags: wD,
          press: DD >>> 16
        };
      for (const pD of rD) pD(KD)
    }
  },
  4827: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => sD,
      f: () => KD,
      i: () => rD,
      j: () => pD,
      l: () => LD
    });
    const pD = {
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
      sD = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      KD = {
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
      rD = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      LD = [16]
  },
  40835: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => RD,
      e: () => gD,
      g: () => cD
    });
    var pD = wD(4820),
      sD = wD(2382),
      KD = wD(4832);
    let rD = !1,
      LD = !1;

    function cD(DD) {
      rD = !0;
      try {
        DD()
      } finally {
        rD = !1
      }
    }

    function gD(DD, zD) {
      if (rD) return !1;
      switch (DD) {
        case pD.J.MouseDown:
        case pD.J.MouseUp:
        case pD.J.TouchStart:
        case pD.J.TouchEnd:
        case pD.J.TouchCancel:
        case pD.J.TouchButton:
          return !0;
        case pD.J.KeyDown:
        case pD.J.KeyUp:
          return 0 === (zD & sD.d.Repeat) && !(0, KD.g)(document.activeElement);
        default:
          return !1
      }
    }

    function RD(DD) {
      LD || (LD = !0, queueMicrotask((() => {
        LD = !1, DD()
      })))
    }
  },
  4832: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => LD,
      g: () => rD,
      j: () => gD
    });
    var pD = wD(2382),
      sD = wD(2389);
    const KD = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function rD(DD) {
      return DD instanceof HTMLElement && (!!(DD.isContentEditable || DD instanceof HTMLTextAreaElement || DD instanceof HTMLSelectElement) || DD instanceof HTMLInputElement && !KD.has(DD.type))
    }

    function LD(DD) {
      let zD = null;
      const wD = wD => {
          const sD = rD(wD);
          sD !== zD && (zD = sD, DD(pD.h.UiCapture, pD.s.Keyboard, 0, 0, sD ? pD.s.Keyboard : 0))
        },
        sD = DD => {
          wD(DD.target)
        },
        KD = DD => {
          wD(DD.relatedTarget)
        },
        LD = () => {
          wD(document.activeElement)
        },
        cD = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", sD, cD), document.addEventListener("focusout", KD, cD), document.addEventListener("keydown", LD, cD), wD(document.activeElement), () => {
        document.removeEventListener("focusin", sD, cD), document.removeEventListener("focusout", KD, cD), document.removeEventListener("keydown", LD, cD)
      }
    }
    const cD = new Map;

    function gD(DD, zD) {
      var wD;
      let pD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      cD.set(pD, (null !== (wD = cD.get(pD)) && void 0 !== wD ? wD : 0) & ~DD | zD & DD);
      let KD = 0;
      for (const sD of cD.values()) KD |= sD;
      return (0, sD.A)(DD, KD & DD)
    }
  },
  40866: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => RD,
      d: () => cD,
      e: () => LD,
      f: () => gD
    });
    var pD = wD(1941);
    let sD = null,
      KD = 0;
    const rD = new Set;

    function LD() {
      return sD
    }

    function cD() {
      return KD
    }

    function gD(DD) {
      sD = DD, KD++, (0, pD.b)();
      for (const zD of rD) zD()
    }

    function RD(DD) {
      rD.add(DD)
    }
  },
  40907: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => pD
    });
    const pD = 2e3
  },
  40799: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => ED,
      e: () => UD,
      f: () => MD,
      i: () => JD,
      k: () => OD,
      n: () => QD
    });
    var pD = wD(173),
      sD = wD(20),
      KD = wD(25),
      rD = wD(2890),
      LD = wD(1309),
      cD = wD(34158),
      gD = wD(309),
      RD = wD(103),
      AD = wD(165);

    function UD() {
      var DD;
      const zD = (0, rD.K)(),
        wD = function(DD, zD) {
          return {
            sampleCount: DD.antiAliasing ? 4 : 1,
            n: (0, rD.B)(DD.pixelScale, zD),
            pixelated: (0, rD.A)(DD.pixelSmoothing)
          }
        }(sD.e.get("clientEscMenuOptions"), zD);
      return wD.sampleCount > 1 && (0, cD.b)() && (wD.sampleCount = 1), wD.n = null !== (DD = (0, cD.n)()) && void 0 !== DD ? DD : wD.n, pD.j.includes((0, RD.getSoftwareRenderer)()) && (wD.sampleCount = 1, wD.n = Math.max(wD.n, (0, rD.B)(AD.t.pixelScale, zD))), wD
    }
    let fD = null,
      ID = null;
    const BD = new Set;
    let GD = null;

    function hD() {
      for (const DD of BD) DD()
    }

    function nD() {
      if (null === fD) {
        const DD = document.createElement("div");
        DD.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", DD.setAttribute("aria-hidden", "true"), document.body.append(DD), ID = DD, fD = new rD.c(DD, hD)
      }
      return fD
    }

    function MD(DD) {
      const zD = (0, rD.o)(),
        [wD, pD] = nD().size(zD);
      return (0, rD.j)(wD, pD, zD, DD.n)
    }

    function OD(DD) {
      var zD, wD, pD, sD;
      const KD = (0, rD.o)(),
        [cD, gD] = nD().size(KD);
      if (cD <= 0 || gD <= 0) return null;
      const RD = (0, rD.j)(cD, gD, KD, UD().n);
      return (0, rD.f)(DD, RD), DD.style.left = `${null!==(zD=null===(wD=GD)||void 0===wD?void 0:wD.rect.left)&&void 0!==zD?zD:0}px`, DD.style.top = `${null!==(pD=null===(sD=GD)||void 0===sD?void 0:sD.rect.top)&&void 0!==pD?pD:0}px`, (0, LD.M)(DD.style, GD), RD
    }

    function JD(DD) {
      GD = DD, nD(), (0, LD.H)(ID.style, DD, ""), hD()
    }

    function ED(DD, zD) {
      DD.style.imageRendering = (0, rD.M)(zD.pixelated)
    }

    function QD(DD, zD) {
      const wD = (0, KD.o)("appManagerUpdated|clientEscMenuOptions", (() => {
          ED(DD, UD()), zD()
        })),
        pD = (0, cD.B)(zD),
        sD = (0, gD.k)(zD);
      return nD(), BD.add(zD), () => {
        wD(), pD(), sD(), BD.delete(zD)
      }
    }
  },
  40909: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => rD,
      e: () => KD,
      h: () => sD
    });
    let pD = null;

    function sD(DD) {
      pD = DD
    }

    function KD(DD) {
      pD === DD && (pD = null)
    }

    function rD() {
      var DD;
      null === (DD = pD) || void 0 === DD || DD()
    }
  },
  40863: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => sD,
      f: () => gD,
      h: () => KD,
      k: () => AD,
      m: () => RD,
      n: () => UD
    });
    var pD = wD(2868);
    class sD extends Error {
      constructor(DD, zD, wD) {
        super(`${"fetch"===DD?"fetching":"decoding"} ${zD} failed`, wD), this.stage = DD, this.source = zD, this.name = "ShellImageError"
      }
    }
    async function KD(DD) {
      let zD, wD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pD.C,
        KD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      if ("string" === typeof DD) try {
        zD = await wD(DD)
      } catch (rD) {
        throw new sD("fetch", DD, {
          cause: rD
        })
      } else zD = DD;
      try {
        const DD = new Blob([zD.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(DD, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: KD
        })
      } catch (rD) {
        throw new sD("decode", "string" === typeof DD ? DD : `${zD.byteLength} bytes`, {
          cause: rD
        })
      }
    }
    let rD = null;
    const LD = new Map;
    let cD = 1;

    function gD(DD) {
      if (rD = DD, null !== DD) {
        for (const [zD, wD] of LD) DD.UpD(zD, wD);
        LD.clear()
      }
    }

    function RD(DD) {
      const zD = cD++;
      return rD ? rD.UpD(zD, DD) : LD.set(zD, DD), zD
    }
    async function AD(DD, zD, wD) {
      const pD = await KD(DD, zD, wD);
      return {
        id: RD(pD),
        width: pD.width,
        height: pD.height
      }
    }

    function UD(DD) {
      var zD;
      const wD = LD.get(DD);
      if (wD) return wD.close(), void LD.delete(DD);
      null === (zD = rD) || void 0 === zD || zD.fpD(DD)
    }
  },
  40809: (DD, zD, wD) => {
    function pD(DD, zD) {
      if (!Object.prototype.hasOwnProperty.call(DD, zD)) throw new TypeError("attempted to use private field on non-instance");
      return DD
    }
    wD.d(zD, {
      e: () => pD
    })
  },
  40818: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => sD
    });
    var pD = 0;

    function sD(DD) {
      return "__private_" + pD++ + "_" + DD
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);