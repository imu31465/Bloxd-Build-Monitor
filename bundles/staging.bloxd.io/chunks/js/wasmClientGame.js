export const id = 53;
export const ids = [53];
export const modules = {
  38546: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => EU,
      f: () => pU
    });
    var tU = gU(24);

    function pU(UU) {
      return "refetchCode" === UU || "devDownloadJson" === UU || UU.startsWith("Plugin")
    }

    function EU(UU, RU) {
      "refetchCode" !== UU ? "Plugin|MobAiPlugin|ShowPetUi" !== UU ? Promise.all([gU.e(105), gU.e(106), gU.e(101), gU.e(103), gU.e(210)]).then((() => gU(41095))).then((gU => {
        let {
          runClientGameMessage: tU
        } = gU;
        tU(UU, RU)
      })).catch((RU => {
        console.error(`Game message ${UU} failed`, RU)
      })) : tU.p.yh("showPetUi", RU) : tU.p.yh("refetchCode")
    }
  },
  41923: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => tU,
      f: () => pU
    });
    const tU = ["recording", "freecam", "keyframe"];

    function pU() {
      const UU = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(UU[1]) << 32n | BigInt(UU[0])
    }
  },
  40190: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => TU
    });
    const tU = 1 << 20,
      pU = 1 << 21,
      EU = 1024,
      PU = 2048;

    function TU(UU, RU, gU) {
      const TU = UU + tU,
        qU = RU + EU,
        KU = gU + tU;
      return TU < 0 || TU >= pU || KU < 0 || KU >= pU || qU < 0 || qU >= PU ? -1 : (TU * pU + KU) * PU + qU
    }
  },
  40186: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => tU,
      d: () => PU,
      e: () => pU,
      g: () => EU,
      j: () => cU,
      m: () => KU,
      p: () => qU,
      s: () => TU
    });
    gU(3153);
    gU(40190);

    function tU(UU) {}

    function pU(UU) {}

    function EU(UU) {}

    function PU(UU) {}

    function TU(UU) {}

    function qU(UU, RU, gU) {}

    function KU(UU) {}

    function cU(UU) {}
  },
  8908: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => TU,
      f: () => qU
    });
    var tU = gU(21);
    const pU = 24,
      EU = "farNametags",
      PU = 1e5;

    function TU() {
      var UU;
      return null === (UU = tU.b.get("showDistantNametags")) || void 0 === UU || UU
    }

    function qU() {
      var UU;
      return null !== (UU = function() {
        const UU = new URLSearchParams(window.location.search).get(EU),
          RU = null === UU || "" === UU ? NaN : Number(UU);
        return Number.isFinite(RU) && RU >= 0 ? Math.min(RU, PU) : null
      }()) && void 0 !== UU ? UU : TU() ? 0 : pU
    }
  },
  41917: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      blockIdOf: () => Vq.e,
      clearWasmCameraScreen: () => lt,
      creativeItemIds: () => Ut.creativeItemIds,
      decodeMapSettings: () => vq,
      drainTextRerasters: () => YT.b,
      enchantmentPerksOf: () => Ut.enchantmentPerksOf,
      endGameHost: () => zq,
      followCursorAim: () => Xq,
      followMenuPrefs: () => Dp,
      loadAudio: () => yq,
      loadClientGame: () => sq,
      loadTextIcons: () => YT.f,
      rasterText: () => aT.e,
      readBoardToEdit: () => Bq,
      setTextHost: () => YT.k,
      setTextLocalPlayer: () => YT.l,
      showInCreativeInvenOf: () => Ut.showInCreativeInvenOf,
      startGameHost: () => Aq,
      startShellAnalytics: () => Zq,
      startSkyFeed: () => lT,
      textChanged: () => YT.p,
      warmText: () => aT.h,
      wasmCameraScreen: () => Nt
    });
    gU(36089);
    var tU = gU(21),
      pU = gU(36354),
      EU = gU(38700),
      PU = gU(24),
      TU = gU(3099),
      qU = gU(36345),
      KU = gU(1287),
      cU = gU(567),
      GU = gU(37789),
      jU = gU(4449),
      uU = gU(40022),
      CU = gU(39955);
    const hU = CU.Gb / 4,
      QU = CU.r.PlaySound,
      eU = CU.r.SoundReset,
      WU = jU.Z.ReplayFailed,
      fU = jU.Z.RecorderEvent;
    class xU {
      constructor(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.core = UU, this.memory = RU, this.audio = gU, this.serverIds = new Int32Array(256).fill(CU.dd), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.view = new DataView(new ArrayBuffer(CU.w.BYTES)), this.renderPtr = 0, this.hG = 0, this.renderCapacity = 0, this.render = new Float32Array(0), this.visPtr = 0, this.vis = new Uint8Array(0), this.renderBuffer = null, this.eventsBuffer = null, this.eventsPtr = 0, this.eventsLen = 0, this.events = new DataView(new ArrayBuffer(0)), this.audioView = null, this.scratchPtr = -1, this.corruption = null, this.replay = null, this.queries = new CU._(UU, (() => {
          this.scratchPtr = -1, this.ensureViews()
        }))
      }
      scratch() {
        return this.scratchPtr < 0 && (this.scratchPtr = this.core.AtU(), this.ensureViews()), this.scratchPtr
      }
      eventBytes(UU, RU) {
        const gU = this.eventView();
        return new Uint8Array(gU.buffer, gU.byteOffset + UU, RU)
      }
      get apiView() {
        return this.ensureViews(), this.view
      }
      ensureViews() {
        this.memory().buffer !== this.buffer && this.reView()
      }
      get localId() {
        return CU.w.localId(this.apiView, 0)
      }
      localDeaths() {
        return CU.w.localDeaths(this.apiView, 0)
      }
      rereadDirectory() {
        const UU = this.apiView,
          RU = CU.w.entRenderPtr(UU, 0),
          gU = CU.w.entVisPtr(UU, 0),
          tU = CU.w.entCapacity(UU, 0);
        if (RU !== this.renderPtr || gU !== this.visPtr || tU !== this.hG || this.renderBuffer !== this.buffer) {
          this.renderPtr = RU, this.visPtr = gU, this.hG = tU, this.renderBuffer = this.buffer;
          const UU = this.memoryView(Float32Array, RU, tU * hU, "the render array"),
            pU = this.memoryView(Uint8Array, gU, tU, "the visibility array");
          this.renderCapacity = UU && pU ? tU : 0, this.render = UU && pU ? UU : new Float32Array(0), this.vis = UU && pU ? pU : new Uint8Array(0)
        }
      }
      memoryView(UU, RU, gU, tU) {
        try {
          return (0, uU.r)(UU, this.memory().buffer, RU, gU, tU)
        } catch (pU) {
          return this.keepCorruption(pU), null
        }
      }
      memoryData(UU, RU, gU, tU) {
        try {
          return (0, uU.f)(this.memory().buffer, UU, RU, gU, tU)
        } catch (pU) {
          return this.keepCorruption(pU), null
        }
      }
      reportCorruption(UU) {
        this.keepCorruption(new uU.d(UU))
      }
      keepCorruption(UU) {
        if (!(UU instanceof uU.d)) throw UU;
        this.corruption ??= UU
      }
      throwCorruption() {
        if (this.corruption) throw this.corruption
      }
      walk(UU, RU, gU) {
        this.rereadDirectory(), this.throwCorruption();
        const {
          ptr: tU,
          len: pU
        } = UU;
        this.eventsPtr = tU, this.eventsLen = pU, this.eventsBuffer = null;
        const EU = this.eventView();
        for (let KU = 0; KU < pU;) {
          const UU = EU.getUint32(KU, !0),
            gU = 65535 & UU,
            tU = UU >>> 16,
            pU = KU + jU.V;
          if (gU === CU.r.EntitySpawned) {
            var PU;
            if (tU !== CU.Kb.BYTES) throw nU(gU, KU, tU);
            const UU = CU.Kb.serverId(EU, pU);
            this.spawned(UU, CU.Kb.index(EU, pU), CU.Kb.kind(EU, pU)), null === (PU = RU.entityAdded) || void 0 === PU || PU.call(RU, UU)
          } else if ((gU === CU.r.ChunkSlot || gU === CU.r.EntityInfoChanged) && !(0, CU.ue)(gU, EU, pU, tU, RU)) throw nU(gU, KU, tU);
          KU = pU + (0, jU.te)(tU)
        }
        try {
          var TU;
          null === (TU = RU.afterPrescan) || void 0 === TU || TU.call(RU), this.throwCorruption(), !gU() && this.dispatch(UU, RU, gU) && (this.throwCorruption(), this.applyListener(), RU.afterWalk(UU.kind)), this.throwCorruption()
        } catch (qU) {
          throw qU instanceof uU.d && (this.corruption ??= qU), qU
        } finally {
          gU() || null !== this.corruption || this.applyDespawns(pU, RU)
        }
      }
      applyDespawns(UU, RU) {
        const gU = this.eventView();
        for (let pU = 0; pU < UU;) {
          const UU = gU.getUint32(pU, !0),
            EU = pU + jU.V;
          if ((65535 & UU) === CU.r.EntityDespawned && UU >>> 16 === CU.Kb.BYTES) {
            const UU = CU.Kb.serverId(gU, EU);
            var tU;
            if (this.despawned(UU, CU.Kb.index(gU, EU))) null === (tU = RU.entityRemoved) || void 0 === tU || tU.call(RU, UU)
          }
          pU = EU + (0, jU.te)(UU >>> 16)
        }
        this.rereadDirectory()
      }
      dispatch(UU, RU, gU) {
        const {
          len: tU,
          net: pU,
          netOffsets: EU
        } = UU;
        let PU = this.eventView(),
          TU = 0;
        for (let IU = 0; IU < tU;) {
          const UU = PU.getUint32(IU, !0),
            tU = 65535 & UU,
            JU = UU >>> 16,
            bU = IU + jU.V;
          let oU = !1;
          if (TU < pU.length && EU[TU] === IU) RU.netEvent(pU[TU]), TU++, oU = !0;
          else if (tU === jU.Z.LocalPlayerBound) {
            var qU;
            if (JU !== jU.Kb) throw nU(tU, IU, JU);
            null === (qU = RU.localPlayerBound) || void 0 === qU || qU.call(RU, PU.getInt32(bU, !0)), oU = !0
          } else if (tU === jU.Z.LocalHurt) {
            var KU;
            if (JU !== jU.Gb) throw nU(tU, IU, JU);
            null === (KU = RU.localHurt) || void 0 === KU || KU.call(RU, PU.getInt32(bU, !0), PU.getFloat32(bU + 4, !0), PU.getUint32(bU + 8, !0)), oU = !0
          } else if (tU === jU.Z.AttackHit) {
            var cU;
            if (JU !== jU.b) throw nU(tU, IU, JU);
            const UU = PU.getFloat32(bU, !0),
              gU = PU.getFloat32(bU + 4, !0),
              pU = PU.getFloat32(bU + 8, !0),
              EU = PU.getUint32(bU + 12, !0);
            null === (cU = RU.attackHit) || void 0 === cU || cU.call(RU, UU, gU, pU, 0 !== (EU & jU.g.Crit), 0 !== (EU & jU.g.HitSelf))
          } else if (tU === jU.Z.PhysicsType) {
            var GU;
            if (JU !== jU.ec) throw nU(tU, IU, JU);
            null === (GU = RU.physicsType) || void 0 === GU || GU.call(RU, PU.getUint32(bU, !0), PU.getInt32(bU + 4, !0)), oU = !0
          } else if (tU === jU.Z.VehicleEffect) {
            var uU;
            const UU = wU(PU, bU, JU);
            if (null === UU) throw nU(tU, IU, JU);
            null === (uU = RU.vehicleEffect) || void 0 === uU || uU.call(RU, UU.op, UU.name, UU.icon, UU.level, UU.durationMs), oU = !0
          } else if (tU === jU.Z.ZoomChanged) {
            var hU;
            if (JU !== jU.ae) throw nU(tU, IU, JU);
            null === (hU = RU.zoomChanged) || void 0 === hU || hU.call(RU, PU.getFloat32(bU, !0), PU.getUint8(bU + 4)), oU = !0
          } else if (tU === jU.Z.ZoomDisabled) {
            var xU;
            if (0 !== JU) throw nU(tU, IU, JU);
            null === (xU = RU.zoomDisabled) || void 0 === xU || xU.call(RU), oU = !0
          } else if (tU === jU.Z.GameCamera) {
            var mU;
            null === (mU = RU.gameCamera) || void 0 === mU || mU.call(RU, new Uint8Array(PU.buffer, PU.byteOffset + bU, JU).slice()), oU = !0
          } else if (tU === CU.r.ChunkSlot || tU === CU.r.EntityInfoChanged);
          else if (tU >= QU && tU <= eU) {
            if (this.audio && !this.audio.onAudioEvent(tU, PU, bU, JU)) throw nU(tU, IU, JU)
          } else if (tU >= WU && tU <= fU) {
            if (this.replay) {
              if (!this.replay.onReplayEvent(tU, PU, bU, JU)) throw nU(tU, IU, JU);
              oU = !0
            }
          } else if (tU >= CU.wd && tU <= CU.xd && tU !== jU.Z.EnvLighting) {
            if (!(0, CU.ue)(tU, PU, bU, JU, RU)) throw nU(tU, IU, JU);
            oU = !0
          }
          if (oU) {
            if (gU()) return !1;
            PU = this.eventView()
          }
          IU = bU + (0, jU.te)(JU)
        }
        return !gU()
      }
      applyListener() {
        var UU;
        if (!this.audio) return;
        const RU = CU.w.audioViewPtr(this.apiView, 0),
          gU = this.memory().buffer;
        let tU = this.audioView;
        (null === (UU = tU) || void 0 === UU ? void 0 : UU.buffer) === gU && tU.byteOffset === RU || (tU = (0, uU.f)(gU, RU, CU.A.BYTES, 8, "the audio view"), this.audioView = tU), tU && this.audio.applyListener(tU)
      }
      indexOf(UU) {
        return this.indexById.get("number" === typeof UU ? UU : +UU)
      }
      isLocal(UU) {
        return UU !== CU.dd && UU === CU.w.localId(this.apiView, 0)
      }
      Hx(UU) {
        const RU = [0, 0, 0];
        return this.readPosition("number" === typeof UU ? UU : +UU, RU) ? RU : null
      }
      readPosition(UU, RU) {
        const gU = this.apiView;
        if (void 0 !== this.indexById.get(UU) && this.isLocal(UU)) {
          for (let UU = 0; UU < 3; UU++) RU[UU] = CU.w.localPos(gU, 0, UU);
          return !0
        }
        return this.readDrawnPosition(UU, RU)
      }
      readDrawnPosition(UU, RU) {
        const gU = this.apiView,
          tU = this.indexById.get(UU);
        if (void 0 === tU || tU >= this.renderCapacity) return RU[0] = RU[1] = RU[2] = NaN, !1;
        const pU = tU * hU;
        for (let EU = 0; EU < 3; EU++) RU[EU] = this.render[pU + EU] + CU.w.origin(gU, 0, EU);
        return !0
      }
      checkValid(UU) {
        return void 0 !== this.indexOf(UU)
      }
      isAlive(UU) {
        const RU = this.indexOf(UU);
        if (void 0 === RU) return null;
        if (this.ensureViews(), RU >= this.renderCapacity) return null;
        const gU = this.vis[RU];
        return 0 === gU ? null : 0 !== (gU & CU.qe.Alive)
      }
      getEntityType(UU) {
        const RU = this.indexOf(UU);
        return void 0 === RU ? this.isLocal("number" === typeof UU ? UU : +UU) ? "Player" : null : IU(this.kinds[RU])
      }
      spawned(UU, RU, gU) {
        if (RU >= 1048576) throw new uU.d(`entity ${UU} spawned at index ${RU}`);
        this.ensureIndex(RU), this.serverIds[RU] === UU && null !== this.idStr[RU] || (this.idStr[RU] = String(UU)), this.serverIds[RU] = UU, this.kinds[RU] = gU, this.indexById.set(UU, RU)
      }
      despawned(UU, RU) {
        let gU = !1;
        return this.indexById.get(UU) === RU && (this.indexById.delete(UU), gU = !0), RU < this.serverIds.length && this.serverIds[RU] === UU && (this.serverIds[RU] = CU.dd, this.kinds[RU] = 0, this.idStr[RU] = null), gU
      }
      ensureIndex(UU) {
        const RU = this.serverIds.length;
        if (UU < RU) return;
        let gU = 2 * RU;
        for (; gU <= UU;) gU *= 2;
        const tU = new Int32Array(gU).fill(CU.dd);
        tU.set(this.serverIds), this.serverIds = tU;
        const pU = new Uint16Array(gU);
        pU.set(this.kinds), this.kinds = pU;
        for (let EU = RU; EU < gU; EU++) this.idStr.push(null)
      }
      eventView() {
        const UU = this.memory().buffer;
        return UU !== this.eventsBuffer && (this.eventsBuffer = UU, this.events = new DataView(UU, this.eventsPtr, this.eventsLen)), this.events
      }
      reView() {
        const UU = this.memory().buffer;
        this.buffer = UU, this.viewPtr < 0 && (this.viewPtr = this.core.ztU()), this.view = new DataView(UU, this.viewPtr, CU.w.BYTES), this.rereadDirectory()
      }
    }

    function mU(UU) {
      return UU >>> CU.c === CU.s.Item
    }

    function IU(UU) {
      var RU, gU;
      const tU = UU & CU.g;
      switch (UU >>> CU.c) {
        case CU.s.Lifeform:
          return null !== (RU = cU.m[tU]) && void 0 !== RU ? RU : null;
        case CU.s.Throwable:
          return null !== (gU = GU.m[tU]) && void 0 !== gU ? gU : null;
        case CU.s.Mesh:
          return "Mesh";
        case CU.s.Audio:
          return "AudioEntity";
        case CU.s.Item:
          return "Item";
        default:
          return null
      }
    }
    const JU = new TextDecoder;

    function wU(UU, RU, gU) {
      if (gU < jU.Fd.HEAD_BYTES) return null;
      const tU = UU.getUint32(RU, !0),
        pU = UU.getUint32(RU + 20, !0),
        EU = UU.getUint32(RU + 24, !0),
        PU = jU.Fd.HEAD_BYTES + (0, jU.te)(pU);
      if (tU !== jU.Fd.UPDATE && tU !== jU.Fd.REMOVE || pU > gU || PU + EU > gU) return null;
      const TU = (gU, tU) => JU.decode(new Uint8Array(UU.buffer, UU.byteOffset + RU + gU, tU)),
        qU = UU.getFloat64(RU + 12, !0);
      return {
        op: tU,
        level: UU.getFloat64(RU + 4, !0),
        durationMs: Number.isNaN(qU) ? null : qU,
        name: TU(jU.Fd.HEAD_BYTES, pU),
        icon: TU(PU, EU)
      }
    }

    function nU(UU, RU, gU) {
      return new uU.d(`event ${UU} at ${RU} of ${gU} bytes`)
    }
    var bU = gU(311),
      oU = gU(1217),
      ZU = gU(38546),
      aU = gU(1813),
      YU = gU(40081),
      BU = gU(1771),
      VU = gU(38708),
      rU = gU(38730),
      XU = gU(38719),
      vU = gU(40003),
      dU = gU(2241),
      HU = gU(38705),
      SU = gU(38727);
    const sU = Math.max(CU.xb.BYTES, CU.tb.BYTES, CU.vb.BYTES);

    function yU(UU) {
      if (!(0, SU.f)(UU)) return null;
      const RU = Number(UU);
      return (0 | RU) === RU ? RU : null
    }
    class kU {
      constructor(UU) {
        this.api = UU, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, HU.h)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.uE = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], this.entityHeading = 0, this.localId = CU.dd, this.localName = String(CU.dd), this.scratch = null
      }
      readView() {
        this.defaultPoseRead = !1, this.uE = null;
        const UU = this.api.queries.directorView() >= CU.xb.BYTES ? this.scratchView() : null;
        null !== UU && (this.defaultFov = (0, BU.F)(CU.xb.fov(UU, 0)), this.baseFov = (0, BU.F)(CU.xb.baseFov(UU, 0)), this.aspect = CU.xb.aspect(UU, 0), this.bodyHeading = CU.xb.bodyHeading(UU, 0))
      }
      getViewHeading() {
        return this.viewHeading
      }
      setViewHeading(UU) {
        this.viewHeading = UU
      }
      get localPlayerId() {
        const UU = CU.w.localId(this.api.apiView, 0);
        return UU !== this.localId && (this.localId = UU, this.localName = String(UU)), this.localName
      }
      getEntityPosition(UU) {
        return this.readEntity(UU) ? this.entityFeet : null
      }
      getEntityAimPoint(UU) {
        return this.readEntity(UU) ? this.entityAim : null
      }
      getEntityHeading(UU) {
        const RU = yU(UU);
        if (null === RU) return null;
        const gU = CU.w.localId(this.api.apiView, 0);
        return RU === gU && gU !== CU.dd ? this.viewHeading : this.readEntity(UU) ? this.entityHeading : null
      }
      raycastTerrain(UU, RU, gU) {
        const tU = this.api.queries.cameraSweep(UU[0], UU[1], UU[2], RU[0], RU[1], RU[2], gU);
        return tU < gU - 1e-6 ? tU : null
      }
      getDefaultPose() {
        if (this.defaultPoseRead) return this.defaultPose;
        this.defaultPoseRead = !0;
        const UU = this.defaultPose;
        UU.fov = this.defaultFov;
        const RU = this.api.queries.directorDefaultPose() >= CU.tb.BYTES ? this.scratchView() : null;
        if (null === RU) return UU;
        for (let gU = 0; gU < 3; gU++) UU.position[gU] = CU.tb.eye(RU, 0, gU);
        return UU.heading = CU.tb.heading(RU, 0), UU.pitch = CU.tb.pitch(RU, 0), UU
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
      readEntity(UU) {
        const RU = yU(UU);
        if (null === RU) return !1;
        if (RU === this.uE) return this.entityLive;
        this.uE = RU;
        const gU = this.api.queries.directorEntity(RU) >= CU.vb.BYTES ? this.scratchView() : null;
        if (this.entityLive = null !== gU, null === gU) return !1;
        for (let tU = 0; tU < 3; tU++) this.entityFeet[tU] = CU.vb.feet(gU, 0, tU), this.entityAim[tU] = this.entityFeet[tU];
        return this.entityAim[1] += CU.vb.eyeHeight(gU, 0), this.entityHeading = CU.vb.heading(gU, 0), !0
      }
      scratchView() {
        const UU = this.api.scratch(),
          RU = this.api.memory().buffer,
          gU = this.scratch;
        return null !== gU && gU.buffer === RU && gU.byteOffset === UU ? gU : (this.scratch = this.api.memoryData(UU, sU, 8, "the director's record"), this.scratch)
      }
    }
    const FU = {
        mode: "default"
      },
      iU = {
        show: () => {},
        clear: () => {}
      };

    function AU() {
      return "undefined" !== typeof document && "hidden" === document.visibilityState
    }
    class zU {
      constructor(UU) {
        this.options = UU, this.FG = void 0, this.director = void 0, this.latest = FU, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
          Xw: 0,
          Ow: 0
        }, this.pointedAt = {
          heading: 0,
          pitch: 0
        }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastCallMs = 0, this.answeredPose = !1, this.gq = new Int32Array(3 * CU._d), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * CU._d), this.FG = new kU(UU.api), this.director = new XU.e(this.FG)
      }
      settingsChanged(UU) {
        let RU = FU;
        if (UU.length > 0) try {
          RU = (0, vU.b)(UU)
        } catch {}
        this.latest = RU, this.pending = RU
      }
      call(UU, RU, gU, tU, pU, EU) {
        var PU, TU;
        let qU;
        this.holding = !1;
        try {
          qU = this.answer(UU, RU, gU, tU, pU, EU)
        } catch (jU) {
          var KU, cU;
          throw this.answeredPose = !1, null === (KU = (cU = this.options).showFacing) || void 0 === KU || KU.call(cU, null), jU
        }
        const GU = this.answeredPose && 0 === (tU & CU.wb.Held);
        return this.answeredPose = qU !== CU.qb.None, this.holding = this.answeredPose && !GU, null === (PU = (TU = this.options).showFacing) || void 0 === PU || PU.call(TU, this.holding ? this.facing : null), qU
      }
      holdsView() {
        return this.holding
      }
      answer(UU, RU, gU, tU, pU, EU) {
        this.calledThisFrame = !0, this.engaged = !0, this.lastCallMs = this.now();
        const {
          FG: PU
        } = this;
        PU.readView();
        if (0 !== (tU & CU.wb.Held) || PU.setViewHeading((0, VU.w)(PU.bodyHeading)), void 0 !== this.pending) {
          const UU = this.pending;
          this.pending = void 0, this.director.setSettings(UU), this.syncShownSettings()
        }
        this.readLook((0, dU.h)(RU), (0, dU.h)(gU), tU, (0, dU.h)(pU), (0, dU.h)(EU));
        const TU = this.director.update(UU / 1e3, this.look);
        if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !TU) return CU.qb.None;
        const [qU, KU, cU] = TU.position;
        if (0 === this.options.api.queries.directorPose(qU, KU, cU, (0, VU.w)(TU.heading), (0, VU.i)(TU.pitch), (0, BU.j)(TU.fov))) return CU.qb.None;
        if ("default" === this.director.getSettings().mode) return CU.qb.Pose;
        switch (this.facing) {
          case "camera":
            return CU.qb.FaceCamera;
          case "cursor":
            return CU.qb.FaceCursor;
          default:
            return CU.qb.FaceMovement
        }
      }
      afterFrame(UU) {
        UU ? (this.calledThisFrame || (this.holding = !1, this.engaged && this.idle()), this.calledThisFrame = !1) : this.centresLen > 0 && this.hidden() && this.now() - this.lastCallMs > 1e3 && this.setCentres(0), this.centresUnsent && this.sendCentres()
      }
      reset() {
        this.latest = FU, this.idle()
      }
      restart() {
        const UU = this.holding;
        this.idle(), this.holding = UU
      }
      idle() {
        var UU, RU;
        this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new XU.e(this.FG), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, null === (UU = (RU = this.options).showFacing) || void 0 === UU || UU.call(RU, null), this.setCentres(0)
      }
      syncShownSettings() {
        const UU = this.director.getSettings();
        if (UU === this.shownSettings) return;
        this.shownSettings = UU;
        const RU = (0, rU.f)(UU);
        this.facing = RU.facing, this.mouseTurns = RU.mouseTurns
      }
      readLook(UU, RU, gU, tU, pU) {
        const EU = this.look,
          PU = 0 !== (gU & CU.wb.LookPointed);
        if (null === this.mouseTurns && !PU) return EU.Xw = 0, EU.Ow = 0, void(EU.pointedAt = void 0);
        let TU;
        PU && (this.pointedAt.heading = tU, this.pointedAt.pitch = pU, TU = this.pointedAt);
        const {
          FG: qU
        } = this;
        qU.setViewHeading((0, rU.d)(qU.getViewHeading(), UU, RU, TU, "look" === this.mouseTurns, EU))
      }
      writeCentres(UU) {
        const RU = this.next,
          gU = Math.min(UU.length, CU._d);
        for (let tU = 0; tU < gU; tU++)
          for (let gU = 0; gU < 3; gU++) RU[3 * tU + gU] = Math.floor(UU[tU][gU] / CU.G);
        this.setCentres(gU)
      }
      setCentres(UU) {
        const {
          gq: RU,
          next: gU
        } = this;
        let tU = UU === this.centresLen;
        for (let pU = 0; tU && pU < 3 * UU; pU++) tU = RU[pU] === gU[pU];
        tU || (RU.fill(0), RU.set(gU.subarray(0, 3 * UU)), this.centresLen = UU, this.centresUnsent = !0, this.sendCentres())
      }
      sendCentres() {
        const UU = this.options.cmd();
        null !== UU && (0, CU.Nf)(UU, 0, this.gq, this.centresLen) && (this.centresUnsent = !1)
      }
      screen() {
        var UU, RU, gU;
        return null !== (UU = null === (RU = (gU = this.options).screen) || void 0 === RU ? void 0 : RU.call(gU)) && void 0 !== UU ? UU : iU
      }
      hidden() {
        var UU;
        return (null !== (UU = this.options.isPageHidden) && void 0 !== UU ? UU : AU)()
      }
      now() {
        var UU, RU, gU;
        return null !== (UU = null === (RU = (gU = this.options).now) || void 0 === RU ? void 0 : RU.call(gU)) && void 0 !== UU ? UU : performance.now()
      }
    }
    var MU = gU(40190);
    const DU = CU.G * CU.G * CU.G,
      LU = Math.log2(CU.G),
      NU = CU.G - 1,
      lU = CU.U.BYTES / 4,
      OU = new Uint16Array(DU);

    function UR(UU, RU, gU) {
      return UU * CU.G * CU.G + RU * CU.G + gU
    }
    class RR {
      constructor(UU) {
        this.chunk = UU
      }
      get data() {
        return this.chunk.gameVoxels()
      }
      index(UU, RU, gU) {
        return UR(UU, RU, gU)
      }
    }
    class gR {
      constructor() {
        this.ids = new Map, this.cleared = new Set, this.layers = 0, this.patched = null, this.from = null
      }
    }
    class tR {
      constructor(UU, RU, gU, tU) {
        this.table = UU, this.slot = RU, this.generation = gU, this.epoch = tU, this.Wj = new RR(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = OU, this.dataPtr = 0, this.dataBuffer = null, this.dataStamp = -1, this.version = 0, this.layers = null, this.layersVersion = -1, this.layersPtr = -1, this.staleLayers = 0
      }
      get XC() {
        return this.voxelData(), this.version === this.shownCore && this.writeCount === this.shownWrites || (this.shownCore = this.version, this.shownWrites = this.writeCount, this.shownVersion = this.table.nextVersion()), this.shownVersion
      }
      get Qu() {
        const UU = this.gameVoxels(),
          RU = this.layers ??= new Uint16Array(CU.G);
        this.layersVersion === this.version && this.layersPtr === this.dataPtr || (this.layersVersion = this.version, this.layersPtr = this.dataPtr, this.staleLayers = -1);
        for (let gU = 0; 0 !== this.staleLayers; gU++) {
          const tU = 1 << gU;
          0 !== (this.staleLayers & tU) && (this.staleLayers &= ~tU, RU[gU] = pR(UU, gU))
        }
        return RU
      }
      voxelData() {
        return this.dataStamp === this.table.stamp && 0 !== this.data.length ? this.data : this.reread()
      }
      gameVoxels() {
        const UU = this.voxelData(),
          RU = this.writes;
        if (null === RU || 0 === RU.ids.size) return UU;
        if (RU.from !== UU) {
          const gU = RU.patched ??= new Uint16Array(DU);
          gU.set(UU);
          for (const [UU, tU] of RU.ids) gU[UU] = tU;
          RU.from = UU
        }
        return RU.patched
      }
      written(UU) {
        var RU;
        return null === (RU = this.writes) || void 0 === RU ? void 0 : RU.ids.get(UU)
      }
      hasWrites() {
        return null !== this.writes && 0 !== this.writes.ids.size
      }
      write(UU, RU, gU) {
        const tU = this.writes ??= new gR;
        tU.ids.set(UU, RU), gU && tU.cleared.add(UU), null !== tU.from && (tU.patched[UU] = RU);
        const pU = 1 << (UU >> LU & NU);
        tU.layers |= pU, this.staleLayers |= pU, this.writeCount++
      }
      clearWrites() {
        const UU = this.writes;
        null !== UU && (this.staleLayers |= UU.layers, UU.ids.clear(), UU.cleared.clear(), UU.layers = 0, UU.from = null)
      }
      dataCleared(UU) {
        var RU;
        return !0 === (null === (RU = this.writes) || void 0 === RU ? void 0 : RU.cleared.has(UU))
      }
      reread() {
        this.dataStamp = this.table.stamp;
        const UU = this.table.slotWords(),
          RU = this.slot * lU;
        if (this.epoch !== this.table.epoch || RU + lU > UU.length || 0 === UU[RU + 3] || UU[RU + 2] !== this.generation) return this.data = OU, this.dataPtr = 0, OU;
        this.version = UU[RU + 1];
        const gU = UU[RU + 0],
          tU = UU.buffer;
        return gU === this.dataPtr && tU === this.dataBuffer || (this.dataPtr = gU, this.dataBuffer = tU, this.data = this.table.voxelsAt(tU, gU)), this.data
      }
    }

    function pR(UU, RU) {
      const gU = UU[RU * CU.G];
      for (let tU = 0; tU < CU.G; tU++) {
        const pU = UR(tU, RU, 0);
        for (let RU = 0; RU < CU.G; RU++)
          if (UU[pU + RU] !== gU) return 65535
      }
      return gU
    }
    const ER = new Uint32Array(0);

    function PR(UU, RU, gU) {
      return UR(UU & NU, RU & NU, gU & NU)
    }
    class TR {
      constructor(UU, RU) {
        this.memory = UU, this.apiView = RU, this.chunks = new Map, this.written = [], this.lastKey = -1, this.lastChunk = void 0, this.slotsPtr = 0, this.slotsLen = 0, this.slotsBuffer = null, this.slots = ER, this.walkPtr = 0, this.walkLen = 0, this.walkBuffer = null, this.walk = ER, this.epoch = 0, this.stamp = 0, this.versions = 0, this.corruption = null
      }
      apply(UU, RU, gU, tU, pU, EU) {
        if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, EU === CU.W.ResetAll) return this.chunks.clear(), void this.epoch++;
        if (EU !== CU.W.Stored && EU !== CU.W.Unloaded) throw new uU.d(`ChunkSlot flags ${EU}`);
        const PU = (0, MU.b)(UU, RU, gU);
        if (PU < 0) return;
        if (EU === CU.W.Unloaded) return void this.chunks.delete(PU);
        const TU = this.chunks.get(PU);
        (null === TU || void 0 === TU ? void 0 : TU.slot) === tU && TU.generation === pU || this.chunks.set(PU, new tR(this, tU, pU, this.epoch))
      }
      touch() {
        this.stamp++, this.clearOverlay(), this.viewWalkThrough()
      }
      refresh() {
        if (this.stamp++, this.corruption) throw this.corruption;
        const UU = this.apiView(),
          RU = CU.w.chunkSlotsPtr(UU, 0),
          gU = CU.w.chunkSlotsLen(UU, 0);
        RU === this.slotsPtr && gU === this.slotsLen || (this.slotsPtr = RU, this.slotsLen = gU, this.slotsBuffer = null, this.slotWords()), this.viewWalkThrough(), this.clearOverlay()
      }
      viewWalkThrough() {
        const UU = this.apiView(),
          RU = CU.w.walkThroughPtr(UU, 0),
          gU = CU.w.walkThroughLen(UU, 0);
        RU === this.walkPtr && gU === this.walkLen || (this.walkPtr = RU, this.walkLen = gU, this.walkBuffer = null, this.walkWords())
      }
      clearOverlay() {
        for (const UU of this.written) UU.clearWrites();
        this.written.length = 0
      }
      nextVersion() {
        return ++this.versions
      }
      slotWords() {
        const UU = this.memory().buffer;
        var RU;
        UU !== this.slotsBuffer && (this.slotsBuffer = UU, this.slots = null !== (RU = (0, uU.r)(Uint32Array, UU, this.slotsPtr, this.slotsLen * lU, "the chunk directory")) && void 0 !== RU ? RU : ER);
        return this.slots
      }
      voxelsAt(UU, RU) {
        try {
          var gU;
          return null !== (gU = (0, uU.r)(Uint16Array, UU, RU, DU, "a chunk's voxels")) && void 0 !== gU ? gU : OU
        } catch (tU) {
          if (!(tU instanceof uU.d)) throw tU;
          return this.corruption ??= tU, OU
        }
      }
      chunk(UU, RU, gU) {
        var tU;
        return null !== (tU = this.chunks.get((0, MU.b)(UU, RU, gU))) && void 0 !== tU ? tU : null
      }
      isLoaded(UU, RU, gU) {
        return void 0 !== this.chunkAt(Math.floor(UU), Math.floor(RU), Math.floor(gU))
      }
      gc(UU, RU, gU) {
        var tU;
        const pU = Math.floor(UU),
          EU = Math.floor(RU),
          PU = Math.floor(gU),
          TU = this.chunkAt(pU, EU, PU);
        if (!TU) return 0;
        const qU = PR(pU, EU, PU);
        return null !== (tU = TU.written(qU)) && void 0 !== tU ? tU : TU.voxelData()[qU]
      }
      setOverlay(UU, RU, gU, tU) {
        let pU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const EU = this.chunkAt(UU, RU, gU);
        return !!EU && (EU.hasWrites() || this.written.push(EU), EU.write(PR(UU, RU, gU), tU, pU), !0)
      }
      version(UU, RU, gU) {
        var tU, pU;
        return null !== (tU = null === (pU = this.chunks.get((0, MU.b)(UU, RU, gU))) || void 0 === pU ? void 0 : pU.XC) && void 0 !== tU ? tU : null
      }
      scan(UU, RU, gU, tU, pU, EU, PU, TU) {
        const qU = CU.G;
        let KU = 0;
        for (let cU = Math.floor(RU / qU); cU * qU < pU; cU++) {
          const GU = cU * qU,
            jU = Math.min(pU - GU, qU);
          for (let pU = Math.floor(UU / qU); pU * qU < tU; pU++) {
            const uU = pU * qU,
              CU = Math.min(tU - uU, qU);
            for (let tU = Math.floor(gU / qU); tU * qU < EU; tU++) {
              const hU = this.chunks.get((0, MU.b)(pU, cU, tU));
              if (!hU) continue;
              const QU = tU * qU,
                eU = Math.max(gU - QU, 0),
                WU = Math.min(EU - QU, qU),
                fU = hU.Qu,
                xU = hU.gameVoxels();
              for (let gU = Math.max(RU - GU, 0); gU < jU; gU++) {
                const RU = fU[gU];
                if (65535 === RU || 0 !== PU[RU]) {
                  KU++;
                  for (let RU = Math.max(UU - uU, 0); RU < CU; RU++) {
                    const UU = UR(RU, gU, 0);
                    for (let tU = eU; tU < WU; tU++) {
                      const pU = xU[UU + tU];
                      0 !== PU[pU] && TU.push(uU + RU, GU + gU, QU + tU, pU)
                    }
                  }
                }
              }
            }
          }
        }
        return KU
      }
      dataCleared(UU, RU, gU) {
        var tU;
        const pU = Math.floor(UU),
          EU = Math.floor(RU),
          PU = Math.floor(gU);
        return !0 === (null === (tU = this.chunkAt(pU, EU, PU)) || void 0 === tU ? void 0 : tU.dataCleared(PR(pU, EU, PU)))
      }
      isWalkThrough(UU) {
        if (!Number.isInteger(UU) || UU < 0 || UU > 65535) return !1;
        const RU = this.walkWords(),
          gU = UU >>> 5;
        return gU < RU.length && 1 === (RU[gU] >>> (31 & UU) & 1)
      }
      walkWords() {
        const UU = this.memory().buffer;
        var RU;
        UU !== this.walkBuffer && (this.walkBuffer = UU, this.walk = null !== (RU = (0, uU.r)(Uint32Array, UU, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== RU ? RU : ER);
        return this.walk
      }
      chunkAt(UU, RU, gU) {
        if ((0 | UU) !== UU || (0 | RU) !== RU || (0 | gU) !== gU) return;
        const tU = (0, MU.b)(UU >> LU, RU >> LU, gU >> LU);
        return tU !== this.lastKey && (this.lastKey = tU, this.lastChunk = this.chunks.get(tU)), this.lastChunk
      }
    }
    var qR = gU(38052),
      KR = gU(37335),
      cR = gU(36324),
      GR = gU(36203),
      jR = gU(8925),
      uR = gU(38662),
      CR = gU(189);
    const hR = ["ambient", "cars", "crowd", "customGame_horror", "dig", "fire", "fishing", "gameStart", "gunMisc", "gunPistol", "gunRifle", "gunSemiAutomatic", "gunShotgun", "gunSubmachineGun", "mob", "note", "phoneAndMoney", "police", "random", "rpg", "step", "survivalFactory", "town"],
      QR = [
        ["ZombieGrunt1", 14],
        ["ZombieGrunt2", 14],
        ["ZombieGrunt3", 14],
        ["ZombieHurt1", 14],
        ["ZombieHurt2", 14],
        ["ZombieHurt3", 14],
        ["ZombieHurt4", 14],
        ["bass", 15],
        ["bassattack", 15],
        ["bd", 15],
        ["bearRoar1", 14],
        ["bearRoar2", 14],
        ["bearRoar3", 14],
        ["bearRoar4", 14],
        ["bearRoar5", 14],
        ["beep", 18],
        ["bigDrumSwish1", 15],
        ["bigDrumSwish2", 15],
        ["bigDrumSwish3", 15],
        ["bow", 18],
        ["bucketEmpty1", 18],
        ["bucketEmpty2", 18],
        ["bucketEmpty3", 18],
        ["bucketFill1", 18],
        ["bucketFill2", 18],
        ["bucketFill3", 18],
        ["bullet_shell_bounce_general_07", 8],
        ["bullet_shell_bounce_general_08", 8],
        ["burp", 18],
        ["cameraShutter", 16],
        ["cannonFire1", 18],
        ["cannonFire2", 18],
        ["cannonFire3", 18],
        ["carCrash", 1],
        ["carDoorClose", 1],
        ["carDoorOpen", 1],
        ["carDriveLoop", 1],
        ["carEngineStart", 1],
        ["carHorn", 1],
        ["carIdleLoop", 1],
        ["carLockChirp", 1],
        ["cashRegister", 18],
        ["catHiss1", 14],
        ["catHiss2", 14],
        ["catHiss3", 14],
        ["catHiss4", 14],
        ["catHurt1", 14],
        ["catHurt2", 14],
        ["catHurt3", 14],
        ["catMeow1", 14],
        ["catMeow2", 14],
        ["catMeow3", 14],
        ["catMeow4", 14],
        ["catMeow5", 14],
        ["caughtFish", 6],
        ["chestClose", 18],
        ["chestOpen", 18],
        ["cloth1", 4],
        ["cloth2", 4],
        ["cloth3", 4],
        ["cloth4", 4],
        ["coinsDrop", 16],
        ["cowHurt1", 14],
        ["cowMoo1", 14],
        ["cowMoo2", 14],
        ["cowMoo3", 14],
        ["croneAttack1", 14],
        ["croneHurt1", 14],
        ["croneIdle1", 14],
        ["crowdAmbience", 2],
        ["crowdCheer", 2],
        ["crowdMurmur", 22],
        ["cryptWhoosh", 3],
        ["deerGrunt1", 14],
        ["deerHurt1", 14],
        ["dogBark1", 14],
        ["dogBark2", 14],
        ["dogBark3", 14],
        ["dogGrowl1", 14],
        ["dogGrowl2", 14],
        ["dogGrowl3", 14],
        ["dogHurt1", 14],
        ["dogHurt2", 14],
        ["doorClose", 18],
        ["doorClose2", 18],
        ["doorKnock", 3],
        ["doorOpen-bloxd1", 18],
        ["doorOpen-bloxd2", 18],
        ["doorbell", 22],
        ["drink", 18],
        ["drumSwish1", 15],
        ["drumSwish2", 15],
        ["eat1", 18],
        ["equip_leather1", 18],
        ["exp_collect", 18],
        ["exp_levelup", 18],
        ["extinguisherSpray", 5],
        ["fallsmall", 18],
        ["fennecYip1", 14],
        ["fennecYip2", 14],
        ["fennecYip3", 14],
        ["fireAlarmBell", 5],
        ["fireBurn", 18],
        ["fireCrackle", 5],
        ["fireTruckHorn", 5],
        ["firecracker1", 18],
        ["firecracker2", 18],
        ["firecracker3", 18],
        ["firecracker4", 18],
        ["futureStrangePulse", 3],
        ["game_start_countdown_01", 7],
        ["game_start_countdown_02", 7],
        ["game_start_countdown_03", 7],
        ["game_start_countdown_final", 7],
        ["gateCreak", 22],
        ["glass1", 4],
        ["glass2", 4],
        ["glass3", 4],
        ["golemGrunt1", 14],
        ["golemGrunt2", 14],
        ["gorillaIdle1", 14],
        ["gorillaIdle2", 14],
        ["gorillaIdle3", 14],
        ["gorillaIdle4", 14],
        ["gorillaRoar1", 14],
        ["grass1", 4],
        ["grass2", 4],
        ["grass3", 4],
        ["grass4", 4],
        ["gravel1", 4],
        ["gravel2", 4],
        ["gravel3", 4],
        ["gravel4", 4],
        ["handcuffsLock", 17],
        ["harp_pling", 15],
        ["hat", 15],
        ["hauntedHorrorImpact", 3],
        ["headshot_04", 8],
        ["headshot_06", 8],
        ["headshot_08", 8],
        ["headshot_11", 8],
        ["hit1", 20],
        ["hit2", 20],
        ["hit3", 20],
        ["hoeTill1", 18],
        ["hoeTill2", 18],
        ["hoeTill3", 18],
        ["hoeTill4", 18],
        ["horrorAccent1", 3],
        ["horrorFright", 3],
        ["horrorMaleDrone", 3],
        ["horseHurt1", 14],
        ["horseHurt2", 14],
        ["horseIdle1", 14],
        ["horseIdle2", 14],
        ["horseIdle3", 14],
        ["indicatorTick", 1],
        ["intensiveRainLoop", 3],
        ["jobComplete", 16],
        ["keysJingle", 22],
        ["kidsPlaying", 22],
        ["knightGrunt1", 14],
        ["knightGrunt2", 14],
        ["knightGrunt3", 14],
        ["laugh1", 18],
        ["laugh2", 18],
        ["laugh3", 18],
        ["lavaFlow", 0],
        ["levelup", 15],
        ["lowDrum1", 15],
        ["lowDrum2", 15],
        ["lowDrum3", 15],
        ["magicAccent1", 18],
        ["magicAccent2", 18],
        ["magicAccent3", 18],
        ["magicAccent4", 18],
        ["messageReceive", 16],
        ["metalDoorKnock", 3],
        ["ominousBellHit", 3],
        ["parkBirds", 22],
        ["phoneNotify", 16],
        ["phoneTap", 16],
        ["phoneVibrate", 16],
        ["pickUp", 4],
        ["pigHurt1", 14],
        ["pigHurt2", 14],
        ["pigHurt3", 14],
        ["pigOink1", 14],
        ["pigOink2", 14],
        ["pigOink3", 14],
        ["pigOink4", 14],
        ["pigOink5", 14],
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
        ["radioBeep", 17],
        ["radioChatter", 17],
        ["reaverAttack1", 14],
        ["reaverAttack2", 14],
        ["reaverAttack3", 14],
        ["reaverGrunt1", 14],
        ["reaverGrunt2", 14],
        ["reaverGrunt3", 14],
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
        ["rocketEngineLoop", 21],
        ["rpgBeltCloth1", 19],
        ["rpgBeltCloth2", 19],
        ["rpgBeltHandle1", 19],
        ["rpgBeltHandle2", 19],
        ["rpgBookClose", 19],
        ["rpgBookFlip1", 19],
        ["rpgBookFlip2", 19],
        ["rpgBookFlip3", 19],
        ["rpgBookOpen", 19],
        ["rpgBookPlace1", 19],
        ["rpgBookPlace2", 19],
        ["rpgBookPlace3", 19],
        ["rpgChop", 19],
        ["rpgCloth1", 19],
        ["rpgCloth2", 19],
        ["rpgCloth3", 19],
        ["rpgCloth4", 19],
        ["rpgCreak1", 19],
        ["rpgCreak2", 19],
        ["rpgCreak3", 19],
        ["rpgDoorClose1", 19],
        ["rpgDoorClose2", 19],
        ["rpgDoorClose3", 19],
        ["rpgDoorClose4", 19],
        ["rpgDoorOpen1", 19],
        ["rpgDoorOpen2", 19],
        ["rpgDrawKnife1", 19],
        ["rpgDrawKnife2", 19],
        ["rpgDrawKnife3", 19],
        ["rpgDropLeather", 19],
        ["rpgFootstep00", 19],
        ["rpgFootstep01", 19],
        ["rpgFootstep02", 19],
        ["rpgFootstep03", 19],
        ["rpgFootstep04", 19],
        ["rpgFootstep05", 19],
        ["rpgFootstep06", 19],
        ["rpgFootstep07", 19],
        ["rpgFootstep08", 19],
        ["rpgFootstep09", 19],
        ["rpgHandleCoins1", 19],
        ["rpgHandleCoins2", 19],
        ["rpgHandleSmallLeather1", 19],
        ["rpgHandleSmallLeather2", 19],
        ["rpgKnifeSlice1", 19],
        ["rpgKnifeSlice2", 19],
        ["rpgMetalClick", 19],
        ["rpgMetalLatch", 19],
        ["rpgMetalPot1", 19],
        ["rpgMetalPot2", 19],
        ["rpgMetalPot3", 19],
        ["runningSteps", 17],
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
        ["sheepBaa1", 14],
        ["sheepBaa2", 14],
        ["sheepBaa3", 14],
        ["sheepBaa4", 14],
        ["sheepHurt1", 14],
        ["shopDoorbell", 22],
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
        ["sirenChirp", 17],
        ["sirenWail", 17],
        ["sirenYelp", 17],
        ["skeletonRattle1", 14],
        ["skeletonRattle2", 14],
        ["skeletonRattle3", 14],
        ["skeletonRattle4", 14],
        ["snare", 15],
        ["snow1", 4],
        ["snow2", 4],
        ["snow3", 4],
        ["snow4", 4],
        ["sonarBeep", 15],
        ["splash1", 18],
        ["stagGrunt1", 14],
        ["stagHurt1", 14],
        ["stalkerAttack1", 14],
        ["stalkerIdle1", 14],
        ["step_cloth1", 20],
        ["step_cloth2", 20],
        ["step_cloth3", 20],
        ["step_cloth4", 20],
        ["step_grass1", 20],
        ["step_grass2", 20],
        ["step_grass3", 20],
        ["step_grass4", 20],
        ["step_grass5", 20],
        ["step_gravel1", 20],
        ["step_gravel2", 20],
        ["step_gravel3", 20],
        ["step_gravel4", 20],
        ["step_sand2", 20],
        ["step_sand3", 20],
        ["step_sand4", 20],
        ["step_sand5", 20],
        ["step_snow1", 20],
        ["step_snow2", 20],
        ["step_snow3", 20],
        ["step_snow4", 20],
        ["step_stone1", 20],
        ["step_stone2", 20],
        ["step_stone3", 20],
        ["step_stone4", 20],
        ["step_stone5", 20],
        ["step_stone6", 20],
        ["step_wood1", 20],
        ["step_wood2", 20],
        ["step_wood3", 20],
        ["step_wood4", 20],
        ["step_wood5", 20],
        ["step_wood6", 20],
        ["stone1", 4],
        ["stone2", 4],
        ["stone3", 4],
        ["stone4", 4],
        ["stunZap", 17],
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
        ["successfulBowHit", 18],
        ["suspenseRiser", 3],
        ["sweep6", 20],
        ["thunderRain", 3],
        ["tillPurchase", 16],
        ["trapdoorOpen", 18],
        ["trumpetFlare", 15],
        ["trumpetNote1", 15],
        ["trumpetNote2", 15],
        ["trumpetNote3", 15],
        ["tyreScreech", 1],
        ["vanIdleLoop", 1],
        ["warperGrunt1", 14],
        ["warperGrunt2", 14],
        ["warperGrunt3", 14],
        ["warperGrunt4", 14],
        ["warperGrunt5", 14],
        ["warperPhase1", 14],
        ["warperPhase2", 14],
        ["whistle", 17],
        ["wood1", 4],
        ["wood2", 4],
        ["wood3", 4],
        ["wood4", 4],
        ["wraithGrunt1", 14],
        ["wraithGrunt2", 14],
        ["wraithHurt", 14],
        ["zapAccent1", 3],
        ["zapAccent2", 3]
      ],
      eR = QR.map((UU => {
        let [RU] = UU;
        return RU
      })),
      WR = Uint8Array.from(QR, (UU => {
        let [, RU] = UU;
        return RU
      })),
      fR = {
        semi_automatic: 11,
        submachine: 13,
        rifle: 10,
        pistol: 9,
        shotgun: 12
      },
      xR = 8;
    var mR = gU(36319),
      IR = gU(249);
    const JR = 2 ** hR.length - 1;
    class wR {
      constructor(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : IR.e;
        this.sheet = UU, this.onError = RU, this.idle = gU, this.queue = [], this.asked = 0, this.cancelIdle = null, this.gen = 0, this.onIdle = UU => {
          this.cancelIdle = null;
          try {
            if (UU.timeRemaining() >= 1) {
              let UU = this.queue.shift();
              for (; void 0 !== UU && !this.load(UU);) UU = this.queue.shift()
            }
          } catch (RU) {
            this.onError(RU)
          } finally {
            this.schedule()
          }
        }
      }
      preload(UU) {
        const RU = UU & JR & ~this.asked;
        if (0 !== RU) {
          this.asked |= RU;
          for (let UU = 0; UU < hR.length; UU++) RU & 1 << UU && this.queue.push(UU);
          this.schedule()
        }
      }
      cancel() {
        var UU;
        this.queue.length = 0, this.asked = 0, this.gen++, null === (UU = this.cancelIdle) || void 0 === UU || UU.call(this), this.cancelIdle = null
      }
      schedule() {
        null === this.cancelIdle && this.queue.length > 0 && (this.cancelIdle = this.idle(this.onIdle))
      }
      load(UU) {
        const RU = this.sheet(UU, !1),
          gU = this.sheet(UU, !0),
          [tU, pU] = "unloaded" === RU.state() && "unloaded" !== gU.state() ? [gU, RU] : [RU, gU],
          EU = this.gen,
          PU = () => {
            try {
              EU === this.gen && "unloaded" === pU.state() && pU.load()
            } catch (UU) {
              this.onError(UU)
            }
          },
          TU = tU.state();
        return "unloaded" === TU ? (tU.once("load", PU), tU.load(), !0) : "unloaded" === pU.state() && ("loading" === TU ? (tU.once("load", PU), !1) : (pU.load(), !0))
      }
    }
    var nR = gU(40293);
    const bR = {
        coneInnerAngle: 360,
        coneOuterAngle: 360,
        coneOuterGain: 0,
        distanceModel: "inverse",
        maxDistance: 1e3,
        panningModel: "HRTF",
        rolloffFactor: 1
      },
      oR = CR.e.FW * CR.e.playerEyeToHeightRatio,
      ZR = [0, 0, -1, 0, 1, 0],
      aR = hR.indexOf("note");

    function YR(UU) {
      return UU >= 0 ? Math.min(1, UU) : 0
    }

    function BR(UU) {
      var RU;
      let gU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
      const tU = function(UU) {
        let RU = 0,
          gU = eR.length;
        for (; RU < gU;) {
          const tU = RU + gU >>> 1;
          eR[tU] < UU ? RU = tU + 1 : gU = tU
        }
        return RU
      }(UU);
      if ("" === UU || null === (RU = eR[tU]) || void 0 === RU || !RU.startsWith(UU)) return -1;
      if (eR[tU] === UU) return tU;
      let pU = tU + 1;
      for (; pU < eR.length && eR[pU].startsWith(UU);) pU++;
      return tU + Math.floor(gU() * (pU - tU))
    }
    class VR {
      constructor(UU, RU, gU, tU, pU) {
        this.group = UU, this.loudness = RU, this.startMs = gU, this.howl = tU, this.host = pU, this.id = 0, this.direct = !1
      }
      getDurationMs() {
        const UU = this.host.alive(this.id);
        return UU ? 1e3 * this.howl.duration(this.id) / UU.rate : 0
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
    class rR {
      constructor(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          tU = arguments.length > 3 ? arguments[3] : void 0;
        this.createHowl = UU, this.listener = RU, this.now = gU, this.errors = 0, this.sheets = new Map, this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader = void 0, this.voices = new mR.b, this.failed = new Set, this.started = new Set, this.voiceHost = {
          alive: UU => this.aliveVoice(UU),
          started: UU => this.started.has(UU),
          drop: UU => {
            var RU;
            null === (RU = this.live.get(UU)) || void 0 === RU || RU.howl.stop(UU), this.forget(UU)
          }
        }, this.handlers = {
          playSound: (UU, RU, gU, tU, pU, EU, PU, TU, qU) => {
            if (tU >= eR.length) return;
            const KU = 0 !== (pU & CU.je.Loop);
            pU & CU.je.TwoD ? this.start(tU, !1, PU, EU, TU, KU) : this.startSpatial(tU, PU, EU, TU, KU, UU, RU, gU, qU, this.earDistSq(UU, RU, gU))
          },
          soundPos: (UU, RU, gU, tU) => {
            const pU = this.core.get(tU);
            var EU;
            void 0 !== pU && (null === (EU = this.live.get(pU)) || void 0 === EU || EU.howl.pos(gU, RU, UU, pU))
          },
          soundSet: (UU, RU, gU, tU) => {
            const pU = this.core.get(UU),
              EU = void 0 === pU ? void 0 : this.live.get(pU);
            void 0 !== pU && EU && (this.setRel(pU, RU), EU.rate = gU, EU.howl.rate(gU, pU), EU.spatial && EU.howl.pannerAttr({
              refDistance: tU
            }, pU))
          },
          soundFade: (UU, RU, gU, tU) => {
            const pU = this.core.get(UU);
            void 0 !== pU && this.fade(pU, RU, gU, 0 !== (tU & CU.ie.StopAfter))
          },
          soundStop: UU => {
            const RU = this.core.get(UU);
            var gU;
            void 0 !== RU && (null === (gU = this.live.get(RU)) || void 0 === gU || gU.howl.stop(RU), this.forget(RU))
          },
          soundReset: () => {
            this.stopCore()
          }
        }, this.loader = new wR(((UU, RU) => this.sheet(UU, RU)), (UU => {
          this.errors++, console.error("Audio preload failed", UU)
        }), tU)
      }
      prepare() {
        for (let UU = 0; UU < hR.length; UU++) this.sheet(UU, !1), this.sheet(UU, !0)
      }
      preload(UU) {
        this.loader.preload(UU)
      }
      cancelPreload() {
        this.loader.cancel()
      }
      onAudioEvent(UU, RU, gU, tU) {
        if (UU < CU.r.PlaySound || UU > CU.r.SoundReset) return !1;
        try {
          return (0, CU.ue)(UU, RU, gU, tU, this.handlers)
        } catch (pU) {
          return this.errors++, console.error("Audio event failed", pU), !0
        }
      }
      applyListener(UU) {
        const RU = this.nextPose;
        for (let tU = 0; tU < 3; tU++) RU[2 - tU] = CU.A.listener(UU, 0, tU), RU[5 - tU] = CU.A.forward(UU, 0, tU), RU[8 - tU] = CU.A.up(UU, 0, tU);
        0 === RU[3] && 0 === RU[4] && 0 === RU[5] && RU.set(this.posed ? this.pose.subarray(3) : ZR, 3);
        for (let tU = 0; tU < 9; tU++)
          if (!Number.isFinite(RU[tU])) return;
        const gU = this.pose;
        if (this.posed) {
          let UU = !0;
          for (let tU = 0; tU < 9 && UU; tU++) UU = RU[tU] === gU[tU];
          if (UU) return
        }
        this.listener.apply(RU) && (gU.set(RU), this.posed = !0)
      }
      playGame(UU, RU, gU, tU, pU, EU, PU) {
        const TU = BR(UU);
        if (TU < 0) return nR.d;
        if (!gU) {
          const {
            howl: UU,
            id: gU
          } = this.start(TU, !1, RU, 0, 1, PU);
          return this.gameSound(UU, gU, !1)
        }
        const qU = gU[0],
          KU = gU[1] + oR,
          cU = gU[2];
        if (!Number.isFinite(qU) || !Number.isFinite(KU) || !Number.isFinite(cU)) return nR.d;
        let GU;
        if (tU) {
          const UU = qU - tU[0],
            RU = KU - tU[1],
            gU = cU - tU[2];
          if (GU = UU * UU + RU * RU + gU * gU, GU > pU * pU) return nR.d
        } else GU = this.earDistSq(qU, KU, cU);
        const jU = this.startSpatial(TU, RU, 0, 1, PU, qU, KU, cU, EU, GU);
        return jU ? this.gameSound(jU.howl, jU.id, !0) : nR.d
      }
      setMaster(UU, RU) {
        this.level = YR(UU);
        const gU = RU ? this.level : 0;
        if (gU !== this.master) {
          this.master = gU;
          for (const [UU, RU] of this.live) RU.fadeMs = 0, RU.gain = RU.rel * this.master, RU.howl.volume(RU.gain, UU)
        }
      }
      stopCore() {
        for (const RU of [...this.core.values()]) {
          var UU;
          null === (UU = this.live.get(RU)) || void 0 === UU || UU.howl.stop(RU)
        }
        this.core.clear()
      }
      stopAll() {
        this.cancelPreload();
        for (const [UU, RU] of [...this.live]) RU.howl.stop(UU), this.forget(UU);
        this.core.clear()
      }
      gameSound(UU, RU, gU) {
        const tU = {
          stop: () => (this.live.has(RU) && UU.stop(RU), tU),
          fade: (UU, gU, pU) => {
            var EU, PU;
            const TU = this.level > 0 ? gU / this.level : gU > 0 && null !== (EU = null === (PU = this.live.get(RU)) || void 0 === PU ? void 0 : PU.rel) && void 0 !== EU ? EU : 0;
            return this.fade(RU, TU, pU, !1), tU
          },
          rate: gU => {
            const pU = this.live.get(RU);
            return pU && (pU.rate = function(UU) {
              return UU > 0 && UU < 1 / 0 ? UU : 1
            }(gU), UU.rate(pU.rate, RU)), tU
          },
          getVolume: () => {
            var UU, gU;
            return (null !== (UU = null === (gU = this.live.get(RU)) || void 0 === gU ? void 0 : gU.rel) && void 0 !== UU ? UU : 0) * this.level
          },
          getRelativeVolume: () => {
            var UU, gU;
            return null !== (UU = null === (gU = this.live.get(RU)) || void 0 === gU ? void 0 : gU.rel) && void 0 !== UU ? UU : 0
          },
          setRelativeVolume: UU => (this.setRel(RU, UU), tU),
          setPannerAttr: pU => {
            if (gU && this.live.has(RU)) {
              const gU = {
                ...bR,
                refDistance: cR.e
              };
              for (const [UU, RU] of Object.entries(pU)) "number" !== typeof RU && "string" !== typeof RU || (gU[UU] = RU);
              UU.pannerAttr({
                coneOuterAngle: gU.coneOuterAngle
              }, RU), UU.pannerAttr(gU, RU)
            }
            return tU
          },
          setPosition: pU => (gU && this.live.has(RU) && Number.isFinite(pU[0] + pU[1] + pU[2]) && UU.pos(pU[2], pU[1], pU[0], RU), tU)
        };
        return tU
      }
      startSpatial(UU, RU, gU, tU, pU, EU, PU, TU, qU, KU) {
        const cU = this.sheet(WR[UU], !0);
        let GU = null;
        if (!pU) {
          if (this.failed.has(cU)) return null;
          const gU = WR[UU] === aR ? null : (0, mR.g)(eR[UU]),
            tU = (0, mR.f)(YR(RU), Math.sqrt(KU), qU);
          if (GU = new VR(gU, tU, this.now(), cU, this.voiceHost), !this.voices.admit(GU)) return null
        }
        const jU = this.start(UU, !0, RU, gU, tU, pU);
        return GU && (GU.id = jU.id, GU.direct = "loaded" === cU.state() && !cU._playLock), cU.pannerAttr({
          coneOuterAngle: 360
        }, jU.id), cU.pannerAttr({
          ...bR,
          refDistance: qU
        }, jU.id), cU.pos(TU, PU, EU, jU.id), jU
      }
      aliveVoice(UU) {
        const RU = this.live.get(UU);
        if (!RU) return;
        const gU = RU.howl._soundById(UU);
        if (gU && !gU._ended) return RU;
        this.forget(UU)
      }
      earDistSq(UU, RU, gU) {
        if (!this.posed) return 0;
        const tU = UU - this.pose[2],
          pU = RU - this.pose[1],
          EU = gU - this.pose[0];
        return tU * tU + pU * pU + EU * EU
      }
      start(UU, RU, gU, tU, pU, EU) {
        const PU = YR(gU),
          TU = this.sheet(WR[UU], RU);
        "unloaded" === TU.state() && TU.load();
        const qU = TU.play(eR[UU]),
          KU = PU * this.master;
        return TU.volume(KU, qU), this.live.set(qU, {
          howl: TU,
          rel: PU,
          gain: KU,
          fadeFrom: KU,
          fadeAt: 0,
          fadeMs: 0,
          rate: pU,
          handle: tU,
          spatial: RU,
          stopTimer: void 0
        }), 0 !== tU && this.core.set(tU, qU), 1 !== pU && TU.rate(pU, qU), EU && TU.loop(!0, qU), {
          howl: TU,
          id: qU
        }
      }
      sheet(UU, RU) {
        const gU = 2 * UU + (RU ? 1 : 0);
        let tU = this.sheets.get(gU);
        if (!tU) {
          const pU = this.createHowl(hR[UU], RU);
          pU.on("end", (UU => {
            pU.loop(UU) || this.forget(UU)
          })), pU.on("stop", (UU => {
            this.forget(UU)
          })), pU.on("play", (UU => {
            this.live.has(UU) && this.started.add(UU)
          })), pU.on("loaderror", (UU => {
            if ("loaded" !== pU.state()) {
              this.failed.add(pU);
              for (const [UU, RU] of this.live) RU.howl === pU && this.forget(UU)
            } else "number" === typeof UU && this.forget(UU)
          })), this.sheets.set(gU, pU), tU = pU
        }
        return tU
      }
      setRel(UU, RU) {
        const gU = this.live.get(UU);
        gU && (XR(gU), gU.fadeMs = 0, gU.rel = YR(RU), gU.gain = gU.rel * this.master, gU.howl.volume(gU.gain, UU))
      }
      fade(UU, RU, gU, tU) {
        const pU = this.live.get(UU);
        if (!pU) return;
        XR(pU);
        const {
          howl: EU
        } = pU, PU = this.gainNow(pU);
        pU.rel = YR(RU), pU.gain = pU.rel * this.master;
        const TU = gU > 0 ? Math.min(gU, 65535) : 0,
          qU = 0 === TU || PU === pU.gain;
        pU.fadeMs = qU ? 0 : TU, qU ? EU.volume(pU.gain, UU) : (pU.fadeFrom = PU, pU.fadeAt = this.now(), EU.fade(PU, pU.gain, TU, UU)), tU && (qU ? EU.stop(UU) : pU.stopTimer = setTimeout((() => {
          pU.stopTimer = void 0, EU.stop(UU)
        }), TU))
      }
      gainNow(UU) {
        if (UU.fadeMs > 0) {
          const RU = (this.now() - UU.fadeAt) / UU.fadeMs;
          if (RU < 1) return UU.fadeFrom + (UU.gain - UU.fadeFrom) * Math.max(0, RU);
          UU.fadeMs = 0
        }
        return UU.gain
      }
      forget(UU) {
        this.started.delete(UU);
        const RU = this.live.get(UU);
        RU && (XR(RU), this.live.delete(UU), 0 !== RU.handle && this.core.get(RU.handle) === UU && this.core.delete(RU.handle))
      }
    }

    function XR(UU) {
      void 0 !== UU.stopTimer && (clearTimeout(UU.stopTimer), UU.stopTimer = void 0)
    }
    var vR = gU(39984),
      dR = gU(38666);
    class HR {
      constructor(UU, RU, gU, tU) {
        this.key = UU, this.model = RU, this.host = tU, this.hG = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.OtU = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, this.tailView = void 0, this.tailCut = new Uint8Array(0), this.made = !1, this.pC = !1, this.hG = Math.max(1, Math.ceil(gU)), this.records = new Float32Array(this.hG * qR.d), this.isDirty = new Uint8Array(this.hG), this.tail = new Uint8Array(this.hG * CU.uc.Bytes), this.tailView = new DataView(this.tail.buffer), this.make(tU.cmd())
      }
      setOrigin(UU, RU, gU) {
        this.origin[0] = UU, this.origin[1] = RU, this.origin[2] = gU
      }
      markDirty(UU) {
        !this.pC && UU >= 0 && UU < this.hG && UU < CU.uc.Max && this.nC(UU, UU + 1)
      }
      commit(UU) {
        if (this.pC) return;
        (UU = Math.min(Math.max(Math.floor(UU), 0), this.hG, CU.uc.Max)) > this.count && this.nC(this.count, UU), this.count = UU;
        const {
          origin: RU,
          sentOrigin: gU,
          dirtyList: tU
        } = this, pU = this.OtU !== UU, EU = gU[0] !== RU[0] || gU[1] !== RU[1] || gU[2] !== RU[2];
        if (0 === tU.length && !pU && !EU) return;
        const PU = this.host.cmd();
        if (!PU || !this.make(PU)) return;
        const TU = tU.length,
          {
            records: qU,
            tailView: KU
          } = this;
        for (let cU = 0; cU < TU; cU++) {
          const UU = tU[cU],
            RU = UU * qR.d,
            gU = cU * CU.uc.Bytes,
            pU = 0 !== qU[RU + qR.g] ? CU.uc.Hidden : 0;
          KU.setUint32(gU, (UU | pU) >>> 0, !0), KU.setFloat32(gU + 4, qU[RU], !0), KU.setFloat32(gU + 8, qU[RU + 1], !0), KU.setFloat32(gU + 12, qU[RU + 2], !0)
        }
        if ((0, CU.Ze)(PU, 0, this.key, UU, RU, TU, this.tailOf(TU))) {
          for (let UU = 0; UU < TU; UU++) this.isDirty[tU[UU]] = 0;
          tU.length = 0, this.OtU = UU, gU[0] = RU[0], gU[1] = RU[1], gU[2] = RU[2]
        }
      }
      grow(UU) {
        (UU = Math.ceil(UU)) <= this.hG || this.pC || (this.records = (0, dR.d)(this.records, new Float32Array(UU * qR.d)), this.isDirty = (0, dR.d)(this.isDirty, new Uint8Array(UU)), this.tail = new Uint8Array(UU * CU.uc.Bytes), this.tailView = new DataView(this.tail.buffer), this.hG = UU)
      }
      dispose() {
        this.pC || (this.pC = !0, this.host.pC(this, this.made ? this.key : null))
      }
      make(UU) {
        if (!this.made && UU) {
          const {
            item: RU,
            scale: gU,
            yaw: tU
          } = this.model;
          this.made = (0, CU.ef)(UU, 0, this.key, RU, gU, tU)
        }
        return this.made
      }
      tailOf(UU) {
        const RU = UU * CU.uc.Bytes;
        return this.tailCut.buffer === this.tail.buffer && this.tailCut.length === RU || (this.tailCut = this.tail.subarray(0, RU)), this.tailCut
      }
      nC(UU, RU) {
        const {
          dirtyList: gU,
          isDirty: tU
        } = this;
        for (let pU = UU; pU < RU; pU++) 0 === tU[pU] && (tU[pU] = 1, gU.push(pU))
      }
    }
    var SR = gU(572);
    class sR {
      constructor(UU) {
        this.keys = 0, this.live = new Set, this.owing = new Set, this.host = void 0, this.host = {
          cmd: UU,
          owes: UU => {
            this.owing.add(UU)
          },
          settled: (UU, RU) => {
            this.owing.delete(UU), RU && this.live.delete(UU)
          }
        }
      }
      create(UU, RU) {
        if (gU = UU, !SR.j.includes(gU)) return null;
        var gU;
        const tU = new yR(++this.keys, cU.m.indexOf(UU), RU, this.host);
        return this.live.add(tU), tU
      }
      disposeAll() {
        for (const UU of [...this.live]) UU.dispose()
      }
      flush() {
        if (0 === this.owing.size) return;
        const UU = this.host.cmd();
        for (const RU of this.owing)
          if (!RU.sync(UU)) return
      }
    }
    class yR {
      constructor(UU, RU, gU, tU) {
        this.key = UU, this.lifeform = RU, this.scale = gU, this.host = tU, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.owed = 1, this.pC = !1, this.sync()
      }
      setPose(UU, RU) {
        this.pC || (this.feet[0] = UU[0], this.feet[1] = UU[1], this.feet[2] = UU[2], this.yaw = RU, this.owed |= 2, this.sync())
      }
      setVisible(UU) {
        this.pC || UU === this.visible || (this.visible = UU, this.owed |= 4, this.sync())
      }
      dispose() {
        this.pC || (this.pC = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
      }
      sync() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.host.cmd();
        return this.write(UU) ? (this.host.settled(this, this.pC), !0) : (this.host.owes(this), !1)
      }
      write(UU) {
        if (!UU) return this.owed = 0, !0;
        if (1 & this.owed) {
          if (!(0, CU.kf)(UU, 0, this.key, this.lifeform, this.scale)) return !1;
          this.owed &= -2
        }
        const RU = (2 & this.owed ? CU.Zc.Pose : 0) | (4 & this.owed ? CU.Zc.Visible : 0);
        if (0 !== RU) {
          if (!(0, CU.gf)(UU, 0, this.key, RU, this.visible ? 1 : 0, this.feet, this.yaw)) return !1;
          this.owed &= -7
        }
        if (8 & this.owed) {
          if (!(0, CU.ff)(UU, 0, this.key)) return !1;
          this.owed = 0
        }
        return !0
      }
    }
    var kR = gU(40444);

    function FR(UU, RU, gU, tU) {
      return (0, kR.d)(), (0, CU.Qf)(UU, RU, gU, tU)
    }
    var iR = gU(38671),
      AR = gU(39974);
    const zR = [0, 0, 0],
      MR = [0, 0, 0],
      DR = [0, 0, 0],
      LR = [0, 0, 0],
      NR = {
        origin: [0, 0, 0],
        direction: [0, 0, 1]
      },
      lR = [0, 0, 0],
      OR = [0, 0],
      Ug = [1, 1, 1],
      Rg = 1 / 3;
    const gg = KR.e;

    function tg(UU) {
      const RU = KR.c[UU],
        gU = RU && KR.e[RU.mainMultiblock];
      return gU && {
        main: gU,
        x: RU.compX,
        y: RU.compY,
        z: RU.compZ
      }
    }

    function pg(UU) {
      if (null === UU || void 0 === UU) return CU.dd;
      const RU = +UU;
      return Number.isInteger(RU) && RU >= -2147483648 && RU <= 2147483647 && String(RU) === String(UU) ? RU : CU.dd
    }

    function Eg(UU, RU, gU) {
      return (0, CU.Yf)(UU, 0, RU, null !== gU && void 0 !== gU ? gU : Number.NaN)
    }
    class Pg {
      constructor(UU) {
        this.deps = UU, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new iR.d((() => this.tables.getClientOption("forcedCameraDirectionTransitionMs")), (UU => {
          var RU, gU;
          null === (RU = (gU = this.deps).setLocalOptions) || void 0 === RU || RU.call(gU, UU)
        })), this.mobModels = new sR((() => this.deps.cmd())), this.owedFrees = [], this.pendingStyle = void 0, this.pendingFar = void 0, this.farSet = !1, this.routeMesh = 0, this.routeOffset = 0, this.routeLook = "", this.routeSlide = {
          uvOffset: [0, 0]
        }, this.poolHost = {
          cmd: () => this.deps.cmd(),
          pC: (UU, RU) => {
            this.livePools.delete(UU), null !== RU && (this.owedFrees.push(RU), this.flushOwed())
          }
        }, this.api = UU.api, this.live = UU.live, this.chunks = UU.chunks, this.items = UU.items, this.tables = UU.tables
      }
      isLocal(UU) {
        return null !== UU && void 0 !== UU && +UU === this.api.localId
      }
      assertLocal(UU, RU) {
        if (!this.isLocal(UU)) throw new Error(`Attempted to ${RU} for a player that is not the local player`)
      }
      Hx(UU) {
        const RU = this.api.Hx(UU);
        if (!RU) throw new Error(`Entity ${UU} has no replicated position`);
        return RU
      }
      checkValid(UU) {
        return !!this.deps.isSessionLive() && (null === UU || void 0 === UU || this.api.checkValid(UU))
      }
      isAlive(UU) {
        return !1 !== this.api.isAlive(UU)
      }
      getItemStat(UU, RU, gU) {
        return this.isLocal(UU) || null !== UU && "Player" === this.api.getEntityType(UU) ? this.tables.getItemStat(RU, gU) : this.tables.getDefaultItemStat(RU, gU)
      }
      getClientOption(UU, RU) {
        return this.assertLocal(UU, "get a client option"), this.tables.getClientOption(RU)
      }
      openShop(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gU = arguments.length > 2 ? arguments[2] : void 0;
        this.assertLocal(UU, "open shop"), PU.p.yh("showShopFromServer", {
          toggle: RU,
          KR: gU
        }, !0)
      }
      sendMessage(UU, RU, gU) {
        this.assertLocal(UU, "send a message");
        const tU = "string" === typeof RU ? [{
          str: RU,
          style: gU
        }] : RU;
        PU.p.yh("chat", {
          content: tU
        }, !0)
      }
      getEntityType(UU) {
        return this.api.getEntityType(UU)
      }
      getEntityName(UU) {
        const RU = pg(UU);
        return RU === CU.dd ? void 0 : (0, vR.e)(this.api, RU)
      }
      hasEffect(UU, RU) {
        const gU = pg(UU);
        return gU !== CU.dd && (0, vR.d)(this.api, gU, RU)
      }
      getMetaInfo(UU) {
        return this.tables.getMetaInfo(UU)
      }
      getPlayerDbId(UU) {
        return this.assertLocal(UU, "get a DB ID"), this.deps.playerDbId()
      }
      getBlockData(UU, RU, gU) {
        if (!this.chunks.dataCleared(UU, RU, gU)) return (0, vR.b)(this.api, UU, RU, gU)
      }
      mw(UU, RU, gU, tU) {
        this.setBlockId(UU, RU, gU, this.tables.getItemId(tU))
      }
      setOtherEntitySetting(UU, RU, gU, tU) {
        if (!this.isLocal(UU)) throw new Error("Attempted to set an other-entity setting for a player that is not the local player");
        if (!Object.hasOwn(CU.sd, gU)) throw new Error(`Unknown other-entity setting ${gU}`);
        const pU = CU.sd[gU],
          EU = pg(RU);
        if (EU === CU.dd || !this.deps.beforeWrite()) return;
        const PU = (0, vU.d)(tU);
        if (PU.length > 16384) throw new Error(`The other-entity setting ${gU}'s value is over 16384 bytes`);
        const TU = this.api.memoryView(Uint8Array, this.api.scratch(), PU.length, "set_other_entity_setting's value");
        TU && (TU.set(PU), this.api.queries.setOtherEntitySetting(EU, pU, PU.length))
      }
      getPositionView(UU) {
        return this.live.position(+UU)
      }
      readDrawnPosition(UU, RU) {
        return this.api.readDrawnPosition(pg(UU), RU)
      }
      getDrawnHeading(UU) {
        const RU = pg(UU),
          gU = (RU === CU.dd ? 0 : this.api.queries.directorEntity(RU)) >= CU.vb.BYTES ? this.api.memoryData(this.api.scratch(), CU.vb.BYTES, 8, "getDrawnHeading's DirectorEntity") : null;
        if (!gU) return null;
        if (1 === CU.vb.headingIsDrawn(gU, 0)) return CU.vb.heading(gU, 0);
        const tU = this.api.apiView;
        return this.isLocal(UU) && 0 === (CU.w.playerFlags(tU, 0) & CU.Pd.FreeCam) ? CU.w.heading(tU, 0) : null
      }
      getLocalPlayerMovement() {
        const UU = CU.w.playerFlags(this.api.apiView, 0);
        return 0 === (UU & CU.Pd.Replay) && this.api.readDrawnPosition(this.api.localId, DR) ? {
          onGround: 0 !== (UU & CU.Pd.OnGround),
          jumpHeld: 0 !== (UU & CU.Pd.JumpHeld)
        } : null
      }
      QRU(UU) {
        return this.isLocal(UU) ? this.items.WT() : null
      }
      getInventoryItems() {
        return this.items.playerItems()
      }
      getHeldGunInaccuracy() {
        var UU, RU;
        return "Gun" === (null === (UU = this.aliveHeld()) || void 0 === UU || null === (RU = UU.typeObj) || void 0 === RU ? void 0 : RU.type) ? this.items.inaccuracy : null
      }
      aliveHeld() {
        return !1 === this.api.isAlive(this.api.localId) ? null : this.items.WT()
      }
      isCrosshairShown() {
        var UU, RU;
        const gU = (0, GR.b)(tU.b.get("crosshairGameView"), tU.b.get("crosshairShownOverride"));
        if (null !== gU) return gU;
        const pU = null === (UU = this.aliveHeld()) || void 0 === UU ? void 0 : UU.typeObj,
          EU = "Gun" === (null === pU || void 0 === pU ? void 0 : pU.type),
          PU = EU || !0 === (null === pU || void 0 === pU ? void 0 : pU.showsAimingUi),
          TU = 0 === (CU.w.playerFlags(this.api.apiView, 0) & CU.Pd.ZoomFirstPerson),
          qU = null !== (RU = this.tables.getClientOption("gunshotOrigin")) && void 0 !== RU ? RU : null;
        return (0, GR.e)({
          gun: EU,
          aimable: PU
        }, TU, (0, jR.d)(), qU)
      }
      setCrosshairShown(UU) {
        tU.b.set({
          crosshairShownOverride: UU
        })
      }
      getInventoryFreeSlotCount(UU) {
        return this.isLocal(UU) ? this.items.freeSlots() : null
      }
      getSelectedInventorySlotI(UU) {
        return this.isLocal(UU) ? this.items.selectedSlot : null
      }
      getItemSlot(UU, RU) {
        return this.isLocal(UU) ? this.items.slot(RU) : null
      }
      swapInventorySlots(UU, RU) {
        return this.items.swap(UU, RU)
      }
      isPlayerCrouching(UU) {
        if (this.isLocal(UU)) return 0 !== (CU.w.playerFlags(this.api.apiView, 0) & CU.Pd.Crouching);
        const RU = pg(UU);
        return RU !== CU.dd && 1 === this.api.queries.entityCrouching(RU)
      }
      getMiningBlock() {
        return this.live.breakingPosition()
      }
      isMining() {
        return 0 !== (CU.w.playerFlags(this.api.apiView, 0) & CU.Pd.AttemptingBreak)
      }
      getTargetedBlock() {
        return this.live.N9()
      }
      getActionRay() {
        const UU = this.api.apiView;
        for (let RU = 0; RU < 3; RU++) NR.origin[RU] = CU.w.uUU(UU, 0, RU), NR.direction[RU] = CU.w.actionDir(UU, 0, RU);
        return NR
      }
      canModifyBlockAt(UU, RU, gU) {
        return 1 === this.api.queries.canModify(UU, RU, gU)
      }
      isSolidToPlayerBlockId(UU) {
        return this.tables.isSolidBlockId(UU) && !this.chunks.isWalkThrough(UU)
      }
      blockNameToBlockId(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.tables.blockNameToBlockId(UU, RU)
      }
      blockIdToBlockName(UU) {
        return this.tables.nameOfId(UU)
      }
      dUU(UU, RU, gU, tU, pU) {
        return 1 === this.api.queries.terrainBlocked(tU, UU, RU, gU, pg(null !== pU && void 0 !== pU ? pU : null))
      }
      getChunkVersion(UU, RU, gU) {
        return this.chunks.version(UU, RU, gU)
      }
      scanBlocks(UU, RU, gU, tU, pU, EU, PU, TU) {
        return this.chunks.scan(UU, RU, gU, tU, pU, EU, PU, TU)
      }
      isBlockInLoadedChunk(UU, RU, gU) {
        return this.chunks.isLoaded(UU, RU, gU)
      }
      getBlockId(UU, RU, gU) {
        return this.chunks.gc(UU, RU, gU)
      }
      playSound(UU, RU, gU, tU, pU) {
        let EU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (!this.isLocal(UU)) return null;
        const PU = this.playSoundFrom(RU, gU, pU, EU);
        return 1 === tU ? PU : PU.rate(tU)
      }
      playSoundFrom(UU, RU, gU, tU) {
        var pU, EU;
        const PU = this.deps.playSound;
        if (!PU) return nR.d;
        const TU = null === gU || void 0 === gU ? void 0 : gU.Xp,
          qU = null !== (pU = null === gU || void 0 === gU ? void 0 : gU.maxHearDist) && void 0 !== pU ? pU : cR.d,
          KU = null !== (EU = null === gU || void 0 === gU ? void 0 : gU.refDistance) && void 0 !== EU ? EU : cR.e;
        let cU = null;
        if (Array.isArray(TU)) zR[0] = TU[0], zR[1] = TU[1], zR[2] = TU[2], cU = zR;
        else if (void 0 !== TU && null !== TU) {
          const UU = pg(TU);
          if (!this.api.isLocal(UU)) {
            if (!this.api.readPosition(UU, zR)) return nR.d;
            cU = zR
          }
        }
        return PU(UU, RU, cU, cU && this.ear(), qU, KU, tU)
      }
      ear() {
        if (this.api.readPosition(this.api.localId, MR)) MR[1] += oR;
        else {
          const UU = this.api.apiView;
          if (0 === CU.w.viewProj(UU, 0, 3) && 0 === CU.w.viewProj(UU, 0, 7) && 0 === CU.w.viewProj(UU, 0, 11)) return null;
          for (let RU = 0; RU < 3; RU++) MR[RU] = CU.w.eye(UU, 0, RU)
        }
        return Number.isFinite(MR[0] + MR[1] + MR[2]) ? MR : null
      }
      setBlockId(UU, RU, gU, tU) {
        if (!Number.isInteger(tU) || tU < 0 || tU > 65535) throw new Error(`Invalid block id ${tU}`);
        if (!this.deps.beforeWrite() || !this.chunks.isLoaded(UU, RU, gU)) return;
        const pU = Math.floor(UU),
          EU = Math.floor(RU),
          PU = Math.floor(gU),
          TU = this.predictedCells(pU, EU, PU, tU);
        if (1 === this.api.queries.mw(pU, EU, PU, tU)) {
          for (let UU = 0; UU < TU.length; UU += 5) this.chunks.setOverlay(TU[UU], TU[UU + 1], TU[UU + 2], TU[UU + 3], 1 === TU[UU + 4]);
          this.live.refreshTarget()
        }
      }
      particlesEnabled() {
        return this.deps.particles.enabled()
      }
      createParticles(UU, RU) {
        return this.deps.particles.create(UU, RU)
      }
      playParticleEffect(UU) {
        this.deps.particles.playEffect(UU)
      }
      burstParticlePreset(UU, RU, gU) {
        this.deps.particles.burstPreset(UU, RU, gU)
      }
      createGameMesh(UU, RU, gU) {
        const tU = ++this.meshKeys,
          pU = this.deps.cmd();
        if (!pU) return tU;
        const {
          look: EU,
          colour: PU
        } = function(UU) {
          switch (UU.kind) {
            case void 0:
            case "flatEmissive":
              return UU.onTop ? {
                look: CU.Zb.FlatOnTop,
                colour: [...UU.rgb, UU.alpha]
              } : UU.opaque ? {
                look: CU.Zb.FlatOpaque,
                colour: [...UU.rgb, 1]
              } : {
                look: CU.Zb.Flat,
                colour: [...UU.rgb, UU.alpha]
              };
            case "chevronPath":
              return {
                look: CU.Zb.Chevrons, colour: [...(0, uR.d)(UU.colour), UU.alpha]
              };
            case "furnaceFire":
              return {
                look: CU.Zb.FurnaceFire, colour: [1, 1, 1, 1]
              }
          }
        }(RU), TU = Math.floor(UU.positions.length / 3), qU = function(UU, RU) {
          const gU = Math.floor(UU.positions.length / 3),
            tU = UU.indices.length,
            pU = gU * (RU ? 5 : 3),
            EU = new Uint8Array(4 * (pU + tU)),
            PU = new DataView(EU.buffer);
          for (let KU = 0; KU < 3 * gU; KU++) PU.setFloat32(4 * KU, UU.positions[KU], !0);
          if (RU) {
            var TU;
            const RU = null !== (TU = UU.uvs) && void 0 !== TU ? TU : [];
            for (let UU = 0; UU < 2 * gU; UU++) {
              var qU;
              PU.setFloat32(4 * (3 * gU + UU), null !== (qU = RU[UU]) && void 0 !== qU ? qU : 0, !0)
            }
          }
          for (let KU = 0; KU < tU; KU++) PU.setUint32(4 * (pU + KU), UU.indices[KU], !0);
          return EU
        }(UU, (0, qR.h)(RU));
        return (0, CU.Oe)(pU, 0, tU, EU, PU, gU, TU, UU.indices.length, qU) && this.liveMeshes.add(tU), tU
      }
      setGameMesh(UU, RU) {
        var gU;
        const tU = this.deps.cmd();
        if (!tU) return;
        let pU = 0;
        RU.anchor && (pU |= CU.bc.Anchor, lR[0] = RU.anchor[0], lR[1] = RU.anchor[1], lR[2] = RU.anchor[2]), void 0 !== RU.visible && (pU |= CU.bc.Visible), RU.uvOffset && (pU |= CU.bc.UvOffset, OR[0] = RU.uvOffset[0], OR[1] = RU.uvOffset[1]);
        const EU = null !== (gU = RU.visibility) && void 0 !== gU ? gU : 1;
        void 0 !== RU.visibility && (pU |= CU.bc.Visibility), RU.scale && (pU |= CU.bc.Scale, Ug[0] = RU.scale[0], Ug[1] = RU.scale[1], Ug[2] = RU.scale[2]), 0 !== pU && (0, CU.Te)(tU, 0, UU, pU, RU.visible ? 1 : 0, lR, OR, EU, Ug)
      }
      disposeGameMesh(UU) {
        const RU = this.deps.cmd();
        RU && !(0, CU.Qe)(RU, 0, UU) || this.liveMeshes.delete(UU)
      }
      hasPackModel(UU) {
        var RU, gU, tU;
        return null !== (RU = null === (gU = (tU = this.deps).hasPackModel) || void 0 === gU ? void 0 : gU.call(tU, UU)) && void 0 !== RU && RU
      }
      disposeGameOutput() {
        const UU = UU => {
          try {
            UU()
          } catch (RU) {
            console.error("Error freeing client game output", RU)
          }
        };
        for (const RU of [...this.liveMeshes]) UU((() => {
          this.disposeGameMesh(RU)
        }));
        for (const RU of [...this.livePools]) UU((() => {
          RU.dispose()
        }));
        UU((() => {
          this.mobModels.disposeAll()
        })), UU((() => {
          this.setGroundArrowStyle(null)
        })), UU((() => {
          this.setRouteChevrons(null), this.routeOffset = 0, this.routeLook = ""
        })), UU((() => {
          this.setCrosshairShown(null)
        })), UU((() => {
          this.cameraTurn.dispose()
        })), UU((() => {
          this.farSet && (this.farSet = !1, this.setCameraFar(null))
        }))
      }
      createInstancePool(UU, RU) {
        const gU = this.tables.idOf(UU.item);
        if (void 0 === gU) return null;
        const tU = new HR(++this.poolKeys, {
          item: gU,
          scale: UU.scale,
          yaw: UU.yaw
        }, RU, this.poolHost);
        return this.livePools.add(tU), tU
      }
      createMobModel(UU, RU) {
        return this.mobModels.create(UU, RU)
      }
      setRouteChevrons(UU) {
        if (0 !== this.routeMesh && (this.disposeGameMesh(this.routeMesh), this.routeMesh = 0), !UU || 0 === UU.cells.length) return;
        const RU = `${UU.colour} ${UU.alpha}`;
        RU !== this.routeLook && (this.routeLook = RU, this.routeOffset = 0), this.routeMesh = this.createGameMesh(function(UU) {
          const [RU, gU, tU] = UU[0].pos, pU = [], EU = [], PU = [];
          return UU.forEach(((UU, TU) => {
            let {
              pos: qU,
              way: [KU, cU]
            } = UU;
            const GU = qU[0] - RU + .5,
              jU = qU[1] - gU + .04,
              uU = qU[2] - tU + .5,
              [CU, hU] = [.35 * -cU, .35 * KU],
              [QU, eU] = [TU * Rg, (TU + 1) * Rg],
              WU = pU.length / 3;
            pU.push(GU - .5 * KU + CU, jU, uU - .5 * cU + hU), pU.push(GU - .5 * KU - CU, jU, uU - .5 * cU - hU), pU.push(GU + .5 * KU + CU, jU, uU + .5 * cU + hU), pU.push(GU + .5 * KU - CU, jU, uU + .5 * cU - hU), EU.push(0, QU, 1, QU, 0, eU, 1, eU), PU.push(WU, WU + 1, WU + 2, WU + 1, WU + 3, WU + 2)
          })), {
            positions: pU,
            uvs: EU,
            indices: PU
          }
        }(UU.cells), {
          kind: "chevronPath",
          colour: UU.colour,
          alpha: UU.alpha
        }, UU.cells[0].pos), this.setRouteSlide()
      }
      slideRoute(UU) {
        0 !== this.routeMesh && (this.routeOffset = (this.routeOffset + Math.min(UU, 250) / 1e3 * 1.2 * Rg) % 1, this.setRouteSlide())
      }
      setRouteSlide() {
        this.routeSlide.uvOffset[1] = -this.routeOffset, this.setGameMesh(this.routeMesh, this.routeSlide)
      }
      setGroundArrowStyle(UU) {
        this.pendingStyle = UU, this.flushOwed()
      }
      flushOwed() {
        this.mobModels.flush();
        const UU = this.owedFrees;
        if (0 === UU.length && void 0 === this.pendingStyle && void 0 === this.pendingFar) return;
        const RU = this.deps.cmd();
        if (!RU) return UU.length = 0, void(this.pendingFar = void 0);
        let gU = 0;
        for (; gU < UU.length && (0, CU.af)(RU, 0, UU[gU]);) gU++;
        UU.splice(0, gU);
        const tU = this.pendingStyle;
        if (void 0 !== tU) {
          (tU ? (0, CU.ag)(RU, 0, tU.width, tU.alpha, 1, tU.endAtSolidFace ? 1 : 0) : (0, CU.ag)(RU, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
        }
        const pU = this.pendingFar;
        void 0 !== pU && (0, CU.Uf)(RU, 0, null !== pU && void 0 !== pU ? pU : 0, null === pU ? 1 : 0) && (this.pendingFar = void 0)
      }
      setNametagOffset(UU, RU) {
        const gU = this.deps.cmd(),
          tU = pg(UU);
        gU && tU !== CU.dd && (0, CU.hg)(gU, 0, tU, RU)
      }
      setFacingTolerance(UU, RU) {
        const gU = this.deps.cmd(),
          tU = pg(UU);
        gU && tU !== CU.dd && Eg(gU, tU, RU)
      }
      forEachEntity(UU) {
        const {
          api: RU
        } = this;
        for (let gU = 0; gU < RU.idStr.length; gU++) {
          const tU = RU.idStr[gU];
          null === tU || mU(RU.kinds[gU]) || UU(tU)
        }
      }
      getEntityInfo(UU) {
        return this.deps.entityInfo.get(UU)
      }
      isEntityInteractable(UU) {
        const RU = pg(UU);
        return RU !== CU.dd && 1 === this.api.queries.entityInteractable(RU)
      }
      isLocalPlayer(UU) {
        return this.isLocal(UU)
      }
      getLineOwner(UU) {
        var RU;
        const gU = null === (RU = this.deps.entityInfo.get(UU)) || void 0 === RU ? void 0 : RU.meshOpts;
        if (!gU) return null;
        try {
          const {
            lineToEId: UU
          } = JSON.parse(gU);
          return null !== UU && void 0 !== UU ? UU : null
        } catch {
          return null
        }
      }
      getCameraPosition() {
        const UU = this.api.apiView;
        return LR[0] = CU.w.eye(UU, 0, 0), LR[1] = CU.w.eye(UU, 0, 1), LR[2] = CU.w.eye(UU, 0, 2), LR
      }
      getCameraFar() {
        return CU.w.cameraFar(this.api.apiView, 0)
      }
      setCameraFar(UU) {
        null !== UU && (this.farSet = !0), this.pendingFar = UU, this.flushOwed()
      }
      turnCamera(UU, RU) {
        this.cameraTurn.turn(UU, RU)
      }
      clearPickupDelay(UU) {
        const RU = this.deps.cmd(),
          gU = pg(UU);
        RU && gU !== CU.dd && (0, CU.ze)(RU, 0, gU)
      }
      sendChat(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const gU = this.deps.sendCmd();
        gU && FR(gU, 0, AR.e.Chat, (0, vU.d)((0, AR.k)({
          aP: UU,
          YP: RU
        })))
      }
      sendCommand(UU) {
        UU.length <= 119 && this.sendChat(`/${UU}`)
      }
      predictedCells(UU, RU, gU, tU) {
        const pU = this.chunks,
          EU = [],
          PU = (UU, RU, gU, tU, pU) => {
            EU.push(UU, RU, gU, tU, this.tables.blockRootId(pU) === this.tables.blockRootId(tU) ? 0 : 1)
          },
          TU = pU.gc(UU, RU, gU),
          qU = tg(TU);
        if (qU) {
          const [tU, EU, KU] = [UU - qU.x, RU - qU.y, gU - qU.z], cU = gg[pU.gc(tU, EU, KU)], GU = null === cU || void 0 === cU ? void 0 : cU.positions.some((UU => UU.id === TU && UU.x === qU.x && UU.y === qU.y && UU.z === qU.z));
          for (const UU of (GU && cU ? cU : qU.main).positions) pU.gc(tU + UU.x, EU + UU.y, KU + UU.z) === UU.id && PU(tU + UU.x, EU + UU.y, KU + UU.z, 0, UU.id)
        }
        const KU = tg(tU);
        if (KU)
          for (const GU of KU.main.positions) {
            const [tU, EU, TU] = [UU + GU.x - KU.x, RU + GU.y - KU.y, gU + GU.z - KU.z];
            PU(tU, EU, TU, GU.id, pU.gc(tU, EU, TU))
          } else PU(UU, RU, gU, tU, TU);
        const cU = this.tables;
        if ((0 !== cU.attachedTopOf(TU) || 0 !== cU.attachedTopOf(tU)) && pU.isLoaded(UU, RU + 1, gU)) {
          let qU = pU.gc(UU, RU + 1, gU);
          for (let tU = 0; tU < EU.length; tU += 5) EU[tU] === UU && EU[tU + 1] === RU + 1 && EU[tU + 2] === gU && (qU = EU[tU + 3]);
          const KU = this.attachedTopWrite(TU, tU, qU);
          void 0 !== KU && PU(UU, RU + 1, gU, KU, qU)
        }
        return EU
      }
      attachedTopWrite(UU, RU, gU) {
        const tU = this.tables,
          pU = tU.attachedTopOf(UU),
          EU = tU.attachedTopOf(RU),
          PU = 0 !== pU && 0 !== gU && tU.blockRootId(gU) === tU.blockRootId(pU);
        return 0 !== pU && 0 !== EU && tU.blockRootId(UU) === tU.blockRootId(RU) ? PU && gU !== EU ? EU : void 0 : 0 === EU || !PU && 0 !== gU ? PU ? 0 : void 0 : EU
      }
    }
    const Tg = CU.qc + CU.tc * CU.wc.BYTES,
      qg = 2147483647,
      Kg = new TextDecoder,
      cg = new TextEncoder,
      Gg = Object.freeze({
        Pc: 0,
        dc: null,
        amountAddedToSlot: 0
      }),
      jg = new Proxy({}, {
        get: () => () => CU.od
      });

    function ug(UU) {
      return Number.isInteger(UU) && UU >= 0 && UU <= 65535
    }

    function Cg(UU) {
      return Number.isInteger(UU) && UU >= 0 && UU <= 4294967295
    }
    class hg {
      constructor(UU) {
        this.deps = UU, this.iE = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(CU.tc), this.ids = new Uint16Array(CU.tc), this.amounts = new Uint16Array(CU.tc), this.attrRead = new Float64Array(CU.tc).fill(-1), this.stale = new Uint16Array(CU.tc), this.staleVersion = new Uint32Array(CU.tc), this.instances = new Uint32Array(CU.tc), this.viewPtr = 0, this.viewVersion = -1, this.len = 0, this.selected = 0, this.slotIconId = 0, this.stopped = !1, this.listeners = new Set
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
      slot(UU) {
        var RU;
        return Number.isInteger(UU) && UU >= 0 && UU < this.len && 0 !== this.ids[UU] && null !== (RU = this.facades[UU]) && void 0 !== RU ? RU : null
      }
      WT() {
        return this.slot(this.selected)
      }
      playerItems() {
        const UU = [];
        for (let RU = 0; RU < Math.min(CU.Bd, this.len); RU++) UU.push(this.slot(RU));
        return UU
      }
      freeSlots() {
        let UU = 0;
        for (let RU = 0; RU < Math.min(CU.Bd - CU.k, this.len); RU++) 0 === this.ids[RU] && UU++;
        return UU
      }
      amountOf(UU) {
        let RU = 0;
        for (let tU = 0; tU < Math.min(CU.Bd, this.len); tU++) {
          const pU = this.slot(tU);
          var gU;
          if ((null === pU || void 0 === pU ? void 0 : pU.name) === UU) RU += null !== (gU = pU.amount) && void 0 !== gU ? gU : 1
        }
        return RU
      }
      instance(UU) {
        var RU;
        return null !== (RU = this.instances[UU]) && void 0 !== RU ? RU : 0
      }
      watch(UU) {
        return this.listeners.add(UU), () => {
          this.listeners.delete(UU)
        }
      }
      touch() {
        this.version++
      }
      flush(UU) {
        if (this.version !== this.notified || this.iconChanged) {
          this.notified = this.version, this.iconChanged = !1;
          for (const gU of [...this.listeners]) try {
            gU()
          } catch (RU) {
            UU(RU)
          }
        }
      }
      chestOpened(UU, RU, gU) {
        this.iE[0] = UU, this.iE[1] = RU, this.iE[2] = gU, this.version++
      }
      refresh() {
        const UU = this.deps.api.apiView,
          RU = CU.w.inventoryViewPtr(UU, 0),
          gU = CU.w.inventoryVersion(UU, 0),
          tU = CU.w.selectedSlot(UU, 0);
        tU !== this.selected && (this.selected = tU, this.version++);
        const pU = CU.w.slotIcon(UU, 0);
        if (pU !== this.slotIconId && (this.slotIconId = pU, this.iconChanged = !0), RU === this.viewPtr && gU === this.viewVersion) return;
        this.viewPtr = RU, this.viewVersion = gU;
        const EU = this.deps.api.memoryData(RU, Tg, 4, "the inventory view"),
          PU = EU ? Math.min(EU.getUint32(0, !0), CU.tc) : 0;
        PU !== this.len && (this.len = PU, this.version++);
        let TU = 0;
        for (let qU = 0; qU < CU.tc; qU++) {
          const UU = CU.qc + qU * CU.wc.BYTES,
            RU = null !== EU && qU < PU ? CU.wc.item(EU, UU) : 0;
          if (0 === RU || null === EU) {
            0 !== this.ids[qU] && (this.ids[qU] = 0, this.attrRead[qU] = -1, this.instances[qU]++, this.version++);
            continue
          }
          const gU = CU.wc.amount(EU, UU),
            tU = CU.wc.attrVersion(EU, UU);
          RU === this.ids[qU] && gU === this.amounts[qU] || this.fill(qU, RU, gU), tU !== this.attrRead[qU] && (this.stale[TU] = qU, this.staleVersion[TU] = tU, TU++)
        }
        TU > 0 && this.fetchAttributes(TU)
      }
      fill(UU, RU, gU) {
        const {
          tables: tU
        } = this.deps, pU = RU !== this.ids[UU];
        let EU = this.facades[UU];
        EU || (EU = {
          name: "",
          amount: null,
          attributes: {
            customAttributes: {}
          },
          typeObj: null
        }, this.facades[UU] = EU), pU && (EU.name = tU.nameOfId(RU), EU.typeObj = tU.itemType(RU), EU.attributes = {
          customAttributes: {}
        }, this.attrRead[UU] = -1, this.instances[UU]++), EU.amount = 0 === gU ? null : gU, this.ids[UU] = RU, this.amounts[UU] = gU, this.version++
      }
      fetchAttributes(UU) {
        const {
          api: RU,
          onError: gU
        } = this.deps, tU = RU.memoryView(Uint16Array, RU.scratch(), UU, "item_attributes_batch's slots");
        if (!tU) return void this.markRead(UU);
        tU.set(this.stale.subarray(0, UU));
        const pU = RU.queries.itemAttributesBatch(UU),
          EU = 4294967295 === pU ? null : RU.memoryData(RU.scratch(), pU, 4, "item_attributes_batch's answer");
        if (!EU) return void this.markRead(UU);
        const PU = new Uint8Array(EU.buffer, EU.byteOffset, pU);
        for (let qU = 0; qU + 8 <= pU;) {
          const UU = EU.getUint16(qU, !0),
            RU = EU.getUint32(qU + 4, !0),
            tU = PU.subarray(qU + 8, qU + 8 + RU);
          qU += 8 + (0, jU.te)(RU);
          const pU = this.facades[UU];
          if (pU && 0 !== this.ids[UU] && 0 !== RU) {
            try {
              pU.attributes = JSON.parse(Kg.decode(tU))
            } catch (TU) {
              gU(TU)
            }
            this.version++
          }
        }
        this.markRead(UU)
      }
      markRead(UU) {
        for (let RU = 0; RU < UU; RU++) this.attrRead[this.stale[RU]] = this.staleVersion[RU]
      }
      swap(UU, RU) {
        return ug(UU) && ug(RU) && this.settle(this.queries().invSwap(UU, RU))
      }
      move(UU, RU, gU) {
        return ug(UU) && ug(RU) && Cg(gU) && this.settle(this.queries().invMove(UU, RU, gU))
      }
      quickMove(UU, RU, gU, tU) {
        var pU, EU;
        if (!ug(UU) || !ug(RU) || !ug(gU) || null !== tU && !Cg(tU)) return null;
        const PU = this.queries().invQuickMove(UU, RU, gU, null === tU ? -1 : Math.min(tU, qg)),
          TU = PU === CU.od ? CU.Hb : null !== (pU = null === (EU = this.extras()) || void 0 === EU ? void 0 : EU[1]) && void 0 !== pU ? pU : CU.Hb;
        return this.settle(PU), TU === CU.Hb ? null : TU
      }
      remove(UU, RU, gU) {
        return ug(UU) && Cg(RU) && this.settle(this.queries().invRemove(UU, RU, gU ? 1 : 0))
      }
      selectSlot(UU) {
        return ug(UU) && this.settle(this.queries().selectSlot(UU))
      }
      closeChest() {
        return this.settle(this.queries().closeChest())
      }
      enchant(UU, RU, gU) {
        if (!ug(UU) || !Number.isInteger(RU)) return !1;
        const [tU, pU, EU] = gU;
        return this.settle(this.queries().invEnchant(UU, RU, Math.floor(tU), Math.floor(pU), Math.floor(EU)))
      }
      craft(UU, RU, gU) {
        let tU;
        try {
          tU = this.deps.tables.getItemId(UU)
        } catch {
          return Gg
        }
        if (!ug(RU) || null !== gU && (Number.isNaN(gU) || gU < 0)) return Gg;
        const pU = null === gU || gU > qg ? -1 : Math.floor(gU),
          EU = this.queries().craft(tU, RU, pU);
        let PU = Gg;
        const TU = EU === CU.od ? null : this.extras();
        if (TU) {
          const [UU, RU, gU] = TU;
          PU = {
            Pc: UU,
            dc: RU === CU.Hb ? null : RU,
            amountAddedToSlot: gU
          }
        }
        return this.settle(EU), PU
      }
      salvage(UU, RU, gU) {
        let tU;
        try {
          tU = this.deps.tables.getItemId(RU)
        } catch {
          return !1
        }
        return ug(UU) && Number.isInteger(gU) && this.settle(this.queries().salvage(UU, tU, Math.max(Math.min(gU, qg), -qg)))
      }
      craftingView(UU, RU, gU) {
        var tU;
        if (this.stopped) return null;
        const {
          api: pU,
          onError: EU
        } = this.deps, PU = UU ? cg.encode(UU) : null;
        if (null !== PU) {
          if (PU.length > 1024) return EU(new Error(`The crafting station ${UU}'s name is over 1024 bytes`)), null;
          const RU = pU.memoryView(Uint8Array, pU.scratch(), PU.length, "crafting_view's station");
          if (!RU) return null;
          RU.set(PU)
        }
        const TU = ug(RU) && ug(gU),
          qU = pU.queries.craftingView(null !== (tU = null === PU || void 0 === PU ? void 0 : PU.length) && void 0 !== tU ? tU : 0, TU ? RU : 0, TU ? gU : 0);
        return qU < CU.pb.BYTES ? (pU.reportCorruption(`crafting_view's answer of ${qU} bytes`), null) : pU.memoryData(pU.scratch(), qU, 1, "crafting_view's answer")
      }
      queries() {
        var UU, RU;
        return !1 === (null === (UU = (RU = this.deps).beforeOp) || void 0 === UU ? void 0 : UU.call(RU)) ? (this.stopped = !0, jg) : this.deps.api.queries
      }
      extras() {
        const {
          api: UU
        } = this.deps;
        return UU.memoryView(Uint32Array, UU.scratch(), 3, "a sync query's extra words")
      }
      settle(UU) {
        if (UU === CU.kd)(0, kR.d)();
        else if (UU !== CU.od) {
          const RU = this.deps.cmd();
          RU && function(UU, RU, gU) {
            return (0, kR.d)(), (0, CU.sg)(UU, RU, gU)
          }(RU, 0, UU) || this.deps.onError(new Error(`Sync op ${UU}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
        }
        return this.stopped || this.refresh(), UU !== CU.od
      }
    }
    const Qg = 1 / .6,
      eg = [0, 1, 0],
      Wg = [0, 0, 0],
      fg = new Uint8Array(0),
      xg = 1.2 * CR.e.dW,
      mg = new TextEncoder,
      Ig = [0, 0, 0],
      Jg = [0, 0, 0],
      wg = new Map;

    function ng(UU) {
      let RU = wg.get(UU);
      return RU || (wg.size >= 64 && wg.clear(), RU = mg.encode(`{"emitRate":${UU}}`), wg.set(UU, RU)), RU
    }

    function bg(UU) {
      return Number.isFinite(UU) && UU > 0 ? UU : 0
    }

    function og(UU, RU) {
      for (let gU = 0; gU < 3; gU++) {
        const tU = Math.abs(RU[gU]);
        Ig[gU] = UU[gU] - tU, Jg[gU] = 2 * tU
      }
      return Number.isFinite(Ig[0] + Ig[1] + Ig[2] + Jg[0] + Jg[1] + Jg[2])
    }

    function Zg(UU, RU) {
      return "pos1" === UU || "pos2" === UU ? void 0 : RU
    }

    function ag(UU, RU, gU) {
      return UU.length > CU.Ld.MaxOpts ? (gU(new Error(`${RU}'s particle opts are over ${CU.Ld.MaxOpts} bytes of JSON`)), null) : UU
    }
    const Yg = {
      moveTo() {},
      setEmitRate() {},
      emit() {},
      emitPoints() {},
      setDirections() {},
      stop() {},
      dispose() {}
    };
    class Bg {
      constructor(UU) {
        this.deps = UU, this.session = 0, this.nextKey = 1, this.live = 0, this.started = !1
      }
      enabled() {
        return null !== this.sink()
      }
      sink() {
        return this.deps.isSessionLive() ? this.deps.cmd() : null
      }
      create(UU, RU) {
        var gU;
        const tU = this.sink(),
          pU = null !== (gU = RU.half) && void 0 !== gU ? gU : Wg;
        if (!tU || this.live >= CU.Ld.MaxLiveKeys || this.nextKey > CU.Ld.MaxKey || !og(RU.pos, pU)) return Yg;
        const EU = this.nextKey,
          PU = ag(function(UU) {
            var RU, gU, tU;
            const pU = JSON.stringify({
              texture: "string" === typeof UU.texture ? UU.texture : "smokePuff",
              hG: UU.hG,
              minLifeTime: UU.minLifeTime,
              maxLifeTime: UU.maxLifeTime,
              minSize: UU.minSize,
              maxSize: UU.maxSize,
              minEmitPower: UU.minEmitPower,
              maxEmitPower: UU.maxEmitPower,
              emitRate: bg(UU.emitRate),
              gravity: null !== (RU = UU.gravity) && void 0 !== RU ? RU : Wg,
              dir1: null !== (gU = UU.dir1) && void 0 !== gU ? gU : eg,
              dir2: null !== (tU = UU.dir2) && void 0 !== tU ? tU : eg,
              colorGradients: UU.colorGradients,
              blendMode: UU.blendMode
            });
            return mg.encode(pU)
          }(UU), "createParticles", this.deps.onError);
        return PU && (0, CU.tf)(tU, 0, EU, 0, CU.Ld.PresetNone, 0, Ig, Jg, PU) ? (this.nextKey++, this.live++, this.started = !0, new Vg(this, this.session, EU, UU, pU)) : Yg
      }
      playEffect(UU) {
        const RU = this.sink(),
          {
            pos1: gU,
            pos2: tU
          } = UU;
        if (!RU || !gU || !tU) return;
        for (let EU = 0; EU < 3; EU++) Ig[EU] = Math.min(gU[EU], tU[EU]), Jg[EU] = Math.abs(tU[EU] - gU[EU]);
        if (!Number.isFinite(Ig[0] + Ig[1] + Ig[2] + Jg[0] + Jg[1] + Jg[2])) return;
        const pU = ag(mg.encode(JSON.stringify(UU, Zg)), "playParticleEffect", this.deps.onError);
        pU && (0, CU.pf)(RU, 0, 0, CU.Ld.PresetNone, CU.Ld.HasBox, 0, Ig, Jg, pU)
      }
      burstPreset(UU, RU, gU) {
        const tU = this.sink(),
          pU = Math.min(Math.floor(gU), CU.Ld.MaxBurst);
        if (!tU || !Object.hasOwn(CU.dc, UU) || !(pU > 0)) return;
        const EU = xg;
        for (let PU = 0; PU < 3; PU++) Ig[PU] = RU[PU] - EU / 2, Jg[PU] = EU;
        Number.isFinite(Ig[0] + Ig[1] + Ig[2]) && (0, CU.pf)(tU, 0, 0, CU.dc[UU], CU.Ld.HasBox, pU, Ig, Jg, fg)
      }
      sessionEnded() {
        this.session++;
        const UU = this.started ? this.deps.cmd() : null;
        return this.started = !1, this.nextKey = 1, this.live = 0, !UU || (0, CU.uf)(UU, 0)
      }
      sinkFor(UU) {
        return UU === this.session ? this.deps.cmd() : null
      }
      stop(UU, RU) {
        const gU = this.sinkFor(UU);
        gU && (0, CU.yf)(gU, 0, RU) && this.live--
      }
    }
    class Vg {
      constructor(UU, RU, gU, tU, pU) {
        this.owner = UU, this.session = RU, this.key = gU, this.half = void 0, this.rate = void 0, this.stopDelayMs = void 0, this.emitted = void 0, this.stopped = !1, this.freed = !1, this.half = [Math.abs(pU[0]), Math.abs(pU[1]), Math.abs(pU[2])], this.rate = bg(tU.emitRate), this.emitted = this.rate > 0;
        const EU = tU.maxLifeTime * Qg * 1e3 + 250;
        this.stopDelayMs = EU >= 0 ? Math.min(EU, 2147483647) : 250
      }
      sink() {
        return this.stopped ? null : this.owner.sinkFor(this.session)
      }
      moveTo(UU, RU) {
        const gU = this.sink();
        if (gU) {
          if (RU)
            for (let UU = 0; UU < 3; UU++) this.half[UU] = Math.abs(RU[UU]);
          og(UU, this.half) && (0, CU.Cf)(gU, 0, this.key, CU.Ld.HasBox, Ig, Jg, fg)
        }
      }
      setEmitRate(UU) {
        const RU = this.sink(),
          gU = bg(UU);
        RU && gU !== this.rate && (0, CU.Cf)(RU, 0, this.key, 0, Wg, Wg, ng(gU)) && (this.rate = gU, this.emitted ||= gU > 0)
      }
      emit(UU) {
        const RU = this.sink(),
          gU = Math.min(Math.floor(UU), CU.Ld.MaxBurst);
        RU && gU > 0 && (0, CU.pf)(RU, 0, this.key, CU.Ld.PresetNone, 0, gU, Wg, Wg, fg) && (this.emitted = !0)
      }
      emitPoints(UU, RU, gU) {
        const tU = this.sink(),
          pU = Math.min(Math.floor(gU), CU.Ld.MaxPoints, Math.floor(RU.length / 4));
        if (!tU || !(pU > 0) || !Number.isFinite(UU[0] + UU[1] + UU[2])) return;
        const EU = new Uint8Array(RU.buffer, RU.byteOffset, pU * CU.Ld.PointBytes);
        (0, CU.sf)(tU, 0, this.key, pU, UU, EU) && (this.emitted = !0)
      }
      setDirections(UU, RU) {
        const gU = this.sink();
        if (!gU || !Number.isFinite(UU[0] + UU[1] + UU[2] + RU[0] + RU[1] + RU[2])) return;
        const tU = mg.encode(JSON.stringify({
          dir1: [UU[0], UU[1], UU[2]],
          dir2: [RU[0], RU[1], RU[2]]
        }));
        (0, CU.Cf)(gU, 0, this.key, 0, Wg, Wg, tU)
      }
      stop() {
        const UU = this.sink();
        this.stopped = !0, UU && (this.emitted ? (this.rate > 0 && (0, CU.Cf)(UU, 0, this.key, 0, Wg, Wg, ng(0)), setTimeout((() => {
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
    const rg = SR.l,
      Xg = new TextDecoder;

    function vg(UU, RU) {
      const {
        serverIds: gU,
        kinds: tU
      } = UU;
      let pU = 0;
      for (let EU = 0; EU < gU.length; EU++) {
        const UU = gU[EU];
        if (UU !== CU.dd && !mU(tU[EU])) {
          if (pU === RU.length) {
            const UU = new Int32Array(Math.max(64, 2 * pU));
            UU.set(RU), RU = UU
          }
          RU[pU++] = UU
        }
      }
      return {
        ids: RU,
        count: pU
      }
    }

    function dg(UU, RU) {
      return UU.length >= RU ? UU : new Int32Array(Math.max(RU, 2 * UU.length))
    }

    function Hg(UU, RU, gU, tU) {
      for (let pU = 0; pU < gU; pU += 4096) {
        const EU = Math.min(4096, gU - pU),
          PU = UU.memoryView(Int32Array, UU.scratch(), EU, "entity_info_batch's ids");
        if (!PU) return !1;
        PU.set(RU.subarray(pU, pU + EU));
        const TU = UU.queries.entityInfoBatch(EU),
          qU = 4294967295 === TU ? null : UU.memoryData(UU.scratch(), TU, 4, "entity_info_batch's records");
        if (!qU) return !1;
        for (let UU = 0; UU + CU.Pb.BYTES <= TU;) {
          const RU = CU.Pb.len(qU, UU);
          tU(CU.Pb.serverId(qU, UU), Sg(qU, UU, RU)), UU += CU.Pb.BYTES + (0, jU.te)(RU)
        }
      }
      return !0
    }

    function Sg(UU, RU, gU) {
      var tU, pU, EU;
      const PU = CU.Pb.kind(UU, RU),
        TU = 0 === PU ? null : IU(PU);
      if (null === TU) return null;
      const qU = CU.Pb.variation(UU, RU),
        KU = CU.Pb.pose(UU, RU),
        cU = CU.Pb.meta(UU, RU),
        GU = CU.Pb.mesh(UU, RU),
        jU = 0 !== (CU.Pb.flags(UU, RU) & CU.Mb.HasOpts),
        uU = rg[TU];
      return Object.freeze({
        type: TU,
        variation: qU === CU.gd ? void 0 : null !== (tU = null !== (pU = null === uU || void 0 === uU ? void 0 : uU[qU]) && void 0 !== pU ? pU : null === uU || void 0 === uU ? void 0 : uU[0]) && void 0 !== tU ? tU : "default",
        pose: KU === CU.mc ? void 0 : null !== (EU = CU.Db[KU]) && void 0 !== EU ? EU : CU.Db[0],
        metaInfo: cU === CU.mc ? void 0 : CU.Vc[cU],
        meshKind: GU === CU.mc ? void 0 : CU.Rc[GU],
        meshOpts: jU ? Xg.decode(new Uint8Array(UU.buffer, UU.byteOffset + RU + CU.Pb.BYTES, gU)) : void 0
      })
    }
    const sg = 1,
      yg = 2;
    class kg {
      constructor(UU) {
        this.deps = UU, this.wanted = 0, this.WT = !1, this.refused = !1
      }
      get on() {
        return this.WT
      }
      want(UU, RU) {
        this.wanted = RU ? this.wanted | UU : this.wanted & ~UU;
        const gU = 0 !== this.wanted;
        if (gU === this.WT) return;
        const tU = this.deps.cmd();
        null !== tU ? (0, CU.yg)(tU, 0, gU ? 1 : 0) ? (this.WT = gU, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.WT = !1
      }
    }
    class Fg {
      constructor(UU) {
        this.deps = UU, this.entries = new Map, this.complete = !1, this.refill = !1, this.midFrame = !1, this.pending = new Int32Array(64), this.pendingCount = 0, this.ids = new Int32Array(64)
      }
      get(UU) {
        var RU;
        return this.complete || this.fill(), null !== (RU = this.entries.get("string" === typeof UU ? UU : String(UU))) && void 0 !== RU ? RU : null
      }
      inCoreCall() {
        this.midFrame = !0
      }
      stale(UU) {
        if (this.complete) {
          if (this.pendingCount === this.pending.length) {
            const UU = new Int32Array(2 * this.pending.length);
            UU.set(this.pending), this.pending = UU
          }
          this.pending[this.pendingCount++] = UU
        }
      }
      removed(UU) {
        this.entries.size > 0 && this.entries.delete(String(UU))
      }
      refresh() {
        const UU = this.pendingCount;
        if (this.pendingCount = 0, this.midFrame = !1, !this.deps.watch.on || this.refill) return this.complete = !1, void(this.refill = !1);
        if (UU > 0 && this.complete) {
          const {
            api: RU
          } = this.deps;
          let gU = 0;
          const tU = this.ids = dg(this.ids, UU);
          for (let pU = 0; pU < UU; pU++) {
            const UU = this.pending[pU],
              EU = RU.indexById.get(UU);
            void 0 === EU || mU(RU.kinds[EU]) ? this.entries.delete(String(UU)) : tU[gU++] = UU
          }
          gU > 0 && !this.batch(tU, gU) && (this.complete = !1)
        }
      }
      sessionEnded() {
        this.entries.clear(), this.complete = !1, this.refill = !1, this.midFrame = !1, this.pendingCount = 0, this.deps.watch.want(sg, !1)
      }
      fill() {
        const {
          api: UU
        } = this.deps;
        if (this.complete = !0, this.pendingCount = 0, this.entries.clear(), this.deps.isSessionLive()) {
          const {
            watch: UU
          } = this.deps, RU = UU.on;
          UU.want(sg, !0), !RU && UU.on && (this.refill = this.midFrame)
        }
        const {
          ids: RU,
          count: gU
        } = vg(UU, this.ids);
        this.ids = RU, gU > 0 && !this.batch(RU, gU) && (this.refill = !0)
      }
      batch(UU, RU) {
        return Hg(this.deps.api, UU, RU, ((UU, RU) => {
          null === RU ? this.entries.delete(String(UU)) : this.entries.set(String(UU), RU)
        }))
      }
    }
    var ig = gU(4456);

    function Ag(UU) {
      if ("message" !== UU.type || UU.aP !== ig.dc.NewClientOptions || UU.payloadKind !== jU.kc.Msgpack) return null;
      const RU = (0, vU.b)(UU.payload);
      if (null === RU || "object" !== typeof RU || Array.isArray(RU)) throw new Error("NewClientOptions whose body isn't an object of options");
      return RU
    }
    var zg = gU(1238),
      Mg = gU(36209);

    function Dg(UU, RU, gU, tU, pU, EU, TU) {
      var qU, KU, cU;
      switch (UU) {
        case CU.ke.ToggleMenu: {
          const UU = CU.N[RU];
          PU.p.yh("toggleMenu", void 0 === UU ? "inventory" : `inventory|${UU}`);
          break
        }
        case CU.ke.EditBoard:
          PU.p.yh("EditBoard", {
            pos: 0 === RU ? null : gU
          });
          break;
        case CU.ke.EditCodeBlock:
        case CU.ke.ViewCodeBlock:
          PU.p.yh("EditCodeBlock", {
            pos: gU,
            canChangePos: UU === CU.ke.EditCodeBlock
          });
          break;
        case CU.ke.EditCustomLobbyBlock:
          PU.p.yh("EditCustomLobbyBlock", {
            pos: gU
          });
          break;
        case CU.ke.OpenIronChest:
          PU.p.yh("OpenIronChest", {
            pos: gU
          });
          break;
        case CU.ke.EditNameTag:
          PU.p.yh("EditNameTag", null !== (qU = null === (KU = pU.WT()) || void 0 === KU || null === (cU = KU.attributes.customAttributes) || void 0 === cU ? void 0 : cU.text) && void 0 !== qU ? qU : "");
          break;
        case CU.ke.EditBook: {
          var GU, jU, hU;
          const UU = null === (GU = pU.WT()) || void 0 === GU ? void 0 : GU.attributes;
          PU.p.yh("EditBook", {
            pages: (0, zg.Q)(null === UU || void 0 === UU || null === (jU = UU.customAttributes) || void 0 === jU ? void 0 : jU.pages),
            title: null !== (hU = null === UU || void 0 === UU ? void 0 : UU.customDisplayName) && void 0 !== hU ? hU : "Title",
            isPublished: !(null === UU || void 0 === UU || !UU.customDescription)
          });
          break
        }
        case CU.ke.CantChangeBlock:
          ! function(UU, RU) {
            const gU = RU.getClientOption("cantChangeError"),
              tU = RU.getClientOption(UU ? "cantBuildError" : "cantBreakError"),
              pU = UU ? gU : tU;
            (RU.getClientOption("canChange") || pU || "You cannot modify this block" !== gU) && PU.p.yh("showBottomMessage", {
              message: tU || gU,
              type: "Error"
            })
          }(1 === RU, EU);
          break;
        case CU.ke.MiddleBarStart:
          PU.p.yh("middleScreenBarInitiate", {
            duration: tU,
            Ut: 1 === gU[0],
            horizBarRemOffset: RU
          });
          break;
        case CU.ke.MiddleBarStop:
          PU.p.yh("middleScreenBarRemove");
          break;
        case CU.ke.Hitmarker:
          PU.p.yh("localGunHitmarker", {
            DR: 1 === RU
          });
          break;
        case CU.ke.ShotsLeft:
          PU.p.yh("localPlayerNewShotsLeft", tU);
          break;
        case CU.ke.AimingOverlay:
          PU.p.yh("aimingOverlay", 3 === (3 & RU) ? "sniper" : "none");
          break;
        case CU.ke.BottomMessage:
          PU.p.yh("showBottomMessage", JSON.parse(TU()));
          break;
        case CU.ke.Crosshair:
          pU.inaccuracy = (0, dU.h)(tU), (0, Mg.c)().crosshairAccuracy(pU.inaccuracy);
          break;
        case CU.ke.ChargeStage:
          break;
        case CU.ke.EmoteWheelClose:
          PU.p.yh("requestEmoteWheelClose");
          break;
        case CU.ke.BlockMined:
          PU.p.yh("localBlockMined");
          break;
        default:
          throw new uU.d(`UiEvent of no kind: what ${UU}`)
      }
    }
    var Lg = gU(37534),
      Ng = gU(8994),
      lg = gU(1829),
      Og = gU(36337),
      Ut = gU(9009),
      Rt = gU(4443);
    const gt = 10,
      tt = {
        player: [],
        chestOrCreative: [],
        chest: null,
        creative: !1,
        selectedSlot: 0,
        freeSlots: 0
      },
      pt = {
        items: [],
        ammo: 0,
        selectedSlot: 0
      },
      Et = {
        gun: !1,
        aimable: !1,
        chargeName: null
      };

    function Pt(UU, RU) {
      let gU, tU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        pU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      const EU = () => (gU = (0, lg.r)(gU, RU()), gU);
      return {
        current: EU,
        watch(RU) {
          const gU = () => {
              RU(EU())
            },
            PU = [UU.watch(gU)];
          return null !== tU && PU.push((0, lg.s)((UU => {
            UU.some(tU) && gU()
          }))), null !== pU && PU.push(pU(gU)), () => {
            for (const UU of PU) UU()
          }
        }
      }
    }

    function Tt(UU) {
      return UU && {
        name: UU.name,
        amount: UU.amount,
        attributes: UU.attributes
      }
    }
    const qt = new WeakMap;

    function Kt(UU) {
      let RU = qt.get(UU);
      return void 0 === RU && (RU = (0, Ut.creativeItemIds)().map((RU => ({
        name: UU.nameOfId(RU),
        amount: UU.isStackableId(RU) ? 1 : null,
        attributes: (0, Lg.e)("Gun" === (0, Ut.itemTypeOf)(RU) ? {
          type: "Gun",
          clipSize: (0, Ut.clipSizeOf)(RU)
        } : void 0)
      }))), qt.set(UU, RU)), RU
    }

    function ct(UU, RU, gU, tU) {
      const pU = RU => (UU.flush(tU), RU),
        EU = gU => {
          var tU, pU, EU, PU, TU, qU, KU;
          const cU = UU.slot(gU);
          if (!cU) return null;
          const {
            rootName: GU,
            metaStr: jU
          } = RU.getMetaInfo(cU.name);
          return {
            name: cU.name,
            amount: cU.amount,
            attributes: cU.attributes,
            instance: UU.instance(gU),
            displayName: null !== (tU = cU.attributes.customDisplayName) && void 0 !== tU ? tU : RU.getDisplayName(GU),
            requiresAmmo: "RequiresAmmo" === jU,
            clipSize: null !== (pU = null !== (EU = null === (PU = cU.attributes.customAttributes) || void 0 === PU || null === (TU = PU.gunStats) || void 0 === TU ? void 0 : TU.clipSize) && void 0 !== EU ? EU : null === (qU = RU.getGunStats(GU)) || void 0 === qU ? void 0 : qU.clipSize) && void 0 !== pU ? pU : null === (KU = cU.typeObj) || void 0 === KU ? void 0 : KU.clipSize
          }
        },
        TU = function(UU, RU) {
          let gU = null,
            tU = {
              focus: null,
              recipes: [],
              detail: null
            },
            pU = -1;
          const EU = new Set;
          return {
            read() {
              var EU, PU;
              if (null === gU) return null !== tU.focus && (tU = {
                ...tU,
                focus: null
              }), tU;
              if (tU.focus === gU && pU === UU.changes) return tU;
              if (pU = UU.changes, 0 === UU.length) return tU = {
                focus: gU,
                recipes: [],
                detail: null
              }, tU;
              let TU = 0;
              if (null !== gU.recipe) try {
                TU = RU.getItemId(gU.recipe.name)
              } catch {}
              const qU = UU.craftingView(gU.station, TU, null !== (EU = null === (PU = gU.recipe) || void 0 === PU ? void 0 : PU.Ec) && void 0 !== EU ? EU : 0);
              return tU = null === qU ? {
                focus: gU,
                recipes: [],
                detail: null
              } : function(UU, RU, gU) {
                let tU = CU.pb.BYTES;
                const pU = [];
                for (let cU = CU.pb.recipes(UU, 0); cU > 0; cU--) {
                  const gU = CU.jb.flags(UU, tU),
                    EU = {
                      name: RU.nameOfId(CU.jb.item(UU, tU)),
                      Ec: CU.jb.recipe(UU, tU),
                      requires: [],
                      produces: CU.jb.produces(UU, tU),
                      haveIngredients: 0 !== (gU & CU.fb.HaveIngredients),
                      listed: 0 !== (gU & CU.fb.Listed)
                    };
                  let PU = CU.jb.requires(UU, tU);
                  for (tU += CU.jb.BYTES; PU > 0; PU--) {
                    const gU = CU.mb.items(UU, tU);
                    EU.requires.push({
                      items: ut(UU, tU + CU.mb.BYTES, gU, RU),
                      amt: CU.mb.amount(UU, tU)
                    }), tU += CU.mb.BYTES + 2 * gU
                  }
                  pU.push(EU)
                }
                const EU = CU.pb.flags(UU, 0);
                if (null === gU.recipe || 0 === (EU & CU.ob.Detail)) return {
                  focus: gU,
                  recipes: pU,
                  detail: null
                };
                const PU = {},
                  TU = {};
                for (let cU = CU.pb.ingredients(UU, 0); cU > 0; cU--) {
                  const gU = CU.bb.item(UU, tU),
                    pU = CU.bb.from(UU, tU),
                    EU = CU.bb.amount(UU, tU);
                  tU += CU.bb.BYTES;
                  const qU = pU === CU.J ? null : ut(UU, tU, pU, RU);
                  if (null !== qU && (tU += 2 * pU), 0 === gU) continue;
                  const KU = RU.nameOfId(gU);
                  PU[KU] = EU, null !== qU && (TU[KU] = qU)
                }
                const {
                  name: qU,
                  Ec: KU
                } = gU.recipe;
                return {
                  focus: gU,
                  recipes: pU,
                  detail: {
                    name: qU,
                    Ec: KU,
                    craftAllTimes: CU.pb.craftAllTimes(UU, 0),
                    roomForOne: 0 !== (EU & CU.ob.RoomForOne),
                    resultStackable: Boolean(RU.getItemStat(qU, "stackable")),
                    amounts: PU,
                    ingredientsCraftedFrom: TU
                  }
                }
              }(qU, RU, gU), tU
            },
            setFocus(UU) {
              gU = UU;
              for (const RU of [...EU]) RU()
            },
            watchFocus: UU => (EU.add(UU), () => {
              EU.delete(UU)
            })
          }
        }(UU, RU);
      return {
        states: {
          inventory: Pt(UU, (() => {
            const gU = UU.length;
            if (0 === gU) return tt;
            const tU = [];
            for (let RU = 0; RU < CU.Bd; RU++) tU.push(Tt(UU.slot(RU)));
            const pU = UU.slotIcon,
              EU = tU[UU.selectedSlot];
            0 !== pU && EU && (tU[UU.selectedSlot] = {
              ...EU,
              icon: RU.nameOfId(pU)
            });
            const PU = !0 === RU.getClientOption("creative");
            let TU = [],
              qU = null;
            if (gU > CU.Bd) {
              for (let RU = CU.Bd; RU < gU; RU++) TU.push(Tt(UU.slot(RU)));
              qU = {
                type: null,
                pos: [...UU.iE],
                numSlots: gU - CU.Bd,
                ironChest: null
              }
            } else PU && (TU = Kt(RU));
            return {
              player: tU,
              chestOrCreative: TU,
              chest: qU,
              creative: PU,
              selectedSlot: UU.selectedSlot,
              freeSlots: UU.freeSlots()
            }
          }), (0, lg.k)("creative")),
          hotbar: Pt(UU, (() => {
            if (0 === UU.length) return pt;
            const RU = [];
            for (let UU = 0; UU < gt; UU++) RU.push(EU(UU));
            return {
              items: RU,
              ammo: UU.amountOf("Ammo"),
              selectedSlot: UU.selectedSlot
            }
          }), (0, lg.i)("DisplayName", "GunStats")),
          crafting: Pt(UU, TU.read, null, TU.watchFocus),
          heldItemAim: Pt(UU, (() => {
            var RU;
            if (!gU()) return Et;
            const tU = null === (RU = UU.WT()) || void 0 === RU ? void 0 : RU.typeObj,
              pU = "Gun" === (null === tU || void 0 === tU ? void 0 : tU.type);
            return {
              gun: pU,
              aimable: pU || !0 === (null === tU || void 0 === tU ? void 0 : tU.showsAimingUi),
              chargeName: "Chargeable" === (null === tU || void 0 === tU ? void 0 : tU.type) ? tU.name : null
            }
          }), null, (UU => function(UU, RU) {
            let gU = UU();
            return (0, Rt.x)((() => {
              const tU = UU();
              tU !== gU && (gU = tU, RU(tU))
            }))
          }(gU, UU)))
        },
        events: {
          hotbarSlotRequested: (0, lg.b)("setSelectedInventorySlotI"),
          hotbarScrolled: (0, lg.b)("ScrollInventorySlot"),
          numberKeyPressed: (0, lg.b)("numkeyPressed"),
          inventoryDropRequested: (0, lg.b)("DropInvenItem"),
          chestToggled: (0, lg.b)("chestToggleFromServer"),
          chestRefreshed: (0, lg.b)("chestRefreshedFromServer", jt),
          inventorySynced: (0, lg.b)("syncedInvenFromServer", jt),
          enchantingTableOpened: (0, lg.b)("enchantingTable", (UU => {
            let {
              position: gU,
              gc: tU
            } = UU;
            return {
              position: [...gU],
              blockName: RU.getMetaInfo(tU).rootName
            }
          }))
        },
        commands: {
          selectHotbarSlot(RU) {
            UU.selectSlot(RU), UU.flush(tU)
          },
          removeInventoryItem(RU) {
            let {
              slot: gU,
              amount: tU,
              drop: EU
            } = RU;
            return pU(UU.remove(gU, tU, EU))
          },
          swapInventorySlots(RU) {
            let {
              a: gU,
              b: tU
            } = RU;
            return pU(UU.swap(gU, tU))
          },
          moveInventoryItem(RU) {
            let {
              from: gU,
              to: tU,
              amount: EU
            } = RU;
            return pU(UU.move(gU, tU, EU))
          },
          quickMoveInventoryItem(RU) {
            let {
              slot: gU,
              start: tU,
              end: EU,
              amount: PU
            } = RU;
            return pU(UU.quickMove(gU, tU, EU, PU))
          },
          closeChest() {
            UU.closeChest(), UU.flush(tU), PU.p.yh("chestClosedByPlayer")
          },
          focusCrafting(UU) {
            TU.setFocus(UU)
          },
          craftRecipe(RU) {
            let {
              name: gU,
              Ec: tU,
              times: EU
            } = RU;
            return pU(UU.craft(gU, tU, EU))
          },
          salvageItem(RU) {
            let {
              slot: gU,
              name: tU,
              amount: EU
            } = RU;
            return pU(UU.salvage(gU, tU, EU))
          },
          enchantItem(RU) {
            let {
              slot: gU,
              level: tU,
              tablePos: pU
            } = RU;
            UU.enchant(gU, tU, pU)
          }
        },
        queries: {
          enchantingOffer(gU) {
            let {
              slot: tU,
              blockName: pU
            } = gU;
            return function(UU, RU, gU, tU) {
              const pU = UU.slot(gU);
              if (!pU || !RU.getClientOption("canCraft") || !(0, Ng.u)(tU) || (0, Ng.q)(pU.attributes)) return Gt;
              const EU = (0, Ut.enchantmentPerksOf)(RU.getItemId(pU.name));
              if (0 === EU.length) return Gt;
              const PU = [];
              for (let TU = 0; TU < Og.e; TU++) {
                const {
                  commonProb: UU,
                  uncommonProb: RU,
                  rareProb: gU,
                  epicProb: pU,
                  legendaryProb: EU,
                  level: qU
                } = (0, Ng.f)(tU, TU);
                PU.push({
                  level: qU,
                  odds: [UU, RU, gU, pU, EU].map((UU => 100 * UU))
                })
              }
              return {
                perks: [...EU],
                options: PU
              }
            }(UU, RU, tU, pU)
          }
        }
      }
    }
    const Gt = Object.freeze({
      perks: [],
      options: []
    });

    function jt() {
      return null
    }

    function ut(UU, RU, gU, tU) {
      const pU = [];
      for (let EU = 0; EU < gU; EU++) {
        const gU = UU.getUint16(RU + 2 * EU, !0);
        0 !== gU && pU.push(tU.nameOfId(gU))
      }
      return pU
    }
    class Ct {
      constructor(UU) {
        this.api = UU, this.positions = new Map, this.targeted = {
          cL: 0,
          position: [0, 0, 0],
          normal: [0, 0, 0],
          cj: [0, 0, 0]
        }, this.hasTarget = !1, this.breaking = [0, 0, 0], this.isBreaking = !1
      }
      position(UU) {
        let RU = this.positions.get(UU);
        return RU || (this.api.checkValid(UU) || this.api.isLocal(UU) ? (RU = [NaN, NaN, NaN], this.api.readPosition(UU, RU), this.positions.set(UU, RU), RU) : null)
      }
      N9() {
        return this.hasTarget ? this.targeted : null
      }
      breakingPosition() {
        return this.isBreaking ? this.breaking : null
      }
      refresh() {
        for (const [RU, gU] of this.positions) this.api.readPosition(RU, gU) || this.api.checkValid(RU) || this.api.isLocal(RU) || this.positions.delete(RU);
        const UU = this.api.apiView;
        if (this.refreshTarget(), this.isBreaking = 0 !== (CU.w.playerFlags(UU, 0) & CU.Pd.Breaking) && CU.w.breakingProgress(UU, 0) >= 0, this.isBreaking)
          for (let RU = 0; RU < 3; RU++) this.breaking[RU] = CU.w.breakingPos(UU, 0, RU)
      }
      refreshTarget() {
        const UU = this.api.apiView,
          RU = CU.w.targetBlockId(UU, 0);
        if (this.hasTarget = RU !== CU.fd, this.hasTarget) {
          const gU = this.targeted;
          gU.cL = RU;
          for (let RU = 0; RU < 3; RU++) gU.position[RU] = CU.w.targetBlock(UU, 0, RU), gU.normal[RU] = CU.w.targetNormal(UU, 0, RU), gU.cj[RU] = CU.w.targetAdjacent(UU, 0, RU)
        }
      }
      despawned(UU) {
        const RU = this.positions.get(UU);
        RU && !this.api.isLocal(UU) && (RU.fill(NaN), this.positions.delete(UU))
      }
    }
    var ht = gU(40007),
      Qt = gU(39991),
      et = gU(36329);
    const Wt = 1,
      ft = 2;
    class xt {
      constructor() {
        this.game = new et.d, this.client = new et.d, this.WT = 0, this.movesFly = null
      }
      setGame(UU) {
        if (null === UU || "object" !== typeof UU) return !1;
        const {
          key: RU,
          value: gU
        } = UU;
        return "string" === typeof RU && (this.game.setBooleanType(RU, Boolean(gU)), !0)
      }
      setClient(UU, RU) {
        this.client.setBooleanType(UU, RU)
      }
      clearGame() {
        this.game = new et.d, this.movesFly = null
      }
      setMovesFly(UU) {
        this.movesFly = UU
      }
      perms() {
        return (this.game._getTotalBooleanVal() ? Wt : 0) | (this.client._getTotalBooleanVal() ? ft : 0)
      }
      write(UU) {
        const RU = this.perms(),
          {
            movesFly: gU
          } = this;
        if (RU === this.WT && null === gU) return !0;
        let tU = CU.Tb.Keep;
        return null !== gU && (tU = gU ? CU.Tb.On : CU.Tb.Off), !(!UU || !(0, CU.Ke)(UU, 0, tU, RU, gU ? 1 : 0)) && (this.WT = RU, this.movesFly = null, !0)
      }
    }
    class mt {
      constructor(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 35;
        this.api = UU, this.screenBandPct = void 0, this.clipX = 0, this.clipY = 0, this.clipW = 0, this.eye = [0, 0, 0], this.forward = [0, 0, 1], this.along = [0, 0, 0], this.screenBandPct = {
          x: TU.b,
          get y() {
            return RU()
          }
        }
      }
      get hasView() {
        const UU = this.api.apiView,
          RU = CU.w.viewProj;
        return 0 !== RU(UU, 0, 3) || 0 !== RU(UU, 0, 7) || 0 !== RU(UU, 0, 11) || 0 !== RU(UU, 0, 15)
      }
      get cameraPosition() {
        const UU = this.api.apiView,
          {
            eye: RU
          } = this;
        for (let gU = 0; gU < 3; gU++) RU[gU] = CU.w.eye(UU, 0, gU);
        return RU
      }
      get cameraDirection() {
        const UU = this.api.apiView,
          RU = CU.w.viewProj,
          gU = RU(UU, 0, 3),
          tU = RU(UU, 0, 7),
          pU = RU(UU, 0, 11),
          EU = Math.hypot(gU, tU, pU),
          {
            forward: PU
          } = this;
        return EU > 0 && (PU[0] = gU / EU, PU[1] = tU / EU, PU[2] = pU / EU), PU
      }
      get cameraHeading() {
        return CU.w.heading(this.api.apiView, 0)
      }
      get cameraPitch() {
        return CU.w.pitch(this.api.apiView, 0)
      }
      get tanHalfFovX() {
        return CU.w.tanHalfFovX(this.api.apiView, 0)
      }
      get tanHalfFovY() {
        return CU.w.tanHalfFovY(this.api.apiView, 0)
      }
      projectWorldPosToScreenPos(UU) {
        this.clip(UU);
        const {
          clipX: RU,
          clipY: gU,
          clipW: tU
        } = this;
        if (tU > 0) {
          const UU = RU / tU * 50,
            pU = -gU / tU * 50;
          return Math.abs(UU) <= this.screenBandPct.x && Math.abs(pU) <= this.screenBandPct.y ? {
            x: 50 + UU,
            y: 50 + pU
          } : this.clampToBand(UU, pU)
        }
        const pU = this.cameraPosition,
          EU = Math.hypot(UU[0] - pU[0], UU[1] - pU[1], UU[2] - pU[2]),
          PU = this.api.apiView,
          TU = CU.w.viewProj,
          qU = EU > 0 ? RU / EU : 0,
          KU = EU > 0 ? -gU / EU : 0,
          cU = Math.hypot(TU(PU, 0, 1), TU(PU, 0, 5), TU(PU, 0, 9)),
          GU = qU / Math.hypot(TU(PU, 0, 0), TU(PU, 0, 4), TU(PU, 0, 8)),
          jU = KU / cU,
          uU = !(Math.abs(GU) >= .001 || Math.abs(jU) >= .001);
        return this.clampToBand(qU, uU ? -(cU || 1) : KU)
      }
      projectDirectionToScreenPos(UU) {
        if (!this.hasView) return;
        const RU = this.cameraPosition,
          gU = this.along;
        for (let tU = 0; tU < 3; tU++) gU[tU] = RU[tU] + 10 * UU[tU];
        return this.projectWorldPosToScreenPos(gU)
      }
      projectWorldPosToViewport(UU) {
        this.clip(UU);
        const {
          clipX: RU,
          clipY: gU,
          clipW: tU
        } = this;
        return tU > 0 ? {
          x: 50 + RU / tU * 50,
          y: 50 - gU / tU * 50
        } : null
      }
      clip(UU) {
        const RU = this.api.apiView,
          gU = UU[0] - CU.w.origin(RU, 0, 0),
          tU = UU[1] - CU.w.origin(RU, 0, 1),
          pU = UU[2] - CU.w.origin(RU, 0, 2),
          EU = CU.w.viewProj;
        this.clipX = EU(RU, 0, 0) * gU + EU(RU, 0, 4) * tU + EU(RU, 0, 8) * pU + EU(RU, 0, 12), this.clipY = EU(RU, 0, 1) * gU + EU(RU, 0, 5) * tU + EU(RU, 0, 9) * pU + EU(RU, 0, 13), this.clipW = EU(RU, 0, 3) * gU + EU(RU, 0, 7) * tU + EU(RU, 0, 11) * pU + EU(RU, 0, 15)
      }
      clampToBand(UU, RU) {
        return (0, TU.e)(UU, RU, this.screenBandPct.x, this.screenBandPct.y)
      }
    }
    var It = gU(4469);
    const Jt = new TextEncoder,
      wt = new Uint8Array(CU.S * CU.O);
    class nt {
      constructor() {
        this.buttons = [], this.WT = !0
      }
      set(UU) {
        this.buttons = UU, this.WT = !1
      }
      attached() {
        this.WT = 0 === this.buttons.length
      }
      write(UU) {
        if (this.WT) return;
        const RU = new Uint8Array(CU.S),
          gU = new Uint8Array(CU.S);
        let tU = 0,
          pU = 0;
        for (const {
            id: EU,
            keycode: PU
          }
          of this.buttons) {
          if (tU === CU.S) break;
          const {
            read: UU,
            written: TU
          } = Jt.encodeInto(EU, wt.subarray(pU, pU + CU.O));
          if (UU < EU.length) continue;
          const qU = It.n[PU];
          RU[tU] = "number" === typeof qU ? qU : 0, gU[tU] = TU, tU++, pU += TU
        }
        this.WT = (0, CU.ye)(UU, 0, tU, RU, gU, wt.subarray(0, pU))
      }
    }

    function bt(UU, RU, gU) {
      const tU = Jt.encode(RU);
      return tU.length <= CU.O && function(UU, RU, gU, tU) {
        return (0, kR.d)(), (0, CU.Df)(UU, RU, gU, tU)
      }(UU, 0, gU ? 1 : 0, tU)
    }
    const ot = new TextDecoder,
      Zt = new TextEncoder,
      Yt = new Uint8Array(0),
      Bt = [0, 0, 0],
      Vt = {
        off: CU.Sd.Off,
        key: CU.Sd.Key,
        touch: CU.Sd.Touch
      };
    class rt {
      constructor(UU) {
        var RU;
        this.options = UU, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tickers = [], this.renderers = [], this.receivers = [], this.failures = [], this.vetoSet = !1, this.hooksSet = !1, this.writtenPublicLobby = !1, this.promptWatch = "off", this.promptWatchSent = "off", this.customButtons = new nt, this.generation = 0, this.sessionLive = !1, this.boundId = 0, this.session = null, this.activeConn = 0, this.closedThrough = 0, this.openSocket = 0, this.socketLeftSinceAttach = !1, this.ticks = 0, this.zoomUnshown = !1, this.zoomHeld = !1, this.overflowGen = 0, this.resyncOwed = !1, this.zoom = 0, this.pendingZoom = null, this.highlight = null, this.highlightOwed = !1, this.cmd = null, this.freeCam = new xt, this.stopped = () => !1, this.onError = void 0, this.api = void 0, this.tables = void 0, this.itemSources = null, this.fault = void 0, this.ku = UU => {
          if ((0, uU.g)(UU)) throw UU;
          this.onError(UU)
        }, this.api = UU.api, this.tables = UU.tables, this.onError = null !== (RU = UU.onError) && void 0 !== RU ? RU : UU => {
          console.error("Error in client game callback", UU)
        }, this.renderFrame = new mt(this.api, UU.screenBandY), this.live = new Ct(this.api), this.chunks = new TR(this.api.memory, (() => this.api.apiView)), this.items = new hg({
          api: this.api,
          tables: UU.tables,
          cmd: () => this.cmd,
          onError: this.onError,
          beforeOp: UU.beforeOp
        });
        const gU = () => this.stopped() ? null : this.cmd,
          tU = () => this.sessionLive;
        this.entityInfoWatch = new kg({
          cmd: gU,
          onError: this.onError
        }), this.entityInfo = new Fg({
          api: this.api,
          watch: this.entityInfoWatch,
          isSessionLive: tU
        }), this.particles = new Bg({
          cmd: gU,
          isSessionLive: tU,
          onError: this.onError
        }), this.clientApi = new Pg({
          api: this.api,
          live: this.live,
          chunks: this.chunks,
          items: this.items,
          entityInfo: this.entityInfo,
          particles: this.particles,
          tables: UU.tables,
          cmd: gU,
          sendCmd: () => this.sendCmd(),
          isSessionLive: tU,
          beforeWrite: () => {
            var RU;
            if (this.stopped()) return !1;
            const gU = this.generation;
            return !1 !== (null === (RU = UU.beforeWrite) || void 0 === RU ? void 0 : RU.call(UU)) && gU === this.generation
          },
          playerDbId: () => {
            const UU = this.session;
            if (null === UU) throw new Error("No game session has started, so the local player has no DB id");
            return UU.playerDbId
          },
          playSound: UU.playSound,
          setLocalOptions: UU.setLocalOptions,
          hasPackModel: UU.hasPackModel
        }), this.scriptedCamera = new zU({
          api: this.api,
          cmd: () => this.stopped() ? null : this.cmd,
          screen: UU.cameraScreen,
          showFacing: UU.showCameraFacing
        })
      }
      get itemBridgeSources() {
        return this.itemSources ??= ct(this.items, this.tables, (() => this.localPlayerAlive()), this.ku), this.itemSources
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
      clickCodeBlock(UU) {
        const RU = this.sessionLive ? this.sendCmd() : null;
        return null !== RU && (gU = RU, tU = 0, pU = UU[0], EU = UU[1], PU = UU[2], (0, kR.d)(), (0, CU.De)(gU, tU, pU, EU, PU));
        var gU, tU, pU, EU, PU
      }
      cameraZoom() {
        return this.zoom
      }
      setCameraZoom(UU) {
        const RU = this.liveCmd();
        return null === RU ? (this.pendingZoom = UU, !1) : (this.pendingZoom = null, (0, CU.qg)(RU, 0, UU, 1))
      }
      HJ(UU) {
        const RU = this.stopped() ? null : this.cmd;
        return null !== RU && (0, CU.jg)(RU, 0, UU ? 1 : 0)
      }
      respawn() {
        const UU = this.sessionLive ? this.sendCmd() : null;
        return null !== UU && (RU = UU, gU = 0, (0, kR.d)(), (0, CU.Mf)(RU, gU));
        var RU, gU
      }
      bindCustomButtonKeys(UU) {
        this.customButtons.set(UU)
      }
      pressCustomButton(UU, RU) {
        const gU = this.sessionLive ? this.sendCmd() : null;
        return null !== gU && bt(gU, UU, RU)
      }
      padMove(UU, RU, gU, tU, pU, EU) {
        const PU = this.liveCmd();
        return null !== PU && (0, CU.mf)(PU, 0, UU, RU, gU, tU, pU, EU)
      }
      thirdPersonFor(UU) {
        const RU = this.liveCmd();
        return null !== RU && (0, CU.ug)(RU, 0, null !== UU && void 0 !== UU ? UU : 1 / 0)
      }
      send(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const tU = 0 !== this.openSocket || this.sessionLive ? this.sendCmd() : null;
        return null !== tU && FR(tU, gU ? jU.ld : 0, UU, (0, vU.d)(RU))
      }
      socketAttached(UU) {
        this.openSocket = UU, this.socketLeftSinceAttach = !1
      }
      socketDetached(UU) {
        this.openSocket === UU && (this.openSocket = 0)
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
      attach(UU) {
        const RU = () => UU.isStopped;
        this.stopped = RU, this.cmd = UU.rings.cmd, this.promptWatchSent = "off", this.writePromptWatch(), this.customButtons.attached(), this.writeCustomButtons();
        const gU = this.api.apiView;
        this.overflowGen = CU.w.eventOverflowGen(gU, 0), this.resyncOwed = 0 !== CU.w.eventOverflowMask(gU, 0), UU.setGameHost(this), UU.setEventWalker((UU => {
          this.api.walk(UU, this, RU)
        }))
      }
      watchPromptPick(UU) {
        this.promptWatch = UU, this.writePromptWatch()
      }
      get promptEntity() {
        return "off" === this.promptWatch || this.stopped() ? null : Xt(CU.w.promptEntity(this.api.apiView, 0))
      }
      get interactLabel() {
        return "touch" !== this.promptWatch || this.stopped() ? CU.vc.None : CU.w.interactLabel(this.api.apiView, 0)
      }
      get interactIcon() {
        return "touch" !== this.promptWatch || this.stopped() ? 0 : CU.w.interactIcon(this.api.apiView, 0)
      }
      closeGame() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        (0 === UU || UU >= this.openSocket) && (this.openSocket = 0), this.closedThrough = Math.max(this.closedThrough, UU, this.activeConn), this.activeConn = 0, this.endSession(), this.endGameGrants(), this.dropGameCamera()
      }
      gameCamera(UU) {
        0 !== this.activeConn && this.scriptedCamera.settingsChanged(UU)
      }
      netEvent(UU) {
        "connection" === UU.type ? UU.phase === jU.F.Activated && UU.conn !== this.activeConn && UU.conn > this.closedThrough ? (this.endSession(), this.activeConn = UU.conn, this.endGameGrants(), this.dropGameCamera()) : UU.phase !== jU.F.Left && UU.phase !== jU.F.Closed || UU.conn !== this.activeConn ? UU.phase === jU.F.Resumed && 0 !== this.activeConn && UU.conn > this.closedThrough && (this.activeConn = UU.conn) : this.closeGame() : UU.conn === this.activeConn && 0 !== UU.conn && (UU.aP === Qt.y ? this.gunHit(UU.payload) : UU.aP === ig.dc.EditItemCraftingRecipes || UU.aP === Qt.X ? this.items.touch() : (this.serverOptions(UU), this.gameMessage(UU)));
        const RU = this.options.onNetEvent;
        RU && this.guard((() => {
          RU(UU)
        }))
      }
      serverOptions(UU) {
        const RU = this.options.serverOptions,
          gU = RU ? this.decoded(Ag, UU) : null;
        RU && gU && this.guard((() => {
          RU.applyNewClientOptions(gU)
        }))
      }
      gameMessage(UU) {
        let RU = null;
        try {
          RU = function(UU) {
            if ("message" !== UU.type || UU.aP !== ig.dc.GameCodeMessage || UU.payloadKind !== jU.kc.Msgpack) return null;
            const RU = (0, vU.b)(UU.payload);
            if (null === RU || "object" !== typeof RU || "string" !== typeof RU.messageType) throw new Error("GameCodeMessage without a messageType");
            return RU
          }(UU)
        } catch (gU) {
          this.sessionLive && this.onError(gU)
        }
        if (RU) {
          const {
            messageType: UU,
            data: gU
          } = RU;
          if ((0, ZU.f)(UU)) return void this.guard((() => {
            (0, ZU.b)(UU, gU)
          }));
          "freeCamPerms" === UU && this.freeCam.setGame(gU) && this.writeFreeCam(), this.sessionLive && this.round(this.receivers, (RU => {
            RU.onReceivedMessageFromServer(UU, gU)
          }))
        }
      }
      decoded(UU, RU) {
        try {
          return UU(RU)
        } catch (gU) {
          return this.onError(gU), null
        }
      }
      setClientFreeCameraGrant(UU, RU) {
        this.freeCam.setClient(UU, RU), this.writeFreeCam()
      }
      freeCameraAllowed() {
        return 0 !== this.freeCam.perms()
      }
      setFreeCameraMovesFly(UU) {
        this.freeCam.setMovesFly(UU), this.writeFreeCam()
      }
      setBlockHighlight(UU) {
        this.highlight = UU, this.highlightOwed = !0, this.writeOwedHighlight()
      }
      writeOwedHighlight() {
        const UU = this.liveCmd();
        if (null === UU || !this.highlightOwed) return;
        const RU = this.highlight;
        this.highlightOwed = null === RU ? !(0, CU.Ve)(UU, 0, Bt, Bt, 0) : !(0, CU.Ve)(UU, 0, RU.pos, RU.normal, 1)
      }
      localPlayerBound(UU) {
        var RU, gU;
        if (0 === this.activeConn || this.sessionLive && UU === this.boundId) return;
        const tU = this.sessionLive;
        let pU, EU, PU, TU;
        this.endSession(), tU && this.restartGameCamera();
        try {
          var qU;
          this.session = null;
          const UU = this.options.sessionInfo(this.activeConn);
          if (this.session = UU, !UU) return;
          pU = UU.gameNameWithVariation, EU = null !== (qU = (0, bU.Sb)(pU)) && void 0 !== qU ? qU : void 0, PU = (0, oU.t)(UU.lobbyName), TU = (0, oU.P)(UU.lobbyName)
        } catch (WU) {
          return void this.onError(WU)
        }
        const KU = {
          localPlayerId: String(UU)
        };
        let cU = {},
          GU = {};
        try {
          var jU, uU;
          cU = null !== (jU = null === (uU = this.options.gameFactory((0, bU.Wb)(pU))) || void 0 === uU ? void 0 : uU(TU, PU, EU, KU)) && void 0 !== jU ? jU : {}
        } catch (WU) {
          this.ku(WU)
        }
        try {
          var CU, hU;
          GU = {
            ...null === (CU = (hU = this.options).defaultPlugins) || void 0 === CU ? void 0 : CU.call(hU, TU, PU, EU, KU),
            ...cU.plugins
          }
        } catch (WU) {
          this.ku(WU)
        }
        const QU = [cU, ...Object.values(GU)];
        this.owners = QU, this.tickers = QU.filter((UU => void 0 !== UU.HG)), this.renderers = QU.filter((UU => void 0 !== UU.onAfterRender)), this.receivers = QU.filter((UU => void 0 !== UU.onReceivedMessageFromServer)), this.writeAltVeto(QU), this.writeHooks(QU), this.writePublicLobby(TU), this.writeLocalDbId(null !== (RU = null === (gU = this.session) || void 0 === gU ? void 0 : gU.playerDbId) && void 0 !== RU ? RU : null), this.boundId = UU, this.sessionLive = !0, this.generation++, null !== this.pendingZoom && this.setCameraZoom(this.pendingZoom), this.highlightOwed ||= null !== this.highlight, this.writeOwedHighlight(), this.round(QU, (UU => {
          var RU;
          null === (RU = UU.onCreate) || void 0 === RU || RU.call(UU, this.clientApi)
        }));
        const eU = this.generation;
        setTimeout((() => {
          eU === this.generation && !0 === this.tables.getClientOption("creative") && Kt(this.tables)
        }), 0)
      }
      chunkSlot(UU, RU, gU, tU, pU, EU) {
        this.chunks.apply(UU, RU, gU, tU, pU, EU)
      }
      entityAdded(UU) {
        var RU;
        this.entityInfo.stale(UU), null === (RU = this.options.replayEntities) || void 0 === RU || RU.entityAdded(UU)
      }
      entityInfoChanged(UU) {
        var RU;
        this.entityInfo.stale(UU), null === (RU = this.options.replayEntities) || void 0 === RU || RU.entityInfoChanged(UU)
      }
      afterPrescan() {
        this.items.refresh(), this.entityInfo.refresh(), this.api.rereadDirectory(), this.chunks.refresh(), this.live.refresh()
      }
      tickEnd() {
        if (this.ticks++, this.tickers.length > 0) {
          const UU = performance.now();
          this.round(this.tickers, vt), (0, Rt.c)(performance.now() - UU)
        }
      }
      afterWalk(UU) {
        this.ackEventOverflow(), this.clientApi.flushOwed(), this.writeOwedHighlight();
        const RU = this.options.replayEntities;
        RU && this.guard((() => {
          this.entityInfoWatch.want(yg, RU.wantsWatch), RU.flush(this.entityInfoWatch.on)
        }));
        const gU = (0, Rt.l)(UU, CU.w.frameMs(this.api.apiView, 0));
        if (null !== gU) {
          const UU = this.renderFrame;
          this.guard((() => {
            (0, Mg.c)().turnDamageIndicators(UU.cameraHeading)
          })), this.guard((() => {
            this.clientApi.slideRoute(gU)
          })), this.round(this.renderers, (RU => {
            RU.onAfterRender(gU, UU)
          }))
        }
        this.writeFreeCam();
        try {
          this.scriptedCamera.afterFrame(null !== gU)
        } catch (pU) {
          this.ku(pU)
        }
        this.showZoom(), this.items.flush(this.ku), this.writePromptWatch(), this.writeCustomButtons();
        const tU = this.ticks;
        this.ticks = 0, (0, Rt.i)(tU, UU, gU, this.ku)
      }
      entityRemoved(UU) {
        this.live.despawned(UU), this.entityInfo.removed(UU)
      }
      ackEventOverflow() {
        const UU = this.api.apiView,
          RU = CU.w.eventOverflowGen(UU, 0),
          gU = RU - this.overflowGen >>> 0;
        if (0 === gU && !this.resyncOwed) return;
        this.overflowGen = RU;
        const tU = CU.w.eventOverflowMask(UU, 0),
          pU = this.cmd;
        0 === tU || null === pU || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, CU.Ge)(pU, 0, tU);
        const EU = this.options.onEventOverflow;
        0 !== gU && EU && this.guard((() => {
          EU(tU, gU)
        }))
      }
      gameCall(UU, RU, gU, tU, pU, EU, PU, TU, qU) {
        if (UU === CU.ic.Director) try {
          return this.scriptedCamera.call(RU, gU, tU, pU, EU, PU)
        } catch (KU) {
          return this.ku(KU), CU.qb.None
        }
        if (!this.sessionLive || void 0 !== this.fault) return UU === CU.ic.AltVeto ? CU.m.Allow : 0;
        try {
          return this.callGames(UU, RU, gU, tU, pU, EU, PU, TU)
        } catch (KU) {
          throw (0, uU.g)(KU) && (this.fault = KU), KU
        }
      }
      takeFault() {
        const UU = this.fault;
        return this.fault = void 0, UU
      }
      callGames(UU, RU, gU, tU, pU, EU, PU, TU) {
        this.api.rereadDirectory(), this.chunks.touch(), this.items.refresh(), this.live.refresh(), this.entityInfo.inCoreCall();
        const {
          tables: qU
        } = this.options, KU = String(this.boundId);
        switch (UU) {
          case CU.ic.AltVeto:
          case CU.ic.AltAction: {
            const TU = 0 !== PU,
              [cU, GU, jU] = TU ? [RU, gU, tU] : [void 0, void 0, void 0],
              uU = TU ? qU.nameOfId(pU) : "Air",
              hU = Xt(EU);
            if (UU === CU.ic.AltAction) return this.first((UU => {
              var RU;
              return null === (RU = UU.onPlayerAltAction) || void 0 === RU ? void 0 : RU.call(UU, KU, cU, GU, jU, uU, hU)
            })), 0;
            const QU = this.first((UU => {
              var RU;
              return null === (RU = UU.onPlayerAttemptAltAction) || void 0 === RU ? void 0 : RU.call(UU, KU, cU, GU, jU, uU, hU)
            }));
            return "preventAction" === QU ? CU.m.Prevent : "preventPlacement" === QU ? CU.m.PreventPlacement : CU.m.Allow
          }
          case CU.ic.Click: {
            const UU = TU,
              cU = 0 !== (UU & CU.X.Alt),
              GU = 0 !== (UU & CU.X.HasPos),
              jU = GU ? qU.nameOfId(pU) : "Air",
              [uU, hU, QU] = GU ? [RU, gU, tU] : [null, null, null],
              eU = Xt(EU),
              WU = 0 !== (UU & CU.X.Up),
              fU = Xt(PU);
            if (0 === (UU & CU.X.AttackOnly) && this.first((UU => {
                var RU, gU;
                return WU ? null === (RU = UU.onPlayerClickUp) || void 0 === RU ? void 0 : RU.call(UU, KU, cU, uU, hU, QU, jU, eU) : null === (gU = UU.onPlayerClick) || void 0 === gU ? void 0 : gU.call(UU, KU, cU, uU, hU, QU, jU, eU)
              })), !WU && !cU && null !== fU) {
              const UU = this.clientApi.getPositionView(fU),
                RU = UU ? [UU[0], UU[1], UU[2]] : [0, 0, 0];
              this.first((UU => {
                var gU;
                return null === (gU = UU.onPlayerAttackEntity) || void 0 === gU ? void 0 : gU.call(UU, KU, fU, RU)
              }))
            }
            return 0
          }
          case CU.ic.ChangeBlock: {
            const UU = qU.nameOfId(pU),
              PU = qU.nameOfId(EU);
            return this.first((pU => {
              var EU;
              return null === (EU = pU.onPlayerChangeBlock) || void 0 === EU ? void 0 : EU.call(pU, KU, RU, gU, tU, UU, PU)
            })), 0
          }
          case CU.ic.DropItem: {
            const UU = qU.nameOfId(RU);
            return this.first((RU => {
              var pU;
              return null === (pU = RU.onPlayerDropItem) || void 0 === pU ? void 0 : pU.call(RU, KU, UU, gU, tU)
            })), 0
          }
          default:
            return this.onError(new Error(`Unknown game call kind ${UU}`)), 0
        }
      }
      changeBlockFail(UU, RU, gU, tU, pU, EU, PU) {
        const TU = pU === CU._c ? null : ot.decode(this.api.eventBytes(EU, Math.min(pU, PU)));
        this.failures.push({
          HE: [UU, RU, gU],
          SE: tU,
          sE: TU
        })
      }
      changeBlockFailEnd() {
        const UU = this.failures;
        this.failures = [], this.sessionLive && this.round(this.owners, (RU => {
          var gU;
          null === (gU = RU.onChangeBlockFail) || void 0 === gU || gU.call(RU, UU)
        })), this.yh("EditBoard", {
          pos: null
        }), this.yh("EditCodeBlock", {
          pos: null,
          canChangePos: null
        })
      }
      inventoryEvent(UU, RU, gU, tU, pU, EU) {
        UU === CU.Ac.ChestOpened ? this.items.chestOpened(gU, tU, pU) : UU !== CU.Ac.Synced && UU !== CU.Ac.ChestClosed && UU !== CU.Ac.ChestRefreshed || this.items.touch(), this.guard((() => {
          ! function(UU, RU, gU, tU) {
            switch (UU) {
              case CU.Ac.Synced:
                PU.p.yh("syncedInvenFromServer");
                break;
              case CU.Ac.ChestOpened:
              case CU.Ac.ChestClosed:
                PU.p.yh("chestToggleFromServer", UU === CU.Ac.ChestOpened, !0);
                break;
              case CU.Ac.ChestRefreshed:
                PU.p.yh("chestRefreshedFromServer");
                break;
              case CU.Ac.EnchantingTable:
                PU.p.yh("enchantingTable", {
                  gc: tU,
                  position: gU
                });
                break;
              case CU.Ac.HotbarRequest:
                PU.p.yh("setSelectedInventorySlotI", RU, !0);
                break;
              case CU.Ac.Scrolled:
                PU.p.yh("ScrollInventorySlot", RU);
                break;
              case CU.Ac.NumberKey:
                PU.p.yh("numkeyPressed", RU + 1);
                break;
              case CU.Ac.DropRequested:
                PU.p.yh("DropInvenItem", 0 !== RU);
                break;
              default:
                throw new uU.d(`InventoryEvent of no kind: what ${UU}`)
            }
          }(UU, RU, [gU, tU, pU], EU)
        }))
      }
      heldItemChanged() {
        this.items.touch()
      }
      shotDamage(UU, RU, gU, tU) {
        this.yh("shotPlayer", {
          playerId: String(UU),
          damage: RU,
          wasCrit: 0 !== tU,
          distance: gU
        })
      }
      localHurt(UU, RU) {
        this.yh("closeShopOnDamaged", null), this.guard((() => {
          PU.p.yh("damagedByOtherPlayer", {
            yg: null,
            direction: Number.isNaN(RU) ? null : RU,
            np: UU
          })
        }))
      }
      attackHit(UU, RU, gU, tU, pU) {
        this.guard((() => {
          PU.p.yh("yourAttackHit", {
            DR: tU,
            screenPos: this.renderFrame.projectDirectionToScreenPos([UU, RU, gU]),
            hitSelf: pU
          })
        }))
      }
      physicsType(UU) {
        this.yh("PlayerPhysicsTypeUpdate", UU)
      }
      vehicleEffect(UU, RU, gU, tU, pU) {
        this.guard((() => {
          UU === jU.Fd.UPDATE ? (0, YU.l)(RU, {
            icon: gU,
            level: tU,
            displayName: null,
            durationMs: pU
          }) : aU.c.remove(RU)
        }))
      }
      zoomChanged(UU) {
        this.zoom = UU, this.zoomUnshown = !0
      }
      zoomDisabled() {
        this.yh("showBottomMessage", {
          message: "Zoom is disabled",
          timeoutLength: 2e3,
          type: "Error"
        })
      }
      showZoom() {
        const UU = this.scriptedCamera.holdsView();
        !this.zoomUnshown || UU && this.zoomHeld || (this.zoomUnshown = !1, this.yh("cameraZoomSet", this.zoom)), this.zoomHeld = UU
      }
      gunHit(UU) {
        this.guard((() => {
          const {
            yg: RU,
            kg: gU
          } = (0, ht.c)(Qt.y, UU);
          PU.p.yh("damagedByOtherPlayer", {
            yg: RU,
            direction: gU
          })
        }))
      }
      uiEvent(UU, RU, gU, tU, pU, EU, PU, TU) {
        this.guard((() => {
          Dg(UU, RU, [gU, tU, pU], EU, this.items, this.options.tables, (() => ot.decode(this.api.eventBytes(PU, TU))))
        }))
      }
      writeAltVeto(UU) {
        const RU = this.cmd;
        if (!RU) return;
        let gU;
        try {
          gU = function(UU, RU) {
            const gU = new Set;
            let tU = !1;
            for (const pU of UU)
              if (pU.onPlayerAttemptAltAction) {
                if (tU = !0, !pU.altVetoBlocks) return {
                  mode: CU.ne.All,
                  roots: []
                };
                for (const UU of pU.altVetoBlocks) gU.add(RU.getMetaInfo(UU).rootId)
              } return tU ? gU.size > CU.Oc ? {
              mode: CU.ne.All,
              roots: []
            } : {
              mode: CU.ne.Filter,
              roots: [...gU]
            } : {
              mode: CU.ne.Off,
              roots: []
            }
          }(UU, this.options.tables)
        } catch (pU) {
          this.onError(pU), gU = {
            mode: CU.ne.All,
            roots: []
          }
        }
        if (gU.mode === CU.ne.Off && !this.vetoSet) return;
        const tU = new Uint8Array(new Uint32Array(gU.roots).buffer);
        (0, CU.Tf)(RU, 0, gU.mode, gU.roots.length, tU) ? this.vetoSet = gU.mode !== CU.ne.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
      }
      endGameGrants() {
        this.freeCam.clearGame(), this.writeFreeCam()
      }
      writeFreeCam() {
        this.stopped() || this.freeCam.write(this.cmd)
      }
      writeHooks(UU) {
        const RU = this.cmd;
        if (!RU) return;
        const gU = function(UU) {
          let RU = 0;
          for (const gU of UU) gU.onPlayerAltAction && (RU |= 1 << CU.ic.AltAction), (gU.onPlayerClick || gU.onPlayerClickUp || gU.onPlayerAttackEntity) && (RU |= 1 << CU.ic.Click), gU.onPlayerChangeBlock && (RU |= 1 << CU.ic.ChangeBlock), gU.onPlayerDropItem && (RU |= 1 << CU.ic.DropItem);
          return RU
        }(UU);
        (0 !== gU || this.hooksSet) && ((0, CU.cg)(RU, 0, gU) ? this.hooksSet = 0 !== gU : this.onError(new Error("SetHooks didn't fit the command ring")))
      }
      writeCustomButtons() {
        const UU = this.cmd;
        UU && !this.stopped() && this.customButtons.write(UU)
      }
      writePromptWatch() {
        const UU = this.cmd,
          RU = this.promptWatch;
        RU !== this.promptWatchSent && UU && !this.stopped() && (0, CU.Cg)(UU, 0, Vt[RU]) && (this.promptWatchSent = RU)
      }
      writePublicLobby(UU) {
        const RU = this.cmd;
        RU && UU !== this.writtenPublicLobby && ((0, CU.ng)(RU, 0, UU ? 1 : 0) ? this.writtenPublicLobby = UU : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
      }
      writeLocalDbId(UU) {
        const RU = this.cmd;
        RU && ((0, CU.dg)(RU, 0, null === UU ? 0 : 1, null === UU ? Yt : Zt.encode(UU)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
      }
      first(UU) {
        const RU = this.generation;
        for (const tU of this.owners) {
          if (RU !== this.generation) break;
          try {
            const RU = UU(tU);
            if (void 0 !== RU) return RU
          } catch (gU) {
            this.ku(gU)
          }
        }
      }
      yh(UU, RU) {
        this.guard((() => {
          PU.p.yh(UU, RU)
        }))
      }
      dropGameCamera() {
        try {
          this.scriptedCamera.reset()
        } catch (UU) {
          this.ku(UU)
        }
      }
      restartGameCamera() {
        try {
          this.scriptedCamera.restart()
        } catch (UU) {
          this.ku(UU)
        }
      }
      endSession() {
        if (!this.sessionLive) return;
        this.sessionLive = !1;
        const UU = this.owners;
        let RU;
        if (this.owners = this.tickers = this.renderers = this.receivers = [], this.generation++, !this.stopped()) try {
          this.writeAltVeto([]), this.writeHooks([]), this.writePublicLobby(!1), this.writeLocalDbId(null)
        } catch (tU) {
          RU = tU
        }
        try {
          this.entityInfo.sessionEnded()
        } catch (tU) {
          RU ??= tU
        }
        this.round(UU, dt, !0);
        try {
          this.particles.sessionEnded() || this.onError(new Error("ParticleStopAll didn't fit the command ring"))
        } catch (tU) {
          RU ??= tU
        }
        try {
          this.clientApi.disposeGameOutput()
        } catch (tU) {
          RU ??= tU
        }
        const gU = this.options.onSessionEnd;
        if (gU) try {
          gU()
        } catch (tU) {
          this.onError(tU)
        }
        void 0 !== RU && this.ku(RU)
      }
      round(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const tU = this.generation;
        for (const EU of UU) {
          if (tU !== this.generation) break;
          try {
            RU(EU)
          } catch (pU) {
            gU ? this.onError(pU) : this.ku(pU)
          }
        }
      }
      guard(UU) {
        try {
          UU()
        } catch (RU) {
          this.ku(RU)
        }
      }
    }

    function Xt(UU) {
      return UU === CU.ad ? null : String(UU)
    }

    function vt(UU) {
      UU.HG(jU.ud)
    }

    function dt(UU) {
      var RU;
      null === (RU = UU.onClose) || void 0 === RU || RU.call(UU)
    }

    function Ht(UU, RU) {
      UU.watch((() => {
        const gU = function(UU) {
          let RU = 0;
          const gU = Math.min(gt, UU.length);
          for (let pU = 0; pU < gU; pU++) {
            var tU;
            const gU = null === (tU = UU.slot(pU)) || void 0 === tU ? void 0 : tU.typeObj,
              EU = gU ? (0, Ut.gunTypeOf)(gU.id) : void 0;
            void 0 !== EU && (RU |= 1 << fR[EU])
          }
          return RU
        }(UU);
        0 !== gU && (RU.preload(gU), RU.preload(1 << xR))
      }))
    }
    var St = gU(4512),
      st = gU(36311);

    function yt(UU) {
      const RU = new St.Howl({
          ...(0, st.e)(UU),
          pool: 15,
          preload: !1
        }),
        gU = RU.load.bind(RU);
      return RU.load = () => (RU._preload = !0, gU()), RU
    }

    function kt(UU, RU, gU) {
      const tU = UU.listener;
      if (tU.positionX) Ft(tU.positionX, RU, gU, 0), Ft(tU.positionY, RU, gU, 1), Ft(tU.positionZ, RU, gU, 2), Ft(tU.forwardX, RU, gU, 3), Ft(tU.forwardY, RU, gU, 4), Ft(tU.forwardZ, RU, gU, 5), Ft(tU.upX, RU, gU, 6), Ft(tU.upY, RU, gU, 7), Ft(tU.upZ, RU, gU, 8);
      else {
        let UU = !1;
        for (let tU = 0; tU < 9; tU++) UU ||= RU[tU] !== gU[tU];
        UU && (tU.setPosition(RU[0], RU[1], RU[2]), tU.setOrientation(RU[3], RU[4], RU[5], RU[6], RU[7], RU[8]), gU.set(RU))
      }
    }

    function Ft(UU, RU, gU, tU) {
      RU[tU] !== gU[tU] && (UU.value = RU[tU], gU[tU] = RU[tU])
    }
    class it {
      constructor() {
        this.pose = new Float64Array(9), this.written = new Float64Array(9).fill(Number.NaN), this.watchedCtx = void 0
      }
      apply(UU) {
        this.pose.set(UU);
        const RU = St.Howler.ctx;
        return !!RU && (RU !== this.watchedCtx && (this.watchedCtx = RU, this.written.fill(Number.NaN), RU.addEventListener("statechange", (() => {
          "running" === RU.state && kt(RU, this.pose, this.written)
        }))), "running" === RU.state && kt(RU, UU, this.written), !0)
      }
    }
    var At = gU(36157),
      zt = gU(38739);
    let Mt = null,
      Dt = null;

    function Lt() {
      return null === Mt && (Mt = document.createElement("div"), Mt.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none", document.body.append(Mt)), Mt
    }

    function Nt() {
      return Dt ??= new zt.b(new At.b(Lt)), Dt
    }

    function lt() {
      var UU;
      null === (UU = Dt) || void 0 === UU || UU.clear(), Ot(null)
    }

    function Ot(UU) {
      tU.b.get("scriptedCameraFacing") !== UU && tU.b.set({
        scriptedCameraFacing: UU
      })
    }
    var Up = gU(9155),
      Rp = gU(9121),
      gp = gU(38766),
      tp = gU(40124),
      pp = gU(2969);
    const Ep = Object.entries(CU.fc).reduce(((UU, RU) => {
      let [gU, tU] = RU;
      return UU[tU] = gU, UU
    }), []);

    function Pp(UU, RU) {
      var gU;
      return 0 !== ((null !== (gU = UU.itemFlags[RU]) && void 0 !== gU ? gU : 0) & CU.Dc.Stackable)
    }
    const Tp = /^(0|[1-9][0-9]*)$/,
      qp = {
        displayName: (UU, RU) => (0, Ut.displayNameOf)(RU),
        description: (UU, RU) => (0, Ut.descriptionOf)(RU),
        type: (UU, RU) => (0, Ut.itemTypeOf)(RU),
        clipSize: (UU, RU) => (0, Ut.clipSizeOf)(RU),
        armourReduction: (UU, RU) => (0, Ut.armourReductionOf)(RU),
        scopeType: (UU, RU) => (0, Ut.scopeTypeOf)(RU),
        stackable: Pp,
        harvestType: (UU, RU) => Ep[UU.blockHarvestTypes[RU]],
        harvestLevel: (UU, RU) => {
          const gU = UU.blockHarvestLevels[RU];
          return gU === CU.Kc ? void 0 : gU
        },
        harvests: (UU, RU) => {
          var gU;
          const tU = null !== (gU = UU.itemHarvests[RU]) && void 0 !== gU ? gU : 0;
          return 0 !== tU ? Ep[tU] : void 0 === (0, Ut.harvestsNullLevelOf)(RU) ? void 0 : null
        },
        level: (UU, RU) => {
          var gU, tU;
          const pU = null !== (gU = UU.itemLevels[RU]) && void 0 !== gU ? gU : CU.Kc;
          return pU !== CU.Kc ? pU : null !== (tU = (0, Ut.harvestsNullLevelOf)(RU)) && void 0 !== tU ? tU : void 0
        }
      };

    function Kp(UU, RU, gU) {
      return Gp(new Uint8Array(Math.floor(UU.length / RU)), UU, RU, gU)
    }

    function cp(UU, RU, gU) {
      return Gp(new Uint16Array(Math.floor(UU.length / RU)), UU, RU, gU)
    }

    function Gp(UU, RU, gU, tU) {
      const pU = new DataView(RU.buffer, RU.byteOffset, RU.byteLength);
      for (let EU = 0; EU < UU.length; EU++) UU[EU] = tU(pU, EU * gU);
      return UU
    }
    class jp {
      constructor(UU, RU) {
        this.options = RU, this.metas = [], this.types = new Map, this.props = void 0, this.rootIdOf = UU => {
          const RU = this.idOf(UU);
          if (void 0 === RU) throw new Error(`No item is named ${UU}, an item's root`);
          return RU
        };
        const gU = RU => {
            const gU = RU();
            return new Uint8Array(UU.memory().buffer, UU.scratch(), gU).slice()
          },
          tU = (new TextDecoder).decode(gU((() => UU.queries.itemNames()))).split("\n"),
          pU = gU((() => UU.queries.blockProps())),
          EU = gU((() => UU.queries.itemProps()));
        this.props = {
          blockFlags: Kp(pU, CU.D.BYTES, CU.D.flags),
          blockHarvestTypes: Kp(pU, CU.D.BYTES, CU.D.harvestType),
          blockHarvestLevels: Kp(pU, CU.D.BYTES, CU.D.harvestLevel),
          blockAttachedTops: cp(pU, CU.D.BYTES, CU.D.attachedTop),
          itemFlags: Kp(EU, CU.Gc.BYTES, CU.Gc.flags),
          itemHarvests: Kp(EU, CU.Gc.BYTES, CU.Gc.harvests),
          itemLevels: Kp(EU, CU.Gc.BYTES, CU.Gc.level)
        }, (0, pp.h)(Object.freeze(tU)), (0, tp.f)()
      }
      idOf(UU) {
        if ("number" === typeof UU) return void 0 === (0, pp.f)(UU) ? void 0 : UU;
        const RU = (0, pp.c)(UU);
        return void 0 === RU && Tp.test(UU) ? void 0 === (0, pp.f)(+UU) ? void 0 : +UU : RU
      }
      getMetaInfo(UU) {
        if (!UU || UU === Up.e) return Up.f;
        const RU = this.idOf(UU);
        if (void 0 === RU) throw new Error(`Item ${UU} not found in registry`);
        return this.metaOf(RU)
      }
      blockRootId(UU) {
        return 0 !== UU && void 0 !== (0, pp.f)(UU) ? this.metaOf(UU).rootId : UU
      }
      metaOf(UU) {
        return this.metas[UU] ??= (0, Rp.o)((0, pp.f)(UU), UU, this.rootIdOf, (0, Ut.rootMetaDescOf)(UU))
      }
      getItemId(UU) {
        if (!UU || UU === Up.e) return 0;
        const RU = this.idOf(UU);
        if (void 0 === RU) throw new Error(`Invalid block name. You sent ${UU}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
        return RU
      }
      getItemName(UU) {
        if (!UU || UU === Up.e) return Up.e;
        const RU = this.idOf(UU);
        if (void 0 === RU) throw new Error(`Item ${UU} not found in registry`);
        return (0, pp.f)(RU)
      }
      blockNameToBlockId(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (UU === Up.e) return 0;
        let gU = this.idOf(UU);
        if (void 0 === gU || !this.isBlockId(gU)) {
          const RU = UU.indexOf("|"),
            tU = RU > 0 ? (0, pp.c)(UU.slice(0, RU)) : void 0;
          gU = void 0 !== tU && this.isBlockId(tU) && (0, Ut.rootMetaDescOf)(tU) === UU ? tU : void 0
        }
        if (void 0 !== gU) return gU;
        if (!RU) throw new Error(`Invalid block name. You sent ${UU}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
        return null
      }
      isBlockId(UU) {
        return UU > 0 && UU < this.props.blockFlags.length
      }
      nameOfId(UU) {
        return 0 !== UU && (0, pp.f)(UU) || Up.e
      }
      itemType(UU) {
        const RU = UU ? this.idOf(UU) : void 0;
        if (!RU) return null;
        let gU = this.types.get(RU);
        return void 0 === gU && (gU = Object.freeze({
          id: RU,
          name: (0, pp.f)(RU),
          meta: this.getMetaInfo(RU),
          stackable: Pp(this.props, RU),
          type: (0, Ut.itemTypeNameOf)(RU),
          clipSize: (0, Ut.clipSizeOf)(RU),
          scopeType: (0, Ut.scopeTypeOf)(RU),
          showsAimingUi: (0, Ut.showsAimingUi)(RU)
        }), this.types.set(RU, gU)), gU
      }
      getItemStat(UU, RU) {
        if (gp.e.has(RU)) {
          const gU = "minChargeStateToUse" === RU ? this.getMetaInfo(UU).rootName : this.getItemName(UU),
            tU = this.options.get((0, gp.f)(gU, RU));
          if (null !== tU && void 0 !== tU) return tU
        }
        return this.defaultStat(UU, RU, this.statOf(RU))
      }
      getDisplayName(UU) {
        return this.getItemStat(UU, "displayName")
      }
      getDefaultItemStat(UU, RU) {
        return this.defaultStat(UU, RU, this.statOf(RU))
      }
      statOf(UU) {
        const RU = qp[UU];
        return void 0 === RU && function(UU, RU) {
          throw new Error(`ClientApi.${UU} is not available yet in the wasm client (${RU})`)
        }(`getItemStat("${UU}")`, `a table of the stat: the wasm client answers ${Object.keys(qp).join(", ")}`), RU
      }
      defaultStat(UU, RU, gU) {
        const tU = this.idOf(UU),
          pU = void 0 === tU ? void 0 : gU(this.props, tU);
        return null !== pU && void 0 !== pU || "displayName" !== RU ? pU : this.getItemName(UU)
      }
      getClientOption(UU) {
        return this.options.get(UU)
      }
      getGunStats(UU) {
        return this.getClientOption(`${UU}GunStats`)
      }
      watchClientOption(UU, RU) {
        return this.options.subscribe(UU, RU)
      }
      isSolidBlockId(UU) {
        var RU;
        return 0 !== ((null !== (RU = this.props.blockFlags[UU]) && void 0 !== RU ? RU : 0) & CU.B.Solid)
      }
      isStackableId(UU) {
        return Pp(this.props, UU)
      }
      isFluidBlockId(UU) {
        var RU;
        return 0 !== ((null !== (RU = this.props.blockFlags[UU]) && void 0 !== RU ? RU : 0) & CU.B.Fluid)
      }
      canPlaceOverBlockId(UU) {
        var RU;
        return 0 !== ((null !== (RU = this.props.blockFlags[UU]) && void 0 !== RU ? RU : 0) & CU.B.PlaceOver)
      }
      attachedTopOf(UU) {
        var RU;
        return null !== (RU = this.props.blockAttachedTops[UU]) && void 0 !== RU ? RU : 0
      }
      isDroplessBlockId(UU) {
        return (0, Ut.dropsNothing)(UU)
      }
    }

    function Cp(UU, RU) {
      const gU = new Map;
      return (tU, pU) => {
        const EU = RU.idOf(tU),
          PU = void 0 === EU ? null : (tU => {
            let pU = gU.get(tU);
            if (void 0 === pU) {
              const EU = UU.queries.salvageRecipe(tU),
                PU = new DataView(UU.memory().buffer, UU.scratch(), EU),
                TU = [];
              for (let UU = 0; UU + CU.ee.BYTES <= EU; UU += CU.ee.BYTES) TU.push(Object.freeze({
                item: RU.nameOfId(CU.ee.item(PU, UU)),
                amt: CU.ee.amount(PU, UU)
              }));
              pU = 0 === TU.length ? null : Object.freeze(TU), gU.set(tU, pU)
            }
            return pU
          })(EU);
        if (null === PU || void 0 === pU) return PU;
        const TU = pU <= 0 ? 1 : pU;
        return PU.map((UU => {
          let {
            item: RU,
            amt: gU
          } = UU;
          return {
            item: RU,
            amt: gU * TU
          }
        }))
      }
    }
    var hp = gU(40295),
      Qp = gU(36482),
      ep = gU(36476),
      Wp = gU(36515),
      fp = gU(36072),
      xp = gU(40067),
      mp = gU(41923);
    const Ip = -1,
      Jp = new Uint8Array(0),
      wp = new TextEncoder;

    function np(UU) {
      if (null === UU) return null;
      const RU = wp.encode(UU);
      return RU.byteLength < jU.Hc ? RU : RU.subarray(0, jU.Hc - 1)
    }
    class bp {
      constructor(UU) {
        this.deps = UU, this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = Ip, this.keyframesSettled = !1, this.reloadFrom = Ip
      }
      reloadKeyframes() {
        var UU, RU;
        this.keyframesVersion = Ip, this.reloadFrom = null !== (UU = null === (RU = this.view()) || void 0 === RU ? void 0 : RU.version) && void 0 !== UU ? UU : Ip
      }
      setPlayback(UU) {
        const RU = 1 === this.deps.core.PpU(UU);
        return RU && (this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = Ip, this.reloadFrom = Ip), RU
      }
      async open(UU) {
        const RU = await this.deps.replay.open(UU);
        return "opening" === RU && (this.reloadKeyframes(), this.deps.recorder.prefetch()), RU
      }
      play() {
        this.deps.replay.play()
      }
      pause() {
        this.deps.replay.pause()
      }
      seek(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.deps.replay.seek(Math.max(0, Math.floor(UU)), RU)
      }
      setSpeed(UU) {
        this.deps.replay.setSpeed(UU)
      }
      setCameraMode(UU) {
        this.deps.replay.setCameraMode(mp.b.indexOf(UU))
      }
      view() {
        var UU;
        const RU = CU.w.replayViewPtr(this.deps.apiView(), 0);
        if (0 === RU) return this.lastView = null, null;
        const gU = new DataView(this.deps.buffer(), RU, CU.Wd.BYTES),
          tU = CU.Wd.version(gU, 0),
          pU = this.lastView;
        if (null !== pU && pU.version === tU) return pU;
        const EU = CU.Wd.markIn(gU, 0),
          PU = {
            version: tU,
            state: CU.Wd.state(gU, 0),
            cameraMode: null !== (UU = mp.b[CU.Wd.cameraMode(gU, 0)]) && void 0 !== UU ? UU : "recording",
            HG: CU.Wd.HG(gU, 0),
            totalTicks: CU.Wd.totalTicks(gU, 0),
            speed: CU.Wd.speed(gU, 0),
            mark: EU === CU.Vd ? null : {
              inTick: EU,
              outTick: CU.Wd.markOut(gU, 0)
            },
            editVersion: CU.Wd.editVersion(gU, 0)
          };
        return this.lastView = PU, PU
      }
      keyframes() {
        const UU = this.view();
        if (null === UU) return [];
        UU.version !== this.reloadFrom && (this.reloadFrom = Ip);
        const RU = this.reloadFrom === Ip && UU.state !== jU.kd.Cropping && UU.state !== jU.kd.None,
          gU = RU ? UU.editVersion : UU.version;
        if (gU === this.keyframesVersion && RU === this.keyframesSettled) return this.lastKeyframes;
        const {
          core: tU
        } = this.deps, pU = tU.TpU(), EU = tU.eQ(), PU = [];
        if (0 !== EU && pU > 0) {
          const UU = new DataView(this.deps.buffer(), EU, pU * jU.wc);
          for (let RU = 0; RU < pU; RU++) {
            const gU = RU * jU.wc,
              tU = RU => UU.getFloat64(gU + RU, !0);
            PU.push({
              HG: UU.getUint32(gU + jU.Ec, !0),
              position: [tU(jU.Cc), tU(jU.Cc + 8), tU(jU.Cc + 16)],
              direction: [tU(jU.zc), tU(jU.zc + 8), tU(jU.zc + 16)],
              easing: [tU(jU.Bc), tU(jU.Bc + 8), tU(jU.Bc + 16), tU(jU.Bc + 24)]
            })
          }
        }
        return this.keyframesVersion = gU, this.keyframesSettled = RU, this.lastKeyframes = PU, PU
      }
      addKeyframe() {
        const UU = this.deps.apiView(),
          RU = [CU.w.eye(UU, 0, 0), CU.w.eye(UU, 0, 1), CU.w.eye(UU, 0, 2)];
        return this.deps.replay.addKeyframe(RU, function(UU, RU) {
          const gU = Math.cos(RU);
          return [gU * Math.sin(UU), -Math.sin(RU), gU * Math.cos(UU)]
        }(CU.w.heading(UU, 0), CU.w.pitch(UU, 0)))
      }
      setKeyframe(UU) {
        return this.deps.replay.setKeyframe(UU.HG, Float64Array.from([...UU.position, ...UU.direction, ...UU.easing]))
      }
      moveKeyframe(UU, RU) {
        return this.deps.replay.moveKeyframe(UU, RU)
      }
      deleteKeyframes(UU, RU) {
        return this.deps.replay.deleteKeyframes(UU, RU)
      }
      setMark(UU) {
        var RU, gU;
        return this.deps.replay.setMark(null !== (RU = null === UU || void 0 === UU ? void 0 : UU.inTick) && void 0 !== RU ? RU : -1, null !== (gU = null === UU || void 0 === UU ? void 0 : UU.outTick) && void 0 !== gU ? gU : -1)
      }
      crop(UU, RU) {
        const gU = this.deps.replay.crop(UU, RU);
        return gU && this.reloadKeyframes(), gU
      }
      save(UU) {
        return this.deps.replay.askSave(), this.deps.recorder.saveEdited(UU)
      }
      recorderControl(UU) {
        this.deps.recorder.control(UU)
      }
      recorderPrefs(UU, RU) {
        this.deps.recorder.prefs(UU, RU)
      }
      recorderOption(UU, RU) {
        const gU = this.deps.cmd();
        return null !== gU && (0, CU.Kf)(gU, 0, UU, null === RU ? Jp : wp.encode(RU))
      }
      recordFlyingText(UU, RU, gU, tU) {
        const pU = this.deps.cmd(),
          EU = Math.max(0, Math.min(4294967295, Math.round(tU)));
        return null !== pU && (0, CU.Gf)(pU, 0, RU, gU, EU, wp.encode(UU))
      }
      recordPlayerKilled(UU, RU, gU, tU) {
        const pU = this.deps.cmd();
        return null !== pU && (0, CU.Lf)(pU, 0, UU, RU, Math.max(0, gU), wp.encode(tU))
      }
      recordKillfeed(UU, RU, gU) {
        var tU, pU;
        const EU = this.deps.cmd(),
          PU = function(UU) {
            const RU = UU.reduce(((UU, RU) => {
                var gU;
                return UU + ig.hb + (null !== (gU = null === RU || void 0 === RU ? void 0 : RU.byteLength) && void 0 !== gU ? gU : 0)
              }), 0),
              gU = new Uint8Array(RU),
              tU = new DataView(gU.buffer);
            let pU = 0;
            for (const PU of UU) {
              var EU;
              tU.setUint16(pU, null !== (EU = null === PU || void 0 === PU ? void 0 : PU.byteLength) && void 0 !== EU ? EU : jU.Hc, !0), pU += ig.hb, null !== PU && (gU.set(PU, pU), pU += PU.byteLength)
            }
            return gU
          }([np(UU.name), np(UU.colour), np(RU.name), np(RU.colour), np(gU)]);
        return null !== EU && (0, CU.If)(EU, 0, null !== (tU = UU.id) && void 0 !== tU ? tU : CU.dd, null !== (pU = RU.id) && void 0 !== pU ? pU : CU.dd, PU)
      }
      recorderSession(UU, RU) {
        this.deps.recorder.session({
          session: RU,
          lobbyType: UU.lobbyType,
          game: UU.gameNameWithVariation,
          lobby: UU.lobbyName
        })
      }
      recorderClose() {
        this.deps.core.qpU()
      }
      filePartDone(UU, RU) {
        this.deps.recorder.filePartDone(UU, RU)
      }
      fileDone(UU) {
        this.deps.recorder.fileDone(UU)
      }
    }
    const op = -2147483648;
    class Zp {
      constructor(UU) {
        var RU;
        this.deps = UU, this.state = {
          recording: !1,
          clipping: !1,
          hasClipBuffer: !1,
          seconds: 0
        }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (RU = UU.now) && void 0 !== RU ? RU : () => performance.now()
      }
      get current() {
        return this.state
      }
      get live() {
        var UU, RU, gU;
        return null === (UU = null === (RU = (gU = this.deps).live) || void 0 === RU ? void 0 : RU.call(gU)) || void 0 === UU || UU
      }
      activated(UU) {
        var RU, gU;
        this.live && (this.viewerShown(!0 === (null === (RU = (gU = this.deps).viewerOpen) || void 0 === RU ? void 0 : RU.call(gU))), this.deps.client.recorderSession(UU, (0, mp.f)()))
      }
      closed() {
        this.deps.client.recorderClose()
      }
      toggleRecording() {
        var UU, RU;
        this.live && (this.state.recording || !0 !== (null === (UU = (RU = this.deps).viewerOpen) || void 0 === UU ? void 0 : UU.call(RU))) ? this.deps.client.recorderControl(jU.Sc.ToggleRecording) : this.deps.notify(Wp.b.closeViewerFirst)
      }
      saveClip() {
        this.live ? this.deps.client.recorderControl(jU.Sc.SaveClip) : this.deps.notify(Wp.b.clippingNotOn)
      }
      viewerShown(UU) {
        this.live && this.deps.client.recorderControl(UU ? jU.Sc.ViewerOpened : jU.Sc.ViewerClosed)
      }
      setPrefs(UU, RU) {
        this.live && this.deps.client.recorderPrefs(UU, RU)
      }
      setOption(UU, RU) {
        this.live && this.deps.client.recorderOption(UU, RU)
      }
      recordFlyingText(UU, RU, gU, tU) {
        this.live && this.deps.client.recordFlyingText(UU, RU, gU, tU)
      }
      recordPlayerKilled(UU, RU, gU, tU) {
        this.live && this.deps.client.recordPlayerKilled(UU, RU, gU, tU)
      }
      recordKillfeed(UU, RU, gU) {
        this.live && this.deps.client.recordKillfeed(UU, RU, gU)
      }
      HG() {
        let UU = this.state;
        if (this.clipTickPending && (this.clipTickPending = !1, UU = {
            ...UU,
            hasClipBuffer: !0
          }), null !== this.recordingSince) {
          const RU = Math.floor((this.now() - this.recordingSince) / 1e3);
          RU !== UU.seconds && (UU = {
            ...UU,
            seconds: RU
          })
        }
        this.set(UU)
      }
      onEvent(UU) {
        var RU, gU;
        const {
          notify: tU
        } = this.deps, pU = Wp.b;
        switch (UU.what) {
          case jU.Rc.RecordingStarted:
            this.recordingSince = this.now(), this.set({
              ...this.state,
              recording: !0,
              seconds: 0
            }), tU(pU.recordingStarted);
            break;
          case jU.Rc.RecordingStopped:
            this.stopRecording(), tU(pU.recordingStopped), this.saveState(jU.bd.Recording, "saving");
            break;
          case jU.Rc.RecordingDiscarded:
            this.stopRecording(), tU(pU.recordingDiscarded);
            break;
          case jU.Rc.RecordingTurnedOff:
            this.stopRecording(), tU(pU.recordingTurnedOff);
            break;
          case jU.Rc.LimitReached:
            tU(pU.limitReached);
            break;
          case jU.Rc.ClipSaved:
            this.saveState(jU.bd.Clip, "saving");
            break;
          case jU.Rc.ClipEmpty:
            tU(pU.clipEmpty);
            break;
          case jU.Rc.ClippingNotOn:
            tU(pU.clippingNotOn);
            break;
          case jU.Rc.Disallowed:
            tU(pU.disallowed);
            break;
          case jU.Rc.ClippingOn:
            this.clipTickPending = !0, this.set({
              ...this.state,
              clipping: !0,
              hasClipBuffer: !1
            });
            break;
          case jU.Rc.ClippingOff:
            this.clipTickPending = !1, this.set({
              ...this.state,
              clipping: !1,
              hasClipBuffer: !1
            });
            break;
          case jU.Rc.ClipSettingsChanged:
            this.clipTickPending = this.state.clipping, this.set({
              ...this.state,
              hasClipBuffer: !1
            });
            break;
          case jU.Rc.SaveBusy:
            null === (RU = (gU = this.deps).onSaveState) || void 0 === RU || RU.call(gU, UU.kind, "busy"), tU(pU.saveBusy);
            break;
          case jU.Rc.CloseViewerFirst:
            tU(pU.closeViewerFirst)
        }
      }
      fileReady(UU, RU) {
        this.deps.download(RU), this.saveState(UU, "done"), this.deps.notify(UU === jU.bd.Clip ? Wp.b.clipSaved : Wp.b.recordingSaved)
      }
      failed(UU) {
        this.saveState(UU, "failed"), this.deps.notify(UU === jU.bd.Clip ? Wp.b.clipFailed : Wp.b.recordingFailed)
      }
      stopRecording() {
        this.recordingSince = null, this.set({
          ...this.state,
          recording: !1,
          seconds: 0
        })
      }
      saveState(UU, RU) {
        var gU, tU;
        null === (gU = (tU = this.deps).onSaveState) || void 0 === gU || gU.call(tU, UU, RU)
      }
      set(UU) {
        UU !== this.state && (this.state = UU, this.deps.onState(UU))
      }
    }
    const ap = new TextDecoder;

    function Yp(UU, RU, gU, tU) {
      const pU = [];
      for (let EU = 0; EU < tU; EU++) {
        if (RU + ig.hb > gU) return null;
        const tU = UU.getUint16(RU, !0);
        if (RU += ig.hb, tU !== jU.Hc) {
          if (RU + tU > gU) return null;
          pU.push(ap.decode(new Uint8Array(UU.buffer, UU.byteOffset + RU, tU))), RU += tU
        } else pU.push(null)
      }
      return RU === gU ? pU : null
    }

    function Bp(UU, RU) {
      let gU = new DataView(new ArrayBuffer(0)),
        tU = !0;
      const pU = {
        replayFailed: (RU, gU) => {
          UU.replayFailed({
            reason: RU,
            code: gU
          })
        },
        replayOption: (RU, pU, EU, PU) => {
          const TU = function(UU, RU, gU, tU) {
            switch (RU) {
              case jU.fd.Cleared:
                return 0 === tU ? null : void 0;
              case jU.fd.Text:
                return ap.decode(new Uint8Array(UU.buffer, UU.byteOffset + gU, tU));
              case jU.fd.Int:
                return tU === Int32Array.BYTES_PER_ELEMENT ? UU.getInt32(gU, !0) : void 0;
              case jU.fd.Double:
                return tU === Float64Array.BYTES_PER_ELEMENT ? UU.getFloat64(gU, !0) : void 0;
              default:
                return
            }
          }(gU, pU, EU, PU);
          void 0 !== TU ? UU.replayOption({
            key: RU,
            value: TU
          }) : tU = !1
        },
        replayUiEvent: (RU, pU, EU, PU, TU, qU) => {
          const KU = function(UU, RU, gU, tU, pU, EU, PU) {
            const TU = EU + PU;
            switch (RU) {
              case jU.hd.FlyingText: {
                const PU = Yp(UU, EU, TU, 1);
                return null !== PU && null !== PU[0] ? {
                  what: RU,
                  XE: gU,
                  rE: tU,
                  angle: pU,
                  contentJson: PU[0]
                } : null
              }
              case jU.hd.PlayerKilled: {
                const tU = Yp(UU, EU, TU, 3);
                return tU ? {
                  what: RU,
                  killstreak: gU,
                  dead: tU[0],
                  killer: tU[1],
                  withItem: tU[2]
                } : null
              }
              case jU.hd.Killfeed: {
                const gU = Yp(UU, EU, TU, 7);
                return gU ? {
                  what: RU,
                  killerId: gU[0],
                  killerName: gU[1],
                  killerColour: gU[2],
                  victimId: gU[3],
                  victimName: gU[4],
                  victimColour: gU[5],
                  withItem: gU[6]
                } : null
              }
              default:
                return null
            }
          }(gU, RU, pU, EU, PU, TU, qU);
          null !== KU ? UU.replayUiEvent(KU) : tU = !1
        },
        replayFilePart: (gU, pU, EU, PU) => {
          const TU = RU();
          EU + PU > TU.byteLength ? tU = !1 : UU.filePart(gU, pU, new Uint8Array(TU, EU, PU).slice())
        },
        replayFileReady: (RU, gU, tU, pU) => {
          UU.fileReady({
            save: RU,
            kind: gU,
            parts: tU,
            bytes: pU
          })
        },
        recorderEvent: (RU, gU, tU) => {
          UU.recorderEvent({
            what: RU,
            kind: gU,
            save: tU
          })
        },
        replayOpened: (RU, tU, pU) => {
          UU.replayOpened(ap.decode(new Uint8Array(gU.buffer, gU.byteOffset + tU, pU)))
        }
      };
      return (UU, RU, EU, PU) => !(UU < jU.Z.ReplayFailed || UU > jU.Z.RecorderEvent) && (gU = RU, tU = !0, (0, CU.ue)(UU, RU, EU, PU, pU) && tU)
    }

    function Vp(UU) {
      let RU = null;
      const gU = Bp(UU, (() => {
        if (null === RU) throw new Error("a recorder event read outside recorderEventReader's call");
        return RU.buffer
      }));
      return (UU, tU) => {
        RU = tU;
        try {
          ! function(UU, RU) {
            const gU = UU.slice(),
              tU = new DataView(gU.buffer);
            for (let pU = 0; pU < gU.byteLength;) {
              if (pU + jU.V > gU.byteLength) throw new Error(`the recorder module's events end mid-head at ${pU}`);
              const UU = tU.getUint32(pU, !0),
                EU = 65535 & UU,
                PU = UU >>> 16,
                TU = pU + jU.V;
              if (TU + PU > gU.byteLength || !RU(EU, tU, TU, PU)) throw new Error(`the recorder module wrote a malformed event ${EU} (${PU} bytes) at ${pU}`);
              pU = TU + (0, jU.te)(PU)
            }
          }(UU, gU)
        } finally {
          RU = null
        }
      }
    }
    class rp {
      constructor(UU, RU) {
        this.acks = UU, this.handlers = RU, this.parts = new Map
      }
      onPart(UU, RU, gU) {
        let tU = this.parts.get(UU);
        tU || (tU = [], this.parts.set(UU, tU)), tU[RU] = gU, this.acks.filePartDone(UU, RU)
      }
      onReady(UU) {
        var RU;
        const gU = null !== (RU = this.parts.get(UU.save)) && void 0 !== RU ? RU : [];
        this.parts.delete(UU.save);
        const tU = function(UU, RU, gU) {
          if (UU.length !== RU) return null;
          let tU = 0;
          for (let PU = 0; PU < RU; PU++) {
            if (void 0 === UU[PU]) return null;
            tU += UU[PU].byteLength
          }
          if (tU !== gU) return null;
          if (1 === RU) return UU[0];
          const pU = new Uint8Array(gU);
          let EU = 0;
          for (const PU of UU) pU.set(PU, EU), EU += PU.byteLength;
          return pU
        }(gU, UU.parts, UU.bytes);
        this.acks.fileDone(UU.save), null === tU ? this.handlers.fileIncomplete(UU.save, UU.kind) : this.handlers.fileReady(UU.save, UU.kind, tU)
      }
      onDiscarded(UU) {
        this.parts.delete(UU)
      }
    }

    function Xp() {
      return gU.e(57).then((() => gU(41963)))
    }
    class vp {
      constructor(UU) {
        this.deps = UU, this.sink = void 0, this.recorder = void 0, this.recorderEvents = void 0, this.parts = void 0, this.viewerChunk = null, this.viewer = null;
        const {
          client: RU
        } = UU;
        this.recorder = new Zp({
          client: RU,
          live: () => {
            var UU;
            return !0 !== (null === (UU = this.viewer) || void 0 === UU ? void 0 : UU.inPlayback)
          },
          viewerOpen: UU.viewerOpen,
          notify: UU.notify,
          download: RU => {
            var gU;
            null === (gU = UU.download) || void 0 === gU || gU.call(UU, RU)
          },
          onState: UU.onRecorderState,
          onSaveState: UU.onSaveState
        }), this.parts = new rp(RU, {
          fileReady: (UU, RU, gU) => {
            var tU;
            RU === jU.bd.Edited ? null === (tU = this.viewer) || void 0 === tU || tU.saveDone(gU) : this.recorder.fileReady(RU, gU)
          },
          fileIncomplete: (UU, RU) => {
            this.saveFailed(RU)
          }
        });
        const gU = {
          replayFailed: UU => {
            var RU;
            null === (RU = this.viewer) || void 0 === RU || RU.onFailed(UU)
          },
          replayOption: RU => {
            var gU;
            null === (gU = UU.onReplayOption) || void 0 === gU || gU.call(UU, RU)
          },
          replayUiEvent: RU => {
            var gU;
            null === (gU = UU.onReplayUiEvent) || void 0 === gU || gU.call(UU, RU)
          },
          filePart: (UU, RU, gU) => {
            this.parts.onPart(UU, RU, gU)
          },
          fileReady: UU => {
            this.parts.onReady(UU)
          },
          replayOpened: RU => {
            var gU;
            null === (gU = UU.onReplayOpened) || void 0 === gU || gU.call(UU, RU)
          },
          recorderEvent: UU => {
            var RU;
            switch (UU.what) {
              case jU.Rc.FileDiscarded:
                this.parts.onDiscarded(UU.save);
                break;
              case jU.Rc.SaveFailed:
                this.saveFailed(UU.kind);
                break;
              case jU.Rc.SaveBusy:
                if (null !== (RU = this.viewer) && void 0 !== RU && RU.savePending) {
                  this.viewer.saveFailed(!0);
                  break
                }
                this.recorder.onEvent(UU);
                break;
              default:
                this.recorder.onEvent(UU)
            }
          }
        };
        this.sink = function(UU, RU) {
          return {
            onReplayEvent: Bp(UU, RU)
          }
        }(gU, UU.buffer), this.recorderEvents = Vp(gU)
      }
      get currentViewer() {
        return this.viewer
      }
      loadViewer() {
        var UU;
        return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (UU = this.deps.loadViewer) && void 0 !== UU ? UU : Xp)().catch((UU => {
          throw this.viewerChunk = null, UU
        })), this.viewerChunk.then((UU => (this.viewer ??= new UU.ReplayViewer({
          client: this.deps.client,
          setHoldDraws: this.deps.setHoldDraws,
          meshPending: this.deps.meshPending,
          notify: this.deps.notify,
          onChange: () => {
            var UU, RU;
            null === (UU = (RU = this.deps).onViewerChange) || void 0 === UU || UU.call(RU)
          }
        }), this.viewer))))
      }
      activated(UU) {
        this.recorder.activated(UU)
      }
      afterFrame(UU) {
        try {
          UU > 0 && this.recorder.HG()
        } finally {
          var RU;
          null === (RU = this.viewer) || void 0 === RU || RU.afterFrame()
        }
      }
      end() {
        var UU;
        null === (UU = this.viewer) || void 0 === UU || UU.end()
      }
      saveFailed(UU) {
        var RU;
        UU === jU.bd.Edited ? null === (RU = this.viewer) || void 0 === RU || RU.saveFailed(!1) : this.recorder.failed(UU)
      }
    }
    var dp = gU(39994),
      Hp = gU(40016),
      Sp = gU(4460),
      sp = gU(40389);
    class yp {
      constructor(UU) {
        this.deps = UU, this.analogue = [0, 0], this.keys = 0, this.unsent = !1
      }
      drag(UU, RU) {
        if (!this.deps.live() || 0 === UU && 0 === RU) return;
        const gU = (0, dU.t)(0, performance.now()),
          tU = this.deps.dragScale();
        (0, sp.i)((() => {
          (0, dU.z)(jU.vb.MouseDown, 0, 0, 0, gU), (0, dU.z)(jU.vb.MouseMove, 0, UU * tU, RU * tU, 0), (0, dU.z)(jU.vb.MouseUp, 0, 0, 0, gU)
        }))
      }
      move(UU) {
        var RU, gU;
        this.analogue[0] = null !== (RU = null === UU || void 0 === UU ? void 0 : UU.x) && void 0 !== RU ? RU : 0, this.analogue[1] = null !== (gU = null === UU || void 0 === UU ? void 0 : UU.y) && void 0 !== gU ? gU : 0, this.send()
      }
      holdVertical(UU, RU) {
        const gU = "freeCamUp" === UU ? CU.Vb.Up : CU.Vb.Down;
        this.keys = RU ? this.keys | gU : this.keys & ~gU, this.send()
      }
      flush() {
        this.unsent && this.send()
      }
      send() {
        const UU = this.deps.live() ? this.deps.cmd() : null;
        this.unsent = null !== UU && !(0, CU.Ne)(UU, 0, this.analogue, this.keys)
      }
    }
    var kp = gU(696),
      Fp = gU(279),
      ip = gU(96),
      Ap = gU(8908);

    function zp() {
      const UU = tU.b.get("clientEscMenuOptions"),
        RU = (0, kp.m)(UU);
      return {
        mouse: (0, ip.isMobile)() ? RU : UU.mouseSensitivity,
        touch: RU,
        fovPercent: UU.cameraFOV
      }
    }

    function Mp() {
      const UU = tU.b.get("clientEscMenuOptions"),
        RU = tU.b.get("isTouchScreen") ? (0, kp.m)(UU) : UU.mouseSensitivity,
        gU = zp().mouse;
      return gU > 0 ? RU / gU : 1
    }

    function Dp(UU) {
      const RU = () => {
        UU.setSoundPrefs(tU.b.get("soundVolume"), tU.b.get("soundOnFromAd"))
      };
      let gU = null;
      const pU = () => {
        const {
          showFog: RU,
          enableLighting: pU,
          fogChunkDistance: EU,
          chunkFadeIn: PU
        } = tU.b.get("clientEscMenuOptions"), TU = {
          showFog: RU,
          lighting: pU,
          fogChunks: EU,
          chunkFade: PU
        };
        gU && (0, jU.ee)(gU) === (0, jU.ee)(TU) && gU.fogChunks === EU || (gU = TU, UU.setEnvPrefs(gU))
      };
      let EU = null;
      const TU = () => {
        const RU = function() {
          const UU = tU.b.get("clientEscMenuOptions");
          return {
            nametagsHidden: tU.b.get("areNametagsHidden"),
            crouchToggle: UU.crouchIsToggle,
            bhopDisabled: UU.disableBunnyHopping,
            disableBobbing: UU.disableBobbing,
            ezTowering: UU.ezTowering && (0, Fp.g)(),
            ezBridging: UU.ezBridging,
            showChunkBorders: UU.showChunkBorders,
            nametagCutDistance: (0, Ap.f)()
          }
        }();
        (0, bU.re)(EU, RU) || (EU = RU, UU.setUiPrefs(RU))
      };
      let qU = null;
      const KU = () => {
        const RU = zp();
        (0, bU.re)(qU, RU) || (qU = RU, UU.setLookPrefs(RU))
      };
      RU(), pU(), TU(), KU();
      const cU = [(0, PU.t)("appManagerUpdated|soundVolume", RU), (0, PU.t)("appManagerUpdated|soundOnFromAd", RU), (0, PU.t)("appManagerUpdated|clientEscMenuOptions", (() => {
        pU(), TU(), KU()
      })), (0, PU.t)("appManagerUpdated|areNametagsHidden", TU), (0, PU.t)("appManagerUpdated|showDistantNametags", TU)];
      return () => {
        for (const UU of cU) UU()
      }
    }
    var Lp = gU(40308),
      Np = gU(40312);
    var lp = (0, Np.d)("lend"),
      Op = (0, Np.d)("starting"),
      UE = (0, Np.d)("generation"),
      RE = (0, Np.d)("end");
    class gE {
      constructor(UU) {
        this.deps = UU, Object.defineProperty(this, RE, {
          value: tE
        }), Object.defineProperty(this, lp, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Op, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, UE, {
          writable: !0,
          value: 0
        })
      }
      get active() {
        return null !== (0, Lp.b)(this, lp)[lp] || (0, Lp.b)(this, Op)[Op]
      }
      async start(UU) {
        if (this.active) return "busy";
        const RU = (0, Lp.b)(this, UE)[UE];
        (0, Lp.b)(this, Op)[Op] = !0;
        try {
          if (!await this.deps.ensureLoaded()) return "refused"
        } finally {
          (0, Lp.b)(this, Op)[Op] = !1
        }
        if (RU !== (0, Lp.b)(this, UE)[UE]) return "refused";
        const gU = this.deps.beginSave();
        if (!gU) return "refused";
        const tU = Number(BigInt.asUintN(32, UU)),
          pU = Number(BigInt.asUintN(32, UU >> 32n));
        let EU = "refused";
        return this.deps.recorderCall(((UU, RU) => {
          const PU = gU.editState,
            TU = UU.stage(PU.length);
          0 !== TU ? (new Uint8Array(RU.buffer, TU, PU.length).set(PU), UU.KpU(gU.headLen, tU, pU) && (EU = "sealing")) : EU = "tooLarge"
        }), !0), "sealing" !== EU ? (gU.end(), EU) : ((0, Lp.b)(this, lp)[lp] = gU, "sealing")
      }
      beforeRecorderStep() {
        const UU = (0, Lp.b)(this, lp)[lp];
        if (!UU) return null;
        let RU = -1,
          gU = 0;
        if (!this.deps.recorderCall((UU => {
            RU = UU.cpU(), RU > 0 && (gU = UU.GpU())
          }))) return (0, Lp.b)(this, RE)[RE](UU, "stopped");
        if (RU < 0) return (0, Lp.b)(this, RE)[RE](UU, "read");
        if (0 === RU) return null;
        const tU = UU.head(gU, RU);
        let pU = !1;
        if (tU && this.deps.recorderCall(((UU, gU) => {
            const EU = UU.stage(RU);
            0 !== EU && (new Uint8Array(gU.buffer, EU, RU).set(tU), pU = !0)
          }), !0), pU) return null;
        const EU = UU.givenUp();
        this.deps.recorderCall((UU => {
          UU.jpU()
        }));
        const PU = (0, Lp.b)(this, RE)[RE](UU, EU ? "givenUp" : "stopped");
        return EU && this.deps.givenUp("Reopen the replay you were editing to make your edits again, as they weren't saved when another replay opened."), PU
      }
      stop() {
        (0, Lp.b)(this, UE)[UE]++;
        const UU = (0, Lp.b)(this, lp)[lp];
        UU && (this.deps.recorderCall((UU => {
          UU.jpU()
        })), (0, Lp.b)(this, RE)[RE](UU, "stopped"))
      }
    }

    function tE(UU, RU) {
      return (0, Lp.b)(this, lp)[lp] = null, UU.end(), RU
    }

    function pE(UU, RU) {
      const gU = new Uint8Array(4),
        tU = new DataView(gU.buffer);
      return tU.setUint8(0, UU ? 1 : 0), tU.setUint16(2, Math.max(0, Math.min(65535, Math.round(RU))), !0), gU
    }

    function EE(UU, RU) {
      return UU > function(UU) {
        return 16777216 + 314572.8 * Math.max(0, UU)
      }(RU) + 33554432
    }
    let PE = null;

    function TE(UU) {
      return PE ??= async function(UU) {
        const RU = UU.loadInFlight();
        RU && await RU.catch((() => {}));
        if (UU.trapped()) return "trapped";
        if (UU.busy() || !EE(UU.memoryBytes(), UU.clipSeconds())) return "xu";
        UU.unload();
        let gU = !1;
        try {
          gU = await UU.load()
        } catch {
          gU = !1
        }
        if (!gU) return UU.trapped() ? "trapped" : UU.pC() ? "pC" : "failed";
        return "recycled"
      }(UU).finally((() => {
        PE = null
      })), PE
    }
    const qE = "Replay recording couldn't load, so try again.",
      KE = new Set([jU.Sc.ToggleRecording, jU.Sc.SaveClip]);
    var cE = (0, Np.d)("bindings"),
      GE = (0, Np.d)("module"),
      jE = (0, Np.d)("memory"),
      uE = (0, Np.d)("trapped"),
      CE = (0, Np.d)("pC"),
      hE = (0, Np.d)("recycleDue"),
      QE = (0, Np.d)("loading"),
      eE = (0, Np.d)("generation"),
      WE = (0, Np.d)("viewDrawn"),
      fE = (0, Np.d)("clip"),
      xE = (0, Np.d)("session"),
      mE = (0, Np.d)("control"),
      IE = (0, Np.d)("deferred"),
      JE = (0, Np.d)("coreU8"),
      wE = (0, Np.d)("coreU32"),
      nE = (0, Np.d)("moduleU8"),
      bE = (0, Np.d)("edited"),
      oE = (0, Np.d)("sendSession"),
      ZE = (0, Np.d)("checkNotInEvents"),
      aE = (0, Np.d)("clipping"),
      YE = (0, Np.d)("busy"),
      BE = (0, Np.d)("use"),
      VE = (0, Np.d)("ensureLoaded"),
      rE = (0, Np.d)("loadOnce"),
      XE = (0, Np.d)("recycleAfterStep"),
      vE = (0, Np.d)("settleRecycle"),
      dE = (0, Np.d)("load"),
      HE = (0, Np.d)("attach"),
      SE = (0, Np.d)("resendHeld"),
      sE = (0, Np.d)("recycle"),
      yE = (0, Np.d)("send"),
      kE = (0, Np.d)("unload"),
      FE = (0, Np.d)("dropModule"),
      iE = (0, Np.d)("coreBytes"),
      AE = (0, Np.d)("coreWords"),
      zE = (0, Np.d)("moduleBytes"),
      ME = (0, Np.d)("loadFailed"),
      DE = (0, Np.d)("call"),
      LE = (0, Np.d)("guard"),
      NE = (0, Np.d)("trapOn");
    class lE {
      constructor(UU) {
        this.deps = UU, Object.defineProperty(this, NE, {
          value: mP
        }), Object.defineProperty(this, LE, {
          value: xP
        }), Object.defineProperty(this, DE, {
          value: fP
        }), Object.defineProperty(this, ME, {
          value: WP
        }), Object.defineProperty(this, zE, {
          value: eP
        }), Object.defineProperty(this, AE, {
          value: QP
        }), Object.defineProperty(this, iE, {
          value: hP
        }), Object.defineProperty(this, FE, {
          value: CP
        }), Object.defineProperty(this, kE, {
          value: uP
        }), Object.defineProperty(this, yE, {
          value: jP
        }), Object.defineProperty(this, sE, {
          value: GP
        }), Object.defineProperty(this, SE, {
          value: cP
        }), Object.defineProperty(this, HE, {
          value: KP
        }), Object.defineProperty(this, dE, {
          value: qP
        }), Object.defineProperty(this, vE, {
          value: TP
        }), Object.defineProperty(this, XE, {
          value: PP
        }), Object.defineProperty(this, rE, {
          value: EP
        }), Object.defineProperty(this, VE, {
          value: pP
        }), Object.defineProperty(this, BE, {
          value: tP
        }), Object.defineProperty(this, YE, {
          value: gP
        }), Object.defineProperty(this, aE, {
          value: RP
        }), Object.defineProperty(this, ZE, {
          value: UP
        }), Object.defineProperty(this, oE, {
          value: OE
        }), Object.defineProperty(this, cE, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, GE, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, jE, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, uE, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, CE, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, hE, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, QE, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, eE, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, WE, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, fE, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, xE, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, mE, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, IE, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, JE, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, wE, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, nE, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, bE, {
          writable: !0,
          value: void 0
        }), (0, Lp.b)(this, bE)[bE] = new gE({
          ensureLoaded: () => (0, Lp.b)(this, VE)[VE](),
          recorderCall: (UU, RU) => {
            RU && (0, Lp.b)(this, ZE)[ZE]("an edited save's stage");
            const gU = (0, Lp.b)(this, DE)[DE](((RU, gU) => (UU(RU, gU), !0)));
            return null !== gU && void 0 !== gU && gU
          },
          beginSave: UU.beginSave,
          givenUp: UU.givenUp
        })
      }
      get active() {
        return null !== (0, Lp.b)(this, GE)[GE]
      }
      get trapped() {
        return (0, Lp.b)(this, uE)[uE]
      }
      get loading() {
        return null !== (0, Lp.b)(this, QE)[QE]
      }
      prefetch() {
        (0, Lp.b)(this, CE)[CE] || (0, Lp.b)(this, uE)[uE] || (0, Lp.b)(this, GE)[GE] || (0, Lp.b)(this, QE)[QE] || this.deps.prefetch()
      }
      viewDrawn() {
        (0, Lp.b)(this, WE)[WE] = !0, (0, Lp.b)(this, aE)[aE]() && (0, Lp.b)(this, BE)[BE]()
      }
      prefs(UU, RU) {
        (0, Lp.b)(this, fE)[fE] = {
          on: UU,
          seconds: RU
        }, (0, Lp.b)(this, yE)[yE](jU.Pc.Prefs, pE(UU, RU)), UU && (0, Lp.b)(this, WE)[WE] && (0, Lp.b)(this, BE)[BE]()
      }
      control(UU) {
        const RU = function(UU) {
          return new Uint8Array([UU, 0, 0, 0])
        }(UU);
        if (KE.has(UU)) return (0, Lp.b)(this, GE)[GE] ? void(0, Lp.b)(this, yE)[yE](jU.Pc.Control, RU) : ((0, Lp.b)(this, mE)[mE] = RU, void(0, Lp.b)(this, BE)[BE]());
        (0, Lp.b)(this, CE)[CE] || this.deps.coreCommand(jU.Pc.Control, RU)
      }
      session(UU) {
        (0, Lp.b)(this, xE)[xE] = UU, (0, Lp.b)(this, oE)[oE](UU)
      }
      filePartDone(UU, RU) {
        (0, Lp.b)(this, yE)[yE](jU.Pc.FilePartDone, function(UU, RU) {
          const gU = new Uint8Array(8),
            tU = new DataView(gU.buffer);
          return tU.setUint32(0, UU, !0), tU.setUint32(4, RU, !0), gU
        }(UU, RU))
      }
      fileDone(UU) {
        return (0, Lp.b)(this, yE)[yE](jU.Pc.FileDone, function(UU) {
          const RU = new Uint8Array(4);
          return new DataView(RU.buffer).setUint32(0, UU, !0), RU
        }(UU)), (0, Lp.b)(this, XE)[XE]()
      }
      saveEdited(UU) {
        return (0, Lp.b)(this, ZE)[ZE]("saveEdited"), (0, Lp.b)(this, bE)[bE].start(UU)
      }
      afterFrame() {
        if (!(0, Lp.b)(this, GE)[GE]) return;
        "read" === (0, Lp.b)(this, bE)[bE].beforeRecorderStep() && (0, Lp.b)(this, XE)[XE]();
        const UU = (0, Lp.b)(this, hE)[hE];
        (0, Lp.b)(this, hE)[hE] = null;
        const RU = (0, Lp.b)(this, GE)[GE],
          gU = (0, Lp.b)(this, jE)[jE];
        if (!RU || !gU) return void(null === UU || void 0 === UU || UU.resolve((0, Lp.b)(this, uE)[uE] ? "trapped" : "xu"));
        const {
          core: tU
        } = this.deps, pU = tU.hpU(2);
        let EU, PU, TU, qU, KU = 0,
          cU = 0;
        if (0 !== pU) {
          var GU, jU;
          const UU = (0, Lp.b)(this, AE)[AE]();
          KU = null !== (GU = UU[pU >>> 2]) && void 0 !== GU ? GU : 0, cU = null !== (jU = UU[1 + (pU >>> 2)]) && void 0 !== jU ? jU : 0
        }
        try {
          if (cU > 0) {
            const UU = RU.feed(cU);
            0 !== UU && (0, Lp.b)(this, zE)[zE](gU).set((0, Lp.b)(this, iE)[iE]().subarray(KU, KU + cU), UU)
          }
          EU = RU.step(), PU = RU.QpU(), TU = RU.epU(), qU = RU.WpU()
        } catch (uU) {
          if (!(0, Lp.b)(this, NE)[NE](uU)) throw null === UU || void 0 === UU || UU.resolve("xu"), uU;
          return void(null === UU || void 0 === UU || UU.resolve("trapped"))
        }
        if (EU > 0) {
          const UU = tU.fpU(2, EU);
          0 !== UU && (0, Lp.b)(this, iE)[iE]().set((0, Lp.b)(this, zE)[zE](gU).subarray(PU, PU + EU), UU)
        }
        if (TU > 0) {
          (0, Lp.b)(this, IE)[IE] = [];
          try {
            this.deps.events(new Uint8Array(gU.buffer, qU, TU), gU)
          } catch (uU) {
            throw null === UU || void 0 === UU || UU.resolve("xu"), uU
          } finally {
            const UU = (0, Lp.b)(this, IE)[IE];
            (0, Lp.b)(this, IE)[IE] = null;
            for (const [RU, gU] of UU)(0, Lp.b)(this, yE)[yE](RU, gU)
          }
        }
        if (!(0, Lp.b)(this, aE)[aE]() && !(0, Lp.b)(this, YE)[YE]()) return (0, Lp.b)(this, kE)[kE](), void(null === UU || void 0 === UU || UU.resolve("xu"));
        null === UU || void 0 === UU || UU.resolve((0, Lp.b)(this, sE)[sE]())
      }
      dispose() {
        (0, Lp.b)(this, CE)[CE] = !0, (0, Lp.b)(this, kE)[kE]()
      }
    }

    function OE(UU) {
      (0, Lp.b)(this, yE)[yE](jU.Pc.Session, function(UU) {
        const RU = new TextEncoder,
          gU = RU.encode(UU.game).subarray(0, 65535),
          tU = RU.encode(UU.lobby).subarray(0, 65535),
          pU = new Uint8Array(22 + gU.length + 2 + tU.length),
          EU = new DataView(pU.buffer);
        EU.setFloat64(0, UU.unixMs, !0), EU.setBigUint64(8, BigInt.asUintN(64, UU.session), !0), EU.setUint8(16, UU.lobbyType);
        let PU = 20;
        for (const TU of [gU, tU]) EU.setUint16(PU, TU.length, !0), pU.set(TU, PU + 2), PU += 2 + TU.length;
        return pU
      }({
        ...UU,
        unixMs: this.deps.unixNow()
      }))
    }

    function UP(UU) {
      false
    }

    function RP() {
      var UU, RU;
      return null !== (UU = null === (RU = (0, Lp.b)(this, fE)[fE]) || void 0 === RU ? void 0 : RU.on) && void 0 !== UU && UU
    }

    function gP() {
      const UU = (0, Lp.b)(this, GE)[GE];
      let RU = !0;
      if (UU) try {
        RU = UU.busy()
      } catch (gU) {
        if (!(0, Lp.b)(this, NE)[NE](gU)) throw gU
      }
      return RU || (0, Lp.b)(this, bE)[bE].active
    }
    async function tP() {
      !(0, Lp.b)(this, CE)[CE] && this.deps.allowed() ? await (0, Lp.b)(this, VE)[VE]() : (0, Lp.b)(this, mE)[mE] = null
    }

    function pP() {
      return (0, Lp.b)(this, uE)[uE] || (0, Lp.b)(this, CE)[CE] ? Promise.resolve(!1) : (0, Lp.b)(this, GE)[GE] ? Promise.resolve(!0) : ((0, Lp.b)(this, QE)[QE] ??= (0, Lp.b)(this, rE)[rE](), (0, Lp.b)(this, QE)[QE])
    }
    async function EP() {
      let UU = !1;
      try {
        return UU = await (0, Lp.b)(this, dE)[dE](), UU
      } finally {
        UU || ((0, Lp.b)(this, mE)[mE] = null), (0, Lp.b)(this, QE)[QE] = null
      }
    }

    function PP() {
      if (!(0, Lp.b)(this, GE)[GE]) return Promise.resolve((0, Lp.b)(this, uE)[uE] ? "trapped" : "xu");
      if (!(0, Lp.b)(this, hE)[hE]) {
        let UU = () => {};
        const RU = new Promise((RU => {
          UU = RU
        }));
        (0, Lp.b)(this, hE)[hE] = {
          promise: RU,
          resolve: UU
        }
      }
      return (0, Lp.b)(this, hE)[hE].promise
    }

    function TP(UU) {
      const RU = (0, Lp.b)(this, hE)[hE];
      (0, Lp.b)(this, hE)[hE] = null, null === RU || void 0 === RU || RU.resolve(UU)
    }
    async function qP() {
      let UU = (0, Lp.b)(this, cE)[cE];
      if (!UU) {
        const RU = (0, Lp.b)(this, eE)[eE];
        try {
          UU = await this.deps.load()
        } catch (gU) {
          return RU === (0, Lp.b)(this, eE)[eE] && await (0, Lp.b)(this, ME)[ME](gU), !1
        }
        if (RU !== (0, Lp.b)(this, eE)[eE]) return this.deps.unload(), !1;
        const tU = UU,
          pU = (0, Lp.b)(this, LE)[LE]((() => tU.xpU()));
        if (void 0 === pU) return !1;
        const EU = this.deps.core.mpU();
        if (pU !== EU) return await (0, Lp.b)(this, ME)[ME](new Error(`recorder port version ${pU}, the core's ${EU}`)), !1;
        (0, Lp.b)(this, cE)[cE] = UU
      }
      const RU = UU;
      try {
        if (!(0, Lp.b)(this, LE)[LE]((() => ((0, Lp.b)(this, GE)[GE] = new RU.IpU, (0, Lp.b)(this, jE)[jE] = RU.upU(), !0)))) return !1;
        (0, Lp.b)(this, SE)[SE]();
        const UU = (0, Lp.b)(this, mE)[mE];
        return (0, Lp.b)(this, mE)[mE] = null, UU && (0, Lp.b)(this, yE)[yE](jU.Pc.Control, UU), (0, Lp.b)(this, HE)[HE]()
      } catch (gU) {
        return (0, Lp.b)(this, kE)[kE](), await (0, Lp.b)(this, ME)[ME](gU), !1
      }
    }

    function KP() {
      return this.deps.core.JpU(0), 1 === this.deps.core.JpU(1) || ((0, Lp.b)(this, kE)[kE](), this.deps.failed(qE), !1)
    }

    function cP() {
      (0, Lp.b)(this, fE)[fE] && (0, Lp.b)(this, yE)[yE](jU.Pc.Prefs, pE((0, Lp.b)(this, fE)[fE].on, (0, Lp.b)(this, fE)[fE].seconds)), (0, Lp.b)(this, xE)[xE] && (0, Lp.b)(this, oE)[oE]((0, Lp.b)(this, xE)[xE])
    }

    function GP() {
      return TE({
        memoryBytes: this.deps.memoryBytes,
        clipSeconds: () => {
          var UU, RU;
          return null !== (UU = null === (RU = (0, Lp.b)(this, fE)[fE]) || void 0 === RU ? void 0 : RU.seconds) && void 0 !== UU ? UU : 0
        },
        trapped: () => (0, Lp.b)(this, uE)[uE],
        busy: () => (0, Lp.b)(this, YE)[YE](),
        loadInFlight: () => (0, Lp.b)(this, QE)[QE],
        pC: () => (0, Lp.b)(this, CE)[CE],
        unload: () => {
          (0, Lp.b)(this, kE)[kE]()
        },
        load: () => (0, Lp.b)(this, VE)[VE]()
      })
    }

    function jP(UU, RU) {
      (0, Lp.b)(this, IE)[IE] ? (0, Lp.b)(this, IE)[IE].push([UU, RU]): (0, Lp.b)(this, DE)[DE](((gU, tU) => {
        const pU = gU.CpU(RU.length);
        0 !== pU && (new Uint8Array(tU.buffer, pU, RU.length).set(RU), gU.command(UU, RU.length))
      }))
    }

    function uP() {
      (0, Lp.b)(this, eE)[eE]++, (0, Lp.b)(this, vE)[vE]("xu"), (0, Lp.b)(this, bE)[bE].stop(), this.deps.core.JpU(0), (0, Lp.b)(this, FE)[FE](), (0, Lp.b)(this, uE)[uE] || ((0, Lp.b)(this, cE)[cE] = null, this.deps.unload())
    }

    function CP() {
      (0, Lp.b)(this, DE)[DE]((UU => {
        UU.free()
      })), (0, Lp.b)(this, GE)[GE] = null, (0, Lp.b)(this, jE)[jE] = null, (0, Lp.b)(this, nE)[nE] = null
    }

    function hP() {
      var UU;
      const RU = this.deps.coreBuffer();
      return (null === (UU = (0, Lp.b)(this, JE)[JE]) || void 0 === UU ? void 0 : UU.buffer) !== RU && ((0, Lp.b)(this, JE)[JE] = new Uint8Array(RU)), (0, Lp.b)(this, JE)[JE]
    }

    function QP() {
      var UU;
      const RU = this.deps.coreBuffer();
      return (null === (UU = (0, Lp.b)(this, wE)[wE]) || void 0 === UU ? void 0 : UU.buffer) !== RU && ((0, Lp.b)(this, wE)[wE] = new Uint32Array(RU, 0, RU.byteLength >>> 2)), (0, Lp.b)(this, wE)[wE]
    }

    function eP(UU) {
      var RU;
      const gU = UU.buffer;
      return (null === (RU = (0, Lp.b)(this, nE)[nE]) || void 0 === RU ? void 0 : RU.buffer) !== gU && ((0, Lp.b)(this, nE)[nE] = new Uint8Array(gU)), (0, Lp.b)(this, nE)[nE]
    }
    async function WP(UU) {
      await this.deps.staleOr(UU, (() => {
        this.deps.failed(qE)
      }))
    }

    function fP(UU) {
      const RU = (0, Lp.b)(this, GE)[GE],
        gU = (0, Lp.b)(this, jE)[jE];
      if (RU && gU) return (0, Lp.b)(this, LE)[LE]((() => UU(RU, gU)))
    }

    function xP(UU) {
      if (!(0, Lp.b)(this, uE)[uE]) try {
        return UU()
      } catch (RU) {
        if (!(0, Lp.b)(this, NE)[NE](RU)) throw RU;
        return
      }
    }

    function mP(UU) {
      return UU instanceof WebAssembly.RuntimeError && ((0, Lp.b)(this, uE)[uE] = !0, (0, Lp.b)(this, GE)[GE] = null, (0, Lp.b)(this, jE)[jE] = null, (0, Lp.b)(this, nE)[nE] = null, (0, Lp.b)(this, cE)[cE] = null, (0, Lp.b)(this, mE)[mE] = null, (0, Lp.b)(this, vE)[vE]("trapped"), this.deps.core.JpU(0), (0, Lp.b)(this, bE)[bE].stop(), this.deps.crash(this.deps.markTrapped(UU)), this.deps.failed("Replay recording stopped working, so reload the page to record replays again."), !0)
    }
    var IP = gU(38198);
    const JP = new Map([
      ["skyblock", () => gU.e(49).then((() => gU(38190)))]
    ]);

    function wP(UU) {
      const RU = JP.get(UU);
      return RU ? RU().then((() => {
        const RU = (0, IP.c)(UU);
        if (!RU) throw new Error(`${UU}'s replay hook module registered no hook`);
        return RU
      })) : null
    }
    class nP {
      constructor(UU) {
        this.deps = UU, this.game = null, this.hook = null, this.generation = 0, this.all = !1, this.pending = new Map, this.ids = new Int32Array(64)
      }
      get wantsWatch() {
        return null !== this.hook
      }
      opened(UU) {
        if (this.pending.clear(), UU === this.game && null !== this.hook) return void(this.all = !0);
        const RU = ++this.generation;
        this.game = UU, this.hook = null, this.all = !1;
        const gU = this.deps.loadHook(UU);
        null === gU || void 0 === gU || gU.then((UU => {
          RU === this.generation && (this.hook = UU, this.all = !0)
        }), (UU => {
          RU === this.generation && this.deps.onError(UU)
        }))
      }
      ended() {
        this.generation++, this.game = null, this.hook = null, this.all = !1, this.pending.clear()
      }
      entityAdded(UU) {
        null === this.hook || this.all || this.pending.set(UU, !0)
      }
      entityInfoChanged(UU) {
        null === this.hook || this.all || this.pending.has(UU) || this.pending.set(UU, !1)
      }
      flush(UU) {
        const {
          hook: RU
        } = this;
        if (null === RU || !UU || !this.all && 0 === this.pending.size) return;
        const gU = this.deps.cmd();
        if (null === gU) return;
        const {
          api: tU
        } = this.deps;
        if (this.all) {
          this.all = !1, this.pending.clear();
          const {
            ids: UU,
            count: RU
          } = vg(tU, this.ids);
          this.ids = UU;
          for (let gU = 0; gU < RU; gU++) this.pending.set(UU[gU], !0)
        }
        const pU = this.ids = dg(this.ids, this.pending.size);
        let EU = 0;
        for (const KU of this.pending.keys()) pU[EU++] = KU;
        const PU = [],
          TU = Hg(tU, pU, EU, ((UU, RU) => {
            null !== RU && PU.push({
              serverId: UU,
              info: RU,
              spawned: !0 === this.pending.get(UU)
            })
          }));
        if (TU) {
          this.pending.clear();
          for (const {
              serverId: UU,
              info: tU,
              spawned: pU
            }
            of PU) try {
            RU(tU, {
              setFacingTolerance: RU => {
                null === RU && pU || Eg(gU, UU, RU) || this.pending.set(UU, pU)
              }
            })
          } catch (qU) {
            this.deps.onError(qU)
          }
        }
      }
    }
    var bP = (0, Np.d)("bindings"),
      oP = (0, Np.d)("module"),
      ZP = (0, Np.d)("memory"),
      aP = (0, Np.d)("trapped"),
      YP = (0, Np.d)("generation"),
      BP = (0, Np.d)("loading"),
      VP = (0, Np.d)("lend"),
      rP = (0, Np.d)("givenUp"),
      XP = (0, Np.d)("afterSave"),
      vP = (0, Np.d)("opens"),
      dP = (0, Np.d)("saveAskedAt"),
      HP = (0, Np.d)("unload"),
      SP = (0, Np.d)("dropModule"),
      sP = (0, Np.d)("loadFailed"),
      yP = (0, Np.d)("saveReadsBody"),
      kP = (0, Np.d)("command"),
      FP = (0, Np.d)("call"),
      iP = (0, Np.d)("guard"),
      AP = (0, Np.d)("trapOn");
    class zP {
      constructor(UU) {
        this.deps = UU, Object.defineProperty(this, AP, {
          value: RT
        }), Object.defineProperty(this, iP, {
          value: UT
        }), Object.defineProperty(this, FP, {
          value: OP
        }), Object.defineProperty(this, kP, {
          value: lP
        }), Object.defineProperty(this, yP, {
          get: NP,
          set: void 0
        }), Object.defineProperty(this, sP, {
          value: LP
        }), Object.defineProperty(this, SP, {
          value: DP
        }), Object.defineProperty(this, HP, {
          value: MP
        }), Object.defineProperty(this, bP, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, oP, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ZP, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, aP, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, YP, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, BP, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, VP, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, rP, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, XP, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, vP, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, dP, {
          writable: !0,
          value: null
        })
      }
      get active() {
        return null !== (0, Lp.b)(this, oP)[oP] && null === (0, Lp.b)(this, XP)[XP]
      }
      async open(UU) {
        if ((0, Lp.b)(this, aP)[aP]) return jU.Zc.ModuleTrap;
        let RU = (0, Lp.b)(this, bP)[bP];
        if (!RU) {
          const UU = (0, Lp.b)(this, YP)[YP];
          (0, Lp.b)(this, BP)[BP]++;
          try {
            RU = await this.deps.load()
          } catch (tU) {
            return (0, Lp.b)(this, BP)[BP]--, UU !== (0, Lp.b)(this, YP)[YP] ? "stopped" : (0, Lp.b)(this, sP)[sP](tU)
          }
          if ((0, Lp.b)(this, BP)[BP]--, UU !== (0, Lp.b)(this, YP)[YP]) return (0, Lp.b)(this, bP)[bP] || 0 !== (0, Lp.b)(this, BP)[BP] || (0, Lp.b)(this, aP)[aP] || this.deps.unload(), "stopped";
          if ((0, Lp.b)(this, aP)[aP]) return jU.Zc.ModuleTrap;
          const gU = RU.xpU(),
            pU = this.deps.core.mpU();
          if (gU !== pU) return (0, Lp.b)(this, sP)[sP](new Error(`replay port version ${gU}, the core's ${pU}`));
          (0, Lp.b)(this, bP)[bP] = RU
        }
        if (!(0, Lp.b)(this, oP)[oP]) {
          const UU = RU;
          if (!(0, Lp.b)(this, iP)[iP]((() => {
              (0, Lp.b)(this, oP)[oP] = new UU.wpU, (0, Lp.b)(this, ZP)[ZP] = UU.npU()
            }))) return jU.Zc.ModuleTrap
        }
        let gU = !1;
        return (0, Lp.b)(this, FP)[FP](((RU, tU) => {
          null !== (0, Lp.b)(this, XP)[XP] && RU.step(0, 0);
          const pU = RU.stage(UU.length);
          0 !== pU && (new Uint8Array(tU.buffer, pU, UU.length).set(UU), RU.open(), (0, Lp.b)(this, rP)[rP] = (0, Lp.b)(this, VP)[VP], (0, Lp.b)(this, XP)[XP] = null, (0, Lp.b)(this, vP)[vP]++, gU = !0)
        })) ? gU ? "opening" : jU.Zc.TooLarge : jU.Zc.ModuleTrap
      }
      beforeFrame(UU) {
        const RU = (0, Lp.b)(this, oP)[oP],
          gU = (0, Lp.b)(this, ZP)[ZP];
        if (!RU || !gU || null !== (0, Lp.b)(this, XP)[XP]) return;
        const {
          core: tU
        } = this.deps, pU = tU.bpU(UU);
        if (pU < 0) return;
        const EU = Math.floor(pU);
        let PU, TU;
        try {
          PU = RU.step(EU, pU - EU), TU = RU.QpU()
        } catch (KU) {
          return void(0, Lp.b)(this, AP)[AP](KU)
        }
        const qU = tU.fpU(1, PU);
        if (0 === qU) {
          const UU = (0, Lp.b)(this, FP)[FP]((UU => {
            UU.close()
          }));
          if (!UU) return;
          return (0, Lp.b)(this, yP)[yP] ? (0, Lp.b)(this, XP)[XP] = "drop" : (0, Lp.b)(this, SP)[SP](), void tU.opU(jU.Zc.Port)
        }
        new Uint8Array(this.deps.coreBuffer(), qU, PU).set(new Uint8Array(gU.buffer, TU, PU))
      }
      play() {
        (0, Lp.b)(this, kP)[kP]((UU => {
          UU.play()
        }))
      }
      pause() {
        (0, Lp.b)(this, kP)[kP]((UU => {
          UU.pause()
        }))
      }
      seek(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, Lp.b)(this, kP)[kP]((gU => {
          gU.seek(UU, RU)
        }))
      }
      setMark(UU, RU) {
        return (0, Lp.b)(this, kP)[kP]((gU => {
          gU.ZpU(UU, RU)
        }))
      }
      addKeyframe(UU, RU) {
        return (0, Lp.b)(this, kP)[kP]((gU => {
          gU.apU(UU[0], UU[1], UU[2], RU[0], RU[1], RU[2])
        }))
      }
      setKeyframe(UU, RU) {
        return (0, Lp.b)(this, kP)[kP]((gU => {
          gU.YpU(UU, RU)
        }))
      }
      moveKeyframe(UU, RU) {
        return (0, Lp.b)(this, kP)[kP]((gU => {
          gU.BpU(UU, RU)
        }))
      }
      deleteKeyframes(UU, RU) {
        return (0, Lp.b)(this, kP)[kP]((gU => {
          gU.VpU(UU, RU)
        }))
      }
      crop(UU, RU) {
        return null === (0, Lp.b)(this, VP)[VP] && (0, Lp.b)(this, kP)[kP]((gU => {
          gU.crop(UU, RU)
        }))
      }
      beginSave() {
        const UU = (0, Lp.b)(this, dP)[dP];
        if ((0, Lp.b)(this, dP)[dP] = null, null !== UU && UU !== (0, Lp.b)(this, vP)[vP]) return null;
        let RU = 0,
          gU = null;
        if ((0, Lp.b)(this, FP)[FP](((UU, tU) => {
            RU = UU.save(), 0 !== RU && (gU = new Uint8Array(tU.buffer, UU.rpU(), UU.XpU()).slice())
          })), 0 === RU || !gU) return null;
        const tU = {
          headLen: RU,
          editState: gU,
          givenUp: () => (0, Lp.b)(this, rP)[rP] === tU,
          head: (UU, RU) => {
            if ((0, Lp.b)(this, VP)[VP] !== tU || !(0, Lp.b)(this, yP)[yP]) return null;
            let gU = null;
            return (0, Lp.b)(this, FP)[FP](((tU, pU) => {
              const EU = tU.vpU();
              0 !== EU && UU >= 0 && RU >= 0 && UU + RU <= EU && (gU = new Uint8Array(pU.buffer, tU.HpU() + UU, RU))
            })), gU
          },
          end: () => {
            if ((0, Lp.b)(this, VP)[VP] !== tU) return;
            (0, Lp.b)(this, VP)[VP] = null, (0, Lp.b)(this, rP)[rP] = null, (0, Lp.b)(this, FP)[FP]((UU => {
              UU.SpU()
            }));
            const UU = (0, Lp.b)(this, XP)[XP];
            (0, Lp.b)(this, XP)[XP] = null, "unload" === UU ? (0, Lp.b)(this, HP)[HP]() : "drop" === UU && (0, Lp.b)(this, SP)[SP]()
          }
        };
        return (0, Lp.b)(this, VP)[VP] = tU, tU
      }
      askSave() {
        (0, Lp.b)(this, dP)[dP] = (0, Lp.b)(this, vP)[vP]
      }
      setSpeed(UU) {
        (0, Lp.b)(this, kP)[kP]((RU => {
          RU.spU(UU)
        }))
      }
      setCameraMode(UU) {
        (0, Lp.b)(this, kP)[kP]((RU => {
          RU.ypU(UU)
        }))
      }
      close() {
        (0, Lp.b)(this, kP)[kP]((UU => {
          UU.close()
        }))
      }
      stop() {
        (0, Lp.b)(this, YP)[YP]++, (0, Lp.b)(this, yP)[yP] && ((0, Lp.b)(this, FP)[FP]((UU => {
          UU.close()
        })), (0, Lp.b)(this, oP)[oP]) ? (0, Lp.b)(this, XP)[XP] = "unload" : (0, Lp.b)(this, HP)[HP]()
      }
    }

    function MP() {
      (0, Lp.b)(this, SP)[SP](), (0, Lp.b)(this, aP)[aP] || ((0, Lp.b)(this, bP)[bP] = null, this.deps.unload())
    }

    function DP() {
      (0, Lp.b)(this, FP)[FP]((UU => {
        UU.free()
      })), (0, Lp.b)(this, oP)[oP] = null, (0, Lp.b)(this, ZP)[ZP] = null
    }
    async function LP(UU) {
      return await this.deps.staleOr(UU, (() => {})) ? "reloading" : jU.Zc.ModuleLoad
    }

    function NP() {
      return null !== (0, Lp.b)(this, VP)[VP] && (0, Lp.b)(this, rP)[rP] !== (0, Lp.b)(this, VP)[VP]
    }

    function lP(UU) {
      return null === (0, Lp.b)(this, XP)[XP] && (0, Lp.b)(this, FP)[FP](UU)
    }

    function OP(UU) {
      const RU = (0, Lp.b)(this, oP)[oP],
        gU = (0, Lp.b)(this, ZP)[ZP];
      return !(!RU || !gU) && (0, Lp.b)(this, iP)[iP]((() => {
        UU(RU, gU)
      }))
    }

    function UT(UU) {
      if ((0, Lp.b)(this, aP)[aP]) return !1;
      try {
        return UU(), !0
      } catch (RU) {
        return (0, Lp.b)(this, AP)[AP](RU), !1
      }
    }

    function RT(UU) {
      if (!(UU instanceof WebAssembly.RuntimeError)) throw UU;
      (0, Lp.b)(this, aP)[aP] = !0, (0, Lp.b)(this, oP)[oP] = null, (0, Lp.b)(this, ZP)[ZP] = null, (0, Lp.b)(this, bP)[bP] = null, this.deps.crash(this.deps.markTrapped(UU)), this.deps.core.opU(jU.Zc.ModuleTrap)
    }
    var gT = gU(6160),
      tT = gU(40105);
    const pT = "[bloxd-wasm-client]";
    const ET = String(op);

    function PT(UU) {
      return null === UU || UU === ET ? void 0 : UU
    }

    function TT(UU) {
      var RU, gU, tU, pU, EU, TU, qU;
      switch (UU.what) {
        case jU.hd.FlyingText: {
          let RU;
          try {
            RU = JSON.parse(UU.contentJson)
          } catch (KU) {
            return void console.warn(`${pT} a replay's flying text isn't JSON`, KU)
          }
          PU.p.yh("forceFlyingMiddleMessage", {
            content: RU,
            rE: UU.rE,
            angle: UU.angle,
            XE: UU.XE
          });
          break
        }
        case jU.hd.PlayerKilled:
          (0, tT.c)({
            kind: "killed",
            body: {
              deadEId: null !== (RU = PT(UU.dead)) && void 0 !== RU ? RU : "",
              killerEId: PT(UU.killer),
              withItem: null !== (gU = UU.withItem) && void 0 !== gU ? gU : "",
              killstreak: UU.killstreak
            }
          });
          break;
        case jU.hd.Killfeed:
          (0, tT.c)({
            kind: "custom",
            body: {
              killer: {
                eId: PT(UU.killerId),
                name: null !== (tU = UU.killerName) && void 0 !== tU ? tU : void 0,
                colour: null !== (pU = UU.killerColour) && void 0 !== pU ? pU : void 0
              },
              victim: {
                eId: PT(UU.victimId),
                name: null !== (EU = UU.victimName) && void 0 !== EU ? EU : void 0,
                colour: null !== (TU = UU.victimColour) && void 0 !== TU ? TU : void 0
              },
              withItem: null !== (qU = UU.withItem) && void 0 !== qU ? qU : ""
            }
          })
      }
    }
    const qT = "[bloxd-wasm-client]";

    function KT(UU) {
      if (void 0 === UU || null === UU || "" === UU) return null;
      const RU = Number(UU);
      return Number.isInteger(RU) && RU > op && RU <= 2147483647 ? RU : null
    }

    function cT(UU) {
      return {
        id: KT(UU.eId),
        name: "string" === typeof UU.name ? UU.name : null,
        colour: "string" === typeof UU.colour ? UU.colour : null
      }
    }

    function GT(UU) {
      const RU = (0, Hp.h)(ig.dc.PlayerKilled, (RU => {
          var gU, tU;
          const pU = (0, dp.f)(RU);
          if (!(0, dp.c)(pU)) return;
          const {
            deadEId: EU,
            killerEId: PU,
            withItem: TU,
            killstreak: qU
          } = pU;
          UU.recordPlayerKilled(null !== (gU = KT(EU)) && void 0 !== gU ? gU : op, null !== (tU = KT(PU)) && void 0 !== tU ? tU : op, "number" === typeof qU ? qU : 0, "string" === typeof TU ? TU : "")
        })),
        gU = (0, Hp.h)(ig.dc.CustomKillfeed, (RU => {
          const gU = (0, dp.f)(RU);
          if (!(0, dp.c)(gU) || !(0, dp.c)(gU.killer) || !(0, dp.c)(gU.victim)) return;
          const {
            killer: tU,
            victim: pU,
            withItem: EU
          } = gU;
          UU.recordKillfeed(cT(tU), cT(pU), "string" === typeof EU ? EU : null)
        }));
      return () => {
        RU(), gU()
      }
    }

    function jT(UU) {
      var RU;
      return void 0 === UU || null === UU ? null : null !== (RU = JSON.stringify(UU)) && void 0 !== RU ? RU : null
    }

    function uT(UU) {
      let RU = null;
      const gU = () => {
        const {
          enableClipping: gU,
          clipDurationSeconds: pU
        } = tU.b.get("clientEscMenuOptions"), EU = `${gU}:${pU}`;
        EU !== RU && (RU = EU, UU.recorder.setPrefs(gU, pU))
      };
      return gU(), (0, PU.t)("appManagerUpdated|clientEscMenuOptions", gU)
    }
    const CT = "replayModule",
      hT = "recorderModule";

    function QT(UU, RU, gU) {
      return function() {
        return UU.isStopped ? gU : RU(...arguments)
      }
    }
    const eT = {
      open: () => Promise.reject(new Error(Wp.b.coreStopped.text)),
      replayKey: () => null,
      encode: () => Promise.resolve(null),
      fileHandle: () => null,
      markSaved: () => {}
    };

    function WT() {
      return gU.e(61).then((() => gU(60837)))
    }

    function fT(UU) {
      (0, Wp.f)({
        text: UU,
        type: "Error"
      })
    }
    class xT {
      constructor(UU) {
        this.deps = UU, this.runtime = void 0, this.entityHooks = void 0, this.recordedOptions = void 0, this.stops = void 0, this.activeConn = 0, this.stopped = !1, this.bench = null, this.replay = void 0, this.recorder = void 0, this.freecam = void 0, this.drawn = !1;
        const {
          running: RU,
          api: tU,
          core: pU
        } = UU, EU = () => UU.memory().buffer, PU = () => RU.isStopped ? null : RU.rings.cmd, TU = QT(RU, ((UU, RU) => pU.fpU(UU, RU)), 0), qU = () => pU.mpU();
        let KU = null;
        this.replay = new zP({
          core: {
            bpU: QT(RU, (UU => pU.bpU(UU)), -1),
            fpU: TU,
            mpU: qU,
            opU: QT(RU, (UU => {
              pU.opU(UU)
            }), void 0)
          },
          coreBuffer: EU,
          load: async () => (KU = await gU.e(62).then((() => gU(60845))), KU.loadReplayModule()),
          unload: () => {
            var UU;
            null === (UU = KU) || void 0 === UU || UU.unloadReplayModule()
          },
          markTrapped: UU => KU ? KU.markReplayTrapped(UU) : new Error(String(UU)),
          staleOr: (RU, gU) => UU.staleOr(CT, RU, gU),
          crash: RU => {
            UU.reportFault(CT, RU)
          }
        });
        let cU = null;
        this.recorder = new lE({
          core: {
            JpU: QT(RU, (UU => pU.JpU(UU)), 0),
            hpU: QT(RU, (UU => pU.hpU(UU)), 0),
            fpU: TU,
            mpU: qU
          },
          coreCommand: (UU, RU) => {
            var gU, tU;
            return null !== (gU = null === (tU = PU()) || void 0 === tU ? void 0 : tU.writeCmd(UU, 0, RU)) && void 0 !== gU && gU
          },
          coreBuffer: EU,
          load: async () => (cU = await WT(), cU.loadRecorderModule()),
          prefetch: () => {
            WT().then((UU => UU.prefetchRecorderModule())).catch((UU => {
              console.warn(`${qT} the recorder module didn't prefetch, so a save loads it:`, UU)
            }))
          },
          unload: () => {
            var UU;
            null === (UU = cU) || void 0 === UU || UU.unloadRecorderModule()
          },
          markTrapped: UU => cU ? cU.markRecorderTrapped(UU) : new Error(String(UU)),
          memoryBytes: () => {
            var UU, RU;
            return null !== (UU = null === (RU = cU) || void 0 === RU ? void 0 : RU.recorderMemoryBytes()) && void 0 !== UU ? UU : 0
          },
          staleOr: (RU, gU) => UU.staleOr(hT, RU, gU),
          crash: RU => {
            UU.reportFault(hT, RU)
          },
          allowed: () => !0 === UU.options.get("canRecordReplays"),
          failed: fT,
          events: (UU, RU) => {
            this.runtime.recorderEvents(UU, RU)
          },
          beginSave: () => this.replay.beginSave(),
          givenUp: fT,
          unixNow: () => Date.now()
        });
        const GU = new bp({
          core: {
            PpU: QT(RU, (UU => pU.PpU(UU)), 0),
            qpU: QT(RU, (() => {
              pU.qpU()
            }), void 0),
            eQ: QT(RU, (() => pU.eQ()), 0),
            TpU: QT(RU, (() => pU.TpU()), 0)
          },
          buffer: EU,
          apiView: () => tU.apiView,
          cmd: PU,
          replay: this.replay,
          recorder: this.recorder
        });
        this.entityHooks = new nP({
          api: tU,
          cmd: PU,
          loadHook: wP,
          onError: UU => {
            console.warn(`${qT} the recorded game's replay hooks:`, UU)
          }
        });
        const jU = new vp({
          client: GU,
          buffer: EU,
          setHoldDraws: UU => {
            RU.setHoldDraws(UU)
          },
          notify: Wp.f,
          onRecorderState: () => {
            var UU;
            null === (UU = (0, xp.f)()) || void 0 === UU || UU.recorderChanged()
          },
          onViewerChange: () => {
            var UU;
            null === (UU = (0, xp.f)()) || void 0 === UU || UU.viewerChanged()
          },
          onReplayOption: RU => {
            ! function(UU, RU) {
              var gU, tU;
              const pU = ig.db[RU.key];
              if (void 0 === pU) return;
              let EU = null !== (gU = RU.value) && void 0 !== gU ? gU : JSON.parse(JSON.stringify(null !== (tU = gT.c[pU]) && void 0 !== tU ? tU : null));
              if (null !== RU.value && RU.key < ig.Hb.Environment && "string" === typeof EU) try {
                EU = JSON.parse(EU)
              } catch (PU) {
                return void console.warn(`${pT} a replay's ${pU} isn't JSON`, PU)
              }
              UU.applyNewClientOptions({
                [pU]: EU
              })
            }(UU.options, RU)
          },
          onReplayUiEvent: TT,
          onReplayOpened: RU => {
            this.entityHooks.opened((0, bU.Wb)(RU)), UU.replayShaderPack(RU)
          },
          meshPending: () => {
            var UU, gU;
            return null !== (UU = null === (gU = RU.lastHeader) || void 0 === gU ? void 0 : gU.renderPending) && void 0 !== UU ? UU : 0
          },
          viewerOpen: fp.c,
          download: UU => {
            (0, Qp.i)(UU)
          }
        });
        this.runtime = jU, tU.replay = jU.sink, (0, xp.p)(jU);
        const uU = new yp({
          live: () => {
            var UU;
            return !RU.isStopped && !0 === (null === (UU = jU.currentViewer) || void 0 === UU ? void 0 : UU.inPlayback)
          },
          cmd: PU,
          dragScale: Mp
        });
        this.freecam = uU, (0, xp.o)(uU), this.recordedOptions = function(UU, RU) {
          const gU = ig.db,
            tU = gU.map(((gU, tU) => RU.subscribe(gU, (RU => {
              UU.setOption(tU, jT(RU))
            }))));
          return {
            sendAll() {
              gU.forEach(((gU, tU) => {
                UU.setOption(tU, jT(RU.get(gU)))
              }))
            },
            stop() {
              for (const UU of tU) UU()
            }
          }
        }(jU.recorder, UU.options), this.stops = [(0, Rt.n)((UU => {
          uU.flush();
          try {
            this.replay.beforeFrame(UU)
          } catch (RU) {
            this.deps.reportFault("replayFrame", RU)
          }
        })), (0, Rt.B)(((UU, RU) => {
          try {
            this.recorder.afterFrame(), RU && !this.drawn && (this.drawn = !0, this.recorder.viewDrawn())
          } catch (gU) {
            this.deps.reportFault("recorderFrame", gU)
          }
          try {
            jU.afterFrame(UU)
          } catch (gU) {
            this.deps.reportFault("replayRuntime", gU)
          }
        })), uT(jU), () => {
          this.recordedOptions.stop()
        }, GT(jU.recorder), (0, Sp.i)((UU => {
          let {
            action: RU,
            down: gU
          } = UU;
          var tU;
          gU && (null === (tU = (0, xp.f)()) || void 0 === tU || tU.keyDown(RU))
        }))];
        const CU = () => {
          const UU = jU.currentViewer;
          return !0 === (null === UU || void 0 === UU ? void 0 : UU.isOpen) ? UU : null
        };
        (0, ep.h)({
          open: (UU, RU) => this.open(UU, RU),
          replayKey: () => {
            var UU, RU;
            return null !== (UU = null === (RU = CU()) || void 0 === RU ? void 0 : RU.id) && void 0 !== UU ? UU : null
          },
          saveRefusal: () => {
            var UU, RU;
            return null !== (UU = null === (RU = CU()) || void 0 === RU ? void 0 : RU.saveRefusal) && void 0 !== UU ? UU : null
          },
          encode: () => {
            var UU, RU;
            return null !== (UU = null === (RU = CU()) || void 0 === RU ? void 0 : RU.save()) && void 0 !== UU ? UU : Promise.resolve(null)
          },
          fileHandle: () => {
            var UU, RU;
            return null !== (UU = null === (RU = jU.currentViewer) || void 0 === RU ? void 0 : RU.fileHandle) && void 0 !== UU ? UU : null
          },
          markSaved: (UU, RU) => {
            var gU;
            null === (gU = jU.currentViewer) || void 0 === gU || gU.markSaved(UU, RU)
          }
        })
      }
      netEvent(UU) {
        if ("connection" === UU.type)
          if (UU.phase === jU.F.Activated) {
            this.activeConn = UU.conn;
            const RU = this.deps.sessionInfo(UU.conn);
            null !== RU && (this.runtime.activated({
              lobbyType: (0, oU.t)(RU.lobbyName),
              gameNameWithVariation: RU.gameNameWithVariation,
              lobbyName: RU.lobbyName
            }), this.recordedOptions.sendAll())
          } else UU.phase !== jU.F.Left && UU.phase !== jU.F.Closed || UU.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
      }
      stop() {
        if (!this.stopped) {
          this.stopped = !0;
          for (const UU of this.stops) UU();
          this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, xp.i)() === this.runtime && (0, xp.p)(null), (0, xp.h)() === this.freecam && (0, xp.o)(null), (0, ep.h)(eT), null !== this.bench && window.wasmReplayBench === this.bench && (window.wasmReplayBench = void 0)
        }
      }
      async open(UU, RU) {
        const {
          running: gU
        } = this.deps;
        if (gU.isStopped) throw new Error(Wp.b.coreStopped.text);
        if (UU.byteLength > 67108864) throw new Error(Wp.b.cantOpen.text);
        let tU;
        try {
          tU = await async function(UU) {
            const RU = await UU.loadViewer();
            return RU.inPlayback || (0, Rt.J)().leaveGame(null), RU
          }(this.runtime)
        } catch (pU) {
          throw console.warn(`${qT} the replay viewer didn't load`, pU), new Error(Wp.b.viewerLoadFailed.text)
        }
        if (gU.isStopped) throw new Error(Wp.b.coreStopped.text);
        await tU.open(UU, RU)
      }
    }
    var mT = gU(1821);

    function IT(UU, RU) {
      const {
        aux: gU,
        payload: tU
      } = function(UU) {
        return {
          aux: UU.reset ? jU.ac.ResetFirst : 0,
          payload: wT(UU.changes)
        }
      }(RU);
      UU.queueOptions(gU, tU) && (RU.reset && mT.b.reset(), mT.b.apply(RU.changes))
    }
    const JT = new TextEncoder;

    function wT(UU) {
      const RU = new nT;
      return oT(RU, UU), RU.bytes()
    }
    class nT {
      constructor() {
        this.buf = new Uint8Array(256), this.view = new DataView(this.buf.buffer), this.len = 0
      }
      room(UU) {
        if (this.len + UU <= this.buf.length) return;
        const RU = new Uint8Array(Math.max(2 * this.buf.length, this.len + UU));
        RU.set(this.buf.subarray(0, this.len)), this.buf = RU, this.view = new DataView(RU.buffer)
      }
      u8(UU) {
        this.room(1), this.buf[this.len++] = UU
      }
      tagged(UU, RU, gU) {
        this.room(1 + RU), this.buf[this.len++] = UU, 1 === RU ? this.view.setUint8(this.len, gU) : 2 === RU ? this.view.setUint16(this.len, gU) : this.view.setUint32(this.len, gU), this.len += RU
      }
      signed(UU, RU, gU) {
        this.room(1 + RU), this.buf[this.len++] = UU, 1 === RU ? this.view.setInt8(this.len, gU) : 2 === RU ? this.view.setInt16(this.len, gU) : this.view.setInt32(this.len, gU), this.len += RU
      }
      f64(UU) {
        this.room(9), this.buf[this.len++] = 203, this.view.setFloat64(this.len, UU), this.len += 8
      }
      raw(UU) {
        this.room(UU.length), this.buf.set(UU, this.len), this.len += UU.length
      }
      bytes() {
        return this.buf.slice(0, this.len)
      }
    }

    function bT(UU, RU, gU, tU, pU, EU, PU) {
      RU < tU ? UU.u8(gU | RU) : null !== pU && RU < 256 ? UU.tagged(pU, 1, RU) : RU < 65536 ? UU.tagged(EU, 2, RU) : UU.tagged(PU, 4, RU)
    }

    function oT(UU, RU) {
      switch (typeof RU) {
        case "undefined":
          return void UU.raw(ZT);
        case "boolean":
          return void UU.u8(RU ? 195 : 194);
        case "number":
          return void
          function(UU, RU) {
            RU >>> 0 === RU ? RU < 128 ? UU.u8(RU) : RU < 256 ? UU.tagged(204, 1, RU) : RU < 65536 ? UU.tagged(205, 2, RU) : UU.tagged(206, 4, RU) : (RU | 0) === RU ? RU >= -32 ? UU.u8(255 & RU) : RU >= -128 ? UU.signed(208, 1, RU) : RU >= -32768 ? UU.signed(209, 2, RU) : UU.signed(210, 4, RU) : UU.f64(RU)
          }(UU, RU);
        case "string": {
          const gU = JT.encode(RU);
          return bT(UU, gU.length, 160, 32, 217, 218, 219), void UU.raw(gU)
        }
        case "object":
          break;
        default:
          return void UU.u8(192)
      }
      if (null === RU) UU.u8(192);
      else if (Array.isArray(RU)) {
        bT(UU, RU.length, 144, 16, null, 220, 221);
        for (const gU of RU) oT(UU, gU)
      } else if (RU instanceof Uint8Array) bT(UU, RU.length, 0, 0, 196, 197, 198), UU.raw(RU);
      else {
        const gU = Object.keys(RU);
        bT(UU, gU.length, 128, 0, null, 222, 223);
        for (const tU of gU) oT(UU, tU), oT(UU, RU[tU])
      }
    }
    const ZT = new Uint8Array([212, 0, 0]);
    var aT = gU(41930),
      YT = gU(41939),
      BT = gU(40415),
      VT = gU(40441),
      rT = gU(3377);
    const XT = [1e3, 3e3, 9e3];
    class vT {
      constructor(UU) {
        this.host = UU, this.sets = new Map, this.table = [], this.generation = 0, this.pC = !1
      }
      onEvent(UU) {
        const RU = function(UU) {
          if (UU.byteLength !== jU.md) return null;
          const RU = new DataView(UU.buffer, UU.byteOffset, UU.byteLength);
          return {
            want: RU.getUint16(0, !0),
            release: RU.getUint16(2, !0)
          }
        }(UU);
        RU && !this.pC && (RU.release !== jU.qd && this.release(RU.release), RU.want !== jU.qd && this.want(RU.want))
      }
      reset(UU) {
        if (!this.pC) {
          for (const [UU, RU] of this.sets) "ready" === RU.state && this.releaseAll(RU.distinct), this.sets.delete(UU);
          this.table = UU, this.generation++
        }
      }
      dispose() {
        if (this.pC) return;
        this.pC = !0, this.generation++, this.table = [];
        const UU = [...this.sets.values()];
        this.sets.clear();
        let RU = null;
        for (const tU of UU)
          for (const UU of "ready" === tU.state ? tU.distinct : []) try {
            this.host.wgU(UU)
          } catch (gU) {
            RU ??= {
              error: gU
            }
          }
        if (RU) throw RU.error
      }
      isReady(UU) {
        var RU;
        return "ready" === (null === (RU = this.sets.get(UU)) || void 0 === RU ? void 0 : RU.state)
      }
      want(UU) {
        const RU = this.sets.get(UU);
        if ("loading" === (null === RU || void 0 === RU ? void 0 : RU.state)) return RU.wanted = !0, void this.capAnswer(UU, RU);
        if ("ready" === (null === RU || void 0 === RU ? void 0 : RU.state)) return void this.host.sendReady(HT(UU, RU.images, RU.size));
        const gU = this.table[UU];
        if (!gU || 1 !== gU.urls.length && gU.urls.length !== ig.Zb.CubeFaces) return this.host.sendReady(ST(UU)), void this.host.onLoadFailed(UU, "", new Error(`no image set ${UU}`));
        const tU = {
          state: "loading",
          wanted: !0
        };
        this.sets.set(UU, tU), this.load(UU, gU, tU, this.generation, 0), this.capAnswer(UU, tU)
      }
      capAnswer(UU, RU) {
        this.host.wait(4e3, (() => {
          this.sets.get(UU) === RU && RU.wanted && this.host.sendReady(ST(UU))
        }))
      }
      load(UU, RU, gU, tU, pU) {
        const EU = [...new Set(RU.urls)];
        Promise.allSettled(EU.map((UU => this.host.loadImage(UU, RU.orientation)))).then((PU => {
          const TU = PU.flatMap((UU => "fulfilled" === UU.status ? [UU.value] : [])),
            qU = tU === this.generation && this.sets.get(UU) === gU,
            KU = PU.findIndex((UU => "rejected" === UU.status));
          if (!qU || !gU.wanted) return this.pC ? void this.releaseAfterDispose(TU.map(dT)) : (this.releaseAll(TU.map(dT)), void(qU && this.sets.delete(UU)));
          KU < 0 ? this.loaded(UU, RU, EU, TU) : (this.releaseAll(TU.map(dT)), this.host.sendReady(ST(UU)), pU < XT.length ? this.host.wait(XT[pU], (() => {
            tU === this.generation && this.sets.get(UU) === gU && (gU.wanted ? this.load(UU, RU, gU, tU, pU + 1) : this.sets.delete(UU))
          })) : (this.sets.delete(UU), this.host.onLoadFailed(UU, EU[KU], PU[KU].reason)))
        }))
      }
      loaded(UU, RU, gU, tU) {
        const [pU] = tU, EU = [pU.width, pU.height], PU = tU.every((UU => UU.width === EU[0] && UU.height === EU[1])), TU = RU.urls.length === ig.Zb.CubeFaces;
        if (!PU || EU[0] <= 0 || EU[1] <= 0 || EU[0] > 65535 || EU[1] > 65535 || TU && EU[0] !== EU[1]) {
          this.releaseAll(tU.map(dT)), this.sets.delete(UU), this.host.sendReady(ST(UU));
          const gU = tU.map((UU => `${UU.width}x${UU.height}`));
          return void this.host.onLoadFailed(UU, RU.urls[0], new Error(`set ${UU}'s images can't make its texture: ${gU.join(", ")}`))
        }
        const qU = RU.urls.map((UU => tU[gU.indexOf(UU)].id)),
          KU = tU.map(dT);
        this.sets.set(UU, {
          state: "ready",
          images: qU,
          distinct: KU,
          size: EU
        }), this.host.sendReady(HT(UU, qU, EU))
      }
      release(UU) {
        const RU = this.sets.get(UU);
        "loading" === (null === RU || void 0 === RU ? void 0 : RU.state) ? RU.wanted = !1: "ready" === (null === RU || void 0 === RU ? void 0 : RU.state) && (this.releaseAll(RU.distinct), this.sets.delete(UU))
      }
      releaseAll(UU) {
        for (const RU of UU) this.host.wgU(RU)
      }
      releaseAfterDispose(UU) {
        for (const RU of UU) try {
          this.host.wgU(RU)
        } catch {}
      }
    }

    function dT(UU) {
      return UU.id
    }

    function HT(UU, RU, gU) {
      const tU = new Uint8Array(ig.Zb.SkyImagesReadyBytes),
        pU = new DataView(tU.buffer);
      return pU.setUint16(0, UU, !0), pU.setUint16(2, RU.length, !0), pU.setUint16(4, gU[0], !0), pU.setUint16(6, gU[1], !0), RU.slice(0, ig.Zb.CubeFaces).forEach(((UU, RU) => {
        pU.setUint32(8 + 4 * RU, UU, !0)
      })), tU
    }

    function ST(UU) {
      const RU = new Uint8Array(ig.Zb.SkyImagesReadyBytes),
        gU = new DataView(RU.buffer);
      return gU.setUint16(0, UU, !0), gU.setUint16(2, ig.Zb.Failed, !0), RU
    }
    let sT = Promise.resolve();
    async function yT(UU, RU) {
      let gU;
      try {
        gU = await (0, rT.H)(UU)
      } catch (EU) {
        throw new BT.b("fetch", UU, {
          cause: EU
        })
      }
      const tU = sT.then((() => async function(UU, RU) {
        const gU = new Blob([UU.slice()]);
        let tU = await createImageBitmap(gU, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: RU
        });
        const pU = 1024 / Math.max(tU.width, tU.height);
        if (pU < 1) {
          const UU = tU;
          try {
            tU = await createImageBitmap(UU, {
              resizeWidth: Math.max(1, Math.round(UU.width * pU)),
              resizeHeight: Math.max(1, Math.round(UU.height * pU)),
              resizeQuality: "high",
              premultiplyAlpha: "none",
              colorSpaceConversion: "none"
            })
          } finally {
            UU.close()
          }
        }
        return tU
      }(gU, RU)));
      let pU;
      sT = tU.catch((() => {}));
      try {
        pU = await tU
      } catch (EU) {
        throw new BT.b("decode", UU, {
          cause: EU
        })
      }
      return {
        id: (0, BT.i)(pU),
        width: pU.width,
        height: pU.height
      }
    }
    var kT = gU(2850),
      FT = gU(33907);
    const iT = kT.g.length;

    function AT(UU) {
      const RU = [],
        gU = [];
      kT.g.forEach(((tU, pU) => {
        var EU;
        const PU = null !== (EU = zT(UU[tU])) && void 0 !== EU ? EU : FT.p[tU];
        "custom" === PU.type ? (gU.push({
          id: pU,
          kind: ig.Zb.KindCustom,
          set: RU.length,
          earth: null
        }), RU.push({
          urls: [PU.px, PU.py, PU.pz, PU.nx, PU.ny, PU.nz],
          orientation: "none"
        })) : gU.push({
          id: pU,
          kind: ig.Zb.KindEarth,
          set: 0,
          earth: PU
        })
      }));
      const tU = zT(UU.earth);
      "earth" === (null === tU || void 0 === tU ? void 0 : tU.type) && gU.push({
        id: iT,
        kind: ig.Zb.KindEarth,
        set: 0,
        earth: tU
      });
      const pU = RU.length;
      RU.push({
        urls: FT.d.map((UU => FT.h + UU)),
        orientation: "none"
      }), RU.push({
        urls: [FT.l],
        orientation: "flipY"
      }), RU.push({
        urls: [FT.b],
        orientation: "flipY"
      });
      const EU = new Uint8Array(ig.Zb.SkyTableHeaderBytes + gU.length * ig.Zb.SkyTableEntryBytes),
        PU = new DataView(EU.buffer);
      return PU.setUint16(0, pU, !0), PU.setUint16(2, pU + 1, !0), PU.setUint16(4, pU + 2, !0), PU.setUint16(6, gU.length, !0), gU.forEach(((UU, RU) => {
        const gU = ig.Zb.SkyTableHeaderBytes + RU * ig.Zb.SkyTableEntryBytes;
        PU.setUint16(gU, UU.id, !0), PU.setUint8(gU + 2, UU.kind);
        const tU = gU + 4;
        UU.earth ? function(UU, RU, gU) {
          const tU = UU;
          let pU = 0,
            EU = 0;
          for (const [PU, TU] of MT) {
            const UU = tU[PU];
            "number" === typeof UU && Number.isFinite(UU) && (RU.setFloat32(gU + 4 * TU, UU, !0), pU |= 1 << TU)
          }
          for (const [PU, TU, qU] of DT) {
            const UU = tU[PU];
            Array.isArray(UU) && 3 === UU.length && UU.every((UU => "number" === typeof UU && Number.isFinite(UU))) && (UU.forEach(((UU, tU) => {
              RU.setFloat32(gU + qU + 4 * tU, UU, !0)
            })), pU |= TU)
          }
          LT.forEach(((UU, EU) => {
            let [PU, TU] = UU;
            const qU = tU[PU];
            "number" === typeof qU && Number.isFinite(qU) && (RU.setFloat32(gU + ig.n.CameraOffsetAt + 4 * EU, qU, !0), pU |= TU)
          }));
          for (const [PU, TU] of NT) {
            const UU = tU[PU];
            null !== UU && void 0 !== UU && (pU |= TU, UU && (EU |= TU >>> 14))
          }
          RU.setUint32(gU + ig.n.PresentAt, pU, !0), RU.setUint8(gU + ig.n.FlagsAt, EU)
        }(UU.earth, PU, tU) : PU.setUint16(tU, UU.set, !0)
      })), {
        payload: EU,
        sets: RU
      }
    }

    function zT(UU) {
      if ("object" !== typeof UU || null === UU) return null;
      const RU = UU;
      if ("earth" === RU.type) return UU;
      return "custom" === RU.type && ["px", "py", "pz", "nx", "ny", "nz"].every((UU => {
        const gU = RU[UU];
        return "string" === typeof gU && gU.length > 0
      })) ? UU : null
    }
    const MT = [
        ["inclination", ig.n.Inclination],
        ["turbidity", ig.n.Turbidity],
        ["luminance", ig.n.Luminance],
        ["rayleigh", ig.n.Rayleigh],
        ["mieCoefficient", ig.n.MieCoefficient],
        ["mieDirectionalG", ig.n.MieDirectionalG],
        ["distance", ig.n.Distance],
        ["azimuth", ig.n.Azimuth]
      ],
      DT = [
        ["sunPosition", ig.n.SunPosition, ig.n.SunPositionAt],
        ["up", ig.n.Up, ig.n.UpAt],
        ["vertexTint", ig.n.VertexTint, ig.n.VertexTintAt]
      ],
      LT = [
        ["xCameraOffset", ig.n.CameraOffsetX],
        ["yCameraOffset", ig.n.CameraOffsetY],
        ["zCameraOffset", ig.n.CameraOffsetZ]
      ],
      NT = [
        ["useSunPosition", ig.n.UseSunPosition],
        ["dithering", ig.n.Dithering],
        ["infiniteDistance", ig.n.InfiniteDistance]
      ];

    function lT(UU, RU, gU) {
      const tU = new Uq({
        writeCmd: UU,
        warn: RU,
        followPack: OT(gU, RU)
      });
      return tU.start(), tU
    }

    function OT(UU, RU) {
      return gU => {
        let tU = () => {};
        const pU = UU((UU => {
          tU(), tU = () => {}, null !== UU ? tU = UU.subscribe((UU => {
            gU(function(UU, RU, gU) {
              if ("object" !== typeof UU || null === UU) return null;
              const tU = UU.skyBoxes;
              if ("object" !== typeof tU || null === tU) return null;
              if ("player" === RU) return tU;
              return Object.fromEntries(Object.entries(tU).filter((UU => {
                let [RU, tU] = UU;
                return !! function(UU) {
                  if ("object" !== typeof UU || null === UU) return !1;
                  return "earth" === UU.type || Object.entries(UU).every((UU => {
                    let [RU, gU] = UU;
                    return "type" === RU || ("" === (tU = gU) || null !== function(UU) {
                      var RU, gU, tU;
                      return "string" !== typeof UU ? null : null !== (RU = null === (gU = Rq.exec(UU)) || void 0 === gU || null === (tU = gU.groups) || void 0 === tU ? void 0 : tU.base64) && void 0 !== RU ? RU : null
                    }(tU));
                    var tU
                  }))
                }(tU) || (gU(`Ignoring texture pack skybox ${RU}, whose faces are not all data URLs`, null), !1)
              })))
            }(UU.pack, null === UU.gameSource ? "player" : "customGame", RU))
          })) : gU(null)
        }));
        return () => {
          pU(), tU()
        }
      }
    }
    class Uq {
      constructor(UU) {
        var RU, gU, tU;
        this.host = UU, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.pC = !1, this.wait = null !== (RU = UU.wait) && void 0 !== RU ? RU : (UU, RU) => {
          setTimeout(RU, UU)
        }, this.loader = new vT({
          loadImage: null !== (gU = UU.loadImage) && void 0 !== gU ? gU : yT,
          wgU: null !== (tU = UU.wgU) && void 0 !== tU ? tU : BT.l,
          sendReady: UU => {
            this.queue.push({
              kind: ig.Zb.SkyImagesReady,
              payload: UU
            })
          },
          onLoadFailed: (RU, gU, tU) => {
            UU.warn(`sky image set ${RU} (${gU}) didn't load: the last sky stays`, tU)
          },
          wait: this.wait
        })
      }
      start() {
        this.wait(VT.d, (() => {
          null === this.written && this.write({})
        })), this.stopFollowing = this.host.followPack((UU => {
          this.write(null !== UU && void 0 !== UU ? UU : {})
        }))
      }
      onEvent(UU) {
        this.loader.onEvent(UU)
      }
      drain() {
        if (0 === this.queue.length) return;
        let UU = 0;
        for (; UU < this.queue.length && this.host.writeCmd(this.queue[UU].kind, 0, this.queue[UU].payload);) UU++;
        UU > 0 && this.queue.splice(0, UU)
      }
      dispose() {
        this.pC = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
      }
      write(UU) {
        if (this.pC) return;
        const RU = AT(UU);
        var gU, tU;
        this.written && (gU = this.written, tU = RU, gU.payload.length === tU.payload.length && gU.payload.every(((UU, RU) => UU === tU.payload[RU])) && gU.sets.length === tU.sets.length && gU.sets.every(((UU, RU) => {
          const gU = tU.sets[RU];
          return UU.orientation === gU.orientation && UU.urls.length === gU.urls.length && UU.urls.every(((UU, RU) => UU === gU.urls[RU]))
        }))) || (this.written = RU, this.loader.reset(RU.sets), this.queue = this.queue.filter((UU => UU.kind !== ig.Zb.SkyImagesReady)), this.queue.push({
          kind: ig.Zb.SkyTable,
          payload: RU.payload
        }))
      }
    }
    const Rq = /^data:[\w.+/-]*;base64,(?<base64>[A-Za-z0-9+/]*={0,2})$/;
    var gq = gU(2603),
      tq = gU(2683),
      pq = gU(283),
      Eq = gU(181),
      Pq = gU(2609),
      Tq = gU(2618),
      qq = gU(260),
      Kq = gU(263),
      cq = gU(2630),
      Gq = gU(2652),
      jq = gU(2661),
      uq = gU(115),
      Cq = gU(274),
      hq = gU(40207);
    class Qq {
      constructor() {
        this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, Hp.h)(Qt.Q, (UU => {
          this.onReply((0, dp.e)(Qt.Q, UU), performance.now())
        }))
      }
      onFrame(UU, RU) {
        null === this.id ? this.id = UU : UU !== this.id && (this.id = UU, this.sentMs = document.hidden ? null : RU)
      }
      onVisibilityChange() {
        this.sentMs = null
      }
      onReply(UU, RU) {
        UU === this.id && null !== this.sentMs && (this.roundTripMs = Math.round(RU - this.sentMs), this.sentMs = null)
      }
      take() {
        const UU = this.roundTripMs;
        return this.roundTripMs = null, UU
      }
      stop() {
        this.stopReplies()
      }
    }
    class eq {
      constructor() {
        this.sampled = 0, this.timed = 0, this.frameUs = 0, this.primed = !1, this.windowTimed = 0, this.windowUs = 0
      }
      onFrame(UU, RU, gU, tU) {
        const pU = UU - this.sampled >>> 0,
          EU = RU - this.timed >>> 0,
          PU = gU - this.frameUs >>> 0,
          TU = this.primed;
        return this.sampled = UU, this.timed = RU, this.frameUs = gU, this.primed = !0, !(!TU || pU > 64 || EU > 64) && (tU && PU <= 1e6 * EU && (this.windowTimed += EU, this.windowUs += PU), tU && pU > 0)
      }
      reset() {}
      snapshotAndReset() {
        const UU = this.windowTimed > 0 ? this.windowUs / this.windowTimed / 1e3 : null;
        return this.windowTimed = 0, this.windowUs = 0, {
          passMs: UU,
          submitToDoneMs: null
        }
      }
    }
    const Wq = {
      pacedShare: null,
      switchesPerHour: null,
      lagP50Ms: null,
      lagP90Ms: null,
      joinLagP90Ms: null
    };
    class fq {
      constructor() {
        this.samples = new Float64Array(4096), this.count = 0
      }
      add(UU, RU) {
        const gU = Math.min(4096, this.count + RU);
        this.samples.fill(UU, this.count, gU), this.count = gU
      }
      clear() {
        this.count = 0
      }
      take(UU) {
        const RU = this.count;
        if (this.count = 0, RU < 30) return null;
        const gU = this.samples.subarray(0, RU).sort();
        return UU.map((UU => gU[Math.min(RU - 1, Math.floor(UU * RU))]))
      }
    }
    class xq {
      constructor() {
        this.word = 0, this.lagUs = 0, this.primed = !1, this.lastDrawnMs = -1, this.tieredMs = 0, this.pacedMs = 0, this.switches = 0, this.lags = new fq, this.inJoin = !1, this.rose = !1, this.joinLags = new fq, this.joinLagP90Ms = null
      }
      onFrame(UU, RU, gU, tU, pU) {
        const EU = UU.headerWord(ig.A.Pacing),
          PU = UU.headerWord(ig.A.PacingLagUs),
          TU = (EU >>> ig.L.LagsShift) - (this.word >>> ig.L.LagsShift) & ig.L.CountMask,
          qU = (EU >>> ig.L.SwitchesShift) - (this.word >>> ig.L.SwitchesShift) & ig.L.CountMask,
          KU = TU > 0 ? (PU - this.lagUs >>> 0) / TU / 1e3 : 0,
          cU = this.primed && TU <= 64 && qU <= 2 && KU <= 6e4;
        if (this.rose = 0 !== (EU & ~this.word & ig.L.Joining), this.word = EU, this.lagUs = PU, this.primed = !0, 0 !== (EU & ig.L.Tiered)) {
          if (0 !== (EU & ig.L.Joining)) this.rose && (this.inJoin = !0, this.joinLags.clear()), this.inJoin && cU && tU && TU > 0 && this.joinLags.add(KU, TU);
          else if (this.inJoin) {
            var GU, jU;
            this.inJoin = !1, this.joinLagP90Ms = null !== (GU = null === (jU = this.joinLags.take([.9])) || void 0 === jU ? void 0 : jU[0]) && void 0 !== GU ? GU : null
          }
          if (pU) {
            if (cU && (this.switches += qU, TU > 0 && this.lags.add(KU, TU)), gU) {
              if (this.lastDrawnMs >= 0 && RU - this.lastDrawnMs <= 250) {
                const UU = RU - this.lastDrawnMs;
                this.tieredMs += UU, (EU & ig.L.AheadMask) > 0 && (this.pacedMs += UU)
              }
              this.lastDrawnMs = RU
            }
          } else this.lastDrawnMs = -1
        } else this.lastDrawnMs = -1
      }
      onJoin() {
        this.takeWindow(), this.rose || (this.inJoin = !1, this.joinLags.clear()), this.lastDrawnMs = -1
      }
      snapshotAndReset(UU) {
        const RU = this.takeWindow(),
          gU = this.joinLagP90Ms;
        return this.joinLagP90Ms = null, UU ? {
          ...RU,
          joinLagP90Ms: gU
        } : {
          ...Wq,
          joinLagP90Ms: gU
        }
      }
      unsent(UU) {
        this.joinLagP90Ms ??= UU.joinLagP90Ms
      }
      takeWindow() {
        var UU, RU;
        const gU = this.tieredMs >= 2e3,
          tU = this.lags.take([.5, .9]),
          pU = {
            pacedShare: gU ? this.pacedMs / this.tieredMs : null,
            switchesPerHour: gU ? 36e5 * this.switches / this.tieredMs : null,
            lagP50Ms: null !== (UU = null === tU || void 0 === tU ? void 0 : tU[0]) && void 0 !== UU ? UU : null,
            lagP90Ms: null !== (RU = null === tU || void 0 === tU ? void 0 : tU[1]) && void 0 !== RU ? RU : null
          };
        return this.tieredMs = 0, this.pacedMs = 0, this.switches = 0, pU
      }
    }
    var mq = gU(8915),
      Iq = gU(2581),
      Jq = gU(40291),
      wq = gU(8910),
      nq = gU(2620),
      bq = gU(2600);
    const oq = {
      none: !0,
      not_requested: !1,
      webgl_holdback: !1,
      off_after_loss: !1,
      old_intel_driver: !1,
      intel_gen9: !1,
      gpu_class_webgl: !1,
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

    function Zq(UU) {
      return new aq(UU)
    }
    class aq {
      constructor(UU) {
        this.shell = UU, this.tracker = new Tq.c, this.gpu = new eq, this.pacing = new xq, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.fpsOverTime = null, this.firstSpanFps = null, this.initialFps = null, this.ping = new Qq, this.pacedCpuMs = 0, this.frameDebug = null, this.onVisibility = () => {
          this.tracker.onVisibilityChange(), this.ping.onVisibilityChange(), !document.hidden && this.fpsSpanStartMs >= 0 && (this.fpsFrames = 0, this.fpsSpanStartMs = performance.now())
        }, (0, mq.d)(UU.backend, UU.canvas, UU.adapterVendor), this.tracker.start((() => !UU.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), (0, nq.e)("wasm", (() => {
          const {
            n: RU,
            sampleCount: gU
          } = (0, Jq.f)();
          return `${UU.backend}, quality steps aim at up to ${bq.d.target.maxFps} fps, pixel n ${RU}, msaa ${gU}`
        }), (UU => {
          this.frameDebug = UU
        })), this.timers.push(setInterval((() => {
          this.flush(), this.fpsOverTime = null, this.initialFps = null
        }), 1e4), setInterval((() => {
          this.followGame() && (this.hasFlushedSinceConnect || (this.flush(), this.hasFlushedSinceConnect = !0))
        }), 250))
      }
      animationFrame(UU) {
        var RU;
        this.tracker.onAnimationFrame(UU), null === (RU = this.frameDebug) || void 0 === RU || RU.animationFrame()
      }
      frameRan(UU, RU, gU, tU) {
        var pU;
        this.ping.onFrame(UU.headerWord(ig.A.PingSent), gU);
        const EU = this.tracker;
        this.pacing.onFrame(UU, RU, "drawn" === tU, !document.hidden, EU.isSampling());
        const PU = UU.headerWord(ig.A.TickUs) / 1e3 + (0, Rt.L)();
        EU.Bx(PU), null === (pU = this.frameDebug) || void 0 === pU || pU.wasmFrame(UU, RU, gU, "drawn" === tU, EU.isSampling(), PU, (0, wq.d)());
        const TU = Math.max(0, gU - RU - PU);
        if ("drawn" !== tU) return void("paced" === tU && (this.pacedCpuMs += TU));
        this.followGame(), EU.onFrameStart(RU);
        this.gpu.onFrame(UU.headerWord(ig.A.GpuSampled), UU.headerWord(ig.A.GpuTimed), UU.headerWord(ig.A.GpuFrameUs), EU.isSampling()) && EU.onGpuSampleStarted(), EU.onFrameCpu(TU + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(RU)
      }
      stop() {
        for (const UU of this.timers) clearInterval(UU);
        this.timers.length = 0, document.removeEventListener("visibilitychange", this.onVisibility), this.ping.stop()
      }
      followGame() {
        const UU = this.shell.joinedGame();
        return UU !== this.game && (this.game = UU, this.tracker.snapshotAndReset(), this.pacing.onJoin(), this.hasFlushedSinceConnect = !1, this.inGameAtLastFlush = !1, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.pacedCpuMs = 0, this.firstSpanFps = null, this.fpsOverTime = null, this.initialFps = null), null !== UU
      }
      countFpsFrame(UU) {
        if (this.fpsSpanStartMs < 0) {
          if (!this.shell.inGame()) return;
          this.fpsSpanStartMs = UU
        }
        this.fpsFrames++;
        const RU = UU - this.fpsSpanStartMs;
        if (!(RU < jq.e)) {
          if (!document.hidden) {
            const UU = 1e3 * this.fpsFrames / RU;
            this.firstSpanFps ??= UU, this.initialFps = this.firstSpanFps, this.fpsOverTime = UU
          }
          this.fpsFrames = 0, this.fpsSpanStartMs = UU
        }
      }
      flush() {
        const UU = this.followGame(),
          {
            cpuFrameMs: RU,
            refreshHz: gU,
            cpuBottleneck: pU,
            frameIntervalCv: EU,
            ...PU
          } = this.tracker.snapshotAndReset(),
          TU = this.shell.inGame(),
          qU = TU && this.inGameAtLastFlush,
          KU = qU ? PU : Pq.f,
          cU = this.pacing.snapshotAndReset(qU);
        if (this.inGameAtLastFlush = TU, this.pendingLightFailures += this.shell.takeFailedMeshJobs(), !UU) return void this.pacing.unsent(cU);
        const GU = performance.now(),
          uU = (0, Gq.p)((0, Gq.l)(GU), this.unsentPage),
          hU = function(UU, RU, gU, pU, EU, PU, TU, qU) {
            var KU, cU, GU, jU;
            const uU = {},
              {
                canvas: CU
              } = UU,
              hU = (0, cq.e)({
                refreshHz: RU.refreshHz,
                msaa: UU.msaa(),
                autoMsaaOff: (0, wq.b)()
              });
            for (const QU of (0, tq.e)()) {
              const eU = QU.name;
              let WU;
              if ((0, pq.s)(eU)) WU = (0, Gq.b)(eU);
              else if ((0, Gq.e)(eU)) WU = qU[eU];
              else if ((0, cq.i)(eU)) WU = hU[eU];
              else switch (eU) {
                case "fps":
                  WU = pU;
                  break;
                case "bT":
                  WU = EU;
                  break;
                case "BT":
                  WU = (0, Iq.p)((0, Jq.f)().n);
                  break;
                case "VT":
                  WU = Math.max(CU.width, CU.height);
                  break;
                case "rT":
                  WU = Math.min(CU.width, CU.height);
                  break;
                case "XT":
                  WU = navigator.hardwareConcurrency || null;
                  break;
                case "vT":
                  WU = (0, ip.getWebGpuSupported)();
                  break;
                case "dT":
                  WU = null === UU.fallbackReason ? null : oq[UU.fallbackReason];
                  break;
                case "HT":
                  WU = RU.cpuFrameMs;
                  break;
                case "ST":
                  WU = RU.refreshHz;
                  break;
                case "sT":
                  WU = RU.cpuBottleneck;
                  break;
                case "yT":
                  WU = RU.frameIntervalCv;
                  break;
                case "kT":
                  WU = RU.frameMs;
                  break;
                case "FT":
                  WU = RU.tickMs;
                  break;
                case "MT":
                  WU = RU.mainBusyShare;
                  break;
                case "DT":
                  WU = RU.mainProbeDelayMs;
                  break;
                case "iT":
                  WU = RU.longAnimationFramesPerMin;
                  break;
                case "AT":
                  WU = RU.longAnimationFrameTimeShare;
                  break;
                case "zT":
                  WU = RU.longAnimationFrameScriptShare;
                  break;
                case "LT":
                  WU = RU.gpuPassMs;
                  break;
                case "NT":
                  WU = RU.gpuSubmitToDoneMs;
                  break;
                case "lT":
                  WU = gU.pacedShare;
                  break;
                case "OT":
                  WU = gU.switchesPerHour;
                  break;
                case "Uq":
                  WU = gU.lagP50Ms;
                  break;
                case "Rq":
                  WU = gU.lagP90Ms;
                  break;
                case "tq":
                  WU = gU.joinLagP90Ms;
                  break;
                case "hq":
                  WU = (0, gq.g)(PU);
                  break;
                case "YT":
                  WU = TU;
                  break;
                case "pq":
                case "Eq":
                case "Pq":
                case "Tq":
                case "qq":
                case "Kq":
                case "cq":
                case "Gq":
                case "jq":
                case "uq":
                case "Cq":
                case "Qq":
                case "eq":
                case "Wq":
                case "fq":
                  WU = null;
                  break;
                case "Vq":
                  WU = (0, ip.getPlatformType)();
                  break;
                case "rq":
                  WU = (0, ip.getGpuVendor)();
                  break;
                case "Xq":
                  WU = hq.e[UU.backend];
                  break;
                case "vq":
                  WU = (0, uq.b)();
                  break;
                case "dq":
                  WU = (0, ip.getOperatingSystem)();
                  break;
                case "Hq":
                  WU = (0, ip.getTrafficSource)();
                  break;
                case "Sq":
                  WU = null !== (KU = tU.b.get("gameEntrySource")) && void 0 !== KU ? KU : Eq.f;
                  break;
                case "yq":
                  WU = RU.frameLimiter;
                  break;
                case "kq":
                  WU = (0, qq.j)();
                  break;
                case "Fq":
                  WU = null !== (cU = (0, Kq.c)()) && void 0 !== cU ? cU : Eq.f;
                  break;
                case "iq":
                  WU = (0, qq.d)(CU.width, CU.height);
                  break;
                case "Aq":
                  WU = (0, tq.h)(-(new Date).getTimezoneOffset());
                  break;
                case "Dq":
                  WU = null !== (GU = UU.fallbackReason) && void 0 !== GU ? GU : Eq.f;
                  break;
                case "lq":
                  WU = "ready";
                  break;
                case "Oq":
                  WU = (0, ip.getSoftwareRenderer)();
                  break;
                case "Mq":
                  WU = null !== UU.shaderPackReach() ? "true" : "false";
                  break;
                case "UK":
                  WU = null !== (jU = UU.shaderPackReach()) && void 0 !== jU && jU.sceneDepth ? "true" : "false";
                  break;
                case "RK": {
                  const RU = UU.shaderPackReach();
                  WU = null !== RU && void 0 !== RU && RU.sunShadow ? "all" : null !== RU && void 0 !== RU && RU.airShadow ? "air" : "none";
                  break
                }
                case "gK":
                  WU = Cq.u;
                  break;
                case "zq":
                case "Lq":
                case "Nq":
                  WU = Eq.f;
                  break;
                default:
                  throw new Error(`Unhandled field name: ${eU}`)
              }
              if (void 0 === WU) throw new Error(`Metric ${eU} has no value`);
              uU[eU] = WU
            }
            return uU
          }(this.shell, {
            cpuFrameMs: RU,
            refreshHz: gU,
            cpuBottleneck: pU,
            frameIntervalCv: EU,
            ...KU
          }, cU, this.fpsOverTime, this.initialFps, this.pendingLightFailures, this.ping.take(), uU);
        if (! function(UU, RU, gU) {
            return (0, kR.d)(), UU(CU.p.Send, RU, gU)
          }(this.shell.writeCmd, jU.ld, function(UU) {
            const RU = (0, vU.d)((0, AR.g)(UU)),
              gU = new Uint8Array(CU.ge.BYTES + RU.length);
            return new DataView(gU.buffer).setUint16(0, AR.e.AnalyticsUpdate, !0), gU.set(RU, CU.ge.BYTES), gU
          }(hU))) return this.unsentPage = uU, this.pacing.unsent(cU), void(0 === this.sendsDropped++ && console.warn("[wasm-client] an analytics update found the cmd ring full: dropped"));
        this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, gq.d), (0, Gq.i)(hU, "wasm", GU)
      }
    }
    var Yq = gU(39141);

    function Bq(UU, RU, gU) {
      const tU = new Map;
      return (0, Yq.d)(((UU, gU, tU) => RU.gc(UU, gU, tU)), ((RU, gU, pU) => {
        const EU = `${RU},${gU},${pU}`;
        return tU.has(EU) || tU.set(EU, (0, vR.b)(UU, RU, gU, pU)), tU.get(EU)
      }), gU)
    }
    var Vq = gU(39143),
      rq = gU(40096);

    function Xq(UU) {
      const RU = null !== UU && 0 !== (CU.w.playerFlags(UU.api.apiView, 0) & CU.Pd.CursorAim);
      RU !== (0, rq.n)() && (0, rq.K)(RU, null !== UU)
    }

    function vq(UU) {
      return (0, ht.c)(Qt.H, UU)
    }
    const dq = new EU.c((UU => gU(41943)(`./${UU}/${UU}Client`)));
    let Hq = null,
      Sq = null;
    async function sq(UU) {
      Hq ??= gU.e(27).then((() => gU(38687))).then((UU => {
        Sq = UU.createDefaultClientPlugins
      }), (UU => {
        throw Hq = null, UU
      })), await Promise.all([dq.load(UU), Hq])
    }

    function yq(UU) {
      UU.load(new rR(yt, new it))
    }
    let kq = !1;
    const Fq = new WeakMap;

    function iq(UU) {
      try {
        UU()
      } catch (RU) {
        console.error("[bloxd-wasm-client] a session-end step failed", RU)
      }
    }

    function Aq(UU, RU) {
      ! function() {
        var UU, RU;
        St.Howler.volume();
        const gU = St.Howler;
        null === (UU = gU._autoResume) || void 0 === UU || UU.call(gU), null === (RU = gU._autoSuspend) || void 0 === RU || RU.call(gU)
      }(), RU.audio.prepare();
      const gU = new xU(RU.core, RU.memory, RU.audio);
      let EU;
      try {
        EU = new jp(gU, RU.options)
      } catch (jU) {
        return UU.crash(hp.y, jU), null
      }(0, qU.f)(Cp(gU, EU));
      const cU = new xT({
        running: UU,
        api: gU,
        core: RU.core,
        memory: RU.memory,
        staleOr: RU.staleOr,
        reportFault: RU.reportReplayFault,
        options: RU.options,
        sessionInfo: RU.sessionInfo,
        replayShaderPack: RU.replayShaderPack
      });
      (0, Rt.D)();
      const GU = new rt({
        api: gU,
        tables: EU,
        sessionInfo: RU.sessionInfo,
        gameFactory: UU => dq.loadedFactory(UU),
        defaultPlugins: (UU, RU, gU, tU) => {
          if (null === Sq) throw new Error("The default plugins started before they loaded");
          return Sq(UU, RU, gU, tU)
        },
        serverOptions: RU.options,
        onNetEvent: UU => {
          cU.netEvent(UU), RU.onNetEvent(UU)
        },
        setLocalOptions: RU => {
          IT(UU, {
            changes: RU,
            reset: !1
          })
        },
        playSound: (UU, gU, tU, pU, EU, PU, TU) => RU.audio.playGame(UU, gU, tU, pU, EU, PU, TU),
        onSessionEnd: () => {
          iq(pU.n), iq(lt), iq((() => {
            tU.b.set({
              openInGameMenuName: null
            })
          })), iq((() => {
            RU.audio.cancelPreload()
          }))
        },
        beforeWrite: RU.beforeWrite,
        beforeOp: RU.beforeOp,
        cameraScreen: Nt,
        showCameraFacing: Ot,
        onEventOverflow: RU.onEventOverflow,
        screenBandY: TU.i,
        replayEntities: cU.entityHooks,
        hasPackModel: RU.hasPackModel
      });
      return GU.attach(UU), Fq.set(GU, cU), Ht(GU.items, RU.audio),
        function(UU) {
          UU.setClientFreeCameraGrant("isDev", !1);
          const RU = RU => {
            UU.setClientFreeCameraGrant("hasDeveloperRank", RU.playerHasRank("developer"))
          };
          (0, PU.t)("userContextUpdated", RU)
        }(GU), kq || (kq = !0, (0, PU.t)("appManagerUpdated|openInGameMenuName", (UU => {
          !UU && (0, KU.j)().includes(KU.c) && (0, KU.k)(KU.c)
        }))), GU
    }

    function zq(UU) {
      try {
        UU.closeGame()
      } finally {
        var RU;
        null === (RU = Fq.get(UU)) || void 0 === RU || RU.stop(), Fq.delete(UU)
      }
    }
  },
  40207: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => tU
    });
    const tU = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  40218: (UU, RU, gU) => {
    function tU() {
      return gU(40226)
    }

    function pU() {
      return gU(40235)
    }

    function EU(UU) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(UU)
    }
    gU.d(RU, {
      e: () => EU,
      f: () => tU,
      g: () => pU
    })
  },
  35889: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => PU,
      h: () => EU,
      j: () => qU
    });
    var tU = gU(35886);
    const pU = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function EU(UU) {
      if (UU instanceof WebAssembly.RuntimeError) return !0;
      const RU = UU instanceof Error ? UU.stack : void 0;
      return "string" === typeof RU && pU.test(RU)
    }

    function PU(UU, RU, gU) {
      var EU;
      const PU = UU instanceof Error ? UU.name : "thrown",
        TU = (UU instanceof Error && null !== (EU = UU.stack) && void 0 !== EU ? EU : "").split("\n").filter((UU => pU.test(UU))).slice(0, 8).map((UU => UU.trim())),
        qU = null === RU ? "wasm memory unknown" : `wasm memory ${Math.round(RU/2**20)} MB`,
        KU = null === gU.panic ? "" : `, panic: ${(0,tU.j)(gU.panic)}`,
        cU = `${PU}: ${UU instanceof Error?UU.message:String(UU)}`;
      return `${(0,tU.n)(gU.kind,gU.refusedBytes)} ${cU} (${qU})${KU}${TU.length>0?` | ${TU.join(" < ")}`:""}`
    }
    const TU = 500;

    function qU(UU) {
      let RU = "[object Object]";
      try {
        RU = String(UU)
      } catch {}
      if ("[object Object]" !== RU) return RU;
      try {
        var gU, tU;
        return null !== (gU = null === (tU = JSON.stringify(UU)) || void 0 === tU ? void 0 : tU.slice(0, TU)) && void 0 !== gU ? gU : RU
      } catch {
        return RU
      }
    }
  },
  41943: (UU, RU, gU) => {
    var tU = {
      "./bedwars/bedwarsClient": [38799, 9],
      "./bridgeBattle/bridgeBattleClient": [38806, 10],
      "./buildAFactory2/buildAFactory2Client": [38041, 72, 71, 70, 219, 235, 11],
      "./classic/classicClient": [38814, 12],
      "./clutch/clutchClient": [38816, 13],
      "./containmentBreach/containmentBreachClient": [38824, 14],
      "./cooking/cookingClient": [38942, 15],
      "./defusal/defusalClient": [38948, 16],
      "./frontline/frontlineClient": [38955, 72, 71, 70, 17],
      "./goalRush/goalRushClient": [38962, 18],
      "./luckyBedwars/luckyBedwarsClient": [38969, 19],
      "./ninetyNineNights/ninetyNineNightsClient": [38975, 20],
      "./oneBlock/oneBlockClient": [38981, 21],
      "./plots/plotsClient": [38986, 234, 238, 22],
      "./pvpCiv/pvpCivClient": [39056, 23],
      "./skyIslands/skyIslandsClient": [39063, 24],
      "./skyblock/skyblockClient": [38073, 72, 219, 190, 25],
      "./tsunami/tsunamiClient": [39070, 26]
    };

    function pU(UU) {
      if (!gU.o(tU, UU)) return Promise.resolve().then((() => {
        var RU = new Error("Cannot find module '" + UU + "'");
        throw RU.code = "MODULE_NOT_FOUND", RU
      }));
      var RU = tU[UU],
        pU = RU[0];
      return Promise.all(RU.slice(1).map(gU.e)).then((() => gU(pU)))
    }
    pU.keys = () => Object.keys(tU), pU.id = 41943, UU.exports = pU
  },
  40226: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  40235: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  },
  35886: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => tU,
      h: () => EU,
      j: () => qU,
      m: () => PU,
      n: () => pU
    });
    const tU = /^alloc_failed (\d+) bytes$/;

    function pU(UU, RU) {
      return EU(UU, RU) ? `trap=alloc_failed ${RU} bytes` : `trap=${UU}`
    }

    function EU(UU, RU) {
      return "unreachable" === UU && RU > 0
    }

    function PU(UU, RU, gU) {
      const tU = function(UU) {
        return UU instanceof WebAssembly.RuntimeError ? /unreachable/i.test(UU.message) ? "unreachable" : /out of bounds/i.test(UU.message) ? "out_of_bounds" : "runtime_error" : (UU instanceof RangeError || UU instanceof Error && "InternalError" === UU.name) && /call stack|recursion/i.test(UU.message) ? "stack_overflow" : "js_error"
      }(UU);
      if ("unreachable" !== tU) return {
        kind: tU,
        panic: null,
        refusedBytes: 0
      };
      const pU = RU(),
        EU = gU();
      return {
        kind: tU,
        panic: EU > 0 ? null : pU,
        refusedBytes: EU
      }
    }
    const TU = 300;

    function qU(UU) {
      return UU.replace(/\s*\n\s*/g, " / ").slice(0, TU)
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);