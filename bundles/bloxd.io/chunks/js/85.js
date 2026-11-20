export const id = 85;
export const ids = [85];
export const modules = {
  40286: (uu, Ru, yu) => {
    yu.d(Ru, {
      B: () => gu,
      F: () => Gu,
      I: () => lu,
      L: () => Iu,
      N: () => Pu,
      O: () => hu,
      S: () => nu,
      d: () => iu,
      e: () => Lu,
      g: () => Du,
      h: () => Yu,
      j: () => Mu,
      m: () => Au,
      p: () => cu,
      s: () => Uu,
      t: () => tu,
      v: () => su,
      x: () => Ou
    });
    var Eu = yu(1354),
      Ku = yu(34),
      Qu = yu(1250),
      mu = yu(2306),
      Ju = yu(4586),
      Nu = yu(4549);
    let Xu, Vu = !1,
      ru = !1,
      Bu = !1,
      xu = !1;
    const Su = 1300,
      pu = 3e3;
    let Tu = 0,
      Wu = !1,
      ju = !1,
      Hu = 0;
    const du = 2;
    let bu = !1,
      Cu = !1;
    const ku = new Set,
      eu = new Set;

    function Au() {
      return Vu
    }

    function Du() {
      return ju
    }

    function Mu() {
      return Cu
    }

    function Iu() {
      return (0, Qu.r)() && !Cu
    }

    function Gu(uu) {
      let Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (uu !== Cu) {
        Cu = uu;
        for (const uu of [...eu]) uu(Cu);
        Ru && hu()
      }
    }

    function Uu(uu) {
      return eu.add(uu), () => {
        eu.delete(uu)
      }
    }

    function nu() {
      (0, Ju.h)(mu.t.Menu, (0, Qu.r)() ? 0 : mu.t.Menu)
    }

    function su() {
      ju = !1, Hu = 0, nu(), hu()
    }

    function tu(uu) {
      return ku.add(uu), () => {
        ku.delete(uu)
      }
    }

    function lu(uu) {
      ru = !1, uu !== Vu && (Vu = uu, xu = !1, clearTimeout(Xu), Bu = !Vu && bu, Vu ? (Wu = !1, ju = !1, Hu = 0) : Iu() && !bu && (ju = !0), bu = !1, Vu && !Iu() && qu(), vu(), Bu && hu())
    }

    function gu(uu) {
      uu !== Wu && (Wu = uu, uu || hu())
    }

    function cu() {
      ru = !1, xu || !0 !== wu() || (xu = !0, clearTimeout(Xu), Xu = setTimeout(zu, Su))
    }

    function Lu() {
      return (!ru || performance.now() - Tu > pu) && (ru = (0, Nu.I)().lockPointer(), Tu = performance.now()), ru
    }

    function zu() {
      Fu() && Zu() && Lu()
    }

    function Fu() {
      return Iu() && !Vu && !Wu && !(0, Eu.g)()
    }

    function wu() {
      var uu;
      return "undefined" === typeof navigator || null === (uu = navigator.userActivation) || void 0 === uu ? void 0 : uu.isActive
    }

    function Zu() {
      return Bu && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== wu()
    }

    function hu() {
      Iu() ? Fu() && !ju && Zu() && Lu() : Vu && !bu && qu()
    }

    function Pu() {
      ju ? navigator.vendor.startsWith("Apple") ? ou() : Hu = du : hu()
    }

    function iu() {
      Hu > 0 && 0 === --Hu && ou()
    }

    function Yu() {
      Hu = 0
    }

    function ou() {
      Fu() && !0 === wu() && Lu()
    }

    function qu() {
      bu = !0, (0, Nu.I)().unlockPointer()
    }

    function Ou() {
      ru = !1, Bu = !1, xu = !1, clearTimeout(Xu), Wu = !1, ju = !1, Hu = 0, bu = !1;
      const uu = Vu;
      Vu = !1, uu && vu()
    }

    function vu() {
      for (const uu of [...ku]) uu(Vu);
      Ku.k.Op("pointerLockUpdate", Vu)
    }
  },
  40256: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Bu,
      e: () => Ju,
      f: () => ru,
      i: () => Xu,
      k: () => mu,
      m: () => Vu,
      o: () => Nu
    });
    let Eu = null,
      Ku = null,
      Qu = null;

    function mu(uu) {
      Eu = uu
    }

    function Ju() {
      return Eu
    }

    function Nu(uu) {
      Ku = uu
    }

    function Xu() {
      return Ku
    }

    function Vu(uu) {
      Qu = uu
    }

    function ru() {
      return Qu
    }

    function Bu() {
      var uu, Ru;
      return !0 === (null === (uu = Ku) || void 0 === uu || null === (Ru = uu.currentViewer) || void 0 === Ru ? void 0 : Ru.inPlayback)
    }
  },
  4549: (uu, Ru, yu) => {
    yu.d(Ru, {
      C: () => Mu,
      D: () => Iu,
      E: () => ju,
      G: () => mu,
      I: () => Ju,
      J: () => Au,
      e: () => eu,
      g: () => du,
      i: () => Uu,
      m: () => Gu,
      n: () => Wu,
      o: () => Cu,
      r: () => Hu,
      v: () => bu,
      y: () => Du
    });
    var Eu = yu(4558);
    const Ku = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let Qu = Ku;

    function mu(uu) {
      Qu = null !== uu && void 0 !== uu ? uu : Ku
    }

    function Ju() {
      return Qu
    }
    const Nu = new Set,
      Xu = new Set;
    let Vu = -1;
    const ru = new Set,
      Bu = new Set;
    let xu = 0,
      Su = 0;
    const pu = new Set,
      Tu = new Set;

    function Wu(uu) {
      return Nu.add(uu), () => {
        Nu.delete(uu)
      }
    }

    function ju(uu, Ru) {
      for (const Eu of Nu) try {
        Eu(uu)
      } catch (yu) {
        Ru(yu)
      }
    }

    function Hu(uu) {
      return Xu.add(uu), () => {
        Xu.delete(uu)
      }
    }

    function du(uu, Ru) {
      const yu = Vu < 0 ? 0 : uu - Vu;
      Vu = uu;
      for (const Ku of Xu) try {
        Ku(yu)
      } catch (Eu) {
        Ru(Eu)
      }
    }

    function bu(uu) {
      return ru.add(uu), () => {
        ru.delete(uu)
      }
    }

    function Cu(uu) {
      return Bu.add(uu), () => {
        Bu.delete(uu)
      }
    }
    let ku = 0;

    function eu(uu) {
      ku += uu
    }

    function Au() {
      const uu = ku;
      return ku = 0, uu
    }

    function Du(uu) {
      return pu.add(uu), () => {
        pu.delete(uu)
      }
    }

    function Mu(uu) {
      return Tu.add(uu), () => {
        Tu.delete(uu)
      }
    }

    function Iu() {
      xu = 0, Su = 0, Vu = -1
    }

    function Gu(uu, Ru) {
      if ("paced" === uu) return Su += Ru, null;
      if ("drawn" !== uu && "skipped" !== uu) return null;
      const yu = Ru + Su;
      return Su = 0, yu
    }

    function Uu(uu, Ru, yu, Ku) {
      const Qu = (0, Eu.g)(Ru),
        mu = uu > 0 ? performance.now() : 0;
      for (let Eu = 0; Eu < uu; Eu++)
        for (const uu of pu) try {
          uu()
        } catch (Ju) {
          Ku(Ju)
        }
      if (uu > 0 && eu(performance.now() - mu), null !== yu) {
        for (const uu of ru) try {
          uu(yu)
        } catch (Ju) {
          Ku(Ju)
        }
        xu += yu
      }
      if ("drawn" === Ru) {
        const uu = xu;
        xu = 0;
        for (const Ru of Bu) try {
          Ru(uu)
        } catch (Ju) {
          Ku(Ju)
        }
      }
      for (const Eu of Tu) try {
        Eu(uu, Qu)
      } catch (Ju) {
        Ku(Ju)
      }
    }
  },
  40472: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Eu
    });
    const Eu = {
      stop: () => Eu,
      fade: () => Eu,
      rate: () => Eu,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => Eu,
      setPannerAttr: () => Eu,
      setPosition: () => Eu
    }
  },
  4573: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Nu,
      g: () => Qu,
      h: () => Ju
    });
    var Eu = yu(2306),
      Ku = yu(4578);

    function Qu(uu) {
      let {
        action: Ru,
        flags: yu
      } = uu;
      return "mid-fire" === Ru && 0 !== (yu & Eu.b.AltLeftClick)
    }
    const mu = new Set;

    function Ju(uu) {
      return mu.add(uu), () => {
        mu.delete(uu)
      }
    }

    function Nu(uu) {
      const Ru = Ku.b[255 & uu];
      if (void 0 === Ru) return;
      const yu = uu >>> 8 & 255,
        Qu = {
          action: Ru,
          down: 0 !== (yu & Eu.b.Down),
          flags: yu,
          press: uu >>> 16
        };
      for (const Eu of mu) Eu(Qu)
    }
  },
  4578: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Ku,
      e: () => Qu,
      f: () => mu,
      j: () => Eu,
      k: () => Ju
    });
    const Eu = {
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
      Ku = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      Qu = {
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
      mu = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      Ju = [16]
  },
  40578: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Vu,
      g: () => Xu,
      h: () => Nu
    });
    var Eu = yu(4564),
      Ku = yu(2306),
      Qu = yu(4586);
    let mu = !1,
      Ju = !1;

    function Nu(uu) {
      mu = !0;
      try {
        uu()
      } finally {
        mu = !1
      }
    }

    function Xu(uu, Ru) {
      if (mu) return !1;
      switch (uu) {
        case Eu.G.MouseDown:
        case Eu.G.MouseUp:
        case Eu.G.TouchStart:
        case Eu.G.TouchEnd:
        case Eu.G.TouchCancel:
        case Eu.G.TouchButton:
          return !0;
        case Eu.G.KeyDown:
        case Eu.G.KeyUp:
          return 0 === (Ru & Ku.d.Repeat) && !(0, Qu.f)(document.activeElement);
        default:
          return !1
      }
    }

    function Vu(uu) {
      Ju || (Ju = !0, queueMicrotask((() => {
        Ju = !1, uu()
      })))
    }
  },
  4586: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Ju,
      f: () => mu,
      h: () => Xu
    });
    var Eu = yu(2306),
      Ku = yu(2312);
    const Qu = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function mu(uu) {
      return uu instanceof HTMLElement && (!!(uu.isContentEditable || uu instanceof HTMLTextAreaElement || uu instanceof HTMLSelectElement) || uu instanceof HTMLInputElement && !Qu.has(uu.type))
    }

    function Ju(uu) {
      let Ru = null;
      const yu = yu => {
          const Ku = mu(yu);
          Ku !== Ru && (Ru = Ku, uu(Eu.f.UiCapture, Eu.t.Keyboard, 0, 0, Ku ? Eu.t.Keyboard : 0))
        },
        Ku = uu => {
          yu(uu.target)
        },
        Qu = uu => {
          yu(uu.relatedTarget)
        },
        Ju = () => {
          yu(document.activeElement)
        },
        Nu = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", Ku, Nu), document.addEventListener("focusout", Qu, Nu), document.addEventListener("keydown", Ju, Nu), yu(document.activeElement), () => {
        document.removeEventListener("focusin", Ku, Nu), document.removeEventListener("focusout", Qu, Nu), document.removeEventListener("keydown", Ju, Nu)
      }
    }
    const Nu = new Map;

    function Xu(uu, Ru) {
      var yu;
      let Eu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      Nu.set(Eu, (null !== (yu = Nu.get(Eu)) && void 0 !== yu ? yu : 0) & ~uu | Ru & uu);
      let Qu = 0;
      for (const Ku of Nu.values()) Qu |= Ku;
      return (0, Ku.J)(uu, Qu & uu)
    }
  },
  40621: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Eu
    });
    const Eu = 2e3
  },
  40470: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Hu,
      f: () => Xu,
      i: () => Tu,
      m: () => ju,
      p: () => Wu,
      q: () => du
    });
    var Eu = yu(27),
      Ku = yu(34),
      Qu = yu(2662),
      mu = yu(1257),
      Ju = yu(8973),
      Nu = yu(2668);

    function Xu() {
      var uu;
      const Ru = (yu = Eu.d.get("clientEscMenuOptions"), Ku = (0, Qu.A)(), {
        sampleCount: yu.antiAliasing ? 4 : 1,
        n: (0, Qu.w)(yu.pixelScale, Ku),
        pixelated: (0, Qu.s)(yu.pixelSmoothing)
      });
      var yu, Ku;
      return Ru.sampleCount > 1 && (0, Ju.c)() && (Ru.sampleCount = 1), Ru.n = null !== (uu = (0, Ju.r)()) && void 0 !== uu ? uu : Ru.n, Ru
    }
    let Vu = null,
      ru = null;
    const Bu = new Set;
    let xu = null;

    function Su() {
      for (const uu of Bu) uu()
    }

    function pu() {
      if (null === Vu) {
        const uu = document.createElement("div");
        uu.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", uu.setAttribute("aria-hidden", "true"), document.body.append(uu), ru = uu, Vu = new Qu.e(uu, Su)
      }
      return Vu
    }

    function Tu(uu) {
      const Ru = (0, Qu.m)(),
        [yu, Eu] = pu().size(Ru);
      return (0, Qu.k)(yu, Eu, Ru, uu.n)
    }

    function Wu(uu) {
      var Ru, yu, Eu, Ku;
      const Ju = (0, Qu.m)(),
        [Nu, Vu] = pu().size(Ju);
      if (Nu <= 0 || Vu <= 0) return null;
      const ru = (0, Qu.k)(Nu, Vu, Ju, Xu().n);
      return (0, Qu.i)(uu, ru), uu.style.left = `${null!==(Ru=null===(yu=xu)||void 0===yu?void 0:yu.rect.left)&&void 0!==Ru?Ru:0}px`, uu.style.top = `${null!==(Eu=null===(Ku=xu)||void 0===Ku?void 0:Ku.rect.top)&&void 0!==Eu?Eu:0}px`, (0, mu.N)(uu.style, xu), ru
    }

    function ju(uu) {
      xu = uu, pu(), (0, mu.F)(ru.style, uu, ""), Su()
    }

    function Hu(uu, Ru) {
      uu.style.imageRendering = (0, Qu.D)(Ru.pixelated)
    }

    function du(uu, Ru) {
      const yu = (0, Ku.n)("appManagerUpdated|clientEscMenuOptions", (() => {
          Hu(uu, Xu()), Ru()
        })),
        Eu = (0, Ju.C)(Ru),
        Qu = (0, Nu.j)(Ru);
      return pu(), Bu.add(Ru), () => {
        yu(), Eu(), Qu(), Bu.delete(Ru)
      }
    }
  },
  40627: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => mu,
      h: () => Qu,
      k: () => Ku
    });
    let Eu = null;

    function Ku(uu) {
      Eu = uu
    }

    function Qu(uu) {
      Eu === uu && (Eu = null)
    }

    function mu() {
      var uu;
      null === (uu = Eu) || void 0 === uu || uu()
    }
  },
  40603: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Ku,
      g: () => Xu,
      h: () => Qu,
      i: () => ru,
      l: () => Vu,
      o: () => Bu
    });
    var Eu = yu(3514);
    class Ku extends Error {
      constructor(uu, Ru, yu) {
        super(`${"fetch"===uu?"fetching":"decoding"} ${Ru} failed`, yu), this.stage = uu, this.source = Ru, this.name = "ShellImageError"
      }
    }
    async function Qu(uu) {
      let Ru, yu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Eu.E,
        Qu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      if ("string" === typeof uu) try {
        Ru = await yu(uu)
      } catch (mu) {
        throw new Ku("fetch", uu, {
          cause: mu
        })
      } else Ru = uu;
      try {
        const uu = new Blob([Ru.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(uu, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: Qu
        })
      } catch (mu) {
        throw new Ku("decode", "string" === typeof uu ? uu : `${Ru.byteLength} bytes`, {
          cause: mu
        })
      }
    }
    let mu = null;
    const Ju = new Map;
    let Nu = 1;

    function Xu(uu) {
      if (mu = uu, null !== uu) {
        for (const [Ru, yu] of Ju) uu.xEu(Ru, yu);
        Ju.clear()
      }
    }

    function Vu(uu) {
      const Ru = Nu++;
      return mu ? mu.xEu(Ru, uu) : Ju.set(Ru, uu), Ru
    }
    async function ru(uu, Ru, yu) {
      const Eu = await Qu(uu, Ru, yu);
      return {
        id: Vu(Eu),
        width: Eu.width,
        height: Eu.height
      }
    }

    function Bu(uu) {
      var Ru;
      const yu = Ju.get(uu);
      if (yu) return yu.close(), void Ju.delete(uu);
      null === (Ru = mu) || void 0 === Ru || Ru.SEu(uu)
    }
  },
  40492: (uu, Ru, yu) => {
    function Eu(uu, Ru) {
      if (!Object.prototype.hasOwnProperty.call(uu, Ru)) throw new TypeError("attempted to use private field on non-instance");
      return uu
    }
    yu.d(Ru, {
      e: () => Eu
    })
  },
  40499: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Ku
    });
    var Eu = 0;

    function Ku(uu) {
      return "__private_" + Eu++ + "_" + uu
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);