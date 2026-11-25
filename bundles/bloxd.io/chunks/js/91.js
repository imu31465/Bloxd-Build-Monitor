export const id = 91;
export const ids = [91];
export const modules = {
  36398: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => nB,
      h: () => vB,
      j: () => cB,
      k: () => kB,
      o: () => WB
    });
    var TB = ZB(671),
      JB = ZB(1821),
      oB = ZB(4975);
    class GB {
      constructor(BB, IB) {
        this.width = BB, this.ah = IB, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(BB * IB)
      }
      push(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ZB = this.data,
          TB = this.next * this.width;
        for (let JB = 0; JB < this.width; JB++) ZB[TB + JB] = BB[IB + JB];
        this.next = (this.next + 1) % this.ah, this.size = Math.min(this.size + 1, this.ah)
      }
      rows() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
        const ZB = [],
          TB = (this.next - this.size + this.ah) % this.ah;
        for (let JB = 0; JB < this.size; JB++) {
          const oB = (TB + JB) % this.ah * this.width;
          this.data[oB + BB] >= IB && ZB.push(Array.from(this.data.subarray(oB, oB + this.width)))
        }
        return ZB
      }
      lines() {
        return this.rows().map((BB => BB.join(",")))
      }
    }
    const vB = 10,
      kB = {
        idle: 0,
        XF: 1,
        gM: 2,
        YM: 3,
        Fq: 4
      },
      cB = {
        none: 0,
        skipped: 1,
        paced: 2,
        drawn: 3
      },
      nB = {
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
      hB = 12e3,
      zB = ["nowMs", "dtMs", "rawX", "rawY", "turnedX", "turnedY", "outcome", "velocityX", "velocityY", "limit"],
      FB = ["timeStamp", "nowMs", "movementX", "movementY", "locked"],
      NB = ["nowMs", "dtMs", "heading", "pitch", "kind"],
      gB = ["nowMs", "source", "headingBefore", "pitchBefore", "headingAfter", "pitchAfter"],
      qB = ["nowMs", "change", "count"];

    function yB(BB) {
      return "js" === BB ? nB.jsClient : nB.wasmClient
    }
    class UB {
      constructor() {
        this.steps = new GB(vB, hB), this.events = new GB(FB.length, hB), this.frames = new GB(NB.length, hB), this.cameraSets = new GB(oB.f, 256), this.changes = new GB(qB.length, 256)
      }
    }
    const WB = new class {
      constructor() {
        this.rings = null, this.sample = new Float64Array(FB.length), this.startedClient = null, this.startedAtMs = 0
      }
      get client() {
        return this.startedClient
      }
      start(BB, IB) {
        this.startedClient = BB, this.startedAtMs = performance.now(), null !== this.rings ? this.change(yB(BB)) : IB && this.allocate()
      }
      lockGained() {
        this.allocate(), this.change(nB.lockGained)
      }
      allocate() {
        null === this.rings && (this.rings = new UB, null !== this.startedClient && this.changeAt(this.startedAtMs, yB(this.startedClient), 1))
      }
      step(BB, IB) {
        var ZB;
        BB[IB + 6] !== kB.Fq && (null === (ZB = this.rings) || void 0 === ZB || ZB.steps.push(BB, IB))
      }
      cameraSet(BB, IB) {
        var ZB;
        null === (ZB = this.rings) || void 0 === ZB || ZB.cameraSets.push(BB, IB)
      }
      mouseMove(BB, IB) {
        const ZB = this.rings;
        if (null === ZB) return;
        const TB = this.sample;
        TB[0] = BB.timeStamp, TB[1] = performance.now(), TB[2] = BB.movementX, TB[3] = BB.movementY, TB[4] = IB ? 1 : 0, ZB.events.push(TB)
      }
      frame(BB, IB, ZB, TB) {
        const JB = this.rings;
        if (null === JB || TB === cB.none) return;
        const oB = this.sample;
        oB[0] = performance.now(), oB[1] = BB, oB[2] = IB, oB[3] = ZB, oB[4] = TB, JB.frames.push(oB)
      }
      change(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.changeAt(performance.now(), BB, IB)
      }
      changeAt(BB, IB, ZB) {
        const TB = this.rings;
        if (null === TB) return;
        const JB = this.sample;
        JB[0] = BB, JB[1] = IB, JB[2] = ZB, TB.changes.push(JB)
      }
      dumpText() {
        var BB, IB;
        const ZB = this.rings;
        return [`look records (${this.startedClient}): ${zB.join(",")}`, ...null !== (BB = null === ZB || void 0 === ZB ? void 0 : ZB.steps.lines()) && void 0 !== BB ? BB : [], `mousemove events: ${FB.join(",")}`, ...null !== (IB = null === ZB || void 0 === ZB ? void 0 : ZB.events.lines()) && void 0 !== IB ? IB : []].join("\n")
      }
      toJson(BB, IB) {
        var ZB;
        const JB = BB - 6e4,
          oB = this.rings,
          GB = function(BB, IB) {
            var ZB;
            let TB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const oB = null !== (ZB = null === BB || void 0 === BB ? void 0 : BB.rows(TB, JB)) && void 0 !== ZB ? ZB : [];
            return {
              columns: IB,
              fromMs: 0 === oB.length ? null : oB[0][TB],
              rows: oB
            }
          };
        return {
          version: TB.b,
          client: null !== (ZB = this.startedClient) && void 0 !== ZB ? ZB : "not started",
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
          mq: null !== document.pointerLockElement,
          visibility: document.visibilityState,
          ...IB,
          outcomes: kB,
          frameKinds: cB,
          changes: nB,
          lookSteps: GB(null === oB || void 0 === oB ? void 0 : oB.steps, zB),
          mouseMoves: GB(null === oB || void 0 === oB ? void 0 : oB.events, FB, 1),
          frames: GB(null === oB || void 0 === oB ? void 0 : oB.frames, NB),
          cameraSets: GB(null === oB || void 0 === oB ? void 0 : oB.cameraSets, gB),
          pageChanges: GB(null === oB || void 0 === oB ? void 0 : oB.changes, qB)
        }
      }
      save(BB) {
        const IB = JSON.stringify(this.toJson(performance.now(), BB));
        (0, JB.d)(new Blob([IB], {
          type: "application/json"
        }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
      }
    }
  },
  36396: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      LOOK_DEBUG_HEADER: () => nB,
      endLookDebugTake: () => yB,
      noteLookDroppedCopy: () => UB,
      saveLookCapture: () => WB,
      startLookDebug: () => qB
    });
    var TB = ZB(4975),
      JB = ZB(2973),
      oB = ZB(1956);
    const GB = new Map(Object.entries(TB.m).map((BB => {
      let [IB, ZB] = BB;
      return [ZB, IB]
    })));

    function vB(BB) {
      return (0, oB.K)(BB).toFixed(1)
    }

    function kB(BB, IB) {
      return `camera set by ${GB.get(BB[IB+1])}: heading ${`${vB(BB[IB+2])} -> ${vB(BB[IB+4])}`} deg, pitch ${`${vB(BB[IB+3])} -> ${vB(BB[IB+5])}`} deg, at ${BB[IB].toFixed(1)} ms`
    }
    var cB = ZB(36398);
    const nB = 2;

    function hB(BB) {
      return Number.isFinite(BB) ? String(Math.round(10 * BB) / 10) : String(BB)
    }

    function zB(BB) {
      return Number.isFinite(BB) ? BB.toFixed(1) : String(BB)
    }
    class FB {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.gM = 0, this.pastLimit = 0, this.lockSkips = 0, this.Fq = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.cameraSets = 0, this.cameraSetsLost = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
      moved() {
        return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.gM > 0 || this.dropped > 0 || this.cameraSets > 0
      }
      hasEvent() {
        return this.gM > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
      }
    }
    class NB {
      constructor() {
        var BB = this;
        this.topicOn = (0, JB.t)("look"), this.remote = (0, JB.u)(), this.tally = new FB, this.takes = null, this.started = !1, this.record = function(IB) {
          let ZB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          if (cB.o.step(IB, ZB), !BB.topicOn) return;
          const TB = IB[ZB],
            JB = IB[ZB + 1],
            oB = IB[ZB + 2],
            GB = IB[ZB + 3],
            vB = IB[ZB + 4],
            kB = IB[ZB + 5],
            nB = IB[ZB + 6],
            FB = IB[ZB + 7],
            NB = IB[ZB + 8],
            gB = IB[ZB + 9],
            qB = BB.tally;
          switch (qB.frames++, nB) {
            case cB.k.idle:
              return void qB.idle++;
            case cB.k.Fq:
              return void qB.Fq++;
            case cB.k.YM:
              return qB.lockSkips++, void(0 === oB && 0 === GB || BB.outlier(`lock skip dropped raw (${hB(oB)}, ${hB(GB)}) at ${zB(TB)} ms`))
          }
          qB.looked++, Number.isFinite(JB) && (qB.dtMin = Math.min(qB.dtMin, JB), qB.dtMax = Math.max(qB.dtMax, JB), qB.dtSum += JB, JB > 0 && (qB.peakRate = Math.max(qB.peakRate, Math.hypot(vB, kB) / JB))), qB.raw[0] += oB, qB.raw[1] += GB, qB.turned[0] += vB, qB.turned[1] += kB;
          const yB = Math.abs(oB) > gB || Math.abs(GB) > gB,
            UB = `raw (${hB(oB)}, ${hB(GB)}) over ${zB(JB)} ms, limit ${hB(gB)}, filter v (${FB.toFixed(3)}, ${NB.toFixed(3)}) px/ms, at ${zB(TB)} ms`;
          nB === cB.k.gM ? (qB.gM++, BB.outlier(`spike put right: ${UB} -> turned (${hB(vB)}, ${hB(kB)})`)) : yB ? (qB.pastLimit++, BB.outlier(`kept past limit: ${UB}`)) : JB > 50 && (qB.longFrames++, BB.remote || BB.outlier(`long frame: ${UB}, turned in full`))
        }, this.onMouseMove = BB => {
          const IB = null !== document.pointerLockElement;
          if (cB.o.mouseMove(BB, IB), !this.topicOn) return;
          const ZB = this.tally,
            {
              movementX: TB,
              movementY: JB
            } = BB;
          ZB.events++;
          const oB = Math.max(Math.abs(TB), Math.abs(JB));
          ZB.eventMax = Math.max(ZB.eventMax, oB), oB >= 200 && (ZB.bigEvents++, this.eventOutlier(`big mousemove (${TB}, ${JB}) at ${zB(BB.timeStamp)} ms, lock ${IB?"sv":"free"}`))
        }, this.onLockChange = () => {
          const BB = document.pointerLockElement;
          BB ? cB.o.lockGained() : cB.o.change(cB.d.lockLost), this.topicOn && (0, JB.o)("look", `pointer lock ${BB?`gained (${BB.tagName.toLowerCase()})`:"lost"} at ${zB(performance.now())} ms`)
        }, this.onLockError = () => {
          cB.o.change(cB.d.lockError), this.topicOn && (0, JB.o)("look", `pointer lock request failed at ${zB(performance.now())} ms`)
        }, this.onVisibility = () => {
          cB.o.change("hidden" === document.visibilityState ? cB.d.hidden : cB.d.visible), this.topicOn && (0, JB.o)("look", `page ${document.visibilityState} at ${zB(performance.now())} ms`)
        }, this.onFocus = () => {
          cB.o.change(cB.d.focus)
        }, this.onBlur = () => {
          cB.o.change(cB.d.blur)
        }, this.flush = () => {
          if (this.takeRecords(), !this.topicOn) return;
          const BB = this.tally;
          if (this.tally = new FB, !BB.moved() || this.remote && !BB.hasEvent()) return;
          const IB = BB.looked > 0 ? BB.dtSum / BB.looked : NaN,
            ZB = [`${BB.frames} frames (${BB.looked} looked, ${BB.idle} idle${"wasm"===cB.o.client?`, ${BB.Fq} carried`:""})`, `dt avg ${zB(IB)} min ${zB(BB.dtMin)} max ${zB(BB.dtMax)}, ${BB.longFrames} long`, `${BB.events} mousemoves (max ${hB(BB.eventMax)} px, ${BB.bigEvents} big)`, `raw (${hB(BB.raw[0])}, ${hB(BB.raw[1])}) turned (${hB(BB.turned[0])}, ${hB(BB.turned[1])})`, `peak ${BB.peakRate.toFixed(2)} px/ms`, `put right ${BB.gM}, past limit ${BB.pastLimit}, lock skips ${BB.lockSkips}`, "lock " + (document.pointerLockElement ? "sv" : "free")];
          BB.dropped > 0 && ZB.push(`${BB.dropped} doubled spike copies dropped`), BB.cameraSets > 0 && ZB.push(`${BB.cameraSets} camera sets`), BB.cameraSetsLost > 0 && ZB.push(`${BB.cameraSetsLost} camera set records lost`), BB.lost > 0 && ZB.push(`${BB.lost} records lost`), BB.suppressed > 0 && ZB.push(`${BB.suppressed} outlier lines not shown`), (0, JB.o)("look", `1s: ${ZB.join("; ")}`)
        }
      }
      start(BB, IB) {
        if (cB.o.start(BB, null !== document.pointerLockElement), this.takes = IB, this.topicOn) {
          const {
            screen: IB
          } = window;
          (0, JB.o)("look", `start: ${BB} client, dpr ${window.devicePixelRatio}, screen ${IB.width}x${IB.height}, pointer lock ${document.pointerLockElement?"sv":"free"}`)
        }
        this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), window.addEventListener("focus", this.onFocus), window.addEventListener("blur", this.onBlur), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), this.topicOn && !this.remote && (0, JB.l)("look", (() => cB.o.dumpText())))
      }
      outlier(BB) {
        const IB = this.tally;
        IB.outliers >= 20 ? IB.suppressed++ : (IB.outliers++, (0, JB.o)("look", BB))
      }
      eventOutlier(BB) {
        const IB = this.tally;
        IB.eventLines >= 10 ? IB.suppressed++ : (IB.eventLines++, (0, JB.o)("look", BB))
      }
      takeRecords() {
        if (null === this.takes) return;
        const BB = this.takes.look();
        if (BB.length >= nB) {
          this.counted(cB.d.stepsLost, BB[0]), this.counted(cB.d.droppedCopies, BB[1]);
          for (let IB = nB; IB + cB.h <= BB.length; IB += cB.h) this.record(BB, IB)
        }
        const IB = this.takes.cameraSets();
        if (IB.length >= TB.c) {
          this.counted(cB.d.cameraSetsLost, IB[0]);
          for (let BB = TB.c; BB + TB.f <= IB.length; BB += TB.f) cB.o.cameraSet(IB, BB), this.topicOn && (this.tally.cameraSets++, this.outlier(kB(IB, BB)))
        }
      }
      droppedCopy() {
        this.counted(cB.d.droppedCopies, 1)
      }
      counted(BB, IB) {
        if (0 === IB) return;
        if (cB.o.change(BB, IB), !this.topicOn) return;
        const ZB = this.tally;
        BB === cB.d.droppedCopies ? ZB.dropped += IB : BB === cB.d.stepsLost ? ZB.lost += IB : ZB.cameraSetsLost += IB
      }
      endTake() {
        this.takeRecords(), this.takes = null
      }
    }
    let gB = null;

    function qB(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return gB ??= new NB, gB.start(BB, IB), gB.record
    }

    function yB() {
      var BB;
      null === (BB = gB) || void 0 === BB || BB.endTake()
    }

    function UB() {
      var BB;
      null === (BB = gB) || void 0 === BB || BB.droppedCopy()
    }
    async function WB(BB) {
      var IB;
      null === (IB = gB) || void 0 === IB || IB.takeRecords();
      const {
        clientHintsRead: TB,
        debugDeviceLines: JB
      } = await ZB.e(29).then((() => ZB(34050)));
      await TB, cB.o.save({
        ...BB,
        device: JB()
      })
    }
  },
  4975: (BB, IB, ZB) => {
    ZB.d(IB, {
      $: () => gB,
      B: () => QB,
      Bb: () => XB,
      D: () => GB,
      E: () => vB,
      Fb: () => rB,
      G: () => TB,
      Ib: () => qB,
      J: () => oB,
      L: () => dB,
      Lb: () => pB,
      N: () => VB,
      P: () => hB,
      Pb: () => iB,
      S: () => zB,
      Tb: () => mB,
      V: () => nB,
      Vb: () => AB,
      W: () => cB,
      Yb: () => LB,
      Z: () => CB,
      _: () => kB,
      _b: () => uB,
      ab: () => NB,
      bb: () => aB,
      bc: () => fB,
      c: () => UB,
      cc: () => OB,
      eb: () => MB,
      f: () => yB,
      fc: () => YB,
      gc: () => bB,
      hb: () => jB,
      i: () => DB,
      kb: () => HB,
      kc: () => JB,
      lb: () => PB,
      m: () => WB,
      n: () => EB,
      nc: () => KB,
      pb: () => tB,
      qb: () => lB,
      r: () => FB,
      t: () => wB,
      tb: () => eB,
      w: () => xB,
      xb: () => RB,
      y: () => sB
    });
    const TB = 32,
      JB = 33.333333333333336,
      oB = {
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
      GB = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      vB = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      kB = {
        AheadMask: 15,
        Defaulted: 128,
        LagsShift: 8,
        CountMask: 4095
      },
      cB = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      nB = {
        PlayerBound: 32,
        JoinPreload: 64
      },
      hB = 14,
      zB = {
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
      FB = {
        Look: 0,
        Remesh: 1,
        CameraSet: 2
      },
      NB = 8,
      gB = 1,
      qB = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      yB = 6,
      UB = 1,
      WB = {
        SetCamDir: 0,
        Forced: 1,
        ScriptedTake: 2,
        ScriptedPose: 3,
        ScriptedRelease: 4
      },
      dB = {
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
      CB = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      QB = {
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
      sB = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      wB = 4,
      OB = 4,
      YB = 65535,
      iB = {
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
      pB = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      aB = 88,
      HB = 0,
      MB = 24,
      jB = 48,
      PB = 80,
      RB = {
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
      rB = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      mB = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      XB = {
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
      LB = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      eB = 65535,
      uB = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      fB = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      lB = 2,
      AB = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      tB = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      bB = {
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
      xB = {
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
      EB = {
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
      DB = 8,
      KB = {
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
      VB = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);