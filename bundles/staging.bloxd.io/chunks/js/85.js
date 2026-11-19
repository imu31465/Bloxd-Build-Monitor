export const id = 85;
export const ids = [85];
export const modules = {
  39789: (DD, CD, cD) => {
    cD.d(CD, {
      A: () => VD,
      B: () => hD,
      C: () => lD,
      G: () => JD,
      K: () => jD,
      L: () => qD,
      O: () => WD,
      Q: () => YD,
      S: () => aD,
      c: () => sD,
      d: () => TD,
      g: () => UD,
      j: () => ED,
      l: () => xD,
      p: () => HD,
      s: () => LD,
      u: () => KD,
      x: () => zD
    });
    var ID = cD(1388),
      pD = cD(20),
      iD = cD(1284),
      fD = cD(2338),
      bD = cD(4592),
      QD = cD(4571);
    let wD, SD = !1,
      BD = !1,
      yD = !1,
      MD = !1;
    const tD = 1300,
      ZD = 3e3;
    let oD = 0,
      vD = !1,
      ND = !1,
      gD = 0;
    const XD = 2;
    let mD = !1,
      nD = !1;
    const OD = new Set,
      PD = new Set;

    function HD() {
      return SD
    }

    function UD() {
      return ND
    }

    function xD() {
      return nD
    }

    function qD() {
      return (0, iD.r)() && !nD
    }

    function JD(DD) {
      let CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (DD !== nD) {
        nD = DD;
        for (const DD of [...PD]) DD(nD);
        CD && YD()
      }
    }

    function KD(DD) {
      return PD.add(DD), () => {
        PD.delete(DD)
      }
    }

    function aD() {
      (0, bD.k)(fD.C.Menu, (0, iD.r)() ? 0 : fD.C.Menu)
    }

    function VD() {
      ND = !1, gD = 0, aD(), YD()
    }

    function zD(DD) {
      return OD.add(DD), () => {
        OD.delete(DD)
      }
    }

    function jD(DD) {
      BD = !1, DD !== SD && (SD = DD, MD = !1, clearTimeout(wD), yD = !SD && mD, SD ? (vD = !1, ND = !1, gD = 0) : qD() && !mD && (ND = !0), mD = !1, SD && !qD() && uD(), rD(), yD && YD())
    }

    function lD(DD) {
      DD !== vD && (vD = DD, DD || YD())
    }

    function LD() {
      BD = !1, MD || !0 !== kD() || (MD = !0, clearTimeout(wD), wD = setTimeout(GD, tD))
    }

    function TD() {
      return (!BD || performance.now() - oD > ZD) && (BD = (0, QD.K)().lockPointer(), oD = performance.now()), BD
    }

    function GD() {
      RD() && dD() && TD()
    }

    function RD() {
      return qD() && !SD && !vD && !(0, ID.e)()
    }

    function kD() {
      var DD;
      return "undefined" === typeof navigator || null === (DD = navigator.userActivation) || void 0 === DD ? void 0 : DD.isActive
    }

    function dD() {
      return yD && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== kD()
    }

    function YD() {
      qD() ? RD() && !ND && dD() && TD() : SD && !mD && uD()
    }

    function WD() {
      ND ? navigator.vendor.startsWith("Apple") ? eD() : gD = XD : YD()
    }

    function sD() {
      gD > 0 && 0 === --gD && eD()
    }

    function ED() {
      gD = 0
    }

    function eD() {
      RD() && !0 === kD() && TD()
    }

    function uD() {
      mD = !0, (0, QD.K)().unlockPointer()
    }

    function hD() {
      BD = !1, yD = !1, MD = !1, clearTimeout(wD), vD = !1, ND = !1, gD = 0, mD = !1;
      const DD = SD;
      SD = !1, DD && rD()
    }

    function rD() {
      for (const DD of [...OD]) DD(SD);
      pD.i.Uo("pointerLockUpdate", SD)
    }
  },
  39768: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => yD,
      f: () => bD,
      j: () => BD,
      n: () => wD,
      q: () => fD,
      r: () => SD,
      u: () => QD
    });
    let ID = null,
      pD = null,
      iD = null;

    function fD(DD) {
      ID = DD
    }

    function bD() {
      return ID
    }

    function QD(DD) {
      pD = DD
    }

    function wD() {
      return pD
    }

    function SD(DD) {
      iD = DD
    }

    function BD() {
      return iD
    }

    function yD() {
      var DD, CD;
      return !0 === (null === (DD = pD) || void 0 === DD || null === (CD = DD.currentViewer) || void 0 === CD ? void 0 : CD.inPlayback)
    }
  },
  4571: (DD, CD, cD) => {
    cD.d(CD, {
      B: () => qD,
      E: () => ND,
      I: () => fD,
      K: () => bD,
      N: () => HD,
      e: () => PD,
      f: () => XD,
      h: () => KD,
      i: () => JD,
      j: () => vD,
      m: () => nD,
      q: () => gD,
      t: () => mD,
      w: () => UD,
      z: () => xD
    });
    var ID = cD(4575);
    const pD = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let iD = pD;

    function fD(DD) {
      iD = null !== DD && void 0 !== DD ? DD : pD
    }

    function bD() {
      return iD
    }
    const QD = new Set,
      wD = new Set;
    let SD = -1;
    const BD = new Set,
      yD = new Set;
    let MD = 0,
      tD = 0;
    const ZD = new Set,
      oD = new Set;

    function vD(DD) {
      return QD.add(DD), () => {
        QD.delete(DD)
      }
    }

    function ND(DD, CD) {
      for (const ID of QD) try {
        ID(DD)
      } catch (cD) {
        CD(cD)
      }
    }

    function gD(DD) {
      return wD.add(DD), () => {
        wD.delete(DD)
      }
    }

    function XD(DD, CD) {
      const cD = SD < 0 ? 0 : DD - SD;
      SD = DD;
      for (const pD of wD) try {
        pD(cD)
      } catch (ID) {
        CD(ID)
      }
    }

    function mD(DD) {
      return BD.add(DD), () => {
        BD.delete(DD)
      }
    }

    function nD(DD) {
      return yD.add(DD), () => {
        yD.delete(DD)
      }
    }
    let OD = 0;

    function PD(DD) {
      OD += DD
    }

    function HD() {
      const DD = OD;
      return OD = 0, DD
    }

    function UD(DD) {
      return ZD.add(DD), () => {
        ZD.delete(DD)
      }
    }

    function xD(DD) {
      return oD.add(DD), () => {
        oD.delete(DD)
      }
    }

    function qD() {
      MD = 0, tD = 0, SD = -1
    }

    function JD(DD, CD) {
      if ("paced" === DD) return tD += CD, null;
      if ("drawn" !== DD && "skipped" !== DD) return null;
      const cD = CD + tD;
      return tD = 0, cD
    }

    function KD(DD, CD, cD, pD) {
      const iD = (0, ID.e)(CD),
        fD = DD > 0 ? performance.now() : 0;
      for (let ID = 0; ID < DD; ID++)
        for (const DD of ZD) try {
          DD()
        } catch (bD) {
          pD(bD)
        }
      if (DD > 0 && PD(performance.now() - fD), null !== cD) {
        for (const DD of BD) try {
          DD(cD)
        } catch (bD) {
          pD(bD)
        }
        MD += cD
      }
      if ("drawn" === CD) {
        const DD = MD;
        MD = 0;
        for (const CD of yD) try {
          CD(DD)
        } catch (bD) {
          pD(bD)
        }
      }
      for (const ID of oD) try {
        ID(DD, iD)
      } catch (bD) {
        pD(bD)
      }
    }
  },
  39993: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => ID
    });
    const ID = {
      stop: () => ID,
      fade: () => ID,
      rate: () => ID,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => ID,
      setPannerAttr: () => ID,
      setPosition: () => ID
    }
  },
  4588: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => QD,
      g: () => iD,
      k: () => bD
    });
    var ID = cD(2338),
      pD = cD(4590);

    function iD(DD) {
      let {
        action: CD,
        flags: cD
      } = DD;
      return "mid-fire" === CD && 0 !== (cD & ID.d.AltLeftClick)
    }
    const fD = new Set;

    function bD(DD) {
      return fD.add(DD), () => {
        fD.delete(DD)
      }
    }

    function QD(DD) {
      const CD = pD.c[255 & DD];
      if (void 0 === CD) return;
      const cD = DD >>> 8 & 255,
        iD = {
          action: CD,
          down: 0 !== (cD & ID.d.Down),
          flags: cD,
          press: DD >>> 16
        };
      for (const ID of fD) ID(iD)
    }
  },
  4590: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => pD,
      e: () => iD,
      f: () => fD,
      j: () => ID,
      m: () => bD
    });
    const ID = {
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
      pD = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      iD = {
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
      fD = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      bD = [16]
  },
  40094: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => SD,
      i: () => wD,
      j: () => QD
    });
    var ID = cD(4585),
      pD = cD(2338),
      iD = cD(4592);
    let fD = !1,
      bD = !1;

    function QD(DD) {
      fD = !0;
      try {
        DD()
      } finally {
        fD = !1
      }
    }

    function wD(DD, CD) {
      if (fD) return !1;
      switch (DD) {
        case ID.E.MouseDown:
        case ID.E.MouseUp:
        case ID.E.TouchStart:
        case ID.E.TouchEnd:
        case ID.E.TouchCancel:
        case ID.E.TouchButton:
          return !0;
        case ID.E.KeyDown:
        case ID.E.KeyUp:
          return 0 === (CD & pD.g.Repeat) && !(0, iD.g)(document.activeElement);
        default:
          return !1
      }
    }

    function SD(DD) {
      bD || (bD = !0, queueMicrotask((() => {
        bD = !1, DD()
      })))
    }
  },
  4592: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => bD,
      g: () => fD,
      k: () => wD
    });
    var ID = cD(2338),
      pD = cD(2343);
    const iD = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function fD(DD) {
      return DD instanceof HTMLElement && (!!(DD.isContentEditable || DD instanceof HTMLTextAreaElement || DD instanceof HTMLSelectElement) || DD instanceof HTMLInputElement && !iD.has(DD.type))
    }

    function bD(DD) {
      let CD = null;
      const cD = cD => {
          const pD = fD(cD);
          pD !== CD && (CD = pD, DD(ID.k.UiCapture, ID.C.Keyboard, 0, 0, pD ? ID.C.Keyboard : 0))
        },
        pD = DD => {
          cD(DD.target)
        },
        iD = DD => {
          cD(DD.relatedTarget)
        },
        bD = () => {
          cD(document.activeElement)
        },
        QD = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", pD, QD), document.addEventListener("focusout", iD, QD), document.addEventListener("keydown", bD, QD), cD(document.activeElement), () => {
        document.removeEventListener("focusin", pD, QD), document.removeEventListener("focusout", iD, QD), document.removeEventListener("keydown", bD, QD)
      }
    }
    const QD = new Map;

    function wD(DD, CD) {
      var cD;
      let ID = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      QD.set(ID, (null !== (cD = QD.get(ID)) && void 0 !== cD ? cD : 0) & ~DD | CD & DD);
      let iD = 0;
      for (const pD of QD.values()) iD |= pD;
      return (0, pD.y)(DD, iD & DD)
    }
  },
  40126: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => ID
    });
    const ID = 2e3
  },
  39987: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => gD,
      d: () => wD,
      h: () => oD,
      i: () => ND,
      j: () => vD,
      k: () => XD
    });
    var ID = cD(16),
      pD = cD(20),
      iD = cD(2675),
      fD = cD(1294),
      bD = cD(8967),
      QD = cD(2681);

    function wD() {
      var DD;
      const CD = (cD = ID.d.get("clientEscMenuOptions"), pD = (0, iD.D)(), {
        sampleCount: cD.antiAliasing ? 4 : 1,
        n: (0, iD.t)(cD.pixelScale, pD),
        pixelated: (0, iD.q)(cD.pixelSmoothing)
      });
      var cD, pD;
      return CD.sampleCount > 1 && (0, bD.d)() && (CD.sampleCount = 1), CD.n = null !== (DD = (0, bD.q)()) && void 0 !== DD ? DD : CD.n, CD
    }
    let SD = null,
      BD = null;
    const yD = new Set;
    let MD = null;

    function tD() {
      for (const DD of yD) DD()
    }

    function ZD() {
      if (null === SD) {
        const DD = document.createElement("div");
        DD.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", DD.setAttribute("aria-hidden", "true"), document.body.append(DD), BD = DD, SD = new iD.e(DD, tD)
      }
      return SD
    }

    function oD(DD) {
      const CD = (0, iD.j)(),
        [cD, ID] = ZD().size(CD);
      return (0, iD.i)(cD, ID, CD, DD.n)
    }

    function vD(DD) {
      var CD, cD, ID, pD;
      const bD = (0, iD.j)(),
        [QD, SD] = ZD().size(bD);
      if (QD <= 0 || SD <= 0) return null;
      const BD = (0, iD.i)(QD, SD, bD, wD().n);
      return (0, iD.h)(DD, BD), DD.style.left = `${null!==(CD=null===(cD=MD)||void 0===cD?void 0:cD.rect.left)&&void 0!==CD?CD:0}px`, DD.style.top = `${null!==(ID=null===(pD=MD)||void 0===pD?void 0:pD.rect.top)&&void 0!==ID?ID:0}px`, (0, fD.L)(DD.style, MD), BD
    }

    function ND(DD) {
      MD = DD, ZD(), (0, fD.D)(BD.style, DD, ""), tD()
    }

    function gD(DD, CD) {
      DD.style.imageRendering = (0, iD.G)(CD.pixelated)
    }

    function XD(DD, CD) {
      const cD = (0, pD.k)("appManagerUpdated|clientEscMenuOptions", (() => {
          gD(DD, wD()), CD()
        })),
        ID = (0, bD.B)(CD),
        iD = (0, QD.n)(CD);
      return ZD(), yD.add(CD), () => {
        cD(), ID(), iD(), yD.delete(CD)
      }
    }
  },
  40135: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => fD,
      e: () => iD,
      i: () => pD
    });
    let ID = null;

    function pD(DD) {
      ID = DD
    }

    function iD(DD) {
      ID === DD && (ID = null)
    }

    function fD() {
      var DD;
      null === (DD = ID) || void 0 === DD || DD()
    }
  },
  40112: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => pD,
      d: () => wD,
      h: () => iD,
      l: () => BD,
      p: () => SD,
      q: () => yD
    });
    var ID = cD(3529);
    class pD extends Error {
      constructor(DD, CD, cD) {
        super(`${"fetch"===DD?"fetching":"decoding"} ${CD} failed`, cD), this.stage = DD, this.source = CD, this.name = "ShellImageError"
      }
    }
    async function iD(DD) {
      let CD, cD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ID.I,
        iD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      if ("string" === typeof DD) try {
        CD = await cD(DD)
      } catch (fD) {
        throw new pD("fetch", DD, {
          cause: fD
        })
      } else CD = DD;
      try {
        const DD = new Blob([CD.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(DD, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: iD
        })
      } catch (fD) {
        throw new pD("decode", "string" === typeof DD ? DD : `${CD.byteLength} bytes`, {
          cause: fD
        })
      }
    }
    let fD = null;
    const bD = new Map;
    let QD = 1;

    function wD(DD) {
      if (fD = DD, null !== DD) {
        for (const [CD, cD] of bD) DD.bcD(CD, cD);
        bD.clear()
      }
    }

    function SD(DD) {
      const CD = QD++;
      return fD ? fD.bcD(CD, DD) : bD.set(CD, DD), CD
    }
    async function BD(DD, CD, cD) {
      const ID = await iD(DD, CD, cD);
      return {
        id: SD(ID),
        width: ID.width,
        height: ID.height
      }
    }

    function yD(DD) {
      var CD;
      const cD = bD.get(DD);
      if (cD) return cD.close(), void bD.delete(DD);
      null === (CD = fD) || void 0 === CD || CD.QcD(DD)
    }
  },
  40016: (DD, CD, cD) => {
    function ID(DD, CD) {
      if (!Object.prototype.hasOwnProperty.call(DD, CD)) throw new TypeError("attempted to use private field on non-instance");
      return DD
    }
    cD.d(CD, {
      b: () => ID
    })
  },
  40024: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => pD
    });
    var ID = 0;

    function pD(DD) {
      return "__private_" + ID++ + "_" + DD
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);