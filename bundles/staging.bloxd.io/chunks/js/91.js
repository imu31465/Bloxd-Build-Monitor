export const id = 91;
export const ids = [91];
export const modules = {
  36451: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => jT,
      e: () => nT,
      f: () => kT,
      h: () => HT,
      k: () => qT
    });
    var WT = mT(662),
      zT = mT(1876),
      MT = mT(4904);
    class gT {
      constructor(TT, UT) {
        this.width = TT, this.fl = UT, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(TT * UT)
      }
      push(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const mT = this.data,
          WT = this.next * this.width;
        for (let zT = 0; zT < this.width; zT++) mT[WT + zT] = TT[UT + zT];
        this.next = (this.next + 1) % this.fl, this.size = Math.min(this.size + 1, this.fl)
      }
      rows() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
        const mT = [],
          WT = (this.next - this.size + this.fl) % this.fl;
        for (let zT = 0; zT < this.size; zT++) {
          const MT = (WT + zT) % this.fl * this.width;
          this.data[MT + TT] >= UT && mT.push(Array.from(this.data.subarray(MT, MT + this.width)))
        }
        return mT
      }
      lines() {
        return this.rows().map((TT => TT.join(",")))
      }
    }
    const nT = 10,
      HT = {
        idle: 0,
        Jp: 1,
        ZF: 2,
        vF: 3,
        Uc: 4
      },
      kT = {
        none: 0,
        skipped: 1,
        paced: 2,
        drawn: 3
      },
      jT = {
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
      lT = 12e3,
      LT = ["nowMs", "dtMs", "rawX", "rawY", "turnedX", "turnedY", "outcome", "velocityX", "velocityY", "limit"],
      pT = ["timeStamp", "nowMs", "movementX", "movementY", "locked"],
      BT = ["nowMs", "dtMs", "heading", "pitch", "kind"],
      ZT = ["nowMs", "source", "headingBefore", "pitchBefore", "headingAfter", "pitchAfter"],
      cT = ["nowMs", "change", "count"];

    function vT(TT) {
      return "js" === TT ? jT.jsClient : jT.wasmClient
    }
    class fT {
      constructor() {
        this.steps = new gT(nT, lT), this.events = new gT(pT.length, lT), this.frames = new gT(BT.length, lT), this.cameraSets = new gT(MT.f, 256), this.changes = new gT(cT.length, 256)
      }
    }
    const qT = new class {
      constructor() {
        this.rings = null, this.sample = new Float64Array(pT.length), this.startedClient = null, this.startedAtMs = 0
      }
      get client() {
        return this.startedClient
      }
      start(TT, UT) {
        this.startedClient = TT, this.startedAtMs = performance.now(), null !== this.rings ? this.change(vT(TT)) : UT && this.allocate()
      }
      lockGained() {
        this.allocate(), this.change(jT.lockGained)
      }
      allocate() {
        null === this.rings && (this.rings = new fT, null !== this.startedClient && this.changeAt(this.startedAtMs, vT(this.startedClient), 1))
      }
      step(TT, UT) {
        var mT;
        TT[UT + 6] !== HT.Uc && (null === (mT = this.rings) || void 0 === mT || mT.steps.push(TT, UT))
      }
      cameraSet(TT, UT) {
        var mT;
        null === (mT = this.rings) || void 0 === mT || mT.cameraSets.push(TT, UT)
      }
      mouseMove(TT, UT) {
        const mT = this.rings;
        if (null === mT) return;
        const WT = this.sample;
        WT[0] = TT.timeStamp, WT[1] = performance.now(), WT[2] = TT.movementX, WT[3] = TT.movementY, WT[4] = UT ? 1 : 0, mT.events.push(WT)
      }
      frame(TT, UT, mT, WT) {
        const zT = this.rings;
        if (null === zT || WT === kT.none) return;
        const MT = this.sample;
        MT[0] = performance.now(), MT[1] = TT, MT[2] = UT, MT[3] = mT, MT[4] = WT, zT.frames.push(MT)
      }
      change(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.changeAt(performance.now(), TT, UT)
      }
      changeAt(TT, UT, mT) {
        const WT = this.rings;
        if (null === WT) return;
        const zT = this.sample;
        zT[0] = TT, zT[1] = UT, zT[2] = mT, WT.changes.push(zT)
      }
      dumpText() {
        var TT, UT;
        const mT = this.rings;
        return [`look records (${this.startedClient}): ${LT.join(",")}`, ...null !== (TT = null === mT || void 0 === mT ? void 0 : mT.steps.lines()) && void 0 !== TT ? TT : [], `mousemove events: ${pT.join(",")}`, ...null !== (UT = null === mT || void 0 === mT ? void 0 : mT.events.lines()) && void 0 !== UT ? UT : []].join("\n")
      }
      toJson(TT, UT) {
        var mT;
        const zT = TT - 6e4,
          MT = this.rings,
          gT = function(TT, UT) {
            var mT;
            let WT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const MT = null !== (mT = null === TT || void 0 === TT ? void 0 : TT.rows(WT, zT)) && void 0 !== mT ? mT : [];
            return {
              columns: UT,
              fromMs: 0 === MT.length ? null : MT[0][WT],
              rows: MT
            }
          };
        return {
          version: WT.d,
          client: null !== (mT = this.startedClient) && void 0 !== mT ? mT : "not started",
          savedAt: (new Date).toISOString(),
          savedAtMs: TT,
          keptMs: 6e4,
          page: window.location.href,
          userAgent: navigator.userAgent,
          devicePixelRatio: window.devicePixelRatio,
          screen: {
            width: window.screen.width,
            height: window.screen.height
          },
          yc: null !== document.pointerLockElement,
          visibility: document.visibilityState,
          ...UT,
          outcomes: HT,
          frameKinds: kT,
          changes: jT,
          lookSteps: gT(null === MT || void 0 === MT ? void 0 : MT.steps, LT),
          mouseMoves: gT(null === MT || void 0 === MT ? void 0 : MT.events, pT, 1),
          frames: gT(null === MT || void 0 === MT ? void 0 : MT.frames, BT),
          cameraSets: gT(null === MT || void 0 === MT ? void 0 : MT.cameraSets, ZT),
          pageChanges: gT(null === MT || void 0 === MT ? void 0 : MT.changes, cT)
        }
      }
      save(TT) {
        const UT = JSON.stringify(this.toJson(performance.now(), TT));
        (0, zT.c)(new Blob([UT], {
          type: "application/json"
        }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
      }
    }
  },
  36447: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      LOOK_DEBUG_HEADER: () => jT,
      endLookDebugTake: () => vT,
      noteLookDroppedCopy: () => fT,
      saveLookCapture: () => qT,
      startLookDebug: () => cT
    });
    var WT = mT(4904),
      zT = mT(2929),
      MT = mT(2014);
    const gT = new Map(Object.entries(WT.j).map((TT => {
      let [UT, mT] = TT;
      return [mT, UT]
    })));

    function nT(TT) {
      return (0, MT.D)(TT).toFixed(1)
    }

    function HT(TT, UT) {
      return `camera set by ${gT.get(TT[UT+1])}: heading ${`${nT(TT[UT+2])} -> ${nT(TT[UT+4])}`} deg, pitch ${`${nT(TT[UT+3])} -> ${nT(TT[UT+5])}`} deg, at ${TT[UT].toFixed(1)} ms`
    }
    var kT = mT(36451);
    const jT = 2;

    function lT(TT) {
      return Number.isFinite(TT) ? String(Math.round(10 * TT) / 10) : String(TT)
    }

    function LT(TT) {
      return Number.isFinite(TT) ? TT.toFixed(1) : String(TT)
    }
    class pT {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.ZF = 0, this.pastLimit = 0, this.lockSkips = 0, this.Uc = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.cameraSets = 0, this.cameraSetsLost = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
      moved() {
        return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.ZF > 0 || this.dropped > 0 || this.cameraSets > 0
      }
      hasEvent() {
        return this.ZF > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
      }
    }
    class BT {
      constructor() {
        var TT = this;
        this.topicOn = (0, zT.r)("look"), this.remote = (0, zT.v)(), this.tally = new pT, this.takes = null, this.started = !1, this.record = function(UT) {
          let mT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          if (kT.k.step(UT, mT), !TT.topicOn) return;
          const WT = UT[mT],
            zT = UT[mT + 1],
            MT = UT[mT + 2],
            gT = UT[mT + 3],
            nT = UT[mT + 4],
            HT = UT[mT + 5],
            jT = UT[mT + 6],
            pT = UT[mT + 7],
            BT = UT[mT + 8],
            ZT = UT[mT + 9],
            cT = TT.tally;
          switch (cT.frames++, jT) {
            case kT.h.idle:
              return void cT.idle++;
            case kT.h.Uc:
              return void cT.Uc++;
            case kT.h.vF:
              return cT.lockSkips++, void(0 === MT && 0 === gT || TT.outlier(`lock skip dropped raw (${lT(MT)}, ${lT(gT)}) at ${LT(WT)} ms`))
          }
          cT.looked++, Number.isFinite(zT) && (cT.dtMin = Math.min(cT.dtMin, zT), cT.dtMax = Math.max(cT.dtMax, zT), cT.dtSum += zT, zT > 0 && (cT.peakRate = Math.max(cT.peakRate, Math.hypot(nT, HT) / zT))), cT.raw[0] += MT, cT.raw[1] += gT, cT.turned[0] += nT, cT.turned[1] += HT;
          const vT = Math.abs(MT) > ZT || Math.abs(gT) > ZT,
            fT = `raw (${lT(MT)}, ${lT(gT)}) over ${LT(zT)} ms, limit ${lT(ZT)}, filter v (${pT.toFixed(3)}, ${BT.toFixed(3)}) px/ms, at ${LT(WT)} ms`;
          jT === kT.h.ZF ? (cT.ZF++, TT.outlier(`spike put right: ${fT} -> turned (${lT(nT)}, ${lT(HT)})`)) : vT ? (cT.pastLimit++, TT.outlier(`kept past limit: ${fT}`)) : zT > 50 && (cT.longFrames++, TT.remote || TT.outlier(`long frame: ${fT}, turned in full`))
        }, this.onMouseMove = TT => {
          const UT = null !== document.pointerLockElement;
          if (kT.k.mouseMove(TT, UT), !this.topicOn) return;
          const mT = this.tally,
            {
              movementX: WT,
              movementY: zT
            } = TT;
          mT.events++;
          const MT = Math.max(Math.abs(WT), Math.abs(zT));
          mT.eventMax = Math.max(mT.eventMax, MT), MT >= 200 && (mT.bigEvents++, this.eventOutlier(`big mousemove (${WT}, ${zT}) at ${LT(TT.timeStamp)} ms, lock ${UT?"fn":"free"}`))
        }, this.onLockChange = () => {
          const TT = document.pointerLockElement;
          TT ? kT.k.lockGained() : kT.k.change(kT.b.lockLost), this.topicOn && (0, zT.m)("look", `pointer lock ${TT?`gained (${TT.tagName.toLowerCase()})`:"lost"} at ${LT(performance.now())} ms`)
        }, this.onLockError = () => {
          kT.k.change(kT.b.lockError), this.topicOn && (0, zT.m)("look", `pointer lock request failed at ${LT(performance.now())} ms`)
        }, this.onVisibility = () => {
          kT.k.change("hidden" === document.visibilityState ? kT.b.hidden : kT.b.visible), this.topicOn && (0, zT.m)("look", `page ${document.visibilityState} at ${LT(performance.now())} ms`)
        }, this.onFocus = () => {
          kT.k.change(kT.b.focus)
        }, this.onBlur = () => {
          kT.k.change(kT.b.blur)
        }, this.flush = () => {
          if (this.takeRecords(), !this.topicOn) return;
          const TT = this.tally;
          if (this.tally = new pT, !TT.moved() || this.remote && !TT.hasEvent()) return;
          const UT = TT.looked > 0 ? TT.dtSum / TT.looked : NaN,
            mT = [`${TT.frames} frames (${TT.looked} looked, ${TT.idle} idle${"wasm"===kT.k.client?`, ${TT.Uc} carried`:""})`, `dt avg ${LT(UT)} min ${LT(TT.dtMin)} max ${LT(TT.dtMax)}, ${TT.longFrames} long`, `${TT.events} mousemoves (max ${lT(TT.eventMax)} px, ${TT.bigEvents} big)`, `raw (${lT(TT.raw[0])}, ${lT(TT.raw[1])}) turned (${lT(TT.turned[0])}, ${lT(TT.turned[1])})`, `peak ${TT.peakRate.toFixed(2)} px/ms`, `put right ${TT.ZF}, past limit ${TT.pastLimit}, lock skips ${TT.lockSkips}`, "lock " + (document.pointerLockElement ? "fn" : "free")];
          TT.dropped > 0 && mT.push(`${TT.dropped} doubled spike copies dropped`), TT.cameraSets > 0 && mT.push(`${TT.cameraSets} camera sets`), TT.cameraSetsLost > 0 && mT.push(`${TT.cameraSetsLost} camera set records lost`), TT.lost > 0 && mT.push(`${TT.lost} records lost`), TT.suppressed > 0 && mT.push(`${TT.suppressed} outlier lines not shown`), (0, zT.m)("look", `1s: ${mT.join("; ")}`)
        }
      }
      start(TT, UT) {
        if (kT.k.start(TT, null !== document.pointerLockElement), this.takes = UT, this.topicOn) {
          const {
            screen: UT
          } = window;
          (0, zT.m)("look", `start: ${TT} client, dpr ${window.devicePixelRatio}, screen ${UT.width}x${UT.height}, pointer lock ${document.pointerLockElement?"fn":"free"}`)
        }
        this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), window.addEventListener("focus", this.onFocus), window.addEventListener("blur", this.onBlur), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), this.topicOn && !this.remote && (0, zT.j)("look", (() => kT.k.dumpText())))
      }
      outlier(TT) {
        const UT = this.tally;
        UT.outliers >= 20 ? UT.suppressed++ : (UT.outliers++, (0, zT.m)("look", TT))
      }
      eventOutlier(TT) {
        const UT = this.tally;
        UT.eventLines >= 10 ? UT.suppressed++ : (UT.eventLines++, (0, zT.m)("look", TT))
      }
      takeRecords() {
        if (null === this.takes) return;
        const TT = this.takes.look();
        if (TT.length >= jT) {
          this.counted(kT.b.stepsLost, TT[0]), this.counted(kT.b.droppedCopies, TT[1]);
          for (let UT = jT; UT + kT.e <= TT.length; UT += kT.e) this.record(TT, UT)
        }
        const UT = this.takes.cameraSets();
        if (UT.length >= WT.d) {
          this.counted(kT.b.cameraSetsLost, UT[0]);
          for (let TT = WT.d; TT + WT.f <= UT.length; TT += WT.f) kT.k.cameraSet(UT, TT), this.topicOn && (this.tally.cameraSets++, this.outlier(HT(UT, TT)))
        }
      }
      droppedCopy() {
        this.counted(kT.b.droppedCopies, 1)
      }
      counted(TT, UT) {
        if (0 === UT) return;
        if (kT.k.change(TT, UT), !this.topicOn) return;
        const mT = this.tally;
        TT === kT.b.droppedCopies ? mT.dropped += UT : TT === kT.b.stepsLost ? mT.lost += UT : mT.cameraSetsLost += UT
      }
      endTake() {
        this.takeRecords(), this.takes = null
      }
    }
    let ZT = null;

    function cT(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return ZT ??= new BT, ZT.start(TT, UT), ZT.record
    }

    function vT() {
      var TT;
      null === (TT = ZT) || void 0 === TT || TT.endTake()
    }

    function fT() {
      var TT;
      null === (TT = ZT) || void 0 === TT || TT.droppedCopy()
    }
    async function qT(TT) {
      var UT;
      null === (UT = ZT) || void 0 === UT || UT.takeRecords();
      const {
        clientHintsRead: WT,
        debugDeviceLines: zT
      } = await mT.e(29).then((() => mT(34135)));
      await WT, kT.k.save({
        ...TT,
        device: zT()
      })
    }
  },
  4904: (TT, UT, mT) => {
    mT.d(UT, {
      $: () => BT,
      $b: () => oT,
      A: () => gT,
      C: () => nT,
      Cb: () => wT,
      D: () => WT,
      Db: () => dT,
      Eb: () => FT,
      F: () => MT,
      G: () => iT,
      Ib: () => ST,
      K: () => AT,
      Kb: () => VT,
      L: () => lT,
      Mb: () => CT,
      Nb: () => rT,
      O: () => LT,
      Pb: () => JT,
      R: () => jT,
      Sb: () => xT,
      Tb: () => NT,
      V: () => kT,
      X: () => bT,
      Xb: () => zT,
      Y: () => HT,
      _: () => ZT,
      bb: () => tT,
      d: () => fT,
      f: () => vT,
      fb: () => yT,
      i: () => DT,
      j: () => qT,
      jb: () => XT,
      l: () => hT,
      nb: () => aT,
      o: () => pT,
      ob: () => IT,
      p: () => YT,
      pb: () => GT,
      q: () => ET,
      qb: () => KT,
      rb: () => uT,
      s: () => eT,
      tb: () => QT,
      vb: () => PT,
      w: () => OT,
      wb: () => sT,
      yb: () => cT
    });
    const WT = 32,
      zT = 33.333333333333336,
      MT = {
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
      gT = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      nT = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      HT = {
        AheadMask: 15,
        Defaulted: 128,
        LagsShift: 8,
        CountMask: 4095
      },
      kT = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      jT = {
        PlayerBound: 32,
        JoinPreload: 64
      },
      lT = 14,
      LT = {
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
      pT = {
        Look: 0,
        Remesh: 1,
        CameraSet: 2
      },
      BT = 8,
      ZT = 1,
      cT = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      vT = 6,
      fT = 1,
      qT = {
        SetCamDir: 0,
        Forced: 1,
        ScriptedTake: 2,
        ScriptedPose: 3,
        ScriptedRelease: 4
      },
      iT = {
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
      bT = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      OT = {
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
      eT = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      YT = 4,
      JT = 4,
      xT = 65535,
      dT = {
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
      wT = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      tT = 88,
      aT = 0,
      yT = 24,
      XT = 48,
      IT = 80,
      QT = {
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
      sT = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      FT = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      PT = {
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
      VT = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      uT = 65535,
      CT = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      rT = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      KT = 2,
      ST = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      GT = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      NT = {
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
      ET = {
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
      hT = {
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
      DT = 8,
      oT = {
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
      AT = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);