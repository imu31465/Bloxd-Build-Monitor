export const id = 104;
export const ids = [104];
export const modules = {
  37521: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => wV,
      h: () => pV,
      i: () => nV,
      j: () => QV,
      k: () => qV
    });
    var JV = xV(660),
      YV = xV(1846),
      UV = xV(5301);
    class yV {
      constructor(VV, eV) {
        this.width = VV, this.Jv = eV, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(VV * eV)
      }
      push(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const xV = this.data,
          JV = this.next * this.width;
        for (let YV = 0; YV < this.width; YV++) xV[JV + YV] = VV[eV + YV];
        this.next = (this.next + 1) % this.Jv, this.size = Math.min(this.size + 1, this.Jv)
      }
      rows() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
        const xV = [],
          JV = (this.next - this.size + this.Jv) % this.Jv;
        for (let YV = 0; YV < this.size; YV++) {
          const UV = (JV + YV) % this.Jv * this.width;
          this.data[UV + VV] >= eV && xV.push(Array.from(this.data.subarray(UV, UV + this.width)))
        }
        return xV
      }
      lines() {
        return this.rows().map((VV => VV.join(",")))
      }
    }
    const pV = 10,
      QV = {
        idle: 0,
        ZZ: 1,
        ND: 2,
        zD: 3,
        zE: 4
      },
      nV = {
        none: 0,
        skipped: 1,
        paced: 2,
        drawn: 3
      },
      wV = {
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
      ZV = 12e3,
      vV = ["nowMs", "dtMs", "rawX", "rawY", "turnedX", "turnedY", "outcome", "velocityX", "velocityY", "limit"],
      rV = ["timeStamp", "nowMs", "movementX", "movementY", "locked"],
      kV = ["nowMs", "dtMs", "heading", "pitch", "kind"],
      bV = ["nowMs", "source", "headingBefore", "pitchBefore", "headingAfter", "pitchAfter"],
      EV = ["nowMs", "change", "count"];

    function BV(VV) {
      return "js" === VV ? wV.jsClient : wV.wasmClient
    }
    class jV {
      constructor() {
        this.steps = new yV(pV, ZV), this.events = new yV(rV.length, ZV), this.frames = new yV(kV.length, ZV), this.cameraSets = new yV(UV.i, 256), this.changes = new yV(EV.length, 256)
      }
    }
    const qV = new class {
      constructor() {
        this.rings = null, this.sample = new Float64Array(rV.length), this.startedClient = null, this.startedAtMs = 0
      }
      get client() {
        return this.startedClient
      }
      start(VV, eV) {
        this.startedClient = VV, this.startedAtMs = performance.now(), null !== this.rings ? this.change(BV(VV)) : eV && this.allocate()
      }
      lockGained() {
        this.allocate(), this.change(wV.lockGained)
      }
      allocate() {
        null === this.rings && (this.rings = new jV, null !== this.startedClient && this.changeAt(this.startedAtMs, BV(this.startedClient), 1))
      }
      step(VV, eV) {
        var xV;
        VV[eV + 6] !== QV.zE && (null === (xV = this.rings) || void 0 === xV || xV.steps.push(VV, eV))
      }
      cameraSet(VV, eV) {
        var xV;
        null === (xV = this.rings) || void 0 === xV || xV.cameraSets.push(VV, eV)
      }
      mouseMove(VV, eV) {
        const xV = this.rings;
        if (null === xV) return;
        const JV = this.sample;
        JV[0] = VV.timeStamp, JV[1] = performance.now(), JV[2] = VV.movementX, JV[3] = VV.movementY, JV[4] = eV ? 1 : 0, xV.events.push(JV)
      }
      frame(VV, eV, xV, JV) {
        const YV = this.rings;
        if (null === YV || JV === nV.none) return;
        const UV = this.sample;
        UV[0] = performance.now(), UV[1] = VV, UV[2] = eV, UV[3] = xV, UV[4] = JV, YV.frames.push(UV)
      }
      change(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.changeAt(performance.now(), VV, eV)
      }
      changeAt(VV, eV, xV) {
        const JV = this.rings;
        if (null === JV) return;
        const YV = this.sample;
        YV[0] = VV, YV[1] = eV, YV[2] = xV, JV.changes.push(YV)
      }
      dumpText() {
        var VV, eV;
        const xV = this.rings;
        return [`look records (${this.startedClient}): ${vV.join(",")}`, ...null !== (VV = null === xV || void 0 === xV ? void 0 : xV.steps.lines()) && void 0 !== VV ? VV : [], `mousemove events: ${rV.join(",")}`, ...null !== (eV = null === xV || void 0 === xV ? void 0 : xV.events.lines()) && void 0 !== eV ? eV : []].join("\n")
      }
      toJson(VV, eV) {
        var xV;
        const YV = VV - 6e4,
          UV = this.rings,
          yV = function(VV, eV) {
            var xV;
            let JV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const UV = null !== (xV = null === VV || void 0 === VV ? void 0 : VV.rows(JV, YV)) && void 0 !== xV ? xV : [];
            return {
              columns: eV,
              fromMs: 0 === UV.length ? null : UV[0][JV],
              rows: UV
            }
          };
        return {
          version: JV.e,
          client: null !== (xV = this.startedClient) && void 0 !== xV ? xV : "not started",
          savedAt: (new Date).toISOString(),
          savedAtMs: VV,
          keptMs: 6e4,
          page: window.location.href,
          userAgent: navigator.userAgent,
          devicePixelRatio: window.devicePixelRatio,
          screen: {
            width: window.screen.width,
            height: window.screen.height
          },
          YB: null !== document.pointerLockElement,
          visibility: document.visibilityState,
          ...eV,
          outcomes: QV,
          frameKinds: nV,
          changes: wV,
          lookSteps: yV(null === UV || void 0 === UV ? void 0 : UV.steps, vV),
          mouseMoves: yV(null === UV || void 0 === UV ? void 0 : UV.events, rV, 1),
          frames: yV(null === UV || void 0 === UV ? void 0 : UV.frames, kV),
          cameraSets: yV(null === UV || void 0 === UV ? void 0 : UV.cameraSets, bV),
          pageChanges: yV(null === UV || void 0 === UV ? void 0 : UV.changes, EV)
        }
      }
      save(VV) {
        const eV = JSON.stringify(this.toJson(performance.now(), VV));
        (0, YV.c)(new Blob([eV], {
          type: "application/json"
        }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
      }
    }
  },
  37517: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      LOOK_DEBUG_HEADER: () => wV,
      endLookDebugTake: () => BV,
      noteLookDroppedCopy: () => jV,
      saveLookCapture: () => qV,
      startLookDebug: () => EV
    });
    var JV = xV(5301),
      YV = xV(3142),
      UV = xV(2014);
    const yV = new Map(Object.entries(JV.q).map((VV => {
      let [eV, xV] = VV;
      return [xV, eV]
    })));

    function pV(VV) {
      return (0, UV.E)(VV).toFixed(1)
    }

    function QV(VV, eV) {
      return `camera set by ${yV.get(VV[eV+1])}: heading ${`${pV(VV[eV+2])} -> ${pV(VV[eV+4])}`} deg, pitch ${`${pV(VV[eV+3])} -> ${pV(VV[eV+5])}`} deg, at ${VV[eV].toFixed(1)} ms`
    }
    var nV = xV(37521);
    const wV = 2;

    function ZV(VV) {
      return Number.isFinite(VV) ? String(Math.round(10 * VV) / 10) : String(VV)
    }

    function vV(VV) {
      return Number.isFinite(VV) ? VV.toFixed(1) : String(VV)
    }
    class rV {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.ND = 0, this.pastLimit = 0, this.lockSkips = 0, this.zE = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.cameraSets = 0, this.cameraSetsLost = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
      moved() {
        return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.ND > 0 || this.dropped > 0 || this.cameraSets > 0
      }
      hasEvent() {
        return this.ND > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
      }
    }
    class kV {
      constructor() {
        var VV = this;
        this.topicOn = (0, YV.o)("look"), this.remote = (0, YV.p)(), this.tally = new rV, this.takes = null, this.started = !1, this.record = function(eV) {
          let xV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          if (nV.k.step(eV, xV), !VV.topicOn) return;
          const JV = eV[xV],
            YV = eV[xV + 1],
            UV = eV[xV + 2],
            yV = eV[xV + 3],
            pV = eV[xV + 4],
            QV = eV[xV + 5],
            wV = eV[xV + 6],
            rV = eV[xV + 7],
            kV = eV[xV + 8],
            bV = eV[xV + 9],
            EV = VV.tally;
          switch (EV.frames++, wV) {
            case nV.j.idle:
              return void EV.idle++;
            case nV.j.zE:
              return void EV.zE++;
            case nV.j.zD:
              return EV.lockSkips++, void(0 === UV && 0 === yV || VV.outlier(`lock skip dropped raw (${ZV(UV)}, ${ZV(yV)}) at ${vV(JV)} ms`))
          }
          EV.looked++, Number.isFinite(YV) && (EV.dtMin = Math.min(EV.dtMin, YV), EV.dtMax = Math.max(EV.dtMax, YV), EV.dtSum += YV, YV > 0 && (EV.peakRate = Math.max(EV.peakRate, Math.hypot(pV, QV) / YV))), EV.raw[0] += UV, EV.raw[1] += yV, EV.turned[0] += pV, EV.turned[1] += QV;
          const BV = Math.abs(UV) > bV || Math.abs(yV) > bV,
            jV = `raw (${ZV(UV)}, ${ZV(yV)}) over ${vV(YV)} ms, limit ${ZV(bV)}, filter v (${rV.toFixed(3)}, ${kV.toFixed(3)}) px/ms, at ${vV(JV)} ms`;
          wV === nV.j.ND ? (EV.ND++, VV.outlier(`spike put right: ${jV} -> turned (${ZV(pV)}, ${ZV(QV)})`)) : BV ? (EV.pastLimit++, VV.outlier(`kept past limit: ${jV}`)) : YV > 50 && (EV.longFrames++, VV.remote || VV.outlier(`long frame: ${jV}, turned in full`))
        }, this.onMouseMove = VV => {
          const eV = null !== document.pointerLockElement;
          if (nV.k.mouseMove(VV, eV), !this.topicOn) return;
          const xV = this.tally,
            {
              movementX: JV,
              movementY: YV
            } = VV;
          xV.events++;
          const UV = Math.max(Math.abs(JV), Math.abs(YV));
          xV.eventMax = Math.max(xV.eventMax, UV), UV >= 200 && (xV.bigEvents++, this.eventOutlier(`big mousemove (${JV}, ${YV}) at ${vV(VV.timeStamp)} ms, lock ${eV?"hn":"free"}`))
        }, this.onLockChange = () => {
          const VV = document.pointerLockElement;
          VV ? nV.k.lockGained() : nV.k.change(nV.e.lockLost), this.topicOn && (0, YV.i)("look", `pointer lock ${VV?`gained (${VV.tagName.toLowerCase()})`:"lost"} at ${vV(performance.now())} ms`)
        }, this.onLockError = () => {
          nV.k.change(nV.e.lockError), this.topicOn && (0, YV.i)("look", `pointer lock request failed at ${vV(performance.now())} ms`)
        }, this.onVisibility = () => {
          nV.k.change("hidden" === document.visibilityState ? nV.e.hidden : nV.e.visible), this.topicOn && (0, YV.i)("look", `page ${document.visibilityState} at ${vV(performance.now())} ms`)
        }, this.onFocus = () => {
          nV.k.change(nV.e.focus)
        }, this.onBlur = () => {
          nV.k.change(nV.e.blur)
        }, this.flush = () => {
          if (this.takeRecords(), !this.topicOn) return;
          const VV = this.tally;
          if (this.tally = new rV, !VV.moved() || this.remote && !VV.hasEvent()) return;
          const eV = VV.looked > 0 ? VV.dtSum / VV.looked : NaN,
            xV = [`${VV.frames} frames (${VV.looked} looked, ${VV.idle} idle${"wasm"===nV.k.client?`, ${VV.zE} carried`:""})`, `dt avg ${vV(eV)} min ${vV(VV.dtMin)} max ${vV(VV.dtMax)}, ${VV.longFrames} long`, `${VV.events} mousemoves (max ${ZV(VV.eventMax)} px, ${VV.bigEvents} big)`, `raw (${ZV(VV.raw[0])}, ${ZV(VV.raw[1])}) turned (${ZV(VV.turned[0])}, ${ZV(VV.turned[1])})`, `peak ${VV.peakRate.toFixed(2)} px/ms`, `put right ${VV.ND}, past limit ${VV.pastLimit}, lock skips ${VV.lockSkips}`, "lock " + (document.pointerLockElement ? "hn" : "free")];
          VV.dropped > 0 && xV.push(`${VV.dropped} doubled spike copies dropped`), VV.cameraSets > 0 && xV.push(`${VV.cameraSets} camera sets`), VV.cameraSetsLost > 0 && xV.push(`${VV.cameraSetsLost} camera set records lost`), VV.lost > 0 && xV.push(`${VV.lost} records lost`), VV.suppressed > 0 && xV.push(`${VV.suppressed} outlier lines not shown`), (0, YV.i)("look", `1s: ${xV.join("; ")}`)
        }
      }
      start(VV, eV) {
        if (nV.k.start(VV, null !== document.pointerLockElement), this.takes = eV, this.topicOn) {
          const {
            screen: eV
          } = window;
          (0, YV.i)("look", `start: ${VV} client, dpr ${window.devicePixelRatio}, screen ${eV.width}x${eV.height}, pointer lock ${document.pointerLockElement?"hn":"free"}`)
        }
        this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), window.addEventListener("focus", this.onFocus), window.addEventListener("blur", this.onBlur), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), this.topicOn && !this.remote && (0, YV.h)("look", (() => nV.k.dumpText())))
      }
      outlier(VV) {
        const eV = this.tally;
        eV.outliers >= 20 ? eV.suppressed++ : (eV.outliers++, (0, YV.i)("look", VV))
      }
      eventOutlier(VV) {
        const eV = this.tally;
        eV.eventLines >= 10 ? eV.suppressed++ : (eV.eventLines++, (0, YV.i)("look", VV))
      }
      takeRecords() {
        if (null === this.takes) return;
        const VV = this.takes.look();
        if (VV.length >= wV) {
          this.counted(nV.e.stepsLost, VV[0]), this.counted(nV.e.droppedCopies, VV[1]);
          for (let eV = wV; eV + nV.h <= VV.length; eV += nV.h) this.record(VV, eV)
        }
        const eV = this.takes.cameraSets();
        if (eV.length >= JV.e) {
          this.counted(nV.e.cameraSetsLost, eV[0]);
          for (let VV = JV.e; VV + JV.i <= eV.length; VV += JV.i) nV.k.cameraSet(eV, VV), this.topicOn && (this.tally.cameraSets++, this.outlier(QV(eV, VV)))
        }
      }
      droppedCopy() {
        this.counted(nV.e.droppedCopies, 1)
      }
      counted(VV, eV) {
        if (0 === eV) return;
        if (nV.k.change(VV, eV), !this.topicOn) return;
        const xV = this.tally;
        VV === nV.e.droppedCopies ? xV.dropped += eV : VV === nV.e.stepsLost ? xV.lost += eV : xV.cameraSetsLost += eV
      }
      endTake() {
        this.takeRecords(), this.takes = null
      }
    }
    let bV = null;

    function EV(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return bV ??= new kV, bV.start(VV, eV), bV.record
    }

    function BV() {
      var VV;
      null === (VV = bV) || void 0 === VV || VV.endTake()
    }

    function jV() {
      var VV;
      null === (VV = bV) || void 0 === VV || VV.droppedCopy()
    }
    async function qV(VV) {
      var eV;
      null === (eV = bV) || void 0 === eV || eV.takeRecords();
      const {
        clientHintsRead: JV,
        debugDeviceLines: YV
      } = await xV.e(34).then((() => xV(35172)));
      await JV, nV.k.save({
        ...VV,
        device: YV()
      })
    }
  },
  5301: (VV, eV, xV) => {
    xV.d(eV, {
      $b: () => mV,
      B: () => uV,
      Bb: () => KV,
      Db: () => fV,
      E: () => PV,
      G: () => TV,
      H: () => yV,
      Hb: () => hV,
      Ib: () => iV,
      K: () => pV,
      Lb: () => oV,
      N: () => JV,
      Pb: () => CV,
      Q: () => UV,
      Rb: () => EV,
      T: () => tV,
      Vb: () => zV,
      W: () => dV,
      Wb: () => MV,
      Y: () => ZV,
      Z: () => vV,
      _: () => wV,
      _b: () => aV,
      ac: () => cV,
      cb: () => nV,
      cc: () => lV,
      db: () => FV,
      e: () => jV,
      ec: () => LV,
      fc: () => NV,
      gb: () => QV,
      gc: () => XV,
      i: () => BV,
      ib: () => bV,
      ic: () => HV,
      lc: () => YV,
      m: () => SV,
      mb: () => kV,
      mc: () => IV,
      q: () => qV,
      qb: () => GV,
      rb: () => RV,
      s: () => sV,
      tb: () => gV,
      v: () => rV,
      wb: () => WV,
      y: () => AV,
      zb: () => DV
    });
    const JV = 32,
      YV = 33.333333333333336,
      UV = {
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
      yV = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      pV = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      QV = {
        AheadMask: 15,
        Defaulted: 128,
        LagsShift: 8,
        CountMask: 4095
      },
      nV = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      wV = {
        PlayerBound: 32,
        JoinPreload: 64
      },
      ZV = 14,
      vV = {
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
      rV = {
        Look: 0,
        Remesh: 1,
        CameraSet: 2
      },
      kV = 8,
      bV = 1,
      EV = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      BV = 6,
      jV = 1,
      qV = {
        SetCamDir: 0,
        Forced: 1,
        ScriptedTake: 2,
        ScriptedPose: 3,
        ScriptedRelease: 4
      },
      tV = {
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
      FV = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      TV = {
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
      PV = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      AV = 4,
      NV = 4,
      XV = 65535,
      MV = {
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
      zV = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      GV = 88,
      WV = 0,
      RV = 24,
      gV = 48,
      DV = 80,
      iV = {
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
      CV = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      aV = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      oV = {
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
      cV = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      hV = 65535,
      lV = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      LV = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      fV = 2,
      mV = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      KV = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      HV = {
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
      uV = {
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
      sV = {
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
      SV = 8,
      IV = {
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
      dV = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);