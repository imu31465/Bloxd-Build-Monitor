export const id = 69;
export const ids = [69];
export const modules = {
  40276: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => uR,
      g: () => tR
    });
    var yR = GR(32);

    function tR(RR) {
      return "refetchCode" === RR || "devDownloadJson" === RR || RR.startsWith("Plugin")
    }

    function uR(RR, JR) {
      "refetchCode" !== RR ? "Plugin|MobAiPlugin|ShowPetUi" !== RR ? Promise.all([GR.e(128), GR.e(129), GR.e(118), GR.e(120), GR.e(247)]).then((() => GR(53753))).then((GR => {
        let {
          runClientGameMessage: yR
        } = GR;
        yR(RR, JR)
      })).catch((JR => {
        console.error(`Game message ${RR} failed`, JR)
      })) : yR.n.JK("showPetUi", JR) : yR.n.JK("refetchCode")
    }
  },
  10234: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => tR,
      g: () => ZR,
      j: () => qR,
      l: () => iR
    });
    var yR = GR(32);
    const tR = "touchSprintChanged";
    let uR = !0;

    function ZR() {
      return uR
    }

    function qR(RR) {
      RR !== uR && (uR = RR, yR.n.JK(tR, RR))
    }

    function iR(RR, JR) {
      return null !== RR && null !== JR && RR > JR
    }
  },
  54582: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => yR,
      g: () => tR
    });
    const yR = ["recording", "freecam", "keyframe"];

    function tR() {
      const RR = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(RR[1]) << 32n | BigInt(RR[0])
    }
  },
  35067: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => qR,
      h: () => iR
    });
    var yR = GR(25);
    const tR = 24,
      uR = "farNametags",
      ZR = 1e5;

    function qR() {
      var RR;
      return null === (RR = yR.d.get("showDistantNametags")) || void 0 === RR || RR
    }

    function iR() {
      var RR;
      return null !== (RR = function() {
        const RR = new URLSearchParams(window.location.search).get(uR),
          JR = null === RR || "" === RR ? NaN : Number(RR);
        return Number.isFinite(JR) && JR >= 0 ? Math.min(JR, ZR) : null
      }()) && void 0 !== RR ? RR : qR() ? 0 : tR
    }
  },
  54578: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      blockIdOf: () => Vf.c,
      clearWasmCameraScreen: () => Ut,
      creativeItemIds: () => Ly.creativeItemIds,
      decodeMapSettings: () => rf,
      drainTextRerasters: () => Ri.e,
      enchantmentPerksOf: () => Ly.enchantmentPerksOf,
      endGameHost: () => Bf,
      followCursorAim: () => wf,
      followMenuPrefs: () => nu,
      loadAudio: () => Wf,
      loadClientGame: () => Uf,
      loadTextIcons: () => Ri.f,
      rasterText: () => hq.f,
      readBoardToEdit: () => ff,
      readDrawCensus: () => ef.d,
      setTextHost: () => Ri.l,
      setTextLocalPlayer: () => Ri.m,
      showInCreativeInvenOf: () => Ly.showInCreativeInvenOf,
      startGameHost: () => Mf,
      startShellAnalytics: () => uf,
      startSkyFeed: () => Xi,
      textChanged: () => Ri.q,
      warmText: () => hq.i,
      wasmCameraScreen: () => nt
    });
    GR(37667);
    var yR = GR(25),
      tR = GR(37927),
      uR = GR(40448),
      ZR = GR(32),
      qR = GR(4708),
      iR = GR(37923),
      fR = GR(1383),
      VR = GR(664),
      KR = GR(39383),
      wR = GR(5676),
      rR = GR(42170),
      eR = GR(42106);
    const aR = eR.Eb / 4,
      LR = eR.o.PlaySound,
      nR = eR.o.SoundReset,
      UR = wR.X.ReplayFailed,
      WR = wR.X.RecorderEvent;
    class AR {
      constructor(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.core = RR, this.memory = JR, this.audio = GR, this.serverIds = new Int32Array(256).fill(eR.Uc), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.view = new DataView(new ArrayBuffer(eR.s.BYTES)), this.renderPtr = 0, this.hK = 0, this.renderCapacity = 0, this.render = new Float32Array(0), this.visPtr = 0, this.vis = new Uint8Array(0), this.renderBuffer = null, this.eventsBuffer = null, this.eventsPtr = 0, this.eventsLen = 0, this.events = new DataView(new ArrayBuffer(0)), this.audioView = null, this.scratchPtr = -1, this.scratchView = null, this.corruption = null, this.replay = null, this.queries = new eR.X(RR, (() => {
          this.scratchPtr = -1, this.ensureViews()
        }))
      }
      scratch() {
        return this.scratchPtr < 0 && (this.scratchPtr = this.core.suR(), this.ensureViews()), this.scratchPtr
      }
      eventBytes(RR, JR) {
        const GR = this.eventView();
        return new Uint8Array(GR.buffer, GR.byteOffset + RR, JR)
      }
      get apiView() {
        return this.ensureViews(), this.view
      }
      ensureViews() {
        this.memory().buffer !== this.buffer && this.reView()
      }
      get localId() {
        return eR.s.localId(this.apiView, 0)
      }
      localDeaths() {
        return eR.s.localDeaths(this.apiView, 0)
      }
      rereadDirectory() {
        const RR = this.apiView,
          JR = eR.s.entRenderPtr(RR, 0),
          GR = eR.s.entVisPtr(RR, 0),
          yR = eR.s.entCapacity(RR, 0);
        if (JR !== this.renderPtr || GR !== this.visPtr || yR !== this.hK || this.renderBuffer !== this.buffer) {
          this.renderPtr = JR, this.visPtr = GR, this.hK = yR, this.renderBuffer = this.buffer;
          const RR = this.memoryView(Float32Array, JR, yR * aR, "the render array"),
            tR = this.memoryView(Uint8Array, GR, yR, "the visibility array");
          this.renderCapacity = RR && tR ? yR : 0, this.render = RR && tR ? RR : new Float32Array(0), this.vis = RR && tR ? tR : new Uint8Array(0)
        }
      }
      memoryView(RR, JR, GR, yR) {
        try {
          return (0, rR.l)(RR, this.memory().buffer, JR, GR, yR)
        } catch (tR) {
          return this.keepCorruption(tR), null
        }
      }
      memoryData(RR, JR, GR, yR) {
        try {
          return (0, rR.f)(this.memory().buffer, RR, JR, GR, yR)
        } catch (tR) {
          return this.keepCorruption(tR), null
        }
      }
      scratchData(RR, JR) {
        const GR = this.scratch(),
          yR = this.scratchView;
        return (null === yR || void 0 === yR ? void 0 : yR.buffer) === this.memory().buffer && yR.byteOffset === GR && yR.byteLength >= RR ? yR : (this.scratchView = this.memoryData(GR, RR, 8, JR), this.scratchView)
      }
      reportCorruption(RR) {
        this.keepCorruption(new rR.c(RR))
      }
      keepCorruption(RR) {
        if (!(RR instanceof rR.c)) throw RR;
        this.corruption ??= RR
      }
      throwCorruption() {
        if (this.corruption) throw this.corruption
      }
      walk(RR, JR, GR) {
        this.rereadDirectory(), this.throwCorruption();
        const {
          ptr: yR,
          len: tR
        } = RR;
        this.eventsPtr = yR, this.eventsLen = tR, this.eventsBuffer = null;
        const uR = this.eventView();
        for (let fR = 0; fR < tR;) {
          const RR = uR.getUint32(fR, !0),
            GR = 65535 & RR,
            yR = RR >>> 16,
            tR = fR + wR.T;
          if (GR === eR.o.EntitySpawned) {
            var ZR;
            if (yR !== eR.Hb.BYTES) throw lR(GR, fR, yR);
            const RR = eR.Hb.serverId(uR, tR);
            this.spawned(RR, eR.Hb.index(uR, tR), eR.Hb.kind(uR, tR)), null === (ZR = JR.entityAdded) || void 0 === ZR || ZR.call(JR, RR)
          } else if ((GR === eR.o.ChunkSlot || GR === eR.o.EntityInfoChanged) && !(0, eR.be)(GR, uR, tR, yR, JR)) throw lR(GR, fR, yR);
          fR = tR + (0, wR.ve)(yR)
        }
        try {
          var qR;
          null === (qR = JR.afterPrescan) || void 0 === qR || qR.call(JR), this.throwCorruption(), !GR() && this.dispatch(RR, JR, GR) && (this.throwCorruption(), this.applyListener(), JR.afterWalk(RR.kind)), this.throwCorruption()
        } catch (iR) {
          throw iR instanceof rR.c && (this.corruption ??= iR), iR
        } finally {
          GR() || null !== this.corruption || this.applyDespawns(tR, JR)
        }
      }
      applyDespawns(RR, JR) {
        const GR = this.eventView();
        for (let tR = 0; tR < RR;) {
          const RR = GR.getUint32(tR, !0),
            uR = tR + wR.T;
          if ((65535 & RR) === eR.o.EntityDespawned && RR >>> 16 === eR.Hb.BYTES) {
            const RR = eR.Hb.serverId(GR, uR);
            var yR;
            if (this.despawned(RR, eR.Hb.index(GR, uR))) null === (yR = JR.entityRemoved) || void 0 === yR || yR.call(JR, RR)
          }
          tR = uR + (0, wR.ve)(RR >>> 16)
        }
        this.rereadDirectory()
      }
      dispatch(RR, JR, GR) {
        const {
          len: yR,
          net: tR,
          netOffsets: uR
        } = RR;
        let ZR = this.eventView(),
          qR = 0;
        for (let MR = 0; MR < yR;) {
          const RR = ZR.getUint32(MR, !0),
            yR = 65535 & RR,
            pR = RR >>> 16,
            gR = MR + wR.T;
          let bR = !1;
          if (qR < tR.length && uR[qR] === MR) JR.netEvent(tR[qR]), qR++, bR = !0;
          else if (yR === wR.X.LocalPlayerBound) {
            var iR;
            if (pR !== wR.Gb) throw lR(yR, MR, pR);
            null === (iR = JR.localPlayerBound) || void 0 === iR || iR.call(JR, ZR.getInt32(gR, !0)), bR = !0
          } else if (yR === wR.X.LocalHurt) {
            var fR;
            if (pR !== wR.Fb) throw lR(yR, MR, pR);
            null === (fR = JR.localHurt) || void 0 === fR || fR.call(JR, ZR.getInt32(gR, !0), ZR.getFloat32(gR + 4, !0), ZR.getUint32(gR + 8, !0)), bR = !0
          } else if (yR === wR.X.AttackHit) {
            var VR;
            if (pR !== wR.e) throw lR(yR, MR, pR);
            const RR = ZR.getFloat32(gR, !0),
              GR = ZR.getFloat32(gR + 4, !0),
              tR = ZR.getFloat32(gR + 8, !0),
              uR = ZR.getUint32(gR + 12, !0);
            null === (VR = JR.attackHit) || void 0 === VR || VR.call(JR, RR, GR, tR, 0 !== (uR & wR.o.Crit), 0 !== (uR & wR.o.HitSelf))
          } else if (yR === wR.X.PhysicsType) {
            var KR;
            if (pR !== wR.bc) throw lR(yR, MR, pR);
            null === (KR = JR.physicsType) || void 0 === KR || KR.call(JR, ZR.getUint32(gR, !0), ZR.getInt32(gR + 4, !0)), bR = !0
          } else if (yR === wR.X.VehicleEffect) {
            var rR;
            const RR = BR(ZR, gR, pR);
            if (null === RR) throw lR(yR, MR, pR);
            null === (rR = JR.vehicleEffect) || void 0 === rR || rR.call(JR, RR.op, RR.name, RR.icon, RR.level, RR.durationMs), bR = !0
          } else if (yR === wR.X.ZoomChanged) {
            var aR;
            if (pR !== wR.de) throw lR(yR, MR, pR);
            null === (aR = JR.zoomChanged) || void 0 === aR || aR.call(JR, ZR.getFloat32(gR, !0), ZR.getUint8(gR + 4)), bR = !0
          } else if (yR === wR.X.ZoomDisabled) {
            var AR;
            if (0 !== pR) throw lR(yR, MR, pR);
            null === (AR = JR.zoomDisabled) || void 0 === AR || AR.call(JR), bR = !0
          } else if (yR === wR.X.BhopDisabled) {
            var CR;
            if (0 !== pR) throw lR(yR, MR, pR);
            null === (CR = JR.bhopDisabled) || void 0 === CR || CR.call(JR), bR = !0
          } else if (yR === wR.X.GameCamera) {
            var XR;
            null === (XR = JR.gameCamera) || void 0 === XR || XR.call(JR, new Uint8Array(ZR.buffer, ZR.byteOffset + gR, pR).slice()), bR = !0
          } else if (yR === eR.o.ChunkSlot || yR === eR.o.EntityInfoChanged);
          else if (yR >= LR && yR <= nR) {
            if (this.audio && !this.audio.onAudioEvent(yR, ZR, gR, pR)) throw lR(yR, MR, pR)
          } else if (yR >= UR && yR <= WR) {
            if (this.replay) {
              if (!this.replay.onReplayEvent(yR, ZR, gR, pR)) throw lR(yR, MR, pR);
              bR = !0
            }
          } else if (yR >= eR.fd && yR <= eR.gd && yR !== wR.X.EnvLighting) {
            if (!(0, eR.be)(yR, ZR, gR, pR, JR)) throw lR(yR, MR, pR);
            bR = !0
          }
          if (bR) {
            if (GR()) return !1;
            ZR = this.eventView()
          }
          MR = gR + (0, wR.ve)(pR)
        }
        return !GR()
      }
      applyListener() {
        var RR;
        if (!this.audio) return;
        const JR = eR.s.audioViewPtr(this.apiView, 0),
          GR = this.memory().buffer;
        let yR = this.audioView;
        (null === (RR = yR) || void 0 === RR ? void 0 : RR.buffer) === GR && yR.byteOffset === JR || (yR = (0, rR.f)(GR, JR, eR.u.BYTES, 8, "the audio view"), this.audioView = yR), yR && this.audio.applyListener(yR)
      }
      indexOf(RR) {
        return this.indexById.get("number" === typeof RR ? RR : +RR)
      }
      isLocal(RR) {
        return RR !== eR.Uc && RR === eR.s.localId(this.apiView, 0)
      }
      vW(RR) {
        const JR = [0, 0, 0];
        return this.readPosition("number" === typeof RR ? RR : +RR, JR) ? JR : null
      }
      readPosition(RR, JR) {
        const GR = this.apiView;
        if (void 0 !== this.indexById.get(RR) && this.isLocal(RR)) {
          for (let RR = 0; RR < 3; RR++) JR[RR] = eR.s.localPos(GR, 0, RR);
          return !0
        }
        return this.readDrawnPosition(RR, JR)
      }
      readDrawnPosition(RR, JR) {
        const GR = this.apiView,
          yR = this.indexById.get(RR);
        if (void 0 === yR || yR >= this.renderCapacity) return JR[0] = JR[1] = JR[2] = NaN, !1;
        const tR = yR * aR;
        for (let uR = 0; uR < 3; uR++) JR[uR] = this.render[tR + uR] + eR.s.origin(GR, 0, uR);
        return !0
      }
      checkValid(RR) {
        return void 0 !== this.indexOf(RR)
      }
      isAlive(RR) {
        const JR = this.indexOf(RR);
        if (void 0 === JR) return null;
        if (this.ensureViews(), JR >= this.renderCapacity) return null;
        const GR = this.vis[JR];
        return 0 === GR ? null : 0 !== (GR & eR.$d.Alive)
      }
      getEntityType(RR) {
        const JR = this.indexOf(RR);
        return void 0 === JR ? this.isLocal("number" === typeof RR ? RR : +RR) ? "Player" : null : XR(this.kinds[JR])
      }
      spawned(RR, JR, GR) {
        if (JR >= 1048576) throw new rR.c(`entity ${RR} spawned at index ${JR}`);
        this.ensureIndex(JR), this.serverIds[JR] === RR && null !== this.idStr[JR] || (this.idStr[JR] = String(RR)), this.serverIds[JR] = RR, this.kinds[JR] = GR, this.indexById.set(RR, JR)
      }
      despawned(RR, JR) {
        let GR = !1;
        return this.indexById.get(RR) === JR && (this.indexById.delete(RR), GR = !0), JR < this.serverIds.length && this.serverIds[JR] === RR && (this.serverIds[JR] = eR.Uc, this.kinds[JR] = 0, this.idStr[JR] = null), GR
      }
      ensureIndex(RR) {
        const JR = this.serverIds.length;
        if (RR < JR) return;
        let GR = 2 * JR;
        for (; GR <= RR;) GR *= 2;
        const yR = new Int32Array(GR).fill(eR.Uc);
        yR.set(this.serverIds), this.serverIds = yR;
        const tR = new Uint16Array(GR);
        tR.set(this.kinds), this.kinds = tR;
        for (let uR = JR; uR < GR; uR++) this.idStr.push(null)
      }
      eventView() {
        const RR = this.memory().buffer;
        return RR !== this.eventsBuffer && (this.eventsBuffer = RR, this.events = new DataView(RR, this.eventsPtr, this.eventsLen)), this.events
      }
      reView() {
        const RR = this.memory().buffer;
        this.buffer = RR, this.viewPtr < 0 && (this.viewPtr = this.core.huR()), this.view = new DataView(RR, this.viewPtr, eR.s.BYTES), this.rereadDirectory()
      }
    }

    function CR(RR) {
      return RR >>> eR.d === eR.q.Item
    }

    function XR(RR) {
      var JR, GR;
      const yR = RR & eR.e;
      switch (RR >>> eR.d) {
        case eR.q.Lifeform:
          return null !== (JR = VR.k[yR]) && void 0 !== JR ? JR : null;
        case eR.q.Throwable:
          return null !== (GR = KR.k[yR]) && void 0 !== GR ? GR : null;
        case eR.q.Mesh:
          return "Mesh";
        case eR.q.Audio:
          return "AudioEntity";
        case eR.q.Item:
          return "Item";
        default:
          return null
      }
    }
    const MR = new TextDecoder;

    function BR(RR, JR, GR) {
      if (GR < wR.Hd.HEAD_BYTES) return null;
      const yR = RR.getUint32(JR, !0),
        tR = RR.getUint32(JR + 20, !0),
        uR = RR.getUint32(JR + 24, !0),
        ZR = wR.Hd.HEAD_BYTES + (0, wR.ve)(tR);
      if (yR !== wR.Hd.UPDATE && yR !== wR.Hd.REMOVE || tR > GR || ZR + uR > GR) return null;
      const qR = (GR, yR) => MR.decode(new Uint8Array(RR.buffer, RR.byteOffset + JR + GR, yR)),
        iR = RR.getFloat64(JR + 12, !0);
      return {
        op: yR,
        level: RR.getFloat64(JR + 4, !0),
        durationMs: Number.isNaN(iR) ? null : iR,
        name: qR(wR.Hd.HEAD_BYTES, tR),
        icon: qR(ZR, uR)
      }
    }

    function lR(RR, JR, GR) {
      return new rR.c(`event ${RR} at ${JR} of ${GR} bytes`)
    }
    var pR = GR(7588),
      gR = GR(377),
      bR = GR(1317),
      vR = GR(40441),
      OR = GR(40276),
      xR = GR(2152),
      NR = GR(42552),
      DR = GR(2102),
      HR = GR(37845),
      oR = GR(40482),
      cR = GR(40466),
      PR = GR(40462),
      IR = GR(42154),
      mR = GR(3437),
      zR = GR(40476);

    function SR(RR) {
      if (!(0, zR.f)(RR)) return null;
      const JR = Number(RR);
      return (0 | JR) === JR ? JR : null
    }
    class jR {
      constructor(RR) {
        this.api = RR, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, PR.j)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.fG = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], this.entityHeading = 0, this.entityPitch = null, this.entityLookHeading = null, this.localId = eR.Uc, this.localName = String(eR.Uc)
      }
      readView() {
        this.defaultPoseRead = !1, this.fG = null;
        const RR = this.api.queries.directorView() >= eR.tb.BYTES ? this.api.scratchData(eR.tb.BYTES, "the director's view") : null;
        null !== RR && (this.defaultFov = (0, DR.y)(eR.tb.fov(RR, 0)), this.baseFov = (0, DR.y)(eR.tb.baseFov(RR, 0)), this.aspect = eR.tb.aspect(RR, 0), this.bodyHeading = eR.tb.bodyHeading(RR, 0))
      }
      getViewHeading() {
        return this.viewHeading
      }
      setViewHeading(RR) {
        this.viewHeading = RR
      }
      get localPlayerId() {
        const RR = eR.s.localId(this.api.apiView, 0);
        return RR !== this.localId && (this.localId = RR, this.localName = String(RR)), this.localName
      }
      getEntityPosition(RR) {
        return this.readEntity(RR) ? this.entityFeet : null
      }
      getEntityAimPoint(RR) {
        return this.readEntity(RR) ? this.entityAim : null
      }
      getEntityHeading(RR) {
        const JR = SR(RR);
        if (null === JR) return null;
        const GR = eR.s.localId(this.api.apiView, 0);
        return JR === GR && GR !== eR.Uc ? this.viewHeading : this.readEntity(RR) ? this.entityHeading : null
      }
      getEntityPitch(RR) {
        return this.readEntity(RR) ? this.entityPitch : null
      }
      getEntityLookHeading(RR) {
        return this.readEntity(RR) ? this.entityLookHeading : null
      }
      raycastTerrain(RR, JR, GR) {
        const yR = this.api.queries.cameraSweep(RR[0], RR[1], RR[2], JR[0], JR[1], JR[2], GR);
        return yR < GR - 1e-6 ? yR : null
      }
      getDefaultPose() {
        if (this.defaultPoseRead) return this.defaultPose;
        this.defaultPoseRead = !0;
        const RR = this.defaultPose;
        RR.fov = this.defaultFov;
        const JR = this.api.queries.directorDefaultPose() >= eR.ob.BYTES ? this.api.scratchData(eR.ob.BYTES, "the director's default pose") : null;
        if (null === JR) return RR;
        for (let GR = 0; GR < 3; GR++) RR.position[GR] = eR.ob.eye(JR, 0, GR);
        return RR.heading = eR.ob.heading(JR, 0), RR.pitch = eR.ob.pitch(JR, 0), RR
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
      readEntity(RR) {
        const JR = SR(RR);
        if (null === JR) return !1;
        if (JR === this.fG) return this.entityLive;
        this.fG = JR;
        const GR = this.api.queries.directorEntity(JR) >= eR.pb.BYTES ? this.api.scratchData(eR.pb.BYTES, "the director's entity") : null;
        if (this.entityLive = null !== GR, null === GR) return !1;
        for (let uR = 0; uR < 3; uR++) this.entityFeet[uR] = eR.pb.feet(GR, 0, uR), this.entityAim[uR] = this.entityFeet[uR];
        this.entityAim[1] += eR.pb.eyeHeight(GR, 0), this.entityHeading = eR.pb.heading(GR, 0);
        const yR = eR.pb.pitch(GR, 0);
        this.entityPitch = Number.isNaN(yR) ? null : yR;
        const tR = eR.pb.lookHeading(GR, 0);
        return this.entityLookHeading = Number.isNaN(tR) ? null : tR, !0
      }
    }
    const dR = {
        mode: "default"
      },
      ER = {
        show: () => {},
        clear: () => {}
      };

    function YR() {
      return "undefined" !== typeof document && "hidden" === document.visibilityState
    }
    class kR {
      constructor(RR) {
        this.options = RR, this.NK = void 0, this.director = void 0, this.latest = dR, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
          bD: 0,
          PD: 0
        }, this.pointedAt = {
          heading: 0,
          pitch: 0
        }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastPose = {
          position: [0, 0, 0],
          heading: 0,
          pitch: 0,
          fovRadians: 0
        }, this.lastAnswer = eR.lb.None, this.threw = !1, this.lastCallMs = 0, this.answeredPose = !1, this.pa = new Int32Array(3 * eR.Id), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * eR.Id), this.NK = new jR(RR.api), this.director = new cR.d(this.NK)
      }
      settingsChanged(RR) {
        let JR = dR;
        if (RR.length > 0) try {
          JR = (0, IR.e)(RR)
        } catch {}
        this.latest = JR, this.pending = JR
      }
      call(RR, JR, GR, yR, tR, uR) {
        var ZR, qR;
        this.holding = !1;
        const iR = this.answeredPose && 0 === (yR & eR.sb.Held);
        let fR;
        try {
          fR = this.answer(RR, JR, GR, yR, tR, uR), this.threw = !1
        } catch (VR) {
          this.options.reportError(VR);
          fR = !this.threw && this.answeredPose && !iR ? this.sendLastPose() : eR.lb.None, this.threw = !0
        }
        return this.answeredPose = fR !== eR.lb.None, this.holding = this.answeredPose && !iR, null === (ZR = (qR = this.options).showFacing) || void 0 === ZR || ZR.call(qR, this.holding ? this.facing : null), fR
      }
      holdsView() {
        return this.holding
      }
      answer(RR, JR, GR, yR, tR, uR) {
        this.calledThisFrame = !0, this.engaged = !0, this.lastCallMs = this.now();
        const {
          NK: ZR
        } = this;
        ZR.readView();
        if (0 !== (yR & eR.sb.Held) || ZR.setViewHeading((0, HR.v)(ZR.bodyHeading)), void 0 !== this.pending) {
          const RR = this.pending;
          this.pending = void 0, this.director.setSettings(RR), this.syncShownSettings()
        }
        this.readLook((0, mR.g)(JR), (0, mR.g)(GR), yR, (0, mR.g)(tR), (0, mR.g)(uR));
        const qR = this.director.update(RR / 1e3, this.look);
        if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !qR) return eR.lb.None;
        const iR = this.lastPose;
        return (0, PR.i)(qR.position, iR.position), iR.heading = (0, HR.v)(qR.heading), iR.pitch = (0, HR.h)(qR.pitch), iR.fovRadians = (0, DR.g)(qR.fov), this.lastAnswer = this.facingAnswer(), this.sendLastPose()
      }
      facingAnswer() {
        if ("default" === this.director.getSettings().mode) return eR.lb.Pose;
        switch (this.facing) {
          case "camera":
            return eR.lb.FaceCamera;
          case "cursor":
            return eR.lb.FaceCursor;
          default:
            return eR.lb.FaceMovement
        }
      }
      sendLastPose() {
        const {
          position: RR,
          heading: JR,
          pitch: GR,
          fovRadians: yR
        } = this.lastPose;
        return 0 === this.options.api.queries.directorPose(RR[0], RR[1], RR[2], JR, GR, yR) ? eR.lb.None : this.lastAnswer
      }
      afterFrame(RR) {
        RR ? (this.calledThisFrame || (this.holding = !1, this.engaged && this.idle()), this.calledThisFrame = !1) : this.centresLen > 0 && this.hidden() && this.now() - this.lastCallMs > 1e3 && this.setCentres(0), this.centresUnsent && this.sendCentres()
      }
      reset() {
        this.latest = dR, this.idle()
      }
      restart() {
        const RR = this.holding;
        this.idle(), this.holding = RR
      }
      idle() {
        var RR, JR;
        this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new cR.d(this.NK), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, this.threw = !1, null === (RR = (JR = this.options).showFacing) || void 0 === RR || RR.call(JR, null), this.setCentres(0)
      }
      syncShownSettings() {
        const RR = this.director.getSettings();
        if (RR === this.shownSettings) return;
        this.shownSettings = RR;
        const JR = (0, oR.d)(RR);
        this.facing = JR.facing, this.mouseTurns = JR.mouseTurns
      }
      readLook(RR, JR, GR, yR, tR) {
        const uR = this.look,
          ZR = 0 !== (GR & eR.sb.LookPointed);
        if (null === this.mouseTurns && !ZR) return uR.bD = 0, uR.PD = 0, void(uR.pointedAt = void 0);
        let qR;
        ZR && (this.pointedAt.heading = yR, this.pointedAt.pitch = tR, qR = this.pointedAt);
        const {
          NK: iR
        } = this;
        iR.setViewHeading((0, oR.c)(iR.getViewHeading(), RR, JR, qR, "look" === this.mouseTurns, uR))
      }
      writeCentres(RR) {
        const JR = this.next,
          GR = Math.min(RR.length, eR.Id);
        for (let yR = 0; yR < GR; yR++)
          for (let GR = 0; GR < 3; GR++) JR[3 * yR + GR] = Math.floor(RR[yR][GR] / eR.C);
        this.setCentres(GR)
      }
      setCentres(RR) {
        const {
          pa: JR,
          next: GR
        } = this;
        let yR = RR === this.centresLen;
        for (let tR = 0; yR && tR < 3 * RR; tR++) yR = JR[tR] === GR[tR];
        yR || (JR.fill(0), JR.set(GR.subarray(0, 3 * RR)), this.centresLen = RR, this.centresUnsent = !0, this.sendCentres())
      }
      sendCentres() {
        const RR = this.options.cmd();
        null !== RR && (0, eR.yf)(RR, 0, this.pa, this.centresLen) && (this.centresUnsent = !1)
      }
      screen() {
        var RR, JR, GR;
        return null !== (RR = null === (JR = (GR = this.options).screen) || void 0 === JR ? void 0 : JR.call(GR)) && void 0 !== RR ? RR : ER
      }
      hidden() {
        var RR;
        return (null !== (RR = this.options.isPageHidden) && void 0 !== RR ? RR : YR)()
      }
      now() {
        var RR, JR, GR;
        return null !== (RR = null === (JR = (GR = this.options).now) || void 0 === JR ? void 0 : JR.call(GR)) && void 0 !== RR ? RR : performance.now()
      }
    }
    var QR = GR(40377),
      FR = GR(42274);
    const TR = eR.C * eR.C * eR.C,
      sR = Math.log2(eR.C),
      hR = eR.C - 1,
      RJ = 65535,
      JJ = eR.P.BYTES / 4,
      GJ = new Uint16Array(TR);

    function yJ(RR, JR, GR) {
      return RR * eR.C * eR.C + JR * eR.C + GR
    }
    class tJ {
      constructor(RR) {
        this.chunk = RR
      }
      get data() {
        return this.chunk.gameVoxels()
      }
      index(RR, JR, GR) {
        return yJ(RR, JR, GR)
      }
    }
    class uJ {
      constructor() {
        this.ids = new Map, this.cleared = new Set, this.layers = 0, this.patched = null, this.from = null
      }
    }
    class ZJ {
      constructor(RR, JR, GR, yR) {
        this.table = RR, this.slot = JR, this.generation = GR, this.epoch = yR, this.Rr = new tJ(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = GJ, this.dataPtr = 0, this.dataBuffer = null, this.dataStamp = -1, this.version = 0, this.layers = null, this.layersVersion = -1, this.layersPtr = -1, this.staleLayers = 0
      }
      get Ka() {
        return this.voxelData(), this.version === this.shownCore && this.writeCount === this.shownWrites || (this.shownCore = this.version, this.shownWrites = this.writeCount, this.shownVersion = this.table.nextVersion()), this.shownVersion
      }
      get hr() {
        const RR = this.gameVoxels(),
          JR = this.layers ??= new Uint16Array(eR.C);
        this.layersVersion === this.version && this.layersPtr === this.dataPtr || (this.layersVersion = this.version, this.layersPtr = this.dataPtr, this.staleLayers = -1);
        for (let GR = 0; 0 !== this.staleLayers; GR++) {
          const yR = 1 << GR;
          0 !== (this.staleLayers & yR) && (this.staleLayers &= ~yR, JR[GR] = qJ(RR, GR))
        }
        return JR
      }
      voxelData() {
        return this.dataStamp === this.table.stamp && 0 !== this.data.length ? this.data : this.reread()
      }
      gameVoxels() {
        const RR = this.voxelData(),
          JR = this.writes;
        if (null === JR || 0 === JR.ids.size) return RR;
        if (JR.from !== RR) {
          const GR = JR.patched ??= new Uint16Array(TR);
          GR.set(RR);
          for (const [RR, yR] of JR.ids) GR[RR] = yR;
          JR.from = RR
        }
        return JR.patched
      }
      written(RR) {
        var JR;
        return null === (JR = this.writes) || void 0 === JR ? void 0 : JR.ids.get(RR)
      }
      hasWrites() {
        return null !== this.writes && 0 !== this.writes.ids.size
      }
      write(RR, JR, GR) {
        const yR = this.writes ??= new uJ;
        yR.ids.set(RR, JR), GR && yR.cleared.add(RR), null !== yR.from && (yR.patched[RR] = JR);
        const tR = 1 << (RR >> sR & hR);
        yR.layers |= tR, this.staleLayers |= tR, this.writeCount++
      }
      clearWrites() {
        const RR = this.writes;
        null !== RR && (this.staleLayers |= RR.layers, RR.ids.clear(), RR.cleared.clear(), RR.layers = 0, RR.from = null)
      }
      dataCleared(RR) {
        var JR;
        return !0 === (null === (JR = this.writes) || void 0 === JR ? void 0 : JR.cleared.has(RR))
      }
      reread() {
        this.dataStamp = this.table.stamp;
        const RR = this.table.slotWords(),
          JR = this.slot * JJ;
        if (this.epoch !== this.table.epoch || JR + JJ > RR.length || 0 === RR[JR + 3] || RR[JR + 2] !== this.generation) return this.data = GJ, this.dataPtr = 0, GJ;
        this.version = RR[JR + 1];
        const GR = RR[JR + 0],
          yR = RR.buffer;
        return GR === this.dataPtr && yR === this.dataBuffer || (this.dataPtr = GR, this.dataBuffer = yR, this.data = this.table.voxelsAt(yR, GR)), this.data
      }
    }

    function qJ(RR, JR) {
      const GR = RR[JR * eR.C];
      for (let yR = 0; yR < eR.C; yR++) {
        const tR = yJ(yR, JR, 0);
        for (let JR = 0; JR < eR.C; JR++)
          if (RR[tR + JR] !== GR) return RJ
      }
      return GR
    }
    const iJ = new Uint32Array(0);

    function fJ(RR, JR, GR) {
      return yJ(RR & hR, JR & hR, GR & hR)
    }
    class VJ {
      constructor(RR, JR) {
        this.memory = RR, this.apiView = JR, this.chunks = new Map, this.written = [], this.lastKey = -1, this.lastChunk = void 0, this.slotsPtr = 0, this.slotsLen = 0, this.slotsBuffer = null, this.slots = iJ, this.walkPtr = 0, this.walkLen = 0, this.walkBuffer = null, this.walk = iJ, this.epoch = 0, this.stamp = 0, this.versions = 0, this.corruption = null
      }
      apply(RR, JR, GR, yR, tR, uR) {
        if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, uR === eR.S.ResetAll) return this.chunks.clear(), void this.epoch++;
        if (uR !== eR.S.Stored && uR !== eR.S.Unloaded) throw new rR.c(`ChunkSlot flags ${uR}`);
        const ZR = (0, FR.b)(RR, JR, GR);
        if (ZR < 0) return;
        if (uR === eR.S.Unloaded) return void this.chunks.delete(ZR);
        const qR = this.chunks.get(ZR);
        (null === qR || void 0 === qR ? void 0 : qR.slot) === yR && qR.generation === tR || this.chunks.set(ZR, new ZJ(this, yR, tR, this.epoch))
      }
      touch() {
        this.stamp++, this.clearOverlay(), this.viewWalkThrough()
      }
      refresh() {
        if (this.stamp++, this.corruption) throw this.corruption;
        const RR = this.apiView(),
          JR = eR.s.chunkSlotsPtr(RR, 0),
          GR = eR.s.chunkSlotsLen(RR, 0);
        JR === this.slotsPtr && GR === this.slotsLen || (this.slotsPtr = JR, this.slotsLen = GR, this.slotsBuffer = null, this.slotWords()), this.viewWalkThrough(), this.clearOverlay()
      }
      viewWalkThrough() {
        const RR = this.apiView(),
          JR = eR.s.walkThroughPtr(RR, 0),
          GR = eR.s.walkThroughLen(RR, 0);
        JR === this.walkPtr && GR === this.walkLen || (this.walkPtr = JR, this.walkLen = GR, this.walkBuffer = null, this.walkWords())
      }
      clearOverlay() {
        for (const RR of this.written) RR.clearWrites();
        this.written.length = 0
      }
      nextVersion() {
        return ++this.versions
      }
      slotWords() {
        const RR = this.memory().buffer;
        var JR;
        RR !== this.slotsBuffer && (this.slotsBuffer = RR, this.slots = null !== (JR = (0, rR.l)(Uint32Array, RR, this.slotsPtr, this.slotsLen * JJ, "the chunk directory")) && void 0 !== JR ? JR : iJ);
        return this.slots
      }
      voxelsAt(RR, JR) {
        try {
          var GR;
          return null !== (GR = (0, rR.l)(Uint16Array, RR, JR, TR, "a chunk's voxels")) && void 0 !== GR ? GR : GJ
        } catch (yR) {
          if (!(yR instanceof rR.c)) throw yR;
          return this.corruption ??= yR, GJ
        }
      }
      chunk(RR, JR, GR) {
        var yR;
        return null !== (yR = this.chunks.get((0, FR.b)(RR, JR, GR))) && void 0 !== yR ? yR : null
      }
      isLoaded(RR, JR, GR) {
        return void 0 !== this.chunkAt(Math.floor(RR), Math.floor(JR), Math.floor(GR))
      }
      Vq(RR, JR, GR) {
        var yR;
        const tR = Math.floor(RR),
          uR = Math.floor(JR),
          ZR = Math.floor(GR),
          qR = this.chunkAt(tR, uR, ZR);
        if (!qR) return 0;
        const iR = fJ(tR, uR, ZR);
        return null !== (yR = qR.written(iR)) && void 0 !== yR ? yR : qR.voxelData()[iR]
      }
      setOverlay(RR, JR, GR, yR) {
        let tR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const uR = this.chunkAt(RR, JR, GR);
        return !!uR && (uR.hasWrites() || this.written.push(uR), uR.write(fJ(RR, JR, GR), yR, tR), !0)
      }
      version(RR, JR, GR) {
        var yR, tR;
        return null !== (yR = null === (tR = this.chunks.get((0, FR.b)(RR, JR, GR))) || void 0 === tR ? void 0 : tR.Ka) && void 0 !== yR ? yR : null
      }
      scan(RR, JR, GR, yR, tR, uR, ZR, qR) {
        const iR = eR.C;
        let fR = 0;
        for (let VR = Math.floor(JR / iR); VR * iR < tR; VR++) {
          const KR = VR * iR,
            wR = Math.min(tR - KR, iR);
          for (let tR = Math.floor(RR / iR); tR * iR < yR; tR++) {
            const rR = tR * iR,
              eR = Math.min(yR - rR, iR);
            for (let yR = Math.floor(GR / iR); yR * iR < uR; yR++) {
              const aR = this.chunks.get((0, FR.b)(tR, VR, yR));
              if (!aR) continue;
              const LR = yR * iR,
                nR = Math.max(GR - LR, 0),
                UR = Math.min(uR - LR, iR),
                WR = aR.hr,
                AR = aR.gameVoxels();
              for (let GR = Math.max(JR - KR, 0); GR < wR; GR++) {
                const JR = WR[GR];
                if (JR === RJ || 0 !== ZR[JR]) {
                  fR++;
                  for (let JR = Math.max(RR - rR, 0); JR < eR; JR++) {
                    const RR = yJ(JR, GR, 0);
                    for (let yR = nR; yR < UR; yR++) {
                      const tR = AR[RR + yR];
                      0 !== ZR[tR] && qR.push(rR + JR, KR + GR, LR + yR, tR)
                    }
                  }
                }
              }
            }
          }
        }
        return fR
      }
      columnTops(RR, JR, GR, yR, tR, uR, ZR, qR, iR) {
        (0, QR.c)(((RR, JR, GR) => {
          var yR;
          return null !== (yR = this.chunks.get((0, FR.b)(RR, JR, GR))) && void 0 !== yR ? yR : null
        }), RJ, RR, JR, GR, yR, tR, uR, ZR, qR, iR)
      }
      dataCleared(RR, JR, GR) {
        var yR;
        const tR = Math.floor(RR),
          uR = Math.floor(JR),
          ZR = Math.floor(GR);
        return !0 === (null === (yR = this.chunkAt(tR, uR, ZR)) || void 0 === yR ? void 0 : yR.dataCleared(fJ(tR, uR, ZR)))
      }
      isWalkThrough(RR) {
        if (!Number.isInteger(RR) || RR < 0 || RR > 65535) return !1;
        const JR = this.walkWords(),
          GR = RR >>> 5;
        return GR < JR.length && 1 === (JR[GR] >>> (31 & RR) & 1)
      }
      walkWords() {
        const RR = this.memory().buffer;
        var JR;
        RR !== this.walkBuffer && (this.walkBuffer = RR, this.walk = null !== (JR = (0, rR.l)(Uint32Array, RR, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== JR ? JR : iJ);
        return this.walk
      }
      chunkAt(RR, JR, GR) {
        if ((0 | RR) !== RR || (0 | JR) !== JR || (0 | GR) !== GR) return;
        const yR = (0, FR.b)(RR >> sR, JR >> sR, GR >> sR);
        return yR !== this.lastKey && (this.lastKey = yR, this.lastChunk = this.chunks.get(yR)), this.lastChunk
      }
    }
    var KJ = GR(39689),
      wJ = GR(38977),
      rJ = GR(39368),
      eJ = GR(37534),
      aJ = GR(37820),
      LJ = GR(35099),
      nJ = GR(40382),
      UJ = GR(203);
    const WJ = ["ambient", "cars", "crowd", "customGame_horror", "dig", "fire", "fishing", "gameStart", "gunMisc", "gunPistol", "gunRifle", "gunSemiAutomatic", "gunShotgun", "gunSubmachineGun", "mobBear", "mobCat", "mobCow", "mobCrone", "mobDeer", "mobDog", "mobFennec", "mobGolem", "mobGorilla", "mobHorse", "mobKnight", "mobPig", "mobReaver", "mobSheep", "mobSkeleton", "mobStag", "mobStalker", "mobWarper", "mobWraith", "mobZombie", "note", "phoneAndMoney", "police", "randomBeep", "randomCannon", "randomCash", "randomExp", "randomFallsmall", "randomFire", "randomFirecracker", "randomItems", "randomLaugh", "randomMagic", "randomSplash", "rpg", "step", "survivalFactory", "town"],
      AJ = [
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
      CJ = AJ.map((RR => {
        let [JR] = RR;
        return JR
      })),
      XJ = Uint8Array.from(AJ, (RR => {
        let [, JR] = RR;
        return JR
      })),
      MJ = {
        semi_automatic: 11,
        submachine: 13,
        rifle: 10,
        pistol: 9,
        shotgun: 12
      },
      BJ = 8,
      lJ = [
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
    var pJ = GR(37479),
      gJ = GR(37507),
      bJ = GR(37528),
      vJ = GR(37498),
      OJ = GR(271);
    class xJ {
      constructor(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : OJ.e;
        this.sound = RR, this.onError = JR, this.idle = GR, this.queue = [], this.asked = new Set, this.cancelIdle = null, this.gen = 0, this.onIdle = RR => {
          this.cancelIdle = null;
          try {
            if (RR.timeRemaining() >= 1) {
              let RR = this.queue.shift();
              for (; void 0 !== RR && !this.load(RR);) RR = this.queue.shift()
            }
          } catch (JR) {
            this.onError(JR)
          } finally {
            this.schedule()
          }
        }
      }
      preload(RR) {
        const JR = [...RR].sort(((RR, JR) => RR - JR));
        for (const GR of JR) this.asked.has(GR) || (this.asked.add(GR), this.queue.push(GR));
        this.schedule()
      }
      cancel() {
        var RR;
        this.queue.length = 0, this.asked.clear(), this.gen++, null === (RR = this.cancelIdle) || void 0 === RR || RR.call(this), this.cancelIdle = null
      }
      schedule() {
        null === this.cancelIdle && this.queue.length > 0 && (this.cancelIdle = this.idle(this.onIdle))
      }
      load(RR) {
        const JR = this.sound(RR, !1),
          GR = this.sound(RR, !0),
          [yR, tR] = "unloaded" === JR.state() && "unloaded" !== GR.state() ? [GR, JR] : [JR, GR],
          uR = this.gen,
          ZR = () => {
            try {
              uR === this.gen && "unloaded" === tR.state() && tR.load()
            } catch (RR) {
              this.onError(RR)
            }
          },
          qR = yR.state();
        return "unloaded" === qR ? (yR.once("load", ZR), yR.load(), !0) : "unloaded" === tR.state() && ("loading" === qR ? (yR.once("load", ZR), !1) : (tR.load(), !0))
      }
    }
    var NJ = GR(42435);

    function DJ(RR) {
      var JR;
      const GR = function(RR) {
        let JR = 0,
          GR = CJ.length;
        for (; JR < GR;) {
          const yR = JR + GR >>> 1;
          CJ[yR] < RR ? JR = yR + 1 : GR = yR
        }
        return JR
      }(RR);
      if ("" === RR || null === (JR = CJ[GR]) || void 0 === JR || !JR.startsWith(RR)) return null;
      if (CJ[GR] === RR) return [GR, 1];
      let yR = GR + 1;
      for (; yR < CJ.length && CJ[yR].startsWith(RR);) yR++;
      return [GR, yR - GR]
    }

    function HJ(RR) {
      let [JR, GR] = RR, yR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
      return 1 === GR ? JR : JR + Math.floor(yR() * GR)
    }

    function oJ(RR) {
      for (const JR of lJ)
        if (JR[0] <= RR && RR < JR[0] + JR[1]) return JR;
      return null
    }

    function cJ(RR) {
      const JR = [];
      for (let GR = 0; GR < XJ.length; GR++) XJ[GR] === RR && JR.push(GR);
      return JR
    }
    const PJ = {
        coneInnerAngle: 360,
        coneOuterAngle: 360,
        coneOuterGain: 0,
        distanceModel: "inverse",
        maxDistance: 1e3,
        panningModel: "HRTF",
        rolloffFactor: 1
      },
      IJ = UJ.g.Kn * UJ.g.playerEyeToHeightRatio,
      mJ = [0, 0, -1, 0, 1, 0],
      zJ = WJ.indexOf("note");

    function SJ(RR) {
      return RR >= 0 ? Math.min(1, RR) : 0
    }
    class jJ {
      constructor(RR, JR, GR, yR, tR) {
        this.group = RR, this.loudness = JR, this.startMs = GR, this.howl = yR, this.host = tR, this.id = 0, this.direct = !1
      }
      getDurationMs() {
        const RR = this.host.alive(this.id);
        return RR ? 1e3 * this.howl.duration(this.id) / RR.rate : 0
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
    class dJ {
      constructor(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          yR = arguments.length > 3 ? arguments[3] : void 0;
        this.createHowl = RR, this.listener = JR, this.now = GR, this.errors = 0, this.howls = new Map, this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader = void 0, this.voices = new vJ.b, this.failed = new Set, this.started = new Set, this.voiceHost = {
          alive: RR => this.aliveVoice(RR),
          started: RR => this.started.has(RR),
          drop: RR => {
            var JR;
            null === (JR = this.live.get(RR)) || void 0 === JR || JR.howl.stop(RR), this.forget(RR)
          }
        }, this.handlers = {
          playSound: (RR, JR, GR, yR, tR, uR, ZR, qR, iR) => {
            if (yR >= CJ.length) return;
            const fR = 0 !== (tR & eR.Sd.Loop);
            tR & eR.Sd.TwoD ? this.start(yR, !1, ZR, uR, qR, fR, oJ(yR)) : this.startSpatial(yR, ZR, uR, qR, fR, RR, JR, GR, iR, this.earDistSq(RR, JR, GR), oJ(yR))
          },
          soundPos: (RR, JR, GR, yR) => {
            const tR = this.core.get(yR);
            var uR;
            void 0 !== tR && (null === (uR = this.live.get(tR)) || void 0 === uR || uR.howl.pos(GR, JR, RR, tR))
          },
          soundSet: (RR, JR, GR, yR) => {
            const tR = this.core.get(RR),
              uR = void 0 === tR ? void 0 : this.live.get(tR);
            void 0 !== tR && uR && (this.setRel(tR, JR), uR.rate = GR, uR.howl.rate(GR, tR), uR.spatial && uR.howl.pannerAttr({
              refDistance: yR
            }, tR))
          },
          soundFade: (RR, JR, GR, yR) => {
            const tR = this.core.get(RR);
            void 0 !== tR && this.fade(tR, JR, GR, 0 !== (yR & eR.Qd.StopAfter))
          },
          soundStop: RR => {
            const JR = this.core.get(RR);
            var GR;
            void 0 !== JR && (null === (GR = this.live.get(JR)) || void 0 === GR || GR.howl.stop(JR), this.forget(JR))
          },
          soundReset: () => {
            this.stopCore()
          }
        }, this.loader = new xJ(((RR, JR) => this.howl(RR, JR)), (RR => {
          this.errors++, console.error("Audio preload failed", RR)
        }), yR)
      }
      preload(RR) {
        this.loader.preload(RR)
      }
      cancelPreload() {
        this.loader.cancel()
      }
      freeSoundsAfterGame() {
        for (let RR = 0; RR < CJ.length; RR++) {
          if (gJ.e.has(WJ[XJ[RR]])) continue;
          const JR = [];
          for (const GR of [!1, !0]) {
            const yR = EJ(RR, GR),
              tR = this.howls.get(yR);
            void 0 !== tR && "loading" !== tR.state() && JR.push({
              key: yR,
              howl: tR
            })
          }
          if (JR.some((RR => {
              let {
                howl: JR
              } = RR;
              return "loaded" === JR.state()
            })))
            for (const {
                key: RR,
                howl: GR
              }
              of JR) this.howls.delete(RR), "loaded" === GR.state() ? (0, pJ.e)(GR) : GR.unload()
        }
      }
      onAudioEvent(RR, JR, GR, yR) {
        if (RR < eR.o.PlaySound || RR > eR.o.SoundReset) return !1;
        try {
          return (0, eR.be)(RR, JR, GR, yR, this.handlers)
        } catch (tR) {
          return this.errors++, console.error("Audio event failed", tR), !0
        }
      }
      applyListener(RR) {
        const JR = this.nextPose;
        for (let yR = 0; yR < 3; yR++) JR[2 - yR] = eR.u.listener(RR, 0, yR), JR[5 - yR] = eR.u.forward(RR, 0, yR), JR[8 - yR] = eR.u.up(RR, 0, yR);
        0 === JR[3] && 0 === JR[4] && 0 === JR[5] && JR.set(this.posed ? this.pose.subarray(3) : mJ, 3);
        for (let yR = 0; yR < 9; yR++)
          if (!Number.isFinite(JR[yR])) return;
        const GR = this.pose;
        if (this.posed) {
          let RR = !0;
          for (let yR = 0; yR < 9 && RR; yR++) RR = JR[yR] === GR[yR];
          if (RR) return
        }
        this.listener.apply(JR) && (GR.set(JR), this.posed = !0)
      }
      playGame(RR, JR, GR, yR, tR, uR, ZR) {
        const qR = DJ(RR);
        if (null === qR) return NJ.b;
        const iR = HJ(qR),
          fR = qR[1] > 1 ? qR : null;
        if (!GR) {
          const {
            howl: RR,
            id: GR
          } = this.start(iR, !1, JR, 0, 1, ZR, fR);
          return this.gameSound(RR, GR, !1)
        }
        const VR = GR[0],
          KR = GR[1] + IJ,
          wR = GR[2];
        if (!Number.isFinite(VR) || !Number.isFinite(KR) || !Number.isFinite(wR)) return NJ.b;
        let rR;
        if (yR) {
          const RR = VR - yR[0],
            JR = KR - yR[1],
            GR = wR - yR[2];
          if (rR = RR * RR + JR * JR + GR * GR, rR > tR * tR) return NJ.b
        } else rR = this.earDistSq(VR, KR, wR);
        const eR = this.startSpatial(iR, JR, 0, 1, ZR, VR, KR, wR, uR, rR, fR);
        return eR ? this.gameSound(eR.howl, eR.id, !0) : NJ.b
      }
      setMaster(RR, JR) {
        this.level = SJ(RR);
        const GR = JR ? this.level : 0;
        if (GR !== this.master) {
          this.master = GR;
          for (const [RR, JR] of this.live) JR.fadeMs = 0, JR.gain = JR.rel * this.master, JR.howl.volume(JR.gain, RR)
        }
      }
      stopCore() {
        for (const JR of [...this.core.values()]) {
          var RR;
          null === (RR = this.live.get(JR)) || void 0 === RR || RR.howl.stop(JR)
        }
        this.core.clear()
      }
      stopAll() {
        this.cancelPreload();
        for (const [RR, JR] of [...this.live]) JR.howl.stop(RR), this.forget(RR);
        this.core.clear()
      }
      gameSound(RR, JR, GR) {
        const yR = {
          stop: () => (this.live.has(JR) && RR.stop(JR), yR),
          fade: (RR, GR, tR) => {
            var uR, ZR;
            const qR = this.level > 0 ? GR / this.level : GR > 0 && null !== (uR = null === (ZR = this.live.get(JR)) || void 0 === ZR ? void 0 : ZR.rel) && void 0 !== uR ? uR : 0;
            return this.fade(JR, qR, tR, !1), yR
          },
          rate: GR => {
            const tR = this.live.get(JR);
            return tR && (tR.rate = function(RR) {
              return RR > 0 && RR < 1 / 0 ? RR : 1
            }(GR), RR.rate(tR.rate, JR)), yR
          },
          getVolume: () => {
            var RR, GR;
            return (null !== (RR = null === (GR = this.live.get(JR)) || void 0 === GR ? void 0 : GR.rel) && void 0 !== RR ? RR : 0) * this.level
          },
          getRelativeVolume: () => {
            var RR, GR;
            return null !== (RR = null === (GR = this.live.get(JR)) || void 0 === GR ? void 0 : GR.rel) && void 0 !== RR ? RR : 0
          },
          setRelativeVolume: RR => (this.setRel(JR, RR), yR),
          setPannerAttr: tR => {
            if (GR && this.live.has(JR)) {
              const GR = {
                ...PJ,
                refDistance: eJ.f
              };
              for (const [RR, JR] of Object.entries(tR)) "number" !== typeof JR && "string" !== typeof JR || (GR[RR] = JR);
              RR.pannerAttr({
                coneOuterAngle: GR.coneOuterAngle
              }, JR), RR.pannerAttr(GR, JR)
            }
            return yR
          },
          setPosition: tR => (GR && this.live.has(JR) && Number.isFinite(tR[0] + tR[1] + tR[2]) && RR.pos(tR[2], tR[1], tR[0], JR), yR)
        };
        return yR
      }
      startSpatial(RR, JR, GR, yR, tR, uR, ZR, qR, iR, fR, VR) {
        const KR = this.howl(RR, !0);
        let wR = null;
        if (!tR) {
          if (this.failed.has(KR)) return null;
          const GR = XJ[RR] === zJ ? null : (0, vJ.f)(CJ[RR]),
            yR = (0, vJ.e)(SJ(JR), Math.sqrt(fR), iR);
          if (wR = new jJ(GR, yR, this.now(), KR, this.voiceHost), !this.voices.admit(wR)) return null
        }
        const rR = this.start(RR, !0, JR, GR, yR, tR, VR);
        return wR && (wR.id = rR.id, wR.direct = "loaded" === KR.state() && !KR._playLock), KR.pannerAttr({
          coneOuterAngle: 360
        }, rR.id), KR.pannerAttr({
          ...PJ,
          refDistance: iR
        }, rR.id), KR.pos(qR, ZR, uR, rR.id), !tR && this.posed && (0, bJ.k)() && (0, bJ.h)(WJ[XJ[RR]], CJ[RR], uR - this.pose[2], qR - this.pose[0]), rR
      }
      aliveVoice(RR) {
        const JR = this.live.get(RR);
        if (!JR) return;
        const GR = JR.howl._soundById(RR);
        if (GR && !GR._ended) return JR;
        this.forget(RR)
      }
      earDistSq(RR, JR, GR) {
        if (!this.posed) return 0;
        const yR = RR - this.pose[2],
          tR = JR - this.pose[1],
          uR = GR - this.pose[0];
        return yR * yR + tR * tR + uR * uR
      }
      start(RR, JR, GR, yR, tR, uR, ZR) {
        const qR = SJ(GR),
          iR = this.howl(RR, JR);
        "unloaded" === iR.state() && (iR.load(), null !== ZR && this.loadPick(ZR, JR));
        const fR = iR.play(pJ.d),
          VR = qR * this.master;
        return iR.volume(VR, fR), this.live.set(fR, {
          howl: iR,
          rel: qR,
          gain: VR,
          fadeFrom: VR,
          fadeAt: 0,
          fadeMs: 0,
          rate: tR,
          handle: yR,
          spatial: JR,
          stopTimer: void 0
        }), 0 !== yR && this.core.set(yR, fR), 1 !== tR && iR.rate(tR, fR), uR && iR.loop(!0, fR), {
          howl: iR,
          id: fR
        }
      }
      loadPick(RR, JR) {
        let [GR, yR] = RR;
        for (let uR = GR; uR < GR + yR; uR++) {
          var tR;
          const RR = this.howl(uR, JR);
          "unloaded" === RR.state() && "loading" !== (null === (tR = this.howls.get(EJ(uR, !JR))) || void 0 === tR ? void 0 : tR.state()) && RR.load()
        }
      }
      howl(RR, JR) {
        const GR = EJ(RR, JR);
        let yR = this.howls.get(GR);
        if (!yR) {
          const tR = this.createHowl(CJ[RR], JR);
          tR.on("end", (RR => {
            tR.loop(RR) || this.forget(RR)
          })), tR.on("stop", (RR => {
            this.forget(RR)
          })), tR.on("play", (RR => {
            this.live.has(RR) && this.started.add(RR)
          })), tR.on("loaderror", (RR => {
            if ("loaded" !== tR.state()) {
              this.failed.add(tR);
              for (const [RR, JR] of this.live) JR.howl === tR && this.forget(RR)
            } else "number" === typeof RR && this.forget(RR)
          })), this.howls.set(GR, tR), yR = tR
        }
        return yR
      }
      setRel(RR, JR) {
        const GR = this.live.get(RR);
        GR && (YJ(GR), GR.fadeMs = 0, GR.rel = SJ(JR), GR.gain = GR.rel * this.master, GR.howl.volume(GR.gain, RR))
      }
      fade(RR, JR, GR, yR) {
        const tR = this.live.get(RR);
        if (!tR) return;
        YJ(tR);
        const {
          howl: uR
        } = tR, ZR = this.gainNow(tR);
        tR.rel = SJ(JR), tR.gain = tR.rel * this.master;
        const qR = GR > 0 ? Math.min(GR, 65535) : 0,
          iR = 0 === qR || ZR === tR.gain;
        tR.fadeMs = iR ? 0 : qR, iR ? uR.volume(tR.gain, RR) : (tR.fadeFrom = ZR, tR.fadeAt = this.now(), uR.fade(ZR, tR.gain, qR, RR)), yR && (iR ? uR.stop(RR) : tR.stopTimer = setTimeout((() => {
          tR.stopTimer = void 0, uR.stop(RR)
        }), qR))
      }
      gainNow(RR) {
        if (RR.fadeMs > 0) {
          const JR = (this.now() - RR.fadeAt) / RR.fadeMs;
          if (JR < 1) return RR.fadeFrom + (RR.gain - RR.fadeFrom) * Math.max(0, JR);
          RR.fadeMs = 0
        }
        return RR.gain
      }
      forget(RR) {
        this.started.delete(RR);
        const JR = this.live.get(RR);
        JR && (YJ(JR), this.live.delete(RR), 0 !== JR.handle && this.core.get(JR.handle) === RR && this.core.delete(JR.handle))
      }
    }

    function EJ(RR, JR) {
      return 2 * RR + (JR ? 1 : 0)
    }

    function YJ(RR) {
      void 0 !== RR.stopTimer && (clearTimeout(RR.stopTimer), RR.stopTimer = void 0)
    }
    var kJ = GR(42132),
      QJ = GR(40388);
    class FJ {
      constructor(RR, JR, GR, yR) {
        this.key = RR, this.model = JR, this.host = yR, this.hK = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.uZR = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, this.tailView = void 0, this.tailCut = new Uint8Array(0), this.made = !1, this.He = !1, this.hK = Math.max(1, Math.ceil(GR)), this.records = new Float32Array(this.hK * KJ.c), this.isDirty = new Uint8Array(this.hK), this.tail = new Uint8Array(this.hK * eR.nc.Bytes), this.tailView = new DataView(this.tail.buffer), this.make(yR.cmd())
      }
      setOrigin(RR, JR, GR) {
        this.origin[0] = RR, this.origin[1] = JR, this.origin[2] = GR
      }
      markDirty(RR) {
        !this.He && RR >= 0 && RR < this.hK && RR < eR.nc.Max && this.Ja(RR, RR + 1)
      }
      commit(RR) {
        if (this.He) return;
        (RR = Math.min(Math.max(Math.floor(RR), 0), this.hK, eR.nc.Max)) > this.count && this.Ja(this.count, RR), this.count = RR;
        const {
          origin: JR,
          sentOrigin: GR,
          dirtyList: yR
        } = this, tR = this.uZR !== RR, uR = GR[0] !== JR[0] || GR[1] !== JR[1] || GR[2] !== JR[2];
        if (0 === yR.length && !tR && !uR) return;
        const ZR = this.host.cmd();
        if (!ZR || !this.make(ZR)) return;
        const qR = yR.length,
          {
            records: iR,
            tailView: fR
          } = this;
        for (let VR = 0; VR < qR; VR++) {
          const RR = yR[VR],
            JR = RR * KJ.c,
            GR = VR * eR.nc.Bytes,
            tR = 0 !== iR[JR + KJ.f] ? eR.nc.Hidden : 0;
          fR.setUint32(GR, (RR | tR) >>> 0, !0), fR.setFloat32(GR + 4, iR[JR], !0), fR.setFloat32(GR + 8, iR[JR + 1], !0), fR.setFloat32(GR + 12, iR[JR + 2], !0)
        }
        if ((0, eR.ze)(ZR, 0, this.key, RR, JR, qR, this.tailOf(qR))) {
          for (let RR = 0; RR < qR; RR++) this.isDirty[yR[RR]] = 0;
          yR.length = 0, this.uZR = RR, GR[0] = JR[0], GR[1] = JR[1], GR[2] = JR[2]
        }
      }
      grow(RR) {
        (RR = Math.ceil(RR)) <= this.hK || this.He || (this.records = (0, QJ.e)(this.records, new Float32Array(RR * KJ.c)), this.isDirty = (0, QJ.e)(this.isDirty, new Uint8Array(RR)), this.tail = new Uint8Array(RR * eR.nc.Bytes), this.tailView = new DataView(this.tail.buffer), this.hK = RR)
      }
      dispose() {
        this.He || (this.He = !0, this.host.He(this, this.made ? this.key : null))
      }
      make(RR) {
        if (!this.made && RR) {
          const {
            item: JR,
            scale: GR,
            yaw: yR
          } = this.model;
          this.made = (0, eR.Fe)(RR, 0, this.key, JR, GR, yR)
        }
        return this.made
      }
      tailOf(RR) {
        const JR = RR * eR.nc.Bytes;
        return this.tailCut.buffer === this.tail.buffer && this.tailCut.length === JR || (this.tailCut = this.tail.subarray(0, JR)), this.tailCut
      }
      Ja(RR, JR) {
        const {
          dirtyList: GR,
          isDirty: yR
        } = this;
        for (let tR = RR; tR < JR; tR++) 0 === yR[tR] && (yR[tR] = 1, GR.push(tR))
      }
    }
    var TJ = GR(671),
      sJ = GR(45021);
    const hJ = new TextEncoder,
      RG = new Uint8Array(0),
      JG = [0, 0, 0];
    class GG {
      constructor(RR, JR) {
        this.keys = 0, this.live = new Set, this.owing = new Set, this.host = void 0, this.host = {
          cmd: RR,
          serverId: JR,
          owes: RR => {
            this.owing.add(RR)
          },
          settled: (RR, JR) => {
            this.owing.delete(RR), JR && this.live.delete(RR)
          }
        }
      }
      create(RR, JR) {
        return GR = RR, TJ.l.includes(GR) ? this.add({
          lifeform: VR.k.indexOf(RR)
        }, JR) : null;
        var GR
      }
      createCosmetic(RR, JR) {
        const GR = sJ.COSMETIC_MODEL_KEYS.get(RR);
        return void 0 === GR ? null : this.add({
          attachment: GR
        }, JR)
      }
      add(RR, JR) {
        const GR = new yG(++this.keys, RR, JR, this.host);
        return this.live.add(GR), GR
      }
      disposeAll() {
        for (const RR of [...this.live]) RR.dispose()
      }
      flush() {
        if (0 === this.owing.size) return;
        const RR = this.host.cmd();
        for (const JR of this.owing)
          if (!JR.sync(RR)) return
      }
    }
    class yG {
      constructor(RR, JR, GR, yR) {
        this.key = RR, this.source = JR, this.scale = GR, this.host = yR, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.clip = null, this.clipBytes = RG, this.perch = null, this.owed = 1, this.He = !1, this.sync()
      }
      setPose(RR, JR) {
        this.He || (this.feet[0] = RR[0], this.feet[1] = RR[1], this.feet[2] = RR[2], this.yaw = JR, this.owed |= 2, this.sync())
      }
      setVisible(RR) {
        this.He || RR === this.visible || (this.visible = RR, this.owed |= 4, this.sync())
      }
      setClip(RR) {
        this.He || RR === this.clip || (this.clip = RR, this.clipBytes = null === RR ? RG : hJ.encode(RR), this.owed |= 16, this.sync())
      }
      setPerch(RR) {
        this.He || (this.perch = RR, this.owed |= 32, this.sync())
      }
      dispose() {
        this.He || (this.He = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
      }
      sync() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.host.cmd();
        return this.write(RR) ? (this.host.settled(this, this.He), !0) : (this.host.owes(this), !1)
      }
      write(RR) {
        if (!RR) return this.owed = 0, !0;
        if (1 & this.owed) {
          if (!("lifeform" in this.source ? (0, eR.Le)(RR, 0, this.key, this.source.lifeform, this.scale) : (0, eR.je)(RR, 0, this.key, this.source.attachment, this.scale))) return !1;
          this.owed &= -2
        }
        const {
          owed: JR,
          perch: GR
        } = this, yR = (2 & JR ? eR.Lc.Pose : 0) | (4 & JR ? eR.Lc.Visible : 0) | (16 & JR ? eR.Lc.Clip : 0) | (32 & JR ? eR.Lc.Perch : 0);
        if (0 !== yR) {
          var tR, uR;
          if (!(0, eR.Ie)(RR, 0, this.key, yR, this.visible ? 1 : 0, GR ? 1 : 0, this.feet, this.yaw, GR ? this.host.serverId(GR.fG) : 0, null !== (tR = null === GR || void 0 === GR ? void 0 : GR.offset) && void 0 !== tR ? tR : JG, null !== (uR = null === GR || void 0 === GR ? void 0 : GR.yaw) && void 0 !== uR ? uR : 0, 16 & JR ? this.clipBytes : RG)) return !1;
          this.owed &= -55
        }
        if (8 & this.owed) {
          if (!(0, eR.He)(RR, 0, this.key)) return !1;
          this.owed = 0
        }
        return !0
      }
    }
    var tG = GR(42534);

    function uG(RR, JR, GR, yR) {
      return (0, tG.b)(), (0, eR.zf)(RR, JR, GR, yR)
    }
    var ZG = GR(40409),
      qG = GR(42126),
      iG = GR(42543);
    const fG = [0, 0, 0],
      VG = [0, 0, 0],
      KG = [0, 0, 0],
      wG = [0, 0, 0],
      rG = {
        origin: [0, 0, 0],
        direction: [0, 0, 1]
      },
      eG = [0, 0, 0],
      aG = [0, 0],
      LG = [1, 1, 1],
      nG = 1 / 3;
    const UG = wJ.f;

    function WG(RR) {
      const JR = wJ.c[RR],
        GR = JR && wJ.f[JR.mainMultiblock];
      return GR && {
        main: GR,
        x: JR.compX,
        y: JR.compY,
        z: JR.compZ
      }
    }

    function AG(RR) {
      if (null === RR || void 0 === RR) return eR.Uc;
      const JR = +RR;
      return Number.isInteger(JR) && JR >= -2147483648 && JR <= 2147483647 && String(JR) === String(RR) ? JR : eR.Uc
    }

    function CG(RR, JR, GR) {
      return (0, eR.Ef)(RR, 0, JR, null !== GR && void 0 !== GR ? GR : Number.NaN)
    }
    class XG {
      constructor(RR) {
        this.deps = RR, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new ZG.d((() => this.tables.getClientOption("forcedCameraDirectionTransitionMs")), (RR => {
          var JR, GR;
          null === (JR = (GR = this.deps).setLocalOptions) || void 0 === JR || JR.call(GR, RR)
        })), this.mobModels = new GG((() => this.deps.cmd()), AG), this.owedFrees = [], this.pendingStyle = void 0, this.pendingFar = void 0, this.farSet = !1, this.routeMesh = 0, this.routeOffset = 0, this.routeLook = "", this.routeSlide = {
          uvOffset: [0, 0]
        }, this.poolHost = {
          cmd: () => this.deps.cmd(),
          He: (RR, JR) => {
            this.livePools.delete(RR), null !== JR && (this.owedFrees.push(JR), this.flushOwed())
          }
        }, this.api = RR.api, this.live = RR.live, this.chunks = RR.chunks, this.items = RR.items, this.tables = RR.tables
      }
      isLocal(RR) {
        return null !== RR && void 0 !== RR && +RR === this.api.localId
      }
      assertLocal(RR, JR) {
        if (!this.isLocal(RR)) throw new Error(`Attempted to ${JR} for a player that is not the local player`)
      }
      vW(RR) {
        const JR = this.api.vW(RR);
        if (!JR) throw new Error(`Entity ${RR} has no replicated position`);
        return JR
      }
      checkValid(RR) {
        return !!this.deps.isSessionLive() && (null === RR || void 0 === RR || this.api.checkValid(RR))
      }
      isAlive(RR) {
        return !1 !== this.api.isAlive(RR)
      }
      getItemStat(RR, JR, GR) {
        return this.isLocal(RR) || null !== RR && "Player" === this.api.getEntityType(RR) ? this.tables.getItemStat(JR, GR) : this.tables.getDefaultItemStat(JR, GR)
      }
      getClientOption(RR, JR) {
        return this.assertLocal(RR, "get a client option"), this.tables.getClientOption(JR)
      }
      openShop(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GR = arguments.length > 2 ? arguments[2] : void 0;
        this.assertLocal(RR, "open shop"), ZR.n.JK("showShopFromServer", {
          toggle: JR,
          OJ: GR
        }, !0)
      }
      sendMessage(RR, JR, GR) {
        this.assertLocal(RR, "send a message");
        const yR = "string" === typeof JR ? [{
          str: JR,
          style: GR
        }] : JR;
        ZR.n.JK("chat", {
          content: yR
        }, !0)
      }
      getEntityType(RR) {
        return this.api.getEntityType(RR)
      }
      getEntityName(RR) {
        const JR = AG(RR);
        return JR === eR.Uc ? void 0 : (0, kJ.l)(this.api, JR)
      }
      hasEffect(RR, JR) {
        const GR = AG(RR);
        return GR !== eR.Uc && (0, kJ.h)(this.api, GR, JR)
      }
      getMetaInfo(RR) {
        return this.tables.getMetaInfo(RR)
      }
      getPlayerDbId(RR) {
        return this.assertLocal(RR, "get a DB ID"), this.deps.playerDbId()
      }
      getBlockData(RR, JR, GR) {
        if (!this.chunks.dataCleared(RR, JR, GR)) return (0, kJ.e)(this.api, RR, JR, GR)
      }
      lD(RR, JR, GR, yR) {
        this.setBlockId(RR, JR, GR, this.tables.getItemId(yR))
      }
      setOtherEntitySetting(RR, JR, GR, yR) {
        if (!this.isLocal(RR)) throw new Error("Attempted to set an other-entity setting for a player that is not the local player");
        if (!Object.hasOwn(eR.dd, GR)) throw new Error(`Unknown other-entity setting ${GR}`);
        const tR = eR.dd[GR],
          uR = AG(JR);
        if (uR === eR.Uc || !this.deps.beforeWrite()) return;
        const ZR = (0, IR.i)(yR);
        if (ZR.length > 16384) throw new Error(`The other-entity setting ${GR}'s value is over 16384 bytes`);
        const qR = this.api.memoryView(Uint8Array, this.api.scratch(), ZR.length, "set_other_entity_setting's value");
        qR && (qR.set(ZR), this.api.queries.setOtherEntitySetting(uR, tR, ZR.length))
      }
      getPositionView(RR) {
        return this.live.position(+RR)
      }
      readDrawnPosition(RR, JR) {
        return this.api.readDrawnPosition(AG(RR), JR)
      }
      getDrawnHeading(RR) {
        const JR = this.drawnEntity(RR);
        if (!JR) return null;
        if (1 === eR.pb.headingIsDrawn(JR, 0)) return eR.pb.heading(JR, 0);
        const GR = this.api.apiView;
        return this.isLocal(RR) && 0 === (eR.s.playerFlags(GR, 0) & eR.xd.FreeCam) ? eR.s.heading(GR, 0) : null
      }
      getDrawnEyeHeight(RR) {
        const JR = this.drawnEntity(RR),
          GR = JR ? eR.pb.eyeHeight(JR, 0) : 0;
        return GR > 0 ? GR : null
      }
      drawnEntity(RR) {
        const JR = AG(RR);
        return JR === eR.Uc || this.api.queries.directorEntity(JR) < eR.pb.BYTES ? null : this.api.scratchData(eR.pb.BYTES, "the drawn DirectorEntity")
      }
      isEntityDrawn(RR) {
        const JR = AG(RR);
        return JR !== eR.Uc && 1 === this.api.queries.entityDrawn(JR)
      }
      getPlayerIds() {
        return iG.f.ids()
      }
      getPlayerCosmetics(RR) {
        var JR;
        return null !== (JR = (0, iG.i)(RR)) && void 0 !== JR ? JR : null
      }
      getLocalPlayerMovement() {
        const RR = eR.s.playerFlags(this.api.apiView, 0);
        return 0 === (RR & eR.xd.Replay) && this.api.readDrawnPosition(this.api.localId, KG) ? {
          onGround: 0 !== (RR & eR.xd.OnGround),
          jumpHeld: 0 !== (RR & eR.xd.JumpHeld)
        } : null
      }
      isLocalPlayerInVehicle() {
        return (0, rJ.v)(this.deps.localPhysicsType())
      }
      uyR(RR) {
        return this.isLocal(RR) ? this.items.Qq() : null
      }
      getInventoryItems() {
        return this.items.playerItems()
      }
      getHeldGunInaccuracy() {
        var RR, JR;
        return "Gun" === (null === (RR = this.aliveHeld()) || void 0 === RR || null === (JR = RR.typeObj) || void 0 === JR ? void 0 : JR.type) ? this.items.inaccuracy : null
      }
      aliveHeld() {
        return !1 === this.api.isAlive(this.api.localId) ? null : this.items.Qq()
      }
      isCrosshairShown() {
        var RR, JR;
        const GR = (0, aJ.e)(yR.d.get("crosshairGameView"), yR.d.get("crosshairShownOverride"));
        if (null !== GR) return GR;
        const tR = null === (RR = this.aliveHeld()) || void 0 === RR ? void 0 : RR.typeObj,
          uR = "Gun" === (null === tR || void 0 === tR ? void 0 : tR.type),
          ZR = uR || !0 === (null === tR || void 0 === tR ? void 0 : tR.showsAimingUi),
          qR = 0 === (eR.s.playerFlags(this.api.apiView, 0) & eR.xd.ZoomFirstPerson),
          iR = null !== (JR = this.tables.getClientOption("gunshotOrigin")) && void 0 !== JR ? JR : null;
        return (0, aJ.h)({
          gun: uR,
          aimable: ZR
        }, qR, (0, LJ.e)(), iR)
      }
      setCrosshairShown(RR) {
        yR.d.set({
          crosshairShownOverride: RR
        })
      }
      getInventoryFreeSlotCount(RR) {
        return this.isLocal(RR) ? this.items.freeSlots() : null
      }
      getSelectedInventorySlotI(RR) {
        return this.isLocal(RR) ? this.items.selectedSlot : null
      }
      getItemSlot(RR, JR) {
        return this.isLocal(RR) ? this.items.slot(JR) : null
      }
      swapInventorySlots(RR, JR) {
        return this.items.swap(RR, JR)
      }
      isPlayerCrouching(RR) {
        if (this.isLocal(RR)) return 0 !== (eR.s.playerFlags(this.api.apiView, 0) & eR.xd.Crouching);
        const JR = AG(RR);
        return JR !== eR.Uc && 1 === this.api.queries.entityCrouching(JR)
      }
      getMiningBlock() {
        return this.live.breakingPosition()
      }
      isMining() {
        return 0 !== (eR.s.playerFlags(this.api.apiView, 0) & eR.xd.AttemptingBreak)
      }
      getTargetedBlock() {
        return this.live.IJR()
      }
      getActionRay() {
        const RR = this.api.apiView;
        for (let JR = 0; JR < 3; JR++) rG.origin[JR] = eR.s.GGR(RR, 0, JR), rG.direction[JR] = eR.s.actionDir(RR, 0, JR);
        return rG
      }
      canModifyBlockAt(RR, JR, GR) {
        return 1 === this.api.queries.canModify(RR, JR, GR)
      }
      isSolidToPlayerBlockId(RR) {
        return this.tables.isSolidBlockId(RR) && !this.chunks.isWalkThrough(RR)
      }
      blockNameToBlockId(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.tables.blockNameToBlockId(RR, JR)
      }
      blockIdToBlockName(RR) {
        return this.tables.nameOfId(RR)
      }
      pGR(RR, JR, GR, yR, tR) {
        return 1 === this.api.queries.terrainBlocked(yR, RR, JR, GR, AG(null !== tR && void 0 !== tR ? tR : null))
      }
      getChunkVersion(RR, JR, GR) {
        return this.chunks.version(RR, JR, GR)
      }
      scanBlocks(RR, JR, GR, yR, tR, uR, ZR, qR) {
        return this.chunks.scan(RR, JR, GR, yR, tR, uR, ZR, qR)
      }
      readColumnTops(RR, JR, GR, yR, tR, uR, ZR, qR, iR) {
        this.chunks.columnTops(RR, JR, GR, yR, tR, uR, ZR, qR, iR)
      }
      isBlockInLoadedChunk(RR, JR, GR) {
        return this.chunks.isLoaded(RR, JR, GR)
      }
      getBlockId(RR, JR, GR) {
        return this.chunks.Vq(RR, JR, GR)
      }
      playSound(RR, JR, GR, yR, tR) {
        let uR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (!this.isLocal(RR)) return null;
        const ZR = this.playSoundFrom(JR, GR, tR, uR);
        return 1 === yR ? ZR : ZR.rate(yR)
      }
      preloadSounds(RR) {
        var JR, GR;
        null === (JR = (GR = this.deps).preloadSounds) || void 0 === JR || JR.call(GR, RR)
      }
      playSoundFrom(RR, JR, GR, yR) {
        var tR, uR;
        const ZR = this.deps.playSound;
        if (!ZR) return NJ.b;
        const qR = null === GR || void 0 === GR ? void 0 : GR.TG,
          iR = null !== (tR = null === GR || void 0 === GR ? void 0 : GR.maxHearDist) && void 0 !== tR ? tR : eJ.d,
          fR = null !== (uR = null === GR || void 0 === GR ? void 0 : GR.refDistance) && void 0 !== uR ? uR : eJ.f;
        let VR = null;
        if (Array.isArray(qR)) fG[0] = qR[0], fG[1] = qR[1], fG[2] = qR[2], VR = fG;
        else if (void 0 !== qR && null !== qR) {
          const RR = AG(qR);
          if (!this.api.isLocal(RR)) {
            if (!this.api.readPosition(RR, fG)) return NJ.b;
            VR = fG
          }
        }
        return ZR(RR, JR, VR, VR && this.ear(), iR, fR, yR)
      }
      ear() {
        if (this.api.readPosition(this.api.localId, VG)) VG[1] += IJ;
        else {
          const RR = this.api.apiView;
          if (0 === eR.s.viewProj(RR, 0, 3) && 0 === eR.s.viewProj(RR, 0, 7) && 0 === eR.s.viewProj(RR, 0, 11)) return null;
          for (let JR = 0; JR < 3; JR++) VG[JR] = eR.s.eye(RR, 0, JR)
        }
        return Number.isFinite(VG[0] + VG[1] + VG[2]) ? VG : null
      }
      setBlockId(RR, JR, GR, yR) {
        if (!Number.isInteger(yR) || yR < 0 || yR > 65535) throw new Error(`Invalid block id ${yR}`);
        if (!this.deps.beforeWrite() || !this.chunks.isLoaded(RR, JR, GR)) return;
        const tR = Math.floor(RR),
          uR = Math.floor(JR),
          ZR = Math.floor(GR),
          qR = this.predictedCells(tR, uR, ZR, yR);
        if (1 === this.api.queries.lD(tR, uR, ZR, yR)) {
          for (let RR = 0; RR < qR.length; RR += 5) this.chunks.setOverlay(qR[RR], qR[RR + 1], qR[RR + 2], qR[RR + 3], 1 === qR[RR + 4]);
          this.live.refreshTarget()
        }
      }
      particlesEnabled() {
        return this.deps.particles.enabled()
      }
      createParticles(RR, JR) {
        return this.deps.particles.create(RR, JR)
      }
      playParticleEffect(RR) {
        this.deps.particles.playEffect(RR)
      }
      burstParticlePreset(RR, JR, GR) {
        this.deps.particles.burstPreset(RR, JR, GR)
      }
      createGameMesh(RR, JR, GR) {
        const yR = ++this.meshKeys,
          tR = this.deps.cmd();
        if (!tR) return yR;
        const {
          look: uR,
          colour: ZR
        } = function(RR) {
          switch (RR.kind) {
            case void 0:
            case "flatEmissive":
              return RR.onTop ? {
                look: eR.Yb.FlatOnTop,
                colour: [...RR.rgb, RR.alpha]
              } : RR.opaque ? {
                look: eR.Yb.FlatOpaque,
                colour: [...RR.rgb, 1]
              } : {
                look: eR.Yb.Flat,
                colour: [...RR.rgb, RR.alpha]
              };
            case "chevronPath":
              return {
                look: eR.Yb.Chevrons, colour: [...(0, nJ.c)(RR.colour), RR.alpha]
              };
            case "furnaceFire":
              return {
                look: eR.Yb.FurnaceFire, colour: [1, 1, 1, 1]
              }
          }
        }(JR), qR = Math.floor(RR.positions.length / 3), iR = function(RR, JR) {
          const GR = Math.floor(RR.positions.length / 3),
            yR = RR.indices.length,
            tR = GR * (JR ? 5 : 3),
            uR = new Uint8Array(4 * (tR + yR)),
            ZR = new DataView(uR.buffer);
          for (let fR = 0; fR < 3 * GR; fR++) ZR.setFloat32(4 * fR, RR.positions[fR], !0);
          if (JR) {
            var qR;
            const JR = null !== (qR = RR.uvs) && void 0 !== qR ? qR : [];
            for (let RR = 0; RR < 2 * GR; RR++) {
              var iR;
              ZR.setFloat32(4 * (3 * GR + RR), null !== (iR = JR[RR]) && void 0 !== iR ? iR : 0, !0)
            }
          }
          for (let fR = 0; fR < yR; fR++) ZR.setUint32(4 * (tR + fR), RR.indices[fR], !0);
          return uR
        }(RR, (0, KJ.h)(JR));
        return (0, eR.se)(tR, 0, yR, uR, ZR, GR, qR, RR.indices.length, iR) && this.liveMeshes.add(yR), yR
      }
      setGameMesh(RR, JR) {
        var GR;
        const yR = this.deps.cmd();
        if (!yR) return;
        let tR = 0;
        JR.anchor && (tR |= eR._b.Anchor, eG[0] = JR.anchor[0], eG[1] = JR.anchor[1], eG[2] = JR.anchor[2]), void 0 !== JR.visible && (tR |= eR._b.Visible), JR.uvOffset && (tR |= eR._b.UvOffset, aG[0] = JR.uvOffset[0], aG[1] = JR.uvOffset[1]);
        const uR = null !== (GR = JR.visibility) && void 0 !== GR ? GR : 1;
        void 0 !== JR.visibility && (tR |= eR._b.Visibility), JR.scale && (tR |= eR._b.Scale, LG[0] = JR.scale[0], LG[1] = JR.scale[1], LG[2] = JR.scale[2]), 0 !== tR && (0, eR.xe)(yR, 0, RR, tR, JR.visible ? 1 : 0, eG, aG, uR, LG)
      }
      disposeGameMesh(RR) {
        const JR = this.deps.cmd();
        JR && !(0, eR.te)(JR, 0, RR) || this.liveMeshes.delete(RR)
      }
      hasPackModel(RR) {
        var JR, GR, yR;
        return null !== (JR = null === (GR = (yR = this.deps).hasPackModel) || void 0 === GR ? void 0 : GR.call(yR, RR)) && void 0 !== JR && JR
      }
      disposeGameOutput() {
        const RR = RR => {
          try {
            RR()
          } catch (JR) {
            console.error("Error freeing client game output", JR)
          }
        };
        for (const JR of [...this.liveMeshes]) RR((() => {
          this.disposeGameMesh(JR)
        }));
        for (const JR of [...this.livePools]) RR((() => {
          JR.dispose()
        }));
        RR((() => {
          this.mobModels.disposeAll()
        })), RR((() => {
          this.setGroundArrowStyle(null)
        })), RR((() => {
          this.setRouteChevrons(null), this.routeOffset = 0, this.routeLook = ""
        })), RR((() => {
          this.setCrosshairShown(null)
        })), RR((() => {
          this.cameraTurn.dispose()
        })), RR((() => {
          this.farSet && (this.farSet = !1, this.setCameraFar(null))
        }))
      }
      createInstancePool(RR, JR) {
        const GR = this.tables.idOf(RR.item);
        if (void 0 === GR) return null;
        const yR = new FJ(++this.poolKeys, {
          item: GR,
          scale: RR.scale,
          yaw: RR.yaw
        }, JR, this.poolHost);
        return this.livePools.add(yR), yR
      }
      createMobModel(RR, JR) {
        return this.mobModels.create(RR, JR)
      }
      createCosmeticModel(RR, JR) {
        return this.mobModels.createCosmetic(RR, JR)
      }
      setRouteChevrons(RR) {
        if (0 !== this.routeMesh && (this.disposeGameMesh(this.routeMesh), this.routeMesh = 0), !RR || 0 === RR.cells.length) return;
        const JR = `${RR.colour} ${RR.alpha}`;
        JR !== this.routeLook && (this.routeLook = JR, this.routeOffset = 0), this.routeMesh = this.createGameMesh(function(RR) {
          const [JR, GR, yR] = RR[0].pos, tR = [], uR = [], ZR = [];
          return RR.forEach(((RR, qR) => {
            let {
              pos: iR,
              way: [fR, VR]
            } = RR;
            const KR = iR[0] - JR + .5,
              wR = iR[1] - GR + .04,
              rR = iR[2] - yR + .5,
              [eR, aR] = [.35 * -VR, .35 * fR],
              [LR, nR] = [qR * nG, (qR + 1) * nG],
              UR = tR.length / 3;
            tR.push(KR - .5 * fR + eR, wR, rR - .5 * VR + aR), tR.push(KR - .5 * fR - eR, wR, rR - .5 * VR - aR), tR.push(KR + .5 * fR + eR, wR, rR + .5 * VR + aR), tR.push(KR + .5 * fR - eR, wR, rR + .5 * VR - aR), uR.push(0, LR, 1, LR, 0, nR, 1, nR), ZR.push(UR, UR + 1, UR + 2, UR + 1, UR + 3, UR + 2)
          })), {
            positions: tR,
            uvs: uR,
            indices: ZR
          }
        }(RR.cells), {
          kind: "chevronPath",
          colour: RR.colour,
          alpha: RR.alpha
        }, RR.cells[0].pos), this.setRouteSlide()
      }
      slideRoute(RR) {
        0 !== this.routeMesh && (this.routeOffset = (this.routeOffset + Math.min(RR, 250) / 1e3 * 1.2 * nG) % 1, this.setRouteSlide())
      }
      setRouteSlide() {
        this.routeSlide.uvOffset[1] = -this.routeOffset, this.setGameMesh(this.routeMesh, this.routeSlide)
      }
      setGroundArrowStyle(RR) {
        this.pendingStyle = RR, this.flushOwed()
      }
      flushOwed() {
        this.mobModels.flush();
        const RR = this.owedFrees;
        if (0 === RR.length && void 0 === this.pendingStyle && void 0 === this.pendingFar) return;
        const JR = this.deps.cmd();
        if (!JR) return RR.length = 0, void(this.pendingFar = void 0);
        let GR = 0;
        for (; GR < RR.length && (0, eR.De)(JR, 0, RR[GR]);) GR++;
        RR.splice(0, GR);
        const yR = this.pendingStyle;
        if (void 0 !== yR) {
          (yR ? (0, eR.If)(JR, 0, yR.width, yR.alpha, 1, yR.endAtSolidFace ? 1 : 0) : (0, eR.If)(JR, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
        }
        const tR = this.pendingFar;
        void 0 !== tR && (0, eR.Cf)(JR, 0, null !== tR && void 0 !== tR ? tR : 0, null === tR ? 1 : 0) && (this.pendingFar = void 0)
      }
      setNametagOffset(RR, JR) {
        const GR = this.deps.cmd(),
          yR = AG(RR);
        GR && yR !== eR.Uc && (0, eR.Qf)(GR, 0, yR, JR)
      }
      setFacingTolerance(RR, JR) {
        const GR = this.deps.cmd(),
          yR = AG(RR);
        GR && yR !== eR.Uc && CG(GR, yR, JR)
      }
      forEachEntity(RR) {
        const {
          api: JR
        } = this;
        for (let GR = 0; GR < JR.idStr.length; GR++) {
          const yR = JR.idStr[GR];
          null === yR || CR(JR.kinds[GR]) || RR(yR)
        }
      }
      getEntityInfo(RR) {
        return this.deps.entityInfo.get(RR)
      }
      isEntityInteractable(RR) {
        const JR = AG(RR);
        return JR !== eR.Uc && 1 === this.api.queries.entityInteractable(JR)
      }
      isLocalPlayer(RR) {
        return this.isLocal(RR)
      }
      getLineOwner(RR) {
        var JR;
        const GR = null === (JR = this.deps.entityInfo.get(RR)) || void 0 === JR ? void 0 : JR.meshOpts;
        if (!GR) return null;
        try {
          const {
            lineToEId: RR
          } = JSON.parse(GR);
          return null !== RR && void 0 !== RR ? RR : null
        } catch {
          return null
        }
      }
      getCameraPosition() {
        const RR = this.api.apiView;
        return wG[0] = eR.s.eye(RR, 0, 0), wG[1] = eR.s.eye(RR, 0, 1), wG[2] = eR.s.eye(RR, 0, 2), wG
      }
      getCameraFar() {
        return eR.s.cameraFar(this.api.apiView, 0)
      }
      setCameraFar(RR) {
        null !== RR && (this.farSet = !0), this.pendingFar = RR, this.flushOwed()
      }
      turnCamera(RR, JR) {
        this.cameraTurn.turn(RR, JR)
      }
      clearPickupDelay(RR) {
        const JR = this.deps.cmd(),
          GR = AG(RR);
        JR && GR !== eR.Uc && (0, eR.ge)(JR, 0, GR)
      }
      sendChat(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const GR = this.deps.sendCmd();
        return null !== GR && uG(GR, 0, qG.d.Chat, (0, IR.i)((0, qG.m)({
          LZ: RR,
          nZ: JR
        })))
      }
      sendCommand(RR) {
        RR.length <= 119 && this.sendChat(`/${RR}`)
      }
      predictedCells(RR, JR, GR, yR) {
        const tR = this.chunks,
          uR = [],
          ZR = (RR, JR, GR, yR, tR) => {
            uR.push(RR, JR, GR, yR, this.tables.blockRootId(tR) === this.tables.blockRootId(yR) ? 0 : 1)
          },
          qR = tR.Vq(RR, JR, GR),
          iR = WG(qR);
        if (iR) {
          const [yR, uR, fR] = [RR - iR.x, JR - iR.y, GR - iR.z], VR = UG[tR.Vq(yR, uR, fR)], KR = null === VR || void 0 === VR ? void 0 : VR.positions.some((RR => RR.id === qR && RR.x === iR.x && RR.y === iR.y && RR.z === iR.z));
          for (const RR of (KR && VR ? VR : iR.main).positions) tR.Vq(yR + RR.x, uR + RR.y, fR + RR.z) === RR.id && ZR(yR + RR.x, uR + RR.y, fR + RR.z, 0, RR.id)
        }
        const fR = WG(yR);
        if (fR)
          for (const KR of fR.main.positions) {
            const [yR, uR, qR] = [RR + KR.x - fR.x, JR + KR.y - fR.y, GR + KR.z - fR.z];
            ZR(yR, uR, qR, KR.id, tR.Vq(yR, uR, qR))
          } else ZR(RR, JR, GR, yR, qR);
        const VR = this.tables;
        if ((0 !== VR.attachedTopOf(qR) || 0 !== VR.attachedTopOf(yR)) && tR.isLoaded(RR, JR + 1, GR)) {
          let iR = tR.Vq(RR, JR + 1, GR);
          for (let yR = 0; yR < uR.length; yR += 5) uR[yR] === RR && uR[yR + 1] === JR + 1 && uR[yR + 2] === GR && (iR = uR[yR + 3]);
          const fR = this.attachedTopWrite(qR, yR, iR);
          void 0 !== fR && ZR(RR, JR + 1, GR, fR, iR)
        }
        return uR
      }
      attachedTopWrite(RR, JR, GR) {
        const yR = this.tables,
          tR = yR.attachedTopOf(RR),
          uR = yR.attachedTopOf(JR),
          ZR = 0 !== tR && 0 !== GR && yR.blockRootId(GR) === yR.blockRootId(tR);
        return 0 !== tR && 0 !== uR && yR.blockRootId(RR) === yR.blockRootId(JR) ? ZR && GR !== uR ? uR : void 0 : 0 === uR || !ZR && 0 !== GR ? ZR ? 0 : void 0 : uR
      }
    }
    const MG = eR.gc + eR.jc * eR.rc.BYTES,
      BG = 2147483647,
      lG = new TextDecoder,
      pG = new TextEncoder,
      gG = Object.freeze({
        Uq: 0,
        RK: null,
        amountAddedToSlot: 0
      }),
      bG = new Proxy({}, {
        get: () => () => eR.cd
      });

    function vG(RR) {
      return Number.isInteger(RR) && RR >= 0 && RR <= 65535
    }

    function OG(RR) {
      return Number.isInteger(RR) && RR >= 0 && RR <= 4294967295
    }
    class xG {
      constructor(RR) {
        this.deps = RR, this.Ft = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(eR.jc), this.ids = new Uint16Array(eR.jc), this.amounts = new Uint16Array(eR.jc), this.attrRead = new Float64Array(eR.jc).fill(-1), this.stale = new Uint16Array(eR.jc), this.staleVersion = new Uint32Array(eR.jc), this.instances = new Uint32Array(eR.jc), this.viewPtr = 0, this.viewVersion = -1, this.len = 0, this.selected = 0, this.slotIconId = 0, this.stopped = !1, this.listeners = new Set
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
      slot(RR) {
        var JR;
        return Number.isInteger(RR) && RR >= 0 && RR < this.len && 0 !== this.ids[RR] && null !== (JR = this.facades[RR]) && void 0 !== JR ? JR : null
      }
      Qq() {
        return this.slot(this.selected)
      }
      playerItems() {
        const RR = [];
        for (let JR = 0; JR < Math.min(eR.jd, this.len); JR++) RR.push(this.slot(JR));
        return RR
      }
      freeSlots() {
        let RR = 0;
        for (let JR = 0; JR < Math.min(eR.jd - eR.h, this.len); JR++) 0 === this.ids[JR] && RR++;
        return RR
      }
      amountOf(RR) {
        let JR = 0;
        for (let yR = 0; yR < Math.min(eR.jd, this.len); yR++) {
          const tR = this.slot(yR);
          var GR;
          if ((null === tR || void 0 === tR ? void 0 : tR.name) === RR) JR += null !== (GR = tR.amount) && void 0 !== GR ? GR : 1
        }
        return JR
      }
      instance(RR) {
        var JR;
        return null !== (JR = this.instances[RR]) && void 0 !== JR ? JR : 0
      }
      watch(RR) {
        return this.listeners.add(RR), () => {
          this.listeners.delete(RR)
        }
      }
      touch() {
        this.version++
      }
      flush(RR) {
        if (this.version !== this.notified || this.iconChanged) {
          this.notified = this.version, this.iconChanged = !1;
          for (const GR of [...this.listeners]) try {
            GR()
          } catch (JR) {
            RR(JR)
          }
        }
      }
      chestOpened(RR, JR, GR) {
        this.Ft[0] = RR, this.Ft[1] = JR, this.Ft[2] = GR, this.version++
      }
      refresh() {
        const RR = this.deps.api.apiView,
          JR = eR.s.inventoryViewPtr(RR, 0),
          GR = eR.s.inventoryVersion(RR, 0),
          yR = eR.s.selectedSlot(RR, 0);
        yR !== this.selected && (this.selected = yR, this.version++);
        const tR = eR.s.slotIcon(RR, 0);
        if (tR !== this.slotIconId && (this.slotIconId = tR, this.iconChanged = !0), JR === this.viewPtr && GR === this.viewVersion) return;
        this.viewPtr = JR, this.viewVersion = GR;
        const uR = this.deps.api.memoryData(JR, MG, 4, "the inventory view"),
          ZR = uR ? Math.min(uR.getUint32(0, !0), eR.jc) : 0;
        ZR !== this.len && (this.len = ZR, this.version++);
        let qR = 0;
        for (let iR = 0; iR < eR.jc; iR++) {
          const RR = eR.gc + iR * eR.rc.BYTES,
            JR = null !== uR && iR < ZR ? eR.rc.item(uR, RR) : 0;
          if (0 === JR || null === uR) {
            0 !== this.ids[iR] && (this.ids[iR] = 0, this.attrRead[iR] = -1, this.instances[iR]++, this.version++);
            continue
          }
          const GR = eR.rc.amount(uR, RR),
            yR = eR.rc.attrVersion(uR, RR);
          JR === this.ids[iR] && GR === this.amounts[iR] || this.fill(iR, JR, GR), yR !== this.attrRead[iR] && (this.stale[qR] = iR, this.staleVersion[qR] = yR, qR++)
        }
        qR > 0 && this.fetchAttributes(qR)
      }
      fill(RR, JR, GR) {
        const {
          tables: yR
        } = this.deps, tR = JR !== this.ids[RR];
        let uR = this.facades[RR];
        uR || (uR = {
          name: "",
          amount: null,
          attributes: {
            customAttributes: {}
          },
          typeObj: null
        }, this.facades[RR] = uR), tR && (uR.name = yR.nameOfId(JR), uR.typeObj = yR.itemType(JR), uR.attributes = {
          customAttributes: {}
        }, this.attrRead[RR] = -1, this.instances[RR]++), uR.amount = 0 === GR ? null : GR, this.ids[RR] = JR, this.amounts[RR] = GR, this.version++
      }
      fetchAttributes(RR) {
        const {
          api: JR,
          onError: GR
        } = this.deps, yR = JR.memoryView(Uint16Array, JR.scratch(), RR, "item_attributes_batch's slots");
        if (!yR) return void this.markRead(RR);
        yR.set(this.stale.subarray(0, RR));
        const tR = JR.queries.itemAttributesBatch(RR),
          uR = 4294967295 === tR ? null : JR.memoryData(JR.scratch(), tR, 4, "item_attributes_batch's answer");
        if (!uR) return void this.markRead(RR);
        const ZR = new Uint8Array(uR.buffer, uR.byteOffset, tR);
        for (let iR = 0; iR + 8 <= tR;) {
          const RR = uR.getUint16(iR, !0),
            JR = uR.getUint32(iR + 4, !0),
            yR = ZR.subarray(iR + 8, iR + 8 + JR);
          iR += 8 + (0, wR.ve)(JR);
          const tR = this.facades[RR];
          if (tR && 0 !== this.ids[RR] && 0 !== JR) {
            try {
              tR.attributes = JSON.parse(lG.decode(yR))
            } catch (qR) {
              GR(qR)
            }
            this.version++
          }
        }
        this.markRead(RR)
      }
      markRead(RR) {
        for (let JR = 0; JR < RR; JR++) this.attrRead[this.stale[JR]] = this.staleVersion[JR]
      }
      swap(RR, JR) {
        return vG(RR) && vG(JR) && this.settle(this.queries().invSwap(RR, JR))
      }
      move(RR, JR, GR) {
        return vG(RR) && vG(JR) && OG(GR) && this.settle(this.queries().invMove(RR, JR, GR))
      }
      quickMove(RR, JR, GR, yR) {
        var tR, uR;
        if (!vG(RR) || !vG(JR) || !vG(GR) || null !== yR && !OG(yR)) return null;
        const ZR = this.queries().invQuickMove(RR, JR, GR, null === yR ? -1 : Math.min(yR, BG)),
          qR = ZR === eR.cd ? eR.Gb : null !== (tR = null === (uR = this.extras()) || void 0 === uR ? void 0 : uR[1]) && void 0 !== tR ? tR : eR.Gb;
        return this.settle(ZR), qR === eR.Gb ? null : qR
      }
      remove(RR, JR, GR) {
        return vG(RR) && OG(JR) && this.settle(this.queries().invRemove(RR, JR, GR ? 1 : 0))
      }
      selectSlot(RR) {
        return vG(RR) && this.settle(this.queries().selectSlot(RR))
      }
      closeChest() {
        return this.settle(this.queries().closeChest())
      }
      enchant(RR, JR, GR) {
        if (!vG(RR) || !Number.isInteger(JR)) return !1;
        const [yR, tR, uR] = GR;
        return this.settle(this.queries().invEnchant(RR, JR, Math.floor(yR), Math.floor(tR), Math.floor(uR)))
      }
      craft(RR, JR, GR) {
        let yR;
        try {
          yR = this.deps.tables.getItemId(RR)
        } catch {
          return gG
        }
        if (!vG(JR) || null !== GR && (Number.isNaN(GR) || GR < 0)) return gG;
        const tR = null === GR || GR > BG ? -1 : Math.floor(GR),
          uR = this.queries().craft(yR, JR, tR);
        let ZR = gG;
        const qR = uR === eR.cd ? null : this.extras();
        if (qR) {
          const [RR, JR, GR] = qR;
          ZR = {
            Uq: RR,
            RK: JR === eR.Gb ? null : JR,
            amountAddedToSlot: GR
          }
        }
        return this.settle(uR), ZR
      }
      salvage(RR, JR, GR) {
        let yR;
        try {
          yR = this.deps.tables.getItemId(JR)
        } catch {
          return !1
        }
        return vG(RR) && Number.isInteger(GR) && this.settle(this.queries().salvage(RR, yR, Math.max(Math.min(GR, BG), -BG)))
      }
      craftingView(RR, JR, GR) {
        var yR;
        if (this.stopped) return null;
        const {
          api: tR,
          onError: uR
        } = this.deps, ZR = RR ? pG.encode(RR) : null;
        if (null !== ZR) {
          if (ZR.length > 1024) return uR(new Error(`The crafting station ${RR}'s name is over 1024 bytes`)), null;
          const JR = tR.memoryView(Uint8Array, tR.scratch(), ZR.length, "crafting_view's station");
          if (!JR) return null;
          JR.set(ZR)
        }
        const qR = vG(JR) && vG(GR),
          iR = tR.queries.craftingView(null !== (yR = null === ZR || void 0 === ZR ? void 0 : ZR.length) && void 0 !== yR ? yR : 0, qR ? JR : 0, qR ? GR : 0);
        return iR < eR.kb.BYTES ? (tR.reportCorruption(`crafting_view's answer of ${iR} bytes`), null) : tR.memoryData(tR.scratch(), iR, 1, "crafting_view's answer")
      }
      queries() {
        var RR, JR;
        return !1 === (null === (RR = (JR = this.deps).beforeOp) || void 0 === RR ? void 0 : RR.call(JR)) ? (this.stopped = !0, bG) : this.deps.api.queries
      }
      extras() {
        const {
          api: RR
        } = this.deps;
        return RR.memoryView(Uint32Array, RR.scratch(), 3, "a sync query's extra words")
      }
      settle(RR) {
        if (RR === eR.bd)(0, tG.b)();
        else if (RR !== eR.cd) {
          const JR = this.deps.cmd();
          JR && function(RR, JR, GR) {
            return (0, tG.b)(), (0, eR.ag)(RR, JR, GR)
          }(JR, 0, RR) || this.deps.onError(new Error(`Sync op ${RR}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
        }
        return this.stopped || this.refresh(), RR !== eR.cd
      }
    }
    const NG = 1 / .6,
      DG = [0, 1, 0],
      HG = [0, 0, 0],
      oG = new Uint8Array(0),
      cG = 1.2 * UJ.g.Vn,
      PG = new TextEncoder,
      IG = [0, 0, 0],
      mG = [0, 0, 0],
      zG = new Map;

    function SG(RR) {
      let JR = zG.get(RR);
      return JR || (zG.size >= 64 && zG.clear(), JR = PG.encode(`{"emitRate":${RR}}`), zG.set(RR, JR)), JR
    }

    function jG(RR) {
      return Number.isFinite(RR) && RR > 0 ? RR : 0
    }

    function dG(RR, JR) {
      for (let GR = 0; GR < 3; GR++) {
        const yR = Math.abs(JR[GR]);
        IG[GR] = RR[GR] - yR, mG[GR] = 2 * yR
      }
      return Number.isFinite(IG[0] + IG[1] + IG[2] + mG[0] + mG[1] + mG[2])
    }

    function EG(RR, JR) {
      return "pos1" === RR || "pos2" === RR ? void 0 : JR
    }

    function YG(RR, JR, GR) {
      return RR.length > eR.td.MaxOpts ? (GR(new Error(`${JR}'s particle opts are over ${eR.td.MaxOpts} bytes of JSON`)), null) : RR
    }
    const kG = {
      moveTo() {},
      setEmitRate() {},
      emit() {},
      emitPoints() {},
      setDirections() {},
      stop() {},
      dispose() {}
    };
    class QG {
      constructor(RR) {
        this.deps = RR, this.session = 0, this.nextKey = 1, this.live = 0, this.started = !1
      }
      enabled() {
        return null !== this.sink()
      }
      sink() {
        return this.deps.isSessionLive() ? this.deps.cmd() : null
      }
      create(RR, JR) {
        var GR;
        const yR = this.sink(),
          tR = null !== (GR = JR.half) && void 0 !== GR ? GR : HG;
        if (!yR || this.live >= eR.td.MaxLiveKeys || this.nextKey > eR.td.MaxKey || !dG(JR.pos, tR)) return kG;
        const uR = this.nextKey,
          ZR = YG(function(RR) {
            var JR, GR, yR;
            const tR = JSON.stringify({
              texture: "string" === typeof RR.texture ? RR.texture : "smokePuff",
              hK: RR.hK,
              minLifeTime: RR.minLifeTime,
              maxLifeTime: RR.maxLifeTime,
              minSize: RR.minSize,
              maxSize: RR.maxSize,
              minEmitPower: RR.minEmitPower,
              maxEmitPower: RR.maxEmitPower,
              emitRate: jG(RR.emitRate),
              gravity: null !== (JR = RR.gravity) && void 0 !== JR ? JR : HG,
              dir1: null !== (GR = RR.dir1) && void 0 !== GR ? GR : DG,
              dir2: null !== (yR = RR.dir2) && void 0 !== yR ? yR : DG,
              colorGradients: RR.colorGradients,
              blendMode: RR.blendMode
            });
            return PG.encode(tR)
          }(RR), "createParticles", this.deps.onError);
        return ZR && (0, eR.Re)(yR, 0, uR, 0, eR.td.PresetNone, 0, IG, mG, ZR) ? (this.nextKey++, this.live++, this.started = !0, new FG(this, this.session, uR, RR, tR)) : kG
      }
      playEffect(RR) {
        const JR = this.sink(),
          {
            pos1: GR,
            pos2: yR
          } = RR;
        if (!JR || !GR || !yR) return;
        for (let uR = 0; uR < 3; uR++) IG[uR] = Math.min(GR[uR], yR[uR]), mG[uR] = Math.abs(yR[uR] - GR[uR]);
        if (!Number.isFinite(IG[0] + IG[1] + IG[2] + mG[0] + mG[1] + mG[2])) return;
        const tR = YG(PG.encode(JSON.stringify(RR, EG)), "playParticleEffect", this.deps.onError);
        tR && (0, eR.Pe)(JR, 0, 0, eR.td.PresetNone, eR.td.HasBox, 0, IG, mG, tR)
      }
      burstPreset(RR, JR, GR) {
        const yR = this.sink(),
          tR = Math.min(Math.floor(GR), eR.td.MaxBurst);
        if (!yR || !Object.hasOwn(eR.$b, RR) || !(tR > 0)) return;
        const uR = cG;
        for (let ZR = 0; ZR < 3; ZR++) IG[ZR] = JR[ZR] - uR / 2, mG[ZR] = uR;
        Number.isFinite(IG[0] + IG[1] + IG[2]) && (0, eR.Pe)(yR, 0, 0, eR.$b[RR], eR.td.HasBox, tR, IG, mG, oG)
      }
      sessionEnded() {
        this.session++;
        const RR = this.started ? this.deps.cmd() : null;
        return this.started = !1, this.nextKey = 1, this.live = 0, !RR || (0, eR.Ve)(RR, 0)
      }
      sinkFor(RR) {
        return RR === this.session ? this.deps.cmd() : null
      }
      stop(RR, JR) {
        const GR = this.sinkFor(RR);
        GR && (0, eR.Ye)(GR, 0, JR) && this.live--
      }
    }
    class FG {
      constructor(RR, JR, GR, yR, tR) {
        this.owner = RR, this.session = JR, this.key = GR, this.half = void 0, this.rate = void 0, this.stopDelayMs = void 0, this.emitted = void 0, this.stopped = !1, this.freed = !1, this.half = [Math.abs(tR[0]), Math.abs(tR[1]), Math.abs(tR[2])], this.rate = jG(yR.emitRate), this.emitted = this.rate > 0;
        const uR = yR.maxLifeTime * NG * 1e3 + 250;
        this.stopDelayMs = uR >= 0 ? Math.min(uR, 2147483647) : 250
      }
      sink() {
        return this.stopped ? null : this.owner.sinkFor(this.session)
      }
      moveTo(RR, JR) {
        const GR = this.sink();
        if (GR) {
          if (JR)
            for (let RR = 0; RR < 3; RR++) this.half[RR] = Math.abs(JR[RR]);
          dG(RR, this.half) && (0, eR.af)(GR, 0, this.key, eR.td.HasBox, IG, mG, oG)
        }
      }
      setEmitRate(RR) {
        const JR = this.sink(),
          GR = jG(RR);
        JR && GR !== this.rate && (0, eR.af)(JR, 0, this.key, 0, HG, HG, SG(GR)) && (this.rate = GR, this.emitted ||= GR > 0)
      }
      emit(RR) {
        const JR = this.sink(),
          GR = Math.min(Math.floor(RR), eR.td.MaxBurst);
        JR && GR > 0 && (0, eR.Pe)(JR, 0, this.key, eR.td.PresetNone, 0, GR, HG, HG, oG) && (this.emitted = !0)
      }
      emitPoints(RR, JR, GR) {
        const yR = this.sink(),
          tR = Math.min(Math.floor(GR), eR.td.MaxPoints, Math.floor(JR.length / 4));
        if (!yR || !(tR > 0) || !Number.isFinite(RR[0] + RR[1] + RR[2])) return;
        const uR = new Uint8Array(JR.buffer, JR.byteOffset, tR * eR.td.PointBytes);
        (0, eR.Qe)(yR, 0, this.key, tR, RR, uR) && (this.emitted = !0)
      }
      setDirections(RR, JR) {
        const GR = this.sink();
        if (!GR || !Number.isFinite(RR[0] + RR[1] + RR[2] + JR[0] + JR[1] + JR[2])) return;
        const yR = PG.encode(JSON.stringify({
          dir1: [RR[0], RR[1], RR[2]],
          dir2: [JR[0], JR[1], JR[2]]
        }));
        (0, eR.af)(GR, 0, this.key, 0, HG, HG, yR)
      }
      stop() {
        const RR = this.sink();
        this.stopped = !0, RR && (this.emitted ? (this.rate > 0 && (0, eR.af)(RR, 0, this.key, 0, HG, HG, SG(0)), setTimeout((() => {
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
    const TG = TJ.p,
      sG = new TextDecoder;

    function hG(RR, JR) {
      const {
        serverIds: GR,
        kinds: yR
      } = RR;
      let tR = 0;
      for (let uR = 0; uR < GR.length; uR++) {
        const RR = GR[uR];
        if (RR !== eR.Uc && !CR(yR[uR])) {
          if (tR === JR.length) {
            const RR = new Int32Array(Math.max(64, 2 * tR));
            RR.set(JR), JR = RR
          }
          JR[tR++] = RR
        }
      }
      return {
        ids: JR,
        count: tR
      }
    }

    function Ry(RR, JR) {
      return RR.length >= JR ? RR : new Int32Array(Math.max(JR, 2 * RR.length))
    }

    function Jy(RR, JR, GR, yR) {
      for (let tR = 0; tR < GR; tR += 4096) {
        const uR = Math.min(4096, GR - tR),
          ZR = RR.memoryView(Int32Array, RR.scratch(), uR, "entity_info_batch's ids");
        if (!ZR) return !1;
        ZR.set(JR.subarray(tR, tR + uR));
        const qR = RR.queries.entityInfoBatch(uR),
          iR = 4294967295 === qR ? null : RR.memoryData(RR.scratch(), qR, 4, "entity_info_batch's records");
        if (!iR) return !1;
        for (let RR = 0; RR + eR.Nb.BYTES <= qR;) {
          const JR = eR.Nb.len(iR, RR);
          yR(eR.Nb.serverId(iR, RR), Gy(iR, RR, JR)), RR += eR.Nb.BYTES + (0, wR.ve)(JR)
        }
      }
      return !0
    }

    function Gy(RR, JR, GR) {
      var yR, tR, uR;
      const ZR = eR.Nb.kind(RR, JR),
        qR = 0 === ZR ? null : XR(ZR);
      if (null === qR) return null;
      const iR = eR.Nb.variation(RR, JR),
        fR = eR.Nb.pose(RR, JR),
        VR = eR.Nb.meta(RR, JR),
        KR = eR.Nb.mesh(RR, JR),
        wR = 0 !== (eR.Nb.flags(RR, JR) & eR.Kb.HasOpts),
        rR = TG[qR];
      return Object.freeze({
        type: qR,
        variation: iR === eR._c ? void 0 : null !== (yR = null !== (tR = null === rR || void 0 === rR ? void 0 : rR[iR]) && void 0 !== tR ? tR : null === rR || void 0 === rR ? void 0 : rR[0]) && void 0 !== yR ? yR : "default",
        pose: fR === eR.dc ? void 0 : null !== (uR = eR.Cb[fR]) && void 0 !== uR ? uR : eR.Cb[0],
        metaInfo: VR === eR.dc ? void 0 : eR.Hc[VR],
        meshKind: KR === eR.dc ? void 0 : eR.Fc[KR],
        meshOpts: wR ? sG.decode(new Uint8Array(RR.buffer, RR.byteOffset + JR + eR.Nb.BYTES, GR)) : void 0
      })
    }
    const yy = 1,
      ty = 2;
    class uy {
      constructor(RR) {
        this.deps = RR, this.wanted = 0, this.Qq = !1, this.refused = !1
      }
      get on() {
        return this.Qq
      }
      want(RR, JR) {
        this.wanted = JR ? this.wanted | RR : this.wanted & ~RR;
        const GR = 0 !== this.wanted;
        if (GR === this.Qq) return;
        const yR = this.deps.cmd();
        null !== yR ? (0, eR.fg)(yR, 0, GR ? 1 : 0) ? (this.Qq = GR, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.Qq = !1
      }
    }
    class Zy {
      constructor(RR) {
        this.deps = RR, this.entries = new Map, this.complete = !1, this.refill = !1, this.midFrame = !1, this.pending = new Int32Array(64), this.pendingCount = 0, this.ids = new Int32Array(64)
      }
      get(RR) {
        var JR;
        return this.complete || this.fill(), null !== (JR = this.entries.get("string" === typeof RR ? RR : String(RR))) && void 0 !== JR ? JR : null
      }
      inCoreCall() {
        this.midFrame = !0
      }
      stale(RR) {
        if (this.complete) {
          if (this.pendingCount === this.pending.length) {
            const RR = new Int32Array(2 * this.pending.length);
            RR.set(this.pending), this.pending = RR
          }
          this.pending[this.pendingCount++] = RR
        }
      }
      removed(RR) {
        this.entries.size > 0 && this.entries.delete(String(RR))
      }
      refresh() {
        const RR = this.pendingCount;
        if (this.pendingCount = 0, this.midFrame = !1, !this.deps.watch.on || this.refill) return this.complete = !1, void(this.refill = !1);
        if (RR > 0 && this.complete) {
          const {
            api: JR
          } = this.deps;
          let GR = 0;
          const yR = this.ids = Ry(this.ids, RR);
          for (let tR = 0; tR < RR; tR++) {
            const RR = this.pending[tR],
              uR = JR.indexById.get(RR);
            void 0 === uR || CR(JR.kinds[uR]) ? this.entries.delete(String(RR)) : yR[GR++] = RR
          }
          GR > 0 && !this.batch(yR, GR) && (this.complete = !1)
        }
      }
      sessionEnded() {
        this.entries.clear(), this.complete = !1, this.refill = !1, this.midFrame = !1, this.pendingCount = 0, this.deps.watch.want(yy, !1)
      }
      fill() {
        const {
          api: RR
        } = this.deps;
        if (this.complete = !0, this.pendingCount = 0, this.entries.clear(), this.deps.isSessionLive()) {
          const {
            watch: RR
          } = this.deps, JR = RR.on;
          RR.want(yy, !0), !JR && RR.on && (this.refill = this.midFrame)
        }
        const {
          ids: JR,
          count: GR
        } = hG(RR, this.ids);
        this.ids = JR, GR > 0 && !this.batch(JR, GR) && (this.refill = !0)
      }
      batch(RR, JR) {
        return Jy(this.deps.api, RR, JR, ((RR, JR) => {
          null === JR ? this.entries.delete(String(RR)) : this.entries.set(String(RR), JR)
        }))
      }
    }
    var qy = GR(5685);

    function iy(RR) {
      if ("message" !== RR.type || RR.LZ !== qy.sc.NewClientOptions || RR.payloadKind !== wR.gc.Msgpack) return null;
      const JR = (0, IR.e)(RR.payload);
      if (null === JR || "object" !== typeof JR || Array.isArray(JR)) throw new Error("NewClientOptions whose body isn't an object of options");
      return JR
    }
    var fy = GR(1336),
      Vy = GR(37829);

    function Ky(RR, JR, GR, yR, tR, uR, qR) {
      var iR, fR, VR;
      switch (RR) {
        case eR.Wd.ToggleMenu: {
          const RR = eR.I[JR];
          ZR.n.JK("toggleMenu", void 0 === RR ? "inventory" : `inventory|${RR}`);
          break
        }
        case eR.Wd.EditBoard:
          ZR.n.JK("EditBoard", {
            pos: 0 === JR ? null : GR
          });
          break;
        case eR.Wd.EditCodeBlock:
        case eR.Wd.ViewCodeBlock:
          ZR.n.JK("EditCodeBlock", {
            pos: GR,
            canChangePos: RR === eR.Wd.EditCodeBlock
          });
          break;
        case eR.Wd.EditCustomLobbyBlock:
          ZR.n.JK("EditCustomLobbyBlock", {
            pos: GR
          });
          break;
        case eR.Wd.OpenIronChest:
          ZR.n.JK("OpenIronChest", {
            pos: GR
          });
          break;
        case eR.Wd.EditNameTag:
          ZR.n.JK("EditNameTag", null !== (iR = null === (fR = tR.Qq()) || void 0 === fR || null === (VR = fR.attributes.customAttributes) || void 0 === VR ? void 0 : VR.text) && void 0 !== iR ? iR : "");
          break;
        case eR.Wd.EditBook: {
          var KR, wR, aR;
          const RR = null === (KR = tR.Qq()) || void 0 === KR ? void 0 : KR.attributes;
          ZR.n.JK("EditBook", {
            pages: (0, fy.S)(null === RR || void 0 === RR || null === (wR = RR.customAttributes) || void 0 === wR ? void 0 : wR.pages),
            title: null !== (aR = null === RR || void 0 === RR ? void 0 : RR.customDisplayName) && void 0 !== aR ? aR : "Title",
            isPublished: !(null === RR || void 0 === RR || !RR.customDescription)
          });
          break
        }
        case eR.Wd.CantChangeBlock:
          ! function(RR, JR) {
            const GR = JR.getClientOption("cantChangeError"),
              yR = JR.getClientOption(RR ? "cantBuildError" : "cantBreakError"),
              tR = RR ? GR : yR;
            (JR.getClientOption("canChange") || tR || "You cannot modify this block" !== GR) && ZR.n.JK("showBottomMessage", {
              message: yR || GR,
              type: "Error"
            })
          }(1 === JR, uR);
          break;
        case eR.Wd.MiddleBarStart:
          ZR.n.JK("middleScreenBarInitiate", {
            duration: yR,
            Au: 1 === GR[0],
            horizBarRemOffset: JR
          });
          break;
        case eR.Wd.MiddleBarStop:
          ZR.n.JK("middleScreenBarRemove");
          break;
        case eR.Wd.Hitmarker:
          ZR.n.JK("localGunHitmarker", {
            xJ: 1 === JR
          });
          break;
        case eR.Wd.ShotsLeft:
          ZR.n.JK("localPlayerNewShotsLeft", yR);
          break;
        case eR.Wd.AimingOverlay:
          ZR.n.JK("aimingOverlay", 3 === (3 & JR) ? "sniper" : "none");
          break;
        case eR.Wd.BottomMessage:
          ZR.n.JK("showBottomMessage", JSON.parse(qR()));
          break;
        case eR.Wd.Crosshair:
          tR.inaccuracy = (0, mR.g)(yR), (0, Vy.b)().crosshairAccuracy(tR.inaccuracy);
          break;
        case eR.Wd.ChargeStage:
          break;
        case eR.Wd.EmoteWheelClose:
          ZR.n.JK("requestEmoteWheelClose");
          break;
        case eR.Wd.BlockMined:
          ZR.n.JK("localBlockMined");
          break;
        default:
          throw new rR.c(`UiEvent of no kind: what ${RR}`)
      }
    }
    var wy = GR(39158),
      ry = GR(35150),
      ey = GR(2170),
      ay = GR(37914),
      Ly = GR(35162),
      ny = GR(5665);
    const Uy = 10,
      Wy = {
        player: [],
        chestOrCreative: [],
        chest: null,
        creative: !1,
        selectedSlot: 0,
        freeSlots: 0
      },
      Ay = {
        items: [],
        ammo: 0,
        selectedSlot: 0
      },
      Cy = {
        gun: !1,
        aimable: !1,
        chargeName: null
      };

    function Xy(RR, JR) {
      let GR, yR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        tR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      const uR = () => (GR = (0, ey.m)(GR, JR()), GR);
      return {
        current: uR,
        watch(JR) {
          const GR = () => {
              JR(uR())
            },
            ZR = [RR.watch(GR)];
          return null !== yR && ZR.push((0, ey.p)((RR => {
            RR.some(yR) && GR()
          }))), null !== tR && ZR.push(tR(GR)), () => {
            for (const RR of ZR) RR()
          }
        }
      }
    }

    function My(RR) {
      return RR && {
        name: RR.name,
        amount: RR.amount,
        attributes: RR.attributes
      }
    }
    const By = new WeakMap;

    function ly(RR) {
      let JR = By.get(RR);
      return void 0 === JR && (JR = (0, Ly.creativeItemIds)().map((JR => ({
        name: RR.nameOfId(JR),
        amount: RR.isStackableId(JR) ? 1 : null,
        attributes: (0, wy.b)("Gun" === (0, Ly.itemTypeOf)(JR) ? {
          type: "Gun",
          clipSize: (0, Ly.clipSizeOf)(JR)
        } : void 0)
      }))), By.set(RR, JR)), JR
    }

    function py(RR, JR, GR, yR) {
      const tR = JR => (RR.flush(yR), JR),
        uR = GR => {
          var yR, tR, uR, ZR, qR, iR, fR;
          const VR = RR.slot(GR);
          if (!VR) return null;
          const {
            rootName: KR,
            metaStr: wR
          } = JR.getMetaInfo(VR.name);
          return {
            name: VR.name,
            amount: VR.amount,
            attributes: VR.attributes,
            instance: RR.instance(GR),
            displayName: null !== (yR = VR.attributes.customDisplayName) && void 0 !== yR ? yR : JR.getDisplayName(KR),
            requiresAmmo: "RequiresAmmo" === wR,
            clipSize: null !== (tR = null !== (uR = null === (ZR = VR.attributes.customAttributes) || void 0 === ZR || null === (qR = ZR.gunStats) || void 0 === qR ? void 0 : qR.clipSize) && void 0 !== uR ? uR : null === (iR = JR.getGunStats(KR)) || void 0 === iR ? void 0 : iR.clipSize) && void 0 !== tR ? tR : null === (fR = VR.typeObj) || void 0 === fR ? void 0 : fR.clipSize
          }
        },
        qR = function(RR, JR) {
          let GR = null,
            yR = {
              focus: null,
              recipes: [],
              detail: null
            },
            tR = -1;
          const uR = new Set;
          return {
            read() {
              var uR, ZR;
              if (null === GR) return null !== yR.focus && (yR = {
                ...yR,
                focus: null
              }), yR;
              if (yR.focus === GR && tR === RR.changes) return yR;
              if (tR = RR.changes, 0 === RR.length) return yR = {
                focus: GR,
                recipes: [],
                detail: null
              }, yR;
              let qR = 0;
              if (null !== GR.recipe) try {
                qR = JR.getItemId(GR.recipe.name)
              } catch {}
              const iR = RR.craftingView(GR.station, qR, null !== (uR = null === (ZR = GR.recipe) || void 0 === ZR ? void 0 : ZR.nq) && void 0 !== uR ? uR : 0);
              return yR = null === iR ? {
                focus: GR,
                recipes: [],
                detail: null
              } : function(RR, JR, GR) {
                let yR = eR.kb.BYTES;
                const tR = [];
                for (let VR = eR.kb.recipes(RR, 0); VR > 0; VR--) {
                  const GR = eR.cb.flags(RR, yR),
                    uR = {
                      name: JR.nameOfId(eR.cb.item(RR, yR)),
                      nq: eR.cb.recipe(RR, yR),
                      requires: [],
                      produces: eR.cb.produces(RR, yR),
                      haveIngredients: 0 !== (GR & eR.$.HaveIngredients),
                      listed: 0 !== (GR & eR.$.Listed)
                    };
                  let ZR = eR.cb.requires(RR, yR);
                  for (yR += eR.cb.BYTES; ZR > 0; ZR--) {
                    const GR = eR.fb.items(RR, yR);
                    uR.requires.push({
                      items: vy(RR, yR + eR.fb.BYTES, GR, JR),
                      amt: eR.fb.amount(RR, yR)
                    }), yR += eR.fb.BYTES + 2 * GR
                  }
                  tR.push(uR)
                }
                const uR = eR.kb.flags(RR, 0);
                if (null === GR.recipe || 0 === (uR & eR.jb.Detail)) return {
                  focus: GR,
                  recipes: tR,
                  detail: null
                };
                const ZR = {},
                  qR = {};
                for (let VR = eR.kb.ingredients(RR, 0); VR > 0; VR--) {
                  const GR = eR.Z.item(RR, yR),
                    tR = eR.Z.from(RR, yR),
                    uR = eR.Z.amount(RR, yR);
                  yR += eR.Z.BYTES;
                  const iR = tR === eR.E ? null : vy(RR, yR, tR, JR);
                  if (null !== iR && (yR += 2 * tR), 0 === GR) continue;
                  const fR = JR.nameOfId(GR);
                  ZR[fR] = uR, null !== iR && (qR[fR] = iR)
                }
                const {
                  name: iR,
                  nq: fR
                } = GR.recipe;
                return {
                  focus: GR,
                  recipes: tR,
                  detail: {
                    name: iR,
                    nq: fR,
                    craftAllTimes: eR.kb.craftAllTimes(RR, 0),
                    roomForOne: 0 !== (uR & eR.jb.RoomForOne),
                    resultStackable: Boolean(JR.getItemStat(iR, "stackable")),
                    amounts: ZR,
                    ingredientsCraftedFrom: qR
                  }
                }
              }(iR, JR, GR), yR
            },
            setFocus(RR) {
              GR = RR;
              for (const JR of [...uR]) JR()
            },
            watchFocus: RR => (uR.add(RR), () => {
              uR.delete(RR)
            })
          }
        }(RR, JR);
      return {
        states: {
          inventory: Xy(RR, (() => {
            const GR = RR.length;
            if (0 === GR) return Wy;
            const yR = [];
            for (let JR = 0; JR < eR.jd; JR++) yR.push(My(RR.slot(JR)));
            const tR = RR.slotIcon,
              uR = yR[RR.selectedSlot];
            0 !== tR && uR && (yR[RR.selectedSlot] = {
              ...uR,
              icon: JR.nameOfId(tR)
            });
            const ZR = !0 === JR.getClientOption("creative");
            let qR = [],
              iR = null;
            if (GR > eR.jd) {
              for (let JR = eR.jd; JR < GR; JR++) qR.push(My(RR.slot(JR)));
              iR = {
                type: null,
                pos: [...RR.Ft],
                numSlots: GR - eR.jd,
                ironChest: null
              }
            } else ZR && (qR = ly(JR));
            return {
              player: yR,
              chestOrCreative: qR,
              chest: iR,
              creative: ZR,
              selectedSlot: RR.selectedSlot,
              freeSlots: RR.freeSlots()
            }
          }), (0, ey.j)("creative")),
          hotbar: Xy(RR, (() => {
            if (0 === RR.length) return Ay;
            const JR = [];
            for (let RR = 0; RR < Uy; RR++) JR.push(uR(RR));
            return {
              items: JR,
              ammo: RR.amountOf("Ammo"),
              selectedSlot: RR.selectedSlot
            }
          }), (0, ey.i)("DisplayName", "GunStats")),
          crafting: Xy(RR, qR.read, null, qR.watchFocus),
          heldItemAim: Xy(RR, (() => {
            var JR;
            if (!GR()) return Cy;
            const yR = null === (JR = RR.Qq()) || void 0 === JR ? void 0 : JR.typeObj,
              tR = "Gun" === (null === yR || void 0 === yR ? void 0 : yR.type);
            return {
              gun: tR,
              aimable: tR || !0 === (null === yR || void 0 === yR ? void 0 : yR.showsAimingUi),
              chargeName: "Chargeable" === (null === yR || void 0 === yR ? void 0 : yR.type) ? yR.name : null
            }
          }), null, (RR => function(RR, JR) {
            let GR = RR();
            return (0, ny.r)((() => {
              const yR = RR();
              yR !== GR && (GR = yR, JR(yR))
            }))
          }(GR, RR)))
        },
        events: {
          hotbarSlotRequested: (0, ey.d)("setSelectedInventorySlotI"),
          hotbarScrolled: (0, ey.d)("ScrollInventorySlot"),
          numberKeyPressed: (0, ey.d)("numkeyPressed"),
          inventoryDropRequested: (0, ey.d)("DropInvenItem"),
          chestToggled: (0, ey.d)("chestToggleFromServer"),
          chestRefreshed: (0, ey.d)("chestRefreshedFromServer", by),
          inventorySynced: (0, ey.d)("syncedInvenFromServer", by),
          enchantingTableOpened: (0, ey.d)("enchantingTable", (RR => {
            let {
              position: GR,
              Vq: yR
            } = RR;
            return {
              position: [...GR],
              blockName: JR.getMetaInfo(yR).rootName
            }
          }))
        },
        commands: {
          selectHotbarSlot(JR) {
            RR.selectSlot(JR), RR.flush(yR)
          },
          removeInventoryItem(JR) {
            let {
              slot: GR,
              amount: yR,
              drop: uR
            } = JR;
            return tR(RR.remove(GR, yR, uR))
          },
          swapInventorySlots(JR) {
            let {
              a: GR,
              b: yR
            } = JR;
            return tR(RR.swap(GR, yR))
          },
          moveInventoryItem(JR) {
            let {
              from: GR,
              to: yR,
              amount: uR
            } = JR;
            return tR(RR.move(GR, yR, uR))
          },
          quickMoveInventoryItem(JR) {
            let {
              slot: GR,
              start: yR,
              end: uR,
              amount: ZR
            } = JR;
            return tR(RR.quickMove(GR, yR, uR, ZR))
          },
          closeChest() {
            RR.closeChest(), RR.flush(yR), ZR.n.JK("chestClosedByPlayer")
          },
          focusCrafting(RR) {
            qR.setFocus(RR)
          },
          craftRecipe(JR) {
            let {
              name: GR,
              nq: yR,
              times: uR
            } = JR;
            return tR(RR.craft(GR, yR, uR))
          },
          salvageItem(JR) {
            let {
              slot: GR,
              name: yR,
              amount: uR
            } = JR;
            return tR(RR.salvage(GR, yR, uR))
          },
          enchantItem(JR) {
            let {
              slot: GR,
              level: yR,
              tablePos: tR
            } = JR;
            RR.enchant(GR, yR, tR)
          }
        },
        queries: {
          enchantingOffer(GR) {
            let {
              slot: yR,
              blockName: tR
            } = GR;
            return function(RR, JR, GR, yR) {
              const tR = RR.slot(GR);
              if (!tR || !JR.getClientOption("canCraft") || !(0, ry.v)(yR) || (0, ry.r)(tR.attributes)) return gy;
              const uR = (0, Ly.enchantmentPerksOf)(JR.getItemId(tR.name));
              if (0 === uR.length) return gy;
              const ZR = [];
              for (let qR = 0; qR < ay.f; qR++) {
                const {
                  commonProb: RR,
                  uncommonProb: JR,
                  rareProb: GR,
                  epicProb: tR,
                  legendaryProb: uR,
                  level: iR
                } = (0, ry.i)(yR, qR);
                ZR.push({
                  level: iR,
                  odds: [RR, JR, GR, tR, uR].map((RR => 100 * RR))
                })
              }
              return {
                perks: [...uR],
                options: ZR
              }
            }(RR, JR, yR, tR)
          }
        }
      }
    }
    const gy = Object.freeze({
      perks: [],
      options: []
    });

    function by() {
      return null
    }

    function vy(RR, JR, GR, yR) {
      const tR = [];
      for (let uR = 0; uR < GR; uR++) {
        const GR = RR.getUint16(JR + 2 * uR, !0);
        0 !== GR && tR.push(yR.nameOfId(GR))
      }
      return tR
    }
    class Oy {
      constructor(RR) {
        this.api = RR, this.positions = new Map, this.targeted = {
          U3: 0,
          position: [0, 0, 0],
          normal: [0, 0, 0],
          UL: [0, 0, 0]
        }, this.hasTarget = !1, this.breaking = [0, 0, 0], this.isBreaking = !1
      }
      position(RR) {
        let JR = this.positions.get(RR);
        return JR || (this.api.checkValid(RR) || this.api.isLocal(RR) ? (JR = [NaN, NaN, NaN], this.api.readPosition(RR, JR), this.positions.set(RR, JR), JR) : null)
      }
      IJR() {
        return this.hasTarget ? this.targeted : null
      }
      breakingPosition() {
        return this.isBreaking ? this.breaking : null
      }
      refresh() {
        for (const [JR, GR] of this.positions) this.api.readPosition(JR, GR) || this.api.checkValid(JR) || this.api.isLocal(JR) || this.positions.delete(JR);
        const RR = this.api.apiView;
        if (this.refreshTarget(), this.isBreaking = 0 !== (eR.s.playerFlags(RR, 0) & eR.xd.Breaking) && eR.s.breakingProgress(RR, 0) >= 0, this.isBreaking)
          for (let JR = 0; JR < 3; JR++) this.breaking[JR] = eR.s.breakingPos(RR, 0, JR)
      }
      refreshTarget() {
        const RR = this.api.apiView,
          JR = eR.s.targetBlockId(RR, 0);
        if (this.hasTarget = JR !== eR.Yc, this.hasTarget) {
          const GR = this.targeted;
          GR.U3 = JR;
          for (let JR = 0; JR < 3; JR++) GR.position[JR] = eR.s.targetBlock(RR, 0, JR), GR.normal[JR] = eR.s.targetNormal(RR, 0, JR), GR.UL[JR] = eR.s.targetAdjacent(RR, 0, JR)
        }
      }
      despawned(RR) {
        const JR = this.positions.get(RR);
        JR && !this.api.isLocal(RR) && (JR.fill(NaN), this.positions.delete(RR))
      }
    }
    var xy = GR(42157),
      Ny = GR(42137),
      Dy = GR(37433),
      Hy = GR(37537);
    const oy = 1,
      cy = 2;
    class Py {
      constructor() {
        this.game = new Hy.g, this.client = new Hy.g, this.Qq = 0, this.movesFly = null
      }
      setGame(RR) {
        if (null === RR || "object" !== typeof RR) return !1;
        const {
          key: JR,
          value: GR
        } = RR;
        return "string" === typeof JR && (this.game.setBooleanType(JR, Boolean(GR)), !0)
      }
      setClient(RR, JR) {
        this.client.setBooleanType(RR, JR)
      }
      clearGame() {
        this.game = new Hy.g, this.movesFly = null
      }
      setMovesFly(RR) {
        this.movesFly = RR
      }
      perms() {
        return (this.game._getTotalBooleanVal() ? oy : 0) | (this.client._getTotalBooleanVal() ? cy : 0)
      }
      write(RR) {
        const JR = this.perms(),
          {
            movesFly: GR
          } = this;
        if (JR === this.Qq && null === GR) return !0;
        let yR = eR.Rb.Keep;
        return null !== GR && (yR = GR ? eR.Rb.On : eR.Rb.Off), !(!RR || !(0, eR.ne)(RR, 0, yR, JR, GR ? 1 : 0)) && (this.Qq = JR, this.movesFly = null, !0)
      }
    }
    class Iy {
      constructor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 35;
        this.api = RR, this.screenBandPct = void 0, this.clipX = 0, this.clipY = 0, this.clipW = 0, this.eye = [0, 0, 0], this.forward = [0, 0, 1], this.along = [0, 0, 0], this.screenBandPct = {
          x: qR.e,
          get y() {
            return JR()
          }
        }
      }
      get hasView() {
        const RR = this.api.apiView,
          JR = eR.s.viewProj;
        return 0 !== JR(RR, 0, 3) || 0 !== JR(RR, 0, 7) || 0 !== JR(RR, 0, 11) || 0 !== JR(RR, 0, 15)
      }
      get cameraPosition() {
        const RR = this.api.apiView,
          {
            eye: JR
          } = this;
        for (let GR = 0; GR < 3; GR++) JR[GR] = eR.s.eye(RR, 0, GR);
        return JR
      }
      get cameraDirection() {
        const RR = this.api.apiView,
          JR = eR.s.viewProj,
          GR = JR(RR, 0, 3),
          yR = JR(RR, 0, 7),
          tR = JR(RR, 0, 11),
          uR = Math.hypot(GR, yR, tR),
          {
            forward: ZR
          } = this;
        return uR > 0 && (ZR[0] = GR / uR, ZR[1] = yR / uR, ZR[2] = tR / uR), ZR
      }
      get cameraHeading() {
        return eR.s.heading(this.api.apiView, 0)
      }
      get cameraPitch() {
        return eR.s.pitch(this.api.apiView, 0)
      }
      get tanHalfFovX() {
        return eR.s.tanHalfFovX(this.api.apiView, 0)
      }
      get tanHalfFovY() {
        return eR.s.tanHalfFovY(this.api.apiView, 0)
      }
      projectWorldPosToScreenPos(RR) {
        this.clip(RR);
        const {
          clipX: JR,
          clipY: GR,
          clipW: yR
        } = this;
        if (yR > 0) {
          const RR = JR / yR * 50,
            tR = -GR / yR * 50;
          return Math.abs(RR) <= this.screenBandPct.x && Math.abs(tR) <= this.screenBandPct.y ? {
            x: 50 + RR,
            y: 50 + tR
          } : this.clampToBand(RR, tR)
        }
        const tR = this.cameraPosition,
          uR = Math.hypot(RR[0] - tR[0], RR[1] - tR[1], RR[2] - tR[2]),
          ZR = this.api.apiView,
          qR = eR.s.viewProj,
          iR = uR > 0 ? JR / uR : 0,
          fR = uR > 0 ? -GR / uR : 0,
          VR = Math.hypot(qR(ZR, 0, 1), qR(ZR, 0, 5), qR(ZR, 0, 9)),
          KR = iR / Math.hypot(qR(ZR, 0, 0), qR(ZR, 0, 4), qR(ZR, 0, 8)),
          wR = fR / VR,
          rR = !(Math.abs(KR) >= .001 || Math.abs(wR) >= .001);
        return this.clampToBand(iR, rR ? -(VR || 1) : fR)
      }
      projectDirectionToScreenPos(RR) {
        if (!this.hasView) return;
        const JR = this.cameraPosition,
          GR = this.along;
        for (let yR = 0; yR < 3; yR++) GR[yR] = JR[yR] + 10 * RR[yR];
        return this.projectWorldPosToScreenPos(GR)
      }
      projectWorldPosToViewport(RR) {
        this.clip(RR);
        const {
          clipX: JR,
          clipY: GR,
          clipW: yR
        } = this;
        return yR > 0 ? {
          x: 50 + JR / yR * 50,
          y: 50 - GR / yR * 50
        } : null
      }
      clip(RR) {
        const JR = this.api.apiView,
          GR = RR[0] - eR.s.origin(JR, 0, 0),
          yR = RR[1] - eR.s.origin(JR, 0, 1),
          tR = RR[2] - eR.s.origin(JR, 0, 2),
          uR = eR.s.viewProj;
        this.clipX = uR(JR, 0, 0) * GR + uR(JR, 0, 4) * yR + uR(JR, 0, 8) * tR + uR(JR, 0, 12), this.clipY = uR(JR, 0, 1) * GR + uR(JR, 0, 5) * yR + uR(JR, 0, 9) * tR + uR(JR, 0, 13), this.clipW = uR(JR, 0, 3) * GR + uR(JR, 0, 7) * yR + uR(JR, 0, 11) * tR + uR(JR, 0, 15)
      }
      clampToBand(RR, JR) {
        return (0, qR.f)(RR, JR, this.screenBandPct.x, this.screenBandPct.y)
      }
    }
    var my = GR(5697);
    const zy = new TextEncoder,
      Sy = new Uint8Array(eR.M * eR.K);
    class jy {
      constructor() {
        this.buttons = [], this.Qq = !0
      }
      set(RR) {
        this.buttons = RR, this.Qq = !1
      }
      attached() {
        this.Qq = 0 === this.buttons.length
      }
      write(RR) {
        if (this.Qq) return;
        const JR = new Uint8Array(eR.M),
          GR = new Uint8Array(eR.M);
        let yR = 0,
          tR = 0;
        for (const {
            id: uR,
            keycode: ZR
          }
          of this.buttons) {
          if (yR === eR.M) break;
          const {
            read: RR,
            written: qR
          } = zy.encodeInto(uR, Sy.subarray(tR, tR + eR.K));
          if (RR < uR.length) continue;
          const iR = my.i[ZR];
          JR[yR] = "number" === typeof iR ? iR : 0, GR[yR] = qR, yR++, tR += qR
        }
        this.Qq = (0, eR.ce)(RR, 0, yR, JR, GR, Sy.subarray(0, tR))
      }
    }

    function dy(RR, JR, GR) {
      const yR = zy.encode(JR);
      return yR.length <= eR.K && function(RR, JR, GR, yR) {
        return (0, tG.b)(), (0, eR.df)(RR, JR, GR, yR)
      }(RR, 0, GR ? 1 : 0, yR)
    }
    var Ey = GR(40506);
    const Yy = new TextDecoder,
      ky = new TextEncoder,
      Qy = new Uint8Array(0),
      Fy = [0, 0, 0],
      Ty = {
        off: eR.zd.Off,
        key: eR.zd.Key,
        touch: eR.zd.Touch
      };
    class sy {
      constructor(RR) {
        var JR;
        this.options = RR, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tickers = [], this.renderers = [], this.receivers = [], this.failures = [], this.vetoSet = !1, this.hooksSet = !1, this.writtenPublicLobby = !1, this.promptWatch = "off", this.promptWatchSent = "off", this.customButtons = new jy, this.generation = 0, this.sessionLive = !1, this.boundId = 0, this.session = null, this.activeConn = 0, this.closedThrough = 0, this.openSocket = 0, this.socketLeftSinceAttach = !1, this.ticks = 0, this.zoomUnshown = !1, this.zoomHeld = !1, this.overflowGen = 0, this.resyncOwed = !1, this.zoom = 0, this.localPhysicsType = pR.k.DEFAULT, this.pendingZoom = null, this.thirdPersonWanted = !1, this.thirdPersonHeld = !1, this.highlight = null, this.highlightOwed = !1, this.cmd = null, this.freeCam = new Py, this.stopped = () => !1, this.onError = void 0, this.api = void 0, this.tables = void 0, this.itemSources = null, this.fault = void 0, this.fK = RR => {
          if ((0, rR.h)(RR)) throw RR;
          this.onError(RR)
        }, this.api = RR.api, this.tables = RR.tables, this.onError = null !== (JR = RR.onError) && void 0 !== JR ? JR : RR => {
          console.error("Error in client game callback", RR)
        }, this.renderFrame = new Iy(this.api, RR.screenBandY), this.live = new Oy(this.api), this.chunks = new VJ(this.api.memory, (() => this.api.apiView)), this.items = new xG({
          api: this.api,
          tables: RR.tables,
          cmd: () => this.cmd,
          onError: this.onError,
          beforeOp: RR.beforeOp
        });
        const GR = () => this.stopped() ? null : this.cmd,
          yR = () => this.sessionLive;
        this.entityInfoWatch = new uy({
          cmd: GR,
          onError: this.onError
        }), this.entityInfo = new Zy({
          api: this.api,
          watch: this.entityInfoWatch,
          isSessionLive: yR
        }), this.particles = new QG({
          cmd: GR,
          isSessionLive: yR,
          onError: this.onError
        }), this.clientApi = new XG({
          api: this.api,
          live: this.live,
          chunks: this.chunks,
          items: this.items,
          entityInfo: this.entityInfo,
          particles: this.particles,
          tables: RR.tables,
          cmd: GR,
          sendCmd: () => this.sendCmd(),
          isSessionLive: yR,
          beforeWrite: () => {
            var JR;
            if (this.stopped()) return !1;
            const GR = this.generation;
            return !1 !== (null === (JR = RR.beforeWrite) || void 0 === JR ? void 0 : JR.call(RR)) && GR === this.generation
          },
          playerDbId: () => {
            const RR = this.session;
            if (null === RR) throw new Error("No game session has started, so the local player has no DB id");
            return RR.playerDbId
          },
          playSound: RR.playSound,
          preloadSounds: RR.preloadSounds,
          setLocalOptions: RR.setLocalOptions,
          hasPackModel: RR.hasPackModel,
          localPhysicsType: () => this.localPhysicsType
        }), this.scriptedCamera = new kR({
          api: this.api,
          reportError: JR => {
            var GR;
            this.fK(JR), null === (GR = RR.reportCameraFault) || void 0 === GR || GR.call(RR, JR)
          },
          cmd: () => this.stopped() ? null : this.cmd,
          screen: RR.cameraScreen,
          showFacing: RR.showCameraFacing
        })
      }
      get itemBridgeSources() {
        return this.itemSources ??= py(this.items, this.tables, (() => this.localPlayerAlive()), this.fK), this.itemSources
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
      clickCodeBlock(RR) {
        const JR = this.sessionLive ? this.sendCmd() : null;
        return null !== JR && (GR = JR, yR = 0, tR = RR[0], uR = RR[1], ZR = RR[2], (0, tG.b)(), (0, eR.ie)(GR, yR, tR, uR, ZR));
        var GR, yR, tR, uR, ZR
      }
      cameraZoom() {
        return this.zoom
      }
      setCameraZoom(RR) {
        const JR = this.liveCmd();
        return null === JR ? (this.pendingZoom = RR, !1) : (this.pendingZoom = null, (0, eR.Zf)(JR, 0, RR, 1))
      }
      kN(RR) {
        const JR = this.stopped() ? null : this.cmd;
        return null !== JR && (0, eR.Uf)(JR, 0, RR ? 1 : 0)
      }
      respawn() {
        const RR = this.sessionLive ? this.sendCmd() : null;
        return null !== RR && (JR = RR, GR = 0, (0, tG.b)(), (0, eR.uf)(JR, GR));
        var JR, GR
      }
      bindCustomButtonKeys(RR) {
        this.customButtons.set(RR)
      }
      pressCustomButton(RR, JR) {
        const GR = this.sessionLive ? this.sendCmd() : null;
        return null !== GR && dy(GR, RR, JR)
      }
      padMove(RR, JR, GR, yR, tR, uR) {
        const ZR = this.liveCmd();
        return null !== ZR && (0, eR.Me)(ZR, 0, RR, JR, GR, yR, tR, uR)
      }
      thirdPersonFor(RR) {
        const JR = this.liveCmd();
        return null !== JR && (0, eR.dg)(JR, 0, null !== RR && void 0 !== RR ? RR : 1 / 0)
      }
      send(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const yR = 0 !== this.openSocket || this.sessionLive ? this.sendCmd() : null;
        return null !== yR && uG(yR, GR ? wR.pd : 0, RR, (0, IR.i)(JR))
      }
      socketAttached(RR) {
        this.openSocket = RR, this.socketLeftSinceAttach = !1
      }
      socketDetached(RR) {
        this.openSocket === RR && (this.openSocket = 0)
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
      attach(RR) {
        const JR = () => RR.isStopped;
        this.stopped = JR, this.cmd = RR.rings.cmd, this.promptWatchSent = "off", this.writePromptWatch(), this.customButtons.attached(), this.writeCustomButtons();
        const GR = this.api.apiView;
        this.overflowGen = eR.s.eventOverflowGen(GR, 0), this.resyncOwed = 0 !== eR.s.eventOverflowMask(GR, 0), RR.setGameHost(this), RR.setEventWalker((RR => {
          this.api.walk(RR, this, JR)
        }))
      }
      watchPromptPick(RR) {
        this.promptWatch = RR, this.writePromptWatch()
      }
      get promptEntity() {
        return "off" === this.promptWatch || this.stopped() ? null : hy(eR.s.promptEntity(this.api.apiView, 0))
      }
      get interactLabel() {
        return "touch" !== this.promptWatch || this.stopped() ? eR.qc.None : eR.s.interactLabel(this.api.apiView, 0)
      }
      get interactIcon() {
        return "touch" !== this.promptWatch || this.stopped() ? 0 : eR.s.interactIcon(this.api.apiView, 0)
      }
      closeGame() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        (0 === RR || RR >= this.openSocket) && (this.openSocket = 0), this.closedThrough = Math.max(this.closedThrough, RR, this.activeConn), this.activeConn = 0, this.endSession(), this.endGameGrants(), this.dropGameCamera()
      }
      gameCamera(RR) {
        0 !== this.activeConn && this.scriptedCamera.settingsChanged(RR)
      }
      netEvent(RR) {
        "connection" === RR.type ? RR.phase === wR.H.Activated && RR.conn !== this.activeConn && RR.conn > this.closedThrough ? (this.endSession(), this.activeConn = RR.conn, this.endGameGrants(), this.dropGameCamera()) : RR.phase !== wR.H.Left && RR.phase !== wR.H.Closed || RR.conn !== this.activeConn ? RR.phase === wR.H.Resumed && 0 !== this.activeConn && RR.conn > this.closedThrough && (this.activeConn = RR.conn) : this.closeGame() : RR.conn === this.activeConn && 0 !== RR.conn && (RR.LZ === Ny.r ? this.gunHit(RR.payload) : RR.LZ === qy.sc.EditItemCraftingRecipes || RR.LZ === Ny.V ? this.items.touch() : (this.serverOptions(RR), this.gameMessage(RR)));
        const JR = this.options.onNetEvent;
        JR && this.guard((() => {
          JR(RR)
        }))
      }
      serverOptions(RR) {
        const JR = this.options.serverOptions,
          GR = JR ? this.decoded(iy, RR) : null;
        if (JR && GR) {
          this.guard((() => {
            JR.applyNewClientOptions(GR)
          }));
          const RR = GR.holdThirdPerson;
          void 0 !== RR && (this.thirdPersonWanted = RR, this.writeOwedThirdPerson())
        }
      }
      gameMessage(RR) {
        let JR = null;
        try {
          JR = function(RR) {
            if ("message" !== RR.type || RR.LZ !== qy.sc.GameCodeMessage || RR.payloadKind !== wR.gc.Msgpack) return null;
            const JR = (0, IR.e)(RR.payload);
            if (null === JR || "object" !== typeof JR || "string" !== typeof JR.messageType) throw new Error("GameCodeMessage without a messageType");
            return JR
          }(RR)
        } catch (GR) {
          this.sessionLive && this.onError(GR)
        }
        if (JR) {
          const {
            messageType: RR,
            data: GR
          } = JR;
          if ((0, OR.g)(RR)) return void this.guard((() => {
            (0, OR.c)(RR, GR)
          }));
          "freeCamPerms" === RR && this.freeCam.setGame(GR) && this.writeFreeCam(), this.sessionLive && this.round(this.receivers, (JR => {
            JR.onReceivedMessageFromServer(RR, GR)
          }))
        }
      }
      decoded(RR, JR) {
        try {
          return RR(JR)
        } catch (GR) {
          return this.onError(GR), null
        }
      }
      setClientFreeCameraGrant(RR, JR) {
        this.freeCam.setClient(RR, JR), this.writeFreeCam()
      }
      freeCameraAllowed() {
        return 0 !== this.freeCam.perms()
      }
      setFreeCameraMovesFly(RR) {
        this.freeCam.setMovesFly(RR), this.writeFreeCam()
      }
      setBlockHighlight(RR) {
        this.highlight = RR, this.highlightOwed = !0, this.writeOwedHighlight()
      }
      writeOwedThirdPerson() {
        const RR = this.thirdPersonWanted;
        RR !== this.thirdPersonHeld && this.thirdPersonFor(RR ? void 0 : 0) && (this.thirdPersonHeld = RR)
      }
      writeOwedHighlight() {
        const RR = this.liveCmd();
        if (null === RR || !this.highlightOwed) return;
        const JR = this.highlight;
        this.highlightOwed = null === JR ? !(0, eR.ye)(RR, 0, Fy, Fy, 0) : !(0, eR.ye)(RR, 0, JR.pos, JR.normal, 1)
      }
      localPlayerBound(RR) {
        var JR, GR;
        if (0 === this.activeConn || this.sessionLive && RR === this.boundId) return;
        const yR = this.sessionLive;
        let tR, uR, ZR, qR;
        this.endSession(), yR && this.restartGameCamera();
        try {
          var iR;
          this.session = null;
          const RR = this.options.sessionInfo(this.activeConn);
          if (this.session = RR, !RR) return;
          tR = RR.gameNameWithVariation, uR = null !== (iR = (0, gR.Mb)(tR)) && void 0 !== iR ? iR : void 0, ZR = (0, bR.q)(RR.lobbyName), qR = (0, bR.E)(RR.lobbyName)
        } catch (UR) {
          return void this.onError(UR)
        }
        const fR = {
          localPlayerId: String(RR)
        };
        let VR = {},
          KR = [];
        try {
          var wR, rR;
          VR = null !== (wR = null === (rR = this.options.gameFactory((0, gR.Sb)(tR))) || void 0 === rR ? void 0 : rR(qR, ZR, uR, fR)) && void 0 !== wR ? wR : {}
        } catch (UR) {
          this.fK(UR)
        }
        try {
          var eR, aR;
          KR = (0, vR.b)(null === (eR = (aR = this.options).defaultPlugins) || void 0 === eR ? void 0 : eR.call(aR, qR, ZR, uR, fR), VR.plugins)
        } catch (UR) {
          this.fK(UR)
        }
        const LR = [VR, ...KR];
        this.owners = LR, this.tickers = LR.filter((RR => void 0 !== RR.gK)), this.renderers = LR.filter((RR => void 0 !== RR.onAfterRender)), this.receivers = LR.filter((RR => void 0 !== RR.onReceivedMessageFromServer)), this.writeAltVeto(LR), this.writeHooks(LR), this.writePublicLobby(qR), this.writeLocalDbId(null !== (JR = null === (GR = this.session) || void 0 === GR ? void 0 : GR.playerDbId) && void 0 !== JR ? JR : null), this.boundId = RR, this.sessionLive = !0, this.generation++, null !== this.pendingZoom && this.setCameraZoom(this.pendingZoom), this.highlightOwed ||= null !== this.highlight, this.writeOwedHighlight(), this.round(LR, (RR => {
          var JR;
          null === (JR = RR.onCreate) || void 0 === JR || JR.call(RR, this.clientApi)
        }));
        const nR = this.generation;
        setTimeout((() => {
          nR === this.generation && !0 === this.tables.getClientOption("creative") && ly(this.tables)
        }), 0)
      }
      chunkSlot(RR, JR, GR, yR, tR, uR) {
        this.chunks.apply(RR, JR, GR, yR, tR, uR)
      }
      entityAdded(RR) {
        var JR;
        this.entityInfo.stale(RR), null === (JR = this.options.replayEntities) || void 0 === JR || JR.entityAdded(RR)
      }
      entityInfoChanged(RR) {
        var JR;
        this.entityInfo.stale(RR), null === (JR = this.options.replayEntities) || void 0 === JR || JR.entityInfoChanged(RR)
      }
      afterPrescan() {
        this.items.refresh(), this.entityInfo.refresh(), this.api.rereadDirectory(), this.chunks.refresh(), this.live.refresh()
      }
      tickEnd() {
        if (this.ticks++, this.tickers.length > 0) {
          const RR = performance.now();
          this.round(this.tickers, Rt), (0, ny.c)(performance.now() - RR)
        }
      }
      afterWalk(RR) {
        this.ackEventOverflow(), this.clientApi.flushOwed(), this.writeOwedHighlight(), this.writeOwedThirdPerson();
        const JR = this.options.replayEntities;
        JR && this.guard((() => {
          this.entityInfoWatch.want(ty, JR.wantsWatch), JR.flush(this.entityInfoWatch.on)
        }));
        const GR = this.api.apiView,
          yR = eR.s.frameMs(GR, 0);
        Dy.o.frame(yR, eR.s.heading(GR, 0), eR.s.pitch(GR, 0), Dy.i[RR]);
        const tR = (0, ny.f)(RR, yR);
        if (null !== tR) {
          const RR = this.renderFrame;
          this.guard((() => {
            (0, Vy.b)().turnDamageIndicators(RR.cameraHeading), (0, Vy.b)().turnSoundCues(RR.cameraHeading)
          })), this.guard((() => {
            this.clientApi.slideRoute(tR)
          })), this.round(this.renderers, (JR => {
            JR.onAfterRender(tR, RR)
          }))
        }
        this.writeFreeCam();
        try {
          this.scriptedCamera.afterFrame(null !== tR)
        } catch (ZR) {
          this.fK(ZR)
        }
        this.showZoom(), this.items.flush(this.fK), this.writePromptWatch(), this.writeCustomButtons();
        const uR = this.ticks;
        this.ticks = 0, (0, ny.e)(uR, RR, tR, this.fK)
      }
      entityRemoved(RR) {
        this.live.despawned(RR), this.entityInfo.removed(RR)
      }
      ackEventOverflow() {
        const RR = this.api.apiView,
          JR = eR.s.eventOverflowGen(RR, 0),
          GR = JR - this.overflowGen >>> 0;
        if (0 === GR && !this.resyncOwed) return;
        this.overflowGen = JR;
        const yR = eR.s.eventOverflowMask(RR, 0),
          tR = this.cmd;
        0 === yR || null === tR || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, eR.le)(tR, 0, yR);
        const uR = this.options.onEventOverflow;
        0 !== GR && uR && this.guard((() => {
          uR(yR, GR)
        }))
      }
      gameCall(RR, JR, GR, yR, tR, uR, ZR, qR, iR) {
        if (RR === eR.cc.Director) try {
          return this.scriptedCamera.call(JR, GR, yR, tR, uR, ZR)
        } catch (fR) {
          return this.fK(fR), eR.lb.None
        }
        if (!this.sessionLive || void 0 !== this.fault) return RR === eR.cc.AltVeto ? eR.i.Allow : 0;
        try {
          return this.callGames(RR, JR, GR, yR, tR, uR, ZR, qR)
        } catch (fR) {
          throw (0, rR.h)(fR) && (this.fault = fR), fR
        }
      }
      takeFault() {
        const RR = this.fault;
        return this.fault = void 0, RR
      }
      callGames(RR, JR, GR, yR, tR, uR, ZR, qR) {
        this.api.rereadDirectory(), this.chunks.touch(), this.items.refresh(), this.live.refresh(), this.entityInfo.inCoreCall();
        const {
          tables: iR
        } = this.options, fR = String(this.boundId);
        switch (RR) {
          case eR.cc.AltVeto:
          case eR.cc.AltAction: {
            const qR = 0 !== ZR,
              [VR, KR, wR] = qR ? [JR, GR, yR] : [void 0, void 0, void 0],
              rR = qR ? iR.nameOfId(tR) : "Air",
              aR = hy(uR);
            if (RR === eR.cc.AltAction) return this.first((RR => {
              var JR;
              return null === (JR = RR.onPlayerAltAction) || void 0 === JR ? void 0 : JR.call(RR, fR, VR, KR, wR, rR, aR)
            })), 0;
            const LR = this.first((RR => {
              var JR;
              return null === (JR = RR.onPlayerAttemptAltAction) || void 0 === JR ? void 0 : JR.call(RR, fR, VR, KR, wR, rR, aR)
            }));
            return "preventAction" === LR ? eR.i.Prevent : "preventPlacement" === LR ? eR.i.PreventPlacement : eR.i.Allow
          }
          case eR.cc.Click: {
            const RR = qR,
              VR = 0 !== (RR & eR.W.Alt),
              KR = 0 !== (RR & eR.W.HasPos),
              wR = KR ? iR.nameOfId(tR) : "Air",
              [rR, aR, LR] = KR ? [JR, GR, yR] : [null, null, null],
              nR = hy(uR),
              UR = 0 !== (RR & eR.W.Up),
              WR = hy(ZR);
            if (0 === (RR & eR.W.AttackOnly) && this.first((RR => {
                var JR, GR;
                return UR ? null === (JR = RR.onPlayerClickUp) || void 0 === JR ? void 0 : JR.call(RR, fR, VR, rR, aR, LR, wR, nR) : null === (GR = RR.onPlayerClick) || void 0 === GR ? void 0 : GR.call(RR, fR, VR, rR, aR, LR, wR, nR)
              })), !UR && !VR && null !== WR) {
              const RR = this.clientApi.getPositionView(WR),
                JR = RR ? [RR[0], RR[1], RR[2]] : [0, 0, 0];
              this.first((RR => {
                var GR;
                return null === (GR = RR.onPlayerAttackEntity) || void 0 === GR ? void 0 : GR.call(RR, fR, WR, JR)
              }))
            }
            return 0
          }
          case eR.cc.ChangeBlock: {
            const RR = iR.nameOfId(tR),
              ZR = iR.nameOfId(uR);
            return this.first((tR => {
              var uR;
              return null === (uR = tR.onPlayerChangeBlock) || void 0 === uR ? void 0 : uR.call(tR, fR, JR, GR, yR, RR, ZR)
            })), 0
          }
          case eR.cc.DropItem: {
            const RR = iR.nameOfId(JR);
            return this.first((JR => {
              var tR;
              return null === (tR = JR.onPlayerDropItem) || void 0 === tR ? void 0 : tR.call(JR, fR, RR, GR, yR)
            })), 0
          }
          default:
            return this.onError(new Error(`Unknown game call kind ${RR}`)), 0
        }
      }
      changeBlockFail(RR, JR, GR, yR, tR, uR, ZR) {
        const qR = tR === eR.Oc ? null : Yy.decode(this.api.eventBytes(uR, Math.min(tR, ZR)));
        this.failures.push({
          rJ: [RR, JR, GR],
          eJ: yR,
          aJ: qR
        })
      }
      changeBlockFailEnd() {
        const RR = this.failures;
        this.failures = [], this.sessionLive && this.round(this.owners, (JR => {
          var GR;
          null === (GR = JR.onChangeBlockFail) || void 0 === GR || GR.call(JR, RR)
        })), this.JK("blockChangeRefused", null), this.JK("EditBoard", {
          pos: null
        }), this.JK("EditCodeBlock", {
          pos: null,
          canChangePos: null
        })
      }
      inventoryEvent(RR, JR, GR, yR, tR, uR) {
        RR === eR.sc.ChestOpened ? this.items.chestOpened(GR, yR, tR) : RR !== eR.sc.Synced && RR !== eR.sc.ChestClosed && RR !== eR.sc.ChestRefreshed || this.items.touch(), this.guard((() => {
          ! function(RR, JR, GR, yR) {
            switch (RR) {
              case eR.sc.Synced:
                ZR.n.JK("syncedInvenFromServer");
                break;
              case eR.sc.ChestOpened:
              case eR.sc.ChestClosed:
                ZR.n.JK("chestToggleFromServer", RR === eR.sc.ChestOpened, !0);
                break;
              case eR.sc.ChestRefreshed:
                ZR.n.JK("chestRefreshedFromServer");
                break;
              case eR.sc.EnchantingTable:
                ZR.n.JK("enchantingTable", {
                  Vq: yR,
                  position: GR
                });
                break;
              case eR.sc.HotbarRequest:
                ZR.n.JK("setSelectedInventorySlotI", JR, !0);
                break;
              case eR.sc.Scrolled:
                ZR.n.JK("ScrollInventorySlot", JR);
                break;
              case eR.sc.NumberKey:
                ZR.n.JK("numkeyPressed", JR + 1);
                break;
              case eR.sc.DropRequested:
                ZR.n.JK("DropInvenItem", 0 !== JR);
                break;
              default:
                throw new rR.c(`InventoryEvent of no kind: what ${RR}`)
            }
          }(RR, JR, [GR, yR, tR], uR)
        }))
      }
      heldItemChanged() {
        this.items.touch()
      }
      shotDamage(RR, JR, GR, yR) {
        this.JK("shotPlayer", {
          playerId: String(RR),
          damage: JR,
          wasCrit: 0 !== yR,
          distance: GR
        })
      }
      localHurt(RR, JR) {
        this.JK("closeShopOnDamaged", null), this.guard((() => {
          ZR.n.JK("damagedByOtherPlayer", {
            gt: null,
            direction: Number.isNaN(JR) ? null : JR,
            jt: RR
          })
        }))
      }
      attackHit(RR, JR, GR, yR, tR) {
        this.guard((() => {
          ZR.n.JK("yourAttackHit", {
            xJ: yR,
            screenPos: this.renderFrame.projectDirectionToScreenPos([RR, JR, GR]),
            hitSelf: tR
          })
        }))
      }
      physicsType(RR) {
        this.localPhysicsType = RR, this.JK("PlayerPhysicsTypeUpdate", RR)
      }
      vehicleEffect(RR, JR, GR, yR, tR) {
        this.guard((() => {
          RR === wR.Hd.UPDATE ? (0, NR.h)(JR, {
            icon: GR,
            level: yR,
            displayName: null,
            durationMs: tR
          }) : xR.d.remove(JR)
        }))
      }
      zoomChanged(RR) {
        this.zoom = RR, this.zoomUnshown = !0
      }
      zoomDisabled() {
        this.JK("showBottomMessage", {
          message: "Zoom is disabled",
          timeoutLength: 2e3,
          type: "Error"
        })
      }
      bhopDisabled() {
        this.JK("showBottomMessage", Ey.c)
      }
      showZoom() {
        const RR = this.scriptedCamera.holdsView();
        !this.zoomUnshown || RR && this.zoomHeld || (this.zoomUnshown = !1, this.JK("cameraZoomSet", this.zoom)), this.zoomHeld = RR
      }
      gunHit(RR) {
        this.guard((() => {
          const {
            gt: JR,
            bt: GR
          } = (0, xy.e)(Ny.r, RR);
          ZR.n.JK("damagedByOtherPlayer", {
            gt: JR,
            direction: GR
          })
        }))
      }
      uiEvent(RR, JR, GR, yR, tR, uR, ZR, qR) {
        this.guard((() => {
          Ky(RR, JR, [GR, yR, tR], uR, this.items, this.options.tables, (() => Yy.decode(this.api.eventBytes(ZR, qR))))
        }))
      }
      writeAltVeto(RR) {
        const JR = this.cmd;
        if (!JR) return;
        let GR;
        try {
          GR = function(RR, JR) {
            const GR = new Set;
            let yR = !1;
            for (const tR of RR)
              if (tR.onPlayerAttemptAltAction) {
                if (yR = !0, !tR.altVetoBlocks) return {
                  mode: eR.Zd.All,
                  roots: []
                };
                for (const RR of tR.altVetoBlocks) GR.add(JR.getMetaInfo(RR).rootId)
              } return yR ? GR.size > eR.Bc ? {
              mode: eR.Zd.All,
              roots: []
            } : {
              mode: eR.Zd.Filter,
              roots: [...GR]
            } : {
              mode: eR.Zd.Off,
              roots: []
            }
          }(RR, this.options.tables)
        } catch (tR) {
          this.onError(tR), GR = {
            mode: eR.Zd.All,
            roots: []
          }
        }
        if (GR.mode === eR.Zd.Off && !this.vetoSet) return;
        const yR = new Uint8Array(new Uint32Array(GR.roots).buffer);
        (0, eR.Bf)(JR, 0, GR.mode, GR.roots.length, yR) ? this.vetoSet = GR.mode !== eR.Zd.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
      }
      endGameGrants() {
        this.freeCam.clearGame(), this.writeFreeCam()
      }
      writeFreeCam() {
        this.stopped() || this.freeCam.write(this.cmd)
      }
      writeHooks(RR) {
        const JR = this.cmd;
        if (!JR) return;
        const GR = function(RR) {
          let JR = 0;
          for (const GR of RR) GR.onPlayerAltAction && (JR |= 1 << eR.cc.AltAction), (GR.onPlayerClick || GR.onPlayerClickUp || GR.onPlayerAttackEntity) && (JR |= 1 << eR.cc.Click), GR.onPlayerChangeBlock && (JR |= 1 << eR.cc.ChangeBlock), GR.onPlayerDropItem && (JR |= 1 << eR.cc.DropItem);
          return JR
        }(RR);
        (0 !== GR || this.hooksSet) && ((0, eR.Lf)(JR, 0, GR) ? this.hooksSet = 0 !== GR : this.onError(new Error("SetHooks didn't fit the command ring")))
      }
      writeCustomButtons() {
        const RR = this.cmd;
        RR && !this.stopped() && this.customButtons.write(RR)
      }
      writePromptWatch() {
        const RR = this.cmd,
          JR = this.promptWatch;
        JR !== this.promptWatchSent && RR && !this.stopped() && (0, eR.gg)(RR, 0, Ty[JR]) && (this.promptWatchSent = JR)
      }
      writePublicLobby(RR) {
        const JR = this.cmd;
        JR && RR !== this.writtenPublicLobby && ((0, eR.Vf)(JR, 0, RR ? 1 : 0) ? this.writtenPublicLobby = RR : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
      }
      writeLocalDbId(RR) {
        const JR = this.cmd;
        JR && ((0, eR.Mf)(JR, 0, null === RR ? 0 : 1, null === RR ? Qy : ky.encode(RR)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
      }
      first(RR) {
        const JR = this.generation;
        for (const yR of this.owners) {
          if (JR !== this.generation) break;
          try {
            const JR = RR(yR);
            if (void 0 !== JR) return JR
          } catch (GR) {
            this.fK(GR)
          }
        }
      }
      JK(RR, JR) {
        this.guard((() => {
          ZR.n.JK(RR, JR)
        }))
      }
      dropGameCamera() {
        try {
          this.scriptedCamera.reset()
        } catch (RR) {
          this.fK(RR)
        }
      }
      restartGameCamera() {
        try {
          this.scriptedCamera.restart()
        } catch (RR) {
          this.fK(RR)
        }
      }
      endSession() {
        if (!this.sessionLive) return;
        this.sessionLive = !1, this.localPhysicsType = pR.k.DEFAULT, this.thirdPersonWanted = !1, this.thirdPersonHeld = !1;
        const RR = this.owners;
        let JR;
        if (this.owners = this.tickers = this.renderers = this.receivers = [], this.generation++, !this.stopped()) try {
          this.writeAltVeto([]), this.writeHooks([]), this.writePublicLobby(!1), this.writeLocalDbId(null)
        } catch (yR) {
          JR = yR
        }
        try {
          this.entityInfo.sessionEnded()
        } catch (yR) {
          JR ??= yR
        }
        this.round(RR, Jt, !0);
        try {
          this.particles.sessionEnded() || this.onError(new Error("ParticleStopAll didn't fit the command ring"))
        } catch (yR) {
          JR ??= yR
        }
        try {
          this.clientApi.disposeGameOutput()
        } catch (yR) {
          JR ??= yR
        }
        const GR = this.options.onSessionEnd;
        if (GR) try {
          GR()
        } catch (yR) {
          this.onError(yR)
        }
        void 0 !== JR && this.fK(JR)
      }
      round(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const yR = this.generation;
        for (const uR of RR) {
          if (yR !== this.generation) break;
          try {
            JR(uR)
          } catch (tR) {
            GR ? this.onError(tR) : this.fK(tR)
          }
        }
      }
      guard(RR) {
        try {
          RR()
        } catch (JR) {
          this.fK(JR)
        }
      }
    }

    function hy(RR) {
      return RR === eR.Rc ? null : String(RR)
    }

    function Rt(RR) {
      RR.gK(wR.zd)
    }

    function Jt(RR) {
      var JR;
      null === (JR = RR.onClose) || void 0 === JR || JR.call(RR)
    }

    function Gt(RR, JR) {
      RR.watch((() => {
        const GR = function(RR) {
          const JR = [],
            GR = Math.min(Uy, RR.length);
          for (let tR = 0; tR < GR; tR++) {
            var yR;
            const GR = null === (yR = RR.slot(tR)) || void 0 === yR ? void 0 : yR.typeObj,
              uR = GR ? (0, Ly.gunTypeOf)(GR.id) : void 0;
            void 0 !== uR && JR.push(MJ[uR])
          }
          return JR
        }(RR);
        GR.length > 0 && (JR.preload(GR.flatMap((RR => cJ(RR)))), JR.preload(cJ(BJ)))
      }))
    }
    var yt = GR(37485),
      tt = GR(5742),
      ut = GR(37470),
      Zt = GR(37518);

    function qt(RR) {
      const JR = (0, yt.countDecodesAs)(new tt.Howl({
          src: [...(0, ut.v)(RR).src],
          pool: 15,
          preload: !1
        }), "sound"),
        GR = JR.load.bind(JR);
      return JR.load = () => (JR._preload = !0, (0, Zt.e)(RR), GR()), JR
    }

    function it(RR, JR, GR) {
      const yR = RR.listener;
      if (yR.positionX) ft(yR.positionX, JR, GR, 0), ft(yR.positionY, JR, GR, 1), ft(yR.positionZ, JR, GR, 2), ft(yR.forwardX, JR, GR, 3), ft(yR.forwardY, JR, GR, 4), ft(yR.forwardZ, JR, GR, 5), ft(yR.upX, JR, GR, 6), ft(yR.upY, JR, GR, 7), ft(yR.upZ, JR, GR, 8);
      else {
        let RR = !1;
        for (let yR = 0; yR < 9; yR++) RR ||= JR[yR] !== GR[yR];
        RR && (yR.setPosition(JR[0], JR[1], JR[2]), yR.setOrientation(JR[3], JR[4], JR[5], JR[6], JR[7], JR[8]), GR.set(JR))
      }
    }

    function ft(RR, JR, GR, yR) {
      JR[yR] !== GR[yR] && (RR.value = JR[yR], GR[yR] = JR[yR])
    }
    class Vt {
      constructor() {
        this.pose = new Float64Array(9), this.written = new Float64Array(9).fill(Number.NaN), this.watchedCtx = void 0
      }
      apply(RR) {
        this.pose.set(RR);
        const JR = tt.Howler.ctx;
        return !!JR && (JR !== this.watchedCtx && (this.watchedCtx = JR, this.written.fill(Number.NaN), JR.addEventListener("statechange", (() => {
          "running" === JR.state && it(JR, this.pose, this.written)
        }))), "running" === JR.state && it(JR, RR, this.written), !0)
      }
    }
    var Kt = GR(37766),
      wt = GR(40491);
    let rt = null,
      et = null;

    function Lt() {
      return null === rt && (rt = document.createElement("div"), rt.className = "WasmCameraLayer", rt.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none", document.body.append(rt)), rt
    }

    function nt() {
      return et ??= new wt.d(new Kt.g(Lt)), et
    }

    function Ut() {
      var RR;
      null === (RR = et) || void 0 === RR || RR.clear(), Wt(null)
    }

    function Wt(RR) {
      yR.d.get("scriptedCameraFacing") !== RR && yR.d.set({
        scriptedCameraFacing: RR
      })
    }
    var At = GR(5953),
      Ct = GR(5898),
      Xt = GR(40522),
      Mt = GR(42577),
      Bt = GR(4555);
    const lt = Object.entries(eR.ac).reduce(((RR, JR) => {
      let [GR, yR] = JR;
      return RR[yR] = GR, RR
    }), []);

    function pt(RR, JR) {
      var GR;
      return 0 !== ((null !== (GR = RR.itemFlags[JR]) && void 0 !== GR ? GR : 0) & eR.tc.Stackable)
    }
    const gt = /^(0|[1-9][0-9]*)$/,
      bt = {
        displayName: (RR, JR) => (0, Ly.displayNameOf)(JR),
        description: (RR, JR) => (0, Ly.descriptionOf)(JR),
        type: (RR, JR) => (0, Ly.itemTypeOf)(JR),
        clipSize: (RR, JR) => (0, Ly.clipSizeOf)(JR),
        armourReduction: (RR, JR) => (0, Ly.armourReductionOf)(JR),
        scopeType: (RR, JR) => (0, Ly.scopeTypeOf)(JR),
        stackable: pt,
        harvestType: (RR, JR) => lt[RR.blockHarvestTypes[JR]],
        harvestLevel: (RR, JR) => {
          const GR = RR.blockHarvestLevels[JR];
          return GR === eR.vc ? void 0 : GR
        },
        harvests: (RR, JR) => {
          var GR;
          const yR = null !== (GR = RR.itemHarvests[JR]) && void 0 !== GR ? GR : 0;
          return 0 !== yR ? lt[yR] : void 0 === (0, Ly.harvestsNullLevelOf)(JR) ? void 0 : null
        },
        level: (RR, JR) => {
          var GR, yR;
          const tR = null !== (GR = RR.itemLevels[JR]) && void 0 !== GR ? GR : eR.vc;
          return tR !== eR.vc ? tR : null !== (yR = (0, Ly.harvestsNullLevelOf)(JR)) && void 0 !== yR ? yR : void 0
        }
      };

    function vt(RR, JR, GR) {
      return xt(new Uint8Array(Math.floor(RR.length / JR)), RR, JR, GR)
    }

    function Ot(RR, JR, GR) {
      return xt(new Uint16Array(Math.floor(RR.length / JR)), RR, JR, GR)
    }

    function xt(RR, JR, GR, yR) {
      const tR = new DataView(JR.buffer, JR.byteOffset, JR.byteLength);
      for (let uR = 0; uR < RR.length; uR++) RR[uR] = yR(tR, uR * GR);
      return RR
    }
    class Nt {
      constructor(RR, JR) {
        this.options = JR, this.metas = [], this.types = new Map, this.props = void 0, this.rootIdOf = RR => {
          const JR = this.idOf(RR);
          if (void 0 === JR) throw new Error(`No item is named ${RR}, an item's root`);
          return JR
        };
        const GR = JR => {
            const GR = JR();
            return new Uint8Array(RR.memory().buffer, RR.scratch(), GR).slice()
          },
          yR = (new TextDecoder).decode(GR((() => RR.queries.itemNames()))).split("\n"),
          tR = GR((() => RR.queries.blockProps())),
          uR = GR((() => RR.queries.itemProps()));
        this.props = {
          blockFlags: vt(tR, eR.z.BYTES, eR.z.flags),
          blockHarvestTypes: vt(tR, eR.z.BYTES, eR.z.harvestType),
          blockHarvestLevels: vt(tR, eR.z.BYTES, eR.z.harvestLevel),
          blockAttachedTops: Ot(tR, eR.z.BYTES, eR.z.attachedTop),
          itemFlags: vt(uR, eR.uc.BYTES, eR.uc.flags),
          itemHarvests: vt(uR, eR.uc.BYTES, eR.uc.harvests),
          itemLevels: vt(uR, eR.uc.BYTES, eR.uc.level)
        }, (0, Bt.i)(Object.freeze(yR)), (0, Mt.g)()
      }
      idOf(RR) {
        if ("number" === typeof RR) return void 0 === (0, Bt.c)(RR) ? void 0 : RR;
        const JR = (0, Bt.b)(RR);
        return void 0 === JR && gt.test(RR) ? void 0 === (0, Bt.c)(+RR) ? void 0 : +RR : JR
      }
      getMetaInfo(RR) {
        if (!RR || RR === At.b) return At.d;
        const JR = this.idOf(RR);
        if (void 0 === JR) throw new Error(`Item ${RR} not found in registry`);
        return this.metaOf(JR)
      }
      blockRootId(RR) {
        return 0 !== RR && void 0 !== (0, Bt.c)(RR) ? this.metaOf(RR).rootId : RR
      }
      metaOf(RR) {
        return this.metas[RR] ??= (0, Ct.l)((0, Bt.c)(RR), RR, this.rootIdOf, (0, Ly.rootMetaDescOf)(RR))
      }
      getItemId(RR) {
        if (!RR || RR === At.b) return 0;
        const JR = this.idOf(RR);
        if (void 0 === JR) throw new Error(`Invalid block name. You sent ${RR}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
        return JR
      }
      getItemName(RR) {
        if (!RR || RR === At.b) return At.b;
        const JR = this.idOf(RR);
        if (void 0 === JR) throw new Error(`Item ${RR} not found in registry`);
        return (0, Bt.c)(JR)
      }
      blockNameToBlockId(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (RR === At.b) return 0;
        let GR = this.idOf(RR);
        if (void 0 === GR || !this.isBlockId(GR)) {
          const JR = RR.indexOf("|"),
            yR = JR > 0 ? (0, Bt.b)(RR.slice(0, JR)) : void 0;
          GR = void 0 !== yR && this.isBlockId(yR) && (0, Ly.rootMetaDescOf)(yR) === RR ? yR : void 0
        }
        if (void 0 !== GR) return GR;
        if (!JR) throw new Error(`Invalid block name. You sent ${RR}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
        return null
      }
      isBlockId(RR) {
        return RR > 0 && RR < this.props.blockFlags.length
      }
      nameOfId(RR) {
        return 0 !== RR && (0, Bt.c)(RR) || At.b
      }
      itemType(RR) {
        const JR = RR ? this.idOf(RR) : void 0;
        if (!JR) return null;
        let GR = this.types.get(JR);
        return void 0 === GR && (GR = Object.freeze({
          id: JR,
          name: (0, Bt.c)(JR),
          meta: this.getMetaInfo(JR),
          stackable: pt(this.props, JR),
          type: (0, Ly.itemTypeNameOf)(JR),
          clipSize: (0, Ly.clipSizeOf)(JR),
          scopeType: (0, Ly.scopeTypeOf)(JR),
          showsAimingUi: (0, Ly.showsAimingUi)(JR)
        }), this.types.set(JR, GR)), GR
      }
      getItemStat(RR, JR) {
        if (Xt.b.has(JR)) {
          const GR = "minChargeStateToUse" === JR ? this.getMetaInfo(RR).rootName : this.getItemName(RR),
            yR = this.options.get((0, Xt.d)(GR, JR));
          if (null !== yR && void 0 !== yR) return yR
        }
        return this.defaultStat(RR, JR, this.statOf(JR))
      }
      getDisplayName(RR) {
        return this.getItemStat(RR, "displayName")
      }
      getDefaultItemStat(RR, JR) {
        return this.defaultStat(RR, JR, this.statOf(JR))
      }
      statOf(RR) {
        const JR = bt[RR];
        return void 0 === JR && function(RR, JR) {
          throw new Error(`ClientApi.${RR} is not available yet in the wasm client (${JR})`)
        }(`getItemStat("${RR}")`, `a table of the stat: the wasm client answers ${Object.keys(bt).join(", ")}`), JR
      }
      defaultStat(RR, JR, GR) {
        const yR = this.idOf(RR),
          tR = void 0 === yR ? void 0 : GR(this.props, yR);
        return null !== tR && void 0 !== tR || "displayName" !== JR ? tR : this.getItemName(RR)
      }
      getClientOption(RR) {
        return this.options.get(RR)
      }
      getGunStats(RR) {
        return this.getClientOption(`${RR}GunStats`)
      }
      watchClientOption(RR, JR) {
        return this.options.subscribe(RR, JR)
      }
      isSolidBlockId(RR) {
        var JR;
        return 0 !== ((null !== (JR = this.props.blockFlags[RR]) && void 0 !== JR ? JR : 0) & eR.x.Solid)
      }
      isStackableId(RR) {
        return pt(this.props, RR)
      }
      isFluidBlockId(RR) {
        var JR;
        return 0 !== ((null !== (JR = this.props.blockFlags[RR]) && void 0 !== JR ? JR : 0) & eR.x.Fluid)
      }
      canPlaceOverBlockId(RR) {
        var JR;
        return 0 !== ((null !== (JR = this.props.blockFlags[RR]) && void 0 !== JR ? JR : 0) & eR.x.PlaceOver)
      }
      attachedTopOf(RR) {
        var JR;
        return null !== (JR = this.props.blockAttachedTops[RR]) && void 0 !== JR ? JR : 0
      }
      isDroplessBlockId(RR) {
        return (0, Ly.dropsNothing)(RR)
      }
    }

    function Dt(RR, JR) {
      const GR = new Map;
      return (yR, tR) => {
        const uR = JR.idOf(yR),
          ZR = void 0 === uR ? null : (yR => {
            let tR = GR.get(yR);
            if (void 0 === tR) {
              const uR = RR.queries.salvageRecipe(yR),
                ZR = new DataView(RR.memory().buffer, RR.scratch(), uR),
                qR = [];
              for (let RR = 0; RR + eR.Kd.BYTES <= uR; RR += eR.Kd.BYTES) qR.push(Object.freeze({
                item: JR.nameOfId(eR.Kd.item(ZR, RR)),
                amt: eR.Kd.amount(ZR, RR)
              }));
              tR = 0 === qR.length ? null : Object.freeze(qR), GR.set(yR, tR)
            }
            return tR
          })(uR);
        if (null === ZR || void 0 === tR) return ZR;
        const qR = tR <= 0 ? 1 : tR;
        return ZR.map((RR => {
          let {
            item: JR,
            amt: GR
          } = RR;
          return {
            item: JR,
            amt: GR * qR
          }
        }))
      }
    }
    var Ht = GR(42310),
      ot = GR(38064),
      ct = GR(38047),
      Pt = GR(38053),
      It = GR(37651),
      mt = GR(42394),
      zt = GR(54582);
    const St = -1,
      jt = new Uint8Array(0),
      dt = new TextEncoder;

    function Et(RR) {
      if (null === RR) return null;
      const JR = dt.encode(RR);
      return JR.byteLength < wR.Kc ? JR : JR.subarray(0, wR.Kc - 1)
    }
    class Yt {
      constructor(RR) {
        this.deps = RR, this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = St, this.keyframesSettled = !1, this.reloadFrom = St
      }
      reloadKeyframes() {
        var RR, JR;
        this.keyframesVersion = St, this.reloadFrom = null !== (RR = null === (JR = this.view()) || void 0 === JR ? void 0 : JR.version) && void 0 !== RR ? RR : St
      }
      setPlayback(RR) {
        const JR = 1 === this.deps.core.rZR(RR);
        return JR && (this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = St, this.reloadFrom = St), JR
      }
      async open(RR, JR) {
        const GR = await this.deps.replay.open(RR, JR);
        return "opening" === GR && (this.reloadKeyframes(), this.deps.recorder.prefetch()), GR
      }
      play() {
        this.deps.replay.play()
      }
      pause() {
        this.deps.replay.pause()
      }
      seek(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.deps.replay.seek(Math.max(0, Math.floor(RR)), JR)
      }
      setSpeed(RR) {
        this.deps.replay.setSpeed(RR)
      }
      setCameraMode(RR) {
        this.deps.replay.setCameraMode(zt.d.indexOf(RR))
      }
      view() {
        var RR;
        const JR = eR.s.replayViewPtr(this.deps.apiView(), 0);
        if (0 === JR) return this.lastView = null, null;
        const GR = new DataView(this.deps.buffer(), JR, eR.Gd.BYTES),
          yR = eR.Gd.version(GR, 0),
          tR = this.lastView;
        if (null !== tR && tR.version === yR) return tR;
        const uR = eR.Gd.markIn(GR, 0),
          ZR = {
            version: yR,
            state: eR.Gd.state(GR, 0),
            cameraMode: null !== (RR = zt.d[eR.Gd.cameraMode(GR, 0)]) && void 0 !== RR ? RR : "recording",
            gK: eR.Gd.gK(GR, 0),
            totalTicks: eR.Gd.totalTicks(GR, 0),
            speed: eR.Gd.speed(GR, 0),
            mark: uR === eR.Cd ? null : {
              inTick: uR,
              outTick: eR.Gd.markOut(GR, 0)
            },
            editVersion: eR.Gd.editVersion(GR, 0)
          };
        return this.lastView = ZR, ZR
      }
      keyframes() {
        const RR = this.view();
        if (null === RR) return [];
        RR.version !== this.reloadFrom && (this.reloadFrom = St);
        const JR = this.reloadFrom === St && RR.state !== wR.ld.Cropping && RR.state !== wR.ld.None,
          GR = JR ? RR.editVersion : RR.version;
        if (GR === this.keyframesVersion && JR === this.keyframesSettled) return this.lastKeyframes;
        const {
          core: yR
        } = this.deps, tR = yR.eZR(), uR = yR.yn(), ZR = [];
        if (0 !== uR && tR > 0) {
          const RR = new DataView(this.deps.buffer(), uR, tR * wR.sc);
          for (let JR = 0; JR < tR; JR++) {
            const GR = JR * wR.sc,
              yR = JR => RR.getFloat64(GR + JR, !0);
            ZR.push({
              gK: RR.getUint32(GR + wR.Hc, !0),
              position: [yR(wR.Dc), yR(wR.Dc + 8), yR(wR.Dc + 16)],
              direction: [yR(wR.vc), yR(wR.vc + 8), yR(wR.vc + 16)],
              easing: [yR(wR.zc), yR(wR.zc + 8), yR(wR.zc + 16), yR(wR.zc + 24)]
            })
          }
        }
        return this.keyframesVersion = GR, this.keyframesSettled = JR, this.lastKeyframes = ZR, ZR
      }
      addKeyframe() {
        const RR = this.deps.apiView(),
          JR = [eR.s.eye(RR, 0, 0), eR.s.eye(RR, 0, 1), eR.s.eye(RR, 0, 2)];
        return this.deps.replay.addKeyframe(JR, function(RR, JR) {
          const GR = Math.cos(JR);
          return [GR * Math.sin(RR), -Math.sin(JR), GR * Math.cos(RR)]
        }(eR.s.heading(RR, 0), eR.s.pitch(RR, 0)))
      }
      setKeyframe(RR) {
        return this.deps.replay.setKeyframe(RR.gK, Float64Array.from([...RR.position, ...RR.direction, ...RR.easing]))
      }
      moveKeyframe(RR, JR) {
        return this.deps.replay.moveKeyframe(RR, JR)
      }
      deleteKeyframes(RR, JR) {
        return this.deps.replay.deleteKeyframes(RR, JR)
      }
      setMark(RR) {
        var JR, GR;
        return this.deps.replay.setMark(null !== (JR = null === RR || void 0 === RR ? void 0 : RR.inTick) && void 0 !== JR ? JR : -1, null !== (GR = null === RR || void 0 === RR ? void 0 : RR.outTick) && void 0 !== GR ? GR : -1)
      }
      crop(RR, JR) {
        const GR = this.deps.replay.crop(RR, JR);
        return GR && this.reloadKeyframes(), GR
      }
      save(RR) {
        return this.deps.replay.askSave(), this.deps.recorder.saveEdited(RR)
      }
      recorderControl(RR) {
        this.deps.recorder.control(RR)
      }
      recorderPrefs(RR, JR) {
        this.deps.recorder.prefs(RR, JR)
      }
      recorderOption(RR, JR) {
        const GR = this.deps.cmd();
        return null !== GR && (0, eR.nf)(GR, 0, RR, null === JR ? jt : dt.encode(JR))
      }
      recordFlyingText(RR, JR, GR, yR) {
        const tR = this.deps.cmd(),
          uR = Math.max(0, Math.min(4294967295, Math.round(yR)));
        return null !== tR && (0, eR.gf)(tR, 0, JR, GR, uR, dt.encode(RR))
      }
      recordPlayerKilled(RR, JR, GR, yR) {
        const tR = this.deps.cmd();
        return null !== tR && (0, eR.qf)(tR, 0, RR, JR, Math.max(0, GR), dt.encode(yR))
      }
      recordKillfeed(RR, JR, GR) {
        var yR, tR;
        const uR = this.deps.cmd(),
          ZR = function(RR) {
            const JR = RR.reduce(((RR, JR) => {
                var GR;
                return RR + qy.Eb + (null !== (GR = null === JR || void 0 === JR ? void 0 : JR.byteLength) && void 0 !== GR ? GR : 0)
              }), 0),
              GR = new Uint8Array(JR),
              yR = new DataView(GR.buffer);
            let tR = 0;
            for (const ZR of RR) {
              var uR;
              yR.setUint16(tR, null !== (uR = null === ZR || void 0 === ZR ? void 0 : ZR.byteLength) && void 0 !== uR ? uR : wR.Kc, !0), tR += qy.Eb, null !== ZR && (GR.set(ZR, tR), tR += ZR.byteLength)
            }
            return GR
          }([Et(RR.name), Et(RR.colour), Et(JR.name), Et(JR.colour), Et(GR)]);
        return null !== uR && (0, eR.kf)(uR, 0, null !== (yR = RR.id) && void 0 !== yR ? yR : eR.Uc, null !== (tR = JR.id) && void 0 !== tR ? tR : eR.Uc, ZR)
      }
      recorderSession(RR, JR) {
        this.deps.recorder.session({
          session: JR,
          lobbyType: RR.lobbyType,
          game: RR.gameNameWithVariation,
          lobby: RR.lobbyName
        })
      }
      recorderClose() {
        this.deps.core.aZR()
      }
      filePartDone(RR, JR) {
        this.deps.recorder.filePartDone(RR, JR)
      }
      fileDone(RR) {
        this.deps.recorder.fileDone(RR)
      }
    }
    const kt = -2147483648;
    class Qt {
      constructor(RR) {
        var JR;
        this.deps = RR, this.state = ay.b, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.heldOptions = new Map, this.now = null !== (JR = RR.now) && void 0 !== JR ? JR : () => performance.now()
      }
      get current() {
        return this.state
      }
      get live() {
        var RR, JR, GR;
        return null === (RR = null === (JR = (GR = this.deps).live) || void 0 === JR ? void 0 : JR.call(GR)) || void 0 === RR || RR
      }
      activated(RR) {
        var JR, GR;
        this.live && (this.viewerShown(!0 === (null === (JR = (GR = this.deps).viewerOpen) || void 0 === JR ? void 0 : JR.call(GR))), this.deps.client.recorderSession(RR, (0, zt.g)()))
      }
      closed() {
        this.deps.client.recorderClose()
      }
      toggleRecording() {
        var RR, JR;
        this.live && (this.state.recording || !0 !== (null === (RR = (JR = this.deps).viewerOpen) || void 0 === RR ? void 0 : RR.call(JR))) ? (this.releaseOptions(), this.deps.client.recorderControl(wR.Wc.ToggleRecording)) : this.deps.notify(Pt.d.closeViewerFirst)
      }
      saveClip() {
        this.live ? this.deps.client.recorderControl(wR.Wc.SaveClip) : this.deps.notify(Pt.d.clippingNotOn)
      }
      viewerShown(RR) {
        this.live && this.deps.client.recorderControl(RR ? wR.Wc.ViewerOpened : wR.Wc.ViewerClosed)
      }
      setPrefs(RR, JR) {
        this.live && (RR && this.releaseOptions(), this.deps.client.recorderPrefs(RR, JR))
      }
      setAllOptions(RR) {
        var JR;
        this.live && (null === (JR = this.heldOptions) || void 0 === JR || JR.clear(), RR.forEach(((RR, JR) => {
          this.sendOption(JR, RR)
        })))
      }
      setOption(RR, JR) {
        this.live && (this.heldOptions ? this.heldOptions.set(RR, JR) : this.sendOption(RR, JR))
      }
      releaseOptions() {
        const RR = this.heldOptions;
        if (RR) {
          this.heldOptions = null;
          for (const [JR, GR] of RR) this.sendOption(JR, GR)
        }
      }
      sendOption(RR, JR) {
        var GR;
        this.deps.client.recorderOption(RR, void 0 === JR || null === JR ? null : null !== (GR = JSON.stringify(JR)) && void 0 !== GR ? GR : null)
      }
      recordFlyingText(RR, JR, GR, yR) {
        this.live && this.deps.client.recordFlyingText(RR, JR, GR, yR)
      }
      recordPlayerKilled(RR, JR, GR, yR) {
        this.live && this.deps.client.recordPlayerKilled(RR, JR, GR, yR)
      }
      recordKillfeed(RR, JR, GR) {
        this.live && this.deps.client.recordKillfeed(RR, JR, GR)
      }
      gK() {
        let RR = this.state;
        if (this.clipTickPending && (this.clipTickPending = !1, RR = {
            ...RR,
            hasClipBuffer: !0
          }), null !== this.recordingSince) {
          const JR = Math.floor((this.now() - this.recordingSince) / 1e3);
          JR !== RR.seconds && (RR = {
            ...RR,
            seconds: JR
          })
        }
        this.set(RR)
      }
      onEvent(RR) {
        var JR, GR;
        const {
          notify: yR
        } = this.deps, tR = Pt.d;
        switch (RR.what) {
          case wR.Vc.RecordingStarted:
            this.recordingSince = this.now(), this.set({
              ...this.state,
              recording: !0,
              seconds: 0
            }), yR(tR.recordingStarted);
            break;
          case wR.Vc.RecordingStopped:
            this.stopRecording(), yR(tR.recordingStopped), this.saveState(wR.dd.Recording, "saving");
            break;
          case wR.Vc.RecordingDiscarded:
            this.stopRecording(), yR(tR.recordingDiscarded);
            break;
          case wR.Vc.RecordingTurnedOff:
            this.stopRecording(), yR(tR.recordingTurnedOff);
            break;
          case wR.Vc.LimitReached:
            yR(tR.limitReached);
            break;
          case wR.Vc.ClipSaved:
            this.saveState(wR.dd.Clip, "saving");
            break;
          case wR.Vc.ClipEmpty:
            yR(tR.clipEmpty);
            break;
          case wR.Vc.ClippingNotOn:
            yR(tR.clippingNotOn);
            break;
          case wR.Vc.Disallowed:
            yR(tR.disallowed);
            break;
          case wR.Vc.ClippingOn:
            this.clipTickPending = !0, this.set({
              ...this.state,
              clipping: !0,
              hasClipBuffer: !1
            });
            break;
          case wR.Vc.ClippingOff:
            this.clipTickPending = !1, this.set({
              ...this.state,
              clipping: !1,
              hasClipBuffer: !1
            });
            break;
          case wR.Vc.ClipSettingsChanged:
            this.clipTickPending = this.state.clipping, this.set({
              ...this.state,
              hasClipBuffer: !1
            });
            break;
          case wR.Vc.SaveBusy:
            null === (JR = (GR = this.deps).onSaveState) || void 0 === JR || JR.call(GR, RR.kind, "busy"), yR(tR.saveBusy);
            break;
          case wR.Vc.CloseViewerFirst:
            yR(tR.closeViewerFirst)
        }
      }
      fileReady(RR, JR) {
        this.deps.download(JR), this.saveState(RR, "done"), this.deps.notify(RR === wR.dd.Clip ? Pt.d.clipSaved : Pt.d.recordingSaved)
      }
      failed(RR) {
        this.saveState(RR, "failed"), this.deps.notify(RR === wR.dd.Clip ? Pt.d.clipFailed : Pt.d.recordingFailed)
      }
      stopped() {
        this.recordingSince = null, this.clipTickPending = !1, this.set(ay.b)
      }
      stopRecording() {
        this.recordingSince = null, this.set({
          ...this.state,
          recording: !1,
          seconds: 0
        })
      }
      saveState(RR, JR) {
        var GR, yR;
        null === (GR = (yR = this.deps).onSaveState) || void 0 === GR || GR.call(yR, RR, JR)
      }
      set(RR) {
        RR !== this.state && (this.state = RR, this.deps.onState(RR))
      }
    }
    const Ft = new TextDecoder;

    function Tt(RR, JR, GR, yR) {
      const tR = [];
      for (let uR = 0; uR < yR; uR++) {
        if (JR + qy.Eb > GR) return null;
        const yR = RR.getUint16(JR, !0);
        if (JR += qy.Eb, yR !== wR.Kc) {
          if (JR + yR > GR) return null;
          tR.push(Ft.decode(new Uint8Array(RR.buffer, RR.byteOffset + JR, yR))), JR += yR
        } else tR.push(null)
      }
      return JR === GR ? tR : null
    }

    function st(RR, JR) {
      let GR = new DataView(new ArrayBuffer(0)),
        yR = !0;
      const tR = {
        replayFailed: (JR, GR, yR) => {
          RR.replayFailed({
            reason: JR,
            code: GR,
            version: yR
          })
        },
        replayOption: (JR, tR, uR, ZR) => {
          const qR = function(RR, JR, GR, yR) {
            switch (JR) {
              case wR.gd.Cleared:
                return 0 === yR ? null : void 0;
              case wR.gd.Text:
                return Ft.decode(new Uint8Array(RR.buffer, RR.byteOffset + GR, yR));
              case wR.gd.Int:
                return yR === Int32Array.BYTES_PER_ELEMENT ? RR.getInt32(GR, !0) : void 0;
              case wR.gd.Double:
                return yR === Float64Array.BYTES_PER_ELEMENT ? RR.getFloat64(GR, !0) : void 0;
              default:
                return
            }
          }(GR, tR, uR, ZR);
          void 0 !== qR ? RR.replayOption({
            key: JR,
            value: qR
          }) : yR = !1
        },
        replayUiEvent: (JR, tR, uR, ZR, qR, iR) => {
          const fR = function(RR, JR, GR, yR, tR, uR, ZR) {
            const qR = uR + ZR;
            switch (JR) {
              case wR.jd.FlyingText: {
                const ZR = Tt(RR, uR, qR, 1);
                return null !== ZR && null !== ZR[0] ? {
                  what: JR,
                  RZ: GR,
                  hu: yR,
                  angle: tR,
                  contentJson: ZR[0]
                } : null
              }
              case wR.jd.PlayerKilled: {
                const yR = Tt(RR, uR, qR, 3);
                return yR ? {
                  what: JR,
                  killstreak: GR,
                  dead: yR[0],
                  killer: yR[1],
                  withItem: yR[2]
                } : null
              }
              case wR.jd.Killfeed: {
                const GR = Tt(RR, uR, qR, 7);
                return GR ? {
                  what: JR,
                  killerId: GR[0],
                  killerName: GR[1],
                  killerColour: GR[2],
                  victimId: GR[3],
                  victimName: GR[4],
                  victimColour: GR[5],
                  withItem: GR[6]
                } : null
              }
              default:
                return null
            }
          }(GR, JR, tR, uR, ZR, qR, iR);
          null !== fR ? RR.replayUiEvent(fR) : yR = !1
        },
        replayFilePart: (GR, tR, uR, ZR) => {
          const qR = JR();
          uR + ZR > qR.byteLength ? yR = !1 : RR.filePart(GR, tR, new Uint8Array(qR, uR, ZR).slice())
        },
        replayFileReady: (JR, GR, yR, tR) => {
          RR.fileReady({
            save: JR,
            kind: GR,
            parts: yR,
            bytes: tR
          })
        },
        recorderEvent: (JR, GR, yR) => {
          RR.recorderEvent({
            what: JR,
            kind: GR,
            save: yR
          })
        },
        replayOpened: (JR, yR, tR) => {
          RR.replayOpened(Ft.decode(new Uint8Array(GR.buffer, GR.byteOffset + yR, tR)))
        }
      };
      return (RR, JR, uR, ZR) => !(RR < wR.X.ReplayFailed || RR > wR.X.RecorderEvent) && (GR = JR, yR = !0, (0, eR.be)(RR, JR, uR, ZR, tR) && yR)
    }

    function ht(RR) {
      let JR = null;
      const GR = st(RR, (() => {
        if (null === JR) throw new Error("a recorder event read outside recorderEventReader's call");
        return JR.buffer
      }));
      return (RR, yR) => {
        JR = yR;
        try {
          ! function(RR, JR) {
            const GR = RR.slice(),
              yR = new DataView(GR.buffer);
            for (let tR = 0; tR < GR.byteLength;) {
              if (tR + wR.T > GR.byteLength) throw new Error(`the recorder module's events end mid-head at ${tR}`);
              const RR = yR.getUint32(tR, !0),
                uR = 65535 & RR,
                ZR = RR >>> 16,
                qR = tR + wR.T;
              if (qR + ZR > GR.byteLength || !JR(uR, yR, qR, ZR)) throw new Error(`the recorder module wrote a malformed event ${uR} (${ZR} bytes) at ${tR}`);
              tR = qR + (0, wR.ve)(ZR)
            }
          }(RR, GR)
        } finally {
          JR = null
        }
      }
    }
    class Ru {
      constructor(RR, JR) {
        this.acks = RR, this.handlers = JR, this.parts = new Map
      }
      onPart(RR, JR, GR) {
        let yR = this.parts.get(RR);
        yR || (yR = [], this.parts.set(RR, yR)), yR[JR] = GR, this.acks.filePartDone(RR, JR)
      }
      onReady(RR) {
        var JR;
        const GR = null !== (JR = this.parts.get(RR.save)) && void 0 !== JR ? JR : [];
        this.parts.delete(RR.save);
        const yR = function(RR, JR, GR) {
          if (RR.length !== JR) return null;
          let yR = 0;
          for (let ZR = 0; ZR < JR; ZR++) {
            if (void 0 === RR[ZR]) return null;
            yR += RR[ZR].byteLength
          }
          if (yR !== GR) return null;
          if (1 === JR) return RR[0];
          const tR = new Uint8Array(GR);
          let uR = 0;
          for (const ZR of RR) tR.set(ZR, uR), uR += ZR.byteLength;
          return tR
        }(GR, RR.parts, RR.bytes);
        this.acks.fileDone(RR.save), null === yR ? this.handlers.fileIncomplete(RR.save, RR.kind) : this.handlers.fileReady(RR.save, RR.kind, yR)
      }
      onDiscarded(RR) {
        this.parts.delete(RR)
      }
    }

    function Ju() {
      return GR.e(73).then((() => GR(64119)))
    }
    class Gu {
      constructor(RR) {
        this.deps = RR, this.sink = void 0, this.recorder = void 0, this.recorderEvents = void 0, this.parts = void 0, this.viewerChunk = null, this.viewer = null;
        const {
          client: JR
        } = RR;
        this.recorder = new Qt({
          client: JR,
          live: () => {
            var RR;
            return !0 !== (null === (RR = this.viewer) || void 0 === RR ? void 0 : RR.inPlayback)
          },
          viewerOpen: RR.viewerOpen,
          notify: RR.notify,
          download: JR => {
            var GR;
            null === (GR = RR.download) || void 0 === GR || GR.call(RR, JR)
          },
          onState: RR.onRecorderState,
          onSaveState: RR.onSaveState
        }), this.parts = new Ru(JR, {
          fileReady: (RR, JR, GR) => {
            var yR;
            JR === wR.dd.Edited ? null === (yR = this.viewer) || void 0 === yR || yR.saveDone(GR) : this.recorder.fileReady(JR, GR)
          },
          fileIncomplete: (RR, JR) => {
            this.saveFailed(JR)
          }
        });
        const GR = {
          replayFailed: RR => {
            var JR;
            null === (JR = this.viewer) || void 0 === JR || JR.onFailed(RR)
          },
          replayOption: JR => {
            var GR;
            null === (GR = RR.onReplayOption) || void 0 === GR || GR.call(RR, JR)
          },
          replayUiEvent: JR => {
            var GR;
            null === (GR = RR.onReplayUiEvent) || void 0 === GR || GR.call(RR, JR)
          },
          filePart: (RR, JR, GR) => {
            this.parts.onPart(RR, JR, GR)
          },
          fileReady: RR => {
            this.parts.onReady(RR)
          },
          replayOpened: JR => {
            var GR;
            null === (GR = RR.onReplayOpened) || void 0 === GR || GR.call(RR, JR)
          },
          recorderEvent: RR => {
            var JR;
            switch (RR.what) {
              case wR.Vc.FileDiscarded:
                this.parts.onDiscarded(RR.save);
                break;
              case wR.Vc.SaveFailed:
                this.saveFailed(RR.kind);
                break;
              case wR.Vc.SaveBusy:
                if (null !== (JR = this.viewer) && void 0 !== JR && JR.savePending) {
                  this.viewer.saveFailed(!0);
                  break
                }
                this.recorder.onEvent(RR);
                break;
              default:
                this.recorder.onEvent(RR)
            }
          }
        };
        this.sink = function(RR, JR) {
          return {
            onReplayEvent: st(RR, JR)
          }
        }(GR, RR.buffer), this.recorderEvents = ht(GR)
      }
      get currentViewer() {
        return this.viewer
      }
      loadViewer() {
        var RR;
        return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (RR = this.deps.loadViewer) && void 0 !== RR ? RR : Ju)().catch((RR => {
          throw this.viewerChunk = null, RR
        })), this.viewerChunk.then((RR => (this.viewer ??= new RR.ReplayViewer({
          client: this.deps.client,
          setHoldDraws: this.deps.setHoldDraws,
          meshPending: this.deps.meshPending,
          notify: this.deps.notify,
          onChange: () => {
            var RR, JR;
            null === (RR = (JR = this.deps).onViewerChange) || void 0 === RR || RR.call(JR)
          }
        }), this.viewer))))
      }
      activated(RR) {
        this.recorder.activated(RR)
      }
      afterFrame(RR) {
        try {
          RR > 0 && this.recorder.gK()
        } finally {
          var JR;
          null === (JR = this.viewer) || void 0 === JR || JR.afterFrame()
        }
      }
      end() {
        var RR;
        null === (RR = this.viewer) || void 0 === RR || RR.end()
      }
      saveFailed(RR) {
        var JR;
        RR === wR.dd.Edited ? null === (JR = this.viewer) || void 0 === JR || JR.saveFailed(!1) : this.recorder.failed(RR)
      }
    }
    var yu = GR(42145),
      tu = GR(42164),
      uu = GR(5692),
      Zu = GR(42457);
    class qu {
      constructor(RR) {
        this.deps = RR, this.analogue = [0, 0], this.keys = 0, this.unsent = !1
      }
      drag(RR, JR) {
        if (!this.deps.live() || 0 === RR && 0 === JR) return;
        const GR = (0, mR.s)(0, performance.now()),
          yR = this.deps.dragScale();
        (0, Zu.f)((() => {
          (0, mR.z)(wR.wb.MouseDown, 0, 0, 0, GR), (0, mR.z)(wR.wb.MouseMove, 0, RR * yR, JR * yR, 0), (0, mR.z)(wR.wb.MouseUp, 0, 0, 0, GR)
        }))
      }
      move(RR) {
        var JR, GR;
        this.analogue[0] = null !== (JR = null === RR || void 0 === RR ? void 0 : RR.x) && void 0 !== JR ? JR : 0, this.analogue[1] = null !== (GR = null === RR || void 0 === RR ? void 0 : RR.y) && void 0 !== GR ? GR : 0, this.send()
      }
      holdVertical(RR, JR) {
        const GR = "freeCamUp" === RR ? eR.Ub.Up : eR.Ub.Down;
        this.keys = JR ? this.keys | GR : this.keys & ~GR, this.send()
      }
      flush() {
        this.unsent && this.send()
      }
      send() {
        const RR = this.deps.live() ? this.deps.cmd() : null;
        this.unsent = null !== RR && !(0, eR.re)(RR, 0, this.analogue, this.keys)
      }
    }
    var iu = GR(4913),
      fu = GR(798),
      Vu = GR(289),
      Ku = GR(103),
      wu = GR(35067),
      ru = GR(781),
      eu = GR(10234);

    function au() {
      const RR = yR.d.get("clientEscMenuOptions"),
        JR = (0, fu.x)(RR);
      return {
        mouse: (0, Ku.isMobile)() ? JR : RR.mouseSensitivity,
        touch: JR,
        fovPercent: RR.cameraFOV
      }
    }

    function Lu() {
      const RR = yR.d.get("clientEscMenuOptions"),
        JR = yR.d.get("isTouchScreen") ? (0, fu.x)(RR) : RR.mouseSensitivity,
        GR = au().mouse;
      return GR > 0 ? JR / GR : 1
    }

    function nu(RR) {
      const JR = () => {
        RR.setSoundPrefs(yR.d.get("soundVolume"), yR.d.get("soundOnFromAd"))
      };
      let GR = null;
      const tR = () => {
        const {
          showFog: JR,
          enableLighting: tR,
          fogChunkDistance: uR,
          chunkFadeIn: ZR
        } = yR.d.get("clientEscMenuOptions"), qR = {
          showFog: JR,
          lighting: tR,
          fogChunks: uR,
          chunkFade: ZR,
          cellLight: (0, iu.k)("cellLight") ? (0, iu.k)("cellLightUnlit") ? "all" : "lit" : "off"
        };
        GR && (0, wR.ie)(GR) === (0, wR.ie)(qR) && GR.fogChunks === uR || (GR = qR, RR.setEnvPrefs(GR))
      };
      let uR = null;
      const qR = () => {
        const JR = function() {
          const RR = yR.d.get("clientEscMenuOptions");
          return {
            nametagsHidden: yR.d.get("areNametagsHidden"),
            crouchToggle: RR.crouchIsToggle,
            bhopDisabled: RR.disableBunnyHopping,
            disableBobbing: RR.disableBobbing,
            ezTowering: RR.ezTowering ? (0, Vu.e)() : null,
            ezBridging: RR.ezBridging,
            showChunkBorders: RR.showChunkBorders,
            touchWalk: !(0, eu.g)(),
            edgeGuard: RR.touchEdgeGuard,
            edgeGuardLong: (0, ru.b)(),
            nametagCutDistance: (0, wu.h)()
          }
        }();
        (0, gR.fe)(uR, JR) || (uR = JR, RR.setUiPrefs(JR))
      };
      let iR = null;
      const fR = () => {
        const JR = au();
        (0, gR.fe)(iR, JR) || (iR = JR, RR.setLookPrefs(JR))
      };
      JR(), tR(), qR(), fR();
      const VR = [(0, ZR.q)("appManagerUpdated|soundVolume", JR), (0, ZR.q)("appManagerUpdated|soundOnFromAd", JR), (0, ZR.q)("appManagerUpdated|clientEscMenuOptions", (() => {
        tR(), qR(), fR()
      })), (0, ZR.q)(eu.d, qR), (0, ZR.q)("appManagerUpdated|enabledDebugFeatures", tR), (0, ZR.q)("appManagerUpdated|areNametagsHidden", qR), (0, ZR.q)("appManagerUpdated|showDistantNametags", qR)];
      return () => {
        for (const RR of VR) RR()
      }
    }
    var Uu = GR(42444),
      Wu = GR(42449);
    var Au = (0, Wu.c)("lend"),
      Cu = (0, Wu.c)("starting"),
      Xu = (0, Wu.c)("generation"),
      Mu = (0, Wu.c)("end");
    class Bu {
      constructor(RR) {
        this.deps = RR, Object.defineProperty(this, Mu, {
          value: lu
        }), Object.defineProperty(this, Au, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Cu, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Xu, {
          writable: !0,
          value: 0
        })
      }
      get active() {
        return null !== (0, Uu.e)(this, Au)[Au] || (0, Uu.e)(this, Cu)[Cu]
      }
      async start(RR) {
        if (this.active) return "busy";
        const JR = (0, Uu.e)(this, Xu)[Xu];
        (0, Uu.e)(this, Cu)[Cu] = !0;
        try {
          if (!await this.deps.ensureLoaded()) return "refused"
        } finally {
          (0, Uu.e)(this, Cu)[Cu] = !1
        }
        if (JR !== (0, Uu.e)(this, Xu)[Xu]) return "refused";
        const GR = this.deps.beginSave();
        if (!GR) return "refused";
        const yR = Number(BigInt.asUintN(32, RR)),
          tR = Number(BigInt.asUintN(32, RR >> 32n));
        let uR = "refused";
        return this.deps.recorderCall(((RR, JR) => {
          const ZR = GR.editState,
            qR = RR.stage(ZR.length);
          0 !== qR ? (new Uint8Array(JR.buffer, qR, ZR.length).set(ZR), RR.LZR(GR.headLen, yR, tR) && (uR = "sealing")) : uR = "tooLarge"
        }), !0), "sealing" !== uR ? (GR.end(), uR) : ((0, Uu.e)(this, Au)[Au] = GR, "sealing")
      }
      beforeRecorderStep() {
        const RR = (0, Uu.e)(this, Au)[Au];
        if (!RR) return null;
        let JR = -1,
          GR = 0;
        if (!this.deps.recorderCall((RR => {
            JR = RR.nZR(), JR > 0 && (GR = RR.UZR())
          }))) return (0, Uu.e)(this, Mu)[Mu](RR, "stopped");
        if (JR < 0) return (0, Uu.e)(this, Mu)[Mu](RR, "read");
        if (0 === JR) return null;
        const yR = RR.head(GR, JR);
        let tR = !1;
        if (yR && this.deps.recorderCall(((RR, GR) => {
            const uR = RR.stage(JR);
            0 !== uR && (new Uint8Array(GR.buffer, uR, JR).set(yR), tR = !0)
          }), !0), tR) return null;
        const uR = RR.givenUp();
        this.deps.recorderCall((RR => {
          RR.WZR()
        }));
        const ZR = (0, Uu.e)(this, Mu)[Mu](RR, uR ? "givenUp" : "stopped");
        return uR && this.deps.givenUp("Reopen the replay you were editing to make your edits again, as they weren't saved when another replay opened."), ZR
      }
      stop() {
        (0, Uu.e)(this, Xu)[Xu]++;
        const RR = (0, Uu.e)(this, Au)[Au];
        RR && (this.deps.recorderCall((RR => {
          RR.WZR()
        })), (0, Uu.e)(this, Mu)[Mu](RR, "stopped"))
      }
    }

    function lu(RR, JR) {
      return (0, Uu.e)(this, Au)[Au] = null, RR.end(), JR
    }

    function pu(RR, JR) {
      const GR = new Uint8Array(4),
        yR = new DataView(GR.buffer);
      return yR.setUint8(0, RR ? 1 : 0), yR.setUint16(2, Math.max(0, Math.min(65535, Math.round(JR))), !0), GR
    }

    function gu(RR, JR) {
      return RR > function(RR) {
        return 16777216 + 314572.8 * Math.max(0, RR)
      }(JR) + 33554432
    }
    let bu = null;

    function vu(RR) {
      return bu ??= async function(RR) {
        const JR = RR.loadInFlight();
        JR && await JR.catch((() => {}));
        if (RR.trapped()) return "trapped";
        if (RR.busy() || !gu(RR.memoryBytes(), RR.clipSeconds())) return "tK";
        RR.unload();
        let GR = !1;
        try {
          GR = await RR.load()
        } catch {
          GR = !1
        }
        if (!GR) return RR.trapped() ? "trapped" : RR.He() ? "He" : "failed";
        return "recycled"
      }(RR).finally((() => {
        bu = null
      })), bu
    }
    const Ou = "Replay recording couldn't load, so try again.",
      xu = "Replay recording stopped working, so reload the page to record replays again.",
      Nu = new Set([wR.Wc.ToggleRecording, wR.Wc.SaveClip]);
    var Du = (0, Wu.c)("bindings"),
      Hu = (0, Wu.c)("module"),
      ou = (0, Wu.c)("memory"),
      cu = (0, Wu.c)("trapped"),
      Pu = (0, Wu.c)("He"),
      Iu = (0, Wu.c)("recycleDue"),
      mu = (0, Wu.c)("loading"),
      zu = (0, Wu.c)("generation"),
      Su = (0, Wu.c)("viewDrawn"),
      ju = (0, Wu.c)("clip"),
      du = (0, Wu.c)("session"),
      Eu = (0, Wu.c)("control"),
      Yu = (0, Wu.c)("deferred"),
      ku = (0, Wu.c)("coreU8"),
      Qu = (0, Wu.c)("coreU32"),
      Fu = (0, Wu.c)("moduleU8"),
      Tu = (0, Wu.c)("edited"),
      su = (0, Wu.c)("sendSession"),
      hu = (0, Wu.c)("checkNotInEvents"),
      RZ = (0, Wu.c)("clipping"),
      JZ = (0, Wu.c)("busy"),
      GZ = (0, Wu.c)("use"),
      yZ = (0, Wu.c)("ensureLoaded"),
      tZ = (0, Wu.c)("loadOnce"),
      uZ = (0, Wu.c)("recycleAfterStep"),
      ZZ = (0, Wu.c)("settleRecycle"),
      qZ = (0, Wu.c)("load"),
      iZ = (0, Wu.c)("attach"),
      fZ = (0, Wu.c)("resendHeld"),
      VZ = (0, Wu.c)("recycle"),
      KZ = (0, Wu.c)("send"),
      wZ = (0, Wu.c)("unload"),
      rZ = (0, Wu.c)("dropModule"),
      eZ = (0, Wu.c)("coreBytes"),
      aZ = (0, Wu.c)("coreWords"),
      LZ = (0, Wu.c)("moduleBytes"),
      nZ = (0, Wu.c)("loadFailed"),
      UZ = (0, Wu.c)("call"),
      WZ = (0, Wu.c)("guard"),
      AZ = (0, Wu.c)("trapOn");
    class CZ {
      constructor(RR) {
        this.deps = RR, Object.defineProperty(this, AZ, {
          value: EZ
        }), Object.defineProperty(this, WZ, {
          value: dZ
        }), Object.defineProperty(this, UZ, {
          value: jZ
        }), Object.defineProperty(this, nZ, {
          value: SZ
        }), Object.defineProperty(this, LZ, {
          value: zZ
        }), Object.defineProperty(this, aZ, {
          value: mZ
        }), Object.defineProperty(this, eZ, {
          value: IZ
        }), Object.defineProperty(this, rZ, {
          value: PZ
        }), Object.defineProperty(this, wZ, {
          value: cZ
        }), Object.defineProperty(this, KZ, {
          value: oZ
        }), Object.defineProperty(this, VZ, {
          value: HZ
        }), Object.defineProperty(this, fZ, {
          value: DZ
        }), Object.defineProperty(this, iZ, {
          value: NZ
        }), Object.defineProperty(this, qZ, {
          value: xZ
        }), Object.defineProperty(this, ZZ, {
          value: OZ
        }), Object.defineProperty(this, uZ, {
          value: vZ
        }), Object.defineProperty(this, tZ, {
          value: bZ
        }), Object.defineProperty(this, yZ, {
          value: gZ
        }), Object.defineProperty(this, GZ, {
          value: pZ
        }), Object.defineProperty(this, JZ, {
          value: lZ
        }), Object.defineProperty(this, RZ, {
          value: BZ
        }), Object.defineProperty(this, hu, {
          value: MZ
        }), Object.defineProperty(this, su, {
          value: XZ
        }), Object.defineProperty(this, Du, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Hu, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ou, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, cu, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Pu, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Iu, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, mu, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, zu, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, Su, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, ju, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, du, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Eu, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Yu, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ku, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Qu, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Fu, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Tu, {
          writable: !0,
          value: void 0
        }), (0, Uu.e)(this, Tu)[Tu] = new Bu({
          ensureLoaded: () => (0, Uu.e)(this, yZ)[yZ](),
          recorderCall: (RR, JR) => {
            JR && (0, Uu.e)(this, hu)[hu]("an edited save's stage");
            const GR = (0, Uu.e)(this, UZ)[UZ](((JR, GR) => (RR(JR, GR), !0)));
            return null !== GR && void 0 !== GR && GR
          },
          beginSave: RR.beginSave,
          givenUp: RR.givenUp
        })
      }
      get active() {
        return null !== (0, Uu.e)(this, Hu)[Hu]
      }
      get trapped() {
        return (0, Uu.e)(this, cu)[cu]
      }
      get loading() {
        return null !== (0, Uu.e)(this, mu)[mu]
      }
      prefetch() {
        (0, Uu.e)(this, Pu)[Pu] || (0, Uu.e)(this, cu)[cu] || (0, Uu.e)(this, Hu)[Hu] || (0, Uu.e)(this, mu)[mu] || this.deps.prefetch()
      }
      viewDrawn() {
        (0, Uu.e)(this, Su)[Su] = !0, (0, Uu.e)(this, RZ)[RZ]() && (0, Uu.e)(this, GZ)[GZ]()
      }
      prefs(RR, JR) {
        (0, Uu.e)(this, ju)[ju] = {
          on: RR,
          seconds: JR
        }, (0, Uu.e)(this, KZ)[KZ](wR.Uc.Prefs, pu(RR, JR)), RR && (0, Uu.e)(this, Su)[Su] && (0, Uu.e)(this, GZ)[GZ]()
      }
      control(RR) {
        const JR = function(RR) {
          return new Uint8Array([RR, 0, 0, 0])
        }(RR);
        if (Nu.has(RR)) {
          if (!(0, Uu.e)(this, cu)[cu]) return (0, Uu.e)(this, Hu)[Hu] ? void(0, Uu.e)(this, KZ)[KZ](wR.Uc.Control, JR) : ((0, Uu.e)(this, Eu)[Eu] = JR, void(0, Uu.e)(this, GZ)[GZ]());
          this.deps.failed(xu)
        } else(0, Uu.e)(this, Pu)[Pu] || this.deps.coreCommand(wR.Uc.Control, JR)
      }
      session(RR) {
        (0, Uu.e)(this, du)[du] = RR, (0, Uu.e)(this, su)[su](RR)
      }
      filePartDone(RR, JR) {
        (0, Uu.e)(this, KZ)[KZ](wR.Uc.FilePartDone, function(RR, JR) {
          const GR = new Uint8Array(8),
            yR = new DataView(GR.buffer);
          return yR.setUint32(0, RR, !0), yR.setUint32(4, JR, !0), GR
        }(RR, JR))
      }
      fileDone(RR) {
        return (0, Uu.e)(this, KZ)[KZ](wR.Uc.FileDone, function(RR) {
          const JR = new Uint8Array(4);
          return new DataView(JR.buffer).setUint32(0, RR, !0), JR
        }(RR)), (0, Uu.e)(this, uZ)[uZ]()
      }
      saveEdited(RR) {
        return (0, Uu.e)(this, hu)[hu]("saveEdited"), (0, Uu.e)(this, Tu)[Tu].start(RR)
      }
      afterFrame() {
        if (!(0, Uu.e)(this, Hu)[Hu]) return;
        "read" === (0, Uu.e)(this, Tu)[Tu].beforeRecorderStep() && (0, Uu.e)(this, uZ)[uZ]();
        const RR = (0, Uu.e)(this, Iu)[Iu];
        (0, Uu.e)(this, Iu)[Iu] = null;
        const JR = (0, Uu.e)(this, Hu)[Hu],
          GR = (0, Uu.e)(this, ou)[ou];
        if (!JR || !GR) return void(null === RR || void 0 === RR || RR.resolve((0, Uu.e)(this, cu)[cu] ? "trapped" : "tK"));
        const {
          core: yR
        } = this.deps, tR = yR.XZR(2);
        let uR, ZR, qR, iR, fR = 0,
          VR = 0;
        if (0 !== tR) {
          var KR, wR;
          const RR = (0, Uu.e)(this, aZ)[aZ]();
          fR = null !== (KR = RR[tR >>> 2]) && void 0 !== KR ? KR : 0, VR = null !== (wR = RR[1 + (tR >>> 2)]) && void 0 !== wR ? wR : 0
        }
        try {
          if (VR > 0) {
            const RR = JR.feed(VR);
            0 !== RR && (0, Uu.e)(this, LZ)[LZ](GR).set((0, Uu.e)(this, eZ)[eZ]().subarray(fR, fR + VR), RR)
          }
          uR = JR.step(), ZR = JR.MZR(), qR = JR.BZR(), iR = JR.lZR()
        } catch (rR) {
          if (!(0, Uu.e)(this, AZ)[AZ](rR)) throw null === RR || void 0 === RR || RR.resolve("tK"), rR;
          return void(null === RR || void 0 === RR || RR.resolve("trapped"))
        }
        if (uR > 0) {
          const RR = yR.pZR(2, uR);
          0 !== RR && (0, Uu.e)(this, eZ)[eZ]().set((0, Uu.e)(this, LZ)[LZ](GR).subarray(ZR, ZR + uR), RR)
        }
        if (qR > 0) {
          (0, Uu.e)(this, Yu)[Yu] = [];
          try {
            this.deps.events(new Uint8Array(GR.buffer, iR, qR), GR)
          } catch (rR) {
            throw null === RR || void 0 === RR || RR.resolve("tK"), rR
          } finally {
            const RR = (0, Uu.e)(this, Yu)[Yu];
            (0, Uu.e)(this, Yu)[Yu] = null;
            for (const [JR, GR] of RR)(0, Uu.e)(this, KZ)[KZ](JR, GR)
          }
        }
        if (!(0, Uu.e)(this, RZ)[RZ]() && !(0, Uu.e)(this, JZ)[JZ]()) return (0, Uu.e)(this, wZ)[wZ](), void(null === RR || void 0 === RR || RR.resolve("tK"));
        null === RR || void 0 === RR || RR.resolve((0, Uu.e)(this, VZ)[VZ]())
      }
      dispose() {
        (0, Uu.e)(this, Pu)[Pu] = !0, (0, Uu.e)(this, wZ)[wZ]()
      }
    }

    function XZ(RR) {
      (0, Uu.e)(this, KZ)[KZ](wR.Uc.Session, function(RR) {
        const JR = new TextEncoder,
          GR = JR.encode(RR.game).subarray(0, 65535),
          yR = JR.encode(RR.lobby).subarray(0, 65535),
          tR = new Uint8Array(22 + GR.length + 2 + yR.length),
          uR = new DataView(tR.buffer);
        uR.setFloat64(0, RR.unixMs, !0), uR.setBigUint64(8, BigInt.asUintN(64, RR.session), !0), uR.setUint8(16, RR.lobbyType);
        let ZR = 20;
        for (const qR of [GR, yR]) uR.setUint16(ZR, qR.length, !0), tR.set(qR, ZR + 2), ZR += 2 + qR.length;
        return tR
      }({
        ...RR,
        unixMs: this.deps.unixNow()
      }))
    }

    function MZ(RR) {
      false
    }

    function BZ() {
      var RR, JR;
      return null !== (RR = null === (JR = (0, Uu.e)(this, ju)[ju]) || void 0 === JR ? void 0 : JR.on) && void 0 !== RR && RR
    }

    function lZ() {
      const RR = (0, Uu.e)(this, Hu)[Hu];
      let JR = !0;
      if (RR) try {
        JR = RR.busy()
      } catch (GR) {
        if (!(0, Uu.e)(this, AZ)[AZ](GR)) throw GR
      }
      return JR || (0, Uu.e)(this, Tu)[Tu].active
    }
    async function pZ() {
      !(0, Uu.e)(this, Pu)[Pu] && this.deps.allowed() ? await (0, Uu.e)(this, yZ)[yZ]() : (0, Uu.e)(this, Eu)[Eu] = null
    }

    function gZ() {
      return (0, Uu.e)(this, cu)[cu] || (0, Uu.e)(this, Pu)[Pu] ? Promise.resolve(!1) : (0, Uu.e)(this, Hu)[Hu] ? Promise.resolve(!0) : ((0, Uu.e)(this, mu)[mu] ??= (0, Uu.e)(this, tZ)[tZ](), (0, Uu.e)(this, mu)[mu])
    }
    async function bZ() {
      let RR = !1;
      try {
        return RR = await (0, Uu.e)(this, qZ)[qZ](), RR
      } finally {
        RR || ((0, Uu.e)(this, Eu)[Eu] = null), (0, Uu.e)(this, mu)[mu] = null
      }
    }

    function vZ() {
      if (!(0, Uu.e)(this, Hu)[Hu]) return Promise.resolve((0, Uu.e)(this, cu)[cu] ? "trapped" : "tK");
      if (!(0, Uu.e)(this, Iu)[Iu]) {
        let RR = () => {};
        const JR = new Promise((JR => {
          RR = JR
        }));
        (0, Uu.e)(this, Iu)[Iu] = {
          promise: JR,
          resolve: RR
        }
      }
      return (0, Uu.e)(this, Iu)[Iu].promise
    }

    function OZ(RR) {
      const JR = (0, Uu.e)(this, Iu)[Iu];
      (0, Uu.e)(this, Iu)[Iu] = null, null === JR || void 0 === JR || JR.resolve(RR)
    }
    async function xZ() {
      let RR = (0, Uu.e)(this, Du)[Du];
      if (!RR) {
        const JR = (0, Uu.e)(this, zu)[zu];
        try {
          RR = await this.deps.load()
        } catch (GR) {
          return JR === (0, Uu.e)(this, zu)[zu] && await (0, Uu.e)(this, nZ)[nZ](GR), !1
        }
        if (JR !== (0, Uu.e)(this, zu)[zu]) return this.deps.unload(), !1;
        const yR = RR,
          tR = (0, Uu.e)(this, WZ)[WZ]((() => yR.gZR()));
        if (void 0 === tR) return !1;
        const uR = this.deps.core.bZR();
        if (tR !== uR) return await (0, Uu.e)(this, nZ)[nZ](new Error(`recorder port version ${tR}, the core's ${uR}`)), !1;
        (0, Uu.e)(this, Du)[Du] = RR
      }
      const JR = RR;
      try {
        if (!(0, Uu.e)(this, WZ)[WZ]((() => ((0, Uu.e)(this, Hu)[Hu] = new JR.vZR, (0, Uu.e)(this, ou)[ou] = JR.AZR(), !0)))) return !1;
        (0, Uu.e)(this, fZ)[fZ]();
        const RR = (0, Uu.e)(this, Eu)[Eu];
        return (0, Uu.e)(this, Eu)[Eu] = null, RR && (0, Uu.e)(this, KZ)[KZ](wR.Uc.Control, RR), (0, Uu.e)(this, iZ)[iZ]()
      } catch (GR) {
        return (0, Uu.e)(this, wZ)[wZ](), await (0, Uu.e)(this, nZ)[nZ](GR), !1
      }
    }

    function NZ() {
      return this.deps.core.OZR(0), 1 === this.deps.core.OZR(1) || ((0, Uu.e)(this, wZ)[wZ](), this.deps.failed(Ou), !1)
    }

    function DZ() {
      (0, Uu.e)(this, ju)[ju] && (0, Uu.e)(this, KZ)[KZ](wR.Uc.Prefs, pu((0, Uu.e)(this, ju)[ju].on, (0, Uu.e)(this, ju)[ju].seconds)), (0, Uu.e)(this, du)[du] && (0, Uu.e)(this, su)[su]((0, Uu.e)(this, du)[du])
    }

    function HZ() {
      return vu({
        memoryBytes: this.deps.memoryBytes,
        clipSeconds: () => {
          var RR, JR;
          return null !== (RR = null === (JR = (0, Uu.e)(this, ju)[ju]) || void 0 === JR ? void 0 : JR.seconds) && void 0 !== RR ? RR : 0
        },
        trapped: () => (0, Uu.e)(this, cu)[cu],
        busy: () => (0, Uu.e)(this, JZ)[JZ](),
        loadInFlight: () => (0, Uu.e)(this, mu)[mu],
        He: () => (0, Uu.e)(this, Pu)[Pu],
        unload: () => {
          (0, Uu.e)(this, wZ)[wZ]()
        },
        load: () => (0, Uu.e)(this, yZ)[yZ]()
      })
    }

    function oZ(RR, JR) {
      (0, Uu.e)(this, Yu)[Yu] ? (0, Uu.e)(this, Yu)[Yu].push([RR, JR]): (0, Uu.e)(this, UZ)[UZ](((GR, yR) => {
        const tR = GR.CZR(JR.length);
        0 !== tR && (new Uint8Array(yR.buffer, tR, JR.length).set(JR), GR.command(RR, JR.length))
      }))
    }

    function cZ() {
      (0, Uu.e)(this, zu)[zu]++, (0, Uu.e)(this, ZZ)[ZZ]("tK"), (0, Uu.e)(this, Tu)[Tu].stop(), this.deps.core.OZR(0), (0, Uu.e)(this, rZ)[rZ](), (0, Uu.e)(this, cu)[cu] || ((0, Uu.e)(this, Du)[Du] = null, this.deps.unload())
    }

    function PZ() {
      (0, Uu.e)(this, UZ)[UZ]((RR => {
        RR.free()
      })), (0, Uu.e)(this, Hu)[Hu] = null, (0, Uu.e)(this, ou)[ou] = null, (0, Uu.e)(this, Fu)[Fu] = null
    }

    function IZ() {
      var RR;
      const JR = this.deps.coreBuffer();
      return (null === (RR = (0, Uu.e)(this, ku)[ku]) || void 0 === RR ? void 0 : RR.buffer) !== JR && ((0, Uu.e)(this, ku)[ku] = new Uint8Array(JR)), (0, Uu.e)(this, ku)[ku]
    }

    function mZ() {
      var RR;
      const JR = this.deps.coreBuffer();
      return (null === (RR = (0, Uu.e)(this, Qu)[Qu]) || void 0 === RR ? void 0 : RR.buffer) !== JR && ((0, Uu.e)(this, Qu)[Qu] = new Uint32Array(JR, 0, JR.byteLength >>> 2)), (0, Uu.e)(this, Qu)[Qu]
    }

    function zZ(RR) {
      var JR;
      const GR = RR.buffer;
      return (null === (JR = (0, Uu.e)(this, Fu)[Fu]) || void 0 === JR ? void 0 : JR.buffer) !== GR && ((0, Uu.e)(this, Fu)[Fu] = new Uint8Array(GR)), (0, Uu.e)(this, Fu)[Fu]
    }
    async function SZ(RR) {
      await this.deps.staleOr(RR, (() => {
        this.deps.failed(Ou)
      }))
    }

    function jZ(RR) {
      const JR = (0, Uu.e)(this, Hu)[Hu],
        GR = (0, Uu.e)(this, ou)[ou];
      if (JR && GR) return (0, Uu.e)(this, WZ)[WZ]((() => RR(JR, GR)))
    }

    function dZ(RR) {
      if (!(0, Uu.e)(this, cu)[cu]) try {
        return RR()
      } catch (JR) {
        if (!(0, Uu.e)(this, AZ)[AZ](JR)) throw JR;
        return
      }
    }

    function EZ(RR) {
      return RR instanceof WebAssembly.RuntimeError && ((0, Uu.e)(this, cu)[cu] = !0, (0, Uu.e)(this, Hu)[Hu] = null, (0, Uu.e)(this, ou)[ou] = null, (0, Uu.e)(this, Fu)[Fu] = null, (0, Uu.e)(this, Du)[Du] = null, (0, Uu.e)(this, Eu)[Eu] = null, (0, Uu.e)(this, ZZ)[ZZ]("trapped"), this.deps.core.OZR(0), (0, Uu.e)(this, Tu)[Tu].stop(), this.deps.crash(this.deps.markTrapped(RR)), this.deps.failed(xu), !0)
    }
    var YZ = GR(39889);
    const kZ = new Map([
      ["skyblock", () => GR.e(60).then((() => GR(39880)))]
    ]);

    function QZ(RR) {
      const JR = kZ.get(RR);
      return JR ? JR().then((() => {
        const JR = (0, YZ.d)(RR);
        if (!JR) throw new Error(`${RR}'s replay hook module registered no hook`);
        return JR
      })) : null
    }
    class FZ {
      constructor(RR) {
        this.deps = RR, this.game = null, this.hook = null, this.generation = 0, this.all = !1, this.pending = new Map, this.ids = new Int32Array(64)
      }
      get wantsWatch() {
        return null !== this.hook
      }
      opened(RR) {
        if (this.pending.clear(), RR === this.game && null !== this.hook) return void(this.all = !0);
        const JR = ++this.generation;
        this.game = RR, this.hook = null, this.all = !1;
        const GR = this.deps.loadHook(RR);
        null === GR || void 0 === GR || GR.then((RR => {
          JR === this.generation && (this.hook = RR, this.all = !0)
        }), (RR => {
          JR === this.generation && this.deps.onError(RR)
        }))
      }
      ended() {
        this.generation++, this.game = null, this.hook = null, this.all = !1, this.pending.clear()
      }
      entityAdded(RR) {
        null === this.hook || this.all || this.pending.set(RR, !0)
      }
      entityInfoChanged(RR) {
        null === this.hook || this.all || this.pending.has(RR) || this.pending.set(RR, !1)
      }
      flush(RR) {
        const {
          hook: JR
        } = this;
        if (null === JR || !RR || !this.all && 0 === this.pending.size) return;
        const GR = this.deps.cmd();
        if (null === GR) return;
        const {
          api: yR
        } = this.deps;
        if (this.all) {
          this.all = !1, this.pending.clear();
          const {
            ids: RR,
            count: JR
          } = hG(yR, this.ids);
          this.ids = RR;
          for (let GR = 0; GR < JR; GR++) this.pending.set(RR[GR], !0)
        }
        const tR = this.ids = Ry(this.ids, this.pending.size);
        let uR = 0;
        for (const fR of this.pending.keys()) tR[uR++] = fR;
        const ZR = [],
          qR = Jy(yR, tR, uR, ((RR, JR) => {
            null !== JR && ZR.push({
              serverId: RR,
              info: JR,
              spawned: !0 === this.pending.get(RR)
            })
          }));
        if (qR) {
          this.pending.clear();
          for (const {
              serverId: RR,
              info: yR,
              spawned: tR
            }
            of ZR) try {
            JR(yR, {
              setFacingTolerance: JR => {
                null === JR && tR || CG(GR, RR, JR) || this.pending.set(RR, tR)
              }
            })
          } catch (iR) {
            this.deps.onError(iR)
          }
        }
      }
    }
    var TZ = (0, Wu.c)("bindings"),
      sZ = (0, Wu.c)("module"),
      hZ = (0, Wu.c)("memory"),
      Rq = (0, Wu.c)("trapped"),
      Jq = (0, Wu.c)("generation"),
      Gq = (0, Wu.c)("loading"),
      yq = (0, Wu.c)("lend"),
      tq = (0, Wu.c)("givenUp"),
      uq = (0, Wu.c)("afterSave"),
      Zq = (0, Wu.c)("opens"),
      qq = (0, Wu.c)("saveAskedAt"),
      iq = (0, Wu.c)("unload"),
      fq = (0, Wu.c)("dropModule"),
      Vq = (0, Wu.c)("loadFailed"),
      Kq = (0, Wu.c)("saveReadsBody"),
      wq = (0, Wu.c)("command"),
      rq = (0, Wu.c)("call"),
      eq = (0, Wu.c)("guard"),
      aq = (0, Wu.c)("trapOn");
    class Lq {
      constructor(RR) {
        this.deps = RR, Object.defineProperty(this, aq, {
          value: Bq
        }), Object.defineProperty(this, eq, {
          value: Mq
        }), Object.defineProperty(this, rq, {
          value: Xq
        }), Object.defineProperty(this, wq, {
          value: Cq
        }), Object.defineProperty(this, Kq, {
          get: Aq,
          set: void 0
        }), Object.defineProperty(this, Vq, {
          value: Wq
        }), Object.defineProperty(this, fq, {
          value: Uq
        }), Object.defineProperty(this, iq, {
          value: nq
        }), Object.defineProperty(this, TZ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, sZ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, hZ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Rq, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Jq, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, Gq, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, yq, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, tq, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, uq, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Zq, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, qq, {
          writable: !0,
          value: null
        })
      }
      get active() {
        return null !== (0, Uu.e)(this, sZ)[sZ] && null === (0, Uu.e)(this, uq)[uq]
      }
      async open(RR, JR) {
        if ((0, Uu.e)(this, Rq)[Rq]) return wR.cd.ModuleTrap;
        let GR = (0, Uu.e)(this, TZ)[TZ];
        if (!GR) {
          const RR = (0, Uu.e)(this, Jq)[Jq];
          (0, Uu.e)(this, Gq)[Gq]++;
          try {
            GR = await this.deps.load()
          } catch (tR) {
            return (0, Uu.e)(this, Gq)[Gq]--, RR !== (0, Uu.e)(this, Jq)[Jq] ? "stopped" : (0, Uu.e)(this, Vq)[Vq](tR, JR)
          }
          if ((0, Uu.e)(this, Gq)[Gq]--, RR !== (0, Uu.e)(this, Jq)[Jq]) return (0, Uu.e)(this, TZ)[TZ] || 0 !== (0, Uu.e)(this, Gq)[Gq] || (0, Uu.e)(this, Rq)[Rq] || this.deps.unload(), "stopped";
          if ((0, Uu.e)(this, Rq)[Rq]) return wR.cd.ModuleTrap;
          const yR = GR.gZR(),
            uR = this.deps.core.bZR();
          if (yR !== uR) return (0, Uu.e)(this, Vq)[Vq](new Error(`replay port version ${yR}, the core's ${uR}`), JR);
          (0, Uu.e)(this, TZ)[TZ] = GR
        }
        if (!(0, Uu.e)(this, sZ)[sZ]) {
          const RR = GR;
          if (!(0, Uu.e)(this, eq)[eq]((() => {
              (0, Uu.e)(this, sZ)[sZ] = new RR.xZR, (0, Uu.e)(this, hZ)[hZ] = RR.NZR()
            }))) return wR.cd.ModuleTrap
        }
        let yR = !1;
        return (0, Uu.e)(this, rq)[rq](((JR, GR) => {
          null !== (0, Uu.e)(this, uq)[uq] && JR.step(0, 0);
          const tR = JR.stage(RR.length);
          0 !== tR && (new Uint8Array(GR.buffer, tR, RR.length).set(RR), JR.open(), (0, Uu.e)(this, tq)[tq] = (0, Uu.e)(this, yq)[yq], (0, Uu.e)(this, uq)[uq] = null, (0, Uu.e)(this, Zq)[Zq]++, yR = !0)
        })) ? yR ? "opening" : wR.cd.TooLarge : wR.cd.ModuleTrap
      }
      beforeFrame(RR) {
        const JR = (0, Uu.e)(this, sZ)[sZ],
          GR = (0, Uu.e)(this, hZ)[hZ];
        if (!JR || !GR || null !== (0, Uu.e)(this, uq)[uq]) return;
        const {
          core: yR
        } = this.deps, tR = yR.DZR(RR);
        if (tR < 0) return;
        const uR = Math.floor(tR);
        let ZR, qR;
        try {
          ZR = JR.step(uR, tR - uR), qR = JR.MZR()
        } catch (fR) {
          return void(0, Uu.e)(this, aq)[aq](fR)
        }
        const iR = yR.pZR(1, ZR);
        if (0 === iR) {
          const RR = (0, Uu.e)(this, rq)[rq]((RR => {
            RR.close()
          }));
          if (!RR) return;
          return (0, Uu.e)(this, Kq)[Kq] ? (0, Uu.e)(this, uq)[uq] = "drop" : (0, Uu.e)(this, fq)[fq](), void yR.oZR(wR.cd.Port)
        }
        new Uint8Array(this.deps.coreBuffer(), iR, ZR).set(new Uint8Array(GR.buffer, qR, ZR))
      }
      play() {
        (0, Uu.e)(this, wq)[wq]((RR => {
          RR.play()
        }))
      }
      pause() {
        (0, Uu.e)(this, wq)[wq]((RR => {
          RR.pause()
        }))
      }
      seek(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, Uu.e)(this, wq)[wq]((GR => {
          GR.seek(RR, JR)
        }))
      }
      setMark(RR, JR) {
        return (0, Uu.e)(this, wq)[wq]((GR => {
          GR.cZR(RR, JR)
        }))
      }
      addKeyframe(RR, JR) {
        return (0, Uu.e)(this, wq)[wq]((GR => {
          GR.PZR(RR[0], RR[1], RR[2], JR[0], JR[1], JR[2])
        }))
      }
      setKeyframe(RR, JR) {
        return (0, Uu.e)(this, wq)[wq]((GR => {
          GR.IZR(RR, JR)
        }))
      }
      moveKeyframe(RR, JR) {
        return (0, Uu.e)(this, wq)[wq]((GR => {
          GR.mZR(RR, JR)
        }))
      }
      deleteKeyframes(RR, JR) {
        return (0, Uu.e)(this, wq)[wq]((GR => {
          GR.zZR(RR, JR)
        }))
      }
      crop(RR, JR) {
        return null === (0, Uu.e)(this, yq)[yq] && (0, Uu.e)(this, wq)[wq]((GR => {
          GR.crop(RR, JR)
        }))
      }
      beginSave() {
        const RR = (0, Uu.e)(this, qq)[qq];
        if ((0, Uu.e)(this, qq)[qq] = null, null !== RR && RR !== (0, Uu.e)(this, Zq)[Zq]) return null;
        let JR = 0,
          GR = null;
        if ((0, Uu.e)(this, rq)[rq](((RR, yR) => {
            JR = RR.save(), 0 !== JR && (GR = new Uint8Array(yR.buffer, RR.SZR(), RR.jZR()).slice())
          })), 0 === JR || !GR) return null;
        const yR = {
          headLen: JR,
          editState: GR,
          givenUp: () => (0, Uu.e)(this, tq)[tq] === yR,
          head: (RR, JR) => {
            if ((0, Uu.e)(this, yq)[yq] !== yR || !(0, Uu.e)(this, Kq)[Kq]) return null;
            let GR = null;
            return (0, Uu.e)(this, rq)[rq](((yR, tR) => {
              const uR = yR.dZR();
              0 !== uR && RR >= 0 && JR >= 0 && RR + JR <= uR && (GR = new Uint8Array(tR.buffer, yR.EZR() + RR, JR))
            })), GR
          },
          end: () => {
            if ((0, Uu.e)(this, yq)[yq] !== yR) return;
            (0, Uu.e)(this, yq)[yq] = null, (0, Uu.e)(this, tq)[tq] = null, (0, Uu.e)(this, rq)[rq]((RR => {
              RR.YZR()
            }));
            const RR = (0, Uu.e)(this, uq)[uq];
            (0, Uu.e)(this, uq)[uq] = null, "unload" === RR ? (0, Uu.e)(this, iq)[iq]() : "drop" === RR && (0, Uu.e)(this, fq)[fq]()
          }
        };
        return (0, Uu.e)(this, yq)[yq] = yR, yR
      }
      askSave() {
        (0, Uu.e)(this, qq)[qq] = (0, Uu.e)(this, Zq)[Zq]
      }
      setSpeed(RR) {
        (0, Uu.e)(this, wq)[wq]((JR => {
          JR.kZR(RR)
        }))
      }
      setCameraMode(RR) {
        (0, Uu.e)(this, wq)[wq]((JR => {
          JR.QZR(RR)
        }))
      }
      close() {
        (0, Uu.e)(this, wq)[wq]((RR => {
          RR.close()
        }))
      }
      stop() {
        (0, Uu.e)(this, Jq)[Jq]++, (0, Uu.e)(this, Kq)[Kq] && ((0, Uu.e)(this, rq)[rq]((RR => {
          RR.close()
        })), (0, Uu.e)(this, sZ)[sZ]) ? (0, Uu.e)(this, uq)[uq] = "unload" : (0, Uu.e)(this, iq)[iq]()
      }
    }

    function nq() {
      (0, Uu.e)(this, fq)[fq](), (0, Uu.e)(this, Rq)[Rq] || ((0, Uu.e)(this, TZ)[TZ] = null, this.deps.unload())
    }

    function Uq() {
      (0, Uu.e)(this, rq)[rq]((RR => {
        RR.free()
      })), (0, Uu.e)(this, sZ)[sZ] = null, (0, Uu.e)(this, hZ)[hZ] = null
    }
    async function Wq(RR, JR) {
      return await this.deps.staleOr(RR, (() => {}), {
        beforeReload: JR
      }) ? "reloading" : wR.cd.ModuleLoad
    }

    function Aq() {
      return null !== (0, Uu.e)(this, yq)[yq] && (0, Uu.e)(this, tq)[tq] !== (0, Uu.e)(this, yq)[yq]
    }

    function Cq(RR) {
      return null === (0, Uu.e)(this, uq)[uq] && (0, Uu.e)(this, rq)[rq](RR)
    }

    function Xq(RR) {
      const JR = (0, Uu.e)(this, sZ)[sZ],
        GR = (0, Uu.e)(this, hZ)[hZ];
      return !(!JR || !GR) && (0, Uu.e)(this, eq)[eq]((() => {
        RR(JR, GR)
      }))
    }

    function Mq(RR) {
      if ((0, Uu.e)(this, Rq)[Rq]) return !1;
      try {
        return RR(), !0
      } catch (JR) {
        return (0, Uu.e)(this, aq)[aq](JR), !1
      }
    }

    function Bq(RR) {
      if (!(RR instanceof WebAssembly.RuntimeError)) throw RR;
      (0, Uu.e)(this, Rq)[Rq] = !0, (0, Uu.e)(this, sZ)[sZ] = null, (0, Uu.e)(this, hZ)[hZ] = null, (0, Uu.e)(this, TZ)[TZ] = null, this.deps.crash(this.deps.markTrapped(RR)), this.deps.core.oZR(wR.cd.ModuleTrap)
    }
    var lq = GR(7596),
      pq = GR(42563);
    const gq = "[bloxd-wasm-client]";
    const bq = String(kt);

    function vq(RR) {
      return null === RR || RR === bq ? void 0 : RR
    }

    function Oq(RR) {
      var JR, GR, yR, tR, uR, qR, iR;
      switch (RR.what) {
        case wR.jd.FlyingText: {
          let JR;
          try {
            JR = JSON.parse(RR.contentJson)
          } catch (fR) {
            return void console.warn(`${gq} a replay's flying text isn't JSON`, fR)
          }
          ZR.n.JK("forceFlyingMiddleMessage", {
            content: JR,
            hu: RR.hu,
            angle: RR.angle,
            RZ: RR.RZ
          });
          break
        }
        case wR.jd.PlayerKilled:
          (0, pq.f)({
            kind: "killed",
            body: {
              deadEId: null !== (JR = vq(RR.dead)) && void 0 !== JR ? JR : "",
              killerEId: vq(RR.killer),
              withItem: null !== (GR = RR.withItem) && void 0 !== GR ? GR : "",
              killstreak: RR.killstreak
            }
          });
          break;
        case wR.jd.Killfeed:
          (0, pq.f)({
            kind: "custom",
            body: {
              killer: {
                eId: vq(RR.killerId),
                name: null !== (yR = RR.killerName) && void 0 !== yR ? yR : void 0,
                colour: null !== (tR = RR.killerColour) && void 0 !== tR ? tR : void 0
              },
              victim: {
                eId: vq(RR.victimId),
                name: null !== (uR = RR.victimName) && void 0 !== uR ? uR : void 0,
                colour: null !== (qR = RR.victimColour) && void 0 !== qR ? qR : void 0
              },
              withItem: null !== (iR = RR.withItem) && void 0 !== iR ? iR : ""
            }
          })
      }
    }
    const xq = "[bloxd-wasm-client]";

    function Nq(RR) {
      if (void 0 === RR || null === RR || "" === RR) return null;
      const JR = Number(RR);
      return Number.isInteger(JR) && JR > kt && JR <= 2147483647 ? JR : null
    }

    function Dq(RR) {
      return {
        id: Nq(RR.eId),
        name: "string" === typeof RR.name ? RR.name : null,
        colour: "string" === typeof RR.colour ? RR.colour : null
      }
    }

    function Hq(RR) {
      const JR = (0, tu.l)(qy.sc.PlayerKilled, (JR => {
          var GR, yR;
          const tR = (0, yu.k)(JR);
          if (!(0, yu.e)(tR)) return;
          const {
            deadEId: uR,
            killerEId: ZR,
            withItem: qR,
            killstreak: iR
          } = tR;
          RR.recordPlayerKilled(null !== (GR = Nq(uR)) && void 0 !== GR ? GR : kt, null !== (yR = Nq(ZR)) && void 0 !== yR ? yR : kt, "number" === typeof iR ? iR : 0, "string" === typeof qR ? qR : "")
        })),
        GR = (0, tu.l)(qy.sc.CustomKillfeed, (JR => {
          const GR = (0, yu.k)(JR);
          if (!(0, yu.e)(GR) || !(0, yu.e)(GR.killer) || !(0, yu.e)(GR.victim)) return;
          const {
            killer: yR,
            victim: tR,
            withItem: uR
          } = GR;
          RR.recordKillfeed(Dq(yR), Dq(tR), "string" === typeof uR ? uR : null)
        }));
      return () => {
        JR(), GR()
      }
    }

    function oq(RR) {
      let JR = null;
      const GR = () => {
        const {
          enableClipping: GR,
          clipDurationSeconds: tR
        } = yR.d.get("clientEscMenuOptions"), uR = `${GR}:${tR}`;
        uR !== JR && (JR = uR, RR.recorder.setPrefs(GR, tR))
      };
      return GR(), (0, ZR.q)("appManagerUpdated|clientEscMenuOptions", GR)
    }
    const cq = "replayModule",
      Pq = "recorderModule";

    function Iq(RR, JR, GR) {
      return function() {
        return RR.isStopped ? GR : JR(...arguments)
      }
    }
    const mq = {
      open: () => Promise.reject(new Error(Pt.d.coreStopped.text)),
      replayKey: () => null,
      encode: () => Promise.resolve(null),
      fileHandle: () => null,
      markSaved: () => {}
    };

    function zq() {
      return GR.e(77).then((() => GR(64335)))
    }

    function Sq(RR) {
      (0, Pt.e)({
        text: RR,
        type: "Error"
      })
    }
    class jq {
      constructor(RR) {
        this.deps = RR, this.runtime = void 0, this.entityHooks = void 0, this.recordedOptions = void 0, this.stops = void 0, this.activeConn = 0, this.stopped = !1, this.bench = null, this.replay = void 0, this.recorder = void 0, this.freecam = void 0, this.drawn = !1;
        const {
          running: JR,
          api: yR,
          core: tR
        } = RR, uR = () => RR.memory().buffer, ZR = () => JR.isStopped ? null : JR.rings.cmd, qR = Iq(JR, ((RR, JR) => tR.pZR(RR, JR)), 0), iR = () => tR.bZR();
        let fR = null;
        this.replay = new Lq({
          core: {
            DZR: Iq(JR, (RR => tR.DZR(RR)), -1),
            pZR: qR,
            bZR: iR,
            oZR: Iq(JR, (RR => {
              tR.oZR(RR)
            }), void 0)
          },
          coreBuffer: uR,
          load: async () => (fR = await GR.e(78).then((() => GR(64348))), fR.loadReplayModule()),
          unload: () => {
            var RR;
            null === (RR = fR) || void 0 === RR || RR.unloadReplayModule()
          },
          markTrapped: RR => fR ? fR.markReplayTrapped(RR) : new Error(String(RR)),
          staleOr: (JR, GR, yR) => RR.staleOr(cq, JR, GR, yR),
          crash: JR => {
            RR.reportFault(cq, JR)
          }
        });
        let VR = null;
        this.recorder = new CZ({
          core: {
            OZR: Iq(JR, (RR => tR.OZR(RR)), 0),
            XZR: Iq(JR, (RR => tR.XZR(RR)), 0),
            pZR: qR,
            bZR: iR
          },
          coreCommand: (RR, JR) => {
            var GR, yR;
            return null !== (GR = null === (yR = ZR()) || void 0 === yR ? void 0 : yR.writeCmd(RR, 0, JR)) && void 0 !== GR && GR
          },
          coreBuffer: uR,
          load: async () => (VR = await zq(), VR.loadRecorderModule()),
          prefetch: () => {
            zq().then((RR => RR.prefetchRecorderModule())).catch((RR => {
              console.warn(`${xq} the recorder module didn't prefetch, so a save loads it:`, RR)
            }))
          },
          unload: () => {
            var RR;
            null === (RR = VR) || void 0 === RR || RR.unloadRecorderModule()
          },
          markTrapped: RR => VR ? VR.markRecorderTrapped(RR) : new Error(String(RR)),
          memoryBytes: () => {
            var RR, JR;
            return null !== (RR = null === (JR = VR) || void 0 === JR ? void 0 : JR.recorderMemoryBytes()) && void 0 !== RR ? RR : 0
          },
          staleOr: (JR, GR) => RR.staleOr(Pq, JR, GR),
          crash: JR => {
            RR.reportFault(Pq, JR)
          },
          allowed: () => !0 === RR.options.get("canRecordReplays"),
          failed: RR => {
            this.runtime.recorder.stopped(), Sq(RR)
          },
          events: (RR, JR) => {
            this.runtime.recorderEvents(RR, JR)
          },
          beginSave: () => this.replay.beginSave(),
          givenUp: Sq,
          unixNow: () => Date.now()
        });
        const KR = new Yt({
          core: {
            rZR: Iq(JR, (RR => tR.rZR(RR)), 0),
            aZR: Iq(JR, (() => {
              tR.aZR()
            }), void 0),
            yn: Iq(JR, (() => tR.yn()), 0),
            eZR: Iq(JR, (() => tR.eZR()), 0)
          },
          buffer: uR,
          apiView: () => yR.apiView,
          cmd: ZR,
          replay: this.replay,
          recorder: this.recorder
        });
        this.entityHooks = new FZ({
          api: yR,
          cmd: ZR,
          loadHook: QZ,
          onError: RR => {
            console.warn(`${xq} the recorded game's replay hooks:`, RR)
          }
        });
        const wR = new Gu({
          client: KR,
          buffer: uR,
          setHoldDraws: RR => {
            JR.setHoldDraws(RR)
          },
          notify: Pt.e,
          onRecorderState: () => {
            var RR;
            null === (RR = (0, mt.f)()) || void 0 === RR || RR.recorderChanged()
          },
          onViewerChange: () => {
            var RR;
            null === (RR = (0, mt.f)()) || void 0 === RR || RR.viewerChanged()
          },
          onReplayOption: JR => {
            ! function(RR, JR) {
              var GR, yR;
              const tR = qy.Db[JR.key];
              if (void 0 === tR) return;
              let uR = null !== (GR = JR.value) && void 0 !== GR ? GR : JSON.parse(JSON.stringify(null !== (yR = lq.d[tR]) && void 0 !== yR ? yR : null));
              if (null !== JR.value && JR.key < qy.ac.Environment && "string" === typeof uR) try {
                uR = JSON.parse(uR)
              } catch (ZR) {
                return void console.warn(`${gq} a replay's ${tR} isn't JSON`, ZR)
              }
              RR.applyNewClientOptions({
                [tR]: uR
              })
            }(RR.options, JR)
          },
          onReplayUiEvent: Oq,
          onReplayOpened: JR => {
            this.entityHooks.opened((0, gR.Sb)(JR)), RR.replayShaderPack(JR)
          },
          meshPending: () => {
            var RR, GR;
            return null !== (RR = null === (GR = JR.lastHeader) || void 0 === GR ? void 0 : GR.renderPending) && void 0 !== RR ? RR : 0
          },
          viewerOpen: It.e,
          download: RR => {
            (0, ot.i)(RR)
          }
        });
        this.runtime = wR, yR.replay = wR.sink, (0, mt.r)(wR);
        const rR = new qu({
          live: () => {
            var RR;
            return !JR.isStopped && !0 === (null === (RR = wR.currentViewer) || void 0 === RR ? void 0 : RR.inPlayback)
          },
          cmd: ZR,
          dragScale: Lu
        });
        this.freecam = rR, (0, mt.o)(rR), this.recordedOptions = function(RR, JR) {
          const GR = qy.Db,
            yR = GR.map(((GR, yR) => JR.subscribe(GR, (JR => {
              RR.setOption(yR, JR)
            }))));
          return {
            sendAll() {
              RR.setAllOptions(GR.map((RR => JR.get(RR))))
            },
            stop() {
              for (const RR of yR) RR()
            }
          }
        }(wR.recorder, RR.options), this.stops = [(0, ny.g)((RR => {
          rR.flush();
          try {
            this.replay.beforeFrame(RR)
          } catch (JR) {
            this.deps.reportFault("replayFrame", JR)
          }
        })), (0, ny.t)(((RR, JR) => {
          try {
            this.recorder.afterFrame(), JR && !this.drawn && (this.drawn = !0, this.recorder.viewDrawn())
          } catch (GR) {
            this.deps.reportFault("recorderFrame", GR)
          }
          try {
            wR.afterFrame(RR)
          } catch (GR) {
            this.deps.reportFault("replayRuntime", GR)
          }
        })), oq(wR), () => {
          this.recordedOptions.stop()
        }, Hq(wR.recorder), (0, uu.f)((RR => {
          let {
            action: JR,
            down: GR
          } = RR;
          var yR;
          GR && (null === (yR = (0, mt.f)()) || void 0 === yR || yR.keyDown(JR))
        }))];
        const eR = () => {
          const RR = wR.currentViewer;
          return !0 === (null === RR || void 0 === RR ? void 0 : RR.isOpen) ? RR : null
        };
        (0, ct.e)({
          open: (RR, JR) => this.open(RR, JR),
          replayKey: () => {
            var RR, JR;
            return null !== (RR = null === (JR = eR()) || void 0 === JR ? void 0 : JR.id) && void 0 !== RR ? RR : null
          },
          saveRefusal: () => {
            var RR, JR;
            return null !== (RR = null === (JR = eR()) || void 0 === JR ? void 0 : JR.saveRefusal) && void 0 !== RR ? RR : null
          },
          encode: () => {
            var RR, JR;
            return null !== (RR = null === (JR = eR()) || void 0 === JR ? void 0 : JR.save()) && void 0 !== RR ? RR : Promise.resolve(null)
          },
          fileHandle: () => {
            var RR, JR;
            return null !== (RR = null === (JR = wR.currentViewer) || void 0 === JR ? void 0 : JR.fileHandle) && void 0 !== RR ? RR : null
          },
          markSaved: (RR, JR) => {
            var GR;
            null === (GR = wR.currentViewer) || void 0 === GR || GR.markSaved(RR, JR)
          }
        })
      }
      netEvent(RR) {
        if ("connection" === RR.type)
          if (RR.phase === wR.H.Activated) {
            this.activeConn = RR.conn;
            const JR = this.deps.sessionInfo(RR.conn);
            null !== JR && (this.runtime.activated({
              lobbyType: (0, bR.q)(JR.lobbyName),
              gameNameWithVariation: JR.gameNameWithVariation,
              lobbyName: JR.lobbyName
            }), this.recordedOptions.sendAll())
          } else RR.phase !== wR.H.Left && RR.phase !== wR.H.Closed || RR.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
      }
      stop() {
        if (!this.stopped) {
          this.stopped = !0;
          for (const RR of this.stops) RR();
          this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, mt.l)() === this.runtime && (0, mt.r)(null), (0, mt.i)() === this.freecam && (0, mt.o)(null), (0, ct.e)(mq), null !== this.bench && window.wasmReplayBench === this.bench && (window.wasmReplayBench = void 0)
        }
      }
      async open(RR, JR) {
        const {
          running: GR
        } = this.deps;
        if (GR.isStopped) throw new Error(Pt.d.coreStopped.text);
        if (RR.byteLength > 67108864) throw new Error(Pt.d.cantOpen.text);
        let yR;
        try {
          yR = await async function(RR) {
            const JR = await RR.loadViewer();
            return JR.inPlayback || (0, ny.E)().leaveGame(null), JR
          }(this.runtime)
        } catch (tR) {
          throw console.warn(`${xq} the replay viewer didn't load`, tR), new Error(Pt.d.viewerLoadFailed.text)
        }
        if (GR.isStopped) throw new Error(Pt.d.coreStopped.text);
        await yR.open(RR, JR)
      }
    }
    var dq = GR(2163);

    function Eq(RR, JR) {
      const {
        aux: GR,
        payload: yR
      } = function(RR) {
        return {
          aux: RR.reset ? wR.$b.ResetFirst : 0,
          payload: kq(RR.changes)
        }
      }(JR);
      RR.queueOptions(GR, yR) && (JR.reset && dq.c.reset(), dq.c.apply(JR.changes))
    }
    const Yq = new TextEncoder;

    function kq(RR) {
      const JR = new Qq;
      return Tq(JR, RR), JR.bytes()
    }
    class Qq {
      constructor() {
        this.buf = new Uint8Array(256), this.view = new DataView(this.buf.buffer), this.len = 0
      }
      room(RR) {
        if (this.len + RR <= this.buf.length) return;
        const JR = new Uint8Array(Math.max(2 * this.buf.length, this.len + RR));
        JR.set(this.buf.subarray(0, this.len)), this.buf = JR, this.view = new DataView(JR.buffer)
      }
      u8(RR) {
        this.room(1), this.buf[this.len++] = RR
      }
      tagged(RR, JR, GR) {
        this.room(1 + JR), this.buf[this.len++] = RR, 1 === JR ? this.view.setUint8(this.len, GR) : 2 === JR ? this.view.setUint16(this.len, GR) : this.view.setUint32(this.len, GR), this.len += JR
      }
      signed(RR, JR, GR) {
        this.room(1 + JR), this.buf[this.len++] = RR, 1 === JR ? this.view.setInt8(this.len, GR) : 2 === JR ? this.view.setInt16(this.len, GR) : this.view.setInt32(this.len, GR), this.len += JR
      }
      f64(RR) {
        this.room(9), this.buf[this.len++] = 203, this.view.setFloat64(this.len, RR), this.len += 8
      }
      raw(RR) {
        this.room(RR.length), this.buf.set(RR, this.len), this.len += RR.length
      }
      bytes() {
        return this.buf.slice(0, this.len)
      }
    }

    function Fq(RR, JR, GR, yR, tR, uR, ZR) {
      JR < yR ? RR.u8(GR | JR) : null !== tR && JR < 256 ? RR.tagged(tR, 1, JR) : JR < 65536 ? RR.tagged(uR, 2, JR) : RR.tagged(ZR, 4, JR)
    }

    function Tq(RR, JR) {
      switch (typeof JR) {
        case "undefined":
          return void RR.raw(sq);
        case "boolean":
          return void RR.u8(JR ? 195 : 194);
        case "number":
          return void
          function(RR, JR) {
            JR >>> 0 === JR ? JR < 128 ? RR.u8(JR) : JR < 256 ? RR.tagged(204, 1, JR) : JR < 65536 ? RR.tagged(205, 2, JR) : RR.tagged(206, 4, JR) : (JR | 0) === JR ? JR >= -32 ? RR.u8(255 & JR) : JR >= -128 ? RR.signed(208, 1, JR) : JR >= -32768 ? RR.signed(209, 2, JR) : RR.signed(210, 4, JR) : RR.f64(JR)
          }(RR, JR);
        case "string": {
          const GR = Yq.encode(JR);
          return Fq(RR, GR.length, 160, 32, 217, 218, 219), void RR.raw(GR)
        }
        case "object":
          break;
        default:
          return void RR.u8(192)
      }
      if (null === JR) RR.u8(192);
      else if (Array.isArray(JR)) {
        Fq(RR, JR.length, 144, 16, null, 220, 221);
        for (const GR of JR) Tq(RR, GR)
      } else if (JR instanceof Uint8Array) Fq(RR, JR.length, 0, 0, 196, 197, 198), RR.raw(JR);
      else {
        const GR = Object.keys(JR);
        Fq(RR, GR.length, 128, 0, null, 222, 223);
        for (const yR of GR) Tq(RR, yR), Tq(RR, JR[yR])
      }
    }
    const sq = new Uint8Array([212, 0, 0]);
    var hq = GR(37247),
      Ri = GR(37341),
      Ji = GR(42488),
      Gi = GR(42526),
      yi = GR(2457);
    const ti = [1e3, 3e3, 9e3];
    class ui {
      constructor(RR) {
        this.host = RR, this.sets = new Map, this.table = [], this.generation = 0, this.He = !1
      }
      onEvent(RR) {
        const JR = function(RR) {
          if (RR.byteLength !== wR.sd) return null;
          const JR = new DataView(RR.buffer, RR.byteOffset, RR.byteLength);
          return {
            want: JR.getUint16(0, !0),
            release: JR.getUint16(2, !0)
          }
        }(RR);
        JR && !this.He && (JR.release !== wR.vd && this.release(JR.release), JR.want !== wR.vd && this.want(JR.want))
      }
      reset(RR) {
        if (!this.He) {
          for (const [RR, JR] of this.sets) "ready" === JR.state && this.releaseAll(JR.distinct), this.sets.delete(RR);
          this.table = RR, this.generation++
        }
      }
      dispose() {
        if (this.He) return;
        this.He = !0, this.generation++, this.table = [];
        const RR = [...this.sets.values()];
        this.sets.clear();
        let JR = null;
        for (const yR of RR)
          for (const RR of "ready" === yR.state ? yR.distinct : []) try {
            this.host.jtR(RR)
          } catch (GR) {
            JR ??= {
              error: GR
            }
          }
        if (JR) throw JR.error
      }
      isReady(RR) {
        var JR;
        return "ready" === (null === (JR = this.sets.get(RR)) || void 0 === JR ? void 0 : JR.state)
      }
      want(RR) {
        const JR = this.sets.get(RR);
        if ("loading" === (null === JR || void 0 === JR ? void 0 : JR.state)) return JR.wanted = !0, void this.capAnswer(RR, JR);
        if ("ready" === (null === JR || void 0 === JR ? void 0 : JR.state)) return void this.host.sendReady(qi(RR, JR.images, JR.size));
        const GR = this.table[RR];
        if (!GR || 1 !== GR.urls.length && GR.urls.length !== qy.nc.CubeFaces) return this.host.sendReady(ii(RR)), void this.host.onLoadFailed(RR, "", new Error(`no image set ${RR}`));
        const yR = {
          state: "loading",
          wanted: !0
        };
        this.sets.set(RR, yR), this.load(RR, GR, yR, this.generation, 0), this.capAnswer(RR, yR)
      }
      capAnswer(RR, JR) {
        this.host.wait(4e3, (() => {
          this.sets.get(RR) === JR && JR.wanted && this.host.sendReady(ii(RR))
        }))
      }
      load(RR, JR, GR, yR, tR) {
        const uR = [...new Set(JR.urls)];
        Promise.allSettled(uR.map((RR => this.host.loadImage(RR, JR.orientation)))).then((ZR => {
          const qR = ZR.flatMap((RR => "fulfilled" === RR.status ? [RR.value] : [])),
            iR = yR === this.generation && this.sets.get(RR) === GR,
            fR = ZR.findIndex((RR => "rejected" === RR.status));
          if (!iR || !GR.wanted) return this.He ? void this.releaseAfterDispose(qR.map(Zi)) : (this.releaseAll(qR.map(Zi)), void(iR && this.sets.delete(RR)));
          fR < 0 ? this.loaded(RR, JR, uR, qR) : (this.releaseAll(qR.map(Zi)), this.host.sendReady(ii(RR)), tR < ti.length ? this.host.wait(ti[tR], (() => {
            yR === this.generation && this.sets.get(RR) === GR && (GR.wanted ? this.load(RR, JR, GR, yR, tR + 1) : this.sets.delete(RR))
          })) : (this.sets.delete(RR), this.host.onLoadFailed(RR, uR[fR], ZR[fR].reason)))
        }))
      }
      loaded(RR, JR, GR, yR) {
        const [tR] = yR, uR = [tR.width, tR.height], ZR = yR.every((RR => RR.width === uR[0] && RR.height === uR[1])), qR = JR.urls.length === qy.nc.CubeFaces;
        if (!ZR || uR[0] <= 0 || uR[1] <= 0 || uR[0] > 65535 || uR[1] > 65535 || qR && uR[0] !== uR[1]) {
          this.releaseAll(yR.map(Zi)), this.sets.delete(RR), this.host.sendReady(ii(RR));
          const GR = yR.map((RR => `${RR.width}x${RR.height}`));
          return void this.host.onLoadFailed(RR, JR.urls[0], new Error(`set ${RR}'s images can't make its texture: ${GR.join(", ")}`))
        }
        const iR = JR.urls.map((RR => yR[GR.indexOf(RR)].id)),
          fR = yR.map(Zi);
        this.sets.set(RR, {
          state: "ready",
          images: iR,
          distinct: fR,
          size: uR
        }), this.host.sendReady(qi(RR, iR, uR))
      }
      release(RR) {
        const JR = this.sets.get(RR);
        "loading" === (null === JR || void 0 === JR ? void 0 : JR.state) ? JR.wanted = !1: "ready" === (null === JR || void 0 === JR ? void 0 : JR.state) && (this.releaseAll(JR.distinct), this.sets.delete(RR))
      }
      releaseAll(RR) {
        for (const JR of RR) this.host.jtR(JR)
      }
      releaseAfterDispose(RR) {
        for (const JR of RR) try {
          this.host.jtR(JR)
        } catch {}
      }
    }

    function Zi(RR) {
      return RR.id
    }

    function qi(RR, JR, GR) {
      const yR = new Uint8Array(qy.nc.SkyImagesReadyBytes),
        tR = new DataView(yR.buffer);
      return tR.setUint16(0, RR, !0), tR.setUint16(2, JR.length, !0), tR.setUint16(4, GR[0], !0), tR.setUint16(6, GR[1], !0), JR.slice(0, qy.nc.CubeFaces).forEach(((RR, JR) => {
        tR.setUint32(8 + 4 * JR, RR, !0)
      })), yR
    }

    function ii(RR) {
      const JR = new Uint8Array(qy.nc.SkyImagesReadyBytes),
        GR = new DataView(JR.buffer);
      return GR.setUint16(0, RR, !0), GR.setUint16(2, qy.nc.Failed, !0), JR
    }
    let fi = Promise.resolve();
    async function Vi(RR, JR) {
      let GR;
      try {
        GR = await (0, yi.B)(RR)
      } catch (uR) {
        throw new Ji.d("fetch", RR, {
          cause: uR
        })
      }
      const yR = fi.then((() => async function(RR, JR) {
        const GR = new Blob([RR.slice()]);
        let yR = await createImageBitmap(GR, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: JR
        });
        const tR = 1024 / Math.max(yR.width, yR.height);
        if (tR < 1) {
          const RR = yR;
          try {
            yR = await createImageBitmap(RR, {
              resizeWidth: Math.max(1, Math.round(RR.width * tR)),
              resizeHeight: Math.max(1, Math.round(RR.height * tR)),
              resizeQuality: "high",
              premultiplyAlpha: "none",
              colorSpaceConversion: "none"
            })
          } finally {
            RR.close()
          }
        }
        return yR
      }(GR, JR)));
      let tR;
      fi = yR.catch((() => {}));
      try {
        tR = await yR
      } catch (uR) {
        throw new Ji.d("decode", RR, {
          cause: uR
        })
      }
      return {
        id: (0, Ji.l)(tR),
        width: tR.width,
        height: tR.height
      }
    }
    var Ki = GR(2374),
      wi = GR(34957),
      ri = GR(40498);
    const ei = Ki.i.length,
      ai = new Set([...Ki.i, "earth"]);

    function Li(RR) {
      const JR = [],
        GR = [],
        yR = (RR, yR) => {
          if ("custom" === yR.type) {
            GR.push({
              id: RR,
              kind: qy.nc.KindCustom,
              set: JR.length,
              earth: null
            });
            const tR = [yR.px, yR.py, yR.pz, yR.nx, yR.ny, yR.nz];
            JR.push({
              urls: (0, ri.g)(tR),
              orientation: "none"
            })
          } else GR.push({
            id: RR,
            kind: qy.nc.KindEarth,
            set: 0,
            earth: yR
          })
        };
      Ki.i.forEach(((JR, GR) => {
        var tR;
        yR(GR, null !== (tR = ni(RR[JR])) && void 0 !== tR ? tR : wi.o[JR])
      }));
      const tR = ni(RR.earth);
      "earth" === (null === tR || void 0 === tR ? void 0 : tR.type) && yR(ei, tR);
      const uR = new TextEncoder,
        ZR = [],
        qR = [];
      for (const [rR, eR] of Object.entries(RR)) {
        const RR = ai.has(rR) ? null : ni(eR);
        if (null === RR) continue;
        const JR = uR.encode(rR);
        JR.length > 255 ? qR.push(`Ignoring texture pack skybox ${rR}, whose name is over 255 bytes`) : ZR.length === qy.nc.MaxAdded ? qR.push(`Ignoring texture pack skybox ${rR}, past the ${qy.nc.MaxAdded} skies a pack can add`) : (ZR.push(JR), yR(qy.nc.AddedId, RR))
      }
      const iR = JR.length;
      JR.push({
        urls: wi.f.map((RR => wi.h + RR)),
        orientation: "none"
      }), JR.push({
        urls: [wi.k],
        orientation: "flipY"
      }), JR.push({
        urls: [wi.b],
        orientation: "flipY"
      });
      const fR = qy.nc.SkyTableHeaderBytes + GR.length * qy.nc.SkyTableEntryBytes,
        VR = new Uint8Array(fR + ZR.reduce(((RR, JR) => RR + 1 + JR.length), 0)),
        KR = new DataView(VR.buffer);
      KR.setUint16(0, iR, !0), KR.setUint16(2, iR + 1, !0), KR.setUint16(4, iR + 2, !0), KR.setUint16(6, GR.length, !0), GR.forEach(((RR, JR) => {
        const GR = qy.nc.SkyTableHeaderBytes + JR * qy.nc.SkyTableEntryBytes;
        KR.setUint16(GR, RR.id, !0), KR.setUint8(GR + 2, RR.kind);
        const yR = GR + 4;
        RR.earth ? function(RR, JR, GR) {
          const yR = RR;
          let tR = 0,
            uR = 0;
          for (const [ZR, qR] of Ui) {
            const RR = yR[ZR];
            "number" === typeof RR && Number.isFinite(RR) && (JR.setFloat32(GR + 4 * qR, RR, !0), tR |= 1 << qR)
          }
          for (const [ZR, qR, iR] of Wi) {
            const RR = yR[ZR];
            Array.isArray(RR) && 3 === RR.length && RR.every((RR => "number" === typeof RR && Number.isFinite(RR))) && (RR.forEach(((RR, yR) => {
              JR.setFloat32(GR + iR + 4 * yR, RR, !0)
            })), tR |= qR)
          }
          Ai.forEach(((RR, uR) => {
            let [ZR, qR] = RR;
            const iR = yR[ZR];
            "number" === typeof iR && Number.isFinite(iR) && (JR.setFloat32(GR + qy.v.CameraOffsetAt + 4 * uR, iR, !0), tR |= qR)
          }));
          for (const [ZR, qR] of Ci) {
            const RR = yR[ZR];
            null !== RR && void 0 !== RR && (tR |= qR, RR && (uR |= qR >>> 14))
          }
          JR.setUint32(GR + qy.v.PresentAt, tR, !0), JR.setUint8(GR + qy.v.FlagsAt, uR)
        }(RR.earth, KR, yR) : KR.setUint16(yR, RR.set, !0)
      }));
      let wR = fR;
      for (const rR of ZR) VR[wR] = rR.length, VR.set(rR, wR + 1), wR += 1 + rR.length;
      return {
        payload: VR,
        sets: JR,
        leftOut: qR
      }
    }

    function ni(RR) {
      if ("object" !== typeof RR || null === RR) return null;
      const JR = RR;
      if ("earth" === JR.type) return RR;
      return "custom" === JR.type && ["px", "py", "pz", "nx", "ny", "nz"].every((RR => {
        const GR = JR[RR];
        return "string" === typeof GR && GR.length > 0
      })) ? RR : null
    }
    const Ui = [
        ["inclination", qy.v.Inclination],
        ["turbidity", qy.v.Turbidity],
        ["luminance", qy.v.Luminance],
        ["rayleigh", qy.v.Rayleigh],
        ["mieCoefficient", qy.v.MieCoefficient],
        ["mieDirectionalG", qy.v.MieDirectionalG],
        ["distance", qy.v.Distance],
        ["azimuth", qy.v.Azimuth]
      ],
      Wi = [
        ["sunPosition", qy.v.SunPosition, qy.v.SunPositionAt],
        ["up", qy.v.Up, qy.v.UpAt],
        ["vertexTint", qy.v.VertexTint, qy.v.VertexTintAt]
      ],
      Ai = [
        ["xCameraOffset", qy.v.CameraOffsetX],
        ["yCameraOffset", qy.v.CameraOffsetY],
        ["zCameraOffset", qy.v.CameraOffsetZ]
      ],
      Ci = [
        ["useSunPosition", qy.v.UseSunPosition],
        ["dithering", qy.v.Dithering],
        ["infiniteDistance", qy.v.InfiniteDistance]
      ];

    function Xi(RR, JR, GR) {
      const yR = new Bi({
        writeCmd: RR,
        warn: JR,
        followPack: Mi(GR, JR)
      });
      return yR.start(), yR
    }

    function Mi(RR, JR) {
      return GR => {
        let yR = () => {};
        const tR = RR((RR => {
          yR(), yR = () => {}, null !== RR ? yR = RR.subscribe((RR => {
            GR(function(RR, JR, GR) {
              if ("object" !== typeof RR || null === RR) return null;
              const yR = RR.skyBoxes;
              if ("object" !== typeof yR || null === yR) return null;
              if ("player" === JR) return yR;
              return Object.fromEntries(Object.entries(yR).filter((RR => {
                let [JR, yR] = RR;
                return !! function(RR) {
                  if ("object" !== typeof RR || null === RR) return !1;
                  return "earth" === RR.type || Object.entries(RR).every((RR => {
                    let [JR, GR] = RR;
                    return "type" === JR || ("" === (yR = GR) || null !== function(RR) {
                      var JR, GR, yR;
                      return "string" !== typeof RR ? null : null !== (JR = null === (GR = li.exec(RR)) || void 0 === GR || null === (yR = GR.groups) || void 0 === yR ? void 0 : yR.base64) && void 0 !== JR ? JR : null
                    }(yR));
                    var yR
                  }))
                }(yR) || (GR(`Ignoring texture pack skybox ${JR}, whose faces are not all data URLs`, null), !1)
              })))
            }(RR.pack, null === RR.gameSource ? "player" : "customGame", JR))
          })) : GR(null)
        }));
        return () => {
          tR(), yR()
        }
      }
    }
    class Bi {
      constructor(RR) {
        var JR, GR, yR;
        this.host = RR, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.He = !1, this.wait = null !== (JR = RR.wait) && void 0 !== JR ? JR : (RR, JR) => {
          setTimeout(JR, RR)
        }, this.loader = new ui({
          loadImage: null !== (GR = RR.loadImage) && void 0 !== GR ? GR : Vi,
          jtR: null !== (yR = RR.jtR) && void 0 !== yR ? yR : Ji.m,
          sendReady: RR => {
            this.queue.push({
              kind: qy.nc.SkyImagesReady,
              payload: RR
            })
          },
          onLoadFailed: (JR, GR, yR) => {
            RR.warn(`sky image set ${JR} (${GR}) didn't load: the last sky stays`, yR)
          },
          wait: this.wait
        })
      }
      start() {
        this.wait(Gi.b, (() => {
          null === this.written && this.write({})
        })), this.stopFollowing = this.host.followPack((RR => {
          this.write(null !== RR && void 0 !== RR ? RR : {})
        }))
      }
      onEvent(RR) {
        this.loader.onEvent(RR)
      }
      drain() {
        if (0 === this.queue.length) return;
        let RR = 0;
        for (; RR < this.queue.length && this.host.writeCmd(this.queue[RR].kind, 0, this.queue[RR].payload);) RR++;
        RR > 0 && this.queue.splice(0, RR)
      }
      dispose() {
        this.He = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
      }
      write(RR) {
        if (this.He) return;
        const JR = Li(RR);
        if (!(this.written && (GR = this.written, yR = JR, GR.payload.length === yR.payload.length && GR.payload.every(((RR, JR) => RR === yR.payload[JR])) && GR.sets.length === yR.sets.length && GR.sets.every(((RR, JR) => {
            const GR = yR.sets[JR];
            return RR.orientation === GR.orientation && RR.urls.length === GR.urls.length && RR.urls.every(((RR, JR) => RR === GR.urls[JR]))
          }))))) {
          var GR, yR;
          for (const RR of JR.leftOut) this.host.warn(RR, null);
          this.written = JR, this.loader.reset(JR.sets), this.queue = this.queue.filter((RR => RR.kind !== qy.nc.SkyImagesReady)), this.queue.push({
            kind: qy.nc.SkyTable,
            payload: JR.payload
          })
        }
      }
    }
    const li = /^data:[\w.+/-]*;base64,(?<base64>[A-Za-z0-9+/]*={0,2})$/;
    var gi = GR(2991),
      bi = GR(2989),
      vi = GR(299),
      Oi = GR(182),
      xi = GR(3943),
      Ni = GR(3948),
      Di = GR(277),
      Hi = GR(279),
      oi = GR(4035),
      ci = GR(4064),
      Pi = GR(4074),
      Ii = GR(116),
      mi = GR(4139),
      zi = GR(4137),
      Si = GR(342),
      ji = GR(42374);
    class di {
      constructor() {
        this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, tu.l)(Ny.M, (RR => {
          this.onReply((0, yu.i)(Ny.M, RR), performance.now())
        }))
      }
      onFrame(RR, JR) {
        null === this.id ? this.id = RR : RR !== this.id && (this.id = RR, this.sentMs = document.hidden ? null : JR)
      }
      onVisibilityChange() {
        this.sentMs = null
      }
      onReply(RR, JR) {
        RR === this.id && null !== this.sentMs && (this.roundTripMs = Math.round(JR - this.sentMs), this.sentMs = null)
      }
      take() {
        const RR = this.roundTripMs;
        return this.roundTripMs = null, RR
      }
      stop() {
        this.stopReplies()
      }
    }
    class Ei {
      constructor() {
        this.sampled = 0, this.timed = 0, this.frameUs = 0, this.primed = !1, this.windowTimed = 0, this.windowUs = 0
      }
      onFrame(RR, JR, GR, yR) {
        const tR = RR - this.sampled >>> 0,
          uR = JR - this.timed >>> 0,
          ZR = GR - this.frameUs >>> 0,
          qR = this.primed;
        return this.sampled = RR, this.timed = JR, this.frameUs = GR, this.primed = !0, !(!qR || tR > 64 || uR > 64) && (yR && ZR <= 1e6 * uR && (this.windowTimed += uR, this.windowUs += ZR), yR && tR > 0)
      }
      reset() {}
      snapshotAndReset() {
        const RR = this.windowTimed > 0 ? this.windowUs / this.windowTimed / 1e3 : null;
        return this.windowTimed = 0, this.windowUs = 0, {
          passMs: RR,
          submitToDoneMs: null
        }
      }
    }
    const Yi = {
      lagP50Ms: null,
      lagP90Ms: null
    };
    class ki {
      constructor() {
        this.samples = new Float64Array(4096), this.count = 0
      }
      add(RR, JR) {
        const GR = Math.min(4096, this.count + JR);
        this.samples.fill(RR, this.count, GR), this.count = GR
      }
      clear() {
        this.count = 0
      }
      take() {
        const RR = this.count;
        if (this.count = 0, RR < 30) return Yi;
        const JR = this.samples.subarray(0, RR).sort(),
          GR = GR => JR[Math.min(RR - 1, Math.floor(GR * RR))];
        return {
          lagP50Ms: GR(.5),
          lagP90Ms: GR(.9)
        }
      }
    }
    class Qi {
      constructor() {
        this.word = 0, this.lagUs = 0, this.primed = !1, this.lags = new ki
      }
      onFrame(RR, JR) {
        const GR = RR.headerWord(qy.L.Pacing),
          yR = RR.headerWord(qy.L.PacingLagUs),
          tR = (GR >>> qy.hb.LagsShift) - (this.word >>> qy.hb.LagsShift) & qy.hb.CountMask,
          uR = tR > 0 ? (yR - this.lagUs >>> 0) / tR / 1e3 : 0,
          ZR = this.primed && tR <= 64 && uR <= 6e4;
        this.word = GR, this.lagUs = yR, this.primed = !0, ZR && JR && tR > 0 && 0 !== (GR & qy.hb.Defaulted) && this.lags.add(uR, tR)
      }
      onJoin() {
        this.lags.clear()
      }
      snapshotAndReset(RR) {
        return RR ? this.lags.take() : (this.lags.clear(), Yi)
      }
    }
    var Fi = GR(4019),
      Ti = GR(35081),
      si = GR(4044),
      Rf = GR(42430),
      Jf = GR(35072),
      Gf = GR(3956),
      yf = GR(4048);
    const tf = {
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
      safari_27: !1,
      few_wasm_memories: !1,
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

    function uf(RR) {
      return new Zf(RR)
    }
    class Zf {
      constructor(RR) {
        this.shell = RR, this.tracker = new Ni.e, this.gpu = new Ei, this.pacing = new Qi, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.fpsOverTime = null, this.firstSpanFps = null, this.initialFps = null, this.ping = new di, this.pacedCpuMs = 0, this.sendsStartMs = -1, this.sendsEndMs = -1, this.frameDebug = null, this.mainStall = new Fi.b(this.tracker, ((RR, JR, GR, yR) => {
          this.shell.mainStalled(RR, JR, GR, yR)
        }), (RR => this.shell.mN(RR))), this.onVisibility = () => {
          this.tracker.onVisibilityChange(), this.ping.onVisibilityChange(), this.mainStall.reset(), !document.hidden && this.fpsSpanStartMs >= 0 && (this.fpsFrames = 0, this.fpsSpanStartMs = performance.now())
        }, this.onBeforeUnload = () => {
          this.mainStall.unloading()
        }, (0, Ti.c)(RR.backend, RR.canvas, RR.adapterVendor), this.tracker.start((() => !RR.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, Gf.c)("wasm", (() => {
          const {
            n: JR,
            sampleCount: GR
          } = (0, Rf.g)();
          return `${RR.backend}, quality steps aim at up to ${yf.d.target.maxFps} fps, pixel n ${JR}, msaa ${GR}`
        }), (JR => {
          JR.setLoadCounts(RR.readLoadCounts), this.frameDebug = JR
        })), this.timers.push(setInterval((() => {
          this.flush(), this.fpsOverTime = null, this.initialFps = null
        }), 1e4), setInterval((() => {
          this.followGame() && this.shell.canSend() && (this.hasFlushedSinceConnect || (this.flush(), this.hasFlushedSinceConnect = !0))
        }), 250))
      }
      animationFrame(RR) {
        var JR;
        this.mainStall.animationFrame(), this.tracker.onAnimationFrame(RR), null === (JR = this.frameDebug) || void 0 === JR || JR.animationFrame()
      }
      sendsWent(RR, JR, GR) {
        this.ping.onFrame(RR.headerWord(qy.L.PingSent), JR), this.sendsStartMs = JR, this.sendsEndMs = GR
      }
      frameRan(RR, JR, GR, yR) {
        var tR;
        this.ping.onFrame(RR.headerWord(qy.L.PingSent), GR);
        const uR = this.tracker;
        this.pacing.onFrame(RR, uR.isSampling());
        const ZR = RR.headerWord(qy.L.TickUs) / 1e3 + (0, ny.H)();
        var qR;
        (uR.UW(ZR), null === (tR = this.frameDebug) || void 0 === tR || tR.wasmFrame(RR, JR, GR, yR, uR.isSampling(), ZR), null !== this.game) && (null === (qR = this.frameDebug) || void 0 === qR || qR.inGame());
        const iR = this.sendsStartMs >= JR ? this.sendsEndMs - this.sendsStartMs : 0,
          fR = Math.max(0, GR - JR - ZR - iR);
        if ("drawn" !== yR) return void("paced" === yR ? (this.pacedCpuMs += fR, this.mainStall.paced()) : "skipped" === yR && this.mainStall.reset());
        this.followGame(), this.mainStall.drawn(JR), uR.onFrameStart(JR);
        this.gpu.onFrame(RR.headerWord(qy.L.GpuSampled), RR.headerWord(qy.L.GpuTimed), RR.headerWord(qy.L.GpuFrameUs), uR.isSampling()) && uR.onGpuSampleStarted(), uR.onFrameCpu(fR + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(JR)
      }
      framePaced() {
        var RR;
        this.mainStall.paced(), null === (RR = this.frameDebug) || void 0 === RR || RR.wasmPeekPaced(this.tracker.isSampling())
      }
      stop() {
        for (const RR of this.timers) clearInterval(RR);
        this.timers.length = 0, document.removeEventListener("visibilitychange", this.onVisibility), window.removeEventListener("beforeunload", this.onBeforeUnload), this.mainStall.stop(), this.ping.stop(), this.tracker.limiterTelemetry.stop()
      }
      followGame() {
        const RR = this.shell.joinedGame();
        if (RR !== this.game) {
          var JR;
          if (this.game = RR, null !== RR) null === (JR = this.frameDebug) || void 0 === JR || JR.joined();
          this.tracker.snapshotAndReset(), this.pacing.onJoin(), this.hasFlushedSinceConnect = !1, this.inGameAtLastFlush = !1, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.pacedCpuMs = 0, this.firstSpanFps = null, this.fpsOverTime = null, this.initialFps = null, this.mainStall.reset()
        }
        return null !== RR
      }
      countFpsFrame(RR) {
        if (this.fpsSpanStartMs < 0) {
          if (!this.shell.inGame()) return;
          this.fpsSpanStartMs = RR
        }
        this.fpsFrames++;
        const JR = RR - this.fpsSpanStartMs;
        if (!(JR < Pi.b)) {
          if (!document.hidden) {
            const RR = 1e3 * this.fpsFrames / JR;
            this.firstSpanFps ??= RR, this.initialFps = this.firstSpanFps, this.fpsOverTime = RR
          }
          this.fpsFrames = 0, this.fpsSpanStartMs = RR
        }
      }
      flush() {
        const RR = this.followGame(),
          {
            cpuFrameMs: JR,
            refreshHz: GR,
            cpuBottleneck: tR,
            frameIntervalCv: uR,
            ...ZR
          } = this.tracker.snapshotAndReset(),
          qR = this.shell.inGame(),
          iR = qR && this.inGameAtLastFlush,
          fR = iR ? ZR : (0, xi.e)(ZR),
          VR = this.pacing.snapshotAndReset(iR);
        if (this.inGameAtLastFlush = qR, this.pendingLightFailures += this.shell.takeFailedMeshJobs(), !RR || !this.shell.canSend()) return;
        const KR = performance.now(),
          rR = (0, ci.z)((0, ci.v)(KR), this.unsentPage),
          aR = function(RR, JR, GR, tR, uR, ZR, qR, iR) {
            var fR, VR, KR, wR, rR;
            const eR = {},
              {
                canvas: aR
              } = RR,
              LR = (0, oi.k)({
                refreshHz: JR.refreshHz,
                msaa: RR.msaa(),
                autoMsaaOff: (0, Jf.b)()
              });
            for (const nR of (0, bi.e)()) {
              const UR = nR.name;
              let WR;
              if ((0, vi.K)(UR)) WR = (0, ci.e)(UR);
              else if ((0, ci.k)(UR)) WR = iR[UR];
              else if ((0, oi.l)(UR)) WR = LR[UR];
              else switch (UR) {
                case "fps":
                  WR = tR;
                  break;
                case "ii":
                  WR = uR;
                  break;
                case "ei":
                  WR = (0, si.z)((0, Rf.g)().n);
                  break;
                case "ai":
                  WR = Math.max(aR.width, aR.height);
                  break;
                case "Li":
                  WR = Math.min(aR.width, aR.height);
                  break;
                case "ni":
                  WR = navigator.hardwareConcurrency || null;
                  break;
                case "Ui":
                  WR = (0, Ku.getWebGpuSupported)();
                  break;
                case "Wi":
                  WR = null === RR.fallbackReason ? null : tf[RR.fallbackReason];
                  break;
                case "Ai":
                  WR = JR.cpuFrameMs;
                  break;
                case "Ci":
                  WR = JR.refreshHz;
                  break;
                case "Xi":
                  WR = JR.cpuBottleneck;
                  break;
                case "Mi":
                  WR = JR.frameIntervalCv;
                  break;
                case "Bi":
                  WR = JR.frameMs;
                  break;
                case "li":
                  WR = JR.tickMs;
                  break;
                case "Di":
                  WR = JR.mainBusyShare;
                  break;
                case "Hi":
                  WR = JR.mainProbeDelayMs;
                  break;
                case "gi":
                  WR = JR.longAnimationFramesPerMin;
                  break;
                case "bi":
                  WR = JR.longAnimationFrameTimeShare;
                  break;
                case "Oi":
                  WR = JR.longAnimationFrameScriptShare;
                  break;
                case "xi":
                  WR = JR.framesOver50msPerMin;
                  break;
                case "Ni":
                  WR = JR.framesOver100msPerMin;
                  break;
                case "oi":
                  WR = JR.gpuPassMs;
                  break;
                case "ci":
                  WR = JR.gpuSubmitToDoneMs;
                  break;
                case "Pi":
                  WR = GR.lagP50Ms;
                  break;
                case "Ii":
                  WR = GR.lagP90Ms;
                  break;
                case "si":
                  WR = (0, gi.k)(ZR);
                  break;
                case "ri":
                  WR = qR;
                  break;
                case "mi":
                case "zi":
                case "Si":
                case "ji":
                case "di":
                case "Ei":
                case "Yi":
                case "ki":
                case "Qi":
                case "Fi":
                case "Ti":
                case "Rf":
                case "Jf":
                case "Gf":
                case "yf":
                  WR = null;
                  break;
                case "Uf":
                  WR = (0, Ku.getPlatformType)();
                  break;
                case "Wf":
                  WR = (0, Ku.getGpuVendor)();
                  break;
                case "Af":
                  WR = ji.d[RR.backend];
                  break;
                case "Cf":
                  WR = (0, Ii.c)();
                  break;
                case "Xf":
                  WR = (0, Ku.getOperatingSystem)();
                  break;
                case "Mf":
                  WR = (0, Ku.getTrafficSource)();
                  break;
                case "Bf":
                  WR = null !== (fR = yR.d.get("gameEntrySource")) && void 0 !== fR ? fR : Oi.e;
                  break;
                case "lf":
                  WR = null !== (VR = JR.frameLimiter) && void 0 !== VR ? VR : Oi.e;
                  break;
                case "pf":
                  WR = (0, Di.g)();
                  break;
                case "gf":
                  WR = null !== (KR = (0, Hi.d)()) && void 0 !== KR ? KR : Oi.e;
                  break;
                case "bf":
                  WR = (0, Di.b)(aR.width, aR.height);
                  break;
                case "vf":
                  WR = (0, bi.f)(-(new Date).getTimezoneOffset());
                  break;
                case "mf":
                  WR = null !== (wR = RR.fallbackReason) && void 0 !== wR ? wR : Oi.e;
                  break;
                case "jf":
                  WR = "ready";
                  break;
                case "df":
                  WR = (0, Ku.getSoftwareRenderer)();
                  break;
                case "Nf":
                  WR = (0, mi.d)();
                  break;
                case "Df":
                  WR = (0, zi.f)().replayState;
                  break;
                case "Hf":
                  WR = (0, zi.f)().replaySelection;
                  break;
                case "Pf":
                  WR = null !== RR.shaderPackReach() ? "true" : "false";
                  break;
                case "Ef":
                  WR = null !== (rR = RR.shaderPackReach()) && void 0 !== rR && rR.sceneDepth ? "true" : "false";
                  break;
                case "Yf": {
                  const JR = RR.shaderPackReach();
                  WR = null !== JR && void 0 !== JR && JR.sunShadow ? "all" : null !== JR && void 0 !== JR && JR.airShadow ? "air" : "none";
                  break
                }
                case "kf":
                  WR = Si.A;
                  break;
                case "JV":
                  WR = (0, ci.o)();
                  break;
                case "Of": {
                  const JR = RR.sa();
                  WR = null === JR ? Oi.e : String(JR);
                  break
                }
                case "zf":
                case "Sf":
                  WR = Oi.e;
                  break;
                default:
                  throw new Error(`Unhandled field name: ${UR}`)
              }
              if (void 0 === WR) throw new Error(`Metric ${UR} has no value`);
              eR[UR] = WR
            }
            return eR
          }(this.shell, {
            cpuFrameMs: JR,
            refreshHz: GR,
            cpuBottleneck: tR,
            frameIntervalCv: uR,
            ...fR
          }, VR, this.fpsOverTime, this.initialFps, this.pendingLightFailures, this.ping.take(), rR);
        if (! function(RR, JR, GR) {
            return (0, tG.b)(), RR(eR.l.Send, JR, GR)
          }(this.shell.writeCmd, wR.pd, function(RR) {
            const JR = (0, IR.i)((0, qG.g)(RR)),
              GR = new Uint8Array(eR.Nd.BYTES + JR.length);
            return new DataView(GR.buffer).setUint16(0, qG.d.AnalyticsUpdate, !0), GR.set(JR, eR.Nd.BYTES), GR
          }(aR))) return this.unsentPage = rR, void(0 === this.sendsDropped++ && console.warn("[wasm-client] an analytics update found the cmd ring full: dropped"));
        this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, gi.h), (0, ci.u)(aR, "wasm", KR)
      }
    }
    var qf = GR(40957);

    function ff(RR, JR, GR) {
      const yR = new Map;
      return (0, qf.e)(((RR, GR, yR) => JR.Vq(RR, GR, yR)), ((JR, GR, tR) => {
        const uR = `${JR},${GR},${tR}`;
        return yR.has(uR) || yR.set(uR, (0, kJ.e)(RR, JR, GR, tR)), yR.get(uR)
      }), GR)
    }
    var Vf = GR(40959),
      Kf = GR(42423);

    function wf(RR) {
      const JR = null !== RR && 0 !== (eR.s.playerFlags(RR.api.apiView, 0) & eR.xd.CursorAim);
      JR !== (0, Kf.r)() && (0, Kf.O)(JR, null !== RR)
    }

    function rf(RR) {
      return (0, xy.e)(Ny.D, RR)
    }
    var ef = GR(42568);
    const af = new uR.e((RR => GR(54591)(`./${RR}/${RR}Client`)));
    let Lf = null,
      nf = null;
    async function Uf(RR) {
      Lf ??= GR.e(33).then((() => GR(40419))).then((RR => {
        nf = RR.createDefaultClientPlugins
      }), (RR => {
        throw Lf = null, RR
      })), await Promise.all([af.load(RR), Lf])
    }

    function Wf(RR) {
      RR.load(new dJ(qt, new Vt))
    }
    let Af = !1;
    const Cf = new WeakMap;

    function Xf(RR) {
      try {
        RR()
      } catch (JR) {
        console.error("[bloxd-wasm-client] a session-end step failed", JR)
      }
    }

    function Mf(RR, JR) {
      ! function() {
        var RR, JR;
        tt.Howler.volume();
        const GR = tt.Howler;
        null === (RR = GR._autoResume) || void 0 === RR || RR.call(GR), null === (JR = GR._autoSuspend) || void 0 === JR || JR.call(GR)
      }();
      const GR = new AR(JR.core, JR.memory, JR.audio);
      let uR;
      try {
        uR = new Nt(GR, JR.options)
      } catch (wR) {
        return RR.crash(Ht.w, wR), null
      }(0, iR.f)(Dt(GR, uR));
      const VR = new jq({
        running: RR,
        api: GR,
        core: JR.core,
        memory: JR.memory,
        staleOr: JR.staleOr,
        reportFault: JR.reportReplayFault,
        options: JR.options,
        sessionInfo: JR.sessionInfo,
        replayShaderPack: JR.replayShaderPack
      });
      (0, ny.v)();
      const KR = new sy({
        api: GR,
        tables: uR,
        sessionInfo: JR.sessionInfo,
        gameFactory: RR => af.loadedFactory(RR),
        defaultPlugins: (RR, JR, GR, yR) => {
          if (null === nf) throw new Error("The default plugins started before they loaded");
          return nf(RR, JR, GR, yR)
        },
        serverOptions: JR.options,
        onNetEvent: RR => {
          VR.netEvent(RR), JR.onNetEvent(RR)
        },
        setLocalOptions: JR => {
          Eq(RR, {
            changes: JR,
            reset: !1
          })
        },
        playSound: (RR, GR, yR, tR, uR, ZR, qR) => JR.audio.playGame(RR, GR, yR, tR, uR, ZR, qR),
        preloadSounds: RR => {
          JR.audio.preload(function(RR) {
            const JR = [];
            for (const GR of RR) {
              const RR = DJ(GR);
              if (null !== RR)
                for (let GR = RR[0]; GR < RR[0] + RR[1]; GR++) JR.push(GR)
            }
            return JR
          }(RR))
        },
        onSessionEnd: () => {
          Xf(tR.l), Xf(Ut), Xf((() => {
            yR.d.set({
              openInGameMenuName: null
            })
          })), Xf((() => {
            JR.audio.endSession()
          }))
        },
        beforeWrite: JR.beforeWrite,
        beforeOp: JR.beforeOp,
        cameraScreen: nt,
        showCameraFacing: Wt,
        reportCameraFault: JR.reportCameraFault,
        onEventOverflow: JR.onEventOverflow,
        screenBandY: qR.k,
        replayEntities: VR.entityHooks,
        hasPackModel: JR.hasPackModel
      });
      return KR.attach(RR), Cf.set(KR, VR), Gt(KR.items, JR.audio),
        function(RR) {
          RR.setClientFreeCameraGrant("isDev", !1);
          const JR = JR => {
            RR.setClientFreeCameraGrant("hasDeveloperRank", JR.playerHasRank("developer"))
          };
          (0, ZR.q)("userContextUpdated", JR)
        }(KR), Af || (Af = !0, (0, ZR.q)("appManagerUpdated|openInGameMenuName", (RR => {
          !RR && (0, fR.n)().includes(fR.d) && (0, fR.q)(fR.d)
        }))), KR
    }

    function Bf(RR) {
      try {
        RR.closeGame()
      } finally {
        var JR;
        null === (JR = Cf.get(RR)) || void 0 === JR || JR.stop(), Cf.delete(RR)
      }
    }
  },
  42430: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => XR,
      g: () => wR,
      j: () => WR,
      m: () => CR,
      q: () => AR,
      s: () => MR
    });
    var yR = GR(177),
      tR = GR(25),
      uR = GR(32),
      ZR = GR(4044),
      qR = GR(1397),
      iR = GR(35072),
      fR = GR(310),
      VR = GR(103),
      KR = GR(173);

    function wR() {
      var RR;
      const JR = (0, ZR.E)(),
        GR = function(RR, JR) {
          return {
            sampleCount: RR.antiAliasing ? 4 : 1,
            n: (0, ZR.v)(RR.pixelScale, JR),
            pixelated: (0, ZR.s)(RR.pixelSmoothing)
          }
        }(tR.d.get("clientEscMenuOptions"), JR);
      return GR.sampleCount > 1 && (0, iR.b)() && (GR.sampleCount = 1), GR.n = null !== (RR = (0, iR.k)()) && void 0 !== RR ? RR : GR.n, yR.i.includes((0, VR.getSoftwareRenderer)()) && (GR.sampleCount = 1, GR.n = Math.max(GR.n, (0, ZR.v)(KR.u.pixelScale, JR))), GR
    }
    let rR = null,
      eR = null;
    const aR = new Set;
    let LR = null;

    function nR() {
      for (const RR of aR) RR()
    }

    function UR() {
      if (null === rR) {
        const RR = document.createElement("div");
        RR.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", RR.setAttribute("aria-hidden", "true"), document.body.append(RR), eR = RR, rR = new ZR.d(RR, nR)
      }
      return rR
    }

    function WR(RR) {
      const JR = (0, ZR.l)(),
        [GR, yR] = UR().size(JR);
      return (0, ZR.i)(GR, yR, JR, RR.n)
    }

    function AR(RR) {
      var JR, GR, yR, tR;
      const uR = (0, ZR.l)(),
        [iR, fR] = UR().size(uR);
      if (iR <= 0 || fR <= 0) return null;
      const VR = (0, ZR.i)(iR, fR, uR, wR().n);
      return (0, ZR.e)(RR, VR), RR.style.left = `${null!==(JR=null===(GR=LR)||void 0===GR?void 0:GR.rect.left)&&void 0!==JR?JR:0}px`, RR.style.top = `${null!==(yR=null===(tR=LR)||void 0===tR?void 0:tR.rect.top)&&void 0!==yR?yR:0}px`, (0, qR.T)(RR.style, LR), VR
    }

    function CR(RR) {
      LR = RR, UR(), (0, qR.M)(eR.style, RR, ""), nR()
    }

    function XR(RR, JR) {
      RR.style.imageRendering = (0, ZR.F)(JR.pixelated)
    }

    function MR(RR, JR) {
      const GR = (0, uR.q)("appManagerUpdated|clientEscMenuOptions", (() => {
          XR(RR, wR()), JR()
        })),
        yR = (0, iR.v)(JR),
        tR = (0, fR.l)(JR);
      return UR(), aR.add(JR), () => {
        GR(), yR(), tR(), aR.delete(JR)
      }
    }
  },
  42488: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => qR,
      f: () => aR,
      g: () => iR,
      h: () => AR,
      l: () => WR,
      m: () => CR
    });
    var yR = GR(2457);
    const tR = 8388608,
      uR = 1e3,
      ZR = 3e4;
    class qR extends Error {
      constructor(RR, JR, GR) {
        super(`${"fetch"===RR?"fetching":"decoding"} ${JR} failed`, GR), this.stage = RR, this.source = JR, this.name = "ShellImageError"
      }
    }
    async function iR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yR.B,
        GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      return VR(await fR(RR, JR), "string" === typeof RR ? RR : null, GR)
    }
    async function fR(RR, JR) {
      if ("string" !== typeof RR) return RR;
      try {
        return await JR(RR)
      } catch (GR) {
        throw new qR("fetch", RR, {
          cause: GR
        })
      }
    }
    async function VR(RR, JR, GR) {
      try {
        const JR = new Blob([RR.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(JR, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: GR
        })
      } catch (yR) {
        throw new qR("decode", null !== JR && void 0 !== JR ? JR : `${RR.byteLength} bytes`, {
          cause: yR
        })
      }
    }
    let KR = null;
    const wR = new Map;
    let rR = 1;
    const eR = new Map;

    function aR(RR) {
      var JR;
      if (KR = RR, null !== RR) {
        null === (JR = RR.EtR) || void 0 === JR || JR.call(RR, UR);
        for (const [JR, GR] of wR) LR(RR, JR, GR);
        wR.clear()
      }
    }

    function LR(RR, JR, GR) {
      eR.has(JR) && void 0 !== RR.dtR ? RR.dtR(JR, GR) : RR.StR(JR, GR)
    }

    function nR(RR, JR) {
      KR ? LR(KR, RR, JR) : wR.set(RR, JR)
    }

    function UR(RR) {
      const JR = eR.get(RR);
      void 0 === JR || JR.decoding || (JR.decoding = !0, VR(JR.bytes, JR.url, JR.orientation).then((GR => {
        JR.decoding = !1, eR.get(RR) === JR ? (JR.failures = 0, nR(RR, GR)) : GR.close()
      }), (GR => {
        JR.decoding = !1, JR.failures++, 1 === JR.failures && console.warn(`shellImages: decoding image ${RR} again failed; trying again until it decodes`, GR), setTimeout((() => {
          UR(RR)
        }), Math.min(uR * 2 ** (JR.failures - 1), ZR))
      })))
    }

    function WR(RR) {
      const JR = rR++;
      return nR(JR, RR), JR
    }
    async function AR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yR.B,
        GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none",
        uR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const ZR = "string" === typeof RR ? RR : null,
        qR = await fR(RR, JR),
        iR = await VR(qR, ZR, GR),
        {
          width: KR,
          height: wR
        } = iR,
        aR = rR++;
      return uR && KR * wR * 4 >= tR && eR.set(aR, {
        bytes: qR.slice(),
        url: ZR,
        orientation: GR,
        decoding: !1,
        failures: 0
      }), nR(aR, iR), {
        id: aR,
        width: KR,
        height: wR
      }
    }

    function CR(RR) {
      var JR;
      eR.delete(RR);
      const GR = wR.get(RR);
      if (GR) return GR.close(), void wR.delete(RR);
      null === (JR = KR) || void 0 === JR || JR.jtR(RR)
    }
  },
  37183: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => qR,
      h: () => fR,
      i: () => ZR,
      k: () => KR
    });
    var yR = GR(37169),
      tR = GR(14);
    const uR = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function ZR(RR) {
      if (RR instanceof WebAssembly.RuntimeError) return !0;
      const JR = RR instanceof Error ? RR.stack : void 0;
      return "string" === typeof JR && uR.test(JR)
    }

    function qR(RR, JR, GR) {
      var tR;
      const ZR = RR instanceof Error ? RR.name : "thrown",
        qR = (RR instanceof Error && null !== (tR = RR.stack) && void 0 !== tR ? tR : "").split("\n").filter((RR => uR.test(RR))).slice(0, 8).map((RR => RR.trim())),
        iR = null === JR ? "wasm memory unknown" : `wasm memory ${Math.round(JR/2**20)} MB`,
        fR = null === GR.panic ? "" : `, panic: ${(0,yR.e)(GR.panic)}`,
        VR = `${ZR}: ${RR instanceof Error?RR.message:String(RR)}`;
      return `${(0,yR.k)(GR.kind,GR.refusedBytes)} ${VR} (${iR})${fR}${qR.length>0?` | ${qR.join(" < ")}`:""}`
    }
    const iR = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function fR(RR) {
      var JR;
      let GR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(RR instanceof Error) || !iR.test(RR.message)) return {};
      if (!("detached" in GR)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, tR.R)(null === (JR = (0, tR.I)(GR, "detached")) || void 0 === JR ? void 0 : JR.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const VR = 500;

    function KR(RR) {
      let JR = "[object Object]";
      try {
        JR = String(RR)
      } catch {}
      if ("[object Object]" !== JR) return JR;
      try {
        var GR, yR;
        return null !== (GR = null === (yR = JSON.stringify(RR)) || void 0 === yR ? void 0 : yR.slice(0, VR)) && void 0 !== GR ? GR : JR
      } catch {
        return JR
      }
    }
  },
  54591: (RR, JR, GR) => {
    var yR = {
      "./bedwars/bedwarsClient": [40540, 9],
      "./bridgeBattle/bridgeBattleClient": [40542, 10],
      "./buildAFactory2/buildAFactory2Client": [39650, 89, 86, 87, 257, 274, 11],
      "./classic/classicClient": [40546, 12],
      "./classic/smp2/smp2Client": [40555, 13],
      "./clutch/clutchClient": [40567, 14],
      "./containmentBreach/containmentBreachClient": [40575, 15],
      "./cooking/cookingClient": [40701, 16],
      "./defusal/defusalClient": [40705, 17],
      "./frontline/frontlineClient": [40714, 89, 86, 87, 18],
      "./goalRush/goalRushClient": [40737, 19],
      "./greenville/greenvilleClient": [40740, 181, 225, 20],
      "./hideseek/hideseekClient": [40770, 21],
      "./luckyBedwars/luckyBedwarsClient": [40772, 22],
      "./murderMystery/murderMysteryClient": [40774, 23],
      "./ninetyNineNights/ninetyNineNightsClient": [40777, 24],
      "./oneBlock/oneBlockClient": [40786, 25],
      "./plots/plotsClient": [40799, 26],
      "./pvpCiv/pvpCivClient": [40872, 27],
      "./secretSanta/secretSantaClient": [40879, 28],
      "./shooting/shootingClient": [40882, 281, 29],
      "./skyIslands/skyIslandsClient": [40891, 30],
      "./skyblock/skyblockClient": [39705, 89, 266, 257, 181, 248, 31],
      "./tsunami/tsunamiClient": [40898, 32]
    };

    function tR(RR) {
      if (!GR.o(yR, RR)) return Promise.resolve().then((() => {
        var JR = new Error("Cannot find module '" + RR + "'");
        throw JR.code = "MODULE_NOT_FOUND", JR
      }));
      var JR = yR[RR],
        tR = JR[0];
      return Promise.all(JR.slice(1).map(GR.e)).then((() => GR(tR)))
    }
    tR.keys = () => Object.keys(yR), tR.id = 54591, RR.exports = tR
  },
  37169: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => yR,
      c: () => uR,
      e: () => iR,
      h: () => ZR,
      k: () => tR
    });
    const yR = /^alloc_failed (\d+) bytes$/;

    function tR(RR, JR) {
      return uR(RR, JR) ? `trap=alloc_failed ${JR} bytes` : `trap=${RR}`
    }

    function uR(RR, JR) {
      return "unreachable" === RR && JR > 0
    }

    function ZR(RR, JR, GR) {
      const yR = function(RR) {
        return RR instanceof WebAssembly.RuntimeError ? /unreachable/i.test(RR.message) ? "unreachable" : /out of bounds/i.test(RR.message) ? "out_of_bounds" : "runtime_error" : (RR instanceof RangeError || RR instanceof Error && "InternalError" === RR.name) && /call stack|recursion/i.test(RR.message) ? "stack_overflow" : "js_error"
      }(RR);
      if ("unreachable" !== yR) return {
        kind: yR,
        panic: null,
        refusedBytes: 0
      };
      const tR = JR(),
        uR = GR();
      return {
        kind: yR,
        panic: uR > 0 ? null : tR,
        refusedBytes: uR
      }
    }
    const qR = 300;

    function iR(RR) {
      return RR.replace(/\s*\n\s*/g, " / ").slice(0, qR)
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);