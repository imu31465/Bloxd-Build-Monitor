export const id = 91;
export const ids = [91];
export const modules = {
  36770: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Cu,
      g: () => lu,
      i: () => fu,
      m: () => qu,
      q: () => Mu
    });
    var su = ju(656),
      Uu = ju(1802),
      Zu = ju(4976);
    class Xu {
      constructor(uu, Eu) {
        this.width = uu, this.Mb = Eu, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(uu * Eu)
      }
      push(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ju = this.data,
          su = this.next * this.width;
        for (let Uu = 0; Uu < this.width; Uu++) ju[su + Uu] = uu[Eu + Uu];
        this.next = (this.next + 1) % this.Mb, this.size = Math.min(this.size + 1, this.Mb)
      }
      rows() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
        const ju = [],
          su = (this.next - this.size + this.Mb) % this.Mb;
        for (let Uu = 0; Uu < this.size; Uu++) {
          const Zu = (su + Uu) % this.Mb * this.width;
          this.data[Zu + uu] >= Eu && ju.push(Array.from(this.data.subarray(Zu, Zu + this.width)))
        }
        return ju
      }
      lines() {
        return this.rows().map((uu => uu.join(",")))
      }
    }
    const lu = 10,
      qu = {
        idle: 0,
        oN: 1,
        XV: 2,
        lV: 3,
        uh: 4
      },
      fu = {
        none: 0,
        skipped: 1,
        paced: 2,
        drawn: 3
      },
      Cu = {
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
      bu = 12e3,
      cu = ["nowMs", "dtMs", "rawX", "rawY", "turnedX", "turnedY", "outcome", "velocityX", "velocityY", "limit"],
      Nu = ["timeStamp", "nowMs", "movementX", "movementY", "locked"],
      Ou = ["nowMs", "dtMs", "heading", "pitch", "kind"],
      Yu = ["nowMs", "source", "headingBefore", "pitchBefore", "headingAfter", "pitchAfter"],
      hu = ["nowMs", "change", "count"];

    function Du(uu) {
      return "js" === uu ? Cu.jsClient : Cu.wasmClient
    }
    class gu {
      constructor() {
        this.steps = new Xu(lu, bu), this.events = new Xu(Nu.length, bu), this.frames = new Xu(Ou.length, bu), this.cameraSets = new Xu(Zu.f, 256), this.changes = new Xu(hu.length, 256)
      }
    }
    const Mu = new class {
      constructor() {
        this.rings = null, this.sample = new Float64Array(Nu.length), this.startedClient = null, this.startedAtMs = 0
      }
      get client() {
        return this.startedClient
      }
      start(uu, Eu) {
        this.startedClient = uu, this.startedAtMs = performance.now(), null !== this.rings ? this.change(Du(uu)) : Eu && this.allocate()
      }
      lockGained() {
        this.allocate(), this.change(Cu.lockGained)
      }
      allocate() {
        null === this.rings && (this.rings = new gu, null !== this.startedClient && this.changeAt(this.startedAtMs, Du(this.startedClient), 1))
      }
      step(uu, Eu) {
        var ju;
        uu[Eu + 6] !== qu.uh && (null === (ju = this.rings) || void 0 === ju || ju.steps.push(uu, Eu))
      }
      cameraSet(uu, Eu) {
        var ju;
        null === (ju = this.rings) || void 0 === ju || ju.cameraSets.push(uu, Eu)
      }
      mouseMove(uu, Eu) {
        const ju = this.rings;
        if (null === ju) return;
        const su = this.sample;
        su[0] = uu.timeStamp, su[1] = performance.now(), su[2] = uu.movementX, su[3] = uu.movementY, su[4] = Eu ? 1 : 0, ju.events.push(su)
      }
      frame(uu, Eu, ju, su) {
        const Uu = this.rings;
        if (null === Uu || su === fu.none) return;
        const Zu = this.sample;
        Zu[0] = performance.now(), Zu[1] = uu, Zu[2] = Eu, Zu[3] = ju, Zu[4] = su, Uu.frames.push(Zu)
      }
      change(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.changeAt(performance.now(), uu, Eu)
      }
      changeAt(uu, Eu, ju) {
        const su = this.rings;
        if (null === su) return;
        const Uu = this.sample;
        Uu[0] = uu, Uu[1] = Eu, Uu[2] = ju, su.changes.push(Uu)
      }
      dumpText() {
        var uu, Eu;
        const ju = this.rings;
        return [`look records (${this.startedClient}): ${cu.join(",")}`, ...null !== (uu = null === ju || void 0 === ju ? void 0 : ju.steps.lines()) && void 0 !== uu ? uu : [], `mousemove events: ${Nu.join(",")}`, ...null !== (Eu = null === ju || void 0 === ju ? void 0 : ju.events.lines()) && void 0 !== Eu ? Eu : []].join("\n")
      }
      toJson(uu, Eu) {
        var ju;
        const Uu = uu - 6e4,
          Zu = this.rings,
          Xu = function(uu, Eu) {
            var ju;
            let su = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const Zu = null !== (ju = null === uu || void 0 === uu ? void 0 : uu.rows(su, Uu)) && void 0 !== ju ? ju : [];
            return {
              columns: Eu,
              fromMs: 0 === Zu.length ? null : Zu[0][su],
              rows: Zu
            }
          };
        return {
          version: su.b,
          client: null !== (ju = this.startedClient) && void 0 !== ju ? ju : "not started",
          savedAt: (new Date).toISOString(),
          savedAtMs: uu,
          keptMs: 6e4,
          page: window.location.href,
          userAgent: navigator.userAgent,
          devicePixelRatio: window.devicePixelRatio,
          screen: {
            width: window.screen.width,
            height: window.screen.height
          },
          rh: null !== document.pointerLockElement,
          visibility: document.visibilityState,
          ...Eu,
          outcomes: qu,
          frameKinds: fu,
          changes: Cu,
          lookSteps: Xu(null === Zu || void 0 === Zu ? void 0 : Zu.steps, cu),
          mouseMoves: Xu(null === Zu || void 0 === Zu ? void 0 : Zu.events, Nu, 1),
          frames: Xu(null === Zu || void 0 === Zu ? void 0 : Zu.frames, Ou),
          cameraSets: Xu(null === Zu || void 0 === Zu ? void 0 : Zu.cameraSets, Yu),
          pageChanges: Xu(null === Zu || void 0 === Zu ? void 0 : Zu.changes, hu)
        }
      }
      save(uu) {
        const Eu = JSON.stringify(this.toJson(performance.now(), uu));
        (0, Uu.d)(new Blob([Eu], {
          type: "application/json"
        }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
      }
    }
  },
  36762: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      LOOK_DEBUG_HEADER: () => Cu,
      endLookDebugTake: () => Du,
      noteLookDroppedCopy: () => gu,
      saveLookCapture: () => Mu,
      startLookDebug: () => hu
    });
    var su = ju(4976),
      Uu = ju(2943),
      Zu = ju(1955);
    const Xu = new Map(Object.entries(su.h).map((uu => {
      let [Eu, ju] = uu;
      return [ju, Eu]
    })));

    function lu(uu) {
      return (0, Zu.A)(uu).toFixed(1)
    }

    function qu(uu, Eu) {
      return `camera set by ${Xu.get(uu[Eu+1])}: heading ${`${lu(uu[Eu+2])} -> ${lu(uu[Eu+4])}`} deg, pitch ${`${lu(uu[Eu+3])} -> ${lu(uu[Eu+5])}`} deg, at ${uu[Eu].toFixed(1)} ms`
    }
    var fu = ju(36770);
    const Cu = 2;

    function bu(uu) {
      return Number.isFinite(uu) ? String(Math.round(10 * uu) / 10) : String(uu)
    }

    function cu(uu) {
      return Number.isFinite(uu) ? uu.toFixed(1) : String(uu)
    }
    class Nu {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.XV = 0, this.pastLimit = 0, this.lockSkips = 0, this.uh = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.cameraSets = 0, this.cameraSetsLost = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
      moved() {
        return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.XV > 0 || this.dropped > 0 || this.cameraSets > 0
      }
      hasEvent() {
        return this.XV > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
      }
    }
    class Ou {
      constructor() {
        var uu = this;
        this.topicOn = (0, Uu.p)("look"), this.remote = (0, Uu.r)(), this.tally = new Nu, this.takes = null, this.started = !1, this.record = function(Eu) {
          let ju = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          if (fu.q.step(Eu, ju), !uu.topicOn) return;
          const su = Eu[ju],
            Uu = Eu[ju + 1],
            Zu = Eu[ju + 2],
            Xu = Eu[ju + 3],
            lu = Eu[ju + 4],
            qu = Eu[ju + 5],
            Cu = Eu[ju + 6],
            Nu = Eu[ju + 7],
            Ou = Eu[ju + 8],
            Yu = Eu[ju + 9],
            hu = uu.tally;
          switch (hu.frames++, Cu) {
            case fu.m.idle:
              return void hu.idle++;
            case fu.m.uh:
              return void hu.uh++;
            case fu.m.lV:
              return hu.lockSkips++, void(0 === Zu && 0 === Xu || uu.outlier(`lock skip dropped raw (${bu(Zu)}, ${bu(Xu)}) at ${cu(su)} ms`))
          }
          hu.looked++, Number.isFinite(Uu) && (hu.dtMin = Math.min(hu.dtMin, Uu), hu.dtMax = Math.max(hu.dtMax, Uu), hu.dtSum += Uu, Uu > 0 && (hu.peakRate = Math.max(hu.peakRate, Math.hypot(lu, qu) / Uu))), hu.raw[0] += Zu, hu.raw[1] += Xu, hu.turned[0] += lu, hu.turned[1] += qu;
          const Du = Math.abs(Zu) > Yu || Math.abs(Xu) > Yu,
            gu = `raw (${bu(Zu)}, ${bu(Xu)}) over ${cu(Uu)} ms, limit ${bu(Yu)}, filter v (${Nu.toFixed(3)}, ${Ou.toFixed(3)}) px/ms, at ${cu(su)} ms`;
          Cu === fu.m.XV ? (hu.XV++, uu.outlier(`spike put right: ${gu} -> turned (${bu(lu)}, ${bu(qu)})`)) : Du ? (hu.pastLimit++, uu.outlier(`kept past limit: ${gu}`)) : Uu > 50 && (hu.longFrames++, uu.remote || uu.outlier(`long frame: ${gu}, turned in full`))
        }, this.onMouseMove = uu => {
          const Eu = null !== document.pointerLockElement;
          if (fu.q.mouseMove(uu, Eu), !this.topicOn) return;
          const ju = this.tally,
            {
              movementX: su,
              movementY: Uu
            } = uu;
          ju.events++;
          const Zu = Math.max(Math.abs(su), Math.abs(Uu));
          ju.eventMax = Math.max(ju.eventMax, Zu), Zu >= 200 && (ju.bigEvents++, this.eventOutlier(`big mousemove (${su}, ${Uu}) at ${cu(uu.timeStamp)} ms, lock ${Eu?"dl":"free"}`))
        }, this.onLockChange = () => {
          const uu = document.pointerLockElement;
          uu ? fu.q.lockGained() : fu.q.change(fu.d.lockLost), this.topicOn && (0, Uu.k)("look", `pointer lock ${uu?`gained (${uu.tagName.toLowerCase()})`:"lost"} at ${cu(performance.now())} ms`)
        }, this.onLockError = () => {
          fu.q.change(fu.d.lockError), this.topicOn && (0, Uu.k)("look", `pointer lock request failed at ${cu(performance.now())} ms`)
        }, this.onVisibility = () => {
          fu.q.change("hidden" === document.visibilityState ? fu.d.hidden : fu.d.visible), this.topicOn && (0, Uu.k)("look", `page ${document.visibilityState} at ${cu(performance.now())} ms`)
        }, this.onFocus = () => {
          fu.q.change(fu.d.focus)
        }, this.onBlur = () => {
          fu.q.change(fu.d.blur)
        }, this.flush = () => {
          if (this.takeRecords(), !this.topicOn) return;
          const uu = this.tally;
          if (this.tally = new Nu, !uu.moved() || this.remote && !uu.hasEvent()) return;
          const Eu = uu.looked > 0 ? uu.dtSum / uu.looked : NaN,
            ju = [`${uu.frames} frames (${uu.looked} looked, ${uu.idle} idle${"wasm"===fu.q.client?`, ${uu.uh} carried`:""})`, `dt avg ${cu(Eu)} min ${cu(uu.dtMin)} max ${cu(uu.dtMax)}, ${uu.longFrames} long`, `${uu.events} mousemoves (max ${bu(uu.eventMax)} px, ${uu.bigEvents} big)`, `raw (${bu(uu.raw[0])}, ${bu(uu.raw[1])}) turned (${bu(uu.turned[0])}, ${bu(uu.turned[1])})`, `peak ${uu.peakRate.toFixed(2)} px/ms`, `put right ${uu.XV}, past limit ${uu.pastLimit}, lock skips ${uu.lockSkips}`, "lock " + (document.pointerLockElement ? "dl" : "free")];
          uu.dropped > 0 && ju.push(`${uu.dropped} doubled spike copies dropped`), uu.cameraSets > 0 && ju.push(`${uu.cameraSets} camera sets`), uu.cameraSetsLost > 0 && ju.push(`${uu.cameraSetsLost} camera set records lost`), uu.lost > 0 && ju.push(`${uu.lost} records lost`), uu.suppressed > 0 && ju.push(`${uu.suppressed} outlier lines not shown`), (0, Uu.k)("look", `1s: ${ju.join("; ")}`)
        }
      }
      start(uu, Eu) {
        if (fu.q.start(uu, null !== document.pointerLockElement), this.takes = Eu, this.topicOn) {
          const {
            screen: Eu
          } = window;
          (0, Uu.k)("look", `start: ${uu} client, dpr ${window.devicePixelRatio}, screen ${Eu.width}x${Eu.height}, pointer lock ${document.pointerLockElement?"dl":"free"}`)
        }
        this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), window.addEventListener("focus", this.onFocus), window.addEventListener("blur", this.onBlur), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), this.topicOn && !this.remote && (0, Uu.j)("look", (() => fu.q.dumpText())))
      }
      outlier(uu) {
        const Eu = this.tally;
        Eu.outliers >= 20 ? Eu.suppressed++ : (Eu.outliers++, (0, Uu.k)("look", uu))
      }
      eventOutlier(uu) {
        const Eu = this.tally;
        Eu.eventLines >= 10 ? Eu.suppressed++ : (Eu.eventLines++, (0, Uu.k)("look", uu))
      }
      takeRecords() {
        if (null === this.takes) return;
        const uu = this.takes.look();
        if (uu.length >= Cu) {
          this.counted(fu.d.stepsLost, uu[0]), this.counted(fu.d.droppedCopies, uu[1]);
          for (let Eu = Cu; Eu + fu.g <= uu.length; Eu += fu.g) this.record(uu, Eu)
        }
        const Eu = this.takes.cameraSets();
        if (Eu.length >= su.b) {
          this.counted(fu.d.cameraSetsLost, Eu[0]);
          for (let uu = su.b; uu + su.f <= Eu.length; uu += su.f) fu.q.cameraSet(Eu, uu), this.topicOn && (this.tally.cameraSets++, this.outlier(qu(Eu, uu)))
        }
      }
      droppedCopy() {
        this.counted(fu.d.droppedCopies, 1)
      }
      counted(uu, Eu) {
        if (0 === Eu) return;
        if (fu.q.change(uu, Eu), !this.topicOn) return;
        const ju = this.tally;
        uu === fu.d.droppedCopies ? ju.dropped += Eu : uu === fu.d.stepsLost ? ju.lost += Eu : ju.cameraSetsLost += Eu
      }
      endTake() {
        this.takeRecords(), this.takes = null
      }
    }
    let Yu = null;

    function hu(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return Yu ??= new Ou, Yu.start(uu, Eu), Yu.record
    }

    function Du() {
      var uu;
      null === (uu = Yu) || void 0 === uu || uu.endTake()
    }

    function gu() {
      var uu;
      null === (uu = Yu) || void 0 === uu || uu.droppedCopy()
    }
    async function Mu(uu) {
      var Eu;
      null === (Eu = Yu) || void 0 === Eu || Eu.takeRecords();
      const {
        clientHintsRead: su,
        debugDeviceLines: Uu
      } = await ju.e(29).then((() => ju(34431)));
      await su, fu.q.save({
        ...uu,
        device: Uu()
      })
    }
  },
  4976: (uu, Eu, ju) => {
    ju.d(Eu, {
      $: () => Gu,
      C: () => Xu,
      Cb: () => Wu,
      F: () => lu,
      Gb: () => Qu,
      H: () => su,
      Jb: () => hu,
      K: () => Zu,
      L: () => eu,
      Nb: () => ou,
      O: () => zu,
      Pb: () => Pu,
      R: () => bu,
      S: () => cu,
      Sb: () => iu,
      Ub: () => tu,
      V: () => Cu,
      Wb: () => Su,
      X: () => fu,
      Xb: () => Fu,
      Yb: () => Bu,
      ac: () => du,
      b: () => gu,
      cb: () => qu,
      db: () => Yu,
      ec: () => au,
      f: () => Du,
      fb: () => Ou,
      fc: () => Tu,
      g: () => nu,
      h: () => Mu,
      hb: () => ku,
      j: () => Au,
      jc: () => Uu,
      lb: () => vu,
      mb: () => Ku,
      mc: () => yu,
      n: () => Nu,
      pb: () => mu,
      r: () => Ju,
      s: () => Hu,
      tb: () => Vu,
      ub: () => xu,
      v: () => wu,
      vb: () => Lu,
      xb: () => Iu,
      y: () => pu,
      zb: () => ru
    });
    const su = 32,
      Uu = 33.333333333333336,
      Zu = {
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
      Xu = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      lu = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      qu = {
        AheadMask: 15,
        Defaulted: 128,
        LagsShift: 8,
        CountMask: 4095
      },
      fu = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      Cu = {
        PlayerBound: 32,
        JoinPreload: 64
      },
      bu = 14,
      cu = {
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
      Nu = {
        Look: 0,
        Remesh: 1,
        CameraSet: 2
      },
      Ou = 8,
      Yu = 1,
      hu = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      Du = 6,
      gu = 1,
      Mu = {
        SetCamDir: 0,
        Forced: 1,
        ScriptedTake: 2,
        ScriptedPose: 3,
        ScriptedRelease: 4
      },
      eu = {
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
      Gu = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      pu = {
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
      wu = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      Ju = 4,
      du = 4,
      au = 65535,
      Pu = {
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
      ou = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      ku = 88,
      mu = 0,
      vu = 24,
      Ku = 48,
      Vu = 80,
      ru = {
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
      Qu = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      iu = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      Wu = {
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
      Su = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      Iu = 65535,
      Fu = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      Bu = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      Lu = 2,
      tu = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      xu = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      Tu = {
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
      Hu = {
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
      Au = {
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
      nu = 8,
      yu = {
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
      zu = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);