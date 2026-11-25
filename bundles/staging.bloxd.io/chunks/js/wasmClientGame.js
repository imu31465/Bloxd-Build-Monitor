export const id = 57;
export const ids = [57];
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
  39342: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Zu,
      i: () => Uu
    });
    var su = ju(24);

    function Uu(uu) {
      return "refetchCode" === uu || "devDownloadJson" === uu || uu.startsWith("Plugin")
    }

    function Zu(uu, Eu) {
      "refetchCode" !== uu ? "Plugin|MobAiPlugin|ShowPetUi" !== uu ? Promise.all([ju.e(109), ju.e(110), ju.e(105), ju.e(107), ju.e(218)]).then((() => ju(42001))).then((ju => {
        let {
          runClientGameMessage: su
        } = ju;
        su(uu, Eu)
      })).catch((Eu => {
        console.error(`Game message ${uu} failed`, Eu)
      })) : su.h.TY("showPetUi", Eu) : su.h.TY("refetchCode")
    }
  },
  42864: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => su,
      g: () => Uu
    });
    const su = ["recording", "freecam", "keyframe"];

    function Uu() {
      const uu = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(uu[1]) << 32n | BigInt(uu[0])
    }
  },
  34486: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => lu,
      e: () => qu
    });
    var su = ju(22);
    const Uu = 24,
      Zu = "farNametags",
      Xu = 1e5;

    function lu() {
      var uu;
      return null === (uu = su.d.get("showDistantNametags")) || void 0 === uu || uu
    }

    function qu() {
      var uu;
      return null !== (uu = function() {
        const uu = new URLSearchParams(window.location.search).get(Zu),
          Eu = null === uu || "" === uu ? NaN : Number(uu);
        return Number.isFinite(Eu) && Eu >= 0 ? Math.min(Eu, Xu) : null
      }()) && void 0 !== uu ? uu : lu() ? 0 : Uu
    }
  },
  42862: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      blockIdOf: () => Tq.d,
      clearWasmCameraScreen: () => UU,
      creativeItemIds: () => ss.creativeItemIds,
      decodeMapSettings: () => nq,
      drainTextRerasters: () => Sl.b,
      enchantmentPerksOf: () => ss.enchantmentPerksOf,
      endGameHost: () => lf,
      followCursorAim: () => Aq,
      followMenuPrefs: () => sZ,
      loadAudio: () => jf,
      loadClientGame: () => Ef,
      loadTextIcons: () => Sl.e,
      rasterText: () => Wl.c,
      readBoardToEdit: () => xq,
      readDrawCensus: () => yq.e,
      setTextHost: () => Sl.i,
      setTextLocalPlayer: () => Sl.k,
      showInCreativeInvenOf: () => ss.showInCreativeInvenOf,
      startGameHost: () => Xf,
      startShellAnalytics: () => Bq,
      startSkyFeed: () => qq,
      textChanged: () => Sl.m,
      warmText: () => Wl.d,
      wasmCameraScreen: () => sU
    });
    ju(36890);
    var su = ju(22),
      Uu = ju(37217),
      Zu = ju(39467),
      Xu = ju(24),
      lu = ju(3599),
      qu = ju(37208),
      fu = ju(1343),
      Cu = ju(636),
      bu = ju(38585),
      cu = ju(4970),
      Nu = ju(40897),
      Ou = ju(40833);
    const Yu = Ou.Ab / 4,
      hu = Ou.r.PlaySound,
      Du = Ou.r.SoundReset,
      gu = cu.T.ReplayFailed,
      Mu = cu.T.RecorderEvent;
    class eu {
      constructor(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.core = uu, this.memory = Eu, this.audio = ju, this.serverIds = new Int32Array(256).fill(Ou.Pc), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.view = new DataView(new ArrayBuffer(Ou.u.BYTES)), this.renderPtr = 0, this.Mb = 0, this.renderCapacity = 0, this.render = new Float32Array(0), this.visPtr = 0, this.vis = new Uint8Array(0), this.renderBuffer = null, this.eventsBuffer = null, this.eventsPtr = 0, this.eventsLen = 0, this.events = new DataView(new ArrayBuffer(0)), this.audioView = null, this.scratchPtr = -1, this.corruption = null, this.replay = null, this.queries = new Ou.W(uu, (() => {
          this.scratchPtr = -1, this.ensureViews()
        }))
      }
      scratch() {
        return this.scratchPtr < 0 && (this.scratchPtr = this.core.pUu(), this.ensureViews()), this.scratchPtr
      }
      eventBytes(uu, Eu) {
        const ju = this.eventView();
        return new Uint8Array(ju.buffer, ju.byteOffset + uu, Eu)
      }
      get apiView() {
        return this.ensureViews(), this.view
      }
      ensureViews() {
        this.memory().buffer !== this.buffer && this.reView()
      }
      get localId() {
        return Ou.u.localId(this.apiView, 0)
      }
      localDeaths() {
        return Ou.u.localDeaths(this.apiView, 0)
      }
      rereadDirectory() {
        const uu = this.apiView,
          Eu = Ou.u.entRenderPtr(uu, 0),
          ju = Ou.u.entVisPtr(uu, 0),
          su = Ou.u.entCapacity(uu, 0);
        if (Eu !== this.renderPtr || ju !== this.visPtr || su !== this.Mb || this.renderBuffer !== this.buffer) {
          this.renderPtr = Eu, this.visPtr = ju, this.Mb = su, this.renderBuffer = this.buffer;
          const uu = this.memoryView(Float32Array, Eu, su * Yu, "the render array"),
            Uu = this.memoryView(Uint8Array, ju, su, "the visibility array");
          this.renderCapacity = uu && Uu ? su : 0, this.render = uu && Uu ? uu : new Float32Array(0), this.vis = uu && Uu ? Uu : new Uint8Array(0)
        }
      }
      memoryView(uu, Eu, ju, su) {
        try {
          return (0, Nu.r)(uu, this.memory().buffer, Eu, ju, su)
        } catch (Uu) {
          return this.keepCorruption(Uu), null
        }
      }
      memoryData(uu, Eu, ju, su) {
        try {
          return (0, Nu.h)(this.memory().buffer, uu, Eu, ju, su)
        } catch (Uu) {
          return this.keepCorruption(Uu), null
        }
      }
      reportCorruption(uu) {
        this.keepCorruption(new Nu.e(uu))
      }
      keepCorruption(uu) {
        if (!(uu instanceof Nu.e)) throw uu;
        this.corruption ??= uu
      }
      throwCorruption() {
        if (this.corruption) throw this.corruption
      }
      walk(uu, Eu, ju) {
        this.rereadDirectory(), this.throwCorruption();
        const {
          ptr: su,
          len: Uu
        } = uu;
        this.eventsPtr = su, this.eventsLen = Uu, this.eventsBuffer = null;
        const Zu = this.eventView();
        for (let fu = 0; fu < Uu;) {
          const uu = Zu.getUint32(fu, !0),
            ju = 65535 & uu,
            su = uu >>> 16,
            Uu = fu + cu.R;
          if (ju === Ou.r.EntitySpawned) {
            var Xu;
            if (su !== Ou.Gb.BYTES) throw du(ju, fu, su);
            const uu = Ou.Gb.serverId(Zu, Uu);
            this.spawned(uu, Ou.Gb.index(Zu, Uu), Ou.Gb.kind(Zu, Uu)), null === (Xu = Eu.entityAdded) || void 0 === Xu || Xu.call(Eu, uu)
          } else if ((ju === Ou.r.ChunkSlot || ju === Ou.r.EntityInfoChanged) && !(0, Ou.Yd)(ju, Zu, Uu, su, Eu)) throw du(ju, fu, su);
          fu = Uu + (0, cu.xe)(su)
        }
        try {
          var lu;
          null === (lu = Eu.afterPrescan) || void 0 === lu || lu.call(Eu), this.throwCorruption(), !ju() && this.dispatch(uu, Eu, ju) && (this.throwCorruption(), this.applyListener(), Eu.afterWalk(uu.kind)), this.throwCorruption()
        } catch (qu) {
          throw qu instanceof Nu.e && (this.corruption ??= qu), qu
        } finally {
          ju() || null !== this.corruption || this.applyDespawns(Uu, Eu)
        }
      }
      applyDespawns(uu, Eu) {
        const ju = this.eventView();
        for (let Uu = 0; Uu < uu;) {
          const uu = ju.getUint32(Uu, !0),
            Zu = Uu + cu.R;
          if ((65535 & uu) === Ou.r.EntityDespawned && uu >>> 16 === Ou.Gb.BYTES) {
            const uu = Ou.Gb.serverId(ju, Zu);
            var su;
            if (this.despawned(uu, Ou.Gb.index(ju, Zu))) null === (su = Eu.entityRemoved) || void 0 === su || su.call(Eu, uu)
          }
          Uu = Zu + (0, cu.xe)(uu >>> 16)
        }
        this.rereadDirectory()
      }
      dispatch(uu, Eu, ju) {
        const {
          len: su,
          net: Uu,
          netOffsets: Zu
        } = uu;
        let Xu = this.eventView(),
          lu = 0;
        for (let pu = 0; pu < su;) {
          const uu = Xu.getUint32(pu, !0),
            su = 65535 & uu,
            wu = uu >>> 16,
            au = pu + cu.R;
          let Pu = !1;
          if (lu < Uu.length && Zu[lu] === pu) Eu.netEvent(Uu[lu]), lu++, Pu = !0;
          else if (su === cu.T.LocalPlayerBound) {
            var qu;
            if (wu !== cu.Lb) throw du(su, pu, wu);
            null === (qu = Eu.localPlayerBound) || void 0 === qu || qu.call(Eu, Xu.getInt32(au, !0)), Pu = !0
          } else if (su === cu.T.LocalHurt) {
            var fu;
            if (wu !== cu.Ib) throw du(su, pu, wu);
            null === (fu = Eu.localHurt) || void 0 === fu || fu.call(Eu, Xu.getInt32(au, !0), Xu.getFloat32(au + 4, !0), Xu.getUint32(au + 8, !0)), Pu = !0
          } else if (su === cu.T.AttackHit) {
            var Cu;
            if (wu !== cu.d) throw du(su, pu, wu);
            const uu = Xu.getFloat32(au, !0),
              ju = Xu.getFloat32(au + 4, !0),
              Uu = Xu.getFloat32(au + 8, !0),
              Zu = Xu.getUint32(au + 12, !0);
            null === (Cu = Eu.attackHit) || void 0 === Cu || Cu.call(Eu, uu, ju, Uu, 0 !== (Zu & cu.m.Crit), 0 !== (Zu & cu.m.HitSelf))
          } else if (su === cu.T.PhysicsType) {
            var bu;
            if (wu !== cu.ec) throw du(su, pu, wu);
            null === (bu = Eu.physicsType) || void 0 === bu || bu.call(Eu, Xu.getUint32(au, !0), Xu.getInt32(au + 4, !0)), Pu = !0
          } else if (su === cu.T.VehicleEffect) {
            var Nu;
            const uu = Ju(Xu, au, wu);
            if (null === uu) throw du(su, pu, wu);
            null === (Nu = Eu.vehicleEffect) || void 0 === Nu || Nu.call(Eu, uu.op, uu.name, uu.icon, uu.level, uu.durationMs), Pu = !0
          } else if (su === cu.T.ZoomChanged) {
            var Yu;
            if (wu !== cu.fe) throw du(su, pu, wu);
            null === (Yu = Eu.zoomChanged) || void 0 === Yu || Yu.call(Eu, Xu.getFloat32(au, !0), Xu.getUint8(au + 4)), Pu = !0
          } else if (su === cu.T.ZoomDisabled) {
            var eu;
            if (0 !== wu) throw du(su, pu, wu);
            null === (eu = Eu.zoomDisabled) || void 0 === eu || eu.call(Eu), Pu = !0
          } else if (su === cu.T.GameCamera) {
            var Gu;
            null === (Gu = Eu.gameCamera) || void 0 === Gu || Gu.call(Eu, new Uint8Array(Xu.buffer, Xu.byteOffset + au, wu).slice()), Pu = !0
          } else if (su === Ou.r.ChunkSlot || su === Ou.r.EntityInfoChanged);
          else if (su >= hu && su <= Du) {
            if (this.audio && !this.audio.onAudioEvent(su, Xu, au, wu)) throw du(su, pu, wu)
          } else if (su >= gu && su <= Mu) {
            if (this.replay) {
              if (!this.replay.onReplayEvent(su, Xu, au, wu)) throw du(su, pu, wu);
              Pu = !0
            }
          } else if (su >= Ou.ed && su <= Ou.hd && su !== cu.T.EnvLighting) {
            if (!(0, Ou.Yd)(su, Xu, au, wu, Eu)) throw du(su, pu, wu);
            Pu = !0
          }
          if (Pu) {
            if (ju()) return !1;
            Xu = this.eventView()
          }
          pu = au + (0, cu.xe)(wu)
        }
        return !ju()
      }
      applyListener() {
        var uu;
        if (!this.audio) return;
        const Eu = Ou.u.audioViewPtr(this.apiView, 0),
          ju = this.memory().buffer;
        let su = this.audioView;
        (null === (uu = su) || void 0 === uu ? void 0 : uu.buffer) === ju && su.byteOffset === Eu || (su = (0, Nu.h)(ju, Eu, Ou.w.BYTES, 8, "the audio view"), this.audioView = su), su && this.audio.applyListener(su)
      }
      indexOf(uu) {
        return this.indexById.get("number" === typeof uu ? uu : +uu)
      }
      isLocal(uu) {
        return uu !== Ou.Pc && uu === Ou.u.localId(this.apiView, 0)
      }
      bM(uu) {
        const Eu = [0, 0, 0];
        return this.readPosition("number" === typeof uu ? uu : +uu, Eu) ? Eu : null
      }
      readPosition(uu, Eu) {
        const ju = this.apiView;
        if (void 0 !== this.indexById.get(uu) && this.isLocal(uu)) {
          for (let uu = 0; uu < 3; uu++) Eu[uu] = Ou.u.localPos(ju, 0, uu);
          return !0
        }
        return this.readDrawnPosition(uu, Eu)
      }
      readDrawnPosition(uu, Eu) {
        const ju = this.apiView,
          su = this.indexById.get(uu);
        if (void 0 === su || su >= this.renderCapacity) return Eu[0] = Eu[1] = Eu[2] = NaN, !1;
        const Uu = su * Yu;
        for (let Zu = 0; Zu < 3; Zu++) Eu[Zu] = this.render[Uu + Zu] + Ou.u.origin(ju, 0, Zu);
        return !0
      }
      checkValid(uu) {
        return void 0 !== this.indexOf(uu)
      }
      isAlive(uu) {
        const Eu = this.indexOf(uu);
        if (void 0 === Eu) return null;
        if (this.ensureViews(), Eu >= this.renderCapacity) return null;
        const ju = this.vis[Eu];
        return 0 === ju ? null : 0 !== (ju & Ou.Wd.Alive)
      }
      getEntityType(uu) {
        const Eu = this.indexOf(uu);
        return void 0 === Eu ? this.isLocal("number" === typeof uu ? uu : +uu) ? "Player" : null : pu(this.kinds[Eu])
      }
      spawned(uu, Eu, ju) {
        if (Eu >= 1048576) throw new Nu.e(`entity ${uu} spawned at index ${Eu}`);
        this.ensureIndex(Eu), this.serverIds[Eu] === uu && null !== this.idStr[Eu] || (this.idStr[Eu] = String(uu)), this.serverIds[Eu] = uu, this.kinds[Eu] = ju, this.indexById.set(uu, Eu)
      }
      despawned(uu, Eu) {
        let ju = !1;
        return this.indexById.get(uu) === Eu && (this.indexById.delete(uu), ju = !0), Eu < this.serverIds.length && this.serverIds[Eu] === uu && (this.serverIds[Eu] = Ou.Pc, this.kinds[Eu] = 0, this.idStr[Eu] = null), ju
      }
      ensureIndex(uu) {
        const Eu = this.serverIds.length;
        if (uu < Eu) return;
        let ju = 2 * Eu;
        for (; ju <= uu;) ju *= 2;
        const su = new Int32Array(ju).fill(Ou.Pc);
        su.set(this.serverIds), this.serverIds = su;
        const Uu = new Uint16Array(ju);
        Uu.set(this.kinds), this.kinds = Uu;
        for (let Zu = Eu; Zu < ju; Zu++) this.idStr.push(null)
      }
      eventView() {
        const uu = this.memory().buffer;
        return uu !== this.eventsBuffer && (this.eventsBuffer = uu, this.events = new DataView(uu, this.eventsPtr, this.eventsLen)), this.events
      }
      reView() {
        const uu = this.memory().buffer;
        this.buffer = uu, this.viewPtr < 0 && (this.viewPtr = this.core.wUu()), this.view = new DataView(uu, this.viewPtr, Ou.u.BYTES), this.rereadDirectory()
      }
    }

    function Gu(uu) {
      return uu >>> Ou.d === Ou.t.Item
    }

    function pu(uu) {
      var Eu, ju;
      const su = uu & Ou.h;
      switch (uu >>> Ou.d) {
        case Ou.t.Lifeform:
          return null !== (Eu = Cu.n[su]) && void 0 !== Eu ? Eu : null;
        case Ou.t.Throwable:
          return null !== (ju = bu.n[su]) && void 0 !== ju ? ju : null;
        case Ou.t.Mesh:
          return "Mesh";
        case Ou.t.Audio:
          return "AudioEntity";
        case Ou.t.Item:
          return "Item";
        default:
          return null
      }
    }
    const wu = new TextDecoder;

    function Ju(uu, Eu, ju) {
      if (ju < cu.Id.HEAD_BYTES) return null;
      const su = uu.getUint32(Eu, !0),
        Uu = uu.getUint32(Eu + 20, !0),
        Zu = uu.getUint32(Eu + 24, !0),
        Xu = cu.Id.HEAD_BYTES + (0, cu.xe)(Uu);
      if (su !== cu.Id.UPDATE && su !== cu.Id.REMOVE || Uu > ju || Xu + Zu > ju) return null;
      const lu = (ju, su) => wu.decode(new Uint8Array(uu.buffer, uu.byteOffset + Eu + ju, su)),
        qu = uu.getFloat64(Eu + 12, !0);
      return {
        op: su,
        level: uu.getFloat64(Eu + 4, !0),
        durationMs: Number.isNaN(qu) ? null : qu,
        name: lu(cu.Id.HEAD_BYTES, Uu),
        icon: lu(Xu, Zu)
      }
    }

    function du(uu, Eu, ju) {
      return new Nu.e(`event ${uu} at ${Eu} of ${ju} bytes`)
    }
    var au = ju(349),
      Pu = ju(1278),
      ou = ju(39342),
      ku = ju(2007),
      mu = ju(41230),
      vu = ju(1955),
      Ku = ju(39490),
      Vu = ju(39513),
      ru = ju(39501),
      Qu = ju(40877),
      iu = ju(2519),
      Wu = ju(39481),
      Su = ju(39510);
    const Iu = Math.max(Ou.ub.BYTES, Ou.ob.BYTES, Ou.qb.BYTES);

    function Fu(uu) {
      if (!(0, Su.e)(uu)) return null;
      const Eu = Number(uu);
      return (0 | Eu) === Eu ? Eu : null
    }
    class Bu {
      constructor(uu) {
        this.api = uu, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, Wu.j)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.ys = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], this.entityHeading = 0, this.localId = Ou.Pc, this.localName = String(Ou.Pc), this.scratch = null
      }
      readView() {
        this.defaultPoseRead = !1, this.ys = null;
        const uu = this.api.queries.directorView() >= Ou.ub.BYTES ? this.scratchView() : null;
        null !== uu && (this.defaultFov = (0, vu.A)(Ou.ub.fov(uu, 0)), this.baseFov = (0, vu.A)(Ou.ub.baseFov(uu, 0)), this.aspect = Ou.ub.aspect(uu, 0), this.bodyHeading = Ou.ub.bodyHeading(uu, 0))
      }
      getViewHeading() {
        return this.viewHeading
      }
      setViewHeading(uu) {
        this.viewHeading = uu
      }
      get localPlayerId() {
        const uu = Ou.u.localId(this.api.apiView, 0);
        return uu !== this.localId && (this.localId = uu, this.localName = String(uu)), this.localName
      }
      getEntityPosition(uu) {
        return this.readEntity(uu) ? this.entityFeet : null
      }
      getEntityAimPoint(uu) {
        return this.readEntity(uu) ? this.entityAim : null
      }
      getEntityHeading(uu) {
        const Eu = Fu(uu);
        if (null === Eu) return null;
        const ju = Ou.u.localId(this.api.apiView, 0);
        return Eu === ju && ju !== Ou.Pc ? this.viewHeading : this.readEntity(uu) ? this.entityHeading : null
      }
      raycastTerrain(uu, Eu, ju) {
        const su = this.api.queries.cameraSweep(uu[0], uu[1], uu[2], Eu[0], Eu[1], Eu[2], ju);
        return su < ju - 1e-6 ? su : null
      }
      getDefaultPose() {
        if (this.defaultPoseRead) return this.defaultPose;
        this.defaultPoseRead = !0;
        const uu = this.defaultPose;
        uu.fov = this.defaultFov;
        const Eu = this.api.queries.directorDefaultPose() >= Ou.ob.BYTES ? this.scratchView() : null;
        if (null === Eu) return uu;
        for (let ju = 0; ju < 3; ju++) uu.position[ju] = Ou.ob.eye(Eu, 0, ju);
        return uu.heading = Ou.ob.heading(Eu, 0), uu.pitch = Ou.ob.pitch(Eu, 0), uu
      }
      getDefaultFov() {
        return this.defaultFov
      }
      getBaseFov() {
        return this.baseFov
      }
      getAspectRatio() {
        return this.aspect
      }
      readEntity(uu) {
        const Eu = Fu(uu);
        if (null === Eu) return !1;
        if (Eu === this.ys) return this.entityLive;
        this.ys = Eu;
        const ju = this.api.queries.directorEntity(Eu) >= Ou.qb.BYTES ? this.scratchView() : null;
        if (this.entityLive = null !== ju, null === ju) return !1;
        for (let su = 0; su < 3; su++) this.entityFeet[su] = Ou.qb.feet(ju, 0, su), this.entityAim[su] = this.entityFeet[su];
        return this.entityAim[1] += Ou.qb.eyeHeight(ju, 0), this.entityHeading = Ou.qb.heading(ju, 0), !0
      }
      scratchView() {
        const uu = this.api.scratch(),
          Eu = this.api.memory().buffer,
          ju = this.scratch;
        return null !== ju && ju.buffer === Eu && ju.byteOffset === uu ? ju : (this.scratch = this.api.memoryData(uu, Iu, 8, "the director's record"), this.scratch)
      }
    }
    const Lu = {
        mode: "default"
      },
      tu = {
        show: () => {},
        clear: () => {}
      };

    function xu() {
      return "undefined" !== typeof document && "hidden" === document.visibilityState
    }
    class Tu {
      constructor(uu) {
        this.options = uu, this.zb = void 0, this.director = void 0, this.latest = Lu, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
          hK: 0,
          VK: 0
        }, this.pointedAt = {
          heading: 0,
          pitch: 0
        }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastCallMs = 0, this.answeredPose = !1, this.wb = new Int32Array(3 * Ou.Dd), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * Ou.Dd), this.zb = new Bu(uu.api), this.director = new ru.c(this.zb)
      }
      settingsChanged(uu) {
        let Eu = Lu;
        if (uu.length > 0) try {
          Eu = (0, Qu.d)(uu)
        } catch {}
        this.latest = Eu, this.pending = Eu
      }
      call(uu, Eu, ju, su, Uu, Zu) {
        var Xu, lu;
        let qu;
        this.holding = !1;
        try {
          qu = this.answer(uu, Eu, ju, su, Uu, Zu)
        } catch (cu) {
          var fu, Cu;
          throw this.answeredPose = !1, null === (fu = (Cu = this.options).showFacing) || void 0 === fu || fu.call(Cu, null), cu
        }
        const bu = this.answeredPose && 0 === (su & Ou.rb.Held);
        return this.answeredPose = qu !== Ou.mb.None, this.holding = this.answeredPose && !bu, null === (Xu = (lu = this.options).showFacing) || void 0 === Xu || Xu.call(lu, this.holding ? this.facing : null), qu
      }
      holdsView() {
        return this.holding
      }
      answer(uu, Eu, ju, su, Uu, Zu) {
        this.calledThisFrame = !0, this.engaged = !0, this.lastCallMs = this.now();
        const {
          zb: Xu
        } = this;
        Xu.readView();
        if (0 !== (su & Ou.rb.Held) || Xu.setViewHeading((0, Ku.v)(Xu.bodyHeading)), void 0 !== this.pending) {
          const uu = this.pending;
          this.pending = void 0, this.director.setSettings(uu), this.syncShownSettings()
        }
        this.readLook((0, iu.e)(Eu), (0, iu.e)(ju), su, (0, iu.e)(Uu), (0, iu.e)(Zu));
        const lu = this.director.update(uu / 1e3, this.look);
        if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !lu) return Ou.mb.None;
        const [qu, fu, Cu] = lu.position;
        if (0 === this.options.api.queries.directorPose(qu, fu, Cu, (0, Ku.v)(lu.heading), (0, Ku.j)(lu.pitch), (0, vu.k)(lu.fov))) return Ou.mb.None;
        if ("default" === this.director.getSettings().mode) return Ou.mb.Pose;
        switch (this.facing) {
          case "camera":
            return Ou.mb.FaceCamera;
          case "cursor":
            return Ou.mb.FaceCursor;
          default:
            return Ou.mb.FaceMovement
        }
      }
      afterFrame(uu) {
        uu ? (this.calledThisFrame || (this.holding = !1, this.engaged && this.idle()), this.calledThisFrame = !1) : this.centresLen > 0 && this.hidden() && this.now() - this.lastCallMs > 1e3 && this.setCentres(0), this.centresUnsent && this.sendCentres()
      }
      reset() {
        this.latest = Lu, this.idle()
      }
      restart() {
        const uu = this.holding;
        this.idle(), this.holding = uu
      }
      idle() {
        var uu, Eu;
        this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new ru.c(this.zb), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, null === (uu = (Eu = this.options).showFacing) || void 0 === uu || uu.call(Eu, null), this.setCentres(0)
      }
      syncShownSettings() {
        const uu = this.director.getSettings();
        if (uu === this.shownSettings) return;
        this.shownSettings = uu;
        const Eu = (0, Vu.e)(uu);
        this.facing = Eu.facing, this.mouseTurns = Eu.mouseTurns
      }
      readLook(uu, Eu, ju, su, Uu) {
        const Zu = this.look,
          Xu = 0 !== (ju & Ou.rb.LookPointed);
        if (null === this.mouseTurns && !Xu) return Zu.hK = 0, Zu.VK = 0, void(Zu.pointedAt = void 0);
        let lu;
        Xu && (this.pointedAt.heading = su, this.pointedAt.pitch = Uu, lu = this.pointedAt);
        const {
          zb: qu
        } = this;
        qu.setViewHeading((0, Vu.d)(qu.getViewHeading(), uu, Eu, lu, "look" === this.mouseTurns, Zu))
      }
      writeCentres(uu) {
        const Eu = this.next,
          ju = Math.min(uu.length, Ou.Dd);
        for (let su = 0; su < ju; su++)
          for (let ju = 0; ju < 3; ju++) Eu[3 * su + ju] = Math.floor(uu[su][ju] / Ou.E);
        this.setCentres(ju)
      }
      setCentres(uu) {
        const {
          wb: Eu,
          next: ju
        } = this;
        let su = uu === this.centresLen;
        for (let Uu = 0; su && Uu < 3 * uu; Uu++) su = Eu[Uu] === ju[Uu];
        su || (Eu.fill(0), Eu.set(ju.subarray(0, 3 * uu)), this.centresLen = uu, this.centresUnsent = !0, this.sendCentres())
      }
      sendCentres() {
        const uu = this.options.cmd();
        null !== uu && (0, Ou.qf)(uu, 0, this.wb, this.centresLen) && (this.centresUnsent = !1)
      }
      screen() {
        var uu, Eu, ju;
        return null !== (uu = null === (Eu = (ju = this.options).screen) || void 0 === Eu ? void 0 : Eu.call(ju)) && void 0 !== uu ? uu : tu
      }
      hidden() {
        var uu;
        return (null !== (uu = this.options.isPageHidden) && void 0 !== uu ? uu : xu)()
      }
      now() {
        var uu, Eu, ju;
        return null !== (uu = null === (Eu = (ju = this.options).now) || void 0 === Eu ? void 0 : Eu.call(ju)) && void 0 !== uu ? uu : performance.now()
      }
    }
    var Hu = ju(41020);
    const Au = Ou.E * Ou.E * Ou.E,
      nu = Math.log2(Ou.E),
      yu = Ou.E - 1,
      zu = Ou.P.BYTES / 4,
      Ru = new Uint16Array(Au);

    function uE(uu, Eu, ju) {
      return uu * Ou.E * Ou.E + Eu * Ou.E + ju
    }
    class EE {
      constructor(uu) {
        this.chunk = uu
      }
      get data() {
        return this.chunk.gameVoxels()
      }
      index(uu, Eu, ju) {
        return uE(uu, Eu, ju)
      }
    }
    class jE {
      constructor() {
        this.ids = new Map, this.cleared = new Set, this.layers = 0, this.patched = null, this.from = null
      }
    }
    class sE {
      constructor(uu, Eu, ju, su) {
        this.table = uu, this.slot = Eu, this.generation = ju, this.epoch = su, this.ac = new EE(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = Ru, this.dataPtr = 0, this.dataBuffer = null, this.dataStamp = -1, this.version = 0, this.layers = null, this.layersVersion = -1, this.layersPtr = -1, this.staleLayers = 0
      }
      get IO() {
        return this.voxelData(), this.version === this.shownCore && this.writeCount === this.shownWrites || (this.shownCore = this.version, this.shownWrites = this.writeCount, this.shownVersion = this.table.nextVersion()), this.shownVersion
      }
      get JN() {
        const uu = this.gameVoxels(),
          Eu = this.layers ??= new Uint16Array(Ou.E);
        this.layersVersion === this.version && this.layersPtr === this.dataPtr || (this.layersVersion = this.version, this.layersPtr = this.dataPtr, this.staleLayers = -1);
        for (let ju = 0; 0 !== this.staleLayers; ju++) {
          const su = 1 << ju;
          0 !== (this.staleLayers & su) && (this.staleLayers &= ~su, Eu[ju] = UE(uu, ju))
        }
        return Eu
      }
      voxelData() {
        return this.dataStamp === this.table.stamp && 0 !== this.data.length ? this.data : this.reread()
      }
      gameVoxels() {
        const uu = this.voxelData(),
          Eu = this.writes;
        if (null === Eu || 0 === Eu.ids.size) return uu;
        if (Eu.from !== uu) {
          const ju = Eu.patched ??= new Uint16Array(Au);
          ju.set(uu);
          for (const [uu, su] of Eu.ids) ju[uu] = su;
          Eu.from = uu
        }
        return Eu.patched
      }
      written(uu) {
        var Eu;
        return null === (Eu = this.writes) || void 0 === Eu ? void 0 : Eu.ids.get(uu)
      }
      hasWrites() {
        return null !== this.writes && 0 !== this.writes.ids.size
      }
      write(uu, Eu, ju) {
        const su = this.writes ??= new jE;
        su.ids.set(uu, Eu), ju && su.cleared.add(uu), null !== su.from && (su.patched[uu] = Eu);
        const Uu = 1 << (uu >> nu & yu);
        su.layers |= Uu, this.staleLayers |= Uu, this.writeCount++
      }
      clearWrites() {
        const uu = this.writes;
        null !== uu && (this.staleLayers |= uu.layers, uu.ids.clear(), uu.cleared.clear(), uu.layers = 0, uu.from = null)
      }
      dataCleared(uu) {
        var Eu;
        return !0 === (null === (Eu = this.writes) || void 0 === Eu ? void 0 : Eu.cleared.has(uu))
      }
      reread() {
        this.dataStamp = this.table.stamp;
        const uu = this.table.slotWords(),
          Eu = this.slot * zu;
        if (this.epoch !== this.table.epoch || Eu + zu > uu.length || 0 === uu[Eu + 3] || uu[Eu + 2] !== this.generation) return this.data = Ru, this.dataPtr = 0, Ru;
        this.version = uu[Eu + 1];
        const ju = uu[Eu + 0],
          su = uu.buffer;
        return ju === this.dataPtr && su === this.dataBuffer || (this.dataPtr = ju, this.dataBuffer = su, this.data = this.table.voxelsAt(su, ju)), this.data
      }
    }

    function UE(uu, Eu) {
      const ju = uu[Eu * Ou.E];
      for (let su = 0; su < Ou.E; su++) {
        const Uu = uE(su, Eu, 0);
        for (let Eu = 0; Eu < Ou.E; Eu++)
          if (uu[Uu + Eu] !== ju) return 65535
      }
      return ju
    }
    const ZE = new Uint32Array(0);

    function XE(uu, Eu, ju) {
      return uE(uu & yu, Eu & yu, ju & yu)
    }
    class lE {
      constructor(uu, Eu) {
        this.memory = uu, this.apiView = Eu, this.chunks = new Map, this.written = [], this.lastKey = -1, this.lastChunk = void 0, this.slotsPtr = 0, this.slotsLen = 0, this.slotsBuffer = null, this.slots = ZE, this.walkPtr = 0, this.walkLen = 0, this.walkBuffer = null, this.walk = ZE, this.epoch = 0, this.stamp = 0, this.versions = 0, this.corruption = null
      }
      apply(uu, Eu, ju, su, Uu, Zu) {
        if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, Zu === Ou.R.ResetAll) return this.chunks.clear(), void this.epoch++;
        if (Zu !== Ou.R.Stored && Zu !== Ou.R.Unloaded) throw new Nu.e(`ChunkSlot flags ${Zu}`);
        const Xu = (0, Hu.e)(uu, Eu, ju);
        if (Xu < 0) return;
        if (Zu === Ou.R.Unloaded) return void this.chunks.delete(Xu);
        const lu = this.chunks.get(Xu);
        (null === lu || void 0 === lu ? void 0 : lu.slot) === su && lu.generation === Uu || this.chunks.set(Xu, new sE(this, su, Uu, this.epoch))
      }
      touch() {
        this.stamp++, this.clearOverlay(), this.viewWalkThrough()
      }
      refresh() {
        if (this.stamp++, this.corruption) throw this.corruption;
        const uu = this.apiView(),
          Eu = Ou.u.chunkSlotsPtr(uu, 0),
          ju = Ou.u.chunkSlotsLen(uu, 0);
        Eu === this.slotsPtr && ju === this.slotsLen || (this.slotsPtr = Eu, this.slotsLen = ju, this.slotsBuffer = null, this.slotWords()), this.viewWalkThrough(), this.clearOverlay()
      }
      viewWalkThrough() {
        const uu = this.apiView(),
          Eu = Ou.u.walkThroughPtr(uu, 0),
          ju = Ou.u.walkThroughLen(uu, 0);
        Eu === this.walkPtr && ju === this.walkLen || (this.walkPtr = Eu, this.walkLen = ju, this.walkBuffer = null, this.walkWords())
      }
      clearOverlay() {
        for (const uu of this.written) uu.clearWrites();
        this.written.length = 0
      }
      nextVersion() {
        return ++this.versions
      }
      slotWords() {
        const uu = this.memory().buffer;
        var Eu;
        uu !== this.slotsBuffer && (this.slotsBuffer = uu, this.slots = null !== (Eu = (0, Nu.r)(Uint32Array, uu, this.slotsPtr, this.slotsLen * zu, "the chunk directory")) && void 0 !== Eu ? Eu : ZE);
        return this.slots
      }
      voxelsAt(uu, Eu) {
        try {
          var ju;
          return null !== (ju = (0, Nu.r)(Uint16Array, uu, Eu, Au, "a chunk's voxels")) && void 0 !== ju ? ju : Ru
        } catch (su) {
          if (!(su instanceof Nu.e)) throw su;
          return this.corruption ??= su, Ru
        }
      }
      chunk(uu, Eu, ju) {
        var su;
        return null !== (su = this.chunks.get((0, Hu.e)(uu, Eu, ju))) && void 0 !== su ? su : null
      }
      isLoaded(uu, Eu, ju) {
        return void 0 !== this.chunkAt(Math.floor(uu), Math.floor(Eu), Math.floor(ju))
      }
      ul(uu, Eu, ju) {
        var su;
        const Uu = Math.floor(uu),
          Zu = Math.floor(Eu),
          Xu = Math.floor(ju),
          lu = this.chunkAt(Uu, Zu, Xu);
        if (!lu) return 0;
        const qu = XE(Uu, Zu, Xu);
        return null !== (su = lu.written(qu)) && void 0 !== su ? su : lu.voxelData()[qu]
      }
      setOverlay(uu, Eu, ju, su) {
        let Uu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Zu = this.chunkAt(uu, Eu, ju);
        return !!Zu && (Zu.hasWrites() || this.written.push(Zu), Zu.write(XE(uu, Eu, ju), su, Uu), !0)
      }
      version(uu, Eu, ju) {
        var su, Uu;
        return null !== (su = null === (Uu = this.chunks.get((0, Hu.e)(uu, Eu, ju))) || void 0 === Uu ? void 0 : Uu.IO) && void 0 !== su ? su : null
      }
      scan(uu, Eu, ju, su, Uu, Zu, Xu, lu) {
        const qu = Ou.E;
        let fu = 0;
        for (let Cu = Math.floor(Eu / qu); Cu * qu < Uu; Cu++) {
          const bu = Cu * qu,
            cu = Math.min(Uu - bu, qu);
          for (let Uu = Math.floor(uu / qu); Uu * qu < su; Uu++) {
            const Nu = Uu * qu,
              Ou = Math.min(su - Nu, qu);
            for (let su = Math.floor(ju / qu); su * qu < Zu; su++) {
              const Yu = this.chunks.get((0, Hu.e)(Uu, Cu, su));
              if (!Yu) continue;
              const hu = su * qu,
                Du = Math.max(ju - hu, 0),
                gu = Math.min(Zu - hu, qu),
                Mu = Yu.JN,
                eu = Yu.gameVoxels();
              for (let ju = Math.max(Eu - bu, 0); ju < cu; ju++) {
                const Eu = Mu[ju];
                if (65535 === Eu || 0 !== Xu[Eu]) {
                  fu++;
                  for (let Eu = Math.max(uu - Nu, 0); Eu < Ou; Eu++) {
                    const uu = uE(Eu, ju, 0);
                    for (let su = Du; su < gu; su++) {
                      const Uu = eu[uu + su];
                      0 !== Xu[Uu] && lu.push(Nu + Eu, bu + ju, hu + su, Uu)
                    }
                  }
                }
              }
            }
          }
        }
        return fu
      }
      dataCleared(uu, Eu, ju) {
        var su;
        const Uu = Math.floor(uu),
          Zu = Math.floor(Eu),
          Xu = Math.floor(ju);
        return !0 === (null === (su = this.chunkAt(Uu, Zu, Xu)) || void 0 === su ? void 0 : su.dataCleared(XE(Uu, Zu, Xu)))
      }
      isWalkThrough(uu) {
        if (!Number.isInteger(uu) || uu < 0 || uu > 65535) return !1;
        const Eu = this.walkWords(),
          ju = uu >>> 5;
        return ju < Eu.length && 1 === (Eu[ju] >>> (31 & uu) & 1)
      }
      walkWords() {
        const uu = this.memory().buffer;
        var Eu;
        uu !== this.walkBuffer && (this.walkBuffer = uu, this.walk = null !== (Eu = (0, Nu.r)(Uint32Array, uu, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== Eu ? Eu : ZE);
        return this.walk
      }
      chunkAt(uu, Eu, ju) {
        if ((0 | uu) !== uu || (0 | Eu) !== Eu || (0 | ju) !== ju) return;
        const su = (0, Hu.e)(uu >> nu, Eu >> nu, ju >> nu);
        return su !== this.lastKey && (this.lastKey = su, this.lastChunk = this.chunks.get(su)), this.lastChunk
      }
    }
    var qE = ju(38828),
      fE = ju(38200),
      CE = ju(37185),
      bE = ju(37007),
      cE = ju(34512),
      NE = ju(39431),
      OE = ju(202);
    const YE = ["ambient", "cars", "crowd", "customGame_horror", "dig", "fire", "fishing", "gameStart", "gunMisc", "gunPistol", "gunRifle", "gunSemiAutomatic", "gunShotgun", "gunSubmachineGun", "mobBear", "mobCat", "mobCow", "mobCrone", "mobDeer", "mobDog", "mobFennec", "mobGolem", "mobGorilla", "mobHorse", "mobKnight", "mobPig", "mobReaver", "mobSheep", "mobSkeleton", "mobStag", "mobStalker", "mobWarper", "mobWraith", "mobZombie", "note", "phoneAndMoney", "police", "randomBeep", "randomCannon", "randomCash", "randomExp", "randomFallsmall", "randomFire", "randomFirecracker", "randomItems", "randomLaugh", "randomMagic", "randomSplash", "rpg", "step", "survivalFactory", "town"],
      hE = [
        ["ZombieGrunt1", 33],
        ["ZombieGrunt2", 33],
        ["ZombieGrunt3", 33],
        ["ZombieHurt1", 33],
        ["ZombieHurt2", 33],
        ["ZombieHurt3", 33],
        ["ZombieHurt4", 33],
        ["bass", 34],
        ["bassattack", 34],
        ["bd", 34],
        ["bearRoar1", 14],
        ["bearRoar2", 14],
        ["bearRoar3", 14],
        ["bearRoar4", 14],
        ["bearRoar5", 14],
        ["beep", 37],
        ["bigDrumSwish1", 34],
        ["bigDrumSwish2", 34],
        ["bigDrumSwish3", 34],
        ["bow", 44],
        ["bucketEmpty1", 44],
        ["bucketEmpty2", 44],
        ["bucketEmpty3", 44],
        ["bucketFill1", 44],
        ["bucketFill2", 44],
        ["bucketFill3", 44],
        ["bullet_shell_bounce_general_07", 8],
        ["bullet_shell_bounce_general_08", 8],
        ["burp", 44],
        ["cameraShutter", 35],
        ["cannonFire1", 38],
        ["cannonFire2", 38],
        ["cannonFire3", 38],
        ["carCrash", 1],
        ["carDoorClose", 1],
        ["carDoorOpen", 1],
        ["carDriveLoop", 1],
        ["carEngineStart", 1],
        ["carHorn", 1],
        ["carIdleLoop", 1],
        ["carLockChirp", 1],
        ["cashRegister", 39],
        ["catHiss1", 15],
        ["catHiss2", 15],
        ["catHiss3", 15],
        ["catHiss4", 15],
        ["catHurt1", 15],
        ["catHurt2", 15],
        ["catHurt3", 15],
        ["catMeow1", 15],
        ["catMeow2", 15],
        ["catMeow3", 15],
        ["catMeow4", 15],
        ["catMeow5", 15],
        ["caughtFish", 6],
        ["chestClose", 44],
        ["chestOpen", 44],
        ["cloth1", 4],
        ["cloth2", 4],
        ["cloth3", 4],
        ["cloth4", 4],
        ["coinsDrop", 35],
        ["cowHurt1", 16],
        ["cowMoo1", 16],
        ["cowMoo2", 16],
        ["cowMoo3", 16],
        ["croneAttack1", 17],
        ["croneHurt1", 17],
        ["croneIdle1", 17],
        ["crowdAmbience", 2],
        ["crowdCheer", 2],
        ["crowdMurmur", 51],
        ["cryptWhoosh", 3],
        ["deerGrunt1", 18],
        ["deerHurt1", 18],
        ["dogBark1", 19],
        ["dogBark2", 19],
        ["dogBark3", 19],
        ["dogGrowl1", 19],
        ["dogGrowl2", 19],
        ["dogGrowl3", 19],
        ["dogHurt1", 19],
        ["dogHurt2", 19],
        ["doorClose", 44],
        ["doorClose2", 44],
        ["doorKnock", 3],
        ["doorOpen-bloxd1", 44],
        ["doorOpen-bloxd2", 44],
        ["doorbell", 51],
        ["drink", 44],
        ["drumSwish1", 34],
        ["drumSwish2", 34],
        ["eat1", 44],
        ["equip_leather1", 44],
        ["exp_collect", 40],
        ["exp_levelup", 40],
        ["extinguisherSpray", 5],
        ["fallsmall", 41],
        ["fennecYip1", 20],
        ["fennecYip2", 20],
        ["fennecYip3", 20],
        ["fireAlarmBell", 5],
        ["fireBurn", 42],
        ["fireCrackle", 5],
        ["fireTruckHorn", 5],
        ["firecracker1", 43],
        ["firecracker2", 43],
        ["firecracker3", 43],
        ["firecracker4", 43],
        ["futureStrangePulse", 3],
        ["game_start_countdown_01", 7],
        ["game_start_countdown_02", 7],
        ["game_start_countdown_03", 7],
        ["game_start_countdown_final", 7],
        ["gateCreak", 51],
        ["glass1", 4],
        ["glass2", 4],
        ["glass3", 4],
        ["golemGrunt1", 21],
        ["golemGrunt2", 21],
        ["gorillaIdle1", 22],
        ["gorillaIdle2", 22],
        ["gorillaIdle3", 22],
        ["gorillaIdle4", 22],
        ["gorillaRoar1", 22],
        ["grass1", 4],
        ["grass2", 4],
        ["grass3", 4],
        ["grass4", 4],
        ["gravel1", 4],
        ["gravel2", 4],
        ["gravel3", 4],
        ["gravel4", 4],
        ["handcuffsLock", 36],
        ["harp_pling", 34],
        ["hat", 34],
        ["hauntedHorrorImpact", 3],
        ["headshot_04", 8],
        ["headshot_06", 8],
        ["headshot_08", 8],
        ["headshot_11", 8],
        ["hit1", 49],
        ["hit2", 49],
        ["hit3", 49],
        ["hoeTill1", 44],
        ["hoeTill2", 44],
        ["hoeTill3", 44],
        ["hoeTill4", 44],
        ["horrorAccent1", 3],
        ["horrorFright", 3],
        ["horrorMaleDrone", 3],
        ["horseHurt1", 23],
        ["horseHurt2", 23],
        ["horseIdle1", 23],
        ["horseIdle2", 23],
        ["horseIdle3", 23],
        ["indicatorTick", 1],
        ["intensiveRainLoop", 3],
        ["jobComplete", 35],
        ["keysJingle", 51],
        ["kidsPlaying", 51],
        ["knightGrunt1", 24],
        ["knightGrunt2", 24],
        ["knightGrunt3", 24],
        ["laugh1", 45],
        ["laugh2", 45],
        ["laugh3", 45],
        ["lavaFlow", 0],
        ["levelup", 34],
        ["lowDrum1", 34],
        ["lowDrum2", 34],
        ["lowDrum3", 34],
        ["magicAccent1", 46],
        ["magicAccent2", 46],
        ["magicAccent3", 46],
        ["magicAccent4", 46],
        ["messageReceive", 35],
        ["metalDoorKnock", 3],
        ["ominousBellHit", 3],
        ["parkBirds", 51],
        ["phoneNotify", 35],
        ["phoneTap", 35],
        ["phoneVibrate", 35],
        ["pickUp", 4],
        ["pigHurt1", 25],
        ["pigHurt2", 25],
        ["pigHurt3", 25],
        ["pigOink1", 25],
        ["pigOink2", 25],
        ["pigOink3", 25],
        ["pigOink4", 25],
        ["pigOink5", 25],
        ["pistol_cock_01", 9],
        ["pistol_cock_02", 9],
        ["pistol_cock_03", 9],
        ["pistol_cock_06", 9],
        ["pistol_magazine_load_01", 9],
        ["pistol_magazine_load_02", 9],
        ["pistol_magazine_load_03", 9],
        ["pistol_magazine_unload_01", 9],
        ["pistol_magazine_unload_02", 9],
        ["pistol_magazine_unload_03", 9],
        ["pistol_shot_01", 9],
        ["pistol_shot_02", 9],
        ["pistol_shot_03", 9],
        ["pistol_shot_04", 9],
        ["pistol_shot_05", 9],
        ["pulseFromTheDark", 3],
        ["radioBeep", 36],
        ["radioChatter", 36],
        ["reaverAttack1", 26],
        ["reaverAttack2", 26],
        ["reaverAttack3", 26],
        ["reaverGrunt1", 26],
        ["reaverGrunt2", 26],
        ["reaverGrunt3", 26],
        ["reel", 6],
        ["refereeWhistle", 2],
        ["reverseBeep", 1],
        ["rifle_cock_01", 10],
        ["rifle_cock_02", 10],
        ["rifle_magazine_load_01", 10],
        ["rifle_magazine_load_02", 10],
        ["rifle_magazine_load_03", 10],
        ["rifle_magazine_unload_01", 10],
        ["rifle_magazine_unload_02", 10],
        ["rifle_magazine_unload_04", 10],
        ["rifle_shot_01", 10],
        ["rifle_shot_02", 10],
        ["rifle_shot_03", 10],
        ["rifle_shot_04", 10],
        ["rocketEngineLoop", 50],
        ["rpgBeltCloth1", 48],
        ["rpgBeltCloth2", 48],
        ["rpgBeltHandle1", 48],
        ["rpgBeltHandle2", 48],
        ["rpgBookClose", 48],
        ["rpgBookFlip1", 48],
        ["rpgBookFlip2", 48],
        ["rpgBookFlip3", 48],
        ["rpgBookOpen", 48],
        ["rpgBookPlace1", 48],
        ["rpgBookPlace2", 48],
        ["rpgBookPlace3", 48],
        ["rpgChop", 48],
        ["rpgCloth1", 48],
        ["rpgCloth2", 48],
        ["rpgCloth3", 48],
        ["rpgCloth4", 48],
        ["rpgCreak1", 48],
        ["rpgCreak2", 48],
        ["rpgCreak3", 48],
        ["rpgDoorClose1", 48],
        ["rpgDoorClose2", 48],
        ["rpgDoorClose3", 48],
        ["rpgDoorClose4", 48],
        ["rpgDoorOpen1", 48],
        ["rpgDoorOpen2", 48],
        ["rpgDrawKnife1", 48],
        ["rpgDrawKnife2", 48],
        ["rpgDrawKnife3", 48],
        ["rpgDropLeather", 48],
        ["rpgFootstep00", 48],
        ["rpgFootstep01", 48],
        ["rpgFootstep02", 48],
        ["rpgFootstep03", 48],
        ["rpgFootstep04", 48],
        ["rpgFootstep05", 48],
        ["rpgFootstep06", 48],
        ["rpgFootstep07", 48],
        ["rpgFootstep08", 48],
        ["rpgFootstep09", 48],
        ["rpgHandleCoins1", 48],
        ["rpgHandleCoins2", 48],
        ["rpgHandleSmallLeather1", 48],
        ["rpgHandleSmallLeather2", 48],
        ["rpgKnifeSlice1", 48],
        ["rpgKnifeSlice2", 48],
        ["rpgMetalClick", 48],
        ["rpgMetalLatch", 48],
        ["rpgMetalPot1", 48],
        ["rpgMetalPot2", 48],
        ["rpgMetalPot3", 48],
        ["runningSteps", 36],
        ["sand1", 4],
        ["sand2", 4],
        ["sand3", 4],
        ["sand4", 4],
        ["seatbeltClick", 1],
        ["semiAuto_cock_01", 11],
        ["semiAuto_cock_02", 11],
        ["semiAuto_cock_03", 11],
        ["semiAuto_cock_04", 11],
        ["semiAuto_cock_05", 11],
        ["semiAuto_first_shot_01", 11],
        ["semiAuto_magazine_load_01", 11],
        ["semiAuto_magazine_load_02", 11],
        ["semiAuto_magazine_load_03", 11],
        ["semiAuto_magazine_load_04", 11],
        ["semiAuto_magazine_load_05", 11],
        ["semiAuto_magazine_unload_01", 11],
        ["semiAuto_magazine_unload_02", 11],
        ["semiAuto_magazine_unload_03", 11],
        ["semiAuto_magazine_unload_04", 11],
        ["semiAuto_shot_01", 11],
        ["semiAuto_shot_02", 11],
        ["semiAuto_shot_03", 11],
        ["semiAuto_shot_04", 11],
        ["semiAuto_shot_05", 11],
        ["semiAuto_shot_06", 11],
        ["semiAuto_shot_07", 11],
        ["semiAuto_shot_08", 11],
        ["semiAuto_tail_only_shot_01", 11],
        ["sheepBaa1", 27],
        ["sheepBaa2", 27],
        ["sheepBaa3", 27],
        ["sheepBaa4", 27],
        ["sheepHurt1", 27],
        ["shopDoorbell", 51],
        ["shotgun_cock_01", 12],
        ["shotgun_cock_02", 12],
        ["shotgun_cock_03", 12],
        ["shotgun_cock_04", 12],
        ["shotgun_cock_05", 12],
        ["shotgun_load_bullet_01", 12],
        ["shotgun_load_bullet_02", 12],
        ["shotgun_load_bullet_03", 12],
        ["shotgun_load_bullet_04", 12],
        ["shotgun_load_bullet_05", 12],
        ["shotgun_load_bullet_06", 12],
        ["shotgun_load_bullet_07", 12],
        ["shotgun_load_bullet_08", 12],
        ["shotgun_shot_01", 12],
        ["shotgun_shot_02", 12],
        ["shotgun_shot_03", 12],
        ["shotgun_shot_04", 12],
        ["sirenChirp", 36],
        ["sirenWail", 36],
        ["sirenYelp", 36],
        ["skeletonRattle1", 28],
        ["skeletonRattle2", 28],
        ["skeletonRattle3", 28],
        ["skeletonRattle4", 28],
        ["snare", 34],
        ["snow1", 4],
        ["snow2", 4],
        ["snow3", 4],
        ["snow4", 4],
        ["sonarBeep", 34],
        ["splash1", 47],
        ["stagGrunt1", 29],
        ["stagHurt1", 29],
        ["stalkerAttack1", 30],
        ["stalkerIdle1", 30],
        ["step_cloth1", 49],
        ["step_cloth2", 49],
        ["step_cloth3", 49],
        ["step_cloth4", 49],
        ["step_grass1", 49],
        ["step_grass2", 49],
        ["step_grass3", 49],
        ["step_grass4", 49],
        ["step_grass5", 49],
        ["step_gravel1", 49],
        ["step_gravel2", 49],
        ["step_gravel3", 49],
        ["step_gravel4", 49],
        ["step_sand2", 49],
        ["step_sand3", 49],
        ["step_sand4", 49],
        ["step_sand5", 49],
        ["step_snow1", 49],
        ["step_snow2", 49],
        ["step_snow3", 49],
        ["step_snow4", 49],
        ["step_stone1", 49],
        ["step_stone2", 49],
        ["step_stone3", 49],
        ["step_stone4", 49],
        ["step_stone5", 49],
        ["step_stone6", 49],
        ["step_wood1", 49],
        ["step_wood2", 49],
        ["step_wood3", 49],
        ["step_wood4", 49],
        ["step_wood5", 49],
        ["step_wood6", 49],
        ["stone1", 4],
        ["stone2", 4],
        ["stone3", 4],
        ["stone4", 4],
        ["stunZap", 36],
        ["submachine_cock_01", 13],
        ["submachine_cock_02", 13],
        ["submachine_cock_03", 13],
        ["submachine_cock_04", 13],
        ["submachine_first_shot_01", 13],
        ["submachine_magazine_load_01", 13],
        ["submachine_magazine_load_02", 13],
        ["submachine_magazine_load_03", 13],
        ["submachine_magazine_load_04", 13],
        ["submachine_magazine_unload_01", 13],
        ["submachine_magazine_unload_02", 13],
        ["submachine_magazine_unload_03", 13],
        ["submachine_shot_01", 13],
        ["submachine_shot_02", 13],
        ["submachine_shot_03", 13],
        ["submachine_shot_04", 13],
        ["submachine_shot_05", 13],
        ["submachine_shot_06", 13],
        ["submachine_shot_07", 13],
        ["submachine_shot_08", 13],
        ["submachine_shot_09", 13],
        ["submachine_tail_only_shot_01", 13],
        ["successfulBowHit", 44],
        ["suspenseRiser", 3],
        ["sweep6", 49],
        ["thunderRain", 3],
        ["tillPurchase", 35],
        ["trapdoorOpen", 44],
        ["trumpetFlare", 34],
        ["trumpetNote1", 34],
        ["trumpetNote2", 34],
        ["trumpetNote3", 34],
        ["tyreScreech", 1],
        ["vanIdleLoop", 1],
        ["warperGrunt1", 31],
        ["warperGrunt2", 31],
        ["warperGrunt3", 31],
        ["warperGrunt4", 31],
        ["warperGrunt5", 31],
        ["warperPhase1", 31],
        ["warperPhase2", 31],
        ["whistle", 36],
        ["wood1", 4],
        ["wood2", 4],
        ["wood3", 4],
        ["wood4", 4],
        ["wraithGrunt1", 32],
        ["wraithGrunt2", 32],
        ["wraithHurt", 32],
        ["zapAccent1", 3],
        ["zapAccent2", 3]
      ],
      DE = hE.map((uu => {
        let [Eu] = uu;
        return Eu
      })),
      gE = Uint8Array.from(hE, (uu => {
        let [, Eu] = uu;
        return Eu
      })),
      ME = {
        semi_automatic: 11,
        submachine: 13,
        rifle: 10,
        pistol: 9,
        shotgun: 12
      },
      eE = 8;
    var GE = ju(37159),
      pE = ju(37172),
      wE = ju(37170),
      JE = ju(257);
    class dE {
      constructor(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : JE.b;
        this.sheet = uu, this.onError = Eu, this.idle = ju, this.queue = [], this.asked = new Set, this.cancelIdle = null, this.gen = 0, this.onIdle = uu => {
          this.cancelIdle = null;
          try {
            if (uu.timeRemaining() >= 1) {
              let uu = this.queue.shift();
              for (; void 0 !== uu && !this.load(uu);) uu = this.queue.shift()
            }
          } catch (Eu) {
            this.onError(Eu)
          } finally {
            this.schedule()
          }
        }
      }
      preload(uu) {
        const Eu = [...uu].sort(((uu, Eu) => uu - Eu));
        for (const ju of Eu) this.asked.has(ju) || (this.asked.add(ju), this.queue.push(ju));
        this.schedule()
      }
      cancel() {
        var uu;
        this.queue.length = 0, this.asked.clear(), this.gen++, null === (uu = this.cancelIdle) || void 0 === uu || uu.call(this), this.cancelIdle = null
      }
      schedule() {
        null === this.cancelIdle && this.queue.length > 0 && (this.cancelIdle = this.idle(this.onIdle))
      }
      load(uu) {
        const Eu = this.sheet(uu, !1),
          ju = this.sheet(uu, !0),
          [su, Uu] = "unloaded" === Eu.state() && "unloaded" !== ju.state() ? [ju, Eu] : [Eu, ju],
          Zu = this.gen,
          Xu = () => {
            try {
              Zu === this.gen && "unloaded" === Uu.state() && Uu.load()
            } catch (uu) {
              this.onError(uu)
            }
          },
          lu = su.state();
        return "unloaded" === lu ? (su.once("load", Xu), su.load(), !0) : "unloaded" === Uu.state() && ("loading" === lu ? (su.once("load", Xu), !1) : (Uu.load(), !0))
      }
    }
    var aE = ju(41119);
    const PE = {
        coneInnerAngle: 360,
        coneOuterAngle: 360,
        coneOuterGain: 0,
        distanceModel: "inverse",
        maxDistance: 1e3,
        panningModel: "HRTF",
        rolloffFactor: 1
      },
      oE = OE.e.Ih * OE.e.playerEyeToHeightRatio,
      kE = [0, 0, -1, 0, 1, 0],
      mE = YE.indexOf("note");

    function vE(uu) {
      return uu >= 0 ? Math.min(1, uu) : 0
    }

    function KE(uu) {
      var Eu;
      let ju = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
      const su = function(uu) {
        let Eu = 0,
          ju = DE.length;
        for (; Eu < ju;) {
          const su = Eu + ju >>> 1;
          DE[su] < uu ? Eu = su + 1 : ju = su
        }
        return Eu
      }(uu);
      if ("" === uu || null === (Eu = DE[su]) || void 0 === Eu || !Eu.startsWith(uu)) return -1;
      if (DE[su] === uu) return su;
      let Uu = su + 1;
      for (; Uu < DE.length && DE[Uu].startsWith(uu);) Uu++;
      return su + Math.floor(ju() * (Uu - su))
    }
    class VE {
      constructor(uu, Eu, ju, su, Uu) {
        this.group = uu, this.loudness = Eu, this.startMs = ju, this.howl = su, this.host = Uu, this.id = 0, this.direct = !1
      }
      getDurationMs() {
        const uu = this.host.alive(this.id);
        return uu ? 1e3 * this.howl.duration(this.id) / uu.rate : 0
      }
      isAlive() {
        return void 0 !== this.host.alive(this.id)
      }
      canStop() {
        return this.isAlive() && (this.direct || this.host.started(this.id)) && this.howl.playing(this.id) && !this.howl._playLock
      }
      stop() {
        this.host.drop(this.id)
      }
    }
    class rE {
      constructor(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          su = arguments.length > 3 ? arguments[3] : void 0;
        this.createHowl = uu, this.listener = Eu, this.now = ju, this.errors = 0, this.sheets = new Map, this.unloading = new Uint16Array(YE.length), this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader = void 0, this.voices = new wE.d, this.failed = new Set, this.started = new Set, this.voiceHost = {
          alive: uu => this.aliveVoice(uu),
          started: uu => this.started.has(uu),
          drop: uu => {
            var Eu;
            null === (Eu = this.live.get(uu)) || void 0 === Eu || Eu.howl.stop(uu), this.forget(uu)
          }
        }, this.handlers = {
          playSound: (uu, Eu, ju, su, Uu, Zu, Xu, lu, qu) => {
            if (su >= DE.length) return;
            const fu = 0 !== (Uu & Ou.Qd.Loop);
            Uu & Ou.Qd.TwoD ? this.start(su, !1, Xu, Zu, lu, fu) : this.startSpatial(su, Xu, Zu, lu, fu, uu, Eu, ju, qu, this.earDistSq(uu, Eu, ju))
          },
          soundPos: (uu, Eu, ju, su) => {
            const Uu = this.core.get(su);
            var Zu;
            void 0 !== Uu && (null === (Zu = this.live.get(Uu)) || void 0 === Zu || Zu.howl.pos(ju, Eu, uu, Uu))
          },
          soundSet: (uu, Eu, ju, su) => {
            const Uu = this.core.get(uu),
              Zu = void 0 === Uu ? void 0 : this.live.get(Uu);
            void 0 !== Uu && Zu && (this.setRel(Uu, Eu), Zu.rate = ju, Zu.howl.rate(ju, Uu), Zu.spatial && Zu.howl.pannerAttr({
              refDistance: su
            }, Uu))
          },
          soundFade: (uu, Eu, ju, su) => {
            const Uu = this.core.get(uu);
            void 0 !== Uu && this.fade(Uu, Eu, ju, 0 !== (su & Ou.Md.StopAfter))
          },
          soundStop: uu => {
            const Eu = this.core.get(uu);
            var ju;
            void 0 !== Eu && (null === (ju = this.live.get(Eu)) || void 0 === ju || ju.howl.stop(Eu), this.forget(Eu))
          },
          soundReset: () => {
            this.stopCore()
          }
        }, this.loader = new dE(((uu, Eu) => this.sheet(uu, Eu)), (uu => {
          this.errors++, console.error("Audio preload failed", uu)
        }), su)
      }
      prepare() {
        for (let uu = 0; uu < YE.length; uu++) this.prepareSheet(uu)
      }
      prepareSheet(uu) {
        this.sheet(uu, !1), this.sheet(uu, !0)
      }
      preload(uu) {
        this.loader.preload(uu)
      }
      cancelPreload() {
        this.loader.cancel()
      }
      freeSheetsAfterGame() {
        for (let uu = 0; uu < YE.length; uu++) {
          if (pE.b.has(YE[uu])) continue;
          const Eu = [];
          for (const su of [!1, !0]) {
            const ju = QE(uu, su),
              Uu = this.sheets.get(ju);
            void 0 !== Uu && "loading" !== Uu.state() && Eu.push({
              key: ju,
              howl: Uu
            })
          }
          if (!Eu.some((uu => {
              let {
                howl: Eu
              } = uu;
              return "loaded" === Eu.state()
            }))) continue;
          this.unloading[uu] += Eu.length;
          const ju = () => {
            this.unloading[uu]--, 0 === this.unloading[uu] && this.prepareSheet(uu)
          };
          for (const {
              key: uu,
              howl: su
            }
            of Eu) this.sheets.delete(uu), "loaded" === su.state() ? (0, GE.c)(su, ju) : (su.unload(), ju())
        }
      }
      onAudioEvent(uu, Eu, ju, su) {
        if (uu < Ou.r.PlaySound || uu > Ou.r.SoundReset) return !1;
        try {
          return (0, Ou.Yd)(uu, Eu, ju, su, this.handlers)
        } catch (Uu) {
          return this.errors++, console.error("Audio event failed", Uu), !0
        }
      }
      applyListener(uu) {
        const Eu = this.nextPose;
        for (let su = 0; su < 3; su++) Eu[2 - su] = Ou.w.listener(uu, 0, su), Eu[5 - su] = Ou.w.forward(uu, 0, su), Eu[8 - su] = Ou.w.up(uu, 0, su);
        0 === Eu[3] && 0 === Eu[4] && 0 === Eu[5] && Eu.set(this.posed ? this.pose.subarray(3) : kE, 3);
        for (let su = 0; su < 9; su++)
          if (!Number.isFinite(Eu[su])) return;
        const ju = this.pose;
        if (this.posed) {
          let uu = !0;
          for (let su = 0; su < 9 && uu; su++) uu = Eu[su] === ju[su];
          if (uu) return
        }
        this.listener.apply(Eu) && (ju.set(Eu), this.posed = !0)
      }
      playGame(uu, Eu, ju, su, Uu, Zu, Xu) {
        const lu = KE(uu);
        if (lu < 0) return aE.e;
        if (!ju) {
          const {
            howl: uu,
            id: ju
          } = this.start(lu, !1, Eu, 0, 1, Xu);
          return this.gameSound(uu, ju, !1)
        }
        const qu = ju[0],
          fu = ju[1] + oE,
          Cu = ju[2];
        if (!Number.isFinite(qu) || !Number.isFinite(fu) || !Number.isFinite(Cu)) return aE.e;
        let bu;
        if (su) {
          const uu = qu - su[0],
            Eu = fu - su[1],
            ju = Cu - su[2];
          if (bu = uu * uu + Eu * Eu + ju * ju, bu > Uu * Uu) return aE.e
        } else bu = this.earDistSq(qu, fu, Cu);
        const cu = this.startSpatial(lu, Eu, 0, 1, Xu, qu, fu, Cu, Zu, bu);
        return cu ? this.gameSound(cu.howl, cu.id, !0) : aE.e
      }
      setMaster(uu, Eu) {
        this.level = vE(uu);
        const ju = Eu ? this.level : 0;
        if (ju !== this.master) {
          this.master = ju;
          for (const [uu, Eu] of this.live) Eu.fadeMs = 0, Eu.gain = Eu.rel * this.master, Eu.howl.volume(Eu.gain, uu)
        }
      }
      stopCore() {
        for (const Eu of [...this.core.values()]) {
          var uu;
          null === (uu = this.live.get(Eu)) || void 0 === uu || uu.howl.stop(Eu)
        }
        this.core.clear()
      }
      stopAll() {
        this.cancelPreload();
        for (const [uu, Eu] of [...this.live]) Eu.howl.stop(uu), this.forget(uu);
        this.core.clear()
      }
      gameSound(uu, Eu, ju) {
        const su = {
          stop: () => (this.live.has(Eu) && uu.stop(Eu), su),
          fade: (uu, ju, Uu) => {
            var Zu, Xu;
            const lu = this.level > 0 ? ju / this.level : ju > 0 && null !== (Zu = null === (Xu = this.live.get(Eu)) || void 0 === Xu ? void 0 : Xu.rel) && void 0 !== Zu ? Zu : 0;
            return this.fade(Eu, lu, Uu, !1), su
          },
          rate: ju => {
            const Uu = this.live.get(Eu);
            return Uu && (Uu.rate = function(uu) {
              return uu > 0 && uu < 1 / 0 ? uu : 1
            }(ju), uu.rate(Uu.rate, Eu)), su
          },
          getVolume: () => {
            var uu, ju;
            return (null !== (uu = null === (ju = this.live.get(Eu)) || void 0 === ju ? void 0 : ju.rel) && void 0 !== uu ? uu : 0) * this.level
          },
          getRelativeVolume: () => {
            var uu, ju;
            return null !== (uu = null === (ju = this.live.get(Eu)) || void 0 === ju ? void 0 : ju.rel) && void 0 !== uu ? uu : 0
          },
          setRelativeVolume: uu => (this.setRel(Eu, uu), su),
          setPannerAttr: Uu => {
            if (ju && this.live.has(Eu)) {
              const ju = {
                ...PE,
                refDistance: CE.j
              };
              for (const [uu, Eu] of Object.entries(Uu)) "number" !== typeof Eu && "string" !== typeof Eu || (ju[uu] = Eu);
              uu.pannerAttr({
                coneOuterAngle: ju.coneOuterAngle
              }, Eu), uu.pannerAttr(ju, Eu)
            }
            return su
          },
          setPosition: Uu => (ju && this.live.has(Eu) && Number.isFinite(Uu[0] + Uu[1] + Uu[2]) && uu.pos(Uu[2], Uu[1], Uu[0], Eu), su)
        };
        return su
      }
      startSpatial(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu, fu) {
        const Cu = this.sheet(gE[uu], !0);
        let bu = null;
        if (!Uu) {
          if (this.failed.has(Cu)) return null;
          const ju = gE[uu] === mE ? null : (0, wE.i)(DE[uu]),
            su = (0, wE.g)(vE(Eu), Math.sqrt(fu), qu);
          if (bu = new VE(ju, su, this.now(), Cu, this.voiceHost), !this.voices.admit(bu)) return null
        }
        const cu = this.start(uu, !0, Eu, ju, su, Uu);
        return bu && (bu.id = cu.id, bu.direct = "loaded" === Cu.state() && !Cu._playLock), Cu.pannerAttr({
          coneOuterAngle: 360
        }, cu.id), Cu.pannerAttr({
          ...PE,
          refDistance: qu
        }, cu.id), Cu.pos(lu, Xu, Zu, cu.id), cu
      }
      aliveVoice(uu) {
        const Eu = this.live.get(uu);
        if (!Eu) return;
        const ju = Eu.howl._soundById(uu);
        if (ju && !ju._ended) return Eu;
        this.forget(uu)
      }
      earDistSq(uu, Eu, ju) {
        if (!this.posed) return 0;
        const su = uu - this.pose[2],
          Uu = Eu - this.pose[1],
          Zu = ju - this.pose[0];
        return su * su + Uu * Uu + Zu * Zu
      }
      start(uu, Eu, ju, su, Uu, Zu) {
        const Xu = vE(ju),
          lu = this.sheet(gE[uu], Eu);
        "unloaded" === lu.state() && lu.load();
        const qu = lu.play(DE[uu]),
          fu = Xu * this.master;
        return lu.volume(fu, qu), this.live.set(qu, {
          howl: lu,
          rel: Xu,
          gain: fu,
          fadeFrom: fu,
          fadeAt: 0,
          fadeMs: 0,
          rate: Uu,
          handle: su,
          spatial: Eu,
          stopTimer: void 0
        }), 0 !== su && this.core.set(su, qu), 1 !== Uu && lu.rate(Uu, qu), Zu && lu.loop(!0, qu), {
          howl: lu,
          id: qu
        }
      }
      sheet(uu, Eu) {
        const ju = QE(uu, Eu);
        let su = this.sheets.get(ju);
        if (!su) {
          const Uu = this.createHowl(YE[uu], Eu);
          Uu.on("end", (uu => {
            Uu.loop(uu) || this.forget(uu)
          })), Uu.on("stop", (uu => {
            this.forget(uu)
          })), Uu.on("play", (uu => {
            this.live.has(uu) && this.started.add(uu)
          })), Uu.on("loaderror", (uu => {
            if ("loaded" !== Uu.state()) {
              this.failed.add(Uu);
              for (const [uu, Eu] of this.live) Eu.howl === Uu && this.forget(uu)
            } else "number" === typeof uu && this.forget(uu)
          })), this.sheets.set(ju, Uu), su = Uu
        }
        return su
      }
      setRel(uu, Eu) {
        const ju = this.live.get(uu);
        ju && (iE(ju), ju.fadeMs = 0, ju.rel = vE(Eu), ju.gain = ju.rel * this.master, ju.howl.volume(ju.gain, uu))
      }
      fade(uu, Eu, ju, su) {
        const Uu = this.live.get(uu);
        if (!Uu) return;
        iE(Uu);
        const {
          howl: Zu
        } = Uu, Xu = this.gainNow(Uu);
        Uu.rel = vE(Eu), Uu.gain = Uu.rel * this.master;
        const lu = ju > 0 ? Math.min(ju, 65535) : 0,
          qu = 0 === lu || Xu === Uu.gain;
        Uu.fadeMs = qu ? 0 : lu, qu ? Zu.volume(Uu.gain, uu) : (Uu.fadeFrom = Xu, Uu.fadeAt = this.now(), Zu.fade(Xu, Uu.gain, lu, uu)), su && (qu ? Zu.stop(uu) : Uu.stopTimer = setTimeout((() => {
          Uu.stopTimer = void 0, Zu.stop(uu)
        }), lu))
      }
      gainNow(uu) {
        if (uu.fadeMs > 0) {
          const Eu = (this.now() - uu.fadeAt) / uu.fadeMs;
          if (Eu < 1) return uu.fadeFrom + (uu.gain - uu.fadeFrom) * Math.max(0, Eu);
          uu.fadeMs = 0
        }
        return uu.gain
      }
      forget(uu) {
        this.started.delete(uu);
        const Eu = this.live.get(uu);
        Eu && (iE(Eu), this.live.delete(uu), 0 !== Eu.handle && this.core.get(Eu.handle) === uu && this.core.delete(Eu.handle))
      }
    }

    function QE(uu, Eu) {
      return 2 * uu + (Eu ? 1 : 0)
    }

    function iE(uu) {
      void 0 !== uu.stopTimer && (clearTimeout(uu.stopTimer), uu.stopTimer = void 0)
    }
    var WE = ju(40860),
      SE = ju(39438);
    class IE {
      constructor(uu, Eu, ju, su) {
        this.key = uu, this.model = Eu, this.host = su, this.Mb = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.kUu = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, this.tailView = void 0, this.tailCut = new Uint8Array(0), this.made = !1, this.fO = !1, this.Mb = Math.max(1, Math.ceil(ju)), this.records = new Float32Array(this.Mb * qE.e), this.isDirty = new Uint8Array(this.Mb), this.tail = new Uint8Array(this.Mb * Ou.jc.Bytes), this.tailView = new DataView(this.tail.buffer), this.make(su.cmd())
      }
      setOrigin(uu, Eu, ju) {
        this.origin[0] = uu, this.origin[1] = Eu, this.origin[2] = ju
      }
      markDirty(uu) {
        !this.fO && uu >= 0 && uu < this.Mb && uu < Ou.jc.Max && this.mO(uu, uu + 1)
      }
      commit(uu) {
        if (this.fO) return;
        (uu = Math.min(Math.max(Math.floor(uu), 0), this.Mb, Ou.jc.Max)) > this.count && this.mO(this.count, uu), this.count = uu;
        const {
          origin: Eu,
          sentOrigin: ju,
          dirtyList: su
        } = this, Uu = this.kUu !== uu, Zu = ju[0] !== Eu[0] || ju[1] !== Eu[1] || ju[2] !== Eu[2];
        if (0 === su.length && !Uu && !Zu) return;
        const Xu = this.host.cmd();
        if (!Xu || !this.make(Xu)) return;
        const lu = su.length,
          {
            records: qu,
            tailView: fu
          } = this;
        for (let Cu = 0; Cu < lu; Cu++) {
          const uu = su[Cu],
            Eu = uu * qE.e,
            ju = Cu * Ou.jc.Bytes,
            Uu = 0 !== qu[Eu + qE.h] ? Ou.jc.Hidden : 0;
          fu.setUint32(ju, (uu | Uu) >>> 0, !0), fu.setFloat32(ju + 4, qu[Eu], !0), fu.setFloat32(ju + 8, qu[Eu + 1], !0), fu.setFloat32(ju + 12, qu[Eu + 2], !0)
        }
        if ((0, Ou.ze)(Xu, 0, this.key, uu, Eu, lu, this.tailOf(lu))) {
          for (let uu = 0; uu < lu; uu++) this.isDirty[su[uu]] = 0;
          su.length = 0, this.kUu = uu, ju[0] = Eu[0], ju[1] = Eu[1], ju[2] = Eu[2]
        }
      }
      grow(uu) {
        (uu = Math.ceil(uu)) <= this.Mb || this.fO || (this.records = (0, SE.b)(this.records, new Float32Array(uu * qE.e)), this.isDirty = (0, SE.b)(this.isDirty, new Uint8Array(uu)), this.tail = new Uint8Array(uu * Ou.jc.Bytes), this.tailView = new DataView(this.tail.buffer), this.Mb = uu)
      }
      dispose() {
        this.fO || (this.fO = !0, this.host.fO(this, this.made ? this.key : null))
      }
      make(uu) {
        if (!this.made && uu) {
          const {
            item: Eu,
            scale: ju,
            yaw: su
          } = this.model;
          this.made = (0, Ou.He)(uu, 0, this.key, Eu, ju, su)
        }
        return this.made
      }
      tailOf(uu) {
        const Eu = uu * Ou.jc.Bytes;
        return this.tailCut.buffer === this.tail.buffer && this.tailCut.length === Eu || (this.tailCut = this.tail.subarray(0, Eu)), this.tailCut
      }
      mO(uu, Eu) {
        const {
          dirtyList: ju,
          isDirty: su
        } = this;
        for (let Uu = uu; Uu < Eu; Uu++) 0 === su[Uu] && (su[Uu] = 1, ju.push(Uu))
      }
    }
    var FE = ju(645);
    class BE {
      constructor(uu) {
        this.keys = 0, this.live = new Set, this.owing = new Set, this.host = void 0, this.host = {
          cmd: uu,
          owes: uu => {
            this.owing.add(uu)
          },
          settled: (uu, Eu) => {
            this.owing.delete(uu), Eu && this.live.delete(uu)
          }
        }
      }
      create(uu, Eu) {
        if (ju = uu, !FE.l.includes(ju)) return null;
        var ju;
        const su = new LE(++this.keys, Cu.n.indexOf(uu), Eu, this.host);
        return this.live.add(su), su
      }
      disposeAll() {
        for (const uu of [...this.live]) uu.dispose()
      }
      flush() {
        if (0 === this.owing.size) return;
        const uu = this.host.cmd();
        for (const Eu of this.owing)
          if (!Eu.sync(uu)) return
      }
    }
    class LE {
      constructor(uu, Eu, ju, su) {
        this.key = uu, this.lifeform = Eu, this.scale = ju, this.host = su, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.owed = 1, this.fO = !1, this.sync()
      }
      setPose(uu, Eu) {
        this.fO || (this.feet[0] = uu[0], this.feet[1] = uu[1], this.feet[2] = uu[2], this.yaw = Eu, this.owed |= 2, this.sync())
      }
      setVisible(uu) {
        this.fO || uu === this.visible || (this.visible = uu, this.owed |= 4, this.sync())
      }
      dispose() {
        this.fO || (this.fO = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
      }
      sync() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.host.cmd();
        return this.write(uu) ? (this.host.settled(this, this.fO), !0) : (this.host.owes(this), !1)
      }
      write(uu) {
        if (!uu) return this.owed = 0, !0;
        if (1 & this.owed) {
          if (!(0, Ou.Pe)(uu, 0, this.key, this.lifeform, this.scale)) return !1;
          this.owed &= -2
        }
        const Eu = (2 & this.owed ? Ou.Ic.Pose : 0) | (4 & this.owed ? Ou.Ic.Visible : 0);
        if (0 !== Eu) {
          if (!(0, Ou.Ne)(uu, 0, this.key, Eu, this.visible ? 1 : 0, this.feet, this.yaw)) return !1;
          this.owed &= -7
        }
        if (8 & this.owed) {
          if (!(0, Ou.Le)(uu, 0, this.key)) return !1;
          this.owed = 0
        }
        return !0
      }
    }
    var tE = ju(41213);

    function xE(uu, Eu, ju, su) {
      return (0, tE.e)(), (0, Ou.uf)(uu, Eu, ju, su)
    }
    var TE = ju(39446),
      HE = ju(40854);
    const AE = [0, 0, 0],
      nE = [0, 0, 0],
      yE = [0, 0, 0],
      zE = [0, 0, 0],
      RE = {
        origin: [0, 0, 0],
        direction: [0, 0, 1]
      },
      uj = [0, 0, 0],
      Ej = [0, 0],
      jj = [1, 1, 1],
      sj = 1 / 3;
    const Uj = fE.d;

    function Zj(uu) {
      const Eu = fE.c[uu],
        ju = Eu && fE.d[Eu.mainMultiblock];
      return ju && {
        main: ju,
        x: Eu.compX,
        y: Eu.compY,
        z: Eu.compZ
      }
    }

    function Xj(uu) {
      if (null === uu || void 0 === uu) return Ou.Pc;
      const Eu = +uu;
      return Number.isInteger(Eu) && Eu >= -2147483648 && Eu <= 2147483647 && String(Eu) === String(uu) ? Eu : Ou.Pc
    }

    function lj(uu, Eu, ju) {
      return (0, Ou.Bf)(uu, 0, Eu, null !== ju && void 0 !== ju ? ju : Number.NaN)
    }
    class qj {
      constructor(uu) {
        this.deps = uu, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new TE.d((() => this.tables.getClientOption("forcedCameraDirectionTransitionMs")), (uu => {
          var Eu, ju;
          null === (Eu = (ju = this.deps).setLocalOptions) || void 0 === Eu || Eu.call(ju, uu)
        })), this.mobModels = new BE((() => this.deps.cmd())), this.owedFrees = [], this.pendingStyle = void 0, this.pendingFar = void 0, this.farSet = !1, this.routeMesh = 0, this.routeOffset = 0, this.routeLook = "", this.routeSlide = {
          uvOffset: [0, 0]
        }, this.poolHost = {
          cmd: () => this.deps.cmd(),
          fO: (uu, Eu) => {
            this.livePools.delete(uu), null !== Eu && (this.owedFrees.push(Eu), this.flushOwed())
          }
        }, this.api = uu.api, this.live = uu.live, this.chunks = uu.chunks, this.items = uu.items, this.tables = uu.tables
      }
      isLocal(uu) {
        return null !== uu && void 0 !== uu && +uu === this.api.localId
      }
      assertLocal(uu, Eu) {
        if (!this.isLocal(uu)) throw new Error(`Attempted to ${Eu} for a player that is not the local player`)
      }
      bM(uu) {
        const Eu = this.api.bM(uu);
        if (!Eu) throw new Error(`Entity ${uu} has no replicated position`);
        return Eu
      }
      checkValid(uu) {
        return !!this.deps.isSessionLive() && (null === uu || void 0 === uu || this.api.checkValid(uu))
      }
      isAlive(uu) {
        return !1 !== this.api.isAlive(uu)
      }
      getItemStat(uu, Eu, ju) {
        return this.isLocal(uu) || null !== uu && "Player" === this.api.getEntityType(uu) ? this.tables.getItemStat(Eu, ju) : this.tables.getDefaultItemStat(Eu, ju)
      }
      getClientOption(uu, Eu) {
        return this.assertLocal(uu, "get a client option"), this.tables.getClientOption(Eu)
      }
      openShop(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ju = arguments.length > 2 ? arguments[2] : void 0;
        this.assertLocal(uu, "open shop"), Xu.h.TY("showShopFromServer", {
          toggle: Eu,
          fu: ju
        }, !0)
      }
      sendMessage(uu, Eu, ju) {
        this.assertLocal(uu, "send a message");
        const su = "string" === typeof Eu ? [{
          str: Eu,
          style: ju
        }] : Eu;
        Xu.h.TY("chat", {
          content: su
        }, !0)
      }
      getEntityType(uu) {
        return this.api.getEntityType(uu)
      }
      getEntityName(uu) {
        const Eu = Xj(uu);
        return Eu === Ou.Pc ? void 0 : (0, WE.h)(this.api, Eu)
      }
      hasEffect(uu, Eu) {
        const ju = Xj(uu);
        return ju !== Ou.Pc && (0, WE.e)(this.api, ju, Eu)
      }
      getMetaInfo(uu) {
        return this.tables.getMetaInfo(uu)
      }
      getPlayerDbId(uu) {
        return this.assertLocal(uu, "get a DB ID"), this.deps.playerDbId()
      }
      getBlockData(uu, Eu, ju) {
        if (!this.chunks.dataCleared(uu, Eu, ju)) return (0, WE.d)(this.api, uu, Eu, ju)
      }
      lK(uu, Eu, ju, su) {
        this.setBlockId(uu, Eu, ju, this.tables.getItemId(su))
      }
      setOtherEntitySetting(uu, Eu, ju, su) {
        if (!this.isLocal(uu)) throw new Error("Attempted to set an other-entity setting for a player that is not the local player");
        if (!Object.hasOwn(Ou.ad, ju)) throw new Error(`Unknown other-entity setting ${ju}`);
        const Uu = Ou.ad[ju],
          Zu = Xj(Eu);
        if (Zu === Ou.Pc || !this.deps.beforeWrite()) return;
        const Xu = (0, Qu.f)(su);
        if (Xu.length > 16384) throw new Error(`The other-entity setting ${ju}'s value is over 16384 bytes`);
        const lu = this.api.memoryView(Uint8Array, this.api.scratch(), Xu.length, "set_other_entity_setting's value");
        lu && (lu.set(Xu), this.api.queries.setOtherEntitySetting(Zu, Uu, Xu.length))
      }
      getPositionView(uu) {
        return this.live.position(+uu)
      }
      readDrawnPosition(uu, Eu) {
        return this.api.readDrawnPosition(Xj(uu), Eu)
      }
      getDrawnHeading(uu) {
        const Eu = Xj(uu),
          ju = (Eu === Ou.Pc ? 0 : this.api.queries.directorEntity(Eu)) >= Ou.qb.BYTES ? this.api.memoryData(this.api.scratch(), Ou.qb.BYTES, 8, "getDrawnHeading's DirectorEntity") : null;
        if (!ju) return null;
        if (1 === Ou.qb.headingIsDrawn(ju, 0)) return Ou.qb.heading(ju, 0);
        const su = this.api.apiView;
        return this.isLocal(uu) && 0 === (Ou.u.playerFlags(su, 0) & Ou.td.FreeCam) ? Ou.u.heading(su, 0) : null
      }
      getLocalPlayerMovement() {
        const uu = Ou.u.playerFlags(this.api.apiView, 0);
        return 0 === (uu & Ou.td.Replay) && this.api.readDrawnPosition(this.api.localId, yE) ? {
          onGround: 0 !== (uu & Ou.td.OnGround),
          jumpHeld: 0 !== (uu & Ou.td.JumpHeld)
        } : null
      }
      yEu(uu) {
        return this.isLocal(uu) ? this.items.dl() : null
      }
      getInventoryItems() {
        return this.items.playerItems()
      }
      getHeldGunInaccuracy() {
        var uu, Eu;
        return "Gun" === (null === (uu = this.aliveHeld()) || void 0 === uu || null === (Eu = uu.typeObj) || void 0 === Eu ? void 0 : Eu.type) ? this.items.inaccuracy : null
      }
      aliveHeld() {
        return !1 === this.api.isAlive(this.api.localId) ? null : this.items.dl()
      }
      isCrosshairShown() {
        var uu, Eu;
        const ju = (0, bE.d)(su.d.get("crosshairGameView"), su.d.get("crosshairShownOverride"));
        if (null !== ju) return ju;
        const Uu = null === (uu = this.aliveHeld()) || void 0 === uu ? void 0 : uu.typeObj,
          Zu = "Gun" === (null === Uu || void 0 === Uu ? void 0 : Uu.type),
          Xu = Zu || !0 === (null === Uu || void 0 === Uu ? void 0 : Uu.showsAimingUi),
          lu = 0 === (Ou.u.playerFlags(this.api.apiView, 0) & Ou.td.ZoomFirstPerson),
          qu = null !== (Eu = this.tables.getClientOption("gunshotOrigin")) && void 0 !== Eu ? Eu : null;
        return (0, bE.i)({
          gun: Zu,
          aimable: Xu
        }, lu, (0, cE.b)(), qu)
      }
      setCrosshairShown(uu) {
        su.d.set({
          crosshairShownOverride: uu
        })
      }
      getInventoryFreeSlotCount(uu) {
        return this.isLocal(uu) ? this.items.freeSlots() : null
      }
      getSelectedInventorySlotI(uu) {
        return this.isLocal(uu) ? this.items.selectedSlot : null
      }
      getItemSlot(uu, Eu) {
        return this.isLocal(uu) ? this.items.slot(Eu) : null
      }
      swapInventorySlots(uu, Eu) {
        return this.items.swap(uu, Eu)
      }
      isPlayerCrouching(uu) {
        if (this.isLocal(uu)) return 0 !== (Ou.u.playerFlags(this.api.apiView, 0) & Ou.td.Crouching);
        const Eu = Xj(uu);
        return Eu !== Ou.Pc && 1 === this.api.queries.entityCrouching(Eu)
      }
      getMiningBlock() {
        return this.live.breakingPosition()
      }
      isMining() {
        return 0 !== (Ou.u.playerFlags(this.api.apiView, 0) & Ou.td.AttemptingBreak)
      }
      getTargetedBlock() {
        return this.live.muu()
      }
      getActionRay() {
        const uu = this.api.apiView;
        for (let Eu = 0; Eu < 3; Eu++) RE.origin[Eu] = Ou.u.Auu(uu, 0, Eu), RE.direction[Eu] = Ou.u.actionDir(uu, 0, Eu);
        return RE
      }
      canModifyBlockAt(uu, Eu, ju) {
        return 1 === this.api.queries.canModify(uu, Eu, ju)
      }
      isSolidToPlayerBlockId(uu) {
        return this.tables.isSolidBlockId(uu) && !this.chunks.isWalkThrough(uu)
      }
      blockNameToBlockId(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.tables.blockNameToBlockId(uu, Eu)
      }
      blockIdToBlockName(uu) {
        return this.tables.nameOfId(uu)
      }
      gEu(uu, Eu, ju, su, Uu) {
        return 1 === this.api.queries.terrainBlocked(su, uu, Eu, ju, Xj(null !== Uu && void 0 !== Uu ? Uu : null))
      }
      getChunkVersion(uu, Eu, ju) {
        return this.chunks.version(uu, Eu, ju)
      }
      scanBlocks(uu, Eu, ju, su, Uu, Zu, Xu, lu) {
        return this.chunks.scan(uu, Eu, ju, su, Uu, Zu, Xu, lu)
      }
      isBlockInLoadedChunk(uu, Eu, ju) {
        return this.chunks.isLoaded(uu, Eu, ju)
      }
      getBlockId(uu, Eu, ju) {
        return this.chunks.ul(uu, Eu, ju)
      }
      playSound(uu, Eu, ju, su, Uu) {
        let Zu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (!this.isLocal(uu)) return null;
        const Xu = this.playSoundFrom(Eu, ju, Uu, Zu);
        return 1 === su ? Xu : Xu.rate(su)
      }
      preloadSounds(uu) {
        var Eu, ju;
        null === (Eu = (ju = this.deps).preloadSounds) || void 0 === Eu || Eu.call(ju, uu)
      }
      playSoundFrom(uu, Eu, ju, su) {
        var Uu, Zu;
        const Xu = this.deps.playSound;
        if (!Xu) return aE.e;
        const lu = null === ju || void 0 === ju ? void 0 : ju.Zu,
          qu = null !== (Uu = null === ju || void 0 === ju ? void 0 : ju.maxHearDist) && void 0 !== Uu ? Uu : CE.h,
          fu = null !== (Zu = null === ju || void 0 === ju ? void 0 : ju.refDistance) && void 0 !== Zu ? Zu : CE.j;
        let Cu = null;
        if (Array.isArray(lu)) AE[0] = lu[0], AE[1] = lu[1], AE[2] = lu[2], Cu = AE;
        else if (void 0 !== lu && null !== lu) {
          const uu = Xj(lu);
          if (!this.api.isLocal(uu)) {
            if (!this.api.readPosition(uu, AE)) return aE.e;
            Cu = AE
          }
        }
        return Xu(uu, Eu, Cu, Cu && this.ear(), qu, fu, su)
      }
      ear() {
        if (this.api.readPosition(this.api.localId, nE)) nE[1] += oE;
        else {
          const uu = this.api.apiView;
          if (0 === Ou.u.viewProj(uu, 0, 3) && 0 === Ou.u.viewProj(uu, 0, 7) && 0 === Ou.u.viewProj(uu, 0, 11)) return null;
          for (let Eu = 0; Eu < 3; Eu++) nE[Eu] = Ou.u.eye(uu, 0, Eu)
        }
        return Number.isFinite(nE[0] + nE[1] + nE[2]) ? nE : null
      }
      setBlockId(uu, Eu, ju, su) {
        if (!Number.isInteger(su) || su < 0 || su > 65535) throw new Error(`Invalid block id ${su}`);
        if (!this.deps.beforeWrite() || !this.chunks.isLoaded(uu, Eu, ju)) return;
        const Uu = Math.floor(uu),
          Zu = Math.floor(Eu),
          Xu = Math.floor(ju),
          lu = this.predictedCells(Uu, Zu, Xu, su);
        if (1 === this.api.queries.lK(Uu, Zu, Xu, su)) {
          for (let uu = 0; uu < lu.length; uu += 5) this.chunks.setOverlay(lu[uu], lu[uu + 1], lu[uu + 2], lu[uu + 3], 1 === lu[uu + 4]);
          this.live.refreshTarget()
        }
      }
      particlesEnabled() {
        return this.deps.particles.enabled()
      }
      createParticles(uu, Eu) {
        return this.deps.particles.create(uu, Eu)
      }
      playParticleEffect(uu) {
        this.deps.particles.playEffect(uu)
      }
      burstParticlePreset(uu, Eu, ju) {
        this.deps.particles.burstPreset(uu, Eu, ju)
      }
      createGameMesh(uu, Eu, ju) {
        const su = ++this.meshKeys,
          Uu = this.deps.cmd();
        if (!Uu) return su;
        const {
          look: Zu,
          colour: Xu
        } = function(uu) {
          switch (uu.kind) {
            case void 0:
            case "flatEmissive":
              return uu.onTop ? {
                look: Ou.Sb.FlatOnTop,
                colour: [...uu.rgb, uu.alpha]
              } : uu.opaque ? {
                look: Ou.Sb.FlatOpaque,
                colour: [...uu.rgb, 1]
              } : {
                look: Ou.Sb.Flat,
                colour: [...uu.rgb, uu.alpha]
              };
            case "chevronPath":
              return {
                look: Ou.Sb.Chevrons, colour: [...(0, NE.b)(uu.colour), uu.alpha]
              };
            case "furnaceFire":
              return {
                look: Ou.Sb.FurnaceFire, colour: [1, 1, 1, 1]
              }
          }
        }(Eu), lu = Math.floor(uu.positions.length / 3), qu = function(uu, Eu) {
          const ju = Math.floor(uu.positions.length / 3),
            su = uu.indices.length,
            Uu = ju * (Eu ? 5 : 3),
            Zu = new Uint8Array(4 * (Uu + su)),
            Xu = new DataView(Zu.buffer);
          for (let fu = 0; fu < 3 * ju; fu++) Xu.setFloat32(4 * fu, uu.positions[fu], !0);
          if (Eu) {
            var lu;
            const Eu = null !== (lu = uu.uvs) && void 0 !== lu ? lu : [];
            for (let uu = 0; uu < 2 * ju; uu++) {
              var qu;
              Xu.setFloat32(4 * (3 * ju + uu), null !== (qu = Eu[uu]) && void 0 !== qu ? qu : 0, !0)
            }
          }
          for (let fu = 0; fu < su; fu++) Xu.setUint32(4 * (Uu + fu), uu.indices[fu], !0);
          return Zu
        }(uu, (0, qE.i)(Eu));
        return (0, Ou.ne)(Uu, 0, su, Zu, Xu, ju, lu, uu.indices.length, qu) && this.liveMeshes.add(su), su
      }
      setGameMesh(uu, Eu) {
        var ju;
        const su = this.deps.cmd();
        if (!su) return;
        let Uu = 0;
        Eu.anchor && (Uu |= Ou.Wb.Anchor, uj[0] = Eu.anchor[0], uj[1] = Eu.anchor[1], uj[2] = Eu.anchor[2]), void 0 !== Eu.visible && (Uu |= Ou.Wb.Visible), Eu.uvOffset && (Uu |= Ou.Wb.UvOffset, Ej[0] = Eu.uvOffset[0], Ej[1] = Eu.uvOffset[1]);
        const Zu = null !== (ju = Eu.visibility) && void 0 !== ju ? ju : 1;
        void 0 !== Eu.visibility && (Uu |= Ou.Wb.Visibility), Eu.scale && (Uu |= Ou.Wb.Scale, jj[0] = Eu.scale[0], jj[1] = Eu.scale[1], jj[2] = Eu.scale[2]), 0 !== Uu && (0, Ou.se)(su, 0, uu, Uu, Eu.visible ? 1 : 0, uj, Ej, Zu, jj)
      }
      disposeGameMesh(uu) {
        const Eu = this.deps.cmd();
        Eu && !(0, Ou.qe)(Eu, 0, uu) || this.liveMeshes.delete(uu)
      }
      hasPackModel(uu) {
        var Eu, ju, su;
        return null !== (Eu = null === (ju = (su = this.deps).hasPackModel) || void 0 === ju ? void 0 : ju.call(su, uu)) && void 0 !== Eu && Eu
      }
      disposeGameOutput() {
        const uu = uu => {
          try {
            uu()
          } catch (Eu) {
            console.error("Error freeing client game output", Eu)
          }
        };
        for (const Eu of [...this.liveMeshes]) uu((() => {
          this.disposeGameMesh(Eu)
        }));
        for (const Eu of [...this.livePools]) uu((() => {
          Eu.dispose()
        }));
        uu((() => {
          this.mobModels.disposeAll()
        })), uu((() => {
          this.setGroundArrowStyle(null)
        })), uu((() => {
          this.setRouteChevrons(null), this.routeOffset = 0, this.routeLook = ""
        })), uu((() => {
          this.setCrosshairShown(null)
        })), uu((() => {
          this.cameraTurn.dispose()
        })), uu((() => {
          this.farSet && (this.farSet = !1, this.setCameraFar(null))
        }))
      }
      createInstancePool(uu, Eu) {
        const ju = this.tables.idOf(uu.item);
        if (void 0 === ju) return null;
        const su = new IE(++this.poolKeys, {
          item: ju,
          scale: uu.scale,
          yaw: uu.yaw
        }, Eu, this.poolHost);
        return this.livePools.add(su), su
      }
      createMobModel(uu, Eu) {
        return this.mobModels.create(uu, Eu)
      }
      setRouteChevrons(uu) {
        if (0 !== this.routeMesh && (this.disposeGameMesh(this.routeMesh), this.routeMesh = 0), !uu || 0 === uu.cells.length) return;
        const Eu = `${uu.colour} ${uu.alpha}`;
        Eu !== this.routeLook && (this.routeLook = Eu, this.routeOffset = 0), this.routeMesh = this.createGameMesh(function(uu) {
          const [Eu, ju, su] = uu[0].pos, Uu = [], Zu = [], Xu = [];
          return uu.forEach(((uu, lu) => {
            let {
              pos: qu,
              way: [fu, Cu]
            } = uu;
            const bu = qu[0] - Eu + .5,
              cu = qu[1] - ju + .04,
              Nu = qu[2] - su + .5,
              [Ou, Yu] = [.35 * -Cu, .35 * fu],
              [hu, Du] = [lu * sj, (lu + 1) * sj],
              gu = Uu.length / 3;
            Uu.push(bu - .5 * fu + Ou, cu, Nu - .5 * Cu + Yu), Uu.push(bu - .5 * fu - Ou, cu, Nu - .5 * Cu - Yu), Uu.push(bu + .5 * fu + Ou, cu, Nu + .5 * Cu + Yu), Uu.push(bu + .5 * fu - Ou, cu, Nu + .5 * Cu - Yu), Zu.push(0, hu, 1, hu, 0, Du, 1, Du), Xu.push(gu, gu + 1, gu + 2, gu + 1, gu + 3, gu + 2)
          })), {
            positions: Uu,
            uvs: Zu,
            indices: Xu
          }
        }(uu.cells), {
          kind: "chevronPath",
          colour: uu.colour,
          alpha: uu.alpha
        }, uu.cells[0].pos), this.setRouteSlide()
      }
      slideRoute(uu) {
        0 !== this.routeMesh && (this.routeOffset = (this.routeOffset + Math.min(uu, 250) / 1e3 * 1.2 * sj) % 1, this.setRouteSlide())
      }
      setRouteSlide() {
        this.routeSlide.uvOffset[1] = -this.routeOffset, this.setGameMesh(this.routeMesh, this.routeSlide)
      }
      setGroundArrowStyle(uu) {
        this.pendingStyle = uu, this.flushOwed()
      }
      flushOwed() {
        this.mobModels.flush();
        const uu = this.owedFrees;
        if (0 === uu.length && void 0 === this.pendingStyle && void 0 === this.pendingFar) return;
        const Eu = this.deps.cmd();
        if (!Eu) return uu.length = 0, void(this.pendingFar = void 0);
        let ju = 0;
        for (; ju < uu.length && (0, Ou.De)(Eu, 0, uu[ju]);) ju++;
        uu.splice(0, ju);
        const su = this.pendingStyle;
        if (void 0 !== su) {
          (su ? (0, Ou.Ff)(Eu, 0, su.width, su.alpha, 1, su.endAtSolidFace ? 1 : 0) : (0, Ou.Ff)(Eu, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
        }
        const Uu = this.pendingFar;
        void 0 !== Uu && (0, Ou.xf)(Eu, 0, null !== Uu && void 0 !== Uu ? Uu : 0, null === Uu ? 1 : 0) && (this.pendingFar = void 0)
      }
      setNametagOffset(uu, Eu) {
        const ju = this.deps.cmd(),
          su = Xj(uu);
        ju && su !== Ou.Pc && (0, Ou.Mf)(ju, 0, su, Eu)
      }
      setFacingTolerance(uu, Eu) {
        const ju = this.deps.cmd(),
          su = Xj(uu);
        ju && su !== Ou.Pc && lj(ju, su, Eu)
      }
      forEachEntity(uu) {
        const {
          api: Eu
        } = this;
        for (let ju = 0; ju < Eu.idStr.length; ju++) {
          const su = Eu.idStr[ju];
          null === su || Gu(Eu.kinds[ju]) || uu(su)
        }
      }
      getEntityInfo(uu) {
        return this.deps.entityInfo.get(uu)
      }
      isEntityInteractable(uu) {
        const Eu = Xj(uu);
        return Eu !== Ou.Pc && 1 === this.api.queries.entityInteractable(Eu)
      }
      isLocalPlayer(uu) {
        return this.isLocal(uu)
      }
      getLineOwner(uu) {
        var Eu;
        const ju = null === (Eu = this.deps.entityInfo.get(uu)) || void 0 === Eu ? void 0 : Eu.meshOpts;
        if (!ju) return null;
        try {
          const {
            lineToEId: uu
          } = JSON.parse(ju);
          return null !== uu && void 0 !== uu ? uu : null
        } catch {
          return null
        }
      }
      getCameraPosition() {
        const uu = this.api.apiView;
        return zE[0] = Ou.u.eye(uu, 0, 0), zE[1] = Ou.u.eye(uu, 0, 1), zE[2] = Ou.u.eye(uu, 0, 2), zE
      }
      getCameraFar() {
        return Ou.u.cameraFar(this.api.apiView, 0)
      }
      setCameraFar(uu) {
        null !== uu && (this.farSet = !0), this.pendingFar = uu, this.flushOwed()
      }
      turnCamera(uu, Eu) {
        this.cameraTurn.turn(uu, Eu)
      }
      clearPickupDelay(uu) {
        const Eu = this.deps.cmd(),
          ju = Xj(uu);
        Eu && ju !== Ou.Pc && (0, Ou.ce)(Eu, 0, ju)
      }
      sendChat(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const ju = this.deps.sendCmd();
        ju && xE(ju, 0, HE.c.Chat, (0, Qu.f)((0, HE.m)({
          VC: uu,
          rC: Eu
        })))
      }
      sendCommand(uu) {
        uu.length <= 119 && this.sendChat(`/${uu}`)
      }
      predictedCells(uu, Eu, ju, su) {
        const Uu = this.chunks,
          Zu = [],
          Xu = (uu, Eu, ju, su, Uu) => {
            Zu.push(uu, Eu, ju, su, this.tables.blockRootId(Uu) === this.tables.blockRootId(su) ? 0 : 1)
          },
          lu = Uu.ul(uu, Eu, ju),
          qu = Zj(lu);
        if (qu) {
          const [su, Zu, fu] = [uu - qu.x, Eu - qu.y, ju - qu.z], Cu = Uj[Uu.ul(su, Zu, fu)], bu = null === Cu || void 0 === Cu ? void 0 : Cu.positions.some((uu => uu.id === lu && uu.x === qu.x && uu.y === qu.y && uu.z === qu.z));
          for (const uu of (bu && Cu ? Cu : qu.main).positions) Uu.ul(su + uu.x, Zu + uu.y, fu + uu.z) === uu.id && Xu(su + uu.x, Zu + uu.y, fu + uu.z, 0, uu.id)
        }
        const fu = Zj(su);
        if (fu)
          for (const bu of fu.main.positions) {
            const [su, Zu, lu] = [uu + bu.x - fu.x, Eu + bu.y - fu.y, ju + bu.z - fu.z];
            Xu(su, Zu, lu, bu.id, Uu.ul(su, Zu, lu))
          } else Xu(uu, Eu, ju, su, lu);
        const Cu = this.tables;
        if ((0 !== Cu.attachedTopOf(lu) || 0 !== Cu.attachedTopOf(su)) && Uu.isLoaded(uu, Eu + 1, ju)) {
          let qu = Uu.ul(uu, Eu + 1, ju);
          for (let su = 0; su < Zu.length; su += 5) Zu[su] === uu && Zu[su + 1] === Eu + 1 && Zu[su + 2] === ju && (qu = Zu[su + 3]);
          const fu = this.attachedTopWrite(lu, su, qu);
          void 0 !== fu && Xu(uu, Eu + 1, ju, fu, qu)
        }
        return Zu
      }
      attachedTopWrite(uu, Eu, ju) {
        const su = this.tables,
          Uu = su.attachedTopOf(uu),
          Zu = su.attachedTopOf(Eu),
          Xu = 0 !== Uu && 0 !== ju && su.blockRootId(ju) === su.blockRootId(Uu);
        return 0 !== Uu && 0 !== Zu && su.blockRootId(uu) === su.blockRootId(Eu) ? Xu && ju !== Zu ? Zu : void 0 : 0 === Zu || !Xu && 0 !== ju ? Xu ? 0 : void 0 : Zu
      }
    }
    const fj = Ou.ec + Ou.ic * Ou.nc.BYTES,
      Cj = 2147483647,
      bj = new TextDecoder,
      cj = new TextEncoder,
      Nj = Object.freeze({
        aC: 0,
        yl: null,
        amountAddedToSlot: 0
      }),
      Oj = new Proxy({}, {
        get: () => () => Ou.Yc
      });

    function Yj(uu) {
      return Number.isInteger(uu) && uu >= 0 && uu <= 65535
    }

    function hj(uu) {
      return Number.isInteger(uu) && uu >= 0 && uu <= 4294967295
    }
    class Dj {
      constructor(uu) {
        this.deps = uu, this.RU = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(Ou.ic), this.ids = new Uint16Array(Ou.ic), this.amounts = new Uint16Array(Ou.ic), this.attrRead = new Float64Array(Ou.ic).fill(-1), this.stale = new Uint16Array(Ou.ic), this.staleVersion = new Uint32Array(Ou.ic), this.instances = new Uint32Array(Ou.ic), this.viewPtr = 0, this.viewVersion = -1, this.len = 0, this.selected = 0, this.slotIconId = 0, this.stopped = !1, this.listeners = new Set
      }
      get length() {
        return this.len
      }
      get selectedSlot() {
        return this.selected
      }
      get slotIcon() {
        return this.slotIconId
      }
      get changes() {
        return this.version
      }
      slot(uu) {
        var Eu;
        return Number.isInteger(uu) && uu >= 0 && uu < this.len && 0 !== this.ids[uu] && null !== (Eu = this.facades[uu]) && void 0 !== Eu ? Eu : null
      }
      dl() {
        return this.slot(this.selected)
      }
      playerItems() {
        const uu = [];
        for (let Eu = 0; Eu < Math.min(Ou.id, this.len); Eu++) uu.push(this.slot(Eu));
        return uu
      }
      freeSlots() {
        let uu = 0;
        for (let Eu = 0; Eu < Math.min(Ou.id - Ou.i, this.len); Eu++) 0 === this.ids[Eu] && uu++;
        return uu
      }
      amountOf(uu) {
        let Eu = 0;
        for (let su = 0; su < Math.min(Ou.id, this.len); su++) {
          const Uu = this.slot(su);
          var ju;
          if ((null === Uu || void 0 === Uu ? void 0 : Uu.name) === uu) Eu += null !== (ju = Uu.amount) && void 0 !== ju ? ju : 1
        }
        return Eu
      }
      instance(uu) {
        var Eu;
        return null !== (Eu = this.instances[uu]) && void 0 !== Eu ? Eu : 0
      }
      watch(uu) {
        return this.listeners.add(uu), () => {
          this.listeners.delete(uu)
        }
      }
      touch() {
        this.version++
      }
      flush(uu) {
        if (this.version !== this.notified || this.iconChanged) {
          this.notified = this.version, this.iconChanged = !1;
          for (const ju of [...this.listeners]) try {
            ju()
          } catch (Eu) {
            uu(Eu)
          }
        }
      }
      chestOpened(uu, Eu, ju) {
        this.RU[0] = uu, this.RU[1] = Eu, this.RU[2] = ju, this.version++
      }
      refresh() {
        const uu = this.deps.api.apiView,
          Eu = Ou.u.inventoryViewPtr(uu, 0),
          ju = Ou.u.inventoryVersion(uu, 0),
          su = Ou.u.selectedSlot(uu, 0);
        su !== this.selected && (this.selected = su, this.version++);
        const Uu = Ou.u.slotIcon(uu, 0);
        if (Uu !== this.slotIconId && (this.slotIconId = Uu, this.iconChanged = !0), Eu === this.viewPtr && ju === this.viewVersion) return;
        this.viewPtr = Eu, this.viewVersion = ju;
        const Zu = this.deps.api.memoryData(Eu, fj, 4, "the inventory view"),
          Xu = Zu ? Math.min(Zu.getUint32(0, !0), Ou.ic) : 0;
        Xu !== this.len && (this.len = Xu, this.version++);
        let lu = 0;
        for (let qu = 0; qu < Ou.ic; qu++) {
          const uu = Ou.ec + qu * Ou.nc.BYTES,
            Eu = null !== Zu && qu < Xu ? Ou.nc.item(Zu, uu) : 0;
          if (0 === Eu || null === Zu) {
            0 !== this.ids[qu] && (this.ids[qu] = 0, this.attrRead[qu] = -1, this.instances[qu]++, this.version++);
            continue
          }
          const ju = Ou.nc.amount(Zu, uu),
            su = Ou.nc.attrVersion(Zu, uu);
          Eu === this.ids[qu] && ju === this.amounts[qu] || this.fill(qu, Eu, ju), su !== this.attrRead[qu] && (this.stale[lu] = qu, this.staleVersion[lu] = su, lu++)
        }
        lu > 0 && this.fetchAttributes(lu)
      }
      fill(uu, Eu, ju) {
        const {
          tables: su
        } = this.deps, Uu = Eu !== this.ids[uu];
        let Zu = this.facades[uu];
        Zu || (Zu = {
          name: "",
          amount: null,
          attributes: {
            customAttributes: {}
          },
          typeObj: null
        }, this.facades[uu] = Zu), Uu && (Zu.name = su.nameOfId(Eu), Zu.typeObj = su.itemType(Eu), Zu.attributes = {
          customAttributes: {}
        }, this.attrRead[uu] = -1, this.instances[uu]++), Zu.amount = 0 === ju ? null : ju, this.ids[uu] = Eu, this.amounts[uu] = ju, this.version++
      }
      fetchAttributes(uu) {
        const {
          api: Eu,
          onError: ju
        } = this.deps, su = Eu.memoryView(Uint16Array, Eu.scratch(), uu, "item_attributes_batch's slots");
        if (!su) return void this.markRead(uu);
        su.set(this.stale.subarray(0, uu));
        const Uu = Eu.queries.itemAttributesBatch(uu),
          Zu = 4294967295 === Uu ? null : Eu.memoryData(Eu.scratch(), Uu, 4, "item_attributes_batch's answer");
        if (!Zu) return void this.markRead(uu);
        const Xu = new Uint8Array(Zu.buffer, Zu.byteOffset, Uu);
        for (let qu = 0; qu + 8 <= Uu;) {
          const uu = Zu.getUint16(qu, !0),
            Eu = Zu.getUint32(qu + 4, !0),
            su = Xu.subarray(qu + 8, qu + 8 + Eu);
          qu += 8 + (0, cu.xe)(Eu);
          const Uu = this.facades[uu];
          if (Uu && 0 !== this.ids[uu] && 0 !== Eu) {
            try {
              Uu.attributes = JSON.parse(bj.decode(su))
            } catch (lu) {
              ju(lu)
            }
            this.version++
          }
        }
        this.markRead(uu)
      }
      markRead(uu) {
        for (let Eu = 0; Eu < uu; Eu++) this.attrRead[this.stale[Eu]] = this.staleVersion[Eu]
      }
      swap(uu, Eu) {
        return Yj(uu) && Yj(Eu) && this.settle(this.queries().invSwap(uu, Eu))
      }
      move(uu, Eu, ju) {
        return Yj(uu) && Yj(Eu) && hj(ju) && this.settle(this.queries().invMove(uu, Eu, ju))
      }
      quickMove(uu, Eu, ju, su) {
        var Uu, Zu;
        if (!Yj(uu) || !Yj(Eu) || !Yj(ju) || null !== su && !hj(su)) return null;
        const Xu = this.queries().invQuickMove(uu, Eu, ju, null === su ? -1 : Math.min(su, Cj)),
          lu = Xu === Ou.Yc ? Ou.Db : null !== (Uu = null === (Zu = this.extras()) || void 0 === Zu ? void 0 : Zu[1]) && void 0 !== Uu ? Uu : Ou.Db;
        return this.settle(Xu), lu === Ou.Db ? null : lu
      }
      remove(uu, Eu, ju) {
        return Yj(uu) && hj(Eu) && this.settle(this.queries().invRemove(uu, Eu, ju ? 1 : 0))
      }
      selectSlot(uu) {
        return Yj(uu) && this.settle(this.queries().selectSlot(uu))
      }
      closeChest() {
        return this.settle(this.queries().closeChest())
      }
      enchant(uu, Eu, ju) {
        if (!Yj(uu) || !Number.isInteger(Eu)) return !1;
        const [su, Uu, Zu] = ju;
        return this.settle(this.queries().invEnchant(uu, Eu, Math.floor(su), Math.floor(Uu), Math.floor(Zu)))
      }
      craft(uu, Eu, ju) {
        let su;
        try {
          su = this.deps.tables.getItemId(uu)
        } catch {
          return Nj
        }
        if (!Yj(Eu) || null !== ju && (Number.isNaN(ju) || ju < 0)) return Nj;
        const Uu = null === ju || ju > Cj ? -1 : Math.floor(ju),
          Zu = this.queries().craft(su, Eu, Uu);
        let Xu = Nj;
        const lu = Zu === Ou.Yc ? null : this.extras();
        if (lu) {
          const [uu, Eu, ju] = lu;
          Xu = {
            aC: uu,
            yl: Eu === Ou.Db ? null : Eu,
            amountAddedToSlot: ju
          }
        }
        return this.settle(Zu), Xu
      }
      salvage(uu, Eu, ju) {
        let su;
        try {
          su = this.deps.tables.getItemId(Eu)
        } catch {
          return !1
        }
        return Yj(uu) && Number.isInteger(ju) && this.settle(this.queries().salvage(uu, su, Math.max(Math.min(ju, Cj), -Cj)))
      }
      craftingView(uu, Eu, ju) {
        var su;
        if (this.stopped) return null;
        const {
          api: Uu,
          onError: Zu
        } = this.deps, Xu = uu ? cj.encode(uu) : null;
        if (null !== Xu) {
          if (Xu.length > 1024) return Zu(new Error(`The crafting station ${uu}'s name is over 1024 bytes`)), null;
          const Eu = Uu.memoryView(Uint8Array, Uu.scratch(), Xu.length, "crafting_view's station");
          if (!Eu) return null;
          Eu.set(Xu)
        }
        const lu = Yj(Eu) && Yj(ju),
          qu = Uu.queries.craftingView(null !== (su = null === Xu || void 0 === Xu ? void 0 : Xu.length) && void 0 !== su ? su : 0, lu ? Eu : 0, lu ? ju : 0);
        return qu < Ou.ib.BYTES ? (Uu.reportCorruption(`crafting_view's answer of ${qu} bytes`), null) : Uu.memoryData(Uu.scratch(), qu, 1, "crafting_view's answer")
      }
      queries() {
        var uu, Eu;
        return !1 === (null === (uu = (Eu = this.deps).beforeOp) || void 0 === uu ? void 0 : uu.call(Eu)) ? (this.stopped = !0, Oj) : this.deps.api.queries
      }
      extras() {
        const {
          api: uu
        } = this.deps;
        return uu.memoryView(Uint32Array, uu.scratch(), 3, "a sync query's extra words")
      }
      settle(uu) {
        if (uu === Ou.Wc)(0, tE.e)();
        else if (uu !== Ou.Yc) {
          const Eu = this.deps.cmd();
          Eu && function(uu, Eu, ju) {
            return (0, tE.e)(), (0, Ou.Uf)(uu, Eu, ju)
          }(Eu, 0, uu) || this.deps.onError(new Error(`Sync op ${uu}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
        }
        return this.stopped || this.refresh(), uu !== Ou.Yc
      }
    }
    const gj = 1 / .6,
      Mj = [0, 1, 0],
      ej = [0, 0, 0],
      Gj = new Uint8Array(0),
      pj = 1.2 * OE.e.Sh,
      wj = new TextEncoder,
      Jj = [0, 0, 0],
      dj = [0, 0, 0],
      aj = new Map;

    function Pj(uu) {
      let Eu = aj.get(uu);
      return Eu || (aj.size >= 64 && aj.clear(), Eu = wj.encode(`{"emitRate":${uu}}`), aj.set(uu, Eu)), Eu
    }

    function oj(uu) {
      return Number.isFinite(uu) && uu > 0 ? uu : 0
    }

    function kj(uu, Eu) {
      for (let ju = 0; ju < 3; ju++) {
        const su = Math.abs(Eu[ju]);
        Jj[ju] = uu[ju] - su, dj[ju] = 2 * su
      }
      return Number.isFinite(Jj[0] + Jj[1] + Jj[2] + dj[0] + dj[1] + dj[2])
    }

    function mj(uu, Eu) {
      return "pos1" === uu || "pos2" === uu ? void 0 : Eu
    }

    function vj(uu, Eu, ju) {
      return uu.length > Ou.rd.MaxOpts ? (ju(new Error(`${Eu}'s particle opts are over ${Ou.rd.MaxOpts} bytes of JSON`)), null) : uu
    }
    const Kj = {
      moveTo() {},
      setEmitRate() {},
      emit() {},
      emitPoints() {},
      setDirections() {},
      stop() {},
      dispose() {}
    };
    class Vj {
      constructor(uu) {
        this.deps = uu, this.session = 0, this.nextKey = 1, this.live = 0, this.started = !1
      }
      enabled() {
        return null !== this.sink()
      }
      sink() {
        return this.deps.isSessionLive() ? this.deps.cmd() : null
      }
      create(uu, Eu) {
        var ju;
        const su = this.sink(),
          Uu = null !== (ju = Eu.half) && void 0 !== ju ? ju : ej;
        if (!su || this.live >= Ou.rd.MaxLiveKeys || this.nextKey > Ou.rd.MaxKey || !kj(Eu.pos, Uu)) return Kj;
        const Zu = this.nextKey,
          Xu = vj(function(uu) {
            var Eu, ju, su;
            const Uu = JSON.stringify({
              texture: "string" === typeof uu.texture ? uu.texture : "smokePuff",
              Mb: uu.Mb,
              minLifeTime: uu.minLifeTime,
              maxLifeTime: uu.maxLifeTime,
              minSize: uu.minSize,
              maxSize: uu.maxSize,
              minEmitPower: uu.minEmitPower,
              maxEmitPower: uu.maxEmitPower,
              emitRate: oj(uu.emitRate),
              gravity: null !== (Eu = uu.gravity) && void 0 !== Eu ? Eu : ej,
              dir1: null !== (ju = uu.dir1) && void 0 !== ju ? ju : Mj,
              dir2: null !== (su = uu.dir2) && void 0 !== su ? su : Mj,
              colorGradients: uu.colorGradients,
              blendMode: uu.blendMode
            });
            return wj.encode(Uu)
          }(uu), "createParticles", this.deps.onError);
        return Xu && (0, Ou.We)(su, 0, Zu, 0, Ou.rd.PresetNone, 0, Jj, dj, Xu) ? (this.nextKey++, this.live++, this.started = !0, new rj(this, this.session, Zu, uu, Uu)) : Kj
      }
      playEffect(uu) {
        const Eu = this.sink(),
          {
            pos1: ju,
            pos2: su
          } = uu;
        if (!Eu || !ju || !su) return;
        for (let Zu = 0; Zu < 3; Zu++) Jj[Zu] = Math.min(ju[Zu], su[Zu]), dj[Zu] = Math.abs(su[Zu] - ju[Zu]);
        if (!Number.isFinite(Jj[0] + Jj[1] + Jj[2] + dj[0] + dj[1] + dj[2])) return;
        const Uu = vj(wj.encode(JSON.stringify(uu, mj)), "playParticleEffect", this.deps.onError);
        Uu && (0, Ou.Te)(Eu, 0, 0, Ou.rd.PresetNone, Ou.rd.HasBox, 0, Jj, dj, Uu)
      }
      burstPreset(uu, Eu, ju) {
        const su = this.sink(),
          Uu = Math.min(Math.floor(ju), Ou.rd.MaxBurst);
        if (!su || !Object.hasOwn(Ou.Zb, uu) || !(Uu > 0)) return;
        const Zu = pj;
        for (let Xu = 0; Xu < 3; Xu++) Jj[Xu] = Eu[Xu] - Zu / 2, dj[Xu] = Zu;
        Number.isFinite(Jj[0] + Jj[1] + Jj[2]) && (0, Ou.Te)(su, 0, 0, Ou.Zb[uu], Ou.rd.HasBox, Uu, Jj, dj, Gj)
      }
      sessionEnded() {
        this.session++;
        const uu = this.started ? this.deps.cmd() : null;
        return this.started = !1, this.nextKey = 1, this.live = 0, !uu || (0, Ou.Xe)(uu, 0)
      }
      sinkFor(uu) {
        return uu === this.session ? this.deps.cmd() : null
      }
      stop(uu, Eu) {
        const ju = this.sinkFor(uu);
        ju && (0, Ou.Ye)(ju, 0, Eu) && this.live--
      }
    }
    class rj {
      constructor(uu, Eu, ju, su, Uu) {
        this.owner = uu, this.session = Eu, this.key = ju, this.half = void 0, this.rate = void 0, this.stopDelayMs = void 0, this.emitted = void 0, this.stopped = !1, this.freed = !1, this.half = [Math.abs(Uu[0]), Math.abs(Uu[1]), Math.abs(Uu[2])], this.rate = oj(su.emitRate), this.emitted = this.rate > 0;
        const Zu = su.maxLifeTime * gj * 1e3 + 250;
        this.stopDelayMs = Zu >= 0 ? Math.min(Zu, 2147483647) : 250
      }
      sink() {
        return this.stopped ? null : this.owner.sinkFor(this.session)
      }
      moveTo(uu, Eu) {
        const ju = this.sink();
        if (ju) {
          if (Eu)
            for (let uu = 0; uu < 3; uu++) this.half[uu] = Math.abs(Eu[uu]);
          kj(uu, this.half) && (0, Ou.$e)(ju, 0, this.key, Ou.rd.HasBox, Jj, dj, Gj)
        }
      }
      setEmitRate(uu) {
        const Eu = this.sink(),
          ju = oj(uu);
        Eu && ju !== this.rate && (0, Ou.$e)(Eu, 0, this.key, 0, ej, ej, Pj(ju)) && (this.rate = ju, this.emitted ||= ju > 0)
      }
      emit(uu) {
        const Eu = this.sink(),
          ju = Math.min(Math.floor(uu), Ou.rd.MaxBurst);
        Eu && ju > 0 && (0, Ou.Te)(Eu, 0, this.key, Ou.rd.PresetNone, 0, ju, ej, ej, Gj) && (this.emitted = !0)
      }
      emitPoints(uu, Eu, ju) {
        const su = this.sink(),
          Uu = Math.min(Math.floor(ju), Ou.rd.MaxPoints, Math.floor(Eu.length / 4));
        if (!su || !(Uu > 0) || !Number.isFinite(uu[0] + uu[1] + uu[2])) return;
        const Zu = new Uint8Array(Eu.buffer, Eu.byteOffset, Uu * Ou.rd.PointBytes);
        (0, Ou.Ve)(su, 0, this.key, Uu, uu, Zu) && (this.emitted = !0)
      }
      setDirections(uu, Eu) {
        const ju = this.sink();
        if (!ju || !Number.isFinite(uu[0] + uu[1] + uu[2] + Eu[0] + Eu[1] + Eu[2])) return;
        const su = wj.encode(JSON.stringify({
          dir1: [uu[0], uu[1], uu[2]],
          dir2: [Eu[0], Eu[1], Eu[2]]
        }));
        (0, Ou.$e)(ju, 0, this.key, 0, ej, ej, su)
      }
      stop() {
        const uu = this.sink();
        this.stopped = !0, uu && (this.emitted ? (this.rate > 0 && (0, Ou.$e)(uu, 0, this.key, 0, ej, ej, Pj(0)), setTimeout((() => {
          this.free()
        }), this.stopDelayMs)) : this.free())
      }
      dispose() {
        this.stopped = !0, this.free()
      }
      free() {
        this.freed || (this.freed = !0, this.owner.stop(this.session, this.key))
      }
    }
    const Qj = FE.m,
      ij = new TextDecoder;

    function Wj(uu, Eu) {
      const {
        serverIds: ju,
        kinds: su
      } = uu;
      let Uu = 0;
      for (let Zu = 0; Zu < ju.length; Zu++) {
        const uu = ju[Zu];
        if (uu !== Ou.Pc && !Gu(su[Zu])) {
          if (Uu === Eu.length) {
            const uu = new Int32Array(Math.max(64, 2 * Uu));
            uu.set(Eu), Eu = uu
          }
          Eu[Uu++] = uu
        }
      }
      return {
        ids: Eu,
        count: Uu
      }
    }

    function Sj(uu, Eu) {
      return uu.length >= Eu ? uu : new Int32Array(Math.max(Eu, 2 * uu.length))
    }

    function Ij(uu, Eu, ju, su) {
      for (let Uu = 0; Uu < ju; Uu += 4096) {
        const Zu = Math.min(4096, ju - Uu),
          Xu = uu.memoryView(Int32Array, uu.scratch(), Zu, "entity_info_batch's ids");
        if (!Xu) return !1;
        Xu.set(Eu.subarray(Uu, Uu + Zu));
        const lu = uu.queries.entityInfoBatch(Zu),
          qu = 4294967295 === lu ? null : uu.memoryData(uu.scratch(), lu, 4, "entity_info_batch's records");
        if (!qu) return !1;
        for (let uu = 0; uu + Ou.Lb.BYTES <= lu;) {
          const Eu = Ou.Lb.len(qu, uu);
          su(Ou.Lb.serverId(qu, uu), Fj(qu, uu, Eu)), uu += Ou.Lb.BYTES + (0, cu.xe)(Eu)
        }
      }
      return !0
    }

    function Fj(uu, Eu, ju) {
      var su, Uu, Zu;
      const Xu = Ou.Lb.kind(uu, Eu),
        lu = 0 === Xu ? null : pu(Xu);
      if (null === lu) return null;
      const qu = Ou.Lb.variation(uu, Eu),
        fu = Ou.Lb.pose(uu, Eu),
        Cu = Ou.Lb.meta(uu, Eu),
        bu = Ou.Lb.mesh(uu, Eu),
        cu = 0 !== (Ou.Lb.flags(uu, Eu) & Ou.Ib.HasOpts),
        Nu = Qj[lu];
      return Object.freeze({
        type: lu,
        variation: qu === Ou.Uc ? void 0 : null !== (su = null !== (Uu = null === Nu || void 0 === Nu ? void 0 : Nu[qu]) && void 0 !== Uu ? Uu : null === Nu || void 0 === Nu ? void 0 : Nu[0]) && void 0 !== su ? su : "default",
        pose: fu === Ou.cc ? void 0 : null !== (Zu = Ou.zb[fu]) && void 0 !== Zu ? Zu : Ou.zb[0],
        metaInfo: Cu === Ou.cc ? void 0 : Ou.Ec[Cu],
        meshKind: bu === Ou.cc ? void 0 : Ou.Cc[bu],
        meshOpts: cu ? ij.decode(new Uint8Array(uu.buffer, uu.byteOffset + Eu + Ou.Lb.BYTES, ju)) : void 0
      })
    }
    const Bj = 1,
      Lj = 2;
    class tj {
      constructor(uu) {
        this.deps = uu, this.wanted = 0, this.dl = !1, this.refused = !1
      }
      get on() {
        return this.dl
      }
      want(uu, Eu) {
        this.wanted = Eu ? this.wanted | uu : this.wanted & ~uu;
        const ju = 0 !== this.wanted;
        if (ju === this.dl) return;
        const su = this.deps.cmd();
        null !== su ? (0, Ou.Xf)(su, 0, ju ? 1 : 0) ? (this.dl = ju, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.dl = !1
      }
    }
    class xj {
      constructor(uu) {
        this.deps = uu, this.entries = new Map, this.complete = !1, this.refill = !1, this.midFrame = !1, this.pending = new Int32Array(64), this.pendingCount = 0, this.ids = new Int32Array(64)
      }
      get(uu) {
        var Eu;
        return this.complete || this.fill(), null !== (Eu = this.entries.get("string" === typeof uu ? uu : String(uu))) && void 0 !== Eu ? Eu : null
      }
      inCoreCall() {
        this.midFrame = !0
      }
      stale(uu) {
        if (this.complete) {
          if (this.pendingCount === this.pending.length) {
            const uu = new Int32Array(2 * this.pending.length);
            uu.set(this.pending), this.pending = uu
          }
          this.pending[this.pendingCount++] = uu
        }
      }
      removed(uu) {
        this.entries.size > 0 && this.entries.delete(String(uu))
      }
      refresh() {
        const uu = this.pendingCount;
        if (this.pendingCount = 0, this.midFrame = !1, !this.deps.watch.on || this.refill) return this.complete = !1, void(this.refill = !1);
        if (uu > 0 && this.complete) {
          const {
            api: Eu
          } = this.deps;
          let ju = 0;
          const su = this.ids = Sj(this.ids, uu);
          for (let Uu = 0; Uu < uu; Uu++) {
            const uu = this.pending[Uu],
              Zu = Eu.indexById.get(uu);
            void 0 === Zu || Gu(Eu.kinds[Zu]) ? this.entries.delete(String(uu)) : su[ju++] = uu
          }
          ju > 0 && !this.batch(su, ju) && (this.complete = !1)
        }
      }
      sessionEnded() {
        this.entries.clear(), this.complete = !1, this.refill = !1, this.midFrame = !1, this.pendingCount = 0, this.deps.watch.want(Bj, !1)
      }
      fill() {
        const {
          api: uu
        } = this.deps;
        if (this.complete = !0, this.pendingCount = 0, this.entries.clear(), this.deps.isSessionLive()) {
          const {
            watch: uu
          } = this.deps, Eu = uu.on;
          uu.want(Bj, !0), !Eu && uu.on && (this.refill = this.midFrame)
        }
        const {
          ids: Eu,
          count: ju
        } = Wj(uu, this.ids);
        this.ids = Eu, ju > 0 && !this.batch(Eu, ju) && (this.refill = !0)
      }
      batch(uu, Eu) {
        return Ij(this.deps.api, uu, Eu, ((uu, Eu) => {
          null === Eu ? this.entries.delete(String(uu)) : this.entries.set(String(uu), Eu)
        }))
      }
    }
    var Tj = ju(4976);

    function Hj(uu) {
      if ("message" !== uu.type || uu.VC !== Tj.mc.NewClientOptions || uu.payloadKind !== cu.ic.Msgpack) return null;
      const Eu = (0, Qu.d)(uu.payload);
      if (null === Eu || "object" !== typeof Eu || Array.isArray(Eu)) throw new Error("NewClientOptions whose body isn't an object of options");
      return Eu
    }
    var Aj = ju(1298),
      nj = ju(37011);

    function yj(uu, Eu, ju, su, Uu, Zu, lu) {
      var qu, fu, Cu;
      switch (uu) {
        case Ou.Rd.ToggleMenu: {
          const uu = Ou.L[Eu];
          Xu.h.TY("toggleMenu", void 0 === uu ? "inventory" : `inventory|${uu}`);
          break
        }
        case Ou.Rd.EditBoard:
          Xu.h.TY("EditBoard", {
            pos: 0 === Eu ? null : ju
          });
          break;
        case Ou.Rd.EditCodeBlock:
        case Ou.Rd.ViewCodeBlock:
          Xu.h.TY("EditCodeBlock", {
            pos: ju,
            canChangePos: uu === Ou.Rd.EditCodeBlock
          });
          break;
        case Ou.Rd.EditCustomLobbyBlock:
          Xu.h.TY("EditCustomLobbyBlock", {
            pos: ju
          });
          break;
        case Ou.Rd.OpenIronChest:
          Xu.h.TY("OpenIronChest", {
            pos: ju
          });
          break;
        case Ou.Rd.EditNameTag:
          Xu.h.TY("EditNameTag", null !== (qu = null === (fu = Uu.dl()) || void 0 === fu || null === (Cu = fu.attributes.customAttributes) || void 0 === Cu ? void 0 : Cu.text) && void 0 !== qu ? qu : "");
          break;
        case Ou.Rd.EditBook: {
          var bu, cu, Yu;
          const uu = null === (bu = Uu.dl()) || void 0 === bu ? void 0 : bu.attributes;
          Xu.h.TY("EditBook", {
            pages: (0, Aj.N)(null === uu || void 0 === uu || null === (cu = uu.customAttributes) || void 0 === cu ? void 0 : cu.pages),
            title: null !== (Yu = null === uu || void 0 === uu ? void 0 : uu.customDisplayName) && void 0 !== Yu ? Yu : "Title",
            isPublished: !(null === uu || void 0 === uu || !uu.customDescription)
          });
          break
        }
        case Ou.Rd.CantChangeBlock:
          ! function(uu, Eu) {
            const ju = Eu.getClientOption("cantChangeError"),
              su = Eu.getClientOption(uu ? "cantBuildError" : "cantBreakError"),
              Uu = uu ? ju : su;
            (Eu.getClientOption("canChange") || Uu || "You cannot modify this block" !== ju) && Xu.h.TY("showBottomMessage", {
              message: su || ju,
              type: "Error"
            })
          }(1 === Eu, Zu);
          break;
        case Ou.Rd.MiddleBarStart:
          Xu.h.TY("middleScreenBarInitiate", {
            duration: su,
            LU: 1 === ju[0],
            horizBarRemOffset: Eu
          });
          break;
        case Ou.Rd.MiddleBarStop:
          Xu.h.TY("middleScreenBarRemove");
          break;
        case Ou.Rd.Hitmarker:
          Xu.h.TY("localGunHitmarker", {
            FE: 1 === Eu
          });
          break;
        case Ou.Rd.ShotsLeft:
          Xu.h.TY("localPlayerNewShotsLeft", su);
          break;
        case Ou.Rd.AimingOverlay:
          Xu.h.TY("aimingOverlay", 3 === (3 & Eu) ? "sniper" : "none");
          break;
        case Ou.Rd.BottomMessage:
          Xu.h.TY("showBottomMessage", JSON.parse(lu()));
          break;
        case Ou.Rd.Crosshair:
          Uu.inaccuracy = (0, iu.e)(su), (0, nj.b)().crosshairAccuracy(Uu.inaccuracy);
          break;
        case Ou.Rd.ChargeStage:
          break;
        case Ou.Rd.EmoteWheelClose:
          Xu.h.TY("requestEmoteWheelClose");
          break;
        case Ou.Rd.BlockMined:
          Xu.h.TY("localBlockMined");
          break;
        default:
          throw new Nu.e(`UiEvent of no kind: what ${uu}`)
      }
    }
    var zj = ju(38379),
      Rj = ju(34557),
      us = ju(2019),
      Es = ju(37202),
      ss = ju(34565),
      Us = ju(4962);
    const Zs = 10,
      Xs = {
        player: [],
        chestOrCreative: [],
        chest: null,
        creative: !1,
        selectedSlot: 0,
        freeSlots: 0
      },
      ls = {
        items: [],
        ammo: 0,
        selectedSlot: 0
      },
      qs = {
        gun: !1,
        aimable: !1,
        chargeName: null
      };

    function fs(uu, Eu) {
      let ju, su = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        Uu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      const Zu = () => (ju = (0, us.o)(ju, Eu()), ju);
      return {
        current: Zu,
        watch(Eu) {
          const ju = () => {
              Eu(Zu())
            },
            Xu = [uu.watch(ju)];
          return null !== su && Xu.push((0, us.q)((uu => {
            uu.some(su) && ju()
          }))), null !== Uu && Xu.push(Uu(ju)), () => {
            for (const uu of Xu) uu()
          }
        }
      }
    }

    function Cs(uu) {
      return uu && {
        name: uu.name,
        amount: uu.amount,
        attributes: uu.attributes
      }
    }
    const bs = new WeakMap;

    function cs(uu) {
      let Eu = bs.get(uu);
      return void 0 === Eu && (Eu = (0, ss.creativeItemIds)().map((Eu => ({
        name: uu.nameOfId(Eu),
        amount: uu.isStackableId(Eu) ? 1 : null,
        attributes: (0, zj.b)("Gun" === (0, ss.itemTypeOf)(Eu) ? {
          type: "Gun",
          clipSize: (0, ss.clipSizeOf)(Eu)
        } : void 0)
      }))), bs.set(uu, Eu)), Eu
    }

    function Ns(uu, Eu, ju, su) {
      const Uu = Eu => (uu.flush(su), Eu),
        Zu = ju => {
          var su, Uu, Zu, Xu, lu, qu, fu;
          const Cu = uu.slot(ju);
          if (!Cu) return null;
          const {
            rootName: bu,
            metaStr: cu
          } = Eu.getMetaInfo(Cu.name);
          return {
            name: Cu.name,
            amount: Cu.amount,
            attributes: Cu.attributes,
            instance: uu.instance(ju),
            displayName: null !== (su = Cu.attributes.customDisplayName) && void 0 !== su ? su : Eu.getDisplayName(bu),
            requiresAmmo: "RequiresAmmo" === cu,
            clipSize: null !== (Uu = null !== (Zu = null === (Xu = Cu.attributes.customAttributes) || void 0 === Xu || null === (lu = Xu.gunStats) || void 0 === lu ? void 0 : lu.clipSize) && void 0 !== Zu ? Zu : null === (qu = Eu.getGunStats(bu)) || void 0 === qu ? void 0 : qu.clipSize) && void 0 !== Uu ? Uu : null === (fu = Cu.typeObj) || void 0 === fu ? void 0 : fu.clipSize
          }
        },
        lu = function(uu, Eu) {
          let ju = null,
            su = {
              focus: null,
              recipes: [],
              detail: null
            },
            Uu = -1;
          const Zu = new Set;
          return {
            read() {
              var Zu, Xu;
              if (null === ju) return null !== su.focus && (su = {
                ...su,
                focus: null
              }), su;
              if (su.focus === ju && Uu === uu.changes) return su;
              if (Uu = uu.changes, 0 === uu.length) return su = {
                focus: ju,
                recipes: [],
                detail: null
              }, su;
              let lu = 0;
              if (null !== ju.recipe) try {
                lu = Eu.getItemId(ju.recipe.name)
              } catch {}
              const qu = uu.craftingView(ju.station, lu, null !== (Zu = null === (Xu = ju.recipe) || void 0 === Xu ? void 0 : Xu.dC) && void 0 !== Zu ? Zu : 0);
              return su = null === qu ? {
                focus: ju,
                recipes: [],
                detail: null
              } : function(uu, Eu, ju) {
                let su = Ou.ib.BYTES;
                const Uu = [];
                for (let Cu = Ou.ib.recipes(uu, 0); Cu > 0; Cu--) {
                  const ju = Ou.bb.flags(uu, su),
                    Zu = {
                      name: Eu.nameOfId(Ou.bb.item(uu, su)),
                      dC: Ou.bb.recipe(uu, su),
                      requires: [],
                      produces: Ou.bb.produces(uu, su),
                      haveIngredients: 0 !== (ju & Ou.ab.HaveIngredients),
                      listed: 0 !== (ju & Ou.ab.Listed)
                    };
                  let Xu = Ou.bb.requires(uu, su);
                  for (su += Ou.bb.BYTES; Xu > 0; Xu--) {
                    const ju = Ou.cb.items(uu, su);
                    Zu.requires.push({
                      items: hs(uu, su + Ou.cb.BYTES, ju, Eu),
                      amt: Ou.cb.amount(uu, su)
                    }), su += Ou.cb.BYTES + 2 * ju
                  }
                  Uu.push(Zu)
                }
                const Zu = Ou.ib.flags(uu, 0);
                if (null === ju.recipe || 0 === (Zu & Ou.eb.Detail)) return {
                  focus: ju,
                  recipes: Uu,
                  detail: null
                };
                const Xu = {},
                  lu = {};
                for (let Cu = Ou.ib.ingredients(uu, 0); Cu > 0; Cu--) {
                  const ju = Ou.Y.item(uu, su),
                    Uu = Ou.Y.from(uu, su),
                    Zu = Ou.Y.amount(uu, su);
                  su += Ou.Y.BYTES;
                  const qu = Uu === Ou.H ? null : hs(uu, su, Uu, Eu);
                  if (null !== qu && (su += 2 * Uu), 0 === ju) continue;
                  const fu = Eu.nameOfId(ju);
                  Xu[fu] = Zu, null !== qu && (lu[fu] = qu)
                }
                const {
                  name: qu,
                  dC: fu
                } = ju.recipe;
                return {
                  focus: ju,
                  recipes: Uu,
                  detail: {
                    name: qu,
                    dC: fu,
                    craftAllTimes: Ou.ib.craftAllTimes(uu, 0),
                    roomForOne: 0 !== (Zu & Ou.eb.RoomForOne),
                    resultStackable: Boolean(Eu.getItemStat(qu, "stackable")),
                    amounts: Xu,
                    ingredientsCraftedFrom: lu
                  }
                }
              }(qu, Eu, ju), su
            },
            setFocus(uu) {
              ju = uu;
              for (const Eu of [...Zu]) Eu()
            },
            watchFocus: uu => (Zu.add(uu), () => {
              Zu.delete(uu)
            })
          }
        }(uu, Eu);
      return {
        states: {
          inventory: fs(uu, (() => {
            const ju = uu.length;
            if (0 === ju) return Xs;
            const su = [];
            for (let Eu = 0; Eu < Ou.id; Eu++) su.push(Cs(uu.slot(Eu)));
            const Uu = uu.slotIcon,
              Zu = su[uu.selectedSlot];
            0 !== Uu && Zu && (su[uu.selectedSlot] = {
              ...Zu,
              icon: Eu.nameOfId(Uu)
            });
            const Xu = !0 === Eu.getClientOption("creative");
            let lu = [],
              qu = null;
            if (ju > Ou.id) {
              for (let Eu = Ou.id; Eu < ju; Eu++) lu.push(Cs(uu.slot(Eu)));
              qu = {
                type: null,
                pos: [...uu.RU],
                numSlots: ju - Ou.id,
                ironChest: null
              }
            } else Xu && (lu = cs(Eu));
            return {
              player: su,
              chestOrCreative: lu,
              chest: qu,
              creative: Xu,
              selectedSlot: uu.selectedSlot,
              freeSlots: uu.freeSlots()
            }
          }), (0, us.k)("creative")),
          hotbar: fs(uu, (() => {
            if (0 === uu.length) return ls;
            const Eu = [];
            for (let uu = 0; uu < Zs; uu++) Eu.push(Zu(uu));
            return {
              items: Eu,
              ammo: uu.amountOf("Ammo"),
              selectedSlot: uu.selectedSlot
            }
          }), (0, us.i)("DisplayName", "GunStats")),
          crafting: fs(uu, lu.read, null, lu.watchFocus),
          heldItemAim: fs(uu, (() => {
            var Eu;
            if (!ju()) return qs;
            const su = null === (Eu = uu.dl()) || void 0 === Eu ? void 0 : Eu.typeObj,
              Uu = "Gun" === (null === su || void 0 === su ? void 0 : su.type);
            return {
              gun: Uu,
              aimable: Uu || !0 === (null === su || void 0 === su ? void 0 : su.showsAimingUi),
              chargeName: "Chargeable" === (null === su || void 0 === su ? void 0 : su.type) ? su.name : null
            }
          }), null, (uu => function(uu, Eu) {
            let ju = uu();
            return (0, Us.u)((() => {
              const su = uu();
              su !== ju && (ju = su, Eu(su))
            }))
          }(ju, uu)))
        },
        events: {
          hotbarSlotRequested: (0, us.e)("setSelectedInventorySlotI"),
          hotbarScrolled: (0, us.e)("ScrollInventorySlot"),
          numberKeyPressed: (0, us.e)("numkeyPressed"),
          inventoryDropRequested: (0, us.e)("DropInvenItem"),
          chestToggled: (0, us.e)("chestToggleFromServer"),
          chestRefreshed: (0, us.e)("chestRefreshedFromServer", Ys),
          inventorySynced: (0, us.e)("syncedInvenFromServer", Ys),
          enchantingTableOpened: (0, us.e)("enchantingTable", (uu => {
            let {
              position: ju,
              ul: su
            } = uu;
            return {
              position: [...ju],
              blockName: Eu.getMetaInfo(su).rootName
            }
          }))
        },
        commands: {
          selectHotbarSlot(Eu) {
            uu.selectSlot(Eu), uu.flush(su)
          },
          removeInventoryItem(Eu) {
            let {
              slot: ju,
              amount: su,
              drop: Zu
            } = Eu;
            return Uu(uu.remove(ju, su, Zu))
          },
          swapInventorySlots(Eu) {
            let {
              a: ju,
              b: su
            } = Eu;
            return Uu(uu.swap(ju, su))
          },
          moveInventoryItem(Eu) {
            let {
              from: ju,
              to: su,
              amount: Zu
            } = Eu;
            return Uu(uu.move(ju, su, Zu))
          },
          quickMoveInventoryItem(Eu) {
            let {
              slot: ju,
              start: su,
              end: Zu,
              amount: Xu
            } = Eu;
            return Uu(uu.quickMove(ju, su, Zu, Xu))
          },
          closeChest() {
            uu.closeChest(), uu.flush(su), Xu.h.TY("chestClosedByPlayer")
          },
          focusCrafting(uu) {
            lu.setFocus(uu)
          },
          craftRecipe(Eu) {
            let {
              name: ju,
              dC: su,
              times: Zu
            } = Eu;
            return Uu(uu.craft(ju, su, Zu))
          },
          salvageItem(Eu) {
            let {
              slot: ju,
              name: su,
              amount: Zu
            } = Eu;
            return Uu(uu.salvage(ju, su, Zu))
          },
          enchantItem(Eu) {
            let {
              slot: ju,
              level: su,
              tablePos: Uu
            } = Eu;
            uu.enchant(ju, su, Uu)
          }
        },
        queries: {
          enchantingOffer(ju) {
            let {
              slot: su,
              blockName: Uu
            } = ju;
            return function(uu, Eu, ju, su) {
              const Uu = uu.slot(ju);
              if (!Uu || !Eu.getClientOption("canCraft") || !(0, Rj.q)(su) || (0, Rj.o)(Uu.attributes)) return Os;
              const Zu = (0, ss.enchantmentPerksOf)(Eu.getItemId(Uu.name));
              if (0 === Zu.length) return Os;
              const Xu = [];
              for (let lu = 0; lu < Es.c; lu++) {
                const {
                  commonProb: uu,
                  uncommonProb: Eu,
                  rareProb: ju,
                  epicProb: Uu,
                  legendaryProb: Zu,
                  level: qu
                } = (0, Rj.f)(su, lu);
                Xu.push({
                  level: qu,
                  odds: [uu, Eu, ju, Uu, Zu].map((uu => 100 * uu))
                })
              }
              return {
                perks: [...Zu],
                options: Xu
              }
            }(uu, Eu, su, Uu)
          }
        }
      }
    }
    const Os = Object.freeze({
      perks: [],
      options: []
    });

    function Ys() {
      return null
    }

    function hs(uu, Eu, ju, su) {
      const Uu = [];
      for (let Zu = 0; Zu < ju; Zu++) {
        const ju = uu.getUint16(Eu + 2 * Zu, !0);
        0 !== ju && Uu.push(su.nameOfId(ju))
      }
      return Uu
    }
    class Ds {
      constructor(uu) {
        this.api = uu, this.positions = new Map, this.targeted = {
          I3: 0,
          position: [0, 0, 0],
          normal: [0, 0, 0],
          xY: [0, 0, 0]
        }, this.hasTarget = !1, this.breaking = [0, 0, 0], this.isBreaking = !1
      }
      position(uu) {
        let Eu = this.positions.get(uu);
        return Eu || (this.api.checkValid(uu) || this.api.isLocal(uu) ? (Eu = [NaN, NaN, NaN], this.api.readPosition(uu, Eu), this.positions.set(uu, Eu), Eu) : null)
      }
      muu() {
        return this.hasTarget ? this.targeted : null
      }
      breakingPosition() {
        return this.isBreaking ? this.breaking : null
      }
      refresh() {
        for (const [Eu, ju] of this.positions) this.api.readPosition(Eu, ju) || this.api.checkValid(Eu) || this.api.isLocal(Eu) || this.positions.delete(Eu);
        const uu = this.api.apiView;
        if (this.refreshTarget(), this.isBreaking = 0 !== (Ou.u.playerFlags(uu, 0) & Ou.td.Breaking) && Ou.u.breakingProgress(uu, 0) >= 0, this.isBreaking)
          for (let Eu = 0; Eu < 3; Eu++) this.breaking[Eu] = Ou.u.breakingPos(uu, 0, Eu)
      }
      refreshTarget() {
        const uu = this.api.apiView,
          Eu = Ou.u.targetBlockId(uu, 0);
        if (this.hasTarget = Eu !== Ou.Tc, this.hasTarget) {
          const ju = this.targeted;
          ju.I3 = Eu;
          for (let Eu = 0; Eu < 3; Eu++) ju.position[Eu] = Ou.u.targetBlock(uu, 0, Eu), ju.normal[Eu] = Ou.u.targetNormal(uu, 0, Eu), ju.xY[Eu] = Ou.u.targetAdjacent(uu, 0, Eu)
        }
      }
      despawned(uu) {
        const Eu = this.positions.get(uu);
        Eu && !this.api.isLocal(uu) && (Eu.fill(NaN), this.positions.delete(uu))
      }
    }
    var gs = ju(40883),
      Ms = ju(40864),
      es = ju(36770),
      Gs = ju(37194);
    const ps = 1,
      ws = 2;
    class ds {
      constructor() {
        this.game = new Gs.f, this.client = new Gs.f, this.dl = 0, this.movesFly = null
      }
      setGame(uu) {
        if (null === uu || "object" !== typeof uu) return !1;
        const {
          key: Eu,
          value: ju
        } = uu;
        return "string" === typeof Eu && (this.game.setBooleanType(Eu, Boolean(ju)), !0)
      }
      setClient(uu, Eu) {
        this.client.setBooleanType(uu, Eu)
      }
      clearGame() {
        this.game = new Gs.f, this.movesFly = null
      }
      setMovesFly(uu) {
        this.movesFly = uu
      }
      perms() {
        return (this.game._getTotalBooleanVal() ? ps : 0) | (this.client._getTotalBooleanVal() ? ws : 0)
      }
      write(uu) {
        const Eu = this.perms(),
          {
            movesFly: ju
          } = this;
        if (Eu === this.dl && null === ju) return !0;
        let su = Ou.Ob.Keep;
        return null !== ju && (su = ju ? Ou.Ob.On : Ou.Ob.Off), !(!uu || !(0, Ou.je)(uu, 0, su, Eu, ju ? 1 : 0)) && (this.dl = Eu, this.movesFly = null, !0)
      }
    }
    class as {
      constructor(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 35;
        this.api = uu, this.screenBandPct = void 0, this.clipX = 0, this.clipY = 0, this.clipW = 0, this.eye = [0, 0, 0], this.forward = [0, 0, 1], this.along = [0, 0, 0], this.screenBandPct = {
          x: lu.b,
          get y() {
            return Eu()
          }
        }
      }
      get hasView() {
        const uu = this.api.apiView,
          Eu = Ou.u.viewProj;
        return 0 !== Eu(uu, 0, 3) || 0 !== Eu(uu, 0, 7) || 0 !== Eu(uu, 0, 11) || 0 !== Eu(uu, 0, 15)
      }
      get cameraPosition() {
        const uu = this.api.apiView,
          {
            eye: Eu
          } = this;
        for (let ju = 0; ju < 3; ju++) Eu[ju] = Ou.u.eye(uu, 0, ju);
        return Eu
      }
      get cameraDirection() {
        const uu = this.api.apiView,
          Eu = Ou.u.viewProj,
          ju = Eu(uu, 0, 3),
          su = Eu(uu, 0, 7),
          Uu = Eu(uu, 0, 11),
          Zu = Math.hypot(ju, su, Uu),
          {
            forward: Xu
          } = this;
        return Zu > 0 && (Xu[0] = ju / Zu, Xu[1] = su / Zu, Xu[2] = Uu / Zu), Xu
      }
      get cameraHeading() {
        return Ou.u.heading(this.api.apiView, 0)
      }
      get cameraPitch() {
        return Ou.u.pitch(this.api.apiView, 0)
      }
      get tanHalfFovX() {
        return Ou.u.tanHalfFovX(this.api.apiView, 0)
      }
      get tanHalfFovY() {
        return Ou.u.tanHalfFovY(this.api.apiView, 0)
      }
      projectWorldPosToScreenPos(uu) {
        this.clip(uu);
        const {
          clipX: Eu,
          clipY: ju,
          clipW: su
        } = this;
        if (su > 0) {
          const uu = Eu / su * 50,
            Uu = -ju / su * 50;
          return Math.abs(uu) <= this.screenBandPct.x && Math.abs(Uu) <= this.screenBandPct.y ? {
            x: 50 + uu,
            y: 50 + Uu
          } : this.clampToBand(uu, Uu)
        }
        const Uu = this.cameraPosition,
          Zu = Math.hypot(uu[0] - Uu[0], uu[1] - Uu[1], uu[2] - Uu[2]),
          Xu = this.api.apiView,
          lu = Ou.u.viewProj,
          qu = Zu > 0 ? Eu / Zu : 0,
          fu = Zu > 0 ? -ju / Zu : 0,
          Cu = Math.hypot(lu(Xu, 0, 1), lu(Xu, 0, 5), lu(Xu, 0, 9)),
          bu = qu / Math.hypot(lu(Xu, 0, 0), lu(Xu, 0, 4), lu(Xu, 0, 8)),
          cu = fu / Cu,
          Nu = !(Math.abs(bu) >= .001 || Math.abs(cu) >= .001);
        return this.clampToBand(qu, Nu ? -(Cu || 1) : fu)
      }
      projectDirectionToScreenPos(uu) {
        if (!this.hasView) return;
        const Eu = this.cameraPosition,
          ju = this.along;
        for (let su = 0; su < 3; su++) ju[su] = Eu[su] + 10 * uu[su];
        return this.projectWorldPosToScreenPos(ju)
      }
      projectWorldPosToViewport(uu) {
        this.clip(uu);
        const {
          clipX: Eu,
          clipY: ju,
          clipW: su
        } = this;
        return su > 0 ? {
          x: 50 + Eu / su * 50,
          y: 50 - ju / su * 50
        } : null
      }
      clip(uu) {
        const Eu = this.api.apiView,
          ju = uu[0] - Ou.u.origin(Eu, 0, 0),
          su = uu[1] - Ou.u.origin(Eu, 0, 1),
          Uu = uu[2] - Ou.u.origin(Eu, 0, 2),
          Zu = Ou.u.viewProj;
        this.clipX = Zu(Eu, 0, 0) * ju + Zu(Eu, 0, 4) * su + Zu(Eu, 0, 8) * Uu + Zu(Eu, 0, 12), this.clipY = Zu(Eu, 0, 1) * ju + Zu(Eu, 0, 5) * su + Zu(Eu, 0, 9) * Uu + Zu(Eu, 0, 13), this.clipW = Zu(Eu, 0, 3) * ju + Zu(Eu, 0, 7) * su + Zu(Eu, 0, 11) * Uu + Zu(Eu, 0, 15)
      }
      clampToBand(uu, Eu) {
        return (0, lu.c)(uu, Eu, this.screenBandPct.x, this.screenBandPct.y)
      }
    }
    var Ps = ju(4983);
    const os = new TextEncoder,
      ks = new Uint8Array(Ou.N * Ou.M);
    class ms {
      constructor() {
        this.buttons = [], this.dl = !0
      }
      set(uu) {
        this.buttons = uu, this.dl = !1
      }
      attached() {
        this.dl = 0 === this.buttons.length
      }
      write(uu) {
        if (this.dl) return;
        const Eu = new Uint8Array(Ou.N),
          ju = new Uint8Array(Ou.N);
        let su = 0,
          Uu = 0;
        for (const {
            id: Zu,
            keycode: Xu
          }
          of this.buttons) {
          if (su === Ou.N) break;
          const {
            read: uu,
            written: lu
          } = os.encodeInto(Zu, ks.subarray(Uu, Uu + Ou.M));
          if (uu < Zu.length) continue;
          const qu = Ps.k[Xu];
          Eu[su] = "number" === typeof qu ? qu : 0, ju[su] = lu, su++, Uu += lu
        }
        this.dl = (0, Ou.$d)(uu, 0, su, Eu, ju, ks.subarray(0, Uu))
      }
    }

    function vs(uu, Eu, ju) {
      const su = os.encode(Eu);
      return su.length <= Ou.M && function(uu, Eu, ju, su) {
        return (0, tE.e)(), (0, Ou.df)(uu, Eu, ju, su)
      }(uu, 0, ju ? 1 : 0, su)
    }
    const Ks = new TextDecoder,
      Vs = new TextEncoder,
      rs = new Uint8Array(0),
      Qs = [0, 0, 0],
      is = {
        off: Ou.vd.Off,
        key: Ou.vd.Key,
        touch: Ou.vd.Touch
      };
    class Ws {
      constructor(uu) {
        var Eu;
        this.options = uu, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tickers = [], this.renderers = [], this.receivers = [], this.failures = [], this.vetoSet = !1, this.hooksSet = !1, this.writtenPublicLobby = !1, this.promptWatch = "off", this.promptWatchSent = "off", this.customButtons = new ms, this.generation = 0, this.sessionLive = !1, this.boundId = 0, this.session = null, this.activeConn = 0, this.closedThrough = 0, this.openSocket = 0, this.socketLeftSinceAttach = !1, this.ticks = 0, this.zoomUnshown = !1, this.zoomHeld = !1, this.overflowGen = 0, this.resyncOwed = !1, this.zoom = 0, this.pendingZoom = null, this.highlight = null, this.highlightOwed = !1, this.cmd = null, this.freeCam = new ds, this.stopped = () => !1, this.onError = void 0, this.api = void 0, this.tables = void 0, this.itemSources = null, this.fault = void 0, this.HN = uu => {
          if ((0, Nu.k)(uu)) throw uu;
          this.onError(uu)
        }, this.api = uu.api, this.tables = uu.tables, this.onError = null !== (Eu = uu.onError) && void 0 !== Eu ? Eu : uu => {
          console.error("Error in client game callback", uu)
        }, this.renderFrame = new as(this.api, uu.screenBandY), this.live = new Ds(this.api), this.chunks = new lE(this.api.memory, (() => this.api.apiView)), this.items = new Dj({
          api: this.api,
          tables: uu.tables,
          cmd: () => this.cmd,
          onError: this.onError,
          beforeOp: uu.beforeOp
        });
        const ju = () => this.stopped() ? null : this.cmd,
          su = () => this.sessionLive;
        this.entityInfoWatch = new tj({
          cmd: ju,
          onError: this.onError
        }), this.entityInfo = new xj({
          api: this.api,
          watch: this.entityInfoWatch,
          isSessionLive: su
        }), this.particles = new Vj({
          cmd: ju,
          isSessionLive: su,
          onError: this.onError
        }), this.clientApi = new qj({
          api: this.api,
          live: this.live,
          chunks: this.chunks,
          items: this.items,
          entityInfo: this.entityInfo,
          particles: this.particles,
          tables: uu.tables,
          cmd: ju,
          sendCmd: () => this.sendCmd(),
          isSessionLive: su,
          beforeWrite: () => {
            var Eu;
            if (this.stopped()) return !1;
            const ju = this.generation;
            return !1 !== (null === (Eu = uu.beforeWrite) || void 0 === Eu ? void 0 : Eu.call(uu)) && ju === this.generation
          },
          playerDbId: () => {
            const uu = this.session;
            if (null === uu) throw new Error("No game session has started, so the local player has no DB id");
            return uu.playerDbId
          },
          playSound: uu.playSound,
          preloadSounds: uu.preloadSounds,
          setLocalOptions: uu.setLocalOptions,
          hasPackModel: uu.hasPackModel
        }), this.scriptedCamera = new Tu({
          api: this.api,
          cmd: () => this.stopped() ? null : this.cmd,
          screen: uu.cameraScreen,
          showFacing: uu.showCameraFacing
        })
      }
      get itemBridgeSources() {
        return this.itemSources ??= Ns(this.items, this.tables, (() => this.localPlayerAlive()), this.HN), this.itemSources
      }
      get isSessionLive() {
        return this.sessionLive
      }
      get isCoreRunning() {
        return this.sessionLive && !this.stopped()
      }
      localPlayerAlive() {
        return !this.sessionLive || this.stopped() || !1 !== this.api.isAlive(this.boundId)
      }
      localDeaths() {
        return this.isCoreRunning ? this.api.localDeaths() : null
      }
      clickCodeBlock(uu) {
        const Eu = this.sessionLive ? this.sendCmd() : null;
        return null !== Eu && (ju = Eu, su = 0, Uu = uu[0], Zu = uu[1], Xu = uu[2], (0, tE.e)(), (0, Ou.ge)(ju, su, Uu, Zu, Xu));
        var ju, su, Uu, Zu, Xu
      }
      cameraZoom() {
        return this.zoom
      }
      setCameraZoom(uu) {
        const Eu = this.liveCmd();
        return null === Eu ? (this.pendingZoom = uu, !1) : (this.pendingZoom = null, (0, Ou.Tf)(Eu, 0, uu, 1))
      }
      Wm(uu) {
        const Eu = this.stopped() ? null : this.cmd;
        return null !== Eu && (0, Ou.Of)(Eu, 0, uu ? 1 : 0)
      }
      respawn() {
        const uu = this.sessionLive ? this.sendCmd() : null;
        return null !== uu && (Eu = uu, ju = 0, (0, tE.e)(), (0, Ou.pf)(Eu, ju));
        var Eu, ju
      }
      bindCustomButtonKeys(uu) {
        this.customButtons.set(uu)
      }
      pressCustomButton(uu, Eu) {
        const ju = this.sessionLive ? this.sendCmd() : null;
        return null !== ju && vs(ju, uu, Eu)
      }
      padMove(uu, Eu, ju, su, Uu, Zu) {
        const Xu = this.liveCmd();
        return null !== Xu && (0, Ou.Qe)(Xu, 0, uu, Eu, ju, su, Uu, Zu)
      }
      thirdPersonFor(uu) {
        const Eu = this.liveCmd();
        return null !== Eu && (0, Ou.Wf)(Eu, 0, null !== uu && void 0 !== uu ? uu : 1 / 0)
      }
      send(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const su = 0 !== this.openSocket || this.sessionLive ? this.sendCmd() : null;
        return null !== su && xE(su, ju ? cu.td : 0, uu, (0, Qu.f)(Eu))
      }
      socketAttached(uu) {
        this.openSocket = uu, this.socketLeftSinceAttach = !1
      }
      socketDetached(uu) {
        this.openSocket === uu && (this.openSocket = 0)
      }
      socketLeft() {
        this.openSocket = 0, this.socketLeftSinceAttach = !0
      }
      sendCmd() {
        return this.socketLeftSinceAttach || this.stopped() ? null : this.cmd
      }
      liveCmd() {
        return this.isCoreRunning ? this.cmd : null
      }
      attach(uu) {
        const Eu = () => uu.isStopped;
        this.stopped = Eu, this.cmd = uu.rings.cmd, this.promptWatchSent = "off", this.writePromptWatch(), this.customButtons.attached(), this.writeCustomButtons();
        const ju = this.api.apiView;
        this.overflowGen = Ou.u.eventOverflowGen(ju, 0), this.resyncOwed = 0 !== Ou.u.eventOverflowMask(ju, 0), uu.setGameHost(this), uu.setEventWalker((uu => {
          this.api.walk(uu, this, Eu)
        }))
      }
      watchPromptPick(uu) {
        this.promptWatch = uu, this.writePromptWatch()
      }
      get promptEntity() {
        return "off" === this.promptWatch || this.stopped() ? null : Ss(Ou.u.promptEntity(this.api.apiView, 0))
      }
      get interactLabel() {
        return "touch" !== this.promptWatch || this.stopped() ? Ou.mc.None : Ou.u.interactLabel(this.api.apiView, 0)
      }
      get interactIcon() {
        return "touch" !== this.promptWatch || this.stopped() ? 0 : Ou.u.interactIcon(this.api.apiView, 0)
      }
      closeGame() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        (0 === uu || uu >= this.openSocket) && (this.openSocket = 0), this.closedThrough = Math.max(this.closedThrough, uu, this.activeConn), this.activeConn = 0, this.endSession(), this.endGameGrants(), this.dropGameCamera()
      }
      gameCamera(uu) {
        0 !== this.activeConn && this.scriptedCamera.settingsChanged(uu)
      }
      netEvent(uu) {
        "connection" === uu.type ? uu.phase === cu.z.Activated && uu.conn !== this.activeConn && uu.conn > this.closedThrough ? (this.endSession(), this.activeConn = uu.conn, this.endGameGrants(), this.dropGameCamera()) : uu.phase !== cu.z.Left && uu.phase !== cu.z.Closed || uu.conn !== this.activeConn ? uu.phase === cu.z.Resumed && 0 !== this.activeConn && uu.conn > this.closedThrough && (this.activeConn = uu.conn) : this.closeGame() : uu.conn === this.activeConn && 0 !== uu.conn && (uu.VC === Ms.u ? this.gunHit(uu.payload) : uu.VC === Tj.mc.EditItemCraftingRecipes || uu.VC === Ms.W ? this.items.touch() : (this.serverOptions(uu), this.gameMessage(uu)));
        const Eu = this.options.onNetEvent;
        Eu && this.guard((() => {
          Eu(uu)
        }))
      }
      serverOptions(uu) {
        const Eu = this.options.serverOptions,
          ju = Eu ? this.decoded(Hj, uu) : null;
        Eu && ju && this.guard((() => {
          Eu.applyNewClientOptions(ju)
        }))
      }
      gameMessage(uu) {
        let Eu = null;
        try {
          Eu = function(uu) {
            if ("message" !== uu.type || uu.VC !== Tj.mc.GameCodeMessage || uu.payloadKind !== cu.ic.Msgpack) return null;
            const Eu = (0, Qu.d)(uu.payload);
            if (null === Eu || "object" !== typeof Eu || "string" !== typeof Eu.messageType) throw new Error("GameCodeMessage without a messageType");
            return Eu
          }(uu)
        } catch (ju) {
          this.sessionLive && this.onError(ju)
        }
        if (Eu) {
          const {
            messageType: uu,
            data: ju
          } = Eu;
          if ((0, ou.i)(uu)) return void this.guard((() => {
            (0, ou.e)(uu, ju)
          }));
          "freeCamPerms" === uu && this.freeCam.setGame(ju) && this.writeFreeCam(), this.sessionLive && this.round(this.receivers, (Eu => {
            Eu.onReceivedMessageFromServer(uu, ju)
          }))
        }
      }
      decoded(uu, Eu) {
        try {
          return uu(Eu)
        } catch (ju) {
          return this.onError(ju), null
        }
      }
      setClientFreeCameraGrant(uu, Eu) {
        this.freeCam.setClient(uu, Eu), this.writeFreeCam()
      }
      freeCameraAllowed() {
        return 0 !== this.freeCam.perms()
      }
      setFreeCameraMovesFly(uu) {
        this.freeCam.setMovesFly(uu), this.writeFreeCam()
      }
      setBlockHighlight(uu) {
        this.highlight = uu, this.highlightOwed = !0, this.writeOwedHighlight()
      }
      writeOwedHighlight() {
        const uu = this.liveCmd();
        if (null === uu || !this.highlightOwed) return;
        const Eu = this.highlight;
        this.highlightOwed = null === Eu ? !(0, Ou.we)(uu, 0, Qs, Qs, 0) : !(0, Ou.we)(uu, 0, Eu.pos, Eu.normal, 1)
      }
      localPlayerBound(uu) {
        var Eu, ju;
        if (0 === this.activeConn || this.sessionLive && uu === this.boundId) return;
        const su = this.sessionLive;
        let Uu, Zu, Xu, lu;
        this.endSession(), su && this.restartGameCamera();
        try {
          var qu;
          this.session = null;
          const uu = this.options.sessionInfo(this.activeConn);
          if (this.session = uu, !uu) return;
          Uu = uu.gameNameWithVariation, Zu = null !== (qu = (0, au.Qb)(Uu)) && void 0 !== qu ? qu : void 0, Xu = (0, Pu.u)(uu.lobbyName), lu = (0, Pu.N)(uu.lobbyName)
        } catch (gu) {
          return void this.onError(gu)
        }
        const fu = {
          localPlayerId: String(uu)
        };
        let Cu = {},
          bu = {};
        try {
          var cu, Nu;
          Cu = null !== (cu = null === (Nu = this.options.gameFactory((0, au.Vb)(Uu))) || void 0 === Nu ? void 0 : Nu(lu, Xu, Zu, fu)) && void 0 !== cu ? cu : {}
        } catch (gu) {
          this.HN(gu)
        }
        try {
          var Ou, Yu;
          bu = {
            ...null === (Ou = (Yu = this.options).defaultPlugins) || void 0 === Ou ? void 0 : Ou.call(Yu, lu, Xu, Zu, fu),
            ...Cu.plugins
          }
        } catch (gu) {
          this.HN(gu)
        }
        const hu = [Cu, ...Object.values(bu)];
        this.owners = hu, this.tickers = hu.filter((uu => void 0 !== uu.Tb)), this.renderers = hu.filter((uu => void 0 !== uu.onAfterRender)), this.receivers = hu.filter((uu => void 0 !== uu.onReceivedMessageFromServer)), this.writeAltVeto(hu), this.writeHooks(hu), this.writePublicLobby(lu), this.writeLocalDbId(null !== (Eu = null === (ju = this.session) || void 0 === ju ? void 0 : ju.playerDbId) && void 0 !== Eu ? Eu : null), this.boundId = uu, this.sessionLive = !0, this.generation++, null !== this.pendingZoom && this.setCameraZoom(this.pendingZoom), this.highlightOwed ||= null !== this.highlight, this.writeOwedHighlight(), this.round(hu, (uu => {
          var Eu;
          null === (Eu = uu.onCreate) || void 0 === Eu || Eu.call(uu, this.clientApi)
        }));
        const Du = this.generation;
        setTimeout((() => {
          Du === this.generation && !0 === this.tables.getClientOption("creative") && cs(this.tables)
        }), 0)
      }
      chunkSlot(uu, Eu, ju, su, Uu, Zu) {
        this.chunks.apply(uu, Eu, ju, su, Uu, Zu)
      }
      entityAdded(uu) {
        var Eu;
        this.entityInfo.stale(uu), null === (Eu = this.options.replayEntities) || void 0 === Eu || Eu.entityAdded(uu)
      }
      entityInfoChanged(uu) {
        var Eu;
        this.entityInfo.stale(uu), null === (Eu = this.options.replayEntities) || void 0 === Eu || Eu.entityInfoChanged(uu)
      }
      afterPrescan() {
        this.items.refresh(), this.entityInfo.refresh(), this.api.rereadDirectory(), this.chunks.refresh(), this.live.refresh()
      }
      tickEnd() {
        if (this.ticks++, this.tickers.length > 0) {
          const uu = performance.now();
          this.round(this.tickers, Is), (0, Us.b)(performance.now() - uu)
        }
      }
      afterWalk(uu) {
        this.ackEventOverflow(), this.clientApi.flushOwed(), this.writeOwedHighlight();
        const Eu = this.options.replayEntities;
        Eu && this.guard((() => {
          this.entityInfoWatch.want(Lj, Eu.wantsWatch), Eu.flush(this.entityInfoWatch.on)
        }));
        const ju = this.api.apiView,
          su = Ou.u.frameMs(ju, 0);
        es.q.frame(su, Ou.u.heading(ju, 0), Ou.u.pitch(ju, 0), es.i[uu]);
        const Uu = (0, Us.l)(uu, su);
        if (null !== Uu) {
          const uu = this.renderFrame;
          this.guard((() => {
            (0, nj.b)().turnDamageIndicators(uu.cameraHeading)
          })), this.guard((() => {
            this.clientApi.slideRoute(Uu)
          })), this.round(this.renderers, (Eu => {
            Eu.onAfterRender(Uu, uu)
          }))
        }
        this.writeFreeCam();
        try {
          this.scriptedCamera.afterFrame(null !== Uu)
        } catch (Xu) {
          this.HN(Xu)
        }
        this.showZoom(), this.items.flush(this.HN), this.writePromptWatch(), this.writeCustomButtons();
        const Zu = this.ticks;
        this.ticks = 0, (0, Us.h)(Zu, uu, Uu, this.HN)
      }
      entityRemoved(uu) {
        this.live.despawned(uu), this.entityInfo.removed(uu)
      }
      ackEventOverflow() {
        const uu = this.api.apiView,
          Eu = Ou.u.eventOverflowGen(uu, 0),
          ju = Eu - this.overflowGen >>> 0;
        if (0 === ju && !this.resyncOwed) return;
        this.overflowGen = Eu;
        const su = Ou.u.eventOverflowMask(uu, 0),
          Uu = this.cmd;
        0 === su || null === Uu || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, Ou.ie)(Uu, 0, su);
        const Zu = this.options.onEventOverflow;
        0 !== ju && Zu && this.guard((() => {
          Zu(su, ju)
        }))
      }
      gameCall(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu) {
        if (uu === Ou.bc.Director) try {
          return this.scriptedCamera.call(Eu, ju, su, Uu, Zu, Xu)
        } catch (fu) {
          return this.HN(fu), Ou.mb.None
        }
        if (!this.sessionLive || void 0 !== this.fault) return uu === Ou.bc.AltVeto ? Ou.m.Allow : 0;
        try {
          return this.callGames(uu, Eu, ju, su, Uu, Zu, Xu, lu)
        } catch (fu) {
          throw (0, Nu.k)(fu) && (this.fault = fu), fu
        }
      }
      takeFault() {
        const uu = this.fault;
        return this.fault = void 0, uu
      }
      callGames(uu, Eu, ju, su, Uu, Zu, Xu, lu) {
        this.api.rereadDirectory(), this.chunks.touch(), this.items.refresh(), this.live.refresh(), this.entityInfo.inCoreCall();
        const {
          tables: qu
        } = this.options, fu = String(this.boundId);
        switch (uu) {
          case Ou.bc.AltVeto:
          case Ou.bc.AltAction: {
            const lu = 0 !== Xu,
              [Cu, bu, cu] = lu ? [Eu, ju, su] : [void 0, void 0, void 0],
              Nu = lu ? qu.nameOfId(Uu) : "Air",
              Yu = Ss(Zu);
            if (uu === Ou.bc.AltAction) return this.first((uu => {
              var Eu;
              return null === (Eu = uu.onPlayerAltAction) || void 0 === Eu ? void 0 : Eu.call(uu, fu, Cu, bu, cu, Nu, Yu)
            })), 0;
            const hu = this.first((uu => {
              var Eu;
              return null === (Eu = uu.onPlayerAttemptAltAction) || void 0 === Eu ? void 0 : Eu.call(uu, fu, Cu, bu, cu, Nu, Yu)
            }));
            return "preventAction" === hu ? Ou.m.Prevent : "preventPlacement" === hu ? Ou.m.PreventPlacement : Ou.m.Allow
          }
          case Ou.bc.Click: {
            const uu = lu,
              Cu = 0 !== (uu & Ou.T.Alt),
              bu = 0 !== (uu & Ou.T.HasPos),
              cu = bu ? qu.nameOfId(Uu) : "Air",
              [Nu, Yu, hu] = bu ? [Eu, ju, su] : [null, null, null],
              Du = Ss(Zu),
              gu = 0 !== (uu & Ou.T.Up),
              Mu = Ss(Xu);
            if (0 === (uu & Ou.T.AttackOnly) && this.first((uu => {
                var Eu, ju;
                return gu ? null === (Eu = uu.onPlayerClickUp) || void 0 === Eu ? void 0 : Eu.call(uu, fu, Cu, Nu, Yu, hu, cu, Du) : null === (ju = uu.onPlayerClick) || void 0 === ju ? void 0 : ju.call(uu, fu, Cu, Nu, Yu, hu, cu, Du)
              })), !gu && !Cu && null !== Mu) {
              const uu = this.clientApi.getPositionView(Mu),
                Eu = uu ? [uu[0], uu[1], uu[2]] : [0, 0, 0];
              this.first((uu => {
                var ju;
                return null === (ju = uu.onPlayerAttackEntity) || void 0 === ju ? void 0 : ju.call(uu, fu, Mu, Eu)
              }))
            }
            return 0
          }
          case Ou.bc.ChangeBlock: {
            const uu = qu.nameOfId(Uu),
              Xu = qu.nameOfId(Zu);
            return this.first((Uu => {
              var Zu;
              return null === (Zu = Uu.onPlayerChangeBlock) || void 0 === Zu ? void 0 : Zu.call(Uu, fu, Eu, ju, su, uu, Xu)
            })), 0
          }
          case Ou.bc.DropItem: {
            const uu = qu.nameOfId(Eu);
            return this.first((Eu => {
              var Uu;
              return null === (Uu = Eu.onPlayerDropItem) || void 0 === Uu ? void 0 : Uu.call(Eu, fu, uu, ju, su)
            })), 0
          }
          default:
            return this.onError(new Error(`Unknown game call kind ${uu}`)), 0
        }
      }
      changeBlockFail(uu, Eu, ju, su, Uu, Zu, Xu) {
        const lu = Uu === Ou.Kc ? null : Ks.decode(this.api.eventBytes(Zu, Math.min(Uu, Xu)));
        this.failures.push({
          eu: [uu, Eu, ju],
          Gu: su,
          pu: lu
        })
      }
      changeBlockFailEnd() {
        const uu = this.failures;
        this.failures = [], this.sessionLive && this.round(this.owners, (Eu => {
          var ju;
          null === (ju = Eu.onChangeBlockFail) || void 0 === ju || ju.call(Eu, uu)
        })), this.TY("EditBoard", {
          pos: null
        }), this.TY("EditCodeBlock", {
          pos: null,
          canChangePos: null
        })
      }
      inventoryEvent(uu, Eu, ju, su, Uu, Zu) {
        uu === Ou.rc.ChestOpened ? this.items.chestOpened(ju, su, Uu) : uu !== Ou.rc.Synced && uu !== Ou.rc.ChestClosed && uu !== Ou.rc.ChestRefreshed || this.items.touch(), this.guard((() => {
          ! function(uu, Eu, ju, su) {
            switch (uu) {
              case Ou.rc.Synced:
                Xu.h.TY("syncedInvenFromServer");
                break;
              case Ou.rc.ChestOpened:
              case Ou.rc.ChestClosed:
                Xu.h.TY("chestToggleFromServer", uu === Ou.rc.ChestOpened, !0);
                break;
              case Ou.rc.ChestRefreshed:
                Xu.h.TY("chestRefreshedFromServer");
                break;
              case Ou.rc.EnchantingTable:
                Xu.h.TY("enchantingTable", {
                  ul: su,
                  position: ju
                });
                break;
              case Ou.rc.HotbarRequest:
                Xu.h.TY("setSelectedInventorySlotI", Eu, !0);
                break;
              case Ou.rc.Scrolled:
                Xu.h.TY("ScrollInventorySlot", Eu);
                break;
              case Ou.rc.NumberKey:
                Xu.h.TY("numkeyPressed", Eu + 1);
                break;
              case Ou.rc.DropRequested:
                Xu.h.TY("DropInvenItem", 0 !== Eu);
                break;
              default:
                throw new Nu.e(`InventoryEvent of no kind: what ${uu}`)
            }
          }(uu, Eu, [ju, su, Uu], Zu)
        }))
      }
      heldItemChanged() {
        this.items.touch()
      }
      shotDamage(uu, Eu, ju, su) {
        this.TY("shotPlayer", {
          playerId: String(uu),
          damage: Eu,
          wasCrit: 0 !== su,
          distance: ju
        })
      }
      localHurt(uu, Eu) {
        this.TY("closeShopOnDamaged", null), this.guard((() => {
          Xu.h.TY("damagedByOtherPlayer", {
            Dj: null,
            direction: Number.isNaN(Eu) ? null : Eu,
            Ku: uu
          })
        }))
      }
      attackHit(uu, Eu, ju, su, Uu) {
        this.guard((() => {
          Xu.h.TY("yourAttackHit", {
            FE: su,
            screenPos: this.renderFrame.projectDirectionToScreenPos([uu, Eu, ju]),
            hitSelf: Uu
          })
        }))
      }
      physicsType(uu) {
        this.TY("PlayerPhysicsTypeUpdate", uu)
      }
      vehicleEffect(uu, Eu, ju, su, Uu) {
        this.guard((() => {
          uu === cu.Id.UPDATE ? (0, mu.g)(Eu, {
            icon: ju,
            level: su,
            displayName: null,
            durationMs: Uu
          }) : ku.c.remove(Eu)
        }))
      }
      zoomChanged(uu) {
        this.zoom = uu, this.zoomUnshown = !0
      }
      zoomDisabled() {
        this.TY("showBottomMessage", {
          message: "Zoom is disabled",
          timeoutLength: 2e3,
          type: "Error"
        })
      }
      showZoom() {
        const uu = this.scriptedCamera.holdsView();
        !this.zoomUnshown || uu && this.zoomHeld || (this.zoomUnshown = !1, this.TY("cameraZoomSet", this.zoom)), this.zoomHeld = uu
      }
      gunHit(uu) {
        this.guard((() => {
          const {
            Dj: Eu,
            gj: ju
          } = (0, gs.c)(Ms.u, uu);
          Xu.h.TY("damagedByOtherPlayer", {
            Dj: Eu,
            direction: ju
          })
        }))
      }
      uiEvent(uu, Eu, ju, su, Uu, Zu, Xu, lu) {
        this.guard((() => {
          yj(uu, Eu, [ju, su, Uu], Zu, this.items, this.options.tables, (() => Ks.decode(this.api.eventBytes(Xu, lu))))
        }))
      }
      writeAltVeto(uu) {
        const Eu = this.cmd;
        if (!Eu) return;
        let ju;
        try {
          ju = function(uu, Eu) {
            const ju = new Set;
            let su = !1;
            for (const Uu of uu)
              if (Uu.onPlayerAttemptAltAction) {
                if (su = !0, !Uu.altVetoBlocks) return {
                  mode: Ou.Td.All,
                  roots: []
                };
                for (const uu of Uu.altVetoBlocks) ju.add(Eu.getMetaInfo(uu).rootId)
              } return su ? ju.size > Ou.zc ? {
              mode: Ou.Td.All,
              roots: []
            } : {
              mode: Ou.Td.Filter,
              roots: [...ju]
            } : {
              mode: Ou.Td.Off,
              roots: []
            }
          }(uu, this.options.tables)
        } catch (Uu) {
          this.onError(Uu), ju = {
            mode: Ou.Td.All,
            roots: []
          }
        }
        if (ju.mode === Ou.Td.Off && !this.vetoSet) return;
        const su = new Uint8Array(new Uint32Array(ju.roots).buffer);
        (0, Ou.vf)(Eu, 0, ju.mode, ju.roots.length, su) ? this.vetoSet = ju.mode !== Ou.Td.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
      }
      endGameGrants() {
        this.freeCam.clearGame(), this.writeFreeCam()
      }
      writeFreeCam() {
        this.stopped() || this.freeCam.write(this.cmd)
      }
      writeHooks(uu) {
        const Eu = this.cmd;
        if (!Eu) return;
        const ju = function(uu) {
          let Eu = 0;
          for (const ju of uu) ju.onPlayerAltAction && (Eu |= 1 << Ou.bc.AltAction), (ju.onPlayerClick || ju.onPlayerClickUp || ju.onPlayerAttackEntity) && (Eu |= 1 << Ou.bc.Click), ju.onPlayerChangeBlock && (Eu |= 1 << Ou.bc.ChangeBlock), ju.onPlayerDropItem && (Eu |= 1 << Ou.bc.DropItem);
          return Eu
        }(uu);
        (0 !== ju || this.hooksSet) && ((0, Ou.Hf)(Eu, 0, ju) ? this.hooksSet = 0 !== ju : this.onError(new Error("SetHooks didn't fit the command ring")))
      }
      writeCustomButtons() {
        const uu = this.cmd;
        uu && !this.stopped() && this.customButtons.write(uu)
      }
      writePromptWatch() {
        const uu = this.cmd,
          Eu = this.promptWatch;
        Eu !== this.promptWatchSent && uu && !this.stopped() && (0, Ou.$f)(uu, 0, is[Eu]) && (this.promptWatchSent = Eu)
      }
      writePublicLobby(uu) {
        const Eu = this.cmd;
        Eu && uu !== this.writtenPublicLobby && ((0, Ou.Rf)(Eu, 0, uu ? 1 : 0) ? this.writtenPublicLobby = uu : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
      }
      writeLocalDbId(uu) {
        const Eu = this.cmd;
        Eu && ((0, Ou.Lf)(Eu, 0, null === uu ? 0 : 1, null === uu ? rs : Vs.encode(uu)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
      }
      first(uu) {
        const Eu = this.generation;
        for (const su of this.owners) {
          if (Eu !== this.generation) break;
          try {
            const Eu = uu(su);
            if (void 0 !== Eu) return Eu
          } catch (ju) {
            this.HN(ju)
          }
        }
      }
      TY(uu, Eu) {
        this.guard((() => {
          Xu.h.TY(uu, Eu)
        }))
      }
      dropGameCamera() {
        try {
          this.scriptedCamera.reset()
        } catch (uu) {
          this.HN(uu)
        }
      }
      restartGameCamera() {
        try {
          this.scriptedCamera.restart()
        } catch (uu) {
          this.HN(uu)
        }
      }
      endSession() {
        if (!this.sessionLive) return;
        this.sessionLive = !1;
        const uu = this.owners;
        let Eu;
        if (this.owners = this.tickers = this.renderers = this.receivers = [], this.generation++, !this.stopped()) try {
          this.writeAltVeto([]), this.writeHooks([]), this.writePublicLobby(!1), this.writeLocalDbId(null)
        } catch (su) {
          Eu = su
        }
        try {
          this.entityInfo.sessionEnded()
        } catch (su) {
          Eu ??= su
        }
        this.round(uu, Fs, !0);
        try {
          this.particles.sessionEnded() || this.onError(new Error("ParticleStopAll didn't fit the command ring"))
        } catch (su) {
          Eu ??= su
        }
        try {
          this.clientApi.disposeGameOutput()
        } catch (su) {
          Eu ??= su
        }
        const ju = this.options.onSessionEnd;
        if (ju) try {
          ju()
        } catch (su) {
          this.onError(su)
        }
        void 0 !== Eu && this.HN(Eu)
      }
      round(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const su = this.generation;
        for (const Zu of uu) {
          if (su !== this.generation) break;
          try {
            Eu(Zu)
          } catch (Uu) {
            ju ? this.onError(Uu) : this.HN(Uu)
          }
        }
      }
      guard(uu) {
        try {
          uu()
        } catch (Eu) {
          this.HN(Eu)
        }
      }
    }

    function Ss(uu) {
      return uu === Ou.Lc ? null : String(uu)
    }

    function Is(uu) {
      uu.Tb(cu.Cd)
    }

    function Fs(uu) {
      var Eu;
      null === (Eu = uu.onClose) || void 0 === Eu || Eu.call(uu)
    }

    function Bs(uu, Eu) {
      uu.watch((() => {
        const ju = function(uu) {
          const Eu = [],
            ju = Math.min(Zs, uu.length);
          for (let Uu = 0; Uu < ju; Uu++) {
            var su;
            const ju = null === (su = uu.slot(Uu)) || void 0 === su ? void 0 : su.typeObj,
              Zu = ju ? (0, ss.gunTypeOf)(ju.id) : void 0;
            void 0 !== Zu && Eu.push(ME[Zu])
          }
          return Eu
        }(uu);
        ju.length > 0 && (Eu.preload(ju), Eu.preload([eE]))
      }))
    }
    var Ls = ju(36823),
      ts = ju(5026),
      xs = ju(37151),
      Ts = ju(37181);

    function Hs(uu) {
      const Eu = (0, Ls.countDecodesAs)(new ts.Howl({
          ...(0, xs.g)(uu),
          pool: 15,
          preload: !1
        }), "sheet"),
        ju = Eu.load.bind(Eu);
      return Eu.load = () => (Eu._preload = !0, (0, Ts.d)(uu), ju()), Eu
    }

    function As(uu, Eu, ju) {
      const su = uu.listener;
      if (su.positionX) ns(su.positionX, Eu, ju, 0), ns(su.positionY, Eu, ju, 1), ns(su.positionZ, Eu, ju, 2), ns(su.forwardX, Eu, ju, 3), ns(su.forwardY, Eu, ju, 4), ns(su.forwardZ, Eu, ju, 5), ns(su.upX, Eu, ju, 6), ns(su.upY, Eu, ju, 7), ns(su.upZ, Eu, ju, 8);
      else {
        let uu = !1;
        for (let su = 0; su < 9; su++) uu ||= Eu[su] !== ju[su];
        uu && (su.setPosition(Eu[0], Eu[1], Eu[2]), su.setOrientation(Eu[3], Eu[4], Eu[5], Eu[6], Eu[7], Eu[8]), ju.set(Eu))
      }
    }

    function ns(uu, Eu, ju, su) {
      Eu[su] !== ju[su] && (uu.value = Eu[su], ju[su] = Eu[su])
    }
    class ys {
      constructor() {
        this.pose = new Float64Array(9), this.written = new Float64Array(9).fill(Number.NaN), this.watchedCtx = void 0
      }
      apply(uu) {
        this.pose.set(uu);
        const Eu = ts.Howler.ctx;
        return !!Eu && (Eu !== this.watchedCtx && (this.watchedCtx = Eu, this.written.fill(Number.NaN), Eu.addEventListener("statechange", (() => {
          "running" === Eu.state && As(Eu, this.pose, this.written)
        }))), "running" === Eu.state && As(Eu, uu, this.written), !0)
      }
    }
    var zs = ju(36958),
      Rs = ju(39516);
    let uU = null,
      EU = null;

    function jU() {
      return null === uU && (uU = document.createElement("div"), uU.className = "WasmCameraLayer", uU.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none", document.body.append(uU)), uU
    }

    function sU() {
      return EU ??= new Rs.c(new zs.d(jU)), EU
    }

    function UU() {
      var uu;
      null === (uu = EU) || void 0 === uu || uu.clear(), ZU(null)
    }

    function ZU(uu) {
      su.d.get("scriptedCameraFacing") !== uu && su.d.set({
        scriptedCameraFacing: uu
      })
    }
    var XU = ju(9505),
      lU = ju(9456),
      qU = ju(39547),
      fU = ju(41252),
      CU = ju(3475);
    const bU = Object.entries(Ou._b).reduce(((uu, Eu) => {
      let [ju, su] = Eu;
      return uu[su] = ju, uu
    }), []);

    function cU(uu, Eu) {
      var ju;
      return 0 !== ((null !== (ju = uu.itemFlags[Eu]) && void 0 !== ju ? ju : 0) & Ou.tc.Stackable)
    }
    const NU = /^(0|[1-9][0-9]*)$/,
      OU = {
        displayName: (uu, Eu) => (0, ss.displayNameOf)(Eu),
        description: (uu, Eu) => (0, ss.descriptionOf)(Eu),
        type: (uu, Eu) => (0, ss.itemTypeOf)(Eu),
        clipSize: (uu, Eu) => (0, ss.clipSizeOf)(Eu),
        armourReduction: (uu, Eu) => (0, ss.armourReductionOf)(Eu),
        scopeType: (uu, Eu) => (0, ss.scopeTypeOf)(Eu),
        stackable: cU,
        harvestType: (uu, Eu) => bU[uu.blockHarvestTypes[Eu]],
        harvestLevel: (uu, Eu) => {
          const ju = uu.blockHarvestLevels[Eu];
          return ju === Ou.wc ? void 0 : ju
        },
        harvests: (uu, Eu) => {
          var ju;
          const su = null !== (ju = uu.itemHarvests[Eu]) && void 0 !== ju ? ju : 0;
          return 0 !== su ? bU[su] : void 0 === (0, ss.harvestsNullLevelOf)(Eu) ? void 0 : null
        },
        level: (uu, Eu) => {
          var ju, su;
          const Uu = null !== (ju = uu.itemLevels[Eu]) && void 0 !== ju ? ju : Ou.wc;
          return Uu !== Ou.wc ? Uu : null !== (su = (0, ss.harvestsNullLevelOf)(Eu)) && void 0 !== su ? su : void 0
        }
      };

    function YU(uu, Eu, ju) {
      return DU(new Uint8Array(Math.floor(uu.length / Eu)), uu, Eu, ju)
    }

    function hU(uu, Eu, ju) {
      return DU(new Uint16Array(Math.floor(uu.length / Eu)), uu, Eu, ju)
    }

    function DU(uu, Eu, ju, su) {
      const Uu = new DataView(Eu.buffer, Eu.byteOffset, Eu.byteLength);
      for (let Zu = 0; Zu < uu.length; Zu++) uu[Zu] = su(Uu, Zu * ju);
      return uu
    }
    class gU {
      constructor(uu, Eu) {
        this.options = Eu, this.metas = [], this.types = new Map, this.props = void 0, this.rootIdOf = uu => {
          const Eu = this.idOf(uu);
          if (void 0 === Eu) throw new Error(`No item is named ${uu}, an item's root`);
          return Eu
        };
        const ju = Eu => {
            const ju = Eu();
            return new Uint8Array(uu.memory().buffer, uu.scratch(), ju).slice()
          },
          su = (new TextDecoder).decode(ju((() => uu.queries.itemNames()))).split("\n"),
          Uu = ju((() => uu.queries.blockProps())),
          Zu = ju((() => uu.queries.itemProps()));
        this.props = {
          blockFlags: YU(Uu, Ou.A.BYTES, Ou.A.flags),
          blockHarvestTypes: YU(Uu, Ou.A.BYTES, Ou.A.harvestType),
          blockHarvestLevels: YU(Uu, Ou.A.BYTES, Ou.A.harvestLevel),
          blockAttachedTops: hU(Uu, Ou.A.BYTES, Ou.A.attachedTop),
          itemFlags: YU(Zu, Ou.vc.BYTES, Ou.vc.flags),
          itemHarvests: YU(Zu, Ou.vc.BYTES, Ou.vc.harvests),
          itemLevels: YU(Zu, Ou.vc.BYTES, Ou.vc.level)
        }, (0, CU.k)(Object.freeze(su)), (0, fU.d)()
      }
      idOf(uu) {
        if ("number" === typeof uu) return void 0 === (0, CU.c)(uu) ? void 0 : uu;
        const Eu = (0, CU.b)(uu);
        return void 0 === Eu && NU.test(uu) ? void 0 === (0, CU.c)(+uu) ? void 0 : +uu : Eu
      }
      getMetaInfo(uu) {
        if (!uu || uu === XU.c) return XU.g;
        const Eu = this.idOf(uu);
        if (void 0 === Eu) throw new Error(`Item ${uu} not found in registry`);
        return this.metaOf(Eu)
      }
      blockRootId(uu) {
        return 0 !== uu && void 0 !== (0, CU.c)(uu) ? this.metaOf(uu).rootId : uu
      }
      metaOf(uu) {
        return this.metas[uu] ??= (0, lU.n)((0, CU.c)(uu), uu, this.rootIdOf, (0, ss.rootMetaDescOf)(uu))
      }
      getItemId(uu) {
        if (!uu || uu === XU.c) return 0;
        const Eu = this.idOf(uu);
        if (void 0 === Eu) throw new Error(`Invalid block name. You sent ${uu}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
        return Eu
      }
      getItemName(uu) {
        if (!uu || uu === XU.c) return XU.c;
        const Eu = this.idOf(uu);
        if (void 0 === Eu) throw new Error(`Item ${uu} not found in registry`);
        return (0, CU.c)(Eu)
      }
      blockNameToBlockId(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (uu === XU.c) return 0;
        let ju = this.idOf(uu);
        if (void 0 === ju || !this.isBlockId(ju)) {
          const Eu = uu.indexOf("|"),
            su = Eu > 0 ? (0, CU.b)(uu.slice(0, Eu)) : void 0;
          ju = void 0 !== su && this.isBlockId(su) && (0, ss.rootMetaDescOf)(su) === uu ? su : void 0
        }
        if (void 0 !== ju) return ju;
        if (!Eu) throw new Error(`Invalid block name. You sent ${uu}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
        return null
      }
      isBlockId(uu) {
        return uu > 0 && uu < this.props.blockFlags.length
      }
      nameOfId(uu) {
        return 0 !== uu && (0, CU.c)(uu) || XU.c
      }
      itemType(uu) {
        const Eu = uu ? this.idOf(uu) : void 0;
        if (!Eu) return null;
        let ju = this.types.get(Eu);
        return void 0 === ju && (ju = Object.freeze({
          id: Eu,
          name: (0, CU.c)(Eu),
          meta: this.getMetaInfo(Eu),
          stackable: cU(this.props, Eu),
          type: (0, ss.itemTypeNameOf)(Eu),
          clipSize: (0, ss.clipSizeOf)(Eu),
          scopeType: (0, ss.scopeTypeOf)(Eu),
          showsAimingUi: (0, ss.showsAimingUi)(Eu)
        }), this.types.set(Eu, ju)), ju
      }
      getItemStat(uu, Eu) {
        if (qU.c.has(Eu)) {
          const ju = "minChargeStateToUse" === Eu ? this.getMetaInfo(uu).rootName : this.getItemName(uu),
            su = this.options.get((0, qU.g)(ju, Eu));
          if (null !== su && void 0 !== su) return su
        }
        return this.defaultStat(uu, Eu, this.statOf(Eu))
      }
      getDisplayName(uu) {
        return this.getItemStat(uu, "displayName")
      }
      getDefaultItemStat(uu, Eu) {
        return this.defaultStat(uu, Eu, this.statOf(Eu))
      }
      statOf(uu) {
        const Eu = OU[uu];
        return void 0 === Eu && function(uu, Eu) {
          throw new Error(`ClientApi.${uu} is not available yet in the wasm client (${Eu})`)
        }(`getItemStat("${uu}")`, `a table of the stat: the wasm client answers ${Object.keys(OU).join(", ")}`), Eu
      }
      defaultStat(uu, Eu, ju) {
        const su = this.idOf(uu),
          Uu = void 0 === su ? void 0 : ju(this.props, su);
        return null !== Uu && void 0 !== Uu || "displayName" !== Eu ? Uu : this.getItemName(uu)
      }
      getClientOption(uu) {
        return this.options.get(uu)
      }
      getGunStats(uu) {
        return this.getClientOption(`${uu}GunStats`)
      }
      watchClientOption(uu, Eu) {
        return this.options.subscribe(uu, Eu)
      }
      isSolidBlockId(uu) {
        var Eu;
        return 0 !== ((null !== (Eu = this.props.blockFlags[uu]) && void 0 !== Eu ? Eu : 0) & Ou.z.Solid)
      }
      isStackableId(uu) {
        return cU(this.props, uu)
      }
      isFluidBlockId(uu) {
        var Eu;
        return 0 !== ((null !== (Eu = this.props.blockFlags[uu]) && void 0 !== Eu ? Eu : 0) & Ou.z.Fluid)
      }
      canPlaceOverBlockId(uu) {
        var Eu;
        return 0 !== ((null !== (Eu = this.props.blockFlags[uu]) && void 0 !== Eu ? Eu : 0) & Ou.z.PlaceOver)
      }
      attachedTopOf(uu) {
        var Eu;
        return null !== (Eu = this.props.blockAttachedTops[uu]) && void 0 !== Eu ? Eu : 0
      }
      isDroplessBlockId(uu) {
        return (0, ss.dropsNothing)(uu)
      }
    }

    function MU(uu, Eu) {
      const ju = new Map;
      return (su, Uu) => {
        const Zu = Eu.idOf(su),
          Xu = void 0 === Zu ? null : (su => {
            let Uu = ju.get(su);
            if (void 0 === Uu) {
              const Zu = uu.queries.salvageRecipe(su),
                Xu = new DataView(uu.memory().buffer, uu.scratch(), Zu),
                lu = [];
              for (let uu = 0; uu + Ou.Id.BYTES <= Zu; uu += Ou.Id.BYTES) lu.push(Object.freeze({
                item: Eu.nameOfId(Ou.Id.item(Xu, uu)),
                amt: Ou.Id.amount(Xu, uu)
              }));
              Uu = 0 === lu.length ? null : Object.freeze(lu), ju.set(su, Uu)
            }
            return Uu
          })(Zu);
        if (null === Xu || void 0 === Uu) return Xu;
        const lu = Uu <= 0 ? 1 : Uu;
        return Xu.map((uu => {
          let {
            item: Eu,
            amt: ju
          } = uu;
          return {
            item: Eu,
            amt: ju * lu
          }
        }))
      }
    }
    var eU = ju(41011),
      GU = ju(37351),
      pU = ju(37334),
      wU = ju(37341),
      JU = ju(36876),
      dU = ju(40932),
      aU = ju(42864);
    const PU = -1,
      oU = new Uint8Array(0),
      kU = new TextEncoder;

    function mU(uu) {
      if (null === uu) return null;
      const Eu = kU.encode(uu);
      return Eu.byteLength < cu.Jc ? Eu : Eu.subarray(0, cu.Jc - 1)
    }
    class vU {
      constructor(uu) {
        this.deps = uu, this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = PU, this.keyframesSettled = !1, this.reloadFrom = PU
      }
      reloadKeyframes() {
        var uu, Eu;
        this.keyframesVersion = PU, this.reloadFrom = null !== (uu = null === (Eu = this.view()) || void 0 === Eu ? void 0 : Eu.version) && void 0 !== uu ? uu : PU
      }
      setPlayback(uu) {
        const Eu = 1 === this.deps.core.iUu(uu);
        return Eu && (this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = PU, this.reloadFrom = PU), Eu
      }
      async open(uu, Eu) {
        const ju = await this.deps.replay.open(uu, Eu);
        return "opening" === ju && (this.reloadKeyframes(), this.deps.recorder.prefetch()), ju
      }
      play() {
        this.deps.replay.play()
      }
      pause() {
        this.deps.replay.pause()
      }
      seek(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.deps.replay.seek(Math.max(0, Math.floor(uu)), Eu)
      }
      setSpeed(uu) {
        this.deps.replay.setSpeed(uu)
      }
      setCameraMode(uu) {
        this.deps.replay.setCameraMode(aU.c.indexOf(uu))
      }
      view() {
        var uu;
        const Eu = Ou.u.replayViewPtr(this.deps.apiView(), 0);
        if (0 === Eu) return this.lastView = null, null;
        const ju = new DataView(this.deps.buffer(), Eu, Ou.Bd.BYTES),
          su = Ou.Bd.version(ju, 0),
          Uu = this.lastView;
        if (null !== Uu && Uu.version === su) return Uu;
        const Zu = Ou.Bd.markIn(ju, 0),
          Xu = {
            version: su,
            state: Ou.Bd.state(ju, 0),
            cameraMode: null !== (uu = aU.c[Ou.Bd.cameraMode(ju, 0)]) && void 0 !== uu ? uu : "recording",
            Tb: Ou.Bd.Tb(ju, 0),
            totalTicks: Ou.Bd.totalTicks(ju, 0),
            speed: Ou.Bd.speed(ju, 0),
            mark: Zu === Ou.yd ? null : {
              inTick: Zu,
              outTick: Ou.Bd.markOut(ju, 0)
            },
            editVersion: Ou.Bd.editVersion(ju, 0)
          };
        return this.lastView = Xu, Xu
      }
      keyframes() {
        const uu = this.view();
        if (null === uu) return [];
        uu.version !== this.reloadFrom && (this.reloadFrom = PU);
        const Eu = this.reloadFrom === PU && uu.state !== cu.od.Cropping && uu.state !== cu.od.None,
          ju = Eu ? uu.editVersion : uu.version;
        if (ju === this.keyframesVersion && Eu === this.keyframesSettled) return this.lastKeyframes;
        const {
          core: su
        } = this.deps, Uu = su.WUu(), Zu = su.Kh(), Xu = [];
        if (0 !== Zu && Uu > 0) {
          const uu = new DataView(this.deps.buffer(), Zu, Uu * cu.wc);
          for (let Eu = 0; Eu < Uu; Eu++) {
            const ju = Eu * cu.wc,
              su = Eu => uu.getFloat64(ju + Eu, !0);
            Xu.push({
              Tb: uu.getUint32(ju + cu.Hc, !0),
              position: [su(cu.Ec), su(cu.Ec + 8), su(cu.Ec + 16)],
              direction: [su(cu.zc), su(cu.zc + 8), su(cu.zc + 16)],
              easing: [su(cu.Ac), su(cu.Ac + 8), su(cu.Ac + 16), su(cu.Ac + 24)]
            })
          }
        }
        return this.keyframesVersion = ju, this.keyframesSettled = Eu, this.lastKeyframes = Xu, Xu
      }
      addKeyframe() {
        const uu = this.deps.apiView(),
          Eu = [Ou.u.eye(uu, 0, 0), Ou.u.eye(uu, 0, 1), Ou.u.eye(uu, 0, 2)];
        return this.deps.replay.addKeyframe(Eu, function(uu, Eu) {
          const ju = Math.cos(Eu);
          return [ju * Math.sin(uu), -Math.sin(Eu), ju * Math.cos(uu)]
        }(Ou.u.heading(uu, 0), Ou.u.pitch(uu, 0)))
      }
      setKeyframe(uu) {
        return this.deps.replay.setKeyframe(uu.Tb, Float64Array.from([...uu.position, ...uu.direction, ...uu.easing]))
      }
      moveKeyframe(uu, Eu) {
        return this.deps.replay.moveKeyframe(uu, Eu)
      }
      deleteKeyframes(uu, Eu) {
        return this.deps.replay.deleteKeyframes(uu, Eu)
      }
      setMark(uu) {
        var Eu, ju;
        return this.deps.replay.setMark(null !== (Eu = null === uu || void 0 === uu ? void 0 : uu.inTick) && void 0 !== Eu ? Eu : -1, null !== (ju = null === uu || void 0 === uu ? void 0 : uu.outTick) && void 0 !== ju ? ju : -1)
      }
      crop(uu, Eu) {
        const ju = this.deps.replay.crop(uu, Eu);
        return ju && this.reloadKeyframes(), ju
      }
      save(uu) {
        return this.deps.replay.askSave(), this.deps.recorder.saveEdited(uu)
      }
      recorderControl(uu) {
        this.deps.recorder.control(uu)
      }
      recorderPrefs(uu, Eu) {
        this.deps.recorder.prefs(uu, Eu)
      }
      recorderOption(uu, Eu) {
        const ju = this.deps.cmd();
        return null !== ju && (0, Ou.jf)(ju, 0, uu, null === Eu ? oU : kU.encode(Eu))
      }
      recordFlyingText(uu, Eu, ju, su) {
        const Uu = this.deps.cmd(),
          Zu = Math.max(0, Math.min(4294967295, Math.round(su)));
        return null !== Uu && (0, Ou.gf)(Uu, 0, Eu, ju, Zu, kU.encode(uu))
      }
      recordPlayerKilled(uu, Eu, ju, su) {
        const Uu = this.deps.cmd();
        return null !== Uu && (0, Ou.lf)(Uu, 0, uu, Eu, Math.max(0, ju), kU.encode(su))
      }
      recordKillfeed(uu, Eu, ju) {
        var su, Uu;
        const Zu = this.deps.cmd(),
          Xu = function(uu) {
            const Eu = uu.reduce(((uu, Eu) => {
                var ju;
                return uu + Tj.vb + (null !== (ju = null === Eu || void 0 === Eu ? void 0 : Eu.byteLength) && void 0 !== ju ? ju : 0)
              }), 0),
              ju = new Uint8Array(Eu),
              su = new DataView(ju.buffer);
            let Uu = 0;
            for (const Xu of uu) {
              var Zu;
              su.setUint16(Uu, null !== (Zu = null === Xu || void 0 === Xu ? void 0 : Xu.byteLength) && void 0 !== Zu ? Zu : cu.Jc, !0), Uu += Tj.vb, null !== Xu && (ju.set(Xu, Uu), Uu += Xu.byteLength)
            }
            return ju
          }([mU(uu.name), mU(uu.colour), mU(Eu.name), mU(Eu.colour), mU(ju)]);
        return null !== Zu && (0, Ou.if)(Zu, 0, null !== (su = uu.id) && void 0 !== su ? su : Ou.Pc, null !== (Uu = Eu.id) && void 0 !== Uu ? Uu : Ou.Pc, Xu)
      }
      recorderSession(uu, Eu) {
        this.deps.recorder.session({
          session: Eu,
          lobbyType: uu.lobbyType,
          game: uu.gameNameWithVariation,
          lobby: uu.lobbyName
        })
      }
      recorderClose() {
        this.deps.core.SUu()
      }
      filePartDone(uu, Eu) {
        this.deps.recorder.filePartDone(uu, Eu)
      }
      fileDone(uu) {
        this.deps.recorder.fileDone(uu)
      }
    }
    const KU = -2147483648;
    class VU {
      constructor(uu) {
        var Eu;
        this.deps = uu, this.state = {
          recording: !1,
          clipping: !1,
          hasClipBuffer: !1,
          seconds: 0
        }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (Eu = uu.now) && void 0 !== Eu ? Eu : () => performance.now()
      }
      get current() {
        return this.state
      }
      get live() {
        var uu, Eu, ju;
        return null === (uu = null === (Eu = (ju = this.deps).live) || void 0 === Eu ? void 0 : Eu.call(ju)) || void 0 === uu || uu
      }
      activated(uu) {
        var Eu, ju;
        this.live && (this.viewerShown(!0 === (null === (Eu = (ju = this.deps).viewerOpen) || void 0 === Eu ? void 0 : Eu.call(ju))), this.deps.client.recorderSession(uu, (0, aU.g)()))
      }
      closed() {
        this.deps.client.recorderClose()
      }
      toggleRecording() {
        var uu, Eu;
        this.live && (this.state.recording || !0 !== (null === (uu = (Eu = this.deps).viewerOpen) || void 0 === uu ? void 0 : uu.call(Eu))) ? this.deps.client.recorderControl(cu.Wc.ToggleRecording) : this.deps.notify(wU.c.closeViewerFirst)
      }
      saveClip() {
        this.live ? this.deps.client.recorderControl(cu.Wc.SaveClip) : this.deps.notify(wU.c.clippingNotOn)
      }
      viewerShown(uu) {
        this.live && this.deps.client.recorderControl(uu ? cu.Wc.ViewerOpened : cu.Wc.ViewerClosed)
      }
      setPrefs(uu, Eu) {
        this.live && this.deps.client.recorderPrefs(uu, Eu)
      }
      setOption(uu, Eu) {
        this.live && this.deps.client.recorderOption(uu, Eu)
      }
      recordFlyingText(uu, Eu, ju, su) {
        this.live && this.deps.client.recordFlyingText(uu, Eu, ju, su)
      }
      recordPlayerKilled(uu, Eu, ju, su) {
        this.live && this.deps.client.recordPlayerKilled(uu, Eu, ju, su)
      }
      recordKillfeed(uu, Eu, ju) {
        this.live && this.deps.client.recordKillfeed(uu, Eu, ju)
      }
      Tb() {
        let uu = this.state;
        if (this.clipTickPending && (this.clipTickPending = !1, uu = {
            ...uu,
            hasClipBuffer: !0
          }), null !== this.recordingSince) {
          const Eu = Math.floor((this.now() - this.recordingSince) / 1e3);
          Eu !== uu.seconds && (uu = {
            ...uu,
            seconds: Eu
          })
        }
        this.set(uu)
      }
      onEvent(uu) {
        var Eu, ju;
        const {
          notify: su
        } = this.deps, Uu = wU.c;
        switch (uu.what) {
          case cu.Tc.RecordingStarted:
            this.recordingSince = this.now(), this.set({
              ...this.state,
              recording: !0,
              seconds: 0
            }), su(Uu.recordingStarted);
            break;
          case cu.Tc.RecordingStopped:
            this.stopRecording(), su(Uu.recordingStopped), this.saveState(cu.hd.Recording, "saving");
            break;
          case cu.Tc.RecordingDiscarded:
            this.stopRecording(), su(Uu.recordingDiscarded);
            break;
          case cu.Tc.RecordingTurnedOff:
            this.stopRecording(), su(Uu.recordingTurnedOff);
            break;
          case cu.Tc.LimitReached:
            su(Uu.limitReached);
            break;
          case cu.Tc.ClipSaved:
            this.saveState(cu.hd.Clip, "saving");
            break;
          case cu.Tc.ClipEmpty:
            su(Uu.clipEmpty);
            break;
          case cu.Tc.ClippingNotOn:
            su(Uu.clippingNotOn);
            break;
          case cu.Tc.Disallowed:
            su(Uu.disallowed);
            break;
          case cu.Tc.ClippingOn:
            this.clipTickPending = !0, this.set({
              ...this.state,
              clipping: !0,
              hasClipBuffer: !1
            });
            break;
          case cu.Tc.ClippingOff:
            this.clipTickPending = !1, this.set({
              ...this.state,
              clipping: !1,
              hasClipBuffer: !1
            });
            break;
          case cu.Tc.ClipSettingsChanged:
            this.clipTickPending = this.state.clipping, this.set({
              ...this.state,
              hasClipBuffer: !1
            });
            break;
          case cu.Tc.SaveBusy:
            null === (Eu = (ju = this.deps).onSaveState) || void 0 === Eu || Eu.call(ju, uu.kind, "busy"), su(Uu.saveBusy);
            break;
          case cu.Tc.CloseViewerFirst:
            su(Uu.closeViewerFirst)
        }
      }
      fileReady(uu, Eu) {
        this.deps.download(Eu), this.saveState(uu, "done"), this.deps.notify(uu === cu.hd.Clip ? wU.c.clipSaved : wU.c.recordingSaved)
      }
      failed(uu) {
        this.saveState(uu, "failed"), this.deps.notify(uu === cu.hd.Clip ? wU.c.clipFailed : wU.c.recordingFailed)
      }
      stopRecording() {
        this.recordingSince = null, this.set({
          ...this.state,
          recording: !1,
          seconds: 0
        })
      }
      saveState(uu, Eu) {
        var ju, su;
        null === (ju = (su = this.deps).onSaveState) || void 0 === ju || ju.call(su, uu, Eu)
      }
      set(uu) {
        uu !== this.state && (this.state = uu, this.deps.onState(uu))
      }
    }
    const rU = new TextDecoder;

    function QU(uu, Eu, ju, su) {
      const Uu = [];
      for (let Zu = 0; Zu < su; Zu++) {
        if (Eu + Tj.vb > ju) return null;
        const su = uu.getUint16(Eu, !0);
        if (Eu += Tj.vb, su !== cu.Jc) {
          if (Eu + su > ju) return null;
          Uu.push(rU.decode(new Uint8Array(uu.buffer, uu.byteOffset + Eu, su))), Eu += su
        } else Uu.push(null)
      }
      return Eu === ju ? Uu : null
    }

    function iU(uu, Eu) {
      let ju = new DataView(new ArrayBuffer(0)),
        su = !0;
      const Uu = {
        replayFailed: (Eu, ju, su) => {
          uu.replayFailed({
            reason: Eu,
            code: ju,
            version: su
          })
        },
        replayOption: (Eu, Uu, Zu, Xu) => {
          const lu = function(uu, Eu, ju, su) {
            switch (Eu) {
              case cu.kd.Cleared:
                return 0 === su ? null : void 0;
              case cu.kd.Text:
                return rU.decode(new Uint8Array(uu.buffer, uu.byteOffset + ju, su));
              case cu.kd.Int:
                return su === Int32Array.BYTES_PER_ELEMENT ? uu.getInt32(ju, !0) : void 0;
              case cu.kd.Double:
                return su === Float64Array.BYTES_PER_ELEMENT ? uu.getFloat64(ju, !0) : void 0;
              default:
                return
            }
          }(ju, Uu, Zu, Xu);
          void 0 !== lu ? uu.replayOption({
            key: Eu,
            value: lu
          }) : su = !1
        },
        replayUiEvent: (Eu, Uu, Zu, Xu, lu, qu) => {
          const fu = function(uu, Eu, ju, su, Uu, Zu, Xu) {
            const lu = Zu + Xu;
            switch (Eu) {
              case cu.nd.FlyingText: {
                const Xu = QU(uu, Zu, lu, 1);
                return null !== Xu && null !== Xu[0] ? {
                  what: Eu,
                  FZ: ju,
                  IZ: su,
                  angle: Uu,
                  contentJson: Xu[0]
                } : null
              }
              case cu.nd.PlayerKilled: {
                const su = QU(uu, Zu, lu, 3);
                return su ? {
                  what: Eu,
                  killstreak: ju,
                  dead: su[0],
                  killer: su[1],
                  withItem: su[2]
                } : null
              }
              case cu.nd.Killfeed: {
                const ju = QU(uu, Zu, lu, 7);
                return ju ? {
                  what: Eu,
                  killerId: ju[0],
                  killerName: ju[1],
                  killerColour: ju[2],
                  victimId: ju[3],
                  victimName: ju[4],
                  victimColour: ju[5],
                  withItem: ju[6]
                } : null
              }
              default:
                return null
            }
          }(ju, Eu, Uu, Zu, Xu, lu, qu);
          null !== fu ? uu.replayUiEvent(fu) : su = !1
        },
        replayFilePart: (ju, Uu, Zu, Xu) => {
          const lu = Eu();
          Zu + Xu > lu.byteLength ? su = !1 : uu.filePart(ju, Uu, new Uint8Array(lu, Zu, Xu).slice())
        },
        replayFileReady: (Eu, ju, su, Uu) => {
          uu.fileReady({
            save: Eu,
            kind: ju,
            parts: su,
            bytes: Uu
          })
        },
        recorderEvent: (Eu, ju, su) => {
          uu.recorderEvent({
            what: Eu,
            kind: ju,
            save: su
          })
        },
        replayOpened: (Eu, su, Uu) => {
          uu.replayOpened(rU.decode(new Uint8Array(ju.buffer, ju.byteOffset + su, Uu)))
        }
      };
      return (uu, Eu, Zu, Xu) => !(uu < cu.T.ReplayFailed || uu > cu.T.RecorderEvent) && (ju = Eu, su = !0, (0, Ou.Yd)(uu, Eu, Zu, Xu, Uu) && su)
    }

    function WU(uu) {
      let Eu = null;
      const ju = iU(uu, (() => {
        if (null === Eu) throw new Error("a recorder event read outside recorderEventReader's call");
        return Eu.buffer
      }));
      return (uu, su) => {
        Eu = su;
        try {
          ! function(uu, Eu) {
            const ju = uu.slice(),
              su = new DataView(ju.buffer);
            for (let Uu = 0; Uu < ju.byteLength;) {
              if (Uu + cu.R > ju.byteLength) throw new Error(`the recorder module's events end mid-head at ${Uu}`);
              const uu = su.getUint32(Uu, !0),
                Zu = 65535 & uu,
                Xu = uu >>> 16,
                lu = Uu + cu.R;
              if (lu + Xu > ju.byteLength || !Eu(Zu, su, lu, Xu)) throw new Error(`the recorder module wrote a malformed event ${Zu} (${Xu} bytes) at ${Uu}`);
              Uu = lu + (0, cu.xe)(Xu)
            }
          }(uu, ju)
        } finally {
          Eu = null
        }
      }
    }
    class SU {
      constructor(uu, Eu) {
        this.acks = uu, this.handlers = Eu, this.parts = new Map
      }
      onPart(uu, Eu, ju) {
        let su = this.parts.get(uu);
        su || (su = [], this.parts.set(uu, su)), su[Eu] = ju, this.acks.filePartDone(uu, Eu)
      }
      onReady(uu) {
        var Eu;
        const ju = null !== (Eu = this.parts.get(uu.save)) && void 0 !== Eu ? Eu : [];
        this.parts.delete(uu.save);
        const su = function(uu, Eu, ju) {
          if (uu.length !== Eu) return null;
          let su = 0;
          for (let Xu = 0; Xu < Eu; Xu++) {
            if (void 0 === uu[Xu]) return null;
            su += uu[Xu].byteLength
          }
          if (su !== ju) return null;
          if (1 === Eu) return uu[0];
          const Uu = new Uint8Array(ju);
          let Zu = 0;
          for (const Xu of uu) Uu.set(Xu, Zu), Zu += Xu.byteLength;
          return Uu
        }(ju, uu.parts, uu.bytes);
        this.acks.fileDone(uu.save), null === su ? this.handlers.fileIncomplete(uu.save, uu.kind) : this.handlers.fileReady(uu.save, uu.kind, su)
      }
      onDiscarded(uu) {
        this.parts.delete(uu)
      }
    }

    function IU() {
      return ju.e(61).then((() => ju(60870)))
    }
    class FU {
      constructor(uu) {
        this.deps = uu, this.sink = void 0, this.recorder = void 0, this.recorderEvents = void 0, this.parts = void 0, this.viewerChunk = null, this.viewer = null;
        const {
          client: Eu
        } = uu;
        this.recorder = new VU({
          client: Eu,
          live: () => {
            var uu;
            return !0 !== (null === (uu = this.viewer) || void 0 === uu ? void 0 : uu.inPlayback)
          },
          viewerOpen: uu.viewerOpen,
          notify: uu.notify,
          download: Eu => {
            var ju;
            null === (ju = uu.download) || void 0 === ju || ju.call(uu, Eu)
          },
          onState: uu.onRecorderState,
          onSaveState: uu.onSaveState
        }), this.parts = new SU(Eu, {
          fileReady: (uu, Eu, ju) => {
            var su;
            Eu === cu.hd.Edited ? null === (su = this.viewer) || void 0 === su || su.saveDone(ju) : this.recorder.fileReady(Eu, ju)
          },
          fileIncomplete: (uu, Eu) => {
            this.saveFailed(Eu)
          }
        });
        const ju = {
          replayFailed: uu => {
            var Eu;
            null === (Eu = this.viewer) || void 0 === Eu || Eu.onFailed(uu)
          },
          replayOption: Eu => {
            var ju;
            null === (ju = uu.onReplayOption) || void 0 === ju || ju.call(uu, Eu)
          },
          replayUiEvent: Eu => {
            var ju;
            null === (ju = uu.onReplayUiEvent) || void 0 === ju || ju.call(uu, Eu)
          },
          filePart: (uu, Eu, ju) => {
            this.parts.onPart(uu, Eu, ju)
          },
          fileReady: uu => {
            this.parts.onReady(uu)
          },
          replayOpened: Eu => {
            var ju;
            null === (ju = uu.onReplayOpened) || void 0 === ju || ju.call(uu, Eu)
          },
          recorderEvent: uu => {
            var Eu;
            switch (uu.what) {
              case cu.Tc.FileDiscarded:
                this.parts.onDiscarded(uu.save);
                break;
              case cu.Tc.SaveFailed:
                this.saveFailed(uu.kind);
                break;
              case cu.Tc.SaveBusy:
                if (null !== (Eu = this.viewer) && void 0 !== Eu && Eu.savePending) {
                  this.viewer.saveFailed(!0);
                  break
                }
                this.recorder.onEvent(uu);
                break;
              default:
                this.recorder.onEvent(uu)
            }
          }
        };
        this.sink = function(uu, Eu) {
          return {
            onReplayEvent: iU(uu, Eu)
          }
        }(ju, uu.buffer), this.recorderEvents = WU(ju)
      }
      get currentViewer() {
        return this.viewer
      }
      loadViewer() {
        var uu;
        return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (uu = this.deps.loadViewer) && void 0 !== uu ? uu : IU)().catch((uu => {
          throw this.viewerChunk = null, uu
        })), this.viewerChunk.then((uu => (this.viewer ??= new uu.ReplayViewer({
          client: this.deps.client,
          setHoldDraws: this.deps.setHoldDraws,
          meshPending: this.deps.meshPending,
          notify: this.deps.notify,
          onChange: () => {
            var uu, Eu;
            null === (uu = (Eu = this.deps).onViewerChange) || void 0 === uu || uu.call(Eu)
          }
        }), this.viewer))))
      }
      activated(uu) {
        this.recorder.activated(uu)
      }
      afterFrame(uu) {
        try {
          uu > 0 && this.recorder.Tb()
        } finally {
          var Eu;
          null === (Eu = this.viewer) || void 0 === Eu || Eu.afterFrame()
        }
      }
      end() {
        var uu;
        null === (uu = this.viewer) || void 0 === uu || uu.end()
      }
      saveFailed(uu) {
        var Eu;
        uu === cu.hd.Edited ? null === (Eu = this.viewer) || void 0 === Eu || Eu.saveFailed(!1) : this.recorder.failed(uu)
      }
    }
    var BU = ju(40873),
      LU = ju(40889),
      tU = ju(4979),
      xU = ju(41140);
    class TU {
      constructor(uu) {
        this.deps = uu, this.analogue = [0, 0], this.keys = 0, this.unsent = !1
      }
      drag(uu, Eu) {
        if (!this.deps.live() || 0 === uu && 0 === Eu) return;
        const ju = (0, iu.r)(0, performance.now()),
          su = this.deps.dragScale();
        (0, xU.i)((() => {
          (0, iu.v)(cu.sb.MouseDown, 0, 0, 0, ju), (0, iu.v)(cu.sb.MouseMove, 0, uu * su, Eu * su, 0), (0, iu.v)(cu.sb.MouseUp, 0, 0, 0, ju)
        }))
      }
      move(uu) {
        var Eu, ju;
        this.analogue[0] = null !== (Eu = null === uu || void 0 === uu ? void 0 : uu.x) && void 0 !== Eu ? Eu : 0, this.analogue[1] = null !== (ju = null === uu || void 0 === uu ? void 0 : uu.y) && void 0 !== ju ? ju : 0, this.send()
      }
      holdVertical(uu, Eu) {
        const ju = "freeCamUp" === uu ? Ou.Pb.Up : Ou.Pb.Down;
        this.keys = Eu ? this.keys | ju : this.keys & ~ju, this.send()
      }
      flush() {
        this.unsent && this.send()
      }
      send() {
        const uu = this.deps.live() ? this.deps.cmd() : null;
        this.unsent = null !== uu && !(0, Ou.me)(uu, 0, this.analogue, this.keys)
      }
    }
    var HU = ju(3761),
      AU = ju(785),
      nU = ju(284),
      yU = ju(91),
      zU = ju(34486),
      RU = ju(770),
      uZ = ju(36988);

    function EZ() {
      const uu = su.d.get("clientEscMenuOptions"),
        Eu = (0, AU.o)(uu);
      return {
        mouse: (0, yU.isMobile)() ? Eu : uu.mouseSensitivity,
        touch: Eu,
        fovPercent: uu.cameraFOV
      }
    }

    function jZ() {
      const uu = su.d.get("clientEscMenuOptions"),
        Eu = su.d.get("isTouchScreen") ? (0, AU.o)(uu) : uu.mouseSensitivity,
        ju = EZ().mouse;
      return ju > 0 ? Eu / ju : 1
    }

    function sZ(uu) {
      const Eu = () => {
        uu.setSoundPrefs(su.d.get("soundVolume"), su.d.get("soundOnFromAd"))
      };
      let ju = null;
      const Uu = () => {
        const {
          showFog: Eu,
          enableLighting: Uu,
          fogChunkDistance: Zu,
          chunkFadeIn: Xu
        } = su.d.get("clientEscMenuOptions"), lu = {
          showFog: Eu,
          lighting: Uu,
          fogChunks: Zu,
          chunkFade: Xu,
          cellLight: (0, HU.n)("cellLight") ? (0, HU.n)("cellLightUnlit") ? "all" : "lit" : "off"
        };
        ju && (0, cu.ie)(ju) === (0, cu.ie)(lu) && ju.fogChunks === Zu || (ju = lu, uu.setEnvPrefs(ju))
      };
      let Zu = null;
      const lu = () => {
        const Eu = function() {
          const uu = su.d.get("clientEscMenuOptions");
          return {
            nametagsHidden: su.d.get("areNametagsHidden"),
            crouchToggle: uu.crouchIsToggle,
            bhopDisabled: uu.disableBunnyHopping,
            disableBobbing: uu.disableBobbing,
            ezTowering: uu.ezTowering ? (0, nU.e)() : null,
            ezBridging: uu.ezBridging,
            showChunkBorders: uu.showChunkBorders,
            touchWalk: !(0, uZ.i)(),
            edgeGuard: uu.touchEdgeGuard,
            edgeGuardLong: (0, RU.e)(),
            nametagCutDistance: (0, zU.e)()
          }
        }();
        (0, au.he)(Zu, Eu) || (Zu = Eu, uu.setUiPrefs(Eu))
      };
      let qu = null;
      const fu = () => {
        const Eu = EZ();
        (0, au.he)(qu, Eu) || (qu = Eu, uu.setLookPrefs(Eu))
      };
      Eu(), Uu(), lu(), fu();
      const Cu = [(0, Xu.l)("appManagerUpdated|soundVolume", Eu), (0, Xu.l)("appManagerUpdated|soundOnFromAd", Eu), (0, Xu.l)("appManagerUpdated|clientEscMenuOptions", (() => {
        Uu(), lu(), fu()
      })), (0, Xu.l)(uZ.e, lu), (0, Xu.l)("appManagerUpdated|enabledDebugFeatures", Uu), (0, Xu.l)("appManagerUpdated|areNametagsHidden", lu), (0, Xu.l)("appManagerUpdated|showDistantNametags", lu)];
      return () => {
        for (const uu of Cu) uu()
      }
    }
    var UZ = ju(41121),
      ZZ = ju(41128);
    var XZ = (0, ZZ.b)("lend"),
      lZ = (0, ZZ.b)("starting"),
      qZ = (0, ZZ.b)("generation"),
      fZ = (0, ZZ.b)("end");
    class CZ {
      constructor(uu) {
        this.deps = uu, Object.defineProperty(this, fZ, {
          value: bZ
        }), Object.defineProperty(this, XZ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, lZ, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, qZ, {
          writable: !0,
          value: 0
        })
      }
      get active() {
        return null !== (0, UZ.b)(this, XZ)[XZ] || (0, UZ.b)(this, lZ)[lZ]
      }
      async start(uu) {
        if (this.active) return "busy";
        const Eu = (0, UZ.b)(this, qZ)[qZ];
        (0, UZ.b)(this, lZ)[lZ] = !0;
        try {
          if (!await this.deps.ensureLoaded()) return "refused"
        } finally {
          (0, UZ.b)(this, lZ)[lZ] = !1
        }
        if (Eu !== (0, UZ.b)(this, qZ)[qZ]) return "refused";
        const ju = this.deps.beginSave();
        if (!ju) return "refused";
        const su = Number(BigInt.asUintN(32, uu)),
          Uu = Number(BigInt.asUintN(32, uu >> 32n));
        let Zu = "refused";
        return this.deps.recorderCall(((uu, Eu) => {
          const Xu = ju.editState,
            lu = uu.stage(Xu.length);
          0 !== lu ? (new Uint8Array(Eu.buffer, lu, Xu.length).set(Xu), uu.IUu(ju.headLen, su, Uu) && (Zu = "sealing")) : Zu = "tooLarge"
        }), !0), "sealing" !== Zu ? (ju.end(), Zu) : ((0, UZ.b)(this, XZ)[XZ] = ju, "sealing")
      }
      beforeRecorderStep() {
        const uu = (0, UZ.b)(this, XZ)[XZ];
        if (!uu) return null;
        let Eu = -1,
          ju = 0;
        if (!this.deps.recorderCall((uu => {
            Eu = uu.FUu(), Eu > 0 && (ju = uu.BUu())
          }))) return (0, UZ.b)(this, fZ)[fZ](uu, "stopped");
        if (Eu < 0) return (0, UZ.b)(this, fZ)[fZ](uu, "read");
        if (0 === Eu) return null;
        const su = uu.head(ju, Eu);
        let Uu = !1;
        if (su && this.deps.recorderCall(((uu, ju) => {
            const Zu = uu.stage(Eu);
            0 !== Zu && (new Uint8Array(ju.buffer, Zu, Eu).set(su), Uu = !0)
          }), !0), Uu) return null;
        const Zu = uu.givenUp();
        this.deps.recorderCall((uu => {
          uu.LUu()
        }));
        const Xu = (0, UZ.b)(this, fZ)[fZ](uu, Zu ? "givenUp" : "stopped");
        return Zu && this.deps.givenUp("Reopen the replay you were editing to make your edits again, as they weren't saved when another replay opened."), Xu
      }
      stop() {
        (0, UZ.b)(this, qZ)[qZ]++;
        const uu = (0, UZ.b)(this, XZ)[XZ];
        uu && (this.deps.recorderCall((uu => {
          uu.LUu()
        })), (0, UZ.b)(this, fZ)[fZ](uu, "stopped"))
      }
    }

    function bZ(uu, Eu) {
      return (0, UZ.b)(this, XZ)[XZ] = null, uu.end(), Eu
    }

    function cZ(uu, Eu) {
      const ju = new Uint8Array(4),
        su = new DataView(ju.buffer);
      return su.setUint8(0, uu ? 1 : 0), su.setUint16(2, Math.max(0, Math.min(65535, Math.round(Eu))), !0), ju
    }

    function NZ(uu, Eu) {
      return uu > function(uu) {
        return 16777216 + 314572.8 * Math.max(0, uu)
      }(Eu) + 33554432
    }
    let OZ = null;

    function YZ(uu) {
      return OZ ??= async function(uu) {
        const Eu = uu.loadInFlight();
        Eu && await Eu.catch((() => {}));
        if (uu.trapped()) return "trapped";
        if (uu.busy() || !NZ(uu.memoryBytes(), uu.clipSeconds())) return "oN";
        uu.unload();
        let ju = !1;
        try {
          ju = await uu.load()
        } catch {
          ju = !1
        }
        if (!ju) return uu.trapped() ? "trapped" : uu.fO() ? "fO" : "failed";
        return "recycled"
      }(uu).finally((() => {
        OZ = null
      })), OZ
    }
    const hZ = "Replay recording couldn't load, so try again.",
      DZ = new Set([cu.Wc.ToggleRecording, cu.Wc.SaveClip]);
    var gZ = (0, ZZ.b)("bindings"),
      MZ = (0, ZZ.b)("module"),
      eZ = (0, ZZ.b)("memory"),
      GZ = (0, ZZ.b)("trapped"),
      pZ = (0, ZZ.b)("fO"),
      wZ = (0, ZZ.b)("recycleDue"),
      JZ = (0, ZZ.b)("loading"),
      dZ = (0, ZZ.b)("generation"),
      aZ = (0, ZZ.b)("viewDrawn"),
      PZ = (0, ZZ.b)("clip"),
      oZ = (0, ZZ.b)("session"),
      kZ = (0, ZZ.b)("control"),
      mZ = (0, ZZ.b)("deferred"),
      vZ = (0, ZZ.b)("coreU8"),
      KZ = (0, ZZ.b)("coreU32"),
      VZ = (0, ZZ.b)("moduleU8"),
      rZ = (0, ZZ.b)("edited"),
      QZ = (0, ZZ.b)("sendSession"),
      iZ = (0, ZZ.b)("checkNotInEvents"),
      WZ = (0, ZZ.b)("clipping"),
      SZ = (0, ZZ.b)("busy"),
      IZ = (0, ZZ.b)("use"),
      FZ = (0, ZZ.b)("ensureLoaded"),
      BZ = (0, ZZ.b)("loadOnce"),
      LZ = (0, ZZ.b)("recycleAfterStep"),
      tZ = (0, ZZ.b)("settleRecycle"),
      xZ = (0, ZZ.b)("load"),
      TZ = (0, ZZ.b)("attach"),
      HZ = (0, ZZ.b)("resendHeld"),
      AZ = (0, ZZ.b)("recycle"),
      nZ = (0, ZZ.b)("send"),
      yZ = (0, ZZ.b)("unload"),
      zZ = (0, ZZ.b)("dropModule"),
      RZ = (0, ZZ.b)("coreBytes"),
      uX = (0, ZZ.b)("coreWords"),
      EX = (0, ZZ.b)("moduleBytes"),
      jX = (0, ZZ.b)("loadFailed"),
      sX = (0, ZZ.b)("call"),
      UX = (0, ZZ.b)("guard"),
      ZX = (0, ZZ.b)("trapOn");
    class XX {
      constructor(uu) {
        this.deps = uu, Object.defineProperty(this, ZX, {
          value: kX
        }), Object.defineProperty(this, UX, {
          value: oX
        }), Object.defineProperty(this, sX, {
          value: PX
        }), Object.defineProperty(this, jX, {
          value: aX
        }), Object.defineProperty(this, EX, {
          value: dX
        }), Object.defineProperty(this, uX, {
          value: JX
        }), Object.defineProperty(this, RZ, {
          value: wX
        }), Object.defineProperty(this, zZ, {
          value: pX
        }), Object.defineProperty(this, yZ, {
          value: GX
        }), Object.defineProperty(this, nZ, {
          value: eX
        }), Object.defineProperty(this, AZ, {
          value: MX
        }), Object.defineProperty(this, HZ, {
          value: gX
        }), Object.defineProperty(this, TZ, {
          value: DX
        }), Object.defineProperty(this, xZ, {
          value: hX
        }), Object.defineProperty(this, tZ, {
          value: YX
        }), Object.defineProperty(this, LZ, {
          value: OX
        }), Object.defineProperty(this, BZ, {
          value: NX
        }), Object.defineProperty(this, FZ, {
          value: cX
        }), Object.defineProperty(this, IZ, {
          value: bX
        }), Object.defineProperty(this, SZ, {
          value: CX
        }), Object.defineProperty(this, WZ, {
          value: fX
        }), Object.defineProperty(this, iZ, {
          value: qX
        }), Object.defineProperty(this, QZ, {
          value: lX
        }), Object.defineProperty(this, gZ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, MZ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, eZ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, GZ, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, pZ, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, wZ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, JZ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, dZ, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, aZ, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, PZ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, oZ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, kZ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, mZ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, vZ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, KZ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, VZ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, rZ, {
          writable: !0,
          value: void 0
        }), (0, UZ.b)(this, rZ)[rZ] = new CZ({
          ensureLoaded: () => (0, UZ.b)(this, FZ)[FZ](),
          recorderCall: (uu, Eu) => {
            Eu && (0, UZ.b)(this, iZ)[iZ]("an edited save's stage");
            const ju = (0, UZ.b)(this, sX)[sX](((Eu, ju) => (uu(Eu, ju), !0)));
            return null !== ju && void 0 !== ju && ju
          },
          beginSave: uu.beginSave,
          givenUp: uu.givenUp
        })
      }
      get active() {
        return null !== (0, UZ.b)(this, MZ)[MZ]
      }
      get trapped() {
        return (0, UZ.b)(this, GZ)[GZ]
      }
      get loading() {
        return null !== (0, UZ.b)(this, JZ)[JZ]
      }
      prefetch() {
        (0, UZ.b)(this, pZ)[pZ] || (0, UZ.b)(this, GZ)[GZ] || (0, UZ.b)(this, MZ)[MZ] || (0, UZ.b)(this, JZ)[JZ] || this.deps.prefetch()
      }
      viewDrawn() {
        (0, UZ.b)(this, aZ)[aZ] = !0, (0, UZ.b)(this, WZ)[WZ]() && (0, UZ.b)(this, IZ)[IZ]()
      }
      prefs(uu, Eu) {
        (0, UZ.b)(this, PZ)[PZ] = {
          on: uu,
          seconds: Eu
        }, (0, UZ.b)(this, nZ)[nZ](cu.Qc.Prefs, cZ(uu, Eu)), uu && (0, UZ.b)(this, aZ)[aZ] && (0, UZ.b)(this, IZ)[IZ]()
      }
      control(uu) {
        const Eu = function(uu) {
          return new Uint8Array([uu, 0, 0, 0])
        }(uu);
        if (DZ.has(uu)) return (0, UZ.b)(this, MZ)[MZ] ? void(0, UZ.b)(this, nZ)[nZ](cu.Qc.Control, Eu) : ((0, UZ.b)(this, kZ)[kZ] = Eu, void(0, UZ.b)(this, IZ)[IZ]());
        (0, UZ.b)(this, pZ)[pZ] || this.deps.coreCommand(cu.Qc.Control, Eu)
      }
      session(uu) {
        (0, UZ.b)(this, oZ)[oZ] = uu, (0, UZ.b)(this, QZ)[QZ](uu)
      }
      filePartDone(uu, Eu) {
        (0, UZ.b)(this, nZ)[nZ](cu.Qc.FilePartDone, function(uu, Eu) {
          const ju = new Uint8Array(8),
            su = new DataView(ju.buffer);
          return su.setUint32(0, uu, !0), su.setUint32(4, Eu, !0), ju
        }(uu, Eu))
      }
      fileDone(uu) {
        return (0, UZ.b)(this, nZ)[nZ](cu.Qc.FileDone, function(uu) {
          const Eu = new Uint8Array(4);
          return new DataView(Eu.buffer).setUint32(0, uu, !0), Eu
        }(uu)), (0, UZ.b)(this, LZ)[LZ]()
      }
      saveEdited(uu) {
        return (0, UZ.b)(this, iZ)[iZ]("saveEdited"), (0, UZ.b)(this, rZ)[rZ].start(uu)
      }
      afterFrame() {
        if (!(0, UZ.b)(this, MZ)[MZ]) return;
        "read" === (0, UZ.b)(this, rZ)[rZ].beforeRecorderStep() && (0, UZ.b)(this, LZ)[LZ]();
        const uu = (0, UZ.b)(this, wZ)[wZ];
        (0, UZ.b)(this, wZ)[wZ] = null;
        const Eu = (0, UZ.b)(this, MZ)[MZ],
          ju = (0, UZ.b)(this, eZ)[eZ];
        if (!Eu || !ju) return void(null === uu || void 0 === uu || uu.resolve((0, UZ.b)(this, GZ)[GZ] ? "trapped" : "oN"));
        const {
          core: su
        } = this.deps, Uu = su.TUu(2);
        let Zu, Xu, lu, qu, fu = 0,
          Cu = 0;
        if (0 !== Uu) {
          var bu, cu;
          const uu = (0, UZ.b)(this, uX)[uX]();
          fu = null !== (bu = uu[Uu >>> 2]) && void 0 !== bu ? bu : 0, Cu = null !== (cu = uu[1 + (Uu >>> 2)]) && void 0 !== cu ? cu : 0
        }
        try {
          if (Cu > 0) {
            const uu = Eu.feed(Cu);
            0 !== uu && (0, UZ.b)(this, EX)[EX](ju).set((0, UZ.b)(this, RZ)[RZ]().subarray(fu, fu + Cu), uu)
          }
          Zu = Eu.step(), Xu = Eu.HUu(), lu = Eu.AUu(), qu = Eu.nUu()
        } catch (Nu) {
          if (!(0, UZ.b)(this, ZX)[ZX](Nu)) throw null === uu || void 0 === uu || uu.resolve("oN"), Nu;
          return void(null === uu || void 0 === uu || uu.resolve("trapped"))
        }
        if (Zu > 0) {
          const uu = su.yUu(2, Zu);
          0 !== uu && (0, UZ.b)(this, RZ)[RZ]().set((0, UZ.b)(this, EX)[EX](ju).subarray(Xu, Xu + Zu), uu)
        }
        if (lu > 0) {
          (0, UZ.b)(this, mZ)[mZ] = [];
          try {
            this.deps.events(new Uint8Array(ju.buffer, qu, lu), ju)
          } catch (Nu) {
            throw null === uu || void 0 === uu || uu.resolve("oN"), Nu
          } finally {
            const uu = (0, UZ.b)(this, mZ)[mZ];
            (0, UZ.b)(this, mZ)[mZ] = null;
            for (const [Eu, ju] of uu)(0, UZ.b)(this, nZ)[nZ](Eu, ju)
          }
        }
        if (!(0, UZ.b)(this, WZ)[WZ]() && !(0, UZ.b)(this, SZ)[SZ]()) return (0, UZ.b)(this, yZ)[yZ](), void(null === uu || void 0 === uu || uu.resolve("oN"));
        null === uu || void 0 === uu || uu.resolve((0, UZ.b)(this, AZ)[AZ]())
      }
      dispose() {
        (0, UZ.b)(this, pZ)[pZ] = !0, (0, UZ.b)(this, yZ)[yZ]()
      }
    }

    function lX(uu) {
      (0, UZ.b)(this, nZ)[nZ](cu.Qc.Session, function(uu) {
        const Eu = new TextEncoder,
          ju = Eu.encode(uu.game).subarray(0, 65535),
          su = Eu.encode(uu.lobby).subarray(0, 65535),
          Uu = new Uint8Array(22 + ju.length + 2 + su.length),
          Zu = new DataView(Uu.buffer);
        Zu.setFloat64(0, uu.unixMs, !0), Zu.setBigUint64(8, BigInt.asUintN(64, uu.session), !0), Zu.setUint8(16, uu.lobbyType);
        let Xu = 20;
        for (const lu of [ju, su]) Zu.setUint16(Xu, lu.length, !0), Uu.set(lu, Xu + 2), Xu += 2 + lu.length;
        return Uu
      }({
        ...uu,
        unixMs: this.deps.unixNow()
      }))
    }

    function qX(uu) {
      false
    }

    function fX() {
      var uu, Eu;
      return null !== (uu = null === (Eu = (0, UZ.b)(this, PZ)[PZ]) || void 0 === Eu ? void 0 : Eu.on) && void 0 !== uu && uu
    }

    function CX() {
      const uu = (0, UZ.b)(this, MZ)[MZ];
      let Eu = !0;
      if (uu) try {
        Eu = uu.busy()
      } catch (ju) {
        if (!(0, UZ.b)(this, ZX)[ZX](ju)) throw ju
      }
      return Eu || (0, UZ.b)(this, rZ)[rZ].active
    }
    async function bX() {
      !(0, UZ.b)(this, pZ)[pZ] && this.deps.allowed() ? await (0, UZ.b)(this, FZ)[FZ]() : (0, UZ.b)(this, kZ)[kZ] = null
    }

    function cX() {
      return (0, UZ.b)(this, GZ)[GZ] || (0, UZ.b)(this, pZ)[pZ] ? Promise.resolve(!1) : (0, UZ.b)(this, MZ)[MZ] ? Promise.resolve(!0) : ((0, UZ.b)(this, JZ)[JZ] ??= (0, UZ.b)(this, BZ)[BZ](), (0, UZ.b)(this, JZ)[JZ])
    }
    async function NX() {
      let uu = !1;
      try {
        return uu = await (0, UZ.b)(this, xZ)[xZ](), uu
      } finally {
        uu || ((0, UZ.b)(this, kZ)[kZ] = null), (0, UZ.b)(this, JZ)[JZ] = null
      }
    }

    function OX() {
      if (!(0, UZ.b)(this, MZ)[MZ]) return Promise.resolve((0, UZ.b)(this, GZ)[GZ] ? "trapped" : "oN");
      if (!(0, UZ.b)(this, wZ)[wZ]) {
        let uu = () => {};
        const Eu = new Promise((Eu => {
          uu = Eu
        }));
        (0, UZ.b)(this, wZ)[wZ] = {
          promise: Eu,
          resolve: uu
        }
      }
      return (0, UZ.b)(this, wZ)[wZ].promise
    }

    function YX(uu) {
      const Eu = (0, UZ.b)(this, wZ)[wZ];
      (0, UZ.b)(this, wZ)[wZ] = null, null === Eu || void 0 === Eu || Eu.resolve(uu)
    }
    async function hX() {
      let uu = (0, UZ.b)(this, gZ)[gZ];
      if (!uu) {
        const Eu = (0, UZ.b)(this, dZ)[dZ];
        try {
          uu = await this.deps.load()
        } catch (ju) {
          return Eu === (0, UZ.b)(this, dZ)[dZ] && await (0, UZ.b)(this, jX)[jX](ju), !1
        }
        if (Eu !== (0, UZ.b)(this, dZ)[dZ]) return this.deps.unload(), !1;
        const su = uu,
          Uu = (0, UZ.b)(this, UX)[UX]((() => su.zUu()));
        if (void 0 === Uu) return !1;
        const Zu = this.deps.core.RUu();
        if (Uu !== Zu) return await (0, UZ.b)(this, jX)[jX](new Error(`recorder port version ${Uu}, the core's ${Zu}`)), !1;
        (0, UZ.b)(this, gZ)[gZ] = uu
      }
      const Eu = uu;
      try {
        if (!(0, UZ.b)(this, UX)[UX]((() => ((0, UZ.b)(this, MZ)[MZ] = new Eu.uZu, (0, UZ.b)(this, eZ)[eZ] = Eu.tUu(), !0)))) return !1;
        (0, UZ.b)(this, HZ)[HZ]();
        const uu = (0, UZ.b)(this, kZ)[kZ];
        return (0, UZ.b)(this, kZ)[kZ] = null, uu && (0, UZ.b)(this, nZ)[nZ](cu.Qc.Control, uu), (0, UZ.b)(this, TZ)[TZ]()
      } catch (ju) {
        return (0, UZ.b)(this, yZ)[yZ](), await (0, UZ.b)(this, jX)[jX](ju), !1
      }
    }

    function DX() {
      return this.deps.core.EZu(0), 1 === this.deps.core.EZu(1) || ((0, UZ.b)(this, yZ)[yZ](), this.deps.failed(hZ), !1)
    }

    function gX() {
      (0, UZ.b)(this, PZ)[PZ] && (0, UZ.b)(this, nZ)[nZ](cu.Qc.Prefs, cZ((0, UZ.b)(this, PZ)[PZ].on, (0, UZ.b)(this, PZ)[PZ].seconds)), (0, UZ.b)(this, oZ)[oZ] && (0, UZ.b)(this, QZ)[QZ]((0, UZ.b)(this, oZ)[oZ])
    }

    function MX() {
      return YZ({
        memoryBytes: this.deps.memoryBytes,
        clipSeconds: () => {
          var uu, Eu;
          return null !== (uu = null === (Eu = (0, UZ.b)(this, PZ)[PZ]) || void 0 === Eu ? void 0 : Eu.seconds) && void 0 !== uu ? uu : 0
        },
        trapped: () => (0, UZ.b)(this, GZ)[GZ],
        busy: () => (0, UZ.b)(this, SZ)[SZ](),
        loadInFlight: () => (0, UZ.b)(this, JZ)[JZ],
        fO: () => (0, UZ.b)(this, pZ)[pZ],
        unload: () => {
          (0, UZ.b)(this, yZ)[yZ]()
        },
        load: () => (0, UZ.b)(this, FZ)[FZ]()
      })
    }

    function eX(uu, Eu) {
      (0, UZ.b)(this, mZ)[mZ] ? (0, UZ.b)(this, mZ)[mZ].push([uu, Eu]): (0, UZ.b)(this, sX)[sX](((ju, su) => {
        const Uu = ju.xUu(Eu.length);
        0 !== Uu && (new Uint8Array(su.buffer, Uu, Eu.length).set(Eu), ju.command(uu, Eu.length))
      }))
    }

    function GX() {
      (0, UZ.b)(this, dZ)[dZ]++, (0, UZ.b)(this, tZ)[tZ]("oN"), (0, UZ.b)(this, rZ)[rZ].stop(), this.deps.core.EZu(0), (0, UZ.b)(this, zZ)[zZ](), (0, UZ.b)(this, GZ)[GZ] || ((0, UZ.b)(this, gZ)[gZ] = null, this.deps.unload())
    }

    function pX() {
      (0, UZ.b)(this, sX)[sX]((uu => {
        uu.free()
      })), (0, UZ.b)(this, MZ)[MZ] = null, (0, UZ.b)(this, eZ)[eZ] = null, (0, UZ.b)(this, VZ)[VZ] = null
    }

    function wX() {
      var uu;
      const Eu = this.deps.coreBuffer();
      return (null === (uu = (0, UZ.b)(this, vZ)[vZ]) || void 0 === uu ? void 0 : uu.buffer) !== Eu && ((0, UZ.b)(this, vZ)[vZ] = new Uint8Array(Eu)), (0, UZ.b)(this, vZ)[vZ]
    }

    function JX() {
      var uu;
      const Eu = this.deps.coreBuffer();
      return (null === (uu = (0, UZ.b)(this, KZ)[KZ]) || void 0 === uu ? void 0 : uu.buffer) !== Eu && ((0, UZ.b)(this, KZ)[KZ] = new Uint32Array(Eu, 0, Eu.byteLength >>> 2)), (0, UZ.b)(this, KZ)[KZ]
    }

    function dX(uu) {
      var Eu;
      const ju = uu.buffer;
      return (null === (Eu = (0, UZ.b)(this, VZ)[VZ]) || void 0 === Eu ? void 0 : Eu.buffer) !== ju && ((0, UZ.b)(this, VZ)[VZ] = new Uint8Array(ju)), (0, UZ.b)(this, VZ)[VZ]
    }
    async function aX(uu) {
      await this.deps.staleOr(uu, (() => {
        this.deps.failed(hZ)
      }))
    }

    function PX(uu) {
      const Eu = (0, UZ.b)(this, MZ)[MZ],
        ju = (0, UZ.b)(this, eZ)[eZ];
      if (Eu && ju) return (0, UZ.b)(this, UX)[UX]((() => uu(Eu, ju)))
    }

    function oX(uu) {
      if (!(0, UZ.b)(this, GZ)[GZ]) try {
        return uu()
      } catch (Eu) {
        if (!(0, UZ.b)(this, ZX)[ZX](Eu)) throw Eu;
        return
      }
    }

    function kX(uu) {
      return uu instanceof WebAssembly.RuntimeError && ((0, UZ.b)(this, GZ)[GZ] = !0, (0, UZ.b)(this, MZ)[MZ] = null, (0, UZ.b)(this, eZ)[eZ] = null, (0, UZ.b)(this, VZ)[VZ] = null, (0, UZ.b)(this, gZ)[gZ] = null, (0, UZ.b)(this, kZ)[kZ] = null, (0, UZ.b)(this, tZ)[tZ]("trapped"), this.deps.core.EZu(0), (0, UZ.b)(this, rZ)[rZ].stop(), this.deps.crash(this.deps.markTrapped(uu)), this.deps.failed("Replay recording stopped working, so reload the page to record replays again."), !0)
    }
    var mX = ju(38992);
    const vX = new Map([
      ["skyblock", () => ju.e(52).then((() => ju(38988)))]
    ]);

    function KX(uu) {
      const Eu = vX.get(uu);
      return Eu ? Eu().then((() => {
        const Eu = (0, mX.c)(uu);
        if (!Eu) throw new Error(`${uu}'s replay hook module registered no hook`);
        return Eu
      })) : null
    }
    class VX {
      constructor(uu) {
        this.deps = uu, this.game = null, this.hook = null, this.generation = 0, this.all = !1, this.pending = new Map, this.ids = new Int32Array(64)
      }
      get wantsWatch() {
        return null !== this.hook
      }
      opened(uu) {
        if (this.pending.clear(), uu === this.game && null !== this.hook) return void(this.all = !0);
        const Eu = ++this.generation;
        this.game = uu, this.hook = null, this.all = !1;
        const ju = this.deps.loadHook(uu);
        null === ju || void 0 === ju || ju.then((uu => {
          Eu === this.generation && (this.hook = uu, this.all = !0)
        }), (uu => {
          Eu === this.generation && this.deps.onError(uu)
        }))
      }
      ended() {
        this.generation++, this.game = null, this.hook = null, this.all = !1, this.pending.clear()
      }
      entityAdded(uu) {
        null === this.hook || this.all || this.pending.set(uu, !0)
      }
      entityInfoChanged(uu) {
        null === this.hook || this.all || this.pending.has(uu) || this.pending.set(uu, !1)
      }
      flush(uu) {
        const {
          hook: Eu
        } = this;
        if (null === Eu || !uu || !this.all && 0 === this.pending.size) return;
        const ju = this.deps.cmd();
        if (null === ju) return;
        const {
          api: su
        } = this.deps;
        if (this.all) {
          this.all = !1, this.pending.clear();
          const {
            ids: uu,
            count: Eu
          } = Wj(su, this.ids);
          this.ids = uu;
          for (let ju = 0; ju < Eu; ju++) this.pending.set(uu[ju], !0)
        }
        const Uu = this.ids = Sj(this.ids, this.pending.size);
        let Zu = 0;
        for (const fu of this.pending.keys()) Uu[Zu++] = fu;
        const Xu = [],
          lu = Ij(su, Uu, Zu, ((uu, Eu) => {
            null !== Eu && Xu.push({
              serverId: uu,
              info: Eu,
              spawned: !0 === this.pending.get(uu)
            })
          }));
        if (lu) {
          this.pending.clear();
          for (const {
              serverId: uu,
              info: su,
              spawned: Uu
            }
            of Xu) try {
            Eu(su, {
              setFacingTolerance: Eu => {
                null === Eu && Uu || lj(ju, uu, Eu) || this.pending.set(uu, Uu)
              }
            })
          } catch (qu) {
            this.deps.onError(qu)
          }
        }
      }
    }
    var rX = (0, ZZ.b)("bindings"),
      QX = (0, ZZ.b)("module"),
      iX = (0, ZZ.b)("memory"),
      WX = (0, ZZ.b)("trapped"),
      SX = (0, ZZ.b)("generation"),
      IX = (0, ZZ.b)("loading"),
      FX = (0, ZZ.b)("lend"),
      BX = (0, ZZ.b)("givenUp"),
      LX = (0, ZZ.b)("afterSave"),
      tX = (0, ZZ.b)("opens"),
      xX = (0, ZZ.b)("saveAskedAt"),
      TX = (0, ZZ.b)("unload"),
      HX = (0, ZZ.b)("dropModule"),
      AX = (0, ZZ.b)("loadFailed"),
      nX = (0, ZZ.b)("saveReadsBody"),
      yX = (0, ZZ.b)("command"),
      zX = (0, ZZ.b)("call"),
      RX = (0, ZZ.b)("guard"),
      ul = (0, ZZ.b)("trapOn");
    class El {
      constructor(uu) {
        this.deps = uu, Object.defineProperty(this, ul, {
          value: fl
        }), Object.defineProperty(this, RX, {
          value: ql
        }), Object.defineProperty(this, zX, {
          value: ll
        }), Object.defineProperty(this, yX, {
          value: Xl
        }), Object.defineProperty(this, nX, {
          get: Zl,
          set: void 0
        }), Object.defineProperty(this, AX, {
          value: Ul
        }), Object.defineProperty(this, HX, {
          value: sl
        }), Object.defineProperty(this, TX, {
          value: jl
        }), Object.defineProperty(this, rX, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, QX, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, iX, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, WX, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, SX, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, IX, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, FX, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, BX, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, LX, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, tX, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, xX, {
          writable: !0,
          value: null
        })
      }
      get active() {
        return null !== (0, UZ.b)(this, QX)[QX] && null === (0, UZ.b)(this, LX)[LX]
      }
      async open(uu, Eu) {
        if ((0, UZ.b)(this, WX)[WX]) return cu.ed.ModuleTrap;
        let ju = (0, UZ.b)(this, rX)[rX];
        if (!ju) {
          const uu = (0, UZ.b)(this, SX)[SX];
          (0, UZ.b)(this, IX)[IX]++;
          try {
            ju = await this.deps.load()
          } catch (Uu) {
            return (0, UZ.b)(this, IX)[IX]--, uu !== (0, UZ.b)(this, SX)[SX] ? "stopped" : (0, UZ.b)(this, AX)[AX](Uu, Eu)
          }
          if ((0, UZ.b)(this, IX)[IX]--, uu !== (0, UZ.b)(this, SX)[SX]) return (0, UZ.b)(this, rX)[rX] || 0 !== (0, UZ.b)(this, IX)[IX] || (0, UZ.b)(this, WX)[WX] || this.deps.unload(), "stopped";
          if ((0, UZ.b)(this, WX)[WX]) return cu.ed.ModuleTrap;
          const su = ju.zUu(),
            Zu = this.deps.core.RUu();
          if (su !== Zu) return (0, UZ.b)(this, AX)[AX](new Error(`replay port version ${su}, the core's ${Zu}`), Eu);
          (0, UZ.b)(this, rX)[rX] = ju
        }
        if (!(0, UZ.b)(this, QX)[QX]) {
          const uu = ju;
          if (!(0, UZ.b)(this, RX)[RX]((() => {
              (0, UZ.b)(this, QX)[QX] = new uu.jZu, (0, UZ.b)(this, iX)[iX] = uu.sZu()
            }))) return cu.ed.ModuleTrap
        }
        let su = !1;
        return (0, UZ.b)(this, zX)[zX](((Eu, ju) => {
          null !== (0, UZ.b)(this, LX)[LX] && Eu.step(0, 0);
          const Uu = Eu.stage(uu.length);
          0 !== Uu && (new Uint8Array(ju.buffer, Uu, uu.length).set(uu), Eu.open(), (0, UZ.b)(this, BX)[BX] = (0, UZ.b)(this, FX)[FX], (0, UZ.b)(this, LX)[LX] = null, (0, UZ.b)(this, tX)[tX]++, su = !0)
        })) ? su ? "opening" : cu.ed.TooLarge : cu.ed.ModuleTrap
      }
      beforeFrame(uu) {
        const Eu = (0, UZ.b)(this, QX)[QX],
          ju = (0, UZ.b)(this, iX)[iX];
        if (!Eu || !ju || null !== (0, UZ.b)(this, LX)[LX]) return;
        const {
          core: su
        } = this.deps, Uu = su.UZu(uu);
        if (Uu < 0) return;
        const Zu = Math.floor(Uu);
        let Xu, lu;
        try {
          Xu = Eu.step(Zu, Uu - Zu), lu = Eu.HUu()
        } catch (fu) {
          return void(0, UZ.b)(this, ul)[ul](fu)
        }
        const qu = su.yUu(1, Xu);
        if (0 === qu) {
          const uu = (0, UZ.b)(this, zX)[zX]((uu => {
            uu.close()
          }));
          if (!uu) return;
          return (0, UZ.b)(this, nX)[nX] ? (0, UZ.b)(this, LX)[LX] = "drop" : (0, UZ.b)(this, HX)[HX](), void su.ZZu(cu.ed.Port)
        }
        new Uint8Array(this.deps.coreBuffer(), qu, Xu).set(new Uint8Array(ju.buffer, lu, Xu))
      }
      play() {
        (0, UZ.b)(this, yX)[yX]((uu => {
          uu.play()
        }))
      }
      pause() {
        (0, UZ.b)(this, yX)[yX]((uu => {
          uu.pause()
        }))
      }
      seek(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, UZ.b)(this, yX)[yX]((ju => {
          ju.seek(uu, Eu)
        }))
      }
      setMark(uu, Eu) {
        return (0, UZ.b)(this, yX)[yX]((ju => {
          ju.XZu(uu, Eu)
        }))
      }
      addKeyframe(uu, Eu) {
        return (0, UZ.b)(this, yX)[yX]((ju => {
          ju.lZu(uu[0], uu[1], uu[2], Eu[0], Eu[1], Eu[2])
        }))
      }
      setKeyframe(uu, Eu) {
        return (0, UZ.b)(this, yX)[yX]((ju => {
          ju.qZu(uu, Eu)
        }))
      }
      moveKeyframe(uu, Eu) {
        return (0, UZ.b)(this, yX)[yX]((ju => {
          ju.fZu(uu, Eu)
        }))
      }
      deleteKeyframes(uu, Eu) {
        return (0, UZ.b)(this, yX)[yX]((ju => {
          ju.CZu(uu, Eu)
        }))
      }
      crop(uu, Eu) {
        return null === (0, UZ.b)(this, FX)[FX] && (0, UZ.b)(this, yX)[yX]((ju => {
          ju.crop(uu, Eu)
        }))
      }
      beginSave() {
        const uu = (0, UZ.b)(this, xX)[xX];
        if ((0, UZ.b)(this, xX)[xX] = null, null !== uu && uu !== (0, UZ.b)(this, tX)[tX]) return null;
        let Eu = 0,
          ju = null;
        if ((0, UZ.b)(this, zX)[zX](((uu, su) => {
            Eu = uu.save(), 0 !== Eu && (ju = new Uint8Array(su.buffer, uu.bZu(), uu.cZu()).slice())
          })), 0 === Eu || !ju) return null;
        const su = {
          headLen: Eu,
          editState: ju,
          givenUp: () => (0, UZ.b)(this, BX)[BX] === su,
          head: (uu, Eu) => {
            if ((0, UZ.b)(this, FX)[FX] !== su || !(0, UZ.b)(this, nX)[nX]) return null;
            let ju = null;
            return (0, UZ.b)(this, zX)[zX](((su, Uu) => {
              const Zu = su.NZu();
              0 !== Zu && uu >= 0 && Eu >= 0 && uu + Eu <= Zu && (ju = new Uint8Array(Uu.buffer, su.OZu() + uu, Eu))
            })), ju
          },
          end: () => {
            if ((0, UZ.b)(this, FX)[FX] !== su) return;
            (0, UZ.b)(this, FX)[FX] = null, (0, UZ.b)(this, BX)[BX] = null, (0, UZ.b)(this, zX)[zX]((uu => {
              uu.YZu()
            }));
            const uu = (0, UZ.b)(this, LX)[LX];
            (0, UZ.b)(this, LX)[LX] = null, "unload" === uu ? (0, UZ.b)(this, TX)[TX]() : "drop" === uu && (0, UZ.b)(this, HX)[HX]()
          }
        };
        return (0, UZ.b)(this, FX)[FX] = su, su
      }
      askSave() {
        (0, UZ.b)(this, xX)[xX] = (0, UZ.b)(this, tX)[tX]
      }
      setSpeed(uu) {
        (0, UZ.b)(this, yX)[yX]((Eu => {
          Eu.hZu(uu)
        }))
      }
      setCameraMode(uu) {
        (0, UZ.b)(this, yX)[yX]((Eu => {
          Eu.DZu(uu)
        }))
      }
      close() {
        (0, UZ.b)(this, yX)[yX]((uu => {
          uu.close()
        }))
      }
      stop() {
        (0, UZ.b)(this, SX)[SX]++, (0, UZ.b)(this, nX)[nX] && ((0, UZ.b)(this, zX)[zX]((uu => {
          uu.close()
        })), (0, UZ.b)(this, QX)[QX]) ? (0, UZ.b)(this, LX)[LX] = "unload" : (0, UZ.b)(this, TX)[TX]()
      }
    }

    function jl() {
      (0, UZ.b)(this, HX)[HX](), (0, UZ.b)(this, WX)[WX] || ((0, UZ.b)(this, rX)[rX] = null, this.deps.unload())
    }

    function sl() {
      (0, UZ.b)(this, zX)[zX]((uu => {
        uu.free()
      })), (0, UZ.b)(this, QX)[QX] = null, (0, UZ.b)(this, iX)[iX] = null
    }
    async function Ul(uu, Eu) {
      return await this.deps.staleOr(uu, (() => {}), {
        beforeReload: Eu
      }) ? "reloading" : cu.ed.ModuleLoad
    }

    function Zl() {
      return null !== (0, UZ.b)(this, FX)[FX] && (0, UZ.b)(this, BX)[BX] !== (0, UZ.b)(this, FX)[FX]
    }

    function Xl(uu) {
      return null === (0, UZ.b)(this, LX)[LX] && (0, UZ.b)(this, zX)[zX](uu)
    }

    function ll(uu) {
      const Eu = (0, UZ.b)(this, QX)[QX],
        ju = (0, UZ.b)(this, iX)[iX];
      return !(!Eu || !ju) && (0, UZ.b)(this, RX)[RX]((() => {
        uu(Eu, ju)
      }))
    }

    function ql(uu) {
      if ((0, UZ.b)(this, WX)[WX]) return !1;
      try {
        return uu(), !0
      } catch (Eu) {
        return (0, UZ.b)(this, ul)[ul](Eu), !1
      }
    }

    function fl(uu) {
      if (!(uu instanceof WebAssembly.RuntimeError)) throw uu;
      (0, UZ.b)(this, WX)[WX] = !0, (0, UZ.b)(this, QX)[QX] = null, (0, UZ.b)(this, iX)[iX] = null, (0, UZ.b)(this, rX)[rX] = null, this.deps.crash(this.deps.markTrapped(uu)), this.deps.core.ZZu(cu.ed.ModuleTrap)
    }
    var Cl = ju(6684),
      bl = ju(41242);
    const cl = "[bloxd-wasm-client]";
    const Nl = String(KU);

    function Ol(uu) {
      return null === uu || uu === Nl ? void 0 : uu
    }

    function Yl(uu) {
      var Eu, ju, su, Uu, Zu, lu, qu;
      switch (uu.what) {
        case cu.nd.FlyingText: {
          let Eu;
          try {
            Eu = JSON.parse(uu.contentJson)
          } catch (fu) {
            return void console.warn(`${cl} a replay's flying text isn't JSON`, fu)
          }
          Xu.h.TY("forceFlyingMiddleMessage", {
            content: Eu,
            IZ: uu.IZ,
            angle: uu.angle,
            FZ: uu.FZ
          });
          break
        }
        case cu.nd.PlayerKilled:
          (0, bl.f)({
            kind: "killed",
            body: {
              deadEId: null !== (Eu = Ol(uu.dead)) && void 0 !== Eu ? Eu : "",
              killerEId: Ol(uu.killer),
              withItem: null !== (ju = uu.withItem) && void 0 !== ju ? ju : "",
              killstreak: uu.killstreak
            }
          });
          break;
        case cu.nd.Killfeed:
          (0, bl.f)({
            kind: "custom",
            body: {
              killer: {
                eId: Ol(uu.killerId),
                name: null !== (su = uu.killerName) && void 0 !== su ? su : void 0,
                colour: null !== (Uu = uu.killerColour) && void 0 !== Uu ? Uu : void 0
              },
              victim: {
                eId: Ol(uu.victimId),
                name: null !== (Zu = uu.victimName) && void 0 !== Zu ? Zu : void 0,
                colour: null !== (lu = uu.victimColour) && void 0 !== lu ? lu : void 0
              },
              withItem: null !== (qu = uu.withItem) && void 0 !== qu ? qu : ""
            }
          })
      }
    }
    const hl = "[bloxd-wasm-client]";

    function Dl(uu) {
      if (void 0 === uu || null === uu || "" === uu) return null;
      const Eu = Number(uu);
      return Number.isInteger(Eu) && Eu > KU && Eu <= 2147483647 ? Eu : null
    }

    function gl(uu) {
      return {
        id: Dl(uu.eId),
        name: "string" === typeof uu.name ? uu.name : null,
        colour: "string" === typeof uu.colour ? uu.colour : null
      }
    }

    function Ml(uu) {
      const Eu = (0, LU.n)(Tj.mc.PlayerKilled, (Eu => {
          var ju, su;
          const Uu = (0, BU.i)(Eu);
          if (!(0, BU.e)(Uu)) return;
          const {
            deadEId: Zu,
            killerEId: Xu,
            withItem: lu,
            killstreak: qu
          } = Uu;
          uu.recordPlayerKilled(null !== (ju = Dl(Zu)) && void 0 !== ju ? ju : KU, null !== (su = Dl(Xu)) && void 0 !== su ? su : KU, "number" === typeof qu ? qu : 0, "string" === typeof lu ? lu : "")
        })),
        ju = (0, LU.n)(Tj.mc.CustomKillfeed, (Eu => {
          const ju = (0, BU.i)(Eu);
          if (!(0, BU.e)(ju) || !(0, BU.e)(ju.killer) || !(0, BU.e)(ju.victim)) return;
          const {
            killer: su,
            victim: Uu,
            withItem: Zu
          } = ju;
          uu.recordKillfeed(gl(su), gl(Uu), "string" === typeof Zu ? Zu : null)
        }));
      return () => {
        Eu(), ju()
      }
    }

    function el(uu) {
      var Eu;
      return void 0 === uu || null === uu ? null : null !== (Eu = JSON.stringify(uu)) && void 0 !== Eu ? Eu : null
    }

    function Gl(uu) {
      let Eu = null;
      const ju = () => {
        const {
          enableClipping: ju,
          clipDurationSeconds: Uu
        } = su.d.get("clientEscMenuOptions"), Zu = `${ju}:${Uu}`;
        Zu !== Eu && (Eu = Zu, uu.recorder.setPrefs(ju, Uu))
      };
      return ju(), (0, Xu.l)("appManagerUpdated|clientEscMenuOptions", ju)
    }
    const pl = "replayModule",
      wl = "recorderModule";

    function Jl(uu, Eu, ju) {
      return function() {
        return uu.isStopped ? ju : Eu(...arguments)
      }
    }
    const dl = {
      open: () => Promise.reject(new Error(wU.c.coreStopped.text)),
      replayKey: () => null,
      encode: () => Promise.resolve(null),
      fileHandle: () => null,
      markSaved: () => {}
    };

    function al() {
      return ju.e(65).then((() => ju(61697)))
    }

    function Pl(uu) {
      (0, wU.e)({
        text: uu,
        type: "Error"
      })
    }
    class ol {
      constructor(uu) {
        this.deps = uu, this.runtime = void 0, this.entityHooks = void 0, this.recordedOptions = void 0, this.stops = void 0, this.activeConn = 0, this.stopped = !1, this.bench = null, this.replay = void 0, this.recorder = void 0, this.freecam = void 0, this.drawn = !1;
        const {
          running: Eu,
          api: su,
          core: Uu
        } = uu, Zu = () => uu.memory().buffer, Xu = () => Eu.isStopped ? null : Eu.rings.cmd, lu = Jl(Eu, ((uu, Eu) => Uu.yUu(uu, Eu)), 0), qu = () => Uu.RUu();
        let fu = null;
        this.replay = new El({
          core: {
            UZu: Jl(Eu, (uu => Uu.UZu(uu)), -1),
            yUu: lu,
            RUu: qu,
            ZZu: Jl(Eu, (uu => {
              Uu.ZZu(uu)
            }), void 0)
          },
          coreBuffer: Zu,
          load: async () => (fu = await ju.e(66).then((() => ju(61705))), fu.loadReplayModule()),
          unload: () => {
            var uu;
            null === (uu = fu) || void 0 === uu || uu.unloadReplayModule()
          },
          markTrapped: uu => fu ? fu.markReplayTrapped(uu) : new Error(String(uu)),
          staleOr: (Eu, ju, su) => uu.staleOr(pl, Eu, ju, su),
          crash: Eu => {
            uu.reportFault(pl, Eu)
          }
        });
        let Cu = null;
        this.recorder = new XX({
          core: {
            EZu: Jl(Eu, (uu => Uu.EZu(uu)), 0),
            TUu: Jl(Eu, (uu => Uu.TUu(uu)), 0),
            yUu: lu,
            RUu: qu
          },
          coreCommand: (uu, Eu) => {
            var ju, su;
            return null !== (ju = null === (su = Xu()) || void 0 === su ? void 0 : su.writeCmd(uu, 0, Eu)) && void 0 !== ju && ju
          },
          coreBuffer: Zu,
          load: async () => (Cu = await al(), Cu.loadRecorderModule()),
          prefetch: () => {
            al().then((uu => uu.prefetchRecorderModule())).catch((uu => {
              console.warn(`${hl} the recorder module didn't prefetch, so a save loads it:`, uu)
            }))
          },
          unload: () => {
            var uu;
            null === (uu = Cu) || void 0 === uu || uu.unloadRecorderModule()
          },
          markTrapped: uu => Cu ? Cu.markRecorderTrapped(uu) : new Error(String(uu)),
          memoryBytes: () => {
            var uu, Eu;
            return null !== (uu = null === (Eu = Cu) || void 0 === Eu ? void 0 : Eu.recorderMemoryBytes()) && void 0 !== uu ? uu : 0
          },
          staleOr: (Eu, ju) => uu.staleOr(wl, Eu, ju),
          crash: Eu => {
            uu.reportFault(wl, Eu)
          },
          allowed: () => !0 === uu.options.get("canRecordReplays"),
          failed: Pl,
          events: (uu, Eu) => {
            this.runtime.recorderEvents(uu, Eu)
          },
          beginSave: () => this.replay.beginSave(),
          givenUp: Pl,
          unixNow: () => Date.now()
        });
        const bu = new vU({
          core: {
            iUu: Jl(Eu, (uu => Uu.iUu(uu)), 0),
            SUu: Jl(Eu, (() => {
              Uu.SUu()
            }), void 0),
            Kh: Jl(Eu, (() => Uu.Kh()), 0),
            WUu: Jl(Eu, (() => Uu.WUu()), 0)
          },
          buffer: Zu,
          apiView: () => su.apiView,
          cmd: Xu,
          replay: this.replay,
          recorder: this.recorder
        });
        this.entityHooks = new VX({
          api: su,
          cmd: Xu,
          loadHook: KX,
          onError: uu => {
            console.warn(`${hl} the recorded game's replay hooks:`, uu)
          }
        });
        const cu = new FU({
          client: bu,
          buffer: Zu,
          setHoldDraws: uu => {
            Eu.setHoldDraws(uu)
          },
          notify: wU.e,
          onRecorderState: () => {
            var uu;
            null === (uu = (0, dU.e)()) || void 0 === uu || uu.recorderChanged()
          },
          onViewerChange: () => {
            var uu;
            null === (uu = (0, dU.e)()) || void 0 === uu || uu.viewerChanged()
          },
          onReplayOption: Eu => {
            ! function(uu, Eu) {
              var ju, su;
              const Uu = Tj.ub[Eu.key];
              if (void 0 === Uu) return;
              let Zu = null !== (ju = Eu.value) && void 0 !== ju ? ju : JSON.parse(JSON.stringify(null !== (su = Cl.b[Uu]) && void 0 !== su ? su : null));
              if (null !== Eu.value && Eu.key < Tj.Ub.Environment && "string" === typeof Zu) try {
                Zu = JSON.parse(Zu)
              } catch (Xu) {
                return void console.warn(`${cl} a replay's ${Uu} isn't JSON`, Xu)
              }
              uu.applyNewClientOptions({
                [Uu]: Zu
              })
            }(uu.options, Eu)
          },
          onReplayUiEvent: Yl,
          onReplayOpened: Eu => {
            this.entityHooks.opened((0, au.Vb)(Eu)), uu.replayShaderPack(Eu)
          },
          meshPending: () => {
            var uu, ju;
            return null !== (uu = null === (ju = Eu.lastHeader) || void 0 === ju ? void 0 : ju.renderPending) && void 0 !== uu ? uu : 0
          },
          viewerOpen: JU.c,
          download: uu => {
            (0, GU.g)(uu)
          }
        });
        this.runtime = cu, su.replay = cu.sink, (0, dU.t)(cu);
        const Nu = new TU({
          live: () => {
            var uu;
            return !Eu.isStopped && !0 === (null === (uu = cu.currentViewer) || void 0 === uu ? void 0 : uu.inPlayback)
          },
          cmd: Xu,
          dragScale: jZ
        });
        this.freecam = Nu, (0, dU.r)(Nu), this.recordedOptions = function(uu, Eu) {
          const ju = Tj.ub,
            su = ju.map(((ju, su) => Eu.subscribe(ju, (Eu => {
              uu.setOption(su, el(Eu))
            }))));
          return {
            sendAll() {
              ju.forEach(((ju, su) => {
                uu.setOption(su, el(Eu.get(ju)))
              }))
            },
            stop() {
              for (const uu of su) uu()
            }
          }
        }(cu.recorder, uu.options), this.stops = [(0, Us.m)((uu => {
          Nu.flush();
          try {
            this.replay.beforeFrame(uu)
          } catch (Eu) {
            this.deps.reportFault("replayFrame", Eu)
          }
        })), (0, Us.y)(((uu, Eu) => {
          try {
            this.recorder.afterFrame(), Eu && !this.drawn && (this.drawn = !0, this.recorder.viewDrawn())
          } catch (ju) {
            this.deps.reportFault("recorderFrame", ju)
          }
          try {
            cu.afterFrame(uu)
          } catch (ju) {
            this.deps.reportFault("replayRuntime", ju)
          }
        })), Gl(cu), () => {
          this.recordedOptions.stop()
        }, Ml(cu.recorder), (0, tU.f)((uu => {
          let {
            action: Eu,
            down: ju
          } = uu;
          var su;
          ju && (null === (su = (0, dU.e)()) || void 0 === su || su.keyDown(Eu))
        }))];
        const Ou = () => {
          const uu = cu.currentViewer;
          return !0 === (null === uu || void 0 === uu ? void 0 : uu.isOpen) ? uu : null
        };
        (0, pU.f)({
          open: (uu, Eu) => this.open(uu, Eu),
          replayKey: () => {
            var uu, Eu;
            return null !== (uu = null === (Eu = Ou()) || void 0 === Eu ? void 0 : Eu.id) && void 0 !== uu ? uu : null
          },
          saveRefusal: () => {
            var uu, Eu;
            return null !== (uu = null === (Eu = Ou()) || void 0 === Eu ? void 0 : Eu.saveRefusal) && void 0 !== uu ? uu : null
          },
          encode: () => {
            var uu, Eu;
            return null !== (uu = null === (Eu = Ou()) || void 0 === Eu ? void 0 : Eu.save()) && void 0 !== uu ? uu : Promise.resolve(null)
          },
          fileHandle: () => {
            var uu, Eu;
            return null !== (uu = null === (Eu = cu.currentViewer) || void 0 === Eu ? void 0 : Eu.fileHandle) && void 0 !== uu ? uu : null
          },
          markSaved: (uu, Eu) => {
            var ju;
            null === (ju = cu.currentViewer) || void 0 === ju || ju.markSaved(uu, Eu)
          }
        })
      }
      netEvent(uu) {
        if ("connection" === uu.type)
          if (uu.phase === cu.z.Activated) {
            this.activeConn = uu.conn;
            const Eu = this.deps.sessionInfo(uu.conn);
            null !== Eu && (this.runtime.activated({
              lobbyType: (0, Pu.u)(Eu.lobbyName),
              gameNameWithVariation: Eu.gameNameWithVariation,
              lobbyName: Eu.lobbyName
            }), this.recordedOptions.sendAll())
          } else uu.phase !== cu.z.Left && uu.phase !== cu.z.Closed || uu.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
      }
      stop() {
        if (!this.stopped) {
          this.stopped = !0;
          for (const uu of this.stops) uu();
          this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, dU.j)() === this.runtime && (0, dU.t)(null), (0, dU.h)() === this.freecam && (0, dU.r)(null), (0, pU.f)(dl), null !== this.bench && window.wasmReplayBench === this.bench && (window.wasmReplayBench = void 0)
        }
      }
      async open(uu, Eu) {
        const {
          running: ju
        } = this.deps;
        if (ju.isStopped) throw new Error(wU.c.coreStopped.text);
        if (uu.byteLength > 67108864) throw new Error(wU.c.cantOpen.text);
        let su;
        try {
          su = await async function(uu) {
            const Eu = await uu.loadViewer();
            return Eu.inPlayback || (0, Us.H)().leaveGame(null), Eu
          }(this.runtime)
        } catch (Uu) {
          throw console.warn(`${hl} the replay viewer didn't load`, Uu), new Error(wU.c.viewerLoadFailed.text)
        }
        if (ju.isStopped) throw new Error(wU.c.coreStopped.text);
        await su.open(uu, Eu)
      }
    }
    var kl = ju(2011);

    function ml(uu, Eu) {
      const {
        aux: ju,
        payload: su
      } = function(uu) {
        return {
          aux: uu.reset ? cu.dc.ResetFirst : 0,
          payload: Kl(uu.changes)
        }
      }(Eu);
      uu.queueOptions(ju, su) && (Eu.reset && kl.e.reset(), kl.e.apply(Eu.changes))
    }
    const vl = new TextEncoder;

    function Kl(uu) {
      const Eu = new Vl;
      return Ql(Eu, uu), Eu.bytes()
    }
    class Vl {
      constructor() {
        this.buf = new Uint8Array(256), this.view = new DataView(this.buf.buffer), this.len = 0
      }
      room(uu) {
        if (this.len + uu <= this.buf.length) return;
        const Eu = new Uint8Array(Math.max(2 * this.buf.length, this.len + uu));
        Eu.set(this.buf.subarray(0, this.len)), this.buf = Eu, this.view = new DataView(Eu.buffer)
      }
      u8(uu) {
        this.room(1), this.buf[this.len++] = uu
      }
      tagged(uu, Eu, ju) {
        this.room(1 + Eu), this.buf[this.len++] = uu, 1 === Eu ? this.view.setUint8(this.len, ju) : 2 === Eu ? this.view.setUint16(this.len, ju) : this.view.setUint32(this.len, ju), this.len += Eu
      }
      signed(uu, Eu, ju) {
        this.room(1 + Eu), this.buf[this.len++] = uu, 1 === Eu ? this.view.setInt8(this.len, ju) : 2 === Eu ? this.view.setInt16(this.len, ju) : this.view.setInt32(this.len, ju), this.len += Eu
      }
      f64(uu) {
        this.room(9), this.buf[this.len++] = 203, this.view.setFloat64(this.len, uu), this.len += 8
      }
      raw(uu) {
        this.room(uu.length), this.buf.set(uu, this.len), this.len += uu.length
      }
      bytes() {
        return this.buf.slice(0, this.len)
      }
    }

    function rl(uu, Eu, ju, su, Uu, Zu, Xu) {
      Eu < su ? uu.u8(ju | Eu) : null !== Uu && Eu < 256 ? uu.tagged(Uu, 1, Eu) : Eu < 65536 ? uu.tagged(Zu, 2, Eu) : uu.tagged(Xu, 4, Eu)
    }

    function Ql(uu, Eu) {
      switch (typeof Eu) {
        case "undefined":
          return void uu.raw(il);
        case "boolean":
          return void uu.u8(Eu ? 195 : 194);
        case "number":
          return void
          function(uu, Eu) {
            Eu >>> 0 === Eu ? Eu < 128 ? uu.u8(Eu) : Eu < 256 ? uu.tagged(204, 1, Eu) : Eu < 65536 ? uu.tagged(205, 2, Eu) : uu.tagged(206, 4, Eu) : (Eu | 0) === Eu ? Eu >= -32 ? uu.u8(255 & Eu) : Eu >= -128 ? uu.signed(208, 1, Eu) : Eu >= -32768 ? uu.signed(209, 2, Eu) : uu.signed(210, 4, Eu) : uu.f64(Eu)
          }(uu, Eu);
        case "string": {
          const ju = vl.encode(Eu);
          return rl(uu, ju.length, 160, 32, 217, 218, 219), void uu.raw(ju)
        }
        case "object":
          break;
        default:
          return void uu.u8(192)
      }
      if (null === Eu) uu.u8(192);
      else if (Array.isArray(Eu)) {
        rl(uu, Eu.length, 144, 16, null, 220, 221);
        for (const ju of Eu) Ql(uu, ju)
      } else if (Eu instanceof Uint8Array) rl(uu, Eu.length, 0, 0, 196, 197, 198), uu.raw(Eu);
      else {
        const ju = Object.keys(Eu);
        rl(uu, ju.length, 128, 0, null, 222, 223);
        for (const su of ju) Ql(uu, su), Ql(uu, Eu[su])
      }
    }
    const il = new Uint8Array([212, 0, 0]);
    var Wl = ju(42866),
      Sl = ju(42868),
      Il = ju(41161),
      Fl = ju(41209),
      Bl = ju(3020);
    const Ll = [1e3, 3e3, 9e3];
    class tl {
      constructor(uu) {
        this.host = uu, this.sets = new Map, this.table = [], this.generation = 0, this.fO = !1
      }
      onEvent(uu) {
        const Eu = function(uu) {
          if (uu.byteLength !== cu.xd) return null;
          const Eu = new DataView(uu.buffer, uu.byteOffset, uu.byteLength);
          return {
            want: Eu.getUint16(0, !0),
            release: Eu.getUint16(2, !0)
          }
        }(uu);
        Eu && !this.fO && (Eu.release !== cu.zd && this.release(Eu.release), Eu.want !== cu.zd && this.want(Eu.want))
      }
      reset(uu) {
        if (!this.fO) {
          for (const [uu, Eu] of this.sets) "ready" === Eu.state && this.releaseAll(Eu.distinct), this.sets.delete(uu);
          this.table = uu, this.generation++
        }
      }
      dispose() {
        if (this.fO) return;
        this.fO = !0, this.generation++, this.table = [];
        const uu = [...this.sets.values()];
        this.sets.clear();
        let Eu = null;
        for (const su of uu)
          for (const uu of "ready" === su.state ? su.distinct : []) try {
            this.host.Usu(uu)
          } catch (ju) {
            Eu ??= {
              error: ju
            }
          }
        if (Eu) throw Eu.error
      }
      isReady(uu) {
        var Eu;
        return "ready" === (null === (Eu = this.sets.get(uu)) || void 0 === Eu ? void 0 : Eu.state)
      }
      want(uu) {
        const Eu = this.sets.get(uu);
        if ("loading" === (null === Eu || void 0 === Eu ? void 0 : Eu.state)) return Eu.wanted = !0, void this.capAnswer(uu, Eu);
        if ("ready" === (null === Eu || void 0 === Eu ? void 0 : Eu.state)) return void this.host.sendReady(Tl(uu, Eu.images, Eu.size));
        const ju = this.table[uu];
        if (!ju || 1 !== ju.urls.length && ju.urls.length !== Tj.fc.CubeFaces) return this.host.sendReady(Hl(uu)), void this.host.onLoadFailed(uu, "", new Error(`no image set ${uu}`));
        const su = {
          state: "loading",
          wanted: !0
        };
        this.sets.set(uu, su), this.load(uu, ju, su, this.generation, 0), this.capAnswer(uu, su)
      }
      capAnswer(uu, Eu) {
        this.host.wait(4e3, (() => {
          this.sets.get(uu) === Eu && Eu.wanted && this.host.sendReady(Hl(uu))
        }))
      }
      load(uu, Eu, ju, su, Uu) {
        const Zu = [...new Set(Eu.urls)];
        Promise.allSettled(Zu.map((uu => this.host.loadImage(uu, Eu.orientation)))).then((Xu => {
          const lu = Xu.flatMap((uu => "fulfilled" === uu.status ? [uu.value] : [])),
            qu = su === this.generation && this.sets.get(uu) === ju,
            fu = Xu.findIndex((uu => "rejected" === uu.status));
          if (!qu || !ju.wanted) return this.fO ? void this.releaseAfterDispose(lu.map(xl)) : (this.releaseAll(lu.map(xl)), void(qu && this.sets.delete(uu)));
          fu < 0 ? this.loaded(uu, Eu, Zu, lu) : (this.releaseAll(lu.map(xl)), this.host.sendReady(Hl(uu)), Uu < Ll.length ? this.host.wait(Ll[Uu], (() => {
            su === this.generation && this.sets.get(uu) === ju && (ju.wanted ? this.load(uu, Eu, ju, su, Uu + 1) : this.sets.delete(uu))
          })) : (this.sets.delete(uu), this.host.onLoadFailed(uu, Zu[fu], Xu[fu].reason)))
        }))
      }
      loaded(uu, Eu, ju, su) {
        const [Uu] = su, Zu = [Uu.width, Uu.height], Xu = su.every((uu => uu.width === Zu[0] && uu.height === Zu[1])), lu = Eu.urls.length === Tj.fc.CubeFaces;
        if (!Xu || Zu[0] <= 0 || Zu[1] <= 0 || Zu[0] > 65535 || Zu[1] > 65535 || lu && Zu[0] !== Zu[1]) {
          this.releaseAll(su.map(xl)), this.sets.delete(uu), this.host.sendReady(Hl(uu));
          const ju = su.map((uu => `${uu.width}x${uu.height}`));
          return void this.host.onLoadFailed(uu, Eu.urls[0], new Error(`set ${uu}'s images can't make its texture: ${ju.join(", ")}`))
        }
        const qu = Eu.urls.map((uu => su[ju.indexOf(uu)].id)),
          fu = su.map(xl);
        this.sets.set(uu, {
          state: "ready",
          images: qu,
          distinct: fu,
          size: Zu
        }), this.host.sendReady(Tl(uu, qu, Zu))
      }
      release(uu) {
        const Eu = this.sets.get(uu);
        "loading" === (null === Eu || void 0 === Eu ? void 0 : Eu.state) ? Eu.wanted = !1: "ready" === (null === Eu || void 0 === Eu ? void 0 : Eu.state) && (this.releaseAll(Eu.distinct), this.sets.delete(uu))
      }
      releaseAll(uu) {
        for (const Eu of uu) this.host.Usu(Eu)
      }
      releaseAfterDispose(uu) {
        for (const Eu of uu) try {
          this.host.Usu(Eu)
        } catch {}
      }
    }

    function xl(uu) {
      return uu.id
    }

    function Tl(uu, Eu, ju) {
      const su = new Uint8Array(Tj.fc.SkyImagesReadyBytes),
        Uu = new DataView(su.buffer);
      return Uu.setUint16(0, uu, !0), Uu.setUint16(2, Eu.length, !0), Uu.setUint16(4, ju[0], !0), Uu.setUint16(6, ju[1], !0), Eu.slice(0, Tj.fc.CubeFaces).forEach(((uu, Eu) => {
        Uu.setUint32(8 + 4 * Eu, uu, !0)
      })), su
    }

    function Hl(uu) {
      const Eu = new Uint8Array(Tj.fc.SkyImagesReadyBytes),
        ju = new DataView(Eu.buffer);
      return ju.setUint16(0, uu, !0), ju.setUint16(2, Tj.fc.Failed, !0), Eu
    }
    let Al = Promise.resolve();
    async function nl(uu, Eu) {
      let ju;
      try {
        ju = await (0, Bl.K)(uu)
      } catch (Zu) {
        throw new Il.e("fetch", uu, {
          cause: Zu
        })
      }
      const su = Al.then((() => async function(uu, Eu) {
        const ju = new Blob([uu.slice()]);
        let su = await createImageBitmap(ju, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: Eu
        });
        const Uu = 1024 / Math.max(su.width, su.height);
        if (Uu < 1) {
          const uu = su;
          try {
            su = await createImageBitmap(uu, {
              resizeWidth: Math.max(1, Math.round(uu.width * Uu)),
              resizeHeight: Math.max(1, Math.round(uu.height * Uu)),
              resizeQuality: "high",
              premultiplyAlpha: "none",
              colorSpaceConversion: "none"
            })
          } finally {
            uu.close()
          }
        }
        return su
      }(ju, Eu)));
      let Uu;
      Al = su.catch((() => {}));
      try {
        Uu = await su
      } catch (Zu) {
        throw new Il.e("decode", uu, {
          cause: Zu
        })
      }
      return {
        id: (0, Il.p)(Uu),
        width: Uu.width,
        height: Uu.height
      }
    }
    var yl = ju(2239),
      zl = ju(34392),
      Rl = ju(39529);
    const uq = yl.g.length,
      Eq = new Set([...yl.g, "earth"]);

    function jq(uu) {
      const Eu = [],
        ju = [],
        su = (uu, su) => {
          if ("custom" === su.type) {
            ju.push({
              id: uu,
              kind: Tj.fc.KindCustom,
              set: Eu.length,
              earth: null
            });
            const Uu = [su.px, su.py, su.pz, su.nx, su.ny, su.nz];
            Eu.push({
              urls: (0, Rl.f)(Uu),
              orientation: "none"
            })
          } else ju.push({
            id: uu,
            kind: Tj.fc.KindEarth,
            set: 0,
            earth: su
          })
        };
      yl.g.forEach(((Eu, ju) => {
        var Uu;
        su(ju, null !== (Uu = sq(uu[Eu])) && void 0 !== Uu ? Uu : zl.k[Eu])
      }));
      const Uu = sq(uu.earth);
      "earth" === (null === Uu || void 0 === Uu ? void 0 : Uu.type) && su(uq, Uu);
      const Zu = new TextEncoder,
        Xu = [],
        lu = [];
      for (const [Nu, Ou] of Object.entries(uu)) {
        const uu = Eq.has(Nu) ? null : sq(Ou);
        if (null === uu) continue;
        const Eu = Zu.encode(Nu);
        Eu.length > 255 ? lu.push(`Ignoring texture pack skybox ${Nu}, whose name is over 255 bytes`) : Xu.length === Tj.fc.MaxAdded ? lu.push(`Ignoring texture pack skybox ${Nu}, past the ${Tj.fc.MaxAdded} skies a pack can add`) : (Xu.push(Eu), su(Tj.fc.AddedId, uu))
      }
      const qu = Eu.length;
      Eu.push({
        urls: zl.c.map((uu => zl.f + uu)),
        orientation: "none"
      }), Eu.push({
        urls: [zl.g],
        orientation: "flipY"
      }), Eu.push({
        urls: [zl.b],
        orientation: "flipY"
      });
      const fu = Tj.fc.SkyTableHeaderBytes + ju.length * Tj.fc.SkyTableEntryBytes,
        Cu = new Uint8Array(fu + Xu.reduce(((uu, Eu) => uu + 1 + Eu.length), 0)),
        bu = new DataView(Cu.buffer);
      bu.setUint16(0, qu, !0), bu.setUint16(2, qu + 1, !0), bu.setUint16(4, qu + 2, !0), bu.setUint16(6, ju.length, !0), ju.forEach(((uu, Eu) => {
        const ju = Tj.fc.SkyTableHeaderBytes + Eu * Tj.fc.SkyTableEntryBytes;
        bu.setUint16(ju, uu.id, !0), bu.setUint8(ju + 2, uu.kind);
        const su = ju + 4;
        uu.earth ? function(uu, Eu, ju) {
          const su = uu;
          let Uu = 0,
            Zu = 0;
          for (const [Xu, lu] of Uq) {
            const uu = su[Xu];
            "number" === typeof uu && Number.isFinite(uu) && (Eu.setFloat32(ju + 4 * lu, uu, !0), Uu |= 1 << lu)
          }
          for (const [Xu, lu, qu] of Zq) {
            const uu = su[Xu];
            Array.isArray(uu) && 3 === uu.length && uu.every((uu => "number" === typeof uu && Number.isFinite(uu))) && (uu.forEach(((uu, su) => {
              Eu.setFloat32(ju + qu + 4 * su, uu, !0)
            })), Uu |= lu)
          }
          Xq.forEach(((uu, Zu) => {
            let [Xu, lu] = uu;
            const qu = su[Xu];
            "number" === typeof qu && Number.isFinite(qu) && (Eu.setFloat32(ju + Tj.s.CameraOffsetAt + 4 * Zu, qu, !0), Uu |= lu)
          }));
          for (const [Xu, lu] of lq) {
            const uu = su[Xu];
            null !== uu && void 0 !== uu && (Uu |= lu, uu && (Zu |= lu >>> 14))
          }
          Eu.setUint32(ju + Tj.s.PresentAt, Uu, !0), Eu.setUint8(ju + Tj.s.FlagsAt, Zu)
        }(uu.earth, bu, su) : bu.setUint16(su, uu.set, !0)
      }));
      let cu = fu;
      for (const Nu of Xu) Cu[cu] = Nu.length, Cu.set(Nu, cu + 1), cu += 1 + Nu.length;
      return {
        payload: Cu,
        sets: Eu,
        leftOut: lu
      }
    }

    function sq(uu) {
      if ("object" !== typeof uu || null === uu) return null;
      const Eu = uu;
      if ("earth" === Eu.type) return uu;
      return "custom" === Eu.type && ["px", "py", "pz", "nx", "ny", "nz"].every((uu => {
        const ju = Eu[uu];
        return "string" === typeof ju && ju.length > 0
      })) ? uu : null
    }
    const Uq = [
        ["inclination", Tj.s.Inclination],
        ["turbidity", Tj.s.Turbidity],
        ["luminance", Tj.s.Luminance],
        ["rayleigh", Tj.s.Rayleigh],
        ["mieCoefficient", Tj.s.MieCoefficient],
        ["mieDirectionalG", Tj.s.MieDirectionalG],
        ["distance", Tj.s.Distance],
        ["azimuth", Tj.s.Azimuth]
      ],
      Zq = [
        ["sunPosition", Tj.s.SunPosition, Tj.s.SunPositionAt],
        ["up", Tj.s.Up, Tj.s.UpAt],
        ["vertexTint", Tj.s.VertexTint, Tj.s.VertexTintAt]
      ],
      Xq = [
        ["xCameraOffset", Tj.s.CameraOffsetX],
        ["yCameraOffset", Tj.s.CameraOffsetY],
        ["zCameraOffset", Tj.s.CameraOffsetZ]
      ],
      lq = [
        ["useSunPosition", Tj.s.UseSunPosition],
        ["dithering", Tj.s.Dithering],
        ["infiniteDistance", Tj.s.InfiniteDistance]
      ];

    function qq(uu, Eu, ju) {
      const su = new Cq({
        writeCmd: uu,
        warn: Eu,
        followPack: fq(ju, Eu)
      });
      return su.start(), su
    }

    function fq(uu, Eu) {
      return ju => {
        let su = () => {};
        const Uu = uu((uu => {
          su(), su = () => {}, null !== uu ? su = uu.subscribe((uu => {
            ju(function(uu, Eu, ju) {
              if ("object" !== typeof uu || null === uu) return null;
              const su = uu.skyBoxes;
              if ("object" !== typeof su || null === su) return null;
              if ("player" === Eu) return su;
              return Object.fromEntries(Object.entries(su).filter((uu => {
                let [Eu, su] = uu;
                return !! function(uu) {
                  if ("object" !== typeof uu || null === uu) return !1;
                  return "earth" === uu.type || Object.entries(uu).every((uu => {
                    let [Eu, ju] = uu;
                    return "type" === Eu || ("" === (su = ju) || null !== function(uu) {
                      var Eu, ju, su;
                      return "string" !== typeof uu ? null : null !== (Eu = null === (ju = bq.exec(uu)) || void 0 === ju || null === (su = ju.groups) || void 0 === su ? void 0 : su.base64) && void 0 !== Eu ? Eu : null
                    }(su));
                    var su
                  }))
                }(su) || (ju(`Ignoring texture pack skybox ${Eu}, whose faces are not all data URLs`, null), !1)
              })))
            }(uu.pack, null === uu.gameSource ? "player" : "customGame", Eu))
          })) : ju(null)
        }));
        return () => {
          Uu(), su()
        }
      }
    }
    class Cq {
      constructor(uu) {
        var Eu, ju, su;
        this.host = uu, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.fO = !1, this.wait = null !== (Eu = uu.wait) && void 0 !== Eu ? Eu : (uu, Eu) => {
          setTimeout(Eu, uu)
        }, this.loader = new tl({
          loadImage: null !== (ju = uu.loadImage) && void 0 !== ju ? ju : nl,
          Usu: null !== (su = uu.Usu) && void 0 !== su ? su : Il.t,
          sendReady: uu => {
            this.queue.push({
              kind: Tj.fc.SkyImagesReady,
              payload: uu
            })
          },
          onLoadFailed: (Eu, ju, su) => {
            uu.warn(`sky image set ${Eu} (${ju}) didn't load: the last sky stays`, su)
          },
          wait: this.wait
        })
      }
      start() {
        this.wait(Fl.d, (() => {
          null === this.written && this.write({})
        })), this.stopFollowing = this.host.followPack((uu => {
          this.write(null !== uu && void 0 !== uu ? uu : {})
        }))
      }
      onEvent(uu) {
        this.loader.onEvent(uu)
      }
      drain() {
        if (0 === this.queue.length) return;
        let uu = 0;
        for (; uu < this.queue.length && this.host.writeCmd(this.queue[uu].kind, 0, this.queue[uu].payload);) uu++;
        uu > 0 && this.queue.splice(0, uu)
      }
      dispose() {
        this.fO = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
      }
      write(uu) {
        if (this.fO) return;
        const Eu = jq(uu);
        if (!(this.written && (ju = this.written, su = Eu, ju.payload.length === su.payload.length && ju.payload.every(((uu, Eu) => uu === su.payload[Eu])) && ju.sets.length === su.sets.length && ju.sets.every(((uu, Eu) => {
            const ju = su.sets[Eu];
            return uu.orientation === ju.orientation && uu.urls.length === ju.urls.length && uu.urls.every(((uu, Eu) => uu === ju.urls[Eu]))
          }))))) {
          var ju, su;
          for (const uu of Eu.leftOut) this.host.warn(uu, null);
          this.written = Eu, this.loader.reset(Eu.sets), this.queue = this.queue.filter((uu => uu.kind !== Tj.fc.SkyImagesReady)), this.queue.push({
            kind: Tj.fc.SkyTable,
            payload: Eu.payload
          })
        }
      }
    }
    const bq = /^data:[\w.+/-]*;base64,(?<base64>[A-Za-z0-9+/]*={0,2})$/;
    var cq = ju(2919),
      Nq = ju(3165),
      Oq = ju(289),
      Yq = ju(186),
      hq = ju(2922),
      Dq = ju(2930),
      gq = ju(267),
      Mq = ju(274),
      eq = ju(3056),
      Gq = ju(3083),
      pq = ju(3093),
      wq = ju(107),
      Jq = ju(326),
      dq = ju(41072);
    class aq {
      constructor() {
        this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, LU.n)(Ms.P, (uu => {
          this.onReply((0, BU.g)(Ms.P, uu), performance.now())
        }))
      }
      onFrame(uu, Eu) {
        null === this.id ? this.id = uu : uu !== this.id && (this.id = uu, this.sentMs = document.hidden ? null : Eu)
      }
      onVisibilityChange() {
        this.sentMs = null
      }
      onReply(uu, Eu) {
        uu === this.id && null !== this.sentMs && (this.roundTripMs = Math.round(Eu - this.sentMs), this.sentMs = null)
      }
      take() {
        const uu = this.roundTripMs;
        return this.roundTripMs = null, uu
      }
      stop() {
        this.stopReplies()
      }
    }
    class Pq {
      constructor() {
        this.sampled = 0, this.timed = 0, this.frameUs = 0, this.primed = !1, this.windowTimed = 0, this.windowUs = 0
      }
      onFrame(uu, Eu, ju, su) {
        const Uu = uu - this.sampled >>> 0,
          Zu = Eu - this.timed >>> 0,
          Xu = ju - this.frameUs >>> 0,
          lu = this.primed;
        return this.sampled = uu, this.timed = Eu, this.frameUs = ju, this.primed = !0, !(!lu || Uu > 64 || Zu > 64) && (su && Xu <= 1e6 * Zu && (this.windowTimed += Zu, this.windowUs += Xu), su && Uu > 0)
      }
      reset() {}
      snapshotAndReset() {
        const uu = this.windowTimed > 0 ? this.windowUs / this.windowTimed / 1e3 : null;
        return this.windowTimed = 0, this.windowUs = 0, {
          passMs: uu,
          submitToDoneMs: null
        }
      }
    }
    const oq = {
      lagP50Ms: null,
      lagP90Ms: null
    };
    class kq {
      constructor() {
        this.samples = new Float64Array(4096), this.count = 0
      }
      add(uu, Eu) {
        const ju = Math.min(4096, this.count + Eu);
        this.samples.fill(uu, this.count, ju), this.count = ju
      }
      clear() {
        this.count = 0
      }
      take() {
        const uu = this.count;
        if (this.count = 0, uu < 30) return oq;
        const Eu = this.samples.subarray(0, uu).sort(),
          ju = ju => Eu[Math.min(uu - 1, Math.floor(ju * uu))];
        return {
          lagP50Ms: ju(.5),
          lagP90Ms: ju(.9)
        }
      }
    }
    class mq {
      constructor() {
        this.word = 0, this.lagUs = 0, this.primed = !1, this.lags = new kq
      }
      onFrame(uu, Eu) {
        const ju = uu.headerWord(Tj.K.Pacing),
          su = uu.headerWord(Tj.K.PacingLagUs),
          Uu = (ju >>> Tj.cb.LagsShift) - (this.word >>> Tj.cb.LagsShift) & Tj.cb.CountMask,
          Zu = Uu > 0 ? (su - this.lagUs >>> 0) / Uu / 1e3 : 0,
          Xu = this.primed && Uu <= 64 && Zu <= 6e4;
        this.word = ju, this.lagUs = su, this.primed = !0, Xu && Eu && Uu > 0 && 0 !== (ju & Tj.cb.Defaulted) && this.lags.add(Zu, Uu)
      }
      onJoin() {
        this.lags.clear()
      }
      snapshotAndReset(uu) {
        return uu ? this.lags.take() : (this.lags.clear(), oq)
      }
    }
    var vq = ju(308);

    function Kq() {
      return Date.now() - performance.now()
    }
    class Vq {
      constructor() {
        this.rafs = 0, this.dl = 0, this.heldAtRaf = -1, this.heldRunStartMs = 0, this.startMs = performance.now(), this.startClockOffsetMs = Kq(), this.focused = document.hasFocus(), this.blurred = !1, this.resumed = !1, this.embedded = (0, vq.f)(), this.onBlur = () => {
          this.focused = !1, this.blurred = !0
        }, this.onFocus = () => {
          this.focused = !0
        }, this.onLifecycle = () => {
          this.resumed = !0
        }, window.addEventListener("blur", this.onBlur), window.addEventListener("focus", this.onFocus), document.addEventListener("freeze", this.onLifecycle), document.addEventListener("resume", this.onLifecycle)
      }
      animationFrame() {
        this.rafs++
      }
      paced() {
        (0 === this.dl || this.heldAtRaf < this.rafs - 1) && (this.heldRunStartMs = 1 === this.rafs ? this.startMs : performance.now()), this.dl++, this.heldAtRaf = this.rafs
      }
      words(uu) {
        const Eu = uu ? this.rafs - 1 : this.rafs;
        return function(uu) {
          let Eu = 0 === uu.rafs ? "raf:none" : "raf:some";
          return uu.dl > 0 && (Eu += " pace:held"), uu.heldRunMs > 1e4 && (Eu += " pace:stalled"), uu.blurred && (Eu += " blur"), uu.resumed && (Eu += " resumed"), uu.embedded && (Eu += " embedded"), uu.clockGainMs > 2e3 && (Eu += " clockjump"), Eu
        }({
          clockGainMs: Kq() - this.startClockOffsetMs,
          rafs: Eu,
          dl: this.dl,
          heldRunMs: this.dl > 0 && this.heldAtRaf === Eu ? performance.now() - this.heldRunStartMs : 0,
          blurred: this.blurred,
          resumed: this.resumed,
          embedded: this.embedded
        })
      }
      restart(uu) {
        this.rafs = 0, this.dl = 0, this.heldAtRaf = -1, this.startMs = uu, this.startClockOffsetMs = Kq(), this.blurred = !this.focused, this.resumed = !1
      }
      stop() {
        window.removeEventListener("blur", this.onBlur), window.removeEventListener("focus", this.onFocus), document.removeEventListener("freeze", this.onLifecycle), document.removeEventListener("resume", this.onLifecycle)
      }
    }
    var rq = ju(34499),
      Qq = ju(3061),
      iq = ju(41117),
      Wq = ju(34490),
      Sq = ju(2939),
      Iq = ju(3067);
    const Fq = {
      none: !0,
      compatibility_mode: !0,
      not_requested: !1,
      webgl_holdback: !1,
      off_after_loss: !1,
      old_intel_driver: !1,
      intel_gen9: !1,
      gpu_class_webgl: !1,
      gpu_wasm_arm: !1,
      safari_26: !1,
      no_webgpu_api: !1,
      no_adapter: !0,
      software_adapter: !0,
      adapter_error: !0,
      load_failed: !0,
      start_no_adapter: !0,
      device_failed: !0,
      start_failed: !0,
      _unloaded: null
    };

    function Bq(uu) {
      return new Lq(uu)
    }
    class Lq {
      constructor(uu) {
        this.shell = uu, this.tracker = new Dq.e, this.gpu = new Pq, this.pacing = new mq, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.fpsOverTime = null, this.firstSpanFps = null, this.initialFps = null, this.ping = new aq, this.pacedCpuMs = 0, this.sendsStartMs = -1, this.sendsEndMs = -1, this.frameDebug = null, this.lastDrawnMs = -1, this.stallPending = !1, this.stallGap = new Vq, this.onVisibility = () => {
          this.tracker.onVisibilityChange(), this.ping.onVisibilityChange(), this.lastDrawnMs = -1, !document.hidden && this.fpsSpanStartMs >= 0 && (this.fpsFrames = 0, this.fpsSpanStartMs = performance.now())
        }, this.onBeforeUnload = () => {
          this.checkMainStall(performance.now(), !1), this.lastDrawnMs = -1
        }, (0, rq.e)(uu.backend, uu.canvas, uu.adapterVendor), this.tracker.start((() => !uu.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, Sq.e)("wasm", (() => {
          const {
            n: Eu,
            sampleCount: ju
          } = (0, iq.g)();
          return `${uu.backend}, quality steps aim at up to ${Iq.c.target.maxFps} fps, pixel n ${Eu}, msaa ${ju}`
        }), (Eu => {
          Eu.setLoadCounts(uu.readLoadCounts), this.frameDebug = Eu
        })), this.timers.push(setInterval((() => {
          this.flush(), this.fpsOverTime = null, this.initialFps = null
        }), 1e4), setInterval((() => {
          this.followGame() && this.shell.canSend() && (this.hasFlushedSinceConnect || (this.flush(), this.hasFlushedSinceConnect = !0))
        }), 250))
      }
      animationFrame(uu) {
        var Eu;
        this.stallGap.animationFrame(), this.tracker.onAnimationFrame(uu), null === (Eu = this.frameDebug) || void 0 === Eu || Eu.animationFrame()
      }
      sendsWent(uu, Eu, ju) {
        this.ping.onFrame(uu.headerWord(Tj.K.PingSent), Eu), this.sendsStartMs = Eu, this.sendsEndMs = ju
      }
      frameRan(uu, Eu, ju, su) {
        var Uu;
        this.ping.onFrame(uu.headerWord(Tj.K.PingSent), ju);
        const Zu = this.tracker;
        this.pacing.onFrame(uu, Zu.isSampling());
        const Xu = uu.headerWord(Tj.K.TickUs) / 1e3 + (0, Us.I)();
        var lu;
        (Zu.RD(Xu), null === (Uu = this.frameDebug) || void 0 === Uu || Uu.wasmFrame(uu, Eu, ju, su, Zu.isSampling(), Xu), null !== this.game) && (null === (lu = this.frameDebug) || void 0 === lu || lu.inGame());
        const qu = this.sendsStartMs >= Eu ? this.sendsEndMs - this.sendsStartMs : 0,
          fu = Math.max(0, ju - Eu - Xu - qu);
        if ("drawn" !== su) return void("paced" === su ? (this.pacedCpuMs += fu, this.stallGap.paced()) : "skipped" === su && (this.lastDrawnMs = -1));
        this.followGame(), this.checkMainStall(Eu, !0), Zu.onFrameStart(Eu);
        this.gpu.onFrame(uu.headerWord(Tj.K.GpuSampled), uu.headerWord(Tj.K.GpuTimed), uu.headerWord(Tj.K.GpuFrameUs), Zu.isSampling()) && Zu.onGpuSampleStarted(), Zu.onFrameCpu(fu + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(Eu)
      }
      framePaced() {
        var uu;
        this.stallGap.paced(), null === (uu = this.frameDebug) || void 0 === uu || uu.wasmPeekPaced(this.tracker.isSampling())
      }
      stop() {
        for (const uu of this.timers) clearInterval(uu);
        this.timers.length = 0, document.removeEventListener("visibilitychange", this.onVisibility), window.removeEventListener("beforeunload", this.onBeforeUnload), this.stallGap.stop(), this.ping.stop(), this.tracker.limiterTelemetry.stop()
      }
      followGame() {
        const uu = this.shell.joinedGame();
        if (uu !== this.game) {
          var Eu;
          if (this.game = uu, null !== uu) null === (Eu = this.frameDebug) || void 0 === Eu || Eu.joined();
          this.tracker.snapshotAndReset(), this.pacing.onJoin(), this.hasFlushedSinceConnect = !1, this.inGameAtLastFlush = !1, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.pacedCpuMs = 0, this.firstSpanFps = null, this.fpsOverTime = null, this.initialFps = null, this.lastDrawnMs = -1
        }
        return null !== uu
      }
      checkMainStall(uu, Eu) {
        if (!this.tracker.isSampling()) return void(this.lastDrawnMs = -1);
        const ju = this.tracker.limiterTelemetry.longAnimationFrameTracker,
          su = this.lastDrawnMs < 0 ? 0 : uu - this.lastDrawnMs;
        this.lastDrawnMs = uu;
        const Uu = !this.stallPending && su > 5e3,
          Zu = Uu ? this.stallGap.words(Eu) : "";
        this.stallGap.restart(uu), this.stallPending || (Uu ? (this.stallPending = !0, setTimeout((() => {
          this.stallPending = !1, this.shell.mainStalled(su, ju.blockingSinceMark(), Zu)
        }), 0)) : ju.markFrame(uu))
      }
      countFpsFrame(uu) {
        if (this.fpsSpanStartMs < 0) {
          if (!this.shell.inGame()) return;
          this.fpsSpanStartMs = uu
        }
        this.fpsFrames++;
        const Eu = uu - this.fpsSpanStartMs;
        if (!(Eu < pq.e)) {
          if (!document.hidden) {
            const uu = 1e3 * this.fpsFrames / Eu;
            this.firstSpanFps ??= uu, this.initialFps = this.firstSpanFps, this.fpsOverTime = uu
          }
          this.fpsFrames = 0, this.fpsSpanStartMs = uu
        }
      }
      flush() {
        const uu = this.followGame(),
          {
            cpuFrameMs: Eu,
            refreshHz: ju,
            cpuBottleneck: Uu,
            frameIntervalCv: Zu,
            ...Xu
          } = this.tracker.snapshotAndReset(),
          lu = this.shell.inGame(),
          qu = lu && this.inGameAtLastFlush,
          fu = qu ? Xu : (0, hq.d)(Xu),
          Cu = this.pacing.snapshotAndReset(qu);
        if (this.inGameAtLastFlush = lu, this.pendingLightFailures += this.shell.takeFailedMeshJobs(), !uu || !this.shell.canSend()) return;
        const bu = performance.now(),
          Nu = (0, Gq.t)((0, Gq.q)(bu), this.unsentPage),
          Yu = function(uu, Eu, ju, Uu, Zu, Xu, lu, qu) {
            var fu, Cu, bu, cu, Nu;
            const Ou = {},
              {
                canvas: Yu
              } = uu,
              hu = (0, eq.g)({
                refreshHz: Eu.refreshHz,
                msaa: uu.msaa(),
                autoMsaaOff: (0, Wq.e)()
              });
            for (const Du of (0, Nq.d)()) {
              const gu = Du.name;
              let Mu;
              if ((0, Oq.q)(gu)) Mu = (0, Gq.b)(gu);
              else if ((0, Gq.e)(gu)) Mu = qu[gu];
              else if ((0, eq.j)(gu)) Mu = hu[gu];
              else switch (gu) {
                case "fps":
                  Mu = Uu;
                  break;
                case "Jq":
                  Mu = Zu;
                  break;
                case "kq":
                  Mu = (0, Qq.u)((0, iq.g)().n);
                  break;
                case "mq":
                  Mu = Math.max(Yu.width, Yu.height);
                  break;
                case "vq":
                  Mu = Math.min(Yu.width, Yu.height);
                  break;
                case "Kq":
                  Mu = navigator.hardwareConcurrency || null;
                  break;
                case "Vq":
                  Mu = (0, yU.getWebGpuSupported)();
                  break;
                case "rq":
                  Mu = null === uu.fallbackReason ? null : Fq[uu.fallbackReason];
                  break;
                case "Qq":
                  Mu = Eu.cpuFrameMs;
                  break;
                case "iq":
                  Mu = Eu.refreshHz;
                  break;
                case "Wq":
                  Mu = Eu.cpuBottleneck;
                  break;
                case "Sq":
                  Mu = Eu.frameIntervalCv;
                  break;
                case "Iq":
                  Mu = Eu.frameMs;
                  break;
                case "Fq":
                  Mu = Eu.tickMs;
                  break;
                case "xq":
                  Mu = Eu.mainBusyShare;
                  break;
                case "Tq":
                  Mu = Eu.mainProbeDelayMs;
                  break;
                case "Bq":
                  Mu = Eu.longAnimationFramesPerMin;
                  break;
                case "Lq":
                  Mu = Eu.longAnimationFrameTimeShare;
                  break;
                case "tq":
                  Mu = Eu.longAnimationFrameScriptShare;
                  break;
                case "Hq":
                  Mu = Eu.gpuPassMs;
                  break;
                case "Aq":
                  Mu = Eu.gpuSubmitToDoneMs;
                  break;
                case "nq":
                  Mu = ju.lagP50Ms;
                  break;
                case "yq":
                  Mu = ju.lagP90Ms;
                  break;
                case "ff":
                  Mu = (0, cq.i)(Xu);
                  break;
                case "oq":
                  Mu = lu;
                  break;
                case "zq":
                case "Rq":
                case "uf":
                case "Ef":
                case "jf":
                case "sf":
                case "Uf":
                case "Zf":
                case "Xf":
                case "lf":
                case "qf":
                case "Cf":
                case "bf":
                case "Nf":
                case "Yf":
                  Mu = null;
                  break;
                case "mf":
                  Mu = (0, yU.getPlatformType)();
                  break;
                case "vf":
                  Mu = (0, yU.getGpuVendor)();
                  break;
                case "Kf":
                  Mu = dq.b[uu.backend];
                  break;
                case "Vf":
                  Mu = (0, wq.c)();
                  break;
                case "rf":
                  Mu = (0, yU.getOperatingSystem)();
                  break;
                case "Qf":
                  Mu = (0, yU.getTrafficSource)();
                  break;
                case "Wf":
                  Mu = null !== (fu = su.d.get("gameEntrySource")) && void 0 !== fu ? fu : Yq.h;
                  break;
                case "Sf":
                  Mu = null !== (Cu = Eu.frameLimiter) && void 0 !== Cu ? Cu : Yq.h;
                  break;
                case "Ff":
                  Mu = (0, gq.h)();
                  break;
                case "Bf":
                  Mu = null !== (bu = (0, Mq.e)()) && void 0 !== bu ? bu : Yq.h;
                  break;
                case "Lf":
                  Mu = (0, gq.d)(Yu.width, Yu.height);
                  break;
                case "tf":
                  Mu = (0, Nq.e)(-(new Date).getTimezoneOffset());
                  break;
                case "Hf":
                  Mu = null !== (cu = uu.fallbackReason) && void 0 !== cu ? cu : Yq.h;
                  break;
                case "zf":
                  Mu = "ready";
                  break;
                case "Rf":
                  Mu = (0, yU.getSoftwareRenderer)();
                  break;
                case "Tf":
                  Mu = null !== uu.shaderPackReach() ? "true" : "false";
                  break;
                case "uC":
                  Mu = null !== (Nu = uu.shaderPackReach()) && void 0 !== Nu && Nu.sceneDepth ? "true" : "false";
                  break;
                case "EC": {
                  const Eu = uu.shaderPackReach();
                  Mu = null !== Eu && void 0 !== Eu && Eu.sunShadow ? "all" : null !== Eu && void 0 !== Eu && Eu.airShadow ? "air" : "none";
                  break
                }
                case "jC":
                  Mu = Jq.z;
                  break;
                case "fC":
                  Mu = (0, Gq.i)();
                  break;
                case "xf": {
                  const Eu = uu.aY();
                  Mu = null === Eu ? Yq.h : String(Eu);
                  break
                }
                case "Af":
                case "yf":
                  Mu = Yq.h;
                  break;
                default:
                  throw new Error(`Unhandled field name: ${gu}`)
              }
              if (void 0 === Mu) throw new Error(`Metric ${gu} has no value`);
              Ou[gu] = Mu
            }
            return Ou
          }(this.shell, {
            cpuFrameMs: Eu,
            refreshHz: ju,
            cpuBottleneck: Uu,
            frameIntervalCv: Zu,
            ...fu
          }, Cu, this.fpsOverTime, this.initialFps, this.pendingLightFailures, this.ping.take(), Nu);
        if (! function(uu, Eu, ju) {
            return (0, tE.e)(), uu(Ou.q.Send, Eu, ju)
          }(this.shell.writeCmd, cu.td, function(uu) {
            const Eu = (0, Qu.f)((0, HE.g)(uu)),
              ju = new Uint8Array(Ou.Kd.BYTES + Eu.length);
            return new DataView(ju.buffer).setUint16(0, HE.c.AnalyticsUpdate, !0), ju.set(Eu, Ou.Kd.BYTES), ju
          }(Yu))) return this.unsentPage = Nu, void(0 === this.sendsDropped++ && console.warn("[wasm-client] an analytics update found the cmd ring full: dropped"));
        this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, cq.f), (0, Gq.m)(Yu, "wasm", bu)
      }
    }
    var tq = ju(39900);

    function xq(uu, Eu, ju) {
      const su = new Map;
      return (0, tq.b)(((uu, ju, su) => Eu.ul(uu, ju, su)), ((Eu, ju, Uu) => {
        const Zu = `${Eu},${ju},${Uu}`;
        return su.has(Zu) || su.set(Zu, (0, WE.d)(uu, Eu, ju, Uu)), su.get(Zu)
      }), ju)
    }
    var Tq = ju(39908),
      Hq = ju(41110);

    function Aq(uu) {
      const Eu = null !== uu && 0 !== (Ou.u.playerFlags(uu.api.apiView, 0) & Ou.td.CursorAim);
      Eu !== (0, Hq.o)() && (0, Hq.F)(Eu, null !== uu)
    }

    function nq(uu) {
      return (0, gs.c)(Ms.G, uu)
    }
    var yq = ju(41247);
    const zq = new Zu.d((uu => ju(42870)(`./${uu}/${uu}Client`)));
    let Rq = null,
      uf = null;
    async function Ef(uu) {
      Rq ??= ju.e(27).then((() => ju(39455))).then((uu => {
        uf = uu.createDefaultClientPlugins
      }), (uu => {
        throw Rq = null, uu
      })), await Promise.all([zq.load(uu), Rq])
    }

    function jf(uu) {
      uu.load(new rE(Hs, new ys))
    }
    let sf = !1;
    const Uf = new WeakMap;

    function Zf(uu) {
      try {
        uu()
      } catch (Eu) {
        console.error("[bloxd-wasm-client] a session-end step failed", Eu)
      }
    }

    function Xf(uu, Eu) {
      ! function() {
        var uu, Eu;
        ts.Howler.volume();
        const ju = ts.Howler;
        null === (uu = ju._autoResume) || void 0 === uu || uu.call(ju), null === (Eu = ju._autoSuspend) || void 0 === Eu || Eu.call(ju)
      }(), Eu.audio.prepare();
      const ju = new eu(Eu.core, Eu.memory, Eu.audio);
      let Zu;
      try {
        Zu = new gU(ju, Eu.options)
      } catch (cu) {
        return uu.crash(eU.w, cu), null
      }(0, qu.e)(MU(ju, Zu));
      const Cu = new ol({
        running: uu,
        api: ju,
        core: Eu.core,
        memory: Eu.memory,
        staleOr: Eu.staleOr,
        reportFault: Eu.reportReplayFault,
        options: Eu.options,
        sessionInfo: Eu.sessionInfo,
        replayShaderPack: Eu.replayShaderPack
      });
      (0, Us.A)();
      const bu = new Ws({
        api: ju,
        tables: Zu,
        sessionInfo: Eu.sessionInfo,
        gameFactory: uu => zq.loadedFactory(uu),
        defaultPlugins: (uu, Eu, ju, su) => {
          if (null === uf) throw new Error("The default plugins started before they loaded");
          return uf(uu, Eu, ju, su)
        },
        serverOptions: Eu.options,
        onNetEvent: uu => {
          Cu.netEvent(uu), Eu.onNetEvent(uu)
        },
        setLocalOptions: Eu => {
          ml(uu, {
            changes: Eu,
            reset: !1
          })
        },
        playSound: (uu, ju, su, Uu, Zu, Xu, lu) => Eu.audio.playGame(uu, ju, su, Uu, Zu, Xu, lu),
        preloadSounds: uu => {
          Eu.audio.preload(function(uu) {
            const Eu = [];
            for (const ju of uu) {
              const uu = KE(ju);
              uu >= 0 && Eu.push(gE[uu])
            }
            return Eu
          }(uu))
        },
        onSessionEnd: () => {
          Zf(Uu.m), Zf(UU), Zf((() => {
            su.d.set({
              openInGameMenuName: null
            })
          })), Zf((() => {
            Eu.audio.endSession()
          }))
        },
        beforeWrite: Eu.beforeWrite,
        beforeOp: Eu.beforeOp,
        cameraScreen: sU,
        showCameraFacing: ZU,
        onEventOverflow: Eu.onEventOverflow,
        screenBandY: lu.h,
        replayEntities: Cu.entityHooks,
        hasPackModel: Eu.hasPackModel
      });
      return bu.attach(uu), Uf.set(bu, Cu), Bs(bu.items, Eu.audio),
        function(uu) {
          uu.setClientFreeCameraGrant("isDev", !1);
          const Eu = Eu => {
            uu.setClientFreeCameraGrant("hasDeveloperRank", Eu.playerHasRank("developer"))
          };
          (0, Xu.l)("userContextUpdated", Eu)
        }(bu), sf || (sf = !0, (0, Xu.l)("appManagerUpdated|openInGameMenuName", (uu => {
          !uu && (0, fu.p)().includes(fu.b) && (0, fu.q)(fu.b)
        }))), bu
    }

    function lf(uu) {
      try {
        uu.closeGame()
      } finally {
        var Eu;
        null === (Eu = Uf.get(uu)) || void 0 === Eu || Eu.stop(), Uf.delete(uu)
      }
    }
  },
  42870: (uu, Eu, ju) => {
    var su = {
      "./bedwars/bedwarsClient": [39571, 9],
      "./bridgeBattle/bridgeBattleClient": [39577, 10],
      "./buildAFactory2/buildAFactory2Client": [38811, 76, 75, 74, 230, 225, 11],
      "./classic/classicClient": [39581, 12],
      "./clutch/clutchClient": [39584, 13],
      "./containmentBreach/containmentBreachClient": [39592, 224, 14],
      "./cooking/cookingClient": [39722, 15],
      "./defusal/defusalClient": [39725, 16],
      "./frontline/frontlineClient": [39728, 76, 75, 74, 17],
      "./goalRush/goalRushClient": [39737, 18],
      "./luckyBedwars/luckyBedwarsClient": [39745, 19],
      "./ninetyNineNights/ninetyNineNightsClient": [39749, 20],
      "./oneBlock/oneBlockClient": [39753, 21],
      "./plots/plotsClient": [39757, 247, 224, 22],
      "./pvpCiv/pvpCivClient": [39828, 23],
      "./skyIslands/skyIslandsClient": [39830, 24],
      "./skyblock/skyblockClient": [38843, 76, 239, 230, 192, 25],
      "./tsunami/tsunamiClient": [39839, 26]
    };

    function Uu(uu) {
      if (!ju.o(su, uu)) return Promise.resolve().then((() => {
        var Eu = new Error("Cannot find module '" + uu + "'");
        throw Eu.code = "MODULE_NOT_FOUND", Eu
      }));
      var Eu = su[uu],
        Uu = Eu[0];
      return Promise.all(Eu.slice(1).map(ju.e)).then((() => ju(Uu)))
    }
    Uu.keys = () => Object.keys(su), Uu.id = 42870, uu.exports = Uu
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);