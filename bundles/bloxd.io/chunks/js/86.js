export const id = 86;
export const ids = [86];
export const modules = {
  40434: (qq, Eq, gq) => {
    gq.d(Eq, {
      A: () => Cq,
      E: () => Sq,
      F: () => iq,
      I: () => zq,
      K: () => bq,
      M: () => Fq,
      N: () => Uq,
      P: () => fq,
      b: () => sq,
      d: () => Gq,
      e: () => hq,
      i: () => Xq,
      k: () => nq,
      m: () => vq,
      q: () => pq,
      u: () => Zq,
      w: () => Tq,
      x: () => Mq
    });
    var Yq = gq(1367),
      lq = gq(31),
      Oq = gq(1274),
      mq = gq(2357),
      xq = gq(4637),
      Aq = gq(4608);
    let cq, uq = !1,
      Bq = !1,
      Wq = !1,
      Nq = !1;
    const aq = 1300,
      Vq = 3e3;
    let dq = 0,
      jq = !1,
      Hq = !1,
      oq = 0;
    const Pq = 2;
    let Qq = !1,
      yq = !1;
    const tq = new Set,
      rq = new Set;

    function vq() {
      return uq
    }

    function hq() {
      return Hq
    }

    function nq() {
      return yq
    }

    function bq() {
      return (0, Oq.p)() && !yq
    }

    function iq(qq) {
      let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (qq !== yq) {
        yq = qq;
        for (const qq of [...rq]) qq(yq);
        Eq && Uq()
      }
    }

    function Zq(qq) {
      return rq.add(qq), () => {
        rq.delete(qq)
      }
    }

    function fq() {
      (0, xq.k)(mq.C.Menu, (0, Oq.p)() ? 0 : mq.C.Menu)
    }

    function Mq() {
      Hq = !1, oq = 0, fq(), Uq()
    }

    function Tq(qq) {
      return tq.add(qq), () => {
        tq.delete(qq)
      }
    }

    function zq(qq) {
      Bq = !1, qq !== uq && (uq = qq, Nq = !1, clearTimeout(cq), Wq = !uq && Qq, uq ? (jq = !1, Hq = !1, oq = 0) : bq() && !Qq && (Hq = !0), Qq = !1, uq && !bq() && Kq(), Iq(), Wq && Uq())
    }

    function Sq(qq) {
      qq !== jq && (jq = qq, qq || Uq())
    }

    function pq() {
      Bq = !1, Nq || !0 !== kq() || (Nq = !0, clearTimeout(cq), cq = setTimeout(Lq, aq))
    }

    function Gq() {
      return (!Bq || performance.now() - dq > Vq) && (Bq = (0, Aq.M)().lockPointer(), dq = performance.now()), Bq
    }

    function Lq() {
      Jq() && Rq() && Gq()
    }

    function Jq() {
      return bq() && !uq && !jq && !(0, Yq.c)()
    }

    function kq() {
      var qq;
      return "undefined" === typeof navigator || null === (qq = navigator.userActivation) || void 0 === qq ? void 0 : qq.isActive
    }

    function Rq() {
      return Wq && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== kq()
    }

    function Uq() {
      bq() ? Jq() && !Hq && Rq() && Gq() : uq && !Qq && Kq()
    }

    function Fq() {
      Hq ? navigator.vendor.startsWith("Apple") ? wq() : oq = Pq : Uq()
    }

    function sq() {
      oq > 0 && 0 === --oq && wq()
    }

    function Xq() {
      oq = 0
    }

    function wq() {
      Jq() && !0 === kq() && Gq()
    }

    function Kq() {
      Qq = !0, (0, Aq.M)().unlockPointer()
    }

    function Cq() {
      Bq = !1, Wq = !1, Nq = !1, clearTimeout(cq), jq = !1, Hq = !1, oq = 0, Qq = !1;
      const qq = uq;
      uq = !1, qq && Iq()
    }

    function Iq() {
      for (const qq of [...tq]) qq(uq);
      lq.i.TV("pointerLockUpdate", uq)
    }
  },
  40409: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Wq,
      f: () => xq,
      i: () => Bq,
      l: () => cq,
      m: () => mq,
      o: () => uq,
      s: () => Aq
    });
    let Yq = null,
      lq = null,
      Oq = null;

    function mq(qq) {
      Yq = qq
    }

    function xq() {
      return Yq
    }

    function Aq(qq) {
      lq = qq
    }

    function cq() {
      return lq
    }

    function uq(qq) {
      Oq = qq
    }

    function Bq() {
      return Oq
    }

    function Wq() {
      var qq, Eq;
      return !0 === (null === (qq = lq) || void 0 === qq || null === (Eq = qq.currentViewer) || void 0 === Eq ? void 0 : Eq.inPlayback)
    }
  },
  4608: (qq, Eq, gq) => {
    gq.d(Eq, {
      B: () => bq,
      F: () => Hq,
      J: () => mq,
      M: () => xq,
      N: () => vq,
      e: () => rq,
      f: () => Pq,
      h: () => Zq,
      l: () => iq,
      m: () => jq,
      p: () => yq,
      s: () => oq,
      w: () => Qq,
      x: () => hq,
      y: () => nq
    });
    var Yq = gq(4616);
    const lq = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let Oq = lq;

    function mq(qq) {
      Oq = null !== qq && void 0 !== qq ? qq : lq
    }

    function xq() {
      return Oq
    }
    const Aq = new Set,
      cq = new Set;
    let uq = -1;
    const Bq = new Set,
      Wq = new Set;
    let Nq = 0,
      aq = 0;
    const Vq = new Set,
      dq = new Set;

    function jq(qq) {
      return Aq.add(qq), () => {
        Aq.delete(qq)
      }
    }

    function Hq(qq, Eq) {
      for (const Yq of Aq) try {
        Yq(qq)
      } catch (gq) {
        Eq(gq)
      }
    }

    function oq(qq) {
      return cq.add(qq), () => {
        cq.delete(qq)
      }
    }

    function Pq(qq, Eq) {
      const gq = uq < 0 ? 0 : qq - uq;
      uq = qq;
      for (const lq of cq) try {
        lq(gq)
      } catch (Yq) {
        Eq(Yq)
      }
    }

    function Qq(qq) {
      return Bq.add(qq), () => {
        Bq.delete(qq)
      }
    }

    function yq(qq) {
      return Wq.add(qq), () => {
        Wq.delete(qq)
      }
    }
    let tq = 0;

    function rq(qq) {
      tq += qq
    }

    function vq() {
      const qq = tq;
      return tq = 0, qq
    }

    function hq(qq) {
      return Vq.add(qq), () => {
        Vq.delete(qq)
      }
    }

    function nq(qq) {
      return dq.add(qq), () => {
        dq.delete(qq)
      }
    }

    function bq() {
      Nq = 0, aq = 0, uq = -1
    }

    function iq(qq, Eq) {
      if ("paced" === qq) return aq += Eq, null;
      if ("drawn" !== qq && "skipped" !== qq) return null;
      const gq = Eq + aq;
      return aq = 0, gq
    }

    function Zq(qq, Eq, gq, lq) {
      const Oq = (0, Yq.g)(Eq),
        mq = qq > 0 ? performance.now() : 0;
      for (let Yq = 0; Yq < qq; Yq++)
        for (const qq of Vq) try {
          qq()
        } catch (xq) {
          lq(xq)
        }
      if (qq > 0 && rq(performance.now() - mq), null !== gq) {
        for (const qq of Bq) try {
          qq(gq)
        } catch (xq) {
          lq(xq)
        }
        Nq += gq
      }
      if ("drawn" === Eq) {
        const qq = Nq;
        Nq = 0;
        for (const Eq of Wq) try {
          Eq(qq)
        } catch (xq) {
          lq(xq)
        }
      }
      for (const Yq of dq) try {
        Yq(qq, Oq)
      } catch (xq) {
        lq(xq)
      }
    }
  },
  40650: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Yq
    });
    const Yq = {
      stop: () => Yq,
      fade: () => Yq,
      rate: () => Yq,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => Yq,
      setPannerAttr: () => Yq,
      setPosition: () => Yq
    }
  },
  4627: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Aq,
      d: () => Oq,
      h: () => xq
    });
    var Yq = gq(2357),
      lq = gq(4629);

    function Oq(qq) {
      let {
        action: Eq,
        flags: gq
      } = qq;
      return "mid-fire" === Eq && 0 !== (gq & Yq.e.AltLeftClick)
    }
    const mq = new Set;

    function xq(qq) {
      return mq.add(qq), () => {
        mq.delete(qq)
      }
    }

    function Aq(qq) {
      const Eq = lq.b[255 & qq];
      if (void 0 === Eq) return;
      const gq = qq >>> 8 & 255,
        Oq = {
          action: Eq,
          down: 0 !== (gq & Yq.e.Down),
          flags: gq,
          press: qq >>> 16
        };
      for (const Yq of mq) Yq(Oq)
    }
  },
  4629: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => lq,
      f: () => Oq,
      i: () => mq,
      l: () => Yq,
      m: () => xq
    });
    const Yq = {
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
      lq = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      Oq = {
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
      mq = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      xq = [16]
  },
  40739: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => uq,
      c: () => cq,
      g: () => Aq
    });
    var Yq = gq(4625),
      lq = gq(2357),
      Oq = gq(4637);
    let mq = !1,
      xq = !1;

    function Aq(qq) {
      mq = !0;
      try {
        qq()
      } finally {
        mq = !1
      }
    }

    function cq(qq, Eq) {
      if (mq) return !1;
      switch (qq) {
        case Yq.E.MouseDown:
        case Yq.E.MouseUp:
        case Yq.E.TouchStart:
        case Yq.E.TouchEnd:
        case Yq.E.TouchCancel:
        case Yq.E.TouchButton:
          return !0;
        case Yq.E.KeyDown:
        case Yq.E.KeyUp:
          return 0 === (Eq & lq.h.Repeat) && !(0, Oq.h)(document.activeElement);
        default:
          return !1
      }
    }

    function uq(qq) {
      xq || (xq = !0, queueMicrotask((() => {
        xq = !1, qq()
      })))
    }
  },
  4637: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => xq,
      h: () => mq,
      k: () => cq
    });
    var Yq = gq(2357),
      lq = gq(2364);
    const Oq = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function mq(qq) {
      return qq instanceof HTMLElement && (!!(qq.isContentEditable || qq instanceof HTMLTextAreaElement || qq instanceof HTMLSelectElement) || qq instanceof HTMLInputElement && !Oq.has(qq.type))
    }

    function xq(qq) {
      let Eq = null;
      const gq = gq => {
          const lq = mq(gq);
          lq !== Eq && (Eq = lq, qq(Yq.i.UiCapture, Yq.C.Keyboard, 0, 0, lq ? Yq.C.Keyboard : 0))
        },
        lq = qq => {
          gq(qq.target)
        },
        Oq = qq => {
          gq(qq.relatedTarget)
        },
        xq = () => {
          gq(document.activeElement)
        },
        Aq = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", lq, Aq), document.addEventListener("focusout", Oq, Aq), document.addEventListener("keydown", xq, Aq), gq(document.activeElement), () => {
        document.removeEventListener("focusin", lq, Aq), document.removeEventListener("focusout", Oq, Aq), document.removeEventListener("keydown", xq, Aq)
      }
    }
    const Aq = new Map;

    function cq(qq, Eq) {
      var gq;
      let Yq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      Aq.set(Yq, (null !== (gq = Aq.get(Yq)) && void 0 !== gq ? gq : 0) & ~qq | Eq & qq);
      let Oq = 0;
      for (const lq of Aq.values()) Oq |= lq;
      return (0, lq.B)(qq, Oq & qq)
    }
  },
  40470: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => uq,
      f: () => Aq,
      j: () => xq,
      k: () => cq
    });
    var Yq = gq(1914);
    let lq = null,
      Oq = 0;
    const mq = new Set;

    function xq() {
      return lq
    }

    function Aq() {
      return Oq
    }

    function cq(qq) {
      lq = qq, Oq++, (0, Yq.d)();
      for (const Eq of mq) Eq()
    }

    function uq(qq) {
      mq.add(qq)
    }
  },
  40786: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Yq
    });
    const Yq = 2e3
  },
  40645: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => oq,
      h: () => cq,
      l: () => dq,
      m: () => Hq,
      p: () => jq,
      s: () => Pq
    });
    var Yq = gq(24),
      lq = gq(31),
      Oq = gq(2700),
      mq = gq(1283),
      xq = gq(9191),
      Aq = gq(2704);

    function cq() {
      var qq;
      const Eq = (gq = Yq.b.get("clientEscMenuOptions"), lq = (0, Oq.B)(), {
        sampleCount: gq.antiAliasing ? 4 : 1,
        n: (0, Oq.t)(gq.pixelScale, lq),
        pixelated: (0, Oq.s)(gq.pixelSmoothing)
      });
      var gq, lq;
      return Eq.sampleCount > 1 && (0, xq.e)() && (Eq.sampleCount = 1), Eq.n = null !== (qq = (0, xq.n)()) && void 0 !== qq ? qq : Eq.n, Eq
    }
    let uq = null,
      Bq = null;
    const Wq = new Set;
    let Nq = null;

    function aq() {
      for (const qq of Wq) qq()
    }

    function Vq() {
      if (null === uq) {
        const qq = document.createElement("div");
        qq.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", qq.setAttribute("aria-hidden", "true"), document.body.append(qq), Bq = qq, uq = new Oq.e(qq, aq)
      }
      return uq
    }

    function dq(qq) {
      const Eq = (0, Oq.k)(),
        [gq, Yq] = Vq().size(Eq);
      return (0, Oq.i)(gq, Yq, Eq, qq.n)
    }

    function jq(qq) {
      var Eq, gq, Yq, lq;
      const xq = (0, Oq.k)(),
        [Aq, uq] = Vq().size(xq);
      if (Aq <= 0 || uq <= 0) return null;
      const Bq = (0, Oq.i)(Aq, uq, xq, cq().n);
      return (0, Oq.h)(qq, Bq), qq.style.left = `${null!==(Eq=null===(gq=Nq)||void 0===gq?void 0:gq.rect.left)&&void 0!==Eq?Eq:0}px`, qq.style.top = `${null!==(Yq=null===(lq=Nq)||void 0===lq?void 0:lq.rect.top)&&void 0!==Yq?Yq:0}px`, (0, mq.L)(qq.style, Nq), Bq
    }

    function Hq(qq) {
      Nq = qq, Vq(), (0, mq.G)(Bq.style, qq, ""), aq()
    }

    function oq(qq, Eq) {
      qq.style.imageRendering = (0, Oq.D)(Eq.pixelated)
    }

    function Pq(qq, Eq) {
      const gq = (0, lq.k)("appManagerUpdated|clientEscMenuOptions", (() => {
          oq(qq, cq()), Eq()
        })),
        Yq = (0, xq.x)(Eq),
        Oq = (0, Aq.q)(Eq);
      return Vq(), Wq.add(Eq), () => {
        gq(), Yq(), Oq(), Wq.delete(Eq)
      }
    }
  },
  40788: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => mq,
      c: () => Oq,
      d: () => lq
    });
    let Yq = null;

    function lq(qq) {
      Yq = qq
    }

    function Oq(qq) {
      Yq === qq && (Yq = null)
    }

    function mq() {
      var qq;
      null === (qq = Yq) || void 0 === qq || qq()
    }
  },
  40760: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => lq,
      e: () => cq,
      h: () => Oq,
      k: () => Bq,
      n: () => uq,
      r: () => Wq
    });
    var Yq = gq(2805);
    class lq extends Error {
      constructor(qq, Eq, gq) {
        super(`${"fetch"===qq?"fetching":"decoding"} ${Eq} failed`, gq), this.stage = qq, this.source = Eq, this.name = "ShellImageError"
      }
    }
    async function Oq(qq) {
      let Eq, gq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Yq.P,
        Oq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      if ("string" === typeof qq) try {
        Eq = await gq(qq)
      } catch (mq) {
        throw new lq("fetch", qq, {
          cause: mq
        })
      } else Eq = qq;
      try {
        const qq = new Blob([Eq.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(qq, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: Oq
        })
      } catch (mq) {
        throw new lq("decode", "string" === typeof qq ? qq : `${Eq.byteLength} bytes`, {
          cause: mq
        })
      }
    }
    let mq = null;
    const xq = new Map;
    let Aq = 1;

    function cq(qq) {
      if (mq = qq, null !== qq) {
        for (const [Eq, gq] of xq) qq.dYq(Eq, gq);
        xq.clear()
      }
    }

    function uq(qq) {
      const Eq = Aq++;
      return mq ? mq.dYq(Eq, qq) : xq.set(Eq, qq), Eq
    }
    async function Bq(qq, Eq, gq) {
      const Yq = await Oq(qq, Eq, gq);
      return {
        id: uq(Yq),
        width: Yq.width,
        height: Yq.height
      }
    }

    function Wq(qq) {
      var Eq;
      const gq = xq.get(qq);
      if (gq) return gq.close(), void xq.delete(qq);
      null === (Eq = mq) || void 0 === Eq || Eq.jYq(qq)
    }
  },
  40671: (qq, Eq, gq) => {
    function Yq(qq, Eq) {
      if (!Object.prototype.hasOwnProperty.call(qq, Eq)) throw new TypeError("attempted to use private field on non-instance");
      return qq
    }
    gq.d(Eq, {
      d: () => Yq
    })
  },
  40676: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => lq
    });
    var Yq = 0;

    function lq(qq) {
      return "__private_" + Yq++ + "_" + qq
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);