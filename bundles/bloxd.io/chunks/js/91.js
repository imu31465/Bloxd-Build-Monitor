export const id = 91;
export const ids = [91];
export const modules = {
  36707: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => VG,
      g: () => kG,
      k: () => YG,
      l: () => UG,
      m: () => zG
    });
    var wG = ZG(612),
      SG = ZG(1721),
      LG = ZG(4818);
    class yG {
      constructor(GG, bG) {
        this.width = GG, this.rp = bG, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(GG * bG)
      }
      push(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ZG = this.data,
          wG = this.next * this.width;
        for (let SG = 0; SG < this.width; SG++) ZG[wG + SG] = GG[bG + SG];
        this.next = (this.next + 1) % this.rp, this.size = Math.min(this.size + 1, this.rp)
      }
      rows() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
        const ZG = [],
          wG = (this.next - this.size + this.rp) % this.rp;
        for (let SG = 0; SG < this.size; SG++) {
          const LG = (wG + SG) % this.rp * this.width;
          this.data[LG + GG] >= bG && ZG.push(Array.from(this.data.subarray(LG, LG + this.width)))
        }
        return ZG
      }
      lines() {
        return this.rows().map((GG => GG.join(",")))
      }
    }
    const kG = 10,
      UG = {
        idle: 0,
        vQ: 1,
        vF: 2,
        lF: 3,
        Ld: 4
      },
      YG = {
        none: 0,
        skipped: 1,
        paced: 2,
        drawn: 3
      },
      VG = {
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
      pG = 12e3,
      fG = ["nowMs", "dtMs", "rawX", "rawY", "turnedX", "turnedY", "outcome", "velocityX", "velocityY", "limit"],
      QG = ["timeStamp", "nowMs", "movementX", "movementY", "locked"],
      KG = ["nowMs", "dtMs", "heading", "pitch", "kind"],
      hG = ["nowMs", "source", "headingBefore", "pitchBefore", "headingAfter", "pitchAfter"],
      dG = ["nowMs", "change", "count"];

    function JG(GG) {
      return "js" === GG ? VG.jsClient : VG.wasmClient
    }
    class rG {
      constructor() {
        this.steps = new yG(kG, pG), this.events = new yG(QG.length, pG), this.frames = new yG(KG.length, pG), this.cameraSets = new yG(LG.h, 256), this.changes = new yG(dG.length, 256)
      }
    }
    const zG = new class {
      constructor() {
        this.rings = null, this.sample = new Float64Array(QG.length), this.startedClient = null, this.startedAtMs = 0
      }
      get client() {
        return this.startedClient
      }
      start(GG, bG) {
        this.startedClient = GG, this.startedAtMs = performance.now(), null !== this.rings ? this.change(JG(GG)) : bG && this.allocate()
      }
      lockGained() {
        this.allocate(), this.change(VG.lockGained)
      }
      allocate() {
        null === this.rings && (this.rings = new rG, null !== this.startedClient && this.changeAt(this.startedAtMs, JG(this.startedClient), 1))
      }
      step(GG, bG) {
        var ZG;
        GG[bG + 6] !== UG.Ld && (null === (ZG = this.rings) || void 0 === ZG || ZG.steps.push(GG, bG))
      }
      cameraSet(GG, bG) {
        var ZG;
        null === (ZG = this.rings) || void 0 === ZG || ZG.cameraSets.push(GG, bG)
      }
      mouseMove(GG, bG) {
        const ZG = this.rings;
        if (null === ZG) return;
        const wG = this.sample;
        wG[0] = GG.timeStamp, wG[1] = performance.now(), wG[2] = GG.movementX, wG[3] = GG.movementY, wG[4] = bG ? 1 : 0, ZG.events.push(wG)
      }
      frame(GG, bG, ZG, wG) {
        const SG = this.rings;
        if (null === SG || wG === YG.none) return;
        const LG = this.sample;
        LG[0] = performance.now(), LG[1] = GG, LG[2] = bG, LG[3] = ZG, LG[4] = wG, SG.frames.push(LG)
      }
      change(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.changeAt(performance.now(), GG, bG)
      }
      changeAt(GG, bG, ZG) {
        const wG = this.rings;
        if (null === wG) return;
        const SG = this.sample;
        SG[0] = GG, SG[1] = bG, SG[2] = ZG, wG.changes.push(SG)
      }
      dumpText() {
        var GG, bG;
        const ZG = this.rings;
        return [`look records (${this.startedClient}): ${fG.join(",")}`, ...null !== (GG = null === ZG || void 0 === ZG ? void 0 : ZG.steps.lines()) && void 0 !== GG ? GG : [], `mousemove events: ${QG.join(",")}`, ...null !== (bG = null === ZG || void 0 === ZG ? void 0 : ZG.events.lines()) && void 0 !== bG ? bG : []].join("\n")
      }
      toJson(GG, bG) {
        var ZG;
        const SG = GG - 6e4,
          LG = this.rings,
          yG = function(GG, bG) {
            var ZG;
            let wG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const LG = null !== (ZG = null === GG || void 0 === GG ? void 0 : GG.rows(wG, SG)) && void 0 !== ZG ? ZG : [];
            return {
              columns: bG,
              fromMs: 0 === LG.length ? null : LG[0][wG],
              rows: LG
            }
          };
        return {
          version: wG.e,
          client: null !== (ZG = this.startedClient) && void 0 !== ZG ? ZG : "not started",
          savedAt: (new Date).toISOString(),
          savedAtMs: GG,
          keptMs: 6e4,
          page: window.location.href,
          userAgent: navigator.userAgent,
          devicePixelRatio: window.devicePixelRatio,
          screen: {
            width: window.screen.width,
            height: window.screen.height
          },
          gd: null !== document.pointerLockElement,
          visibility: document.visibilityState,
          ...bG,
          outcomes: UG,
          frameKinds: YG,
          changes: VG,
          lookSteps: yG(null === LG || void 0 === LG ? void 0 : LG.steps, fG),
          mouseMoves: yG(null === LG || void 0 === LG ? void 0 : LG.events, QG, 1),
          frames: yG(null === LG || void 0 === LG ? void 0 : LG.frames, KG),
          cameraSets: yG(null === LG || void 0 === LG ? void 0 : LG.cameraSets, hG),
          pageChanges: yG(null === LG || void 0 === LG ? void 0 : LG.changes, dG)
        }
      }
      save(GG) {
        const bG = JSON.stringify(this.toJson(performance.now(), GG));
        (0, SG.b)(new Blob([bG], {
          type: "application/json"
        }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
      }
    }
  },
  36701: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      LOOK_DEBUG_HEADER: () => VG,
      endLookDebugTake: () => JG,
      noteLookDroppedCopy: () => rG,
      saveLookCapture: () => zG,
      startLookDebug: () => dG
    });
    var wG = ZG(4818),
      SG = ZG(2801),
      LG = ZG(1873);
    const yG = new Map(Object.entries(wG.k).map((GG => {
      let [bG, ZG] = GG;
      return [ZG, bG]
    })));

    function kG(GG) {
      return (0, LG.C)(GG).toFixed(1)
    }

    function UG(GG, bG) {
      return `camera set by ${yG.get(GG[bG+1])}: heading ${`${kG(GG[bG+2])} -> ${kG(GG[bG+4])}`} deg, pitch ${`${kG(GG[bG+3])} -> ${kG(GG[bG+5])}`} deg, at ${GG[bG].toFixed(1)} ms`
    }
    var YG = ZG(36707);
    const VG = 2;

    function pG(GG) {
      return Number.isFinite(GG) ? String(Math.round(10 * GG) / 10) : String(GG)
    }

    function fG(GG) {
      return Number.isFinite(GG) ? GG.toFixed(1) : String(GG)
    }
    class QG {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.vF = 0, this.pastLimit = 0, this.lockSkips = 0, this.Ld = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.cameraSets = 0, this.cameraSetsLost = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
      moved() {
        return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.vF > 0 || this.dropped > 0 || this.cameraSets > 0
      }
      hasEvent() {
        return this.vF > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
      }
    }
    class KG {
      constructor() {
        var GG = this;
        this.topicOn = (0, SG.m)("look"), this.remote = (0, SG.n)(), this.tally = new QG, this.takes = null, this.started = !1, this.record = function(bG) {
          let ZG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          if (YG.m.step(bG, ZG), !GG.topicOn) return;
          const wG = bG[ZG],
            SG = bG[ZG + 1],
            LG = bG[ZG + 2],
            yG = bG[ZG + 3],
            kG = bG[ZG + 4],
            UG = bG[ZG + 5],
            VG = bG[ZG + 6],
            QG = bG[ZG + 7],
            KG = bG[ZG + 8],
            hG = bG[ZG + 9],
            dG = GG.tally;
          switch (dG.frames++, VG) {
            case YG.l.idle:
              return void dG.idle++;
            case YG.l.Ld:
              return void dG.Ld++;
            case YG.l.lF:
              return dG.lockSkips++, void(0 === LG && 0 === yG || GG.outlier(`lock skip dropped raw (${pG(LG)}, ${pG(yG)}) at ${fG(wG)} ms`))
          }
          dG.looked++, Number.isFinite(SG) && (dG.dtMin = Math.min(dG.dtMin, SG), dG.dtMax = Math.max(dG.dtMax, SG), dG.dtSum += SG, SG > 0 && (dG.peakRate = Math.max(dG.peakRate, Math.hypot(kG, UG) / SG))), dG.raw[0] += LG, dG.raw[1] += yG, dG.turned[0] += kG, dG.turned[1] += UG;
          const JG = Math.abs(LG) > hG || Math.abs(yG) > hG,
            rG = `raw (${pG(LG)}, ${pG(yG)}) over ${fG(SG)} ms, limit ${pG(hG)}, filter v (${QG.toFixed(3)}, ${KG.toFixed(3)}) px/ms, at ${fG(wG)} ms`;
          VG === YG.l.vF ? (dG.vF++, GG.outlier(`spike put right: ${rG} -> turned (${pG(kG)}, ${pG(UG)})`)) : JG ? (dG.pastLimit++, GG.outlier(`kept past limit: ${rG}`)) : SG > 50 && (dG.longFrames++, GG.remote || GG.outlier(`long frame: ${rG}, turned in full`))
        }, this.onMouseMove = GG => {
          const bG = null !== document.pointerLockElement;
          if (YG.m.mouseMove(GG, bG), !this.topicOn) return;
          const ZG = this.tally,
            {
              movementX: wG,
              movementY: SG
            } = GG;
          ZG.events++;
          const LG = Math.max(Math.abs(wG), Math.abs(SG));
          ZG.eventMax = Math.max(ZG.eventMax, LG), LG >= 200 && (ZG.bigEvents++, this.eventOutlier(`big mousemove (${wG}, ${SG}) at ${fG(GG.timeStamp)} ms, lock ${bG?"Ik":"free"}`))
        }, this.onLockChange = () => {
          const GG = document.pointerLockElement;
          GG ? YG.m.lockGained() : YG.m.change(YG.c.lockLost), this.topicOn && (0, SG.j)("look", `pointer lock ${GG?`gained (${GG.tagName.toLowerCase()})`:"lost"} at ${fG(performance.now())} ms`)
        }, this.onLockError = () => {
          YG.m.change(YG.c.lockError), this.topicOn && (0, SG.j)("look", `pointer lock request failed at ${fG(performance.now())} ms`)
        }, this.onVisibility = () => {
          YG.m.change("hidden" === document.visibilityState ? YG.c.hidden : YG.c.visible), this.topicOn && (0, SG.j)("look", `page ${document.visibilityState} at ${fG(performance.now())} ms`)
        }, this.onFocus = () => {
          YG.m.change(YG.c.focus)
        }, this.onBlur = () => {
          YG.m.change(YG.c.blur)
        }, this.flush = () => {
          if (this.takeRecords(), !this.topicOn) return;
          const GG = this.tally;
          if (this.tally = new QG, !GG.moved() || this.remote && !GG.hasEvent()) return;
          const bG = GG.looked > 0 ? GG.dtSum / GG.looked : NaN,
            ZG = [`${GG.frames} frames (${GG.looked} looked, ${GG.idle} idle${"wasm"===YG.m.client?`, ${GG.Ld} carried`:""})`, `dt avg ${fG(bG)} min ${fG(GG.dtMin)} max ${fG(GG.dtMax)}, ${GG.longFrames} long`, `${GG.events} mousemoves (max ${pG(GG.eventMax)} px, ${GG.bigEvents} big)`, `raw (${pG(GG.raw[0])}, ${pG(GG.raw[1])}) turned (${pG(GG.turned[0])}, ${pG(GG.turned[1])})`, `peak ${GG.peakRate.toFixed(2)} px/ms`, `put right ${GG.vF}, past limit ${GG.pastLimit}, lock skips ${GG.lockSkips}`, "lock " + (document.pointerLockElement ? "Ik" : "free")];
          GG.dropped > 0 && ZG.push(`${GG.dropped} doubled spike copies dropped`), GG.cameraSets > 0 && ZG.push(`${GG.cameraSets} camera sets`), GG.cameraSetsLost > 0 && ZG.push(`${GG.cameraSetsLost} camera set records lost`), GG.lost > 0 && ZG.push(`${GG.lost} records lost`), GG.suppressed > 0 && ZG.push(`${GG.suppressed} outlier lines not shown`), (0, SG.j)("look", `1s: ${ZG.join("; ")}`)
        }
      }
      start(GG, bG) {
        if (YG.m.start(GG, null !== document.pointerLockElement), this.takes = bG, this.topicOn) {
          const {
            screen: bG
          } = window;
          (0, SG.j)("look", `start: ${GG} client, dpr ${window.devicePixelRatio}, screen ${bG.width}x${bG.height}, pointer lock ${document.pointerLockElement?"Ik":"free"}`)
        }
        this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), window.addEventListener("focus", this.onFocus), window.addEventListener("blur", this.onBlur), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), this.topicOn && !this.remote && (0, SG.i)("look", (() => YG.m.dumpText())))
      }
      outlier(GG) {
        const bG = this.tally;
        bG.outliers >= 20 ? bG.suppressed++ : (bG.outliers++, (0, SG.j)("look", GG))
      }
      eventOutlier(GG) {
        const bG = this.tally;
        bG.eventLines >= 10 ? bG.suppressed++ : (bG.eventLines++, (0, SG.j)("look", GG))
      }
      takeRecords() {
        if (null === this.takes) return;
        const GG = this.takes.look();
        if (GG.length >= VG) {
          this.counted(YG.c.stepsLost, GG[0]), this.counted(YG.c.droppedCopies, GG[1]);
          for (let bG = VG; bG + YG.g <= GG.length; bG += YG.g) this.record(GG, bG)
        }
        const bG = this.takes.cameraSets();
        if (bG.length >= wG.e) {
          this.counted(YG.c.cameraSetsLost, bG[0]);
          for (let GG = wG.e; GG + wG.h <= bG.length; GG += wG.h) YG.m.cameraSet(bG, GG), this.topicOn && (this.tally.cameraSets++, this.outlier(UG(bG, GG)))
        }
      }
      droppedCopy() {
        this.counted(YG.c.droppedCopies, 1)
      }
      counted(GG, bG) {
        if (0 === bG) return;
        if (YG.m.change(GG, bG), !this.topicOn) return;
        const ZG = this.tally;
        GG === YG.c.droppedCopies ? ZG.dropped += bG : GG === YG.c.stepsLost ? ZG.lost += bG : ZG.cameraSetsLost += bG
      }
      endTake() {
        this.takeRecords(), this.takes = null
      }
    }
    let hG = null;

    function dG(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return hG ??= new KG, hG.start(GG, bG), hG.record
    }

    function JG() {
      var GG;
      null === (GG = hG) || void 0 === GG || GG.endTake()
    }

    function rG() {
      var GG;
      null === (GG = hG) || void 0 === GG || GG.droppedCopy()
    }
    async function zG(GG) {
      var bG;
      null === (bG = hG) || void 0 === bG || bG.takeRecords();
      const {
        clientHintsRead: wG,
        debugDeviceLines: SG
      } = await ZG.e(29).then((() => ZG(34354)));
      await wG, YG.m.save({
        ...GG,
        device: SG()
      })
    }
  },
  4818: (GG, bG, ZG) => {
    ZG.d(bG, {
      $: () => UG,
      Ab: () => jG,
      B: () => yG,
      D: () => kG,
      Db: () => AG,
      Gb: () => PG,
      H: () => wG,
      Hb: () => dG,
      K: () => LG,
      Kb: () => IG,
      M: () => EG,
      Mb: () => mG,
      Ob: () => MG,
      Pb: () => RG,
      Q: () => xG,
      R: () => pG,
      Sb: () => sG,
      T: () => fG,
      U: () => VG,
      Vb: () => nG,
      X: () => YG,
      Zb: () => gG,
      _: () => oG,
      _b: () => CG,
      ab: () => hG,
      bb: () => KG,
      cc: () => WG,
      e: () => rG,
      eb: () => FG,
      fc: () => HG,
      gb: () => aG,
      h: () => JG,
      i: () => NG,
      ib: () => cG,
      ic: () => SG,
      jc: () => OG,
      k: () => zG,
      lb: () => vG,
      m: () => DG,
      o: () => QG,
      ob: () => lG,
      pb: () => TG,
      q: () => iG,
      r: () => tG,
      sb: () => eG,
      v: () => uG,
      wb: () => qG,
      x: () => XG
    });
    const wG = 32,
      SG = 33.333333333333336,
      LG = {
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
      yG = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      kG = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      UG = {
        AheadMask: 15,
        Defaulted: 128,
        LagsShift: 8,
        CountMask: 4095
      },
      YG = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      VG = {
        PlayerBound: 32,
        JoinPreload: 64
      },
      pG = 14,
      fG = {
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
      QG = {
        Look: 0,
        Remesh: 1,
        CameraSet: 2
      },
      KG = 8,
      hG = 1,
      dG = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      JG = 6,
      rG = 1,
      zG = {
        SetCamDir: 0,
        Forced: 1,
        ScriptedTake: 2,
        ScriptedPose: 3,
        ScriptedRelease: 4
      },
      EG = {
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
      oG = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      XG = {
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
      uG = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      iG = 4,
      CG = 4,
      WG = 65535,
      mG = {
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
      IG = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      FG = 88,
      vG = 0,
      aG = 24,
      cG = 48,
      lG = 80,
      jG = {
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
      PG = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      MG = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      AG = {
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
      sG = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      qG = 65535,
      nG = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      gG = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      eG = 2,
      RG = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      TG = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      HG = {
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
      tG = {
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
      DG = {
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
      NG = 8,
      OG = {
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
      xG = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);