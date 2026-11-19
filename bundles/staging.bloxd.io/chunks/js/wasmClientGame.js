export const id = 53;
export const ids = [53];
export const modules = {
  37960: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => kT,
      g: () => zT
    });
    var iT = IT(16);

    function zT(TT) {
      return "refetchCode" === TT || "devDownloadJson" === TT || TT.startsWith("Plugin")
    }

    function kT(TT, oT) {
      "refetchCode" !== TT ? "Plugin|MobAiPlugin|ShowPetUi" !== TT ? Promise.all([IT.e(106), IT.e(107), IT.e(102), IT.e(104), IT.e(205)]).then((() => IT(40571))).then((IT => {
        let {
          runClientGameMessage: iT
        } = IT;
        iT(TT, oT)
      })).catch((oT => {
        console.error(`Game message ${TT} failed`, oT)
      })) : iT.h.XM("showPetUi", oT) : iT.h.XM("refetchCode")
    }
  },
  41386: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => iT,
      f: () => zT
    });
    const iT = ["recording", "freecam", "keyframe"];

    function zT() {
      const TT = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(TT[1]) << 32n | BigInt(TT[0])
    }
  },
  39586: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => XT
    });
    const iT = 1 << 20,
      zT = 1 << 21,
      kT = 1024,
      WT = 2048;

    function XT(TT, oT, IT) {
      const XT = TT + iT,
        BT = oT + kT,
        FT = IT + iT;
      return XT < 0 || XT >= zT || FT < 0 || FT >= zT || BT < 0 || BT >= WT ? -1 : (XT * zT + FT) * WT + BT
    }
  },
  39581: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => iT,
      e: () => WT,
      f: () => zT,
      h: () => kT,
      j: () => ST,
      l: () => FT,
      n: () => BT,
      r: () => XT
    });
    IT(3014);
    IT(39586);

    function iT(TT) {}

    function zT(TT) {}

    function kT(TT) {}

    function WT(TT) {}

    function XT(TT) {}

    function BT(TT, oT, IT) {}

    function FT(TT) {}

    function ST(TT) {}
  },
  8668: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => XT,
      e: () => BT
    });
    var iT = IT(12);
    const zT = 24,
      kT = "farNametags",
      WT = 1e5;

    function XT() {
      var TT;
      return null === (TT = iT.c.get("showDistantNametags")) || void 0 === TT || TT
    }

    function BT() {
      var TT;
      return null !== (TT = function() {
        const TT = new URLSearchParams(window.location.search).get(kT),
          oT = null === TT || "" === TT ? NaN : Number(TT);
        return Number.isFinite(oT) && oT >= 0 ? Math.min(oT, WT) : null
      }()) && void 0 !== TT ? TT : XT() ? 0 : zT
    }
  },
  41382: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      blockIdOf: () => QB.e,
      clearWasmCameraScreen: () => oz,
      creativeItemIds: () => Ii.creativeItemIds,
      decodeMapSettings: () => nB,
      drainTextRerasters: () => aX.b,
      enchantmentPerksOf: () => Ii.enchantmentPerksOf,
      endGameHost: () => NB,
      followCursorAim: () => HB,
      followMenuPrefs: () => Pz,
      loadAudio: () => tB,
      loadClientGame: () => sB,
      loadTextIcons: () => aX.e,
      rasterText: () => UX.c,
      readBoardToEdit: () => YB,
      setTextHost: () => aX.h,
      setTextLocalPlayer: () => aX.j,
      showInCreativeInvenOf: () => Ii.showInCreativeInvenOf,
      startGameHost: () => yB,
      startShellAnalytics: () => JB,
      startSkyFeed: () => oB,
      textChanged: () => aX.o,
      warmText: () => UX.g,
      wasmCameraScreen: () => Tz
    });
    IT(35512);
    var iT = IT(12),
      zT = IT(35758),
      kT = IT(38107),
      WT = IT(16),
      XT = IT(2956),
      BT = IT(35750),
      FT = IT(1253),
      ST = IT(601),
      DT = IT(37224),
      LT = IT(4276),
      xT = IT(39420),
      cT = IT(39354);
    const KT = cT.Db / 4,
      MT = cT.q.PlaySound,
      rT = cT.q.SoundReset,
      AT = LT.R.ReplayFailed,
      gT = LT.R.RecorderEvent;
    class hT {
      constructor(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.core = TT, this.memory = oT, this.audio = IT, this.serverIds = new Int32Array(256).fill(cT.Yc), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.view = new DataView(new ArrayBuffer(cT.s.BYTES)), this.renderPtr = 0, this.fD = 0, this.renderCapacity = 0, this.render = new Float32Array(0), this.visPtr = 0, this.vis = new Uint8Array(0), this.renderBuffer = null, this.eventsBuffer = null, this.eventsPtr = 0, this.eventsLen = 0, this.events = new DataView(new ArrayBuffer(0)), this.audioView = null, this.scratchPtr = -1, this.corruption = null, this.replay = null, this.queries = new cT.Q(TT, (() => {
          this.scratchPtr = -1, this.ensureViews()
        }))
      }
      scratch() {
        return this.scratchPtr < 0 && (this.scratchPtr = this.core.PiT(), this.ensureViews()), this.scratchPtr
      }
      eventBytes(TT, oT) {
        const IT = this.eventView();
        return new Uint8Array(IT.buffer, IT.byteOffset + TT, oT)
      }
      get apiView() {
        return this.ensureViews(), this.view
      }
      ensureViews() {
        this.memory().buffer !== this.buffer && this.reView()
      }
      get localId() {
        return cT.s.localId(this.apiView, 0)
      }
      localDeaths() {
        return cT.s.localDeaths(this.apiView, 0)
      }
      rereadDirectory() {
        const TT = this.apiView,
          oT = cT.s.entRenderPtr(TT, 0),
          IT = cT.s.entVisPtr(TT, 0),
          iT = cT.s.entCapacity(TT, 0);
        if (oT !== this.renderPtr || IT !== this.visPtr || iT !== this.fD || this.renderBuffer !== this.buffer) {
          this.renderPtr = oT, this.visPtr = IT, this.fD = iT, this.renderBuffer = this.buffer;
          const TT = this.memoryView(Float32Array, oT, iT * KT, "the render array"),
            zT = this.memoryView(Uint8Array, IT, iT, "the visibility array");
          this.renderCapacity = TT && zT ? iT : 0, this.render = TT && zT ? TT : new Float32Array(0), this.vis = TT && zT ? zT : new Uint8Array(0)
        }
      }
      memoryView(TT, oT, IT, iT) {
        try {
          return (0, xT.q)(TT, this.memory().buffer, oT, IT, iT)
        } catch (zT) {
          return this.keepCorruption(zT), null
        }
      }
      memoryData(TT, oT, IT, iT) {
        try {
          return (0, xT.c)(this.memory().buffer, TT, oT, IT, iT)
        } catch (zT) {
          return this.keepCorruption(zT), null
        }
      }
      reportCorruption(TT) {
        this.keepCorruption(new xT.b(TT))
      }
      keepCorruption(TT) {
        if (!(TT instanceof xT.b)) throw TT;
        this.corruption ??= TT
      }
      throwCorruption() {
        if (this.corruption) throw this.corruption
      }
      walk(TT, oT, IT) {
        this.rereadDirectory(), this.throwCorruption();
        const {
          ptr: iT,
          len: zT
        } = TT;
        this.eventsPtr = iT, this.eventsLen = zT, this.eventsBuffer = null;
        const kT = this.eventView();
        for (let FT = 0; FT < zT;) {
          const TT = kT.getUint32(FT, !0),
            IT = 65535 & TT,
            iT = TT >>> 16,
            zT = FT + LT.P;
          if (IT === cT.q.EntitySpawned) {
            var WT;
            if (iT !== cT.Gb.BYTES) throw uT(IT, FT, iT);
            const TT = cT.Gb.serverId(kT, zT);
            this.spawned(TT, cT.Gb.index(kT, zT), cT.Gb.kind(kT, zT)), null === (WT = oT.entityAdded) || void 0 === WT || WT.call(oT, TT)
          } else if ((IT === cT.q.ChunkSlot || IT === cT.q.EntityInfoChanged) && !(0, cT.je)(IT, kT, zT, iT, oT)) throw uT(IT, FT, iT);
          FT = zT + (0, LT.se)(iT)
        }
        try {
          var XT;
          null === (XT = oT.afterPrescan) || void 0 === XT || XT.call(oT), this.throwCorruption(), !IT() && this.dispatch(TT, oT, IT) && (this.throwCorruption(), this.applyListener(), oT.afterWalk(TT.kind)), this.throwCorruption()
        } catch (BT) {
          throw BT instanceof xT.b && (this.corruption ??= BT), BT
        } finally {
          IT() || null !== this.corruption || this.applyDespawns(zT, oT)
        }
      }
      applyDespawns(TT, oT) {
        const IT = this.eventView();
        for (let zT = 0; zT < TT;) {
          const TT = IT.getUint32(zT, !0),
            kT = zT + LT.P;
          if ((65535 & TT) === cT.q.EntityDespawned && TT >>> 16 === cT.Gb.BYTES) {
            const TT = cT.Gb.serverId(IT, kT);
            var iT;
            if (this.despawned(TT, cT.Gb.index(IT, kT))) null === (iT = oT.entityRemoved) || void 0 === iT || iT.call(oT, TT)
          }
          zT = kT + (0, LT.se)(TT >>> 16)
        }
        this.rereadDirectory()
      }
      dispatch(TT, oT, IT) {
        const {
          len: iT,
          net: zT,
          netOffsets: kT
        } = TT;
        let WT = this.eventView(),
          XT = 0;
        for (let mT = 0; mT < iT;) {
          const TT = WT.getUint32(mT, !0),
            iT = 65535 & TT,
            eT = TT >>> 16,
            vT = mT + LT.P;
          let ET = !1;
          if (XT < zT.length && kT[XT] === mT) oT.netEvent(zT[XT]), XT++, ET = !0;
          else if (iT === LT.R.LocalPlayerBound) {
            var BT;
            if (eT !== LT.Cb) throw uT(iT, mT, eT);
            null === (BT = oT.localPlayerBound) || void 0 === BT || BT.call(oT, WT.getInt32(vT, !0)), ET = !0
          } else if (iT === LT.R.LocalHurt) {
            var FT;
            if (eT !== LT.Bb) throw uT(iT, mT, eT);
            null === (FT = oT.localHurt) || void 0 === FT || FT.call(oT, WT.getInt32(vT, !0), WT.getFloat32(vT + 4, !0), WT.getUint32(vT + 8, !0)), ET = !0
          } else if (iT === LT.R.AttackHit) {
            var ST;
            if (eT !== LT.e) throw uT(iT, mT, eT);
            const TT = WT.getFloat32(vT, !0),
              IT = WT.getFloat32(vT + 4, !0),
              zT = WT.getFloat32(vT + 8, !0),
              kT = WT.getUint32(vT + 12, !0);
            null === (ST = oT.attackHit) || void 0 === ST || ST.call(oT, TT, IT, zT, 0 !== (kT & LT.l.Crit), 0 !== (kT & LT.l.HitSelf))
          } else if (iT === LT.R.PhysicsType) {
            var DT;
            if (eT !== LT.Zb) throw uT(iT, mT, eT);
            null === (DT = oT.physicsType) || void 0 === DT || DT.call(oT, WT.getUint32(vT, !0), WT.getInt32(vT + 4, !0)), ET = !0
          } else if (iT === LT.R.VehicleEffect) {
            var xT;
            const TT = RT(WT, vT, eT);
            if (null === TT) throw uT(iT, mT, eT);
            null === (xT = oT.vehicleEffect) || void 0 === xT || xT.call(oT, TT.op, TT.name, TT.icon, TT.level, TT.durationMs), ET = !0
          } else if (iT === LT.R.ZoomChanged) {
            var KT;
            if (eT !== LT.ee) throw uT(iT, mT, eT);
            null === (KT = oT.zoomChanged) || void 0 === KT || KT.call(oT, WT.getFloat32(vT, !0), WT.getUint8(vT + 4)), ET = !0
          } else if (iT === LT.R.ZoomDisabled) {
            var hT;
            if (0 !== eT) throw uT(iT, mT, eT);
            null === (hT = oT.zoomDisabled) || void 0 === hT || hT.call(oT), ET = !0
          } else if (iT === LT.R.GameCamera) {
            var wT;
            null === (wT = oT.gameCamera) || void 0 === wT || wT.call(oT, new Uint8Array(WT.buffer, WT.byteOffset + vT, eT).slice()), ET = !0
          } else if (iT === cT.q.ChunkSlot || iT === cT.q.EntityInfoChanged);
          else if (iT >= MT && iT <= rT) {
            if (this.audio && !this.audio.onAudioEvent(iT, WT, vT, eT)) throw uT(iT, mT, eT)
          } else if (iT >= AT && iT <= gT) {
            if (this.replay) {
              if (!this.replay.onReplayEvent(iT, WT, vT, eT)) throw uT(iT, mT, eT);
              ET = !0
            }
          } else if (iT >= cT.hd && iT <= cT.id && iT !== LT.R.EnvLighting) {
            if (!(0, cT.je)(iT, WT, vT, eT, oT)) throw uT(iT, mT, eT);
            ET = !0
          }
          if (ET) {
            if (IT()) return !1;
            WT = this.eventView()
          }
          mT = vT + (0, LT.se)(eT)
        }
        return !IT()
      }
      applyListener() {
        var TT;
        if (!this.audio) return;
        const oT = cT.s.audioViewPtr(this.apiView, 0),
          IT = this.memory().buffer;
        let iT = this.audioView;
        (null === (TT = iT) || void 0 === TT ? void 0 : TT.buffer) === IT && iT.byteOffset === oT || (iT = (0, xT.c)(IT, oT, cT.v.BYTES, 8, "the audio view"), this.audioView = iT), iT && this.audio.applyListener(iT)
      }
      indexOf(TT) {
        return this.indexById.get("number" === typeof TT ? TT : +TT)
      }
      isLocal(TT) {
        return TT !== cT.Yc && TT === cT.s.localId(this.apiView, 0)
      }
      Wm(TT) {
        const oT = [0, 0, 0];
        return this.readPosition("number" === typeof TT ? TT : +TT, oT) ? oT : null
      }
      readPosition(TT, oT) {
        const IT = this.apiView;
        if (void 0 !== this.indexById.get(TT) && this.isLocal(TT)) {
          for (let TT = 0; TT < 3; TT++) oT[TT] = cT.s.localPos(IT, 0, TT);
          return !0
        }
        return this.readDrawnPosition(TT, oT)
      }
      readDrawnPosition(TT, oT) {
        const IT = this.apiView,
          iT = this.indexById.get(TT);
        if (void 0 === iT || iT >= this.renderCapacity) return oT[0] = oT[1] = oT[2] = NaN, !1;
        const zT = iT * KT;
        for (let kT = 0; kT < 3; kT++) oT[kT] = this.render[zT + kT] + cT.s.origin(IT, 0, kT);
        return !0
      }
      checkValid(TT) {
        return void 0 !== this.indexOf(TT)
      }
      isAlive(TT) {
        const oT = this.indexOf(TT);
        if (void 0 === oT) return null;
        if (this.ensureViews(), oT >= this.renderCapacity) return null;
        const IT = this.vis[oT];
        return 0 === IT ? null : 0 !== (IT & cT.fe.Alive)
      }
      getEntityType(TT) {
        const oT = this.indexOf(TT);
        return void 0 === oT ? this.isLocal("number" === typeof TT ? TT : +TT) ? "Player" : null : mT(this.kinds[oT])
      }
      spawned(TT, oT, IT) {
        if (oT >= 1048576) throw new xT.b(`entity ${TT} spawned at index ${oT}`);
        this.ensureIndex(oT), this.serverIds[oT] === TT && null !== this.idStr[oT] || (this.idStr[oT] = String(TT)), this.serverIds[oT] = TT, this.kinds[oT] = IT, this.indexById.set(TT, oT)
      }
      despawned(TT, oT) {
        let IT = !1;
        return this.indexById.get(TT) === oT && (this.indexById.delete(TT), IT = !0), oT < this.serverIds.length && this.serverIds[oT] === TT && (this.serverIds[oT] = cT.Yc, this.kinds[oT] = 0, this.idStr[oT] = null), IT
      }
      ensureIndex(TT) {
        const oT = this.serverIds.length;
        if (TT < oT) return;
        let IT = 2 * oT;
        for (; IT <= TT;) IT *= 2;
        const iT = new Int32Array(IT).fill(cT.Yc);
        iT.set(this.serverIds), this.serverIds = iT;
        const zT = new Uint16Array(IT);
        zT.set(this.kinds), this.kinds = zT;
        for (let kT = oT; kT < IT; kT++) this.idStr.push(null)
      }
      eventView() {
        const TT = this.memory().buffer;
        return TT !== this.eventsBuffer && (this.eventsBuffer = TT, this.events = new DataView(TT, this.eventsPtr, this.eventsLen)), this.events
      }
      reView() {
        const TT = this.memory().buffer;
        this.buffer = TT, this.viewPtr < 0 && (this.viewPtr = this.core.diT()), this.view = new DataView(TT, this.viewPtr, cT.s.BYTES), this.rereadDirectory()
      }
    }

    function wT(TT) {
      return TT >>> cT.c === cT.r.Item
    }

    function mT(TT) {
      var oT, IT;
      const iT = TT & cT.f;
      switch (TT >>> cT.c) {
        case cT.r.Lifeform:
          return null !== (oT = ST.h[iT]) && void 0 !== oT ? oT : null;
        case cT.r.Throwable:
          return null !== (IT = DT.f[iT]) && void 0 !== IT ? IT : null;
        case cT.r.Mesh:
          return "Mesh";
        case cT.r.Audio:
          return "AudioEntity";
        case cT.r.Item:
          return "Item";
        default:
          return null
      }
    }
    const eT = new TextDecoder;

    function RT(TT, oT, IT) {
      if (IT < LT.Jd.HEAD_BYTES) return null;
      const iT = TT.getUint32(oT, !0),
        zT = TT.getUint32(oT + 20, !0),
        kT = TT.getUint32(oT + 24, !0),
        WT = LT.Jd.HEAD_BYTES + (0, LT.se)(zT);
      if (iT !== LT.Jd.UPDATE && iT !== LT.Jd.REMOVE || zT > IT || WT + kT > IT) return null;
      const XT = (IT, iT) => eT.decode(new Uint8Array(TT.buffer, TT.byteOffset + oT + IT, iT)),
        BT = TT.getFloat64(oT + 12, !0);
      return {
        op: iT,
        level: TT.getFloat64(oT + 4, !0),
        durationMs: Number.isNaN(BT) ? null : BT,
        name: XT(LT.Jd.HEAD_BYTES, zT),
        icon: XT(WT, kT)
      }
    }

    function uT(TT, oT, IT) {
      return new xT.b(`event ${TT} at ${oT} of ${IT} bytes`)
    }
    var vT = IT(314),
      ET = IT(1193),
      fT = IT(37960),
      CT = IT(1766),
      jT = IT(39478),
      JT = IT(1724),
      UT = IT(38124),
      aT = IT(38147),
      YT = IT(38133),
      QT = IT(39403),
      OT = IT(2204),
      HT = IT(38120),
      nT = IT(38138);
    const qT = Math.max(cT.wb.BYTES, cT.mb.BYTES, cT.qb.BYTES);

    function ZT(TT) {
      if (!(0, nT.e)(TT)) return null;
      const oT = Number(TT);
      return (0 | oT) === oT ? oT : null
    }
    class lT {
      constructor(TT) {
        this.api = TT, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, HT.i)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.Wz = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], this.entityHeading = 0, this.localId = cT.Yc, this.localName = String(cT.Yc), this.scratch = null
      }
      readView() {
        this.defaultPoseRead = !1, this.Wz = null;
        const TT = this.api.queries.directorView() >= cT.wb.BYTES ? this.scratchView() : null;
        null !== TT && (this.defaultFov = (0, JT.B)(cT.wb.fov(TT, 0)), this.baseFov = (0, JT.B)(cT.wb.baseFov(TT, 0)), this.aspect = cT.wb.aspect(TT, 0), this.bodyHeading = cT.wb.bodyHeading(TT, 0))
      }
      getViewHeading() {
        return this.viewHeading
      }
      setViewHeading(TT) {
        this.viewHeading = TT
      }
      get localPlayerId() {
        const TT = cT.s.localId(this.api.apiView, 0);
        return TT !== this.localId && (this.localId = TT, this.localName = String(TT)), this.localName
      }
      getEntityPosition(TT) {
        return this.readEntity(TT) ? this.entityFeet : null
      }
      getEntityAimPoint(TT) {
        return this.readEntity(TT) ? this.entityAim : null
      }
      getEntityHeading(TT) {
        const oT = ZT(TT);
        if (null === oT) return null;
        const IT = cT.s.localId(this.api.apiView, 0);
        return oT === IT && IT !== cT.Yc ? this.viewHeading : this.readEntity(TT) ? this.entityHeading : null
      }
      raycastTerrain(TT, oT, IT) {
        const iT = this.api.queries.cameraSweep(TT[0], TT[1], TT[2], oT[0], oT[1], oT[2], IT);
        return iT < IT - 1e-6 ? iT : null
      }
      getDefaultPose() {
        if (this.defaultPoseRead) return this.defaultPose;
        this.defaultPoseRead = !0;
        const TT = this.defaultPose;
        TT.fov = this.defaultFov;
        const oT = this.api.queries.directorDefaultPose() >= cT.mb.BYTES ? this.scratchView() : null;
        if (null === oT) return TT;
        for (let IT = 0; IT < 3; IT++) TT.position[IT] = cT.mb.eye(oT, 0, IT);
        return TT.heading = cT.mb.heading(oT, 0), TT.pitch = cT.mb.pitch(oT, 0), TT
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
        const oT = ZT(TT);
        if (null === oT) return !1;
        if (oT === this.Wz) return this.entityLive;
        this.Wz = oT;
        const IT = this.api.queries.directorEntity(oT) >= cT.qb.BYTES ? this.scratchView() : null;
        if (this.entityLive = null !== IT, null === IT) return !1;
        for (let iT = 0; iT < 3; iT++) this.entityFeet[iT] = cT.qb.feet(IT, 0, iT), this.entityAim[iT] = this.entityFeet[iT];
        return this.entityAim[1] += cT.qb.eyeHeight(IT, 0), this.entityHeading = cT.qb.heading(IT, 0), !0
      }
      scratchView() {
        const TT = this.api.scratch(),
          oT = this.api.memory().buffer,
          IT = this.scratch;
        return null !== IT && IT.buffer === oT && IT.byteOffset === TT ? IT : (this.scratch = this.api.memoryData(TT, qT, 8, "the director's record"), this.scratch)
      }
    }
    const sT = {
        mode: "default"
      },
      tT = {
        show: () => {},
        clear: () => {}
      };

    function GT() {
      return "undefined" !== typeof document && "hidden" === document.visibilityState
    }
    class pT {
      constructor(TT) {
        this.options = TT, this.iL = void 0, this.director = void 0, this.latest = sT, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
          RC: 0,
          uC: 0
        }, this.pointedAt = {
          heading: 0,
          pitch: 0
        }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastCallMs = 0, this.answeredPose = !1, this.ek = new Int32Array(3 * cT.Od), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * cT.Od), this.iL = new lT(TT.api), this.director = new YT.b(this.iL)
      }
      settingsChanged(TT) {
        let oT = sT;
        if (TT.length > 0) try {
          oT = (0, QT.e)(TT)
        } catch {}
        this.latest = oT, this.pending = oT
      }
      call(TT, oT, IT, iT, zT, kT) {
        var WT, XT;
        let BT;
        this.holding = !1;
        try {
          BT = this.answer(TT, oT, IT, iT, zT, kT)
        } catch (LT) {
          var FT, ST;
          throw this.answeredPose = !1, null === (FT = (ST = this.options).showFacing) || void 0 === FT || FT.call(ST, null), LT
        }
        const DT = this.answeredPose && 0 === (iT & cT.sb.Held);
        return this.answeredPose = BT !== cT.kb.None, this.holding = this.answeredPose && !DT, null === (WT = (XT = this.options).showFacing) || void 0 === WT || WT.call(XT, this.holding ? this.facing : null), BT
      }
      holdsView() {
        return this.holding
      }
      answer(TT, oT, IT, iT, zT, kT) {
        this.calledThisFrame = !0, this.engaged = !0, this.lastCallMs = this.now();
        const {
          iL: WT
        } = this;
        WT.readView();
        if (0 !== (iT & cT.sb.Held) || WT.setViewHeading((0, UT.t)(WT.bodyHeading)), void 0 !== this.pending) {
          const TT = this.pending;
          this.pending = void 0, this.director.setSettings(TT), this.syncShownSettings()
        }
        this.readLook((0, OT.d)(oT), (0, OT.d)(IT), iT, (0, OT.d)(zT), (0, OT.d)(kT));
        const XT = this.director.update(TT / 1e3, this.look);
        if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !XT) return cT.kb.None;
        const [BT, FT, ST] = XT.position;
        if (0 === this.options.api.queries.directorPose(BT, FT, ST, (0, UT.t)(XT.heading), (0, UT.k)(XT.pitch), (0, JT.m)(XT.fov))) return cT.kb.None;
        if ("default" === this.director.getSettings().mode) return cT.kb.Pose;
        switch (this.facing) {
          case "camera":
            return cT.kb.FaceCamera;
          case "cursor":
            return cT.kb.FaceCursor;
          default:
            return cT.kb.FaceMovement
        }
      }
      afterFrame(TT) {
        TT ? (this.calledThisFrame || (this.holding = !1, this.engaged && this.idle()), this.calledThisFrame = !1) : this.centresLen > 0 && this.hidden() && this.now() - this.lastCallMs > 1e3 && this.setCentres(0), this.centresUnsent && this.sendCentres()
      }
      reset() {
        this.latest = sT, this.idle()
      }
      restart() {
        const TT = this.holding;
        this.idle(), this.holding = TT
      }
      idle() {
        var TT, oT;
        this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new YT.b(this.iL), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, null === (TT = (oT = this.options).showFacing) || void 0 === TT || TT.call(oT, null), this.setCentres(0)
      }
      syncShownSettings() {
        const TT = this.director.getSettings();
        if (TT === this.shownSettings) return;
        this.shownSettings = TT;
        const oT = (0, aT.e)(TT);
        this.facing = oT.facing, this.mouseTurns = oT.mouseTurns
      }
      readLook(TT, oT, IT, iT, zT) {
        const kT = this.look,
          WT = 0 !== (IT & cT.sb.LookPointed);
        if (null === this.mouseTurns && !WT) return kT.RC = 0, kT.uC = 0, void(kT.pointedAt = void 0);
        let XT;
        WT && (this.pointedAt.heading = iT, this.pointedAt.pitch = zT, XT = this.pointedAt);
        const {
          iL: BT
        } = this;
        BT.setViewHeading((0, aT.b)(BT.getViewHeading(), TT, oT, XT, "look" === this.mouseTurns, kT))
      }
      writeCentres(TT) {
        const oT = this.next,
          IT = Math.min(TT.length, cT.Od);
        for (let iT = 0; iT < IT; iT++)
          for (let IT = 0; IT < 3; IT++) oT[3 * iT + IT] = Math.floor(TT[iT][IT] / cT.z);
        this.setCentres(IT)
      }
      setCentres(TT) {
        const {
          ek: oT,
          next: IT
        } = this;
        let iT = TT === this.centresLen;
        for (let zT = 0; iT && zT < 3 * TT; zT++) iT = oT[zT] === IT[zT];
        iT || (oT.fill(0), oT.set(IT.subarray(0, 3 * TT)), this.centresLen = TT, this.centresUnsent = !0, this.sendCentres())
      }
      sendCentres() {
        const TT = this.options.cmd();
        null !== TT && (0, cT.Kf)(TT, 0, this.ek, this.centresLen) && (this.centresUnsent = !1)
      }
      screen() {
        var TT, oT, IT;
        return null !== (TT = null === (oT = (IT = this.options).screen) || void 0 === oT ? void 0 : oT.call(IT)) && void 0 !== TT ? TT : tT
      }
      hidden() {
        var TT;
        return (null !== (TT = this.options.isPageHidden) && void 0 !== TT ? TT : GT)()
      }
      now() {
        var TT, oT, IT;
        return null !== (TT = null === (oT = (IT = this.options).now) || void 0 === oT ? void 0 : oT.call(IT)) && void 0 !== TT ? TT : performance.now()
      }
    }
    var bT = IT(39586);
    const yT = cT.z * cT.z * cT.z,
      NT = Math.log2(cT.z),
      PT = cT.z - 1,
      dT = cT.L.BYTES / 4,
      VT = new Uint16Array(yT);

    function To(TT, oT, IT) {
      return TT * cT.z * cT.z + oT * cT.z + IT
    }
    class oo {
      constructor(TT) {
        this.chunk = TT
      }
      get data() {
        return this.chunk.gameVoxels()
      }
      index(TT, oT, IT) {
        return To(TT, oT, IT)
      }
    }
    class Io {
      constructor() {
        this.ids = new Map, this.cleared = new Set, this.layers = 0, this.patched = null, this.from = null
      }
    }
    class io {
      constructor(TT, oT, IT, iT) {
        this.table = TT, this.slot = oT, this.generation = IT, this.epoch = iT, this.jL = new oo(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = VT, this.dataPtr = 0, this.dataBuffer = null, this.dataStamp = -1, this.version = 0, this.layers = null, this.layersVersion = -1, this.layersPtr = -1, this.staleLayers = 0
      }
      get kK() {
        return this.voxelData(), this.version === this.shownCore && this.writeCount === this.shownWrites || (this.shownCore = this.version, this.shownWrites = this.writeCount, this.shownVersion = this.table.nextVersion()), this.shownVersion
      }
      get Qx() {
        const TT = this.gameVoxels(),
          oT = this.layers ??= new Uint16Array(cT.z);
        this.layersVersion === this.version && this.layersPtr === this.dataPtr || (this.layersVersion = this.version, this.layersPtr = this.dataPtr, this.staleLayers = -1);
        for (let IT = 0; 0 !== this.staleLayers; IT++) {
          const iT = 1 << IT;
          0 !== (this.staleLayers & iT) && (this.staleLayers &= ~iT, oT[IT] = zo(TT, IT))
        }
        return oT
      }
      voxelData() {
        return this.dataStamp === this.table.stamp && 0 !== this.data.length ? this.data : this.reread()
      }
      gameVoxels() {
        const TT = this.voxelData(),
          oT = this.writes;
        if (null === oT || 0 === oT.ids.size) return TT;
        if (oT.from !== TT) {
          const IT = oT.patched ??= new Uint16Array(yT);
          IT.set(TT);
          for (const [TT, iT] of oT.ids) IT[TT] = iT;
          oT.from = TT
        }
        return oT.patched
      }
      written(TT) {
        var oT;
        return null === (oT = this.writes) || void 0 === oT ? void 0 : oT.ids.get(TT)
      }
      hasWrites() {
        return null !== this.writes && 0 !== this.writes.ids.size
      }
      write(TT, oT, IT) {
        const iT = this.writes ??= new Io;
        iT.ids.set(TT, oT), IT && iT.cleared.add(TT), null !== iT.from && (iT.patched[TT] = oT);
        const zT = 1 << (TT >> NT & PT);
        iT.layers |= zT, this.staleLayers |= zT, this.writeCount++
      }
      clearWrites() {
        const TT = this.writes;
        null !== TT && (this.staleLayers |= TT.layers, TT.ids.clear(), TT.cleared.clear(), TT.layers = 0, TT.from = null)
      }
      dataCleared(TT) {
        var oT;
        return !0 === (null === (oT = this.writes) || void 0 === oT ? void 0 : oT.cleared.has(TT))
      }
      reread() {
        this.dataStamp = this.table.stamp;
        const TT = this.table.slotWords(),
          oT = this.slot * dT;
        if (this.epoch !== this.table.epoch || oT + dT > TT.length || 0 === TT[oT + 3] || TT[oT + 2] !== this.generation) return this.data = VT, this.dataPtr = 0, VT;
        this.version = TT[oT + 1];
        const IT = TT[oT + 0],
          iT = TT.buffer;
        return IT === this.dataPtr && iT === this.dataBuffer || (this.dataPtr = IT, this.dataBuffer = iT, this.data = this.table.voxelsAt(iT, IT)), this.data
      }
    }

    function zo(TT, oT) {
      const IT = TT[oT * cT.z];
      for (let iT = 0; iT < cT.z; iT++) {
        const zT = To(iT, oT, 0);
        for (let oT = 0; oT < cT.z; oT++)
          if (TT[zT + oT] !== IT) return 65535
      }
      return IT
    }
    const ko = new Uint32Array(0);

    function Wo(TT, oT, IT) {
      return To(TT & PT, oT & PT, IT & PT)
    }
    class Xo {
      constructor(TT, oT) {
        this.memory = TT, this.apiView = oT, this.chunks = new Map, this.written = [], this.lastKey = -1, this.lastChunk = void 0, this.slotsPtr = 0, this.slotsLen = 0, this.slotsBuffer = null, this.slots = ko, this.walkPtr = 0, this.walkLen = 0, this.walkBuffer = null, this.walk = ko, this.epoch = 0, this.stamp = 0, this.versions = 0, this.corruption = null
      }
      apply(TT, oT, IT, iT, zT, kT) {
        if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, kT === cT.M.ResetAll) return this.chunks.clear(), void this.epoch++;
        if (kT !== cT.M.Stored && kT !== cT.M.Unloaded) throw new xT.b(`ChunkSlot flags ${kT}`);
        const WT = (0, bT.b)(TT, oT, IT);
        if (WT < 0) return;
        if (kT === cT.M.Unloaded) return void this.chunks.delete(WT);
        const XT = this.chunks.get(WT);
        (null === XT || void 0 === XT ? void 0 : XT.slot) === iT && XT.generation === zT || this.chunks.set(WT, new io(this, iT, zT, this.epoch))
      }
      touch() {
        this.stamp++, this.clearOverlay(), this.viewWalkThrough()
      }
      refresh() {
        if (this.stamp++, this.corruption) throw this.corruption;
        const TT = this.apiView(),
          oT = cT.s.chunkSlotsPtr(TT, 0),
          IT = cT.s.chunkSlotsLen(TT, 0);
        oT === this.slotsPtr && IT === this.slotsLen || (this.slotsPtr = oT, this.slotsLen = IT, this.slotsBuffer = null, this.slotWords()), this.viewWalkThrough(), this.clearOverlay()
      }
      viewWalkThrough() {
        const TT = this.apiView(),
          oT = cT.s.walkThroughPtr(TT, 0),
          IT = cT.s.walkThroughLen(TT, 0);
        oT === this.walkPtr && IT === this.walkLen || (this.walkPtr = oT, this.walkLen = IT, this.walkBuffer = null, this.walkWords())
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
        var oT;
        TT !== this.slotsBuffer && (this.slotsBuffer = TT, this.slots = null !== (oT = (0, xT.q)(Uint32Array, TT, this.slotsPtr, this.slotsLen * dT, "the chunk directory")) && void 0 !== oT ? oT : ko);
        return this.slots
      }
      voxelsAt(TT, oT) {
        try {
          var IT;
          return null !== (IT = (0, xT.q)(Uint16Array, TT, oT, yT, "a chunk's voxels")) && void 0 !== IT ? IT : VT
        } catch (iT) {
          if (!(iT instanceof xT.b)) throw iT;
          return this.corruption ??= iT, VT
        }
      }
      chunk(TT, oT, IT) {
        var iT;
        return null !== (iT = this.chunks.get((0, bT.b)(TT, oT, IT))) && void 0 !== iT ? iT : null
      }
      isLoaded(TT, oT, IT) {
        return void 0 !== this.chunkAt(Math.floor(TT), Math.floor(oT), Math.floor(IT))
      }
      mS(TT, oT, IT) {
        var iT;
        const zT = Math.floor(TT),
          kT = Math.floor(oT),
          WT = Math.floor(IT),
          XT = this.chunkAt(zT, kT, WT);
        if (!XT) return 0;
        const BT = Wo(zT, kT, WT);
        return null !== (iT = XT.written(BT)) && void 0 !== iT ? iT : XT.voxelData()[BT]
      }
      setOverlay(TT, oT, IT, iT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const kT = this.chunkAt(TT, oT, IT);
        return !!kT && (kT.hasWrites() || this.written.push(kT), kT.write(Wo(TT, oT, IT), iT, zT), !0)
      }
      version(TT, oT, IT) {
        var iT, zT;
        return null !== (iT = null === (zT = this.chunks.get((0, bT.b)(TT, oT, IT))) || void 0 === zT ? void 0 : zT.kK) && void 0 !== iT ? iT : null
      }
      scan(TT, oT, IT, iT, zT, kT, WT, XT) {
        const BT = cT.z;
        let FT = 0;
        for (let ST = Math.floor(oT / BT); ST * BT < zT; ST++) {
          const DT = ST * BT,
            LT = Math.min(zT - DT, BT);
          for (let zT = Math.floor(TT / BT); zT * BT < iT; zT++) {
            const xT = zT * BT,
              cT = Math.min(iT - xT, BT);
            for (let iT = Math.floor(IT / BT); iT * BT < kT; iT++) {
              const KT = this.chunks.get((0, bT.b)(zT, ST, iT));
              if (!KT) continue;
              const MT = iT * BT,
                rT = Math.max(IT - MT, 0),
                AT = Math.min(kT - MT, BT),
                gT = KT.Qx,
                hT = KT.gameVoxels();
              for (let IT = Math.max(oT - DT, 0); IT < LT; IT++) {
                const oT = gT[IT];
                if (65535 === oT || 0 !== WT[oT]) {
                  FT++;
                  for (let oT = Math.max(TT - xT, 0); oT < cT; oT++) {
                    const TT = To(oT, IT, 0);
                    for (let iT = rT; iT < AT; iT++) {
                      const zT = hT[TT + iT];
                      0 !== WT[zT] && XT.push(xT + oT, DT + IT, MT + iT, zT)
                    }
                  }
                }
              }
            }
          }
        }
        return FT
      }
      dataCleared(TT, oT, IT) {
        var iT;
        const zT = Math.floor(TT),
          kT = Math.floor(oT),
          WT = Math.floor(IT);
        return !0 === (null === (iT = this.chunkAt(zT, kT, WT)) || void 0 === iT ? void 0 : iT.dataCleared(Wo(zT, kT, WT)))
      }
      isWalkThrough(TT) {
        if (!Number.isInteger(TT) || TT < 0 || TT > 65535) return !1;
        const oT = this.walkWords(),
          IT = TT >>> 5;
        return IT < oT.length && 1 === (oT[IT] >>> (31 & TT) & 1)
      }
      walkWords() {
        const TT = this.memory().buffer;
        var oT;
        TT !== this.walkBuffer && (this.walkBuffer = TT, this.walk = null !== (oT = (0, xT.q)(Uint32Array, TT, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== oT ? oT : ko);
        return this.walk
      }
      chunkAt(TT, oT, IT) {
        if ((0 | TT) !== TT || (0 | oT) !== oT || (0 | IT) !== IT) return;
        const iT = (0, bT.b)(TT >> NT, oT >> NT, IT >> NT);
        return iT !== this.lastKey && (this.lastKey = iT, this.lastChunk = this.chunks.get(iT)), this.lastChunk
      }
    }
    var Bo = IT(37483),
      Fo = IT(36753),
      So = IT(35732),
      Do = IT(35618),
      Lo = IT(8682),
      xo = IT(38071),
      co = IT(193);
    const Ko = ["ambient", "cars", "crowd", "customGame_horror", "dig", "fire", "fishing", "gameStart", "gunMisc", "gunPistol", "gunRifle", "gunSemiAutomatic", "gunShotgun", "gunSubmachineGun", "mob", "note", "phoneAndMoney", "police", "random", "rpg", "step", "survivalFactory", "town"],
      Mo = [
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
      ro = Mo.map((TT => {
        let [oT] = TT;
        return oT
      })),
      Ao = Uint8Array.from(Mo, (TT => {
        let [, oT] = TT;
        return oT
      })),
      go = {
        semi_automatic: 11,
        submachine: 13,
        rifle: 10,
        pistol: 9,
        shotgun: 12
      },
      ho = 8;
    var wo = IT(35729),
      mo = IT(250);
    const eo = 2 ** Ko.length - 1;
    class Ro {
      constructor(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : mo.b;
        this.sheet = TT, this.onError = oT, this.idle = IT, this.queue = [], this.asked = 0, this.cancelIdle = null, this.gen = 0, this.onIdle = TT => {
          this.cancelIdle = null;
          try {
            if (TT.timeRemaining() >= 1) {
              let TT = this.queue.shift();
              for (; void 0 !== TT && !this.load(TT);) TT = this.queue.shift()
            }
          } catch (oT) {
            this.onError(oT)
          } finally {
            this.schedule()
          }
        }
      }
      preload(TT) {
        const oT = TT & eo & ~this.asked;
        if (0 !== oT) {
          this.asked |= oT;
          for (let TT = 0; TT < Ko.length; TT++) oT & 1 << TT && this.queue.push(TT);
          this.schedule()
        }
      }
      cancel() {
        var TT;
        this.queue.length = 0, this.asked = 0, this.gen++, null === (TT = this.cancelIdle) || void 0 === TT || TT.call(this), this.cancelIdle = null
      }
      schedule() {
        null === this.cancelIdle && this.queue.length > 0 && (this.cancelIdle = this.idle(this.onIdle))
      }
      load(TT) {
        const oT = this.sheet(TT, !1),
          IT = this.sheet(TT, !0),
          [iT, zT] = "unloaded" === oT.state() && "unloaded" !== IT.state() ? [IT, oT] : [oT, IT],
          kT = this.gen,
          WT = () => {
            try {
              kT === this.gen && "unloaded" === zT.state() && zT.load()
            } catch (TT) {
              this.onError(TT)
            }
          },
          XT = iT.state();
        return "unloaded" === XT ? (iT.once("load", WT), iT.load(), !0) : "unloaded" === zT.state() && ("loading" === XT ? (iT.once("load", WT), !1) : (zT.load(), !0))
      }
    }
    var uo = IT(39703);
    const vo = {
        coneInnerAngle: 360,
        coneOuterAngle: 360,
        coneOuterGain: 0,
        distanceModel: "inverse",
        maxDistance: 1e3,
        panningModel: "HRTF",
        rolloffFactor: 1
      },
      Eo = co.c.Xw * co.c.playerEyeToHeightRatio,
      fo = [0, 0, -1, 0, 1, 0],
      Co = Ko.indexOf("note");

    function jo(TT) {
      return TT >= 0 ? Math.min(1, TT) : 0
    }

    function Jo(TT) {
      var oT;
      let IT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
      const iT = function(TT) {
        let oT = 0,
          IT = ro.length;
        for (; oT < IT;) {
          const iT = oT + IT >>> 1;
          ro[iT] < TT ? oT = iT + 1 : IT = iT
        }
        return oT
      }(TT);
      if ("" === TT || null === (oT = ro[iT]) || void 0 === oT || !oT.startsWith(TT)) return -1;
      if (ro[iT] === TT) return iT;
      let zT = iT + 1;
      for (; zT < ro.length && ro[zT].startsWith(TT);) zT++;
      return iT + Math.floor(IT() * (zT - iT))
    }
    class Uo {
      constructor(TT, oT, IT, iT, zT) {
        this.group = TT, this.loudness = oT, this.startMs = IT, this.howl = iT, this.host = zT, this.id = 0, this.direct = !1
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
    class ao {
      constructor(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          iT = arguments.length > 3 ? arguments[3] : void 0;
        this.createHowl = TT, this.listener = oT, this.now = IT, this.errors = 0, this.sheets = new Map, this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader = void 0, this.voices = new wo.d, this.failed = new Set, this.started = new Set, this.voiceHost = {
          alive: TT => this.aliveVoice(TT),
          started: TT => this.started.has(TT),
          drop: TT => {
            var oT;
            null === (oT = this.live.get(TT)) || void 0 === oT || oT.howl.stop(TT), this.forget(TT)
          }
        }, this.handlers = {
          playSound: (TT, oT, IT, iT, zT, kT, WT, XT, BT) => {
            if (iT >= ro.length) return;
            const FT = 0 !== (zT & cT.Yd.Loop);
            zT & cT.Yd.TwoD ? this.start(iT, !1, WT, kT, XT, FT) : this.startSpatial(iT, WT, kT, XT, FT, TT, oT, IT, BT, this.earDistSq(TT, oT, IT))
          },
          soundPos: (TT, oT, IT, iT) => {
            const zT = this.core.get(iT);
            var kT;
            void 0 !== zT && (null === (kT = this.live.get(zT)) || void 0 === kT || kT.howl.pos(IT, oT, TT, zT))
          },
          soundSet: (TT, oT, IT, iT) => {
            const zT = this.core.get(TT),
              kT = void 0 === zT ? void 0 : this.live.get(zT);
            void 0 !== zT && kT && (this.setRel(zT, oT), kT.rate = IT, kT.howl.rate(IT, zT), kT.spatial && kT.howl.pannerAttr({
              refDistance: iT
            }, zT))
          },
          soundFade: (TT, oT, IT, iT) => {
            const zT = this.core.get(TT);
            void 0 !== zT && this.fade(zT, oT, IT, 0 !== (iT & cT.Xd.StopAfter))
          },
          soundStop: TT => {
            const oT = this.core.get(TT);
            var IT;
            void 0 !== oT && (null === (IT = this.live.get(oT)) || void 0 === IT || IT.howl.stop(oT), this.forget(oT))
          },
          soundReset: () => {
            this.stopCore()
          }
        }, this.loader = new Ro(((TT, oT) => this.sheet(TT, oT)), (TT => {
          this.errors++, console.error("Audio preload failed", TT)
        }), iT)
      }
      prepare() {
        for (let TT = 0; TT < Ko.length; TT++) this.sheet(TT, !1), this.sheet(TT, !0)
      }
      preload(TT) {
        this.loader.preload(TT)
      }
      cancelPreload() {
        this.loader.cancel()
      }
      onAudioEvent(TT, oT, IT, iT) {
        if (TT < cT.q.PlaySound || TT > cT.q.SoundReset) return !1;
        try {
          return (0, cT.je)(TT, oT, IT, iT, this.handlers)
        } catch (zT) {
          return this.errors++, console.error("Audio event failed", zT), !0
        }
      }
      applyListener(TT) {
        const oT = this.nextPose;
        for (let iT = 0; iT < 3; iT++) oT[2 - iT] = cT.v.listener(TT, 0, iT), oT[5 - iT] = cT.v.forward(TT, 0, iT), oT[8 - iT] = cT.v.up(TT, 0, iT);
        0 === oT[3] && 0 === oT[4] && 0 === oT[5] && oT.set(this.posed ? this.pose.subarray(3) : fo, 3);
        for (let iT = 0; iT < 9; iT++)
          if (!Number.isFinite(oT[iT])) return;
        const IT = this.pose;
        if (this.posed) {
          let TT = !0;
          for (let iT = 0; iT < 9 && TT; iT++) TT = oT[iT] === IT[iT];
          if (TT) return
        }
        this.listener.apply(oT) && (IT.set(oT), this.posed = !0)
      }
      playGame(TT, oT, IT, iT, zT, kT, WT) {
        const XT = Jo(TT);
        if (XT < 0) return uo.b;
        if (!IT) {
          const {
            howl: TT,
            id: IT
          } = this.start(XT, !1, oT, 0, 1, WT);
          return this.gameSound(TT, IT, !1)
        }
        const BT = IT[0],
          FT = IT[1] + Eo,
          ST = IT[2];
        if (!Number.isFinite(BT) || !Number.isFinite(FT) || !Number.isFinite(ST)) return uo.b;
        let DT;
        if (iT) {
          const TT = BT - iT[0],
            oT = FT - iT[1],
            IT = ST - iT[2];
          if (DT = TT * TT + oT * oT + IT * IT, DT > zT * zT) return uo.b
        } else DT = this.earDistSq(BT, FT, ST);
        const LT = this.startSpatial(XT, oT, 0, 1, WT, BT, FT, ST, kT, DT);
        return LT ? this.gameSound(LT.howl, LT.id, !0) : uo.b
      }
      setMaster(TT, oT) {
        this.level = jo(TT);
        const IT = oT ? this.level : 0;
        if (IT !== this.master) {
          this.master = IT;
          for (const [TT, oT] of this.live) oT.fadeMs = 0, oT.gain = oT.rel * this.master, oT.howl.volume(oT.gain, TT)
        }
      }
      stopCore() {
        for (const oT of [...this.core.values()]) {
          var TT;
          null === (TT = this.live.get(oT)) || void 0 === TT || TT.howl.stop(oT)
        }
        this.core.clear()
      }
      stopAll() {
        this.cancelPreload();
        for (const [TT, oT] of [...this.live]) oT.howl.stop(TT), this.forget(TT);
        this.core.clear()
      }
      gameSound(TT, oT, IT) {
        const iT = {
          stop: () => (this.live.has(oT) && TT.stop(oT), iT),
          fade: (TT, IT, zT) => {
            var kT, WT;
            const XT = this.level > 0 ? IT / this.level : IT > 0 && null !== (kT = null === (WT = this.live.get(oT)) || void 0 === WT ? void 0 : WT.rel) && void 0 !== kT ? kT : 0;
            return this.fade(oT, XT, zT, !1), iT
          },
          rate: IT => {
            const zT = this.live.get(oT);
            return zT && (zT.rate = function(TT) {
              return TT > 0 && TT < 1 / 0 ? TT : 1
            }(IT), TT.rate(zT.rate, oT)), iT
          },
          getVolume: () => {
            var TT, IT;
            return (null !== (TT = null === (IT = this.live.get(oT)) || void 0 === IT ? void 0 : IT.rel) && void 0 !== TT ? TT : 0) * this.level
          },
          getRelativeVolume: () => {
            var TT, IT;
            return null !== (TT = null === (IT = this.live.get(oT)) || void 0 === IT ? void 0 : IT.rel) && void 0 !== TT ? TT : 0
          },
          setRelativeVolume: TT => (this.setRel(oT, TT), iT),
          setPannerAttr: zT => {
            if (IT && this.live.has(oT)) {
              const IT = {
                ...vo,
                refDistance: So.k
              };
              for (const [TT, oT] of Object.entries(zT)) "number" !== typeof oT && "string" !== typeof oT || (IT[TT] = oT);
              TT.pannerAttr({
                coneOuterAngle: IT.coneOuterAngle
              }, oT), TT.pannerAttr(IT, oT)
            }
            return iT
          },
          setPosition: zT => (IT && this.live.has(oT) && Number.isFinite(zT[0] + zT[1] + zT[2]) && TT.pos(zT[2], zT[1], zT[0], oT), iT)
        };
        return iT
      }
      startSpatial(TT, oT, IT, iT, zT, kT, WT, XT, BT, FT) {
        const ST = this.sheet(Ao[TT], !0);
        let DT = null;
        if (!zT) {
          if (this.failed.has(ST)) return null;
          const IT = Ao[TT] === Co ? null : (0, wo.j)(ro[TT]),
            iT = (0, wo.f)(jo(oT), Math.sqrt(FT), BT);
          if (DT = new Uo(IT, iT, this.now(), ST, this.voiceHost), !this.voices.admit(DT)) return null
        }
        const LT = this.start(TT, !0, oT, IT, iT, zT);
        return DT && (DT.id = LT.id, DT.direct = "loaded" === ST.state() && !ST._playLock), ST.pannerAttr({
          coneOuterAngle: 360
        }, LT.id), ST.pannerAttr({
          ...vo,
          refDistance: BT
        }, LT.id), ST.pos(XT, WT, kT, LT.id), LT
      }
      aliveVoice(TT) {
        const oT = this.live.get(TT);
        if (!oT) return;
        const IT = oT.howl._soundById(TT);
        if (IT && !IT._ended) return oT;
        this.forget(TT)
      }
      earDistSq(TT, oT, IT) {
        if (!this.posed) return 0;
        const iT = TT - this.pose[2],
          zT = oT - this.pose[1],
          kT = IT - this.pose[0];
        return iT * iT + zT * zT + kT * kT
      }
      start(TT, oT, IT, iT, zT, kT) {
        const WT = jo(IT),
          XT = this.sheet(Ao[TT], oT);
        "unloaded" === XT.state() && XT.load();
        const BT = XT.play(ro[TT]),
          FT = WT * this.master;
        return XT.volume(FT, BT), this.live.set(BT, {
          howl: XT,
          rel: WT,
          gain: FT,
          fadeFrom: FT,
          fadeAt: 0,
          fadeMs: 0,
          rate: zT,
          handle: iT,
          spatial: oT,
          stopTimer: void 0
        }), 0 !== iT && this.core.set(iT, BT), 1 !== zT && XT.rate(zT, BT), kT && XT.loop(!0, BT), {
          howl: XT,
          id: BT
        }
      }
      sheet(TT, oT) {
        const IT = 2 * TT + (oT ? 1 : 0);
        let iT = this.sheets.get(IT);
        if (!iT) {
          const zT = this.createHowl(Ko[TT], oT);
          zT.on("end", (TT => {
            zT.loop(TT) || this.forget(TT)
          })), zT.on("stop", (TT => {
            this.forget(TT)
          })), zT.on("play", (TT => {
            this.live.has(TT) && this.started.add(TT)
          })), zT.on("loaderror", (TT => {
            if ("loaded" !== zT.state()) {
              this.failed.add(zT);
              for (const [TT, oT] of this.live) oT.howl === zT && this.forget(TT)
            } else "number" === typeof TT && this.forget(TT)
          })), this.sheets.set(IT, zT), iT = zT
        }
        return iT
      }
      setRel(TT, oT) {
        const IT = this.live.get(TT);
        IT && (Yo(IT), IT.fadeMs = 0, IT.rel = jo(oT), IT.gain = IT.rel * this.master, IT.howl.volume(IT.gain, TT))
      }
      fade(TT, oT, IT, iT) {
        const zT = this.live.get(TT);
        if (!zT) return;
        Yo(zT);
        const {
          howl: kT
        } = zT, WT = this.gainNow(zT);
        zT.rel = jo(oT), zT.gain = zT.rel * this.master;
        const XT = IT > 0 ? Math.min(IT, 65535) : 0,
          BT = 0 === XT || WT === zT.gain;
        zT.fadeMs = BT ? 0 : XT, BT ? kT.volume(zT.gain, TT) : (zT.fadeFrom = WT, zT.fadeAt = this.now(), kT.fade(WT, zT.gain, XT, TT)), iT && (BT ? kT.stop(TT) : zT.stopTimer = setTimeout((() => {
          zT.stopTimer = void 0, kT.stop(TT)
        }), XT))
      }
      gainNow(TT) {
        if (TT.fadeMs > 0) {
          const oT = (this.now() - TT.fadeAt) / TT.fadeMs;
          if (oT < 1) return TT.fadeFrom + (TT.gain - TT.fadeFrom) * Math.max(0, oT);
          TT.fadeMs = 0
        }
        return TT.gain
      }
      forget(TT) {
        this.started.delete(TT);
        const oT = this.live.get(TT);
        oT && (Yo(oT), this.live.delete(TT), 0 !== oT.handle && this.core.get(oT.handle) === TT && this.core.delete(oT.handle))
      }
    }

    function Yo(TT) {
      void 0 !== TT.stopTimer && (clearTimeout(TT.stopTimer), TT.stopTimer = void 0)
    }
    var Qo = IT(39386),
      Oo = IT(38080);
    class Ho {
      constructor(TT, oT, IT, iT) {
        this.key = TT, this.model = oT, this.host = iT, this.fD = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.WzT = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, this.tailView = void 0, this.tailCut = new Uint8Array(0), this.made = !1, this.Ec = !1, this.fD = Math.max(1, Math.ceil(IT)), this.records = new Float32Array(this.fD * Bo.d), this.isDirty = new Uint8Array(this.fD), this.tail = new Uint8Array(this.fD * cT.nc.Bytes), this.tailView = new DataView(this.tail.buffer), this.make(iT.cmd())
      }
      setOrigin(TT, oT, IT) {
        this.origin[0] = TT, this.origin[1] = oT, this.origin[2] = IT
      }
      markDirty(TT) {
        !this.Ec && TT >= 0 && TT < this.fD && TT < cT.nc.Max && this.Nc(TT, TT + 1)
      }
      commit(TT) {
        if (this.Ec) return;
        (TT = Math.min(Math.max(Math.floor(TT), 0), this.fD, cT.nc.Max)) > this.count && this.Nc(this.count, TT), this.count = TT;
        const {
          origin: oT,
          sentOrigin: IT,
          dirtyList: iT
        } = this, zT = this.WzT !== TT, kT = IT[0] !== oT[0] || IT[1] !== oT[1] || IT[2] !== oT[2];
        if (0 === iT.length && !zT && !kT) return;
        const WT = this.host.cmd();
        if (!WT || !this.make(WT)) return;
        const XT = iT.length,
          {
            records: BT,
            tailView: FT
          } = this;
        for (let ST = 0; ST < XT; ST++) {
          const TT = iT[ST],
            oT = TT * Bo.d,
            IT = ST * cT.nc.Bytes,
            zT = 0 !== BT[oT + Bo.h] ? cT.nc.Hidden : 0;
          FT.setUint32(IT, (TT | zT) >>> 0, !0), FT.setFloat32(IT + 4, BT[oT], !0), FT.setFloat32(IT + 8, BT[oT + 1], !0), FT.setFloat32(IT + 12, BT[oT + 2], !0)
        }
        if ((0, cT.Oe)(WT, 0, this.key, TT, oT, XT, this.tailOf(XT))) {
          for (let TT = 0; TT < XT; TT++) this.isDirty[iT[TT]] = 0;
          iT.length = 0, this.WzT = TT, IT[0] = oT[0], IT[1] = oT[1], IT[2] = oT[2]
        }
      }
      grow(TT) {
        (TT = Math.ceil(TT)) <= this.fD || this.Ec || (this.records = (0, Oo.c)(this.records, new Float32Array(TT * Bo.d)), this.isDirty = (0, Oo.c)(this.isDirty, new Uint8Array(TT)), this.tail = new Uint8Array(TT * cT.nc.Bytes), this.tailView = new DataView(this.tail.buffer), this.fD = TT)
      }
      dispose() {
        this.Ec || (this.Ec = !0, this.host.Ec(this, this.made ? this.key : null))
      }
      make(TT) {
        if (!this.made && TT) {
          const {
            item: oT,
            scale: IT,
            yaw: iT
          } = this.model;
          this.made = (0, cT.Ve)(TT, 0, this.key, oT, IT, iT)
        }
        return this.made
      }
      tailOf(TT) {
        const oT = TT * cT.nc.Bytes;
        return this.tailCut.buffer === this.tail.buffer && this.tailCut.length === oT || (this.tailCut = this.tail.subarray(0, oT)), this.tailCut
      }
      Nc(TT, oT) {
        const {
          dirtyList: IT,
          isDirty: iT
        } = this;
        for (let zT = TT; zT < oT; zT++) 0 === iT[zT] && (iT[zT] = 1, IT.push(zT))
      }
    }
    var no = IT(609);
    class qo {
      constructor(TT) {
        this.keys = 0, this.live = new Set, this.owing = new Set, this.host = void 0, this.host = {
          cmd: TT,
          owes: TT => {
            this.owing.add(TT)
          },
          settled: (TT, oT) => {
            this.owing.delete(TT), oT && this.live.delete(TT)
          }
        }
      }
      create(TT, oT) {
        if (IT = TT, !no.j.includes(IT)) return null;
        var IT;
        const iT = new Zo(++this.keys, ST.h.indexOf(TT), oT, this.host);
        return this.live.add(iT), iT
      }
      disposeAll() {
        for (const TT of [...this.live]) TT.dispose()
      }
      flush() {
        if (0 === this.owing.size) return;
        const TT = this.host.cmd();
        for (const oT of this.owing)
          if (!oT.sync(TT)) return
      }
    }
    class Zo {
      constructor(TT, oT, IT, iT) {
        this.key = TT, this.lifeform = oT, this.scale = IT, this.host = iT, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.owed = 1, this.Ec = !1, this.sync()
      }
      setPose(TT, oT) {
        this.Ec || (this.feet[0] = TT[0], this.feet[1] = TT[1], this.feet[2] = TT[2], this.yaw = oT, this.owed |= 2, this.sync())
      }
      setVisible(TT) {
        this.Ec || TT === this.visible || (this.visible = TT, this.owed |= 4, this.sync())
      }
      dispose() {
        this.Ec || (this.Ec = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
      }
      sync() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.host.cmd();
        return this.write(TT) ? (this.host.settled(this, this.Ec), !0) : (this.host.owes(this), !1)
      }
      write(TT) {
        if (!TT) return this.owed = 0, !0;
        if (1 & this.owed) {
          if (!(0, cT.Ye)(TT, 0, this.key, this.lifeform, this.scale)) return !1;
          this.owed &= -2
        }
        const oT = (2 & this.owed ? cT.Qc.Pose : 0) | (4 & this.owed ? cT.Qc.Visible : 0);
        if (0 !== oT) {
          if (!(0, cT.Xe)(TT, 0, this.key, oT, this.visible ? 1 : 0, this.feet, this.yaw)) return !1;
          this.owed &= -7
        }
        if (8 & this.owed) {
          if (!(0, cT.We)(TT, 0, this.key)) return !1;
          this.owed = 0
        }
        return !0
      }
    }
    var so = IT(39839);

    function to(TT, oT, IT, iT) {
      return (0, so.b)(), (0, cT.Of)(TT, oT, IT, iT)
    }
    var Go = IT(38089),
      po = IT(39379);
    const bo = [0, 0, 0],
      yo = [0, 0, 0],
      No = [0, 0, 0],
      Po = [0, 0, 0],
      Vo = {
        origin: [0, 0, 0],
        direction: [0, 0, 1]
      },
      TI = [0, 0, 0],
      oI = [0, 0],
      II = [1, 1, 1],
      iI = 1 / 3;
    const zI = Fo.c;

    function kI(TT) {
      const oT = Fo.b[TT],
        IT = oT && Fo.c[oT.mainMultiblock];
      return IT && {
        main: IT,
        x: oT.compX,
        y: oT.compY,
        z: oT.compZ
      }
    }

    function WI(TT) {
      if (null === TT || void 0 === TT) return cT.Yc;
      const oT = +TT;
      return Number.isInteger(oT) && oT >= -2147483648 && oT <= 2147483647 && String(oT) === String(TT) ? oT : cT.Yc
    }

    function XI(TT, oT, IT) {
      return (0, cT.Wf)(TT, 0, oT, null !== IT && void 0 !== IT ? IT : Number.NaN)
    }
    class BI {
      constructor(TT) {
        this.deps = TT, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new Go.b((() => this.tables.getClientOption("forcedCameraDirectionTransitionMs")), (TT => {
          var oT, IT;
          null === (oT = (IT = this.deps).setLocalOptions) || void 0 === oT || oT.call(IT, TT)
        })), this.mobModels = new qo((() => this.deps.cmd())), this.owedFrees = [], this.pendingStyle = void 0, this.pendingFar = void 0, this.farSet = !1, this.routeMesh = 0, this.routeOffset = 0, this.routeLook = "", this.routeSlide = {
          uvOffset: [0, 0]
        }, this.poolHost = {
          cmd: () => this.deps.cmd(),
          Ec: (TT, oT) => {
            this.livePools.delete(TT), null !== oT && (this.owedFrees.push(oT), this.flushOwed())
          }
        }, this.api = TT.api, this.live = TT.live, this.chunks = TT.chunks, this.items = TT.items, this.tables = TT.tables
      }
      isLocal(TT) {
        return null !== TT && void 0 !== TT && +TT === this.api.localId
      }
      assertLocal(TT, oT) {
        if (!this.isLocal(TT)) throw new Error(`Attempted to ${oT} for a player that is not the local player`)
      }
      Wm(TT) {
        const oT = this.api.Wm(TT);
        if (!oT) throw new Error(`Entity ${TT} has no replicated position`);
        return oT
      }
      checkValid(TT) {
        return !!this.deps.isSessionLive() && (null === TT || void 0 === TT || this.api.checkValid(TT))
      }
      isAlive(TT) {
        return !1 !== this.api.isAlive(TT)
      }
      getItemStat(TT, oT, IT) {
        return this.isLocal(TT) || null !== TT && "Player" === this.api.getEntityType(TT) ? this.tables.getItemStat(oT, IT) : this.tables.getDefaultItemStat(oT, IT)
      }
      getClientOption(TT, oT) {
        return this.assertLocal(TT, "get a client option"), this.tables.getClientOption(oT)
      }
      openShop(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          IT = arguments.length > 2 ? arguments[2] : void 0;
        this.assertLocal(TT, "open shop"), WT.h.XM("showShopFromServer", {
          toggle: oT,
          gI: IT
        }, !0)
      }
      sendMessage(TT, oT, IT) {
        this.assertLocal(TT, "send a message");
        const iT = "string" === typeof oT ? [{
          str: oT,
          style: IT
        }] : oT;
        WT.h.XM("chat", {
          content: iT
        }, !0)
      }
      getEntityType(TT) {
        return this.api.getEntityType(TT)
      }
      getEntityName(TT) {
        const oT = WI(TT);
        return oT === cT.Yc ? void 0 : (0, Qo.i)(this.api, oT)
      }
      hasEffect(TT, oT) {
        const IT = WI(TT);
        return IT !== cT.Yc && (0, Qo.g)(this.api, IT, oT)
      }
      getMetaInfo(TT) {
        return this.tables.getMetaInfo(TT)
      }
      getPlayerDbId(TT) {
        return this.assertLocal(TT, "get a DB ID"), this.deps.playerDbId()
      }
      getBlockData(TT, oT, IT) {
        if (!this.chunks.dataCleared(TT, oT, IT)) return (0, Qo.d)(this.api, TT, oT, IT)
      }
      gC(TT, oT, IT, iT) {
        this.setBlockId(TT, oT, IT, this.tables.getItemId(iT))
      }
      setOtherEntitySetting(TT, oT, IT, iT) {
        if (!this.isLocal(TT)) throw new Error("Attempted to set an other-entity setting for a player that is not the local player");
        if (!Object.hasOwn(cT.ed, IT)) throw new Error(`Unknown other-entity setting ${IT}`);
        const zT = cT.ed[IT],
          kT = WI(oT);
        if (kT === cT.Yc || !this.deps.beforeWrite()) return;
        const WT = (0, QT.f)(iT);
        if (WT.length > 16384) throw new Error(`The other-entity setting ${IT}'s value is over 16384 bytes`);
        const XT = this.api.memoryView(Uint8Array, this.api.scratch(), WT.length, "set_other_entity_setting's value");
        XT && (XT.set(WT), this.api.queries.setOtherEntitySetting(kT, zT, WT.length))
      }
      getPositionView(TT) {
        return this.live.position(+TT)
      }
      readDrawnPosition(TT, oT) {
        return this.api.readDrawnPosition(WI(TT), oT)
      }
      getDrawnHeading(TT) {
        const oT = WI(TT),
          IT = (oT === cT.Yc ? 0 : this.api.queries.directorEntity(oT)) >= cT.qb.BYTES ? this.api.memoryData(this.api.scratch(), cT.qb.BYTES, 8, "getDrawnHeading's DirectorEntity") : null;
        if (!IT) return null;
        if (1 === cT.qb.headingIsDrawn(IT, 0)) return cT.qb.heading(IT, 0);
        const iT = this.api.apiView;
        return this.isLocal(TT) && 0 === (cT.s.playerFlags(iT, 0) & cT.Cd.FreeCam) ? cT.s.heading(iT, 0) : null
      }
      getLocalPlayerMovement() {
        const TT = cT.s.playerFlags(this.api.apiView, 0);
        return 0 === (TT & cT.Cd.Replay) && this.api.readDrawnPosition(this.api.localId, No) ? {
          onGround: 0 !== (TT & cT.Cd.OnGround),
          jumpHeld: 0 !== (TT & cT.Cd.JumpHeld)
        } : null
      }
      eoT(TT) {
        return this.isLocal(TT) ? this.items.kS() : null
      }
      getInventoryItems() {
        return this.items.playerItems()
      }
      getHeldGunInaccuracy() {
        var TT, oT;
        return "Gun" === (null === (TT = this.aliveHeld()) || void 0 === TT || null === (oT = TT.typeObj) || void 0 === oT ? void 0 : oT.type) ? this.items.inaccuracy : null
      }
      aliveHeld() {
        return !1 === this.api.isAlive(this.api.localId) ? null : this.items.kS()
      }
      isCrosshairShown() {
        var TT, oT;
        const IT = (0, Do.b)(iT.c.get("crosshairGameView"), iT.c.get("crosshairShownOverride"));
        if (null !== IT) return IT;
        const zT = null === (TT = this.aliveHeld()) || void 0 === TT ? void 0 : TT.typeObj,
          kT = "Gun" === (null === zT || void 0 === zT ? void 0 : zT.type),
          WT = kT || !0 === (null === zT || void 0 === zT ? void 0 : zT.showsAimingUi),
          XT = 0 === (cT.s.playerFlags(this.api.apiView, 0) & cT.Cd.ZoomFirstPerson),
          BT = null !== (oT = this.tables.getClientOption("gunshotOrigin")) && void 0 !== oT ? oT : null;
        return (0, Do.g)({
          gun: kT,
          aimable: WT
        }, XT, (0, Lo.d)(), BT)
      }
      setCrosshairShown(TT) {
        iT.c.set({
          crosshairShownOverride: TT
        })
      }
      getInventoryFreeSlotCount(TT) {
        return this.isLocal(TT) ? this.items.freeSlots() : null
      }
      getSelectedInventorySlotI(TT) {
        return this.isLocal(TT) ? this.items.selectedSlot : null
      }
      getItemSlot(TT, oT) {
        return this.isLocal(TT) ? this.items.slot(oT) : null
      }
      swapInventorySlots(TT, oT) {
        return this.items.swap(TT, oT)
      }
      isPlayerCrouching(TT) {
        if (this.isLocal(TT)) return 0 !== (cT.s.playerFlags(this.api.apiView, 0) & cT.Cd.Crouching);
        const oT = WI(TT);
        return oT !== cT.Yc && 1 === this.api.queries.entityCrouching(oT)
      }
      getMiningBlock() {
        return this.live.breakingPosition()
      }
      isMining() {
        return 0 !== (cT.s.playerFlags(this.api.apiView, 0) & cT.Cd.AttemptingBreak)
      }
      getTargetedBlock() {
        return this.live.ITT()
      }
      getActionRay() {
        const TT = this.api.apiView;
        for (let oT = 0; oT < 3; oT++) Vo.origin[oT] = cT.s.MTT(TT, 0, oT), Vo.direction[oT] = cT.s.actionDir(TT, 0, oT);
        return Vo
      }
      canModifyBlockAt(TT, oT, IT) {
        return 1 === this.api.queries.canModify(TT, oT, IT)
      }
      isSolidToPlayerBlockId(TT) {
        return this.tables.isSolidBlockId(TT) && !this.chunks.isWalkThrough(TT)
      }
      blockNameToBlockId(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.tables.blockNameToBlockId(TT, oT)
      }
      blockIdToBlockName(TT) {
        return this.tables.nameOfId(TT)
      }
      lTT(TT, oT, IT, iT, zT) {
        return 1 === this.api.queries.terrainBlocked(iT, TT, oT, IT, WI(null !== zT && void 0 !== zT ? zT : null))
      }
      getChunkVersion(TT, oT, IT) {
        return this.chunks.version(TT, oT, IT)
      }
      scanBlocks(TT, oT, IT, iT, zT, kT, WT, XT) {
        return this.chunks.scan(TT, oT, IT, iT, zT, kT, WT, XT)
      }
      isBlockInLoadedChunk(TT, oT, IT) {
        return this.chunks.isLoaded(TT, oT, IT)
      }
      getBlockId(TT, oT, IT) {
        return this.chunks.mS(TT, oT, IT)
      }
      playSound(TT, oT, IT, iT, zT) {
        let kT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (!this.isLocal(TT)) return null;
        const WT = this.playSoundFrom(oT, IT, zT, kT);
        return 1 === iT ? WT : WT.rate(iT)
      }
      playSoundFrom(TT, oT, IT, iT) {
        var zT, kT;
        const WT = this.deps.playSound;
        if (!WT) return uo.b;
        const XT = null === IT || void 0 === IT ? void 0 : IT.jT,
          BT = null !== (zT = null === IT || void 0 === IT ? void 0 : IT.maxHearDist) && void 0 !== zT ? zT : So.g,
          FT = null !== (kT = null === IT || void 0 === IT ? void 0 : IT.refDistance) && void 0 !== kT ? kT : So.k;
        let ST = null;
        if (Array.isArray(XT)) bo[0] = XT[0], bo[1] = XT[1], bo[2] = XT[2], ST = bo;
        else if (void 0 !== XT && null !== XT) {
          const TT = WI(XT);
          if (!this.api.isLocal(TT)) {
            if (!this.api.readPosition(TT, bo)) return uo.b;
            ST = bo
          }
        }
        return WT(TT, oT, ST, ST && this.ear(), BT, FT, iT)
      }
      ear() {
        if (this.api.readPosition(this.api.localId, yo)) yo[1] += Eo;
        else {
          const TT = this.api.apiView;
          if (0 === cT.s.viewProj(TT, 0, 3) && 0 === cT.s.viewProj(TT, 0, 7) && 0 === cT.s.viewProj(TT, 0, 11)) return null;
          for (let oT = 0; oT < 3; oT++) yo[oT] = cT.s.eye(TT, 0, oT)
        }
        return Number.isFinite(yo[0] + yo[1] + yo[2]) ? yo : null
      }
      setBlockId(TT, oT, IT, iT) {
        if (!Number.isInteger(iT) || iT < 0 || iT > 65535) throw new Error(`Invalid block id ${iT}`);
        if (!this.deps.beforeWrite() || !this.chunks.isLoaded(TT, oT, IT)) return;
        const zT = Math.floor(TT),
          kT = Math.floor(oT),
          WT = Math.floor(IT),
          XT = this.predictedCells(zT, kT, WT, iT);
        if (1 === this.api.queries.gC(zT, kT, WT, iT)) {
          for (let TT = 0; TT < XT.length; TT += 5) this.chunks.setOverlay(XT[TT], XT[TT + 1], XT[TT + 2], XT[TT + 3], 1 === XT[TT + 4]);
          this.live.refreshTarget()
        }
      }
      particlesEnabled() {
        return this.deps.particles.enabled()
      }
      createParticles(TT, oT) {
        return this.deps.particles.create(TT, oT)
      }
      playParticleEffect(TT) {
        this.deps.particles.playEffect(TT)
      }
      burstParticlePreset(TT, oT, IT) {
        this.deps.particles.burstPreset(TT, oT, IT)
      }
      createGameMesh(TT, oT, IT) {
        const iT = ++this.meshKeys,
          zT = this.deps.cmd();
        if (!zT) return iT;
        const {
          look: kT,
          colour: WT
        } = function(TT) {
          switch (TT.kind) {
            case void 0:
            case "flatEmissive":
              return TT.onTop ? {
                look: cT.Vb.FlatOnTop,
                colour: [...TT.rgb, TT.alpha]
              } : TT.opaque ? {
                look: cT.Vb.FlatOpaque,
                colour: [...TT.rgb, 1]
              } : {
                look: cT.Vb.Flat,
                colour: [...TT.rgb, TT.alpha]
              };
            case "chevronPath":
              return {
                look: cT.Vb.Chevrons, colour: [...(0, xo.c)(TT.colour), TT.alpha]
              };
            case "furnaceFire":
              return {
                look: cT.Vb.FurnaceFire, colour: [1, 1, 1, 1]
              }
          }
        }(oT), XT = Math.floor(TT.positions.length / 3), BT = function(TT, oT) {
          const IT = Math.floor(TT.positions.length / 3),
            iT = TT.indices.length,
            zT = IT * (oT ? 5 : 3),
            kT = new Uint8Array(4 * (zT + iT)),
            WT = new DataView(kT.buffer);
          for (let FT = 0; FT < 3 * IT; FT++) WT.setFloat32(4 * FT, TT.positions[FT], !0);
          if (oT) {
            var XT;
            const oT = null !== (XT = TT.uvs) && void 0 !== XT ? XT : [];
            for (let TT = 0; TT < 2 * IT; TT++) {
              var BT;
              WT.setFloat32(4 * (3 * IT + TT), null !== (BT = oT[TT]) && void 0 !== BT ? BT : 0, !0)
            }
          }
          for (let FT = 0; FT < iT; FT++) WT.setUint32(4 * (zT + FT), TT.indices[FT], !0);
          return kT
        }(TT, (0, Bo.j)(oT));
        return (0, cT.He)(zT, 0, iT, kT, WT, IT, XT, TT.indices.length, BT) && this.liveMeshes.add(iT), iT
      }
      setGameMesh(TT, oT) {
        var IT;
        const iT = this.deps.cmd();
        if (!iT) return;
        let zT = 0;
        oT.anchor && (zT |= cT.Yb.Anchor, TI[0] = oT.anchor[0], TI[1] = oT.anchor[1], TI[2] = oT.anchor[2]), void 0 !== oT.visible && (zT |= cT.Yb.Visible), oT.uvOffset && (zT |= cT.Yb.UvOffset, oI[0] = oT.uvOffset[0], oI[1] = oT.uvOffset[1]);
        const kT = null !== (IT = oT.visibility) && void 0 !== IT ? IT : 1;
        void 0 !== oT.visibility && (zT |= cT.Yb.Visibility), oT.scale && (zT |= cT.Yb.Scale, II[0] = oT.scale[0], II[1] = oT.scale[1], II[2] = oT.scale[2]), 0 !== zT && (0, cT.Ke)(iT, 0, TT, zT, oT.visible ? 1 : 0, TI, oI, kT, II)
      }
      disposeGameMesh(TT) {
        const oT = this.deps.cmd();
        oT && !(0, cT.Je)(oT, 0, TT) || this.liveMeshes.delete(TT)
      }
      hasPackModel(TT) {
        var oT, IT, iT;
        return null !== (oT = null === (IT = (iT = this.deps).hasPackModel) || void 0 === IT ? void 0 : IT.call(iT, TT)) && void 0 !== oT && oT
      }
      disposeGameOutput() {
        const TT = TT => {
          try {
            TT()
          } catch (oT) {
            console.error("Error freeing client game output", oT)
          }
        };
        for (const oT of [...this.liveMeshes]) TT((() => {
          this.disposeGameMesh(oT)
        }));
        for (const oT of [...this.livePools]) TT((() => {
          oT.dispose()
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
      createInstancePool(TT, oT) {
        const IT = this.tables.idOf(TT.item);
        if (void 0 === IT) return null;
        const iT = new Ho(++this.poolKeys, {
          item: IT,
          scale: TT.scale,
          yaw: TT.yaw
        }, oT, this.poolHost);
        return this.livePools.add(iT), iT
      }
      createMobModel(TT, oT) {
        return this.mobModels.create(TT, oT)
      }
      setRouteChevrons(TT) {
        if (0 !== this.routeMesh && (this.disposeGameMesh(this.routeMesh), this.routeMesh = 0), !TT || 0 === TT.cells.length) return;
        const oT = `${TT.colour} ${TT.alpha}`;
        oT !== this.routeLook && (this.routeLook = oT, this.routeOffset = 0), this.routeMesh = this.createGameMesh(function(TT) {
          const [oT, IT, iT] = TT[0].pos, zT = [], kT = [], WT = [];
          return TT.forEach(((TT, XT) => {
            let {
              pos: BT,
              way: [FT, ST]
            } = TT;
            const DT = BT[0] - oT + .5,
              LT = BT[1] - IT + .04,
              xT = BT[2] - iT + .5,
              [cT, KT] = [.35 * -ST, .35 * FT],
              [MT, rT] = [XT * iI, (XT + 1) * iI],
              AT = zT.length / 3;
            zT.push(DT - .5 * FT + cT, LT, xT - .5 * ST + KT), zT.push(DT - .5 * FT - cT, LT, xT - .5 * ST - KT), zT.push(DT + .5 * FT + cT, LT, xT + .5 * ST + KT), zT.push(DT + .5 * FT - cT, LT, xT + .5 * ST - KT), kT.push(0, MT, 1, MT, 0, rT, 1, rT), WT.push(AT, AT + 1, AT + 2, AT + 1, AT + 3, AT + 2)
          })), {
            positions: zT,
            uvs: kT,
            indices: WT
          }
        }(TT.cells), {
          kind: "chevronPath",
          colour: TT.colour,
          alpha: TT.alpha
        }, TT.cells[0].pos), this.setRouteSlide()
      }
      slideRoute(TT) {
        0 !== this.routeMesh && (this.routeOffset = (this.routeOffset + Math.min(TT, 250) / 1e3 * 1.2 * iI) % 1, this.setRouteSlide())
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
        const oT = this.deps.cmd();
        if (!oT) return TT.length = 0, void(this.pendingFar = void 0);
        let IT = 0;
        for (; IT < TT.length && (0, cT.Re)(oT, 0, TT[IT]);) IT++;
        TT.splice(0, IT);
        const iT = this.pendingStyle;
        if (void 0 !== iT) {
          (iT ? (0, cT._f)(oT, 0, iT.width, iT.alpha, 1, iT.endAtSolidFace ? 1 : 0) : (0, cT._f)(oT, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
        }
        const zT = this.pendingFar;
        void 0 !== zT && (0, cT.Sf)(oT, 0, null !== zT && void 0 !== zT ? zT : 0, null === zT ? 1 : 0) && (this.pendingFar = void 0)
      }
      setNametagOffset(TT, oT) {
        const IT = this.deps.cmd(),
          iT = WI(TT);
        IT && iT !== cT.Yc && (0, cT.eg)(IT, 0, iT, oT)
      }
      setFacingTolerance(TT, oT) {
        const IT = this.deps.cmd(),
          iT = WI(TT);
        IT && iT !== cT.Yc && XI(IT, iT, oT)
      }
      forEachEntity(TT) {
        const {
          api: oT
        } = this;
        for (let IT = 0; IT < oT.idStr.length; IT++) {
          const iT = oT.idStr[IT];
          null === iT || wT(oT.kinds[IT]) || TT(iT)
        }
      }
      getEntityInfo(TT) {
        return this.deps.entityInfo.get(TT)
      }
      isEntityInteractable(TT) {
        const oT = WI(TT);
        return oT !== cT.Yc && 1 === this.api.queries.entityInteractable(oT)
      }
      isLocalPlayer(TT) {
        return this.isLocal(TT)
      }
      getLineOwner(TT) {
        var oT;
        const IT = null === (oT = this.deps.entityInfo.get(TT)) || void 0 === oT ? void 0 : oT.meshOpts;
        if (!IT) return null;
        try {
          const {
            lineToEId: TT
          } = JSON.parse(IT);
          return null !== TT && void 0 !== TT ? TT : null
        } catch {
          return null
        }
      }
      getCameraPosition() {
        const TT = this.api.apiView;
        return Po[0] = cT.s.eye(TT, 0, 0), Po[1] = cT.s.eye(TT, 0, 1), Po[2] = cT.s.eye(TT, 0, 2), Po
      }
      getCameraFar() {
        return cT.s.cameraFar(this.api.apiView, 0)
      }
      setCameraFar(TT) {
        null !== TT && (this.farSet = !0), this.pendingFar = TT, this.flushOwed()
      }
      turnCamera(TT, oT) {
        this.cameraTurn.turn(TT, oT)
      }
      clearPickupDelay(TT) {
        const oT = this.deps.cmd(),
          IT = WI(TT);
        oT && IT !== cT.Yc && (0, cT.re)(oT, 0, IT)
      }
      sendChat(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const IT = this.deps.sendCmd();
        IT && to(IT, 0, po.b.Chat, (0, QT.f)((0, po.j)({
          US: TT,
          aS: oT
        })))
      }
      sendCommand(TT) {
        TT.length <= 119 && this.sendChat(`/${TT}`)
      }
      predictedCells(TT, oT, IT, iT) {
        const zT = this.chunks,
          kT = [],
          WT = (TT, oT, IT, iT, zT) => {
            kT.push(TT, oT, IT, iT, this.tables.blockRootId(zT) === this.tables.blockRootId(iT) ? 0 : 1)
          },
          XT = zT.mS(TT, oT, IT),
          BT = kI(XT);
        if (BT) {
          const [iT, kT, FT] = [TT - BT.x, oT - BT.y, IT - BT.z], ST = zI[zT.mS(iT, kT, FT)], DT = null === ST || void 0 === ST ? void 0 : ST.positions.some((TT => TT.id === XT && TT.x === BT.x && TT.y === BT.y && TT.z === BT.z));
          for (const TT of (DT && ST ? ST : BT.main).positions) zT.mS(iT + TT.x, kT + TT.y, FT + TT.z) === TT.id && WT(iT + TT.x, kT + TT.y, FT + TT.z, 0, TT.id)
        }
        const FT = kI(iT);
        if (FT)
          for (const DT of FT.main.positions) {
            const [iT, kT, XT] = [TT + DT.x - FT.x, oT + DT.y - FT.y, IT + DT.z - FT.z];
            WT(iT, kT, XT, DT.id, zT.mS(iT, kT, XT))
          } else WT(TT, oT, IT, iT, XT);
        const ST = this.tables;
        if ((0 !== ST.attachedTopOf(XT) || 0 !== ST.attachedTopOf(iT)) && zT.isLoaded(TT, oT + 1, IT)) {
          let BT = zT.mS(TT, oT + 1, IT);
          for (let iT = 0; iT < kT.length; iT += 5) kT[iT] === TT && kT[iT + 1] === oT + 1 && kT[iT + 2] === IT && (BT = kT[iT + 3]);
          const FT = this.attachedTopWrite(XT, iT, BT);
          void 0 !== FT && WT(TT, oT + 1, IT, FT, BT)
        }
        return kT
      }
      attachedTopWrite(TT, oT, IT) {
        const iT = this.tables,
          zT = iT.attachedTopOf(TT),
          kT = iT.attachedTopOf(oT),
          WT = 0 !== zT && 0 !== IT && iT.blockRootId(IT) === iT.blockRootId(zT);
        return 0 !== zT && 0 !== kT && iT.blockRootId(TT) === iT.blockRootId(oT) ? WT && IT !== kT ? kT : void 0 : 0 === kT || !WT && 0 !== IT ? WT ? 0 : void 0 : kT
      }
    }
    const FI = cT.kc + cT.mc * cT.rc.BYTES,
      SI = 2147483647,
      DI = new TextDecoder,
      LI = new TextEncoder,
      xI = Object.freeze({
        qS: 0,
        XS: null,
        amountAddedToSlot: 0
      }),
      cI = new Proxy({}, {
        get: () => () => cT.cd
      });

    function KI(TT) {
      return Number.isInteger(TT) && TT >= 0 && TT <= 65535
    }

    function MI(TT) {
      return Number.isInteger(TT) && TT >= 0 && TT <= 4294967295
    }
    class rI {
      constructor(TT) {
        this.deps = TT, this.ai = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(cT.mc), this.ids = new Uint16Array(cT.mc), this.amounts = new Uint16Array(cT.mc), this.attrRead = new Float64Array(cT.mc).fill(-1), this.stale = new Uint16Array(cT.mc), this.staleVersion = new Uint32Array(cT.mc), this.instances = new Uint32Array(cT.mc), this.viewPtr = 0, this.viewVersion = -1, this.len = 0, this.selected = 0, this.slotIconId = 0, this.stopped = !1, this.listeners = new Set
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
        var oT;
        return Number.isInteger(TT) && TT >= 0 && TT < this.len && 0 !== this.ids[TT] && null !== (oT = this.facades[TT]) && void 0 !== oT ? oT : null
      }
      kS() {
        return this.slot(this.selected)
      }
      playerItems() {
        const TT = [];
        for (let oT = 0; oT < Math.min(cT.md, this.len); oT++) TT.push(this.slot(oT));
        return TT
      }
      freeSlots() {
        let TT = 0;
        for (let oT = 0; oT < Math.min(cT.md - cT.j, this.len); oT++) 0 === this.ids[oT] && TT++;
        return TT
      }
      amountOf(TT) {
        let oT = 0;
        for (let iT = 0; iT < Math.min(cT.md, this.len); iT++) {
          const zT = this.slot(iT);
          var IT;
          if ((null === zT || void 0 === zT ? void 0 : zT.name) === TT) oT += null !== (IT = zT.amount) && void 0 !== IT ? IT : 1
        }
        return oT
      }
      instance(TT) {
        var oT;
        return null !== (oT = this.instances[TT]) && void 0 !== oT ? oT : 0
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
          for (const IT of [...this.listeners]) try {
            IT()
          } catch (oT) {
            TT(oT)
          }
        }
      }
      chestOpened(TT, oT, IT) {
        this.ai[0] = TT, this.ai[1] = oT, this.ai[2] = IT, this.version++
      }
      refresh() {
        const TT = this.deps.api.apiView,
          oT = cT.s.inventoryViewPtr(TT, 0),
          IT = cT.s.inventoryVersion(TT, 0),
          iT = cT.s.selectedSlot(TT, 0);
        iT !== this.selected && (this.selected = iT, this.version++);
        const zT = cT.s.slotIcon(TT, 0);
        if (zT !== this.slotIconId && (this.slotIconId = zT, this.iconChanged = !0), oT === this.viewPtr && IT === this.viewVersion) return;
        this.viewPtr = oT, this.viewVersion = IT;
        const kT = this.deps.api.memoryData(oT, FI, 4, "the inventory view"),
          WT = kT ? Math.min(kT.getUint32(0, !0), cT.mc) : 0;
        WT !== this.len && (this.len = WT, this.version++);
        let XT = 0;
        for (let BT = 0; BT < cT.mc; BT++) {
          const TT = cT.kc + BT * cT.rc.BYTES,
            oT = null !== kT && BT < WT ? cT.rc.item(kT, TT) : 0;
          if (0 === oT || null === kT) {
            0 !== this.ids[BT] && (this.ids[BT] = 0, this.attrRead[BT] = -1, this.instances[BT]++, this.version++);
            continue
          }
          const IT = cT.rc.amount(kT, TT),
            iT = cT.rc.attrVersion(kT, TT);
          oT === this.ids[BT] && IT === this.amounts[BT] || this.fill(BT, oT, IT), iT !== this.attrRead[BT] && (this.stale[XT] = BT, this.staleVersion[XT] = iT, XT++)
        }
        XT > 0 && this.fetchAttributes(XT)
      }
      fill(TT, oT, IT) {
        const {
          tables: iT
        } = this.deps, zT = oT !== this.ids[TT];
        let kT = this.facades[TT];
        kT || (kT = {
          name: "",
          amount: null,
          attributes: {
            customAttributes: {}
          },
          typeObj: null
        }, this.facades[TT] = kT), zT && (kT.name = iT.nameOfId(oT), kT.typeObj = iT.itemType(oT), kT.attributes = {
          customAttributes: {}
        }, this.attrRead[TT] = -1, this.instances[TT]++), kT.amount = 0 === IT ? null : IT, this.ids[TT] = oT, this.amounts[TT] = IT, this.version++
      }
      fetchAttributes(TT) {
        const {
          api: oT,
          onError: IT
        } = this.deps, iT = oT.memoryView(Uint16Array, oT.scratch(), TT, "item_attributes_batch's slots");
        if (!iT) return void this.markRead(TT);
        iT.set(this.stale.subarray(0, TT));
        const zT = oT.queries.itemAttributesBatch(TT),
          kT = 4294967295 === zT ? null : oT.memoryData(oT.scratch(), zT, 4, "item_attributes_batch's answer");
        if (!kT) return void this.markRead(TT);
        const WT = new Uint8Array(kT.buffer, kT.byteOffset, zT);
        for (let BT = 0; BT + 8 <= zT;) {
          const TT = kT.getUint16(BT, !0),
            oT = kT.getUint32(BT + 4, !0),
            iT = WT.subarray(BT + 8, BT + 8 + oT);
          BT += 8 + (0, LT.se)(oT);
          const zT = this.facades[TT];
          if (zT && 0 !== this.ids[TT] && 0 !== oT) {
            try {
              zT.attributes = JSON.parse(DI.decode(iT))
            } catch (XT) {
              IT(XT)
            }
            this.version++
          }
        }
        this.markRead(TT)
      }
      markRead(TT) {
        for (let oT = 0; oT < TT; oT++) this.attrRead[this.stale[oT]] = this.staleVersion[oT]
      }
      swap(TT, oT) {
        return KI(TT) && KI(oT) && this.settle(this.queries().invSwap(TT, oT))
      }
      move(TT, oT, IT) {
        return KI(TT) && KI(oT) && MI(IT) && this.settle(this.queries().invMove(TT, oT, IT))
      }
      quickMove(TT, oT, IT, iT) {
        var zT, kT;
        if (!KI(TT) || !KI(oT) || !KI(IT) || null !== iT && !MI(iT)) return null;
        const WT = this.queries().invQuickMove(TT, oT, IT, null === iT ? -1 : Math.min(iT, SI)),
          XT = WT === cT.cd ? cT.Eb : null !== (zT = null === (kT = this.extras()) || void 0 === kT ? void 0 : kT[1]) && void 0 !== zT ? zT : cT.Eb;
        return this.settle(WT), XT === cT.Eb ? null : XT
      }
      remove(TT, oT, IT) {
        return KI(TT) && MI(oT) && this.settle(this.queries().invRemove(TT, oT, IT ? 1 : 0))
      }
      selectSlot(TT) {
        return KI(TT) && this.settle(this.queries().selectSlot(TT))
      }
      closeChest() {
        return this.settle(this.queries().closeChest())
      }
      enchant(TT, oT, IT) {
        if (!KI(TT) || !Number.isInteger(oT)) return !1;
        const [iT, zT, kT] = IT;
        return this.settle(this.queries().invEnchant(TT, oT, Math.floor(iT), Math.floor(zT), Math.floor(kT)))
      }
      craft(TT, oT, IT) {
        let iT;
        try {
          iT = this.deps.tables.getItemId(TT)
        } catch {
          return xI
        }
        if (!KI(oT) || null !== IT && (Number.isNaN(IT) || IT < 0)) return xI;
        const zT = null === IT || IT > SI ? -1 : Math.floor(IT),
          kT = this.queries().craft(iT, oT, zT);
        let WT = xI;
        const XT = kT === cT.cd ? null : this.extras();
        if (XT) {
          const [TT, oT, IT] = XT;
          WT = {
            qS: TT,
            XS: oT === cT.Eb ? null : oT,
            amountAddedToSlot: IT
          }
        }
        return this.settle(kT), WT
      }
      salvage(TT, oT, IT) {
        let iT;
        try {
          iT = this.deps.tables.getItemId(oT)
        } catch {
          return !1
        }
        return KI(TT) && Number.isInteger(IT) && this.settle(this.queries().salvage(TT, iT, Math.max(Math.min(IT, SI), -SI)))
      }
      craftingView(TT, oT, IT) {
        var iT;
        if (this.stopped) return null;
        const {
          api: zT,
          onError: kT
        } = this.deps, WT = TT ? LI.encode(TT) : null;
        if (null !== WT) {
          if (WT.length > 1024) return kT(new Error(`The crafting station ${TT}'s name is over 1024 bytes`)), null;
          const oT = zT.memoryView(Uint8Array, zT.scratch(), WT.length, "crafting_view's station");
          if (!oT) return null;
          oT.set(WT)
        }
        const XT = KI(oT) && KI(IT),
          BT = zT.queries.craftingView(null !== (iT = null === WT || void 0 === WT ? void 0 : WT.length) && void 0 !== iT ? iT : 0, XT ? oT : 0, XT ? IT : 0);
        return BT < cT.gb.BYTES ? (zT.reportCorruption(`crafting_view's answer of ${BT} bytes`), null) : zT.memoryData(zT.scratch(), BT, 1, "crafting_view's answer")
      }
      queries() {
        var TT, oT;
        return !1 === (null === (TT = (oT = this.deps).beforeOp) || void 0 === TT ? void 0 : TT.call(oT)) ? (this.stopped = !0, cI) : this.deps.api.queries
      }
      extras() {
        const {
          api: TT
        } = this.deps;
        return TT.memoryView(Uint32Array, TT.scratch(), 3, "a sync query's extra words")
      }
      settle(TT) {
        if (TT === cT.bd)(0, so.b)();
        else if (TT !== cT.cd) {
          const oT = this.deps.cmd();
          oT && function(TT, oT, IT) {
            return (0, so.b)(), (0, cT.ng)(TT, oT, IT)
          }(oT, 0, TT) || this.deps.onError(new Error(`Sync op ${TT}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
        }
        return this.stopped || this.refresh(), TT !== cT.cd
      }
    }
    const AI = 1 / .6,
      gI = [0, 1, 0],
      hI = [0, 0, 0],
      wI = new Uint8Array(0),
      mI = 1.2 * co.c.Iw,
      eI = new TextEncoder,
      RI = [0, 0, 0],
      uI = [0, 0, 0],
      vI = new Map;

    function EI(TT) {
      let oT = vI.get(TT);
      return oT || (vI.size >= 64 && vI.clear(), oT = eI.encode(`{"emitRate":${TT}}`), vI.set(TT, oT)), oT
    }

    function fI(TT) {
      return Number.isFinite(TT) && TT > 0 ? TT : 0
    }

    function CI(TT, oT) {
      for (let IT = 0; IT < 3; IT++) {
        const iT = Math.abs(oT[IT]);
        RI[IT] = TT[IT] - iT, uI[IT] = 2 * iT
      }
      return Number.isFinite(RI[0] + RI[1] + RI[2] + uI[0] + uI[1] + uI[2])
    }

    function jI(TT, oT) {
      return "pos1" === TT || "pos2" === TT ? void 0 : oT
    }

    function JI(TT, oT, IT) {
      return TT.length > cT.Bd.MaxOpts ? (IT(new Error(`${oT}'s particle opts are over ${cT.Bd.MaxOpts} bytes of JSON`)), null) : TT
    }
    const UI = {
      moveTo() {},
      setEmitRate() {},
      emit() {},
      emitPoints() {},
      setDirections() {},
      stop() {},
      dispose() {}
    };
    class aI {
      constructor(TT) {
        this.deps = TT, this.session = 0, this.nextKey = 1, this.live = 0, this.started = !1
      }
      enabled() {
        return null !== this.sink()
      }
      sink() {
        return this.deps.isSessionLive() ? this.deps.cmd() : null
      }
      create(TT, oT) {
        var IT;
        const iT = this.sink(),
          zT = null !== (IT = oT.half) && void 0 !== IT ? IT : hI;
        if (!iT || this.live >= cT.Bd.MaxLiveKeys || this.nextKey > cT.Bd.MaxKey || !CI(oT.pos, zT)) return UI;
        const kT = this.nextKey,
          WT = JI(function(TT) {
            var oT, IT, iT;
            const zT = JSON.stringify({
              texture: "string" === typeof TT.texture ? TT.texture : "smokePuff",
              fD: TT.fD,
              minLifeTime: TT.minLifeTime,
              maxLifeTime: TT.maxLifeTime,
              minSize: TT.minSize,
              maxSize: TT.maxSize,
              minEmitPower: TT.minEmitPower,
              maxEmitPower: TT.maxEmitPower,
              emitRate: fI(TT.emitRate),
              gravity: null !== (oT = TT.gravity) && void 0 !== oT ? oT : hI,
              dir1: null !== (IT = TT.dir1) && void 0 !== IT ? IT : gI,
              dir2: null !== (iT = TT.dir2) && void 0 !== iT ? iT : gI,
              colorGradients: TT.colorGradients,
              blendMode: TT.blendMode
            });
            return eI.encode(zT)
          }(TT), "createParticles", this.deps.onError);
        return WT && (0, cT.jf)(iT, 0, kT, 0, cT.Bd.PresetNone, 0, RI, uI, WT) ? (this.nextKey++, this.live++, this.started = !0, new YI(this, this.session, kT, TT, zT)) : UI
      }
      playEffect(TT) {
        const oT = this.sink(),
          {
            pos1: IT,
            pos2: iT
          } = TT;
        if (!oT || !IT || !iT) return;
        for (let kT = 0; kT < 3; kT++) RI[kT] = Math.min(IT[kT], iT[kT]), uI[kT] = Math.abs(iT[kT] - IT[kT]);
        if (!Number.isFinite(RI[0] + RI[1] + RI[2] + uI[0] + uI[1] + uI[2])) return;
        const zT = JI(eI.encode(JSON.stringify(TT, jI)), "playParticleEffect", this.deps.onError);
        zT && (0, cT.cf)(oT, 0, 0, cT.Bd.PresetNone, cT.Bd.HasBox, 0, RI, uI, zT)
      }
      burstPreset(TT, oT, IT) {
        const iT = this.sink(),
          zT = Math.min(Math.floor(IT), cT.Bd.MaxBurst);
        if (!iT || !Object.hasOwn(cT.$b, TT) || !(zT > 0)) return;
        const kT = mI;
        for (let WT = 0; WT < 3; WT++) RI[WT] = oT[WT] - kT / 2, uI[WT] = kT;
        Number.isFinite(RI[0] + RI[1] + RI[2]) && (0, cT.cf)(iT, 0, 0, cT.$b[TT], cT.Bd.HasBox, zT, RI, uI, wI)
      }
      sessionEnded() {
        this.session++;
        const TT = this.started ? this.deps.cmd() : null;
        return this.started = !1, this.nextKey = 1, this.live = 0, !TT || (0, cT.kf)(TT, 0)
      }
      sinkFor(TT) {
        return TT === this.session ? this.deps.cmd() : null
      }
      stop(TT, oT) {
        const IT = this.sinkFor(TT);
        IT && (0, cT.mf)(IT, 0, oT) && this.live--
      }
    }
    class YI {
      constructor(TT, oT, IT, iT, zT) {
        this.owner = TT, this.session = oT, this.key = IT, this.half = void 0, this.rate = void 0, this.stopDelayMs = void 0, this.emitted = void 0, this.stopped = !1, this.freed = !1, this.half = [Math.abs(zT[0]), Math.abs(zT[1]), Math.abs(zT[2])], this.rate = fI(iT.emitRate), this.emitted = this.rate > 0;
        const kT = iT.maxLifeTime * AI * 1e3 + 250;
        this.stopDelayMs = kT >= 0 ? Math.min(kT, 2147483647) : 250
      }
      sink() {
        return this.stopped ? null : this.owner.sinkFor(this.session)
      }
      moveTo(TT, oT) {
        const IT = this.sink();
        if (IT) {
          if (oT)
            for (let TT = 0; TT < 3; TT++) this.half[TT] = Math.abs(oT[TT]);
          CI(TT, this.half) && (0, cT.nf)(IT, 0, this.key, cT.Bd.HasBox, RI, uI, wI)
        }
      }
      setEmitRate(TT) {
        const oT = this.sink(),
          IT = fI(TT);
        oT && IT !== this.rate && (0, cT.nf)(oT, 0, this.key, 0, hI, hI, EI(IT)) && (this.rate = IT, this.emitted ||= IT > 0)
      }
      emit(TT) {
        const oT = this.sink(),
          IT = Math.min(Math.floor(TT), cT.Bd.MaxBurst);
        oT && IT > 0 && (0, cT.cf)(oT, 0, this.key, cT.Bd.PresetNone, 0, IT, hI, hI, wI) && (this.emitted = !0)
      }
      emitPoints(TT, oT, IT) {
        const iT = this.sink(),
          zT = Math.min(Math.floor(IT), cT.Bd.MaxPoints, Math.floor(oT.length / 4));
        if (!iT || !(zT > 0) || !Number.isFinite(TT[0] + TT[1] + TT[2])) return;
        const kT = new Uint8Array(oT.buffer, oT.byteOffset, zT * cT.Bd.PointBytes);
        (0, cT.gf)(iT, 0, this.key, zT, TT, kT) && (this.emitted = !0)
      }
      setDirections(TT, oT) {
        const IT = this.sink();
        if (!IT || !Number.isFinite(TT[0] + TT[1] + TT[2] + oT[0] + oT[1] + oT[2])) return;
        const iT = eI.encode(JSON.stringify({
          dir1: [TT[0], TT[1], TT[2]],
          dir2: [oT[0], oT[1], oT[2]]
        }));
        (0, cT.nf)(IT, 0, this.key, 0, hI, hI, iT)
      }
      stop() {
        const TT = this.sink();
        this.stopped = !0, TT && (this.emitted ? (this.rate > 0 && (0, cT.nf)(TT, 0, this.key, 0, hI, hI, EI(0)), setTimeout((() => {
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
    const QI = no.m,
      OI = new TextDecoder;

    function HI(TT, oT) {
      const {
        serverIds: IT,
        kinds: iT
      } = TT;
      let zT = 0;
      for (let kT = 0; kT < IT.length; kT++) {
        const TT = IT[kT];
        if (TT !== cT.Yc && !wT(iT[kT])) {
          if (zT === oT.length) {
            const TT = new Int32Array(Math.max(64, 2 * zT));
            TT.set(oT), oT = TT
          }
          oT[zT++] = TT
        }
      }
      return {
        ids: oT,
        count: zT
      }
    }

    function nI(TT, oT) {
      return TT.length >= oT ? TT : new Int32Array(Math.max(oT, 2 * TT.length))
    }

    function qI(TT, oT, IT, iT) {
      for (let zT = 0; zT < IT; zT += 4096) {
        const kT = Math.min(4096, IT - zT),
          WT = TT.memoryView(Int32Array, TT.scratch(), kT, "entity_info_batch's ids");
        if (!WT) return !1;
        WT.set(oT.subarray(zT, zT + kT));
        const XT = TT.queries.entityInfoBatch(kT),
          BT = 4294967295 === XT ? null : TT.memoryData(TT.scratch(), XT, 4, "entity_info_batch's records");
        if (!BT) return !1;
        for (let TT = 0; TT + cT.Lb.BYTES <= XT;) {
          const oT = cT.Lb.len(BT, TT);
          iT(cT.Lb.serverId(BT, TT), ZI(BT, TT, oT)), TT += cT.Lb.BYTES + (0, LT.se)(oT)
        }
      }
      return !0
    }

    function ZI(TT, oT, IT) {
      var iT, zT, kT;
      const WT = cT.Lb.kind(TT, oT),
        XT = 0 === WT ? null : mT(WT);
      if (null === XT) return null;
      const BT = cT.Lb.variation(TT, oT),
        FT = cT.Lb.pose(TT, oT),
        ST = cT.Lb.meta(TT, oT),
        DT = cT.Lb.mesh(TT, oT),
        LT = 0 !== (cT.Lb.flags(TT, oT) & cT.Hb.HasOpts),
        xT = QI[XT];
      return Object.freeze({
        type: XT,
        variation: BT === cT.$c ? void 0 : null !== (iT = null !== (zT = null === xT || void 0 === xT ? void 0 : xT[BT]) && void 0 !== zT ? zT : null === xT || void 0 === xT ? void 0 : xT[0]) && void 0 !== iT ? iT : "default",
        pose: FT === cT.hc ? void 0 : null !== (kT = cT.Cb[FT]) && void 0 !== kT ? kT : cT.Cb[0],
        metaInfo: ST === cT.hc ? void 0 : cT.Oc[ST],
        meshKind: DT === cT.hc ? void 0 : cT.Mc[DT],
        meshOpts: LT ? OI.decode(new Uint8Array(TT.buffer, TT.byteOffset + oT + cT.Lb.BYTES, IT)) : void 0
      })
    }
    const lI = 1,
      sI = 2;
    class tI {
      constructor(TT) {
        this.deps = TT, this.wanted = 0, this.kS = !1, this.refused = !1
      }
      get on() {
        return this.kS
      }
      want(TT, oT) {
        this.wanted = oT ? this.wanted | TT : this.wanted & ~TT;
        const IT = 0 !== this.wanted;
        if (IT === this.kS) return;
        const iT = this.deps.cmd();
        null !== iT ? (0, cT.rg)(iT, 0, IT ? 1 : 0) ? (this.kS = IT, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.kS = !1
      }
    }
    class GI {
      constructor(TT) {
        this.deps = TT, this.entries = new Map, this.complete = !1, this.refill = !1, this.midFrame = !1, this.pending = new Int32Array(64), this.pendingCount = 0, this.ids = new Int32Array(64)
      }
      get(TT) {
        var oT;
        return this.complete || this.fill(), null !== (oT = this.entries.get("string" === typeof TT ? TT : String(TT))) && void 0 !== oT ? oT : null
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
            api: oT
          } = this.deps;
          let IT = 0;
          const iT = this.ids = nI(this.ids, TT);
          for (let zT = 0; zT < TT; zT++) {
            const TT = this.pending[zT],
              kT = oT.indexById.get(TT);
            void 0 === kT || wT(oT.kinds[kT]) ? this.entries.delete(String(TT)) : iT[IT++] = TT
          }
          IT > 0 && !this.batch(iT, IT) && (this.complete = !1)
        }
      }
      sessionEnded() {
        this.entries.clear(), this.complete = !1, this.refill = !1, this.midFrame = !1, this.pendingCount = 0, this.deps.watch.want(lI, !1)
      }
      fill() {
        const {
          api: TT
        } = this.deps;
        if (this.complete = !0, this.pendingCount = 0, this.entries.clear(), this.deps.isSessionLive()) {
          const {
            watch: TT
          } = this.deps, oT = TT.on;
          TT.want(lI, !0), !oT && TT.on && (this.refill = this.midFrame)
        }
        const {
          ids: oT,
          count: IT
        } = HI(TT, this.ids);
        this.ids = oT, IT > 0 && !this.batch(oT, IT) && (this.refill = !0)
      }
      batch(TT, oT) {
        return qI(this.deps.api, TT, oT, ((TT, oT) => {
          null === oT ? this.entries.delete(String(TT)) : this.entries.set(String(TT), oT)
        }))
      }
    }
    var pI = IT(4285);

    function bI(TT) {
      if ("message" !== TT.type || TT.US !== pI.$b.NewClientOptions || TT.payloadKind !== LT.fc.Msgpack) return null;
      const oT = (0, QT.e)(TT.payload);
      if (null === oT || "object" !== typeof oT || Array.isArray(oT)) throw new Error("NewClientOptions whose body isn't an object of options");
      return oT
    }
    var yI = IT(1214),
      NI = IT(35627);

    function PI(TT, oT, IT, iT, zT, kT, XT) {
      var BT, FT, ST;
      switch (TT) {
        case cT.$d.ToggleMenu: {
          const TT = cT.C[oT];
          WT.h.XM("toggleMenu", void 0 === TT ? "inventory" : `inventory|${TT}`);
          break
        }
        case cT.$d.EditBoard:
          WT.h.XM("EditBoard", {
            pos: 0 === oT ? null : IT
          });
          break;
        case cT.$d.EditCodeBlock:
        case cT.$d.ViewCodeBlock:
          WT.h.XM("EditCodeBlock", {
            pos: IT,
            canChangePos: TT === cT.$d.EditCodeBlock
          });
          break;
        case cT.$d.EditCustomLobbyBlock:
          WT.h.XM("EditCustomLobbyBlock", {
            pos: IT
          });
          break;
        case cT.$d.OpenIronChest:
          WT.h.XM("OpenIronChest", {
            pos: IT
          });
          break;
        case cT.$d.EditNameTag:
          WT.h.XM("EditNameTag", null !== (BT = null === (FT = zT.kS()) || void 0 === FT || null === (ST = FT.attributes.customAttributes) || void 0 === ST ? void 0 : ST.text) && void 0 !== BT ? BT : "");
          break;
        case cT.$d.EditBook: {
          var DT, LT, KT;
          const TT = null === (DT = zT.kS()) || void 0 === DT ? void 0 : DT.attributes;
          WT.h.XM("EditBook", {
            pages: (0, yI.L)(null === TT || void 0 === TT || null === (LT = TT.customAttributes) || void 0 === LT ? void 0 : LT.pages),
            title: null !== (KT = null === TT || void 0 === TT ? void 0 : TT.customDisplayName) && void 0 !== KT ? KT : "Title",
            isPublished: !(null === TT || void 0 === TT || !TT.customDescription)
          });
          break
        }
        case cT.$d.CantChangeBlock:
          ! function(TT, oT) {
            const IT = oT.getClientOption("cantChangeError"),
              iT = oT.getClientOption(TT ? "cantBuildError" : "cantBreakError"),
              zT = TT ? IT : iT;
            (oT.getClientOption("canChange") || zT || "You cannot modify this block" !== IT) && WT.h.XM("showBottomMessage", {
              message: iT || IT,
              type: "Error"
            })
          }(1 === oT, kT);
          break;
        case cT.$d.MiddleBarStart:
          WT.h.XM("middleScreenBarInitiate", {
            duration: iT,
            fo: 1 === IT[0],
            horizBarRemOffset: oT
          });
          break;
        case cT.$d.MiddleBarStop:
          WT.h.XM("middleScreenBarRemove");
          break;
        case cT.$d.Hitmarker:
          WT.h.XM("localGunHitmarker", {
            rI: 1 === oT
          });
          break;
        case cT.$d.ShotsLeft:
          WT.h.XM("localPlayerNewShotsLeft", iT);
          break;
        case cT.$d.AimingOverlay:
          WT.h.XM("aimingOverlay", 3 === (3 & oT) ? "sniper" : "none");
          break;
        case cT.$d.BottomMessage:
          WT.h.XM("showBottomMessage", JSON.parse(XT()));
          break;
        case cT.$d.Crosshair:
          zT.inaccuracy = (0, OT.d)(iT), (0, NI.c)().crosshairAccuracy(zT.inaccuracy);
          break;
        case cT.$d.ChargeStage:
          break;
        case cT.$d.EmoteWheelClose:
          WT.h.XM("requestEmoteWheelClose");
          break;
        case cT.$d.BlockMined:
          WT.h.XM("localBlockMined");
          break;
        default:
          throw new xT.b(`UiEvent of no kind: what ${TT}`)
      }
    }
    var dI = IT(36951),
      VI = IT(8754),
      Ti = IT(1780),
      oi = IT(35744),
      Ii = IT(8763),
      ii = IT(4269);
    const zi = 10,
      ki = {
        player: [],
        chestOrCreative: [],
        chest: null,
        creative: !1,
        selectedSlot: 0,
        freeSlots: 0
      },
      Wi = {
        items: [],
        ammo: 0,
        selectedSlot: 0
      },
      Xi = {
        gun: !1,
        aimable: !1,
        chargeName: null
      };

    function Bi(TT, oT) {
      let IT, iT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      const kT = () => (IT = (0, Ti.m)(IT, oT()), IT);
      return {
        current: kT,
        watch(oT) {
          const IT = () => {
              oT(kT())
            },
            WT = [TT.watch(IT)];
          return null !== iT && WT.push((0, Ti.p)((TT => {
            TT.some(iT) && IT()
          }))), null !== zT && WT.push(zT(IT)), () => {
            for (const TT of WT) TT()
          }
        }
      }
    }

    function Fi(TT) {
      return TT && {
        name: TT.name,
        amount: TT.amount,
        attributes: TT.attributes
      }
    }
    const Si = new WeakMap;

    function Di(TT) {
      let oT = Si.get(TT);
      return void 0 === oT && (oT = (0, Ii.creativeItemIds)().map((oT => ({
        name: TT.nameOfId(oT),
        amount: TT.isStackableId(oT) ? 1 : null,
        attributes: (0, dI.e)("Gun" === (0, Ii.itemTypeOf)(oT) ? {
          type: "Gun",
          clipSize: (0, Ii.clipSizeOf)(oT)
        } : void 0)
      }))), Si.set(TT, oT)), oT
    }

    function Li(TT, oT, IT, iT) {
      const zT = oT => (TT.flush(iT), oT),
        kT = IT => {
          var iT, zT, kT, WT, XT, BT, FT;
          const ST = TT.slot(IT);
          if (!ST) return null;
          const {
            rootName: DT,
            metaStr: LT
          } = oT.getMetaInfo(ST.name);
          return {
            name: ST.name,
            amount: ST.amount,
            attributes: ST.attributes,
            instance: TT.instance(IT),
            displayName: null !== (iT = ST.attributes.customDisplayName) && void 0 !== iT ? iT : oT.getDisplayName(DT),
            requiresAmmo: "RequiresAmmo" === LT,
            clipSize: null !== (zT = null !== (kT = null === (WT = ST.attributes.customAttributes) || void 0 === WT || null === (XT = WT.gunStats) || void 0 === XT ? void 0 : XT.clipSize) && void 0 !== kT ? kT : null === (BT = oT.getGunStats(DT)) || void 0 === BT ? void 0 : BT.clipSize) && void 0 !== zT ? zT : null === (FT = ST.typeObj) || void 0 === FT ? void 0 : FT.clipSize
          }
        },
        XT = function(TT, oT) {
          let IT = null,
            iT = {
              focus: null,
              recipes: [],
              detail: null
            },
            zT = -1;
          const kT = new Set;
          return {
            read() {
              var kT, WT;
              if (null === IT) return null !== iT.focus && (iT = {
                ...iT,
                focus: null
              }), iT;
              if (iT.focus === IT && zT === TT.changes) return iT;
              if (zT = TT.changes, 0 === TT.length) return iT = {
                focus: IT,
                recipes: [],
                detail: null
              }, iT;
              let XT = 0;
              if (null !== IT.recipe) try {
                XT = oT.getItemId(IT.recipe.name)
              } catch {}
              const BT = TT.craftingView(IT.station, XT, null !== (kT = null === (WT = IT.recipe) || void 0 === WT ? void 0 : WT.nS) && void 0 !== kT ? kT : 0);
              return iT = null === BT ? {
                focus: IT,
                recipes: [],
                detail: null
              } : function(TT, oT, IT) {
                let iT = cT.gb.BYTES;
                const zT = [];
                for (let ST = cT.gb.recipes(TT, 0); ST > 0; ST--) {
                  const IT = cT.Y.flags(TT, iT),
                    kT = {
                      name: oT.nameOfId(cT.Y.item(TT, iT)),
                      nS: cT.Y.recipe(TT, iT),
                      requires: [],
                      produces: cT.Y.produces(TT, iT),
                      haveIngredients: 0 !== (IT & cT.V.HaveIngredients),
                      listed: 0 !== (IT & cT.V.Listed)
                    };
                  let WT = cT.Y.requires(TT, iT);
                  for (iT += cT.Y.BYTES; WT > 0; WT--) {
                    const IT = cT.ab.items(TT, iT);
                    kT.requires.push({
                      items: Ki(TT, iT + cT.ab.BYTES, IT, oT),
                      amt: cT.ab.amount(TT, iT)
                    }), iT += cT.ab.BYTES + 2 * IT
                  }
                  zT.push(kT)
                }
                const kT = cT.gb.flags(TT, 0);
                if (null === IT.recipe || 0 === (kT & cT.db.Detail)) return {
                  focus: IT,
                  recipes: zT,
                  detail: null
                };
                const WT = {},
                  XT = {};
                for (let ST = cT.gb.ingredients(TT, 0); ST > 0; ST--) {
                  const IT = cT.U.item(TT, iT),
                    zT = cT.U.from(TT, iT),
                    kT = cT.U.amount(TT, iT);
                  iT += cT.U.BYTES;
                  const BT = zT === cT.A ? null : Ki(TT, iT, zT, oT);
                  if (null !== BT && (iT += 2 * zT), 0 === IT) continue;
                  const FT = oT.nameOfId(IT);
                  WT[FT] = kT, null !== BT && (XT[FT] = BT)
                }
                const {
                  name: BT,
                  nS: FT
                } = IT.recipe;
                return {
                  focus: IT,
                  recipes: zT,
                  detail: {
                    name: BT,
                    nS: FT,
                    craftAllTimes: cT.gb.craftAllTimes(TT, 0),
                    roomForOne: 0 !== (kT & cT.db.RoomForOne),
                    resultStackable: Boolean(oT.getItemStat(BT, "stackable")),
                    amounts: WT,
                    ingredientsCraftedFrom: XT
                  }
                }
              }(BT, oT, IT), iT
            },
            setFocus(TT) {
              IT = TT;
              for (const oT of [...kT]) oT()
            },
            watchFocus: TT => (kT.add(TT), () => {
              kT.delete(TT)
            })
          }
        }(TT, oT);
      return {
        states: {
          inventory: Bi(TT, (() => {
            const IT = TT.length;
            if (0 === IT) return ki;
            const iT = [];
            for (let oT = 0; oT < cT.md; oT++) iT.push(Fi(TT.slot(oT)));
            const zT = TT.slotIcon,
              kT = iT[TT.selectedSlot];
            0 !== zT && kT && (iT[TT.selectedSlot] = {
              ...kT,
              icon: oT.nameOfId(zT)
            });
            const WT = !0 === oT.getClientOption("creative");
            let XT = [],
              BT = null;
            if (IT > cT.md) {
              for (let oT = cT.md; oT < IT; oT++) XT.push(Fi(TT.slot(oT)));
              BT = {
                type: null,
                pos: [...TT.ai],
                numSlots: IT - cT.md,
                ironChest: null
              }
            } else WT && (XT = Di(oT));
            return {
              player: iT,
              chestOrCreative: XT,
              chest: BT,
              creative: WT,
              selectedSlot: TT.selectedSlot,
              freeSlots: TT.freeSlots()
            }
          }), (0, Ti.i)("creative")),
          hotbar: Bi(TT, (() => {
            if (0 === TT.length) return Wi;
            const oT = [];
            for (let TT = 0; TT < zi; TT++) oT.push(kT(TT));
            return {
              items: oT,
              ammo: TT.amountOf("Ammo"),
              selectedSlot: TT.selectedSlot
            }
          }), (0, Ti.g)("DisplayName", "GunStats")),
          crafting: Bi(TT, XT.read, null, XT.watchFocus),
          heldItemAim: Bi(TT, (() => {
            var oT;
            if (!IT()) return Xi;
            const iT = null === (oT = TT.kS()) || void 0 === oT ? void 0 : oT.typeObj,
              zT = "Gun" === (null === iT || void 0 === iT ? void 0 : iT.type);
            return {
              gun: zT,
              aimable: zT || !0 === (null === iT || void 0 === iT ? void 0 : iT.showsAimingUi),
              chargeName: "Chargeable" === (null === iT || void 0 === iT ? void 0 : iT.type) ? iT.name : null
            }
          }), null, (TT => function(TT, oT) {
            let IT = TT();
            return (0, ii.y)((() => {
              const iT = TT();
              iT !== IT && (IT = iT, oT(iT))
            }))
          }(IT, TT)))
        },
        events: {
          hotbarSlotRequested: (0, Ti.e)("setSelectedInventorySlotI"),
          hotbarScrolled: (0, Ti.e)("ScrollInventorySlot"),
          numberKeyPressed: (0, Ti.e)("numkeyPressed"),
          inventoryDropRequested: (0, Ti.e)("DropInvenItem"),
          chestToggled: (0, Ti.e)("chestToggleFromServer"),
          chestRefreshed: (0, Ti.e)("chestRefreshedFromServer", ci),
          inventorySynced: (0, Ti.e)("syncedInvenFromServer", ci),
          enchantingTableOpened: (0, Ti.e)("enchantingTable", (TT => {
            let {
              position: IT,
              mS: iT
            } = TT;
            return {
              position: [...IT],
              blockName: oT.getMetaInfo(iT).rootName
            }
          }))
        },
        commands: {
          selectHotbarSlot(oT) {
            TT.selectSlot(oT), TT.flush(iT)
          },
          removeInventoryItem(oT) {
            let {
              slot: IT,
              amount: iT,
              drop: kT
            } = oT;
            return zT(TT.remove(IT, iT, kT))
          },
          swapInventorySlots(oT) {
            let {
              a: IT,
              b: iT
            } = oT;
            return zT(TT.swap(IT, iT))
          },
          moveInventoryItem(oT) {
            let {
              from: IT,
              to: iT,
              amount: kT
            } = oT;
            return zT(TT.move(IT, iT, kT))
          },
          quickMoveInventoryItem(oT) {
            let {
              slot: IT,
              start: iT,
              end: kT,
              amount: WT
            } = oT;
            return zT(TT.quickMove(IT, iT, kT, WT))
          },
          closeChest() {
            TT.closeChest(), TT.flush(iT), WT.h.XM("chestClosedByPlayer")
          },
          focusCrafting(TT) {
            XT.setFocus(TT)
          },
          craftRecipe(oT) {
            let {
              name: IT,
              nS: iT,
              times: kT
            } = oT;
            return zT(TT.craft(IT, iT, kT))
          },
          salvageItem(oT) {
            let {
              slot: IT,
              name: iT,
              amount: kT
            } = oT;
            return zT(TT.salvage(IT, iT, kT))
          },
          enchantItem(oT) {
            let {
              slot: IT,
              level: iT,
              tablePos: zT
            } = oT;
            TT.enchant(IT, iT, zT)
          }
        },
        queries: {
          enchantingOffer(IT) {
            let {
              slot: iT,
              blockName: zT
            } = IT;
            return function(TT, oT, IT, iT) {
              const zT = TT.slot(IT);
              if (!zT || !oT.getClientOption("canCraft") || !(0, VI.r)(iT) || (0, VI.n)(zT.attributes)) return xi;
              const kT = (0, Ii.enchantmentPerksOf)(oT.getItemId(zT.name));
              if (0 === kT.length) return xi;
              const WT = [];
              for (let XT = 0; XT < oi.d; XT++) {
                const {
                  commonProb: TT,
                  uncommonProb: oT,
                  rareProb: IT,
                  epicProb: zT,
                  legendaryProb: kT,
                  level: BT
                } = (0, VI.f)(iT, XT);
                WT.push({
                  level: BT,
                  odds: [TT, oT, IT, zT, kT].map((TT => 100 * TT))
                })
              }
              return {
                perks: [...kT],
                options: WT
              }
            }(TT, oT, iT, zT)
          }
        }
      }
    }
    const xi = Object.freeze({
      perks: [],
      options: []
    });

    function ci() {
      return null
    }

    function Ki(TT, oT, IT, iT) {
      const zT = [];
      for (let kT = 0; kT < IT; kT++) {
        const IT = TT.getUint16(oT + 2 * kT, !0);
        0 !== IT && zT.push(iT.nameOfId(IT))
      }
      return zT
    }
    class Mi {
      constructor(TT) {
        this.api = TT, this.positions = new Map, this.targeted = {
          yN: 0,
          position: [0, 0, 0],
          normal: [0, 0, 0],
          wc: [0, 0, 0]
        }, this.hasTarget = !1, this.breaking = [0, 0, 0], this.isBreaking = !1
      }
      position(TT) {
        let oT = this.positions.get(TT);
        return oT || (this.api.checkValid(TT) || this.api.isLocal(TT) ? (oT = [NaN, NaN, NaN], this.api.readPosition(TT, oT), this.positions.set(TT, oT), oT) : null)
      }
      ITT() {
        return this.hasTarget ? this.targeted : null
      }
      breakingPosition() {
        return this.isBreaking ? this.breaking : null
      }
      refresh() {
        for (const [oT, IT] of this.positions) this.api.readPosition(oT, IT) || this.api.checkValid(oT) || this.api.isLocal(oT) || this.positions.delete(oT);
        const TT = this.api.apiView;
        if (this.refreshTarget(), this.isBreaking = 0 !== (cT.s.playerFlags(TT, 0) & cT.Cd.Breaking) && cT.s.breakingProgress(TT, 0) >= 0, this.isBreaking)
          for (let oT = 0; oT < 3; oT++) this.breaking[oT] = cT.s.breakingPos(TT, 0, oT)
      }
      refreshTarget() {
        const TT = this.api.apiView,
          oT = cT.s.targetBlockId(TT, 0);
        if (this.hasTarget = oT !== cT.Zc, this.hasTarget) {
          const IT = this.targeted;
          IT.yN = oT;
          for (let oT = 0; oT < 3; oT++) IT.position[oT] = cT.s.targetBlock(TT, 0, oT), IT.normal[oT] = cT.s.targetNormal(TT, 0, oT), IT.wc[oT] = cT.s.targetAdjacent(TT, 0, oT)
        }
      }
      despawned(TT) {
        const oT = this.positions.get(TT);
        oT && !this.api.isLocal(TT) && (oT.fill(NaN), this.positions.delete(TT))
      }
    }
    var ri = IT(39407),
      Ai = IT(39392),
      gi = IT(35737);
    const wi = 1,
      mi = 2;
    class ei {
      constructor() {
        this.game = new gi.h, this.client = new gi.h, this.kS = 0, this.movesFly = null
      }
      setGame(TT) {
        if (null === TT || "object" !== typeof TT) return !1;
        const {
          key: oT,
          value: IT
        } = TT;
        return "string" === typeof oT && (this.game.setBooleanType(oT, Boolean(IT)), !0)
      }
      setClient(TT, oT) {
        this.client.setBooleanType(TT, oT)
      }
      clearGame() {
        this.game = new gi.h, this.movesFly = null
      }
      setMovesFly(TT) {
        this.movesFly = TT
      }
      perms() {
        return (this.game._getTotalBooleanVal() ? wi : 0) | (this.client._getTotalBooleanVal() ? mi : 0)
      }
      write(TT) {
        const oT = this.perms(),
          {
            movesFly: IT
          } = this;
        if (oT === this.kS && null === IT) return !0;
        let iT = cT.Ob.Keep;
        return null !== IT && (iT = IT ? cT.Ob.On : cT.Ob.Off), !(!TT || !(0, cT.Be)(TT, 0, iT, oT, IT ? 1 : 0)) && (this.kS = oT, this.movesFly = null, !0)
      }
    }
    class Ri {
      constructor(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 35;
        this.api = TT, this.screenBandPct = void 0, this.clipX = 0, this.clipY = 0, this.clipW = 0, this.eye = [0, 0, 0], this.forward = [0, 0, 1], this.along = [0, 0, 0], this.screenBandPct = {
          x: XT.c,
          get y() {
            return oT()
          }
        }
      }
      get hasView() {
        const TT = this.api.apiView,
          oT = cT.s.viewProj;
        return 0 !== oT(TT, 0, 3) || 0 !== oT(TT, 0, 7) || 0 !== oT(TT, 0, 11) || 0 !== oT(TT, 0, 15)
      }
      get cameraPosition() {
        const TT = this.api.apiView,
          {
            eye: oT
          } = this;
        for (let IT = 0; IT < 3; IT++) oT[IT] = cT.s.eye(TT, 0, IT);
        return oT
      }
      get cameraDirection() {
        const TT = this.api.apiView,
          oT = cT.s.viewProj,
          IT = oT(TT, 0, 3),
          iT = oT(TT, 0, 7),
          zT = oT(TT, 0, 11),
          kT = Math.hypot(IT, iT, zT),
          {
            forward: WT
          } = this;
        return kT > 0 && (WT[0] = IT / kT, WT[1] = iT / kT, WT[2] = zT / kT), WT
      }
      get cameraHeading() {
        return cT.s.heading(this.api.apiView, 0)
      }
      get cameraPitch() {
        return cT.s.pitch(this.api.apiView, 0)
      }
      get tanHalfFovX() {
        return cT.s.tanHalfFovX(this.api.apiView, 0)
      }
      get tanHalfFovY() {
        return cT.s.tanHalfFovY(this.api.apiView, 0)
      }
      projectWorldPosToScreenPos(TT) {
        this.clip(TT);
        const {
          clipX: oT,
          clipY: IT,
          clipW: iT
        } = this;
        if (iT > 0) {
          const TT = oT / iT * 50,
            zT = -IT / iT * 50;
          return Math.abs(TT) <= this.screenBandPct.x && Math.abs(zT) <= this.screenBandPct.y ? {
            x: 50 + TT,
            y: 50 + zT
          } : this.clampToBand(TT, zT)
        }
        const zT = this.cameraPosition,
          kT = Math.hypot(TT[0] - zT[0], TT[1] - zT[1], TT[2] - zT[2]),
          WT = this.api.apiView,
          XT = cT.s.viewProj,
          BT = kT > 0 ? oT / kT : 0,
          FT = kT > 0 ? -IT / kT : 0,
          ST = Math.hypot(XT(WT, 0, 1), XT(WT, 0, 5), XT(WT, 0, 9)),
          DT = BT / Math.hypot(XT(WT, 0, 0), XT(WT, 0, 4), XT(WT, 0, 8)),
          LT = FT / ST,
          xT = !(Math.abs(DT) >= .001 || Math.abs(LT) >= .001);
        return this.clampToBand(BT, xT ? -(ST || 1) : FT)
      }
      projectDirectionToScreenPos(TT) {
        if (!this.hasView) return;
        const oT = this.cameraPosition,
          IT = this.along;
        for (let iT = 0; iT < 3; iT++) IT[iT] = oT[iT] + 10 * TT[iT];
        return this.projectWorldPosToScreenPos(IT)
      }
      projectWorldPosToViewport(TT) {
        this.clip(TT);
        const {
          clipX: oT,
          clipY: IT,
          clipW: iT
        } = this;
        return iT > 0 ? {
          x: 50 + oT / iT * 50,
          y: 50 - IT / iT * 50
        } : null
      }
      clip(TT) {
        const oT = this.api.apiView,
          IT = TT[0] - cT.s.origin(oT, 0, 0),
          iT = TT[1] - cT.s.origin(oT, 0, 1),
          zT = TT[2] - cT.s.origin(oT, 0, 2),
          kT = cT.s.viewProj;
        this.clipX = kT(oT, 0, 0) * IT + kT(oT, 0, 4) * iT + kT(oT, 0, 8) * zT + kT(oT, 0, 12), this.clipY = kT(oT, 0, 1) * IT + kT(oT, 0, 5) * iT + kT(oT, 0, 9) * zT + kT(oT, 0, 13), this.clipW = kT(oT, 0, 3) * IT + kT(oT, 0, 7) * iT + kT(oT, 0, 11) * zT + kT(oT, 0, 15)
      }
      clampToBand(TT, oT) {
        return (0, XT.f)(TT, oT, this.screenBandPct.x, this.screenBandPct.y)
      }
    }
    var ui = IT(4295);
    const vi = new TextEncoder,
      Ei = new Uint8Array(cT.I * cT.G);
    class fi {
      constructor() {
        this.buttons = [], this.kS = !0
      }
      set(TT) {
        this.buttons = TT, this.kS = !1
      }
      attached() {
        this.kS = 0 === this.buttons.length
      }
      write(TT) {
        if (this.kS) return;
        const oT = new Uint8Array(cT.I),
          IT = new Uint8Array(cT.I);
        let iT = 0,
          zT = 0;
        for (const {
            id: kT,
            keycode: WT
          }
          of this.buttons) {
          if (iT === cT.I) break;
          const {
            read: TT,
            written: XT
          } = vi.encodeInto(kT, Ei.subarray(zT, zT + cT.G));
          if (TT < kT.length) continue;
          const BT = ui.i[WT];
          oT[iT] = "number" === typeof BT ? BT : 0, IT[iT] = XT, iT++, zT += XT
        }
        this.kS = (0, cT.ne)(TT, 0, iT, oT, IT, Ei.subarray(0, zT))
      }
    }

    function Ci(TT, oT, IT) {
      const iT = vi.encode(oT);
      return iT.length <= cT.G && function(TT, oT, IT, iT) {
        return (0, so.b)(), (0, cT.rf)(TT, oT, IT, iT)
      }(TT, 0, IT ? 1 : 0, iT)
    }
    const ji = new TextDecoder,
      Ji = new TextEncoder,
      Ui = new Uint8Array(0),
      ai = [0, 0, 0],
      Yi = {
        off: cT.Gd.Off,
        key: cT.Gd.Key,
        touch: cT.Gd.Touch
      };
    class Qi {
      constructor(TT) {
        var oT;
        this.options = TT, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tickers = [], this.renderers = [], this.receivers = [], this.failures = [], this.vetoSet = !1, this.hooksSet = !1, this.writtenPublicLobby = !1, this.promptWatch = "off", this.promptWatchSent = "off", this.customButtons = new fi, this.generation = 0, this.sessionLive = !1, this.boundId = 0, this.session = null, this.activeConn = 0, this.closedThrough = 0, this.openSocket = 0, this.socketLeftSinceAttach = !1, this.ticks = 0, this.zoomUnshown = !1, this.zoomHeld = !1, this.overflowGen = 0, this.resyncOwed = !1, this.zoom = 0, this.pendingZoom = null, this.highlight = null, this.highlightOwed = !1, this.cmd = null, this.freeCam = new ei, this.stopped = () => !1, this.onError = void 0, this.api = void 0, this.tables = void 0, this.itemSources = null, this.fault = void 0, this.Bc = TT => {
          if ((0, xT.f)(TT)) throw TT;
          this.onError(TT)
        }, this.api = TT.api, this.tables = TT.tables, this.onError = null !== (oT = TT.onError) && void 0 !== oT ? oT : TT => {
          console.error("Error in client game callback", TT)
        }, this.renderFrame = new Ri(this.api, TT.screenBandY), this.live = new Mi(this.api), this.chunks = new Xo(this.api.memory, (() => this.api.apiView)), this.items = new rI({
          api: this.api,
          tables: TT.tables,
          cmd: () => this.cmd,
          onError: this.onError,
          beforeOp: TT.beforeOp
        });
        const IT = () => this.stopped() ? null : this.cmd,
          iT = () => this.sessionLive;
        this.entityInfoWatch = new tI({
          cmd: IT,
          onError: this.onError
        }), this.entityInfo = new GI({
          api: this.api,
          watch: this.entityInfoWatch,
          isSessionLive: iT
        }), this.particles = new aI({
          cmd: IT,
          isSessionLive: iT,
          onError: this.onError
        }), this.clientApi = new BI({
          api: this.api,
          live: this.live,
          chunks: this.chunks,
          items: this.items,
          entityInfo: this.entityInfo,
          particles: this.particles,
          tables: TT.tables,
          cmd: IT,
          sendCmd: () => this.sendCmd(),
          isSessionLive: iT,
          beforeWrite: () => {
            var oT;
            if (this.stopped()) return !1;
            const IT = this.generation;
            return !1 !== (null === (oT = TT.beforeWrite) || void 0 === oT ? void 0 : oT.call(TT)) && IT === this.generation
          },
          playerDbId: () => {
            const TT = this.session;
            if (null === TT) throw new Error("No game session has started, so the local player has no DB id");
            return TT.playerDbId
          },
          playSound: TT.playSound,
          setLocalOptions: TT.setLocalOptions,
          hasPackModel: TT.hasPackModel
        }), this.scriptedCamera = new pT({
          api: this.api,
          cmd: () => this.stopped() ? null : this.cmd,
          screen: TT.cameraScreen,
          showFacing: TT.showCameraFacing
        })
      }
      get itemBridgeSources() {
        return this.itemSources ??= Li(this.items, this.tables, (() => this.localPlayerAlive()), this.Bc), this.itemSources
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
        const oT = this.sessionLive ? this.sendCmd() : null;
        return null !== oT && (IT = oT, iT = 0, zT = TT[0], kT = TT[1], WT = TT[2], (0, so.b)(), (0, cT.ve)(IT, iT, zT, kT, WT));
        var IT, iT, zT, kT, WT
      }
      cameraZoom() {
        return this.zoom
      }
      setCameraZoom(TT) {
        const oT = this.liveCmd();
        return null === oT ? (this.pendingZoom = TT, !1) : (this.pendingZoom = null, (0, cT.lg)(oT, 0, TT, 1))
      }
      OE(TT) {
        const oT = this.stopped() ? null : this.cmd;
        return null !== oT && (0, cT.hg)(oT, 0, TT ? 1 : 0)
      }
      respawn() {
        const TT = this.sessionLive ? this.sendCmd() : null;
        return null !== TT && (oT = TT, IT = 0, (0, so.b)(), (0, cT.Hf)(oT, IT));
        var oT, IT
      }
      bindCustomButtonKeys(TT) {
        this.customButtons.set(TT)
      }
      pressCustomButton(TT, oT) {
        const IT = this.sessionLive ? this.sendCmd() : null;
        return null !== IT && Ci(IT, TT, oT)
      }
      padMove(TT, oT, IT, iT, zT, kT) {
        const WT = this.liveCmd();
        return null !== WT && (0, cT._e)(WT, 0, TT, oT, IT, iT, zT, kT)
      }
      thirdPersonFor(TT) {
        const oT = this.liveCmd();
        return null !== oT && (0, cT.pg)(oT, 0, null !== TT && void 0 !== TT ? TT : 1 / 0)
      }
      send(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const iT = 0 !== this.openSocket || this.sessionLive ? this.sendCmd() : null;
        return null !== iT && to(iT, IT ? LT.rd : 0, TT, (0, QT.f)(oT))
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
        const oT = () => TT.isStopped;
        this.stopped = oT, this.cmd = TT.rings.cmd, this.promptWatchSent = "off", this.writePromptWatch(), this.customButtons.attached(), this.writeCustomButtons();
        const IT = this.api.apiView;
        this.overflowGen = cT.s.eventOverflowGen(IT, 0), this.resyncOwed = 0 !== cT.s.eventOverflowMask(IT, 0), TT.setGameHost(this), TT.setEventWalker((TT => {
          this.api.walk(TT, this, oT)
        }))
      }
      watchPromptPick(TT) {
        this.promptWatch = TT, this.writePromptWatch()
      }
      get promptEntity() {
        return "off" === this.promptWatch || this.stopped() ? null : Oi(cT.s.promptEntity(this.api.apiView, 0))
      }
      get interactLabel() {
        return "touch" !== this.promptWatch || this.stopped() ? cT.qc.None : cT.s.interactLabel(this.api.apiView, 0)
      }
      get interactIcon() {
        return "touch" !== this.promptWatch || this.stopped() ? 0 : cT.s.interactIcon(this.api.apiView, 0)
      }
      closeGame() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        (0 === TT || TT >= this.openSocket) && (this.openSocket = 0), this.closedThrough = Math.max(this.closedThrough, TT, this.activeConn), this.activeConn = 0, this.endSession(), this.endGameGrants(), this.dropGameCamera()
      }
      gameCamera(TT) {
        0 !== this.activeConn && this.scriptedCamera.settingsChanged(TT)
      }
      netEvent(TT) {
        "connection" === TT.type ? TT.phase === LT.F.Activated && TT.conn !== this.activeConn && TT.conn > this.closedThrough ? (this.endSession(), this.activeConn = TT.conn, this.endGameGrants(), this.dropGameCamera()) : TT.phase !== LT.F.Left && TT.phase !== LT.F.Closed || TT.conn !== this.activeConn ? TT.phase === LT.F.Resumed && 0 !== this.activeConn && TT.conn > this.closedThrough && (this.activeConn = TT.conn) : this.closeGame() : TT.conn === this.activeConn && 0 !== TT.conn && (TT.US === Ai.C ? this.gunHit(TT.payload) : TT.US === pI.$b.EditItemCraftingRecipes || TT.US === Ai.db ? this.items.touch() : (this.serverOptions(TT), this.gameMessage(TT)));
        const oT = this.options.onNetEvent;
        oT && this.guard((() => {
          oT(TT)
        }))
      }
      serverOptions(TT) {
        const oT = this.options.serverOptions,
          IT = oT ? this.decoded(bI, TT) : null;
        oT && IT && this.guard((() => {
          oT.applyNewClientOptions(IT)
        }))
      }
      gameMessage(TT) {
        let oT = null;
        try {
          oT = function(TT) {
            if ("message" !== TT.type || TT.US !== pI.$b.GameCodeMessage || TT.payloadKind !== LT.fc.Msgpack) return null;
            const oT = (0, QT.e)(TT.payload);
            if (null === oT || "object" !== typeof oT || "string" !== typeof oT.messageType) throw new Error("GameCodeMessage without a messageType");
            return oT
          }(TT)
        } catch (IT) {
          this.sessionLive && this.onError(IT)
        }
        if (oT) {
          const {
            messageType: TT,
            data: IT
          } = oT;
          if ((0, fT.g)(TT)) return void this.guard((() => {
            (0, fT.c)(TT, IT)
          }));
          "freeCamPerms" === TT && this.freeCam.setGame(IT) && this.writeFreeCam(), this.sessionLive && this.round(this.receivers, (oT => {
            oT.onReceivedMessageFromServer(TT, IT)
          }))
        }
      }
      decoded(TT, oT) {
        try {
          return TT(oT)
        } catch (IT) {
          return this.onError(IT), null
        }
      }
      setClientFreeCameraGrant(TT, oT) {
        this.freeCam.setClient(TT, oT), this.writeFreeCam()
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
        const oT = this.highlight;
        this.highlightOwed = null === oT ? !(0, cT.Me)(TT, 0, ai, ai, 0) : !(0, cT.Me)(TT, 0, oT.pos, oT.normal, 1)
      }
      localPlayerBound(TT) {
        var oT, IT;
        if (0 === this.activeConn || this.sessionLive && TT === this.boundId) return;
        const iT = this.sessionLive;
        let zT, kT, WT, XT;
        this.endSession(), iT && this.restartGameCamera();
        try {
          var BT;
          this.session = null;
          const TT = this.options.sessionInfo(this.activeConn);
          if (this.session = TT, !TT) return;
          zT = TT.gameNameWithVariation, kT = null !== (BT = (0, vT.Fb)(zT)) && void 0 !== BT ? BT : void 0, WT = (0, ET.v)(TT.lobbyName), XT = (0, ET.L)(TT.lobbyName)
        } catch (AT) {
          return void this.onError(AT)
        }
        const FT = {
          localPlayerId: String(TT)
        };
        let ST = {},
          DT = {};
        try {
          var LT, xT;
          ST = null !== (LT = null === (xT = this.options.gameFactory((0, vT.Ib)(zT))) || void 0 === xT ? void 0 : xT(XT, WT, kT, FT)) && void 0 !== LT ? LT : {}
        } catch (AT) {
          this.Bc(AT)
        }
        try {
          var cT, KT;
          DT = {
            ...null === (cT = (KT = this.options).defaultPlugins) || void 0 === cT ? void 0 : cT.call(KT, XT, WT, kT, FT),
            ...ST.plugins
          }
        } catch (AT) {
          this.Bc(AT)
        }
        const MT = [ST, ...Object.values(DT)];
        this.owners = MT, this.tickers = MT.filter((TT => void 0 !== TT.dD)), this.renderers = MT.filter((TT => void 0 !== TT.onAfterRender)), this.receivers = MT.filter((TT => void 0 !== TT.onReceivedMessageFromServer)), this.writeAltVeto(MT), this.writeHooks(MT), this.writePublicLobby(XT), this.writeLocalDbId(null !== (oT = null === (IT = this.session) || void 0 === IT ? void 0 : IT.playerDbId) && void 0 !== oT ? oT : null), this.boundId = TT, this.sessionLive = !0, this.generation++, null !== this.pendingZoom && this.setCameraZoom(this.pendingZoom), this.highlightOwed ||= null !== this.highlight, this.writeOwedHighlight(), this.round(MT, (TT => {
          var oT;
          null === (oT = TT.onCreate) || void 0 === oT || oT.call(TT, this.clientApi)
        }));
        const rT = this.generation;
        setTimeout((() => {
          rT === this.generation && !0 === this.tables.getClientOption("creative") && Di(this.tables)
        }), 0)
      }
      chunkSlot(TT, oT, IT, iT, zT, kT) {
        this.chunks.apply(TT, oT, IT, iT, zT, kT)
      }
      entityAdded(TT) {
        var oT;
        this.entityInfo.stale(TT), null === (oT = this.options.replayEntities) || void 0 === oT || oT.entityAdded(TT)
      }
      entityInfoChanged(TT) {
        var oT;
        this.entityInfo.stale(TT), null === (oT = this.options.replayEntities) || void 0 === oT || oT.entityInfoChanged(TT)
      }
      afterPrescan() {
        this.items.refresh(), this.entityInfo.refresh(), this.api.rereadDirectory(), this.chunks.refresh(), this.live.refresh()
      }
      tickEnd() {
        if (this.ticks++, this.tickers.length > 0) {
          const TT = performance.now();
          this.round(this.tickers, Hi), (0, ii.c)(performance.now() - TT)
        }
      }
      afterWalk(TT) {
        this.ackEventOverflow(), this.clientApi.flushOwed(), this.writeOwedHighlight();
        const oT = this.options.replayEntities;
        oT && this.guard((() => {
          this.entityInfoWatch.want(sI, oT.wantsWatch), oT.flush(this.entityInfoWatch.on)
        }));
        const IT = (0, ii.m)(TT, cT.s.frameMs(this.api.apiView, 0));
        if (null !== IT) {
          const TT = this.renderFrame;
          this.guard((() => {
            (0, NI.c)().turnDamageIndicators(TT.cameraHeading)
          })), this.guard((() => {
            this.clientApi.slideRoute(IT)
          })), this.round(this.renderers, (oT => {
            oT.onAfterRender(IT, TT)
          }))
        }
        this.writeFreeCam();
        try {
          this.scriptedCamera.afterFrame(null !== IT)
        } catch (zT) {
          this.Bc(zT)
        }
        this.showZoom(), this.items.flush(this.Bc), this.writePromptWatch(), this.writeCustomButtons();
        const iT = this.ticks;
        this.ticks = 0, (0, ii.i)(iT, TT, IT, this.Bc)
      }
      entityRemoved(TT) {
        this.live.despawned(TT), this.entityInfo.removed(TT)
      }
      ackEventOverflow() {
        const TT = this.api.apiView,
          oT = cT.s.eventOverflowGen(TT, 0),
          IT = oT - this.overflowGen >>> 0;
        if (0 === IT && !this.resyncOwed) return;
        this.overflowGen = oT;
        const iT = cT.s.eventOverflowMask(TT, 0),
          zT = this.cmd;
        0 === iT || null === zT || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, cT.ye)(zT, 0, iT);
        const kT = this.options.onEventOverflow;
        0 !== IT && kT && this.guard((() => {
          kT(iT, IT)
        }))
      }
      gameCall(TT, oT, IT, iT, zT, kT, WT, XT, BT) {
        if (TT === cT.fc.Director) try {
          return this.scriptedCamera.call(oT, IT, iT, zT, kT, WT)
        } catch (FT) {
          return this.Bc(FT), cT.kb.None
        }
        if (!this.sessionLive || void 0 !== this.fault) return TT === cT.fc.AltVeto ? cT.k.Allow : 0;
        try {
          return this.callGames(TT, oT, IT, iT, zT, kT, WT, XT)
        } catch (FT) {
          throw (0, xT.f)(FT) && (this.fault = FT), FT
        }
      }
      takeFault() {
        const TT = this.fault;
        return this.fault = void 0, TT
      }
      callGames(TT, oT, IT, iT, zT, kT, WT, XT) {
        this.api.rereadDirectory(), this.chunks.touch(), this.items.refresh(), this.live.refresh(), this.entityInfo.inCoreCall();
        const {
          tables: BT
        } = this.options, FT = String(this.boundId);
        switch (TT) {
          case cT.fc.AltVeto:
          case cT.fc.AltAction: {
            const XT = 0 !== WT,
              [ST, DT, LT] = XT ? [oT, IT, iT] : [void 0, void 0, void 0],
              xT = XT ? BT.nameOfId(zT) : "Air",
              KT = Oi(kT);
            if (TT === cT.fc.AltAction) return this.first((TT => {
              var oT;
              return null === (oT = TT.onPlayerAltAction) || void 0 === oT ? void 0 : oT.call(TT, FT, ST, DT, LT, xT, KT)
            })), 0;
            const MT = this.first((TT => {
              var oT;
              return null === (oT = TT.onPlayerAttemptAltAction) || void 0 === oT ? void 0 : oT.call(TT, FT, ST, DT, LT, xT, KT)
            }));
            return "preventAction" === MT ? cT.k.Prevent : "preventPlacement" === MT ? cT.k.PreventPlacement : cT.k.Allow
          }
          case cT.fc.Click: {
            const TT = XT,
              ST = 0 !== (TT & cT.P.Alt),
              DT = 0 !== (TT & cT.P.HasPos),
              LT = DT ? BT.nameOfId(zT) : "Air",
              [xT, KT, MT] = DT ? [oT, IT, iT] : [null, null, null],
              rT = Oi(kT),
              AT = 0 !== (TT & cT.P.Up),
              gT = Oi(WT);
            if (0 === (TT & cT.P.AttackOnly) && this.first((TT => {
                var oT, IT;
                return AT ? null === (oT = TT.onPlayerClickUp) || void 0 === oT ? void 0 : oT.call(TT, FT, ST, xT, KT, MT, LT, rT) : null === (IT = TT.onPlayerClick) || void 0 === IT ? void 0 : IT.call(TT, FT, ST, xT, KT, MT, LT, rT)
              })), !AT && !ST && null !== gT) {
              const TT = this.clientApi.getPositionView(gT),
                oT = TT ? [TT[0], TT[1], TT[2]] : [0, 0, 0];
              this.first((TT => {
                var IT;
                return null === (IT = TT.onPlayerAttackEntity) || void 0 === IT ? void 0 : IT.call(TT, FT, gT, oT)
              }))
            }
            return 0
          }
          case cT.fc.ChangeBlock: {
            const TT = BT.nameOfId(zT),
              WT = BT.nameOfId(kT);
            return this.first((zT => {
              var kT;
              return null === (kT = zT.onPlayerChangeBlock) || void 0 === kT ? void 0 : kT.call(zT, FT, oT, IT, iT, TT, WT)
            })), 0
          }
          case cT.fc.DropItem: {
            const TT = BT.nameOfId(oT);
            return this.first((oT => {
              var zT;
              return null === (zT = oT.onPlayerDropItem) || void 0 === zT ? void 0 : zT.call(oT, FT, TT, IT, iT)
            })), 0
          }
          default:
            return this.onError(new Error(`Unknown game call kind ${TT}`)), 0
        }
      }
      changeBlockFail(TT, oT, IT, iT, zT, kT, WT) {
        const XT = zT === cT.Rc ? null : ji.decode(this.api.eventBytes(kT, Math.min(zT, WT)));
        this.failures.push({
          hI: [TT, oT, IT],
          wI: iT,
          mI: XT
        })
      }
      changeBlockFailEnd() {
        const TT = this.failures;
        this.failures = [], this.sessionLive && this.round(this.owners, (oT => {
          var IT;
          null === (IT = oT.onChangeBlockFail) || void 0 === IT || IT.call(oT, TT)
        })), this.XM("EditBoard", {
          pos: null
        }), this.XM("EditCodeBlock", {
          pos: null,
          canChangePos: null
        })
      }
      inventoryEvent(TT, oT, IT, iT, zT, kT) {
        TT === cT.vc.ChestOpened ? this.items.chestOpened(IT, iT, zT) : TT !== cT.vc.Synced && TT !== cT.vc.ChestClosed && TT !== cT.vc.ChestRefreshed || this.items.touch(), this.guard((() => {
          ! function(TT, oT, IT, iT) {
            switch (TT) {
              case cT.vc.Synced:
                WT.h.XM("syncedInvenFromServer");
                break;
              case cT.vc.ChestOpened:
              case cT.vc.ChestClosed:
                WT.h.XM("chestToggleFromServer", TT === cT.vc.ChestOpened, !0);
                break;
              case cT.vc.ChestRefreshed:
                WT.h.XM("chestRefreshedFromServer");
                break;
              case cT.vc.EnchantingTable:
                WT.h.XM("enchantingTable", {
                  mS: iT,
                  position: IT
                });
                break;
              case cT.vc.HotbarRequest:
                WT.h.XM("setSelectedInventorySlotI", oT, !0);
                break;
              case cT.vc.Scrolled:
                WT.h.XM("ScrollInventorySlot", oT);
                break;
              case cT.vc.NumberKey:
                WT.h.XM("numkeyPressed", oT + 1);
                break;
              case cT.vc.DropRequested:
                WT.h.XM("DropInvenItem", 0 !== oT);
                break;
              default:
                throw new xT.b(`InventoryEvent of no kind: what ${TT}`)
            }
          }(TT, oT, [IT, iT, zT], kT)
        }))
      }
      heldItemChanged() {
        this.items.touch()
      }
      shotDamage(TT, oT, IT, iT) {
        this.XM("shotPlayer", {
          playerId: String(TT),
          damage: oT,
          wasCrit: 0 !== iT,
          distance: IT
        })
      }
      localHurt(TT, oT) {
        this.XM("closeShopOnDamaged", null), this.guard((() => {
          WT.h.XM("damagedByOtherPlayer", {
            Ri: null,
            direction: Number.isNaN(oT) ? null : oT,
            MT: TT
          })
        }))
      }
      attackHit(TT, oT, IT, iT, zT) {
        this.guard((() => {
          WT.h.XM("yourAttackHit", {
            rI: iT,
            screenPos: this.renderFrame.projectDirectionToScreenPos([TT, oT, IT]),
            hitSelf: zT
          })
        }))
      }
      physicsType(TT) {
        this.XM("PlayerPhysicsTypeUpdate", TT)
      }
      vehicleEffect(TT, oT, IT, iT, zT) {
        this.guard((() => {
          TT === LT.Jd.UPDATE ? (0, jT.i)(oT, {
            icon: IT,
            level: iT,
            displayName: null,
            durationMs: zT
          }) : CT.b.remove(oT)
        }))
      }
      zoomChanged(TT) {
        this.zoom = TT, this.zoomUnshown = !0
      }
      zoomDisabled() {
        this.XM("showBottomMessage", {
          message: "Zoom is disabled",
          timeoutLength: 2e3,
          type: "Error"
        })
      }
      showZoom() {
        const TT = this.scriptedCamera.holdsView();
        !this.zoomUnshown || TT && this.zoomHeld || (this.zoomUnshown = !1, this.XM("cameraZoomSet", this.zoom)), this.zoomHeld = TT
      }
      gunHit(TT) {
        this.guard((() => {
          const {
            Ri: oT,
            ui: IT
          } = (0, ri.d)(Ai.C, TT);
          WT.h.XM("damagedByOtherPlayer", {
            Ri: oT,
            direction: IT
          })
        }))
      }
      uiEvent(TT, oT, IT, iT, zT, kT, WT, XT) {
        this.guard((() => {
          PI(TT, oT, [IT, iT, zT], kT, this.items, this.options.tables, (() => ji.decode(this.api.eventBytes(WT, XT))))
        }))
      }
      writeAltVeto(TT) {
        const oT = this.cmd;
        if (!oT) return;
        let IT;
        try {
          IT = function(TT, oT) {
            const IT = new Set;
            let iT = !1;
            for (const zT of TT)
              if (zT.onPlayerAttemptAltAction) {
                if (iT = !0, !zT.altVetoBlocks) return {
                  mode: cT.be.All,
                  roots: []
                };
                for (const TT of zT.altVetoBlocks) IT.add(oT.getMetaInfo(TT).rootId)
              } return iT ? IT.size > cT.Kc ? {
              mode: cT.be.All,
              roots: []
            } : {
              mode: cT.be.Filter,
              roots: [...IT]
            } : {
              mode: cT.be.Off,
              roots: []
            }
          }(TT, this.options.tables)
        } catch (zT) {
          this.onError(zT), IT = {
            mode: cT.be.All,
            roots: []
          }
        }
        if (IT.mode === cT.be.Off && !this.vetoSet) return;
        const iT = new Uint8Array(new Uint32Array(IT.roots).buffer);
        (0, cT.Rf)(oT, 0, IT.mode, IT.roots.length, iT) ? this.vetoSet = IT.mode !== cT.be.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
      }
      endGameGrants() {
        this.freeCam.clearGame(), this.writeFreeCam()
      }
      writeFreeCam() {
        this.stopped() || this.freeCam.write(this.cmd)
      }
      writeHooks(TT) {
        const oT = this.cmd;
        if (!oT) return;
        const IT = function(TT) {
          let oT = 0;
          for (const IT of TT) IT.onPlayerAltAction && (oT |= 1 << cT.fc.AltAction), (IT.onPlayerClick || IT.onPlayerClickUp || IT.onPlayerAttackEntity) && (oT |= 1 << cT.fc.Click), IT.onPlayerChangeBlock && (oT |= 1 << cT.fc.ChangeBlock), IT.onPlayerDropItem && (oT |= 1 << cT.fc.DropItem);
          return oT
        }(TT);
        (0 !== IT || this.hooksSet) && ((0, cT.bg)(oT, 0, IT) ? this.hooksSet = 0 !== IT : this.onError(new Error("SetHooks didn't fit the command ring")))
      }
      writeCustomButtons() {
        const TT = this.cmd;
        TT && !this.stopped() && this.customButtons.write(TT)
      }
      writePromptWatch() {
        const TT = this.cmd,
          oT = this.promptWatch;
        oT !== this.promptWatchSent && TT && !this.stopped() && (0, cT.sg)(TT, 0, Yi[oT]) && (this.promptWatchSent = oT)
      }
      writePublicLobby(TT) {
        const oT = this.cmd;
        oT && TT !== this.writtenPublicLobby && ((0, cT.kg)(oT, 0, TT ? 1 : 0) ? this.writtenPublicLobby = TT : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
      }
      writeLocalDbId(TT) {
        const oT = this.cmd;
        oT && ((0, cT.dg)(oT, 0, null === TT ? 0 : 1, null === TT ? Ui : Ji.encode(TT)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
      }
      first(TT) {
        const oT = this.generation;
        for (const iT of this.owners) {
          if (oT !== this.generation) break;
          try {
            const oT = TT(iT);
            if (void 0 !== oT) return oT
          } catch (IT) {
            this.Bc(IT)
          }
        }
      }
      XM(TT, oT) {
        this.guard((() => {
          WT.h.XM(TT, oT)
        }))
      }
      dropGameCamera() {
        try {
          this.scriptedCamera.reset()
        } catch (TT) {
          this.Bc(TT)
        }
      }
      restartGameCamera() {
        try {
          this.scriptedCamera.restart()
        } catch (TT) {
          this.Bc(TT)
        }
      }
      endSession() {
        if (!this.sessionLive) return;
        this.sessionLive = !1;
        const TT = this.owners;
        let oT;
        if (this.owners = this.tickers = this.renderers = this.receivers = [], this.generation++, !this.stopped()) try {
          this.writeAltVeto([]), this.writeHooks([]), this.writePublicLobby(!1), this.writeLocalDbId(null)
        } catch (iT) {
          oT = iT
        }
        try {
          this.entityInfo.sessionEnded()
        } catch (iT) {
          oT ??= iT
        }
        this.round(TT, ni, !0);
        try {
          this.particles.sessionEnded() || this.onError(new Error("ParticleStopAll didn't fit the command ring"))
        } catch (iT) {
          oT ??= iT
        }
        try {
          this.clientApi.disposeGameOutput()
        } catch (iT) {
          oT ??= iT
        }
        const IT = this.options.onSessionEnd;
        if (IT) try {
          IT()
        } catch (iT) {
          this.onError(iT)
        }
        void 0 !== oT && this.Bc(oT)
      }
      round(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const iT = this.generation;
        for (const kT of TT) {
          if (iT !== this.generation) break;
          try {
            oT(kT)
          } catch (zT) {
            IT ? this.onError(zT) : this.Bc(zT)
          }
        }
      }
      guard(TT) {
        try {
          TT()
        } catch (oT) {
          this.Bc(oT)
        }
      }
    }

    function Oi(TT) {
      return TT === cT.Vc ? null : String(TT)
    }

    function Hi(TT) {
      TT.dD(LT.zd)
    }

    function ni(TT) {
      var oT;
      null === (oT = TT.onClose) || void 0 === oT || oT.call(TT)
    }

    function qi(TT, oT) {
      TT.watch((() => {
        const IT = function(TT) {
          let oT = 0;
          const IT = Math.min(zi, TT.length);
          for (let zT = 0; zT < IT; zT++) {
            var iT;
            const IT = null === (iT = TT.slot(zT)) || void 0 === iT ? void 0 : iT.typeObj,
              kT = IT ? (0, Ii.gunTypeOf)(IT.id) : void 0;
            void 0 !== kT && (oT |= 1 << go[kT])
          }
          return oT
        }(TT);
        0 !== IT && (oT.preload(IT), oT.preload(1 << ho))
      }))
    }
    var Zi = IT(4341),
      li = IT(35713);

    function si(TT) {
      const oT = new Zi.Howl({
          ...(0, li.f)(TT),
          pool: 15,
          preload: !1
        }),
        IT = oT.load.bind(oT);
      return oT.load = () => (oT._preload = !0, IT()), oT
    }

    function ti(TT, oT, IT) {
      const iT = TT.listener;
      if (iT.positionX) Gi(iT.positionX, oT, IT, 0), Gi(iT.positionY, oT, IT, 1), Gi(iT.positionZ, oT, IT, 2), Gi(iT.forwardX, oT, IT, 3), Gi(iT.forwardY, oT, IT, 4), Gi(iT.forwardZ, oT, IT, 5), Gi(iT.upX, oT, IT, 6), Gi(iT.upY, oT, IT, 7), Gi(iT.upZ, oT, IT, 8);
      else {
        let TT = !1;
        for (let iT = 0; iT < 9; iT++) TT ||= oT[iT] !== IT[iT];
        TT && (iT.setPosition(oT[0], oT[1], oT[2]), iT.setOrientation(oT[3], oT[4], oT[5], oT[6], oT[7], oT[8]), IT.set(oT))
      }
    }

    function Gi(TT, oT, IT, iT) {
      oT[iT] !== IT[iT] && (TT.value = oT[iT], IT[iT] = oT[iT])
    }
    class bi {
      constructor() {
        this.pose = new Float64Array(9), this.written = new Float64Array(9).fill(Number.NaN), this.watchedCtx = void 0
      }
      apply(TT) {
        this.pose.set(TT);
        const oT = Zi.Howler.ctx;
        return !!oT && (oT !== this.watchedCtx && (this.watchedCtx = oT, this.written.fill(Number.NaN), oT.addEventListener("statechange", (() => {
          "running" === oT.state && ti(oT, this.pose, this.written)
        }))), "running" === oT.state && ti(oT, TT, this.written), !0)
      }
    }
    var yi = IT(35570),
      Ni = IT(38150);
    let Pi = null,
      di = null;

    function Vi() {
      return null === Pi && (Pi = document.createElement("div"), Pi.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none", document.body.append(Pi)), Pi
    }

    function Tz() {
      return di ??= new Ni.c(new yi.d(Vi)), di
    }

    function oz() {
      var TT;
      null === (TT = di) || void 0 === TT || TT.clear(), Iz(null)
    }

    function Iz(TT) {
      iT.c.get("scriptedCameraFacing") !== TT && iT.c.set({
        scriptedCameraFacing: TT
      })
    }
    var iz = IT(8914),
      zz = IT(8869),
      kz = IT(38180),
      Wz = IT(39524),
      Xz = IT(2844);
    const Bz = Object.entries(cT.dc).reduce(((TT, oT) => {
      let [IT, iT] = oT;
      return TT[iT] = IT, TT
    }), []);

    function Fz(TT, oT) {
      var IT;
      return 0 !== ((null !== (IT = TT.itemFlags[oT]) && void 0 !== IT ? IT : 0) & cT.yc.Stackable)
    }
    const Sz = /^(0|[1-9][0-9]*)$/,
      Dz = {
        displayName: (TT, oT) => (0, Ii.displayNameOf)(oT),
        description: (TT, oT) => (0, Ii.descriptionOf)(oT),
        type: (TT, oT) => (0, Ii.itemTypeOf)(oT),
        clipSize: (TT, oT) => (0, Ii.clipSizeOf)(oT),
        armourReduction: (TT, oT) => (0, Ii.armourReductionOf)(oT),
        scopeType: (TT, oT) => (0, Ii.scopeTypeOf)(oT),
        stackable: Fz,
        harvestType: (TT, oT) => Bz[TT.blockHarvestTypes[oT]],
        harvestLevel: (TT, oT) => {
          const IT = TT.blockHarvestLevels[oT];
          return IT === cT.Fc ? void 0 : IT
        },
        harvests: (TT, oT) => {
          var IT;
          const iT = null !== (IT = TT.itemHarvests[oT]) && void 0 !== IT ? IT : 0;
          return 0 !== iT ? Bz[iT] : void 0 === (0, Ii.harvestsNullLevelOf)(oT) ? void 0 : null
        },
        level: (TT, oT) => {
          var IT, iT;
          const zT = null !== (IT = TT.itemLevels[oT]) && void 0 !== IT ? IT : cT.Fc;
          return zT !== cT.Fc ? zT : null !== (iT = (0, Ii.harvestsNullLevelOf)(oT)) && void 0 !== iT ? iT : void 0
        }
      };

    function Lz(TT, oT, IT) {
      return cz(new Uint8Array(Math.floor(TT.length / oT)), TT, oT, IT)
    }

    function xz(TT, oT, IT) {
      return cz(new Uint16Array(Math.floor(TT.length / oT)), TT, oT, IT)
    }

    function cz(TT, oT, IT, iT) {
      const zT = new DataView(oT.buffer, oT.byteOffset, oT.byteLength);
      for (let kT = 0; kT < TT.length; kT++) TT[kT] = iT(zT, kT * IT);
      return TT
    }
    class Kz {
      constructor(TT, oT) {
        this.options = oT, this.metas = [], this.types = new Map, this.props = void 0, this.rootIdOf = TT => {
          const oT = this.idOf(TT);
          if (void 0 === oT) throw new Error(`No item is named ${TT}, an item's root`);
          return oT
        };
        const IT = oT => {
            const IT = oT();
            return new Uint8Array(TT.memory().buffer, TT.scratch(), IT).slice()
          },
          iT = (new TextDecoder).decode(IT((() => TT.queries.itemNames()))).split("\n"),
          zT = IT((() => TT.queries.blockProps())),
          kT = IT((() => TT.queries.itemProps()));
        this.props = {
          blockFlags: Lz(zT, cT.y.BYTES, cT.y.flags),
          blockHarvestTypes: Lz(zT, cT.y.BYTES, cT.y.harvestType),
          blockHarvestLevels: Lz(zT, cT.y.BYTES, cT.y.harvestLevel),
          blockAttachedTops: xz(zT, cT.y.BYTES, cT.y.attachedTop),
          itemFlags: Lz(kT, cT.Cc.BYTES, cT.Cc.flags),
          itemHarvests: Lz(kT, cT.Cc.BYTES, cT.Cc.harvests),
          itemLevels: Lz(kT, cT.Cc.BYTES, cT.Cc.level)
        }, (0, Xz.l)(Object.freeze(iT)), (0, Wz.e)()
      }
      idOf(TT) {
        if ("number" === typeof TT) return void 0 === (0, Xz.g)(TT) ? void 0 : TT;
        const oT = (0, Xz.d)(TT);
        return void 0 === oT && Sz.test(TT) ? void 0 === (0, Xz.g)(+TT) ? void 0 : +TT : oT
      }
      getMetaInfo(TT) {
        if (!TT || TT === iz.c) return iz.d;
        const oT = this.idOf(TT);
        if (void 0 === oT) throw new Error(`Item ${TT} not found in registry`);
        return this.metaOf(oT)
      }
      blockRootId(TT) {
        return 0 !== TT && void 0 !== (0, Xz.g)(TT) ? this.metaOf(TT).rootId : TT
      }
      metaOf(TT) {
        return this.metas[TT] ??= (0, zz.j)((0, Xz.g)(TT), TT, this.rootIdOf, (0, Ii.rootMetaDescOf)(TT))
      }
      getItemId(TT) {
        if (!TT || TT === iz.c) return 0;
        const oT = this.idOf(TT);
        if (void 0 === oT) throw new Error(`Invalid block name. You sent ${TT}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
        return oT
      }
      getItemName(TT) {
        if (!TT || TT === iz.c) return iz.c;
        const oT = this.idOf(TT);
        if (void 0 === oT) throw new Error(`Item ${TT} not found in registry`);
        return (0, Xz.g)(oT)
      }
      blockNameToBlockId(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (TT === iz.c) return 0;
        let IT = this.idOf(TT);
        if (void 0 === IT || !this.isBlockId(IT)) {
          const oT = TT.indexOf("|"),
            iT = oT > 0 ? (0, Xz.d)(TT.slice(0, oT)) : void 0;
          IT = void 0 !== iT && this.isBlockId(iT) && (0, Ii.rootMetaDescOf)(iT) === TT ? iT : void 0
        }
        if (void 0 !== IT) return IT;
        if (!oT) throw new Error(`Invalid block name. You sent ${TT}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
        return null
      }
      isBlockId(TT) {
        return TT > 0 && TT < this.props.blockFlags.length
      }
      nameOfId(TT) {
        return 0 !== TT && (0, Xz.g)(TT) || iz.c
      }
      itemType(TT) {
        const oT = TT ? this.idOf(TT) : void 0;
        if (!oT) return null;
        let IT = this.types.get(oT);
        return void 0 === IT && (IT = Object.freeze({
          id: oT,
          name: (0, Xz.g)(oT),
          meta: this.getMetaInfo(oT),
          stackable: Fz(this.props, oT),
          type: (0, Ii.itemTypeNameOf)(oT),
          clipSize: (0, Ii.clipSizeOf)(oT),
          scopeType: (0, Ii.scopeTypeOf)(oT),
          showsAimingUi: (0, Ii.showsAimingUi)(oT)
        }), this.types.set(oT, IT)), IT
      }
      getItemStat(TT, oT) {
        if (kz.d.has(oT)) {
          const IT = "minChargeStateToUse" === oT ? this.getMetaInfo(TT).rootName : this.getItemName(TT),
            iT = this.options.get((0, kz.f)(IT, oT));
          if (null !== iT && void 0 !== iT) return iT
        }
        return this.defaultStat(TT, oT, this.statOf(oT))
      }
      getDisplayName(TT) {
        return this.getItemStat(TT, "displayName")
      }
      getDefaultItemStat(TT, oT) {
        return this.defaultStat(TT, oT, this.statOf(oT))
      }
      statOf(TT) {
        const oT = Dz[TT];
        return void 0 === oT && function(TT, oT) {
          throw new Error(`ClientApi.${TT} is not available yet in the wasm client (${oT})`)
        }(`getItemStat("${TT}")`, `a table of the stat: the wasm client answers ${Object.keys(Dz).join(", ")}`), oT
      }
      defaultStat(TT, oT, IT) {
        const iT = this.idOf(TT),
          zT = void 0 === iT ? void 0 : IT(this.props, iT);
        return null !== zT && void 0 !== zT || "displayName" !== oT ? zT : this.getItemName(TT)
      }
      getClientOption(TT) {
        return this.options.get(TT)
      }
      getGunStats(TT) {
        return this.getClientOption(`${TT}GunStats`)
      }
      watchClientOption(TT, oT) {
        return this.options.subscribe(TT, oT)
      }
      isSolidBlockId(TT) {
        var oT;
        return 0 !== ((null !== (oT = this.props.blockFlags[TT]) && void 0 !== oT ? oT : 0) & cT.x.Solid)
      }
      isStackableId(TT) {
        return Fz(this.props, TT)
      }
      isFluidBlockId(TT) {
        var oT;
        return 0 !== ((null !== (oT = this.props.blockFlags[TT]) && void 0 !== oT ? oT : 0) & cT.x.Fluid)
      }
      canPlaceOverBlockId(TT) {
        var oT;
        return 0 !== ((null !== (oT = this.props.blockFlags[TT]) && void 0 !== oT ? oT : 0) & cT.x.PlaceOver)
      }
      attachedTopOf(TT) {
        var oT;
        return null !== (oT = this.props.blockAttachedTops[TT]) && void 0 !== oT ? oT : 0
      }
      isDroplessBlockId(TT) {
        return (0, Ii.dropsNothing)(TT)
      }
    }

    function Mz(TT, oT) {
      const IT = new Map;
      return (iT, zT) => {
        const kT = oT.idOf(iT),
          WT = void 0 === kT ? null : (iT => {
            let zT = IT.get(iT);
            if (void 0 === zT) {
              const kT = TT.queries.salvageRecipe(iT),
                WT = new DataView(TT.memory().buffer, TT.scratch(), kT),
                XT = [];
              for (let TT = 0; TT + cT.Td.BYTES <= kT; TT += cT.Td.BYTES) XT.push(Object.freeze({
                item: oT.nameOfId(cT.Td.item(WT, TT)),
                amt: cT.Td.amount(WT, TT)
              }));
              zT = 0 === XT.length ? null : Object.freeze(XT), IT.set(iT, zT)
            }
            return zT
          })(kT);
        if (null === WT || void 0 === zT) return WT;
        const XT = zT <= 0 ? 1 : zT;
        return WT.map((TT => {
          let {
            item: oT,
            amt: IT
          } = TT;
          return {
            item: oT,
            amt: IT * XT
          }
        }))
      }
    }
    var rz = IT(39717),
      Az = IT(35906),
      gz = IT(35890),
      hz = IT(35944),
      wz = IT(35498),
      mz = IT(39465),
      ez = IT(41386);
    const Rz = -1,
      uz = new Uint8Array(0),
      vz = new TextEncoder;

    function Ez(TT) {
      if (null === TT) return null;
      const oT = vz.encode(TT);
      return oT.byteLength < LT.Dc ? oT : oT.subarray(0, LT.Dc - 1)
    }
    class fz {
      constructor(TT) {
        this.deps = TT, this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = Rz, this.keyframesSettled = !1, this.reloadFrom = Rz
      }
      reloadKeyframes() {
        var TT, oT;
        this.keyframesVersion = Rz, this.reloadFrom = null !== (TT = null === (oT = this.view()) || void 0 === oT ? void 0 : oT.version) && void 0 !== TT ? TT : Rz
      }
      setPlayback(TT) {
        const oT = 1 === this.deps.core.czT(TT);
        return oT && (this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = Rz, this.reloadFrom = Rz), oT
      }
      async open(TT) {
        const oT = await this.deps.replay.open(TT);
        return "opening" === oT && (this.reloadKeyframes(), this.deps.recorder.prefetch()), oT
      }
      play() {
        this.deps.replay.play()
      }
      pause() {
        this.deps.replay.pause()
      }
      seek(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.deps.replay.seek(Math.max(0, Math.floor(TT)), oT)
      }
      setSpeed(TT) {
        this.deps.replay.setSpeed(TT)
      }
      setCameraMode(TT) {
        this.deps.replay.setCameraMode(ez.e.indexOf(TT))
      }
      view() {
        var TT;
        const oT = cT.s.replayViewPtr(this.deps.apiView(), 0);
        if (0 === oT) return this.lastView = null, null;
        const IT = new DataView(this.deps.buffer(), oT, cT.Kd.BYTES),
          iT = cT.Kd.version(IT, 0),
          zT = this.lastView;
        if (null !== zT && zT.version === iT) return zT;
        const kT = cT.Kd.markIn(IT, 0),
          WT = {
            version: iT,
            state: cT.Kd.state(IT, 0),
            cameraMode: null !== (TT = ez.e[cT.Kd.cameraMode(IT, 0)]) && void 0 !== TT ? TT : "recording",
            dD: cT.Kd.dD(IT, 0),
            totalTicks: cT.Kd.totalTicks(IT, 0),
            speed: cT.Kd.speed(IT, 0),
            mark: kT === cT.Id ? null : {
              inTick: kT,
              outTick: cT.Kd.markOut(IT, 0)
            },
            editVersion: cT.Kd.editVersion(IT, 0)
          };
        return this.lastView = WT, WT
      }
      keyframes() {
        const TT = this.view();
        if (null === TT) return [];
        TT.version !== this.reloadFrom && (this.reloadFrom = Rz);
        const oT = this.reloadFrom === Rz && TT.state !== LT.pd.Cropping && TT.state !== LT.pd.None,
          IT = oT ? TT.editVersion : TT.version;
        if (IT === this.keyframesVersion && oT === this.keyframesSettled) return this.lastKeyframes;
        const {
          core: iT
        } = this.deps, zT = iT.KzT(), kT = iT.CM(), WT = [];
        if (0 !== kT && zT > 0) {
          const TT = new DataView(this.deps.buffer(), kT, zT * LT.tc);
          for (let oT = 0; oT < zT; oT++) {
            const IT = oT * LT.tc,
              iT = oT => TT.getFloat64(IT + oT, !0);
            WT.push({
              dD: TT.getUint32(IT + LT.Cc, !0),
              position: [iT(LT.zc), iT(LT.zc + 8), iT(LT.zc + 16)],
              direction: [iT(LT.xc), iT(LT.xc + 8), iT(LT.xc + 16)],
              easing: [iT(LT.yc), iT(LT.yc + 8), iT(LT.yc + 16), iT(LT.yc + 24)]
            })
          }
        }
        return this.keyframesVersion = IT, this.keyframesSettled = oT, this.lastKeyframes = WT, WT
      }
      addKeyframe() {
        const TT = this.deps.apiView(),
          oT = [cT.s.eye(TT, 0, 0), cT.s.eye(TT, 0, 1), cT.s.eye(TT, 0, 2)];
        return this.deps.replay.addKeyframe(oT, function(TT, oT) {
          const IT = Math.cos(oT);
          return [IT * Math.sin(TT), -Math.sin(oT), IT * Math.cos(TT)]
        }(cT.s.heading(TT, 0), cT.s.pitch(TT, 0)))
      }
      setKeyframe(TT) {
        return this.deps.replay.setKeyframe(TT.dD, Float64Array.from([...TT.position, ...TT.direction, ...TT.easing]))
      }
      moveKeyframe(TT, oT) {
        return this.deps.replay.moveKeyframe(TT, oT)
      }
      deleteKeyframes(TT, oT) {
        return this.deps.replay.deleteKeyframes(TT, oT)
      }
      setMark(TT) {
        var oT, IT;
        return this.deps.replay.setMark(null !== (oT = null === TT || void 0 === TT ? void 0 : TT.inTick) && void 0 !== oT ? oT : -1, null !== (IT = null === TT || void 0 === TT ? void 0 : TT.outTick) && void 0 !== IT ? IT : -1)
      }
      crop(TT, oT) {
        const IT = this.deps.replay.crop(TT, oT);
        return IT && this.reloadKeyframes(), IT
      }
      save(TT) {
        return this.deps.replay.askSave(), this.deps.recorder.saveEdited(TT)
      }
      recorderControl(TT) {
        this.deps.recorder.control(TT)
      }
      recorderPrefs(TT, oT) {
        this.deps.recorder.prefs(TT, oT)
      }
      recorderOption(TT, oT) {
        const IT = this.deps.cmd();
        return null !== IT && (0, cT.Af)(IT, 0, TT, null === oT ? uz : vz.encode(oT))
      }
      recordFlyingText(TT, oT, IT, iT) {
        const zT = this.deps.cmd(),
          kT = Math.max(0, Math.min(4294967295, Math.round(iT)));
        return null !== zT && (0, cT.uf)(zT, 0, oT, IT, kT, vz.encode(TT))
      }
      recordPlayerKilled(TT, oT, IT, iT) {
        const zT = this.deps.cmd();
        return null !== zT && (0, cT.Ef)(zT, 0, TT, oT, Math.max(0, IT), vz.encode(iT))
      }
      recordKillfeed(TT, oT, IT) {
        var iT, zT;
        const kT = this.deps.cmd(),
          WT = function(TT) {
            const oT = TT.reduce(((TT, oT) => {
                var IT;
                return TT + pI.mb + (null !== (IT = null === oT || void 0 === oT ? void 0 : oT.byteLength) && void 0 !== IT ? IT : 0)
              }), 0),
              IT = new Uint8Array(oT),
              iT = new DataView(IT.buffer);
            let zT = 0;
            for (const WT of TT) {
              var kT;
              iT.setUint16(zT, null !== (kT = null === WT || void 0 === WT ? void 0 : WT.byteLength) && void 0 !== kT ? kT : LT.Dc, !0), zT += pI.mb, null !== WT && (IT.set(WT, zT), zT += WT.byteLength)
            }
            return IT
          }([Ez(TT.name), Ez(TT.colour), Ez(oT.name), Ez(oT.colour), Ez(IT)]);
        return null !== kT && (0, cT.xf)(kT, 0, null !== (iT = TT.id) && void 0 !== iT ? iT : cT.Yc, null !== (zT = oT.id) && void 0 !== zT ? zT : cT.Yc, WT)
      }
      recorderSession(TT, oT) {
        this.deps.recorder.session({
          session: oT,
          lobbyType: TT.lobbyType,
          game: TT.gameNameWithVariation,
          lobby: TT.lobbyName
        })
      }
      recorderClose() {
        this.deps.core.MzT()
      }
      filePartDone(TT, oT) {
        this.deps.recorder.filePartDone(TT, oT)
      }
      fileDone(TT) {
        this.deps.recorder.fileDone(TT)
      }
    }
    const Cz = -2147483648;
    class jz {
      constructor(TT) {
        var oT;
        this.deps = TT, this.state = {
          recording: !1,
          clipping: !1,
          hasClipBuffer: !1,
          seconds: 0
        }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (oT = TT.now) && void 0 !== oT ? oT : () => performance.now()
      }
      get current() {
        return this.state
      }
      get live() {
        var TT, oT, IT;
        return null === (TT = null === (oT = (IT = this.deps).live) || void 0 === oT ? void 0 : oT.call(IT)) || void 0 === TT || TT
      }
      activated(TT) {
        var oT, IT;
        this.live && (this.viewerShown(!0 === (null === (oT = (IT = this.deps).viewerOpen) || void 0 === oT ? void 0 : oT.call(IT))), this.deps.client.recorderSession(TT, (0, ez.f)()))
      }
      closed() {
        this.deps.client.recorderClose()
      }
      toggleRecording() {
        var TT, oT;
        this.live && (this.state.recording || !0 !== (null === (TT = (oT = this.deps).viewerOpen) || void 0 === TT ? void 0 : TT.call(oT))) ? this.deps.client.recorderControl(LT.Xc.ToggleRecording) : this.deps.notify(hz.e.closeViewerFirst)
      }
      saveClip() {
        this.live ? this.deps.client.recorderControl(LT.Xc.SaveClip) : this.deps.notify(hz.e.clippingNotOn)
      }
      viewerShown(TT) {
        this.live && this.deps.client.recorderControl(TT ? LT.Xc.ViewerOpened : LT.Xc.ViewerClosed)
      }
      setPrefs(TT, oT) {
        this.live && this.deps.client.recorderPrefs(TT, oT)
      }
      setOption(TT, oT) {
        this.live && this.deps.client.recorderOption(TT, oT)
      }
      recordFlyingText(TT, oT, IT, iT) {
        this.live && this.deps.client.recordFlyingText(TT, oT, IT, iT)
      }
      recordPlayerKilled(TT, oT, IT, iT) {
        this.live && this.deps.client.recordPlayerKilled(TT, oT, IT, iT)
      }
      recordKillfeed(TT, oT, IT) {
        this.live && this.deps.client.recordKillfeed(TT, oT, IT)
      }
      dD() {
        let TT = this.state;
        if (this.clipTickPending && (this.clipTickPending = !1, TT = {
            ...TT,
            hasClipBuffer: !0
          }), null !== this.recordingSince) {
          const oT = Math.floor((this.now() - this.recordingSince) / 1e3);
          oT !== TT.seconds && (TT = {
            ...TT,
            seconds: oT
          })
        }
        this.set(TT)
      }
      onEvent(TT) {
        var oT, IT;
        const {
          notify: iT
        } = this.deps, zT = hz.e;
        switch (TT.what) {
          case LT.Uc.RecordingStarted:
            this.recordingSince = this.now(), this.set({
              ...this.state,
              recording: !0,
              seconds: 0
            }), iT(zT.recordingStarted);
            break;
          case LT.Uc.RecordingStopped:
            this.stopRecording(), iT(zT.recordingStopped), this.saveState(LT.gd.Recording, "saving");
            break;
          case LT.Uc.RecordingDiscarded:
            this.stopRecording(), iT(zT.recordingDiscarded);
            break;
          case LT.Uc.RecordingTurnedOff:
            this.stopRecording(), iT(zT.recordingTurnedOff);
            break;
          case LT.Uc.LimitReached:
            iT(zT.limitReached);
            break;
          case LT.Uc.ClipSaved:
            this.saveState(LT.gd.Clip, "saving");
            break;
          case LT.Uc.ClipEmpty:
            iT(zT.clipEmpty);
            break;
          case LT.Uc.ClippingNotOn:
            iT(zT.clippingNotOn);
            break;
          case LT.Uc.Disallowed:
            iT(zT.disallowed);
            break;
          case LT.Uc.ClippingOn:
            this.clipTickPending = !0, this.set({
              ...this.state,
              clipping: !0,
              hasClipBuffer: !1
            });
            break;
          case LT.Uc.ClippingOff:
            this.clipTickPending = !1, this.set({
              ...this.state,
              clipping: !1,
              hasClipBuffer: !1
            });
            break;
          case LT.Uc.ClipSettingsChanged:
            this.clipTickPending = this.state.clipping, this.set({
              ...this.state,
              hasClipBuffer: !1
            });
            break;
          case LT.Uc.SaveBusy:
            null === (oT = (IT = this.deps).onSaveState) || void 0 === oT || oT.call(IT, TT.kind, "busy"), iT(zT.saveBusy);
            break;
          case LT.Uc.CloseViewerFirst:
            iT(zT.closeViewerFirst)
        }
      }
      fileReady(TT, oT) {
        this.deps.download(oT), this.saveState(TT, "done"), this.deps.notify(TT === LT.gd.Clip ? hz.e.clipSaved : hz.e.recordingSaved)
      }
      failed(TT) {
        this.saveState(TT, "failed"), this.deps.notify(TT === LT.gd.Clip ? hz.e.clipFailed : hz.e.recordingFailed)
      }
      stopRecording() {
        this.recordingSince = null, this.set({
          ...this.state,
          recording: !1,
          seconds: 0
        })
      }
      saveState(TT, oT) {
        var IT, iT;
        null === (IT = (iT = this.deps).onSaveState) || void 0 === IT || IT.call(iT, TT, oT)
      }
      set(TT) {
        TT !== this.state && (this.state = TT, this.deps.onState(TT))
      }
    }
    const Jz = new TextDecoder;

    function Uz(TT, oT, IT, iT) {
      const zT = [];
      for (let kT = 0; kT < iT; kT++) {
        if (oT + pI.mb > IT) return null;
        const iT = TT.getUint16(oT, !0);
        if (oT += pI.mb, iT !== LT.Dc) {
          if (oT + iT > IT) return null;
          zT.push(Jz.decode(new Uint8Array(TT.buffer, TT.byteOffset + oT, iT))), oT += iT
        } else zT.push(null)
      }
      return oT === IT ? zT : null
    }

    function az(TT, oT) {
      let IT = new DataView(new ArrayBuffer(0)),
        iT = !0;
      const zT = {
        replayFailed: (oT, IT) => {
          TT.replayFailed({
            reason: oT,
            code: IT
          })
        },
        replayOption: (oT, zT, kT, WT) => {
          const XT = function(TT, oT, IT, iT) {
            switch (oT) {
              case LT.kd.Cleared:
                return 0 === iT ? null : void 0;
              case LT.kd.Text:
                return Jz.decode(new Uint8Array(TT.buffer, TT.byteOffset + IT, iT));
              case LT.kd.Int:
                return iT === Int32Array.BYTES_PER_ELEMENT ? TT.getInt32(IT, !0) : void 0;
              case LT.kd.Double:
                return iT === Float64Array.BYTES_PER_ELEMENT ? TT.getFloat64(IT, !0) : void 0;
              default:
                return
            }
          }(IT, zT, kT, WT);
          void 0 !== XT ? TT.replayOption({
            key: oT,
            value: XT
          }) : iT = !1
        },
        replayUiEvent: (oT, zT, kT, WT, XT, BT) => {
          const FT = function(TT, oT, IT, iT, zT, kT, WT) {
            const XT = kT + WT;
            switch (oT) {
              case LT.ld.FlyingText: {
                const WT = Uz(TT, kT, XT, 1);
                return null !== WT && null !== WT[0] ? {
                  what: oT,
                  OT: IT,
                  QT: iT,
                  angle: zT,
                  contentJson: WT[0]
                } : null
              }
              case LT.ld.PlayerKilled: {
                const iT = Uz(TT, kT, XT, 3);
                return iT ? {
                  what: oT,
                  killstreak: IT,
                  dead: iT[0],
                  killer: iT[1],
                  withItem: iT[2]
                } : null
              }
              case LT.ld.Killfeed: {
                const IT = Uz(TT, kT, XT, 7);
                return IT ? {
                  what: oT,
                  killerId: IT[0],
                  killerName: IT[1],
                  killerColour: IT[2],
                  victimId: IT[3],
                  victimName: IT[4],
                  victimColour: IT[5],
                  withItem: IT[6]
                } : null
              }
              default:
                return null
            }
          }(IT, oT, zT, kT, WT, XT, BT);
          null !== FT ? TT.replayUiEvent(FT) : iT = !1
        },
        replayFilePart: (IT, zT, kT, WT) => {
          const XT = oT();
          kT + WT > XT.byteLength ? iT = !1 : TT.filePart(IT, zT, new Uint8Array(XT, kT, WT).slice())
        },
        replayFileReady: (oT, IT, iT, zT) => {
          TT.fileReady({
            save: oT,
            kind: IT,
            parts: iT,
            bytes: zT
          })
        },
        recorderEvent: (oT, IT, iT) => {
          TT.recorderEvent({
            what: oT,
            kind: IT,
            save: iT
          })
        },
        replayOpened: (oT, iT, zT) => {
          TT.replayOpened(Jz.decode(new Uint8Array(IT.buffer, IT.byteOffset + iT, zT)))
        }
      };
      return (TT, oT, kT, WT) => !(TT < LT.R.ReplayFailed || TT > LT.R.RecorderEvent) && (IT = oT, iT = !0, (0, cT.je)(TT, oT, kT, WT, zT) && iT)
    }

    function Yz(TT) {
      let oT = null;
      const IT = az(TT, (() => {
        if (null === oT) throw new Error("a recorder event read outside recorderEventReader's call");
        return oT.buffer
      }));
      return (TT, iT) => {
        oT = iT;
        try {
          ! function(TT, oT) {
            const IT = TT.slice(),
              iT = new DataView(IT.buffer);
            for (let zT = 0; zT < IT.byteLength;) {
              if (zT + LT.P > IT.byteLength) throw new Error(`the recorder module's events end mid-head at ${zT}`);
              const TT = iT.getUint32(zT, !0),
                kT = 65535 & TT,
                WT = TT >>> 16,
                XT = zT + LT.P;
              if (XT + WT > IT.byteLength || !oT(kT, iT, XT, WT)) throw new Error(`the recorder module wrote a malformed event ${kT} (${WT} bytes) at ${zT}`);
              zT = XT + (0, LT.se)(WT)
            }
          }(TT, IT)
        } finally {
          oT = null
        }
      }
    }
    class Qz {
      constructor(TT, oT) {
        this.acks = TT, this.handlers = oT, this.parts = new Map
      }
      onPart(TT, oT, IT) {
        let iT = this.parts.get(TT);
        iT || (iT = [], this.parts.set(TT, iT)), iT[oT] = IT, this.acks.filePartDone(TT, oT)
      }
      onReady(TT) {
        var oT;
        const IT = null !== (oT = this.parts.get(TT.save)) && void 0 !== oT ? oT : [];
        this.parts.delete(TT.save);
        const iT = function(TT, oT, IT) {
          if (TT.length !== oT) return null;
          let iT = 0;
          for (let WT = 0; WT < oT; WT++) {
            if (void 0 === TT[WT]) return null;
            iT += TT[WT].byteLength
          }
          if (iT !== IT) return null;
          if (1 === oT) return TT[0];
          const zT = new Uint8Array(IT);
          let kT = 0;
          for (const WT of TT) zT.set(WT, kT), kT += WT.byteLength;
          return zT
        }(IT, TT.parts, TT.bytes);
        this.acks.fileDone(TT.save), null === iT ? this.handlers.fileIncomplete(TT.save, TT.kind) : this.handlers.fileReady(TT.save, TT.kind, iT)
      }
      onDiscarded(TT) {
        this.parts.delete(TT)
      }
    }

    function Oz() {
      return IT.e(57).then((() => IT(41417)))
    }
    class Hz {
      constructor(TT) {
        this.deps = TT, this.sink = void 0, this.recorder = void 0, this.recorderEvents = void 0, this.parts = void 0, this.viewerChunk = null, this.viewer = null;
        const {
          client: oT
        } = TT;
        this.recorder = new jz({
          client: oT,
          live: () => {
            var TT;
            return !0 !== (null === (TT = this.viewer) || void 0 === TT ? void 0 : TT.inPlayback)
          },
          viewerOpen: TT.viewerOpen,
          notify: TT.notify,
          download: oT => {
            var IT;
            null === (IT = TT.download) || void 0 === IT || IT.call(TT, oT)
          },
          onState: TT.onRecorderState,
          onSaveState: TT.onSaveState
        }), this.parts = new Qz(oT, {
          fileReady: (TT, oT, IT) => {
            var iT;
            oT === LT.gd.Edited ? null === (iT = this.viewer) || void 0 === iT || iT.saveDone(IT) : this.recorder.fileReady(oT, IT)
          },
          fileIncomplete: (TT, oT) => {
            this.saveFailed(oT)
          }
        });
        const IT = {
          replayFailed: TT => {
            var oT;
            null === (oT = this.viewer) || void 0 === oT || oT.onFailed(TT)
          },
          replayOption: oT => {
            var IT;
            null === (IT = TT.onReplayOption) || void 0 === IT || IT.call(TT, oT)
          },
          replayUiEvent: oT => {
            var IT;
            null === (IT = TT.onReplayUiEvent) || void 0 === IT || IT.call(TT, oT)
          },
          filePart: (TT, oT, IT) => {
            this.parts.onPart(TT, oT, IT)
          },
          fileReady: TT => {
            this.parts.onReady(TT)
          },
          replayOpened: oT => {
            var IT;
            null === (IT = TT.onReplayOpened) || void 0 === IT || IT.call(TT, oT)
          },
          recorderEvent: TT => {
            var oT;
            switch (TT.what) {
              case LT.Uc.FileDiscarded:
                this.parts.onDiscarded(TT.save);
                break;
              case LT.Uc.SaveFailed:
                this.saveFailed(TT.kind);
                break;
              case LT.Uc.SaveBusy:
                if (null !== (oT = this.viewer) && void 0 !== oT && oT.savePending) {
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
        this.sink = function(TT, oT) {
          return {
            onReplayEvent: az(TT, oT)
          }
        }(IT, TT.buffer), this.recorderEvents = Yz(IT)
      }
      get currentViewer() {
        return this.viewer
      }
      loadViewer() {
        var TT;
        return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (TT = this.deps.loadViewer) && void 0 !== TT ? TT : Oz)().catch((TT => {
          throw this.viewerChunk = null, TT
        })), this.viewerChunk.then((TT => (this.viewer ??= new TT.ReplayViewer({
          client: this.deps.client,
          setHoldDraws: this.deps.setHoldDraws,
          meshPending: this.deps.meshPending,
          notify: this.deps.notify,
          onChange: () => {
            var TT, oT;
            null === (TT = (oT = this.deps).onViewerChange) || void 0 === TT || TT.call(oT)
          }
        }), this.viewer))))
      }
      activated(TT) {
        this.recorder.activated(TT)
      }
      afterFrame(TT) {
        try {
          TT > 0 && this.recorder.dD()
        } finally {
          var oT;
          null === (oT = this.viewer) || void 0 === oT || oT.afterFrame()
        }
      }
      end() {
        var TT;
        null === (TT = this.viewer) || void 0 === TT || TT.end()
      }
      saveFailed(TT) {
        var oT;
        TT === LT.gd.Edited ? null === (oT = this.viewer) || void 0 === oT || oT.saveFailed(!1) : this.recorder.failed(TT)
      }
    }
    var nz = IT(39400),
      qz = IT(39415),
      Zz = IT(4292),
      lz = IT(39790);
    class sz {
      constructor(TT) {
        this.deps = TT, this.analogue = [0, 0], this.keys = 0, this.unsent = !1
      }
      drag(TT, oT) {
        if (!this.deps.live() || 0 === TT && 0 === oT) return;
        const IT = (0, OT.s)(0, performance.now()),
          iT = this.deps.dragScale();
        (0, lz.h)((() => {
          (0, OT.w)(LT.vb.MouseDown, 0, 0, 0, IT), (0, OT.w)(LT.vb.MouseMove, 0, TT * iT, oT * iT, 0), (0, OT.w)(LT.vb.MouseUp, 0, 0, 0, IT)
        }))
      }
      move(TT) {
        var oT, IT;
        this.analogue[0] = null !== (oT = null === TT || void 0 === TT ? void 0 : TT.x) && void 0 !== oT ? oT : 0, this.analogue[1] = null !== (IT = null === TT || void 0 === TT ? void 0 : TT.y) && void 0 !== IT ? IT : 0, this.send()
      }
      holdVertical(TT, oT) {
        const IT = "freeCamUp" === TT ? cT.Sb.Up : cT.Sb.Down;
        this.keys = oT ? this.keys | IT : this.keys & ~IT, this.send()
      }
      flush() {
        this.unsent && this.send()
      }
      send() {
        const TT = this.deps.live() ? this.deps.cmd() : null;
        this.unsent = null !== TT && !(0, cT.Ee)(TT, 0, this.analogue, this.keys)
      }
    }
    var tz = IT(712),
      Gz = IT(289),
      pz = IT(90),
      bz = IT(8668);

    function yz() {
      const TT = iT.c.get("clientEscMenuOptions"),
        oT = (0, tz.n)(TT);
      return {
        mouse: (0, pz.isMobile)() ? oT : TT.mouseSensitivity,
        touch: oT,
        fovPercent: TT.cameraFOV
      }
    }

    function Nz() {
      const TT = iT.c.get("clientEscMenuOptions"),
        oT = iT.c.get("isTouchScreen") ? (0, tz.n)(TT) : TT.mouseSensitivity,
        IT = yz().mouse;
      return IT > 0 ? oT / IT : 1
    }

    function Pz(TT) {
      const oT = () => {
        TT.setSoundPrefs(iT.c.get("soundVolume"), iT.c.get("soundOnFromAd"))
      };
      let IT = null;
      const zT = () => {
        const {
          showFog: oT,
          enableLighting: zT,
          fogChunkDistance: kT,
          chunkFadeIn: WT
        } = iT.c.get("clientEscMenuOptions"), XT = {
          showFog: oT,
          lighting: zT,
          fogChunks: kT,
          chunkFade: WT
        };
        IT && (0, LT.ie)(IT) === (0, LT.ie)(XT) && IT.fogChunks === kT || (IT = XT, TT.setEnvPrefs(IT))
      };
      let kT = null;
      const XT = () => {
        const oT = function() {
          const TT = iT.c.get("clientEscMenuOptions");
          return {
            nametagsHidden: iT.c.get("areNametagsHidden"),
            crouchToggle: TT.crouchIsToggle,
            bhopDisabled: TT.disableBunnyHopping,
            disableBobbing: TT.disableBobbing,
            ezTowering: TT.ezTowering && (0, Gz.d)(),
            ezBridging: TT.ezBridging,
            showChunkBorders: TT.showChunkBorders,
            nametagCutDistance: (0, bz.e)()
          }
        }();
        (0, vT.Vd)(kT, oT) || (kT = oT, TT.setUiPrefs(oT))
      };
      let BT = null;
      const FT = () => {
        const oT = yz();
        (0, vT.Vd)(BT, oT) || (BT = oT, TT.setLookPrefs(oT))
      };
      oT(), zT(), XT(), FT();
      const ST = [(0, WT.k)("appManagerUpdated|soundVolume", oT), (0, WT.k)("appManagerUpdated|soundOnFromAd", oT), (0, WT.k)("appManagerUpdated|clientEscMenuOptions", (() => {
        zT(), XT(), FT()
      })), (0, WT.k)("appManagerUpdated|areNametagsHidden", XT), (0, WT.k)("appManagerUpdated|showDistantNametags", XT)];
      return () => {
        for (const TT of ST) TT()
      }
    }
    var dz = IT(39726),
      Vz = IT(39735);
    var Tk = (0, Vz.b)("lend"),
      Ik = (0, Vz.b)("starting"),
      ik = (0, Vz.b)("generation"),
      zk = (0, Vz.b)("end");
    class kk {
      constructor(TT) {
        this.deps = TT, Object.defineProperty(this, zk, {
          value: Wk
        }), Object.defineProperty(this, Tk, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Ik, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, ik, {
          writable: !0,
          value: 0
        })
      }
      get active() {
        return null !== (0, dz.c)(this, Tk)[Tk] || (0, dz.c)(this, Ik)[Ik]
      }
      async start(TT) {
        if (this.active) return "busy";
        const oT = (0, dz.c)(this, ik)[ik];
        (0, dz.c)(this, Ik)[Ik] = !0;
        try {
          if (!await this.deps.ensureLoaded()) return "refused"
        } finally {
          (0, dz.c)(this, Ik)[Ik] = !1
        }
        if (oT !== (0, dz.c)(this, ik)[ik]) return "refused";
        const IT = this.deps.beginSave();
        if (!IT) return "refused";
        const iT = Number(BigInt.asUintN(32, TT)),
          zT = Number(BigInt.asUintN(32, TT >> 32n));
        let kT = "refused";
        return this.deps.recorderCall(((TT, oT) => {
          const WT = IT.editState,
            XT = TT.stage(WT.length);
          0 !== XT ? (new Uint8Array(oT.buffer, XT, WT.length).set(WT), TT.rzT(IT.headLen, iT, zT) && (kT = "sealing")) : kT = "tooLarge"
        }), !0), "sealing" !== kT ? (IT.end(), kT) : ((0, dz.c)(this, Tk)[Tk] = IT, "sealing")
      }
      beforeRecorderStep() {
        const TT = (0, dz.c)(this, Tk)[Tk];
        if (!TT) return null;
        let oT = -1,
          IT = 0;
        if (!this.deps.recorderCall((TT => {
            oT = TT.AzT(), oT > 0 && (IT = TT.gzT())
          }))) return (0, dz.c)(this, zk)[zk](TT, "stopped");
        if (oT < 0) return (0, dz.c)(this, zk)[zk](TT, "read");
        if (0 === oT) return null;
        const iT = TT.head(IT, oT);
        let zT = !1;
        if (iT && this.deps.recorderCall(((TT, IT) => {
            const kT = TT.stage(oT);
            0 !== kT && (new Uint8Array(IT.buffer, kT, oT).set(iT), zT = !0)
          }), !0), zT) return null;
        const kT = TT.givenUp();
        this.deps.recorderCall((TT => {
          TT.hzT()
        }));
        const WT = (0, dz.c)(this, zk)[zk](TT, kT ? "givenUp" : "stopped");
        return kT && this.deps.givenUp("Reopen the replay you were editing to make your edits again, as they weren't saved when another replay opened."), WT
      }
      stop() {
        (0, dz.c)(this, ik)[ik]++;
        const TT = (0, dz.c)(this, Tk)[Tk];
        TT && (this.deps.recorderCall((TT => {
          TT.hzT()
        })), (0, dz.c)(this, zk)[zk](TT, "stopped"))
      }
    }

    function Wk(TT, oT) {
      return (0, dz.c)(this, Tk)[Tk] = null, TT.end(), oT
    }

    function Xk(TT, oT) {
      const IT = new Uint8Array(4),
        iT = new DataView(IT.buffer);
      return iT.setUint8(0, TT ? 1 : 0), iT.setUint16(2, Math.max(0, Math.min(65535, Math.round(oT))), !0), IT
    }

    function Bk(TT, oT) {
      return TT > function(TT) {
        return 16777216 + 314572.8 * Math.max(0, TT)
      }(oT) + 33554432
    }
    let Fk = null;

    function Sk(TT) {
      return Fk ??= async function(TT) {
        const oT = TT.loadInFlight();
        oT && await oT.catch((() => {}));
        if (TT.trapped()) return "trapped";
        if (TT.busy() || !Bk(TT.memoryBytes(), TT.clipSeconds())) return "qx";
        TT.unload();
        let IT = !1;
        try {
          IT = await TT.load()
        } catch {
          IT = !1
        }
        if (!IT) return TT.trapped() ? "trapped" : TT.Ec() ? "Ec" : "failed";
        return "recycled"
      }(TT).finally((() => {
        Fk = null
      })), Fk
    }
    const Dk = "Replay recording couldn't load, so try again.",
      Lk = new Set([LT.Xc.ToggleRecording, LT.Xc.SaveClip]);
    var xk = (0, Vz.b)("bindings"),
      ck = (0, Vz.b)("module"),
      Kk = (0, Vz.b)("memory"),
      Mk = (0, Vz.b)("trapped"),
      rk = (0, Vz.b)("Ec"),
      Ak = (0, Vz.b)("recycleDue"),
      gk = (0, Vz.b)("loading"),
      hk = (0, Vz.b)("generation"),
      wk = (0, Vz.b)("viewDrawn"),
      mk = (0, Vz.b)("clip"),
      ek = (0, Vz.b)("session"),
      Rk = (0, Vz.b)("control"),
      uk = (0, Vz.b)("deferred"),
      vk = (0, Vz.b)("coreU8"),
      Ek = (0, Vz.b)("coreU32"),
      fk = (0, Vz.b)("moduleU8"),
      Ck = (0, Vz.b)("edited"),
      jk = (0, Vz.b)("sendSession"),
      Jk = (0, Vz.b)("checkNotInEvents"),
      Uk = (0, Vz.b)("clipping"),
      ak = (0, Vz.b)("busy"),
      Yk = (0, Vz.b)("use"),
      Qk = (0, Vz.b)("ensureLoaded"),
      Ok = (0, Vz.b)("loadOnce"),
      Hk = (0, Vz.b)("recycleAfterStep"),
      nk = (0, Vz.b)("settleRecycle"),
      qk = (0, Vz.b)("load"),
      Zk = (0, Vz.b)("attach"),
      lk = (0, Vz.b)("resendHeld"),
      sk = (0, Vz.b)("recycle"),
      tk = (0, Vz.b)("send"),
      Gk = (0, Vz.b)("unload"),
      pk = (0, Vz.b)("dropModule"),
      bk = (0, Vz.b)("coreBytes"),
      yk = (0, Vz.b)("coreWords"),
      Nk = (0, Vz.b)("moduleBytes"),
      Pk = (0, Vz.b)("loadFailed"),
      dk = (0, Vz.b)("call"),
      Vk = (0, Vz.b)("guard"),
      TW = (0, Vz.b)("trapOn");
    class oW {
      constructor(TT) {
        this.deps = TT, Object.defineProperty(this, TW, {
          value: RW
        }), Object.defineProperty(this, Vk, {
          value: eW
        }), Object.defineProperty(this, dk, {
          value: mW
        }), Object.defineProperty(this, Pk, {
          value: wW
        }), Object.defineProperty(this, Nk, {
          value: hW
        }), Object.defineProperty(this, yk, {
          value: gW
        }), Object.defineProperty(this, bk, {
          value: AW
        }), Object.defineProperty(this, pk, {
          value: rW
        }), Object.defineProperty(this, Gk, {
          value: MW
        }), Object.defineProperty(this, tk, {
          value: KW
        }), Object.defineProperty(this, sk, {
          value: cW
        }), Object.defineProperty(this, lk, {
          value: xW
        }), Object.defineProperty(this, Zk, {
          value: LW
        }), Object.defineProperty(this, qk, {
          value: DW
        }), Object.defineProperty(this, nk, {
          value: SW
        }), Object.defineProperty(this, Hk, {
          value: FW
        }), Object.defineProperty(this, Ok, {
          value: BW
        }), Object.defineProperty(this, Qk, {
          value: XW
        }), Object.defineProperty(this, Yk, {
          value: WW
        }), Object.defineProperty(this, ak, {
          value: kW
        }), Object.defineProperty(this, Uk, {
          value: zW
        }), Object.defineProperty(this, Jk, {
          value: iW
        }), Object.defineProperty(this, jk, {
          value: IW
        }), Object.defineProperty(this, xk, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ck, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Kk, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Mk, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, rk, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Ak, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, gk, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, hk, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, wk, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, mk, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ek, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Rk, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, uk, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, vk, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Ek, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, fk, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Ck, {
          writable: !0,
          value: void 0
        }), (0, dz.c)(this, Ck)[Ck] = new kk({
          ensureLoaded: () => (0, dz.c)(this, Qk)[Qk](),
          recorderCall: (TT, oT) => {
            oT && (0, dz.c)(this, Jk)[Jk]("an edited save's stage");
            const IT = (0, dz.c)(this, dk)[dk](((oT, IT) => (TT(oT, IT), !0)));
            return null !== IT && void 0 !== IT && IT
          },
          beginSave: TT.beginSave,
          givenUp: TT.givenUp
        })
      }
      get active() {
        return null !== (0, dz.c)(this, ck)[ck]
      }
      get trapped() {
        return (0, dz.c)(this, Mk)[Mk]
      }
      get loading() {
        return null !== (0, dz.c)(this, gk)[gk]
      }
      prefetch() {
        (0, dz.c)(this, rk)[rk] || (0, dz.c)(this, Mk)[Mk] || (0, dz.c)(this, ck)[ck] || (0, dz.c)(this, gk)[gk] || this.deps.prefetch()
      }
      viewDrawn() {
        (0, dz.c)(this, wk)[wk] = !0, (0, dz.c)(this, Uk)[Uk]() && (0, dz.c)(this, Yk)[Yk]()
      }
      prefs(TT, oT) {
        (0, dz.c)(this, mk)[mk] = {
          on: TT,
          seconds: oT
        }, (0, dz.c)(this, tk)[tk](LT.Qc.Prefs, Xk(TT, oT)), TT && (0, dz.c)(this, wk)[wk] && (0, dz.c)(this, Yk)[Yk]()
      }
      control(TT) {
        const oT = function(TT) {
          return new Uint8Array([TT, 0, 0, 0])
        }(TT);
        if (Lk.has(TT)) return (0, dz.c)(this, ck)[ck] ? void(0, dz.c)(this, tk)[tk](LT.Qc.Control, oT) : ((0, dz.c)(this, Rk)[Rk] = oT, void(0, dz.c)(this, Yk)[Yk]());
        (0, dz.c)(this, rk)[rk] || this.deps.coreCommand(LT.Qc.Control, oT)
      }
      session(TT) {
        (0, dz.c)(this, ek)[ek] = TT, (0, dz.c)(this, jk)[jk](TT)
      }
      filePartDone(TT, oT) {
        (0, dz.c)(this, tk)[tk](LT.Qc.FilePartDone, function(TT, oT) {
          const IT = new Uint8Array(8),
            iT = new DataView(IT.buffer);
          return iT.setUint32(0, TT, !0), iT.setUint32(4, oT, !0), IT
        }(TT, oT))
      }
      fileDone(TT) {
        return (0, dz.c)(this, tk)[tk](LT.Qc.FileDone, function(TT) {
          const oT = new Uint8Array(4);
          return new DataView(oT.buffer).setUint32(0, TT, !0), oT
        }(TT)), (0, dz.c)(this, Hk)[Hk]()
      }
      saveEdited(TT) {
        return (0, dz.c)(this, Jk)[Jk]("saveEdited"), (0, dz.c)(this, Ck)[Ck].start(TT)
      }
      afterFrame() {
        if (!(0, dz.c)(this, ck)[ck]) return;
        "read" === (0, dz.c)(this, Ck)[Ck].beforeRecorderStep() && (0, dz.c)(this, Hk)[Hk]();
        const TT = (0, dz.c)(this, Ak)[Ak];
        (0, dz.c)(this, Ak)[Ak] = null;
        const oT = (0, dz.c)(this, ck)[ck],
          IT = (0, dz.c)(this, Kk)[Kk];
        if (!oT || !IT) return void(null === TT || void 0 === TT || TT.resolve((0, dz.c)(this, Mk)[Mk] ? "trapped" : "qx"));
        const {
          core: iT
        } = this.deps, zT = iT.RzT(2);
        let kT, WT, XT, BT, FT = 0,
          ST = 0;
        if (0 !== zT) {
          var DT, LT;
          const TT = (0, dz.c)(this, yk)[yk]();
          FT = null !== (DT = TT[zT >>> 2]) && void 0 !== DT ? DT : 0, ST = null !== (LT = TT[1 + (zT >>> 2)]) && void 0 !== LT ? LT : 0
        }
        try {
          if (ST > 0) {
            const TT = oT.feed(ST);
            0 !== TT && (0, dz.c)(this, Nk)[Nk](IT).set((0, dz.c)(this, bk)[bk]().subarray(FT, FT + ST), TT)
          }
          kT = oT.step(), WT = oT.uzT(), XT = oT.vzT(), BT = oT.EzT()
        } catch (xT) {
          if (!(0, dz.c)(this, TW)[TW](xT)) throw null === TT || void 0 === TT || TT.resolve("qx"), xT;
          return void(null === TT || void 0 === TT || TT.resolve("trapped"))
        }
        if (kT > 0) {
          const TT = iT.fzT(2, kT);
          0 !== TT && (0, dz.c)(this, bk)[bk]().set((0, dz.c)(this, Nk)[Nk](IT).subarray(WT, WT + kT), TT)
        }
        if (XT > 0) {
          (0, dz.c)(this, uk)[uk] = [];
          try {
            this.deps.events(new Uint8Array(IT.buffer, BT, XT), IT)
          } catch (xT) {
            throw null === TT || void 0 === TT || TT.resolve("qx"), xT
          } finally {
            const TT = (0, dz.c)(this, uk)[uk];
            (0, dz.c)(this, uk)[uk] = null;
            for (const [oT, IT] of TT)(0, dz.c)(this, tk)[tk](oT, IT)
          }
        }
        if (!(0, dz.c)(this, Uk)[Uk]() && !(0, dz.c)(this, ak)[ak]()) return (0, dz.c)(this, Gk)[Gk](), void(null === TT || void 0 === TT || TT.resolve("qx"));
        null === TT || void 0 === TT || TT.resolve((0, dz.c)(this, sk)[sk]())
      }
      dispose() {
        (0, dz.c)(this, rk)[rk] = !0, (0, dz.c)(this, Gk)[Gk]()
      }
    }

    function IW(TT) {
      (0, dz.c)(this, tk)[tk](LT.Qc.Session, function(TT) {
        const oT = new TextEncoder,
          IT = oT.encode(TT.game).subarray(0, 65535),
          iT = oT.encode(TT.lobby).subarray(0, 65535),
          zT = new Uint8Array(22 + IT.length + 2 + iT.length),
          kT = new DataView(zT.buffer);
        kT.setFloat64(0, TT.unixMs, !0), kT.setBigUint64(8, BigInt.asUintN(64, TT.session), !0), kT.setUint8(16, TT.lobbyType);
        let WT = 20;
        for (const XT of [IT, iT]) kT.setUint16(WT, XT.length, !0), zT.set(XT, WT + 2), WT += 2 + XT.length;
        return zT
      }({
        ...TT,
        unixMs: this.deps.unixNow()
      }))
    }

    function iW(TT) {
      false
    }

    function zW() {
      var TT, oT;
      return null !== (TT = null === (oT = (0, dz.c)(this, mk)[mk]) || void 0 === oT ? void 0 : oT.on) && void 0 !== TT && TT
    }

    function kW() {
      const TT = (0, dz.c)(this, ck)[ck];
      let oT = !0;
      if (TT) try {
        oT = TT.busy()
      } catch (IT) {
        if (!(0, dz.c)(this, TW)[TW](IT)) throw IT
      }
      return oT || (0, dz.c)(this, Ck)[Ck].active
    }
    async function WW() {
      !(0, dz.c)(this, rk)[rk] && this.deps.allowed() ? await (0, dz.c)(this, Qk)[Qk]() : (0, dz.c)(this, Rk)[Rk] = null
    }

    function XW() {
      return (0, dz.c)(this, Mk)[Mk] || (0, dz.c)(this, rk)[rk] ? Promise.resolve(!1) : (0, dz.c)(this, ck)[ck] ? Promise.resolve(!0) : ((0, dz.c)(this, gk)[gk] ??= (0, dz.c)(this, Ok)[Ok](), (0, dz.c)(this, gk)[gk])
    }
    async function BW() {
      let TT = !1;
      try {
        return TT = await (0, dz.c)(this, qk)[qk](), TT
      } finally {
        TT || ((0, dz.c)(this, Rk)[Rk] = null), (0, dz.c)(this, gk)[gk] = null
      }
    }

    function FW() {
      if (!(0, dz.c)(this, ck)[ck]) return Promise.resolve((0, dz.c)(this, Mk)[Mk] ? "trapped" : "qx");
      if (!(0, dz.c)(this, Ak)[Ak]) {
        let TT = () => {};
        const oT = new Promise((oT => {
          TT = oT
        }));
        (0, dz.c)(this, Ak)[Ak] = {
          promise: oT,
          resolve: TT
        }
      }
      return (0, dz.c)(this, Ak)[Ak].promise
    }

    function SW(TT) {
      const oT = (0, dz.c)(this, Ak)[Ak];
      (0, dz.c)(this, Ak)[Ak] = null, null === oT || void 0 === oT || oT.resolve(TT)
    }
    async function DW() {
      let TT = (0, dz.c)(this, xk)[xk];
      if (!TT) {
        const oT = (0, dz.c)(this, hk)[hk];
        try {
          TT = await this.deps.load()
        } catch (IT) {
          return oT === (0, dz.c)(this, hk)[hk] && await (0, dz.c)(this, Pk)[Pk](IT), !1
        }
        if (oT !== (0, dz.c)(this, hk)[hk]) return this.deps.unload(), !1;
        const iT = TT,
          zT = (0, dz.c)(this, Vk)[Vk]((() => iT.CzT()));
        if (void 0 === zT) return !1;
        const kT = this.deps.core.jzT();
        if (zT !== kT) return await (0, dz.c)(this, Pk)[Pk](new Error(`recorder port version ${zT}, the core's ${kT}`)), !1;
        (0, dz.c)(this, xk)[xk] = TT
      }
      const oT = TT;
      try {
        if (!(0, dz.c)(this, Vk)[Vk]((() => ((0, dz.c)(this, ck)[ck] = new oT.JzT, (0, dz.c)(this, Kk)[Kk] = oT.wzT(), !0)))) return !1;
        (0, dz.c)(this, lk)[lk]();
        const TT = (0, dz.c)(this, Rk)[Rk];
        return (0, dz.c)(this, Rk)[Rk] = null, TT && (0, dz.c)(this, tk)[tk](LT.Qc.Control, TT), (0, dz.c)(this, Zk)[Zk]()
      } catch (IT) {
        return (0, dz.c)(this, Gk)[Gk](), await (0, dz.c)(this, Pk)[Pk](IT), !1
      }
    }

    function LW() {
      return this.deps.core.azT(0), 1 === this.deps.core.azT(1) || ((0, dz.c)(this, Gk)[Gk](), this.deps.failed(Dk), !1)
    }

    function xW() {
      (0, dz.c)(this, mk)[mk] && (0, dz.c)(this, tk)[tk](LT.Qc.Prefs, Xk((0, dz.c)(this, mk)[mk].on, (0, dz.c)(this, mk)[mk].seconds)), (0, dz.c)(this, ek)[ek] && (0, dz.c)(this, jk)[jk]((0, dz.c)(this, ek)[ek])
    }

    function cW() {
      return Sk({
        memoryBytes: this.deps.memoryBytes,
        clipSeconds: () => {
          var TT, oT;
          return null !== (TT = null === (oT = (0, dz.c)(this, mk)[mk]) || void 0 === oT ? void 0 : oT.seconds) && void 0 !== TT ? TT : 0
        },
        trapped: () => (0, dz.c)(this, Mk)[Mk],
        busy: () => (0, dz.c)(this, ak)[ak](),
        loadInFlight: () => (0, dz.c)(this, gk)[gk],
        Ec: () => (0, dz.c)(this, rk)[rk],
        unload: () => {
          (0, dz.c)(this, Gk)[Gk]()
        },
        load: () => (0, dz.c)(this, Qk)[Qk]()
      })
    }

    function KW(TT, oT) {
      (0, dz.c)(this, uk)[uk] ? (0, dz.c)(this, uk)[uk].push([TT, oT]): (0, dz.c)(this, dk)[dk](((IT, iT) => {
        const zT = IT.ezT(oT.length);
        0 !== zT && (new Uint8Array(iT.buffer, zT, oT.length).set(oT), IT.command(TT, oT.length))
      }))
    }

    function MW() {
      (0, dz.c)(this, hk)[hk]++, (0, dz.c)(this, nk)[nk]("qx"), (0, dz.c)(this, Ck)[Ck].stop(), this.deps.core.azT(0), (0, dz.c)(this, pk)[pk](), (0, dz.c)(this, Mk)[Mk] || ((0, dz.c)(this, xk)[xk] = null, this.deps.unload())
    }

    function rW() {
      (0, dz.c)(this, dk)[dk]((TT => {
        TT.free()
      })), (0, dz.c)(this, ck)[ck] = null, (0, dz.c)(this, Kk)[Kk] = null, (0, dz.c)(this, fk)[fk] = null
    }

    function AW() {
      var TT;
      const oT = this.deps.coreBuffer();
      return (null === (TT = (0, dz.c)(this, vk)[vk]) || void 0 === TT ? void 0 : TT.buffer) !== oT && ((0, dz.c)(this, vk)[vk] = new Uint8Array(oT)), (0, dz.c)(this, vk)[vk]
    }

    function gW() {
      var TT;
      const oT = this.deps.coreBuffer();
      return (null === (TT = (0, dz.c)(this, Ek)[Ek]) || void 0 === TT ? void 0 : TT.buffer) !== oT && ((0, dz.c)(this, Ek)[Ek] = new Uint32Array(oT, 0, oT.byteLength >>> 2)), (0, dz.c)(this, Ek)[Ek]
    }

    function hW(TT) {
      var oT;
      const IT = TT.buffer;
      return (null === (oT = (0, dz.c)(this, fk)[fk]) || void 0 === oT ? void 0 : oT.buffer) !== IT && ((0, dz.c)(this, fk)[fk] = new Uint8Array(IT)), (0, dz.c)(this, fk)[fk]
    }
    async function wW(TT) {
      await this.deps.staleOr(TT, (() => {
        this.deps.failed(Dk)
      }))
    }

    function mW(TT) {
      const oT = (0, dz.c)(this, ck)[ck],
        IT = (0, dz.c)(this, Kk)[Kk];
      if (oT && IT) return (0, dz.c)(this, Vk)[Vk]((() => TT(oT, IT)))
    }

    function eW(TT) {
      if (!(0, dz.c)(this, Mk)[Mk]) try {
        return TT()
      } catch (oT) {
        if (!(0, dz.c)(this, TW)[TW](oT)) throw oT;
        return
      }
    }

    function RW(TT) {
      return TT instanceof WebAssembly.RuntimeError && ((0, dz.c)(this, Mk)[Mk] = !0, (0, dz.c)(this, ck)[ck] = null, (0, dz.c)(this, Kk)[Kk] = null, (0, dz.c)(this, fk)[fk] = null, (0, dz.c)(this, xk)[xk] = null, (0, dz.c)(this, Rk)[Rk] = null, (0, dz.c)(this, nk)[nk]("trapped"), this.deps.core.azT(0), (0, dz.c)(this, Ck)[Ck].stop(), this.deps.crash(this.deps.markTrapped(TT)), this.deps.failed("Replay recording stopped working, so reload the page to record replays again."), !0)
    }
    var uW = IT(37636);
    const vW = new Map([
      ["skyblock", () => IT.e(49).then((() => IT(37632)))]
    ]);

    function EW(TT) {
      const oT = vW.get(TT);
      return oT ? oT().then((() => {
        const oT = (0, uW.e)(TT);
        if (!oT) throw new Error(`${TT}'s replay hook module registered no hook`);
        return oT
      })) : null
    }
    class fW {
      constructor(TT) {
        this.deps = TT, this.game = null, this.hook = null, this.generation = 0, this.all = !1, this.pending = new Map, this.ids = new Int32Array(64)
      }
      get wantsWatch() {
        return null !== this.hook
      }
      opened(TT) {
        if (this.pending.clear(), TT === this.game && null !== this.hook) return void(this.all = !0);
        const oT = ++this.generation;
        this.game = TT, this.hook = null, this.all = !1;
        const IT = this.deps.loadHook(TT);
        null === IT || void 0 === IT || IT.then((TT => {
          oT === this.generation && (this.hook = TT, this.all = !0)
        }), (TT => {
          oT === this.generation && this.deps.onError(TT)
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
          hook: oT
        } = this;
        if (null === oT || !TT || !this.all && 0 === this.pending.size) return;
        const IT = this.deps.cmd();
        if (null === IT) return;
        const {
          api: iT
        } = this.deps;
        if (this.all) {
          this.all = !1, this.pending.clear();
          const {
            ids: TT,
            count: oT
          } = HI(iT, this.ids);
          this.ids = TT;
          for (let IT = 0; IT < oT; IT++) this.pending.set(TT[IT], !0)
        }
        const zT = this.ids = nI(this.ids, this.pending.size);
        let kT = 0;
        for (const FT of this.pending.keys()) zT[kT++] = FT;
        const WT = [],
          XT = qI(iT, zT, kT, ((TT, oT) => {
            null !== oT && WT.push({
              serverId: TT,
              info: oT,
              spawned: !0 === this.pending.get(TT)
            })
          }));
        if (XT) {
          this.pending.clear();
          for (const {
              serverId: TT,
              info: iT,
              spawned: zT
            }
            of WT) try {
            oT(iT, {
              setFacingTolerance: oT => {
                null === oT && zT || XI(IT, TT, oT) || this.pending.set(TT, zT)
              }
            })
          } catch (BT) {
            this.deps.onError(BT)
          }
        }
      }
    }
    var CW = (0, Vz.b)("bindings"),
      jW = (0, Vz.b)("module"),
      JW = (0, Vz.b)("memory"),
      UW = (0, Vz.b)("trapped"),
      aW = (0, Vz.b)("generation"),
      YW = (0, Vz.b)("loading"),
      QW = (0, Vz.b)("lend"),
      OW = (0, Vz.b)("givenUp"),
      HW = (0, Vz.b)("afterSave"),
      nW = (0, Vz.b)("opens"),
      qW = (0, Vz.b)("saveAskedAt"),
      ZW = (0, Vz.b)("unload"),
      lW = (0, Vz.b)("dropModule"),
      sW = (0, Vz.b)("loadFailed"),
      tW = (0, Vz.b)("saveReadsBody"),
      GW = (0, Vz.b)("command"),
      pW = (0, Vz.b)("call"),
      bW = (0, Vz.b)("guard"),
      yW = (0, Vz.b)("trapOn");
    class NW {
      constructor(TT) {
        this.deps = TT, Object.defineProperty(this, yW, {
          value: zX
        }), Object.defineProperty(this, bW, {
          value: iX
        }), Object.defineProperty(this, pW, {
          value: IX
        }), Object.defineProperty(this, GW, {
          value: oX
        }), Object.defineProperty(this, tW, {
          get: TX,
          set: void 0
        }), Object.defineProperty(this, sW, {
          value: VW
        }), Object.defineProperty(this, lW, {
          value: dW
        }), Object.defineProperty(this, ZW, {
          value: PW
        }), Object.defineProperty(this, CW, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, jW, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, JW, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, UW, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, aW, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, YW, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, QW, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, OW, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, HW, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, nW, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, qW, {
          writable: !0,
          value: null
        })
      }
      get active() {
        return null !== (0, dz.c)(this, jW)[jW] && null === (0, dz.c)(this, HW)[HW]
      }
      async open(TT) {
        if ((0, dz.c)(this, UW)[UW]) return LT.ed.ModuleTrap;
        let oT = (0, dz.c)(this, CW)[CW];
        if (!oT) {
          const TT = (0, dz.c)(this, aW)[aW];
          (0, dz.c)(this, YW)[YW]++;
          try {
            oT = await this.deps.load()
          } catch (iT) {
            return (0, dz.c)(this, YW)[YW]--, TT !== (0, dz.c)(this, aW)[aW] ? "stopped" : (0, dz.c)(this, sW)[sW](iT)
          }
          if ((0, dz.c)(this, YW)[YW]--, TT !== (0, dz.c)(this, aW)[aW]) return (0, dz.c)(this, CW)[CW] || 0 !== (0, dz.c)(this, YW)[YW] || (0, dz.c)(this, UW)[UW] || this.deps.unload(), "stopped";
          if ((0, dz.c)(this, UW)[UW]) return LT.ed.ModuleTrap;
          const IT = oT.CzT(),
            zT = this.deps.core.jzT();
          if (IT !== zT) return (0, dz.c)(this, sW)[sW](new Error(`replay port version ${IT}, the core's ${zT}`));
          (0, dz.c)(this, CW)[CW] = oT
        }
        if (!(0, dz.c)(this, jW)[jW]) {
          const TT = oT;
          if (!(0, dz.c)(this, bW)[bW]((() => {
              (0, dz.c)(this, jW)[jW] = new TT.YzT, (0, dz.c)(this, JW)[JW] = TT.OzT()
            }))) return LT.ed.ModuleTrap
        }
        let IT = !1;
        return (0, dz.c)(this, pW)[pW](((oT, iT) => {
          null !== (0, dz.c)(this, HW)[HW] && oT.step(0, 0);
          const zT = oT.stage(TT.length);
          0 !== zT && (new Uint8Array(iT.buffer, zT, TT.length).set(TT), oT.open(), (0, dz.c)(this, OW)[OW] = (0, dz.c)(this, QW)[QW], (0, dz.c)(this, HW)[HW] = null, (0, dz.c)(this, nW)[nW]++, IT = !0)
        })) ? IT ? "opening" : LT.ed.TooLarge : LT.ed.ModuleTrap
      }
      beforeFrame(TT) {
        const oT = (0, dz.c)(this, jW)[jW],
          IT = (0, dz.c)(this, JW)[JW];
        if (!oT || !IT || null !== (0, dz.c)(this, HW)[HW]) return;
        const {
          core: iT
        } = this.deps, zT = iT.HzT(TT);
        if (zT < 0) return;
        const kT = Math.floor(zT);
        let WT, XT;
        try {
          WT = oT.step(kT, zT - kT), XT = oT.uzT()
        } catch (FT) {
          return void(0, dz.c)(this, yW)[yW](FT)
        }
        const BT = iT.fzT(1, WT);
        if (0 === BT) {
          const TT = (0, dz.c)(this, pW)[pW]((TT => {
            TT.close()
          }));
          if (!TT) return;
          return (0, dz.c)(this, tW)[tW] ? (0, dz.c)(this, HW)[HW] = "drop" : (0, dz.c)(this, lW)[lW](), void iT.nzT(LT.ed.Port)
        }
        new Uint8Array(this.deps.coreBuffer(), BT, WT).set(new Uint8Array(IT.buffer, XT, WT))
      }
      play() {
        (0, dz.c)(this, GW)[GW]((TT => {
          TT.play()
        }))
      }
      pause() {
        (0, dz.c)(this, GW)[GW]((TT => {
          TT.pause()
        }))
      }
      seek(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, dz.c)(this, GW)[GW]((IT => {
          IT.seek(TT, oT)
        }))
      }
      setMark(TT, oT) {
        return (0, dz.c)(this, GW)[GW]((IT => {
          IT.qzT(TT, oT)
        }))
      }
      addKeyframe(TT, oT) {
        return (0, dz.c)(this, GW)[GW]((IT => {
          IT.ZzT(TT[0], TT[1], TT[2], oT[0], oT[1], oT[2])
        }))
      }
      setKeyframe(TT, oT) {
        return (0, dz.c)(this, GW)[GW]((IT => {
          IT.lzT(TT, oT)
        }))
      }
      moveKeyframe(TT, oT) {
        return (0, dz.c)(this, GW)[GW]((IT => {
          IT.szT(TT, oT)
        }))
      }
      deleteKeyframes(TT, oT) {
        return (0, dz.c)(this, GW)[GW]((IT => {
          IT.tzT(TT, oT)
        }))
      }
      crop(TT, oT) {
        return null === (0, dz.c)(this, QW)[QW] && (0, dz.c)(this, GW)[GW]((IT => {
          IT.crop(TT, oT)
        }))
      }
      beginSave() {
        const TT = (0, dz.c)(this, qW)[qW];
        if ((0, dz.c)(this, qW)[qW] = null, null !== TT && TT !== (0, dz.c)(this, nW)[nW]) return null;
        let oT = 0,
          IT = null;
        if ((0, dz.c)(this, pW)[pW](((TT, iT) => {
            oT = TT.save(), 0 !== oT && (IT = new Uint8Array(iT.buffer, TT.GzT(), TT.pzT()).slice())
          })), 0 === oT || !IT) return null;
        const iT = {
          headLen: oT,
          editState: IT,
          givenUp: () => (0, dz.c)(this, OW)[OW] === iT,
          head: (TT, oT) => {
            if ((0, dz.c)(this, QW)[QW] !== iT || !(0, dz.c)(this, tW)[tW]) return null;
            let IT = null;
            return (0, dz.c)(this, pW)[pW](((iT, zT) => {
              const kT = iT.bzT();
              0 !== kT && TT >= 0 && oT >= 0 && TT + oT <= kT && (IT = new Uint8Array(zT.buffer, iT.yzT() + TT, oT))
            })), IT
          },
          end: () => {
            if ((0, dz.c)(this, QW)[QW] !== iT) return;
            (0, dz.c)(this, QW)[QW] = null, (0, dz.c)(this, OW)[OW] = null, (0, dz.c)(this, pW)[pW]((TT => {
              TT.NzT()
            }));
            const TT = (0, dz.c)(this, HW)[HW];
            (0, dz.c)(this, HW)[HW] = null, "unload" === TT ? (0, dz.c)(this, ZW)[ZW]() : "drop" === TT && (0, dz.c)(this, lW)[lW]()
          }
        };
        return (0, dz.c)(this, QW)[QW] = iT, iT
      }
      askSave() {
        (0, dz.c)(this, qW)[qW] = (0, dz.c)(this, nW)[nW]
      }
      setSpeed(TT) {
        (0, dz.c)(this, GW)[GW]((oT => {
          oT.PzT(TT)
        }))
      }
      setCameraMode(TT) {
        (0, dz.c)(this, GW)[GW]((oT => {
          oT.dzT(TT)
        }))
      }
      close() {
        (0, dz.c)(this, GW)[GW]((TT => {
          TT.close()
        }))
      }
      stop() {
        (0, dz.c)(this, aW)[aW]++, (0, dz.c)(this, tW)[tW] && ((0, dz.c)(this, pW)[pW]((TT => {
          TT.close()
        })), (0, dz.c)(this, jW)[jW]) ? (0, dz.c)(this, HW)[HW] = "unload" : (0, dz.c)(this, ZW)[ZW]()
      }
    }

    function PW() {
      (0, dz.c)(this, lW)[lW](), (0, dz.c)(this, UW)[UW] || ((0, dz.c)(this, CW)[CW] = null, this.deps.unload())
    }

    function dW() {
      (0, dz.c)(this, pW)[pW]((TT => {
        TT.free()
      })), (0, dz.c)(this, jW)[jW] = null, (0, dz.c)(this, JW)[JW] = null
    }
    async function VW(TT) {
      return await this.deps.staleOr(TT, (() => {})) ? "reloading" : LT.ed.ModuleLoad
    }

    function TX() {
      return null !== (0, dz.c)(this, QW)[QW] && (0, dz.c)(this, OW)[OW] !== (0, dz.c)(this, QW)[QW]
    }

    function oX(TT) {
      return null === (0, dz.c)(this, HW)[HW] && (0, dz.c)(this, pW)[pW](TT)
    }

    function IX(TT) {
      const oT = (0, dz.c)(this, jW)[jW],
        IT = (0, dz.c)(this, JW)[JW];
      return !(!oT || !IT) && (0, dz.c)(this, bW)[bW]((() => {
        TT(oT, IT)
      }))
    }

    function iX(TT) {
      if ((0, dz.c)(this, UW)[UW]) return !1;
      try {
        return TT(), !0
      } catch (oT) {
        return (0, dz.c)(this, yW)[yW](oT), !1
      }
    }

    function zX(TT) {
      if (!(TT instanceof WebAssembly.RuntimeError)) throw TT;
      (0, dz.c)(this, UW)[UW] = !0, (0, dz.c)(this, jW)[jW] = null, (0, dz.c)(this, JW)[JW] = null, (0, dz.c)(this, CW)[CW] = null, this.deps.crash(this.deps.markTrapped(TT)), this.deps.core.nzT(LT.ed.ModuleTrap)
    }
    var kX = IT(5980),
      WX = IT(39498);
    const XX = "[bloxd-wasm-client]";
    const BX = String(Cz);

    function FX(TT) {
      return null === TT || TT === BX ? void 0 : TT
    }

    function SX(TT) {
      var oT, IT, iT, zT, kT, XT, BT;
      switch (TT.what) {
        case LT.ld.FlyingText: {
          let oT;
          try {
            oT = JSON.parse(TT.contentJson)
          } catch (FT) {
            return void console.warn(`${XX} a replay's flying text isn't JSON`, FT)
          }
          WT.h.XM("forceFlyingMiddleMessage", {
            content: oT,
            QT: TT.QT,
            angle: TT.angle,
            OT: TT.OT
          });
          break
        }
        case LT.ld.PlayerKilled:
          (0, WX.d)({
            kind: "killed",
            body: {
              deadEId: null !== (oT = FX(TT.dead)) && void 0 !== oT ? oT : "",
              killerEId: FX(TT.killer),
              withItem: null !== (IT = TT.withItem) && void 0 !== IT ? IT : "",
              killstreak: TT.killstreak
            }
          });
          break;
        case LT.ld.Killfeed:
          (0, WX.d)({
            kind: "custom",
            body: {
              killer: {
                eId: FX(TT.killerId),
                name: null !== (iT = TT.killerName) && void 0 !== iT ? iT : void 0,
                colour: null !== (zT = TT.killerColour) && void 0 !== zT ? zT : void 0
              },
              victim: {
                eId: FX(TT.victimId),
                name: null !== (kT = TT.victimName) && void 0 !== kT ? kT : void 0,
                colour: null !== (XT = TT.victimColour) && void 0 !== XT ? XT : void 0
              },
              withItem: null !== (BT = TT.withItem) && void 0 !== BT ? BT : ""
            }
          })
      }
    }
    const DX = "[bloxd-wasm-client]";

    function LX(TT) {
      if (void 0 === TT || null === TT || "" === TT) return null;
      const oT = Number(TT);
      return Number.isInteger(oT) && oT > Cz && oT <= 2147483647 ? oT : null
    }

    function xX(TT) {
      return {
        id: LX(TT.eId),
        name: "string" === typeof TT.name ? TT.name : null,
        colour: "string" === typeof TT.colour ? TT.colour : null
      }
    }

    function cX(TT) {
      const oT = (0, qz.i)(pI.$b.PlayerKilled, (oT => {
          var IT, iT;
          const zT = (0, nz.l)(oT);
          if (!(0, nz.d)(zT)) return;
          const {
            deadEId: kT,
            killerEId: WT,
            withItem: XT,
            killstreak: BT
          } = zT;
          TT.recordPlayerKilled(null !== (IT = LX(kT)) && void 0 !== IT ? IT : Cz, null !== (iT = LX(WT)) && void 0 !== iT ? iT : Cz, "number" === typeof BT ? BT : 0, "string" === typeof XT ? XT : "")
        })),
        IT = (0, qz.i)(pI.$b.CustomKillfeed, (oT => {
          const IT = (0, nz.l)(oT);
          if (!(0, nz.d)(IT) || !(0, nz.d)(IT.killer) || !(0, nz.d)(IT.victim)) return;
          const {
            killer: iT,
            victim: zT,
            withItem: kT
          } = IT;
          TT.recordKillfeed(xX(iT), xX(zT), "string" === typeof kT ? kT : null)
        }));
      return () => {
        oT(), IT()
      }
    }

    function KX(TT) {
      var oT;
      return void 0 === TT || null === TT ? null : null !== (oT = JSON.stringify(TT)) && void 0 !== oT ? oT : null
    }

    function MX(TT) {
      let oT = null;
      const IT = () => {
        const {
          enableClipping: IT,
          clipDurationSeconds: zT
        } = iT.c.get("clientEscMenuOptions"), kT = `${IT}:${zT}`;
        kT !== oT && (oT = kT, TT.recorder.setPrefs(IT, zT))
      };
      return IT(), (0, WT.k)("appManagerUpdated|clientEscMenuOptions", IT)
    }
    const rX = "replayModule",
      AX = "recorderModule";

    function gX(TT, oT, IT) {
      return function() {
        return TT.isStopped ? IT : oT(...arguments)
      }
    }
    const hX = {
      open: () => Promise.reject(new Error(hz.e.coreStopped.text)),
      replayKey: () => null,
      encode: () => Promise.resolve(null),
      fileHandle: () => null,
      markSaved: () => {}
    };

    function wX() {
      return IT.e(61).then((() => IT(60337)))
    }

    function mX(TT) {
      (0, hz.i)({
        text: TT,
        type: "Error"
      })
    }
    class eX {
      constructor(TT) {
        this.deps = TT, this.runtime = void 0, this.entityHooks = void 0, this.recordedOptions = void 0, this.stops = void 0, this.activeConn = 0, this.stopped = !1, this.bench = null, this.replay = void 0, this.recorder = void 0, this.freecam = void 0, this.drawn = !1;
        const {
          running: oT,
          api: iT,
          core: zT
        } = TT, kT = () => TT.memory().buffer, WT = () => oT.isStopped ? null : oT.rings.cmd, XT = gX(oT, ((TT, oT) => zT.fzT(TT, oT)), 0), BT = () => zT.jzT();
        let FT = null;
        this.replay = new NW({
          core: {
            HzT: gX(oT, (TT => zT.HzT(TT)), -1),
            fzT: XT,
            jzT: BT,
            nzT: gX(oT, (TT => {
              zT.nzT(TT)
            }), void 0)
          },
          coreBuffer: kT,
          load: async () => (FT = await IT.e(62).then((() => IT(60349))), FT.loadReplayModule()),
          unload: () => {
            var TT;
            null === (TT = FT) || void 0 === TT || TT.unloadReplayModule()
          },
          markTrapped: TT => FT ? FT.markReplayTrapped(TT) : new Error(String(TT)),
          staleOr: (oT, IT) => TT.staleOr(rX, oT, IT),
          crash: oT => {
            TT.reportFault(rX, oT)
          }
        });
        let ST = null;
        this.recorder = new oW({
          core: {
            azT: gX(oT, (TT => zT.azT(TT)), 0),
            RzT: gX(oT, (TT => zT.RzT(TT)), 0),
            fzT: XT,
            jzT: BT
          },
          coreCommand: (TT, oT) => {
            var IT, iT;
            return null !== (IT = null === (iT = WT()) || void 0 === iT ? void 0 : iT.writeCmd(TT, 0, oT)) && void 0 !== IT && IT
          },
          coreBuffer: kT,
          load: async () => (ST = await wX(), ST.loadRecorderModule()),
          prefetch: () => {
            wX().then((TT => TT.prefetchRecorderModule())).catch((TT => {
              console.warn(`${DX} the recorder module didn't prefetch, so a save loads it:`, TT)
            }))
          },
          unload: () => {
            var TT;
            null === (TT = ST) || void 0 === TT || TT.unloadRecorderModule()
          },
          markTrapped: TT => ST ? ST.markRecorderTrapped(TT) : new Error(String(TT)),
          memoryBytes: () => {
            var TT, oT;
            return null !== (TT = null === (oT = ST) || void 0 === oT ? void 0 : oT.recorderMemoryBytes()) && void 0 !== TT ? TT : 0
          },
          staleOr: (oT, IT) => TT.staleOr(AX, oT, IT),
          crash: oT => {
            TT.reportFault(AX, oT)
          },
          allowed: () => !0 === TT.options.get("canRecordReplays"),
          failed: mX,
          events: (TT, oT) => {
            this.runtime.recorderEvents(TT, oT)
          },
          beginSave: () => this.replay.beginSave(),
          givenUp: mX,
          unixNow: () => Date.now()
        });
        const DT = new fz({
          core: {
            czT: gX(oT, (TT => zT.czT(TT)), 0),
            MzT: gX(oT, (() => {
              zT.MzT()
            }), void 0),
            CM: gX(oT, (() => zT.CM()), 0),
            KzT: gX(oT, (() => zT.KzT()), 0)
          },
          buffer: kT,
          apiView: () => iT.apiView,
          cmd: WT,
          replay: this.replay,
          recorder: this.recorder
        });
        this.entityHooks = new fW({
          api: iT,
          cmd: WT,
          loadHook: EW,
          onError: TT => {
            console.warn(`${DX} the recorded game's replay hooks:`, TT)
          }
        });
        const LT = new Hz({
          client: DT,
          buffer: kT,
          setHoldDraws: TT => {
            oT.setHoldDraws(TT)
          },
          notify: hz.i,
          onRecorderState: () => {
            var TT;
            null === (TT = (0, mz.f)()) || void 0 === TT || TT.recorderChanged()
          },
          onViewerChange: () => {
            var TT;
            null === (TT = (0, mz.f)()) || void 0 === TT || TT.viewerChanged()
          },
          onReplayOption: oT => {
            ! function(TT, oT) {
              var IT, iT;
              const zT = pI.kb[oT.key];
              if (void 0 === zT) return;
              let kT = null !== (IT = oT.value) && void 0 !== IT ? IT : JSON.parse(JSON.stringify(null !== (iT = kX.b[zT]) && void 0 !== iT ? iT : null));
              if (null !== oT.value && oT.key < pI.Jb.Environment && "string" === typeof kT) try {
                kT = JSON.parse(kT)
              } catch (WT) {
                return void console.warn(`${XX} a replay's ${zT} isn't JSON`, WT)
              }
              TT.applyNewClientOptions({
                [zT]: kT
              })
            }(TT.options, oT)
          },
          onReplayUiEvent: SX,
          onReplayOpened: oT => {
            this.entityHooks.opened((0, vT.Ib)(oT)), TT.replayShaderPack(oT)
          },
          meshPending: () => {
            var TT, IT;
            return null !== (TT = null === (IT = oT.lastHeader) || void 0 === IT ? void 0 : IT.renderPending) && void 0 !== TT ? TT : 0
          },
          viewerOpen: wz.e,
          download: TT => {
            (0, Az.g)(TT)
          }
        });
        this.runtime = LT, iT.replay = LT.sink, (0, mz.p)(LT);
        const xT = new sz({
          live: () => {
            var TT;
            return !oT.isStopped && !0 === (null === (TT = LT.currentViewer) || void 0 === TT ? void 0 : TT.inPlayback)
          },
          cmd: WT,
          dragScale: Nz
        });
        this.freecam = xT, (0, mz.o)(xT), this.recordedOptions = function(TT, oT) {
          const IT = pI.kb,
            iT = IT.map(((IT, iT) => oT.subscribe(IT, (oT => {
              TT.setOption(iT, KX(oT))
            }))));
          return {
            sendAll() {
              IT.forEach(((IT, iT) => {
                TT.setOption(iT, KX(oT.get(IT)))
              }))
            },
            stop() {
              for (const TT of iT) TT()
            }
          }
        }(LT.recorder, TT.options), this.stops = [(0, ii.o)((TT => {
          xT.flush();
          try {
            this.replay.beforeFrame(TT)
          } catch (oT) {
            this.deps.reportFault("replayFrame", oT)
          }
        })), (0, ii.C)(((TT, oT) => {
          try {
            this.recorder.afterFrame(), oT && !this.drawn && (this.drawn = !0, this.recorder.viewDrawn())
          } catch (IT) {
            this.deps.reportFault("recorderFrame", IT)
          }
          try {
            LT.afterFrame(TT)
          } catch (IT) {
            this.deps.reportFault("replayRuntime", IT)
          }
        })), MX(LT), () => {
          this.recordedOptions.stop()
        }, cX(LT.recorder), (0, Zz.f)((TT => {
          let {
            action: oT,
            down: IT
          } = TT;
          var iT;
          IT && (null === (iT = (0, mz.f)()) || void 0 === iT || iT.keyDown(oT))
        }))];
        const cT = () => {
          const TT = LT.currentViewer;
          return !0 === (null === TT || void 0 === TT ? void 0 : TT.isOpen) ? TT : null
        };
        (0, gz.e)({
          open: (TT, oT) => this.open(TT, oT),
          replayKey: () => {
            var TT, oT;
            return null !== (TT = null === (oT = cT()) || void 0 === oT ? void 0 : oT.id) && void 0 !== TT ? TT : null
          },
          saveRefusal: () => {
            var TT, oT;
            return null !== (TT = null === (oT = cT()) || void 0 === oT ? void 0 : oT.saveRefusal) && void 0 !== TT ? TT : null
          },
          encode: () => {
            var TT, oT;
            return null !== (TT = null === (oT = cT()) || void 0 === oT ? void 0 : oT.save()) && void 0 !== TT ? TT : Promise.resolve(null)
          },
          fileHandle: () => {
            var TT, oT;
            return null !== (TT = null === (oT = LT.currentViewer) || void 0 === oT ? void 0 : oT.fileHandle) && void 0 !== TT ? TT : null
          },
          markSaved: (TT, oT) => {
            var IT;
            null === (IT = LT.currentViewer) || void 0 === IT || IT.markSaved(TT, oT)
          }
        })
      }
      netEvent(TT) {
        if ("connection" === TT.type)
          if (TT.phase === LT.F.Activated) {
            this.activeConn = TT.conn;
            const oT = this.deps.sessionInfo(TT.conn);
            null !== oT && (this.runtime.activated({
              lobbyType: (0, ET.v)(oT.lobbyName),
              gameNameWithVariation: oT.gameNameWithVariation,
              lobbyName: oT.lobbyName
            }), this.recordedOptions.sendAll())
          } else TT.phase !== LT.F.Left && TT.phase !== LT.F.Closed || TT.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
      }
      stop() {
        if (!this.stopped) {
          this.stopped = !0;
          for (const TT of this.stops) TT();
          this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, mz.j)() === this.runtime && (0, mz.p)(null), (0, mz.i)() === this.freecam && (0, mz.o)(null), (0, gz.e)(hX), null !== this.bench && window.wasmReplayBench === this.bench && (window.wasmReplayBench = void 0)
        }
      }
      async open(TT, oT) {
        const {
          running: IT
        } = this.deps;
        if (IT.isStopped) throw new Error(hz.e.coreStopped.text);
        if (TT.byteLength > 67108864) throw new Error(hz.e.cantOpen.text);
        let iT;
        try {
          iT = await async function(TT) {
            const oT = await TT.loadViewer();
            return oT.inPlayback || (0, ii.O)().leaveGame(null), oT
          }(this.runtime)
        } catch (zT) {
          throw console.warn(`${DX} the replay viewer didn't load`, zT), new Error(hz.e.viewerLoadFailed.text)
        }
        if (IT.isStopped) throw new Error(hz.e.coreStopped.text);
        await iT.open(TT, oT)
      }
    }
    var RX = IT(1770);

    function uX(TT, oT) {
      const {
        aux: IT,
        payload: iT
      } = function(TT) {
        return {
          aux: TT.reset ? LT.Vb.ResetFirst : 0,
          payload: EX(TT.changes)
        }
      }(oT);
      TT.queueOptions(IT, iT) && (oT.reset && RX.e.reset(), RX.e.apply(oT.changes))
    }
    const vX = new TextEncoder;

    function EX(TT) {
      const oT = new fX;
      return jX(oT, TT), oT.bytes()
    }
    class fX {
      constructor() {
        this.buf = new Uint8Array(256), this.view = new DataView(this.buf.buffer), this.len = 0
      }
      room(TT) {
        if (this.len + TT <= this.buf.length) return;
        const oT = new Uint8Array(Math.max(2 * this.buf.length, this.len + TT));
        oT.set(this.buf.subarray(0, this.len)), this.buf = oT, this.view = new DataView(oT.buffer)
      }
      u8(TT) {
        this.room(1), this.buf[this.len++] = TT
      }
      tagged(TT, oT, IT) {
        this.room(1 + oT), this.buf[this.len++] = TT, 1 === oT ? this.view.setUint8(this.len, IT) : 2 === oT ? this.view.setUint16(this.len, IT) : this.view.setUint32(this.len, IT), this.len += oT
      }
      signed(TT, oT, IT) {
        this.room(1 + oT), this.buf[this.len++] = TT, 1 === oT ? this.view.setInt8(this.len, IT) : 2 === oT ? this.view.setInt16(this.len, IT) : this.view.setInt32(this.len, IT), this.len += oT
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

    function CX(TT, oT, IT, iT, zT, kT, WT) {
      oT < iT ? TT.u8(IT | oT) : null !== zT && oT < 256 ? TT.tagged(zT, 1, oT) : oT < 65536 ? TT.tagged(kT, 2, oT) : TT.tagged(WT, 4, oT)
    }

    function jX(TT, oT) {
      switch (typeof oT) {
        case "undefined":
          return void TT.raw(JX);
        case "boolean":
          return void TT.u8(oT ? 195 : 194);
        case "number":
          return void
          function(TT, oT) {
            oT >>> 0 === oT ? oT < 128 ? TT.u8(oT) : oT < 256 ? TT.tagged(204, 1, oT) : oT < 65536 ? TT.tagged(205, 2, oT) : TT.tagged(206, 4, oT) : (oT | 0) === oT ? oT >= -32 ? TT.u8(255 & oT) : oT >= -128 ? TT.signed(208, 1, oT) : oT >= -32768 ? TT.signed(209, 2, oT) : TT.signed(210, 4, oT) : TT.f64(oT)
          }(TT, oT);
        case "string": {
          const IT = vX.encode(oT);
          return CX(TT, IT.length, 160, 32, 217, 218, 219), void TT.raw(IT)
        }
        case "object":
          break;
        default:
          return void TT.u8(192)
      }
      if (null === oT) TT.u8(192);
      else if (Array.isArray(oT)) {
        CX(TT, oT.length, 144, 16, null, 220, 221);
        for (const IT of oT) jX(TT, IT)
      } else if (oT instanceof Uint8Array) CX(TT, oT.length, 0, 0, 196, 197, 198), TT.raw(oT);
      else {
        const IT = Object.keys(oT);
        CX(TT, IT.length, 128, 0, null, 222, 223);
        for (const iT of IT) jX(TT, iT), jX(TT, oT[iT])
      }
    }
    const JX = new Uint8Array([212, 0, 0]);
    var UX = IT(41388),
      aX = IT(41392),
      YX = IT(39807),
      QX = IT(39834),
      OX = IT(3280);
    const HX = [1e3, 3e3, 9e3];
    class nX {
      constructor(TT) {
        this.host = TT, this.sets = new Map, this.table = [], this.generation = 0, this.Ec = !1
      }
      onEvent(TT) {
        const oT = function(TT) {
          if (TT.byteLength !== LT.ud) return null;
          const oT = new DataView(TT.buffer, TT.byteOffset, TT.byteLength);
          return {
            want: oT.getUint16(0, !0),
            release: oT.getUint16(2, !0)
          }
        }(TT);
        oT && !this.Ec && (oT.release !== LT.wd && this.release(oT.release), oT.want !== LT.wd && this.want(oT.want))
      }
      reset(TT) {
        if (!this.Ec) {
          for (const [TT, oT] of this.sets) "ready" === oT.state && this.releaseAll(oT.distinct), this.sets.delete(TT);
          this.table = TT, this.generation++
        }
      }
      dispose() {
        if (this.Ec) return;
        this.Ec = !0, this.generation++, this.table = [];
        const TT = [...this.sets.values()];
        this.sets.clear();
        let oT = null;
        for (const iT of TT)
          for (const TT of "ready" === iT.state ? iT.distinct : []) try {
            this.host.jIT(TT)
          } catch (IT) {
            oT ??= {
              error: IT
            }
          }
        if (oT) throw oT.error
      }
      isReady(TT) {
        var oT;
        return "ready" === (null === (oT = this.sets.get(TT)) || void 0 === oT ? void 0 : oT.state)
      }
      want(TT) {
        const oT = this.sets.get(TT);
        if ("loading" === (null === oT || void 0 === oT ? void 0 : oT.state)) return oT.wanted = !0, void this.capAnswer(TT, oT);
        if ("ready" === (null === oT || void 0 === oT ? void 0 : oT.state)) return void this.host.sendReady(ZX(TT, oT.images, oT.size));
        const IT = this.table[TT];
        if (!IT || 1 !== IT.urls.length && IT.urls.length !== pI.Ub.CubeFaces) return this.host.sendReady(lX(TT)), void this.host.onLoadFailed(TT, "", new Error(`no image set ${TT}`));
        const iT = {
          state: "loading",
          wanted: !0
        };
        this.sets.set(TT, iT), this.load(TT, IT, iT, this.generation, 0), this.capAnswer(TT, iT)
      }
      capAnswer(TT, oT) {
        this.host.wait(4e3, (() => {
          this.sets.get(TT) === oT && oT.wanted && this.host.sendReady(lX(TT))
        }))
      }
      load(TT, oT, IT, iT, zT) {
        const kT = [...new Set(oT.urls)];
        Promise.allSettled(kT.map((TT => this.host.loadImage(TT, oT.orientation)))).then((WT => {
          const XT = WT.flatMap((TT => "fulfilled" === TT.status ? [TT.value] : [])),
            BT = iT === this.generation && this.sets.get(TT) === IT,
            FT = WT.findIndex((TT => "rejected" === TT.status));
          if (!BT || !IT.wanted) return this.Ec ? void this.releaseAfterDispose(XT.map(qX)) : (this.releaseAll(XT.map(qX)), void(BT && this.sets.delete(TT)));
          FT < 0 ? this.loaded(TT, oT, kT, XT) : (this.releaseAll(XT.map(qX)), this.host.sendReady(lX(TT)), zT < HX.length ? this.host.wait(HX[zT], (() => {
            iT === this.generation && this.sets.get(TT) === IT && (IT.wanted ? this.load(TT, oT, IT, iT, zT + 1) : this.sets.delete(TT))
          })) : (this.sets.delete(TT), this.host.onLoadFailed(TT, kT[FT], WT[FT].reason)))
        }))
      }
      loaded(TT, oT, IT, iT) {
        const [zT] = iT, kT = [zT.width, zT.height], WT = iT.every((TT => TT.width === kT[0] && TT.height === kT[1])), XT = oT.urls.length === pI.Ub.CubeFaces;
        if (!WT || kT[0] <= 0 || kT[1] <= 0 || kT[0] > 65535 || kT[1] > 65535 || XT && kT[0] !== kT[1]) {
          this.releaseAll(iT.map(qX)), this.sets.delete(TT), this.host.sendReady(lX(TT));
          const IT = iT.map((TT => `${TT.width}x${TT.height}`));
          return void this.host.onLoadFailed(TT, oT.urls[0], new Error(`set ${TT}'s images can't make its texture: ${IT.join(", ")}`))
        }
        const BT = oT.urls.map((TT => iT[IT.indexOf(TT)].id)),
          FT = iT.map(qX);
        this.sets.set(TT, {
          state: "ready",
          images: BT,
          distinct: FT,
          size: kT
        }), this.host.sendReady(ZX(TT, BT, kT))
      }
      release(TT) {
        const oT = this.sets.get(TT);
        "loading" === (null === oT || void 0 === oT ? void 0 : oT.state) ? oT.wanted = !1: "ready" === (null === oT || void 0 === oT ? void 0 : oT.state) && (this.releaseAll(oT.distinct), this.sets.delete(TT))
      }
      releaseAll(TT) {
        for (const oT of TT) this.host.jIT(oT)
      }
      releaseAfterDispose(TT) {
        for (const oT of TT) try {
          this.host.jIT(oT)
        } catch {}
      }
    }

    function qX(TT) {
      return TT.id
    }

    function ZX(TT, oT, IT) {
      const iT = new Uint8Array(pI.Ub.SkyImagesReadyBytes),
        zT = new DataView(iT.buffer);
      return zT.setUint16(0, TT, !0), zT.setUint16(2, oT.length, !0), zT.setUint16(4, IT[0], !0), zT.setUint16(6, IT[1], !0), oT.slice(0, pI.Ub.CubeFaces).forEach(((TT, oT) => {
        zT.setUint32(8 + 4 * oT, TT, !0)
      })), iT
    }

    function lX(TT) {
      const oT = new Uint8Array(pI.Ub.SkyImagesReadyBytes),
        IT = new DataView(oT.buffer);
      return IT.setUint16(0, TT, !0), IT.setUint16(2, pI.Ub.Failed, !0), oT
    }
    let sX = Promise.resolve();
    async function tX(TT, oT) {
      let IT;
      try {
        IT = await (0, OX.K)(TT)
      } catch (kT) {
        throw new YX.b("fetch", TT, {
          cause: kT
        })
      }
      const iT = sX.then((() => async function(TT, oT) {
        const IT = new Blob([TT.slice()]);
        let iT = await createImageBitmap(IT, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: oT
        });
        const zT = 1024 / Math.max(iT.width, iT.height);
        if (zT < 1) {
          const TT = iT;
          try {
            iT = await createImageBitmap(TT, {
              resizeWidth: Math.max(1, Math.round(TT.width * zT)),
              resizeHeight: Math.max(1, Math.round(TT.height * zT)),
              resizeQuality: "high",
              premultiplyAlpha: "none",
              colorSpaceConversion: "none"
            })
          } finally {
            TT.close()
          }
        }
        return iT
      }(IT, oT)));
      let zT;
      sX = iT.catch((() => {}));
      try {
        zT = await iT
      } catch (kT) {
        throw new YX.b("decode", TT, {
          cause: kT
        })
      }
      return {
        id: (0, YX.h)(zT),
        width: zT.width,
        height: zT.height
      }
    }
    var GX = IT(2715),
      pX = IT(33283);
    const bX = GX.f.length;

    function yX(TT) {
      const oT = [],
        IT = [];
      GX.f.forEach(((iT, zT) => {
        var kT;
        const WT = null !== (kT = NX(TT[iT])) && void 0 !== kT ? kT : pX.m[iT];
        "custom" === WT.type ? (IT.push({
          id: zT,
          kind: pI.Ub.KindCustom,
          set: oT.length,
          earth: null
        }), oT.push({
          urls: [WT.px, WT.py, WT.pz, WT.nx, WT.ny, WT.nz],
          orientation: "none"
        })) : IT.push({
          id: zT,
          kind: pI.Ub.KindEarth,
          set: 0,
          earth: WT
        })
      }));
      const iT = NX(TT.earth);
      "earth" === (null === iT || void 0 === iT ? void 0 : iT.type) && IT.push({
        id: bX,
        kind: pI.Ub.KindEarth,
        set: 0,
        earth: iT
      });
      const zT = oT.length;
      oT.push({
        urls: pX.g.map((TT => pX.h + TT)),
        orientation: "none"
      }), oT.push({
        urls: [pX.k],
        orientation: "flipY"
      }), oT.push({
        urls: [pX.e],
        orientation: "flipY"
      });
      const kT = new Uint8Array(pI.Ub.SkyTableHeaderBytes + IT.length * pI.Ub.SkyTableEntryBytes),
        WT = new DataView(kT.buffer);
      return WT.setUint16(0, zT, !0), WT.setUint16(2, zT + 1, !0), WT.setUint16(4, zT + 2, !0), WT.setUint16(6, IT.length, !0), IT.forEach(((TT, oT) => {
        const IT = pI.Ub.SkyTableHeaderBytes + oT * pI.Ub.SkyTableEntryBytes;
        WT.setUint16(IT, TT.id, !0), WT.setUint8(IT + 2, TT.kind);
        const iT = IT + 4;
        TT.earth ? function(TT, oT, IT) {
          const iT = TT;
          let zT = 0,
            kT = 0;
          for (const [WT, XT] of PX) {
            const TT = iT[WT];
            "number" === typeof TT && Number.isFinite(TT) && (oT.setFloat32(IT + 4 * XT, TT, !0), zT |= 1 << XT)
          }
          for (const [WT, XT, BT] of dX) {
            const TT = iT[WT];
            Array.isArray(TT) && 3 === TT.length && TT.every((TT => "number" === typeof TT && Number.isFinite(TT))) && (TT.forEach(((TT, iT) => {
              oT.setFloat32(IT + BT + 4 * iT, TT, !0)
            })), zT |= XT)
          }
          VX.forEach(((TT, kT) => {
            let [WT, XT] = TT;
            const BT = iT[WT];
            "number" === typeof BT && Number.isFinite(BT) && (oT.setFloat32(IT + pI.l.CameraOffsetAt + 4 * kT, BT, !0), zT |= XT)
          }));
          for (const [WT, XT] of TB) {
            const TT = iT[WT];
            null !== TT && void 0 !== TT && (zT |= XT, TT && (kT |= XT >>> 14))
          }
          oT.setUint32(IT + pI.l.PresentAt, zT, !0), oT.setUint8(IT + pI.l.FlagsAt, kT)
        }(TT.earth, WT, iT) : WT.setUint16(iT, TT.set, !0)
      })), {
        payload: kT,
        sets: oT
      }
    }

    function NX(TT) {
      if ("object" !== typeof TT || null === TT) return null;
      const oT = TT;
      if ("earth" === oT.type) return TT;
      return "custom" === oT.type && ["px", "py", "pz", "nx", "ny", "nz"].every((TT => {
        const IT = oT[TT];
        return "string" === typeof IT && IT.length > 0
      })) ? TT : null
    }
    const PX = [
        ["inclination", pI.l.Inclination],
        ["turbidity", pI.l.Turbidity],
        ["luminance", pI.l.Luminance],
        ["rayleigh", pI.l.Rayleigh],
        ["mieCoefficient", pI.l.MieCoefficient],
        ["mieDirectionalG", pI.l.MieDirectionalG],
        ["distance", pI.l.Distance],
        ["azimuth", pI.l.Azimuth]
      ],
      dX = [
        ["sunPosition", pI.l.SunPosition, pI.l.SunPositionAt],
        ["up", pI.l.Up, pI.l.UpAt],
        ["vertexTint", pI.l.VertexTint, pI.l.VertexTintAt]
      ],
      VX = [
        ["xCameraOffset", pI.l.CameraOffsetX],
        ["yCameraOffset", pI.l.CameraOffsetY],
        ["zCameraOffset", pI.l.CameraOffsetZ]
      ],
      TB = [
        ["useSunPosition", pI.l.UseSunPosition],
        ["dithering", pI.l.Dithering],
        ["infiniteDistance", pI.l.InfiniteDistance]
      ];

    function oB(TT, oT, IT) {
      const iT = new iB({
        writeCmd: TT,
        warn: oT,
        followPack: IB(IT, oT)
      });
      return iT.start(), iT
    }

    function IB(TT, oT) {
      return IT => {
        let iT = () => {};
        const zT = TT((TT => {
          iT(), iT = () => {}, null !== TT ? iT = TT.subscribe((TT => {
            IT(function(TT, oT, IT) {
              if ("object" !== typeof TT || null === TT) return null;
              const iT = TT.skyBoxes;
              if ("object" !== typeof iT || null === iT) return null;
              if ("player" === oT) return iT;
              return Object.fromEntries(Object.entries(iT).filter((TT => {
                let [oT, iT] = TT;
                return !! function(TT) {
                  if ("object" !== typeof TT || null === TT) return !1;
                  return "earth" === TT.type || Object.entries(TT).every((TT => {
                    let [oT, IT] = TT;
                    return "type" === oT || ("" === (iT = IT) || null !== function(TT) {
                      var oT, IT, iT;
                      return "string" !== typeof TT ? null : null !== (oT = null === (IT = zB.exec(TT)) || void 0 === IT || null === (iT = IT.groups) || void 0 === iT ? void 0 : iT.base64) && void 0 !== oT ? oT : null
                    }(iT));
                    var iT
                  }))
                }(iT) || (IT(`Ignoring texture pack skybox ${oT}, whose faces are not all data URLs`, null), !1)
              })))
            }(TT.pack, null === TT.gameSource ? "player" : "customGame", oT))
          })) : IT(null)
        }));
        return () => {
          zT(), iT()
        }
      }
    }
    class iB {
      constructor(TT) {
        var oT, IT, iT;
        this.host = TT, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.Ec = !1, this.wait = null !== (oT = TT.wait) && void 0 !== oT ? oT : (TT, oT) => {
          setTimeout(oT, TT)
        }, this.loader = new nX({
          loadImage: null !== (IT = TT.loadImage) && void 0 !== IT ? IT : tX,
          jIT: null !== (iT = TT.jIT) && void 0 !== iT ? iT : YX.k,
          sendReady: TT => {
            this.queue.push({
              kind: pI.Ub.SkyImagesReady,
              payload: TT
            })
          },
          onLoadFailed: (oT, IT, iT) => {
            TT.warn(`sky image set ${oT} (${IT}) didn't load: the last sky stays`, iT)
          },
          wait: this.wait
        })
      }
      start() {
        this.wait(QX.d, (() => {
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
        this.Ec = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
      }
      write(TT) {
        if (this.Ec) return;
        const oT = yX(TT);
        var IT, iT;
        this.written && (IT = this.written, iT = oT, IT.payload.length === iT.payload.length && IT.payload.every(((TT, oT) => TT === iT.payload[oT])) && IT.sets.length === iT.sets.length && IT.sets.every(((TT, oT) => {
          const IT = iT.sets[oT];
          return TT.orientation === IT.orientation && TT.urls.length === IT.urls.length && TT.urls.every(((TT, oT) => TT === IT.urls[oT]))
        }))) || (this.written = oT, this.loader.reset(oT.sets), this.queue = this.queue.filter((TT => TT.kind !== pI.Ub.SkyImagesReady)), this.queue.push({
          kind: pI.Ub.SkyTable,
          payload: oT.payload
        }))
      }
    }
    const zB = /^data:[\w.+/-]*;base64,(?<base64>[A-Za-z0-9+/]*={0,2})$/;
    var kB = IT(2520),
      WB = IT(2597),
      XB = IT(298),
      BB = IT(183),
      FB = IT(2525),
      SB = IT(2527),
      DB = IT(263),
      LB = IT(270),
      xB = IT(2546),
      cB = IT(2559),
      KB = IT(2575),
      MB = IT(112),
      rB = IT(282),
      AB = IT(39606);
    class gB {
      constructor() {
        this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, qz.i)(Ai.W, (TT => {
          this.onReply((0, nz.h)(Ai.W, TT), performance.now())
        }))
      }
      onFrame(TT, oT) {
        null === this.id ? this.id = TT : TT !== this.id && (this.id = TT, this.sentMs = document.hidden ? null : oT)
      }
      onVisibilityChange() {
        this.sentMs = null
      }
      onReply(TT, oT) {
        TT === this.id && null !== this.sentMs && (this.roundTripMs = Math.round(oT - this.sentMs), this.sentMs = null)
      }
      take() {
        const TT = this.roundTripMs;
        return this.roundTripMs = null, TT
      }
      stop() {
        this.stopReplies()
      }
    }
    class hB {
      constructor() {
        this.sampled = 0, this.timed = 0, this.frameUs = 0, this.primed = !1, this.windowTimed = 0, this.windowUs = 0
      }
      onFrame(TT, oT, IT, iT) {
        const zT = TT - this.sampled >>> 0,
          kT = oT - this.timed >>> 0,
          WT = IT - this.frameUs >>> 0,
          XT = this.primed;
        return this.sampled = TT, this.timed = oT, this.frameUs = IT, this.primed = !0, !(!XT || zT > 64 || kT > 64) && (iT && WT <= 1e6 * kT && (this.windowTimed += kT, this.windowUs += WT), iT && zT > 0)
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
    const wB = {
      pacedShare: null,
      switchesPerHour: null,
      lagP50Ms: null,
      lagP90Ms: null,
      joinLagP90Ms: null
    };
    class mB {
      constructor() {
        this.samples = new Float64Array(4096), this.count = 0
      }
      add(TT, oT) {
        const IT = Math.min(4096, this.count + oT);
        this.samples.fill(TT, this.count, IT), this.count = IT
      }
      clear() {
        this.count = 0
      }
      take(TT) {
        const oT = this.count;
        if (this.count = 0, oT < 30) return null;
        const IT = this.samples.subarray(0, oT).sort();
        return TT.map((TT => IT[Math.min(oT - 1, Math.floor(TT * oT))]))
      }
    }
    class eB {
      constructor() {
        this.word = 0, this.lagUs = 0, this.primed = !1, this.lastDrawnMs = -1, this.tieredMs = 0, this.pacedMs = 0, this.switches = 0, this.lags = new mB, this.inJoin = !1, this.rose = !1, this.joinLags = new mB, this.joinLagP90Ms = null
      }
      onFrame(TT, oT, IT, iT, zT) {
        const kT = TT.headerWord(pI.A.Pacing),
          WT = TT.headerWord(pI.A.PacingLagUs),
          XT = (kT >>> pI.P.LagsShift) - (this.word >>> pI.P.LagsShift) & pI.P.CountMask,
          BT = (kT >>> pI.P.SwitchesShift) - (this.word >>> pI.P.SwitchesShift) & pI.P.CountMask,
          FT = XT > 0 ? (WT - this.lagUs >>> 0) / XT / 1e3 : 0,
          ST = this.primed && XT <= 64 && BT <= 2 && FT <= 6e4;
        if (this.rose = 0 !== (kT & ~this.word & pI.P.Joining), this.word = kT, this.lagUs = WT, this.primed = !0, 0 !== (kT & pI.P.Tiered)) {
          if (0 !== (kT & pI.P.Joining)) this.rose && (this.inJoin = !0, this.joinLags.clear()), this.inJoin && ST && iT && XT > 0 && this.joinLags.add(FT, XT);
          else if (this.inJoin) {
            var DT, LT;
            this.inJoin = !1, this.joinLagP90Ms = null !== (DT = null === (LT = this.joinLags.take([.9])) || void 0 === LT ? void 0 : LT[0]) && void 0 !== DT ? DT : null
          }
          if (zT) {
            if (ST && (this.switches += BT, XT > 0 && this.lags.add(FT, XT)), IT) {
              if (this.lastDrawnMs >= 0 && oT - this.lastDrawnMs <= 250) {
                const TT = oT - this.lastDrawnMs;
                this.tieredMs += TT, (kT & pI.P.AheadMask) > 0 && (this.pacedMs += TT)
              }
              this.lastDrawnMs = oT
            }
          } else this.lastDrawnMs = -1
        } else this.lastDrawnMs = -1
      }
      onJoin() {
        this.takeWindow(), this.rose || (this.inJoin = !1, this.joinLags.clear()), this.lastDrawnMs = -1
      }
      snapshotAndReset(TT) {
        const oT = this.takeWindow(),
          IT = this.joinLagP90Ms;
        return this.joinLagP90Ms = null, TT ? {
          ...oT,
          joinLagP90Ms: IT
        } : {
          ...wB,
          joinLagP90Ms: IT
        }
      }
      unsent(TT) {
        this.joinLagP90Ms ??= TT.joinLagP90Ms
      }
      takeWindow() {
        var TT, oT;
        const IT = this.tieredMs >= 2e3,
          iT = this.lags.take([.5, .9]),
          zT = {
            pacedShare: IT ? this.pacedMs / this.tieredMs : null,
            switchesPerHour: IT ? 36e5 * this.switches / this.tieredMs : null,
            lagP50Ms: null !== (TT = null === iT || void 0 === iT ? void 0 : iT[0]) && void 0 !== TT ? TT : null,
            lagP90Ms: null !== (oT = null === iT || void 0 === iT ? void 0 : iT[1]) && void 0 !== oT ? oT : null
          };
        return this.tieredMs = 0, this.pacedMs = 0, this.switches = 0, zT
      }
    }
    var RB = IT(8677),
      uB = IT(2494),
      vB = IT(39697),
      EB = IT(8674),
      fB = IT(2536),
      CB = IT(2514);
    const jB = {
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

    function JB(TT) {
      return new UB(TT)
    }
    class UB {
      constructor(TT) {
        this.shell = TT, this.tracker = new SB.e, this.gpu = new hB, this.pacing = new eB, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.fpsOverTime = null, this.firstSpanFps = null, this.initialFps = null, this.ping = new gB, this.pacedCpuMs = 0, this.frameDebug = null, this.onVisibility = () => {
          this.tracker.onVisibilityChange(), this.ping.onVisibilityChange(), !document.hidden && this.fpsSpanStartMs >= 0 && (this.fpsFrames = 0, this.fpsSpanStartMs = performance.now())
        }, (0, RB.d)(TT.backend, TT.canvas, TT.adapterVendor), this.tracker.start((() => !TT.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), (0, fB.b)("wasm", (() => {
          const {
            n: oT,
            sampleCount: IT
          } = (0, vB.g)();
          return `${TT.backend}, quality steps aim at up to ${CB.b.target.maxFps} fps, pixel n ${oT}, msaa ${IT}`
        }), (TT => {
          this.frameDebug = TT
        })), this.timers.push(setInterval((() => {
          this.flush(), this.fpsOverTime = null, this.initialFps = null
        }), 1e4), setInterval((() => {
          this.followGame() && (this.hasFlushedSinceConnect || (this.flush(), this.hasFlushedSinceConnect = !0))
        }), 250))
      }
      animationFrame(TT) {
        var oT;
        this.tracker.onAnimationFrame(TT), null === (oT = this.frameDebug) || void 0 === oT || oT.animationFrame()
      }
      frameRan(TT, oT, IT, iT) {
        var zT;
        this.ping.onFrame(TT.headerWord(pI.A.PingSent), IT);
        const kT = this.tracker;
        this.pacing.onFrame(TT, oT, "drawn" === iT, !document.hidden, kT.isSampling());
        const WT = TT.headerWord(pI.A.TickUs) / 1e3 + (0, ii.S)();
        kT.pw(WT), null === (zT = this.frameDebug) || void 0 === zT || zT.wasmFrame(TT, oT, IT, "drawn" === iT, kT.isSampling(), WT, (0, EB.g)());
        const XT = Math.max(0, IT - oT - WT);
        if ("drawn" !== iT) return void("paced" === iT && (this.pacedCpuMs += XT));
        this.followGame(), kT.onFrameStart(oT);
        this.gpu.onFrame(TT.headerWord(pI.A.GpuSampled), TT.headerWord(pI.A.GpuTimed), TT.headerWord(pI.A.GpuFrameUs), kT.isSampling()) && kT.onGpuSampleStarted(), kT.onFrameCpu(XT + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(oT)
      }
      stop() {
        for (const TT of this.timers) clearInterval(TT);
        this.timers.length = 0, document.removeEventListener("visibilitychange", this.onVisibility), this.ping.stop()
      }
      followGame() {
        const TT = this.shell.joinedGame();
        return TT !== this.game && (this.game = TT, this.tracker.snapshotAndReset(), this.pacing.onJoin(), this.hasFlushedSinceConnect = !1, this.inGameAtLastFlush = !1, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.pacedCpuMs = 0, this.firstSpanFps = null, this.fpsOverTime = null, this.initialFps = null), null !== TT
      }
      countFpsFrame(TT) {
        if (this.fpsSpanStartMs < 0) {
          if (!this.shell.inGame()) return;
          this.fpsSpanStartMs = TT
        }
        this.fpsFrames++;
        const oT = TT - this.fpsSpanStartMs;
        if (!(oT < KB.c)) {
          if (!document.hidden) {
            const TT = 1e3 * this.fpsFrames / oT;
            this.firstSpanFps ??= TT, this.initialFps = this.firstSpanFps, this.fpsOverTime = TT
          }
          this.fpsFrames = 0, this.fpsSpanStartMs = TT
        }
      }
      flush() {
        const TT = this.followGame(),
          {
            cpuFrameMs: oT,
            refreshHz: IT,
            cpuBottleneck: zT,
            frameIntervalCv: kT,
            ...WT
          } = this.tracker.snapshotAndReset(),
          XT = this.shell.inGame(),
          BT = XT && this.inGameAtLastFlush,
          FT = BT ? WT : FB.f,
          ST = this.pacing.snapshotAndReset(BT);
        if (this.inGameAtLastFlush = XT, this.pendingLightFailures += this.shell.takeFailedMeshJobs(), !TT) return void this.pacing.unsent(ST);
        const DT = performance.now(),
          xT = (0, cB.t)((0, cB.p)(DT), this.unsentPage),
          KT = function(TT, oT, IT, zT, kT, WT, XT, BT) {
            var FT, ST, DT;
            const LT = {},
              {
                canvas: xT
              } = TT,
              cT = (0, xB.d)({
                refreshHz: oT.refreshHz,
                msaa: TT.msaa(),
                autoMsaaOff: (0, EB.d)()
              });
            for (const KT of (0, WB.f)()) {
              const MT = KT.name;
              let rT;
              if ((0, XB.q)(MT)) rT = (0, cB.d)(MT);
              else if ((0, cB.k)(MT)) rT = BT[MT];
              else if ((0, xB.h)(MT)) rT = cT[MT];
              else switch (MT) {
                case "fps":
                  rT = zT;
                  break;
                case "jX":
                  rT = kT;
                  break;
                case "QX":
                  rT = (0, uB.z)((0, vB.g)().n);
                  break;
                case "OX":
                  rT = Math.max(xT.width, xT.height);
                  break;
                case "HX":
                  rT = Math.min(xT.width, xT.height);
                  break;
                case "qX":
                  rT = navigator.hardwareConcurrency || null;
                  break;
                case "ZX":
                  rT = (0, pz.getWebGpuSupported)();
                  break;
                case "lX":
                  rT = null === TT.fallbackReason ? null : jB[TT.fallbackReason];
                  break;
                case "sX":
                  rT = oT.cpuFrameMs;
                  break;
                case "tX":
                  rT = oT.refreshHz;
                  break;
                case "GX":
                  rT = oT.cpuBottleneck;
                  break;
                case "pX":
                  rT = oT.frameIntervalCv;
                  break;
                case "bX":
                  rT = oT.frameMs;
                  break;
                case "yX":
                  rT = oT.tickMs;
                  break;
                case "VX":
                  rT = oT.mainBusyShare;
                  break;
                case "TB":
                  rT = oT.mainProbeDelayMs;
                  break;
                case "NX":
                  rT = oT.longAnimationFramesPerMin;
                  break;
                case "PX":
                  rT = oT.longAnimationFrameTimeShare;
                  break;
                case "dX":
                  rT = oT.longAnimationFrameScriptShare;
                  break;
                case "oB":
                  rT = oT.gpuPassMs;
                  break;
                case "IB":
                  rT = oT.gpuSubmitToDoneMs;
                  break;
                case "iB":
                  rT = IT.pacedShare;
                  break;
                case "zB":
                  rT = IT.switchesPerHour;
                  break;
                case "kB":
                  rT = IT.lagP50Ms;
                  break;
                case "WB":
                  rT = IT.lagP90Ms;
                  break;
                case "XB":
                  rT = IT.joinLagP90Ms;
                  break;
                case "wB":
                  rT = (0, kB.g)(WT);
                  break;
                case "YX":
                  rT = XT;
                  break;
                case "BB":
                case "FB":
                case "SB":
                case "DB":
                case "LB":
                case "xB":
                case "cB":
                case "rB":
                case "AB":
                case "gB":
                case "hB":
                case "mB":
                case "eB":
                case "RB":
                case "uB":
                  rT = null;
                  break;
                case "nB":
                  rT = (0, pz.getPlatformType)();
                  break;
                case "qB":
                  rT = (0, pz.getGpuVendor)();
                  break;
                case "ZB":
                  rT = AB.c[TT.backend];
                  break;
                case "lB":
                  rT = (0, MB.b)();
                  break;
                case "sB":
                  rT = (0, pz.getOperatingSystem)();
                  break;
                case "tB":
                  rT = (0, pz.getTrafficSource)();
                  break;
                case "GB":
                  rT = null !== (FT = iT.c.get("gameEntrySource")) && void 0 !== FT ? FT : BB.e;
                  break;
                case "pB":
                  rT = oT.frameLimiter;
                  break;
                case "bB":
                  rT = (0, DB.h)();
                  break;
                case "yB":
                  rT = null !== (ST = (0, LB.c)()) && void 0 !== ST ? ST : BB.e;
                  break;
                case "NB":
                  rT = (0, DB.d)(xT.width, xT.height);
                  break;
                case "PB":
                  rT = (0, WB.g)(-(new Date).getTimezoneOffset());
                  break;
                case "TF":
                  rT = null !== (DT = TT.fallbackReason) && void 0 !== DT ? DT : BB.e;
                  break;
                case "iF":
                  rT = "ready";
                  break;
                case "zF":
                  rT = (0, pz.getSoftwareRenderer)();
                  break;
                case "VB":
                  rT = TT.shaderPackRuns() ? "true" : "false";
                  break;
                case "XF":
                  rT = rB.y;
                  break;
                case "dB":
                case "kF":
                case "WF":
                case "oF":
                case "IF":
                  rT = BB.e;
                  break;
                default:
                  throw new Error(`Unhandled field name: ${MT}`)
              }
              if (void 0 === rT) throw new Error(`Metric ${MT} has no value`);
              LT[MT] = rT
            }
            return LT
          }(this.shell, {
            cpuFrameMs: oT,
            refreshHz: IT,
            cpuBottleneck: zT,
            frameIntervalCv: kT,
            ...FT
          }, ST, this.fpsOverTime, this.initialFps, this.pendingLightFailures, this.ping.take(), xT);
        if (! function(TT, oT, IT) {
            return (0, so.b)(), TT(cT.o.Send, oT, IT)
          }(this.shell.writeCmd, LT.rd, function(TT) {
            const oT = (0, QT.f)((0, po.c)(TT)),
              IT = new Uint8Array(cT.Wd.BYTES + oT.length);
            return new DataView(IT.buffer).setUint16(0, po.b.AnalyticsUpdate, !0), IT.set(oT, cT.Wd.BYTES), IT
          }(KT))) return this.unsentPage = xT, this.pacing.unsent(ST), void(0 === this.sendsDropped++ && console.warn("[wasm-client] an analytics update found the cmd ring full: dropped"));
        this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, kB.e), (0, cB.o)(KT, "wasm", DT)
      }
    }
    var aB = IT(38532);

    function YB(TT, oT, IT) {
      const iT = new Map;
      return (0, aB.c)(((TT, IT, iT) => oT.mS(TT, IT, iT)), ((oT, IT, zT) => {
        const kT = `${oT},${IT},${zT}`;
        return iT.has(kT) || iT.set(kT, (0, Qo.d)(TT, oT, IT, zT)), iT.get(kT)
      }), IT)
    }
    var QB = IT(38537),
      OB = IT(39487);

    function HB(TT) {
      const oT = null !== TT && 0 !== (cT.s.playerFlags(TT.api.apiView, 0) & cT.Cd.CursorAim);
      oT !== (0, OB.m)() && (0, OB.H)(oT, null !== TT)
    }

    function nB(TT) {
      return (0, ri.d)(Ai.M, TT)
    }
    const qB = new kT.e((TT => IT(41394)(`./${TT}/${TT}Client`)));
    let ZB = null,
      lB = null;
    async function sB(TT) {
      ZB ??= IT.e(27).then((() => IT(38098))).then((TT => {
        lB = TT.createDefaultClientPlugins
      }), (TT => {
        throw ZB = null, TT
      })), await Promise.all([qB.load(TT), ZB])
    }

    function tB(TT) {
      TT.load(new ao(si, new bi))
    }
    let GB = !1;
    const pB = new WeakMap;

    function bB(TT) {
      try {
        TT()
      } catch (oT) {
        console.error("[bloxd-wasm-client] a session-end step failed", oT)
      }
    }

    function yB(TT, oT) {
      ! function() {
        var TT, oT;
        Zi.Howler.volume();
        const IT = Zi.Howler;
        null === (TT = IT._autoResume) || void 0 === TT || TT.call(IT), null === (oT = IT._autoSuspend) || void 0 === oT || oT.call(IT)
      }(), oT.audio.prepare();
      const IT = new hT(oT.core, oT.memory, oT.audio);
      let kT;
      try {
        kT = new Kz(IT, oT.options)
      } catch (LT) {
        return TT.crash(rz.w, LT), null
      }(0, BT.e)(Mz(IT, kT));
      const ST = new eX({
        running: TT,
        api: IT,
        core: oT.core,
        memory: oT.memory,
        staleOr: oT.staleOr,
        reportFault: oT.reportReplayFault,
        options: oT.options,
        sessionInfo: oT.sessionInfo,
        replayShaderPack: oT.replayShaderPack
      });
      (0, ii.G)();
      const DT = new Qi({
        api: IT,
        tables: kT,
        sessionInfo: oT.sessionInfo,
        gameFactory: TT => qB.loadedFactory(TT),
        defaultPlugins: (TT, oT, IT, iT) => {
          if (null === lB) throw new Error("The default plugins started before they loaded");
          return lB(TT, oT, IT, iT)
        },
        serverOptions: oT.options,
        onNetEvent: TT => {
          ST.netEvent(TT), oT.onNetEvent(TT)
        },
        setLocalOptions: oT => {
          uX(TT, {
            changes: oT,
            reset: !1
          })
        },
        playSound: (TT, IT, iT, zT, kT, WT, XT) => oT.audio.playGame(TT, IT, iT, zT, kT, WT, XT),
        onSessionEnd: () => {
          bB(zT.i), bB(oz), bB((() => {
            iT.c.set({
              openInGameMenuName: null
            })
          })), bB((() => {
            oT.audio.cancelPreload()
          }))
        },
        beforeWrite: oT.beforeWrite,
        beforeOp: oT.beforeOp,
        cameraScreen: Tz,
        showCameraFacing: Iz,
        onEventOverflow: oT.onEventOverflow,
        screenBandY: XT.k,
        replayEntities: ST.entityHooks,
        hasPackModel: oT.hasPackModel
      });
      return DT.attach(TT), pB.set(DT, ST), qi(DT.items, oT.audio),
        function(TT) {
          TT.setClientFreeCameraGrant("isDev", !1);
          const oT = oT => {
            TT.setClientFreeCameraGrant("hasDeveloperRank", oT.playerHasRank("developer"))
          };
          (0, WT.k)("userContextUpdated", oT)
        }(DT), GB || (GB = !0, (0, WT.k)("appManagerUpdated|openInGameMenuName", (TT => {
          !TT && (0, FT.l)().includes(FT.c) && (0, FT.n)(FT.c)
        }))), DT
    }

    function NB(TT) {
      try {
        TT.closeGame()
      } finally {
        var oT;
        null === (oT = pB.get(TT)) || void 0 === oT || oT.stop(), pB.delete(TT)
      }
    }
  },
  39606: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => iT
    });
    const iT = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  39624: (TT, oT, IT) => {
    function iT() {
      return IT(39631)
    }

    function zT() {
      return IT(39640)
    }

    function kT(TT) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(TT)
    }
    IT.d(oT, {
      c: () => kT,
      d: () => iT,
      g: () => zT
    })
  },
  39579: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => zT,
      h: () => WT
    });
    const iT = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function zT(TT) {
      if (TT instanceof WebAssembly.RuntimeError) return !0;
      const oT = TT instanceof Error ? TT.stack : void 0;
      return "string" === typeof oT && iT.test(oT)
    }
    const kT = 500;

    function WT(TT) {
      let oT = "[object Object]";
      try {
        oT = String(TT)
      } catch {}
      if ("[object Object]" !== oT) return oT;
      try {
        var IT, iT;
        return null !== (IT = null === (iT = JSON.stringify(TT)) || void 0 === iT ? void 0 : iT.slice(0, kT)) && void 0 !== IT ? IT : oT
      } catch {
        return oT
      }
    }
  },
  41394: (TT, oT, IT) => {
    var iT = {
      "./bedwars/bedwarsClient": [38205, 9],
      "./bridgeBattle/bridgeBattleClient": [38214, 10],
      "./buildAFactory2/buildAFactory2Client": [37468, 72, 71, 70, 215, 233, 11],
      "./classic/classicClient": [38223, 12],
      "./clutch/clutchClient": [38232, 13],
      "./containmentBreach/containmentBreachClient": [38239, 14],
      "./cooking/cookingClient": [38340, 15],
      "./defusal/defusalClient": [38347, 16],
      "./frontline/frontlineClient": [38356, 72, 71, 70, 17],
      "./goalRush/goalRushClient": [38361, 18],
      "./luckyBedwars/luckyBedwarsClient": [38364, 19],
      "./ninetyNineNights/ninetyNineNightsClient": [38371, 20],
      "./oneBlock/oneBlockClient": [38380, 21],
      "./plots/plotsClient": [38389, 231, 236, 22],
      "./pvpCiv/pvpCivClient": [38456, 23],
      "./skyIslands/skyIslandsClient": [38464, 24],
      "./skyblock/skyblockClient": [37498, 72, 215, 187, 25],
      "./tsunami/tsunamiClient": [38466, 26]
    };

    function zT(TT) {
      if (!IT.o(iT, TT)) return Promise.resolve().then((() => {
        var oT = new Error("Cannot find module '" + TT + "'");
        throw oT.code = "MODULE_NOT_FOUND", oT
      }));
      var oT = iT[TT],
        zT = oT[0];
      return Promise.all(oT.slice(1).map(IT.e)).then((() => IT(zT)))
    }
    zT.keys = () => Object.keys(iT), zT.id = 41394, TT.exports = zT
  },
  39631: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  39640: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);