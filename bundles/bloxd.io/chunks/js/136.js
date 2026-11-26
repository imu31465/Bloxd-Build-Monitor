export const id = 136;
export const ids = [136];
export const modules = {
  9363: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => yV,
      d: () => UV
    });
    var JV = xV(2130);
    const YV = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      UV = VV => "string" === typeof VV.icon && "" !== VV.icon && "string" === typeof VV.keycode && YV.test(VV.keycode),
      yV = VV => "Space" === VV ? "_" : JV.g[VV]
  },
  35093: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => YV,
      g: () => UV
    });
    let JV = !1;

    function YV() {
      return JV
    }

    function UV(VV) {
      return JV !== VV && (JV = VV, !0)
    }
  },
  35103: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => JV
    });
    class JV {
      constructor(VV) {
        this.events = VV, this.recent = [], this.episode = null, this.sampleSum = 0, this.sampleCount = 0, this.minWindowAvg = null
      }
      addSample(VV, eV) {
        if (null === VV) return this.recent.length = 0, void this.endEpisode(eV);
        if (this.sampleSum += VV, this.sampleCount++, this.recent.push(VV), this.recent.length > 5 && this.recent.shift(), null !== this.episode && (this.episode.minFps = Math.min(this.episode.minFps, VV), this.episode.sum += VV, this.episode.count++), this.recent.length < 5) return;
        const xV = function(VV) {
          let eV = 0;
          for (const xV of VV) eV += xV;
          return eV / VV.length
        }(this.recent);
        this.minWindowAvg = null === this.minWindowAvg ? xV : Math.min(this.minWindowAvg, xV), null === this.episode && xV < 20 ? (this.episode = {
          startedAtMs: eV - 5e3,
          minFps: Math.min(...this.recent),
          sum: 5 * xV,
          count: 5
        }, this.events.onEpisodeStarted(xV)) : null !== this.episode && xV >= 25 && this.endEpisode(eV)
      }
      endEpisode(VV) {
        if (null === this.episode) return;
        const {
          startedAtMs: eV,
          minFps: xV,
          sum: JV,
          count: YV
        } = this.episode;
        this.episode = null, this.events.onEpisodeEnded({
          startedAtMs: eV,
          durationMs: VV - eV,
          minFps: UV(xV),
          avgFps: UV(JV / YV)
        })
      }
      getTags() {
        return null === this.minWindowAvg ? null : {
          fps_min_bucket: YV(this.minWindowAvg),
          fps_avg_bucket: YV(this.sampleSum / this.sampleCount)
        }
      }
    }

    function YV(VV) {
      return VV < 15 ? "<15" : VV < 30 ? "15-30" : VV < 50 ? "30-50" : "50+"
    }

    function UV(VV) {
      return Math.round(10 * VV) / 10
    }
  },
  35111: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => nV,
      e: () => pV
    });
    var JV = xV(1099),
      YV = xV(1603),
      UV = xV(1173);
    const yV = 5e3;

    function pV(VV) {
      let eV;
      const xV = UV.userContextManager.getCurrentUserContext().then((eV => YV.b.getGame(eV, VV))).then((VV => VV.name)).catch((eV => (console.warn(`Session replay: couldn't fetch the title of custom game ${VV}.`, eV), null))),
        JV = new Promise((VV => {
          eV = setTimeout((() => {
            VV(null)
          }), yV)
        }));
      return Promise.race([xV, JV]).finally((() => {
        clearTimeout(eV)
      }))
    }

    function QV(VV) {
      var eV;
      return !0 !== VV.is_custom_game ? String(VV.game_name) : `custom: ${String(null!==(eV=VV.game_display_name)&&void 0!==eV?eV:VV.game_analytics_id)}`
    }
    class nV {
      constructor(VV) {
        this.replay = VV, this.pending = null
      }
      send(VV, eV, xV) {
        if (this.flush(), !(0, JV.l)(VV)) return this.replay.capture("game_joined", eV), void this.replay.capture("$screen", {
          $screen_name: QV(eV)
        });
        const YV = {
          properties: eV,
          joinedAtMs: xV
        };
        this.pending = YV, pV((0, JV.p)(VV)).then((VV => {
          this.pending === YV && (null !== VV && (YV.properties = {
            ...eV,
            game_display_name: VV
          }, this.replay.addGameContext({
            game_display_name: VV
          })), this.flush())
        }))
      }
      flush() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (null === this.pending) return;
        const {
          properties: eV,
          joinedAtMs: xV
        } = this.pending;
        this.pending = null;
        const JV = {
          $screen_name: QV(eV)
        };
        VV ? (this.replay.captureOnExit("game_joined", eV, xV), this.replay.captureOnExit("$screen", JV, xV)) : (this.replay.captureAt("game_joined", eV, xV), this.replay.captureAt("$screen", JV, xV))
      }
    }
  },
  35090: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => XV
    });
    var JV = xV(27),
      YV = xV(2080),
      UV = xV(35093),
      yV = xV(32),
      pV = xV(1725),
      QV = xV(35097),
      nV = xV(9363),
      wV = xV(1838),
      ZV = xV(2116),
      vV = xV(40),
      rV = xV(35045),
      kV = xV(2124),
      bV = xV(7083);
    const EV = [...Object.values(kV.f).flat(), "ShiftLeft", "ShiftRight", "Enter", "KeyT", "Slash", "Escape", "Tab", "MetaLeft", "MetaRight", "ContextMenu", "PrintScreen", "ScrollLock", "Pause", "NumLock", "F1", "F5", "F6", "F7", "F11", "F12", "Mouse4", "Mouse5"],
      BV = [
        [1, "Mouse1"],
        [4, "Mouse2"],
        [2, "Mouse3"],
        [8, "Mouse4"],
        [16, "Mouse5"]
      ],
      jV = {
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
    class qV {
      constructor(VV) {
        this.source = VV, this.keyListeners = [], this.actionsListeners = [], this.pointerLockListeners = [], this.hn = new Uint8Array(bV.b.length), this.heldCount = 0, this.actionBits = 0, this.typing = !1, this.pointerLocked = !1, this.mouseButtons = 0, this.keyTable = null, VV.onBindingsChanged((() => {
          this.keyTable = null
        }))
      }
      onKey(VV) {
        return FV(this.keyListeners, VV)
      }
      onUnboundKey(VV) {
        return this.onKey(((eV, xV, JV, YV, UV) => {
          xV && YV && !JV && VV(eV, UV)
        }))
      }
      onActions(VV) {
        return FV(this.actionsListeners, VV)
      }
      onPointerLock(VV) {
        return FV(this.pointerLockListeners, VV)
      }
      getActionBits() {
        return this.actionBits
      }
      listen(VV, eV) {
        this.typing = this.source.isTyping(eV.activeElement), this.pointerLocked = null !== eV.pointerLockElement;
        const xV = {
          capture: !0,
          passive: !0
        };
        VV.addEventListener("keydown", (VV => {
          this.setTyping(this.source.isTyping(tV(VV))), VV.isComposing || this.typing || this.keyDown(VV.code, VV.altKey || VV.ctrlKey || VV.metaKey)
        }), xV), VV.addEventListener("keyup", (VV => {
          this.typing || ("MetaLeft" === VV.code || "MetaRight" === VV.code ? this.releaseAll() : this.keyUp((0, bV.d)(VV.code)))
        }), xV);
        const JV = VV => {
          "mouse" === VV.pointerType && VV.isTrusted && this.setMouseButtons(VV.buttons, VV.altKey || VV.ctrlKey || VV.metaKey)
        };
        VV.addEventListener("pointerdown", JV, xV), VV.addEventListener("pointermove", JV, xV), VV.addEventListener("pointerup", JV, xV), VV.addEventListener("focusin", (VV => {
          this.setTyping(this.source.isTyping(tV(VV)))
        }), xV), VV.addEventListener("focusout", (VV => {
          this.setTyping(this.source.isTyping(VV.relatedTarget))
        }), xV), VV.addEventListener("blur", (eV => {
          eV.target === VV && this.releaseAll()
        }), xV), eV.addEventListener("visibilitychange", (() => {
          eV.hidden && this.releaseAll()
        })), eV.addEventListener("pointerlockchange", (() => {
          const VV = null !== eV.pointerLockElement;
          if (VV !== this.pointerLocked) {
            this.pointerLocked = VV;
            const eV = this.source.now();
            for (const xV of this.pointerLockListeners) xV(VV, eV)
          }
        }))
      }
      keyDown(VV, eV) {
        const xV = (0, bV.d)(VV);
        if (0 !== this.hn[xV]) return;
        const JV = this.source.isInPlay(),
          YV = JV ? this.getKeyTable() : null,
          UV = null === YV || eV || 1 === YV.bound[xV];
        this.hn[xV] = 1 + (UV ? 1 : 0) + (JV ? 2 : 0), this.heldCount++, this.emit(xV, !0, UV, JV), null !== YV && 0 !== YV.actionBits[xV] && this.updateActionBits()
      }
      keyUp(VV) {
        this.release(VV) && this.updateActionBits()
      }
      setMouseButtons(VV, eV) {
        const xV = VV ^ this.mouseButtons;
        if (0 !== xV) {
          this.mouseButtons = VV;
          for (const [JV, YV] of BV) 0 !== (xV & JV) && (0 === (VV & JV) ? this.keyUp((0, bV.d)(YV)) : !this.typing && this.source.isInPlay() && this.keyDown(YV, eV))
        }
      }
      releaseAll() {
        let VV = !1;
        for (let eV = 0; this.heldCount > 0 && eV < this.hn.length; eV++) VV = this.release(eV) || VV;
        this.mouseButtons = 0, VV && this.updateActionBits()
      }
      release(VV) {
        const eV = this.hn[VV];
        if (0 === eV) return !1;
        this.hn[VV] = 0, this.heldCount--;
        const xV = 0 !== (eV - 1 & 2);
        return this.emit(VV, !1, 0 !== (eV - 1 & 1), xV), xV
      }
      updateActionBits() {
        let VV = 0;
        if (this.heldCount > 0) {
          const eV = this.getKeyTable().actionBits;
          for (let xV = 0; xV < this.hn.length; xV++) {
            const JV = this.hn[xV];
            0 !== JV && 0 !== (JV - 1 & 2) && (VV |= eV[xV])
          }
        }
        if (VV === this.actionBits) return;
        this.actionBits = VV;
        const eV = this.source.now();
        for (const xV of this.actionsListeners) xV(VV, eV)
      }
      getKeyTable() {
        return this.keyTable ??= function(VV, eV) {
          const xV = new Uint8Array(bV.b.length),
            JV = new Uint16Array(bV.b.length);
          xV[0] = 1;
          for (const YV of EV) xV[(0, bV.d)(YV)] = 1;
          for (const [YV, UV] of Object.entries(VV)) {
            if (eV.has(YV)) continue;
            const VV = jV[YV],
              yV = void 0 === VV ? 0 : (0, bV.e)(VV);
            for (const eV of UV) {
              const VV = (0, bV.d)(eV);
              xV[VV] = 1, 0 !== VV && (JV[VV] |= yV)
            }
          }
          return {
            bound: xV,
            actionBits: JV
          }
        }(this.source.getBindings(), this.source.ignoredActions), this.keyTable
      }
      setTyping(VV) {
        VV && !this.typing && (this.typing = !0, this.releaseAll()), this.typing = VV
      }
      emit(VV, eV, xV, JV) {
        const YV = bV.b[VV],
          UV = this.source.now();
        for (const yV of this.keyListeners) yV(YV, eV, xV, JV, UV)
      }
    }

    function tV(VV) {
      var eV;
      return null !== (eV = VV.composedPath()[0]) && void 0 !== eV ? eV : VV.target
    }

    function FV(VV, eV) {
      return VV.push(eV), () => {
        const xV = VV.indexOf(eV); - 1 !== xV && VV.splice(xV, 1)
      }
    }
    const TV = "replayInput",
      PV = new Set([...ZV.z, ...ZV.k].filter((VV => "replayViewerOpen" !== VV && "toggleFreeCam" !== VV)));
    let AV = null;

    function NV() {
      var VV;
      return (null !== (VV = YV.c.get("customButtons")) && void 0 !== VV ? VV : []).filter(nV.d).map((VV => VV.keycode))
    }

    function XV() {
      return null === AV && "0" !== String(vV.m.getItem(TV)) && (AV = new qV({
        isInPlay: () => "inGame" === JV.b.get("gameState") && !(0, pV.n)() && !(0, UV.e)(),
        isTyping: wV.isTextEntry,
        getBindings: () => ({
          ...ZV.t,
          customButtons: NV(),
          pageKeys: (0, QV.f)()
        }),
        ignoredActions: PV,
        onBindingsChanged: VV => {
          yV.h.subscribe("customBindingsChanged", VV), YV.c.subscribe("customButtons", VV), YV.c.subscribeReset(VV), (0, QV.h)(VV)
        },
        now: rV.c
      }), AV.listen(window, document)), AV
    }
  },
  35097: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => yV,
      f: () => pV,
      h: () => QV
    });
    const JV = new Map,
      YV = [];

    function UV() {
      for (const VV of YV) VV()
    }

    function yV(VV) {
      var eV;
      return JV.set(VV, (null !== (eV = JV.get(VV)) && void 0 !== eV ? eV : 0) + 1), UV(), () => {
        const eV = JV.get(VV) - 1;
        0 === eV ? JV.delete(VV) : JV.set(VV, eV), UV()
      }
    }

    function pV() {
      return [...JV.keys()]
    }

    function QV(VV) {
      YV.push(VV)
    }
  },
  7083: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => JV,
      d: () => UV,
      e: () => pV
    });
    const JV = ["Unidentified", ...[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].map((VV => `Key${VV}`)), ...Array.from({
        length: 10
      }, ((VV, eV) => `Digit${eV}`)), ...Array.from({
        length: 12
      }, ((VV, eV) => `F${eV+1}`)), "Escape", "Tab", "CapsLock", "ShiftLeft", "ShiftRight", "ControlLeft", "ControlRight", "AltLeft", "AltRight", "MetaLeft", "MetaRight", "Space", "Enter", "Backspace", "Delete", "Insert", "Home", "End", "PageUp", "PageDown", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Minus", "Equal", "BracketLeft", "BracketRight", "Backslash", "IntlBackslash", "Semicolon", "Quote", "Backquote", "Comma", "Period", "Slash", "ContextMenu", "PrintScreen", "ScrollLock", "Pause", "NumLock", ...Array.from({
        length: 10
      }, ((VV, eV) => `Numpad${eV}`)), "NumpadAdd", "NumpadSubtract", "NumpadMultiply", "NumpadDivide", "NumpadDecimal", "NumpadEnter", "Mouse1", "Mouse2", "Mouse3", "Mouse4", "Mouse5"],
      YV = new Map(JV.map(((VV, eV) => [VV, eV])));

    function UV(VV) {
      var eV;
      return null !== (eV = YV.get(VV)) && void 0 !== eV ? eV : 0
    }
    const yV = ["forward", "backward", "left", "right", "jump", "sprint", "crouch", "primary", "secondary", "middle"];

    function pV(VV) {
      return 1 << yV.indexOf(VV)
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);