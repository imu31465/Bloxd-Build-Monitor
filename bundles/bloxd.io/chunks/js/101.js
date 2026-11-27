export const id = 101;
export const ids = [101];
export const modules = {
  41977: (ee, ie, He) => {
    He.d(ie, {
      $: () => Ye,
      D: () => ae,
      E: () => Ve,
      I: () => Ne,
      M: () => xe,
      O: () => Pe,
      P: () => ce,
      T: () => De,
      V: () => ne,
      X: () => Se,
      d: () => je,
      f: () => Ce,
      j: () => Ze,
      l: () => se,
      p: () => we,
      t: () => te,
      x: () => Le,
      z: () => Ae
    });
    var ye = He(1385),
      be = He(27),
      Me = He(1246),
      Ke = He(2492),
      Ue = He(5291),
      Fe = He(5262);
    let Je, oe = !1,
      Re = !1,
      ke = !1,
      qe = !1;
    const fe = 1300,
      Te = 3e3;
    let pe = 0,
      Xe = !1,
      ze = !1,
      Be = 0;
    const Ee = 2;
    let ge = !1,
      Oe = !1;
    const de = new Set,
      We = new Set;

    function te() {
      return oe
    }

    function Ze() {
      return ze
    }

    function we() {
      return Oe
    }

    function De() {
      return (0, Me.x)() && !Oe
    }

    function Pe(ee) {
      let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (ee !== Oe) {
        Oe = ee;
        for (const ee of [...We]) ee(Oe);
        ie && Se()
      }
    }

    function Ae(ee) {
      return We.add(ee), () => {
        We.delete(ee)
      }
    }

    function Ye() {
      (0, Ue.h)(Ke.p.Menu, (0, Me.x)() ? 0 : Ke.p.Menu)
    }

    function Ve() {
      ze = !1, Be = 0, Ye(), Se()
    }

    function ae(ee) {
      return de.add(ee), () => {
        de.delete(ee)
      }
    }

    function ce(ee) {
      Re = !1, ee !== oe && (oe = ee, qe = !1, clearTimeout(Je), ke = !oe && ge, oe ? (Xe = !1, ze = !1, Be = 0) : De() && !ge && (ze = !0), ge = !1, oe && !De() && he(), Ge(), ke && Se())
    }

    function xe(ee) {
      ee !== Xe && (Xe = ee, ee || Se())
    }

    function Le() {
      Re = !1, qe || !0 !== me() || (qe = !0, clearTimeout(Je), Je = setTimeout(ve, fe))
    }

    function Ce() {
      return (!Re || performance.now() - pe > Te) && (Re = (0, Fe.O)().lockPointer(), pe = performance.now()), Re
    }

    function ve() {
      ue() && le() && Ce()
    }

    function ue() {
      return De() && !oe && !Xe && !(0, ye.n)()
    }

    function me() {
      var ee;
      return "undefined" === typeof navigator || null === (ee = navigator.userActivation) || void 0 === ee ? void 0 : ee.isActive
    }

    function le() {
      return ke && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== me()
    }

    function Se() {
      De() ? ue() && !ze && le() && Ce() : oe && !ge && he()
    }

    function ne() {
      ze ? navigator.vendor.startsWith("Apple") ? Ie() : Be = Ee : Se()
    }

    function je() {
      Be > 0 && 0 === --Be && Ie()
    }

    function se() {
      Be = 0
    }

    function Ie() {
      ue() && !0 === me() && Ce()
    }

    function he() {
      ge = !0, (0, Fe.O)().unlockPointer()
    }

    function Ne() {
      Re = !1, ke = !1, qe = !1, clearTimeout(Je), Xe = !1, ze = !1, Be = 0, ge = !1;
      const ee = oe;
      oe = !1, ee && Ge()
    }

    function Ge() {
      for (const ee of [...de]) ee(oe);
      be.h.yR("pointerLockUpdate", oe)
    }
  },
  41780: (ee, ie, He) => {
    He.d(ie, {
      b: () => ke,
      d: () => Ue,
      g: () => Re,
      i: () => Je,
      k: () => Ke,
      l: () => oe,
      p: () => Fe
    });
    let ye = null,
      be = null,
      Me = null;

    function Ke(ee) {
      ye = ee
    }

    function Ue() {
      return ye
    }

    function Fe(ee) {
      be = ee
    }

    function Je() {
      return be
    }

    function oe(ee) {
      Me = ee
    }

    function Re() {
      return Me
    }

    function ke() {
      var ee, ie;
      return !0 === (null === (ee = be) || void 0 === ee || null === (ie = ee.currentViewer) || void 0 === ie ? void 0 : ie.inPlayback)
    }
  },
  5262: (ee, ie, He) => {
    He.d(ie, {
      A: () => we,
      E: () => De,
      H: () => ze,
      K: () => Ke,
      O: () => Ue,
      Q: () => te,
      c: () => We,
      d: () => Ee,
      e: () => Ae,
      g: () => Pe,
      k: () => Xe,
      o: () => Oe,
      q: () => Be,
      u: () => ge,
      w: () => Ze
    });
    var ye = He(5265);
    const be = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let Me = be;

    function Ke(ee) {
      Me = null !== ee && void 0 !== ee ? ee : be
    }

    function Ue() {
      return Me
    }
    const Fe = new Set,
      Je = new Set;
    let oe = -1;
    const Re = new Set,
      ke = new Set;
    let qe = 0,
      fe = 0;
    const Te = new Set,
      pe = new Set;

    function Xe(ee) {
      return Fe.add(ee), () => {
        Fe.delete(ee)
      }
    }

    function ze(ee, ie) {
      for (const ye of Fe) try {
        ye(ee)
      } catch (He) {
        ie(He)
      }
    }

    function Be(ee) {
      return Je.add(ee), () => {
        Je.delete(ee)
      }
    }

    function Ee(ee, ie) {
      const He = oe < 0 ? 0 : ee - oe;
      oe = ee;
      for (const be of Je) try {
        be(He)
      } catch (ye) {
        ie(ye)
      }
    }

    function ge(ee) {
      return Re.add(ee), () => {
        Re.delete(ee)
      }
    }

    function Oe(ee) {
      return ke.add(ee), () => {
        ke.delete(ee)
      }
    }
    let de = 0;

    function We(ee) {
      de += ee
    }

    function te() {
      const ee = de;
      return de = 0, ee
    }

    function Ze(ee) {
      return Te.add(ee), () => {
        Te.delete(ee)
      }
    }

    function we(ee) {
      return pe.add(ee), () => {
        pe.delete(ee)
      }
    }

    function De() {
      qe = 0, fe = 0, oe = -1
    }

    function Pe(ee, ie) {
      if ("paced" === ee) return fe += ie, null;
      if ("drawn" !== ee && "skipped" !== ee) return null;
      const He = ie + fe;
      return fe = 0, He
    }

    function Ae(ee, ie, He, be) {
      const Me = (0, ye.h)(ie),
        Ke = ee > 0 ? performance.now() : 0;
      for (let ye = 0; ye < ee; ye++)
        for (const ee of Te) try {
          ee()
        } catch (Ue) {
          be(Ue)
        }
      if (ee > 0 && We(performance.now() - Ke), null !== He) {
        for (const ee of Re) try {
          ee(He)
        } catch (Ue) {
          be(Ue)
        }
        qe += He
      }
      if ("drawn" === ie) {
        const ee = qe;
        qe = 0;
        for (const ie of ke) try {
          ie(ee)
        } catch (Ue) {
          be(Ue)
        }
      }
      for (const ye of pe) try {
        ye(ee, Me)
      } catch (Ue) {
        be(Ue)
      }
    }
  },
  41985: (ee, ie, He) => {
    He.d(ie, {
      c: () => ye
    });
    const ye = {
      stop: () => ye,
      fade: () => ye,
      rate: () => ye,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => ye,
      setPannerAttr: () => ye,
      setPosition: () => ye
    }
  },
  5282: (ee, ie, He) => {
    He.d(ie, {
      d: () => Fe,
      f: () => Me,
      j: () => Ue
    });
    var ye = He(2492),
      be = He(5286);

    function Me(ee) {
      let {
        action: ie,
        flags: He
      } = ee;
      return "mid-fire" === ie && 0 !== (He & ye.d.AltLeftClick)
    }
    const Ke = new Set;

    function Ue(ee) {
      return Ke.add(ee), () => {
        Ke.delete(ee)
      }
    }

    function Fe(ee) {
      const ie = be.d[255 & ee];
      if (void 0 === ie) return;
      const He = ee >>> 8 & 255,
        Me = {
          action: ie,
          down: 0 !== (He & ye.d.Down),
          flags: He,
          press: ee >>> 16
        };
      for (const ye of Ke) ye(Me)
    }
  },
  5286: (ee, ie, He) => {
    He.d(ie, {
      d: () => be,
      h: () => Me,
      l: () => Ke,
      p: () => ye,
      t: () => Ue
    });
    const ye = {
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
      be = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      Me = {
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
      Ke = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      Ue = [16]
  },
  42008: (ee, ie, He) => {
    He.d(ie, {
      d: () => oe,
      g: () => Je,
      i: () => Fe
    });
    var ye = He(5279),
      be = He(2492),
      Me = He(5291);
    let Ke = !1,
      Ue = !1;

    function Fe(ee) {
      Ke = !0;
      try {
        ee()
      } finally {
        Ke = !1
      }
    }

    function Je(ee, ie) {
      if (Ke) return !1;
      switch (ee) {
        case ye.J.MouseDown:
        case ye.J.MouseUp:
        case ye.J.TouchStart:
        case ye.J.TouchEnd:
        case ye.J.TouchCancel:
        case ye.J.TouchButton:
          return !0;
        case ye.J.KeyDown:
        case ye.J.KeyUp:
          return 0 === (ie & be.e.Repeat) && !(0, Me.d)(document.activeElement);
        default:
          return !1
      }
    }

    function oe(ee) {
      Ue || (Ue = !0, queueMicrotask((() => {
        Ue = !1, ee()
      })))
    }
  },
  5291: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ue,
      d: () => Ke,
      h: () => Je
    });
    var ye = He(2492),
      be = He(2495);
    const Me = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function Ke(ee) {
      return ee instanceof HTMLElement && (!!(ee.isContentEditable || ee instanceof HTMLTextAreaElement || ee instanceof HTMLSelectElement) || ee instanceof HTMLInputElement && !Me.has(ee.type))
    }

    function Ue(ee) {
      let ie = null;
      const He = He => {
          const be = Ke(He);
          be !== ie && (ie = be, ee(ye.f.UiCapture, ye.p.Keyboard, 0, 0, be ? ye.p.Keyboard : 0))
        },
        be = ee => {
          He(ee.target)
        },
        Me = ee => {
          He(ee.relatedTarget)
        },
        Ue = () => {
          He(document.activeElement)
        },
        Fe = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", be, Fe), document.addEventListener("focusout", Me, Fe), document.addEventListener("keydown", Ue, Fe), He(document.activeElement), () => {
        document.removeEventListener("focusin", be, Fe), document.removeEventListener("focusout", Me, Fe), document.removeEventListener("keydown", Ue, Fe)
      }
    }
    const Fe = new Map;

    function Je(ee, ie) {
      var He;
      let ye = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      Fe.set(ye, (null !== (He = Fe.get(ye)) && void 0 !== He ? He : 0) & ~ee | ie & ee);
      let Me = 0;
      for (const be of Fe.values()) Me |= be;
      return (0, be.A)(ee, Me & ee)
    }
  },
  37090: (ee, ie, He) => {
    He.d(ie, {
      e: () => oe,
      f: () => Fe,
      j: () => Ue,
      n: () => Je
    });
    var ye = He(1992);
    let be = null,
      Me = 0;
    const Ke = new Set;

    function Ue() {
      return be
    }

    function Fe() {
      return Me
    }

    function Je(ee) {
      be = ee, Me++, (0, ye.d)();
      for (const ie of Ke) ie()
    }

    function oe(ee) {
      Ke.add(ee)
    }
  },
  42086: (ee, ie, He) => {
    He.d(ie, {
      e: () => ye
    });
    const ye = 2e3
  },
  41981: (ee, ie, He) => {
    He.d(ie, {
      b: () => Oe,
      f: () => ke,
      g: () => Be,
      k: () => ge,
      l: () => Ee,
      m: () => de
    });
    var ye = He(170),
      be = He(18),
      Me = He(27),
      Ke = He(3128),
      Ue = He(1260),
      Fe = He(34798),
      Je = He(295),
      oe = He(97),
      Re = He(165);

    function ke() {
      var ee;
      const ie = (0, Ke.L)(),
        He = function(ee, ie) {
          return {
            sampleCount: ee.antiAliasing ? 4 : 1,
            n: (0, Ke.z)(ee.pixelScale, ie),
            pixelated: (0, Ke.x)(ee.pixelSmoothing)
          }
        }(be.e.get("clientEscMenuOptions"), ie);
      return He.sampleCount > 1 && (0, Fe.b)() && (He.sampleCount = 1), He.n = null !== (ee = (0, Fe.h)()) && void 0 !== ee ? ee : He.n, ye.j.includes((0, oe.getSoftwareRenderer)()) && (He.sampleCount = 1, He.n = Math.max(He.n, (0, Ke.z)(Re.n.pixelScale, ie))), He
    }
    let qe = null,
      fe = null;
    const Te = new Set;
    let pe = null;

    function Xe() {
      for (const ee of Te) ee()
    }

    function ze() {
      if (null === qe) {
        const ee = document.createElement("div");
        ee.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", ee.setAttribute("aria-hidden", "true"), document.body.append(ee), fe = ee, qe = new Ke.c(ee, Xe)
      }
      return qe
    }

    function Be(ee) {
      const ie = (0, Ke.o)(),
        [He, ye] = ze().size(ie);
      return (0, Ke.j)(He, ye, ie, ee.n)
    }

    function Ee(ee) {
      var ie, He, ye, be;
      const Me = (0, Ke.o)(),
        [Fe, Je] = ze().size(Me);
      if (Fe <= 0 || Je <= 0) return null;
      const oe = (0, Ke.j)(Fe, Je, Me, ke().n);
      return (0, Ke.f)(ee, oe), ee.style.left = `${null!==(ie=null===(He=pe)||void 0===He?void 0:He.rect.left)&&void 0!==ie?ie:0}px`, ee.style.top = `${null!==(ye=null===(be=pe)||void 0===be?void 0:be.rect.top)&&void 0!==ye?ye:0}px`, (0, Ue.J)(ee.style, pe), oe
    }

    function ge(ee) {
      pe = ee, ze(), (0, Ue.C)(fe.style, ee, ""), Xe()
    }

    function Oe(ee, ie) {
      ee.style.imageRendering = (0, Ke.O)(ie.pixelated)
    }

    function de(ee, ie) {
      const He = (0, Me.j)("appManagerUpdated|clientEscMenuOptions", (() => {
          Oe(ee, ke()), ie()
        })),
        ye = (0, Fe.x)(ie),
        be = (0, Je.l)(ie);
      return ze(), Te.add(ie), () => {
        He(), ye(), be(), Te.delete(ie)
      }
    }
  },
  42091: (ee, ie, He) => {
    He.d(ie, {
      e: () => Ke,
      g: () => Me,
      j: () => be
    });
    let ye = null;

    function be(ee) {
      ye = ee
    }

    function Me(ee) {
      ye === ee && (ye = null)
    }

    function Ke() {
      var ee;
      null === (ee = ye) || void 0 === ee || ee()
    }
  },
  42039: (ee, ie, He) => {
    He.d(ie, {
      e: () => be,
      h: () => Je,
      k: () => Me,
      o: () => Re,
      r: () => oe,
      t: () => ke
    });
    var ye = He(3101);
    class be extends Error {
      constructor(ee, ie, He) {
        super(`${"fetch"===ee?"fetching":"decoding"} ${ie} failed`, He), this.stage = ee, this.source = ie, this.name = "ShellImageError"
      }
    }
    async function Me(ee) {
      let ie, He = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ye.F,
        Me = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      if ("string" === typeof ee) try {
        ie = await He(ee)
      } catch (Ke) {
        throw new be("fetch", ee, {
          cause: Ke
        })
      } else ie = ee;
      try {
        const ee = new Blob([ie.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(ee, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: Me
        })
      } catch (Ke) {
        throw new be("decode", "string" === typeof ee ? ee : `${ie.byteLength} bytes`, {
          cause: Ke
        })
      }
    }
    let Ke = null;
    const Ue = new Map;
    let Fe = 1;

    function Je(ee) {
      if (Ke = ee, null !== ee) {
        for (const [ie, He] of Ue) ee.mbe(ie, He);
        Ue.clear()
      }
    }

    function oe(ee) {
      const ie = Fe++;
      return Ke ? Ke.mbe(ie, ee) : Ue.set(ie, ee), ie
    }
    async function Re(ee, ie, He) {
      const ye = await Me(ee, ie, He);
      return {
        id: oe(ye),
        width: ye.width,
        height: ye.height
      }
    }

    function ke(ee) {
      var ie;
      const He = Ue.get(ee);
      if (He) return He.close(), void Ue.delete(ee);
      null === (ie = Ke) || void 0 === ie || ie.lbe(ee)
    }
  },
  41992: (ee, ie, He) => {
    function ye(ee, ie) {
      if (!Object.prototype.hasOwnProperty.call(ee, ie)) throw new TypeError("attempted to use private field on non-instance");
      return ee
    }
    He.d(ie, {
      d: () => ye
    })
  },
  41995: (ee, ie, He) => {
    He.d(ie, {
      b: () => be
    });
    var ye = 0;

    function be(ee) {
      return "__private_" + ye++ + "_" + ee
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);