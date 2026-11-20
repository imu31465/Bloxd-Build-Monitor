export const id = 33;
export const ids = [33];
export const modules = {
  9145: (qq, Eq, gq) => {
    function Yq(qq, Eq) {
      return 0 === qq.length ? 0 : qq[Math.min(qq.length - 1, Math.floor(Eq * qq.length))]
    }

    function lq(qq) {
      return qq.toFixed(1)
    }
    gq.d(Eq, {
      b: () => lq,
      e: () => Yq
    })
  },
  9141: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      FIRST_SUMMARIES_FOR_MS: () => Vq,
      FIRST_SUMMARY_MS: () => aq,
      FrameDebugLog: () => tq,
      OUTLIER_BURST: () => jq,
      OUTLIER_MS: () => dq,
      OUTLIER_REFILL_MS: () => Hq,
      SUMMARY_MS: () => Nq,
      startFrameDebug: () => vq
    });
    var Yq = gq(4625),
      lq = gq(4616),
      Oq = gq(9145),
      mq = gq(2733),
      xq = gq(1060),
      Aq = gq(2886);
    class cq {
      constructor() {
        this.kind = void 0, this.entries = new Float64Array(256), this.next = 0, this.size = 0, this.onLongFrame = qq => {
          const Eq = qq;
          this.add(Eq.startTime, Eq.duration, Eq.blockingDuration, (0, xq.l)(Eq))
        }, this.onLongTask = qq => {
          this.add(qq.startTime, qq.duration, 0, 0)
        }, null !== (0, Aq.c)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, Aq.c)("longtask", this.onLongTask) ? "longtask" : null
      }
      add(qq, Eq, gq, Yq) {
        this.entries.set([qq, Eq, gq, Yq], 4 * this.next), this.next = (this.next + 1) % 64, this.size = Math.min(this.size + 1, 64)
      }
      describe(qq, Eq) {
        if (null === this.kind) return "long tasks n/a";
        let gq = 0,
          Yq = 0,
          lq = 0,
          Oq = 0;
        for (let xq = 0; xq < this.size; xq++) {
          const mq = 4 * xq,
            Aq = this.entries[mq] + this.entries[mq + 1];
          Aq > qq && Aq <= Eq + 2 && (gq++, Yq += this.entries[mq + 1], lq += this.entries[mq + 2], Oq += this.entries[mq + 3])
        }
        const mq = "loaf" === this.kind && gq > 0 ? ` (blocking ${lq.toFixed(0)}, script ${Oq.toFixed(0)})` : "";
        return `${gq} ${this.kind} ${Yq.toFixed(0)} ms${mq}`
      }
    }

    function uq(qq, Eq) {
      return Eq < 0 || qq < Eq ? qq : qq - Eq
    }
    class Bq {
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
      setSource(qq) {
        this.source = qq
      }
      start(qq) {
        this.before = {
          chunksReceived: -1,
          chunksCancelled: -1,
          chunksStored: -1,
          jobsSent: -1,
          jobsDone: -1,
          jobsInFlight: -1,
          workersLive: -1,
          workersRetired: -1
        }, this.lastMs = qq
      }
      visibilityChanged(qq) {
        this.visibilityChanges++, document.hidden ? this.hiddenSinceMs = qq : this.hiddenSinceMs >= 0 && (this.hiddenMs += qq - this.hiddenSinceMs, this.hiddenSinceMs = -1)
      }
      take(qq) {
        var Eq;
        const gq = [];
        if (!0 === (null === (Eq = this.source) || void 0 === Eq ? void 0 : Eq.call(this, this.now)) && (Yq = this.now, lq = this.before, Yq.chunksReceived !== lq.chunksReceived || Yq.chunksCancelled !== lq.chunksCancelled || Yq.chunksStored !== lq.chunksStored || Yq.jobsSent !== lq.jobsSent || Yq.jobsDone !== lq.jobsDone || Yq.jobsInFlight !== lq.jobsInFlight || Yq.workersLive !== lq.workersLive || Yq.workersRetired !== lq.workersRetired)) {
          gq.push(function(qq, Eq) {
            const gq = [`chunks +${uq(qq.chunksReceived,Eq.chunksReceived)} got`, `+${uq(qq.chunksCancelled,Eq.chunksCancelled)} cancelled`];
            qq.chunksStored >= 0 && gq.push(`${qq.chunksStored} stored`);
            const Yq = `jobs +${uq(qq.jobsSent,Eq.jobsSent)} sent, +${uq(qq.jobsDone,Eq.jobsDone)} done, ${qq.jobsInFlight} in flight`;
            return `${gq.join(", ")}; ${Yq}; workers ${qq.workersLive} live, ${qq.workersRetired} retired`
          }(this.now, this.before));
          const qq = this.before;
          this.before = this.now, this.now = qq
        }
        var Yq, lq;
        if (this.hiddenSinceMs >= 0 && (this.hiddenMs += qq - this.hiddenSinceMs, this.hiddenSinceMs = qq), (this.visibilityChanges > 0 || this.hiddenMs > 0) && (gq.push(`hidden ${this.visibilityChanges} changes, ${Math.round(this.hiddenMs)} ms`), this.visibilityChanges = 0, this.hiddenMs = 0), 0 === gq.length) return null;
        const Oq = `load ${Math.round((qq-this.lastMs)/1e3)}s: ${gq.join("; ")}`;
        return this.lastMs = qq, Oq
      }
    }
    class Wq {
      constructor() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.run = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
      drawn() {
        this.run = 0
      }
      add(qq, Eq, gq) {
        this.count++, "paced" === qq ? this.paced++ : "skipped" === qq && this.skipped++, this.run++, this.run > this.longest && (this.longest = this.run, this.longestMs = Eq, this.longestAhead = gq)
      }
      describe() {
        if (0 === this.count) return "0 undrawn";
        const qq = this.count - this.paced - this.skipped;
        return `${this.count} undrawn: ${this.paced} paced, ${this.skipped} skipped, ${qq} other, longest ${this.longest} in ${(0,Oq.b)(this.longestMs)} ms at ${this.longestAhead} ahead`
      }
      reset() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
    }
    const Nq = 2e4,
      aq = 5e3,
      Vq = 6e4,
      dq = 250,
      jq = 10,
      Hq = 6e4,
      oq = 8192;

    function Pq(qq) {
      return qq.mainMs = 0, qq.renderMs = 0, qq.ticks = 0, qq.tickMs = 0, qq.rafs = 0, qq.pendingBefore = -1, qq.pendingMax = -1, qq.pendingAfter = -1, qq
    }

    function Qq() {
      return Pq({})
    }
    class yq {
      constructor() {
        this.intervals = new Float64Array(oq), this.totals = Qq(), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = new Wq, this.shown = 0, this.dropped = 0
      }
      reset() {
        Pq(this.totals), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn.reset(), this.shown = 0, this.dropped = 0
      }
    }
    class tq {
      constructor() {
        this.longTasks = new cq, this.summary = new yq, this.current = Qq(), this.lastDrawnStartMs = -1, this.lastPending = -1, this.ahead = -1, this.tokens = jq, this.lastRefillMs = performance.now(), this.waiting = [], this.outlierTimer = null, this.flushTimer = null, this.startedMs = 0, this.lastFlushMs = 0, this.loadLine = new Bq, this.inGameSinceFlush = !1, this.visibilityChanged = () => {
          this.restart(), this.loadLine.visibilityChanged(performance.now())
        }, this.restart = () => {
          this.lastDrawnStartMs = -1
        }, this.animationFrame = () => {
          this.current.rafs++
        }, this.wasmFrame = (qq, Eq, gq, lq, Oq, mq) => {
          this.ahead = qq.headerWord(Yq.C.Pacing) & Yq.T.AheadMask, this.frame(Eq, gq, lq, Oq, qq.headerWord(Yq.C.RenderUs) / 1e3, qq.headerWord(Yq.C.TicksRun), mq, qq.headerWord(Yq.C.RenderPending))
        }, this.wasmPeekPaced = qq => {
          const Eq = performance.now();
          this.frame(Eq, Eq, "paced", qq, 0, 0, 0, this.lastPending)
        }, this.jsFrame = (qq, Eq, gq) => {
          this.frame(qq, Eq, "drawn", gq, Eq - qq, 0, 0, -1)
        }, this.jsTick = qq => {
          this.current.mainMs += qq, this.current.ticks++, this.current.tickMs += qq
        }, this.logOutliers = () => {
          this.outlierTimer = null;
          const qq = performance.now();
          let Eq = 0;
          for (const gq of this.waiting) {
            if (gq.dueMs > qq) {
              this.waiting[Eq++] = gq;
              continue
            }
            const Yq = [`long frame ${(0,Oq.b)(gq.intervalMs)} ms ending at ${(0,Oq.b)(gq.endMs)} ms: main ${(0,Oq.b)(gq.mainMs)} (render ${(0,Oq.b)(gq.renderMs)}, ${gq.ticks} ticks ${(0,Oq.b)(gq.tickMs)}), outside ${(0,Oq.b)(gq.intervalMs-gq.mainMs)}`, `${gq.rafs} rafs`];
            gq.pendingBefore >= 0 && Yq.push(`pending ${gq.pendingBefore} -> ${gq.pendingAfter} (max ${gq.pendingMax})`), Yq.push(this.longTasks.describe(gq.endMs - gq.intervalMs, gq.endMs)), (0, mq.m)("frame", Yq.join("; "))
          }
          this.waiting.length = Eq, Eq > 0 && (this.outlierTimer = setTimeout(this.logOutliers, this.waiting[0].dueMs - qq))
        }, this.flush = () => {
          this.flushTimer = null;
          const qq = performance.now(),
            Eq = Math.round((qq - this.lastFlushMs) / 1e3);
          this.lastFlushMs = qq, this.scheduleFlush();
          if (this.logSummary(Eq) || this.inGameSinceFlush) {
            const Eq = this.loadLine.take(qq);
            null !== Eq && (0, mq.m)("frame", Eq)
          }
          this.inGameSinceFlush = !1, this.summary.reset()
        }, document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      start(qq, Eq) {
        var gq;
        this.restart(), this.startedMs = performance.now(), this.lastFlushMs = this.startedMs, this.loadLine.start(this.startedMs), this.scheduleFlush(), (0, mq.m)("frame", `start: ${qq} client, ${Eq}, dpr ${window.devicePixelRatio}, long tasks ${null!==(gq=this.longTasks.kind)&&void 0!==gq?gq:"n/a"}; a summary each ${Nq/1e3} s in game (${aq/1e3} s for the first ${Vq/1e3} s), outliers over ${dq} ms`)
      }
      setLoadCounts(qq) {
        this.loadLine.setSource(qq)
      }
      joined() {
        this.startedMs = performance.now(), this.scheduleFlush()
      }
      inGame() {
        this.inGameSinceFlush = !0
      }
      scheduleFlush() {
        null !== this.flushTimer && clearTimeout(this.flushTimer);
        const qq = performance.now() - this.startedMs < Vq;
        this.flushTimer = setTimeout(this.flush, qq ? aq : Nq)
      }
      frame(qq, Eq, gq, Yq, Oq, mq, xq, Aq) {
        if (!Yq) return this.restart(), void(this.lastPending = Aq);
        const cq = this.current;
        (0, lq.c)(gq) ? (this.lastDrawnStartMs >= 0 && (cq.pendingAfter = this.lastPending, this.closeInterval(qq - this.lastDrawnStartMs, qq)), this.lastDrawnStartMs = qq, Pq(cq).pendingBefore = this.lastPending, this.summary.undrawn.drawn()) : this.lastDrawnStartMs >= 0 && this.summary.undrawn.add(gq, Eq - this.lastDrawnStartMs, this.ahead), cq.mainMs += Eq - qq, cq.renderMs += Oq, cq.ticks += mq, cq.tickMs += xq, cq.pendingMax = Math.max(cq.pendingMax, Aq), this.lastPending = Aq, this.summary.totals.pendingMax = Math.max(this.summary.totals.pendingMax, Aq)
      }
      closeInterval(qq, Eq) {
        const gq = this.summary,
          Yq = this.current;
        gq.frames < oq && (gq.intervals[gq.frames] = qq), gq.frames++, gq.maxMs = Math.max(gq.maxMs, qq);
        const lq = gq.totals;
        lq.mainMs += Yq.mainMs, lq.renderMs += Yq.renderMs, lq.ticks += Yq.ticks, lq.tickMs += Yq.tickMs, lq.rafs += Yq.rafs, qq > 50 && gq.slow++, qq > dq && this.outlier(qq, Eq)
      }
      outlier(qq, Eq) {
        const gq = Math.floor((Eq - this.lastRefillMs) / Hq);
        gq > 0 && (this.tokens = Math.min(jq, this.tokens + gq), this.lastRefillMs += gq * Hq), 0 !== this.tokens ? (this.tokens--, this.summary.shown++, this.waiting.push({
          ...this.current,
          endMs: Eq,
          intervalMs: qq,
          dueMs: performance.now() + 1e3
        }), this.outlierTimer ??= setTimeout(this.logOutliers, 1e3)) : this.summary.dropped++
      }
      logSummary(qq) {
        const Eq = this.summary,
          gq = Eq.totals;
        if (0 === Eq.frames) return Eq.undrawn.count > 0 && (0, mq.m)("frame", `${qq}s: no frames drawn, ${Eq.undrawn.describe()}; pending max ${gq.pendingMax}`), Eq.undrawn.count > 0;
        const Yq = Eq.intervals.subarray(0, Math.min(Eq.frames, oq)).sort(),
          lq = [`${Eq.frames} frames, median ${(0,Oq.b)((0,Oq.e)(Yq,.5))} p95 ${(0,Oq.b)((0,Oq.e)(Yq,.95))} max ${(0,Oq.b)(Eq.maxMs)} ms, ${Eq.slow} over 50, ${Eq.shown+Eq.dropped} over ${dq}`, `${gq.rafs} rafs, ${Eq.undrawn.describe()}`, `main ${(0,Oq.b)(gq.mainMs)} ms (render ${(0,Oq.b)(gq.renderMs)}, ${gq.ticks} ticks ${(0,Oq.b)(gq.tickMs)})`];
        return gq.pendingMax >= 0 && lq.push(`pending max ${gq.pendingMax}`), this.ahead >= 0 && lq.push(`${this.ahead} frames ahead`), lq.push(`outliers ${Eq.shown} logged, ${Eq.dropped} dropped`), (0, mq.m)("frame", `${qq}s: ${lq.join("; ")}`), !0
      }
    }
    let rq = null;

    function vq(qq, Eq) {
      return rq ??= new tq, rq.start(qq, Eq), rq
    }
  },
  4625: (qq, Eq, gq) => {
    gq.d(Eq, {
      A: () => xq,
      Ab: () => rq,
      B: () => Yq,
      C: () => Oq,
      E: () => dq,
      Eb: () => tq,
      G: () => wq,
      H: () => uq,
      Hb: () => Mq,
      L: () => Bq,
      Lb: () => Jq,
      Nb: () => zq,
      O: () => cq,
      Q: () => jq,
      Qb: () => pq,
      T: () => Aq,
      Tb: () => Gq,
      V: () => aq,
      Vb: () => Qq,
      Wb: () => yq,
      X: () => Nq,
      Z: () => vq,
      _: () => nq,
      _b: () => Rq,
      bb: () => bq,
      bc: () => lq,
      e: () => sq,
      ec: () => Xq,
      f: () => Fq,
      fb: () => hq,
      i: () => Wq,
      ib: () => iq,
      kb: () => kq,
      m: () => Pq,
      mb: () => Lq,
      pb: () => Sq,
      q: () => Uq,
      sb: () => Zq,
      t: () => oq,
      u: () => Hq,
      ub: () => Tq,
      wb: () => fq,
      y: () => mq,
      zb: () => Vq
    });
    const Yq = 32,
      lq = 33.333333333333336,
      Oq = {
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
      mq = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      xq = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      Aq = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      cq = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      uq = 7,
      Bq = {
        ChunksReceived: 0,
        ChunksStored: 1,
        JobsSent: 2,
        JobsDone: 3,
        JobsInFlight: 4,
        WorkersLive: 5,
        WorkersRetired: 6
      },
      Wq = {
        Look: 0,
        Remesh: 1
      },
      Nq = 8,
      aq = 1,
      Vq = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      dq = {
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
      jq = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      Hq = {
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
      oq = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      Pq = 4,
      Qq = 4,
      yq = 65535,
      tq = {
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
      rq = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      vq = 88,
      hq = 0,
      nq = 24,
      bq = 48,
      iq = 80,
      Zq = {
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
      fq = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      Mq = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      Tq = {
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
      zq = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      Sq = 65535,
      pq = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      Gq = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      Lq = 2,
      Jq = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      kq = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      Rq = {
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
      Uq = {
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
      Fq = {
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
      sq = 8,
      Xq = {
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
      wq = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  4622: (qq, Eq, gq) => {
    gq.d(Eq, {
      $c: () => eq,
      Ab: () => qE,
      Ac: () => Yq.bb,
      Bd: () => Yq.bc,
      Be: () => Aq,
      Ce: () => Sq,
      D: () => cq,
      Eb: () => gE,
      Ec: () => Yq.fb,
      Fd: () => Oq,
      Fe: () => dE,
      Gb: () => Yq.L,
      H: () => Yq.i,
      Hb: () => lq.h,
      Hd: () => dq,
      He: () => Nq,
      I: () => Dq,
      Ic: () => Yq.ib,
      Kc: () => Yq.pb,
      Kd: () => AE,
      Lb: () => rq,
      Lc: () => aE,
      M: () => Yq.m,
      Md: () => Lq,
      Nd: () => kq,
      P: () => Kq,
      Pb: () => pq,
      Pc: () => uE,
      Rc: () => lE,
      Rd: () => Gq,
      S: () => Yq.u,
      Sb: () => iq,
      Tb: () => nq,
      Ub: () => Yq.Q,
      Uc: () => Yq.sb,
      Vd: () => Fq,
      W: () => Yq.y,
      Wb: () => Zq,
      Xc: () => Yq.ub,
      Y: () => Yq.A,
      _: () => Bq,
      _b: () => Qq,
      _c: () => Yq.wb,
      ae: () => Rq,
      bb: () => Hq,
      bc: () => mE,
      c: () => EE,
      ce: () => Xq,
      d: () => Vq,
      db: () => Yq.B,
      dd: () => Yq.Ab,
      f: () => aq,
      fc: () => oq,
      g: () => cE,
      gd: () => Yq.Eb,
      ge: () => sq,
      hb: () => Yq.C,
      hc: () => BE,
      i: () => vq,
      ic: () => lq.l,
      id: () => Yq.Hb,
      je: () => xE,
      kb: () => Jq,
      l: () => tq,
      ld: () => Yq.Nb,
      m: () => Yq.e,
      mc: () => jq,
      ne: () => VE,
      o: () => WE,
      ob: () => OE,
      p: () => bq,
      pd: () => Yq.Qb,
      q: () => mq,
      qc: () => YE,
      r: () => fq,
      rb: () => uq,
      rd: () => Yq.Tb,
      re: () => Pq,
      sb: () => Yq.E,
      se: () => wq,
      u: () => NE,
      uc: () => Yq.Z,
      ue: () => zq,
      vd: () => hq,
      ve: () => Tq,
      w: () => Iq,
      wb: () => Uq,
      xb: () => Cq,
      xc: () => Yq._,
      yd: () => Yq.Vb,
      z: () => Yq.f,
      zb: () => Yq.H,
      zd: () => Yq.Wb,
      ze: () => Mq
    });
    var Yq = gq(4625),
      lq = gq(2357);
    const Oq = Math.round(1e3 / Yq.bc),
      mq = 4,
      xq = 2;

    function Aq() {
      return crypto.getRandomValues(new Uint32Array(xq))
    }
    const cq = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      uq = 16,
      Bq = {
        Draws: 1,
        NetAll: 2
      },
      Wq = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function Nq(qq) {
      return (qq.nametagsHidden ? yq.NametagsHidden : 0) | (qq.crouchToggle ? yq.CrouchToggle : 0) | (qq.bhopDisabled ? yq.BhopDisabled : 0) | (qq.disableBobbing ? yq.DisableBobbing : 0) | (qq.ezTowering ? yq.EzTowering : 0) | (qq.ezBridging ? yq.EzBridging : 0) | (qq.showChunkBorders ? yq.ShowChunkBorders : 0)
    }
    const aq = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      Vq = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      dq = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      jq = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      Hq = 5,
      oq = 4294967295;

    function Pq(qq) {
      return (qq.showFog ? Wq.ShowFog : 0) | (qq.lighting ? Wq.Lighting : 0) | (qq.chunkFade ? Wq.ChunkFade : 0)
    }
    const Qq = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      yq = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        All: 127
      },
      tq = {
        Release: 1,
        KeepTouches: 2
      },
      rq = {
        Point: 1,
        Stamped: 2
      },
      vq = {
        Add: 1,
        Clear: 2
      },
      hq = 1,
      nq = 8,
      bq = 16777215,
      iq = 4,
      Zq = {
        Resume: 1
      },
      fq = {
        Held: 1
      };

    function Mq(qq, Eq) {
      return (qq | Eq << 8) >>> 0
    }

    function Tq(qq) {
      return 255 & qq
    }

    function zq(qq) {
      return qq >>> 8
    }

    function Sq(qq) {
      return qq + 3 & -4
    }
    const pq = 16777216,
      Gq = 20;
    const Lq = 8,
      Jq = 8,
      kq = 16777216,
      Rq = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      Uq = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      Fq = 16,
      sq = {
        Lost: 0,
        Gone: 1
      },
      Xq = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function wq(qq) {
      return qq === Xq.WorldgenSeed || qq === Xq.Generate
    }
    const Kq = 4,
      Cq = 99,
      Iq = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      eq = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 1,
        LOST: 0,
        PIPELINE_FAILED: 1
      },
      Dq = {
        FRAMES: 65535,
        RESTORE_UNHELD: 65536,
        LINKS_RUNNING: 1 << 17
      },
      qE = 12,
      EE = 16,
      gE = 4,
      YE = 12,
      lE = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      OE = 4,
      mE = 8,
      xE = 8,
      AE = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      cE = {
        Crit: 1,
        HitSelf: 2
      },
      uE = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      BE = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      WE = 12,
      NE = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      aE = 67108864;

    function VE(qq) {
      for (const [Eq, gq] of Object.entries(Yq.f))
        if (gq === qq) return Eq;
      return `Unknown${qq}`
    }

    function dE(qq) {
      return {
        status: qq[Yq.C.Status],
        lastError: qq[Yq.C.LastError],
        lastErrorDetail: qq[Yq.C.LastErrorDetail],
        errorCount: qq[Yq.C.ErrorCount],
        frameIndex: qq[Yq.C.FrameIndex],
        tickIndex: qq[Yq.C.TickIndex],
        renderPending: qq[Yq.C.RenderPending],
        firstView: qq[Yq.C.FirstView],
        chunksCancelled: qq[Yq.C.ChunksCancelled]
      }
    }
  },
  4616: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => mq,
      e: () => Oq,
      g: () => lq
    });
    var Yq = gq(4622);

    function lq(qq) {
      return "none" !== qq
    }

    function Oq(qq, Eq) {
      if (!qq) return "none";
      switch (Eq) {
        case Yq.Y.Drawn:
          return "drawn";
        case Yq.Y.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function mq(qq) {
      return "drawn" === qq
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);