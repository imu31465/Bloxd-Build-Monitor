export const id = 88;
export const ids = [88];
export const modules = {
  41110: (uu, Eu, ju) => {
    ju.d(Eu, {
      C: () => nu,
      D: () => Qu,
      F: () => ku,
      J: () => ru,
      M: () => ou,
      P: () => tu,
      S: () => Lu,
      V: () => vu,
      b: () => xu,
      e: () => Wu,
      i: () => au,
      k: () => Tu,
      o: () => Pu,
      q: () => du,
      r: () => iu,
      t: () => mu,
      u: () => Vu,
      y: () => Ku
    });
    var su = ju(1443),
      Uu = ju(24),
      Zu = ju(1343),
      Xu = ju(2516),
      lu = ju(4986),
      qu = ju(4962);
    let fu, Cu = !1,
      bu = !1,
      cu = !1,
      Nu = !1;
    const Ou = 1300,
      Yu = 3e3;
    let hu = 0,
      Du = !1,
      gu = !1,
      Mu = 0;
    const eu = 2;
    let Gu = !1,
      pu = !1;
    const wu = new Set,
      Ju = new Set;

    function du() {
      return Cu
    }

    function au() {
      return gu
    }

    function Pu() {
      return pu
    }

    function ou() {
      return (0, Zu.w)() && !pu
    }

    function ku(uu) {
      let Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (uu !== pu) {
        pu = uu;
        for (const uu of [...Ju]) uu(pu);
        Eu && Lu()
      }
    }

    function mu(uu) {
      return Ju.add(uu), () => {
        Ju.delete(uu)
      }
    }

    function vu() {
      (0, lu.g)(Xu.x.Menu, (0, Zu.w)() ? 0 : Xu.x.Menu)
    }

    function Ku() {
      gu = !1, Mu = 0, vu(), Lu()
    }

    function Vu(uu) {
      return wu.add(uu), () => {
        wu.delete(uu)
      }
    }

    function ru(uu) {
      bu = !1, uu !== Cu && (Cu = uu, Nu = !1, clearTimeout(fu), cu = !Cu && Gu, Cu ? (Du = !1, gu = !1, Mu = 0) : ou() && !Gu && (gu = !0), Gu = !1, Cu && !ou() && Au(), yu(), cu && Lu())
    }

    function Qu(uu) {
      uu !== Du && (Du = uu, uu || Lu())
    }

    function iu() {
      bu = !1, Nu || !0 !== Fu() || (Nu = !0, clearTimeout(fu), fu = setTimeout(Su, Ou))
    }

    function Wu() {
      return (!bu || performance.now() - hu > Yu) && (bu = (0, qu.H)().lockPointer(), hu = performance.now()), bu
    }

    function Su() {
      Iu() && Bu() && Wu()
    }

    function Iu() {
      return ou() && !Cu && !Du && !(0, su.g)()
    }

    function Fu() {
      var uu;
      return "undefined" === typeof navigator || null === (uu = navigator.userActivation) || void 0 === uu ? void 0 : uu.isActive
    }

    function Bu() {
      return cu && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== Fu()
    }

    function Lu() {
      ou() ? Iu() && !gu && Bu() && Wu() : Cu && !Gu && Au()
    }

    function tu() {
      gu ? navigator.vendor.startsWith("Apple") ? Hu() : Mu = eu : Lu()
    }

    function xu() {
      Mu > 0 && 0 === --Mu && Hu()
    }

    function Tu() {
      Mu = 0
    }

    function Hu() {
      Iu() && !0 === Fu() && Wu()
    }

    function Au() {
      Gu = !0, (0, qu.H)().unlockPointer()
    }

    function nu() {
      bu = !1, cu = !1, Nu = !1, clearTimeout(fu), Du = !1, gu = !1, Mu = 0, Gu = !1;
      const uu = Cu;
      Cu = !1, uu && yu()
    }

    function yu() {
      for (const uu of [...wu]) uu(Cu);
      Uu.h.TY("pointerLockUpdate", Cu)
    }
  },
  40932: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => cu,
      e: () => lu,
      h: () => bu,
      j: () => fu,
      n: () => Xu,
      r: () => Cu,
      t: () => qu
    });
    let su = null,
      Uu = null,
      Zu = null;

    function Xu(uu) {
      su = uu
    }

    function lu() {
      return su
    }

    function qu(uu) {
      Uu = uu
    }

    function fu() {
      return Uu
    }

    function Cu(uu) {
      Zu = uu
    }

    function bu() {
      return Zu
    }

    function cu() {
      var uu, Eu;
      return !0 === (null === (uu = Uu) || void 0 === uu || null === (Eu = uu.currentViewer) || void 0 === Eu ? void 0 : Eu.inPlayback)
    }
  },
  4962: (uu, Eu, ju) => {
    ju.d(Eu, {
      A: () => ou,
      C: () => gu,
      F: () => Xu,
      H: () => lu,
      I: () => du,
      b: () => Ju,
      e: () => eu,
      h: () => mu,
      l: () => ku,
      m: () => Du,
      p: () => pu,
      r: () => Mu,
      t: () => Gu,
      u: () => au,
      y: () => Pu
    });
    var su = ju(4965);
    const Uu = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let Zu = Uu;

    function Xu(uu) {
      Zu = null !== uu && void 0 !== uu ? uu : Uu
    }

    function lu() {
      return Zu
    }
    const qu = new Set,
      fu = new Set;
    let Cu = -1;
    const bu = new Set,
      cu = new Set;
    let Nu = 0,
      Ou = 0;
    const Yu = new Set,
      hu = new Set;

    function Du(uu) {
      return qu.add(uu), () => {
        qu.delete(uu)
      }
    }

    function gu(uu, Eu) {
      for (const su of qu) try {
        su(uu)
      } catch (ju) {
        Eu(ju)
      }
    }

    function Mu(uu) {
      return fu.add(uu), () => {
        fu.delete(uu)
      }
    }

    function eu(uu, Eu) {
      const ju = Cu < 0 ? 0 : uu - Cu;
      Cu = uu;
      for (const Uu of fu) try {
        Uu(ju)
      } catch (su) {
        Eu(su)
      }
    }

    function Gu(uu) {
      return bu.add(uu), () => {
        bu.delete(uu)
      }
    }

    function pu(uu) {
      return cu.add(uu), () => {
        cu.delete(uu)
      }
    }
    let wu = 0;

    function Ju(uu) {
      wu += uu
    }

    function du() {
      const uu = wu;
      return wu = 0, uu
    }

    function au(uu) {
      return Yu.add(uu), () => {
        Yu.delete(uu)
      }
    }

    function Pu(uu) {
      return hu.add(uu), () => {
        hu.delete(uu)
      }
    }

    function ou() {
      Nu = 0, Ou = 0, Cu = -1
    }

    function ku(uu, Eu) {
      if ("paced" === uu) return Ou += Eu, null;
      if ("drawn" !== uu && "skipped" !== uu) return null;
      const ju = Eu + Ou;
      return Ou = 0, ju
    }

    function mu(uu, Eu, ju, Uu) {
      const Zu = (0, su.k)(Eu),
        Xu = uu > 0 ? performance.now() : 0;
      for (let su = 0; su < uu; su++)
        for (const uu of Yu) try {
          uu()
        } catch (lu) {
          Uu(lu)
        }
      if (uu > 0 && Ju(performance.now() - Xu), null !== ju) {
        for (const uu of bu) try {
          uu(ju)
        } catch (lu) {
          Uu(lu)
        }
        Nu += ju
      }
      if ("drawn" === Eu) {
        const uu = Nu;
        Nu = 0;
        for (const Eu of cu) try {
          Eu(uu)
        } catch (lu) {
          Uu(lu)
        }
      }
      for (const su of hu) try {
        su(uu, Zu)
      } catch (lu) {
        Uu(lu)
      }
    }
  },
  41119: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => su
    });
    const su = {
      stop: () => su,
      fade: () => su,
      rate: () => su,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => su,
      setPannerAttr: () => su,
      setPosition: () => su
    }
  },
  4979: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => qu,
      c: () => Zu,
      f: () => lu
    });
    var su = ju(2516),
      Uu = ju(4983);

    function Zu(uu) {
      let {
        action: Eu,
        flags: ju
      } = uu;
      return "mid-fire" === Eu && 0 !== (ju & su.b.AltLeftClick)
    }
    const Xu = new Set;

    function lu(uu) {
      return Xu.add(uu), () => {
        Xu.delete(uu)
      }
    }

    function qu(uu) {
      const Eu = Uu.e[255 & uu];
      if (void 0 === Eu) return;
      const ju = uu >>> 8 & 255,
        Zu = {
          action: Eu,
          down: 0 !== (ju & su.b.Down),
          flags: ju,
          press: uu >>> 16
        };
      for (const su of Xu) su(Zu)
    }
  },
  4983: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Uu,
      h: () => Zu,
      j: () => Xu,
      k: () => su,
      l: () => lu
    });
    const su = {
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
      Uu = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      Zu = {
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
      Xu = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      lu = [16]
  },
  41140: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Cu,
      h: () => fu,
      i: () => qu
    });
    var su = ju(4976),
      Uu = ju(2516),
      Zu = ju(4986);
    let Xu = !1,
      lu = !1;

    function qu(uu) {
      Xu = !0;
      try {
        uu()
      } finally {
        Xu = !1
      }
    }

    function fu(uu, Eu) {
      if (Xu) return !1;
      switch (uu) {
        case su.L.MouseDown:
        case su.L.MouseUp:
        case su.L.TouchStart:
        case su.L.TouchEnd:
        case su.L.TouchCancel:
        case su.L.TouchButton:
          return !0;
        case su.L.KeyDown:
        case su.L.KeyUp:
          return 0 === (Eu & Uu.e.Repeat) && !(0, Zu.d)(document.activeElement);
        default:
          return !1
      }
    }

    function Cu(uu) {
      lu || (lu = !0, queueMicrotask((() => {
        lu = !1, uu()
      })))
    }
  },
  4986: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => lu,
      d: () => Xu,
      g: () => fu
    });
    var su = ju(2516),
      Uu = ju(2519);
    const Zu = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function Xu(uu) {
      return uu instanceof HTMLElement && (!!(uu.isContentEditable || uu instanceof HTMLTextAreaElement || uu instanceof HTMLSelectElement) || uu instanceof HTMLInputElement && !Zu.has(uu.type))
    }

    function lu(uu) {
      let Eu = null;
      const ju = ju => {
          const Uu = Xu(ju);
          Uu !== Eu && (Eu = Uu, uu(su.h.UiCapture, su.x.Keyboard, 0, 0, Uu ? su.x.Keyboard : 0))
        },
        Uu = uu => {
          ju(uu.target)
        },
        Zu = uu => {
          ju(uu.relatedTarget)
        },
        lu = () => {
          ju(document.activeElement)
        },
        qu = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", Uu, qu), document.addEventListener("focusout", Zu, qu), document.addEventListener("keydown", lu, qu), ju(document.activeElement), () => {
        document.removeEventListener("focusin", Uu, qu), document.removeEventListener("focusout", Zu, qu), document.removeEventListener("keydown", lu, qu)
      }
    }
    const qu = new Map;

    function fu(uu, Eu) {
      var ju;
      let su = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      qu.set(su, (null !== (ju = qu.get(su)) && void 0 !== ju ? ju : 0) & ~uu | Eu & uu);
      let Zu = 0;
      for (const Uu of qu.values()) Zu |= Uu;
      return (0, Uu.x)(uu, Zu & uu)
    }
  },
  41170: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Cu,
      f: () => qu,
      h: () => lu,
      l: () => fu
    });
    var su = ju(1999);
    let Uu = null,
      Zu = 0;
    const Xu = new Set;

    function lu() {
      return Uu
    }

    function qu() {
      return Zu
    }

    function fu(uu) {
      Uu = uu, Zu++, (0, su.c)();
      for (const Eu of Xu) Eu()
    }

    function Cu(uu) {
      Xu.add(uu)
    }
  },
  41209: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => su
    });
    const su = 2e3
  },
  41117: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => pu,
      g: () => cu,
      i: () => Mu,
      m: () => Gu,
      q: () => eu,
      s: () => wu
    });
    var su = ju(182),
      Uu = ju(22),
      Zu = ju(24),
      Xu = ju(3061),
      lu = ju(1353),
      qu = ju(34490),
      fu = ju(300),
      Cu = ju(91),
      bu = ju(179);

    function cu() {
      var uu;
      const Eu = (0, Xu.x)(),
        ju = function(uu, Eu) {
          return {
            sampleCount: uu.antiAliasing ? 4 : 1,
            n: (0, Xu.s)(uu.pixelScale, Eu),
            pixelated: (0, Xu.r)(uu.pixelSmoothing)
          }
        }(Uu.d.get("clientEscMenuOptions"), Eu);
      return ju.sampleCount > 1 && (0, qu.e)() && (ju.sampleCount = 1), ju.n = null !== (uu = (0, qu.o)()) && void 0 !== uu ? uu : ju.n, su.j.includes((0, Cu.getSoftwareRenderer)()) && (ju.sampleCount = 1, ju.n = Math.max(ju.n, (0, Xu.s)(bu.n.pixelScale, Eu))), ju
    }
    let Nu = null,
      Ou = null;
    const Yu = new Set;
    let hu = null;

    function Du() {
      for (const uu of Yu) uu()
    }

    function gu() {
      if (null === Nu) {
        const uu = document.createElement("div");
        uu.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", uu.setAttribute("aria-hidden", "true"), document.body.append(uu), Ou = uu, Nu = new Xu.c(uu, Du)
      }
      return Nu
    }

    function Mu(uu) {
      const Eu = (0, Xu.k)(),
        [ju, su] = gu().size(Eu);
      return (0, Xu.h)(ju, su, Eu, uu.n)
    }

    function eu(uu) {
      var Eu, ju, su, Uu;
      const Zu = (0, Xu.k)(),
        [qu, fu] = gu().size(Zu);
      if (qu <= 0 || fu <= 0) return null;
      const Cu = (0, Xu.h)(qu, fu, Zu, cu().n);
      return (0, Xu.f)(uu, Cu), uu.style.left = `${null!==(Eu=null===(ju=hu)||void 0===ju?void 0:ju.rect.left)&&void 0!==Eu?Eu:0}px`, uu.style.top = `${null!==(su=null===(Uu=hu)||void 0===Uu?void 0:Uu.rect.top)&&void 0!==su?su:0}px`, (0, lu.Q)(uu.style, hu), Cu
    }

    function Gu(uu) {
      hu = uu, gu(), (0, lu.H)(Ou.style, uu, ""), Du()
    }

    function pu(uu, Eu) {
      uu.style.imageRendering = (0, Xu.z)(Eu.pixelated)
    }

    function wu(uu, Eu) {
      const ju = (0, Zu.l)("appManagerUpdated|clientEscMenuOptions", (() => {
          pu(uu, cu()), Eu()
        })),
        su = (0, qu.s)(Eu),
        Uu = (0, fu.m)(Eu);
      return gu(), Yu.add(Eu), () => {
        ju(), su(), Uu(), Yu.delete(Eu)
      }
    }
  },
  41213: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Xu,
      f: () => Zu,
      j: () => Uu
    });
    let su = null;

    function Uu(uu) {
      su = uu
    }

    function Zu(uu) {
      su === uu && (su = null)
    }

    function Xu() {
      var uu;
      null === (uu = su) || void 0 === uu || uu()
    }
  },
  41161: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Uu,
      h: () => fu,
      l: () => Zu,
      m: () => bu,
      p: () => Cu,
      t: () => cu
    });
    var su = ju(3020);
    class Uu extends Error {
      constructor(uu, Eu, ju) {
        super(`${"fetch"===uu?"fetching":"decoding"} ${Eu} failed`, ju), this.stage = uu, this.source = Eu, this.name = "ShellImageError"
      }
    }
    async function Zu(uu) {
      let Eu, ju = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : su.K,
        Zu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      if ("string" === typeof uu) try {
        Eu = await ju(uu)
      } catch (Xu) {
        throw new Uu("fetch", uu, {
          cause: Xu
        })
      } else Eu = uu;
      try {
        const uu = new Blob([Eu.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(uu, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: Zu
        })
      } catch (Xu) {
        throw new Uu("decode", "string" === typeof uu ? uu : `${Eu.byteLength} bytes`, {
          cause: Xu
        })
      }
    }
    let Xu = null;
    const lu = new Map;
    let qu = 1;

    function fu(uu) {
      if (Xu = uu, null !== uu) {
        for (const [Eu, ju] of lu) uu.ssu(Eu, ju);
        lu.clear()
      }
    }

    function Cu(uu) {
      const Eu = qu++;
      return Xu ? Xu.ssu(Eu, uu) : lu.set(Eu, uu), Eu
    }
    async function bu(uu, Eu, ju) {
      const su = await Zu(uu, Eu, ju);
      return {
        id: Cu(su),
        width: su.width,
        height: su.height
      }
    }

    function cu(uu) {
      var Eu;
      const ju = lu.get(uu);
      if (ju) return ju.close(), void lu.delete(uu);
      null === (Eu = Xu) || void 0 === Eu || Eu.Usu(uu)
    }
  },
  41121: (uu, Eu, ju) => {
    function su(uu, Eu) {
      if (!Object.prototype.hasOwnProperty.call(uu, Eu)) throw new TypeError("attempted to use private field on non-instance");
      return uu
    }
    ju.d(Eu, {
      b: () => su
    })
  },
  41128: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Uu
    });
    var su = 0;

    function Uu(uu) {
      return "__private_" + su++ + "_" + uu
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);