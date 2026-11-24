export const id = 91;
export const ids = [91];
export const modules = {
  36453: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => aB,
      g: () => NB,
      k: () => UB,
      l: () => uB,
      m: () => LB
    });
    var QB = zB(667),
      nB = zB(1794),
      dB = zB(4893);
    class IB {
      constructor(BB, jB) {
        this.width = BB, this.Ep = jB, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(BB * jB)
      }
      push(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const zB = this.data,
          QB = this.next * this.width;
        for (let nB = 0; nB < this.width; nB++) zB[QB + nB] = BB[jB + nB];
        this.next = (this.next + 1) % this.Ep, this.size = Math.min(this.size + 1, this.Ep)
      }
      rows() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
        const zB = [],
          QB = (this.next - this.size + this.Ep) % this.Ep;
        for (let nB = 0; nB < this.size; nB++) {
          const dB = (QB + nB) % this.Ep * this.width;
          this.data[dB + BB] >= jB && zB.push(Array.from(this.data.subarray(dB, dB + this.width)))
        }
        return zB
      }
      lines() {
        return this.rows().map((BB => BB.join(",")))
      }
    }
    const NB = 10,
      uB = {
        idle: 0,
        Cs: 1,
        SF: 2,
        YF: 3,
        Dy: 4
      },
      UB = {
        none: 0,
        skipped: 1,
        paced: 2,
        drawn: 3
      },
      aB = {
        lockGained: 1,
        lockLost: 2,
        lockError: 3,
        visible: 4,
        hidden: 5,
        focus: 6,
        blur: 7,
        jsClient: 8,
        wasmClient: 9,
        droppedCopies: 10,
        stepsLost: 11,
        cameraSetsLost: 12
      },
      pB = 12e3,
      rB = ["nowMs", "dtMs", "rawX", "rawY", "turnedX", "turnedY", "outcome", "velocityX", "velocityY", "limit"],
      sB = ["timeStamp", "nowMs", "movementX", "movementY", "locked"],
      JB = ["nowMs", "dtMs", "heading", "pitch", "kind"],
      mB = ["nowMs", "source", "headingBefore", "pitchBefore", "headingAfter", "pitchAfter"],
      yB = ["nowMs", "change", "count"];

    function kB(BB) {
      return "js" === BB ? aB.jsClient : aB.wasmClient
    }
    class GB {
      constructor() {
        this.steps = new IB(NB, pB), this.events = new IB(sB.length, pB), this.frames = new IB(JB.length, pB), this.cameraSets = new IB(dB.e, 256), this.changes = new IB(yB.length, 256)
      }
    }
    const LB = new class {
      constructor() {
        this.rings = null, this.sample = new Float64Array(sB.length), this.startedClient = null, this.startedAtMs = 0
      }
      get client() {
        return this.startedClient
      }
      start(BB, jB) {
        this.startedClient = BB, this.startedAtMs = performance.now(), null !== this.rings ? this.change(kB(BB)) : jB && this.allocate()
      }
      lockGained() {
        this.allocate(), this.change(aB.lockGained)
      }
      allocate() {
        null === this.rings && (this.rings = new GB, null !== this.startedClient && this.changeAt(this.startedAtMs, kB(this.startedClient), 1))
      }
      step(BB, jB) {
        var zB;
        BB[jB + 6] !== uB.Dy && (null === (zB = this.rings) || void 0 === zB || zB.steps.push(BB, jB))
      }
      cameraSet(BB, jB) {
        var zB;
        null === (zB = this.rings) || void 0 === zB || zB.cameraSets.push(BB, jB)
      }
      mouseMove(BB, jB) {
        const zB = this.rings;
        if (null === zB) return;
        const QB = this.sample;
        QB[0] = BB.timeStamp, QB[1] = performance.now(), QB[2] = BB.movementX, QB[3] = BB.movementY, QB[4] = jB ? 1 : 0, zB.events.push(QB)
      }
      frame(BB, jB, zB, QB) {
        const nB = this.rings;
        if (null === nB || QB === UB.none) return;
        const dB = this.sample;
        dB[0] = performance.now(), dB[1] = BB, dB[2] = jB, dB[3] = zB, dB[4] = QB, nB.frames.push(dB)
      }
      change(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.changeAt(performance.now(), BB, jB)
      }
      changeAt(BB, jB, zB) {
        const QB = this.rings;
        if (null === QB) return;
        const nB = this.sample;
        nB[0] = BB, nB[1] = jB, nB[2] = zB, QB.changes.push(nB)
      }
      dumpText() {
        var BB, jB;
        const zB = this.rings;
        return [`look records (${this.startedClient}): ${rB.join(",")}`, ...null !== (BB = null === zB || void 0 === zB ? void 0 : zB.steps.lines()) && void 0 !== BB ? BB : [], `mousemove events: ${sB.join(",")}`, ...null !== (jB = null === zB || void 0 === zB ? void 0 : zB.events.lines()) && void 0 !== jB ? jB : []].join("\n")
      }
      toJson(BB, jB) {
        var zB;
        const nB = BB - 6e4,
          dB = this.rings,
          IB = function(BB, jB) {
            var zB;
            let QB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const dB = null !== (zB = null === BB || void 0 === BB ? void 0 : BB.rows(QB, nB)) && void 0 !== zB ? zB : [];
            return {
              columns: jB,
              fromMs: 0 === dB.length ? null : dB[0][QB],
              rows: dB
            }
          };
        return {
          version: QB.b,
          client: null !== (zB = this.startedClient) && void 0 !== zB ? zB : "not started",
          savedAt: (new Date).toISOString(),
          savedAtMs: BB,
          keptMs: 6e4,
          page: window.location.href,
          userAgent: navigator.userAgent,
          devicePixelRatio: window.devicePixelRatio,
          screen: {
            width: window.screen.width,
            height: window.screen.height
          },
          Ky: null !== document.pointerLockElement,
          visibility: document.visibilityState,
          ...jB,
          outcomes: uB,
          frameKinds: UB,
          changes: aB,
          lookSteps: IB(null === dB || void 0 === dB ? void 0 : dB.steps, rB),
          mouseMoves: IB(null === dB || void 0 === dB ? void 0 : dB.events, sB, 1),
          frames: IB(null === dB || void 0 === dB ? void 0 : dB.frames, JB),
          cameraSets: IB(null === dB || void 0 === dB ? void 0 : dB.cameraSets, mB),
          pageChanges: IB(null === dB || void 0 === dB ? void 0 : dB.changes, yB)
        }
      }
      save(BB) {
        const jB = JSON.stringify(this.toJson(performance.now(), BB));
        (0, nB.e)(new Blob([jB], {
          type: "application/json"
        }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
      }
    }
  },
  36451: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      LOOK_DEBUG_HEADER: () => aB,
      endLookDebugTake: () => kB,
      noteLookDroppedCopy: () => GB,
      saveLookCapture: () => LB,
      startLookDebug: () => yB
    });
    var QB = zB(4893),
      nB = zB(2912),
      dB = zB(1948);
    const IB = new Map(Object.entries(QB.l).map((BB => {
      let [jB, zB] = BB;
      return [zB, jB]
    })));

    function NB(BB) {
      return (0, dB.G)(BB).toFixed(1)
    }

    function uB(BB, jB) {
      return `camera set by ${IB.get(BB[jB+1])}: heading ${`${NB(BB[jB+2])} -> ${NB(BB[jB+4])}`} deg, pitch ${`${NB(BB[jB+3])} -> ${NB(BB[jB+5])}`} deg, at ${BB[jB].toFixed(1)} ms`
    }
    var UB = zB(36453);
    const aB = 2;

    function pB(BB) {
      return Number.isFinite(BB) ? String(Math.round(10 * BB) / 10) : String(BB)
    }

    function rB(BB) {
      return Number.isFinite(BB) ? BB.toFixed(1) : String(BB)
    }
    class sB {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.SF = 0, this.pastLimit = 0, this.lockSkips = 0, this.Dy = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.cameraSets = 0, this.cameraSetsLost = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
      moved() {
        return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.SF > 0 || this.dropped > 0 || this.cameraSets > 0
      }
      hasEvent() {
        return this.SF > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
      }
    }
    class JB {
      constructor() {
        var BB = this;
        this.topicOn = (0, nB.q)("look"), this.remote = (0, nB.t)(), this.tally = new sB, this.takes = null, this.started = !1, this.record = function(jB) {
          let zB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          if (UB.m.step(jB, zB), !BB.topicOn) return;
          const QB = jB[zB],
            nB = jB[zB + 1],
            dB = jB[zB + 2],
            IB = jB[zB + 3],
            NB = jB[zB + 4],
            uB = jB[zB + 5],
            aB = jB[zB + 6],
            sB = jB[zB + 7],
            JB = jB[zB + 8],
            mB = jB[zB + 9],
            yB = BB.tally;
          switch (yB.frames++, aB) {
            case UB.l.idle:
              return void yB.idle++;
            case UB.l.Dy:
              return void yB.Dy++;
            case UB.l.YF:
              return yB.lockSkips++, void(0 === dB && 0 === IB || BB.outlier(`lock skip dropped raw (${pB(dB)}, ${pB(IB)}) at ${rB(QB)} ms`))
          }
          yB.looked++, Number.isFinite(nB) && (yB.dtMin = Math.min(yB.dtMin, nB), yB.dtMax = Math.max(yB.dtMax, nB), yB.dtSum += nB, nB > 0 && (yB.peakRate = Math.max(yB.peakRate, Math.hypot(NB, uB) / nB))), yB.raw[0] += dB, yB.raw[1] += IB, yB.turned[0] += NB, yB.turned[1] += uB;
          const kB = Math.abs(dB) > mB || Math.abs(IB) > mB,
            GB = `raw (${pB(dB)}, ${pB(IB)}) over ${rB(nB)} ms, limit ${pB(mB)}, filter v (${sB.toFixed(3)}, ${JB.toFixed(3)}) px/ms, at ${rB(QB)} ms`;
          aB === UB.l.SF ? (yB.SF++, BB.outlier(`spike put right: ${GB} -> turned (${pB(NB)}, ${pB(uB)})`)) : kB ? (yB.pastLimit++, BB.outlier(`kept past limit: ${GB}`)) : nB > 50 && (yB.longFrames++, BB.remote || BB.outlier(`long frame: ${GB}, turned in full`))
        }, this.onMouseMove = BB => {
          const jB = null !== document.pointerLockElement;
          if (UB.m.mouseMove(BB, jB), !this.topicOn) return;
          const zB = this.tally,
            {
              movementX: QB,
              movementY: nB
            } = BB;
          zB.events++;
          const dB = Math.max(Math.abs(QB), Math.abs(nB));
          zB.eventMax = Math.max(zB.eventMax, dB), dB >= 200 && (zB.bigEvents++, this.eventOutlier(`big mousemove (${QB}, ${nB}) at ${rB(BB.timeStamp)} ms, lock ${jB?"DN":"free"}`))
        }, this.onLockChange = () => {
          const BB = document.pointerLockElement;
          BB ? UB.m.lockGained() : UB.m.change(UB.e.lockLost), this.topicOn && (0, nB.n)("look", `pointer lock ${BB?`gained (${BB.tagName.toLowerCase()})`:"lost"} at ${rB(performance.now())} ms`)
        }, this.onLockError = () => {
          UB.m.change(UB.e.lockError), this.topicOn && (0, nB.n)("look", `pointer lock request failed at ${rB(performance.now())} ms`)
        }, this.onVisibility = () => {
          UB.m.change("hidden" === document.visibilityState ? UB.e.hidden : UB.e.visible), this.topicOn && (0, nB.n)("look", `page ${document.visibilityState} at ${rB(performance.now())} ms`)
        }, this.onFocus = () => {
          UB.m.change(UB.e.focus)
        }, this.onBlur = () => {
          UB.m.change(UB.e.blur)
        }, this.flush = () => {
          if (this.takeRecords(), !this.topicOn) return;
          const BB = this.tally;
          if (this.tally = new sB, !BB.moved() || this.remote && !BB.hasEvent()) return;
          const jB = BB.looked > 0 ? BB.dtSum / BB.looked : NaN,
            zB = [`${BB.frames} frames (${BB.looked} looked, ${BB.idle} idle${"wasm"===UB.m.client?`, ${BB.Dy} carried`:""})`, `dt avg ${rB(jB)} min ${rB(BB.dtMin)} max ${rB(BB.dtMax)}, ${BB.longFrames} long`, `${BB.events} mousemoves (max ${pB(BB.eventMax)} px, ${BB.bigEvents} big)`, `raw (${pB(BB.raw[0])}, ${pB(BB.raw[1])}) turned (${pB(BB.turned[0])}, ${pB(BB.turned[1])})`, `peak ${BB.peakRate.toFixed(2)} px/ms`, `put right ${BB.SF}, past limit ${BB.pastLimit}, lock skips ${BB.lockSkips}`, "lock " + (document.pointerLockElement ? "DN" : "free")];
          BB.dropped > 0 && zB.push(`${BB.dropped} doubled spike copies dropped`), BB.cameraSets > 0 && zB.push(`${BB.cameraSets} camera sets`), BB.cameraSetsLost > 0 && zB.push(`${BB.cameraSetsLost} camera set records lost`), BB.lost > 0 && zB.push(`${BB.lost} records lost`), BB.suppressed > 0 && zB.push(`${BB.suppressed} outlier lines not shown`), (0, nB.n)("look", `1s: ${zB.join("; ")}`)
        }
      }
      start(BB, jB) {
        if (UB.m.start(BB, null !== document.pointerLockElement), this.takes = jB, this.topicOn) {
          const {
            screen: jB
          } = window;
          (0, nB.n)("look", `start: ${BB} client, dpr ${window.devicePixelRatio}, screen ${jB.width}x${jB.height}, pointer lock ${document.pointerLockElement?"DN":"free"}`)
        }
        this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), window.addEventListener("focus", this.onFocus), window.addEventListener("blur", this.onBlur), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), this.topicOn && !this.remote && (0, nB.j)("look", (() => UB.m.dumpText())))
      }
      outlier(BB) {
        const jB = this.tally;
        jB.outliers >= 20 ? jB.suppressed++ : (jB.outliers++, (0, nB.n)("look", BB))
      }
      eventOutlier(BB) {
        const jB = this.tally;
        jB.eventLines >= 10 ? jB.suppressed++ : (jB.eventLines++, (0, nB.n)("look", BB))
      }
      takeRecords() {
        if (null === this.takes) return;
        const BB = this.takes.look();
        if (BB.length >= aB) {
          this.counted(UB.e.stepsLost, BB[0]), this.counted(UB.e.droppedCopies, BB[1]);
          for (let jB = aB; jB + UB.g <= BB.length; jB += UB.g) this.record(BB, jB)
        }
        const jB = this.takes.cameraSets();
        if (jB.length >= QB.d) {
          this.counted(UB.e.cameraSetsLost, jB[0]);
          for (let BB = QB.d; BB + QB.e <= jB.length; BB += QB.e) UB.m.cameraSet(jB, BB), this.topicOn && (this.tally.cameraSets++, this.outlier(uB(jB, BB)))
        }
      }
      droppedCopy() {
        this.counted(UB.e.droppedCopies, 1)
      }
      counted(BB, jB) {
        if (0 === jB) return;
        if (UB.m.change(BB, jB), !this.topicOn) return;
        const zB = this.tally;
        BB === UB.e.droppedCopies ? zB.dropped += jB : BB === UB.e.stepsLost ? zB.lost += jB : zB.cameraSetsLost += jB
      }
      endTake() {
        this.takeRecords(), this.takes = null
      }
    }
    let mB = null;

    function yB(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return mB ??= new JB, mB.start(BB, jB), mB.record
    }

    function kB() {
      var BB;
      null === (BB = mB) || void 0 === BB || BB.endTake()
    }

    function GB() {
      var BB;
      null === (BB = mB) || void 0 === BB || BB.droppedCopy()
    }
    async function LB(BB) {
      var jB;
      null === (jB = mB) || void 0 === jB || jB.takeRecords();
      const {
        clientHintsRead: QB,
        debugDeviceLines: nB
      } = await zB.e(29).then((() => zB(34114)));
      await QB, UB.m.save({
        ...BB,
        device: nB()
      })
    }
  },
  4893: (BB, jB, zB) => {
    zB.d(jB, {
      $: () => VB,
      A: () => NB,
      Ab: () => TB,
      B: () => QB,
      C: () => dB,
      D: () => gB,
      E: () => RB,
      Eb: () => WB,
      Fb: () => eB,
      G: () => pB,
      J: () => rB,
      Jb: () => iB,
      K: () => aB,
      M: () => UB,
      Mb: () => qB,
      Pb: () => KB,
      Q: () => tB,
      S: () => uB,
      Sb: () => nB,
      T: () => mB,
      U: () => JB,
      W: () => HB,
      Wb: () => vB,
      Y: () => FB,
      Z: () => YB,
      _: () => DB,
      bb: () => xB,
      d: () => GB,
      e: () => kB,
      eb: () => lB,
      gb: () => PB,
      h: () => bB,
      hb: () => hB,
      ib: () => AB,
      l: () => LB,
      m: () => cB,
      mb: () => XB,
      ob: () => yB,
      p: () => sB,
      q: () => EB,
      r: () => CB,
      rb: () => oB,
      sb: () => fB,
      u: () => MB,
      v: () => SB,
      vb: () => ZB,
      xb: () => wB,
      y: () => IB
    });
    const QB = 32,
      nB = 33.333333333333336,
      dB = {
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
      IB = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      NB = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      uB = {
        AheadMask: 15,
        Defaulted: 128,
        LagsShift: 8,
        CountMask: 4095
      },
      UB = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      aB = {
        PlayerBound: 32,
        JoinPreload: 64
      },
      pB = 14,
      rB = {
        ChunksReceived: 0,
        ChunksStored: 1,
        JobsSent: 2,
        JobsDone: 3,
        JobsInFlight: 4,
        WorkersLive: 5,
        WorkersRetired: 6,
        ViewQueuedPrograms: 7,
        FirstViewLinkMs: 8,
        FirstViewTerrainMs: 9,
        FirstViewHeldMs: 10,
        FirstViewOtherMs: 11,
        FirstViewGaps: 12,
        FirstViewGapMs: 13
      },
      sB = {
        Look: 0,
        Remesh: 1,
        CameraSet: 2
      },
      JB = 8,
      mB = 1,
      yB = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      kB = 6,
      GB = 1,
      LB = {
        SetCamDir: 0,
        Forced: 1,
        ScriptedTake: 2,
        ScriptedPose: 3,
        ScriptedRelease: 4
      },
      gB = {
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
      tB = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      SB = {
        RawMessage: 1,
        CoreErrors: 2,
        LocalHurt: 16,
        AttackHit: 17,
        HealthChanged: 18,
        LocalPlayerBound: 19,
        ConnectionState: 20,
        ReconnectGrace: 5,
        GameCalls: 96,
        JoinPreloadEnded: 6,
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
      MB = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      EB = 4,
      iB = 4,
      qB = 65535,
      fB = {
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
      oB = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      HB = 88,
      DB = 0,
      FB = 24,
      YB = 48,
      VB = 80,
      hB = {
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
      XB = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      ZB = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      AB = {
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
      TB = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      PB = 65535,
      WB = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      eB = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      lB = 2,
      wB = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      xB = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      KB = {
        SkyTable: 600,
        SkyImagesReady: 601,
        SkyTableHeaderBytes: 8,
        SkyTableEntryBytes: 92,
        SkyImagesReadyBytes: 32,
        KindNone: 0,
        KindCustom: 1,
        KindEarth: 2,
        AddedId: 65534,
        MaxAdded: 32,
        CubeFaces: 6,
        Failed: 0
      },
      CB = {
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
      cB = {
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
      bB = 8,
      vB = {
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
      RB = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);