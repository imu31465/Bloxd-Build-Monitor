export const id = 145;
export const ids = [145];
export const modules = {
  10085: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => ZR,
      f: () => uR
    });
    var yR = GR(2202);
    const tR = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      uR = RR => "string" === typeof RR.icon && "" !== RR.icon && "string" === typeof RR.keycode && tR.test(RR.keycode),
      ZR = RR => "Space" === RR ? "_" : yR.f[RR]
  },
  37651: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => tR,
      i: () => uR
    });
    let yR = !1;

    function tR() {
      return yR
    }

    function uR(RR) {
      return yR !== RR && (yR = RR, !0)
    }
  },
  41079: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => yR
    });
    class yR {
      constructor(RR) {
        this.events = RR, this.recent = [], this.episode = null, this.sampleSum = 0, this.sampleCount = 0, this.minWindowAvg = null
      }
      addSample(RR, JR) {
        if (null === RR) return this.recent.length = 0, void this.endEpisode(JR);
        if (this.sampleSum += RR, this.sampleCount++, this.recent.push(RR), this.recent.length > 5 && this.recent.shift(), null !== this.episode && (this.episode.minFps = Math.min(this.episode.minFps, RR), this.episode.sum += RR, this.episode.count++), this.recent.length < 5) return;
        const GR = function(RR) {
          let JR = 0;
          for (const GR of RR) JR += GR;
          return JR / RR.length
        }(this.recent);
        this.minWindowAvg = null === this.minWindowAvg ? GR : Math.min(this.minWindowAvg, GR), null === this.episode && GR < 20 ? (this.episode = {
          startedAtMs: JR - 5e3,
          minFps: Math.min(...this.recent),
          sum: 5 * GR,
          count: 5
        }, this.events.onEpisodeStarted(GR)) : null !== this.episode && GR >= 25 && this.endEpisode(JR)
      }
      endEpisode(RR) {
        if (null === this.episode) return;
        const {
          startedAtMs: JR,
          minFps: GR,
          sum: yR,
          count: tR
        } = this.episode;
        this.episode = null, this.events.onEpisodeEnded({
          startedAtMs: JR,
          durationMs: RR - JR,
          minFps: uR(GR),
          avgFps: uR(yR / tR)
        })
      }
      getTags() {
        return null === this.minWindowAvg ? null : {
          fps_min_bucket: tR(this.minWindowAvg),
          fps_avg_bucket: tR(this.sampleSum / this.sampleCount)
        }
      }
    }

    function tR(RR) {
      return RR < 15 ? "<15" : RR < 30 ? "15-30" : RR < 50 ? "30-50" : "50+"
    }

    function uR(RR) {
      return Math.round(10 * RR) / 10
    }
  },
  41062: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => tR
    });
    var yR = GR(1412);

    function tR(RR) {
      if ("error" === RR.type) {
        const {
          error: JR,
          filename: GR
        } = RR;
        return JR instanceof Error && (GR.startsWith(window.location.origin) || GR.startsWith("wasm://"))
      }
      const JR = RR.reason;
      if (JR instanceof Error) {
        var GR;
        const RR = `${JR.name}: ${JR.message}`;
        return !(0, yR.p)(null !== (GR = JR.stack) && void 0 !== GR ? GR : "") && !(0, yR.j)(RR) && !(0, yR.n)(RR)
      }
      return "string" === typeof JR && !(0, yR.j)(JR)
    }
  },
  41066: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => pR
    });
    var yR = GR(25),
      tR = GR(2163),
      uR = GR(37651),
      ZR = GR(32),
      qR = GR(1800),
      iR = GR(40801),
      fR = GR(10085),
      VR = GR(1943),
      KR = GR(2194),
      wR = GR(46),
      rR = GR(41049),
      eR = GR(2196),
      aR = GR(7640);
    const LR = [...Object.values(eR.i).flat(), "ShiftLeft", "ShiftRight", "Enter", "KeyT", "Slash", "Escape", "Tab", "MetaLeft", "MetaRight", "ContextMenu", "PrintScreen", "ScrollLock", "Pause", "NumLock", "F1", "F5", "F6", "F7", "F11", "F12", "Mouse4", "Mouse5"],
      nR = [
        [1, "Mouse1"],
        [4, "Mouse2"],
        [2, "Mouse3"],
        [8, "Mouse4"],
        [16, "Mouse5"]
      ],
      UR = {
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
    class WR {
      constructor(RR) {
        this.source = RR, this.keyListeners = [], this.actionsListeners = [], this.pointerLockListeners = [], this.Qq = new Uint8Array(aR.d.length), this.heldCount = 0, this.actionBits = 0, this.typing = !1, this.pointerLocked = !1, this.mouseButtons = 0, this.keyTable = null, RR.onBindingsChanged((() => {
          this.keyTable = null
        }))
      }
      onKey(RR) {
        return CR(this.keyListeners, RR)
      }
      onUnboundKey(RR) {
        return this.onKey(((JR, GR, yR, tR, uR, ZR) => {
          GR && tR && !yR && RR(JR, ZR)
        }))
      }
      onActions(RR) {
        return CR(this.actionsListeners, RR)
      }
      onPointerLock(RR) {
        return CR(this.pointerLockListeners, RR)
      }
      getActionBits() {
        return this.actionBits
      }
      listen(RR, JR) {
        this.typing = this.source.isTyping(JR.activeElement), this.pointerLocked = null !== JR.pointerLockElement;
        const GR = {
          capture: !0,
          passive: !0
        };
        RR.addEventListener("keydown", (RR => {
          this.setTyping(this.source.isTyping(AR(RR))), RR.isComposing || this.typing || this.keyDown(RR.code, RR.altKey || RR.ctrlKey || RR.metaKey)
        }), GR), RR.addEventListener("keyup", (RR => {
          this.typing || ("MetaLeft" === RR.code || "MetaRight" === RR.code ? this.releaseAll() : this.keyUp((0, aR.e)(RR.code)))
        }), GR);
        const yR = RR => {
          "mouse" === RR.pointerType && RR.isTrusted && this.setMouseButtons(RR.buttons, RR.altKey || RR.ctrlKey || RR.metaKey)
        };
        RR.addEventListener("pointerdown", yR, GR), RR.addEventListener("pointermove", yR, GR), RR.addEventListener("pointerup", yR, GR), RR.addEventListener("focusin", (RR => {
          this.setTyping(this.source.isTyping(AR(RR)))
        }), GR), RR.addEventListener("focusout", (RR => {
          this.setTyping(this.source.isTyping(RR.relatedTarget))
        }), GR), RR.addEventListener("blur", (JR => {
          JR.target === RR && this.releaseAll()
        }), GR), JR.addEventListener("visibilitychange", (() => {
          JR.hidden && this.releaseAll()
        })), JR.addEventListener("pointerlockchange", (() => {
          const RR = null !== JR.pointerLockElement;
          if (RR !== this.pointerLocked) {
            this.pointerLocked = RR;
            const JR = this.source.now();
            for (const GR of this.pointerLockListeners) GR(RR, JR)
          }
        }))
      }
      keyDown(RR, JR) {
        const GR = (0, aR.e)(RR);
        if (0 !== this.Qq[GR]) return;
        const yR = this.source.isInPlay(),
          tR = yR ? this.getKeyTable() : null,
          uR = null === tR || JR || 1 === tR.bound[GR],
          ZR = null !== tR && 0 !== tR.actionBits[GR];
        this.Qq[GR] = 1 + (uR ? 1 : 0) + (yR ? 2 : 0) + (ZR ? 4 : 0), this.heldCount++, this.emit(GR, !0, uR, yR, ZR), ZR && this.updateActionBits()
      }
      keyUp(RR) {
        this.release(RR) && this.updateActionBits()
      }
      setMouseButtons(RR, JR) {
        const GR = RR ^ this.mouseButtons;
        if (0 !== GR) {
          this.mouseButtons = RR;
          for (const [yR, tR] of nR) 0 !== (GR & yR) && (0 === (RR & yR) ? this.keyUp((0, aR.e)(tR)) : !this.typing && this.source.isInPlay() && this.keyDown(tR, JR))
        }
      }
      releaseAll() {
        let RR = !1;
        for (let JR = 0; this.heldCount > 0 && JR < this.Qq.length; JR++) RR = this.release(JR) || RR;
        this.mouseButtons = 0, RR && this.updateActionBits()
      }
      release(RR) {
        const JR = this.Qq[RR];
        if (0 === JR) return !1;
        this.Qq[RR] = 0, this.heldCount--;
        const GR = 0 !== (JR - 1 & 2);
        return this.emit(RR, !1, 0 !== (JR - 1 & 1), GR, 0 !== (JR - 1 & 4)), GR
      }
      updateActionBits() {
        let RR = 0;
        if (this.heldCount > 0) {
          const JR = this.getKeyTable().actionBits;
          for (let GR = 0; GR < this.Qq.length; GR++) {
            const yR = this.Qq[GR];
            0 !== yR && 0 !== (yR - 1 & 2) && (RR |= JR[GR])
          }
        }
        if (RR === this.actionBits) return;
        this.actionBits = RR;
        const JR = this.source.now();
        for (const GR of this.actionsListeners) GR(RR, JR)
      }
      getKeyTable() {
        return this.keyTable ??= function(RR, JR) {
          const GR = new Uint8Array(aR.d.length),
            yR = new Uint16Array(aR.d.length);
          GR[0] = 1;
          for (const tR of LR) GR[(0, aR.e)(tR)] = 1;
          for (const [tR, uR] of Object.entries(RR)) {
            if (JR.has(tR)) continue;
            const RR = UR[tR],
              ZR = void 0 === RR ? 0 : (0, aR.l)(RR);
            for (const JR of uR) {
              const RR = (0, aR.e)(JR);
              GR[RR] = 1, 0 !== RR && (yR[RR] |= ZR)
            }
          }
          return {
            bound: GR,
            actionBits: yR
          }
        }(this.source.getBindings(), this.source.ignoredActions), this.keyTable
      }
      setTyping(RR) {
        RR && !this.typing && (this.typing = !0, this.releaseAll()), this.typing = RR
      }
      emit(RR, JR, GR, yR, tR) {
        const uR = aR.d[RR],
          ZR = this.source.now();
        for (const qR of this.keyListeners) qR(uR, JR, GR, yR, tR, ZR)
      }
    }

    function AR(RR) {
      var JR;
      return null !== (JR = RR.composedPath()[0]) && void 0 !== JR ? JR : RR.target
    }

    function CR(RR, JR) {
      return RR.push(JR), () => {
        const GR = RR.indexOf(JR); - 1 !== GR && RR.splice(GR, 1)
      }
    }
    const XR = "replayInput",
      MR = new Set([...KR.B, ...KR.k].filter((RR => "replayViewerOpen" !== RR && "toggleFreeCam" !== RR)));
    let BR = null;

    function lR() {
      var RR;
      return (null !== (RR = tR.c.get("customButtons")) && void 0 !== RR ? RR : []).filter(fR.f).map((RR => RR.keycode))
    }

    function pR() {
      return null === BR && "0" !== String(wR.i.getItem(XR)) && (BR = new WR({
        isInPlay: () => "inGame" === yR.d.get("gameState") && !(0, qR.o)() && !(0, uR.e)(),
        isTyping: VR.isTextEntry,
        getBindings: () => ({
          ...KR.t,
          customButtons: lR(),
          pageKeys: (0, iR.e)()
        }),
        ignoredActions: MR,
        onBindingsChanged: RR => {
          ZR.n.subscribe("customBindingsChanged", RR), tR.c.subscribe("customButtons", RR), tR.c.subscribeReset(RR), (0, iR.g)(RR)
        },
        now: rR.c
      }), BR.listen(window, document)), BR
    }
  },
  40801: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => ZR,
      e: () => qR,
      g: () => iR
    });
    const yR = new Map,
      tR = [];

    function uR() {
      for (const RR of tR) RR()
    }

    function ZR(RR) {
      var JR;
      return yR.set(RR, (null !== (JR = yR.get(RR)) && void 0 !== JR ? JR : 0) + 1), uR(), () => {
        const JR = yR.get(RR) - 1;
        0 === JR ? yR.delete(RR) : yR.set(RR, JR), uR()
      }
    }

    function qR() {
      return [...yR.keys()]
    }

    function iR(RR) {
      tR.push(RR)
    }
  },
  7630: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => yR,
      d: () => uR,
      g: () => tR,
      i: () => ZR,
      l: () => iR,
      n: () => qR
    });
    const yR = ["page_loaded", "game_loading", "game_playable", "first_input", "pointer_locked", "first_move", "first_block", "played_60s", "second_game"],
      tR = ["joined", "game_playable", "first_input", "pointer_locked", "first_move", "first_block", "played_60s"],
      uR = ["unbound_key_burst", "idle_pointer_locked", "menu_toggling", "block_change_refused", "pointer_lock_failed", "rage_quit"],
      ZR = 3;

    function qR(RR) {
      return void 0 === RR ? -1 : tR.indexOf(RR)
    }

    function iR(RR, JR) {
      return qR(JR) > qR(RR) ? JR : RR
    }
  },
  7640: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => yR,
      e: () => uR,
      i: () => qR,
      l: () => fR
    });
    const yR = ["Unidentified", ...[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].map((RR => `Key${RR}`)), ...Array.from({
        length: 10
      }, ((RR, JR) => `Digit${JR}`)), ...Array.from({
        length: 12
      }, ((RR, JR) => `F${JR+1}`)), "Escape", "Tab", "CapsLock", "ShiftLeft", "ShiftRight", "ControlLeft", "ControlRight", "AltLeft", "AltRight", "MetaLeft", "MetaRight", "Space", "Enter", "Backspace", "Delete", "Insert", "Home", "End", "PageUp", "PageDown", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Minus", "Equal", "BracketLeft", "BracketRight", "Backslash", "IntlBackslash", "Semicolon", "Quote", "Backquote", "Comma", "Period", "Slash", "ContextMenu", "PrintScreen", "ScrollLock", "Pause", "NumLock", ...Array.from({
        length: 10
      }, ((RR, JR) => `Numpad${JR}`)), "NumpadAdd", "NumpadSubtract", "NumpadMultiply", "NumpadDivide", "NumpadDecimal", "NumpadEnter", "Mouse1", "Mouse2", "Mouse3", "Mouse4", "Mouse5"],
      tR = new Map(yR.map(((RR, JR) => [RR, JR])));

    function uR(RR) {
      var JR;
      return null !== (JR = tR.get(RR)) && void 0 !== JR ? JR : 0
    }
    const ZR = new Set(["Minus", "Equal", "BracketLeft", "BracketRight", "Backslash", "IntlBackslash", "Semicolon", "Quote", "Backquote", "Comma", "Period", "Slash", "NumpadAdd", "NumpadSubtract", "NumpadMultiply", "NumpadDivide", "NumpadDecimal"]);

    function qR(RR) {
      return /^Key[A-Z]$/.test(RR) ? "letter" : /^(Digit|Numpad)\d$/.test(RR) ? "digit" : ZR.has(RR) ? "symbol" : null
    }
    const iR = ["forward", "backward", "left", "right", "jump", "sprint", "crouch", "primary", "secondary", "middle"];

    function fR(RR) {
      return 1 << iR.indexOf(RR)
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);