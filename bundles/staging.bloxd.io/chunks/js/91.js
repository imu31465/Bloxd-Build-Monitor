export const id = 91;
export const ids = [91];
export const modules = {
  36591: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Dp,
      c: () => xp,
      g: () => Yp,
      h: () => Lp,
      l: () => Hp
    });
    var Op = cp(643),
      op = cp(1779),
      Ip = cp(4911);
    class Sp {
      constructor(pp, ip) {
        this.width = pp, this.TA = ip, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(pp * ip)
      }
      push(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const cp = this.data,
          Op = this.next * this.width;
        for (let op = 0; op < this.width; op++) cp[Op + op] = pp[ip + op];
        this.next = (this.next + 1) % this.TA, this.size = Math.min(this.size + 1, this.TA)
      }
      rows() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
        const cp = [],
          Op = (this.next - this.size + this.TA) % this.TA;
        for (let op = 0; op < this.size; op++) {
          const Ip = (Op + op) % this.TA * this.width;
          this.data[Ip + pp] >= ip && cp.push(Array.from(this.data.subarray(Ip, Ip + this.width)))
        }
        return cp
      }
      lines() {
        return this.rows().map((pp => pp.join(",")))
      }
    }
    const xp = 10,
      Lp = {
        idle: 0,
        aW: 1,
        FX: 2,
        Al: 3,
        Hw: 4
      },
      Yp = {
        none: 0,
        skipped: 1,
        paced: 2,
        drawn: 3
      },
      Dp = {
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
      Ap = 12e3,
      Pp = ["nowMs", "dtMs", "rawX", "rawY", "turnedX", "turnedY", "outcome", "velocityX", "velocityY", "limit"],
      Wp = ["timeStamp", "nowMs", "movementX", "movementY", "locked"],
      yp = ["nowMs", "dtMs", "heading", "pitch", "kind"],
      Up = ["nowMs", "source", "headingBefore", "pitchBefore", "headingAfter", "pitchAfter"],
      wp = ["nowMs", "change", "count"];

    function vp(pp) {
      return "js" === pp ? Dp.jsClient : Dp.wasmClient
    }
    class tp {
      constructor() {
        this.steps = new Sp(xp, Ap), this.events = new Sp(Wp.length, Ap), this.frames = new Sp(yp.length, Ap), this.cameraSets = new Sp(Ip.e, 256), this.changes = new Sp(wp.length, 256)
      }
    }
    const Hp = new class {
      constructor() {
        this.rings = null, this.sample = new Float64Array(Wp.length), this.startedClient = null, this.startedAtMs = 0
      }
      get client() {
        return this.startedClient
      }
      start(pp, ip) {
        this.startedClient = pp, this.startedAtMs = performance.now(), null !== this.rings ? this.change(vp(pp)) : ip && this.allocate()
      }
      lockGained() {
        this.allocate(), this.change(Dp.lockGained)
      }
      allocate() {
        null === this.rings && (this.rings = new tp, null !== this.startedClient && this.changeAt(this.startedAtMs, vp(this.startedClient), 1))
      }
      step(pp, ip) {
        var cp;
        pp[ip + 6] !== Lp.Hw && (null === (cp = this.rings) || void 0 === cp || cp.steps.push(pp, ip))
      }
      cameraSet(pp, ip) {
        var cp;
        null === (cp = this.rings) || void 0 === cp || cp.cameraSets.push(pp, ip)
      }
      mouseMove(pp, ip) {
        const cp = this.rings;
        if (null === cp) return;
        const Op = this.sample;
        Op[0] = pp.timeStamp, Op[1] = performance.now(), Op[2] = pp.movementX, Op[3] = pp.movementY, Op[4] = ip ? 1 : 0, cp.events.push(Op)
      }
      frame(pp, ip, cp, Op) {
        const op = this.rings;
        if (null === op || Op === Yp.none) return;
        const Ip = this.sample;
        Ip[0] = performance.now(), Ip[1] = pp, Ip[2] = ip, Ip[3] = cp, Ip[4] = Op, op.frames.push(Ip)
      }
      change(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.changeAt(performance.now(), pp, ip)
      }
      changeAt(pp, ip, cp) {
        const Op = this.rings;
        if (null === Op) return;
        const op = this.sample;
        op[0] = pp, op[1] = ip, op[2] = cp, Op.changes.push(op)
      }
      dumpText() {
        var pp, ip;
        const cp = this.rings;
        return [`look records (${this.startedClient}): ${Pp.join(",")}`, ...null !== (pp = null === cp || void 0 === cp ? void 0 : cp.steps.lines()) && void 0 !== pp ? pp : [], `mousemove events: ${Wp.join(",")}`, ...null !== (ip = null === cp || void 0 === cp ? void 0 : cp.events.lines()) && void 0 !== ip ? ip : []].join("\n")
      }
      toJson(pp, ip) {
        var cp;
        const op = pp - 6e4,
          Ip = this.rings,
          Sp = function(pp, ip) {
            var cp;
            let Op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const Ip = null !== (cp = null === pp || void 0 === pp ? void 0 : pp.rows(Op, op)) && void 0 !== cp ? cp : [];
            return {
              columns: ip,
              fromMs: 0 === Ip.length ? null : Ip[0][Op],
              rows: Ip
            }
          };
        return {
          version: Op.c,
          client: null !== (cp = this.startedClient) && void 0 !== cp ? cp : "not started",
          savedAt: (new Date).toISOString(),
          savedAtMs: pp,
          keptMs: 6e4,
          page: window.location.href,
          userAgent: navigator.userAgent,
          devicePixelRatio: window.devicePixelRatio,
          screen: {
            width: window.screen.width,
            height: window.screen.height
          },
          rw: null !== document.pointerLockElement,
          visibility: document.visibilityState,
          ...ip,
          outcomes: Lp,
          frameKinds: Yp,
          changes: Dp,
          lookSteps: Sp(null === Ip || void 0 === Ip ? void 0 : Ip.steps, Pp),
          mouseMoves: Sp(null === Ip || void 0 === Ip ? void 0 : Ip.events, Wp, 1),
          frames: Sp(null === Ip || void 0 === Ip ? void 0 : Ip.frames, yp),
          cameraSets: Sp(null === Ip || void 0 === Ip ? void 0 : Ip.cameraSets, Up),
          pageChanges: Sp(null === Ip || void 0 === Ip ? void 0 : Ip.changes, wp)
        }
      }
      save(pp) {
        const ip = JSON.stringify(this.toJson(performance.now(), pp));
        (0, op.c)(new Blob([ip], {
          type: "application/json"
        }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
      }
    }
  },
  36582: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      LOOK_DEBUG_HEADER: () => Dp,
      endLookDebugTake: () => vp,
      noteLookDroppedCopy: () => tp,
      saveLookCapture: () => Hp,
      startLookDebug: () => wp
    });
    var Op = cp(4911),
      op = cp(2908),
      Ip = cp(1927);
    const Sp = new Map(Object.entries(Op.h).map((pp => {
      let [ip, cp] = pp;
      return [cp, ip]
    })));

    function xp(pp) {
      return (0, Ip.C)(pp).toFixed(1)
    }

    function Lp(pp, ip) {
      return `camera set by ${Sp.get(pp[ip+1])}: heading ${`${xp(pp[ip+2])} -> ${xp(pp[ip+4])}`} deg, pitch ${`${xp(pp[ip+3])} -> ${xp(pp[ip+5])}`} deg, at ${pp[ip].toFixed(1)} ms`
    }
    var Yp = cp(36591);
    const Dp = 2;

    function Ap(pp) {
      return Number.isFinite(pp) ? String(Math.round(10 * pp) / 10) : String(pp)
    }

    function Pp(pp) {
      return Number.isFinite(pp) ? pp.toFixed(1) : String(pp)
    }
    class Wp {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.FX = 0, this.pastLimit = 0, this.lockSkips = 0, this.Hw = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.cameraSets = 0, this.cameraSetsLost = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
      moved() {
        return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.FX > 0 || this.dropped > 0 || this.cameraSets > 0
      }
      hasEvent() {
        return this.FX > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
      }
    }
    class yp {
      constructor() {
        var pp = this;
        this.topicOn = (0, op.r)("look"), this.remote = (0, op.v)(), this.tally = new Wp, this.takes = null, this.started = !1, this.record = function(ip) {
          let cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          if (Yp.l.step(ip, cp), !pp.topicOn) return;
          const Op = ip[cp],
            op = ip[cp + 1],
            Ip = ip[cp + 2],
            Sp = ip[cp + 3],
            xp = ip[cp + 4],
            Lp = ip[cp + 5],
            Dp = ip[cp + 6],
            Wp = ip[cp + 7],
            yp = ip[cp + 8],
            Up = ip[cp + 9],
            wp = pp.tally;
          switch (wp.frames++, Dp) {
            case Yp.h.idle:
              return void wp.idle++;
            case Yp.h.Hw:
              return void wp.Hw++;
            case Yp.h.Al:
              return wp.lockSkips++, void(0 === Ip && 0 === Sp || pp.outlier(`lock skip dropped raw (${Ap(Ip)}, ${Ap(Sp)}) at ${Pp(Op)} ms`))
          }
          wp.looked++, Number.isFinite(op) && (wp.dtMin = Math.min(wp.dtMin, op), wp.dtMax = Math.max(wp.dtMax, op), wp.dtSum += op, op > 0 && (wp.peakRate = Math.max(wp.peakRate, Math.hypot(xp, Lp) / op))), wp.raw[0] += Ip, wp.raw[1] += Sp, wp.turned[0] += xp, wp.turned[1] += Lp;
          const vp = Math.abs(Ip) > Up || Math.abs(Sp) > Up,
            tp = `raw (${Ap(Ip)}, ${Ap(Sp)}) over ${Pp(op)} ms, limit ${Ap(Up)}, filter v (${Wp.toFixed(3)}, ${yp.toFixed(3)}) px/ms, at ${Pp(Op)} ms`;
          Dp === Yp.h.FX ? (wp.FX++, pp.outlier(`spike put right: ${tp} -> turned (${Ap(xp)}, ${Ap(Lp)})`)) : vp ? (wp.pastLimit++, pp.outlier(`kept past limit: ${tp}`)) : op > 50 && (wp.longFrames++, pp.remote || pp.outlier(`long frame: ${tp}, turned in full`))
        }, this.onMouseMove = pp => {
          const ip = null !== document.pointerLockElement;
          if (Yp.l.mouseMove(pp, ip), !this.topicOn) return;
          const cp = this.tally,
            {
              movementX: Op,
              movementY: op
            } = pp;
          cp.events++;
          const Ip = Math.max(Math.abs(Op), Math.abs(op));
          cp.eventMax = Math.max(cp.eventMax, Ip), Ip >= 200 && (cp.bigEvents++, this.eventOutlier(`big mousemove (${Op}, ${op}) at ${Pp(pp.timeStamp)} ms, lock ${ip?"sx":"free"}`))
        }, this.onLockChange = () => {
          const pp = document.pointerLockElement;
          pp ? Yp.l.lockGained() : Yp.l.change(Yp.b.lockLost), this.topicOn && (0, op.n)("look", `pointer lock ${pp?`gained (${pp.tagName.toLowerCase()})`:"lost"} at ${Pp(performance.now())} ms`)
        }, this.onLockError = () => {
          Yp.l.change(Yp.b.lockError), this.topicOn && (0, op.n)("look", `pointer lock request failed at ${Pp(performance.now())} ms`)
        }, this.onVisibility = () => {
          Yp.l.change("hidden" === document.visibilityState ? Yp.b.hidden : Yp.b.visible), this.topicOn && (0, op.n)("look", `page ${document.visibilityState} at ${Pp(performance.now())} ms`)
        }, this.onFocus = () => {
          Yp.l.change(Yp.b.focus)
        }, this.onBlur = () => {
          Yp.l.change(Yp.b.blur)
        }, this.flush = () => {
          if (this.takeRecords(), !this.topicOn) return;
          const pp = this.tally;
          if (this.tally = new Wp, !pp.moved() || this.remote && !pp.hasEvent()) return;
          const ip = pp.looked > 0 ? pp.dtSum / pp.looked : NaN,
            cp = [`${pp.frames} frames (${pp.looked} looked, ${pp.idle} idle${"wasm"===Yp.l.client?`, ${pp.Hw} carried`:""})`, `dt avg ${Pp(ip)} min ${Pp(pp.dtMin)} max ${Pp(pp.dtMax)}, ${pp.longFrames} long`, `${pp.events} mousemoves (max ${Ap(pp.eventMax)} px, ${pp.bigEvents} big)`, `raw (${Ap(pp.raw[0])}, ${Ap(pp.raw[1])}) turned (${Ap(pp.turned[0])}, ${Ap(pp.turned[1])})`, `peak ${pp.peakRate.toFixed(2)} px/ms`, `put right ${pp.FX}, past limit ${pp.pastLimit}, lock skips ${pp.lockSkips}`, "lock " + (document.pointerLockElement ? "sx" : "free")];
          pp.dropped > 0 && cp.push(`${pp.dropped} doubled spike copies dropped`), pp.cameraSets > 0 && cp.push(`${pp.cameraSets} camera sets`), pp.cameraSetsLost > 0 && cp.push(`${pp.cameraSetsLost} camera set records lost`), pp.lost > 0 && cp.push(`${pp.lost} records lost`), pp.suppressed > 0 && cp.push(`${pp.suppressed} outlier lines not shown`), (0, op.n)("look", `1s: ${cp.join("; ")}`)
        }
      }
      start(pp, ip) {
        if (Yp.l.start(pp, null !== document.pointerLockElement), this.takes = ip, this.topicOn) {
          const {
            screen: ip
          } = window;
          (0, op.n)("look", `start: ${pp} client, dpr ${window.devicePixelRatio}, screen ${ip.width}x${ip.height}, pointer lock ${document.pointerLockElement?"sx":"free"}`)
        }
        this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), window.addEventListener("focus", this.onFocus), window.addEventListener("blur", this.onBlur), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), this.topicOn && !this.remote && (0, op.k)("look", (() => Yp.l.dumpText())))
      }
      outlier(pp) {
        const ip = this.tally;
        ip.outliers >= 20 ? ip.suppressed++ : (ip.outliers++, (0, op.n)("look", pp))
      }
      eventOutlier(pp) {
        const ip = this.tally;
        ip.eventLines >= 10 ? ip.suppressed++ : (ip.eventLines++, (0, op.n)("look", pp))
      }
      takeRecords() {
        if (null === this.takes) return;
        const pp = this.takes.look();
        if (pp.length >= Dp) {
          this.counted(Yp.b.stepsLost, pp[0]), this.counted(Yp.b.droppedCopies, pp[1]);
          for (let ip = Dp; ip + Yp.c <= pp.length; ip += Yp.c) this.record(pp, ip)
        }
        const ip = this.takes.cameraSets();
        if (ip.length >= Op.d) {
          this.counted(Yp.b.cameraSetsLost, ip[0]);
          for (let pp = Op.d; pp + Op.e <= ip.length; pp += Op.e) Yp.l.cameraSet(ip, pp), this.topicOn && (this.tally.cameraSets++, this.outlier(Lp(ip, pp)))
        }
      }
      droppedCopy() {
        this.counted(Yp.b.droppedCopies, 1)
      }
      counted(pp, ip) {
        if (0 === ip) return;
        if (Yp.l.change(pp, ip), !this.topicOn) return;
        const cp = this.tally;
        pp === Yp.b.droppedCopies ? cp.dropped += ip : pp === Yp.b.stepsLost ? cp.lost += ip : cp.cameraSetsLost += ip
      }
      endTake() {
        this.takeRecords(), this.takes = null
      }
    }
    let Up = null;

    function wp(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return Up ??= new yp, Up.start(pp, ip), Up.record
    }

    function vp() {
      var pp;
      null === (pp = Up) || void 0 === pp || pp.endTake()
    }

    function tp() {
      var pp;
      null === (pp = Up) || void 0 === pp || pp.droppedCopy()
    }
    async function Hp(pp) {
      var ip;
      null === (ip = Up) || void 0 === ip || ip.takeRecords();
      const {
        clientHintsRead: Op,
        debugDeviceLines: op
      } = await cp.e(29).then((() => cp(34291)));
      await Op, Yp.l.save({
        ...pp,
        device: op()
      })
    }
  },
  4911: (pp, ip, cp) => {
    cp.d(ip, {
      A: () => Vp,
      Bb: () => Cp,
      C: () => Ap,
      Fb: () => Mp,
      G: () => Pp,
      Hb: () => Tp,
      I: () => Dp,
      Kb: () => gp,
      L: () => Yp,
      M: () => ep,
      Mb: () => bp,
      O: () => Lp,
      Ob: () => ap,
      Q: () => Up,
      Rb: () => np,
      S: () => yp,
      Sb: () => Rp,
      Tb: () => qp,
      Vb: () => rp,
      W: () => Ep,
      Wb: () => op,
      Zb: () => Kp,
      _: () => lp,
      cb: () => Qp,
      d: () => tp,
      e: () => vp,
      f: () => sp,
      gb: () => Xp,
      h: () => Hp,
      ib: () => Jp,
      k: () => zp,
      kb: () => Gp,
      lb: () => Fp,
      m: () => Wp,
      mb: () => hp,
      ob: () => Bp,
      p: () => mp,
      q: () => Zp,
      qb: () => fp,
      r: () => kp,
      s: () => jp,
      t: () => Sp,
      tb: () => Np,
      u: () => xp,
      w: () => Op,
      x: () => Ip,
      xb: () => wp,
      z: () => dp
    });
    const Op = 32,
      op = 33.333333333333336,
      Ip = {
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
      Sp = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      xp = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      Lp = {
        AheadMask: 15,
        Defaulted: 128,
        LagsShift: 8,
        CountMask: 4095
      },
      Yp = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      Dp = {
        PlayerBound: 32,
        JoinPreload: 64
      },
      Ap = 14,
      Pp = {
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
      Wp = {
        Look: 0,
        Remesh: 1,
        CameraSet: 2
      },
      yp = 8,
      Up = 1,
      wp = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      vp = 6,
      tp = 1,
      Hp = {
        SetCamDir: 0,
        Forced: 1,
        ScriptedTake: 2,
        ScriptedPose: 3,
        ScriptedRelease: 4
      },
      dp = {
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
      ep = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      jp = {
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
      kp = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      mp = 4,
      Rp = 4,
      qp = 65535,
      Mp = {
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
      Cp = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      Ep = 88,
      Xp = 0,
      lp = 24,
      Qp = 48,
      Jp = 80,
      Bp = {
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
      Np = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      Tp = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      fp = {
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
      bp = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      hp = 65535,
      ap = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      np = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      Fp = 2,
      gp = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      Gp = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      rp = {
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
      Zp = {
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
      zp = {
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
      sp = 8,
      Kp = {
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
      Vp = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);