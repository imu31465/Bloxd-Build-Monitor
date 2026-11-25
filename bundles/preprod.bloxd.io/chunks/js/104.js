export const id = 104;
export const ids = [104];
export const modules = {
  37316: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => zM,
      f: () => PM,
      i: () => QM,
      j: () => nM,
      l: () => EM
    });
    var OM = iM(632),
      SM = iM(1845),
      jM = iM(5200);
    class aM {
      constructor(MM, rM) {
        this.width = MM, this.vL = rM, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(MM * rM)
      }
      push(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const iM = this.data,
          OM = this.next * this.width;
        for (let SM = 0; SM < this.width; SM++) iM[OM + SM] = MM[rM + SM];
        this.next = (this.next + 1) % this.vL, this.size = Math.min(this.size + 1, this.vL)
      }
      rows() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
        const iM = [],
          OM = (this.next - this.size + this.vL) % this.vL;
        for (let SM = 0; SM < this.size; SM++) {
          const jM = (OM + SM) % this.vL * this.width;
          this.data[jM + MM] >= rM && iM.push(Array.from(this.data.subarray(jM, jM + this.width)))
        }
        return iM
      }
      lines() {
        return this.rows().map((MM => MM.join(",")))
      }
    }
    const PM = 10,
      nM = {
        idle: 0,
        ML: 1,
        pD: 2,
        ZD: 3,
        yd: 4
      },
      QM = {
        none: 0,
        skipped: 1,
        paced: 2,
        drawn: 3
      },
      zM = {
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
      LM = 12e3,
      mM = ["nowMs", "dtMs", "rawX", "rawY", "turnedX", "turnedY", "outcome", "velocityX", "velocityY", "limit"],
      HM = ["timeStamp", "nowMs", "movementX", "movementY", "locked"],
      hM = ["nowMs", "dtMs", "heading", "pitch", "kind"],
      JM = ["nowMs", "source", "headingBefore", "pitchBefore", "headingAfter", "pitchAfter"],
      dM = ["nowMs", "change", "count"];

    function yM(MM) {
      return "js" === MM ? zM.jsClient : zM.wasmClient
    }
    class lM {
      constructor() {
        this.steps = new aM(PM, LM), this.events = new aM(HM.length, LM), this.frames = new aM(hM.length, LM), this.cameraSets = new aM(jM.g, 256), this.changes = new aM(dM.length, 256)
      }
    }
    const EM = new class {
      constructor() {
        this.rings = null, this.sample = new Float64Array(HM.length), this.startedClient = null, this.startedAtMs = 0
      }
      get client() {
        return this.startedClient
      }
      start(MM, rM) {
        this.startedClient = MM, this.startedAtMs = performance.now(), null !== this.rings ? this.change(yM(MM)) : rM && this.allocate()
      }
      lockGained() {
        this.allocate(), this.change(zM.lockGained)
      }
      allocate() {
        null === this.rings && (this.rings = new lM, null !== this.startedClient && this.changeAt(this.startedAtMs, yM(this.startedClient), 1))
      }
      step(MM, rM) {
        var iM;
        MM[rM + 6] !== nM.yd && (null === (iM = this.rings) || void 0 === iM || iM.steps.push(MM, rM))
      }
      cameraSet(MM, rM) {
        var iM;
        null === (iM = this.rings) || void 0 === iM || iM.cameraSets.push(MM, rM)
      }
      mouseMove(MM, rM) {
        const iM = this.rings;
        if (null === iM) return;
        const OM = this.sample;
        OM[0] = MM.timeStamp, OM[1] = performance.now(), OM[2] = MM.movementX, OM[3] = MM.movementY, OM[4] = rM ? 1 : 0, iM.events.push(OM)
      }
      frame(MM, rM, iM, OM) {
        const SM = this.rings;
        if (null === SM || OM === QM.none) return;
        const jM = this.sample;
        jM[0] = performance.now(), jM[1] = MM, jM[2] = rM, jM[3] = iM, jM[4] = OM, SM.frames.push(jM)
      }
      change(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.changeAt(performance.now(), MM, rM)
      }
      changeAt(MM, rM, iM) {
        const OM = this.rings;
        if (null === OM) return;
        const SM = this.sample;
        SM[0] = MM, SM[1] = rM, SM[2] = iM, OM.changes.push(SM)
      }
      dumpText() {
        var MM, rM;
        const iM = this.rings;
        return [`look records (${this.startedClient}): ${mM.join(",")}`, ...null !== (MM = null === iM || void 0 === iM ? void 0 : iM.steps.lines()) && void 0 !== MM ? MM : [], `mousemove events: ${HM.join(",")}`, ...null !== (rM = null === iM || void 0 === iM ? void 0 : iM.events.lines()) && void 0 !== rM ? rM : []].join("\n")
      }
      toJson(MM, rM) {
        var iM;
        const SM = MM - 6e4,
          jM = this.rings,
          aM = function(MM, rM) {
            var iM;
            let OM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const jM = null !== (iM = null === MM || void 0 === MM ? void 0 : MM.rows(OM, SM)) && void 0 !== iM ? iM : [];
            return {
              columns: rM,
              fromMs: 0 === jM.length ? null : jM[0][OM],
              rows: jM
            }
          };
        return {
          version: OM.c,
          client: null !== (iM = this.startedClient) && void 0 !== iM ? iM : "not started",
          savedAt: (new Date).toISOString(),
          savedAtMs: MM,
          keptMs: 6e4,
          page: window.location.href,
          userAgent: navigator.userAgent,
          devicePixelRatio: window.devicePixelRatio,
          screen: {
            width: window.screen.width,
            height: window.screen.height
          },
          Vd: null !== document.pointerLockElement,
          visibility: document.visibilityState,
          ...rM,
          outcomes: nM,
          frameKinds: QM,
          changes: zM,
          lookSteps: aM(null === jM || void 0 === jM ? void 0 : jM.steps, mM),
          mouseMoves: aM(null === jM || void 0 === jM ? void 0 : jM.events, HM, 1),
          frames: aM(null === jM || void 0 === jM ? void 0 : jM.frames, hM),
          cameraSets: aM(null === jM || void 0 === jM ? void 0 : jM.cameraSets, JM),
          pageChanges: aM(null === jM || void 0 === jM ? void 0 : jM.changes, dM)
        }
      }
      save(MM) {
        const rM = JSON.stringify(this.toJson(performance.now(), MM));
        (0, SM.c)(new Blob([rM], {
          type: "application/json"
        }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
      }
    }
  },
  37312: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      LOOK_DEBUG_HEADER: () => zM,
      endLookDebugTake: () => yM,
      noteLookDroppedCopy: () => lM,
      saveLookCapture: () => EM,
      startLookDebug: () => dM
    });
    var OM = iM(5200),
      SM = iM(3122),
      jM = iM(2e3);
    const aM = new Map(Object.entries(OM.l).map((MM => {
      let [rM, iM] = MM;
      return [iM, rM]
    })));

    function PM(MM) {
      return (0, jM.J)(MM).toFixed(1)
    }

    function nM(MM, rM) {
      return `camera set by ${aM.get(MM[rM+1])}: heading ${`${PM(MM[rM+2])} -> ${PM(MM[rM+4])}`} deg, pitch ${`${PM(MM[rM+3])} -> ${PM(MM[rM+5])}`} deg, at ${MM[rM].toFixed(1)} ms`
    }
    var QM = iM(37316);
    const zM = 2;

    function LM(MM) {
      return Number.isFinite(MM) ? String(Math.round(10 * MM) / 10) : String(MM)
    }

    function mM(MM) {
      return Number.isFinite(MM) ? MM.toFixed(1) : String(MM)
    }
    class HM {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.pD = 0, this.pastLimit = 0, this.lockSkips = 0, this.yd = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.cameraSets = 0, this.cameraSetsLost = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
      moved() {
        return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.pD > 0 || this.dropped > 0 || this.cameraSets > 0
      }
      hasEvent() {
        return this.pD > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
      }
    }
    class hM {
      constructor() {
        var MM = this;
        this.topicOn = (0, SM.p)("look"), this.remote = (0, SM.q)(), this.tally = new HM, this.takes = null, this.started = !1, this.record = function(rM) {
          let iM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          if (QM.l.step(rM, iM), !MM.topicOn) return;
          const OM = rM[iM],
            SM = rM[iM + 1],
            jM = rM[iM + 2],
            aM = rM[iM + 3],
            PM = rM[iM + 4],
            nM = rM[iM + 5],
            zM = rM[iM + 6],
            HM = rM[iM + 7],
            hM = rM[iM + 8],
            JM = rM[iM + 9],
            dM = MM.tally;
          switch (dM.frames++, zM) {
            case QM.j.idle:
              return void dM.idle++;
            case QM.j.yd:
              return void dM.yd++;
            case QM.j.ZD:
              return dM.lockSkips++, void(0 === jM && 0 === aM || MM.outlier(`lock skip dropped raw (${LM(jM)}, ${LM(aM)}) at ${mM(OM)} ms`))
          }
          dM.looked++, Number.isFinite(SM) && (dM.dtMin = Math.min(dM.dtMin, SM), dM.dtMax = Math.max(dM.dtMax, SM), dM.dtSum += SM, SM > 0 && (dM.peakRate = Math.max(dM.peakRate, Math.hypot(PM, nM) / SM))), dM.raw[0] += jM, dM.raw[1] += aM, dM.turned[0] += PM, dM.turned[1] += nM;
          const yM = Math.abs(jM) > JM || Math.abs(aM) > JM,
            lM = `raw (${LM(jM)}, ${LM(aM)}) over ${mM(SM)} ms, limit ${LM(JM)}, filter v (${HM.toFixed(3)}, ${hM.toFixed(3)}) px/ms, at ${mM(OM)} ms`;
          zM === QM.j.pD ? (dM.pD++, MM.outlier(`spike put right: ${lM} -> turned (${LM(PM)}, ${LM(nM)})`)) : yM ? (dM.pastLimit++, MM.outlier(`kept past limit: ${lM}`)) : SM > 50 && (dM.longFrames++, MM.remote || MM.outlier(`long frame: ${lM}, turned in full`))
        }, this.onMouseMove = MM => {
          const rM = null !== document.pointerLockElement;
          if (QM.l.mouseMove(MM, rM), !this.topicOn) return;
          const iM = this.tally,
            {
              movementX: OM,
              movementY: SM
            } = MM;
          iM.events++;
          const jM = Math.max(Math.abs(OM), Math.abs(SM));
          iM.eventMax = Math.max(iM.eventMax, jM), jM >= 200 && (iM.bigEvents++, this.eventOutlier(`big mousemove (${OM}, ${SM}) at ${mM(MM.timeStamp)} ms, lock ${rM?"sQ":"free"}`))
        }, this.onLockChange = () => {
          const MM = document.pointerLockElement;
          MM ? QM.l.lockGained() : QM.l.change(QM.d.lockLost), this.topicOn && (0, SM.k)("look", `pointer lock ${MM?`gained (${MM.tagName.toLowerCase()})`:"lost"} at ${mM(performance.now())} ms`)
        }, this.onLockError = () => {
          QM.l.change(QM.d.lockError), this.topicOn && (0, SM.k)("look", `pointer lock request failed at ${mM(performance.now())} ms`)
        }, this.onVisibility = () => {
          QM.l.change("hidden" === document.visibilityState ? QM.d.hidden : QM.d.visible), this.topicOn && (0, SM.k)("look", `page ${document.visibilityState} at ${mM(performance.now())} ms`)
        }, this.onFocus = () => {
          QM.l.change(QM.d.focus)
        }, this.onBlur = () => {
          QM.l.change(QM.d.blur)
        }, this.flush = () => {
          if (this.takeRecords(), !this.topicOn) return;
          const MM = this.tally;
          if (this.tally = new HM, !MM.moved() || this.remote && !MM.hasEvent()) return;
          const rM = MM.looked > 0 ? MM.dtSum / MM.looked : NaN,
            iM = [`${MM.frames} frames (${MM.looked} looked, ${MM.idle} idle${"wasm"===QM.l.client?`, ${MM.yd} carried`:""})`, `dt avg ${mM(rM)} min ${mM(MM.dtMin)} max ${mM(MM.dtMax)}, ${MM.longFrames} long`, `${MM.events} mousemoves (max ${LM(MM.eventMax)} px, ${MM.bigEvents} big)`, `raw (${LM(MM.raw[0])}, ${LM(MM.raw[1])}) turned (${LM(MM.turned[0])}, ${LM(MM.turned[1])})`, `peak ${MM.peakRate.toFixed(2)} px/ms`, `put right ${MM.pD}, past limit ${MM.pastLimit}, lock skips ${MM.lockSkips}`, "lock " + (document.pointerLockElement ? "sQ" : "free")];
          MM.dropped > 0 && iM.push(`${MM.dropped} doubled spike copies dropped`), MM.cameraSets > 0 && iM.push(`${MM.cameraSets} camera sets`), MM.cameraSetsLost > 0 && iM.push(`${MM.cameraSetsLost} camera set records lost`), MM.lost > 0 && iM.push(`${MM.lost} records lost`), MM.suppressed > 0 && iM.push(`${MM.suppressed} outlier lines not shown`), (0, SM.k)("look", `1s: ${iM.join("; ")}`)
        }
      }
      start(MM, rM) {
        if (QM.l.start(MM, null !== document.pointerLockElement), this.takes = rM, this.topicOn) {
          const {
            screen: rM
          } = window;
          (0, SM.k)("look", `start: ${MM} client, dpr ${window.devicePixelRatio}, screen ${rM.width}x${rM.height}, pointer lock ${document.pointerLockElement?"sQ":"free"}`)
        }
        this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), window.addEventListener("focus", this.onFocus), window.addEventListener("blur", this.onBlur), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), this.topicOn && !this.remote && (0, SM.i)("look", (() => QM.l.dumpText())))
      }
      outlier(MM) {
        const rM = this.tally;
        rM.outliers >= 20 ? rM.suppressed++ : (rM.outliers++, (0, SM.k)("look", MM))
      }
      eventOutlier(MM) {
        const rM = this.tally;
        rM.eventLines >= 10 ? rM.suppressed++ : (rM.eventLines++, (0, SM.k)("look", MM))
      }
      takeRecords() {
        if (null === this.takes) return;
        const MM = this.takes.look();
        if (MM.length >= zM) {
          this.counted(QM.d.stepsLost, MM[0]), this.counted(QM.d.droppedCopies, MM[1]);
          for (let rM = zM; rM + QM.f <= MM.length; rM += QM.f) this.record(MM, rM)
        }
        const rM = this.takes.cameraSets();
        if (rM.length >= OM.d) {
          this.counted(QM.d.cameraSetsLost, rM[0]);
          for (let MM = OM.d; MM + OM.g <= rM.length; MM += OM.g) QM.l.cameraSet(rM, MM), this.topicOn && (this.tally.cameraSets++, this.outlier(nM(rM, MM)))
        }
      }
      droppedCopy() {
        this.counted(QM.d.droppedCopies, 1)
      }
      counted(MM, rM) {
        if (0 === rM) return;
        if (QM.l.change(MM, rM), !this.topicOn) return;
        const iM = this.tally;
        MM === QM.d.droppedCopies ? iM.dropped += rM : MM === QM.d.stepsLost ? iM.lost += rM : iM.cameraSetsLost += rM
      }
      endTake() {
        this.takeRecords(), this.takes = null
      }
    }
    let JM = null;

    function dM(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return JM ??= new hM, JM.start(MM, rM), JM.record
    }

    function yM() {
      var MM;
      null === (MM = JM) || void 0 === MM || MM.endTake()
    }

    function lM() {
      var MM;
      null === (MM = JM) || void 0 === MM || MM.droppedCopy()
    }
    async function EM(MM) {
      var rM;
      null === (rM = JM) || void 0 === rM || rM.takeRecords();
      const {
        clientHintsRead: OM,
        debugDeviceLines: SM
      } = await iM.e(34).then((() => iM(34912)));
      await OM, QM.l.save({
        ...MM,
        device: SM()
      })
    }
  },
  5200: (MM, rM, iM) => {
    iM.d(rM, {
      $b: () => tM,
      Ab: () => fM,
      Cb: () => ZM,
      D: () => PM,
      Db: () => dM,
      Fb: () => uM,
      H: () => OM,
      Jb: () => gM,
      K: () => jM,
      L: () => UM,
      M: () => VM,
      N: () => LM,
      Nb: () => oM,
      P: () => mM,
      Qb: () => FM,
      S: () => zM,
      T: () => QM,
      Tb: () => YM,
      Wb: () => AM,
      X: () => GM,
      Yb: () => xM,
      _: () => nM,
      _b: () => wM,
      bb: () => JM,
      d: () => lM,
      db: () => hM,
      dc: () => XM,
      fb: () => RM,
      fc: () => SM,
      g: () => yM,
      gb: () => WM,
      hb: () => sM,
      hc: () => TM,
      jb: () => pM,
      k: () => qM,
      l: () => EM,
      mb: () => DM,
      n: () => KM,
      o: () => HM,
      pb: () => BM,
      r: () => bM,
      t: () => IM,
      tb: () => vM,
      u: () => eM,
      w: () => CM,
      xb: () => NM,
      yb: () => kM,
      z: () => aM
    });
    const OM = 32,
      SM = 33.333333333333336,
      jM = {
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
      aM = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      PM = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      nM = {
        AheadMask: 15,
        Defaulted: 128,
        LagsShift: 8,
        CountMask: 4095
      },
      QM = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      zM = {
        PlayerBound: 32,
        JoinPreload: 64
      },
      LM = 14,
      mM = {
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
      HM = {
        Look: 0,
        Remesh: 1,
        CameraSet: 2
      },
      hM = 8,
      JM = 1,
      dM = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      yM = 6,
      lM = 1,
      EM = {
        SetCamDir: 0,
        Forced: 1,
        ScriptedTake: 2,
        ScriptedPose: 3,
        ScriptedRelease: 4
      },
      UM = {
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
      GM = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      CM = {
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
      eM = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      bM = 4,
      wM = 4,
      tM = 65535,
      gM = {
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
      uM = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      RM = 88,
      pM = 0,
      WM = 24,
      sM = 48,
      DM = 80,
      kM = {
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
      ZM = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      oM = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      fM = {
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
      YM = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      NM = 65535,
      AM = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      xM = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      vM = 2,
      FM = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      BM = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      XM = {
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
      IM = {
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
      KM = {
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
      qM = 8,
      TM = {
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
      VM = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);