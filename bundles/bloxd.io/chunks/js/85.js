export const id = 85;
export const ids = [85];
export const modules = {
  39822: (zz, tz, sz) => {
    sz.d(tz, {
      A: () => Tz,
      E: () => Az,
      F: () => jz,
      J: () => Rz,
      K: () => Mz,
      N: () => Gz,
      O: () => yz,
      P: () => Zz,
      Q: () => nz,
      S: () => lz,
      V: () => cz,
      e: () => az,
      i: () => hz,
      m: () => Cz,
      o: () => qz,
      r: () => ez,
      t: () => Iz,
      x: () => dz
    });
    var Fz = sz(1358),
      Wz = sz(34),
      Xz = sz(1269),
      Oz = sz(2273),
      oz = sz(4450),
      vz = sz(4419);
    let Uz, Kz = !1,
      uz = !1,
      Nz = !1,
      bz = !1;
    const wz = 1300,
      Dz = 3e3;
    let gz = 0,
      Hz = !1,
      Bz = !1,
      Pz = 0;
    const rz = 2;
    let Yz = !1,
      xz = !1;
    const mz = new Set,
      Jz = new Set;

    function Iz() {
      return Kz
    }

    function Cz() {
      return Bz
    }

    function ez() {
      return xz
    }

    function Zz() {
      return (0, Xz.o)() && !xz
    }

    function Gz(zz) {
      let tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (zz !== xz) {
        xz = zz;
        for (const zz of [...Jz]) zz(xz);
        tz && lz()
      }
    }

    function Tz(zz) {
      return Jz.add(zz), () => {
        Jz.delete(zz)
      }
    }

    function cz() {
      (0, oz.k)(Oz.x.Menu, (0, Xz.o)() ? 0 : Oz.x.Menu)
    }

    function jz() {
      Bz = !1, Pz = 0, cz(), lz()
    }

    function Az(zz) {
      return mz.add(zz), () => {
        mz.delete(zz)
      }
    }

    function yz(zz) {
      uz = !1, zz !== Kz && (Kz = zz, bz = !1, clearTimeout(Uz), Nz = !Kz && Yz, Kz ? (Hz = !1, Bz = !1, Pz = 0) : Zz() && !Yz && (Bz = !0), Yz = !1, Kz && !Zz() && Vz(), pz(), Nz && lz())
    }

    function Mz(zz) {
      zz !== Hz && (Hz = zz, zz || lz())
    }

    function dz() {
      uz = !1, bz || !0 !== iz() || (bz = !0, clearTimeout(Uz), Uz = setTimeout(Qz, wz))
    }

    function hz() {
      return (!uz || performance.now() - gz > Dz) && (uz = (0, vz.L)().lockPointer(), gz = performance.now()), uz
    }

    function Qz() {
      kz() && Lz() && hz()
    }

    function kz() {
      return Zz() && !Kz && !Hz && !(0, Fz.c)()
    }

    function iz() {
      var zz;
      return "undefined" === typeof navigator || null === (zz = navigator.userActivation) || void 0 === zz ? void 0 : zz.isActive
    }

    function Lz() {
      return Nz && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== iz()
    }

    function lz() {
      Zz() ? kz() && !Bz && Lz() && hz() : Kz && !Yz && Vz()
    }

    function nz() {
      Bz ? navigator.vendor.startsWith("Apple") ? Sz() : Pz = rz : lz()
    }

    function az() {
      Pz > 0 && 0 === --Pz && Sz()
    }

    function qz() {
      Pz = 0
    }

    function Sz() {
      kz() && !0 === iz() && hz()
    }

    function Vz() {
      Yz = !0, (0, vz.L)().unlockPointer()
    }

    function Rz() {
      uz = !1, Nz = !1, bz = !1, clearTimeout(Uz), Hz = !1, Bz = !1, Pz = 0, Yz = !1;
      const zz = Kz;
      Kz = !1, zz && pz()
    }

    function pz() {
      for (const zz of [...mz]) zz(Kz);
      Wz.o.Yg("pointerLockUpdate", Kz)
    }
  },
  39808: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Nz,
      f: () => oz,
      g: () => uz,
      j: () => Uz,
      m: () => Oz,
      n: () => Kz,
      o: () => vz
    });
    let Fz = null,
      Wz = null,
      Xz = null;

    function Oz(zz) {
      Fz = zz
    }

    function oz() {
      return Fz
    }

    function vz(zz) {
      Wz = zz
    }

    function Uz() {
      return Wz
    }

    function Kz(zz) {
      Xz = zz
    }

    function uz() {
      return Xz
    }

    function Nz() {
      var zz, tz;
      return !0 === (null === (zz = Wz) || void 0 === zz || null === (tz = zz.currentViewer) || void 0 === tz ? void 0 : tz.inPlayback)
    }
  },
  4419: (zz, tz, sz) => {
    sz.d(tz, {
      C: () => Zz,
      E: () => Bz,
      I: () => Oz,
      L: () => oz,
      N: () => Iz,
      d: () => Jz,
      h: () => rz,
      i: () => Tz,
      k: () => Gz,
      n: () => Hz,
      q: () => xz,
      t: () => Pz,
      x: () => Yz,
      y: () => Cz,
      z: () => ez
    });
    var Fz = sz(4427);
    const Wz = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let Xz = Wz;

    function Oz(zz) {
      Xz = null !== zz && void 0 !== zz ? zz : Wz
    }

    function oz() {
      return Xz
    }
    const vz = new Set,
      Uz = new Set;
    let Kz = -1;
    const uz = new Set,
      Nz = new Set;
    let bz = 0,
      wz = 0;
    const Dz = new Set,
      gz = new Set;

    function Hz(zz) {
      return vz.add(zz), () => {
        vz.delete(zz)
      }
    }

    function Bz(zz, tz) {
      for (const Fz of vz) try {
        Fz(zz)
      } catch (sz) {
        tz(sz)
      }
    }

    function Pz(zz) {
      return Uz.add(zz), () => {
        Uz.delete(zz)
      }
    }

    function rz(zz, tz) {
      const sz = Kz < 0 ? 0 : zz - Kz;
      Kz = zz;
      for (const Wz of Uz) try {
        Wz(sz)
      } catch (Fz) {
        tz(Fz)
      }
    }

    function Yz(zz) {
      return uz.add(zz), () => {
        uz.delete(zz)
      }
    }

    function xz(zz) {
      return Nz.add(zz), () => {
        Nz.delete(zz)
      }
    }
    let mz = 0;

    function Jz(zz) {
      mz += zz
    }

    function Iz() {
      const zz = mz;
      return mz = 0, zz
    }

    function Cz(zz) {
      return Dz.add(zz), () => {
        Dz.delete(zz)
      }
    }

    function ez(zz) {
      return gz.add(zz), () => {
        gz.delete(zz)
      }
    }

    function Zz() {
      bz = 0, wz = 0, Kz = -1
    }

    function Gz(zz, tz) {
      if ("paced" === zz) return wz += tz, null;
      if ("drawn" !== zz && "skipped" !== zz) return null;
      const sz = tz + wz;
      return wz = 0, sz
    }

    function Tz(zz, tz, sz, Wz) {
      const Xz = (0, Fz.j)(tz),
        Oz = zz > 0 ? performance.now() : 0;
      for (let Fz = 0; Fz < zz; Fz++)
        for (const zz of Dz) try {
          zz()
        } catch (oz) {
          Wz(oz)
        }
      if (zz > 0 && Jz(performance.now() - Oz), null !== sz) {
        for (const zz of uz) try {
          zz(sz)
        } catch (oz) {
          Wz(oz)
        }
        bz += sz
      }
      if ("drawn" === tz) {
        const zz = bz;
        bz = 0;
        for (const tz of Nz) try {
          tz(zz)
        } catch (oz) {
          Wz(oz)
        }
      }
      for (const Fz of gz) try {
        Fz(zz, Xz)
      } catch (oz) {
        Wz(oz)
      }
    }
  },
  40005: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Fz
    });
    const Fz = {
      stop: () => Fz,
      fade: () => Fz,
      rate: () => Fz,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => Fz,
      setPannerAttr: () => Fz,
      setPosition: () => Fz
    }
  },
  4438: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => vz,
      i: () => Xz,
      k: () => oz
    });
    var Fz = sz(2273),
      Wz = sz(4446);

    function Xz(zz) {
      let {
        action: tz,
        flags: sz
      } = zz;
      return "mid-fire" === tz && 0 !== (sz & Fz.b.AltLeftClick)
    }
    const Oz = new Set;

    function oz(zz) {
      return Oz.add(zz), () => {
        Oz.delete(zz)
      }
    }

    function vz(zz) {
      const tz = Wz.b[255 & zz];
      if (void 0 === tz) return;
      const sz = zz >>> 8 & 255,
        Xz = {
          action: tz,
          down: 0 !== (sz & Fz.b.Down),
          flags: sz,
          press: zz >>> 16
        };
      for (const Fz of Oz) Fz(Xz)
    }
  },
  4446: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Wz,
      f: () => Xz,
      j: () => Oz,
      n: () => Fz,
      q: () => oz
    });
    const Fz = {
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
      Wz = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      Xz = {
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
      Oz = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      oz = [16]
  },
  40080: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Kz,
      g: () => Uz,
      h: () => vz
    });
    var Fz = sz(4436),
      Wz = sz(2273),
      Xz = sz(4450);
    let Oz = !1,
      oz = !1;

    function vz(zz) {
      Oz = !0;
      try {
        zz()
      } finally {
        Oz = !1
      }
    }

    function Uz(zz, tz) {
      if (Oz) return !1;
      switch (zz) {
        case Fz.G.MouseDown:
        case Fz.G.MouseUp:
        case Fz.G.TouchStart:
        case Fz.G.TouchEnd:
        case Fz.G.TouchCancel:
        case Fz.G.TouchButton:
          return !0;
        case Fz.G.KeyDown:
        case Fz.G.KeyUp:
          return 0 === (tz & Wz.f.Repeat) && !(0, Xz.i)(document.activeElement);
        default:
          return !1
      }
    }

    function Kz(zz) {
      oz || (oz = !0, queueMicrotask((() => {
        oz = !1, zz()
      })))
    }
  },
  4450: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => oz,
      i: () => Oz,
      k: () => Uz
    });
    var Fz = sz(2273),
      Wz = sz(2277);
    const Xz = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function Oz(zz) {
      return zz instanceof HTMLElement && (!!(zz.isContentEditable || zz instanceof HTMLTextAreaElement || zz instanceof HTMLSelectElement) || zz instanceof HTMLInputElement && !Xz.has(zz.type))
    }

    function oz(zz) {
      let tz = null;
      const sz = sz => {
          const Wz = Oz(sz);
          Wz !== tz && (tz = Wz, zz(Fz.j.UiCapture, Fz.x.Keyboard, 0, 0, Wz ? Fz.x.Keyboard : 0))
        },
        Wz = zz => {
          sz(zz.target)
        },
        Xz = zz => {
          sz(zz.relatedTarget)
        },
        oz = () => {
          sz(document.activeElement)
        },
        vz = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", Wz, vz), document.addEventListener("focusout", Xz, vz), document.addEventListener("keydown", oz, vz), sz(document.activeElement), () => {
        document.removeEventListener("focusin", Wz, vz), document.removeEventListener("focusout", Xz, vz), document.removeEventListener("keydown", oz, vz)
      }
    }
    const vz = new Map;

    function Uz(zz, tz) {
      var sz;
      let Fz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      vz.set(Fz, (null !== (sz = vz.get(Fz)) && void 0 !== sz ? sz : 0) & ~zz | tz & zz);
      let Xz = 0;
      for (const Wz of vz.values()) Xz |= Wz;
      return (0, Wz.z)(zz, Xz & zz)
    }
  },
  40142: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Fz
    });
    const Fz = 2e3
  },
  39998: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Pz,
      d: () => Uz,
      e: () => gz,
      g: () => Bz,
      h: () => Hz,
      k: () => rz
    });
    var Fz = sz(30),
      Wz = sz(34),
      Xz = sz(2588),
      Oz = sz(1279),
      oz = sz(8757),
      vz = sz(2596);

    function Uz() {
      var zz;
      const tz = (sz = Fz.b.get("clientEscMenuOptions"), Wz = (0, Xz.E)(), {
        sampleCount: sz.antiAliasing ? 4 : 1,
        n: (0, Xz.w)(sz.pixelScale, Wz),
        pixelated: (0, Xz.t)(sz.pixelSmoothing)
      });
      var sz, Wz;
      return tz.sampleCount > 1 && (0, oz.d)() && (tz.sampleCount = 1), tz.n = null !== (zz = (0, oz.p)()) && void 0 !== zz ? zz : tz.n, tz
    }
    let Kz = null,
      uz = null;
    const Nz = new Set;
    let bz = null;

    function wz() {
      for (const zz of Nz) zz()
    }

    function Dz() {
      if (null === Kz) {
        const zz = document.createElement("div");
        zz.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", zz.setAttribute("aria-hidden", "true"), document.body.append(zz), uz = zz, Kz = new Xz.d(zz, wz)
      }
      return Kz
    }

    function gz(zz) {
      const tz = (0, Xz.m)(),
        [sz, Fz] = Dz().size(tz);
      return (0, Xz.j)(sz, Fz, tz, zz.n)
    }

    function Hz(zz) {
      var tz, sz, Fz, Wz;
      const oz = (0, Xz.m)(),
        [vz, Kz] = Dz().size(oz);
      if (vz <= 0 || Kz <= 0) return null;
      const uz = (0, Xz.j)(vz, Kz, oz, Uz().n);
      return (0, Xz.f)(zz, uz), zz.style.left = `${null!==(tz=null===(sz=bz)||void 0===sz?void 0:sz.rect.left)&&void 0!==tz?tz:0}px`, zz.style.top = `${null!==(Fz=null===(Wz=bz)||void 0===Wz?void 0:Wz.rect.top)&&void 0!==Fz?Fz:0}px`, (0, Oz.I)(zz.style, bz), uz
    }

    function Bz(zz) {
      bz = zz, Dz(), (0, Oz.C)(uz.style, zz, ""), wz()
    }

    function Pz(zz, tz) {
      zz.style.imageRendering = (0, Xz.F)(tz.pixelated)
    }

    function rz(zz, tz) {
      const sz = (0, Wz.q)("appManagerUpdated|clientEscMenuOptions", (() => {
          Pz(zz, Uz()), tz()
        })),
        Fz = (0, oz.A)(tz),
        Xz = (0, vz.n)(tz);
      return Dz(), Nz.add(tz), () => {
        sz(), Fz(), Xz(), Nz.delete(tz)
      }
    }
  },
  40148: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Oz,
      f: () => Xz,
      j: () => Wz
    });
    let Fz = null;

    function Wz(zz) {
      Fz = zz
    }

    function Xz(zz) {
      Fz === zz && (Fz = null)
    }

    function Oz() {
      var zz;
      null === (zz = Fz) || void 0 === zz || zz()
    }
  },
  40108: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Wz,
      e: () => Uz,
      h: () => Xz,
      j: () => uz,
      l: () => Kz,
      m: () => Nz
    });
    var Fz = sz(3378);
    class Wz extends Error {
      constructor(zz, tz, sz) {
        super(`${"fetch"===zz?"fetching":"decoding"} ${tz} failed`, sz), this.stage = zz, this.source = tz, this.name = "ShellImageError"
      }
    }
    async function Xz(zz) {
      let tz, sz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Fz.G,
        Xz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      if ("string" === typeof zz) try {
        tz = await sz(zz)
      } catch (Oz) {
        throw new Wz("fetch", zz, {
          cause: Oz
        })
      } else tz = zz;
      try {
        const zz = new Blob([tz.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(zz, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: Xz
        })
      } catch (Oz) {
        throw new Wz("decode", "string" === typeof zz ? zz : `${tz.byteLength} bytes`, {
          cause: Oz
        })
      }
    }
    let Oz = null;
    const oz = new Map;
    let vz = 1;

    function Uz(zz) {
      if (Oz = zz, null !== zz) {
        for (const [tz, sz] of oz) zz.Isz(tz, sz);
        oz.clear()
      }
    }

    function Kz(zz) {
      const tz = vz++;
      return Oz ? Oz.Isz(tz, zz) : oz.set(tz, zz), tz
    }
    async function uz(zz, tz, sz) {
      const Fz = await Xz(zz, tz, sz);
      return {
        id: Kz(Fz),
        width: Fz.width,
        height: Fz.height
      }
    }

    function Nz(zz) {
      var tz;
      const sz = oz.get(zz);
      if (sz) return sz.close(), void oz.delete(zz);
      null === (tz = Oz) || void 0 === tz || tz.Csz(zz)
    }
  },
  40021: (zz, tz, sz) => {
    function Fz(zz, tz) {
      if (!Object.prototype.hasOwnProperty.call(zz, tz)) throw new TypeError("attempted to use private field on non-instance");
      return zz
    }
    sz.d(tz, {
      c: () => Fz
    })
  },
  40026: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Wz
    });
    var Fz = 0;

    function Wz(zz) {
      return "__private_" + Fz++ + "_" + zz
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);