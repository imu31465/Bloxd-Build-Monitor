export const id = 136;
export const ids = [136];
export const modules = {
  9444: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => hH,
      d: () => SH
    });
    var AH = LH(2073);
    const rH = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      SH = HH => "string" === typeof HH.icon && "" !== HH.icon && "string" === typeof HH.keycode && rH.test(HH.keycode),
      hH = HH => "Space" === HH ? "_" : AH.i[HH]
  },
  37373: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => rH,
      e: () => SH
    });
    let AH = !1;

    function rH() {
      return AH
    }

    function SH(HH) {
      return AH !== HH && (AH = HH, !0)
    }
  },
  40792: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => AH
    });
    class AH {
      constructor(HH) {
        this.events = HH, this.recent = [], this.episode = null, this.sampleSum = 0, this.sampleCount = 0, this.minWindowAvg = null
      }
      addSample(HH, BH) {
        if (null === HH) return this.recent.length = 0, void this.endEpisode(BH);
        if (this.sampleSum += HH, this.sampleCount++, this.recent.push(HH), this.recent.length > 5 && this.recent.shift(), null !== this.episode && (this.episode.minFps = Math.min(this.episode.minFps, HH), this.episode.sum += HH, this.episode.count++), this.recent.length < 5) return;
        const LH = function(HH) {
          let BH = 0;
          for (const LH of HH) BH += LH;
          return BH / HH.length
        }(this.recent);
        this.minWindowAvg = null === this.minWindowAvg ? LH : Math.min(this.minWindowAvg, LH), null === this.episode && LH < 20 ? (this.episode = {
          startedAtMs: BH - 5e3,
          minFps: Math.min(...this.recent),
          sum: 5 * LH,
          count: 5
        }, this.events.onEpisodeStarted(LH)) : null !== this.episode && LH >= 25 && this.endEpisode(BH)
      }
      endEpisode(HH) {
        if (null === this.episode) return;
        const {
          startedAtMs: BH,
          minFps: LH,
          sum: AH,
          count: rH
        } = this.episode;
        this.episode = null, this.events.onEpisodeEnded({
          startedAtMs: BH,
          durationMs: HH - BH,
          minFps: SH(LH),
          avgFps: SH(AH / rH)
        })
      }
      getTags() {
        return null === this.minWindowAvg ? null : {
          fps_min_bucket: rH(this.minWindowAvg),
          fps_avg_bucket: rH(this.sampleSum / this.sampleCount)
        }
      }
    }

    function rH(HH) {
      return HH < 15 ? "<15" : HH < 30 ? "15-30" : HH < 50 ? "30-50" : "50+"
    }

    function SH(HH) {
      return Math.round(10 * HH) / 10
    }
  },
  40772: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => rH
    });
    var AH = LH(1265);

    function rH(HH) {
      if ("error" === HH.type) {
        const {
          error: BH,
          filename: LH
        } = HH;
        return BH instanceof Error && (LH.startsWith(window.location.origin) || LH.startsWith("wasm://"))
      }
      const BH = HH.reason;
      if (BH instanceof Error) {
        var LH;
        const HH = `${BH.name}: ${BH.message}`;
        return !(0, AH.g)(null !== (LH = BH.stack) && void 0 !== LH ? LH : "") && !(0, AH.d)(HH) && !(0, AH.e)(HH)
      }
      return "string" === typeof BH && !(0, AH.d)(BH)
    }
  },
  40779: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => kH
    });
    var AH = LH(15),
      rH = LH(2036),
      SH = LH(37373),
      hH = LH(18),
      tH = LH(1659),
      zH = LH(40495),
      CH = LH(9444),
      EH = LH(1789),
      XH = LH(2064),
      GH = LH(30),
      YH = LH(40751),
      uH = LH(2066),
      QH = LH(7065);
    const WH = [...Object.values(uH.g).flat(), "ShiftLeft", "ShiftRight", "Enter", "KeyT", "Slash", "Escape", "Tab", "MetaLeft", "MetaRight", "ContextMenu", "PrintScreen", "ScrollLock", "Pause", "NumLock", "F1", "F5", "F6", "F7", "F11", "F12", "Mouse4", "Mouse5"],
      MH = [
        [1, "Mouse1"],
        [4, "Mouse2"],
        [2, "Mouse3"],
        [8, "Mouse4"],
        [16, "Mouse5"]
      ],
      xH = {
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
    class vH {
      constructor(HH) {
        this.source = HH, this.keyListeners = [], this.actionsListeners = [], this.pointerLockListeners = [], this.LX = new Uint8Array(QH.e.length), this.heldCount = 0, this.actionBits = 0, this.typing = !1, this.pointerLocked = !1, this.mouseButtons = 0, this.keyTable = null, HH.onBindingsChanged((() => {
          this.keyTable = null
        }))
      }
      onKey(HH) {
        return TH(this.keyListeners, HH)
      }
      onUnboundKey(HH) {
        return this.onKey(((BH, LH, AH, rH, SH, hH) => {
          LH && rH && !AH && HH(BH, hH)
        }))
      }
      onActions(HH) {
        return TH(this.actionsListeners, HH)
      }
      onPointerLock(HH) {
        return TH(this.pointerLockListeners, HH)
      }
      getActionBits() {
        return this.actionBits
      }
      listen(HH, BH) {
        this.typing = this.source.isTyping(BH.activeElement), this.pointerLocked = null !== BH.pointerLockElement;
        const LH = {
          capture: !0,
          passive: !0
        };
        HH.addEventListener("keydown", (HH => {
          this.setTyping(this.source.isTyping(PH(HH))), HH.isComposing || this.typing || this.keyDown(HH.code, HH.altKey || HH.ctrlKey || HH.metaKey)
        }), LH), HH.addEventListener("keyup", (HH => {
          this.typing || ("MetaLeft" === HH.code || "MetaRight" === HH.code ? this.releaseAll() : this.keyUp((0, QH.h)(HH.code)))
        }), LH);
        const AH = HH => {
          "mouse" === HH.pointerType && HH.isTrusted && this.setMouseButtons(HH.buttons, HH.altKey || HH.ctrlKey || HH.metaKey)
        };
        HH.addEventListener("pointerdown", AH, LH), HH.addEventListener("pointermove", AH, LH), HH.addEventListener("pointerup", AH, LH), HH.addEventListener("focusin", (HH => {
          this.setTyping(this.source.isTyping(PH(HH)))
        }), LH), HH.addEventListener("focusout", (HH => {
          this.setTyping(this.source.isTyping(HH.relatedTarget))
        }), LH), HH.addEventListener("blur", (BH => {
          BH.target === HH && this.releaseAll()
        }), LH), BH.addEventListener("visibilitychange", (() => {
          BH.hidden && this.releaseAll()
        })), BH.addEventListener("pointerlockchange", (() => {
          const HH = null !== BH.pointerLockElement;
          if (HH !== this.pointerLocked) {
            this.pointerLocked = HH;
            const BH = this.source.now();
            for (const LH of this.pointerLockListeners) LH(HH, BH)
          }
        }))
      }
      keyDown(HH, BH) {
        const LH = (0, QH.h)(HH);
        if (0 !== this.LX[LH]) return;
        const AH = this.source.isInPlay(),
          rH = AH ? this.getKeyTable() : null,
          SH = null === rH || BH || 1 === rH.bound[LH],
          hH = null !== rH && 0 !== rH.actionBits[LH];
        this.LX[LH] = 1 + (SH ? 1 : 0) + (AH ? 2 : 0) + (hH ? 4 : 0), this.heldCount++, this.emit(LH, !0, SH, AH, hH), hH && this.updateActionBits()
      }
      keyUp(HH) {
        this.release(HH) && this.updateActionBits()
      }
      setMouseButtons(HH, BH) {
        const LH = HH ^ this.mouseButtons;
        if (0 !== LH) {
          this.mouseButtons = HH;
          for (const [AH, rH] of MH) 0 !== (LH & AH) && (0 === (HH & AH) ? this.keyUp((0, QH.h)(rH)) : !this.typing && this.source.isInPlay() && this.keyDown(rH, BH))
        }
      }
      releaseAll() {
        let HH = !1;
        for (let BH = 0; this.heldCount > 0 && BH < this.LX.length; BH++) HH = this.release(BH) || HH;
        this.mouseButtons = 0, HH && this.updateActionBits()
      }
      release(HH) {
        const BH = this.LX[HH];
        if (0 === BH) return !1;
        this.LX[HH] = 0, this.heldCount--;
        const LH = 0 !== (BH - 1 & 2);
        return this.emit(HH, !1, 0 !== (BH - 1 & 1), LH, 0 !== (BH - 1 & 4)), LH
      }
      updateActionBits() {
        let HH = 0;
        if (this.heldCount > 0) {
          const BH = this.getKeyTable().actionBits;
          for (let LH = 0; LH < this.LX.length; LH++) {
            const AH = this.LX[LH];
            0 !== AH && 0 !== (AH - 1 & 2) && (HH |= BH[LH])
          }
        }
        if (HH === this.actionBits) return;
        this.actionBits = HH;
        const BH = this.source.now();
        for (const LH of this.actionsListeners) LH(HH, BH)
      }
      getKeyTable() {
        return this.keyTable ??= function(HH, BH) {
          const LH = new Uint8Array(QH.e.length),
            AH = new Uint16Array(QH.e.length);
          LH[0] = 1;
          for (const rH of WH) LH[(0, QH.h)(rH)] = 1;
          for (const [rH, SH] of Object.entries(HH)) {
            if (BH.has(rH)) continue;
            const HH = xH[rH],
              hH = void 0 === HH ? 0 : (0, QH.j)(HH);
            for (const BH of SH) {
              const HH = (0, QH.h)(BH);
              LH[HH] = 1, 0 !== HH && (AH[HH] |= hH)
            }
          }
          return {
            bound: LH,
            actionBits: AH
          }
        }(this.source.getBindings(), this.source.ignoredActions), this.keyTable
      }
      setTyping(HH) {
        HH && !this.typing && (this.typing = !0, this.releaseAll()), this.typing = HH
      }
      emit(HH, BH, LH, AH, rH) {
        const SH = QH.e[HH],
          hH = this.source.now();
        for (const tH of this.keyListeners) tH(SH, BH, LH, AH, rH, hH)
      }
    }

    function PH(HH) {
      var BH;
      return null !== (BH = HH.composedPath()[0]) && void 0 !== BH ? BH : HH.target
    }

    function TH(HH, BH) {
      return HH.push(BH), () => {
        const LH = HH.indexOf(BH); - 1 !== LH && HH.splice(LH, 1)
      }
    }
    const UH = "replayInput",
      VH = new Set([...XH.G, ...XH.m].filter((HH => "replayViewerOpen" !== HH && "toggleFreeCam" !== HH)));
    let OH = null;

    function bH() {
      var HH;
      return (null !== (HH = rH.e.get("customButtons")) && void 0 !== HH ? HH : []).filter(CH.d).map((HH => HH.keycode))
    }

    function kH() {
      return null === OH && "0" !== String(GH.e.getItem(UH)) && (OH = new vH({
        isInPlay: () => "inGame" === AH.c.get("gameState") && !(0, tH.t)() && !(0, SH.c)(),
        isTyping: EH.isTextEntry,
        getBindings: () => ({
          ...XH.w,
          customButtons: bH(),
          pageKeys: (0, zH.e)()
        }),
        ignoredActions: VH,
        onBindingsChanged: HH => {
          hH.k.subscribe("customBindingsChanged", HH), rH.e.subscribe("customButtons", HH), rH.e.subscribeReset(HH), (0, zH.f)(HH)
        },
        now: YH.d
      }), OH.listen(window, document)), OH
    }
  },
  40495: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => hH,
      e: () => tH,
      f: () => zH
    });
    const AH = new Map,
      rH = [];

    function SH() {
      for (const HH of rH) HH()
    }

    function hH(HH) {
      var BH;
      return AH.set(HH, (null !== (BH = AH.get(HH)) && void 0 !== BH ? BH : 0) + 1), SH(), () => {
        const BH = AH.get(HH) - 1;
        0 === BH ? AH.delete(HH) : AH.set(HH, BH), SH()
      }
    }

    function tH() {
      return [...AH.keys()]
    }

    function zH(HH) {
      rH.push(HH)
    }
  },
  7057: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => AH,
      f: () => SH,
      i: () => rH,
      k: () => hH,
      m: () => zH,
      p: () => tH
    });
    const AH = ["page_loaded", "game_loading", "game_playable", "first_input", "pointer_locked", "first_move", "first_block", "played_60s", "second_game"],
      rH = ["joined", "game_playable", "first_input", "pointer_locked", "first_move", "first_block", "played_60s"],
      SH = ["unbound_key_burst", "idle_pointer_locked", "menu_toggling", "block_change_refused", "pointer_lock_failed", "rage_quit"],
      hH = 3;

    function tH(HH) {
      return void 0 === HH ? -1 : rH.indexOf(HH)
    }

    function zH(HH, BH) {
      return tH(BH) > tH(HH) ? BH : HH
    }
  },
  7065: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => AH,
      h: () => SH,
      i: () => tH,
      j: () => CH
    });
    const AH = ["Unidentified", ...[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].map((HH => `Key${HH}`)), ...Array.from({
        length: 10
      }, ((HH, BH) => `Digit${BH}`)), ...Array.from({
        length: 12
      }, ((HH, BH) => `F${BH+1}`)), "Escape", "Tab", "CapsLock", "ShiftLeft", "ShiftRight", "ControlLeft", "ControlRight", "AltLeft", "AltRight", "MetaLeft", "MetaRight", "Space", "Enter", "Backspace", "Delete", "Insert", "Home", "End", "PageUp", "PageDown", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Minus", "Equal", "BracketLeft", "BracketRight", "Backslash", "IntlBackslash", "Semicolon", "Quote", "Backquote", "Comma", "Period", "Slash", "ContextMenu", "PrintScreen", "ScrollLock", "Pause", "NumLock", ...Array.from({
        length: 10
      }, ((HH, BH) => `Numpad${BH}`)), "NumpadAdd", "NumpadSubtract", "NumpadMultiply", "NumpadDivide", "NumpadDecimal", "NumpadEnter", "Mouse1", "Mouse2", "Mouse3", "Mouse4", "Mouse5"],
      rH = new Map(AH.map(((HH, BH) => [HH, BH])));

    function SH(HH) {
      var BH;
      return null !== (BH = rH.get(HH)) && void 0 !== BH ? BH : 0
    }
    const hH = new Set(["Minus", "Equal", "BracketLeft", "BracketRight", "Backslash", "IntlBackslash", "Semicolon", "Quote", "Backquote", "Comma", "Period", "Slash", "NumpadAdd", "NumpadSubtract", "NumpadMultiply", "NumpadDivide", "NumpadDecimal"]);

    function tH(HH) {
      return /^Key[A-Z]$/.test(HH) ? "letter" : /^(Digit|Numpad)\d$/.test(HH) ? "digit" : hH.has(HH) ? "symbol" : null
    }
    const zH = ["forward", "backward", "left", "right", "jump", "sprint", "crouch", "primary", "secondary", "middle"];

    function CH(HH) {
      return 1 << zH.indexOf(HH)
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);