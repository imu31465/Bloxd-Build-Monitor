export const id = 85;
export const ids = [85];
export const modules = {
  39834: (bb, ab, Ub) => {
    Ub.d(ab, {
      A: () => Gb,
      B: () => hb,
      D: () => cb,
      G: () => qb,
      K: () => Ib,
      L: () => Qb,
      N: () => Hb,
      O: () => sb,
      P: () => wb,
      S: () => Fb,
      d: () => gb,
      g: () => rb,
      k: () => Nb,
      o: () => Cb,
      s: () => Wb,
      w: () => pb,
      x: () => ub,
      z: () => db
    });
    var Ab = Ub(1294),
      Mb = Ub(22),
      Tb = Ub(1216),
      Eb = Ub(2254),
      Yb = Ub(4501),
      Bb = Ub(4469);
    let eb, vb = !1,
      Lb = !1,
      Pb = !1,
      Xb = !1;
    const jb = 1300,
      Rb = 3e3;
    let kb = 0,
      yb = !1,
      Zb = !1,
      Db = 0;
    const zb = 2;
    let xb = !1,
      ib = !1;
    const fb = new Set,
      mb = new Set;

    function pb() {
      return vb
    }

    function Nb() {
      return Zb
    }

    function Wb() {
      return ib
    }

    function Hb() {
      return (0, Tb.i)() && !ib
    }

    function Ib(bb) {
      let ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (bb !== ib) {
        ib = bb;
        for (const bb of [...mb]) bb(ib);
        ab && wb()
      }
    }

    function db(bb) {
      return mb.add(bb), () => {
        mb.delete(bb)
      }
    }

    function Fb() {
      (0, Yb.l)(Eb.v.Menu, (0, Tb.i)() ? 0 : Eb.v.Menu)
    }

    function hb() {
      Zb = !1, Db = 0, Fb(), wb()
    }

    function Gb(bb) {
      return fb.add(bb), () => {
        fb.delete(bb)
      }
    }

    function Qb(bb) {
      Lb = !1, bb !== vb && (vb = bb, Xb = !1, clearTimeout(eb), Pb = !vb && xb, vb ? (yb = !1, Zb = !1, Db = 0) : Hb() && !xb && (Zb = !0), xb = !1, vb && !Hb() && Ob(), Jb(), Pb && wb())
    }

    function qb(bb) {
      bb !== yb && (yb = bb, bb || wb())
    }

    function ub() {
      Lb = !1, Xb || !0 !== lb() || (Xb = !0, clearTimeout(eb), eb = setTimeout(Kb, jb))
    }

    function rb() {
      return (!Lb || performance.now() - kb > Rb) && (Lb = (0, Bb.K)().lockPointer(), kb = performance.now()), Lb
    }

    function Kb() {
      ob() && tb() && rb()
    }

    function ob() {
      return Hb() && !vb && !yb && !(0, Ab.d)()
    }

    function lb() {
      var bb;
      return "undefined" === typeof navigator || null === (bb = navigator.userActivation) || void 0 === bb ? void 0 : bb.isActive
    }

    function tb() {
      return Pb && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== lb()
    }

    function wb() {
      Hb() ? ob() && !Zb && tb() && rb() : vb && !xb && Ob()
    }

    function sb() {
      Zb ? navigator.vendor.startsWith("Apple") ? Vb() : Db = zb : wb()
    }

    function gb() {
      Db > 0 && 0 === --Db && Vb()
    }

    function Cb() {
      Db = 0
    }

    function Vb() {
      ob() && !0 === lb() && rb()
    }

    function Ob() {
      xb = !0, (0, Bb.K)().unlockPointer()
    }

    function cb() {
      Lb = !1, Pb = !1, Xb = !1, clearTimeout(eb), yb = !1, Zb = !1, Db = 0, xb = !1;
      const bb = vb;
      vb = !1, bb && Jb()
    }

    function Jb() {
      for (const bb of [...fb]) bb(vb);
      Mb.m.IR("pointerLockUpdate", vb)
    }
  },
  39803: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Pb,
      e: () => Yb,
      h: () => Lb,
      k: () => eb,
      l: () => Eb,
      p: () => vb,
      t: () => Bb
    });
    let Ab = null,
      Mb = null,
      Tb = null;

    function Eb(bb) {
      Ab = bb
    }

    function Yb() {
      return Ab
    }

    function Bb(bb) {
      Mb = bb
    }

    function eb() {
      return Mb
    }

    function vb(bb) {
      Tb = bb
    }

    function Lb() {
      return Tb
    }

    function Pb() {
      var bb, ab;
      return !0 === (null === (bb = Mb) || void 0 === bb || null === (ab = bb.currentViewer) || void 0 === ab ? void 0 : ab.inPlayback)
    }
  },
  4469: (bb, ab, Ub) => {
    Ub.d(ab, {
      B: () => Wb,
      E: () => Hb,
      H: () => Zb,
      J: () => Eb,
      K: () => Yb,
      O: () => pb,
      e: () => mb,
      f: () => zb,
      h: () => db,
      k: () => Ib,
      n: () => yb,
      o: () => ib,
      r: () => Db,
      v: () => xb,
      x: () => Nb
    });
    var Ab = Ub(4477);
    const Mb = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let Tb = Mb;

    function Eb(bb) {
      Tb = null !== bb && void 0 !== bb ? bb : Mb
    }

    function Yb() {
      return Tb
    }
    const Bb = new Set,
      eb = new Set;
    let vb = -1;
    const Lb = new Set,
      Pb = new Set;
    let Xb = 0,
      jb = 0;
    const Rb = new Set,
      kb = new Set;

    function yb(bb) {
      return Bb.add(bb), () => {
        Bb.delete(bb)
      }
    }

    function Zb(bb, ab) {
      for (const Ab of Bb) try {
        Ab(bb)
      } catch (Ub) {
        ab(Ub)
      }
    }

    function Db(bb) {
      return eb.add(bb), () => {
        eb.delete(bb)
      }
    }

    function zb(bb, ab) {
      const Ub = vb < 0 ? 0 : bb - vb;
      vb = bb;
      for (const Mb of eb) try {
        Mb(Ub)
      } catch (Ab) {
        ab(Ab)
      }
    }

    function xb(bb) {
      return Lb.add(bb), () => {
        Lb.delete(bb)
      }
    }

    function ib(bb) {
      return Pb.add(bb), () => {
        Pb.delete(bb)
      }
    }
    let fb = 0;

    function mb(bb) {
      fb += bb
    }

    function pb() {
      const bb = fb;
      return fb = 0, bb
    }

    function Nb(bb) {
      return Rb.add(bb), () => {
        Rb.delete(bb)
      }
    }

    function Wb(bb) {
      return kb.add(bb), () => {
        kb.delete(bb)
      }
    }

    function Hb() {
      Xb = 0, jb = 0, vb = -1
    }

    function Ib(bb, ab) {
      if ("paced" === bb) return jb += ab, null;
      if ("drawn" !== bb && "skipped" !== bb) return null;
      const Ub = ab + jb;
      return jb = 0, Ub
    }

    function db(bb, ab, Ub, Mb) {
      const Tb = (0, Ab.g)(ab),
        Eb = bb > 0 ? performance.now() : 0;
      for (let Ab = 0; Ab < bb; Ab++)
        for (const bb of Rb) try {
          bb()
        } catch (Yb) {
          Mb(Yb)
        }
      if (bb > 0 && mb(performance.now() - Eb), null !== Ub) {
        for (const bb of Lb) try {
          bb(Ub)
        } catch (Yb) {
          Mb(Yb)
        }
        Xb += Ub
      }
      if ("drawn" === ab) {
        const bb = Xb;
        Xb = 0;
        for (const ab of Pb) try {
          ab(bb)
        } catch (Yb) {
          Mb(Yb)
        }
      }
      for (const Ab of kb) try {
        Ab(bb, Tb)
      } catch (Yb) {
        Mb(Yb)
      }
    }
  },
  40024: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Ab
    });
    const Ab = {
      stop: () => Ab,
      fade: () => Ab,
      rate: () => Ab,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => Ab,
      setPannerAttr: () => Ab,
      setPosition: () => Ab
    }
  },
  4487: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Bb,
      h: () => Tb,
      l: () => Yb
    });
    var Ab = Ub(2254),
      Mb = Ub(4494);

    function Tb(bb) {
      let {
        action: ab,
        flags: Ub
      } = bb;
      return "mid-fire" === ab && 0 !== (Ub & Ab.b.AltLeftClick)
    }
    const Eb = new Set;

    function Yb(bb) {
      return Eb.add(bb), () => {
        Eb.delete(bb)
      }
    }

    function Bb(bb) {
      const ab = Mb.c[255 & bb];
      if (void 0 === ab) return;
      const Ub = bb >>> 8 & 255,
        Tb = {
          action: ab,
          down: 0 !== (Ub & Ab.b.Down),
          flags: Ub,
          press: bb >>> 16
        };
      for (const Ab of Eb) Ab(Tb)
    }
  },
  4494: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Mb,
      d: () => Tb,
      f: () => Eb,
      h: () => Ab,
      l: () => Yb
    });
    const Ab = {
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
      Mb = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      Tb = {
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
      Eb = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      Yb = [16]
  },
  40110: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => vb,
      g: () => eb,
      j: () => Bb
    });
    var Ab = Ub(4485),
      Mb = Ub(2254),
      Tb = Ub(4501);
    let Eb = !1,
      Yb = !1;

    function Bb(bb) {
      Eb = !0;
      try {
        bb()
      } finally {
        Eb = !1
      }
    }

    function eb(bb, ab) {
      if (Eb) return !1;
      switch (bb) {
        case Ab.J.MouseDown:
        case Ab.J.MouseUp:
        case Ab.J.TouchStart:
        case Ab.J.TouchEnd:
        case Ab.J.TouchCancel:
        case Ab.J.TouchButton:
          return !0;
        case Ab.J.KeyDown:
        case Ab.J.KeyUp:
          return 0 === (ab & Mb.c.Repeat) && !(0, Tb.h)(document.activeElement);
        default:
          return !1
      }
    }

    function vb(bb) {
      Yb || (Yb = !0, queueMicrotask((() => {
        Yb = !1, bb()
      })))
    }
  },
  4501: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Yb,
      h: () => Eb,
      l: () => eb
    });
    var Ab = Ub(2254),
      Mb = Ub(2260);
    const Tb = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function Eb(bb) {
      return bb instanceof HTMLElement && (!!(bb.isContentEditable || bb instanceof HTMLTextAreaElement || bb instanceof HTMLSelectElement) || bb instanceof HTMLInputElement && !Tb.has(bb.type))
    }

    function Yb(bb) {
      let ab = null;
      const Ub = Ub => {
          const Mb = Eb(Ub);
          Mb !== ab && (ab = Mb, bb(Ab.g.UiCapture, Ab.v.Keyboard, 0, 0, Mb ? Ab.v.Keyboard : 0))
        },
        Mb = bb => {
          Ub(bb.target)
        },
        Tb = bb => {
          Ub(bb.relatedTarget)
        },
        Yb = () => {
          Ub(document.activeElement)
        },
        Bb = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", Mb, Bb), document.addEventListener("focusout", Tb, Bb), document.addEventListener("keydown", Yb, Bb), Ub(document.activeElement), () => {
        document.removeEventListener("focusin", Mb, Bb), document.removeEventListener("focusout", Tb, Bb), document.removeEventListener("keydown", Yb, Bb)
      }
    }
    const Bb = new Map;

    function eb(bb, ab) {
      var Ub;
      let Ab = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      Bb.set(Ab, (null !== (Ub = Bb.get(Ab)) && void 0 !== Ub ? Ub : 0) & ~bb | ab & bb);
      let Tb = 0;
      for (const Mb of Bb.values()) Tb |= Mb;
      return (0, Mb.u)(bb, Tb & bb)
    }
  },
  40161: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Ab
    });
    const Ab = 2e3
  },
  40020: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Db,
      h: () => eb,
      l: () => kb,
      n: () => Zb,
      r: () => yb,
      v: () => zb
    });
    var Ab = Ub(19),
      Mb = Ub(22),
      Tb = Ub(2579),
      Eb = Ub(1227),
      Yb = Ub(8822),
      Bb = Ub(2583);

    function eb() {
      var bb;
      const ab = (Ub = Ab.c.get("clientEscMenuOptions"), Mb = (0, Tb.N)(), {
        sampleCount: Ub.antiAliasing ? 4 : 1,
        n: (0, Tb.x)(Ub.pixelScale, Mb),
        pixelated: (0, Tb.t)(Ub.pixelSmoothing)
      });
      var Ub, Mb;
      return ab.sampleCount > 1 && (0, Yb.d)() && (ab.sampleCount = 1), ab.n = null !== (bb = (0, Yb.m)()) && void 0 !== bb ? bb : ab.n, ab
    }
    let vb = null,
      Lb = null;
    const Pb = new Set;
    let Xb = null;

    function jb() {
      for (const bb of Pb) bb()
    }

    function Rb() {
      if (null === vb) {
        const bb = document.createElement("div");
        bb.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", bb.setAttribute("aria-hidden", "true"), document.body.append(bb), Lb = bb, vb = new Tb.b(bb, jb)
      }
      return vb
    }

    function kb(bb) {
      const ab = (0, Tb.j)(),
        [Ub, Ab] = Rb().size(ab);
      return (0, Tb.g)(Ub, Ab, ab, bb.n)
    }

    function yb(bb) {
      var ab, Ub, Ab, Mb;
      const Yb = (0, Tb.j)(),
        [Bb, vb] = Rb().size(Yb);
      if (Bb <= 0 || vb <= 0) return null;
      const Lb = (0, Tb.g)(Bb, vb, Yb, eb().n);
      return (0, Tb.e)(bb, Lb), bb.style.left = `${null!==(ab=null===(Ub=Xb)||void 0===Ub?void 0:Ub.rect.left)&&void 0!==ab?ab:0}px`, bb.style.top = `${null!==(Ab=null===(Mb=Xb)||void 0===Mb?void 0:Mb.rect.top)&&void 0!==Ab?Ab:0}px`, (0, Eb.J)(bb.style, Xb), Lb
    }

    function Zb(bb) {
      Xb = bb, Rb(), (0, Eb.B)(Lb.style, bb, ""), jb()
    }

    function Db(bb, ab) {
      bb.style.imageRendering = (0, Tb.O)(ab.pixelated)
    }

    function zb(bb, ab) {
      const Ub = (0, Mb.n)("appManagerUpdated|clientEscMenuOptions", (() => {
          Db(bb, eb()), ab()
        })),
        Ab = (0, Yb.x)(ab),
        Tb = (0, Bb.j)(ab);
      return Rb(), Pb.add(ab), () => {
        Ub(), Ab(), Tb(), Pb.delete(ab)
      }
    }
  },
  40168: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Eb,
      g: () => Tb,
      i: () => Mb
    });
    let Ab = null;

    function Mb(bb) {
      Ab = bb
    }

    function Tb(bb) {
      Ab === bb && (Ab = null)
    }

    function Eb() {
      var bb;
      null === (bb = Ab) || void 0 === bb || bb()
    }
  },
  40136: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Mb,
      h: () => eb,
      j: () => Tb,
      k: () => Lb,
      o: () => vb,
      s: () => Pb
    });
    var Ab = Ub(3382);
    class Mb extends Error {
      constructor(bb, ab, Ub) {
        super(`${"fetch"===bb?"fetching":"decoding"} ${ab} failed`, Ub), this.stage = bb, this.source = ab, this.name = "ShellImageError"
      }
    }
    async function Tb(bb) {
      let ab, Ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ab.E,
        Tb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      if ("string" === typeof bb) try {
        ab = await Ub(bb)
      } catch (Eb) {
        throw new Mb("fetch", bb, {
          cause: Eb
        })
      } else ab = bb;
      try {
        const bb = new Blob([ab.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(bb, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: Tb
        })
      } catch (Eb) {
        throw new Mb("decode", "string" === typeof bb ? bb : `${ab.byteLength} bytes`, {
          cause: Eb
        })
      }
    }
    let Eb = null;
    const Yb = new Map;
    let Bb = 1;

    function eb(bb) {
      if (Eb = bb, null !== bb) {
        for (const [ab, Ub] of Yb) bb.fUb(ab, Ub);
        Yb.clear()
      }
    }

    function vb(bb) {
      const ab = Bb++;
      return Eb ? Eb.fUb(ab, bb) : Yb.set(ab, bb), ab
    }
    async function Lb(bb, ab, Ub) {
      const Ab = await Tb(bb, ab, Ub);
      return {
        id: vb(Ab),
        width: Ab.width,
        height: Ab.height
      }
    }

    function Pb(bb) {
      var ab;
      const Ub = Yb.get(bb);
      if (Ub) return Ub.close(), void Yb.delete(bb);
      null === (ab = Eb) || void 0 === ab || ab.mUb(bb)
    }
  },
  40039: (bb, ab, Ub) => {
    function Ab(bb, ab) {
      if (!Object.prototype.hasOwnProperty.call(bb, ab)) throw new TypeError("attempted to use private field on non-instance");
      return bb
    }
    Ub.d(ab, {
      c: () => Ab
    })
  },
  40044: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Mb
    });
    var Ab = 0;

    function Mb(bb) {
      return "__private_" + Ab++ + "_" + bb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);