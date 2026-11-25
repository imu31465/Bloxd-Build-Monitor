export const id = 88;
export const ids = [88];
export const modules = {
  41068: (tt, et, Vt) => {
    Vt.d(et, {
      $: () => it,
      B: () => It,
      C: () => Lt,
      G: () => Zt,
      K: () => gt,
      O: () => kt,
      S: () => Rt,
      T: () => Ft,
      X: () => ct,
      Y: () => Yt,
      ab: () => Pt,
      d: () => Bt,
      h: () => zt,
      l: () => Wt,
      o: () => pt,
      s: () => St,
      w: () => vt,
      x: () => Gt
    });
    var Ot = Vt(1492),
      qt = Vt(31),
      Dt = Vt(1387),
      mt = Vt(2458),
      dt = Vt(4980),
      jt = Vt(4951);
    let Ht, Xt = !1,
      Qt = !1,
      lt = !1,
      Et = !1;
    const ft = 1300,
      wt = 3e3;
    let yt = 0,
      Nt = !1,
      Mt = !1,
      bt = 0;
    const Jt = 2;
    let Ct = !1,
      ut = !1;
    const Kt = new Set,
      ht = new Set;

    function vt() {
      return Xt
    }

    function Wt() {
      return Mt
    }

    function St() {
      return ut
    }

    function ct() {
      return (0, Dt.r)() && !ut
    }

    function Rt(tt) {
      let et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (tt !== ut) {
        ut = tt;
        for (const tt of [...ht]) tt(ut);
        et && it()
      }
    }

    function It(tt) {
      return ht.add(tt), () => {
        ht.delete(tt)
      }
    }

    function Pt() {
      (0, dt.g)(mt.u.Menu, (0, Dt.r)() ? 0 : mt.u.Menu)
    }

    function Zt() {
      Mt = !1, bt = 0, Pt(), it()
    }

    function Lt(tt) {
      return Kt.add(tt), () => {
        Kt.delete(tt)
      }
    }

    function Ft(tt) {
      Qt = !1, tt !== Xt && (Xt = tt, Et = !1, clearTimeout(Ht), lt = !Xt && Ct, Xt ? (Nt = !1, Mt = !1, bt = 0) : ct() && !Ct && (Mt = !0), Ct = !1, Xt && !ct() && Tt(), st(), lt && it())
    }

    function kt(tt) {
      tt !== Nt && (Nt = tt, tt || it())
    }

    function Gt() {
      Qt = !1, Et || !0 !== Ut() || (Et = !0, clearTimeout(Ht), Ht = setTimeout(ot, ft))
    }

    function zt() {
      return (!Qt || performance.now() - yt > wt) && (Qt = (0, jt.C)().lockPointer(), yt = performance.now()), Qt
    }

    function ot() {
      rt() && At() && zt()
    }

    function rt() {
      return ct() && !Xt && !Nt && !(0, Ot.j)()
    }

    function Ut() {
      var tt;
      return "undefined" === typeof navigator || null === (tt = navigator.userActivation) || void 0 === tt ? void 0 : tt.isActive
    }

    function At() {
      return lt && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== Ut()
    }

    function it() {
      ct() ? rt() && !Mt && At() && zt() : Xt && !Ct && Tt()
    }

    function Yt() {
      Mt ? navigator.vendor.startsWith("Apple") ? xt() : bt = Jt : it()
    }

    function Bt() {
      bt > 0 && 0 === --bt && xt()
    }

    function pt() {
      bt = 0
    }

    function xt() {
      rt() && !0 === Ut() && zt()
    }

    function Tt() {
      Ct = !0, (0, jt.C)().unlockPointer()
    }

    function gt() {
      Qt = !1, lt = !1, Et = !1, clearTimeout(Ht), Nt = !1, Mt = !1, bt = 0, Ct = !1;
      const tt = Xt;
      Xt = !1, tt && st()
    }

    function st() {
      for (const tt of [...Kt]) tt(Xt);
      qt.j.sw("pointerLockUpdate", Xt)
    }
  },
  40880: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => lt,
      g: () => dt,
      h: () => Qt,
      l: () => Ht,
      m: () => mt,
      o: () => Xt,
      q: () => jt
    });
    let Ot = null,
      qt = null,
      Dt = null;

    function mt(tt) {
      Ot = tt
    }

    function dt() {
      return Ot
    }

    function jt(tt) {
      qt = tt
    }

    function Ht() {
      return qt
    }

    function Xt(tt) {
      Dt = tt
    }

    function Qt() {
      return Dt
    }

    function lt() {
      var tt, et;
      return !0 === (null === (tt = qt) || void 0 === tt || null === (et = tt.currentViewer) || void 0 === et ? void 0 : et.inPlayback)
    }
  },
  4951: (tt, et, Vt) => {
    Vt.d(et, {
      A: () => mt,
      C: () => dt,
      E: () => vt,
      c: () => ht,
      d: () => Jt,
      h: () => It,
      i: () => Rt,
      j: () => Nt,
      k: () => ut,
      m: () => bt,
      o: () => Ct,
      p: () => Wt,
      t: () => St,
      x: () => ct,
      z: () => Mt
    });
    var Ot = Vt(4958);
    const qt = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let Dt = qt;

    function mt(tt) {
      Dt = null !== tt && void 0 !== tt ? tt : qt
    }

    function dt() {
      return Dt
    }
    const jt = new Set,
      Ht = new Set;
    let Xt = -1;
    const Qt = new Set,
      lt = new Set;
    let Et = 0,
      ft = 0;
    const wt = new Set,
      yt = new Set;

    function Nt(tt) {
      return jt.add(tt), () => {
        jt.delete(tt)
      }
    }

    function Mt(tt, et) {
      for (const Ot of jt) try {
        Ot(tt)
      } catch (Vt) {
        et(Vt)
      }
    }

    function bt(tt) {
      return Ht.add(tt), () => {
        Ht.delete(tt)
      }
    }

    function Jt(tt, et) {
      const Vt = Xt < 0 ? 0 : tt - Xt;
      Xt = tt;
      for (const qt of Ht) try {
        qt(Vt)
      } catch (Ot) {
        et(Ot)
      }
    }

    function Ct(tt) {
      return Qt.add(tt), () => {
        Qt.delete(tt)
      }
    }

    function ut(tt) {
      return lt.add(tt), () => {
        lt.delete(tt)
      }
    }
    let Kt = 0;

    function ht(tt) {
      Kt += tt
    }

    function vt() {
      const tt = Kt;
      return Kt = 0, tt
    }

    function Wt(tt) {
      return wt.add(tt), () => {
        wt.delete(tt)
      }
    }

    function St(tt) {
      return yt.add(tt), () => {
        yt.delete(tt)
      }
    }

    function ct() {
      Et = 0, ft = 0, Xt = -1
    }

    function Rt(tt, et) {
      if ("paced" === tt) return ft += et, null;
      if ("drawn" !== tt && "skipped" !== tt) return null;
      const Vt = et + ft;
      return ft = 0, Vt
    }

    function It(tt, et, Vt, qt) {
      const Dt = (0, Ot.f)(et),
        mt = tt > 0 ? performance.now() : 0;
      for (let Ot = 0; Ot < tt; Ot++)
        for (const tt of wt) try {
          tt()
        } catch (dt) {
          qt(dt)
        }
      if (tt > 0 && ht(performance.now() - mt), null !== Vt) {
        for (const tt of Qt) try {
          tt(Vt)
        } catch (dt) {
          qt(dt)
        }
        Et += Vt
      }
      if ("drawn" === et) {
        const tt = Et;
        Et = 0;
        for (const et of lt) try {
          et(tt)
        } catch (dt) {
          qt(dt)
        }
      }
      for (const Ot of yt) try {
        Ot(tt, Dt)
      } catch (dt) {
        qt(dt)
      }
    }
  },
  41080: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Ot
    });
    const Ot = {
      stop: () => Ot,
      fade: () => Ot,
      rate: () => Ot,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => Ot,
      setPannerAttr: () => Ot,
      setPosition: () => Ot
    }
  },
  4971: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => jt,
      e: () => Dt,
      i: () => dt
    });
    var Ot = Vt(2458),
      qt = Vt(4974);

    function Dt(tt) {
      let {
        action: et,
        flags: Vt
      } = tt;
      return "mid-fire" === et && 0 !== (Vt & Ot.b.AltLeftClick)
    }
    const mt = new Set;

    function dt(tt) {
      return mt.add(tt), () => {
        mt.delete(tt)
      }
    }

    function jt(tt) {
      const et = qt.c[255 & tt];
      if (void 0 === et) return;
      const Vt = tt >>> 8 & 255,
        Dt = {
          action: et,
          down: 0 !== (Vt & Ot.b.Down),
          flags: Vt,
          press: tt >>> 16
        };
      for (const Ot of mt) Ot(Dt)
    }
  },
  4974: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => qt,
      e: () => Dt,
      g: () => mt,
      h: () => Ot,
      i: () => dt
    });
    const Ot = {
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
      qt = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      Dt = {
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
      mt = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      dt = [16]
  },
  41106: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Xt,
      c: () => Ht,
      e: () => jt
    });
    var Ot = Vt(4963),
      qt = Vt(2458),
      Dt = Vt(4980);
    let mt = !1,
      dt = !1;

    function jt(tt) {
      mt = !0;
      try {
        tt()
      } finally {
        mt = !1
      }
    }

    function Ht(tt, et) {
      if (mt) return !1;
      switch (tt) {
        case Ot.L.MouseDown:
        case Ot.L.MouseUp:
        case Ot.L.TouchStart:
        case Ot.L.TouchEnd:
        case Ot.L.TouchCancel:
        case Ot.L.TouchButton:
          return !0;
        case Ot.L.KeyDown:
        case Ot.L.KeyUp:
          return 0 === (et & qt.e.Repeat) && !(0, Dt.f)(document.activeElement);
        default:
          return !1
      }
    }

    function Xt(tt) {
      dt || (dt = !0, queueMicrotask((() => {
        dt = !1, tt()
      })))
    }
  },
  4980: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => dt,
      f: () => mt,
      g: () => Ht
    });
    var Ot = Vt(2458),
      qt = Vt(2465);
    const Dt = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function mt(tt) {
      return tt instanceof HTMLElement && (!!(tt.isContentEditable || tt instanceof HTMLTextAreaElement || tt instanceof HTMLSelectElement) || tt instanceof HTMLInputElement && !Dt.has(tt.type))
    }

    function dt(tt) {
      let et = null;
      const Vt = Vt => {
          const qt = mt(Vt);
          qt !== et && (et = qt, tt(Ot.g.UiCapture, Ot.u.Keyboard, 0, 0, qt ? Ot.u.Keyboard : 0))
        },
        qt = tt => {
          Vt(tt.target)
        },
        Dt = tt => {
          Vt(tt.relatedTarget)
        },
        dt = () => {
          Vt(document.activeElement)
        },
        jt = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", qt, jt), document.addEventListener("focusout", Dt, jt), document.addEventListener("keydown", dt, jt), Vt(document.activeElement), () => {
        document.removeEventListener("focusin", qt, jt), document.removeEventListener("focusout", Dt, jt), document.removeEventListener("keydown", dt, jt)
      }
    }
    const jt = new Map;

    function Ht(tt, et) {
      var Vt;
      let Ot = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      jt.set(Ot, (null !== (Vt = jt.get(Ot)) && void 0 !== Vt ? Vt : 0) & ~tt | et & tt);
      let Dt = 0;
      for (const qt of jt.values()) Dt |= qt;
      return (0, qt.A)(tt, Dt & tt)
    }
  },
  41146: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Xt,
      f: () => jt,
      j: () => dt,
      m: () => Ht
    });
    var Ot = Vt(2034);
    let qt = null,
      Dt = 0;
    const mt = new Set;

    function dt() {
      return qt
    }

    function jt() {
      return Dt
    }

    function Ht(tt) {
      qt = tt, Dt++, (0, Ot.e)();
      for (const et of mt) et()
    }

    function Xt(tt) {
      mt.add(tt)
    }
  },
  41180: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Ot
    });
    const Ot = 2e3
  },
  41075: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => ut,
      g: () => lt,
      j: () => bt,
      n: () => Ct,
      p: () => Jt,
      s: () => Kt
    });
    var Ot = Vt(206),
      qt = Vt(26),
      Dt = Vt(31),
      mt = Vt(2984),
      dt = Vt(1397),
      jt = Vt(34317),
      Ht = Vt(340),
      Xt = Vt(106),
      Qt = Vt(202);

    function lt() {
      var tt;
      const et = (0, mt.E)(),
        Vt = function(tt, et) {
          return {
            sampleCount: tt.antiAliasing ? 4 : 1,
            n: (0, mt.w)(tt.pixelScale, et),
            pixelated: (0, mt.v)(tt.pixelSmoothing)
          }
        }(qt.b.get("clientEscMenuOptions"), et);
      return Vt.sampleCount > 1 && (0, jt.e)() && (Vt.sampleCount = 1), Vt.n = null !== (tt = (0, jt.n)()) && void 0 !== tt ? tt : Vt.n, Ot.f.includes((0, Xt.getSoftwareRenderer)()) && (Vt.sampleCount = 1, Vt.n = Math.max(Vt.n, (0, mt.w)(Qt.n.pixelScale, et))), Vt
    }
    let Et = null,
      ft = null;
    const wt = new Set;
    let yt = null;

    function Nt() {
      for (const tt of wt) tt()
    }

    function Mt() {
      if (null === Et) {
        const tt = document.createElement("div");
        tt.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", tt.setAttribute("aria-hidden", "true"), document.body.append(tt), ft = tt, Et = new mt.b(tt, Nt)
      }
      return Et
    }

    function bt(tt) {
      const et = (0, mt.m)(),
        [Vt, Ot] = Mt().size(et);
      return (0, mt.g)(Vt, Ot, et, tt.n)
    }

    function Jt(tt) {
      var et, Vt, Ot, qt;
      const Dt = (0, mt.m)(),
        [jt, Ht] = Mt().size(Dt);
      if (jt <= 0 || Ht <= 0) return null;
      const Xt = (0, mt.g)(jt, Ht, Dt, lt().n);
      return (0, mt.c)(tt, Xt), tt.style.left = `${null!==(et=null===(Vt=yt)||void 0===Vt?void 0:Vt.rect.left)&&void 0!==et?et:0}px`, tt.style.top = `${null!==(Ot=null===(qt=yt)||void 0===qt?void 0:qt.rect.top)&&void 0!==Ot?Ot:0}px`, (0, dt.V)(tt.style, yt), Xt
    }

    function Ct(tt) {
      yt = tt, Mt(), (0, dt.M)(ft.style, tt, ""), Nt()
    }

    function ut(tt, et) {
      tt.style.imageRendering = (0, mt.I)(et.pixelated)
    }

    function Kt(tt, et) {
      const Vt = (0, Dt.n)("appManagerUpdated|clientEscMenuOptions", (() => {
          ut(tt, lt()), et()
        })),
        Ot = (0, jt.x)(et),
        qt = (0, Ht.l)(et);
      return Mt(), wt.add(et), () => {
        Vt(), Ot(), qt(), wt.delete(et)
      }
    }
  },
  41189: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => mt,
      h: () => Dt,
      l: () => qt
    });
    let Ot = null;

    function qt(tt) {
      Ot = tt
    }

    function Dt(tt) {
      Ot === tt && (Ot = null)
    }

    function mt() {
      var tt;
      null === (tt = Ot) || void 0 === tt || tt()
    }
  },
  41141: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => qt,
      f: () => Ht,
      j: () => Dt,
      m: () => Qt,
      n: () => Xt,
      p: () => lt
    });
    var Ot = Vt(2965);
    class qt extends Error {
      constructor(tt, et, Vt) {
        super(`${"fetch"===tt?"fetching":"decoding"} ${et} failed`, Vt), this.stage = tt, this.source = et, this.name = "ShellImageError"
      }
    }
    async function Dt(tt) {
      let et, Vt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ot.I,
        Dt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      if ("string" === typeof tt) try {
        et = await Vt(tt)
      } catch (mt) {
        throw new qt("fetch", tt, {
          cause: mt
        })
      } else et = tt;
      try {
        const tt = new Blob([et.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(tt, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: Dt
        })
      } catch (mt) {
        throw new qt("decode", "string" === typeof tt ? tt : `${et.byteLength} bytes`, {
          cause: mt
        })
      }
    }
    let mt = null;
    const dt = new Map;
    let jt = 1;

    function Ht(tt) {
      if (mt = tt, null !== tt) {
        for (const [et, Vt] of dt) tt.vOt(et, Vt);
        dt.clear()
      }
    }

    function Xt(tt) {
      const et = jt++;
      return mt ? mt.vOt(et, tt) : dt.set(et, tt), et
    }
    async function Qt(tt, et, Vt) {
      const Ot = await Dt(tt, et, Vt);
      return {
        id: Xt(Ot),
        width: Ot.width,
        height: Ot.height
      }
    }

    function lt(tt) {
      var et;
      const Vt = dt.get(tt);
      if (Vt) return Vt.close(), void dt.delete(tt);
      null === (et = mt) || void 0 === et || et.WOt(tt)
    }
  },
  41083: (tt, et, Vt) => {
    function Ot(tt, et) {
      if (!Object.prototype.hasOwnProperty.call(tt, et)) throw new TypeError("attempted to use private field on non-instance");
      return tt
    }
    Vt.d(et, {
      e: () => Ot
    })
  },
  41089: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => qt
    });
    var Ot = 0;

    function qt(tt) {
      return "__private_" + Ot++ + "_" + tt
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);