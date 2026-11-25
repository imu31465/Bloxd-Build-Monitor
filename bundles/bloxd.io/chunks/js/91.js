export const id = 91;
export const ids = [91];
export const modules = {
  36616: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Xt,
      g: () => dt,
      j: () => Ht,
      k: () => jt,
      o: () => bt
    });
    var Ot = Vt(712),
      qt = Vt(1842),
      Dt = Vt(4963);
    class mt {
      constructor(tt, et) {
        this.width = tt, this.uQ = et, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(tt * et)
      }
      push(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Vt = this.data,
          Ot = this.next * this.width;
        for (let qt = 0; qt < this.width; qt++) Vt[Ot + qt] = tt[et + qt];
        this.next = (this.next + 1) % this.uQ, this.size = Math.min(this.size + 1, this.uQ)
      }
      rows() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
        const Vt = [],
          Ot = (this.next - this.size + this.uQ) % this.uQ;
        for (let qt = 0; qt < this.size; qt++) {
          const Dt = (Ot + qt) % this.uQ * this.width;
          this.data[Dt + tt] >= et && Vt.push(Array.from(this.data.subarray(Dt, Dt + this.width)))
        }
        return Vt
      }
      lines() {
        return this.rows().map((tt => tt.join(",")))
      }
    }
    const dt = 10,
      jt = {
        idle: 0,
        hE: 1,
        qI: 2,
        mI: 3,
        my: 4
      },
      Ht = {
        none: 0,
        skipped: 1,
        paced: 2,
        drawn: 3
      },
      Xt = {
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
      Qt = 12e3,
      lt = ["nowMs", "dtMs", "rawX", "rawY", "turnedX", "turnedY", "outcome", "velocityX", "velocityY", "limit"],
      Et = ["timeStamp", "nowMs", "movementX", "movementY", "locked"],
      ft = ["nowMs", "dtMs", "heading", "pitch", "kind"],
      wt = ["nowMs", "source", "headingBefore", "pitchBefore", "headingAfter", "pitchAfter"],
      yt = ["nowMs", "change", "count"];

    function Nt(tt) {
      return "js" === tt ? Xt.jsClient : Xt.wasmClient
    }
    class Mt {
      constructor() {
        this.steps = new mt(dt, Qt), this.events = new mt(Et.length, Qt), this.frames = new mt(ft.length, Qt), this.cameraSets = new mt(Dt.e, 256), this.changes = new mt(yt.length, 256)
      }
    }
    const bt = new class {
      constructor() {
        this.rings = null, this.sample = new Float64Array(Et.length), this.startedClient = null, this.startedAtMs = 0
      }
      get client() {
        return this.startedClient
      }
      start(tt, et) {
        this.startedClient = tt, this.startedAtMs = performance.now(), null !== this.rings ? this.change(Nt(tt)) : et && this.allocate()
      }
      lockGained() {
        this.allocate(), this.change(Xt.lockGained)
      }
      allocate() {
        null === this.rings && (this.rings = new Mt, null !== this.startedClient && this.changeAt(this.startedAtMs, Nt(this.startedClient), 1))
      }
      step(tt, et) {
        var Vt;
        tt[et + 6] !== jt.my && (null === (Vt = this.rings) || void 0 === Vt || Vt.steps.push(tt, et))
      }
      cameraSet(tt, et) {
        var Vt;
        null === (Vt = this.rings) || void 0 === Vt || Vt.cameraSets.push(tt, et)
      }
      mouseMove(tt, et) {
        const Vt = this.rings;
        if (null === Vt) return;
        const Ot = this.sample;
        Ot[0] = tt.timeStamp, Ot[1] = performance.now(), Ot[2] = tt.movementX, Ot[3] = tt.movementY, Ot[4] = et ? 1 : 0, Vt.events.push(Ot)
      }
      frame(tt, et, Vt, Ot) {
        const qt = this.rings;
        if (null === qt || Ot === Ht.none) return;
        const Dt = this.sample;
        Dt[0] = performance.now(), Dt[1] = tt, Dt[2] = et, Dt[3] = Vt, Dt[4] = Ot, qt.frames.push(Dt)
      }
      change(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.changeAt(performance.now(), tt, et)
      }
      changeAt(tt, et, Vt) {
        const Ot = this.rings;
        if (null === Ot) return;
        const qt = this.sample;
        qt[0] = tt, qt[1] = et, qt[2] = Vt, Ot.changes.push(qt)
      }
      dumpText() {
        var tt, et;
        const Vt = this.rings;
        return [`look records (${this.startedClient}): ${lt.join(",")}`, ...null !== (tt = null === Vt || void 0 === Vt ? void 0 : Vt.steps.lines()) && void 0 !== tt ? tt : [], `mousemove events: ${Et.join(",")}`, ...null !== (et = null === Vt || void 0 === Vt ? void 0 : Vt.events.lines()) && void 0 !== et ? et : []].join("\n")
      }
      toJson(tt, et) {
        var Vt;
        const qt = tt - 6e4,
          Dt = this.rings,
          mt = function(tt, et) {
            var Vt;
            let Ot = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const Dt = null !== (Vt = null === tt || void 0 === tt ? void 0 : tt.rows(Ot, qt)) && void 0 !== Vt ? Vt : [];
            return {
              columns: et,
              fromMs: 0 === Dt.length ? null : Dt[0][Ot],
              rows: Dt
            }
          };
        return {
          version: Ot.d,
          client: null !== (Vt = this.startedClient) && void 0 !== Vt ? Vt : "not started",
          savedAt: (new Date).toISOString(),
          savedAtMs: tt,
          keptMs: 6e4,
          page: window.location.href,
          userAgent: navigator.userAgent,
          devicePixelRatio: window.devicePixelRatio,
          screen: {
            width: window.screen.width,
            height: window.screen.height
          },
          zy: null !== document.pointerLockElement,
          visibility: document.visibilityState,
          ...et,
          outcomes: jt,
          frameKinds: Ht,
          changes: Xt,
          lookSteps: mt(null === Dt || void 0 === Dt ? void 0 : Dt.steps, lt),
          mouseMoves: mt(null === Dt || void 0 === Dt ? void 0 : Dt.events, Et, 1),
          frames: mt(null === Dt || void 0 === Dt ? void 0 : Dt.frames, ft),
          cameraSets: mt(null === Dt || void 0 === Dt ? void 0 : Dt.cameraSets, wt),
          pageChanges: mt(null === Dt || void 0 === Dt ? void 0 : Dt.changes, yt)
        }
      }
      save(tt) {
        const et = JSON.stringify(this.toJson(performance.now(), tt));
        (0, qt.c)(new Blob([et], {
          type: "application/json"
        }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
      }
    }
  },
  36610: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      LOOK_DEBUG_HEADER: () => Xt,
      endLookDebugTake: () => Nt,
      noteLookDroppedCopy: () => Mt,
      saveLookCapture: () => bt,
      startLookDebug: () => yt
    });
    var Ot = Vt(4963),
      qt = Vt(2902),
      Dt = Vt(1993);
    const mt = new Map(Object.entries(Ot.k).map((tt => {
      let [et, Vt] = tt;
      return [Vt, et]
    })));

    function dt(tt) {
      return (0, Dt.G)(tt).toFixed(1)
    }

    function jt(tt, et) {
      return `camera set by ${mt.get(tt[et+1])}: heading ${`${dt(tt[et+2])} -> ${dt(tt[et+4])}`} deg, pitch ${`${dt(tt[et+3])} -> ${dt(tt[et+5])}`} deg, at ${tt[et].toFixed(1)} ms`
    }
    var Ht = Vt(36616);
    const Xt = 2;

    function Qt(tt) {
      return Number.isFinite(tt) ? String(Math.round(10 * tt) / 10) : String(tt)
    }

    function lt(tt) {
      return Number.isFinite(tt) ? tt.toFixed(1) : String(tt)
    }
    class Et {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.qI = 0, this.pastLimit = 0, this.lockSkips = 0, this.my = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.cameraSets = 0, this.cameraSetsLost = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
      moved() {
        return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.qI > 0 || this.dropped > 0 || this.cameraSets > 0
      }
      hasEvent() {
        return this.qI > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
      }
    }
    class ft {
      constructor() {
        var tt = this;
        this.topicOn = (0, qt.v)("look"), this.remote = (0, qt.x)(), this.tally = new Et, this.takes = null, this.started = !1, this.record = function(et) {
          let Vt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          if (Ht.o.step(et, Vt), !tt.topicOn) return;
          const Ot = et[Vt],
            qt = et[Vt + 1],
            Dt = et[Vt + 2],
            mt = et[Vt + 3],
            dt = et[Vt + 4],
            jt = et[Vt + 5],
            Xt = et[Vt + 6],
            Et = et[Vt + 7],
            ft = et[Vt + 8],
            wt = et[Vt + 9],
            yt = tt.tally;
          switch (yt.frames++, Xt) {
            case Ht.k.idle:
              return void yt.idle++;
            case Ht.k.my:
              return void yt.my++;
            case Ht.k.mI:
              return yt.lockSkips++, void(0 === Dt && 0 === mt || tt.outlier(`lock skip dropped raw (${Qt(Dt)}, ${Qt(mt)}) at ${lt(Ot)} ms`))
          }
          yt.looked++, Number.isFinite(qt) && (yt.dtMin = Math.min(yt.dtMin, qt), yt.dtMax = Math.max(yt.dtMax, qt), yt.dtSum += qt, qt > 0 && (yt.peakRate = Math.max(yt.peakRate, Math.hypot(dt, jt) / qt))), yt.raw[0] += Dt, yt.raw[1] += mt, yt.turned[0] += dt, yt.turned[1] += jt;
          const Nt = Math.abs(Dt) > wt || Math.abs(mt) > wt,
            Mt = `raw (${Qt(Dt)}, ${Qt(mt)}) over ${lt(qt)} ms, limit ${Qt(wt)}, filter v (${Et.toFixed(3)}, ${ft.toFixed(3)}) px/ms, at ${lt(Ot)} ms`;
          Xt === Ht.k.qI ? (yt.qI++, tt.outlier(`spike put right: ${Mt} -> turned (${Qt(dt)}, ${Qt(jt)})`)) : Nt ? (yt.pastLimit++, tt.outlier(`kept past limit: ${Mt}`)) : qt > 50 && (yt.longFrames++, tt.remote || tt.outlier(`long frame: ${Mt}, turned in full`))
        }, this.onMouseMove = tt => {
          const et = null !== document.pointerLockElement;
          if (Ht.o.mouseMove(tt, et), !this.topicOn) return;
          const Vt = this.tally,
            {
              movementX: Ot,
              movementY: qt
            } = tt;
          Vt.events++;
          const Dt = Math.max(Math.abs(Ot), Math.abs(qt));
          Vt.eventMax = Math.max(Vt.eventMax, Dt), Dt >= 200 && (Vt.bigEvents++, this.eventOutlier(`big mousemove (${Ot}, ${qt}) at ${lt(tt.timeStamp)} ms, lock ${et?"Pd":"free"}`))
        }, this.onLockChange = () => {
          const tt = document.pointerLockElement;
          tt ? Ht.o.lockGained() : Ht.o.change(Ht.e.lockLost), this.topicOn && (0, qt.n)("look", `pointer lock ${tt?`gained (${tt.tagName.toLowerCase()})`:"lost"} at ${lt(performance.now())} ms`)
        }, this.onLockError = () => {
          Ht.o.change(Ht.e.lockError), this.topicOn && (0, qt.n)("look", `pointer lock request failed at ${lt(performance.now())} ms`)
        }, this.onVisibility = () => {
          Ht.o.change("hidden" === document.visibilityState ? Ht.e.hidden : Ht.e.visible), this.topicOn && (0, qt.n)("look", `page ${document.visibilityState} at ${lt(performance.now())} ms`)
        }, this.onFocus = () => {
          Ht.o.change(Ht.e.focus)
        }, this.onBlur = () => {
          Ht.o.change(Ht.e.blur)
        }, this.flush = () => {
          if (this.takeRecords(), !this.topicOn) return;
          const tt = this.tally;
          if (this.tally = new Et, !tt.moved() || this.remote && !tt.hasEvent()) return;
          const et = tt.looked > 0 ? tt.dtSum / tt.looked : NaN,
            Vt = [`${tt.frames} frames (${tt.looked} looked, ${tt.idle} idle${"wasm"===Ht.o.client?`, ${tt.my} carried`:""})`, `dt avg ${lt(et)} min ${lt(tt.dtMin)} max ${lt(tt.dtMax)}, ${tt.longFrames} long`, `${tt.events} mousemoves (max ${Qt(tt.eventMax)} px, ${tt.bigEvents} big)`, `raw (${Qt(tt.raw[0])}, ${Qt(tt.raw[1])}) turned (${Qt(tt.turned[0])}, ${Qt(tt.turned[1])})`, `peak ${tt.peakRate.toFixed(2)} px/ms`, `put right ${tt.qI}, past limit ${tt.pastLimit}, lock skips ${tt.lockSkips}`, "lock " + (document.pointerLockElement ? "Pd" : "free")];
          tt.dropped > 0 && Vt.push(`${tt.dropped} doubled spike copies dropped`), tt.cameraSets > 0 && Vt.push(`${tt.cameraSets} camera sets`), tt.cameraSetsLost > 0 && Vt.push(`${tt.cameraSetsLost} camera set records lost`), tt.lost > 0 && Vt.push(`${tt.lost} records lost`), tt.suppressed > 0 && Vt.push(`${tt.suppressed} outlier lines not shown`), (0, qt.n)("look", `1s: ${Vt.join("; ")}`)
        }
      }
      start(tt, et) {
        if (Ht.o.start(tt, null !== document.pointerLockElement), this.takes = et, this.topicOn) {
          const {
            screen: et
          } = window;
          (0, qt.n)("look", `start: ${tt} client, dpr ${window.devicePixelRatio}, screen ${et.width}x${et.height}, pointer lock ${document.pointerLockElement?"Pd":"free"}`)
        }
        this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), window.addEventListener("focus", this.onFocus), window.addEventListener("blur", this.onBlur), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), this.topicOn && !this.remote && (0, qt.j)("look", (() => Ht.o.dumpText())))
      }
      outlier(tt) {
        const et = this.tally;
        et.outliers >= 20 ? et.suppressed++ : (et.outliers++, (0, qt.n)("look", tt))
      }
      eventOutlier(tt) {
        const et = this.tally;
        et.eventLines >= 10 ? et.suppressed++ : (et.eventLines++, (0, qt.n)("look", tt))
      }
      takeRecords() {
        if (null === this.takes) return;
        const tt = this.takes.look();
        if (tt.length >= Xt) {
          this.counted(Ht.e.stepsLost, tt[0]), this.counted(Ht.e.droppedCopies, tt[1]);
          for (let et = Xt; et + Ht.g <= tt.length; et += Ht.g) this.record(tt, et)
        }
        const et = this.takes.cameraSets();
        if (et.length >= Ot.d) {
          this.counted(Ht.e.cameraSetsLost, et[0]);
          for (let tt = Ot.d; tt + Ot.e <= et.length; tt += Ot.e) Ht.o.cameraSet(et, tt), this.topicOn && (this.tally.cameraSets++, this.outlier(jt(et, tt)))
        }
      }
      droppedCopy() {
        this.counted(Ht.e.droppedCopies, 1)
      }
      counted(tt, et) {
        if (0 === et) return;
        if (Ht.o.change(tt, et), !this.topicOn) return;
        const Vt = this.tally;
        tt === Ht.e.droppedCopies ? Vt.dropped += et : tt === Ht.e.stepsLost ? Vt.lost += et : Vt.cameraSetsLost += et
      }
      endTake() {
        this.takeRecords(), this.takes = null
      }
    }
    let wt = null;

    function yt(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return wt ??= new ft, wt.start(tt, et), wt.record
    }

    function Nt() {
      var tt;
      null === (tt = wt) || void 0 === tt || tt.endTake()
    }

    function Mt() {
      var tt;
      null === (tt = wt) || void 0 === tt || tt.droppedCopy()
    }
    async function bt(tt) {
      var et;
      null === (et = wt) || void 0 === et || et.takeRecords();
      const {
        clientHintsRead: Ot,
        debugDeviceLines: qt
      } = await Vt.e(29).then((() => Vt(34239)));
      await Ot, Ht.o.save({
        ...tt,
        device: qt()
      })
    }
  },
  4963: (tt, et, Vt) => {
    Vt.d(et, {
      $: () => Ct,
      Cb: () => kt,
      D: () => dt,
      Eb: () => yt,
      G: () => Ot,
      Hb: () => ct,
      J: () => Dt,
      L: () => Jt,
      Lb: () => St,
      M: () => nt,
      Nb: () => Gt,
      Ob: () => Yt,
      Q: () => Qt,
      S: () => lt,
      Sb: () => ot,
      Vb: () => Ut,
      W: () => Xt,
      X: () => Ht,
      Zb: () => At,
      _b: () => vt,
      bb: () => jt,
      bc: () => Wt,
      d: () => Mt,
      db: () => wt,
      e: () => Nt,
      ec: () => pt,
      fb: () => ft,
      fc: () => qt,
      g: () => gt,
      gc: () => st,
      hb: () => Rt,
      ib: () => Pt,
      jb: () => Zt,
      k: () => bt,
      l: () => Tt,
      lb: () => It,
      m: () => Et,
      mb: () => Lt,
      o: () => ht,
      ob: () => Bt,
      q: () => xt,
      sb: () => it,
      u: () => Kt,
      vb: () => rt,
      w: () => ut,
      wb: () => Ft,
      yb: () => zt,
      z: () => mt
    });
    const Ot = 32,
      qt = 33.333333333333336,
      Dt = {
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
      mt = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      dt = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      jt = {
        AheadMask: 15,
        Defaulted: 128,
        LagsShift: 8,
        CountMask: 4095
      },
      Ht = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      Xt = {
        PlayerBound: 32,
        JoinPreload: 64
      },
      Qt = 14,
      lt = {
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
      Et = {
        Look: 0,
        Remesh: 1,
        CameraSet: 2
      },
      ft = 8,
      wt = 1,
      yt = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      Nt = 6,
      Mt = 1,
      bt = {
        SetCamDir: 0,
        Forced: 1,
        ScriptedTake: 2,
        ScriptedPose: 3,
        ScriptedRelease: 4
      },
      Jt = {
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
      Ct = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      ut = {
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
      Kt = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      ht = 4,
      vt = 4,
      Wt = 65535,
      St = {
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
      ct = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      Rt = 88,
      It = 0,
      Pt = 24,
      Zt = 48,
      Lt = 80,
      Ft = {
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
      kt = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      Gt = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      zt = {
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
      ot = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      rt = 65535,
      Ut = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      At = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      it = 2,
      Yt = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      Bt = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      pt = {
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
      xt = {
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
      Tt = {
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
      gt = 8,
      st = {
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
      nt = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);