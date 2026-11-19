export const id = 85;
export const ids = [85];
export const modules = {
  39881: (zz, uz, bz) => {
    bz.d(uz, {
      A: () => az,
      C: () => Bz,
      D: () => qz,
      E: () => Lz,
      H: () => mz,
      J: () => Tz,
      N: () => Qz,
      Q: () => Dz,
      S: () => Gz,
      e: () => Wz,
      h: () => Uz,
      k: () => Jz,
      o: () => ez,
      r: () => Az,
      s: () => xz,
      v: () => hz,
      w: () => Pz,
      x: () => Vz
    });
    var Ez = bz(1362),
      nz = bz(22),
      iz = bz(1269),
      lz = bz(2289),
      Mz = bz(4575),
      tz = bz(4544);
    let Hz, Oz = !1,
      pz = !1,
      dz = !1,
      Fz = !1;
    const Zz = 1300,
      Rz = 3e3;
    let Kz = 0,
      wz = !1,
      Xz = !1,
      fz = 0;
    const sz = 2;
    let rz = !1,
      oz = !1;
    const Nz = new Set,
      vz = new Set;

    function xz() {
      return Oz
    }

    function Jz() {
      return Xz
    }

    function Az() {
      return oz
    }

    function Tz() {
      return (0, iz.q)() && !oz
    }

    function Lz(zz) {
      let uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (zz !== oz) {
        oz = zz;
        for (const zz of [...vz]) zz(oz);
        uz && Dz()
      }
    }

    function Pz(zz) {
      return vz.add(zz), () => {
        vz.delete(zz)
      }
    }

    function Gz() {
      (0, Mz.i)(lz.z.Menu, (0, iz.q)() ? 0 : lz.z.Menu)
    }

    function az() {
      Xz = !1, fz = 0, Gz(), Dz()
    }

    function Vz(zz) {
      return Nz.add(zz), () => {
        Nz.delete(zz)
      }
    }

    function mz(zz) {
      pz = !1, zz !== Oz && (Oz = zz, Fz = !1, clearTimeout(Hz), dz = !Oz && rz, Oz ? (wz = !1, Xz = !1, fz = 0) : Tz() && !rz && (Xz = !0), rz = !1, Oz && !Tz() && Iz(), Cz(), dz && Dz())
    }

    function qz(zz) {
      zz !== wz && (wz = zz, zz || Dz())
    }

    function hz() {
      pz = !1, Fz || !0 !== Sz() || (Fz = !0, clearTimeout(Hz), Hz = setTimeout(cz, Zz))
    }

    function Uz() {
      return (!pz || performance.now() - Kz > Rz) && (pz = (0, tz.M)().lockPointer(), Kz = performance.now()), pz
    }

    function cz() {
      gz() && yz() && Uz()
    }

    function gz() {
      return Tz() && !Oz && !wz && !(0, Ez.f)()
    }

    function Sz() {
      var zz;
      return "undefined" === typeof navigator || null === (zz = navigator.userActivation) || void 0 === zz ? void 0 : zz.isActive
    }

    function yz() {
      return dz && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== Sz()
    }

    function Dz() {
      Tz() ? gz() && !Xz && yz() && Uz() : Oz && !rz && Iz()
    }

    function Qz() {
      Xz ? navigator.vendor.startsWith("Apple") ? jz() : fz = sz : Dz()
    }

    function Wz() {
      fz > 0 && 0 === --fz && jz()
    }

    function ez() {
      fz = 0
    }

    function jz() {
      gz() && !0 === Sz() && Uz()
    }

    function Iz() {
      rz = !0, (0, tz.M)().unlockPointer()
    }

    function Bz() {
      pz = !1, dz = !1, Fz = !1, clearTimeout(Hz), wz = !1, Xz = !1, fz = 0, rz = !1;
      const zz = Oz;
      Oz = !1, zz && Cz()
    }

    function Cz() {
      for (const zz of [...Nz]) zz(Oz);
      nz.k.sK("pointerLockUpdate", Oz)
    }
  },
  39848: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => dz,
      e: () => Mz,
      g: () => pz,
      h: () => Hz,
      l: () => lz,
      m: () => Oz,
      o: () => tz
    });
    let Ez = null,
      nz = null,
      iz = null;

    function lz(zz) {
      Ez = zz
    }

    function Mz() {
      return Ez
    }

    function tz(zz) {
      nz = zz
    }

    function Hz() {
      return nz
    }

    function Oz(zz) {
      iz = zz
    }

    function pz() {
      return iz
    }

    function dz() {
      var zz, uz;
      return !0 === (null === (zz = nz) || void 0 === zz || null === (uz = zz.currentViewer) || void 0 === uz ? void 0 : uz.inPlayback)
    }
  },
  4544: (zz, uz, bz) => {
    bz.d(uz, {
      A: () => Jz,
      C: () => Az,
      F: () => Tz,
      H: () => Xz,
      L: () => lz,
      M: () => Mz,
      O: () => xz,
      b: () => vz,
      c: () => sz,
      g: () => Pz,
      j: () => Lz,
      l: () => wz,
      o: () => oz,
      s: () => fz,
      w: () => rz
    });
    var Ez = bz(4552);
    const nz = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let iz = nz;

    function lz(zz) {
      iz = null !== zz && void 0 !== zz ? zz : nz
    }

    function Mz() {
      return iz
    }
    const tz = new Set,
      Hz = new Set;
    let Oz = -1;
    const pz = new Set,
      dz = new Set;
    let Fz = 0,
      Zz = 0;
    const Rz = new Set,
      Kz = new Set;

    function wz(zz) {
      return tz.add(zz), () => {
        tz.delete(zz)
      }
    }

    function Xz(zz, uz) {
      for (const Ez of tz) try {
        Ez(zz)
      } catch (bz) {
        uz(bz)
      }
    }

    function fz(zz) {
      return Hz.add(zz), () => {
        Hz.delete(zz)
      }
    }

    function sz(zz, uz) {
      const bz = Oz < 0 ? 0 : zz - Oz;
      Oz = zz;
      for (const nz of Hz) try {
        nz(bz)
      } catch (Ez) {
        uz(Ez)
      }
    }

    function rz(zz) {
      return pz.add(zz), () => {
        pz.delete(zz)
      }
    }

    function oz(zz) {
      return dz.add(zz), () => {
        dz.delete(zz)
      }
    }
    let Nz = 0;

    function vz(zz) {
      Nz += zz
    }

    function xz() {
      const zz = Nz;
      return Nz = 0, zz
    }

    function Jz(zz) {
      return Rz.add(zz), () => {
        Rz.delete(zz)
      }
    }

    function Az(zz) {
      return Kz.add(zz), () => {
        Kz.delete(zz)
      }
    }

    function Tz() {
      Fz = 0, Zz = 0, Oz = -1
    }

    function Lz(zz, uz) {
      if ("paced" === zz) return Zz += uz, null;
      if ("drawn" !== zz && "skipped" !== zz) return null;
      const bz = uz + Zz;
      return Zz = 0, bz
    }

    function Pz(zz, uz, bz, nz) {
      const iz = (0, Ez.l)(uz),
        lz = zz > 0 ? performance.now() : 0;
      for (let Ez = 0; Ez < zz; Ez++)
        for (const zz of Rz) try {
          zz()
        } catch (Mz) {
          nz(Mz)
        }
      if (zz > 0 && vz(performance.now() - lz), null !== bz) {
        for (const zz of pz) try {
          zz(bz)
        } catch (Mz) {
          nz(Mz)
        }
        Fz += bz
      }
      if ("drawn" === uz) {
        const zz = Fz;
        Fz = 0;
        for (const uz of dz) try {
          uz(zz)
        } catch (Mz) {
          nz(Mz)
        }
      }
      for (const Ez of Kz) try {
        Ez(zz, iz)
      } catch (Mz) {
        nz(Mz)
      }
    }
  },
  40106: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Ez
    });
    const Ez = {
      stop: () => Ez,
      fade: () => Ez,
      rate: () => Ez,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => Ez,
      setPannerAttr: () => Ez,
      setPosition: () => Ez
    }
  },
  4567: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => tz,
      c: () => iz,
      g: () => Mz
    });
    var Ez = bz(2289),
      nz = bz(4571);

    function iz(zz) {
      let {
        action: uz,
        flags: bz
      } = zz;
      return "mid-fire" === uz && 0 !== (bz & Ez.b.AltLeftClick)
    }
    const lz = new Set;

    function Mz(zz) {
      return lz.add(zz), () => {
        lz.delete(zz)
      }
    }

    function tz(zz) {
      const uz = nz.d[255 & zz];
      if (void 0 === uz) return;
      const bz = zz >>> 8 & 255,
        iz = {
          action: uz,
          down: 0 !== (bz & Ez.b.Down),
          flags: bz,
          press: zz >>> 16
        };
      for (const Ez of lz) Ez(iz)
    }
  },
  4571: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => nz,
      f: () => iz,
      i: () => lz,
      m: () => Ez,
      n: () => Mz
    });
    const Ez = {
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
      nz = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      iz = {
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
      lz = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      Mz = [16]
  },
  40198: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Oz,
      f: () => Hz,
      h: () => tz
    });
    var Ez = bz(4564),
      nz = bz(2289),
      iz = bz(4575);
    let lz = !1,
      Mz = !1;

    function tz(zz) {
      lz = !0;
      try {
        zz()
      } finally {
        lz = !1
      }
    }

    function Hz(zz, uz) {
      if (lz) return !1;
      switch (zz) {
        case Ez.E.MouseDown:
        case Ez.E.MouseUp:
        case Ez.E.TouchStart:
        case Ez.E.TouchEnd:
        case Ez.E.TouchCancel:
        case Ez.E.TouchButton:
          return !0;
        case Ez.E.KeyDown:
        case Ez.E.KeyUp:
          return 0 === (uz & nz.e.Repeat) && !(0, iz.g)(document.activeElement);
        default:
          return !1
      }
    }

    function Oz(zz) {
      Mz || (Mz = !0, queueMicrotask((() => {
        Mz = !1, zz()
      })))
    }
  },
  4575: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Mz,
      g: () => lz,
      i: () => Hz
    });
    var Ez = bz(2289),
      nz = bz(2294);
    const iz = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function lz(zz) {
      return zz instanceof HTMLElement && (!!(zz.isContentEditable || zz instanceof HTMLTextAreaElement || zz instanceof HTMLSelectElement) || zz instanceof HTMLInputElement && !iz.has(zz.type))
    }

    function Mz(zz) {
      let uz = null;
      const bz = bz => {
          const nz = lz(bz);
          nz !== uz && (uz = nz, zz(Ez.f.UiCapture, Ez.z.Keyboard, 0, 0, nz ? Ez.z.Keyboard : 0))
        },
        nz = zz => {
          bz(zz.target)
        },
        iz = zz => {
          bz(zz.relatedTarget)
        },
        Mz = () => {
          bz(document.activeElement)
        },
        tz = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", nz, tz), document.addEventListener("focusout", iz, tz), document.addEventListener("keydown", Mz, tz), bz(document.activeElement), () => {
        document.removeEventListener("focusin", nz, tz), document.removeEventListener("focusout", iz, tz), document.removeEventListener("keydown", Mz, tz)
      }
    }
    const tz = new Map;

    function Hz(zz, uz) {
      var bz;
      let Ez = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      tz.set(Ez, (null !== (bz = tz.get(Ez)) && void 0 !== bz ? bz : 0) & ~zz | uz & zz);
      let iz = 0;
      for (const nz of tz.values()) iz |= nz;
      return (0, nz.x)(zz, iz & zz)
    }
  },
  40243: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Ez
    });
    const Ez = 2e3
  },
  40099: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => fz,
      f: () => Hz,
      i: () => Kz,
      l: () => Xz,
      p: () => wz,
      t: () => sz
    });
    var Ez = bz(20),
      nz = bz(22),
      iz = bz(2646),
      lz = bz(1273),
      Mz = bz(8911),
      tz = bz(2648);

    function Hz() {
      var zz;
      const uz = (bz = Ez.e.get("clientEscMenuOptions"), nz = (0, iz.C)(), {
        sampleCount: bz.antiAliasing ? 4 : 1,
        n: (0, iz.s)(bz.pixelScale, nz),
        pixelated: (0, iz.p)(bz.pixelSmoothing)
      });
      var bz, nz;
      return uz.sampleCount > 1 && (0, Mz.c)() && (uz.sampleCount = 1), uz.n = null !== (zz = (0, Mz.n)()) && void 0 !== zz ? zz : uz.n, uz
    }
    let Oz = null,
      pz = null;
    const dz = new Set;
    let Fz = null;

    function Zz() {
      for (const zz of dz) zz()
    }

    function Rz() {
      if (null === Oz) {
        const zz = document.createElement("div");
        zz.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", zz.setAttribute("aria-hidden", "true"), document.body.append(zz), pz = zz, Oz = new iz.d(zz, Zz)
      }
      return Oz
    }

    function Kz(zz) {
      const uz = (0, iz.l)(),
        [bz, Ez] = Rz().size(uz);
      return (0, iz.h)(bz, Ez, uz, zz.n)
    }

    function wz(zz) {
      var uz, bz, Ez, nz;
      const Mz = (0, iz.l)(),
        [tz, Oz] = Rz().size(Mz);
      if (tz <= 0 || Oz <= 0) return null;
      const pz = (0, iz.h)(tz, Oz, Mz, Hz().n);
      return (0, iz.g)(zz, pz), zz.style.left = `${null!==(uz=null===(bz=Fz)||void 0===bz?void 0:bz.rect.left)&&void 0!==uz?uz:0}px`, zz.style.top = `${null!==(Ez=null===(nz=Fz)||void 0===nz?void 0:nz.rect.top)&&void 0!==Ez?Ez:0}px`, (0, lz.J)(zz.style, Fz), pz
    }

    function Xz(zz) {
      Fz = zz, Rz(), (0, lz.C)(pz.style, zz, ""), Zz()
    }

    function fz(zz, uz) {
      zz.style.imageRendering = (0, iz.E)(uz.pixelated)
    }

    function sz(zz, uz) {
      const bz = (0, nz.o)("appManagerUpdated|clientEscMenuOptions", (() => {
          fz(zz, Hz()), uz()
        })),
        Ez = (0, Mz.y)(uz),
        iz = (0, tz.l)(uz);
      return Rz(), dz.add(uz), () => {
        bz(), Ez(), iz(), dz.delete(uz)
      }
    }
  },
  40248: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => lz,
      g: () => iz,
      k: () => nz
    });
    let Ez = null;

    function nz(zz) {
      Ez = zz
    }

    function iz(zz) {
      Ez === zz && (Ez = null)
    }

    function lz() {
      var zz;
      null === (zz = Ez) || void 0 === zz || zz()
    }
  },
  40213: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => nz,
      e: () => Hz,
      g: () => iz,
      k: () => pz,
      l: () => Oz,
      m: () => dz
    });
    var Ez = bz(3475);
    class nz extends Error {
      constructor(zz, uz, bz) {
        super(`${"fetch"===zz?"fetching":"decoding"} ${uz} failed`, bz), this.stage = zz, this.source = uz, this.name = "ShellImageError"
      }
    }
    async function iz(zz) {
      let uz, bz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ez.z,
        iz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      if ("string" === typeof zz) try {
        uz = await bz(zz)
      } catch (lz) {
        throw new nz("fetch", zz, {
          cause: lz
        })
      } else uz = zz;
      try {
        const zz = new Blob([uz.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(zz, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: iz
        })
      } catch (lz) {
        throw new nz("decode", "string" === typeof zz ? zz : `${uz.byteLength} bytes`, {
          cause: lz
        })
      }
    }
    let lz = null;
    const Mz = new Map;
    let tz = 1;

    function Hz(zz) {
      if (lz = zz, null !== zz) {
        for (const [uz, bz] of Mz) zz.Obz(uz, bz);
        Mz.clear()
      }
    }

    function Oz(zz) {
      const uz = tz++;
      return lz ? lz.Obz(uz, zz) : Mz.set(uz, zz), uz
    }
    async function pz(zz, uz, bz) {
      const Ez = await iz(zz, uz, bz);
      return {
        id: Oz(Ez),
        width: Ez.width,
        height: Ez.height
      }
    }

    function dz(zz) {
      var uz;
      const bz = Mz.get(zz);
      if (bz) return bz.close(), void Mz.delete(zz);
      null === (uz = lz) || void 0 === uz || uz.pbz(zz)
    }
  },
  40126: (zz, uz, bz) => {
    function Ez(zz, uz) {
      if (!Object.prototype.hasOwnProperty.call(zz, uz)) throw new TypeError("attempted to use private field on non-instance");
      return zz
    }
    bz.d(uz, {
      b: () => Ez
    })
  },
  40128: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => nz
    });
    var Ez = 0;

    function nz(zz) {
      return "__private_" + Ez++ + "_" + zz
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);