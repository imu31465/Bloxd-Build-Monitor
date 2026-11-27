export const id = 136;
export const ids = [136];
export const modules = {
  9476: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke,
      g: () => Me
    });
    var ye = He(2054);
    const be = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      Me = ee => "string" === typeof ee.icon && "" !== ee.icon && "string" === typeof ee.keycode && be.test(ee.keycode),
      Ke = ee => "Space" === ee ? "_" : ye.k[ee]
  },
  37301: (ee, ie, He) => {
    He.d(ie, {
      e: () => be,
      g: () => Me
    });
    let ye = !1;

    function be() {
      return ye
    }

    function Me(ee) {
      return ye !== ee && (ye = ee, !0)
    }
  },
  40638: (ee, ie, He) => {
    He.d(ie, {
      c: () => ye
    });
    class ye {
      constructor(ee) {
        this.events = ee, this.recent = [], this.episode = null, this.sampleSum = 0, this.sampleCount = 0, this.minWindowAvg = null
      }
      addSample(ee, ie) {
        if (null === ee) return this.recent.length = 0, void this.endEpisode(ie);
        if (this.sampleSum += ee, this.sampleCount++, this.recent.push(ee), this.recent.length > 5 && this.recent.shift(), null !== this.episode && (this.episode.minFps = Math.min(this.episode.minFps, ee), this.episode.sum += ee, this.episode.count++), this.recent.length < 5) return;
        const He = function(ee) {
          let ie = 0;
          for (const He of ee) ie += He;
          return ie / ee.length
        }(this.recent);
        this.minWindowAvg = null === this.minWindowAvg ? He : Math.min(this.minWindowAvg, He), null === this.episode && He < 20 ? (this.episode = {
          startedAtMs: ie - 5e3,
          minFps: Math.min(...this.recent),
          sum: 5 * He,
          count: 5
        }, this.events.onEpisodeStarted(He)) : null !== this.episode && He >= 25 && this.endEpisode(ie)
      }
      endEpisode(ee) {
        if (null === this.episode) return;
        const {
          startedAtMs: ie,
          minFps: He,
          sum: ye,
          count: be
        } = this.episode;
        this.episode = null, this.events.onEpisodeEnded({
          startedAtMs: ie,
          durationMs: ee - ie,
          minFps: Me(He),
          avgFps: Me(ye / be)
        })
      }
      getTags() {
        return null === this.minWindowAvg ? null : {
          fps_min_bucket: be(this.minWindowAvg),
          fps_avg_bucket: be(this.sampleSum / this.sampleCount)
        }
      }
    }

    function be(ee) {
      return ee < 15 ? "<15" : ee < 30 ? "15-30" : ee < 50 ? "30-50" : "50+"
    }

    function Me(ee) {
      return Math.round(10 * ee) / 10
    }
  },
  40619: (ee, ie, He) => {
    He.d(ie, {
      c: () => be
    });
    var ye = He(1272);

    function be(ee) {
      if ("error" === ee.type) {
        const {
          error: ie,
          filename: He
        } = ee;
        return ie instanceof Error && (He.startsWith(window.location.origin) || He.startsWith("wasm://"))
      }
      const ie = ee.reason;
      if (ie instanceof Error) {
        var He;
        const ee = `${ie.name}: ${ie.message}`;
        return !(0, ye.j)(null !== (He = ie.stack) && void 0 !== He ? He : "") && !(0, ye.e)(ee) && !(0, ye.i)(ee)
      }
      return "string" === typeof ie && !(0, ye.e)(ie)
    }
  },
  40627: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ze
    });
    var ye = He(18),
      be = He(2018),
      Me = He(37301),
      Ke = He(27),
      Ue = He(1620),
      Fe = He(40352),
      Je = He(9476),
      oe = He(1768),
      Re = He(2046),
      ke = He(35),
      qe = He(40602),
      fe = He(2048),
      Te = He(7142);
    const pe = [...Object.values(fe.j).flat(), "ShiftLeft", "ShiftRight", "Enter", "KeyT", "Slash", "Escape", "Tab", "MetaLeft", "MetaRight", "ContextMenu", "PrintScreen", "ScrollLock", "Pause", "NumLock", "F1", "F5", "F6", "F7", "F11", "F12", "Mouse4", "Mouse5"],
      Xe = [
        [1, "Mouse1"],
        [4, "Mouse2"],
        [2, "Mouse3"],
        [8, "Mouse4"],
        [16, "Mouse5"]
      ],
      ze = {
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
    class Be {
      constructor(ee) {
        this.source = ee, this.keyListeners = [], this.actionsListeners = [], this.pointerLockListeners = [], this.lJ = new Uint8Array(Te.d.length), this.heldCount = 0, this.actionBits = 0, this.typing = !1, this.pointerLocked = !1, this.mouseButtons = 0, this.keyTable = null, ee.onBindingsChanged((() => {
          this.keyTable = null
        }))
      }
      onKey(ee) {
        return ge(this.keyListeners, ee)
      }
      onUnboundKey(ee) {
        return this.onKey(((ie, He, ye, be, Me, Ke) => {
          He && be && !ye && ee(ie, Ke)
        }))
      }
      onActions(ee) {
        return ge(this.actionsListeners, ee)
      }
      onPointerLock(ee) {
        return ge(this.pointerLockListeners, ee)
      }
      getActionBits() {
        return this.actionBits
      }
      listen(ee, ie) {
        this.typing = this.source.isTyping(ie.activeElement), this.pointerLocked = null !== ie.pointerLockElement;
        const He = {
          capture: !0,
          passive: !0
        };
        ee.addEventListener("keydown", (ee => {
          this.setTyping(this.source.isTyping(Ee(ee))), ee.isComposing || this.typing || this.keyDown(ee.code, ee.altKey || ee.ctrlKey || ee.metaKey)
        }), He), ee.addEventListener("keyup", (ee => {
          this.typing || ("MetaLeft" === ee.code || "MetaRight" === ee.code ? this.releaseAll() : this.keyUp((0, Te.e)(ee.code)))
        }), He);
        const ye = ee => {
          "mouse" === ee.pointerType && ee.isTrusted && this.setMouseButtons(ee.buttons, ee.altKey || ee.ctrlKey || ee.metaKey)
        };
        ee.addEventListener("pointerdown", ye, He), ee.addEventListener("pointermove", ye, He), ee.addEventListener("pointerup", ye, He), ee.addEventListener("focusin", (ee => {
          this.setTyping(this.source.isTyping(Ee(ee)))
        }), He), ee.addEventListener("focusout", (ee => {
          this.setTyping(this.source.isTyping(ee.relatedTarget))
        }), He), ee.addEventListener("blur", (ie => {
          ie.target === ee && this.releaseAll()
        }), He), ie.addEventListener("visibilitychange", (() => {
          ie.hidden && this.releaseAll()
        })), ie.addEventListener("pointerlockchange", (() => {
          const ee = null !== ie.pointerLockElement;
          if (ee !== this.pointerLocked) {
            this.pointerLocked = ee;
            const ie = this.source.now();
            for (const He of this.pointerLockListeners) He(ee, ie)
          }
        }))
      }
      keyDown(ee, ie) {
        const He = (0, Te.e)(ee);
        if (0 !== this.lJ[He]) return;
        const ye = this.source.isInPlay(),
          be = ye ? this.getKeyTable() : null,
          Me = null === be || ie || 1 === be.bound[He],
          Ke = null !== be && 0 !== be.actionBits[He];
        this.lJ[He] = 1 + (Me ? 1 : 0) + (ye ? 2 : 0) + (Ke ? 4 : 0), this.heldCount++, this.emit(He, !0, Me, ye, Ke), Ke && this.updateActionBits()
      }
      keyUp(ee) {
        this.release(ee) && this.updateActionBits()
      }
      setMouseButtons(ee, ie) {
        const He = ee ^ this.mouseButtons;
        if (0 !== He) {
          this.mouseButtons = ee;
          for (const [ye, be] of Xe) 0 !== (He & ye) && (0 === (ee & ye) ? this.keyUp((0, Te.e)(be)) : !this.typing && this.source.isInPlay() && this.keyDown(be, ie))
        }
      }
      releaseAll() {
        let ee = !1;
        for (let ie = 0; this.heldCount > 0 && ie < this.lJ.length; ie++) ee = this.release(ie) || ee;
        this.mouseButtons = 0, ee && this.updateActionBits()
      }
      release(ee) {
        const ie = this.lJ[ee];
        if (0 === ie) return !1;
        this.lJ[ee] = 0, this.heldCount--;
        const He = 0 !== (ie - 1 & 2);
        return this.emit(ee, !1, 0 !== (ie - 1 & 1), He, 0 !== (ie - 1 & 4)), He
      }
      updateActionBits() {
        let ee = 0;
        if (this.heldCount > 0) {
          const ie = this.getKeyTable().actionBits;
          for (let He = 0; He < this.lJ.length; He++) {
            const ye = this.lJ[He];
            0 !== ye && 0 !== (ye - 1 & 2) && (ee |= ie[He])
          }
        }
        if (ee === this.actionBits) return;
        this.actionBits = ee;
        const ie = this.source.now();
        for (const He of this.actionsListeners) He(ee, ie)
      }
      getKeyTable() {
        return this.keyTable ??= function(ee, ie) {
          const He = new Uint8Array(Te.d.length),
            ye = new Uint16Array(Te.d.length);
          He[0] = 1;
          for (const be of pe) He[(0, Te.e)(be)] = 1;
          for (const [be, Me] of Object.entries(ee)) {
            if (ie.has(be)) continue;
            const ee = ze[be],
              Ke = void 0 === ee ? 0 : (0, Te.j)(ee);
            for (const ie of Me) {
              const ee = (0, Te.e)(ie);
              He[ee] = 1, 0 !== ee && (ye[ee] |= Ke)
            }
          }
          return {
            bound: He,
            actionBits: ye
          }
        }(this.source.getBindings(), this.source.ignoredActions), this.keyTable
      }
      setTyping(ee) {
        ee && !this.typing && (this.typing = !0, this.releaseAll()), this.typing = ee
      }
      emit(ee, ie, He, ye, be) {
        const Me = Te.d[ee],
          Ke = this.source.now();
        for (const Ue of this.keyListeners) Ue(Me, ie, He, ye, be, Ke)
      }
    }

    function Ee(ee) {
      var ie;
      return null !== (ie = ee.composedPath()[0]) && void 0 !== ie ? ie : ee.target
    }

    function ge(ee, ie) {
      return ee.push(ie), () => {
        const He = ee.indexOf(ie); - 1 !== He && ee.splice(He, 1)
      }
    }
    const Oe = "replayInput",
      de = new Set([...Re.B, ...Re.j].filter((ee => "replayViewerOpen" !== ee && "toggleFreeCam" !== ee)));
    let We = null;

    function te() {
      var ee;
      return (null !== (ee = be.c.get("customButtons")) && void 0 !== ee ? ee : []).filter(Je.g).map((ee => ee.keycode))
    }

    function Ze() {
      return null === We && "0" !== String(ke.i.getItem(Oe)) && (We = new Be({
        isInPlay: () => "inGame" === ye.e.get("gameState") && !(0, Ue.o)() && !(0, Me.e)(),
        isTyping: oe.isTextEntry,
        getBindings: () => ({
          ...Re.q,
          customButtons: te(),
          pageKeys: (0, Fe.f)()
        }),
        ignoredActions: de,
        onBindingsChanged: ee => {
          Ke.h.subscribe("customBindingsChanged", ee), be.c.subscribe("customButtons", ee), be.c.subscribeReset(ee), (0, Fe.j)(ee)
        },
        now: qe.e
      }), We.listen(window, document)), We
    }
  },
  40352: (ee, ie, He) => {
    He.d(ie, {
      e: () => Ke,
      f: () => Ue,
      j: () => Fe
    });
    const ye = new Map,
      be = [];

    function Me() {
      for (const ee of be) ee()
    }

    function Ke(ee) {
      var ie;
      return ye.set(ee, (null !== (ie = ye.get(ee)) && void 0 !== ie ? ie : 0) + 1), Me(), () => {
        const ie = ye.get(ee) - 1;
        0 === ie ? ye.delete(ee) : ye.set(ee, ie), Me()
      }
    }

    function Ue() {
      return [...ye.keys()]
    }

    function Fe(ee) {
      be.push(ee)
    }
  },
  7132: (ee, ie, He) => {
    He.d(ie, {
      c: () => ye,
      e: () => Me,
      f: () => be,
      g: () => Ke,
      i: () => Fe,
      k: () => Ue
    });
    const ye = ["page_loaded", "game_loading", "game_playable", "first_input", "pointer_locked", "first_move", "first_block", "played_60s", "second_game"],
      be = ["joined", "game_playable", "first_input", "pointer_locked", "first_move", "first_block", "played_60s"],
      Me = ["unbound_key_burst", "idle_pointer_locked", "menu_toggling", "block_change_refused", "pointer_lock_failed", "rage_quit"],
      Ke = 3;

    function Ue(ee) {
      return void 0 === ee ? -1 : be.indexOf(ee)
    }

    function Fe(ee, ie) {
      return Ue(ie) > Ue(ee) ? ie : ee
    }
  },
  7142: (ee, ie, He) => {
    He.d(ie, {
      d: () => ye,
      e: () => Me,
      g: () => Ue,
      j: () => Je
    });
    const ye = ["Unidentified", ...[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].map((ee => `Key${ee}`)), ...Array.from({
        length: 10
      }, ((ee, ie) => `Digit${ie}`)), ...Array.from({
        length: 12
      }, ((ee, ie) => `F${ie+1}`)), "Escape", "Tab", "CapsLock", "ShiftLeft", "ShiftRight", "ControlLeft", "ControlRight", "AltLeft", "AltRight", "MetaLeft", "MetaRight", "Space", "Enter", "Backspace", "Delete", "Insert", "Home", "End", "PageUp", "PageDown", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Minus", "Equal", "BracketLeft", "BracketRight", "Backslash", "IntlBackslash", "Semicolon", "Quote", "Backquote", "Comma", "Period", "Slash", "ContextMenu", "PrintScreen", "ScrollLock", "Pause", "NumLock", ...Array.from({
        length: 10
      }, ((ee, ie) => `Numpad${ie}`)), "NumpadAdd", "NumpadSubtract", "NumpadMultiply", "NumpadDivide", "NumpadDecimal", "NumpadEnter", "Mouse1", "Mouse2", "Mouse3", "Mouse4", "Mouse5"],
      be = new Map(ye.map(((ee, ie) => [ee, ie])));

    function Me(ee) {
      var ie;
      return null !== (ie = be.get(ee)) && void 0 !== ie ? ie : 0
    }
    const Ke = new Set(["Minus", "Equal", "BracketLeft", "BracketRight", "Backslash", "IntlBackslash", "Semicolon", "Quote", "Backquote", "Comma", "Period", "Slash", "NumpadAdd", "NumpadSubtract", "NumpadMultiply", "NumpadDivide", "NumpadDecimal"]);

    function Ue(ee) {
      return /^Key[A-Z]$/.test(ee) ? "letter" : /^(Digit|Numpad)\d$/.test(ee) ? "digit" : Ke.has(ee) ? "symbol" : null
    }
    const Fe = ["forward", "backward", "left", "right", "jump", "sprint", "crouch", "primary", "secondary", "middle"];

    function Je(ee) {
      return 1 << Fe.indexOf(ee)
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);