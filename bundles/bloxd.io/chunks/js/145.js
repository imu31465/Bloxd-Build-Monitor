export const id = 145;
export const ids = [145];
export const modules = {
  9877: (dd, Od, md) => {
    md.d(Od, {
      e: () => Xd,
      g: () => Rd
    });
    var Wd = md(2141);
    const Fd = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      Rd = dd => "string" === typeof dd.icon && "" !== dd.icon && "string" === typeof dd.keycode && Fd.test(dd.keycode),
      Xd = dd => "Space" === dd ? "_" : Wd.j[dd]
  },
  38121: (dd, Od, md) => {
    md.d(Od, {
      b: () => Fd,
      d: () => Rd
    });
    let Wd = !1;

    function Fd() {
      return Wd
    }

    function Rd(dd) {
      return Wd !== dd && (Wd = dd, !0)
    }
  },
  41450: (dd, Od, md) => {
    md.d(Od, {
      d: () => Wd
    });
    class Wd {
      constructor(dd) {
        this.events = dd, this.recent = [], this.episode = null, this.sampleSum = 0, this.sampleCount = 0, this.minWindowAvg = null
      }
      addSample(dd, Od) {
        if (null === dd) return this.recent.length = 0, void this.endEpisode(Od);
        if (this.sampleSum += dd, this.sampleCount++, this.recent.push(dd), this.recent.length > 5 && this.recent.shift(), null !== this.episode && (this.episode.minFps = Math.min(this.episode.minFps, dd), this.episode.sum += dd, this.episode.count++), this.recent.length < 5) return;
        const md = function(dd) {
          let Od = 0;
          for (const md of dd) Od += md;
          return Od / dd.length
        }(this.recent);
        this.minWindowAvg = null === this.minWindowAvg ? md : Math.min(this.minWindowAvg, md), null === this.episode && md < 20 ? (this.episode = {
          startedAtMs: Od - 5e3,
          minFps: Math.min(...this.recent),
          sum: 5 * md,
          count: 5
        }, this.events.onEpisodeStarted(md)) : null !== this.episode && md >= 25 && this.endEpisode(Od)
      }
      endEpisode(dd) {
        if (null === this.episode) return;
        const {
          startedAtMs: Od,
          minFps: md,
          sum: Wd,
          count: Fd
        } = this.episode;
        this.episode = null, this.events.onEpisodeEnded({
          startedAtMs: Od,
          durationMs: dd - Od,
          minFps: Rd(md),
          avgFps: Rd(Wd / Fd)
        })
      }
      getTags() {
        return null === this.minWindowAvg ? null : {
          fps_min_bucket: Fd(this.minWindowAvg),
          fps_avg_bucket: Fd(this.sampleSum / this.sampleCount)
        }
      }
    }

    function Fd(dd) {
      return dd < 15 ? "<15" : dd < 30 ? "15-30" : dd < 50 ? "30-50" : "50+"
    }

    function Rd(dd) {
      return Math.round(10 * dd) / 10
    }
  },
  41428: (dd, Od, md) => {
    md.d(Od, {
      e: () => Fd
    });
    var Wd = md(1370);

    function Fd(dd) {
      if ("error" === dd.type) {
        const {
          error: Od,
          filename: md
        } = dd;
        return Od instanceof Error && (md.startsWith(window.location.origin) || md.startsWith("wasm://"))
      }
      const Od = dd.reason;
      if (Od instanceof Error) {
        var md;
        const dd = `${Od.name}: ${Od.message}`;
        return !(0, Wd.n)(null !== (md = Od.stack) && void 0 !== md ? md : "") && !(0, Wd.g)(dd) && !(0, Wd.k)(dd)
      }
      return "string" === typeof Od && !(0, Wd.g)(Od)
    }
  },
  41432: (dd, Od, md) => {
    md.d(Od, {
      b: () => xd
    });
    var Wd = md(29),
      Fd = md(2116),
      Rd = md(38121),
      Xd = md(32),
      Kd = md(1765),
      hd = md(41159),
      vd = md(9877),
      Qd = md(1890),
      td = md(2134),
      od = md(46),
      Nd = md(41405),
      qd = md(2139),
      Hd = md(7465);
    const yd = [...Object.values(qd.k).flat(), "ShiftLeft", "ShiftRight", "Enter", "KeyT", "Slash", "Escape", "Tab", "MetaLeft", "MetaRight", "ContextMenu", "PrintScreen", "ScrollLock", "Pause", "NumLock", "F1", "F5", "F6", "F7", "F11", "F12", "Mouse4", "Mouse5"],
      bd = [
        [1, "Mouse1"],
        [4, "Mouse2"],
        [2, "Mouse3"],
        [8, "Mouse4"],
        [16, "Mouse5"]
      ],
      Td = {
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
    class pd {
      constructor(dd) {
        this.source = dd, this.keyListeners = [], this.actionsListeners = [], this.pointerLockListeners = [], this.jK = new Uint8Array(Hd.d.length), this.heldCount = 0, this.actionBits = 0, this.typing = !1, this.pointerLocked = !1, this.mouseButtons = 0, this.keyTable = null, dd.onBindingsChanged((() => {
          this.keyTable = null
        }))
      }
      onKey(dd) {
        return gd(this.keyListeners, dd)
      }
      onUnboundKey(dd) {
        return this.onKey(((Od, md, Wd, Fd, Rd, Xd) => {
          md && Fd && !Wd && dd(Od, Xd)
        }))
      }
      onActions(dd) {
        return gd(this.actionsListeners, dd)
      }
      onPointerLock(dd) {
        return gd(this.pointerLockListeners, dd)
      }
      getActionBits() {
        return this.actionBits
      }
      listen(dd, Od) {
        this.typing = this.source.isTyping(Od.activeElement), this.pointerLocked = null !== Od.pointerLockElement;
        const md = {
          capture: !0,
          passive: !0
        };
        dd.addEventListener("keydown", (dd => {
          this.setTyping(this.source.isTyping(Yd(dd))), dd.isComposing || this.typing || this.keyDown(dd.code, dd.altKey || dd.ctrlKey || dd.metaKey)
        }), md), dd.addEventListener("keyup", (dd => {
          this.typing || ("MetaLeft" === dd.code || "MetaRight" === dd.code ? this.releaseAll() : this.keyUp((0, Hd.g)(dd.code)))
        }), md);
        const Wd = dd => {
          "mouse" === dd.pointerType && dd.isTrusted && this.setMouseButtons(dd.buttons, dd.altKey || dd.ctrlKey || dd.metaKey)
        };
        dd.addEventListener("pointerdown", Wd, md), dd.addEventListener("pointermove", Wd, md), dd.addEventListener("pointerup", Wd, md), dd.addEventListener("focusin", (dd => {
          this.setTyping(this.source.isTyping(Yd(dd)))
        }), md), dd.addEventListener("focusout", (dd => {
          this.setTyping(this.source.isTyping(dd.relatedTarget))
        }), md), dd.addEventListener("blur", (Od => {
          Od.target === dd && this.releaseAll()
        }), md), Od.addEventListener("visibilitychange", (() => {
          Od.hidden && this.releaseAll()
        })), Od.addEventListener("pointerlockchange", (() => {
          const dd = null !== Od.pointerLockElement;
          if (dd !== this.pointerLocked) {
            this.pointerLocked = dd;
            const Od = this.source.now();
            for (const md of this.pointerLockListeners) md(dd, Od)
          }
        }))
      }
      keyDown(dd, Od) {
        const md = (0, Hd.g)(dd);
        if (0 !== this.jK[md]) return;
        const Wd = this.source.isInPlay(),
          Fd = Wd ? this.getKeyTable() : null,
          Rd = null === Fd || Od || 1 === Fd.bound[md],
          Xd = null !== Fd && 0 !== Fd.actionBits[md];
        this.jK[md] = 1 + (Rd ? 1 : 0) + (Wd ? 2 : 0) + (Xd ? 4 : 0), this.heldCount++, this.emit(md, !0, Rd, Wd, Xd), Xd && this.updateActionBits()
      }
      keyUp(dd) {
        this.release(dd) && this.updateActionBits()
      }
      setMouseButtons(dd, Od) {
        const md = dd ^ this.mouseButtons;
        if (0 !== md) {
          this.mouseButtons = dd;
          for (const [Wd, Fd] of bd) 0 !== (md & Wd) && (0 === (dd & Wd) ? this.keyUp((0, Hd.g)(Fd)) : !this.typing && this.source.isInPlay() && this.keyDown(Fd, Od))
        }
      }
      releaseAll() {
        let dd = !1;
        for (let Od = 0; this.heldCount > 0 && Od < this.jK.length; Od++) dd = this.release(Od) || dd;
        this.mouseButtons = 0, dd && this.updateActionBits()
      }
      release(dd) {
        const Od = this.jK[dd];
        if (0 === Od) return !1;
        this.jK[dd] = 0, this.heldCount--;
        const md = 0 !== (Od - 1 & 2);
        return this.emit(dd, !1, 0 !== (Od - 1 & 1), md, 0 !== (Od - 1 & 4)), md
      }
      updateActionBits() {
        let dd = 0;
        if (this.heldCount > 0) {
          const Od = this.getKeyTable().actionBits;
          for (let md = 0; md < this.jK.length; md++) {
            const Wd = this.jK[md];
            0 !== Wd && 0 !== (Wd - 1 & 2) && (dd |= Od[md])
          }
        }
        if (dd === this.actionBits) return;
        this.actionBits = dd;
        const Od = this.source.now();
        for (const md of this.actionsListeners) md(dd, Od)
      }
      getKeyTable() {
        return this.keyTable ??= function(dd, Od) {
          const md = new Uint8Array(Hd.d.length),
            Wd = new Uint16Array(Hd.d.length);
          md[0] = 1;
          for (const Fd of yd) md[(0, Hd.g)(Fd)] = 1;
          for (const [Fd, Rd] of Object.entries(dd)) {
            if (Od.has(Fd)) continue;
            const dd = Td[Fd],
              Xd = void 0 === dd ? 0 : (0, Hd.m)(dd);
            for (const Od of Rd) {
              const dd = (0, Hd.g)(Od);
              md[dd] = 1, 0 !== dd && (Wd[dd] |= Xd)
            }
          }
          return {
            bound: md,
            actionBits: Wd
          }
        }(this.source.getBindings(), this.source.ignoredActions), this.keyTable
      }
      setTyping(dd) {
        dd && !this.typing && (this.typing = !0, this.releaseAll()), this.typing = dd
      }
      emit(dd, Od, md, Wd, Fd) {
        const Rd = Hd.d[dd],
          Xd = this.source.now();
        for (const Kd of this.keyListeners) Kd(Rd, Od, md, Wd, Fd, Xd)
      }
    }

    function Yd(dd) {
      var Od;
      return null !== (Od = dd.composedPath()[0]) && void 0 !== Od ? Od : dd.target
    }

    function gd(dd, Od) {
      return dd.push(Od), () => {
        const md = dd.indexOf(Od); - 1 !== md && dd.splice(md, 1)
      }
    }
    const wd = "replayInput",
      Ed = new Set([...td.F, ...td.n].filter((dd => "replayViewerOpen" !== dd && "toggleFreeCam" !== dd)));
    let Jd = null;

    function Ud() {
      var dd;
      return (null !== (dd = Fd.e.get("customButtons")) && void 0 !== dd ? dd : []).filter(vd.g).map((dd => dd.keycode))
    }

    function xd() {
      return null === Jd && "0" !== String(od.k.getItem(wd)) && (Jd = new pd({
        isInPlay: () => "inGame" === Wd.e.get("gameState") && !(0, Kd.m)() && !(0, Rd.b)(),
        isTyping: Qd.isTextEntry,
        getBindings: () => ({
          ...td.y,
          customButtons: Ud(),
          pageKeys: (0, hd.h)()
        }),
        ignoredActions: Ed,
        onBindingsChanged: dd => {
          Xd.j.subscribe("customBindingsChanged", dd), Fd.e.subscribe("customButtons", dd), Fd.e.subscribeReset(dd), (0, hd.j)(dd)
        },
        now: Nd.b
      }), Jd.listen(window, document)), Jd
    }
  },
  41159: (dd, Od, md) => {
    md.d(Od, {
      e: () => Xd,
      h: () => Kd,
      j: () => hd
    });
    const Wd = new Map,
      Fd = [];

    function Rd() {
      for (const dd of Fd) dd()
    }

    function Xd(dd) {
      var Od;
      return Wd.set(dd, (null !== (Od = Wd.get(dd)) && void 0 !== Od ? Od : 0) + 1), Rd(), () => {
        const Od = Wd.get(dd) - 1;
        0 === Od ? Wd.delete(dd) : Wd.set(dd, Od), Rd()
      }
    }

    function Kd() {
      return [...Wd.keys()]
    }

    function hd(dd) {
      Fd.push(dd)
    }
  },
  7458: (dd, Od, md) => {
    md.d(Od, {
      d: () => Wd,
      g: () => Rd,
      h: () => Fd,
      i: () => Xd,
      k: () => hd,
      m: () => Kd
    });
    const Wd = ["page_loaded", "game_loading", "game_playable", "first_input", "pointer_locked", "first_move", "first_block", "played_60s", "second_game"],
      Fd = ["joined", "game_playable", "first_input", "pointer_locked", "first_move", "first_block", "played_60s"],
      Rd = ["unbound_key_burst", "idle_pointer_locked", "menu_toggling", "block_change_refused", "pointer_lock_failed", "rage_quit"],
      Xd = 3;

    function Kd(dd) {
      return void 0 === dd ? -1 : Fd.indexOf(dd)
    }

    function hd(dd, Od) {
      return Kd(Od) > Kd(dd) ? Od : dd
    }
  },
  7465: (dd, Od, md) => {
    md.d(Od, {
      d: () => Wd,
      g: () => Rd,
      i: () => Kd,
      m: () => vd
    });
    const Wd = ["Unidentified", ...[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].map((dd => `Key${dd}`)), ...Array.from({
        length: 10
      }, ((dd, Od) => `Digit${Od}`)), ...Array.from({
        length: 12
      }, ((dd, Od) => `F${Od+1}`)), "Escape", "Tab", "CapsLock", "ShiftLeft", "ShiftRight", "ControlLeft", "ControlRight", "AltLeft", "AltRight", "MetaLeft", "MetaRight", "Space", "Enter", "Backspace", "Delete", "Insert", "Home", "End", "PageUp", "PageDown", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Minus", "Equal", "BracketLeft", "BracketRight", "Backslash", "IntlBackslash", "Semicolon", "Quote", "Backquote", "Comma", "Period", "Slash", "ContextMenu", "PrintScreen", "ScrollLock", "Pause", "NumLock", ...Array.from({
        length: 10
      }, ((dd, Od) => `Numpad${Od}`)), "NumpadAdd", "NumpadSubtract", "NumpadMultiply", "NumpadDivide", "NumpadDecimal", "NumpadEnter", "Mouse1", "Mouse2", "Mouse3", "Mouse4", "Mouse5"],
      Fd = new Map(Wd.map(((dd, Od) => [dd, Od])));

    function Rd(dd) {
      var Od;
      return null !== (Od = Fd.get(dd)) && void 0 !== Od ? Od : 0
    }
    const Xd = new Set(["Minus", "Equal", "BracketLeft", "BracketRight", "Backslash", "IntlBackslash", "Semicolon", "Quote", "Backquote", "Comma", "Period", "Slash", "NumpadAdd", "NumpadSubtract", "NumpadMultiply", "NumpadDivide", "NumpadDecimal"]);

    function Kd(dd) {
      return /^Key[A-Z]$/.test(dd) ? "letter" : /^(Digit|Numpad)\d$/.test(dd) ? "digit" : Xd.has(dd) ? "symbol" : null
    }
    const hd = ["forward", "backward", "left", "right", "jump", "sprint", "crouch", "primary", "secondary", "middle"];

    function vd(dd) {
      return 1 << hd.indexOf(dd)
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);