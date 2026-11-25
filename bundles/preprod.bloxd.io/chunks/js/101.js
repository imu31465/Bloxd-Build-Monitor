export const id = 101;
export const ids = [101];
export const modules = {
  41975: (MM, rM, iM) => {
    iM.d(rM, {
      A: () => sM,
      B: () => qM,
      E: () => ZM,
      F: () => RM,
      H: () => kM,
      J: () => uM,
      M: () => FM,
      N: () => vM,
      R: () => WM,
      c: () => BM,
      f: () => fM,
      h: () => tM,
      j: () => XM,
      n: () => gM,
      q: () => wM,
      s: () => oM,
      v: () => pM,
      z: () => DM
    });
    var OM = iM(1464),
      SM = iM(22),
      jM = iM(1313),
      aM = iM(2619),
      PM = iM(5214),
      nM = iM(5188);
    let QM, zM = !1,
      LM = !1,
      mM = !1,
      HM = !1;
    const hM = 1300,
      JM = 3e3;
    let dM = 0,
      yM = !1,
      lM = !1,
      EM = 0;
    const UM = 2;
    let GM = !1,
      CM = !1;
    const eM = new Set,
      bM = new Set;

    function wM() {
      return zM
    }

    function tM() {
      return lM
    }

    function gM() {
      return CM
    }

    function uM() {
      return (0, jM.B)() && !CM
    }

    function RM(MM) {
      let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (MM !== CM) {
        CM = MM;
        for (const MM of [...bM]) MM(CM);
        rM && vM()
      }
    }

    function pM(MM) {
      return bM.add(MM), () => {
        bM.delete(MM)
      }
    }

    function WM() {
      (0, PM.k)(aM.C.Menu, (0, jM.B)() ? 0 : aM.C.Menu)
    }

    function sM() {
      lM = !1, EM = 0, WM(), vM()
    }

    function DM(MM) {
      return eM.add(MM), () => {
        eM.delete(MM)
      }
    }

    function kM(MM) {
      LM = !1, MM !== zM && (zM = MM, HM = !1, clearTimeout(QM), mM = !zM && GM, zM ? (yM = !1, lM = !1, EM = 0) : uM() && !GM && (lM = !0), GM = !1, zM && !uM() && KM(), TM(), mM && vM())
    }

    function ZM(MM) {
      MM !== yM && (yM = MM, MM || vM())
    }

    function oM() {
      LM = !1, HM || !0 !== AM() || (HM = !0, clearTimeout(QM), QM = setTimeout(YM, hM))
    }

    function fM() {
      return (!LM || performance.now() - dM > JM) && (LM = (0, nM.I)().lockPointer(), dM = performance.now()), LM
    }

    function YM() {
      NM() && xM() && fM()
    }

    function NM() {
      return uM() && !zM && !yM && !(0, OM.l)()
    }

    function AM() {
      var MM;
      return "undefined" === typeof navigator || null === (MM = navigator.userActivation) || void 0 === MM ? void 0 : MM.isActive
    }

    function xM() {
      return mM && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== AM()
    }

    function vM() {
      uM() ? NM() && !lM && xM() && fM() : zM && !GM && KM()
    }

    function FM() {
      lM ? navigator.vendor.startsWith("Apple") ? IM() : EM = UM : vM()
    }

    function BM() {
      EM > 0 && 0 === --EM && IM()
    }

    function XM() {
      EM = 0
    }

    function IM() {
      NM() && !0 === AM() && fM()
    }

    function KM() {
      GM = !0, (0, nM.I)().unlockPointer()
    }

    function qM() {
      LM = !1, mM = !1, HM = !1, clearTimeout(QM), yM = !1, lM = !1, EM = 0, GM = !1;
      const MM = zM;
      zM = !1, MM && TM()
    }

    function TM() {
      for (const MM of [...eM]) MM(zM);
      SM.i.Tz("pointerLockUpdate", zM)
    }
  },
  41761: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => mM,
      f: () => PM,
      j: () => LM,
      n: () => QM,
      r: () => aM,
      s: () => zM,
      v: () => nM
    });
    let OM = null,
      SM = null,
      jM = null;

    function aM(MM) {
      OM = MM
    }

    function PM() {
      return OM
    }

    function nM(MM) {
      SM = MM
    }

    function QM() {
      return SM
    }

    function zM(MM) {
      jM = MM
    }

    function LM() {
      return jM
    }

    function mM() {
      var MM, rM;
      return !0 === (null === (MM = SM) || void 0 === MM || null === (rM = MM.currentViewer) || void 0 === rM ? void 0 : rM.inPlayback)
    }
  },
  5188: (MM, rM, iM) => {
    iM.d(rM, {
      A: () => gM,
      B: () => uM,
      F: () => lM,
      H: () => aM,
      I: () => PM,
      K: () => wM,
      e: () => bM,
      g: () => UM,
      i: () => pM,
      k: () => RM,
      n: () => yM,
      r: () => CM,
      v: () => EM,
      x: () => GM,
      y: () => tM
    });
    var OM = iM(5196);
    const SM = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let jM = SM;

    function aM(MM) {
      jM = null !== MM && void 0 !== MM ? MM : SM
    }

    function PM() {
      return jM
    }
    const nM = new Set,
      QM = new Set;
    let zM = -1;
    const LM = new Set,
      mM = new Set;
    let HM = 0,
      hM = 0;
    const JM = new Set,
      dM = new Set;

    function yM(MM) {
      return nM.add(MM), () => {
        nM.delete(MM)
      }
    }

    function lM(MM, rM) {
      for (const OM of nM) try {
        OM(MM)
      } catch (iM) {
        rM(iM)
      }
    }

    function EM(MM) {
      return QM.add(MM), () => {
        QM.delete(MM)
      }
    }

    function UM(MM, rM) {
      const iM = zM < 0 ? 0 : MM - zM;
      zM = MM;
      for (const SM of QM) try {
        SM(iM)
      } catch (OM) {
        rM(OM)
      }
    }

    function GM(MM) {
      return LM.add(MM), () => {
        LM.delete(MM)
      }
    }

    function CM(MM) {
      return mM.add(MM), () => {
        mM.delete(MM)
      }
    }
    let eM = 0;

    function bM(MM) {
      eM += MM
    }

    function wM() {
      const MM = eM;
      return eM = 0, MM
    }

    function tM(MM) {
      return JM.add(MM), () => {
        JM.delete(MM)
      }
    }

    function gM(MM) {
      return dM.add(MM), () => {
        dM.delete(MM)
      }
    }

    function uM() {
      HM = 0, hM = 0, zM = -1
    }

    function RM(MM, rM) {
      if ("paced" === MM) return hM += rM, null;
      if ("drawn" !== MM && "skipped" !== MM) return null;
      const iM = rM + hM;
      return hM = 0, iM
    }

    function pM(MM, rM, iM, SM) {
      const jM = (0, OM.l)(rM),
        aM = MM > 0 ? performance.now() : 0;
      for (let OM = 0; OM < MM; OM++)
        for (const MM of JM) try {
          MM()
        } catch (PM) {
          SM(PM)
        }
      if (MM > 0 && bM(performance.now() - aM), null !== iM) {
        for (const MM of LM) try {
          MM(iM)
        } catch (PM) {
          SM(PM)
        }
        HM += iM
      }
      if ("drawn" === rM) {
        const MM = HM;
        HM = 0;
        for (const rM of mM) try {
          rM(MM)
        } catch (PM) {
          SM(PM)
        }
      }
      for (const OM of dM) try {
        OM(MM, jM)
      } catch (PM) {
        SM(PM)
      }
    }
  },
  41993: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => OM
    });
    const OM = {
      stop: () => OM,
      fade: () => OM,
      rate: () => OM,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => OM,
      setPannerAttr: () => OM,
      setPosition: () => OM
    }
  },
  5204: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => nM,
      e: () => jM,
      f: () => PM
    });
    var OM = iM(2619),
      SM = iM(5207);

    function jM(MM) {
      let {
        action: rM,
        flags: iM
      } = MM;
      return "mid-fire" === rM && 0 !== (iM & OM.d.AltLeftClick)
    }
    const aM = new Set;

    function PM(MM) {
      return aM.add(MM), () => {
        aM.delete(MM)
      }
    }

    function nM(MM) {
      const rM = SM.c[255 & MM];
      if (void 0 === rM) return;
      const iM = MM >>> 8 & 255,
        jM = {
          action: rM,
          down: 0 !== (iM & OM.d.Down),
          flags: iM,
          press: MM >>> 16
        };
      for (const OM of aM) OM(jM)
    }
  },
  5207: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => SM,
      g: () => jM,
      j: () => aM,
      n: () => OM,
      o: () => PM
    });
    const OM = {
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
      SM = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      jM = {
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
      aM = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      PM = [16]
  },
  42022: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => zM,
      h: () => QM,
      j: () => nM
    });
    var OM = iM(5200),
      SM = iM(2619),
      jM = iM(5214);
    let aM = !1,
      PM = !1;

    function nM(MM) {
      aM = !0;
      try {
        MM()
      } finally {
        aM = !1
      }
    }

    function QM(MM, rM) {
      if (aM) return !1;
      switch (MM) {
        case OM.L.MouseDown:
        case OM.L.MouseUp:
        case OM.L.TouchStart:
        case OM.L.TouchEnd:
        case OM.L.TouchCancel:
        case OM.L.TouchButton:
          return !0;
        case OM.L.KeyDown:
        case OM.L.KeyUp:
          return 0 === (rM & SM.h.Repeat) && !(0, jM.h)(document.activeElement);
        default:
          return !1
      }
    }

    function zM(MM) {
      PM || (PM = !0, queueMicrotask((() => {
        PM = !1, MM()
      })))
    }
  },
  5214: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => PM,
      h: () => aM,
      k: () => QM
    });
    var OM = iM(2619),
      SM = iM(2622);
    const jM = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function aM(MM) {
      return MM instanceof HTMLElement && (!!(MM.isContentEditable || MM instanceof HTMLTextAreaElement || MM instanceof HTMLSelectElement) || MM instanceof HTMLInputElement && !jM.has(MM.type))
    }

    function PM(MM) {
      let rM = null;
      const iM = iM => {
          const SM = aM(iM);
          SM !== rM && (rM = SM, MM(OM.l.UiCapture, OM.C.Keyboard, 0, 0, SM ? OM.C.Keyboard : 0))
        },
        SM = MM => {
          iM(MM.target)
        },
        jM = MM => {
          iM(MM.relatedTarget)
        },
        PM = () => {
          iM(document.activeElement)
        },
        nM = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", SM, nM), document.addEventListener("focusout", jM, nM), document.addEventListener("keydown", PM, nM), iM(document.activeElement), () => {
        document.removeEventListener("focusin", SM, nM), document.removeEventListener("focusout", jM, nM), document.removeEventListener("keydown", PM, nM)
      }
    }
    const nM = new Map;

    function QM(MM, rM) {
      var iM;
      let OM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      nM.set(OM, (null !== (iM = nM.get(OM)) && void 0 !== iM ? iM : 0) & ~MM | rM & MM);
      let jM = 0;
      for (const SM of nM.values()) jM |= SM;
      return (0, SM.B)(MM, jM & MM)
    }
  },
  42053: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => zM,
      e: () => nM,
      f: () => PM,
      j: () => QM
    });
    var OM = iM(2050);
    let SM = null,
      jM = 0;
    const aM = new Set;

    function PM() {
      return SM
    }

    function nM() {
      return jM
    }

    function QM(MM) {
      SM = MM, jM++, (0, OM.c)();
      for (const rM of aM) rM()
    }

    function zM(MM) {
      aM.add(MM)
    }
  },
  42090: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => OM
    });
    const OM = 2e3
  },
  41984: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => CM,
      g: () => mM,
      k: () => EM,
      o: () => GM,
      p: () => UM,
      s: () => eM
    });
    var OM = iM(158),
      SM = iM(19),
      jM = iM(22),
      aM = iM(3230),
      PM = iM(1327),
      nM = iM(34959),
      QM = iM(281),
      zM = iM(83),
      LM = iM(154);

    function mM() {
      var MM;
      const rM = (0, aM.O)(),
        iM = function(MM, rM) {
          return {
            sampleCount: MM.antiAliasing ? 4 : 1,
            n: (0, aM.B)(MM.pixelScale, rM),
            pixelated: (0, aM.z)(MM.pixelSmoothing)
          }
        }(SM.d.get("clientEscMenuOptions"), rM);
      return iM.sampleCount > 1 && (0, nM.e)() && (iM.sampleCount = 1), iM.n = null !== (MM = (0, nM.p)()) && void 0 !== MM ? MM : iM.n, OM.e.includes((0, zM.getSoftwareRenderer)()) && (iM.sampleCount = 1, iM.n = Math.max(iM.n, (0, aM.B)(LM.w.pixelScale, rM))), iM
    }
    let HM = null,
      hM = null;
    const JM = new Set;
    let dM = null;

    function yM() {
      for (const MM of JM) MM()
    }

    function lM() {
      if (null === HM) {
        const MM = document.createElement("div");
        MM.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", MM.setAttribute("aria-hidden", "true"), document.body.append(MM), hM = MM, HM = new aM.d(MM, yM)
      }
      return HM
    }

    function EM(MM) {
      const rM = (0, aM.o)(),
        [iM, OM] = lM().size(rM);
      return (0, aM.j)(iM, OM, rM, MM.n)
    }

    function UM(MM) {
      var rM, iM, OM, SM;
      const jM = (0, aM.o)(),
        [nM, QM] = lM().size(jM);
      if (nM <= 0 || QM <= 0) return null;
      const zM = (0, aM.j)(nM, QM, jM, mM().n);
      return (0, aM.h)(MM, zM), MM.style.left = `${null!==(rM=null===(iM=dM)||void 0===iM?void 0:iM.rect.left)&&void 0!==rM?rM:0}px`, MM.style.top = `${null!==(OM=null===(SM=dM)||void 0===SM?void 0:SM.rect.top)&&void 0!==OM?OM:0}px`, (0, PM.Y)(MM.style, dM), zM
    }

    function GM(MM) {
      dM = MM, lM(), (0, PM.P)(hM.style, MM, ""), yM()
    }

    function CM(MM, rM) {
      MM.style.imageRendering = (0, aM.R)(rM.pixelated)
    }

    function eM(MM, rM) {
      const iM = (0, jM.j)("appManagerUpdated|clientEscMenuOptions", (() => {
          CM(MM, mM()), rM()
        })),
        OM = (0, nM.y)(rM),
        SM = (0, QM.n)(rM);
      return lM(), JM.add(rM), () => {
        iM(), OM(), SM(), JM.delete(rM)
      }
    }
  },
  42094: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => aM,
      h: () => jM,
      k: () => SM
    });
    let OM = null;

    function SM(MM) {
      OM = MM
    }

    function jM(MM) {
      OM === MM && (OM = null)
    }

    function aM() {
      var MM;
      null === (MM = OM) || void 0 === MM || MM()
    }
  },
  42045: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => SM,
      f: () => QM,
      g: () => jM,
      j: () => LM,
      n: () => zM,
      o: () => mM
    });
    var OM = iM(3188);
    class SM extends Error {
      constructor(MM, rM, iM) {
        super(`${"fetch"===MM?"fetching":"decoding"} ${rM} failed`, iM), this.stage = MM, this.source = rM, this.name = "ShellImageError"
      }
    }
    async function jM(MM) {
      let rM, iM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : OM.F,
        jM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      if ("string" === typeof MM) try {
        rM = await iM(MM)
      } catch (aM) {
        throw new SM("fetch", MM, {
          cause: aM
        })
      } else rM = MM;
      try {
        const MM = new Blob([rM.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(MM, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: jM
        })
      } catch (aM) {
        throw new SM("decode", "string" === typeof MM ? MM : `${rM.byteLength} bytes`, {
          cause: aM
        })
      }
    }
    let aM = null;
    const PM = new Map;
    let nM = 1;

    function QM(MM) {
      if (aM = MM, null !== MM) {
        for (const [rM, iM] of PM) MM.iOM(rM, iM);
        PM.clear()
      }
    }

    function zM(MM) {
      const rM = nM++;
      return aM ? aM.iOM(rM, MM) : PM.set(rM, MM), rM
    }
    async function LM(MM, rM, iM) {
      const OM = await jM(MM, rM, iM);
      return {
        id: zM(OM),
        width: OM.width,
        height: OM.height
      }
    }

    function mM(MM) {
      var rM;
      const iM = PM.get(MM);
      if (iM) return iM.close(), void PM.delete(MM);
      null === (rM = aM) || void 0 === rM || rM.SOM(MM)
    }
  },
  41998: (MM, rM, iM) => {
    function OM(MM, rM) {
      if (!Object.prototype.hasOwnProperty.call(MM, rM)) throw new TypeError("attempted to use private field on non-instance");
      return MM
    }
    iM.d(rM, {
      d: () => OM
    })
  },
  42006: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => SM
    });
    var OM = 0;

    function SM(MM) {
      return "__private_" + OM++ + "_" + MM
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);