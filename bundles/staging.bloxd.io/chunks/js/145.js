export const id = 145;
export const ids = [145];
export const modules = {
  9972: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => PW,
      e: () => NW
    });
    var mW = OW(2095);
    const EW = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      NW = WW => "string" === typeof WW.icon && "" !== WW.icon && "string" === typeof WW.keycode && EW.test(WW.keycode),
      PW = WW => "Space" === WW ? "_" : mW.h[WW]
  },
  37735: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => EW,
      g: () => NW
    });
    let mW = !1;

    function EW() {
      return mW
    }

    function NW(WW) {
      return mW !== WW && (mW = WW, !0)
    }
  },
  41091: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => mW
    });
    class mW {
      constructor(WW) {
        this.events = WW, this.recent = [], this.episode = null, this.sampleSum = 0, this.sampleCount = 0, this.minWindowAvg = null
      }
      addSample(WW, iW) {
        if (null === WW) return this.recent.length = 0, void this.endEpisode(iW);
        if (this.sampleSum += WW, this.sampleCount++, this.recent.push(WW), this.recent.length > 5 && this.recent.shift(), null !== this.episode && (this.episode.minFps = Math.min(this.episode.minFps, WW), this.episode.sum += WW, this.episode.count++), this.recent.length < 5) return;
        const OW = function(WW) {
          let iW = 0;
          for (const OW of WW) iW += OW;
          return iW / WW.length
        }(this.recent);
        this.minWindowAvg = null === this.minWindowAvg ? OW : Math.min(this.minWindowAvg, OW), null === this.episode && OW < 20 ? (this.episode = {
          startedAtMs: iW - 5e3,
          minFps: Math.min(...this.recent),
          sum: 5 * OW,
          count: 5
        }, this.events.onEpisodeStarted(OW)) : null !== this.episode && OW >= 25 && this.endEpisode(iW)
      }
      endEpisode(WW) {
        if (null === this.episode) return;
        const {
          startedAtMs: iW,
          minFps: OW,
          sum: mW,
          count: EW
        } = this.episode;
        this.episode = null, this.events.onEpisodeEnded({
          startedAtMs: iW,
          durationMs: WW - iW,
          minFps: NW(OW),
          avgFps: NW(mW / EW)
        })
      }
      getTags() {
        return null === this.minWindowAvg ? null : {
          fps_min_bucket: EW(this.minWindowAvg),
          fps_avg_bucket: EW(this.sampleSum / this.sampleCount)
        }
      }
    }

    function EW(WW) {
      return WW < 15 ? "<15" : WW < 30 ? "15-30" : WW < 50 ? "30-50" : "50+"
    }

    function NW(WW) {
      return Math.round(10 * WW) / 10
    }
  },
  41073: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => EW
    });
    var mW = OW(1305);

    function EW(WW) {
      if ("error" === WW.type) {
        const {
          error: iW,
          filename: OW
        } = WW;
        return iW instanceof Error && (OW.startsWith(window.location.origin) || OW.startsWith("wasm://"))
      }
      const iW = WW.reason;
      if (iW instanceof Error) {
        var OW;
        const WW = `${iW.name}: ${iW.message}`;
        return !(0, mW.k)(null !== (OW = iW.stack) && void 0 !== OW ? OW : "") && !(0, mW.f)(WW) && !(0, mW.g)(WW)
      }
      return "string" === typeof iW && !(0, mW.f)(iW)
    }
  },
  41082: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => JW
    });
    var mW = OW(25),
      EW = OW(2061),
      NW = OW(37735),
      PW = OW(27),
      LW = OW(1729),
      cW = OW(40814),
      wW = OW(9972),
      tW = OW(1856),
      ZW = OW(2085),
      xW = OW(39),
      lW = OW(41052),
      AW = OW(2093),
      bW = OW(7502);
    const jW = [...Object.values(AW.e).flat(), "ShiftLeft", "ShiftRight", "Enter", "KeyT", "Slash", "Escape", "Tab", "MetaLeft", "MetaRight", "ContextMenu", "PrintScreen", "ScrollLock", "Pause", "NumLock", "F1", "F5", "F6", "F7", "F11", "F12", "Mouse4", "Mouse5"],
      UW = [
        [1, "Mouse1"],
        [4, "Mouse2"],
        [2, "Mouse3"],
        [8, "Mouse4"],
        [16, "Mouse5"]
      ],
      kW = {
        forward: "forward",
        backward: "backward",
        left: "left",
        right: "right",
        jump: "jump",
        sprint: "sprint",
        crouch: "crouch",
        "primary-fire": "primary",
        "alt-fire": "secondary",
        "mid-fire": "middle"
      };
    class sW {
      constructor(WW) {
        this.source = WW, this.keyListeners = [], this.actionsListeners = [], this.pointerLockListeners = [], this.BL = new Uint8Array(bW.c.length), this.heldCount = 0, this.actionBits = 0, this.typing = !1, this.pointerLocked = !1, this.mouseButtons = 0, this.keyTable = null, WW.onBindingsChanged((() => {
          this.keyTable = null
        }))
      }
      onKey(WW) {
        return KW(this.keyListeners, WW)
      }
      onUnboundKey(WW) {
        return this.onKey(((iW, OW, mW, EW, NW, PW) => {
          OW && EW && !mW && WW(iW, PW)
        }))
      }
      onActions(WW) {
        return KW(this.actionsListeners, WW)
      }
      onPointerLock(WW) {
        return KW(this.pointerLockListeners, WW)
      }
      getActionBits() {
        return this.actionBits
      }
      listen(WW, iW) {
        this.typing = this.source.isTyping(iW.activeElement), this.pointerLocked = null !== iW.pointerLockElement;
        const OW = {
          capture: !0,
          passive: !0
        };
        WW.addEventListener("keydown", (WW => {
          this.setTyping(this.source.isTyping(MW(WW))), WW.isComposing || this.typing || this.keyDown(WW.code, WW.altKey || WW.ctrlKey || WW.metaKey)
        }), OW), WW.addEventListener("keyup", (WW => {
          this.typing || ("MetaLeft" === WW.code || "MetaRight" === WW.code ? this.releaseAll() : this.keyUp((0, bW.e)(WW.code)))
        }), OW);
        const mW = WW => {
          "mouse" === WW.pointerType && WW.isTrusted && this.setMouseButtons(WW.buttons, WW.altKey || WW.ctrlKey || WW.metaKey)
        };
        WW.addEventListener("pointerdown", mW, OW), WW.addEventListener("pointermove", mW, OW), WW.addEventListener("pointerup", mW, OW), WW.addEventListener("focusin", (WW => {
          this.setTyping(this.source.isTyping(MW(WW)))
        }), OW), WW.addEventListener("focusout", (WW => {
          this.setTyping(this.source.isTyping(WW.relatedTarget))
        }), OW), WW.addEventListener("blur", (iW => {
          iW.target === WW && this.releaseAll()
        }), OW), iW.addEventListener("visibilitychange", (() => {
          iW.hidden && this.releaseAll()
        })), iW.addEventListener("pointerlockchange", (() => {
          const WW = null !== iW.pointerLockElement;
          if (WW !== this.pointerLocked) {
            this.pointerLocked = WW;
            const iW = this.source.now();
            for (const OW of this.pointerLockListeners) OW(WW, iW)
          }
        }))
      }
      keyDown(WW, iW) {
        const OW = (0, bW.e)(WW);
        if (0 !== this.BL[OW]) return;
        const mW = this.source.isInPlay(),
          EW = mW ? this.getKeyTable() : null,
          NW = null === EW || iW || 1 === EW.bound[OW],
          PW = null !== EW && 0 !== EW.actionBits[OW];
        this.BL[OW] = 1 + (NW ? 1 : 0) + (mW ? 2 : 0) + (PW ? 4 : 0), this.heldCount++, this.emit(OW, !0, NW, mW, PW), PW && this.updateActionBits()
      }
      keyUp(WW) {
        this.release(WW) && this.updateActionBits()
      }
      setMouseButtons(WW, iW) {
        const OW = WW ^ this.mouseButtons;
        if (0 !== OW) {
          this.mouseButtons = WW;
          for (const [mW, EW] of UW) 0 !== (OW & mW) && (0 === (WW & mW) ? this.keyUp((0, bW.e)(EW)) : !this.typing && this.source.isInPlay() && this.keyDown(EW, iW))
        }
      }
      releaseAll() {
        let WW = !1;
        for (let iW = 0; this.heldCount > 0 && iW < this.BL.length; iW++) WW = this.release(iW) || WW;
        this.mouseButtons = 0, WW && this.updateActionBits()
      }
      release(WW) {
        const iW = this.BL[WW];
        if (0 === iW) return !1;
        this.BL[WW] = 0, this.heldCount--;
        const OW = 0 !== (iW - 1 & 2);
        return this.emit(WW, !1, 0 !== (iW - 1 & 1), OW, 0 !== (iW - 1 & 4)), OW
      }
      updateActionBits() {
        let WW = 0;
        if (this.heldCount > 0) {
          const iW = this.getKeyTable().actionBits;
          for (let OW = 0; OW < this.BL.length; OW++) {
            const mW = this.BL[OW];
            0 !== mW && 0 !== (mW - 1 & 2) && (WW |= iW[OW])
          }
        }
        if (WW === this.actionBits) return;
        this.actionBits = WW;
        const iW = this.source.now();
        for (const OW of this.actionsListeners) OW(WW, iW)
      }
      getKeyTable() {
        return this.keyTable ??= function(WW, iW) {
          const OW = new Uint8Array(bW.c.length),
            mW = new Uint16Array(bW.c.length);
          OW[0] = 1;
          for (const EW of jW) OW[(0, bW.e)(EW)] = 1;
          for (const [EW, NW] of Object.entries(WW)) {
            if (iW.has(EW)) continue;
            const WW = kW[EW],
              PW = void 0 === WW ? 0 : (0, bW.j)(WW);
            for (const iW of NW) {
              const WW = (0, bW.e)(iW);
              OW[WW] = 1, 0 !== WW && (mW[WW] |= PW)
            }
          }
          return {
            bound: OW,
            actionBits: mW
          }
        }(this.source.getBindings(), this.source.ignoredActions), this.keyTable
      }
      setTyping(WW) {
        WW && !this.typing && (this.typing = !0, this.releaseAll()), this.typing = WW
      }
      emit(WW, iW, OW, mW, EW) {
        const NW = bW.c[WW],
          PW = this.source.now();
        for (const LW of this.keyListeners) LW(NW, iW, OW, mW, EW, PW)
      }
    }

    function MW(WW) {
      var iW;
      return null !== (iW = WW.composedPath()[0]) && void 0 !== iW ? iW : WW.target
    }

    function KW(WW, iW) {
      return WW.push(iW), () => {
        const OW = WW.indexOf(iW); - 1 !== OW && WW.splice(OW, 1)
      }
    }
    const SW = "replayInput",
      YW = new Set([...ZW.F, ...ZW.j].filter((WW => "replayViewerOpen" !== WW && "toggleFreeCam" !== WW)));
    let yW = null;

    function TW() {
      var WW;
      return (null !== (WW = EW.d.get("customButtons")) && void 0 !== WW ? WW : []).filter(wW.e).map((WW => WW.keycode))
    }

    function JW() {
      return null === yW && "0" !== String(xW.i.getItem(SW)) && (yW = new sW({
        isInPlay: () => "inGame" === mW.d.get("gameState") && !(0, LW.l)() && !(0, NW.e)(),
        isTyping: tW.isTextEntry,
        getBindings: () => ({
          ...ZW.v,
          customButtons: TW(),
          pageKeys: (0, cW.g)()
        }),
        ignoredActions: YW,
        onBindingsChanged: WW => {
          PW.l.subscribe("customBindingsChanged", WW), EW.d.subscribe("customButtons", WW), EW.d.subscribeReset(WW), (0, cW.k)(WW)
        },
        now: lW.e
      }), yW.listen(window, document)), yW
    }
  },
  40814: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => PW,
      g: () => LW,
      k: () => cW
    });
    const mW = new Map,
      EW = [];

    function NW() {
      for (const WW of EW) WW()
    }

    function PW(WW) {
      var iW;
      return mW.set(WW, (null !== (iW = mW.get(WW)) && void 0 !== iW ? iW : 0) + 1), NW(), () => {
        const iW = mW.get(WW) - 1;
        0 === iW ? mW.delete(WW) : mW.set(WW, iW), NW()
      }
    }

    function LW() {
      return [...mW.keys()]
    }

    function cW(WW) {
      EW.push(WW)
    }
  },
  7493: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => mW,
      h: () => NW,
      j: () => EW,
      n: () => PW,
      o: () => cW,
      r: () => LW
    });
    const mW = ["page_loaded", "game_loading", "game_playable", "first_input", "pointer_locked", "first_move", "first_block", "played_60s", "second_game"],
      EW = ["joined", "game_playable", "first_input", "pointer_locked", "first_move", "first_block", "played_60s"],
      NW = ["unbound_key_burst", "idle_pointer_locked", "menu_toggling", "block_change_refused", "pointer_lock_failed", "rage_quit"],
      PW = 3;

    function LW(WW) {
      return void 0 === WW ? -1 : EW.indexOf(WW)
    }

    function cW(WW, iW) {
      return LW(iW) > LW(WW) ? iW : WW
    }
  },
  7502: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => mW,
      e: () => NW,
      g: () => LW,
      j: () => wW
    });
    const mW = ["Unidentified", ...[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].map((WW => `Key${WW}`)), ...Array.from({
        length: 10
      }, ((WW, iW) => `Digit${iW}`)), ...Array.from({
        length: 12
      }, ((WW, iW) => `F${iW+1}`)), "Escape", "Tab", "CapsLock", "ShiftLeft", "ShiftRight", "ControlLeft", "ControlRight", "AltLeft", "AltRight", "MetaLeft", "MetaRight", "Space", "Enter", "Backspace", "Delete", "Insert", "Home", "End", "PageUp", "PageDown", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Minus", "Equal", "BracketLeft", "BracketRight", "Backslash", "IntlBackslash", "Semicolon", "Quote", "Backquote", "Comma", "Period", "Slash", "ContextMenu", "PrintScreen", "ScrollLock", "Pause", "NumLock", ...Array.from({
        length: 10
      }, ((WW, iW) => `Numpad${iW}`)), "NumpadAdd", "NumpadSubtract", "NumpadMultiply", "NumpadDivide", "NumpadDecimal", "NumpadEnter", "Mouse1", "Mouse2", "Mouse3", "Mouse4", "Mouse5"],
      EW = new Map(mW.map(((WW, iW) => [WW, iW])));

    function NW(WW) {
      var iW;
      return null !== (iW = EW.get(WW)) && void 0 !== iW ? iW : 0
    }
    const PW = new Set(["Minus", "Equal", "BracketLeft", "BracketRight", "Backslash", "IntlBackslash", "Semicolon", "Quote", "Backquote", "Comma", "Period", "Slash", "NumpadAdd", "NumpadSubtract", "NumpadMultiply", "NumpadDivide", "NumpadDecimal"]);

    function LW(WW) {
      return /^Key[A-Z]$/.test(WW) ? "letter" : /^(Digit|Numpad)\d$/.test(WW) ? "digit" : PW.has(WW) ? "symbol" : null
    }
    const cW = ["forward", "backward", "left", "right", "jump", "sprint", "crouch", "primary", "secondary", "middle"];

    function wW(WW) {
      return 1 << cW.indexOf(WW)
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);