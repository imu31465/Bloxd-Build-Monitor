export const id = 87;
export const ids = [87];
export const modules = {
  40717: (CC, zC, ZC) => {
    ZC.d(zC, {
      A: () => EC,
      D: () => HC,
      G: () => BC,
      H: () => XC,
      J: () => YC,
      N: () => lC,
      O: () => KC,
      R: () => DC,
      T: () => tC,
      W: () => mC,
      c: () => jC,
      d: () => uC,
      g: () => eC,
      k: () => yC,
      o: () => hC,
      s: () => vC,
      u: () => cC,
      x: () => dC
    });
    var QC = ZC(1347),
      wC = ZC(28),
      bC = ZC(1240),
      nC = ZC(2348),
      fC = ZC(4752),
      oC = ZC(4711);
    let qC, FC = !1,
      WC = !1,
      NC = !1,
      MC = !1;
    const gC = 1300,
      SC = 3e3;
    let pC = 0,
      PC = !1,
      GC = !1,
      RC = 0;
    const AC = 2;
    let xC = !1,
      JC = !1;
    const IC = new Set,
      iC = new Set;

    function vC() {
      return FC
    }

    function eC() {
      return GC
    }

    function hC() {
      return JC
    }

    function KC() {
      return (0, bC.x)() && !JC
    }

    function YC(CC) {
      let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (CC !== JC) {
        JC = CC;
        for (const CC of [...iC]) CC(JC);
        zC && tC()
      }
    }

    function dC(CC) {
      return iC.add(CC), () => {
        iC.delete(CC)
      }
    }

    function mC() {
      (0, fC.e)(nC.v.Menu, (0, bC.x)() ? 0 : nC.v.Menu)
    }

    function HC() {
      GC = !1, RC = 0, mC(), tC()
    }

    function EC(CC) {
      return IC.add(CC), () => {
        IC.delete(CC)
      }
    }

    function lC(CC) {
      WC = !1, CC !== FC && (FC = CC, MC = !1, clearTimeout(qC), NC = !FC && xC, FC ? (PC = !1, GC = !1, RC = 0) : KC() && !xC && (GC = !0), xC = !1, FC && !KC() && UC(), OC(), NC && tC())
    }

    function XC(CC) {
      CC !== PC && (PC = CC, CC || tC())
    }

    function cC() {
      WC = !1, MC || !0 !== TC() || (MC = !0, clearTimeout(qC), qC = setTimeout(rC, gC))
    }

    function uC() {
      return (!WC || performance.now() - pC > SC) && (WC = (0, oC.E)().lockPointer(), pC = performance.now()), WC
    }

    function rC() {
      sC() && aC() && uC()
    }

    function sC() {
      return KC() && !FC && !PC && !(0, QC.h)()
    }

    function TC() {
      var CC;
      return "undefined" === typeof navigator || null === (CC = navigator.userActivation) || void 0 === CC ? void 0 : CC.isActive
    }

    function aC() {
      return NC && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== TC()
    }

    function tC() {
      KC() ? sC() && !GC && aC() && uC() : FC && !xC && UC()
    }

    function DC() {
      GC ? navigator.vendor.startsWith("Apple") ? LC() : RC = AC : tC()
    }

    function jC() {
      RC > 0 && 0 === --RC && LC()
    }

    function yC() {
      RC = 0
    }

    function LC() {
      sC() && !0 === TC() && uC()
    }

    function UC() {
      xC = !0, (0, oC.E)().unlockPointer()
    }

    function BC() {
      WC = !1, NC = !1, MC = !1, clearTimeout(qC), PC = !1, GC = !1, RC = 0, xC = !1;
      const CC = FC;
      FC = !1, CC && OC()
    }

    function OC() {
      for (const CC of [...IC]) CC(FC);
      wC.o.bp("pointerLockUpdate", FC)
    }
  },
  40518: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => NC,
      g: () => fC,
      j: () => WC,
      k: () => qC,
      m: () => nC,
      q: () => FC,
      s: () => oC
    });
    let QC = null,
      wC = null,
      bC = null;

    function nC(CC) {
      QC = CC
    }

    function fC() {
      return QC
    }

    function oC(CC) {
      wC = CC
    }

    function qC() {
      return wC
    }

    function FC(CC) {
      bC = CC
    }

    function WC() {
      return bC
    }

    function NC() {
      var CC, zC;
      return !0 === (null === (CC = wC) || void 0 === CC || null === (zC = CC.currentViewer) || void 0 === zC ? void 0 : zC.inPlayback)
    }
  },
  4711: (CC, zC, ZC) => {
    ZC.d(zC, {
      A: () => GC,
      B: () => nC,
      E: () => fC,
      G: () => vC,
      b: () => iC,
      e: () => AC,
      h: () => dC,
      j: () => YC,
      k: () => PC,
      m: () => JC,
      n: () => RC,
      p: () => xC,
      r: () => eC,
      u: () => hC,
      w: () => KC
    });
    var QC = ZC(4719);
    const wC = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let bC = wC;

    function nC(CC) {
      bC = null !== CC && void 0 !== CC ? CC : wC
    }

    function fC() {
      return bC
    }
    const oC = new Set,
      qC = new Set;
    let FC = -1;
    const WC = new Set,
      NC = new Set;
    let MC = 0,
      gC = 0;
    const SC = new Set,
      pC = new Set;

    function PC(CC) {
      return oC.add(CC), () => {
        oC.delete(CC)
      }
    }

    function GC(CC, zC) {
      for (const QC of oC) try {
        QC(CC)
      } catch (ZC) {
        zC(ZC)
      }
    }

    function RC(CC) {
      return qC.add(CC), () => {
        qC.delete(CC)
      }
    }

    function AC(CC, zC) {
      const ZC = FC < 0 ? 0 : CC - FC;
      FC = CC;
      for (const wC of qC) try {
        wC(ZC)
      } catch (QC) {
        zC(QC)
      }
    }

    function xC(CC) {
      return WC.add(CC), () => {
        WC.delete(CC)
      }
    }

    function JC(CC) {
      return NC.add(CC), () => {
        NC.delete(CC)
      }
    }
    let IC = 0;

    function iC(CC) {
      IC += CC
    }

    function vC() {
      const CC = IC;
      return IC = 0, CC
    }

    function eC(CC) {
      return SC.add(CC), () => {
        SC.delete(CC)
      }
    }

    function hC(CC) {
      return pC.add(CC), () => {
        pC.delete(CC)
      }
    }

    function KC() {
      MC = 0, gC = 0, FC = -1
    }

    function YC(CC, zC) {
      if ("paced" === CC) return gC += zC, null;
      if ("drawn" !== CC && "skipped" !== CC) return null;
      const ZC = zC + gC;
      return gC = 0, ZC
    }

    function dC(CC, zC, ZC, wC) {
      const bC = (0, QC.i)(zC),
        nC = CC > 0 ? performance.now() : 0;
      for (let QC = 0; QC < CC; QC++)
        for (const CC of SC) try {
          CC()
        } catch (fC) {
          wC(fC)
        }
      if (CC > 0 && iC(performance.now() - nC), null !== ZC) {
        for (const CC of WC) try {
          CC(ZC)
        } catch (fC) {
          wC(fC)
        }
        MC += ZC
      }
      if ("drawn" === zC) {
        const CC = MC;
        MC = 0;
        for (const zC of NC) try {
          zC(CC)
        } catch (fC) {
          wC(fC)
        }
      }
      for (const QC of pC) try {
        QC(CC, bC)
      } catch (fC) {
        wC(fC)
      }
    }
  },
  40729: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => QC
    });
    const QC = {
      stop: () => QC,
      fade: () => QC,
      rate: () => QC,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => QC,
      setPannerAttr: () => QC,
      setPosition: () => QC
    }
  },
  4739: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => oC,
      g: () => bC,
      k: () => fC
    });
    var QC = ZC(2348),
      wC = ZC(4745);

    function bC(CC) {
      let {
        action: zC,
        flags: ZC
      } = CC;
      return "mid-fire" === zC && 0 !== (ZC & QC.c.AltLeftClick)
    }
    const nC = new Set;

    function fC(CC) {
      return nC.add(CC), () => {
        nC.delete(CC)
      }
    }

    function oC(CC) {
      const zC = wC.c[255 & CC];
      if (void 0 === zC) return;
      const ZC = CC >>> 8 & 255,
        bC = {
          action: zC,
          down: 0 !== (ZC & QC.c.Down),
          flags: ZC,
          press: CC >>> 16
        };
      for (const QC of nC) QC(bC)
    }
  },
  4745: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => wC,
      d: () => bC,
      f: () => nC,
      g: () => QC,
      h: () => fC
    });
    const QC = {
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
      wC = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      bC = {
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
      nC = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      fC = [16]
  },
  40750: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => FC,
      d: () => qC,
      h: () => oC
    });
    var QC = ZC(4733),
      wC = ZC(2348),
      bC = ZC(4752);
    let nC = !1,
      fC = !1;

    function oC(CC) {
      nC = !0;
      try {
        CC()
      } finally {
        nC = !1
      }
    }

    function qC(CC, zC) {
      if (nC) return !1;
      switch (CC) {
        case QC.Q.MouseDown:
        case QC.Q.MouseUp:
        case QC.Q.TouchStart:
        case QC.Q.TouchEnd:
        case QC.Q.TouchCancel:
        case QC.Q.TouchButton:
          return !0;
        case QC.Q.KeyDown:
        case QC.Q.KeyUp:
          return 0 === (zC & wC.f.Repeat) && !(0, bC.d)(document.activeElement);
        default:
          return !1
      }
    }

    function FC(CC) {
      fC || (fC = !0, queueMicrotask((() => {
        fC = !1, CC()
      })))
    }
  },
  4752: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => fC,
      d: () => nC,
      e: () => qC
    });
    var QC = ZC(2348),
      wC = ZC(2351);
    const bC = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function nC(CC) {
      return CC instanceof HTMLElement && (!!(CC.isContentEditable || CC instanceof HTMLTextAreaElement || CC instanceof HTMLSelectElement) || CC instanceof HTMLInputElement && !bC.has(CC.type))
    }

    function fC(CC) {
      let zC = null;
      const ZC = ZC => {
          const wC = nC(ZC);
          wC !== zC && (zC = wC, CC(QC.j.UiCapture, QC.v.Keyboard, 0, 0, wC ? QC.v.Keyboard : 0))
        },
        wC = CC => {
          ZC(CC.target)
        },
        bC = CC => {
          ZC(CC.relatedTarget)
        },
        fC = () => {
          ZC(document.activeElement)
        },
        oC = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", wC, oC), document.addEventListener("focusout", bC, oC), document.addEventListener("keydown", fC, oC), ZC(document.activeElement), () => {
        document.removeEventListener("focusin", wC, oC), document.removeEventListener("focusout", bC, oC), document.removeEventListener("keydown", fC, oC)
      }
    }
    const oC = new Map;

    function qC(CC, zC) {
      var ZC;
      let QC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      oC.set(QC, (null !== (ZC = oC.get(QC)) && void 0 !== ZC ? ZC : 0) & ~CC | zC & CC);
      let bC = 0;
      for (const wC of oC.values()) bC |= wC;
      return (0, wC.v)(CC, bC & CC)
    }
  },
  40779: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => FC,
      h: () => oC,
      j: () => fC,
      m: () => qC
    });
    var QC = ZC(1851);
    let wC = null,
      bC = 0;
    const nC = new Set;

    function fC() {
      return wC
    }

    function oC() {
      return bC
    }

    function qC(CC) {
      wC = CC, bC++, (0, QC.c)();
      for (const zC of nC) zC()
    }

    function FC(CC) {
      nC.add(CC)
    }
  },
  40820: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => QC
    });
    const QC = 2e3
  },
  40723: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => JC,
      h: () => NC,
      i: () => RC,
      l: () => xC,
      m: () => AC,
      p: () => IC
    });
    var QC = ZC(155),
      wC = ZC(20),
      bC = ZC(28),
      nC = ZC(2894),
      fC = ZC(1257),
      oC = ZC(34091),
      qC = ZC(273),
      FC = ZC(77),
      WC = ZC(147);

    function NC() {
      var CC;
      const zC = (0, nC.J)(),
        ZC = function(CC, zC) {
          return {
            sampleCount: CC.antiAliasing ? 4 : 1,
            n: (0, nC.B)(CC.pixelScale, zC),
            pixelated: (0, nC.z)(CC.pixelSmoothing)
          }
        }(wC.b.get("clientEscMenuOptions"), zC);
      return ZC.sampleCount > 1 && (0, oC.c)() && (ZC.sampleCount = 1), ZC.n = null !== (CC = (0, oC.l)()) && void 0 !== CC ? CC : ZC.n, QC.h.includes((0, FC.getSoftwareRenderer)()) && (ZC.sampleCount = 1, ZC.n = Math.max(ZC.n, (0, nC.B)(WC.x.pixelScale, zC))), ZC
    }
    let MC = null,
      gC = null;
    const SC = new Set;
    let pC = null;

    function PC() {
      for (const CC of SC) CC()
    }

    function GC() {
      if (null === MC) {
        const CC = document.createElement("div");
        CC.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", CC.setAttribute("aria-hidden", "true"), document.body.append(CC), gC = CC, MC = new nC.d(CC, PC)
      }
      return MC
    }

    function RC(CC) {
      const zC = (0, nC.m)(),
        [ZC, QC] = GC().size(zC);
      return (0, nC.h)(ZC, QC, zC, CC.n)
    }

    function AC(CC) {
      var zC, ZC, QC, wC;
      const bC = (0, nC.m)(),
        [oC, qC] = GC().size(bC);
      if (oC <= 0 || qC <= 0) return null;
      const FC = (0, nC.h)(oC, qC, bC, NC().n);
      return (0, nC.f)(CC, FC), CC.style.left = `${null!==(zC=null===(ZC=pC)||void 0===ZC?void 0:ZC.rect.left)&&void 0!==zC?zC:0}px`, CC.style.top = `${null!==(QC=null===(wC=pC)||void 0===wC?void 0:wC.rect.top)&&void 0!==QC?QC:0}px`, (0, fC.K)(CC.style, pC), FC
    }

    function xC(CC) {
      pC = CC, GC(), (0, fC.C)(gC.style, CC, ""), PC()
    }

    function JC(CC, zC) {
      CC.style.imageRendering = (0, nC.L)(zC.pixelated)
    }

    function IC(CC, zC) {
      const ZC = (0, bC.q)("appManagerUpdated|clientEscMenuOptions", (() => {
          JC(CC, NC()), zC()
        })),
        QC = (0, oC.v)(zC),
        wC = (0, qC.m)(zC);
      return GC(), SC.add(zC), () => {
        ZC(), QC(), wC(), SC.delete(zC)
      }
    }
  },
  40827: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => nC,
      e: () => bC,
      g: () => wC
    });
    let QC = null;

    function wC(CC) {
      QC = CC
    }

    function bC(CC) {
      QC === CC && (QC = null)
    }

    function nC() {
      var CC;
      null === (CC = QC) || void 0 === CC || CC()
    }
  },
  40772: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => wC,
      i: () => qC,
      k: () => bC,
      l: () => WC,
      o: () => FC,
      r: () => NC
    });
    var QC = ZC(2856);
    class wC extends Error {
      constructor(CC, zC, ZC) {
        super(`${"fetch"===CC?"fetching":"decoding"} ${zC} failed`, ZC), this.stage = CC, this.source = zC, this.name = "ShellImageError"
      }
    }
    async function bC(CC) {
      let zC, ZC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QC.M,
        bC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      if ("string" === typeof CC) try {
        zC = await ZC(CC)
      } catch (nC) {
        throw new wC("fetch", CC, {
          cause: nC
        })
      } else zC = CC;
      try {
        const CC = new Blob([zC.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(CC, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: bC
        })
      } catch (nC) {
        throw new wC("decode", "string" === typeof CC ? CC : `${zC.byteLength} bytes`, {
          cause: nC
        })
      }
    }
    let nC = null;
    const fC = new Map;
    let oC = 1;

    function qC(CC) {
      if (nC = CC, null !== CC) {
        for (const [zC, ZC] of fC) CC.TZC(zC, ZC);
        fC.clear()
      }
    }

    function FC(CC) {
      const zC = oC++;
      return nC ? nC.TZC(zC, CC) : fC.set(zC, CC), zC
    }
    async function WC(CC, zC, ZC) {
      const QC = await bC(CC, zC, ZC);
      return {
        id: FC(QC),
        width: QC.width,
        height: QC.height
      }
    }

    function NC(CC) {
      var zC;
      const ZC = fC.get(CC);
      if (ZC) return ZC.close(), void fC.delete(CC);
      null === (zC = nC) || void 0 === zC || zC.aZC(CC)
    }
  },
  40736: (CC, zC, ZC) => {
    function QC(CC, zC) {
      if (!Object.prototype.hasOwnProperty.call(CC, zC)) throw new TypeError("attempted to use private field on non-instance");
      return CC
    }
    ZC.d(zC, {
      e: () => QC
    })
  },
  40743: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => wC
    });
    var QC = 0;

    function wC(CC) {
      return "__private_" + QC++ + "_" + CC
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);