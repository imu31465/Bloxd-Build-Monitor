export const id = 86;
export const ids = [86];
export const modules = {
  40019: (vv, zv, Pv) => {
    Pv.d(zv, {
      A: () => rv,
      E: () => Iv,
      F: () => Vv,
      H: () => qv,
      J: () => Kv,
      K: () => Bv,
      O: () => yv,
      R: () => Rv,
      d: () => Jv,
      g: () => Zv,
      i: () => Ov,
      j: () => Ev,
      m: () => Dv,
      n: () => nv,
      q: () => Qv,
      t: () => Uv,
      x: () => tv,
      y: () => xv
    });
    var hv = Pv(1374),
      Sv = Pv(26),
      ev = Pv(1272),
      gv = Pv(2304),
      pv = Pv(4561),
      dv = Pv(4529);
    let Nv, lv = !1,
      Tv = !1,
      Wv = !1,
      wv = !1;
    const av = 1300,
      sv = 3e3;
    let Cv = 0,
      iv = !1,
      cv = !1,
      Gv = 0;
    const mv = 2;
    let jv = !1,
      fv = !1;
    const Fv = new Set,
      Yv = new Set;

    function nv() {
      return lv
    }

    function Ov() {
      return cv
    }

    function Dv() {
      return fv
    }

    function Kv() {
      return (0, ev.u)() && !fv
    }

    function Vv(vv) {
      let zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (vv !== fv) {
        fv = vv;
        for (const vv of [...Yv]) vv(fv);
        zv && yv()
      }
    }

    function Uv(vv) {
      return Yv.add(vv), () => {
        Yv.delete(vv)
      }
    }

    function Rv() {
      (0, pv.g)(gv.u.Menu, (0, ev.u)() ? 0 : gv.u.Menu)
    }

    function xv() {
      cv = !1, Gv = 0, Rv(), yv()
    }

    function tv(vv) {
      return Fv.add(vv), () => {
        Fv.delete(vv)
      }
    }

    function qv(vv) {
      Tv = !1, vv !== lv && (lv = vv, wv = !1, clearTimeout(Nv), Wv = !lv && jv, lv ? (iv = !1, cv = !1, Gv = 0) : Kv() && !jv && (cv = !0), jv = !1, lv && !Kv() && bv(), kv(), Wv && yv())
    }

    function Iv(vv) {
      vv !== iv && (iv = vv, vv || yv())
    }

    function Qv() {
      Tv = !1, wv || !0 !== Hv() || (wv = !0, clearTimeout(Nv), Nv = setTimeout(Av, av))
    }

    function Zv() {
      return (!Tv || performance.now() - Cv > sv) && (Tv = (0, dv.B)().lockPointer(), Cv = performance.now()), Tv
    }

    function Av() {
      Lv() && Mv() && Zv()
    }

    function Lv() {
      return Kv() && !lv && !iv && !(0, hv.d)()
    }

    function Hv() {
      var vv;
      return "undefined" === typeof navigator || null === (vv = navigator.userActivation) || void 0 === vv ? void 0 : vv.isActive
    }

    function Mv() {
      return Wv && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== Hv()
    }

    function yv() {
      Kv() ? Lv() && !cv && Mv() && Zv() : lv && !jv && bv()
    }

    function Bv() {
      cv ? navigator.vendor.startsWith("Apple") ? ov() : Gv = mv : yv()
    }

    function Jv() {
      Gv > 0 && 0 === --Gv && ov()
    }

    function Ev() {
      Gv = 0
    }

    function ov() {
      Lv() && !0 === Hv() && Zv()
    }

    function bv() {
      jv = !0, (0, dv.B)().unlockPointer()
    }

    function rv() {
      Tv = !1, Wv = !1, wv = !1, clearTimeout(Nv), iv = !1, cv = !1, Gv = 0, jv = !1;
      const vv = lv;
      lv = !1, vv && kv()
    }

    function kv() {
      for (const vv of [...Fv]) vv(lv);
      Sv.j.zC("pointerLockUpdate", lv)
    }
  },
  39993: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Wv,
      g: () => pv,
      k: () => Tv,
      o: () => Nv,
      p: () => gv,
      t: () => lv,
      v: () => dv
    });
    let hv = null,
      Sv = null,
      ev = null;

    function gv(vv) {
      hv = vv
    }

    function pv() {
      return hv
    }

    function dv(vv) {
      Sv = vv
    }

    function Nv() {
      return Sv
    }

    function lv(vv) {
      ev = vv
    }

    function Tv() {
      return ev
    }

    function Wv() {
      var vv, zv;
      return !0 === (null === (vv = Sv) || void 0 === vv || null === (zv = vv.currentViewer) || void 0 === zv ? void 0 : zv.inPlayback)
    }
  },
  4529: (vv, zv, Pv) => {
    Pv.d(zv, {
      B: () => pv,
      C: () => nv,
      c: () => Yv,
      d: () => mv,
      e: () => Uv,
      g: () => Vv,
      j: () => iv,
      k: () => fv,
      m: () => Gv,
      o: () => jv,
      q: () => Ov,
      u: () => Dv,
      w: () => Kv,
      x: () => cv,
      y: () => gv
    });
    var hv = Pv(4531);
    const Sv = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let ev = Sv;

    function gv(vv) {
      ev = null !== vv && void 0 !== vv ? vv : Sv
    }

    function pv() {
      return ev
    }
    const dv = new Set,
      Nv = new Set;
    let lv = -1;
    const Tv = new Set,
      Wv = new Set;
    let wv = 0,
      av = 0;
    const sv = new Set,
      Cv = new Set;

    function iv(vv) {
      return dv.add(vv), () => {
        dv.delete(vv)
      }
    }

    function cv(vv, zv) {
      for (const hv of dv) try {
        hv(vv)
      } catch (Pv) {
        zv(Pv)
      }
    }

    function Gv(vv) {
      return Nv.add(vv), () => {
        Nv.delete(vv)
      }
    }

    function mv(vv, zv) {
      const Pv = lv < 0 ? 0 : vv - lv;
      lv = vv;
      for (const Sv of Nv) try {
        Sv(Pv)
      } catch (hv) {
        zv(hv)
      }
    }

    function jv(vv) {
      return Tv.add(vv), () => {
        Tv.delete(vv)
      }
    }

    function fv(vv) {
      return Wv.add(vv), () => {
        Wv.delete(vv)
      }
    }
    let Fv = 0;

    function Yv(vv) {
      Fv += vv
    }

    function nv() {
      const vv = Fv;
      return Fv = 0, vv
    }

    function Ov(vv) {
      return sv.add(vv), () => {
        sv.delete(vv)
      }
    }

    function Dv(vv) {
      return Cv.add(vv), () => {
        Cv.delete(vv)
      }
    }

    function Kv() {
      wv = 0, av = 0, lv = -1
    }

    function Vv(vv, zv) {
      if ("paced" === vv) return av += zv, null;
      if ("drawn" !== vv && "skipped" !== vv) return null;
      const Pv = zv + av;
      return av = 0, Pv
    }

    function Uv(vv, zv, Pv, Sv) {
      const ev = (0, hv.i)(zv),
        gv = vv > 0 ? performance.now() : 0;
      for (let hv = 0; hv < vv; hv++)
        for (const vv of sv) try {
          vv()
        } catch (pv) {
          Sv(pv)
        }
      if (vv > 0 && Yv(performance.now() - gv), null !== Pv) {
        for (const vv of Tv) try {
          vv(Pv)
        } catch (pv) {
          Sv(pv)
        }
        wv += Pv
      }
      if ("drawn" === zv) {
        const vv = wv;
        wv = 0;
        for (const zv of Wv) try {
          zv(vv)
        } catch (pv) {
          Sv(pv)
        }
      }
      for (const hv of Cv) try {
        hv(vv, ev)
      } catch (pv) {
        Sv(pv)
      }
    }
  },
  40201: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => hv
    });
    const hv = {
      stop: () => hv,
      fade: () => hv,
      rate: () => hv,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => hv,
      setPannerAttr: () => hv,
      setPosition: () => hv
    }
  },
  4550: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => dv,
      g: () => ev,
      h: () => pv
    });
    var hv = Pv(2304),
      Sv = Pv(4555);

    function ev(vv) {
      let {
        action: zv,
        flags: Pv
      } = vv;
      return "mid-fire" === zv && 0 !== (Pv & hv.c.AltLeftClick)
    }
    const gv = new Set;

    function pv(vv) {
      return gv.add(vv), () => {
        gv.delete(vv)
      }
    }

    function dv(vv) {
      const zv = Sv.b[255 & vv];
      if (void 0 === zv) return;
      const Pv = vv >>> 8 & 255,
        ev = {
          action: zv,
          down: 0 !== (Pv & hv.c.Down),
          flags: Pv,
          press: vv >>> 16
        };
      for (const hv of gv) hv(ev)
    }
  },
  4555: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Sv,
      e: () => ev,
      f: () => gv,
      i: () => hv,
      l: () => pv
    });
    const hv = {
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
      Sv = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      ev = {
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
      gv = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      pv = [16]
  },
  40295: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => lv,
      d: () => Nv,
      g: () => dv
    });
    var hv = Pv(4542),
      Sv = Pv(2304),
      ev = Pv(4561);
    let gv = !1,
      pv = !1;

    function dv(vv) {
      gv = !0;
      try {
        vv()
      } finally {
        gv = !1
      }
    }

    function Nv(vv, zv) {
      if (gv) return !1;
      switch (vv) {
        case hv.C.MouseDown:
        case hv.C.MouseUp:
        case hv.C.TouchStart:
        case hv.C.TouchEnd:
        case hv.C.TouchCancel:
        case hv.C.TouchButton:
          return !0;
        case hv.C.KeyDown:
        case hv.C.KeyUp:
          return 0 === (zv & Sv.d.Repeat) && !(0, ev.e)(document.activeElement);
        default:
          return !1
      }
    }

    function lv(vv) {
      pv || (pv = !0, queueMicrotask((() => {
        pv = !1, vv()
      })))
    }
  },
  4561: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => pv,
      e: () => gv,
      g: () => Nv
    });
    var hv = Pv(2304),
      Sv = Pv(2306);
    const ev = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function gv(vv) {
      return vv instanceof HTMLElement && (!!(vv.isContentEditable || vv instanceof HTMLTextAreaElement || vv instanceof HTMLSelectElement) || vv instanceof HTMLInputElement && !ev.has(vv.type))
    }

    function pv(vv) {
      let zv = null;
      const Pv = Pv => {
          const Sv = gv(Pv);
          Sv !== zv && (zv = Sv, vv(hv.f.UiCapture, hv.u.Keyboard, 0, 0, Sv ? hv.u.Keyboard : 0))
        },
        Sv = vv => {
          Pv(vv.target)
        },
        ev = vv => {
          Pv(vv.relatedTarget)
        },
        pv = () => {
          Pv(document.activeElement)
        },
        dv = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", Sv, dv), document.addEventListener("focusout", ev, dv), document.addEventListener("keydown", pv, dv), Pv(document.activeElement), () => {
        document.removeEventListener("focusin", Sv, dv), document.removeEventListener("focusout", ev, dv), document.removeEventListener("keydown", pv, dv)
      }
    }
    const dv = new Map;

    function Nv(vv, zv) {
      var Pv;
      let hv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      dv.set(hv, (null !== (Pv = dv.get(hv)) && void 0 !== Pv ? Pv : 0) & ~vv | zv & vv);
      let ev = 0;
      for (const Sv of dv.values()) ev |= Sv;
      return (0, Sv.E)(vv, ev & vv)
    }
  },
  40042: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => lv,
      c: () => dv,
      d: () => pv,
      g: () => Nv
    });
    var hv = Pv(1889);
    let Sv = null,
      ev = 0;
    const gv = new Set;

    function pv() {
      return Sv
    }

    function dv() {
      return ev
    }

    function Nv(vv) {
      Sv = vv, ev++, (0, hv.e)();
      for (const zv of gv) zv()
    }

    function lv(vv) {
      gv.add(vv)
    }
  },
  40348: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => hv
    });
    const hv = 2e3
  },
  40194: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Gv,
      g: () => Nv,
      i: () => Cv,
      k: () => cv,
      n: () => iv,
      o: () => mv
    });
    var hv = Pv(22),
      Sv = Pv(26),
      ev = Pv(2629),
      gv = Pv(1285),
      pv = Pv(8914),
      dv = Pv(2634);

    function Nv() {
      var vv;
      const zv = (Pv = hv.c.get("clientEscMenuOptions"), Sv = (0, ev.M)(), {
        sampleCount: Pv.antiAliasing ? 4 : 1,
        n: (0, ev.C)(Pv.pixelScale, Sv),
        pixelated: (0, ev.y)(Pv.pixelSmoothing)
      });
      var Pv, Sv;
      return zv.sampleCount > 1 && (0, pv.d)() && (zv.sampleCount = 1), zv.n = null !== (vv = (0, pv.t)()) && void 0 !== vv ? vv : zv.n, zv
    }
    let lv = null,
      Tv = null;
    const Wv = new Set;
    let wv = null;

    function av() {
      for (const vv of Wv) vv()
    }

    function sv() {
      if (null === lv) {
        const vv = document.createElement("div");
        vv.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", vv.setAttribute("aria-hidden", "true"), document.body.append(vv), Tv = vv, lv = new ev.d(vv, av)
      }
      return lv
    }

    function Cv(vv) {
      const zv = (0, ev.p)(),
        [Pv, hv] = sv().size(zv);
      return (0, ev.l)(Pv, hv, zv, vv.n)
    }

    function iv(vv) {
      var zv, Pv, hv, Sv;
      const pv = (0, ev.p)(),
        [dv, lv] = sv().size(pv);
      if (dv <= 0 || lv <= 0) return null;
      const Tv = (0, ev.l)(dv, lv, pv, Nv().n);
      return (0, ev.h)(vv, Tv), vv.style.left = `${null!==(zv=null===(Pv=wv)||void 0===Pv?void 0:Pv.rect.left)&&void 0!==zv?zv:0}px`, vv.style.top = `${null!==(hv=null===(Sv=wv)||void 0===Sv?void 0:Sv.rect.top)&&void 0!==hv?hv:0}px`, (0, gv.Q)(vv.style, wv), Tv
    }

    function cv(vv) {
      wv = vv, sv(), (0, gv.H)(Tv.style, vv, ""), av()
    }

    function Gv(vv, zv) {
      vv.style.imageRendering = (0, ev.O)(zv.pixelated)
    }

    function mv(vv, zv) {
      const Pv = (0, Sv.l)("appManagerUpdated|clientEscMenuOptions", (() => {
          Gv(vv, Nv()), zv()
        })),
        hv = (0, pv.C)(zv),
        ev = (0, dv.l)(zv);
      return sv(), Wv.add(zv), () => {
        Pv(), hv(), ev(), Wv.delete(zv)
      }
    }
  },
  40352: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => gv,
      c: () => ev,
      d: () => Sv
    });
    let hv = null;

    function Sv(vv) {
      hv = vv
    }

    function ev(vv) {
      hv === vv && (hv = null)
    }

    function gv() {
      var vv;
      null === (vv = hv) || void 0 === vv || vv()
    }
  },
  40324: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Sv,
      g: () => Nv,
      j: () => ev,
      k: () => Tv,
      m: () => lv,
      o: () => Wv
    });
    var hv = Pv(3473);
    class Sv extends Error {
      constructor(vv, zv, Pv) {
        super(`${"fetch"===vv?"fetching":"decoding"} ${zv} failed`, Pv), this.stage = vv, this.source = zv, this.name = "ShellImageError"
      }
    }
    async function ev(vv) {
      let zv, Pv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hv.I,
        ev = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      if ("string" === typeof vv) try {
        zv = await Pv(vv)
      } catch (gv) {
        throw new Sv("fetch", vv, {
          cause: gv
        })
      } else zv = vv;
      try {
        const vv = new Blob([zv.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(vv, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: ev
        })
      } catch (gv) {
        throw new Sv("decode", "string" === typeof vv ? vv : `${zv.byteLength} bytes`, {
          cause: gv
        })
      }
    }
    let gv = null;
    const pv = new Map;
    let dv = 1;

    function Nv(vv) {
      if (gv = vv, null !== vv) {
        for (const [zv, Pv] of pv) vv.bzv(zv, Pv);
        pv.clear()
      }
    }

    function lv(vv) {
      const zv = dv++;
      return gv ? gv.bzv(zv, vv) : pv.set(zv, vv), zv
    }
    async function Tv(vv, zv, Pv) {
      const hv = await ev(vv, zv, Pv);
      return {
        id: lv(hv),
        width: hv.width,
        height: hv.height
      }
    }

    function Wv(vv) {
      var zv;
      const Pv = pv.get(vv);
      if (Pv) return Pv.close(), void pv.delete(vv);
      null === (zv = gv) || void 0 === zv || zv.rzv(vv)
    }
  },
  40217: (vv, zv, Pv) => {
    function hv(vv, zv) {
      if (!Object.prototype.hasOwnProperty.call(vv, zv)) throw new TypeError("attempted to use private field on non-instance");
      return vv
    }
    Pv.d(zv, {
      e: () => hv
    })
  },
  40221: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Sv
    });
    var hv = 0;

    function Sv(vv) {
      return "__private_" + hv++ + "_" + vv
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);