export const id = 57;
export const ids = [57];
export const modules = {
  42737: (BB, jB, zB) => {
    var QB = {
      "./bedwars/bedwarsClient": [39360, 9],
      "./bridgeBattle/bridgeBattleClient": [39362, 10],
      "./buildAFactory2/buildAFactory2Client": [38572, 76, 75, 74, 230, 225, 11],
      "./classic/classicClient": [39365, 12],
      "./clutch/clutchClient": [39370, 13],
      "./containmentBreach/containmentBreachClient": [39378, 224, 14],
      "./cooking/cookingClient": [39497, 15],
      "./defusal/defusalClient": [39505, 16],
      "./frontline/frontlineClient": [39509, 76, 75, 74, 17],
      "./goalRush/goalRushClient": [39518, 18],
      "./luckyBedwars/luckyBedwarsClient": [39521, 19],
      "./ninetyNineNights/ninetyNineNightsClient": [39529, 20],
      "./oneBlock/oneBlockClient": [39537, 21],
      "./plots/plotsClient": [39545, 247, 224, 22],
      "./pvpCiv/pvpCivClient": [39620, 23],
      "./skyIslands/skyIslandsClient": [39622, 24],
      "./skyblock/skyblockClient": [38610, 76, 239, 230, 192, 25],
      "./tsunami/tsunamiClient": [39630, 26]
    };

    function nB(BB) {
      if (!zB.o(QB, BB)) return Promise.resolve().then((() => {
        var jB = new Error("Cannot find module '" + BB + "'");
        throw jB.code = "MODULE_NOT_FOUND", jB
      }));
      var jB = QB[BB],
        nB = jB[0];
      return Promise.all(jB.slice(1).map(zB.e)).then((() => zB(nB)))
    }
    nB.keys = () => Object.keys(QB), nB.id = 42737, BB.exports = nB
  },
  36453: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => aB,
      g: () => NB,
      k: () => UB,
      l: () => uB,
      m: () => LB
    });
    var QB = zB(667),
      nB = zB(1794),
      dB = zB(4893);
    class IB {
      constructor(BB, jB) {
        this.width = BB, this.Ep = jB, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(BB * jB)
      }
      push(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const zB = this.data,
          QB = this.next * this.width;
        for (let nB = 0; nB < this.width; nB++) zB[QB + nB] = BB[jB + nB];
        this.next = (this.next + 1) % this.Ep, this.size = Math.min(this.size + 1, this.Ep)
      }
      rows() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
        const zB = [],
          QB = (this.next - this.size + this.Ep) % this.Ep;
        for (let nB = 0; nB < this.size; nB++) {
          const dB = (QB + nB) % this.Ep * this.width;
          this.data[dB + BB] >= jB && zB.push(Array.from(this.data.subarray(dB, dB + this.width)))
        }
        return zB
      }
      lines() {
        return this.rows().map((BB => BB.join(",")))
      }
    }
    const NB = 10,
      uB = {
        idle: 0,
        Cs: 1,
        SF: 2,
        YF: 3,
        Dy: 4
      },
      UB = {
        none: 0,
        skipped: 1,
        paced: 2,
        drawn: 3
      },
      aB = {
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
      pB = 12e3,
      rB = ["nowMs", "dtMs", "rawX", "rawY", "turnedX", "turnedY", "outcome", "velocityX", "velocityY", "limit"],
      sB = ["timeStamp", "nowMs", "movementX", "movementY", "locked"],
      JB = ["nowMs", "dtMs", "heading", "pitch", "kind"],
      mB = ["nowMs", "source", "headingBefore", "pitchBefore", "headingAfter", "pitchAfter"],
      yB = ["nowMs", "change", "count"];

    function kB(BB) {
      return "js" === BB ? aB.jsClient : aB.wasmClient
    }
    class GB {
      constructor() {
        this.steps = new IB(NB, pB), this.events = new IB(sB.length, pB), this.frames = new IB(JB.length, pB), this.cameraSets = new IB(dB.e, 256), this.changes = new IB(yB.length, 256)
      }
    }
    const LB = new class {
      constructor() {
        this.rings = null, this.sample = new Float64Array(sB.length), this.startedClient = null, this.startedAtMs = 0
      }
      get client() {
        return this.startedClient
      }
      start(BB, jB) {
        this.startedClient = BB, this.startedAtMs = performance.now(), null !== this.rings ? this.change(kB(BB)) : jB && this.allocate()
      }
      lockGained() {
        this.allocate(), this.change(aB.lockGained)
      }
      allocate() {
        null === this.rings && (this.rings = new GB, null !== this.startedClient && this.changeAt(this.startedAtMs, kB(this.startedClient), 1))
      }
      step(BB, jB) {
        var zB;
        BB[jB + 6] !== uB.Dy && (null === (zB = this.rings) || void 0 === zB || zB.steps.push(BB, jB))
      }
      cameraSet(BB, jB) {
        var zB;
        null === (zB = this.rings) || void 0 === zB || zB.cameraSets.push(BB, jB)
      }
      mouseMove(BB, jB) {
        const zB = this.rings;
        if (null === zB) return;
        const QB = this.sample;
        QB[0] = BB.timeStamp, QB[1] = performance.now(), QB[2] = BB.movementX, QB[3] = BB.movementY, QB[4] = jB ? 1 : 0, zB.events.push(QB)
      }
      frame(BB, jB, zB, QB) {
        const nB = this.rings;
        if (null === nB || QB === UB.none) return;
        const dB = this.sample;
        dB[0] = performance.now(), dB[1] = BB, dB[2] = jB, dB[3] = zB, dB[4] = QB, nB.frames.push(dB)
      }
      change(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.changeAt(performance.now(), BB, jB)
      }
      changeAt(BB, jB, zB) {
        const QB = this.rings;
        if (null === QB) return;
        const nB = this.sample;
        nB[0] = BB, nB[1] = jB, nB[2] = zB, QB.changes.push(nB)
      }
      dumpText() {
        var BB, jB;
        const zB = this.rings;
        return [`look records (${this.startedClient}): ${rB.join(",")}`, ...null !== (BB = null === zB || void 0 === zB ? void 0 : zB.steps.lines()) && void 0 !== BB ? BB : [], `mousemove events: ${sB.join(",")}`, ...null !== (jB = null === zB || void 0 === zB ? void 0 : zB.events.lines()) && void 0 !== jB ? jB : []].join("\n")
      }
      toJson(BB, jB) {
        var zB;
        const nB = BB - 6e4,
          dB = this.rings,
          IB = function(BB, jB) {
            var zB;
            let QB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const dB = null !== (zB = null === BB || void 0 === BB ? void 0 : BB.rows(QB, nB)) && void 0 !== zB ? zB : [];
            return {
              columns: jB,
              fromMs: 0 === dB.length ? null : dB[0][QB],
              rows: dB
            }
          };
        return {
          version: QB.b,
          client: null !== (zB = this.startedClient) && void 0 !== zB ? zB : "not started",
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
          Ky: null !== document.pointerLockElement,
          visibility: document.visibilityState,
          ...jB,
          outcomes: uB,
          frameKinds: UB,
          changes: aB,
          lookSteps: IB(null === dB || void 0 === dB ? void 0 : dB.steps, rB),
          mouseMoves: IB(null === dB || void 0 === dB ? void 0 : dB.events, sB, 1),
          frames: IB(null === dB || void 0 === dB ? void 0 : dB.frames, JB),
          cameraSets: IB(null === dB || void 0 === dB ? void 0 : dB.cameraSets, mB),
          pageChanges: IB(null === dB || void 0 === dB ? void 0 : dB.changes, yB)
        }
      }
      save(BB) {
        const jB = JSON.stringify(this.toJson(performance.now(), BB));
        (0, nB.e)(new Blob([jB], {
          type: "application/json"
        }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
      }
    }
  },
  39142: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => dB,
      f: () => nB
    });
    var QB = zB(31);

    function nB(BB) {
      return "refetchCode" === BB || "devDownloadJson" === BB || BB.startsWith("Plugin")
    }

    function dB(BB, jB) {
      "refetchCode" !== BB ? "Plugin|MobAiPlugin|ShowPetUi" !== BB ? Promise.all([zB.e(109), zB.e(110), zB.e(105), zB.e(107), zB.e(218)]).then((() => zB(41825))).then((zB => {
        let {
          runClientGameMessage: QB
        } = zB;
        QB(BB, jB)
      })).catch((jB => {
        console.error(`Game message ${BB} failed`, jB)
      })) : QB.n.Ly("showPetUi", jB) : QB.n.Ly("refetchCode")
    }
  },
  42723: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => QB,
      c: () => nB
    });
    const QB = ["recording", "freecam", "keyframe"];

    function nB() {
      const BB = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(BB[1]) << 32n | BigInt(BB[0])
    }
  },
  34176: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => NB,
      i: () => uB
    });
    var QB = zB(28);
    const nB = 24,
      dB = "farNametags",
      IB = 1e5;

    function NB() {
      var BB;
      return null === (BB = QB.c.get("showDistantNametags")) || void 0 === BB || BB
    }

    function uB() {
      var BB;
      return null !== (BB = function() {
        const BB = new URLSearchParams(window.location.search).get(dB),
          jB = null === BB || "" === BB ? NaN : Number(BB);
        return Number.isFinite(jB) && jB >= 0 ? Math.min(jB, IB) : null
      }()) && void 0 !== BB ? BB : NB() ? 0 : nB
    }
  },
  42718: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      blockIdOf: () => bu.d,
      clearWasmCameraScreen: () => zn,
      creativeItemIds: () => zQ.creativeItemIds,
      decodeMapSettings: () => Ou,
      drainTextRerasters: () => eN.b,
      enchantmentPerksOf: () => zQ.enchantmentPerksOf,
      endGameHost: () => aU,
      followCursorAim: () => Ru,
      followMenuPrefs: () => nd,
      loadAudio: () => dU,
      loadClientGame: () => nU,
      loadTextIcons: () => eN.f,
      rasterText: () => WN.d,
      readBoardToEdit: () => cu,
      readDrawCensus: () => BU.e,
      setTextHost: () => eN.k,
      setTextLocalPlayer: () => eN.l,
      showInCreativeInvenOf: () => zQ.showInCreativeInvenOf,
      startGameHost: () => UU,
      startShellAnalytics: () => xu,
      startSkyFeed: () => pu,
      textChanged: () => eN.s,
      warmText: () => WN.f,
      wasmCameraScreen: () => jn
    });
    zB(36583);
    var QB = zB(28),
      nB = zB(36897),
      dB = zB(39253),
      IB = zB(31),
      NB = zB(3510),
      uB = zB(36893),
      UB = zB(1316),
      aB = zB(644),
      pB = zB(38307),
      rB = zB(4887),
      sB = zB(40730),
      JB = zB(40682);
    const mB = JB.Pb / 4,
      yB = JB.q.PlaySound,
      kB = JB.q.SoundReset,
      GB = rB.U.ReplayFailed,
      LB = rB.U.RecorderEvent;
    class gB {
      constructor(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.core = BB, this.memory = jB, this.audio = zB, this.serverIds = new Int32Array(256).fill(JB.kd), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.view = new DataView(new ArrayBuffer(JB.w.BYTES)), this.renderPtr = 0, this.Ep = 0, this.renderCapacity = 0, this.render = new Float32Array(0), this.visPtr = 0, this.vis = new Uint8Array(0), this.renderBuffer = null, this.eventsBuffer = null, this.eventsPtr = 0, this.eventsLen = 0, this.events = new DataView(new ArrayBuffer(0)), this.audioView = null, this.scratchPtr = -1, this.corruption = null, this.replay = null, this.queries = new JB._(BB, (() => {
          this.scratchPtr = -1, this.ensureViews()
        }))
      }
      scratch() {
        return this.scratchPtr < 0 && (this.scratchPtr = this.core.UnB(), this.ensureViews()), this.scratchPtr
      }
      eventBytes(BB, jB) {
        const zB = this.eventView();
        return new Uint8Array(zB.buffer, zB.byteOffset + BB, jB)
      }
      get apiView() {
        return this.ensureViews(), this.view
      }
      ensureViews() {
        this.memory().buffer !== this.buffer && this.reView()
      }
      get localId() {
        return JB.w.localId(this.apiView, 0)
      }
      localDeaths() {
        return JB.w.localDeaths(this.apiView, 0)
      }
      rereadDirectory() {
        const BB = this.apiView,
          jB = JB.w.entRenderPtr(BB, 0),
          zB = JB.w.entVisPtr(BB, 0),
          QB = JB.w.entCapacity(BB, 0);
        if (jB !== this.renderPtr || zB !== this.visPtr || QB !== this.Ep || this.renderBuffer !== this.buffer) {
          this.renderPtr = jB, this.visPtr = zB, this.Ep = QB, this.renderBuffer = this.buffer;
          const BB = this.memoryView(Float32Array, jB, QB * mB, "the render array"),
            nB = this.memoryView(Uint8Array, zB, QB, "the visibility array");
          this.renderCapacity = BB && nB ? QB : 0, this.render = BB && nB ? BB : new Float32Array(0), this.vis = BB && nB ? nB : new Uint8Array(0)
        }
      }
      memoryView(BB, jB, zB, QB) {
        try {
          return (0, sB.t)(BB, this.memory().buffer, jB, zB, QB)
        } catch (nB) {
          return this.keepCorruption(nB), null
        }
      }
      memoryData(BB, jB, zB, QB) {
        try {
          return (0, sB.g)(this.memory().buffer, BB, jB, zB, QB)
        } catch (nB) {
          return this.keepCorruption(nB), null
        }
      }
      reportCorruption(BB) {
        this.keepCorruption(new sB.c(BB))
      }
      keepCorruption(BB) {
        if (!(BB instanceof sB.c)) throw BB;
        this.corruption ??= BB
      }
      throwCorruption() {
        if (this.corruption) throw this.corruption
      }
      walk(BB, jB, zB) {
        this.rereadDirectory(), this.throwCorruption();
        const {
          ptr: QB,
          len: nB
        } = BB;
        this.eventsPtr = QB, this.eventsLen = nB, this.eventsBuffer = null;
        const dB = this.eventView();
        for (let UB = 0; UB < nB;) {
          const BB = dB.getUint32(UB, !0),
            zB = 65535 & BB,
            QB = BB >>> 16,
            nB = UB + rB.Q;
          if (zB === JB.q.EntitySpawned) {
            var IB;
            if (QB !== JB.Wb.BYTES) throw iB(zB, UB, QB);
            const BB = JB.Wb.serverId(dB, nB);
            this.spawned(BB, JB.Wb.index(dB, nB), JB.Wb.kind(dB, nB)), null === (IB = jB.entityAdded) || void 0 === IB || IB.call(jB, BB)
          } else if ((zB === JB.q.ChunkSlot || zB === JB.q.EntityInfoChanged) && !(0, JB.ye)(zB, dB, nB, QB, jB)) throw iB(zB, UB, QB);
          UB = nB + (0, rB.ie)(QB)
        }
        try {
          var NB;
          null === (NB = jB.afterPrescan) || void 0 === NB || NB.call(jB), this.throwCorruption(), !zB() && this.dispatch(BB, jB, zB) && (this.throwCorruption(), this.applyListener(), jB.afterWalk(BB.kind)), this.throwCorruption()
        } catch (uB) {
          throw uB instanceof sB.c && (this.corruption ??= uB), uB
        } finally {
          zB() || null !== this.corruption || this.applyDespawns(nB, jB)
        }
      }
      applyDespawns(BB, jB) {
        const zB = this.eventView();
        for (let nB = 0; nB < BB;) {
          const BB = zB.getUint32(nB, !0),
            dB = nB + rB.Q;
          if ((65535 & BB) === JB.q.EntityDespawned && BB >>> 16 === JB.Wb.BYTES) {
            const BB = JB.Wb.serverId(zB, dB);
            var QB;
            if (this.despawned(BB, JB.Wb.index(zB, dB))) null === (QB = jB.entityRemoved) || void 0 === QB || QB.call(jB, BB)
          }
          nB = dB + (0, rB.ie)(BB >>> 16)
        }
        this.rereadDirectory()
      }
      dispatch(BB, jB, zB) {
        const {
          len: QB,
          net: nB,
          netOffsets: dB
        } = BB;
        let IB = this.eventView(),
          NB = 0;
        for (let SB = 0; SB < QB;) {
          const BB = IB.getUint32(SB, !0),
            QB = 65535 & BB,
            MB = BB >>> 16,
            qB = SB + rB.Q;
          let fB = !1;
          if (NB < nB.length && dB[NB] === SB) jB.netEvent(nB[NB]), NB++, fB = !0;
          else if (QB === rB.U.LocalPlayerBound) {
            var uB;
            if (MB !== rB.Cb) throw iB(QB, SB, MB);
            null === (uB = jB.localPlayerBound) || void 0 === uB || uB.call(jB, IB.getInt32(qB, !0)), fB = !0
          } else if (QB === rB.U.LocalHurt) {
            var UB;
            if (MB !== rB.Ab) throw iB(QB, SB, MB);
            null === (UB = jB.localHurt) || void 0 === UB || UB.call(jB, IB.getInt32(qB, !0), IB.getFloat32(qB + 4, !0), IB.getUint32(qB + 8, !0)), fB = !0
          } else if (QB === rB.U.AttackHit) {
            var aB;
            if (MB !== rB.e) throw iB(QB, SB, MB);
            const BB = IB.getFloat32(qB, !0),
              zB = IB.getFloat32(qB + 4, !0),
              nB = IB.getFloat32(qB + 8, !0),
              dB = IB.getUint32(qB + 12, !0);
            null === (aB = jB.attackHit) || void 0 === aB || aB.call(jB, BB, zB, nB, 0 !== (dB & rB.l.Crit), 0 !== (dB & rB.l.HitSelf))
          } else if (QB === rB.U.PhysicsType) {
            var pB;
            if (MB !== rB.ac) throw iB(QB, SB, MB);
            null === (pB = jB.physicsType) || void 0 === pB || pB.call(jB, IB.getUint32(qB, !0), IB.getInt32(qB + 4, !0)), fB = !0
          } else if (QB === rB.U.VehicleEffect) {
            var sB;
            const BB = EB(IB, qB, MB);
            if (null === BB) throw iB(QB, SB, MB);
            null === (sB = jB.vehicleEffect) || void 0 === sB || sB.call(jB, BB.op, BB.name, BB.icon, BB.level, BB.durationMs), fB = !0
          } else if (QB === rB.U.ZoomChanged) {
            var mB;
            if (MB !== rB.Md) throw iB(QB, SB, MB);
            null === (mB = jB.zoomChanged) || void 0 === mB || mB.call(jB, IB.getFloat32(qB, !0), IB.getUint8(qB + 4)), fB = !0
          } else if (QB === rB.U.ZoomDisabled) {
            var gB;
            if (0 !== MB) throw iB(QB, SB, MB);
            null === (gB = jB.zoomDisabled) || void 0 === gB || gB.call(jB), fB = !0
          } else if (QB === rB.U.GameCamera) {
            var tB;
            null === (tB = jB.gameCamera) || void 0 === tB || tB.call(jB, new Uint8Array(IB.buffer, IB.byteOffset + qB, MB).slice()), fB = !0
          } else if (QB === JB.q.ChunkSlot || QB === JB.q.EntityInfoChanged);
          else if (QB >= yB && QB <= kB) {
            if (this.audio && !this.audio.onAudioEvent(QB, IB, qB, MB)) throw iB(QB, SB, MB)
          } else if (QB >= GB && QB <= LB) {
            if (this.replay) {
              if (!this.replay.onReplayEvent(QB, IB, qB, MB)) throw iB(QB, SB, MB);
              fB = !0
            }
          } else if (QB >= JB.vd && QB <= JB.zd && QB !== rB.U.EnvLighting) {
            if (!(0, JB.ye)(QB, IB, qB, MB, jB)) throw iB(QB, SB, MB);
            fB = !0
          }
          if (fB) {
            if (zB()) return !1;
            IB = this.eventView()
          }
          SB = qB + (0, rB.ie)(MB)
        }
        return !zB()
      }
      applyListener() {
        var BB;
        if (!this.audio) return;
        const jB = JB.w.audioViewPtr(this.apiView, 0),
          zB = this.memory().buffer;
        let QB = this.audioView;
        (null === (BB = QB) || void 0 === BB ? void 0 : BB.buffer) === zB && QB.byteOffset === jB || (QB = (0, sB.g)(zB, jB, JB.y.BYTES, 8, "the audio view"), this.audioView = QB), QB && this.audio.applyListener(QB)
      }
      indexOf(BB) {
        return this.indexById.get("number" === typeof BB ? BB : +BB)
      }
      isLocal(BB) {
        return BB !== JB.kd && BB === JB.w.localId(this.apiView, 0)
      }
      iG(BB) {
        const jB = [0, 0, 0];
        return this.readPosition("number" === typeof BB ? BB : +BB, jB) ? jB : null
      }
      readPosition(BB, jB) {
        const zB = this.apiView;
        if (void 0 !== this.indexById.get(BB) && this.isLocal(BB)) {
          for (let BB = 0; BB < 3; BB++) jB[BB] = JB.w.localPos(zB, 0, BB);
          return !0
        }
        return this.readDrawnPosition(BB, jB)
      }
      readDrawnPosition(BB, jB) {
        const zB = this.apiView,
          QB = this.indexById.get(BB);
        if (void 0 === QB || QB >= this.renderCapacity) return jB[0] = jB[1] = jB[2] = NaN, !1;
        const nB = QB * mB;
        for (let dB = 0; dB < 3; dB++) jB[dB] = this.render[nB + dB] + JB.w.origin(zB, 0, dB);
        return !0
      }
      checkValid(BB) {
        return void 0 !== this.indexOf(BB)
      }
      isAlive(BB) {
        const jB = this.indexOf(BB);
        if (void 0 === jB) return null;
        if (this.ensureViews(), jB >= this.renderCapacity) return null;
        const zB = this.vis[jB];
        return 0 === zB ? null : 0 !== (zB & JB.we.Alive)
      }
      getEntityType(BB) {
        const jB = this.indexOf(BB);
        return void 0 === jB ? this.isLocal("number" === typeof BB ? BB : +BB) ? "Player" : null : SB(this.kinds[jB])
      }
      spawned(BB, jB, zB) {
        if (jB >= 1048576) throw new sB.c(`entity ${BB} spawned at index ${jB}`);
        this.ensureIndex(jB), this.serverIds[jB] === BB && null !== this.idStr[jB] || (this.idStr[jB] = String(BB)), this.serverIds[jB] = BB, this.kinds[jB] = zB, this.indexById.set(BB, jB)
      }
      despawned(BB, jB) {
        let zB = !1;
        return this.indexById.get(BB) === jB && (this.indexById.delete(BB), zB = !0), jB < this.serverIds.length && this.serverIds[jB] === BB && (this.serverIds[jB] = JB.kd, this.kinds[jB] = 0, this.idStr[jB] = null), zB
      }
      ensureIndex(BB) {
        const jB = this.serverIds.length;
        if (BB < jB) return;
        let zB = 2 * jB;
        for (; zB <= BB;) zB *= 2;
        const QB = new Int32Array(zB).fill(JB.kd);
        QB.set(this.serverIds), this.serverIds = QB;
        const nB = new Uint16Array(zB);
        nB.set(this.kinds), this.kinds = nB;
        for (let dB = jB; dB < zB; dB++) this.idStr.push(null)
      }
      eventView() {
        const BB = this.memory().buffer;
        return BB !== this.eventsBuffer && (this.eventsBuffer = BB, this.events = new DataView(BB, this.eventsPtr, this.eventsLen)), this.events
      }
      reView() {
        const BB = this.memory().buffer;
        this.buffer = BB, this.viewPtr < 0 && (this.viewPtr = this.core.anB()), this.view = new DataView(BB, this.viewPtr, JB.w.BYTES), this.rereadDirectory()
      }
    }

    function tB(BB) {
      return BB >>> JB.c === JB.s.Item
    }

    function SB(BB) {
      var jB, zB;
      const QB = BB & JB.e;
      switch (BB >>> JB.c) {
        case JB.s.Lifeform:
          return null !== (jB = aB.i[QB]) && void 0 !== jB ? jB : null;
        case JB.s.Throwable:
          return null !== (zB = pB.j[QB]) && void 0 !== zB ? zB : null;
        case JB.s.Mesh:
          return "Mesh";
        case JB.s.Audio:
          return "AudioEntity";
        case JB.s.Item:
          return "Item";
        default:
          return null
      }
    }
    const MB = new TextDecoder;

    function EB(BB, jB, zB) {
      if (zB < rB.yd.HEAD_BYTES) return null;
      const QB = BB.getUint32(jB, !0),
        nB = BB.getUint32(jB + 20, !0),
        dB = BB.getUint32(jB + 24, !0),
        IB = rB.yd.HEAD_BYTES + (0, rB.ie)(nB);
      if (QB !== rB.yd.UPDATE && QB !== rB.yd.REMOVE || nB > zB || IB + dB > zB) return null;
      const NB = (zB, QB) => MB.decode(new Uint8Array(BB.buffer, BB.byteOffset + jB + zB, QB)),
        uB = BB.getFloat64(jB + 12, !0);
      return {
        op: QB,
        level: BB.getFloat64(jB + 4, !0),
        durationMs: Number.isNaN(uB) ? null : uB,
        name: NB(rB.yd.HEAD_BYTES, nB),
        icon: NB(IB, dB)
      }
    }

    function iB(BB, jB, zB) {
      return new sB.c(`event ${BB} at ${jB} of ${zB} bytes`)
    }
    var qB = zB(376),
      fB = zB(1263),
      oB = zB(39142),
      HB = zB(2002),
      DB = zB(41096),
      FB = zB(1948),
      YB = zB(39274),
      VB = zB(39289),
      hB = zB(39279),
      XB = zB(40718),
      ZB = zB(2491),
      AB = zB(39265),
      TB = zB(39286);
    const PB = Math.max(JB.Gb.BYTES, JB.vb.BYTES, JB.zb.BYTES);

    function WB(BB) {
      if (!(0, TB.g)(BB)) return null;
      const jB = Number(BB);
      return (0 | jB) === jB ? jB : null
    }
    class eB {
      constructor(BB) {
        this.api = BB, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, AB.j)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.PQ = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], this.entityHeading = 0, this.localId = JB.kd, this.localName = String(JB.kd), this.scratch = null
      }
      readView() {
        this.defaultPoseRead = !1, this.PQ = null;
        const BB = this.api.queries.directorView() >= JB.Gb.BYTES ? this.scratchView() : null;
        null !== BB && (this.defaultFov = (0, FB.G)(JB.Gb.fov(BB, 0)), this.baseFov = (0, FB.G)(JB.Gb.baseFov(BB, 0)), this.aspect = JB.Gb.aspect(BB, 0), this.bodyHeading = JB.Gb.bodyHeading(BB, 0))
      }
      getViewHeading() {
        return this.viewHeading
      }
      setViewHeading(BB) {
        this.viewHeading = BB
      }
      get localPlayerId() {
        const BB = JB.w.localId(this.api.apiView, 0);
        return BB !== this.localId && (this.localId = BB, this.localName = String(BB)), this.localName
      }
      getEntityPosition(BB) {
        return this.readEntity(BB) ? this.entityFeet : null
      }
      getEntityAimPoint(BB) {
        return this.readEntity(BB) ? this.entityAim : null
      }
      getEntityHeading(BB) {
        const jB = WB(BB);
        if (null === jB) return null;
        const zB = JB.w.localId(this.api.apiView, 0);
        return jB === zB && zB !== JB.kd ? this.viewHeading : this.readEntity(BB) ? this.entityHeading : null
      }
      raycastTerrain(BB, jB, zB) {
        const QB = this.api.queries.cameraSweep(BB[0], BB[1], BB[2], jB[0], jB[1], jB[2], zB);
        return QB < zB - 1e-6 ? QB : null
      }
      getDefaultPose() {
        if (this.defaultPoseRead) return this.defaultPose;
        this.defaultPoseRead = !0;
        const BB = this.defaultPose;
        BB.fov = this.defaultFov;
        const jB = this.api.queries.directorDefaultPose() >= JB.vb.BYTES ? this.scratchView() : null;
        if (null === jB) return BB;
        for (let zB = 0; zB < 3; zB++) BB.position[zB] = JB.vb.eye(jB, 0, zB);
        return BB.heading = JB.vb.heading(jB, 0), BB.pitch = JB.vb.pitch(jB, 0), BB
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
      readEntity(BB) {
        const jB = WB(BB);
        if (null === jB) return !1;
        if (jB === this.PQ) return this.entityLive;
        this.PQ = jB;
        const zB = this.api.queries.directorEntity(jB) >= JB.zb.BYTES ? this.scratchView() : null;
        if (this.entityLive = null !== zB, null === zB) return !1;
        for (let QB = 0; QB < 3; QB++) this.entityFeet[QB] = JB.zb.feet(zB, 0, QB), this.entityAim[QB] = this.entityFeet[QB];
        return this.entityAim[1] += JB.zb.eyeHeight(zB, 0), this.entityHeading = JB.zb.heading(zB, 0), !0
      }
      scratchView() {
        const BB = this.api.scratch(),
          jB = this.api.memory().buffer,
          zB = this.scratch;
        return null !== zB && zB.buffer === jB && zB.byteOffset === BB ? zB : (this.scratch = this.api.memoryData(BB, PB, 8, "the director's record"), this.scratch)
      }
    }
    const lB = {
        mode: "default"
      },
      wB = {
        show: () => {},
        clear: () => {}
      };

    function xB() {
      return "undefined" !== typeof document && "hidden" === document.visibilityState
    }
    class KB {
      constructor(BB) {
        this.options = BB, this.zr = void 0, this.director = void 0, this.latest = lB, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
          bD: 0,
          RD: 0
        }, this.pointedAt = {
          heading: 0,
          pitch: 0
        }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastCallMs = 0, this.answeredPose = !1, this.fp = new Int32Array(3 * JB.de), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * JB.de), this.zr = new eB(BB.api), this.director = new hB.b(this.zr)
      }
      settingsChanged(BB) {
        let jB = lB;
        if (BB.length > 0) try {
          jB = (0, XB.c)(BB)
        } catch {}
        this.latest = jB, this.pending = jB
      }
      call(BB, jB, zB, QB, nB, dB) {
        var IB, NB;
        let uB;
        this.holding = !1;
        try {
          uB = this.answer(BB, jB, zB, QB, nB, dB)
        } catch (rB) {
          var UB, aB;
          throw this.answeredPose = !1, null === (UB = (aB = this.options).showFacing) || void 0 === UB || UB.call(aB, null), rB
        }
        const pB = this.answeredPose && 0 === (QB & JB.Db.Held);
        return this.answeredPose = uB !== JB.tb.None, this.holding = this.answeredPose && !pB, null === (IB = (NB = this.options).showFacing) || void 0 === IB || IB.call(NB, this.holding ? this.facing : null), uB
      }
      holdsView() {
        return this.holding
      }
      answer(BB, jB, zB, QB, nB, dB) {
        this.calledThisFrame = !0, this.engaged = !0, this.lastCallMs = this.now();
        const {
          zr: IB
        } = this;
        IB.readView();
        if (0 !== (QB & JB.Db.Held) || IB.setViewHeading((0, YB.y)(IB.bodyHeading)), void 0 !== this.pending) {
          const BB = this.pending;
          this.pending = void 0, this.director.setSettings(BB), this.syncShownSettings()
        }
        this.readLook((0, ZB.d)(jB), (0, ZB.d)(zB), QB, (0, ZB.d)(nB), (0, ZB.d)(dB));
        const NB = this.director.update(BB / 1e3, this.look);
        if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !NB) return JB.tb.None;
        const [uB, UB, aB] = NB.position;
        if (0 === this.options.api.queries.directorPose(uB, UB, aB, (0, YB.y)(NB.heading), (0, YB.h)(NB.pitch), (0, FB.p)(NB.fov))) return JB.tb.None;
        if ("default" === this.director.getSettings().mode) return JB.tb.Pose;
        switch (this.facing) {
          case "camera":
            return JB.tb.FaceCamera;
          case "cursor":
            return JB.tb.FaceCursor;
          default:
            return JB.tb.FaceMovement
        }
      }
      afterFrame(BB) {
        BB ? (this.calledThisFrame || (this.holding = !1, this.engaged && this.idle()), this.calledThisFrame = !1) : this.centresLen > 0 && this.hidden() && this.now() - this.lastCallMs > 1e3 && this.setCentres(0), this.centresUnsent && this.sendCentres()
      }
      reset() {
        this.latest = lB, this.idle()
      }
      restart() {
        const BB = this.holding;
        this.idle(), this.holding = BB
      }
      idle() {
        var BB, jB;
        this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new hB.b(this.zr), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, null === (BB = (jB = this.options).showFacing) || void 0 === BB || BB.call(jB, null), this.setCentres(0)
      }
      syncShownSettings() {
        const BB = this.director.getSettings();
        if (BB === this.shownSettings) return;
        this.shownSettings = BB;
        const jB = (0, VB.h)(BB);
        this.facing = jB.facing, this.mouseTurns = jB.mouseTurns
      }
      readLook(BB, jB, zB, QB, nB) {
        const dB = this.look,
          IB = 0 !== (zB & JB.Db.LookPointed);
        if (null === this.mouseTurns && !IB) return dB.bD = 0, dB.RD = 0, void(dB.pointedAt = void 0);
        let NB;
        IB && (this.pointedAt.heading = QB, this.pointedAt.pitch = nB, NB = this.pointedAt);
        const {
          zr: uB
        } = this;
        uB.setViewHeading((0, VB.d)(uB.getViewHeading(), BB, jB, NB, "look" === this.mouseTurns, dB))
      }
      writeCentres(BB) {
        const jB = this.next,
          zB = Math.min(BB.length, JB.de);
        for (let QB = 0; QB < zB; QB++)
          for (let zB = 0; zB < 3; zB++) jB[3 * QB + zB] = Math.floor(BB[QB][zB] / JB.D);
        this.setCentres(zB)
      }
      setCentres(BB) {
        const {
          fp: jB,
          next: zB
        } = this;
        let QB = BB === this.centresLen;
        for (let nB = 0; QB && nB < 3 * BB; nB++) QB = jB[nB] === zB[nB];
        QB || (jB.fill(0), jB.set(zB.subarray(0, 3 * BB)), this.centresLen = BB, this.centresUnsent = !0, this.sendCentres())
      }
      sendCentres() {
        const BB = this.options.cmd();
        null !== BB && (0, JB.ag)(BB, 0, this.fp, this.centresLen) && (this.centresUnsent = !1)
      }
      screen() {
        var BB, jB, zB;
        return null !== (BB = null === (jB = (zB = this.options).screen) || void 0 === jB ? void 0 : jB.call(zB)) && void 0 !== BB ? BB : wB
      }
      hidden() {
        var BB;
        return (null !== (BB = this.options.isPageHidden) && void 0 !== BB ? BB : xB)()
      }
      now() {
        var BB, jB, zB;
        return null !== (BB = null === (jB = (zB = this.options).now) || void 0 === jB ? void 0 : jB.call(zB)) && void 0 !== BB ? BB : performance.now()
      }
    }
    var CB = zB(40865);
    const cB = JB.D * JB.D * JB.D,
      bB = Math.log2(JB.D),
      vB = JB.D - 1,
      RB = JB.Q.BYTES / 4,
      OB = new Uint16Array(cB);

    function Bj(BB, jB, zB) {
      return BB * JB.D * JB.D + jB * JB.D + zB
    }
    class jj {
      constructor(BB) {
        this.chunk = BB
      }
      get data() {
        return this.chunk.gameVoxels()
      }
      index(BB, jB, zB) {
        return Bj(BB, jB, zB)
      }
    }
    class zj {
      constructor() {
        this.ids = new Map, this.cleared = new Set, this.layers = 0, this.patched = null, this.from = null
      }
    }
    class Qj {
      constructor(BB, jB, zB, QB) {
        this.table = BB, this.slot = jB, this.generation = zB, this.epoch = QB, this.Vr = new jj(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = OB, this.dataPtr = 0, this.dataBuffer = null, this.dataStamp = -1, this.version = 0, this.layers = null, this.layersVersion = -1, this.layersPtr = -1, this.staleLayers = 0
      }
      get Nm() {
        return this.voxelData(), this.version === this.shownCore && this.writeCount === this.shownWrites || (this.shownCore = this.version, this.shownWrites = this.writeCount, this.shownVersion = this.table.nextVersion()), this.shownVersion
      }
      get ls() {
        const BB = this.gameVoxels(),
          jB = this.layers ??= new Uint16Array(JB.D);
        this.layersVersion === this.version && this.layersPtr === this.dataPtr || (this.layersVersion = this.version, this.layersPtr = this.dataPtr, this.staleLayers = -1);
        for (let zB = 0; 0 !== this.staleLayers; zB++) {
          const QB = 1 << zB;
          0 !== (this.staleLayers & QB) && (this.staleLayers &= ~QB, jB[zB] = nj(BB, zB))
        }
        return jB
      }
      voxelData() {
        return this.dataStamp === this.table.stamp && 0 !== this.data.length ? this.data : this.reread()
      }
      gameVoxels() {
        const BB = this.voxelData(),
          jB = this.writes;
        if (null === jB || 0 === jB.ids.size) return BB;
        if (jB.from !== BB) {
          const zB = jB.patched ??= new Uint16Array(cB);
          zB.set(BB);
          for (const [BB, QB] of jB.ids) zB[BB] = QB;
          jB.from = BB
        }
        return jB.patched
      }
      written(BB) {
        var jB;
        return null === (jB = this.writes) || void 0 === jB ? void 0 : jB.ids.get(BB)
      }
      hasWrites() {
        return null !== this.writes && 0 !== this.writes.ids.size
      }
      write(BB, jB, zB) {
        const QB = this.writes ??= new zj;
        QB.ids.set(BB, jB), zB && QB.cleared.add(BB), null !== QB.from && (QB.patched[BB] = jB);
        const nB = 1 << (BB >> bB & vB);
        QB.layers |= nB, this.staleLayers |= nB, this.writeCount++
      }
      clearWrites() {
        const BB = this.writes;
        null !== BB && (this.staleLayers |= BB.layers, BB.ids.clear(), BB.cleared.clear(), BB.layers = 0, BB.from = null)
      }
      dataCleared(BB) {
        var jB;
        return !0 === (null === (jB = this.writes) || void 0 === jB ? void 0 : jB.cleared.has(BB))
      }
      reread() {
        this.dataStamp = this.table.stamp;
        const BB = this.table.slotWords(),
          jB = this.slot * RB;
        if (this.epoch !== this.table.epoch || jB + RB > BB.length || 0 === BB[jB + 3] || BB[jB + 2] !== this.generation) return this.data = OB, this.dataPtr = 0, OB;
        this.version = BB[jB + 1];
        const zB = BB[jB + 0],
          QB = BB.buffer;
        return zB === this.dataPtr && QB === this.dataBuffer || (this.dataPtr = zB, this.dataBuffer = QB, this.data = this.table.voxelsAt(QB, zB)), this.data
      }
    }

    function nj(BB, jB) {
      const zB = BB[jB * JB.D];
      for (let QB = 0; QB < JB.D; QB++) {
        const nB = Bj(QB, jB, 0);
        for (let jB = 0; jB < JB.D; jB++)
          if (BB[nB + jB] !== zB) return 65535
      }
      return zB
    }
    const dj = new Uint32Array(0);

    function Ij(BB, jB, zB) {
      return Bj(BB & vB, jB & vB, zB & vB)
    }
    class Nj {
      constructor(BB, jB) {
        this.memory = BB, this.apiView = jB, this.chunks = new Map, this.written = [], this.lastKey = -1, this.lastChunk = void 0, this.slotsPtr = 0, this.slotsLen = 0, this.slotsBuffer = null, this.slots = dj, this.walkPtr = 0, this.walkLen = 0, this.walkBuffer = null, this.walk = dj, this.epoch = 0, this.stamp = 0, this.versions = 0, this.corruption = null
      }
      apply(BB, jB, zB, QB, nB, dB) {
        if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, dB === JB.T.ResetAll) return this.chunks.clear(), void this.epoch++;
        if (dB !== JB.T.Stored && dB !== JB.T.Unloaded) throw new sB.c(`ChunkSlot flags ${dB}`);
        const IB = (0, CB.d)(BB, jB, zB);
        if (IB < 0) return;
        if (dB === JB.T.Unloaded) return void this.chunks.delete(IB);
        const NB = this.chunks.get(IB);
        (null === NB || void 0 === NB ? void 0 : NB.slot) === QB && NB.generation === nB || this.chunks.set(IB, new Qj(this, QB, nB, this.epoch))
      }
      touch() {
        this.stamp++, this.clearOverlay(), this.viewWalkThrough()
      }
      refresh() {
        if (this.stamp++, this.corruption) throw this.corruption;
        const BB = this.apiView(),
          jB = JB.w.chunkSlotsPtr(BB, 0),
          zB = JB.w.chunkSlotsLen(BB, 0);
        jB === this.slotsPtr && zB === this.slotsLen || (this.slotsPtr = jB, this.slotsLen = zB, this.slotsBuffer = null, this.slotWords()), this.viewWalkThrough(), this.clearOverlay()
      }
      viewWalkThrough() {
        const BB = this.apiView(),
          jB = JB.w.walkThroughPtr(BB, 0),
          zB = JB.w.walkThroughLen(BB, 0);
        jB === this.walkPtr && zB === this.walkLen || (this.walkPtr = jB, this.walkLen = zB, this.walkBuffer = null, this.walkWords())
      }
      clearOverlay() {
        for (const BB of this.written) BB.clearWrites();
        this.written.length = 0
      }
      nextVersion() {
        return ++this.versions
      }
      slotWords() {
        const BB = this.memory().buffer;
        var jB;
        BB !== this.slotsBuffer && (this.slotsBuffer = BB, this.slots = null !== (jB = (0, sB.t)(Uint32Array, BB, this.slotsPtr, this.slotsLen * RB, "the chunk directory")) && void 0 !== jB ? jB : dj);
        return this.slots
      }
      voxelsAt(BB, jB) {
        try {
          var zB;
          return null !== (zB = (0, sB.t)(Uint16Array, BB, jB, cB, "a chunk's voxels")) && void 0 !== zB ? zB : OB
        } catch (QB) {
          if (!(QB instanceof sB.c)) throw QB;
          return this.corruption ??= QB, OB
        }
      }
      chunk(BB, jB, zB) {
        var QB;
        return null !== (QB = this.chunks.get((0, CB.d)(BB, jB, zB))) && void 0 !== QB ? QB : null
      }
      isLoaded(BB, jB, zB) {
        return void 0 !== this.chunkAt(Math.floor(BB), Math.floor(jB), Math.floor(zB))
      }
      dN(BB, jB, zB) {
        var QB;
        const nB = Math.floor(BB),
          dB = Math.floor(jB),
          IB = Math.floor(zB),
          NB = this.chunkAt(nB, dB, IB);
        if (!NB) return 0;
        const uB = Ij(nB, dB, IB);
        return null !== (QB = NB.written(uB)) && void 0 !== QB ? QB : NB.voxelData()[uB]
      }
      setOverlay(BB, jB, zB, QB) {
        let nB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const dB = this.chunkAt(BB, jB, zB);
        return !!dB && (dB.hasWrites() || this.written.push(dB), dB.write(Ij(BB, jB, zB), QB, nB), !0)
      }
      version(BB, jB, zB) {
        var QB, nB;
        return null !== (QB = null === (nB = this.chunks.get((0, CB.d)(BB, jB, zB))) || void 0 === nB ? void 0 : nB.Nm) && void 0 !== QB ? QB : null
      }
      scan(BB, jB, zB, QB, nB, dB, IB, NB) {
        const uB = JB.D;
        let UB = 0;
        for (let aB = Math.floor(jB / uB); aB * uB < nB; aB++) {
          const pB = aB * uB,
            rB = Math.min(nB - pB, uB);
          for (let nB = Math.floor(BB / uB); nB * uB < QB; nB++) {
            const sB = nB * uB,
              JB = Math.min(QB - sB, uB);
            for (let QB = Math.floor(zB / uB); QB * uB < dB; QB++) {
              const mB = this.chunks.get((0, CB.d)(nB, aB, QB));
              if (!mB) continue;
              const yB = QB * uB,
                kB = Math.max(zB - yB, 0),
                GB = Math.min(dB - yB, uB),
                LB = mB.ls,
                gB = mB.gameVoxels();
              for (let zB = Math.max(jB - pB, 0); zB < rB; zB++) {
                const jB = LB[zB];
                if (65535 === jB || 0 !== IB[jB]) {
                  UB++;
                  for (let jB = Math.max(BB - sB, 0); jB < JB; jB++) {
                    const BB = Bj(jB, zB, 0);
                    for (let QB = kB; QB < GB; QB++) {
                      const nB = gB[BB + QB];
                      0 !== IB[nB] && NB.push(sB + jB, pB + zB, yB + QB, nB)
                    }
                  }
                }
              }
            }
          }
        }
        return UB
      }
      dataCleared(BB, jB, zB) {
        var QB;
        const nB = Math.floor(BB),
          dB = Math.floor(jB),
          IB = Math.floor(zB);
        return !0 === (null === (QB = this.chunkAt(nB, dB, IB)) || void 0 === QB ? void 0 : QB.dataCleared(Ij(nB, dB, IB)))
      }
      isWalkThrough(BB) {
        if (!Number.isInteger(BB) || BB < 0 || BB > 65535) return !1;
        const jB = this.walkWords(),
          zB = BB >>> 5;
        return zB < jB.length && 1 === (jB[zB] >>> (31 & BB) & 1)
      }
      walkWords() {
        const BB = this.memory().buffer;
        var jB;
        BB !== this.walkBuffer && (this.walkBuffer = BB, this.walk = null !== (jB = (0, sB.t)(Uint32Array, BB, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== jB ? jB : dj);
        return this.walk
      }
      chunkAt(BB, jB, zB) {
        if ((0 | BB) !== BB || (0 | jB) !== jB || (0 | zB) !== zB) return;
        const QB = (0, CB.d)(BB >> bB, jB >> bB, zB >> bB);
        return QB !== this.lastKey && (this.lastKey = QB, this.lastChunk = this.chunks.get(QB)), this.lastChunk
      }
    }
    var uj = zB(38592),
      Uj = zB(37902),
      aj = zB(36873),
      pj = zB(36699),
      rj = zB(34202),
      sj = zB(39209),
      Jj = zB(214);
    const mj = ["ambient", "cars", "crowd", "customGame_horror", "dig", "fire", "fishing", "gameStart", "gunMisc", "gunPistol", "gunRifle", "gunSemiAutomatic", "gunShotgun", "gunSubmachineGun", "mobBear", "mobCat", "mobCow", "mobCrone", "mobDeer", "mobDog", "mobFennec", "mobGolem", "mobGorilla", "mobHorse", "mobKnight", "mobPig", "mobReaver", "mobSheep", "mobSkeleton", "mobStag", "mobStalker", "mobWarper", "mobWraith", "mobZombie", "note", "phoneAndMoney", "police", "randomBeep", "randomCannon", "randomCash", "randomExp", "randomFallsmall", "randomFire", "randomFirecracker", "randomItems", "randomLaugh", "randomMagic", "randomSplash", "rpg", "step", "survivalFactory", "town"],
      yj = [
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
      kj = yj.map((BB => {
        let [jB] = BB;
        return jB
      })),
      Gj = Uint8Array.from(yj, (BB => {
        let [, jB] = BB;
        return jB
      })),
      Lj = {
        semi_automatic: 11,
        submachine: 13,
        rifle: 10,
        pistol: 9,
        shotgun: 12
      },
      gj = 8;
    var tj = zB(36838),
      Sj = zB(36856),
      Mj = zB(36848),
      Ej = zB(269);
    class ij {
      constructor(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ej.c;
        this.sheet = BB, this.onError = jB, this.idle = zB, this.queue = [], this.asked = new Set, this.cancelIdle = null, this.gen = 0, this.onIdle = BB => {
          this.cancelIdle = null;
          try {
            if (BB.timeRemaining() >= 1) {
              let BB = this.queue.shift();
              for (; void 0 !== BB && !this.load(BB);) BB = this.queue.shift()
            }
          } catch (jB) {
            this.onError(jB)
          } finally {
            this.schedule()
          }
        }
      }
      preload(BB) {
        const jB = [...BB].sort(((BB, jB) => BB - jB));
        for (const zB of jB) this.asked.has(zB) || (this.asked.add(zB), this.queue.push(zB));
        this.schedule()
      }
      cancel() {
        var BB;
        this.queue.length = 0, this.asked.clear(), this.gen++, null === (BB = this.cancelIdle) || void 0 === BB || BB.call(this), this.cancelIdle = null
      }
      schedule() {
        null === this.cancelIdle && this.queue.length > 0 && (this.cancelIdle = this.idle(this.onIdle))
      }
      load(BB) {
        const jB = this.sheet(BB, !1),
          zB = this.sheet(BB, !0),
          [QB, nB] = "unloaded" === jB.state() && "unloaded" !== zB.state() ? [zB, jB] : [jB, zB],
          dB = this.gen,
          IB = () => {
            try {
              dB === this.gen && "unloaded" === nB.state() && nB.load()
            } catch (BB) {
              this.onError(BB)
            }
          },
          NB = QB.state();
        return "unloaded" === NB ? (QB.once("load", IB), QB.load(), !0) : "unloaded" === nB.state() && ("loading" === NB ? (QB.once("load", IB), !1) : (nB.load(), !0))
      }
    }
    var qj = zB(40965);
    const fj = {
        coneInnerAngle: 360,
        coneOuterAngle: 360,
        coneOuterGain: 0,
        distanceModel: "inverse",
        maxDistance: 1e3,
        panningModel: "HRTF",
        rolloffFactor: 1
      },
      oj = Jj.e.Bk * Jj.e.playerEyeToHeightRatio,
      Hj = [0, 0, -1, 0, 1, 0],
      Dj = mj.indexOf("note");

    function Fj(BB) {
      return BB >= 0 ? Math.min(1, BB) : 0
    }

    function Yj(BB) {
      var jB;
      let zB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
      const QB = function(BB) {
        let jB = 0,
          zB = kj.length;
        for (; jB < zB;) {
          const QB = jB + zB >>> 1;
          kj[QB] < BB ? jB = QB + 1 : zB = QB
        }
        return jB
      }(BB);
      if ("" === BB || null === (jB = kj[QB]) || void 0 === jB || !jB.startsWith(BB)) return -1;
      if (kj[QB] === BB) return QB;
      let nB = QB + 1;
      for (; nB < kj.length && kj[nB].startsWith(BB);) nB++;
      return QB + Math.floor(zB() * (nB - QB))
    }
    class Vj {
      constructor(BB, jB, zB, QB, nB) {
        this.group = BB, this.loudness = jB, this.startMs = zB, this.howl = QB, this.host = nB, this.id = 0, this.direct = !1
      }
      getDurationMs() {
        const BB = this.host.alive(this.id);
        return BB ? 1e3 * this.howl.duration(this.id) / BB.rate : 0
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
    class hj {
      constructor(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          QB = arguments.length > 3 ? arguments[3] : void 0;
        this.createHowl = BB, this.listener = jB, this.now = zB, this.errors = 0, this.sheets = new Map, this.unloading = new Uint16Array(mj.length), this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader = void 0, this.voices = new Mj.b, this.failed = new Set, this.started = new Set, this.voiceHost = {
          alive: BB => this.aliveVoice(BB),
          started: BB => this.started.has(BB),
          drop: BB => {
            var jB;
            null === (jB = this.live.get(BB)) || void 0 === jB || jB.howl.stop(BB), this.forget(BB)
          }
        }, this.handlers = {
          playSound: (BB, jB, zB, QB, nB, dB, IB, NB, uB) => {
            if (QB >= kj.length) return;
            const UB = 0 !== (nB & JB.oe.Loop);
            nB & JB.oe.TwoD ? this.start(QB, !1, IB, dB, NB, UB) : this.startSpatial(QB, IB, dB, NB, UB, BB, jB, zB, uB, this.earDistSq(BB, jB, zB))
          },
          soundPos: (BB, jB, zB, QB) => {
            const nB = this.core.get(QB);
            var dB;
            void 0 !== nB && (null === (dB = this.live.get(nB)) || void 0 === dB || dB.howl.pos(zB, jB, BB, nB))
          },
          soundSet: (BB, jB, zB, QB) => {
            const nB = this.core.get(BB),
              dB = void 0 === nB ? void 0 : this.live.get(nB);
            void 0 !== nB && dB && (this.setRel(nB, jB), dB.rate = zB, dB.howl.rate(zB, nB), dB.spatial && dB.howl.pannerAttr({
              refDistance: QB
            }, nB))
          },
          soundFade: (BB, jB, zB, QB) => {
            const nB = this.core.get(BB);
            void 0 !== nB && this.fade(nB, jB, zB, 0 !== (QB & JB.ne.StopAfter))
          },
          soundStop: BB => {
            const jB = this.core.get(BB);
            var zB;
            void 0 !== jB && (null === (zB = this.live.get(jB)) || void 0 === zB || zB.howl.stop(jB), this.forget(jB))
          },
          soundReset: () => {
            this.stopCore()
          }
        }, this.loader = new ij(((BB, jB) => this.sheet(BB, jB)), (BB => {
          this.errors++, console.error("Audio preload failed", BB)
        }), QB)
      }
      prepare() {
        for (let BB = 0; BB < mj.length; BB++) this.prepareSheet(BB)
      }
      prepareSheet(BB) {
        this.sheet(BB, !1), this.sheet(BB, !0)
      }
      preload(BB) {
        this.loader.preload(BB)
      }
      cancelPreload() {
        this.loader.cancel()
      }
      freeSheetsAfterGame() {
        for (let BB = 0; BB < mj.length; BB++) {
          if (Sj.d.has(mj[BB])) continue;
          const jB = [];
          for (const QB of [!1, !0]) {
            const zB = Xj(BB, QB),
              nB = this.sheets.get(zB);
            void 0 !== nB && "loading" !== nB.state() && jB.push({
              key: zB,
              howl: nB
            })
          }
          if (!jB.some((BB => {
              let {
                howl: jB
              } = BB;
              return "loaded" === jB.state()
            }))) continue;
          this.unloading[BB] += jB.length;
          const zB = () => {
            this.unloading[BB]--, 0 === this.unloading[BB] && this.prepareSheet(BB)
          };
          for (const {
              key: BB,
              howl: QB
            }
            of jB) this.sheets.delete(BB), "loaded" === QB.state() ? (0, tj.c)(QB, zB) : (QB.unload(), zB())
        }
      }
      onAudioEvent(BB, jB, zB, QB) {
        if (BB < JB.q.PlaySound || BB > JB.q.SoundReset) return !1;
        try {
          return (0, JB.ye)(BB, jB, zB, QB, this.handlers)
        } catch (nB) {
          return this.errors++, console.error("Audio event failed", nB), !0
        }
      }
      applyListener(BB) {
        const jB = this.nextPose;
        for (let QB = 0; QB < 3; QB++) jB[2 - QB] = JB.y.listener(BB, 0, QB), jB[5 - QB] = JB.y.forward(BB, 0, QB), jB[8 - QB] = JB.y.up(BB, 0, QB);
        0 === jB[3] && 0 === jB[4] && 0 === jB[5] && jB.set(this.posed ? this.pose.subarray(3) : Hj, 3);
        for (let QB = 0; QB < 9; QB++)
          if (!Number.isFinite(jB[QB])) return;
        const zB = this.pose;
        if (this.posed) {
          let BB = !0;
          for (let QB = 0; QB < 9 && BB; QB++) BB = jB[QB] === zB[QB];
          if (BB) return
        }
        this.listener.apply(jB) && (zB.set(jB), this.posed = !0)
      }
      playGame(BB, jB, zB, QB, nB, dB, IB) {
        const NB = Yj(BB);
        if (NB < 0) return qj.e;
        if (!zB) {
          const {
            howl: BB,
            id: zB
          } = this.start(NB, !1, jB, 0, 1, IB);
          return this.gameSound(BB, zB, !1)
        }
        const uB = zB[0],
          UB = zB[1] + oj,
          aB = zB[2];
        if (!Number.isFinite(uB) || !Number.isFinite(UB) || !Number.isFinite(aB)) return qj.e;
        let pB;
        if (QB) {
          const BB = uB - QB[0],
            jB = UB - QB[1],
            zB = aB - QB[2];
          if (pB = BB * BB + jB * jB + zB * zB, pB > nB * nB) return qj.e
        } else pB = this.earDistSq(uB, UB, aB);
        const rB = this.startSpatial(NB, jB, 0, 1, IB, uB, UB, aB, dB, pB);
        return rB ? this.gameSound(rB.howl, rB.id, !0) : qj.e
      }
      setMaster(BB, jB) {
        this.level = Fj(BB);
        const zB = jB ? this.level : 0;
        if (zB !== this.master) {
          this.master = zB;
          for (const [BB, jB] of this.live) jB.fadeMs = 0, jB.gain = jB.rel * this.master, jB.howl.volume(jB.gain, BB)
        }
      }
      stopCore() {
        for (const jB of [...this.core.values()]) {
          var BB;
          null === (BB = this.live.get(jB)) || void 0 === BB || BB.howl.stop(jB)
        }
        this.core.clear()
      }
      stopAll() {
        this.cancelPreload();
        for (const [BB, jB] of [...this.live]) jB.howl.stop(BB), this.forget(BB);
        this.core.clear()
      }
      gameSound(BB, jB, zB) {
        const QB = {
          stop: () => (this.live.has(jB) && BB.stop(jB), QB),
          fade: (BB, zB, nB) => {
            var dB, IB;
            const NB = this.level > 0 ? zB / this.level : zB > 0 && null !== (dB = null === (IB = this.live.get(jB)) || void 0 === IB ? void 0 : IB.rel) && void 0 !== dB ? dB : 0;
            return this.fade(jB, NB, nB, !1), QB
          },
          rate: zB => {
            const nB = this.live.get(jB);
            return nB && (nB.rate = function(BB) {
              return BB > 0 && BB < 1 / 0 ? BB : 1
            }(zB), BB.rate(nB.rate, jB)), QB
          },
          getVolume: () => {
            var BB, zB;
            return (null !== (BB = null === (zB = this.live.get(jB)) || void 0 === zB ? void 0 : zB.rel) && void 0 !== BB ? BB : 0) * this.level
          },
          getRelativeVolume: () => {
            var BB, zB;
            return null !== (BB = null === (zB = this.live.get(jB)) || void 0 === zB ? void 0 : zB.rel) && void 0 !== BB ? BB : 0
          },
          setRelativeVolume: BB => (this.setRel(jB, BB), QB),
          setPannerAttr: nB => {
            if (zB && this.live.has(jB)) {
              const zB = {
                ...fj,
                refDistance: aj.k
              };
              for (const [BB, jB] of Object.entries(nB)) "number" !== typeof jB && "string" !== typeof jB || (zB[BB] = jB);
              BB.pannerAttr({
                coneOuterAngle: zB.coneOuterAngle
              }, jB), BB.pannerAttr(zB, jB)
            }
            return QB
          },
          setPosition: nB => (zB && this.live.has(jB) && Number.isFinite(nB[0] + nB[1] + nB[2]) && BB.pos(nB[2], nB[1], nB[0], jB), QB)
        };
        return QB
      }
      startSpatial(BB, jB, zB, QB, nB, dB, IB, NB, uB, UB) {
        const aB = this.sheet(Gj[BB], !0);
        let pB = null;
        if (!nB) {
          if (this.failed.has(aB)) return null;
          const zB = Gj[BB] === Dj ? null : (0, Mj.g)(kj[BB]),
            QB = (0, Mj.f)(Fj(jB), Math.sqrt(UB), uB);
          if (pB = new Vj(zB, QB, this.now(), aB, this.voiceHost), !this.voices.admit(pB)) return null
        }
        const rB = this.start(BB, !0, jB, zB, QB, nB);
        return pB && (pB.id = rB.id, pB.direct = "loaded" === aB.state() && !aB._playLock), aB.pannerAttr({
          coneOuterAngle: 360
        }, rB.id), aB.pannerAttr({
          ...fj,
          refDistance: uB
        }, rB.id), aB.pos(NB, IB, dB, rB.id), rB
      }
      aliveVoice(BB) {
        const jB = this.live.get(BB);
        if (!jB) return;
        const zB = jB.howl._soundById(BB);
        if (zB && !zB._ended) return jB;
        this.forget(BB)
      }
      earDistSq(BB, jB, zB) {
        if (!this.posed) return 0;
        const QB = BB - this.pose[2],
          nB = jB - this.pose[1],
          dB = zB - this.pose[0];
        return QB * QB + nB * nB + dB * dB
      }
      start(BB, jB, zB, QB, nB, dB) {
        const IB = Fj(zB),
          NB = this.sheet(Gj[BB], jB);
        "unloaded" === NB.state() && NB.load();
        const uB = NB.play(kj[BB]),
          UB = IB * this.master;
        return NB.volume(UB, uB), this.live.set(uB, {
          howl: NB,
          rel: IB,
          gain: UB,
          fadeFrom: UB,
          fadeAt: 0,
          fadeMs: 0,
          rate: nB,
          handle: QB,
          spatial: jB,
          stopTimer: void 0
        }), 0 !== QB && this.core.set(QB, uB), 1 !== nB && NB.rate(nB, uB), dB && NB.loop(!0, uB), {
          howl: NB,
          id: uB
        }
      }
      sheet(BB, jB) {
        const zB = Xj(BB, jB);
        let QB = this.sheets.get(zB);
        if (!QB) {
          const nB = this.createHowl(mj[BB], jB);
          nB.on("end", (BB => {
            nB.loop(BB) || this.forget(BB)
          })), nB.on("stop", (BB => {
            this.forget(BB)
          })), nB.on("play", (BB => {
            this.live.has(BB) && this.started.add(BB)
          })), nB.on("loaderror", (BB => {
            if ("loaded" !== nB.state()) {
              this.failed.add(nB);
              for (const [BB, jB] of this.live) jB.howl === nB && this.forget(BB)
            } else "number" === typeof BB && this.forget(BB)
          })), this.sheets.set(zB, nB), QB = nB
        }
        return QB
      }
      setRel(BB, jB) {
        const zB = this.live.get(BB);
        zB && (Zj(zB), zB.fadeMs = 0, zB.rel = Fj(jB), zB.gain = zB.rel * this.master, zB.howl.volume(zB.gain, BB))
      }
      fade(BB, jB, zB, QB) {
        const nB = this.live.get(BB);
        if (!nB) return;
        Zj(nB);
        const {
          howl: dB
        } = nB, IB = this.gainNow(nB);
        nB.rel = Fj(jB), nB.gain = nB.rel * this.master;
        const NB = zB > 0 ? Math.min(zB, 65535) : 0,
          uB = 0 === NB || IB === nB.gain;
        nB.fadeMs = uB ? 0 : NB, uB ? dB.volume(nB.gain, BB) : (nB.fadeFrom = IB, nB.fadeAt = this.now(), dB.fade(IB, nB.gain, NB, BB)), QB && (uB ? dB.stop(BB) : nB.stopTimer = setTimeout((() => {
          nB.stopTimer = void 0, dB.stop(BB)
        }), NB))
      }
      gainNow(BB) {
        if (BB.fadeMs > 0) {
          const jB = (this.now() - BB.fadeAt) / BB.fadeMs;
          if (jB < 1) return BB.fadeFrom + (BB.gain - BB.fadeFrom) * Math.max(0, jB);
          BB.fadeMs = 0
        }
        return BB.gain
      }
      forget(BB) {
        this.started.delete(BB);
        const jB = this.live.get(BB);
        jB && (Zj(jB), this.live.delete(BB), 0 !== jB.handle && this.core.get(jB.handle) === BB && this.core.delete(jB.handle))
      }
    }

    function Xj(BB, jB) {
      return 2 * BB + (jB ? 1 : 0)
    }

    function Zj(BB) {
      void 0 !== BB.stopTimer && (clearTimeout(BB.stopTimer), BB.stopTimer = void 0)
    }
    var Aj = zB(40705),
      Tj = zB(39215);
    class Pj {
      constructor(BB, jB, zB, QB) {
        this.key = BB, this.model = jB, this.host = QB, this.Ep = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.ynB = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, this.tailView = void 0, this.tailCut = new Uint8Array(0), this.made = !1, this.HJ = !1, this.Ep = Math.max(1, Math.ceil(zB)), this.records = new Float32Array(this.Ep * uj.c), this.isDirty = new Uint8Array(this.Ep), this.tail = new Uint8Array(this.Ep * JB.Gc.Bytes), this.tailView = new DataView(this.tail.buffer), this.make(QB.cmd())
      }
      setOrigin(BB, jB, zB) {
        this.origin[0] = BB, this.origin[1] = jB, this.origin[2] = zB
      }
      markDirty(BB) {
        !this.HJ && BB >= 0 && BB < this.Ep && BB < JB.Gc.Max && this.RJ(BB, BB + 1)
      }
      commit(BB) {
        if (this.HJ) return;
        (BB = Math.min(Math.max(Math.floor(BB), 0), this.Ep, JB.Gc.Max)) > this.count && this.RJ(this.count, BB), this.count = BB;
        const {
          origin: jB,
          sentOrigin: zB,
          dirtyList: QB
        } = this, nB = this.ynB !== BB, dB = zB[0] !== jB[0] || zB[1] !== jB[1] || zB[2] !== jB[2];
        if (0 === QB.length && !nB && !dB) return;
        const IB = this.host.cmd();
        if (!IB || !this.make(IB)) return;
        const NB = QB.length,
          {
            records: uB,
            tailView: UB
          } = this;
        for (let aB = 0; aB < NB; aB++) {
          const BB = QB[aB],
            jB = BB * uj.c,
            zB = aB * JB.Gc.Bytes,
            nB = 0 !== uB[jB + uj.f] ? JB.Gc.Hidden : 0;
          UB.setUint32(zB, (BB | nB) >>> 0, !0), UB.setFloat32(zB + 4, uB[jB], !0), UB.setFloat32(zB + 8, uB[jB + 1], !0), UB.setFloat32(zB + 12, uB[jB + 2], !0)
        }
        if ((0, JB._e)(IB, 0, this.key, BB, jB, NB, this.tailOf(NB))) {
          for (let BB = 0; BB < NB; BB++) this.isDirty[QB[BB]] = 0;
          QB.length = 0, this.ynB = BB, zB[0] = jB[0], zB[1] = jB[1], zB[2] = jB[2]
        }
      }
      grow(BB) {
        (BB = Math.ceil(BB)) <= this.Ep || this.HJ || (this.records = (0, Tj.e)(this.records, new Float32Array(BB * uj.c)), this.isDirty = (0, Tj.e)(this.isDirty, new Uint8Array(BB)), this.tail = new Uint8Array(BB * JB.Gc.Bytes), this.tailView = new DataView(this.tail.buffer), this.Ep = BB)
      }
      dispose() {
        this.HJ || (this.HJ = !0, this.host.HJ(this, this.made ? this.key : null))
      }
      make(BB) {
        if (!this.made && BB) {
          const {
            item: jB,
            scale: zB,
            yaw: QB
          } = this.model;
          this.made = (0, JB.ff)(BB, 0, this.key, jB, zB, QB)
        }
        return this.made
      }
      tailOf(BB) {
        const jB = BB * JB.Gc.Bytes;
        return this.tailCut.buffer === this.tail.buffer && this.tailCut.length === jB || (this.tailCut = this.tail.subarray(0, jB)), this.tailCut
      }
      RJ(BB, jB) {
        const {
          dirtyList: zB,
          isDirty: QB
        } = this;
        for (let nB = BB; nB < jB; nB++) 0 === QB[nB] && (QB[nB] = 1, zB.push(nB))
      }
    }
    var Wj = zB(652);
    class ej {
      constructor(BB) {
        this.keys = 0, this.live = new Set, this.owing = new Set, this.host = void 0, this.host = {
          cmd: BB,
          owes: BB => {
            this.owing.add(BB)
          },
          settled: (BB, jB) => {
            this.owing.delete(BB), jB && this.live.delete(BB)
          }
        }
      }
      create(BB, jB) {
        if (zB = BB, !Wj.p.includes(zB)) return null;
        var zB;
        const QB = new lj(++this.keys, aB.i.indexOf(BB), jB, this.host);
        return this.live.add(QB), QB
      }
      disposeAll() {
        for (const BB of [...this.live]) BB.dispose()
      }
      flush() {
        if (0 === this.owing.size) return;
        const BB = this.host.cmd();
        for (const jB of this.owing)
          if (!jB.sync(BB)) return
      }
    }
    class lj {
      constructor(BB, jB, zB, QB) {
        this.key = BB, this.lifeform = jB, this.scale = zB, this.host = QB, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.owed = 1, this.HJ = !1, this.sync()
      }
      setPose(BB, jB) {
        this.HJ || (this.feet[0] = BB[0], this.feet[1] = BB[1], this.feet[2] = BB[2], this.yaw = jB, this.owed |= 2, this.sync())
      }
      setVisible(BB) {
        this.HJ || BB === this.visible || (this.visible = BB, this.owed |= 4, this.sync())
      }
      dispose() {
        this.HJ || (this.HJ = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
      }
      sync() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.host.cmd();
        return this.write(BB) ? (this.host.settled(this, this.HJ), !0) : (this.host.owes(this), !1)
      }
      write(BB) {
        if (!BB) return this.owed = 0, !0;
        if (1 & this.owed) {
          if (!(0, JB.mf)(BB, 0, this.key, this.lifeform, this.scale)) return !1;
          this.owed &= -2
        }
        const jB = (2 & this.owed ? JB.dd.Pose : 0) | (4 & this.owed ? JB.dd.Visible : 0);
        if (0 !== jB) {
          if (!(0, JB.if)(BB, 0, this.key, jB, this.visible ? 1 : 0, this.feet, this.yaw)) return !1;
          this.owed &= -7
        }
        if (8 & this.owed) {
          if (!(0, JB.hf)(BB, 0, this.key)) return !1;
          this.owed = 0
        }
        return !0
      }
    }
    var wj = zB(41078);

    function xj(BB, jB, zB, QB) {
      return (0, wj.c)(), (0, JB.eg)(BB, jB, zB, QB)
    }
    var Kj = zB(39222),
      Cj = zB(40697);
    const cj = [0, 0, 0],
      bj = [0, 0, 0],
      vj = [0, 0, 0],
      Rj = [0, 0, 0],
      Oj = {
        origin: [0, 0, 0],
        direction: [0, 0, 1]
      },
      Bz = [0, 0, 0],
      jz = [0, 0],
      zz = [1, 1, 1],
      Qz = 1 / 3;
    const nz = Uj.d;

    function dz(BB) {
      const jB = Uj.b[BB],
        zB = jB && Uj.d[jB.mainMultiblock];
      return zB && {
        main: zB,
        x: jB.compX,
        y: jB.compY,
        z: jB.compZ
      }
    }

    function Iz(BB) {
      if (null === BB || void 0 === BB) return JB.kd;
      const jB = +BB;
      return Number.isInteger(jB) && jB >= -2147483648 && jB <= 2147483647 && String(jB) === String(BB) ? jB : JB.kd
    }

    function Nz(BB, jB, zB) {
      return (0, JB.lg)(BB, 0, jB, null !== zB && void 0 !== zB ? zB : Number.NaN)
    }
    class uz {
      constructor(BB) {
        this.deps = BB, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new Kj.d((() => this.tables.getClientOption("forcedCameraDirectionTransitionMs")), (BB => {
          var jB, zB;
          null === (jB = (zB = this.deps).setLocalOptions) || void 0 === jB || jB.call(zB, BB)
        })), this.mobModels = new ej((() => this.deps.cmd())), this.owedFrees = [], this.pendingStyle = void 0, this.pendingFar = void 0, this.farSet = !1, this.routeMesh = 0, this.routeOffset = 0, this.routeLook = "", this.routeSlide = {
          uvOffset: [0, 0]
        }, this.poolHost = {
          cmd: () => this.deps.cmd(),
          HJ: (BB, jB) => {
            this.livePools.delete(BB), null !== jB && (this.owedFrees.push(jB), this.flushOwed())
          }
        }, this.api = BB.api, this.live = BB.live, this.chunks = BB.chunks, this.items = BB.items, this.tables = BB.tables
      }
      isLocal(BB) {
        return null !== BB && void 0 !== BB && +BB === this.api.localId
      }
      assertLocal(BB, jB) {
        if (!this.isLocal(BB)) throw new Error(`Attempted to ${jB} for a player that is not the local player`)
      }
      iG(BB) {
        const jB = this.api.iG(BB);
        if (!jB) throw new Error(`Entity ${BB} has no replicated position`);
        return jB
      }
      checkValid(BB) {
        return !!this.deps.isSessionLive() && (null === BB || void 0 === BB || this.api.checkValid(BB))
      }
      isAlive(BB) {
        return !1 !== this.api.isAlive(BB)
      }
      getItemStat(BB, jB, zB) {
        return this.isLocal(BB) || null !== BB && "Player" === this.api.getEntityType(BB) ? this.tables.getItemStat(jB, zB) : this.tables.getDefaultItemStat(jB, zB)
      }
      getClientOption(BB, jB) {
        return this.assertLocal(BB, "get a client option"), this.tables.getClientOption(jB)
      }
      openShop(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zB = arguments.length > 2 ? arguments[2] : void 0;
        this.assertLocal(BB, "open shop"), IB.n.Ly("showShopFromServer", {
          toggle: jB,
          uB: zB
        }, !0)
      }
      sendMessage(BB, jB, zB) {
        this.assertLocal(BB, "send a message");
        const QB = "string" === typeof jB ? [{
          str: jB,
          style: zB
        }] : jB;
        IB.n.Ly("chat", {
          content: QB
        }, !0)
      }
      getEntityType(BB) {
        return this.api.getEntityType(BB)
      }
      getEntityName(BB) {
        const jB = Iz(BB);
        return jB === JB.kd ? void 0 : (0, Aj.g)(this.api, jB)
      }
      hasEffect(BB, jB) {
        const zB = Iz(BB);
        return zB !== JB.kd && (0, Aj.f)(this.api, zB, jB)
      }
      getMetaInfo(BB) {
        return this.tables.getMetaInfo(BB)
      }
      getPlayerDbId(BB) {
        return this.assertLocal(BB, "get a DB ID"), this.deps.playerDbId()
      }
      getBlockData(BB, jB, zB) {
        if (!this.chunks.dataCleared(BB, jB, zB)) return (0, Aj.c)(this.api, BB, jB, zB)
      }
      eD(BB, jB, zB, QB) {
        this.setBlockId(BB, jB, zB, this.tables.getItemId(QB))
      }
      setOtherEntitySetting(BB, jB, zB, QB) {
        if (!this.isLocal(BB)) throw new Error("Attempted to set an other-entity setting for a player that is not the local player");
        if (!Object.hasOwn(JB.td, zB)) throw new Error(`Unknown other-entity setting ${zB}`);
        const nB = JB.td[zB],
          dB = Iz(jB);
        if (dB === JB.kd || !this.deps.beforeWrite()) return;
        const IB = (0, XB.d)(QB);
        if (IB.length > 16384) throw new Error(`The other-entity setting ${zB}'s value is over 16384 bytes`);
        const NB = this.api.memoryView(Uint8Array, this.api.scratch(), IB.length, "set_other_entity_setting's value");
        NB && (NB.set(IB), this.api.queries.setOtherEntitySetting(dB, nB, IB.length))
      }
      getPositionView(BB) {
        return this.live.position(+BB)
      }
      readDrawnPosition(BB, jB) {
        return this.api.readDrawnPosition(Iz(BB), jB)
      }
      getDrawnHeading(BB) {
        const jB = Iz(BB),
          zB = (jB === JB.kd ? 0 : this.api.queries.directorEntity(jB)) >= JB.zb.BYTES ? this.api.memoryData(this.api.scratch(), JB.zb.BYTES, 8, "getDrawnHeading's DirectorEntity") : null;
        if (!zB) return null;
        if (1 === JB.zb.headingIsDrawn(zB, 0)) return JB.zb.heading(zB, 0);
        const QB = this.api.apiView;
        return this.isLocal(BB) && 0 === (JB.w.playerFlags(QB, 0) & JB.Sd.FreeCam) ? JB.w.heading(QB, 0) : null
      }
      getLocalPlayerMovement() {
        const BB = JB.w.playerFlags(this.api.apiView, 0);
        return 0 === (BB & JB.Sd.Replay) && this.api.readDrawnPosition(this.api.localId, vj) ? {
          onGround: 0 !== (BB & JB.Sd.OnGround),
          jumpHeld: 0 !== (BB & JB.Sd.JumpHeld)
        } : null
      }
      ZjB(BB) {
        return this.isLocal(BB) ? this.items.DN() : null
      }
      getInventoryItems() {
        return this.items.playerItems()
      }
      getHeldGunInaccuracy() {
        var BB, jB;
        return "Gun" === (null === (BB = this.aliveHeld()) || void 0 === BB || null === (jB = BB.typeObj) || void 0 === jB ? void 0 : jB.type) ? this.items.inaccuracy : null
      }
      aliveHeld() {
        return !1 === this.api.isAlive(this.api.localId) ? null : this.items.DN()
      }
      isCrosshairShown() {
        var BB, jB;
        const zB = (0, pj.e)(QB.c.get("crosshairGameView"), QB.c.get("crosshairShownOverride"));
        if (null !== zB) return zB;
        const nB = null === (BB = this.aliveHeld()) || void 0 === BB ? void 0 : BB.typeObj,
          dB = "Gun" === (null === nB || void 0 === nB ? void 0 : nB.type),
          IB = dB || !0 === (null === nB || void 0 === nB ? void 0 : nB.showsAimingUi),
          NB = 0 === (JB.w.playerFlags(this.api.apiView, 0) & JB.Sd.ZoomFirstPerson),
          uB = null !== (jB = this.tables.getClientOption("gunshotOrigin")) && void 0 !== jB ? jB : null;
        return (0, pj.l)({
          gun: dB,
          aimable: IB
        }, NB, (0, rj.b)(), uB)
      }
      setCrosshairShown(BB) {
        QB.c.set({
          crosshairShownOverride: BB
        })
      }
      getInventoryFreeSlotCount(BB) {
        return this.isLocal(BB) ? this.items.freeSlots() : null
      }
      getSelectedInventorySlotI(BB) {
        return this.isLocal(BB) ? this.items.selectedSlot : null
      }
      getItemSlot(BB, jB) {
        return this.isLocal(BB) ? this.items.slot(jB) : null
      }
      swapInventorySlots(BB, jB) {
        return this.items.swap(BB, jB)
      }
      isPlayerCrouching(BB) {
        if (this.isLocal(BB)) return 0 !== (JB.w.playerFlags(this.api.apiView, 0) & JB.Sd.Crouching);
        const jB = Iz(BB);
        return jB !== JB.kd && 1 === this.api.queries.entityCrouching(jB)
      }
      getMiningBlock() {
        return this.live.breakingPosition()
      }
      isMining() {
        return 0 !== (JB.w.playerFlags(this.api.apiView, 0) & JB.Sd.AttemptingBreak)
      }
      getTargetedBlock() {
        return this.live.mBB()
      }
      getActionRay() {
        const BB = this.api.apiView;
        for (let jB = 0; jB < 3; jB++) Oj.origin[jB] = JB.w.YBB(BB, 0, jB), Oj.direction[jB] = JB.w.actionDir(BB, 0, jB);
        return Oj
      }
      canModifyBlockAt(BB, jB, zB) {
        return 1 === this.api.queries.canModify(BB, jB, zB)
      }
      isSolidToPlayerBlockId(BB) {
        return this.tables.isSolidBlockId(BB) && !this.chunks.isWalkThrough(BB)
      }
      blockNameToBlockId(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.tables.blockNameToBlockId(BB, jB)
      }
      blockIdToBlockName(BB) {
        return this.tables.nameOfId(BB)
      }
      djB(BB, jB, zB, QB, nB) {
        return 1 === this.api.queries.terrainBlocked(QB, BB, jB, zB, Iz(null !== nB && void 0 !== nB ? nB : null))
      }
      getChunkVersion(BB, jB, zB) {
        return this.chunks.version(BB, jB, zB)
      }
      scanBlocks(BB, jB, zB, QB, nB, dB, IB, NB) {
        return this.chunks.scan(BB, jB, zB, QB, nB, dB, IB, NB)
      }
      isBlockInLoadedChunk(BB, jB, zB) {
        return this.chunks.isLoaded(BB, jB, zB)
      }
      getBlockId(BB, jB, zB) {
        return this.chunks.dN(BB, jB, zB)
      }
      playSound(BB, jB, zB, QB, nB) {
        let dB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (!this.isLocal(BB)) return null;
        const IB = this.playSoundFrom(jB, zB, nB, dB);
        return 1 === QB ? IB : IB.rate(QB)
      }
      preloadSounds(BB) {
        var jB, zB;
        null === (jB = (zB = this.deps).preloadSounds) || void 0 === jB || jB.call(zB, BB)
      }
      playSoundFrom(BB, jB, zB, QB) {
        var nB, dB;
        const IB = this.deps.playSound;
        if (!IB) return qj.e;
        const NB = null === zB || void 0 === zB ? void 0 : zB.nB,
          uB = null !== (nB = null === zB || void 0 === zB ? void 0 : zB.maxHearDist) && void 0 !== nB ? nB : aj.g,
          UB = null !== (dB = null === zB || void 0 === zB ? void 0 : zB.refDistance) && void 0 !== dB ? dB : aj.k;
        let aB = null;
        if (Array.isArray(NB)) cj[0] = NB[0], cj[1] = NB[1], cj[2] = NB[2], aB = cj;
        else if (void 0 !== NB && null !== NB) {
          const BB = Iz(NB);
          if (!this.api.isLocal(BB)) {
            if (!this.api.readPosition(BB, cj)) return qj.e;
            aB = cj
          }
        }
        return IB(BB, jB, aB, aB && this.ear(), uB, UB, QB)
      }
      ear() {
        if (this.api.readPosition(this.api.localId, bj)) bj[1] += oj;
        else {
          const BB = this.api.apiView;
          if (0 === JB.w.viewProj(BB, 0, 3) && 0 === JB.w.viewProj(BB, 0, 7) && 0 === JB.w.viewProj(BB, 0, 11)) return null;
          for (let jB = 0; jB < 3; jB++) bj[jB] = JB.w.eye(BB, 0, jB)
        }
        return Number.isFinite(bj[0] + bj[1] + bj[2]) ? bj : null
      }
      setBlockId(BB, jB, zB, QB) {
        if (!Number.isInteger(QB) || QB < 0 || QB > 65535) throw new Error(`Invalid block id ${QB}`);
        if (!this.deps.beforeWrite() || !this.chunks.isLoaded(BB, jB, zB)) return;
        const nB = Math.floor(BB),
          dB = Math.floor(jB),
          IB = Math.floor(zB),
          NB = this.predictedCells(nB, dB, IB, QB);
        if (1 === this.api.queries.eD(nB, dB, IB, QB)) {
          for (let BB = 0; BB < NB.length; BB += 5) this.chunks.setOverlay(NB[BB], NB[BB + 1], NB[BB + 2], NB[BB + 3], 1 === NB[BB + 4]);
          this.live.refreshTarget()
        }
      }
      particlesEnabled() {
        return this.deps.particles.enabled()
      }
      createParticles(BB, jB) {
        return this.deps.particles.create(BB, jB)
      }
      playParticleEffect(BB) {
        this.deps.particles.playEffect(BB)
      }
      burstParticlePreset(BB, jB, zB) {
        this.deps.particles.burstPreset(BB, jB, zB)
      }
      createGameMesh(BB, jB, zB) {
        const QB = ++this.meshKeys,
          nB = this.deps.cmd();
        if (!nB) return QB;
        const {
          look: dB,
          colour: IB
        } = function(BB) {
          switch (BB.kind) {
            case void 0:
            case "flatEmissive":
              return BB.onTop ? {
                look: JB.fc.FlatOnTop,
                colour: [...BB.rgb, BB.alpha]
              } : BB.opaque ? {
                look: JB.fc.FlatOpaque,
                colour: [...BB.rgb, 1]
              } : {
                look: JB.fc.Flat,
                colour: [...BB.rgb, BB.alpha]
              };
            case "chevronPath":
              return {
                look: JB.fc.Chevrons, colour: [...(0, sj.c)(BB.colour), BB.alpha]
              };
            case "furnaceFire":
              return {
                look: JB.fc.FurnaceFire, colour: [1, 1, 1, 1]
              }
          }
        }(jB), NB = Math.floor(BB.positions.length / 3), uB = function(BB, jB) {
          const zB = Math.floor(BB.positions.length / 3),
            QB = BB.indices.length,
            nB = zB * (jB ? 5 : 3),
            dB = new Uint8Array(4 * (nB + QB)),
            IB = new DataView(dB.buffer);
          for (let UB = 0; UB < 3 * zB; UB++) IB.setFloat32(4 * UB, BB.positions[UB], !0);
          if (jB) {
            var NB;
            const jB = null !== (NB = BB.uvs) && void 0 !== NB ? NB : [];
            for (let BB = 0; BB < 2 * zB; BB++) {
              var uB;
              IB.setFloat32(4 * (3 * zB + BB), null !== (uB = jB[BB]) && void 0 !== uB ? uB : 0, !0)
            }
          }
          for (let UB = 0; UB < QB; UB++) IB.setUint32(4 * (nB + UB), BB.indices[UB], !0);
          return dB
        }(BB, (0, uj.i)(jB));
        return (0, JB.Te)(nB, 0, QB, dB, IB, zB, NB, BB.indices.length, uB) && this.liveMeshes.add(QB), QB
      }
      setGameMesh(BB, jB) {
        var zB;
        const QB = this.deps.cmd();
        if (!QB) return;
        let nB = 0;
        jB.anchor && (nB |= JB.jc.Anchor, Bz[0] = jB.anchor[0], Bz[1] = jB.anchor[1], Bz[2] = jB.anchor[2]), void 0 !== jB.visible && (nB |= JB.jc.Visible), jB.uvOffset && (nB |= JB.jc.UvOffset, jz[0] = jB.uvOffset[0], jz[1] = jB.uvOffset[1]);
        const dB = null !== (zB = jB.visibility) && void 0 !== zB ? zB : 1;
        void 0 !== jB.visibility && (nB |= JB.jc.Visibility), jB.scale && (nB |= JB.jc.Scale, zz[0] = jB.scale[0], zz[1] = jB.scale[1], zz[2] = jB.scale[2]), 0 !== nB && (0, JB.We)(QB, 0, BB, nB, jB.visible ? 1 : 0, Bz, jz, dB, zz)
      }
      disposeGameMesh(BB) {
        const jB = this.deps.cmd();
        jB && !(0, JB.Ve)(jB, 0, BB) || this.liveMeshes.delete(BB)
      }
      hasPackModel(BB) {
        var jB, zB, QB;
        return null !== (jB = null === (zB = (QB = this.deps).hasPackModel) || void 0 === zB ? void 0 : zB.call(QB, BB)) && void 0 !== jB && jB
      }
      disposeGameOutput() {
        const BB = BB => {
          try {
            BB()
          } catch (jB) {
            console.error("Error freeing client game output", jB)
          }
        };
        for (const jB of [...this.liveMeshes]) BB((() => {
          this.disposeGameMesh(jB)
        }));
        for (const jB of [...this.livePools]) BB((() => {
          jB.dispose()
        }));
        BB((() => {
          this.mobModels.disposeAll()
        })), BB((() => {
          this.setGroundArrowStyle(null)
        })), BB((() => {
          this.setRouteChevrons(null), this.routeOffset = 0, this.routeLook = ""
        })), BB((() => {
          this.setCrosshairShown(null)
        })), BB((() => {
          this.cameraTurn.dispose()
        })), BB((() => {
          this.farSet && (this.farSet = !1, this.setCameraFar(null))
        }))
      }
      createInstancePool(BB, jB) {
        const zB = this.tables.idOf(BB.item);
        if (void 0 === zB) return null;
        const QB = new Pj(++this.poolKeys, {
          item: zB,
          scale: BB.scale,
          yaw: BB.yaw
        }, jB, this.poolHost);
        return this.livePools.add(QB), QB
      }
      createMobModel(BB, jB) {
        return this.mobModels.create(BB, jB)
      }
      setRouteChevrons(BB) {
        if (0 !== this.routeMesh && (this.disposeGameMesh(this.routeMesh), this.routeMesh = 0), !BB || 0 === BB.cells.length) return;
        const jB = `${BB.colour} ${BB.alpha}`;
        jB !== this.routeLook && (this.routeLook = jB, this.routeOffset = 0), this.routeMesh = this.createGameMesh(function(BB) {
          const [jB, zB, QB] = BB[0].pos, nB = [], dB = [], IB = [];
          return BB.forEach(((BB, NB) => {
            let {
              pos: uB,
              way: [UB, aB]
            } = BB;
            const pB = uB[0] - jB + .5,
              rB = uB[1] - zB + .04,
              sB = uB[2] - QB + .5,
              [JB, mB] = [.35 * -aB, .35 * UB],
              [yB, kB] = [NB * Qz, (NB + 1) * Qz],
              GB = nB.length / 3;
            nB.push(pB - .5 * UB + JB, rB, sB - .5 * aB + mB), nB.push(pB - .5 * UB - JB, rB, sB - .5 * aB - mB), nB.push(pB + .5 * UB + JB, rB, sB + .5 * aB + mB), nB.push(pB + .5 * UB - JB, rB, sB + .5 * aB - mB), dB.push(0, yB, 1, yB, 0, kB, 1, kB), IB.push(GB, GB + 1, GB + 2, GB + 1, GB + 3, GB + 2)
          })), {
            positions: nB,
            uvs: dB,
            indices: IB
          }
        }(BB.cells), {
          kind: "chevronPath",
          colour: BB.colour,
          alpha: BB.alpha
        }, BB.cells[0].pos), this.setRouteSlide()
      }
      slideRoute(BB) {
        0 !== this.routeMesh && (this.routeOffset = (this.routeOffset + Math.min(BB, 250) / 1e3 * 1.2 * Qz) % 1, this.setRouteSlide())
      }
      setRouteSlide() {
        this.routeSlide.uvOffset[1] = -this.routeOffset, this.setGameMesh(this.routeMesh, this.routeSlide)
      }
      setGroundArrowStyle(BB) {
        this.pendingStyle = BB, this.flushOwed()
      }
      flushOwed() {
        this.mobModels.flush();
        const BB = this.owedFrees;
        if (0 === BB.length && void 0 === this.pendingStyle && void 0 === this.pendingFar) return;
        const jB = this.deps.cmd();
        if (!jB) return BB.length = 0, void(this.pendingFar = void 0);
        let zB = 0;
        for (; zB < BB.length && (0, JB.bf)(jB, 0, BB[zB]);) zB++;
        BB.splice(0, zB);
        const QB = this.pendingStyle;
        if (void 0 !== QB) {
          (QB ? (0, JB.og)(jB, 0, QB.width, QB.alpha, 1, QB.endAtSolidFace ? 1 : 0) : (0, JB.og)(jB, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
        }
        const nB = this.pendingFar;
        void 0 !== nB && (0, JB.hg)(jB, 0, null !== nB && void 0 !== nB ? nB : 0, null === nB ? 1 : 0) && (this.pendingFar = void 0)
      }
      setNametagOffset(BB, jB) {
        const zB = this.deps.cmd(),
          QB = Iz(BB);
        zB && QB !== JB.kd && (0, JB.xg)(zB, 0, QB, jB)
      }
      setFacingTolerance(BB, jB) {
        const zB = this.deps.cmd(),
          QB = Iz(BB);
        zB && QB !== JB.kd && Nz(zB, QB, jB)
      }
      forEachEntity(BB) {
        const {
          api: jB
        } = this;
        for (let zB = 0; zB < jB.idStr.length; zB++) {
          const QB = jB.idStr[zB];
          null === QB || tB(jB.kinds[zB]) || BB(QB)
        }
      }
      getEntityInfo(BB) {
        return this.deps.entityInfo.get(BB)
      }
      isEntityInteractable(BB) {
        const jB = Iz(BB);
        return jB !== JB.kd && 1 === this.api.queries.entityInteractable(jB)
      }
      isLocalPlayer(BB) {
        return this.isLocal(BB)
      }
      getLineOwner(BB) {
        var jB;
        const zB = null === (jB = this.deps.entityInfo.get(BB)) || void 0 === jB ? void 0 : jB.meshOpts;
        if (!zB) return null;
        try {
          const {
            lineToEId: BB
          } = JSON.parse(zB);
          return null !== BB && void 0 !== BB ? BB : null
        } catch {
          return null
        }
      }
      getCameraPosition() {
        const BB = this.api.apiView;
        return Rj[0] = JB.w.eye(BB, 0, 0), Rj[1] = JB.w.eye(BB, 0, 1), Rj[2] = JB.w.eye(BB, 0, 2), Rj
      }
      getCameraFar() {
        return JB.w.cameraFar(this.api.apiView, 0)
      }
      setCameraFar(BB) {
        null !== BB && (this.farSet = !0), this.pendingFar = BB, this.flushOwed()
      }
      turnCamera(BB, jB) {
        this.cameraTurn.turn(BB, jB)
      }
      clearPickupDelay(BB) {
        const jB = this.deps.cmd(),
          zB = Iz(BB);
        jB && zB !== JB.kd && (0, JB.Ee)(jB, 0, zB)
      }
      sendChat(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const zB = this.deps.sendCmd();
        zB && xj(zB, 0, Cj.e.Chat, (0, XB.d)((0, Cj.l)({
          ha: BB,
          Xa: jB
        })))
      }
      sendCommand(BB) {
        BB.length <= 119 && this.sendChat(`/${BB}`)
      }
      predictedCells(BB, jB, zB, QB) {
        const nB = this.chunks,
          dB = [],
          IB = (BB, jB, zB, QB, nB) => {
            dB.push(BB, jB, zB, QB, this.tables.blockRootId(nB) === this.tables.blockRootId(QB) ? 0 : 1)
          },
          NB = nB.dN(BB, jB, zB),
          uB = dz(NB);
        if (uB) {
          const [QB, dB, UB] = [BB - uB.x, jB - uB.y, zB - uB.z], aB = nz[nB.dN(QB, dB, UB)], pB = null === aB || void 0 === aB ? void 0 : aB.positions.some((BB => BB.id === NB && BB.x === uB.x && BB.y === uB.y && BB.z === uB.z));
          for (const BB of (pB && aB ? aB : uB.main).positions) nB.dN(QB + BB.x, dB + BB.y, UB + BB.z) === BB.id && IB(QB + BB.x, dB + BB.y, UB + BB.z, 0, BB.id)
        }
        const UB = dz(QB);
        if (UB)
          for (const pB of UB.main.positions) {
            const [QB, dB, NB] = [BB + pB.x - UB.x, jB + pB.y - UB.y, zB + pB.z - UB.z];
            IB(QB, dB, NB, pB.id, nB.dN(QB, dB, NB))
          } else IB(BB, jB, zB, QB, NB);
        const aB = this.tables;
        if ((0 !== aB.attachedTopOf(NB) || 0 !== aB.attachedTopOf(QB)) && nB.isLoaded(BB, jB + 1, zB)) {
          let uB = nB.dN(BB, jB + 1, zB);
          for (let QB = 0; QB < dB.length; QB += 5) dB[QB] === BB && dB[QB + 1] === jB + 1 && dB[QB + 2] === zB && (uB = dB[QB + 3]);
          const UB = this.attachedTopWrite(NB, QB, uB);
          void 0 !== UB && IB(BB, jB + 1, zB, UB, uB)
        }
        return dB
      }
      attachedTopWrite(BB, jB, zB) {
        const QB = this.tables,
          nB = QB.attachedTopOf(BB),
          dB = QB.attachedTopOf(jB),
          IB = 0 !== nB && 0 !== zB && QB.blockRootId(zB) === QB.blockRootId(nB);
        return 0 !== nB && 0 !== dB && QB.blockRootId(BB) === QB.blockRootId(jB) ? IB && zB !== dB ? dB : void 0 : 0 === dB || !IB && 0 !== zB ? IB ? 0 : void 0 : dB
      }
    }
    const Uz = JB.zc + JB.Dc * JB.Kc.BYTES,
      az = 2147483647,
      pz = new TextDecoder,
      rz = new TextEncoder,
      sz = Object.freeze({
        fa: 0,
        zu: null,
        amountAddedToSlot: 0
      }),
      Jz = new Proxy({}, {
        get: () => () => JB.sd
      });

    function mz(BB) {
      return Number.isInteger(BB) && BB >= 0 && BB <= 65535
    }

    function yz(BB) {
      return Number.isInteger(BB) && BB >= 0 && BB <= 4294967295
    }
    class kz {
      constructor(BB) {
        this.deps = BB, this.vn = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(JB.Dc), this.ids = new Uint16Array(JB.Dc), this.amounts = new Uint16Array(JB.Dc), this.attrRead = new Float64Array(JB.Dc).fill(-1), this.stale = new Uint16Array(JB.Dc), this.staleVersion = new Uint32Array(JB.Dc), this.instances = new Uint32Array(JB.Dc), this.viewPtr = 0, this.viewVersion = -1, this.len = 0, this.selected = 0, this.slotIconId = 0, this.stopped = !1, this.listeners = new Set
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
      slot(BB) {
        var jB;
        return Number.isInteger(BB) && BB >= 0 && BB < this.len && 0 !== this.ids[BB] && null !== (jB = this.facades[BB]) && void 0 !== jB ? jB : null
      }
      DN() {
        return this.slot(this.selected)
      }
      playerItems() {
        const BB = [];
        for (let jB = 0; jB < Math.min(JB.Dd, this.len); jB++) BB.push(this.slot(jB));
        return BB
      }
      freeSlots() {
        let BB = 0;
        for (let jB = 0; jB < Math.min(JB.Dd - JB.g, this.len); jB++) 0 === this.ids[jB] && BB++;
        return BB
      }
      amountOf(BB) {
        let jB = 0;
        for (let QB = 0; QB < Math.min(JB.Dd, this.len); QB++) {
          const nB = this.slot(QB);
          var zB;
          if ((null === nB || void 0 === nB ? void 0 : nB.name) === BB) jB += null !== (zB = nB.amount) && void 0 !== zB ? zB : 1
        }
        return jB
      }
      instance(BB) {
        var jB;
        return null !== (jB = this.instances[BB]) && void 0 !== jB ? jB : 0
      }
      watch(BB) {
        return this.listeners.add(BB), () => {
          this.listeners.delete(BB)
        }
      }
      touch() {
        this.version++
      }
      flush(BB) {
        if (this.version !== this.notified || this.iconChanged) {
          this.notified = this.version, this.iconChanged = !1;
          for (const zB of [...this.listeners]) try {
            zB()
          } catch (jB) {
            BB(jB)
          }
        }
      }
      chestOpened(BB, jB, zB) {
        this.vn[0] = BB, this.vn[1] = jB, this.vn[2] = zB, this.version++
      }
      refresh() {
        const BB = this.deps.api.apiView,
          jB = JB.w.inventoryViewPtr(BB, 0),
          zB = JB.w.inventoryVersion(BB, 0),
          QB = JB.w.selectedSlot(BB, 0);
        QB !== this.selected && (this.selected = QB, this.version++);
        const nB = JB.w.slotIcon(BB, 0);
        if (nB !== this.slotIconId && (this.slotIconId = nB, this.iconChanged = !0), jB === this.viewPtr && zB === this.viewVersion) return;
        this.viewPtr = jB, this.viewVersion = zB;
        const dB = this.deps.api.memoryData(jB, Uz, 4, "the inventory view"),
          IB = dB ? Math.min(dB.getUint32(0, !0), JB.Dc) : 0;
        IB !== this.len && (this.len = IB, this.version++);
        let NB = 0;
        for (let uB = 0; uB < JB.Dc; uB++) {
          const BB = JB.zc + uB * JB.Kc.BYTES,
            jB = null !== dB && uB < IB ? JB.Kc.item(dB, BB) : 0;
          if (0 === jB || null === dB) {
            0 !== this.ids[uB] && (this.ids[uB] = 0, this.attrRead[uB] = -1, this.instances[uB]++, this.version++);
            continue
          }
          const zB = JB.Kc.amount(dB, BB),
            QB = JB.Kc.attrVersion(dB, BB);
          jB === this.ids[uB] && zB === this.amounts[uB] || this.fill(uB, jB, zB), QB !== this.attrRead[uB] && (this.stale[NB] = uB, this.staleVersion[NB] = QB, NB++)
        }
        NB > 0 && this.fetchAttributes(NB)
      }
      fill(BB, jB, zB) {
        const {
          tables: QB
        } = this.deps, nB = jB !== this.ids[BB];
        let dB = this.facades[BB];
        dB || (dB = {
          name: "",
          amount: null,
          attributes: {
            customAttributes: {}
          },
          typeObj: null
        }, this.facades[BB] = dB), nB && (dB.name = QB.nameOfId(jB), dB.typeObj = QB.itemType(jB), dB.attributes = {
          customAttributes: {}
        }, this.attrRead[BB] = -1, this.instances[BB]++), dB.amount = 0 === zB ? null : zB, this.ids[BB] = jB, this.amounts[BB] = zB, this.version++
      }
      fetchAttributes(BB) {
        const {
          api: jB,
          onError: zB
        } = this.deps, QB = jB.memoryView(Uint16Array, jB.scratch(), BB, "item_attributes_batch's slots");
        if (!QB) return void this.markRead(BB);
        QB.set(this.stale.subarray(0, BB));
        const nB = jB.queries.itemAttributesBatch(BB),
          dB = 4294967295 === nB ? null : jB.memoryData(jB.scratch(), nB, 4, "item_attributes_batch's answer");
        if (!dB) return void this.markRead(BB);
        const IB = new Uint8Array(dB.buffer, dB.byteOffset, nB);
        for (let uB = 0; uB + 8 <= nB;) {
          const BB = dB.getUint16(uB, !0),
            jB = dB.getUint32(uB + 4, !0),
            QB = IB.subarray(uB + 8, uB + 8 + jB);
          uB += 8 + (0, rB.ie)(jB);
          const nB = this.facades[BB];
          if (nB && 0 !== this.ids[BB] && 0 !== jB) {
            try {
              nB.attributes = JSON.parse(pz.decode(QB))
            } catch (NB) {
              zB(NB)
            }
            this.version++
          }
        }
        this.markRead(BB)
      }
      markRead(BB) {
        for (let jB = 0; jB < BB; jB++) this.attrRead[this.stale[jB]] = this.staleVersion[jB]
      }
      swap(BB, jB) {
        return mz(BB) && mz(jB) && this.settle(this.queries().invSwap(BB, jB))
      }
      move(BB, jB, zB) {
        return mz(BB) && mz(jB) && yz(zB) && this.settle(this.queries().invMove(BB, jB, zB))
      }
      quickMove(BB, jB, zB, QB) {
        var nB, dB;
        if (!mz(BB) || !mz(jB) || !mz(zB) || null !== QB && !yz(QB)) return null;
        const IB = this.queries().invQuickMove(BB, jB, zB, null === QB ? -1 : Math.min(QB, az)),
          NB = IB === JB.sd ? JB.Sb : null !== (nB = null === (dB = this.extras()) || void 0 === dB ? void 0 : dB[1]) && void 0 !== nB ? nB : JB.Sb;
        return this.settle(IB), NB === JB.Sb ? null : NB
      }
      remove(BB, jB, zB) {
        return mz(BB) && yz(jB) && this.settle(this.queries().invRemove(BB, jB, zB ? 1 : 0))
      }
      selectSlot(BB) {
        return mz(BB) && this.settle(this.queries().selectSlot(BB))
      }
      closeChest() {
        return this.settle(this.queries().closeChest())
      }
      enchant(BB, jB, zB) {
        if (!mz(BB) || !Number.isInteger(jB)) return !1;
        const [QB, nB, dB] = zB;
        return this.settle(this.queries().invEnchant(BB, jB, Math.floor(QB), Math.floor(nB), Math.floor(dB)))
      }
      craft(BB, jB, zB) {
        let QB;
        try {
          QB = this.deps.tables.getItemId(BB)
        } catch {
          return sz
        }
        if (!mz(jB) || null !== zB && (Number.isNaN(zB) || zB < 0)) return sz;
        const nB = null === zB || zB > az ? -1 : Math.floor(zB),
          dB = this.queries().craft(QB, jB, nB);
        let IB = sz;
        const NB = dB === JB.sd ? null : this.extras();
        if (NB) {
          const [BB, jB, zB] = NB;
          IB = {
            fa: BB,
            zu: jB === JB.Sb ? null : jB,
            amountAddedToSlot: zB
          }
        }
        return this.settle(dB), IB
      }
      salvage(BB, jB, zB) {
        let QB;
        try {
          QB = this.deps.tables.getItemId(jB)
        } catch {
          return !1
        }
        return mz(BB) && Number.isInteger(zB) && this.settle(this.queries().salvage(BB, QB, Math.max(Math.min(zB, az), -az)))
      }
      craftingView(BB, jB, zB) {
        var QB;
        if (this.stopped) return null;
        const {
          api: nB,
          onError: dB
        } = this.deps, IB = BB ? rz.encode(BB) : null;
        if (null !== IB) {
          if (IB.length > 1024) return dB(new Error(`The crafting station ${BB}'s name is over 1024 bytes`)), null;
          const jB = nB.memoryView(Uint8Array, nB.scratch(), IB.length, "crafting_view's station");
          if (!jB) return null;
          jB.set(IB)
        }
        const NB = mz(jB) && mz(zB),
          uB = nB.queries.craftingView(null !== (QB = null === IB || void 0 === IB ? void 0 : IB.length) && void 0 !== QB ? QB : 0, NB ? jB : 0, NB ? zB : 0);
        return uB < JB.qb.BYTES ? (nB.reportCorruption(`crafting_view's answer of ${uB} bytes`), null) : nB.memoryData(nB.scratch(), uB, 1, "crafting_view's answer")
      }
      queries() {
        var BB, jB;
        return !1 === (null === (BB = (jB = this.deps).beforeOp) || void 0 === BB ? void 0 : BB.call(jB)) ? (this.stopped = !0, Jz) : this.deps.api.queries
      }
      extras() {
        const {
          api: BB
        } = this.deps;
        return BB.memoryView(Uint32Array, BB.scratch(), 3, "a sync query's extra words")
      }
      settle(BB) {
        if (BB === JB.qd)(0, wj.c)();
        else if (BB !== JB.sd) {
          const jB = this.deps.cmd();
          jB && function(BB, jB, zB) {
            return (0, wj.c)(), (0, JB.Ig)(BB, jB, zB)
          }(jB, 0, BB) || this.deps.onError(new Error(`Sync op ${BB}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
        }
        return this.stopped || this.refresh(), BB !== JB.sd
      }
    }
    const Gz = 1 / .6,
      Lz = [0, 1, 0],
      gz = [0, 0, 0],
      tz = new Uint8Array(0),
      Sz = 1.2 * Jj.e.Oy,
      Mz = new TextEncoder,
      Ez = [0, 0, 0],
      iz = [0, 0, 0],
      qz = new Map;

    function fz(BB) {
      let jB = qz.get(BB);
      return jB || (qz.size >= 64 && qz.clear(), jB = Mz.encode(`{"emitRate":${BB}}`), qz.set(BB, jB)), jB
    }

    function oz(BB) {
      return Number.isFinite(BB) && BB > 0 ? BB : 0
    }

    function Hz(BB, jB) {
      for (let zB = 0; zB < 3; zB++) {
        const QB = Math.abs(jB[zB]);
        Ez[zB] = BB[zB] - QB, iz[zB] = 2 * QB
      }
      return Number.isFinite(Ez[0] + Ez[1] + Ez[2] + iz[0] + iz[1] + iz[2])
    }

    function Dz(BB, jB) {
      return "pos1" === BB || "pos2" === BB ? void 0 : jB
    }

    function Fz(BB, jB, zB) {
      return BB.length > JB.Qd.MaxOpts ? (zB(new Error(`${jB}'s particle opts are over ${JB.Qd.MaxOpts} bytes of JSON`)), null) : BB
    }
    const Yz = {
      moveTo() {},
      setEmitRate() {},
      emit() {},
      emitPoints() {},
      setDirections() {},
      stop() {},
      dispose() {}
    };
    class Vz {
      constructor(BB) {
        this.deps = BB, this.session = 0, this.nextKey = 1, this.live = 0, this.started = !1
      }
      enabled() {
        return null !== this.sink()
      }
      sink() {
        return this.deps.isSessionLive() ? this.deps.cmd() : null
      }
      create(BB, jB) {
        var zB;
        const QB = this.sink(),
          nB = null !== (zB = jB.half) && void 0 !== zB ? zB : gz;
        if (!QB || this.live >= JB.Qd.MaxLiveKeys || this.nextKey > JB.Qd.MaxKey || !Hz(jB.pos, nB)) return Yz;
        const dB = this.nextKey,
          IB = Fz(function(BB) {
            var jB, zB, QB;
            const nB = JSON.stringify({
              texture: "string" === typeof BB.texture ? BB.texture : "smokePuff",
              Ep: BB.Ep,
              minLifeTime: BB.minLifeTime,
              maxLifeTime: BB.maxLifeTime,
              minSize: BB.minSize,
              maxSize: BB.maxSize,
              minEmitPower: BB.minEmitPower,
              maxEmitPower: BB.maxEmitPower,
              emitRate: oz(BB.emitRate),
              gravity: null !== (jB = BB.gravity) && void 0 !== jB ? jB : gz,
              dir1: null !== (zB = BB.dir1) && void 0 !== zB ? zB : Lz,
              dir2: null !== (QB = BB.dir2) && void 0 !== QB ? QB : Lz,
              colorGradients: BB.colorGradients,
              blendMode: BB.blendMode
            });
            return Mz.encode(nB)
          }(BB), "createParticles", this.deps.onError);
        return IB && (0, JB.xf)(QB, 0, dB, 0, JB.Qd.PresetNone, 0, Ez, iz, IB) ? (this.nextKey++, this.live++, this.started = !0, new hz(this, this.session, dB, BB, nB)) : Yz
      }
      playEffect(BB) {
        const jB = this.sink(),
          {
            pos1: zB,
            pos2: QB
          } = BB;
        if (!jB || !zB || !QB) return;
        for (let dB = 0; dB < 3; dB++) Ez[dB] = Math.min(zB[dB], QB[dB]), iz[dB] = Math.abs(QB[dB] - zB[dB]);
        if (!Number.isFinite(Ez[0] + Ez[1] + Ez[2] + iz[0] + iz[1] + iz[2])) return;
        const nB = Fz(Mz.encode(JSON.stringify(BB, Dz)), "playParticleEffect", this.deps.onError);
        nB && (0, JB.sf)(jB, 0, 0, JB.Qd.PresetNone, JB.Qd.HasBox, 0, Ez, iz, nB)
      }
      burstPreset(BB, jB, zB) {
        const QB = this.sink(),
          nB = Math.min(Math.floor(zB), JB.Qd.MaxBurst);
        if (!QB || !Object.hasOwn(JB.mc, BB) || !(nB > 0)) return;
        const dB = Sz;
        for (let IB = 0; IB < 3; IB++) Ez[IB] = jB[IB] - dB / 2, iz[IB] = dB;
        Number.isFinite(Ez[0] + Ez[1] + Ez[2]) && (0, JB.sf)(QB, 0, 0, JB.mc[BB], JB.Qd.HasBox, nB, Ez, iz, tz)
      }
      sessionEnded() {
        this.session++;
        const BB = this.started ? this.deps.cmd() : null;
        return this.started = !1, this.nextKey = 1, this.live = 0, !BB || (0, JB.Bf)(BB, 0)
      }
      sinkFor(BB) {
        return BB === this.session ? this.deps.cmd() : null
      }
      stop(BB, jB) {
        const zB = this.sinkFor(BB);
        zB && (0, JB.Ff)(zB, 0, jB) && this.live--
      }
    }
    class hz {
      constructor(BB, jB, zB, QB, nB) {
        this.owner = BB, this.session = jB, this.key = zB, this.half = void 0, this.rate = void 0, this.stopDelayMs = void 0, this.emitted = void 0, this.stopped = !1, this.freed = !1, this.half = [Math.abs(nB[0]), Math.abs(nB[1]), Math.abs(nB[2])], this.rate = oz(QB.emitRate), this.emitted = this.rate > 0;
        const dB = QB.maxLifeTime * Gz * 1e3 + 250;
        this.stopDelayMs = dB >= 0 ? Math.min(dB, 2147483647) : 250
      }
      sink() {
        return this.stopped ? null : this.owner.sinkFor(this.session)
      }
      moveTo(BB, jB) {
        const zB = this.sink();
        if (zB) {
          if (jB)
            for (let BB = 0; BB < 3; BB++) this.half[BB] = Math.abs(jB[BB]);
          Hz(BB, this.half) && (0, JB.Jf)(zB, 0, this.key, JB.Qd.HasBox, Ez, iz, tz)
        }
      }
      setEmitRate(BB) {
        const jB = this.sink(),
          zB = oz(BB);
        jB && zB !== this.rate && (0, JB.Jf)(jB, 0, this.key, 0, gz, gz, fz(zB)) && (this.rate = zB, this.emitted ||= zB > 0)
      }
      emit(BB) {
        const jB = this.sink(),
          zB = Math.min(Math.floor(BB), JB.Qd.MaxBurst);
        jB && zB > 0 && (0, JB.sf)(jB, 0, this.key, JB.Qd.PresetNone, 0, zB, gz, gz, tz) && (this.emitted = !0)
      }
      emitPoints(BB, jB, zB) {
        const QB = this.sink(),
          nB = Math.min(Math.floor(zB), JB.Qd.MaxPoints, Math.floor(jB.length / 4));
        if (!QB || !(nB > 0) || !Number.isFinite(BB[0] + BB[1] + BB[2])) return;
        const dB = new Uint8Array(jB.buffer, jB.byteOffset, nB * JB.Qd.PointBytes);
        (0, JB.tf)(QB, 0, this.key, nB, BB, dB) && (this.emitted = !0)
      }
      setDirections(BB, jB) {
        const zB = this.sink();
        if (!zB || !Number.isFinite(BB[0] + BB[1] + BB[2] + jB[0] + jB[1] + jB[2])) return;
        const QB = Mz.encode(JSON.stringify({
          dir1: [BB[0], BB[1], BB[2]],
          dir2: [jB[0], jB[1], jB[2]]
        }));
        (0, JB.Jf)(zB, 0, this.key, 0, gz, gz, QB)
      }
      stop() {
        const BB = this.sink();
        this.stopped = !0, BB && (this.emitted ? (this.rate > 0 && (0, JB.Jf)(BB, 0, this.key, 0, gz, gz, fz(0)), setTimeout((() => {
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
    const Xz = Wj.s,
      Zz = new TextDecoder;

    function Az(BB, jB) {
      const {
        serverIds: zB,
        kinds: QB
      } = BB;
      let nB = 0;
      for (let dB = 0; dB < zB.length; dB++) {
        const BB = zB[dB];
        if (BB !== JB.kd && !tB(QB[dB])) {
          if (nB === jB.length) {
            const BB = new Int32Array(Math.max(64, 2 * nB));
            BB.set(jB), jB = BB
          }
          jB[nB++] = BB
        }
      }
      return {
        ids: jB,
        count: nB
      }
    }

    function Tz(BB, jB) {
      return BB.length >= jB ? BB : new Int32Array(Math.max(jB, 2 * BB.length))
    }

    function Pz(BB, jB, zB, QB) {
      for (let nB = 0; nB < zB; nB += 4096) {
        const dB = Math.min(4096, zB - nB),
          IB = BB.memoryView(Int32Array, BB.scratch(), dB, "entity_info_batch's ids");
        if (!IB) return !1;
        IB.set(jB.subarray(nB, nB + dB));
        const NB = BB.queries.entityInfoBatch(dB),
          uB = 4294967295 === NB ? null : BB.memoryData(BB.scratch(), NB, 4, "entity_info_batch's records");
        if (!uB) return !1;
        for (let BB = 0; BB + JB.$b.BYTES <= NB;) {
          const jB = JB.$b.len(uB, BB);
          QB(JB.$b.serverId(uB, BB), Wz(uB, BB, jB)), BB += JB.$b.BYTES + (0, rB.ie)(jB)
        }
      }
      return !0
    }

    function Wz(BB, jB, zB) {
      var QB, nB, dB;
      const IB = JB.$b.kind(BB, jB),
        NB = 0 === IB ? null : SB(IB);
      if (null === NB) return null;
      const uB = JB.$b.variation(BB, jB),
        UB = JB.$b.pose(BB, jB),
        aB = JB.$b.meta(BB, jB),
        pB = JB.$b.mesh(BB, jB),
        rB = 0 !== (JB.$b.flags(BB, jB) & JB.Yb.HasOpts),
        sB = Xz[NB];
      return Object.freeze({
        type: NB,
        variation: uB === JB.nd ? void 0 : null !== (QB = null !== (nB = null === sB || void 0 === sB ? void 0 : sB[uB]) && void 0 !== nB ? nB : null === sB || void 0 === sB ? void 0 : sB[0]) && void 0 !== QB ? QB : "default",
        pose: UB === JB.vc ? void 0 : null !== (dB = JB.Ob[UB]) && void 0 !== dB ? dB : JB.Ob[0],
        metaInfo: aB === JB.vc ? void 0 : JB.ad[aB],
        meshKind: pB === JB.vc ? void 0 : JB.$c[pB],
        meshOpts: rB ? Zz.decode(new Uint8Array(BB.buffer, BB.byteOffset + jB + JB.$b.BYTES, zB)) : void 0
      })
    }
    const ez = 1,
      lz = 2;
    class wz {
      constructor(BB) {
        this.deps = BB, this.wanted = 0, this.DN = !1, this.refused = !1
      }
      get on() {
        return this.DN
      }
      want(BB, jB) {
        this.wanted = jB ? this.wanted | BB : this.wanted & ~BB;
        const zB = 0 !== this.wanted;
        if (zB === this.DN) return;
        const QB = this.deps.cmd();
        null !== QB ? (0, JB.Ng)(QB, 0, zB ? 1 : 0) ? (this.DN = zB, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.DN = !1
      }
    }
    class xz {
      constructor(BB) {
        this.deps = BB, this.entries = new Map, this.complete = !1, this.refill = !1, this.midFrame = !1, this.pending = new Int32Array(64), this.pendingCount = 0, this.ids = new Int32Array(64)
      }
      get(BB) {
        var jB;
        return this.complete || this.fill(), null !== (jB = this.entries.get("string" === typeof BB ? BB : String(BB))) && void 0 !== jB ? jB : null
      }
      inCoreCall() {
        this.midFrame = !0
      }
      stale(BB) {
        if (this.complete) {
          if (this.pendingCount === this.pending.length) {
            const BB = new Int32Array(2 * this.pending.length);
            BB.set(this.pending), this.pending = BB
          }
          this.pending[this.pendingCount++] = BB
        }
      }
      removed(BB) {
        this.entries.size > 0 && this.entries.delete(String(BB))
      }
      refresh() {
        const BB = this.pendingCount;
        if (this.pendingCount = 0, this.midFrame = !1, !this.deps.watch.on || this.refill) return this.complete = !1, void(this.refill = !1);
        if (BB > 0 && this.complete) {
          const {
            api: jB
          } = this.deps;
          let zB = 0;
          const QB = this.ids = Tz(this.ids, BB);
          for (let nB = 0; nB < BB; nB++) {
            const BB = this.pending[nB],
              dB = jB.indexById.get(BB);
            void 0 === dB || tB(jB.kinds[dB]) ? this.entries.delete(String(BB)) : QB[zB++] = BB
          }
          zB > 0 && !this.batch(QB, zB) && (this.complete = !1)
        }
      }
      sessionEnded() {
        this.entries.clear(), this.complete = !1, this.refill = !1, this.midFrame = !1, this.pendingCount = 0, this.deps.watch.want(ez, !1)
      }
      fill() {
        const {
          api: BB
        } = this.deps;
        if (this.complete = !0, this.pendingCount = 0, this.entries.clear(), this.deps.isSessionLive()) {
          const {
            watch: BB
          } = this.deps, jB = BB.on;
          BB.want(ez, !0), !jB && BB.on && (this.refill = this.midFrame)
        }
        const {
          ids: jB,
          count: zB
        } = Az(BB, this.ids);
        this.ids = jB, zB > 0 && !this.batch(jB, zB) && (this.refill = !0)
      }
      batch(BB, jB) {
        return Pz(this.deps.api, BB, jB, ((BB, jB) => {
          null === jB ? this.entries.delete(String(BB)) : this.entries.set(String(BB), jB)
        }))
      }
    }
    var Kz = zB(4893);

    function Cz(BB) {
      if ("message" !== BB.type || BB.ha !== Kz.Wb.NewClientOptions || BB.payloadKind !== rB.fc.Msgpack) return null;
      const jB = (0, XB.c)(BB.payload);
      if (null === jB || "object" !== typeof jB || Array.isArray(jB)) throw new Error("NewClientOptions whose body isn't an object of options");
      return jB
    }
    var cz = zB(1270),
      bz = zB(36703);

    function vz(BB, jB, zB, QB, nB, dB, NB) {
      var uB, UB, aB;
      switch (BB) {
        case JB.re.ToggleMenu: {
          const BB = JB.F[jB];
          IB.n.Ly("toggleMenu", void 0 === BB ? "inventory" : `inventory|${BB}`);
          break
        }
        case JB.re.EditBoard:
          IB.n.Ly("EditBoard", {
            pos: 0 === jB ? null : zB
          });
          break;
        case JB.re.EditCodeBlock:
        case JB.re.ViewCodeBlock:
          IB.n.Ly("EditCodeBlock", {
            pos: zB,
            canChangePos: BB === JB.re.EditCodeBlock
          });
          break;
        case JB.re.EditCustomLobbyBlock:
          IB.n.Ly("EditCustomLobbyBlock", {
            pos: zB
          });
          break;
        case JB.re.OpenIronChest:
          IB.n.Ly("OpenIronChest", {
            pos: zB
          });
          break;
        case JB.re.EditNameTag:
          IB.n.Ly("EditNameTag", null !== (uB = null === (UB = nB.DN()) || void 0 === UB || null === (aB = UB.attributes.customAttributes) || void 0 === aB ? void 0 : aB.text) && void 0 !== uB ? uB : "");
          break;
        case JB.re.EditBook: {
          var pB, rB, mB;
          const BB = null === (pB = nB.DN()) || void 0 === pB ? void 0 : pB.attributes;
          IB.n.Ly("EditBook", {
            pages: (0, cz.T)(null === BB || void 0 === BB || null === (rB = BB.customAttributes) || void 0 === rB ? void 0 : rB.pages),
            title: null !== (mB = null === BB || void 0 === BB ? void 0 : BB.customDisplayName) && void 0 !== mB ? mB : "Title",
            isPublished: !(null === BB || void 0 === BB || !BB.customDescription)
          });
          break
        }
        case JB.re.CantChangeBlock:
          ! function(BB, jB) {
            const zB = jB.getClientOption("cantChangeError"),
              QB = jB.getClientOption(BB ? "cantBuildError" : "cantBreakError"),
              nB = BB ? zB : QB;
            (jB.getClientOption("canChange") || nB || "You cannot modify this block" !== zB) && IB.n.Ly("showBottomMessage", {
              message: QB || zB,
              type: "Error"
            })
          }(1 === jB, dB);
          break;
        case JB.re.MiddleBarStart:
          IB.n.Ly("middleScreenBarInitiate", {
            duration: QB,
            Tn: 1 === zB[0],
            horizBarRemOffset: jB
          });
          break;
        case JB.re.MiddleBarStop:
          IB.n.Ly("middleScreenBarRemove");
          break;
        case JB.re.Hitmarker:
          IB.n.Ly("localGunHitmarker", {
            Wj: 1 === jB
          });
          break;
        case JB.re.ShotsLeft:
          IB.n.Ly("localPlayerNewShotsLeft", QB);
          break;
        case JB.re.AimingOverlay:
          IB.n.Ly("aimingOverlay", 3 === (3 & jB) ? "sniper" : "none");
          break;
        case JB.re.BottomMessage:
          IB.n.Ly("showBottomMessage", JSON.parse(NB()));
          break;
        case JB.re.Crosshair:
          nB.inaccuracy = (0, ZB.d)(QB), (0, bz.c)().crosshairAccuracy(nB.inaccuracy);
          break;
        case JB.re.ChargeStage:
          break;
        case JB.re.EmoteWheelClose:
          IB.n.Ly("requestEmoteWheelClose");
          break;
        case JB.re.BlockMined:
          IB.n.Ly("localBlockMined");
          break;
        default:
          throw new sB.c(`UiEvent of no kind: what ${BB}`)
      }
    }
    var Rz = zB(38087),
      Oz = zB(34254),
      BQ = zB(2022),
      jQ = zB(36887),
      zQ = zB(34264),
      QQ = zB(4873);
    const nQ = 10,
      dQ = {
        player: [],
        chestOrCreative: [],
        chest: null,
        creative: !1,
        selectedSlot: 0,
        freeSlots: 0
      },
      IQ = {
        items: [],
        ammo: 0,
        selectedSlot: 0
      },
      NQ = {
        gun: !1,
        aimable: !1,
        chargeName: null
      };

    function uQ(BB, jB) {
      let zB, QB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        nB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      const dB = () => (zB = (0, BQ.s)(zB, jB()), zB);
      return {
        current: dB,
        watch(jB) {
          const zB = () => {
              jB(dB())
            },
            IB = [BB.watch(zB)];
          return null !== QB && IB.push((0, BQ.t)((BB => {
            BB.some(QB) && zB()
          }))), null !== nB && IB.push(nB(zB)), () => {
            for (const BB of IB) BB()
          }
        }
      }
    }

    function UQ(BB) {
      return BB && {
        name: BB.name,
        amount: BB.amount,
        attributes: BB.attributes
      }
    }
    const aQ = new WeakMap;

    function pQ(BB) {
      let jB = aQ.get(BB);
      return void 0 === jB && (jB = (0, zQ.creativeItemIds)().map((jB => ({
        name: BB.nameOfId(jB),
        amount: BB.isStackableId(jB) ? 1 : null,
        attributes: (0, Rz.b)("Gun" === (0, zQ.itemTypeOf)(jB) ? {
          type: "Gun",
          clipSize: (0, zQ.clipSizeOf)(jB)
        } : void 0)
      }))), aQ.set(BB, jB)), jB
    }

    function rQ(BB, jB, zB, QB) {
      const nB = jB => (BB.flush(QB), jB),
        dB = zB => {
          var QB, nB, dB, IB, NB, uB, UB;
          const aB = BB.slot(zB);
          if (!aB) return null;
          const {
            rootName: pB,
            metaStr: rB
          } = jB.getMetaInfo(aB.name);
          return {
            name: aB.name,
            amount: aB.amount,
            attributes: aB.attributes,
            instance: BB.instance(zB),
            displayName: null !== (QB = aB.attributes.customDisplayName) && void 0 !== QB ? QB : jB.getDisplayName(pB),
            requiresAmmo: "RequiresAmmo" === rB,
            clipSize: null !== (nB = null !== (dB = null === (IB = aB.attributes.customAttributes) || void 0 === IB || null === (NB = IB.gunStats) || void 0 === NB ? void 0 : NB.clipSize) && void 0 !== dB ? dB : null === (uB = jB.getGunStats(pB)) || void 0 === uB ? void 0 : uB.clipSize) && void 0 !== nB ? nB : null === (UB = aB.typeObj) || void 0 === UB ? void 0 : UB.clipSize
          }
        },
        NB = function(BB, jB) {
          let zB = null,
            QB = {
              focus: null,
              recipes: [],
              detail: null
            },
            nB = -1;
          const dB = new Set;
          return {
            read() {
              var dB, IB;
              if (null === zB) return null !== QB.focus && (QB = {
                ...QB,
                focus: null
              }), QB;
              if (QB.focus === zB && nB === BB.changes) return QB;
              if (nB = BB.changes, 0 === BB.length) return QB = {
                focus: zB,
                recipes: [],
                detail: null
              }, QB;
              let NB = 0;
              if (null !== zB.recipe) try {
                NB = jB.getItemId(zB.recipe.name)
              } catch {}
              const uB = BB.craftingView(zB.station, NB, null !== (dB = null === (IB = zB.recipe) || void 0 === IB ? void 0 : IB.qa) && void 0 !== dB ? dB : 0);
              return QB = null === uB ? {
                focus: zB,
                recipes: [],
                detail: null
              } : function(BB, jB, zB) {
                let QB = JB.qb.BYTES;
                const nB = [];
                for (let aB = JB.qb.recipes(BB, 0); aB > 0; aB--) {
                  const zB = JB.ib.flags(BB, QB),
                    dB = {
                      name: jB.nameOfId(JB.ib.item(BB, QB)),
                      qa: JB.ib.recipe(BB, QB),
                      requires: [],
                      produces: JB.ib.produces(BB, QB),
                      haveIngredients: 0 !== (zB & JB.eb.HaveIngredients),
                      listed: 0 !== (zB & JB.eb.Listed)
                    };
                  let IB = JB.ib.requires(BB, QB);
                  for (QB += JB.ib.BYTES; IB > 0; IB--) {
                    const zB = JB.kb.items(BB, QB);
                    dB.requires.push({
                      items: mQ(BB, QB + JB.kb.BYTES, zB, jB),
                      amt: JB.kb.amount(BB, QB)
                    }), QB += JB.kb.BYTES + 2 * zB
                  }
                  nB.push(dB)
                }
                const dB = JB.qb.flags(BB, 0);
                if (null === zB.recipe || 0 === (dB & JB.mb.Detail)) return {
                  focus: zB,
                  recipes: nB,
                  detail: null
                };
                const IB = {},
                  NB = {};
                for (let aB = JB.qb.ingredients(BB, 0); aB > 0; aB--) {
                  const zB = JB.cb.item(BB, QB),
                    nB = JB.cb.from(BB, QB),
                    dB = JB.cb.amount(BB, QB);
                  QB += JB.cb.BYTES;
                  const uB = nB === JB.E ? null : mQ(BB, QB, nB, jB);
                  if (null !== uB && (QB += 2 * nB), 0 === zB) continue;
                  const UB = jB.nameOfId(zB);
                  IB[UB] = dB, null !== uB && (NB[UB] = uB)
                }
                const {
                  name: uB,
                  qa: UB
                } = zB.recipe;
                return {
                  focus: zB,
                  recipes: nB,
                  detail: {
                    name: uB,
                    qa: UB,
                    craftAllTimes: JB.qb.craftAllTimes(BB, 0),
                    roomForOne: 0 !== (dB & JB.mb.RoomForOne),
                    resultStackable: Boolean(jB.getItemStat(uB, "stackable")),
                    amounts: IB,
                    ingredientsCraftedFrom: NB
                  }
                }
              }(uB, jB, zB), QB
            },
            setFocus(BB) {
              zB = BB;
              for (const jB of [...dB]) jB()
            },
            watchFocus: BB => (dB.add(BB), () => {
              dB.delete(BB)
            })
          }
        }(BB, jB);
      return {
        states: {
          inventory: uQ(BB, (() => {
            const zB = BB.length;
            if (0 === zB) return dQ;
            const QB = [];
            for (let jB = 0; jB < JB.Dd; jB++) QB.push(UQ(BB.slot(jB)));
            const nB = BB.slotIcon,
              dB = QB[BB.selectedSlot];
            0 !== nB && dB && (QB[BB.selectedSlot] = {
              ...dB,
              icon: jB.nameOfId(nB)
            });
            const IB = !0 === jB.getClientOption("creative");
            let NB = [],
              uB = null;
            if (zB > JB.Dd) {
              for (let jB = JB.Dd; jB < zB; jB++) NB.push(UQ(BB.slot(jB)));
              uB = {
                type: null,
                pos: [...BB.vn],
                numSlots: zB - JB.Dd,
                ironChest: null
              }
            } else IB && (NB = pQ(jB));
            return {
              player: QB,
              chestOrCreative: NB,
              chest: uB,
              creative: IB,
              selectedSlot: BB.selectedSlot,
              freeSlots: BB.freeSlots()
            }
          }), (0, BQ.l)("creative")),
          hotbar: uQ(BB, (() => {
            if (0 === BB.length) return IQ;
            const jB = [];
            for (let BB = 0; BB < nQ; BB++) jB.push(dB(BB));
            return {
              items: jB,
              ammo: BB.amountOf("Ammo"),
              selectedSlot: BB.selectedSlot
            }
          }), (0, BQ.j)("DisplayName", "GunStats")),
          crafting: uQ(BB, NB.read, null, NB.watchFocus),
          heldItemAim: uQ(BB, (() => {
            var jB;
            if (!zB()) return NQ;
            const QB = null === (jB = BB.DN()) || void 0 === jB ? void 0 : jB.typeObj,
              nB = "Gun" === (null === QB || void 0 === QB ? void 0 : QB.type);
            return {
              gun: nB,
              aimable: nB || !0 === (null === QB || void 0 === QB ? void 0 : QB.showsAimingUi),
              chargeName: "Chargeable" === (null === QB || void 0 === QB ? void 0 : QB.type) ? QB.name : null
            }
          }), null, (BB => function(BB, jB) {
            let zB = BB();
            return (0, QQ.y)((() => {
              const QB = BB();
              QB !== zB && (zB = QB, jB(QB))
            }))
          }(zB, BB)))
        },
        events: {
          hotbarSlotRequested: (0, BQ.e)("setSelectedInventorySlotI"),
          hotbarScrolled: (0, BQ.e)("ScrollInventorySlot"),
          numberKeyPressed: (0, BQ.e)("numkeyPressed"),
          inventoryDropRequested: (0, BQ.e)("DropInvenItem"),
          chestToggled: (0, BQ.e)("chestToggleFromServer"),
          chestRefreshed: (0, BQ.e)("chestRefreshedFromServer", JQ),
          inventorySynced: (0, BQ.e)("syncedInvenFromServer", JQ),
          enchantingTableOpened: (0, BQ.e)("enchantingTable", (BB => {
            let {
              position: zB,
              dN: QB
            } = BB;
            return {
              position: [...zB],
              blockName: jB.getMetaInfo(QB).rootName
            }
          }))
        },
        commands: {
          selectHotbarSlot(jB) {
            BB.selectSlot(jB), BB.flush(QB)
          },
          removeInventoryItem(jB) {
            let {
              slot: zB,
              amount: QB,
              drop: dB
            } = jB;
            return nB(BB.remove(zB, QB, dB))
          },
          swapInventorySlots(jB) {
            let {
              a: zB,
              b: QB
            } = jB;
            return nB(BB.swap(zB, QB))
          },
          moveInventoryItem(jB) {
            let {
              from: zB,
              to: QB,
              amount: dB
            } = jB;
            return nB(BB.move(zB, QB, dB))
          },
          quickMoveInventoryItem(jB) {
            let {
              slot: zB,
              start: QB,
              end: dB,
              amount: IB
            } = jB;
            return nB(BB.quickMove(zB, QB, dB, IB))
          },
          closeChest() {
            BB.closeChest(), BB.flush(QB), IB.n.Ly("chestClosedByPlayer")
          },
          focusCrafting(BB) {
            NB.setFocus(BB)
          },
          craftRecipe(jB) {
            let {
              name: zB,
              qa: QB,
              times: dB
            } = jB;
            return nB(BB.craft(zB, QB, dB))
          },
          salvageItem(jB) {
            let {
              slot: zB,
              name: QB,
              amount: dB
            } = jB;
            return nB(BB.salvage(zB, QB, dB))
          },
          enchantItem(jB) {
            let {
              slot: zB,
              level: QB,
              tablePos: nB
            } = jB;
            BB.enchant(zB, QB, nB)
          }
        },
        queries: {
          enchantingOffer(zB) {
            let {
              slot: QB,
              blockName: nB
            } = zB;
            return function(BB, jB, zB, QB) {
              const nB = BB.slot(zB);
              if (!nB || !jB.getClientOption("canCraft") || !(0, Oz.q)(QB) || (0, Oz.m)(nB.attributes)) return sQ;
              const dB = (0, zQ.enchantmentPerksOf)(jB.getItemId(nB.name));
              if (0 === dB.length) return sQ;
              const IB = [];
              for (let NB = 0; NB < jQ.c; NB++) {
                const {
                  commonProb: BB,
                  uncommonProb: jB,
                  rareProb: zB,
                  epicProb: nB,
                  legendaryProb: dB,
                  level: uB
                } = (0, Oz.d)(QB, NB);
                IB.push({
                  level: uB,
                  odds: [BB, jB, zB, nB, dB].map((BB => 100 * BB))
                })
              }
              return {
                perks: [...dB],
                options: IB
              }
            }(BB, jB, QB, nB)
          }
        }
      }
    }
    const sQ = Object.freeze({
      perks: [],
      options: []
    });

    function JQ() {
      return null
    }

    function mQ(BB, jB, zB, QB) {
      const nB = [];
      for (let dB = 0; dB < zB; dB++) {
        const zB = BB.getUint16(jB + 2 * dB, !0);
        0 !== zB && nB.push(QB.nameOfId(zB))
      }
      return nB
    }
    class yQ {
      constructor(BB) {
        this.api = BB, this.positions = new Map, this.targeted = {
          JR: 0,
          position: [0, 0, 0],
          normal: [0, 0, 0],
          By: [0, 0, 0]
        }, this.hasTarget = !1, this.breaking = [0, 0, 0], this.isBreaking = !1
      }
      position(BB) {
        let jB = this.positions.get(BB);
        return jB || (this.api.checkValid(BB) || this.api.isLocal(BB) ? (jB = [NaN, NaN, NaN], this.api.readPosition(BB, jB), this.positions.set(BB, jB), jB) : null)
      }
      mBB() {
        return this.hasTarget ? this.targeted : null
      }
      breakingPosition() {
        return this.isBreaking ? this.breaking : null
      }
      refresh() {
        for (const [jB, zB] of this.positions) this.api.readPosition(jB, zB) || this.api.checkValid(jB) || this.api.isLocal(jB) || this.positions.delete(jB);
        const BB = this.api.apiView;
        if (this.refreshTarget(), this.isBreaking = 0 !== (JB.w.playerFlags(BB, 0) & JB.Sd.Breaking) && JB.w.breakingProgress(BB, 0) >= 0, this.isBreaking)
          for (let jB = 0; jB < 3; jB++) this.breaking[jB] = JB.w.breakingPos(BB, 0, jB)
      }
      refreshTarget() {
        const BB = this.api.apiView,
          jB = JB.w.targetBlockId(BB, 0);
        if (this.hasTarget = jB !== JB.ld, this.hasTarget) {
          const zB = this.targeted;
          zB.JR = jB;
          for (let jB = 0; jB < 3; jB++) zB.position[jB] = JB.w.targetBlock(BB, 0, jB), zB.normal[jB] = JB.w.targetNormal(BB, 0, jB), zB.By[jB] = JB.w.targetAdjacent(BB, 0, jB)
        }
      }
      despawned(BB) {
        const jB = this.positions.get(BB);
        jB && !this.api.isLocal(BB) && (jB.fill(NaN), this.positions.delete(BB))
      }
    }
    var kQ = zB(40721),
      GQ = zB(40709),
      LQ = zB(36453),
      gQ = zB(36882);
    const tQ = 1,
      SQ = 2;
    class MQ {
      constructor() {
        this.game = new gQ.f, this.client = new gQ.f, this.DN = 0, this.movesFly = null
      }
      setGame(BB) {
        if (null === BB || "object" !== typeof BB) return !1;
        const {
          key: jB,
          value: zB
        } = BB;
        return "string" === typeof jB && (this.game.setBooleanType(jB, Boolean(zB)), !0)
      }
      setClient(BB, jB) {
        this.client.setBooleanType(BB, jB)
      }
      clearGame() {
        this.game = new gQ.f, this.movesFly = null
      }
      setMovesFly(BB) {
        this.movesFly = BB
      }
      perms() {
        return (this.game._getTotalBooleanVal() ? tQ : 0) | (this.client._getTotalBooleanVal() ? SQ : 0)
      }
      write(BB) {
        const jB = this.perms(),
          {
            movesFly: zB
          } = this;
        if (jB === this.DN && null === zB) return !0;
        let QB = JB.bc.Keep;
        return null !== zB && (QB = zB ? JB.bc.On : JB.bc.Off), !(!BB || !(0, JB.Oe)(BB, 0, QB, jB, zB ? 1 : 0)) && (this.DN = jB, this.movesFly = null, !0)
      }
    }
    class EQ {
      constructor(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 35;
        this.api = BB, this.screenBandPct = void 0, this.clipX = 0, this.clipY = 0, this.clipW = 0, this.eye = [0, 0, 0], this.forward = [0, 0, 1], this.along = [0, 0, 0], this.screenBandPct = {
          x: NB.e,
          get y() {
            return jB()
          }
        }
      }
      get hasView() {
        const BB = this.api.apiView,
          jB = JB.w.viewProj;
        return 0 !== jB(BB, 0, 3) || 0 !== jB(BB, 0, 7) || 0 !== jB(BB, 0, 11) || 0 !== jB(BB, 0, 15)
      }
      get cameraPosition() {
        const BB = this.api.apiView,
          {
            eye: jB
          } = this;
        for (let zB = 0; zB < 3; zB++) jB[zB] = JB.w.eye(BB, 0, zB);
        return jB
      }
      get cameraDirection() {
        const BB = this.api.apiView,
          jB = JB.w.viewProj,
          zB = jB(BB, 0, 3),
          QB = jB(BB, 0, 7),
          nB = jB(BB, 0, 11),
          dB = Math.hypot(zB, QB, nB),
          {
            forward: IB
          } = this;
        return dB > 0 && (IB[0] = zB / dB, IB[1] = QB / dB, IB[2] = nB / dB), IB
      }
      get cameraHeading() {
        return JB.w.heading(this.api.apiView, 0)
      }
      get cameraPitch() {
        return JB.w.pitch(this.api.apiView, 0)
      }
      get tanHalfFovX() {
        return JB.w.tanHalfFovX(this.api.apiView, 0)
      }
      get tanHalfFovY() {
        return JB.w.tanHalfFovY(this.api.apiView, 0)
      }
      projectWorldPosToScreenPos(BB) {
        this.clip(BB);
        const {
          clipX: jB,
          clipY: zB,
          clipW: QB
        } = this;
        if (QB > 0) {
          const BB = jB / QB * 50,
            nB = -zB / QB * 50;
          return Math.abs(BB) <= this.screenBandPct.x && Math.abs(nB) <= this.screenBandPct.y ? {
            x: 50 + BB,
            y: 50 + nB
          } : this.clampToBand(BB, nB)
        }
        const nB = this.cameraPosition,
          dB = Math.hypot(BB[0] - nB[0], BB[1] - nB[1], BB[2] - nB[2]),
          IB = this.api.apiView,
          NB = JB.w.viewProj,
          uB = dB > 0 ? jB / dB : 0,
          UB = dB > 0 ? -zB / dB : 0,
          aB = Math.hypot(NB(IB, 0, 1), NB(IB, 0, 5), NB(IB, 0, 9)),
          pB = uB / Math.hypot(NB(IB, 0, 0), NB(IB, 0, 4), NB(IB, 0, 8)),
          rB = UB / aB,
          sB = !(Math.abs(pB) >= .001 || Math.abs(rB) >= .001);
        return this.clampToBand(uB, sB ? -(aB || 1) : UB)
      }
      projectDirectionToScreenPos(BB) {
        if (!this.hasView) return;
        const jB = this.cameraPosition,
          zB = this.along;
        for (let QB = 0; QB < 3; QB++) zB[QB] = jB[QB] + 10 * BB[QB];
        return this.projectWorldPosToScreenPos(zB)
      }
      projectWorldPosToViewport(BB) {
        this.clip(BB);
        const {
          clipX: jB,
          clipY: zB,
          clipW: QB
        } = this;
        return QB > 0 ? {
          x: 50 + jB / QB * 50,
          y: 50 - zB / QB * 50
        } : null
      }
      clip(BB) {
        const jB = this.api.apiView,
          zB = BB[0] - JB.w.origin(jB, 0, 0),
          QB = BB[1] - JB.w.origin(jB, 0, 1),
          nB = BB[2] - JB.w.origin(jB, 0, 2),
          dB = JB.w.viewProj;
        this.clipX = dB(jB, 0, 0) * zB + dB(jB, 0, 4) * QB + dB(jB, 0, 8) * nB + dB(jB, 0, 12), this.clipY = dB(jB, 0, 1) * zB + dB(jB, 0, 5) * QB + dB(jB, 0, 9) * nB + dB(jB, 0, 13), this.clipW = dB(jB, 0, 3) * zB + dB(jB, 0, 7) * QB + dB(jB, 0, 11) * nB + dB(jB, 0, 15)
      }
      clampToBand(BB, jB) {
        return (0, NB.g)(BB, jB, this.screenBandPct.x, this.screenBandPct.y)
      }
    }
    var iQ = zB(4906);
    const qQ = new TextEncoder,
      fQ = new Uint8Array(JB.N * JB.J);
    class oQ {
      constructor() {
        this.buttons = [], this.DN = !0
      }
      set(BB) {
        this.buttons = BB, this.DN = !1
      }
      attached() {
        this.DN = 0 === this.buttons.length
      }
      write(BB) {
        if (this.DN) return;
        const jB = new Uint8Array(JB.N),
          zB = new Uint8Array(JB.N);
        let QB = 0,
          nB = 0;
        for (const {
            id: dB,
            keycode: IB
          }
          of this.buttons) {
          if (QB === JB.N) break;
          const {
            read: BB,
            written: NB
          } = qQ.encodeInto(dB, fQ.subarray(nB, nB + JB.J));
          if (BB < dB.length) continue;
          const uB = iQ.n[IB];
          jB[QB] = "number" === typeof uB ? uB : 0, zB[QB] = NB, QB++, nB += NB
        }
        this.DN = (0, JB.Ae)(BB, 0, QB, jB, zB, fQ.subarray(0, nB))
      }
    }

    function HQ(BB, jB, zB) {
      const QB = qQ.encode(jB);
      return QB.length <= JB.J && function(BB, jB, zB, QB) {
        return (0, wj.c)(), (0, JB.Lf)(BB, jB, zB, QB)
      }(BB, 0, zB ? 1 : 0, QB)
    }
    const DQ = new TextDecoder,
      FQ = new TextEncoder,
      YQ = new Uint8Array(0),
      VQ = [0, 0, 0],
      hQ = {
        off: JB.Wd.Off,
        key: JB.Wd.Key,
        touch: JB.Wd.Touch
      };
    class XQ {
      constructor(BB) {
        var jB;
        this.options = BB, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tickers = [], this.renderers = [], this.receivers = [], this.failures = [], this.vetoSet = !1, this.hooksSet = !1, this.writtenPublicLobby = !1, this.promptWatch = "off", this.promptWatchSent = "off", this.customButtons = new oQ, this.generation = 0, this.sessionLive = !1, this.boundId = 0, this.session = null, this.activeConn = 0, this.closedThrough = 0, this.openSocket = 0, this.socketLeftSinceAttach = !1, this.ticks = 0, this.zoomUnshown = !1, this.zoomHeld = !1, this.overflowGen = 0, this.resyncOwed = !1, this.zoom = 0, this.pendingZoom = null, this.highlight = null, this.highlightOwed = !1, this.cmd = null, this.freeCam = new MQ, this.stopped = () => !1, this.onError = void 0, this.api = void 0, this.tables = void 0, this.itemSources = null, this.fault = void 0, this.JJ = BB => {
          if ((0, sB.i)(BB)) throw BB;
          this.onError(BB)
        }, this.api = BB.api, this.tables = BB.tables, this.onError = null !== (jB = BB.onError) && void 0 !== jB ? jB : BB => {
          console.error("Error in client game callback", BB)
        }, this.renderFrame = new EQ(this.api, BB.screenBandY), this.live = new yQ(this.api), this.chunks = new Nj(this.api.memory, (() => this.api.apiView)), this.items = new kz({
          api: this.api,
          tables: BB.tables,
          cmd: () => this.cmd,
          onError: this.onError,
          beforeOp: BB.beforeOp
        });
        const zB = () => this.stopped() ? null : this.cmd,
          QB = () => this.sessionLive;
        this.entityInfoWatch = new wz({
          cmd: zB,
          onError: this.onError
        }), this.entityInfo = new xz({
          api: this.api,
          watch: this.entityInfoWatch,
          isSessionLive: QB
        }), this.particles = new Vz({
          cmd: zB,
          isSessionLive: QB,
          onError: this.onError
        }), this.clientApi = new uz({
          api: this.api,
          live: this.live,
          chunks: this.chunks,
          items: this.items,
          entityInfo: this.entityInfo,
          particles: this.particles,
          tables: BB.tables,
          cmd: zB,
          sendCmd: () => this.sendCmd(),
          isSessionLive: QB,
          beforeWrite: () => {
            var jB;
            if (this.stopped()) return !1;
            const zB = this.generation;
            return !1 !== (null === (jB = BB.beforeWrite) || void 0 === jB ? void 0 : jB.call(BB)) && zB === this.generation
          },
          playerDbId: () => {
            const BB = this.session;
            if (null === BB) throw new Error("No game session has started, so the local player has no DB id");
            return BB.playerDbId
          },
          playSound: BB.playSound,
          preloadSounds: BB.preloadSounds,
          setLocalOptions: BB.setLocalOptions,
          hasPackModel: BB.hasPackModel
        }), this.scriptedCamera = new KB({
          api: this.api,
          cmd: () => this.stopped() ? null : this.cmd,
          screen: BB.cameraScreen,
          showFacing: BB.showCameraFacing
        })
      }
      get itemBridgeSources() {
        return this.itemSources ??= rQ(this.items, this.tables, (() => this.localPlayerAlive()), this.JJ), this.itemSources
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
      clickCodeBlock(BB) {
        const jB = this.sessionLive ? this.sendCmd() : null;
        return null !== jB && (zB = jB, QB = 0, nB = BB[0], dB = BB[1], IB = BB[2], (0, wj.c)(), (0, JB.He)(zB, QB, nB, dB, IB));
        var zB, QB, nB, dB, IB
      }
      cameraZoom() {
        return this.zoom
      }
      setCameraZoom(BB) {
        const jB = this.liveCmd();
        return null === jB ? (this.pendingZoom = BB, !1) : (this.pendingZoom = null, (0, JB.Eg)(jB, 0, BB, 1))
      }
      nD(BB) {
        const jB = this.stopped() ? null : this.cmd;
        return null !== jB && (0, JB.Ag)(jB, 0, BB ? 1 : 0)
      }
      respawn() {
        const BB = this.sessionLive ? this.sendCmd() : null;
        return null !== BB && (jB = BB, zB = 0, (0, wj.c)(), (0, JB.Yf)(jB, zB));
        var jB, zB
      }
      bindCustomButtonKeys(BB) {
        this.customButtons.set(BB)
      }
      pressCustomButton(BB, jB) {
        const zB = this.sessionLive ? this.sendCmd() : null;
        return null !== zB && HQ(zB, BB, jB)
      }
      padMove(BB, jB, zB, QB, nB, dB) {
        const IB = this.liveCmd();
        return null !== IB && (0, JB.of)(IB, 0, BB, jB, zB, QB, nB, dB)
      }
      thirdPersonFor(BB) {
        const jB = this.liveCmd();
        return null !== jB && (0, JB.Jg)(jB, 0, null !== BB && void 0 !== BB ? BB : 1 / 0)
      }
      send(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const QB = 0 !== this.openSocket || this.sessionLive ? this.sendCmd() : null;
        return null !== QB && xj(QB, zB ? rB.kd : 0, BB, (0, XB.d)(jB))
      }
      socketAttached(BB) {
        this.openSocket = BB, this.socketLeftSinceAttach = !1
      }
      socketDetached(BB) {
        this.openSocket === BB && (this.openSocket = 0)
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
      attach(BB) {
        const jB = () => BB.isStopped;
        this.stopped = jB, this.cmd = BB.rings.cmd, this.promptWatchSent = "off", this.writePromptWatch(), this.customButtons.attached(), this.writeCustomButtons();
        const zB = this.api.apiView;
        this.overflowGen = JB.w.eventOverflowGen(zB, 0), this.resyncOwed = 0 !== JB.w.eventOverflowMask(zB, 0), BB.setGameHost(this), BB.setEventWalker((BB => {
          this.api.walk(BB, this, jB)
        }))
      }
      watchPromptPick(BB) {
        this.promptWatch = BB, this.writePromptWatch()
      }
      get promptEntity() {
        return "off" === this.promptWatch || this.stopped() ? null : ZQ(JB.w.promptEntity(this.api.apiView, 0))
      }
      get interactLabel() {
        return "touch" !== this.promptWatch || this.stopped() ? JB.Jc.None : JB.w.interactLabel(this.api.apiView, 0)
      }
      get interactIcon() {
        return "touch" !== this.promptWatch || this.stopped() ? 0 : JB.w.interactIcon(this.api.apiView, 0)
      }
      closeGame() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        (0 === BB || BB >= this.openSocket) && (this.openSocket = 0), this.closedThrough = Math.max(this.closedThrough, BB, this.activeConn), this.activeConn = 0, this.endSession(), this.endGameGrants(), this.dropGameCamera()
      }
      gameCamera(BB) {
        0 !== this.activeConn && this.scriptedCamera.settingsChanged(BB)
      }
      netEvent(BB) {
        "connection" === BB.type ? BB.phase === rB.E.Activated && BB.conn !== this.activeConn && BB.conn > this.closedThrough ? (this.endSession(), this.activeConn = BB.conn, this.endGameGrants(), this.dropGameCamera()) : BB.phase !== rB.E.Left && BB.phase !== rB.E.Closed || BB.conn !== this.activeConn ? BB.phase === rB.E.Resumed && 0 !== this.activeConn && BB.conn > this.closedThrough && (this.activeConn = BB.conn) : this.closeGame() : BB.conn === this.activeConn && 0 !== BB.conn && (BB.ha === GQ.p ? this.gunHit(BB.payload) : BB.ha === Kz.Wb.EditItemCraftingRecipes || BB.ha === GQ.Q ? this.items.touch() : (this.serverOptions(BB), this.gameMessage(BB)));
        const jB = this.options.onNetEvent;
        jB && this.guard((() => {
          jB(BB)
        }))
      }
      serverOptions(BB) {
        const jB = this.options.serverOptions,
          zB = jB ? this.decoded(Cz, BB) : null;
        jB && zB && this.guard((() => {
          jB.applyNewClientOptions(zB)
        }))
      }
      gameMessage(BB) {
        let jB = null;
        try {
          jB = function(BB) {
            if ("message" !== BB.type || BB.ha !== Kz.Wb.GameCodeMessage || BB.payloadKind !== rB.fc.Msgpack) return null;
            const jB = (0, XB.c)(BB.payload);
            if (null === jB || "object" !== typeof jB || "string" !== typeof jB.messageType) throw new Error("GameCodeMessage without a messageType");
            return jB
          }(BB)
        } catch (zB) {
          this.sessionLive && this.onError(zB)
        }
        if (jB) {
          const {
            messageType: BB,
            data: zB
          } = jB;
          if ((0, oB.f)(BB)) return void this.guard((() => {
            (0, oB.e)(BB, zB)
          }));
          "freeCamPerms" === BB && this.freeCam.setGame(zB) && this.writeFreeCam(), this.sessionLive && this.round(this.receivers, (jB => {
            jB.onReceivedMessageFromServer(BB, zB)
          }))
        }
      }
      decoded(BB, jB) {
        try {
          return BB(jB)
        } catch (zB) {
          return this.onError(zB), null
        }
      }
      setClientFreeCameraGrant(BB, jB) {
        this.freeCam.setClient(BB, jB), this.writeFreeCam()
      }
      freeCameraAllowed() {
        return 0 !== this.freeCam.perms()
      }
      setFreeCameraMovesFly(BB) {
        this.freeCam.setMovesFly(BB), this.writeFreeCam()
      }
      setBlockHighlight(BB) {
        this.highlight = BB, this.highlightOwed = !0, this.writeOwedHighlight()
      }
      writeOwedHighlight() {
        const BB = this.liveCmd();
        if (null === BB || !this.highlightOwed) return;
        const jB = this.highlight;
        this.highlightOwed = null === jB ? !(0, JB.Ze)(BB, 0, VQ, VQ, 0) : !(0, JB.Ze)(BB, 0, jB.pos, jB.normal, 1)
      }
      localPlayerBound(BB) {
        var jB, zB;
        if (0 === this.activeConn || this.sessionLive && BB === this.boundId) return;
        const QB = this.sessionLive;
        let nB, dB, IB, NB;
        this.endSession(), QB && this.restartGameCamera();
        try {
          var uB;
          this.session = null;
          const BB = this.options.sessionInfo(this.activeConn);
          if (this.session = BB, !BB) return;
          nB = BB.gameNameWithVariation, dB = null !== (uB = (0, qB.Mb)(nB)) && void 0 !== uB ? uB : void 0, IB = (0, fB.q)(BB.lobbyName), NB = (0, fB.E)(BB.lobbyName)
        } catch (GB) {
          return void this.onError(GB)
        }
        const UB = {
          localPlayerId: String(BB)
        };
        let aB = {},
          pB = {};
        try {
          var rB, sB;
          aB = null !== (rB = null === (sB = this.options.gameFactory((0, qB.Sb)(nB))) || void 0 === sB ? void 0 : sB(NB, IB, dB, UB)) && void 0 !== rB ? rB : {}
        } catch (GB) {
          this.JJ(GB)
        }
        try {
          var JB, mB;
          pB = {
            ...null === (JB = (mB = this.options).defaultPlugins) || void 0 === JB ? void 0 : JB.call(mB, NB, IB, dB, UB),
            ...aB.plugins
          }
        } catch (GB) {
          this.JJ(GB)
        }
        const yB = [aB, ...Object.values(pB)];
        this.owners = yB, this.tickers = yB.filter((BB => void 0 !== BB.vp)), this.renderers = yB.filter((BB => void 0 !== BB.onAfterRender)), this.receivers = yB.filter((BB => void 0 !== BB.onReceivedMessageFromServer)), this.writeAltVeto(yB), this.writeHooks(yB), this.writePublicLobby(NB), this.writeLocalDbId(null !== (jB = null === (zB = this.session) || void 0 === zB ? void 0 : zB.playerDbId) && void 0 !== jB ? jB : null), this.boundId = BB, this.sessionLive = !0, this.generation++, null !== this.pendingZoom && this.setCameraZoom(this.pendingZoom), this.highlightOwed ||= null !== this.highlight, this.writeOwedHighlight(), this.round(yB, (BB => {
          var jB;
          null === (jB = BB.onCreate) || void 0 === jB || jB.call(BB, this.clientApi)
        }));
        const kB = this.generation;
        setTimeout((() => {
          kB === this.generation && !0 === this.tables.getClientOption("creative") && pQ(this.tables)
        }), 0)
      }
      chunkSlot(BB, jB, zB, QB, nB, dB) {
        this.chunks.apply(BB, jB, zB, QB, nB, dB)
      }
      entityAdded(BB) {
        var jB;
        this.entityInfo.stale(BB), null === (jB = this.options.replayEntities) || void 0 === jB || jB.entityAdded(BB)
      }
      entityInfoChanged(BB) {
        var jB;
        this.entityInfo.stale(BB), null === (jB = this.options.replayEntities) || void 0 === jB || jB.entityInfoChanged(BB)
      }
      afterPrescan() {
        this.items.refresh(), this.entityInfo.refresh(), this.api.rereadDirectory(), this.chunks.refresh(), this.live.refresh()
      }
      tickEnd() {
        if (this.ticks++, this.tickers.length > 0) {
          const BB = performance.now();
          this.round(this.tickers, AQ), (0, QQ.e)(performance.now() - BB)
        }
      }
      afterWalk(BB) {
        this.ackEventOverflow(), this.clientApi.flushOwed(), this.writeOwedHighlight();
        const jB = this.options.replayEntities;
        jB && this.guard((() => {
          this.entityInfoWatch.want(lz, jB.wantsWatch), jB.flush(this.entityInfoWatch.on)
        }));
        const zB = this.api.apiView,
          QB = JB.w.frameMs(zB, 0);
        LQ.m.frame(QB, JB.w.heading(zB, 0), JB.w.pitch(zB, 0), LQ.k[BB]);
        const nB = (0, QQ.l)(BB, QB);
        if (null !== nB) {
          const BB = this.renderFrame;
          this.guard((() => {
            (0, bz.c)().turnDamageIndicators(BB.cameraHeading)
          })), this.guard((() => {
            this.clientApi.slideRoute(nB)
          })), this.round(this.renderers, (jB => {
            jB.onAfterRender(nB, BB)
          }))
        }
        this.writeFreeCam();
        try {
          this.scriptedCamera.afterFrame(null !== nB)
        } catch (IB) {
          this.JJ(IB)
        }
        this.showZoom(), this.items.flush(this.JJ), this.writePromptWatch(), this.writeCustomButtons();
        const dB = this.ticks;
        this.ticks = 0, (0, QQ.h)(dB, BB, nB, this.JJ)
      }
      entityRemoved(BB) {
        this.live.despawned(BB), this.entityInfo.removed(BB)
      }
      ackEventOverflow() {
        const BB = this.api.apiView,
          jB = JB.w.eventOverflowGen(BB, 0),
          zB = jB - this.overflowGen >>> 0;
        if (0 === zB && !this.resyncOwed) return;
        this.overflowGen = jB;
        const QB = JB.w.eventOverflowMask(BB, 0),
          nB = this.cmd;
        0 === QB || null === nB || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, JB.Le)(nB, 0, QB);
        const dB = this.options.onEventOverflow;
        0 !== zB && dB && this.guard((() => {
          dB(QB, zB)
        }))
      }
      gameCall(BB, jB, zB, QB, nB, dB, IB, NB, uB) {
        if (BB === JB.rc.Director) try {
          return this.scriptedCamera.call(jB, zB, QB, nB, dB, IB)
        } catch (UB) {
          return this.JJ(UB), JB.tb.None
        }
        if (!this.sessionLive || void 0 !== this.fault) return BB === JB.rc.AltVeto ? JB.k.Allow : 0;
        try {
          return this.callGames(BB, jB, zB, QB, nB, dB, IB, NB)
        } catch (UB) {
          throw (0, sB.i)(UB) && (this.fault = UB), UB
        }
      }
      takeFault() {
        const BB = this.fault;
        return this.fault = void 0, BB
      }
      callGames(BB, jB, zB, QB, nB, dB, IB, NB) {
        this.api.rereadDirectory(), this.chunks.touch(), this.items.refresh(), this.live.refresh(), this.entityInfo.inCoreCall();
        const {
          tables: uB
        } = this.options, UB = String(this.boundId);
        switch (BB) {
          case JB.rc.AltVeto:
          case JB.rc.AltAction: {
            const NB = 0 !== IB,
              [aB, pB, rB] = NB ? [jB, zB, QB] : [void 0, void 0, void 0],
              sB = NB ? uB.nameOfId(nB) : "Air",
              mB = ZQ(dB);
            if (BB === JB.rc.AltAction) return this.first((BB => {
              var jB;
              return null === (jB = BB.onPlayerAltAction) || void 0 === jB ? void 0 : jB.call(BB, UB, aB, pB, rB, sB, mB)
            })), 0;
            const yB = this.first((BB => {
              var jB;
              return null === (jB = BB.onPlayerAttemptAltAction) || void 0 === jB ? void 0 : jB.call(BB, UB, aB, pB, rB, sB, mB)
            }));
            return "preventAction" === yB ? JB.k.Prevent : "preventPlacement" === yB ? JB.k.PreventPlacement : JB.k.Allow
          }
          case JB.rc.Click: {
            const BB = NB,
              aB = 0 !== (BB & JB.X.Alt),
              pB = 0 !== (BB & JB.X.HasPos),
              rB = pB ? uB.nameOfId(nB) : "Air",
              [sB, mB, yB] = pB ? [jB, zB, QB] : [null, null, null],
              kB = ZQ(dB),
              GB = 0 !== (BB & JB.X.Up),
              LB = ZQ(IB);
            if (0 === (BB & JB.X.AttackOnly) && this.first((BB => {
                var jB, zB;
                return GB ? null === (jB = BB.onPlayerClickUp) || void 0 === jB ? void 0 : jB.call(BB, UB, aB, sB, mB, yB, rB, kB) : null === (zB = BB.onPlayerClick) || void 0 === zB ? void 0 : zB.call(BB, UB, aB, sB, mB, yB, rB, kB)
              })), !GB && !aB && null !== LB) {
              const BB = this.clientApi.getPositionView(LB),
                jB = BB ? [BB[0], BB[1], BB[2]] : [0, 0, 0];
              this.first((BB => {
                var zB;
                return null === (zB = BB.onPlayerAttackEntity) || void 0 === zB ? void 0 : zB.call(BB, UB, LB, jB)
              }))
            }
            return 0
          }
          case JB.rc.ChangeBlock: {
            const BB = uB.nameOfId(nB),
              IB = uB.nameOfId(dB);
            return this.first((nB => {
              var dB;
              return null === (dB = nB.onPlayerChangeBlock) || void 0 === dB ? void 0 : dB.call(nB, UB, jB, zB, QB, BB, IB)
            })), 0
          }
          case JB.rc.DropItem: {
            const BB = uB.nameOfId(jB);
            return this.first((jB => {
              var nB;
              return null === (nB = jB.onPlayerDropItem) || void 0 === nB ? void 0 : nB.call(jB, UB, BB, zB, QB)
            })), 0
          }
          default:
            return this.onError(new Error(`Unknown game call kind ${BB}`)), 0
        }
      }
      changeBlockFail(BB, jB, zB, QB, nB, dB, IB) {
        const NB = nB === JB.fd ? null : DQ.decode(this.api.eventBytes(dB, Math.min(nB, IB)));
        this.failures.push({
          GB: [BB, jB, zB],
          LB: QB,
          gB: NB
        })
      }
      changeBlockFailEnd() {
        const BB = this.failures;
        this.failures = [], this.sessionLive && this.round(this.owners, (jB => {
          var zB;
          null === (zB = jB.onChangeBlockFail) || void 0 === zB || zB.call(jB, BB)
        })), this.Ly("EditBoard", {
          pos: null
        }), this.Ly("EditCodeBlock", {
          pos: null,
          canChangePos: null
        })
      }
      inventoryEvent(BB, jB, zB, QB, nB, dB) {
        BB === JB.Nc.ChestOpened ? this.items.chestOpened(zB, QB, nB) : BB !== JB.Nc.Synced && BB !== JB.Nc.ChestClosed && BB !== JB.Nc.ChestRefreshed || this.items.touch(), this.guard((() => {
          ! function(BB, jB, zB, QB) {
            switch (BB) {
              case JB.Nc.Synced:
                IB.n.Ly("syncedInvenFromServer");
                break;
              case JB.Nc.ChestOpened:
              case JB.Nc.ChestClosed:
                IB.n.Ly("chestToggleFromServer", BB === JB.Nc.ChestOpened, !0);
                break;
              case JB.Nc.ChestRefreshed:
                IB.n.Ly("chestRefreshedFromServer");
                break;
              case JB.Nc.EnchantingTable:
                IB.n.Ly("enchantingTable", {
                  dN: QB,
                  position: zB
                });
                break;
              case JB.Nc.HotbarRequest:
                IB.n.Ly("setSelectedInventorySlotI", jB, !0);
                break;
              case JB.Nc.Scrolled:
                IB.n.Ly("ScrollInventorySlot", jB);
                break;
              case JB.Nc.NumberKey:
                IB.n.Ly("numkeyPressed", jB + 1);
                break;
              case JB.Nc.DropRequested:
                IB.n.Ly("DropInvenItem", 0 !== jB);
                break;
              default:
                throw new sB.c(`InventoryEvent of no kind: what ${BB}`)
            }
          }(BB, jB, [zB, QB, nB], dB)
        }))
      }
      heldItemChanged() {
        this.items.touch()
      }
      shotDamage(BB, jB, zB, QB) {
        this.Ly("shotPlayer", {
          playerId: String(BB),
          damage: jB,
          wasCrit: 0 !== QB,
          distance: zB
        })
      }
      localHurt(BB, jB) {
        this.Ly("closeShopOnDamaged", null), this.guard((() => {
          IB.n.Ly("damagedByOtherPlayer", {
            Gz: null,
            direction: Number.isNaN(jB) ? null : jB,
            DB: BB
          })
        }))
      }
      attackHit(BB, jB, zB, QB, nB) {
        this.guard((() => {
          IB.n.Ly("yourAttackHit", {
            Wj: QB,
            screenPos: this.renderFrame.projectDirectionToScreenPos([BB, jB, zB]),
            hitSelf: nB
          })
        }))
      }
      physicsType(BB) {
        this.Ly("PlayerPhysicsTypeUpdate", BB)
      }
      vehicleEffect(BB, jB, zB, QB, nB) {
        this.guard((() => {
          BB === rB.yd.UPDATE ? (0, DB.k)(jB, {
            icon: zB,
            level: QB,
            displayName: null,
            durationMs: nB
          }) : HB.c.remove(jB)
        }))
      }
      zoomChanged(BB) {
        this.zoom = BB, this.zoomUnshown = !0
      }
      zoomDisabled() {
        this.Ly("showBottomMessage", {
          message: "Zoom is disabled",
          timeoutLength: 2e3,
          type: "Error"
        })
      }
      showZoom() {
        const BB = this.scriptedCamera.holdsView();
        !this.zoomUnshown || BB && this.zoomHeld || (this.zoomUnshown = !1, this.Ly("cameraZoomSet", this.zoom)), this.zoomHeld = BB
      }
      gunHit(BB) {
        this.guard((() => {
          const {
            Gz: jB,
            Lz: zB
          } = (0, kQ.e)(GQ.p, BB);
          IB.n.Ly("damagedByOtherPlayer", {
            Gz: jB,
            direction: zB
          })
        }))
      }
      uiEvent(BB, jB, zB, QB, nB, dB, IB, NB) {
        this.guard((() => {
          vz(BB, jB, [zB, QB, nB], dB, this.items, this.options.tables, (() => DQ.decode(this.api.eventBytes(IB, NB))))
        }))
      }
      writeAltVeto(BB) {
        const jB = this.cmd;
        if (!jB) return;
        let zB;
        try {
          zB = function(BB, jB) {
            const zB = new Set;
            let QB = !1;
            for (const nB of BB)
              if (nB.onPlayerAttemptAltAction) {
                if (QB = !0, !nB.altVetoBlocks) return {
                  mode: JB.ue.All,
                  roots: []
                };
                for (const BB of nB.altVetoBlocks) zB.add(jB.getMetaInfo(BB).rootId)
              } return QB ? zB.size > JB._c ? {
              mode: JB.ue.All,
              roots: []
            } : {
              mode: JB.ue.Filter,
              roots: [...zB]
            } : {
              mode: JB.ue.Off,
              roots: []
            }
          }(BB, this.options.tables)
        } catch (nB) {
          this.onError(nB), zB = {
            mode: JB.ue.All,
            roots: []
          }
        }
        if (zB.mode === JB.ue.Off && !this.vetoSet) return;
        const QB = new Uint8Array(new Uint32Array(zB.roots).buffer);
        (0, JB.gg)(jB, 0, zB.mode, zB.roots.length, QB) ? this.vetoSet = zB.mode !== JB.ue.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
      }
      endGameGrants() {
        this.freeCam.clearGame(), this.writeFreeCam()
      }
      writeFreeCam() {
        this.stopped() || this.freeCam.write(this.cmd)
      }
      writeHooks(BB) {
        const jB = this.cmd;
        if (!jB) return;
        const zB = function(BB) {
          let jB = 0;
          for (const zB of BB) zB.onPlayerAltAction && (jB |= 1 << JB.rc.AltAction), (zB.onPlayerClick || zB.onPlayerClickUp || zB.onPlayerAttackEntity) && (jB |= 1 << JB.rc.Click), zB.onPlayerChangeBlock && (jB |= 1 << JB.rc.ChangeBlock), zB.onPlayerDropItem && (jB |= 1 << JB.rc.DropItem);
          return jB
        }(BB);
        (0 !== zB || this.hooksSet) && ((0, JB.sg)(jB, 0, zB) ? this.hooksSet = 0 !== zB : this.onError(new Error("SetHooks didn't fit the command ring")))
      }
      writeCustomButtons() {
        const BB = this.cmd;
        BB && !this.stopped() && this.customButtons.write(BB)
      }
      writePromptWatch() {
        const BB = this.cmd,
          jB = this.promptWatch;
        jB !== this.promptWatchSent && BB && !this.stopped() && (0, JB.Pg)(BB, 0, hQ[jB]) && (this.promptWatchSent = jB)
      }
      writePublicLobby(BB) {
        const jB = this.cmd;
        jB && BB !== this.writtenPublicLobby && ((0, JB.Cg)(jB, 0, BB ? 1 : 0) ? this.writtenPublicLobby = BB : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
      }
      writeLocalDbId(BB) {
        const jB = this.cmd;
        jB && ((0, JB.wg)(jB, 0, null === BB ? 0 : 1, null === BB ? YQ : FQ.encode(BB)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
      }
      first(BB) {
        const jB = this.generation;
        for (const QB of this.owners) {
          if (jB !== this.generation) break;
          try {
            const jB = BB(QB);
            if (void 0 !== jB) return jB
          } catch (zB) {
            this.JJ(zB)
          }
        }
      }
      Ly(BB, jB) {
        this.guard((() => {
          IB.n.Ly(BB, jB)
        }))
      }
      dropGameCamera() {
        try {
          this.scriptedCamera.reset()
        } catch (BB) {
          this.JJ(BB)
        }
      }
      restartGameCamera() {
        try {
          this.scriptedCamera.restart()
        } catch (BB) {
          this.JJ(BB)
        }
      }
      endSession() {
        if (!this.sessionLive) return;
        this.sessionLive = !1;
        const BB = this.owners;
        let jB;
        if (this.owners = this.tickers = this.renderers = this.receivers = [], this.generation++, !this.stopped()) try {
          this.writeAltVeto([]), this.writeHooks([]), this.writePublicLobby(!1), this.writeLocalDbId(null)
        } catch (QB) {
          jB = QB
        }
        try {
          this.entityInfo.sessionEnded()
        } catch (QB) {
          jB ??= QB
        }
        this.round(BB, TQ, !0);
        try {
          this.particles.sessionEnded() || this.onError(new Error("ParticleStopAll didn't fit the command ring"))
        } catch (QB) {
          jB ??= QB
        }
        try {
          this.clientApi.disposeGameOutput()
        } catch (QB) {
          jB ??= QB
        }
        const zB = this.options.onSessionEnd;
        if (zB) try {
          zB()
        } catch (QB) {
          this.onError(QB)
        }
        void 0 !== jB && this.JJ(jB)
      }
      round(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const QB = this.generation;
        for (const dB of BB) {
          if (QB !== this.generation) break;
          try {
            jB(dB)
          } catch (nB) {
            zB ? this.onError(nB) : this.JJ(nB)
          }
        }
      }
      guard(BB) {
        try {
          BB()
        } catch (jB) {
          this.JJ(jB)
        }
      }
    }

    function ZQ(BB) {
      return BB === JB.hd ? null : String(BB)
    }

    function AQ(BB) {
      BB.vp(rB.pd)
    }

    function TQ(BB) {
      var jB;
      null === (jB = BB.onClose) || void 0 === jB || jB.call(BB)
    }

    function PQ(BB, jB) {
      BB.watch((() => {
        const zB = function(BB) {
          const jB = [],
            zB = Math.min(nQ, BB.length);
          for (let nB = 0; nB < zB; nB++) {
            var QB;
            const zB = null === (QB = BB.slot(nB)) || void 0 === QB ? void 0 : QB.typeObj,
              dB = zB ? (0, zQ.gunTypeOf)(zB.id) : void 0;
            void 0 !== dB && jB.push(Lj[dB])
          }
          return jB
        }(BB);
        zB.length > 0 && (jB.preload(zB), jB.preload([gj]))
      }))
    }
    var WQ = zB(36514),
      eQ = zB(4950),
      lQ = zB(36830),
      wQ = zB(36864);

    function xQ(BB) {
      const jB = (0, WQ.countDecodesAs)(new eQ.Howl({
          ...(0, lQ.g)(BB),
          pool: 15,
          preload: !1
        }), "sheet"),
        zB = jB.load.bind(jB);
      return jB.load = () => (jB._preload = !0, (0, wQ.d)(BB), zB()), jB
    }

    function KQ(BB, jB, zB) {
      const QB = BB.listener;
      if (QB.positionX) CQ(QB.positionX, jB, zB, 0), CQ(QB.positionY, jB, zB, 1), CQ(QB.positionZ, jB, zB, 2), CQ(QB.forwardX, jB, zB, 3), CQ(QB.forwardY, jB, zB, 4), CQ(QB.forwardZ, jB, zB, 5), CQ(QB.upX, jB, zB, 6), CQ(QB.upY, jB, zB, 7), CQ(QB.upZ, jB, zB, 8);
      else {
        let BB = !1;
        for (let QB = 0; QB < 9; QB++) BB ||= jB[QB] !== zB[QB];
        BB && (QB.setPosition(jB[0], jB[1], jB[2]), QB.setOrientation(jB[3], jB[4], jB[5], jB[6], jB[7], jB[8]), zB.set(jB))
      }
    }

    function CQ(BB, jB, zB, QB) {
      jB[QB] !== zB[QB] && (BB.value = jB[QB], zB[QB] = jB[QB])
    }
    class cQ {
      constructor() {
        this.pose = new Float64Array(9), this.written = new Float64Array(9).fill(Number.NaN), this.watchedCtx = void 0
      }
      apply(BB) {
        this.pose.set(BB);
        const jB = eQ.Howler.ctx;
        return !!jB && (jB !== this.watchedCtx && (this.watchedCtx = jB, this.written.fill(Number.NaN), jB.addEventListener("statechange", (() => {
          "running" === jB.state && KQ(jB, this.pose, this.written)
        }))), "running" === jB.state && KQ(jB, BB, this.written), !0)
      }
    }
    var bQ = zB(36646),
      vQ = zB(39298);
    let RQ = null,
      OQ = null;

    function Bn() {
      return null === RQ && (RQ = document.createElement("div"), RQ.className = "WasmCameraLayer", RQ.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none", document.body.append(RQ)), RQ
    }

    function jn() {
      return OQ ??= new vQ.e(new bQ.b(Bn)), OQ
    }

    function zn() {
      var BB;
      null === (BB = OQ) || void 0 === BB || BB.clear(), Qn(null)
    }

    function Qn(BB) {
      QB.c.get("scriptedCameraFacing") !== BB && QB.c.set({
        scriptedCameraFacing: BB
      })
    }
    var nn = zB(9366),
      dn = zB(9311),
      In = zB(39330),
      Nn = zB(41123),
      un = zB(3402);
    const Un = Object.entries(JB.pc).reduce(((BB, jB) => {
      let [zB, QB] = jB;
      return BB[QB] = zB, BB
    }), []);

    function an(BB, jB) {
      var zB;
      return 0 !== ((null !== (zB = BB.itemFlags[jB]) && void 0 !== zB ? zB : 0) & JB.Pc.Stackable)
    }
    const pn = /^(0|[1-9][0-9]*)$/,
      rn = {
        displayName: (BB, jB) => (0, zQ.displayNameOf)(jB),
        description: (BB, jB) => (0, zQ.descriptionOf)(jB),
        type: (BB, jB) => (0, zQ.itemTypeOf)(jB),
        clipSize: (BB, jB) => (0, zQ.clipSizeOf)(jB),
        armourReduction: (BB, jB) => (0, zQ.armourReductionOf)(jB),
        scopeType: (BB, jB) => (0, zQ.scopeTypeOf)(jB),
        stackable: an,
        harvestType: (BB, jB) => Un[BB.blockHarvestTypes[jB]],
        harvestLevel: (BB, jB) => {
          const zB = BB.blockHarvestLevels[jB];
          return zB === JB.Uc ? void 0 : zB
        },
        harvests: (BB, jB) => {
          var zB;
          const QB = null !== (zB = BB.itemHarvests[jB]) && void 0 !== zB ? zB : 0;
          return 0 !== QB ? Un[QB] : void 0 === (0, zQ.harvestsNullLevelOf)(jB) ? void 0 : null
        },
        level: (BB, jB) => {
          var zB, QB;
          const nB = null !== (zB = BB.itemLevels[jB]) && void 0 !== zB ? zB : JB.Uc;
          return nB !== JB.Uc ? nB : null !== (QB = (0, zQ.harvestsNullLevelOf)(jB)) && void 0 !== QB ? QB : void 0
        }
      };

    function sn(BB, jB, zB) {
      return mn(new Uint8Array(Math.floor(BB.length / jB)), BB, jB, zB)
    }

    function Jn(BB, jB, zB) {
      return mn(new Uint16Array(Math.floor(BB.length / jB)), BB, jB, zB)
    }

    function mn(BB, jB, zB, QB) {
      const nB = new DataView(jB.buffer, jB.byteOffset, jB.byteLength);
      for (let dB = 0; dB < BB.length; dB++) BB[dB] = QB(nB, dB * zB);
      return BB
    }
    class yn {
      constructor(BB, jB) {
        this.options = jB, this.metas = [], this.types = new Map, this.props = void 0, this.rootIdOf = BB => {
          const jB = this.idOf(BB);
          if (void 0 === jB) throw new Error(`No item is named ${BB}, an item's root`);
          return jB
        };
        const zB = jB => {
            const zB = jB();
            return new Uint8Array(BB.memory().buffer, BB.scratch(), zB).slice()
          },
          QB = (new TextDecoder).decode(zB((() => BB.queries.itemNames()))).split("\n"),
          nB = zB((() => BB.queries.blockProps())),
          dB = zB((() => BB.queries.itemProps()));
        this.props = {
          blockFlags: sn(nB, JB.B.BYTES, JB.B.flags),
          blockHarvestTypes: sn(nB, JB.B.BYTES, JB.B.harvestType),
          blockHarvestLevels: sn(nB, JB.B.BYTES, JB.B.harvestLevel),
          blockAttachedTops: Jn(nB, JB.B.BYTES, JB.B.attachedTop),
          itemFlags: sn(dB, JB.Qc.BYTES, JB.Qc.flags),
          itemHarvests: sn(dB, JB.Qc.BYTES, JB.Qc.harvests),
          itemLevels: sn(dB, JB.Qc.BYTES, JB.Qc.level)
        }, (0, un.g)(Object.freeze(QB)), (0, Nn.f)()
      }
      idOf(BB) {
        if ("number" === typeof BB) return void 0 === (0, un.e)(BB) ? void 0 : BB;
        const jB = (0, un.c)(BB);
        return void 0 === jB && pn.test(BB) ? void 0 === (0, un.e)(+BB) ? void 0 : +BB : jB
      }
      getMetaInfo(BB) {
        if (!BB || BB === nn.b) return nn.e;
        const jB = this.idOf(BB);
        if (void 0 === jB) throw new Error(`Item ${BB} not found in registry`);
        return this.metaOf(jB)
      }
      blockRootId(BB) {
        return 0 !== BB && void 0 !== (0, un.e)(BB) ? this.metaOf(BB).rootId : BB
      }
      metaOf(BB) {
        return this.metas[BB] ??= (0, dn.p)((0, un.e)(BB), BB, this.rootIdOf, (0, zQ.rootMetaDescOf)(BB))
      }
      getItemId(BB) {
        if (!BB || BB === nn.b) return 0;
        const jB = this.idOf(BB);
        if (void 0 === jB) throw new Error(`Invalid block name. You sent ${BB}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
        return jB
      }
      getItemName(BB) {
        if (!BB || BB === nn.b) return nn.b;
        const jB = this.idOf(BB);
        if (void 0 === jB) throw new Error(`Item ${BB} not found in registry`);
        return (0, un.e)(jB)
      }
      blockNameToBlockId(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (BB === nn.b) return 0;
        let zB = this.idOf(BB);
        if (void 0 === zB || !this.isBlockId(zB)) {
          const jB = BB.indexOf("|"),
            QB = jB > 0 ? (0, un.c)(BB.slice(0, jB)) : void 0;
          zB = void 0 !== QB && this.isBlockId(QB) && (0, zQ.rootMetaDescOf)(QB) === BB ? QB : void 0
        }
        if (void 0 !== zB) return zB;
        if (!jB) throw new Error(`Invalid block name. You sent ${BB}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
        return null
      }
      isBlockId(BB) {
        return BB > 0 && BB < this.props.blockFlags.length
      }
      nameOfId(BB) {
        return 0 !== BB && (0, un.e)(BB) || nn.b
      }
      itemType(BB) {
        const jB = BB ? this.idOf(BB) : void 0;
        if (!jB) return null;
        let zB = this.types.get(jB);
        return void 0 === zB && (zB = Object.freeze({
          id: jB,
          name: (0, un.e)(jB),
          meta: this.getMetaInfo(jB),
          stackable: an(this.props, jB),
          type: (0, zQ.itemTypeNameOf)(jB),
          clipSize: (0, zQ.clipSizeOf)(jB),
          scopeType: (0, zQ.scopeTypeOf)(jB),
          showsAimingUi: (0, zQ.showsAimingUi)(jB)
        }), this.types.set(jB, zB)), zB
      }
      getItemStat(BB, jB) {
        if (In.e.has(jB)) {
          const zB = "minChargeStateToUse" === jB ? this.getMetaInfo(BB).rootName : this.getItemName(BB),
            QB = this.options.get((0, In.g)(zB, jB));
          if (null !== QB && void 0 !== QB) return QB
        }
        return this.defaultStat(BB, jB, this.statOf(jB))
      }
      getDisplayName(BB) {
        return this.getItemStat(BB, "displayName")
      }
      getDefaultItemStat(BB, jB) {
        return this.defaultStat(BB, jB, this.statOf(jB))
      }
      statOf(BB) {
        const jB = rn[BB];
        return void 0 === jB && function(BB, jB) {
          throw new Error(`ClientApi.${BB} is not available yet in the wasm client (${jB})`)
        }(`getItemStat("${BB}")`, `a table of the stat: the wasm client answers ${Object.keys(rn).join(", ")}`), jB
      }
      defaultStat(BB, jB, zB) {
        const QB = this.idOf(BB),
          nB = void 0 === QB ? void 0 : zB(this.props, QB);
        return null !== nB && void 0 !== nB || "displayName" !== jB ? nB : this.getItemName(BB)
      }
      getClientOption(BB) {
        return this.options.get(BB)
      }
      getGunStats(BB) {
        return this.getClientOption(`${BB}GunStats`)
      }
      watchClientOption(BB, jB) {
        return this.options.subscribe(BB, jB)
      }
      isSolidBlockId(BB) {
        var jB;
        return 0 !== ((null !== (jB = this.props.blockFlags[BB]) && void 0 !== jB ? jB : 0) & JB.z.Solid)
      }
      isStackableId(BB) {
        return an(this.props, BB)
      }
      isFluidBlockId(BB) {
        var jB;
        return 0 !== ((null !== (jB = this.props.blockFlags[BB]) && void 0 !== jB ? jB : 0) & JB.z.Fluid)
      }
      canPlaceOverBlockId(BB) {
        var jB;
        return 0 !== ((null !== (jB = this.props.blockFlags[BB]) && void 0 !== jB ? jB : 0) & JB.z.PlaceOver)
      }
      attachedTopOf(BB) {
        var jB;
        return null !== (jB = this.props.blockAttachedTops[BB]) && void 0 !== jB ? jB : 0
      }
      isDroplessBlockId(BB) {
        return (0, zQ.dropsNothing)(BB)
      }
    }

    function kn(BB, jB) {
      const zB = new Map;
      return (QB, nB) => {
        const dB = jB.idOf(QB),
          IB = void 0 === dB ? null : (QB => {
            let nB = zB.get(QB);
            if (void 0 === nB) {
              const dB = BB.queries.salvageRecipe(QB),
                IB = new DataView(BB.memory().buffer, BB.scratch(), dB),
                NB = [];
              for (let BB = 0; BB + JB.je.BYTES <= dB; BB += JB.je.BYTES) NB.push(Object.freeze({
                item: jB.nameOfId(JB.je.item(IB, BB)),
                amt: JB.je.amount(IB, BB)
              }));
              nB = 0 === NB.length ? null : Object.freeze(NB), zB.set(QB, nB)
            }
            return nB
          })(dB);
        if (null === IB || void 0 === nB) return IB;
        const NB = nB <= 0 ? 1 : nB;
        return IB.map((BB => {
          let {
            item: jB,
            amt: zB
          } = BB;
          return {
            item: jB,
            amt: zB * NB
          }
        }))
      }
    }
    var Gn = zB(40854),
      Ln = zB(37023),
      gn = zB(37007),
      tn = zB(37012),
      Sn = zB(36574),
      Mn = zB(40766),
      En = zB(42723);
    const qn = -1,
      fn = new Uint8Array(0),
      Hn = new TextEncoder;

    function Dn(BB) {
      if (null === BB) return null;
      const jB = Hn.encode(BB);
      return jB.byteLength < rB.Cc ? jB : jB.subarray(0, rB.Cc - 1)
    }
    class Fn {
      constructor(BB) {
        this.deps = BB, this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = qn, this.keyframesSettled = !1, this.reloadFrom = qn
      }
      reloadKeyframes() {
        var BB, jB;
        this.keyframesVersion = qn, this.reloadFrom = null !== (BB = null === (jB = this.view()) || void 0 === jB ? void 0 : jB.version) && void 0 !== BB ? BB : qn
      }
      setPlayback(BB) {
        const jB = 1 === this.deps.core.MnB(BB);
        return jB && (this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = qn, this.reloadFrom = qn), jB
      }
      async open(BB, jB) {
        const zB = await this.deps.replay.open(BB, jB);
        return "opening" === zB && (this.reloadKeyframes(), this.deps.recorder.prefetch()), zB
      }
      play() {
        this.deps.replay.play()
      }
      pause() {
        this.deps.replay.pause()
      }
      seek(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.deps.replay.seek(Math.max(0, Math.floor(BB)), jB)
      }
      setSpeed(BB) {
        this.deps.replay.setSpeed(BB)
      }
      setCameraMode(BB) {
        this.deps.replay.setCameraMode(En.b.indexOf(BB))
      }
      view() {
        var BB;
        const jB = JB.w.replayViewPtr(this.deps.apiView(), 0);
        if (0 === jB) return this.lastView = null, null;
        const zB = new DataView(this.deps.buffer(), jB, JB.$d.BYTES),
          QB = JB.$d.version(zB, 0),
          nB = this.lastView;
        if (null !== nB && nB.version === QB) return nB;
        const dB = JB.$d.markIn(zB, 0),
          IB = {
            version: QB,
            state: JB.$d.state(zB, 0),
            cameraMode: null !== (BB = En.b[JB.$d.cameraMode(zB, 0)]) && void 0 !== BB ? BB : "recording",
            vp: JB.$d.vp(zB, 0),
            totalTicks: JB.$d.totalTicks(zB, 0),
            speed: JB.$d.speed(zB, 0),
            mark: dB === JB._d ? null : {
              inTick: dB,
              outTick: JB.$d.markOut(zB, 0)
            },
            editVersion: JB.$d.editVersion(zB, 0)
          };
        return this.lastView = IB, IB
      }
      keyframes() {
        const BB = this.view();
        if (null === BB) return [];
        BB.version !== this.reloadFrom && (this.reloadFrom = qn);
        const jB = this.reloadFrom === qn && BB.state !== rB.gd.Cropping && BB.state !== rB.gd.None,
          zB = jB ? BB.editVersion : BB.version;
        if (zB === this.keyframesVersion && jB === this.keyframesSettled) return this.lastKeyframes;
        const {
          core: QB
        } = this.deps, nB = QB.EnB(), dB = QB.wy(), IB = [];
        if (0 !== dB && nB > 0) {
          const BB = new DataView(this.deps.buffer(), dB, nB * rB.rc);
          for (let jB = 0; jB < nB; jB++) {
            const zB = jB * rB.rc,
              QB = jB => BB.getFloat64(zB + jB, !0);
            IB.push({
              vp: BB.getUint32(zB + rB.Ac, !0),
              position: [QB(rB.xc), QB(rB.xc + 8), QB(rB.xc + 16)],
              direction: [QB(rB.tc), QB(rB.tc + 8), QB(rB.tc + 16)],
              easing: [QB(rB.uc), QB(rB.uc + 8), QB(rB.uc + 16), QB(rB.uc + 24)]
            })
          }
        }
        return this.keyframesVersion = zB, this.keyframesSettled = jB, this.lastKeyframes = IB, IB
      }
      addKeyframe() {
        const BB = this.deps.apiView(),
          jB = [JB.w.eye(BB, 0, 0), JB.w.eye(BB, 0, 1), JB.w.eye(BB, 0, 2)];
        return this.deps.replay.addKeyframe(jB, function(BB, jB) {
          const zB = Math.cos(jB);
          return [zB * Math.sin(BB), -Math.sin(jB), zB * Math.cos(BB)]
        }(JB.w.heading(BB, 0), JB.w.pitch(BB, 0)))
      }
      setKeyframe(BB) {
        return this.deps.replay.setKeyframe(BB.vp, Float64Array.from([...BB.position, ...BB.direction, ...BB.easing]))
      }
      moveKeyframe(BB, jB) {
        return this.deps.replay.moveKeyframe(BB, jB)
      }
      deleteKeyframes(BB, jB) {
        return this.deps.replay.deleteKeyframes(BB, jB)
      }
      setMark(BB) {
        var jB, zB;
        return this.deps.replay.setMark(null !== (jB = null === BB || void 0 === BB ? void 0 : BB.inTick) && void 0 !== jB ? jB : -1, null !== (zB = null === BB || void 0 === BB ? void 0 : BB.outTick) && void 0 !== zB ? zB : -1)
      }
      crop(BB, jB) {
        const zB = this.deps.replay.crop(BB, jB);
        return zB && this.reloadKeyframes(), zB
      }
      save(BB) {
        return this.deps.replay.askSave(), this.deps.recorder.saveEdited(BB)
      }
      recorderControl(BB) {
        this.deps.recorder.control(BB)
      }
      recorderPrefs(BB, jB) {
        this.deps.recorder.prefs(BB, jB)
      }
      recorderOption(BB, jB) {
        const zB = this.deps.cmd();
        return null !== zB && (0, JB.Uf)(zB, 0, BB, null === jB ? fn : Hn.encode(jB))
      }
      recordFlyingText(BB, jB, zB, QB) {
        const nB = this.deps.cmd(),
          dB = Math.max(0, Math.min(4294967295, Math.round(QB)));
        return null !== nB && (0, JB.Pf)(nB, 0, jB, zB, dB, Hn.encode(BB))
      }
      recordPlayerKilled(BB, jB, zB, QB) {
        const nB = this.deps.cmd();
        return null !== nB && (0, JB.Wf)(nB, 0, BB, jB, Math.max(0, zB), Hn.encode(QB))
      }
      recordKillfeed(BB, jB, zB) {
        var QB, nB;
        const dB = this.deps.cmd(),
          IB = function(BB) {
            const jB = BB.reduce(((BB, jB) => {
                var zB;
                return BB + Kz.eb + (null !== (zB = null === jB || void 0 === jB ? void 0 : jB.byteLength) && void 0 !== zB ? zB : 0)
              }), 0),
              zB = new Uint8Array(jB),
              QB = new DataView(zB.buffer);
            let nB = 0;
            for (const IB of BB) {
              var dB;
              QB.setUint16(nB, null !== (dB = null === IB || void 0 === IB ? void 0 : IB.byteLength) && void 0 !== dB ? dB : rB.Cc, !0), nB += Kz.eb, null !== IB && (zB.set(IB, nB), nB += IB.byteLength)
            }
            return zB
          }([Dn(BB.name), Dn(BB.colour), Dn(jB.name), Dn(jB.colour), Dn(zB)]);
        return null !== dB && (0, JB.Sf)(dB, 0, null !== (QB = BB.id) && void 0 !== QB ? QB : JB.kd, null !== (nB = jB.id) && void 0 !== nB ? nB : JB.kd, IB)
      }
      recorderSession(BB, jB) {
        this.deps.recorder.session({
          session: jB,
          lobbyType: BB.lobbyType,
          game: BB.gameNameWithVariation,
          lobby: BB.lobbyName
        })
      }
      recorderClose() {
        this.deps.core.qnB()
      }
      filePartDone(BB, jB) {
        this.deps.recorder.filePartDone(BB, jB)
      }
      fileDone(BB) {
        this.deps.recorder.fileDone(BB)
      }
    }
    const Yn = -2147483648;
    class Vn {
      constructor(BB) {
        var jB;
        this.deps = BB, this.state = {
          recording: !1,
          clipping: !1,
          hasClipBuffer: !1,
          seconds: 0
        }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (jB = BB.now) && void 0 !== jB ? jB : () => performance.now()
      }
      get current() {
        return this.state
      }
      get live() {
        var BB, jB, zB;
        return null === (BB = null === (jB = (zB = this.deps).live) || void 0 === jB ? void 0 : jB.call(zB)) || void 0 === BB || BB
      }
      activated(BB) {
        var jB, zB;
        this.live && (this.viewerShown(!0 === (null === (jB = (zB = this.deps).viewerOpen) || void 0 === jB ? void 0 : jB.call(zB))), this.deps.client.recorderSession(BB, (0, En.c)()))
      }
      closed() {
        this.deps.client.recorderClose()
      }
      toggleRecording() {
        var BB, jB;
        this.live && (this.state.recording || !0 !== (null === (BB = (jB = this.deps).viewerOpen) || void 0 === BB ? void 0 : BB.call(jB))) ? this.deps.client.recorderControl(rB.Rc.ToggleRecording) : this.deps.notify(tn.d.closeViewerFirst)
      }
      saveClip() {
        this.live ? this.deps.client.recorderControl(rB.Rc.SaveClip) : this.deps.notify(tn.d.clippingNotOn)
      }
      viewerShown(BB) {
        this.live && this.deps.client.recorderControl(BB ? rB.Rc.ViewerOpened : rB.Rc.ViewerClosed)
      }
      setPrefs(BB, jB) {
        this.live && this.deps.client.recorderPrefs(BB, jB)
      }
      setOption(BB, jB) {
        this.live && this.deps.client.recorderOption(BB, jB)
      }
      recordFlyingText(BB, jB, zB, QB) {
        this.live && this.deps.client.recordFlyingText(BB, jB, zB, QB)
      }
      recordPlayerKilled(BB, jB, zB, QB) {
        this.live && this.deps.client.recordPlayerKilled(BB, jB, zB, QB)
      }
      recordKillfeed(BB, jB, zB) {
        this.live && this.deps.client.recordKillfeed(BB, jB, zB)
      }
      vp() {
        let BB = this.state;
        if (this.clipTickPending && (this.clipTickPending = !1, BB = {
            ...BB,
            hasClipBuffer: !0
          }), null !== this.recordingSince) {
          const jB = Math.floor((this.now() - this.recordingSince) / 1e3);
          jB !== BB.seconds && (BB = {
            ...BB,
            seconds: jB
          })
        }
        this.set(BB)
      }
      onEvent(BB) {
        var jB, zB;
        const {
          notify: QB
        } = this.deps, nB = tn.d;
        switch (BB.what) {
          case rB.Qc.RecordingStarted:
            this.recordingSince = this.now(), this.set({
              ...this.state,
              recording: !0,
              seconds: 0
            }), QB(nB.recordingStarted);
            break;
          case rB.Qc.RecordingStopped:
            this.stopRecording(), QB(nB.recordingStopped), this.saveState(rB.$c.Recording, "saving");
            break;
          case rB.Qc.RecordingDiscarded:
            this.stopRecording(), QB(nB.recordingDiscarded);
            break;
          case rB.Qc.RecordingTurnedOff:
            this.stopRecording(), QB(nB.recordingTurnedOff);
            break;
          case rB.Qc.LimitReached:
            QB(nB.limitReached);
            break;
          case rB.Qc.ClipSaved:
            this.saveState(rB.$c.Clip, "saving");
            break;
          case rB.Qc.ClipEmpty:
            QB(nB.clipEmpty);
            break;
          case rB.Qc.ClippingNotOn:
            QB(nB.clippingNotOn);
            break;
          case rB.Qc.Disallowed:
            QB(nB.disallowed);
            break;
          case rB.Qc.ClippingOn:
            this.clipTickPending = !0, this.set({
              ...this.state,
              clipping: !0,
              hasClipBuffer: !1
            });
            break;
          case rB.Qc.ClippingOff:
            this.clipTickPending = !1, this.set({
              ...this.state,
              clipping: !1,
              hasClipBuffer: !1
            });
            break;
          case rB.Qc.ClipSettingsChanged:
            this.clipTickPending = this.state.clipping, this.set({
              ...this.state,
              hasClipBuffer: !1
            });
            break;
          case rB.Qc.SaveBusy:
            null === (jB = (zB = this.deps).onSaveState) || void 0 === jB || jB.call(zB, BB.kind, "busy"), QB(nB.saveBusy);
            break;
          case rB.Qc.CloseViewerFirst:
            QB(nB.closeViewerFirst)
        }
      }
      fileReady(BB, jB) {
        this.deps.download(jB), this.saveState(BB, "done"), this.deps.notify(BB === rB.$c.Clip ? tn.d.clipSaved : tn.d.recordingSaved)
      }
      failed(BB) {
        this.saveState(BB, "failed"), this.deps.notify(BB === rB.$c.Clip ? tn.d.clipFailed : tn.d.recordingFailed)
      }
      stopRecording() {
        this.recordingSince = null, this.set({
          ...this.state,
          recording: !1,
          seconds: 0
        })
      }
      saveState(BB, jB) {
        var zB, QB;
        null === (zB = (QB = this.deps).onSaveState) || void 0 === zB || zB.call(QB, BB, jB)
      }
      set(BB) {
        BB !== this.state && (this.state = BB, this.deps.onState(BB))
      }
    }
    const hn = new TextDecoder;

    function Xn(BB, jB, zB, QB) {
      const nB = [];
      for (let dB = 0; dB < QB; dB++) {
        if (jB + Kz.eb > zB) return null;
        const QB = BB.getUint16(jB, !0);
        if (jB += Kz.eb, QB !== rB.Cc) {
          if (jB + QB > zB) return null;
          nB.push(hn.decode(new Uint8Array(BB.buffer, BB.byteOffset + jB, QB))), jB += QB
        } else nB.push(null)
      }
      return jB === zB ? nB : null
    }

    function Zn(BB, jB) {
      let zB = new DataView(new ArrayBuffer(0)),
        QB = !0;
      const nB = {
        replayFailed: (jB, zB, QB) => {
          BB.replayFailed({
            reason: jB,
            code: zB,
            version: QB
          })
        },
        replayOption: (jB, nB, dB, IB) => {
          const NB = function(BB, jB, zB, QB) {
            switch (jB) {
              case rB.bd.Cleared:
                return 0 === QB ? null : void 0;
              case rB.bd.Text:
                return hn.decode(new Uint8Array(BB.buffer, BB.byteOffset + zB, QB));
              case rB.bd.Int:
                return QB === Int32Array.BYTES_PER_ELEMENT ? BB.getInt32(zB, !0) : void 0;
              case rB.bd.Double:
                return QB === Float64Array.BYTES_PER_ELEMENT ? BB.getFloat64(zB, !0) : void 0;
              default:
                return
            }
          }(zB, nB, dB, IB);
          void 0 !== NB ? BB.replayOption({
            key: jB,
            value: NB
          }) : QB = !1
        },
        replayUiEvent: (jB, nB, dB, IB, NB, uB) => {
          const UB = function(BB, jB, zB, QB, nB, dB, IB) {
            const NB = dB + IB;
            switch (jB) {
              case rB.fd.FlyingText: {
                const IB = Xn(BB, dB, NB, 1);
                return null !== IB && null !== IB[0] ? {
                  what: jB,
                  Kd: zB,
                  xd: QB,
                  angle: nB,
                  contentJson: IB[0]
                } : null
              }
              case rB.fd.PlayerKilled: {
                const QB = Xn(BB, dB, NB, 3);
                return QB ? {
                  what: jB,
                  killstreak: zB,
                  dead: QB[0],
                  killer: QB[1],
                  withItem: QB[2]
                } : null
              }
              case rB.fd.Killfeed: {
                const zB = Xn(BB, dB, NB, 7);
                return zB ? {
                  what: jB,
                  killerId: zB[0],
                  killerName: zB[1],
                  killerColour: zB[2],
                  victimId: zB[3],
                  victimName: zB[4],
                  victimColour: zB[5],
                  withItem: zB[6]
                } : null
              }
              default:
                return null
            }
          }(zB, jB, nB, dB, IB, NB, uB);
          null !== UB ? BB.replayUiEvent(UB) : QB = !1
        },
        replayFilePart: (zB, nB, dB, IB) => {
          const NB = jB();
          dB + IB > NB.byteLength ? QB = !1 : BB.filePart(zB, nB, new Uint8Array(NB, dB, IB).slice())
        },
        replayFileReady: (jB, zB, QB, nB) => {
          BB.fileReady({
            save: jB,
            kind: zB,
            parts: QB,
            bytes: nB
          })
        },
        recorderEvent: (jB, zB, QB) => {
          BB.recorderEvent({
            what: jB,
            kind: zB,
            save: QB
          })
        },
        replayOpened: (jB, QB, nB) => {
          BB.replayOpened(hn.decode(new Uint8Array(zB.buffer, zB.byteOffset + QB, nB)))
        }
      };
      return (BB, jB, dB, IB) => !(BB < rB.U.ReplayFailed || BB > rB.U.RecorderEvent) && (zB = jB, QB = !0, (0, JB.ye)(BB, jB, dB, IB, nB) && QB)
    }

    function An(BB) {
      let jB = null;
      const zB = Zn(BB, (() => {
        if (null === jB) throw new Error("a recorder event read outside recorderEventReader's call");
        return jB.buffer
      }));
      return (BB, QB) => {
        jB = QB;
        try {
          ! function(BB, jB) {
            const zB = BB.slice(),
              QB = new DataView(zB.buffer);
            for (let nB = 0; nB < zB.byteLength;) {
              if (nB + rB.Q > zB.byteLength) throw new Error(`the recorder module's events end mid-head at ${nB}`);
              const BB = QB.getUint32(nB, !0),
                dB = 65535 & BB,
                IB = BB >>> 16,
                NB = nB + rB.Q;
              if (NB + IB > zB.byteLength || !jB(dB, QB, NB, IB)) throw new Error(`the recorder module wrote a malformed event ${dB} (${IB} bytes) at ${nB}`);
              nB = NB + (0, rB.ie)(IB)
            }
          }(BB, zB)
        } finally {
          jB = null
        }
      }
    }
    class Tn {
      constructor(BB, jB) {
        this.acks = BB, this.handlers = jB, this.parts = new Map
      }
      onPart(BB, jB, zB) {
        let QB = this.parts.get(BB);
        QB || (QB = [], this.parts.set(BB, QB)), QB[jB] = zB, this.acks.filePartDone(BB, jB)
      }
      onReady(BB) {
        var jB;
        const zB = null !== (jB = this.parts.get(BB.save)) && void 0 !== jB ? jB : [];
        this.parts.delete(BB.save);
        const QB = function(BB, jB, zB) {
          if (BB.length !== jB) return null;
          let QB = 0;
          for (let IB = 0; IB < jB; IB++) {
            if (void 0 === BB[IB]) return null;
            QB += BB[IB].byteLength
          }
          if (QB !== zB) return null;
          if (1 === jB) return BB[0];
          const nB = new Uint8Array(zB);
          let dB = 0;
          for (const IB of BB) nB.set(IB, dB), dB += IB.byteLength;
          return nB
        }(zB, BB.parts, BB.bytes);
        this.acks.fileDone(BB.save), null === QB ? this.handlers.fileIncomplete(BB.save, BB.kind) : this.handlers.fileReady(BB.save, BB.kind, QB)
      }
      onDiscarded(BB) {
        this.parts.delete(BB)
      }
    }

    function Pn() {
      return zB.e(61).then((() => zB(60764)))
    }
    class Wn {
      constructor(BB) {
        this.deps = BB, this.sink = void 0, this.recorder = void 0, this.recorderEvents = void 0, this.parts = void 0, this.viewerChunk = null, this.viewer = null;
        const {
          client: jB
        } = BB;
        this.recorder = new Vn({
          client: jB,
          live: () => {
            var BB;
            return !0 !== (null === (BB = this.viewer) || void 0 === BB ? void 0 : BB.inPlayback)
          },
          viewerOpen: BB.viewerOpen,
          notify: BB.notify,
          download: jB => {
            var zB;
            null === (zB = BB.download) || void 0 === zB || zB.call(BB, jB)
          },
          onState: BB.onRecorderState,
          onSaveState: BB.onSaveState
        }), this.parts = new Tn(jB, {
          fileReady: (BB, jB, zB) => {
            var QB;
            jB === rB.$c.Edited ? null === (QB = this.viewer) || void 0 === QB || QB.saveDone(zB) : this.recorder.fileReady(jB, zB)
          },
          fileIncomplete: (BB, jB) => {
            this.saveFailed(jB)
          }
        });
        const zB = {
          replayFailed: BB => {
            var jB;
            null === (jB = this.viewer) || void 0 === jB || jB.onFailed(BB)
          },
          replayOption: jB => {
            var zB;
            null === (zB = BB.onReplayOption) || void 0 === zB || zB.call(BB, jB)
          },
          replayUiEvent: jB => {
            var zB;
            null === (zB = BB.onReplayUiEvent) || void 0 === zB || zB.call(BB, jB)
          },
          filePart: (BB, jB, zB) => {
            this.parts.onPart(BB, jB, zB)
          },
          fileReady: BB => {
            this.parts.onReady(BB)
          },
          replayOpened: jB => {
            var zB;
            null === (zB = BB.onReplayOpened) || void 0 === zB || zB.call(BB, jB)
          },
          recorderEvent: BB => {
            var jB;
            switch (BB.what) {
              case rB.Qc.FileDiscarded:
                this.parts.onDiscarded(BB.save);
                break;
              case rB.Qc.SaveFailed:
                this.saveFailed(BB.kind);
                break;
              case rB.Qc.SaveBusy:
                if (null !== (jB = this.viewer) && void 0 !== jB && jB.savePending) {
                  this.viewer.saveFailed(!0);
                  break
                }
                this.recorder.onEvent(BB);
                break;
              default:
                this.recorder.onEvent(BB)
            }
          }
        };
        this.sink = function(BB, jB) {
          return {
            onReplayEvent: Zn(BB, jB)
          }
        }(zB, BB.buffer), this.recorderEvents = An(zB)
      }
      get currentViewer() {
        return this.viewer
      }
      loadViewer() {
        var BB;
        return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (BB = this.deps.loadViewer) && void 0 !== BB ? BB : Pn)().catch((BB => {
          throw this.viewerChunk = null, BB
        })), this.viewerChunk.then((BB => (this.viewer ??= new BB.ReplayViewer({
          client: this.deps.client,
          setHoldDraws: this.deps.setHoldDraws,
          meshPending: this.deps.meshPending,
          notify: this.deps.notify,
          onChange: () => {
            var BB, jB;
            null === (BB = (jB = this.deps).onViewerChange) || void 0 === BB || BB.call(jB)
          }
        }), this.viewer))))
      }
      activated(BB) {
        this.recorder.activated(BB)
      }
      afterFrame(BB) {
        try {
          BB > 0 && this.recorder.vp()
        } finally {
          var jB;
          null === (jB = this.viewer) || void 0 === jB || jB.afterFrame()
        }
      }
      end() {
        var BB;
        null === (BB = this.viewer) || void 0 === BB || BB.end()
      }
      saveFailed(BB) {
        var jB;
        BB === rB.$c.Edited ? null === (jB = this.viewer) || void 0 === jB || jB.saveFailed(!1) : this.recorder.failed(BB)
      }
    }
    var en = zB(40713),
      wn = zB(40725),
      xn = zB(4897),
      Kn = zB(41e3);
    class Cn {
      constructor(BB) {
        this.deps = BB, this.analogue = [0, 0], this.keys = 0, this.unsent = !1
      }
      drag(BB, jB) {
        if (!this.deps.live() || 0 === BB && 0 === jB) return;
        const zB = (0, ZB.r)(0, performance.now()),
          QB = this.deps.dragScale();
        (0, Kn.i)((() => {
          (0, ZB.w)(rB.pb.MouseDown, 0, 0, 0, zB), (0, ZB.w)(rB.pb.MouseMove, 0, BB * QB, jB * QB, 0), (0, ZB.w)(rB.pb.MouseUp, 0, 0, 0, zB)
        }))
      }
      move(BB) {
        var jB, zB;
        this.analogue[0] = null !== (jB = null === BB || void 0 === BB ? void 0 : BB.x) && void 0 !== jB ? jB : 0, this.analogue[1] = null !== (zB = null === BB || void 0 === BB ? void 0 : BB.y) && void 0 !== zB ? zB : 0, this.send()
      }
      holdVertical(BB, jB) {
        const zB = "freeCamUp" === BB ? JB.ec.Up : JB.ec.Down;
        this.keys = jB ? this.keys | zB : this.keys & ~zB, this.send()
      }
      flush() {
        this.unsent && this.send()
      }
      send() {
        const BB = this.deps.live() ? this.deps.cmd() : null;
        this.unsent = null !== BB && !(0, JB.Qe)(BB, 0, this.analogue, this.keys)
      }
    }
    var cn = zB(3665),
      bn = zB(777),
      vn = zB(297),
      Rn = zB(106),
      On = zB(34176),
      Bd = zB(761),
      jd = zB(36668);

    function zd() {
      const BB = QB.c.get("clientEscMenuOptions"),
        jB = (0, bn.m)(BB);
      return {
        mouse: (0, Rn.isMobile)() ? jB : BB.mouseSensitivity,
        touch: jB,
        fovPercent: BB.cameraFOV
      }
    }

    function Qd() {
      const BB = QB.c.get("clientEscMenuOptions"),
        jB = QB.c.get("isTouchScreen") ? (0, bn.m)(BB) : BB.mouseSensitivity,
        zB = zd().mouse;
      return zB > 0 ? jB / zB : 1
    }

    function nd(BB) {
      const jB = () => {
        BB.setSoundPrefs(QB.c.get("soundVolume"), QB.c.get("soundOnFromAd"))
      };
      let zB = null;
      const nB = () => {
        const {
          showFog: jB,
          enableLighting: nB,
          fogChunkDistance: dB,
          chunkFadeIn: IB
        } = QB.c.get("clientEscMenuOptions"), NB = {
          showFog: jB,
          lighting: nB,
          fogChunks: dB,
          chunkFade: IB,
          cellLight: (0, cn.l)("cellLight") ? (0, cn.l)("cellLightUnlit") ? "all" : "lit" : "off"
        };
        zB && (0, rB.Sd)(zB) === (0, rB.Sd)(NB) && zB.fogChunks === dB || (zB = NB, BB.setEnvPrefs(zB))
      };
      let dB = null;
      const NB = () => {
        const jB = function() {
          const BB = QB.c.get("clientEscMenuOptions");
          return {
            nametagsHidden: QB.c.get("areNametagsHidden"),
            crouchToggle: BB.crouchIsToggle,
            bhopDisabled: BB.disableBunnyHopping,
            disableBobbing: BB.disableBobbing,
            ezTowering: BB.ezTowering ? (0, vn.e)() : null,
            ezBridging: BB.ezBridging,
            showChunkBorders: BB.showChunkBorders,
            touchWalk: !(0, jd.e)(),
            edgeGuard: BB.touchEdgeGuard,
            edgeGuardLong: (0, Bd.d)(),
            nametagCutDistance: (0, On.i)()
          }
        }();
        (0, qB.se)(dB, jB) || (dB = jB, BB.setUiPrefs(jB))
      };
      let uB = null;
      const UB = () => {
        const jB = zd();
        (0, qB.se)(uB, jB) || (uB = jB, BB.setLookPrefs(jB))
      };
      jB(), nB(), NB(), UB();
      const aB = [(0, IB.q)("appManagerUpdated|soundVolume", jB), (0, IB.q)("appManagerUpdated|soundOnFromAd", jB), (0, IB.q)("appManagerUpdated|clientEscMenuOptions", (() => {
        nB(), NB(), UB()
      })), (0, IB.q)(jd.d, NB), (0, IB.q)("appManagerUpdated|enabledDebugFeatures", nB), (0, IB.q)("appManagerUpdated|areNametagsHidden", NB), (0, IB.q)("appManagerUpdated|showDistantNametags", NB)];
      return () => {
        for (const BB of aB) BB()
      }
    }
    var dd = zB(40974),
      Id = zB(40977);
    var Nd = (0, Id.b)("lend"),
      ud = (0, Id.b)("starting"),
      Ud = (0, Id.b)("generation"),
      pd = (0, Id.b)("end");
    class rd {
      constructor(BB) {
        this.deps = BB, Object.defineProperty(this, pd, {
          value: sd
        }), Object.defineProperty(this, Nd, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ud, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Ud, {
          writable: !0,
          value: 0
        })
      }
      get active() {
        return null !== (0, dd.d)(this, Nd)[Nd] || (0, dd.d)(this, ud)[ud]
      }
      async start(BB) {
        if (this.active) return "busy";
        const jB = (0, dd.d)(this, Ud)[Ud];
        (0, dd.d)(this, ud)[ud] = !0;
        try {
          if (!await this.deps.ensureLoaded()) return "refused"
        } finally {
          (0, dd.d)(this, ud)[ud] = !1
        }
        if (jB !== (0, dd.d)(this, Ud)[Ud]) return "refused";
        const zB = this.deps.beginSave();
        if (!zB) return "refused";
        const QB = Number(BigInt.asUintN(32, BB)),
          nB = Number(BigInt.asUintN(32, BB >> 32n));
        let dB = "refused";
        return this.deps.recorderCall(((BB, jB) => {
          const IB = zB.editState,
            NB = BB.stage(IB.length);
          0 !== NB ? (new Uint8Array(jB.buffer, NB, IB.length).set(IB), BB.fnB(zB.headLen, QB, nB) && (dB = "sealing")) : dB = "tooLarge"
        }), !0), "sealing" !== dB ? (zB.end(), dB) : ((0, dd.d)(this, Nd)[Nd] = zB, "sealing")
      }
      beforeRecorderStep() {
        const BB = (0, dd.d)(this, Nd)[Nd];
        if (!BB) return null;
        let jB = -1,
          zB = 0;
        if (!this.deps.recorderCall((BB => {
            jB = BB.onB(), jB > 0 && (zB = BB.HnB())
          }))) return (0, dd.d)(this, pd)[pd](BB, "stopped");
        if (jB < 0) return (0, dd.d)(this, pd)[pd](BB, "read");
        if (0 === jB) return null;
        const QB = BB.head(zB, jB);
        let nB = !1;
        if (QB && this.deps.recorderCall(((BB, zB) => {
            const dB = BB.stage(jB);
            0 !== dB && (new Uint8Array(zB.buffer, dB, jB).set(QB), nB = !0)
          }), !0), nB) return null;
        const dB = BB.givenUp();
        this.deps.recorderCall((BB => {
          BB.DnB()
        }));
        const IB = (0, dd.d)(this, pd)[pd](BB, dB ? "givenUp" : "stopped");
        return dB && this.deps.givenUp("Reopen the replay you were editing to make your edits again, as they weren't saved when another replay opened."), IB
      }
      stop() {
        (0, dd.d)(this, Ud)[Ud]++;
        const BB = (0, dd.d)(this, Nd)[Nd];
        BB && (this.deps.recorderCall((BB => {
          BB.DnB()
        })), (0, dd.d)(this, pd)[pd](BB, "stopped"))
      }
    }

    function sd(BB, jB) {
      return (0, dd.d)(this, Nd)[Nd] = null, BB.end(), jB
    }

    function Jd(BB, jB) {
      const zB = new Uint8Array(4),
        QB = new DataView(zB.buffer);
      return QB.setUint8(0, BB ? 1 : 0), QB.setUint16(2, Math.max(0, Math.min(65535, Math.round(jB))), !0), zB
    }

    function md(BB, jB) {
      return BB > function(BB) {
        return 16777216 + 314572.8 * Math.max(0, BB)
      }(jB) + 33554432
    }
    let yd = null;

    function kd(BB) {
      return yd ??= async function(BB) {
        const jB = BB.loadInFlight();
        jB && await jB.catch((() => {}));
        if (BB.trapped()) return "trapped";
        if (BB.busy() || !md(BB.memoryBytes(), BB.clipSeconds())) return "Cs";
        BB.unload();
        let zB = !1;
        try {
          zB = await BB.load()
        } catch {
          zB = !1
        }
        if (!zB) return BB.trapped() ? "trapped" : BB.HJ() ? "HJ" : "failed";
        return "recycled"
      }(BB).finally((() => {
        yd = null
      })), yd
    }
    const Gd = "Replay recording couldn't load, so try again.",
      Ld = new Set([rB.Rc.ToggleRecording, rB.Rc.SaveClip]);
    var gd = (0, Id.b)("bindings"),
      td = (0, Id.b)("module"),
      Sd = (0, Id.b)("memory"),
      Md = (0, Id.b)("trapped"),
      Ed = (0, Id.b)("HJ"),
      qd = (0, Id.b)("recycleDue"),
      fd = (0, Id.b)("loading"),
      od = (0, Id.b)("generation"),
      Hd = (0, Id.b)("viewDrawn"),
      Dd = (0, Id.b)("clip"),
      Fd = (0, Id.b)("session"),
      Yd = (0, Id.b)("control"),
      Vd = (0, Id.b)("deferred"),
      hd = (0, Id.b)("coreU8"),
      Xd = (0, Id.b)("coreU32"),
      Zd = (0, Id.b)("moduleU8"),
      Ad = (0, Id.b)("edited"),
      Td = (0, Id.b)("sendSession"),
      Pd = (0, Id.b)("checkNotInEvents"),
      Wd = (0, Id.b)("clipping"),
      ed = (0, Id.b)("busy"),
      ld = (0, Id.b)("use"),
      wd = (0, Id.b)("ensureLoaded"),
      xd = (0, Id.b)("loadOnce"),
      Kd = (0, Id.b)("recycleAfterStep"),
      Cd = (0, Id.b)("settleRecycle"),
      cd = (0, Id.b)("load"),
      bd = (0, Id.b)("attach"),
      vd = (0, Id.b)("resendHeld"),
      Rd = (0, Id.b)("recycle"),
      Od = (0, Id.b)("send"),
      BI = (0, Id.b)("unload"),
      jI = (0, Id.b)("dropModule"),
      zI = (0, Id.b)("coreBytes"),
      QI = (0, Id.b)("coreWords"),
      nI = (0, Id.b)("moduleBytes"),
      dI = (0, Id.b)("loadFailed"),
      II = (0, Id.b)("call"),
      NI = (0, Id.b)("guard"),
      uI = (0, Id.b)("trapOn");
    class UI {
      constructor(BB) {
        this.deps = BB, Object.defineProperty(this, uI, {
          value: YI
        }), Object.defineProperty(this, NI, {
          value: FI
        }), Object.defineProperty(this, II, {
          value: DI
        }), Object.defineProperty(this, dI, {
          value: HI
        }), Object.defineProperty(this, nI, {
          value: oI
        }), Object.defineProperty(this, QI, {
          value: fI
        }), Object.defineProperty(this, zI, {
          value: qI
        }), Object.defineProperty(this, jI, {
          value: iI
        }), Object.defineProperty(this, BI, {
          value: EI
        }), Object.defineProperty(this, Od, {
          value: MI
        }), Object.defineProperty(this, Rd, {
          value: SI
        }), Object.defineProperty(this, vd, {
          value: tI
        }), Object.defineProperty(this, bd, {
          value: gI
        }), Object.defineProperty(this, cd, {
          value: LI
        }), Object.defineProperty(this, Cd, {
          value: GI
        }), Object.defineProperty(this, Kd, {
          value: kI
        }), Object.defineProperty(this, xd, {
          value: yI
        }), Object.defineProperty(this, wd, {
          value: mI
        }), Object.defineProperty(this, ld, {
          value: JI
        }), Object.defineProperty(this, ed, {
          value: sI
        }), Object.defineProperty(this, Wd, {
          value: rI
        }), Object.defineProperty(this, Pd, {
          value: pI
        }), Object.defineProperty(this, Td, {
          value: aI
        }), Object.defineProperty(this, gd, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, td, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Sd, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Md, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Ed, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, qd, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, fd, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, od, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, Hd, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Dd, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Fd, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Yd, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Vd, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, hd, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Xd, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Zd, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Ad, {
          writable: !0,
          value: void 0
        }), (0, dd.d)(this, Ad)[Ad] = new rd({
          ensureLoaded: () => (0, dd.d)(this, wd)[wd](),
          recorderCall: (BB, jB) => {
            jB && (0, dd.d)(this, Pd)[Pd]("an edited save's stage");
            const zB = (0, dd.d)(this, II)[II](((jB, zB) => (BB(jB, zB), !0)));
            return null !== zB && void 0 !== zB && zB
          },
          beginSave: BB.beginSave,
          givenUp: BB.givenUp
        })
      }
      get active() {
        return null !== (0, dd.d)(this, td)[td]
      }
      get trapped() {
        return (0, dd.d)(this, Md)[Md]
      }
      get loading() {
        return null !== (0, dd.d)(this, fd)[fd]
      }
      prefetch() {
        (0, dd.d)(this, Ed)[Ed] || (0, dd.d)(this, Md)[Md] || (0, dd.d)(this, td)[td] || (0, dd.d)(this, fd)[fd] || this.deps.prefetch()
      }
      viewDrawn() {
        (0, dd.d)(this, Hd)[Hd] = !0, (0, dd.d)(this, Wd)[Wd]() && (0, dd.d)(this, ld)[ld]()
      }
      prefs(BB, jB) {
        (0, dd.d)(this, Dd)[Dd] = {
          on: BB,
          seconds: jB
        }, (0, dd.d)(this, Od)[Od](rB.Oc.Prefs, Jd(BB, jB)), BB && (0, dd.d)(this, Hd)[Hd] && (0, dd.d)(this, ld)[ld]()
      }
      control(BB) {
        const jB = function(BB) {
          return new Uint8Array([BB, 0, 0, 0])
        }(BB);
        if (Ld.has(BB)) return (0, dd.d)(this, td)[td] ? void(0, dd.d)(this, Od)[Od](rB.Oc.Control, jB) : ((0, dd.d)(this, Yd)[Yd] = jB, void(0, dd.d)(this, ld)[ld]());
        (0, dd.d)(this, Ed)[Ed] || this.deps.coreCommand(rB.Oc.Control, jB)
      }
      session(BB) {
        (0, dd.d)(this, Fd)[Fd] = BB, (0, dd.d)(this, Td)[Td](BB)
      }
      filePartDone(BB, jB) {
        (0, dd.d)(this, Od)[Od](rB.Oc.FilePartDone, function(BB, jB) {
          const zB = new Uint8Array(8),
            QB = new DataView(zB.buffer);
          return QB.setUint32(0, BB, !0), QB.setUint32(4, jB, !0), zB
        }(BB, jB))
      }
      fileDone(BB) {
        return (0, dd.d)(this, Od)[Od](rB.Oc.FileDone, function(BB) {
          const jB = new Uint8Array(4);
          return new DataView(jB.buffer).setUint32(0, BB, !0), jB
        }(BB)), (0, dd.d)(this, Kd)[Kd]()
      }
      saveEdited(BB) {
        return (0, dd.d)(this, Pd)[Pd]("saveEdited"), (0, dd.d)(this, Ad)[Ad].start(BB)
      }
      afterFrame() {
        if (!(0, dd.d)(this, td)[td]) return;
        "read" === (0, dd.d)(this, Ad)[Ad].beforeRecorderStep() && (0, dd.d)(this, Kd)[Kd]();
        const BB = (0, dd.d)(this, qd)[qd];
        (0, dd.d)(this, qd)[qd] = null;
        const jB = (0, dd.d)(this, td)[td],
          zB = (0, dd.d)(this, Sd)[Sd];
        if (!jB || !zB) return void(null === BB || void 0 === BB || BB.resolve((0, dd.d)(this, Md)[Md] ? "trapped" : "Cs"));
        const {
          core: QB
        } = this.deps, nB = QB.VnB(2);
        let dB, IB, NB, uB, UB = 0,
          aB = 0;
        if (0 !== nB) {
          var pB, rB;
          const BB = (0, dd.d)(this, QI)[QI]();
          UB = null !== (pB = BB[nB >>> 2]) && void 0 !== pB ? pB : 0, aB = null !== (rB = BB[1 + (nB >>> 2)]) && void 0 !== rB ? rB : 0
        }
        try {
          if (aB > 0) {
            const BB = jB.feed(aB);
            0 !== BB && (0, dd.d)(this, nI)[nI](zB).set((0, dd.d)(this, zI)[zI]().subarray(UB, UB + aB), BB)
          }
          dB = jB.step(), IB = jB.hnB(), NB = jB.XnB(), uB = jB.ZnB()
        } catch (sB) {
          if (!(0, dd.d)(this, uI)[uI](sB)) throw null === BB || void 0 === BB || BB.resolve("Cs"), sB;
          return void(null === BB || void 0 === BB || BB.resolve("trapped"))
        }
        if (dB > 0) {
          const BB = QB.AnB(2, dB);
          0 !== BB && (0, dd.d)(this, zI)[zI]().set((0, dd.d)(this, nI)[nI](zB).subarray(IB, IB + dB), BB)
        }
        if (NB > 0) {
          (0, dd.d)(this, Vd)[Vd] = [];
          try {
            this.deps.events(new Uint8Array(zB.buffer, uB, NB), zB)
          } catch (sB) {
            throw null === BB || void 0 === BB || BB.resolve("Cs"), sB
          } finally {
            const BB = (0, dd.d)(this, Vd)[Vd];
            (0, dd.d)(this, Vd)[Vd] = null;
            for (const [jB, zB] of BB)(0, dd.d)(this, Od)[Od](jB, zB)
          }
        }
        if (!(0, dd.d)(this, Wd)[Wd]() && !(0, dd.d)(this, ed)[ed]()) return (0, dd.d)(this, BI)[BI](), void(null === BB || void 0 === BB || BB.resolve("Cs"));
        null === BB || void 0 === BB || BB.resolve((0, dd.d)(this, Rd)[Rd]())
      }
      dispose() {
        (0, dd.d)(this, Ed)[Ed] = !0, (0, dd.d)(this, BI)[BI]()
      }
    }

    function aI(BB) {
      (0, dd.d)(this, Od)[Od](rB.Oc.Session, function(BB) {
        const jB = new TextEncoder,
          zB = jB.encode(BB.game).subarray(0, 65535),
          QB = jB.encode(BB.lobby).subarray(0, 65535),
          nB = new Uint8Array(22 + zB.length + 2 + QB.length),
          dB = new DataView(nB.buffer);
        dB.setFloat64(0, BB.unixMs, !0), dB.setBigUint64(8, BigInt.asUintN(64, BB.session), !0), dB.setUint8(16, BB.lobbyType);
        let IB = 20;
        for (const NB of [zB, QB]) dB.setUint16(IB, NB.length, !0), nB.set(NB, IB + 2), IB += 2 + NB.length;
        return nB
      }({
        ...BB,
        unixMs: this.deps.unixNow()
      }))
    }

    function pI(BB) {
      false
    }

    function rI() {
      var BB, jB;
      return null !== (BB = null === (jB = (0, dd.d)(this, Dd)[Dd]) || void 0 === jB ? void 0 : jB.on) && void 0 !== BB && BB
    }

    function sI() {
      const BB = (0, dd.d)(this, td)[td];
      let jB = !0;
      if (BB) try {
        jB = BB.busy()
      } catch (zB) {
        if (!(0, dd.d)(this, uI)[uI](zB)) throw zB
      }
      return jB || (0, dd.d)(this, Ad)[Ad].active
    }
    async function JI() {
      !(0, dd.d)(this, Ed)[Ed] && this.deps.allowed() ? await (0, dd.d)(this, wd)[wd]() : (0, dd.d)(this, Yd)[Yd] = null
    }

    function mI() {
      return (0, dd.d)(this, Md)[Md] || (0, dd.d)(this, Ed)[Ed] ? Promise.resolve(!1) : (0, dd.d)(this, td)[td] ? Promise.resolve(!0) : ((0, dd.d)(this, fd)[fd] ??= (0, dd.d)(this, xd)[xd](), (0, dd.d)(this, fd)[fd])
    }
    async function yI() {
      let BB = !1;
      try {
        return BB = await (0, dd.d)(this, cd)[cd](), BB
      } finally {
        BB || ((0, dd.d)(this, Yd)[Yd] = null), (0, dd.d)(this, fd)[fd] = null
      }
    }

    function kI() {
      if (!(0, dd.d)(this, td)[td]) return Promise.resolve((0, dd.d)(this, Md)[Md] ? "trapped" : "Cs");
      if (!(0, dd.d)(this, qd)[qd]) {
        let BB = () => {};
        const jB = new Promise((jB => {
          BB = jB
        }));
        (0, dd.d)(this, qd)[qd] = {
          promise: jB,
          resolve: BB
        }
      }
      return (0, dd.d)(this, qd)[qd].promise
    }

    function GI(BB) {
      const jB = (0, dd.d)(this, qd)[qd];
      (0, dd.d)(this, qd)[qd] = null, null === jB || void 0 === jB || jB.resolve(BB)
    }
    async function LI() {
      let BB = (0, dd.d)(this, gd)[gd];
      if (!BB) {
        const jB = (0, dd.d)(this, od)[od];
        try {
          BB = await this.deps.load()
        } catch (zB) {
          return jB === (0, dd.d)(this, od)[od] && await (0, dd.d)(this, dI)[dI](zB), !1
        }
        if (jB !== (0, dd.d)(this, od)[od]) return this.deps.unload(), !1;
        const QB = BB,
          nB = (0, dd.d)(this, NI)[NI]((() => QB.TnB()));
        if (void 0 === nB) return !1;
        const dB = this.deps.core.PnB();
        if (nB !== dB) return await (0, dd.d)(this, dI)[dI](new Error(`recorder port version ${nB}, the core's ${dB}`)), !1;
        (0, dd.d)(this, gd)[gd] = BB
      }
      const jB = BB;
      try {
        if (!(0, dd.d)(this, NI)[NI]((() => ((0, dd.d)(this, td)[td] = new jB.WnB, (0, dd.d)(this, Sd)[Sd] = jB.FnB(), !0)))) return !1;
        (0, dd.d)(this, vd)[vd]();
        const BB = (0, dd.d)(this, Yd)[Yd];
        return (0, dd.d)(this, Yd)[Yd] = null, BB && (0, dd.d)(this, Od)[Od](rB.Oc.Control, BB), (0, dd.d)(this, bd)[bd]()
      } catch (zB) {
        return (0, dd.d)(this, BI)[BI](), await (0, dd.d)(this, dI)[dI](zB), !1
      }
    }

    function gI() {
      return this.deps.core.enB(0), 1 === this.deps.core.enB(1) || ((0, dd.d)(this, BI)[BI](), this.deps.failed(Gd), !1)
    }

    function tI() {
      (0, dd.d)(this, Dd)[Dd] && (0, dd.d)(this, Od)[Od](rB.Oc.Prefs, Jd((0, dd.d)(this, Dd)[Dd].on, (0, dd.d)(this, Dd)[Dd].seconds)), (0, dd.d)(this, Fd)[Fd] && (0, dd.d)(this, Td)[Td]((0, dd.d)(this, Fd)[Fd])
    }

    function SI() {
      return kd({
        memoryBytes: this.deps.memoryBytes,
        clipSeconds: () => {
          var BB, jB;
          return null !== (BB = null === (jB = (0, dd.d)(this, Dd)[Dd]) || void 0 === jB ? void 0 : jB.seconds) && void 0 !== BB ? BB : 0
        },
        trapped: () => (0, dd.d)(this, Md)[Md],
        busy: () => (0, dd.d)(this, ed)[ed](),
        loadInFlight: () => (0, dd.d)(this, fd)[fd],
        HJ: () => (0, dd.d)(this, Ed)[Ed],
        unload: () => {
          (0, dd.d)(this, BI)[BI]()
        },
        load: () => (0, dd.d)(this, wd)[wd]()
      })
    }

    function MI(BB, jB) {
      (0, dd.d)(this, Vd)[Vd] ? (0, dd.d)(this, Vd)[Vd].push([BB, jB]): (0, dd.d)(this, II)[II](((zB, QB) => {
        const nB = zB.YnB(jB.length);
        0 !== nB && (new Uint8Array(QB.buffer, nB, jB.length).set(jB), zB.command(BB, jB.length))
      }))
    }

    function EI() {
      (0, dd.d)(this, od)[od]++, (0, dd.d)(this, Cd)[Cd]("Cs"), (0, dd.d)(this, Ad)[Ad].stop(), this.deps.core.enB(0), (0, dd.d)(this, jI)[jI](), (0, dd.d)(this, Md)[Md] || ((0, dd.d)(this, gd)[gd] = null, this.deps.unload())
    }

    function iI() {
      (0, dd.d)(this, II)[II]((BB => {
        BB.free()
      })), (0, dd.d)(this, td)[td] = null, (0, dd.d)(this, Sd)[Sd] = null, (0, dd.d)(this, Zd)[Zd] = null
    }

    function qI() {
      var BB;
      const jB = this.deps.coreBuffer();
      return (null === (BB = (0, dd.d)(this, hd)[hd]) || void 0 === BB ? void 0 : BB.buffer) !== jB && ((0, dd.d)(this, hd)[hd] = new Uint8Array(jB)), (0, dd.d)(this, hd)[hd]
    }

    function fI() {
      var BB;
      const jB = this.deps.coreBuffer();
      return (null === (BB = (0, dd.d)(this, Xd)[Xd]) || void 0 === BB ? void 0 : BB.buffer) !== jB && ((0, dd.d)(this, Xd)[Xd] = new Uint32Array(jB, 0, jB.byteLength >>> 2)), (0, dd.d)(this, Xd)[Xd]
    }

    function oI(BB) {
      var jB;
      const zB = BB.buffer;
      return (null === (jB = (0, dd.d)(this, Zd)[Zd]) || void 0 === jB ? void 0 : jB.buffer) !== zB && ((0, dd.d)(this, Zd)[Zd] = new Uint8Array(zB)), (0, dd.d)(this, Zd)[Zd]
    }
    async function HI(BB) {
      await this.deps.staleOr(BB, (() => {
        this.deps.failed(Gd)
      }))
    }

    function DI(BB) {
      const jB = (0, dd.d)(this, td)[td],
        zB = (0, dd.d)(this, Sd)[Sd];
      if (jB && zB) return (0, dd.d)(this, NI)[NI]((() => BB(jB, zB)))
    }

    function FI(BB) {
      if (!(0, dd.d)(this, Md)[Md]) try {
        return BB()
      } catch (jB) {
        if (!(0, dd.d)(this, uI)[uI](jB)) throw jB;
        return
      }
    }

    function YI(BB) {
      return BB instanceof WebAssembly.RuntimeError && ((0, dd.d)(this, Md)[Md] = !0, (0, dd.d)(this, td)[td] = null, (0, dd.d)(this, Sd)[Sd] = null, (0, dd.d)(this, Zd)[Zd] = null, (0, dd.d)(this, gd)[gd] = null, (0, dd.d)(this, Yd)[Yd] = null, (0, dd.d)(this, Cd)[Cd]("trapped"), this.deps.core.enB(0), (0, dd.d)(this, Ad)[Ad].stop(), this.deps.crash(this.deps.markTrapped(BB)), this.deps.failed("Replay recording stopped working, so reload the page to record replays again."), !0)
    }
    var VI = zB(38748);
    const hI = new Map([
      ["skyblock", () => zB.e(52).then((() => zB(38742)))]
    ]);

    function XI(BB) {
      const jB = hI.get(BB);
      return jB ? jB().then((() => {
        const jB = (0, VI.d)(BB);
        if (!jB) throw new Error(`${BB}'s replay hook module registered no hook`);
        return jB
      })) : null
    }
    class ZI {
      constructor(BB) {
        this.deps = BB, this.game = null, this.hook = null, this.generation = 0, this.all = !1, this.pending = new Map, this.ids = new Int32Array(64)
      }
      get wantsWatch() {
        return null !== this.hook
      }
      opened(BB) {
        if (this.pending.clear(), BB === this.game && null !== this.hook) return void(this.all = !0);
        const jB = ++this.generation;
        this.game = BB, this.hook = null, this.all = !1;
        const zB = this.deps.loadHook(BB);
        null === zB || void 0 === zB || zB.then((BB => {
          jB === this.generation && (this.hook = BB, this.all = !0)
        }), (BB => {
          jB === this.generation && this.deps.onError(BB)
        }))
      }
      ended() {
        this.generation++, this.game = null, this.hook = null, this.all = !1, this.pending.clear()
      }
      entityAdded(BB) {
        null === this.hook || this.all || this.pending.set(BB, !0)
      }
      entityInfoChanged(BB) {
        null === this.hook || this.all || this.pending.has(BB) || this.pending.set(BB, !1)
      }
      flush(BB) {
        const {
          hook: jB
        } = this;
        if (null === jB || !BB || !this.all && 0 === this.pending.size) return;
        const zB = this.deps.cmd();
        if (null === zB) return;
        const {
          api: QB
        } = this.deps;
        if (this.all) {
          this.all = !1, this.pending.clear();
          const {
            ids: BB,
            count: jB
          } = Az(QB, this.ids);
          this.ids = BB;
          for (let zB = 0; zB < jB; zB++) this.pending.set(BB[zB], !0)
        }
        const nB = this.ids = Tz(this.ids, this.pending.size);
        let dB = 0;
        for (const UB of this.pending.keys()) nB[dB++] = UB;
        const IB = [],
          NB = Pz(QB, nB, dB, ((BB, jB) => {
            null !== jB && IB.push({
              serverId: BB,
              info: jB,
              spawned: !0 === this.pending.get(BB)
            })
          }));
        if (NB) {
          this.pending.clear();
          for (const {
              serverId: BB,
              info: QB,
              spawned: nB
            }
            of IB) try {
            jB(QB, {
              setFacingTolerance: jB => {
                null === jB && nB || Nz(zB, BB, jB) || this.pending.set(BB, nB)
              }
            })
          } catch (uB) {
            this.deps.onError(uB)
          }
        }
      }
    }
    var AI = (0, Id.b)("bindings"),
      TI = (0, Id.b)("module"),
      PI = (0, Id.b)("memory"),
      WI = (0, Id.b)("trapped"),
      eI = (0, Id.b)("generation"),
      lI = (0, Id.b)("loading"),
      wI = (0, Id.b)("lend"),
      xI = (0, Id.b)("givenUp"),
      KI = (0, Id.b)("afterSave"),
      CI = (0, Id.b)("opens"),
      cI = (0, Id.b)("saveAskedAt"),
      bI = (0, Id.b)("unload"),
      vI = (0, Id.b)("dropModule"),
      RI = (0, Id.b)("loadFailed"),
      OI = (0, Id.b)("saveReadsBody"),
      BN = (0, Id.b)("command"),
      jN = (0, Id.b)("call"),
      zN = (0, Id.b)("guard"),
      QN = (0, Id.b)("trapOn");
    class nN {
      constructor(BB) {
        this.deps = BB, Object.defineProperty(this, QN, {
          value: rN
        }), Object.defineProperty(this, zN, {
          value: pN
        }), Object.defineProperty(this, jN, {
          value: aN
        }), Object.defineProperty(this, BN, {
          value: UN
        }), Object.defineProperty(this, OI, {
          get: uN,
          set: void 0
        }), Object.defineProperty(this, RI, {
          value: NN
        }), Object.defineProperty(this, vI, {
          value: IN
        }), Object.defineProperty(this, bI, {
          value: dN
        }), Object.defineProperty(this, AI, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, TI, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, PI, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, WI, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, eI, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, lI, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, wI, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, xI, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, KI, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, CI, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, cI, {
          writable: !0,
          value: null
        })
      }
      get active() {
        return null !== (0, dd.d)(this, TI)[TI] && null === (0, dd.d)(this, KI)[KI]
      }
      async open(BB, jB) {
        if ((0, dd.d)(this, WI)[WI]) return rB.Xc.ModuleTrap;
        let zB = (0, dd.d)(this, AI)[AI];
        if (!zB) {
          const BB = (0, dd.d)(this, eI)[eI];
          (0, dd.d)(this, lI)[lI]++;
          try {
            zB = await this.deps.load()
          } catch (nB) {
            return (0, dd.d)(this, lI)[lI]--, BB !== (0, dd.d)(this, eI)[eI] ? "stopped" : (0, dd.d)(this, RI)[RI](nB, jB)
          }
          if ((0, dd.d)(this, lI)[lI]--, BB !== (0, dd.d)(this, eI)[eI]) return (0, dd.d)(this, AI)[AI] || 0 !== (0, dd.d)(this, lI)[lI] || (0, dd.d)(this, WI)[WI] || this.deps.unload(), "stopped";
          if ((0, dd.d)(this, WI)[WI]) return rB.Xc.ModuleTrap;
          const QB = zB.TnB(),
            dB = this.deps.core.PnB();
          if (QB !== dB) return (0, dd.d)(this, RI)[RI](new Error(`replay port version ${QB}, the core's ${dB}`), jB);
          (0, dd.d)(this, AI)[AI] = zB
        }
        if (!(0, dd.d)(this, TI)[TI]) {
          const BB = zB;
          if (!(0, dd.d)(this, zN)[zN]((() => {
              (0, dd.d)(this, TI)[TI] = new BB.lnB, (0, dd.d)(this, PI)[PI] = BB.wnB()
            }))) return rB.Xc.ModuleTrap
        }
        let QB = !1;
        return (0, dd.d)(this, jN)[jN](((jB, zB) => {
          null !== (0, dd.d)(this, KI)[KI] && jB.step(0, 0);
          const nB = jB.stage(BB.length);
          0 !== nB && (new Uint8Array(zB.buffer, nB, BB.length).set(BB), jB.open(), (0, dd.d)(this, xI)[xI] = (0, dd.d)(this, wI)[wI], (0, dd.d)(this, KI)[KI] = null, (0, dd.d)(this, CI)[CI]++, QB = !0)
        })) ? QB ? "opening" : rB.Xc.TooLarge : rB.Xc.ModuleTrap
      }
      beforeFrame(BB) {
        const jB = (0, dd.d)(this, TI)[TI],
          zB = (0, dd.d)(this, PI)[PI];
        if (!jB || !zB || null !== (0, dd.d)(this, KI)[KI]) return;
        const {
          core: QB
        } = this.deps, nB = QB.xnB(BB);
        if (nB < 0) return;
        const dB = Math.floor(nB);
        let IB, NB;
        try {
          IB = jB.step(dB, nB - dB), NB = jB.hnB()
        } catch (UB) {
          return void(0, dd.d)(this, QN)[QN](UB)
        }
        const uB = QB.AnB(1, IB);
        if (0 === uB) {
          const BB = (0, dd.d)(this, jN)[jN]((BB => {
            BB.close()
          }));
          if (!BB) return;
          return (0, dd.d)(this, OI)[OI] ? (0, dd.d)(this, KI)[KI] = "drop" : (0, dd.d)(this, vI)[vI](), void QB.KnB(rB.Xc.Port)
        }
        new Uint8Array(this.deps.coreBuffer(), uB, IB).set(new Uint8Array(zB.buffer, NB, IB))
      }
      play() {
        (0, dd.d)(this, BN)[BN]((BB => {
          BB.play()
        }))
      }
      pause() {
        (0, dd.d)(this, BN)[BN]((BB => {
          BB.pause()
        }))
      }
      seek(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, dd.d)(this, BN)[BN]((zB => {
          zB.seek(BB, jB)
        }))
      }
      setMark(BB, jB) {
        return (0, dd.d)(this, BN)[BN]((zB => {
          zB.CnB(BB, jB)
        }))
      }
      addKeyframe(BB, jB) {
        return (0, dd.d)(this, BN)[BN]((zB => {
          zB.cnB(BB[0], BB[1], BB[2], jB[0], jB[1], jB[2])
        }))
      }
      setKeyframe(BB, jB) {
        return (0, dd.d)(this, BN)[BN]((zB => {
          zB.bnB(BB, jB)
        }))
      }
      moveKeyframe(BB, jB) {
        return (0, dd.d)(this, BN)[BN]((zB => {
          zB.vnB(BB, jB)
        }))
      }
      deleteKeyframes(BB, jB) {
        return (0, dd.d)(this, BN)[BN]((zB => {
          zB.RnB(BB, jB)
        }))
      }
      crop(BB, jB) {
        return null === (0, dd.d)(this, wI)[wI] && (0, dd.d)(this, BN)[BN]((zB => {
          zB.crop(BB, jB)
        }))
      }
      beginSave() {
        const BB = (0, dd.d)(this, cI)[cI];
        if ((0, dd.d)(this, cI)[cI] = null, null !== BB && BB !== (0, dd.d)(this, CI)[CI]) return null;
        let jB = 0,
          zB = null;
        if ((0, dd.d)(this, jN)[jN](((BB, QB) => {
            jB = BB.save(), 0 !== jB && (zB = new Uint8Array(QB.buffer, BB.OnB(), BB.BdB()).slice())
          })), 0 === jB || !zB) return null;
        const QB = {
          headLen: jB,
          editState: zB,
          givenUp: () => (0, dd.d)(this, xI)[xI] === QB,
          head: (BB, jB) => {
            if ((0, dd.d)(this, wI)[wI] !== QB || !(0, dd.d)(this, OI)[OI]) return null;
            let zB = null;
            return (0, dd.d)(this, jN)[jN](((QB, nB) => {
              const dB = QB.jdB();
              0 !== dB && BB >= 0 && jB >= 0 && BB + jB <= dB && (zB = new Uint8Array(nB.buffer, QB.zdB() + BB, jB))
            })), zB
          },
          end: () => {
            if ((0, dd.d)(this, wI)[wI] !== QB) return;
            (0, dd.d)(this, wI)[wI] = null, (0, dd.d)(this, xI)[xI] = null, (0, dd.d)(this, jN)[jN]((BB => {
              BB.QdB()
            }));
            const BB = (0, dd.d)(this, KI)[KI];
            (0, dd.d)(this, KI)[KI] = null, "unload" === BB ? (0, dd.d)(this, bI)[bI]() : "drop" === BB && (0, dd.d)(this, vI)[vI]()
          }
        };
        return (0, dd.d)(this, wI)[wI] = QB, QB
      }
      askSave() {
        (0, dd.d)(this, cI)[cI] = (0, dd.d)(this, CI)[CI]
      }
      setSpeed(BB) {
        (0, dd.d)(this, BN)[BN]((jB => {
          jB.ndB(BB)
        }))
      }
      setCameraMode(BB) {
        (0, dd.d)(this, BN)[BN]((jB => {
          jB.ddB(BB)
        }))
      }
      close() {
        (0, dd.d)(this, BN)[BN]((BB => {
          BB.close()
        }))
      }
      stop() {
        (0, dd.d)(this, eI)[eI]++, (0, dd.d)(this, OI)[OI] && ((0, dd.d)(this, jN)[jN]((BB => {
          BB.close()
        })), (0, dd.d)(this, TI)[TI]) ? (0, dd.d)(this, KI)[KI] = "unload" : (0, dd.d)(this, bI)[bI]()
      }
    }

    function dN() {
      (0, dd.d)(this, vI)[vI](), (0, dd.d)(this, WI)[WI] || ((0, dd.d)(this, AI)[AI] = null, this.deps.unload())
    }

    function IN() {
      (0, dd.d)(this, jN)[jN]((BB => {
        BB.free()
      })), (0, dd.d)(this, TI)[TI] = null, (0, dd.d)(this, PI)[PI] = null
    }
    async function NN(BB, jB) {
      return await this.deps.staleOr(BB, (() => {}), {
        beforeReload: jB
      }) ? "reloading" : rB.Xc.ModuleLoad
    }

    function uN() {
      return null !== (0, dd.d)(this, wI)[wI] && (0, dd.d)(this, xI)[xI] !== (0, dd.d)(this, wI)[wI]
    }

    function UN(BB) {
      return null === (0, dd.d)(this, KI)[KI] && (0, dd.d)(this, jN)[jN](BB)
    }

    function aN(BB) {
      const jB = (0, dd.d)(this, TI)[TI],
        zB = (0, dd.d)(this, PI)[PI];
      return !(!jB || !zB) && (0, dd.d)(this, zN)[zN]((() => {
        BB(jB, zB)
      }))
    }

    function pN(BB) {
      if ((0, dd.d)(this, WI)[WI]) return !1;
      try {
        return BB(), !0
      } catch (jB) {
        return (0, dd.d)(this, QN)[QN](jB), !1
      }
    }

    function rN(BB) {
      if (!(BB instanceof WebAssembly.RuntimeError)) throw BB;
      (0, dd.d)(this, WI)[WI] = !0, (0, dd.d)(this, TI)[TI] = null, (0, dd.d)(this, PI)[PI] = null, (0, dd.d)(this, AI)[AI] = null, this.deps.crash(this.deps.markTrapped(BB)), this.deps.core.KnB(rB.Xc.ModuleTrap)
    }
    var sN = zB(6431),
      JN = zB(41108);
    const mN = "[bloxd-wasm-client]";
    const yN = String(Yn);

    function kN(BB) {
      return null === BB || BB === yN ? void 0 : BB
    }

    function GN(BB) {
      var jB, zB, QB, nB, dB, NB, uB;
      switch (BB.what) {
        case rB.fd.FlyingText: {
          let jB;
          try {
            jB = JSON.parse(BB.contentJson)
          } catch (UB) {
            return void console.warn(`${mN} a replay's flying text isn't JSON`, UB)
          }
          IB.n.Ly("forceFlyingMiddleMessage", {
            content: jB,
            xd: BB.xd,
            angle: BB.angle,
            Kd: BB.Kd
          });
          break
        }
        case rB.fd.PlayerKilled:
          (0, JN.e)({
            kind: "killed",
            body: {
              deadEId: null !== (jB = kN(BB.dead)) && void 0 !== jB ? jB : "",
              killerEId: kN(BB.killer),
              withItem: null !== (zB = BB.withItem) && void 0 !== zB ? zB : "",
              killstreak: BB.killstreak
            }
          });
          break;
        case rB.fd.Killfeed:
          (0, JN.e)({
            kind: "custom",
            body: {
              killer: {
                eId: kN(BB.killerId),
                name: null !== (QB = BB.killerName) && void 0 !== QB ? QB : void 0,
                colour: null !== (nB = BB.killerColour) && void 0 !== nB ? nB : void 0
              },
              victim: {
                eId: kN(BB.victimId),
                name: null !== (dB = BB.victimName) && void 0 !== dB ? dB : void 0,
                colour: null !== (NB = BB.victimColour) && void 0 !== NB ? NB : void 0
              },
              withItem: null !== (uB = BB.withItem) && void 0 !== uB ? uB : ""
            }
          })
      }
    }
    const LN = "[bloxd-wasm-client]";

    function gN(BB) {
      if (void 0 === BB || null === BB || "" === BB) return null;
      const jB = Number(BB);
      return Number.isInteger(jB) && jB > Yn && jB <= 2147483647 ? jB : null
    }

    function tN(BB) {
      return {
        id: gN(BB.eId),
        name: "string" === typeof BB.name ? BB.name : null,
        colour: "string" === typeof BB.colour ? BB.colour : null
      }
    }

    function SN(BB) {
      const jB = (0, wn.l)(Kz.Wb.PlayerKilled, (jB => {
          var zB, QB;
          const nB = (0, en.e)(jB);
          if (!(0, en.c)(nB)) return;
          const {
            deadEId: dB,
            killerEId: IB,
            withItem: NB,
            killstreak: uB
          } = nB;
          BB.recordPlayerKilled(null !== (zB = gN(dB)) && void 0 !== zB ? zB : Yn, null !== (QB = gN(IB)) && void 0 !== QB ? QB : Yn, "number" === typeof uB ? uB : 0, "string" === typeof NB ? NB : "")
        })),
        zB = (0, wn.l)(Kz.Wb.CustomKillfeed, (jB => {
          const zB = (0, en.e)(jB);
          if (!(0, en.c)(zB) || !(0, en.c)(zB.killer) || !(0, en.c)(zB.victim)) return;
          const {
            killer: QB,
            victim: nB,
            withItem: dB
          } = zB;
          BB.recordKillfeed(tN(QB), tN(nB), "string" === typeof dB ? dB : null)
        }));
      return () => {
        jB(), zB()
      }
    }

    function MN(BB) {
      var jB;
      return void 0 === BB || null === BB ? null : null !== (jB = JSON.stringify(BB)) && void 0 !== jB ? jB : null
    }

    function EN(BB) {
      let jB = null;
      const zB = () => {
        const {
          enableClipping: zB,
          clipDurationSeconds: nB
        } = QB.c.get("clientEscMenuOptions"), dB = `${zB}:${nB}`;
        dB !== jB && (jB = dB, BB.recorder.setPrefs(zB, nB))
      };
      return zB(), (0, IB.q)("appManagerUpdated|clientEscMenuOptions", zB)
    }
    const iN = "replayModule",
      qN = "recorderModule";

    function fN(BB, jB, zB) {
      return function() {
        return BB.isStopped ? zB : jB(...arguments)
      }
    }
    const oN = {
      open: () => Promise.reject(new Error(tn.d.coreStopped.text)),
      replayKey: () => null,
      encode: () => Promise.resolve(null),
      fileHandle: () => null,
      markSaved: () => {}
    };

    function HN() {
      return zB.e(65).then((() => zB(61617)))
    }

    function DN(BB) {
      (0, tn.g)({
        text: BB,
        type: "Error"
      })
    }
    class FN {
      constructor(BB) {
        this.deps = BB, this.runtime = void 0, this.entityHooks = void 0, this.recordedOptions = void 0, this.stops = void 0, this.activeConn = 0, this.stopped = !1, this.bench = null, this.replay = void 0, this.recorder = void 0, this.freecam = void 0, this.drawn = !1;
        const {
          running: jB,
          api: QB,
          core: nB
        } = BB, dB = () => BB.memory().buffer, IB = () => jB.isStopped ? null : jB.rings.cmd, NB = fN(jB, ((BB, jB) => nB.AnB(BB, jB)), 0), uB = () => nB.PnB();
        let UB = null;
        this.replay = new nN({
          core: {
            xnB: fN(jB, (BB => nB.xnB(BB)), -1),
            AnB: NB,
            PnB: uB,
            KnB: fN(jB, (BB => {
              nB.KnB(BB)
            }), void 0)
          },
          coreBuffer: dB,
          load: async () => (UB = await zB.e(66).then((() => zB(61634))), UB.loadReplayModule()),
          unload: () => {
            var BB;
            null === (BB = UB) || void 0 === BB || BB.unloadReplayModule()
          },
          markTrapped: BB => UB ? UB.markReplayTrapped(BB) : new Error(String(BB)),
          staleOr: (jB, zB, QB) => BB.staleOr(iN, jB, zB, QB),
          crash: jB => {
            BB.reportFault(iN, jB)
          }
        });
        let aB = null;
        this.recorder = new UI({
          core: {
            enB: fN(jB, (BB => nB.enB(BB)), 0),
            VnB: fN(jB, (BB => nB.VnB(BB)), 0),
            AnB: NB,
            PnB: uB
          },
          coreCommand: (BB, jB) => {
            var zB, QB;
            return null !== (zB = null === (QB = IB()) || void 0 === QB ? void 0 : QB.writeCmd(BB, 0, jB)) && void 0 !== zB && zB
          },
          coreBuffer: dB,
          load: async () => (aB = await HN(), aB.loadRecorderModule()),
          prefetch: () => {
            HN().then((BB => BB.prefetchRecorderModule())).catch((BB => {
              console.warn(`${LN} the recorder module didn't prefetch, so a save loads it:`, BB)
            }))
          },
          unload: () => {
            var BB;
            null === (BB = aB) || void 0 === BB || BB.unloadRecorderModule()
          },
          markTrapped: BB => aB ? aB.markRecorderTrapped(BB) : new Error(String(BB)),
          memoryBytes: () => {
            var BB, jB;
            return null !== (BB = null === (jB = aB) || void 0 === jB ? void 0 : jB.recorderMemoryBytes()) && void 0 !== BB ? BB : 0
          },
          staleOr: (jB, zB) => BB.staleOr(qN, jB, zB),
          crash: jB => {
            BB.reportFault(qN, jB)
          },
          allowed: () => !0 === BB.options.get("canRecordReplays"),
          failed: DN,
          events: (BB, jB) => {
            this.runtime.recorderEvents(BB, jB)
          },
          beginSave: () => this.replay.beginSave(),
          givenUp: DN,
          unixNow: () => Date.now()
        });
        const pB = new Fn({
          core: {
            MnB: fN(jB, (BB => nB.MnB(BB)), 0),
            qnB: fN(jB, (() => {
              nB.qnB()
            }), void 0),
            wy: fN(jB, (() => nB.wy()), 0),
            EnB: fN(jB, (() => nB.EnB()), 0)
          },
          buffer: dB,
          apiView: () => QB.apiView,
          cmd: IB,
          replay: this.replay,
          recorder: this.recorder
        });
        this.entityHooks = new ZI({
          api: QB,
          cmd: IB,
          loadHook: XI,
          onError: BB => {
            console.warn(`${LN} the recorded game's replay hooks:`, BB)
          }
        });
        const rB = new Wn({
          client: pB,
          buffer: dB,
          setHoldDraws: BB => {
            jB.setHoldDraws(BB)
          },
          notify: tn.g,
          onRecorderState: () => {
            var BB;
            null === (BB = (0, Mn.d)()) || void 0 === BB || BB.recorderChanged()
          },
          onViewerChange: () => {
            var BB;
            null === (BB = (0, Mn.d)()) || void 0 === BB || BB.viewerChanged()
          },
          onReplayOption: jB => {
            ! function(BB, jB) {
              var zB, QB;
              const nB = Kz.bb[jB.key];
              if (void 0 === nB) return;
              let dB = null !== (zB = jB.value) && void 0 !== zB ? zB : JSON.parse(JSON.stringify(null !== (QB = sN.c[nB]) && void 0 !== QB ? QB : null));
              if (null !== jB.value && jB.key < Kz.xb.Environment && "string" === typeof dB) try {
                dB = JSON.parse(dB)
              } catch (IB) {
                return void console.warn(`${mN} a replay's ${nB} isn't JSON`, IB)
              }
              BB.applyNewClientOptions({
                [nB]: dB
              })
            }(BB.options, jB)
          },
          onReplayUiEvent: GN,
          onReplayOpened: jB => {
            this.entityHooks.opened((0, qB.Sb)(jB)), BB.replayShaderPack(jB)
          },
          meshPending: () => {
            var BB, zB;
            return null !== (BB = null === (zB = jB.lastHeader) || void 0 === zB ? void 0 : zB.renderPending) && void 0 !== BB ? BB : 0
          },
          viewerOpen: Sn.b,
          download: BB => {
            (0, Ln.h)(BB)
          }
        });
        this.runtime = rB, QB.replay = rB.sink, (0, Mn.q)(rB);
        const sB = new Cn({
          live: () => {
            var BB;
            return !jB.isStopped && !0 === (null === (BB = rB.currentViewer) || void 0 === BB ? void 0 : BB.inPlayback)
          },
          cmd: IB,
          dragScale: Qd
        });
        this.freecam = sB, (0, Mn.o)(sB), this.recordedOptions = function(BB, jB) {
          const zB = Kz.bb,
            QB = zB.map(((zB, QB) => jB.subscribe(zB, (jB => {
              BB.setOption(QB, MN(jB))
            }))));
          return {
            sendAll() {
              zB.forEach(((zB, QB) => {
                BB.setOption(QB, MN(jB.get(zB)))
              }))
            },
            stop() {
              for (const BB of QB) BB()
            }
          }
        }(rB.recorder, BB.options), this.stops = [(0, QQ.p)((BB => {
          sB.flush();
          try {
            this.replay.beforeFrame(BB)
          } catch (jB) {
            this.deps.reportFault("replayFrame", jB)
          }
        })), (0, QQ.B)(((BB, jB) => {
          try {
            this.recorder.afterFrame(), jB && !this.drawn && (this.drawn = !0, this.recorder.viewDrawn())
          } catch (zB) {
            this.deps.reportFault("recorderFrame", zB)
          }
          try {
            rB.afterFrame(BB)
          } catch (zB) {
            this.deps.reportFault("replayRuntime", zB)
          }
        })), EN(rB), () => {
          this.recordedOptions.stop()
        }, SN(rB.recorder), (0, xn.k)((BB => {
          let {
            action: jB,
            down: zB
          } = BB;
          var QB;
          zB && (null === (QB = (0, Mn.d)()) || void 0 === QB || QB.keyDown(jB))
        }))];
        const JB = () => {
          const BB = rB.currentViewer;
          return !0 === (null === BB || void 0 === BB ? void 0 : BB.isOpen) ? BB : null
        };
        (0, gn.c)({
          open: (BB, jB) => this.open(BB, jB),
          replayKey: () => {
            var BB, jB;
            return null !== (BB = null === (jB = JB()) || void 0 === jB ? void 0 : jB.id) && void 0 !== BB ? BB : null
          },
          saveRefusal: () => {
            var BB, jB;
            return null !== (BB = null === (jB = JB()) || void 0 === jB ? void 0 : jB.saveRefusal) && void 0 !== BB ? BB : null
          },
          encode: () => {
            var BB, jB;
            return null !== (BB = null === (jB = JB()) || void 0 === jB ? void 0 : jB.save()) && void 0 !== BB ? BB : Promise.resolve(null)
          },
          fileHandle: () => {
            var BB, jB;
            return null !== (BB = null === (jB = rB.currentViewer) || void 0 === jB ? void 0 : jB.fileHandle) && void 0 !== BB ? BB : null
          },
          markSaved: (BB, jB) => {
            var zB;
            null === (zB = rB.currentViewer) || void 0 === zB || zB.markSaved(BB, jB)
          }
        })
      }
      netEvent(BB) {
        if ("connection" === BB.type)
          if (BB.phase === rB.E.Activated) {
            this.activeConn = BB.conn;
            const jB = this.deps.sessionInfo(BB.conn);
            null !== jB && (this.runtime.activated({
              lobbyType: (0, fB.q)(jB.lobbyName),
              gameNameWithVariation: jB.gameNameWithVariation,
              lobbyName: jB.lobbyName
            }), this.recordedOptions.sendAll())
          } else BB.phase !== rB.E.Left && BB.phase !== rB.E.Closed || BB.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
      }
      stop() {
        if (!this.stopped) {
          this.stopped = !0;
          for (const BB of this.stops) BB();
          this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, Mn.k)() === this.runtime && (0, Mn.q)(null), (0, Mn.g)() === this.freecam && (0, Mn.o)(null), (0, gn.c)(oN), null !== this.bench && window.wasmReplayBench === this.bench && (window.wasmReplayBench = void 0)
        }
      }
      async open(BB, jB) {
        const {
          running: zB
        } = this.deps;
        if (zB.isStopped) throw new Error(tn.d.coreStopped.text);
        if (BB.byteLength > 67108864) throw new Error(tn.d.cantOpen.text);
        let QB;
        try {
          QB = await async function(BB) {
            const jB = await BB.loadViewer();
            return jB.inPlayback || (0, QQ.I)().leaveGame(null), jB
          }(this.runtime)
        } catch (nB) {
          throw console.warn(`${LN} the replay viewer didn't load`, nB), new Error(tn.d.viewerLoadFailed.text)
        }
        if (zB.isStopped) throw new Error(tn.d.coreStopped.text);
        await QB.open(BB, jB)
      }
    }
    var YN = zB(2006);

    function VN(BB, jB) {
      const {
        aux: zB,
        payload: QB
      } = function(BB) {
        return {
          aux: BB.reset ? rB.Zb.ResetFirst : 0,
          payload: XN(BB.changes)
        }
      }(jB);
      BB.queueOptions(zB, QB) && (jB.reset && YN.c.reset(), YN.c.apply(jB.changes))
    }
    const hN = new TextEncoder;

    function XN(BB) {
      const jB = new ZN;
      return TN(jB, BB), jB.bytes()
    }
    class ZN {
      constructor() {
        this.buf = new Uint8Array(256), this.view = new DataView(this.buf.buffer), this.len = 0
      }
      room(BB) {
        if (this.len + BB <= this.buf.length) return;
        const jB = new Uint8Array(Math.max(2 * this.buf.length, this.len + BB));
        jB.set(this.buf.subarray(0, this.len)), this.buf = jB, this.view = new DataView(jB.buffer)
      }
      u8(BB) {
        this.room(1), this.buf[this.len++] = BB
      }
      tagged(BB, jB, zB) {
        this.room(1 + jB), this.buf[this.len++] = BB, 1 === jB ? this.view.setUint8(this.len, zB) : 2 === jB ? this.view.setUint16(this.len, zB) : this.view.setUint32(this.len, zB), this.len += jB
      }
      signed(BB, jB, zB) {
        this.room(1 + jB), this.buf[this.len++] = BB, 1 === jB ? this.view.setInt8(this.len, zB) : 2 === jB ? this.view.setInt16(this.len, zB) : this.view.setInt32(this.len, zB), this.len += jB
      }
      f64(BB) {
        this.room(9), this.buf[this.len++] = 203, this.view.setFloat64(this.len, BB), this.len += 8
      }
      raw(BB) {
        this.room(BB.length), this.buf.set(BB, this.len), this.len += BB.length
      }
      bytes() {
        return this.buf.slice(0, this.len)
      }
    }

    function AN(BB, jB, zB, QB, nB, dB, IB) {
      jB < QB ? BB.u8(zB | jB) : null !== nB && jB < 256 ? BB.tagged(nB, 1, jB) : jB < 65536 ? BB.tagged(dB, 2, jB) : BB.tagged(IB, 4, jB)
    }

    function TN(BB, jB) {
      switch (typeof jB) {
        case "undefined":
          return void BB.raw(PN);
        case "boolean":
          return void BB.u8(jB ? 195 : 194);
        case "number":
          return void
          function(BB, jB) {
            jB >>> 0 === jB ? jB < 128 ? BB.u8(jB) : jB < 256 ? BB.tagged(204, 1, jB) : jB < 65536 ? BB.tagged(205, 2, jB) : BB.tagged(206, 4, jB) : (jB | 0) === jB ? jB >= -32 ? BB.u8(255 & jB) : jB >= -128 ? BB.signed(208, 1, jB) : jB >= -32768 ? BB.signed(209, 2, jB) : BB.signed(210, 4, jB) : BB.f64(jB)
          }(BB, jB);
        case "string": {
          const zB = hN.encode(jB);
          return AN(BB, zB.length, 160, 32, 217, 218, 219), void BB.raw(zB)
        }
        case "object":
          break;
        default:
          return void BB.u8(192)
      }
      if (null === jB) BB.u8(192);
      else if (Array.isArray(jB)) {
        AN(BB, jB.length, 144, 16, null, 220, 221);
        for (const zB of jB) TN(BB, zB)
      } else if (jB instanceof Uint8Array) AN(BB, jB.length, 0, 0, 196, 197, 198), BB.raw(jB);
      else {
        const zB = Object.keys(jB);
        AN(BB, zB.length, 128, 0, null, 222, 223);
        for (const QB of zB) TN(BB, QB), TN(BB, jB[QB])
      }
    }
    const PN = new Uint8Array([212, 0, 0]);
    var WN = zB(42725),
      eN = zB(42728),
      lN = zB(41028),
      wN = zB(41070),
      xN = zB(2974);
    const KN = [1e3, 3e3, 9e3];
    class CN {
      constructor(BB) {
        this.host = BB, this.sets = new Map, this.table = [], this.generation = 0, this.HJ = !1
      }
      onEvent(BB) {
        const jB = function(BB) {
          if (BB.byteLength !== rB.md) return null;
          const jB = new DataView(BB.buffer, BB.byteOffset, BB.byteLength);
          return {
            want: jB.getUint16(0, !0),
            release: jB.getUint16(2, !0)
          }
        }(BB);
        jB && !this.HJ && (jB.release !== rB.nd && this.release(jB.release), jB.want !== rB.nd && this.want(jB.want))
      }
      reset(BB) {
        if (!this.HJ) {
          for (const [BB, jB] of this.sets) "ready" === jB.state && this.releaseAll(jB.distinct), this.sets.delete(BB);
          this.table = BB, this.generation++
        }
      }
      dispose() {
        if (this.HJ) return;
        this.HJ = !0, this.generation++, this.table = [];
        const BB = [...this.sets.values()];
        this.sets.clear();
        let jB = null;
        for (const QB of BB)
          for (const BB of "ready" === QB.state ? QB.distinct : []) try {
            this.host.CzB(BB)
          } catch (zB) {
            jB ??= {
              error: zB
            }
          }
        if (jB) throw jB.error
      }
      isReady(BB) {
        var jB;
        return "ready" === (null === (jB = this.sets.get(BB)) || void 0 === jB ? void 0 : jB.state)
      }
      want(BB) {
        const jB = this.sets.get(BB);
        if ("loading" === (null === jB || void 0 === jB ? void 0 : jB.state)) return jB.wanted = !0, void this.capAnswer(BB, jB);
        if ("ready" === (null === jB || void 0 === jB ? void 0 : jB.state)) return void this.host.sendReady(bN(BB, jB.images, jB.size));
        const zB = this.table[BB];
        if (!zB || 1 !== zB.urls.length && zB.urls.length !== Kz.Pb.CubeFaces) return this.host.sendReady(vN(BB)), void this.host.onLoadFailed(BB, "", new Error(`no image set ${BB}`));
        const QB = {
          state: "loading",
          wanted: !0
        };
        this.sets.set(BB, QB), this.load(BB, zB, QB, this.generation, 0), this.capAnswer(BB, QB)
      }
      capAnswer(BB, jB) {
        this.host.wait(4e3, (() => {
          this.sets.get(BB) === jB && jB.wanted && this.host.sendReady(vN(BB))
        }))
      }
      load(BB, jB, zB, QB, nB) {
        const dB = [...new Set(jB.urls)];
        Promise.allSettled(dB.map((BB => this.host.loadImage(BB, jB.orientation)))).then((IB => {
          const NB = IB.flatMap((BB => "fulfilled" === BB.status ? [BB.value] : [])),
            uB = QB === this.generation && this.sets.get(BB) === zB,
            UB = IB.findIndex((BB => "rejected" === BB.status));
          if (!uB || !zB.wanted) return this.HJ ? void this.releaseAfterDispose(NB.map(cN)) : (this.releaseAll(NB.map(cN)), void(uB && this.sets.delete(BB)));
          UB < 0 ? this.loaded(BB, jB, dB, NB) : (this.releaseAll(NB.map(cN)), this.host.sendReady(vN(BB)), nB < KN.length ? this.host.wait(KN[nB], (() => {
            QB === this.generation && this.sets.get(BB) === zB && (zB.wanted ? this.load(BB, jB, zB, QB, nB + 1) : this.sets.delete(BB))
          })) : (this.sets.delete(BB), this.host.onLoadFailed(BB, dB[UB], IB[UB].reason)))
        }))
      }
      loaded(BB, jB, zB, QB) {
        const [nB] = QB, dB = [nB.width, nB.height], IB = QB.every((BB => BB.width === dB[0] && BB.height === dB[1])), NB = jB.urls.length === Kz.Pb.CubeFaces;
        if (!IB || dB[0] <= 0 || dB[1] <= 0 || dB[0] > 65535 || dB[1] > 65535 || NB && dB[0] !== dB[1]) {
          this.releaseAll(QB.map(cN)), this.sets.delete(BB), this.host.sendReady(vN(BB));
          const zB = QB.map((BB => `${BB.width}x${BB.height}`));
          return void this.host.onLoadFailed(BB, jB.urls[0], new Error(`set ${BB}'s images can't make its texture: ${zB.join(", ")}`))
        }
        const uB = jB.urls.map((BB => QB[zB.indexOf(BB)].id)),
          UB = QB.map(cN);
        this.sets.set(BB, {
          state: "ready",
          images: uB,
          distinct: UB,
          size: dB
        }), this.host.sendReady(bN(BB, uB, dB))
      }
      release(BB) {
        const jB = this.sets.get(BB);
        "loading" === (null === jB || void 0 === jB ? void 0 : jB.state) ? jB.wanted = !1: "ready" === (null === jB || void 0 === jB ? void 0 : jB.state) && (this.releaseAll(jB.distinct), this.sets.delete(BB))
      }
      releaseAll(BB) {
        for (const jB of BB) this.host.CzB(jB)
      }
      releaseAfterDispose(BB) {
        for (const jB of BB) try {
          this.host.CzB(jB)
        } catch {}
      }
    }

    function cN(BB) {
      return BB.id
    }

    function bN(BB, jB, zB) {
      const QB = new Uint8Array(Kz.Pb.SkyImagesReadyBytes),
        nB = new DataView(QB.buffer);
      return nB.setUint16(0, BB, !0), nB.setUint16(2, jB.length, !0), nB.setUint16(4, zB[0], !0), nB.setUint16(6, zB[1], !0), jB.slice(0, Kz.Pb.CubeFaces).forEach(((BB, jB) => {
        nB.setUint32(8 + 4 * jB, BB, !0)
      })), QB
    }

    function vN(BB) {
      const jB = new Uint8Array(Kz.Pb.SkyImagesReadyBytes),
        zB = new DataView(jB.buffer);
      return zB.setUint16(0, BB, !0), zB.setUint16(2, Kz.Pb.Failed, !0), jB
    }
    let RN = Promise.resolve();
    async function ON(BB, jB) {
      let zB;
      try {
        zB = await (0, xN.L)(BB)
      } catch (dB) {
        throw new lN.d("fetch", BB, {
          cause: dB
        })
      }
      const QB = RN.then((() => async function(BB, jB) {
        const zB = new Blob([BB.slice()]);
        let QB = await createImageBitmap(zB, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: jB
        });
        const nB = 1024 / Math.max(QB.width, QB.height);
        if (nB < 1) {
          const BB = QB;
          try {
            QB = await createImageBitmap(BB, {
              resizeWidth: Math.max(1, Math.round(BB.width * nB)),
              resizeHeight: Math.max(1, Math.round(BB.height * nB)),
              resizeQuality: "high",
              premultiplyAlpha: "none",
              colorSpaceConversion: "none"
            })
          } finally {
            BB.close()
          }
        }
        return QB
      }(zB, jB)));
      let nB;
      RN = QB.catch((() => {}));
      try {
        nB = await QB
      } catch (dB) {
        throw new lN.d("decode", BB, {
          cause: dB
        })
      }
      return {
        id: (0, lN.m)(nB),
        width: nB.width,
        height: nB.height
      }
    }
    var Bu = zB(2206),
      ju = zB(34078),
      zu = zB(39315);
    const Qu = Bu.f.length,
      nu = new Set([...Bu.f, "earth"]);

    function du(BB) {
      const jB = [],
        zB = [],
        QB = (BB, QB) => {
          if ("custom" === QB.type) {
            zB.push({
              id: BB,
              kind: Kz.Pb.KindCustom,
              set: jB.length,
              earth: null
            });
            const nB = [QB.px, QB.py, QB.pz, QB.nx, QB.ny, QB.nz];
            jB.push({
              urls: (0, zu.g)(nB),
              orientation: "none"
            })
          } else zB.push({
            id: BB,
            kind: Kz.Pb.KindEarth,
            set: 0,
            earth: QB
          })
        };
      Bu.f.forEach(((jB, zB) => {
        var nB;
        QB(zB, null !== (nB = Iu(BB[jB])) && void 0 !== nB ? nB : ju.p[jB])
      }));
      const nB = Iu(BB.earth);
      "earth" === (null === nB || void 0 === nB ? void 0 : nB.type) && QB(Qu, nB);
      const dB = new TextEncoder,
        IB = [],
        NB = [];
      for (const [sB, JB] of Object.entries(BB)) {
        const BB = nu.has(sB) ? null : Iu(JB);
        if (null === BB) continue;
        const jB = dB.encode(sB);
        jB.length > 255 ? NB.push(`Ignoring texture pack skybox ${sB}, whose name is over 255 bytes`) : IB.length === Kz.Pb.MaxAdded ? NB.push(`Ignoring texture pack skybox ${sB}, past the ${Kz.Pb.MaxAdded} skies a pack can add`) : (IB.push(jB), QB(Kz.Pb.AddedId, BB))
      }
      const uB = jB.length;
      jB.push({
        urls: ju.i.map((BB => ju.k + BB)),
        orientation: "none"
      }), jB.push({
        urls: [ju.n],
        orientation: "flipY"
      }), jB.push({
        urls: [ju.e],
        orientation: "flipY"
      });
      const UB = Kz.Pb.SkyTableHeaderBytes + zB.length * Kz.Pb.SkyTableEntryBytes,
        aB = new Uint8Array(UB + IB.reduce(((BB, jB) => BB + 1 + jB.length), 0)),
        pB = new DataView(aB.buffer);
      pB.setUint16(0, uB, !0), pB.setUint16(2, uB + 1, !0), pB.setUint16(4, uB + 2, !0), pB.setUint16(6, zB.length, !0), zB.forEach(((BB, jB) => {
        const zB = Kz.Pb.SkyTableHeaderBytes + jB * Kz.Pb.SkyTableEntryBytes;
        pB.setUint16(zB, BB.id, !0), pB.setUint8(zB + 2, BB.kind);
        const QB = zB + 4;
        BB.earth ? function(BB, jB, zB) {
          const QB = BB;
          let nB = 0,
            dB = 0;
          for (const [IB, NB] of Nu) {
            const BB = QB[IB];
            "number" === typeof BB && Number.isFinite(BB) && (jB.setFloat32(zB + 4 * NB, BB, !0), nB |= 1 << NB)
          }
          for (const [IB, NB, uB] of uu) {
            const BB = QB[IB];
            Array.isArray(BB) && 3 === BB.length && BB.every((BB => "number" === typeof BB && Number.isFinite(BB))) && (BB.forEach(((BB, QB) => {
              jB.setFloat32(zB + uB + 4 * QB, BB, !0)
            })), nB |= NB)
          }
          Uu.forEach(((BB, dB) => {
            let [IB, NB] = BB;
            const uB = QB[IB];
            "number" === typeof uB && Number.isFinite(uB) && (jB.setFloat32(zB + Kz.r.CameraOffsetAt + 4 * dB, uB, !0), nB |= NB)
          }));
          for (const [IB, NB] of au) {
            const BB = QB[IB];
            null !== BB && void 0 !== BB && (nB |= NB, BB && (dB |= NB >>> 14))
          }
          jB.setUint32(zB + Kz.r.PresentAt, nB, !0), jB.setUint8(zB + Kz.r.FlagsAt, dB)
        }(BB.earth, pB, QB) : pB.setUint16(QB, BB.set, !0)
      }));
      let rB = UB;
      for (const sB of IB) aB[rB] = sB.length, aB.set(sB, rB + 1), rB += 1 + sB.length;
      return {
        payload: aB,
        sets: jB,
        leftOut: NB
      }
    }

    function Iu(BB) {
      if ("object" !== typeof BB || null === BB) return null;
      const jB = BB;
      if ("earth" === jB.type) return BB;
      return "custom" === jB.type && ["px", "py", "pz", "nx", "ny", "nz"].every((BB => {
        const zB = jB[BB];
        return "string" === typeof zB && zB.length > 0
      })) ? BB : null
    }
    const Nu = [
        ["inclination", Kz.r.Inclination],
        ["turbidity", Kz.r.Turbidity],
        ["luminance", Kz.r.Luminance],
        ["rayleigh", Kz.r.Rayleigh],
        ["mieCoefficient", Kz.r.MieCoefficient],
        ["mieDirectionalG", Kz.r.MieDirectionalG],
        ["distance", Kz.r.Distance],
        ["azimuth", Kz.r.Azimuth]
      ],
      uu = [
        ["sunPosition", Kz.r.SunPosition, Kz.r.SunPositionAt],
        ["up", Kz.r.Up, Kz.r.UpAt],
        ["vertexTint", Kz.r.VertexTint, Kz.r.VertexTintAt]
      ],
      Uu = [
        ["xCameraOffset", Kz.r.CameraOffsetX],
        ["yCameraOffset", Kz.r.CameraOffsetY],
        ["zCameraOffset", Kz.r.CameraOffsetZ]
      ],
      au = [
        ["useSunPosition", Kz.r.UseSunPosition],
        ["dithering", Kz.r.Dithering],
        ["infiniteDistance", Kz.r.InfiniteDistance]
      ];

    function pu(BB, jB, zB) {
      const QB = new su({
        writeCmd: BB,
        warn: jB,
        followPack: ru(zB, jB)
      });
      return QB.start(), QB
    }

    function ru(BB, jB) {
      return zB => {
        let QB = () => {};
        const nB = BB((BB => {
          QB(), QB = () => {}, null !== BB ? QB = BB.subscribe((BB => {
            zB(function(BB, jB, zB) {
              if ("object" !== typeof BB || null === BB) return null;
              const QB = BB.skyBoxes;
              if ("object" !== typeof QB || null === QB) return null;
              if ("player" === jB) return QB;
              return Object.fromEntries(Object.entries(QB).filter((BB => {
                let [jB, QB] = BB;
                return !! function(BB) {
                  if ("object" !== typeof BB || null === BB) return !1;
                  return "earth" === BB.type || Object.entries(BB).every((BB => {
                    let [jB, zB] = BB;
                    return "type" === jB || ("" === (QB = zB) || null !== function(BB) {
                      var jB, zB, QB;
                      return "string" !== typeof BB ? null : null !== (jB = null === (zB = Ju.exec(BB)) || void 0 === zB || null === (QB = zB.groups) || void 0 === QB ? void 0 : QB.base64) && void 0 !== jB ? jB : null
                    }(QB));
                    var QB
                  }))
                }(QB) || (zB(`Ignoring texture pack skybox ${jB}, whose faces are not all data URLs`, null), !1)
              })))
            }(BB.pack, null === BB.gameSource ? "player" : "customGame", jB))
          })) : zB(null)
        }));
        return () => {
          nB(), QB()
        }
      }
    }
    class su {
      constructor(BB) {
        var jB, zB, QB;
        this.host = BB, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.HJ = !1, this.wait = null !== (jB = BB.wait) && void 0 !== jB ? jB : (BB, jB) => {
          setTimeout(jB, BB)
        }, this.loader = new CN({
          loadImage: null !== (zB = BB.loadImage) && void 0 !== zB ? zB : ON,
          CzB: null !== (QB = BB.CzB) && void 0 !== QB ? QB : lN.q,
          sendReady: BB => {
            this.queue.push({
              kind: Kz.Pb.SkyImagesReady,
              payload: BB
            })
          },
          onLoadFailed: (jB, zB, QB) => {
            BB.warn(`sky image set ${jB} (${zB}) didn't load: the last sky stays`, QB)
          },
          wait: this.wait
        })
      }
      start() {
        this.wait(wN.d, (() => {
          null === this.written && this.write({})
        })), this.stopFollowing = this.host.followPack((BB => {
          this.write(null !== BB && void 0 !== BB ? BB : {})
        }))
      }
      onEvent(BB) {
        this.loader.onEvent(BB)
      }
      drain() {
        if (0 === this.queue.length) return;
        let BB = 0;
        for (; BB < this.queue.length && this.host.writeCmd(this.queue[BB].kind, 0, this.queue[BB].payload);) BB++;
        BB > 0 && this.queue.splice(0, BB)
      }
      dispose() {
        this.HJ = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
      }
      write(BB) {
        if (this.HJ) return;
        const jB = du(BB);
        if (!(this.written && (zB = this.written, QB = jB, zB.payload.length === QB.payload.length && zB.payload.every(((BB, jB) => BB === QB.payload[jB])) && zB.sets.length === QB.sets.length && zB.sets.every(((BB, jB) => {
            const zB = QB.sets[jB];
            return BB.orientation === zB.orientation && BB.urls.length === zB.urls.length && BB.urls.every(((BB, jB) => BB === zB.urls[jB]))
          }))))) {
          var zB, QB;
          for (const BB of jB.leftOut) this.host.warn(BB, null);
          this.written = jB, this.loader.reset(jB.sets), this.queue = this.queue.filter((BB => BB.kind !== Kz.Pb.SkyImagesReady)), this.queue.push({
            kind: Kz.Pb.SkyTable,
            payload: jB.payload
          })
        }
      }
    }
    const Ju = /^data:[\w.+/-]*;base64,(?<base64>[A-Za-z0-9+/]*={0,2})$/;
    var mu = zB(2890),
      yu = zB(3099),
      ku = zB(309),
      Gu = zB(194),
      Lu = zB(2893),
      gu = zB(2902),
      tu = zB(281),
      Su = zB(283),
      Mu = zB(2999),
      Eu = zB(3023),
      iu = zB(3034),
      qu = zB(125),
      fu = zB(348),
      ou = zB(40909);
    class Hu {
      constructor() {
        this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, wn.l)(GQ.G, (BB => {
          this.onReply((0, en.d)(GQ.G, BB), performance.now())
        }))
      }
      onFrame(BB, jB) {
        null === this.id ? this.id = BB : BB !== this.id && (this.id = BB, this.sentMs = document.hidden ? null : jB)
      }
      onVisibilityChange() {
        this.sentMs = null
      }
      onReply(BB, jB) {
        BB === this.id && null !== this.sentMs && (this.roundTripMs = Math.round(jB - this.sentMs), this.sentMs = null)
      }
      take() {
        const BB = this.roundTripMs;
        return this.roundTripMs = null, BB
      }
      stop() {
        this.stopReplies()
      }
    }
    class Du {
      constructor() {
        this.sampled = 0, this.timed = 0, this.frameUs = 0, this.primed = !1, this.windowTimed = 0, this.windowUs = 0
      }
      onFrame(BB, jB, zB, QB) {
        const nB = BB - this.sampled >>> 0,
          dB = jB - this.timed >>> 0,
          IB = zB - this.frameUs >>> 0,
          NB = this.primed;
        return this.sampled = BB, this.timed = jB, this.frameUs = zB, this.primed = !0, !(!NB || nB > 64 || dB > 64) && (QB && IB <= 1e6 * dB && (this.windowTimed += dB, this.windowUs += IB), QB && nB > 0)
      }
      reset() {}
      snapshotAndReset() {
        const BB = this.windowTimed > 0 ? this.windowUs / this.windowTimed / 1e3 : null;
        return this.windowTimed = 0, this.windowUs = 0, {
          passMs: BB,
          submitToDoneMs: null
        }
      }
    }
    const Fu = {
      lagP50Ms: null,
      lagP90Ms: null
    };
    class Yu {
      constructor() {
        this.samples = new Float64Array(4096), this.count = 0
      }
      add(BB, jB) {
        const zB = Math.min(4096, this.count + jB);
        this.samples.fill(BB, this.count, zB), this.count = zB
      }
      clear() {
        this.count = 0
      }
      take() {
        const BB = this.count;
        if (this.count = 0, BB < 30) return Fu;
        const jB = this.samples.subarray(0, BB).sort(),
          zB = zB => jB[Math.min(BB - 1, Math.floor(zB * BB))];
        return {
          lagP50Ms: zB(.5),
          lagP90Ms: zB(.9)
        }
      }
    }
    class Vu {
      constructor() {
        this.word = 0, this.lagUs = 0, this.primed = !1, this.lags = new Yu
      }
      onFrame(BB, jB) {
        const zB = BB.headerWord(Kz.C.Pacing),
          QB = BB.headerWord(Kz.C.PacingLagUs),
          nB = (zB >>> Kz.S.LagsShift) - (this.word >>> Kz.S.LagsShift) & Kz.S.CountMask,
          dB = nB > 0 ? (QB - this.lagUs >>> 0) / nB / 1e3 : 0,
          IB = this.primed && nB <= 64 && dB <= 6e4;
        this.word = zB, this.lagUs = QB, this.primed = !0, IB && jB && nB > 0 && 0 !== (zB & Kz.S.Defaulted) && this.lags.add(dB, nB)
      }
      onJoin() {
        this.lags.clear()
      }
      snapshotAndReset(BB) {
        return BB ? this.lags.take() : (this.lags.clear(), Fu)
      }
    }
    var hu = zB(328);

    function Xu() {
      return Date.now() - performance.now()
    }
    class Zu {
      constructor() {
        this.rafs = 0, this.DN = 0, this.heldAtRaf = -1, this.heldRunStartMs = 0, this.startMs = performance.now(), this.startClockOffsetMs = Xu(), this.focused = document.hasFocus(), this.blurred = !1, this.resumed = !1, this.embedded = (0, hu.e)(), this.onBlur = () => {
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
        (0 === this.DN || this.heldAtRaf < this.rafs - 1) && (this.heldRunStartMs = 1 === this.rafs ? this.startMs : performance.now()), this.DN++, this.heldAtRaf = this.rafs
      }
      words(BB) {
        const jB = BB ? this.rafs - 1 : this.rafs;
        return function(BB) {
          let jB = 0 === BB.rafs ? "raf:none" : "raf:some";
          return BB.DN > 0 && (jB += " pace:held"), BB.heldRunMs > 1e4 && (jB += " pace:stalled"), BB.blurred && (jB += " blur"), BB.resumed && (jB += " resumed"), BB.embedded && (jB += " embedded"), BB.clockGainMs > 2e3 && (jB += " clockjump"), jB
        }({
          clockGainMs: Xu() - this.startClockOffsetMs,
          rafs: jB,
          DN: this.DN,
          heldRunMs: this.DN > 0 && this.heldAtRaf === jB ? performance.now() - this.heldRunStartMs : 0,
          blurred: this.blurred,
          resumed: this.resumed,
          embedded: this.embedded
        })
      }
      restart(BB) {
        this.rafs = 0, this.DN = 0, this.heldAtRaf = -1, this.startMs = BB, this.startClockOffsetMs = Xu(), this.blurred = !this.focused, this.resumed = !1
      }
      stop() {
        window.removeEventListener("blur", this.onBlur), window.removeEventListener("focus", this.onFocus), document.removeEventListener("freeze", this.onLifecycle), document.removeEventListener("resume", this.onLifecycle)
      }
    }
    var Au = zB(34185),
      Tu = zB(3004),
      Pu = zB(40963),
      Wu = zB(34179),
      eu = zB(2908),
      lu = zB(3009);
    const wu = {
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

    function xu(BB) {
      return new Ku(BB)
    }
    class Ku {
      constructor(BB) {
        this.shell = BB, this.tracker = new gu.b, this.gpu = new Du, this.pacing = new Vu, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.fpsOverTime = null, this.firstSpanFps = null, this.initialFps = null, this.ping = new Hu, this.pacedCpuMs = 0, this.sendsStartMs = -1, this.sendsEndMs = -1, this.frameDebug = null, this.lastDrawnMs = -1, this.stallPending = !1, this.stallGap = new Zu, this.onVisibility = () => {
          this.tracker.onVisibilityChange(), this.ping.onVisibilityChange(), this.lastDrawnMs = -1, !document.hidden && this.fpsSpanStartMs >= 0 && (this.fpsFrames = 0, this.fpsSpanStartMs = performance.now())
        }, this.onBeforeUnload = () => {
          this.checkMainStall(performance.now(), !1), this.lastDrawnMs = -1
        }, (0, Au.e)(BB.backend, BB.canvas, BB.adapterVendor), this.tracker.start((() => !BB.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, eu.e)("wasm", (() => {
          const {
            n: jB,
            sampleCount: zB
          } = (0, Pu.g)();
          return `${BB.backend}, quality steps aim at up to ${lu.c.target.maxFps} fps, pixel n ${jB}, msaa ${zB}`
        }), (jB => {
          jB.setLoadCounts(BB.readLoadCounts), this.frameDebug = jB
        })), this.timers.push(setInterval((() => {
          this.flush(), this.fpsOverTime = null, this.initialFps = null
        }), 1e4), setInterval((() => {
          this.followGame() && this.shell.canSend() && (this.hasFlushedSinceConnect || (this.flush(), this.hasFlushedSinceConnect = !0))
        }), 250))
      }
      animationFrame(BB) {
        var jB;
        this.stallGap.animationFrame(), this.tracker.onAnimationFrame(BB), null === (jB = this.frameDebug) || void 0 === jB || jB.animationFrame()
      }
      sendsWent(BB, jB, zB) {
        this.ping.onFrame(BB.headerWord(Kz.C.PingSent), jB), this.sendsStartMs = jB, this.sendsEndMs = zB
      }
      frameRan(BB, jB, zB, QB) {
        var nB;
        this.ping.onFrame(BB.headerWord(Kz.C.PingSent), zB);
        const dB = this.tracker;
        this.pacing.onFrame(BB, dB.isSampling());
        const IB = BB.headerWord(Kz.C.TickUs) / 1e3 + (0, QQ.K)();
        var NB;
        (dB.mG(IB), null === (nB = this.frameDebug) || void 0 === nB || nB.wasmFrame(BB, jB, zB, QB, dB.isSampling(), IB), null !== this.game) && (null === (NB = this.frameDebug) || void 0 === NB || NB.inGame());
        const uB = this.sendsStartMs >= jB ? this.sendsEndMs - this.sendsStartMs : 0,
          UB = Math.max(0, zB - jB - IB - uB);
        if ("drawn" !== QB) return void("paced" === QB ? (this.pacedCpuMs += UB, this.stallGap.paced()) : "skipped" === QB && (this.lastDrawnMs = -1));
        this.followGame(), this.checkMainStall(jB, !0), dB.onFrameStart(jB);
        this.gpu.onFrame(BB.headerWord(Kz.C.GpuSampled), BB.headerWord(Kz.C.GpuTimed), BB.headerWord(Kz.C.GpuFrameUs), dB.isSampling()) && dB.onGpuSampleStarted(), dB.onFrameCpu(UB + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(jB)
      }
      framePaced() {
        var BB;
        this.stallGap.paced(), null === (BB = this.frameDebug) || void 0 === BB || BB.wasmPeekPaced(this.tracker.isSampling())
      }
      stop() {
        for (const BB of this.timers) clearInterval(BB);
        this.timers.length = 0, document.removeEventListener("visibilitychange", this.onVisibility), window.removeEventListener("beforeunload", this.onBeforeUnload), this.stallGap.stop(), this.ping.stop(), this.tracker.limiterTelemetry.stop()
      }
      followGame() {
        const BB = this.shell.joinedGame();
        if (BB !== this.game) {
          var jB;
          if (this.game = BB, null !== BB) null === (jB = this.frameDebug) || void 0 === jB || jB.joined();
          this.tracker.snapshotAndReset(), this.pacing.onJoin(), this.hasFlushedSinceConnect = !1, this.inGameAtLastFlush = !1, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.pacedCpuMs = 0, this.firstSpanFps = null, this.fpsOverTime = null, this.initialFps = null, this.lastDrawnMs = -1
        }
        return null !== BB
      }
      checkMainStall(BB, jB) {
        if (!this.tracker.isSampling()) return void(this.lastDrawnMs = -1);
        const zB = this.tracker.limiterTelemetry.longAnimationFrameTracker,
          QB = this.lastDrawnMs < 0 ? 0 : BB - this.lastDrawnMs;
        this.lastDrawnMs = BB;
        const nB = !this.stallPending && QB > 5e3,
          dB = nB ? this.stallGap.words(jB) : "";
        this.stallGap.restart(BB), this.stallPending || (nB ? (this.stallPending = !0, setTimeout((() => {
          this.stallPending = !1, this.shell.mainStalled(QB, zB.blockingSinceMark(), dB)
        }), 0)) : zB.markFrame(BB))
      }
      countFpsFrame(BB) {
        if (this.fpsSpanStartMs < 0) {
          if (!this.shell.inGame()) return;
          this.fpsSpanStartMs = BB
        }
        this.fpsFrames++;
        const jB = BB - this.fpsSpanStartMs;
        if (!(jB < iu.c)) {
          if (!document.hidden) {
            const BB = 1e3 * this.fpsFrames / jB;
            this.firstSpanFps ??= BB, this.initialFps = this.firstSpanFps, this.fpsOverTime = BB
          }
          this.fpsFrames = 0, this.fpsSpanStartMs = BB
        }
      }
      flush() {
        const BB = this.followGame(),
          {
            cpuFrameMs: jB,
            refreshHz: zB,
            cpuBottleneck: nB,
            frameIntervalCv: dB,
            ...IB
          } = this.tracker.snapshotAndReset(),
          NB = this.shell.inGame(),
          uB = NB && this.inGameAtLastFlush,
          UB = uB ? IB : (0, Lu.f)(IB),
          aB = this.pacing.snapshotAndReset(uB);
        if (this.inGameAtLastFlush = NB, this.pendingLightFailures += this.shell.takeFailedMeshJobs(), !BB || !this.shell.canSend()) return;
        const pB = performance.now(),
          sB = (0, Eu.p)((0, Eu.o)(pB), this.unsentPage),
          mB = function(BB, jB, zB, nB, dB, IB, NB, uB) {
            var UB, aB, pB, rB, sB;
            const JB = {},
              {
                canvas: mB
              } = BB,
              yB = (0, Mu.h)({
                refreshHz: jB.refreshHz,
                msaa: BB.msaa(),
                autoMsaaOff: (0, Wu.c)()
              });
            for (const kB of (0, yu.f)()) {
              const GB = kB.name;
              let LB;
              if ((0, ku.D)(GB)) LB = (0, Eu.b)(GB);
              else if ((0, Eu.g)(GB)) LB = uB[GB];
              else if ((0, Mu.l)(GB)) LB = yB[GB];
              else switch (GB) {
                case "fps":
                  LB = nB;
                  break;
                case "Hu":
                  LB = dB;
                  break;
                case "hu":
                  LB = (0, Tu.E)((0, Pu.g)().n);
                  break;
                case "Xu":
                  LB = Math.max(mB.width, mB.height);
                  break;
                case "Zu":
                  LB = Math.min(mB.width, mB.height);
                  break;
                case "Au":
                  LB = navigator.hardwareConcurrency || null;
                  break;
                case "Tu":
                  LB = (0, Rn.getWebGpuSupported)();
                  break;
                case "Pu":
                  LB = null === BB.fallbackReason ? null : wu[BB.fallbackReason];
                  break;
                case "Wu":
                  LB = jB.cpuFrameMs;
                  break;
                case "eu":
                  LB = jB.refreshHz;
                  break;
                case "lu":
                  LB = jB.cpuBottleneck;
                  break;
                case "wu":
                  LB = jB.frameIntervalCv;
                  break;
                case "xu":
                  LB = jB.frameMs;
                  break;
                case "Ku":
                  LB = jB.tickMs;
                  break;
                case "Ru":
                  LB = jB.mainBusyShare;
                  break;
                case "Ou":
                  LB = jB.mainProbeDelayMs;
                  break;
                case "Cu":
                  LB = jB.longAnimationFramesPerMin;
                  break;
                case "cu":
                  LB = jB.longAnimationFrameTimeShare;
                  break;
                case "vu":
                  LB = jB.longAnimationFrameScriptShare;
                  break;
                case "BU":
                  LB = jB.gpuPassMs;
                  break;
                case "jU":
                  LB = jB.gpuSubmitToDoneMs;
                  break;
                case "zU":
                  LB = zB.lagP50Ms;
                  break;
                case "QU":
                  LB = zB.lagP90Ms;
                  break;
                case "mU":
                  LB = (0, mu.k)(IB);
                  break;
                case "Vu":
                  LB = NB;
                  break;
                case "nU":
                case "dU":
                case "IU":
                case "NU":
                case "uU":
                case "UU":
                case "aU":
                case "pU":
                case "rU":
                case "sU":
                case "JU":
                case "yU":
                case "kU":
                case "GU":
                case "LU":
                  LB = null;
                  break;
                case "VU":
                  LB = (0, Rn.getPlatformType)();
                  break;
                case "hU":
                  LB = (0, Rn.getGpuVendor)();
                  break;
                case "XU":
                  LB = ou.c[BB.backend];
                  break;
                case "ZU":
                  LB = (0, qu.c)();
                  break;
                case "AU":
                  LB = (0, Rn.getOperatingSystem)();
                  break;
                case "TU":
                  LB = (0, Rn.getTrafficSource)();
                  break;
                case "PU":
                  LB = null !== (UB = QB.c.get("gameEntrySource")) && void 0 !== UB ? UB : Gu.f;
                  break;
                case "WU":
                  LB = null !== (aB = jB.frameLimiter) && void 0 !== aB ? aB : Gu.f;
                  break;
                case "eU":
                  LB = (0, tu.f)();
                  break;
                case "lU":
                  LB = null !== (pB = (0, Su.e)()) && void 0 !== pB ? pB : Gu.f;
                  break;
                case "wU":
                  LB = (0, tu.c)(mB.width, mB.height);
                  break;
                case "xU":
                  LB = (0, yu.g)(-(new Date).getTimezoneOffset());
                  break;
                case "cU":
                  LB = null !== (rB = BB.fallbackReason) && void 0 !== rB ? rB : Gu.f;
                  break;
                case "RU":
                  LB = "ready";
                  break;
                case "OU":
                  LB = (0, Rn.getSoftwareRenderer)();
                  break;
                case "CU":
                  LB = null !== BB.shaderPackReach() ? "true" : "false";
                  break;
                case "Ba":
                  LB = null !== (sB = BB.shaderPackReach()) && void 0 !== sB && sB.sceneDepth ? "true" : "false";
                  break;
                case "ja": {
                  const jB = BB.shaderPackReach();
                  LB = null !== jB && void 0 !== jB && jB.sunShadow ? "all" : null !== jB && void 0 !== jB && jB.airShadow ? "air" : "none";
                  break
                }
                case "za":
                  LB = fu.F;
                  break;
                case "Ua":
                  LB = (0, Eu.j)();
                  break;
                case "KU": {
                  const jB = BB.Rm();
                  LB = null === jB ? Gu.f : String(jB);
                  break
                }
                case "bU":
                case "vU":
                  LB = Gu.f;
                  break;
                default:
                  throw new Error(`Unhandled field name: ${GB}`)
              }
              if (void 0 === LB) throw new Error(`Metric ${GB} has no value`);
              JB[GB] = LB
            }
            return JB
          }(this.shell, {
            cpuFrameMs: jB,
            refreshHz: zB,
            cpuBottleneck: nB,
            frameIntervalCv: dB,
            ...UB
          }, aB, this.fpsOverTime, this.initialFps, this.pendingLightFailures, this.ping.take(), sB);
        if (! function(BB, jB, zB) {
            return (0, wj.c)(), BB(JB.n.Send, jB, zB)
          }(this.shell.writeCmd, rB.kd, function(BB) {
            const jB = (0, XB.d)((0, Cj.f)(BB)),
              zB = new Uint8Array(JB.le.BYTES + jB.length);
            return new DataView(zB.buffer).setUint16(0, Cj.e.AnalyticsUpdate, !0), zB.set(jB, JB.le.BYTES), zB
          }(mB))) return this.unsentPage = sB, void(0 === this.sendsDropped++ && console.warn("[wasm-client] an analytics update found the cmd ring full: dropped"));
        this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, mu.g), (0, Eu.m)(mB, "wasm", pB)
      }
    }
    var Cu = zB(39686);

    function cu(BB, jB, zB) {
      const QB = new Map;
      return (0, Cu.c)(((BB, zB, QB) => jB.dN(BB, zB, QB)), ((jB, zB, nB) => {
        const dB = `${jB},${zB},${nB}`;
        return QB.has(dB) || QB.set(dB, (0, Aj.c)(BB, jB, zB, nB)), QB.get(dB)
      }), zB)
    }
    var bu = zB(39695),
      vu = zB(40956);

    function Ru(BB) {
      const jB = null !== BB && 0 !== (JB.w.playerFlags(BB.api.apiView, 0) & JB.Sd.CursorAim);
      jB !== (0, vu.s)() && (0, vu.L)(jB, null !== BB)
    }

    function Ou(BB) {
      return (0, kQ.e)(GQ.y, BB)
    }
    var BU = zB(41117);
    const jU = new dB.e((BB => zB(42737)(`./${BB}/${BB}Client`)));
    let zU = null,
      QU = null;
    async function nU(BB) {
      zU ??= zB.e(27).then((() => zB(39237))).then((BB => {
        QU = BB.createDefaultClientPlugins
      }), (BB => {
        throw zU = null, BB
      })), await Promise.all([jU.load(BB), zU])
    }

    function dU(BB) {
      BB.load(new hj(xQ, new cQ))
    }
    let IU = !1;
    const NU = new WeakMap;

    function uU(BB) {
      try {
        BB()
      } catch (jB) {
        console.error("[bloxd-wasm-client] a session-end step failed", jB)
      }
    }

    function UU(BB, jB) {
      ! function() {
        var BB, jB;
        eQ.Howler.volume();
        const zB = eQ.Howler;
        null === (BB = zB._autoResume) || void 0 === BB || BB.call(zB), null === (jB = zB._autoSuspend) || void 0 === jB || jB.call(zB)
      }(), jB.audio.prepare();
      const zB = new gB(jB.core, jB.memory, jB.audio);
      let dB;
      try {
        dB = new yn(zB, jB.options)
      } catch (rB) {
        return BB.crash(Gn.u, rB), null
      }(0, uB.i)(kn(zB, dB));
      const aB = new FN({
        running: BB,
        api: zB,
        core: jB.core,
        memory: jB.memory,
        staleOr: jB.staleOr,
        reportFault: jB.reportReplayFault,
        options: jB.options,
        sessionInfo: jB.sessionInfo,
        replayShaderPack: jB.replayShaderPack
      });
      (0, QQ.E)();
      const pB = new XQ({
        api: zB,
        tables: dB,
        sessionInfo: jB.sessionInfo,
        gameFactory: BB => jU.loadedFactory(BB),
        defaultPlugins: (BB, jB, zB, QB) => {
          if (null === QU) throw new Error("The default plugins started before they loaded");
          return QU(BB, jB, zB, QB)
        },
        serverOptions: jB.options,
        onNetEvent: BB => {
          aB.netEvent(BB), jB.onNetEvent(BB)
        },
        setLocalOptions: jB => {
          VN(BB, {
            changes: jB,
            reset: !1
          })
        },
        playSound: (BB, zB, QB, nB, dB, IB, NB) => jB.audio.playGame(BB, zB, QB, nB, dB, IB, NB),
        preloadSounds: BB => {
          jB.audio.preload(function(BB) {
            const jB = [];
            for (const zB of BB) {
              const BB = Yj(zB);
              BB >= 0 && jB.push(Gj[BB])
            }
            return jB
          }(BB))
        },
        onSessionEnd: () => {
          uU(nB.n), uU(zn), uU((() => {
            QB.c.set({
              openInGameMenuName: null
            })
          })), uU((() => {
            jB.audio.endSession()
          }))
        },
        beforeWrite: jB.beforeWrite,
        beforeOp: jB.beforeOp,
        cameraScreen: jn,
        showCameraFacing: Qn,
        onEventOverflow: jB.onEventOverflow,
        screenBandY: NB.k,
        replayEntities: aB.entityHooks,
        hasPackModel: jB.hasPackModel
      });
      return pB.attach(BB), NU.set(pB, aB), PQ(pB.items, jB.audio),
        function(BB) {
          BB.setClientFreeCameraGrant("isDev", !1);
          const jB = jB => {
            BB.setClientFreeCameraGrant("hasDeveloperRank", jB.playerHasRank("developer"))
          };
          (0, IB.q)("userContextUpdated", jB)
        }(pB), IU || (IU = !0, (0, IB.q)("appManagerUpdated|openInGameMenuName", (BB => {
          !BB && (0, UB.o)().includes(UB.e) && (0, UB.s)(UB.e)
        }))), pB
    }

    function aU(BB) {
      try {
        BB.closeGame()
      } finally {
        var jB;
        null === (jB = NU.get(BB)) || void 0 === jB || jB.stop(), NU.delete(BB)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);