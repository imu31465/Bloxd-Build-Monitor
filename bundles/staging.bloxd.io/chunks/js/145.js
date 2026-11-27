export const id = 145;
export const ids = [145];
export const modules = {
  9850: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => jr,
      f: () => ar
    });
    var Zr = Qr(2140);
    const Wr = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      ar = rr => "string" === typeof rr.icon && "" !== rr.icon && "string" === typeof rr.keycode && Wr.test(rr.keycode),
      jr = rr => "Space" === rr ? "_" : Zr.h[rr]
  },
  38031: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Wr,
      f: () => ar
    });
    let Zr = !1;

    function Wr() {
      return Zr
    }

    function ar(rr) {
      return Zr !== rr && (Zr = rr, !0)
    }
  },
  41444: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Zr
    });
    class Zr {
      constructor(rr) {
        this.events = rr, this.recent = [], this.episode = null, this.sampleSum = 0, this.sampleCount = 0, this.minWindowAvg = null
      }
      addSample(rr, Sr) {
        if (null === rr) return this.recent.length = 0, void this.endEpisode(Sr);
        if (this.sampleSum += rr, this.sampleCount++, this.recent.push(rr), this.recent.length > 5 && this.recent.shift(), null !== this.episode && (this.episode.minFps = Math.min(this.episode.minFps, rr), this.episode.sum += rr, this.episode.count++), this.recent.length < 5) return;
        const Qr = function(rr) {
          let Sr = 0;
          for (const Qr of rr) Sr += Qr;
          return Sr / rr.length
        }(this.recent);
        this.minWindowAvg = null === this.minWindowAvg ? Qr : Math.min(this.minWindowAvg, Qr), null === this.episode && Qr < 20 ? (this.episode = {
          startedAtMs: Sr - 5e3,
          minFps: Math.min(...this.recent),
          sum: 5 * Qr,
          count: 5
        }, this.events.onEpisodeStarted(Qr)) : null !== this.episode && Qr >= 25 && this.endEpisode(Sr)
      }
      endEpisode(rr) {
        if (null === this.episode) return;
        const {
          startedAtMs: Sr,
          minFps: Qr,
          sum: Zr,
          count: Wr
        } = this.episode;
        this.episode = null, this.events.onEpisodeEnded({
          startedAtMs: Sr,
          durationMs: rr - Sr,
          minFps: ar(Qr),
          avgFps: ar(Zr / Wr)
        })
      }
      getTags() {
        return null === this.minWindowAvg ? null : {
          fps_min_bucket: Wr(this.minWindowAvg),
          fps_avg_bucket: Wr(this.sampleSum / this.sampleCount)
        }
      }
    }

    function Wr(rr) {
      return rr < 15 ? "<15" : rr < 30 ? "15-30" : rr < 50 ? "30-50" : "50+"
    }

    function ar(rr) {
      return Math.round(10 * rr) / 10
    }
  },
  41427: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Wr
    });
    var Zr = Qr(1376);

    function Wr(rr) {
      if ("error" === rr.type) {
        const {
          error: Sr,
          filename: Qr
        } = rr;
        return Sr instanceof Error && (Qr.startsWith(window.location.origin) || Qr.startsWith("wasm://"))
      }
      const Sr = rr.reason;
      if (Sr instanceof Error) {
        var Qr;
        const rr = `${Sr.name}: ${Sr.message}`;
        return !(0, Zr.r)(null !== (Qr = Sr.stack) && void 0 !== Qr ? Qr : "") && !(0, Zr.k)(rr) && !(0, Zr.n)(rr)
      }
      return "string" === typeof Sr && !(0, Zr.k)(Sr)
    }
  },
  41430: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Or
    });
    var Zr = Qr(26),
      Wr = Qr(2114),
      ar = Qr(38031),
      jr = Qr(34),
      Ir = Qr(1758),
      fr = Qr(41159),
      Er = Qr(9850),
      pr = Qr(1885),
      xr = Qr(2135),
      mr = Qr(43),
      Nr = Qr(41403),
      Ur = Qr(2137),
      tr = Qr(7469);
    const hr = [...Object.values(Ur.i).flat(), "ShiftLeft", "ShiftRight", "Enter", "KeyT", "Slash", "Escape", "Tab", "MetaLeft", "MetaRight", "ContextMenu", "PrintScreen", "ScrollLock", "Pause", "NumLock", "F1", "F5", "F6", "F7", "F11", "F12", "Mouse4", "Mouse5"],
      zr = [
        [1, "Mouse1"],
        [4, "Mouse2"],
        [2, "Mouse3"],
        [8, "Mouse4"],
        [16, "Mouse5"]
      ],
      Yr = {
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
    class nr {
      constructor(rr) {
        this.source = rr, this.keyListeners = [], this.actionsListeners = [], this.pointerLockListeners = [], this.wI = new Uint8Array(tr.b.length), this.heldCount = 0, this.actionBits = 0, this.typing = !1, this.pointerLocked = !1, this.mouseButtons = 0, this.keyTable = null, rr.onBindingsChanged((() => {
          this.keyTable = null
        }))
      }
      onKey(rr) {
        return Kr(this.keyListeners, rr)
      }
      onUnboundKey(rr) {
        return this.onKey(((Sr, Qr, Zr, Wr, ar, jr) => {
          Qr && Wr && !Zr && rr(Sr, jr)
        }))
      }
      onActions(rr) {
        return Kr(this.actionsListeners, rr)
      }
      onPointerLock(rr) {
        return Kr(this.pointerLockListeners, rr)
      }
      getActionBits() {
        return this.actionBits
      }
      listen(rr, Sr) {
        this.typing = this.source.isTyping(Sr.activeElement), this.pointerLocked = null !== Sr.pointerLockElement;
        const Qr = {
          capture: !0,
          passive: !0
        };
        rr.addEventListener("keydown", (rr => {
          this.setTyping(this.source.isTyping(er(rr))), rr.isComposing || this.typing || this.keyDown(rr.code, rr.altKey || rr.ctrlKey || rr.metaKey)
        }), Qr), rr.addEventListener("keyup", (rr => {
          this.typing || ("MetaLeft" === rr.code || "MetaRight" === rr.code ? this.releaseAll() : this.keyUp((0, tr.c)(rr.code)))
        }), Qr);
        const Zr = rr => {
          "mouse" === rr.pointerType && rr.isTrusted && this.setMouseButtons(rr.buttons, rr.altKey || rr.ctrlKey || rr.metaKey)
        };
        rr.addEventListener("pointerdown", Zr, Qr), rr.addEventListener("pointermove", Zr, Qr), rr.addEventListener("pointerup", Zr, Qr), rr.addEventListener("focusin", (rr => {
          this.setTyping(this.source.isTyping(er(rr)))
        }), Qr), rr.addEventListener("focusout", (rr => {
          this.setTyping(this.source.isTyping(rr.relatedTarget))
        }), Qr), rr.addEventListener("blur", (Sr => {
          Sr.target === rr && this.releaseAll()
        }), Qr), Sr.addEventListener("visibilitychange", (() => {
          Sr.hidden && this.releaseAll()
        })), Sr.addEventListener("pointerlockchange", (() => {
          const rr = null !== Sr.pointerLockElement;
          if (rr !== this.pointerLocked) {
            this.pointerLocked = rr;
            const Sr = this.source.now();
            for (const Qr of this.pointerLockListeners) Qr(rr, Sr)
          }
        }))
      }
      keyDown(rr, Sr) {
        const Qr = (0, tr.c)(rr);
        if (0 !== this.wI[Qr]) return;
        const Zr = this.source.isInPlay(),
          Wr = Zr ? this.getKeyTable() : null,
          ar = null === Wr || Sr || 1 === Wr.bound[Qr],
          jr = null !== Wr && 0 !== Wr.actionBits[Qr];
        this.wI[Qr] = 1 + (ar ? 1 : 0) + (Zr ? 2 : 0) + (jr ? 4 : 0), this.heldCount++, this.emit(Qr, !0, ar, Zr, jr), jr && this.updateActionBits()
      }
      keyUp(rr) {
        this.release(rr) && this.updateActionBits()
      }
      setMouseButtons(rr, Sr) {
        const Qr = rr ^ this.mouseButtons;
        if (0 !== Qr) {
          this.mouseButtons = rr;
          for (const [Zr, Wr] of zr) 0 !== (Qr & Zr) && (0 === (rr & Zr) ? this.keyUp((0, tr.c)(Wr)) : !this.typing && this.source.isInPlay() && this.keyDown(Wr, Sr))
        }
      }
      releaseAll() {
        let rr = !1;
        for (let Sr = 0; this.heldCount > 0 && Sr < this.wI.length; Sr++) rr = this.release(Sr) || rr;
        this.mouseButtons = 0, rr && this.updateActionBits()
      }
      release(rr) {
        const Sr = this.wI[rr];
        if (0 === Sr) return !1;
        this.wI[rr] = 0, this.heldCount--;
        const Qr = 0 !== (Sr - 1 & 2);
        return this.emit(rr, !1, 0 !== (Sr - 1 & 1), Qr, 0 !== (Sr - 1 & 4)), Qr
      }
      updateActionBits() {
        let rr = 0;
        if (this.heldCount > 0) {
          const Sr = this.getKeyTable().actionBits;
          for (let Qr = 0; Qr < this.wI.length; Qr++) {
            const Zr = this.wI[Qr];
            0 !== Zr && 0 !== (Zr - 1 & 2) && (rr |= Sr[Qr])
          }
        }
        if (rr === this.actionBits) return;
        this.actionBits = rr;
        const Sr = this.source.now();
        for (const Qr of this.actionsListeners) Qr(rr, Sr)
      }
      getKeyTable() {
        return this.keyTable ??= function(rr, Sr) {
          const Qr = new Uint8Array(tr.b.length),
            Zr = new Uint16Array(tr.b.length);
          Qr[0] = 1;
          for (const Wr of hr) Qr[(0, tr.c)(Wr)] = 1;
          for (const [Wr, ar] of Object.entries(rr)) {
            if (Sr.has(Wr)) continue;
            const rr = Yr[Wr],
              jr = void 0 === rr ? 0 : (0, tr.h)(rr);
            for (const Sr of ar) {
              const rr = (0, tr.c)(Sr);
              Qr[rr] = 1, 0 !== rr && (Zr[rr] |= jr)
            }
          }
          return {
            bound: Qr,
            actionBits: Zr
          }
        }(this.source.getBindings(), this.source.ignoredActions), this.keyTable
      }
      setTyping(rr) {
        rr && !this.typing && (this.typing = !0, this.releaseAll()), this.typing = rr
      }
      emit(rr, Sr, Qr, Zr, Wr) {
        const ar = tr.b[rr],
          jr = this.source.now();
        for (const Ir of this.keyListeners) Ir(ar, Sr, Qr, Zr, Wr, jr)
      }
    }

    function er(rr) {
      var Sr;
      return null !== (Sr = rr.composedPath()[0]) && void 0 !== Sr ? Sr : rr.target
    }

    function Kr(rr, Sr) {
      return rr.push(Sr), () => {
        const Qr = rr.indexOf(Sr); - 1 !== Qr && rr.splice(Qr, 1)
      }
    }
    const yr = "replayInput",
      Br = new Set([...xr.z, ...xr.h].filter((rr => "replayViewerOpen" !== rr && "toggleFreeCam" !== rr)));
    let Tr = null;

    function vr() {
      var rr;
      return (null !== (rr = Wr.d.get("customButtons")) && void 0 !== rr ? rr : []).filter(Er.f).map((rr => rr.keycode))
    }

    function Or() {
      return null === Tr && "0" !== String(mr.j.getItem(yr)) && (Tr = new nr({
        isInPlay: () => "inGame" === Zr.c.get("gameState") && !(0, Ir.l)() && !(0, ar.e)(),
        isTyping: pr.isTextEntry,
        getBindings: () => ({
          ...xr.q,
          customButtons: vr(),
          pageKeys: (0, fr.d)()
        }),
        ignoredActions: Br,
        onBindingsChanged: rr => {
          jr.i.subscribe("customBindingsChanged", rr), Wr.d.subscribe("customButtons", rr), Wr.d.subscribeReset(rr), (0, fr.h)(rr)
        },
        now: Nr.e
      }), Tr.listen(window, document)), Tr
    }
  },
  41159: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => jr,
      d: () => Ir,
      h: () => fr
    });
    const Zr = new Map,
      Wr = [];

    function ar() {
      for (const rr of Wr) rr()
    }

    function jr(rr) {
      var Sr;
      return Zr.set(rr, (null !== (Sr = Zr.get(rr)) && void 0 !== Sr ? Sr : 0) + 1), ar(), () => {
        const Sr = Zr.get(rr) - 1;
        0 === Sr ? Zr.delete(rr) : Zr.set(rr, Sr), ar()
      }
    }

    function Ir() {
      return [...Zr.keys()]
    }

    function fr(rr) {
      Wr.push(rr)
    }
  },
  7464: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Zr,
      c: () => ar,
      e: () => Wr,
      g: () => jr,
      j: () => fr,
      n: () => Ir
    });
    const Zr = ["page_loaded", "game_loading", "game_playable", "first_input", "pointer_locked", "first_move", "first_block", "played_60s", "second_game"],
      Wr = ["joined", "game_playable", "first_input", "pointer_locked", "first_move", "first_block", "played_60s"],
      ar = ["unbound_key_burst", "idle_pointer_locked", "menu_toggling", "block_change_refused", "pointer_lock_failed", "rage_quit"],
      jr = 3;

    function Ir(rr) {
      return void 0 === rr ? -1 : Wr.indexOf(rr)
    }

    function fr(rr, Sr) {
      return Ir(Sr) > Ir(rr) ? Sr : rr
    }
  },
  7469: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Zr,
      c: () => ar,
      f: () => Ir,
      h: () => Er
    });
    const Zr = ["Unidentified", ...[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].map((rr => `Key${rr}`)), ...Array.from({
        length: 10
      }, ((rr, Sr) => `Digit${Sr}`)), ...Array.from({
        length: 12
      }, ((rr, Sr) => `F${Sr+1}`)), "Escape", "Tab", "CapsLock", "ShiftLeft", "ShiftRight", "ControlLeft", "ControlRight", "AltLeft", "AltRight", "MetaLeft", "MetaRight", "Space", "Enter", "Backspace", "Delete", "Insert", "Home", "End", "PageUp", "PageDown", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Minus", "Equal", "BracketLeft", "BracketRight", "Backslash", "IntlBackslash", "Semicolon", "Quote", "Backquote", "Comma", "Period", "Slash", "ContextMenu", "PrintScreen", "ScrollLock", "Pause", "NumLock", ...Array.from({
        length: 10
      }, ((rr, Sr) => `Numpad${Sr}`)), "NumpadAdd", "NumpadSubtract", "NumpadMultiply", "NumpadDivide", "NumpadDecimal", "NumpadEnter", "Mouse1", "Mouse2", "Mouse3", "Mouse4", "Mouse5"],
      Wr = new Map(Zr.map(((rr, Sr) => [rr, Sr])));

    function ar(rr) {
      var Sr;
      return null !== (Sr = Wr.get(rr)) && void 0 !== Sr ? Sr : 0
    }
    const jr = new Set(["Minus", "Equal", "BracketLeft", "BracketRight", "Backslash", "IntlBackslash", "Semicolon", "Quote", "Backquote", "Comma", "Period", "Slash", "NumpadAdd", "NumpadSubtract", "NumpadMultiply", "NumpadDivide", "NumpadDecimal"]);

    function Ir(rr) {
      return /^Key[A-Z]$/.test(rr) ? "letter" : /^(Digit|Numpad)\d$/.test(rr) ? "digit" : jr.has(rr) ? "symbol" : null
    }
    const fr = ["forward", "backward", "left", "right", "jump", "sprint", "crouch", "primary", "secondary", "middle"];

    function Er(rr) {
      return 1 << fr.indexOf(rr)
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);