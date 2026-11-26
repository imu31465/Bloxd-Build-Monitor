export const id = 136;
export const ids = [136];
export const modules = {
  9414: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => oB,
      e: () => QB
    });
    var YB = GB(2098);
    const DB = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      QB = BB => "string" === typeof BB.icon && "" !== BB.icon && "string" === typeof BB.keycode && DB.test(BB.keycode),
      oB = BB => "Space" === BB ? "_" : YB.h[BB]
  },
  37166: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => DB,
      f: () => QB
    });
    let YB = !1;

    function DB() {
      return YB
    }

    function QB(BB) {
      return YB !== BB && (YB = BB, !0)
    }
  },
  40546: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => YB
    });
    class YB {
      constructor(BB) {
        this.events = BB, this.recent = [], this.episode = null, this.sampleSum = 0, this.sampleCount = 0, this.minWindowAvg = null
      }
      addSample(BB, OB) {
        if (null === BB) return this.recent.length = 0, void this.endEpisode(OB);
        if (this.sampleSum += BB, this.sampleCount++, this.recent.push(BB), this.recent.length > 5 && this.recent.shift(), null !== this.episode && (this.episode.minFps = Math.min(this.episode.minFps, BB), this.episode.sum += BB, this.episode.count++), this.recent.length < 5) return;
        const GB = function(BB) {
          let OB = 0;
          for (const GB of BB) OB += GB;
          return OB / BB.length
        }(this.recent);
        this.minWindowAvg = null === this.minWindowAvg ? GB : Math.min(this.minWindowAvg, GB), null === this.episode && GB < 20 ? (this.episode = {
          startedAtMs: OB - 5e3,
          minFps: Math.min(...this.recent),
          sum: 5 * GB,
          count: 5
        }, this.events.onEpisodeStarted(GB)) : null !== this.episode && GB >= 25 && this.endEpisode(OB)
      }
      endEpisode(BB) {
        if (null === this.episode) return;
        const {
          startedAtMs: OB,
          minFps: GB,
          sum: YB,
          count: DB
        } = this.episode;
        this.episode = null, this.events.onEpisodeEnded({
          startedAtMs: OB,
          durationMs: BB - OB,
          minFps: QB(GB),
          avgFps: QB(YB / DB)
        })
      }
      getTags() {
        return null === this.minWindowAvg ? null : {
          fps_min_bucket: DB(this.minWindowAvg),
          fps_avg_bucket: DB(this.sampleSum / this.sampleCount)
        }
      }
    }

    function DB(BB) {
      return BB < 15 ? "<15" : BB < 30 ? "15-30" : BB < 50 ? "30-50" : "50+"
    }

    function QB(BB) {
      return Math.round(10 * BB) / 10
    }
  },
  40523: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => DB
    });
    var YB = GB(1314);

    function DB(BB) {
      if ("error" === BB.type) {
        const {
          error: OB,
          filename: GB
        } = BB;
        return OB instanceof Error && (GB.startsWith(window.location.origin) || GB.startsWith("wasm://"))
      }
      const OB = BB.reason;
      if (OB instanceof Error) {
        var GB;
        const BB = `${OB.name}: ${OB.message}`;
        return !(0, YB.h)(null !== (GB = OB.stack) && void 0 !== GB ? GB : "") && !(0, YB.c)(BB) && !(0, YB.f)(BB)
      }
      return "string" === typeof OB && !(0, YB.c)(OB)
    }
  },
  40529: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => kB
    });
    var YB = GB(16),
      DB = GB(2050),
      QB = GB(37166),
      oB = GB(25),
      jB = GB(1699),
      yB = GB(40244),
      JB = GB(9414),
      MB = GB(1822),
      PB = GB(2085),
      zB = GB(31),
      lB = GB(40497),
      pB = GB(2091),
      qB = GB(7043);
    const ZB = [...Object.values(pB.g).flat(), "ShiftLeft", "ShiftRight", "Enter", "KeyT", "Slash", "Escape", "Tab", "MetaLeft", "MetaRight", "ContextMenu", "PrintScreen", "ScrollLock", "Pause", "NumLock", "F1", "F5", "F6", "F7", "F11", "F12", "Mouse4", "Mouse5"],
      NB = [
        [1, "Mouse1"],
        [4, "Mouse2"],
        [2, "Mouse3"],
        [8, "Mouse4"],
        [16, "Mouse5"]
      ],
      RB = {
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
    class WB {
      constructor(BB) {
        this.source = BB, this.keyListeners = [], this.actionsListeners = [], this.pointerLockListeners = [], this.sJ = new Uint8Array(qB.b.length), this.heldCount = 0, this.actionBits = 0, this.typing = !1, this.pointerLocked = !1, this.mouseButtons = 0, this.keyTable = null, BB.onBindingsChanged((() => {
          this.keyTable = null
        }))
      }
      onKey(BB) {
        return VB(this.keyListeners, BB)
      }
      onUnboundKey(BB) {
        return this.onKey(((OB, GB, YB, DB, QB, oB) => {
          GB && DB && !YB && BB(OB, oB)
        }))
      }
      onActions(BB) {
        return VB(this.actionsListeners, BB)
      }
      onPointerLock(BB) {
        return VB(this.pointerLockListeners, BB)
      }
      getActionBits() {
        return this.actionBits
      }
      listen(BB, OB) {
        this.typing = this.source.isTyping(OB.activeElement), this.pointerLocked = null !== OB.pointerLockElement;
        const GB = {
          capture: !0,
          passive: !0
        };
        BB.addEventListener("keydown", (BB => {
          this.setTyping(this.source.isTyping(AB(BB))), BB.isComposing || this.typing || this.keyDown(BB.code, BB.altKey || BB.ctrlKey || BB.metaKey)
        }), GB), BB.addEventListener("keyup", (BB => {
          this.typing || ("MetaLeft" === BB.code || "MetaRight" === BB.code ? this.releaseAll() : this.keyUp((0, qB.c)(BB.code)))
        }), GB);
        const YB = BB => {
          "mouse" === BB.pointerType && BB.isTrusted && this.setMouseButtons(BB.buttons, BB.altKey || BB.ctrlKey || BB.metaKey)
        };
        BB.addEventListener("pointerdown", YB, GB), BB.addEventListener("pointermove", YB, GB), BB.addEventListener("pointerup", YB, GB), BB.addEventListener("focusin", (BB => {
          this.setTyping(this.source.isTyping(AB(BB)))
        }), GB), BB.addEventListener("focusout", (BB => {
          this.setTyping(this.source.isTyping(BB.relatedTarget))
        }), GB), BB.addEventListener("blur", (OB => {
          OB.target === BB && this.releaseAll()
        }), GB), OB.addEventListener("visibilitychange", (() => {
          OB.hidden && this.releaseAll()
        })), OB.addEventListener("pointerlockchange", (() => {
          const BB = null !== OB.pointerLockElement;
          if (BB !== this.pointerLocked) {
            this.pointerLocked = BB;
            const OB = this.source.now();
            for (const GB of this.pointerLockListeners) GB(BB, OB)
          }
        }))
      }
      keyDown(BB, OB) {
        const GB = (0, qB.c)(BB);
        if (0 !== this.sJ[GB]) return;
        const YB = this.source.isInPlay(),
          DB = YB ? this.getKeyTable() : null,
          QB = null === DB || OB || 1 === DB.bound[GB],
          oB = null !== DB && 0 !== DB.actionBits[GB];
        this.sJ[GB] = 1 + (QB ? 1 : 0) + (YB ? 2 : 0) + (oB ? 4 : 0), this.heldCount++, this.emit(GB, !0, QB, YB, oB), oB && this.updateActionBits()
      }
      keyUp(BB) {
        this.release(BB) && this.updateActionBits()
      }
      setMouseButtons(BB, OB) {
        const GB = BB ^ this.mouseButtons;
        if (0 !== GB) {
          this.mouseButtons = BB;
          for (const [YB, DB] of NB) 0 !== (GB & YB) && (0 === (BB & YB) ? this.keyUp((0, qB.c)(DB)) : !this.typing && this.source.isInPlay() && this.keyDown(DB, OB))
        }
      }
      releaseAll() {
        let BB = !1;
        for (let OB = 0; this.heldCount > 0 && OB < this.sJ.length; OB++) BB = this.release(OB) || BB;
        this.mouseButtons = 0, BB && this.updateActionBits()
      }
      release(BB) {
        const OB = this.sJ[BB];
        if (0 === OB) return !1;
        this.sJ[BB] = 0, this.heldCount--;
        const GB = 0 !== (OB - 1 & 2);
        return this.emit(BB, !1, 0 !== (OB - 1 & 1), GB, 0 !== (OB - 1 & 4)), GB
      }
      updateActionBits() {
        let BB = 0;
        if (this.heldCount > 0) {
          const OB = this.getKeyTable().actionBits;
          for (let GB = 0; GB < this.sJ.length; GB++) {
            const YB = this.sJ[GB];
            0 !== YB && 0 !== (YB - 1 & 2) && (BB |= OB[GB])
          }
        }
        if (BB === this.actionBits) return;
        this.actionBits = BB;
        const OB = this.source.now();
        for (const GB of this.actionsListeners) GB(BB, OB)
      }
      getKeyTable() {
        return this.keyTable ??= function(BB, OB) {
          const GB = new Uint8Array(qB.b.length),
            YB = new Uint16Array(qB.b.length);
          GB[0] = 1;
          for (const DB of ZB) GB[(0, qB.c)(DB)] = 1;
          for (const [DB, QB] of Object.entries(BB)) {
            if (OB.has(DB)) continue;
            const BB = RB[DB],
              oB = void 0 === BB ? 0 : (0, qB.f)(BB);
            for (const OB of QB) {
              const BB = (0, qB.c)(OB);
              GB[BB] = 1, 0 !== BB && (YB[BB] |= oB)
            }
          }
          return {
            bound: GB,
            actionBits: YB
          }
        }(this.source.getBindings(), this.source.ignoredActions), this.keyTable
      }
      setTyping(BB) {
        BB && !this.typing && (this.typing = !0, this.releaseAll()), this.typing = BB
      }
      emit(BB, OB, GB, YB, DB) {
        const QB = qB.b[BB],
          oB = this.source.now();
        for (const jB of this.keyListeners) jB(QB, OB, GB, YB, DB, oB)
      }
    }

    function AB(BB) {
      var OB;
      return null !== (OB = BB.composedPath()[0]) && void 0 !== OB ? OB : BB.target
    }

    function VB(BB, OB) {
      return BB.push(OB), () => {
        const GB = BB.indexOf(OB); - 1 !== GB && BB.splice(GB, 1)
      }
    }
    const SB = "replayInput",
      nB = new Set([...PB.y, ...PB.k].filter((BB => "replayViewerOpen" !== BB && "toggleFreeCam" !== BB)));
    let UB = null;

    function fB() {
      var BB;
      return (null !== (BB = DB.e.get("customButtons")) && void 0 !== BB ? BB : []).filter(JB.e).map((BB => BB.keycode))
    }

    function kB() {
      return null === UB && "0" !== String(zB.g.getItem(SB)) && (UB = new WB({
        isInPlay: () => "inGame" === YB.c.get("gameState") && !(0, jB.r)() && !(0, QB.b)(),
        isTyping: MB.isTextEntry,
        getBindings: () => ({
          ...PB.t,
          customButtons: fB(),
          pageKeys: (0, yB.e)()
        }),
        ignoredActions: nB,
        onBindingsChanged: BB => {
          oB.o.subscribe("customBindingsChanged", BB), DB.e.subscribe("customButtons", BB), DB.e.subscribeReset(BB), (0, yB.i)(BB)
        },
        now: lB.e
      }), UB.listen(window, document)), UB
    }
  },
  40244: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => oB,
      e: () => jB,
      i: () => yB
    });
    const YB = new Map,
      DB = [];

    function QB() {
      for (const BB of DB) BB()
    }

    function oB(BB) {
      var OB;
      return YB.set(BB, (null !== (OB = YB.get(BB)) && void 0 !== OB ? OB : 0) + 1), QB(), () => {
        const OB = YB.get(BB) - 1;
        0 === OB ? YB.delete(BB) : YB.set(BB, OB), QB()
      }
    }

    function jB() {
      return [...YB.keys()]
    }

    function yB(BB) {
      DB.push(BB)
    }
  },
  7028: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => YB,
      h: () => QB,
      j: () => DB,
      k: () => oB,
      l: () => yB,
      n: () => jB
    });
    const YB = ["page_loaded", "game_loading", "game_playable", "first_input", "pointer_locked", "first_move", "first_block", "played_60s", "second_game"],
      DB = ["joined", "game_playable", "first_input", "pointer_locked", "first_move", "first_block", "played_60s"],
      QB = ["unbound_key_burst", "idle_pointer_locked", "menu_toggling", "block_change_refused", "pointer_lock_failed", "rage_quit"],
      oB = 3;

    function jB(BB) {
      return void 0 === BB ? -1 : DB.indexOf(BB)
    }

    function yB(BB, OB) {
      return jB(OB) > jB(BB) ? OB : BB
    }
  },
  7043: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => YB,
      c: () => QB,
      e: () => jB,
      f: () => JB
    });
    const YB = ["Unidentified", ...[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].map((BB => `Key${BB}`)), ...Array.from({
        length: 10
      }, ((BB, OB) => `Digit${OB}`)), ...Array.from({
        length: 12
      }, ((BB, OB) => `F${OB+1}`)), "Escape", "Tab", "CapsLock", "ShiftLeft", "ShiftRight", "ControlLeft", "ControlRight", "AltLeft", "AltRight", "MetaLeft", "MetaRight", "Space", "Enter", "Backspace", "Delete", "Insert", "Home", "End", "PageUp", "PageDown", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Minus", "Equal", "BracketLeft", "BracketRight", "Backslash", "IntlBackslash", "Semicolon", "Quote", "Backquote", "Comma", "Period", "Slash", "ContextMenu", "PrintScreen", "ScrollLock", "Pause", "NumLock", ...Array.from({
        length: 10
      }, ((BB, OB) => `Numpad${OB}`)), "NumpadAdd", "NumpadSubtract", "NumpadMultiply", "NumpadDivide", "NumpadDecimal", "NumpadEnter", "Mouse1", "Mouse2", "Mouse3", "Mouse4", "Mouse5"],
      DB = new Map(YB.map(((BB, OB) => [BB, OB])));

    function QB(BB) {
      var OB;
      return null !== (OB = DB.get(BB)) && void 0 !== OB ? OB : 0
    }
    const oB = new Set(["Minus", "Equal", "BracketLeft", "BracketRight", "Backslash", "IntlBackslash", "Semicolon", "Quote", "Backquote", "Comma", "Period", "Slash", "NumpadAdd", "NumpadSubtract", "NumpadMultiply", "NumpadDivide", "NumpadDecimal"]);

    function jB(BB) {
      return /^Key[A-Z]$/.test(BB) ? "letter" : /^(Digit|Numpad)\d$/.test(BB) ? "digit" : oB.has(BB) ? "symbol" : null
    }
    const yB = ["forward", "backward", "left", "right", "jump", "sprint", "crouch", "primary", "secondary", "middle"];

    function JB(BB) {
      return 1 << yB.indexOf(BB)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);