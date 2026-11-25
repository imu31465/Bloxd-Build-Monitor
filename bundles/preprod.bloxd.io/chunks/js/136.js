export const id = 136;
export const ids = [136];
export const modules = {
  9349: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => aM,
      d: () => jM
    });
    var OM = iM(2099);
    const SM = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      jM = MM => "string" === typeof MM.icon && "" !== MM.icon && "string" === typeof MM.keycode && SM.test(MM.keycode),
      aM = MM => "Space" === MM ? "_" : OM.k[MM]
  },
  34822: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => SM,
      d: () => jM
    });
    let OM = !1;

    function SM() {
      return OM
    }

    function jM(MM) {
      return OM !== MM && (OM = MM, !0)
    }
  },
  34833: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM
    });
    class OM {
      constructor(MM) {
        this.events = MM, this.recent = [], this.episode = null, this.sampleSum = 0, this.sampleCount = 0, this.minWindowAvg = null
      }
      addSample(MM, rM) {
        if (null === MM) return this.recent.length = 0, void this.endEpisode(rM);
        if (this.sampleSum += MM, this.sampleCount++, this.recent.push(MM), this.recent.length > 5 && this.recent.shift(), null !== this.episode && (this.episode.minFps = Math.min(this.episode.minFps, MM), this.episode.sum += MM, this.episode.count++), this.recent.length < 5) return;
        const iM = function(MM) {
          let rM = 0;
          for (const iM of MM) rM += iM;
          return rM / MM.length
        }(this.recent);
        this.minWindowAvg = null === this.minWindowAvg ? iM : Math.min(this.minWindowAvg, iM), null === this.episode && iM < 20 ? (this.episode = {
          startedAtMs: rM - 5e3,
          minFps: Math.min(...this.recent),
          sum: 5 * iM,
          count: 5
        }, this.events.onEpisodeStarted(iM)) : null !== this.episode && iM >= 25 && this.endEpisode(rM)
      }
      endEpisode(MM) {
        if (null === this.episode) return;
        const {
          startedAtMs: rM,
          minFps: iM,
          sum: OM,
          count: SM
        } = this.episode;
        this.episode = null, this.events.onEpisodeEnded({
          startedAtMs: rM,
          durationMs: MM - rM,
          minFps: jM(iM),
          avgFps: jM(OM / SM)
        })
      }
      getTags() {
        return null === this.minWindowAvg ? null : {
          fps_min_bucket: SM(this.minWindowAvg),
          fps_avg_bucket: SM(this.sampleSum / this.sampleCount)
        }
      }
    }

    function SM(MM) {
      return MM < 15 ? "<15" : MM < 30 ? "15-30" : MM < 50 ? "30-50" : "50+"
    }

    function jM(MM) {
      return Math.round(10 * MM) / 10
    }
  },
  34841: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => QM,
      f: () => PM
    });
    var OM = iM(1073),
      SM = iM(1573),
      jM = iM(1144);
    const aM = 5e3;

    function PM(MM) {
      let rM;
      const iM = jM.userContextManager.getCurrentUserContext().then((rM => SM.c.getGame(rM, MM))).then((MM => MM.name)).catch((rM => (console.warn(`Session replay: couldn't fetch the title of custom game ${MM}.`, rM), null))),
        OM = new Promise((MM => {
          rM = setTimeout((() => {
            MM(null)
          }), aM)
        }));
      return Promise.race([iM, OM]).finally((() => {
        clearTimeout(rM)
      }))
    }

    function nM(MM) {
      var rM;
      return !0 !== MM.is_custom_game ? String(MM.game_name) : `custom: ${String(null!==(rM=MM.game_display_name)&&void 0!==rM?rM:MM.game_analytics_id)}`
    }
    class QM {
      constructor(MM) {
        this.replay = MM, this.pending = null
      }
      send(MM, rM, iM) {
        if (this.flush(), !(0, OM.m)(MM)) return this.replay.capture("game_joined", rM), void this.replay.capture("$screen", {
          $screen_name: nM(rM)
        });
        const SM = {
          properties: rM,
          joinedAtMs: iM
        };
        this.pending = SM, PM((0, OM.p)(MM)).then((MM => {
          this.pending === SM && (null !== MM && (SM.properties = {
            ...rM,
            game_display_name: MM
          }, this.replay.addGameContext({
            game_display_name: MM
          })), this.flush())
        }))
      }
      flush() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (null === this.pending) return;
        const {
          properties: rM,
          joinedAtMs: iM
        } = this.pending;
        this.pending = null;
        const OM = {
          $screen_name: nM(rM)
        };
        MM ? (this.replay.captureOnExit("game_joined", rM, iM), this.replay.captureOnExit("$screen", OM, iM)) : (this.replay.captureAt("game_joined", rM, iM), this.replay.captureAt("$screen", OM, iM))
      }
    }
  },
  34820: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => tM
    });
    var OM = iM(19),
      SM = iM(2067),
      jM = iM(34822),
      aM = iM(22),
      PM = iM(1717),
      nM = iM(34831),
      QM = iM(9349),
      zM = iM(1830),
      LM = iM(2093),
      mM = iM(30),
      HM = iM(34785),
      hM = iM(2096),
      JM = iM(7006);
    const dM = [...Object.values(hM.h).flat(), "ShiftLeft", "ShiftRight", "Enter", "KeyT", "Slash", "Escape", "Tab", "MetaLeft", "MetaRight", "ContextMenu", "PrintScreen", "ScrollLock", "Pause", "NumLock", "F1", "F5", "F6", "F7", "F11", "F12", "Mouse4", "Mouse5"],
      yM = [
        [1, "Mouse1"],
        [4, "Mouse2"],
        [2, "Mouse3"],
        [8, "Mouse4"],
        [16, "Mouse5"]
      ],
      lM = {
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
    class EM {
      constructor(MM) {
        this.source = MM, this.keyListeners = [], this.actionsListeners = [], this.pointerLockListeners = [], this.sQ = new Uint8Array(JM.e.length), this.heldCount = 0, this.actionBits = 0, this.typing = !1, this.pointerLocked = !1, this.mouseButtons = 0, this.keyTable = null, MM.onBindingsChanged((() => {
          this.keyTable = null
        }))
      }
      onKey(MM) {
        return GM(this.keyListeners, MM)
      }
      onUnboundKey(MM) {
        return this.onKey(((rM, iM, OM, SM, jM) => {
          iM && SM && !OM && MM(rM, jM)
        }))
      }
      onActions(MM) {
        return GM(this.actionsListeners, MM)
      }
      onPointerLock(MM) {
        return GM(this.pointerLockListeners, MM)
      }
      getActionBits() {
        return this.actionBits
      }
      listen(MM, rM) {
        this.typing = this.source.isTyping(rM.activeElement), this.pointerLocked = null !== rM.pointerLockElement;
        const iM = {
          capture: !0,
          passive: !0
        };
        MM.addEventListener("keydown", (MM => {
          this.setTyping(this.source.isTyping(UM(MM))), MM.isComposing || this.typing || this.keyDown(MM.code, MM.altKey || MM.ctrlKey || MM.metaKey)
        }), iM), MM.addEventListener("keyup", (MM => {
          this.typing || ("MetaLeft" === MM.code || "MetaRight" === MM.code ? this.releaseAll() : this.keyUp((0, JM.f)(MM.code)))
        }), iM);
        const OM = MM => {
          "mouse" === MM.pointerType && MM.isTrusted && this.setMouseButtons(MM.buttons, MM.altKey || MM.ctrlKey || MM.metaKey)
        };
        MM.addEventListener("pointerdown", OM, iM), MM.addEventListener("pointermove", OM, iM), MM.addEventListener("pointerup", OM, iM), MM.addEventListener("focusin", (MM => {
          this.setTyping(this.source.isTyping(UM(MM)))
        }), iM), MM.addEventListener("focusout", (MM => {
          this.setTyping(this.source.isTyping(MM.relatedTarget))
        }), iM), MM.addEventListener("blur", (rM => {
          rM.target === MM && this.releaseAll()
        }), iM), rM.addEventListener("visibilitychange", (() => {
          rM.hidden && this.releaseAll()
        })), rM.addEventListener("pointerlockchange", (() => {
          const MM = null !== rM.pointerLockElement;
          if (MM !== this.pointerLocked) {
            this.pointerLocked = MM;
            const rM = this.source.now();
            for (const iM of this.pointerLockListeners) iM(MM, rM)
          }
        }))
      }
      keyDown(MM, rM) {
        const iM = (0, JM.f)(MM);
        if (0 !== this.sQ[iM]) return;
        const OM = this.source.isInPlay(),
          SM = OM ? this.getKeyTable() : null,
          jM = null === SM || rM || 1 === SM.bound[iM];
        this.sQ[iM] = 1 + (jM ? 1 : 0) + (OM ? 2 : 0), this.heldCount++, this.emit(iM, !0, jM, OM), null !== SM && 0 !== SM.actionBits[iM] && this.updateActionBits()
      }
      keyUp(MM) {
        this.release(MM) && this.updateActionBits()
      }
      setMouseButtons(MM, rM) {
        const iM = MM ^ this.mouseButtons;
        if (0 !== iM) {
          this.mouseButtons = MM;
          for (const [OM, SM] of yM) 0 !== (iM & OM) && (0 === (MM & OM) ? this.keyUp((0, JM.f)(SM)) : !this.typing && this.source.isInPlay() && this.keyDown(SM, rM))
        }
      }
      releaseAll() {
        let MM = !1;
        for (let rM = 0; this.heldCount > 0 && rM < this.sQ.length; rM++) MM = this.release(rM) || MM;
        this.mouseButtons = 0, MM && this.updateActionBits()
      }
      release(MM) {
        const rM = this.sQ[MM];
        if (0 === rM) return !1;
        this.sQ[MM] = 0, this.heldCount--;
        const iM = 0 !== (rM - 1 & 2);
        return this.emit(MM, !1, 0 !== (rM - 1 & 1), iM), iM
      }
      updateActionBits() {
        let MM = 0;
        if (this.heldCount > 0) {
          const rM = this.getKeyTable().actionBits;
          for (let iM = 0; iM < this.sQ.length; iM++) {
            const OM = this.sQ[iM];
            0 !== OM && 0 !== (OM - 1 & 2) && (MM |= rM[iM])
          }
        }
        if (MM === this.actionBits) return;
        this.actionBits = MM;
        const rM = this.source.now();
        for (const iM of this.actionsListeners) iM(MM, rM)
      }
      getKeyTable() {
        return this.keyTable ??= function(MM, rM) {
          const iM = new Uint8Array(JM.e.length),
            OM = new Uint16Array(JM.e.length);
          iM[0] = 1;
          for (const SM of dM) iM[(0, JM.f)(SM)] = 1;
          for (const [SM, jM] of Object.entries(MM)) {
            if (rM.has(SM)) continue;
            const MM = lM[SM],
              aM = void 0 === MM ? 0 : (0, JM.h)(MM);
            for (const rM of jM) {
              const MM = (0, JM.f)(rM);
              iM[MM] = 1, 0 !== MM && (OM[MM] |= aM)
            }
          }
          return {
            bound: iM,
            actionBits: OM
          }
        }(this.source.getBindings(), this.source.ignoredActions), this.keyTable
      }
      setTyping(MM) {
        MM && !this.typing && (this.typing = !0, this.releaseAll()), this.typing = MM
      }
      emit(MM, rM, iM, OM) {
        const SM = JM.e[MM],
          jM = this.source.now();
        for (const aM of this.keyListeners) aM(SM, rM, iM, OM, jM)
      }
    }

    function UM(MM) {
      var rM;
      return null !== (rM = MM.composedPath()[0]) && void 0 !== rM ? rM : MM.target
    }

    function GM(MM, rM) {
      return MM.push(rM), () => {
        const iM = MM.indexOf(rM); - 1 !== iM && MM.splice(iM, 1)
      }
    }
    const CM = "replayInput",
      eM = new Set([...LM.A, ...LM.k].filter((MM => "replayViewerOpen" !== MM && "toggleFreeCam" !== MM)));
    let bM = null;

    function wM() {
      var MM;
      return (null !== (MM = SM.d.get("customButtons")) && void 0 !== MM ? MM : []).filter(QM.d).map((MM => MM.keycode))
    }

    function tM() {
      return null === bM && "0" !== String(mM.g.getItem(CM)) && (bM = new EM({
        isInPlay: () => "inGame" === OM.d.get("gameState") && !(0, PM.r)() && !(0, jM.b)(),
        isTyping: zM.isTextEntry,
        getBindings: () => ({
          ...LM.v,
          customButtons: wM(),
          pageKeys: (0, nM.e)()
        }),
        ignoredActions: eM,
        onBindingsChanged: MM => {
          aM.i.subscribe("customBindingsChanged", MM), SM.d.subscribe("customButtons", MM), SM.d.subscribeReset(MM), (0, nM.f)(MM)
        },
        now: HM.e
      }), bM.listen(window, document)), bM
    }
  },
  34831: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => aM,
      e: () => PM,
      f: () => nM
    });
    const OM = new Map,
      SM = [];

    function jM() {
      for (const MM of SM) MM()
    }

    function aM(MM) {
      var rM;
      return OM.set(MM, (null !== (rM = OM.get(MM)) && void 0 !== rM ? rM : 0) + 1), jM(), () => {
        const rM = OM.get(MM) - 1;
        0 === rM ? OM.delete(MM) : OM.set(MM, rM), jM()
      }
    }

    function PM() {
      return [...OM.keys()]
    }

    function nM(MM) {
      SM.push(MM)
    }
  },
  7006: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM,
      f: () => jM,
      h: () => PM
    });
    const OM = ["Unidentified", ...[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].map((MM => `Key${MM}`)), ...Array.from({
        length: 10
      }, ((MM, rM) => `Digit${rM}`)), ...Array.from({
        length: 12
      }, ((MM, rM) => `F${rM+1}`)), "Escape", "Tab", "CapsLock", "ShiftLeft", "ShiftRight", "ControlLeft", "ControlRight", "AltLeft", "AltRight", "MetaLeft", "MetaRight", "Space", "Enter", "Backspace", "Delete", "Insert", "Home", "End", "PageUp", "PageDown", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Minus", "Equal", "BracketLeft", "BracketRight", "Backslash", "IntlBackslash", "Semicolon", "Quote", "Backquote", "Comma", "Period", "Slash", "ContextMenu", "PrintScreen", "ScrollLock", "Pause", "NumLock", ...Array.from({
        length: 10
      }, ((MM, rM) => `Numpad${rM}`)), "NumpadAdd", "NumpadSubtract", "NumpadMultiply", "NumpadDivide", "NumpadDecimal", "NumpadEnter", "Mouse1", "Mouse2", "Mouse3", "Mouse4", "Mouse5"],
      SM = new Map(OM.map(((MM, rM) => [MM, rM])));

    function jM(MM) {
      var rM;
      return null !== (rM = SM.get(MM)) && void 0 !== rM ? rM : 0
    }
    const aM = ["forward", "backward", "left", "right", "jump", "sprint", "crouch", "primary", "secondary", "middle"];

    function PM(MM) {
      return 1 << aM.indexOf(MM)
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);