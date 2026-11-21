export const id = 54;
export const ids = [54];
export const modules = {
  38536: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => oQ,
      g: () => qQ
    });
    var LQ = wQ(22);

    function qQ(QQ) {
      return "refetchCode" === QQ || "devDownloadJson" === QQ || QQ.startsWith("Plugin")
    }

    function oQ(QQ, FQ) {
      "refetchCode" !== QQ ? "Plugin|MobAiPlugin|ShowPetUi" !== QQ ? Promise.all([wQ.e(106), wQ.e(107), wQ.e(102), wQ.e(104), wQ.e(211)]).then((() => wQ(41143))).then((wQ => {
        let {
          runClientGameMessage: LQ
        } = wQ;
        LQ(QQ, FQ)
      })).catch((FQ => {
        console.error(`Game message ${QQ} failed`, FQ)
      })) : LQ.l.GA("showPetUi", FQ) : LQ.l.GA("refetchCode")
    }
  },
  41962: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => LQ,
      d: () => qQ
    });
    const LQ = ["recording", "freecam", "keyframe"];

    function qQ() {
      const QQ = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(QQ[1]) << 32n | BigInt(QQ[0])
    }
  },
  40232: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => kQ
    });
    const LQ = 1 << 20,
      qQ = 1 << 21,
      oQ = 1024,
      DQ = 2048;

    function kQ(QQ, FQ, wQ) {
      const kQ = QQ + LQ,
        vQ = FQ + oQ,
        mQ = wQ + LQ;
      return kQ < 0 || kQ >= qQ || mQ < 0 || mQ >= qQ || vQ < 0 || vQ >= DQ ? -1 : (kQ * qQ + mQ) * DQ + vQ
    }
  },
  40229: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => LQ,
      e: () => DQ,
      f: () => qQ,
      j: () => oQ,
      l: () => uQ,
      n: () => mQ,
      o: () => vQ,
      q: () => kQ
    });
    wQ(3325);
    wQ(40232);

    function LQ(QQ) {}

    function qQ(QQ) {}

    function oQ(QQ) {}

    function DQ(QQ) {}

    function kQ(QQ) {}

    function vQ(QQ, FQ, wQ) {}

    function mQ(QQ) {}

    function uQ(QQ) {}
  },
  9004: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => kQ,
      g: () => vQ
    });
    var LQ = wQ(17);
    const qQ = 24,
      oQ = "farNametags",
      DQ = 1e5;

    function kQ() {
      var QQ;
      return null === (QQ = LQ.c.get("showDistantNametags")) || void 0 === QQ || QQ
    }

    function vQ() {
      var QQ;
      return null !== (QQ = function() {
        const QQ = new URLSearchParams(window.location.search).get(oQ),
          FQ = null === QQ || "" === QQ ? NaN : Number(QQ);
        return Number.isFinite(FQ) && FQ >= 0 ? Math.min(FQ, DQ) : null
      }()) && void 0 !== QQ ? QQ : kQ() ? 0 : qQ
    }
  },
  41954: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      blockIdOf: () => Xv.e,
      clearWasmCameraScreen: () => wq,
      creativeItemIds: () => LL.creativeItemIds,
      decodeMapSettings: () => hv,
      drainTextRerasters: () => lk.b,
      enchantmentPerksOf: () => LL.enchantmentPerksOf,
      endGameHost: () => Fm,
      followCursorAim: () => Vv,
      followMenuPrefs: () => Bq,
      loadAudio: () => Zv,
      loadClientGame: () => Pv,
      loadTextIcons: () => lk.d,
      rasterText: () => zk.e,
      readBoardToEdit: () => av,
      readDrawCensus: () => Jv.f,
      setTextHost: () => lk.i,
      setTextLocalPlayer: () => lk.l,
      showInCreativeInvenOf: () => LL.showInCreativeInvenOf,
      startGameHost: () => Qm,
      startShellAnalytics: () => zv,
      startSkyFeed: () => ov,
      textChanged: () => lk.o,
      warmText: () => zk.h,
      wasmCameraScreen: () => Fq
    });
    wQ(36137);
    var LQ = wQ(17),
      qQ = wQ(36439),
      oQ = wQ(38681),
      DQ = wQ(22),
      kQ = wQ(3263),
      vQ = wQ(36435),
      mQ = wQ(1302),
      uQ = wQ(609),
      HQ = wQ(37777),
      bQ = wQ(4632),
      YQ = wQ(40065),
      xQ = wQ(40003);
    const AQ = xQ.Nb / 4,
      tQ = xQ.q.PlaySound,
      eQ = xQ.q.SoundReset,
      MQ = bQ.O.ReplayFailed,
      GQ = bQ.O.RecorderEvent;
    class pQ {
      constructor(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.core = QQ, this.memory = FQ, this.audio = wQ, this.serverIds = new Int32Array(256).fill(xQ.ad), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.view = new DataView(new ArrayBuffer(xQ.v.BYTES)), this.renderPtr = 0, this.MH = 0, this.renderCapacity = 0, this.render = new Float32Array(0), this.visPtr = 0, this.vis = new Uint8Array(0), this.renderBuffer = null, this.eventsBuffer = null, this.eventsPtr = 0, this.eventsLen = 0, this.events = new DataView(new ArrayBuffer(0)), this.audioView = null, this.scratchPtr = -1, this.corruption = null, this.replay = null, this.queries = new xQ.cb(QQ, (() => {
          this.scratchPtr = -1, this.ensureViews()
        }))
      }
      scratch() {
        return this.scratchPtr < 0 && (this.scratchPtr = this.core.TqQ(), this.ensureViews()), this.scratchPtr
      }
      eventBytes(QQ, FQ) {
        const wQ = this.eventView();
        return new Uint8Array(wQ.buffer, wQ.byteOffset + QQ, FQ)
      }
      get apiView() {
        return this.ensureViews(), this.view
      }
      ensureViews() {
        this.memory().buffer !== this.buffer && this.reView()
      }
      get localId() {
        return xQ.v.localId(this.apiView, 0)
      }
      localDeaths() {
        return xQ.v.localDeaths(this.apiView, 0)
      }
      rereadDirectory() {
        const QQ = this.apiView,
          FQ = xQ.v.entRenderPtr(QQ, 0),
          wQ = xQ.v.entVisPtr(QQ, 0),
          LQ = xQ.v.entCapacity(QQ, 0);
        if (FQ !== this.renderPtr || wQ !== this.visPtr || LQ !== this.MH || this.renderBuffer !== this.buffer) {
          this.renderPtr = FQ, this.visPtr = wQ, this.MH = LQ, this.renderBuffer = this.buffer;
          const QQ = this.memoryView(Float32Array, FQ, LQ * AQ, "the render array"),
            qQ = this.memoryView(Uint8Array, wQ, LQ, "the visibility array");
          this.renderCapacity = QQ && qQ ? LQ : 0, this.render = QQ && qQ ? QQ : new Float32Array(0), this.vis = QQ && qQ ? qQ : new Uint8Array(0)
        }
      }
      memoryView(QQ, FQ, wQ, LQ) {
        try {
          return (0, YQ.s)(QQ, this.memory().buffer, FQ, wQ, LQ)
        } catch (qQ) {
          return this.keepCorruption(qQ), null
        }
      }
      memoryData(QQ, FQ, wQ, LQ) {
        try {
          return (0, YQ.d)(this.memory().buffer, QQ, FQ, wQ, LQ)
        } catch (qQ) {
          return this.keepCorruption(qQ), null
        }
      }
      reportCorruption(QQ) {
        this.keepCorruption(new YQ.b(QQ))
      }
      keepCorruption(QQ) {
        if (!(QQ instanceof YQ.b)) throw QQ;
        this.corruption ??= QQ
      }
      throwCorruption() {
        if (this.corruption) throw this.corruption
      }
      walk(QQ, FQ, wQ) {
        this.rereadDirectory(), this.throwCorruption();
        const {
          ptr: LQ,
          len: qQ
        } = QQ;
        this.eventsPtr = LQ, this.eventsLen = qQ, this.eventsBuffer = null;
        const oQ = this.eventView();
        for (let mQ = 0; mQ < qQ;) {
          const QQ = oQ.getUint32(mQ, !0),
            wQ = 65535 & QQ,
            LQ = QQ >>> 16,
            qQ = mQ + bQ.L;
          if (wQ === xQ.q.EntitySpawned) {
            var DQ;
            if (LQ !== xQ.Ub.BYTES) throw WQ(wQ, mQ, LQ);
            const QQ = xQ.Ub.serverId(oQ, qQ);
            this.spawned(QQ, xQ.Ub.index(oQ, qQ), xQ.Ub.kind(oQ, qQ)), null === (DQ = FQ.entityAdded) || void 0 === DQ || DQ.call(FQ, QQ)
          } else if ((wQ === xQ.q.ChunkSlot || wQ === xQ.q.EntityInfoChanged) && !(0, xQ.ge)(wQ, oQ, qQ, LQ, FQ)) throw WQ(wQ, mQ, LQ);
          mQ = qQ + (0, bQ.Yd)(LQ)
        }
        try {
          var kQ;
          null === (kQ = FQ.afterPrescan) || void 0 === kQ || kQ.call(FQ), this.throwCorruption(), !wQ() && this.dispatch(QQ, FQ, wQ) && (this.throwCorruption(), this.applyListener(), FQ.afterWalk(QQ.kind)), this.throwCorruption()
        } catch (vQ) {
          throw vQ instanceof YQ.b && (this.corruption ??= vQ), vQ
        } finally {
          wQ() || null !== this.corruption || this.applyDespawns(qQ, FQ)
        }
      }
      applyDespawns(QQ, FQ) {
        const wQ = this.eventView();
        for (let qQ = 0; qQ < QQ;) {
          const QQ = wQ.getUint32(qQ, !0),
            oQ = qQ + bQ.L;
          if ((65535 & QQ) === xQ.q.EntityDespawned && QQ >>> 16 === xQ.Ub.BYTES) {
            const QQ = xQ.Ub.serverId(wQ, oQ);
            var LQ;
            if (this.despawned(QQ, xQ.Ub.index(wQ, oQ))) null === (LQ = FQ.entityRemoved) || void 0 === LQ || LQ.call(FQ, QQ)
          }
          qQ = oQ + (0, bQ.Yd)(QQ >>> 16)
        }
        this.rereadDirectory()
      }
      dispatch(QQ, FQ, wQ) {
        const {
          len: LQ,
          net: qQ,
          netOffsets: oQ
        } = QQ;
        let DQ = this.eventView(),
          kQ = 0;
        for (let CQ = 0; CQ < LQ;) {
          const QQ = DQ.getUint32(CQ, !0),
            LQ = 65535 & QQ,
            SQ = QQ >>> 16,
            RQ = CQ + bQ.L;
          let OQ = !1;
          if (kQ < qQ.length && oQ[kQ] === CQ) FQ.netEvent(qQ[kQ]), kQ++, OQ = !0;
          else if (LQ === bQ.O.LocalPlayerBound) {
            var vQ;
            if (SQ !== bQ.nb) throw WQ(LQ, CQ, SQ);
            null === (vQ = FQ.localPlayerBound) || void 0 === vQ || vQ.call(FQ, DQ.getInt32(RQ, !0)), OQ = !0
          } else if (LQ === bQ.O.LocalHurt) {
            var mQ;
            if (SQ !== bQ.kb) throw WQ(LQ, CQ, SQ);
            null === (mQ = FQ.localHurt) || void 0 === mQ || mQ.call(FQ, DQ.getInt32(RQ, !0), DQ.getFloat32(RQ + 4, !0), DQ.getUint32(RQ + 8, !0)), OQ = !0
          } else if (LQ === bQ.O.AttackHit) {
            var uQ;
            if (SQ !== bQ.b) throw WQ(LQ, CQ, SQ);
            const QQ = DQ.getFloat32(RQ, !0),
              wQ = DQ.getFloat32(RQ + 4, !0),
              qQ = DQ.getFloat32(RQ + 8, !0),
              oQ = DQ.getUint32(RQ + 12, !0);
            null === (uQ = FQ.attackHit) || void 0 === uQ || uQ.call(FQ, QQ, wQ, qQ, 0 !== (oQ & bQ.e.Crit), 0 !== (oQ & bQ.e.HitSelf))
          } else if (LQ === bQ.O.PhysicsType) {
            var HQ;
            if (SQ !== bQ.Rb) throw WQ(LQ, CQ, SQ);
            null === (HQ = FQ.physicsType) || void 0 === HQ || HQ.call(FQ, DQ.getUint32(RQ, !0), DQ.getInt32(RQ + 4, !0)), OQ = !0
          } else if (LQ === bQ.O.VehicleEffect) {
            var YQ;
            const QQ = iQ(DQ, RQ, SQ);
            if (null === QQ) throw WQ(LQ, CQ, SQ);
            null === (YQ = FQ.vehicleEffect) || void 0 === YQ || YQ.call(FQ, QQ.op, QQ.name, QQ.icon, QQ.level, QQ.durationMs), OQ = !0
          } else if (LQ === bQ.O.ZoomChanged) {
            var AQ;
            if (SQ !== bQ.Ad) throw WQ(LQ, CQ, SQ);
            null === (AQ = FQ.zoomChanged) || void 0 === AQ || AQ.call(FQ, DQ.getFloat32(RQ, !0), DQ.getUint8(RQ + 4)), OQ = !0
          } else if (LQ === bQ.O.ZoomDisabled) {
            var pQ;
            if (0 !== SQ) throw WQ(LQ, CQ, SQ);
            null === (pQ = FQ.zoomDisabled) || void 0 === pQ || pQ.call(FQ), OQ = !0
          } else if (LQ === bQ.O.GameCamera) {
            var cQ;
            null === (cQ = FQ.gameCamera) || void 0 === cQ || cQ.call(FQ, new Uint8Array(DQ.buffer, DQ.byteOffset + RQ, SQ).slice()), OQ = !0
          } else if (LQ === xQ.q.ChunkSlot || LQ === xQ.q.EntityInfoChanged);
          else if (LQ >= tQ && LQ <= eQ) {
            if (this.audio && !this.audio.onAudioEvent(LQ, DQ, RQ, SQ)) throw WQ(LQ, CQ, SQ)
          } else if (LQ >= MQ && LQ <= GQ) {
            if (this.replay) {
              if (!this.replay.onReplayEvent(LQ, DQ, RQ, SQ)) throw WQ(LQ, CQ, SQ);
              OQ = !0
            }
          } else if (LQ >= xQ.nd && LQ <= xQ.rd && LQ !== bQ.O.EnvLighting) {
            if (!(0, xQ.ge)(LQ, DQ, RQ, SQ, FQ)) throw WQ(LQ, CQ, SQ);
            OQ = !0
          }
          if (OQ) {
            if (wQ()) return !1;
            DQ = this.eventView()
          }
          CQ = RQ + (0, bQ.Yd)(SQ)
        }
        return !wQ()
      }
      applyListener() {
        var QQ;
        if (!this.audio) return;
        const FQ = xQ.v.audioViewPtr(this.apiView, 0),
          wQ = this.memory().buffer;
        let LQ = this.audioView;
        (null === (QQ = LQ) || void 0 === QQ ? void 0 : QQ.buffer) === wQ && LQ.byteOffset === FQ || (LQ = (0, YQ.d)(wQ, FQ, xQ.z.BYTES, 8, "the audio view"), this.audioView = LQ), LQ && this.audio.applyListener(LQ)
      }
      indexOf(QQ) {
        return this.indexById.get("number" === typeof QQ ? QQ : +QQ)
      }
      isLocal(QQ) {
        return QQ !== xQ.ad && QQ === xQ.v.localId(this.apiView, 0)
      }
      Qp(QQ) {
        const FQ = [0, 0, 0];
        return this.readPosition("number" === typeof QQ ? QQ : +QQ, FQ) ? FQ : null
      }
      readPosition(QQ, FQ) {
        const wQ = this.apiView;
        if (void 0 !== this.indexById.get(QQ) && this.isLocal(QQ)) {
          for (let QQ = 0; QQ < 3; QQ++) FQ[QQ] = xQ.v.localPos(wQ, 0, QQ);
          return !0
        }
        return this.readDrawnPosition(QQ, FQ)
      }
      readDrawnPosition(QQ, FQ) {
        const wQ = this.apiView,
          LQ = this.indexById.get(QQ);
        if (void 0 === LQ || LQ >= this.renderCapacity) return FQ[0] = FQ[1] = FQ[2] = NaN, !1;
        const qQ = LQ * AQ;
        for (let oQ = 0; oQ < 3; oQ++) FQ[oQ] = this.render[qQ + oQ] + xQ.v.origin(wQ, 0, oQ);
        return !0
      }
      checkValid(QQ) {
        return void 0 !== this.indexOf(QQ)
      }
      isAlive(QQ) {
        const FQ = this.indexOf(QQ);
        if (void 0 === FQ) return null;
        if (this.ensureViews(), FQ >= this.renderCapacity) return null;
        const wQ = this.vis[FQ];
        return 0 === wQ ? null : 0 !== (wQ & xQ.de.Alive)
      }
      getEntityType(QQ) {
        const FQ = this.indexOf(QQ);
        return void 0 === FQ ? this.isLocal("number" === typeof QQ ? QQ : +QQ) ? "Player" : null : CQ(this.kinds[FQ])
      }
      spawned(QQ, FQ, wQ) {
        if (FQ >= 1048576) throw new YQ.b(`entity ${QQ} spawned at index ${FQ}`);
        this.ensureIndex(FQ), this.serverIds[FQ] === QQ && null !== this.idStr[FQ] || (this.idStr[FQ] = String(QQ)), this.serverIds[FQ] = QQ, this.kinds[FQ] = wQ, this.indexById.set(QQ, FQ)
      }
      despawned(QQ, FQ) {
        let wQ = !1;
        return this.indexById.get(QQ) === FQ && (this.indexById.delete(QQ), wQ = !0), FQ < this.serverIds.length && this.serverIds[FQ] === QQ && (this.serverIds[FQ] = xQ.ad, this.kinds[FQ] = 0, this.idStr[FQ] = null), wQ
      }
      ensureIndex(QQ) {
        const FQ = this.serverIds.length;
        if (QQ < FQ) return;
        let wQ = 2 * FQ;
        for (; wQ <= QQ;) wQ *= 2;
        const LQ = new Int32Array(wQ).fill(xQ.ad);
        LQ.set(this.serverIds), this.serverIds = LQ;
        const qQ = new Uint16Array(wQ);
        qQ.set(this.kinds), this.kinds = qQ;
        for (let oQ = FQ; oQ < wQ; oQ++) this.idStr.push(null)
      }
      eventView() {
        const QQ = this.memory().buffer;
        return QQ !== this.eventsBuffer && (this.eventsBuffer = QQ, this.events = new DataView(QQ, this.eventsPtr, this.eventsLen)), this.events
      }
      reView() {
        const QQ = this.memory().buffer;
        this.buffer = QQ, this.viewPtr < 0 && (this.viewPtr = this.core.KqQ()), this.view = new DataView(QQ, this.viewPtr, xQ.v.BYTES), this.rereadDirectory()
      }
    }

    function cQ(QQ) {
      return QQ >>> xQ.c === xQ.u.Item
    }

    function CQ(QQ) {
      var FQ, wQ;
      const LQ = QQ & xQ.g;
      switch (QQ >>> xQ.c) {
        case xQ.u.Lifeform:
          return null !== (FQ = uQ.l[LQ]) && void 0 !== FQ ? FQ : null;
        case xQ.u.Throwable:
          return null !== (wQ = HQ.l[LQ]) && void 0 !== wQ ? wQ : null;
        case xQ.u.Mesh:
          return "Mesh";
        case xQ.u.Audio:
          return "AudioEntity";
        case xQ.u.Item:
          return "Item";
        default:
          return null
      }
    }
    const SQ = new TextDecoder;

    function iQ(QQ, FQ, wQ) {
      if (wQ < bQ.gd.HEAD_BYTES) return null;
      const LQ = QQ.getUint32(FQ, !0),
        qQ = QQ.getUint32(FQ + 20, !0),
        oQ = QQ.getUint32(FQ + 24, !0),
        DQ = bQ.gd.HEAD_BYTES + (0, bQ.Yd)(qQ);
      if (LQ !== bQ.gd.UPDATE && LQ !== bQ.gd.REMOVE || qQ > wQ || DQ + oQ > wQ) return null;
      const kQ = (wQ, LQ) => SQ.decode(new Uint8Array(QQ.buffer, QQ.byteOffset + FQ + wQ, LQ)),
        vQ = QQ.getFloat64(FQ + 12, !0);
      return {
        op: LQ,
        level: QQ.getFloat64(FQ + 4, !0),
        durationMs: Number.isNaN(vQ) ? null : vQ,
        name: kQ(bQ.gd.HEAD_BYTES, qQ),
        icon: kQ(DQ, oQ)
      }
    }

    function WQ(QQ, FQ, wQ) {
      return new YQ.b(`event ${QQ} at ${FQ} of ${wQ} bytes`)
    }
    var RQ = wQ(317),
      OQ = wQ(1237),
      sQ = wQ(38536),
      rQ = wQ(1907),
      IQ = wQ(40127),
      UQ = wQ(1870),
      NQ = wQ(38700),
      TQ = wQ(38734),
      KQ = wQ(38714),
      zQ = wQ(40047),
      lQ = wQ(2320),
      jQ = wQ(38692),
      aQ = wQ(38725);
    const XQ = Math.max(xQ.Fb.BYTES, xQ.xb.BYTES, xQ.Bb.BYTES);

    function fQ(QQ) {
      if (!(0, aQ.c)(QQ)) return null;
      const FQ = Number(QQ);
      return (0 | FQ) === FQ ? FQ : null
    }
    class VQ {
      constructor(QQ) {
        this.api = QQ, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, jQ.m)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.DQ = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], this.entityHeading = 0, this.localId = xQ.ad, this.localName = String(xQ.ad), this.scratch = null
      }
      readView() {
        this.defaultPoseRead = !1, this.DQ = null;
        const QQ = this.api.queries.directorView() >= xQ.Fb.BYTES ? this.scratchView() : null;
        null !== QQ && (this.defaultFov = (0, UQ.B)(xQ.Fb.fov(QQ, 0)), this.baseFov = (0, UQ.B)(xQ.Fb.baseFov(QQ, 0)), this.aspect = xQ.Fb.aspect(QQ, 0), this.bodyHeading = xQ.Fb.bodyHeading(QQ, 0))
      }
      getViewHeading() {
        return this.viewHeading
      }
      setViewHeading(QQ) {
        this.viewHeading = QQ
      }
      get localPlayerId() {
        const QQ = xQ.v.localId(this.api.apiView, 0);
        return QQ !== this.localId && (this.localId = QQ, this.localName = String(QQ)), this.localName
      }
      getEntityPosition(QQ) {
        return this.readEntity(QQ) ? this.entityFeet : null
      }
      getEntityAimPoint(QQ) {
        return this.readEntity(QQ) ? this.entityAim : null
      }
      getEntityHeading(QQ) {
        const FQ = fQ(QQ);
        if (null === FQ) return null;
        const wQ = xQ.v.localId(this.api.apiView, 0);
        return FQ === wQ && wQ !== xQ.ad ? this.viewHeading : this.readEntity(QQ) ? this.entityHeading : null
      }
      raycastTerrain(QQ, FQ, wQ) {
        const LQ = this.api.queries.cameraSweep(QQ[0], QQ[1], QQ[2], FQ[0], FQ[1], FQ[2], wQ);
        return LQ < wQ - 1e-6 ? LQ : null
      }
      getDefaultPose() {
        if (this.defaultPoseRead) return this.defaultPose;
        this.defaultPoseRead = !0;
        const QQ = this.defaultPose;
        QQ.fov = this.defaultFov;
        const FQ = this.api.queries.directorDefaultPose() >= xQ.xb.BYTES ? this.scratchView() : null;
        if (null === FQ) return QQ;
        for (let wQ = 0; wQ < 3; wQ++) QQ.position[wQ] = xQ.xb.eye(FQ, 0, wQ);
        return QQ.heading = xQ.xb.heading(FQ, 0), QQ.pitch = xQ.xb.pitch(FQ, 0), QQ
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
      readEntity(QQ) {
        const FQ = fQ(QQ);
        if (null === FQ) return !1;
        if (FQ === this.DQ) return this.entityLive;
        this.DQ = FQ;
        const wQ = this.api.queries.directorEntity(FQ) >= xQ.Bb.BYTES ? this.scratchView() : null;
        if (this.entityLive = null !== wQ, null === wQ) return !1;
        for (let LQ = 0; LQ < 3; LQ++) this.entityFeet[LQ] = xQ.Bb.feet(wQ, 0, LQ), this.entityAim[LQ] = this.entityFeet[LQ];
        return this.entityAim[1] += xQ.Bb.eyeHeight(wQ, 0), this.entityHeading = xQ.Bb.heading(wQ, 0), !0
      }
      scratchView() {
        const QQ = this.api.scratch(),
          FQ = this.api.memory().buffer,
          wQ = this.scratch;
        return null !== wQ && wQ.buffer === FQ && wQ.byteOffset === QQ ? wQ : (this.scratch = this.api.memoryData(QQ, XQ, 8, "the director's record"), this.scratch)
      }
    }
    const hQ = {
        mode: "default"
      },
      JQ = {
        show: () => {},
        clear: () => {}
      };

    function EQ() {
      return "undefined" !== typeof document && "hidden" === document.visibilityState
    }
    class nQ {
      constructor(QQ) {
        this.options = QQ, this.nH = void 0, this.director = void 0, this.latest = hQ, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
          PU: 0,
          dU: 0
        }, this.pointedAt = {
          heading: 0,
          pitch: 0
        }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastCallMs = 0, this.answeredPose = !1, this.dv = new Int32Array(3 * xQ.Md), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * xQ.Md), this.nH = new VQ(QQ.api), this.director = new KQ.d(this.nH)
      }
      settingsChanged(QQ) {
        let FQ = hQ;
        if (QQ.length > 0) try {
          FQ = (0, zQ.d)(QQ)
        } catch {}
        this.latest = FQ, this.pending = FQ
      }
      call(QQ, FQ, wQ, LQ, qQ, oQ) {
        var DQ, kQ;
        let vQ;
        this.holding = !1;
        try {
          vQ = this.answer(QQ, FQ, wQ, LQ, qQ, oQ)
        } catch (bQ) {
          var mQ, uQ;
          throw this.answeredPose = !1, null === (mQ = (uQ = this.options).showFacing) || void 0 === mQ || mQ.call(uQ, null), bQ
        }
        const HQ = this.answeredPose && 0 === (LQ & xQ.Db.Held);
        return this.answeredPose = vQ !== xQ.tb.None, this.holding = this.answeredPose && !HQ, null === (DQ = (kQ = this.options).showFacing) || void 0 === DQ || DQ.call(kQ, this.holding ? this.facing : null), vQ
      }
      holdsView() {
        return this.holding
      }
      answer(QQ, FQ, wQ, LQ, qQ, oQ) {
        this.calledThisFrame = !0, this.engaged = !0, this.lastCallMs = this.now();
        const {
          nH: DQ
        } = this;
        DQ.readView();
        if (0 !== (LQ & xQ.Db.Held) || DQ.setViewHeading((0, NQ.o)(DQ.bodyHeading)), void 0 !== this.pending) {
          const QQ = this.pending;
          this.pending = void 0, this.director.setSettings(QQ), this.syncShownSettings()
        }
        this.readLook((0, lQ.c)(FQ), (0, lQ.c)(wQ), LQ, (0, lQ.c)(qQ), (0, lQ.c)(oQ));
        const kQ = this.director.update(QQ / 1e3, this.look);
        if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !kQ) return xQ.tb.None;
        const [vQ, mQ, uQ] = kQ.position;
        if (0 === this.options.api.queries.directorPose(vQ, mQ, uQ, (0, NQ.o)(kQ.heading), (0, NQ.g)(kQ.pitch), (0, UQ.n)(kQ.fov))) return xQ.tb.None;
        if ("default" === this.director.getSettings().mode) return xQ.tb.Pose;
        switch (this.facing) {
          case "camera":
            return xQ.tb.FaceCamera;
          case "cursor":
            return xQ.tb.FaceCursor;
          default:
            return xQ.tb.FaceMovement
        }
      }
      afterFrame(QQ) {
        QQ ? (this.calledThisFrame || (this.holding = !1, this.engaged && this.idle()), this.calledThisFrame = !1) : this.centresLen > 0 && this.hidden() && this.now() - this.lastCallMs > 1e3 && this.setCentres(0), this.centresUnsent && this.sendCentres()
      }
      reset() {
        this.latest = hQ, this.idle()
      }
      restart() {
        const QQ = this.holding;
        this.idle(), this.holding = QQ
      }
      idle() {
        var QQ, FQ;
        this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new KQ.d(this.nH), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, null === (QQ = (FQ = this.options).showFacing) || void 0 === QQ || QQ.call(FQ, null), this.setCentres(0)
      }
      syncShownSettings() {
        const QQ = this.director.getSettings();
        if (QQ === this.shownSettings) return;
        this.shownSettings = QQ;
        const FQ = (0, TQ.d)(QQ);
        this.facing = FQ.facing, this.mouseTurns = FQ.mouseTurns
      }
      readLook(QQ, FQ, wQ, LQ, qQ) {
        const oQ = this.look,
          DQ = 0 !== (wQ & xQ.Db.LookPointed);
        if (null === this.mouseTurns && !DQ) return oQ.PU = 0, oQ.dU = 0, void(oQ.pointedAt = void 0);
        let kQ;
        DQ && (this.pointedAt.heading = LQ, this.pointedAt.pitch = qQ, kQ = this.pointedAt);
        const {
          nH: vQ
        } = this;
        vQ.setViewHeading((0, TQ.c)(vQ.getViewHeading(), QQ, FQ, kQ, "look" === this.mouseTurns, oQ))
      }
      writeCentres(QQ) {
        const FQ = this.next,
          wQ = Math.min(QQ.length, xQ.Md);
        for (let LQ = 0; LQ < wQ; LQ++)
          for (let wQ = 0; wQ < 3; wQ++) FQ[3 * LQ + wQ] = Math.floor(QQ[LQ][wQ] / xQ.H);
        this.setCentres(wQ)
      }
      setCentres(QQ) {
        const {
          dv: FQ,
          next: wQ
        } = this;
        let LQ = QQ === this.centresLen;
        for (let qQ = 0; LQ && qQ < 3 * QQ; qQ++) LQ = FQ[qQ] === wQ[qQ];
        LQ || (FQ.fill(0), FQ.set(wQ.subarray(0, 3 * QQ)), this.centresLen = QQ, this.centresUnsent = !0, this.sendCentres())
      }
      sendCentres() {
        const QQ = this.options.cmd();
        null !== QQ && (0, xQ.Af)(QQ, 0, this.dv, this.centresLen) && (this.centresUnsent = !1)
      }
      screen() {
        var QQ, FQ, wQ;
        return null !== (QQ = null === (FQ = (wQ = this.options).screen) || void 0 === FQ ? void 0 : FQ.call(wQ)) && void 0 !== QQ ? QQ : JQ
      }
      hidden() {
        var QQ;
        return (null !== (QQ = this.options.isPageHidden) && void 0 !== QQ ? QQ : EQ)()
      }
      now() {
        var QQ, FQ, wQ;
        return null !== (QQ = null === (FQ = (wQ = this.options).now) || void 0 === FQ ? void 0 : FQ.call(wQ)) && void 0 !== QQ ? QQ : performance.now()
      }
    }
    var gQ = wQ(40232);
    const PQ = xQ.H * xQ.H * xQ.H,
      ZQ = Math.log2(xQ.H),
      yQ = xQ.H - 1,
      BQ = xQ.T.BYTES / 4,
      dQ = new Uint16Array(PQ);

    function QF(QQ, FQ, wQ) {
      return QQ * xQ.H * xQ.H + FQ * xQ.H + wQ
    }
    class FF {
      constructor(QQ) {
        this.chunk = QQ
      }
      get data() {
        return this.chunk.gameVoxels()
      }
      index(QQ, FQ, wQ) {
        return QF(QQ, FQ, wQ)
      }
    }
    class wF {
      constructor() {
        this.ids = new Map, this.cleared = new Set, this.layers = 0, this.patched = null, this.from = null
      }
    }
    class LF {
      constructor(QQ, FQ, wQ, LQ) {
        this.table = QQ, this.slot = FQ, this.generation = wQ, this.epoch = LQ, this.Sb = new FF(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = dQ, this.dataPtr = 0, this.dataBuffer = null, this.dataStamp = -1, this.version = 0, this.layers = null, this.layersVersion = -1, this.layersPtr = -1, this.staleLayers = 0
      }
      get Ex() {
        return this.voxelData(), this.version === this.shownCore && this.writeCount === this.shownWrites || (this.shownCore = this.version, this.shownWrites = this.writeCount, this.shownVersion = this.table.nextVersion()), this.shownVersion
      }
      get pY() {
        const QQ = this.gameVoxels(),
          FQ = this.layers ??= new Uint16Array(xQ.H);
        this.layersVersion === this.version && this.layersPtr === this.dataPtr || (this.layersVersion = this.version, this.layersPtr = this.dataPtr, this.staleLayers = -1);
        for (let wQ = 0; 0 !== this.staleLayers; wQ++) {
          const LQ = 1 << wQ;
          0 !== (this.staleLayers & LQ) && (this.staleLayers &= ~LQ, FQ[wQ] = qF(QQ, wQ))
        }
        return FQ
      }
      voxelData() {
        return this.dataStamp === this.table.stamp && 0 !== this.data.length ? this.data : this.reread()
      }
      gameVoxels() {
        const QQ = this.voxelData(),
          FQ = this.writes;
        if (null === FQ || 0 === FQ.ids.size) return QQ;
        if (FQ.from !== QQ) {
          const wQ = FQ.patched ??= new Uint16Array(PQ);
          wQ.set(QQ);
          for (const [QQ, LQ] of FQ.ids) wQ[QQ] = LQ;
          FQ.from = QQ
        }
        return FQ.patched
      }
      written(QQ) {
        var FQ;
        return null === (FQ = this.writes) || void 0 === FQ ? void 0 : FQ.ids.get(QQ)
      }
      hasWrites() {
        return null !== this.writes && 0 !== this.writes.ids.size
      }
      write(QQ, FQ, wQ) {
        const LQ = this.writes ??= new wF;
        LQ.ids.set(QQ, FQ), wQ && LQ.cleared.add(QQ), null !== LQ.from && (LQ.patched[QQ] = FQ);
        const qQ = 1 << (QQ >> ZQ & yQ);
        LQ.layers |= qQ, this.staleLayers |= qQ, this.writeCount++
      }
      clearWrites() {
        const QQ = this.writes;
        null !== QQ && (this.staleLayers |= QQ.layers, QQ.ids.clear(), QQ.cleared.clear(), QQ.layers = 0, QQ.from = null)
      }
      dataCleared(QQ) {
        var FQ;
        return !0 === (null === (FQ = this.writes) || void 0 === FQ ? void 0 : FQ.cleared.has(QQ))
      }
      reread() {
        this.dataStamp = this.table.stamp;
        const QQ = this.table.slotWords(),
          FQ = this.slot * BQ;
        if (this.epoch !== this.table.epoch || FQ + BQ > QQ.length || 0 === QQ[FQ + 3] || QQ[FQ + 2] !== this.generation) return this.data = dQ, this.dataPtr = 0, dQ;
        this.version = QQ[FQ + 1];
        const wQ = QQ[FQ + 0],
          LQ = QQ.buffer;
        return wQ === this.dataPtr && LQ === this.dataBuffer || (this.dataPtr = wQ, this.dataBuffer = LQ, this.data = this.table.voxelsAt(LQ, wQ)), this.data
      }
    }

    function qF(QQ, FQ) {
      const wQ = QQ[FQ * xQ.H];
      for (let LQ = 0; LQ < xQ.H; LQ++) {
        const qQ = QF(LQ, FQ, 0);
        for (let FQ = 0; FQ < xQ.H; FQ++)
          if (QQ[qQ + FQ] !== wQ) return 65535
      }
      return wQ
    }
    const oF = new Uint32Array(0);

    function DF(QQ, FQ, wQ) {
      return QF(QQ & yQ, FQ & yQ, wQ & yQ)
    }
    class kF {
      constructor(QQ, FQ) {
        this.memory = QQ, this.apiView = FQ, this.chunks = new Map, this.written = [], this.lastKey = -1, this.lastChunk = void 0, this.slotsPtr = 0, this.slotsLen = 0, this.slotsBuffer = null, this.slots = oF, this.walkPtr = 0, this.walkLen = 0, this.walkBuffer = null, this.walk = oF, this.epoch = 0, this.stamp = 0, this.versions = 0, this.corruption = null
      }
      apply(QQ, FQ, wQ, LQ, qQ, oQ) {
        if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, oQ === xQ.X.ResetAll) return this.chunks.clear(), void this.epoch++;
        if (oQ !== xQ.X.Stored && oQ !== xQ.X.Unloaded) throw new YQ.b(`ChunkSlot flags ${oQ}`);
        const DQ = (0, gQ.e)(QQ, FQ, wQ);
        if (DQ < 0) return;
        if (oQ === xQ.X.Unloaded) return void this.chunks.delete(DQ);
        const kQ = this.chunks.get(DQ);
        (null === kQ || void 0 === kQ ? void 0 : kQ.slot) === LQ && kQ.generation === qQ || this.chunks.set(DQ, new LF(this, LQ, qQ, this.epoch))
      }
      touch() {
        this.stamp++, this.clearOverlay(), this.viewWalkThrough()
      }
      refresh() {
        if (this.stamp++, this.corruption) throw this.corruption;
        const QQ = this.apiView(),
          FQ = xQ.v.chunkSlotsPtr(QQ, 0),
          wQ = xQ.v.chunkSlotsLen(QQ, 0);
        FQ === this.slotsPtr && wQ === this.slotsLen || (this.slotsPtr = FQ, this.slotsLen = wQ, this.slotsBuffer = null, this.slotWords()), this.viewWalkThrough(), this.clearOverlay()
      }
      viewWalkThrough() {
        const QQ = this.apiView(),
          FQ = xQ.v.walkThroughPtr(QQ, 0),
          wQ = xQ.v.walkThroughLen(QQ, 0);
        FQ === this.walkPtr && wQ === this.walkLen || (this.walkPtr = FQ, this.walkLen = wQ, this.walkBuffer = null, this.walkWords())
      }
      clearOverlay() {
        for (const QQ of this.written) QQ.clearWrites();
        this.written.length = 0
      }
      nextVersion() {
        return ++this.versions
      }
      slotWords() {
        const QQ = this.memory().buffer;
        var FQ;
        QQ !== this.slotsBuffer && (this.slotsBuffer = QQ, this.slots = null !== (FQ = (0, YQ.s)(Uint32Array, QQ, this.slotsPtr, this.slotsLen * BQ, "the chunk directory")) && void 0 !== FQ ? FQ : oF);
        return this.slots
      }
      voxelsAt(QQ, FQ) {
        try {
          var wQ;
          return null !== (wQ = (0, YQ.s)(Uint16Array, QQ, FQ, PQ, "a chunk's voxels")) && void 0 !== wQ ? wQ : dQ
        } catch (LQ) {
          if (!(LQ instanceof YQ.b)) throw LQ;
          return this.corruption ??= LQ, dQ
        }
      }
      chunk(QQ, FQ, wQ) {
        var LQ;
        return null !== (LQ = this.chunks.get((0, gQ.e)(QQ, FQ, wQ))) && void 0 !== LQ ? LQ : null
      }
      isLoaded(QQ, FQ, wQ) {
        return void 0 !== this.chunkAt(Math.floor(QQ), Math.floor(FQ), Math.floor(wQ))
      }
      um(QQ, FQ, wQ) {
        var LQ;
        const qQ = Math.floor(QQ),
          oQ = Math.floor(FQ),
          DQ = Math.floor(wQ),
          kQ = this.chunkAt(qQ, oQ, DQ);
        if (!kQ) return 0;
        const vQ = DF(qQ, oQ, DQ);
        return null !== (LQ = kQ.written(vQ)) && void 0 !== LQ ? LQ : kQ.voxelData()[vQ]
      }
      setOverlay(QQ, FQ, wQ, LQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const oQ = this.chunkAt(QQ, FQ, wQ);
        return !!oQ && (oQ.hasWrites() || this.written.push(oQ), oQ.write(DF(QQ, FQ, wQ), LQ, qQ), !0)
      }
      version(QQ, FQ, wQ) {
        var LQ, qQ;
        return null !== (LQ = null === (qQ = this.chunks.get((0, gQ.e)(QQ, FQ, wQ))) || void 0 === qQ ? void 0 : qQ.Ex) && void 0 !== LQ ? LQ : null
      }
      scan(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ) {
        const vQ = xQ.H;
        let mQ = 0;
        for (let uQ = Math.floor(FQ / vQ); uQ * vQ < qQ; uQ++) {
          const HQ = uQ * vQ,
            bQ = Math.min(qQ - HQ, vQ);
          for (let qQ = Math.floor(QQ / vQ); qQ * vQ < LQ; qQ++) {
            const YQ = qQ * vQ,
              xQ = Math.min(LQ - YQ, vQ);
            for (let LQ = Math.floor(wQ / vQ); LQ * vQ < oQ; LQ++) {
              const AQ = this.chunks.get((0, gQ.e)(qQ, uQ, LQ));
              if (!AQ) continue;
              const tQ = LQ * vQ,
                eQ = Math.max(wQ - tQ, 0),
                MQ = Math.min(oQ - tQ, vQ),
                GQ = AQ.pY,
                pQ = AQ.gameVoxels();
              for (let wQ = Math.max(FQ - HQ, 0); wQ < bQ; wQ++) {
                const FQ = GQ[wQ];
                if (65535 === FQ || 0 !== DQ[FQ]) {
                  mQ++;
                  for (let FQ = Math.max(QQ - YQ, 0); FQ < xQ; FQ++) {
                    const QQ = QF(FQ, wQ, 0);
                    for (let LQ = eQ; LQ < MQ; LQ++) {
                      const qQ = pQ[QQ + LQ];
                      0 !== DQ[qQ] && kQ.push(YQ + FQ, HQ + wQ, tQ + LQ, qQ)
                    }
                  }
                }
              }
            }
          }
        }
        return mQ
      }
      dataCleared(QQ, FQ, wQ) {
        var LQ;
        const qQ = Math.floor(QQ),
          oQ = Math.floor(FQ),
          DQ = Math.floor(wQ);
        return !0 === (null === (LQ = this.chunkAt(qQ, oQ, DQ)) || void 0 === LQ ? void 0 : LQ.dataCleared(DF(qQ, oQ, DQ)))
      }
      isWalkThrough(QQ) {
        if (!Number.isInteger(QQ) || QQ < 0 || QQ > 65535) return !1;
        const FQ = this.walkWords(),
          wQ = QQ >>> 5;
        return wQ < FQ.length && 1 === (FQ[wQ] >>> (31 & QQ) & 1)
      }
      walkWords() {
        const QQ = this.memory().buffer;
        var FQ;
        QQ !== this.walkBuffer && (this.walkBuffer = QQ, this.walk = null !== (FQ = (0, YQ.s)(Uint32Array, QQ, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== FQ ? FQ : oF);
        return this.walk
      }
      chunkAt(QQ, FQ, wQ) {
        if ((0 | QQ) !== QQ || (0 | FQ) !== FQ || (0 | wQ) !== wQ) return;
        const LQ = (0, gQ.e)(QQ >> ZQ, FQ >> ZQ, wQ >> ZQ);
        return LQ !== this.lastKey && (this.lastKey = LQ, this.lastChunk = this.chunks.get(LQ)), this.lastChunk
      }
    }
    var vF = wQ(38039),
      mF = wQ(37359),
      uF = wQ(36419),
      HF = wQ(36242),
      bF = wQ(9030),
      YF = wQ(38654),
      xF = wQ(201);
    const AF = ["ambient", "cars", "crowd", "customGame_horror", "dig", "fire", "fishing", "gameStart", "gunMisc", "gunPistol", "gunRifle", "gunSemiAutomatic", "gunShotgun", "gunSubmachineGun", "mobBear", "mobCat", "mobCow", "mobCrone", "mobDeer", "mobDog", "mobFennec", "mobGolem", "mobGorilla", "mobHorse", "mobKnight", "mobPig", "mobReaver", "mobSheep", "mobSkeleton", "mobStag", "mobStalker", "mobWarper", "mobWraith", "mobZombie", "note", "phoneAndMoney", "police", "randomBeep", "randomCannon", "randomCash", "randomExp", "randomFallsmall", "randomFire", "randomFirecracker", "randomItems", "randomLaugh", "randomMagic", "randomSplash", "rpg", "step", "survivalFactory", "town"],
      tF = [
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
      eF = tF.map((QQ => {
        let [FQ] = QQ;
        return FQ
      })),
      MF = Uint8Array.from(tF, (QQ => {
        let [, FQ] = QQ;
        return FQ
      })),
      GF = {
        semi_automatic: 11,
        submachine: 13,
        rifle: 10,
        pistol: 9,
        shotgun: 12
      },
      pF = 8;
    var cF = wQ(36390),
      CF = wQ(36410),
      SF = wQ(36404),
      iF = wQ(259);
    class WF {
      constructor(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : iF.d;
        this.sheet = QQ, this.onError = FQ, this.idle = wQ, this.queue = [], this.asked = new Set, this.cancelIdle = null, this.gen = 0, this.onIdle = QQ => {
          this.cancelIdle = null;
          try {
            if (QQ.timeRemaining() >= 1) {
              let QQ = this.queue.shift();
              for (; void 0 !== QQ && !this.load(QQ);) QQ = this.queue.shift()
            }
          } catch (FQ) {
            this.onError(FQ)
          } finally {
            this.schedule()
          }
        }
      }
      preload(QQ) {
        const FQ = [...QQ].sort(((QQ, FQ) => QQ - FQ));
        for (const wQ of FQ) this.asked.has(wQ) || (this.asked.add(wQ), this.queue.push(wQ));
        this.schedule()
      }
      cancel() {
        var QQ;
        this.queue.length = 0, this.asked.clear(), this.gen++, null === (QQ = this.cancelIdle) || void 0 === QQ || QQ.call(this), this.cancelIdle = null
      }
      schedule() {
        null === this.cancelIdle && this.queue.length > 0 && (this.cancelIdle = this.idle(this.onIdle))
      }
      load(QQ) {
        const FQ = this.sheet(QQ, !1),
          wQ = this.sheet(QQ, !0),
          [LQ, qQ] = "unloaded" === FQ.state() && "unloaded" !== wQ.state() ? [wQ, FQ] : [FQ, wQ],
          oQ = this.gen,
          DQ = () => {
            try {
              oQ === this.gen && "unloaded" === qQ.state() && qQ.load()
            } catch (QQ) {
              this.onError(QQ)
            }
          },
          kQ = LQ.state();
        return "unloaded" === kQ ? (LQ.once("load", DQ), LQ.load(), !0) : "unloaded" === qQ.state() && ("loading" === kQ ? (LQ.once("load", DQ), !1) : (qQ.load(), !0))
      }
    }
    var RF = wQ(40335);
    const OF = {
        coneInnerAngle: 360,
        coneOuterAngle: 360,
        coneOuterGain: 0,
        distanceModel: "inverse",
        maxDistance: 1e3,
        panningModel: "HRTF",
        rolloffFactor: 1
      },
      sF = xF.e.iG * xF.e.playerEyeToHeightRatio,
      rF = [0, 0, -1, 0, 1, 0],
      IF = AF.indexOf("note");

    function UF(QQ) {
      return QQ >= 0 ? Math.min(1, QQ) : 0
    }

    function NF(QQ) {
      var FQ;
      let wQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
      const LQ = function(QQ) {
        let FQ = 0,
          wQ = eF.length;
        for (; FQ < wQ;) {
          const LQ = FQ + wQ >>> 1;
          eF[LQ] < QQ ? FQ = LQ + 1 : wQ = LQ
        }
        return FQ
      }(QQ);
      if ("" === QQ || null === (FQ = eF[LQ]) || void 0 === FQ || !FQ.startsWith(QQ)) return -1;
      if (eF[LQ] === QQ) return LQ;
      let qQ = LQ + 1;
      for (; qQ < eF.length && eF[qQ].startsWith(QQ);) qQ++;
      return LQ + Math.floor(wQ() * (qQ - LQ))
    }
    class TF {
      constructor(QQ, FQ, wQ, LQ, qQ) {
        this.group = QQ, this.loudness = FQ, this.startMs = wQ, this.howl = LQ, this.host = qQ, this.id = 0, this.direct = !1
      }
      getDurationMs() {
        const QQ = this.host.alive(this.id);
        return QQ ? 1e3 * this.howl.duration(this.id) / QQ.rate : 0
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
    class KF {
      constructor(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          LQ = arguments.length > 3 ? arguments[3] : void 0;
        this.createHowl = QQ, this.listener = FQ, this.now = wQ, this.errors = 0, this.sheets = new Map, this.unloading = new Uint16Array(AF.length), this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader = void 0, this.voices = new SF.e, this.failed = new Set, this.started = new Set, this.voiceHost = {
          alive: QQ => this.aliveVoice(QQ),
          started: QQ => this.started.has(QQ),
          drop: QQ => {
            var FQ;
            null === (FQ = this.live.get(QQ)) || void 0 === FQ || FQ.howl.stop(QQ), this.forget(QQ)
          }
        }, this.handlers = {
          playSound: (QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ) => {
            if (LQ >= eF.length) return;
            const mQ = 0 !== (qQ & xQ.Xd.Loop);
            qQ & xQ.Xd.TwoD ? this.start(LQ, !1, DQ, oQ, kQ, mQ) : this.startSpatial(LQ, DQ, oQ, kQ, mQ, QQ, FQ, wQ, vQ, this.earDistSq(QQ, FQ, wQ))
          },
          soundPos: (QQ, FQ, wQ, LQ) => {
            const qQ = this.core.get(LQ);
            var oQ;
            void 0 !== qQ && (null === (oQ = this.live.get(qQ)) || void 0 === oQ || oQ.howl.pos(wQ, FQ, QQ, qQ))
          },
          soundSet: (QQ, FQ, wQ, LQ) => {
            const qQ = this.core.get(QQ),
              oQ = void 0 === qQ ? void 0 : this.live.get(qQ);
            void 0 !== qQ && oQ && (this.setRel(qQ, FQ), oQ.rate = wQ, oQ.howl.rate(wQ, qQ), oQ.spatial && oQ.howl.pannerAttr({
              refDistance: LQ
            }, qQ))
          },
          soundFade: (QQ, FQ, wQ, LQ) => {
            const qQ = this.core.get(QQ);
            void 0 !== qQ && this.fade(qQ, FQ, wQ, 0 !== (LQ & xQ.Vd.StopAfter))
          },
          soundStop: QQ => {
            const FQ = this.core.get(QQ);
            var wQ;
            void 0 !== FQ && (null === (wQ = this.live.get(FQ)) || void 0 === wQ || wQ.howl.stop(FQ), this.forget(FQ))
          },
          soundReset: () => {
            this.stopCore()
          }
        }, this.loader = new WF(((QQ, FQ) => this.sheet(QQ, FQ)), (QQ => {
          this.errors++, console.error("Audio preload failed", QQ)
        }), LQ)
      }
      prepare() {
        for (let QQ = 0; QQ < AF.length; QQ++) this.prepareSheet(QQ)
      }
      prepareSheet(QQ) {
        this.sheet(QQ, !1), this.sheet(QQ, !0)
      }
      preload(QQ) {
        this.loader.preload(QQ)
      }
      cancelPreload() {
        this.loader.cancel()
      }
      freeSheetsAfterGame() {
        for (let QQ = 0; QQ < AF.length; QQ++) {
          if (CF.d.has(AF[QQ])) continue;
          const FQ = [];
          for (const LQ of [!1, !0]) {
            const wQ = zF(QQ, LQ),
              qQ = this.sheets.get(wQ);
            void 0 !== qQ && "loading" !== qQ.state() && FQ.push({
              key: wQ,
              howl: qQ
            })
          }
          if (!FQ.some((QQ => {
              let {
                howl: FQ
              } = QQ;
              return "loaded" === FQ.state()
            }))) continue;
          this.unloading[QQ] += FQ.length;
          const wQ = () => {
            this.unloading[QQ]--, 0 === this.unloading[QQ] && this.prepareSheet(QQ)
          };
          for (const {
              key: QQ,
              howl: LQ
            }
            of FQ) this.sheets.delete(QQ), "loaded" === LQ.state() ? (0, cF.c)(LQ, wQ) : (LQ.unload(), wQ())
        }
      }
      onAudioEvent(QQ, FQ, wQ, LQ) {
        if (QQ < xQ.q.PlaySound || QQ > xQ.q.SoundReset) return !1;
        try {
          return (0, xQ.ge)(QQ, FQ, wQ, LQ, this.handlers)
        } catch (qQ) {
          return this.errors++, console.error("Audio event failed", qQ), !0
        }
      }
      applyListener(QQ) {
        const FQ = this.nextPose;
        for (let LQ = 0; LQ < 3; LQ++) FQ[2 - LQ] = xQ.z.listener(QQ, 0, LQ), FQ[5 - LQ] = xQ.z.forward(QQ, 0, LQ), FQ[8 - LQ] = xQ.z.up(QQ, 0, LQ);
        0 === FQ[3] && 0 === FQ[4] && 0 === FQ[5] && FQ.set(this.posed ? this.pose.subarray(3) : rF, 3);
        for (let LQ = 0; LQ < 9; LQ++)
          if (!Number.isFinite(FQ[LQ])) return;
        const wQ = this.pose;
        if (this.posed) {
          let QQ = !0;
          for (let LQ = 0; LQ < 9 && QQ; LQ++) QQ = FQ[LQ] === wQ[LQ];
          if (QQ) return
        }
        this.listener.apply(FQ) && (wQ.set(FQ), this.posed = !0)
      }
      playGame(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
        const kQ = NF(QQ);
        if (kQ < 0) return RF.b;
        if (!wQ) {
          const {
            howl: QQ,
            id: wQ
          } = this.start(kQ, !1, FQ, 0, 1, DQ);
          return this.gameSound(QQ, wQ, !1)
        }
        const vQ = wQ[0],
          mQ = wQ[1] + sF,
          uQ = wQ[2];
        if (!Number.isFinite(vQ) || !Number.isFinite(mQ) || !Number.isFinite(uQ)) return RF.b;
        let HQ;
        if (LQ) {
          const QQ = vQ - LQ[0],
            FQ = mQ - LQ[1],
            wQ = uQ - LQ[2];
          if (HQ = QQ * QQ + FQ * FQ + wQ * wQ, HQ > qQ * qQ) return RF.b
        } else HQ = this.earDistSq(vQ, mQ, uQ);
        const bQ = this.startSpatial(kQ, FQ, 0, 1, DQ, vQ, mQ, uQ, oQ, HQ);
        return bQ ? this.gameSound(bQ.howl, bQ.id, !0) : RF.b
      }
      setMaster(QQ, FQ) {
        this.level = UF(QQ);
        const wQ = FQ ? this.level : 0;
        if (wQ !== this.master) {
          this.master = wQ;
          for (const [QQ, FQ] of this.live) FQ.fadeMs = 0, FQ.gain = FQ.rel * this.master, FQ.howl.volume(FQ.gain, QQ)
        }
      }
      stopCore() {
        for (const FQ of [...this.core.values()]) {
          var QQ;
          null === (QQ = this.live.get(FQ)) || void 0 === QQ || QQ.howl.stop(FQ)
        }
        this.core.clear()
      }
      stopAll() {
        this.cancelPreload();
        for (const [QQ, FQ] of [...this.live]) FQ.howl.stop(QQ), this.forget(QQ);
        this.core.clear()
      }
      gameSound(QQ, FQ, wQ) {
        const LQ = {
          stop: () => (this.live.has(FQ) && QQ.stop(FQ), LQ),
          fade: (QQ, wQ, qQ) => {
            var oQ, DQ;
            const kQ = this.level > 0 ? wQ / this.level : wQ > 0 && null !== (oQ = null === (DQ = this.live.get(FQ)) || void 0 === DQ ? void 0 : DQ.rel) && void 0 !== oQ ? oQ : 0;
            return this.fade(FQ, kQ, qQ, !1), LQ
          },
          rate: wQ => {
            const qQ = this.live.get(FQ);
            return qQ && (qQ.rate = function(QQ) {
              return QQ > 0 && QQ < 1 / 0 ? QQ : 1
            }(wQ), QQ.rate(qQ.rate, FQ)), LQ
          },
          getVolume: () => {
            var QQ, wQ;
            return (null !== (QQ = null === (wQ = this.live.get(FQ)) || void 0 === wQ ? void 0 : wQ.rel) && void 0 !== QQ ? QQ : 0) * this.level
          },
          getRelativeVolume: () => {
            var QQ, wQ;
            return null !== (QQ = null === (wQ = this.live.get(FQ)) || void 0 === wQ ? void 0 : wQ.rel) && void 0 !== QQ ? QQ : 0
          },
          setRelativeVolume: QQ => (this.setRel(FQ, QQ), LQ),
          setPannerAttr: qQ => {
            if (wQ && this.live.has(FQ)) {
              const wQ = {
                ...OF,
                refDistance: uF.h
              };
              for (const [QQ, FQ] of Object.entries(qQ)) "number" !== typeof FQ && "string" !== typeof FQ || (wQ[QQ] = FQ);
              QQ.pannerAttr({
                coneOuterAngle: wQ.coneOuterAngle
              }, FQ), QQ.pannerAttr(wQ, FQ)
            }
            return LQ
          },
          setPosition: qQ => (wQ && this.live.has(FQ) && Number.isFinite(qQ[0] + qQ[1] + qQ[2]) && QQ.pos(qQ[2], qQ[1], qQ[0], FQ), LQ)
        };
        return LQ
      }
      startSpatial(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ) {
        const uQ = this.sheet(MF[QQ], !0);
        let HQ = null;
        if (!qQ) {
          if (this.failed.has(uQ)) return null;
          const wQ = MF[QQ] === IF ? null : (0, SF.k)(eF[QQ]),
            LQ = (0, SF.h)(UF(FQ), Math.sqrt(mQ), vQ);
          if (HQ = new TF(wQ, LQ, this.now(), uQ, this.voiceHost), !this.voices.admit(HQ)) return null
        }
        const bQ = this.start(QQ, !0, FQ, wQ, LQ, qQ);
        return HQ && (HQ.id = bQ.id, HQ.direct = "loaded" === uQ.state() && !uQ._playLock), uQ.pannerAttr({
          coneOuterAngle: 360
        }, bQ.id), uQ.pannerAttr({
          ...OF,
          refDistance: vQ
        }, bQ.id), uQ.pos(kQ, DQ, oQ, bQ.id), bQ
      }
      aliveVoice(QQ) {
        const FQ = this.live.get(QQ);
        if (!FQ) return;
        const wQ = FQ.howl._soundById(QQ);
        if (wQ && !wQ._ended) return FQ;
        this.forget(QQ)
      }
      earDistSq(QQ, FQ, wQ) {
        if (!this.posed) return 0;
        const LQ = QQ - this.pose[2],
          qQ = FQ - this.pose[1],
          oQ = wQ - this.pose[0];
        return LQ * LQ + qQ * qQ + oQ * oQ
      }
      start(QQ, FQ, wQ, LQ, qQ, oQ) {
        const DQ = UF(wQ),
          kQ = this.sheet(MF[QQ], FQ);
        "unloaded" === kQ.state() && kQ.load();
        const vQ = kQ.play(eF[QQ]),
          mQ = DQ * this.master;
        return kQ.volume(mQ, vQ), this.live.set(vQ, {
          howl: kQ,
          rel: DQ,
          gain: mQ,
          fadeFrom: mQ,
          fadeAt: 0,
          fadeMs: 0,
          rate: qQ,
          handle: LQ,
          spatial: FQ,
          stopTimer: void 0
        }), 0 !== LQ && this.core.set(LQ, vQ), 1 !== qQ && kQ.rate(qQ, vQ), oQ && kQ.loop(!0, vQ), {
          howl: kQ,
          id: vQ
        }
      }
      sheet(QQ, FQ) {
        const wQ = zF(QQ, FQ);
        let LQ = this.sheets.get(wQ);
        if (!LQ) {
          const qQ = this.createHowl(AF[QQ], FQ);
          qQ.on("end", (QQ => {
            qQ.loop(QQ) || this.forget(QQ)
          })), qQ.on("stop", (QQ => {
            this.forget(QQ)
          })), qQ.on("play", (QQ => {
            this.live.has(QQ) && this.started.add(QQ)
          })), qQ.on("loaderror", (QQ => {
            if ("loaded" !== qQ.state()) {
              this.failed.add(qQ);
              for (const [QQ, FQ] of this.live) FQ.howl === qQ && this.forget(QQ)
            } else "number" === typeof QQ && this.forget(QQ)
          })), this.sheets.set(wQ, qQ), LQ = qQ
        }
        return LQ
      }
      setRel(QQ, FQ) {
        const wQ = this.live.get(QQ);
        wQ && (lF(wQ), wQ.fadeMs = 0, wQ.rel = UF(FQ), wQ.gain = wQ.rel * this.master, wQ.howl.volume(wQ.gain, QQ))
      }
      fade(QQ, FQ, wQ, LQ) {
        const qQ = this.live.get(QQ);
        if (!qQ) return;
        lF(qQ);
        const {
          howl: oQ
        } = qQ, DQ = this.gainNow(qQ);
        qQ.rel = UF(FQ), qQ.gain = qQ.rel * this.master;
        const kQ = wQ > 0 ? Math.min(wQ, 65535) : 0,
          vQ = 0 === kQ || DQ === qQ.gain;
        qQ.fadeMs = vQ ? 0 : kQ, vQ ? oQ.volume(qQ.gain, QQ) : (qQ.fadeFrom = DQ, qQ.fadeAt = this.now(), oQ.fade(DQ, qQ.gain, kQ, QQ)), LQ && (vQ ? oQ.stop(QQ) : qQ.stopTimer = setTimeout((() => {
          qQ.stopTimer = void 0, oQ.stop(QQ)
        }), kQ))
      }
      gainNow(QQ) {
        if (QQ.fadeMs > 0) {
          const FQ = (this.now() - QQ.fadeAt) / QQ.fadeMs;
          if (FQ < 1) return QQ.fadeFrom + (QQ.gain - QQ.fadeFrom) * Math.max(0, FQ);
          QQ.fadeMs = 0
        }
        return QQ.gain
      }
      forget(QQ) {
        this.started.delete(QQ);
        const FQ = this.live.get(QQ);
        FQ && (lF(FQ), this.live.delete(QQ), 0 !== FQ.handle && this.core.get(FQ.handle) === QQ && this.core.delete(FQ.handle))
      }
    }

    function zF(QQ, FQ) {
      return 2 * QQ + (FQ ? 1 : 0)
    }

    function lF(QQ) {
      void 0 !== QQ.stopTimer && (clearTimeout(QQ.stopTimer), QQ.stopTimer = void 0)
    }
    var jF = wQ(40027),
      aF = wQ(38657);
    class XF {
      constructor(QQ, FQ, wQ, LQ) {
        this.key = QQ, this.model = FQ, this.host = LQ, this.MH = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.fqQ = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, this.tailView = void 0, this.tailCut = new Uint8Array(0), this.made = !1, this.kx = !1, this.MH = Math.max(1, Math.ceil(wQ)), this.records = new Float32Array(this.MH * vF.d), this.isDirty = new Uint8Array(this.MH), this.tail = new Uint8Array(this.MH * xQ.zc.Bytes), this.tailView = new DataView(this.tail.buffer), this.make(LQ.cmd())
      }
      setOrigin(QQ, FQ, wQ) {
        this.origin[0] = QQ, this.origin[1] = FQ, this.origin[2] = wQ
      }
      markDirty(QQ) {
        !this.kx && QQ >= 0 && QQ < this.MH && QQ < xQ.zc.Max && this.Tx(QQ, QQ + 1)
      }
      commit(QQ) {
        if (this.kx) return;
        (QQ = Math.min(Math.max(Math.floor(QQ), 0), this.MH, xQ.zc.Max)) > this.count && this.Tx(this.count, QQ), this.count = QQ;
        const {
          origin: FQ,
          sentOrigin: wQ,
          dirtyList: LQ
        } = this, qQ = this.fqQ !== QQ, oQ = wQ[0] !== FQ[0] || wQ[1] !== FQ[1] || wQ[2] !== FQ[2];
        if (0 === LQ.length && !qQ && !oQ) return;
        const DQ = this.host.cmd();
        if (!DQ || !this.make(DQ)) return;
        const kQ = LQ.length,
          {
            records: vQ,
            tailView: mQ
          } = this;
        for (let uQ = 0; uQ < kQ; uQ++) {
          const QQ = LQ[uQ],
            FQ = QQ * vF.d,
            wQ = uQ * xQ.zc.Bytes,
            qQ = 0 !== vQ[FQ + vF.h] ? xQ.zc.Hidden : 0;
          mQ.setUint32(wQ, (QQ | qQ) >>> 0, !0), mQ.setFloat32(wQ + 4, vQ[FQ], !0), mQ.setFloat32(wQ + 8, vQ[FQ + 1], !0), mQ.setFloat32(wQ + 12, vQ[FQ + 2], !0)
        }
        if ((0, xQ.Je)(DQ, 0, this.key, QQ, FQ, kQ, this.tailOf(kQ))) {
          for (let QQ = 0; QQ < kQ; QQ++) this.isDirty[LQ[QQ]] = 0;
          LQ.length = 0, this.fqQ = QQ, wQ[0] = FQ[0], wQ[1] = FQ[1], wQ[2] = FQ[2]
        }
      }
      grow(QQ) {
        (QQ = Math.ceil(QQ)) <= this.MH || this.kx || (this.records = (0, aF.b)(this.records, new Float32Array(QQ * vF.d)), this.isDirty = (0, aF.b)(this.isDirty, new Uint8Array(QQ)), this.tail = new Uint8Array(QQ * xQ.zc.Bytes), this.tailView = new DataView(this.tail.buffer), this.MH = QQ)
      }
      dispose() {
        this.kx || (this.kx = !0, this.host.kx(this, this.made ? this.key : null))
      }
      make(QQ) {
        if (!this.made && QQ) {
          const {
            item: FQ,
            scale: wQ,
            yaw: LQ
          } = this.model;
          this.made = (0, xQ.Ne)(QQ, 0, this.key, FQ, wQ, LQ)
        }
        return this.made
      }
      tailOf(QQ) {
        const FQ = QQ * xQ.zc.Bytes;
        return this.tailCut.buffer === this.tail.buffer && this.tailCut.length === FQ || (this.tailCut = this.tail.subarray(0, FQ)), this.tailCut
      }
      Tx(QQ, FQ) {
        const {
          dirtyList: wQ,
          isDirty: LQ
        } = this;
        for (let qQ = QQ; qQ < FQ; qQ++) 0 === LQ[qQ] && (LQ[qQ] = 1, wQ.push(qQ))
      }
    }
    var fF = wQ(617);
    class VF {
      constructor(QQ) {
        this.keys = 0, this.live = new Set, this.owing = new Set, this.host = void 0, this.host = {
          cmd: QQ,
          owes: QQ => {
            this.owing.add(QQ)
          },
          settled: (QQ, FQ) => {
            this.owing.delete(QQ), FQ && this.live.delete(QQ)
          }
        }
      }
      create(QQ, FQ) {
        if (wQ = QQ, !fF.i.includes(wQ)) return null;
        var wQ;
        const LQ = new hF(++this.keys, uQ.l.indexOf(QQ), FQ, this.host);
        return this.live.add(LQ), LQ
      }
      disposeAll() {
        for (const QQ of [...this.live]) QQ.dispose()
      }
      flush() {
        if (0 === this.owing.size) return;
        const QQ = this.host.cmd();
        for (const FQ of this.owing)
          if (!FQ.sync(QQ)) return
      }
    }
    class hF {
      constructor(QQ, FQ, wQ, LQ) {
        this.key = QQ, this.lifeform = FQ, this.scale = wQ, this.host = LQ, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.owed = 1, this.kx = !1, this.sync()
      }
      setPose(QQ, FQ) {
        this.kx || (this.feet[0] = QQ[0], this.feet[1] = QQ[1], this.feet[2] = QQ[2], this.yaw = FQ, this.owed |= 2, this.sync())
      }
      setVisible(QQ) {
        this.kx || QQ === this.visible || (this.visible = QQ, this.owed |= 4, this.sync())
      }
      dispose() {
        this.kx || (this.kx = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
      }
      sync() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.host.cmd();
        return this.write(QQ) ? (this.host.settled(this, this.kx), !0) : (this.host.owes(this), !1)
      }
      write(QQ) {
        if (!QQ) return this.owed = 0, !0;
        if (1 & this.owed) {
          if (!(0, xQ.Xe)(QQ, 0, this.key, this.lifeform, this.scale)) return !1;
          this.owed &= -2
        }
        const FQ = (2 & this.owed ? xQ.Xc.Pose : 0) | (4 & this.owed ? xQ.Xc.Visible : 0);
        if (0 !== FQ) {
          if (!(0, xQ.Ve)(QQ, 0, this.key, FQ, this.visible ? 1 : 0, this.feet, this.yaw)) return !1;
          this.owed &= -7
        }
        if (8 & this.owed) {
          if (!(0, xQ.Re)(QQ, 0, this.key)) return !1;
          this.owed = 0
        }
        return !0
      }
    }
    var JF = wQ(40465);

    function EF(QQ, FQ, wQ, LQ) {
      return (0, JF.d)(), (0, xQ.Ef)(QQ, FQ, wQ, LQ)
    }
    var nF = wQ(38666),
      gF = wQ(40018);
    const PF = [0, 0, 0],
      ZF = [0, 0, 0],
      yF = [0, 0, 0],
      BF = [0, 0, 0],
      dF = {
        origin: [0, 0, 0],
        direction: [0, 0, 1]
      },
      Qw = [0, 0, 0],
      Fw = [0, 0],
      ww = [1, 1, 1],
      Lw = 1 / 3;
    const qw = mF.h;

    function ow(QQ) {
      const FQ = mF.d[QQ],
        wQ = FQ && mF.h[FQ.mainMultiblock];
      return wQ && {
        main: wQ,
        x: FQ.compX,
        y: FQ.compY,
        z: FQ.compZ
      }
    }

    function Dw(QQ) {
      if (null === QQ || void 0 === QQ) return xQ.ad;
      const FQ = +QQ;
      return Number.isInteger(FQ) && FQ >= -2147483648 && FQ <= 2147483647 && String(FQ) === String(QQ) ? FQ : xQ.ad
    }

    function kw(QQ, FQ, wQ) {
      return (0, xQ.If)(QQ, 0, FQ, null !== wQ && void 0 !== wQ ? wQ : Number.NaN)
    }
    class vw {
      constructor(QQ) {
        this.deps = QQ, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new nF.c((() => this.tables.getClientOption("forcedCameraDirectionTransitionMs")), (QQ => {
          var FQ, wQ;
          null === (FQ = (wQ = this.deps).setLocalOptions) || void 0 === FQ || FQ.call(wQ, QQ)
        })), this.mobModels = new VF((() => this.deps.cmd())), this.owedFrees = [], this.pendingStyle = void 0, this.pendingFar = void 0, this.farSet = !1, this.routeMesh = 0, this.routeOffset = 0, this.routeLook = "", this.routeSlide = {
          uvOffset: [0, 0]
        }, this.poolHost = {
          cmd: () => this.deps.cmd(),
          kx: (QQ, FQ) => {
            this.livePools.delete(QQ), null !== FQ && (this.owedFrees.push(FQ), this.flushOwed())
          }
        }, this.api = QQ.api, this.live = QQ.live, this.chunks = QQ.chunks, this.items = QQ.items, this.tables = QQ.tables
      }
      isLocal(QQ) {
        return null !== QQ && void 0 !== QQ && +QQ === this.api.localId
      }
      assertLocal(QQ, FQ) {
        if (!this.isLocal(QQ)) throw new Error(`Attempted to ${FQ} for a player that is not the local player`)
      }
      Qp(QQ) {
        const FQ = this.api.Qp(QQ);
        if (!FQ) throw new Error(`Entity ${QQ} has no replicated position`);
        return FQ
      }
      checkValid(QQ) {
        return !!this.deps.isSessionLive() && (null === QQ || void 0 === QQ || this.api.checkValid(QQ))
      }
      isAlive(QQ) {
        return !1 !== this.api.isAlive(QQ)
      }
      getItemStat(QQ, FQ, wQ) {
        return this.isLocal(QQ) || null !== QQ && "Player" === this.api.getEntityType(QQ) ? this.tables.getItemStat(FQ, wQ) : this.tables.getDefaultItemStat(FQ, wQ)
      }
      getClientOption(QQ, FQ) {
        return this.assertLocal(QQ, "get a client option"), this.tables.getClientOption(FQ)
      }
      openShop(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wQ = arguments.length > 2 ? arguments[2] : void 0;
        this.assertLocal(QQ, "open shop"), DQ.l.GA("showShopFromServer", {
          toggle: FQ,
          Xw: wQ
        }, !0)
      }
      sendMessage(QQ, FQ, wQ) {
        this.assertLocal(QQ, "send a message");
        const LQ = "string" === typeof FQ ? [{
          str: FQ,
          style: wQ
        }] : FQ;
        DQ.l.GA("chat", {
          content: LQ
        }, !0)
      }
      getEntityType(QQ) {
        return this.api.getEntityType(QQ)
      }
      getEntityName(QQ) {
        const FQ = Dw(QQ);
        return FQ === xQ.ad ? void 0 : (0, jF.j)(this.api, FQ)
      }
      hasEffect(QQ, FQ) {
        const wQ = Dw(QQ);
        return wQ !== xQ.ad && (0, jF.f)(this.api, wQ, FQ)
      }
      getMetaInfo(QQ) {
        return this.tables.getMetaInfo(QQ)
      }
      getPlayerDbId(QQ) {
        return this.assertLocal(QQ, "get a DB ID"), this.deps.playerDbId()
      }
      getBlockData(QQ, FQ, wQ) {
        if (!this.chunks.dataCleared(QQ, FQ, wQ)) return (0, jF.d)(this.api, QQ, FQ, wQ)
      }
      KU(QQ, FQ, wQ, LQ) {
        this.setBlockId(QQ, FQ, wQ, this.tables.getItemId(LQ))
      }
      setOtherEntitySetting(QQ, FQ, wQ, LQ) {
        if (!this.isLocal(QQ)) throw new Error("Attempted to set an other-entity setting for a player that is not the local player");
        if (!Object.hasOwn(xQ.md, wQ)) throw new Error(`Unknown other-entity setting ${wQ}`);
        const qQ = xQ.md[wQ],
          oQ = Dw(FQ);
        if (oQ === xQ.ad || !this.deps.beforeWrite()) return;
        const DQ = (0, zQ.f)(LQ);
        if (DQ.length > 16384) throw new Error(`The other-entity setting ${wQ}'s value is over 16384 bytes`);
        const kQ = this.api.memoryView(Uint8Array, this.api.scratch(), DQ.length, "set_other_entity_setting's value");
        kQ && (kQ.set(DQ), this.api.queries.setOtherEntitySetting(oQ, qQ, DQ.length))
      }
      getPositionView(QQ) {
        return this.live.position(+QQ)
      }
      readDrawnPosition(QQ, FQ) {
        return this.api.readDrawnPosition(Dw(QQ), FQ)
      }
      getDrawnHeading(QQ) {
        const FQ = Dw(QQ),
          wQ = (FQ === xQ.ad ? 0 : this.api.queries.directorEntity(FQ)) >= xQ.Bb.BYTES ? this.api.memoryData(this.api.scratch(), xQ.Bb.BYTES, 8, "getDrawnHeading's DirectorEntity") : null;
        if (!wQ) return null;
        if (1 === xQ.Bb.headingIsDrawn(wQ, 0)) return xQ.Bb.heading(wQ, 0);
        const LQ = this.api.apiView;
        return this.isLocal(QQ) && 0 === (xQ.v.playerFlags(LQ, 0) & xQ.Gd.FreeCam) ? xQ.v.heading(LQ, 0) : null
      }
      getLocalPlayerMovement() {
        const QQ = xQ.v.playerFlags(this.api.apiView, 0);
        return 0 === (QQ & xQ.Gd.Replay) && this.api.readDrawnPosition(this.api.localId, yF) ? {
          onGround: 0 !== (QQ & xQ.Gd.OnGround),
          jumpHeld: 0 !== (QQ & xQ.Gd.JumpHeld)
        } : null
      }
      owQ(QQ) {
        return this.isLocal(QQ) ? this.items.ym() : null
      }
      getInventoryItems() {
        return this.items.playerItems()
      }
      getHeldGunInaccuracy() {
        var QQ, FQ;
        return "Gun" === (null === (QQ = this.aliveHeld()) || void 0 === QQ || null === (FQ = QQ.typeObj) || void 0 === FQ ? void 0 : FQ.type) ? this.items.inaccuracy : null
      }
      aliveHeld() {
        return !1 === this.api.isAlive(this.api.localId) ? null : this.items.ym()
      }
      isCrosshairShown() {
        var QQ, FQ;
        const wQ = (0, HF.c)(LQ.c.get("crosshairGameView"), LQ.c.get("crosshairShownOverride"));
        if (null !== wQ) return wQ;
        const qQ = null === (QQ = this.aliveHeld()) || void 0 === QQ ? void 0 : QQ.typeObj,
          oQ = "Gun" === (null === qQ || void 0 === qQ ? void 0 : qQ.type),
          DQ = oQ || !0 === (null === qQ || void 0 === qQ ? void 0 : qQ.showsAimingUi),
          kQ = 0 === (xQ.v.playerFlags(this.api.apiView, 0) & xQ.Gd.ZoomFirstPerson),
          vQ = null !== (FQ = this.tables.getClientOption("gunshotOrigin")) && void 0 !== FQ ? FQ : null;
        return (0, HF.j)({
          gun: oQ,
          aimable: DQ
        }, kQ, (0, bF.c)(), vQ)
      }
      setCrosshairShown(QQ) {
        LQ.c.set({
          crosshairShownOverride: QQ
        })
      }
      getInventoryFreeSlotCount(QQ) {
        return this.isLocal(QQ) ? this.items.freeSlots() : null
      }
      getSelectedInventorySlotI(QQ) {
        return this.isLocal(QQ) ? this.items.selectedSlot : null
      }
      getItemSlot(QQ, FQ) {
        return this.isLocal(QQ) ? this.items.slot(FQ) : null
      }
      swapInventorySlots(QQ, FQ) {
        return this.items.swap(QQ, FQ)
      }
      isPlayerCrouching(QQ) {
        if (this.isLocal(QQ)) return 0 !== (xQ.v.playerFlags(this.api.apiView, 0) & xQ.Gd.Crouching);
        const FQ = Dw(QQ);
        return FQ !== xQ.ad && 1 === this.api.queries.entityCrouching(FQ)
      }
      getMiningBlock() {
        return this.live.breakingPosition()
      }
      isMining() {
        return 0 !== (xQ.v.playerFlags(this.api.apiView, 0) & xQ.Gd.AttemptingBreak)
      }
      getTargetedBlock() {
        return this.live.XQQ()
      }
      getActionRay() {
        const QQ = this.api.apiView;
        for (let FQ = 0; FQ < 3; FQ++) dF.origin[FQ] = xQ.v.wFQ(QQ, 0, FQ), dF.direction[FQ] = xQ.v.actionDir(QQ, 0, FQ);
        return dF
      }
      canModifyBlockAt(QQ, FQ, wQ) {
        return 1 === this.api.queries.canModify(QQ, FQ, wQ)
      }
      isSolidToPlayerBlockId(QQ) {
        return this.tables.isSolidBlockId(QQ) && !this.chunks.isWalkThrough(QQ)
      }
      blockNameToBlockId(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.tables.blockNameToBlockId(QQ, FQ)
      }
      blockIdToBlockName(QQ) {
        return this.tables.nameOfId(QQ)
      }
      RFQ(QQ, FQ, wQ, LQ, qQ) {
        return 1 === this.api.queries.terrainBlocked(LQ, QQ, FQ, wQ, Dw(null !== qQ && void 0 !== qQ ? qQ : null))
      }
      getChunkVersion(QQ, FQ, wQ) {
        return this.chunks.version(QQ, FQ, wQ)
      }
      scanBlocks(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ) {
        return this.chunks.scan(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ)
      }
      isBlockInLoadedChunk(QQ, FQ, wQ) {
        return this.chunks.isLoaded(QQ, FQ, wQ)
      }
      getBlockId(QQ, FQ, wQ) {
        return this.chunks.um(QQ, FQ, wQ)
      }
      playSound(QQ, FQ, wQ, LQ, qQ) {
        let oQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (!this.isLocal(QQ)) return null;
        const DQ = this.playSoundFrom(FQ, wQ, qQ, oQ);
        return 1 === LQ ? DQ : DQ.rate(LQ)
      }
      preloadSounds(QQ) {
        var FQ, wQ;
        null === (FQ = (wQ = this.deps).preloadSounds) || void 0 === FQ || FQ.call(wQ, QQ)
      }
      playSoundFrom(QQ, FQ, wQ, LQ) {
        var qQ, oQ;
        const DQ = this.deps.playSound;
        if (!DQ) return RF.b;
        const kQ = null === wQ || void 0 === wQ ? void 0 : wQ.BF,
          vQ = null !== (qQ = null === wQ || void 0 === wQ ? void 0 : wQ.maxHearDist) && void 0 !== qQ ? qQ : uF.d,
          mQ = null !== (oQ = null === wQ || void 0 === wQ ? void 0 : wQ.refDistance) && void 0 !== oQ ? oQ : uF.h;
        let uQ = null;
        if (Array.isArray(kQ)) PF[0] = kQ[0], PF[1] = kQ[1], PF[2] = kQ[2], uQ = PF;
        else if (void 0 !== kQ && null !== kQ) {
          const QQ = Dw(kQ);
          if (!this.api.isLocal(QQ)) {
            if (!this.api.readPosition(QQ, PF)) return RF.b;
            uQ = PF
          }
        }
        return DQ(QQ, FQ, uQ, uQ && this.ear(), vQ, mQ, LQ)
      }
      ear() {
        if (this.api.readPosition(this.api.localId, ZF)) ZF[1] += sF;
        else {
          const QQ = this.api.apiView;
          if (0 === xQ.v.viewProj(QQ, 0, 3) && 0 === xQ.v.viewProj(QQ, 0, 7) && 0 === xQ.v.viewProj(QQ, 0, 11)) return null;
          for (let FQ = 0; FQ < 3; FQ++) ZF[FQ] = xQ.v.eye(QQ, 0, FQ)
        }
        return Number.isFinite(ZF[0] + ZF[1] + ZF[2]) ? ZF : null
      }
      setBlockId(QQ, FQ, wQ, LQ) {
        if (!Number.isInteger(LQ) || LQ < 0 || LQ > 65535) throw new Error(`Invalid block id ${LQ}`);
        if (!this.deps.beforeWrite() || !this.chunks.isLoaded(QQ, FQ, wQ)) return;
        const qQ = Math.floor(QQ),
          oQ = Math.floor(FQ),
          DQ = Math.floor(wQ),
          kQ = this.predictedCells(qQ, oQ, DQ, LQ);
        if (1 === this.api.queries.KU(qQ, oQ, DQ, LQ)) {
          for (let QQ = 0; QQ < kQ.length; QQ += 5) this.chunks.setOverlay(kQ[QQ], kQ[QQ + 1], kQ[QQ + 2], kQ[QQ + 3], 1 === kQ[QQ + 4]);
          this.live.refreshTarget()
        }
      }
      particlesEnabled() {
        return this.deps.particles.enabled()
      }
      createParticles(QQ, FQ) {
        return this.deps.particles.create(QQ, FQ)
      }
      playParticleEffect(QQ) {
        this.deps.particles.playEffect(QQ)
      }
      burstParticlePreset(QQ, FQ, wQ) {
        this.deps.particles.burstPreset(QQ, FQ, wQ)
      }
      createGameMesh(QQ, FQ, wQ) {
        const LQ = ++this.meshKeys,
          qQ = this.deps.cmd();
        if (!qQ) return LQ;
        const {
          look: oQ,
          colour: DQ
        } = function(QQ) {
          switch (QQ.kind) {
            case void 0:
            case "flatEmissive":
              return QQ.onTop ? {
                look: xQ.ec.FlatOnTop,
                colour: [...QQ.rgb, QQ.alpha]
              } : QQ.opaque ? {
                look: xQ.ec.FlatOpaque,
                colour: [...QQ.rgb, 1]
              } : {
                look: xQ.ec.Flat,
                colour: [...QQ.rgb, QQ.alpha]
              };
            case "chevronPath":
              return {
                look: xQ.ec.Chevrons, colour: [...(0, YF.e)(QQ.colour), QQ.alpha]
              };
            case "furnaceFire":
              return {
                look: xQ.ec.FurnaceFire, colour: [1, 1, 1, 1]
              }
          }
        }(FQ), kQ = Math.floor(QQ.positions.length / 3), vQ = function(QQ, FQ) {
          const wQ = Math.floor(QQ.positions.length / 3),
            LQ = QQ.indices.length,
            qQ = wQ * (FQ ? 5 : 3),
            oQ = new Uint8Array(4 * (qQ + LQ)),
            DQ = new DataView(oQ.buffer);
          for (let mQ = 0; mQ < 3 * wQ; mQ++) DQ.setFloat32(4 * mQ, QQ.positions[mQ], !0);
          if (FQ) {
            var kQ;
            const FQ = null !== (kQ = QQ.uvs) && void 0 !== kQ ? kQ : [];
            for (let QQ = 0; QQ < 2 * wQ; QQ++) {
              var vQ;
              DQ.setFloat32(4 * (3 * wQ + QQ), null !== (vQ = FQ[QQ]) && void 0 !== vQ ? vQ : 0, !0)
            }
          }
          for (let mQ = 0; mQ < LQ; mQ++) DQ.setUint32(4 * (qQ + mQ), QQ.indices[mQ], !0);
          return oQ
        }(QQ, (0, vF.j)(FQ));
        return (0, xQ.Ae)(qQ, 0, LQ, oQ, DQ, wQ, kQ, QQ.indices.length, vQ) && this.liveMeshes.add(LQ), LQ
      }
      setGameMesh(QQ, FQ) {
        var wQ;
        const LQ = this.deps.cmd();
        if (!LQ) return;
        let qQ = 0;
        FQ.anchor && (qQ |= xQ.ic.Anchor, Qw[0] = FQ.anchor[0], Qw[1] = FQ.anchor[1], Qw[2] = FQ.anchor[2]), void 0 !== FQ.visible && (qQ |= xQ.ic.Visible), FQ.uvOffset && (qQ |= xQ.ic.UvOffset, Fw[0] = FQ.uvOffset[0], Fw[1] = FQ.uvOffset[1]);
        const oQ = null !== (wQ = FQ.visibility) && void 0 !== wQ ? wQ : 1;
        void 0 !== FQ.visibility && (qQ |= xQ.ic.Visibility), FQ.scale && (qQ |= xQ.ic.Scale, ww[0] = FQ.scale[0], ww[1] = FQ.scale[1], ww[2] = FQ.scale[2]), 0 !== qQ && (0, xQ.De)(LQ, 0, QQ, qQ, FQ.visible ? 1 : 0, Qw, Fw, oQ, ww)
      }
      disposeGameMesh(QQ) {
        const FQ = this.deps.cmd();
        FQ && !(0, xQ.Be)(FQ, 0, QQ) || this.liveMeshes.delete(QQ)
      }
      hasPackModel(QQ) {
        var FQ, wQ, LQ;
        return null !== (FQ = null === (wQ = (LQ = this.deps).hasPackModel) || void 0 === wQ ? void 0 : wQ.call(LQ, QQ)) && void 0 !== FQ && FQ
      }
      disposeGameOutput() {
        const QQ = QQ => {
          try {
            QQ()
          } catch (FQ) {
            console.error("Error freeing client game output", FQ)
          }
        };
        for (const FQ of [...this.liveMeshes]) QQ((() => {
          this.disposeGameMesh(FQ)
        }));
        for (const FQ of [...this.livePools]) QQ((() => {
          FQ.dispose()
        }));
        QQ((() => {
          this.mobModels.disposeAll()
        })), QQ((() => {
          this.setGroundArrowStyle(null)
        })), QQ((() => {
          this.setRouteChevrons(null), this.routeOffset = 0, this.routeLook = ""
        })), QQ((() => {
          this.setCrosshairShown(null)
        })), QQ((() => {
          this.cameraTurn.dispose()
        })), QQ((() => {
          this.farSet && (this.farSet = !1, this.setCameraFar(null))
        }))
      }
      createInstancePool(QQ, FQ) {
        const wQ = this.tables.idOf(QQ.item);
        if (void 0 === wQ) return null;
        const LQ = new XF(++this.poolKeys, {
          item: wQ,
          scale: QQ.scale,
          yaw: QQ.yaw
        }, FQ, this.poolHost);
        return this.livePools.add(LQ), LQ
      }
      createMobModel(QQ, FQ) {
        return this.mobModels.create(QQ, FQ)
      }
      setRouteChevrons(QQ) {
        if (0 !== this.routeMesh && (this.disposeGameMesh(this.routeMesh), this.routeMesh = 0), !QQ || 0 === QQ.cells.length) return;
        const FQ = `${QQ.colour} ${QQ.alpha}`;
        FQ !== this.routeLook && (this.routeLook = FQ, this.routeOffset = 0), this.routeMesh = this.createGameMesh(function(QQ) {
          const [FQ, wQ, LQ] = QQ[0].pos, qQ = [], oQ = [], DQ = [];
          return QQ.forEach(((QQ, kQ) => {
            let {
              pos: vQ,
              way: [mQ, uQ]
            } = QQ;
            const HQ = vQ[0] - FQ + .5,
              bQ = vQ[1] - wQ + .04,
              YQ = vQ[2] - LQ + .5,
              [xQ, AQ] = [.35 * -uQ, .35 * mQ],
              [tQ, eQ] = [kQ * Lw, (kQ + 1) * Lw],
              MQ = qQ.length / 3;
            qQ.push(HQ - .5 * mQ + xQ, bQ, YQ - .5 * uQ + AQ), qQ.push(HQ - .5 * mQ - xQ, bQ, YQ - .5 * uQ - AQ), qQ.push(HQ + .5 * mQ + xQ, bQ, YQ + .5 * uQ + AQ), qQ.push(HQ + .5 * mQ - xQ, bQ, YQ + .5 * uQ - AQ), oQ.push(0, tQ, 1, tQ, 0, eQ, 1, eQ), DQ.push(MQ, MQ + 1, MQ + 2, MQ + 1, MQ + 3, MQ + 2)
          })), {
            positions: qQ,
            uvs: oQ,
            indices: DQ
          }
        }(QQ.cells), {
          kind: "chevronPath",
          colour: QQ.colour,
          alpha: QQ.alpha
        }, QQ.cells[0].pos), this.setRouteSlide()
      }
      slideRoute(QQ) {
        0 !== this.routeMesh && (this.routeOffset = (this.routeOffset + Math.min(QQ, 250) / 1e3 * 1.2 * Lw) % 1, this.setRouteSlide())
      }
      setRouteSlide() {
        this.routeSlide.uvOffset[1] = -this.routeOffset, this.setGameMesh(this.routeMesh, this.routeSlide)
      }
      setGroundArrowStyle(QQ) {
        this.pendingStyle = QQ, this.flushOwed()
      }
      flushOwed() {
        this.mobModels.flush();
        const QQ = this.owedFrees;
        if (0 === QQ.length && void 0 === this.pendingStyle && void 0 === this.pendingFar) return;
        const FQ = this.deps.cmd();
        if (!FQ) return QQ.length = 0, void(this.pendingFar = void 0);
        let wQ = 0;
        for (; wQ < QQ.length && (0, xQ.Ke)(FQ, 0, QQ[wQ]);) wQ++;
        QQ.splice(0, wQ);
        const LQ = this.pendingStyle;
        if (void 0 !== LQ) {
          (LQ ? (0, xQ.Mf)(FQ, 0, LQ.width, LQ.alpha, 1, LQ.endAtSolidFace ? 1 : 0) : (0, xQ.Mf)(FQ, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
        }
        const qQ = this.pendingFar;
        void 0 !== qQ && (0, xQ.Hf)(FQ, 0, null !== qQ && void 0 !== qQ ? qQ : 0, null === qQ ? 1 : 0) && (this.pendingFar = void 0)
      }
      setNametagOffset(QQ, FQ) {
        const wQ = this.deps.cmd(),
          LQ = Dw(QQ);
        wQ && LQ !== xQ.ad && (0, xQ.Pf)(wQ, 0, LQ, FQ)
      }
      setFacingTolerance(QQ, FQ) {
        const wQ = this.deps.cmd(),
          LQ = Dw(QQ);
        wQ && LQ !== xQ.ad && kw(wQ, LQ, FQ)
      }
      forEachEntity(QQ) {
        const {
          api: FQ
        } = this;
        for (let wQ = 0; wQ < FQ.idStr.length; wQ++) {
          const LQ = FQ.idStr[wQ];
          null === LQ || cQ(FQ.kinds[wQ]) || QQ(LQ)
        }
      }
      getEntityInfo(QQ) {
        return this.deps.entityInfo.get(QQ)
      }
      isEntityInteractable(QQ) {
        const FQ = Dw(QQ);
        return FQ !== xQ.ad && 1 === this.api.queries.entityInteractable(FQ)
      }
      isLocalPlayer(QQ) {
        return this.isLocal(QQ)
      }
      getLineOwner(QQ) {
        var FQ;
        const wQ = null === (FQ = this.deps.entityInfo.get(QQ)) || void 0 === FQ ? void 0 : FQ.meshOpts;
        if (!wQ) return null;
        try {
          const {
            lineToEId: QQ
          } = JSON.parse(wQ);
          return null !== QQ && void 0 !== QQ ? QQ : null
        } catch {
          return null
        }
      }
      getCameraPosition() {
        const QQ = this.api.apiView;
        return BF[0] = xQ.v.eye(QQ, 0, 0), BF[1] = xQ.v.eye(QQ, 0, 1), BF[2] = xQ.v.eye(QQ, 0, 2), BF
      }
      getCameraFar() {
        return xQ.v.cameraFar(this.api.apiView, 0)
      }
      setCameraFar(QQ) {
        null !== QQ && (this.farSet = !0), this.pendingFar = QQ, this.flushOwed()
      }
      turnCamera(QQ, FQ) {
        this.cameraTurn.turn(QQ, FQ)
      }
      clearPickupDelay(QQ) {
        const FQ = this.deps.cmd(),
          wQ = Dw(QQ);
        FQ && wQ !== xQ.ad && (0, xQ.ne)(FQ, 0, wQ)
      }
      sendChat(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const wQ = this.deps.sendCmd();
        wQ && EF(wQ, 0, gF.b.Chat, (0, zQ.f)((0, gF.j)({
          Om: QQ,
          sm: FQ
        })))
      }
      sendCommand(QQ) {
        QQ.length <= 119 && this.sendChat(`/${QQ}`)
      }
      predictedCells(QQ, FQ, wQ, LQ) {
        const qQ = this.chunks,
          oQ = [],
          DQ = (QQ, FQ, wQ, LQ, qQ) => {
            oQ.push(QQ, FQ, wQ, LQ, this.tables.blockRootId(qQ) === this.tables.blockRootId(LQ) ? 0 : 1)
          },
          kQ = qQ.um(QQ, FQ, wQ),
          vQ = ow(kQ);
        if (vQ) {
          const [LQ, oQ, mQ] = [QQ - vQ.x, FQ - vQ.y, wQ - vQ.z], uQ = qw[qQ.um(LQ, oQ, mQ)], HQ = null === uQ || void 0 === uQ ? void 0 : uQ.positions.some((QQ => QQ.id === kQ && QQ.x === vQ.x && QQ.y === vQ.y && QQ.z === vQ.z));
          for (const QQ of (HQ && uQ ? uQ : vQ.main).positions) qQ.um(LQ + QQ.x, oQ + QQ.y, mQ + QQ.z) === QQ.id && DQ(LQ + QQ.x, oQ + QQ.y, mQ + QQ.z, 0, QQ.id)
        }
        const mQ = ow(LQ);
        if (mQ)
          for (const HQ of mQ.main.positions) {
            const [LQ, oQ, kQ] = [QQ + HQ.x - mQ.x, FQ + HQ.y - mQ.y, wQ + HQ.z - mQ.z];
            DQ(LQ, oQ, kQ, HQ.id, qQ.um(LQ, oQ, kQ))
          } else DQ(QQ, FQ, wQ, LQ, kQ);
        const uQ = this.tables;
        if ((0 !== uQ.attachedTopOf(kQ) || 0 !== uQ.attachedTopOf(LQ)) && qQ.isLoaded(QQ, FQ + 1, wQ)) {
          let vQ = qQ.um(QQ, FQ + 1, wQ);
          for (let LQ = 0; LQ < oQ.length; LQ += 5) oQ[LQ] === QQ && oQ[LQ + 1] === FQ + 1 && oQ[LQ + 2] === wQ && (vQ = oQ[LQ + 3]);
          const mQ = this.attachedTopWrite(kQ, LQ, vQ);
          void 0 !== mQ && DQ(QQ, FQ + 1, wQ, mQ, vQ)
        }
        return oQ
      }
      attachedTopWrite(QQ, FQ, wQ) {
        const LQ = this.tables,
          qQ = LQ.attachedTopOf(QQ),
          oQ = LQ.attachedTopOf(FQ),
          DQ = 0 !== qQ && 0 !== wQ && LQ.blockRootId(wQ) === LQ.blockRootId(qQ);
        return 0 !== qQ && 0 !== oQ && LQ.blockRootId(QQ) === LQ.blockRootId(FQ) ? DQ && wQ !== oQ ? oQ : void 0 : 0 === oQ || !DQ && 0 !== wQ ? DQ ? 0 : void 0 : oQ
      }
    }
    const mw = xQ.vc + xQ.yc * xQ.Gc.BYTES,
      uw = 2147483647,
      Hw = new TextDecoder,
      bw = new TextEncoder,
      Yw = Object.freeze({
        Sm: 0,
        wm: null,
        amountAddedToSlot: 0
      }),
      xw = new Proxy({}, {
        get: () => () => xQ.ld
      });

    function Aw(QQ) {
      return Number.isInteger(QQ) && QQ >= 0 && QQ <= 65535
    }

    function tw(QQ) {
      return Number.isInteger(QQ) && QQ >= 0 && QQ <= 4294967295
    }
    class ew {
      constructor(QQ) {
        this.deps = QQ, this.VQ = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(xQ.yc), this.ids = new Uint16Array(xQ.yc), this.amounts = new Uint16Array(xQ.yc), this.attrRead = new Float64Array(xQ.yc).fill(-1), this.stale = new Uint16Array(xQ.yc), this.staleVersion = new Uint32Array(xQ.yc), this.instances = new Uint32Array(xQ.yc), this.viewPtr = 0, this.viewVersion = -1, this.len = 0, this.selected = 0, this.slotIconId = 0, this.stopped = !1, this.listeners = new Set
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
      slot(QQ) {
        var FQ;
        return Number.isInteger(QQ) && QQ >= 0 && QQ < this.len && 0 !== this.ids[QQ] && null !== (FQ = this.facades[QQ]) && void 0 !== FQ ? FQ : null
      }
      ym() {
        return this.slot(this.selected)
      }
      playerItems() {
        const QQ = [];
        for (let FQ = 0; FQ < Math.min(xQ.td, this.len); FQ++) QQ.push(this.slot(FQ));
        return QQ
      }
      freeSlots() {
        let QQ = 0;
        for (let FQ = 0; FQ < Math.min(xQ.td - xQ.i, this.len); FQ++) 0 === this.ids[FQ] && QQ++;
        return QQ
      }
      amountOf(QQ) {
        let FQ = 0;
        for (let LQ = 0; LQ < Math.min(xQ.td, this.len); LQ++) {
          const qQ = this.slot(LQ);
          var wQ;
          if ((null === qQ || void 0 === qQ ? void 0 : qQ.name) === QQ) FQ += null !== (wQ = qQ.amount) && void 0 !== wQ ? wQ : 1
        }
        return FQ
      }
      instance(QQ) {
        var FQ;
        return null !== (FQ = this.instances[QQ]) && void 0 !== FQ ? FQ : 0
      }
      watch(QQ) {
        return this.listeners.add(QQ), () => {
          this.listeners.delete(QQ)
        }
      }
      touch() {
        this.version++
      }
      flush(QQ) {
        if (this.version !== this.notified || this.iconChanged) {
          this.notified = this.version, this.iconChanged = !1;
          for (const wQ of [...this.listeners]) try {
            wQ()
          } catch (FQ) {
            QQ(FQ)
          }
        }
      }
      chestOpened(QQ, FQ, wQ) {
        this.VQ[0] = QQ, this.VQ[1] = FQ, this.VQ[2] = wQ, this.version++
      }
      refresh() {
        const QQ = this.deps.api.apiView,
          FQ = xQ.v.inventoryViewPtr(QQ, 0),
          wQ = xQ.v.inventoryVersion(QQ, 0),
          LQ = xQ.v.selectedSlot(QQ, 0);
        LQ !== this.selected && (this.selected = LQ, this.version++);
        const qQ = xQ.v.slotIcon(QQ, 0);
        if (qQ !== this.slotIconId && (this.slotIconId = qQ, this.iconChanged = !0), FQ === this.viewPtr && wQ === this.viewVersion) return;
        this.viewPtr = FQ, this.viewVersion = wQ;
        const oQ = this.deps.api.memoryData(FQ, mw, 4, "the inventory view"),
          DQ = oQ ? Math.min(oQ.getUint32(0, !0), xQ.yc) : 0;
        DQ !== this.len && (this.len = DQ, this.version++);
        let kQ = 0;
        for (let vQ = 0; vQ < xQ.yc; vQ++) {
          const QQ = xQ.vc + vQ * xQ.Gc.BYTES,
            FQ = null !== oQ && vQ < DQ ? xQ.Gc.item(oQ, QQ) : 0;
          if (0 === FQ || null === oQ) {
            0 !== this.ids[vQ] && (this.ids[vQ] = 0, this.attrRead[vQ] = -1, this.instances[vQ]++, this.version++);
            continue
          }
          const wQ = xQ.Gc.amount(oQ, QQ),
            LQ = xQ.Gc.attrVersion(oQ, QQ);
          FQ === this.ids[vQ] && wQ === this.amounts[vQ] || this.fill(vQ, FQ, wQ), LQ !== this.attrRead[vQ] && (this.stale[kQ] = vQ, this.staleVersion[kQ] = LQ, kQ++)
        }
        kQ > 0 && this.fetchAttributes(kQ)
      }
      fill(QQ, FQ, wQ) {
        const {
          tables: LQ
        } = this.deps, qQ = FQ !== this.ids[QQ];
        let oQ = this.facades[QQ];
        oQ || (oQ = {
          name: "",
          amount: null,
          attributes: {
            customAttributes: {}
          },
          typeObj: null
        }, this.facades[QQ] = oQ), qQ && (oQ.name = LQ.nameOfId(FQ), oQ.typeObj = LQ.itemType(FQ), oQ.attributes = {
          customAttributes: {}
        }, this.attrRead[QQ] = -1, this.instances[QQ]++), oQ.amount = 0 === wQ ? null : wQ, this.ids[QQ] = FQ, this.amounts[QQ] = wQ, this.version++
      }
      fetchAttributes(QQ) {
        const {
          api: FQ,
          onError: wQ
        } = this.deps, LQ = FQ.memoryView(Uint16Array, FQ.scratch(), QQ, "item_attributes_batch's slots");
        if (!LQ) return void this.markRead(QQ);
        LQ.set(this.stale.subarray(0, QQ));
        const qQ = FQ.queries.itemAttributesBatch(QQ),
          oQ = 4294967295 === qQ ? null : FQ.memoryData(FQ.scratch(), qQ, 4, "item_attributes_batch's answer");
        if (!oQ) return void this.markRead(QQ);
        const DQ = new Uint8Array(oQ.buffer, oQ.byteOffset, qQ);
        for (let vQ = 0; vQ + 8 <= qQ;) {
          const QQ = oQ.getUint16(vQ, !0),
            FQ = oQ.getUint32(vQ + 4, !0),
            LQ = DQ.subarray(vQ + 8, vQ + 8 + FQ);
          vQ += 8 + (0, bQ.Yd)(FQ);
          const qQ = this.facades[QQ];
          if (qQ && 0 !== this.ids[QQ] && 0 !== FQ) {
            try {
              qQ.attributes = JSON.parse(Hw.decode(LQ))
            } catch (kQ) {
              wQ(kQ)
            }
            this.version++
          }
        }
        this.markRead(QQ)
      }
      markRead(QQ) {
        for (let FQ = 0; FQ < QQ; FQ++) this.attrRead[this.stale[FQ]] = this.staleVersion[FQ]
      }
      swap(QQ, FQ) {
        return Aw(QQ) && Aw(FQ) && this.settle(this.queries().invSwap(QQ, FQ))
      }
      move(QQ, FQ, wQ) {
        return Aw(QQ) && Aw(FQ) && tw(wQ) && this.settle(this.queries().invMove(QQ, FQ, wQ))
      }
      quickMove(QQ, FQ, wQ, LQ) {
        var qQ, oQ;
        if (!Aw(QQ) || !Aw(FQ) || !Aw(wQ) || null !== LQ && !tw(LQ)) return null;
        const DQ = this.queries().invQuickMove(QQ, FQ, wQ, null === LQ ? -1 : Math.min(LQ, uw)),
          kQ = DQ === xQ.ld ? xQ.Qb : null !== (qQ = null === (oQ = this.extras()) || void 0 === oQ ? void 0 : oQ[1]) && void 0 !== qQ ? qQ : xQ.Qb;
        return this.settle(DQ), kQ === xQ.Qb ? null : kQ
      }
      remove(QQ, FQ, wQ) {
        return Aw(QQ) && tw(FQ) && this.settle(this.queries().invRemove(QQ, FQ, wQ ? 1 : 0))
      }
      selectSlot(QQ) {
        return Aw(QQ) && this.settle(this.queries().selectSlot(QQ))
      }
      closeChest() {
        return this.settle(this.queries().closeChest())
      }
      enchant(QQ, FQ, wQ) {
        if (!Aw(QQ) || !Number.isInteger(FQ)) return !1;
        const [LQ, qQ, oQ] = wQ;
        return this.settle(this.queries().invEnchant(QQ, FQ, Math.floor(LQ), Math.floor(qQ), Math.floor(oQ)))
      }
      craft(QQ, FQ, wQ) {
        let LQ;
        try {
          LQ = this.deps.tables.getItemId(QQ)
        } catch {
          return Yw
        }
        if (!Aw(FQ) || null !== wQ && (Number.isNaN(wQ) || wQ < 0)) return Yw;
        const qQ = null === wQ || wQ > uw ? -1 : Math.floor(wQ),
          oQ = this.queries().craft(LQ, FQ, qQ);
        let DQ = Yw;
        const kQ = oQ === xQ.ld ? null : this.extras();
        if (kQ) {
          const [QQ, FQ, wQ] = kQ;
          DQ = {
            Sm: QQ,
            wm: FQ === xQ.Qb ? null : FQ,
            amountAddedToSlot: wQ
          }
        }
        return this.settle(oQ), DQ
      }
      salvage(QQ, FQ, wQ) {
        let LQ;
        try {
          LQ = this.deps.tables.getItemId(FQ)
        } catch {
          return !1
        }
        return Aw(QQ) && Number.isInteger(wQ) && this.settle(this.queries().salvage(QQ, LQ, Math.max(Math.min(wQ, uw), -uw)))
      }
      craftingView(QQ, FQ, wQ) {
        var LQ;
        if (this.stopped) return null;
        const {
          api: qQ,
          onError: oQ
        } = this.deps, DQ = QQ ? bw.encode(QQ) : null;
        if (null !== DQ) {
          if (DQ.length > 1024) return oQ(new Error(`The crafting station ${QQ}'s name is over 1024 bytes`)), null;
          const FQ = qQ.memoryView(Uint8Array, qQ.scratch(), DQ.length, "crafting_view's station");
          if (!FQ) return null;
          FQ.set(DQ)
        }
        const kQ = Aw(FQ) && Aw(wQ),
          vQ = qQ.queries.craftingView(null !== (LQ = null === DQ || void 0 === DQ ? void 0 : DQ.length) && void 0 !== LQ ? LQ : 0, kQ ? FQ : 0, kQ ? wQ : 0);
        return vQ < xQ.rb.BYTES ? (qQ.reportCorruption(`crafting_view's answer of ${vQ} bytes`), null) : qQ.memoryData(qQ.scratch(), vQ, 1, "crafting_view's answer")
      }
      queries() {
        var QQ, FQ;
        return !1 === (null === (QQ = (FQ = this.deps).beforeOp) || void 0 === QQ ? void 0 : QQ.call(FQ)) ? (this.stopped = !0, xw) : this.deps.api.queries
      }
      extras() {
        const {
          api: QQ
        } = this.deps;
        return QQ.memoryView(Uint32Array, QQ.scratch(), 3, "a sync query's extra words")
      }
      settle(QQ) {
        if (QQ === xQ.jd)(0, JF.d)();
        else if (QQ !== xQ.ld) {
          const FQ = this.deps.cmd();
          FQ && function(QQ, FQ, wQ) {
            return (0, JF.d)(), (0, xQ.$f)(QQ, FQ, wQ)
          }(FQ, 0, QQ) || this.deps.onError(new Error(`Sync op ${QQ}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
        }
        return this.stopped || this.refresh(), QQ !== xQ.ld
      }
    }
    const Mw = 1 / .6,
      Gw = [0, 1, 0],
      pw = [0, 0, 0],
      Cw = new Uint8Array(0),
      Sw = 1.2 * xF.e.pG,
      iw = new TextEncoder,
      Ww = [0, 0, 0],
      Rw = [0, 0, 0],
      Ow = new Map;

    function sw(QQ) {
      let FQ = Ow.get(QQ);
      return FQ || (Ow.size >= 64 && Ow.clear(), FQ = iw.encode(`{"emitRate":${QQ}}`), Ow.set(QQ, FQ)), FQ
    }

    function rw(QQ) {
      return Number.isFinite(QQ) && QQ > 0 ? QQ : 0
    }

    function Iw(QQ, FQ) {
      for (let wQ = 0; wQ < 3; wQ++) {
        const LQ = Math.abs(FQ[wQ]);
        Ww[wQ] = QQ[wQ] - LQ, Rw[wQ] = 2 * LQ
      }
      return Number.isFinite(Ww[0] + Ww[1] + Ww[2] + Rw[0] + Rw[1] + Rw[2])
    }

    function Uw(QQ, FQ) {
      return "pos1" === QQ || "pos2" === QQ ? void 0 : FQ
    }

    function Nw(QQ, FQ, wQ) {
      return QQ.length > xQ.Fd.MaxOpts ? (wQ(new Error(`${FQ}'s particle opts are over ${xQ.Fd.MaxOpts} bytes of JSON`)), null) : QQ
    }
    const Tw = {
      moveTo() {},
      setEmitRate() {},
      emit() {},
      emitPoints() {},
      setDirections() {},
      stop() {},
      dispose() {}
    };
    class Kw {
      constructor(QQ) {
        this.deps = QQ, this.session = 0, this.nextKey = 1, this.live = 0, this.started = !1
      }
      enabled() {
        return null !== this.sink()
      }
      sink() {
        return this.deps.isSessionLive() ? this.deps.cmd() : null
      }
      create(QQ, FQ) {
        var wQ;
        const LQ = this.sink(),
          qQ = null !== (wQ = FQ.half) && void 0 !== wQ ? wQ : pw;
        if (!LQ || this.live >= xQ.Fd.MaxLiveKeys || this.nextKey > xQ.Fd.MaxKey || !Iw(FQ.pos, qQ)) return Tw;
        const oQ = this.nextKey,
          DQ = Nw(function(QQ) {
            var FQ, wQ, LQ;
            const qQ = JSON.stringify({
              texture: "string" === typeof QQ.texture ? QQ.texture : "smokePuff",
              MH: QQ.MH,
              minLifeTime: QQ.minLifeTime,
              maxLifeTime: QQ.maxLifeTime,
              minSize: QQ.minSize,
              maxSize: QQ.maxSize,
              minEmitPower: QQ.minEmitPower,
              maxEmitPower: QQ.maxEmitPower,
              emitRate: rw(QQ.emitRate),
              gravity: null !== (FQ = QQ.gravity) && void 0 !== FQ ? FQ : pw,
              dir1: null !== (wQ = QQ.dir1) && void 0 !== wQ ? wQ : Gw,
              dir2: null !== (LQ = QQ.dir2) && void 0 !== LQ ? LQ : Gw,
              colorGradients: QQ.colorGradients,
              blendMode: QQ.blendMode
            });
            return iw.encode(qQ)
          }(QQ), "createParticles", this.deps.onError);
        return DQ && (0, xQ.ef)(LQ, 0, oQ, 0, xQ.Fd.PresetNone, 0, Ww, Rw, DQ) ? (this.nextKey++, this.live++, this.started = !0, new zw(this, this.session, oQ, QQ, qQ)) : Tw
      }
      playEffect(QQ) {
        const FQ = this.sink(),
          {
            pos1: wQ,
            pos2: LQ
          } = QQ;
        if (!FQ || !wQ || !LQ) return;
        for (let oQ = 0; oQ < 3; oQ++) Ww[oQ] = Math.min(wQ[oQ], LQ[oQ]), Rw[oQ] = Math.abs(LQ[oQ] - wQ[oQ]);
        if (!Number.isFinite(Ww[0] + Ww[1] + Ww[2] + Rw[0] + Rw[1] + Rw[2])) return;
        const qQ = Nw(iw.encode(JSON.stringify(QQ, Uw)), "playParticleEffect", this.deps.onError);
        qQ && (0, xQ.$e)(FQ, 0, 0, xQ.Fd.PresetNone, xQ.Fd.HasBox, 0, Ww, Rw, qQ)
      }
      burstPreset(QQ, FQ, wQ) {
        const LQ = this.sink(),
          qQ = Math.min(Math.floor(wQ), xQ.Fd.MaxBurst);
        if (!LQ || !Object.hasOwn(xQ.lc, QQ) || !(qQ > 0)) return;
        const oQ = Sw;
        for (let DQ = 0; DQ < 3; DQ++) Ww[DQ] = FQ[DQ] - oQ / 2, Rw[DQ] = oQ;
        Number.isFinite(Ww[0] + Ww[1] + Ww[2]) && (0, xQ.$e)(LQ, 0, 0, xQ.lc[QQ], xQ.Fd.HasBox, qQ, Ww, Rw, Cw)
      }
      sessionEnded() {
        this.session++;
        const QQ = this.started ? this.deps.cmd() : null;
        return this.started = !1, this.nextKey = 1, this.live = 0, !QQ || (0, xQ.gf)(QQ, 0)
      }
      sinkFor(QQ) {
        return QQ === this.session ? this.deps.cmd() : null
      }
      stop(QQ, FQ) {
        const wQ = this.sinkFor(QQ);
        wQ && (0, xQ.hf)(wQ, 0, FQ) && this.live--
      }
    }
    class zw {
      constructor(QQ, FQ, wQ, LQ, qQ) {
        this.owner = QQ, this.session = FQ, this.key = wQ, this.half = void 0, this.rate = void 0, this.stopDelayMs = void 0, this.emitted = void 0, this.stopped = !1, this.freed = !1, this.half = [Math.abs(qQ[0]), Math.abs(qQ[1]), Math.abs(qQ[2])], this.rate = rw(LQ.emitRate), this.emitted = this.rate > 0;
        const oQ = LQ.maxLifeTime * Mw * 1e3 + 250;
        this.stopDelayMs = oQ >= 0 ? Math.min(oQ, 2147483647) : 250
      }
      sink() {
        return this.stopped ? null : this.owner.sinkFor(this.session)
      }
      moveTo(QQ, FQ) {
        const wQ = this.sink();
        if (wQ) {
          if (FQ)
            for (let QQ = 0; QQ < 3; QQ++) this.half[QQ] = Math.abs(FQ[QQ]);
          Iw(QQ, this.half) && (0, xQ.if)(wQ, 0, this.key, xQ.Fd.HasBox, Ww, Rw, Cw)
        }
      }
      setEmitRate(QQ) {
        const FQ = this.sink(),
          wQ = rw(QQ);
        FQ && wQ !== this.rate && (0, xQ.if)(FQ, 0, this.key, 0, pw, pw, sw(wQ)) && (this.rate = wQ, this.emitted ||= wQ > 0)
      }
      emit(QQ) {
        const FQ = this.sink(),
          wQ = Math.min(Math.floor(QQ), xQ.Fd.MaxBurst);
        FQ && wQ > 0 && (0, xQ.$e)(FQ, 0, this.key, xQ.Fd.PresetNone, 0, wQ, pw, pw, Cw) && (this.emitted = !0)
      }
      emitPoints(QQ, FQ, wQ) {
        const LQ = this.sink(),
          qQ = Math.min(Math.floor(wQ), xQ.Fd.MaxPoints, Math.floor(FQ.length / 4));
        if (!LQ || !(qQ > 0) || !Number.isFinite(QQ[0] + QQ[1] + QQ[2])) return;
        const oQ = new Uint8Array(FQ.buffer, FQ.byteOffset, qQ * xQ.Fd.PointBytes);
        (0, xQ.df)(LQ, 0, this.key, qQ, QQ, oQ) && (this.emitted = !0)
      }
      setDirections(QQ, FQ) {
        const wQ = this.sink();
        if (!wQ || !Number.isFinite(QQ[0] + QQ[1] + QQ[2] + FQ[0] + FQ[1] + FQ[2])) return;
        const LQ = iw.encode(JSON.stringify({
          dir1: [QQ[0], QQ[1], QQ[2]],
          dir2: [FQ[0], FQ[1], FQ[2]]
        }));
        (0, xQ.if)(wQ, 0, this.key, 0, pw, pw, LQ)
      }
      stop() {
        const QQ = this.sink();
        this.stopped = !0, QQ && (this.emitted ? (this.rate > 0 && (0, xQ.if)(QQ, 0, this.key, 0, pw, pw, sw(0)), setTimeout((() => {
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
    const lw = fF.k,
      jw = new TextDecoder;

    function aw(QQ, FQ) {
      const {
        serverIds: wQ,
        kinds: LQ
      } = QQ;
      let qQ = 0;
      for (let oQ = 0; oQ < wQ.length; oQ++) {
        const QQ = wQ[oQ];
        if (QQ !== xQ.ad && !cQ(LQ[oQ])) {
          if (qQ === FQ.length) {
            const QQ = new Int32Array(Math.max(64, 2 * qQ));
            QQ.set(FQ), FQ = QQ
          }
          FQ[qQ++] = QQ
        }
      }
      return {
        ids: FQ,
        count: qQ
      }
    }

    function Xw(QQ, FQ) {
      return QQ.length >= FQ ? QQ : new Int32Array(Math.max(FQ, 2 * QQ.length))
    }

    function fw(QQ, FQ, wQ, LQ) {
      for (let qQ = 0; qQ < wQ; qQ += 4096) {
        const oQ = Math.min(4096, wQ - qQ),
          DQ = QQ.memoryView(Int32Array, QQ.scratch(), oQ, "entity_info_batch's ids");
        if (!DQ) return !1;
        DQ.set(FQ.subarray(qQ, qQ + oQ));
        const kQ = QQ.queries.entityInfoBatch(oQ),
          vQ = 4294967295 === kQ ? null : QQ.memoryData(QQ.scratch(), kQ, 4, "entity_info_batch's records");
        if (!vQ) return !1;
        for (let QQ = 0; QQ + xQ.Zb.BYTES <= kQ;) {
          const FQ = xQ.Zb.len(vQ, QQ);
          LQ(xQ.Zb.serverId(vQ, QQ), Vw(vQ, QQ, FQ)), QQ += xQ.Zb.BYTES + (0, bQ.Yd)(FQ)
        }
      }
      return !0
    }

    function Vw(QQ, FQ, wQ) {
      var LQ, qQ, oQ;
      const DQ = xQ.Zb.kind(QQ, FQ),
        kQ = 0 === DQ ? null : CQ(DQ);
      if (null === kQ) return null;
      const vQ = xQ.Zb.variation(QQ, FQ),
        mQ = xQ.Zb.pose(QQ, FQ),
        uQ = xQ.Zb.meta(QQ, FQ),
        HQ = xQ.Zb.mesh(QQ, FQ),
        bQ = 0 !== (xQ.Zb.flags(QQ, FQ) & xQ.Wb.HasOpts),
        YQ = lw[kQ];
      return Object.freeze({
        type: kQ,
        variation: vQ === xQ.gd ? void 0 : null !== (LQ = null !== (qQ = null === YQ || void 0 === YQ ? void 0 : YQ[vQ]) && void 0 !== qQ ? qQ : null === YQ || void 0 === YQ ? void 0 : YQ[0]) && void 0 !== LQ ? LQ : "default",
        pose: mQ === xQ.sc ? void 0 : null !== (oQ = xQ.Lb[mQ]) && void 0 !== oQ ? oQ : xQ.Lb[0],
        metaInfo: uQ === xQ.sc ? void 0 : xQ.Vc[uQ],
        meshKind: HQ === xQ.sc ? void 0 : xQ.Tc[HQ],
        meshOpts: bQ ? jw.decode(new Uint8Array(QQ.buffer, QQ.byteOffset + FQ + xQ.Zb.BYTES, wQ)) : void 0
      })
    }
    const hw = 1,
      Jw = 2;
    class Ew {
      constructor(QQ) {
        this.deps = QQ, this.wanted = 0, this.ym = !1, this.refused = !1
      }
      get on() {
        return this.ym
      }
      want(QQ, FQ) {
        this.wanted = FQ ? this.wanted | QQ : this.wanted & ~QQ;
        const wQ = 0 !== this.wanted;
        if (wQ === this.ym) return;
        const LQ = this.deps.cmd();
        null !== LQ ? (0, xQ.cg)(LQ, 0, wQ ? 1 : 0) ? (this.ym = wQ, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.ym = !1
      }
    }
    class nw {
      constructor(QQ) {
        this.deps = QQ, this.entries = new Map, this.complete = !1, this.refill = !1, this.midFrame = !1, this.pending = new Int32Array(64), this.pendingCount = 0, this.ids = new Int32Array(64)
      }
      get(QQ) {
        var FQ;
        return this.complete || this.fill(), null !== (FQ = this.entries.get("string" === typeof QQ ? QQ : String(QQ))) && void 0 !== FQ ? FQ : null
      }
      inCoreCall() {
        this.midFrame = !0
      }
      stale(QQ) {
        if (this.complete) {
          if (this.pendingCount === this.pending.length) {
            const QQ = new Int32Array(2 * this.pending.length);
            QQ.set(this.pending), this.pending = QQ
          }
          this.pending[this.pendingCount++] = QQ
        }
      }
      removed(QQ) {
        this.entries.size > 0 && this.entries.delete(String(QQ))
      }
      refresh() {
        const QQ = this.pendingCount;
        if (this.pendingCount = 0, this.midFrame = !1, !this.deps.watch.on || this.refill) return this.complete = !1, void(this.refill = !1);
        if (QQ > 0 && this.complete) {
          const {
            api: FQ
          } = this.deps;
          let wQ = 0;
          const LQ = this.ids = Xw(this.ids, QQ);
          for (let qQ = 0; qQ < QQ; qQ++) {
            const QQ = this.pending[qQ],
              oQ = FQ.indexById.get(QQ);
            void 0 === oQ || cQ(FQ.kinds[oQ]) ? this.entries.delete(String(QQ)) : LQ[wQ++] = QQ
          }
          wQ > 0 && !this.batch(LQ, wQ) && (this.complete = !1)
        }
      }
      sessionEnded() {
        this.entries.clear(), this.complete = !1, this.refill = !1, this.midFrame = !1, this.pendingCount = 0, this.deps.watch.want(hw, !1)
      }
      fill() {
        const {
          api: QQ
        } = this.deps;
        if (this.complete = !0, this.pendingCount = 0, this.entries.clear(), this.deps.isSessionLive()) {
          const {
            watch: QQ
          } = this.deps, FQ = QQ.on;
          QQ.want(hw, !0), !FQ && QQ.on && (this.refill = this.midFrame)
        }
        const {
          ids: FQ,
          count: wQ
        } = aw(QQ, this.ids);
        this.ids = FQ, wQ > 0 && !this.batch(FQ, wQ) && (this.refill = !0)
      }
      batch(QQ, FQ) {
        return fw(this.deps.api, QQ, FQ, ((QQ, FQ) => {
          null === FQ ? this.entries.delete(String(QQ)) : this.entries.set(String(QQ), FQ)
        }))
      }
    }
    var gw = wQ(4638);

    function Pw(QQ) {
      if ("message" !== QQ.type || QQ.Om !== gw.rc.NewClientOptions || QQ.payloadKind !== bQ.Zb.Msgpack) return null;
      const FQ = (0, zQ.d)(QQ.payload);
      if (null === FQ || "object" !== typeof FQ || Array.isArray(FQ)) throw new Error("NewClientOptions whose body isn't an object of options");
      return FQ
    }
    var Zw = wQ(1254),
      yw = wQ(36248);

    function Bw(QQ, FQ, wQ, LQ, qQ, oQ, kQ) {
      var vQ, mQ, uQ;
      switch (QQ) {
        case xQ.Yd.ToggleMenu: {
          const QQ = xQ.L[FQ];
          DQ.l.GA("toggleMenu", void 0 === QQ ? "inventory" : `inventory|${QQ}`);
          break
        }
        case xQ.Yd.EditBoard:
          DQ.l.GA("EditBoard", {
            pos: 0 === FQ ? null : wQ
          });
          break;
        case xQ.Yd.EditCodeBlock:
        case xQ.Yd.ViewCodeBlock:
          DQ.l.GA("EditCodeBlock", {
            pos: wQ,
            canChangePos: QQ === xQ.Yd.EditCodeBlock
          });
          break;
        case xQ.Yd.EditCustomLobbyBlock:
          DQ.l.GA("EditCustomLobbyBlock", {
            pos: wQ
          });
          break;
        case xQ.Yd.OpenIronChest:
          DQ.l.GA("OpenIronChest", {
            pos: wQ
          });
          break;
        case xQ.Yd.EditNameTag:
          DQ.l.GA("EditNameTag", null !== (vQ = null === (mQ = qQ.ym()) || void 0 === mQ || null === (uQ = mQ.attributes.customAttributes) || void 0 === uQ ? void 0 : uQ.text) && void 0 !== vQ ? vQ : "");
          break;
        case xQ.Yd.EditBook: {
          var HQ, bQ, AQ;
          const QQ = null === (HQ = qQ.ym()) || void 0 === HQ ? void 0 : HQ.attributes;
          DQ.l.GA("EditBook", {
            pages: (0, Zw.W)(null === QQ || void 0 === QQ || null === (bQ = QQ.customAttributes) || void 0 === bQ ? void 0 : bQ.pages),
            title: null !== (AQ = null === QQ || void 0 === QQ ? void 0 : QQ.customDisplayName) && void 0 !== AQ ? AQ : "Title",
            isPublished: !(null === QQ || void 0 === QQ || !QQ.customDescription)
          });
          break
        }
        case xQ.Yd.CantChangeBlock:
          ! function(QQ, FQ) {
            const wQ = FQ.getClientOption("cantChangeError"),
              LQ = FQ.getClientOption(QQ ? "cantBuildError" : "cantBreakError"),
              qQ = QQ ? wQ : LQ;
            (FQ.getClientOption("canChange") || qQ || "You cannot modify this block" !== wQ) && DQ.l.GA("showBottomMessage", {
              message: LQ || wQ,
              type: "Error"
            })
          }(1 === FQ, oQ);
          break;
        case xQ.Yd.MiddleBarStart:
          DQ.l.GA("middleScreenBarInitiate", {
            duration: LQ,
            vF: 1 === wQ[0],
            horizBarRemOffset: FQ
          });
          break;
        case xQ.Yd.MiddleBarStop:
          DQ.l.GA("middleScreenBarRemove");
          break;
        case xQ.Yd.Hitmarker:
          DQ.l.GA("localGunHitmarker", {
            iQ: 1 === FQ
          });
          break;
        case xQ.Yd.ShotsLeft:
          DQ.l.GA("localPlayerNewShotsLeft", LQ);
          break;
        case xQ.Yd.AimingOverlay:
          DQ.l.GA("aimingOverlay", 3 === (3 & FQ) ? "sniper" : "none");
          break;
        case xQ.Yd.BottomMessage:
          DQ.l.GA("showBottomMessage", JSON.parse(kQ()));
          break;
        case xQ.Yd.Crosshair:
          qQ.inaccuracy = (0, lQ.c)(LQ), (0, yw.e)().crosshairAccuracy(qQ.inaccuracy);
          break;
        case xQ.Yd.ChargeStage:
          break;
        case xQ.Yd.EmoteWheelClose:
          DQ.l.GA("requestEmoteWheelClose");
          break;
        case xQ.Yd.BlockMined:
          DQ.l.GA("localBlockMined");
          break;
        default:
          throw new YQ.b(`UiEvent of no kind: what ${QQ}`)
      }
    }
    var dw = wQ(37548),
      QL = wQ(9110),
      FL = wQ(1919),
      wL = wQ(36426),
      LL = wQ(9125),
      qL = wQ(4621);
    const oL = 10,
      DL = {
        player: [],
        chestOrCreative: [],
        chest: null,
        creative: !1,
        selectedSlot: 0,
        freeSlots: 0
      },
      kL = {
        items: [],
        ammo: 0,
        selectedSlot: 0
      },
      vL = {
        gun: !1,
        aimable: !1,
        chargeName: null
      };

    function mL(QQ, FQ) {
      let wQ, LQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      const oQ = () => (wQ = (0, FL.q)(wQ, FQ()), wQ);
      return {
        current: oQ,
        watch(FQ) {
          const wQ = () => {
              FQ(oQ())
            },
            DQ = [QQ.watch(wQ)];
          return null !== LQ && DQ.push((0, FL.t)((QQ => {
            QQ.some(LQ) && wQ()
          }))), null !== qQ && DQ.push(qQ(wQ)), () => {
            for (const QQ of DQ) QQ()
          }
        }
      }
    }

    function uL(QQ) {
      return QQ && {
        name: QQ.name,
        amount: QQ.amount,
        attributes: QQ.attributes
      }
    }
    const HL = new WeakMap;

    function bL(QQ) {
      let FQ = HL.get(QQ);
      return void 0 === FQ && (FQ = (0, LL.creativeItemIds)().map((FQ => ({
        name: QQ.nameOfId(FQ),
        amount: QQ.isStackableId(FQ) ? 1 : null,
        attributes: (0, dw.e)("Gun" === (0, LL.itemTypeOf)(FQ) ? {
          type: "Gun",
          clipSize: (0, LL.clipSizeOf)(FQ)
        } : void 0)
      }))), HL.set(QQ, FQ)), FQ
    }

    function YL(QQ, FQ, wQ, LQ) {
      const qQ = FQ => (QQ.flush(LQ), FQ),
        oQ = wQ => {
          var LQ, qQ, oQ, DQ, kQ, vQ, mQ;
          const uQ = QQ.slot(wQ);
          if (!uQ) return null;
          const {
            rootName: HQ,
            metaStr: bQ
          } = FQ.getMetaInfo(uQ.name);
          return {
            name: uQ.name,
            amount: uQ.amount,
            attributes: uQ.attributes,
            instance: QQ.instance(wQ),
            displayName: null !== (LQ = uQ.attributes.customDisplayName) && void 0 !== LQ ? LQ : FQ.getDisplayName(HQ),
            requiresAmmo: "RequiresAmmo" === bQ,
            clipSize: null !== (qQ = null !== (oQ = null === (DQ = uQ.attributes.customAttributes) || void 0 === DQ || null === (kQ = DQ.gunStats) || void 0 === kQ ? void 0 : kQ.clipSize) && void 0 !== oQ ? oQ : null === (vQ = FQ.getGunStats(HQ)) || void 0 === vQ ? void 0 : vQ.clipSize) && void 0 !== qQ ? qQ : null === (mQ = uQ.typeObj) || void 0 === mQ ? void 0 : mQ.clipSize
          }
        },
        kQ = function(QQ, FQ) {
          let wQ = null,
            LQ = {
              focus: null,
              recipes: [],
              detail: null
            },
            qQ = -1;
          const oQ = new Set;
          return {
            read() {
              var oQ, DQ;
              if (null === wQ) return null !== LQ.focus && (LQ = {
                ...LQ,
                focus: null
              }), LQ;
              if (LQ.focus === wQ && qQ === QQ.changes) return LQ;
              if (qQ = QQ.changes, 0 === QQ.length) return LQ = {
                focus: wQ,
                recipes: [],
                detail: null
              }, LQ;
              let kQ = 0;
              if (null !== wQ.recipe) try {
                kQ = FQ.getItemId(wQ.recipe.name)
              } catch {}
              const vQ = QQ.craftingView(wQ.station, kQ, null !== (oQ = null === (DQ = wQ.recipe) || void 0 === DQ ? void 0 : DQ.Cm) && void 0 !== oQ ? oQ : 0);
              return LQ = null === vQ ? {
                focus: wQ,
                recipes: [],
                detail: null
              } : function(QQ, FQ, wQ) {
                let LQ = xQ.rb.BYTES;
                const qQ = [];
                for (let uQ = xQ.rb.recipes(QQ, 0); uQ > 0; uQ--) {
                  const wQ = xQ.ib.flags(QQ, LQ),
                    oQ = {
                      name: FQ.nameOfId(xQ.ib.item(QQ, LQ)),
                      Cm: xQ.ib.recipe(QQ, LQ),
                      requires: [],
                      produces: xQ.ib.produces(QQ, LQ),
                      haveIngredients: 0 !== (wQ & xQ.gb.HaveIngredients),
                      listed: 0 !== (wQ & xQ.gb.Listed)
                    };
                  let DQ = xQ.ib.requires(QQ, LQ);
                  for (LQ += xQ.ib.BYTES; DQ > 0; DQ--) {
                    const wQ = xQ.mb.items(QQ, LQ);
                    oQ.requires.push({
                      items: tL(QQ, LQ + xQ.mb.BYTES, wQ, FQ),
                      amt: xQ.mb.amount(QQ, LQ)
                    }), LQ += xQ.mb.BYTES + 2 * wQ
                  }
                  qQ.push(oQ)
                }
                const oQ = xQ.rb.flags(QQ, 0);
                if (null === wQ.recipe || 0 === (oQ & xQ.nb.Detail)) return {
                  focus: wQ,
                  recipes: qQ,
                  detail: null
                };
                const DQ = {},
                  kQ = {};
                for (let uQ = xQ.rb.ingredients(QQ, 0); uQ > 0; uQ--) {
                  const wQ = xQ.fb.item(QQ, LQ),
                    qQ = xQ.fb.from(QQ, LQ),
                    oQ = xQ.fb.amount(QQ, LQ);
                  LQ += xQ.fb.BYTES;
                  const vQ = qQ === xQ.I ? null : tL(QQ, LQ, qQ, FQ);
                  if (null !== vQ && (LQ += 2 * qQ), 0 === wQ) continue;
                  const mQ = FQ.nameOfId(wQ);
                  DQ[mQ] = oQ, null !== vQ && (kQ[mQ] = vQ)
                }
                const {
                  name: vQ,
                  Cm: mQ
                } = wQ.recipe;
                return {
                  focus: wQ,
                  recipes: qQ,
                  detail: {
                    name: vQ,
                    Cm: mQ,
                    craftAllTimes: xQ.rb.craftAllTimes(QQ, 0),
                    roomForOne: 0 !== (oQ & xQ.nb.RoomForOne),
                    resultStackable: Boolean(FQ.getItemStat(vQ, "stackable")),
                    amounts: DQ,
                    ingredientsCraftedFrom: kQ
                  }
                }
              }(vQ, FQ, wQ), LQ
            },
            setFocus(QQ) {
              wQ = QQ;
              for (const FQ of [...oQ]) FQ()
            },
            watchFocus: QQ => (oQ.add(QQ), () => {
              oQ.delete(QQ)
            })
          }
        }(QQ, FQ);
      return {
        states: {
          inventory: mL(QQ, (() => {
            const wQ = QQ.length;
            if (0 === wQ) return DL;
            const LQ = [];
            for (let FQ = 0; FQ < xQ.td; FQ++) LQ.push(uL(QQ.slot(FQ)));
            const qQ = QQ.slotIcon,
              oQ = LQ[QQ.selectedSlot];
            0 !== qQ && oQ && (LQ[QQ.selectedSlot] = {
              ...oQ,
              icon: FQ.nameOfId(qQ)
            });
            const DQ = !0 === FQ.getClientOption("creative");
            let kQ = [],
              vQ = null;
            if (wQ > xQ.td) {
              for (let FQ = xQ.td; FQ < wQ; FQ++) kQ.push(uL(QQ.slot(FQ)));
              vQ = {
                type: null,
                pos: [...QQ.VQ],
                numSlots: wQ - xQ.td,
                ironChest: null
              }
            } else DQ && (kQ = bL(FQ));
            return {
              player: LQ,
              chestOrCreative: kQ,
              chest: vQ,
              creative: DQ,
              selectedSlot: QQ.selectedSlot,
              freeSlots: QQ.freeSlots()
            }
          }), (0, FL.k)("creative")),
          hotbar: mL(QQ, (() => {
            if (0 === QQ.length) return kL;
            const FQ = [];
            for (let QQ = 0; QQ < oL; QQ++) FQ.push(oQ(QQ));
            return {
              items: FQ,
              ammo: QQ.amountOf("Ammo"),
              selectedSlot: QQ.selectedSlot
            }
          }), (0, FL.g)("DisplayName", "GunStats")),
          crafting: mL(QQ, kQ.read, null, kQ.watchFocus),
          heldItemAim: mL(QQ, (() => {
            var FQ;
            if (!wQ()) return vL;
            const LQ = null === (FQ = QQ.ym()) || void 0 === FQ ? void 0 : FQ.typeObj,
              qQ = "Gun" === (null === LQ || void 0 === LQ ? void 0 : LQ.type);
            return {
              gun: qQ,
              aimable: qQ || !0 === (null === LQ || void 0 === LQ ? void 0 : LQ.showsAimingUi),
              chargeName: "Chargeable" === (null === LQ || void 0 === LQ ? void 0 : LQ.type) ? LQ.name : null
            }
          }), null, (QQ => function(QQ, FQ) {
            let wQ = QQ();
            return (0, qL.x)((() => {
              const LQ = QQ();
              LQ !== wQ && (wQ = LQ, FQ(LQ))
            }))
          }(wQ, QQ)))
        },
        events: {
          hotbarSlotRequested: (0, FL.b)("setSelectedInventorySlotI"),
          hotbarScrolled: (0, FL.b)("ScrollInventorySlot"),
          numberKeyPressed: (0, FL.b)("numkeyPressed"),
          inventoryDropRequested: (0, FL.b)("DropInvenItem"),
          chestToggled: (0, FL.b)("chestToggleFromServer"),
          chestRefreshed: (0, FL.b)("chestRefreshedFromServer", AL),
          inventorySynced: (0, FL.b)("syncedInvenFromServer", AL),
          enchantingTableOpened: (0, FL.b)("enchantingTable", (QQ => {
            let {
              position: wQ,
              um: LQ
            } = QQ;
            return {
              position: [...wQ],
              blockName: FQ.getMetaInfo(LQ).rootName
            }
          }))
        },
        commands: {
          selectHotbarSlot(FQ) {
            QQ.selectSlot(FQ), QQ.flush(LQ)
          },
          removeInventoryItem(FQ) {
            let {
              slot: wQ,
              amount: LQ,
              drop: oQ
            } = FQ;
            return qQ(QQ.remove(wQ, LQ, oQ))
          },
          swapInventorySlots(FQ) {
            let {
              a: wQ,
              b: LQ
            } = FQ;
            return qQ(QQ.swap(wQ, LQ))
          },
          moveInventoryItem(FQ) {
            let {
              from: wQ,
              to: LQ,
              amount: oQ
            } = FQ;
            return qQ(QQ.move(wQ, LQ, oQ))
          },
          quickMoveInventoryItem(FQ) {
            let {
              slot: wQ,
              start: LQ,
              end: oQ,
              amount: DQ
            } = FQ;
            return qQ(QQ.quickMove(wQ, LQ, oQ, DQ))
          },
          closeChest() {
            QQ.closeChest(), QQ.flush(LQ), DQ.l.GA("chestClosedByPlayer")
          },
          focusCrafting(QQ) {
            kQ.setFocus(QQ)
          },
          craftRecipe(FQ) {
            let {
              name: wQ,
              Cm: LQ,
              times: oQ
            } = FQ;
            return qQ(QQ.craft(wQ, LQ, oQ))
          },
          salvageItem(FQ) {
            let {
              slot: wQ,
              name: LQ,
              amount: oQ
            } = FQ;
            return qQ(QQ.salvage(wQ, LQ, oQ))
          },
          enchantItem(FQ) {
            let {
              slot: wQ,
              level: LQ,
              tablePos: qQ
            } = FQ;
            QQ.enchant(wQ, LQ, qQ)
          }
        },
        queries: {
          enchantingOffer(wQ) {
            let {
              slot: LQ,
              blockName: qQ
            } = wQ;
            return function(QQ, FQ, wQ, LQ) {
              const qQ = QQ.slot(wQ);
              if (!qQ || !FQ.getClientOption("canCraft") || !(0, QL.l)(LQ) || (0, QL.k)(qQ.attributes)) return xL;
              const oQ = (0, LL.enchantmentPerksOf)(FQ.getItemId(qQ.name));
              if (0 === oQ.length) return xL;
              const DQ = [];
              for (let kQ = 0; kQ < wL.d; kQ++) {
                const {
                  commonProb: QQ,
                  uncommonProb: FQ,
                  rareProb: wQ,
                  epicProb: qQ,
                  legendaryProb: oQ,
                  level: vQ
                } = (0, QL.d)(LQ, kQ);
                DQ.push({
                  level: vQ,
                  odds: [QQ, FQ, wQ, qQ, oQ].map((QQ => 100 * QQ))
                })
              }
              return {
                perks: [...oQ],
                options: DQ
              }
            }(QQ, FQ, LQ, qQ)
          }
        }
      }
    }
    const xL = Object.freeze({
      perks: [],
      options: []
    });

    function AL() {
      return null
    }

    function tL(QQ, FQ, wQ, LQ) {
      const qQ = [];
      for (let oQ = 0; oQ < wQ; oQ++) {
        const wQ = QQ.getUint16(FQ + 2 * oQ, !0);
        0 !== wQ && qQ.push(LQ.nameOfId(wQ))
      }
      return qQ
    }
    class eL {
      constructor(QQ) {
        this.api = QQ, this.positions = new Map, this.targeted = {
          u9: 0,
          position: [0, 0, 0],
          normal: [0, 0, 0],
          nY: [0, 0, 0]
        }, this.hasTarget = !1, this.breaking = [0, 0, 0], this.isBreaking = !1
      }
      position(QQ) {
        let FQ = this.positions.get(QQ);
        return FQ || (this.api.checkValid(QQ) || this.api.isLocal(QQ) ? (FQ = [NaN, NaN, NaN], this.api.readPosition(QQ, FQ), this.positions.set(QQ, FQ), FQ) : null)
      }
      XQQ() {
        return this.hasTarget ? this.targeted : null
      }
      breakingPosition() {
        return this.isBreaking ? this.breaking : null
      }
      refresh() {
        for (const [FQ, wQ] of this.positions) this.api.readPosition(FQ, wQ) || this.api.checkValid(FQ) || this.api.isLocal(FQ) || this.positions.delete(FQ);
        const QQ = this.api.apiView;
        if (this.refreshTarget(), this.isBreaking = 0 !== (xQ.v.playerFlags(QQ, 0) & xQ.Gd.Breaking) && xQ.v.breakingProgress(QQ, 0) >= 0, this.isBreaking)
          for (let FQ = 0; FQ < 3; FQ++) this.breaking[FQ] = xQ.v.breakingPos(QQ, 0, FQ)
      }
      refreshTarget() {
        const QQ = this.api.apiView,
          FQ = xQ.v.targetBlockId(QQ, 0);
        if (this.hasTarget = FQ !== xQ.ed, this.hasTarget) {
          const wQ = this.targeted;
          wQ.u9 = FQ;
          for (let FQ = 0; FQ < 3; FQ++) wQ.position[FQ] = xQ.v.targetBlock(QQ, 0, FQ), wQ.normal[FQ] = xQ.v.targetNormal(QQ, 0, FQ), wQ.nY[FQ] = xQ.v.targetAdjacent(QQ, 0, FQ)
        }
      }
      despawned(QQ) {
        const FQ = this.positions.get(QQ);
        FQ && !this.api.isLocal(QQ) && (FQ.fill(NaN), this.positions.delete(QQ))
      }
    }
    var ML = wQ(40054),
      GL = wQ(40031),
      pL = wQ(36422);
    const cL = 1,
      CL = 2;
    class SL {
      constructor() {
        this.game = new pL.f, this.client = new pL.f, this.ym = 0, this.movesFly = null
      }
      setGame(QQ) {
        if (null === QQ || "object" !== typeof QQ) return !1;
        const {
          key: FQ,
          value: wQ
        } = QQ;
        return "string" === typeof FQ && (this.game.setBooleanType(FQ, Boolean(wQ)), !0)
      }
      setClient(QQ, FQ) {
        this.client.setBooleanType(QQ, FQ)
      }
      clearGame() {
        this.game = new pL.f, this.movesFly = null
      }
      setMovesFly(QQ) {
        this.movesFly = QQ
      }
      perms() {
        return (this.game._getTotalBooleanVal() ? cL : 0) | (this.client._getTotalBooleanVal() ? CL : 0)
      }
      write(QQ) {
        const FQ = this.perms(),
          {
            movesFly: wQ
          } = this;
        if (FQ === this.ym && null === wQ) return !0;
        let LQ = xQ.bc.Keep;
        return null !== wQ && (LQ = wQ ? xQ.bc.On : xQ.bc.Off), !(!QQ || !(0, xQ.ve)(QQ, 0, LQ, FQ, wQ ? 1 : 0)) && (this.ym = FQ, this.movesFly = null, !0)
      }
    }
    class iL {
      constructor(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 35;
        this.api = QQ, this.screenBandPct = void 0, this.clipX = 0, this.clipY = 0, this.clipW = 0, this.eye = [0, 0, 0], this.forward = [0, 0, 1], this.along = [0, 0, 0], this.screenBandPct = {
          x: kQ.d,
          get y() {
            return FQ()
          }
        }
      }
      get hasView() {
        const QQ = this.api.apiView,
          FQ = xQ.v.viewProj;
        return 0 !== FQ(QQ, 0, 3) || 0 !== FQ(QQ, 0, 7) || 0 !== FQ(QQ, 0, 11) || 0 !== FQ(QQ, 0, 15)
      }
      get cameraPosition() {
        const QQ = this.api.apiView,
          {
            eye: FQ
          } = this;
        for (let wQ = 0; wQ < 3; wQ++) FQ[wQ] = xQ.v.eye(QQ, 0, wQ);
        return FQ
      }
      get cameraDirection() {
        const QQ = this.api.apiView,
          FQ = xQ.v.viewProj,
          wQ = FQ(QQ, 0, 3),
          LQ = FQ(QQ, 0, 7),
          qQ = FQ(QQ, 0, 11),
          oQ = Math.hypot(wQ, LQ, qQ),
          {
            forward: DQ
          } = this;
        return oQ > 0 && (DQ[0] = wQ / oQ, DQ[1] = LQ / oQ, DQ[2] = qQ / oQ), DQ
      }
      get cameraHeading() {
        return xQ.v.heading(this.api.apiView, 0)
      }
      get cameraPitch() {
        return xQ.v.pitch(this.api.apiView, 0)
      }
      get tanHalfFovX() {
        return xQ.v.tanHalfFovX(this.api.apiView, 0)
      }
      get tanHalfFovY() {
        return xQ.v.tanHalfFovY(this.api.apiView, 0)
      }
      projectWorldPosToScreenPos(QQ) {
        this.clip(QQ);
        const {
          clipX: FQ,
          clipY: wQ,
          clipW: LQ
        } = this;
        if (LQ > 0) {
          const QQ = FQ / LQ * 50,
            qQ = -wQ / LQ * 50;
          return Math.abs(QQ) <= this.screenBandPct.x && Math.abs(qQ) <= this.screenBandPct.y ? {
            x: 50 + QQ,
            y: 50 + qQ
          } : this.clampToBand(QQ, qQ)
        }
        const qQ = this.cameraPosition,
          oQ = Math.hypot(QQ[0] - qQ[0], QQ[1] - qQ[1], QQ[2] - qQ[2]),
          DQ = this.api.apiView,
          kQ = xQ.v.viewProj,
          vQ = oQ > 0 ? FQ / oQ : 0,
          mQ = oQ > 0 ? -wQ / oQ : 0,
          uQ = Math.hypot(kQ(DQ, 0, 1), kQ(DQ, 0, 5), kQ(DQ, 0, 9)),
          HQ = vQ / Math.hypot(kQ(DQ, 0, 0), kQ(DQ, 0, 4), kQ(DQ, 0, 8)),
          bQ = mQ / uQ,
          YQ = !(Math.abs(HQ) >= .001 || Math.abs(bQ) >= .001);
        return this.clampToBand(vQ, YQ ? -(uQ || 1) : mQ)
      }
      projectDirectionToScreenPos(QQ) {
        if (!this.hasView) return;
        const FQ = this.cameraPosition,
          wQ = this.along;
        for (let LQ = 0; LQ < 3; LQ++) wQ[LQ] = FQ[LQ] + 10 * QQ[LQ];
        return this.projectWorldPosToScreenPos(wQ)
      }
      projectWorldPosToViewport(QQ) {
        this.clip(QQ);
        const {
          clipX: FQ,
          clipY: wQ,
          clipW: LQ
        } = this;
        return LQ > 0 ? {
          x: 50 + FQ / LQ * 50,
          y: 50 - wQ / LQ * 50
        } : null
      }
      clip(QQ) {
        const FQ = this.api.apiView,
          wQ = QQ[0] - xQ.v.origin(FQ, 0, 0),
          LQ = QQ[1] - xQ.v.origin(FQ, 0, 1),
          qQ = QQ[2] - xQ.v.origin(FQ, 0, 2),
          oQ = xQ.v.viewProj;
        this.clipX = oQ(FQ, 0, 0) * wQ + oQ(FQ, 0, 4) * LQ + oQ(FQ, 0, 8) * qQ + oQ(FQ, 0, 12), this.clipY = oQ(FQ, 0, 1) * wQ + oQ(FQ, 0, 5) * LQ + oQ(FQ, 0, 9) * qQ + oQ(FQ, 0, 13), this.clipW = oQ(FQ, 0, 3) * wQ + oQ(FQ, 0, 7) * LQ + oQ(FQ, 0, 11) * qQ + oQ(FQ, 0, 15)
      }
      clampToBand(QQ, FQ) {
        return (0, kQ.f)(QQ, FQ, this.screenBandPct.x, this.screenBandPct.y)
      }
    }
    var WL = wQ(4651);
    const RL = new TextEncoder,
      OL = new Uint8Array(xQ.Q * xQ.O);
    class sL {
      constructor() {
        this.buttons = [], this.ym = !0
      }
      set(QQ) {
        this.buttons = QQ, this.ym = !1
      }
      attached() {
        this.ym = 0 === this.buttons.length
      }
      write(QQ) {
        if (this.ym) return;
        const FQ = new Uint8Array(xQ.Q),
          wQ = new Uint8Array(xQ.Q);
        let LQ = 0,
          qQ = 0;
        for (const {
            id: oQ,
            keycode: DQ
          }
          of this.buttons) {
          if (LQ === xQ.Q) break;
          const {
            read: QQ,
            written: kQ
          } = RL.encodeInto(oQ, OL.subarray(qQ, qQ + xQ.O));
          if (QQ < oQ.length) continue;
          const vQ = WL.f[DQ];
          FQ[LQ] = "number" === typeof vQ ? vQ : 0, wQ[LQ] = kQ, LQ++, qQ += kQ
        }
        this.ym = (0, xQ.je)(QQ, 0, LQ, FQ, wQ, OL.subarray(0, qQ))
      }
    }

    function rL(QQ, FQ, wQ) {
      const LQ = RL.encode(FQ);
      return LQ.length <= xQ.O && function(QQ, FQ, wQ, LQ) {
        return (0, JF.d)(), (0, xQ.jf)(QQ, FQ, wQ, LQ)
      }(QQ, 0, wQ ? 1 : 0, LQ)
    }
    const IL = new TextDecoder,
      UL = new TextEncoder,
      NL = new Uint8Array(0),
      TL = [0, 0, 0],
      KL = {
        off: xQ.Hd.Off,
        key: xQ.Hd.Key,
        touch: xQ.Hd.Touch
      };
    class zL {
      constructor(QQ) {
        var FQ;
        this.options = QQ, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tickers = [], this.renderers = [], this.receivers = [], this.failures = [], this.vetoSet = !1, this.hooksSet = !1, this.writtenPublicLobby = !1, this.promptWatch = "off", this.promptWatchSent = "off", this.customButtons = new sL, this.generation = 0, this.sessionLive = !1, this.boundId = 0, this.session = null, this.activeConn = 0, this.closedThrough = 0, this.openSocket = 0, this.socketLeftSinceAttach = !1, this.ticks = 0, this.zoomUnshown = !1, this.zoomHeld = !1, this.overflowGen = 0, this.resyncOwed = !1, this.zoom = 0, this.pendingZoom = null, this.highlight = null, this.highlightOwed = !1, this.cmd = null, this.freeCam = new SL, this.stopped = () => !1, this.onError = void 0, this.api = void 0, this.tables = void 0, this.itemSources = null, this.fault = void 0, this.hY = QQ => {
          if ((0, YQ.f)(QQ)) throw QQ;
          this.onError(QQ)
        }, this.api = QQ.api, this.tables = QQ.tables, this.onError = null !== (FQ = QQ.onError) && void 0 !== FQ ? FQ : QQ => {
          console.error("Error in client game callback", QQ)
        }, this.renderFrame = new iL(this.api, QQ.screenBandY), this.live = new eL(this.api), this.chunks = new kF(this.api.memory, (() => this.api.apiView)), this.items = new ew({
          api: this.api,
          tables: QQ.tables,
          cmd: () => this.cmd,
          onError: this.onError,
          beforeOp: QQ.beforeOp
        });
        const wQ = () => this.stopped() ? null : this.cmd,
          LQ = () => this.sessionLive;
        this.entityInfoWatch = new Ew({
          cmd: wQ,
          onError: this.onError
        }), this.entityInfo = new nw({
          api: this.api,
          watch: this.entityInfoWatch,
          isSessionLive: LQ
        }), this.particles = new Kw({
          cmd: wQ,
          isSessionLive: LQ,
          onError: this.onError
        }), this.clientApi = new vw({
          api: this.api,
          live: this.live,
          chunks: this.chunks,
          items: this.items,
          entityInfo: this.entityInfo,
          particles: this.particles,
          tables: QQ.tables,
          cmd: wQ,
          sendCmd: () => this.sendCmd(),
          isSessionLive: LQ,
          beforeWrite: () => {
            var FQ;
            if (this.stopped()) return !1;
            const wQ = this.generation;
            return !1 !== (null === (FQ = QQ.beforeWrite) || void 0 === FQ ? void 0 : FQ.call(QQ)) && wQ === this.generation
          },
          playerDbId: () => {
            const QQ = this.session;
            if (null === QQ) throw new Error("No game session has started, so the local player has no DB id");
            return QQ.playerDbId
          },
          playSound: QQ.playSound,
          preloadSounds: QQ.preloadSounds,
          setLocalOptions: QQ.setLocalOptions,
          hasPackModel: QQ.hasPackModel
        }), this.scriptedCamera = new nQ({
          api: this.api,
          cmd: () => this.stopped() ? null : this.cmd,
          screen: QQ.cameraScreen,
          showFacing: QQ.showCameraFacing
        })
      }
      get itemBridgeSources() {
        return this.itemSources ??= YL(this.items, this.tables, (() => this.localPlayerAlive()), this.hY), this.itemSources
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
      clickCodeBlock(QQ) {
        const FQ = this.sessionLive ? this.sendCmd() : null;
        return null !== FQ && (wQ = FQ, LQ = 0, qQ = QQ[0], oQ = QQ[1], DQ = QQ[2], (0, JF.d)(), (0, xQ.re)(wQ, LQ, qQ, oQ, DQ));
        var wQ, LQ, qQ, oQ, DQ
      }
      cameraZoom() {
        return this.zoom
      }
      setCameraZoom(QQ) {
        const FQ = this.liveCmd();
        return null === FQ ? (this.pendingZoom = QQ, !1) : (this.pendingZoom = null, (0, xQ.Yf)(FQ, 0, QQ, 1))
      }
      pI(QQ) {
        const FQ = this.stopped() ? null : this.cmd;
        return null !== FQ && (0, xQ.Qf)(FQ, 0, QQ ? 1 : 0)
      }
      respawn() {
        const QQ = this.sessionLive ? this.sendCmd() : null;
        return null !== QQ && (FQ = QQ, wQ = 0, (0, JF.d)(), (0, xQ.wf)(FQ, wQ));
        var FQ, wQ
      }
      bindCustomButtonKeys(QQ) {
        this.customButtons.set(QQ)
      }
      pressCustomButton(QQ, FQ) {
        const wQ = this.sessionLive ? this.sendCmd() : null;
        return null !== wQ && rL(wQ, QQ, FQ)
      }
      padMove(QQ, FQ, wQ, LQ, qQ, oQ) {
        const DQ = this.liveCmd();
        return null !== DQ && (0, xQ.Ye)(DQ, 0, QQ, FQ, wQ, LQ, qQ, oQ)
      }
      thirdPersonFor(QQ) {
        const FQ = this.liveCmd();
        return null !== FQ && (0, xQ.bg)(FQ, 0, null !== QQ && void 0 !== QQ ? QQ : 1 / 0)
      }
      send(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const LQ = 0 !== this.openSocket || this.sessionLive ? this.sendCmd() : null;
        return null !== LQ && EF(LQ, wQ ? bQ.Xc : 0, QQ, (0, zQ.f)(FQ))
      }
      socketAttached(QQ) {
        this.openSocket = QQ, this.socketLeftSinceAttach = !1
      }
      socketDetached(QQ) {
        this.openSocket === QQ && (this.openSocket = 0)
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
      attach(QQ) {
        const FQ = () => QQ.isStopped;
        this.stopped = FQ, this.cmd = QQ.rings.cmd, this.promptWatchSent = "off", this.writePromptWatch(), this.customButtons.attached(), this.writeCustomButtons();
        const wQ = this.api.apiView;
        this.overflowGen = xQ.v.eventOverflowGen(wQ, 0), this.resyncOwed = 0 !== xQ.v.eventOverflowMask(wQ, 0), QQ.setGameHost(this), QQ.setEventWalker((QQ => {
          this.api.walk(QQ, this, FQ)
        }))
      }
      watchPromptPick(QQ) {
        this.promptWatch = QQ, this.writePromptWatch()
      }
      get promptEntity() {
        return "off" === this.promptWatch || this.stopped() ? null : lL(xQ.v.promptEntity(this.api.apiView, 0))
      }
      get interactLabel() {
        return "touch" !== this.promptWatch || this.stopped() ? xQ.Dc.None : xQ.v.interactLabel(this.api.apiView, 0)
      }
      get interactIcon() {
        return "touch" !== this.promptWatch || this.stopped() ? 0 : xQ.v.interactIcon(this.api.apiView, 0)
      }
      closeGame() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        (0 === QQ || QQ >= this.openSocket) && (this.openSocket = 0), this.closedThrough = Math.max(this.closedThrough, QQ, this.activeConn), this.activeConn = 0, this.endSession(), this.endGameGrants(), this.dropGameCamera()
      }
      gameCamera(QQ) {
        0 !== this.activeConn && this.scriptedCamera.settingsChanged(QQ)
      }
      netEvent(QQ) {
        "connection" === QQ.type ? QQ.phase === bQ.z.Activated && QQ.conn !== this.activeConn && QQ.conn > this.closedThrough ? (this.endSession(), this.activeConn = QQ.conn, this.endGameGrants(), this.dropGameCamera()) : QQ.phase !== bQ.z.Left && QQ.phase !== bQ.z.Closed || QQ.conn !== this.activeConn ? QQ.phase === bQ.z.Resumed && 0 !== this.activeConn && QQ.conn > this.closedThrough && (this.activeConn = QQ.conn) : this.closeGame() : QQ.conn === this.activeConn && 0 !== QQ.conn && (QQ.Om === GL.r ? this.gunHit(QQ.payload) : QQ.Om === gw.rc.EditItemCraftingRecipes || QQ.Om === GL.V ? this.items.touch() : (this.serverOptions(QQ), this.gameMessage(QQ)));
        const FQ = this.options.onNetEvent;
        FQ && this.guard((() => {
          FQ(QQ)
        }))
      }
      serverOptions(QQ) {
        const FQ = this.options.serverOptions,
          wQ = FQ ? this.decoded(Pw, QQ) : null;
        FQ && wQ && this.guard((() => {
          FQ.applyNewClientOptions(wQ)
        }))
      }
      gameMessage(QQ) {
        let FQ = null;
        try {
          FQ = function(QQ) {
            if ("message" !== QQ.type || QQ.Om !== gw.rc.GameCodeMessage || QQ.payloadKind !== bQ.Zb.Msgpack) return null;
            const FQ = (0, zQ.d)(QQ.payload);
            if (null === FQ || "object" !== typeof FQ || "string" !== typeof FQ.messageType) throw new Error("GameCodeMessage without a messageType");
            return FQ
          }(QQ)
        } catch (wQ) {
          this.sessionLive && this.onError(wQ)
        }
        if (FQ) {
          const {
            messageType: QQ,
            data: wQ
          } = FQ;
          if ((0, sQ.g)(QQ)) return void this.guard((() => {
            (0, sQ.e)(QQ, wQ)
          }));
          "freeCamPerms" === QQ && this.freeCam.setGame(wQ) && this.writeFreeCam(), this.sessionLive && this.round(this.receivers, (FQ => {
            FQ.onReceivedMessageFromServer(QQ, wQ)
          }))
        }
      }
      decoded(QQ, FQ) {
        try {
          return QQ(FQ)
        } catch (wQ) {
          return this.onError(wQ), null
        }
      }
      setClientFreeCameraGrant(QQ, FQ) {
        this.freeCam.setClient(QQ, FQ), this.writeFreeCam()
      }
      freeCameraAllowed() {
        return 0 !== this.freeCam.perms()
      }
      setFreeCameraMovesFly(QQ) {
        this.freeCam.setMovesFly(QQ), this.writeFreeCam()
      }
      setBlockHighlight(QQ) {
        this.highlight = QQ, this.highlightOwed = !0, this.writeOwedHighlight()
      }
      writeOwedHighlight() {
        const QQ = this.liveCmd();
        if (null === QQ || !this.highlightOwed) return;
        const FQ = this.highlight;
        this.highlightOwed = null === FQ ? !(0, xQ.Fe)(QQ, 0, TL, TL, 0) : !(0, xQ.Fe)(QQ, 0, FQ.pos, FQ.normal, 1)
      }
      localPlayerBound(QQ) {
        var FQ, wQ;
        if (0 === this.activeConn || this.sessionLive && QQ === this.boundId) return;
        const LQ = this.sessionLive;
        let qQ, oQ, DQ, kQ;
        this.endSession(), LQ && this.restartGameCamera();
        try {
          var vQ;
          this.session = null;
          const QQ = this.options.sessionInfo(this.activeConn);
          if (this.session = QQ, !QQ) return;
          qQ = QQ.gameNameWithVariation, oQ = null !== (vQ = (0, RQ.Pb)(qQ)) && void 0 !== vQ ? vQ : void 0, DQ = (0, OQ.A)(QQ.lobbyName), kQ = (0, OQ.S)(QQ.lobbyName)
        } catch (MQ) {
          return void this.onError(MQ)
        }
        const mQ = {
          localPlayerId: String(QQ)
        };
        let uQ = {},
          HQ = {};
        try {
          var bQ, YQ;
          uQ = null !== (bQ = null === (YQ = this.options.gameFactory((0, RQ.Wb)(qQ))) || void 0 === YQ ? void 0 : YQ(kQ, DQ, oQ, mQ)) && void 0 !== bQ ? bQ : {}
        } catch (MQ) {
          this.hY(MQ)
        }
        try {
          var xQ, AQ;
          HQ = {
            ...null === (xQ = (AQ = this.options).defaultPlugins) || void 0 === xQ ? void 0 : xQ.call(AQ, kQ, DQ, oQ, mQ),
            ...uQ.plugins
          }
        } catch (MQ) {
          this.hY(MQ)
        }
        const tQ = [uQ, ...Object.values(HQ)];
        this.owners = tQ, this.tickers = tQ.filter((QQ => void 0 !== QQ.fH)), this.renderers = tQ.filter((QQ => void 0 !== QQ.onAfterRender)), this.receivers = tQ.filter((QQ => void 0 !== QQ.onReceivedMessageFromServer)), this.writeAltVeto(tQ), this.writeHooks(tQ), this.writePublicLobby(kQ), this.writeLocalDbId(null !== (FQ = null === (wQ = this.session) || void 0 === wQ ? void 0 : wQ.playerDbId) && void 0 !== FQ ? FQ : null), this.boundId = QQ, this.sessionLive = !0, this.generation++, null !== this.pendingZoom && this.setCameraZoom(this.pendingZoom), this.highlightOwed ||= null !== this.highlight, this.writeOwedHighlight(), this.round(tQ, (QQ => {
          var FQ;
          null === (FQ = QQ.onCreate) || void 0 === FQ || FQ.call(QQ, this.clientApi)
        }));
        const eQ = this.generation;
        setTimeout((() => {
          eQ === this.generation && !0 === this.tables.getClientOption("creative") && bL(this.tables)
        }), 0)
      }
      chunkSlot(QQ, FQ, wQ, LQ, qQ, oQ) {
        this.chunks.apply(QQ, FQ, wQ, LQ, qQ, oQ)
      }
      entityAdded(QQ) {
        var FQ;
        this.entityInfo.stale(QQ), null === (FQ = this.options.replayEntities) || void 0 === FQ || FQ.entityAdded(QQ)
      }
      entityInfoChanged(QQ) {
        var FQ;
        this.entityInfo.stale(QQ), null === (FQ = this.options.replayEntities) || void 0 === FQ || FQ.entityInfoChanged(QQ)
      }
      afterPrescan() {
        this.items.refresh(), this.entityInfo.refresh(), this.api.rereadDirectory(), this.chunks.refresh(), this.live.refresh()
      }
      tickEnd() {
        if (this.ticks++, this.tickers.length > 0) {
          const QQ = performance.now();
          this.round(this.tickers, jL), (0, qL.d)(performance.now() - QQ)
        }
      }
      afterWalk(QQ) {
        this.ackEventOverflow(), this.clientApi.flushOwed(), this.writeOwedHighlight();
        const FQ = this.options.replayEntities;
        FQ && this.guard((() => {
          this.entityInfoWatch.want(Jw, FQ.wantsWatch), FQ.flush(this.entityInfoWatch.on)
        }));
        const wQ = (0, qL.g)(QQ, xQ.v.frameMs(this.api.apiView, 0));
        if (null !== wQ) {
          const QQ = this.renderFrame;
          this.guard((() => {
            (0, yw.e)().turnDamageIndicators(QQ.cameraHeading)
          })), this.guard((() => {
            this.clientApi.slideRoute(wQ)
          })), this.round(this.renderers, (FQ => {
            FQ.onAfterRender(wQ, QQ)
          }))
        }
        this.writeFreeCam();
        try {
          this.scriptedCamera.afterFrame(null !== wQ)
        } catch (qQ) {
          this.hY(qQ)
        }
        this.showZoom(), this.items.flush(this.hY), this.writePromptWatch(), this.writeCustomButtons();
        const LQ = this.ticks;
        this.ticks = 0, (0, qL.f)(LQ, QQ, wQ, this.hY)
      }
      entityRemoved(QQ) {
        this.live.despawned(QQ), this.entityInfo.removed(QQ)
      }
      ackEventOverflow() {
        const QQ = this.api.apiView,
          FQ = xQ.v.eventOverflowGen(QQ, 0),
          wQ = FQ - this.overflowGen >>> 0;
        if (0 === wQ && !this.resyncOwed) return;
        this.overflowGen = FQ;
        const LQ = xQ.v.eventOverflowMask(QQ, 0),
          qQ = this.cmd;
        0 === LQ || null === qQ || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, xQ.ue)(qQ, 0, LQ);
        const oQ = this.options.onEventOverflow;
        0 !== wQ && oQ && this.guard((() => {
          oQ(LQ, wQ)
        }))
      }
      gameCall(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ) {
        if (QQ === xQ.pc.Director) try {
          return this.scriptedCamera.call(FQ, wQ, LQ, qQ, oQ, DQ)
        } catch (mQ) {
          return this.hY(mQ), xQ.tb.None
        }
        if (!this.sessionLive || void 0 !== this.fault) return QQ === xQ.pc.AltVeto ? xQ.k.Allow : 0;
        try {
          return this.callGames(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ)
        } catch (mQ) {
          throw (0, YQ.f)(mQ) && (this.fault = mQ), mQ
        }
      }
      takeFault() {
        const QQ = this.fault;
        return this.fault = void 0, QQ
      }
      callGames(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ) {
        this.api.rereadDirectory(), this.chunks.touch(), this.items.refresh(), this.live.refresh(), this.entityInfo.inCoreCall();
        const {
          tables: vQ
        } = this.options, mQ = String(this.boundId);
        switch (QQ) {
          case xQ.pc.AltVeto:
          case xQ.pc.AltAction: {
            const kQ = 0 !== DQ,
              [uQ, HQ, bQ] = kQ ? [FQ, wQ, LQ] : [void 0, void 0, void 0],
              YQ = kQ ? vQ.nameOfId(qQ) : "Air",
              AQ = lL(oQ);
            if (QQ === xQ.pc.AltAction) return this.first((QQ => {
              var FQ;
              return null === (FQ = QQ.onPlayerAltAction) || void 0 === FQ ? void 0 : FQ.call(QQ, mQ, uQ, HQ, bQ, YQ, AQ)
            })), 0;
            const tQ = this.first((QQ => {
              var FQ;
              return null === (FQ = QQ.onPlayerAttemptAltAction) || void 0 === FQ ? void 0 : FQ.call(QQ, mQ, uQ, HQ, bQ, YQ, AQ)
            }));
            return "preventAction" === tQ ? xQ.k.Prevent : "preventPlacement" === tQ ? xQ.k.PreventPlacement : xQ.k.Allow
          }
          case xQ.pc.Click: {
            const QQ = kQ,
              uQ = 0 !== (QQ & xQ._.Alt),
              HQ = 0 !== (QQ & xQ._.HasPos),
              bQ = HQ ? vQ.nameOfId(qQ) : "Air",
              [YQ, AQ, tQ] = HQ ? [FQ, wQ, LQ] : [null, null, null],
              eQ = lL(oQ),
              MQ = 0 !== (QQ & xQ._.Up),
              GQ = lL(DQ);
            if (0 === (QQ & xQ._.AttackOnly) && this.first((QQ => {
                var FQ, wQ;
                return MQ ? null === (FQ = QQ.onPlayerClickUp) || void 0 === FQ ? void 0 : FQ.call(QQ, mQ, uQ, YQ, AQ, tQ, bQ, eQ) : null === (wQ = QQ.onPlayerClick) || void 0 === wQ ? void 0 : wQ.call(QQ, mQ, uQ, YQ, AQ, tQ, bQ, eQ)
              })), !MQ && !uQ && null !== GQ) {
              const QQ = this.clientApi.getPositionView(GQ),
                FQ = QQ ? [QQ[0], QQ[1], QQ[2]] : [0, 0, 0];
              this.first((QQ => {
                var wQ;
                return null === (wQ = QQ.onPlayerAttackEntity) || void 0 === wQ ? void 0 : wQ.call(QQ, mQ, GQ, FQ)
              }))
            }
            return 0
          }
          case xQ.pc.ChangeBlock: {
            const QQ = vQ.nameOfId(qQ),
              DQ = vQ.nameOfId(oQ);
            return this.first((qQ => {
              var oQ;
              return null === (oQ = qQ.onPlayerChangeBlock) || void 0 === oQ ? void 0 : oQ.call(qQ, mQ, FQ, wQ, LQ, QQ, DQ)
            })), 0
          }
          case xQ.pc.DropItem: {
            const QQ = vQ.nameOfId(FQ);
            return this.first((FQ => {
              var qQ;
              return null === (qQ = FQ.onPlayerDropItem) || void 0 === qQ ? void 0 : qQ.call(FQ, mQ, QQ, wQ, LQ)
            })), 0
          }
          default:
            return this.onError(new Error(`Unknown game call kind ${QQ}`)), 0
        }
      }
      changeBlockFail(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
        const kQ = qQ === xQ.Yc ? null : IL.decode(this.api.eventBytes(oQ, Math.min(qQ, DQ)));
        this.failures.push({
          Vo: [QQ, FQ, wQ],
          ho: LQ,
          Jo: kQ
        })
      }
      changeBlockFailEnd() {
        const QQ = this.failures;
        this.failures = [], this.sessionLive && this.round(this.owners, (FQ => {
          var wQ;
          null === (wQ = FQ.onChangeBlockFail) || void 0 === wQ || wQ.call(FQ, QQ)
        })), this.GA("EditBoard", {
          pos: null
        }), this.GA("EditCodeBlock", {
          pos: null,
          canChangePos: null
        })
      }
      inventoryEvent(QQ, FQ, wQ, LQ, qQ, oQ) {
        QQ === xQ.Jc.ChestOpened ? this.items.chestOpened(wQ, LQ, qQ) : QQ !== xQ.Jc.Synced && QQ !== xQ.Jc.ChestClosed && QQ !== xQ.Jc.ChestRefreshed || this.items.touch(), this.guard((() => {
          ! function(QQ, FQ, wQ, LQ) {
            switch (QQ) {
              case xQ.Jc.Synced:
                DQ.l.GA("syncedInvenFromServer");
                break;
              case xQ.Jc.ChestOpened:
              case xQ.Jc.ChestClosed:
                DQ.l.GA("chestToggleFromServer", QQ === xQ.Jc.ChestOpened, !0);
                break;
              case xQ.Jc.ChestRefreshed:
                DQ.l.GA("chestRefreshedFromServer");
                break;
              case xQ.Jc.EnchantingTable:
                DQ.l.GA("enchantingTable", {
                  um: LQ,
                  position: wQ
                });
                break;
              case xQ.Jc.HotbarRequest:
                DQ.l.GA("setSelectedInventorySlotI", FQ, !0);
                break;
              case xQ.Jc.Scrolled:
                DQ.l.GA("ScrollInventorySlot", FQ);
                break;
              case xQ.Jc.NumberKey:
                DQ.l.GA("numkeyPressed", FQ + 1);
                break;
              case xQ.Jc.DropRequested:
                DQ.l.GA("DropInvenItem", 0 !== FQ);
                break;
              default:
                throw new YQ.b(`InventoryEvent of no kind: what ${QQ}`)
            }
          }(QQ, FQ, [wQ, LQ, qQ], oQ)
        }))
      }
      heldItemChanged() {
        this.items.touch()
      }
      shotDamage(QQ, FQ, wQ, LQ) {
        this.GA("shotPlayer", {
          playerId: String(QQ),
          damage: FQ,
          wasCrit: 0 !== LQ,
          distance: wQ
        })
      }
      localHurt(QQ, FQ) {
        this.GA("closeShopOnDamaged", null), this.guard((() => {
          DQ.l.GA("damagedByOtherPlayer", {
            tL: null,
            direction: Number.isNaN(FQ) ? null : FQ,
            UQ: QQ
          })
        }))
      }
      attackHit(QQ, FQ, wQ, LQ, qQ) {
        this.guard((() => {
          DQ.l.GA("yourAttackHit", {
            iQ: LQ,
            screenPos: this.renderFrame.projectDirectionToScreenPos([QQ, FQ, wQ]),
            hitSelf: qQ
          })
        }))
      }
      physicsType(QQ) {
        this.GA("PlayerPhysicsTypeUpdate", QQ)
      }
      vehicleEffect(QQ, FQ, wQ, LQ, qQ) {
        this.guard((() => {
          QQ === bQ.gd.UPDATE ? (0, IQ.l)(FQ, {
            icon: wQ,
            level: LQ,
            displayName: null,
            durationMs: qQ
          }) : rQ.d.remove(FQ)
        }))
      }
      zoomChanged(QQ) {
        this.zoom = QQ, this.zoomUnshown = !0
      }
      zoomDisabled() {
        this.GA("showBottomMessage", {
          message: "Zoom is disabled",
          timeoutLength: 2e3,
          type: "Error"
        })
      }
      showZoom() {
        const QQ = this.scriptedCamera.holdsView();
        !this.zoomUnshown || QQ && this.zoomHeld || (this.zoomUnshown = !1, this.GA("cameraZoomSet", this.zoom)), this.zoomHeld = QQ
      }
      gunHit(QQ) {
        this.guard((() => {
          const {
            tL: FQ,
            eL: wQ
          } = (0, ML.e)(GL.r, QQ);
          DQ.l.GA("damagedByOtherPlayer", {
            tL: FQ,
            direction: wQ
          })
        }))
      }
      uiEvent(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ) {
        this.guard((() => {
          Bw(QQ, FQ, [wQ, LQ, qQ], oQ, this.items, this.options.tables, (() => IL.decode(this.api.eventBytes(DQ, kQ))))
        }))
      }
      writeAltVeto(QQ) {
        const FQ = this.cmd;
        if (!FQ) return;
        let wQ;
        try {
          wQ = function(QQ, FQ) {
            const wQ = new Set;
            let LQ = !1;
            for (const qQ of QQ)
              if (qQ.onPlayerAttemptAltAction) {
                if (LQ = !0, !qQ.altVetoBlocks) return {
                  mode: xQ.$d.All,
                  roots: []
                };
                for (const QQ of qQ.altVetoBlocks) wQ.add(FQ.getMetaInfo(QQ).rootId)
              } return LQ ? wQ.size > xQ.Pc ? {
              mode: xQ.$d.All,
              roots: []
            } : {
              mode: xQ.$d.Filter,
              roots: [...wQ]
            } : {
              mode: xQ.$d.Off,
              roots: []
            }
          }(QQ, this.options.tables)
        } catch (qQ) {
          this.onError(qQ), wQ = {
            mode: xQ.$d.All,
            roots: []
          }
        }
        if (wQ.mode === xQ.$d.Off && !this.vetoSet) return;
        const LQ = new Uint8Array(new Uint32Array(wQ.roots).buffer);
        (0, xQ.Ff)(FQ, 0, wQ.mode, wQ.roots.length, LQ) ? this.vetoSet = wQ.mode !== xQ.$d.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
      }
      endGameGrants() {
        this.freeCam.clearGame(), this.writeFreeCam()
      }
      writeFreeCam() {
        this.stopped() || this.freeCam.write(this.cmd)
      }
      writeHooks(QQ) {
        const FQ = this.cmd;
        if (!FQ) return;
        const wQ = function(QQ) {
          let FQ = 0;
          for (const wQ of QQ) wQ.onPlayerAltAction && (FQ |= 1 << xQ.pc.AltAction), (wQ.onPlayerClick || wQ.onPlayerClickUp || wQ.onPlayerAttackEntity) && (FQ |= 1 << xQ.pc.Click), wQ.onPlayerChangeBlock && (FQ |= 1 << xQ.pc.ChangeBlock), wQ.onPlayerDropItem && (FQ |= 1 << xQ.pc.DropItem);
          return FQ
        }(QQ);
        (0 !== wQ || this.hooksSet) && ((0, xQ.Nf)(FQ, 0, wQ) ? this.hooksSet = 0 !== wQ : this.onError(new Error("SetHooks didn't fit the command ring")))
      }
      writeCustomButtons() {
        const QQ = this.cmd;
        QQ && !this.stopped() && this.customButtons.write(QQ)
      }
      writePromptWatch() {
        const QQ = this.cmd,
          FQ = this.promptWatch;
        FQ !== this.promptWatchSent && QQ && !this.stopped() && (0, xQ.eg)(QQ, 0, KL[FQ]) && (this.promptWatchSent = FQ)
      }
      writePublicLobby(QQ) {
        const FQ = this.cmd;
        FQ && QQ !== this.writtenPublicLobby && ((0, xQ.Uf)(FQ, 0, QQ ? 1 : 0) ? this.writtenPublicLobby = QQ : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
      }
      writeLocalDbId(QQ) {
        const FQ = this.cmd;
        FQ && ((0, xQ.Of)(FQ, 0, null === QQ ? 0 : 1, null === QQ ? NL : UL.encode(QQ)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
      }
      first(QQ) {
        const FQ = this.generation;
        for (const LQ of this.owners) {
          if (FQ !== this.generation) break;
          try {
            const FQ = QQ(LQ);
            if (void 0 !== FQ) return FQ
          } catch (wQ) {
            this.hY(wQ)
          }
        }
      }
      GA(QQ, FQ) {
        this.guard((() => {
          DQ.l.GA(QQ, FQ)
        }))
      }
      dropGameCamera() {
        try {
          this.scriptedCamera.reset()
        } catch (QQ) {
          this.hY(QQ)
        }
      }
      restartGameCamera() {
        try {
          this.scriptedCamera.restart()
        } catch (QQ) {
          this.hY(QQ)
        }
      }
      endSession() {
        if (!this.sessionLive) return;
        this.sessionLive = !1;
        const QQ = this.owners;
        let FQ;
        if (this.owners = this.tickers = this.renderers = this.receivers = [], this.generation++, !this.stopped()) try {
          this.writeAltVeto([]), this.writeHooks([]), this.writePublicLobby(!1), this.writeLocalDbId(null)
        } catch (LQ) {
          FQ = LQ
        }
        try {
          this.entityInfo.sessionEnded()
        } catch (LQ) {
          FQ ??= LQ
        }
        this.round(QQ, aL, !0);
        try {
          this.particles.sessionEnded() || this.onError(new Error("ParticleStopAll didn't fit the command ring"))
        } catch (LQ) {
          FQ ??= LQ
        }
        try {
          this.clientApi.disposeGameOutput()
        } catch (LQ) {
          FQ ??= LQ
        }
        const wQ = this.options.onSessionEnd;
        if (wQ) try {
          wQ()
        } catch (LQ) {
          this.onError(LQ)
        }
        void 0 !== FQ && this.hY(FQ)
      }
      round(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const LQ = this.generation;
        for (const oQ of QQ) {
          if (LQ !== this.generation) break;
          try {
            FQ(oQ)
          } catch (qQ) {
            wQ ? this.onError(qQ) : this.hY(qQ)
          }
        }
      }
      guard(QQ) {
        try {
          QQ()
        } catch (FQ) {
          this.hY(FQ)
        }
      }
    }

    function lL(QQ) {
      return QQ === xQ.$c ? null : String(QQ)
    }

    function jL(QQ) {
      QQ.fH(bQ.bd)
    }

    function aL(QQ) {
      var FQ;
      null === (FQ = QQ.onClose) || void 0 === FQ || FQ.call(QQ)
    }

    function XL(QQ, FQ) {
      QQ.watch((() => {
        const wQ = function(QQ) {
          const FQ = [],
            wQ = Math.min(oL, QQ.length);
          for (let qQ = 0; qQ < wQ; qQ++) {
            var LQ;
            const wQ = null === (LQ = QQ.slot(qQ)) || void 0 === LQ ? void 0 : LQ.typeObj,
              oQ = wQ ? (0, LL.gunTypeOf)(wQ.id) : void 0;
            void 0 !== oQ && FQ.push(GF[oQ])
          }
          return FQ
        }(QQ);
        wQ.length > 0 && (FQ.preload(wQ), FQ.preload([pF]))
      }))
    }
    var fL = wQ(36082),
      VL = wQ(4694),
      hL = wQ(36388),
      JL = wQ(36415);

    function EL(QQ) {
      const FQ = (0, fL.countDecodesAs)(new VL.Howl({
          ...(0, hL.e)(QQ),
          pool: 15,
          preload: !1
        }), "sheet"),
        wQ = FQ.load.bind(FQ);
      return FQ.load = () => (FQ._preload = !0, (0, JL.c)(QQ), wQ()), FQ
    }

    function nL(QQ, FQ, wQ) {
      const LQ = QQ.listener;
      if (LQ.positionX) gL(LQ.positionX, FQ, wQ, 0), gL(LQ.positionY, FQ, wQ, 1), gL(LQ.positionZ, FQ, wQ, 2), gL(LQ.forwardX, FQ, wQ, 3), gL(LQ.forwardY, FQ, wQ, 4), gL(LQ.forwardZ, FQ, wQ, 5), gL(LQ.upX, FQ, wQ, 6), gL(LQ.upY, FQ, wQ, 7), gL(LQ.upZ, FQ, wQ, 8);
      else {
        let QQ = !1;
        for (let LQ = 0; LQ < 9; LQ++) QQ ||= FQ[LQ] !== wQ[LQ];
        QQ && (LQ.setPosition(FQ[0], FQ[1], FQ[2]), LQ.setOrientation(FQ[3], FQ[4], FQ[5], FQ[6], FQ[7], FQ[8]), wQ.set(FQ))
      }
    }

    function gL(QQ, FQ, wQ, LQ) {
      FQ[LQ] !== wQ[LQ] && (QQ.value = FQ[LQ], wQ[LQ] = FQ[LQ])
    }
    class PL {
      constructor() {
        this.pose = new Float64Array(9), this.written = new Float64Array(9).fill(Number.NaN), this.watchedCtx = void 0
      }
      apply(QQ) {
        this.pose.set(QQ);
        const FQ = VL.Howler.ctx;
        return !!FQ && (FQ !== this.watchedCtx && (this.watchedCtx = FQ, this.written.fill(Number.NaN), FQ.addEventListener("statechange", (() => {
          "running" === FQ.state && nL(FQ, this.pose, this.written)
        }))), "running" === FQ.state && nL(FQ, QQ, this.written), !0)
      }
    }
    var ZL = wQ(36198),
      yL = wQ(38736);
    let BL = null,
      dL = null;

    function Qq() {
      return null === BL && (BL = document.createElement("div"), BL.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none", document.body.append(BL)), BL
    }

    function Fq() {
      return dL ??= new yL.e(new ZL.e(Qq)), dL
    }

    function wq() {
      var QQ;
      null === (QQ = dL) || void 0 === QQ || QQ.clear(), Lq(null)
    }

    function Lq(QQ) {
      LQ.c.get("scriptedCameraFacing") !== QQ && LQ.c.set({
        scriptedCameraFacing: QQ
      })
    }
    var qq = wQ(9289),
      oq = wQ(9252),
      Dq = wQ(38764),
      kq = wQ(40172),
      vq = wQ(3149);
    const mq = Object.entries(xQ.mc).reduce(((QQ, FQ) => {
      let [wQ, LQ] = FQ;
      return QQ[LQ] = wQ, QQ
    }), []);

    function uq(QQ, FQ) {
      var wQ;
      return 0 !== ((null !== (wQ = QQ.itemFlags[FQ]) && void 0 !== wQ ? wQ : 0) & xQ.Lc.Stackable)
    }
    const Hq = /^(0|[1-9][0-9]*)$/,
      bq = {
        displayName: (QQ, FQ) => (0, LL.displayNameOf)(FQ),
        description: (QQ, FQ) => (0, LL.descriptionOf)(FQ),
        type: (QQ, FQ) => (0, LL.itemTypeOf)(FQ),
        clipSize: (QQ, FQ) => (0, LL.clipSizeOf)(FQ),
        armourReduction: (QQ, FQ) => (0, LL.armourReductionOf)(FQ),
        scopeType: (QQ, FQ) => (0, LL.scopeTypeOf)(FQ),
        stackable: uq,
        harvestType: (QQ, FQ) => mq[QQ.blockHarvestTypes[FQ]],
        harvestLevel: (QQ, FQ) => {
          const wQ = QQ.blockHarvestLevels[FQ];
          return wQ === xQ.Nc ? void 0 : wQ
        },
        harvests: (QQ, FQ) => {
          var wQ;
          const LQ = null !== (wQ = QQ.itemHarvests[FQ]) && void 0 !== wQ ? wQ : 0;
          return 0 !== LQ ? mq[LQ] : void 0 === (0, LL.harvestsNullLevelOf)(FQ) ? void 0 : null
        },
        level: (QQ, FQ) => {
          var wQ, LQ;
          const qQ = null !== (wQ = QQ.itemLevels[FQ]) && void 0 !== wQ ? wQ : xQ.Nc;
          return qQ !== xQ.Nc ? qQ : null !== (LQ = (0, LL.harvestsNullLevelOf)(FQ)) && void 0 !== LQ ? LQ : void 0
        }
      };

    function Yq(QQ, FQ, wQ) {
      return Aq(new Uint8Array(Math.floor(QQ.length / FQ)), QQ, FQ, wQ)
    }

    function xq(QQ, FQ, wQ) {
      return Aq(new Uint16Array(Math.floor(QQ.length / FQ)), QQ, FQ, wQ)
    }

    function Aq(QQ, FQ, wQ, LQ) {
      const qQ = new DataView(FQ.buffer, FQ.byteOffset, FQ.byteLength);
      for (let oQ = 0; oQ < QQ.length; oQ++) QQ[oQ] = LQ(qQ, oQ * wQ);
      return QQ
    }
    class tq {
      constructor(QQ, FQ) {
        this.options = FQ, this.metas = [], this.types = new Map, this.props = void 0, this.rootIdOf = QQ => {
          const FQ = this.idOf(QQ);
          if (void 0 === FQ) throw new Error(`No item is named ${QQ}, an item's root`);
          return FQ
        };
        const wQ = FQ => {
            const wQ = FQ();
            return new Uint8Array(QQ.memory().buffer, QQ.scratch(), wQ).slice()
          },
          LQ = (new TextDecoder).decode(wQ((() => QQ.queries.itemNames()))).split("\n"),
          qQ = wQ((() => QQ.queries.blockProps())),
          oQ = wQ((() => QQ.queries.itemProps()));
        this.props = {
          blockFlags: Yq(qQ, xQ.G.BYTES, xQ.G.flags),
          blockHarvestTypes: Yq(qQ, xQ.G.BYTES, xQ.G.harvestType),
          blockHarvestLevels: Yq(qQ, xQ.G.BYTES, xQ.G.harvestLevel),
          blockAttachedTops: xq(qQ, xQ.G.BYTES, xQ.G.attachedTop),
          itemFlags: Yq(oQ, xQ.Mc.BYTES, xQ.Mc.flags),
          itemHarvests: Yq(oQ, xQ.Mc.BYTES, xQ.Mc.harvests),
          itemLevels: Yq(oQ, xQ.Mc.BYTES, xQ.Mc.level)
        }, (0, vq.g)(Object.freeze(LQ)), (0, kq.f)()
      }
      idOf(QQ) {
        if ("number" === typeof QQ) return void 0 === (0, vq.e)(QQ) ? void 0 : QQ;
        const FQ = (0, vq.c)(QQ);
        return void 0 === FQ && Hq.test(QQ) ? void 0 === (0, vq.e)(+QQ) ? void 0 : +QQ : FQ
      }
      getMetaInfo(QQ) {
        if (!QQ || QQ === qq.e) return qq.i;
        const FQ = this.idOf(QQ);
        if (void 0 === FQ) throw new Error(`Item ${QQ} not found in registry`);
        return this.metaOf(FQ)
      }
      blockRootId(QQ) {
        return 0 !== QQ && void 0 !== (0, vq.e)(QQ) ? this.metaOf(QQ).rootId : QQ
      }
      metaOf(QQ) {
        return this.metas[QQ] ??= (0, oq.j)((0, vq.e)(QQ), QQ, this.rootIdOf, (0, LL.rootMetaDescOf)(QQ))
      }
      getItemId(QQ) {
        if (!QQ || QQ === qq.e) return 0;
        const FQ = this.idOf(QQ);
        if (void 0 === FQ) throw new Error(`Invalid block name. You sent ${QQ}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
        return FQ
      }
      getItemName(QQ) {
        if (!QQ || QQ === qq.e) return qq.e;
        const FQ = this.idOf(QQ);
        if (void 0 === FQ) throw new Error(`Item ${QQ} not found in registry`);
        return (0, vq.e)(FQ)
      }
      blockNameToBlockId(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (QQ === qq.e) return 0;
        let wQ = this.idOf(QQ);
        if (void 0 === wQ || !this.isBlockId(wQ)) {
          const FQ = QQ.indexOf("|"),
            LQ = FQ > 0 ? (0, vq.c)(QQ.slice(0, FQ)) : void 0;
          wQ = void 0 !== LQ && this.isBlockId(LQ) && (0, LL.rootMetaDescOf)(LQ) === QQ ? LQ : void 0
        }
        if (void 0 !== wQ) return wQ;
        if (!FQ) throw new Error(`Invalid block name. You sent ${QQ}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
        return null
      }
      isBlockId(QQ) {
        return QQ > 0 && QQ < this.props.blockFlags.length
      }
      nameOfId(QQ) {
        return 0 !== QQ && (0, vq.e)(QQ) || qq.e
      }
      itemType(QQ) {
        const FQ = QQ ? this.idOf(QQ) : void 0;
        if (!FQ) return null;
        let wQ = this.types.get(FQ);
        return void 0 === wQ && (wQ = Object.freeze({
          id: FQ,
          name: (0, vq.e)(FQ),
          meta: this.getMetaInfo(FQ),
          stackable: uq(this.props, FQ),
          type: (0, LL.itemTypeNameOf)(FQ),
          clipSize: (0, LL.clipSizeOf)(FQ),
          scopeType: (0, LL.scopeTypeOf)(FQ),
          showsAimingUi: (0, LL.showsAimingUi)(FQ)
        }), this.types.set(FQ, wQ)), wQ
      }
      getItemStat(QQ, FQ) {
        if (Dq.e.has(FQ)) {
          const wQ = "minChargeStateToUse" === FQ ? this.getMetaInfo(QQ).rootName : this.getItemName(QQ),
            LQ = this.options.get((0, Dq.i)(wQ, FQ));
          if (null !== LQ && void 0 !== LQ) return LQ
        }
        return this.defaultStat(QQ, FQ, this.statOf(FQ))
      }
      getDisplayName(QQ) {
        return this.getItemStat(QQ, "displayName")
      }
      getDefaultItemStat(QQ, FQ) {
        return this.defaultStat(QQ, FQ, this.statOf(FQ))
      }
      statOf(QQ) {
        const FQ = bq[QQ];
        return void 0 === FQ && function(QQ, FQ) {
          throw new Error(`ClientApi.${QQ} is not available yet in the wasm client (${FQ})`)
        }(`getItemStat("${QQ}")`, `a table of the stat: the wasm client answers ${Object.keys(bq).join(", ")}`), FQ
      }
      defaultStat(QQ, FQ, wQ) {
        const LQ = this.idOf(QQ),
          qQ = void 0 === LQ ? void 0 : wQ(this.props, LQ);
        return null !== qQ && void 0 !== qQ || "displayName" !== FQ ? qQ : this.getItemName(QQ)
      }
      getClientOption(QQ) {
        return this.options.get(QQ)
      }
      getGunStats(QQ) {
        return this.getClientOption(`${QQ}GunStats`)
      }
      watchClientOption(QQ, FQ) {
        return this.options.subscribe(QQ, FQ)
      }
      isSolidBlockId(QQ) {
        var FQ;
        return 0 !== ((null !== (FQ = this.props.blockFlags[QQ]) && void 0 !== FQ ? FQ : 0) & xQ.C.Solid)
      }
      isStackableId(QQ) {
        return uq(this.props, QQ)
      }
      isFluidBlockId(QQ) {
        var FQ;
        return 0 !== ((null !== (FQ = this.props.blockFlags[QQ]) && void 0 !== FQ ? FQ : 0) & xQ.C.Fluid)
      }
      canPlaceOverBlockId(QQ) {
        var FQ;
        return 0 !== ((null !== (FQ = this.props.blockFlags[QQ]) && void 0 !== FQ ? FQ : 0) & xQ.C.PlaceOver)
      }
      attachedTopOf(QQ) {
        var FQ;
        return null !== (FQ = this.props.blockAttachedTops[QQ]) && void 0 !== FQ ? FQ : 0
      }
      isDroplessBlockId(QQ) {
        return (0, LL.dropsNothing)(QQ)
      }
    }

    function eq(QQ, FQ) {
      const wQ = new Map;
      return (LQ, qQ) => {
        const oQ = FQ.idOf(LQ),
          DQ = void 0 === oQ ? null : (LQ => {
            let qQ = wQ.get(LQ);
            if (void 0 === qQ) {
              const oQ = QQ.queries.salvageRecipe(LQ),
                DQ = new DataView(QQ.memory().buffer, QQ.scratch(), oQ),
                kQ = [];
              for (let QQ = 0; QQ + xQ.Rd.BYTES <= oQ; QQ += xQ.Rd.BYTES) kQ.push(Object.freeze({
                item: FQ.nameOfId(xQ.Rd.item(DQ, QQ)),
                amt: xQ.Rd.amount(DQ, QQ)
              }));
              qQ = 0 === kQ.length ? null : Object.freeze(kQ), wQ.set(LQ, qQ)
            }
            return qQ
          })(oQ);
        if (null === DQ || void 0 === qQ) return DQ;
        const kQ = qQ <= 0 ? 1 : qQ;
        return DQ.map((QQ => {
          let {
            item: FQ,
            amt: wQ
          } = QQ;
          return {
            item: FQ,
            amt: wQ * kQ
          }
        }))
      }
    }
    var Mq = wQ(40338),
      Gq = wQ(36577),
      pq = wQ(36568),
      cq = wQ(36605),
      Cq = wQ(36128),
      Sq = wQ(40108),
      iq = wQ(41962);
    const Wq = -1,
      Rq = new Uint8Array(0),
      Oq = new TextEncoder;

    function sq(QQ) {
      if (null === QQ) return null;
      const FQ = Oq.encode(QQ);
      return FQ.byteLength < bQ.sc ? FQ : FQ.subarray(0, bQ.sc - 1)
    }
    class rq {
      constructor(QQ) {
        this.deps = QQ, this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = Wq, this.keyframesSettled = !1, this.reloadFrom = Wq
      }
      reloadKeyframes() {
        var QQ, FQ;
        this.keyframesVersion = Wq, this.reloadFrom = null !== (QQ = null === (FQ = this.view()) || void 0 === FQ ? void 0 : FQ.version) && void 0 !== QQ ? QQ : Wq
      }
      setPlayback(QQ) {
        const FQ = 1 === this.deps.core.PqQ(QQ);
        return FQ && (this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = Wq, this.reloadFrom = Wq), FQ
      }
      async open(QQ) {
        const FQ = await this.deps.replay.open(QQ);
        return "opening" === FQ && (this.reloadKeyframes(), this.deps.recorder.prefetch()), FQ
      }
      play() {
        this.deps.replay.play()
      }
      pause() {
        this.deps.replay.pause()
      }
      seek(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.deps.replay.seek(Math.max(0, Math.floor(QQ)), FQ)
      }
      setSpeed(QQ) {
        this.deps.replay.setSpeed(QQ)
      }
      setCameraMode(QQ) {
        this.deps.replay.setCameraMode(iq.c.indexOf(QQ))
      }
      view() {
        var QQ;
        const FQ = xQ.v.replayViewPtr(this.deps.apiView(), 0);
        if (0 === FQ) return this.lastView = null, null;
        const wQ = new DataView(this.deps.buffer(), FQ, xQ.Ld.BYTES),
          LQ = xQ.Ld.version(wQ, 0),
          qQ = this.lastView;
        if (null !== qQ && qQ.version === LQ) return qQ;
        const oQ = xQ.Ld.markIn(wQ, 0),
          DQ = {
            version: LQ,
            state: xQ.Ld.state(wQ, 0),
            cameraMode: null !== (QQ = iq.c[xQ.Ld.cameraMode(wQ, 0)]) && void 0 !== QQ ? QQ : "recording",
            fH: xQ.Ld.fH(wQ, 0),
            totalTicks: xQ.Ld.totalTicks(wQ, 0),
            speed: xQ.Ld.speed(wQ, 0),
            mark: oQ === xQ.Id ? null : {
              inTick: oQ,
              outTick: xQ.Ld.markOut(wQ, 0)
            },
            editVersion: xQ.Ld.editVersion(wQ, 0)
          };
        return this.lastView = DQ, DQ
      }
      keyframes() {
        const QQ = this.view();
        if (null === QQ) return [];
        QQ.version !== this.reloadFrom && (this.reloadFrom = Wq);
        const FQ = this.reloadFrom === Wq && QQ.state !== bQ.Uc.Cropping && QQ.state !== bQ.Uc.None,
          wQ = FQ ? QQ.editVersion : QQ.version;
        if (wQ === this.keyframesVersion && FQ === this.keyframesSettled) return this.lastKeyframes;
        const {
          core: LQ
        } = this.deps, qQ = LQ.ZqQ(), oQ = LQ.Nt(), DQ = [];
        if (0 !== oQ && qQ > 0) {
          const QQ = new DataView(this.deps.buffer(), oQ, qQ * bQ.fc);
          for (let FQ = 0; FQ < qQ; FQ++) {
            const wQ = FQ * bQ.fc,
              LQ = FQ => QQ.getFloat64(wQ + FQ, !0);
            DQ.push({
              fH: QQ.getUint32(wQ + bQ.oc, !0),
              position: [LQ(bQ.mc), LQ(bQ.mc + 8), LQ(bQ.mc + 16)],
              direction: [LQ(bQ.hc), LQ(bQ.hc + 8), LQ(bQ.hc + 16)],
              easing: [LQ(bQ.jc), LQ(bQ.jc + 8), LQ(bQ.jc + 16), LQ(bQ.jc + 24)]
            })
          }
        }
        return this.keyframesVersion = wQ, this.keyframesSettled = FQ, this.lastKeyframes = DQ, DQ
      }
      addKeyframe() {
        const QQ = this.deps.apiView(),
          FQ = [xQ.v.eye(QQ, 0, 0), xQ.v.eye(QQ, 0, 1), xQ.v.eye(QQ, 0, 2)];
        return this.deps.replay.addKeyframe(FQ, function(QQ, FQ) {
          const wQ = Math.cos(FQ);
          return [wQ * Math.sin(QQ), -Math.sin(FQ), wQ * Math.cos(QQ)]
        }(xQ.v.heading(QQ, 0), xQ.v.pitch(QQ, 0)))
      }
      setKeyframe(QQ) {
        return this.deps.replay.setKeyframe(QQ.fH, Float64Array.from([...QQ.position, ...QQ.direction, ...QQ.easing]))
      }
      moveKeyframe(QQ, FQ) {
        return this.deps.replay.moveKeyframe(QQ, FQ)
      }
      deleteKeyframes(QQ, FQ) {
        return this.deps.replay.deleteKeyframes(QQ, FQ)
      }
      setMark(QQ) {
        var FQ, wQ;
        return this.deps.replay.setMark(null !== (FQ = null === QQ || void 0 === QQ ? void 0 : QQ.inTick) && void 0 !== FQ ? FQ : -1, null !== (wQ = null === QQ || void 0 === QQ ? void 0 : QQ.outTick) && void 0 !== wQ ? wQ : -1)
      }
      crop(QQ, FQ) {
        const wQ = this.deps.replay.crop(QQ, FQ);
        return wQ && this.reloadKeyframes(), wQ
      }
      save(QQ) {
        return this.deps.replay.askSave(), this.deps.recorder.saveEdited(QQ)
      }
      recorderControl(QQ) {
        this.deps.recorder.control(QQ)
      }
      recorderPrefs(QQ, FQ) {
        this.deps.recorder.prefs(QQ, FQ)
      }
      recorderOption(QQ, FQ) {
        const wQ = this.deps.cmd();
        return null !== wQ && (0, xQ.rf)(wQ, 0, QQ, null === FQ ? Rq : Oq.encode(FQ))
      }
      recordFlyingText(QQ, FQ, wQ, LQ) {
        const qQ = this.deps.cmd(),
          oQ = Math.max(0, Math.min(4294967295, Math.round(LQ)));
        return null !== qQ && (0, xQ.lf)(qQ, 0, FQ, wQ, oQ, Oq.encode(QQ))
      }
      recordPlayerKilled(QQ, FQ, wQ, LQ) {
        const qQ = this.deps.cmd();
        return null !== qQ && (0, xQ.uf)(qQ, 0, QQ, FQ, Math.max(0, wQ), Oq.encode(LQ))
      }
      recordKillfeed(QQ, FQ, wQ) {
        var LQ, qQ;
        const oQ = this.deps.cmd(),
          DQ = function(QQ) {
            const FQ = QQ.reduce(((QQ, FQ) => {
                var wQ;
                return QQ + gw.wb + (null !== (wQ = null === FQ || void 0 === FQ ? void 0 : FQ.byteLength) && void 0 !== wQ ? wQ : 0)
              }), 0),
              wQ = new Uint8Array(FQ),
              LQ = new DataView(wQ.buffer);
            let qQ = 0;
            for (const DQ of QQ) {
              var oQ;
              LQ.setUint16(qQ, null !== (oQ = null === DQ || void 0 === DQ ? void 0 : DQ.byteLength) && void 0 !== oQ ? oQ : bQ.sc, !0), qQ += gw.wb, null !== DQ && (wQ.set(DQ, qQ), qQ += DQ.byteLength)
            }
            return wQ
          }([sq(QQ.name), sq(QQ.colour), sq(FQ.name), sq(FQ.colour), sq(wQ)]);
        return null !== oQ && (0, xQ.of)(oQ, 0, null !== (LQ = QQ.id) && void 0 !== LQ ? LQ : xQ.ad, null !== (qQ = FQ.id) && void 0 !== qQ ? qQ : xQ.ad, DQ)
      }
      recorderSession(QQ, FQ) {
        this.deps.recorder.session({
          session: FQ,
          lobbyType: QQ.lobbyType,
          game: QQ.gameNameWithVariation,
          lobby: QQ.lobbyName
        })
      }
      recorderClose() {
        this.deps.core.yqQ()
      }
      filePartDone(QQ, FQ) {
        this.deps.recorder.filePartDone(QQ, FQ)
      }
      fileDone(QQ) {
        this.deps.recorder.fileDone(QQ)
      }
    }
    const Iq = -2147483648;
    class Uq {
      constructor(QQ) {
        var FQ;
        this.deps = QQ, this.state = {
          recording: !1,
          clipping: !1,
          hasClipBuffer: !1,
          seconds: 0
        }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (FQ = QQ.now) && void 0 !== FQ ? FQ : () => performance.now()
      }
      get current() {
        return this.state
      }
      get live() {
        var QQ, FQ, wQ;
        return null === (QQ = null === (FQ = (wQ = this.deps).live) || void 0 === FQ ? void 0 : FQ.call(wQ)) || void 0 === QQ || QQ
      }
      activated(QQ) {
        var FQ, wQ;
        this.live && (this.viewerShown(!0 === (null === (FQ = (wQ = this.deps).viewerOpen) || void 0 === FQ ? void 0 : FQ.call(wQ))), this.deps.client.recorderSession(QQ, (0, iq.d)()))
      }
      closed() {
        this.deps.client.recorderClose()
      }
      toggleRecording() {
        var QQ, FQ;
        this.live && (this.state.recording || !0 !== (null === (QQ = (FQ = this.deps).viewerOpen) || void 0 === QQ ? void 0 : QQ.call(FQ))) ? this.deps.client.recorderControl(bQ.Gc.ToggleRecording) : this.deps.notify(cq.c.closeViewerFirst)
      }
      saveClip() {
        this.live ? this.deps.client.recorderControl(bQ.Gc.SaveClip) : this.deps.notify(cq.c.clippingNotOn)
      }
      viewerShown(QQ) {
        this.live && this.deps.client.recorderControl(QQ ? bQ.Gc.ViewerOpened : bQ.Gc.ViewerClosed)
      }
      setPrefs(QQ, FQ) {
        this.live && this.deps.client.recorderPrefs(QQ, FQ)
      }
      setOption(QQ, FQ) {
        this.live && this.deps.client.recorderOption(QQ, FQ)
      }
      recordFlyingText(QQ, FQ, wQ, LQ) {
        this.live && this.deps.client.recordFlyingText(QQ, FQ, wQ, LQ)
      }
      recordPlayerKilled(QQ, FQ, wQ, LQ) {
        this.live && this.deps.client.recordPlayerKilled(QQ, FQ, wQ, LQ)
      }
      recordKillfeed(QQ, FQ, wQ) {
        this.live && this.deps.client.recordKillfeed(QQ, FQ, wQ)
      }
      fH() {
        let QQ = this.state;
        if (this.clipTickPending && (this.clipTickPending = !1, QQ = {
            ...QQ,
            hasClipBuffer: !0
          }), null !== this.recordingSince) {
          const FQ = Math.floor((this.now() - this.recordingSince) / 1e3);
          FQ !== QQ.seconds && (QQ = {
            ...QQ,
            seconds: FQ
          })
        }
        this.set(QQ)
      }
      onEvent(QQ) {
        var FQ, wQ;
        const {
          notify: LQ
        } = this.deps, qQ = cq.c;
        switch (QQ.what) {
          case bQ.Cc.RecordingStarted:
            this.recordingSince = this.now(), this.set({
              ...this.state,
              recording: !0,
              seconds: 0
            }), LQ(qQ.recordingStarted);
            break;
          case bQ.Cc.RecordingStopped:
            this.stopRecording(), LQ(qQ.recordingStopped), this.saveState(bQ.Pc.Recording, "saving");
            break;
          case bQ.Cc.RecordingDiscarded:
            this.stopRecording(), LQ(qQ.recordingDiscarded);
            break;
          case bQ.Cc.RecordingTurnedOff:
            this.stopRecording(), LQ(qQ.recordingTurnedOff);
            break;
          case bQ.Cc.LimitReached:
            LQ(qQ.limitReached);
            break;
          case bQ.Cc.ClipSaved:
            this.saveState(bQ.Pc.Clip, "saving");
            break;
          case bQ.Cc.ClipEmpty:
            LQ(qQ.clipEmpty);
            break;
          case bQ.Cc.ClippingNotOn:
            LQ(qQ.clippingNotOn);
            break;
          case bQ.Cc.Disallowed:
            LQ(qQ.disallowed);
            break;
          case bQ.Cc.ClippingOn:
            this.clipTickPending = !0, this.set({
              ...this.state,
              clipping: !0,
              hasClipBuffer: !1
            });
            break;
          case bQ.Cc.ClippingOff:
            this.clipTickPending = !1, this.set({
              ...this.state,
              clipping: !1,
              hasClipBuffer: !1
            });
            break;
          case bQ.Cc.ClipSettingsChanged:
            this.clipTickPending = this.state.clipping, this.set({
              ...this.state,
              hasClipBuffer: !1
            });
            break;
          case bQ.Cc.SaveBusy:
            null === (FQ = (wQ = this.deps).onSaveState) || void 0 === FQ || FQ.call(wQ, QQ.kind, "busy"), LQ(qQ.saveBusy);
            break;
          case bQ.Cc.CloseViewerFirst:
            LQ(qQ.closeViewerFirst)
        }
      }
      fileReady(QQ, FQ) {
        this.deps.download(FQ), this.saveState(QQ, "done"), this.deps.notify(QQ === bQ.Pc.Clip ? cq.c.clipSaved : cq.c.recordingSaved)
      }
      failed(QQ) {
        this.saveState(QQ, "failed"), this.deps.notify(QQ === bQ.Pc.Clip ? cq.c.clipFailed : cq.c.recordingFailed)
      }
      stopRecording() {
        this.recordingSince = null, this.set({
          ...this.state,
          recording: !1,
          seconds: 0
        })
      }
      saveState(QQ, FQ) {
        var wQ, LQ;
        null === (wQ = (LQ = this.deps).onSaveState) || void 0 === wQ || wQ.call(LQ, QQ, FQ)
      }
      set(QQ) {
        QQ !== this.state && (this.state = QQ, this.deps.onState(QQ))
      }
    }
    const Nq = new TextDecoder;

    function Tq(QQ, FQ, wQ, LQ) {
      const qQ = [];
      for (let oQ = 0; oQ < LQ; oQ++) {
        if (FQ + gw.wb > wQ) return null;
        const LQ = QQ.getUint16(FQ, !0);
        if (FQ += gw.wb, LQ !== bQ.sc) {
          if (FQ + LQ > wQ) return null;
          qQ.push(Nq.decode(new Uint8Array(QQ.buffer, QQ.byteOffset + FQ, LQ))), FQ += LQ
        } else qQ.push(null)
      }
      return FQ === wQ ? qQ : null
    }

    function Kq(QQ, FQ) {
      let wQ = new DataView(new ArrayBuffer(0)),
        LQ = !0;
      const qQ = {
        replayFailed: (FQ, wQ) => {
          QQ.replayFailed({
            reason: FQ,
            code: wQ
          })
        },
        replayOption: (FQ, qQ, oQ, DQ) => {
          const kQ = function(QQ, FQ, wQ, LQ) {
            switch (FQ) {
              case bQ.Qc.Cleared:
                return 0 === LQ ? null : void 0;
              case bQ.Qc.Text:
                return Nq.decode(new Uint8Array(QQ.buffer, QQ.byteOffset + wQ, LQ));
              case bQ.Qc.Int:
                return LQ === Int32Array.BYTES_PER_ELEMENT ? QQ.getInt32(wQ, !0) : void 0;
              case bQ.Qc.Double:
                return LQ === Float64Array.BYTES_PER_ELEMENT ? QQ.getFloat64(wQ, !0) : void 0;
              default:
                return
            }
          }(wQ, qQ, oQ, DQ);
          void 0 !== kQ ? QQ.replayOption({
            key: FQ,
            value: kQ
          }) : LQ = !1
        },
        replayUiEvent: (FQ, qQ, oQ, DQ, kQ, vQ) => {
          const mQ = function(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
            const kQ = oQ + DQ;
            switch (FQ) {
              case bQ.Sc.FlyingText: {
                const DQ = Tq(QQ, oQ, kQ, 1);
                return null !== DQ && null !== DQ[0] ? {
                  what: FQ,
                  Ow: wQ,
                  Rw: LQ,
                  angle: qQ,
                  contentJson: DQ[0]
                } : null
              }
              case bQ.Sc.PlayerKilled: {
                const LQ = Tq(QQ, oQ, kQ, 3);
                return LQ ? {
                  what: FQ,
                  killstreak: wQ,
                  dead: LQ[0],
                  killer: LQ[1],
                  withItem: LQ[2]
                } : null
              }
              case bQ.Sc.Killfeed: {
                const wQ = Tq(QQ, oQ, kQ, 7);
                return wQ ? {
                  what: FQ,
                  killerId: wQ[0],
                  killerName: wQ[1],
                  killerColour: wQ[2],
                  victimId: wQ[3],
                  victimName: wQ[4],
                  victimColour: wQ[5],
                  withItem: wQ[6]
                } : null
              }
              default:
                return null
            }
          }(wQ, FQ, qQ, oQ, DQ, kQ, vQ);
          null !== mQ ? QQ.replayUiEvent(mQ) : LQ = !1
        },
        replayFilePart: (wQ, qQ, oQ, DQ) => {
          const kQ = FQ();
          oQ + DQ > kQ.byteLength ? LQ = !1 : QQ.filePart(wQ, qQ, new Uint8Array(kQ, oQ, DQ).slice())
        },
        replayFileReady: (FQ, wQ, LQ, qQ) => {
          QQ.fileReady({
            save: FQ,
            kind: wQ,
            parts: LQ,
            bytes: qQ
          })
        },
        recorderEvent: (FQ, wQ, LQ) => {
          QQ.recorderEvent({
            what: FQ,
            kind: wQ,
            save: LQ
          })
        },
        replayOpened: (FQ, LQ, qQ) => {
          QQ.replayOpened(Nq.decode(new Uint8Array(wQ.buffer, wQ.byteOffset + LQ, qQ)))
        }
      };
      return (QQ, FQ, oQ, DQ) => !(QQ < bQ.O.ReplayFailed || QQ > bQ.O.RecorderEvent) && (wQ = FQ, LQ = !0, (0, xQ.ge)(QQ, FQ, oQ, DQ, qQ) && LQ)
    }

    function zq(QQ) {
      let FQ = null;
      const wQ = Kq(QQ, (() => {
        if (null === FQ) throw new Error("a recorder event read outside recorderEventReader's call");
        return FQ.buffer
      }));
      return (QQ, LQ) => {
        FQ = LQ;
        try {
          ! function(QQ, FQ) {
            const wQ = QQ.slice(),
              LQ = new DataView(wQ.buffer);
            for (let qQ = 0; qQ < wQ.byteLength;) {
              if (qQ + bQ.L > wQ.byteLength) throw new Error(`the recorder module's events end mid-head at ${qQ}`);
              const QQ = LQ.getUint32(qQ, !0),
                oQ = 65535 & QQ,
                DQ = QQ >>> 16,
                kQ = qQ + bQ.L;
              if (kQ + DQ > wQ.byteLength || !FQ(oQ, LQ, kQ, DQ)) throw new Error(`the recorder module wrote a malformed event ${oQ} (${DQ} bytes) at ${qQ}`);
              qQ = kQ + (0, bQ.Yd)(DQ)
            }
          }(QQ, wQ)
        } finally {
          FQ = null
        }
      }
    }
    class lq {
      constructor(QQ, FQ) {
        this.acks = QQ, this.handlers = FQ, this.parts = new Map
      }
      onPart(QQ, FQ, wQ) {
        let LQ = this.parts.get(QQ);
        LQ || (LQ = [], this.parts.set(QQ, LQ)), LQ[FQ] = wQ, this.acks.filePartDone(QQ, FQ)
      }
      onReady(QQ) {
        var FQ;
        const wQ = null !== (FQ = this.parts.get(QQ.save)) && void 0 !== FQ ? FQ : [];
        this.parts.delete(QQ.save);
        const LQ = function(QQ, FQ, wQ) {
          if (QQ.length !== FQ) return null;
          let LQ = 0;
          for (let DQ = 0; DQ < FQ; DQ++) {
            if (void 0 === QQ[DQ]) return null;
            LQ += QQ[DQ].byteLength
          }
          if (LQ !== wQ) return null;
          if (1 === FQ) return QQ[0];
          const qQ = new Uint8Array(wQ);
          let oQ = 0;
          for (const DQ of QQ) qQ.set(DQ, oQ), oQ += DQ.byteLength;
          return qQ
        }(wQ, QQ.parts, QQ.bytes);
        this.acks.fileDone(QQ.save), null === LQ ? this.handlers.fileIncomplete(QQ.save, QQ.kind) : this.handlers.fileReady(QQ.save, QQ.kind, LQ)
      }
      onDiscarded(QQ) {
        this.parts.delete(QQ)
      }
    }

    function jq() {
      return wQ.e(58).then((() => wQ(41999)))
    }
    class aq {
      constructor(QQ) {
        this.deps = QQ, this.sink = void 0, this.recorder = void 0, this.recorderEvents = void 0, this.parts = void 0, this.viewerChunk = null, this.viewer = null;
        const {
          client: FQ
        } = QQ;
        this.recorder = new Uq({
          client: FQ,
          live: () => {
            var QQ;
            return !0 !== (null === (QQ = this.viewer) || void 0 === QQ ? void 0 : QQ.inPlayback)
          },
          viewerOpen: QQ.viewerOpen,
          notify: QQ.notify,
          download: FQ => {
            var wQ;
            null === (wQ = QQ.download) || void 0 === wQ || wQ.call(QQ, FQ)
          },
          onState: QQ.onRecorderState,
          onSaveState: QQ.onSaveState
        }), this.parts = new lq(FQ, {
          fileReady: (QQ, FQ, wQ) => {
            var LQ;
            FQ === bQ.Pc.Edited ? null === (LQ = this.viewer) || void 0 === LQ || LQ.saveDone(wQ) : this.recorder.fileReady(FQ, wQ)
          },
          fileIncomplete: (QQ, FQ) => {
            this.saveFailed(FQ)
          }
        });
        const wQ = {
          replayFailed: QQ => {
            var FQ;
            null === (FQ = this.viewer) || void 0 === FQ || FQ.onFailed(QQ)
          },
          replayOption: FQ => {
            var wQ;
            null === (wQ = QQ.onReplayOption) || void 0 === wQ || wQ.call(QQ, FQ)
          },
          replayUiEvent: FQ => {
            var wQ;
            null === (wQ = QQ.onReplayUiEvent) || void 0 === wQ || wQ.call(QQ, FQ)
          },
          filePart: (QQ, FQ, wQ) => {
            this.parts.onPart(QQ, FQ, wQ)
          },
          fileReady: QQ => {
            this.parts.onReady(QQ)
          },
          replayOpened: FQ => {
            var wQ;
            null === (wQ = QQ.onReplayOpened) || void 0 === wQ || wQ.call(QQ, FQ)
          },
          recorderEvent: QQ => {
            var FQ;
            switch (QQ.what) {
              case bQ.Cc.FileDiscarded:
                this.parts.onDiscarded(QQ.save);
                break;
              case bQ.Cc.SaveFailed:
                this.saveFailed(QQ.kind);
                break;
              case bQ.Cc.SaveBusy:
                if (null !== (FQ = this.viewer) && void 0 !== FQ && FQ.savePending) {
                  this.viewer.saveFailed(!0);
                  break
                }
                this.recorder.onEvent(QQ);
                break;
              default:
                this.recorder.onEvent(QQ)
            }
          }
        };
        this.sink = function(QQ, FQ) {
          return {
            onReplayEvent: Kq(QQ, FQ)
          }
        }(wQ, QQ.buffer), this.recorderEvents = zq(wQ)
      }
      get currentViewer() {
        return this.viewer
      }
      loadViewer() {
        var QQ;
        return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (QQ = this.deps.loadViewer) && void 0 !== QQ ? QQ : jq)().catch((QQ => {
          throw this.viewerChunk = null, QQ
        })), this.viewerChunk.then((QQ => (this.viewer ??= new QQ.ReplayViewer({
          client: this.deps.client,
          setHoldDraws: this.deps.setHoldDraws,
          meshPending: this.deps.meshPending,
          notify: this.deps.notify,
          onChange: () => {
            var QQ, FQ;
            null === (QQ = (FQ = this.deps).onViewerChange) || void 0 === QQ || QQ.call(FQ)
          }
        }), this.viewer))))
      }
      activated(QQ) {
        this.recorder.activated(QQ)
      }
      afterFrame(QQ) {
        try {
          QQ > 0 && this.recorder.fH()
        } finally {
          var FQ;
          null === (FQ = this.viewer) || void 0 === FQ || FQ.afterFrame()
        }
      }
      end() {
        var QQ;
        null === (QQ = this.viewer) || void 0 === QQ || QQ.end()
      }
      saveFailed(QQ) {
        var FQ;
        QQ === bQ.Pc.Edited ? null === (FQ = this.viewer) || void 0 === FQ || FQ.saveFailed(!1) : this.recorder.failed(QQ)
      }
    }
    var Xq = wQ(40040),
      fq = wQ(40056),
      Vq = wQ(4642),
      hq = wQ(40418);
    class Jq {
      constructor(QQ) {
        this.deps = QQ, this.analogue = [0, 0], this.keys = 0, this.unsent = !1
      }
      drag(QQ, FQ) {
        if (!this.deps.live() || 0 === QQ && 0 === FQ) return;
        const wQ = (0, lQ.t)(0, performance.now()),
          LQ = this.deps.dragScale();
        (0, hq.i)((() => {
          (0, lQ.w)(bQ.fb.MouseDown, 0, 0, 0, wQ), (0, lQ.w)(bQ.fb.MouseMove, 0, QQ * LQ, FQ * LQ, 0), (0, lQ.w)(bQ.fb.MouseUp, 0, 0, 0, wQ)
        }))
      }
      move(QQ) {
        var FQ, wQ;
        this.analogue[0] = null !== (FQ = null === QQ || void 0 === QQ ? void 0 : QQ.x) && void 0 !== FQ ? FQ : 0, this.analogue[1] = null !== (wQ = null === QQ || void 0 === QQ ? void 0 : QQ.y) && void 0 !== wQ ? wQ : 0, this.send()
      }
      holdVertical(QQ, FQ) {
        const wQ = "freeCamUp" === QQ ? xQ.cc.Up : xQ.cc.Down;
        this.keys = FQ ? this.keys | wQ : this.keys & ~wQ, this.send()
      }
      flush() {
        this.unsent && this.send()
      }
      send() {
        const QQ = this.deps.live() ? this.deps.cmd() : null;
        this.unsent = null !== QQ && !(0, xQ.we)(QQ, 0, this.analogue, this.keys)
      }
    }
    var Eq = wQ(714),
      nq = wQ(291),
      gq = wQ(96),
      Pq = wQ(9004);

    function Zq() {
      const QQ = LQ.c.get("clientEscMenuOptions"),
        FQ = (0, Eq.p)(QQ);
      return {
        mouse: (0, gq.isMobile)() ? FQ : QQ.mouseSensitivity,
        touch: FQ,
        fovPercent: QQ.cameraFOV
      }
    }

    function yq() {
      const QQ = LQ.c.get("clientEscMenuOptions"),
        FQ = LQ.c.get("isTouchScreen") ? (0, Eq.p)(QQ) : QQ.mouseSensitivity,
        wQ = Zq().mouse;
      return wQ > 0 ? FQ / wQ : 1
    }

    function Bq(QQ) {
      const FQ = () => {
        QQ.setSoundPrefs(LQ.c.get("soundVolume"), LQ.c.get("soundOnFromAd"))
      };
      let wQ = null;
      const qQ = () => {
        const {
          showFog: FQ,
          enableLighting: qQ,
          fogChunkDistance: oQ,
          chunkFadeIn: DQ
        } = LQ.c.get("clientEscMenuOptions"), kQ = {
          showFog: FQ,
          lighting: qQ,
          fogChunks: oQ,
          chunkFade: DQ
        };
        wQ && (0, bQ.Hd)(wQ) === (0, bQ.Hd)(kQ) && wQ.fogChunks === oQ || (wQ = kQ, QQ.setEnvPrefs(wQ))
      };
      let oQ = null;
      const kQ = () => {
        const FQ = function() {
          const QQ = LQ.c.get("clientEscMenuOptions");
          return {
            nametagsHidden: LQ.c.get("areNametagsHidden"),
            crouchToggle: QQ.crouchIsToggle,
            bhopDisabled: QQ.disableBunnyHopping,
            disableBobbing: QQ.disableBobbing,
            ezTowering: QQ.ezTowering && (0, nq.g)(),
            ezBridging: QQ.ezBridging,
            showChunkBorders: QQ.showChunkBorders,
            nametagCutDistance: (0, Pq.g)()
          }
        }();
        (0, RQ.oe)(oQ, FQ) || (oQ = FQ, QQ.setUiPrefs(FQ))
      };
      let vQ = null;
      const mQ = () => {
        const FQ = Zq();
        (0, RQ.oe)(vQ, FQ) || (vQ = FQ, QQ.setLookPrefs(FQ))
      };
      FQ(), qQ(), kQ(), mQ();
      const uQ = [(0, DQ.o)("appManagerUpdated|soundVolume", FQ), (0, DQ.o)("appManagerUpdated|soundOnFromAd", FQ), (0, DQ.o)("appManagerUpdated|clientEscMenuOptions", (() => {
        qQ(), kQ(), mQ()
      })), (0, DQ.o)("appManagerUpdated|areNametagsHidden", kQ), (0, DQ.o)("appManagerUpdated|showDistantNametags", kQ)];
      return () => {
        for (const QQ of uQ) QQ()
      }
    }
    var dq = wQ(40351),
      Qo = wQ(40360);
    var Fo = (0, Qo.c)("lend"),
      wo = (0, Qo.c)("starting"),
      Lo = (0, Qo.c)("generation"),
      qo = (0, Qo.c)("end");
    class oo {
      constructor(QQ) {
        this.deps = QQ, Object.defineProperty(this, qo, {
          value: Do
        }), Object.defineProperty(this, Fo, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, wo, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Lo, {
          writable: !0,
          value: 0
        })
      }
      get active() {
        return null !== (0, dq.e)(this, Fo)[Fo] || (0, dq.e)(this, wo)[wo]
      }
      async start(QQ) {
        if (this.active) return "busy";
        const FQ = (0, dq.e)(this, Lo)[Lo];
        (0, dq.e)(this, wo)[wo] = !0;
        try {
          if (!await this.deps.ensureLoaded()) return "refused"
        } finally {
          (0, dq.e)(this, wo)[wo] = !1
        }
        if (FQ !== (0, dq.e)(this, Lo)[Lo]) return "refused";
        const wQ = this.deps.beginSave();
        if (!wQ) return "refused";
        const LQ = Number(BigInt.asUintN(32, QQ)),
          qQ = Number(BigInt.asUintN(32, QQ >> 32n));
        let oQ = "refused";
        return this.deps.recorderCall(((QQ, FQ) => {
          const DQ = wQ.editState,
            kQ = QQ.stage(DQ.length);
          0 !== kQ ? (new Uint8Array(FQ.buffer, kQ, DQ.length).set(DQ), QQ.BqQ(wQ.headLen, LQ, qQ) && (oQ = "sealing")) : oQ = "tooLarge"
        }), !0), "sealing" !== oQ ? (wQ.end(), oQ) : ((0, dq.e)(this, Fo)[Fo] = wQ, "sealing")
      }
      beforeRecorderStep() {
        const QQ = (0, dq.e)(this, Fo)[Fo];
        if (!QQ) return null;
        let FQ = -1,
          wQ = 0;
        if (!this.deps.recorderCall((QQ => {
            FQ = QQ.dqQ(), FQ > 0 && (wQ = QQ.QoQ())
          }))) return (0, dq.e)(this, qo)[qo](QQ, "stopped");
        if (FQ < 0) return (0, dq.e)(this, qo)[qo](QQ, "read");
        if (0 === FQ) return null;
        const LQ = QQ.head(wQ, FQ);
        let qQ = !1;
        if (LQ && this.deps.recorderCall(((QQ, wQ) => {
            const oQ = QQ.stage(FQ);
            0 !== oQ && (new Uint8Array(wQ.buffer, oQ, FQ).set(LQ), qQ = !0)
          }), !0), qQ) return null;
        const oQ = QQ.givenUp();
        this.deps.recorderCall((QQ => {
          QQ.FoQ()
        }));
        const DQ = (0, dq.e)(this, qo)[qo](QQ, oQ ? "givenUp" : "stopped");
        return oQ && this.deps.givenUp("Reopen the replay you were editing to make your edits again, as they weren't saved when another replay opened."), DQ
      }
      stop() {
        (0, dq.e)(this, Lo)[Lo]++;
        const QQ = (0, dq.e)(this, Fo)[Fo];
        QQ && (this.deps.recorderCall((QQ => {
          QQ.FoQ()
        })), (0, dq.e)(this, qo)[qo](QQ, "stopped"))
      }
    }

    function Do(QQ, FQ) {
      return (0, dq.e)(this, Fo)[Fo] = null, QQ.end(), FQ
    }

    function ko(QQ, FQ) {
      const wQ = new Uint8Array(4),
        LQ = new DataView(wQ.buffer);
      return LQ.setUint8(0, QQ ? 1 : 0), LQ.setUint16(2, Math.max(0, Math.min(65535, Math.round(FQ))), !0), wQ
    }

    function vo(QQ, FQ) {
      return QQ > function(QQ) {
        return 16777216 + 314572.8 * Math.max(0, QQ)
      }(FQ) + 33554432
    }
    let mo = null;

    function uo(QQ) {
      return mo ??= async function(QQ) {
        const FQ = QQ.loadInFlight();
        FQ && await FQ.catch((() => {}));
        if (QQ.trapped()) return "trapped";
        if (QQ.busy() || !vo(QQ.memoryBytes(), QQ.clipSeconds())) return "iY";
        QQ.unload();
        let wQ = !1;
        try {
          wQ = await QQ.load()
        } catch {
          wQ = !1
        }
        if (!wQ) return QQ.trapped() ? "trapped" : QQ.kx() ? "kx" : "failed";
        return "recycled"
      }(QQ).finally((() => {
        mo = null
      })), mo
    }
    const Ho = "Replay recording couldn't load, so try again.",
      bo = new Set([bQ.Gc.ToggleRecording, bQ.Gc.SaveClip]);
    var Yo = (0, Qo.c)("bindings"),
      xo = (0, Qo.c)("module"),
      Ao = (0, Qo.c)("memory"),
      to = (0, Qo.c)("trapped"),
      eo = (0, Qo.c)("kx"),
      Mo = (0, Qo.c)("recycleDue"),
      Go = (0, Qo.c)("loading"),
      po = (0, Qo.c)("generation"),
      co = (0, Qo.c)("viewDrawn"),
      Co = (0, Qo.c)("clip"),
      So = (0, Qo.c)("session"),
      io = (0, Qo.c)("control"),
      Wo = (0, Qo.c)("deferred"),
      Ro = (0, Qo.c)("coreU8"),
      Oo = (0, Qo.c)("coreU32"),
      so = (0, Qo.c)("moduleU8"),
      ro = (0, Qo.c)("edited"),
      Io = (0, Qo.c)("sendSession"),
      Uo = (0, Qo.c)("checkNotInEvents"),
      No = (0, Qo.c)("clipping"),
      To = (0, Qo.c)("busy"),
      Ko = (0, Qo.c)("use"),
      zo = (0, Qo.c)("ensureLoaded"),
      jo = (0, Qo.c)("loadOnce"),
      ao = (0, Qo.c)("recycleAfterStep"),
      Xo = (0, Qo.c)("settleRecycle"),
      fo = (0, Qo.c)("load"),
      Vo = (0, Qo.c)("attach"),
      ho = (0, Qo.c)("resendHeld"),
      Jo = (0, Qo.c)("recycle"),
      Eo = (0, Qo.c)("send"),
      no = (0, Qo.c)("unload"),
      go = (0, Qo.c)("dropModule"),
      Po = (0, Qo.c)("coreBytes"),
      Zo = (0, Qo.c)("coreWords"),
      yo = (0, Qo.c)("moduleBytes"),
      Bo = (0, Qo.c)("loadFailed"),
      QD = (0, Qo.c)("call"),
      FD = (0, Qo.c)("guard"),
      wD = (0, Qo.c)("trapOn");
    class LD {
      constructor(QQ) {
        this.deps = QQ, Object.defineProperty(this, wD, {
          value: RD
        }), Object.defineProperty(this, FD, {
          value: WD
        }), Object.defineProperty(this, QD, {
          value: iD
        }), Object.defineProperty(this, Bo, {
          value: SD
        }), Object.defineProperty(this, yo, {
          value: CD
        }), Object.defineProperty(this, Zo, {
          value: cD
        }), Object.defineProperty(this, Po, {
          value: pD
        }), Object.defineProperty(this, go, {
          value: GD
        }), Object.defineProperty(this, no, {
          value: MD
        }), Object.defineProperty(this, Eo, {
          value: eD
        }), Object.defineProperty(this, Jo, {
          value: tD
        }), Object.defineProperty(this, ho, {
          value: AD
        }), Object.defineProperty(this, Vo, {
          value: xD
        }), Object.defineProperty(this, fo, {
          value: YD
        }), Object.defineProperty(this, Xo, {
          value: bD
        }), Object.defineProperty(this, ao, {
          value: HD
        }), Object.defineProperty(this, jo, {
          value: uD
        }), Object.defineProperty(this, zo, {
          value: mD
        }), Object.defineProperty(this, Ko, {
          value: vD
        }), Object.defineProperty(this, To, {
          value: kD
        }), Object.defineProperty(this, No, {
          value: DD
        }), Object.defineProperty(this, Uo, {
          value: oD
        }), Object.defineProperty(this, Io, {
          value: qD
        }), Object.defineProperty(this, Yo, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, xo, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Ao, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, to, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, eo, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Mo, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Go, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, po, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, co, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Co, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, So, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, io, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Wo, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Ro, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Oo, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, so, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ro, {
          writable: !0,
          value: void 0
        }), (0, dq.e)(this, ro)[ro] = new oo({
          ensureLoaded: () => (0, dq.e)(this, zo)[zo](),
          recorderCall: (QQ, FQ) => {
            FQ && (0, dq.e)(this, Uo)[Uo]("an edited save's stage");
            const wQ = (0, dq.e)(this, QD)[QD](((FQ, wQ) => (QQ(FQ, wQ), !0)));
            return null !== wQ && void 0 !== wQ && wQ
          },
          beginSave: QQ.beginSave,
          givenUp: QQ.givenUp
        })
      }
      get active() {
        return null !== (0, dq.e)(this, xo)[xo]
      }
      get trapped() {
        return (0, dq.e)(this, to)[to]
      }
      get loading() {
        return null !== (0, dq.e)(this, Go)[Go]
      }
      prefetch() {
        (0, dq.e)(this, eo)[eo] || (0, dq.e)(this, to)[to] || (0, dq.e)(this, xo)[xo] || (0, dq.e)(this, Go)[Go] || this.deps.prefetch()
      }
      viewDrawn() {
        (0, dq.e)(this, co)[co] = !0, (0, dq.e)(this, No)[No]() && (0, dq.e)(this, Ko)[Ko]()
      }
      prefs(QQ, FQ) {
        (0, dq.e)(this, Co)[Co] = {
          on: QQ,
          seconds: FQ
        }, (0, dq.e)(this, Eo)[Eo](bQ.Ac.Prefs, ko(QQ, FQ)), QQ && (0, dq.e)(this, co)[co] && (0, dq.e)(this, Ko)[Ko]()
      }
      control(QQ) {
        const FQ = function(QQ) {
          return new Uint8Array([QQ, 0, 0, 0])
        }(QQ);
        if (bo.has(QQ)) return (0, dq.e)(this, xo)[xo] ? void(0, dq.e)(this, Eo)[Eo](bQ.Ac.Control, FQ) : ((0, dq.e)(this, io)[io] = FQ, void(0, dq.e)(this, Ko)[Ko]());
        (0, dq.e)(this, eo)[eo] || this.deps.coreCommand(bQ.Ac.Control, FQ)
      }
      session(QQ) {
        (0, dq.e)(this, So)[So] = QQ, (0, dq.e)(this, Io)[Io](QQ)
      }
      filePartDone(QQ, FQ) {
        (0, dq.e)(this, Eo)[Eo](bQ.Ac.FilePartDone, function(QQ, FQ) {
          const wQ = new Uint8Array(8),
            LQ = new DataView(wQ.buffer);
          return LQ.setUint32(0, QQ, !0), LQ.setUint32(4, FQ, !0), wQ
        }(QQ, FQ))
      }
      fileDone(QQ) {
        return (0, dq.e)(this, Eo)[Eo](bQ.Ac.FileDone, function(QQ) {
          const FQ = new Uint8Array(4);
          return new DataView(FQ.buffer).setUint32(0, QQ, !0), FQ
        }(QQ)), (0, dq.e)(this, ao)[ao]()
      }
      saveEdited(QQ) {
        return (0, dq.e)(this, Uo)[Uo]("saveEdited"), (0, dq.e)(this, ro)[ro].start(QQ)
      }
      afterFrame() {
        if (!(0, dq.e)(this, xo)[xo]) return;
        "read" === (0, dq.e)(this, ro)[ro].beforeRecorderStep() && (0, dq.e)(this, ao)[ao]();
        const QQ = (0, dq.e)(this, Mo)[Mo];
        (0, dq.e)(this, Mo)[Mo] = null;
        const FQ = (0, dq.e)(this, xo)[xo],
          wQ = (0, dq.e)(this, Ao)[Ao];
        if (!FQ || !wQ) return void(null === QQ || void 0 === QQ || QQ.resolve((0, dq.e)(this, to)[to] ? "trapped" : "iY"));
        const {
          core: LQ
        } = this.deps, qQ = LQ.qoQ(2);
        let oQ, DQ, kQ, vQ, mQ = 0,
          uQ = 0;
        if (0 !== qQ) {
          var HQ, bQ;
          const QQ = (0, dq.e)(this, Zo)[Zo]();
          mQ = null !== (HQ = QQ[qQ >>> 2]) && void 0 !== HQ ? HQ : 0, uQ = null !== (bQ = QQ[1 + (qQ >>> 2)]) && void 0 !== bQ ? bQ : 0
        }
        try {
          if (uQ > 0) {
            const QQ = FQ.feed(uQ);
            0 !== QQ && (0, dq.e)(this, yo)[yo](wQ).set((0, dq.e)(this, Po)[Po]().subarray(mQ, mQ + uQ), QQ)
          }
          oQ = FQ.step(), DQ = FQ.ooQ(), kQ = FQ.koQ(), vQ = FQ.voQ()
        } catch (YQ) {
          if (!(0, dq.e)(this, wD)[wD](YQ)) throw null === QQ || void 0 === QQ || QQ.resolve("iY"), YQ;
          return void(null === QQ || void 0 === QQ || QQ.resolve("trapped"))
        }
        if (oQ > 0) {
          const QQ = LQ.moQ(2, oQ);
          0 !== QQ && (0, dq.e)(this, Po)[Po]().set((0, dq.e)(this, yo)[yo](wQ).subarray(DQ, DQ + oQ), QQ)
        }
        if (kQ > 0) {
          (0, dq.e)(this, Wo)[Wo] = [];
          try {
            this.deps.events(new Uint8Array(wQ.buffer, vQ, kQ), wQ)
          } catch (YQ) {
            throw null === QQ || void 0 === QQ || QQ.resolve("iY"), YQ
          } finally {
            const QQ = (0, dq.e)(this, Wo)[Wo];
            (0, dq.e)(this, Wo)[Wo] = null;
            for (const [FQ, wQ] of QQ)(0, dq.e)(this, Eo)[Eo](FQ, wQ)
          }
        }
        if (!(0, dq.e)(this, No)[No]() && !(0, dq.e)(this, To)[To]()) return (0, dq.e)(this, no)[no](), void(null === QQ || void 0 === QQ || QQ.resolve("iY"));
        null === QQ || void 0 === QQ || QQ.resolve((0, dq.e)(this, Jo)[Jo]())
      }
      dispose() {
        (0, dq.e)(this, eo)[eo] = !0, (0, dq.e)(this, no)[no]()
      }
    }

    function qD(QQ) {
      (0, dq.e)(this, Eo)[Eo](bQ.Ac.Session, function(QQ) {
        const FQ = new TextEncoder,
          wQ = FQ.encode(QQ.game).subarray(0, 65535),
          LQ = FQ.encode(QQ.lobby).subarray(0, 65535),
          qQ = new Uint8Array(22 + wQ.length + 2 + LQ.length),
          oQ = new DataView(qQ.buffer);
        oQ.setFloat64(0, QQ.unixMs, !0), oQ.setBigUint64(8, BigInt.asUintN(64, QQ.session), !0), oQ.setUint8(16, QQ.lobbyType);
        let DQ = 20;
        for (const kQ of [wQ, LQ]) oQ.setUint16(DQ, kQ.length, !0), qQ.set(kQ, DQ + 2), DQ += 2 + kQ.length;
        return qQ
      }({
        ...QQ,
        unixMs: this.deps.unixNow()
      }))
    }

    function oD(QQ) {
      false
    }

    function DD() {
      var QQ, FQ;
      return null !== (QQ = null === (FQ = (0, dq.e)(this, Co)[Co]) || void 0 === FQ ? void 0 : FQ.on) && void 0 !== QQ && QQ
    }

    function kD() {
      const QQ = (0, dq.e)(this, xo)[xo];
      let FQ = !0;
      if (QQ) try {
        FQ = QQ.busy()
      } catch (wQ) {
        if (!(0, dq.e)(this, wD)[wD](wQ)) throw wQ
      }
      return FQ || (0, dq.e)(this, ro)[ro].active
    }
    async function vD() {
      !(0, dq.e)(this, eo)[eo] && this.deps.allowed() ? await (0, dq.e)(this, zo)[zo]() : (0, dq.e)(this, io)[io] = null
    }

    function mD() {
      return (0, dq.e)(this, to)[to] || (0, dq.e)(this, eo)[eo] ? Promise.resolve(!1) : (0, dq.e)(this, xo)[xo] ? Promise.resolve(!0) : ((0, dq.e)(this, Go)[Go] ??= (0, dq.e)(this, jo)[jo](), (0, dq.e)(this, Go)[Go])
    }
    async function uD() {
      let QQ = !1;
      try {
        return QQ = await (0, dq.e)(this, fo)[fo](), QQ
      } finally {
        QQ || ((0, dq.e)(this, io)[io] = null), (0, dq.e)(this, Go)[Go] = null
      }
    }

    function HD() {
      if (!(0, dq.e)(this, xo)[xo]) return Promise.resolve((0, dq.e)(this, to)[to] ? "trapped" : "iY");
      if (!(0, dq.e)(this, Mo)[Mo]) {
        let QQ = () => {};
        const FQ = new Promise((FQ => {
          QQ = FQ
        }));
        (0, dq.e)(this, Mo)[Mo] = {
          promise: FQ,
          resolve: QQ
        }
      }
      return (0, dq.e)(this, Mo)[Mo].promise
    }

    function bD(QQ) {
      const FQ = (0, dq.e)(this, Mo)[Mo];
      (0, dq.e)(this, Mo)[Mo] = null, null === FQ || void 0 === FQ || FQ.resolve(QQ)
    }
    async function YD() {
      let QQ = (0, dq.e)(this, Yo)[Yo];
      if (!QQ) {
        const FQ = (0, dq.e)(this, po)[po];
        try {
          QQ = await this.deps.load()
        } catch (wQ) {
          return FQ === (0, dq.e)(this, po)[po] && await (0, dq.e)(this, Bo)[Bo](wQ), !1
        }
        if (FQ !== (0, dq.e)(this, po)[po]) return this.deps.unload(), !1;
        const LQ = QQ,
          qQ = (0, dq.e)(this, FD)[FD]((() => LQ.uoQ()));
        if (void 0 === qQ) return !1;
        const oQ = this.deps.core.HoQ();
        if (qQ !== oQ) return await (0, dq.e)(this, Bo)[Bo](new Error(`recorder port version ${qQ}, the core's ${oQ}`)), !1;
        (0, dq.e)(this, Yo)[Yo] = QQ
      }
      const FQ = QQ;
      try {
        if (!(0, dq.e)(this, FD)[FD]((() => ((0, dq.e)(this, xo)[xo] = new FQ.boQ, (0, dq.e)(this, Ao)[Ao] = FQ.woQ(), !0)))) return !1;
        (0, dq.e)(this, ho)[ho]();
        const QQ = (0, dq.e)(this, io)[io];
        return (0, dq.e)(this, io)[io] = null, QQ && (0, dq.e)(this, Eo)[Eo](bQ.Ac.Control, QQ), (0, dq.e)(this, Vo)[Vo]()
      } catch (wQ) {
        return (0, dq.e)(this, no)[no](), await (0, dq.e)(this, Bo)[Bo](wQ), !1
      }
    }

    function xD() {
      return this.deps.core.YoQ(0), 1 === this.deps.core.YoQ(1) || ((0, dq.e)(this, no)[no](), this.deps.failed(Ho), !1)
    }

    function AD() {
      (0, dq.e)(this, Co)[Co] && (0, dq.e)(this, Eo)[Eo](bQ.Ac.Prefs, ko((0, dq.e)(this, Co)[Co].on, (0, dq.e)(this, Co)[Co].seconds)), (0, dq.e)(this, So)[So] && (0, dq.e)(this, Io)[Io]((0, dq.e)(this, So)[So])
    }

    function tD() {
      return uo({
        memoryBytes: this.deps.memoryBytes,
        clipSeconds: () => {
          var QQ, FQ;
          return null !== (QQ = null === (FQ = (0, dq.e)(this, Co)[Co]) || void 0 === FQ ? void 0 : FQ.seconds) && void 0 !== QQ ? QQ : 0
        },
        trapped: () => (0, dq.e)(this, to)[to],
        busy: () => (0, dq.e)(this, To)[To](),
        loadInFlight: () => (0, dq.e)(this, Go)[Go],
        kx: () => (0, dq.e)(this, eo)[eo],
        unload: () => {
          (0, dq.e)(this, no)[no]()
        },
        load: () => (0, dq.e)(this, zo)[zo]()
      })
    }

    function eD(QQ, FQ) {
      (0, dq.e)(this, Wo)[Wo] ? (0, dq.e)(this, Wo)[Wo].push([QQ, FQ]): (0, dq.e)(this, QD)[QD](((wQ, LQ) => {
        const qQ = wQ.LoQ(FQ.length);
        0 !== qQ && (new Uint8Array(LQ.buffer, qQ, FQ.length).set(FQ), wQ.command(QQ, FQ.length))
      }))
    }

    function MD() {
      (0, dq.e)(this, po)[po]++, (0, dq.e)(this, Xo)[Xo]("iY"), (0, dq.e)(this, ro)[ro].stop(), this.deps.core.YoQ(0), (0, dq.e)(this, go)[go](), (0, dq.e)(this, to)[to] || ((0, dq.e)(this, Yo)[Yo] = null, this.deps.unload())
    }

    function GD() {
      (0, dq.e)(this, QD)[QD]((QQ => {
        QQ.free()
      })), (0, dq.e)(this, xo)[xo] = null, (0, dq.e)(this, Ao)[Ao] = null, (0, dq.e)(this, so)[so] = null
    }

    function pD() {
      var QQ;
      const FQ = this.deps.coreBuffer();
      return (null === (QQ = (0, dq.e)(this, Ro)[Ro]) || void 0 === QQ ? void 0 : QQ.buffer) !== FQ && ((0, dq.e)(this, Ro)[Ro] = new Uint8Array(FQ)), (0, dq.e)(this, Ro)[Ro]
    }

    function cD() {
      var QQ;
      const FQ = this.deps.coreBuffer();
      return (null === (QQ = (0, dq.e)(this, Oo)[Oo]) || void 0 === QQ ? void 0 : QQ.buffer) !== FQ && ((0, dq.e)(this, Oo)[Oo] = new Uint32Array(FQ, 0, FQ.byteLength >>> 2)), (0, dq.e)(this, Oo)[Oo]
    }

    function CD(QQ) {
      var FQ;
      const wQ = QQ.buffer;
      return (null === (FQ = (0, dq.e)(this, so)[so]) || void 0 === FQ ? void 0 : FQ.buffer) !== wQ && ((0, dq.e)(this, so)[so] = new Uint8Array(wQ)), (0, dq.e)(this, so)[so]
    }
    async function SD(QQ) {
      await this.deps.staleOr(QQ, (() => {
        this.deps.failed(Ho)
      }))
    }

    function iD(QQ) {
      const FQ = (0, dq.e)(this, xo)[xo],
        wQ = (0, dq.e)(this, Ao)[Ao];
      if (FQ && wQ) return (0, dq.e)(this, FD)[FD]((() => QQ(FQ, wQ)))
    }

    function WD(QQ) {
      if (!(0, dq.e)(this, to)[to]) try {
        return QQ()
      } catch (FQ) {
        if (!(0, dq.e)(this, wD)[wD](FQ)) throw FQ;
        return
      }
    }

    function RD(QQ) {
      return QQ instanceof WebAssembly.RuntimeError && ((0, dq.e)(this, to)[to] = !0, (0, dq.e)(this, xo)[xo] = null, (0, dq.e)(this, Ao)[Ao] = null, (0, dq.e)(this, so)[so] = null, (0, dq.e)(this, Yo)[Yo] = null, (0, dq.e)(this, io)[io] = null, (0, dq.e)(this, Xo)[Xo]("trapped"), this.deps.core.YoQ(0), (0, dq.e)(this, ro)[ro].stop(), this.deps.crash(this.deps.markTrapped(QQ)), this.deps.failed("Replay recording stopped working, so reload the page to record replays again."), !0)
    }
    var OD = wQ(38174);
    const sD = new Map([
      ["skyblock", () => wQ.e(50).then((() => wQ(38166)))]
    ]);

    function rD(QQ) {
      const FQ = sD.get(QQ);
      return FQ ? FQ().then((() => {
        const FQ = (0, OD.e)(QQ);
        if (!FQ) throw new Error(`${QQ}'s replay hook module registered no hook`);
        return FQ
      })) : null
    }
    class ID {
      constructor(QQ) {
        this.deps = QQ, this.game = null, this.hook = null, this.generation = 0, this.all = !1, this.pending = new Map, this.ids = new Int32Array(64)
      }
      get wantsWatch() {
        return null !== this.hook
      }
      opened(QQ) {
        if (this.pending.clear(), QQ === this.game && null !== this.hook) return void(this.all = !0);
        const FQ = ++this.generation;
        this.game = QQ, this.hook = null, this.all = !1;
        const wQ = this.deps.loadHook(QQ);
        null === wQ || void 0 === wQ || wQ.then((QQ => {
          FQ === this.generation && (this.hook = QQ, this.all = !0)
        }), (QQ => {
          FQ === this.generation && this.deps.onError(QQ)
        }))
      }
      ended() {
        this.generation++, this.game = null, this.hook = null, this.all = !1, this.pending.clear()
      }
      entityAdded(QQ) {
        null === this.hook || this.all || this.pending.set(QQ, !0)
      }
      entityInfoChanged(QQ) {
        null === this.hook || this.all || this.pending.has(QQ) || this.pending.set(QQ, !1)
      }
      flush(QQ) {
        const {
          hook: FQ
        } = this;
        if (null === FQ || !QQ || !this.all && 0 === this.pending.size) return;
        const wQ = this.deps.cmd();
        if (null === wQ) return;
        const {
          api: LQ
        } = this.deps;
        if (this.all) {
          this.all = !1, this.pending.clear();
          const {
            ids: QQ,
            count: FQ
          } = aw(LQ, this.ids);
          this.ids = QQ;
          for (let wQ = 0; wQ < FQ; wQ++) this.pending.set(QQ[wQ], !0)
        }
        const qQ = this.ids = Xw(this.ids, this.pending.size);
        let oQ = 0;
        for (const mQ of this.pending.keys()) qQ[oQ++] = mQ;
        const DQ = [],
          kQ = fw(LQ, qQ, oQ, ((QQ, FQ) => {
            null !== FQ && DQ.push({
              serverId: QQ,
              info: FQ,
              spawned: !0 === this.pending.get(QQ)
            })
          }));
        if (kQ) {
          this.pending.clear();
          for (const {
              serverId: QQ,
              info: LQ,
              spawned: qQ
            }
            of DQ) try {
            FQ(LQ, {
              setFacingTolerance: FQ => {
                null === FQ && qQ || kw(wQ, QQ, FQ) || this.pending.set(QQ, qQ)
              }
            })
          } catch (vQ) {
            this.deps.onError(vQ)
          }
        }
      }
    }
    var UD = (0, Qo.c)("bindings"),
      ND = (0, Qo.c)("module"),
      TD = (0, Qo.c)("memory"),
      KD = (0, Qo.c)("trapped"),
      zD = (0, Qo.c)("generation"),
      lD = (0, Qo.c)("loading"),
      jD = (0, Qo.c)("lend"),
      aD = (0, Qo.c)("givenUp"),
      XD = (0, Qo.c)("afterSave"),
      fD = (0, Qo.c)("opens"),
      VD = (0, Qo.c)("saveAskedAt"),
      hD = (0, Qo.c)("unload"),
      JD = (0, Qo.c)("dropModule"),
      ED = (0, Qo.c)("loadFailed"),
      nD = (0, Qo.c)("saveReadsBody"),
      gD = (0, Qo.c)("command"),
      PD = (0, Qo.c)("call"),
      ZD = (0, Qo.c)("guard"),
      yD = (0, Qo.c)("trapOn");
    class BD {
      constructor(QQ) {
        this.deps = QQ, Object.defineProperty(this, yD, {
          value: kk
        }), Object.defineProperty(this, ZD, {
          value: Dk
        }), Object.defineProperty(this, PD, {
          value: qk
        }), Object.defineProperty(this, gD, {
          value: Lk
        }), Object.defineProperty(this, nD, {
          get: wk,
          set: void 0
        }), Object.defineProperty(this, ED, {
          value: Fk
        }), Object.defineProperty(this, JD, {
          value: Qk
        }), Object.defineProperty(this, hD, {
          value: dD
        }), Object.defineProperty(this, UD, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ND, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, TD, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, KD, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, zD, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, lD, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, jD, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, aD, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, XD, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, fD, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, VD, {
          writable: !0,
          value: null
        })
      }
      get active() {
        return null !== (0, dq.e)(this, ND)[ND] && null === (0, dq.e)(this, XD)[XD]
      }
      async open(QQ) {
        if ((0, dq.e)(this, KD)[KD]) return bQ.Oc.ModuleTrap;
        let FQ = (0, dq.e)(this, UD)[UD];
        if (!FQ) {
          const QQ = (0, dq.e)(this, zD)[zD];
          (0, dq.e)(this, lD)[lD]++;
          try {
            FQ = await this.deps.load()
          } catch (LQ) {
            return (0, dq.e)(this, lD)[lD]--, QQ !== (0, dq.e)(this, zD)[zD] ? "stopped" : (0, dq.e)(this, ED)[ED](LQ)
          }
          if ((0, dq.e)(this, lD)[lD]--, QQ !== (0, dq.e)(this, zD)[zD]) return (0, dq.e)(this, UD)[UD] || 0 !== (0, dq.e)(this, lD)[lD] || (0, dq.e)(this, KD)[KD] || this.deps.unload(), "stopped";
          if ((0, dq.e)(this, KD)[KD]) return bQ.Oc.ModuleTrap;
          const wQ = FQ.uoQ(),
            qQ = this.deps.core.HoQ();
          if (wQ !== qQ) return (0, dq.e)(this, ED)[ED](new Error(`replay port version ${wQ}, the core's ${qQ}`));
          (0, dq.e)(this, UD)[UD] = FQ
        }
        if (!(0, dq.e)(this, ND)[ND]) {
          const QQ = FQ;
          if (!(0, dq.e)(this, ZD)[ZD]((() => {
              (0, dq.e)(this, ND)[ND] = new QQ.xoQ, (0, dq.e)(this, TD)[TD] = QQ.AoQ()
            }))) return bQ.Oc.ModuleTrap
        }
        let wQ = !1;
        return (0, dq.e)(this, PD)[PD](((FQ, LQ) => {
          null !== (0, dq.e)(this, XD)[XD] && FQ.step(0, 0);
          const qQ = FQ.stage(QQ.length);
          0 !== qQ && (new Uint8Array(LQ.buffer, qQ, QQ.length).set(QQ), FQ.open(), (0, dq.e)(this, aD)[aD] = (0, dq.e)(this, jD)[jD], (0, dq.e)(this, XD)[XD] = null, (0, dq.e)(this, fD)[fD]++, wQ = !0)
        })) ? wQ ? "opening" : bQ.Oc.TooLarge : bQ.Oc.ModuleTrap
      }
      beforeFrame(QQ) {
        const FQ = (0, dq.e)(this, ND)[ND],
          wQ = (0, dq.e)(this, TD)[TD];
        if (!FQ || !wQ || null !== (0, dq.e)(this, XD)[XD]) return;
        const {
          core: LQ
        } = this.deps, qQ = LQ.toQ(QQ);
        if (qQ < 0) return;
        const oQ = Math.floor(qQ);
        let DQ, kQ;
        try {
          DQ = FQ.step(oQ, qQ - oQ), kQ = FQ.ooQ()
        } catch (mQ) {
          return void(0, dq.e)(this, yD)[yD](mQ)
        }
        const vQ = LQ.moQ(1, DQ);
        if (0 === vQ) {
          const QQ = (0, dq.e)(this, PD)[PD]((QQ => {
            QQ.close()
          }));
          if (!QQ) return;
          return (0, dq.e)(this, nD)[nD] ? (0, dq.e)(this, XD)[XD] = "drop" : (0, dq.e)(this, JD)[JD](), void LQ.eoQ(bQ.Oc.Port)
        }
        new Uint8Array(this.deps.coreBuffer(), vQ, DQ).set(new Uint8Array(wQ.buffer, kQ, DQ))
      }
      play() {
        (0, dq.e)(this, gD)[gD]((QQ => {
          QQ.play()
        }))
      }
      pause() {
        (0, dq.e)(this, gD)[gD]((QQ => {
          QQ.pause()
        }))
      }
      seek(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, dq.e)(this, gD)[gD]((wQ => {
          wQ.seek(QQ, FQ)
        }))
      }
      setMark(QQ, FQ) {
        return (0, dq.e)(this, gD)[gD]((wQ => {
          wQ.MoQ(QQ, FQ)
        }))
      }
      addKeyframe(QQ, FQ) {
        return (0, dq.e)(this, gD)[gD]((wQ => {
          wQ.GoQ(QQ[0], QQ[1], QQ[2], FQ[0], FQ[1], FQ[2])
        }))
      }
      setKeyframe(QQ, FQ) {
        return (0, dq.e)(this, gD)[gD]((wQ => {
          wQ.poQ(QQ, FQ)
        }))
      }
      moveKeyframe(QQ, FQ) {
        return (0, dq.e)(this, gD)[gD]((wQ => {
          wQ.coQ(QQ, FQ)
        }))
      }
      deleteKeyframes(QQ, FQ) {
        return (0, dq.e)(this, gD)[gD]((wQ => {
          wQ.CoQ(QQ, FQ)
        }))
      }
      crop(QQ, FQ) {
        return null === (0, dq.e)(this, jD)[jD] && (0, dq.e)(this, gD)[gD]((wQ => {
          wQ.crop(QQ, FQ)
        }))
      }
      beginSave() {
        const QQ = (0, dq.e)(this, VD)[VD];
        if ((0, dq.e)(this, VD)[VD] = null, null !== QQ && QQ !== (0, dq.e)(this, fD)[fD]) return null;
        let FQ = 0,
          wQ = null;
        if ((0, dq.e)(this, PD)[PD](((QQ, LQ) => {
            FQ = QQ.save(), 0 !== FQ && (wQ = new Uint8Array(LQ.buffer, QQ.SoQ(), QQ.ioQ()).slice())
          })), 0 === FQ || !wQ) return null;
        const LQ = {
          headLen: FQ,
          editState: wQ,
          givenUp: () => (0, dq.e)(this, aD)[aD] === LQ,
          head: (QQ, FQ) => {
            if ((0, dq.e)(this, jD)[jD] !== LQ || !(0, dq.e)(this, nD)[nD]) return null;
            let wQ = null;
            return (0, dq.e)(this, PD)[PD](((LQ, qQ) => {
              const oQ = LQ.WoQ();
              0 !== oQ && QQ >= 0 && FQ >= 0 && QQ + FQ <= oQ && (wQ = new Uint8Array(qQ.buffer, LQ.RoQ() + QQ, FQ))
            })), wQ
          },
          end: () => {
            if ((0, dq.e)(this, jD)[jD] !== LQ) return;
            (0, dq.e)(this, jD)[jD] = null, (0, dq.e)(this, aD)[aD] = null, (0, dq.e)(this, PD)[PD]((QQ => {
              QQ.OoQ()
            }));
            const QQ = (0, dq.e)(this, XD)[XD];
            (0, dq.e)(this, XD)[XD] = null, "unload" === QQ ? (0, dq.e)(this, hD)[hD]() : "drop" === QQ && (0, dq.e)(this, JD)[JD]()
          }
        };
        return (0, dq.e)(this, jD)[jD] = LQ, LQ
      }
      askSave() {
        (0, dq.e)(this, VD)[VD] = (0, dq.e)(this, fD)[fD]
      }
      setSpeed(QQ) {
        (0, dq.e)(this, gD)[gD]((FQ => {
          FQ.soQ(QQ)
        }))
      }
      setCameraMode(QQ) {
        (0, dq.e)(this, gD)[gD]((FQ => {
          FQ.roQ(QQ)
        }))
      }
      close() {
        (0, dq.e)(this, gD)[gD]((QQ => {
          QQ.close()
        }))
      }
      stop() {
        (0, dq.e)(this, zD)[zD]++, (0, dq.e)(this, nD)[nD] && ((0, dq.e)(this, PD)[PD]((QQ => {
          QQ.close()
        })), (0, dq.e)(this, ND)[ND]) ? (0, dq.e)(this, XD)[XD] = "unload" : (0, dq.e)(this, hD)[hD]()
      }
    }

    function dD() {
      (0, dq.e)(this, JD)[JD](), (0, dq.e)(this, KD)[KD] || ((0, dq.e)(this, UD)[UD] = null, this.deps.unload())
    }

    function Qk() {
      (0, dq.e)(this, PD)[PD]((QQ => {
        QQ.free()
      })), (0, dq.e)(this, ND)[ND] = null, (0, dq.e)(this, TD)[TD] = null
    }
    async function Fk(QQ) {
      return await this.deps.staleOr(QQ, (() => {})) ? "reloading" : bQ.Oc.ModuleLoad
    }

    function wk() {
      return null !== (0, dq.e)(this, jD)[jD] && (0, dq.e)(this, aD)[aD] !== (0, dq.e)(this, jD)[jD]
    }

    function Lk(QQ) {
      return null === (0, dq.e)(this, XD)[XD] && (0, dq.e)(this, PD)[PD](QQ)
    }

    function qk(QQ) {
      const FQ = (0, dq.e)(this, ND)[ND],
        wQ = (0, dq.e)(this, TD)[TD];
      return !(!FQ || !wQ) && (0, dq.e)(this, ZD)[ZD]((() => {
        QQ(FQ, wQ)
      }))
    }

    function Dk(QQ) {
      if ((0, dq.e)(this, KD)[KD]) return !1;
      try {
        return QQ(), !0
      } catch (FQ) {
        return (0, dq.e)(this, yD)[yD](FQ), !1
      }
    }

    function kk(QQ) {
      if (!(QQ instanceof WebAssembly.RuntimeError)) throw QQ;
      (0, dq.e)(this, KD)[KD] = !0, (0, dq.e)(this, ND)[ND] = null, (0, dq.e)(this, TD)[TD] = null, (0, dq.e)(this, UD)[UD] = null, this.deps.crash(this.deps.markTrapped(QQ)), this.deps.core.eoQ(bQ.Oc.ModuleTrap)
    }
    var vk = wQ(6320),
      mk = wQ(40154);
    const uk = "[bloxd-wasm-client]";
    const Hk = String(Iq);

    function bk(QQ) {
      return null === QQ || QQ === Hk ? void 0 : QQ
    }

    function Yk(QQ) {
      var FQ, wQ, LQ, qQ, oQ, kQ, vQ;
      switch (QQ.what) {
        case bQ.Sc.FlyingText: {
          let FQ;
          try {
            FQ = JSON.parse(QQ.contentJson)
          } catch (mQ) {
            return void console.warn(`${uk} a replay's flying text isn't JSON`, mQ)
          }
          DQ.l.GA("forceFlyingMiddleMessage", {
            content: FQ,
            Rw: QQ.Rw,
            angle: QQ.angle,
            Ow: QQ.Ow
          });
          break
        }
        case bQ.Sc.PlayerKilled:
          (0, mk.g)({
            kind: "killed",
            body: {
              deadEId: null !== (FQ = bk(QQ.dead)) && void 0 !== FQ ? FQ : "",
              killerEId: bk(QQ.killer),
              withItem: null !== (wQ = QQ.withItem) && void 0 !== wQ ? wQ : "",
              killstreak: QQ.killstreak
            }
          });
          break;
        case bQ.Sc.Killfeed:
          (0, mk.g)({
            kind: "custom",
            body: {
              killer: {
                eId: bk(QQ.killerId),
                name: null !== (LQ = QQ.killerName) && void 0 !== LQ ? LQ : void 0,
                colour: null !== (qQ = QQ.killerColour) && void 0 !== qQ ? qQ : void 0
              },
              victim: {
                eId: bk(QQ.victimId),
                name: null !== (oQ = QQ.victimName) && void 0 !== oQ ? oQ : void 0,
                colour: null !== (kQ = QQ.victimColour) && void 0 !== kQ ? kQ : void 0
              },
              withItem: null !== (vQ = QQ.withItem) && void 0 !== vQ ? vQ : ""
            }
          })
      }
    }
    const xk = "[bloxd-wasm-client]";

    function Ak(QQ) {
      if (void 0 === QQ || null === QQ || "" === QQ) return null;
      const FQ = Number(QQ);
      return Number.isInteger(FQ) && FQ > Iq && FQ <= 2147483647 ? FQ : null
    }

    function tk(QQ) {
      return {
        id: Ak(QQ.eId),
        name: "string" === typeof QQ.name ? QQ.name : null,
        colour: "string" === typeof QQ.colour ? QQ.colour : null
      }
    }

    function ek(QQ) {
      const FQ = (0, fq.h)(gw.rc.PlayerKilled, (FQ => {
          var wQ, LQ;
          const qQ = (0, Xq.j)(FQ);
          if (!(0, Xq.e)(qQ)) return;
          const {
            deadEId: oQ,
            killerEId: DQ,
            withItem: kQ,
            killstreak: vQ
          } = qQ;
          QQ.recordPlayerKilled(null !== (wQ = Ak(oQ)) && void 0 !== wQ ? wQ : Iq, null !== (LQ = Ak(DQ)) && void 0 !== LQ ? LQ : Iq, "number" === typeof vQ ? vQ : 0, "string" === typeof kQ ? kQ : "")
        })),
        wQ = (0, fq.h)(gw.rc.CustomKillfeed, (FQ => {
          const wQ = (0, Xq.j)(FQ);
          if (!(0, Xq.e)(wQ) || !(0, Xq.e)(wQ.killer) || !(0, Xq.e)(wQ.victim)) return;
          const {
            killer: LQ,
            victim: qQ,
            withItem: oQ
          } = wQ;
          QQ.recordKillfeed(tk(LQ), tk(qQ), "string" === typeof oQ ? oQ : null)
        }));
      return () => {
        FQ(), wQ()
      }
    }

    function Mk(QQ) {
      var FQ;
      return void 0 === QQ || null === QQ ? null : null !== (FQ = JSON.stringify(QQ)) && void 0 !== FQ ? FQ : null
    }

    function Gk(QQ) {
      let FQ = null;
      const wQ = () => {
        const {
          enableClipping: wQ,
          clipDurationSeconds: qQ
        } = LQ.c.get("clientEscMenuOptions"), oQ = `${wQ}:${qQ}`;
        oQ !== FQ && (FQ = oQ, QQ.recorder.setPrefs(wQ, qQ))
      };
      return wQ(), (0, DQ.o)("appManagerUpdated|clientEscMenuOptions", wQ)
    }
    const pk = "replayModule",
      ck = "recorderModule";

    function Ck(QQ, FQ, wQ) {
      return function() {
        return QQ.isStopped ? wQ : FQ(...arguments)
      }
    }
    const Sk = {
      open: () => Promise.reject(new Error(cq.c.coreStopped.text)),
      replayKey: () => null,
      encode: () => Promise.resolve(null),
      fileHandle: () => null,
      markSaved: () => {}
    };

    function ik() {
      return wQ.e(62).then((() => wQ(60972)))
    }

    function Wk(QQ) {
      (0, cq.f)({
        text: QQ,
        type: "Error"
      })
    }
    class Rk {
      constructor(QQ) {
        this.deps = QQ, this.runtime = void 0, this.entityHooks = void 0, this.recordedOptions = void 0, this.stops = void 0, this.activeConn = 0, this.stopped = !1, this.bench = null, this.replay = void 0, this.recorder = void 0, this.freecam = void 0, this.drawn = !1;
        const {
          running: FQ,
          api: LQ,
          core: qQ
        } = QQ, oQ = () => QQ.memory().buffer, DQ = () => FQ.isStopped ? null : FQ.rings.cmd, kQ = Ck(FQ, ((QQ, FQ) => qQ.moQ(QQ, FQ)), 0), vQ = () => qQ.HoQ();
        let mQ = null;
        this.replay = new BD({
          core: {
            toQ: Ck(FQ, (QQ => qQ.toQ(QQ)), -1),
            moQ: kQ,
            HoQ: vQ,
            eoQ: Ck(FQ, (QQ => {
              qQ.eoQ(QQ)
            }), void 0)
          },
          coreBuffer: oQ,
          load: async () => (mQ = await wQ.e(63).then((() => wQ(60983))), mQ.loadReplayModule()),
          unload: () => {
            var QQ;
            null === (QQ = mQ) || void 0 === QQ || QQ.unloadReplayModule()
          },
          markTrapped: QQ => mQ ? mQ.markReplayTrapped(QQ) : new Error(String(QQ)),
          staleOr: (FQ, wQ) => QQ.staleOr(pk, FQ, wQ),
          crash: FQ => {
            QQ.reportFault(pk, FQ)
          }
        });
        let uQ = null;
        this.recorder = new LD({
          core: {
            YoQ: Ck(FQ, (QQ => qQ.YoQ(QQ)), 0),
            qoQ: Ck(FQ, (QQ => qQ.qoQ(QQ)), 0),
            moQ: kQ,
            HoQ: vQ
          },
          coreCommand: (QQ, FQ) => {
            var wQ, LQ;
            return null !== (wQ = null === (LQ = DQ()) || void 0 === LQ ? void 0 : LQ.writeCmd(QQ, 0, FQ)) && void 0 !== wQ && wQ
          },
          coreBuffer: oQ,
          load: async () => (uQ = await ik(), uQ.loadRecorderModule()),
          prefetch: () => {
            ik().then((QQ => QQ.prefetchRecorderModule())).catch((QQ => {
              console.warn(`${xk} the recorder module didn't prefetch, so a save loads it:`, QQ)
            }))
          },
          unload: () => {
            var QQ;
            null === (QQ = uQ) || void 0 === QQ || QQ.unloadRecorderModule()
          },
          markTrapped: QQ => uQ ? uQ.markRecorderTrapped(QQ) : new Error(String(QQ)),
          memoryBytes: () => {
            var QQ, FQ;
            return null !== (QQ = null === (FQ = uQ) || void 0 === FQ ? void 0 : FQ.recorderMemoryBytes()) && void 0 !== QQ ? QQ : 0
          },
          staleOr: (FQ, wQ) => QQ.staleOr(ck, FQ, wQ),
          crash: FQ => {
            QQ.reportFault(ck, FQ)
          },
          allowed: () => !0 === QQ.options.get("canRecordReplays"),
          failed: Wk,
          events: (QQ, FQ) => {
            this.runtime.recorderEvents(QQ, FQ)
          },
          beginSave: () => this.replay.beginSave(),
          givenUp: Wk,
          unixNow: () => Date.now()
        });
        const HQ = new rq({
          core: {
            PqQ: Ck(FQ, (QQ => qQ.PqQ(QQ)), 0),
            yqQ: Ck(FQ, (() => {
              qQ.yqQ()
            }), void 0),
            Nt: Ck(FQ, (() => qQ.Nt()), 0),
            ZqQ: Ck(FQ, (() => qQ.ZqQ()), 0)
          },
          buffer: oQ,
          apiView: () => LQ.apiView,
          cmd: DQ,
          replay: this.replay,
          recorder: this.recorder
        });
        this.entityHooks = new ID({
          api: LQ,
          cmd: DQ,
          loadHook: rD,
          onError: QQ => {
            console.warn(`${xk} the recorded game's replay hooks:`, QQ)
          }
        });
        const bQ = new aq({
          client: HQ,
          buffer: oQ,
          setHoldDraws: QQ => {
            FQ.setHoldDraws(QQ)
          },
          notify: cq.f,
          onRecorderState: () => {
            var QQ;
            null === (QQ = (0, Sq.f)()) || void 0 === QQ || QQ.recorderChanged()
          },
          onViewerChange: () => {
            var QQ;
            null === (QQ = (0, Sq.f)()) || void 0 === QQ || QQ.viewerChanged()
          },
          onReplayOption: FQ => {
            ! function(QQ, FQ) {
              var wQ, LQ;
              const qQ = gw.ub[FQ.key];
              if (void 0 === qQ) return;
              let oQ = null !== (wQ = FQ.value) && void 0 !== wQ ? wQ : JSON.parse(JSON.stringify(null !== (LQ = vk.b[qQ]) && void 0 !== LQ ? LQ : null));
              if (null !== FQ.value && FQ.key < gw.Zb.Environment && "string" === typeof oQ) try {
                oQ = JSON.parse(oQ)
              } catch (DQ) {
                return void console.warn(`${uk} a replay's ${qQ} isn't JSON`, DQ)
              }
              QQ.applyNewClientOptions({
                [qQ]: oQ
              })
            }(QQ.options, FQ)
          },
          onReplayUiEvent: Yk,
          onReplayOpened: FQ => {
            this.entityHooks.opened((0, RQ.Wb)(FQ)), QQ.replayShaderPack(FQ)
          },
          meshPending: () => {
            var QQ, wQ;
            return null !== (QQ = null === (wQ = FQ.lastHeader) || void 0 === wQ ? void 0 : wQ.renderPending) && void 0 !== QQ ? QQ : 0
          },
          viewerOpen: Cq.b,
          download: QQ => {
            (0, Gq.f)(QQ)
          }
        });
        this.runtime = bQ, LQ.replay = bQ.sink, (0, Sq.q)(bQ);
        const YQ = new Jq({
          live: () => {
            var QQ;
            return !FQ.isStopped && !0 === (null === (QQ = bQ.currentViewer) || void 0 === QQ ? void 0 : QQ.inPlayback)
          },
          cmd: DQ,
          dragScale: yq
        });
        this.freecam = YQ, (0, Sq.m)(YQ), this.recordedOptions = function(QQ, FQ) {
          const wQ = gw.ub,
            LQ = wQ.map(((wQ, LQ) => FQ.subscribe(wQ, (FQ => {
              QQ.setOption(LQ, Mk(FQ))
            }))));
          return {
            sendAll() {
              wQ.forEach(((wQ, LQ) => {
                QQ.setOption(LQ, Mk(FQ.get(wQ)))
              }))
            },
            stop() {
              for (const QQ of LQ) QQ()
            }
          }
        }(bQ.recorder, QQ.options), this.stops = [(0, qL.k)((QQ => {
          YQ.flush();
          try {
            this.replay.beforeFrame(QQ)
          } catch (FQ) {
            this.deps.reportFault("replayFrame", FQ)
          }
        })), (0, qL.y)(((QQ, FQ) => {
          try {
            this.recorder.afterFrame(), FQ && !this.drawn && (this.drawn = !0, this.recorder.viewDrawn())
          } catch (wQ) {
            this.deps.reportFault("recorderFrame", wQ)
          }
          try {
            bQ.afterFrame(QQ)
          } catch (wQ) {
            this.deps.reportFault("replayRuntime", wQ)
          }
        })), Gk(bQ), () => {
          this.recordedOptions.stop()
        }, ek(bQ.recorder), (0, Vq.j)((QQ => {
          let {
            action: FQ,
            down: wQ
          } = QQ;
          var LQ;
          wQ && (null === (LQ = (0, Sq.f)()) || void 0 === LQ || LQ.keyDown(FQ))
        }))];
        const xQ = () => {
          const QQ = bQ.currentViewer;
          return !0 === (null === QQ || void 0 === QQ ? void 0 : QQ.isOpen) ? QQ : null
        };
        (0, pq.e)({
          open: (QQ, FQ) => this.open(QQ, FQ),
          replayKey: () => {
            var QQ, FQ;
            return null !== (QQ = null === (FQ = xQ()) || void 0 === FQ ? void 0 : FQ.id) && void 0 !== QQ ? QQ : null
          },
          saveRefusal: () => {
            var QQ, FQ;
            return null !== (QQ = null === (FQ = xQ()) || void 0 === FQ ? void 0 : FQ.saveRefusal) && void 0 !== QQ ? QQ : null
          },
          encode: () => {
            var QQ, FQ;
            return null !== (QQ = null === (FQ = xQ()) || void 0 === FQ ? void 0 : FQ.save()) && void 0 !== QQ ? QQ : Promise.resolve(null)
          },
          fileHandle: () => {
            var QQ, FQ;
            return null !== (QQ = null === (FQ = bQ.currentViewer) || void 0 === FQ ? void 0 : FQ.fileHandle) && void 0 !== QQ ? QQ : null
          },
          markSaved: (QQ, FQ) => {
            var wQ;
            null === (wQ = bQ.currentViewer) || void 0 === wQ || wQ.markSaved(QQ, FQ)
          }
        })
      }
      netEvent(QQ) {
        if ("connection" === QQ.type)
          if (QQ.phase === bQ.z.Activated) {
            this.activeConn = QQ.conn;
            const FQ = this.deps.sessionInfo(QQ.conn);
            null !== FQ && (this.runtime.activated({
              lobbyType: (0, OQ.A)(FQ.lobbyName),
              gameNameWithVariation: FQ.gameNameWithVariation,
              lobbyName: FQ.lobbyName
            }), this.recordedOptions.sendAll())
          } else QQ.phase !== bQ.z.Left && QQ.phase !== bQ.z.Closed || QQ.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
      }
      stop() {
        if (!this.stopped) {
          this.stopped = !0;
          for (const QQ of this.stops) QQ();
          this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, Sq.k)() === this.runtime && (0, Sq.q)(null), (0, Sq.h)() === this.freecam && (0, Sq.m)(null), (0, pq.e)(Sk), null !== this.bench && window.wasmReplayBench === this.bench && (window.wasmReplayBench = void 0)
        }
      }
      async open(QQ, FQ) {
        const {
          running: wQ
        } = this.deps;
        if (wQ.isStopped) throw new Error(cq.c.coreStopped.text);
        if (QQ.byteLength > 67108864) throw new Error(cq.c.cantOpen.text);
        let LQ;
        try {
          LQ = await async function(QQ) {
            const FQ = await QQ.loadViewer();
            return FQ.inPlayback || (0, qL.H)().leaveGame(null), FQ
          }(this.runtime)
        } catch (qQ) {
          throw console.warn(`${xk} the replay viewer didn't load`, qQ), new Error(cq.c.viewerLoadFailed.text)
        }
        if (wQ.isStopped) throw new Error(cq.c.coreStopped.text);
        await LQ.open(QQ, FQ)
      }
    }
    var Ok = wQ(1911);

    function sk(QQ, FQ) {
      const {
        aux: wQ,
        payload: LQ
      } = function(QQ) {
        return {
          aux: QQ.reset ? bQ.Ob.ResetFirst : 0,
          payload: Ik(QQ.changes)
        }
      }(FQ);
      QQ.queueOptions(wQ, LQ) && (FQ.reset && Ok.b.reset(), Ok.b.apply(FQ.changes))
    }
    const rk = new TextEncoder;

    function Ik(QQ) {
      const FQ = new Uk;
      return Tk(FQ, QQ), FQ.bytes()
    }
    class Uk {
      constructor() {
        this.buf = new Uint8Array(256), this.view = new DataView(this.buf.buffer), this.len = 0
      }
      room(QQ) {
        if (this.len + QQ <= this.buf.length) return;
        const FQ = new Uint8Array(Math.max(2 * this.buf.length, this.len + QQ));
        FQ.set(this.buf.subarray(0, this.len)), this.buf = FQ, this.view = new DataView(FQ.buffer)
      }
      u8(QQ) {
        this.room(1), this.buf[this.len++] = QQ
      }
      tagged(QQ, FQ, wQ) {
        this.room(1 + FQ), this.buf[this.len++] = QQ, 1 === FQ ? this.view.setUint8(this.len, wQ) : 2 === FQ ? this.view.setUint16(this.len, wQ) : this.view.setUint32(this.len, wQ), this.len += FQ
      }
      signed(QQ, FQ, wQ) {
        this.room(1 + FQ), this.buf[this.len++] = QQ, 1 === FQ ? this.view.setInt8(this.len, wQ) : 2 === FQ ? this.view.setInt16(this.len, wQ) : this.view.setInt32(this.len, wQ), this.len += FQ
      }
      f64(QQ) {
        this.room(9), this.buf[this.len++] = 203, this.view.setFloat64(this.len, QQ), this.len += 8
      }
      raw(QQ) {
        this.room(QQ.length), this.buf.set(QQ, this.len), this.len += QQ.length
      }
      bytes() {
        return this.buf.slice(0, this.len)
      }
    }

    function Nk(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
      FQ < LQ ? QQ.u8(wQ | FQ) : null !== qQ && FQ < 256 ? QQ.tagged(qQ, 1, FQ) : FQ < 65536 ? QQ.tagged(oQ, 2, FQ) : QQ.tagged(DQ, 4, FQ)
    }

    function Tk(QQ, FQ) {
      switch (typeof FQ) {
        case "undefined":
          return void QQ.raw(Kk);
        case "boolean":
          return void QQ.u8(FQ ? 195 : 194);
        case "number":
          return void
          function(QQ, FQ) {
            FQ >>> 0 === FQ ? FQ < 128 ? QQ.u8(FQ) : FQ < 256 ? QQ.tagged(204, 1, FQ) : FQ < 65536 ? QQ.tagged(205, 2, FQ) : QQ.tagged(206, 4, FQ) : (FQ | 0) === FQ ? FQ >= -32 ? QQ.u8(255 & FQ) : FQ >= -128 ? QQ.signed(208, 1, FQ) : FQ >= -32768 ? QQ.signed(209, 2, FQ) : QQ.signed(210, 4, FQ) : QQ.f64(FQ)
          }(QQ, FQ);
        case "string": {
          const wQ = rk.encode(FQ);
          return Nk(QQ, wQ.length, 160, 32, 217, 218, 219), void QQ.raw(wQ)
        }
        case "object":
          break;
        default:
          return void QQ.u8(192)
      }
      if (null === FQ) QQ.u8(192);
      else if (Array.isArray(FQ)) {
        Nk(QQ, FQ.length, 144, 16, null, 220, 221);
        for (const wQ of FQ) Tk(QQ, wQ)
      } else if (FQ instanceof Uint8Array) Nk(QQ, FQ.length, 0, 0, 196, 197, 198), QQ.raw(FQ);
      else {
        const wQ = Object.keys(FQ);
        Nk(QQ, wQ.length, 128, 0, null, 222, 223);
        for (const LQ of wQ) Tk(QQ, LQ), Tk(QQ, FQ[LQ])
      }
    }
    const Kk = new Uint8Array([212, 0, 0]);
    var zk = wQ(41970),
      lk = wQ(41972),
      jk = wQ(40430),
      ak = wQ(40461),
      Xk = wQ(2811);
    const fk = [1e3, 3e3, 9e3];
    class Vk {
      constructor(QQ) {
        this.host = QQ, this.sets = new Map, this.table = [], this.generation = 0, this.kx = !1
      }
      onEvent(QQ) {
        const FQ = function(QQ) {
          if (QQ.byteLength !== bQ.$c) return null;
          const FQ = new DataView(QQ.buffer, QQ.byteOffset, QQ.byteLength);
          return {
            want: FQ.getUint16(0, !0),
            release: FQ.getUint16(2, !0)
          }
        }(QQ);
        FQ && !this.kx && (FQ.release !== bQ.ad && this.release(FQ.release), FQ.want !== bQ.ad && this.want(FQ.want))
      }
      reset(QQ) {
        if (!this.kx) {
          for (const [QQ, FQ] of this.sets) "ready" === FQ.state && this.releaseAll(FQ.distinct), this.sets.delete(QQ);
          this.table = QQ, this.generation++
        }
      }
      dispose() {
        if (this.kx) return;
        this.kx = !0, this.generation++, this.table = [];
        const QQ = [...this.sets.values()];
        this.sets.clear();
        let FQ = null;
        for (const LQ of QQ)
          for (const QQ of "ready" === LQ.state ? LQ.distinct : []) try {
            this.host.YLQ(QQ)
          } catch (wQ) {
            FQ ??= {
              error: wQ
            }
          }
        if (FQ) throw FQ.error
      }
      isReady(QQ) {
        var FQ;
        return "ready" === (null === (FQ = this.sets.get(QQ)) || void 0 === FQ ? void 0 : FQ.state)
      }
      want(QQ) {
        const FQ = this.sets.get(QQ);
        if ("loading" === (null === FQ || void 0 === FQ ? void 0 : FQ.state)) return FQ.wanted = !0, void this.capAnswer(QQ, FQ);
        if ("ready" === (null === FQ || void 0 === FQ ? void 0 : FQ.state)) return void this.host.sendReady(Jk(QQ, FQ.images, FQ.size));
        const wQ = this.table[QQ];
        if (!wQ || 1 !== wQ.urls.length && wQ.urls.length !== gw.mc.CubeFaces) return this.host.sendReady(Ek(QQ)), void this.host.onLoadFailed(QQ, "", new Error(`no image set ${QQ}`));
        const LQ = {
          state: "loading",
          wanted: !0
        };
        this.sets.set(QQ, LQ), this.load(QQ, wQ, LQ, this.generation, 0), this.capAnswer(QQ, LQ)
      }
      capAnswer(QQ, FQ) {
        this.host.wait(4e3, (() => {
          this.sets.get(QQ) === FQ && FQ.wanted && this.host.sendReady(Ek(QQ))
        }))
      }
      load(QQ, FQ, wQ, LQ, qQ) {
        const oQ = [...new Set(FQ.urls)];
        Promise.allSettled(oQ.map((QQ => this.host.loadImage(QQ, FQ.orientation)))).then((DQ => {
          const kQ = DQ.flatMap((QQ => "fulfilled" === QQ.status ? [QQ.value] : [])),
            vQ = LQ === this.generation && this.sets.get(QQ) === wQ,
            mQ = DQ.findIndex((QQ => "rejected" === QQ.status));
          if (!vQ || !wQ.wanted) return this.kx ? void this.releaseAfterDispose(kQ.map(hk)) : (this.releaseAll(kQ.map(hk)), void(vQ && this.sets.delete(QQ)));
          mQ < 0 ? this.loaded(QQ, FQ, oQ, kQ) : (this.releaseAll(kQ.map(hk)), this.host.sendReady(Ek(QQ)), qQ < fk.length ? this.host.wait(fk[qQ], (() => {
            LQ === this.generation && this.sets.get(QQ) === wQ && (wQ.wanted ? this.load(QQ, FQ, wQ, LQ, qQ + 1) : this.sets.delete(QQ))
          })) : (this.sets.delete(QQ), this.host.onLoadFailed(QQ, oQ[mQ], DQ[mQ].reason)))
        }))
      }
      loaded(QQ, FQ, wQ, LQ) {
        const [qQ] = LQ, oQ = [qQ.width, qQ.height], DQ = LQ.every((QQ => QQ.width === oQ[0] && QQ.height === oQ[1])), kQ = FQ.urls.length === gw.mc.CubeFaces;
        if (!DQ || oQ[0] <= 0 || oQ[1] <= 0 || oQ[0] > 65535 || oQ[1] > 65535 || kQ && oQ[0] !== oQ[1]) {
          this.releaseAll(LQ.map(hk)), this.sets.delete(QQ), this.host.sendReady(Ek(QQ));
          const wQ = LQ.map((QQ => `${QQ.width}x${QQ.height}`));
          return void this.host.onLoadFailed(QQ, FQ.urls[0], new Error(`set ${QQ}'s images can't make its texture: ${wQ.join(", ")}`))
        }
        const vQ = FQ.urls.map((QQ => LQ[wQ.indexOf(QQ)].id)),
          mQ = LQ.map(hk);
        this.sets.set(QQ, {
          state: "ready",
          images: vQ,
          distinct: mQ,
          size: oQ
        }), this.host.sendReady(Jk(QQ, vQ, oQ))
      }
      release(QQ) {
        const FQ = this.sets.get(QQ);
        "loading" === (null === FQ || void 0 === FQ ? void 0 : FQ.state) ? FQ.wanted = !1: "ready" === (null === FQ || void 0 === FQ ? void 0 : FQ.state) && (this.releaseAll(FQ.distinct), this.sets.delete(QQ))
      }
      releaseAll(QQ) {
        for (const FQ of QQ) this.host.YLQ(FQ)
      }
      releaseAfterDispose(QQ) {
        for (const FQ of QQ) try {
          this.host.YLQ(FQ)
        } catch {}
      }
    }

    function hk(QQ) {
      return QQ.id
    }

    function Jk(QQ, FQ, wQ) {
      const LQ = new Uint8Array(gw.mc.SkyImagesReadyBytes),
        qQ = new DataView(LQ.buffer);
      return qQ.setUint16(0, QQ, !0), qQ.setUint16(2, FQ.length, !0), qQ.setUint16(4, wQ[0], !0), qQ.setUint16(6, wQ[1], !0), FQ.slice(0, gw.mc.CubeFaces).forEach(((QQ, FQ) => {
        qQ.setUint32(8 + 4 * FQ, QQ, !0)
      })), LQ
    }

    function Ek(QQ) {
      const FQ = new Uint8Array(gw.mc.SkyImagesReadyBytes),
        wQ = new DataView(FQ.buffer);
      return wQ.setUint16(0, QQ, !0), wQ.setUint16(2, gw.mc.Failed, !0), FQ
    }
    let nk = Promise.resolve();
    async function gk(QQ, FQ) {
      let wQ;
      try {
        wQ = await (0, Xk.T)(QQ)
      } catch (oQ) {
        throw new jk.b("fetch", QQ, {
          cause: oQ
        })
      }
      const LQ = nk.then((() => async function(QQ, FQ) {
        const wQ = new Blob([QQ.slice()]);
        let LQ = await createImageBitmap(wQ, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: FQ
        });
        const qQ = 1024 / Math.max(LQ.width, LQ.height);
        if (qQ < 1) {
          const QQ = LQ;
          try {
            LQ = await createImageBitmap(QQ, {
              resizeWidth: Math.max(1, Math.round(QQ.width * qQ)),
              resizeHeight: Math.max(1, Math.round(QQ.height * qQ)),
              resizeQuality: "high",
              premultiplyAlpha: "none",
              colorSpaceConversion: "none"
            })
          } finally {
            QQ.close()
          }
        }
        return LQ
      }(wQ, FQ)));
      let qQ;
      nk = LQ.catch((() => {}));
      try {
        qQ = await LQ
      } catch (oQ) {
        throw new jk.b("decode", QQ, {
          cause: oQ
        })
      }
      return {
        id: (0, jk.i)(qQ),
        width: qQ.width,
        height: qQ.height
      }
    }
    var Pk = wQ(3047),
      Zk = wQ(33921),
      yk = wQ(38743);
    const Bk = Pk.g.length;

    function dk(QQ) {
      const FQ = [],
        wQ = [];
      Pk.g.forEach(((LQ, qQ) => {
        var oQ;
        const DQ = null !== (oQ = Qv(QQ[LQ])) && void 0 !== oQ ? oQ : Zk.k[LQ];
        if ("custom" === DQ.type) {
          wQ.push({
            id: qQ,
            kind: gw.mc.KindCustom,
            set: FQ.length,
            earth: null
          });
          const QQ = [DQ.px, DQ.py, DQ.pz, DQ.nx, DQ.ny, DQ.nz];
          FQ.push({
            urls: (0, yk.h)(QQ),
            orientation: "none"
          })
        } else wQ.push({
          id: qQ,
          kind: gw.mc.KindEarth,
          set: 0,
          earth: DQ
        })
      }));
      const LQ = Qv(QQ.earth);
      "earth" === (null === LQ || void 0 === LQ ? void 0 : LQ.type) && wQ.push({
        id: Bk,
        kind: gw.mc.KindEarth,
        set: 0,
        earth: LQ
      });
      const qQ = FQ.length;
      FQ.push({
        urls: Zk.e.map((QQ => Zk.g + QQ)),
        orientation: "none"
      }), FQ.push({
        urls: [Zk.h],
        orientation: "flipY"
      }), FQ.push({
        urls: [Zk.c],
        orientation: "flipY"
      });
      const oQ = new Uint8Array(gw.mc.SkyTableHeaderBytes + wQ.length * gw.mc.SkyTableEntryBytes),
        DQ = new DataView(oQ.buffer);
      return DQ.setUint16(0, qQ, !0), DQ.setUint16(2, qQ + 1, !0), DQ.setUint16(4, qQ + 2, !0), DQ.setUint16(6, wQ.length, !0), wQ.forEach(((QQ, FQ) => {
        const wQ = gw.mc.SkyTableHeaderBytes + FQ * gw.mc.SkyTableEntryBytes;
        DQ.setUint16(wQ, QQ.id, !0), DQ.setUint8(wQ + 2, QQ.kind);
        const LQ = wQ + 4;
        QQ.earth ? function(QQ, FQ, wQ) {
          const LQ = QQ;
          let qQ = 0,
            oQ = 0;
          for (const [DQ, kQ] of Fv) {
            const QQ = LQ[DQ];
            "number" === typeof QQ && Number.isFinite(QQ) && (FQ.setFloat32(wQ + 4 * kQ, QQ, !0), qQ |= 1 << kQ)
          }
          for (const [DQ, kQ, vQ] of wv) {
            const QQ = LQ[DQ];
            Array.isArray(QQ) && 3 === QQ.length && QQ.every((QQ => "number" === typeof QQ && Number.isFinite(QQ))) && (QQ.forEach(((QQ, LQ) => {
              FQ.setFloat32(wQ + vQ + 4 * LQ, QQ, !0)
            })), qQ |= kQ)
          }
          Lv.forEach(((QQ, oQ) => {
            let [DQ, kQ] = QQ;
            const vQ = LQ[DQ];
            "number" === typeof vQ && Number.isFinite(vQ) && (FQ.setFloat32(wQ + gw.n.CameraOffsetAt + 4 * oQ, vQ, !0), qQ |= kQ)
          }));
          for (const [DQ, kQ] of qv) {
            const QQ = LQ[DQ];
            null !== QQ && void 0 !== QQ && (qQ |= kQ, QQ && (oQ |= kQ >>> 14))
          }
          FQ.setUint32(wQ + gw.n.PresentAt, qQ, !0), FQ.setUint8(wQ + gw.n.FlagsAt, oQ)
        }(QQ.earth, DQ, LQ) : DQ.setUint16(LQ, QQ.set, !0)
      })), {
        payload: oQ,
        sets: FQ
      }
    }

    function Qv(QQ) {
      if ("object" !== typeof QQ || null === QQ) return null;
      const FQ = QQ;
      if ("earth" === FQ.type) return QQ;
      return "custom" === FQ.type && ["px", "py", "pz", "nx", "ny", "nz"].every((QQ => {
        const wQ = FQ[QQ];
        return "string" === typeof wQ && wQ.length > 0
      })) ? QQ : null
    }
    const Fv = [
        ["inclination", gw.n.Inclination],
        ["turbidity", gw.n.Turbidity],
        ["luminance", gw.n.Luminance],
        ["rayleigh", gw.n.Rayleigh],
        ["mieCoefficient", gw.n.MieCoefficient],
        ["mieDirectionalG", gw.n.MieDirectionalG],
        ["distance", gw.n.Distance],
        ["azimuth", gw.n.Azimuth]
      ],
      wv = [
        ["sunPosition", gw.n.SunPosition, gw.n.SunPositionAt],
        ["up", gw.n.Up, gw.n.UpAt],
        ["vertexTint", gw.n.VertexTint, gw.n.VertexTintAt]
      ],
      Lv = [
        ["xCameraOffset", gw.n.CameraOffsetX],
        ["yCameraOffset", gw.n.CameraOffsetY],
        ["zCameraOffset", gw.n.CameraOffsetZ]
      ],
      qv = [
        ["useSunPosition", gw.n.UseSunPosition],
        ["dithering", gw.n.Dithering],
        ["infiniteDistance", gw.n.InfiniteDistance]
      ];

    function ov(QQ, FQ, wQ) {
      const LQ = new kv({
        writeCmd: QQ,
        warn: FQ,
        followPack: Dv(wQ, FQ)
      });
      return LQ.start(), LQ
    }

    function Dv(QQ, FQ) {
      return wQ => {
        let LQ = () => {};
        const qQ = QQ((QQ => {
          LQ(), LQ = () => {}, null !== QQ ? LQ = QQ.subscribe((QQ => {
            wQ(function(QQ, FQ, wQ) {
              if ("object" !== typeof QQ || null === QQ) return null;
              const LQ = QQ.skyBoxes;
              if ("object" !== typeof LQ || null === LQ) return null;
              if ("player" === FQ) return LQ;
              return Object.fromEntries(Object.entries(LQ).filter((QQ => {
                let [FQ, LQ] = QQ;
                return !! function(QQ) {
                  if ("object" !== typeof QQ || null === QQ) return !1;
                  return "earth" === QQ.type || Object.entries(QQ).every((QQ => {
                    let [FQ, wQ] = QQ;
                    return "type" === FQ || ("" === (LQ = wQ) || null !== function(QQ) {
                      var FQ, wQ, LQ;
                      return "string" !== typeof QQ ? null : null !== (FQ = null === (wQ = vv.exec(QQ)) || void 0 === wQ || null === (LQ = wQ.groups) || void 0 === LQ ? void 0 : LQ.base64) && void 0 !== FQ ? FQ : null
                    }(LQ));
                    var LQ
                  }))
                }(LQ) || (wQ(`Ignoring texture pack skybox ${FQ}, whose faces are not all data URLs`, null), !1)
              })))
            }(QQ.pack, null === QQ.gameSource ? "player" : "customGame", FQ))
          })) : wQ(null)
        }));
        return () => {
          qQ(), LQ()
        }
      }
    }
    class kv {
      constructor(QQ) {
        var FQ, wQ, LQ;
        this.host = QQ, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.kx = !1, this.wait = null !== (FQ = QQ.wait) && void 0 !== FQ ? FQ : (QQ, FQ) => {
          setTimeout(FQ, QQ)
        }, this.loader = new Vk({
          loadImage: null !== (wQ = QQ.loadImage) && void 0 !== wQ ? wQ : gk,
          YLQ: null !== (LQ = QQ.YLQ) && void 0 !== LQ ? LQ : jk.m,
          sendReady: QQ => {
            this.queue.push({
              kind: gw.mc.SkyImagesReady,
              payload: QQ
            })
          },
          onLoadFailed: (FQ, wQ, LQ) => {
            QQ.warn(`sky image set ${FQ} (${wQ}) didn't load: the last sky stays`, LQ)
          },
          wait: this.wait
        })
      }
      start() {
        this.wait(ak.e, (() => {
          null === this.written && this.write({})
        })), this.stopFollowing = this.host.followPack((QQ => {
          this.write(null !== QQ && void 0 !== QQ ? QQ : {})
        }))
      }
      onEvent(QQ) {
        this.loader.onEvent(QQ)
      }
      drain() {
        if (0 === this.queue.length) return;
        let QQ = 0;
        for (; QQ < this.queue.length && this.host.writeCmd(this.queue[QQ].kind, 0, this.queue[QQ].payload);) QQ++;
        QQ > 0 && this.queue.splice(0, QQ)
      }
      dispose() {
        this.kx = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
      }
      write(QQ) {
        if (this.kx) return;
        const FQ = dk(QQ);
        var wQ, LQ;
        this.written && (wQ = this.written, LQ = FQ, wQ.payload.length === LQ.payload.length && wQ.payload.every(((QQ, FQ) => QQ === LQ.payload[FQ])) && wQ.sets.length === LQ.sets.length && wQ.sets.every(((QQ, FQ) => {
          const wQ = LQ.sets[FQ];
          return QQ.orientation === wQ.orientation && QQ.urls.length === wQ.urls.length && QQ.urls.every(((QQ, FQ) => QQ === wQ.urls[FQ]))
        }))) || (this.written = FQ, this.loader.reset(FQ.sets), this.queue = this.queue.filter((QQ => QQ.kind !== gw.mc.SkyImagesReady)), this.queue.push({
          kind: gw.mc.SkyTable,
          payload: FQ.payload
        }))
      }
    }
    const vv = /^data:[\w.+/-]*;base64,(?<base64>[A-Za-z0-9+/]*={0,2})$/;
    var mv = wQ(2726),
      uv = wQ(2895),
      Hv = wQ(297),
      bv = wQ(181),
      Yv = wQ(2734),
      xv = wQ(2741),
      Av = wQ(268),
      tv = wQ(273),
      ev = wQ(2828),
      Mv = wQ(2847),
      Gv = wQ(2857),
      pv = wQ(114),
      cv = wQ(282),
      Cv = wQ(40254);
    class Sv {
      constructor() {
        this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, fq.h)(GL.N, (QQ => {
          this.onReply((0, Xq.h)(GL.N, QQ), performance.now())
        }))
      }
      onFrame(QQ, FQ) {
        null === this.id ? this.id = QQ : QQ !== this.id && (this.id = QQ, this.sentMs = document.hidden ? null : FQ)
      }
      onVisibilityChange() {
        this.sentMs = null
      }
      onReply(QQ, FQ) {
        QQ === this.id && null !== this.sentMs && (this.roundTripMs = Math.round(FQ - this.sentMs), this.sentMs = null)
      }
      take() {
        const QQ = this.roundTripMs;
        return this.roundTripMs = null, QQ
      }
      stop() {
        this.stopReplies()
      }
    }
    class iv {
      constructor() {
        this.sampled = 0, this.timed = 0, this.frameUs = 0, this.primed = !1, this.windowTimed = 0, this.windowUs = 0
      }
      onFrame(QQ, FQ, wQ, LQ) {
        const qQ = QQ - this.sampled >>> 0,
          oQ = FQ - this.timed >>> 0,
          DQ = wQ - this.frameUs >>> 0,
          kQ = this.primed;
        return this.sampled = QQ, this.timed = FQ, this.frameUs = wQ, this.primed = !0, !(!kQ || qQ > 64 || oQ > 64) && (LQ && DQ <= 1e6 * oQ && (this.windowTimed += oQ, this.windowUs += DQ), LQ && qQ > 0)
      }
      reset() {}
      snapshotAndReset() {
        const QQ = this.windowTimed > 0 ? this.windowUs / this.windowTimed / 1e3 : null;
        return this.windowTimed = 0, this.windowUs = 0, {
          passMs: QQ,
          submitToDoneMs: null
        }
      }
    }
    const Wv = {
      pacedShare: null,
      switchesPerHour: null,
      lagP50Ms: null,
      lagP90Ms: null,
      joinLagP90Ms: null
    };
    class Rv {
      constructor() {
        this.samples = new Float64Array(4096), this.count = 0
      }
      add(QQ, FQ) {
        const wQ = Math.min(4096, this.count + FQ);
        this.samples.fill(QQ, this.count, wQ), this.count = wQ
      }
      clear() {
        this.count = 0
      }
      take(QQ) {
        const FQ = this.count;
        if (this.count = 0, FQ < 30) return null;
        const wQ = this.samples.subarray(0, FQ).sort();
        return QQ.map((QQ => wQ[Math.min(FQ - 1, Math.floor(QQ * FQ))]))
      }
    }
    class Ov {
      constructor() {
        this.word = 0, this.lagUs = 0, this.primed = !1, this.lastDrawnMs = -1, this.tieredMs = 0, this.pacedMs = 0, this.switches = 0, this.lags = new Rv, this.inJoin = !1, this.rose = !1, this.joinLags = new Rv, this.joinLagP90Ms = null
      }
      onFrame(QQ, FQ, wQ, LQ, qQ) {
        const oQ = QQ.headerWord(gw.F.Pacing),
          DQ = QQ.headerWord(gw.F.PacingLagUs),
          kQ = (oQ >>> gw.ab.LagsShift) - (this.word >>> gw.ab.LagsShift) & gw.ab.CountMask,
          vQ = (oQ >>> gw.ab.SwitchesShift) - (this.word >>> gw.ab.SwitchesShift) & gw.ab.CountMask,
          mQ = kQ > 0 ? (DQ - this.lagUs >>> 0) / kQ / 1e3 : 0,
          uQ = this.primed && kQ <= 64 && vQ <= 2 && mQ <= 6e4;
        if (this.rose = 0 !== (oQ & ~this.word & gw.ab.Joining), this.word = oQ, this.lagUs = DQ, this.primed = !0, 0 !== (oQ & gw.ab.Tiered)) {
          if (0 !== (oQ & gw.ab.Joining)) this.rose && (this.inJoin = !0, this.joinLags.clear()), this.inJoin && uQ && LQ && kQ > 0 && this.joinLags.add(mQ, kQ);
          else if (this.inJoin) {
            var HQ, bQ;
            this.inJoin = !1, this.joinLagP90Ms = null !== (HQ = null === (bQ = this.joinLags.take([.9])) || void 0 === bQ ? void 0 : bQ[0]) && void 0 !== HQ ? HQ : null
          }
          if (qQ) {
            if (uQ && (this.switches += vQ, kQ > 0 && this.lags.add(mQ, kQ)), wQ) {
              if (this.lastDrawnMs >= 0 && FQ - this.lastDrawnMs <= 250) {
                const QQ = FQ - this.lastDrawnMs;
                this.tieredMs += QQ, (oQ & gw.ab.AheadMask) > 0 && (this.pacedMs += QQ)
              }
              this.lastDrawnMs = FQ
            }
          } else this.lastDrawnMs = -1
        } else this.lastDrawnMs = -1
      }
      onJoin() {
        this.takeWindow(), this.rose || (this.inJoin = !1, this.joinLags.clear()), this.lastDrawnMs = -1
      }
      snapshotAndReset(QQ) {
        const FQ = this.takeWindow(),
          wQ = this.joinLagP90Ms;
        return this.joinLagP90Ms = null, QQ ? {
          ...FQ,
          joinLagP90Ms: wQ
        } : {
          ...Wv,
          joinLagP90Ms: wQ
        }
      }
      unsent(QQ) {
        this.joinLagP90Ms ??= QQ.joinLagP90Ms
      }
      takeWindow() {
        var QQ, FQ;
        const wQ = this.tieredMs >= 2e3,
          LQ = this.lags.take([.5, .9]),
          qQ = {
            pacedShare: wQ ? this.pacedMs / this.tieredMs : null,
            switchesPerHour: wQ ? 36e5 * this.switches / this.tieredMs : null,
            lagP50Ms: null !== (QQ = null === LQ || void 0 === LQ ? void 0 : LQ[0]) && void 0 !== QQ ? QQ : null,
            lagP90Ms: null !== (FQ = null === LQ || void 0 === LQ ? void 0 : LQ[1]) && void 0 !== FQ ? FQ : null
          };
        return this.tieredMs = 0, this.pacedMs = 0, this.switches = 0, qQ
      }
    }
    var sv = wQ(9017),
      rv = wQ(2706),
      Iv = wQ(40332),
      Uv = wQ(9013),
      Nv = wQ(2748),
      Tv = wQ(2723);
    const Kv = {
      none: !0,
      not_requested: !1,
      webgl_holdback: !1,
      off_after_loss: !1,
      old_intel_driver: !1,
      intel_gen9: !1,
      gpu_class_webgl: !1,
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

    function zv(QQ) {
      return new lv(QQ)
    }
    class lv {
      constructor(QQ) {
        this.shell = QQ, this.tracker = new xv.b, this.gpu = new iv, this.pacing = new Ov, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.fpsOverTime = null, this.firstSpanFps = null, this.initialFps = null, this.ping = new Sv, this.pacedCpuMs = 0, this.frameDebug = null, this.lastDrawnMs = -1, this.stallPending = !1, this.onVisibility = () => {
          this.tracker.onVisibilityChange(), this.ping.onVisibilityChange(), this.lastDrawnMs = -1, !document.hidden && this.fpsSpanStartMs >= 0 && (this.fpsFrames = 0, this.fpsSpanStartMs = performance.now())
        }, this.onBeforeUnload = () => {
          this.checkMainStall(performance.now()), this.lastDrawnMs = -1
        }, (0, sv.d)(QQ.backend, QQ.canvas, QQ.adapterVendor), this.tracker.start((() => !QQ.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, Nv.d)("wasm", (() => {
          const {
            n: FQ,
            sampleCount: wQ
          } = (0, Iv.f)();
          return `${QQ.backend}, quality steps aim at up to ${Tv.b.target.maxFps} fps, pixel n ${FQ}, msaa ${wQ}`
        }), (FQ => {
          FQ.setLoadCounts(QQ.readLoadCounts), this.frameDebug = FQ
        })), this.timers.push(setInterval((() => {
          this.flush(), this.fpsOverTime = null, this.initialFps = null
        }), 1e4), setInterval((() => {
          this.followGame() && (this.hasFlushedSinceConnect || (this.flush(), this.hasFlushedSinceConnect = !0))
        }), 250))
      }
      animationFrame(QQ) {
        var FQ;
        this.tracker.onAnimationFrame(QQ), null === (FQ = this.frameDebug) || void 0 === FQ || FQ.animationFrame()
      }
      frameRan(QQ, FQ, wQ, LQ) {
        var qQ;
        this.ping.onFrame(QQ.headerWord(gw.F.PingSent), wQ);
        const oQ = this.tracker;
        this.pacing.onFrame(QQ, FQ, "drawn" === LQ, !document.hidden, oQ.isSampling());
        const DQ = QQ.headerWord(gw.F.TickUs) / 1e3 + (0, qL.I)();
        var kQ;
        (oQ.nG(DQ), null === (qQ = this.frameDebug) || void 0 === qQ || qQ.wasmFrame(QQ, FQ, wQ, LQ, oQ.isSampling(), DQ), null !== this.game) && (null === (kQ = this.frameDebug) || void 0 === kQ || kQ.inGame());
        const vQ = Math.max(0, wQ - FQ - DQ);
        if ("drawn" !== LQ) return void("paced" === LQ ? this.pacedCpuMs += vQ : "skipped" === LQ && (this.lastDrawnMs = -1));
        this.followGame(), this.checkMainStall(FQ), oQ.onFrameStart(FQ);
        this.gpu.onFrame(QQ.headerWord(gw.F.GpuSampled), QQ.headerWord(gw.F.GpuTimed), QQ.headerWord(gw.F.GpuFrameUs), oQ.isSampling()) && oQ.onGpuSampleStarted(), oQ.onFrameCpu(vQ + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(FQ)
      }
      framePaced() {
        var QQ;
        null === (QQ = this.frameDebug) || void 0 === QQ || QQ.wasmPeekPaced(this.tracker.isSampling())
      }
      stop() {
        for (const QQ of this.timers) clearInterval(QQ);
        this.timers.length = 0, document.removeEventListener("visibilitychange", this.onVisibility), window.removeEventListener("beforeunload", this.onBeforeUnload), this.ping.stop()
      }
      followGame() {
        const QQ = this.shell.joinedGame();
        if (QQ !== this.game) {
          var FQ;
          if (this.game = QQ, null !== QQ) null === (FQ = this.frameDebug) || void 0 === FQ || FQ.joined();
          this.tracker.snapshotAndReset(), this.pacing.onJoin(), this.hasFlushedSinceConnect = !1, this.inGameAtLastFlush = !1, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.pacedCpuMs = 0, this.firstSpanFps = null, this.fpsOverTime = null, this.initialFps = null, this.lastDrawnMs = -1
        }
        return null !== QQ
      }
      checkMainStall(QQ) {
        if (!this.tracker.isSampling()) return void(this.lastDrawnMs = -1);
        const FQ = this.tracker.limiterTelemetry.longAnimationFrameTracker,
          wQ = this.lastDrawnMs < 0 ? 0 : QQ - this.lastDrawnMs;
        this.lastDrawnMs = QQ, this.stallPending || (wQ <= 5e3 ? FQ.markFrame(QQ) : (this.stallPending = !0, setTimeout((() => {
          this.stallPending = !1, this.shell.mainStalled(wQ, FQ.blockingSinceMark())
        }), 0)))
      }
      countFpsFrame(QQ) {
        if (this.fpsSpanStartMs < 0) {
          if (!this.shell.inGame()) return;
          this.fpsSpanStartMs = QQ
        }
        this.fpsFrames++;
        const FQ = QQ - this.fpsSpanStartMs;
        if (!(FQ < Gv.e)) {
          if (!document.hidden) {
            const QQ = 1e3 * this.fpsFrames / FQ;
            this.firstSpanFps ??= QQ, this.initialFps = this.firstSpanFps, this.fpsOverTime = QQ
          }
          this.fpsFrames = 0, this.fpsSpanStartMs = QQ
        }
      }
      flush() {
        const QQ = this.followGame(),
          {
            cpuFrameMs: FQ,
            refreshHz: wQ,
            cpuBottleneck: qQ,
            frameIntervalCv: oQ,
            ...DQ
          } = this.tracker.snapshotAndReset(),
          kQ = this.shell.inGame(),
          vQ = kQ && this.inGameAtLastFlush,
          mQ = vQ ? DQ : Yv.d,
          uQ = this.pacing.snapshotAndReset(vQ);
        if (this.inGameAtLastFlush = kQ, this.pendingLightFailures += this.shell.takeFailedMeshJobs(), !QQ) return void this.pacing.unsent(uQ);
        const HQ = performance.now(),
          YQ = (0, Mv.p)((0, Mv.o)(HQ), this.unsentPage),
          AQ = function(QQ, FQ, wQ, qQ, oQ, DQ, kQ, vQ) {
            var mQ, uQ, HQ, bQ;
            const YQ = {},
              {
                canvas: xQ
              } = QQ,
              AQ = (0, ev.d)({
                refreshHz: FQ.refreshHz,
                msaa: QQ.msaa(),
                autoMsaaOff: (0, Uv.c)()
              });
            for (const tQ of (0, uv.h)()) {
              const eQ = tQ.name;
              let MQ;
              if ((0, Hv.n)(eQ)) MQ = (0, Mv.b)(eQ);
              else if ((0, Mv.i)(eQ)) MQ = vQ[eQ];
              else if ((0, ev.f)(eQ)) MQ = AQ[eQ];
              else switch (eQ) {
                case "fps":
                  MQ = qQ;
                  break;
                case "XD":
                  MQ = oQ;
                  break;
                case "ED":
                  MQ = (0, rv.u)((0, Iv.f)().n);
                  break;
                case "nD":
                  MQ = Math.max(xQ.width, xQ.height);
                  break;
                case "gD":
                  MQ = Math.min(xQ.width, xQ.height);
                  break;
                case "PD":
                  MQ = navigator.hardwareConcurrency || null;
                  break;
                case "ZD":
                  MQ = (0, gq.getWebGpuSupported)();
                  break;
                case "yD":
                  MQ = null === QQ.fallbackReason ? null : Kv[QQ.fallbackReason];
                  break;
                case "BD":
                  MQ = FQ.cpuFrameMs;
                  break;
                case "dD":
                  MQ = FQ.refreshHz;
                  break;
                case "Qk":
                  MQ = FQ.cpuBottleneck;
                  break;
                case "Fk":
                  MQ = FQ.frameIntervalCv;
                  break;
                case "wk":
                  MQ = FQ.frameMs;
                  break;
                case "Lk":
                  MQ = FQ.tickMs;
                  break;
                case "vk":
                  MQ = FQ.mainBusyShare;
                  break;
                case "mk":
                  MQ = FQ.mainProbeDelayMs;
                  break;
                case "qk":
                  MQ = FQ.longAnimationFramesPerMin;
                  break;
                case "Dk":
                  MQ = FQ.longAnimationFrameTimeShare;
                  break;
                case "kk":
                  MQ = FQ.longAnimationFrameScriptShare;
                  break;
                case "uk":
                  MQ = FQ.gpuPassMs;
                  break;
                case "Hk":
                  MQ = FQ.gpuSubmitToDoneMs;
                  break;
                case "bk":
                  MQ = wQ.pacedShare;
                  break;
                case "Yk":
                  MQ = wQ.switchesPerHour;
                  break;
                case "xk":
                  MQ = wQ.lagP50Ms;
                  break;
                case "Ak":
                  MQ = wQ.lagP90Ms;
                  break;
                case "tk":
                  MQ = wQ.joinLagP90Ms;
                  break;
                case "Uk":
                  MQ = (0, mv.g)(DQ);
                  break;
                case "JD":
                  MQ = kQ;
                  break;
                case "Mk":
                case "Gk":
                case "Ck":
                case "Sk":
                case "ik":
                case "Wk":
                case "Rk":
                case "Ok":
                case "sk":
                case "rk":
                case "Ik":
                case "Nk":
                case "Tk":
                case "Kk":
                case "zk":
                  MQ = null;
                  break;
                case "Zk":
                  MQ = (0, gq.getPlatformType)();
                  break;
                case "yk":
                  MQ = (0, gq.getGpuVendor)();
                  break;
                case "Bk":
                  MQ = Cv.b[QQ.backend];
                  break;
                case "Qv":
                  MQ = (0, pv.e)();
                  break;
                case "Fv":
                  MQ = (0, gq.getOperatingSystem)();
                  break;
                case "wv":
                  MQ = (0, gq.getTrafficSource)();
                  break;
                case "Lv":
                  MQ = null !== (mQ = LQ.c.get("gameEntrySource")) && void 0 !== mQ ? mQ : bv.e;
                  break;
                case "qv":
                  MQ = FQ.frameLimiter;
                  break;
                case "ov":
                  MQ = (0, Av.k)();
                  break;
                case "Dv":
                  MQ = null !== (uQ = (0, tv.e)()) && void 0 !== uQ ? uQ : bv.e;
                  break;
                case "kv":
                  MQ = (0, Av.e)(xQ.width, xQ.height);
                  break;
                case "vv":
                  MQ = (0, uv.i)(-(new Date).getTimezoneOffset());
                  break;
                case "bv":
                  MQ = null !== (HQ = QQ.fallbackReason) && void 0 !== HQ ? HQ : bv.e;
                  break;
                case "Av":
                  MQ = "ready";
                  break;
                case "tv":
                  MQ = (0, gq.getSoftwareRenderer)();
                  break;
                case "Hv":
                  MQ = null !== QQ.shaderPackReach() ? "true" : "false";
                  break;
                case "ev":
                  MQ = null !== (bQ = QQ.shaderPackReach()) && void 0 !== bQ && bQ.sceneDepth ? "true" : "false";
                  break;
                case "Mv": {
                  const FQ = QQ.shaderPackReach();
                  MQ = null !== FQ && void 0 !== FQ && FQ.sunShadow ? "all" : null !== FQ && void 0 !== FQ && FQ.airShadow ? "air" : "none";
                  break
                }
                case "Gv":
                  MQ = cv.t;
                  break;
                case "mv":
                case "Yv":
                case "xv":
                  MQ = bv.e;
                  break;
                default:
                  throw new Error(`Unhandled field name: ${eQ}`)
              }
              if (void 0 === MQ) throw new Error(`Metric ${eQ} has no value`);
              YQ[eQ] = MQ
            }
            return YQ
          }(this.shell, {
            cpuFrameMs: FQ,
            refreshHz: wQ,
            cpuBottleneck: qQ,
            frameIntervalCv: oQ,
            ...mQ
          }, uQ, this.fpsOverTime, this.initialFps, this.pendingLightFailures, this.ping.take(), YQ);
        if (! function(QQ, FQ, wQ) {
            return (0, JF.d)(), QQ(xQ.m.Send, FQ, wQ)
          }(this.shell.writeCmd, bQ.Xc, function(QQ) {
            const FQ = (0, zQ.f)((0, gF.f)(QQ)),
              wQ = new Uint8Array(xQ.Td.BYTES + FQ.length);
            return new DataView(wQ.buffer).setUint16(0, gF.b.AnalyticsUpdate, !0), wQ.set(FQ, xQ.Td.BYTES), wQ
          }(AQ))) return this.unsentPage = YQ, this.pacing.unsent(uQ), void(0 === this.sendsDropped++ && console.warn("[wasm-client] an analytics update found the cmd ring full: dropped"));
        this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, mv.f), (0, Mv.l)(AQ, "wasm", HQ)
      }
    }
    var jv = wQ(39133);

    function av(QQ, FQ, wQ) {
      const LQ = new Map;
      return (0, jv.c)(((QQ, wQ, LQ) => FQ.um(QQ, wQ, LQ)), ((FQ, wQ, qQ) => {
        const oQ = `${FQ},${wQ},${qQ}`;
        return LQ.has(oQ) || LQ.set(oQ, (0, jF.d)(QQ, FQ, wQ, qQ)), LQ.get(oQ)
      }), wQ)
    }
    var Xv = wQ(39139),
      fv = wQ(40145);

    function Vv(QQ) {
      const FQ = null !== QQ && 0 !== (xQ.v.playerFlags(QQ.api.apiView, 0) & xQ.Gd.CursorAim);
      FQ !== (0, fv.k)() && (0, fv.E)(FQ, null !== QQ)
    }

    function hv(QQ) {
      return (0, ML.e)(GL.D, QQ)
    }
    var Jv = wQ(40169);
    const Ev = new oQ.f((QQ => wQ(41976)(`./${QQ}/${QQ}Client`)));
    let nv = null,
      gv = null;
    async function Pv(QQ) {
      nv ??= wQ.e(27).then((() => wQ(38675))).then((QQ => {
        gv = QQ.createDefaultClientPlugins
      }), (QQ => {
        throw nv = null, QQ
      })), await Promise.all([Ev.load(QQ), nv])
    }

    function Zv(QQ) {
      QQ.load(new KF(EL, new PL))
    }
    let yv = !1;
    const Bv = new WeakMap;

    function dv(QQ) {
      try {
        QQ()
      } catch (FQ) {
        console.error("[bloxd-wasm-client] a session-end step failed", FQ)
      }
    }

    function Qm(QQ, FQ) {
      ! function() {
        var QQ, FQ;
        VL.Howler.volume();
        const wQ = VL.Howler;
        null === (QQ = wQ._autoResume) || void 0 === QQ || QQ.call(wQ), null === (FQ = wQ._autoSuspend) || void 0 === FQ || FQ.call(wQ)
      }(), FQ.audio.prepare();
      const wQ = new pQ(FQ.core, FQ.memory, FQ.audio);
      let oQ;
      try {
        oQ = new tq(wQ, FQ.options)
      } catch (bQ) {
        return QQ.crash(Mq.y, bQ), null
      }(0, vQ.i)(eq(wQ, oQ));
      const uQ = new Rk({
        running: QQ,
        api: wQ,
        core: FQ.core,
        memory: FQ.memory,
        staleOr: FQ.staleOr,
        reportFault: FQ.reportReplayFault,
        options: FQ.options,
        sessionInfo: FQ.sessionInfo,
        replayShaderPack: FQ.replayShaderPack
      });
      (0, qL.A)();
      const HQ = new zL({
        api: wQ,
        tables: oQ,
        sessionInfo: FQ.sessionInfo,
        gameFactory: QQ => Ev.loadedFactory(QQ),
        defaultPlugins: (QQ, FQ, wQ, LQ) => {
          if (null === gv) throw new Error("The default plugins started before they loaded");
          return gv(QQ, FQ, wQ, LQ)
        },
        serverOptions: FQ.options,
        onNetEvent: QQ => {
          uQ.netEvent(QQ), FQ.onNetEvent(QQ)
        },
        setLocalOptions: FQ => {
          sk(QQ, {
            changes: FQ,
            reset: !1
          })
        },
        playSound: (QQ, wQ, LQ, qQ, oQ, DQ, kQ) => FQ.audio.playGame(QQ, wQ, LQ, qQ, oQ, DQ, kQ),
        preloadSounds: QQ => {
          FQ.audio.preload(function(QQ) {
            const FQ = [];
            for (const wQ of QQ) {
              const QQ = NF(wQ);
              QQ >= 0 && FQ.push(MF[QQ])
            }
            return FQ
          }(QQ))
        },
        onSessionEnd: () => {
          dv(qQ.q), dv(wq), dv((() => {
            LQ.c.set({
              openInGameMenuName: null
            })
          })), dv((() => {
            FQ.audio.endSession()
          }))
        },
        beforeWrite: FQ.beforeWrite,
        beforeOp: FQ.beforeOp,
        cameraScreen: Fq,
        showCameraFacing: Lq,
        onEventOverflow: FQ.onEventOverflow,
        screenBandY: kQ.k,
        replayEntities: uQ.entityHooks,
        hasPackModel: FQ.hasPackModel
      });
      return HQ.attach(QQ), Bv.set(HQ, uQ), XL(HQ.items, FQ.audio),
        function(QQ) {
          QQ.setClientFreeCameraGrant("isDev", !1);
          const FQ = FQ => {
            QQ.setClientFreeCameraGrant("hasDeveloperRank", FQ.playerHasRank("developer"))
          };
          (0, DQ.o)("userContextUpdated", FQ)
        }(HQ), yv || (yv = !0, (0, DQ.o)("appManagerUpdated|openInGameMenuName", (QQ => {
          !QQ && (0, mQ.k)().includes(mQ.d) && (0, mQ.l)(mQ.d)
        }))), HQ
    }

    function Fm(QQ) {
      try {
        QQ.closeGame()
      } finally {
        var FQ;
        null === (FQ = Bv.get(QQ)) || void 0 === FQ || FQ.stop(), Bv.delete(QQ)
      }
    }
  },
  40254: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => LQ
    });
    const LQ = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  40262: (QQ, FQ, wQ) => {
    function LQ() {
      return wQ(40264)
    }

    function qQ() {
      return wQ(40268)
    }

    function oQ(QQ) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(QQ)
    }
    wQ.d(FQ, {
      c: () => oQ,
      d: () => LQ,
      e: () => qQ
    })
  },
  35943: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => kQ,
      e: () => mQ,
      h: () => DQ,
      k: () => HQ
    });
    var LQ = wQ(35929),
      qQ = wQ(5);
    const oQ = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function DQ(QQ) {
      if (QQ instanceof WebAssembly.RuntimeError) return !0;
      const FQ = QQ instanceof Error ? QQ.stack : void 0;
      return "string" === typeof FQ && oQ.test(FQ)
    }

    function kQ(QQ, FQ, wQ) {
      var qQ;
      const DQ = QQ instanceof Error ? QQ.name : "thrown",
        kQ = (QQ instanceof Error && null !== (qQ = QQ.stack) && void 0 !== qQ ? qQ : "").split("\n").filter((QQ => oQ.test(QQ))).slice(0, 8).map((QQ => QQ.trim())),
        vQ = null === FQ ? "wasm memory unknown" : `wasm memory ${Math.round(FQ/2**20)} MB`,
        mQ = null === wQ.panic ? "" : `, panic: ${(0,LQ.k)(wQ.panic)}`,
        uQ = `${DQ}: ${QQ instanceof Error?QQ.message:String(QQ)}`;
      return `${(0,LQ.o)(wQ.kind,wQ.refusedBytes)} ${uQ} (${vQ})${mQ}${kQ.length>0?` | ${kQ.join(" < ")}`:""}`
    }
    const vQ = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function mQ(QQ) {
      var FQ;
      let wQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(QQ instanceof Error) || !vQ.test(QQ.message)) return {};
      if (!("detached" in wQ)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, qQ.P)(null === (FQ = (0, qQ.K)(wQ, "detached")) || void 0 === FQ ? void 0 : FQ.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const uQ = 500;

    function HQ(QQ) {
      let FQ = "[object Object]";
      try {
        FQ = String(QQ)
      } catch {}
      if ("[object Object]" !== FQ) return FQ;
      try {
        var wQ, LQ;
        return null !== (wQ = null === (LQ = JSON.stringify(QQ)) || void 0 === LQ ? void 0 : LQ.slice(0, uQ)) && void 0 !== wQ ? wQ : FQ
      } catch {
        return FQ
      }
    }
  },
  41976: (QQ, FQ, wQ) => {
    var LQ = {
      "./bedwars/bedwarsClient": [38795, 9],
      "./bridgeBattle/bridgeBattleClient": [38802, 10],
      "./buildAFactory2/buildAFactory2Client": [38018, 73, 72, 71, 220, 237, 11],
      "./classic/classicClient": [38806, 12],
      "./clutch/clutchClient": [38813, 13],
      "./containmentBreach/containmentBreachClient": [38815, 14],
      "./cooking/cookingClient": [38931, 15],
      "./defusal/defusalClient": [38940, 16],
      "./frontline/frontlineClient": [38945, 73, 72, 71, 17],
      "./goalRush/goalRushClient": [38951, 18],
      "./luckyBedwars/luckyBedwarsClient": [38955, 19],
      "./ninetyNineNights/ninetyNineNightsClient": [38958, 20],
      "./oneBlock/oneBlockClient": [38964, 21],
      "./plots/plotsClient": [38973, 236, 240, 22],
      "./pvpCiv/pvpCivClient": [39056, 23],
      "./skyIslands/skyIslandsClient": [39065, 24],
      "./skyblock/skyblockClient": [38053, 73, 220, 191, 25],
      "./tsunami/tsunamiClient": [39069, 26]
    };

    function qQ(QQ) {
      if (!wQ.o(LQ, QQ)) return Promise.resolve().then((() => {
        var FQ = new Error("Cannot find module '" + QQ + "'");
        throw FQ.code = "MODULE_NOT_FOUND", FQ
      }));
      var FQ = LQ[QQ],
        qQ = FQ[0];
      return Promise.all(FQ.slice(1).map(wQ.e)).then((() => wQ(qQ)))
    }
    qQ.keys = () => Object.keys(LQ), qQ.id = 41976, QQ.exports = qQ
  },
  40264: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  40268: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  },
  35929: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => LQ,
      g: () => oQ,
      k: () => vQ,
      m: () => DQ,
      o: () => qQ
    });
    const LQ = /^alloc_failed (\d+) bytes$/;

    function qQ(QQ, FQ) {
      return oQ(QQ, FQ) ? `trap=alloc_failed ${FQ} bytes` : `trap=${QQ}`
    }

    function oQ(QQ, FQ) {
      return "unreachable" === QQ && FQ > 0
    }

    function DQ(QQ, FQ, wQ) {
      const LQ = function(QQ) {
        return QQ instanceof WebAssembly.RuntimeError ? /unreachable/i.test(QQ.message) ? "unreachable" : /out of bounds/i.test(QQ.message) ? "out_of_bounds" : "runtime_error" : (QQ instanceof RangeError || QQ instanceof Error && "InternalError" === QQ.name) && /call stack|recursion/i.test(QQ.message) ? "stack_overflow" : "js_error"
      }(QQ);
      if ("unreachable" !== LQ) return {
        kind: LQ,
        panic: null,
        refusedBytes: 0
      };
      const qQ = FQ(),
        oQ = wQ();
      return {
        kind: LQ,
        panic: oQ > 0 ? null : qQ,
        refusedBytes: oQ
      }
    }
    const kQ = 300;

    function vQ(QQ) {
      return QQ.replace(/\s*\n\s*/g, " / ").slice(0, kQ)
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);