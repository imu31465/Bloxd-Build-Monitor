export const id = 87;
export const ids = [87];
export const modules = {
  40911: (SS, HS, gS) => {
    gS.d(HS, {
      B: () => lS,
      D: () => VS,
      F: () => vS,
      G: () => yS,
      K: () => cS,
      M: () => MS,
      N: () => BS,
      O: () => LS,
      c: () => FS,
      g: () => WS,
      h: () => OS,
      j: () => RS,
      m: () => dS,
      n: () => JS,
      q: () => iS,
      s: () => ES,
      w: () => AS,
      x: () => YS
    });
    var tS = gS(1471),
      bS = gS(31),
      XS = gS(1366),
      xS = gS(2510),
      NS = gS(4954),
      qS = gS(4911);
    let uS, IS = !1,
      fS = !1,
      kS = !1,
      aS = !1;
    const KS = 1300,
      jS = 3e3;
    let GS = 0,
      CS = !1,
      nS = !1,
      PS = 0;
    const QS = 2;
    let DS = !1,
      wS = !1;
    const hS = new Set,
      ZS = new Set;

    function JS() {
      return IS
    }

    function OS() {
      return nS
    }

    function dS() {
      return wS
    }

    function cS() {
      return (0, XS.v)() && !wS
    }

    function vS(SS) {
      let HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (SS !== wS) {
        wS = SS;
        for (const SS of [...ZS]) SS(wS);
        HS && BS()
      }
    }

    function ES(SS) {
      return ZS.add(SS), () => {
        ZS.delete(SS)
      }
    }

    function LS() {
      (0, NS.i)(xS.A.Menu, (0, XS.v)() ? 0 : xS.A.Menu)
    }

    function YS() {
      nS = !1, PS = 0, LS(), BS()
    }

    function AS(SS) {
      return hS.add(SS), () => {
        hS.delete(SS)
      }
    }

    function yS(SS) {
      fS = !1, SS !== IS && (IS = SS, aS = !1, clearTimeout(uS), kS = !IS && DS, IS ? (CS = !1, nS = !1, PS = 0) : cS() && !DS && (nS = !0), DS = !1, IS && !cS() && oS(), mS(), kS && BS())
    }

    function VS(SS) {
      SS !== CS && (CS = SS, SS || BS())
    }

    function iS() {
      fS = !1, aS || !0 !== pS() || (aS = !0, clearTimeout(uS), uS = setTimeout(zS, KS))
    }

    function WS() {
      return (!fS || performance.now() - GS > jS) && (fS = (0, qS.J)().lockPointer(), GS = performance.now()), fS
    }

    function zS() {
      US() && sS() && WS()
    }

    function US() {
      return cS() && !IS && !CS && !(0, tS.h)()
    }

    function pS() {
      var SS;
      return "undefined" === typeof navigator || null === (SS = navigator.userActivation) || void 0 === SS ? void 0 : SS.isActive
    }

    function sS() {
      return kS && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== pS()
    }

    function BS() {
      cS() ? US() && !nS && sS() && WS() : IS && !DS && oS()
    }

    function MS() {
      nS ? navigator.vendor.startsWith("Apple") ? TS() : PS = QS : BS()
    }

    function FS() {
      PS > 0 && 0 === --PS && TS()
    }

    function RS() {
      PS = 0
    }

    function TS() {
      US() && !0 === pS() && WS()
    }

    function oS() {
      DS = !0, (0, qS.J)().unlockPointer()
    }

    function lS() {
      fS = !1, kS = !1, aS = !1, clearTimeout(uS), CS = !1, nS = !1, PS = 0, DS = !1;
      const SS = IS;
      IS = !1, SS && mS()
    }

    function mS() {
      for (const SS of [...hS]) SS(IS);
      bS.k.cj("pointerLockUpdate", IS)
    }
  },
  40707: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => kS,
      g: () => NS,
      i: () => fS,
      l: () => uS,
      p: () => xS,
      r: () => IS,
      v: () => qS
    });
    let tS = null,
      bS = null,
      XS = null;

    function xS(SS) {
      tS = SS
    }

    function NS() {
      return tS
    }

    function qS(SS) {
      bS = SS
    }

    function uS() {
      return bS
    }

    function IS(SS) {
      XS = SS
    }

    function fS() {
      return XS
    }

    function kS() {
      var SS, HS;
      return !0 === (null === (SS = bS) || void 0 === SS || null === (HS = SS.currentViewer) || void 0 === HS ? void 0 : HS.inPlayback)
    }
  },
  4911: (SS, HS, gS) => {
    gS.d(HS, {
      A: () => dS,
      B: () => cS,
      D: () => nS,
      H: () => xS,
      J: () => NS,
      M: () => JS,
      e: () => ZS,
      f: () => QS,
      i: () => ES,
      j: () => vS,
      k: () => CS,
      n: () => wS,
      r: () => PS,
      t: () => DS,
      w: () => OS
    });
    var tS = gS(4917);
    const bS = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let XS = bS;

    function xS(SS) {
      XS = null !== SS && void 0 !== SS ? SS : bS
    }

    function NS() {
      return XS
    }
    const qS = new Set,
      uS = new Set;
    let IS = -1;
    const fS = new Set,
      kS = new Set;
    let aS = 0,
      KS = 0;
    const jS = new Set,
      GS = new Set;

    function CS(SS) {
      return qS.add(SS), () => {
        qS.delete(SS)
      }
    }

    function nS(SS, HS) {
      for (const tS of qS) try {
        tS(SS)
      } catch (gS) {
        HS(gS)
      }
    }

    function PS(SS) {
      return uS.add(SS), () => {
        uS.delete(SS)
      }
    }

    function QS(SS, HS) {
      const gS = IS < 0 ? 0 : SS - IS;
      IS = SS;
      for (const bS of uS) try {
        bS(gS)
      } catch (tS) {
        HS(tS)
      }
    }

    function DS(SS) {
      return fS.add(SS), () => {
        fS.delete(SS)
      }
    }

    function wS(SS) {
      return kS.add(SS), () => {
        kS.delete(SS)
      }
    }
    let hS = 0;

    function ZS(SS) {
      hS += SS
    }

    function JS() {
      const SS = hS;
      return hS = 0, SS
    }

    function OS(SS) {
      return jS.add(SS), () => {
        jS.delete(SS)
      }
    }

    function dS(SS) {
      return GS.add(SS), () => {
        GS.delete(SS)
      }
    }

    function cS() {
      aS = 0, KS = 0, IS = -1
    }

    function vS(SS, HS) {
      if ("paced" === SS) return KS += HS, null;
      if ("drawn" !== SS && "skipped" !== SS) return null;
      const gS = HS + KS;
      return KS = 0, gS
    }

    function ES(SS, HS, gS, bS) {
      const XS = (0, tS.h)(HS),
        xS = SS > 0 ? performance.now() : 0;
      for (let tS = 0; tS < SS; tS++)
        for (const SS of jS) try {
          SS()
        } catch (NS) {
          bS(NS)
        }
      if (SS > 0 && ZS(performance.now() - xS), null !== gS) {
        for (const SS of fS) try {
          SS(gS)
        } catch (NS) {
          bS(NS)
        }
        aS += gS
      }
      if ("drawn" === HS) {
        const SS = aS;
        aS = 0;
        for (const HS of kS) try {
          HS(SS)
        } catch (NS) {
          bS(NS)
        }
      }
      for (const tS of GS) try {
        tS(SS, XS)
      } catch (NS) {
        bS(NS)
      }
    }
  },
  40917: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => tS
    });
    const tS = {
      stop: () => tS,
      fade: () => tS,
      rate: () => tS,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => tS,
      setPannerAttr: () => tS,
      setPosition: () => tS
    }
  },
  4938: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => qS,
      e: () => XS,
      h: () => NS
    });
    var tS = gS(2510),
      bS = gS(4947);

    function XS(SS) {
      let {
        action: HS,
        flags: gS
      } = SS;
      return "mid-fire" === HS && 0 !== (gS & tS.b.AltLeftClick)
    }
    const xS = new Set;

    function NS(SS) {
      return xS.add(SS), () => {
        xS.delete(SS)
      }
    }

    function qS(SS) {
      const HS = bS.b[255 & SS];
      if (void 0 === HS) return;
      const gS = SS >>> 8 & 255,
        XS = {
          action: HS,
          down: 0 !== (gS & tS.b.Down),
          flags: gS,
          press: SS >>> 16
        };
      for (const tS of xS) tS(XS)
    }
  },
  4947: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => bS,
      f: () => XS,
      g: () => xS,
      i: () => tS,
      j: () => NS
    });
    const tS = {
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
      bS = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      XS = {
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
      xS = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      NS = [16]
  },
  40938: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => IS,
      g: () => uS,
      h: () => qS
    });
    var tS = gS(4935),
      bS = gS(2510),
      XS = gS(4954);
    let xS = !1,
      NS = !1;

    function qS(SS) {
      xS = !0;
      try {
        SS()
      } finally {
        xS = !1
      }
    }

    function uS(SS, HS) {
      if (xS) return !1;
      switch (SS) {
        case tS.K.MouseDown:
        case tS.K.MouseUp:
        case tS.K.TouchStart:
        case tS.K.TouchEnd:
        case tS.K.TouchCancel:
        case tS.K.TouchButton:
          return !0;
        case tS.K.KeyDown:
        case tS.K.KeyUp:
          return 0 === (HS & bS.c.Repeat) && !(0, XS.e)(document.activeElement);
        default:
          return !1
      }
    }

    function IS(SS) {
      NS || (NS = !0, queueMicrotask((() => {
        NS = !1, SS()
      })))
    }
  },
  4954: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => NS,
      e: () => xS,
      i: () => uS
    });
    var tS = gS(2510),
      bS = gS(2517);
    const XS = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function xS(SS) {
      return SS instanceof HTMLElement && (!!(SS.isContentEditable || SS instanceof HTMLTextAreaElement || SS instanceof HTMLSelectElement) || SS instanceof HTMLInputElement && !XS.has(SS.type))
    }

    function NS(SS) {
      let HS = null;
      const gS = gS => {
          const bS = xS(gS);
          bS !== HS && (HS = bS, SS(tS.g.UiCapture, tS.A.Keyboard, 0, 0, bS ? tS.A.Keyboard : 0))
        },
        bS = SS => {
          gS(SS.target)
        },
        XS = SS => {
          gS(SS.relatedTarget)
        },
        NS = () => {
          gS(document.activeElement)
        },
        qS = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", bS, qS), document.addEventListener("focusout", XS, qS), document.addEventListener("keydown", NS, qS), gS(document.activeElement), () => {
        document.removeEventListener("focusin", bS, qS), document.removeEventListener("focusout", XS, qS), document.removeEventListener("keydown", NS, qS)
      }
    }
    const qS = new Map;

    function uS(SS, HS) {
      var gS;
      let tS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      qS.set(tS, (null !== (gS = qS.get(tS)) && void 0 !== gS ? gS : 0) & ~SS | HS & SS);
      let XS = 0;
      for (const bS of qS.values()) XS |= bS;
      return (0, bS.D)(SS, XS & SS)
    }
  },
  40977: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => IS,
      c: () => qS,
      d: () => NS,
      h: () => uS
    });
    var tS = gS(2073);
    let bS = null,
      XS = 0;
    const xS = new Set;

    function NS() {
      return bS
    }

    function qS() {
      return XS
    }

    function uS(SS) {
      bS = SS, XS++, (0, tS.c)();
      for (const HS of xS) HS()
    }

    function IS(SS) {
      xS.add(SS)
    }
  },
  41017: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => tS
    });
    const tS = 2e3
  },
  40914: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => wS,
      e: () => kS,
      g: () => PS,
      k: () => DS,
      o: () => QS,
      q: () => hS
    });
    var tS = gS(179),
      bS = gS(24),
      XS = gS(31),
      xS = gS(3058),
      NS = gS(1378),
      qS = gS(34166),
      uS = gS(330),
      IS = gS(104),
      fS = gS(172);

    function kS() {
      var SS;
      const HS = (0, xS.H)(),
        gS = function(SS, HS) {
          return {
            sampleCount: SS.antiAliasing ? 4 : 1,
            n: (0, xS.y)(SS.pixelScale, HS),
            pixelated: (0, xS.w)(SS.pixelSmoothing)
          }
        }(bS.b.get("clientEscMenuOptions"), HS);
      return gS.sampleCount > 1 && (0, qS.b)() && (gS.sampleCount = 1), gS.n = null !== (SS = (0, qS.l)()) && void 0 !== SS ? SS : gS.n, tS.i.includes((0, IS.getSoftwareRenderer)()) && (gS.sampleCount = 1, gS.n = Math.max(gS.n, (0, xS.y)(fS.q.pixelScale, HS))), gS
    }
    let aS = null,
      KS = null;
    const jS = new Set;
    let GS = null;

    function CS() {
      for (const SS of jS) SS()
    }

    function nS() {
      if (null === aS) {
        const SS = document.createElement("div");
        SS.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", SS.setAttribute("aria-hidden", "true"), document.body.append(SS), KS = SS, aS = new xS.b(SS, CS)
      }
      return aS
    }

    function PS(SS) {
      const HS = (0, xS.l)(),
        [gS, tS] = nS().size(HS);
      return (0, xS.g)(gS, tS, HS, SS.n)
    }

    function QS(SS) {
      var HS, gS, tS, bS;
      const XS = (0, xS.l)(),
        [qS, uS] = nS().size(XS);
      if (qS <= 0 || uS <= 0) return null;
      const IS = (0, xS.g)(qS, uS, XS, kS().n);
      return (0, xS.d)(SS, IS), SS.style.left = `${null!==(HS=null===(gS=GS)||void 0===gS?void 0:gS.rect.left)&&void 0!==HS?HS:0}px`, SS.style.top = `${null!==(tS=null===(bS=GS)||void 0===bS?void 0:bS.rect.top)&&void 0!==tS?tS:0}px`, (0, NS.T)(SS.style, GS), IS
    }

    function DS(SS) {
      GS = SS, nS(), (0, NS.I)(KS.style, SS, ""), CS()
    }

    function wS(SS, HS) {
      SS.style.imageRendering = (0, xS.J)(HS.pixelated)
    }

    function hS(SS, HS) {
      const gS = (0, XS.m)("appManagerUpdated|clientEscMenuOptions", (() => {
          wS(SS, kS()), HS()
        })),
        tS = (0, qS.u)(HS),
        bS = (0, uS.k)(HS);
      return nS(), jS.add(HS), () => {
        gS(), tS(), bS(), jS.delete(HS)
      }
    }
  },
  41025: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => xS,
      e: () => XS,
      i: () => bS
    });
    let tS = null;

    function bS(SS) {
      tS = SS
    }

    function XS(SS) {
      tS === SS && (tS = null)
    }

    function xS() {
      var SS;
      null === (SS = tS) || void 0 === SS || SS()
    }
  },
  40972: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => bS,
      h: () => uS,
      l: () => XS,
      p: () => fS,
      s: () => IS,
      w: () => kS
    });
    var tS = gS(3030);
    class bS extends Error {
      constructor(SS, HS, gS) {
        super(`${"fetch"===SS?"fetching":"decoding"} ${HS} failed`, gS), this.stage = SS, this.source = HS, this.name = "ShellImageError"
      }
    }
    async function XS(SS) {
      let HS, gS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tS.J,
        XS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      if ("string" === typeof SS) try {
        HS = await gS(SS)
      } catch (xS) {
        throw new bS("fetch", SS, {
          cause: xS
        })
      } else HS = SS;
      try {
        const SS = new Blob([HS.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(SS, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: XS
        })
      } catch (xS) {
        throw new bS("decode", "string" === typeof SS ? SS : `${HS.byteLength} bytes`, {
          cause: xS
        })
      }
    }
    let xS = null;
    const NS = new Map;
    let qS = 1;

    function uS(SS) {
      if (xS = SS, null !== SS) {
        for (const [HS, gS] of NS) SS.WgS(HS, gS);
        NS.clear()
      }
    }

    function IS(SS) {
      const HS = qS++;
      return xS ? xS.WgS(HS, SS) : NS.set(HS, SS), HS
    }
    async function fS(SS, HS, gS) {
      const tS = await XS(SS, HS, gS);
      return {
        id: IS(tS),
        width: tS.width,
        height: tS.height
      }
    }

    function kS(SS) {
      var HS;
      const gS = NS.get(SS);
      if (gS) return gS.close(), void NS.delete(SS);
      null === (HS = xS) || void 0 === HS || HS.zgS(SS)
    }
  },
  40924: (SS, HS, gS) => {
    function tS(SS, HS) {
      if (!Object.prototype.hasOwnProperty.call(SS, HS)) throw new TypeError("attempted to use private field on non-instance");
      return SS
    }
    gS.d(HS, {
      c: () => tS
    })
  },
  40928: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => bS
    });
    var tS = 0;

    function bS(SS) {
      return "__private_" + tS++ + "_" + SS
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);