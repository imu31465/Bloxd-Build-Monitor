export const id = 94;
export const ids = [94];
export const modules = {
  36674: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => gQ,
      g: () => sQ,
      j: () => PQ,
      k: () => FQ,
      m: () => pQ
    });
    var wQ = XQ(670),
      qQ = XQ(1812),
      TQ = XQ(5140);
    class zQ {
      constructor(QQ, WQ) {
        this.width = QQ, this.yJ = WQ, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(QQ * WQ)
      }
      push(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const XQ = this.data,
          wQ = this.next * this.width;
        for (let qQ = 0; qQ < this.width; qQ++) XQ[wQ + qQ] = QQ[WQ + qQ];
        this.next = (this.next + 1) % this.yJ, this.size = Math.min(this.size + 1, this.yJ)
      }
      rows() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
        const XQ = [],
          wQ = (this.next - this.size + this.yJ) % this.yJ;
        for (let qQ = 0; qQ < this.size; qQ++) {
          const TQ = (wQ + qQ) % this.yJ * this.width;
          this.data[TQ + QQ] >= WQ && XQ.push(Array.from(this.data.subarray(TQ, TQ + this.width)))
        }
        return XQ
      }
      lines() {
        return this.rows().map((QQ => QQ.join(",")))
      }
    }
    const sQ = 10,
      FQ = {
        idle: 0,
        HI: 1,
        oR: 2,
        xR: 3,
        Py: 4
      },
      PQ = {
        none: 0,
        skipped: 1,
        paced: 2,
        drawn: 3
      },
      gQ = {
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
      JQ = 12e3,
      rQ = ["nowMs", "dtMs", "rawX", "rawY", "turnedX", "turnedY", "outcome", "velocityX", "velocityY", "limit"],
      IQ = ["timeStamp", "nowMs", "movementX", "movementY", "locked"],
      jQ = ["nowMs", "dtMs", "heading", "pitch", "kind"],
      BQ = ["nowMs", "source", "headingBefore", "pitchBefore", "headingAfter", "pitchAfter"],
      yQ = ["nowMs", "change", "count"];

    function VQ(QQ) {
      return "js" === QQ ? gQ.jsClient : gQ.wasmClient
    }
    class DQ {
      constructor() {
        this.steps = new zQ(sQ, JQ), this.events = new zQ(IQ.length, JQ), this.frames = new zQ(jQ.length, JQ), this.cameraSets = new zQ(TQ.f, 256), this.changes = new zQ(yQ.length, 256)
      }
    }
    const pQ = new class {
      constructor() {
        this.rings = null, this.sample = new Float64Array(IQ.length), this.startedClient = null, this.startedAtMs = 0
      }
      get client() {
        return this.startedClient
      }
      start(QQ, WQ) {
        this.startedClient = QQ, this.startedAtMs = performance.now(), null !== this.rings ? this.change(VQ(QQ)) : WQ && this.allocate()
      }
      lockGained() {
        this.allocate(), this.change(gQ.lockGained)
      }
      allocate() {
        null === this.rings && (this.rings = new DQ, null !== this.startedClient && this.changeAt(this.startedAtMs, VQ(this.startedClient), 1))
      }
      step(QQ, WQ) {
        var XQ;
        QQ[WQ + 6] !== FQ.Py && (null === (XQ = this.rings) || void 0 === XQ || XQ.steps.push(QQ, WQ))
      }
      cameraSet(QQ, WQ) {
        var XQ;
        null === (XQ = this.rings) || void 0 === XQ || XQ.cameraSets.push(QQ, WQ)
      }
      mouseMove(QQ, WQ) {
        const XQ = this.rings;
        if (null === XQ) return;
        const wQ = this.sample;
        wQ[0] = QQ.timeStamp, wQ[1] = performance.now(), wQ[2] = QQ.movementX, wQ[3] = QQ.movementY, wQ[4] = WQ ? 1 : 0, XQ.events.push(wQ)
      }
      frame(QQ, WQ, XQ, wQ) {
        const qQ = this.rings;
        if (null === qQ || wQ === PQ.none) return;
        const TQ = this.sample;
        TQ[0] = performance.now(), TQ[1] = QQ, TQ[2] = WQ, TQ[3] = XQ, TQ[4] = wQ, qQ.frames.push(TQ)
      }
      change(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.changeAt(performance.now(), QQ, WQ)
      }
      changeAt(QQ, WQ, XQ) {
        const wQ = this.rings;
        if (null === wQ) return;
        const qQ = this.sample;
        qQ[0] = QQ, qQ[1] = WQ, qQ[2] = XQ, wQ.changes.push(qQ)
      }
      dumpText() {
        var QQ, WQ;
        const XQ = this.rings;
        return [`look records (${this.startedClient}): ${rQ.join(",")}`, ...null !== (QQ = null === XQ || void 0 === XQ ? void 0 : XQ.steps.lines()) && void 0 !== QQ ? QQ : [], `mousemove events: ${IQ.join(",")}`, ...null !== (WQ = null === XQ || void 0 === XQ ? void 0 : XQ.events.lines()) && void 0 !== WQ ? WQ : []].join("\n")
      }
      toJson(QQ, WQ) {
        var XQ;
        const qQ = QQ - 6e4,
          TQ = this.rings,
          zQ = function(QQ, WQ) {
            var XQ;
            let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const TQ = null !== (XQ = null === QQ || void 0 === QQ ? void 0 : QQ.rows(wQ, qQ)) && void 0 !== XQ ? XQ : [];
            return {
              columns: WQ,
              fromMs: 0 === TQ.length ? null : TQ[0][wQ],
              rows: TQ
            }
          };
        return {
          version: wQ.c,
          client: null !== (XQ = this.startedClient) && void 0 !== XQ ? XQ : "not started",
          savedAt: (new Date).toISOString(),
          savedAtMs: QQ,
          keptMs: 6e4,
          page: window.location.href,
          userAgent: navigator.userAgent,
          devicePixelRatio: window.devicePixelRatio,
          screen: {
            width: window.screen.width,
            height: window.screen.height
          },
          Sy: null !== document.pointerLockElement,
          visibility: document.visibilityState,
          ...WQ,
          outcomes: FQ,
          frameKinds: PQ,
          changes: gQ,
          lookSteps: zQ(null === TQ || void 0 === TQ ? void 0 : TQ.steps, rQ),
          mouseMoves: zQ(null === TQ || void 0 === TQ ? void 0 : TQ.events, IQ, 1),
          frames: zQ(null === TQ || void 0 === TQ ? void 0 : TQ.frames, jQ),
          cameraSets: zQ(null === TQ || void 0 === TQ ? void 0 : TQ.cameraSets, BQ),
          pageChanges: zQ(null === TQ || void 0 === TQ ? void 0 : TQ.changes, yQ)
        }
      }
      save(QQ) {
        const WQ = JSON.stringify(this.toJson(performance.now(), QQ));
        (0, qQ.e)(new Blob([WQ], {
          type: "application/json"
        }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
      }
    }
  },
  36671: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      LOOK_DEBUG_HEADER: () => gQ,
      endLookDebugTake: () => VQ,
      noteLookDroppedCopy: () => DQ,
      saveLookCapture: () => pQ,
      startLookDebug: () => yQ
    });
    var wQ = XQ(5140),
      qQ = XQ(3045),
      TQ = XQ(1972);
    const zQ = new Map(Object.entries(wQ.l).map((QQ => {
      let [WQ, XQ] = QQ;
      return [XQ, WQ]
    })));

    function sQ(QQ) {
      return (0, TQ.y)(QQ).toFixed(1)
    }

    function FQ(QQ, WQ) {
      return `camera set by ${zQ.get(QQ[WQ+1])}: heading ${`${sQ(QQ[WQ+2])} -> ${sQ(QQ[WQ+4])}`} deg, pitch ${`${sQ(QQ[WQ+3])} -> ${sQ(QQ[WQ+5])}`} deg, at ${QQ[WQ].toFixed(1)} ms`
    }
    var PQ = XQ(36674);
    const gQ = 2;

    function JQ(QQ) {
      return Number.isFinite(QQ) ? String(Math.round(10 * QQ) / 10) : String(QQ)
    }

    function rQ(QQ) {
      return Number.isFinite(QQ) ? QQ.toFixed(1) : String(QQ)
    }
    class IQ {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.oR = 0, this.pastLimit = 0, this.lockSkips = 0, this.Py = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.cameraSets = 0, this.cameraSetsLost = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
      moved() {
        return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.oR > 0 || this.dropped > 0 || this.cameraSets > 0
      }
      hasEvent() {
        return this.oR > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
      }
    }
    class jQ {
      constructor() {
        var QQ = this;
        this.topicOn = (0, qQ.m)("look"), this.remote = (0, qQ.n)(), this.tally = new IQ, this.takes = null, this.started = !1, this.record = function(WQ) {
          let XQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          if (PQ.m.step(WQ, XQ), !QQ.topicOn) return;
          const wQ = WQ[XQ],
            qQ = WQ[XQ + 1],
            TQ = WQ[XQ + 2],
            zQ = WQ[XQ + 3],
            sQ = WQ[XQ + 4],
            FQ = WQ[XQ + 5],
            gQ = WQ[XQ + 6],
            IQ = WQ[XQ + 7],
            jQ = WQ[XQ + 8],
            BQ = WQ[XQ + 9],
            yQ = QQ.tally;
          switch (yQ.frames++, gQ) {
            case PQ.k.idle:
              return void yQ.idle++;
            case PQ.k.Py:
              return void yQ.Py++;
            case PQ.k.xR:
              return yQ.lockSkips++, void(0 === TQ && 0 === zQ || QQ.outlier(`lock skip dropped raw (${JQ(TQ)}, ${JQ(zQ)}) at ${rQ(wQ)} ms`))
          }
          yQ.looked++, Number.isFinite(qQ) && (yQ.dtMin = Math.min(yQ.dtMin, qQ), yQ.dtMax = Math.max(yQ.dtMax, qQ), yQ.dtSum += qQ, qQ > 0 && (yQ.peakRate = Math.max(yQ.peakRate, Math.hypot(sQ, FQ) / qQ))), yQ.raw[0] += TQ, yQ.raw[1] += zQ, yQ.turned[0] += sQ, yQ.turned[1] += FQ;
          const VQ = Math.abs(TQ) > BQ || Math.abs(zQ) > BQ,
            DQ = `raw (${JQ(TQ)}, ${JQ(zQ)}) over ${rQ(qQ)} ms, limit ${JQ(BQ)}, filter v (${IQ.toFixed(3)}, ${jQ.toFixed(3)}) px/ms, at ${rQ(wQ)} ms`;
          gQ === PQ.k.oR ? (yQ.oR++, QQ.outlier(`spike put right: ${DQ} -> turned (${JQ(sQ)}, ${JQ(FQ)})`)) : VQ ? (yQ.pastLimit++, QQ.outlier(`kept past limit: ${DQ}`)) : qQ > 50 && (yQ.longFrames++, QQ.remote || QQ.outlier(`long frame: ${DQ}, turned in full`))
        }, this.onMouseMove = QQ => {
          const WQ = null !== document.pointerLockElement;
          if (PQ.m.mouseMove(QQ, WQ), !this.topicOn) return;
          const XQ = this.tally,
            {
              movementX: wQ,
              movementY: qQ
            } = QQ;
          XQ.events++;
          const TQ = Math.max(Math.abs(wQ), Math.abs(qQ));
          XQ.eventMax = Math.max(XQ.eventMax, TQ), TQ >= 200 && (XQ.bigEvents++, this.eventOutlier(`big mousemove (${wQ}, ${qQ}) at ${rQ(QQ.timeStamp)} ms, lock ${WQ?"Ds":"free"}`))
        }, this.onLockChange = () => {
          const QQ = document.pointerLockElement;
          QQ ? PQ.m.lockGained() : PQ.m.change(PQ.d.lockLost), this.topicOn && (0, qQ.j)("look", `pointer lock ${QQ?`gained (${QQ.tagName.toLowerCase()})`:"lost"} at ${rQ(performance.now())} ms`)
        }, this.onLockError = () => {
          PQ.m.change(PQ.d.lockError), this.topicOn && (0, qQ.j)("look", `pointer lock request failed at ${rQ(performance.now())} ms`)
        }, this.onVisibility = () => {
          PQ.m.change("hidden" === document.visibilityState ? PQ.d.hidden : PQ.d.visible), this.topicOn && (0, qQ.j)("look", `page ${document.visibilityState} at ${rQ(performance.now())} ms`)
        }, this.onFocus = () => {
          PQ.m.change(PQ.d.focus)
        }, this.onBlur = () => {
          PQ.m.change(PQ.d.blur)
        }, this.flush = () => {
          if (this.takeRecords(), !this.topicOn) return;
          const QQ = this.tally;
          if (this.tally = new IQ, !QQ.moved() || this.remote && !QQ.hasEvent()) return;
          const WQ = QQ.looked > 0 ? QQ.dtSum / QQ.looked : NaN,
            XQ = [`${QQ.frames} frames (${QQ.looked} looked, ${QQ.idle} idle${"wasm"===PQ.m.client?`, ${QQ.Py} carried`:""})`, `dt avg ${rQ(WQ)} min ${rQ(QQ.dtMin)} max ${rQ(QQ.dtMax)}, ${QQ.longFrames} long`, `${QQ.events} mousemoves (max ${JQ(QQ.eventMax)} px, ${QQ.bigEvents} big)`, `raw (${JQ(QQ.raw[0])}, ${JQ(QQ.raw[1])}) turned (${JQ(QQ.turned[0])}, ${JQ(QQ.turned[1])})`, `peak ${QQ.peakRate.toFixed(2)} px/ms`, `put right ${QQ.oR}, past limit ${QQ.pastLimit}, lock skips ${QQ.lockSkips}`, "lock " + (document.pointerLockElement ? "Ds" : "free")];
          QQ.dropped > 0 && XQ.push(`${QQ.dropped} doubled spike copies dropped`), QQ.cameraSets > 0 && XQ.push(`${QQ.cameraSets} camera sets`), QQ.cameraSetsLost > 0 && XQ.push(`${QQ.cameraSetsLost} camera set records lost`), QQ.lost > 0 && XQ.push(`${QQ.lost} records lost`), QQ.suppressed > 0 && XQ.push(`${QQ.suppressed} outlier lines not shown`), (0, qQ.j)("look", `1s: ${XQ.join("; ")}`)
        }
      }
      start(QQ, WQ) {
        if (PQ.m.start(QQ, null !== document.pointerLockElement), this.takes = WQ, this.topicOn) {
          const {
            screen: WQ
          } = window;
          (0, qQ.j)("look", `start: ${QQ} client, dpr ${window.devicePixelRatio}, screen ${WQ.width}x${WQ.height}, pointer lock ${document.pointerLockElement?"Ds":"free"}`)
        }
        this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), window.addEventListener("focus", this.onFocus), window.addEventListener("blur", this.onBlur), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), this.topicOn && !this.remote && (0, qQ.h)("look", (() => PQ.m.dumpText())))
      }
      outlier(QQ) {
        const WQ = this.tally;
        WQ.outliers >= 20 ? WQ.suppressed++ : (WQ.outliers++, (0, qQ.j)("look", QQ))
      }
      eventOutlier(QQ) {
        const WQ = this.tally;
        WQ.eventLines >= 10 ? WQ.suppressed++ : (WQ.eventLines++, (0, qQ.j)("look", QQ))
      }
      takeRecords() {
        if (null === this.takes) return;
        const QQ = this.takes.look();
        if (QQ.length >= gQ) {
          this.counted(PQ.d.stepsLost, QQ[0]), this.counted(PQ.d.droppedCopies, QQ[1]);
          for (let WQ = gQ; WQ + PQ.g <= QQ.length; WQ += PQ.g) this.record(QQ, WQ)
        }
        const WQ = this.takes.cameraSets();
        if (WQ.length >= wQ.c) {
          this.counted(PQ.d.cameraSetsLost, WQ[0]);
          for (let QQ = wQ.c; QQ + wQ.f <= WQ.length; QQ += wQ.f) PQ.m.cameraSet(WQ, QQ), this.topicOn && (this.tally.cameraSets++, this.outlier(FQ(WQ, QQ)))
        }
      }
      droppedCopy() {
        this.counted(PQ.d.droppedCopies, 1)
      }
      counted(QQ, WQ) {
        if (0 === WQ) return;
        if (PQ.m.change(QQ, WQ), !this.topicOn) return;
        const XQ = this.tally;
        QQ === PQ.d.droppedCopies ? XQ.dropped += WQ : QQ === PQ.d.stepsLost ? XQ.lost += WQ : XQ.cameraSetsLost += WQ
      }
      endTake() {
        this.takeRecords(), this.takes = null
      }
    }
    let BQ = null;

    function yQ(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return BQ ??= new jQ, BQ.start(QQ, WQ), BQ.record
    }

    function VQ() {
      var QQ;
      null === (QQ = BQ) || void 0 === QQ || QQ.endTake()
    }

    function DQ() {
      var QQ;
      null === (QQ = BQ) || void 0 === QQ || QQ.droppedCopy()
    }
    async function pQ(QQ) {
      var WQ;
      null === (WQ = BQ) || void 0 === WQ || WQ.takeRecords();
      const {
        clientHintsRead: wQ,
        debugDeviceLines: qQ
      } = await XQ.e(30).then((() => XQ(34376)));
      await wQ, PQ.m.save({
        ...QQ,
        device: qQ()
      })
    }
  },
  5140: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      $b: () => aQ,
      A: () => sQ,
      Ab: () => uQ,
      C: () => wQ,
      Cb: () => yQ,
      F: () => TQ,
      G: () => GQ,
      Gb: () => hQ,
      I: () => mQ,
      Ib: () => lQ,
      M: () => JQ,
      Mb: () => LQ,
      Nb: () => nQ,
      Pb: () => fQ,
      Q: () => rQ,
      Sb: () => tQ,
      U: () => gQ,
      V: () => PQ,
      Wb: () => oQ,
      X: () => UQ,
      Z: () => FQ,
      Zb: () => HQ,
      bb: () => BQ,
      c: () => DQ,
      cb: () => jQ,
      dc: () => YQ,
      f: () => VQ,
      fb: () => iQ,
      fc: () => qQ,
      gc: () => KQ,
      i: () => OQ,
      jb: () => AQ,
      l: () => pQ,
      mb: () => RQ,
      n: () => ZQ,
      nb: () => cQ,
      p: () => IQ,
      q: () => dQ,
      r: () => NQ,
      rb: () => EQ,
      tb: () => xQ,
      u: () => vQ,
      ub: () => eQ,
      vb: () => SQ,
      y: () => bQ,
      yb: () => CQ,
      z: () => zQ,
      zb: () => kQ
    });
    const wQ = 32,
      qQ = 33.333333333333336,
      TQ = {
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
      zQ = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      sQ = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      FQ = {
        AheadMask: 15,
        Defaulted: 128,
        LagsShift: 8,
        CountMask: 4095
      },
      PQ = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      gQ = {
        PlayerBound: 32,
        JoinPreload: 64
      },
      JQ = 14,
      rQ = {
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
      IQ = {
        Look: 0,
        Remesh: 1,
        CameraSet: 2
      },
      jQ = 8,
      BQ = 1,
      yQ = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      VQ = 6,
      DQ = 1,
      pQ = {
        SetCamDir: 0,
        Forced: 1,
        ScriptedTake: 2,
        ScriptedPose: 3,
        ScriptedRelease: 4
      },
      GQ = {
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
      UQ = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      bQ = {
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
        BhopDisabled: 30,
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
      vQ = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      dQ = 4,
      HQ = 4,
      aQ = 65535,
      lQ = {
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
      hQ = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      iQ = 88,
      cQ = 0,
      AQ = 24,
      RQ = 48,
      EQ = 80,
      CQ = {
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
      uQ = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      LQ = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      kQ = {
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
      fQ = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      SQ = 65535,
      tQ = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      oQ = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      eQ = 2,
      nQ = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      xQ = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      YQ = {
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
      NQ = {
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
      ZQ = {
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
      OQ = 8,
      KQ = {
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
      mQ = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);