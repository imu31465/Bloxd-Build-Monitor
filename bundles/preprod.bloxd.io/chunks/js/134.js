export const id = 134;
export const ids = [134];
export const modules = {
  9305: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => AU,
      d: () => QU
    });
    var cU = zU(2067);
    const yU = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      QU = UU => "string" === typeof UU.icon && "" !== UU.icon && "string" === typeof UU.keycode && yU.test(UU.keycode),
      AU = UU => "Space" === UU ? "_" : cU.i[UU]
  },
  37211: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => yU,
      g: () => QU
    });
    let cU = !1;

    function yU() {
      return cU
    }

    function QU(UU) {
      return cU !== UU && (cU = UU, !0)
    }
  },
  40647: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => cU
    });
    class cU {
      constructor(UU) {
        this.events = UU, this.recent = [], this.episode = null, this.sampleSum = 0, this.sampleCount = 0, this.minWindowAvg = null
      }
      addSample(UU, XU) {
        if (null === UU) return this.recent.length = 0, void this.endEpisode(XU);
        if (this.sampleSum += UU, this.sampleCount++, this.recent.push(UU), this.recent.length > 5 && this.recent.shift(), null !== this.episode && (this.episode.minFps = Math.min(this.episode.minFps, UU), this.episode.sum += UU, this.episode.count++), this.recent.length < 5) return;
        const zU = function(UU) {
          let XU = 0;
          for (const zU of UU) XU += zU;
          return XU / UU.length
        }(this.recent);
        this.minWindowAvg = null === this.minWindowAvg ? zU : Math.min(this.minWindowAvg, zU), null === this.episode && zU < 20 ? (this.episode = {
          startedAtMs: XU - 5e3,
          minFps: Math.min(...this.recent),
          sum: 5 * zU,
          count: 5
        }, this.events.onEpisodeStarted(zU)) : null !== this.episode && zU >= 25 && this.endEpisode(XU)
      }
      endEpisode(UU) {
        if (null === this.episode) return;
        const {
          startedAtMs: XU,
          minFps: zU,
          sum: cU,
          count: yU
        } = this.episode;
        this.episode = null, this.events.onEpisodeEnded({
          startedAtMs: XU,
          durationMs: UU - XU,
          minFps: QU(zU),
          avgFps: QU(cU / yU)
        })
      }
      getTags() {
        return null === this.minWindowAvg ? null : {
          fps_min_bucket: yU(this.minWindowAvg),
          fps_avg_bucket: yU(this.sampleSum / this.sampleCount)
        }
      }
    }

    function yU(UU) {
      return UU < 15 ? "<15" : UU < 30 ? "15-30" : UU < 50 ? "30-50" : "50+"
    }

    function QU(UU) {
      return Math.round(10 * UU) / 10
    }
  },
  40626: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => yU
    });
    var cU = zU(1328);

    function yU(UU) {
      if ("error" === UU.type) {
        const {
          error: XU,
          filename: zU
        } = UU;
        return XU instanceof Error && (zU.startsWith(window.location.origin) || zU.startsWith("wasm://"))
      }
      const XU = UU.reason;
      if (XU instanceof Error) {
        var zU;
        const UU = `${XU.name}: ${XU.message}`;
        return !(0, cU.h)(null !== (zU = XU.stack) && void 0 !== zU ? zU : "") && !(0, cU.e)(UU) && !(0, cU.g)(UU)
      }
      return "string" === typeof XU && !(0, cU.e)(XU)
    }
  },
  40635: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => LU
    });
    var cU = zU(27),
      yU = zU(2032),
      QU = zU(37211),
      AU = zU(31),
      FU = zU(1680),
      oU = zU(40357),
      DU = zU(9305),
      EU = zU(1800),
      YU = zU(2058),
      NU = zU(42),
      IU = zU(40603),
      pU = zU(2064),
      aU = zU(7108);
    const tU = [...Object.values(pU.k).flat(), "ShiftLeft", "ShiftRight", "Enter", "KeyT", "Slash", "Escape", "Tab", "MetaLeft", "MetaRight", "ContextMenu", "PrintScreen", "ScrollLock", "Pause", "NumLock", "F1", "F5", "F6", "F7", "F11", "F12", "Mouse4", "Mouse5"],
      gU = [
        [1, "Mouse1"],
        [4, "Mouse2"],
        [2, "Mouse3"],
        [8, "Mouse4"],
        [16, "Mouse5"]
      ],
      kU = {
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
    class GU {
      constructor(UU) {
        this.source = UU, this.keyListeners = [], this.actionsListeners = [], this.pointerLockListeners = [], this.uD = new Uint8Array(aU.c.length), this.heldCount = 0, this.actionBits = 0, this.typing = !1, this.pointerLocked = !1, this.mouseButtons = 0, this.keyTable = null, UU.onBindingsChanged((() => {
          this.keyTable = null
        }))
      }
      onKey(UU) {
        return ZU(this.keyListeners, UU)
      }
      onUnboundKey(UU) {
        return this.onKey(((XU, zU, cU, yU, QU, AU) => {
          zU && yU && !cU && UU(XU, AU)
        }))
      }
      onActions(UU) {
        return ZU(this.actionsListeners, UU)
      }
      onPointerLock(UU) {
        return ZU(this.pointerLockListeners, UU)
      }
      getActionBits() {
        return this.actionBits
      }
      listen(UU, XU) {
        this.typing = this.source.isTyping(XU.activeElement), this.pointerLocked = null !== XU.pointerLockElement;
        const zU = {
          capture: !0,
          passive: !0
        };
        UU.addEventListener("keydown", (UU => {
          this.setTyping(this.source.isTyping(BU(UU))), UU.isComposing || this.typing || this.keyDown(UU.code, UU.altKey || UU.ctrlKey || UU.metaKey)
        }), zU), UU.addEventListener("keyup", (UU => {
          this.typing || ("MetaLeft" === UU.code || "MetaRight" === UU.code ? this.releaseAll() : this.keyUp((0, aU.f)(UU.code)))
        }), zU);
        const cU = UU => {
          "mouse" === UU.pointerType && UU.isTrusted && this.setMouseButtons(UU.buttons, UU.altKey || UU.ctrlKey || UU.metaKey)
        };
        UU.addEventListener("pointerdown", cU, zU), UU.addEventListener("pointermove", cU, zU), UU.addEventListener("pointerup", cU, zU), UU.addEventListener("focusin", (UU => {
          this.setTyping(this.source.isTyping(BU(UU)))
        }), zU), UU.addEventListener("focusout", (UU => {
          this.setTyping(this.source.isTyping(UU.relatedTarget))
        }), zU), UU.addEventListener("blur", (XU => {
          XU.target === UU && this.releaseAll()
        }), zU), XU.addEventListener("visibilitychange", (() => {
          XU.hidden && this.releaseAll()
        })), XU.addEventListener("pointerlockchange", (() => {
          const UU = null !== XU.pointerLockElement;
          if (UU !== this.pointerLocked) {
            this.pointerLocked = UU;
            const XU = this.source.now();
            for (const zU of this.pointerLockListeners) zU(UU, XU)
          }
        }))
      }
      keyDown(UU, XU) {
        const zU = (0, aU.f)(UU);
        if (0 !== this.uD[zU]) return;
        const cU = this.source.isInPlay(),
          yU = cU ? this.getKeyTable() : null,
          QU = null === yU || XU || 1 === yU.bound[zU],
          AU = null !== yU && 0 !== yU.actionBits[zU];
        this.uD[zU] = 1 + (QU ? 1 : 0) + (cU ? 2 : 0) + (AU ? 4 : 0), this.heldCount++, this.emit(zU, !0, QU, cU, AU), AU && this.updateActionBits()
      }
      keyUp(UU) {
        this.release(UU) && this.updateActionBits()
      }
      setMouseButtons(UU, XU) {
        const zU = UU ^ this.mouseButtons;
        if (0 !== zU) {
          this.mouseButtons = UU;
          for (const [cU, yU] of gU) 0 !== (zU & cU) && (0 === (UU & cU) ? this.keyUp((0, aU.f)(yU)) : !this.typing && this.source.isInPlay() && this.keyDown(yU, XU))
        }
      }
      releaseAll() {
        let UU = !1;
        for (let XU = 0; this.heldCount > 0 && XU < this.uD.length; XU++) UU = this.release(XU) || UU;
        this.mouseButtons = 0, UU && this.updateActionBits()
      }
      release(UU) {
        const XU = this.uD[UU];
        if (0 === XU) return !1;
        this.uD[UU] = 0, this.heldCount--;
        const zU = 0 !== (XU - 1 & 2);
        return this.emit(UU, !1, 0 !== (XU - 1 & 1), zU, 0 !== (XU - 1 & 4)), zU
      }
      updateActionBits() {
        let UU = 0;
        if (this.heldCount > 0) {
          const XU = this.getKeyTable().actionBits;
          for (let zU = 0; zU < this.uD.length; zU++) {
            const cU = this.uD[zU];
            0 !== cU && 0 !== (cU - 1 & 2) && (UU |= XU[zU])
          }
        }
        if (UU === this.actionBits) return;
        this.actionBits = UU;
        const XU = this.source.now();
        for (const zU of this.actionsListeners) zU(UU, XU)
      }
      getKeyTable() {
        return this.keyTable ??= function(UU, XU) {
          const zU = new Uint8Array(aU.c.length),
            cU = new Uint16Array(aU.c.length);
          zU[0] = 1;
          for (const yU of tU) zU[(0, aU.f)(yU)] = 1;
          for (const [yU, QU] of Object.entries(UU)) {
            if (XU.has(yU)) continue;
            const UU = kU[yU],
              AU = void 0 === UU ? 0 : (0, aU.l)(UU);
            for (const XU of QU) {
              const UU = (0, aU.f)(XU);
              zU[UU] = 1, 0 !== UU && (cU[UU] |= AU)
            }
          }
          return {
            bound: zU,
            actionBits: cU
          }
        }(this.source.getBindings(), this.source.ignoredActions), this.keyTable
      }
      setTyping(UU) {
        UU && !this.typing && (this.typing = !0, this.releaseAll()), this.typing = UU
      }
      emit(UU, XU, zU, cU, yU) {
        const QU = aU.c[UU],
          AU = this.source.now();
        for (const FU of this.keyListeners) FU(QU, XU, zU, cU, yU, AU)
      }
    }

    function BU(UU) {
      var XU;
      return null !== (XU = UU.composedPath()[0]) && void 0 !== XU ? XU : UU.target
    }

    function ZU(UU, XU) {
      return UU.push(XU), () => {
        const zU = UU.indexOf(XU); - 1 !== zU && UU.splice(zU, 1)
      }
    }
    const RU = "replayInput",
      PU = new Set([...YU.E, ...YU.l].filter((UU => "replayViewerOpen" !== UU && "toggleFreeCam" !== UU)));
    let WU = null;

    function dU() {
      var UU;
      return (null !== (UU = yU.d.get("customButtons")) && void 0 !== UU ? UU : []).filter(DU.d).map((UU => UU.keycode))
    }

    function LU() {
      return null === WU && "0" !== String(NU.k.getItem(RU)) && (WU = new GU({
        isInPlay: () => "inGame" === cU.e.get("gameState") && !(0, FU.p)() && !(0, QU.e)(),
        isTyping: EU.isTextEntry,
        getBindings: () => ({
          ...YU.w,
          customButtons: dU(),
          pageKeys: (0, oU.e)()
        }),
        ignoredActions: PU,
        onBindingsChanged: UU => {
          AU.k.subscribe("customBindingsChanged", UU), yU.d.subscribe("customButtons", UU), yU.d.subscribeReset(UU), (0, oU.i)(UU)
        },
        now: IU.d
      }), WU.listen(window, document)), WU
    }
  },
  40357: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => AU,
      e: () => FU,
      i: () => oU
    });
    const cU = new Map,
      yU = [];

    function QU() {
      for (const UU of yU) UU()
    }

    function AU(UU) {
      var XU;
      return cU.set(UU, (null !== (XU = cU.get(UU)) && void 0 !== XU ? XU : 0) + 1), QU(), () => {
        const XU = cU.get(UU) - 1;
        0 === XU ? cU.delete(UU) : cU.set(UU, XU), QU()
      }
    }

    function FU() {
      return [...cU.keys()]
    }

    function oU(UU) {
      yU.push(UU)
    }
  },
  7103: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => cU,
      d: () => QU,
      f: () => yU,
      h: () => AU,
      i: () => oU,
      l: () => FU
    });
    const cU = ["page_loaded", "game_loading", "game_playable", "first_input", "pointer_locked", "first_move", "first_block", "played_60s", "second_game"],
      yU = ["joined", "game_playable", "first_input", "pointer_locked", "first_move", "first_block", "played_60s"],
      QU = ["unbound_key_burst", "idle_pointer_locked", "menu_toggling", "block_change_refused", "pointer_lock_failed", "rage_quit"],
      AU = 3;

    function FU(UU) {
      return void 0 === UU ? -1 : yU.indexOf(UU)
    }

    function oU(UU, XU) {
      return FU(XU) > FU(UU) ? XU : UU
    }
  },
  7108: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => cU,
      f: () => QU,
      i: () => FU,
      l: () => DU
    });
    const cU = ["Unidentified", ...[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].map((UU => `Key${UU}`)), ...Array.from({
        length: 10
      }, ((UU, XU) => `Digit${XU}`)), ...Array.from({
        length: 12
      }, ((UU, XU) => `F${XU+1}`)), "Escape", "Tab", "CapsLock", "ShiftLeft", "ShiftRight", "ControlLeft", "ControlRight", "AltLeft", "AltRight", "MetaLeft", "MetaRight", "Space", "Enter", "Backspace", "Delete", "Insert", "Home", "End", "PageUp", "PageDown", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Minus", "Equal", "BracketLeft", "BracketRight", "Backslash", "IntlBackslash", "Semicolon", "Quote", "Backquote", "Comma", "Period", "Slash", "ContextMenu", "PrintScreen", "ScrollLock", "Pause", "NumLock", ...Array.from({
        length: 10
      }, ((UU, XU) => `Numpad${XU}`)), "NumpadAdd", "NumpadSubtract", "NumpadMultiply", "NumpadDivide", "NumpadDecimal", "NumpadEnter", "Mouse1", "Mouse2", "Mouse3", "Mouse4", "Mouse5"],
      yU = new Map(cU.map(((UU, XU) => [UU, XU])));

    function QU(UU) {
      var XU;
      return null !== (XU = yU.get(UU)) && void 0 !== XU ? XU : 0
    }
    const AU = new Set(["Minus", "Equal", "BracketLeft", "BracketRight", "Backslash", "IntlBackslash", "Semicolon", "Quote", "Backquote", "Comma", "Period", "Slash", "NumpadAdd", "NumpadSubtract", "NumpadMultiply", "NumpadDivide", "NumpadDecimal"]);

    function FU(UU) {
      return /^Key[A-Z]$/.test(UU) ? "letter" : /^(Digit|Numpad)\d$/.test(UU) ? "digit" : AU.has(UU) ? "symbol" : null
    }
    const oU = ["forward", "backward", "left", "right", "jump", "sprint", "crouch", "primary", "secondary", "middle"];

    function DU(UU) {
      return 1 << oU.indexOf(UU)
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);