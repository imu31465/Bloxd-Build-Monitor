export const id = 54;
export const ids = [54];
export const modules = {
  38815: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => KT,
      e: () => MT
    });
    var lT = cT(36);

    function MT(TT) {
      return "refetchCode" === TT || "devDownloadJson" === TT || TT.startsWith("Plugin")
    }

    function KT(TT, kT) {
      "refetchCode" !== TT ? "Plugin|MobAiPlugin|ShowPetUi" !== TT ? Promise.all([cT.e(106), cT.e(107), cT.e(102), cT.e(104), cT.e(210)]).then((() => cT(41307))).then((cT => {
        let {
          runClientGameMessage: lT
        } = cT;
        lT(TT, kT)
      })).catch((kT => {
        console.error(`Game message ${TT} failed`, kT)
      })) : lT.k.nt("showPetUi", kT) : lT.k.nt("refetchCode")
    }
  },
  42126: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => lT,
      g: () => MT
    });
    const lT = ["recording", "freecam", "keyframe"];

    function MT() {
      const TT = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(TT[1]) << 32n | BigInt(TT[0])
    }
  },
  40450: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => yT
    });
    const lT = 1 << 20,
      MT = 1 << 21,
      KT = 1024,
      OT = 2048;

    function yT(TT, kT, cT) {
      const yT = TT + lT,
        fT = kT + KT,
        xT = cT + lT;
      return yT < 0 || yT >= MT || xT < 0 || xT >= MT || fT < 0 || fT >= OT ? -1 : (yT * MT + xT) * OT + fT
    }
  },
  40443: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => lT,
      c: () => OT,
      d: () => MT,
      h: () => KT,
      k: () => IT,
      l: () => xT,
      n: () => fT,
      o: () => yT
    });
    cT(3390);
    cT(40450);

    function lT(TT) {}

    function MT(TT) {}

    function KT(TT) {}

    function OT(TT) {}

    function yT(TT) {}

    function fT(TT, kT, cT) {}

    function xT(TT) {}

    function IT(TT) {}
  },
  9275: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => yT,
      d: () => fT
    });
    var lT = cT(31);
    const MT = 24,
      KT = "farNametags",
      OT = 1e5;

    function yT() {
      var TT;
      return null === (TT = lT.e.get("showDistantNametags")) || void 0 === TT || TT
    }

    function fT() {
      var TT;
      return null !== (TT = function() {
        const TT = new URLSearchParams(window.location.search).get(KT),
          kT = null === TT || "" === TT ? NaN : Number(TT);
        return Number.isFinite(kT) && kT >= 0 ? Math.min(kT, OT) : null
      }()) && void 0 !== TT ? TT : yT() ? 0 : MT
    }
  },
  42124: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      blockIdOf: () => Zf.d,
      clearWasmCameraScreen: () => cM,
      creativeItemIds: () => ll.creativeItemIds,
      decodeMapSettings: () => df,
      drainTextRerasters: () => Gy.c,
      enchantmentPerksOf: () => ll.enchantmentPerksOf,
      endGameHost: () => sf,
      followCursorAim: () => Xf,
      followMenuPrefs: () => qM,
      loadAudio: () => Bf,
      loadClientGame: () => Yf,
      loadTextIcons: () => Gy.g,
      rasterText: () => ey.e,
      readBoardToEdit: () => Ef,
      readDrawCensus: () => Lf.g,
      setTextHost: () => Gy.i,
      setTextLocalPlayer: () => Gy.l,
      showInCreativeInvenOf: () => ll.showInCreativeInvenOf,
      startGameHost: () => qf,
      startShellAnalytics: () => ef,
      startSkyFeed: () => kf,
      textChanged: () => Gy.p,
      warmText: () => ey.f,
      wasmCameraScreen: () => kM
    });
    cT(36328);
    var lT = cT(31),
      MT = cT(36638),
      KT = cT(38960),
      OT = cT(36),
      yT = cT(3343),
      fT = cT(36632),
      xT = cT(1292),
      IT = cT(606),
      AT = cT(38067),
      CT = cT(4761),
      jT = cT(40273),
      vT = cT(40204);
    const tT = vT.Pb / 4,
      hT = vT.v.PlaySound,
      NT = vT.v.SoundReset,
      QT = CT.W.ReplayFailed,
      ST = CT.W.RecorderEvent;
    class DT {
      constructor(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.core = TT, this.memory = kT, this.audio = cT, this.serverIds = new Int32Array(256).fill(vT.bd), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.view = new DataView(new ArrayBuffer(vT.A.BYTES)), this.renderPtr = 0, this.DA = 0, this.renderCapacity = 0, this.render = new Float32Array(0), this.visPtr = 0, this.vis = new Uint8Array(0), this.renderBuffer = null, this.eventsBuffer = null, this.eventsPtr = 0, this.eventsLen = 0, this.events = new DataView(new ArrayBuffer(0)), this.audioView = null, this.scratchPtr = -1, this.corruption = null, this.replay = null, this.queries = new vT.ib(TT, (() => {
          this.scratchPtr = -1, this.ensureViews()
        }))
      }
      scratch() {
        return this.scratchPtr < 0 && (this.scratchPtr = this.core.blT(), this.ensureViews()), this.scratchPtr
      }
      eventBytes(TT, kT) {
        const cT = this.eventView();
        return new Uint8Array(cT.buffer, cT.byteOffset + TT, kT)
      }
      get apiView() {
        return this.ensureViews(), this.view
      }
      ensureViews() {
        this.memory().buffer !== this.buffer && this.reView()
      }
      get localId() {
        return vT.A.localId(this.apiView, 0)
      }
      localDeaths() {
        return vT.A.localDeaths(this.apiView, 0)
      }
      rereadDirectory() {
        const TT = this.apiView,
          kT = vT.A.entRenderPtr(TT, 0),
          cT = vT.A.entVisPtr(TT, 0),
          lT = vT.A.entCapacity(TT, 0);
        if (kT !== this.renderPtr || cT !== this.visPtr || lT !== this.DA || this.renderBuffer !== this.buffer) {
          this.renderPtr = kT, this.visPtr = cT, this.DA = lT, this.renderBuffer = this.buffer;
          const TT = this.memoryView(Float32Array, kT, lT * tT, "the render array"),
            MT = this.memoryView(Uint8Array, cT, lT, "the visibility array");
          this.renderCapacity = TT && MT ? lT : 0, this.render = TT && MT ? TT : new Float32Array(0), this.vis = TT && MT ? MT : new Uint8Array(0)
        }
      }
      memoryView(TT, kT, cT, lT) {
        try {
          return (0, jT.s)(TT, this.memory().buffer, kT, cT, lT)
        } catch (MT) {
          return this.keepCorruption(MT), null
        }
      }
      memoryData(TT, kT, cT, lT) {
        try {
          return (0, jT.c)(this.memory().buffer, TT, kT, cT, lT)
        } catch (MT) {
          return this.keepCorruption(MT), null
        }
      }
      reportCorruption(TT) {
        this.keepCorruption(new jT.b(TT))
      }
      keepCorruption(TT) {
        if (!(TT instanceof jT.b)) throw TT;
        this.corruption ??= TT
      }
      throwCorruption() {
        if (this.corruption) throw this.corruption
      }
      walk(TT, kT, cT) {
        this.rereadDirectory(), this.throwCorruption();
        const {
          ptr: lT,
          len: MT
        } = TT;
        this.eventsPtr = lT, this.eventsLen = MT, this.eventsBuffer = null;
        const KT = this.eventView();
        for (let xT = 0; xT < MT;) {
          const TT = KT.getUint32(xT, !0),
            cT = 65535 & TT,
            lT = TT >>> 16,
            MT = xT + CT.U;
          if (cT === vT.v.EntitySpawned) {
            var OT;
            if (lT !== vT.Wb.BYTES) throw wT(cT, xT, lT);
            const TT = vT.Wb.serverId(KT, MT);
            this.spawned(TT, vT.Wb.index(KT, MT), vT.Wb.kind(KT, MT)), null === (OT = kT.entityAdded) || void 0 === OT || OT.call(kT, TT)
          } else if ((cT === vT.v.ChunkSlot || cT === vT.v.EntityInfoChanged) && !(0, vT.ye)(cT, KT, MT, lT, kT)) throw wT(cT, xT, lT);
          xT = MT + (0, CT.ke)(lT)
        }
        try {
          var yT;
          null === (yT = kT.afterPrescan) || void 0 === yT || yT.call(kT), this.throwCorruption(), !cT() && this.dispatch(TT, kT, cT) && (this.throwCorruption(), this.applyListener(), kT.afterWalk(TT.kind)), this.throwCorruption()
        } catch (fT) {
          throw fT instanceof jT.b && (this.corruption ??= fT), fT
        } finally {
          cT() || null !== this.corruption || this.applyDespawns(MT, kT)
        }
      }
      applyDespawns(TT, kT) {
        const cT = this.eventView();
        for (let MT = 0; MT < TT;) {
          const TT = cT.getUint32(MT, !0),
            KT = MT + CT.U;
          if ((65535 & TT) === vT.v.EntityDespawned && TT >>> 16 === vT.Wb.BYTES) {
            const TT = vT.Wb.serverId(cT, KT);
            var lT;
            if (this.despawned(TT, vT.Wb.index(cT, KT))) null === (lT = kT.entityRemoved) || void 0 === lT || lT.call(kT, TT)
          }
          MT = KT + (0, CT.ke)(TT >>> 16)
        }
        this.rereadDirectory()
      }
      dispatch(TT, kT, cT) {
        const {
          len: lT,
          net: MT,
          netOffsets: KT
        } = TT;
        let OT = this.eventView(),
          yT = 0;
        for (let FT = 0; FT < lT;) {
          const TT = OT.getUint32(FT, !0),
            lT = 65535 & TT,
            rT = TT >>> 16,
            mT = FT + CT.U;
          let bT = !1;
          if (yT < MT.length && KT[yT] === FT) kT.netEvent(MT[yT]), yT++, bT = !0;
          else if (lT === CT.W.LocalPlayerBound) {
            var fT;
            if (rT !== CT.Fb) throw wT(lT, FT, rT);
            null === (fT = kT.localPlayerBound) || void 0 === fT || fT.call(kT, OT.getInt32(mT, !0)), bT = !0
          } else if (lT === CT.W.LocalHurt) {
            var xT;
            if (rT !== CT.Bb) throw wT(lT, FT, rT);
            null === (xT = kT.localHurt) || void 0 === xT || xT.call(kT, OT.getInt32(mT, !0), OT.getFloat32(mT + 4, !0), OT.getUint32(mT + 8, !0)), bT = !0
          } else if (lT === CT.W.AttackHit) {
            var IT;
            if (rT !== CT.d) throw wT(lT, FT, rT);
            const TT = OT.getFloat32(mT, !0),
              cT = OT.getFloat32(mT + 4, !0),
              MT = OT.getFloat32(mT + 8, !0),
              KT = OT.getUint32(mT + 12, !0);
            null === (IT = kT.attackHit) || void 0 === IT || IT.call(kT, TT, cT, MT, 0 !== (KT & CT.j.Crit), 0 !== (KT & CT.j.HitSelf))
          } else if (lT === CT.W.PhysicsType) {
            var AT;
            if (rT !== CT.Zb) throw wT(lT, FT, rT);
            null === (AT = kT.physicsType) || void 0 === AT || AT.call(kT, OT.getUint32(mT, !0), OT.getInt32(mT + 4, !0)), bT = !0
          } else if (lT === CT.W.VehicleEffect) {
            var jT;
            const TT = PT(OT, mT, rT);
            if (null === TT) throw wT(lT, FT, rT);
            null === (jT = kT.vehicleEffect) || void 0 === jT || jT.call(kT, TT.op, TT.name, TT.icon, TT.level, TT.durationMs), bT = !0
          } else if (lT === CT.W.ZoomChanged) {
            var tT;
            if (rT !== CT.Rd) throw wT(lT, FT, rT);
            null === (tT = kT.zoomChanged) || void 0 === tT || tT.call(kT, OT.getFloat32(mT, !0), OT.getUint8(mT + 4)), bT = !0
          } else if (lT === CT.W.ZoomDisabled) {
            var DT;
            if (0 !== rT) throw wT(lT, FT, rT);
            null === (DT = kT.zoomDisabled) || void 0 === DT || DT.call(kT), bT = !0
          } else if (lT === CT.W.GameCamera) {
            var aT;
            null === (aT = kT.gameCamera) || void 0 === aT || aT.call(kT, new Uint8Array(OT.buffer, OT.byteOffset + mT, rT).slice()), bT = !0
          } else if (lT === vT.v.ChunkSlot || lT === vT.v.EntityInfoChanged);
          else if (lT >= hT && lT <= NT) {
            if (this.audio && !this.audio.onAudioEvent(lT, OT, mT, rT)) throw wT(lT, FT, rT)
          } else if (lT >= QT && lT <= ST) {
            if (this.replay) {
              if (!this.replay.onReplayEvent(lT, OT, mT, rT)) throw wT(lT, FT, rT);
              bT = !0
            }
          } else if (lT >= vT.qd && lT <= vT.rd && lT !== CT.W.EnvLighting) {
            if (!(0, vT.ye)(lT, OT, mT, rT, kT)) throw wT(lT, FT, rT);
            bT = !0
          }
          if (bT) {
            if (cT()) return !1;
            OT = this.eventView()
          }
          FT = mT + (0, CT.ke)(rT)
        }
        return !cT()
      }
      applyListener() {
        var TT;
        if (!this.audio) return;
        const kT = vT.A.audioViewPtr(this.apiView, 0),
          cT = this.memory().buffer;
        let lT = this.audioView;
        (null === (TT = lT) || void 0 === TT ? void 0 : TT.buffer) === cT && lT.byteOffset === kT || (lT = (0, jT.c)(cT, kT, vT.C.BYTES, 8, "the audio view"), this.audioView = lT), lT && this.audio.applyListener(lT)
      }
      indexOf(TT) {
        return this.indexById.get("number" === typeof TT ? TT : +TT)
      }
      isLocal(TT) {
        return TT !== vT.bd && TT === vT.A.localId(this.apiView, 0)
      }
      kN(TT) {
        const kT = [0, 0, 0];
        return this.readPosition("number" === typeof TT ? TT : +TT, kT) ? kT : null
      }
      readPosition(TT, kT) {
        const cT = this.apiView;
        if (void 0 !== this.indexById.get(TT) && this.isLocal(TT)) {
          for (let TT = 0; TT < 3; TT++) kT[TT] = vT.A.localPos(cT, 0, TT);
          return !0
        }
        return this.readDrawnPosition(TT, kT)
      }
      readDrawnPosition(TT, kT) {
        const cT = this.apiView,
          lT = this.indexById.get(TT);
        if (void 0 === lT || lT >= this.renderCapacity) return kT[0] = kT[1] = kT[2] = NaN, !1;
        const MT = lT * tT;
        for (let KT = 0; KT < 3; KT++) kT[KT] = this.render[MT + KT] + vT.A.origin(cT, 0, KT);
        return !0
      }
      checkValid(TT) {
        return void 0 !== this.indexOf(TT)
      }
      isAlive(TT) {
        const kT = this.indexOf(TT);
        if (void 0 === kT) return null;
        if (this.ensureViews(), kT >= this.renderCapacity) return null;
        const cT = this.vis[kT];
        return 0 === cT ? null : 0 !== (cT & vT.we.Alive)
      }
      getEntityType(TT) {
        const kT = this.indexOf(TT);
        return void 0 === kT ? this.isLocal("number" === typeof TT ? TT : +TT) ? "Player" : null : FT(this.kinds[kT])
      }
      spawned(TT, kT, cT) {
        if (kT >= 1048576) throw new jT.b(`entity ${TT} spawned at index ${kT}`);
        this.ensureIndex(kT), this.serverIds[kT] === TT && null !== this.idStr[kT] || (this.idStr[kT] = String(TT)), this.serverIds[kT] = TT, this.kinds[kT] = cT, this.indexById.set(TT, kT)
      }
      despawned(TT, kT) {
        let cT = !1;
        return this.indexById.get(TT) === kT && (this.indexById.delete(TT), cT = !0), kT < this.serverIds.length && this.serverIds[kT] === TT && (this.serverIds[kT] = vT.bd, this.kinds[kT] = 0, this.idStr[kT] = null), cT
      }
      ensureIndex(TT) {
        const kT = this.serverIds.length;
        if (TT < kT) return;
        let cT = 2 * kT;
        for (; cT <= TT;) cT *= 2;
        const lT = new Int32Array(cT).fill(vT.bd);
        lT.set(this.serverIds), this.serverIds = lT;
        const MT = new Uint16Array(cT);
        MT.set(this.kinds), this.kinds = MT;
        for (let KT = kT; KT < cT; KT++) this.idStr.push(null)
      }
      eventView() {
        const TT = this.memory().buffer;
        return TT !== this.eventsBuffer && (this.eventsBuffer = TT, this.events = new DataView(TT, this.eventsPtr, this.eventsLen)), this.events
      }
      reView() {
        const TT = this.memory().buffer;
        this.buffer = TT, this.viewPtr < 0 && (this.viewPtr = this.core.JlT()), this.view = new DataView(TT, this.viewPtr, vT.A.BYTES), this.rereadDirectory()
      }
    }

    function aT(TT) {
      return TT >>> vT.e === vT.w.Item
    }

    function FT(TT) {
      var kT, cT;
      const lT = TT & vT.i;
      switch (TT >>> vT.e) {
        case vT.w.Lifeform:
          return null !== (kT = IT.i[lT]) && void 0 !== kT ? kT : null;
        case vT.w.Throwable:
          return null !== (cT = AT.n[lT]) && void 0 !== cT ? cT : null;
        case vT.w.Mesh:
          return "Mesh";
        case vT.w.Audio:
          return "AudioEntity";
        case vT.w.Item:
          return "Item";
        default:
          return null
      }
    }
    const rT = new TextDecoder;

    function PT(TT, kT, cT) {
      if (cT < CT.yd.HEAD_BYTES) return null;
      const lT = TT.getUint32(kT, !0),
        MT = TT.getUint32(kT + 20, !0),
        KT = TT.getUint32(kT + 24, !0),
        OT = CT.yd.HEAD_BYTES + (0, CT.ke)(MT);
      if (lT !== CT.yd.UPDATE && lT !== CT.yd.REMOVE || MT > cT || OT + KT > cT) return null;
      const yT = (cT, lT) => rT.decode(new Uint8Array(TT.buffer, TT.byteOffset + kT + cT, lT)),
        fT = TT.getFloat64(kT + 12, !0);
      return {
        op: lT,
        level: TT.getFloat64(kT + 4, !0),
        durationMs: Number.isNaN(fT) ? null : fT,
        name: yT(CT.yd.HEAD_BYTES, MT),
        icon: yT(OT, KT)
      }
    }

    function wT(TT, kT, cT) {
      return new jT.b(`event ${TT} at ${kT} of ${cT} bytes`)
    }
    var mT = cT(339),
      bT = cT(1226),
      zT = cT(38815),
      JT = cT(1967),
      oT = cT(40329),
      HT = cT(1915),
      eT = cT(38972),
      GT = cT(38990),
      VT = cT(38980),
      ET = cT(40254),
      ZT = cT(2443),
      uT = cT(38966),
      XT = cT(38988);
    const dT = Math.max(vT.Jb.BYTES, vT.Ab.BYTES, vT.Cb.BYTES);

    function LT(TT) {
      if (!(0, XT.g)(TT)) return null;
      const kT = Number(TT);
      return (0 | kT) === kT ? kT : null
    }
    class RT {
      constructor(TT) {
        this.api = TT, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, uT.j)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.yM = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], this.entityHeading = 0, this.localId = vT.bd, this.localName = String(vT.bd), this.scratch = null
      }
      readView() {
        this.defaultPoseRead = !1, this.yM = null;
        const TT = this.api.queries.directorView() >= vT.Jb.BYTES ? this.scratchView() : null;
        null !== TT && (this.defaultFov = (0, HT.z)(vT.Jb.fov(TT, 0)), this.baseFov = (0, HT.z)(vT.Jb.baseFov(TT, 0)), this.aspect = vT.Jb.aspect(TT, 0), this.bodyHeading = vT.Jb.bodyHeading(TT, 0))
      }
      getViewHeading() {
        return this.viewHeading
      }
      setViewHeading(TT) {
        this.viewHeading = TT
      }
      get localPlayerId() {
        const TT = vT.A.localId(this.api.apiView, 0);
        return TT !== this.localId && (this.localId = TT, this.localName = String(TT)), this.localName
      }
      getEntityPosition(TT) {
        return this.readEntity(TT) ? this.entityFeet : null
      }
      getEntityAimPoint(TT) {
        return this.readEntity(TT) ? this.entityAim : null
      }
      getEntityHeading(TT) {
        const kT = LT(TT);
        if (null === kT) return null;
        const cT = vT.A.localId(this.api.apiView, 0);
        return kT === cT && cT !== vT.bd ? this.viewHeading : this.readEntity(TT) ? this.entityHeading : null
      }
      raycastTerrain(TT, kT, cT) {
        const lT = this.api.queries.cameraSweep(TT[0], TT[1], TT[2], kT[0], kT[1], kT[2], cT);
        return lT < cT - 1e-6 ? lT : null
      }
      getDefaultPose() {
        if (this.defaultPoseRead) return this.defaultPose;
        this.defaultPoseRead = !0;
        const TT = this.defaultPose;
        TT.fov = this.defaultFov;
        const kT = this.api.queries.directorDefaultPose() >= vT.Ab.BYTES ? this.scratchView() : null;
        if (null === kT) return TT;
        for (let cT = 0; cT < 3; cT++) TT.position[cT] = vT.Ab.eye(kT, 0, cT);
        return TT.heading = vT.Ab.heading(kT, 0), TT.pitch = vT.Ab.pitch(kT, 0), TT
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
      readEntity(TT) {
        const kT = LT(TT);
        if (null === kT) return !1;
        if (kT === this.yM) return this.entityLive;
        this.yM = kT;
        const cT = this.api.queries.directorEntity(kT) >= vT.Cb.BYTES ? this.scratchView() : null;
        if (this.entityLive = null !== cT, null === cT) return !1;
        for (let lT = 0; lT < 3; lT++) this.entityFeet[lT] = vT.Cb.feet(cT, 0, lT), this.entityAim[lT] = this.entityFeet[lT];
        return this.entityAim[1] += vT.Cb.eyeHeight(cT, 0), this.entityHeading = vT.Cb.heading(cT, 0), !0
      }
      scratchView() {
        const TT = this.api.scratch(),
          kT = this.api.memory().buffer,
          cT = this.scratch;
        return null !== cT && cT.buffer === kT && cT.byteOffset === TT ? cT : (this.scratch = this.api.memoryData(TT, dT, 8, "the director's record"), this.scratch)
      }
    }
    const gT = {
        mode: "default"
      },
      UT = {
        show: () => {},
        clear: () => {}
      };

    function YT() {
      return "undefined" !== typeof document && "hidden" === document.visibilityState
    }
    class BT {
      constructor(TT) {
        this.options = TT, this.pA = void 0, this.director = void 0, this.latest = gT, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
          Rm: 0,
          Wm: 0
        }, this.pointedAt = {
          heading: 0,
          pitch: 0
        }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastCallMs = 0, this.answeredPose = !1, this.uv = new Int32Array(3 * vT.Zd), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * vT.Zd), this.pA = new RT(TT.api), this.director = new VT.d(this.pA)
      }
      settingsChanged(TT) {
        let kT = gT;
        if (TT.length > 0) try {
          kT = (0, ET.c)(TT)
        } catch {}
        this.latest = kT, this.pending = kT
      }
      call(TT, kT, cT, lT, MT, KT) {
        var OT, yT;
        let fT;
        this.holding = !1;
        try {
          fT = this.answer(TT, kT, cT, lT, MT, KT)
        } catch (CT) {
          var xT, IT;
          throw this.answeredPose = !1, null === (xT = (IT = this.options).showFacing) || void 0 === xT || xT.call(IT, null), CT
        }
        const AT = this.answeredPose && 0 === (lT & vT.Fb.Held);
        return this.answeredPose = fT !== vT.wb.None, this.holding = this.answeredPose && !AT, null === (OT = (yT = this.options).showFacing) || void 0 === OT || OT.call(yT, this.holding ? this.facing : null), fT
      }
      holdsView() {
        return this.holding
      }
      answer(TT, kT, cT, lT, MT, KT) {
        this.calledThisFrame = !0, this.engaged = !0, this.lastCallMs = this.now();
        const {
          pA: OT
        } = this;
        OT.readView();
        if (0 !== (lT & vT.Fb.Held) || OT.setViewHeading((0, eT.s)(OT.bodyHeading)), void 0 !== this.pending) {
          const TT = this.pending;
          this.pending = void 0, this.director.setSettings(TT), this.syncShownSettings()
        }
        this.readLook((0, ZT.f)(kT), (0, ZT.f)(cT), lT, (0, ZT.f)(MT), (0, ZT.f)(KT));
        const yT = this.director.update(TT / 1e3, this.look);
        if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !yT) return vT.wb.None;
        const [fT, xT, IT] = yT.position;
        if (0 === this.options.api.queries.directorPose(fT, xT, IT, (0, eT.s)(yT.heading), (0, eT.h)(yT.pitch), (0, HT.k)(yT.fov))) return vT.wb.None;
        if ("default" === this.director.getSettings().mode) return vT.wb.Pose;
        switch (this.facing) {
          case "camera":
            return vT.wb.FaceCamera;
          case "cursor":
            return vT.wb.FaceCursor;
          default:
            return vT.wb.FaceMovement
        }
      }
      afterFrame(TT) {
        TT ? (this.calledThisFrame || (this.holding = !1, this.engaged && this.idle()), this.calledThisFrame = !1) : this.centresLen > 0 && this.hidden() && this.now() - this.lastCallMs > 1e3 && this.setCentres(0), this.centresUnsent && this.sendCentres()
      }
      reset() {
        this.latest = gT, this.idle()
      }
      restart() {
        const TT = this.holding;
        this.idle(), this.holding = TT
      }
      idle() {
        var TT, kT;
        this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new VT.d(this.pA), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, null === (TT = (kT = this.options).showFacing) || void 0 === TT || TT.call(kT, null), this.setCentres(0)
      }
      syncShownSettings() {
        const TT = this.director.getSettings();
        if (TT === this.shownSettings) return;
        this.shownSettings = TT;
        const kT = (0, GT.e)(TT);
        this.facing = kT.facing, this.mouseTurns = kT.mouseTurns
      }
      readLook(TT, kT, cT, lT, MT) {
        const KT = this.look,
          OT = 0 !== (cT & vT.Fb.LookPointed);
        if (null === this.mouseTurns && !OT) return KT.Rm = 0, KT.Wm = 0, void(KT.pointedAt = void 0);
        let yT;
        OT && (this.pointedAt.heading = lT, this.pointedAt.pitch = MT, yT = this.pointedAt);
        const {
          pA: fT
        } = this;
        fT.setViewHeading((0, GT.d)(fT.getViewHeading(), TT, kT, yT, "look" === this.mouseTurns, KT))
      }
      writeCentres(TT) {
        const kT = this.next,
          cT = Math.min(TT.length, vT.Zd);
        for (let lT = 0; lT < cT; lT++)
          for (let cT = 0; cT < 3; cT++) kT[3 * lT + cT] = Math.floor(TT[lT][cT] / vT.N);
        this.setCentres(cT)
      }
      setCentres(TT) {
        const {
          uv: kT,
          next: cT
        } = this;
        let lT = TT === this.centresLen;
        for (let MT = 0; lT && MT < 3 * TT; MT++) lT = kT[MT] === cT[MT];
        lT || (kT.fill(0), kT.set(cT.subarray(0, 3 * TT)), this.centresLen = TT, this.centresUnsent = !0, this.sendCentres())
      }
      sendCentres() {
        const TT = this.options.cmd();
        null !== TT && (0, vT.dg)(TT, 0, this.uv, this.centresLen) && (this.centresUnsent = !1)
      }
      screen() {
        var TT, kT, cT;
        return null !== (TT = null === (kT = (cT = this.options).screen) || void 0 === kT ? void 0 : kT.call(cT)) && void 0 !== TT ? TT : UT
      }
      hidden() {
        var TT;
        return (null !== (TT = this.options.isPageHidden) && void 0 !== TT ? TT : YT)()
      }
      now() {
        var TT, kT, cT;
        return null !== (TT = null === (kT = (cT = this.options).now) || void 0 === kT ? void 0 : kT.call(cT)) && void 0 !== TT ? TT : performance.now()
      }
    }
    var WT = cT(40450);
    const nT = vT.N * vT.N * vT.N,
      pT = Math.log2(vT.N),
      iT = vT.N - 1,
      qT = vT.bb.BYTES / 4,
      sT = new Uint16Array(nT);

    function Tk(TT, kT, cT) {
      return TT * vT.N * vT.N + kT * vT.N + cT
    }
    class kk {
      constructor(TT) {
        this.chunk = TT
      }
      get data() {
        return this.chunk.gameVoxels()
      }
      index(TT, kT, cT) {
        return Tk(TT, kT, cT)
      }
    }
    class ck {
      constructor() {
        this.ids = new Map, this.cleared = new Set, this.layers = 0, this.patched = null, this.from = null
      }
    }
    class lk {
      constructor(TT, kT, cT, lT) {
        this.table = TT, this.slot = kT, this.generation = cT, this.epoch = lT, this.rC = new kk(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = sT, this.dataPtr = 0, this.dataBuffer = null, this.dataStamp = -1, this.version = 0, this.layers = null, this.layersVersion = -1, this.layersPtr = -1, this.staleLayers = 0
      }
      get Zv() {
        return this.voxelData(), this.version === this.shownCore && this.writeCount === this.shownWrites || (this.shownCore = this.version, this.shownWrites = this.writeCount, this.shownVersion = this.table.nextVersion()), this.shownVersion
      }
      get aj() {
        const TT = this.gameVoxels(),
          kT = this.layers ??= new Uint16Array(vT.N);
        this.layersVersion === this.version && this.layersPtr === this.dataPtr || (this.layersVersion = this.version, this.layersPtr = this.dataPtr, this.staleLayers = -1);
        for (let cT = 0; 0 !== this.staleLayers; cT++) {
          const lT = 1 << cT;
          0 !== (this.staleLayers & lT) && (this.staleLayers &= ~lT, kT[cT] = Mk(TT, cT))
        }
        return kT
      }
      voxelData() {
        return this.dataStamp === this.table.stamp && 0 !== this.data.length ? this.data : this.reread()
      }
      gameVoxels() {
        const TT = this.voxelData(),
          kT = this.writes;
        if (null === kT || 0 === kT.ids.size) return TT;
        if (kT.from !== TT) {
          const cT = kT.patched ??= new Uint16Array(nT);
          cT.set(TT);
          for (const [TT, lT] of kT.ids) cT[TT] = lT;
          kT.from = TT
        }
        return kT.patched
      }
      written(TT) {
        var kT;
        return null === (kT = this.writes) || void 0 === kT ? void 0 : kT.ids.get(TT)
      }
      hasWrites() {
        return null !== this.writes && 0 !== this.writes.ids.size
      }
      write(TT, kT, cT) {
        const lT = this.writes ??= new ck;
        lT.ids.set(TT, kT), cT && lT.cleared.add(TT), null !== lT.from && (lT.patched[TT] = kT);
        const MT = 1 << (TT >> pT & iT);
        lT.layers |= MT, this.staleLayers |= MT, this.writeCount++
      }
      clearWrites() {
        const TT = this.writes;
        null !== TT && (this.staleLayers |= TT.layers, TT.ids.clear(), TT.cleared.clear(), TT.layers = 0, TT.from = null)
      }
      dataCleared(TT) {
        var kT;
        return !0 === (null === (kT = this.writes) || void 0 === kT ? void 0 : kT.cleared.has(TT))
      }
      reread() {
        this.dataStamp = this.table.stamp;
        const TT = this.table.slotWords(),
          kT = this.slot * qT;
        if (this.epoch !== this.table.epoch || kT + qT > TT.length || 0 === TT[kT + 3] || TT[kT + 2] !== this.generation) return this.data = sT, this.dataPtr = 0, sT;
        this.version = TT[kT + 1];
        const cT = TT[kT + 0],
          lT = TT.buffer;
        return cT === this.dataPtr && lT === this.dataBuffer || (this.dataPtr = cT, this.dataBuffer = lT, this.data = this.table.voxelsAt(lT, cT)), this.data
      }
    }

    function Mk(TT, kT) {
      const cT = TT[kT * vT.N];
      for (let lT = 0; lT < vT.N; lT++) {
        const MT = Tk(lT, kT, 0);
        for (let kT = 0; kT < vT.N; kT++)
          if (TT[MT + kT] !== cT) return 65535
      }
      return cT
    }
    const Kk = new Uint32Array(0);

    function Ok(TT, kT, cT) {
      return Tk(TT & iT, kT & iT, cT & iT)
    }
    class yk {
      constructor(TT, kT) {
        this.memory = TT, this.apiView = kT, this.chunks = new Map, this.written = [], this.lastKey = -1, this.lastChunk = void 0, this.slotsPtr = 0, this.slotsLen = 0, this.slotsBuffer = null, this.slots = Kk, this.walkPtr = 0, this.walkLen = 0, this.walkBuffer = null, this.walk = Kk, this.epoch = 0, this.stamp = 0, this.versions = 0, this.corruption = null
      }
      apply(TT, kT, cT, lT, MT, KT) {
        if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, KT === vT.db.ResetAll) return this.chunks.clear(), void this.epoch++;
        if (KT !== vT.db.Stored && KT !== vT.db.Unloaded) throw new jT.b(`ChunkSlot flags ${KT}`);
        const OT = (0, WT.d)(TT, kT, cT);
        if (OT < 0) return;
        if (KT === vT.db.Unloaded) return void this.chunks.delete(OT);
        const yT = this.chunks.get(OT);
        (null === yT || void 0 === yT ? void 0 : yT.slot) === lT && yT.generation === MT || this.chunks.set(OT, new lk(this, lT, MT, this.epoch))
      }
      touch() {
        this.stamp++, this.clearOverlay(), this.viewWalkThrough()
      }
      refresh() {
        if (this.stamp++, this.corruption) throw this.corruption;
        const TT = this.apiView(),
          kT = vT.A.chunkSlotsPtr(TT, 0),
          cT = vT.A.chunkSlotsLen(TT, 0);
        kT === this.slotsPtr && cT === this.slotsLen || (this.slotsPtr = kT, this.slotsLen = cT, this.slotsBuffer = null, this.slotWords()), this.viewWalkThrough(), this.clearOverlay()
      }
      viewWalkThrough() {
        const TT = this.apiView(),
          kT = vT.A.walkThroughPtr(TT, 0),
          cT = vT.A.walkThroughLen(TT, 0);
        kT === this.walkPtr && cT === this.walkLen || (this.walkPtr = kT, this.walkLen = cT, this.walkBuffer = null, this.walkWords())
      }
      clearOverlay() {
        for (const TT of this.written) TT.clearWrites();
        this.written.length = 0
      }
      nextVersion() {
        return ++this.versions
      }
      slotWords() {
        const TT = this.memory().buffer;
        var kT;
        TT !== this.slotsBuffer && (this.slotsBuffer = TT, this.slots = null !== (kT = (0, jT.s)(Uint32Array, TT, this.slotsPtr, this.slotsLen * qT, "the chunk directory")) && void 0 !== kT ? kT : Kk);
        return this.slots
      }
      voxelsAt(TT, kT) {
        try {
          var cT;
          return null !== (cT = (0, jT.s)(Uint16Array, TT, kT, nT, "a chunk's voxels")) && void 0 !== cT ? cT : sT
        } catch (lT) {
          if (!(lT instanceof jT.b)) throw lT;
          return this.corruption ??= lT, sT
        }
      }
      chunk(TT, kT, cT) {
        var lT;
        return null !== (lT = this.chunks.get((0, WT.d)(TT, kT, cT))) && void 0 !== lT ? lT : null
      }
      isLoaded(TT, kT, cT) {
        return void 0 !== this.chunkAt(Math.floor(TT), Math.floor(kT), Math.floor(cT))
      }
      Rx(TT, kT, cT) {
        var lT;
        const MT = Math.floor(TT),
          KT = Math.floor(kT),
          OT = Math.floor(cT),
          yT = this.chunkAt(MT, KT, OT);
        if (!yT) return 0;
        const fT = Ok(MT, KT, OT);
        return null !== (lT = yT.written(fT)) && void 0 !== lT ? lT : yT.voxelData()[fT]
      }
      setOverlay(TT, kT, cT, lT) {
        let MT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const KT = this.chunkAt(TT, kT, cT);
        return !!KT && (KT.hasWrites() || this.written.push(KT), KT.write(Ok(TT, kT, cT), lT, MT), !0)
      }
      version(TT, kT, cT) {
        var lT, MT;
        return null !== (lT = null === (MT = this.chunks.get((0, WT.d)(TT, kT, cT))) || void 0 === MT ? void 0 : MT.Zv) && void 0 !== lT ? lT : null
      }
      scan(TT, kT, cT, lT, MT, KT, OT, yT) {
        const fT = vT.N;
        let xT = 0;
        for (let IT = Math.floor(kT / fT); IT * fT < MT; IT++) {
          const AT = IT * fT,
            CT = Math.min(MT - AT, fT);
          for (let MT = Math.floor(TT / fT); MT * fT < lT; MT++) {
            const jT = MT * fT,
              vT = Math.min(lT - jT, fT);
            for (let lT = Math.floor(cT / fT); lT * fT < KT; lT++) {
              const tT = this.chunks.get((0, WT.d)(MT, IT, lT));
              if (!tT) continue;
              const hT = lT * fT,
                NT = Math.max(cT - hT, 0),
                QT = Math.min(KT - hT, fT),
                ST = tT.aj,
                DT = tT.gameVoxels();
              for (let cT = Math.max(kT - AT, 0); cT < CT; cT++) {
                const kT = ST[cT];
                if (65535 === kT || 0 !== OT[kT]) {
                  xT++;
                  for (let kT = Math.max(TT - jT, 0); kT < vT; kT++) {
                    const TT = Tk(kT, cT, 0);
                    for (let lT = NT; lT < QT; lT++) {
                      const MT = DT[TT + lT];
                      0 !== OT[MT] && yT.push(jT + kT, AT + cT, hT + lT, MT)
                    }
                  }
                }
              }
            }
          }
        }
        return xT
      }
      dataCleared(TT, kT, cT) {
        var lT;
        const MT = Math.floor(TT),
          KT = Math.floor(kT),
          OT = Math.floor(cT);
        return !0 === (null === (lT = this.chunkAt(MT, KT, OT)) || void 0 === lT ? void 0 : lT.dataCleared(Ok(MT, KT, OT)))
      }
      isWalkThrough(TT) {
        if (!Number.isInteger(TT) || TT < 0 || TT > 65535) return !1;
        const kT = this.walkWords(),
          cT = TT >>> 5;
        return cT < kT.length && 1 === (kT[cT] >>> (31 & TT) & 1)
      }
      walkWords() {
        const TT = this.memory().buffer;
        var kT;
        TT !== this.walkBuffer && (this.walkBuffer = TT, this.walk = null !== (kT = (0, jT.s)(Uint32Array, TT, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== kT ? kT : Kk);
        return this.walk
      }
      chunkAt(TT, kT, cT) {
        if ((0 | TT) !== TT || (0 | kT) !== kT || (0 | cT) !== cT) return;
        const lT = (0, WT.d)(TT >> pT, kT >> pT, cT >> pT);
        return lT !== this.lastKey && (this.lastKey = lT, this.lastChunk = this.chunks.get(lT)), this.lastChunk
      }
    }
    var fk = cT(38350),
      xk = cT(37669),
      Ik = cT(36614),
      Ak = cT(36440),
      Ck = cT(9298),
      jk = cT(38932),
      vk = cT(218);
    const tk = ["ambient", "cars", "crowd", "customGame_horror", "dig", "fire", "fishing", "gameStart", "gunMisc", "gunPistol", "gunRifle", "gunSemiAutomatic", "gunShotgun", "gunSubmachineGun", "mobBear", "mobCat", "mobCow", "mobCrone", "mobDeer", "mobDog", "mobFennec", "mobGolem", "mobGorilla", "mobHorse", "mobKnight", "mobPig", "mobReaver", "mobSheep", "mobSkeleton", "mobStag", "mobStalker", "mobWarper", "mobWraith", "mobZombie", "note", "phoneAndMoney", "police", "randomBeep", "randomCannon", "randomCash", "randomExp", "randomFallsmall", "randomFire", "randomFirecracker", "randomItems", "randomLaugh", "randomMagic", "randomSplash", "rpg", "step", "survivalFactory", "town"],
      hk = [
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
      Nk = hk.map((TT => {
        let [kT] = TT;
        return kT
      })),
      Qk = Uint8Array.from(hk, (TT => {
        let [, kT] = TT;
        return kT
      })),
      Sk = {
        semi_automatic: 11,
        submachine: 13,
        rifle: 10,
        pistol: 9,
        shotgun: 12
      },
      Dk = 8;
    var ak = cT(36584),
      Fk = cT(36595),
      rk = cT(36593),
      Pk = cT(275);
    class wk {
      constructor(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Pk.e;
        this.sheet = TT, this.onError = kT, this.idle = cT, this.queue = [], this.asked = new Set, this.cancelIdle = null, this.gen = 0, this.onIdle = TT => {
          this.cancelIdle = null;
          try {
            if (TT.timeRemaining() >= 1) {
              let TT = this.queue.shift();
              for (; void 0 !== TT && !this.load(TT);) TT = this.queue.shift()
            }
          } catch (kT) {
            this.onError(kT)
          } finally {
            this.schedule()
          }
        }
      }
      preload(TT) {
        const kT = [...TT].sort(((TT, kT) => TT - kT));
        for (const cT of kT) this.asked.has(cT) || (this.asked.add(cT), this.queue.push(cT));
        this.schedule()
      }
      cancel() {
        var TT;
        this.queue.length = 0, this.asked.clear(), this.gen++, null === (TT = this.cancelIdle) || void 0 === TT || TT.call(this), this.cancelIdle = null
      }
      schedule() {
        null === this.cancelIdle && this.queue.length > 0 && (this.cancelIdle = this.idle(this.onIdle))
      }
      load(TT) {
        const kT = this.sheet(TT, !1),
          cT = this.sheet(TT, !0),
          [lT, MT] = "unloaded" === kT.state() && "unloaded" !== cT.state() ? [cT, kT] : [kT, cT],
          KT = this.gen,
          OT = () => {
            try {
              KT === this.gen && "unloaded" === MT.state() && MT.load()
            } catch (TT) {
              this.onError(TT)
            }
          },
          yT = lT.state();
        return "unloaded" === yT ? (lT.once("load", OT), lT.load(), !0) : "unloaded" === MT.state() && ("loading" === yT ? (lT.once("load", OT), !1) : (MT.load(), !0))
      }
    }
    var mk = cT(40536);
    const bk = {
        coneInnerAngle: 360,
        coneOuterAngle: 360,
        coneOuterGain: 0,
        distanceModel: "inverse",
        maxDistance: 1e3,
        panningModel: "HRTF",
        rolloffFactor: 1
      },
      zk = vk.f.Iw * vk.f.playerEyeToHeightRatio,
      Jk = [0, 0, -1, 0, 1, 0],
      Hk = tk.indexOf("note");

    function ek(TT) {
      return TT >= 0 ? Math.min(1, TT) : 0
    }

    function Gk(TT) {
      var kT;
      let cT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
      const lT = function(TT) {
        let kT = 0,
          cT = Nk.length;
        for (; kT < cT;) {
          const lT = kT + cT >>> 1;
          Nk[lT] < TT ? kT = lT + 1 : cT = lT
        }
        return kT
      }(TT);
      if ("" === TT || null === (kT = Nk[lT]) || void 0 === kT || !kT.startsWith(TT)) return -1;
      if (Nk[lT] === TT) return lT;
      let MT = lT + 1;
      for (; MT < Nk.length && Nk[MT].startsWith(TT);) MT++;
      return lT + Math.floor(cT() * (MT - lT))
    }
    class Vk {
      constructor(TT, kT, cT, lT, MT) {
        this.group = TT, this.loudness = kT, this.startMs = cT, this.howl = lT, this.host = MT, this.id = 0, this.direct = !1
      }
      getDurationMs() {
        const TT = this.host.alive(this.id);
        return TT ? 1e3 * this.howl.duration(this.id) / TT.rate : 0
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
    class Ek {
      constructor(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          lT = arguments.length > 3 ? arguments[3] : void 0;
        this.createHowl = TT, this.listener = kT, this.now = cT, this.errors = 0, this.sheets = new Map, this.unloading = new Uint16Array(tk.length), this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader = void 0, this.voices = new rk.c, this.failed = new Set, this.started = new Set, this.voiceHost = {
          alive: TT => this.aliveVoice(TT),
          started: TT => this.started.has(TT),
          drop: TT => {
            var kT;
            null === (kT = this.live.get(TT)) || void 0 === kT || kT.howl.stop(TT), this.forget(TT)
          }
        }, this.handlers = {
          playSound: (TT, kT, cT, lT, MT, KT, OT, yT, fT) => {
            if (lT >= Nk.length) return;
            const xT = 0 !== (MT & vT.ne.Loop);
            MT & vT.ne.TwoD ? this.start(lT, !1, OT, KT, yT, xT) : this.startSpatial(lT, OT, KT, yT, xT, TT, kT, cT, fT, this.earDistSq(TT, kT, cT))
          },
          soundPos: (TT, kT, cT, lT) => {
            const MT = this.core.get(lT);
            var KT;
            void 0 !== MT && (null === (KT = this.live.get(MT)) || void 0 === KT || KT.howl.pos(cT, kT, TT, MT))
          },
          soundSet: (TT, kT, cT, lT) => {
            const MT = this.core.get(TT),
              KT = void 0 === MT ? void 0 : this.live.get(MT);
            void 0 !== MT && KT && (this.setRel(MT, kT), KT.rate = cT, KT.howl.rate(cT, MT), KT.spatial && KT.howl.pannerAttr({
              refDistance: lT
            }, MT))
          },
          soundFade: (TT, kT, cT, lT) => {
            const MT = this.core.get(TT);
            void 0 !== MT && this.fade(MT, kT, cT, 0 !== (lT & vT.je.StopAfter))
          },
          soundStop: TT => {
            const kT = this.core.get(TT);
            var cT;
            void 0 !== kT && (null === (cT = this.live.get(kT)) || void 0 === cT || cT.howl.stop(kT), this.forget(kT))
          },
          soundReset: () => {
            this.stopCore()
          }
        }, this.loader = new wk(((TT, kT) => this.sheet(TT, kT)), (TT => {
          this.errors++, console.error("Audio preload failed", TT)
        }), lT)
      }
      prepare() {
        for (let TT = 0; TT < tk.length; TT++) this.prepareSheet(TT)
      }
      prepareSheet(TT) {
        this.sheet(TT, !1), this.sheet(TT, !0)
      }
      preload(TT) {
        this.loader.preload(TT)
      }
      cancelPreload() {
        this.loader.cancel()
      }
      freeSheetsAfterGame() {
        for (let TT = 0; TT < tk.length; TT++) {
          if (Fk.c.has(tk[TT])) continue;
          const kT = [];
          for (const lT of [!1, !0]) {
            const cT = Zk(TT, lT),
              MT = this.sheets.get(cT);
            void 0 !== MT && "loading" !== MT.state() && kT.push({
              key: cT,
              howl: MT
            })
          }
          if (!kT.some((TT => {
              let {
                howl: kT
              } = TT;
              return "loaded" === kT.state()
            }))) continue;
          this.unloading[TT] += kT.length;
          const cT = () => {
            this.unloading[TT]--, 0 === this.unloading[TT] && this.prepareSheet(TT)
          };
          for (const {
              key: TT,
              howl: lT
            }
            of kT) this.sheets.delete(TT), "loaded" === lT.state() ? (0, ak.c)(lT, cT) : (lT.unload(), cT())
        }
      }
      onAudioEvent(TT, kT, cT, lT) {
        if (TT < vT.v.PlaySound || TT > vT.v.SoundReset) return !1;
        try {
          return (0, vT.ye)(TT, kT, cT, lT, this.handlers)
        } catch (MT) {
          return this.errors++, console.error("Audio event failed", MT), !0
        }
      }
      applyListener(TT) {
        const kT = this.nextPose;
        for (let lT = 0; lT < 3; lT++) kT[2 - lT] = vT.C.listener(TT, 0, lT), kT[5 - lT] = vT.C.forward(TT, 0, lT), kT[8 - lT] = vT.C.up(TT, 0, lT);
        0 === kT[3] && 0 === kT[4] && 0 === kT[5] && kT.set(this.posed ? this.pose.subarray(3) : Jk, 3);
        for (let lT = 0; lT < 9; lT++)
          if (!Number.isFinite(kT[lT])) return;
        const cT = this.pose;
        if (this.posed) {
          let TT = !0;
          for (let lT = 0; lT < 9 && TT; lT++) TT = kT[lT] === cT[lT];
          if (TT) return
        }
        this.listener.apply(kT) && (cT.set(kT), this.posed = !0)
      }
      playGame(TT, kT, cT, lT, MT, KT, OT) {
        const yT = Gk(TT);
        if (yT < 0) return mk.c;
        if (!cT) {
          const {
            howl: TT,
            id: cT
          } = this.start(yT, !1, kT, 0, 1, OT);
          return this.gameSound(TT, cT, !1)
        }
        const fT = cT[0],
          xT = cT[1] + zk,
          IT = cT[2];
        if (!Number.isFinite(fT) || !Number.isFinite(xT) || !Number.isFinite(IT)) return mk.c;
        let AT;
        if (lT) {
          const TT = fT - lT[0],
            kT = xT - lT[1],
            cT = IT - lT[2];
          if (AT = TT * TT + kT * kT + cT * cT, AT > MT * MT) return mk.c
        } else AT = this.earDistSq(fT, xT, IT);
        const CT = this.startSpatial(yT, kT, 0, 1, OT, fT, xT, IT, KT, AT);
        return CT ? this.gameSound(CT.howl, CT.id, !0) : mk.c
      }
      setMaster(TT, kT) {
        this.level = ek(TT);
        const cT = kT ? this.level : 0;
        if (cT !== this.master) {
          this.master = cT;
          for (const [TT, kT] of this.live) kT.fadeMs = 0, kT.gain = kT.rel * this.master, kT.howl.volume(kT.gain, TT)
        }
      }
      stopCore() {
        for (const kT of [...this.core.values()]) {
          var TT;
          null === (TT = this.live.get(kT)) || void 0 === TT || TT.howl.stop(kT)
        }
        this.core.clear()
      }
      stopAll() {
        this.cancelPreload();
        for (const [TT, kT] of [...this.live]) kT.howl.stop(TT), this.forget(TT);
        this.core.clear()
      }
      gameSound(TT, kT, cT) {
        const lT = {
          stop: () => (this.live.has(kT) && TT.stop(kT), lT),
          fade: (TT, cT, MT) => {
            var KT, OT;
            const yT = this.level > 0 ? cT / this.level : cT > 0 && null !== (KT = null === (OT = this.live.get(kT)) || void 0 === OT ? void 0 : OT.rel) && void 0 !== KT ? KT : 0;
            return this.fade(kT, yT, MT, !1), lT
          },
          rate: cT => {
            const MT = this.live.get(kT);
            return MT && (MT.rate = function(TT) {
              return TT > 0 && TT < 1 / 0 ? TT : 1
            }(cT), TT.rate(MT.rate, kT)), lT
          },
          getVolume: () => {
            var TT, cT;
            return (null !== (TT = null === (cT = this.live.get(kT)) || void 0 === cT ? void 0 : cT.rel) && void 0 !== TT ? TT : 0) * this.level
          },
          getRelativeVolume: () => {
            var TT, cT;
            return null !== (TT = null === (cT = this.live.get(kT)) || void 0 === cT ? void 0 : cT.rel) && void 0 !== TT ? TT : 0
          },
          setRelativeVolume: TT => (this.setRel(kT, TT), lT),
          setPannerAttr: MT => {
            if (cT && this.live.has(kT)) {
              const cT = {
                ...bk,
                refDistance: Ik.g
              };
              for (const [TT, kT] of Object.entries(MT)) "number" !== typeof kT && "string" !== typeof kT || (cT[TT] = kT);
              TT.pannerAttr({
                coneOuterAngle: cT.coneOuterAngle
              }, kT), TT.pannerAttr(cT, kT)
            }
            return lT
          },
          setPosition: MT => (cT && this.live.has(kT) && Number.isFinite(MT[0] + MT[1] + MT[2]) && TT.pos(MT[2], MT[1], MT[0], kT), lT)
        };
        return lT
      }
      startSpatial(TT, kT, cT, lT, MT, KT, OT, yT, fT, xT) {
        const IT = this.sheet(Qk[TT], !0);
        let AT = null;
        if (!MT) {
          if (this.failed.has(IT)) return null;
          const cT = Qk[TT] === Hk ? null : (0, rk.h)(Nk[TT]),
            lT = (0, rk.f)(ek(kT), Math.sqrt(xT), fT);
          if (AT = new Vk(cT, lT, this.now(), IT, this.voiceHost), !this.voices.admit(AT)) return null
        }
        const CT = this.start(TT, !0, kT, cT, lT, MT);
        return AT && (AT.id = CT.id, AT.direct = "loaded" === IT.state() && !IT._playLock), IT.pannerAttr({
          coneOuterAngle: 360
        }, CT.id), IT.pannerAttr({
          ...bk,
          refDistance: fT
        }, CT.id), IT.pos(yT, OT, KT, CT.id), CT
      }
      aliveVoice(TT) {
        const kT = this.live.get(TT);
        if (!kT) return;
        const cT = kT.howl._soundById(TT);
        if (cT && !cT._ended) return kT;
        this.forget(TT)
      }
      earDistSq(TT, kT, cT) {
        if (!this.posed) return 0;
        const lT = TT - this.pose[2],
          MT = kT - this.pose[1],
          KT = cT - this.pose[0];
        return lT * lT + MT * MT + KT * KT
      }
      start(TT, kT, cT, lT, MT, KT) {
        const OT = ek(cT),
          yT = this.sheet(Qk[TT], kT);
        "unloaded" === yT.state() && yT.load();
        const fT = yT.play(Nk[TT]),
          xT = OT * this.master;
        return yT.volume(xT, fT), this.live.set(fT, {
          howl: yT,
          rel: OT,
          gain: xT,
          fadeFrom: xT,
          fadeAt: 0,
          fadeMs: 0,
          rate: MT,
          handle: lT,
          spatial: kT,
          stopTimer: void 0
        }), 0 !== lT && this.core.set(lT, fT), 1 !== MT && yT.rate(MT, fT), KT && yT.loop(!0, fT), {
          howl: yT,
          id: fT
        }
      }
      sheet(TT, kT) {
        const cT = Zk(TT, kT);
        let lT = this.sheets.get(cT);
        if (!lT) {
          const MT = this.createHowl(tk[TT], kT);
          MT.on("end", (TT => {
            MT.loop(TT) || this.forget(TT)
          })), MT.on("stop", (TT => {
            this.forget(TT)
          })), MT.on("play", (TT => {
            this.live.has(TT) && this.started.add(TT)
          })), MT.on("loaderror", (TT => {
            if ("loaded" !== MT.state()) {
              this.failed.add(MT);
              for (const [TT, kT] of this.live) kT.howl === MT && this.forget(TT)
            } else "number" === typeof TT && this.forget(TT)
          })), this.sheets.set(cT, MT), lT = MT
        }
        return lT
      }
      setRel(TT, kT) {
        const cT = this.live.get(TT);
        cT && (uk(cT), cT.fadeMs = 0, cT.rel = ek(kT), cT.gain = cT.rel * this.master, cT.howl.volume(cT.gain, TT))
      }
      fade(TT, kT, cT, lT) {
        const MT = this.live.get(TT);
        if (!MT) return;
        uk(MT);
        const {
          howl: KT
        } = MT, OT = this.gainNow(MT);
        MT.rel = ek(kT), MT.gain = MT.rel * this.master;
        const yT = cT > 0 ? Math.min(cT, 65535) : 0,
          fT = 0 === yT || OT === MT.gain;
        MT.fadeMs = fT ? 0 : yT, fT ? KT.volume(MT.gain, TT) : (MT.fadeFrom = OT, MT.fadeAt = this.now(), KT.fade(OT, MT.gain, yT, TT)), lT && (fT ? KT.stop(TT) : MT.stopTimer = setTimeout((() => {
          MT.stopTimer = void 0, KT.stop(TT)
        }), yT))
      }
      gainNow(TT) {
        if (TT.fadeMs > 0) {
          const kT = (this.now() - TT.fadeAt) / TT.fadeMs;
          if (kT < 1) return TT.fadeFrom + (TT.gain - TT.fadeFrom) * Math.max(0, kT);
          TT.fadeMs = 0
        }
        return TT.gain
      }
      forget(TT) {
        this.started.delete(TT);
        const kT = this.live.get(TT);
        kT && (uk(kT), this.live.delete(TT), 0 !== kT.handle && this.core.get(kT.handle) === TT && this.core.delete(kT.handle))
      }
    }

    function Zk(TT, kT) {
      return 2 * TT + (kT ? 1 : 0)
    }

    function uk(TT) {
      void 0 !== TT.stopTimer && (clearTimeout(TT.stopTimer), TT.stopTimer = void 0)
    }
    var Xk = cT(40230),
      dk = cT(38935);
    class Lk {
      constructor(TT, kT, cT, lT) {
        this.key = TT, this.model = kT, this.host = lT, this.DA = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.ZlT = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, this.tailView = void 0, this.tailCut = new Uint8Array(0), this.made = !1, this.yv = !1, this.DA = Math.max(1, Math.ceil(cT)), this.records = new Float32Array(this.DA * fk.e), this.isDirty = new Uint8Array(this.DA), this.tail = new Uint8Array(this.DA * vT.yc.Bytes), this.tailView = new DataView(this.tail.buffer), this.make(lT.cmd())
      }
      setOrigin(TT, kT, cT) {
        this.origin[0] = TT, this.origin[1] = kT, this.origin[2] = cT
      }
      markDirty(TT) {
        !this.yv && TT >= 0 && TT < this.DA && TT < vT.yc.Max && this.bv(TT, TT + 1)
      }
      commit(TT) {
        if (this.yv) return;
        (TT = Math.min(Math.max(Math.floor(TT), 0), this.DA, vT.yc.Max)) > this.count && this.bv(this.count, TT), this.count = TT;
        const {
          origin: kT,
          sentOrigin: cT,
          dirtyList: lT
        } = this, MT = this.ZlT !== TT, KT = cT[0] !== kT[0] || cT[1] !== kT[1] || cT[2] !== kT[2];
        if (0 === lT.length && !MT && !KT) return;
        const OT = this.host.cmd();
        if (!OT || !this.make(OT)) return;
        const yT = lT.length,
          {
            records: fT,
            tailView: xT
          } = this;
        for (let IT = 0; IT < yT; IT++) {
          const TT = lT[IT],
            kT = TT * fk.e,
            cT = IT * vT.yc.Bytes,
            MT = 0 !== fT[kT + fk.f] ? vT.yc.Hidden : 0;
          xT.setUint32(cT, (TT | MT) >>> 0, !0), xT.setFloat32(cT + 4, fT[kT], !0), xT.setFloat32(cT + 8, fT[kT + 1], !0), xT.setFloat32(cT + 12, fT[kT + 2], !0)
        }
        if ((0, vT.df)(OT, 0, this.key, TT, kT, yT, this.tailOf(yT))) {
          for (let TT = 0; TT < yT; TT++) this.isDirty[lT[TT]] = 0;
          lT.length = 0, this.ZlT = TT, cT[0] = kT[0], cT[1] = kT[1], cT[2] = kT[2]
        }
      }
      grow(TT) {
        (TT = Math.ceil(TT)) <= this.DA || this.yv || (this.records = (0, dk.b)(this.records, new Float32Array(TT * fk.e)), this.isDirty = (0, dk.b)(this.isDirty, new Uint8Array(TT)), this.tail = new Uint8Array(TT * vT.yc.Bytes), this.tailView = new DataView(this.tail.buffer), this.DA = TT)
      }
      dispose() {
        this.yv || (this.yv = !0, this.host.yv(this, this.made ? this.key : null))
      }
      make(TT) {
        if (!this.made && TT) {
          const {
            item: kT,
            scale: cT,
            yaw: lT
          } = this.model;
          this.made = (0, vT.gf)(TT, 0, this.key, kT, cT, lT)
        }
        return this.made
      }
      tailOf(TT) {
        const kT = TT * vT.yc.Bytes;
        return this.tailCut.buffer === this.tail.buffer && this.tailCut.length === kT || (this.tailCut = this.tail.subarray(0, kT)), this.tailCut
      }
      bv(TT, kT) {
        const {
          dirtyList: cT,
          isDirty: lT
        } = this;
        for (let MT = TT; MT < kT; MT++) 0 === lT[MT] && (lT[MT] = 1, cT.push(MT))
      }
    }
    var Rk = cT(608);
    class gk {
      constructor(TT) {
        this.keys = 0, this.live = new Set, this.owing = new Set, this.host = void 0, this.host = {
          cmd: TT,
          owes: TT => {
            this.owing.add(TT)
          },
          settled: (TT, kT) => {
            this.owing.delete(TT), kT && this.live.delete(TT)
          }
        }
      }
      create(TT, kT) {
        if (cT = TT, !Rk.o.includes(cT)) return null;
        var cT;
        const lT = new Uk(++this.keys, IT.i.indexOf(TT), kT, this.host);
        return this.live.add(lT), lT
      }
      disposeAll() {
        for (const TT of [...this.live]) TT.dispose()
      }
      flush() {
        if (0 === this.owing.size) return;
        const TT = this.host.cmd();
        for (const kT of this.owing)
          if (!kT.sync(TT)) return
      }
    }
    class Uk {
      constructor(TT, kT, cT, lT) {
        this.key = TT, this.lifeform = kT, this.scale = cT, this.host = lT, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.owed = 1, this.yv = !1, this.sync()
      }
      setPose(TT, kT) {
        this.yv || (this.feet[0] = TT[0], this.feet[1] = TT[1], this.feet[2] = TT[2], this.yaw = kT, this.owed |= 2, this.sync())
      }
      setVisible(TT) {
        this.yv || TT === this.visible || (this.visible = TT, this.owed |= 4, this.sync())
      }
      dispose() {
        this.yv || (this.yv = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
      }
      sync() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.host.cmd();
        return this.write(TT) ? (this.host.settled(this, this.yv), !0) : (this.host.owes(this), !1)
      }
      write(TT) {
        if (!TT) return this.owed = 0, !0;
        if (1 & this.owed) {
          if (!(0, vT.mf)(TT, 0, this.key, this.lifeform, this.scale)) return !1;
          this.owed &= -2
        }
        const kT = (2 & this.owed ? vT.Xc.Pose : 0) | (4 & this.owed ? vT.Xc.Visible : 0);
        if (0 !== kT) {
          if (!(0, vT.lf)(TT, 0, this.key, kT, this.visible ? 1 : 0, this.feet, this.yaw)) return !1;
          this.owed &= -7
        }
        if (8 & this.owed) {
          if (!(0, vT.if)(TT, 0, this.key)) return !1;
          this.owed = 0
        }
        return !0
      }
    }
    var Yk = cT(40675);

    function Bk(TT, kT, cT, lT) {
      return (0, Yk.e)(), (0, vT.eg)(TT, kT, cT, lT)
    }
    var Wk = cT(38938),
      nk = cT(40219);
    const pk = [0, 0, 0],
      ik = [0, 0, 0],
      qk = [0, 0, 0],
      sk = [0, 0, 0],
      Tc = {
        origin: [0, 0, 0],
        direction: [0, 0, 1]
      },
      kc = [0, 0, 0],
      cc = [0, 0],
      lc = [1, 1, 1],
      Mc = 1 / 3;
    const Kc = xk.g;

    function Oc(TT) {
      const kT = xk.c[TT],
        cT = kT && xk.g[kT.mainMultiblock];
      return cT && {
        main: cT,
        x: kT.compX,
        y: kT.compY,
        z: kT.compZ
      }
    }

    function yc(TT) {
      if (null === TT || void 0 === TT) return vT.bd;
      const kT = +TT;
      return Number.isInteger(kT) && kT >= -2147483648 && kT <= 2147483647 && String(kT) === String(TT) ? kT : vT.bd
    }

    function fc(TT, kT, cT) {
      return (0, vT.mg)(TT, 0, kT, null !== cT && void 0 !== cT ? cT : Number.NaN)
    }
    class xc {
      constructor(TT) {
        this.deps = TT, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new Wk.b((() => this.tables.getClientOption("forcedCameraDirectionTransitionMs")), (TT => {
          var kT, cT;
          null === (kT = (cT = this.deps).setLocalOptions) || void 0 === kT || kT.call(cT, TT)
        })), this.mobModels = new gk((() => this.deps.cmd())), this.owedFrees = [], this.pendingStyle = void 0, this.pendingFar = void 0, this.farSet = !1, this.routeMesh = 0, this.routeOffset = 0, this.routeLook = "", this.routeSlide = {
          uvOffset: [0, 0]
        }, this.poolHost = {
          cmd: () => this.deps.cmd(),
          yv: (TT, kT) => {
            this.livePools.delete(TT), null !== kT && (this.owedFrees.push(kT), this.flushOwed())
          }
        }, this.api = TT.api, this.live = TT.live, this.chunks = TT.chunks, this.items = TT.items, this.tables = TT.tables
      }
      isLocal(TT) {
        return null !== TT && void 0 !== TT && +TT === this.api.localId
      }
      assertLocal(TT, kT) {
        if (!this.isLocal(TT)) throw new Error(`Attempted to ${kT} for a player that is not the local player`)
      }
      kN(TT) {
        const kT = this.api.kN(TT);
        if (!kT) throw new Error(`Entity ${TT} has no replicated position`);
        return kT
      }
      checkValid(TT) {
        return !!this.deps.isSessionLive() && (null === TT || void 0 === TT || this.api.checkValid(TT))
      }
      isAlive(TT) {
        return !1 !== this.api.isAlive(TT)
      }
      getItemStat(TT, kT, cT) {
        return this.isLocal(TT) || null !== TT && "Player" === this.api.getEntityType(TT) ? this.tables.getItemStat(kT, cT) : this.tables.getDefaultItemStat(kT, cT)
      }
      getClientOption(TT, kT) {
        return this.assertLocal(TT, "get a client option"), this.tables.getClientOption(kT)
      }
      openShop(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cT = arguments.length > 2 ? arguments[2] : void 0;
        this.assertLocal(TT, "open shop"), OT.k.nt("showShopFromServer", {
          toggle: kT,
          Ok: cT
        }, !0)
      }
      sendMessage(TT, kT, cT) {
        this.assertLocal(TT, "send a message");
        const lT = "string" === typeof kT ? [{
          str: kT,
          style: cT
        }] : kT;
        OT.k.nt("chat", {
          content: lT
        }, !0)
      }
      getEntityType(TT) {
        return this.api.getEntityType(TT)
      }
      getEntityName(TT) {
        const kT = yc(TT);
        return kT === vT.bd ? void 0 : (0, Xk.j)(this.api, kT)
      }
      hasEffect(TT, kT) {
        const cT = yc(TT);
        return cT !== vT.bd && (0, Xk.g)(this.api, cT, kT)
      }
      getMetaInfo(TT) {
        return this.tables.getMetaInfo(TT)
      }
      getPlayerDbId(TT) {
        return this.assertLocal(TT, "get a DB ID"), this.deps.playerDbId()
      }
      getBlockData(TT, kT, cT) {
        if (!this.chunks.dataCleared(TT, kT, cT)) return (0, Xk.c)(this.api, TT, kT, cT)
      }
      Qm(TT, kT, cT, lT) {
        this.setBlockId(TT, kT, cT, this.tables.getItemId(lT))
      }
      setOtherEntitySetting(TT, kT, cT, lT) {
        if (!this.isLocal(TT)) throw new Error("Attempted to set an other-entity setting for a player that is not the local player");
        if (!Object.hasOwn(vT.nd, cT)) throw new Error(`Unknown other-entity setting ${cT}`);
        const MT = vT.nd[cT],
          KT = yc(kT);
        if (KT === vT.bd || !this.deps.beforeWrite()) return;
        const OT = (0, ET.g)(lT);
        if (OT.length > 16384) throw new Error(`The other-entity setting ${cT}'s value is over 16384 bytes`);
        const yT = this.api.memoryView(Uint8Array, this.api.scratch(), OT.length, "set_other_entity_setting's value");
        yT && (yT.set(OT), this.api.queries.setOtherEntitySetting(KT, MT, OT.length))
      }
      getPositionView(TT) {
        return this.live.position(+TT)
      }
      readDrawnPosition(TT, kT) {
        return this.api.readDrawnPosition(yc(TT), kT)
      }
      getDrawnHeading(TT) {
        const kT = yc(TT),
          cT = (kT === vT.bd ? 0 : this.api.queries.directorEntity(kT)) >= vT.Cb.BYTES ? this.api.memoryData(this.api.scratch(), vT.Cb.BYTES, 8, "getDrawnHeading's DirectorEntity") : null;
        if (!cT) return null;
        if (1 === vT.Cb.headingIsDrawn(cT, 0)) return vT.Cb.heading(cT, 0);
        const lT = this.api.apiView;
        return this.isLocal(TT) && 0 === (vT.A.playerFlags(lT, 0) & vT.Od.FreeCam) ? vT.A.heading(lT, 0) : null
      }
      getLocalPlayerMovement() {
        const TT = vT.A.playerFlags(this.api.apiView, 0);
        return 0 === (TT & vT.Od.Replay) && this.api.readDrawnPosition(this.api.localId, qk) ? {
          onGround: 0 !== (TT & vT.Od.OnGround),
          jumpHeld: 0 !== (TT & vT.Od.JumpHeld)
        } : null
      }
      ckT(TT) {
        return this.isLocal(TT) ? this.items.ty() : null
      }
      getInventoryItems() {
        return this.items.playerItems()
      }
      getHeldGunInaccuracy() {
        var TT, kT;
        return "Gun" === (null === (TT = this.aliveHeld()) || void 0 === TT || null === (kT = TT.typeObj) || void 0 === kT ? void 0 : kT.type) ? this.items.inaccuracy : null
      }
      aliveHeld() {
        return !1 === this.api.isAlive(this.api.localId) ? null : this.items.ty()
      }
      isCrosshairShown() {
        var TT, kT;
        const cT = (0, Ak.d)(lT.e.get("crosshairGameView"), lT.e.get("crosshairShownOverride"));
        if (null !== cT) return cT;
        const MT = null === (TT = this.aliveHeld()) || void 0 === TT ? void 0 : TT.typeObj,
          KT = "Gun" === (null === MT || void 0 === MT ? void 0 : MT.type),
          OT = KT || !0 === (null === MT || void 0 === MT ? void 0 : MT.showsAimingUi),
          yT = 0 === (vT.A.playerFlags(this.api.apiView, 0) & vT.Od.ZoomFirstPerson),
          fT = null !== (kT = this.tables.getClientOption("gunshotOrigin")) && void 0 !== kT ? kT : null;
        return (0, Ak.g)({
          gun: KT,
          aimable: OT
        }, yT, (0, Ck.b)(), fT)
      }
      setCrosshairShown(TT) {
        lT.e.set({
          crosshairShownOverride: TT
        })
      }
      getInventoryFreeSlotCount(TT) {
        return this.isLocal(TT) ? this.items.freeSlots() : null
      }
      getSelectedInventorySlotI(TT) {
        return this.isLocal(TT) ? this.items.selectedSlot : null
      }
      getItemSlot(TT, kT) {
        return this.isLocal(TT) ? this.items.slot(kT) : null
      }
      swapInventorySlots(TT, kT) {
        return this.items.swap(TT, kT)
      }
      isPlayerCrouching(TT) {
        if (this.isLocal(TT)) return 0 !== (vT.A.playerFlags(this.api.apiView, 0) & vT.Od.Crouching);
        const kT = yc(TT);
        return kT !== vT.bd && 1 === this.api.queries.entityCrouching(kT)
      }
      getMiningBlock() {
        return this.live.breakingPosition()
      }
      isMining() {
        return 0 !== (vT.A.playerFlags(this.api.apiView, 0) & vT.Od.AttemptingBreak)
      }
      getTargetedBlock() {
        return this.live.U_()
      }
      getActionRay() {
        const TT = this.api.apiView;
        for (let kT = 0; kT < 3; kT++) Tc.origin[kT] = vT.A.K8(TT, 0, kT), Tc.direction[kT] = vT.A.actionDir(TT, 0, kT);
        return Tc
      }
      canModifyBlockAt(TT, kT, cT) {
        return 1 === this.api.queries.canModify(TT, kT, cT)
      }
      isSolidToPlayerBlockId(TT) {
        return this.tables.isSolidBlockId(TT) && !this.chunks.isWalkThrough(TT)
      }
      blockNameToBlockId(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.tables.blockNameToBlockId(TT, kT)
      }
      blockIdToBlockName(TT) {
        return this.tables.nameOfId(TT)
      }
      aTT(TT, kT, cT, lT, MT) {
        return 1 === this.api.queries.terrainBlocked(lT, TT, kT, cT, yc(null !== MT && void 0 !== MT ? MT : null))
      }
      getChunkVersion(TT, kT, cT) {
        return this.chunks.version(TT, kT, cT)
      }
      scanBlocks(TT, kT, cT, lT, MT, KT, OT, yT) {
        return this.chunks.scan(TT, kT, cT, lT, MT, KT, OT, yT)
      }
      isBlockInLoadedChunk(TT, kT, cT) {
        return this.chunks.isLoaded(TT, kT, cT)
      }
      getBlockId(TT, kT, cT) {
        return this.chunks.Rx(TT, kT, cT)
      }
      playSound(TT, kT, cT, lT, MT) {
        let KT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (!this.isLocal(TT)) return null;
        const OT = this.playSoundFrom(kT, cT, MT, KT);
        return 1 === lT ? OT : OT.rate(lT)
      }
      preloadSounds(TT) {
        var kT, cT;
        null === (kT = (cT = this.deps).preloadSounds) || void 0 === kT || kT.call(cT, TT)
      }
      playSoundFrom(TT, kT, cT, lT) {
        var MT, KT;
        const OT = this.deps.playSound;
        if (!OT) return mk.c;
        const yT = null === cT || void 0 === cT ? void 0 : cT.ec,
          fT = null !== (MT = null === cT || void 0 === cT ? void 0 : cT.maxHearDist) && void 0 !== MT ? MT : Ik.f,
          xT = null !== (KT = null === cT || void 0 === cT ? void 0 : cT.refDistance) && void 0 !== KT ? KT : Ik.g;
        let IT = null;
        if (Array.isArray(yT)) pk[0] = yT[0], pk[1] = yT[1], pk[2] = yT[2], IT = pk;
        else if (void 0 !== yT && null !== yT) {
          const TT = yc(yT);
          if (!this.api.isLocal(TT)) {
            if (!this.api.readPosition(TT, pk)) return mk.c;
            IT = pk
          }
        }
        return OT(TT, kT, IT, IT && this.ear(), fT, xT, lT)
      }
      ear() {
        if (this.api.readPosition(this.api.localId, ik)) ik[1] += zk;
        else {
          const TT = this.api.apiView;
          if (0 === vT.A.viewProj(TT, 0, 3) && 0 === vT.A.viewProj(TT, 0, 7) && 0 === vT.A.viewProj(TT, 0, 11)) return null;
          for (let kT = 0; kT < 3; kT++) ik[kT] = vT.A.eye(TT, 0, kT)
        }
        return Number.isFinite(ik[0] + ik[1] + ik[2]) ? ik : null
      }
      setBlockId(TT, kT, cT, lT) {
        if (!Number.isInteger(lT) || lT < 0 || lT > 65535) throw new Error(`Invalid block id ${lT}`);
        if (!this.deps.beforeWrite() || !this.chunks.isLoaded(TT, kT, cT)) return;
        const MT = Math.floor(TT),
          KT = Math.floor(kT),
          OT = Math.floor(cT),
          yT = this.predictedCells(MT, KT, OT, lT);
        if (1 === this.api.queries.Qm(MT, KT, OT, lT)) {
          for (let TT = 0; TT < yT.length; TT += 5) this.chunks.setOverlay(yT[TT], yT[TT + 1], yT[TT + 2], yT[TT + 3], 1 === yT[TT + 4]);
          this.live.refreshTarget()
        }
      }
      particlesEnabled() {
        return this.deps.particles.enabled()
      }
      createParticles(TT, kT) {
        return this.deps.particles.create(TT, kT)
      }
      playParticleEffect(TT) {
        this.deps.particles.playEffect(TT)
      }
      burstParticlePreset(TT, kT, cT) {
        this.deps.particles.burstPreset(TT, kT, cT)
      }
      createGameMesh(TT, kT, cT) {
        const lT = ++this.meshKeys,
          MT = this.deps.cmd();
        if (!MT) return lT;
        const {
          look: KT,
          colour: OT
        } = function(TT) {
          switch (TT.kind) {
            case void 0:
            case "flatEmissive":
              return TT.onTop ? {
                look: vT.cc.FlatOnTop,
                colour: [...TT.rgb, TT.alpha]
              } : TT.opaque ? {
                look: vT.cc.FlatOpaque,
                colour: [...TT.rgb, 1]
              } : {
                look: vT.cc.Flat,
                colour: [...TT.rgb, TT.alpha]
              };
            case "chevronPath":
              return {
                look: vT.cc.Chevrons, colour: [...(0, jk.e)(TT.colour), TT.alpha]
              };
            case "furnaceFire":
              return {
                look: vT.cc.FurnaceFire, colour: [1, 1, 1, 1]
              }
          }
        }(kT), yT = Math.floor(TT.positions.length / 3), fT = function(TT, kT) {
          const cT = Math.floor(TT.positions.length / 3),
            lT = TT.indices.length,
            MT = cT * (kT ? 5 : 3),
            KT = new Uint8Array(4 * (MT + lT)),
            OT = new DataView(KT.buffer);
          for (let xT = 0; xT < 3 * cT; xT++) OT.setFloat32(4 * xT, TT.positions[xT], !0);
          if (kT) {
            var yT;
            const kT = null !== (yT = TT.uvs) && void 0 !== yT ? yT : [];
            for (let TT = 0; TT < 2 * cT; TT++) {
              var fT;
              OT.setFloat32(4 * (3 * cT + TT), null !== (fT = kT[TT]) && void 0 !== fT ? fT : 0, !0)
            }
          }
          for (let xT = 0; xT < lT; xT++) OT.setUint32(4 * (MT + xT), TT.indices[xT], !0);
          return KT
        }(TT, (0, fk.i)(kT));
        return (0, vT.We)(MT, 0, lT, KT, OT, cT, yT, TT.indices.length, fT) && this.liveMeshes.add(lT), lT
      }
      setGameMesh(TT, kT) {
        var cT;
        const lT = this.deps.cmd();
        if (!lT) return;
        let MT = 0;
        kT.anchor && (MT |= vT.gc.Anchor, kc[0] = kT.anchor[0], kc[1] = kT.anchor[1], kc[2] = kT.anchor[2]), void 0 !== kT.visible && (MT |= vT.gc.Visible), kT.uvOffset && (MT |= vT.gc.UvOffset, cc[0] = kT.uvOffset[0], cc[1] = kT.uvOffset[1]);
        const KT = null !== (cT = kT.visibility) && void 0 !== cT ? cT : 1;
        void 0 !== kT.visibility && (MT |= vT.gc.Visibility), kT.scale && (MT |= vT.gc.Scale, lc[0] = kT.scale[0], lc[1] = kT.scale[1], lc[2] = kT.scale[2]), 0 !== MT && (0, vT.$e)(lT, 0, TT, MT, kT.visible ? 1 : 0, kc, cc, KT, lc)
      }
      disposeGameMesh(TT) {
        const kT = this.deps.cmd();
        kT && !(0, vT._e)(kT, 0, TT) || this.liveMeshes.delete(TT)
      }
      hasPackModel(TT) {
        var kT, cT, lT;
        return null !== (kT = null === (cT = (lT = this.deps).hasPackModel) || void 0 === cT ? void 0 : cT.call(lT, TT)) && void 0 !== kT && kT
      }
      disposeGameOutput() {
        const TT = TT => {
          try {
            TT()
          } catch (kT) {
            console.error("Error freeing client game output", kT)
          }
        };
        for (const kT of [...this.liveMeshes]) TT((() => {
          this.disposeGameMesh(kT)
        }));
        for (const kT of [...this.livePools]) TT((() => {
          kT.dispose()
        }));
        TT((() => {
          this.mobModels.disposeAll()
        })), TT((() => {
          this.setGroundArrowStyle(null)
        })), TT((() => {
          this.setRouteChevrons(null), this.routeOffset = 0, this.routeLook = ""
        })), TT((() => {
          this.setCrosshairShown(null)
        })), TT((() => {
          this.cameraTurn.dispose()
        })), TT((() => {
          this.farSet && (this.farSet = !1, this.setCameraFar(null))
        }))
      }
      createInstancePool(TT, kT) {
        const cT = this.tables.idOf(TT.item);
        if (void 0 === cT) return null;
        const lT = new Lk(++this.poolKeys, {
          item: cT,
          scale: TT.scale,
          yaw: TT.yaw
        }, kT, this.poolHost);
        return this.livePools.add(lT), lT
      }
      createMobModel(TT, kT) {
        return this.mobModels.create(TT, kT)
      }
      setRouteChevrons(TT) {
        if (0 !== this.routeMesh && (this.disposeGameMesh(this.routeMesh), this.routeMesh = 0), !TT || 0 === TT.cells.length) return;
        const kT = `${TT.colour} ${TT.alpha}`;
        kT !== this.routeLook && (this.routeLook = kT, this.routeOffset = 0), this.routeMesh = this.createGameMesh(function(TT) {
          const [kT, cT, lT] = TT[0].pos, MT = [], KT = [], OT = [];
          return TT.forEach(((TT, yT) => {
            let {
              pos: fT,
              way: [xT, IT]
            } = TT;
            const AT = fT[0] - kT + .5,
              CT = fT[1] - cT + .04,
              jT = fT[2] - lT + .5,
              [vT, tT] = [.35 * -IT, .35 * xT],
              [hT, NT] = [yT * Mc, (yT + 1) * Mc],
              QT = MT.length / 3;
            MT.push(AT - .5 * xT + vT, CT, jT - .5 * IT + tT), MT.push(AT - .5 * xT - vT, CT, jT - .5 * IT - tT), MT.push(AT + .5 * xT + vT, CT, jT + .5 * IT + tT), MT.push(AT + .5 * xT - vT, CT, jT + .5 * IT - tT), KT.push(0, hT, 1, hT, 0, NT, 1, NT), OT.push(QT, QT + 1, QT + 2, QT + 1, QT + 3, QT + 2)
          })), {
            positions: MT,
            uvs: KT,
            indices: OT
          }
        }(TT.cells), {
          kind: "chevronPath",
          colour: TT.colour,
          alpha: TT.alpha
        }, TT.cells[0].pos), this.setRouteSlide()
      }
      slideRoute(TT) {
        0 !== this.routeMesh && (this.routeOffset = (this.routeOffset + Math.min(TT, 250) / 1e3 * 1.2 * Mc) % 1, this.setRouteSlide())
      }
      setRouteSlide() {
        this.routeSlide.uvOffset[1] = -this.routeOffset, this.setGameMesh(this.routeMesh, this.routeSlide)
      }
      setGroundArrowStyle(TT) {
        this.pendingStyle = TT, this.flushOwed()
      }
      flushOwed() {
        this.mobModels.flush();
        const TT = this.owedFrees;
        if (0 === TT.length && void 0 === this.pendingStyle && void 0 === this.pendingFar) return;
        const kT = this.deps.cmd();
        if (!kT) return TT.length = 0, void(this.pendingFar = void 0);
        let cT = 0;
        for (; cT < TT.length && (0, vT.ef)(kT, 0, TT[cT]);) cT++;
        TT.splice(0, cT);
        const lT = this.pendingStyle;
        if (void 0 !== lT) {
          (lT ? (0, vT.og)(kT, 0, lT.width, lT.alpha, 1, lT.endAtSolidFace ? 1 : 0) : (0, vT.og)(kT, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
        }
        const MT = this.pendingFar;
        void 0 !== MT && (0, vT.lg)(kT, 0, null !== MT && void 0 !== MT ? MT : 0, null === MT ? 1 : 0) && (this.pendingFar = void 0)
      }
      setNametagOffset(TT, kT) {
        const cT = this.deps.cmd(),
          lT = yc(TT);
        cT && lT !== vT.bd && (0, vT.tg)(cT, 0, lT, kT)
      }
      setFacingTolerance(TT, kT) {
        const cT = this.deps.cmd(),
          lT = yc(TT);
        cT && lT !== vT.bd && fc(cT, lT, kT)
      }
      forEachEntity(TT) {
        const {
          api: kT
        } = this;
        for (let cT = 0; cT < kT.idStr.length; cT++) {
          const lT = kT.idStr[cT];
          null === lT || aT(kT.kinds[cT]) || TT(lT)
        }
      }
      getEntityInfo(TT) {
        return this.deps.entityInfo.get(TT)
      }
      isEntityInteractable(TT) {
        const kT = yc(TT);
        return kT !== vT.bd && 1 === this.api.queries.entityInteractable(kT)
      }
      isLocalPlayer(TT) {
        return this.isLocal(TT)
      }
      getLineOwner(TT) {
        var kT;
        const cT = null === (kT = this.deps.entityInfo.get(TT)) || void 0 === kT ? void 0 : kT.meshOpts;
        if (!cT) return null;
        try {
          const {
            lineToEId: TT
          } = JSON.parse(cT);
          return null !== TT && void 0 !== TT ? TT : null
        } catch {
          return null
        }
      }
      getCameraPosition() {
        const TT = this.api.apiView;
        return sk[0] = vT.A.eye(TT, 0, 0), sk[1] = vT.A.eye(TT, 0, 1), sk[2] = vT.A.eye(TT, 0, 2), sk
      }
      getCameraFar() {
        return vT.A.cameraFar(this.api.apiView, 0)
      }
      setCameraFar(TT) {
        null !== TT && (this.farSet = !0), this.pendingFar = TT, this.flushOwed()
      }
      turnCamera(TT, kT) {
        this.cameraTurn.turn(TT, kT)
      }
      clearPickupDelay(TT) {
        const kT = this.deps.cmd(),
          cT = yc(TT);
        kT && cT !== vT.bd && (0, vT.De)(kT, 0, cT)
      }
      sendChat(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const cT = this.deps.sendCmd();
        cT && Bk(cT, 0, nk.b.Chat, (0, ET.g)((0, nk.h)({
          vI: TT,
          tI: kT
        })))
      }
      sendCommand(TT) {
        TT.length <= 119 && this.sendChat(`/${TT}`)
      }
      predictedCells(TT, kT, cT, lT) {
        const MT = this.chunks,
          KT = [],
          OT = (TT, kT, cT, lT, MT) => {
            KT.push(TT, kT, cT, lT, this.tables.blockRootId(MT) === this.tables.blockRootId(lT) ? 0 : 1)
          },
          yT = MT.Rx(TT, kT, cT),
          fT = Oc(yT);
        if (fT) {
          const [lT, KT, xT] = [TT - fT.x, kT - fT.y, cT - fT.z], IT = Kc[MT.Rx(lT, KT, xT)], AT = null === IT || void 0 === IT ? void 0 : IT.positions.some((TT => TT.id === yT && TT.x === fT.x && TT.y === fT.y && TT.z === fT.z));
          for (const TT of (AT && IT ? IT : fT.main).positions) MT.Rx(lT + TT.x, KT + TT.y, xT + TT.z) === TT.id && OT(lT + TT.x, KT + TT.y, xT + TT.z, 0, TT.id)
        }
        const xT = Oc(lT);
        if (xT)
          for (const AT of xT.main.positions) {
            const [lT, KT, yT] = [TT + AT.x - xT.x, kT + AT.y - xT.y, cT + AT.z - xT.z];
            OT(lT, KT, yT, AT.id, MT.Rx(lT, KT, yT))
          } else OT(TT, kT, cT, lT, yT);
        const IT = this.tables;
        if ((0 !== IT.attachedTopOf(yT) || 0 !== IT.attachedTopOf(lT)) && MT.isLoaded(TT, kT + 1, cT)) {
          let fT = MT.Rx(TT, kT + 1, cT);
          for (let lT = 0; lT < KT.length; lT += 5) KT[lT] === TT && KT[lT + 1] === kT + 1 && KT[lT + 2] === cT && (fT = KT[lT + 3]);
          const xT = this.attachedTopWrite(yT, lT, fT);
          void 0 !== xT && OT(TT, kT + 1, cT, xT, fT)
        }
        return KT
      }
      attachedTopWrite(TT, kT, cT) {
        const lT = this.tables,
          MT = lT.attachedTopOf(TT),
          KT = lT.attachedTopOf(kT),
          OT = 0 !== MT && 0 !== cT && lT.blockRootId(cT) === lT.blockRootId(MT);
        return 0 !== MT && 0 !== KT && lT.blockRootId(TT) === lT.blockRootId(kT) ? OT && cT !== KT ? KT : void 0 : 0 === KT || !OT && 0 !== cT ? OT ? 0 : void 0 : KT
      }
    }
    const Ic = vT.vc + vT.xc * vT.Fc.BYTES,
      Ac = 2147483647,
      Cc = new TextDecoder,
      jc = new TextEncoder,
      vc = Object.freeze({
        ky: 0,
        oI: null,
        amountAddedToSlot: 0
      }),
      tc = new Proxy({}, {
        get: () => () => vT.jd
      });

    function hc(TT) {
      return Number.isInteger(TT) && TT >= 0 && TT <= 65535
    }

    function Nc(TT) {
      return Number.isInteger(TT) && TT >= 0 && TT <= 4294967295
    }
    class Qc {
      constructor(TT) {
        this.deps = TT, this.sl = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(vT.xc), this.ids = new Uint16Array(vT.xc), this.amounts = new Uint16Array(vT.xc), this.attrRead = new Float64Array(vT.xc).fill(-1), this.stale = new Uint16Array(vT.xc), this.staleVersion = new Uint32Array(vT.xc), this.instances = new Uint32Array(vT.xc), this.viewPtr = 0, this.viewVersion = -1, this.len = 0, this.selected = 0, this.slotIconId = 0, this.stopped = !1, this.listeners = new Set
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
      slot(TT) {
        var kT;
        return Number.isInteger(TT) && TT >= 0 && TT < this.len && 0 !== this.ids[TT] && null !== (kT = this.facades[TT]) && void 0 !== kT ? kT : null
      }
      ty() {
        return this.slot(this.selected)
      }
      playerItems() {
        const TT = [];
        for (let kT = 0; kT < Math.min(vT.ud, this.len); kT++) TT.push(this.slot(kT));
        return TT
      }
      freeSlots() {
        let TT = 0;
        for (let kT = 0; kT < Math.min(vT.ud - vT.l, this.len); kT++) 0 === this.ids[kT] && TT++;
        return TT
      }
      amountOf(TT) {
        let kT = 0;
        for (let lT = 0; lT < Math.min(vT.ud, this.len); lT++) {
          const MT = this.slot(lT);
          var cT;
          if ((null === MT || void 0 === MT ? void 0 : MT.name) === TT) kT += null !== (cT = MT.amount) && void 0 !== cT ? cT : 1
        }
        return kT
      }
      instance(TT) {
        var kT;
        return null !== (kT = this.instances[TT]) && void 0 !== kT ? kT : 0
      }
      watch(TT) {
        return this.listeners.add(TT), () => {
          this.listeners.delete(TT)
        }
      }
      touch() {
        this.version++
      }
      flush(TT) {
        if (this.version !== this.notified || this.iconChanged) {
          this.notified = this.version, this.iconChanged = !1;
          for (const cT of [...this.listeners]) try {
            cT()
          } catch (kT) {
            TT(kT)
          }
        }
      }
      chestOpened(TT, kT, cT) {
        this.sl[0] = TT, this.sl[1] = kT, this.sl[2] = cT, this.version++
      }
      refresh() {
        const TT = this.deps.api.apiView,
          kT = vT.A.inventoryViewPtr(TT, 0),
          cT = vT.A.inventoryVersion(TT, 0),
          lT = vT.A.selectedSlot(TT, 0);
        lT !== this.selected && (this.selected = lT, this.version++);
        const MT = vT.A.slotIcon(TT, 0);
        if (MT !== this.slotIconId && (this.slotIconId = MT, this.iconChanged = !0), kT === this.viewPtr && cT === this.viewVersion) return;
        this.viewPtr = kT, this.viewVersion = cT;
        const KT = this.deps.api.memoryData(kT, Ic, 4, "the inventory view"),
          OT = KT ? Math.min(KT.getUint32(0, !0), vT.xc) : 0;
        OT !== this.len && (this.len = OT, this.version++);
        let yT = 0;
        for (let fT = 0; fT < vT.xc; fT++) {
          const TT = vT.vc + fT * vT.Fc.BYTES,
            kT = null !== KT && fT < OT ? vT.Fc.item(KT, TT) : 0;
          if (0 === kT || null === KT) {
            0 !== this.ids[fT] && (this.ids[fT] = 0, this.attrRead[fT] = -1, this.instances[fT]++, this.version++);
            continue
          }
          const cT = vT.Fc.amount(KT, TT),
            lT = vT.Fc.attrVersion(KT, TT);
          kT === this.ids[fT] && cT === this.amounts[fT] || this.fill(fT, kT, cT), lT !== this.attrRead[fT] && (this.stale[yT] = fT, this.staleVersion[yT] = lT, yT++)
        }
        yT > 0 && this.fetchAttributes(yT)
      }
      fill(TT, kT, cT) {
        const {
          tables: lT
        } = this.deps, MT = kT !== this.ids[TT];
        let KT = this.facades[TT];
        KT || (KT = {
          name: "",
          amount: null,
          attributes: {
            customAttributes: {}
          },
          typeObj: null
        }, this.facades[TT] = KT), MT && (KT.name = lT.nameOfId(kT), KT.typeObj = lT.itemType(kT), KT.attributes = {
          customAttributes: {}
        }, this.attrRead[TT] = -1, this.instances[TT]++), KT.amount = 0 === cT ? null : cT, this.ids[TT] = kT, this.amounts[TT] = cT, this.version++
      }
      fetchAttributes(TT) {
        const {
          api: kT,
          onError: cT
        } = this.deps, lT = kT.memoryView(Uint16Array, kT.scratch(), TT, "item_attributes_batch's slots");
        if (!lT) return void this.markRead(TT);
        lT.set(this.stale.subarray(0, TT));
        const MT = kT.queries.itemAttributesBatch(TT),
          KT = 4294967295 === MT ? null : kT.memoryData(kT.scratch(), MT, 4, "item_attributes_batch's answer");
        if (!KT) return void this.markRead(TT);
        const OT = new Uint8Array(KT.buffer, KT.byteOffset, MT);
        for (let fT = 0; fT + 8 <= MT;) {
          const TT = KT.getUint16(fT, !0),
            kT = KT.getUint32(fT + 4, !0),
            lT = OT.subarray(fT + 8, fT + 8 + kT);
          fT += 8 + (0, CT.ke)(kT);
          const MT = this.facades[TT];
          if (MT && 0 !== this.ids[TT] && 0 !== kT) {
            try {
              MT.attributes = JSON.parse(Cc.decode(lT))
            } catch (yT) {
              cT(yT)
            }
            this.version++
          }
        }
        this.markRead(TT)
      }
      markRead(TT) {
        for (let kT = 0; kT < TT; kT++) this.attrRead[this.stale[kT]] = this.staleVersion[kT]
      }
      swap(TT, kT) {
        return hc(TT) && hc(kT) && this.settle(this.queries().invSwap(TT, kT))
      }
      move(TT, kT, cT) {
        return hc(TT) && hc(kT) && Nc(cT) && this.settle(this.queries().invMove(TT, kT, cT))
      }
      quickMove(TT, kT, cT, lT) {
        var MT, KT;
        if (!hc(TT) || !hc(kT) || !hc(cT) || null !== lT && !Nc(lT)) return null;
        const OT = this.queries().invQuickMove(TT, kT, cT, null === lT ? -1 : Math.min(lT, Ac)),
          yT = OT === vT.jd ? vT.Sb : null !== (MT = null === (KT = this.extras()) || void 0 === KT ? void 0 : KT[1]) && void 0 !== MT ? MT : vT.Sb;
        return this.settle(OT), yT === vT.Sb ? null : yT
      }
      remove(TT, kT, cT) {
        return hc(TT) && Nc(kT) && this.settle(this.queries().invRemove(TT, kT, cT ? 1 : 0))
      }
      selectSlot(TT) {
        return hc(TT) && this.settle(this.queries().selectSlot(TT))
      }
      closeChest() {
        return this.settle(this.queries().closeChest())
      }
      enchant(TT, kT, cT) {
        if (!hc(TT) || !Number.isInteger(kT)) return !1;
        const [lT, MT, KT] = cT;
        return this.settle(this.queries().invEnchant(TT, kT, Math.floor(lT), Math.floor(MT), Math.floor(KT)))
      }
      craft(TT, kT, cT) {
        let lT;
        try {
          lT = this.deps.tables.getItemId(TT)
        } catch {
          return vc
        }
        if (!hc(kT) || null !== cT && (Number.isNaN(cT) || cT < 0)) return vc;
        const MT = null === cT || cT > Ac ? -1 : Math.floor(cT),
          KT = this.queries().craft(lT, kT, MT);
        let OT = vc;
        const yT = KT === vT.jd ? null : this.extras();
        if (yT) {
          const [TT, kT, cT] = yT;
          OT = {
            ky: TT,
            oI: kT === vT.Sb ? null : kT,
            amountAddedToSlot: cT
          }
        }
        return this.settle(KT), OT
      }
      salvage(TT, kT, cT) {
        let lT;
        try {
          lT = this.deps.tables.getItemId(kT)
        } catch {
          return !1
        }
        return hc(TT) && Number.isInteger(cT) && this.settle(this.queries().salvage(TT, lT, Math.max(Math.min(cT, Ac), -Ac)))
      }
      craftingView(TT, kT, cT) {
        var lT;
        if (this.stopped) return null;
        const {
          api: MT,
          onError: KT
        } = this.deps, OT = TT ? jc.encode(TT) : null;
        if (null !== OT) {
          if (OT.length > 1024) return KT(new Error(`The crafting station ${TT}'s name is over 1024 bytes`)), null;
          const kT = MT.memoryView(Uint8Array, MT.scratch(), OT.length, "crafting_view's station");
          if (!kT) return null;
          kT.set(OT)
        }
        const yT = hc(kT) && hc(cT),
          fT = MT.queries.craftingView(null !== (lT = null === OT || void 0 === OT ? void 0 : OT.length) && void 0 !== lT ? lT : 0, yT ? kT : 0, yT ? cT : 0);
        return fT < vT.ub.BYTES ? (MT.reportCorruption(`crafting_view's answer of ${fT} bytes`), null) : MT.memoryData(MT.scratch(), fT, 1, "crafting_view's answer")
      }
      queries() {
        var TT, kT;
        return !1 === (null === (TT = (kT = this.deps).beforeOp) || void 0 === TT ? void 0 : TT.call(kT)) ? (this.stopped = !0, tc) : this.deps.api.queries
      }
      extras() {
        const {
          api: TT
        } = this.deps;
        return TT.memoryView(Uint32Array, TT.scratch(), 3, "a sync query's extra words")
      }
      settle(TT) {
        if (TT === vT.hd)(0, Yk.e)();
        else if (TT !== vT.jd) {
          const kT = this.deps.cmd();
          kT && function(TT, kT, cT) {
            return (0, Yk.e)(), (0, vT.Dg)(TT, kT, cT)
          }(kT, 0, TT) || this.deps.onError(new Error(`Sync op ${TT}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
        }
        return this.stopped || this.refresh(), TT !== vT.jd
      }
    }
    const Sc = 1 / .6,
      Dc = [0, 1, 0],
      ac = [0, 0, 0],
      Fc = new Uint8Array(0),
      rc = 1.2 * vk.f.Ow,
      Pc = new TextEncoder,
      wc = [0, 0, 0],
      mc = [0, 0, 0],
      bc = new Map;

    function zc(TT) {
      let kT = bc.get(TT);
      return kT || (bc.size >= 64 && bc.clear(), kT = Pc.encode(`{"emitRate":${TT}}`), bc.set(TT, kT)), kT
    }

    function Jc(TT) {
      return Number.isFinite(TT) && TT > 0 ? TT : 0
    }

    function oc(TT, kT) {
      for (let cT = 0; cT < 3; cT++) {
        const lT = Math.abs(kT[cT]);
        wc[cT] = TT[cT] - lT, mc[cT] = 2 * lT
      }
      return Number.isFinite(wc[0] + wc[1] + wc[2] + mc[0] + mc[1] + mc[2])
    }

    function Hc(TT, kT) {
      return "pos1" === TT || "pos2" === TT ? void 0 : kT
    }

    function ec(TT, kT, cT) {
      return TT.length > vT.Ld.MaxOpts ? (cT(new Error(`${kT}'s particle opts are over ${vT.Ld.MaxOpts} bytes of JSON`)), null) : TT
    }
    const Gc = {
      moveTo() {},
      setEmitRate() {},
      emit() {},
      emitPoints() {},
      setDirections() {},
      stop() {},
      dispose() {}
    };
    class Vc {
      constructor(TT) {
        this.deps = TT, this.session = 0, this.nextKey = 1, this.live = 0, this.started = !1
      }
      enabled() {
        return null !== this.sink()
      }
      sink() {
        return this.deps.isSessionLive() ? this.deps.cmd() : null
      }
      create(TT, kT) {
        var cT;
        const lT = this.sink(),
          MT = null !== (cT = kT.half) && void 0 !== cT ? cT : ac;
        if (!lT || this.live >= vT.Ld.MaxLiveKeys || this.nextKey > vT.Ld.MaxKey || !oc(kT.pos, MT)) return Gc;
        const KT = this.nextKey,
          OT = ec(function(TT) {
            var kT, cT, lT;
            const MT = JSON.stringify({
              texture: "string" === typeof TT.texture ? TT.texture : "smokePuff",
              DA: TT.DA,
              minLifeTime: TT.minLifeTime,
              maxLifeTime: TT.maxLifeTime,
              minSize: TT.minSize,
              maxSize: TT.maxSize,
              minEmitPower: TT.minEmitPower,
              maxEmitPower: TT.maxEmitPower,
              emitRate: Jc(TT.emitRate),
              gravity: null !== (kT = TT.gravity) && void 0 !== kT ? kT : ac,
              dir1: null !== (cT = TT.dir1) && void 0 !== cT ? cT : Dc,
              dir2: null !== (lT = TT.dir2) && void 0 !== lT ? lT : Dc,
              colorGradients: TT.colorGradients,
              blendMode: TT.blendMode
            });
            return Pc.encode(MT)
          }(TT), "createParticles", this.deps.onError);
        return OT && (0, vT.xf)(lT, 0, KT, 0, vT.Ld.PresetNone, 0, wc, mc, OT) ? (this.nextKey++, this.live++, this.started = !0, new Ec(this, this.session, KT, TT, MT)) : Gc
      }
      playEffect(TT) {
        const kT = this.sink(),
          {
            pos1: cT,
            pos2: lT
          } = TT;
        if (!kT || !cT || !lT) return;
        for (let KT = 0; KT < 3; KT++) wc[KT] = Math.min(cT[KT], lT[KT]), mc[KT] = Math.abs(lT[KT] - cT[KT]);
        if (!Number.isFinite(wc[0] + wc[1] + wc[2] + mc[0] + mc[1] + mc[2])) return;
        const MT = ec(Pc.encode(JSON.stringify(TT, Hc)), "playParticleEffect", this.deps.onError);
        MT && (0, vT.tf)(kT, 0, 0, vT.Ld.PresetNone, vT.Ld.HasBox, 0, wc, mc, MT)
      }
      burstPreset(TT, kT, cT) {
        const lT = this.sink(),
          MT = Math.min(Math.floor(cT), vT.Ld.MaxBurst);
        if (!lT || !Object.hasOwn(vT.kc, TT) || !(MT > 0)) return;
        const KT = rc;
        for (let OT = 0; OT < 3; OT++) wc[OT] = kT[OT] - KT / 2, mc[OT] = KT;
        Number.isFinite(wc[0] + wc[1] + wc[2]) && (0, vT.tf)(lT, 0, 0, vT.kc[TT], vT.Ld.HasBox, MT, wc, mc, Fc)
      }
      sessionEnded() {
        this.session++;
        const TT = this.started ? this.deps.cmd() : null;
        return this.started = !1, this.nextKey = 1, this.live = 0, !TT || (0, vT.Bf)(TT, 0)
      }
      sinkFor(TT) {
        return TT === this.session ? this.deps.cmd() : null
      }
      stop(TT, kT) {
        const cT = this.sinkFor(TT);
        cT && (0, vT.Ef)(cT, 0, kT) && this.live--
      }
    }
    class Ec {
      constructor(TT, kT, cT, lT, MT) {
        this.owner = TT, this.session = kT, this.key = cT, this.half = void 0, this.rate = void 0, this.stopDelayMs = void 0, this.emitted = void 0, this.stopped = !1, this.freed = !1, this.half = [Math.abs(MT[0]), Math.abs(MT[1]), Math.abs(MT[2])], this.rate = Jc(lT.emitRate), this.emitted = this.rate > 0;
        const KT = lT.maxLifeTime * Sc * 1e3 + 250;
        this.stopDelayMs = KT >= 0 ? Math.min(KT, 2147483647) : 250
      }
      sink() {
        return this.stopped ? null : this.owner.sinkFor(this.session)
      }
      moveTo(TT, kT) {
        const cT = this.sink();
        if (cT) {
          if (kT)
            for (let TT = 0; TT < 3; TT++) this.half[TT] = Math.abs(kT[TT]);
          oc(TT, this.half) && (0, vT.Gf)(cT, 0, this.key, vT.Ld.HasBox, wc, mc, Fc)
        }
      }
      setEmitRate(TT) {
        const kT = this.sink(),
          cT = Jc(TT);
        kT && cT !== this.rate && (0, vT.Gf)(kT, 0, this.key, 0, ac, ac, zc(cT)) && (this.rate = cT, this.emitted ||= cT > 0)
      }
      emit(TT) {
        const kT = this.sink(),
          cT = Math.min(Math.floor(TT), vT.Ld.MaxBurst);
        kT && cT > 0 && (0, vT.tf)(kT, 0, this.key, vT.Ld.PresetNone, 0, cT, ac, ac, Fc) && (this.emitted = !0)
      }
      emitPoints(TT, kT, cT) {
        const lT = this.sink(),
          MT = Math.min(Math.floor(cT), vT.Ld.MaxPoints, Math.floor(kT.length / 4));
        if (!lT || !(MT > 0) || !Number.isFinite(TT[0] + TT[1] + TT[2])) return;
        const KT = new Uint8Array(kT.buffer, kT.byteOffset, MT * vT.Ld.PointBytes);
        (0, vT.vf)(lT, 0, this.key, MT, TT, KT) && (this.emitted = !0)
      }
      setDirections(TT, kT) {
        const cT = this.sink();
        if (!cT || !Number.isFinite(TT[0] + TT[1] + TT[2] + kT[0] + kT[1] + kT[2])) return;
        const lT = Pc.encode(JSON.stringify({
          dir1: [TT[0], TT[1], TT[2]],
          dir2: [kT[0], kT[1], kT[2]]
        }));
        (0, vT.Gf)(cT, 0, this.key, 0, ac, ac, lT)
      }
      stop() {
        const TT = this.sink();
        this.stopped = !0, TT && (this.emitted ? (this.rate > 0 && (0, vT.Gf)(TT, 0, this.key, 0, ac, ac, zc(0)), setTimeout((() => {
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
    const Zc = Rk.q,
      uc = new TextDecoder;

    function Xc(TT, kT) {
      const {
        serverIds: cT,
        kinds: lT
      } = TT;
      let MT = 0;
      for (let KT = 0; KT < cT.length; KT++) {
        const TT = cT[KT];
        if (TT !== vT.bd && !aT(lT[KT])) {
          if (MT === kT.length) {
            const TT = new Int32Array(Math.max(64, 2 * MT));
            TT.set(kT), kT = TT
          }
          kT[MT++] = TT
        }
      }
      return {
        ids: kT,
        count: MT
      }
    }

    function dc(TT, kT) {
      return TT.length >= kT ? TT : new Int32Array(Math.max(kT, 2 * TT.length))
    }

    function Lc(TT, kT, cT, lT) {
      for (let MT = 0; MT < cT; MT += 4096) {
        const KT = Math.min(4096, cT - MT),
          OT = TT.memoryView(Int32Array, TT.scratch(), KT, "entity_info_batch's ids");
        if (!OT) return !1;
        OT.set(kT.subarray(MT, MT + KT));
        const yT = TT.queries.entityInfoBatch(KT),
          fT = 4294967295 === yT ? null : TT.memoryData(TT.scratch(), yT, 4, "entity_info_batch's records");
        if (!fT) return !1;
        for (let TT = 0; TT + vT.Yb.BYTES <= yT;) {
          const kT = vT.Yb.len(fT, TT);
          lT(vT.Yb.serverId(fT, TT), Rc(fT, TT, kT)), TT += vT.Yb.BYTES + (0, CT.ke)(kT)
        }
      }
      return !0
    }

    function Rc(TT, kT, cT) {
      var lT, MT, KT;
      const OT = vT.Yb.kind(TT, kT),
        yT = 0 === OT ? null : FT(OT);
      if (null === yT) return null;
      const fT = vT.Yb.variation(TT, kT),
        xT = vT.Yb.pose(TT, kT),
        IT = vT.Yb.meta(TT, kT),
        AT = vT.Yb.mesh(TT, kT),
        CT = 0 !== (vT.Yb.flags(TT, kT) & vT.Xb.HasOpts),
        jT = Zc[yT];
      return Object.freeze({
        type: yT,
        variation: fT === vT.ed ? void 0 : null !== (lT = null !== (MT = null === jT || void 0 === jT ? void 0 : jT[fT]) && void 0 !== MT ? MT : null === jT || void 0 === jT ? void 0 : jT[0]) && void 0 !== lT ? lT : "default",
        pose: xT === vT.tc ? void 0 : null !== (KT = vT.Ob[xT]) && void 0 !== KT ? KT : vT.Ob[0],
        metaInfo: IT === vT.tc ? void 0 : vT.Wc[IT],
        meshKind: AT === vT.tc ? void 0 : vT.Uc[AT],
        meshOpts: CT ? uc.decode(new Uint8Array(TT.buffer, TT.byteOffset + kT + vT.Yb.BYTES, cT)) : void 0
      })
    }
    const gc = 1,
      Uc = 2;
    class Yc {
      constructor(TT) {
        this.deps = TT, this.wanted = 0, this.ty = !1, this.refused = !1
      }
      get on() {
        return this.ty
      }
      want(TT, kT) {
        this.wanted = kT ? this.wanted | TT : this.wanted & ~TT;
        const cT = 0 !== this.wanted;
        if (cT === this.ty) return;
        const lT = this.deps.cmd();
        null !== lT ? (0, vT.Gg)(lT, 0, cT ? 1 : 0) ? (this.ty = cT, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.ty = !1
      }
    }
    class Bc {
      constructor(TT) {
        this.deps = TT, this.entries = new Map, this.complete = !1, this.refill = !1, this.midFrame = !1, this.pending = new Int32Array(64), this.pendingCount = 0, this.ids = new Int32Array(64)
      }
      get(TT) {
        var kT;
        return this.complete || this.fill(), null !== (kT = this.entries.get("string" === typeof TT ? TT : String(TT))) && void 0 !== kT ? kT : null
      }
      inCoreCall() {
        this.midFrame = !0
      }
      stale(TT) {
        if (this.complete) {
          if (this.pendingCount === this.pending.length) {
            const TT = new Int32Array(2 * this.pending.length);
            TT.set(this.pending), this.pending = TT
          }
          this.pending[this.pendingCount++] = TT
        }
      }
      removed(TT) {
        this.entries.size > 0 && this.entries.delete(String(TT))
      }
      refresh() {
        const TT = this.pendingCount;
        if (this.pendingCount = 0, this.midFrame = !1, !this.deps.watch.on || this.refill) return this.complete = !1, void(this.refill = !1);
        if (TT > 0 && this.complete) {
          const {
            api: kT
          } = this.deps;
          let cT = 0;
          const lT = this.ids = dc(this.ids, TT);
          for (let MT = 0; MT < TT; MT++) {
            const TT = this.pending[MT],
              KT = kT.indexById.get(TT);
            void 0 === KT || aT(kT.kinds[KT]) ? this.entries.delete(String(TT)) : lT[cT++] = TT
          }
          cT > 0 && !this.batch(lT, cT) && (this.complete = !1)
        }
      }
      sessionEnded() {
        this.entries.clear(), this.complete = !1, this.refill = !1, this.midFrame = !1, this.pendingCount = 0, this.deps.watch.want(gc, !1)
      }
      fill() {
        const {
          api: TT
        } = this.deps;
        if (this.complete = !0, this.pendingCount = 0, this.entries.clear(), this.deps.isSessionLive()) {
          const {
            watch: TT
          } = this.deps, kT = TT.on;
          TT.want(gc, !0), !kT && TT.on && (this.refill = this.midFrame)
        }
        const {
          ids: kT,
          count: cT
        } = Xc(TT, this.ids);
        this.ids = kT, cT > 0 && !this.batch(kT, cT) && (this.refill = !0)
      }
      batch(TT, kT) {
        return Lc(this.deps.api, TT, kT, ((TT, kT) => {
          null === kT ? this.entries.delete(String(TT)) : this.entries.set(String(TT), kT)
        }))
      }
    }
    var Wc = cT(4769);

    function nc(TT) {
      if ("message" !== TT.type || TT.vI !== Wc.Xb.NewClientOptions || TT.payloadKind !== CT.ac.Msgpack) return null;
      const kT = (0, ET.c)(TT.payload);
      if (null === kT || "object" !== typeof kT || Array.isArray(kT)) throw new Error("NewClientOptions whose body isn't an object of options");
      return kT
    }
    var pc = cT(1244),
      ic = cT(36445);

    function qc(TT, kT, cT, lT, MT, KT, yT) {
      var fT, xT, IT;
      switch (TT) {
        case vT.re.ToggleMenu: {
          const TT = vT.T[kT];
          OT.k.nt("toggleMenu", void 0 === TT ? "inventory" : `inventory|${TT}`);
          break
        }
        case vT.re.EditBoard:
          OT.k.nt("EditBoard", {
            pos: 0 === kT ? null : cT
          });
          break;
        case vT.re.EditCodeBlock:
        case vT.re.ViewCodeBlock:
          OT.k.nt("EditCodeBlock", {
            pos: cT,
            canChangePos: TT === vT.re.EditCodeBlock
          });
          break;
        case vT.re.EditCustomLobbyBlock:
          OT.k.nt("EditCustomLobbyBlock", {
            pos: cT
          });
          break;
        case vT.re.OpenIronChest:
          OT.k.nt("OpenIronChest", {
            pos: cT
          });
          break;
        case vT.re.EditNameTag:
          OT.k.nt("EditNameTag", null !== (fT = null === (xT = MT.ty()) || void 0 === xT || null === (IT = xT.attributes.customAttributes) || void 0 === IT ? void 0 : IT.text) && void 0 !== fT ? fT : "");
          break;
        case vT.re.EditBook: {
          var AT, CT, tT;
          const TT = null === (AT = MT.ty()) || void 0 === AT ? void 0 : AT.attributes;
          OT.k.nt("EditBook", {
            pages: (0, pc.P)(null === TT || void 0 === TT || null === (CT = TT.customAttributes) || void 0 === CT ? void 0 : CT.pages),
            title: null !== (tT = null === TT || void 0 === TT ? void 0 : TT.customDisplayName) && void 0 !== tT ? tT : "Title",
            isPublished: !(null === TT || void 0 === TT || !TT.customDescription)
          });
          break
        }
        case vT.re.CantChangeBlock:
          ! function(TT, kT) {
            const cT = kT.getClientOption("cantChangeError"),
              lT = kT.getClientOption(TT ? "cantBuildError" : "cantBreakError"),
              MT = TT ? cT : lT;
            (kT.getClientOption("canChange") || MT || "You cannot modify this block" !== cT) && OT.k.nt("showBottomMessage", {
              message: lT || cT,
              type: "Error"
            })
          }(1 === kT, KT);
          break;
        case vT.re.MiddleBarStart:
          OT.k.nt("middleScreenBarInitiate", {
            duration: lT,
            HT: 1 === cT[0],
            horizBarRemOffset: kT
          });
          break;
        case vT.re.MiddleBarStop:
          OT.k.nt("middleScreenBarRemove");
          break;
        case vT.re.Hitmarker:
          OT.k.nt("localGunHitmarker", {
            Ac: 1 === kT
          });
          break;
        case vT.re.ShotsLeft:
          OT.k.nt("localPlayerNewShotsLeft", lT);
          break;
        case vT.re.AimingOverlay:
          OT.k.nt("aimingOverlay", 3 === (3 & kT) ? "sniper" : "none");
          break;
        case vT.re.BottomMessage:
          OT.k.nt("showBottomMessage", JSON.parse(yT()));
          break;
        case vT.re.Crosshair:
          MT.inaccuracy = (0, ZT.f)(lT), (0, ic.d)().crosshairAccuracy(MT.inaccuracy);
          break;
        case vT.re.ChargeStage:
          break;
        case vT.re.EmoteWheelClose:
          OT.k.nt("requestEmoteWheelClose");
          break;
        case vT.re.BlockMined:
          OT.k.nt("localBlockMined");
          break;
        default:
          throw new jT.b(`UiEvent of no kind: what ${TT}`)
      }
    }
    var sc = cT(37857),
      Tl = cT(9369),
      kl = cT(1990),
      cl = cT(36628),
      ll = cT(9384),
      Ml = cT(4748);
    const Kl = 10,
      Ol = {
        player: [],
        chestOrCreative: [],
        chest: null,
        creative: !1,
        selectedSlot: 0,
        freeSlots: 0
      },
      yl = {
        items: [],
        ammo: 0,
        selectedSlot: 0
      },
      fl = {
        gun: !1,
        aimable: !1,
        chargeName: null
      };

    function xl(TT, kT) {
      let cT, lT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        MT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      const KT = () => (cT = (0, kl.m)(cT, kT()), cT);
      return {
        current: KT,
        watch(kT) {
          const cT = () => {
              kT(KT())
            },
            OT = [TT.watch(cT)];
          return null !== lT && OT.push((0, kl.p)((TT => {
            TT.some(lT) && cT()
          }))), null !== MT && OT.push(MT(cT)), () => {
            for (const TT of OT) TT()
          }
        }
      }
    }

    function Il(TT) {
      return TT && {
        name: TT.name,
        amount: TT.amount,
        attributes: TT.attributes
      }
    }
    const Al = new WeakMap;

    function Cl(TT) {
      let kT = Al.get(TT);
      return void 0 === kT && (kT = (0, ll.creativeItemIds)().map((kT => ({
        name: TT.nameOfId(kT),
        amount: TT.isStackableId(kT) ? 1 : null,
        attributes: (0, sc.b)("Gun" === (0, ll.itemTypeOf)(kT) ? {
          type: "Gun",
          clipSize: (0, ll.clipSizeOf)(kT)
        } : void 0)
      }))), Al.set(TT, kT)), kT
    }

    function jl(TT, kT, cT, lT) {
      const MT = kT => (TT.flush(lT), kT),
        KT = cT => {
          var lT, MT, KT, OT, yT, fT, xT;
          const IT = TT.slot(cT);
          if (!IT) return null;
          const {
            rootName: AT,
            metaStr: CT
          } = kT.getMetaInfo(IT.name);
          return {
            name: IT.name,
            amount: IT.amount,
            attributes: IT.attributes,
            instance: TT.instance(cT),
            displayName: null !== (lT = IT.attributes.customDisplayName) && void 0 !== lT ? lT : kT.getDisplayName(AT),
            requiresAmmo: "RequiresAmmo" === CT,
            clipSize: null !== (MT = null !== (KT = null === (OT = IT.attributes.customAttributes) || void 0 === OT || null === (yT = OT.gunStats) || void 0 === yT ? void 0 : yT.clipSize) && void 0 !== KT ? KT : null === (fT = kT.getGunStats(AT)) || void 0 === fT ? void 0 : fT.clipSize) && void 0 !== MT ? MT : null === (xT = IT.typeObj) || void 0 === xT ? void 0 : xT.clipSize
          }
        },
        yT = function(TT, kT) {
          let cT = null,
            lT = {
              focus: null,
              recipes: [],
              detail: null
            },
            MT = -1;
          const KT = new Set;
          return {
            read() {
              var KT, OT;
              if (null === cT) return null !== lT.focus && (lT = {
                ...lT,
                focus: null
              }), lT;
              if (lT.focus === cT && MT === TT.changes) return lT;
              if (MT = TT.changes, 0 === TT.length) return lT = {
                focus: cT,
                recipes: [],
                detail: null
              }, lT;
              let yT = 0;
              if (null !== cT.recipe) try {
                yT = kT.getItemId(cT.recipe.name)
              } catch {}
              const fT = TT.craftingView(cT.station, yT, null !== (KT = null === (OT = cT.recipe) || void 0 === OT ? void 0 : OT.Ty) && void 0 !== KT ? KT : 0);
              return lT = null === fT ? {
                focus: cT,
                recipes: [],
                detail: null
              } : function(TT, kT, cT) {
                let lT = vT.ub.BYTES;
                const MT = [];
                for (let IT = vT.ub.recipes(TT, 0); IT > 0; IT--) {
                  const cT = vT.nb.flags(TT, lT),
                    KT = {
                      name: kT.nameOfId(vT.nb.item(TT, lT)),
                      Ty: vT.nb.recipe(TT, lT),
                      requires: [],
                      produces: vT.nb.produces(TT, lT),
                      haveIngredients: 0 !== (cT & vT.mb.HaveIngredients),
                      listed: 0 !== (cT & vT.mb.Listed)
                    };
                  let OT = vT.nb.requires(TT, lT);
                  for (lT += vT.nb.BYTES; OT > 0; OT--) {
                    const cT = vT.ob.items(TT, lT);
                    KT.requires.push({
                      items: hl(TT, lT + vT.ob.BYTES, cT, kT),
                      amt: vT.ob.amount(TT, lT)
                    }), lT += vT.ob.BYTES + 2 * cT
                  }
                  MT.push(KT)
                }
                const KT = vT.ub.flags(TT, 0);
                if (null === cT.recipe || 0 === (KT & vT.sb.Detail)) return {
                  focus: cT,
                  recipes: MT,
                  detail: null
                };
                const OT = {},
                  yT = {};
                for (let IT = vT.ub.ingredients(TT, 0); IT > 0; IT--) {
                  const cT = vT.kb.item(TT, lT),
                    MT = vT.kb.from(TT, lT),
                    KT = vT.kb.amount(TT, lT);
                  lT += vT.kb.BYTES;
                  const fT = MT === vT.P ? null : hl(TT, lT, MT, kT);
                  if (null !== fT && (lT += 2 * MT), 0 === cT) continue;
                  const xT = kT.nameOfId(cT);
                  OT[xT] = KT, null !== fT && (yT[xT] = fT)
                }
                const {
                  name: fT,
                  Ty: xT
                } = cT.recipe;
                return {
                  focus: cT,
                  recipes: MT,
                  detail: {
                    name: fT,
                    Ty: xT,
                    craftAllTimes: vT.ub.craftAllTimes(TT, 0),
                    roomForOne: 0 !== (KT & vT.sb.RoomForOne),
                    resultStackable: Boolean(kT.getItemStat(fT, "stackable")),
                    amounts: OT,
                    ingredientsCraftedFrom: yT
                  }
                }
              }(fT, kT, cT), lT
            },
            setFocus(TT) {
              cT = TT;
              for (const kT of [...KT]) kT()
            },
            watchFocus: TT => (KT.add(TT), () => {
              KT.delete(TT)
            })
          }
        }(TT, kT);
      return {
        states: {
          inventory: xl(TT, (() => {
            const cT = TT.length;
            if (0 === cT) return Ol;
            const lT = [];
            for (let kT = 0; kT < vT.ud; kT++) lT.push(Il(TT.slot(kT)));
            const MT = TT.slotIcon,
              KT = lT[TT.selectedSlot];
            0 !== MT && KT && (lT[TT.selectedSlot] = {
              ...KT,
              icon: kT.nameOfId(MT)
            });
            const OT = !0 === kT.getClientOption("creative");
            let yT = [],
              fT = null;
            if (cT > vT.ud) {
              for (let kT = vT.ud; kT < cT; kT++) yT.push(Il(TT.slot(kT)));
              fT = {
                type: null,
                pos: [...TT.sl],
                numSlots: cT - vT.ud,
                ironChest: null
              }
            } else OT && (yT = Cl(kT));
            return {
              player: lT,
              chestOrCreative: yT,
              chest: fT,
              creative: OT,
              selectedSlot: TT.selectedSlot,
              freeSlots: TT.freeSlots()
            }
          }), (0, kl.i)("creative")),
          hotbar: xl(TT, (() => {
            if (0 === TT.length) return yl;
            const kT = [];
            for (let TT = 0; TT < Kl; TT++) kT.push(KT(TT));
            return {
              items: kT,
              ammo: TT.amountOf("Ammo"),
              selectedSlot: TT.selectedSlot
            }
          }), (0, kl.e)("DisplayName", "GunStats")),
          crafting: xl(TT, yT.read, null, yT.watchFocus),
          heldItemAim: xl(TT, (() => {
            var kT;
            if (!cT()) return fl;
            const lT = null === (kT = TT.ty()) || void 0 === kT ? void 0 : kT.typeObj,
              MT = "Gun" === (null === lT || void 0 === lT ? void 0 : lT.type);
            return {
              gun: MT,
              aimable: MT || !0 === (null === lT || void 0 === lT ? void 0 : lT.showsAimingUi),
              chargeName: "Chargeable" === (null === lT || void 0 === lT ? void 0 : lT.type) ? lT.name : null
            }
          }), null, (TT => function(TT, kT) {
            let cT = TT();
            return (0, Ml.s)((() => {
              const lT = TT();
              lT !== cT && (cT = lT, kT(lT))
            }))
          }(cT, TT)))
        },
        events: {
          hotbarSlotRequested: (0, kl.b)("setSelectedInventorySlotI"),
          hotbarScrolled: (0, kl.b)("ScrollInventorySlot"),
          numberKeyPressed: (0, kl.b)("numkeyPressed"),
          inventoryDropRequested: (0, kl.b)("DropInvenItem"),
          chestToggled: (0, kl.b)("chestToggleFromServer"),
          chestRefreshed: (0, kl.b)("chestRefreshedFromServer", tl),
          inventorySynced: (0, kl.b)("syncedInvenFromServer", tl),
          enchantingTableOpened: (0, kl.b)("enchantingTable", (TT => {
            let {
              position: cT,
              Rx: lT
            } = TT;
            return {
              position: [...cT],
              blockName: kT.getMetaInfo(lT).rootName
            }
          }))
        },
        commands: {
          selectHotbarSlot(kT) {
            TT.selectSlot(kT), TT.flush(lT)
          },
          removeInventoryItem(kT) {
            let {
              slot: cT,
              amount: lT,
              drop: KT
            } = kT;
            return MT(TT.remove(cT, lT, KT))
          },
          swapInventorySlots(kT) {
            let {
              a: cT,
              b: lT
            } = kT;
            return MT(TT.swap(cT, lT))
          },
          moveInventoryItem(kT) {
            let {
              from: cT,
              to: lT,
              amount: KT
            } = kT;
            return MT(TT.move(cT, lT, KT))
          },
          quickMoveInventoryItem(kT) {
            let {
              slot: cT,
              start: lT,
              end: KT,
              amount: OT
            } = kT;
            return MT(TT.quickMove(cT, lT, KT, OT))
          },
          closeChest() {
            TT.closeChest(), TT.flush(lT), OT.k.nt("chestClosedByPlayer")
          },
          focusCrafting(TT) {
            yT.setFocus(TT)
          },
          craftRecipe(kT) {
            let {
              name: cT,
              Ty: lT,
              times: KT
            } = kT;
            return MT(TT.craft(cT, lT, KT))
          },
          salvageItem(kT) {
            let {
              slot: cT,
              name: lT,
              amount: KT
            } = kT;
            return MT(TT.salvage(cT, lT, KT))
          },
          enchantItem(kT) {
            let {
              slot: cT,
              level: lT,
              tablePos: MT
            } = kT;
            TT.enchant(cT, lT, MT)
          }
        },
        queries: {
          enchantingOffer(cT) {
            let {
              slot: lT,
              blockName: MT
            } = cT;
            return function(TT, kT, cT, lT) {
              const MT = TT.slot(cT);
              if (!MT || !kT.getClientOption("canCraft") || !(0, Tl.p)(lT) || (0, Tl.o)(MT.attributes)) return vl;
              const KT = (0, ll.enchantmentPerksOf)(kT.getItemId(MT.name));
              if (0 === KT.length) return vl;
              const OT = [];
              for (let yT = 0; yT < cl.b; yT++) {
                const {
                  commonProb: TT,
                  uncommonProb: kT,
                  rareProb: cT,
                  epicProb: MT,
                  legendaryProb: KT,
                  level: fT
                } = (0, Tl.h)(lT, yT);
                OT.push({
                  level: fT,
                  odds: [TT, kT, cT, MT, KT].map((TT => 100 * TT))
                })
              }
              return {
                perks: [...KT],
                options: OT
              }
            }(TT, kT, lT, MT)
          }
        }
      }
    }
    const vl = Object.freeze({
      perks: [],
      options: []
    });

    function tl() {
      return null
    }

    function hl(TT, kT, cT, lT) {
      const MT = [];
      for (let KT = 0; KT < cT; KT++) {
        const cT = TT.getUint16(kT + 2 * KT, !0);
        0 !== cT && MT.push(lT.nameOfId(cT))
      }
      return MT
    }
    class Nl {
      constructor(TT) {
        this.api = TT, this.positions = new Map, this.targeted = {
          JB: 0,
          position: [0, 0, 0],
          normal: [0, 0, 0],
          Wt: [0, 0, 0]
        }, this.hasTarget = !1, this.breaking = [0, 0, 0], this.isBreaking = !1
      }
      position(TT) {
        let kT = this.positions.get(TT);
        return kT || (this.api.checkValid(TT) || this.api.isLocal(TT) ? (kT = [NaN, NaN, NaN], this.api.readPosition(TT, kT), this.positions.set(TT, kT), kT) : null)
      }
      U_() {
        return this.hasTarget ? this.targeted : null
      }
      breakingPosition() {
        return this.isBreaking ? this.breaking : null
      }
      refresh() {
        for (const [kT, cT] of this.positions) this.api.readPosition(kT, cT) || this.api.checkValid(kT) || this.api.isLocal(kT) || this.positions.delete(kT);
        const TT = this.api.apiView;
        if (this.refreshTarget(), this.isBreaking = 0 !== (vT.A.playerFlags(TT, 0) & vT.Od.Breaking) && vT.A.breakingProgress(TT, 0) >= 0, this.isBreaking)
          for (let kT = 0; kT < 3; kT++) this.breaking[kT] = vT.A.breakingPos(TT, 0, kT)
      }
      refreshTarget() {
        const TT = this.api.apiView,
          kT = vT.A.targetBlockId(TT, 0);
        if (this.hasTarget = kT !== vT.dd, this.hasTarget) {
          const cT = this.targeted;
          cT.JB = kT;
          for (let kT = 0; kT < 3; kT++) cT.position[kT] = vT.A.targetBlock(TT, 0, kT), cT.normal[kT] = vT.A.targetNormal(TT, 0, kT), cT.Wt[kT] = vT.A.targetAdjacent(TT, 0, kT)
        }
      }
      despawned(TT) {
        const kT = this.positions.get(TT);
        kT && !this.api.isLocal(TT) && (kT.fill(NaN), this.positions.delete(TT))
      }
    }
    var Ql = cT(40261),
      Sl = cT(40239),
      Dl = cT(36619);
    const al = 1,
      Fl = 2;
    class rl {
      constructor() {
        this.game = new Dl.d, this.client = new Dl.d, this.ty = 0, this.movesFly = null
      }
      setGame(TT) {
        if (null === TT || "object" !== typeof TT) return !1;
        const {
          key: kT,
          value: cT
        } = TT;
        return "string" === typeof kT && (this.game.setBooleanType(kT, Boolean(cT)), !0)
      }
      setClient(TT, kT) {
        this.client.setBooleanType(TT, kT)
      }
      clearGame() {
        this.game = new Dl.d, this.movesFly = null
      }
      setMovesFly(TT) {
        this.movesFly = TT
      }
      perms() {
        return (this.game._getTotalBooleanVal() ? al : 0) | (this.client._getTotalBooleanVal() ? Fl : 0)
      }
      write(TT) {
        const kT = this.perms(),
          {
            movesFly: cT
          } = this;
        if (kT === this.ty && null === cT) return !0;
        let lT = vT._b.Keep;
        return null !== cT && (lT = cT ? vT._b.On : vT._b.Off), !(!TT || !(0, vT.Oe)(TT, 0, lT, kT, cT ? 1 : 0)) && (this.ty = kT, this.movesFly = null, !0)
      }
    }
    class Pl {
      constructor(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 35;
        this.api = TT, this.screenBandPct = void 0, this.clipX = 0, this.clipY = 0, this.clipW = 0, this.eye = [0, 0, 0], this.forward = [0, 0, 1], this.along = [0, 0, 0], this.screenBandPct = {
          x: yT.c,
          get y() {
            return kT()
          }
        }
      }
      get hasView() {
        const TT = this.api.apiView,
          kT = vT.A.viewProj;
        return 0 !== kT(TT, 0, 3) || 0 !== kT(TT, 0, 7) || 0 !== kT(TT, 0, 11) || 0 !== kT(TT, 0, 15)
      }
      get cameraPosition() {
        const TT = this.api.apiView,
          {
            eye: kT
          } = this;
        for (let cT = 0; cT < 3; cT++) kT[cT] = vT.A.eye(TT, 0, cT);
        return kT
      }
      get cameraDirection() {
        const TT = this.api.apiView,
          kT = vT.A.viewProj,
          cT = kT(TT, 0, 3),
          lT = kT(TT, 0, 7),
          MT = kT(TT, 0, 11),
          KT = Math.hypot(cT, lT, MT),
          {
            forward: OT
          } = this;
        return KT > 0 && (OT[0] = cT / KT, OT[1] = lT / KT, OT[2] = MT / KT), OT
      }
      get cameraHeading() {
        return vT.A.heading(this.api.apiView, 0)
      }
      get cameraPitch() {
        return vT.A.pitch(this.api.apiView, 0)
      }
      get tanHalfFovX() {
        return vT.A.tanHalfFovX(this.api.apiView, 0)
      }
      get tanHalfFovY() {
        return vT.A.tanHalfFovY(this.api.apiView, 0)
      }
      projectWorldPosToScreenPos(TT) {
        this.clip(TT);
        const {
          clipX: kT,
          clipY: cT,
          clipW: lT
        } = this;
        if (lT > 0) {
          const TT = kT / lT * 50,
            MT = -cT / lT * 50;
          return Math.abs(TT) <= this.screenBandPct.x && Math.abs(MT) <= this.screenBandPct.y ? {
            x: 50 + TT,
            y: 50 + MT
          } : this.clampToBand(TT, MT)
        }
        const MT = this.cameraPosition,
          KT = Math.hypot(TT[0] - MT[0], TT[1] - MT[1], TT[2] - MT[2]),
          OT = this.api.apiView,
          yT = vT.A.viewProj,
          fT = KT > 0 ? kT / KT : 0,
          xT = KT > 0 ? -cT / KT : 0,
          IT = Math.hypot(yT(OT, 0, 1), yT(OT, 0, 5), yT(OT, 0, 9)),
          AT = fT / Math.hypot(yT(OT, 0, 0), yT(OT, 0, 4), yT(OT, 0, 8)),
          CT = xT / IT,
          jT = !(Math.abs(AT) >= .001 || Math.abs(CT) >= .001);
        return this.clampToBand(fT, jT ? -(IT || 1) : xT)
      }
      projectDirectionToScreenPos(TT) {
        if (!this.hasView) return;
        const kT = this.cameraPosition,
          cT = this.along;
        for (let lT = 0; lT < 3; lT++) cT[lT] = kT[lT] + 10 * TT[lT];
        return this.projectWorldPosToScreenPos(cT)
      }
      projectWorldPosToViewport(TT) {
        this.clip(TT);
        const {
          clipX: kT,
          clipY: cT,
          clipW: lT
        } = this;
        return lT > 0 ? {
          x: 50 + kT / lT * 50,
          y: 50 - cT / lT * 50
        } : null
      }
      clip(TT) {
        const kT = this.api.apiView,
          cT = TT[0] - vT.A.origin(kT, 0, 0),
          lT = TT[1] - vT.A.origin(kT, 0, 1),
          MT = TT[2] - vT.A.origin(kT, 0, 2),
          KT = vT.A.viewProj;
        this.clipX = KT(kT, 0, 0) * cT + KT(kT, 0, 4) * lT + KT(kT, 0, 8) * MT + KT(kT, 0, 12), this.clipY = KT(kT, 0, 1) * cT + KT(kT, 0, 5) * lT + KT(kT, 0, 9) * MT + KT(kT, 0, 13), this.clipW = KT(kT, 0, 3) * cT + KT(kT, 0, 7) * lT + KT(kT, 0, 11) * MT + KT(kT, 0, 15)
      }
      clampToBand(TT, kT) {
        return (0, yT.d)(TT, kT, this.screenBandPct.x, this.screenBandPct.y)
      }
    }
    var wl = cT(4782);
    const ml = new TextEncoder,
      bl = new Uint8Array(vT._ * vT.X);
    class zl {
      constructor() {
        this.buttons = [], this.ty = !0
      }
      set(TT) {
        this.buttons = TT, this.ty = !1
      }
      attached() {
        this.ty = 0 === this.buttons.length
      }
      write(TT) {
        if (this.ty) return;
        const kT = new Uint8Array(vT._),
          cT = new Uint8Array(vT._);
        let lT = 0,
          MT = 0;
        for (const {
            id: KT,
            keycode: OT
          }
          of this.buttons) {
          if (lT === vT._) break;
          const {
            read: TT,
            written: yT
          } = ml.encodeInto(KT, bl.subarray(MT, MT + vT.X));
          if (TT < KT.length) continue;
          const fT = wl.k[OT];
          kT[lT] = "number" === typeof fT ? fT : 0, cT[lT] = yT, lT++, MT += yT
        }
        this.ty = (0, vT.Ae)(TT, 0, lT, kT, cT, bl.subarray(0, MT))
      }
    }

    function Jl(TT, kT, cT) {
      const lT = ml.encode(kT);
      return lT.length <= vT.X && function(TT, kT, cT, lT) {
        return (0, Yk.e)(), (0, vT.Kf)(TT, kT, cT, lT)
      }(TT, 0, cT ? 1 : 0, lT)
    }
    const ol = new TextDecoder,
      Hl = new TextEncoder,
      el = new Uint8Array(0),
      Gl = [0, 0, 0],
      Vl = {
        off: vT.Sd.Off,
        key: vT.Sd.Key,
        touch: vT.Sd.Touch
      };
    class El {
      constructor(TT) {
        var kT;
        this.options = TT, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tickers = [], this.renderers = [], this.receivers = [], this.failures = [], this.vetoSet = !1, this.hooksSet = !1, this.writtenPublicLobby = !1, this.promptWatch = "off", this.promptWatchSent = "off", this.customButtons = new zl, this.generation = 0, this.sessionLive = !1, this.boundId = 0, this.session = null, this.activeConn = 0, this.closedThrough = 0, this.openSocket = 0, this.socketLeftSinceAttach = !1, this.ticks = 0, this.zoomUnshown = !1, this.zoomHeld = !1, this.overflowGen = 0, this.resyncOwed = !1, this.zoom = 0, this.pendingZoom = null, this.highlight = null, this.highlightOwed = !1, this.cmd = null, this.freeCam = new rl, this.stopped = () => !1, this.onError = void 0, this.api = void 0, this.tables = void 0, this.itemSources = null, this.fault = void 0, this.Yj = TT => {
          if ((0, jT.g)(TT)) throw TT;
          this.onError(TT)
        }, this.api = TT.api, this.tables = TT.tables, this.onError = null !== (kT = TT.onError) && void 0 !== kT ? kT : TT => {
          console.error("Error in client game callback", TT)
        }, this.renderFrame = new Pl(this.api, TT.screenBandY), this.live = new Nl(this.api), this.chunks = new yk(this.api.memory, (() => this.api.apiView)), this.items = new Qc({
          api: this.api,
          tables: TT.tables,
          cmd: () => this.cmd,
          onError: this.onError,
          beforeOp: TT.beforeOp
        });
        const cT = () => this.stopped() ? null : this.cmd,
          lT = () => this.sessionLive;
        this.entityInfoWatch = new Yc({
          cmd: cT,
          onError: this.onError
        }), this.entityInfo = new Bc({
          api: this.api,
          watch: this.entityInfoWatch,
          isSessionLive: lT
        }), this.particles = new Vc({
          cmd: cT,
          isSessionLive: lT,
          onError: this.onError
        }), this.clientApi = new xc({
          api: this.api,
          live: this.live,
          chunks: this.chunks,
          items: this.items,
          entityInfo: this.entityInfo,
          particles: this.particles,
          tables: TT.tables,
          cmd: cT,
          sendCmd: () => this.sendCmd(),
          isSessionLive: lT,
          beforeWrite: () => {
            var kT;
            if (this.stopped()) return !1;
            const cT = this.generation;
            return !1 !== (null === (kT = TT.beforeWrite) || void 0 === kT ? void 0 : kT.call(TT)) && cT === this.generation
          },
          playerDbId: () => {
            const TT = this.session;
            if (null === TT) throw new Error("No game session has started, so the local player has no DB id");
            return TT.playerDbId
          },
          playSound: TT.playSound,
          preloadSounds: TT.preloadSounds,
          setLocalOptions: TT.setLocalOptions,
          hasPackModel: TT.hasPackModel
        }), this.scriptedCamera = new BT({
          api: this.api,
          cmd: () => this.stopped() ? null : this.cmd,
          screen: TT.cameraScreen,
          showFacing: TT.showCameraFacing
        })
      }
      get itemBridgeSources() {
        return this.itemSources ??= jl(this.items, this.tables, (() => this.localPlayerAlive()), this.Yj), this.itemSources
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
      clickCodeBlock(TT) {
        const kT = this.sessionLive ? this.sendCmd() : null;
        return null !== kT && (cT = kT, lT = 0, MT = TT[0], KT = TT[1], OT = TT[2], (0, Yk.e)(), (0, vT.Ge)(cT, lT, MT, KT, OT));
        var cT, lT, MT, KT, OT
      }
      cameraZoom() {
        return this.zoom
      }
      setCameraZoom(TT) {
        const kT = this.liveCmd();
        return null === kT ? (this.pendingZoom = TT, !1) : (this.pendingZoom = null, (0, vT.zg)(kT, 0, TT, 1))
      }
      ZD(TT) {
        const kT = this.stopped() ? null : this.cmd;
        return null !== kT && (0, vT.vg)(kT, 0, TT ? 1 : 0)
      }
      respawn() {
        const TT = this.sessionLive ? this.sendCmd() : null;
        return null !== TT && (kT = TT, cT = 0, (0, Yk.e)(), (0, vT.ag)(kT, cT));
        var kT, cT
      }
      bindCustomButtonKeys(TT) {
        this.customButtons.set(TT)
      }
      pressCustomButton(TT, kT) {
        const cT = this.sessionLive ? this.sendCmd() : null;
        return null !== cT && Jl(cT, TT, kT)
      }
      padMove(TT, kT, cT, lT, MT, KT) {
        const OT = this.liveCmd();
        return null !== OT && (0, vT.pf)(OT, 0, TT, kT, cT, lT, MT, KT)
      }
      thirdPersonFor(TT) {
        const kT = this.liveCmd();
        return null !== kT && (0, vT.Fg)(kT, 0, null !== TT && void 0 !== TT ? TT : 1 / 0)
      }
      send(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const lT = 0 !== this.openSocket || this.sessionLive ? this.sendCmd() : null;
        return null !== lT && Bk(lT, cT ? CT.ld : 0, TT, (0, ET.g)(kT))
      }
      socketAttached(TT) {
        this.openSocket = TT, this.socketLeftSinceAttach = !1
      }
      socketDetached(TT) {
        this.openSocket === TT && (this.openSocket = 0)
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
      attach(TT) {
        const kT = () => TT.isStopped;
        this.stopped = kT, this.cmd = TT.rings.cmd, this.promptWatchSent = "off", this.writePromptWatch(), this.customButtons.attached(), this.writeCustomButtons();
        const cT = this.api.apiView;
        this.overflowGen = vT.A.eventOverflowGen(cT, 0), this.resyncOwed = 0 !== vT.A.eventOverflowMask(cT, 0), TT.setGameHost(this), TT.setEventWalker((TT => {
          this.api.walk(TT, this, kT)
        }))
      }
      watchPromptPick(TT) {
        this.promptWatch = TT, this.writePromptWatch()
      }
      get promptEntity() {
        return "off" === this.promptWatch || this.stopped() ? null : Zl(vT.A.promptEntity(this.api.apiView, 0))
      }
      get interactLabel() {
        return "touch" !== this.promptWatch || this.stopped() ? vT.Cc.None : vT.A.interactLabel(this.api.apiView, 0)
      }
      get interactIcon() {
        return "touch" !== this.promptWatch || this.stopped() ? 0 : vT.A.interactIcon(this.api.apiView, 0)
      }
      closeGame() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        (0 === TT || TT >= this.openSocket) && (this.openSocket = 0), this.closedThrough = Math.max(this.closedThrough, TT, this.activeConn), this.activeConn = 0, this.endSession(), this.endGameGrants(), this.dropGameCamera()
      }
      gameCamera(TT) {
        0 !== this.activeConn && this.scriptedCamera.settingsChanged(TT)
      }
      netEvent(TT) {
        "connection" === TT.type ? TT.phase === CT.x.Activated && TT.conn !== this.activeConn && TT.conn > this.closedThrough ? (this.endSession(), this.activeConn = TT.conn, this.endGameGrants(), this.dropGameCamera()) : TT.phase !== CT.x.Left && TT.phase !== CT.x.Closed || TT.conn !== this.activeConn ? TT.phase === CT.x.Resumed && 0 !== this.activeConn && TT.conn > this.closedThrough && (this.activeConn = TT.conn) : this.closeGame() : TT.conn === this.activeConn && 0 !== TT.conn && (TT.vI === Sl.s ? this.gunHit(TT.payload) : TT.vI === Wc.Xb.EditItemCraftingRecipes || TT.vI === Sl.Y ? this.items.touch() : (this.serverOptions(TT), this.gameMessage(TT)));
        const kT = this.options.onNetEvent;
        kT && this.guard((() => {
          kT(TT)
        }))
      }
      serverOptions(TT) {
        const kT = this.options.serverOptions,
          cT = kT ? this.decoded(nc, TT) : null;
        kT && cT && this.guard((() => {
          kT.applyNewClientOptions(cT)
        }))
      }
      gameMessage(TT) {
        let kT = null;
        try {
          kT = function(TT) {
            if ("message" !== TT.type || TT.vI !== Wc.Xb.GameCodeMessage || TT.payloadKind !== CT.ac.Msgpack) return null;
            const kT = (0, ET.c)(TT.payload);
            if (null === kT || "object" !== typeof kT || "string" !== typeof kT.messageType) throw new Error("GameCodeMessage without a messageType");
            return kT
          }(TT)
        } catch (cT) {
          this.sessionLive && this.onError(cT)
        }
        if (kT) {
          const {
            messageType: TT,
            data: cT
          } = kT;
          if ((0, zT.e)(TT)) return void this.guard((() => {
            (0, zT.d)(TT, cT)
          }));
          "freeCamPerms" === TT && this.freeCam.setGame(cT) && this.writeFreeCam(), this.sessionLive && this.round(this.receivers, (kT => {
            kT.onReceivedMessageFromServer(TT, cT)
          }))
        }
      }
      decoded(TT, kT) {
        try {
          return TT(kT)
        } catch (cT) {
          return this.onError(cT), null
        }
      }
      setClientFreeCameraGrant(TT, kT) {
        this.freeCam.setClient(TT, kT), this.writeFreeCam()
      }
      freeCameraAllowed() {
        return 0 !== this.freeCam.perms()
      }
      setFreeCameraMovesFly(TT) {
        this.freeCam.setMovesFly(TT), this.writeFreeCam()
      }
      setBlockHighlight(TT) {
        this.highlight = TT, this.highlightOwed = !0, this.writeOwedHighlight()
      }
      writeOwedHighlight() {
        const TT = this.liveCmd();
        if (null === TT || !this.highlightOwed) return;
        const kT = this.highlight;
        this.highlightOwed = null === kT ? !(0, vT.bf)(TT, 0, Gl, Gl, 0) : !(0, vT.bf)(TT, 0, kT.pos, kT.normal, 1)
      }
      localPlayerBound(TT) {
        var kT, cT;
        if (0 === this.activeConn || this.sessionLive && TT === this.boundId) return;
        const lT = this.sessionLive;
        let MT, KT, OT, yT;
        this.endSession(), lT && this.restartGameCamera();
        try {
          var fT;
          this.session = null;
          const TT = this.options.sessionInfo(this.activeConn);
          if (this.session = TT, !TT) return;
          MT = TT.gameNameWithVariation, KT = null !== (fT = (0, mT.Gb)(MT)) && void 0 !== fT ? fT : void 0, OT = (0, bT.u)(TT.lobbyName), yT = (0, bT.K)(TT.lobbyName)
        } catch (QT) {
          return void this.onError(QT)
        }
        const xT = {
          localPlayerId: String(TT)
        };
        let IT = {},
          AT = {};
        try {
          var CT, jT;
          IT = null !== (CT = null === (jT = this.options.gameFactory((0, mT.Lb)(MT))) || void 0 === jT ? void 0 : jT(yT, OT, KT, xT)) && void 0 !== CT ? CT : {}
        } catch (QT) {
          this.Yj(QT)
        }
        try {
          var vT, tT;
          AT = {
            ...null === (vT = (tT = this.options).defaultPlugins) || void 0 === vT ? void 0 : vT.call(tT, yT, OT, KT, xT),
            ...IT.plugins
          }
        } catch (QT) {
          this.Yj(QT)
        }
        const hT = [IT, ...Object.values(AT)];
        this.owners = hT, this.tickers = hT.filter((TT => void 0 !== TT.UA)), this.renderers = hT.filter((TT => void 0 !== TT.onAfterRender)), this.receivers = hT.filter((TT => void 0 !== TT.onReceivedMessageFromServer)), this.writeAltVeto(hT), this.writeHooks(hT), this.writePublicLobby(yT), this.writeLocalDbId(null !== (kT = null === (cT = this.session) || void 0 === cT ? void 0 : cT.playerDbId) && void 0 !== kT ? kT : null), this.boundId = TT, this.sessionLive = !0, this.generation++, null !== this.pendingZoom && this.setCameraZoom(this.pendingZoom), this.highlightOwed ||= null !== this.highlight, this.writeOwedHighlight(), this.round(hT, (TT => {
          var kT;
          null === (kT = TT.onCreate) || void 0 === kT || kT.call(TT, this.clientApi)
        }));
        const NT = this.generation;
        setTimeout((() => {
          NT === this.generation && !0 === this.tables.getClientOption("creative") && Cl(this.tables)
        }), 0)
      }
      chunkSlot(TT, kT, cT, lT, MT, KT) {
        this.chunks.apply(TT, kT, cT, lT, MT, KT)
      }
      entityAdded(TT) {
        var kT;
        this.entityInfo.stale(TT), null === (kT = this.options.replayEntities) || void 0 === kT || kT.entityAdded(TT)
      }
      entityInfoChanged(TT) {
        var kT;
        this.entityInfo.stale(TT), null === (kT = this.options.replayEntities) || void 0 === kT || kT.entityInfoChanged(TT)
      }
      afterPrescan() {
        this.items.refresh(), this.entityInfo.refresh(), this.api.rereadDirectory(), this.chunks.refresh(), this.live.refresh()
      }
      tickEnd() {
        if (this.ticks++, this.tickers.length > 0) {
          const TT = performance.now();
          this.round(this.tickers, ul), (0, Ml.c)(performance.now() - TT)
        }
      }
      afterWalk(TT) {
        this.ackEventOverflow(), this.clientApi.flushOwed(), this.writeOwedHighlight();
        const kT = this.options.replayEntities;
        kT && this.guard((() => {
          this.entityInfoWatch.want(Uc, kT.wantsWatch), kT.flush(this.entityInfoWatch.on)
        }));
        const cT = (0, Ml.i)(TT, vT.A.frameMs(this.api.apiView, 0));
        if (null !== cT) {
          const TT = this.renderFrame;
          this.guard((() => {
            (0, ic.d)().turnDamageIndicators(TT.cameraHeading)
          })), this.guard((() => {
            this.clientApi.slideRoute(cT)
          })), this.round(this.renderers, (kT => {
            kT.onAfterRender(cT, TT)
          }))
        }
        this.writeFreeCam();
        try {
          this.scriptedCamera.afterFrame(null !== cT)
        } catch (MT) {
          this.Yj(MT)
        }
        this.showZoom(), this.items.flush(this.Yj), this.writePromptWatch(), this.writeCustomButtons();
        const lT = this.ticks;
        this.ticks = 0, (0, Ml.h)(lT, TT, cT, this.Yj)
      }
      entityRemoved(TT) {
        this.live.despawned(TT), this.entityInfo.removed(TT)
      }
      ackEventOverflow() {
        const TT = this.api.apiView,
          kT = vT.A.eventOverflowGen(TT, 0),
          cT = kT - this.overflowGen >>> 0;
        if (0 === cT && !this.resyncOwed) return;
        this.overflowGen = kT;
        const lT = vT.A.eventOverflowMask(TT, 0),
          MT = this.cmd;
        0 === lT || null === MT || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, vT.Ke)(MT, 0, lT);
        const KT = this.options.onEventOverflow;
        0 !== cT && KT && this.guard((() => {
          KT(lT, cT)
        }))
      }
      gameCall(TT, kT, cT, lT, MT, KT, OT, yT, fT) {
        if (TT === vT.qc.Director) try {
          return this.scriptedCamera.call(kT, cT, lT, MT, KT, OT)
        } catch (xT) {
          return this.Yj(xT), vT.wb.None
        }
        if (!this.sessionLive || void 0 !== this.fault) return TT === vT.qc.AltVeto ? vT.o.Allow : 0;
        try {
          return this.callGames(TT, kT, cT, lT, MT, KT, OT, yT)
        } catch (xT) {
          throw (0, jT.g)(xT) && (this.fault = xT), xT
        }
      }
      takeFault() {
        const TT = this.fault;
        return this.fault = void 0, TT
      }
      callGames(TT, kT, cT, lT, MT, KT, OT, yT) {
        this.api.rereadDirectory(), this.chunks.touch(), this.items.refresh(), this.live.refresh(), this.entityInfo.inCoreCall();
        const {
          tables: fT
        } = this.options, xT = String(this.boundId);
        switch (TT) {
          case vT.qc.AltVeto:
          case vT.qc.AltAction: {
            const yT = 0 !== OT,
              [IT, AT, CT] = yT ? [kT, cT, lT] : [void 0, void 0, void 0],
              jT = yT ? fT.nameOfId(MT) : "Air",
              tT = Zl(KT);
            if (TT === vT.qc.AltAction) return this.first((TT => {
              var kT;
              return null === (kT = TT.onPlayerAltAction) || void 0 === kT ? void 0 : kT.call(TT, xT, IT, AT, CT, jT, tT)
            })), 0;
            const hT = this.first((TT => {
              var kT;
              return null === (kT = TT.onPlayerAttemptAltAction) || void 0 === kT ? void 0 : kT.call(TT, xT, IT, AT, CT, jT, tT)
            }));
            return "preventAction" === hT ? vT.o.Prevent : "preventPlacement" === hT ? vT.o.PreventPlacement : vT.o.Allow
          }
          case vT.qc.Click: {
            const TT = yT,
              IT = 0 !== (TT & vT.eb.Alt),
              AT = 0 !== (TT & vT.eb.HasPos),
              CT = AT ? fT.nameOfId(MT) : "Air",
              [jT, tT, hT] = AT ? [kT, cT, lT] : [null, null, null],
              NT = Zl(KT),
              QT = 0 !== (TT & vT.eb.Up),
              ST = Zl(OT);
            if (0 === (TT & vT.eb.AttackOnly) && this.first((TT => {
                var kT, cT;
                return QT ? null === (kT = TT.onPlayerClickUp) || void 0 === kT ? void 0 : kT.call(TT, xT, IT, jT, tT, hT, CT, NT) : null === (cT = TT.onPlayerClick) || void 0 === cT ? void 0 : cT.call(TT, xT, IT, jT, tT, hT, CT, NT)
              })), !QT && !IT && null !== ST) {
              const TT = this.clientApi.getPositionView(ST),
                kT = TT ? [TT[0], TT[1], TT[2]] : [0, 0, 0];
              this.first((TT => {
                var cT;
                return null === (cT = TT.onPlayerAttackEntity) || void 0 === cT ? void 0 : cT.call(TT, xT, ST, kT)
              }))
            }
            return 0
          }
          case vT.qc.ChangeBlock: {
            const TT = fT.nameOfId(MT),
              OT = fT.nameOfId(KT);
            return this.first((MT => {
              var KT;
              return null === (KT = MT.onPlayerChangeBlock) || void 0 === KT ? void 0 : KT.call(MT, xT, kT, cT, lT, TT, OT)
            })), 0
          }
          case vT.qc.DropItem: {
            const TT = fT.nameOfId(kT);
            return this.first((kT => {
              var MT;
              return null === (MT = kT.onPlayerDropItem) || void 0 === MT ? void 0 : MT.call(kT, xT, TT, cT, lT)
            })), 0
          }
          default:
            return this.onError(new Error(`Unknown game call kind ${TT}`)), 0
        }
      }
      changeBlockFail(TT, kT, cT, lT, MT, KT, OT) {
        const yT = MT === vT.Yc ? null : ol.decode(this.api.eventBytes(KT, Math.min(MT, OT)));
        this.failures.push({
          qc: [TT, kT, cT],
          sc: lT,
          Tl: yT
        })
      }
      changeBlockFailEnd() {
        const TT = this.failures;
        this.failures = [], this.sessionLive && this.round(this.owners, (kT => {
          var cT;
          null === (cT = kT.onChangeBlockFail) || void 0 === cT || cT.call(kT, TT)
        })), this.nt("EditBoard", {
          pos: null
        }), this.nt("EditCodeBlock", {
          pos: null,
          canChangePos: null
        })
      }
      inventoryEvent(TT, kT, cT, lT, MT, KT) {
        TT === vT.Jc.ChestOpened ? this.items.chestOpened(cT, lT, MT) : TT !== vT.Jc.Synced && TT !== vT.Jc.ChestClosed && TT !== vT.Jc.ChestRefreshed || this.items.touch(), this.guard((() => {
          ! function(TT, kT, cT, lT) {
            switch (TT) {
              case vT.Jc.Synced:
                OT.k.nt("syncedInvenFromServer");
                break;
              case vT.Jc.ChestOpened:
              case vT.Jc.ChestClosed:
                OT.k.nt("chestToggleFromServer", TT === vT.Jc.ChestOpened, !0);
                break;
              case vT.Jc.ChestRefreshed:
                OT.k.nt("chestRefreshedFromServer");
                break;
              case vT.Jc.EnchantingTable:
                OT.k.nt("enchantingTable", {
                  Rx: lT,
                  position: cT
                });
                break;
              case vT.Jc.HotbarRequest:
                OT.k.nt("setSelectedInventorySlotI", kT, !0);
                break;
              case vT.Jc.Scrolled:
                OT.k.nt("ScrollInventorySlot", kT);
                break;
              case vT.Jc.NumberKey:
                OT.k.nt("numkeyPressed", kT + 1);
                break;
              case vT.Jc.DropRequested:
                OT.k.nt("DropInvenItem", 0 !== kT);
                break;
              default:
                throw new jT.b(`InventoryEvent of no kind: what ${TT}`)
            }
          }(TT, kT, [cT, lT, MT], KT)
        }))
      }
      heldItemChanged() {
        this.items.touch()
      }
      shotDamage(TT, kT, cT, lT) {
        this.nt("shotPlayer", {
          playerId: String(TT),
          damage: kT,
          wasCrit: 0 !== lT,
          distance: cT
        })
      }
      localHurt(TT, kT) {
        this.nt("closeShopOnDamaged", null), this.guard((() => {
          OT.k.nt("damagedByOtherPlayer", {
            EK: null,
            direction: Number.isNaN(kT) ? null : kT,
            bT: TT
          })
        }))
      }
      attackHit(TT, kT, cT, lT, MT) {
        this.guard((() => {
          OT.k.nt("yourAttackHit", {
            Ac: lT,
            screenPos: this.renderFrame.projectDirectionToScreenPos([TT, kT, cT]),
            hitSelf: MT
          })
        }))
      }
      physicsType(TT) {
        this.nt("PlayerPhysicsTypeUpdate", TT)
      }
      vehicleEffect(TT, kT, cT, lT, MT) {
        this.guard((() => {
          TT === CT.yd.UPDATE ? (0, oT.h)(kT, {
            icon: cT,
            level: lT,
            displayName: null,
            durationMs: MT
          }) : JT.c.remove(kT)
        }))
      }
      zoomChanged(TT) {
        this.zoom = TT, this.zoomUnshown = !0
      }
      zoomDisabled() {
        this.nt("showBottomMessage", {
          message: "Zoom is disabled",
          timeoutLength: 2e3,
          type: "Error"
        })
      }
      showZoom() {
        const TT = this.scriptedCamera.holdsView();
        !this.zoomUnshown || TT && this.zoomHeld || (this.zoomUnshown = !1, this.nt("cameraZoomSet", this.zoom)), this.zoomHeld = TT
      }
      gunHit(TT) {
        this.guard((() => {
          const {
            EK: kT,
            ZK: cT
          } = (0, Ql.d)(Sl.s, TT);
          OT.k.nt("damagedByOtherPlayer", {
            EK: kT,
            direction: cT
          })
        }))
      }
      uiEvent(TT, kT, cT, lT, MT, KT, OT, yT) {
        this.guard((() => {
          qc(TT, kT, [cT, lT, MT], KT, this.items, this.options.tables, (() => ol.decode(this.api.eventBytes(OT, yT))))
        }))
      }
      writeAltVeto(TT) {
        const kT = this.cmd;
        if (!kT) return;
        let cT;
        try {
          cT = function(TT, kT) {
            const cT = new Set;
            let lT = !1;
            for (const MT of TT)
              if (MT.onPlayerAttemptAltAction) {
                if (lT = !0, !MT.altVetoBlocks) return {
                  mode: vT.ve.All,
                  roots: []
                };
                for (const TT of MT.altVetoBlocks) cT.add(kT.getMetaInfo(TT).rootId)
              } return lT ? cT.size > vT.Sc ? {
              mode: vT.ve.All,
              roots: []
            } : {
              mode: vT.ve.Filter,
              roots: [...cT]
            } : {
              mode: vT.ve.Off,
              roots: []
            }
          }(TT, this.options.tables)
        } catch (MT) {
          this.onError(MT), cT = {
            mode: vT.ve.All,
            roots: []
          }
        }
        if (cT.mode === vT.ve.Off && !this.vetoSet) return;
        const lT = new Uint8Array(new Uint32Array(cT.roots).buffer);
        (0, vT.hg)(kT, 0, cT.mode, cT.roots.length, lT) ? this.vetoSet = cT.mode !== vT.ve.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
      }
      endGameGrants() {
        this.freeCam.clearGame(), this.writeFreeCam()
      }
      writeFreeCam() {
        this.stopped() || this.freeCam.write(this.cmd)
      }
      writeHooks(TT) {
        const kT = this.cmd;
        if (!kT) return;
        const cT = function(TT) {
          let kT = 0;
          for (const cT of TT) cT.onPlayerAltAction && (kT |= 1 << vT.qc.AltAction), (cT.onPlayerClick || cT.onPlayerClickUp || cT.onPlayerAttackEntity) && (kT |= 1 << vT.qc.Click), cT.onPlayerChangeBlock && (kT |= 1 << vT.qc.ChangeBlock), cT.onPlayerDropItem && (kT |= 1 << vT.qc.DropItem);
          return kT
        }(TT);
        (0 !== cT || this.hooksSet) && ((0, vT.qg)(kT, 0, cT) ? this.hooksSet = 0 !== cT : this.onError(new Error("SetHooks didn't fit the command ring")))
      }
      writeCustomButtons() {
        const TT = this.cmd;
        TT && !this.stopped() && this.customButtons.write(TT)
      }
      writePromptWatch() {
        const TT = this.cmd,
          kT = this.promptWatch;
        kT !== this.promptWatchSent && TT && !this.stopped() && (0, vT.Ig)(TT, 0, Vl[kT]) && (this.promptWatchSent = kT)
      }
      writePublicLobby(TT) {
        const kT = this.cmd;
        kT && TT !== this.writtenPublicLobby && ((0, vT.xg)(kT, 0, TT ? 1 : 0) ? this.writtenPublicLobby = TT : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
      }
      writeLocalDbId(TT) {
        const kT = this.cmd;
        kT && ((0, vT.sg)(kT, 0, null === TT ? 0 : 1, null === TT ? el : Hl.encode(TT)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
      }
      first(TT) {
        const kT = this.generation;
        for (const lT of this.owners) {
          if (kT !== this.generation) break;
          try {
            const kT = TT(lT);
            if (void 0 !== kT) return kT
          } catch (cT) {
            this.Yj(cT)
          }
        }
      }
      nt(TT, kT) {
        this.guard((() => {
          OT.k.nt(TT, kT)
        }))
      }
      dropGameCamera() {
        try {
          this.scriptedCamera.reset()
        } catch (TT) {
          this.Yj(TT)
        }
      }
      restartGameCamera() {
        try {
          this.scriptedCamera.restart()
        } catch (TT) {
          this.Yj(TT)
        }
      }
      endSession() {
        if (!this.sessionLive) return;
        this.sessionLive = !1;
        const TT = this.owners;
        let kT;
        if (this.owners = this.tickers = this.renderers = this.receivers = [], this.generation++, !this.stopped()) try {
          this.writeAltVeto([]), this.writeHooks([]), this.writePublicLobby(!1), this.writeLocalDbId(null)
        } catch (lT) {
          kT = lT
        }
        try {
          this.entityInfo.sessionEnded()
        } catch (lT) {
          kT ??= lT
        }
        this.round(TT, Xl, !0);
        try {
          this.particles.sessionEnded() || this.onError(new Error("ParticleStopAll didn't fit the command ring"))
        } catch (lT) {
          kT ??= lT
        }
        try {
          this.clientApi.disposeGameOutput()
        } catch (lT) {
          kT ??= lT
        }
        const cT = this.options.onSessionEnd;
        if (cT) try {
          cT()
        } catch (lT) {
          this.onError(lT)
        }
        void 0 !== kT && this.Yj(kT)
      }
      round(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const lT = this.generation;
        for (const KT of TT) {
          if (lT !== this.generation) break;
          try {
            kT(KT)
          } catch (MT) {
            cT ? this.onError(MT) : this.Yj(MT)
          }
        }
      }
      guard(TT) {
        try {
          TT()
        } catch (kT) {
          this.Yj(kT)
        }
      }
    }

    function Zl(TT) {
      return TT === vT.$c ? null : String(TT)
    }

    function ul(TT) {
      TT.UA(CT.qd)
    }

    function Xl(TT) {
      var kT;
      null === (kT = TT.onClose) || void 0 === kT || kT.call(TT)
    }

    function dl(TT, kT) {
      TT.watch((() => {
        const cT = function(TT) {
          const kT = [],
            cT = Math.min(Kl, TT.length);
          for (let MT = 0; MT < cT; MT++) {
            var lT;
            const cT = null === (lT = TT.slot(MT)) || void 0 === lT ? void 0 : lT.typeObj,
              KT = cT ? (0, ll.gunTypeOf)(cT.id) : void 0;
            void 0 !== KT && kT.push(Sk[KT])
          }
          return kT
        }(TT);
        cT.length > 0 && (kT.preload(cT), kT.preload([Dk]))
      }))
    }
    var Ll = cT(36242),
      Rl = cT(4820),
      gl = cT(36580),
      Ul = cT(36602);

    function Yl(TT) {
      const kT = (0, Ll.countDecodesAs)(new Rl.Howl({
          ...(0, gl.l)(TT),
          pool: 15,
          preload: !1
        }), "sheet"),
        cT = kT.load.bind(kT);
      return kT.load = () => (kT._preload = !0, (0, Ul.e)(TT), cT()), kT
    }

    function Bl(TT, kT, cT) {
      const lT = TT.listener;
      if (lT.positionX) Wl(lT.positionX, kT, cT, 0), Wl(lT.positionY, kT, cT, 1), Wl(lT.positionZ, kT, cT, 2), Wl(lT.forwardX, kT, cT, 3), Wl(lT.forwardY, kT, cT, 4), Wl(lT.forwardZ, kT, cT, 5), Wl(lT.upX, kT, cT, 6), Wl(lT.upY, kT, cT, 7), Wl(lT.upZ, kT, cT, 8);
      else {
        let TT = !1;
        for (let lT = 0; lT < 9; lT++) TT ||= kT[lT] !== cT[lT];
        TT && (lT.setPosition(kT[0], kT[1], kT[2]), lT.setOrientation(kT[3], kT[4], kT[5], kT[6], kT[7], kT[8]), cT.set(kT))
      }
    }

    function Wl(TT, kT, cT, lT) {
      kT[lT] !== cT[lT] && (TT.value = kT[lT], cT[lT] = kT[lT])
    }
    class nl {
      constructor() {
        this.pose = new Float64Array(9), this.written = new Float64Array(9).fill(Number.NaN), this.watchedCtx = void 0
      }
      apply(TT) {
        this.pose.set(TT);
        const kT = Rl.Howler.ctx;
        return !!kT && (kT !== this.watchedCtx && (this.watchedCtx = kT, this.written.fill(Number.NaN), kT.addEventListener("statechange", (() => {
          "running" === kT.state && Bl(kT, this.pose, this.written)
        }))), "running" === kT.state && Bl(kT, TT, this.written), !0)
      }
    }
    var pl = cT(36392),
      il = cT(38998);
    let ql = null,
      sl = null;

    function TM() {
      return null === ql && (ql = document.createElement("div"), ql.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none", document.body.append(ql)), ql
    }

    function kM() {
      return sl ??= new il.e(new pl.c(TM)), sl
    }

    function cM() {
      var TT;
      null === (TT = sl) || void 0 === TT || TT.clear(), lM(null)
    }

    function lM(TT) {
      lT.e.get("scriptedCameraFacing") !== TT && lT.e.set({
        scriptedCameraFacing: TT
      })
    }
    var MM = cT(9542),
      KM = cT(9495),
      OM = cT(39026),
      yM = cT(40375),
      fM = cT(3214);
    const xM = Object.entries(vT.mc).reduce(((TT, kT) => {
      let [cT, lT] = kT;
      return TT[lT] = cT, TT
    }), []);

    function IM(TT, kT) {
      var cT;
      return 0 !== ((null !== (cT = TT.itemFlags[kT]) && void 0 !== cT ? cT : 0) & vT.Nc.Stackable)
    }
    const AM = /^(0|[1-9][0-9]*)$/,
      CM = {
        displayName: (TT, kT) => (0, ll.displayNameOf)(kT),
        description: (TT, kT) => (0, ll.descriptionOf)(kT),
        type: (TT, kT) => (0, ll.itemTypeOf)(kT),
        clipSize: (TT, kT) => (0, ll.clipSizeOf)(kT),
        armourReduction: (TT, kT) => (0, ll.armourReductionOf)(kT),
        scopeType: (TT, kT) => (0, ll.scopeTypeOf)(kT),
        stackable: IM,
        harvestType: (TT, kT) => xM[TT.blockHarvestTypes[kT]],
        harvestLevel: (TT, kT) => {
          const cT = TT.blockHarvestLevels[kT];
          return cT === vT.Qc ? void 0 : cT
        },
        harvests: (TT, kT) => {
          var cT;
          const lT = null !== (cT = TT.itemHarvests[kT]) && void 0 !== cT ? cT : 0;
          return 0 !== lT ? xM[lT] : void 0 === (0, ll.harvestsNullLevelOf)(kT) ? void 0 : null
        },
        level: (TT, kT) => {
          var cT, lT;
          const MT = null !== (cT = TT.itemLevels[kT]) && void 0 !== cT ? cT : vT.Qc;
          return MT !== vT.Qc ? MT : null !== (lT = (0, ll.harvestsNullLevelOf)(kT)) && void 0 !== lT ? lT : void 0
        }
      };

    function jM(TT, kT, cT) {
      return tM(new Uint8Array(Math.floor(TT.length / kT)), TT, kT, cT)
    }

    function vM(TT, kT, cT) {
      return tM(new Uint16Array(Math.floor(TT.length / kT)), TT, kT, cT)
    }

    function tM(TT, kT, cT, lT) {
      const MT = new DataView(kT.buffer, kT.byteOffset, kT.byteLength);
      for (let KT = 0; KT < TT.length; KT++) TT[KT] = lT(MT, KT * cT);
      return TT
    }
    class hM {
      constructor(TT, kT) {
        this.options = kT, this.metas = [], this.types = new Map, this.props = void 0, this.rootIdOf = TT => {
          const kT = this.idOf(TT);
          if (void 0 === kT) throw new Error(`No item is named ${TT}, an item's root`);
          return kT
        };
        const cT = kT => {
            const cT = kT();
            return new Uint8Array(TT.memory().buffer, TT.scratch(), cT).slice()
          },
          lT = (new TextDecoder).decode(cT((() => TT.queries.itemNames()))).split("\n"),
          MT = cT((() => TT.queries.blockProps())),
          KT = cT((() => TT.queries.itemProps()));
        this.props = {
          blockFlags: jM(MT, vT.J.BYTES, vT.J.flags),
          blockHarvestTypes: jM(MT, vT.J.BYTES, vT.J.harvestType),
          blockHarvestLevels: jM(MT, vT.J.BYTES, vT.J.harvestLevel),
          blockAttachedTops: vM(MT, vT.J.BYTES, vT.J.attachedTop),
          itemFlags: jM(KT, vT.Pc.BYTES, vT.Pc.flags),
          itemHarvests: jM(KT, vT.Pc.BYTES, vT.Pc.harvests),
          itemLevels: jM(KT, vT.Pc.BYTES, vT.Pc.level)
        }, (0, fM.l)(Object.freeze(lT)), (0, yM.f)()
      }
      idOf(TT) {
        if ("number" === typeof TT) return void 0 === (0, fM.i)(TT) ? void 0 : TT;
        const kT = (0, fM.e)(TT);
        return void 0 === kT && AM.test(TT) ? void 0 === (0, fM.i)(+TT) ? void 0 : +TT : kT
      }
      getMetaInfo(TT) {
        if (!TT || TT === MM.b) return MM.e;
        const kT = this.idOf(TT);
        if (void 0 === kT) throw new Error(`Item ${TT} not found in registry`);
        return this.metaOf(kT)
      }
      blockRootId(TT) {
        return 0 !== TT && void 0 !== (0, fM.i)(TT) ? this.metaOf(TT).rootId : TT
      }
      metaOf(TT) {
        return this.metas[TT] ??= (0, KM.g)((0, fM.i)(TT), TT, this.rootIdOf, (0, ll.rootMetaDescOf)(TT))
      }
      getItemId(TT) {
        if (!TT || TT === MM.b) return 0;
        const kT = this.idOf(TT);
        if (void 0 === kT) throw new Error(`Invalid block name. You sent ${TT}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
        return kT
      }
      getItemName(TT) {
        if (!TT || TT === MM.b) return MM.b;
        const kT = this.idOf(TT);
        if (void 0 === kT) throw new Error(`Item ${TT} not found in registry`);
        return (0, fM.i)(kT)
      }
      blockNameToBlockId(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (TT === MM.b) return 0;
        let cT = this.idOf(TT);
        if (void 0 === cT || !this.isBlockId(cT)) {
          const kT = TT.indexOf("|"),
            lT = kT > 0 ? (0, fM.e)(TT.slice(0, kT)) : void 0;
          cT = void 0 !== lT && this.isBlockId(lT) && (0, ll.rootMetaDescOf)(lT) === TT ? lT : void 0
        }
        if (void 0 !== cT) return cT;
        if (!kT) throw new Error(`Invalid block name. You sent ${TT}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
        return null
      }
      isBlockId(TT) {
        return TT > 0 && TT < this.props.blockFlags.length
      }
      nameOfId(TT) {
        return 0 !== TT && (0, fM.i)(TT) || MM.b
      }
      itemType(TT) {
        const kT = TT ? this.idOf(TT) : void 0;
        if (!kT) return null;
        let cT = this.types.get(kT);
        return void 0 === cT && (cT = Object.freeze({
          id: kT,
          name: (0, fM.i)(kT),
          meta: this.getMetaInfo(kT),
          stackable: IM(this.props, kT),
          type: (0, ll.itemTypeNameOf)(kT),
          clipSize: (0, ll.clipSizeOf)(kT),
          scopeType: (0, ll.scopeTypeOf)(kT),
          showsAimingUi: (0, ll.showsAimingUi)(kT)
        }), this.types.set(kT, cT)), cT
      }
      getItemStat(TT, kT) {
        if (OM.b.has(kT)) {
          const cT = "minChargeStateToUse" === kT ? this.getMetaInfo(TT).rootName : this.getItemName(TT),
            lT = this.options.get((0, OM.e)(cT, kT));
          if (null !== lT && void 0 !== lT) return lT
        }
        return this.defaultStat(TT, kT, this.statOf(kT))
      }
      getDisplayName(TT) {
        return this.getItemStat(TT, "displayName")
      }
      getDefaultItemStat(TT, kT) {
        return this.defaultStat(TT, kT, this.statOf(kT))
      }
      statOf(TT) {
        const kT = CM[TT];
        return void 0 === kT && function(TT, kT) {
          throw new Error(`ClientApi.${TT} is not available yet in the wasm client (${kT})`)
        }(`getItemStat("${TT}")`, `a table of the stat: the wasm client answers ${Object.keys(CM).join(", ")}`), kT
      }
      defaultStat(TT, kT, cT) {
        const lT = this.idOf(TT),
          MT = void 0 === lT ? void 0 : cT(this.props, lT);
        return null !== MT && void 0 !== MT || "displayName" !== kT ? MT : this.getItemName(TT)
      }
      getClientOption(TT) {
        return this.options.get(TT)
      }
      getGunStats(TT) {
        return this.getClientOption(`${TT}GunStats`)
      }
      watchClientOption(TT, kT) {
        return this.options.subscribe(TT, kT)
      }
      isSolidBlockId(TT) {
        var kT;
        return 0 !== ((null !== (kT = this.props.blockFlags[TT]) && void 0 !== kT ? kT : 0) & vT.F.Solid)
      }
      isStackableId(TT) {
        return IM(this.props, TT)
      }
      isFluidBlockId(TT) {
        var kT;
        return 0 !== ((null !== (kT = this.props.blockFlags[TT]) && void 0 !== kT ? kT : 0) & vT.F.Fluid)
      }
      canPlaceOverBlockId(TT) {
        var kT;
        return 0 !== ((null !== (kT = this.props.blockFlags[TT]) && void 0 !== kT ? kT : 0) & vT.F.PlaceOver)
      }
      attachedTopOf(TT) {
        var kT;
        return null !== (kT = this.props.blockAttachedTops[TT]) && void 0 !== kT ? kT : 0
      }
      isDroplessBlockId(TT) {
        return (0, ll.dropsNothing)(TT)
      }
    }

    function NM(TT, kT) {
      const cT = new Map;
      return (lT, MT) => {
        const KT = kT.idOf(lT),
          OT = void 0 === KT ? null : (lT => {
            let MT = cT.get(lT);
            if (void 0 === MT) {
              const KT = TT.queries.salvageRecipe(lT),
                OT = new DataView(TT.memory().buffer, TT.scratch(), KT),
                yT = [];
              for (let TT = 0; TT + vT.be.BYTES <= KT; TT += vT.be.BYTES) yT.push(Object.freeze({
                item: kT.nameOfId(vT.be.item(OT, TT)),
                amt: vT.be.amount(OT, TT)
              }));
              MT = 0 === yT.length ? null : Object.freeze(yT), cT.set(lT, MT)
            }
            return MT
          })(KT);
        if (null === OT || void 0 === MT) return OT;
        const yT = MT <= 0 ? 1 : MT;
        return OT.map((TT => {
          let {
            item: kT,
            amt: cT
          } = TT;
          return {
            item: kT,
            amt: cT * yT
          }
        }))
      }
    }
    var QM = cT(40542),
      SM = cT(36772),
      DM = cT(36767),
      aM = cT(36807),
      FM = cT(36310),
      rM = cT(40318),
      PM = cT(42126);
    const wM = -1,
      mM = new Uint8Array(0),
      bM = new TextEncoder;

    function zM(TT) {
      if (null === TT) return null;
      const kT = bM.encode(TT);
      return kT.byteLength < CT.wc ? kT : kT.subarray(0, CT.wc - 1)
    }
    class JM {
      constructor(TT) {
        this.deps = TT, this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = wM, this.keyframesSettled = !1, this.reloadFrom = wM
      }
      reloadKeyframes() {
        var TT, kT;
        this.keyframesVersion = wM, this.reloadFrom = null !== (TT = null === (kT = this.view()) || void 0 === kT ? void 0 : kT.version) && void 0 !== TT ? TT : wM
      }
      setPlayback(TT) {
        const kT = 1 === this.deps.core.UlT(TT);
        return kT && (this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = wM, this.reloadFrom = wM), kT
      }
      async open(TT) {
        const kT = await this.deps.replay.open(TT);
        return "opening" === kT && (this.reloadKeyframes(), this.deps.recorder.prefetch()), kT
      }
      play() {
        this.deps.replay.play()
      }
      pause() {
        this.deps.replay.pause()
      }
      seek(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.deps.replay.seek(Math.max(0, Math.floor(TT)), kT)
      }
      setSpeed(TT) {
        this.deps.replay.setSpeed(TT)
      }
      setCameraMode(TT) {
        this.deps.replay.setCameraMode(PM.d.indexOf(TT))
      }
      view() {
        var TT;
        const kT = vT.A.replayViewPtr(this.deps.apiView(), 0);
        if (0 === kT) return this.lastView = null, null;
        const cT = new DataView(this.deps.buffer(), kT, vT.Yd.BYTES),
          lT = vT.Yd.version(cT, 0),
          MT = this.lastView;
        if (null !== MT && MT.version === lT) return MT;
        const KT = vT.Yd.markIn(cT, 0),
          OT = {
            version: lT,
            state: vT.Yd.state(cT, 0),
            cameraMode: null !== (TT = PM.d[vT.Yd.cameraMode(cT, 0)]) && void 0 !== TT ? TT : "recording",
            UA: vT.Yd.UA(cT, 0),
            totalTicks: vT.Yd.totalTicks(cT, 0),
            speed: vT.Yd.speed(cT, 0),
            mark: KT === vT.Ud ? null : {
              inTick: KT,
              outTick: vT.Yd.markOut(cT, 0)
            },
            editVersion: vT.Yd.editVersion(cT, 0)
          };
        return this.lastView = OT, OT
      }
      keyframes() {
        const TT = this.view();
        if (null === TT) return [];
        TT.version !== this.reloadFrom && (this.reloadFrom = wM);
        const kT = this.reloadFrom === wM && TT.state !== CT.kd.Cropping && TT.state !== CT.kd.None,
          cT = kT ? TT.editVersion : TT.version;
        if (cT === this.keyframesVersion && kT === this.keyframesSettled) return this.lastKeyframes;
        const {
          core: lT
        } = this.deps, MT = lT.YlT(), KT = lT.Vh(), OT = [];
        if (0 !== KT && MT > 0) {
          const TT = new DataView(this.deps.buffer(), KT, MT * CT.hc);
          for (let kT = 0; kT < MT; kT++) {
            const cT = kT * CT.hc,
              lT = kT => TT.getFloat64(cT + kT, !0);
            OT.push({
              UA: TT.getUint32(cT + CT.sc, !0),
              position: [lT(CT.rc), lT(CT.rc + 8), lT(CT.rc + 16)],
              direction: [lT(CT.lc), lT(CT.lc + 8), lT(CT.lc + 16)],
              easing: [lT(CT.pc), lT(CT.pc + 8), lT(CT.pc + 16), lT(CT.pc + 24)]
            })
          }
        }
        return this.keyframesVersion = cT, this.keyframesSettled = kT, this.lastKeyframes = OT, OT
      }
      addKeyframe() {
        const TT = this.deps.apiView(),
          kT = [vT.A.eye(TT, 0, 0), vT.A.eye(TT, 0, 1), vT.A.eye(TT, 0, 2)];
        return this.deps.replay.addKeyframe(kT, function(TT, kT) {
          const cT = Math.cos(kT);
          return [cT * Math.sin(TT), -Math.sin(kT), cT * Math.cos(TT)]
        }(vT.A.heading(TT, 0), vT.A.pitch(TT, 0)))
      }
      setKeyframe(TT) {
        return this.deps.replay.setKeyframe(TT.UA, Float64Array.from([...TT.position, ...TT.direction, ...TT.easing]))
      }
      moveKeyframe(TT, kT) {
        return this.deps.replay.moveKeyframe(TT, kT)
      }
      deleteKeyframes(TT, kT) {
        return this.deps.replay.deleteKeyframes(TT, kT)
      }
      setMark(TT) {
        var kT, cT;
        return this.deps.replay.setMark(null !== (kT = null === TT || void 0 === TT ? void 0 : TT.inTick) && void 0 !== kT ? kT : -1, null !== (cT = null === TT || void 0 === TT ? void 0 : TT.outTick) && void 0 !== cT ? cT : -1)
      }
      crop(TT, kT) {
        const cT = this.deps.replay.crop(TT, kT);
        return cT && this.reloadKeyframes(), cT
      }
      save(TT) {
        return this.deps.replay.askSave(), this.deps.recorder.saveEdited(TT)
      }
      recorderControl(TT) {
        this.deps.recorder.control(TT)
      }
      recorderPrefs(TT, kT) {
        this.deps.recorder.prefs(TT, kT)
      }
      recorderOption(TT, kT) {
        const cT = this.deps.cmd();
        return null !== cT && (0, vT.Uf)(cT, 0, TT, null === kT ? mM : bM.encode(kT))
      }
      recordFlyingText(TT, kT, cT, lT) {
        const MT = this.deps.cmd(),
          KT = Math.max(0, Math.min(4294967295, Math.round(lT)));
        return null !== MT && (0, vT.Nf)(MT, 0, kT, cT, KT, bM.encode(TT))
      }
      recordPlayerKilled(TT, kT, cT, lT) {
        const MT = this.deps.cmd();
        return null !== MT && (0, vT.Yf)(MT, 0, TT, kT, Math.max(0, cT), bM.encode(lT))
      }
      recordKillfeed(TT, kT, cT) {
        var lT, MT;
        const KT = this.deps.cmd(),
          OT = function(TT) {
            const kT = TT.reduce(((TT, kT) => {
                var cT;
                return TT + Wc.cb + (null !== (cT = null === kT || void 0 === kT ? void 0 : kT.byteLength) && void 0 !== cT ? cT : 0)
              }), 0),
              cT = new Uint8Array(kT),
              lT = new DataView(cT.buffer);
            let MT = 0;
            for (const OT of TT) {
              var KT;
              lT.setUint16(MT, null !== (KT = null === OT || void 0 === OT ? void 0 : OT.byteLength) && void 0 !== KT ? KT : CT.wc, !0), MT += Wc.cb, null !== OT && (cT.set(OT, MT), MT += OT.byteLength)
            }
            return cT
          }([zM(TT.name), zM(TT.colour), zM(kT.name), zM(kT.colour), zM(cT)]);
        return null !== KT && (0, vT.Qf)(KT, 0, null !== (lT = TT.id) && void 0 !== lT ? lT : vT.bd, null !== (MT = kT.id) && void 0 !== MT ? MT : vT.bd, OT)
      }
      recorderSession(TT, kT) {
        this.deps.recorder.session({
          session: kT,
          lobbyType: TT.lobbyType,
          game: TT.gameNameWithVariation,
          lobby: TT.lobbyName
        })
      }
      recorderClose() {
        this.deps.core.BlT()
      }
      filePartDone(TT, kT) {
        this.deps.recorder.filePartDone(TT, kT)
      }
      fileDone(TT) {
        this.deps.recorder.fileDone(TT)
      }
    }
    const oM = -2147483648;
    class HM {
      constructor(TT) {
        var kT;
        this.deps = TT, this.state = {
          recording: !1,
          clipping: !1,
          hasClipBuffer: !1,
          seconds: 0
        }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (kT = TT.now) && void 0 !== kT ? kT : () => performance.now()
      }
      get current() {
        return this.state
      }
      get live() {
        var TT, kT, cT;
        return null === (TT = null === (kT = (cT = this.deps).live) || void 0 === kT ? void 0 : kT.call(cT)) || void 0 === TT || TT
      }
      activated(TT) {
        var kT, cT;
        this.live && (this.viewerShown(!0 === (null === (kT = (cT = this.deps).viewerOpen) || void 0 === kT ? void 0 : kT.call(cT))), this.deps.client.recorderSession(TT, (0, PM.g)()))
      }
      closed() {
        this.deps.client.recorderClose()
      }
      toggleRecording() {
        var TT, kT;
        this.live && (this.state.recording || !0 !== (null === (TT = (kT = this.deps).viewerOpen) || void 0 === TT ? void 0 : TT.call(kT))) ? this.deps.client.recorderControl(CT.Rc.ToggleRecording) : this.deps.notify(aM.d.closeViewerFirst)
      }
      saveClip() {
        this.live ? this.deps.client.recorderControl(CT.Rc.SaveClip) : this.deps.notify(aM.d.clippingNotOn)
      }
      viewerShown(TT) {
        this.live && this.deps.client.recorderControl(TT ? CT.Rc.ViewerOpened : CT.Rc.ViewerClosed)
      }
      setPrefs(TT, kT) {
        this.live && this.deps.client.recorderPrefs(TT, kT)
      }
      setOption(TT, kT) {
        this.live && this.deps.client.recorderOption(TT, kT)
      }
      recordFlyingText(TT, kT, cT, lT) {
        this.live && this.deps.client.recordFlyingText(TT, kT, cT, lT)
      }
      recordPlayerKilled(TT, kT, cT, lT) {
        this.live && this.deps.client.recordPlayerKilled(TT, kT, cT, lT)
      }
      recordKillfeed(TT, kT, cT) {
        this.live && this.deps.client.recordKillfeed(TT, kT, cT)
      }
      UA() {
        let TT = this.state;
        if (this.clipTickPending && (this.clipTickPending = !1, TT = {
            ...TT,
            hasClipBuffer: !0
          }), null !== this.recordingSince) {
          const kT = Math.floor((this.now() - this.recordingSince) / 1e3);
          kT !== TT.seconds && (TT = {
            ...TT,
            seconds: kT
          })
        }
        this.set(TT)
      }
      onEvent(TT) {
        var kT, cT;
        const {
          notify: lT
        } = this.deps, MT = aM.d;
        switch (TT.what) {
          case CT.Nc.RecordingStarted:
            this.recordingSince = this.now(), this.set({
              ...this.state,
              recording: !0,
              seconds: 0
            }), lT(MT.recordingStarted);
            break;
          case CT.Nc.RecordingStopped:
            this.stopRecording(), lT(MT.recordingStopped), this.saveState(CT.cd.Recording, "saving");
            break;
          case CT.Nc.RecordingDiscarded:
            this.stopRecording(), lT(MT.recordingDiscarded);
            break;
          case CT.Nc.RecordingTurnedOff:
            this.stopRecording(), lT(MT.recordingTurnedOff);
            break;
          case CT.Nc.LimitReached:
            lT(MT.limitReached);
            break;
          case CT.Nc.ClipSaved:
            this.saveState(CT.cd.Clip, "saving");
            break;
          case CT.Nc.ClipEmpty:
            lT(MT.clipEmpty);
            break;
          case CT.Nc.ClippingNotOn:
            lT(MT.clippingNotOn);
            break;
          case CT.Nc.Disallowed:
            lT(MT.disallowed);
            break;
          case CT.Nc.ClippingOn:
            this.clipTickPending = !0, this.set({
              ...this.state,
              clipping: !0,
              hasClipBuffer: !1
            });
            break;
          case CT.Nc.ClippingOff:
            this.clipTickPending = !1, this.set({
              ...this.state,
              clipping: !1,
              hasClipBuffer: !1
            });
            break;
          case CT.Nc.ClipSettingsChanged:
            this.clipTickPending = this.state.clipping, this.set({
              ...this.state,
              hasClipBuffer: !1
            });
            break;
          case CT.Nc.SaveBusy:
            null === (kT = (cT = this.deps).onSaveState) || void 0 === kT || kT.call(cT, TT.kind, "busy"), lT(MT.saveBusy);
            break;
          case CT.Nc.CloseViewerFirst:
            lT(MT.closeViewerFirst)
        }
      }
      fileReady(TT, kT) {
        this.deps.download(kT), this.saveState(TT, "done"), this.deps.notify(TT === CT.cd.Clip ? aM.d.clipSaved : aM.d.recordingSaved)
      }
      failed(TT) {
        this.saveState(TT, "failed"), this.deps.notify(TT === CT.cd.Clip ? aM.d.clipFailed : aM.d.recordingFailed)
      }
      stopRecording() {
        this.recordingSince = null, this.set({
          ...this.state,
          recording: !1,
          seconds: 0
        })
      }
      saveState(TT, kT) {
        var cT, lT;
        null === (cT = (lT = this.deps).onSaveState) || void 0 === cT || cT.call(lT, TT, kT)
      }
      set(TT) {
        TT !== this.state && (this.state = TT, this.deps.onState(TT))
      }
    }
    const eM = new TextDecoder;

    function GM(TT, kT, cT, lT) {
      const MT = [];
      for (let KT = 0; KT < lT; KT++) {
        if (kT + Wc.cb > cT) return null;
        const lT = TT.getUint16(kT, !0);
        if (kT += Wc.cb, lT !== CT.wc) {
          if (kT + lT > cT) return null;
          MT.push(eM.decode(new Uint8Array(TT.buffer, TT.byteOffset + kT, lT))), kT += lT
        } else MT.push(null)
      }
      return kT === cT ? MT : null
    }

    function VM(TT, kT) {
      let cT = new DataView(new ArrayBuffer(0)),
        lT = !0;
      const MT = {
        replayFailed: (kT, cT) => {
          TT.replayFailed({
            reason: kT,
            code: cT
          })
        },
        replayOption: (kT, MT, KT, OT) => {
          const yT = function(TT, kT, cT, lT) {
            switch (kT) {
              case CT.gd.Cleared:
                return 0 === lT ? null : void 0;
              case CT.gd.Text:
                return eM.decode(new Uint8Array(TT.buffer, TT.byteOffset + cT, lT));
              case CT.gd.Int:
                return lT === Int32Array.BYTES_PER_ELEMENT ? TT.getInt32(cT, !0) : void 0;
              case CT.gd.Double:
                return lT === Float64Array.BYTES_PER_ELEMENT ? TT.getFloat64(cT, !0) : void 0;
              default:
                return
            }
          }(cT, MT, KT, OT);
          void 0 !== yT ? TT.replayOption({
            key: kT,
            value: yT
          }) : lT = !1
        },
        replayUiEvent: (kT, MT, KT, OT, yT, fT) => {
          const xT = function(TT, kT, cT, lT, MT, KT, OT) {
            const yT = KT + OT;
            switch (kT) {
              case CT.id.FlyingText: {
                const OT = GM(TT, KT, yT, 1);
                return null !== OT && null !== OT[0] ? {
                  what: kT,
                  vc: cT,
                  jc: lT,
                  angle: MT,
                  contentJson: OT[0]
                } : null
              }
              case CT.id.PlayerKilled: {
                const lT = GM(TT, KT, yT, 3);
                return lT ? {
                  what: kT,
                  killstreak: cT,
                  dead: lT[0],
                  killer: lT[1],
                  withItem: lT[2]
                } : null
              }
              case CT.id.Killfeed: {
                const cT = GM(TT, KT, yT, 7);
                return cT ? {
                  what: kT,
                  killerId: cT[0],
                  killerName: cT[1],
                  killerColour: cT[2],
                  victimId: cT[3],
                  victimName: cT[4],
                  victimColour: cT[5],
                  withItem: cT[6]
                } : null
              }
              default:
                return null
            }
          }(cT, kT, MT, KT, OT, yT, fT);
          null !== xT ? TT.replayUiEvent(xT) : lT = !1
        },
        replayFilePart: (cT, MT, KT, OT) => {
          const yT = kT();
          KT + OT > yT.byteLength ? lT = !1 : TT.filePart(cT, MT, new Uint8Array(yT, KT, OT).slice())
        },
        replayFileReady: (kT, cT, lT, MT) => {
          TT.fileReady({
            save: kT,
            kind: cT,
            parts: lT,
            bytes: MT
          })
        },
        recorderEvent: (kT, cT, lT) => {
          TT.recorderEvent({
            what: kT,
            kind: cT,
            save: lT
          })
        },
        replayOpened: (kT, lT, MT) => {
          TT.replayOpened(eM.decode(new Uint8Array(cT.buffer, cT.byteOffset + lT, MT)))
        }
      };
      return (TT, kT, KT, OT) => !(TT < CT.W.ReplayFailed || TT > CT.W.RecorderEvent) && (cT = kT, lT = !0, (0, vT.ye)(TT, kT, KT, OT, MT) && lT)
    }

    function EM(TT) {
      let kT = null;
      const cT = VM(TT, (() => {
        if (null === kT) throw new Error("a recorder event read outside recorderEventReader's call");
        return kT.buffer
      }));
      return (TT, lT) => {
        kT = lT;
        try {
          ! function(TT, kT) {
            const cT = TT.slice(),
              lT = new DataView(cT.buffer);
            for (let MT = 0; MT < cT.byteLength;) {
              if (MT + CT.U > cT.byteLength) throw new Error(`the recorder module's events end mid-head at ${MT}`);
              const TT = lT.getUint32(MT, !0),
                KT = 65535 & TT,
                OT = TT >>> 16,
                yT = MT + CT.U;
              if (yT + OT > cT.byteLength || !kT(KT, lT, yT, OT)) throw new Error(`the recorder module wrote a malformed event ${KT} (${OT} bytes) at ${MT}`);
              MT = yT + (0, CT.ke)(OT)
            }
          }(TT, cT)
        } finally {
          kT = null
        }
      }
    }
    class ZM {
      constructor(TT, kT) {
        this.acks = TT, this.handlers = kT, this.parts = new Map
      }
      onPart(TT, kT, cT) {
        let lT = this.parts.get(TT);
        lT || (lT = [], this.parts.set(TT, lT)), lT[kT] = cT, this.acks.filePartDone(TT, kT)
      }
      onReady(TT) {
        var kT;
        const cT = null !== (kT = this.parts.get(TT.save)) && void 0 !== kT ? kT : [];
        this.parts.delete(TT.save);
        const lT = function(TT, kT, cT) {
          if (TT.length !== kT) return null;
          let lT = 0;
          for (let OT = 0; OT < kT; OT++) {
            if (void 0 === TT[OT]) return null;
            lT += TT[OT].byteLength
          }
          if (lT !== cT) return null;
          if (1 === kT) return TT[0];
          const MT = new Uint8Array(cT);
          let KT = 0;
          for (const OT of TT) MT.set(OT, KT), KT += OT.byteLength;
          return MT
        }(cT, TT.parts, TT.bytes);
        this.acks.fileDone(TT.save), null === lT ? this.handlers.fileIncomplete(TT.save, TT.kind) : this.handlers.fileReady(TT.save, TT.kind, lT)
      }
      onDiscarded(TT) {
        this.parts.delete(TT)
      }
    }

    function uM() {
      return cT.e(58).then((() => cT(42156)))
    }
    class XM {
      constructor(TT) {
        this.deps = TT, this.sink = void 0, this.recorder = void 0, this.recorderEvents = void 0, this.parts = void 0, this.viewerChunk = null, this.viewer = null;
        const {
          client: kT
        } = TT;
        this.recorder = new HM({
          client: kT,
          live: () => {
            var TT;
            return !0 !== (null === (TT = this.viewer) || void 0 === TT ? void 0 : TT.inPlayback)
          },
          viewerOpen: TT.viewerOpen,
          notify: TT.notify,
          download: kT => {
            var cT;
            null === (cT = TT.download) || void 0 === cT || cT.call(TT, kT)
          },
          onState: TT.onRecorderState,
          onSaveState: TT.onSaveState
        }), this.parts = new ZM(kT, {
          fileReady: (TT, kT, cT) => {
            var lT;
            kT === CT.cd.Edited ? null === (lT = this.viewer) || void 0 === lT || lT.saveDone(cT) : this.recorder.fileReady(kT, cT)
          },
          fileIncomplete: (TT, kT) => {
            this.saveFailed(kT)
          }
        });
        const cT = {
          replayFailed: TT => {
            var kT;
            null === (kT = this.viewer) || void 0 === kT || kT.onFailed(TT)
          },
          replayOption: kT => {
            var cT;
            null === (cT = TT.onReplayOption) || void 0 === cT || cT.call(TT, kT)
          },
          replayUiEvent: kT => {
            var cT;
            null === (cT = TT.onReplayUiEvent) || void 0 === cT || cT.call(TT, kT)
          },
          filePart: (TT, kT, cT) => {
            this.parts.onPart(TT, kT, cT)
          },
          fileReady: TT => {
            this.parts.onReady(TT)
          },
          replayOpened: kT => {
            var cT;
            null === (cT = TT.onReplayOpened) || void 0 === cT || cT.call(TT, kT)
          },
          recorderEvent: TT => {
            var kT;
            switch (TT.what) {
              case CT.Nc.FileDiscarded:
                this.parts.onDiscarded(TT.save);
                break;
              case CT.Nc.SaveFailed:
                this.saveFailed(TT.kind);
                break;
              case CT.Nc.SaveBusy:
                if (null !== (kT = this.viewer) && void 0 !== kT && kT.savePending) {
                  this.viewer.saveFailed(!0);
                  break
                }
                this.recorder.onEvent(TT);
                break;
              default:
                this.recorder.onEvent(TT)
            }
          }
        };
        this.sink = function(TT, kT) {
          return {
            onReplayEvent: VM(TT, kT)
          }
        }(cT, TT.buffer), this.recorderEvents = EM(cT)
      }
      get currentViewer() {
        return this.viewer
      }
      loadViewer() {
        var TT;
        return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (TT = this.deps.loadViewer) && void 0 !== TT ? TT : uM)().catch((TT => {
          throw this.viewerChunk = null, TT
        })), this.viewerChunk.then((TT => (this.viewer ??= new TT.ReplayViewer({
          client: this.deps.client,
          setHoldDraws: this.deps.setHoldDraws,
          meshPending: this.deps.meshPending,
          notify: this.deps.notify,
          onChange: () => {
            var TT, kT;
            null === (TT = (kT = this.deps).onViewerChange) || void 0 === TT || TT.call(kT)
          }
        }), this.viewer))))
      }
      activated(TT) {
        this.recorder.activated(TT)
      }
      afterFrame(TT) {
        try {
          TT > 0 && this.recorder.UA()
        } finally {
          var kT;
          null === (kT = this.viewer) || void 0 === kT || kT.afterFrame()
        }
      }
      end() {
        var TT;
        null === (TT = this.viewer) || void 0 === TT || TT.end()
      }
      saveFailed(TT) {
        var kT;
        TT === CT.cd.Edited ? null === (kT = this.viewer) || void 0 === kT || kT.saveFailed(!1) : this.recorder.failed(TT)
      }
    }
    var dM = cT(40246),
      LM = cT(40264),
      RM = cT(4773),
      gM = cT(40622);
    class UM {
      constructor(TT) {
        this.deps = TT, this.analogue = [0, 0], this.keys = 0, this.unsent = !1
      }
      drag(TT, kT) {
        if (!this.deps.live() || 0 === TT && 0 === kT) return;
        const cT = (0, ZT.w)(0, performance.now()),
          lT = this.deps.dragScale();
        (0, gM.h)((() => {
          (0, ZT.y)(CT.rb.MouseDown, 0, 0, 0, cT), (0, ZT.y)(CT.rb.MouseMove, 0, TT * lT, kT * lT, 0), (0, ZT.y)(CT.rb.MouseUp, 0, 0, 0, cT)
        }))
      }
      move(TT) {
        var kT, cT;
        this.analogue[0] = null !== (kT = null === TT || void 0 === TT ? void 0 : TT.x) && void 0 !== kT ? kT : 0, this.analogue[1] = null !== (cT = null === TT || void 0 === TT ? void 0 : TT.y) && void 0 !== cT ? cT : 0, this.send()
      }
      holdVertical(TT, kT) {
        const cT = "freeCamUp" === TT ? vT.bc.Up : vT.bc.Down;
        this.keys = kT ? this.keys | cT : this.keys & ~cT, this.send()
      }
      flush() {
        this.unsent && this.send()
      }
      send() {
        const TT = this.deps.live() ? this.deps.cmd() : null;
        this.unsent = null !== TT && !(0, vT.Se)(TT, 0, this.analogue, this.keys)
      }
    }
    var YM = cT(725),
      BM = cT(314),
      WM = cT(118),
      nM = cT(9275);

    function pM() {
      const TT = lT.e.get("clientEscMenuOptions"),
        kT = (0, YM.p)(TT);
      return {
        mouse: (0, WM.isMobile)() ? kT : TT.mouseSensitivity,
        touch: kT,
        fovPercent: TT.cameraFOV
      }
    }

    function iM() {
      const TT = lT.e.get("clientEscMenuOptions"),
        kT = lT.e.get("isTouchScreen") ? (0, YM.p)(TT) : TT.mouseSensitivity,
        cT = pM().mouse;
      return cT > 0 ? kT / cT : 1
    }

    function qM(TT) {
      const kT = () => {
        TT.setSoundPrefs(lT.e.get("soundVolume"), lT.e.get("soundOnFromAd"))
      };
      let cT = null;
      const MT = () => {
        const {
          showFog: kT,
          enableLighting: MT,
          fogChunkDistance: KT,
          chunkFadeIn: OT
        } = lT.e.get("clientEscMenuOptions"), yT = {
          showFog: kT,
          lighting: MT,
          fogChunks: KT,
          chunkFade: OT
        };
        cT && (0, CT.Zd)(cT) === (0, CT.Zd)(yT) && cT.fogChunks === KT || (cT = yT, TT.setEnvPrefs(cT))
      };
      let KT = null;
      const yT = () => {
        const kT = function() {
          const TT = lT.e.get("clientEscMenuOptions");
          return {
            nametagsHidden: lT.e.get("areNametagsHidden"),
            crouchToggle: TT.crouchIsToggle,
            bhopDisabled: TT.disableBunnyHopping,
            disableBobbing: TT.disableBobbing,
            ezTowering: TT.ezTowering && (0, BM.g)(),
            ezBridging: TT.ezBridging,
            showChunkBorders: TT.showChunkBorders,
            nametagCutDistance: (0, nM.d)()
          }
        }();
        (0, mT.de)(KT, kT) || (KT = kT, TT.setUiPrefs(kT))
      };
      let fT = null;
      const xT = () => {
        const kT = pM();
        (0, mT.de)(fT, kT) || (fT = kT, TT.setLookPrefs(kT))
      };
      kT(), MT(), yT(), xT();
      const IT = [(0, OT.m)("appManagerUpdated|soundVolume", kT), (0, OT.m)("appManagerUpdated|soundOnFromAd", kT), (0, OT.m)("appManagerUpdated|clientEscMenuOptions", (() => {
        MT(), yT(), xT()
      })), (0, OT.m)("appManagerUpdated|areNametagsHidden", yT), (0, OT.m)("appManagerUpdated|showDistantNametags", yT)];
      return () => {
        for (const TT of IT) TT()
      }
    }
    var sM = cT(40550),
      TK = cT(40553);
    var kK = (0, TK.e)("lend"),
      cK = (0, TK.e)("starting"),
      lK = (0, TK.e)("generation"),
      MK = (0, TK.e)("end");
    class KK {
      constructor(TT) {
        this.deps = TT, Object.defineProperty(this, MK, {
          value: OK
        }), Object.defineProperty(this, kK, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, cK, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, lK, {
          writable: !0,
          value: 0
        })
      }
      get active() {
        return null !== (0, sM.c)(this, kK)[kK] || (0, sM.c)(this, cK)[cK]
      }
      async start(TT) {
        if (this.active) return "busy";
        const kT = (0, sM.c)(this, lK)[lK];
        (0, sM.c)(this, cK)[cK] = !0;
        try {
          if (!await this.deps.ensureLoaded()) return "refused"
        } finally {
          (0, sM.c)(this, cK)[cK] = !1
        }
        if (kT !== (0, sM.c)(this, lK)[lK]) return "refused";
        const cT = this.deps.beginSave();
        if (!cT) return "refused";
        const lT = Number(BigInt.asUintN(32, TT)),
          MT = Number(BigInt.asUintN(32, TT >> 32n));
        let KT = "refused";
        return this.deps.recorderCall(((TT, kT) => {
          const OT = cT.editState,
            yT = TT.stage(OT.length);
          0 !== yT ? (new Uint8Array(kT.buffer, yT, OT.length).set(OT), TT.WlT(cT.headLen, lT, MT) && (KT = "sealing")) : KT = "tooLarge"
        }), !0), "sealing" !== KT ? (cT.end(), KT) : ((0, sM.c)(this, kK)[kK] = cT, "sealing")
      }
      beforeRecorderStep() {
        const TT = (0, sM.c)(this, kK)[kK];
        if (!TT) return null;
        let kT = -1,
          cT = 0;
        if (!this.deps.recorderCall((TT => {
            kT = TT.nlT(), kT > 0 && (cT = TT.plT())
          }))) return (0, sM.c)(this, MK)[MK](TT, "stopped");
        if (kT < 0) return (0, sM.c)(this, MK)[MK](TT, "read");
        if (0 === kT) return null;
        const lT = TT.head(cT, kT);
        let MT = !1;
        if (lT && this.deps.recorderCall(((TT, cT) => {
            const KT = TT.stage(kT);
            0 !== KT && (new Uint8Array(cT.buffer, KT, kT).set(lT), MT = !0)
          }), !0), MT) return null;
        const KT = TT.givenUp();
        this.deps.recorderCall((TT => {
          TT.ilT()
        }));
        const OT = (0, sM.c)(this, MK)[MK](TT, KT ? "givenUp" : "stopped");
        return KT && this.deps.givenUp("Reopen the replay you were editing to make your edits again, as they weren't saved when another replay opened."), OT
      }
      stop() {
        (0, sM.c)(this, lK)[lK]++;
        const TT = (0, sM.c)(this, kK)[kK];
        TT && (this.deps.recorderCall((TT => {
          TT.ilT()
        })), (0, sM.c)(this, MK)[MK](TT, "stopped"))
      }
    }

    function OK(TT, kT) {
      return (0, sM.c)(this, kK)[kK] = null, TT.end(), kT
    }

    function yK(TT, kT) {
      const cT = new Uint8Array(4),
        lT = new DataView(cT.buffer);
      return lT.setUint8(0, TT ? 1 : 0), lT.setUint16(2, Math.max(0, Math.min(65535, Math.round(kT))), !0), cT
    }

    function fK(TT, kT) {
      return TT > function(TT) {
        return 16777216 + 314572.8 * Math.max(0, TT)
      }(kT) + 33554432
    }
    let xK = null;

    function IK(TT) {
      return xK ??= async function(TT) {
        const kT = TT.loadInFlight();
        kT && await kT.catch((() => {}));
        if (TT.trapped()) return "trapped";
        if (TT.busy() || !fK(TT.memoryBytes(), TT.clipSeconds())) return "wj";
        TT.unload();
        let cT = !1;
        try {
          cT = await TT.load()
        } catch {
          cT = !1
        }
        if (!cT) return TT.trapped() ? "trapped" : TT.yv() ? "yv" : "failed";
        return "recycled"
      }(TT).finally((() => {
        xK = null
      })), xK
    }
    const AK = "Replay recording couldn't load, so try again.",
      CK = new Set([CT.Rc.ToggleRecording, CT.Rc.SaveClip]);
    var jK = (0, TK.e)("bindings"),
      vK = (0, TK.e)("module"),
      tK = (0, TK.e)("memory"),
      hK = (0, TK.e)("trapped"),
      NK = (0, TK.e)("yv"),
      QK = (0, TK.e)("recycleDue"),
      SK = (0, TK.e)("loading"),
      DK = (0, TK.e)("generation"),
      aK = (0, TK.e)("viewDrawn"),
      FK = (0, TK.e)("clip"),
      rK = (0, TK.e)("session"),
      PK = (0, TK.e)("control"),
      wK = (0, TK.e)("deferred"),
      mK = (0, TK.e)("coreU8"),
      bK = (0, TK.e)("coreU32"),
      zK = (0, TK.e)("moduleU8"),
      JK = (0, TK.e)("edited"),
      oK = (0, TK.e)("sendSession"),
      HK = (0, TK.e)("checkNotInEvents"),
      eK = (0, TK.e)("clipping"),
      GK = (0, TK.e)("busy"),
      VK = (0, TK.e)("use"),
      EK = (0, TK.e)("ensureLoaded"),
      ZK = (0, TK.e)("loadOnce"),
      uK = (0, TK.e)("recycleAfterStep"),
      XK = (0, TK.e)("settleRecycle"),
      dK = (0, TK.e)("load"),
      LK = (0, TK.e)("attach"),
      RK = (0, TK.e)("resendHeld"),
      gK = (0, TK.e)("recycle"),
      UK = (0, TK.e)("send"),
      YK = (0, TK.e)("unload"),
      BK = (0, TK.e)("dropModule"),
      WK = (0, TK.e)("coreBytes"),
      nK = (0, TK.e)("coreWords"),
      pK = (0, TK.e)("moduleBytes"),
      iK = (0, TK.e)("loadFailed"),
      qK = (0, TK.e)("call"),
      sK = (0, TK.e)("guard"),
      TO = (0, TK.e)("trapOn");
    class kO {
      constructor(TT) {
        this.deps = TT, Object.defineProperty(this, TO, {
          value: PO
        }), Object.defineProperty(this, sK, {
          value: rO
        }), Object.defineProperty(this, qK, {
          value: FO
        }), Object.defineProperty(this, iK, {
          value: aO
        }), Object.defineProperty(this, pK, {
          value: DO
        }), Object.defineProperty(this, nK, {
          value: SO
        }), Object.defineProperty(this, WK, {
          value: QO
        }), Object.defineProperty(this, BK, {
          value: NO
        }), Object.defineProperty(this, YK, {
          value: hO
        }), Object.defineProperty(this, UK, {
          value: tO
        }), Object.defineProperty(this, gK, {
          value: vO
        }), Object.defineProperty(this, RK, {
          value: jO
        }), Object.defineProperty(this, LK, {
          value: CO
        }), Object.defineProperty(this, dK, {
          value: AO
        }), Object.defineProperty(this, XK, {
          value: IO
        }), Object.defineProperty(this, uK, {
          value: xO
        }), Object.defineProperty(this, ZK, {
          value: fO
        }), Object.defineProperty(this, EK, {
          value: yO
        }), Object.defineProperty(this, VK, {
          value: OO
        }), Object.defineProperty(this, GK, {
          value: KO
        }), Object.defineProperty(this, eK, {
          value: MO
        }), Object.defineProperty(this, HK, {
          value: lO
        }), Object.defineProperty(this, oK, {
          value: cO
        }), Object.defineProperty(this, jK, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, vK, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, tK, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, hK, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, NK, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, QK, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, SK, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, DK, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, aK, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, FK, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, rK, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, PK, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, wK, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, mK, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, bK, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, zK, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, JK, {
          writable: !0,
          value: void 0
        }), (0, sM.c)(this, JK)[JK] = new KK({
          ensureLoaded: () => (0, sM.c)(this, EK)[EK](),
          recorderCall: (TT, kT) => {
            kT && (0, sM.c)(this, HK)[HK]("an edited save's stage");
            const cT = (0, sM.c)(this, qK)[qK](((kT, cT) => (TT(kT, cT), !0)));
            return null !== cT && void 0 !== cT && cT
          },
          beginSave: TT.beginSave,
          givenUp: TT.givenUp
        })
      }
      get active() {
        return null !== (0, sM.c)(this, vK)[vK]
      }
      get trapped() {
        return (0, sM.c)(this, hK)[hK]
      }
      get loading() {
        return null !== (0, sM.c)(this, SK)[SK]
      }
      prefetch() {
        (0, sM.c)(this, NK)[NK] || (0, sM.c)(this, hK)[hK] || (0, sM.c)(this, vK)[vK] || (0, sM.c)(this, SK)[SK] || this.deps.prefetch()
      }
      viewDrawn() {
        (0, sM.c)(this, aK)[aK] = !0, (0, sM.c)(this, eK)[eK]() && (0, sM.c)(this, VK)[VK]()
      }
      prefs(TT, kT) {
        (0, sM.c)(this, FK)[FK] = {
          on: TT,
          seconds: kT
        }, (0, sM.c)(this, UK)[UK](CT.Jc.Prefs, yK(TT, kT)), TT && (0, sM.c)(this, aK)[aK] && (0, sM.c)(this, VK)[VK]()
      }
      control(TT) {
        const kT = function(TT) {
          return new Uint8Array([TT, 0, 0, 0])
        }(TT);
        if (CK.has(TT)) return (0, sM.c)(this, vK)[vK] ? void(0, sM.c)(this, UK)[UK](CT.Jc.Control, kT) : ((0, sM.c)(this, PK)[PK] = kT, void(0, sM.c)(this, VK)[VK]());
        (0, sM.c)(this, NK)[NK] || this.deps.coreCommand(CT.Jc.Control, kT)
      }
      session(TT) {
        (0, sM.c)(this, rK)[rK] = TT, (0, sM.c)(this, oK)[oK](TT)
      }
      filePartDone(TT, kT) {
        (0, sM.c)(this, UK)[UK](CT.Jc.FilePartDone, function(TT, kT) {
          const cT = new Uint8Array(8),
            lT = new DataView(cT.buffer);
          return lT.setUint32(0, TT, !0), lT.setUint32(4, kT, !0), cT
        }(TT, kT))
      }
      fileDone(TT) {
        return (0, sM.c)(this, UK)[UK](CT.Jc.FileDone, function(TT) {
          const kT = new Uint8Array(4);
          return new DataView(kT.buffer).setUint32(0, TT, !0), kT
        }(TT)), (0, sM.c)(this, uK)[uK]()
      }
      saveEdited(TT) {
        return (0, sM.c)(this, HK)[HK]("saveEdited"), (0, sM.c)(this, JK)[JK].start(TT)
      }
      afterFrame() {
        if (!(0, sM.c)(this, vK)[vK]) return;
        "read" === (0, sM.c)(this, JK)[JK].beforeRecorderStep() && (0, sM.c)(this, uK)[uK]();
        const TT = (0, sM.c)(this, QK)[QK];
        (0, sM.c)(this, QK)[QK] = null;
        const kT = (0, sM.c)(this, vK)[vK],
          cT = (0, sM.c)(this, tK)[tK];
        if (!kT || !cT) return void(null === TT || void 0 === TT || TT.resolve((0, sM.c)(this, hK)[hK] ? "trapped" : "wj"));
        const {
          core: lT
        } = this.deps, MT = lT.kMT(2);
        let KT, OT, yT, fT, xT = 0,
          IT = 0;
        if (0 !== MT) {
          var AT, CT;
          const TT = (0, sM.c)(this, nK)[nK]();
          xT = null !== (AT = TT[MT >>> 2]) && void 0 !== AT ? AT : 0, IT = null !== (CT = TT[1 + (MT >>> 2)]) && void 0 !== CT ? CT : 0
        }
        try {
          if (IT > 0) {
            const TT = kT.feed(IT);
            0 !== TT && (0, sM.c)(this, pK)[pK](cT).set((0, sM.c)(this, WK)[WK]().subarray(xT, xT + IT), TT)
          }
          KT = kT.step(), OT = kT.cMT(), yT = kT.lMT(), fT = kT.MMT()
        } catch (jT) {
          if (!(0, sM.c)(this, TO)[TO](jT)) throw null === TT || void 0 === TT || TT.resolve("wj"), jT;
          return void(null === TT || void 0 === TT || TT.resolve("trapped"))
        }
        if (KT > 0) {
          const TT = lT.KMT(2, KT);
          0 !== TT && (0, sM.c)(this, WK)[WK]().set((0, sM.c)(this, pK)[pK](cT).subarray(OT, OT + KT), TT)
        }
        if (yT > 0) {
          (0, sM.c)(this, wK)[wK] = [];
          try {
            this.deps.events(new Uint8Array(cT.buffer, fT, yT), cT)
          } catch (jT) {
            throw null === TT || void 0 === TT || TT.resolve("wj"), jT
          } finally {
            const TT = (0, sM.c)(this, wK)[wK];
            (0, sM.c)(this, wK)[wK] = null;
            for (const [kT, cT] of TT)(0, sM.c)(this, UK)[UK](kT, cT)
          }
        }
        if (!(0, sM.c)(this, eK)[eK]() && !(0, sM.c)(this, GK)[GK]()) return (0, sM.c)(this, YK)[YK](), void(null === TT || void 0 === TT || TT.resolve("wj"));
        null === TT || void 0 === TT || TT.resolve((0, sM.c)(this, gK)[gK]())
      }
      dispose() {
        (0, sM.c)(this, NK)[NK] = !0, (0, sM.c)(this, YK)[YK]()
      }
    }

    function cO(TT) {
      (0, sM.c)(this, UK)[UK](CT.Jc.Session, function(TT) {
        const kT = new TextEncoder,
          cT = kT.encode(TT.game).subarray(0, 65535),
          lT = kT.encode(TT.lobby).subarray(0, 65535),
          MT = new Uint8Array(22 + cT.length + 2 + lT.length),
          KT = new DataView(MT.buffer);
        KT.setFloat64(0, TT.unixMs, !0), KT.setBigUint64(8, BigInt.asUintN(64, TT.session), !0), KT.setUint8(16, TT.lobbyType);
        let OT = 20;
        for (const yT of [cT, lT]) KT.setUint16(OT, yT.length, !0), MT.set(yT, OT + 2), OT += 2 + yT.length;
        return MT
      }({
        ...TT,
        unixMs: this.deps.unixNow()
      }))
    }

    function lO(TT) {
      false
    }

    function MO() {
      var TT, kT;
      return null !== (TT = null === (kT = (0, sM.c)(this, FK)[FK]) || void 0 === kT ? void 0 : kT.on) && void 0 !== TT && TT
    }

    function KO() {
      const TT = (0, sM.c)(this, vK)[vK];
      let kT = !0;
      if (TT) try {
        kT = TT.busy()
      } catch (cT) {
        if (!(0, sM.c)(this, TO)[TO](cT)) throw cT
      }
      return kT || (0, sM.c)(this, JK)[JK].active
    }
    async function OO() {
      !(0, sM.c)(this, NK)[NK] && this.deps.allowed() ? await (0, sM.c)(this, EK)[EK]() : (0, sM.c)(this, PK)[PK] = null
    }

    function yO() {
      return (0, sM.c)(this, hK)[hK] || (0, sM.c)(this, NK)[NK] ? Promise.resolve(!1) : (0, sM.c)(this, vK)[vK] ? Promise.resolve(!0) : ((0, sM.c)(this, SK)[SK] ??= (0, sM.c)(this, ZK)[ZK](), (0, sM.c)(this, SK)[SK])
    }
    async function fO() {
      let TT = !1;
      try {
        return TT = await (0, sM.c)(this, dK)[dK](), TT
      } finally {
        TT || ((0, sM.c)(this, PK)[PK] = null), (0, sM.c)(this, SK)[SK] = null
      }
    }

    function xO() {
      if (!(0, sM.c)(this, vK)[vK]) return Promise.resolve((0, sM.c)(this, hK)[hK] ? "trapped" : "wj");
      if (!(0, sM.c)(this, QK)[QK]) {
        let TT = () => {};
        const kT = new Promise((kT => {
          TT = kT
        }));
        (0, sM.c)(this, QK)[QK] = {
          promise: kT,
          resolve: TT
        }
      }
      return (0, sM.c)(this, QK)[QK].promise
    }

    function IO(TT) {
      const kT = (0, sM.c)(this, QK)[QK];
      (0, sM.c)(this, QK)[QK] = null, null === kT || void 0 === kT || kT.resolve(TT)
    }
    async function AO() {
      let TT = (0, sM.c)(this, jK)[jK];
      if (!TT) {
        const kT = (0, sM.c)(this, DK)[DK];
        try {
          TT = await this.deps.load()
        } catch (cT) {
          return kT === (0, sM.c)(this, DK)[DK] && await (0, sM.c)(this, iK)[iK](cT), !1
        }
        if (kT !== (0, sM.c)(this, DK)[DK]) return this.deps.unload(), !1;
        const lT = TT,
          MT = (0, sM.c)(this, sK)[sK]((() => lT.OMT()));
        if (void 0 === MT) return !1;
        const KT = this.deps.core.yMT();
        if (MT !== KT) return await (0, sM.c)(this, iK)[iK](new Error(`recorder port version ${MT}, the core's ${KT}`)), !1;
        (0, sM.c)(this, jK)[jK] = TT
      }
      const kT = TT;
      try {
        if (!(0, sM.c)(this, sK)[sK]((() => ((0, sM.c)(this, vK)[vK] = new kT.fMT, (0, sM.c)(this, tK)[tK] = kT.qlT(), !0)))) return !1;
        (0, sM.c)(this, RK)[RK]();
        const TT = (0, sM.c)(this, PK)[PK];
        return (0, sM.c)(this, PK)[PK] = null, TT && (0, sM.c)(this, UK)[UK](CT.Jc.Control, TT), (0, sM.c)(this, LK)[LK]()
      } catch (cT) {
        return (0, sM.c)(this, YK)[YK](), await (0, sM.c)(this, iK)[iK](cT), !1
      }
    }

    function CO() {
      return this.deps.core.xMT(0), 1 === this.deps.core.xMT(1) || ((0, sM.c)(this, YK)[YK](), this.deps.failed(AK), !1)
    }

    function jO() {
      (0, sM.c)(this, FK)[FK] && (0, sM.c)(this, UK)[UK](CT.Jc.Prefs, yK((0, sM.c)(this, FK)[FK].on, (0, sM.c)(this, FK)[FK].seconds)), (0, sM.c)(this, rK)[rK] && (0, sM.c)(this, oK)[oK]((0, sM.c)(this, rK)[rK])
    }

    function vO() {
      return IK({
        memoryBytes: this.deps.memoryBytes,
        clipSeconds: () => {
          var TT, kT;
          return null !== (TT = null === (kT = (0, sM.c)(this, FK)[FK]) || void 0 === kT ? void 0 : kT.seconds) && void 0 !== TT ? TT : 0
        },
        trapped: () => (0, sM.c)(this, hK)[hK],
        busy: () => (0, sM.c)(this, GK)[GK](),
        loadInFlight: () => (0, sM.c)(this, SK)[SK],
        yv: () => (0, sM.c)(this, NK)[NK],
        unload: () => {
          (0, sM.c)(this, YK)[YK]()
        },
        load: () => (0, sM.c)(this, EK)[EK]()
      })
    }

    function tO(TT, kT) {
      (0, sM.c)(this, wK)[wK] ? (0, sM.c)(this, wK)[wK].push([TT, kT]): (0, sM.c)(this, qK)[qK](((cT, lT) => {
        const MT = cT.slT(kT.length);
        0 !== MT && (new Uint8Array(lT.buffer, MT, kT.length).set(kT), cT.command(TT, kT.length))
      }))
    }

    function hO() {
      (0, sM.c)(this, DK)[DK]++, (0, sM.c)(this, XK)[XK]("wj"), (0, sM.c)(this, JK)[JK].stop(), this.deps.core.xMT(0), (0, sM.c)(this, BK)[BK](), (0, sM.c)(this, hK)[hK] || ((0, sM.c)(this, jK)[jK] = null, this.deps.unload())
    }

    function NO() {
      (0, sM.c)(this, qK)[qK]((TT => {
        TT.free()
      })), (0, sM.c)(this, vK)[vK] = null, (0, sM.c)(this, tK)[tK] = null, (0, sM.c)(this, zK)[zK] = null
    }

    function QO() {
      var TT;
      const kT = this.deps.coreBuffer();
      return (null === (TT = (0, sM.c)(this, mK)[mK]) || void 0 === TT ? void 0 : TT.buffer) !== kT && ((0, sM.c)(this, mK)[mK] = new Uint8Array(kT)), (0, sM.c)(this, mK)[mK]
    }

    function SO() {
      var TT;
      const kT = this.deps.coreBuffer();
      return (null === (TT = (0, sM.c)(this, bK)[bK]) || void 0 === TT ? void 0 : TT.buffer) !== kT && ((0, sM.c)(this, bK)[bK] = new Uint32Array(kT, 0, kT.byteLength >>> 2)), (0, sM.c)(this, bK)[bK]
    }

    function DO(TT) {
      var kT;
      const cT = TT.buffer;
      return (null === (kT = (0, sM.c)(this, zK)[zK]) || void 0 === kT ? void 0 : kT.buffer) !== cT && ((0, sM.c)(this, zK)[zK] = new Uint8Array(cT)), (0, sM.c)(this, zK)[zK]
    }
    async function aO(TT) {
      await this.deps.staleOr(TT, (() => {
        this.deps.failed(AK)
      }))
    }

    function FO(TT) {
      const kT = (0, sM.c)(this, vK)[vK],
        cT = (0, sM.c)(this, tK)[tK];
      if (kT && cT) return (0, sM.c)(this, sK)[sK]((() => TT(kT, cT)))
    }

    function rO(TT) {
      if (!(0, sM.c)(this, hK)[hK]) try {
        return TT()
      } catch (kT) {
        if (!(0, sM.c)(this, TO)[TO](kT)) throw kT;
        return
      }
    }

    function PO(TT) {
      return TT instanceof WebAssembly.RuntimeError && ((0, sM.c)(this, hK)[hK] = !0, (0, sM.c)(this, vK)[vK] = null, (0, sM.c)(this, tK)[tK] = null, (0, sM.c)(this, zK)[zK] = null, (0, sM.c)(this, jK)[jK] = null, (0, sM.c)(this, PK)[PK] = null, (0, sM.c)(this, XK)[XK]("trapped"), this.deps.core.xMT(0), (0, sM.c)(this, JK)[JK].stop(), this.deps.crash(this.deps.markTrapped(TT)), this.deps.failed("Replay recording stopped working, so reload the page to record replays again."), !0)
    }
    var wO = cT(38489);
    const mO = new Map([
      ["skyblock", () => cT.e(50).then((() => cT(38486)))]
    ]);

    function bO(TT) {
      const kT = mO.get(TT);
      return kT ? kT().then((() => {
        const kT = (0, wO.e)(TT);
        if (!kT) throw new Error(`${TT}'s replay hook module registered no hook`);
        return kT
      })) : null
    }
    class zO {
      constructor(TT) {
        this.deps = TT, this.game = null, this.hook = null, this.generation = 0, this.all = !1, this.pending = new Map, this.ids = new Int32Array(64)
      }
      get wantsWatch() {
        return null !== this.hook
      }
      opened(TT) {
        if (this.pending.clear(), TT === this.game && null !== this.hook) return void(this.all = !0);
        const kT = ++this.generation;
        this.game = TT, this.hook = null, this.all = !1;
        const cT = this.deps.loadHook(TT);
        null === cT || void 0 === cT || cT.then((TT => {
          kT === this.generation && (this.hook = TT, this.all = !0)
        }), (TT => {
          kT === this.generation && this.deps.onError(TT)
        }))
      }
      ended() {
        this.generation++, this.game = null, this.hook = null, this.all = !1, this.pending.clear()
      }
      entityAdded(TT) {
        null === this.hook || this.all || this.pending.set(TT, !0)
      }
      entityInfoChanged(TT) {
        null === this.hook || this.all || this.pending.has(TT) || this.pending.set(TT, !1)
      }
      flush(TT) {
        const {
          hook: kT
        } = this;
        if (null === kT || !TT || !this.all && 0 === this.pending.size) return;
        const cT = this.deps.cmd();
        if (null === cT) return;
        const {
          api: lT
        } = this.deps;
        if (this.all) {
          this.all = !1, this.pending.clear();
          const {
            ids: TT,
            count: kT
          } = Xc(lT, this.ids);
          this.ids = TT;
          for (let cT = 0; cT < kT; cT++) this.pending.set(TT[cT], !0)
        }
        const MT = this.ids = dc(this.ids, this.pending.size);
        let KT = 0;
        for (const xT of this.pending.keys()) MT[KT++] = xT;
        const OT = [],
          yT = Lc(lT, MT, KT, ((TT, kT) => {
            null !== kT && OT.push({
              serverId: TT,
              info: kT,
              spawned: !0 === this.pending.get(TT)
            })
          }));
        if (yT) {
          this.pending.clear();
          for (const {
              serverId: TT,
              info: lT,
              spawned: MT
            }
            of OT) try {
            kT(lT, {
              setFacingTolerance: kT => {
                null === kT && MT || fc(cT, TT, kT) || this.pending.set(TT, MT)
              }
            })
          } catch (fT) {
            this.deps.onError(fT)
          }
        }
      }
    }
    var JO = (0, TK.e)("bindings"),
      oO = (0, TK.e)("module"),
      HO = (0, TK.e)("memory"),
      eO = (0, TK.e)("trapped"),
      GO = (0, TK.e)("generation"),
      VO = (0, TK.e)("loading"),
      EO = (0, TK.e)("lend"),
      ZO = (0, TK.e)("givenUp"),
      uO = (0, TK.e)("afterSave"),
      XO = (0, TK.e)("opens"),
      dO = (0, TK.e)("saveAskedAt"),
      LO = (0, TK.e)("unload"),
      RO = (0, TK.e)("dropModule"),
      gO = (0, TK.e)("loadFailed"),
      UO = (0, TK.e)("saveReadsBody"),
      YO = (0, TK.e)("command"),
      BO = (0, TK.e)("call"),
      WO = (0, TK.e)("guard"),
      nO = (0, TK.e)("trapOn");
    class pO {
      constructor(TT) {
        this.deps = TT, Object.defineProperty(this, nO, {
          value: My
        }), Object.defineProperty(this, WO, {
          value: ly
        }), Object.defineProperty(this, BO, {
          value: cy
        }), Object.defineProperty(this, YO, {
          value: ky
        }), Object.defineProperty(this, UO, {
          get: Ty,
          set: void 0
        }), Object.defineProperty(this, gO, {
          value: sO
        }), Object.defineProperty(this, RO, {
          value: qO
        }), Object.defineProperty(this, LO, {
          value: iO
        }), Object.defineProperty(this, JO, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, oO, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, HO, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, eO, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, GO, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, VO, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, EO, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ZO, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, uO, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, XO, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, dO, {
          writable: !0,
          value: null
        })
      }
      get active() {
        return null !== (0, sM.c)(this, oO)[oO] && null === (0, sM.c)(this, uO)[uO]
      }
      async open(TT) {
        if ((0, sM.c)(this, eO)[eO]) return CT.$c.ModuleTrap;
        let kT = (0, sM.c)(this, JO)[JO];
        if (!kT) {
          const TT = (0, sM.c)(this, GO)[GO];
          (0, sM.c)(this, VO)[VO]++;
          try {
            kT = await this.deps.load()
          } catch (lT) {
            return (0, sM.c)(this, VO)[VO]--, TT !== (0, sM.c)(this, GO)[GO] ? "stopped" : (0, sM.c)(this, gO)[gO](lT)
          }
          if ((0, sM.c)(this, VO)[VO]--, TT !== (0, sM.c)(this, GO)[GO]) return (0, sM.c)(this, JO)[JO] || 0 !== (0, sM.c)(this, VO)[VO] || (0, sM.c)(this, eO)[eO] || this.deps.unload(), "stopped";
          if ((0, sM.c)(this, eO)[eO]) return CT.$c.ModuleTrap;
          const cT = kT.OMT(),
            MT = this.deps.core.yMT();
          if (cT !== MT) return (0, sM.c)(this, gO)[gO](new Error(`replay port version ${cT}, the core's ${MT}`));
          (0, sM.c)(this, JO)[JO] = kT
        }
        if (!(0, sM.c)(this, oO)[oO]) {
          const TT = kT;
          if (!(0, sM.c)(this, WO)[WO]((() => {
              (0, sM.c)(this, oO)[oO] = new TT.IMT, (0, sM.c)(this, HO)[HO] = TT.CMT()
            }))) return CT.$c.ModuleTrap
        }
        let cT = !1;
        return (0, sM.c)(this, BO)[BO](((kT, lT) => {
          null !== (0, sM.c)(this, uO)[uO] && kT.step(0, 0);
          const MT = kT.stage(TT.length);
          0 !== MT && (new Uint8Array(lT.buffer, MT, TT.length).set(TT), kT.open(), (0, sM.c)(this, ZO)[ZO] = (0, sM.c)(this, EO)[EO], (0, sM.c)(this, uO)[uO] = null, (0, sM.c)(this, XO)[XO]++, cT = !0)
        })) ? cT ? "opening" : CT.$c.TooLarge : CT.$c.ModuleTrap
      }
      beforeFrame(TT) {
        const kT = (0, sM.c)(this, oO)[oO],
          cT = (0, sM.c)(this, HO)[HO];
        if (!kT || !cT || null !== (0, sM.c)(this, uO)[uO]) return;
        const {
          core: lT
        } = this.deps, MT = lT.jMT(TT);
        if (MT < 0) return;
        const KT = Math.floor(MT);
        let OT, yT;
        try {
          OT = kT.step(KT, MT - KT), yT = kT.cMT()
        } catch (xT) {
          return void(0, sM.c)(this, nO)[nO](xT)
        }
        const fT = lT.KMT(1, OT);
        if (0 === fT) {
          const TT = (0, sM.c)(this, BO)[BO]((TT => {
            TT.close()
          }));
          if (!TT) return;
          return (0, sM.c)(this, UO)[UO] ? (0, sM.c)(this, uO)[uO] = "drop" : (0, sM.c)(this, RO)[RO](), void lT.vMT(CT.$c.Port)
        }
        new Uint8Array(this.deps.coreBuffer(), fT, OT).set(new Uint8Array(cT.buffer, yT, OT))
      }
      play() {
        (0, sM.c)(this, YO)[YO]((TT => {
          TT.play()
        }))
      }
      pause() {
        (0, sM.c)(this, YO)[YO]((TT => {
          TT.pause()
        }))
      }
      seek(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, sM.c)(this, YO)[YO]((cT => {
          cT.seek(TT, kT)
        }))
      }
      setMark(TT, kT) {
        return (0, sM.c)(this, YO)[YO]((cT => {
          cT.tMT(TT, kT)
        }))
      }
      addKeyframe(TT, kT) {
        return (0, sM.c)(this, YO)[YO]((cT => {
          cT.hMT(TT[0], TT[1], TT[2], kT[0], kT[1], kT[2])
        }))
      }
      setKeyframe(TT, kT) {
        return (0, sM.c)(this, YO)[YO]((cT => {
          cT.NMT(TT, kT)
        }))
      }
      moveKeyframe(TT, kT) {
        return (0, sM.c)(this, YO)[YO]((cT => {
          cT.QMT(TT, kT)
        }))
      }
      deleteKeyframes(TT, kT) {
        return (0, sM.c)(this, YO)[YO]((cT => {
          cT.SMT(TT, kT)
        }))
      }
      crop(TT, kT) {
        return null === (0, sM.c)(this, EO)[EO] && (0, sM.c)(this, YO)[YO]((cT => {
          cT.crop(TT, kT)
        }))
      }
      beginSave() {
        const TT = (0, sM.c)(this, dO)[dO];
        if ((0, sM.c)(this, dO)[dO] = null, null !== TT && TT !== (0, sM.c)(this, XO)[XO]) return null;
        let kT = 0,
          cT = null;
        if ((0, sM.c)(this, BO)[BO](((TT, lT) => {
            kT = TT.save(), 0 !== kT && (cT = new Uint8Array(lT.buffer, TT.DMT(), TT.aMT()).slice())
          })), 0 === kT || !cT) return null;
        const lT = {
          headLen: kT,
          editState: cT,
          givenUp: () => (0, sM.c)(this, ZO)[ZO] === lT,
          head: (TT, kT) => {
            if ((0, sM.c)(this, EO)[EO] !== lT || !(0, sM.c)(this, UO)[UO]) return null;
            let cT = null;
            return (0, sM.c)(this, BO)[BO](((lT, MT) => {
              const KT = lT.FMT();
              0 !== KT && TT >= 0 && kT >= 0 && TT + kT <= KT && (cT = new Uint8Array(MT.buffer, lT.rMT() + TT, kT))
            })), cT
          },
          end: () => {
            if ((0, sM.c)(this, EO)[EO] !== lT) return;
            (0, sM.c)(this, EO)[EO] = null, (0, sM.c)(this, ZO)[ZO] = null, (0, sM.c)(this, BO)[BO]((TT => {
              TT.PMT()
            }));
            const TT = (0, sM.c)(this, uO)[uO];
            (0, sM.c)(this, uO)[uO] = null, "unload" === TT ? (0, sM.c)(this, LO)[LO]() : "drop" === TT && (0, sM.c)(this, RO)[RO]()
          }
        };
        return (0, sM.c)(this, EO)[EO] = lT, lT
      }
      askSave() {
        (0, sM.c)(this, dO)[dO] = (0, sM.c)(this, XO)[XO]
      }
      setSpeed(TT) {
        (0, sM.c)(this, YO)[YO]((kT => {
          kT.wMT(TT)
        }))
      }
      setCameraMode(TT) {
        (0, sM.c)(this, YO)[YO]((kT => {
          kT.mMT(TT)
        }))
      }
      close() {
        (0, sM.c)(this, YO)[YO]((TT => {
          TT.close()
        }))
      }
      stop() {
        (0, sM.c)(this, GO)[GO]++, (0, sM.c)(this, UO)[UO] && ((0, sM.c)(this, BO)[BO]((TT => {
          TT.close()
        })), (0, sM.c)(this, oO)[oO]) ? (0, sM.c)(this, uO)[uO] = "unload" : (0, sM.c)(this, LO)[LO]()
      }
    }

    function iO() {
      (0, sM.c)(this, RO)[RO](), (0, sM.c)(this, eO)[eO] || ((0, sM.c)(this, JO)[JO] = null, this.deps.unload())
    }

    function qO() {
      (0, sM.c)(this, BO)[BO]((TT => {
        TT.free()
      })), (0, sM.c)(this, oO)[oO] = null, (0, sM.c)(this, HO)[HO] = null
    }
    async function sO(TT) {
      return await this.deps.staleOr(TT, (() => {})) ? "reloading" : CT.$c.ModuleLoad
    }

    function Ty() {
      return null !== (0, sM.c)(this, EO)[EO] && (0, sM.c)(this, ZO)[ZO] !== (0, sM.c)(this, EO)[EO]
    }

    function ky(TT) {
      return null === (0, sM.c)(this, uO)[uO] && (0, sM.c)(this, BO)[BO](TT)
    }

    function cy(TT) {
      const kT = (0, sM.c)(this, oO)[oO],
        cT = (0, sM.c)(this, HO)[HO];
      return !(!kT || !cT) && (0, sM.c)(this, WO)[WO]((() => {
        TT(kT, cT)
      }))
    }

    function ly(TT) {
      if ((0, sM.c)(this, eO)[eO]) return !1;
      try {
        return TT(), !0
      } catch (kT) {
        return (0, sM.c)(this, nO)[nO](kT), !1
      }
    }

    function My(TT) {
      if (!(TT instanceof WebAssembly.RuntimeError)) throw TT;
      (0, sM.c)(this, eO)[eO] = !0, (0, sM.c)(this, oO)[oO] = null, (0, sM.c)(this, HO)[HO] = null, (0, sM.c)(this, JO)[JO] = null, this.deps.crash(this.deps.markTrapped(TT)), this.deps.core.vMT(CT.$c.ModuleTrap)
    }
    var Ky = cT(6492),
      Oy = cT(40356);
    const yy = "[bloxd-wasm-client]";
    const fy = String(oM);

    function xy(TT) {
      return null === TT || TT === fy ? void 0 : TT
    }

    function Iy(TT) {
      var kT, cT, lT, MT, KT, yT, fT;
      switch (TT.what) {
        case CT.id.FlyingText: {
          let kT;
          try {
            kT = JSON.parse(TT.contentJson)
          } catch (xT) {
            return void console.warn(`${yy} a replay's flying text isn't JSON`, xT)
          }
          OT.k.nt("forceFlyingMiddleMessage", {
            content: kT,
            jc: TT.jc,
            angle: TT.angle,
            vc: TT.vc
          });
          break
        }
        case CT.id.PlayerKilled:
          (0, Oy.h)({
            kind: "killed",
            body: {
              deadEId: null !== (kT = xy(TT.dead)) && void 0 !== kT ? kT : "",
              killerEId: xy(TT.killer),
              withItem: null !== (cT = TT.withItem) && void 0 !== cT ? cT : "",
              killstreak: TT.killstreak
            }
          });
          break;
        case CT.id.Killfeed:
          (0, Oy.h)({
            kind: "custom",
            body: {
              killer: {
                eId: xy(TT.killerId),
                name: null !== (lT = TT.killerName) && void 0 !== lT ? lT : void 0,
                colour: null !== (MT = TT.killerColour) && void 0 !== MT ? MT : void 0
              },
              victim: {
                eId: xy(TT.victimId),
                name: null !== (KT = TT.victimName) && void 0 !== KT ? KT : void 0,
                colour: null !== (yT = TT.victimColour) && void 0 !== yT ? yT : void 0
              },
              withItem: null !== (fT = TT.withItem) && void 0 !== fT ? fT : ""
            }
          })
      }
    }
    const Ay = "[bloxd-wasm-client]";

    function Cy(TT) {
      if (void 0 === TT || null === TT || "" === TT) return null;
      const kT = Number(TT);
      return Number.isInteger(kT) && kT > oM && kT <= 2147483647 ? kT : null
    }

    function jy(TT) {
      return {
        id: Cy(TT.eId),
        name: "string" === typeof TT.name ? TT.name : null,
        colour: "string" === typeof TT.colour ? TT.colour : null
      }
    }

    function vy(TT) {
      const kT = (0, LM.m)(Wc.Xb.PlayerKilled, (kT => {
          var cT, lT;
          const MT = (0, dM.g)(kT);
          if (!(0, dM.b)(MT)) return;
          const {
            deadEId: KT,
            killerEId: OT,
            withItem: yT,
            killstreak: fT
          } = MT;
          TT.recordPlayerKilled(null !== (cT = Cy(KT)) && void 0 !== cT ? cT : oM, null !== (lT = Cy(OT)) && void 0 !== lT ? lT : oM, "number" === typeof fT ? fT : 0, "string" === typeof yT ? yT : "")
        })),
        cT = (0, LM.m)(Wc.Xb.CustomKillfeed, (kT => {
          const cT = (0, dM.g)(kT);
          if (!(0, dM.b)(cT) || !(0, dM.b)(cT.killer) || !(0, dM.b)(cT.victim)) return;
          const {
            killer: lT,
            victim: MT,
            withItem: KT
          } = cT;
          TT.recordKillfeed(jy(lT), jy(MT), "string" === typeof KT ? KT : null)
        }));
      return () => {
        kT(), cT()
      }
    }

    function ty(TT) {
      var kT;
      return void 0 === TT || null === TT ? null : null !== (kT = JSON.stringify(TT)) && void 0 !== kT ? kT : null
    }

    function hy(TT) {
      let kT = null;
      const cT = () => {
        const {
          enableClipping: cT,
          clipDurationSeconds: MT
        } = lT.e.get("clientEscMenuOptions"), KT = `${cT}:${MT}`;
        KT !== kT && (kT = KT, TT.recorder.setPrefs(cT, MT))
      };
      return cT(), (0, OT.m)("appManagerUpdated|clientEscMenuOptions", cT)
    }
    const Ny = "replayModule",
      Qy = "recorderModule";

    function Sy(TT, kT, cT) {
      return function() {
        return TT.isStopped ? cT : kT(...arguments)
      }
    }
    const Dy = {
      open: () => Promise.reject(new Error(aM.d.coreStopped.text)),
      replayKey: () => null,
      encode: () => Promise.resolve(null),
      fileHandle: () => null,
      markSaved: () => {}
    };

    function ay() {
      return cT.e(62).then((() => cT(60858)))
    }

    function Fy(TT) {
      (0, aM.e)({
        text: TT,
        type: "Error"
      })
    }
    class ry {
      constructor(TT) {
        this.deps = TT, this.runtime = void 0, this.entityHooks = void 0, this.recordedOptions = void 0, this.stops = void 0, this.activeConn = 0, this.stopped = !1, this.bench = null, this.replay = void 0, this.recorder = void 0, this.freecam = void 0, this.drawn = !1;
        const {
          running: kT,
          api: lT,
          core: MT
        } = TT, KT = () => TT.memory().buffer, OT = () => kT.isStopped ? null : kT.rings.cmd, yT = Sy(kT, ((TT, kT) => MT.KMT(TT, kT)), 0), fT = () => MT.yMT();
        let xT = null;
        this.replay = new pO({
          core: {
            jMT: Sy(kT, (TT => MT.jMT(TT)), -1),
            KMT: yT,
            yMT: fT,
            vMT: Sy(kT, (TT => {
              MT.vMT(TT)
            }), void 0)
          },
          coreBuffer: KT,
          load: async () => (xT = await cT.e(63).then((() => cT(60871))), xT.loadReplayModule()),
          unload: () => {
            var TT;
            null === (TT = xT) || void 0 === TT || TT.unloadReplayModule()
          },
          markTrapped: TT => xT ? xT.markReplayTrapped(TT) : new Error(String(TT)),
          staleOr: (kT, cT) => TT.staleOr(Ny, kT, cT),
          crash: kT => {
            TT.reportFault(Ny, kT)
          }
        });
        let IT = null;
        this.recorder = new kO({
          core: {
            xMT: Sy(kT, (TT => MT.xMT(TT)), 0),
            kMT: Sy(kT, (TT => MT.kMT(TT)), 0),
            KMT: yT,
            yMT: fT
          },
          coreCommand: (TT, kT) => {
            var cT, lT;
            return null !== (cT = null === (lT = OT()) || void 0 === lT ? void 0 : lT.writeCmd(TT, 0, kT)) && void 0 !== cT && cT
          },
          coreBuffer: KT,
          load: async () => (IT = await ay(), IT.loadRecorderModule()),
          prefetch: () => {
            ay().then((TT => TT.prefetchRecorderModule())).catch((TT => {
              console.warn(`${Ay} the recorder module didn't prefetch, so a save loads it:`, TT)
            }))
          },
          unload: () => {
            var TT;
            null === (TT = IT) || void 0 === TT || TT.unloadRecorderModule()
          },
          markTrapped: TT => IT ? IT.markRecorderTrapped(TT) : new Error(String(TT)),
          memoryBytes: () => {
            var TT, kT;
            return null !== (TT = null === (kT = IT) || void 0 === kT ? void 0 : kT.recorderMemoryBytes()) && void 0 !== TT ? TT : 0
          },
          staleOr: (kT, cT) => TT.staleOr(Qy, kT, cT),
          crash: kT => {
            TT.reportFault(Qy, kT)
          },
          allowed: () => !0 === TT.options.get("canRecordReplays"),
          failed: Fy,
          events: (TT, kT) => {
            this.runtime.recorderEvents(TT, kT)
          },
          beginSave: () => this.replay.beginSave(),
          givenUp: Fy,
          unixNow: () => Date.now()
        });
        const AT = new JM({
          core: {
            UlT: Sy(kT, (TT => MT.UlT(TT)), 0),
            BlT: Sy(kT, (() => {
              MT.BlT()
            }), void 0),
            Vh: Sy(kT, (() => MT.Vh()), 0),
            YlT: Sy(kT, (() => MT.YlT()), 0)
          },
          buffer: KT,
          apiView: () => lT.apiView,
          cmd: OT,
          replay: this.replay,
          recorder: this.recorder
        });
        this.entityHooks = new zO({
          api: lT,
          cmd: OT,
          loadHook: bO,
          onError: TT => {
            console.warn(`${Ay} the recorded game's replay hooks:`, TT)
          }
        });
        const CT = new XM({
          client: AT,
          buffer: KT,
          setHoldDraws: TT => {
            kT.setHoldDraws(TT)
          },
          notify: aM.e,
          onRecorderState: () => {
            var TT;
            null === (TT = (0, rM.f)()) || void 0 === TT || TT.recorderChanged()
          },
          onViewerChange: () => {
            var TT;
            null === (TT = (0, rM.f)()) || void 0 === TT || TT.viewerChanged()
          },
          onReplayOption: kT => {
            ! function(TT, kT) {
              var cT, lT;
              const MT = Wc.ab[kT.key];
              if (void 0 === MT) return;
              let KT = null !== (cT = kT.value) && void 0 !== cT ? cT : JSON.parse(JSON.stringify(null !== (lT = Ky.b[MT]) && void 0 !== lT ? lT : null));
              if (null !== kT.value && kT.key < Wc.Fb.Environment && "string" === typeof KT) try {
                KT = JSON.parse(KT)
              } catch (OT) {
                return void console.warn(`${yy} a replay's ${MT} isn't JSON`, OT)
              }
              TT.applyNewClientOptions({
                [MT]: KT
              })
            }(TT.options, kT)
          },
          onReplayUiEvent: Iy,
          onReplayOpened: kT => {
            this.entityHooks.opened((0, mT.Lb)(kT)), TT.replayShaderPack(kT)
          },
          meshPending: () => {
            var TT, cT;
            return null !== (TT = null === (cT = kT.lastHeader) || void 0 === cT ? void 0 : cT.renderPending) && void 0 !== TT ? TT : 0
          },
          viewerOpen: FM.b,
          download: TT => {
            (0, SM.j)(TT)
          }
        });
        this.runtime = CT, lT.replay = CT.sink, (0, rM.o)(CT);
        const jT = new UM({
          live: () => {
            var TT;
            return !kT.isStopped && !0 === (null === (TT = CT.currentViewer) || void 0 === TT ? void 0 : TT.inPlayback)
          },
          cmd: OT,
          dragScale: iM
        });
        this.freecam = jT, (0, rM.m)(jT), this.recordedOptions = function(TT, kT) {
          const cT = Wc.ab,
            lT = cT.map(((cT, lT) => kT.subscribe(cT, (kT => {
              TT.setOption(lT, ty(kT))
            }))));
          return {
            sendAll() {
              cT.forEach(((cT, lT) => {
                TT.setOption(lT, ty(kT.get(cT)))
              }))
            },
            stop() {
              for (const TT of lT) TT()
            }
          }
        }(CT.recorder, TT.options), this.stops = [(0, Ml.j)((TT => {
          jT.flush();
          try {
            this.replay.beforeFrame(TT)
          } catch (kT) {
            this.deps.reportFault("replayFrame", kT)
          }
        })), (0, Ml.u)(((TT, kT) => {
          try {
            this.recorder.afterFrame(), kT && !this.drawn && (this.drawn = !0, this.recorder.viewDrawn())
          } catch (cT) {
            this.deps.reportFault("recorderFrame", cT)
          }
          try {
            CT.afterFrame(TT)
          } catch (cT) {
            this.deps.reportFault("replayRuntime", cT)
          }
        })), hy(CT), () => {
          this.recordedOptions.stop()
        }, vy(CT.recorder), (0, RM.h)((TT => {
          let {
            action: kT,
            down: cT
          } = TT;
          var lT;
          cT && (null === (lT = (0, rM.f)()) || void 0 === lT || lT.keyDown(kT))
        }))];
        const vT = () => {
          const TT = CT.currentViewer;
          return !0 === (null === TT || void 0 === TT ? void 0 : TT.isOpen) ? TT : null
        };
        (0, DM.e)({
          open: (TT, kT) => this.open(TT, kT),
          replayKey: () => {
            var TT, kT;
            return null !== (TT = null === (kT = vT()) || void 0 === kT ? void 0 : kT.id) && void 0 !== TT ? TT : null
          },
          saveRefusal: () => {
            var TT, kT;
            return null !== (TT = null === (kT = vT()) || void 0 === kT ? void 0 : kT.saveRefusal) && void 0 !== TT ? TT : null
          },
          encode: () => {
            var TT, kT;
            return null !== (TT = null === (kT = vT()) || void 0 === kT ? void 0 : kT.save()) && void 0 !== TT ? TT : Promise.resolve(null)
          },
          fileHandle: () => {
            var TT, kT;
            return null !== (TT = null === (kT = CT.currentViewer) || void 0 === kT ? void 0 : kT.fileHandle) && void 0 !== TT ? TT : null
          },
          markSaved: (TT, kT) => {
            var cT;
            null === (cT = CT.currentViewer) || void 0 === cT || cT.markSaved(TT, kT)
          }
        })
      }
      netEvent(TT) {
        if ("connection" === TT.type)
          if (TT.phase === CT.x.Activated) {
            this.activeConn = TT.conn;
            const kT = this.deps.sessionInfo(TT.conn);
            null !== kT && (this.runtime.activated({
              lobbyType: (0, bT.u)(kT.lobbyName),
              gameNameWithVariation: kT.gameNameWithVariation,
              lobbyName: kT.lobbyName
            }), this.recordedOptions.sendAll())
          } else TT.phase !== CT.x.Left && TT.phase !== CT.x.Closed || TT.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
      }
      stop() {
        if (!this.stopped) {
          this.stopped = !0;
          for (const TT of this.stops) TT();
          this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, rM.h)() === this.runtime && (0, rM.o)(null), (0, rM.g)() === this.freecam && (0, rM.m)(null), (0, DM.e)(Dy), null !== this.bench && window.wasmReplayBench === this.bench && (window.wasmReplayBench = void 0)
        }
      }
      async open(TT, kT) {
        const {
          running: cT
        } = this.deps;
        if (cT.isStopped) throw new Error(aM.d.coreStopped.text);
        if (TT.byteLength > 67108864) throw new Error(aM.d.cantOpen.text);
        let lT;
        try {
          lT = await async function(TT) {
            const kT = await TT.loadViewer();
            return kT.inPlayback || (0, Ml.G)().leaveGame(null), kT
          }(this.runtime)
        } catch (MT) {
          throw console.warn(`${Ay} the replay viewer didn't load`, MT), new Error(aM.d.viewerLoadFailed.text)
        }
        if (cT.isStopped) throw new Error(aM.d.coreStopped.text);
        await lT.open(TT, kT)
      }
    }
    var Py = cT(1974);

    function wy(TT, kT) {
      const {
        aux: cT,
        payload: lT
      } = function(TT) {
        return {
          aux: TT.reset ? CT.Xb.ResetFirst : 0,
          payload: by(TT.changes)
        }
      }(kT);
      TT.queueOptions(cT, lT) && (kT.reset && Py.b.reset(), Py.b.apply(kT.changes))
    }
    const my = new TextEncoder;

    function by(TT) {
      const kT = new zy;
      return oy(kT, TT), kT.bytes()
    }
    class zy {
      constructor() {
        this.buf = new Uint8Array(256), this.view = new DataView(this.buf.buffer), this.len = 0
      }
      room(TT) {
        if (this.len + TT <= this.buf.length) return;
        const kT = new Uint8Array(Math.max(2 * this.buf.length, this.len + TT));
        kT.set(this.buf.subarray(0, this.len)), this.buf = kT, this.view = new DataView(kT.buffer)
      }
      u8(TT) {
        this.room(1), this.buf[this.len++] = TT
      }
      tagged(TT, kT, cT) {
        this.room(1 + kT), this.buf[this.len++] = TT, 1 === kT ? this.view.setUint8(this.len, cT) : 2 === kT ? this.view.setUint16(this.len, cT) : this.view.setUint32(this.len, cT), this.len += kT
      }
      signed(TT, kT, cT) {
        this.room(1 + kT), this.buf[this.len++] = TT, 1 === kT ? this.view.setInt8(this.len, cT) : 2 === kT ? this.view.setInt16(this.len, cT) : this.view.setInt32(this.len, cT), this.len += kT
      }
      f64(TT) {
        this.room(9), this.buf[this.len++] = 203, this.view.setFloat64(this.len, TT), this.len += 8
      }
      raw(TT) {
        this.room(TT.length), this.buf.set(TT, this.len), this.len += TT.length
      }
      bytes() {
        return this.buf.slice(0, this.len)
      }
    }

    function Jy(TT, kT, cT, lT, MT, KT, OT) {
      kT < lT ? TT.u8(cT | kT) : null !== MT && kT < 256 ? TT.tagged(MT, 1, kT) : kT < 65536 ? TT.tagged(KT, 2, kT) : TT.tagged(OT, 4, kT)
    }

    function oy(TT, kT) {
      switch (typeof kT) {
        case "undefined":
          return void TT.raw(Hy);
        case "boolean":
          return void TT.u8(kT ? 195 : 194);
        case "number":
          return void
          function(TT, kT) {
            kT >>> 0 === kT ? kT < 128 ? TT.u8(kT) : kT < 256 ? TT.tagged(204, 1, kT) : kT < 65536 ? TT.tagged(205, 2, kT) : TT.tagged(206, 4, kT) : (kT | 0) === kT ? kT >= -32 ? TT.u8(255 & kT) : kT >= -128 ? TT.signed(208, 1, kT) : kT >= -32768 ? TT.signed(209, 2, kT) : TT.signed(210, 4, kT) : TT.f64(kT)
          }(TT, kT);
        case "string": {
          const cT = my.encode(kT);
          return Jy(TT, cT.length, 160, 32, 217, 218, 219), void TT.raw(cT)
        }
        case "object":
          break;
        default:
          return void TT.u8(192)
      }
      if (null === kT) TT.u8(192);
      else if (Array.isArray(kT)) {
        Jy(TT, kT.length, 144, 16, null, 220, 221);
        for (const cT of kT) oy(TT, cT)
      } else if (kT instanceof Uint8Array) Jy(TT, kT.length, 0, 0, 196, 197, 198), TT.raw(kT);
      else {
        const cT = Object.keys(kT);
        Jy(TT, cT.length, 128, 0, null, 222, 223);
        for (const lT of cT) oy(TT, lT), oy(TT, kT[lT])
      }
    }
    const Hy = new Uint8Array([212, 0, 0]);
    var ey = cT(42133),
      Gy = cT(42135),
      Vy = cT(40644),
      Ey = cT(40669),
      Zy = cT(3684);
    const uy = [1e3, 3e3, 9e3];
    class Xy {
      constructor(TT) {
        this.host = TT, this.sets = new Map, this.table = [], this.generation = 0, this.yv = !1
      }
      onEvent(TT) {
        const kT = function(TT) {
          if (TT.byteLength !== CT.md) return null;
          const kT = new DataView(TT.buffer, TT.byteOffset, TT.byteLength);
          return {
            want: kT.getUint16(0, !0),
            release: kT.getUint16(2, !0)
          }
        }(TT);
        kT && !this.yv && (kT.release !== CT.nd && this.release(kT.release), kT.want !== CT.nd && this.want(kT.want))
      }
      reset(TT) {
        if (!this.yv) {
          for (const [TT, kT] of this.sets) "ready" === kT.state && this.releaseAll(kT.distinct), this.sets.delete(TT);
          this.table = TT, this.generation++
        }
      }
      dispose() {
        if (this.yv) return;
        this.yv = !0, this.generation++, this.table = [];
        const TT = [...this.sets.values()];
        this.sets.clear();
        let kT = null;
        for (const lT of TT)
          for (const TT of "ready" === lT.state ? lT.distinct : []) try {
            this.host.IcT(TT)
          } catch (cT) {
            kT ??= {
              error: cT
            }
          }
        if (kT) throw kT.error
      }
      isReady(TT) {
        var kT;
        return "ready" === (null === (kT = this.sets.get(TT)) || void 0 === kT ? void 0 : kT.state)
      }
      want(TT) {
        const kT = this.sets.get(TT);
        if ("loading" === (null === kT || void 0 === kT ? void 0 : kT.state)) return kT.wanted = !0, void this.capAnswer(TT, kT);
        if ("ready" === (null === kT || void 0 === kT ? void 0 : kT.state)) return void this.host.sendReady(Ly(TT, kT.images, kT.size));
        const cT = this.table[TT];
        if (!cT || 1 !== cT.urls.length && cT.urls.length !== Wc.Tb.CubeFaces) return this.host.sendReady(Ry(TT)), void this.host.onLoadFailed(TT, "", new Error(`no image set ${TT}`));
        const lT = {
          state: "loading",
          wanted: !0
        };
        this.sets.set(TT, lT), this.load(TT, cT, lT, this.generation, 0), this.capAnswer(TT, lT)
      }
      capAnswer(TT, kT) {
        this.host.wait(4e3, (() => {
          this.sets.get(TT) === kT && kT.wanted && this.host.sendReady(Ry(TT))
        }))
      }
      load(TT, kT, cT, lT, MT) {
        const KT = [...new Set(kT.urls)];
        Promise.allSettled(KT.map((TT => this.host.loadImage(TT, kT.orientation)))).then((OT => {
          const yT = OT.flatMap((TT => "fulfilled" === TT.status ? [TT.value] : [])),
            fT = lT === this.generation && this.sets.get(TT) === cT,
            xT = OT.findIndex((TT => "rejected" === TT.status));
          if (!fT || !cT.wanted) return this.yv ? void this.releaseAfterDispose(yT.map(dy)) : (this.releaseAll(yT.map(dy)), void(fT && this.sets.delete(TT)));
          xT < 0 ? this.loaded(TT, kT, KT, yT) : (this.releaseAll(yT.map(dy)), this.host.sendReady(Ry(TT)), MT < uy.length ? this.host.wait(uy[MT], (() => {
            lT === this.generation && this.sets.get(TT) === cT && (cT.wanted ? this.load(TT, kT, cT, lT, MT + 1) : this.sets.delete(TT))
          })) : (this.sets.delete(TT), this.host.onLoadFailed(TT, KT[xT], OT[xT].reason)))
        }))
      }
      loaded(TT, kT, cT, lT) {
        const [MT] = lT, KT = [MT.width, MT.height], OT = lT.every((TT => TT.width === KT[0] && TT.height === KT[1])), yT = kT.urls.length === Wc.Tb.CubeFaces;
        if (!OT || KT[0] <= 0 || KT[1] <= 0 || KT[0] > 65535 || KT[1] > 65535 || yT && KT[0] !== KT[1]) {
          this.releaseAll(lT.map(dy)), this.sets.delete(TT), this.host.sendReady(Ry(TT));
          const cT = lT.map((TT => `${TT.width}x${TT.height}`));
          return void this.host.onLoadFailed(TT, kT.urls[0], new Error(`set ${TT}'s images can't make its texture: ${cT.join(", ")}`))
        }
        const fT = kT.urls.map((TT => lT[cT.indexOf(TT)].id)),
          xT = lT.map(dy);
        this.sets.set(TT, {
          state: "ready",
          images: fT,
          distinct: xT,
          size: KT
        }), this.host.sendReady(Ly(TT, fT, KT))
      }
      release(TT) {
        const kT = this.sets.get(TT);
        "loading" === (null === kT || void 0 === kT ? void 0 : kT.state) ? kT.wanted = !1: "ready" === (null === kT || void 0 === kT ? void 0 : kT.state) && (this.releaseAll(kT.distinct), this.sets.delete(TT))
      }
      releaseAll(TT) {
        for (const kT of TT) this.host.IcT(kT)
      }
      releaseAfterDispose(TT) {
        for (const kT of TT) try {
          this.host.IcT(kT)
        } catch {}
      }
    }

    function dy(TT) {
      return TT.id
    }

    function Ly(TT, kT, cT) {
      const lT = new Uint8Array(Wc.Tb.SkyImagesReadyBytes),
        MT = new DataView(lT.buffer);
      return MT.setUint16(0, TT, !0), MT.setUint16(2, kT.length, !0), MT.setUint16(4, cT[0], !0), MT.setUint16(6, cT[1], !0), kT.slice(0, Wc.Tb.CubeFaces).forEach(((TT, kT) => {
        MT.setUint32(8 + 4 * kT, TT, !0)
      })), lT
    }

    function Ry(TT) {
      const kT = new Uint8Array(Wc.Tb.SkyImagesReadyBytes),
        cT = new DataView(kT.buffer);
      return cT.setUint16(0, TT, !0), cT.setUint16(2, Wc.Tb.Failed, !0), kT
    }
    let gy = Promise.resolve();
    async function Uy(TT, kT) {
      let cT;
      try {
        cT = await (0, Zy.N)(TT)
      } catch (KT) {
        throw new Vy.e("fetch", TT, {
          cause: KT
        })
      }
      const lT = gy.then((() => async function(TT, kT) {
        const cT = new Blob([TT.slice()]);
        let lT = await createImageBitmap(cT, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: kT
        });
        const MT = 1024 / Math.max(lT.width, lT.height);
        if (MT < 1) {
          const TT = lT;
          try {
            lT = await createImageBitmap(TT, {
              resizeWidth: Math.max(1, Math.round(TT.width * MT)),
              resizeHeight: Math.max(1, Math.round(TT.height * MT)),
              resizeQuality: "high",
              premultiplyAlpha: "none",
              colorSpaceConversion: "none"
            })
          } finally {
            TT.close()
          }
        }
        return lT
      }(cT, kT)));
      let MT;
      gy = lT.catch((() => {}));
      try {
        MT = await lT
      } catch (KT) {
        throw new Vy.e("decode", TT, {
          cause: KT
        })
      }
      return {
        id: (0, Vy.l)(MT),
        width: MT.width,
        height: MT.height
      }
    }
    var Yy = cT(3092),
      By = cT(34024);
    const Wy = Yy.g.length;

    function ny(TT) {
      const kT = [],
        cT = [];
      Yy.g.forEach(((lT, MT) => {
        var KT;
        const OT = null !== (KT = py(TT[lT])) && void 0 !== KT ? KT : By.l[lT];
        "custom" === OT.type ? (cT.push({
          id: MT,
          kind: Wc.Tb.KindCustom,
          set: kT.length,
          earth: null
        }), kT.push({
          urls: [OT.px, OT.py, OT.pz, OT.nx, OT.ny, OT.nz],
          orientation: "none"
        })) : cT.push({
          id: MT,
          kind: Wc.Tb.KindEarth,
          set: 0,
          earth: OT
        })
      }));
      const lT = py(TT.earth);
      "earth" === (null === lT || void 0 === lT ? void 0 : lT.type) && cT.push({
        id: Wy,
        kind: Wc.Tb.KindEarth,
        set: 0,
        earth: lT
      });
      const MT = kT.length;
      kT.push({
        urls: By.c.map((TT => By.g + TT)),
        orientation: "none"
      }), kT.push({
        urls: [By.k],
        orientation: "flipY"
      }), kT.push({
        urls: [By.b],
        orientation: "flipY"
      });
      const KT = new Uint8Array(Wc.Tb.SkyTableHeaderBytes + cT.length * Wc.Tb.SkyTableEntryBytes),
        OT = new DataView(KT.buffer);
      return OT.setUint16(0, MT, !0), OT.setUint16(2, MT + 1, !0), OT.setUint16(4, MT + 2, !0), OT.setUint16(6, cT.length, !0), cT.forEach(((TT, kT) => {
        const cT = Wc.Tb.SkyTableHeaderBytes + kT * Wc.Tb.SkyTableEntryBytes;
        OT.setUint16(cT, TT.id, !0), OT.setUint8(cT + 2, TT.kind);
        const lT = cT + 4;
        TT.earth ? function(TT, kT, cT) {
          const lT = TT;
          let MT = 0,
            KT = 0;
          for (const [OT, yT] of iy) {
            const TT = lT[OT];
            "number" === typeof TT && Number.isFinite(TT) && (kT.setFloat32(cT + 4 * yT, TT, !0), MT |= 1 << yT)
          }
          for (const [OT, yT, fT] of qy) {
            const TT = lT[OT];
            Array.isArray(TT) && 3 === TT.length && TT.every((TT => "number" === typeof TT && Number.isFinite(TT))) && (TT.forEach(((TT, lT) => {
              kT.setFloat32(cT + fT + 4 * lT, TT, !0)
            })), MT |= yT)
          }
          sy.forEach(((TT, KT) => {
            let [OT, yT] = TT;
            const fT = lT[OT];
            "number" === typeof fT && Number.isFinite(fT) && (kT.setFloat32(cT + Wc.n.CameraOffsetAt + 4 * KT, fT, !0), MT |= yT)
          }));
          for (const [OT, yT] of Tf) {
            const TT = lT[OT];
            null !== TT && void 0 !== TT && (MT |= yT, TT && (KT |= yT >>> 14))
          }
          kT.setUint32(cT + Wc.n.PresentAt, MT, !0), kT.setUint8(cT + Wc.n.FlagsAt, KT)
        }(TT.earth, OT, lT) : OT.setUint16(lT, TT.set, !0)
      })), {
        payload: KT,
        sets: kT
      }
    }

    function py(TT) {
      if ("object" !== typeof TT || null === TT) return null;
      const kT = TT;
      if ("earth" === kT.type) return TT;
      return "custom" === kT.type && ["px", "py", "pz", "nx", "ny", "nz"].every((TT => {
        const cT = kT[TT];
        return "string" === typeof cT && cT.length > 0
      })) ? TT : null
    }
    const iy = [
        ["inclination", Wc.n.Inclination],
        ["turbidity", Wc.n.Turbidity],
        ["luminance", Wc.n.Luminance],
        ["rayleigh", Wc.n.Rayleigh],
        ["mieCoefficient", Wc.n.MieCoefficient],
        ["mieDirectionalG", Wc.n.MieDirectionalG],
        ["distance", Wc.n.Distance],
        ["azimuth", Wc.n.Azimuth]
      ],
      qy = [
        ["sunPosition", Wc.n.SunPosition, Wc.n.SunPositionAt],
        ["up", Wc.n.Up, Wc.n.UpAt],
        ["vertexTint", Wc.n.VertexTint, Wc.n.VertexTintAt]
      ],
      sy = [
        ["xCameraOffset", Wc.n.CameraOffsetX],
        ["yCameraOffset", Wc.n.CameraOffsetY],
        ["zCameraOffset", Wc.n.CameraOffsetZ]
      ],
      Tf = [
        ["useSunPosition", Wc.n.UseSunPosition],
        ["dithering", Wc.n.Dithering],
        ["infiniteDistance", Wc.n.InfiniteDistance]
      ];

    function kf(TT, kT, cT) {
      const lT = new Mf({
        writeCmd: TT,
        warn: kT,
        followPack: lf(cT, kT)
      });
      return lT.start(), lT
    }

    function lf(TT, kT) {
      return cT => {
        let lT = () => {};
        const MT = TT((TT => {
          lT(), lT = () => {}, null !== TT ? lT = TT.subscribe((TT => {
            cT(function(TT, kT, cT) {
              if ("object" !== typeof TT || null === TT) return null;
              const lT = TT.skyBoxes;
              if ("object" !== typeof lT || null === lT) return null;
              if ("player" === kT) return lT;
              return Object.fromEntries(Object.entries(lT).filter((TT => {
                let [kT, lT] = TT;
                return !! function(TT) {
                  if ("object" !== typeof TT || null === TT) return !1;
                  return "earth" === TT.type || Object.entries(TT).every((TT => {
                    let [kT, cT] = TT;
                    return "type" === kT || ("" === (lT = cT) || null !== function(TT) {
                      var kT, cT, lT;
                      return "string" !== typeof TT ? null : null !== (kT = null === (cT = Kf.exec(TT)) || void 0 === cT || null === (lT = cT.groups) || void 0 === lT ? void 0 : lT.base64) && void 0 !== kT ? kT : null
                    }(lT));
                    var lT
                  }))
                }(lT) || (cT(`Ignoring texture pack skybox ${kT}, whose faces are not all data URLs`, null), !1)
              })))
            }(TT.pack, null === TT.gameSource ? "player" : "customGame", kT))
          })) : cT(null)
        }));
        return () => {
          MT(), lT()
        }
      }
    }
    class Mf {
      constructor(TT) {
        var kT, cT, lT;
        this.host = TT, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.yv = !1, this.wait = null !== (kT = TT.wait) && void 0 !== kT ? kT : (TT, kT) => {
          setTimeout(kT, TT)
        }, this.loader = new Xy({
          loadImage: null !== (cT = TT.loadImage) && void 0 !== cT ? cT : Uy,
          IcT: null !== (lT = TT.IcT) && void 0 !== lT ? lT : Vy.o,
          sendReady: TT => {
            this.queue.push({
              kind: Wc.Tb.SkyImagesReady,
              payload: TT
            })
          },
          onLoadFailed: (kT, cT, lT) => {
            TT.warn(`sky image set ${kT} (${cT}) didn't load: the last sky stays`, lT)
          },
          wait: this.wait
        })
      }
      start() {
        this.wait(Ey.d, (() => {
          null === this.written && this.write({})
        })), this.stopFollowing = this.host.followPack((TT => {
          this.write(null !== TT && void 0 !== TT ? TT : {})
        }))
      }
      onEvent(TT) {
        this.loader.onEvent(TT)
      }
      drain() {
        if (0 === this.queue.length) return;
        let TT = 0;
        for (; TT < this.queue.length && this.host.writeCmd(this.queue[TT].kind, 0, this.queue[TT].payload);) TT++;
        TT > 0 && this.queue.splice(0, TT)
      }
      dispose() {
        this.yv = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
      }
      write(TT) {
        if (this.yv) return;
        const kT = ny(TT);
        var cT, lT;
        this.written && (cT = this.written, lT = kT, cT.payload.length === lT.payload.length && cT.payload.every(((TT, kT) => TT === lT.payload[kT])) && cT.sets.length === lT.sets.length && cT.sets.every(((TT, kT) => {
          const cT = lT.sets[kT];
          return TT.orientation === cT.orientation && TT.urls.length === cT.urls.length && TT.urls.every(((TT, kT) => TT === cT.urls[kT]))
        }))) || (this.written = kT, this.loader.reset(kT.sets), this.queue = this.queue.filter((TT => TT.kind !== Wc.Tb.SkyImagesReady)), this.queue.push({
          kind: Wc.Tb.SkyTable,
          payload: kT.payload
        }))
      }
    }
    const Kf = /^data:[\w.+/-]*;base64,(?<base64>[A-Za-z0-9+/]*={0,2})$/;
    var Of = cT(2840),
      yf = cT(2927),
      ff = cT(317),
      xf = cT(208),
      If = cT(2842),
      Af = cT(2844),
      Cf = cT(291),
      jf = cT(298),
      vf = cT(2861),
      tf = cT(2880),
      hf = cT(2888),
      Nf = cT(133),
      Qf = cT(307),
      Sf = cT(40467);
    class Df {
      constructor() {
        this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, LM.m)(Sl.N, (TT => {
          this.onReply((0, dM.e)(Sl.N, TT), performance.now())
        }))
      }
      onFrame(TT, kT) {
        null === this.id ? this.id = TT : TT !== this.id && (this.id = TT, this.sentMs = document.hidden ? null : kT)
      }
      onVisibilityChange() {
        this.sentMs = null
      }
      onReply(TT, kT) {
        TT === this.id && null !== this.sentMs && (this.roundTripMs = Math.round(kT - this.sentMs), this.sentMs = null)
      }
      take() {
        const TT = this.roundTripMs;
        return this.roundTripMs = null, TT
      }
      stop() {
        this.stopReplies()
      }
    }
    class af {
      constructor() {
        this.sampled = 0, this.timed = 0, this.frameUs = 0, this.primed = !1, this.windowTimed = 0, this.windowUs = 0
      }
      onFrame(TT, kT, cT, lT) {
        const MT = TT - this.sampled >>> 0,
          KT = kT - this.timed >>> 0,
          OT = cT - this.frameUs >>> 0,
          yT = this.primed;
        return this.sampled = TT, this.timed = kT, this.frameUs = cT, this.primed = !0, !(!yT || MT > 64 || KT > 64) && (lT && OT <= 1e6 * KT && (this.windowTimed += KT, this.windowUs += OT), lT && MT > 0)
      }
      reset() {}
      snapshotAndReset() {
        const TT = this.windowTimed > 0 ? this.windowUs / this.windowTimed / 1e3 : null;
        return this.windowTimed = 0, this.windowUs = 0, {
          passMs: TT,
          submitToDoneMs: null
        }
      }
    }
    const Ff = {
      pacedShare: null,
      switchesPerHour: null,
      lagP50Ms: null,
      lagP90Ms: null,
      joinLagP90Ms: null
    };
    class rf {
      constructor() {
        this.samples = new Float64Array(4096), this.count = 0
      }
      add(TT, kT) {
        const cT = Math.min(4096, this.count + kT);
        this.samples.fill(TT, this.count, cT), this.count = cT
      }
      clear() {
        this.count = 0
      }
      take(TT) {
        const kT = this.count;
        if (this.count = 0, kT < 30) return null;
        const cT = this.samples.subarray(0, kT).sort();
        return TT.map((TT => cT[Math.min(kT - 1, Math.floor(TT * kT))]))
      }
    }
    class Pf {
      constructor() {
        this.word = 0, this.lagUs = 0, this.primed = !1, this.lastDrawnMs = -1, this.tieredMs = 0, this.pacedMs = 0, this.switches = 0, this.lags = new rf, this.inJoin = !1, this.rose = !1, this.joinLags = new rf, this.joinLagP90Ms = null
      }
      onFrame(TT, kT, cT, lT, MT) {
        const KT = TT.headerWord(Wc.B.Pacing),
          OT = TT.headerWord(Wc.B.PacingLagUs),
          yT = (KT >>> Wc.L.LagsShift) - (this.word >>> Wc.L.LagsShift) & Wc.L.CountMask,
          fT = (KT >>> Wc.L.SwitchesShift) - (this.word >>> Wc.L.SwitchesShift) & Wc.L.CountMask,
          xT = yT > 0 ? (OT - this.lagUs >>> 0) / yT / 1e3 : 0,
          IT = this.primed && yT <= 64 && fT <= 2 && xT <= 6e4;
        if (this.rose = 0 !== (KT & ~this.word & Wc.L.Joining), this.word = KT, this.lagUs = OT, this.primed = !0, 0 !== (KT & Wc.L.Tiered)) {
          if (0 !== (KT & Wc.L.Joining)) this.rose && (this.inJoin = !0, this.joinLags.clear()), this.inJoin && IT && lT && yT > 0 && this.joinLags.add(xT, yT);
          else if (this.inJoin) {
            var AT, CT;
            this.inJoin = !1, this.joinLagP90Ms = null !== (AT = null === (CT = this.joinLags.take([.9])) || void 0 === CT ? void 0 : CT[0]) && void 0 !== AT ? AT : null
          }
          if (MT) {
            if (IT && (this.switches += fT, yT > 0 && this.lags.add(xT, yT)), cT) {
              if (this.lastDrawnMs >= 0 && kT - this.lastDrawnMs <= 250) {
                const TT = kT - this.lastDrawnMs;
                this.tieredMs += TT, (KT & Wc.L.AheadMask) > 0 && (this.pacedMs += TT)
              }
              this.lastDrawnMs = kT
            }
          } else this.lastDrawnMs = -1
        } else this.lastDrawnMs = -1
      }
      onJoin() {
        this.takeWindow(), this.rose || (this.inJoin = !1, this.joinLags.clear()), this.lastDrawnMs = -1
      }
      snapshotAndReset(TT) {
        const kT = this.takeWindow(),
          cT = this.joinLagP90Ms;
        return this.joinLagP90Ms = null, TT ? {
          ...kT,
          joinLagP90Ms: cT
        } : {
          ...Ff,
          joinLagP90Ms: cT
        }
      }
      unsent(TT) {
        this.joinLagP90Ms ??= TT.joinLagP90Ms
      }
      takeWindow() {
        var TT, kT;
        const cT = this.tieredMs >= 2e3,
          lT = this.lags.take([.5, .9]),
          MT = {
            pacedShare: cT ? this.pacedMs / this.tieredMs : null,
            switchesPerHour: cT ? 36e5 * this.switches / this.tieredMs : null,
            lagP50Ms: null !== (TT = null === lT || void 0 === lT ? void 0 : lT[0]) && void 0 !== TT ? TT : null,
            lagP90Ms: null !== (kT = null === lT || void 0 === lT ? void 0 : lT[1]) && void 0 !== kT ? kT : null
          };
        return this.tieredMs = 0, this.pacedMs = 0, this.switches = 0, MT
      }
    }
    var wf = cT(9288),
      mf = cT(2819),
      bf = cT(40528),
      zf = cT(9284),
      Jf = cT(2847),
      of = cT(2835);
    const Hf = {
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

    function ef(TT) {
      return new Gf(TT)
    }
    class Gf {
      constructor(TT) {
        this.shell = TT, this.tracker = new Af.d, this.gpu = new af, this.pacing = new Pf, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.fpsOverTime = null, this.firstSpanFps = null, this.initialFps = null, this.ping = new Df, this.pacedCpuMs = 0, this.frameDebug = null, this.lastDrawnMs = -1, this.stallPending = !1, this.onVisibility = () => {
          this.tracker.onVisibilityChange(), this.ping.onVisibilityChange(), this.lastDrawnMs = -1, !document.hidden && this.fpsSpanStartMs >= 0 && (this.fpsFrames = 0, this.fpsSpanStartMs = performance.now())
        }, this.onBeforeUnload = () => {
          this.checkMainStall(performance.now()), this.lastDrawnMs = -1
        }, (0, wf.e)(TT.backend, TT.canvas, TT.adapterVendor), this.tracker.start((() => !TT.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, Jf.b)("wasm", (() => {
          const {
            n: kT,
            sampleCount: cT
          } = (0, bf.i)();
          return `${TT.backend}, quality steps aim at up to ${of.d.target.maxFps} fps, pixel n ${kT}, msaa ${cT}`
        }), (TT => {
          this.frameDebug = TT
        })), this.timers.push(setInterval((() => {
          this.flush(), this.fpsOverTime = null, this.initialFps = null
        }), 1e4), setInterval((() => {
          this.followGame() && (this.hasFlushedSinceConnect || (this.flush(), this.hasFlushedSinceConnect = !0))
        }), 250))
      }
      animationFrame(TT) {
        var kT;
        this.tracker.onAnimationFrame(TT), null === (kT = this.frameDebug) || void 0 === kT || kT.animationFrame()
      }
      frameRan(TT, kT, cT, lT) {
        var MT;
        this.ping.onFrame(TT.headerWord(Wc.B.PingSent), cT);
        const KT = this.tracker;
        this.pacing.onFrame(TT, kT, "drawn" === lT, !document.hidden, KT.isSampling());
        const OT = TT.headerWord(Wc.B.TickUs) / 1e3 + (0, Ml.J)();
        KT.pN(OT), null === (MT = this.frameDebug) || void 0 === MT || MT.wasmFrame(TT, kT, cT, "drawn" === lT, KT.isSampling(), OT, (0, zf.g)());
        const yT = Math.max(0, cT - kT - OT);
        if ("drawn" !== lT) return void("paced" === lT ? this.pacedCpuMs += yT : "skipped" === lT && (this.lastDrawnMs = -1));
        this.followGame(), this.checkMainStall(kT), KT.onFrameStart(kT);
        this.gpu.onFrame(TT.headerWord(Wc.B.GpuSampled), TT.headerWord(Wc.B.GpuTimed), TT.headerWord(Wc.B.GpuFrameUs), KT.isSampling()) && KT.onGpuSampleStarted(), KT.onFrameCpu(yT + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(kT)
      }
      stop() {
        for (const TT of this.timers) clearInterval(TT);
        this.timers.length = 0, document.removeEventListener("visibilitychange", this.onVisibility), window.removeEventListener("beforeunload", this.onBeforeUnload), this.ping.stop()
      }
      followGame() {
        const TT = this.shell.joinedGame();
        return TT !== this.game && (this.game = TT, this.tracker.snapshotAndReset(), this.pacing.onJoin(), this.hasFlushedSinceConnect = !1, this.inGameAtLastFlush = !1, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.pacedCpuMs = 0, this.firstSpanFps = null, this.fpsOverTime = null, this.initialFps = null, this.lastDrawnMs = -1), null !== TT
      }
      checkMainStall(TT) {
        if (!this.tracker.isSampling()) return void(this.lastDrawnMs = -1);
        const kT = this.tracker.limiterTelemetry.longAnimationFrameTracker,
          cT = this.lastDrawnMs < 0 ? 0 : TT - this.lastDrawnMs;
        this.lastDrawnMs = TT, this.stallPending || (cT <= 5e3 ? kT.markFrame(TT) : (this.stallPending = !0, setTimeout((() => {
          this.stallPending = !1, this.shell.mainStalled(cT, kT.blockingSinceMark())
        }), 0)))
      }
      countFpsFrame(TT) {
        if (this.fpsSpanStartMs < 0) {
          if (!this.shell.inGame()) return;
          this.fpsSpanStartMs = TT
        }
        this.fpsFrames++;
        const kT = TT - this.fpsSpanStartMs;
        if (!(kT < hf.b)) {
          if (!document.hidden) {
            const TT = 1e3 * this.fpsFrames / kT;
            this.firstSpanFps ??= TT, this.initialFps = this.firstSpanFps, this.fpsOverTime = TT
          }
          this.fpsFrames = 0, this.fpsSpanStartMs = TT
        }
      }
      flush() {
        const TT = this.followGame(),
          {
            cpuFrameMs: kT,
            refreshHz: cT,
            cpuBottleneck: MT,
            frameIntervalCv: KT,
            ...OT
          } = this.tracker.snapshotAndReset(),
          yT = this.shell.inGame(),
          fT = yT && this.inGameAtLastFlush,
          xT = fT ? OT : If.i,
          IT = this.pacing.snapshotAndReset(fT);
        if (this.inGameAtLastFlush = yT, this.pendingLightFailures += this.shell.takeFailedMeshJobs(), !TT) return void this.pacing.unsent(IT);
        const AT = performance.now(),
          jT = (0, tf.v)((0, tf.u)(AT), this.unsentPage),
          tT = function(TT, kT, cT, MT, KT, OT, yT, fT) {
            var xT, IT, AT, CT;
            const jT = {},
              {
                canvas: vT
              } = TT,
              tT = (0, vf.d)({
                refreshHz: kT.refreshHz,
                msaa: TT.msaa(),
                autoMsaaOff: (0, zf.d)()
              });
            for (const hT of (0, yf.e)()) {
              const NT = hT.name;
              let QT;
              if ((0, ff.o)(NT)) QT = (0, tf.e)(NT);
              else if ((0, tf.k)(NT)) QT = fT[NT];
              else if ((0, vf.f)(NT)) QT = tT[NT];
              else switch (NT) {
                case "fps":
                  QT = MT;
                  break;
                case "Sy":
                  QT = KT;
                  break;
                case "my":
                  QT = (0, mf.p)((0, bf.i)().n);
                  break;
                case "zy":
                  QT = Math.max(vT.width, vT.height);
                  break;
                case "Jy":
                  QT = Math.min(vT.width, vT.height);
                  break;
                case "Hy":
                  QT = navigator.hardwareConcurrency || null;
                  break;
                case "ey":
                  QT = (0, WM.getWebGpuSupported)();
                  break;
                case "Gy":
                  QT = null === TT.fallbackReason ? null : Hf[TT.fallbackReason];
                  break;
                case "Vy":
                  QT = kT.cpuFrameMs;
                  break;
                case "Ey":
                  QT = kT.refreshHz;
                  break;
                case "Zy":
                  QT = kT.cpuBottleneck;
                  break;
                case "Xy":
                  QT = kT.frameIntervalCv;
                  break;
                case "Ly":
                  QT = kT.frameMs;
                  break;
                case "Ry":
                  QT = kT.tickMs;
                  break;
                case "Wy":
                  QT = kT.mainBusyShare;
                  break;
                case "ny":
                  QT = kT.mainProbeDelayMs;
                  break;
                case "gy":
                  QT = kT.longAnimationFramesPerMin;
                  break;
                case "Uy":
                  QT = kT.longAnimationFrameTimeShare;
                  break;
                case "Yy":
                  QT = kT.longAnimationFrameScriptShare;
                  break;
                case "py":
                  QT = kT.gpuPassMs;
                  break;
                case "iy":
                  QT = kT.gpuSubmitToDoneMs;
                  break;
                case "qy":
                  QT = cT.pacedShare;
                  break;
                case "sy":
                  QT = cT.switchesPerHour;
                  break;
                case "Tf":
                  QT = cT.lagP50Ms;
                  break;
                case "kf":
                  QT = cT.lagP90Ms;
                  break;
                case "lf":
                  QT = cT.joinLagP90Ms;
                  break;
                case "Nf":
                  QT = (0, Of.h)(OT);
                  break;
                case "wy":
                  QT = yT;
                  break;
                case "Mf":
                case "Kf":
                case "yf":
                case "ff":
                case "xf":
                case "Af":
                case "Cf":
                case "jf":
                case "vf":
                case "tf":
                case "hf":
                case "Qf":
                case "Sf":
                case "Df":
                case "af":
                  QT = null;
                  break;
                case "Ef":
                  QT = (0, WM.getPlatformType)();
                  break;
                case "Zf":
                  QT = (0, WM.getGpuVendor)();
                  break;
                case "uf":
                  QT = Sf.e[TT.backend];
                  break;
                case "Xf":
                  QT = (0, Nf.b)();
                  break;
                case "df":
                  QT = (0, WM.getOperatingSystem)();
                  break;
                case "Lf":
                  QT = (0, WM.getTrafficSource)();
                  break;
                case "Rf":
                  QT = null !== (xT = lT.e.get("gameEntrySource")) && void 0 !== xT ? xT : xf.c;
                  break;
                case "gf":
                  QT = kT.frameLimiter;
                  break;
                case "Uf":
                  QT = (0, Cf.i)();
                  break;
                case "Yf":
                  QT = null !== (IT = (0, jf.e)()) && void 0 !== IT ? IT : xf.c;
                  break;
                case "Bf":
                  QT = (0, Cf.b)(vT.width, vT.height);
                  break;
                case "Wf":
                  QT = (0, yf.g)(-(new Date).getTimezoneOffset());
                  break;
                case "sf":
                  QT = null !== (AT = TT.fallbackReason) && void 0 !== AT ? AT : xf.c;
                  break;
                case "lx":
                  QT = "ready";
                  break;
                case "Mx":
                  QT = (0, WM.getSoftwareRenderer)();
                  break;
                case "qf":
                  QT = null !== TT.shaderPackReach() ? "true" : "false";
                  break;
                case "Kx":
                  QT = null !== (CT = TT.shaderPackReach()) && void 0 !== CT && CT.sceneDepth ? "true" : "false";
                  break;
                case "Ox": {
                  const kT = TT.shaderPackReach();
                  QT = null !== kT && void 0 !== kT && kT.sunShadow ? "all" : null !== kT && void 0 !== kT && kT.airShadow ? "air" : "none";
                  break
                }
                case "yx":
                  QT = Qf.t;
                  break;
                case "pf":
                case "Tx":
                case "kx":
                  QT = xf.c;
                  break;
                default:
                  throw new Error(`Unhandled field name: ${NT}`)
              }
              if (void 0 === QT) throw new Error(`Metric ${NT} has no value`);
              jT[NT] = QT
            }
            return jT
          }(this.shell, {
            cpuFrameMs: kT,
            refreshHz: cT,
            cpuBottleneck: MT,
            frameIntervalCv: KT,
            ...xT
          }, IT, this.fpsOverTime, this.initialFps, this.pendingLightFailures, this.ping.take(), jT);
        if (! function(TT, kT, cT) {
            return (0, Yk.e)(), TT(vT.r.Send, kT, cT)
          }(this.shell.writeCmd, CT.ld, function(TT) {
            const kT = (0, ET.g)((0, nk.e)(TT)),
              cT = new Uint8Array(vT.fe.BYTES + kT.length);
            return new DataView(cT.buffer).setUint16(0, nk.b.AnalyticsUpdate, !0), cT.set(kT, vT.fe.BYTES), cT
          }(tT))) return this.unsentPage = jT, this.pacing.unsent(IT), void(0 === this.sendsDropped++ && console.warn("[wasm-client] an analytics update found the cmd ring full: dropped"));
        this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, Of.g), (0, tf.r)(tT, "wasm", AT)
      }
    }
    var Vf = cT(39371);

    function Ef(TT, kT, cT) {
      const lT = new Map;
      return (0, Vf.e)(((TT, cT, lT) => kT.Rx(TT, cT, lT)), ((kT, cT, MT) => {
        const KT = `${kT},${cT},${MT}`;
        return lT.has(KT) || lT.set(KT, (0, Xk.c)(TT, kT, cT, MT)), lT.get(KT)
      }), cT)
    }
    var Zf = cT(39379),
      uf = cT(40339);

    function Xf(TT) {
      const kT = null !== TT && 0 !== (vT.A.playerFlags(TT.api.apiView, 0) & vT.Od.CursorAim);
      kT !== (0, uf.m)() && (0, uf.G)(kT, null !== TT)
    }

    function df(TT) {
      return (0, Ql.d)(Sl.E, TT)
    }
    var Lf = cT(40369);
    const Rf = new KT.e((TT => cT(42141)(`./${TT}/${TT}Client`)));
    let gf = null,
      Uf = null;
    async function Yf(TT) {
      gf ??= cT.e(27).then((() => cT(38946))).then((TT => {
        Uf = TT.createDefaultClientPlugins
      }), (TT => {
        throw gf = null, TT
      })), await Promise.all([Rf.load(TT), gf])
    }

    function Bf(TT) {
      TT.load(new Ek(Yl, new nl))
    }
    let Wf = !1;
    const nf = new WeakMap;

    function pf(TT) {
      try {
        TT()
      } catch (kT) {
        console.error("[bloxd-wasm-client] a session-end step failed", kT)
      }
    }

    function qf(TT, kT) {
      ! function() {
        var TT, kT;
        Rl.Howler.volume();
        const cT = Rl.Howler;
        null === (TT = cT._autoResume) || void 0 === TT || TT.call(cT), null === (kT = cT._autoSuspend) || void 0 === kT || kT.call(cT)
      }(), kT.audio.prepare();
      const cT = new DT(kT.core, kT.memory, kT.audio);
      let KT;
      try {
        KT = new hM(cT, kT.options)
      } catch (CT) {
        return TT.crash(QM.z, CT), null
      }(0, fT.d)(NM(cT, KT));
      const IT = new ry({
        running: TT,
        api: cT,
        core: kT.core,
        memory: kT.memory,
        staleOr: kT.staleOr,
        reportFault: kT.reportReplayFault,
        options: kT.options,
        sessionInfo: kT.sessionInfo,
        replayShaderPack: kT.replayShaderPack
      });
      (0, Ml.y)();
      const AT = new El({
        api: cT,
        tables: KT,
        sessionInfo: kT.sessionInfo,
        gameFactory: TT => Rf.loadedFactory(TT),
        defaultPlugins: (TT, kT, cT, lT) => {
          if (null === Uf) throw new Error("The default plugins started before they loaded");
          return Uf(TT, kT, cT, lT)
        },
        serverOptions: kT.options,
        onNetEvent: TT => {
          IT.netEvent(TT), kT.onNetEvent(TT)
        },
        setLocalOptions: kT => {
          wy(TT, {
            changes: kT,
            reset: !1
          })
        },
        playSound: (TT, cT, lT, MT, KT, OT, yT) => kT.audio.playGame(TT, cT, lT, MT, KT, OT, yT),
        preloadSounds: TT => {
          kT.audio.preload(function(TT) {
            const kT = [];
            for (const cT of TT) {
              const TT = Gk(cT);
              TT >= 0 && kT.push(Qk[TT])
            }
            return kT
          }(TT))
        },
        onSessionEnd: () => {
          pf(MT.m), pf(cM), pf((() => {
            lT.e.set({
              openInGameMenuName: null
            })
          })), pf((() => {
            kT.audio.endSession()
          }))
        },
        beforeWrite: kT.beforeWrite,
        beforeOp: kT.beforeOp,
        cameraScreen: kM,
        showCameraFacing: lM,
        onEventOverflow: kT.onEventOverflow,
        screenBandY: yT.i,
        replayEntities: IT.entityHooks,
        hasPackModel: kT.hasPackModel
      });
      return AT.attach(TT), nf.set(AT, IT), dl(AT.items, kT.audio),
        function(TT) {
          TT.setClientFreeCameraGrant("isDev", !1);
          const kT = kT => {
            TT.setClientFreeCameraGrant("hasDeveloperRank", kT.playerHasRank("developer"))
          };
          (0, OT.m)("userContextUpdated", kT)
        }(AT), Wf || (Wf = !0, (0, OT.m)("appManagerUpdated|openInGameMenuName", (TT => {
          !TT && (0, xT.l)().includes(xT.c) && (0, xT.o)(xT.c)
        }))), AT
    }

    function sf(TT) {
      try {
        TT.closeGame()
      } finally {
        var kT;
        null === (kT = nf.get(TT)) || void 0 === kT || kT.stop(), nf.delete(TT)
      }
    }
  },
  40467: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => lT
    });
    const lT = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  40477: (TT, kT, cT) => {
    function lT() {
      return cT(40479)
    }

    function MT() {
      return cT(40481)
    }

    function KT(TT) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(TT)
    }
    cT.d(kT, {
      c: () => KT,
      g: () => lT,
      h: () => MT
    })
  },
  36089: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => yT,
      g: () => xT,
      h: () => OT,
      k: () => AT
    });
    var lT = cT(36077),
      MT = cT(15);
    const KT = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function OT(TT) {
      if (TT instanceof WebAssembly.RuntimeError) return !0;
      const kT = TT instanceof Error ? TT.stack : void 0;
      return "string" === typeof kT && KT.test(kT)
    }

    function yT(TT, kT, cT) {
      var MT;
      const OT = TT instanceof Error ? TT.name : "thrown",
        yT = (TT instanceof Error && null !== (MT = TT.stack) && void 0 !== MT ? MT : "").split("\n").filter((TT => KT.test(TT))).slice(0, 8).map((TT => TT.trim())),
        fT = null === kT ? "wasm memory unknown" : `wasm memory ${Math.round(kT/2**20)} MB`,
        xT = null === cT.panic ? "" : `, panic: ${(0,lT.i)(cT.panic)}`,
        IT = `${OT}: ${TT instanceof Error?TT.message:String(TT)}`;
      return `${(0,lT.m)(cT.kind,cT.refusedBytes)} ${IT} (${fT})${xT}${yT.length>0?` | ${yT.join(" < ")}`:""}`
    }
    const fT = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function xT(TT) {
      var kT;
      let cT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(TT instanceof Error) || !fT.test(TT.message)) return {};
      if (!("detached" in cT)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, MT.U)(null === (kT = (0, MT.R)(cT, "detached")) || void 0 === kT ? void 0 : kT.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const IT = 500;

    function AT(TT) {
      let kT = "[object Object]";
      try {
        kT = String(TT)
      } catch {}
      if ("[object Object]" !== kT) return kT;
      try {
        var cT, lT;
        return null !== (cT = null === (lT = JSON.stringify(TT)) || void 0 === lT ? void 0 : lT.slice(0, IT)) && void 0 !== cT ? cT : kT
      } catch {
        return kT
      }
    }
  },
  42141: (TT, kT, cT) => {
    var lT = {
      "./bedwars/bedwarsClient": [39053, 9],
      "./bridgeBattle/bridgeBattleClient": [39058, 10],
      "./buildAFactory2/buildAFactory2Client": [38326, 73, 72, 71, 220, 237, 11],
      "./classic/classicClient": [39064, 12],
      "./clutch/clutchClient": [39068, 13],
      "./containmentBreach/containmentBreachClient": [39071, 14],
      "./cooking/cookingClient": [39186, 15],
      "./defusal/defusalClient": [39189, 16],
      "./frontline/frontlineClient": [39197, 73, 72, 71, 17],
      "./goalRush/goalRushClient": [39201, 18],
      "./luckyBedwars/luckyBedwarsClient": [39209, 19],
      "./ninetyNineNights/ninetyNineNightsClient": [39216, 20],
      "./oneBlock/oneBlockClient": [39221, 21],
      "./plots/plotsClient": [39227, 236, 240, 22],
      "./pvpCiv/pvpCivClient": [39303, 23],
      "./skyIslands/skyIslandsClient": [39307, 24],
      "./skyblock/skyblockClient": [38372, 73, 220, 190, 25],
      "./tsunami/tsunamiClient": [39311, 26]
    };

    function MT(TT) {
      if (!cT.o(lT, TT)) return Promise.resolve().then((() => {
        var kT = new Error("Cannot find module '" + TT + "'");
        throw kT.code = "MODULE_NOT_FOUND", kT
      }));
      var kT = lT[TT],
        MT = kT[0];
      return Promise.all(kT.slice(1).map(cT.e)).then((() => cT(MT)))
    }
    MT.keys = () => Object.keys(lT), MT.id = 42141, TT.exports = MT
  },
  40479: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  40481: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  },
  36077: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => lT,
      g: () => KT,
      i: () => fT,
      l: () => OT,
      m: () => MT
    });
    const lT = /^alloc_failed (\d+) bytes$/;

    function MT(TT, kT) {
      return KT(TT, kT) ? `trap=alloc_failed ${kT} bytes` : `trap=${TT}`
    }

    function KT(TT, kT) {
      return "unreachable" === TT && kT > 0
    }

    function OT(TT, kT, cT) {
      const lT = function(TT) {
        return TT instanceof WebAssembly.RuntimeError ? /unreachable/i.test(TT.message) ? "unreachable" : /out of bounds/i.test(TT.message) ? "out_of_bounds" : "runtime_error" : (TT instanceof RangeError || TT instanceof Error && "InternalError" === TT.name) && /call stack|recursion/i.test(TT.message) ? "stack_overflow" : "js_error"
      }(TT);
      if ("unreachable" !== lT) return {
        kind: lT,
        panic: null,
        refusedBytes: 0
      };
      const MT = kT(),
        KT = cT();
      return {
        kind: lT,
        panic: KT > 0 ? null : MT,
        refusedBytes: KT
      }
    }
    const yT = 300;

    function fT(TT) {
      return TT.replace(/\s*\n\s*/g, " / ").slice(0, yT)
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);