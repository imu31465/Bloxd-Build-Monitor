export const id = 68;
export const ids = [68];
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
  40221: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => UV,
      f: () => YV
    });
    var JV = xV(32);

    function YV(VV) {
      return "refetchCode" === VV || "devDownloadJson" === VV || VV.startsWith("Plugin")
    }

    function UV(VV, eV) {
      "refetchCode" !== VV ? "Plugin|MobAiPlugin|ShowPetUi" !== VV ? Promise.all([xV.e(121), xV.e(122), xV.e(117), xV.e(119), xV.e(236)]).then((() => xV(44630))).then((xV => {
        let {
          runClientGameMessage: JV
        } = xV;
        JV(VV, eV)
      })).catch((eV => {
        console.error(`Game message ${VV} failed`, eV)
      })) : JV.h.QZ("showPetUi", eV) : JV.h.QZ("refetchCode")
    }
  },
  53866: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => JV,
      g: () => YV
    });
    const JV = ["recording", "freecam", "keyframe"];

    function YV() {
      const VV = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(VV[1]) << 32n | BigInt(VV[0])
    }
  },
  35240: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => pV,
      f: () => QV
    });
    var JV = xV(27);
    const YV = 24,
      UV = "farNametags",
      yV = 1e5;

    function pV() {
      var VV;
      return null === (VV = JV.b.get("showDistantNametags")) || void 0 === VV || VV
    }

    function QV() {
      var VV;
      return null !== (VV = function() {
        const VV = new URLSearchParams(window.location.search).get(UV),
          eV = null === VV || "" === VV ? NaN : Number(VV);
        return Number.isFinite(eV) && eV >= 0 ? Math.min(eV, yV) : null
      }()) && void 0 !== VV ? VV : pV() ? 0 : YV
    }
  },
  45460: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      blockIdOf: () => yn.c,
      clearWasmCameraScreen: () => EY,
      creativeItemIds: () => bJ.creativeItemIds,
      decodeMapSettings: () => nn,
      drainTextRerasters: () => Op.d,
      enchantmentPerksOf: () => bJ.enchantmentPerksOf,
      endGameHost: () => tn,
      followCursorAim: () => Qn,
      followMenuPrefs: () => bU,
      loadAudio: () => bn,
      loadClientGame: () => kn,
      loadTextIcons: () => Op.g,
      rasterText: () => dp.b,
      readBoardToEdit: () => Un,
      readDrawCensus: () => wn.f,
      setTextHost: () => Op.i,
      setTextLocalPlayer: () => Op.k,
      showInCreativeInvenOf: () => bJ.showInCreativeInvenOf,
      startGameHost: () => qn,
      startShellAnalytics: () => xn,
      startSkyFeed: () => FQ,
      textChanged: () => Op.r,
      warmText: () => dp.c,
      wasmCameraScreen: () => bY
    });
    xV(37649);
    var JV = xV(27),
      YV = xV(38012),
      UV = xV(40382),
      yV = xV(32),
      pV = xV(3842),
      QV = xV(38003),
      nV = xV(1332),
      wV = xV(648),
      ZV = xV(39367),
      vV = xV(5297),
      rV = xV(41914),
      kV = xV(41852);
    const bV = kV.Db / 4,
      EV = kV.n.PlaySound,
      BV = kV.n.SoundReset,
      jV = vV.hb.ReplayFailed,
      qV = vV.hb.RecorderEvent;
    class tV {
      constructor(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.core = VV, this.memory = eV, this.audio = xV, this.serverIds = new Int32Array(256).fill(kV.Uc), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.view = new DataView(new ArrayBuffer(kV.s.BYTES)), this.renderPtr = 0, this.Jv = 0, this.renderCapacity = 0, this.render = new Float32Array(0), this.visPtr = 0, this.vis = new Uint8Array(0), this.renderBuffer = null, this.eventsBuffer = null, this.eventsPtr = 0, this.eventsLen = 0, this.events = new DataView(new ArrayBuffer(0)), this.audioView = null, this.scratchPtr = -1, this.scratchView = null, this.corruption = null, this.replay = null, this.queries = new kV.V(VV, (() => {
          this.scratchPtr = -1, this.ensureViews()
        }))
      }
      scratch() {
        return this.scratchPtr < 0 && (this.scratchPtr = this.core.cUV(), this.ensureViews()), this.scratchPtr
      }
      eventBytes(VV, eV) {
        const xV = this.eventView();
        return new Uint8Array(xV.buffer, xV.byteOffset + VV, eV)
      }
      get apiView() {
        return this.ensureViews(), this.view
      }
      ensureViews() {
        this.memory().buffer !== this.buffer && this.reView()
      }
      get localId() {
        return kV.s.localId(this.apiView, 0)
      }
      localDeaths() {
        return kV.s.localDeaths(this.apiView, 0)
      }
      rereadDirectory() {
        const VV = this.apiView,
          eV = kV.s.entRenderPtr(VV, 0),
          xV = kV.s.entVisPtr(VV, 0),
          JV = kV.s.entCapacity(VV, 0);
        if (eV !== this.renderPtr || xV !== this.visPtr || JV !== this.Jv || this.renderBuffer !== this.buffer) {
          this.renderPtr = eV, this.visPtr = xV, this.Jv = JV, this.renderBuffer = this.buffer;
          const VV = this.memoryView(Float32Array, eV, JV * bV, "the render array"),
            YV = this.memoryView(Uint8Array, xV, JV, "the visibility array");
          this.renderCapacity = VV && YV ? JV : 0, this.render = VV && YV ? VV : new Float32Array(0), this.vis = VV && YV ? YV : new Uint8Array(0)
        }
      }
      memoryView(VV, eV, xV, JV) {
        try {
          return (0, rV.r)(VV, this.memory().buffer, eV, xV, JV)
        } catch (YV) {
          return this.keepCorruption(YV), null
        }
      }
      memoryData(VV, eV, xV, JV) {
        try {
          return (0, rV.g)(this.memory().buffer, VV, eV, xV, JV)
        } catch (YV) {
          return this.keepCorruption(YV), null
        }
      }
      scratchData(VV, eV) {
        const xV = this.scratch(),
          JV = this.scratchView;
        return (null === JV || void 0 === JV ? void 0 : JV.buffer) === this.memory().buffer && JV.byteOffset === xV && JV.byteLength >= VV ? JV : (this.scratchView = this.memoryData(xV, VV, 8, eV), this.scratchView)
      }
      reportCorruption(VV) {
        this.keepCorruption(new rV.d(VV))
      }
      keepCorruption(VV) {
        if (!(VV instanceof rV.d)) throw VV;
        this.corruption ??= VV
      }
      throwCorruption() {
        if (this.corruption) throw this.corruption
      }
      walk(VV, eV, xV) {
        this.rereadDirectory(), this.throwCorruption();
        const {
          ptr: JV,
          len: YV
        } = VV;
        this.eventsPtr = JV, this.eventsLen = YV, this.eventsBuffer = null;
        const UV = this.eventView();
        for (let nV = 0; nV < YV;) {
          const VV = UV.getUint32(nV, !0),
            xV = 65535 & VV,
            JV = VV >>> 16,
            YV = nV + vV.db;
          if (xV === kV.n.EntitySpawned) {
            var yV;
            if (JV !== kV.Kb.BYTES) throw NV(xV, nV, JV);
            const VV = kV.Kb.serverId(UV, YV);
            this.spawned(VV, kV.Kb.index(UV, YV), kV.Kb.kind(UV, YV)), null === (yV = eV.entityAdded) || void 0 === yV || yV.call(eV, VV)
          } else if ((xV === kV.n.ChunkSlot || xV === kV.n.EntityInfoChanged) && !(0, kV.se)(xV, UV, YV, JV, eV)) throw NV(xV, nV, JV);
          nV = YV + (0, vV.ze)(JV)
        }
        try {
          var pV;
          null === (pV = eV.afterPrescan) || void 0 === pV || pV.call(eV), this.throwCorruption(), !xV() && this.dispatch(VV, eV, xV) && (this.throwCorruption(), this.applyListener(), eV.afterWalk(VV.kind)), this.throwCorruption()
        } catch (QV) {
          throw QV instanceof rV.d && (this.corruption ??= QV), QV
        } finally {
          xV() || null !== this.corruption || this.applyDespawns(YV, eV)
        }
      }
      applyDespawns(VV, eV) {
        const xV = this.eventView();
        for (let YV = 0; YV < VV;) {
          const VV = xV.getUint32(YV, !0),
            UV = YV + vV.db;
          if ((65535 & VV) === kV.n.EntityDespawned && VV >>> 16 === kV.Kb.BYTES) {
            const VV = kV.Kb.serverId(xV, UV);
            var JV;
            if (this.despawned(VV, kV.Kb.index(xV, UV))) null === (JV = eV.entityRemoved) || void 0 === JV || JV.call(eV, VV)
          }
          YV = UV + (0, vV.ze)(VV >>> 16)
        }
        this.rereadDirectory()
      }
      dispatch(VV, eV, xV) {
        const {
          len: JV,
          net: YV,
          netOffsets: UV
        } = VV;
        let yV = this.eventView(),
          pV = 0;
        for (let PV = 0; PV < JV;) {
          const VV = yV.getUint32(PV, !0),
            JV = 65535 & VV,
            XV = VV >>> 16,
            MV = PV + vV.db;
          let zV = !1;
          if (pV < YV.length && UV[pV] === PV) eV.netEvent(YV[pV]), pV++, zV = !0;
          else if (JV === vV.hb.LocalPlayerBound) {
            var QV;
            if (XV !== vV.Rb) throw NV(JV, PV, XV);
            null === (QV = eV.localPlayerBound) || void 0 === QV || QV.call(eV, yV.getInt32(MV, !0)), zV = !0
          } else if (JV === vV.hb.LocalHurt) {
            var nV;
            if (XV !== vV.Pb) throw NV(JV, PV, XV);
            null === (nV = eV.localHurt) || void 0 === nV || nV.call(eV, yV.getInt32(MV, !0), yV.getFloat32(MV + 4, !0), yV.getUint32(MV + 8, !0)), zV = !0
          } else if (JV === vV.hb.AttackHit) {
            var wV;
            if (XV !== vV.e) throw NV(JV, PV, XV);
            const VV = yV.getFloat32(MV, !0),
              xV = yV.getFloat32(MV + 4, !0),
              YV = yV.getFloat32(MV + 8, !0),
              UV = yV.getUint32(MV + 12, !0);
            null === (wV = eV.attackHit) || void 0 === wV || wV.call(eV, VV, xV, YV, 0 !== (UV & vV.l.Crit), 0 !== (UV & vV.l.HitSelf))
          } else if (JV === vV.hb.PhysicsType) {
            var ZV;
            if (XV !== vV.nc) throw NV(JV, PV, XV);
            null === (ZV = eV.physicsType) || void 0 === ZV || ZV.call(eV, yV.getUint32(MV, !0), yV.getInt32(MV + 4, !0)), zV = !0
          } else if (JV === vV.hb.VehicleEffect) {
            var rV;
            const VV = AV(yV, MV, XV);
            if (null === VV) throw NV(JV, PV, XV);
            null === (rV = eV.vehicleEffect) || void 0 === rV || rV.call(eV, VV.op, VV.name, VV.icon, VV.level, VV.durationMs), zV = !0
          } else if (JV === vV.hb.ZoomChanged) {
            var bV;
            if (XV !== vV._d) throw NV(JV, PV, XV);
            null === (bV = eV.zoomChanged) || void 0 === bV || bV.call(eV, yV.getFloat32(MV, !0), yV.getUint8(MV + 4)), zV = !0
          } else if (JV === vV.hb.ZoomDisabled) {
            var tV;
            if (0 !== XV) throw NV(JV, PV, XV);
            null === (tV = eV.zoomDisabled) || void 0 === tV || tV.call(eV), zV = !0
          } else if (JV === vV.hb.BhopDisabled) {
            var FV;
            if (0 !== XV) throw NV(JV, PV, XV);
            null === (FV = eV.bhopDisabled) || void 0 === FV || FV.call(eV), zV = !0
          } else if (JV === vV.hb.GameCamera) {
            var TV;
            null === (TV = eV.gameCamera) || void 0 === TV || TV.call(eV, new Uint8Array(yV.buffer, yV.byteOffset + MV, XV).slice()), zV = !0
          } else if (JV === kV.n.ChunkSlot || JV === kV.n.EntityInfoChanged);
          else if (JV >= EV && JV <= BV) {
            if (this.audio && !this.audio.onAudioEvent(JV, yV, MV, XV)) throw NV(JV, PV, XV)
          } else if (JV >= jV && JV <= qV) {
            if (this.replay) {
              if (!this.replay.onReplayEvent(JV, yV, MV, XV)) throw NV(JV, PV, XV);
              zV = !0
            }
          } else if (JV >= kV.id && JV <= kV.md && JV !== vV.hb.EnvLighting) {
            if (!(0, kV.se)(JV, yV, MV, XV, eV)) throw NV(JV, PV, XV);
            zV = !0
          }
          if (zV) {
            if (xV()) return !1;
            yV = this.eventView()
          }
          PV = MV + (0, vV.ze)(XV)
        }
        return !xV()
      }
      applyListener() {
        var VV;
        if (!this.audio) return;
        const eV = kV.s.audioViewPtr(this.apiView, 0),
          xV = this.memory().buffer;
        let JV = this.audioView;
        (null === (VV = JV) || void 0 === VV ? void 0 : VV.buffer) === xV && JV.byteOffset === eV || (JV = (0, rV.g)(xV, eV, kV.u.BYTES, 8, "the audio view"), this.audioView = JV), JV && this.audio.applyListener(JV)
      }
      indexOf(VV) {
        return this.indexById.get("number" === typeof VV ? VV : +VV)
      }
      isLocal(VV) {
        return VV !== kV.Uc && VV === kV.s.localId(this.apiView, 0)
      }
      YF(VV) {
        const eV = [0, 0, 0];
        return this.readPosition("number" === typeof VV ? VV : +VV, eV) ? eV : null
      }
      readPosition(VV, eV) {
        const xV = this.apiView;
        if (void 0 !== this.indexById.get(VV) && this.isLocal(VV)) {
          for (let VV = 0; VV < 3; VV++) eV[VV] = kV.s.localPos(xV, 0, VV);
          return !0
        }
        return this.readDrawnPosition(VV, eV)
      }
      readDrawnPosition(VV, eV) {
        const xV = this.apiView,
          JV = this.indexById.get(VV);
        if (void 0 === JV || JV >= this.renderCapacity) return eV[0] = eV[1] = eV[2] = NaN, !1;
        const YV = JV * bV;
        for (let UV = 0; UV < 3; UV++) eV[UV] = this.render[YV + UV] + kV.s.origin(xV, 0, UV);
        return !0
      }
      checkValid(VV) {
        return void 0 !== this.indexOf(VV)
      }
      isAlive(VV) {
        const eV = this.indexOf(VV);
        if (void 0 === eV) return null;
        if (this.ensureViews(), eV >= this.renderCapacity) return null;
        const xV = this.vis[eV];
        return 0 === xV ? null : 0 !== (xV & kV.oe.Alive)
      }
      getEntityType(VV) {
        const eV = this.indexOf(VV);
        return void 0 === eV ? this.isLocal("number" === typeof VV ? VV : +VV) ? "Player" : null : TV(this.kinds[eV])
      }
      spawned(VV, eV, xV) {
        if (eV >= 1048576) throw new rV.d(`entity ${VV} spawned at index ${eV}`);
        this.ensureIndex(eV), this.serverIds[eV] === VV && null !== this.idStr[eV] || (this.idStr[eV] = String(VV)), this.serverIds[eV] = VV, this.kinds[eV] = xV, this.indexById.set(VV, eV)
      }
      despawned(VV, eV) {
        let xV = !1;
        return this.indexById.get(VV) === eV && (this.indexById.delete(VV), xV = !0), eV < this.serverIds.length && this.serverIds[eV] === VV && (this.serverIds[eV] = kV.Uc, this.kinds[eV] = 0, this.idStr[eV] = null), xV
      }
      ensureIndex(VV) {
        const eV = this.serverIds.length;
        if (VV < eV) return;
        let xV = 2 * eV;
        for (; xV <= VV;) xV *= 2;
        const JV = new Int32Array(xV).fill(kV.Uc);
        JV.set(this.serverIds), this.serverIds = JV;
        const YV = new Uint16Array(xV);
        YV.set(this.kinds), this.kinds = YV;
        for (let UV = eV; UV < xV; UV++) this.idStr.push(null)
      }
      eventView() {
        const VV = this.memory().buffer;
        return VV !== this.eventsBuffer && (this.eventsBuffer = VV, this.events = new DataView(VV, this.eventsPtr, this.eventsLen)), this.events
      }
      reView() {
        const VV = this.memory().buffer;
        this.buffer = VV, this.viewPtr < 0 && (this.viewPtr = this.core.hUV()), this.view = new DataView(VV, this.viewPtr, kV.s.BYTES), this.rereadDirectory()
      }
    }

    function FV(VV) {
      return VV >>> kV.b === kV.p.Item
    }

    function TV(VV) {
      var eV, xV;
      const JV = VV & kV.e;
      switch (VV >>> kV.b) {
        case kV.p.Lifeform:
          return null !== (eV = wV.m[JV]) && void 0 !== eV ? eV : null;
        case kV.p.Throwable:
          return null !== (xV = ZV.l[JV]) && void 0 !== xV ? xV : null;
        case kV.p.Mesh:
          return "Mesh";
        case kV.p.Audio:
          return "AudioEntity";
        case kV.p.Item:
          return "Item";
        default:
          return null
      }
    }
    const PV = new TextDecoder;

    function AV(VV, eV, xV) {
      if (xV < vV.Id.HEAD_BYTES) return null;
      const JV = VV.getUint32(eV, !0),
        YV = VV.getUint32(eV + 20, !0),
        UV = VV.getUint32(eV + 24, !0),
        yV = vV.Id.HEAD_BYTES + (0, vV.ze)(YV);
      if (JV !== vV.Id.UPDATE && JV !== vV.Id.REMOVE || YV > xV || yV + UV > xV) return null;
      const pV = (xV, JV) => PV.decode(new Uint8Array(VV.buffer, VV.byteOffset + eV + xV, JV)),
        QV = VV.getFloat64(eV + 12, !0);
      return {
        op: JV,
        level: VV.getFloat64(eV + 4, !0),
        durationMs: Number.isNaN(QV) ? null : QV,
        name: pV(vV.Id.HEAD_BYTES, YV),
        icon: pV(yV, UV)
      }
    }

    function NV(VV, eV, xV) {
      return new rV.d(`event ${VV} at ${eV} of ${xV} bytes`)
    }
    var XV = xV(7024),
      MV = xV(375),
      zV = xV(1252),
      GV = xV(40379),
      WV = xV(40221),
      RV = xV(2070),
      gV = xV(42322),
      DV = xV(2014),
      iV = xV(40405),
      CV = xV(40432),
      aV = xV(40419),
      oV = xV(41893),
      cV = xV(2663),
      hV = xV(40397),
      lV = xV(40427);

    function LV(VV) {
      if (!(0, lV.f)(VV)) return null;
      const eV = Number(VV);
      return (0 | eV) === eV ? eV : null
    }
    class fV {
      constructor(VV) {
        this.api = VV, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, hV.l)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.EY = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], this.entityHeading = 0, this.entityPitch = null, this.entityLookHeading = null, this.localId = kV.Uc, this.localName = String(kV.Uc)
      }
      readView() {
        this.defaultPoseRead = !1, this.EY = null;
        const VV = this.api.queries.directorView() >= kV.ub.BYTES ? this.api.scratchData(kV.ub.BYTES, "the director's view") : null;
        null !== VV && (this.defaultFov = (0, DV.E)(kV.ub.fov(VV, 0)), this.baseFov = (0, DV.E)(kV.ub.baseFov(VV, 0)), this.aspect = kV.ub.aspect(VV, 0), this.bodyHeading = kV.ub.bodyHeading(VV, 0))
      }
      getViewHeading() {
        return this.viewHeading
      }
      setViewHeading(VV) {
        this.viewHeading = VV
      }
      get localPlayerId() {
        const VV = kV.s.localId(this.api.apiView, 0);
        return VV !== this.localId && (this.localId = VV, this.localName = String(VV)), this.localName
      }
      getEntityPosition(VV) {
        return this.readEntity(VV) ? this.entityFeet : null
      }
      getEntityAimPoint(VV) {
        return this.readEntity(VV) ? this.entityAim : null
      }
      getEntityHeading(VV) {
        const eV = LV(VV);
        if (null === eV) return null;
        const xV = kV.s.localId(this.api.apiView, 0);
        return eV === xV && xV !== kV.Uc ? this.viewHeading : this.readEntity(VV) ? this.entityHeading : null
      }
      getEntityPitch(VV) {
        return this.readEntity(VV) ? this.entityPitch : null
      }
      getEntityLookHeading(VV) {
        return this.readEntity(VV) ? this.entityLookHeading : null
      }
      raycastTerrain(VV, eV, xV) {
        const JV = this.api.queries.cameraSweep(VV[0], VV[1], VV[2], eV[0], eV[1], eV[2], xV);
        return JV < xV - 1e-6 ? JV : null
      }
      getDefaultPose() {
        if (this.defaultPoseRead) return this.defaultPose;
        this.defaultPoseRead = !0;
        const VV = this.defaultPose;
        VV.fov = this.defaultFov;
        const eV = this.api.queries.directorDefaultPose() >= kV.nb.BYTES ? this.api.scratchData(kV.nb.BYTES, "the director's default pose") : null;
        if (null === eV) return VV;
        for (let xV = 0; xV < 3; xV++) VV.position[xV] = kV.nb.eye(eV, 0, xV);
        return VV.heading = kV.nb.heading(eV, 0), VV.pitch = kV.nb.pitch(eV, 0), VV
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
      readEntity(VV) {
        const eV = LV(VV);
        if (null === eV) return !1;
        if (eV === this.EY) return this.entityLive;
        this.EY = eV;
        const xV = this.api.queries.directorEntity(eV) >= kV.ob.BYTES ? this.api.scratchData(kV.ob.BYTES, "the director's entity") : null;
        if (this.entityLive = null !== xV, null === xV) return !1;
        for (let UV = 0; UV < 3; UV++) this.entityFeet[UV] = kV.ob.feet(xV, 0, UV), this.entityAim[UV] = this.entityFeet[UV];
        this.entityAim[1] += kV.ob.eyeHeight(xV, 0), this.entityHeading = kV.ob.heading(xV, 0);
        const JV = kV.ob.pitch(xV, 0);
        this.entityPitch = Number.isNaN(JV) ? null : JV;
        const YV = kV.ob.lookHeading(xV, 0);
        return this.entityLookHeading = Number.isNaN(YV) ? null : YV, !0
      }
    }
    const mV = {
        mode: "default"
      },
      KV = {
        show: () => {},
        clear: () => {}
      };

    function HV() {
      return "undefined" !== typeof document && "hidden" === document.visibilityState
    }
    class uV {
      constructor(VV) {
        this.options = VV, this.cZ = void 0, this.director = void 0, this.latest = mV, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
          uR: 0,
          eD: 0
        }, this.pointedAt = {
          heading: 0,
          pitch: 0
        }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastCallMs = 0, this.answeredPose = !1, this.wb = new Int32Array(3 * kV.Xd), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * kV.Xd), this.cZ = new fV(VV.api), this.director = new aV.c(this.cZ)
      }
      settingsChanged(VV) {
        let eV = mV;
        if (VV.length > 0) try {
          eV = (0, oV.e)(VV)
        } catch {}
        this.latest = eV, this.pending = eV
      }
      call(VV, eV, xV, JV, YV, UV) {
        var yV, pV;
        let QV;
        this.holding = !1;
        try {
          QV = this.answer(VV, eV, xV, JV, YV, UV)
        } catch (vV) {
          var nV, wV;
          throw this.answeredPose = !1, null === (nV = (wV = this.options).showFacing) || void 0 === nV || nV.call(wV, null), vV
        }
        const ZV = this.answeredPose && 0 === (JV & kV.qb.Held);
        return this.answeredPose = QV !== kV.jb.None, this.holding = this.answeredPose && !ZV, null === (yV = (pV = this.options).showFacing) || void 0 === yV || yV.call(pV, this.holding ? this.facing : null), QV
      }
      holdsView() {
        return this.holding
      }
      answer(VV, eV, xV, JV, YV, UV) {
        this.calledThisFrame = !0, this.engaged = !0, this.lastCallMs = this.now();
        const {
          cZ: yV
        } = this;
        yV.readView();
        if (0 !== (JV & kV.qb.Held) || yV.setViewHeading((0, iV.w)(yV.bodyHeading)), void 0 !== this.pending) {
          const VV = this.pending;
          this.pending = void 0, this.director.setSettings(VV), this.syncShownSettings()
        }
        this.readLook((0, cV.f)(eV), (0, cV.f)(xV), JV, (0, cV.f)(YV), (0, cV.f)(UV));
        const pV = this.director.update(VV / 1e3, this.look);
        if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !pV) return kV.jb.None;
        const [QV, nV, wV] = pV.position;
        if (0 === this.options.api.queries.directorPose(QV, nV, wV, (0, iV.w)(pV.heading), (0, iV.m)(pV.pitch), (0, DV.k)(pV.fov))) return kV.jb.None;
        if ("default" === this.director.getSettings().mode) return kV.jb.Pose;
        switch (this.facing) {
          case "camera":
            return kV.jb.FaceCamera;
          case "cursor":
            return kV.jb.FaceCursor;
          default:
            return kV.jb.FaceMovement
        }
      }
      afterFrame(VV) {
        VV ? (this.calledThisFrame || (this.holding = !1, this.engaged && this.idle()), this.calledThisFrame = !1) : this.centresLen > 0 && this.hidden() && this.now() - this.lastCallMs > 1e3 && this.setCentres(0), this.centresUnsent && this.sendCentres()
      }
      reset() {
        this.latest = mV, this.idle()
      }
      restart() {
        const VV = this.holding;
        this.idle(), this.holding = VV
      }
      idle() {
        var VV, eV;
        this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new aV.c(this.cZ), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, null === (VV = (eV = this.options).showFacing) || void 0 === VV || VV.call(eV, null), this.setCentres(0)
      }
      syncShownSettings() {
        const VV = this.director.getSettings();
        if (VV === this.shownSettings) return;
        this.shownSettings = VV;
        const eV = (0, CV.i)(VV);
        this.facing = eV.facing, this.mouseTurns = eV.mouseTurns
      }
      readLook(VV, eV, xV, JV, YV) {
        const UV = this.look,
          yV = 0 !== (xV & kV.qb.LookPointed);
        if (null === this.mouseTurns && !yV) return UV.uR = 0, UV.eD = 0, void(UV.pointedAt = void 0);
        let pV;
        yV && (this.pointedAt.heading = JV, this.pointedAt.pitch = YV, pV = this.pointedAt);
        const {
          cZ: QV
        } = this;
        QV.setViewHeading((0, CV.e)(QV.getViewHeading(), VV, eV, pV, "look" === this.mouseTurns, UV))
      }
      writeCentres(VV) {
        const eV = this.next,
          xV = Math.min(VV.length, kV.Xd);
        for (let JV = 0; JV < xV; JV++)
          for (let xV = 0; xV < 3; xV++) eV[3 * JV + xV] = Math.floor(VV[JV][xV] / kV.z);
        this.setCentres(xV)
      }
      setCentres(VV) {
        const {
          wb: eV,
          next: xV
        } = this;
        let JV = VV === this.centresLen;
        for (let YV = 0; JV && YV < 3 * VV; YV++) JV = eV[YV] === xV[YV];
        JV || (eV.fill(0), eV.set(xV.subarray(0, 3 * VV)), this.centresLen = VV, this.centresUnsent = !0, this.sendCentres())
      }
      sendCentres() {
        const VV = this.options.cmd();
        null !== VV && (0, kV.Kf)(VV, 0, this.wb, this.centresLen) && (this.centresUnsent = !1)
      }
      screen() {
        var VV, eV, xV;
        return null !== (VV = null === (eV = (xV = this.options).screen) || void 0 === eV ? void 0 : eV.call(xV)) && void 0 !== VV ? VV : KV
      }
      hidden() {
        var VV;
        return (null !== (VV = this.options.isPageHidden) && void 0 !== VV ? VV : HV)()
      }
      now() {
        var VV, eV, xV;
        return null !== (VV = null === (eV = (xV = this.options).now) || void 0 === eV ? void 0 : eV.call(xV)) && void 0 !== VV ? VV : performance.now()
      }
    }
    var sV = xV(40324),
      SV = xV(42070);
    const IV = kV.z * kV.z * kV.z,
      dV = Math.log2(kV.z),
      OV = kV.z - 1,
      Ve = 65535,
      ee = kV.N.BYTES / 4,
      xe = new Uint16Array(IV);

    function Je(VV, eV, xV) {
      return VV * kV.z * kV.z + eV * kV.z + xV
    }
    class Ye {
      constructor(VV) {
        this.chunk = VV
      }
      get data() {
        return this.chunk.gameVoxels()
      }
      index(VV, eV, xV) {
        return Je(VV, eV, xV)
      }
    }
    class Ue {
      constructor() {
        this.ids = new Map, this.cleared = new Set, this.layers = 0, this.patched = null, this.from = null
      }
    }
    class ye {
      constructor(VV, eV, xV, JV) {
        this.table = VV, this.slot = eV, this.generation = xV, this.epoch = JV, this.Ur = new Ye(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = xe, this.dataPtr = 0, this.dataBuffer = null, this.dataStamp = -1, this.version = 0, this.layers = null, this.layersVersion = -1, this.layersPtr = -1, this.staleLayers = 0
      }
      get kb() {
        return this.voxelData(), this.version === this.shownCore && this.writeCount === this.shownWrites || (this.shownCore = this.version, this.shownWrites = this.writeCount, this.shownVersion = this.table.nextVersion()), this.shownVersion
      }
      get Yk() {
        const VV = this.gameVoxels(),
          eV = this.layers ??= new Uint16Array(kV.z);
        this.layersVersion === this.version && this.layersPtr === this.dataPtr || (this.layersVersion = this.version, this.layersPtr = this.dataPtr, this.staleLayers = -1);
        for (let xV = 0; 0 !== this.staleLayers; xV++) {
          const JV = 1 << xV;
          0 !== (this.staleLayers & JV) && (this.staleLayers &= ~JV, eV[xV] = pe(VV, xV))
        }
        return eV
      }
      voxelData() {
        return this.dataStamp === this.table.stamp && 0 !== this.data.length ? this.data : this.reread()
      }
      gameVoxels() {
        const VV = this.voxelData(),
          eV = this.writes;
        if (null === eV || 0 === eV.ids.size) return VV;
        if (eV.from !== VV) {
          const xV = eV.patched ??= new Uint16Array(IV);
          xV.set(VV);
          for (const [VV, JV] of eV.ids) xV[VV] = JV;
          eV.from = VV
        }
        return eV.patched
      }
      written(VV) {
        var eV;
        return null === (eV = this.writes) || void 0 === eV ? void 0 : eV.ids.get(VV)
      }
      hasWrites() {
        return null !== this.writes && 0 !== this.writes.ids.size
      }
      write(VV, eV, xV) {
        const JV = this.writes ??= new Ue;
        JV.ids.set(VV, eV), xV && JV.cleared.add(VV), null !== JV.from && (JV.patched[VV] = eV);
        const YV = 1 << (VV >> dV & OV);
        JV.layers |= YV, this.staleLayers |= YV, this.writeCount++
      }
      clearWrites() {
        const VV = this.writes;
        null !== VV && (this.staleLayers |= VV.layers, VV.ids.clear(), VV.cleared.clear(), VV.layers = 0, VV.from = null)
      }
      dataCleared(VV) {
        var eV;
        return !0 === (null === (eV = this.writes) || void 0 === eV ? void 0 : eV.cleared.has(VV))
      }
      reread() {
        this.dataStamp = this.table.stamp;
        const VV = this.table.slotWords(),
          eV = this.slot * ee;
        if (this.epoch !== this.table.epoch || eV + ee > VV.length || 0 === VV[eV + 3] || VV[eV + 2] !== this.generation) return this.data = xe, this.dataPtr = 0, xe;
        this.version = VV[eV + 1];
        const xV = VV[eV + 0],
          JV = VV.buffer;
        return xV === this.dataPtr && JV === this.dataBuffer || (this.dataPtr = xV, this.dataBuffer = JV, this.data = this.table.voxelsAt(JV, xV)), this.data
      }
    }

    function pe(VV, eV) {
      const xV = VV[eV * kV.z];
      for (let JV = 0; JV < kV.z; JV++) {
        const YV = Je(JV, eV, 0);
        for (let eV = 0; eV < kV.z; eV++)
          if (VV[YV + eV] !== xV) return Ve
      }
      return xV
    }
    const Qe = new Uint32Array(0);

    function ne(VV, eV, xV) {
      return Je(VV & OV, eV & OV, xV & OV)
    }
    class we {
      constructor(VV, eV) {
        this.memory = VV, this.apiView = eV, this.chunks = new Map, this.written = [], this.lastKey = -1, this.lastChunk = void 0, this.slotsPtr = 0, this.slotsLen = 0, this.slotsBuffer = null, this.slots = Qe, this.walkPtr = 0, this.walkLen = 0, this.walkBuffer = null, this.walk = Qe, this.epoch = 0, this.stamp = 0, this.versions = 0, this.corruption = null
      }
      apply(VV, eV, xV, JV, YV, UV) {
        if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, UV === kV.P.ResetAll) return this.chunks.clear(), void this.epoch++;
        if (UV !== kV.P.Stored && UV !== kV.P.Unloaded) throw new rV.d(`ChunkSlot flags ${UV}`);
        const yV = (0, SV.d)(VV, eV, xV);
        if (yV < 0) return;
        if (UV === kV.P.Unloaded) return void this.chunks.delete(yV);
        const pV = this.chunks.get(yV);
        (null === pV || void 0 === pV ? void 0 : pV.slot) === JV && pV.generation === YV || this.chunks.set(yV, new ye(this, JV, YV, this.epoch))
      }
      touch() {
        this.stamp++, this.clearOverlay(), this.viewWalkThrough()
      }
      refresh() {
        if (this.stamp++, this.corruption) throw this.corruption;
        const VV = this.apiView(),
          eV = kV.s.chunkSlotsPtr(VV, 0),
          xV = kV.s.chunkSlotsLen(VV, 0);
        eV === this.slotsPtr && xV === this.slotsLen || (this.slotsPtr = eV, this.slotsLen = xV, this.slotsBuffer = null, this.slotWords()), this.viewWalkThrough(), this.clearOverlay()
      }
      viewWalkThrough() {
        const VV = this.apiView(),
          eV = kV.s.walkThroughPtr(VV, 0),
          xV = kV.s.walkThroughLen(VV, 0);
        eV === this.walkPtr && xV === this.walkLen || (this.walkPtr = eV, this.walkLen = xV, this.walkBuffer = null, this.walkWords())
      }
      clearOverlay() {
        for (const VV of this.written) VV.clearWrites();
        this.written.length = 0
      }
      nextVersion() {
        return ++this.versions
      }
      slotWords() {
        const VV = this.memory().buffer;
        var eV;
        VV !== this.slotsBuffer && (this.slotsBuffer = VV, this.slots = null !== (eV = (0, rV.r)(Uint32Array, VV, this.slotsPtr, this.slotsLen * ee, "the chunk directory")) && void 0 !== eV ? eV : Qe);
        return this.slots
      }
      voxelsAt(VV, eV) {
        try {
          var xV;
          return null !== (xV = (0, rV.r)(Uint16Array, VV, eV, IV, "a chunk's voxels")) && void 0 !== xV ? xV : xe
        } catch (JV) {
          if (!(JV instanceof rV.d)) throw JV;
          return this.corruption ??= JV, xe
        }
      }
      chunk(VV, eV, xV) {
        var JV;
        return null !== (JV = this.chunks.get((0, SV.d)(VV, eV, xV))) && void 0 !== JV ? JV : null
      }
      isLoaded(VV, eV, xV) {
        return void 0 !== this.chunkAt(Math.floor(VV), Math.floor(eV), Math.floor(xV))
      }
      vp(VV, eV, xV) {
        var JV;
        const YV = Math.floor(VV),
          UV = Math.floor(eV),
          yV = Math.floor(xV),
          pV = this.chunkAt(YV, UV, yV);
        if (!pV) return 0;
        const QV = ne(YV, UV, yV);
        return null !== (JV = pV.written(QV)) && void 0 !== JV ? JV : pV.voxelData()[QV]
      }
      setOverlay(VV, eV, xV, JV) {
        let YV = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const UV = this.chunkAt(VV, eV, xV);
        return !!UV && (UV.hasWrites() || this.written.push(UV), UV.write(ne(VV, eV, xV), JV, YV), !0)
      }
      version(VV, eV, xV) {
        var JV, YV;
        return null !== (JV = null === (YV = this.chunks.get((0, SV.d)(VV, eV, xV))) || void 0 === YV ? void 0 : YV.kb) && void 0 !== JV ? JV : null
      }
      scan(VV, eV, xV, JV, YV, UV, yV, pV) {
        const QV = kV.z;
        let nV = 0;
        for (let wV = Math.floor(eV / QV); wV * QV < YV; wV++) {
          const ZV = wV * QV,
            vV = Math.min(YV - ZV, QV);
          for (let YV = Math.floor(VV / QV); YV * QV < JV; YV++) {
            const rV = YV * QV,
              kV = Math.min(JV - rV, QV);
            for (let JV = Math.floor(xV / QV); JV * QV < UV; JV++) {
              const bV = this.chunks.get((0, SV.d)(YV, wV, JV));
              if (!bV) continue;
              const EV = JV * QV,
                BV = Math.max(xV - EV, 0),
                jV = Math.min(UV - EV, QV),
                qV = bV.Yk,
                tV = bV.gameVoxels();
              for (let xV = Math.max(eV - ZV, 0); xV < vV; xV++) {
                const eV = qV[xV];
                if (eV === Ve || 0 !== yV[eV]) {
                  nV++;
                  for (let eV = Math.max(VV - rV, 0); eV < kV; eV++) {
                    const VV = Je(eV, xV, 0);
                    for (let JV = BV; JV < jV; JV++) {
                      const YV = tV[VV + JV];
                      0 !== yV[YV] && pV.push(rV + eV, ZV + xV, EV + JV, YV)
                    }
                  }
                }
              }
            }
          }
        }
        return nV
      }
      columnTops(VV, eV, xV, JV, YV, UV, yV, pV, QV) {
        (0, sV.c)(((VV, eV, xV) => {
          var JV;
          return null !== (JV = this.chunks.get((0, SV.d)(VV, eV, xV))) && void 0 !== JV ? JV : null
        }), Ve, VV, eV, xV, JV, YV, UV, yV, pV, QV)
      }
      dataCleared(VV, eV, xV) {
        var JV;
        const YV = Math.floor(VV),
          UV = Math.floor(eV),
          yV = Math.floor(xV);
        return !0 === (null === (JV = this.chunkAt(YV, UV, yV)) || void 0 === JV ? void 0 : JV.dataCleared(ne(YV, UV, yV)))
      }
      isWalkThrough(VV) {
        if (!Number.isInteger(VV) || VV < 0 || VV > 65535) return !1;
        const eV = this.walkWords(),
          xV = VV >>> 5;
        return xV < eV.length && 1 === (eV[xV] >>> (31 & VV) & 1)
      }
      walkWords() {
        const VV = this.memory().buffer;
        var eV;
        VV !== this.walkBuffer && (this.walkBuffer = VV, this.walk = null !== (eV = (0, rV.r)(Uint32Array, VV, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== eV ? eV : Qe);
        return this.walk
      }
      chunkAt(VV, eV, xV) {
        if ((0 | VV) !== VV || (0 | eV) !== eV || (0 | xV) !== xV) return;
        const JV = (0, SV.d)(VV >> dV, eV >> dV, xV >> dV);
        return JV !== this.lastKey && (this.lastKey = JV, this.lastChunk = this.chunks.get(JV)), this.lastChunk
      }
    }
    var Ze = xV(39662),
      ve = xV(38966),
      re = xV(39343),
      ke = xV(37977),
      be = xV(37786),
      Ee = xV(35268),
      Be = xV(40328),
      je = xV(206);
    const qe = ["ambient", "cars", "crowd", "customGame_horror", "dig", "fire", "fishing", "gameStart", "gunMisc", "gunPistol", "gunRifle", "gunSemiAutomatic", "gunShotgun", "gunSubmachineGun", "mobBear", "mobCat", "mobCow", "mobCrone", "mobDeer", "mobDog", "mobFennec", "mobGolem", "mobGorilla", "mobHorse", "mobKnight", "mobPig", "mobReaver", "mobSheep", "mobSkeleton", "mobStag", "mobStalker", "mobWarper", "mobWraith", "mobZombie", "note", "phoneAndMoney", "police", "randomBeep", "randomCannon", "randomCash", "randomExp", "randomFallsmall", "randomFire", "randomFirecracker", "randomItems", "randomLaugh", "randomMagic", "randomSplash", "rpg", "step", "survivalFactory", "town"],
      te = [
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
      Fe = te.map((VV => {
        let [eV] = VV;
        return eV
      })),
      Te = Uint8Array.from(te, (VV => {
        let [, eV] = VV;
        return eV
      })),
      Pe = {
        semi_automatic: 11,
        submachine: 13,
        rifle: 10,
        pistol: 9,
        shotgun: 12
      },
      Ae = 8,
      Ne = [
        [20, 3],
        [23, 3],
        [26, 2],
        [30, 3],
        [57, 4],
        [83, 2],
        [86, 2],
        [115, 3],
        [125, 4],
        [129, 4],
        [137, 4],
        [192, 4],
        [196, 3],
        [199, 3],
        [202, 5],
        [219, 2],
        [221, 3],
        [224, 3],
        [227, 4],
        [284, 4],
        [289, 5],
        [295, 5],
        [300, 4],
        [304, 8],
        [319, 5],
        [324, 8],
        [332, 4],
        [344, 4],
        [354, 4],
        [358, 5],
        [363, 4],
        [367, 4],
        [371, 4],
        [375, 6],
        [381, 6],
        [387, 4],
        [392, 4],
        [397, 4],
        [401, 3],
        [404, 9],
        [434, 4]
      ];
    var Xe = xV(37935),
      Me = xV(37952),
      ze = xV(37950),
      Ge = xV(275);
    class We {
      constructor(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ge.e;
        this.sound = VV, this.onError = eV, this.idle = xV, this.queue = [], this.asked = new Set, this.cancelIdle = null, this.gen = 0, this.onIdle = VV => {
          this.cancelIdle = null;
          try {
            if (VV.timeRemaining() >= 1) {
              let VV = this.queue.shift();
              for (; void 0 !== VV && !this.load(VV);) VV = this.queue.shift()
            }
          } catch (eV) {
            this.onError(eV)
          } finally {
            this.schedule()
          }
        }
      }
      preload(VV) {
        const eV = [...VV].sort(((VV, eV) => VV - eV));
        for (const xV of eV) this.asked.has(xV) || (this.asked.add(xV), this.queue.push(xV));
        this.schedule()
      }
      cancel() {
        var VV;
        this.queue.length = 0, this.asked.clear(), this.gen++, null === (VV = this.cancelIdle) || void 0 === VV || VV.call(this), this.cancelIdle = null
      }
      schedule() {
        null === this.cancelIdle && this.queue.length > 0 && (this.cancelIdle = this.idle(this.onIdle))
      }
      load(VV) {
        const eV = this.sound(VV, !1),
          xV = this.sound(VV, !0),
          [JV, YV] = "unloaded" === eV.state() && "unloaded" !== xV.state() ? [xV, eV] : [eV, xV],
          UV = this.gen,
          yV = () => {
            try {
              UV === this.gen && "unloaded" === YV.state() && YV.load()
            } catch (VV) {
              this.onError(VV)
            }
          },
          pV = JV.state();
        return "unloaded" === pV ? (JV.once("load", yV), JV.load(), !0) : "unloaded" === YV.state() && ("loading" === pV ? (JV.once("load", yV), !1) : (YV.load(), !0))
      }
    }
    var Re = xV(42179);

    function ge(VV) {
      var eV;
      const xV = function(VV) {
        let eV = 0,
          xV = Fe.length;
        for (; eV < xV;) {
          const JV = eV + xV >>> 1;
          Fe[JV] < VV ? eV = JV + 1 : xV = JV
        }
        return eV
      }(VV);
      if ("" === VV || null === (eV = Fe[xV]) || void 0 === eV || !eV.startsWith(VV)) return null;
      if (Fe[xV] === VV) return [xV, 1];
      let JV = xV + 1;
      for (; JV < Fe.length && Fe[JV].startsWith(VV);) JV++;
      return [xV, JV - xV]
    }

    function De(VV) {
      let [eV, xV] = VV, JV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
      return 1 === xV ? eV : eV + Math.floor(JV() * xV)
    }

    function ie(VV) {
      for (const eV of Ne)
        if (eV[0] <= VV && VV < eV[0] + eV[1]) return eV;
      return null
    }

    function Ce(VV) {
      const eV = [];
      for (let xV = 0; xV < Te.length; xV++) Te[xV] === VV && eV.push(xV);
      return eV
    }
    const ae = {
        coneInnerAngle: 360,
        coneOuterAngle: 360,
        coneOuterGain: 0,
        distanceModel: "inverse",
        maxDistance: 1e3,
        panningModel: "HRTF",
        rolloffFactor: 1
      },
      oe = je.f.nB * je.f.playerEyeToHeightRatio,
      ce = [0, 0, -1, 0, 1, 0],
      he = qe.indexOf("note");

    function le(VV) {
      return VV >= 0 ? Math.min(1, VV) : 0
    }
    class Le {
      constructor(VV, eV, xV, JV, YV) {
        this.group = VV, this.loudness = eV, this.startMs = xV, this.howl = JV, this.host = YV, this.id = 0, this.direct = !1
      }
      getDurationMs() {
        const VV = this.host.alive(this.id);
        return VV ? 1e3 * this.howl.duration(this.id) / VV.rate : 0
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
    class fe {
      constructor(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          JV = arguments.length > 3 ? arguments[3] : void 0;
        this.createHowl = VV, this.listener = eV, this.now = xV, this.errors = 0, this.howls = new Map, this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader = void 0, this.voices = new ze.b, this.failed = new Set, this.started = new Set, this.voiceHost = {
          alive: VV => this.aliveVoice(VV),
          started: VV => this.started.has(VV),
          drop: VV => {
            var eV;
            null === (eV = this.live.get(VV)) || void 0 === eV || eV.howl.stop(VV), this.forget(VV)
          }
        }, this.handlers = {
          playSound: (VV, eV, xV, JV, YV, UV, yV, pV, QV) => {
            if (JV >= Fe.length) return;
            const nV = 0 !== (YV & kV.ee.Loop);
            YV & kV.ee.TwoD ? this.start(JV, !1, yV, UV, pV, nV, ie(JV)) : this.startSpatial(JV, yV, UV, pV, nV, VV, eV, xV, QV, this.earDistSq(VV, eV, xV), ie(JV))
          },
          soundPos: (VV, eV, xV, JV) => {
            const YV = this.core.get(JV);
            var UV;
            void 0 !== YV && (null === (UV = this.live.get(YV)) || void 0 === UV || UV.howl.pos(xV, eV, VV, YV))
          },
          soundSet: (VV, eV, xV, JV) => {
            const YV = this.core.get(VV),
              UV = void 0 === YV ? void 0 : this.live.get(YV);
            void 0 !== YV && UV && (this.setRel(YV, eV), UV.rate = xV, UV.howl.rate(xV, YV), UV.spatial && UV.howl.pannerAttr({
              refDistance: JV
            }, YV))
          },
          soundFade: (VV, eV, xV, JV) => {
            const YV = this.core.get(VV);
            void 0 !== YV && this.fade(YV, eV, xV, 0 !== (JV & kV.de.StopAfter))
          },
          soundStop: VV => {
            const eV = this.core.get(VV);
            var xV;
            void 0 !== eV && (null === (xV = this.live.get(eV)) || void 0 === xV || xV.howl.stop(eV), this.forget(eV))
          },
          soundReset: () => {
            this.stopCore()
          }
        }, this.loader = new We(((VV, eV) => this.howl(VV, eV)), (VV => {
          this.errors++, console.error("Audio preload failed", VV)
        }), JV)
      }
      preload(VV) {
        this.loader.preload(VV)
      }
      cancelPreload() {
        this.loader.cancel()
      }
      freeSoundsAfterGame() {
        for (let VV = 0; VV < Fe.length; VV++) {
          if (Me.e.has(qe[Te[VV]])) continue;
          const eV = [];
          for (const xV of [!1, !0]) {
            const JV = me(VV, xV),
              YV = this.howls.get(JV);
            void 0 !== YV && "loading" !== YV.state() && eV.push({
              key: JV,
              howl: YV
            })
          }
          if (eV.some((VV => {
              let {
                howl: eV
              } = VV;
              return "loaded" === eV.state()
            })))
            for (const {
                key: VV,
                howl: xV
              }
              of eV) this.howls.delete(VV), "loaded" === xV.state() ? (0, Xe.i)(xV) : xV.unload()
        }
      }
      onAudioEvent(VV, eV, xV, JV) {
        if (VV < kV.n.PlaySound || VV > kV.n.SoundReset) return !1;
        try {
          return (0, kV.se)(VV, eV, xV, JV, this.handlers)
        } catch (YV) {
          return this.errors++, console.error("Audio event failed", YV), !0
        }
      }
      applyListener(VV) {
        const eV = this.nextPose;
        for (let JV = 0; JV < 3; JV++) eV[2 - JV] = kV.u.listener(VV, 0, JV), eV[5 - JV] = kV.u.forward(VV, 0, JV), eV[8 - JV] = kV.u.up(VV, 0, JV);
        0 === eV[3] && 0 === eV[4] && 0 === eV[5] && eV.set(this.posed ? this.pose.subarray(3) : ce, 3);
        for (let JV = 0; JV < 9; JV++)
          if (!Number.isFinite(eV[JV])) return;
        const xV = this.pose;
        if (this.posed) {
          let VV = !0;
          for (let JV = 0; JV < 9 && VV; JV++) VV = eV[JV] === xV[JV];
          if (VV) return
        }
        this.listener.apply(eV) && (xV.set(eV), this.posed = !0)
      }
      playGame(VV, eV, xV, JV, YV, UV, yV) {
        const pV = ge(VV);
        if (null === pV) return Re.c;
        const QV = De(pV),
          nV = pV[1] > 1 ? pV : null;
        if (!xV) {
          const {
            howl: VV,
            id: xV
          } = this.start(QV, !1, eV, 0, 1, yV, nV);
          return this.gameSound(VV, xV, !1)
        }
        const wV = xV[0],
          ZV = xV[1] + oe,
          vV = xV[2];
        if (!Number.isFinite(wV) || !Number.isFinite(ZV) || !Number.isFinite(vV)) return Re.c;
        let rV;
        if (JV) {
          const VV = wV - JV[0],
            eV = ZV - JV[1],
            xV = vV - JV[2];
          if (rV = VV * VV + eV * eV + xV * xV, rV > YV * YV) return Re.c
        } else rV = this.earDistSq(wV, ZV, vV);
        const kV = this.startSpatial(QV, eV, 0, 1, yV, wV, ZV, vV, UV, rV, nV);
        return kV ? this.gameSound(kV.howl, kV.id, !0) : Re.c
      }
      setMaster(VV, eV) {
        this.level = le(VV);
        const xV = eV ? this.level : 0;
        if (xV !== this.master) {
          this.master = xV;
          for (const [VV, eV] of this.live) eV.fadeMs = 0, eV.gain = eV.rel * this.master, eV.howl.volume(eV.gain, VV)
        }
      }
      stopCore() {
        for (const eV of [...this.core.values()]) {
          var VV;
          null === (VV = this.live.get(eV)) || void 0 === VV || VV.howl.stop(eV)
        }
        this.core.clear()
      }
      stopAll() {
        this.cancelPreload();
        for (const [VV, eV] of [...this.live]) eV.howl.stop(VV), this.forget(VV);
        this.core.clear()
      }
      gameSound(VV, eV, xV) {
        const JV = {
          stop: () => (this.live.has(eV) && VV.stop(eV), JV),
          fade: (VV, xV, YV) => {
            var UV, yV;
            const pV = this.level > 0 ? xV / this.level : xV > 0 && null !== (UV = null === (yV = this.live.get(eV)) || void 0 === yV ? void 0 : yV.rel) && void 0 !== UV ? UV : 0;
            return this.fade(eV, pV, YV, !1), JV
          },
          rate: xV => {
            const YV = this.live.get(eV);
            return YV && (YV.rate = function(VV) {
              return VV > 0 && VV < 1 / 0 ? VV : 1
            }(xV), VV.rate(YV.rate, eV)), JV
          },
          getVolume: () => {
            var VV, xV;
            return (null !== (VV = null === (xV = this.live.get(eV)) || void 0 === xV ? void 0 : xV.rel) && void 0 !== VV ? VV : 0) * this.level
          },
          getRelativeVolume: () => {
            var VV, xV;
            return null !== (VV = null === (xV = this.live.get(eV)) || void 0 === xV ? void 0 : xV.rel) && void 0 !== VV ? VV : 0
          },
          setRelativeVolume: VV => (this.setRel(eV, VV), JV),
          setPannerAttr: YV => {
            if (xV && this.live.has(eV)) {
              const xV = {
                ...ae,
                refDistance: ke.h
              };
              for (const [VV, eV] of Object.entries(YV)) "number" !== typeof eV && "string" !== typeof eV || (xV[VV] = eV);
              VV.pannerAttr({
                coneOuterAngle: xV.coneOuterAngle
              }, eV), VV.pannerAttr(xV, eV)
            }
            return JV
          },
          setPosition: YV => (xV && this.live.has(eV) && Number.isFinite(YV[0] + YV[1] + YV[2]) && VV.pos(YV[2], YV[1], YV[0], eV), JV)
        };
        return JV
      }
      startSpatial(VV, eV, xV, JV, YV, UV, yV, pV, QV, nV, wV) {
        const ZV = this.howl(VV, !0);
        let vV = null;
        if (!YV) {
          if (this.failed.has(ZV)) return null;
          const xV = Te[VV] === he ? null : (0, ze.e)(Fe[VV]),
            JV = (0, ze.d)(le(eV), Math.sqrt(nV), QV);
          if (vV = new Le(xV, JV, this.now(), ZV, this.voiceHost), !this.voices.admit(vV)) return null
        }
        const rV = this.start(VV, !0, eV, xV, JV, YV, wV);
        return vV && (vV.id = rV.id, vV.direct = "loaded" === ZV.state() && !ZV._playLock), ZV.pannerAttr({
          coneOuterAngle: 360
        }, rV.id), ZV.pannerAttr({
          ...ae,
          refDistance: QV
        }, rV.id), ZV.pos(pV, yV, UV, rV.id), rV
      }
      aliveVoice(VV) {
        const eV = this.live.get(VV);
        if (!eV) return;
        const xV = eV.howl._soundById(VV);
        if (xV && !xV._ended) return eV;
        this.forget(VV)
      }
      earDistSq(VV, eV, xV) {
        if (!this.posed) return 0;
        const JV = VV - this.pose[2],
          YV = eV - this.pose[1],
          UV = xV - this.pose[0];
        return JV * JV + YV * YV + UV * UV
      }
      start(VV, eV, xV, JV, YV, UV, yV) {
        const pV = le(xV),
          QV = this.howl(VV, eV);
        "unloaded" === QV.state() && (QV.load(), null !== yV && this.loadPick(yV, eV));
        const nV = QV.play(Xe.e),
          wV = pV * this.master;
        return QV.volume(wV, nV), this.live.set(nV, {
          howl: QV,
          rel: pV,
          gain: wV,
          fadeFrom: wV,
          fadeAt: 0,
          fadeMs: 0,
          rate: YV,
          handle: JV,
          spatial: eV,
          stopTimer: void 0
        }), 0 !== JV && this.core.set(JV, nV), 1 !== YV && QV.rate(YV, nV), UV && QV.loop(!0, nV), {
          howl: QV,
          id: nV
        }
      }
      loadPick(VV, eV) {
        let [xV, JV] = VV;
        for (let UV = xV; UV < xV + JV; UV++) {
          var YV;
          const VV = this.howl(UV, eV);
          "unloaded" === VV.state() && "loading" !== (null === (YV = this.howls.get(me(UV, !eV))) || void 0 === YV ? void 0 : YV.state()) && VV.load()
        }
      }
      howl(VV, eV) {
        const xV = me(VV, eV);
        let JV = this.howls.get(xV);
        if (!JV) {
          const YV = this.createHowl(Fe[VV], eV);
          YV.on("end", (VV => {
            YV.loop(VV) || this.forget(VV)
          })), YV.on("stop", (VV => {
            this.forget(VV)
          })), YV.on("play", (VV => {
            this.live.has(VV) && this.started.add(VV)
          })), YV.on("loaderror", (VV => {
            if ("loaded" !== YV.state()) {
              this.failed.add(YV);
              for (const [VV, eV] of this.live) eV.howl === YV && this.forget(VV)
            } else "number" === typeof VV && this.forget(VV)
          })), this.howls.set(xV, YV), JV = YV
        }
        return JV
      }
      setRel(VV, eV) {
        const xV = this.live.get(VV);
        xV && (Ke(xV), xV.fadeMs = 0, xV.rel = le(eV), xV.gain = xV.rel * this.master, xV.howl.volume(xV.gain, VV))
      }
      fade(VV, eV, xV, JV) {
        const YV = this.live.get(VV);
        if (!YV) return;
        Ke(YV);
        const {
          howl: UV
        } = YV, yV = this.gainNow(YV);
        YV.rel = le(eV), YV.gain = YV.rel * this.master;
        const pV = xV > 0 ? Math.min(xV, 65535) : 0,
          QV = 0 === pV || yV === YV.gain;
        YV.fadeMs = QV ? 0 : pV, QV ? UV.volume(YV.gain, VV) : (YV.fadeFrom = yV, YV.fadeAt = this.now(), UV.fade(yV, YV.gain, pV, VV)), JV && (QV ? UV.stop(VV) : YV.stopTimer = setTimeout((() => {
          YV.stopTimer = void 0, UV.stop(VV)
        }), pV))
      }
      gainNow(VV) {
        if (VV.fadeMs > 0) {
          const eV = (this.now() - VV.fadeAt) / VV.fadeMs;
          if (eV < 1) return VV.fadeFrom + (VV.gain - VV.fadeFrom) * Math.max(0, eV);
          VV.fadeMs = 0
        }
        return VV.gain
      }
      forget(VV) {
        this.started.delete(VV);
        const eV = this.live.get(VV);
        eV && (Ke(eV), this.live.delete(VV), 0 !== eV.handle && this.core.get(eV.handle) === VV && this.core.delete(eV.handle))
      }
    }

    function me(VV, eV) {
      return 2 * VV + (eV ? 1 : 0)
    }

    function Ke(VV) {
      void 0 !== VV.stopTimer && (clearTimeout(VV.stopTimer), VV.stopTimer = void 0)
    }
    var He = xV(41876),
      ue = xV(40335);
    class se {
      constructor(VV, eV, xV, JV) {
        this.key = VV, this.model = eV, this.host = JV, this.Jv = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.uUV = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, this.tailView = void 0, this.tailCut = new Uint8Array(0), this.made = !1, this.ik = !1, this.Jv = Math.max(1, Math.ceil(xV)), this.records = new Float32Array(this.Jv * Ze.e), this.isDirty = new Uint8Array(this.Jv), this.tail = new Uint8Array(this.Jv * kV.sc.Bytes), this.tailView = new DataView(this.tail.buffer), this.make(JV.cmd())
      }
      setOrigin(VV, eV, xV) {
        this.origin[0] = VV, this.origin[1] = eV, this.origin[2] = xV
      }
      markDirty(VV) {
        !this.ik && VV >= 0 && VV < this.Jv && VV < kV.sc.Max && this.Jb(VV, VV + 1)
      }
      commit(VV) {
        if (this.ik) return;
        (VV = Math.min(Math.max(Math.floor(VV), 0), this.Jv, kV.sc.Max)) > this.count && this.Jb(this.count, VV), this.count = VV;
        const {
          origin: eV,
          sentOrigin: xV,
          dirtyList: JV
        } = this, YV = this.uUV !== VV, UV = xV[0] !== eV[0] || xV[1] !== eV[1] || xV[2] !== eV[2];
        if (0 === JV.length && !YV && !UV) return;
        const yV = this.host.cmd();
        if (!yV || !this.make(yV)) return;
        const pV = JV.length,
          {
            records: QV,
            tailView: nV
          } = this;
        for (let wV = 0; wV < pV; wV++) {
          const VV = JV[wV],
            eV = VV * Ze.e,
            xV = wV * kV.sc.Bytes,
            YV = 0 !== QV[eV + Ze.g] ? kV.sc.Hidden : 0;
          nV.setUint32(xV, (VV | YV) >>> 0, !0), nV.setFloat32(xV + 4, QV[eV], !0), nV.setFloat32(xV + 8, QV[eV + 1], !0), nV.setFloat32(xV + 12, QV[eV + 2], !0)
        }
        if ((0, kV.Qe)(yV, 0, this.key, VV, eV, pV, this.tailOf(pV))) {
          for (let VV = 0; VV < pV; VV++) this.isDirty[JV[VV]] = 0;
          JV.length = 0, this.uUV = VV, xV[0] = eV[0], xV[1] = eV[1], xV[2] = eV[2]
        }
      }
      grow(VV) {
        (VV = Math.ceil(VV)) <= this.Jv || this.ik || (this.records = (0, ue.c)(this.records, new Float32Array(VV * Ze.e)), this.isDirty = (0, ue.c)(this.isDirty, new Uint8Array(VV)), this.tail = new Uint8Array(VV * kV.sc.Bytes), this.tailView = new DataView(this.tail.buffer), this.Jv = VV)
      }
      dispose() {
        this.ik || (this.ik = !0, this.host.ik(this, this.made ? this.key : null))
      }
      make(VV) {
        if (!this.made && VV) {
          const {
            item: eV,
            scale: xV,
            yaw: JV
          } = this.model;
          this.made = (0, kV.Ue)(VV, 0, this.key, eV, xV, JV)
        }
        return this.made
      }
      tailOf(VV) {
        const eV = VV * kV.sc.Bytes;
        return this.tailCut.buffer === this.tail.buffer && this.tailCut.length === eV || (this.tailCut = this.tail.subarray(0, eV)), this.tailCut
      }
      Jb(VV, eV) {
        const {
          dirtyList: xV,
          isDirty: JV
        } = this;
        for (let YV = VV; YV < eV; YV++) 0 === JV[YV] && (JV[YV] = 1, xV.push(YV))
      }
    }
    var Se = xV(654),
      Ie = xV(45462);
    const de = new TextEncoder,
      Oe = new Uint8Array(0),
      Vx = [0, 0, 0];
    class ex {
      constructor(VV, eV) {
        this.keys = 0, this.live = new Set, this.owing = new Set, this.host = void 0, this.host = {
          cmd: VV,
          serverId: eV,
          owes: VV => {
            this.owing.add(VV)
          },
          settled: (VV, eV) => {
            this.owing.delete(VV), eV && this.live.delete(VV)
          }
        }
      }
      create(VV, eV) {
        return xV = VV, Se.k.includes(xV) ? this.add({
          lifeform: wV.m.indexOf(VV)
        }, eV) : null;
        var xV
      }
      createCosmetic(VV, eV) {
        const xV = Ie.COSMETIC_MODEL_KEYS.get(VV);
        return void 0 === xV ? null : this.add({
          attachment: xV
        }, eV)
      }
      add(VV, eV) {
        const xV = new xx(++this.keys, VV, eV, this.host);
        return this.live.add(xV), xV
      }
      disposeAll() {
        for (const VV of [...this.live]) VV.dispose()
      }
      flush() {
        if (0 === this.owing.size) return;
        const VV = this.host.cmd();
        for (const eV of this.owing)
          if (!eV.sync(VV)) return
      }
    }
    class xx {
      constructor(VV, eV, xV, JV) {
        this.key = VV, this.source = eV, this.scale = xV, this.host = JV, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.clip = null, this.clipBytes = Oe, this.perch = null, this.owed = 1, this.ik = !1, this.sync()
      }
      setPose(VV, eV) {
        this.ik || (this.feet[0] = VV[0], this.feet[1] = VV[1], this.feet[2] = VV[2], this.yaw = eV, this.owed |= 2, this.sync())
      }
      setVisible(VV) {
        this.ik || VV === this.visible || (this.visible = VV, this.owed |= 4, this.sync())
      }
      setClip(VV) {
        this.ik || VV === this.clip || (this.clip = VV, this.clipBytes = null === VV ? Oe : de.encode(VV), this.owed |= 16, this.sync())
      }
      setPerch(VV) {
        this.ik || (this.perch = VV, this.owed |= 32, this.sync())
      }
      dispose() {
        this.ik || (this.ik = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
      }
      sync() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.host.cmd();
        return this.write(VV) ? (this.host.settled(this, this.ik), !0) : (this.host.owes(this), !1)
      }
      write(VV) {
        if (!VV) return this.owed = 0, !0;
        if (1 & this.owed) {
          if (!("lifeform" in this.source ? (0, kV.cf)(VV, 0, this.key, this.source.lifeform, this.scale) : (0, kV.Ae)(VV, 0, this.key, this.source.attachment, this.scale))) return !1;
          this.owed &= -2
        }
        const {
          owed: eV,
          perch: xV
        } = this, JV = (2 & eV ? kV.Lc.Pose : 0) | (4 & eV ? kV.Lc.Visible : 0) | (16 & eV ? kV.Lc.Clip : 0) | (32 & eV ? kV.Lc.Perch : 0);
        if (0 !== JV) {
          var YV, UV;
          if (!(0, kV._e)(VV, 0, this.key, JV, this.visible ? 1 : 0, xV ? 1 : 0, this.feet, this.yaw, xV ? this.host.serverId(xV.EY) : 0, null !== (YV = null === xV || void 0 === xV ? void 0 : xV.offset) && void 0 !== YV ? YV : Vx, null !== (UV = null === xV || void 0 === xV ? void 0 : xV.yaw) && void 0 !== UV ? UV : 0, 16 & eV ? this.clipBytes : Oe)) return !1;
          this.owed &= -55
        }
        if (8 & this.owed) {
          if (!(0, kV.We)(VV, 0, this.key)) return !1;
          this.owed = 0
        }
        return !0
      }
    }
    var Jx = xV(42305);

    function Yx(VV, eV, xV, JV) {
      return (0, Jx.e)(), (0, kV.Lf)(VV, eV, xV, JV)
    }
    var Ux = xV(40357),
      yx = xV(41867),
      px = xV(42314);
    const Qx = [0, 0, 0],
      nx = [0, 0, 0],
      wx = [0, 0, 0],
      Zx = [0, 0, 0],
      vx = {
        origin: [0, 0, 0],
        direction: [0, 0, 1]
      },
      rx = [0, 0, 0],
      kx = [0, 0],
      bx = [1, 1, 1],
      Ex = 1 / 3;
    const Bx = ve.d;

    function jx(VV) {
      const eV = ve.b[VV],
        xV = eV && ve.d[eV.mainMultiblock];
      return xV && {
        main: xV,
        x: eV.compX,
        y: eV.compY,
        z: eV.compZ
      }
    }

    function qx(VV) {
      if (null === VV || void 0 === VV) return kV.Uc;
      const eV = +VV;
      return Number.isInteger(eV) && eV >= -2147483648 && eV <= 2147483647 && String(eV) === String(VV) ? eV : kV.Uc
    }

    function tx(VV, eV, xV) {
      return (0, kV.Sf)(VV, 0, eV, null !== xV && void 0 !== xV ? xV : Number.NaN)
    }
    class Fx {
      constructor(VV) {
        this.deps = VV, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new Ux.c((() => this.tables.getClientOption("forcedCameraDirectionTransitionMs")), (VV => {
          var eV, xV;
          null === (eV = (xV = this.deps).setLocalOptions) || void 0 === eV || eV.call(xV, VV)
        })), this.mobModels = new ex((() => this.deps.cmd()), qx), this.owedFrees = [], this.pendingStyle = void 0, this.pendingFar = void 0, this.farSet = !1, this.routeMesh = 0, this.routeOffset = 0, this.routeLook = "", this.routeSlide = {
          uvOffset: [0, 0]
        }, this.poolHost = {
          cmd: () => this.deps.cmd(),
          ik: (VV, eV) => {
            this.livePools.delete(VV), null !== eV && (this.owedFrees.push(eV), this.flushOwed())
          }
        }, this.api = VV.api, this.live = VV.live, this.chunks = VV.chunks, this.items = VV.items, this.tables = VV.tables
      }
      isLocal(VV) {
        return null !== VV && void 0 !== VV && +VV === this.api.localId
      }
      assertLocal(VV, eV) {
        if (!this.isLocal(VV)) throw new Error(`Attempted to ${eV} for a player that is not the local player`)
      }
      YF(VV) {
        const eV = this.api.YF(VV);
        if (!eV) throw new Error(`Entity ${VV} has no replicated position`);
        return eV
      }
      checkValid(VV) {
        return !!this.deps.isSessionLive() && (null === VV || void 0 === VV || this.api.checkValid(VV))
      }
      isAlive(VV) {
        return !1 !== this.api.isAlive(VV)
      }
      getItemStat(VV, eV, xV) {
        return this.isLocal(VV) || null !== VV && "Player" === this.api.getEntityType(VV) ? this.tables.getItemStat(eV, xV) : this.tables.getDefaultItemStat(eV, xV)
      }
      getClientOption(VV, eV) {
        return this.assertLocal(VV, "get a client option"), this.tables.getClientOption(eV)
      }
      openShop(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          xV = arguments.length > 2 ? arguments[2] : void 0;
        this.assertLocal(VV, "open shop"), yV.h.QZ("showShopFromServer", {
          toggle: eV,
          vY: xV
        }, !0)
      }
      sendMessage(VV, eV, xV) {
        this.assertLocal(VV, "send a message");
        const JV = "string" === typeof eV ? [{
          str: eV,
          style: xV
        }] : eV;
        yV.h.QZ("chat", {
          content: JV
        }, !0)
      }
      getEntityType(VV) {
        return this.api.getEntityType(VV)
      }
      getEntityName(VV) {
        const eV = qx(VV);
        return eV === kV.Uc ? void 0 : (0, He.k)(this.api, eV)
      }
      hasEffect(VV, eV) {
        const xV = qx(VV);
        return xV !== kV.Uc && (0, He.g)(this.api, xV, eV)
      }
      getMetaInfo(VV) {
        return this.tables.getMetaInfo(VV)
      }
      getPlayerDbId(VV) {
        return this.assertLocal(VV, "get a DB ID"), this.deps.playerDbId()
      }
      getBlockData(VV, eV, xV) {
        if (!this.chunks.dataCleared(VV, eV, xV)) return (0, He.c)(this.api, VV, eV, xV)
      }
      gR(VV, eV, xV, JV) {
        this.setBlockId(VV, eV, xV, this.tables.getItemId(JV))
      }
      setOtherEntitySetting(VV, eV, xV, JV) {
        if (!this.isLocal(VV)) throw new Error("Attempted to set an other-entity setting for a player that is not the local player");
        if (!Object.hasOwn(kV.gd, xV)) throw new Error(`Unknown other-entity setting ${xV}`);
        const YV = kV.gd[xV],
          UV = qx(eV);
        if (UV === kV.Uc || !this.deps.beforeWrite()) return;
        const yV = (0, oV.g)(JV);
        if (yV.length > 16384) throw new Error(`The other-entity setting ${xV}'s value is over 16384 bytes`);
        const pV = this.api.memoryView(Uint8Array, this.api.scratch(), yV.length, "set_other_entity_setting's value");
        pV && (pV.set(yV), this.api.queries.setOtherEntitySetting(UV, YV, yV.length))
      }
      getPositionView(VV) {
        return this.live.position(+VV)
      }
      readDrawnPosition(VV, eV) {
        return this.api.readDrawnPosition(qx(VV), eV)
      }
      getDrawnHeading(VV) {
        const eV = this.drawnEntity(VV);
        if (!eV) return null;
        if (1 === kV.ob.headingIsDrawn(eV, 0)) return kV.ob.heading(eV, 0);
        const xV = this.api.apiView;
        return this.isLocal(VV) && 0 === (kV.s.playerFlags(xV, 0) & kV.Ld.FreeCam) ? kV.s.heading(xV, 0) : null
      }
      getDrawnEyeHeight(VV) {
        const eV = this.drawnEntity(VV),
          xV = eV ? kV.ob.eyeHeight(eV, 0) : 0;
        return xV > 0 ? xV : null
      }
      drawnEntity(VV) {
        const eV = qx(VV);
        return eV === kV.Uc || this.api.queries.directorEntity(eV) < kV.ob.BYTES ? null : this.api.scratchData(kV.ob.BYTES, "the drawn DirectorEntity")
      }
      isEntityDrawn(VV) {
        const eV = qx(VV);
        return eV !== kV.Uc && 1 === this.api.queries.entityDrawn(eV)
      }
      getPlayerIds() {
        return px.e.ids()
      }
      getPlayerCosmetics(VV) {
        var eV;
        return null !== (eV = (0, px.f)(VV)) && void 0 !== eV ? eV : null
      }
      getLocalPlayerMovement() {
        const VV = kV.s.playerFlags(this.api.apiView, 0);
        return 0 === (VV & kV.Ld.Replay) && this.api.readDrawnPosition(this.api.localId, wx) ? {
          onGround: 0 !== (VV & kV.Ld.OnGround),
          jumpHeld: 0 !== (VV & kV.Ld.JumpHeld)
        } : null
      }
      isLocalPlayerInVehicle() {
        return (0, re.t)(this.deps.localPhysicsType())
      }
      bJV(VV) {
        return this.isLocal(VV) ? this.items.hn() : null
      }
      getInventoryItems() {
        return this.items.playerItems()
      }
      getHeldGunInaccuracy() {
        var VV, eV;
        return "Gun" === (null === (VV = this.aliveHeld()) || void 0 === VV || null === (eV = VV.typeObj) || void 0 === eV ? void 0 : eV.type) ? this.items.inaccuracy : null
      }
      aliveHeld() {
        return !1 === this.api.isAlive(this.api.localId) ? null : this.items.hn()
      }
      isCrosshairShown() {
        var VV, eV;
        const xV = (0, be.c)(JV.b.get("crosshairGameView"), JV.b.get("crosshairShownOverride"));
        if (null !== xV) return xV;
        const YV = null === (VV = this.aliveHeld()) || void 0 === VV ? void 0 : VV.typeObj,
          UV = "Gun" === (null === YV || void 0 === YV ? void 0 : YV.type),
          yV = UV || !0 === (null === YV || void 0 === YV ? void 0 : YV.showsAimingUi),
          pV = 0 === (kV.s.playerFlags(this.api.apiView, 0) & kV.Ld.ZoomFirstPerson),
          QV = null !== (eV = this.tables.getClientOption("gunshotOrigin")) && void 0 !== eV ? eV : null;
        return (0, be.g)({
          gun: UV,
          aimable: yV
        }, pV, (0, Ee.d)(), QV)
      }
      setCrosshairShown(VV) {
        JV.b.set({
          crosshairShownOverride: VV
        })
      }
      getInventoryFreeSlotCount(VV) {
        return this.isLocal(VV) ? this.items.freeSlots() : null
      }
      getSelectedInventorySlotI(VV) {
        return this.isLocal(VV) ? this.items.selectedSlot : null
      }
      getItemSlot(VV, eV) {
        return this.isLocal(VV) ? this.items.slot(eV) : null
      }
      swapInventorySlots(VV, eV) {
        return this.items.swap(VV, eV)
      }
      isPlayerCrouching(VV) {
        if (this.isLocal(VV)) return 0 !== (kV.s.playerFlags(this.api.apiView, 0) & kV.Ld.Crouching);
        const eV = qx(VV);
        return eV !== kV.Uc && 1 === this.api.queries.entityCrouching(eV)
      }
      getMiningBlock() {
        return this.live.breakingPosition()
      }
      isMining() {
        return 0 !== (kV.s.playerFlags(this.api.apiView, 0) & kV.Ld.AttemptingBreak)
      }
      getTargetedBlock() {
        return this.live.IeV()
      }
      getActionRay() {
        const VV = this.api.apiView;
        for (let eV = 0; eV < 3; eV++) vx.origin[eV] = kV.s.rxV(VV, 0, eV), vx.direction[eV] = kV.s.actionDir(VV, 0, eV);
        return vx
      }
      canModifyBlockAt(VV, eV, xV) {
        return 1 === this.api.queries.canModify(VV, eV, xV)
      }
      isSolidToPlayerBlockId(VV) {
        return this.tables.isSolidBlockId(VV) && !this.chunks.isWalkThrough(VV)
      }
      blockNameToBlockId(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.tables.blockNameToBlockId(VV, eV)
      }
      blockIdToBlockName(VV) {
        return this.tables.nameOfId(VV)
      }
      axV(VV, eV, xV, JV, YV) {
        return 1 === this.api.queries.terrainBlocked(JV, VV, eV, xV, qx(null !== YV && void 0 !== YV ? YV : null))
      }
      getChunkVersion(VV, eV, xV) {
        return this.chunks.version(VV, eV, xV)
      }
      scanBlocks(VV, eV, xV, JV, YV, UV, yV, pV) {
        return this.chunks.scan(VV, eV, xV, JV, YV, UV, yV, pV)
      }
      readColumnTops(VV, eV, xV, JV, YV, UV, yV, pV, QV) {
        this.chunks.columnTops(VV, eV, xV, JV, YV, UV, yV, pV, QV)
      }
      isBlockInLoadedChunk(VV, eV, xV) {
        return this.chunks.isLoaded(VV, eV, xV)
      }
      getBlockId(VV, eV, xV) {
        return this.chunks.vp(VV, eV, xV)
      }
      playSound(VV, eV, xV, JV, YV) {
        let UV = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (!this.isLocal(VV)) return null;
        const yV = this.playSoundFrom(eV, xV, YV, UV);
        return 1 === JV ? yV : yV.rate(JV)
      }
      preloadSounds(VV) {
        var eV, xV;
        null === (eV = (xV = this.deps).preloadSounds) || void 0 === eV || eV.call(xV, VV)
      }
      playSoundFrom(VV, eV, xV, JV) {
        var YV, UV;
        const yV = this.deps.playSound;
        if (!yV) return Re.c;
        const pV = null === xV || void 0 === xV ? void 0 : xV.cY,
          QV = null !== (YV = null === xV || void 0 === xV ? void 0 : xV.maxHearDist) && void 0 !== YV ? YV : ke.f,
          nV = null !== (UV = null === xV || void 0 === xV ? void 0 : xV.refDistance) && void 0 !== UV ? UV : ke.h;
        let wV = null;
        if (Array.isArray(pV)) Qx[0] = pV[0], Qx[1] = pV[1], Qx[2] = pV[2], wV = Qx;
        else if (void 0 !== pV && null !== pV) {
          const VV = qx(pV);
          if (!this.api.isLocal(VV)) {
            if (!this.api.readPosition(VV, Qx)) return Re.c;
            wV = Qx
          }
        }
        return yV(VV, eV, wV, wV && this.ear(), QV, nV, JV)
      }
      ear() {
        if (this.api.readPosition(this.api.localId, nx)) nx[1] += oe;
        else {
          const VV = this.api.apiView;
          if (0 === kV.s.viewProj(VV, 0, 3) && 0 === kV.s.viewProj(VV, 0, 7) && 0 === kV.s.viewProj(VV, 0, 11)) return null;
          for (let eV = 0; eV < 3; eV++) nx[eV] = kV.s.eye(VV, 0, eV)
        }
        return Number.isFinite(nx[0] + nx[1] + nx[2]) ? nx : null
      }
      setBlockId(VV, eV, xV, JV) {
        if (!Number.isInteger(JV) || JV < 0 || JV > 65535) throw new Error(`Invalid block id ${JV}`);
        if (!this.deps.beforeWrite() || !this.chunks.isLoaded(VV, eV, xV)) return;
        const YV = Math.floor(VV),
          UV = Math.floor(eV),
          yV = Math.floor(xV),
          pV = this.predictedCells(YV, UV, yV, JV);
        if (1 === this.api.queries.gR(YV, UV, yV, JV)) {
          for (let VV = 0; VV < pV.length; VV += 5) this.chunks.setOverlay(pV[VV], pV[VV + 1], pV[VV + 2], pV[VV + 3], 1 === pV[VV + 4]);
          this.live.refreshTarget()
        }
      }
      particlesEnabled() {
        return this.deps.particles.enabled()
      }
      createParticles(VV, eV) {
        return this.deps.particles.create(VV, eV)
      }
      playParticleEffect(VV) {
        this.deps.particles.playEffect(VV)
      }
      burstParticlePreset(VV, eV, xV) {
        this.deps.particles.burstPreset(VV, eV, xV)
      }
      createGameMesh(VV, eV, xV) {
        const JV = ++this.meshKeys,
          YV = this.deps.cmd();
        if (!YV) return JV;
        const {
          look: UV,
          colour: yV
        } = function(VV) {
          switch (VV.kind) {
            case void 0:
            case "flatEmissive":
              return VV.onTop ? {
                look: kV.ac.FlatOnTop,
                colour: [...VV.rgb, VV.alpha]
              } : VV.opaque ? {
                look: kV.ac.FlatOpaque,
                colour: [...VV.rgb, 1]
              } : {
                look: kV.ac.Flat,
                colour: [...VV.rgb, VV.alpha]
              };
            case "chevronPath":
              return {
                look: kV.ac.Chevrons, colour: [...(0, Be.e)(VV.colour), VV.alpha]
              };
            case "furnaceFire":
              return {
                look: kV.ac.FurnaceFire, colour: [1, 1, 1, 1]
              }
          }
        }(eV), pV = Math.floor(VV.positions.length / 3), QV = function(VV, eV) {
          const xV = Math.floor(VV.positions.length / 3),
            JV = VV.indices.length,
            YV = xV * (eV ? 5 : 3),
            UV = new Uint8Array(4 * (YV + JV)),
            yV = new DataView(UV.buffer);
          for (let nV = 0; nV < 3 * xV; nV++) yV.setFloat32(4 * nV, VV.positions[nV], !0);
          if (eV) {
            var pV;
            const eV = null !== (pV = VV.uvs) && void 0 !== pV ? pV : [];
            for (let VV = 0; VV < 2 * xV; VV++) {
              var QV;
              yV.setFloat32(4 * (3 * xV + VV), null !== (QV = eV[VV]) && void 0 !== QV ? QV : 0, !0)
            }
          }
          for (let nV = 0; nV < JV; nV++) yV.setUint32(4 * (YV + nV), VV.indices[nV], !0);
          return UV
        }(VV, (0, Ze.h)(eV));
        return (0, kV.He)(YV, 0, JV, UV, yV, xV, pV, VV.indices.length, QV) && this.liveMeshes.add(JV), JV
      }
      setGameMesh(VV, eV) {
        var xV;
        const JV = this.deps.cmd();
        if (!JV) return;
        let YV = 0;
        eV.anchor && (YV |= kV.bc.Anchor, rx[0] = eV.anchor[0], rx[1] = eV.anchor[1], rx[2] = eV.anchor[2]), void 0 !== eV.visible && (YV |= kV.bc.Visible), eV.uvOffset && (YV |= kV.bc.UvOffset, kx[0] = eV.uvOffset[0], kx[1] = eV.uvOffset[1]);
        const UV = null !== (xV = eV.visibility) && void 0 !== xV ? xV : 1;
        void 0 !== eV.visibility && (YV |= kV.bc.Visibility), eV.scale && (YV |= kV.bc.Scale, bx[0] = eV.scale[0], bx[1] = eV.scale[1], bx[2] = eV.scale[2]), 0 !== YV && (0, kV.Ne)(JV, 0, VV, YV, eV.visible ? 1 : 0, rx, kx, UV, bx)
      }
      disposeGameMesh(VV) {
        const eV = this.deps.cmd();
        eV && !(0, kV.Ke)(eV, 0, VV) || this.liveMeshes.delete(VV)
      }
      hasPackModel(VV) {
        var eV, xV, JV;
        return null !== (eV = null === (xV = (JV = this.deps).hasPackModel) || void 0 === xV ? void 0 : xV.call(JV, VV)) && void 0 !== eV && eV
      }
      disposeGameOutput() {
        const VV = VV => {
          try {
            VV()
          } catch (eV) {
            console.error("Error freeing client game output", eV)
          }
        };
        for (const eV of [...this.liveMeshes]) VV((() => {
          this.disposeGameMesh(eV)
        }));
        for (const eV of [...this.livePools]) VV((() => {
          eV.dispose()
        }));
        VV((() => {
          this.mobModels.disposeAll()
        })), VV((() => {
          this.setGroundArrowStyle(null)
        })), VV((() => {
          this.setRouteChevrons(null), this.routeOffset = 0, this.routeLook = ""
        })), VV((() => {
          this.setCrosshairShown(null)
        })), VV((() => {
          this.cameraTurn.dispose()
        })), VV((() => {
          this.farSet && (this.farSet = !1, this.setCameraFar(null))
        }))
      }
      createInstancePool(VV, eV) {
        const xV = this.tables.idOf(VV.item);
        if (void 0 === xV) return null;
        const JV = new se(++this.poolKeys, {
          item: xV,
          scale: VV.scale,
          yaw: VV.yaw
        }, eV, this.poolHost);
        return this.livePools.add(JV), JV
      }
      createMobModel(VV, eV) {
        return this.mobModels.create(VV, eV)
      }
      createCosmeticModel(VV, eV) {
        return this.mobModels.createCosmetic(VV, eV)
      }
      setRouteChevrons(VV) {
        if (0 !== this.routeMesh && (this.disposeGameMesh(this.routeMesh), this.routeMesh = 0), !VV || 0 === VV.cells.length) return;
        const eV = `${VV.colour} ${VV.alpha}`;
        eV !== this.routeLook && (this.routeLook = eV, this.routeOffset = 0), this.routeMesh = this.createGameMesh(function(VV) {
          const [eV, xV, JV] = VV[0].pos, YV = [], UV = [], yV = [];
          return VV.forEach(((VV, pV) => {
            let {
              pos: QV,
              way: [nV, wV]
            } = VV;
            const ZV = QV[0] - eV + .5,
              vV = QV[1] - xV + .04,
              rV = QV[2] - JV + .5,
              [kV, bV] = [.35 * -wV, .35 * nV],
              [EV, BV] = [pV * Ex, (pV + 1) * Ex],
              jV = YV.length / 3;
            YV.push(ZV - .5 * nV + kV, vV, rV - .5 * wV + bV), YV.push(ZV - .5 * nV - kV, vV, rV - .5 * wV - bV), YV.push(ZV + .5 * nV + kV, vV, rV + .5 * wV + bV), YV.push(ZV + .5 * nV - kV, vV, rV + .5 * wV - bV), UV.push(0, EV, 1, EV, 0, BV, 1, BV), yV.push(jV, jV + 1, jV + 2, jV + 1, jV + 3, jV + 2)
          })), {
            positions: YV,
            uvs: UV,
            indices: yV
          }
        }(VV.cells), {
          kind: "chevronPath",
          colour: VV.colour,
          alpha: VV.alpha
        }, VV.cells[0].pos), this.setRouteSlide()
      }
      slideRoute(VV) {
        0 !== this.routeMesh && (this.routeOffset = (this.routeOffset + Math.min(VV, 250) / 1e3 * 1.2 * Ex) % 1, this.setRouteSlide())
      }
      setRouteSlide() {
        this.routeSlide.uvOffset[1] = -this.routeOffset, this.setGameMesh(this.routeMesh, this.routeSlide)
      }
      setGroundArrowStyle(VV) {
        this.pendingStyle = VV, this.flushOwed()
      }
      flushOwed() {
        this.mobModels.flush();
        const VV = this.owedFrees;
        if (0 === VV.length && void 0 === this.pendingStyle && void 0 === this.pendingFar) return;
        const eV = this.deps.cmd();
        if (!eV) return VV.length = 0, void(this.pendingFar = void 0);
        let xV = 0;
        for (; xV < VV.length && (0, kV.Se)(eV, 0, VV[xV]);) xV++;
        VV.splice(0, xV);
        const JV = this.pendingStyle;
        if (void 0 !== JV) {
          (JV ? (0, kV.Wf)(eV, 0, JV.width, JV.alpha, 1, JV.endAtSolidFace ? 1 : 0) : (0, kV.Wf)(eV, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
        }
        const YV = this.pendingFar;
        void 0 !== YV && (0, kV.Rf)(eV, 0, null !== YV && void 0 !== YV ? YV : 0, null === YV ? 1 : 0) && (this.pendingFar = void 0)
      }
      setNametagOffset(VV, eV) {
        const xV = this.deps.cmd(),
          JV = qx(VV);
        xV && JV !== kV.Uc && (0, kV.ag)(xV, 0, JV, eV)
      }
      setFacingTolerance(VV, eV) {
        const xV = this.deps.cmd(),
          JV = qx(VV);
        xV && JV !== kV.Uc && tx(xV, JV, eV)
      }
      forEachEntity(VV) {
        const {
          api: eV
        } = this;
        for (let xV = 0; xV < eV.idStr.length; xV++) {
          const JV = eV.idStr[xV];
          null === JV || FV(eV.kinds[xV]) || VV(JV)
        }
      }
      getEntityInfo(VV) {
        return this.deps.entityInfo.get(VV)
      }
      isEntityInteractable(VV) {
        const eV = qx(VV);
        return eV !== kV.Uc && 1 === this.api.queries.entityInteractable(eV)
      }
      isLocalPlayer(VV) {
        return this.isLocal(VV)
      }
      getLineOwner(VV) {
        var eV;
        const xV = null === (eV = this.deps.entityInfo.get(VV)) || void 0 === eV ? void 0 : eV.meshOpts;
        if (!xV) return null;
        try {
          const {
            lineToEId: VV
          } = JSON.parse(xV);
          return null !== VV && void 0 !== VV ? VV : null
        } catch {
          return null
        }
      }
      getCameraPosition() {
        const VV = this.api.apiView;
        return Zx[0] = kV.s.eye(VV, 0, 0), Zx[1] = kV.s.eye(VV, 0, 1), Zx[2] = kV.s.eye(VV, 0, 2), Zx
      }
      getCameraFar() {
        return kV.s.cameraFar(this.api.apiView, 0)
      }
      setCameraFar(VV) {
        null !== VV && (this.farSet = !0), this.pendingFar = VV, this.flushOwed()
      }
      turnCamera(VV, eV) {
        this.cameraTurn.turn(VV, eV)
      }
      clearPickupDelay(VV) {
        const eV = this.deps.cmd(),
          xV = qx(VV);
        eV && xV !== kV.Uc && (0, kV.we)(eV, 0, xV)
      }
      sendChat(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const xV = this.deps.sendCmd();
        xV && Yx(xV, 0, yx.d.Chat, (0, oV.g)((0, yx.m)({
          yZ: VV,
          pZ: eV
        })))
      }
      sendCommand(VV) {
        VV.length <= 119 && this.sendChat(`/${VV}`)
      }
      predictedCells(VV, eV, xV, JV) {
        const YV = this.chunks,
          UV = [],
          yV = (VV, eV, xV, JV, YV) => {
            UV.push(VV, eV, xV, JV, this.tables.blockRootId(YV) === this.tables.blockRootId(JV) ? 0 : 1)
          },
          pV = YV.vp(VV, eV, xV),
          QV = jx(pV);
        if (QV) {
          const [JV, UV, nV] = [VV - QV.x, eV - QV.y, xV - QV.z], wV = Bx[YV.vp(JV, UV, nV)], ZV = null === wV || void 0 === wV ? void 0 : wV.positions.some((VV => VV.id === pV && VV.x === QV.x && VV.y === QV.y && VV.z === QV.z));
          for (const VV of (ZV && wV ? wV : QV.main).positions) YV.vp(JV + VV.x, UV + VV.y, nV + VV.z) === VV.id && yV(JV + VV.x, UV + VV.y, nV + VV.z, 0, VV.id)
        }
        const nV = jx(JV);
        if (nV)
          for (const ZV of nV.main.positions) {
            const [JV, UV, pV] = [VV + ZV.x - nV.x, eV + ZV.y - nV.y, xV + ZV.z - nV.z];
            yV(JV, UV, pV, ZV.id, YV.vp(JV, UV, pV))
          } else yV(VV, eV, xV, JV, pV);
        const wV = this.tables;
        if ((0 !== wV.attachedTopOf(pV) || 0 !== wV.attachedTopOf(JV)) && YV.isLoaded(VV, eV + 1, xV)) {
          let QV = YV.vp(VV, eV + 1, xV);
          for (let JV = 0; JV < UV.length; JV += 5) UV[JV] === VV && UV[JV + 1] === eV + 1 && UV[JV + 2] === xV && (QV = UV[JV + 3]);
          const nV = this.attachedTopWrite(pV, JV, QV);
          void 0 !== nV && yV(VV, eV + 1, xV, nV, QV)
        }
        return UV
      }
      attachedTopWrite(VV, eV, xV) {
        const JV = this.tables,
          YV = JV.attachedTopOf(VV),
          UV = JV.attachedTopOf(eV),
          yV = 0 !== YV && 0 !== xV && JV.blockRootId(xV) === JV.blockRootId(YV);
        return 0 !== YV && 0 !== UV && JV.blockRootId(VV) === JV.blockRootId(eV) ? yV && xV !== UV ? UV : void 0 : 0 === UV || !yV && 0 !== xV ? yV ? 0 : void 0 : UV
      }
    }
    const Tx = kV.nc + kV.rc * kV.vc.BYTES,
      Px = 2147483647,
      Ax = new TextDecoder,
      Nx = new TextEncoder,
      Xx = Object.freeze({
        Ey: 0,
        Bw: null,
        amountAddedToSlot: 0
      }),
      Mx = new Proxy({}, {
        get: () => () => kV.ed
      });

    function zx(VV) {
      return Number.isInteger(VV) && VV >= 0 && VV <= 65535
    }

    function Gx(VV) {
      return Number.isInteger(VV) && VV >= 0 && VV <= 4294967295
    }
    class Wx {
      constructor(VV) {
        this.deps = VV, this.ix = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(kV.rc), this.ids = new Uint16Array(kV.rc), this.amounts = new Uint16Array(kV.rc), this.attrRead = new Float64Array(kV.rc).fill(-1), this.stale = new Uint16Array(kV.rc), this.staleVersion = new Uint32Array(kV.rc), this.instances = new Uint32Array(kV.rc), this.viewPtr = 0, this.viewVersion = -1, this.len = 0, this.selected = 0, this.slotIconId = 0, this.stopped = !1, this.listeners = new Set
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
      slot(VV) {
        var eV;
        return Number.isInteger(VV) && VV >= 0 && VV < this.len && 0 !== this.ids[VV] && null !== (eV = this.facades[VV]) && void 0 !== eV ? eV : null
      }
      hn() {
        return this.slot(this.selected)
      }
      playerItems() {
        const VV = [];
        for (let eV = 0; eV < Math.min(kV.pd, this.len); eV++) VV.push(this.slot(eV));
        return VV
      }
      freeSlots() {
        let VV = 0;
        for (let eV = 0; eV < Math.min(kV.pd - kV.h, this.len); eV++) 0 === this.ids[eV] && VV++;
        return VV
      }
      amountOf(VV) {
        let eV = 0;
        for (let JV = 0; JV < Math.min(kV.pd, this.len); JV++) {
          const YV = this.slot(JV);
          var xV;
          if ((null === YV || void 0 === YV ? void 0 : YV.name) === VV) eV += null !== (xV = YV.amount) && void 0 !== xV ? xV : 1
        }
        return eV
      }
      instance(VV) {
        var eV;
        return null !== (eV = this.instances[VV]) && void 0 !== eV ? eV : 0
      }
      watch(VV) {
        return this.listeners.add(VV), () => {
          this.listeners.delete(VV)
        }
      }
      touch() {
        this.version++
      }
      flush(VV) {
        if (this.version !== this.notified || this.iconChanged) {
          this.notified = this.version, this.iconChanged = !1;
          for (const xV of [...this.listeners]) try {
            xV()
          } catch (eV) {
            VV(eV)
          }
        }
      }
      chestOpened(VV, eV, xV) {
        this.ix[0] = VV, this.ix[1] = eV, this.ix[2] = xV, this.version++
      }
      refresh() {
        const VV = this.deps.api.apiView,
          eV = kV.s.inventoryViewPtr(VV, 0),
          xV = kV.s.inventoryVersion(VV, 0),
          JV = kV.s.selectedSlot(VV, 0);
        JV !== this.selected && (this.selected = JV, this.version++);
        const YV = kV.s.slotIcon(VV, 0);
        if (YV !== this.slotIconId && (this.slotIconId = YV, this.iconChanged = !0), eV === this.viewPtr && xV === this.viewVersion) return;
        this.viewPtr = eV, this.viewVersion = xV;
        const UV = this.deps.api.memoryData(eV, Tx, 4, "the inventory view"),
          yV = UV ? Math.min(UV.getUint32(0, !0), kV.rc) : 0;
        yV !== this.len && (this.len = yV, this.version++);
        let pV = 0;
        for (let QV = 0; QV < kV.rc; QV++) {
          const VV = kV.nc + QV * kV.vc.BYTES,
            eV = null !== UV && QV < yV ? kV.vc.item(UV, VV) : 0;
          if (0 === eV || null === UV) {
            0 !== this.ids[QV] && (this.ids[QV] = 0, this.attrRead[QV] = -1, this.instances[QV]++, this.version++);
            continue
          }
          const xV = kV.vc.amount(UV, VV),
            JV = kV.vc.attrVersion(UV, VV);
          eV === this.ids[QV] && xV === this.amounts[QV] || this.fill(QV, eV, xV), JV !== this.attrRead[QV] && (this.stale[pV] = QV, this.staleVersion[pV] = JV, pV++)
        }
        pV > 0 && this.fetchAttributes(pV)
      }
      fill(VV, eV, xV) {
        const {
          tables: JV
        } = this.deps, YV = eV !== this.ids[VV];
        let UV = this.facades[VV];
        UV || (UV = {
          name: "",
          amount: null,
          attributes: {
            customAttributes: {}
          },
          typeObj: null
        }, this.facades[VV] = UV), YV && (UV.name = JV.nameOfId(eV), UV.typeObj = JV.itemType(eV), UV.attributes = {
          customAttributes: {}
        }, this.attrRead[VV] = -1, this.instances[VV]++), UV.amount = 0 === xV ? null : xV, this.ids[VV] = eV, this.amounts[VV] = xV, this.version++
      }
      fetchAttributes(VV) {
        const {
          api: eV,
          onError: xV
        } = this.deps, JV = eV.memoryView(Uint16Array, eV.scratch(), VV, "item_attributes_batch's slots");
        if (!JV) return void this.markRead(VV);
        JV.set(this.stale.subarray(0, VV));
        const YV = eV.queries.itemAttributesBatch(VV),
          UV = 4294967295 === YV ? null : eV.memoryData(eV.scratch(), YV, 4, "item_attributes_batch's answer");
        if (!UV) return void this.markRead(VV);
        const yV = new Uint8Array(UV.buffer, UV.byteOffset, YV);
        for (let QV = 0; QV + 8 <= YV;) {
          const VV = UV.getUint16(QV, !0),
            eV = UV.getUint32(QV + 4, !0),
            JV = yV.subarray(QV + 8, QV + 8 + eV);
          QV += 8 + (0, vV.ze)(eV);
          const YV = this.facades[VV];
          if (YV && 0 !== this.ids[VV] && 0 !== eV) {
            try {
              YV.attributes = JSON.parse(Ax.decode(JV))
            } catch (pV) {
              xV(pV)
            }
            this.version++
          }
        }
        this.markRead(VV)
      }
      markRead(VV) {
        for (let eV = 0; eV < VV; eV++) this.attrRead[this.stale[eV]] = this.staleVersion[eV]
      }
      swap(VV, eV) {
        return zx(VV) && zx(eV) && this.settle(this.queries().invSwap(VV, eV))
      }
      move(VV, eV, xV) {
        return zx(VV) && zx(eV) && Gx(xV) && this.settle(this.queries().invMove(VV, eV, xV))
      }
      quickMove(VV, eV, xV, JV) {
        var YV, UV;
        if (!zx(VV) || !zx(eV) || !zx(xV) || null !== JV && !Gx(JV)) return null;
        const yV = this.queries().invQuickMove(VV, eV, xV, null === JV ? -1 : Math.min(JV, Px)),
          pV = yV === kV.ed ? kV.Hb : null !== (YV = null === (UV = this.extras()) || void 0 === UV ? void 0 : UV[1]) && void 0 !== YV ? YV : kV.Hb;
        return this.settle(yV), pV === kV.Hb ? null : pV
      }
      remove(VV, eV, xV) {
        return zx(VV) && Gx(eV) && this.settle(this.queries().invRemove(VV, eV, xV ? 1 : 0))
      }
      selectSlot(VV) {
        return zx(VV) && this.settle(this.queries().selectSlot(VV))
      }
      closeChest() {
        return this.settle(this.queries().closeChest())
      }
      enchant(VV, eV, xV) {
        if (!zx(VV) || !Number.isInteger(eV)) return !1;
        const [JV, YV, UV] = xV;
        return this.settle(this.queries().invEnchant(VV, eV, Math.floor(JV), Math.floor(YV), Math.floor(UV)))
      }
      craft(VV, eV, xV) {
        let JV;
        try {
          JV = this.deps.tables.getItemId(VV)
        } catch {
          return Xx
        }
        if (!zx(eV) || null !== xV && (Number.isNaN(xV) || xV < 0)) return Xx;
        const YV = null === xV || xV > Px ? -1 : Math.floor(xV),
          UV = this.queries().craft(JV, eV, YV);
        let yV = Xx;
        const pV = UV === kV.ed ? null : this.extras();
        if (pV) {
          const [VV, eV, xV] = pV;
          yV = {
            Ey: VV,
            Bw: eV === kV.Hb ? null : eV,
            amountAddedToSlot: xV
          }
        }
        return this.settle(UV), yV
      }
      salvage(VV, eV, xV) {
        let JV;
        try {
          JV = this.deps.tables.getItemId(eV)
        } catch {
          return !1
        }
        return zx(VV) && Number.isInteger(xV) && this.settle(this.queries().salvage(VV, JV, Math.max(Math.min(xV, Px), -Px)))
      }
      craftingView(VV, eV, xV) {
        var JV;
        if (this.stopped) return null;
        const {
          api: YV,
          onError: UV
        } = this.deps, yV = VV ? Nx.encode(VV) : null;
        if (null !== yV) {
          if (yV.length > 1024) return UV(new Error(`The crafting station ${VV}'s name is over 1024 bytes`)), null;
          const eV = YV.memoryView(Uint8Array, YV.scratch(), yV.length, "crafting_view's station");
          if (!eV) return null;
          eV.set(yV)
        }
        const pV = zx(eV) && zx(xV),
          QV = YV.queries.craftingView(null !== (JV = null === yV || void 0 === yV ? void 0 : yV.length) && void 0 !== JV ? JV : 0, pV ? eV : 0, pV ? xV : 0);
        return QV < kV.gb.BYTES ? (YV.reportCorruption(`crafting_view's answer of ${QV} bytes`), null) : YV.memoryData(YV.scratch(), QV, 1, "crafting_view's answer")
      }
      queries() {
        var VV, eV;
        return !1 === (null === (VV = (eV = this.deps).beforeOp) || void 0 === VV ? void 0 : VV.call(eV)) ? (this.stopped = !0, Mx) : this.deps.api.queries
      }
      extras() {
        const {
          api: VV
        } = this.deps;
        return VV.memoryView(Uint32Array, VV.scratch(), 3, "a sync query's extra words")
      }
      settle(VV) {
        if (VV === kV.ad)(0, Jx.e)();
        else if (VV !== kV.ed) {
          const eV = this.deps.cmd();
          eV && function(VV, eV, xV) {
            return (0, Jx.e)(), (0, kV.hg)(VV, eV, xV)
          }(eV, 0, VV) || this.deps.onError(new Error(`Sync op ${VV}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
        }
        return this.stopped || this.refresh(), VV !== kV.ed
      }
    }
    const Rx = 1 / .6,
      gx = [0, 1, 0],
      Dx = [0, 0, 0],
      ix = new Uint8Array(0),
      Cx = 1.2 * je.f.QB,
      ax = new TextEncoder,
      ox = [0, 0, 0],
      cx = [0, 0, 0],
      hx = new Map;

    function lx(VV) {
      let eV = hx.get(VV);
      return eV || (hx.size >= 64 && hx.clear(), eV = ax.encode(`{"emitRate":${VV}}`), hx.set(VV, eV)), eV
    }

    function Lx(VV) {
      return Number.isFinite(VV) && VV > 0 ? VV : 0
    }

    function fx(VV, eV) {
      for (let xV = 0; xV < 3; xV++) {
        const JV = Math.abs(eV[xV]);
        ox[xV] = VV[xV] - JV, cx[xV] = 2 * JV
      }
      return Number.isFinite(ox[0] + ox[1] + ox[2] + cx[0] + cx[1] + cx[2])
    }

    function mx(VV, eV) {
      return "pos1" === VV || "pos2" === VV ? void 0 : eV
    }

    function Kx(VV, eV, xV) {
      return VV.length > kV.Hd.MaxOpts ? (xV(new Error(`${eV}'s particle opts are over ${kV.Hd.MaxOpts} bytes of JSON`)), null) : VV
    }
    const Hx = {
      moveTo() {},
      setEmitRate() {},
      emit() {},
      emitPoints() {},
      setDirections() {},
      stop() {},
      dispose() {}
    };
    class ux {
      constructor(VV) {
        this.deps = VV, this.session = 0, this.nextKey = 1, this.live = 0, this.started = !1
      }
      enabled() {
        return null !== this.sink()
      }
      sink() {
        return this.deps.isSessionLive() ? this.deps.cmd() : null
      }
      create(VV, eV) {
        var xV;
        const JV = this.sink(),
          YV = null !== (xV = eV.half) && void 0 !== xV ? xV : Dx;
        if (!JV || this.live >= kV.Hd.MaxLiveKeys || this.nextKey > kV.Hd.MaxKey || !fx(eV.pos, YV)) return Hx;
        const UV = this.nextKey,
          yV = Kx(function(VV) {
            var eV, xV, JV;
            const YV = JSON.stringify({
              texture: "string" === typeof VV.texture ? VV.texture : "smokePuff",
              Jv: VV.Jv,
              minLifeTime: VV.minLifeTime,
              maxLifeTime: VV.maxLifeTime,
              minSize: VV.minSize,
              maxSize: VV.maxSize,
              minEmitPower: VV.minEmitPower,
              maxEmitPower: VV.maxEmitPower,
              emitRate: Lx(VV.emitRate),
              gravity: null !== (eV = VV.gravity) && void 0 !== eV ? eV : Dx,
              dir1: null !== (xV = VV.dir1) && void 0 !== xV ? xV : gx,
              dir2: null !== (JV = VV.dir2) && void 0 !== JV ? JV : gx,
              colorGradients: VV.colorGradients,
              blendMode: VV.blendMode
            });
            return ax.encode(YV)
          }(VV), "createParticles", this.deps.onError);
        return yV && (0, kV.mf)(JV, 0, UV, 0, kV.Hd.PresetNone, 0, ox, cx, yV) ? (this.nextKey++, this.live++, this.started = !0, new sx(this, this.session, UV, VV, YV)) : Hx
      }
      playEffect(VV) {
        const eV = this.sink(),
          {
            pos1: xV,
            pos2: JV
          } = VV;
        if (!eV || !xV || !JV) return;
        for (let UV = 0; UV < 3; UV++) ox[UV] = Math.min(xV[UV], JV[UV]), cx[UV] = Math.abs(JV[UV] - xV[UV]);
        if (!Number.isFinite(ox[0] + ox[1] + ox[2] + cx[0] + cx[1] + cx[2])) return;
        const YV = Kx(ax.encode(JSON.stringify(VV, mx)), "playParticleEffect", this.deps.onError);
        YV && (0, kV.hf)(eV, 0, 0, kV.Hd.PresetNone, kV.Hd.HasBox, 0, ox, cx, YV)
      }
      burstPreset(VV, eV, xV) {
        const JV = this.sink(),
          YV = Math.min(Math.floor(xV), kV.Hd.MaxBurst);
        if (!JV || !Object.hasOwn(kV.dc, VV) || !(YV > 0)) return;
        const UV = Cx;
        for (let yV = 0; yV < 3; yV++) ox[yV] = eV[yV] - UV / 2, cx[yV] = UV;
        Number.isFinite(ox[0] + ox[1] + ox[2]) && (0, kV.hf)(JV, 0, 0, kV.dc[VV], kV.Hd.HasBox, YV, ox, cx, ix)
      }
      sessionEnded() {
        this.session++;
        const VV = this.started ? this.deps.cmd() : null;
        return this.started = !1, this.nextKey = 1, this.live = 0, !VV || (0, kV.of)(VV, 0)
      }
      sinkFor(VV) {
        return VV === this.session ? this.deps.cmd() : null
      }
      stop(VV, eV) {
        const xV = this.sinkFor(VV);
        xV && (0, kV.qf)(xV, 0, eV) && this.live--
      }
    }
    class sx {
      constructor(VV, eV, xV, JV, YV) {
        this.owner = VV, this.session = eV, this.key = xV, this.half = void 0, this.rate = void 0, this.stopDelayMs = void 0, this.emitted = void 0, this.stopped = !1, this.freed = !1, this.half = [Math.abs(YV[0]), Math.abs(YV[1]), Math.abs(YV[2])], this.rate = Lx(JV.emitRate), this.emitted = this.rate > 0;
        const UV = JV.maxLifeTime * Rx * 1e3 + 250;
        this.stopDelayMs = UV >= 0 ? Math.min(UV, 2147483647) : 250
      }
      sink() {
        return this.stopped ? null : this.owner.sinkFor(this.session)
      }
      moveTo(VV, eV) {
        const xV = this.sink();
        if (xV) {
          if (eV)
            for (let VV = 0; VV < 3; VV++) this.half[VV] = Math.abs(eV[VV]);
          fx(VV, this.half) && (0, kV.rf)(xV, 0, this.key, kV.Hd.HasBox, ox, cx, ix)
        }
      }
      setEmitRate(VV) {
        const eV = this.sink(),
          xV = Lx(VV);
        eV && xV !== this.rate && (0, kV.rf)(eV, 0, this.key, 0, Dx, Dx, lx(xV)) && (this.rate = xV, this.emitted ||= xV > 0)
      }
      emit(VV) {
        const eV = this.sink(),
          xV = Math.min(Math.floor(VV), kV.Hd.MaxBurst);
        eV && xV > 0 && (0, kV.hf)(eV, 0, this.key, kV.Hd.PresetNone, 0, xV, Dx, Dx, ix) && (this.emitted = !0)
      }
      emitPoints(VV, eV, xV) {
        const JV = this.sink(),
          YV = Math.min(Math.floor(xV), kV.Hd.MaxPoints, Math.floor(eV.length / 4));
        if (!JV || !(YV > 0) || !Number.isFinite(VV[0] + VV[1] + VV[2])) return;
        const UV = new Uint8Array(eV.buffer, eV.byteOffset, YV * kV.Hd.PointBytes);
        (0, kV.if)(JV, 0, this.key, YV, VV, UV) && (this.emitted = !0)
      }
      setDirections(VV, eV) {
        const xV = this.sink();
        if (!xV || !Number.isFinite(VV[0] + VV[1] + VV[2] + eV[0] + eV[1] + eV[2])) return;
        const JV = ax.encode(JSON.stringify({
          dir1: [VV[0], VV[1], VV[2]],
          dir2: [eV[0], eV[1], eV[2]]
        }));
        (0, kV.rf)(xV, 0, this.key, 0, Dx, Dx, JV)
      }
      stop() {
        const VV = this.sink();
        this.stopped = !0, VV && (this.emitted ? (this.rate > 0 && (0, kV.rf)(VV, 0, this.key, 0, Dx, Dx, lx(0)), setTimeout((() => {
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
    const Sx = Se.l,
      Ix = new TextDecoder;

    function dx(VV, eV) {
      const {
        serverIds: xV,
        kinds: JV
      } = VV;
      let YV = 0;
      for (let UV = 0; UV < xV.length; UV++) {
        const VV = xV[UV];
        if (VV !== kV.Uc && !FV(JV[UV])) {
          if (YV === eV.length) {
            const VV = new Int32Array(Math.max(64, 2 * YV));
            VV.set(eV), eV = VV
          }
          eV[YV++] = VV
        }
      }
      return {
        ids: eV,
        count: YV
      }
    }

    function Ox(VV, eV) {
      return VV.length >= eV ? VV : new Int32Array(Math.max(eV, 2 * VV.length))
    }

    function VJ(VV, eV, xV, JV) {
      for (let YV = 0; YV < xV; YV += 4096) {
        const UV = Math.min(4096, xV - YV),
          yV = VV.memoryView(Int32Array, VV.scratch(), UV, "entity_info_batch's ids");
        if (!yV) return !1;
        yV.set(eV.subarray(YV, YV + UV));
        const pV = VV.queries.entityInfoBatch(UV),
          QV = 4294967295 === pV ? null : VV.memoryData(VV.scratch(), pV, 4, "entity_info_batch's records");
        if (!QV) return !1;
        for (let VV = 0; VV + kV.Sb.BYTES <= pV;) {
          const eV = kV.Sb.len(QV, VV);
          JV(kV.Sb.serverId(QV, VV), eJ(QV, VV, eV)), VV += kV.Sb.BYTES + (0, vV.ze)(eV)
        }
      }
      return !0
    }

    function eJ(VV, eV, xV) {
      var JV, YV, UV;
      const yV = kV.Sb.kind(VV, eV),
        pV = 0 === yV ? null : TV(yV);
      if (null === pV) return null;
      const QV = kV.Sb.variation(VV, eV),
        nV = kV.Sb.pose(VV, eV),
        wV = kV.Sb.meta(VV, eV),
        ZV = kV.Sb.mesh(VV, eV),
        vV = 0 !== (kV.Sb.flags(VV, eV) & kV.Ob.HasOpts),
        rV = Sx[pV];
      return Object.freeze({
        type: pV,
        variation: QV === kV.$c ? void 0 : null !== (JV = null !== (YV = null === rV || void 0 === rV ? void 0 : rV[QV]) && void 0 !== YV ? YV : null === rV || void 0 === rV ? void 0 : rV[0]) && void 0 !== JV ? JV : "default",
        pose: nV === kV.mc ? void 0 : null !== (UV = kV.Ab[nV]) && void 0 !== UV ? UV : kV.Ab[0],
        metaInfo: wV === kV.mc ? void 0 : kV.Jc[wV],
        meshKind: ZV === kV.mc ? void 0 : kV.Fc[ZV],
        meshOpts: vV ? Ix.decode(new Uint8Array(VV.buffer, VV.byteOffset + eV + kV.Sb.BYTES, xV)) : void 0
      })
    }
    const xJ = 1,
      JJ = 2;
    class YJ {
      constructor(VV) {
        this.deps = VV, this.wanted = 0, this.hn = !1, this.refused = !1
      }
      get on() {
        return this.hn
      }
      want(VV, eV) {
        this.wanted = eV ? this.wanted | VV : this.wanted & ~VV;
        const xV = 0 !== this.wanted;
        if (xV === this.hn) return;
        const JV = this.deps.cmd();
        null !== JV ? (0, kV.jg)(JV, 0, xV ? 1 : 0) ? (this.hn = xV, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.hn = !1
      }
    }
    class UJ {
      constructor(VV) {
        this.deps = VV, this.entries = new Map, this.complete = !1, this.refill = !1, this.midFrame = !1, this.pending = new Int32Array(64), this.pendingCount = 0, this.ids = new Int32Array(64)
      }
      get(VV) {
        var eV;
        return this.complete || this.fill(), null !== (eV = this.entries.get("string" === typeof VV ? VV : String(VV))) && void 0 !== eV ? eV : null
      }
      inCoreCall() {
        this.midFrame = !0
      }
      stale(VV) {
        if (this.complete) {
          if (this.pendingCount === this.pending.length) {
            const VV = new Int32Array(2 * this.pending.length);
            VV.set(this.pending), this.pending = VV
          }
          this.pending[this.pendingCount++] = VV
        }
      }
      removed(VV) {
        this.entries.size > 0 && this.entries.delete(String(VV))
      }
      refresh() {
        const VV = this.pendingCount;
        if (this.pendingCount = 0, this.midFrame = !1, !this.deps.watch.on || this.refill) return this.complete = !1, void(this.refill = !1);
        if (VV > 0 && this.complete) {
          const {
            api: eV
          } = this.deps;
          let xV = 0;
          const JV = this.ids = Ox(this.ids, VV);
          for (let YV = 0; YV < VV; YV++) {
            const VV = this.pending[YV],
              UV = eV.indexById.get(VV);
            void 0 === UV || FV(eV.kinds[UV]) ? this.entries.delete(String(VV)) : JV[xV++] = VV
          }
          xV > 0 && !this.batch(JV, xV) && (this.complete = !1)
        }
      }
      sessionEnded() {
        this.entries.clear(), this.complete = !1, this.refill = !1, this.midFrame = !1, this.pendingCount = 0, this.deps.watch.want(xJ, !1)
      }
      fill() {
        const {
          api: VV
        } = this.deps;
        if (this.complete = !0, this.pendingCount = 0, this.entries.clear(), this.deps.isSessionLive()) {
          const {
            watch: VV
          } = this.deps, eV = VV.on;
          VV.want(xJ, !0), !eV && VV.on && (this.refill = this.midFrame)
        }
        const {
          ids: eV,
          count: xV
        } = dx(VV, this.ids);
        this.ids = eV, xV > 0 && !this.batch(eV, xV) && (this.refill = !0)
      }
      batch(VV, eV) {
        return VJ(this.deps.api, VV, eV, ((VV, eV) => {
          null === eV ? this.entries.delete(String(VV)) : this.entries.set(String(VV), eV)
        }))
      }
    }
    var yJ = xV(5301);

    function pJ(VV) {
      if ("message" !== VV.type || VV.yZ !== yJ.mc.NewClientOptions || VV.payloadKind !== vV.sc.Msgpack) return null;
      const eV = (0, oV.e)(VV.payload);
      if (null === eV || "object" !== typeof eV || Array.isArray(eV)) throw new Error("NewClientOptions whose body isn't an object of options");
      return eV
    }
    var QJ = xV(1269),
      nJ = xV(37790);

    function wJ(VV, eV, xV, JV, YV, UV, pV) {
      var QV, nV, wV;
      switch (VV) {
        case kV.he.ToggleMenu: {
          const VV = kV.D[eV];
          yV.h.QZ("toggleMenu", void 0 === VV ? "inventory" : `inventory|${VV}`);
          break
        }
        case kV.he.EditBoard:
          yV.h.QZ("EditBoard", {
            pos: 0 === eV ? null : xV
          });
          break;
        case kV.he.EditCodeBlock:
        case kV.he.ViewCodeBlock:
          yV.h.QZ("EditCodeBlock", {
            pos: xV,
            canChangePos: VV === kV.he.EditCodeBlock
          });
          break;
        case kV.he.EditCustomLobbyBlock:
          yV.h.QZ("EditCustomLobbyBlock", {
            pos: xV
          });
          break;
        case kV.he.OpenIronChest:
          yV.h.QZ("OpenIronChest", {
            pos: xV
          });
          break;
        case kV.he.EditNameTag:
          yV.h.QZ("EditNameTag", null !== (QV = null === (nV = YV.hn()) || void 0 === nV || null === (wV = nV.attributes.customAttributes) || void 0 === wV ? void 0 : wV.text) && void 0 !== QV ? QV : "");
          break;
        case kV.he.EditBook: {
          var ZV, vV, bV;
          const VV = null === (ZV = YV.hn()) || void 0 === ZV ? void 0 : ZV.attributes;
          yV.h.QZ("EditBook", {
            pages: (0, QJ.R)(null === VV || void 0 === VV || null === (vV = VV.customAttributes) || void 0 === vV ? void 0 : vV.pages),
            title: null !== (bV = null === VV || void 0 === VV ? void 0 : VV.customDisplayName) && void 0 !== bV ? bV : "Title",
            isPublished: !(null === VV || void 0 === VV || !VV.customDescription)
          });
          break
        }
        case kV.he.CantChangeBlock:
          ! function(VV, eV) {
            const xV = eV.getClientOption("cantChangeError"),
              JV = eV.getClientOption(VV ? "cantBuildError" : "cantBreakError"),
              YV = VV ? xV : JV;
            (eV.getClientOption("canChange") || YV || "You cannot modify this block" !== xV) && yV.h.QZ("showBottomMessage", {
              message: JV || xV,
              type: "Error"
            })
          }(1 === eV, UV);
          break;
        case kV.he.MiddleBarStart:
          yV.h.QZ("middleScreenBarInitiate", {
            duration: JV,
            tJ: 1 === xV[0],
            horizBarRemOffset: eV
          });
          break;
        case kV.he.MiddleBarStop:
          yV.h.QZ("middleScreenBarRemove");
          break;
        case kV.he.Hitmarker:
          yV.h.QZ("localGunHitmarker", {
            TJ: 1 === eV
          });
          break;
        case kV.he.ShotsLeft:
          yV.h.QZ("localPlayerNewShotsLeft", JV);
          break;
        case kV.he.AimingOverlay:
          yV.h.QZ("aimingOverlay", 3 === (3 & eV) ? "sniper" : "none");
          break;
        case kV.he.BottomMessage:
          yV.h.QZ("showBottomMessage", JSON.parse(pV()));
          break;
        case kV.he.Crosshair:
          YV.inaccuracy = (0, cV.f)(JV), (0, nJ.d)().crosshairAccuracy(YV.inaccuracy);
          break;
        case kV.he.ChargeStage:
          break;
        case kV.he.EmoteWheelClose:
          yV.h.QZ("requestEmoteWheelClose");
          break;
        case kV.he.BlockMined:
          yV.h.QZ("localBlockMined");
          break;
        default:
          throw new rV.d(`UiEvent of no kind: what ${VV}`)
      }
    }
    var ZJ = xV(39166),
      vJ = xV(35311),
      rJ = xV(2094),
      kJ = xV(37994),
      bJ = xV(35319),
      EJ = xV(5281);
    const BJ = 10,
      jJ = {
        player: [],
        chestOrCreative: [],
        chest: null,
        creative: !1,
        selectedSlot: 0,
        freeSlots: 0
      },
      qJ = {
        items: [],
        ammo: 0,
        selectedSlot: 0
      },
      tJ = {
        gun: !1,
        aimable: !1,
        chargeName: null
      };

    function FJ(VV, eV) {
      let xV, JV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        YV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      const UV = () => (xV = (0, rJ.m)(xV, eV()), xV);
      return {
        current: UV,
        watch(eV) {
          const xV = () => {
              eV(UV())
            },
            yV = [VV.watch(xV)];
          return null !== JV && yV.push((0, rJ.q)((VV => {
            VV.some(JV) && xV()
          }))), null !== YV && yV.push(YV(xV)), () => {
            for (const VV of yV) VV()
          }
        }
      }
    }

    function TJ(VV) {
      return VV && {
        name: VV.name,
        amount: VV.amount,
        attributes: VV.attributes
      }
    }
    const PJ = new WeakMap;

    function AJ(VV) {
      let eV = PJ.get(VV);
      return void 0 === eV && (eV = (0, bJ.creativeItemIds)().map((eV => ({
        name: VV.nameOfId(eV),
        amount: VV.isStackableId(eV) ? 1 : null,
        attributes: (0, ZJ.d)("Gun" === (0, bJ.itemTypeOf)(eV) ? {
          type: "Gun",
          clipSize: (0, bJ.clipSizeOf)(eV)
        } : void 0)
      }))), PJ.set(VV, eV)), eV
    }

    function NJ(VV, eV, xV, JV) {
      const YV = eV => (VV.flush(JV), eV),
        UV = xV => {
          var JV, YV, UV, yV, pV, QV, nV;
          const wV = VV.slot(xV);
          if (!wV) return null;
          const {
            rootName: ZV,
            metaStr: vV
          } = eV.getMetaInfo(wV.name);
          return {
            name: wV.name,
            amount: wV.amount,
            attributes: wV.attributes,
            instance: VV.instance(xV),
            displayName: null !== (JV = wV.attributes.customDisplayName) && void 0 !== JV ? JV : eV.getDisplayName(ZV),
            requiresAmmo: "RequiresAmmo" === vV,
            clipSize: null !== (YV = null !== (UV = null === (yV = wV.attributes.customAttributes) || void 0 === yV || null === (pV = yV.gunStats) || void 0 === pV ? void 0 : pV.clipSize) && void 0 !== UV ? UV : null === (QV = eV.getGunStats(ZV)) || void 0 === QV ? void 0 : QV.clipSize) && void 0 !== YV ? YV : null === (nV = wV.typeObj) || void 0 === nV ? void 0 : nV.clipSize
          }
        },
        pV = function(VV, eV) {
          let xV = null,
            JV = {
              focus: null,
              recipes: [],
              detail: null
            },
            YV = -1;
          const UV = new Set;
          return {
            read() {
              var UV, yV;
              if (null === xV) return null !== JV.focus && (JV = {
                ...JV,
                focus: null
              }), JV;
              if (JV.focus === xV && YV === VV.changes) return JV;
              if (YV = VV.changes, 0 === VV.length) return JV = {
                focus: xV,
                recipes: [],
                detail: null
              }, JV;
              let pV = 0;
              if (null !== xV.recipe) try {
                pV = eV.getItemId(xV.recipe.name)
              } catch {}
              const QV = VV.craftingView(xV.station, pV, null !== (UV = null === (yV = xV.recipe) || void 0 === yV ? void 0 : yV.ky) && void 0 !== UV ? UV : 0);
              return JV = null === QV ? {
                focus: xV,
                recipes: [],
                detail: null
              } : function(VV, eV, xV) {
                let JV = kV.gb.BYTES;
                const YV = [];
                for (let wV = kV.gb.recipes(VV, 0); wV > 0; wV--) {
                  const xV = kV.Y.flags(VV, JV),
                    UV = {
                      name: eV.nameOfId(kV.Y.item(VV, JV)),
                      ky: kV.Y.recipe(VV, JV),
                      requires: [],
                      produces: kV.Y.produces(VV, JV),
                      haveIngredients: 0 !== (xV & kV.X.HaveIngredients),
                      listed: 0 !== (xV & kV.X.Listed)
                    };
                  let yV = kV.Y.requires(VV, JV);
                  for (JV += kV.Y.BYTES; yV > 0; yV--) {
                    const xV = kV.$.items(VV, JV);
                    UV.requires.push({
                      items: zJ(VV, JV + kV.$.BYTES, xV, eV),
                      amt: kV.$.amount(VV, JV)
                    }), JV += kV.$.BYTES + 2 * xV
                  }
                  YV.push(UV)
                }
                const UV = kV.gb.flags(VV, 0);
                if (null === xV.recipe || 0 === (UV & kV.cb.Detail)) return {
                  focus: xV,
                  recipes: YV,
                  detail: null
                };
                const yV = {},
                  pV = {};
                for (let wV = kV.gb.ingredients(VV, 0); wV > 0; wV--) {
                  const xV = kV.W.item(VV, JV),
                    YV = kV.W.from(VV, JV),
                    UV = kV.W.amount(VV, JV);
                  JV += kV.W.BYTES;
                  const QV = YV === kV.C ? null : zJ(VV, JV, YV, eV);
                  if (null !== QV && (JV += 2 * YV), 0 === xV) continue;
                  const nV = eV.nameOfId(xV);
                  yV[nV] = UV, null !== QV && (pV[nV] = QV)
                }
                const {
                  name: QV,
                  ky: nV
                } = xV.recipe;
                return {
                  focus: xV,
                  recipes: YV,
                  detail: {
                    name: QV,
                    ky: nV,
                    craftAllTimes: kV.gb.craftAllTimes(VV, 0),
                    roomForOne: 0 !== (UV & kV.cb.RoomForOne),
                    resultStackable: Boolean(eV.getItemStat(QV, "stackable")),
                    amounts: yV,
                    ingredientsCraftedFrom: pV
                  }
                }
              }(QV, eV, xV), JV
            },
            setFocus(VV) {
              xV = VV;
              for (const eV of [...UV]) eV()
            },
            watchFocus: VV => (UV.add(VV), () => {
              UV.delete(VV)
            })
          }
        }(VV, eV);
      return {
        states: {
          inventory: FJ(VV, (() => {
            const xV = VV.length;
            if (0 === xV) return jJ;
            const JV = [];
            for (let eV = 0; eV < kV.pd; eV++) JV.push(TJ(VV.slot(eV)));
            const YV = VV.slotIcon,
              UV = JV[VV.selectedSlot];
            0 !== YV && UV && (JV[VV.selectedSlot] = {
              ...UV,
              icon: eV.nameOfId(YV)
            });
            const yV = !0 === eV.getClientOption("creative");
            let pV = [],
              QV = null;
            if (xV > kV.pd) {
              for (let eV = kV.pd; eV < xV; eV++) pV.push(TJ(VV.slot(eV)));
              QV = {
                type: null,
                pos: [...VV.ix],
                numSlots: xV - kV.pd,
                ironChest: null
              }
            } else yV && (pV = AJ(eV));
            return {
              player: JV,
              chestOrCreative: pV,
              chest: QV,
              creative: yV,
              selectedSlot: VV.selectedSlot,
              freeSlots: VV.freeSlots()
            }
          }), (0, rJ.i)("creative")),
          hotbar: FJ(VV, (() => {
            if (0 === VV.length) return qJ;
            const eV = [];
            for (let VV = 0; VV < BJ; VV++) eV.push(UV(VV));
            return {
              items: eV,
              ammo: VV.amountOf("Ammo"),
              selectedSlot: VV.selectedSlot
            }
          }), (0, rJ.h)("DisplayName", "GunStats")),
          crafting: FJ(VV, pV.read, null, pV.watchFocus),
          heldItemAim: FJ(VV, (() => {
            var eV;
            if (!xV()) return tJ;
            const JV = null === (eV = VV.hn()) || void 0 === eV ? void 0 : eV.typeObj,
              YV = "Gun" === (null === JV || void 0 === JV ? void 0 : JV.type);
            return {
              gun: YV,
              aimable: YV || !0 === (null === JV || void 0 === JV ? void 0 : JV.showsAimingUi),
              chargeName: "Chargeable" === (null === JV || void 0 === JV ? void 0 : JV.type) ? JV.name : null
            }
          }), null, (VV => function(VV, eV) {
            let xV = VV();
            return (0, EJ.u)((() => {
              const JV = VV();
              JV !== xV && (xV = JV, eV(JV))
            }))
          }(xV, VV)))
        },
        events: {
          hotbarSlotRequested: (0, rJ.c)("setSelectedInventorySlotI"),
          hotbarScrolled: (0, rJ.c)("ScrollInventorySlot"),
          numberKeyPressed: (0, rJ.c)("numkeyPressed"),
          inventoryDropRequested: (0, rJ.c)("DropInvenItem"),
          chestToggled: (0, rJ.c)("chestToggleFromServer"),
          chestRefreshed: (0, rJ.c)("chestRefreshedFromServer", MJ),
          inventorySynced: (0, rJ.c)("syncedInvenFromServer", MJ),
          enchantingTableOpened: (0, rJ.c)("enchantingTable", (VV => {
            let {
              position: xV,
              vp: JV
            } = VV;
            return {
              position: [...xV],
              blockName: eV.getMetaInfo(JV).rootName
            }
          }))
        },
        commands: {
          selectHotbarSlot(eV) {
            VV.selectSlot(eV), VV.flush(JV)
          },
          removeInventoryItem(eV) {
            let {
              slot: xV,
              amount: JV,
              drop: UV
            } = eV;
            return YV(VV.remove(xV, JV, UV))
          },
          swapInventorySlots(eV) {
            let {
              a: xV,
              b: JV
            } = eV;
            return YV(VV.swap(xV, JV))
          },
          moveInventoryItem(eV) {
            let {
              from: xV,
              to: JV,
              amount: UV
            } = eV;
            return YV(VV.move(xV, JV, UV))
          },
          quickMoveInventoryItem(eV) {
            let {
              slot: xV,
              start: JV,
              end: UV,
              amount: yV
            } = eV;
            return YV(VV.quickMove(xV, JV, UV, yV))
          },
          closeChest() {
            VV.closeChest(), VV.flush(JV), yV.h.QZ("chestClosedByPlayer")
          },
          focusCrafting(VV) {
            pV.setFocus(VV)
          },
          craftRecipe(eV) {
            let {
              name: xV,
              ky: JV,
              times: UV
            } = eV;
            return YV(VV.craft(xV, JV, UV))
          },
          salvageItem(eV) {
            let {
              slot: xV,
              name: JV,
              amount: UV
            } = eV;
            return YV(VV.salvage(xV, JV, UV))
          },
          enchantItem(eV) {
            let {
              slot: xV,
              level: JV,
              tablePos: YV
            } = eV;
            VV.enchant(xV, JV, YV)
          }
        },
        queries: {
          enchantingOffer(xV) {
            let {
              slot: JV,
              blockName: YV
            } = xV;
            return function(VV, eV, xV, JV) {
              const YV = VV.slot(xV);
              if (!YV || !eV.getClientOption("canCraft") || !(0, vJ.q)(JV) || (0, vJ.n)(YV.attributes)) return XJ;
              const UV = (0, bJ.enchantmentPerksOf)(eV.getItemId(YV.name));
              if (0 === UV.length) return XJ;
              const yV = [];
              for (let pV = 0; pV < kJ.b; pV++) {
                const {
                  commonProb: VV,
                  uncommonProb: eV,
                  rareProb: xV,
                  epicProb: YV,
                  legendaryProb: UV,
                  level: QV
                } = (0, vJ.f)(JV, pV);
                yV.push({
                  level: QV,
                  odds: [VV, eV, xV, YV, UV].map((VV => 100 * VV))
                })
              }
              return {
                perks: [...UV],
                options: yV
              }
            }(VV, eV, JV, YV)
          }
        }
      }
    }
    const XJ = Object.freeze({
      perks: [],
      options: []
    });

    function MJ() {
      return null
    }

    function zJ(VV, eV, xV, JV) {
      const YV = [];
      for (let UV = 0; UV < xV; UV++) {
        const xV = VV.getUint16(eV + 2 * UV, !0);
        0 !== xV && YV.push(JV.nameOfId(xV))
      }
      return YV
    }
    class GJ {
      constructor(VV) {
        this.api = VV, this.positions = new Map, this.targeted = {
          VVV: 0,
          position: [0, 0, 0],
          normal: [0, 0, 0],
          FE: [0, 0, 0]
        }, this.hasTarget = !1, this.breaking = [0, 0, 0], this.isBreaking = !1
      }
      position(VV) {
        let eV = this.positions.get(VV);
        return eV || (this.api.checkValid(VV) || this.api.isLocal(VV) ? (eV = [NaN, NaN, NaN], this.api.readPosition(VV, eV), this.positions.set(VV, eV), eV) : null)
      }
      IeV() {
        return this.hasTarget ? this.targeted : null
      }
      breakingPosition() {
        return this.isBreaking ? this.breaking : null
      }
      refresh() {
        for (const [eV, xV] of this.positions) this.api.readPosition(eV, xV) || this.api.checkValid(eV) || this.api.isLocal(eV) || this.positions.delete(eV);
        const VV = this.api.apiView;
        if (this.refreshTarget(), this.isBreaking = 0 !== (kV.s.playerFlags(VV, 0) & kV.Ld.Breaking) && kV.s.breakingProgress(VV, 0) >= 0, this.isBreaking)
          for (let eV = 0; eV < 3; eV++) this.breaking[eV] = kV.s.breakingPos(VV, 0, eV)
      }
      refreshTarget() {
        const VV = this.api.apiView,
          eV = kV.s.targetBlockId(VV, 0);
        if (this.hasTarget = eV !== kV.Yc, this.hasTarget) {
          const xV = this.targeted;
          xV.VVV = eV;
          for (let eV = 0; eV < 3; eV++) xV.position[eV] = kV.s.targetBlock(VV, 0, eV), xV.normal[eV] = kV.s.targetNormal(VV, 0, eV), xV.FE[eV] = kV.s.targetAdjacent(VV, 0, eV)
        }
      }
      despawned(VV) {
        const eV = this.positions.get(VV);
        eV && !this.api.isLocal(VV) && (eV.fill(NaN), this.positions.delete(VV))
      }
    }
    var WJ = xV(41900),
      RJ = xV(41880),
      gJ = xV(37521),
      DJ = xV(37985);
    const iJ = 1,
      CJ = 2;
    class aJ {
      constructor() {
        this.game = new DJ.g, this.client = new DJ.g, this.hn = 0, this.movesFly = null
      }
      setGame(VV) {
        if (null === VV || "object" !== typeof VV) return !1;
        const {
          key: eV,
          value: xV
        } = VV;
        return "string" === typeof eV && (this.game.setBooleanType(eV, Boolean(xV)), !0)
      }
      setClient(VV, eV) {
        this.client.setBooleanType(VV, eV)
      }
      clearGame() {
        this.game = new DJ.g, this.movesFly = null
      }
      setMovesFly(VV) {
        this.movesFly = VV
      }
      perms() {
        return (this.game._getTotalBooleanVal() ? iJ : 0) | (this.client._getTotalBooleanVal() ? CJ : 0)
      }
      write(VV) {
        const eV = this.perms(),
          {
            movesFly: xV
          } = this;
        if (eV === this.hn && null === xV) return !0;
        let JV = kV.Vb.Keep;
        return null !== xV && (JV = xV ? kV.Vb.On : kV.Vb.Off), !(!VV || !(0, kV.De)(VV, 0, JV, eV, xV ? 1 : 0)) && (this.hn = eV, this.movesFly = null, !0)
      }
    }
    class oJ {
      constructor(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 35;
        this.api = VV, this.screenBandPct = void 0, this.clipX = 0, this.clipY = 0, this.clipW = 0, this.eye = [0, 0, 0], this.forward = [0, 0, 1], this.along = [0, 0, 0], this.screenBandPct = {
          x: pV.d,
          get y() {
            return eV()
          }
        }
      }
      get hasView() {
        const VV = this.api.apiView,
          eV = kV.s.viewProj;
        return 0 !== eV(VV, 0, 3) || 0 !== eV(VV, 0, 7) || 0 !== eV(VV, 0, 11) || 0 !== eV(VV, 0, 15)
      }
      get cameraPosition() {
        const VV = this.api.apiView,
          {
            eye: eV
          } = this;
        for (let xV = 0; xV < 3; xV++) eV[xV] = kV.s.eye(VV, 0, xV);
        return eV
      }
      get cameraDirection() {
        const VV = this.api.apiView,
          eV = kV.s.viewProj,
          xV = eV(VV, 0, 3),
          JV = eV(VV, 0, 7),
          YV = eV(VV, 0, 11),
          UV = Math.hypot(xV, JV, YV),
          {
            forward: yV
          } = this;
        return UV > 0 && (yV[0] = xV / UV, yV[1] = JV / UV, yV[2] = YV / UV), yV
      }
      get cameraHeading() {
        return kV.s.heading(this.api.apiView, 0)
      }
      get cameraPitch() {
        return kV.s.pitch(this.api.apiView, 0)
      }
      get tanHalfFovX() {
        return kV.s.tanHalfFovX(this.api.apiView, 0)
      }
      get tanHalfFovY() {
        return kV.s.tanHalfFovY(this.api.apiView, 0)
      }
      projectWorldPosToScreenPos(VV) {
        this.clip(VV);
        const {
          clipX: eV,
          clipY: xV,
          clipW: JV
        } = this;
        if (JV > 0) {
          const VV = eV / JV * 50,
            YV = -xV / JV * 50;
          return Math.abs(VV) <= this.screenBandPct.x && Math.abs(YV) <= this.screenBandPct.y ? {
            x: 50 + VV,
            y: 50 + YV
          } : this.clampToBand(VV, YV)
        }
        const YV = this.cameraPosition,
          UV = Math.hypot(VV[0] - YV[0], VV[1] - YV[1], VV[2] - YV[2]),
          yV = this.api.apiView,
          pV = kV.s.viewProj,
          QV = UV > 0 ? eV / UV : 0,
          nV = UV > 0 ? -xV / UV : 0,
          wV = Math.hypot(pV(yV, 0, 1), pV(yV, 0, 5), pV(yV, 0, 9)),
          ZV = QV / Math.hypot(pV(yV, 0, 0), pV(yV, 0, 4), pV(yV, 0, 8)),
          vV = nV / wV,
          rV = !(Math.abs(ZV) >= .001 || Math.abs(vV) >= .001);
        return this.clampToBand(QV, rV ? -(wV || 1) : nV)
      }
      projectDirectionToScreenPos(VV) {
        if (!this.hasView) return;
        const eV = this.cameraPosition,
          xV = this.along;
        for (let JV = 0; JV < 3; JV++) xV[JV] = eV[JV] + 10 * VV[JV];
        return this.projectWorldPosToScreenPos(xV)
      }
      projectWorldPosToViewport(VV) {
        this.clip(VV);
        const {
          clipX: eV,
          clipY: xV,
          clipW: JV
        } = this;
        return JV > 0 ? {
          x: 50 + eV / JV * 50,
          y: 50 - xV / JV * 50
        } : null
      }
      clip(VV) {
        const eV = this.api.apiView,
          xV = VV[0] - kV.s.origin(eV, 0, 0),
          JV = VV[1] - kV.s.origin(eV, 0, 1),
          YV = VV[2] - kV.s.origin(eV, 0, 2),
          UV = kV.s.viewProj;
        this.clipX = UV(eV, 0, 0) * xV + UV(eV, 0, 4) * JV + UV(eV, 0, 8) * YV + UV(eV, 0, 12), this.clipY = UV(eV, 0, 1) * xV + UV(eV, 0, 5) * JV + UV(eV, 0, 9) * YV + UV(eV, 0, 13), this.clipW = UV(eV, 0, 3) * xV + UV(eV, 0, 7) * JV + UV(eV, 0, 11) * YV + UV(eV, 0, 15)
      }
      clampToBand(VV, eV) {
        return (0, pV.g)(VV, eV, this.screenBandPct.x, this.screenBandPct.y)
      }
    }
    var cJ = xV(5310);
    const hJ = new TextEncoder,
      lJ = new Uint8Array(kV.J * kV.F);
    class LJ {
      constructor() {
        this.buttons = [], this.hn = !0
      }
      set(VV) {
        this.buttons = VV, this.hn = !1
      }
      attached() {
        this.hn = 0 === this.buttons.length
      }
      write(VV) {
        if (this.hn) return;
        const eV = new Uint8Array(kV.J),
          xV = new Uint8Array(kV.J);
        let JV = 0,
          YV = 0;
        for (const {
            id: UV,
            keycode: yV
          }
          of this.buttons) {
          if (JV === kV.J) break;
          const {
            read: VV,
            written: pV
          } = hJ.encodeInto(UV, lJ.subarray(YV, YV + kV.F));
          if (VV < UV.length) continue;
          const QV = cJ.p[yV];
          eV[JV] = "number" === typeof QV ? QV : 0, xV[JV] = pV, JV++, YV += pV
        }
        this.hn = (0, kV.ve)(VV, 0, JV, eV, xV, lJ.subarray(0, YV))
      }
    }

    function fJ(VV, eV, xV) {
      const JV = hJ.encode(eV);
      return JV.length <= kV.F && function(VV, eV, xV, JV) {
        return (0, Jx.e)(), (0, kV.vf)(VV, eV, xV, JV)
      }(VV, 0, xV ? 1 : 0, JV)
    }
    var mJ = xV(40455);
    const KJ = new TextDecoder,
      HJ = new TextEncoder,
      uJ = new Uint8Array(0),
      sJ = [0, 0, 0],
      SJ = {
        off: kV.Od.Off,
        key: kV.Od.Key,
        touch: kV.Od.Touch
      };
    class IJ {
      constructor(VV) {
        var eV;
        this.options = VV, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tickers = [], this.renderers = [], this.receivers = [], this.failures = [], this.vetoSet = !1, this.hooksSet = !1, this.writtenPublicLobby = !1, this.promptWatch = "off", this.promptWatchSent = "off", this.customButtons = new LJ, this.generation = 0, this.sessionLive = !1, this.boundId = 0, this.session = null, this.activeConn = 0, this.closedThrough = 0, this.openSocket = 0, this.socketLeftSinceAttach = !1, this.ticks = 0, this.zoomUnshown = !1, this.zoomHeld = !1, this.overflowGen = 0, this.resyncOwed = !1, this.zoom = 0, this.localPhysicsType = XV.q.DEFAULT, this.pendingZoom = null, this.highlight = null, this.highlightOwed = !1, this.cmd = null, this.freeCam = new aJ, this.stopped = () => !1, this.onError = void 0, this.api = void 0, this.tables = void 0, this.itemSources = null, this.fault = void 0, this.EZ = VV => {
          if ((0, rV.j)(VV)) throw VV;
          this.onError(VV)
        }, this.api = VV.api, this.tables = VV.tables, this.onError = null !== (eV = VV.onError) && void 0 !== eV ? eV : VV => {
          console.error("Error in client game callback", VV)
        }, this.renderFrame = new oJ(this.api, VV.screenBandY), this.live = new GJ(this.api), this.chunks = new we(this.api.memory, (() => this.api.apiView)), this.items = new Wx({
          api: this.api,
          tables: VV.tables,
          cmd: () => this.cmd,
          onError: this.onError,
          beforeOp: VV.beforeOp
        });
        const xV = () => this.stopped() ? null : this.cmd,
          JV = () => this.sessionLive;
        this.entityInfoWatch = new YJ({
          cmd: xV,
          onError: this.onError
        }), this.entityInfo = new UJ({
          api: this.api,
          watch: this.entityInfoWatch,
          isSessionLive: JV
        }), this.particles = new ux({
          cmd: xV,
          isSessionLive: JV,
          onError: this.onError
        }), this.clientApi = new Fx({
          api: this.api,
          live: this.live,
          chunks: this.chunks,
          items: this.items,
          entityInfo: this.entityInfo,
          particles: this.particles,
          tables: VV.tables,
          cmd: xV,
          sendCmd: () => this.sendCmd(),
          isSessionLive: JV,
          beforeWrite: () => {
            var eV;
            if (this.stopped()) return !1;
            const xV = this.generation;
            return !1 !== (null === (eV = VV.beforeWrite) || void 0 === eV ? void 0 : eV.call(VV)) && xV === this.generation
          },
          playerDbId: () => {
            const VV = this.session;
            if (null === VV) throw new Error("No game session has started, so the local player has no DB id");
            return VV.playerDbId
          },
          playSound: VV.playSound,
          preloadSounds: VV.preloadSounds,
          setLocalOptions: VV.setLocalOptions,
          hasPackModel: VV.hasPackModel,
          localPhysicsType: () => this.localPhysicsType
        }), this.scriptedCamera = new uV({
          api: this.api,
          cmd: () => this.stopped() ? null : this.cmd,
          screen: VV.cameraScreen,
          showFacing: VV.showCameraFacing
        })
      }
      get itemBridgeSources() {
        return this.itemSources ??= NJ(this.items, this.tables, (() => this.localPlayerAlive()), this.EZ), this.itemSources
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
      clickCodeBlock(VV) {
        const eV = this.sessionLive ? this.sendCmd() : null;
        return null !== eV && (xV = eV, JV = 0, YV = VV[0], UV = VV[1], yV = VV[2], (0, Jx.e)(), (0, kV.ye)(xV, JV, YV, UV, yV));
        var xV, JV, YV, UV, yV
      }
      cameraZoom() {
        return this.zoom
      }
      setCameraZoom(VV) {
        const eV = this.liveCmd();
        return null === eV ? (this.pendingZoom = VV, !1) : (this.pendingZoom = null, (0, kV.eg)(eV, 0, VV, 1))
      }
      fW(VV) {
        const eV = this.stopped() ? null : this.cmd;
        return null !== eV && (0, kV.bg)(eV, 0, VV ? 1 : 0)
      }
      respawn() {
        const VV = this.sessionLive ? this.sendCmd() : null;
        return null !== VV && (eV = VV, xV = 0, (0, Jx.e)(), (0, kV.Hf)(eV, xV));
        var eV, xV
      }
      bindCustomButtonKeys(VV) {
        this.customButtons.set(VV)
      }
      pressCustomButton(VV, eV) {
        const xV = this.sessionLive ? this.sendCmd() : null;
        return null !== xV && fJ(xV, VV, eV)
      }
      padMove(VV, eV, xV, JV, YV, UV) {
        const yV = this.liveCmd();
        return null !== yV && (0, kV.gf)(yV, 0, VV, eV, xV, JV, YV, UV)
      }
      thirdPersonFor(VV) {
        const eV = this.liveCmd();
        return null !== eV && (0, kV.ig)(eV, 0, null !== VV && void 0 !== VV ? VV : 1 / 0)
      }
      send(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const JV = 0 !== this.openSocket || this.sessionLive ? this.sendCmd() : null;
        return null !== JV && Yx(JV, xV ? vV.td : 0, VV, (0, oV.g)(eV))
      }
      socketAttached(VV) {
        this.openSocket = VV, this.socketLeftSinceAttach = !1
      }
      socketDetached(VV) {
        this.openSocket === VV && (this.openSocket = 0)
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
      attach(VV) {
        const eV = () => VV.isStopped;
        this.stopped = eV, this.cmd = VV.rings.cmd, this.promptWatchSent = "off", this.writePromptWatch(), this.customButtons.attached(), this.writeCustomButtons();
        const xV = this.api.apiView;
        this.overflowGen = kV.s.eventOverflowGen(xV, 0), this.resyncOwed = 0 !== kV.s.eventOverflowMask(xV, 0), VV.setGameHost(this), VV.setEventWalker((VV => {
          this.api.walk(VV, this, eV)
        }))
      }
      watchPromptPick(VV) {
        this.promptWatch = VV, this.writePromptWatch()
      }
      get promptEntity() {
        return "off" === this.promptWatch || this.stopped() ? null : dJ(kV.s.promptEntity(this.api.apiView, 0))
      }
      get interactLabel() {
        return "touch" !== this.promptWatch || this.stopped() ? kV.uc.None : kV.s.interactLabel(this.api.apiView, 0)
      }
      get interactIcon() {
        return "touch" !== this.promptWatch || this.stopped() ? 0 : kV.s.interactIcon(this.api.apiView, 0)
      }
      closeGame() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        (0 === VV || VV >= this.openSocket) && (this.openSocket = 0), this.closedThrough = Math.max(this.closedThrough, VV, this.activeConn), this.activeConn = 0, this.endSession(), this.endGameGrants(), this.dropGameCamera()
      }
      gameCamera(VV) {
        0 !== this.activeConn && this.scriptedCamera.settingsChanged(VV)
      }
      netEvent(VV) {
        "connection" === VV.type ? VV.phase === vV.H.Activated && VV.conn !== this.activeConn && VV.conn > this.closedThrough ? (this.endSession(), this.activeConn = VV.conn, this.endGameGrants(), this.dropGameCamera()) : VV.phase !== vV.H.Left && VV.phase !== vV.H.Closed || VV.conn !== this.activeConn ? VV.phase === vV.H.Resumed && 0 !== this.activeConn && VV.conn > this.closedThrough && (this.activeConn = VV.conn) : this.closeGame() : VV.conn === this.activeConn && 0 !== VV.conn && (VV.yZ === RJ.v ? this.gunHit(VV.payload) : VV.yZ === yJ.mc.EditItemCraftingRecipes || VV.yZ === RJ.Q ? this.items.touch() : (this.serverOptions(VV), this.gameMessage(VV)));
        const eV = this.options.onNetEvent;
        eV && this.guard((() => {
          eV(VV)
        }))
      }
      serverOptions(VV) {
        const eV = this.options.serverOptions,
          xV = eV ? this.decoded(pJ, VV) : null;
        eV && xV && this.guard((() => {
          eV.applyNewClientOptions(xV)
        }))
      }
      gameMessage(VV) {
        let eV = null;
        try {
          eV = function(VV) {
            if ("message" !== VV.type || VV.yZ !== yJ.mc.GameCodeMessage || VV.payloadKind !== vV.sc.Msgpack) return null;
            const eV = (0, oV.e)(VV.payload);
            if (null === eV || "object" !== typeof eV || "string" !== typeof eV.messageType) throw new Error("GameCodeMessage without a messageType");
            return eV
          }(VV)
        } catch (xV) {
          this.sessionLive && this.onError(xV)
        }
        if (eV) {
          const {
            messageType: VV,
            data: xV
          } = eV;
          if ((0, WV.f)(VV)) return void this.guard((() => {
            (0, WV.e)(VV, xV)
          }));
          "freeCamPerms" === VV && this.freeCam.setGame(xV) && this.writeFreeCam(), this.sessionLive && this.round(this.receivers, (eV => {
            eV.onReceivedMessageFromServer(VV, xV)
          }))
        }
      }
      decoded(VV, eV) {
        try {
          return VV(eV)
        } catch (xV) {
          return this.onError(xV), null
        }
      }
      setClientFreeCameraGrant(VV, eV) {
        this.freeCam.setClient(VV, eV), this.writeFreeCam()
      }
      freeCameraAllowed() {
        return 0 !== this.freeCam.perms()
      }
      setFreeCameraMovesFly(VV) {
        this.freeCam.setMovesFly(VV), this.writeFreeCam()
      }
      setBlockHighlight(VV) {
        this.highlight = VV, this.highlightOwed = !0, this.writeOwedHighlight()
      }
      writeOwedHighlight() {
        const VV = this.liveCmd();
        if (null === VV || !this.highlightOwed) return;
        const eV = this.highlight;
        this.highlightOwed = null === eV ? !(0, kV.Pe)(VV, 0, sJ, sJ, 0) : !(0, kV.Pe)(VV, 0, eV.pos, eV.normal, 1)
      }
      localPlayerBound(VV) {
        var eV, xV;
        if (0 === this.activeConn || this.sessionLive && VV === this.boundId) return;
        const JV = this.sessionLive;
        let YV, UV, yV, pV;
        this.endSession(), JV && this.restartGameCamera();
        try {
          var QV;
          this.session = null;
          const VV = this.options.sessionInfo(this.activeConn);
          if (this.session = VV, !VV) return;
          YV = VV.gameNameWithVariation, UV = null !== (QV = (0, MV.Lb)(YV)) && void 0 !== QV ? QV : void 0, yV = (0, zV.r)(VV.lobbyName), pV = (0, zV.I)(VV.lobbyName)
        } catch (jV) {
          return void this.onError(jV)
        }
        const nV = {
          localPlayerId: String(VV)
        };
        let wV = {},
          ZV = [];
        try {
          var vV, rV;
          wV = null !== (vV = null === (rV = this.options.gameFactory((0, MV.Pb)(YV))) || void 0 === rV ? void 0 : rV(pV, yV, UV, nV)) && void 0 !== vV ? vV : {}
        } catch (jV) {
          this.EZ(jV)
        }
        try {
          var kV, bV;
          ZV = (0, GV.b)(null === (kV = (bV = this.options).defaultPlugins) || void 0 === kV ? void 0 : kV.call(bV, pV, yV, UV, nV), wV.plugins)
        } catch (jV) {
          this.EZ(jV)
        }
        const EV = [wV, ...ZV];
        this.owners = EV, this.tickers = EV.filter((VV => void 0 !== VV.iZ)), this.renderers = EV.filter((VV => void 0 !== VV.onAfterRender)), this.receivers = EV.filter((VV => void 0 !== VV.onReceivedMessageFromServer)), this.writeAltVeto(EV), this.writeHooks(EV), this.writePublicLobby(pV), this.writeLocalDbId(null !== (eV = null === (xV = this.session) || void 0 === xV ? void 0 : xV.playerDbId) && void 0 !== eV ? eV : null), this.boundId = VV, this.sessionLive = !0, this.generation++, null !== this.pendingZoom && this.setCameraZoom(this.pendingZoom), this.highlightOwed ||= null !== this.highlight, this.writeOwedHighlight(), this.round(EV, (VV => {
          var eV;
          null === (eV = VV.onCreate) || void 0 === eV || eV.call(VV, this.clientApi)
        }));
        const BV = this.generation;
        setTimeout((() => {
          BV === this.generation && !0 === this.tables.getClientOption("creative") && AJ(this.tables)
        }), 0)
      }
      chunkSlot(VV, eV, xV, JV, YV, UV) {
        this.chunks.apply(VV, eV, xV, JV, YV, UV)
      }
      entityAdded(VV) {
        var eV;
        this.entityInfo.stale(VV), null === (eV = this.options.replayEntities) || void 0 === eV || eV.entityAdded(VV)
      }
      entityInfoChanged(VV) {
        var eV;
        this.entityInfo.stale(VV), null === (eV = this.options.replayEntities) || void 0 === eV || eV.entityInfoChanged(VV)
      }
      afterPrescan() {
        this.items.refresh(), this.entityInfo.refresh(), this.api.rereadDirectory(), this.chunks.refresh(), this.live.refresh()
      }
      tickEnd() {
        if (this.ticks++, this.tickers.length > 0) {
          const VV = performance.now();
          this.round(this.tickers, OJ), (0, EJ.b)(performance.now() - VV)
        }
      }
      afterWalk(VV) {
        this.ackEventOverflow(), this.clientApi.flushOwed(), this.writeOwedHighlight();
        const eV = this.options.replayEntities;
        eV && this.guard((() => {
          this.entityInfoWatch.want(JJ, eV.wantsWatch), eV.flush(this.entityInfoWatch.on)
        }));
        const xV = this.api.apiView,
          JV = kV.s.frameMs(xV, 0);
        gJ.k.frame(JV, kV.s.heading(xV, 0), kV.s.pitch(xV, 0), gJ.i[VV]);
        const YV = (0, EJ.h)(VV, JV);
        if (null !== YV) {
          const VV = this.renderFrame;
          this.guard((() => {
            (0, nJ.d)().turnDamageIndicators(VV.cameraHeading)
          })), this.guard((() => {
            this.clientApi.slideRoute(YV)
          })), this.round(this.renderers, (eV => {
            eV.onAfterRender(YV, VV)
          }))
        }
        this.writeFreeCam();
        try {
          this.scriptedCamera.afterFrame(null !== YV)
        } catch (yV) {
          this.EZ(yV)
        }
        this.showZoom(), this.items.flush(this.EZ), this.writePromptWatch(), this.writeCustomButtons();
        const UV = this.ticks;
        this.ticks = 0, (0, EJ.g)(UV, VV, YV, this.EZ)
      }
      entityRemoved(VV) {
        this.live.despawned(VV), this.entityInfo.removed(VV)
      }
      ackEventOverflow() {
        const VV = this.api.apiView,
          eV = kV.s.eventOverflowGen(VV, 0),
          xV = eV - this.overflowGen >>> 0;
        if (0 === xV && !this.resyncOwed) return;
        this.overflowGen = eV;
        const JV = kV.s.eventOverflowMask(VV, 0),
          YV = this.cmd;
        0 === JV || null === YV || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, kV.Be)(YV, 0, JV);
        const UV = this.options.onEventOverflow;
        0 !== xV && UV && this.guard((() => {
          UV(JV, xV)
        }))
      }
      gameCall(VV, eV, xV, JV, YV, UV, yV, pV, QV) {
        if (VV === kV.jc.Director) try {
          return this.scriptedCamera.call(eV, xV, JV, YV, UV, yV)
        } catch (nV) {
          return this.EZ(nV), kV.jb.None
        }
        if (!this.sessionLive || void 0 !== this.fault) return VV === kV.jc.AltVeto ? kV.i.Allow : 0;
        try {
          return this.callGames(VV, eV, xV, JV, YV, UV, yV, pV)
        } catch (nV) {
          throw (0, rV.j)(nV) && (this.fault = nV), nV
        }
      }
      takeFault() {
        const VV = this.fault;
        return this.fault = void 0, VV
      }
      callGames(VV, eV, xV, JV, YV, UV, yV, pV) {
        this.api.rereadDirectory(), this.chunks.touch(), this.items.refresh(), this.live.refresh(), this.entityInfo.inCoreCall();
        const {
          tables: QV
        } = this.options, nV = String(this.boundId);
        switch (VV) {
          case kV.jc.AltVeto:
          case kV.jc.AltAction: {
            const pV = 0 !== yV,
              [wV, ZV, vV] = pV ? [eV, xV, JV] : [void 0, void 0, void 0],
              rV = pV ? QV.nameOfId(YV) : "Air",
              bV = dJ(UV);
            if (VV === kV.jc.AltAction) return this.first((VV => {
              var eV;
              return null === (eV = VV.onPlayerAltAction) || void 0 === eV ? void 0 : eV.call(VV, nV, wV, ZV, vV, rV, bV)
            })), 0;
            const EV = this.first((VV => {
              var eV;
              return null === (eV = VV.onPlayerAttemptAltAction) || void 0 === eV ? void 0 : eV.call(VV, nV, wV, ZV, vV, rV, bV)
            }));
            return "preventAction" === EV ? kV.i.Prevent : "preventPlacement" === EV ? kV.i.PreventPlacement : kV.i.Allow
          }
          case kV.jc.Click: {
            const VV = pV,
              wV = 0 !== (VV & kV.T.Alt),
              ZV = 0 !== (VV & kV.T.HasPos),
              vV = ZV ? QV.nameOfId(YV) : "Air",
              [rV, bV, EV] = ZV ? [eV, xV, JV] : [null, null, null],
              BV = dJ(UV),
              jV = 0 !== (VV & kV.T.Up),
              qV = dJ(yV);
            if (0 === (VV & kV.T.AttackOnly) && this.first((VV => {
                var eV, xV;
                return jV ? null === (eV = VV.onPlayerClickUp) || void 0 === eV ? void 0 : eV.call(VV, nV, wV, rV, bV, EV, vV, BV) : null === (xV = VV.onPlayerClick) || void 0 === xV ? void 0 : xV.call(VV, nV, wV, rV, bV, EV, vV, BV)
              })), !jV && !wV && null !== qV) {
              const VV = this.clientApi.getPositionView(qV),
                eV = VV ? [VV[0], VV[1], VV[2]] : [0, 0, 0];
              this.first((VV => {
                var xV;
                return null === (xV = VV.onPlayerAttackEntity) || void 0 === xV ? void 0 : xV.call(VV, nV, qV, eV)
              }))
            }
            return 0
          }
          case kV.jc.ChangeBlock: {
            const VV = QV.nameOfId(YV),
              yV = QV.nameOfId(UV);
            return this.first((YV => {
              var UV;
              return null === (UV = YV.onPlayerChangeBlock) || void 0 === UV ? void 0 : UV.call(YV, nV, eV, xV, JV, VV, yV)
            })), 0
          }
          case kV.jc.DropItem: {
            const VV = QV.nameOfId(eV);
            return this.first((eV => {
              var YV;
              return null === (YV = eV.onPlayerDropItem) || void 0 === YV ? void 0 : YV.call(eV, nV, VV, xV, JV)
            })), 0
          }
          default:
            return this.onError(new Error(`Unknown game call kind ${VV}`)), 0
        }
      }
      changeBlockFail(VV, eV, xV, JV, YV, UV, yV) {
        const pV = YV === kV.Oc ? null : KJ.decode(this.api.eventBytes(UV, Math.min(YV, yV)));
        this.failures.push({
          RJ: [VV, eV, xV],
          gJ: JV,
          DJ: pV
        })
      }
      changeBlockFailEnd() {
        const VV = this.failures;
        this.failures = [], this.sessionLive && this.round(this.owners, (eV => {
          var xV;
          null === (xV = eV.onChangeBlockFail) || void 0 === xV || xV.call(eV, VV)
        })), this.QZ("EditBoard", {
          pos: null
        }), this.QZ("EditCodeBlock", {
          pos: null,
          canChangePos: null
        })
      }
      inventoryEvent(VV, eV, xV, JV, YV, UV) {
        VV === kV.xc.ChestOpened ? this.items.chestOpened(xV, JV, YV) : VV !== kV.xc.Synced && VV !== kV.xc.ChestClosed && VV !== kV.xc.ChestRefreshed || this.items.touch(), this.guard((() => {
          ! function(VV, eV, xV, JV) {
            switch (VV) {
              case kV.xc.Synced:
                yV.h.QZ("syncedInvenFromServer");
                break;
              case kV.xc.ChestOpened:
              case kV.xc.ChestClosed:
                yV.h.QZ("chestToggleFromServer", VV === kV.xc.ChestOpened, !0);
                break;
              case kV.xc.ChestRefreshed:
                yV.h.QZ("chestRefreshedFromServer");
                break;
              case kV.xc.EnchantingTable:
                yV.h.QZ("enchantingTable", {
                  vp: JV,
                  position: xV
                });
                break;
              case kV.xc.HotbarRequest:
                yV.h.QZ("setSelectedInventorySlotI", eV, !0);
                break;
              case kV.xc.Scrolled:
                yV.h.QZ("ScrollInventorySlot", eV);
                break;
              case kV.xc.NumberKey:
                yV.h.QZ("numkeyPressed", eV + 1);
                break;
              case kV.xc.DropRequested:
                yV.h.QZ("DropInvenItem", 0 !== eV);
                break;
              default:
                throw new rV.d(`InventoryEvent of no kind: what ${VV}`)
            }
          }(VV, eV, [xV, JV, YV], UV)
        }))
      }
      heldItemChanged() {
        this.items.touch()
      }
      shotDamage(VV, eV, xV, JV) {
        this.QZ("shotPlayer", {
          playerId: String(VV),
          damage: eV,
          wasCrit: 0 !== JV,
          distance: xV
        })
      }
      localHurt(VV, eV) {
        this.QZ("closeShopOnDamaged", null), this.guard((() => {
          yV.h.QZ("damagedByOtherPlayer", {
            fU: null,
            direction: Number.isNaN(eV) ? null : eV,
            aU: VV
          })
        }))
      }
      attackHit(VV, eV, xV, JV, YV) {
        this.guard((() => {
          yV.h.QZ("yourAttackHit", {
            TJ: JV,
            screenPos: this.renderFrame.projectDirectionToScreenPos([VV, eV, xV]),
            hitSelf: YV
          })
        }))
      }
      physicsType(VV) {
        this.localPhysicsType = VV, this.QZ("PlayerPhysicsTypeUpdate", VV)
      }
      vehicleEffect(VV, eV, xV, JV, YV) {
        this.guard((() => {
          VV === vV.Id.UPDATE ? (0, gV.i)(eV, {
            icon: xV,
            level: JV,
            displayName: null,
            durationMs: YV
          }) : RV.d.remove(eV)
        }))
      }
      zoomChanged(VV) {
        this.zoom = VV, this.zoomUnshown = !0
      }
      zoomDisabled() {
        this.QZ("showBottomMessage", {
          message: "Zoom is disabled",
          timeoutLength: 2e3,
          type: "Error"
        })
      }
      bhopDisabled() {
        this.QZ("showBottomMessage", mJ.b)
      }
      showZoom() {
        const VV = this.scriptedCamera.holdsView();
        !this.zoomUnshown || VV && this.zoomHeld || (this.zoomUnshown = !1, this.QZ("cameraZoomSet", this.zoom)), this.zoomHeld = VV
      }
      gunHit(VV) {
        this.guard((() => {
          const {
            fU: eV,
            mU: xV
          } = (0, WJ.b)(RJ.v, VV);
          yV.h.QZ("damagedByOtherPlayer", {
            fU: eV,
            direction: xV
          })
        }))
      }
      uiEvent(VV, eV, xV, JV, YV, UV, yV, pV) {
        this.guard((() => {
          wJ(VV, eV, [xV, JV, YV], UV, this.items, this.options.tables, (() => KJ.decode(this.api.eventBytes(yV, pV))))
        }))
      }
      writeAltVeto(VV) {
        const eV = this.cmd;
        if (!eV) return;
        let xV;
        try {
          xV = function(VV, eV) {
            const xV = new Set;
            let JV = !1;
            for (const YV of VV)
              if (YV.onPlayerAttemptAltAction) {
                if (JV = !0, !YV.altVetoBlocks) return {
                  mode: kV.le.All,
                  roots: []
                };
                for (const VV of YV.altVetoBlocks) xV.add(eV.getMetaInfo(VV).rootId)
              } return JV ? xV.size > kV.Dc ? {
              mode: kV.le.All,
              roots: []
            } : {
              mode: kV.le.Filter,
              roots: [...xV]
            } : {
              mode: kV.le.Off,
              roots: []
            }
          }(VV, this.options.tables)
        } catch (YV) {
          this.onError(YV), xV = {
            mode: kV.le.All,
            roots: []
          }
        }
        if (xV.mode === kV.le.Off && !this.vetoSet) return;
        const JV = new Uint8Array(new Uint32Array(xV.roots).buffer);
        (0, kV.Pf)(eV, 0, xV.mode, xV.roots.length, JV) ? this.vetoSet = xV.mode !== kV.le.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
      }
      endGameGrants() {
        this.freeCam.clearGame(), this.writeFreeCam()
      }
      writeFreeCam() {
        this.stopped() || this.freeCam.write(this.cmd)
      }
      writeHooks(VV) {
        const eV = this.cmd;
        if (!eV) return;
        const xV = function(VV) {
          let eV = 0;
          for (const xV of VV) xV.onPlayerAltAction && (eV |= 1 << kV.jc.AltAction), (xV.onPlayerClick || xV.onPlayerClickUp || xV.onPlayerAttackEntity) && (eV |= 1 << kV.jc.Click), xV.onPlayerChangeBlock && (eV |= 1 << kV.jc.ChangeBlock), xV.onPlayerDropItem && (eV |= 1 << kV.jc.DropItem);
          return eV
        }(VV);
        (0 !== xV || this.hooksSet) && ((0, kV.Xf)(eV, 0, xV) ? this.hooksSet = 0 !== xV : this.onError(new Error("SetHooks didn't fit the command ring")))
      }
      writeCustomButtons() {
        const VV = this.cmd;
        VV && !this.stopped() && this.customButtons.write(VV)
      }
      writePromptWatch() {
        const VV = this.cmd,
          eV = this.promptWatch;
        eV !== this.promptWatchSent && VV && !this.stopped() && (0, kV.ng)(VV, 0, SJ[eV]) && (this.promptWatchSent = eV)
      }
      writePublicLobby(VV) {
        const eV = this.cmd;
        eV && VV !== this.writtenPublicLobby && ((0, kV.cg)(eV, 0, VV ? 1 : 0) ? this.writtenPublicLobby = VV : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
      }
      writeLocalDbId(VV) {
        const eV = this.cmd;
        eV && ((0, kV.Zf)(eV, 0, null === VV ? 0 : 1, null === VV ? uJ : HJ.encode(VV)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
      }
      first(VV) {
        const eV = this.generation;
        for (const JV of this.owners) {
          if (eV !== this.generation) break;
          try {
            const eV = VV(JV);
            if (void 0 !== eV) return eV
          } catch (xV) {
            this.EZ(xV)
          }
        }
      }
      QZ(VV, eV) {
        this.guard((() => {
          yV.h.QZ(VV, eV)
        }))
      }
      dropGameCamera() {
        try {
          this.scriptedCamera.reset()
        } catch (VV) {
          this.EZ(VV)
        }
      }
      restartGameCamera() {
        try {
          this.scriptedCamera.restart()
        } catch (VV) {
          this.EZ(VV)
        }
      }
      endSession() {
        if (!this.sessionLive) return;
        this.sessionLive = !1, this.localPhysicsType = XV.q.DEFAULT;
        const VV = this.owners;
        let eV;
        if (this.owners = this.tickers = this.renderers = this.receivers = [], this.generation++, !this.stopped()) try {
          this.writeAltVeto([]), this.writeHooks([]), this.writePublicLobby(!1), this.writeLocalDbId(null)
        } catch (JV) {
          eV = JV
        }
        try {
          this.entityInfo.sessionEnded()
        } catch (JV) {
          eV ??= JV
        }
        this.round(VV, VY, !0);
        try {
          this.particles.sessionEnded() || this.onError(new Error("ParticleStopAll didn't fit the command ring"))
        } catch (JV) {
          eV ??= JV
        }
        try {
          this.clientApi.disposeGameOutput()
        } catch (JV) {
          eV ??= JV
        }
        const xV = this.options.onSessionEnd;
        if (xV) try {
          xV()
        } catch (JV) {
          this.onError(JV)
        }
        void 0 !== eV && this.EZ(eV)
      }
      round(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const JV = this.generation;
        for (const UV of VV) {
          if (JV !== this.generation) break;
          try {
            eV(UV)
          } catch (YV) {
            xV ? this.onError(YV) : this.EZ(YV)
          }
        }
      }
      guard(VV) {
        try {
          VV()
        } catch (eV) {
          this.EZ(eV)
        }
      }
    }

    function dJ(VV) {
      return VV === kV.Sc ? null : String(VV)
    }

    function OJ(VV) {
      VV.iZ(vV.Bd)
    }

    function VY(VV) {
      var eV;
      null === (eV = VV.onClose) || void 0 === eV || eV.call(VV)
    }

    function eY(VV, eV) {
      VV.watch((() => {
        const xV = function(VV) {
          const eV = [],
            xV = Math.min(BJ, VV.length);
          for (let YV = 0; YV < xV; YV++) {
            var JV;
            const xV = null === (JV = VV.slot(YV)) || void 0 === JV ? void 0 : JV.typeObj,
              UV = xV ? (0, bJ.gunTypeOf)(xV.id) : void 0;
            void 0 !== UV && eV.push(Pe[UV])
          }
          return eV
        }(VV);
        xV.length > 0 && (eV.preload(xV.flatMap((VV => Ce(VV)))), eV.preload(Ce(Ae)))
      }))
    }
    var xY = xV(37593),
      JY = xV(5353),
      YY = xV(37930),
      UY = xV(37964);

    function yY(VV) {
      const eV = (0, xY.countDecodesAs)(new JY.Howl({
          src: [...(0, YY.w)(VV).src],
          pool: 15,
          preload: !1
        }), "sound"),
        xV = eV.load.bind(eV);
      return eV.load = () => (eV._preload = !0, (0, UY.d)(VV), xV()), eV
    }

    function pY(VV, eV, xV) {
      const JV = VV.listener;
      if (JV.positionX) QY(JV.positionX, eV, xV, 0), QY(JV.positionY, eV, xV, 1), QY(JV.positionZ, eV, xV, 2), QY(JV.forwardX, eV, xV, 3), QY(JV.forwardY, eV, xV, 4), QY(JV.forwardZ, eV, xV, 5), QY(JV.upX, eV, xV, 6), QY(JV.upY, eV, xV, 7), QY(JV.upZ, eV, xV, 8);
      else {
        let VV = !1;
        for (let JV = 0; JV < 9; JV++) VV ||= eV[JV] !== xV[JV];
        VV && (JV.setPosition(eV[0], eV[1], eV[2]), JV.setOrientation(eV[3], eV[4], eV[5], eV[6], eV[7], eV[8]), xV.set(eV))
      }
    }

    function QY(VV, eV, xV, JV) {
      eV[JV] !== xV[JV] && (VV.value = eV[JV], xV[JV] = eV[JV])
    }
    class nY {
      constructor() {
        this.pose = new Float64Array(9), this.written = new Float64Array(9).fill(Number.NaN), this.watchedCtx = void 0
      }
      apply(VV) {
        this.pose.set(VV);
        const eV = JY.Howler.ctx;
        return !!eV && (eV !== this.watchedCtx && (this.watchedCtx = eV, this.written.fill(Number.NaN), eV.addEventListener("statechange", (() => {
          "running" === eV.state && pY(eV, this.pose, this.written)
        }))), "running" === eV.state && pY(eV, VV, this.written), !0)
      }
    }
    var wY = xV(37720),
      ZY = xV(40434);
    let vY = null,
      rY = null;

    function kY() {
      return null === vY && (vY = document.createElement("div"), vY.className = "WasmCameraLayer", vY.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none", document.body.append(vY)), vY
    }

    function bY() {
      return rY ??= new ZY.c(new wY.d(kY)), rY
    }

    function EY() {
      var VV;
      null === (VV = rY) || void 0 === VV || VV.clear(), BY(null)
    }

    function BY(VV) {
      JV.b.get("scriptedCameraFacing") !== VV && JV.b.set({
        scriptedCameraFacing: VV
      })
    }
    var jY = xV(9922),
      qY = xV(9861),
      tY = xV(40472),
      FY = xV(42344),
      TY = xV(3719);
    const PY = Object.entries(kV.fc).reduce(((VV, eV) => {
      let [xV, JV] = eV;
      return VV[JV] = xV, VV
    }), []);

    function AY(VV, eV) {
      var xV;
      return 0 !== ((null !== (xV = VV.itemFlags[eV]) && void 0 !== xV ? xV : 0) & kV.yc.Stackable)
    }
    const NY = /^(0|[1-9][0-9]*)$/,
      XY = {
        displayName: (VV, eV) => (0, bJ.displayNameOf)(eV),
        description: (VV, eV) => (0, bJ.descriptionOf)(eV),
        type: (VV, eV) => (0, bJ.itemTypeOf)(eV),
        clipSize: (VV, eV) => (0, bJ.clipSizeOf)(eV),
        armourReduction: (VV, eV) => (0, bJ.armourReductionOf)(eV),
        scopeType: (VV, eV) => (0, bJ.scopeTypeOf)(eV),
        stackable: AY,
        harvestType: (VV, eV) => PY[VV.blockHarvestTypes[eV]],
        harvestLevel: (VV, eV) => {
          const xV = VV.blockHarvestLevels[eV];
          return xV === kV.Ac ? void 0 : xV
        },
        harvests: (VV, eV) => {
          var xV;
          const JV = null !== (xV = VV.itemHarvests[eV]) && void 0 !== xV ? xV : 0;
          return 0 !== JV ? PY[JV] : void 0 === (0, bJ.harvestsNullLevelOf)(eV) ? void 0 : null
        },
        level: (VV, eV) => {
          var xV, JV;
          const YV = null !== (xV = VV.itemLevels[eV]) && void 0 !== xV ? xV : kV.Ac;
          return YV !== kV.Ac ? YV : null !== (JV = (0, bJ.harvestsNullLevelOf)(eV)) && void 0 !== JV ? JV : void 0
        }
      };

    function MY(VV, eV, xV) {
      return GY(new Uint8Array(Math.floor(VV.length / eV)), VV, eV, xV)
    }

    function zY(VV, eV, xV) {
      return GY(new Uint16Array(Math.floor(VV.length / eV)), VV, eV, xV)
    }

    function GY(VV, eV, xV, JV) {
      const YV = new DataView(eV.buffer, eV.byteOffset, eV.byteLength);
      for (let UV = 0; UV < VV.length; UV++) VV[UV] = JV(YV, UV * xV);
      return VV
    }
    class WY {
      constructor(VV, eV) {
        this.options = eV, this.metas = [], this.types = new Map, this.props = void 0, this.rootIdOf = VV => {
          const eV = this.idOf(VV);
          if (void 0 === eV) throw new Error(`No item is named ${VV}, an item's root`);
          return eV
        };
        const xV = eV => {
            const xV = eV();
            return new Uint8Array(VV.memory().buffer, VV.scratch(), xV).slice()
          },
          JV = (new TextDecoder).decode(xV((() => VV.queries.itemNames()))).split("\n"),
          YV = xV((() => VV.queries.blockProps())),
          UV = xV((() => VV.queries.itemProps()));
        this.props = {
          blockFlags: MY(YV, kV.w.BYTES, kV.w.flags),
          blockHarvestTypes: MY(YV, kV.w.BYTES, kV.w.harvestType),
          blockHarvestLevels: MY(YV, kV.w.BYTES, kV.w.harvestLevel),
          blockAttachedTops: zY(YV, kV.w.BYTES, kV.w.attachedTop),
          itemFlags: MY(UV, kV.zc.BYTES, kV.zc.flags),
          itemHarvests: MY(UV, kV.zc.BYTES, kV.zc.harvests),
          itemLevels: MY(UV, kV.zc.BYTES, kV.zc.level)
        }, (0, TY.l)(Object.freeze(JV)), (0, FY.f)()
      }
      idOf(VV) {
        if ("number" === typeof VV) return void 0 === (0, TY.g)(VV) ? void 0 : VV;
        const eV = (0, TY.d)(VV);
        return void 0 === eV && NY.test(VV) ? void 0 === (0, TY.g)(+VV) ? void 0 : +VV : eV
      }
      getMetaInfo(VV) {
        if (!VV || VV === jY.d) return jY.f;
        const eV = this.idOf(VV);
        if (void 0 === eV) throw new Error(`Item ${VV} not found in registry`);
        return this.metaOf(eV)
      }
      blockRootId(VV) {
        return 0 !== VV && void 0 !== (0, TY.g)(VV) ? this.metaOf(VV).rootId : VV
      }
      metaOf(VV) {
        return this.metas[VV] ??= (0, qY.k)((0, TY.g)(VV), VV, this.rootIdOf, (0, bJ.rootMetaDescOf)(VV))
      }
      getItemId(VV) {
        if (!VV || VV === jY.d) return 0;
        const eV = this.idOf(VV);
        if (void 0 === eV) throw new Error(`Invalid block name. You sent ${VV}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
        return eV
      }
      getItemName(VV) {
        if (!VV || VV === jY.d) return jY.d;
        const eV = this.idOf(VV);
        if (void 0 === eV) throw new Error(`Item ${VV} not found in registry`);
        return (0, TY.g)(eV)
      }
      blockNameToBlockId(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (VV === jY.d) return 0;
        let xV = this.idOf(VV);
        if (void 0 === xV || !this.isBlockId(xV)) {
          const eV = VV.indexOf("|"),
            JV = eV > 0 ? (0, TY.d)(VV.slice(0, eV)) : void 0;
          xV = void 0 !== JV && this.isBlockId(JV) && (0, bJ.rootMetaDescOf)(JV) === VV ? JV : void 0
        }
        if (void 0 !== xV) return xV;
        if (!eV) throw new Error(`Invalid block name. You sent ${VV}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
        return null
      }
      isBlockId(VV) {
        return VV > 0 && VV < this.props.blockFlags.length
      }
      nameOfId(VV) {
        return 0 !== VV && (0, TY.g)(VV) || jY.d
      }
      itemType(VV) {
        const eV = VV ? this.idOf(VV) : void 0;
        if (!eV) return null;
        let xV = this.types.get(eV);
        return void 0 === xV && (xV = Object.freeze({
          id: eV,
          name: (0, TY.g)(eV),
          meta: this.getMetaInfo(eV),
          stackable: AY(this.props, eV),
          type: (0, bJ.itemTypeNameOf)(eV),
          clipSize: (0, bJ.clipSizeOf)(eV),
          scopeType: (0, bJ.scopeTypeOf)(eV),
          showsAimingUi: (0, bJ.showsAimingUi)(eV)
        }), this.types.set(eV, xV)), xV
      }
      getItemStat(VV, eV) {
        if (tY.d.has(eV)) {
          const xV = "minChargeStateToUse" === eV ? this.getMetaInfo(VV).rootName : this.getItemName(VV),
            JV = this.options.get((0, tY.h)(xV, eV));
          if (null !== JV && void 0 !== JV) return JV
        }
        return this.defaultStat(VV, eV, this.statOf(eV))
      }
      getDisplayName(VV) {
        return this.getItemStat(VV, "displayName")
      }
      getDefaultItemStat(VV, eV) {
        return this.defaultStat(VV, eV, this.statOf(eV))
      }
      statOf(VV) {
        const eV = XY[VV];
        return void 0 === eV && function(VV, eV) {
          throw new Error(`ClientApi.${VV} is not available yet in the wasm client (${eV})`)
        }(`getItemStat("${VV}")`, `a table of the stat: the wasm client answers ${Object.keys(XY).join(", ")}`), eV
      }
      defaultStat(VV, eV, xV) {
        const JV = this.idOf(VV),
          YV = void 0 === JV ? void 0 : xV(this.props, JV);
        return null !== YV && void 0 !== YV || "displayName" !== eV ? YV : this.getItemName(VV)
      }
      getClientOption(VV) {
        return this.options.get(VV)
      }
      getGunStats(VV) {
        return this.getClientOption(`${VV}GunStats`)
      }
      watchClientOption(VV, eV) {
        return this.options.subscribe(VV, eV)
      }
      isSolidBlockId(VV) {
        var eV;
        return 0 !== ((null !== (eV = this.props.blockFlags[VV]) && void 0 !== eV ? eV : 0) & kV.v.Solid)
      }
      isStackableId(VV) {
        return AY(this.props, VV)
      }
      isFluidBlockId(VV) {
        var eV;
        return 0 !== ((null !== (eV = this.props.blockFlags[VV]) && void 0 !== eV ? eV : 0) & kV.v.Fluid)
      }
      canPlaceOverBlockId(VV) {
        var eV;
        return 0 !== ((null !== (eV = this.props.blockFlags[VV]) && void 0 !== eV ? eV : 0) & kV.v.PlaceOver)
      }
      attachedTopOf(VV) {
        var eV;
        return null !== (eV = this.props.blockAttachedTops[VV]) && void 0 !== eV ? eV : 0
      }
      isDroplessBlockId(VV) {
        return (0, bJ.dropsNothing)(VV)
      }
    }

    function RY(VV, eV) {
      const xV = new Map;
      return (JV, YV) => {
        const UV = eV.idOf(JV),
          yV = void 0 === UV ? null : (JV => {
            let YV = xV.get(JV);
            if (void 0 === YV) {
              const UV = VV.queries.salvageRecipe(JV),
                yV = new DataView(VV.memory().buffer, VV.scratch(), UV),
                pV = [];
              for (let VV = 0; VV + kV.ae.BYTES <= UV; VV += kV.ae.BYTES) pV.push(Object.freeze({
                item: eV.nameOfId(kV.ae.item(yV, VV)),
                amt: kV.ae.amount(yV, VV)
              }));
              YV = 0 === pV.length ? null : Object.freeze(pV), xV.set(JV, YV)
            }
            return YV
          })(UV);
        if (null === yV || void 0 === YV) return yV;
        const pV = YV <= 0 ? 1 : YV;
        return yV.map((VV => {
          let {
            item: eV,
            amt: xV
          } = VV;
          return {
            item: eV,
            amt: xV * pV
          }
        }))
      }
    }
    var gY = xV(42057),
      DY = xV(38134),
      iY = xV(38119),
      CY = xV(38125),
      aY = xV(35093),
      oY = xV(41955),
      cY = xV(53866);
    const hY = -1,
      lY = new Uint8Array(0),
      LY = new TextEncoder;

    function fY(VV) {
      if (null === VV) return null;
      const eV = LY.encode(VV);
      return eV.byteLength < vV.Mc ? eV : eV.subarray(0, vV.Mc - 1)
    }
    class mY {
      constructor(VV) {
        this.deps = VV, this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = hY, this.keyframesSettled = !1, this.reloadFrom = hY
      }
      reloadKeyframes() {
        var VV, eV;
        this.keyframesVersion = hY, this.reloadFrom = null !== (VV = null === (eV = this.view()) || void 0 === eV ? void 0 : eV.version) && void 0 !== VV ? VV : hY
      }
      setPlayback(VV) {
        const eV = 1 === this.deps.core.YyV(VV);
        return eV && (this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = hY, this.reloadFrom = hY), eV
      }
      async open(VV, eV) {
        const xV = await this.deps.replay.open(VV, eV);
        return "opening" === xV && (this.reloadKeyframes(), this.deps.recorder.prefetch()), xV
      }
      play() {
        this.deps.replay.play()
      }
      pause() {
        this.deps.replay.pause()
      }
      seek(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.deps.replay.seek(Math.max(0, Math.floor(VV)), eV)
      }
      setSpeed(VV) {
        this.deps.replay.setSpeed(VV)
      }
      setCameraMode(VV) {
        this.deps.replay.setCameraMode(cY.e.indexOf(VV))
      }
      view() {
        var VV;
        const eV = kV.s.replayViewPtr(this.deps.apiView(), 0);
        if (0 === eV) return this.lastView = null, null;
        const xV = new DataView(this.deps.buffer(), eV, kV.Td.BYTES),
          JV = kV.Td.version(xV, 0),
          YV = this.lastView;
        if (null !== YV && YV.version === JV) return YV;
        const UV = kV.Td.markIn(xV, 0),
          yV = {
            version: JV,
            state: kV.Td.state(xV, 0),
            cameraMode: null !== (VV = cY.e[kV.Td.cameraMode(xV, 0)]) && void 0 !== VV ? VV : "recording",
            iZ: kV.Td.iZ(xV, 0),
            totalTicks: kV.Td.totalTicks(xV, 0),
            speed: kV.Td.speed(xV, 0),
            mark: UV === kV.Qd ? null : {
              inTick: UV,
              outTick: kV.Td.markOut(xV, 0)
            },
            editVersion: kV.Td.editVersion(xV, 0)
          };
        return this.lastView = yV, yV
      }
      keyframes() {
        const VV = this.view();
        if (null === VV) return [];
        VV.version !== this.reloadFrom && (this.reloadFrom = hY);
        const eV = this.reloadFrom === hY && VV.state !== vV.qd.Cropping && VV.state !== vV.qd.None,
          xV = eV ? VV.editVersion : VV.version;
        if (xV === this.keyframesVersion && eV === this.keyframesSettled) return this.lastKeyframes;
        const {
          core: JV
        } = this.deps, YV = JV.UyV(), UV = JV.xB(), yV = [];
        if (0 !== UV && YV > 0) {
          const VV = new DataView(this.deps.buffer(), UV, YV * vV.Bc);
          for (let eV = 0; eV < YV; eV++) {
            const xV = eV * vV.Bc,
              JV = eV => VV.getFloat64(xV + eV, !0);
            yV.push({
              iZ: VV.getUint32(xV + vV.Lc, !0),
              position: [JV(vV.Kc), JV(vV.Kc + 8), JV(vV.Kc + 16)],
              direction: [JV(vV.Fc), JV(vV.Fc + 8), JV(vV.Fc + 16)],
              easing: [JV(vV.Gc), JV(vV.Gc + 8), JV(vV.Gc + 16), JV(vV.Gc + 24)]
            })
          }
        }
        return this.keyframesVersion = xV, this.keyframesSettled = eV, this.lastKeyframes = yV, yV
      }
      addKeyframe() {
        const VV = this.deps.apiView(),
          eV = [kV.s.eye(VV, 0, 0), kV.s.eye(VV, 0, 1), kV.s.eye(VV, 0, 2)];
        return this.deps.replay.addKeyframe(eV, function(VV, eV) {
          const xV = Math.cos(eV);
          return [xV * Math.sin(VV), -Math.sin(eV), xV * Math.cos(VV)]
        }(kV.s.heading(VV, 0), kV.s.pitch(VV, 0)))
      }
      setKeyframe(VV) {
        return this.deps.replay.setKeyframe(VV.iZ, Float64Array.from([...VV.position, ...VV.direction, ...VV.easing]))
      }
      moveKeyframe(VV, eV) {
        return this.deps.replay.moveKeyframe(VV, eV)
      }
      deleteKeyframes(VV, eV) {
        return this.deps.replay.deleteKeyframes(VV, eV)
      }
      setMark(VV) {
        var eV, xV;
        return this.deps.replay.setMark(null !== (eV = null === VV || void 0 === VV ? void 0 : VV.inTick) && void 0 !== eV ? eV : -1, null !== (xV = null === VV || void 0 === VV ? void 0 : VV.outTick) && void 0 !== xV ? xV : -1)
      }
      crop(VV, eV) {
        const xV = this.deps.replay.crop(VV, eV);
        return xV && this.reloadKeyframes(), xV
      }
      save(VV) {
        return this.deps.replay.askSave(), this.deps.recorder.saveEdited(VV)
      }
      recorderControl(VV) {
        this.deps.recorder.control(VV)
      }
      recorderPrefs(VV, eV) {
        this.deps.recorder.prefs(VV, eV)
      }
      recorderOption(VV, eV) {
        const xV = this.deps.cmd();
        return null !== xV && (0, kV.Cf)(xV, 0, VV, null === eV ? lY : LY.encode(eV))
      }
      recordFlyingText(VV, eV, xV, JV) {
        const YV = this.deps.cmd(),
          UV = Math.max(0, Math.min(4294967295, Math.round(JV)));
        return null !== YV && (0, kV.yf)(YV, 0, eV, xV, UV, LY.encode(VV))
      }
      recordPlayerKilled(VV, eV, xV, JV) {
        const YV = this.deps.cmd();
        return null !== YV && (0, kV.Ff)(YV, 0, VV, eV, Math.max(0, xV), LY.encode(JV))
      }
      recordKillfeed(VV, eV, xV) {
        var JV, YV;
        const UV = this.deps.cmd(),
          yV = function(VV) {
            const eV = VV.reduce(((VV, eV) => {
                var xV;
                return VV + yJ.Db + (null !== (xV = null === eV || void 0 === eV ? void 0 : eV.byteLength) && void 0 !== xV ? xV : 0)
              }), 0),
              xV = new Uint8Array(eV),
              JV = new DataView(xV.buffer);
            let YV = 0;
            for (const yV of VV) {
              var UV;
              JV.setUint16(YV, null !== (UV = null === yV || void 0 === yV ? void 0 : yV.byteLength) && void 0 !== UV ? UV : vV.Mc, !0), YV += yJ.Db, null !== yV && (xV.set(yV, YV), YV += yV.byteLength)
            }
            return xV
          }([fY(VV.name), fY(VV.colour), fY(eV.name), fY(eV.colour), fY(xV)]);
        return null !== UV && (0, kV.Bf)(UV, 0, null !== (JV = VV.id) && void 0 !== JV ? JV : kV.Uc, null !== (YV = eV.id) && void 0 !== YV ? YV : kV.Uc, yV)
      }
      recorderSession(VV, eV) {
        this.deps.recorder.session({
          session: eV,
          lobbyType: VV.lobbyType,
          game: VV.gameNameWithVariation,
          lobby: VV.lobbyName
        })
      }
      recorderClose() {
        this.deps.core.yyV()
      }
      filePartDone(VV, eV) {
        this.deps.recorder.filePartDone(VV, eV)
      }
      fileDone(VV) {
        this.deps.recorder.fileDone(VV)
      }
    }
    const KY = -2147483648;
    class HY {
      constructor(VV) {
        var eV;
        this.deps = VV, this.state = {
          recording: !1,
          clipping: !1,
          hasClipBuffer: !1,
          seconds: 0
        }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (eV = VV.now) && void 0 !== eV ? eV : () => performance.now()
      }
      get current() {
        return this.state
      }
      get live() {
        var VV, eV, xV;
        return null === (VV = null === (eV = (xV = this.deps).live) || void 0 === eV ? void 0 : eV.call(xV)) || void 0 === VV || VV
      }
      activated(VV) {
        var eV, xV;
        this.live && (this.viewerShown(!0 === (null === (eV = (xV = this.deps).viewerOpen) || void 0 === eV ? void 0 : eV.call(xV))), this.deps.client.recorderSession(VV, (0, cY.g)()))
      }
      closed() {
        this.deps.client.recorderClose()
      }
      toggleRecording() {
        var VV, eV;
        this.live && (this.state.recording || !0 !== (null === (VV = (eV = this.deps).viewerOpen) || void 0 === VV ? void 0 : VV.call(eV))) ? this.deps.client.recorderControl(vV.$c.ToggleRecording) : this.deps.notify(CY.b.closeViewerFirst)
      }
      saveClip() {
        this.live ? this.deps.client.recorderControl(vV.$c.SaveClip) : this.deps.notify(CY.b.clippingNotOn)
      }
      viewerShown(VV) {
        this.live && this.deps.client.recorderControl(VV ? vV.$c.ViewerOpened : vV.$c.ViewerClosed)
      }
      setPrefs(VV, eV) {
        this.live && this.deps.client.recorderPrefs(VV, eV)
      }
      setOption(VV, eV) {
        this.live && this.deps.client.recorderOption(VV, eV)
      }
      recordFlyingText(VV, eV, xV, JV) {
        this.live && this.deps.client.recordFlyingText(VV, eV, xV, JV)
      }
      recordPlayerKilled(VV, eV, xV, JV) {
        this.live && this.deps.client.recordPlayerKilled(VV, eV, xV, JV)
      }
      recordKillfeed(VV, eV, xV) {
        this.live && this.deps.client.recordKillfeed(VV, eV, xV)
      }
      iZ() {
        let VV = this.state;
        if (this.clipTickPending && (this.clipTickPending = !1, VV = {
            ...VV,
            hasClipBuffer: !0
          }), null !== this.recordingSince) {
          const eV = Math.floor((this.now() - this.recordingSince) / 1e3);
          eV !== VV.seconds && (VV = {
            ...VV,
            seconds: eV
          })
        }
        this.set(VV)
      }
      onEvent(VV) {
        var eV, xV;
        const {
          notify: JV
        } = this.deps, YV = CY.b;
        switch (VV.what) {
          case vV._c.RecordingStarted:
            this.recordingSince = this.now(), this.set({
              ...this.state,
              recording: !0,
              seconds: 0
            }), JV(YV.recordingStarted);
            break;
          case vV._c.RecordingStopped:
            this.stopRecording(), JV(YV.recordingStopped), this.saveState(vV.hd.Recording, "saving");
            break;
          case vV._c.RecordingDiscarded:
            this.stopRecording(), JV(YV.recordingDiscarded);
            break;
          case vV._c.RecordingTurnedOff:
            this.stopRecording(), JV(YV.recordingTurnedOff);
            break;
          case vV._c.LimitReached:
            JV(YV.limitReached);
            break;
          case vV._c.ClipSaved:
            this.saveState(vV.hd.Clip, "saving");
            break;
          case vV._c.ClipEmpty:
            JV(YV.clipEmpty);
            break;
          case vV._c.ClippingNotOn:
            JV(YV.clippingNotOn);
            break;
          case vV._c.Disallowed:
            JV(YV.disallowed);
            break;
          case vV._c.ClippingOn:
            this.clipTickPending = !0, this.set({
              ...this.state,
              clipping: !0,
              hasClipBuffer: !1
            });
            break;
          case vV._c.ClippingOff:
            this.clipTickPending = !1, this.set({
              ...this.state,
              clipping: !1,
              hasClipBuffer: !1
            });
            break;
          case vV._c.ClipSettingsChanged:
            this.clipTickPending = this.state.clipping, this.set({
              ...this.state,
              hasClipBuffer: !1
            });
            break;
          case vV._c.SaveBusy:
            null === (eV = (xV = this.deps).onSaveState) || void 0 === eV || eV.call(xV, VV.kind, "busy"), JV(YV.saveBusy);
            break;
          case vV._c.CloseViewerFirst:
            JV(YV.closeViewerFirst)
        }
      }
      fileReady(VV, eV) {
        this.deps.download(eV), this.saveState(VV, "done"), this.deps.notify(VV === vV.hd.Clip ? CY.b.clipSaved : CY.b.recordingSaved)
      }
      failed(VV) {
        this.saveState(VV, "failed"), this.deps.notify(VV === vV.hd.Clip ? CY.b.clipFailed : CY.b.recordingFailed)
      }
      stopRecording() {
        this.recordingSince = null, this.set({
          ...this.state,
          recording: !1,
          seconds: 0
        })
      }
      saveState(VV, eV) {
        var xV, JV;
        null === (xV = (JV = this.deps).onSaveState) || void 0 === xV || xV.call(JV, VV, eV)
      }
      set(VV) {
        VV !== this.state && (this.state = VV, this.deps.onState(VV))
      }
    }
    const uY = new TextDecoder;

    function sY(VV, eV, xV, JV) {
      const YV = [];
      for (let UV = 0; UV < JV; UV++) {
        if (eV + yJ.Db > xV) return null;
        const JV = VV.getUint16(eV, !0);
        if (eV += yJ.Db, JV !== vV.Mc) {
          if (eV + JV > xV) return null;
          YV.push(uY.decode(new Uint8Array(VV.buffer, VV.byteOffset + eV, JV))), eV += JV
        } else YV.push(null)
      }
      return eV === xV ? YV : null
    }

    function SY(VV, eV) {
      let xV = new DataView(new ArrayBuffer(0)),
        JV = !0;
      const YV = {
        replayFailed: (eV, xV, JV) => {
          VV.replayFailed({
            reason: eV,
            code: xV,
            version: JV
          })
        },
        replayOption: (eV, YV, UV, yV) => {
          const pV = function(VV, eV, xV, JV) {
            switch (eV) {
              case vV.ld.Cleared:
                return 0 === JV ? null : void 0;
              case vV.ld.Text:
                return uY.decode(new Uint8Array(VV.buffer, VV.byteOffset + xV, JV));
              case vV.ld.Int:
                return JV === Int32Array.BYTES_PER_ELEMENT ? VV.getInt32(xV, !0) : void 0;
              case vV.ld.Double:
                return JV === Float64Array.BYTES_PER_ELEMENT ? VV.getFloat64(xV, !0) : void 0;
              default:
                return
            }
          }(xV, YV, UV, yV);
          void 0 !== pV ? VV.replayOption({
            key: eV,
            value: pV
          }) : JV = !1
        },
        replayUiEvent: (eV, YV, UV, yV, pV, QV) => {
          const nV = function(VV, eV, xV, JV, YV, UV, yV) {
            const pV = UV + yV;
            switch (eV) {
              case vV.od.FlyingText: {
                const yV = sY(VV, UV, pV, 1);
                return null !== yV && null !== yV[0] ? {
                  what: eV,
                  Sx: xV,
                  ux: JV,
                  angle: YV,
                  contentJson: yV[0]
                } : null
              }
              case vV.od.PlayerKilled: {
                const JV = sY(VV, UV, pV, 3);
                return JV ? {
                  what: eV,
                  killstreak: xV,
                  dead: JV[0],
                  killer: JV[1],
                  withItem: JV[2]
                } : null
              }
              case vV.od.Killfeed: {
                const xV = sY(VV, UV, pV, 7);
                return xV ? {
                  what: eV,
                  killerId: xV[0],
                  killerName: xV[1],
                  killerColour: xV[2],
                  victimId: xV[3],
                  victimName: xV[4],
                  victimColour: xV[5],
                  withItem: xV[6]
                } : null
              }
              default:
                return null
            }
          }(xV, eV, YV, UV, yV, pV, QV);
          null !== nV ? VV.replayUiEvent(nV) : JV = !1
        },
        replayFilePart: (xV, YV, UV, yV) => {
          const pV = eV();
          UV + yV > pV.byteLength ? JV = !1 : VV.filePart(xV, YV, new Uint8Array(pV, UV, yV).slice())
        },
        replayFileReady: (eV, xV, JV, YV) => {
          VV.fileReady({
            save: eV,
            kind: xV,
            parts: JV,
            bytes: YV
          })
        },
        recorderEvent: (eV, xV, JV) => {
          VV.recorderEvent({
            what: eV,
            kind: xV,
            save: JV
          })
        },
        replayOpened: (eV, JV, YV) => {
          VV.replayOpened(uY.decode(new Uint8Array(xV.buffer, xV.byteOffset + JV, YV)))
        }
      };
      return (VV, eV, UV, yV) => !(VV < vV.hb.ReplayFailed || VV > vV.hb.RecorderEvent) && (xV = eV, JV = !0, (0, kV.se)(VV, eV, UV, yV, YV) && JV)
    }

    function IY(VV) {
      let eV = null;
      const xV = SY(VV, (() => {
        if (null === eV) throw new Error("a recorder event read outside recorderEventReader's call");
        return eV.buffer
      }));
      return (VV, JV) => {
        eV = JV;
        try {
          ! function(VV, eV) {
            const xV = VV.slice(),
              JV = new DataView(xV.buffer);
            for (let YV = 0; YV < xV.byteLength;) {
              if (YV + vV.db > xV.byteLength) throw new Error(`the recorder module's events end mid-head at ${YV}`);
              const VV = JV.getUint32(YV, !0),
                UV = 65535 & VV,
                yV = VV >>> 16,
                pV = YV + vV.db;
              if (pV + yV > xV.byteLength || !eV(UV, JV, pV, yV)) throw new Error(`the recorder module wrote a malformed event ${UV} (${yV} bytes) at ${YV}`);
              YV = pV + (0, vV.ze)(yV)
            }
          }(VV, xV)
        } finally {
          eV = null
        }
      }
    }
    class dY {
      constructor(VV, eV) {
        this.acks = VV, this.handlers = eV, this.parts = new Map
      }
      onPart(VV, eV, xV) {
        let JV = this.parts.get(VV);
        JV || (JV = [], this.parts.set(VV, JV)), JV[eV] = xV, this.acks.filePartDone(VV, eV)
      }
      onReady(VV) {
        var eV;
        const xV = null !== (eV = this.parts.get(VV.save)) && void 0 !== eV ? eV : [];
        this.parts.delete(VV.save);
        const JV = function(VV, eV, xV) {
          if (VV.length !== eV) return null;
          let JV = 0;
          for (let yV = 0; yV < eV; yV++) {
            if (void 0 === VV[yV]) return null;
            JV += VV[yV].byteLength
          }
          if (JV !== xV) return null;
          if (1 === eV) return VV[0];
          const YV = new Uint8Array(xV);
          let UV = 0;
          for (const yV of VV) YV.set(yV, UV), UV += yV.byteLength;
          return YV
        }(xV, VV.parts, VV.bytes);
        this.acks.fileDone(VV.save), null === JV ? this.handlers.fileIncomplete(VV.save, VV.kind) : this.handlers.fileReady(VV.save, VV.kind, JV)
      }
      onDiscarded(VV) {
        this.parts.delete(VV)
      }
    }

    function OY() {
      return xV.e(72).then((() => xV(63638)))
    }
    class VU {
      constructor(VV) {
        this.deps = VV, this.sink = void 0, this.recorder = void 0, this.recorderEvents = void 0, this.parts = void 0, this.viewerChunk = null, this.viewer = null;
        const {
          client: eV
        } = VV;
        this.recorder = new HY({
          client: eV,
          live: () => {
            var VV;
            return !0 !== (null === (VV = this.viewer) || void 0 === VV ? void 0 : VV.inPlayback)
          },
          viewerOpen: VV.viewerOpen,
          notify: VV.notify,
          download: eV => {
            var xV;
            null === (xV = VV.download) || void 0 === xV || xV.call(VV, eV)
          },
          onState: VV.onRecorderState,
          onSaveState: VV.onSaveState
        }), this.parts = new dY(eV, {
          fileReady: (VV, eV, xV) => {
            var JV;
            eV === vV.hd.Edited ? null === (JV = this.viewer) || void 0 === JV || JV.saveDone(xV) : this.recorder.fileReady(eV, xV)
          },
          fileIncomplete: (VV, eV) => {
            this.saveFailed(eV)
          }
        });
        const xV = {
          replayFailed: VV => {
            var eV;
            null === (eV = this.viewer) || void 0 === eV || eV.onFailed(VV)
          },
          replayOption: eV => {
            var xV;
            null === (xV = VV.onReplayOption) || void 0 === xV || xV.call(VV, eV)
          },
          replayUiEvent: eV => {
            var xV;
            null === (xV = VV.onReplayUiEvent) || void 0 === xV || xV.call(VV, eV)
          },
          filePart: (VV, eV, xV) => {
            this.parts.onPart(VV, eV, xV)
          },
          fileReady: VV => {
            this.parts.onReady(VV)
          },
          replayOpened: eV => {
            var xV;
            null === (xV = VV.onReplayOpened) || void 0 === xV || xV.call(VV, eV)
          },
          recorderEvent: VV => {
            var eV;
            switch (VV.what) {
              case vV._c.FileDiscarded:
                this.parts.onDiscarded(VV.save);
                break;
              case vV._c.SaveFailed:
                this.saveFailed(VV.kind);
                break;
              case vV._c.SaveBusy:
                if (null !== (eV = this.viewer) && void 0 !== eV && eV.savePending) {
                  this.viewer.saveFailed(!0);
                  break
                }
                this.recorder.onEvent(VV);
                break;
              default:
                this.recorder.onEvent(VV)
            }
          }
        };
        this.sink = function(VV, eV) {
          return {
            onReplayEvent: SY(VV, eV)
          }
        }(xV, VV.buffer), this.recorderEvents = IY(xV)
      }
      get currentViewer() {
        return this.viewer
      }
      loadViewer() {
        var VV;
        return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (VV = this.deps.loadViewer) && void 0 !== VV ? VV : OY)().catch((VV => {
          throw this.viewerChunk = null, VV
        })), this.viewerChunk.then((VV => (this.viewer ??= new VV.ReplayViewer({
          client: this.deps.client,
          setHoldDraws: this.deps.setHoldDraws,
          meshPending: this.deps.meshPending,
          notify: this.deps.notify,
          onChange: () => {
            var VV, eV;
            null === (VV = (eV = this.deps).onViewerChange) || void 0 === VV || VV.call(eV)
          }
        }), this.viewer))))
      }
      activated(VV) {
        this.recorder.activated(VV)
      }
      afterFrame(VV) {
        try {
          VV > 0 && this.recorder.iZ()
        } finally {
          var eV;
          null === (eV = this.viewer) || void 0 === eV || eV.afterFrame()
        }
      }
      end() {
        var VV;
        null === (VV = this.viewer) || void 0 === VV || VV.end()
      }
      saveFailed(VV) {
        var eV;
        VV === vV.hd.Edited ? null === (eV = this.viewer) || void 0 === eV || eV.saveFailed(!1) : this.recorder.failed(VV)
      }
    }
    var eU = xV(41885),
      xU = xV(41909),
      JU = xV(5307),
      YU = xV(42210);
    class UU {
      constructor(VV) {
        this.deps = VV, this.analogue = [0, 0], this.keys = 0, this.unsent = !1
      }
      drag(VV, eV) {
        if (!this.deps.live() || 0 === VV && 0 === eV) return;
        const xV = (0, cV.s)(0, performance.now()),
          JV = this.deps.dragScale();
        (0, YU.f)((() => {
          (0, cV.x)(vV.Gb.MouseDown, 0, 0, 0, xV), (0, cV.x)(vV.Gb.MouseMove, 0, VV * JV, eV * JV, 0), (0, cV.x)(vV.Gb.MouseUp, 0, 0, 0, xV)
        }))
      }
      move(VV) {
        var eV, xV;
        this.analogue[0] = null !== (eV = null === VV || void 0 === VV ? void 0 : VV.x) && void 0 !== eV ? eV : 0, this.analogue[1] = null !== (xV = null === VV || void 0 === VV ? void 0 : VV.y) && void 0 !== xV ? xV : 0, this.send()
      }
      holdVertical(VV, eV) {
        const xV = "freeCamUp" === VV ? kV.Zb.Up : kV.Zb.Down;
        this.keys = eV ? this.keys | xV : this.keys & ~xV, this.send()
      }
      flush() {
        this.unsent && this.send()
      }
      send() {
        const VV = this.deps.live() ? this.deps.cmd() : null;
        this.unsent = null !== VV && !(0, kV.Ge)(VV, 0, this.analogue, this.keys)
      }
    }
    var yU = xV(3992),
      pU = xV(767),
      QU = xV(313),
      nU = xV(99),
      wU = xV(35240),
      ZU = xV(752),
      vU = xV(37749);

    function rU() {
      const VV = JV.b.get("clientEscMenuOptions"),
        eV = (0, pU.r)(VV);
      return {
        mouse: (0, nU.isMobile)() ? eV : VV.mouseSensitivity,
        touch: eV,
        fovPercent: VV.cameraFOV
      }
    }

    function kU() {
      const VV = JV.b.get("clientEscMenuOptions"),
        eV = JV.b.get("isTouchScreen") ? (0, pU.r)(VV) : VV.mouseSensitivity,
        xV = rU().mouse;
      return xV > 0 ? eV / xV : 1
    }

    function bU(VV) {
      const eV = () => {
        VV.setSoundPrefs(JV.b.get("soundVolume"), JV.b.get("soundOnFromAd"))
      };
      let xV = null;
      const YV = () => {
        const {
          showFog: eV,
          enableLighting: YV,
          fogChunkDistance: UV,
          chunkFadeIn: yV
        } = JV.b.get("clientEscMenuOptions"), pV = {
          showFog: eV,
          lighting: YV,
          fogChunks: UV,
          chunkFade: yV,
          cellLight: (0, yU.i)("cellLight") ? (0, yU.i)("cellLightUnlit") ? "all" : "lit" : "off"
        };
        xV && (0, vV.fe)(xV) === (0, vV.fe)(pV) && xV.fogChunks === UV || (xV = pV, VV.setEnvPrefs(xV))
      };
      let UV = null;
      const pV = () => {
        const eV = function() {
          const VV = JV.b.get("clientEscMenuOptions");
          return {
            nametagsHidden: JV.b.get("areNametagsHidden"),
            crouchToggle: VV.crouchIsToggle,
            bhopDisabled: VV.disableBunnyHopping,
            disableBobbing: VV.disableBobbing,
            ezTowering: VV.ezTowering ? (0, QU.d)() : null,
            ezBridging: VV.ezBridging,
            showChunkBorders: VV.showChunkBorders,
            touchWalk: !(0, vU.g)(),
            edgeGuard: VV.touchEdgeGuard,
            edgeGuardLong: (0, ZU.d)(),
            nametagCutDistance: (0, wU.f)()
          }
        }();
        (0, MV.Xd)(UV, eV) || (UV = eV, VV.setUiPrefs(eV))
      };
      let QV = null;
      const nV = () => {
        const eV = rU();
        (0, MV.Xd)(QV, eV) || (QV = eV, VV.setLookPrefs(eV))
      };
      eV(), YV(), pV(), nV();
      const wV = [(0, yV.i)("appManagerUpdated|soundVolume", eV), (0, yV.i)("appManagerUpdated|soundOnFromAd", eV), (0, yV.i)("appManagerUpdated|clientEscMenuOptions", (() => {
        YV(), pV(), nV()
      })), (0, yV.i)(vU.d, pV), (0, yV.i)("appManagerUpdated|enabledDebugFeatures", YV), (0, yV.i)("appManagerUpdated|areNametagsHidden", pV), (0, yV.i)("appManagerUpdated|showDistantNametags", pV)];
      return () => {
        for (const VV of wV) VV()
      }
    }
    var EU = xV(42184),
      BU = xV(42192);
    var jU = (0, BU.e)("lend"),
      qU = (0, BU.e)("starting"),
      tU = (0, BU.e)("generation"),
      FU = (0, BU.e)("end");
    class TU {
      constructor(VV) {
        this.deps = VV, Object.defineProperty(this, FU, {
          value: PU
        }), Object.defineProperty(this, jU, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, qU, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, tU, {
          writable: !0,
          value: 0
        })
      }
      get active() {
        return null !== (0, EU.d)(this, jU)[jU] || (0, EU.d)(this, qU)[qU]
      }
      async start(VV) {
        if (this.active) return "busy";
        const eV = (0, EU.d)(this, tU)[tU];
        (0, EU.d)(this, qU)[qU] = !0;
        try {
          if (!await this.deps.ensureLoaded()) return "refused"
        } finally {
          (0, EU.d)(this, qU)[qU] = !1
        }
        if (eV !== (0, EU.d)(this, tU)[tU]) return "refused";
        const xV = this.deps.beginSave();
        if (!xV) return "refused";
        const JV = Number(BigInt.asUintN(32, VV)),
          YV = Number(BigInt.asUintN(32, VV >> 32n));
        let UV = "refused";
        return this.deps.recorderCall(((VV, eV) => {
          const yV = xV.editState,
            pV = VV.stage(yV.length);
          0 !== pV ? (new Uint8Array(eV.buffer, pV, yV.length).set(yV), VV.QyV(xV.headLen, JV, YV) && (UV = "sealing")) : UV = "tooLarge"
        }), !0), "sealing" !== UV ? (xV.end(), UV) : ((0, EU.d)(this, jU)[jU] = xV, "sealing")
      }
      beforeRecorderStep() {
        const VV = (0, EU.d)(this, jU)[jU];
        if (!VV) return null;
        let eV = -1,
          xV = 0;
        if (!this.deps.recorderCall((VV => {
            eV = VV.nyV(), eV > 0 && (xV = VV.wyV())
          }))) return (0, EU.d)(this, FU)[FU](VV, "stopped");
        if (eV < 0) return (0, EU.d)(this, FU)[FU](VV, "read");
        if (0 === eV) return null;
        const JV = VV.head(xV, eV);
        let YV = !1;
        if (JV && this.deps.recorderCall(((VV, xV) => {
            const UV = VV.stage(eV);
            0 !== UV && (new Uint8Array(xV.buffer, UV, eV).set(JV), YV = !0)
          }), !0), YV) return null;
        const UV = VV.givenUp();
        this.deps.recorderCall((VV => {
          VV.ZyV()
        }));
        const yV = (0, EU.d)(this, FU)[FU](VV, UV ? "givenUp" : "stopped");
        return UV && this.deps.givenUp("Reopen the replay you were editing to make your edits again, as they weren't saved when another replay opened."), yV
      }
      stop() {
        (0, EU.d)(this, tU)[tU]++;
        const VV = (0, EU.d)(this, jU)[jU];
        VV && (this.deps.recorderCall((VV => {
          VV.ZyV()
        })), (0, EU.d)(this, FU)[FU](VV, "stopped"))
      }
    }

    function PU(VV, eV) {
      return (0, EU.d)(this, jU)[jU] = null, VV.end(), eV
    }

    function AU(VV, eV) {
      const xV = new Uint8Array(4),
        JV = new DataView(xV.buffer);
      return JV.setUint8(0, VV ? 1 : 0), JV.setUint16(2, Math.max(0, Math.min(65535, Math.round(eV))), !0), xV
    }

    function NU(VV, eV) {
      return VV > function(VV) {
        return 16777216 + 314572.8 * Math.max(0, VV)
      }(eV) + 33554432
    }
    let XU = null;

    function MU(VV) {
      return XU ??= async function(VV) {
        const eV = VV.loadInFlight();
        eV && await eV.catch((() => {}));
        if (VV.trapped()) return "trapped";
        if (VV.busy() || !NU(VV.memoryBytes(), VV.clipSeconds())) return "ZZ";
        VV.unload();
        let xV = !1;
        try {
          xV = await VV.load()
        } catch {
          xV = !1
        }
        if (!xV) return VV.trapped() ? "trapped" : VV.ik() ? "ik" : "failed";
        return "recycled"
      }(VV).finally((() => {
        XU = null
      })), XU
    }
    const zU = "Replay recording couldn't load, so try again.",
      GU = new Set([vV.$c.ToggleRecording, vV.$c.SaveClip]);
    var WU = (0, BU.e)("bindings"),
      RU = (0, BU.e)("module"),
      gU = (0, BU.e)("memory"),
      DU = (0, BU.e)("trapped"),
      iU = (0, BU.e)("ik"),
      CU = (0, BU.e)("recycleDue"),
      aU = (0, BU.e)("loading"),
      oU = (0, BU.e)("generation"),
      cU = (0, BU.e)("viewDrawn"),
      hU = (0, BU.e)("clip"),
      lU = (0, BU.e)("session"),
      LU = (0, BU.e)("control"),
      fU = (0, BU.e)("deferred"),
      mU = (0, BU.e)("coreU8"),
      KU = (0, BU.e)("coreU32"),
      HU = (0, BU.e)("moduleU8"),
      uU = (0, BU.e)("edited"),
      sU = (0, BU.e)("sendSession"),
      SU = (0, BU.e)("checkNotInEvents"),
      IU = (0, BU.e)("clipping"),
      dU = (0, BU.e)("busy"),
      OU = (0, BU.e)("use"),
      Vy = (0, BU.e)("ensureLoaded"),
      ey = (0, BU.e)("loadOnce"),
      xy = (0, BU.e)("recycleAfterStep"),
      Jy = (0, BU.e)("settleRecycle"),
      Yy = (0, BU.e)("load"),
      Uy = (0, BU.e)("attach"),
      yy = (0, BU.e)("resendHeld"),
      py = (0, BU.e)("recycle"),
      Qy = (0, BU.e)("send"),
      ny = (0, BU.e)("unload"),
      wy = (0, BU.e)("dropModule"),
      Zy = (0, BU.e)("coreBytes"),
      vy = (0, BU.e)("coreWords"),
      ry = (0, BU.e)("moduleBytes"),
      ky = (0, BU.e)("loadFailed"),
      by = (0, BU.e)("call"),
      Ey = (0, BU.e)("guard"),
      By = (0, BU.e)("trapOn");
    class jy {
      constructor(VV) {
        this.deps = VV, Object.defineProperty(this, By, {
          value: Ly
        }), Object.defineProperty(this, Ey, {
          value: ly
        }), Object.defineProperty(this, by, {
          value: hy
        }), Object.defineProperty(this, ky, {
          value: cy
        }), Object.defineProperty(this, ry, {
          value: oy
        }), Object.defineProperty(this, vy, {
          value: ay
        }), Object.defineProperty(this, Zy, {
          value: Cy
        }), Object.defineProperty(this, wy, {
          value: iy
        }), Object.defineProperty(this, ny, {
          value: Dy
        }), Object.defineProperty(this, Qy, {
          value: gy
        }), Object.defineProperty(this, py, {
          value: Ry
        }), Object.defineProperty(this, yy, {
          value: Wy
        }), Object.defineProperty(this, Uy, {
          value: Gy
        }), Object.defineProperty(this, Yy, {
          value: zy
        }), Object.defineProperty(this, Jy, {
          value: My
        }), Object.defineProperty(this, xy, {
          value: Xy
        }), Object.defineProperty(this, ey, {
          value: Ny
        }), Object.defineProperty(this, Vy, {
          value: Ay
        }), Object.defineProperty(this, OU, {
          value: Py
        }), Object.defineProperty(this, dU, {
          value: Ty
        }), Object.defineProperty(this, IU, {
          value: Fy
        }), Object.defineProperty(this, SU, {
          value: ty
        }), Object.defineProperty(this, sU, {
          value: qy
        }), Object.defineProperty(this, WU, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, RU, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, gU, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, DU, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, iU, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, CU, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, aU, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, oU, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, cU, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, hU, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, lU, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, LU, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, fU, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, mU, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, KU, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, HU, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, uU, {
          writable: !0,
          value: void 0
        }), (0, EU.d)(this, uU)[uU] = new TU({
          ensureLoaded: () => (0, EU.d)(this, Vy)[Vy](),
          recorderCall: (VV, eV) => {
            eV && (0, EU.d)(this, SU)[SU]("an edited save's stage");
            const xV = (0, EU.d)(this, by)[by](((eV, xV) => (VV(eV, xV), !0)));
            return null !== xV && void 0 !== xV && xV
          },
          beginSave: VV.beginSave,
          givenUp: VV.givenUp
        })
      }
      get active() {
        return null !== (0, EU.d)(this, RU)[RU]
      }
      get trapped() {
        return (0, EU.d)(this, DU)[DU]
      }
      get loading() {
        return null !== (0, EU.d)(this, aU)[aU]
      }
      prefetch() {
        (0, EU.d)(this, iU)[iU] || (0, EU.d)(this, DU)[DU] || (0, EU.d)(this, RU)[RU] || (0, EU.d)(this, aU)[aU] || this.deps.prefetch()
      }
      viewDrawn() {
        (0, EU.d)(this, cU)[cU] = !0, (0, EU.d)(this, IU)[IU]() && (0, EU.d)(this, OU)[OU]()
      }
      prefs(VV, eV) {
        (0, EU.d)(this, hU)[hU] = {
          on: VV,
          seconds: eV
        }, (0, EU.d)(this, Qy)[Qy](vV.Yc.Prefs, AU(VV, eV)), VV && (0, EU.d)(this, cU)[cU] && (0, EU.d)(this, OU)[OU]()
      }
      control(VV) {
        const eV = function(VV) {
          return new Uint8Array([VV, 0, 0, 0])
        }(VV);
        if (GU.has(VV)) return (0, EU.d)(this, RU)[RU] ? void(0, EU.d)(this, Qy)[Qy](vV.Yc.Control, eV) : ((0, EU.d)(this, LU)[LU] = eV, void(0, EU.d)(this, OU)[OU]());
        (0, EU.d)(this, iU)[iU] || this.deps.coreCommand(vV.Yc.Control, eV)
      }
      session(VV) {
        (0, EU.d)(this, lU)[lU] = VV, (0, EU.d)(this, sU)[sU](VV)
      }
      filePartDone(VV, eV) {
        (0, EU.d)(this, Qy)[Qy](vV.Yc.FilePartDone, function(VV, eV) {
          const xV = new Uint8Array(8),
            JV = new DataView(xV.buffer);
          return JV.setUint32(0, VV, !0), JV.setUint32(4, eV, !0), xV
        }(VV, eV))
      }
      fileDone(VV) {
        return (0, EU.d)(this, Qy)[Qy](vV.Yc.FileDone, function(VV) {
          const eV = new Uint8Array(4);
          return new DataView(eV.buffer).setUint32(0, VV, !0), eV
        }(VV)), (0, EU.d)(this, xy)[xy]()
      }
      saveEdited(VV) {
        return (0, EU.d)(this, SU)[SU]("saveEdited"), (0, EU.d)(this, uU)[uU].start(VV)
      }
      afterFrame() {
        if (!(0, EU.d)(this, RU)[RU]) return;
        "read" === (0, EU.d)(this, uU)[uU].beforeRecorderStep() && (0, EU.d)(this, xy)[xy]();
        const VV = (0, EU.d)(this, CU)[CU];
        (0, EU.d)(this, CU)[CU] = null;
        const eV = (0, EU.d)(this, RU)[RU],
          xV = (0, EU.d)(this, gU)[gU];
        if (!eV || !xV) return void(null === VV || void 0 === VV || VV.resolve((0, EU.d)(this, DU)[DU] ? "trapped" : "ZZ"));
        const {
          core: JV
        } = this.deps, YV = JV.kyV(2);
        let UV, yV, pV, QV, nV = 0,
          wV = 0;
        if (0 !== YV) {
          var ZV, vV;
          const VV = (0, EU.d)(this, vy)[vy]();
          nV = null !== (ZV = VV[YV >>> 2]) && void 0 !== ZV ? ZV : 0, wV = null !== (vV = VV[1 + (YV >>> 2)]) && void 0 !== vV ? vV : 0
        }
        try {
          if (wV > 0) {
            const VV = eV.feed(wV);
            0 !== VV && (0, EU.d)(this, ry)[ry](xV).set((0, EU.d)(this, Zy)[Zy]().subarray(nV, nV + wV), VV)
          }
          UV = eV.step(), yV = eV.byV(), pV = eV.EyV(), QV = eV.ByV()
        } catch (rV) {
          if (!(0, EU.d)(this, By)[By](rV)) throw null === VV || void 0 === VV || VV.resolve("ZZ"), rV;
          return void(null === VV || void 0 === VV || VV.resolve("trapped"))
        }
        if (UV > 0) {
          const VV = JV.jyV(2, UV);
          0 !== VV && (0, EU.d)(this, Zy)[Zy]().set((0, EU.d)(this, ry)[ry](xV).subarray(yV, yV + UV), VV)
        }
        if (pV > 0) {
          (0, EU.d)(this, fU)[fU] = [];
          try {
            this.deps.events(new Uint8Array(xV.buffer, QV, pV), xV)
          } catch (rV) {
            throw null === VV || void 0 === VV || VV.resolve("ZZ"), rV
          } finally {
            const VV = (0, EU.d)(this, fU)[fU];
            (0, EU.d)(this, fU)[fU] = null;
            for (const [eV, xV] of VV)(0, EU.d)(this, Qy)[Qy](eV, xV)
          }
        }
        if (!(0, EU.d)(this, IU)[IU]() && !(0, EU.d)(this, dU)[dU]()) return (0, EU.d)(this, ny)[ny](), void(null === VV || void 0 === VV || VV.resolve("ZZ"));
        null === VV || void 0 === VV || VV.resolve((0, EU.d)(this, py)[py]())
      }
      dispose() {
        (0, EU.d)(this, iU)[iU] = !0, (0, EU.d)(this, ny)[ny]()
      }
    }

    function qy(VV) {
      (0, EU.d)(this, Qy)[Qy](vV.Yc.Session, function(VV) {
        const eV = new TextEncoder,
          xV = eV.encode(VV.game).subarray(0, 65535),
          JV = eV.encode(VV.lobby).subarray(0, 65535),
          YV = new Uint8Array(22 + xV.length + 2 + JV.length),
          UV = new DataView(YV.buffer);
        UV.setFloat64(0, VV.unixMs, !0), UV.setBigUint64(8, BigInt.asUintN(64, VV.session), !0), UV.setUint8(16, VV.lobbyType);
        let yV = 20;
        for (const pV of [xV, JV]) UV.setUint16(yV, pV.length, !0), YV.set(pV, yV + 2), yV += 2 + pV.length;
        return YV
      }({
        ...VV,
        unixMs: this.deps.unixNow()
      }))
    }

    function ty(VV) {
      false
    }

    function Fy() {
      var VV, eV;
      return null !== (VV = null === (eV = (0, EU.d)(this, hU)[hU]) || void 0 === eV ? void 0 : eV.on) && void 0 !== VV && VV
    }

    function Ty() {
      const VV = (0, EU.d)(this, RU)[RU];
      let eV = !0;
      if (VV) try {
        eV = VV.busy()
      } catch (xV) {
        if (!(0, EU.d)(this, By)[By](xV)) throw xV
      }
      return eV || (0, EU.d)(this, uU)[uU].active
    }
    async function Py() {
      !(0, EU.d)(this, iU)[iU] && this.deps.allowed() ? await (0, EU.d)(this, Vy)[Vy]() : (0, EU.d)(this, LU)[LU] = null
    }

    function Ay() {
      return (0, EU.d)(this, DU)[DU] || (0, EU.d)(this, iU)[iU] ? Promise.resolve(!1) : (0, EU.d)(this, RU)[RU] ? Promise.resolve(!0) : ((0, EU.d)(this, aU)[aU] ??= (0, EU.d)(this, ey)[ey](), (0, EU.d)(this, aU)[aU])
    }
    async function Ny() {
      let VV = !1;
      try {
        return VV = await (0, EU.d)(this, Yy)[Yy](), VV
      } finally {
        VV || ((0, EU.d)(this, LU)[LU] = null), (0, EU.d)(this, aU)[aU] = null
      }
    }

    function Xy() {
      if (!(0, EU.d)(this, RU)[RU]) return Promise.resolve((0, EU.d)(this, DU)[DU] ? "trapped" : "ZZ");
      if (!(0, EU.d)(this, CU)[CU]) {
        let VV = () => {};
        const eV = new Promise((eV => {
          VV = eV
        }));
        (0, EU.d)(this, CU)[CU] = {
          promise: eV,
          resolve: VV
        }
      }
      return (0, EU.d)(this, CU)[CU].promise
    }

    function My(VV) {
      const eV = (0, EU.d)(this, CU)[CU];
      (0, EU.d)(this, CU)[CU] = null, null === eV || void 0 === eV || eV.resolve(VV)
    }
    async function zy() {
      let VV = (0, EU.d)(this, WU)[WU];
      if (!VV) {
        const eV = (0, EU.d)(this, oU)[oU];
        try {
          VV = await this.deps.load()
        } catch (xV) {
          return eV === (0, EU.d)(this, oU)[oU] && await (0, EU.d)(this, ky)[ky](xV), !1
        }
        if (eV !== (0, EU.d)(this, oU)[oU]) return this.deps.unload(), !1;
        const JV = VV,
          YV = (0, EU.d)(this, Ey)[Ey]((() => JV.qyV()));
        if (void 0 === YV) return !1;
        const UV = this.deps.core.tyV();
        if (YV !== UV) return await (0, EU.d)(this, ky)[ky](new Error(`recorder port version ${YV}, the core's ${UV}`)), !1;
        (0, EU.d)(this, WU)[WU] = VV
      }
      const eV = VV;
      try {
        if (!(0, EU.d)(this, Ey)[Ey]((() => ((0, EU.d)(this, RU)[RU] = new eV.FyV, (0, EU.d)(this, gU)[gU] = eV.vyV(), !0)))) return !1;
        (0, EU.d)(this, yy)[yy]();
        const VV = (0, EU.d)(this, LU)[LU];
        return (0, EU.d)(this, LU)[LU] = null, VV && (0, EU.d)(this, Qy)[Qy](vV.Yc.Control, VV), (0, EU.d)(this, Uy)[Uy]()
      } catch (xV) {
        return (0, EU.d)(this, ny)[ny](), await (0, EU.d)(this, ky)[ky](xV), !1
      }
    }

    function Gy() {
      return this.deps.core.TyV(0), 1 === this.deps.core.TyV(1) || ((0, EU.d)(this, ny)[ny](), this.deps.failed(zU), !1)
    }

    function Wy() {
      (0, EU.d)(this, hU)[hU] && (0, EU.d)(this, Qy)[Qy](vV.Yc.Prefs, AU((0, EU.d)(this, hU)[hU].on, (0, EU.d)(this, hU)[hU].seconds)), (0, EU.d)(this, lU)[lU] && (0, EU.d)(this, sU)[sU]((0, EU.d)(this, lU)[lU])
    }

    function Ry() {
      return MU({
        memoryBytes: this.deps.memoryBytes,
        clipSeconds: () => {
          var VV, eV;
          return null !== (VV = null === (eV = (0, EU.d)(this, hU)[hU]) || void 0 === eV ? void 0 : eV.seconds) && void 0 !== VV ? VV : 0
        },
        trapped: () => (0, EU.d)(this, DU)[DU],
        busy: () => (0, EU.d)(this, dU)[dU](),
        loadInFlight: () => (0, EU.d)(this, aU)[aU],
        ik: () => (0, EU.d)(this, iU)[iU],
        unload: () => {
          (0, EU.d)(this, ny)[ny]()
        },
        load: () => (0, EU.d)(this, Vy)[Vy]()
      })
    }

    function gy(VV, eV) {
      (0, EU.d)(this, fU)[fU] ? (0, EU.d)(this, fU)[fU].push([VV, eV]): (0, EU.d)(this, by)[by](((xV, JV) => {
        const YV = xV.ryV(eV.length);
        0 !== YV && (new Uint8Array(JV.buffer, YV, eV.length).set(eV), xV.command(VV, eV.length))
      }))
    }

    function Dy() {
      (0, EU.d)(this, oU)[oU]++, (0, EU.d)(this, Jy)[Jy]("ZZ"), (0, EU.d)(this, uU)[uU].stop(), this.deps.core.TyV(0), (0, EU.d)(this, wy)[wy](), (0, EU.d)(this, DU)[DU] || ((0, EU.d)(this, WU)[WU] = null, this.deps.unload())
    }

    function iy() {
      (0, EU.d)(this, by)[by]((VV => {
        VV.free()
      })), (0, EU.d)(this, RU)[RU] = null, (0, EU.d)(this, gU)[gU] = null, (0, EU.d)(this, HU)[HU] = null
    }

    function Cy() {
      var VV;
      const eV = this.deps.coreBuffer();
      return (null === (VV = (0, EU.d)(this, mU)[mU]) || void 0 === VV ? void 0 : VV.buffer) !== eV && ((0, EU.d)(this, mU)[mU] = new Uint8Array(eV)), (0, EU.d)(this, mU)[mU]
    }

    function ay() {
      var VV;
      const eV = this.deps.coreBuffer();
      return (null === (VV = (0, EU.d)(this, KU)[KU]) || void 0 === VV ? void 0 : VV.buffer) !== eV && ((0, EU.d)(this, KU)[KU] = new Uint32Array(eV, 0, eV.byteLength >>> 2)), (0, EU.d)(this, KU)[KU]
    }

    function oy(VV) {
      var eV;
      const xV = VV.buffer;
      return (null === (eV = (0, EU.d)(this, HU)[HU]) || void 0 === eV ? void 0 : eV.buffer) !== xV && ((0, EU.d)(this, HU)[HU] = new Uint8Array(xV)), (0, EU.d)(this, HU)[HU]
    }
    async function cy(VV) {
      await this.deps.staleOr(VV, (() => {
        this.deps.failed(zU)
      }))
    }

    function hy(VV) {
      const eV = (0, EU.d)(this, RU)[RU],
        xV = (0, EU.d)(this, gU)[gU];
      if (eV && xV) return (0, EU.d)(this, Ey)[Ey]((() => VV(eV, xV)))
    }

    function ly(VV) {
      if (!(0, EU.d)(this, DU)[DU]) try {
        return VV()
      } catch (eV) {
        if (!(0, EU.d)(this, By)[By](eV)) throw eV;
        return
      }
    }

    function Ly(VV) {
      return VV instanceof WebAssembly.RuntimeError && ((0, EU.d)(this, DU)[DU] = !0, (0, EU.d)(this, RU)[RU] = null, (0, EU.d)(this, gU)[gU] = null, (0, EU.d)(this, HU)[HU] = null, (0, EU.d)(this, WU)[WU] = null, (0, EU.d)(this, LU)[LU] = null, (0, EU.d)(this, Jy)[Jy]("trapped"), this.deps.core.TyV(0), (0, EU.d)(this, uU)[uU].stop(), this.deps.crash(this.deps.markTrapped(VV)), this.deps.failed("Replay recording stopped working, so reload the page to record replays again."), !0)
    }
    var fy = xV(39842);
    const my = new Map([
      ["skyblock", () => xV.e(58).then((() => xV(39833)))]
    ]);

    function Ky(VV) {
      const eV = my.get(VV);
      return eV ? eV().then((() => {
        const eV = (0, fy.b)(VV);
        if (!eV) throw new Error(`${VV}'s replay hook module registered no hook`);
        return eV
      })) : null
    }
    class Hy {
      constructor(VV) {
        this.deps = VV, this.game = null, this.hook = null, this.generation = 0, this.all = !1, this.pending = new Map, this.ids = new Int32Array(64)
      }
      get wantsWatch() {
        return null !== this.hook
      }
      opened(VV) {
        if (this.pending.clear(), VV === this.game && null !== this.hook) return void(this.all = !0);
        const eV = ++this.generation;
        this.game = VV, this.hook = null, this.all = !1;
        const xV = this.deps.loadHook(VV);
        null === xV || void 0 === xV || xV.then((VV => {
          eV === this.generation && (this.hook = VV, this.all = !0)
        }), (VV => {
          eV === this.generation && this.deps.onError(VV)
        }))
      }
      ended() {
        this.generation++, this.game = null, this.hook = null, this.all = !1, this.pending.clear()
      }
      entityAdded(VV) {
        null === this.hook || this.all || this.pending.set(VV, !0)
      }
      entityInfoChanged(VV) {
        null === this.hook || this.all || this.pending.has(VV) || this.pending.set(VV, !1)
      }
      flush(VV) {
        const {
          hook: eV
        } = this;
        if (null === eV || !VV || !this.all && 0 === this.pending.size) return;
        const xV = this.deps.cmd();
        if (null === xV) return;
        const {
          api: JV
        } = this.deps;
        if (this.all) {
          this.all = !1, this.pending.clear();
          const {
            ids: VV,
            count: eV
          } = dx(JV, this.ids);
          this.ids = VV;
          for (let xV = 0; xV < eV; xV++) this.pending.set(VV[xV], !0)
        }
        const YV = this.ids = Ox(this.ids, this.pending.size);
        let UV = 0;
        for (const nV of this.pending.keys()) YV[UV++] = nV;
        const yV = [],
          pV = VJ(JV, YV, UV, ((VV, eV) => {
            null !== eV && yV.push({
              serverId: VV,
              info: eV,
              spawned: !0 === this.pending.get(VV)
            })
          }));
        if (pV) {
          this.pending.clear();
          for (const {
              serverId: VV,
              info: JV,
              spawned: YV
            }
            of yV) try {
            eV(JV, {
              setFacingTolerance: eV => {
                null === eV && YV || tx(xV, VV, eV) || this.pending.set(VV, YV)
              }
            })
          } catch (QV) {
            this.deps.onError(QV)
          }
        }
      }
    }
    var uy = (0, BU.e)("bindings"),
      sy = (0, BU.e)("module"),
      Sy = (0, BU.e)("memory"),
      Iy = (0, BU.e)("trapped"),
      dy = (0, BU.e)("generation"),
      Oy = (0, BU.e)("loading"),
      Vp = (0, BU.e)("lend"),
      ep = (0, BU.e)("givenUp"),
      xp = (0, BU.e)("afterSave"),
      Jp = (0, BU.e)("opens"),
      Yp = (0, BU.e)("saveAskedAt"),
      Up = (0, BU.e)("unload"),
      yp = (0, BU.e)("dropModule"),
      pp = (0, BU.e)("loadFailed"),
      Qp = (0, BU.e)("saveReadsBody"),
      np = (0, BU.e)("command"),
      wp = (0, BU.e)("call"),
      Zp = (0, BU.e)("guard"),
      vp = (0, BU.e)("trapOn");
    class rp {
      constructor(VV) {
        this.deps = VV, Object.defineProperty(this, vp, {
          value: Fp
        }), Object.defineProperty(this, Zp, {
          value: tp
        }), Object.defineProperty(this, wp, {
          value: qp
        }), Object.defineProperty(this, np, {
          value: jp
        }), Object.defineProperty(this, Qp, {
          get: Bp,
          set: void 0
        }), Object.defineProperty(this, pp, {
          value: Ep
        }), Object.defineProperty(this, yp, {
          value: bp
        }), Object.defineProperty(this, Up, {
          value: kp
        }), Object.defineProperty(this, uy, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, sy, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Sy, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Iy, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, dy, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, Oy, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, Vp, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ep, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, xp, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Jp, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, Yp, {
          writable: !0,
          value: null
        })
      }
      get active() {
        return null !== (0, EU.d)(this, sy)[sy] && null === (0, EU.d)(this, xp)[xp]
      }
      async open(VV, eV) {
        if ((0, EU.d)(this, Iy)[Iy]) return vV.fd.ModuleTrap;
        let xV = (0, EU.d)(this, uy)[uy];
        if (!xV) {
          const VV = (0, EU.d)(this, dy)[dy];
          (0, EU.d)(this, Oy)[Oy]++;
          try {
            xV = await this.deps.load()
          } catch (YV) {
            return (0, EU.d)(this, Oy)[Oy]--, VV !== (0, EU.d)(this, dy)[dy] ? "stopped" : (0, EU.d)(this, pp)[pp](YV, eV)
          }
          if ((0, EU.d)(this, Oy)[Oy]--, VV !== (0, EU.d)(this, dy)[dy]) return (0, EU.d)(this, uy)[uy] || 0 !== (0, EU.d)(this, Oy)[Oy] || (0, EU.d)(this, Iy)[Iy] || this.deps.unload(), "stopped";
          if ((0, EU.d)(this, Iy)[Iy]) return vV.fd.ModuleTrap;
          const JV = xV.qyV(),
            UV = this.deps.core.tyV();
          if (JV !== UV) return (0, EU.d)(this, pp)[pp](new Error(`replay port version ${JV}, the core's ${UV}`), eV);
          (0, EU.d)(this, uy)[uy] = xV
        }
        if (!(0, EU.d)(this, sy)[sy]) {
          const VV = xV;
          if (!(0, EU.d)(this, Zp)[Zp]((() => {
              (0, EU.d)(this, sy)[sy] = new VV.PyV, (0, EU.d)(this, Sy)[Sy] = VV.AyV()
            }))) return vV.fd.ModuleTrap
        }
        let JV = !1;
        return (0, EU.d)(this, wp)[wp](((eV, xV) => {
          null !== (0, EU.d)(this, xp)[xp] && eV.step(0, 0);
          const YV = eV.stage(VV.length);
          0 !== YV && (new Uint8Array(xV.buffer, YV, VV.length).set(VV), eV.open(), (0, EU.d)(this, ep)[ep] = (0, EU.d)(this, Vp)[Vp], (0, EU.d)(this, xp)[xp] = null, (0, EU.d)(this, Jp)[Jp]++, JV = !0)
        })) ? JV ? "opening" : vV.fd.TooLarge : vV.fd.ModuleTrap
      }
      beforeFrame(VV) {
        const eV = (0, EU.d)(this, sy)[sy],
          xV = (0, EU.d)(this, Sy)[Sy];
        if (!eV || !xV || null !== (0, EU.d)(this, xp)[xp]) return;
        const {
          core: JV
        } = this.deps, YV = JV.NyV(VV);
        if (YV < 0) return;
        const UV = Math.floor(YV);
        let yV, pV;
        try {
          yV = eV.step(UV, YV - UV), pV = eV.byV()
        } catch (nV) {
          return void(0, EU.d)(this, vp)[vp](nV)
        }
        const QV = JV.jyV(1, yV);
        if (0 === QV) {
          const VV = (0, EU.d)(this, wp)[wp]((VV => {
            VV.close()
          }));
          if (!VV) return;
          return (0, EU.d)(this, Qp)[Qp] ? (0, EU.d)(this, xp)[xp] = "drop" : (0, EU.d)(this, yp)[yp](), void JV.XyV(vV.fd.Port)
        }
        new Uint8Array(this.deps.coreBuffer(), QV, yV).set(new Uint8Array(xV.buffer, pV, yV))
      }
      play() {
        (0, EU.d)(this, np)[np]((VV => {
          VV.play()
        }))
      }
      pause() {
        (0, EU.d)(this, np)[np]((VV => {
          VV.pause()
        }))
      }
      seek(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, EU.d)(this, np)[np]((xV => {
          xV.seek(VV, eV)
        }))
      }
      setMark(VV, eV) {
        return (0, EU.d)(this, np)[np]((xV => {
          xV.MyV(VV, eV)
        }))
      }
      addKeyframe(VV, eV) {
        return (0, EU.d)(this, np)[np]((xV => {
          xV.zyV(VV[0], VV[1], VV[2], eV[0], eV[1], eV[2])
        }))
      }
      setKeyframe(VV, eV) {
        return (0, EU.d)(this, np)[np]((xV => {
          xV.GyV(VV, eV)
        }))
      }
      moveKeyframe(VV, eV) {
        return (0, EU.d)(this, np)[np]((xV => {
          xV.WyV(VV, eV)
        }))
      }
      deleteKeyframes(VV, eV) {
        return (0, EU.d)(this, np)[np]((xV => {
          xV.RyV(VV, eV)
        }))
      }
      crop(VV, eV) {
        return null === (0, EU.d)(this, Vp)[Vp] && (0, EU.d)(this, np)[np]((xV => {
          xV.crop(VV, eV)
        }))
      }
      beginSave() {
        const VV = (0, EU.d)(this, Yp)[Yp];
        if ((0, EU.d)(this, Yp)[Yp] = null, null !== VV && VV !== (0, EU.d)(this, Jp)[Jp]) return null;
        let eV = 0,
          xV = null;
        if ((0, EU.d)(this, wp)[wp](((VV, JV) => {
            eV = VV.save(), 0 !== eV && (xV = new Uint8Array(JV.buffer, VV.gyV(), VV.DyV()).slice())
          })), 0 === eV || !xV) return null;
        const JV = {
          headLen: eV,
          editState: xV,
          givenUp: () => (0, EU.d)(this, ep)[ep] === JV,
          head: (VV, eV) => {
            if ((0, EU.d)(this, Vp)[Vp] !== JV || !(0, EU.d)(this, Qp)[Qp]) return null;
            let xV = null;
            return (0, EU.d)(this, wp)[wp](((JV, YV) => {
              const UV = JV.iyV();
              0 !== UV && VV >= 0 && eV >= 0 && VV + eV <= UV && (xV = new Uint8Array(YV.buffer, JV.CyV() + VV, eV))
            })), xV
          },
          end: () => {
            if ((0, EU.d)(this, Vp)[Vp] !== JV) return;
            (0, EU.d)(this, Vp)[Vp] = null, (0, EU.d)(this, ep)[ep] = null, (0, EU.d)(this, wp)[wp]((VV => {
              VV.ayV()
            }));
            const VV = (0, EU.d)(this, xp)[xp];
            (0, EU.d)(this, xp)[xp] = null, "unload" === VV ? (0, EU.d)(this, Up)[Up]() : "drop" === VV && (0, EU.d)(this, yp)[yp]()
          }
        };
        return (0, EU.d)(this, Vp)[Vp] = JV, JV
      }
      askSave() {
        (0, EU.d)(this, Yp)[Yp] = (0, EU.d)(this, Jp)[Jp]
      }
      setSpeed(VV) {
        (0, EU.d)(this, np)[np]((eV => {
          eV.oyV(VV)
        }))
      }
      setCameraMode(VV) {
        (0, EU.d)(this, np)[np]((eV => {
          eV.cyV(VV)
        }))
      }
      close() {
        (0, EU.d)(this, np)[np]((VV => {
          VV.close()
        }))
      }
      stop() {
        (0, EU.d)(this, dy)[dy]++, (0, EU.d)(this, Qp)[Qp] && ((0, EU.d)(this, wp)[wp]((VV => {
          VV.close()
        })), (0, EU.d)(this, sy)[sy]) ? (0, EU.d)(this, xp)[xp] = "unload" : (0, EU.d)(this, Up)[Up]()
      }
    }

    function kp() {
      (0, EU.d)(this, yp)[yp](), (0, EU.d)(this, Iy)[Iy] || ((0, EU.d)(this, uy)[uy] = null, this.deps.unload())
    }

    function bp() {
      (0, EU.d)(this, wp)[wp]((VV => {
        VV.free()
      })), (0, EU.d)(this, sy)[sy] = null, (0, EU.d)(this, Sy)[Sy] = null
    }
    async function Ep(VV, eV) {
      return await this.deps.staleOr(VV, (() => {}), {
        beforeReload: eV
      }) ? "reloading" : vV.fd.ModuleLoad
    }

    function Bp() {
      return null !== (0, EU.d)(this, Vp)[Vp] && (0, EU.d)(this, ep)[ep] !== (0, EU.d)(this, Vp)[Vp]
    }

    function jp(VV) {
      return null === (0, EU.d)(this, xp)[xp] && (0, EU.d)(this, wp)[wp](VV)
    }

    function qp(VV) {
      const eV = (0, EU.d)(this, sy)[sy],
        xV = (0, EU.d)(this, Sy)[Sy];
      return !(!eV || !xV) && (0, EU.d)(this, Zp)[Zp]((() => {
        VV(eV, xV)
      }))
    }

    function tp(VV) {
      if ((0, EU.d)(this, Iy)[Iy]) return !1;
      try {
        return VV(), !0
      } catch (eV) {
        return (0, EU.d)(this, vp)[vp](eV), !1
      }
    }

    function Fp(VV) {
      if (!(VV instanceof WebAssembly.RuntimeError)) throw VV;
      (0, EU.d)(this, Iy)[Iy] = !0, (0, EU.d)(this, sy)[sy] = null, (0, EU.d)(this, Sy)[Sy] = null, (0, EU.d)(this, uy)[uy] = null, this.deps.crash(this.deps.markTrapped(VV)), this.deps.core.XyV(vV.fd.ModuleTrap)
    }
    var Tp = xV(7033),
      Pp = xV(42334);
    const Ap = "[bloxd-wasm-client]";
    const Np = String(KY);

    function Xp(VV) {
      return null === VV || VV === Np ? void 0 : VV
    }

    function Mp(VV) {
      var eV, xV, JV, YV, UV, pV, QV;
      switch (VV.what) {
        case vV.od.FlyingText: {
          let eV;
          try {
            eV = JSON.parse(VV.contentJson)
          } catch (nV) {
            return void console.warn(`${Ap} a replay's flying text isn't JSON`, nV)
          }
          yV.h.QZ("forceFlyingMiddleMessage", {
            content: eV,
            ux: VV.ux,
            angle: VV.angle,
            Sx: VV.Sx
          });
          break
        }
        case vV.od.PlayerKilled:
          (0, Pp.h)({
            kind: "killed",
            body: {
              deadEId: null !== (eV = Xp(VV.dead)) && void 0 !== eV ? eV : "",
              killerEId: Xp(VV.killer),
              withItem: null !== (xV = VV.withItem) && void 0 !== xV ? xV : "",
              killstreak: VV.killstreak
            }
          });
          break;
        case vV.od.Killfeed:
          (0, Pp.h)({
            kind: "custom",
            body: {
              killer: {
                eId: Xp(VV.killerId),
                name: null !== (JV = VV.killerName) && void 0 !== JV ? JV : void 0,
                colour: null !== (YV = VV.killerColour) && void 0 !== YV ? YV : void 0
              },
              victim: {
                eId: Xp(VV.victimId),
                name: null !== (UV = VV.victimName) && void 0 !== UV ? UV : void 0,
                colour: null !== (pV = VV.victimColour) && void 0 !== pV ? pV : void 0
              },
              withItem: null !== (QV = VV.withItem) && void 0 !== QV ? QV : ""
            }
          })
      }
    }
    const zp = "[bloxd-wasm-client]";

    function Gp(VV) {
      if (void 0 === VV || null === VV || "" === VV) return null;
      const eV = Number(VV);
      return Number.isInteger(eV) && eV > KY && eV <= 2147483647 ? eV : null
    }

    function Wp(VV) {
      return {
        id: Gp(VV.eId),
        name: "string" === typeof VV.name ? VV.name : null,
        colour: "string" === typeof VV.colour ? VV.colour : null
      }
    }

    function Rp(VV) {
      const eV = (0, xU.l)(yJ.mc.PlayerKilled, (eV => {
          var xV, JV;
          const YV = (0, eU.j)(eV);
          if (!(0, eU.e)(YV)) return;
          const {
            deadEId: UV,
            killerEId: yV,
            withItem: pV,
            killstreak: QV
          } = YV;
          VV.recordPlayerKilled(null !== (xV = Gp(UV)) && void 0 !== xV ? xV : KY, null !== (JV = Gp(yV)) && void 0 !== JV ? JV : KY, "number" === typeof QV ? QV : 0, "string" === typeof pV ? pV : "")
        })),
        xV = (0, xU.l)(yJ.mc.CustomKillfeed, (eV => {
          const xV = (0, eU.j)(eV);
          if (!(0, eU.e)(xV) || !(0, eU.e)(xV.killer) || !(0, eU.e)(xV.victim)) return;
          const {
            killer: JV,
            victim: YV,
            withItem: UV
          } = xV;
          VV.recordKillfeed(Wp(JV), Wp(YV), "string" === typeof UV ? UV : null)
        }));
      return () => {
        eV(), xV()
      }
    }

    function gp(VV) {
      var eV;
      return void 0 === VV || null === VV ? null : null !== (eV = JSON.stringify(VV)) && void 0 !== eV ? eV : null
    }

    function Dp(VV) {
      let eV = null;
      const xV = () => {
        const {
          enableClipping: xV,
          clipDurationSeconds: YV
        } = JV.b.get("clientEscMenuOptions"), UV = `${xV}:${YV}`;
        UV !== eV && (eV = UV, VV.recorder.setPrefs(xV, YV))
      };
      return xV(), (0, yV.i)("appManagerUpdated|clientEscMenuOptions", xV)
    }
    const ip = "replayModule",
      Cp = "recorderModule";

    function ap(VV, eV, xV) {
      return function() {
        return VV.isStopped ? xV : eV(...arguments)
      }
    }
    const op = {
      open: () => Promise.reject(new Error(CY.b.coreStopped.text)),
      replayKey: () => null,
      encode: () => Promise.resolve(null),
      fileHandle: () => null,
      markSaved: () => {}
    };

    function cp() {
      return xV.e(76).then((() => xV(64492)))
    }

    function hp(VV) {
      (0, CY.f)({
        text: VV,
        type: "Error"
      })
    }
    class lp {
      constructor(VV) {
        this.deps = VV, this.runtime = void 0, this.entityHooks = void 0, this.recordedOptions = void 0, this.stops = void 0, this.activeConn = 0, this.stopped = !1, this.bench = null, this.replay = void 0, this.recorder = void 0, this.freecam = void 0, this.drawn = !1;
        const {
          running: eV,
          api: JV,
          core: YV
        } = VV, UV = () => VV.memory().buffer, yV = () => eV.isStopped ? null : eV.rings.cmd, pV = ap(eV, ((VV, eV) => YV.jyV(VV, eV)), 0), QV = () => YV.tyV();
        let nV = null;
        this.replay = new rp({
          core: {
            NyV: ap(eV, (VV => YV.NyV(VV)), -1),
            jyV: pV,
            tyV: QV,
            XyV: ap(eV, (VV => {
              YV.XyV(VV)
            }), void 0)
          },
          coreBuffer: UV,
          load: async () => (nV = await xV.e(77).then((() => xV(64509))), nV.loadReplayModule()),
          unload: () => {
            var VV;
            null === (VV = nV) || void 0 === VV || VV.unloadReplayModule()
          },
          markTrapped: VV => nV ? nV.markReplayTrapped(VV) : new Error(String(VV)),
          staleOr: (eV, xV, JV) => VV.staleOr(ip, eV, xV, JV),
          crash: eV => {
            VV.reportFault(ip, eV)
          }
        });
        let wV = null;
        this.recorder = new jy({
          core: {
            TyV: ap(eV, (VV => YV.TyV(VV)), 0),
            kyV: ap(eV, (VV => YV.kyV(VV)), 0),
            jyV: pV,
            tyV: QV
          },
          coreCommand: (VV, eV) => {
            var xV, JV;
            return null !== (xV = null === (JV = yV()) || void 0 === JV ? void 0 : JV.writeCmd(VV, 0, eV)) && void 0 !== xV && xV
          },
          coreBuffer: UV,
          load: async () => (wV = await cp(), wV.loadRecorderModule()),
          prefetch: () => {
            cp().then((VV => VV.prefetchRecorderModule())).catch((VV => {
              console.warn(`${zp} the recorder module didn't prefetch, so a save loads it:`, VV)
            }))
          },
          unload: () => {
            var VV;
            null === (VV = wV) || void 0 === VV || VV.unloadRecorderModule()
          },
          markTrapped: VV => wV ? wV.markRecorderTrapped(VV) : new Error(String(VV)),
          memoryBytes: () => {
            var VV, eV;
            return null !== (VV = null === (eV = wV) || void 0 === eV ? void 0 : eV.recorderMemoryBytes()) && void 0 !== VV ? VV : 0
          },
          staleOr: (eV, xV) => VV.staleOr(Cp, eV, xV),
          crash: eV => {
            VV.reportFault(Cp, eV)
          },
          allowed: () => !0 === VV.options.get("canRecordReplays"),
          failed: hp,
          events: (VV, eV) => {
            this.runtime.recorderEvents(VV, eV)
          },
          beginSave: () => this.replay.beginSave(),
          givenUp: hp,
          unixNow: () => Date.now()
        });
        const ZV = new mY({
          core: {
            YyV: ap(eV, (VV => YV.YyV(VV)), 0),
            yyV: ap(eV, (() => {
              YV.yyV()
            }), void 0),
            xB: ap(eV, (() => YV.xB()), 0),
            UyV: ap(eV, (() => YV.UyV()), 0)
          },
          buffer: UV,
          apiView: () => JV.apiView,
          cmd: yV,
          replay: this.replay,
          recorder: this.recorder
        });
        this.entityHooks = new Hy({
          api: JV,
          cmd: yV,
          loadHook: Ky,
          onError: VV => {
            console.warn(`${zp} the recorded game's replay hooks:`, VV)
          }
        });
        const vV = new VU({
          client: ZV,
          buffer: UV,
          setHoldDraws: VV => {
            eV.setHoldDraws(VV)
          },
          notify: CY.f,
          onRecorderState: () => {
            var VV;
            null === (VV = (0, oY.f)()) || void 0 === VV || VV.recorderChanged()
          },
          onViewerChange: () => {
            var VV;
            null === (VV = (0, oY.f)()) || void 0 === VV || VV.viewerChanged()
          },
          onReplayOption: eV => {
            ! function(VV, eV) {
              var xV, JV;
              const YV = yJ.Bb[eV.key];
              if (void 0 === YV) return;
              let UV = null !== (xV = eV.value) && void 0 !== xV ? xV : JSON.parse(JSON.stringify(null !== (JV = Tp.c[YV]) && void 0 !== JV ? JV : null));
              if (null !== eV.value && eV.key < yJ.$b.Environment && "string" === typeof UV) try {
                UV = JSON.parse(UV)
              } catch (yV) {
                return void console.warn(`${Ap} a replay's ${YV} isn't JSON`, yV)
              }
              VV.applyNewClientOptions({
                [YV]: UV
              })
            }(VV.options, eV)
          },
          onReplayUiEvent: Mp,
          onReplayOpened: eV => {
            this.entityHooks.opened((0, MV.Pb)(eV)), VV.replayShaderPack(eV)
          },
          meshPending: () => {
            var VV, xV;
            return null !== (VV = null === (xV = eV.lastHeader) || void 0 === xV ? void 0 : xV.renderPending) && void 0 !== VV ? VV : 0
          },
          viewerOpen: aY.e,
          download: VV => {
            (0, DY.g)(VV)
          }
        });
        this.runtime = vV, JV.replay = vV.sink, (0, oY.s)(vV);
        const rV = new UU({
          live: () => {
            var VV;
            return !eV.isStopped && !0 === (null === (VV = vV.currentViewer) || void 0 === VV ? void 0 : VV.inPlayback)
          },
          cmd: yV,
          dragScale: kU
        });
        this.freecam = rV, (0, oY.q)(rV), this.recordedOptions = function(VV, eV) {
          const xV = yJ.Bb,
            JV = xV.map(((xV, JV) => eV.subscribe(xV, (eV => {
              VV.setOption(JV, gp(eV))
            }))));
          return {
            sendAll() {
              xV.forEach(((xV, JV) => {
                VV.setOption(JV, gp(eV.get(xV)))
              }))
            },
            stop() {
              for (const VV of JV) VV()
            }
          }
        }(vV.recorder, VV.options), this.stops = [(0, EJ.l)((VV => {
          rV.flush();
          try {
            this.replay.beforeFrame(VV)
          } catch (eV) {
            this.deps.reportFault("replayFrame", eV)
          }
        })), (0, EJ.w)(((VV, eV) => {
          try {
            this.recorder.afterFrame(), eV && !this.drawn && (this.drawn = !0, this.recorder.viewDrawn())
          } catch (xV) {
            this.deps.reportFault("recorderFrame", xV)
          }
          try {
            vV.afterFrame(VV)
          } catch (xV) {
            this.deps.reportFault("replayRuntime", xV)
          }
        })), Dp(vV), () => {
          this.recordedOptions.stop()
        }, Rp(vV.recorder), (0, JU.e)((VV => {
          let {
            action: eV,
            down: xV
          } = VV;
          var JV;
          xV && (null === (JV = (0, oY.f)()) || void 0 === JV || JV.keyDown(eV))
        }))];
        const kV = () => {
          const VV = vV.currentViewer;
          return !0 === (null === VV || void 0 === VV ? void 0 : VV.isOpen) ? VV : null
        };
        (0, iY.g)({
          open: (VV, eV) => this.open(VV, eV),
          replayKey: () => {
            var VV, eV;
            return null !== (VV = null === (eV = kV()) || void 0 === eV ? void 0 : eV.id) && void 0 !== VV ? VV : null
          },
          saveRefusal: () => {
            var VV, eV;
            return null !== (VV = null === (eV = kV()) || void 0 === eV ? void 0 : eV.saveRefusal) && void 0 !== VV ? VV : null
          },
          encode: () => {
            var VV, eV;
            return null !== (VV = null === (eV = kV()) || void 0 === eV ? void 0 : eV.save()) && void 0 !== VV ? VV : Promise.resolve(null)
          },
          fileHandle: () => {
            var VV, eV;
            return null !== (VV = null === (eV = vV.currentViewer) || void 0 === eV ? void 0 : eV.fileHandle) && void 0 !== VV ? VV : null
          },
          markSaved: (VV, eV) => {
            var xV;
            null === (xV = vV.currentViewer) || void 0 === xV || xV.markSaved(VV, eV)
          }
        })
      }
      netEvent(VV) {
        if ("connection" === VV.type)
          if (VV.phase === vV.H.Activated) {
            this.activeConn = VV.conn;
            const eV = this.deps.sessionInfo(VV.conn);
            null !== eV && (this.runtime.activated({
              lobbyType: (0, zV.r)(eV.lobbyName),
              gameNameWithVariation: eV.gameNameWithVariation,
              lobbyName: eV.lobbyName
            }), this.recordedOptions.sendAll())
          } else VV.phase !== vV.H.Left && VV.phase !== vV.H.Closed || VV.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
      }
      stop() {
        if (!this.stopped) {
          this.stopped = !0;
          for (const VV of this.stops) VV();
          this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, oY.l)() === this.runtime && (0, oY.s)(null), (0, oY.h)() === this.freecam && (0, oY.q)(null), (0, iY.g)(op), null !== this.bench && window.wasmReplayBench === this.bench && (window.wasmReplayBench = void 0)
        }
      }
      async open(VV, eV) {
        const {
          running: xV
        } = this.deps;
        if (xV.isStopped) throw new Error(CY.b.coreStopped.text);
        if (VV.byteLength > 67108864) throw new Error(CY.b.cantOpen.text);
        let JV;
        try {
          JV = await async function(VV) {
            const eV = await VV.loadViewer();
            return eV.inPlayback || (0, EJ.G)().leaveGame(null), eV
          }(this.runtime)
        } catch (YV) {
          throw console.warn(`${zp} the replay viewer didn't load`, YV), new Error(CY.b.viewerLoadFailed.text)
        }
        if (xV.isStopped) throw new Error(CY.b.coreStopped.text);
        await JV.open(VV, eV)
      }
    }
    var Lp = xV(2080);

    function fp(VV, eV) {
      const {
        aux: xV,
        payload: JV
      } = function(VV) {
        return {
          aux: VV.reset ? vV.jc.ResetFirst : 0,
          payload: Kp(VV.changes)
        }
      }(eV);
      VV.queueOptions(xV, JV) && (eV.reset && Lp.c.reset(), Lp.c.apply(eV.changes))
    }
    const mp = new TextEncoder;

    function Kp(VV) {
      const eV = new Hp;
      return Sp(eV, VV), eV.bytes()
    }
    class Hp {
      constructor() {
        this.buf = new Uint8Array(256), this.view = new DataView(this.buf.buffer), this.len = 0
      }
      room(VV) {
        if (this.len + VV <= this.buf.length) return;
        const eV = new Uint8Array(Math.max(2 * this.buf.length, this.len + VV));
        eV.set(this.buf.subarray(0, this.len)), this.buf = eV, this.view = new DataView(eV.buffer)
      }
      u8(VV) {
        this.room(1), this.buf[this.len++] = VV
      }
      tagged(VV, eV, xV) {
        this.room(1 + eV), this.buf[this.len++] = VV, 1 === eV ? this.view.setUint8(this.len, xV) : 2 === eV ? this.view.setUint16(this.len, xV) : this.view.setUint32(this.len, xV), this.len += eV
      }
      signed(VV, eV, xV) {
        this.room(1 + eV), this.buf[this.len++] = VV, 1 === eV ? this.view.setInt8(this.len, xV) : 2 === eV ? this.view.setInt16(this.len, xV) : this.view.setInt32(this.len, xV), this.len += eV
      }
      f64(VV) {
        this.room(9), this.buf[this.len++] = 203, this.view.setFloat64(this.len, VV), this.len += 8
      }
      raw(VV) {
        this.room(VV.length), this.buf.set(VV, this.len), this.len += VV.length
      }
      bytes() {
        return this.buf.slice(0, this.len)
      }
    }

    function sp(VV, eV, xV, JV, YV, UV, yV) {
      eV < JV ? VV.u8(xV | eV) : null !== YV && eV < 256 ? VV.tagged(YV, 1, eV) : eV < 65536 ? VV.tagged(UV, 2, eV) : VV.tagged(yV, 4, eV)
    }

    function Sp(VV, eV) {
      switch (typeof eV) {
        case "undefined":
          return void VV.raw(Ip);
        case "boolean":
          return void VV.u8(eV ? 195 : 194);
        case "number":
          return void
          function(VV, eV) {
            eV >>> 0 === eV ? eV < 128 ? VV.u8(eV) : eV < 256 ? VV.tagged(204, 1, eV) : eV < 65536 ? VV.tagged(205, 2, eV) : VV.tagged(206, 4, eV) : (eV | 0) === eV ? eV >= -32 ? VV.u8(255 & eV) : eV >= -128 ? VV.signed(208, 1, eV) : eV >= -32768 ? VV.signed(209, 2, eV) : VV.signed(210, 4, eV) : VV.f64(eV)
          }(VV, eV);
        case "string": {
          const xV = mp.encode(eV);
          return sp(VV, xV.length, 160, 32, 217, 218, 219), void VV.raw(xV)
        }
        case "object":
          break;
        default:
          return void VV.u8(192)
      }
      if (null === eV) VV.u8(192);
      else if (Array.isArray(eV)) {
        sp(VV, eV.length, 144, 16, null, 220, 221);
        for (const xV of eV) Sp(VV, xV)
      } else if (eV instanceof Uint8Array) sp(VV, eV.length, 0, 0, 196, 197, 198), VV.raw(eV);
      else {
        const xV = Object.keys(eV);
        sp(VV, xV.length, 128, 0, null, 222, 223);
        for (const JV of xV) Sp(VV, JV), Sp(VV, eV[JV])
      }
    }
    const Ip = new Uint8Array([212, 0, 0]);
    var dp = xV(53872),
      Op = xV(53874),
      VQ = xV(42252),
      eQ = xV(42303),
      xQ = xV(3196);
    const JQ = [1e3, 3e3, 9e3];
    class YQ {
      constructor(VV) {
        this.host = VV, this.sets = new Map, this.table = [], this.generation = 0, this.ik = !1
      }
      onEvent(VV) {
        const eV = function(VV) {
          if (VV.byteLength !== vV.wd) return null;
          const eV = new DataView(VV.buffer, VV.byteOffset, VV.byteLength);
          return {
            want: eV.getUint16(0, !0),
            release: eV.getUint16(2, !0)
          }
        }(VV);
        eV && !this.ik && (eV.release !== vV.xd && this.release(eV.release), eV.want !== vV.xd && this.want(eV.want))
      }
      reset(VV) {
        if (!this.ik) {
          for (const [VV, eV] of this.sets) "ready" === eV.state && this.releaseAll(eV.distinct), this.sets.delete(VV);
          this.table = VV, this.generation++
        }
      }
      dispose() {
        if (this.ik) return;
        this.ik = !0, this.generation++, this.table = [];
        const VV = [...this.sets.values()];
        this.sets.clear();
        let eV = null;
        for (const JV of VV)
          for (const VV of "ready" === JV.state ? JV.distinct : []) try {
            this.host.FYV(VV)
          } catch (xV) {
            eV ??= {
              error: xV
            }
          }
        if (eV) throw eV.error
      }
      isReady(VV) {
        var eV;
        return "ready" === (null === (eV = this.sets.get(VV)) || void 0 === eV ? void 0 : eV.state)
      }
      want(VV) {
        const eV = this.sets.get(VV);
        if ("loading" === (null === eV || void 0 === eV ? void 0 : eV.state)) return eV.wanted = !0, void this.capAnswer(VV, eV);
        if ("ready" === (null === eV || void 0 === eV ? void 0 : eV.state)) return void this.host.sendReady(yQ(VV, eV.images, eV.size));
        const xV = this.table[VV];
        if (!xV || 1 !== xV.urls.length && xV.urls.length !== yJ.ic.CubeFaces) return this.host.sendReady(pQ(VV)), void this.host.onLoadFailed(VV, "", new Error(`no image set ${VV}`));
        const JV = {
          state: "loading",
          wanted: !0
        };
        this.sets.set(VV, JV), this.load(VV, xV, JV, this.generation, 0), this.capAnswer(VV, JV)
      }
      capAnswer(VV, eV) {
        this.host.wait(4e3, (() => {
          this.sets.get(VV) === eV && eV.wanted && this.host.sendReady(pQ(VV))
        }))
      }
      load(VV, eV, xV, JV, YV) {
        const UV = [...new Set(eV.urls)];
        Promise.allSettled(UV.map((VV => this.host.loadImage(VV, eV.orientation)))).then((yV => {
          const pV = yV.flatMap((VV => "fulfilled" === VV.status ? [VV.value] : [])),
            QV = JV === this.generation && this.sets.get(VV) === xV,
            nV = yV.findIndex((VV => "rejected" === VV.status));
          if (!QV || !xV.wanted) return this.ik ? void this.releaseAfterDispose(pV.map(UQ)) : (this.releaseAll(pV.map(UQ)), void(QV && this.sets.delete(VV)));
          nV < 0 ? this.loaded(VV, eV, UV, pV) : (this.releaseAll(pV.map(UQ)), this.host.sendReady(pQ(VV)), YV < JQ.length ? this.host.wait(JQ[YV], (() => {
            JV === this.generation && this.sets.get(VV) === xV && (xV.wanted ? this.load(VV, eV, xV, JV, YV + 1) : this.sets.delete(VV))
          })) : (this.sets.delete(VV), this.host.onLoadFailed(VV, UV[nV], yV[nV].reason)))
        }))
      }
      loaded(VV, eV, xV, JV) {
        const [YV] = JV, UV = [YV.width, YV.height], yV = JV.every((VV => VV.width === UV[0] && VV.height === UV[1])), pV = eV.urls.length === yJ.ic.CubeFaces;
        if (!yV || UV[0] <= 0 || UV[1] <= 0 || UV[0] > 65535 || UV[1] > 65535 || pV && UV[0] !== UV[1]) {
          this.releaseAll(JV.map(UQ)), this.sets.delete(VV), this.host.sendReady(pQ(VV));
          const xV = JV.map((VV => `${VV.width}x${VV.height}`));
          return void this.host.onLoadFailed(VV, eV.urls[0], new Error(`set ${VV}'s images can't make its texture: ${xV.join(", ")}`))
        }
        const QV = eV.urls.map((VV => JV[xV.indexOf(VV)].id)),
          nV = JV.map(UQ);
        this.sets.set(VV, {
          state: "ready",
          images: QV,
          distinct: nV,
          size: UV
        }), this.host.sendReady(yQ(VV, QV, UV))
      }
      release(VV) {
        const eV = this.sets.get(VV);
        "loading" === (null === eV || void 0 === eV ? void 0 : eV.state) ? eV.wanted = !1: "ready" === (null === eV || void 0 === eV ? void 0 : eV.state) && (this.releaseAll(eV.distinct), this.sets.delete(VV))
      }
      releaseAll(VV) {
        for (const eV of VV) this.host.FYV(eV)
      }
      releaseAfterDispose(VV) {
        for (const eV of VV) try {
          this.host.FYV(eV)
        } catch {}
      }
    }

    function UQ(VV) {
      return VV.id
    }

    function yQ(VV, eV, xV) {
      const JV = new Uint8Array(yJ.ic.SkyImagesReadyBytes),
        YV = new DataView(JV.buffer);
      return YV.setUint16(0, VV, !0), YV.setUint16(2, eV.length, !0), YV.setUint16(4, xV[0], !0), YV.setUint16(6, xV[1], !0), eV.slice(0, yJ.ic.CubeFaces).forEach(((VV, eV) => {
        YV.setUint32(8 + 4 * eV, VV, !0)
      })), JV
    }

    function pQ(VV) {
      const eV = new Uint8Array(yJ.ic.SkyImagesReadyBytes),
        xV = new DataView(eV.buffer);
      return xV.setUint16(0, VV, !0), xV.setUint16(2, yJ.ic.Failed, !0), eV
    }
    let QQ = Promise.resolve();
    async function nQ(VV, eV) {
      let xV;
      try {
        xV = await (0, xQ.H)(VV)
      } catch (UV) {
        throw new VQ.d("fetch", VV, {
          cause: UV
        })
      }
      const JV = QQ.then((() => async function(VV, eV) {
        const xV = new Blob([VV.slice()]);
        let JV = await createImageBitmap(xV, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: eV
        });
        const YV = 1024 / Math.max(JV.width, JV.height);
        if (YV < 1) {
          const VV = JV;
          try {
            JV = await createImageBitmap(VV, {
              resizeWidth: Math.max(1, Math.round(VV.width * YV)),
              resizeHeight: Math.max(1, Math.round(VV.height * YV)),
              resizeQuality: "high",
              premultiplyAlpha: "none",
              colorSpaceConversion: "none"
            })
          } finally {
            VV.close()
          }
        }
        return JV
      }(xV, eV)));
      let YV;
      QQ = JV.catch((() => {}));
      try {
        YV = await JV
      } catch (UV) {
        throw new VQ.d("decode", VV, {
          cause: UV
        })
      }
      return {
        id: (0, VQ.m)(YV),
        width: YV.width,
        height: YV.height
      }
    }
    var wQ = xV(2277),
      ZQ = xV(34874),
      vQ = xV(40446);
    const rQ = wQ.h.length,
      kQ = new Set([...wQ.h, "earth"]);

    function bQ(VV) {
      const eV = [],
        xV = [],
        JV = (VV, JV) => {
          if ("custom" === JV.type) {
            xV.push({
              id: VV,
              kind: yJ.ic.KindCustom,
              set: eV.length,
              earth: null
            });
            const YV = [JV.px, JV.py, JV.pz, JV.nx, JV.ny, JV.nz];
            eV.push({
              urls: (0, vQ.d)(YV),
              orientation: "none"
            })
          } else xV.push({
            id: VV,
            kind: yJ.ic.KindEarth,
            set: 0,
            earth: JV
          })
        };
      wQ.h.forEach(((eV, xV) => {
        var YV;
        JV(xV, null !== (YV = EQ(VV[eV])) && void 0 !== YV ? YV : ZQ.m[eV])
      }));
      const YV = EQ(VV.earth);
      "earth" === (null === YV || void 0 === YV ? void 0 : YV.type) && JV(rQ, YV);
      const UV = new TextEncoder,
        yV = [],
        pV = [];
      for (const [rV, kV] of Object.entries(VV)) {
        const VV = kQ.has(rV) ? null : EQ(kV);
        if (null === VV) continue;
        const eV = UV.encode(rV);
        eV.length > 255 ? pV.push(`Ignoring texture pack skybox ${rV}, whose name is over 255 bytes`) : yV.length === yJ.ic.MaxAdded ? pV.push(`Ignoring texture pack skybox ${rV}, past the ${yJ.ic.MaxAdded} skies a pack can add`) : (yV.push(eV), JV(yJ.ic.AddedId, VV))
      }
      const QV = eV.length;
      eV.push({
        urls: ZQ.g.map((VV => ZQ.i + VV)),
        orientation: "none"
      }), eV.push({
        urls: [ZQ.k],
        orientation: "flipY"
      }), eV.push({
        urls: [ZQ.d],
        orientation: "flipY"
      });
      const nV = yJ.ic.SkyTableHeaderBytes + xV.length * yJ.ic.SkyTableEntryBytes,
        wV = new Uint8Array(nV + yV.reduce(((VV, eV) => VV + 1 + eV.length), 0)),
        ZV = new DataView(wV.buffer);
      ZV.setUint16(0, QV, !0), ZV.setUint16(2, QV + 1, !0), ZV.setUint16(4, QV + 2, !0), ZV.setUint16(6, xV.length, !0), xV.forEach(((VV, eV) => {
        const xV = yJ.ic.SkyTableHeaderBytes + eV * yJ.ic.SkyTableEntryBytes;
        ZV.setUint16(xV, VV.id, !0), ZV.setUint8(xV + 2, VV.kind);
        const JV = xV + 4;
        VV.earth ? function(VV, eV, xV) {
          const JV = VV;
          let YV = 0,
            UV = 0;
          for (const [yV, pV] of BQ) {
            const VV = JV[yV];
            "number" === typeof VV && Number.isFinite(VV) && (eV.setFloat32(xV + 4 * pV, VV, !0), YV |= 1 << pV)
          }
          for (const [yV, pV, QV] of jQ) {
            const VV = JV[yV];
            Array.isArray(VV) && 3 === VV.length && VV.every((VV => "number" === typeof VV && Number.isFinite(VV))) && (VV.forEach(((VV, JV) => {
              eV.setFloat32(xV + QV + 4 * JV, VV, !0)
            })), YV |= pV)
          }
          qQ.forEach(((VV, UV) => {
            let [yV, pV] = VV;
            const QV = JV[yV];
            "number" === typeof QV && Number.isFinite(QV) && (eV.setFloat32(xV + yJ.B.CameraOffsetAt + 4 * UV, QV, !0), YV |= pV)
          }));
          for (const [yV, pV] of tQ) {
            const VV = JV[yV];
            null !== VV && void 0 !== VV && (YV |= pV, VV && (UV |= pV >>> 14))
          }
          eV.setUint32(xV + yJ.B.PresentAt, YV, !0), eV.setUint8(xV + yJ.B.FlagsAt, UV)
        }(VV.earth, ZV, JV) : ZV.setUint16(JV, VV.set, !0)
      }));
      let vV = nV;
      for (const rV of yV) wV[vV] = rV.length, wV.set(rV, vV + 1), vV += 1 + rV.length;
      return {
        payload: wV,
        sets: eV,
        leftOut: pV
      }
    }

    function EQ(VV) {
      if ("object" !== typeof VV || null === VV) return null;
      const eV = VV;
      if ("earth" === eV.type) return VV;
      return "custom" === eV.type && ["px", "py", "pz", "nx", "ny", "nz"].every((VV => {
        const xV = eV[VV];
        return "string" === typeof xV && xV.length > 0
      })) ? VV : null
    }
    const BQ = [
        ["inclination", yJ.B.Inclination],
        ["turbidity", yJ.B.Turbidity],
        ["luminance", yJ.B.Luminance],
        ["rayleigh", yJ.B.Rayleigh],
        ["mieCoefficient", yJ.B.MieCoefficient],
        ["mieDirectionalG", yJ.B.MieDirectionalG],
        ["distance", yJ.B.Distance],
        ["azimuth", yJ.B.Azimuth]
      ],
      jQ = [
        ["sunPosition", yJ.B.SunPosition, yJ.B.SunPositionAt],
        ["up", yJ.B.Up, yJ.B.UpAt],
        ["vertexTint", yJ.B.VertexTint, yJ.B.VertexTintAt]
      ],
      qQ = [
        ["xCameraOffset", yJ.B.CameraOffsetX],
        ["yCameraOffset", yJ.B.CameraOffsetY],
        ["zCameraOffset", yJ.B.CameraOffsetZ]
      ],
      tQ = [
        ["useSunPosition", yJ.B.UseSunPosition],
        ["dithering", yJ.B.Dithering],
        ["infiniteDistance", yJ.B.InfiniteDistance]
      ];

    function FQ(VV, eV, xV) {
      const JV = new PQ({
        writeCmd: VV,
        warn: eV,
        followPack: TQ(xV, eV)
      });
      return JV.start(), JV
    }

    function TQ(VV, eV) {
      return xV => {
        let JV = () => {};
        const YV = VV((VV => {
          JV(), JV = () => {}, null !== VV ? JV = VV.subscribe((VV => {
            xV(function(VV, eV, xV) {
              if ("object" !== typeof VV || null === VV) return null;
              const JV = VV.skyBoxes;
              if ("object" !== typeof JV || null === JV) return null;
              if ("player" === eV) return JV;
              return Object.fromEntries(Object.entries(JV).filter((VV => {
                let [eV, JV] = VV;
                return !! function(VV) {
                  if ("object" !== typeof VV || null === VV) return !1;
                  return "earth" === VV.type || Object.entries(VV).every((VV => {
                    let [eV, xV] = VV;
                    return "type" === eV || ("" === (JV = xV) || null !== function(VV) {
                      var eV, xV, JV;
                      return "string" !== typeof VV ? null : null !== (eV = null === (xV = AQ.exec(VV)) || void 0 === xV || null === (JV = xV.groups) || void 0 === JV ? void 0 : JV.base64) && void 0 !== eV ? eV : null
                    }(JV));
                    var JV
                  }))
                }(JV) || (xV(`Ignoring texture pack skybox ${eV}, whose faces are not all data URLs`, null), !1)
              })))
            }(VV.pack, null === VV.gameSource ? "player" : "customGame", eV))
          })) : xV(null)
        }));
        return () => {
          YV(), JV()
        }
      }
    }
    class PQ {
      constructor(VV) {
        var eV, xV, JV;
        this.host = VV, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.ik = !1, this.wait = null !== (eV = VV.wait) && void 0 !== eV ? eV : (VV, eV) => {
          setTimeout(eV, VV)
        }, this.loader = new YQ({
          loadImage: null !== (xV = VV.loadImage) && void 0 !== xV ? xV : nQ,
          FYV: null !== (JV = VV.FYV) && void 0 !== JV ? JV : VQ.q,
          sendReady: VV => {
            this.queue.push({
              kind: yJ.ic.SkyImagesReady,
              payload: VV
            })
          },
          onLoadFailed: (eV, xV, JV) => {
            VV.warn(`sky image set ${eV} (${xV}) didn't load: the last sky stays`, JV)
          },
          wait: this.wait
        })
      }
      start() {
        this.wait(eQ.c, (() => {
          null === this.written && this.write({})
        })), this.stopFollowing = this.host.followPack((VV => {
          this.write(null !== VV && void 0 !== VV ? VV : {})
        }))
      }
      onEvent(VV) {
        this.loader.onEvent(VV)
      }
      drain() {
        if (0 === this.queue.length) return;
        let VV = 0;
        for (; VV < this.queue.length && this.host.writeCmd(this.queue[VV].kind, 0, this.queue[VV].payload);) VV++;
        VV > 0 && this.queue.splice(0, VV)
      }
      dispose() {
        this.ik = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
      }
      write(VV) {
        if (this.ik) return;
        const eV = bQ(VV);
        if (!(this.written && (xV = this.written, JV = eV, xV.payload.length === JV.payload.length && xV.payload.every(((VV, eV) => VV === JV.payload[eV])) && xV.sets.length === JV.sets.length && xV.sets.every(((VV, eV) => {
            const xV = JV.sets[eV];
            return VV.orientation === xV.orientation && VV.urls.length === xV.urls.length && VV.urls.every(((VV, eV) => VV === xV.urls[eV]))
          }))))) {
          var xV, JV;
          for (const VV of eV.leftOut) this.host.warn(VV, null);
          this.written = eV, this.loader.reset(eV.sets), this.queue = this.queue.filter((VV => VV.kind !== yJ.ic.SkyImagesReady)), this.queue.push({
            kind: yJ.ic.SkyTable,
            payload: eV.payload
          })
        }
      }
    }
    const AQ = /^data:[\w.+/-]*;base64,(?<base64>[A-Za-z0-9+/]*={0,2})$/;
    var NQ = xV(3119),
      XQ = xV(3348),
      MQ = xV(323),
      zQ = xV(188),
      GQ = xV(3125),
      WQ = xV(3131),
      RQ = xV(291),
      gQ = xV(296),
      DQ = xV(3233),
      iQ = xV(3252),
      CQ = xV(3264),
      aQ = xV(115),
      oQ = xV(3321),
      cQ = xV(2649),
      hQ = xV(348),
      lQ = xV(42125);
    class LQ {
      constructor() {
        this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, xU.l)(RJ.M, (VV => {
          this.onReply((0, eU.i)(RJ.M, VV), performance.now())
        }))
      }
      onFrame(VV, eV) {
        null === this.id ? this.id = VV : VV !== this.id && (this.id = VV, this.sentMs = document.hidden ? null : eV)
      }
      onVisibilityChange() {
        this.sentMs = null
      }
      onReply(VV, eV) {
        VV === this.id && null !== this.sentMs && (this.roundTripMs = Math.round(eV - this.sentMs), this.sentMs = null)
      }
      take() {
        const VV = this.roundTripMs;
        return this.roundTripMs = null, VV
      }
      stop() {
        this.stopReplies()
      }
    }
    class fQ {
      constructor() {
        this.sampled = 0, this.timed = 0, this.frameUs = 0, this.primed = !1, this.windowTimed = 0, this.windowUs = 0
      }
      onFrame(VV, eV, xV, JV) {
        const YV = VV - this.sampled >>> 0,
          UV = eV - this.timed >>> 0,
          yV = xV - this.frameUs >>> 0,
          pV = this.primed;
        return this.sampled = VV, this.timed = eV, this.frameUs = xV, this.primed = !0, !(!pV || YV > 64 || UV > 64) && (JV && yV <= 1e6 * UV && (this.windowTimed += UV, this.windowUs += yV), JV && YV > 0)
      }
      reset() {}
      snapshotAndReset() {
        const VV = this.windowTimed > 0 ? this.windowUs / this.windowTimed / 1e3 : null;
        return this.windowTimed = 0, this.windowUs = 0, {
          passMs: VV,
          submitToDoneMs: null
        }
      }
    }
    const mQ = {
      lagP50Ms: null,
      lagP90Ms: null
    };
    class KQ {
      constructor() {
        this.samples = new Float64Array(4096), this.count = 0
      }
      add(VV, eV) {
        const xV = Math.min(4096, this.count + eV);
        this.samples.fill(VV, this.count, xV), this.count = xV
      }
      clear() {
        this.count = 0
      }
      take() {
        const VV = this.count;
        if (this.count = 0, VV < 30) return mQ;
        const eV = this.samples.subarray(0, VV).sort(),
          xV = xV => eV[Math.min(VV - 1, Math.floor(xV * VV))];
        return {
          lagP50Ms: xV(.5),
          lagP90Ms: xV(.9)
        }
      }
    }
    class HQ {
      constructor() {
        this.word = 0, this.lagUs = 0, this.primed = !1, this.lags = new KQ
      }
      onFrame(VV, eV) {
        const xV = VV.headerWord(yJ.Q.Pacing),
          JV = VV.headerWord(yJ.Q.PacingLagUs),
          YV = (xV >>> yJ.gb.LagsShift) - (this.word >>> yJ.gb.LagsShift) & yJ.gb.CountMask,
          UV = YV > 0 ? (JV - this.lagUs >>> 0) / YV / 1e3 : 0,
          yV = this.primed && YV <= 64 && UV <= 6e4;
        this.word = xV, this.lagUs = JV, this.primed = !0, yV && eV && YV > 0 && 0 !== (xV & yJ.gb.Defaulted) && this.lags.add(UV, YV)
      }
      onJoin() {
        this.lags.clear()
      }
      snapshotAndReset(VV) {
        return VV ? this.lags.take() : (this.lags.clear(), mQ)
      }
    }
    var uQ = xV(3224),
      sQ = xV(35249),
      SQ = xV(3239),
      IQ = xV(42177),
      dQ = xV(35247),
      OQ = xV(3139),
      Vn = xV(3242);
    const en = {
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
      compatibility_held: !0,
      software_adapter: !0,
      adapter_error: !0,
      load_failed: !0,
      start_no_adapter: !0,
      device_failed: !0,
      start_failed: !0,
      _unloaded: null
    };

    function xn(VV) {
      return new Jn(VV)
    }
    class Jn {
      constructor(VV) {
        this.shell = VV, this.tracker = new WQ.e, this.gpu = new fQ, this.pacing = new HQ, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.fpsOverTime = null, this.firstSpanFps = null, this.initialFps = null, this.ping = new LQ, this.pacedCpuMs = 0, this.sendsStartMs = -1, this.sendsEndMs = -1, this.frameDebug = null, this.mainStall = new uQ.e(this.tracker, ((VV, eV, xV, JV) => {
          this.shell.mainStalled(VV, eV, xV, JV)
        })), this.onVisibility = () => {
          this.tracker.onVisibilityChange(), this.ping.onVisibilityChange(), this.mainStall.reset(), !document.hidden && this.fpsSpanStartMs >= 0 && (this.fpsFrames = 0, this.fpsSpanStartMs = performance.now())
        }, this.onBeforeUnload = () => {
          this.mainStall.unloading()
        }, (0, sQ.c)(VV.backend, VV.canvas, VV.adapterVendor), this.tracker.start((() => !VV.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, OQ.b)("wasm", (() => {
          const {
            n: eV,
            sampleCount: xV
          } = (0, IQ.d)();
          return `${VV.backend}, quality steps aim at up to ${Vn.d.target.maxFps} fps, pixel n ${eV}, msaa ${xV}`
        }), (eV => {
          eV.setLoadCounts(VV.readLoadCounts), this.frameDebug = eV
        })), this.timers.push(setInterval((() => {
          this.flush(), this.fpsOverTime = null, this.initialFps = null
        }), 1e4), setInterval((() => {
          this.followGame() && this.shell.canSend() && (this.hasFlushedSinceConnect || (this.flush(), this.hasFlushedSinceConnect = !0))
        }), 250))
      }
      animationFrame(VV) {
        var eV;
        this.mainStall.animationFrame(), this.tracker.onAnimationFrame(VV), null === (eV = this.frameDebug) || void 0 === eV || eV.animationFrame()
      }
      sendsWent(VV, eV, xV) {
        this.ping.onFrame(VV.headerWord(yJ.Q.PingSent), eV), this.sendsStartMs = eV, this.sendsEndMs = xV
      }
      frameRan(VV, eV, xV, JV) {
        var YV;
        this.ping.onFrame(VV.headerWord(yJ.Q.PingSent), xV);
        const UV = this.tracker;
        this.pacing.onFrame(VV, UV.isSampling());
        const yV = VV.headerWord(yJ.Q.TickUs) / 1e3 + (0, EJ.J)();
        var pV;
        (UV.Iq(yV), null === (YV = this.frameDebug) || void 0 === YV || YV.wasmFrame(VV, eV, xV, JV, UV.isSampling(), yV), null !== this.game) && (null === (pV = this.frameDebug) || void 0 === pV || pV.inGame());
        const QV = this.sendsStartMs >= eV ? this.sendsEndMs - this.sendsStartMs : 0,
          nV = Math.max(0, xV - eV - yV - QV);
        if ("drawn" !== JV) return void("paced" === JV ? (this.pacedCpuMs += nV, this.mainStall.paced()) : "skipped" === JV && this.mainStall.reset());
        this.followGame(), this.mainStall.drawn(eV), UV.onFrameStart(eV);
        this.gpu.onFrame(VV.headerWord(yJ.Q.GpuSampled), VV.headerWord(yJ.Q.GpuTimed), VV.headerWord(yJ.Q.GpuFrameUs), UV.isSampling()) && UV.onGpuSampleStarted(), UV.onFrameCpu(nV + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(eV)
      }
      framePaced() {
        var VV;
        this.mainStall.paced(), null === (VV = this.frameDebug) || void 0 === VV || VV.wasmPeekPaced(this.tracker.isSampling())
      }
      stop() {
        for (const VV of this.timers) clearInterval(VV);
        this.timers.length = 0, document.removeEventListener("visibilitychange", this.onVisibility), window.removeEventListener("beforeunload", this.onBeforeUnload), this.mainStall.stop(), this.ping.stop(), this.tracker.limiterTelemetry.stop()
      }
      followGame() {
        const VV = this.shell.joinedGame();
        if (VV !== this.game) {
          var eV;
          if (this.game = VV, null !== VV) null === (eV = this.frameDebug) || void 0 === eV || eV.joined();
          this.tracker.snapshotAndReset(), this.pacing.onJoin(), this.hasFlushedSinceConnect = !1, this.inGameAtLastFlush = !1, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.pacedCpuMs = 0, this.firstSpanFps = null, this.fpsOverTime = null, this.initialFps = null, this.mainStall.reset()
        }
        return null !== VV
      }
      countFpsFrame(VV) {
        if (this.fpsSpanStartMs < 0) {
          if (!this.shell.inGame()) return;
          this.fpsSpanStartMs = VV
        }
        this.fpsFrames++;
        const eV = VV - this.fpsSpanStartMs;
        if (!(eV < CQ.e)) {
          if (!document.hidden) {
            const VV = 1e3 * this.fpsFrames / eV;
            this.firstSpanFps ??= VV, this.initialFps = this.firstSpanFps, this.fpsOverTime = VV
          }
          this.fpsFrames = 0, this.fpsSpanStartMs = VV
        }
      }
      flush() {
        const VV = this.followGame(),
          {
            cpuFrameMs: eV,
            refreshHz: xV,
            cpuBottleneck: YV,
            frameIntervalCv: UV,
            ...yV
          } = this.tracker.snapshotAndReset(),
          pV = this.shell.inGame(),
          QV = pV && this.inGameAtLastFlush,
          nV = QV ? yV : (0, GQ.g)(yV),
          wV = this.pacing.snapshotAndReset(QV);
        if (this.inGameAtLastFlush = pV, this.pendingLightFailures += this.shell.takeFailedMeshJobs(), !VV || !this.shell.canSend()) return;
        const ZV = performance.now(),
          rV = (0, iQ.A)((0, iQ.w)(ZV), this.unsentPage),
          bV = function(VV, eV, xV, YV, UV, yV, pV, QV) {
            var nV, wV, ZV, vV, rV;
            const kV = {},
              {
                canvas: bV
              } = VV,
              EV = (0, DQ.f)({
                refreshHz: eV.refreshHz,
                msaa: VV.msaa(),
                autoMsaaOff: (0, dQ.b)()
              });
            for (const BV of (0, XQ.c)()) {
              const jV = BV.name;
              let qV;
              if ((0, MQ.A)(jV)) qV = (0, iQ.e)(jV);
              else if ((0, iQ.k)(jV)) qV = QV[jV];
              else if ((0, DQ.i)(jV)) qV = EV[jV];
              else switch (jV) {
                case "fps":
                  qV = YV;
                  break;
                case "rp":
                  qV = UV;
                  break;
                case "jp":
                  qV = (0, SQ.B)((0, IQ.d)().n);
                  break;
                case "qp":
                  qV = Math.max(bV.width, bV.height);
                  break;
                case "tp":
                  qV = Math.min(bV.width, bV.height);
                  break;
                case "Fp":
                  qV = navigator.hardwareConcurrency || null;
                  break;
                case "Tp":
                  qV = (0, nU.getWebGpuSupported)();
                  break;
                case "Pp":
                  qV = null === VV.fallbackReason ? null : en[VV.fallbackReason];
                  break;
                case "Ap":
                  qV = eV.cpuFrameMs;
                  break;
                case "Np":
                  qV = eV.refreshHz;
                  break;
                case "Xp":
                  qV = eV.cpuBottleneck;
                  break;
                case "Mp":
                  qV = eV.frameIntervalCv;
                  break;
                case "zp":
                  qV = eV.frameMs;
                  break;
                case "Gp":
                  qV = eV.tickMs;
                  break;
                case "Dp":
                  qV = eV.mainBusyShare;
                  break;
                case "Cp":
                  qV = eV.mainProbeDelayMs;
                  break;
                case "Wp":
                  qV = eV.longAnimationFramesPerMin;
                  break;
                case "Rp":
                  qV = eV.longAnimationFrameTimeShare;
                  break;
                case "gp":
                  qV = eV.longAnimationFrameScriptShare;
                  break;
                case "ap":
                  qV = eV.gpuPassMs;
                  break;
                case "cp":
                  qV = eV.gpuSubmitToDoneMs;
                  break;
                case "hp":
                  qV = xV.lagP50Ms;
                  break;
                case "lp":
                  qV = xV.lagP90Ms;
                  break;
                case "eQ":
                  qV = (0, NQ.h)(yV);
                  break;
                case "Bp":
                  qV = pV;
                  break;
                case "Lp":
                case "fp":
                case "mp":
                case "Kp":
                case "Hp":
                case "sp":
                case "Sp":
                case "Ip":
                case "dp":
                case "Op":
                case "VQ":
                case "xQ":
                case "JQ":
                case "YQ":
                case "UQ":
                  qV = null;
                  break;
                case "qQ":
                  qV = (0, nU.getPlatformType)();
                  break;
                case "tQ":
                  qV = (0, nU.getGpuVendor)();
                  break;
                case "FQ":
                  qV = lQ.b[VV.backend];
                  break;
                case "TQ":
                  qV = (0, aQ.c)();
                  break;
                case "AQ":
                  qV = (0, nU.getOperatingSystem)();
                  break;
                case "NQ":
                  qV = (0, nU.getTrafficSource)();
                  break;
                case "MQ":
                  qV = null !== (nV = JV.b.get("gameEntrySource")) && void 0 !== nV ? nV : zQ.g;
                  break;
                case "zQ":
                  qV = null !== (wV = eV.frameLimiter) && void 0 !== wV ? wV : zQ.g;
                  break;
                case "GQ":
                  qV = (0, RQ.i)();
                  break;
                case "WQ":
                  qV = null !== (ZV = (0, gQ.d)()) && void 0 !== ZV ? ZV : zQ.g;
                  break;
                case "RQ":
                  qV = (0, RQ.d)(bV.width, bV.height);
                  break;
                case "gQ":
                  qV = (0, XQ.d)(-(new Date).getTimezoneOffset());
                  break;
                case "cQ":
                  qV = null !== (vV = VV.fallbackReason) && void 0 !== vV ? vV : zQ.g;
                  break;
                case "LQ":
                  qV = "ready";
                  break;
                case "fQ":
                  qV = (0, nU.getSoftwareRenderer)();
                  break;
                case "iQ":
                  qV = (0, oQ.c)();
                  break;
                case "CQ":
                  qV = (0, cQ.g)().replayState;
                  break;
                case "aQ":
                  qV = (0, cQ.g)().replaySelection;
                  break;
                case "oQ":
                  qV = null !== VV.shaderPackReach() ? "true" : "false";
                  break;
                case "mQ":
                  qV = null !== (rV = VV.shaderPackReach()) && void 0 !== rV && rV.sceneDepth ? "true" : "false";
                  break;
                case "KQ": {
                  const eV = VV.shaderPackReach();
                  qV = null !== eV && void 0 !== eV && eV.sunShadow ? "all" : null !== eV && void 0 !== eV && eV.airShadow ? "air" : "none";
                  break
                }
                case "uQ":
                  qV = hQ.C;
                  break;
                case "xn":
                  qV = (0, iQ.o)();
                  break;
                case "DQ": {
                  const eV = VV.eE();
                  qV = null === eV ? zQ.g : String(eV);
                  break
                }
                case "hQ":
                case "lQ":
                  qV = zQ.g;
                  break;
                default:
                  throw new Error(`Unhandled field name: ${jV}`)
              }
              if (void 0 === qV) throw new Error(`Metric ${jV} has no value`);
              kV[jV] = qV
            }
            return kV
          }(this.shell, {
            cpuFrameMs: eV,
            refreshHz: xV,
            cpuBottleneck: YV,
            frameIntervalCv: UV,
            ...nV
          }, wV, this.fpsOverTime, this.initialFps, this.pendingLightFailures, this.ping.take(), rV);
        if (! function(VV, eV, xV) {
            return (0, Jx.e)(), VV(kV.k.Send, eV, xV)
          }(this.shell.writeCmd, vV.td, function(VV) {
            const eV = (0, oV.g)((0, yx.h)(VV)),
              xV = new Uint8Array(kV.ce.BYTES + eV.length);
            return new DataView(xV.buffer).setUint16(0, yx.d.AnalyticsUpdate, !0), xV.set(eV, kV.ce.BYTES), xV
          }(bV))) return this.unsentPage = rV, void(0 === this.sendsDropped++ && console.warn("[wasm-client] an analytics update found the cmd ring full: dropped"));
        this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, NQ.g), (0, iQ.v)(bV, "wasm", ZV)
      }
    }
    var Yn = xV(40889);

    function Un(VV, eV, xV) {
      const JV = new Map;
      return (0, Yn.c)(((VV, xV, JV) => eV.vp(VV, xV, JV)), ((eV, xV, YV) => {
        const UV = `${eV},${xV},${YV}`;
        return JV.has(UV) || JV.set(UV, (0, He.c)(VV, eV, xV, YV)), JV.get(UV)
      }), xV)
    }
    var yn = xV(40894),
      pn = xV(42171);

    function Qn(VV) {
      const eV = null !== VV && 0 !== (kV.s.playerFlags(VV.api.apiView, 0) & kV.Ld.CursorAim);
      eV !== (0, pn.l)() && (0, pn.D)(eV, null !== VV)
    }

    function nn(VV) {
      return (0, WJ.b)(RJ.F, VV)
    }
    var wn = xV(42341);
    const Zn = new UV.h((VV => xV(53877)(`./${VV}/${VV}Client`)));
    let vn = null,
      rn = null;
    async function kn(VV) {
      vn ??= xV.e(32).then((() => xV(40367))).then((VV => {
        rn = VV.createDefaultClientPlugins
      }), (VV => {
        throw vn = null, VV
      })), await Promise.all([Zn.load(VV), vn])
    }

    function bn(VV) {
      VV.load(new fe(yY, new nY))
    }
    let En = !1;
    const Bn = new WeakMap;

    function jn(VV) {
      try {
        VV()
      } catch (eV) {
        console.error("[bloxd-wasm-client] a session-end step failed", eV)
      }
    }

    function qn(VV, eV) {
      ! function() {
        var VV, eV;
        JY.Howler.volume();
        const xV = JY.Howler;
        null === (VV = xV._autoResume) || void 0 === VV || VV.call(xV), null === (eV = xV._autoSuspend) || void 0 === eV || eV.call(xV)
      }();
      const xV = new tV(eV.core, eV.memory, eV.audio);
      let UV;
      try {
        UV = new WY(xV, eV.options)
      } catch (vV) {
        return VV.crash(gY.A, vV), null
      }(0, QV.g)(RY(xV, UV));
      const wV = new lp({
        running: VV,
        api: xV,
        core: eV.core,
        memory: eV.memory,
        staleOr: eV.staleOr,
        reportFault: eV.reportReplayFault,
        options: eV.options,
        sessionInfo: eV.sessionInfo,
        replayShaderPack: eV.replayShaderPack
      });
      (0, EJ.A)();
      const ZV = new IJ({
        api: xV,
        tables: UV,
        sessionInfo: eV.sessionInfo,
        gameFactory: VV => Zn.loadedFactory(VV),
        defaultPlugins: (VV, eV, xV, JV) => {
          if (null === rn) throw new Error("The default plugins started before they loaded");
          return rn(VV, eV, xV, JV)
        },
        serverOptions: eV.options,
        onNetEvent: VV => {
          wV.netEvent(VV), eV.onNetEvent(VV)
        },
        setLocalOptions: eV => {
          fp(VV, {
            changes: eV,
            reset: !1
          })
        },
        playSound: (VV, xV, JV, YV, UV, yV, pV) => eV.audio.playGame(VV, xV, JV, YV, UV, yV, pV),
        preloadSounds: VV => {
          eV.audio.preload(function(VV) {
            const eV = [];
            for (const xV of VV) {
              const VV = ge(xV);
              if (null !== VV)
                for (let xV = VV[0]; xV < VV[0] + VV[1]; xV++) eV.push(xV)
            }
            return eV
          }(VV))
        },
        onSessionEnd: () => {
          jn(YV.l), jn(EY), jn((() => {
            JV.b.set({
              openInGameMenuName: null
            })
          })), jn((() => {
            eV.audio.endSession()
          }))
        },
        beforeWrite: eV.beforeWrite,
        beforeOp: eV.beforeOp,
        cameraScreen: bY,
        showCameraFacing: BY,
        onEventOverflow: eV.onEventOverflow,
        screenBandY: pV.m,
        replayEntities: wV.entityHooks,
        hasPackModel: eV.hasPackModel
      });
      return ZV.attach(VV), Bn.set(ZV, wV), eY(ZV.items, eV.audio),
        function(VV) {
          VV.setClientFreeCameraGrant("isDev", !1);
          const eV = eV => {
            VV.setClientFreeCameraGrant("hasDeveloperRank", eV.playerHasRank("developer"))
          };
          (0, yV.i)("userContextUpdated", eV)
        }(ZV), En || (En = !0, (0, yV.i)("appManagerUpdated|openInGameMenuName", (VV => {
          !VV && (0, nV.k)().includes(nV.d) && (0, nV.m)(nV.d)
        }))), ZV
    }

    function tn(VV) {
      try {
        VV.closeGame()
      } finally {
        var eV;
        null === (eV = Bn.get(VV)) || void 0 === eV || eV.stop(), Bn.delete(VV)
      }
    }
  },
  53877: (VV, eV, xV) => {
    var JV = {
      "./bedwars/bedwarsClient": [40498, 9],
      "./bridgeBattle/bridgeBattleClient": [40500, 10],
      "./buildAFactory2/buildAFactory2Client": [39642, 87, 85, 248, 267, 11],
      "./classic/classicClient": [40503, 12],
      "./classic/smp2Client": [40509, 13],
      "./clutch/clutchClient": [40511, 14],
      "./containmentBreach/containmentBreachClient": [40517, 243, 15],
      "./cooking/cookingClient": [40640, 16],
      "./defusal/defusalClient": [40649, 17],
      "./frontline/frontlineClient": [40652, 87, 85, 18],
      "./goalRush/goalRushClient": [40667, 19],
      "./greenville/greenvilleClient": [40673, 172, 273, 20],
      "./hideseek/hideseekClient": [40699, 21],
      "./luckyBedwars/luckyBedwarsClient": [40706, 22],
      "./murderMystery/murderMysteryClient": [40709, 23],
      "./ninetyNineNights/ninetyNineNightsClient": [40718, 24],
      "./oneBlock/oneBlockClient": [40723, 25],
      "./plots/plotsClient": [40729, 265, 243, 26],
      "./pvpCiv/pvpCivClient": [40816, 27],
      "./secretSanta/secretSantaClient": [40824, 28],
      "./skyIslands/skyIslandsClient": [40833, 29],
      "./skyblock/skyblockClient": [39671, 87, 257, 248, 172, 237, 30],
      "./tsunami/tsunamiClient": [40837, 31]
    };

    function YV(VV) {
      if (!xV.o(JV, VV)) return Promise.resolve().then((() => {
        var eV = new Error("Cannot find module '" + VV + "'");
        throw eV.code = "MODULE_NOT_FOUND", eV
      }));
      var eV = JV[VV],
        YV = eV[0];
      return Promise.all(eV.slice(1).map(xV.e)).then((() => xV(YV)))
    }
    YV.keys = () => Object.keys(JV), YV.id = 53877, VV.exports = YV
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);