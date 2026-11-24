export const id = 87;
export const ids = [87];
export const modules = {
  40962: (mm, Tm, fm) => {
    fm.d(Tm, {
      A: () => Gm,
      C: () => gm,
      E: () => Hm,
      F: () => Sm,
      J: () => Pm,
      K: () => bm,
      N: () => Bm,
      R: () => um,
      V: () => Nm,
      b: () => Lm,
      d: () => Cm,
      e: () => Zm,
      i: () => tm,
      l: () => km,
      p: () => zm,
      t: () => ym,
      w: () => em,
      z: () => Xm
    });
    var hm = fm(1389),
      Am = fm(31),
      am = fm(1286),
      xm = fm(2364),
      wm = fm(4763),
      Dm = fm(4722);
    let im, Rm = !1,
      pm = !1,
      Em = !1,
      om = !1;
    const Om = 1300,
      Ym = 3e3;
    let qm = 0,
      jm = !1,
      Vm = !1,
      Im = 0;
    const Km = 2;
    let Qm = !1,
      nm = !1;
    const Jm = new Set,
      cm = new Set;

    function zm() {
      return Rm
    }

    function Zm() {
      return Vm
    }

    function km() {
      return nm
    }

    function bm() {
      return (0, am.r)() && !nm
    }

    function Sm(mm) {
      let Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (mm !== nm) {
        nm = mm;
        for (const mm of [...cm]) mm(nm);
        Tm && um()
      }
    }

    function em(mm) {
      return cm.add(mm), () => {
        cm.delete(mm)
      }
    }

    function Nm() {
      (0, wm.h)(xm.w.Menu, (0, am.r)() ? 0 : xm.w.Menu)
    }

    function Gm() {
      Vm = !1, Im = 0, Nm(), um()
    }

    function Xm(mm) {
      return Jm.add(mm), () => {
        Jm.delete(mm)
      }
    }

    function Pm(mm) {
      pm = !1, mm !== Rm && (Rm = mm, om = !1, clearTimeout(im), Em = !Rm && Qm, Rm ? (jm = !1, Vm = !1, Im = 0) : bm() && !Qm && (Vm = !0), Qm = !1, Rm && !bm() && dm(), Wm(), Em && um())
    }

    function Hm(mm) {
      mm !== jm && (jm = mm, mm || um())
    }

    function ym() {
      pm = !1, om || !0 !== lm() || (om = !0, clearTimeout(im), im = setTimeout(rm, Om))
    }

    function Cm() {
      return (!pm || performance.now() - qm > Ym) && (pm = (0, Dm.J)().lockPointer(), qm = performance.now()), pm
    }

    function rm() {
      sm() && Mm() && Cm()
    }

    function sm() {
      return bm() && !Rm && !jm && !(0, hm.h)()
    }

    function lm() {
      var mm;
      return "undefined" === typeof navigator || null === (mm = navigator.userActivation) || void 0 === mm ? void 0 : mm.isActive
    }

    function Mm() {
      return Em && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== lm()
    }

    function um() {
      bm() ? sm() && !Vm && Mm() && Cm() : Rm && !Qm && dm()
    }

    function Bm() {
      Vm ? navigator.vendor.startsWith("Apple") ? Um() : Im = Km : um()
    }

    function Lm() {
      Im > 0 && 0 === --Im && Um()
    }

    function tm() {
      Im = 0
    }

    function Um() {
      sm() && !0 === lm() && Cm()
    }

    function dm() {
      Qm = !0, (0, Dm.J)().unlockPointer()
    }

    function gm() {
      pm = !1, Em = !1, om = !1, clearTimeout(im), jm = !1, Vm = !1, Im = 0, Qm = !1;
      const mm = Rm;
      Rm = !1, mm && Wm()
    }

    function Wm() {
      for (const mm of [...Jm]) mm(Rm);
      Am.j.gp("pointerLockUpdate", Rm)
    }
  },
  40761: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Em,
      f: () => wm,
      i: () => pm,
      j: () => im,
      n: () => xm,
      p: () => Rm,
      r: () => Dm
    });
    let hm = null,
      Am = null,
      am = null;

    function xm(mm) {
      hm = mm
    }

    function wm() {
      return hm
    }

    function Dm(mm) {
      Am = mm
    }

    function im() {
      return Am
    }

    function Rm(mm) {
      am = mm
    }

    function pm() {
      return am
    }

    function Em() {
      var mm, Tm;
      return !0 === (null === (mm = Am) || void 0 === mm || null === (Tm = mm.currentViewer) || void 0 === Tm ? void 0 : Tm.inPlayback)
    }
  },
  4722: (mm, Tm, fm) => {
    fm.d(Tm, {
      B: () => bm,
      F: () => Vm,
      G: () => xm,
      J: () => wm,
      K: () => zm,
      d: () => cm,
      h: () => Km,
      j: () => em,
      m: () => Sm,
      p: () => jm,
      q: () => nm,
      s: () => Im,
      u: () => Qm,
      y: () => Zm,
      z: () => km
    });
    var hm = fm(4729);
    const Am = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let am = Am;

    function xm(mm) {
      am = null !== mm && void 0 !== mm ? mm : Am
    }

    function wm() {
      return am
    }
    const Dm = new Set,
      im = new Set;
    let Rm = -1;
    const pm = new Set,
      Em = new Set;
    let om = 0,
      Om = 0;
    const Ym = new Set,
      qm = new Set;

    function jm(mm) {
      return Dm.add(mm), () => {
        Dm.delete(mm)
      }
    }

    function Vm(mm, Tm) {
      for (const hm of Dm) try {
        hm(mm)
      } catch (fm) {
        Tm(fm)
      }
    }

    function Im(mm) {
      return im.add(mm), () => {
        im.delete(mm)
      }
    }

    function Km(mm, Tm) {
      const fm = Rm < 0 ? 0 : mm - Rm;
      Rm = mm;
      for (const Am of im) try {
        Am(fm)
      } catch (hm) {
        Tm(hm)
      }
    }

    function Qm(mm) {
      return pm.add(mm), () => {
        pm.delete(mm)
      }
    }

    function nm(mm) {
      return Em.add(mm), () => {
        Em.delete(mm)
      }
    }
    let Jm = 0;

    function cm(mm) {
      Jm += mm
    }

    function zm() {
      const mm = Jm;
      return Jm = 0, mm
    }

    function Zm(mm) {
      return Ym.add(mm), () => {
        Ym.delete(mm)
      }
    }

    function km(mm) {
      return qm.add(mm), () => {
        qm.delete(mm)
      }
    }

    function bm() {
      om = 0, Om = 0, Rm = -1
    }

    function Sm(mm, Tm) {
      if ("paced" === mm) return Om += Tm, null;
      if ("drawn" !== mm && "skipped" !== mm) return null;
      const fm = Tm + Om;
      return Om = 0, fm
    }

    function em(mm, Tm, fm, Am) {
      const am = (0, hm.f)(Tm),
        xm = mm > 0 ? performance.now() : 0;
      for (let hm = 0; hm < mm; hm++)
        for (const mm of Ym) try {
          mm()
        } catch (wm) {
          Am(wm)
        }
      if (mm > 0 && cm(performance.now() - xm), null !== fm) {
        for (const mm of pm) try {
          mm(fm)
        } catch (wm) {
          Am(wm)
        }
        om += fm
      }
      if ("drawn" === Tm) {
        const mm = om;
        om = 0;
        for (const Tm of Em) try {
          Tm(mm)
        } catch (wm) {
          Am(wm)
        }
      }
      for (const hm of qm) try {
        hm(mm, am)
      } catch (wm) {
        Am(wm)
      }
    }
  },
  40973: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => hm
    });
    const hm = {
      stop: () => hm,
      fade: () => hm,
      rate: () => hm,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => hm,
      setPannerAttr: () => hm,
      setPosition: () => hm
    }
  },
  4747: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Dm,
      e: () => am,
      g: () => wm
    });
    var hm = fm(2364),
      Am = fm(4755);

    function am(mm) {
      let {
        action: Tm,
        flags: fm
      } = mm;
      return "mid-fire" === Tm && 0 !== (fm & hm.e.AltLeftClick)
    }
    const xm = new Set;

    function wm(mm) {
      return xm.add(mm), () => {
        xm.delete(mm)
      }
    }

    function Dm(mm) {
      const Tm = Am.e[255 & mm];
      if (void 0 === Tm) return;
      const fm = mm >>> 8 & 255,
        am = {
          action: Tm,
          down: 0 !== (fm & hm.e.Down),
          flags: fm,
          press: mm >>> 16
        };
      for (const hm of xm) hm(am)
    }
  },
  4755: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Am,
      g: () => am,
      h: () => xm,
      i: () => hm,
      m: () => wm
    });
    const hm = {
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
      Am = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      am = {
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
      xm = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      wm = [16]
  },
  41e3: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Rm,
      c: () => im,
      g: () => Dm
    });
    var hm = fm(4741),
      Am = fm(2364),
      am = fm(4763);
    let xm = !1,
      wm = !1;

    function Dm(mm) {
      xm = !0;
      try {
        mm()
      } finally {
        xm = !1
      }
    }

    function im(mm, Tm) {
      if (xm) return !1;
      switch (mm) {
        case hm.M.MouseDown:
        case hm.M.MouseUp:
        case hm.M.TouchStart:
        case hm.M.TouchEnd:
        case hm.M.TouchCancel:
        case hm.M.TouchButton:
          return !0;
        case hm.M.KeyDown:
        case hm.M.KeyUp:
          return 0 === (Tm & Am.h.Repeat) && !(0, am.f)(document.activeElement);
        default:
          return !1
      }
    }

    function Rm(mm) {
      wm || (wm = !0, queueMicrotask((() => {
        wm = !1, mm()
      })))
    }
  },
  4763: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => wm,
      f: () => xm,
      h: () => im
    });
    var hm = fm(2364),
      Am = fm(2373);
    const am = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function xm(mm) {
      return mm instanceof HTMLElement && (!!(mm.isContentEditable || mm instanceof HTMLTextAreaElement || mm instanceof HTMLSelectElement) || mm instanceof HTMLInputElement && !am.has(mm.type))
    }

    function wm(mm) {
      let Tm = null;
      const fm = fm => {
          const Am = xm(fm);
          Am !== Tm && (Tm = Am, mm(hm.i.UiCapture, hm.w.Keyboard, 0, 0, Am ? hm.w.Keyboard : 0))
        },
        Am = mm => {
          fm(mm.target)
        },
        am = mm => {
          fm(mm.relatedTarget)
        },
        wm = () => {
          fm(document.activeElement)
        },
        Dm = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", Am, Dm), document.addEventListener("focusout", am, Dm), document.addEventListener("keydown", wm, Dm), fm(document.activeElement), () => {
        document.removeEventListener("focusin", Am, Dm), document.removeEventListener("focusout", am, Dm), document.removeEventListener("keydown", wm, Dm)
      }
    }
    const Dm = new Map;

    function im(mm, Tm) {
      var fm;
      let hm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      Dm.set(hm, (null !== (fm = Dm.get(hm)) && void 0 !== fm ? fm : 0) & ~mm | Tm & mm);
      let am = 0;
      for (const Am of Dm.values()) am |= Am;
      return (0, Am.E)(mm, am & mm)
    }
  },
  41028: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Rm,
      d: () => Dm,
      h: () => wm,
      j: () => im
    });
    var hm = fm(1919);
    let Am = null,
      am = 0;
    const xm = new Set;

    function wm() {
      return Am
    }

    function Dm() {
      return am
    }

    function im(mm) {
      Am = mm, am++, (0, hm.d)();
      for (const Tm of xm) Tm()
    }

    function Rm(mm) {
      xm.add(mm)
    }
  },
  41060: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => hm
    });
    const hm = 2e3
  },
  40971: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => nm,
      e: () => Em,
      h: () => Im,
      i: () => Qm,
      k: () => Km,
      l: () => Jm
    });
    var hm = fm(184),
      Am = fm(23),
      am = fm(31),
      xm = fm(2898),
      wm = fm(1296),
      Dm = fm(34225),
      im = fm(313),
      Rm = fm(105),
      pm = fm(182);

    function Em() {
      var mm;
      const Tm = (0, xm.P)(),
        fm = function(mm, Tm) {
          return {
            sampleCount: mm.antiAliasing ? 4 : 1,
            n: (0, xm.E)(mm.pixelScale, Tm),
            pixelated: (0, xm.C)(mm.pixelSmoothing)
          }
        }(Am.c.get("clientEscMenuOptions"), Tm);
      return fm.sampleCount > 1 && (0, Dm.d)() && (fm.sampleCount = 1), fm.n = null !== (mm = (0, Dm.m)()) && void 0 !== mm ? mm : fm.n, hm.h.includes((0, Rm.getSoftwareRenderer)()) && (fm.sampleCount = 1, fm.n = Math.max(fm.n, (0, xm.E)(pm.u.pixelScale, Tm))), fm
    }
    let om = null,
      Om = null;
    const Ym = new Set;
    let qm = null;

    function jm() {
      for (const mm of Ym) mm()
    }

    function Vm() {
      if (null === om) {
        const mm = document.createElement("div");
        mm.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", mm.setAttribute("aria-hidden", "true"), document.body.append(mm), Om = mm, om = new xm.c(mm, jm)
      }
      return om
    }

    function Im(mm) {
      const Tm = (0, xm.r)(),
        [fm, hm] = Vm().size(Tm);
      return (0, xm.k)(fm, hm, Tm, mm.n)
    }

    function Km(mm) {
      var Tm, fm, hm, Am;
      const am = (0, xm.r)(),
        [Dm, im] = Vm().size(am);
      if (Dm <= 0 || im <= 0) return null;
      const Rm = (0, xm.k)(Dm, im, am, Em().n);
      return (0, xm.g)(mm, Rm), mm.style.left = `${null!==(Tm=null===(fm=qm)||void 0===fm?void 0:fm.rect.left)&&void 0!==Tm?Tm:0}px`, mm.style.top = `${null!==(hm=null===(Am=qm)||void 0===Am?void 0:Am.rect.top)&&void 0!==hm?hm:0}px`, (0, wm.E)(mm.style, qm), Rm
    }

    function Qm(mm) {
      qm = mm, Vm(), (0, wm.w)(Om.style, mm, ""), jm()
    }

    function nm(mm, Tm) {
      mm.style.imageRendering = (0, xm.S)(Tm.pixelated)
    }

    function Jm(mm, Tm) {
      const fm = (0, am.m)("appManagerUpdated|clientEscMenuOptions", (() => {
          nm(mm, Em()), Tm()
        })),
        hm = (0, Dm.z)(Tm),
        Am = (0, im.k)(Tm);
      return Vm(), Ym.add(Tm), () => {
        fm(), hm(), Am(), Ym.delete(Tm)
      }
    }
  },
  41065: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => xm,
      h: () => am,
      j: () => Am
    });
    let hm = null;

    function Am(mm) {
      hm = mm
    }

    function am(mm) {
      hm === mm && (hm = null)
    }

    function xm() {
      var mm;
      null === (mm = hm) || void 0 === mm || mm()
    }
  },
  41024: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Am,
      d: () => im,
      h: () => am,
      j: () => pm,
      l: () => Rm,
      o: () => Em
    });
    var hm = fm(2876);
    class Am extends Error {
      constructor(mm, Tm, fm) {
        super(`${"fetch"===mm?"fetching":"decoding"} ${Tm} failed`, fm), this.stage = mm, this.source = Tm, this.name = "ShellImageError"
      }
    }
    async function am(mm) {
      let Tm, fm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hm.I,
        am = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      if ("string" === typeof mm) try {
        Tm = await fm(mm)
      } catch (xm) {
        throw new Am("fetch", mm, {
          cause: xm
        })
      } else Tm = mm;
      try {
        const mm = new Blob([Tm.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(mm, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: am
        })
      } catch (xm) {
        throw new Am("decode", "string" === typeof mm ? mm : `${Tm.byteLength} bytes`, {
          cause: xm
        })
      }
    }
    let xm = null;
    const wm = new Map;
    let Dm = 1;

    function im(mm) {
      if (xm = mm, null !== mm) {
        for (const [Tm, fm] of wm) mm.tfm(Tm, fm);
        wm.clear()
      }
    }

    function Rm(mm) {
      const Tm = Dm++;
      return xm ? xm.tfm(Tm, mm) : wm.set(Tm, mm), Tm
    }
    async function pm(mm, Tm, fm) {
      const hm = await am(mm, Tm, fm);
      return {
        id: Rm(hm),
        width: hm.width,
        height: hm.height
      }
    }

    function Em(mm) {
      var Tm;
      const fm = wm.get(mm);
      if (fm) return fm.close(), void wm.delete(mm);
      null === (Tm = xm) || void 0 === Tm || Tm.Ufm(mm)
    }
  },
  40975: (mm, Tm, fm) => {
    function hm(mm, Tm) {
      if (!Object.prototype.hasOwnProperty.call(mm, Tm)) throw new TypeError("attempted to use private field on non-instance");
      return mm
    }
    fm.d(Tm, {
      e: () => hm
    })
  },
  40983: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Am
    });
    var hm = 0;

    function Am(mm) {
      return "__private_" + hm++ + "_" + mm
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);