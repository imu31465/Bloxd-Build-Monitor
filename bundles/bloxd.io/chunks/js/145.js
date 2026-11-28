export const id = 145;
export const ids = [145];
export const modules = {
  10085: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Vb,
      f: () => pb
    });
    var eb = Mb(2199);
    const Hb = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      pb = bb => "string" === typeof bb.icon && "" !== bb.icon && "string" === typeof bb.keycode && Hb.test(bb.keycode),
      Vb = bb => "Space" === bb ? "_" : eb.f[bb]
  },
  37781: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Hb,
      f: () => pb
    });
    let eb = !1;

    function Hb() {
      return eb
    }

    function pb(bb) {
      return eb !== bb && (eb = bb, !0)
    }
  },
  41220: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => eb
    });
    class eb {
      constructor(bb) {
        this.events = bb, this.recent = [], this.episode = null, this.sampleSum = 0, this.sampleCount = 0, this.minWindowAvg = null
      }
      addSample(bb, wb) {
        if (null === bb) return this.recent.length = 0, void this.endEpisode(wb);
        if (this.sampleSum += bb, this.sampleCount++, this.recent.push(bb), this.recent.length > 5 && this.recent.shift(), null !== this.episode && (this.episode.minFps = Math.min(this.episode.minFps, bb), this.episode.sum += bb, this.episode.count++), this.recent.length < 5) return;
        const Mb = function(bb) {
          let wb = 0;
          for (const Mb of bb) wb += Mb;
          return wb / bb.length
        }(this.recent);
        this.minWindowAvg = null === this.minWindowAvg ? Mb : Math.min(this.minWindowAvg, Mb), null === this.episode && Mb < 20 ? (this.episode = {
          startedAtMs: wb - 5e3,
          minFps: Math.min(...this.recent),
          sum: 5 * Mb,
          count: 5
        }, this.events.onEpisodeStarted(Mb)) : null !== this.episode && Mb >= 25 && this.endEpisode(wb)
      }
      endEpisode(bb) {
        if (null === this.episode) return;
        const {
          startedAtMs: wb,
          minFps: Mb,
          sum: eb,
          count: Hb
        } = this.episode;
        this.episode = null, this.events.onEpisodeEnded({
          startedAtMs: wb,
          durationMs: bb - wb,
          minFps: pb(Mb),
          avgFps: pb(eb / Hb)
        })
      }
      getTags() {
        return null === this.minWindowAvg ? null : {
          fps_min_bucket: Hb(this.minWindowAvg),
          fps_avg_bucket: Hb(this.sampleSum / this.sampleCount)
        }
      }
    }

    function Hb(bb) {
      return bb < 15 ? "<15" : bb < 30 ? "15-30" : bb < 50 ? "30-50" : "50+"
    }

    function pb(bb) {
      return Math.round(10 * bb) / 10
    }
  },
  41204: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Hb
    });
    var eb = Mb(1408);

    function Hb(bb) {
      if ("error" === bb.type) {
        const {
          error: wb,
          filename: Mb
        } = bb;
        return wb instanceof Error && (Mb.startsWith(window.location.origin) || Mb.startsWith("wasm://"))
      }
      const wb = bb.reason;
      if (wb instanceof Error) {
        var Mb;
        const bb = `${wb.name}: ${wb.message}`;
        return !(0, eb.l)(null !== (Mb = wb.stack) && void 0 !== Mb ? Mb : "") && !(0, eb.h)(bb) && !(0, eb.i)(bb)
      }
      return "string" === typeof wb && !(0, eb.h)(wb)
    }
  },
  41210: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => rb
    });
    var eb = Mb(26),
      Hb = Mb(2167),
      pb = Mb(37781),
      Vb = Mb(29),
      gb = Mb(1821),
      lb = Mb(40939),
      Lb = Mb(10085),
      Ib = Mb(1965),
      Ob = Mb(2194),
      Ub = Mb(43),
      tb = Mb(41179),
      Cb = Mb(2196),
      Eb = Mb(7695);
    const Fb = [...Object.values(Cb.h).flat(), "ShiftLeft", "ShiftRight", "Enter", "KeyT", "Slash", "Escape", "Tab", "MetaLeft", "MetaRight", "ContextMenu", "PrintScreen", "ScrollLock", "Pause", "NumLock", "F1", "F5", "F6", "F7", "F11", "F12", "Mouse4", "Mouse5"],
      Bb = [
        [1, "Mouse1"],
        [4, "Mouse2"],
        [2, "Mouse3"],
        [8, "Mouse4"],
        [16, "Mouse5"]
      ],
      sb = {
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
    class mb {
      constructor(bb) {
        this.source = bb, this.keyListeners = [], this.actionsListeners = [], this.pointerLockListeners = [], this.dg = new Uint8Array(Eb.c.length), this.heldCount = 0, this.actionBits = 0, this.typing = !1, this.pointerLocked = !1, this.mouseButtons = 0, this.keyTable = null, bb.onBindingsChanged((() => {
          this.keyTable = null
        }))
      }
      onKey(bb) {
        return zb(this.keyListeners, bb)
      }
      onUnboundKey(bb) {
        return this.onKey(((wb, Mb, eb, Hb, pb, Vb) => {
          Mb && Hb && !eb && bb(wb, Vb)
        }))
      }
      onActions(bb) {
        return zb(this.actionsListeners, bb)
      }
      onPointerLock(bb) {
        return zb(this.pointerLockListeners, bb)
      }
      getActionBits() {
        return this.actionBits
      }
      listen(bb, wb) {
        this.typing = this.source.isTyping(wb.activeElement), this.pointerLocked = null !== wb.pointerLockElement;
        const Mb = {
          capture: !0,
          passive: !0
        };
        bb.addEventListener("keydown", (bb => {
          this.setTyping(this.source.isTyping(hb(bb))), bb.isComposing || this.typing || this.keyDown(bb.code, bb.altKey || bb.ctrlKey || bb.metaKey)
        }), Mb), bb.addEventListener("keyup", (bb => {
          this.typing || ("MetaLeft" === bb.code || "MetaRight" === bb.code ? this.releaseAll() : this.keyUp((0, Eb.f)(bb.code)))
        }), Mb);
        const eb = bb => {
          "mouse" === bb.pointerType && bb.isTrusted && this.setMouseButtons(bb.buttons, bb.altKey || bb.ctrlKey || bb.metaKey)
        };
        bb.addEventListener("pointerdown", eb, Mb), bb.addEventListener("pointermove", eb, Mb), bb.addEventListener("pointerup", eb, Mb), bb.addEventListener("focusin", (bb => {
          this.setTyping(this.source.isTyping(hb(bb)))
        }), Mb), bb.addEventListener("focusout", (bb => {
          this.setTyping(this.source.isTyping(bb.relatedTarget))
        }), Mb), bb.addEventListener("blur", (wb => {
          wb.target === bb && this.releaseAll()
        }), Mb), wb.addEventListener("visibilitychange", (() => {
          wb.hidden && this.releaseAll()
        })), wb.addEventListener("pointerlockchange", (() => {
          const bb = null !== wb.pointerLockElement;
          if (bb !== this.pointerLocked) {
            this.pointerLocked = bb;
            const wb = this.source.now();
            for (const Mb of this.pointerLockListeners) Mb(bb, wb)
          }
        }))
      }
      keyDown(bb, wb) {
        const Mb = (0, Eb.f)(bb);
        if (0 !== this.dg[Mb]) return;
        const eb = this.source.isInPlay(),
          Hb = eb ? this.getKeyTable() : null,
          pb = null === Hb || wb || 1 === Hb.bound[Mb],
          Vb = null !== Hb && 0 !== Hb.actionBits[Mb];
        this.dg[Mb] = 1 + (pb ? 1 : 0) + (eb ? 2 : 0) + (Vb ? 4 : 0), this.heldCount++, this.emit(Mb, !0, pb, eb, Vb), Vb && this.updateActionBits()
      }
      keyUp(bb) {
        this.release(bb) && this.updateActionBits()
      }
      setMouseButtons(bb, wb) {
        const Mb = bb ^ this.mouseButtons;
        if (0 !== Mb) {
          this.mouseButtons = bb;
          for (const [eb, Hb] of Bb) 0 !== (Mb & eb) && (0 === (bb & eb) ? this.keyUp((0, Eb.f)(Hb)) : !this.typing && this.source.isInPlay() && this.keyDown(Hb, wb))
        }
      }
      releaseAll() {
        let bb = !1;
        for (let wb = 0; this.heldCount > 0 && wb < this.dg.length; wb++) bb = this.release(wb) || bb;
        this.mouseButtons = 0, bb && this.updateActionBits()
      }
      release(bb) {
        const wb = this.dg[bb];
        if (0 === wb) return !1;
        this.dg[bb] = 0, this.heldCount--;
        const Mb = 0 !== (wb - 1 & 2);
        return this.emit(bb, !1, 0 !== (wb - 1 & 1), Mb, 0 !== (wb - 1 & 4)), Mb
      }
      updateActionBits() {
        let bb = 0;
        if (this.heldCount > 0) {
          const wb = this.getKeyTable().actionBits;
          for (let Mb = 0; Mb < this.dg.length; Mb++) {
            const eb = this.dg[Mb];
            0 !== eb && 0 !== (eb - 1 & 2) && (bb |= wb[Mb])
          }
        }
        if (bb === this.actionBits) return;
        this.actionBits = bb;
        const wb = this.source.now();
        for (const Mb of this.actionsListeners) Mb(bb, wb)
      }
      getKeyTable() {
        return this.keyTable ??= function(bb, wb) {
          const Mb = new Uint8Array(Eb.c.length),
            eb = new Uint16Array(Eb.c.length);
          Mb[0] = 1;
          for (const Hb of Fb) Mb[(0, Eb.f)(Hb)] = 1;
          for (const [Hb, pb] of Object.entries(bb)) {
            if (wb.has(Hb)) continue;
            const bb = sb[Hb],
              Vb = void 0 === bb ? 0 : (0, Eb.i)(bb);
            for (const wb of pb) {
              const bb = (0, Eb.f)(wb);
              Mb[bb] = 1, 0 !== bb && (eb[bb] |= Vb)
            }
          }
          return {
            bound: Mb,
            actionBits: eb
          }
        }(this.source.getBindings(), this.source.ignoredActions), this.keyTable
      }
      setTyping(bb) {
        bb && !this.typing && (this.typing = !0, this.releaseAll()), this.typing = bb
      }
      emit(bb, wb, Mb, eb, Hb) {
        const pb = Eb.c[bb],
          Vb = this.source.now();
        for (const gb of this.keyListeners) gb(pb, wb, Mb, eb, Hb, Vb)
      }
    }

    function hb(bb) {
      var wb;
      return null !== (wb = bb.composedPath()[0]) && void 0 !== wb ? wb : bb.target
    }

    function zb(bb, wb) {
      return bb.push(wb), () => {
        const Mb = bb.indexOf(wb); - 1 !== Mb && bb.splice(Mb, 1)
      }
    }
    const Xb = "replayInput",
      xb = new Set([...Ob.v, ...Ob.j].filter((bb => "replayViewerOpen" !== bb && "toggleFreeCam" !== bb)));
    let jb = null;

    function Kb() {
      var bb;
      return (null !== (bb = Hb.c.get("customButtons")) && void 0 !== bb ? bb : []).filter(Lb.f).map((bb => bb.keycode))
    }

    function rb() {
      return null === jb && "0" !== String(Ub.i.getItem(Xb)) && (jb = new mb({
        isInPlay: () => "inGame" === eb.c.get("gameState") && !(0, gb.q)() && !(0, pb.e)(),
        isTyping: Ib.isTextEntry,
        getBindings: () => ({
          ...Ob.p,
          customButtons: Kb(),
          pageKeys: (0, lb.f)()
        }),
        ignoredActions: xb,
        onBindingsChanged: bb => {
          Vb.k.subscribe("customBindingsChanged", bb), Hb.c.subscribe("customButtons", bb), Hb.c.subscribeReset(bb), (0, lb.j)(bb)
        },
        now: tb.e
      }), jb.listen(window, document)), jb
    }
  },
  40939: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Vb,
      f: () => gb,
      j: () => lb
    });
    const eb = new Map,
      Hb = [];

    function pb() {
      for (const bb of Hb) bb()
    }

    function Vb(bb) {
      var wb;
      return eb.set(bb, (null !== (wb = eb.get(bb)) && void 0 !== wb ? wb : 0) + 1), pb(), () => {
        const wb = eb.get(bb) - 1;
        0 === wb ? eb.delete(bb) : eb.set(bb, wb), pb()
      }
    }

    function gb() {
      return [...eb.keys()]
    }

    function lb(bb) {
      Hb.push(bb)
    }
  },
  7682: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => eb,
      c: () => pb,
      e: () => Hb,
      i: () => Vb,
      l: () => lb,
      n: () => gb
    });
    const eb = ["page_loaded", "game_loading", "game_playable", "first_input", "pointer_locked", "first_move", "first_block", "played_60s", "second_game"],
      Hb = ["joined", "game_playable", "first_input", "pointer_locked", "first_move", "first_block", "played_60s"],
      pb = ["unbound_key_burst", "idle_pointer_locked", "menu_toggling", "block_change_refused", "pointer_lock_failed", "rage_quit"],
      Vb = 3;

    function gb(bb) {
      return void 0 === bb ? -1 : Hb.indexOf(bb)
    }

    function lb(bb, wb) {
      return gb(wb) > gb(bb) ? wb : bb
    }
  },
  7695: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => eb,
      f: () => pb,
      g: () => gb,
      i: () => Lb
    });
    const eb = ["Unidentified", ...[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].map((bb => `Key${bb}`)), ...Array.from({
        length: 10
      }, ((bb, wb) => `Digit${wb}`)), ...Array.from({
        length: 12
      }, ((bb, wb) => `F${wb+1}`)), "Escape", "Tab", "CapsLock", "ShiftLeft", "ShiftRight", "ControlLeft", "ControlRight", "AltLeft", "AltRight", "MetaLeft", "MetaRight", "Space", "Enter", "Backspace", "Delete", "Insert", "Home", "End", "PageUp", "PageDown", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Minus", "Equal", "BracketLeft", "BracketRight", "Backslash", "IntlBackslash", "Semicolon", "Quote", "Backquote", "Comma", "Period", "Slash", "ContextMenu", "PrintScreen", "ScrollLock", "Pause", "NumLock", ...Array.from({
        length: 10
      }, ((bb, wb) => `Numpad${wb}`)), "NumpadAdd", "NumpadSubtract", "NumpadMultiply", "NumpadDivide", "NumpadDecimal", "NumpadEnter", "Mouse1", "Mouse2", "Mouse3", "Mouse4", "Mouse5"],
      Hb = new Map(eb.map(((bb, wb) => [bb, wb])));

    function pb(bb) {
      var wb;
      return null !== (wb = Hb.get(bb)) && void 0 !== wb ? wb : 0
    }
    const Vb = new Set(["Minus", "Equal", "BracketLeft", "BracketRight", "Backslash", "IntlBackslash", "Semicolon", "Quote", "Backquote", "Comma", "Period", "Slash", "NumpadAdd", "NumpadSubtract", "NumpadMultiply", "NumpadDivide", "NumpadDecimal"]);

    function gb(bb) {
      return /^Key[A-Z]$/.test(bb) ? "letter" : /^(Digit|Numpad)\d$/.test(bb) ? "digit" : Vb.has(bb) ? "symbol" : null
    }
    const lb = ["forward", "backward", "left", "right", "jump", "sprint", "crouch", "primary", "secondary", "middle"];

    function Lb(bb) {
      return 1 << lb.indexOf(bb)
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);