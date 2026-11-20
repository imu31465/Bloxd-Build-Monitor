export const id = 33;
export const ids = [33];
export const modules = {
  8951: (bb, ub, hb) => {
    function Bb(bb, ub) {
      return 0 === bb.length ? 0 : bb[Math.min(bb.length - 1, Math.floor(ub * bb.length))]
    }

    function Ob(bb) {
      return bb.toFixed(1)
    }
    hb.d(ub, {
      c: () => Ob,
      g: () => Bb
    })
  },
  8946: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      FIRST_SUMMARIES_FOR_MS: () => pb,
      FIRST_SUMMARY_MS: () => Xb,
      FrameDebugLog: () => rb,
      OUTLIER_BURST: () => Ab,
      OUTLIER_MS: () => ob,
      OUTLIER_REFILL_MS: () => lb,
      SUMMARY_MS: () => Zb,
      startFrameDebug: () => nb
    });
    var Bb = hb(4564),
      Ob = hb(4547),
      Gb = hb(8951),
      Ub = hb(2633),
      Lb = hb(993),
      Yb = hb(2767);
    class Sb {
      constructor() {
        this.kind = void 0, this.entries = new Float64Array(256), this.next = 0, this.size = 0, this.onLongFrame = bb => {
          const ub = bb;
          this.add(ub.startTime, ub.duration, ub.blockingDuration, (0, Lb.l)(ub))
        }, this.onLongTask = bb => {
          this.add(bb.startTime, bb.duration, 0, 0)
        }, null !== (0, Yb.d)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, Yb.d)("longtask", this.onLongTask) ? "longtask" : null
      }
      add(bb, ub, hb, Bb) {
        this.entries.set([bb, ub, hb, Bb], 4 * this.next), this.next = (this.next + 1) % 64, this.size = Math.min(this.size + 1, 64)
      }
      describe(bb, ub) {
        if (null === this.kind) return "long tasks n/a";
        let hb = 0,
          Bb = 0,
          Ob = 0,
          Gb = 0;
        for (let Lb = 0; Lb < this.size; Lb++) {
          const Ub = 4 * Lb,
            Yb = this.entries[Ub] + this.entries[Ub + 1];
          Yb > bb && Yb <= ub + 2 && (hb++, Bb += this.entries[Ub + 1], Ob += this.entries[Ub + 2], Gb += this.entries[Ub + 3])
        }
        const Ub = "loaf" === this.kind && hb > 0 ? ` (blocking ${Ob.toFixed(0)}, script ${Gb.toFixed(0)})` : "";
        return `${hb} ${this.kind} ${Bb.toFixed(0)} ms${Ub}`
      }
    }

    function ab(bb, ub) {
      return ub < 0 || bb < ub ? bb : bb - ub
    }
    class Hb {
      constructor() {
        this.source = null, this.now = {
          chunksReceived: -1,
          chunksCancelled: -1,
          chunksStored: -1,
          jobsSent: -1,
          jobsDone: -1,
          jobsInFlight: -1,
          workersLive: -1,
          workersRetired: -1
        }, this.before = {
          chunksReceived: -1,
          chunksCancelled: -1,
          chunksStored: -1,
          jobsSent: -1,
          jobsDone: -1,
          jobsInFlight: -1,
          workersLive: -1,
          workersRetired: -1
        }, this.lastMs = 0, this.visibilityChanges = 0, this.hiddenMs = 0, this.hiddenSinceMs = document.hidden ? performance.now() : -1
      }
      setSource(bb) {
        this.source = bb
      }
      start(bb) {
        this.before = {
          chunksReceived: -1,
          chunksCancelled: -1,
          chunksStored: -1,
          jobsSent: -1,
          jobsDone: -1,
          jobsInFlight: -1,
          workersLive: -1,
          workersRetired: -1
        }, this.lastMs = bb
      }
      visibilityChanged(bb) {
        this.visibilityChanges++, document.hidden ? this.hiddenSinceMs = bb : this.hiddenSinceMs >= 0 && (this.hiddenMs += bb - this.hiddenSinceMs, this.hiddenSinceMs = -1)
      }
      take(bb) {
        var ub;
        const hb = [];
        if (!0 === (null === (ub = this.source) || void 0 === ub ? void 0 : ub.call(this, this.now)) && (Bb = this.now, Ob = this.before, Bb.chunksReceived !== Ob.chunksReceived || Bb.chunksCancelled !== Ob.chunksCancelled || Bb.chunksStored !== Ob.chunksStored || Bb.jobsSent !== Ob.jobsSent || Bb.jobsDone !== Ob.jobsDone || Bb.jobsInFlight !== Ob.jobsInFlight || Bb.workersLive !== Ob.workersLive || Bb.workersRetired !== Ob.workersRetired)) {
          hb.push(function(bb, ub) {
            const hb = [`chunks +${ab(bb.chunksReceived,ub.chunksReceived)} got`, `+${ab(bb.chunksCancelled,ub.chunksCancelled)} cancelled`];
            bb.chunksStored >= 0 && hb.push(`${bb.chunksStored} stored`);
            const Bb = `jobs +${ab(bb.jobsSent,ub.jobsSent)} sent, +${ab(bb.jobsDone,ub.jobsDone)} done, ${bb.jobsInFlight} in flight`;
            return `${hb.join(", ")}; ${Bb}; workers ${bb.workersLive} live, ${bb.workersRetired} retired`
          }(this.now, this.before));
          const bb = this.before;
          this.before = this.now, this.now = bb
        }
        var Bb, Ob;
        if (this.hiddenSinceMs >= 0 && (this.hiddenMs += bb - this.hiddenSinceMs, this.hiddenSinceMs = bb), (this.visibilityChanges > 0 || this.hiddenMs > 0) && (hb.push(`hidden ${this.visibilityChanges} changes, ${Math.round(this.hiddenMs)} ms`), this.visibilityChanges = 0, this.hiddenMs = 0), 0 === hb.length) return null;
        const Gb = `load ${Math.round((bb-this.lastMs)/1e3)}s: ${hb.join("; ")}`;
        return this.lastMs = bb, Gb
      }
    }
    class wb {
      constructor() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.run = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
      drawn() {
        this.run = 0
      }
      add(bb, ub, hb) {
        this.count++, "paced" === bb ? this.paced++ : "skipped" === bb && this.skipped++, this.run++, this.run > this.longest && (this.longest = this.run, this.longestMs = ub, this.longestAhead = hb)
      }
      describe() {
        if (0 === this.count) return "0 undrawn";
        const bb = this.count - this.paced - this.skipped;
        return `${this.count} undrawn: ${this.paced} paced, ${this.skipped} skipped, ${bb} other, longest ${this.longest} in ${(0,Gb.c)(this.longestMs)} ms at ${this.longestAhead} ahead`
      }
      reset() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
    }
    const Zb = 2e4,
      Xb = 5e3,
      pb = 6e4,
      ob = 250,
      Ab = 10,
      lb = 6e4,
      Kb = 8192;

    function Wb(bb) {
      return bb.mainMs = 0, bb.renderMs = 0, bb.ticks = 0, bb.tickMs = 0, bb.rafs = 0, bb.pendingBefore = -1, bb.pendingMax = -1, bb.pendingAfter = -1, bb
    }

    function Cb() {
      return Wb({})
    }
    class db {
      constructor() {
        this.intervals = new Float64Array(Kb), this.totals = Cb(), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = new wb, this.shown = 0, this.dropped = 0
      }
      reset() {
        Wb(this.totals), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn.reset(), this.shown = 0, this.dropped = 0
      }
    }
    class rb {
      constructor() {
        this.longTasks = new Sb, this.summary = new db, this.current = Cb(), this.lastDrawnStartMs = -1, this.lastPending = -1, this.ahead = -1, this.tokens = Ab, this.lastRefillMs = performance.now(), this.waiting = [], this.outlierTimer = null, this.flushTimer = null, this.startedMs = 0, this.lastFlushMs = 0, this.loadLine = new Hb, this.inGameSinceFlush = !1, this.visibilityChanged = () => {
          this.restart(), this.loadLine.visibilityChanged(performance.now())
        }, this.restart = () => {
          this.lastDrawnStartMs = -1
        }, this.animationFrame = () => {
          this.current.rafs++
        }, this.wasmFrame = (bb, ub, hb, Ob, Gb, Ub) => {
          this.ahead = bb.headerWord(Bb.B.Pacing) & Bb.R.AheadMask, this.frame(ub, hb, Ob, Gb, bb.headerWord(Bb.B.RenderUs) / 1e3, bb.headerWord(Bb.B.TicksRun), Ub, bb.headerWord(Bb.B.RenderPending))
        }, this.wasmPeekPaced = bb => {
          const ub = performance.now();
          this.frame(ub, ub, "paced", bb, 0, 0, 0, this.lastPending)
        }, this.jsFrame = (bb, ub, hb) => {
          this.frame(bb, ub, "drawn", hb, ub - bb, 0, 0, -1)
        }, this.jsTick = bb => {
          this.current.mainMs += bb, this.current.ticks++, this.current.tickMs += bb
        }, this.logOutliers = () => {
          this.outlierTimer = null;
          const bb = performance.now();
          let ub = 0;
          for (const hb of this.waiting) {
            if (hb.dueMs > bb) {
              this.waiting[ub++] = hb;
              continue
            }
            const Bb = [`long frame ${(0,Gb.c)(hb.intervalMs)} ms ending at ${(0,Gb.c)(hb.endMs)} ms: main ${(0,Gb.c)(hb.mainMs)} (render ${(0,Gb.c)(hb.renderMs)}, ${hb.ticks} ticks ${(0,Gb.c)(hb.tickMs)}), outside ${(0,Gb.c)(hb.intervalMs-hb.mainMs)}`, `${hb.rafs} rafs`];
            hb.pendingBefore >= 0 && Bb.push(`pending ${hb.pendingBefore} -> ${hb.pendingAfter} (max ${hb.pendingMax})`), Bb.push(this.longTasks.describe(hb.endMs - hb.intervalMs, hb.endMs)), (0, Ub.l)("frame", Bb.join("; "))
          }
          this.waiting.length = ub, ub > 0 && (this.outlierTimer = setTimeout(this.logOutliers, this.waiting[0].dueMs - bb))
        }, this.flush = () => {
          this.flushTimer = null;
          const bb = performance.now(),
            ub = Math.round((bb - this.lastFlushMs) / 1e3);
          this.lastFlushMs = bb, this.scheduleFlush();
          if (this.logSummary(ub) || this.inGameSinceFlush) {
            const ub = this.loadLine.take(bb);
            null !== ub && (0, Ub.l)("frame", ub)
          }
          this.inGameSinceFlush = !1, this.summary.reset()
        }, document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      start(bb, ub) {
        var hb;
        this.restart(), this.startedMs = performance.now(), this.lastFlushMs = this.startedMs, this.loadLine.start(this.startedMs), this.scheduleFlush(), (0, Ub.l)("frame", `start: ${bb} client, ${ub}, dpr ${window.devicePixelRatio}, long tasks ${null!==(hb=this.longTasks.kind)&&void 0!==hb?hb:"n/a"}; a summary each ${Zb/1e3} s in game (${Xb/1e3} s for the first ${pb/1e3} s), outliers over ${ob} ms`)
      }
      setLoadCounts(bb) {
        this.loadLine.setSource(bb)
      }
      joined() {
        this.startedMs = performance.now(), this.scheduleFlush()
      }
      inGame() {
        this.inGameSinceFlush = !0
      }
      scheduleFlush() {
        null !== this.flushTimer && clearTimeout(this.flushTimer);
        const bb = performance.now() - this.startedMs < pb;
        this.flushTimer = setTimeout(this.flush, bb ? Xb : Zb)
      }
      frame(bb, ub, hb, Bb, Gb, Ub, Lb, Yb) {
        if (!Bb) return this.restart(), void(this.lastPending = Yb);
        const Sb = this.current;
        (0, Ob.d)(hb) ? (this.lastDrawnStartMs >= 0 && (Sb.pendingAfter = this.lastPending, this.closeInterval(bb - this.lastDrawnStartMs, bb)), this.lastDrawnStartMs = bb, Wb(Sb).pendingBefore = this.lastPending, this.summary.undrawn.drawn()) : this.lastDrawnStartMs >= 0 && this.summary.undrawn.add(hb, ub - this.lastDrawnStartMs, this.ahead), Sb.mainMs += ub - bb, Sb.renderMs += Gb, Sb.ticks += Ub, Sb.tickMs += Lb, Sb.pendingMax = Math.max(Sb.pendingMax, Yb), this.lastPending = Yb, this.summary.totals.pendingMax = Math.max(this.summary.totals.pendingMax, Yb)
      }
      closeInterval(bb, ub) {
        const hb = this.summary,
          Bb = this.current;
        hb.frames < Kb && (hb.intervals[hb.frames] = bb), hb.frames++, hb.maxMs = Math.max(hb.maxMs, bb);
        const Ob = hb.totals;
        Ob.mainMs += Bb.mainMs, Ob.renderMs += Bb.renderMs, Ob.ticks += Bb.ticks, Ob.tickMs += Bb.tickMs, Ob.rafs += Bb.rafs, bb > 50 && hb.slow++, bb > ob && this.outlier(bb, ub)
      }
      outlier(bb, ub) {
        const hb = Math.floor((ub - this.lastRefillMs) / lb);
        hb > 0 && (this.tokens = Math.min(Ab, this.tokens + hb), this.lastRefillMs += hb * lb), 0 !== this.tokens ? (this.tokens--, this.summary.shown++, this.waiting.push({
          ...this.current,
          endMs: ub,
          intervalMs: bb,
          dueMs: performance.now() + 1e3
        }), this.outlierTimer ??= setTimeout(this.logOutliers, 1e3)) : this.summary.dropped++
      }
      logSummary(bb) {
        const ub = this.summary,
          hb = ub.totals;
        if (0 === ub.frames) return ub.undrawn.count > 0 && (0, Ub.l)("frame", `${bb}s: no frames drawn, ${ub.undrawn.describe()}; pending max ${hb.pendingMax}`), ub.undrawn.count > 0;
        const Bb = ub.intervals.subarray(0, Math.min(ub.frames, Kb)).sort(),
          Ob = [`${ub.frames} frames, median ${(0,Gb.c)((0,Gb.g)(Bb,.5))} p95 ${(0,Gb.c)((0,Gb.g)(Bb,.95))} max ${(0,Gb.c)(ub.maxMs)} ms, ${ub.slow} over 50, ${ub.shown+ub.dropped} over ${ob}`, `${hb.rafs} rafs, ${ub.undrawn.describe()}`, `main ${(0,Gb.c)(hb.mainMs)} ms (render ${(0,Gb.c)(hb.renderMs)}, ${hb.ticks} ticks ${(0,Gb.c)(hb.tickMs)})`];
        return hb.pendingMax >= 0 && Ob.push(`pending max ${hb.pendingMax}`), this.ahead >= 0 && Ob.push(`${this.ahead} frames ahead`), Ob.push(`outliers ${ub.shown} logged, ${ub.dropped} dropped`), (0, Ub.l)("frame", `${bb}s: ${Ob.join("; ")}`), !0
      }
    }
    let jb = null;

    function nb(bb, ub) {
      return jb ??= new rb, jb.start(bb, ub), jb
    }
  },
  4564: (bb, ub, hb) => {
    hb.d(ub, {
      Ab: () => vb,
      B: () => Gb,
      C: () => ob,
      D: () => fb,
      Db: () => pb,
      Eb: () => jb,
      Gb: () => rb,
      H: () => ab,
      Kb: () => tb,
      L: () => Hb,
      Lb: () => Ib,
      Mb: () => eb,
      N: () => Sb,
      Q: () => Ab,
      Qb: () => sb,
      R: () => Yb,
      Tb: () => Mb,
      U: () => Xb,
      Vb: () => Cb,
      Wb: () => db,
      Y: () => Zb,
      _b: () => qb,
      ab: () => nb,
      b: () => Vb,
      cc: () => Ob,
      eb: () => xb,
      f: () => yb,
      fb: () => zb,
      fc: () => Fb,
      hb: () => Db,
      i: () => wb,
      ib: () => gb,
      l: () => Wb,
      m: () => Eb,
      mb: () => Pb,
      ob: () => mb,
      p: () => Kb,
      r: () => lb,
      s: () => Ub,
      sb: () => Nb,
      v: () => Lb,
      vb: () => ib,
      x: () => Bb,
      xb: () => Jb
    });
    const Bb = 32,
      Ob = 33.333333333333336,
      Gb = {
        AbiVersion: 0,
        Status: 1,
        LastError: 2,
        ErrorCount: 3,
        FrameIndex: 4,
        TicksRun: 5,
        TicksDropped: 6,
        Alpha: 7,
        NetOutPtr: 8,
        NetOutLen: 9,
        WorkerOutPtr: 10,
        WorkerOutLen: 11,
        EventsPtr: 12,
        EventsLen: 13,
        ScenePtr: 14,
        SceneLen: 15,
        TickIndex: 16,
        LastErrorDetail: 17,
        RenderPending: 18,
        GpuSampled: 19,
        GpuTimed: 20,
        GpuFrameUs: 21,
        TickUs: 22,
        RenderUs: 23,
        FirstView: 24,
        ChunksCancelled: 25,
        PingSent: 26,
        NetInKept: 27,
        FrameDraw: 28,
        Pacing: 29,
        PacingLagUs: 30,
        LoadSteps: 31
      },
      Ub = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      Lb = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      Yb = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      Sb = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      ab = 7,
      Hb = {
        ChunksReceived: 0,
        ChunksStored: 1,
        JobsSent: 2,
        JobsDone: 3,
        JobsInFlight: 4,
        WorkersLive: 5,
        WorkersRetired: 6
      },
      wb = {
        Look: 0,
        Remesh: 1
      },
      Zb = 8,
      Xb = 1,
      pb = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      ob = {
        KeyDown: 1,
        KeyUp: 2,
        MouseMove: 3,
        MouseDown: 4,
        MouseUp: 5,
        Wheel: 6,
        TouchStart: 7,
        TouchMove: 8,
        TouchEnd: 9,
        TouchCancel: 10,
        PointerLock: 11,
        Resize: 12,
        Focus: 13,
        Blur: 14,
        UiPrefs: 15,
        Binding: 16,
        UiCapture: 17,
        Sensitivity: 18,
        Joystick: 19,
        TouchButton: 20,
        TouchZone: 21,
        Options: 22,
        AntiCheat: 23,
        PadAction: 24,
        PadLook: 25,
        EnvPrefs: 32
      },
      Ab = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      lb = {
        RawMessage: 1,
        CoreErrors: 2,
        LocalHurt: 16,
        AttackHit: 17,
        HealthChanged: 18,
        LocalPlayerBound: 19,
        ConnectionState: 20,
        ReconnectGrace: 5,
        GameCalls: 96,
        LocalTeleported: 21,
        PhysicsType: 22,
        VehicleEffect: 23,
        InputAction: 24,
        ZoomChanged: 25,
        ZoomDisabled: 26,
        SendRefused: 27,
        KeepAliveDue: 28,
        GameCamera: 29,
        TickEnd: 32,
        EntitySpawned: 33,
        EntityDespawned: 34,
        ChangeBlockFail: 39,
        ChangeBlockFailEnd: 46,
        InventoryEvent: 48,
        HeldItemChanged: 49,
        ShotDamage: 50,
        EnchantOffer: 51,
        UiEvent: 52,
        EntityInfoChanged: 53,
        ChunkSlot: 55,
        PlaySound: 40,
        SoundPos: 41,
        SoundSet: 42,
        SoundFade: 43,
        SoundStop: 44,
        SoundReset: 45,
        EnvLighting: 54,
        SkyImages: 64,
        ReplayFailed: 56,
        ReplayOption: 57,
        ReplayFilePart: 58,
        ReplayFileReady: 59,
        ReplayOpened: 60,
        ReplayUiEvent: 61,
        RecorderEvent: 62,
        Images: 128,
        ModelRequests: 129,
        ModelTaken: 130,
        RenderReload: 3,
        TerrainTexturesWanted: 4
      },
      Kb = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      Wb = 4,
      Cb = 4,
      db = 65535,
      rb = {
        Open: 1,
        TooLarge: 2,
        NothingStaged: 3,
        NotPlayback: 4,
        NotOpen: 5,
        BadValue: 6,
        Crop: 7,
        NotLive: 8,
        ModuleLoad: 9,
        ModuleTrap: 10,
        Port: 11
      },
      jb = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      nb = 88,
      Db = 0,
      xb = 24,
      zb = 48,
      gb = 80,
      ib = {
        FilePartDone: 526,
        FileDone: 527,
        Control: 528,
        Prefs: 529,
        Option: 530,
        FlyingText: 531,
        PlayerKilled: 532,
        Killfeed: 533,
        Session: 534
      },
      vb = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      tb = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      Jb = {
        RecordingStarted: 0,
        RecordingStopped: 1,
        RecordingDiscarded: 2,
        ClipSaved: 3,
        ClipEmpty: 4,
        ClippingNotOn: 5,
        Disallowed: 6,
        ClippingOn: 7,
        ClippingOff: 8,
        LimitReached: 9,
        ClipSettingsChanged: 10,
        SaveBusy: 11,
        CloseViewerFirst: 12,
        FileDiscarded: 13,
        SaveFailed: 14,
        RecordingTurnedOff: 15
      },
      eb = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      Nb = 65535,
      sb = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      Mb = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      mb = 2,
      Ib = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      Pb = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      qb = {
        SkyTable: 600,
        SkyImagesReady: 601,
        SkyTableHeaderBytes: 8,
        SkyTableEntryBytes: 92,
        SkyImagesReadyBytes: 32,
        KindNone: 0,
        KindCustom: 1,
        KindEarth: 2,
        CubeFaces: 6,
        Failed: 0
      },
      Eb = {
        Bytes: 88,
        Inclination: 0,
        Turbidity: 1,
        Luminance: 2,
        Rayleigh: 3,
        MieCoefficient: 4,
        MieDirectionalG: 5,
        Distance: 6,
        Azimuth: 7,
        Params: 8,
        SunPosition: 256,
        CameraOffsetX: 512,
        CameraOffsetY: 1024,
        CameraOffsetZ: 2048,
        Up: 4096,
        VertexTint: 8192,
        UseSunPosition: 16384,
        Dithering: 32768,
        InfiniteDistance: 65536,
        SunPositionAt: 32,
        CameraOffsetAt: 44,
        UpAt: 56,
        VertexTintAt: 68,
        PresentAt: 80,
        FlagsAt: 84
      },
      yb = {
        None: 0,
        InputOverCapacity: 1,
        InputTruncated: 2,
        InputUnknownKind: 3,
        InputNonFinite: 4,
        NetOverCapacity: 16,
        NetTruncated: 17,
        NetOversize: 18,
        NetBadKind: 19,
        NetConnUnknown: 20,
        NetConnBackwards: 21,
        WorkerOverCapacity: 32,
        WorkerTruncated: 33,
        WorkerUnknownKind: 34,
        TimeNonFinite: 48,
        TimeBackwards: 49,
        GameCallThrew: 50,
        ResumeUnconsumed: 51,
        CallLogMismatch: 52,
        TerrainTextureRefused: 53,
        TerrainTextureMissing: 54,
        ShaderPackRefused: 55,
        ReserveTooLarge: 64,
        ReserveFailed: 65,
        GrowFailed: 66,
        EventOversize: 80,
        OutputFull: 81,
        StateCorrupt: 128,
        OriginRefused: 129,
        CoreBusy: 138,
        WorldWorldgenRefused: 88,
        WorldWorldgenResultMalformed: 89,
        WorldBlockDataInvalid: 90,
        WorldNetDecode: 96,
        WorldChunkId: 97,
        WorldChunkVoxels: 98,
        WorldChunkLight: 99,
        WorldSendFailed: 100,
        WorldEditInvalid: 101,
        WorldPlayerInvalid: 102,
        WorldNoVoxels: 103,
        WorldStoreCorrupt: 224,
        WorldWorldgenTrapped: 226,
        WorldRegistryInvalid: 227,
        WorldStreamStartInvalid: 228,
        PresentationRigRefused: 160,
        PresentationSceneRefused: 161,
        PresentationModelMissing: 162,
        PresentationAnimDecode: 163,
        PresentationSettingDecode: 164,
        PresentationParticleDecode: 165,
        PresentationNodeUnknown: 166,
        PresentationStateFull: 167,
        PresentationBindingUnfit: 168,
        PresentationClipUnplayable: 169,
        PresentationObjectOpsDropped: 170,
        PresentationImageFailed: 171,
        PresentationDracoFailure: 144,
        NetNotGameRoom: 184,
        NetEnvelope: 185,
        NetMessageDecode: 186,
        NetNoHandshake: 187,
        NetRejoin: 188,
        NetHandshake: 189,
        NetSchemaDesync: 136,
        ReplicationUnknownType: 192,
        ReplicationBadId: 193,
        ReplicationFull: 194,
        ReplicationNamesFull: 195,
        ReplicationRosterFull: 196,
        ReplicationEffectsFull: 197,
        ReplicationNoDecoder: 198,
        ReplicationResetFailed: 137,
        OptionsMalformed: 56,
        OptionsRecordBad: 57,
        ItemsDeadlinesFull: 73,
        ItemsThrowablesFull: 75,
        ItemsSendLatchFull: 76,
        ItemsBadSlotJson: 77,
        ItemsUnknownItem: 78,
        ItemsMessageDecode: 79,
        ItemsRecipeBad: 82,
        ItemsSendFailed: 83,
        ItemsMarkerLost: 84,
        ItemsCallStackFull: 85,
        ItemsUiDropsFull: 272,
        ItemsReplayRefused: 273,
        ApiCmdUnknownKind: 67,
        ApiCmdBadLength: 68,
        ApiCmdTruncated: 69,
        ApiQueryBadArgs: 70,
        ApiScratchTooLarge: 71,
        AudioUnknownSound: 86,
        JobsRefused: 104,
        JobsResultMalformed: 105,
        JobsUnknownJob: 106,
        JobsWorkerIndexInvalid: 107,
        JobsWorkerOutFull: 108,
        JobsTablesRefused: 109,
        JobsVisInputRefused: 110,
        JobsKeyInvalid: 111,
        JobsTrapped: 288,
        JobsTrapGaveUp: 289,
        JobsTablesRetired: 290,
        JobsHeapGaveUp: 291,
        JobsTablesTrapped: 232,
        JobsWorkerTablesRefused: 233,
        EffectsUnknownPreset: 256,
        EffectsParticleCmdBad: 257,
        EffectsParticleKeysFull: 258,
        EffectsUnknownAnchor: 259,
        EffectsGrowingFull: 260,
        EffectsMessageDecode: 261,
        EnvUnknownSky: 264,
        EnvSkyTableBad: 265,
        EnvSkyRowsRefused: 266,
        EnvSkyReleasesLost: 267,
        EnvOverlayRowsRefused: 268,
        SendsSendRefused: 58,
        SendsSendMalformed: 59,
        SendsSendQueueFull: 60,
        SendsAntiCheatRecordBad: 61,
        SendsSendFailed: 62,
        RenderDeviceLost: 176,
        RenderSceneRowNotDrawn: 177,
        RenderChunkMeshNotDrawn: 178,
        RenderShaderPackNotRun: 179,
        RenderInternal: 180,
        RenderCaveCullingOff: 181,
        RenderGlErrorAfterRestore: 182,
        RenderSerialLinks: 183,
        RenderOutOfMemory: 200,
        RenderValidation: 201,
        RenderSurfaceUnusable: 202,
        RenderPipelineFailed: 203,
        RenderStateCorrupt: 204,
        RenderDeviceUnrecoverable: 205,
        PlayerMessageDecode: 112,
        PlayerMovementFailed: 113,
        PlayerPhysicsFailed: 114,
        PlayerConfirmQueueFull: 115,
        PlayerSendFailed: 116,
        PlayerBadPhysicsState: 117,
        PlayerBadOverride: 118,
        PlayerNonFinitePosition: 119,
        PlayerEventsFull: 120,
        PlayerMultiplierSetDropped: 121,
        CameraNonFinite: 126,
        CameraCmdBad: 127,
        CameraScriptedPoseRefused: 296,
        InputBadKey: 122,
        InputBadAction: 123,
        InputBadTouch: 124,
        InputEdgesFull: 125,
        ReplayDrops: 87,
        ReplayRecorderDrops: 304
      },
      Vb = 8,
      Fb = {
        GameCodeMessage: 4,
        NewOtherEntitySettings: 23,
        NewClientOptions: 37,
        Chat: 64,
        UiRequestPopup: 8,
        TaskProgress: 9,
        CustomKillfeed: 15,
        TopRightHelper: 24,
        NewUiRequest: 51,
        PlayerKilled: 61,
        OverShopInfo: 43,
        ShowShopTutorial: 76,
        SetCookie: 0,
        LeaveValues: 85,
        CustomAnalyticsEvent: 31,
        ProgressionEvent: 19,
        ResourceEvent: 22,
        LeaderboardResponse: 30,
        ResumeComplete: 105,
        ProgressBarUpdate: 33,
        RemoveMiddleScreenBar: 90,
        WorldVariation: 5,
        EditItemCraftingRecipes: 78
      },
      fb = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  4555: (bb, ub, hb) => {
    hb.d(ub, {
      $c: () => Bb.Vb,
      A: () => Ub,
      Ab: () => Bb.L,
      Bb: () => Ob.e,
      Cb: () => jb,
      Cc: () => Bb.vb,
      Cd: () => qb,
      D: () => vb,
      Db: () => sb,
      E: () => Zu,
      Fb: () => gb,
      Fc: () => Bb.xb,
      Gd: () => Fb,
      H: () => cb,
      Hc: () => Bb.Ab,
      I: () => Bb.f,
      Ib: () => xb,
      Jc: () => Qb,
      Jd: () => Vb,
      Kc: () => Bb.Eb,
      Ld: () => Lu,
      M: () => Sb,
      Mb: () => Bb.Q,
      Mc: () => Bb.Gb,
      Md: () => pu,
      N: () => Bb.i,
      Nd: () => Wb,
      Oc: () => Bb.Kb,
      Od: () => fb,
      Pb: () => ib,
      Pc: () => Bb.Mb,
      Q: () => Rb,
      Qb: () => Cb,
      Rd: () => eb,
      S: () => Bb.l,
      Tc: () => Bb.Qb,
      Td: () => Jb,
      U: () => kb,
      Ub: () => Uu,
      Ud: () => tb,
      V: () => Bb.r,
      Vb: () => Kb,
      Vd: () => Yb,
      W: () => Bb.s,
      Xc: () => Bb.Tb,
      Xd: () => Nb,
      Y: () => Bb.v,
      Yc: () => Db,
      Zb: () => Hu,
      _: () => Hb,
      _d: () => ou,
      ab: () => lb,
      bb: () => Bb.x,
      bc: () => Ob.j,
      c: () => uu,
      ce: () => Zb,
      d: () => pb,
      dd: () => Bb.Wb,
      eb: () => Bb.B,
      ec: () => Ab,
      ed: () => Bb.cc,
      fb: () => Ib,
      h: () => Xb,
      hc: () => Bu,
      hd: () => Gb,
      jb: () => Gu,
      k: () => Su,
      kb: () => ab,
      lc: () => Bb.ab,
      ld: () => ob,
      mb: () => Bb.C,
      n: () => nb,
      nc: () => Bb.eb,
      o: () => rb,
      oc: () => Bb.fb,
      od: () => Yu,
      q: () => Bb.b,
      qb: () => Eb,
      qc: () => Bb.hb,
      qd: () => mb,
      s: () => wu,
      tb: () => Tb,
      tc: () => Bb.ib,
      td: () => Pb,
      uc: () => Bb.sb,
      vc: () => Xu,
      vd: () => Mb,
      w: () => zb,
      wb: () => Bb.H,
      wc: () => au,
      xd: () => yb,
      yb: () => bu,
      zb: () => hu,
      zc: () => Ou
    });
    var Bb = hb(4564),
      Ob = hb(2273);
    const Gb = Math.round(1e3 / Bb.cc),
      Ub = 4,
      Lb = 2;

    function Yb() {
      return crypto.getRandomValues(new Uint32Array(Lb))
    }
    const Sb = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      ab = 16,
      Hb = {
        Draws: 1,
        NetAll: 2
      },
      wb = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function Zb(bb) {
      return (bb.nametagsHidden ? db.NametagsHidden : 0) | (bb.crouchToggle ? db.CrouchToggle : 0) | (bb.bhopDisabled ? db.BhopDisabled : 0) | (bb.disableBobbing ? db.DisableBobbing : 0) | (bb.ezTowering ? db.EzTowering : 0) | (bb.ezBridging ? db.EzBridging : 0) | (bb.showChunkBorders ? db.ShowChunkBorders : 0)
    }
    const Xb = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      pb = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      ob = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      Ab = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      lb = 5,
      Kb = 4294967295;

    function Wb(bb) {
      return (bb.showFog ? wb.ShowFog : 0) | (bb.lighting ? wb.Lighting : 0) | (bb.chunkFade ? wb.ChunkFade : 0)
    }
    const Cb = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      db = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        All: 127
      },
      rb = {
        Release: 1,
        KeepTouches: 2
      },
      jb = {
        Point: 1,
        Stamped: 2
      },
      nb = {
        Add: 1,
        Clear: 2
      },
      Db = 1,
      xb = 8,
      zb = 16777215,
      gb = 4,
      ib = {
        Resume: 1
      },
      vb = {
        Held: 1
      };

    function tb(bb, ub) {
      return (bb | ub << 8) >>> 0
    }

    function Jb(bb) {
      return 255 & bb
    }

    function eb(bb) {
      return bb >>> 8
    }

    function Nb(bb) {
      return bb + 3 & -4
    }
    const sb = 16777216,
      Mb = 20;
    const mb = 8,
      Ib = 8,
      Pb = 16777216,
      qb = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      Eb = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      yb = 16,
      Vb = {
        Lost: 0,
        Gone: 1
      },
      Fb = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function fb(bb) {
      return bb === Fb.WorldgenSeed || bb === Fb.Generate
    }
    const kb = 4,
      Tb = 99,
      cb = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      Qb = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 1,
        LOST: 0,
        PIPELINE_FAILED: 1
      },
      Rb = {
        FRAMES: 65535,
        RESTORE_UNHELD: 65536,
        LINKS_RUNNING: 1 << 17
      },
      bu = 12,
      uu = 16,
      hu = 4,
      Bu = 12,
      Ou = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      Gu = 4,
      Uu = 8,
      Lu = 8,
      Yu = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      Su = {
        Crit: 1,
        HitSelf: 2
      },
      au = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      Hu = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      wu = 12,
      Zu = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      Xu = 67108864;

    function pu(bb) {
      for (const [ub, hb] of Object.entries(Bb.f))
        if (hb === bb) return ub;
      return `Unknown${bb}`
    }

    function ou(bb) {
      return {
        status: bb[Bb.B.Status],
        lastError: bb[Bb.B.LastError],
        lastErrorDetail: bb[Bb.B.LastErrorDetail],
        errorCount: bb[Bb.B.ErrorCount],
        frameIndex: bb[Bb.B.FrameIndex],
        tickIndex: bb[Bb.B.TickIndex],
        renderPending: bb[Bb.B.RenderPending],
        firstView: bb[Bb.B.FirstView],
        chunksCancelled: bb[Bb.B.ChunksCancelled]
      }
    }
  },
  4547: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ub,
      h: () => Gb,
      k: () => Ob
    });
    var Bb = hb(4555);

    function Ob(bb) {
      return "none" !== bb
    }

    function Gb(bb, ub) {
      if (!bb) return "none";
      switch (ub) {
        case Bb.Y.Drawn:
          return "drawn";
        case Bb.Y.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function Ub(bb) {
      return "drawn" === bb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);