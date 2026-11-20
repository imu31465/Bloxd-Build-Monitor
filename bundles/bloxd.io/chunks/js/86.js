export const id = 86;
export const ids = [86];
export const modules = {
  40154: (bb, ub, hb) => {
    hb.d(ub, {
      A: () => ib,
      C: () => Jb,
      E: () => tb,
      G: () => Tb,
      J: () => Nb,
      N: () => gb,
      Q: () => eb,
      S: () => zb,
      U: () => yb,
      V: () => Eb,
      Y: () => vb,
      e: () => Vb,
      h: () => Mb,
      l: () => Db,
      p: () => Fb,
      t: () => xb,
      v: () => nb,
      w: () => sb
    });
    var Bb = hb(1288),
      Ob = hb(16),
      Gb = hb(1184),
      Ub = hb(2273),
      Lb = hb(4584),
      Yb = hb(4545);
    let Sb, ab = !1,
      Hb = !1,
      wb = !1,
      Zb = !1;
    const Xb = 1300,
      pb = 3e3;
    let ob = 0,
      Ab = !1,
      lb = !1,
      Kb = 0;
    const Wb = 2;
    let Cb = !1,
      db = !1;
    const rb = new Set,
      jb = new Set;

    function nb() {
      return ab
    }

    function Db() {
      return lb
    }

    function xb() {
      return db
    }

    function zb() {
      return (0, Gb.m)() && !db
    }

    function gb(bb) {
      let ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (bb !== db) {
        db = bb;
        for (const bb of [...jb]) bb(db);
        ub && Eb()
      }
    }

    function ib(bb) {
      return jb.add(bb), () => {
        jb.delete(bb)
      }
    }

    function vb() {
      (0, Lb.j)(Ub.t.Menu, (0, Gb.m)() ? 0 : Ub.t.Menu)
    }

    function tb() {
      lb = !1, Kb = 0, vb(), Eb()
    }

    function Jb(bb) {
      return rb.add(bb), () => {
        rb.delete(bb)
      }
    }

    function eb(bb) {
      Hb = !1, bb !== ab && (ab = bb, Zb = !1, clearTimeout(Sb), wb = !ab && Cb, ab ? (Ab = !1, lb = !1, Kb = 0) : zb() && !Cb && (lb = !0), Cb = !1, ab && !zb() && kb(), cb(), wb && Eb())
    }

    function Nb(bb) {
      bb !== Ab && (Ab = bb, bb || Eb())
    }

    function sb() {
      Hb = !1, Zb || !0 !== Pb() || (Zb = !0, clearTimeout(Sb), Sb = setTimeout(mb, Xb))
    }

    function Mb() {
      return (!Hb || performance.now() - ob > pb) && (Hb = (0, Yb.K)().lockPointer(), ob = performance.now()), Hb
    }

    function mb() {
      Ib() && qb() && Mb()
    }

    function Ib() {
      return zb() && !ab && !Ab && !(0, Bb.f)()
    }

    function Pb() {
      var bb;
      return "undefined" === typeof navigator || null === (bb = navigator.userActivation) || void 0 === bb ? void 0 : bb.isActive
    }

    function qb() {
      return wb && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== Pb()
    }

    function Eb() {
      zb() ? Ib() && !lb && qb() && Mb() : ab && !Cb && kb()
    }

    function yb() {
      lb ? navigator.vendor.startsWith("Apple") ? fb() : Kb = Wb : Eb()
    }

    function Vb() {
      Kb > 0 && 0 === --Kb && fb()
    }

    function Fb() {
      Kb = 0
    }

    function fb() {
      Ib() && !0 === Pb() && Mb()
    }

    function kb() {
      Cb = !0, (0, Yb.K)().unlockPointer()
    }

    function Tb() {
      Hb = !1, wb = !1, Zb = !1, clearTimeout(Sb), Ab = !1, lb = !1, Kb = 0, Cb = !1;
      const bb = ab;
      ab = !1, bb && cb()
    }

    function cb() {
      for (const bb of [...rb]) bb(ab);
      Ob.i.vp("pointerLockUpdate", ab)
    }
  },
  40133: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => wb,
      f: () => Lb,
      i: () => Hb,
      m: () => Sb,
      q: () => Ub,
      s: () => ab,
      w: () => Yb
    });
    let Bb = null,
      Ob = null,
      Gb = null;

    function Ub(bb) {
      Bb = bb
    }

    function Lb() {
      return Bb
    }

    function Yb(bb) {
      Ob = bb
    }

    function Sb() {
      return Ob
    }

    function ab(bb) {
      Gb = bb
    }

    function Hb() {
      return Gb
    }

    function wb() {
      var bb, ub;
      return !0 === (null === (bb = Ob) || void 0 === bb || null === (ub = bb.currentViewer) || void 0 === ub ? void 0 : ub.inPlayback)
    }
  },
  4545: (bb, ub, hb) => {
    hb.d(ub, {
      A: () => xb,
      D: () => zb,
      F: () => lb,
      I: () => Ub,
      K: () => Lb,
      N: () => nb,
      e: () => jb,
      g: () => Wb,
      h: () => ib,
      k: () => gb,
      o: () => Ab,
      p: () => db,
      q: () => Kb,
      u: () => Cb,
      x: () => Db
    });
    var Bb = hb(4547);
    const Ob = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let Gb = Ob;

    function Ub(bb) {
      Gb = null !== bb && void 0 !== bb ? bb : Ob
    }

    function Lb() {
      return Gb
    }
    const Yb = new Set,
      Sb = new Set;
    let ab = -1;
    const Hb = new Set,
      wb = new Set;
    let Zb = 0,
      Xb = 0;
    const pb = new Set,
      ob = new Set;

    function Ab(bb) {
      return Yb.add(bb), () => {
        Yb.delete(bb)
      }
    }

    function lb(bb, ub) {
      for (const Bb of Yb) try {
        Bb(bb)
      } catch (hb) {
        ub(hb)
      }
    }

    function Kb(bb) {
      return Sb.add(bb), () => {
        Sb.delete(bb)
      }
    }

    function Wb(bb, ub) {
      const hb = ab < 0 ? 0 : bb - ab;
      ab = bb;
      for (const Ob of Sb) try {
        Ob(hb)
      } catch (Bb) {
        ub(Bb)
      }
    }

    function Cb(bb) {
      return Hb.add(bb), () => {
        Hb.delete(bb)
      }
    }

    function db(bb) {
      return wb.add(bb), () => {
        wb.delete(bb)
      }
    }
    let rb = 0;

    function jb(bb) {
      rb += bb
    }

    function nb() {
      const bb = rb;
      return rb = 0, bb
    }

    function Db(bb) {
      return pb.add(bb), () => {
        pb.delete(bb)
      }
    }

    function xb(bb) {
      return ob.add(bb), () => {
        ob.delete(bb)
      }
    }

    function zb() {
      Zb = 0, Xb = 0, ab = -1
    }

    function gb(bb, ub) {
      if ("paced" === bb) return Xb += ub, null;
      if ("drawn" !== bb && "skipped" !== bb) return null;
      const hb = ub + Xb;
      return Xb = 0, hb
    }

    function ib(bb, ub, hb, Ob) {
      const Gb = (0, Bb.k)(ub),
        Ub = bb > 0 ? performance.now() : 0;
      for (let Bb = 0; Bb < bb; Bb++)
        for (const bb of pb) try {
          bb()
        } catch (Lb) {
          Ob(Lb)
        }
      if (bb > 0 && jb(performance.now() - Ub), null !== hb) {
        for (const bb of Hb) try {
          bb(hb)
        } catch (Lb) {
          Ob(Lb)
        }
        Zb += hb
      }
      if ("drawn" === ub) {
        const bb = Zb;
        Zb = 0;
        for (const ub of wb) try {
          ub(bb)
        } catch (Lb) {
          Ob(Lb)
        }
      }
      for (const Bb of ob) try {
        Bb(bb, Gb)
      } catch (Lb) {
        Ob(Lb)
      }
    }
  },
  40347: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Bb
    });
    const Bb = {
      stop: () => Bb,
      fade: () => Bb,
      rate: () => Bb,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => Bb,
      setPannerAttr: () => Bb,
      setPosition: () => Bb
    }
  },
  4570: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Yb,
      c: () => Gb,
      e: () => Lb
    });
    var Bb = hb(2273),
      Ob = hb(4575);

    function Gb(bb) {
      let {
        action: ub,
        flags: hb
      } = bb;
      return "mid-fire" === ub && 0 !== (hb & Bb.b.AltLeftClick)
    }
    const Ub = new Set;

    function Lb(bb) {
      return Ub.add(bb), () => {
        Ub.delete(bb)
      }
    }

    function Yb(bb) {
      const ub = Ob.b[255 & bb];
      if (void 0 === ub) return;
      const hb = bb >>> 8 & 255,
        Gb = {
          action: ub,
          down: 0 !== (hb & Bb.b.Down),
          flags: hb,
          press: bb >>> 16
        };
      for (const Bb of Ub) Bb(Gb)
    }
  },
  4575: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ob,
      c: () => Gb,
      g: () => Ub,
      k: () => Bb,
      n: () => Lb
    });
    const Bb = {
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
      Ob = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      Gb = {
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
      Ub = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      Lb = [16]
  },
  40424: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => ab,
      f: () => Sb,
      g: () => Yb
    });
    var Bb = hb(4564),
      Ob = hb(2273),
      Gb = hb(4584);
    let Ub = !1,
      Lb = !1;

    function Yb(bb) {
      Ub = !0;
      try {
        bb()
      } finally {
        Ub = !1
      }
    }

    function Sb(bb, ub) {
      if (Ub) return !1;
      switch (bb) {
        case Bb.C.MouseDown:
        case Bb.C.MouseUp:
        case Bb.C.TouchStart:
        case Bb.C.TouchEnd:
        case Bb.C.TouchCancel:
        case Bb.C.TouchButton:
          return !0;
        case Bb.C.KeyDown:
        case Bb.C.KeyUp:
          return 0 === (ub & Ob.e.Repeat) && !(0, Gb.f)(document.activeElement);
        default:
          return !1
      }
    }

    function ab(bb) {
      Lb || (Lb = !0, queueMicrotask((() => {
        Lb = !1, bb()
      })))
    }
  },
  4584: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Lb,
      f: () => Ub,
      j: () => Sb
    });
    var Bb = hb(2273),
      Ob = hb(2276);
    const Gb = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function Ub(bb) {
      return bb instanceof HTMLElement && (!!(bb.isContentEditable || bb instanceof HTMLTextAreaElement || bb instanceof HTMLSelectElement) || bb instanceof HTMLInputElement && !Gb.has(bb.type))
    }

    function Lb(bb) {
      let ub = null;
      const hb = hb => {
          const Ob = Ub(hb);
          Ob !== ub && (ub = Ob, bb(Bb.i.UiCapture, Bb.t.Keyboard, 0, 0, Ob ? Bb.t.Keyboard : 0))
        },
        Ob = bb => {
          hb(bb.target)
        },
        Gb = bb => {
          hb(bb.relatedTarget)
        },
        Lb = () => {
          hb(document.activeElement)
        },
        Yb = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", Ob, Yb), document.addEventListener("focusout", Gb, Yb), document.addEventListener("keydown", Lb, Yb), hb(document.activeElement), () => {
        document.removeEventListener("focusin", Ob, Yb), document.removeEventListener("focusout", Gb, Yb), document.removeEventListener("keydown", Lb, Yb)
      }
    }
    const Yb = new Map;

    function Sb(bb, ub) {
      var hb;
      let Bb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      Yb.set(Bb, (null !== (hb = Yb.get(Bb)) && void 0 !== hb ? hb : 0) & ~bb | ub & bb);
      let Gb = 0;
      for (const Ob of Yb.values()) Gb |= Ob;
      return (0, Ob.C)(bb, Gb & bb)
    }
  },
  40177: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => ab,
      g: () => Yb,
      i: () => Lb,
      l: () => Sb
    });
    var Bb = hb(1824);
    let Ob = null,
      Gb = 0;
    const Ub = new Set;

    function Lb() {
      return Ob
    }

    function Yb() {
      return Gb
    }

    function Sb(bb) {
      Ob = bb, Gb++, (0, Bb.e)();
      for (const ub of Ub) ub()
    }

    function ab(bb) {
      Ub.add(bb)
    }
  },
  40483: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Bb
    });
    const Bb = 2e3
  },
  40338: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Kb,
      f: () => Sb,
      g: () => ob,
      i: () => lb,
      l: () => Ab,
      n: () => Wb
    });
    var Bb = hb(13),
      Ob = hb(16),
      Gb = hb(2594),
      Ub = hb(1193),
      Lb = hb(9e3),
      Yb = hb(2602);

    function Sb() {
      var bb;
      const ub = (hb = Bb.d.get("clientEscMenuOptions"), Ob = (0, Gb.C)(), {
        sampleCount: hb.antiAliasing ? 4 : 1,
        n: (0, Gb.w)(hb.pixelScale, Ob),
        pixelated: (0, Gb.s)(hb.pixelSmoothing)
      });
      var hb, Ob;
      return ub.sampleCount > 1 && (0, Lb.c)() && (ub.sampleCount = 1), ub.n = null !== (bb = (0, Lb.o)()) && void 0 !== bb ? bb : ub.n, ub
    }
    let ab = null,
      Hb = null;
    const wb = new Set;
    let Zb = null;

    function Xb() {
      for (const bb of wb) bb()
    }

    function pb() {
      if (null === ab) {
        const bb = document.createElement("div");
        bb.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", bb.setAttribute("aria-hidden", "true"), document.body.append(bb), Hb = bb, ab = new Gb.c(bb, Xb)
      }
      return ab
    }

    function ob(bb) {
      const ub = (0, Gb.j)(),
        [hb, Bb] = pb().size(ub);
      return (0, Gb.f)(hb, Bb, ub, bb.n)
    }

    function Ab(bb) {
      var ub, hb, Bb, Ob;
      const Lb = (0, Gb.j)(),
        [Yb, ab] = pb().size(Lb);
      if (Yb <= 0 || ab <= 0) return null;
      const Hb = (0, Gb.f)(Yb, ab, Lb, Sb().n);
      return (0, Gb.e)(bb, Hb), bb.style.left = `${null!==(ub=null===(hb=Zb)||void 0===hb?void 0:hb.rect.left)&&void 0!==ub?ub:0}px`, bb.style.top = `${null!==(Bb=null===(Ob=Zb)||void 0===Ob?void 0:Ob.rect.top)&&void 0!==Bb?Bb:0}px`, (0, Ub.N)(bb.style, Zb), Hb
    }

    function lb(bb) {
      Zb = bb, pb(), (0, Ub.G)(Hb.style, bb, ""), Xb()
    }

    function Kb(bb, ub) {
      bb.style.imageRendering = (0, Gb.E)(ub.pixelated)
    }

    function Wb(bb, ub) {
      const hb = (0, Ob.l)("appManagerUpdated|clientEscMenuOptions", (() => {
          Kb(bb, Sb()), ub()
        })),
        Bb = (0, Lb.z)(ub),
        Gb = (0, Yb.l)(ub);
      return pb(), wb.add(ub), () => {
        hb(), Bb(), Gb(), wb.delete(ub)
      }
    }
  },
  40489: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Ub,
      g: () => Gb,
      h: () => Ob
    });
    let Bb = null;

    function Ob(bb) {
      Bb = bb
    }

    function Gb(bb) {
      Bb === bb && (Bb = null)
    }

    function Ub() {
      var bb;
      null === (bb = Bb) || void 0 === bb || bb()
    }
  },
  40452: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Ob,
      d: () => Sb,
      f: () => Gb,
      j: () => Hb,
      l: () => ab,
      m: () => wb
    });
    var Bb = hb(2688);
    class Ob extends Error {
      constructor(bb, ub, hb) {
        super(`${"fetch"===bb?"fetching":"decoding"} ${ub} failed`, hb), this.stage = bb, this.source = ub, this.name = "ShellImageError"
      }
    }
    async function Gb(bb) {
      let ub, hb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Bb.G,
        Gb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      if ("string" === typeof bb) try {
        ub = await hb(bb)
      } catch (Ub) {
        throw new Ob("fetch", bb, {
          cause: Ub
        })
      } else ub = bb;
      try {
        const bb = new Blob([ub.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(bb, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: Gb
        })
      } catch (Ub) {
        throw new Ob("decode", "string" === typeof bb ? bb : `${ub.byteLength} bytes`, {
          cause: Ub
        })
      }
    }
    let Ub = null;
    const Lb = new Map;
    let Yb = 1;

    function Sb(bb) {
      if (Ub = bb, null !== bb) {
        for (const [ub, hb] of Lb) bb.uBb(ub, hb);
        Lb.clear()
      }
    }

    function ab(bb) {
      const ub = Yb++;
      return Ub ? Ub.uBb(ub, bb) : Lb.set(ub, bb), ub
    }
    async function Hb(bb, ub, hb) {
      const Bb = await Gb(bb, ub, hb);
      return {
        id: ab(Bb),
        width: Bb.width,
        height: Bb.height
      }
    }

    function wb(bb) {
      var ub;
      const hb = Lb.get(bb);
      if (hb) return hb.close(), void Lb.delete(bb);
      null === (ub = Ub) || void 0 === ub || ub.hBb(bb)
    }
  },
  40358: (bb, ub, hb) => {
    function Bb(bb, ub) {
      if (!Object.prototype.hasOwnProperty.call(bb, ub)) throw new TypeError("attempted to use private field on non-instance");
      return bb
    }
    hb.d(ub, {
      e: () => Bb
    })
  },
  40362: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ob
    });
    var Bb = 0;

    function Ob(bb) {
      return "__private_" + Bb++ + "_" + bb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);