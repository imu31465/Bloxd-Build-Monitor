export const id = 88;
export const ids = [88];
export const modules = {
  41079: (pp, ip, cp) => {
    cp.d(ip, {
      $: () => lp,
      C: () => Jp,
      G: () => Qp,
      H: () => sp,
      I: () => Np,
      K: () => Ep,
      O: () => Bp,
      S: () => Cp,
      T: () => gp,
      X: () => Fp,
      d: () => Gp,
      f: () => fp,
      h: () => qp,
      j: () => rp,
      n: () => Mp,
      r: () => Rp,
      u: () => Tp,
      y: () => Xp
    });
    var Op = cp(1419),
      op = cp(34),
      Ip = cp(1308),
      Sp = cp(2457),
      xp = cp(4927),
      Lp = cp(4886);
    let Yp, Dp = !1,
      Ap = !1,
      Pp = !1,
      Wp = !1;
    const yp = 1300,
      Up = 3e3;
    let wp = 0,
      vp = !1,
      tp = !1,
      Hp = 0;
    const dp = 2;
    let ep = !1,
      jp = !1;
    const kp = new Set,
      mp = new Set;

    function Rp() {
      return Dp
    }

    function qp() {
      return tp
    }

    function Mp() {
      return jp
    }

    function Cp() {
      return (0, Ip.t)() && !jp
    }

    function Ep(pp) {
      let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (pp !== jp) {
        jp = pp;
        for (const pp of [...mp]) pp(jp);
        ip && Fp()
      }
    }

    function Xp(pp) {
      return mp.add(pp), () => {
        mp.delete(pp)
      }
    }

    function lp() {
      (0, xp.g)(Sp.C.Menu, (0, Ip.t)() ? 0 : Sp.C.Menu)
    }

    function Qp() {
      tp = !1, Hp = 0, lp(), Fp()
    }

    function Jp(pp) {
      return kp.add(pp), () => {
        kp.delete(pp)
      }
    }

    function Bp(pp) {
      Ap = !1, pp !== Dp && (Dp = pp, Wp = !1, clearTimeout(Yp), Pp = !Dp && ep, Dp ? (vp = !1, tp = !1, Hp = 0) : Cp() && !ep && (tp = !0), ep = !1, Dp && !Cp() && zp(), Kp(), Pp && Fp())
    }

    function Np(pp) {
      pp !== vp && (vp = pp, pp || Fp())
    }

    function Tp() {
      Ap = !1, Wp || !0 !== ap() || (Wp = !0, clearTimeout(Yp), Yp = setTimeout(bp, yp))
    }

    function fp() {
      return (!Ap || performance.now() - wp > Up) && (Ap = (0, Lp.H)().lockPointer(), wp = performance.now()), Ap
    }

    function bp() {
      hp() && np() && fp()
    }

    function hp() {
      return Cp() && !Dp && !vp && !(0, Op.h)()
    }

    function ap() {
      var pp;
      return "undefined" === typeof navigator || null === (pp = navigator.userActivation) || void 0 === pp ? void 0 : pp.isActive
    }

    function np() {
      return Pp && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== ap()
    }

    function Fp() {
      Cp() ? hp() && !tp && np() && fp() : Dp && !ep && zp()
    }

    function gp() {
      tp ? navigator.vendor.startsWith("Apple") ? Zp() : Hp = dp : Fp()
    }

    function Gp() {
      Hp > 0 && 0 === --Hp && Zp()
    }

    function rp() {
      Hp = 0
    }

    function Zp() {
      hp() && !0 === ap() && fp()
    }

    function zp() {
      ep = !0, (0, Lp.H)().unlockPointer()
    }

    function sp() {
      Ap = !1, Pp = !1, Wp = !1, clearTimeout(Yp), vp = !1, tp = !1, Hp = 0, ep = !1;
      const pp = Dp;
      Dp = !1, pp && Kp()
    }

    function Kp() {
      for (const pp of [...kp]) pp(Dp);
      op.m.GA("pointerLockUpdate", Dp)
    }
  },
  40879: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Pp,
      e: () => xp,
      f: () => Ap,
      i: () => Yp,
      k: () => Sp,
      o: () => Dp,
      s: () => Lp
    });
    let Op = null,
      op = null,
      Ip = null;

    function Sp(pp) {
      Op = pp
    }

    function xp() {
      return Op
    }

    function Lp(pp) {
      op = pp
    }

    function Yp() {
      return op
    }

    function Dp(pp) {
      Ip = pp
    }

    function Ap() {
      return Ip
    }

    function Pp() {
      var pp, ip;
      return !0 === (null === (pp = op) || void 0 === pp || null === (ip = pp.currentViewer) || void 0 === ip ? void 0 : ip.inPlayback)
    }
  },
  4886: (pp, ip, cp) => {
    cp.d(ip, {
      B: () => tp,
      D: () => Sp,
      H: () => xp,
      K: () => Rp,
      b: () => mp,
      c: () => dp,
      f: () => Xp,
      h: () => Ep,
      j: () => vp,
      m: () => jp,
      n: () => Hp,
      p: () => ep,
      s: () => qp,
      u: () => Mp,
      y: () => Cp
    });
    var Op = cp(4895);
    const op = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let Ip = op;

    function Sp(pp) {
      Ip = null !== pp && void 0 !== pp ? pp : op
    }

    function xp() {
      return Ip
    }
    const Lp = new Set,
      Yp = new Set;
    let Dp = -1;
    const Ap = new Set,
      Pp = new Set;
    let Wp = 0,
      yp = 0;
    const Up = new Set,
      wp = new Set;

    function vp(pp) {
      return Lp.add(pp), () => {
        Lp.delete(pp)
      }
    }

    function tp(pp, ip) {
      for (const Op of Lp) try {
        Op(pp)
      } catch (cp) {
        ip(cp)
      }
    }

    function Hp(pp) {
      return Yp.add(pp), () => {
        Yp.delete(pp)
      }
    }

    function dp(pp, ip) {
      const cp = Dp < 0 ? 0 : pp - Dp;
      Dp = pp;
      for (const op of Yp) try {
        op(cp)
      } catch (Op) {
        ip(Op)
      }
    }

    function ep(pp) {
      return Ap.add(pp), () => {
        Ap.delete(pp)
      }
    }

    function jp(pp) {
      return Pp.add(pp), () => {
        Pp.delete(pp)
      }
    }
    let kp = 0;

    function mp(pp) {
      kp += pp
    }

    function Rp() {
      const pp = kp;
      return kp = 0, pp
    }

    function qp(pp) {
      return Up.add(pp), () => {
        Up.delete(pp)
      }
    }

    function Mp(pp) {
      return wp.add(pp), () => {
        wp.delete(pp)
      }
    }

    function Cp() {
      Wp = 0, yp = 0, Dp = -1
    }

    function Ep(pp, ip) {
      if ("paced" === pp) return yp += ip, null;
      if ("drawn" !== pp && "skipped" !== pp) return null;
      const cp = ip + yp;
      return yp = 0, cp
    }

    function Xp(pp, ip, cp, op) {
      const Ip = (0, Op.j)(ip),
        Sp = pp > 0 ? performance.now() : 0;
      for (let Op = 0; Op < pp; Op++)
        for (const pp of Up) try {
          pp()
        } catch (xp) {
          op(xp)
        }
      if (pp > 0 && mp(performance.now() - Sp), null !== cp) {
        for (const pp of Ap) try {
          pp(cp)
        } catch (xp) {
          op(xp)
        }
        Wp += cp
      }
      if ("drawn" === ip) {
        const pp = Wp;
        Wp = 0;
        for (const ip of Pp) try {
          ip(pp)
        } catch (xp) {
          op(xp)
        }
      }
      for (const Op of wp) try {
        Op(pp, Ip)
      } catch (xp) {
        op(xp)
      }
    }
  },
  41091: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Op
    });
    const Op = {
      stop: () => Op,
      fade: () => Op,
      rate: () => Op,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => Op,
      setPannerAttr: () => Op,
      setPosition: () => Op
    }
  },
  4919: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Lp,
      e: () => Ip,
      f: () => xp
    });
    var Op = cp(2457),
      op = cp(4921);

    function Ip(pp) {
      let {
        action: ip,
        flags: cp
      } = pp;
      return "mid-fire" === ip && 0 !== (cp & Op.c.AltLeftClick)
    }
    const Sp = new Set;

    function xp(pp) {
      return Sp.add(pp), () => {
        Sp.delete(pp)
      }
    }

    function Lp(pp) {
      const ip = op.c[255 & pp];
      if (void 0 === ip) return;
      const cp = pp >>> 8 & 255,
        Ip = {
          action: ip,
          down: 0 !== (cp & Op.c.Down),
          flags: cp,
          press: pp >>> 16
        };
      for (const Op of Sp) Op(Ip)
    }
  },
  4921: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => op,
      e: () => Ip,
      i: () => Sp,
      j: () => Op,
      n: () => xp
    });
    const Op = {
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
      op = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      Ip = {
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
      Sp = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      xp = [16]
  },
  41120: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Dp,
      f: () => Yp,
      g: () => Lp
    });
    var Op = cp(4911),
      op = cp(2457),
      Ip = cp(4927);
    let Sp = !1,
      xp = !1;

    function Lp(pp) {
      Sp = !0;
      try {
        pp()
      } finally {
        Sp = !1
      }
    }

    function Yp(pp, ip) {
      if (Sp) return !1;
      switch (pp) {
        case Op.z.MouseDown:
        case Op.z.MouseUp:
        case Op.z.TouchStart:
        case Op.z.TouchEnd:
        case Op.z.TouchCancel:
        case Op.z.TouchButton:
          return !0;
        case Op.z.KeyDown:
        case Op.z.KeyUp:
          return 0 === (ip & op.g.Repeat) && !(0, Ip.e)(document.activeElement);
        default:
          return !1
      }
    }

    function Dp(pp) {
      xp || (xp = !0, queueMicrotask((() => {
        xp = !1, pp()
      })))
    }
  },
  4927: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => xp,
      e: () => Sp,
      g: () => Yp
    });
    var Op = cp(2457),
      op = cp(2463);
    const Ip = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function Sp(pp) {
      return pp instanceof HTMLElement && (!!(pp.isContentEditable || pp instanceof HTMLTextAreaElement || pp instanceof HTMLSelectElement) || pp instanceof HTMLInputElement && !Ip.has(pp.type))
    }

    function xp(pp) {
      let ip = null;
      const cp = cp => {
          const op = Sp(cp);
          op !== ip && (ip = op, pp(Op.i.UiCapture, Op.C.Keyboard, 0, 0, op ? Op.C.Keyboard : 0))
        },
        op = pp => {
          cp(pp.target)
        },
        Ip = pp => {
          cp(pp.relatedTarget)
        },
        xp = () => {
          cp(document.activeElement)
        },
        Lp = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", op, Lp), document.addEventListener("focusout", Ip, Lp), document.addEventListener("keydown", xp, Lp), cp(document.activeElement), () => {
        document.removeEventListener("focusin", op, Lp), document.removeEventListener("focusout", Ip, Lp), document.removeEventListener("keydown", xp, Lp)
      }
    }
    const Lp = new Map;

    function Yp(pp, ip) {
      var cp;
      let Op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      Lp.set(Op, (null !== (cp = Lp.get(Op)) && void 0 !== cp ? cp : 0) & ~pp | ip & pp);
      let Ip = 0;
      for (const op of Lp.values()) Ip |= op;
      return (0, op.E)(pp, Ip & pp)
    }
  },
  41153: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Dp,
      f: () => Lp,
      i: () => xp,
      j: () => Yp
    });
    var Op = cp(1971);
    let op = null,
      Ip = 0;
    const Sp = new Set;

    function xp() {
      return op
    }

    function Lp() {
      return Ip
    }

    function Yp(pp) {
      op = pp, Ip++, (0, Op.b)();
      for (const ip of Sp) ip()
    }

    function Dp(pp) {
      Sp.add(pp)
    }
  },
  41200: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Op
    });
    const Op = 2e3
  },
  41087: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => jp,
      g: () => Pp,
      j: () => Hp,
      n: () => ep,
      r: () => dp,
      t: () => kp
    });
    var Op = cp(176),
      op = cp(25),
      Ip = cp(34),
      Sp = cp(2993),
      xp = cp(1317),
      Lp = cp(34364),
      Yp = cp(298),
      Dp = cp(104),
      Ap = cp(172);

    function Pp() {
      var pp;
      const ip = (0, Sp.C)(),
        cp = function(pp, ip) {
          return {
            sampleCount: pp.antiAliasing ? 4 : 1,
            n: (0, Sp.x)(pp.pixelScale, ip),
            pixelated: (0, Sp.u)(pp.pixelSmoothing)
          }
        }(op.c.get("clientEscMenuOptions"), ip);
      return cp.sampleCount > 1 && (0, Lp.d)() && (cp.sampleCount = 1), cp.n = null !== (pp = (0, Lp.r)()) && void 0 !== pp ? pp : cp.n, Op.f.includes((0, Dp.getSoftwareRenderer)()) && (cp.sampleCount = 1, cp.n = Math.max(cp.n, (0, Sp.x)(Ap.u.pixelScale, ip))), cp
    }
    let Wp = null,
      yp = null;
    const Up = new Set;
    let wp = null;

    function vp() {
      for (const pp of Up) pp()
    }

    function tp() {
      if (null === Wp) {
        const pp = document.createElement("div");
        pp.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", pp.setAttribute("aria-hidden", "true"), document.body.append(pp), yp = pp, Wp = new Sp.b(pp, vp)
      }
      return Wp
    }

    function Hp(pp) {
      const ip = (0, Sp.l)(),
        [cp, Op] = tp().size(ip);
      return (0, Sp.d)(cp, Op, ip, pp.n)
    }

    function dp(pp) {
      var ip, cp, Op, op;
      const Ip = (0, Sp.l)(),
        [Lp, Yp] = tp().size(Ip);
      if (Lp <= 0 || Yp <= 0) return null;
      const Dp = (0, Sp.d)(Lp, Yp, Ip, Pp().n);
      return (0, Sp.c)(pp, Dp), pp.style.left = `${null!==(ip=null===(cp=wp)||void 0===cp?void 0:cp.rect.left)&&void 0!==ip?ip:0}px`, pp.style.top = `${null!==(Op=null===(op=wp)||void 0===op?void 0:op.rect.top)&&void 0!==Op?Op:0}px`, (0, xp.T)(pp.style, wp), Dp
    }

    function ep(pp) {
      wp = pp, tp(), (0, xp.K)(yp.style, pp, ""), vp()
    }

    function jp(pp, ip) {
      pp.style.imageRendering = (0, Sp.D)(ip.pixelated)
    }

    function kp(pp, ip) {
      const cp = (0, Ip.n)("appManagerUpdated|clientEscMenuOptions", (() => {
          jp(pp, Pp()), ip()
        })),
        Op = (0, Lp.C)(ip),
        op = (0, Yp.o)(ip);
      return tp(), Up.add(ip), () => {
        cp(), Op(), op(), Up.delete(ip)
      }
    }
  },
  41208: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Sp,
      g: () => Ip,
      i: () => op
    });
    let Op = null;

    function op(pp) {
      Op = pp
    }

    function Ip(pp) {
      Op === pp && (Op = null)
    }

    function Sp() {
      var pp;
      null === (pp = Op) || void 0 === pp || pp()
    }
  },
  41147: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => op,
      h: () => Yp,
      j: () => Ip,
      m: () => Ap,
      p: () => Dp,
      q: () => Pp
    });
    var Op = cp(2970);
    class op extends Error {
      constructor(pp, ip, cp) {
        super(`${"fetch"===pp?"fetching":"decoding"} ${ip} failed`, cp), this.stage = pp, this.source = ip, this.name = "ShellImageError"
      }
    }
    async function Ip(pp) {
      let ip, cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Op.F,
        Ip = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      if ("string" === typeof pp) try {
        ip = await cp(pp)
      } catch (Sp) {
        throw new op("fetch", pp, {
          cause: Sp
        })
      } else ip = pp;
      try {
        const pp = new Blob([ip.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(pp, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: Ip
        })
      } catch (Sp) {
        throw new op("decode", "string" === typeof pp ? pp : `${ip.byteLength} bytes`, {
          cause: Sp
        })
      }
    }
    let Sp = null;
    const xp = new Map;
    let Lp = 1;

    function Yp(pp) {
      if (Sp = pp, null !== pp) {
        for (const [ip, cp] of xp) pp.kOp(ip, cp);
        xp.clear()
      }
    }

    function Dp(pp) {
      const ip = Lp++;
      return Sp ? Sp.kOp(ip, pp) : xp.set(ip, pp), ip
    }
    async function Ap(pp, ip, cp) {
      const Op = await Ip(pp, ip, cp);
      return {
        id: Dp(Op),
        width: Op.width,
        height: Op.height
      }
    }

    function Pp(pp) {
      var ip;
      const cp = xp.get(pp);
      if (cp) return cp.close(), void xp.delete(pp);
      null === (ip = Sp) || void 0 === ip || ip.mOp(pp)
    }
  },
  41096: (pp, ip, cp) => {
    function Op(pp, ip) {
      if (!Object.prototype.hasOwnProperty.call(pp, ip)) throw new TypeError("attempted to use private field on non-instance");
      return pp
    }
    cp.d(ip, {
      e: () => Op
    })
  },
  41104: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => op
    });
    var Op = 0;

    function op(pp) {
      return "__private_" + Op++ + "_" + pp
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);