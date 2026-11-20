export const id = 85;
export const ids = [85];
export const modules = {
  40150: (bb, cb, sb) => {
    sb.d(cb, {
      $: () => Db,
      C: () => ib,
      G: () => Eb,
      H: () => Fb,
      K: () => Gb,
      L: () => yb,
      N: () => Ob,
      R: () => tb,
      V: () => rb,
      Y: () => wb,
      d: () => ob,
      h: () => Zb,
      i: () => gb,
      m: () => Sb,
      q: () => Bb,
      u: () => Jb,
      x: () => Kb,
      z: () => Pb
    });
    var kb = sb(1371),
      Wb = sb(26),
      ab = sb(1287),
      Tb = sb(2305),
      Ub = sb(4536),
      Ib = sb(4498);
    let Hb, fb = !1,
      Mb = !1,
      Xb = !1,
      nb = !1;
    const mb = 1300,
      lb = 3e3;
    let Qb = 0,
      eb = !1,
      Cb = !1,
      Nb = 0;
    const Vb = 2;
    let Lb = !1,
      ub = !1;
    const Yb = new Set,
      hb = new Set;

    function Jb() {
      return fb
    }

    function gb() {
      return Cb
    }

    function Bb() {
      return ub
    }

    function tb() {
      return (0, ab.r)() && !ub
    }

    function yb(bb) {
      let cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (bb !== ub) {
        ub = bb;
        for (const bb of [...hb]) bb(ub);
        cb && wb()
      }
    }

    function Pb(bb) {
      return hb.add(bb), () => {
        hb.delete(bb)
      }
    }

    function Db() {
      (0, Ub.d)(Tb.z.Menu, (0, ab.r)() ? 0 : Tb.z.Menu)
    }

    function Eb() {
      Cb = !1, Nb = 0, Db(), wb()
    }

    function ib(bb) {
      return Yb.add(bb), () => {
        Yb.delete(bb)
      }
    }

    function Ob(bb) {
      Mb = !1, bb !== fb && (fb = bb, nb = !1, clearTimeout(Hb), Xb = !fb && Lb, fb ? (eb = !1, Cb = !1, Nb = 0) : tb() && !Lb && (Cb = !0), Lb = !1, fb && !tb() && vb(), xb(), Xb && wb())
    }

    function Gb(bb) {
      bb !== eb && (eb = bb, bb || wb())
    }

    function Kb() {
      Mb = !1, nb || !0 !== db() || (nb = !0, clearTimeout(Hb), Hb = setTimeout(zb, mb))
    }

    function Zb() {
      return (!Mb || performance.now() - Qb > lb) && (Mb = (0, Ib.N)().lockPointer(), Qb = performance.now()), Mb
    }

    function zb() {
      qb() && Ab() && Zb()
    }

    function qb() {
      return tb() && !fb && !eb && !(0, kb.g)()
    }

    function db() {
      var bb;
      return "undefined" === typeof navigator || null === (bb = navigator.userActivation) || void 0 === bb ? void 0 : bb.isActive
    }

    function Ab() {
      return Xb && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== db()
    }

    function wb() {
      tb() ? qb() && !Cb && Ab() && Zb() : fb && !Lb && vb()
    }

    function rb() {
      Cb ? navigator.vendor.startsWith("Apple") ? Rb() : Nb = Vb : wb()
    }

    function ob() {
      Nb > 0 && 0 === --Nb && Rb()
    }

    function Sb() {
      Nb = 0
    }

    function Rb() {
      qb() && !0 === db() && Zb()
    }

    function vb() {
      Lb = !0, (0, Ib.N)().unlockPointer()
    }

    function Fb() {
      Mb = !1, Xb = !1, nb = !1, clearTimeout(Hb), eb = !1, Cb = !1, Nb = 0, Lb = !1;
      const bb = fb;
      fb = !1, bb && xb()
    }

    function xb() {
      for (const bb of [...Yb]) bb(fb);
      Wb.j.QQ("pointerLockUpdate", fb)
    }
  },
  40120: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Xb,
      f: () => Ub,
      h: () => Mb,
      l: () => Hb,
      n: () => Tb,
      r: () => fb,
      s: () => Ib
    });
    let kb = null,
      Wb = null,
      ab = null;

    function Tb(bb) {
      kb = bb
    }

    function Ub() {
      return kb
    }

    function Ib(bb) {
      Wb = bb
    }

    function Hb() {
      return Wb
    }

    function fb(bb) {
      ab = bb
    }

    function Mb() {
      return ab
    }

    function Xb() {
      var bb, cb;
      return !0 === (null === (bb = Wb) || void 0 === bb || null === (cb = bb.currentViewer) || void 0 === cb ? void 0 : cb.inPlayback)
    }
  },
  4498: (bb, cb, sb) => {
    sb.d(cb, {
      C: () => gb,
      G: () => Bb,
      H: () => tb,
      L: () => Cb,
      M: () => Tb,
      N: () => Ub,
      P: () => Jb,
      c: () => hb,
      g: () => Vb,
      k: () => Pb,
      o: () => yb,
      r: () => eb,
      u: () => ub,
      v: () => Nb,
      y: () => Lb
    });
    var kb = sb(4507);
    const Wb = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let ab = Wb;

    function Tb(bb) {
      ab = null !== bb && void 0 !== bb ? bb : Wb
    }

    function Ub() {
      return ab
    }
    const Ib = new Set,
      Hb = new Set;
    let fb = -1;
    const Mb = new Set,
      Xb = new Set;
    let nb = 0,
      mb = 0;
    const lb = new Set,
      Qb = new Set;

    function eb(bb) {
      return Ib.add(bb), () => {
        Ib.delete(bb)
      }
    }

    function Cb(bb, cb) {
      for (const kb of Ib) try {
        kb(bb)
      } catch (sb) {
        cb(sb)
      }
    }

    function Nb(bb) {
      return Hb.add(bb), () => {
        Hb.delete(bb)
      }
    }

    function Vb(bb, cb) {
      const sb = fb < 0 ? 0 : bb - fb;
      fb = bb;
      for (const Wb of Hb) try {
        Wb(sb)
      } catch (kb) {
        cb(kb)
      }
    }

    function Lb(bb) {
      return Mb.add(bb), () => {
        Mb.delete(bb)
      }
    }

    function ub(bb) {
      return Xb.add(bb), () => {
        Xb.delete(bb)
      }
    }
    let Yb = 0;

    function hb(bb) {
      Yb += bb
    }

    function Jb() {
      const bb = Yb;
      return Yb = 0, bb
    }

    function gb(bb) {
      return lb.add(bb), () => {
        lb.delete(bb)
      }
    }

    function Bb(bb) {
      return Qb.add(bb), () => {
        Qb.delete(bb)
      }
    }

    function tb() {
      nb = 0, mb = 0, fb = -1
    }

    function yb(bb, cb) {
      if ("paced" === bb) return mb += cb, null;
      if ("drawn" !== bb && "skipped" !== bb) return null;
      const sb = cb + mb;
      return mb = 0, sb
    }

    function Pb(bb, cb, sb, Wb) {
      const ab = (0, kb.h)(cb),
        Tb = bb > 0 ? performance.now() : 0;
      for (let kb = 0; kb < bb; kb++)
        for (const bb of lb) try {
          bb()
        } catch (Ub) {
          Wb(Ub)
        }
      if (bb > 0 && hb(performance.now() - Tb), null !== sb) {
        for (const bb of Mb) try {
          bb(sb)
        } catch (Ub) {
          Wb(Ub)
        }
        nb += sb
      }
      if ("drawn" === cb) {
        const bb = nb;
        nb = 0;
        for (const cb of Xb) try {
          cb(bb)
        } catch (Ub) {
          Wb(Ub)
        }
      }
      for (const kb of Qb) try {
        kb(bb, ab)
      } catch (Ub) {
        Wb(Ub)
      }
    }
  },
  40342: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => kb
    });
    const kb = {
      stop: () => kb,
      fade: () => kb,
      rate: () => kb,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => kb,
      setPannerAttr: () => kb,
      setPosition: () => kb
    }
  },
  4523: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Ib,
      h: () => ab,
      i: () => Ub
    });
    var kb = sb(2305),
      Wb = sb(4530);

    function ab(bb) {
      let {
        action: cb,
        flags: sb
      } = bb;
      return "mid-fire" === cb && 0 !== (sb & kb.b.AltLeftClick)
    }
    const Tb = new Set;

    function Ub(bb) {
      return Tb.add(bb), () => {
        Tb.delete(bb)
      }
    }

    function Ib(bb) {
      const cb = Wb.b[255 & bb];
      if (void 0 === cb) return;
      const sb = bb >>> 8 & 255,
        ab = {
          action: cb,
          down: 0 !== (sb & kb.b.Down),
          flags: sb,
          press: bb >>> 16
        };
      for (const kb of Tb) kb(ab)
    }
  },
  4530: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Wb,
      f: () => ab,
      h: () => Tb,
      i: () => kb,
      m: () => Ub
    });
    const kb = {
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
      Wb = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      ab = {
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
      Tb = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      Ub = [16]
  },
  40420: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => fb,
      e: () => Hb,
      i: () => Ib
    });
    var kb = sb(4517),
      Wb = sb(2305),
      ab = sb(4536);
    let Tb = !1,
      Ub = !1;

    function Ib(bb) {
      Tb = !0;
      try {
        bb()
      } finally {
        Tb = !1
      }
    }

    function Hb(bb, cb) {
      if (Tb) return !1;
      switch (bb) {
        case kb.B.MouseDown:
        case kb.B.MouseUp:
        case kb.B.TouchStart:
        case kb.B.TouchEnd:
        case kb.B.TouchCancel:
        case kb.B.TouchButton:
          return !0;
        case kb.B.KeyDown:
        case kb.B.KeyUp:
          return 0 === (cb & Wb.e.Repeat) && !(0, ab.c)(document.activeElement);
        default:
          return !1
      }
    }

    function fb(bb) {
      Ub || (Ub = !0, queueMicrotask((() => {
        Ub = !1, bb()
      })))
    }
  },
  4536: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Ub,
      c: () => Tb,
      d: () => Hb
    });
    var kb = sb(2305),
      Wb = sb(2310);
    const ab = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function Tb(bb) {
      return bb instanceof HTMLElement && (!!(bb.isContentEditable || bb instanceof HTMLTextAreaElement || bb instanceof HTMLSelectElement) || bb instanceof HTMLInputElement && !ab.has(bb.type))
    }

    function Ub(bb) {
      let cb = null;
      const sb = sb => {
          const Wb = Tb(sb);
          Wb !== cb && (cb = Wb, bb(kb.h.UiCapture, kb.z.Keyboard, 0, 0, Wb ? kb.z.Keyboard : 0))
        },
        Wb = bb => {
          sb(bb.target)
        },
        ab = bb => {
          sb(bb.relatedTarget)
        },
        Ub = () => {
          sb(document.activeElement)
        },
        Ib = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", Wb, Ib), document.addEventListener("focusout", ab, Ib), document.addEventListener("keydown", Ub, Ib), sb(document.activeElement), () => {
        document.removeEventListener("focusin", Wb, Ib), document.removeEventListener("focusout", ab, Ib), document.removeEventListener("keydown", Ub, Ib)
      }
    }
    const Ib = new Map;

    function Hb(bb, cb) {
      var sb;
      let kb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      Ib.set(kb, (null !== (sb = Ib.get(kb)) && void 0 !== sb ? sb : 0) & ~bb | cb & bb);
      let ab = 0;
      for (const Wb of Ib.values()) ab |= Wb;
      return (0, Wb.w)(bb, ab & bb)
    }
  },
  40482: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => kb
    });
    const kb = 2e3
  },
  40335: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Nb,
      d: () => Hb,
      g: () => Qb,
      i: () => Cb,
      l: () => eb,
      o: () => Vb
    });
    var kb = sb(19),
      Wb = sb(26),
      ab = sb(2644),
      Tb = sb(1291),
      Ub = sb(8849),
      Ib = sb(2647);

    function Hb() {
      var bb;
      const cb = (sb = kb.d.get("clientEscMenuOptions"), Wb = (0, ab.F)(), {
        sampleCount: sb.antiAliasing ? 4 : 1,
        n: (0, ab.u)(sb.pixelScale, Wb),
        pixelated: (0, ab.t)(sb.pixelSmoothing)
      });
      var sb, Wb;
      return cb.sampleCount > 1 && (0, Ub.c)() && (cb.sampleCount = 1), cb.n = null !== (bb = (0, Ub.l)()) && void 0 !== bb ? bb : cb.n, cb
    }
    let fb = null,
      Mb = null;
    const Xb = new Set;
    let nb = null;

    function mb() {
      for (const bb of Xb) bb()
    }

    function lb() {
      if (null === fb) {
        const bb = document.createElement("div");
        bb.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", bb.setAttribute("aria-hidden", "true"), document.body.append(bb), Mb = bb, fb = new ab.b(bb, mb)
      }
      return fb
    }

    function Qb(bb) {
      const cb = (0, ab.l)(),
        [sb, kb] = lb().size(cb);
      return (0, ab.h)(sb, kb, cb, bb.n)
    }

    function eb(bb) {
      var cb, sb, kb, Wb;
      const Ub = (0, ab.l)(),
        [Ib, fb] = lb().size(Ub);
      if (Ib <= 0 || fb <= 0) return null;
      const Mb = (0, ab.h)(Ib, fb, Ub, Hb().n);
      return (0, ab.f)(bb, Mb), bb.style.left = `${null!==(cb=null===(sb=nb)||void 0===sb?void 0:sb.rect.left)&&void 0!==cb?cb:0}px`, bb.style.top = `${null!==(kb=null===(Wb=nb)||void 0===Wb?void 0:Wb.rect.top)&&void 0!==kb?kb:0}px`, (0, Tb.H)(bb.style, nb), Mb
    }

    function Cb(bb) {
      nb = bb, lb(), (0, Tb.D)(Mb.style, bb, ""), mb()
    }

    function Nb(bb, cb) {
      bb.style.imageRendering = (0, ab.I)(cb.pixelated)
    }

    function Vb(bb, cb) {
      const sb = (0, Wb.l)("appManagerUpdated|clientEscMenuOptions", (() => {
          Nb(bb, Hb()), cb()
        })),
        kb = (0, Ub.u)(cb),
        ab = (0, Ib.k)(cb);
      return lb(), Xb.add(cb), () => {
        sb(), kb(), ab(), Xb.delete(cb)
      }
    }
  },
  40488: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Tb,
      g: () => ab,
      j: () => Wb
    });
    let kb = null;

    function Wb(bb) {
      kb = bb
    }

    function ab(bb) {
      kb === bb && (kb = null)
    }

    function Tb() {
      var bb;
      null === (bb = kb) || void 0 === bb || bb()
    }
  },
  40447: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Wb,
      h: () => Hb,
      j: () => ab,
      m: () => Mb,
      n: () => fb,
      o: () => Xb
    });
    var kb = sb(3505);
    class Wb extends Error {
      constructor(bb, cb, sb) {
        super(`${"fetch"===bb?"fetching":"decoding"} ${cb} failed`, sb), this.stage = bb, this.source = cb, this.name = "ShellImageError"
      }
    }
    async function ab(bb) {
      let cb, sb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kb.C,
        ab = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      if ("string" === typeof bb) try {
        cb = await sb(bb)
      } catch (Tb) {
        throw new Wb("fetch", bb, {
          cause: Tb
        })
      } else cb = bb;
      try {
        const bb = new Blob([cb.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(bb, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: ab
        })
      } catch (Tb) {
        throw new Wb("decode", "string" === typeof bb ? bb : `${cb.byteLength} bytes`, {
          cause: Tb
        })
      }
    }
    let Tb = null;
    const Ub = new Map;
    let Ib = 1;

    function Hb(bb) {
      if (Tb = bb, null !== bb) {
        for (const [cb, sb] of Ub) bb.Lsb(cb, sb);
        Ub.clear()
      }
    }

    function fb(bb) {
      const cb = Ib++;
      return Tb ? Tb.Lsb(cb, bb) : Ub.set(cb, bb), cb
    }
    async function Mb(bb, cb, sb) {
      const kb = await ab(bb, cb, sb);
      return {
        id: fb(kb),
        width: kb.width,
        height: kb.height
      }
    }

    function Xb(bb) {
      var cb;
      const sb = Ub.get(bb);
      if (sb) return sb.close(), void Ub.delete(bb);
      null === (cb = Tb) || void 0 === cb || cb.Ysb(bb)
    }
  },
  40359: (bb, cb, sb) => {
    function kb(bb, cb) {
      if (!Object.prototype.hasOwnProperty.call(bb, cb)) throw new TypeError("attempted to use private field on non-instance");
      return bb
    }
    sb.d(cb, {
      e: () => kb
    })
  },
  40363: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Wb
    });
    var kb = 0;

    function Wb(bb) {
      return "__private_" + kb++ + "_" + bb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);