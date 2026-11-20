export const id = 53;
export const ids = [53];
export const modules = {
  38399: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Xz,
      h: () => Wz
    });
    var Fz = sz(34);

    function Wz(zz) {
      return "refetchCode" === zz || "devDownloadJson" === zz || zz.startsWith("Plugin")
    }

    function Xz(zz, tz) {
      "refetchCode" !== zz ? "Plugin|MobAiPlugin|ShowPetUi" !== zz ? Promise.all([sz.e(105), sz.e(106), sz.e(101), sz.e(103), sz.e(210)]).then((() => sz(40856))).then((sz => {
        let {
          runClientGameMessage: Fz
        } = sz;
        Fz(zz, tz)
      })).catch((tz => {
        console.error(`Game message ${zz} failed`, tz)
      })) : Fz.o.Yg("showPetUi", tz) : Fz.o.Yg("refetchCode")
    }
  },
  41652: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Fz,
      h: () => Wz
    });
    const Fz = ["recording", "freecam", "keyframe"];

    function Wz() {
      const zz = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(zz[1]) << 32n | BigInt(zz[0])
    }
  },
  39905: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => oz
    });
    const Fz = 1 << 20,
      Wz = 1 << 21,
      Xz = 1024,
      Oz = 2048;

    function oz(zz, tz, sz) {
      const oz = zz + Fz,
        vz = tz + Xz,
        Uz = sz + Fz;
      return oz < 0 || oz >= Wz || Uz < 0 || Uz >= Wz || vz < 0 || vz >= Oz ? -1 : (oz * Wz + Uz) * Oz + vz
    }
  },
  39903: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Fz,
      f: () => Oz,
      j: () => Wz,
      k: () => Xz,
      o: () => Kz,
      q: () => Uz,
      u: () => vz,
      y: () => oz
    });
    sz(3135);
    sz(39905);

    function Fz(zz) {}

    function Wz(zz) {}

    function Xz(zz) {}

    function Oz(zz) {}

    function oz(zz) {}

    function vz(zz, tz, sz) {}

    function Uz(zz) {}

    function Kz(zz) {}
  },
  8755: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => oz,
      g: () => vz
    });
    var Fz = sz(30);
    const Wz = 24,
      Xz = "farNametags",
      Oz = 1e5;

    function oz() {
      var zz;
      return null === (zz = Fz.b.get("showDistantNametags")) || void 0 === zz || zz
    }

    function vz() {
      var zz;
      return null !== (zz = function() {
        const zz = new URLSearchParams(window.location.search).get(Xz),
          tz = null === zz || "" === zz ? NaN : Number(zz);
        return Number.isFinite(tz) && tz >= 0 ? Math.min(tz, Oz) : null
      }()) && void 0 !== zz ? zz : oz() ? 0 : Wz
    }
  },
  41646: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      blockIdOf: () => Mv.e,
      clearWasmCameraScreen: () => zW,
      creativeItemIds: () => FF.creativeItemIds,
      decodeMapSettings: () => Qv,
      drainTextRerasters: () => co.c,
      enchantmentPerksOf: () => FF.enchantmentPerksOf,
      endGameHost: () => Rv,
      followCursorAim: () => hv,
      followMenuPrefs: () => RW,
      loadAudio: () => nv,
      loadClientGame: () => lv,
      loadTextIcons: () => co.g,
      rasterText: () => To.b,
      readBoardToEdit: () => yv,
      setTextHost: () => co.l,
      setTextLocalPlayer: () => co.p,
      showInCreativeInvenOf: () => FF.showInCreativeInvenOf,
      startGameHost: () => Vv,
      startShellAnalytics: () => cv,
      startSkyFeed: () => tv,
      textChanged: () => co.u,
      warmText: () => To.f,
      wasmCameraScreen: () => EF
    });
    sz(36e3);
    var Fz = sz(30),
      Wz = sz(36238),
      Xz = sz(38558),
      Oz = sz(34),
      oz = sz(3060),
      vz = sz(36231),
      Uz = sz(1269),
      Kz = sz(574),
      uz = sz(37669),
      Nz = sz(4432),
      bz = sz(39773),
      wz = sz(39714);
    const Dz = wz.Hb / 4,
      gz = wz.q.PlaySound,
      Hz = wz.q.SoundReset,
      Bz = Nz.X.ReplayFailed,
      Pz = Nz.X.RecorderEvent;
    class rz {
      constructor(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.core = zz, this.memory = tz, this.audio = sz, this.serverIds = new Int32Array(256).fill(wz.dd), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.view = new DataView(new ArrayBuffer(wz.t.BYTES)), this.renderPtr = 0, this.au = 0, this.renderCapacity = 0, this.render = new Float32Array(0), this.visPtr = 0, this.vis = new Uint8Array(0), this.renderBuffer = null, this.eventsBuffer = null, this.eventsPtr = 0, this.eventsLen = 0, this.events = new DataView(new ArrayBuffer(0)), this.audioView = null, this.scratchPtr = -1, this.corruption = null, this.replay = null, this.queries = new wz.V(zz, (() => {
          this.scratchPtr = -1, this.ensureViews()
        }))
      }
      scratch() {
        return this.scratchPtr < 0 && (this.scratchPtr = this.core.qFz(), this.ensureViews()), this.scratchPtr
      }
      eventBytes(zz, tz) {
        const sz = this.eventView();
        return new Uint8Array(sz.buffer, sz.byteOffset + zz, tz)
      }
      get apiView() {
        return this.ensureViews(), this.view
      }
      ensureViews() {
        this.memory().buffer !== this.buffer && this.reView()
      }
      get localId() {
        return wz.t.localId(this.apiView, 0)
      }
      localDeaths() {
        return wz.t.localDeaths(this.apiView, 0)
      }
      rereadDirectory() {
        const zz = this.apiView,
          tz = wz.t.entRenderPtr(zz, 0),
          sz = wz.t.entVisPtr(zz, 0),
          Fz = wz.t.entCapacity(zz, 0);
        if (tz !== this.renderPtr || sz !== this.visPtr || Fz !== this.au || this.renderBuffer !== this.buffer) {
          this.renderPtr = tz, this.visPtr = sz, this.au = Fz, this.renderBuffer = this.buffer;
          const zz = this.memoryView(Float32Array, tz, Fz * Dz, "the render array"),
            Wz = this.memoryView(Uint8Array, sz, Fz, "the visibility array");
          this.renderCapacity = zz && Wz ? Fz : 0, this.render = zz && Wz ? zz : new Float32Array(0), this.vis = zz && Wz ? Wz : new Uint8Array(0)
        }
      }
      memoryView(zz, tz, sz, Fz) {
        try {
          return (0, bz.u)(zz, this.memory().buffer, tz, sz, Fz)
        } catch (Wz) {
          return this.keepCorruption(Wz), null
        }
      }
      memoryData(zz, tz, sz, Fz) {
        try {
          return (0, bz.i)(this.memory().buffer, zz, tz, sz, Fz)
        } catch (Wz) {
          return this.keepCorruption(Wz), null
        }
      }
      reportCorruption(zz) {
        this.keepCorruption(new bz.e(zz))
      }
      keepCorruption(zz) {
        if (!(zz instanceof bz.e)) throw zz;
        this.corruption ??= zz
      }
      throwCorruption() {
        if (this.corruption) throw this.corruption
      }
      walk(zz, tz, sz) {
        this.rereadDirectory(), this.throwCorruption();
        const {
          ptr: Fz,
          len: Wz
        } = zz;
        this.eventsPtr = Fz, this.eventsLen = Wz, this.eventsBuffer = null;
        const Xz = this.eventView();
        for (let Uz = 0; Uz < Wz;) {
          const zz = Xz.getUint32(Uz, !0),
            sz = 65535 & zz,
            Fz = zz >>> 16,
            Wz = Uz + Nz.V;
          if (sz === wz.q.EntitySpawned) {
            var Oz;
            if (Fz !== wz.Mb.BYTES) throw Iz(sz, Uz, Fz);
            const zz = wz.Mb.serverId(Xz, Wz);
            this.spawned(zz, wz.Mb.index(Xz, Wz), wz.Mb.kind(Xz, Wz)), null === (Oz = tz.entityAdded) || void 0 === Oz || Oz.call(tz, zz)
          } else if ((sz === wz.q.ChunkSlot || sz === wz.q.EntityInfoChanged) && !(0, wz.ue)(sz, Xz, Wz, Fz, tz)) throw Iz(sz, Uz, Fz);
          Uz = Wz + (0, Nz.ke)(Fz)
        }
        try {
          var oz;
          null === (oz = tz.afterPrescan) || void 0 === oz || oz.call(tz), this.throwCorruption(), !sz() && this.dispatch(zz, tz, sz) && (this.throwCorruption(), this.applyListener(), tz.afterWalk(zz.kind)), this.throwCorruption()
        } catch (vz) {
          throw vz instanceof bz.e && (this.corruption ??= vz), vz
        } finally {
          sz() || null !== this.corruption || this.applyDespawns(Wz, tz)
        }
      }
      applyDespawns(zz, tz) {
        const sz = this.eventView();
        for (let Wz = 0; Wz < zz;) {
          const zz = sz.getUint32(Wz, !0),
            Xz = Wz + Nz.V;
          if ((65535 & zz) === wz.q.EntityDespawned && zz >>> 16 === wz.Mb.BYTES) {
            const zz = wz.Mb.serverId(sz, Xz);
            var Fz;
            if (this.despawned(zz, wz.Mb.index(sz, Xz))) null === (Fz = tz.entityRemoved) || void 0 === Fz || Fz.call(tz, zz)
          }
          Wz = Xz + (0, Nz.ke)(zz >>> 16)
        }
        this.rereadDirectory()
      }
      dispatch(zz, tz, sz) {
        const {
          len: Fz,
          net: Wz,
          netOffsets: Xz
        } = zz;
        let Oz = this.eventView(),
          oz = 0;
        for (let xz = 0; xz < Fz;) {
          const zz = Oz.getUint32(xz, !0),
            Fz = 65535 & zz,
            mz = zz >>> 16,
            Cz = xz + Nz.V;
          let ez = !1;
          if (oz < Wz.length && Xz[oz] === xz) tz.netEvent(Wz[oz]), oz++, ez = !0;
          else if (Fz === Nz.X.LocalPlayerBound) {
            var vz;
            if (mz !== Nz.vb) throw Iz(Fz, xz, mz);
            null === (vz = tz.localPlayerBound) || void 0 === vz || vz.call(tz, Oz.getInt32(Cz, !0)), ez = !0
          } else if (Fz === Nz.X.LocalHurt) {
            var Uz;
            if (mz !== Nz.ub) throw Iz(Fz, xz, mz);
            null === (Uz = tz.localHurt) || void 0 === Uz || Uz.call(tz, Oz.getInt32(Cz, !0), Oz.getFloat32(Cz + 4, !0), Oz.getUint32(Cz + 8, !0)), ez = !0
          } else if (Fz === Nz.X.AttackHit) {
            var Kz;
            if (mz !== Nz.d) throw Iz(Fz, xz, mz);
            const zz = Oz.getFloat32(Cz, !0),
              sz = Oz.getFloat32(Cz + 4, !0),
              Wz = Oz.getFloat32(Cz + 8, !0),
              Xz = Oz.getUint32(Cz + 12, !0);
            null === (Kz = tz.attackHit) || void 0 === Kz || Kz.call(tz, zz, sz, Wz, 0 !== (Xz & Nz.l.Crit), 0 !== (Xz & Nz.l.HitSelf))
          } else if (Fz === Nz.X.PhysicsType) {
            var uz;
            if (mz !== Nz.Ob) throw Iz(Fz, xz, mz);
            null === (uz = tz.physicsType) || void 0 === uz || uz.call(tz, Oz.getUint32(Cz, !0), Oz.getInt32(Cz + 4, !0)), ez = !0
          } else if (Fz === Nz.X.VehicleEffect) {
            var bz;
            const zz = Jz(Oz, Cz, mz);
            if (null === zz) throw Iz(Fz, xz, mz);
            null === (bz = tz.vehicleEffect) || void 0 === bz || bz.call(tz, zz.op, zz.name, zz.icon, zz.level, zz.durationMs), ez = !0
          } else if (Fz === Nz.X.ZoomChanged) {
            var Dz;
            if (mz !== Nz.Ud) throw Iz(Fz, xz, mz);
            null === (Dz = tz.zoomChanged) || void 0 === Dz || Dz.call(tz, Oz.getFloat32(Cz, !0), Oz.getUint8(Cz + 4)), ez = !0
          } else if (Fz === Nz.X.ZoomDisabled) {
            var rz;
            if (0 !== mz) throw Iz(Fz, xz, mz);
            null === (rz = tz.zoomDisabled) || void 0 === rz || rz.call(tz), ez = !0
          } else if (Fz === Nz.X.GameCamera) {
            var Yz;
            null === (Yz = tz.gameCamera) || void 0 === Yz || Yz.call(tz, new Uint8Array(Oz.buffer, Oz.byteOffset + Cz, mz).slice()), ez = !0
          } else if (Fz === wz.q.ChunkSlot || Fz === wz.q.EntityInfoChanged);
          else if (Fz >= gz && Fz <= Hz) {
            if (this.audio && !this.audio.onAudioEvent(Fz, Oz, Cz, mz)) throw Iz(Fz, xz, mz)
          } else if (Fz >= Bz && Fz <= Pz) {
            if (this.replay) {
              if (!this.replay.onReplayEvent(Fz, Oz, Cz, mz)) throw Iz(Fz, xz, mz);
              ez = !0
            }
          } else if (Fz >= wz.qd && Fz <= wz.td && Fz !== Nz.X.EnvLighting) {
            if (!(0, wz.ue)(Fz, Oz, Cz, mz, tz)) throw Iz(Fz, xz, mz);
            ez = !0
          }
          if (ez) {
            if (sz()) return !1;
            Oz = this.eventView()
          }
          xz = Cz + (0, Nz.ke)(mz)
        }
        return !sz()
      }
      applyListener() {
        var zz;
        if (!this.audio) return;
        const tz = wz.t.audioViewPtr(this.apiView, 0),
          sz = this.memory().buffer;
        let Fz = this.audioView;
        (null === (zz = Fz) || void 0 === zz ? void 0 : zz.buffer) === sz && Fz.byteOffset === tz || (Fz = (0, bz.i)(sz, tz, wz.w.BYTES, 8, "the audio view"), this.audioView = Fz), Fz && this.audio.applyListener(Fz)
      }
      indexOf(zz) {
        return this.indexById.get("number" === typeof zz ? zz : +zz)
      }
      isLocal(zz) {
        return zz !== wz.dd && zz === wz.t.localId(this.apiView, 0)
      }
      yB(zz) {
        const tz = [0, 0, 0];
        return this.readPosition("number" === typeof zz ? zz : +zz, tz) ? tz : null
      }
      readPosition(zz, tz) {
        const sz = this.apiView;
        if (void 0 !== this.indexById.get(zz) && this.isLocal(zz)) {
          for (let zz = 0; zz < 3; zz++) tz[zz] = wz.t.localPos(sz, 0, zz);
          return !0
        }
        return this.readDrawnPosition(zz, tz)
      }
      readDrawnPosition(zz, tz) {
        const sz = this.apiView,
          Fz = this.indexById.get(zz);
        if (void 0 === Fz || Fz >= this.renderCapacity) return tz[0] = tz[1] = tz[2] = NaN, !1;
        const Wz = Fz * Dz;
        for (let Xz = 0; Xz < 3; Xz++) tz[Xz] = this.render[Wz + Xz] + wz.t.origin(sz, 0, Xz);
        return !0
      }
      checkValid(zz) {
        return void 0 !== this.indexOf(zz)
      }
      isAlive(zz) {
        const tz = this.indexOf(zz);
        if (void 0 === tz) return null;
        if (this.ensureViews(), tz >= this.renderCapacity) return null;
        const sz = this.vis[tz];
        return 0 === sz ? null : 0 !== (sz & wz.se.Alive)
      }
      getEntityType(zz) {
        const tz = this.indexOf(zz);
        return void 0 === tz ? this.isLocal("number" === typeof zz ? zz : +zz) ? "Player" : null : xz(this.kinds[tz])
      }
      spawned(zz, tz, sz) {
        if (tz >= 1048576) throw new bz.e(`entity ${zz} spawned at index ${tz}`);
        this.ensureIndex(tz), this.serverIds[tz] === zz && null !== this.idStr[tz] || (this.idStr[tz] = String(zz)), this.serverIds[tz] = zz, this.kinds[tz] = sz, this.indexById.set(zz, tz)
      }
      despawned(zz, tz) {
        let sz = !1;
        return this.indexById.get(zz) === tz && (this.indexById.delete(zz), sz = !0), tz < this.serverIds.length && this.serverIds[tz] === zz && (this.serverIds[tz] = wz.dd, this.kinds[tz] = 0, this.idStr[tz] = null), sz
      }
      ensureIndex(zz) {
        const tz = this.serverIds.length;
        if (zz < tz) return;
        let sz = 2 * tz;
        for (; sz <= zz;) sz *= 2;
        const Fz = new Int32Array(sz).fill(wz.dd);
        Fz.set(this.serverIds), this.serverIds = Fz;
        const Wz = new Uint16Array(sz);
        Wz.set(this.kinds), this.kinds = Wz;
        for (let Xz = tz; Xz < sz; Xz++) this.idStr.push(null)
      }
      eventView() {
        const zz = this.memory().buffer;
        return zz !== this.eventsBuffer && (this.eventsBuffer = zz, this.events = new DataView(zz, this.eventsPtr, this.eventsLen)), this.events
      }
      reView() {
        const zz = this.memory().buffer;
        this.buffer = zz, this.viewPtr < 0 && (this.viewPtr = this.core.SFz()), this.view = new DataView(zz, this.viewPtr, wz.t.BYTES), this.rereadDirectory()
      }
    }

    function Yz(zz) {
      return zz >>> wz.e === wz.r.Item
    }

    function xz(zz) {
      var tz, sz;
      const Fz = zz & wz.f;
      switch (zz >>> wz.e) {
        case wz.r.Lifeform:
          return null !== (tz = Kz.k[Fz]) && void 0 !== tz ? tz : null;
        case wz.r.Throwable:
          return null !== (sz = uz.k[Fz]) && void 0 !== sz ? sz : null;
        case wz.r.Mesh:
          return "Mesh";
        case wz.r.Audio:
          return "AudioEntity";
        case wz.r.Item:
          return "Item";
        default:
          return null
      }
    }
    const mz = new TextDecoder;

    function Jz(zz, tz, sz) {
      if (sz < Nz.vd.HEAD_BYTES) return null;
      const Fz = zz.getUint32(tz, !0),
        Wz = zz.getUint32(tz + 20, !0),
        Xz = zz.getUint32(tz + 24, !0),
        Oz = Nz.vd.HEAD_BYTES + (0, Nz.ke)(Wz);
      if (Fz !== Nz.vd.UPDATE && Fz !== Nz.vd.REMOVE || Wz > sz || Oz + Xz > sz) return null;
      const oz = (sz, Fz) => mz.decode(new Uint8Array(zz.buffer, zz.byteOffset + tz + sz, Fz)),
        vz = zz.getFloat64(tz + 12, !0);
      return {
        op: Fz,
        level: zz.getFloat64(tz + 4, !0),
        durationMs: Number.isNaN(vz) ? null : vz,
        name: oz(Nz.vd.HEAD_BYTES, Wz),
        icon: oz(Oz, Xz)
      }
    }

    function Iz(zz, tz, sz) {
      return new bz.e(`event ${zz} at ${tz} of ${sz} bytes`)
    }
    var Cz = sz(321),
      ez = sz(1213),
      Zz = sz(38399),
      Gz = sz(1875),
      Tz = sz(39818),
      cz = sz(1824),
      jz = sz(38569),
      Az = sz(38594),
      yz = sz(38580),
      Mz = sz(39754),
      dz = sz(2277),
      hz = sz(38567),
      Qz = sz(38591);
    const kz = Math.max(wz.tb.BYTES, wz.nb.BYTES, wz.qb.BYTES);

    function iz(zz) {
      if (!(0, Qz.g)(zz)) return null;
      const tz = Number(zz);
      return (0 | tz) === tz ? tz : null
    }
    class Lz {
      constructor(zz) {
        this.api = zz, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, hz.h)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.GX = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], this.entityHeading = 0, this.localId = wz.dd, this.localName = String(wz.dd), this.scratch = null
      }
      readView() {
        this.defaultPoseRead = !1, this.GX = null;
        const zz = this.api.queries.directorView() >= wz.tb.BYTES ? this.scratchView() : null;
        null !== zz && (this.defaultFov = (0, cz.u)(wz.tb.fov(zz, 0)), this.baseFov = (0, cz.u)(wz.tb.baseFov(zz, 0)), this.aspect = wz.tb.aspect(zz, 0), this.bodyHeading = wz.tb.bodyHeading(zz, 0))
      }
      getViewHeading() {
        return this.viewHeading
      }
      setViewHeading(zz) {
        this.viewHeading = zz
      }
      get localPlayerId() {
        const zz = wz.t.localId(this.api.apiView, 0);
        return zz !== this.localId && (this.localId = zz, this.localName = String(zz)), this.localName
      }
      getEntityPosition(zz) {
        return this.readEntity(zz) ? this.entityFeet : null
      }
      getEntityAimPoint(zz) {
        return this.readEntity(zz) ? this.entityAim : null
      }
      getEntityHeading(zz) {
        const tz = iz(zz);
        if (null === tz) return null;
        const sz = wz.t.localId(this.api.apiView, 0);
        return tz === sz && sz !== wz.dd ? this.viewHeading : this.readEntity(zz) ? this.entityHeading : null
      }
      raycastTerrain(zz, tz, sz) {
        const Fz = this.api.queries.cameraSweep(zz[0], zz[1], zz[2], tz[0], tz[1], tz[2], sz);
        return Fz < sz - 1e-6 ? Fz : null
      }
      getDefaultPose() {
        if (this.defaultPoseRead) return this.defaultPose;
        this.defaultPoseRead = !0;
        const zz = this.defaultPose;
        zz.fov = this.defaultFov;
        const tz = this.api.queries.directorDefaultPose() >= wz.nb.BYTES ? this.scratchView() : null;
        if (null === tz) return zz;
        for (let sz = 0; sz < 3; sz++) zz.position[sz] = wz.nb.eye(tz, 0, sz);
        return zz.heading = wz.nb.heading(tz, 0), zz.pitch = wz.nb.pitch(tz, 0), zz
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
      readEntity(zz) {
        const tz = iz(zz);
        if (null === tz) return !1;
        if (tz === this.GX) return this.entityLive;
        this.GX = tz;
        const sz = this.api.queries.directorEntity(tz) >= wz.qb.BYTES ? this.scratchView() : null;
        if (this.entityLive = null !== sz, null === sz) return !1;
        for (let Fz = 0; Fz < 3; Fz++) this.entityFeet[Fz] = wz.qb.feet(sz, 0, Fz), this.entityAim[Fz] = this.entityFeet[Fz];
        return this.entityAim[1] += wz.qb.eyeHeight(sz, 0), this.entityHeading = wz.qb.heading(sz, 0), !0
      }
      scratchView() {
        const zz = this.api.scratch(),
          tz = this.api.memory().buffer,
          sz = this.scratch;
        return null !== sz && sz.buffer === tz && sz.byteOffset === zz ? sz : (this.scratch = this.api.memoryData(zz, kz, 8, "the director's record"), this.scratch)
      }
    }
    const lz = {
        mode: "default"
      },
      nz = {
        show: () => {},
        clear: () => {}
      };

    function az() {
      return "undefined" !== typeof document && "hidden" === document.visibilityState
    }
    class qz {
      constructor(zz) {
        this.options = zz, this.PN = void 0, this.director = void 0, this.latest = lz, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
          mJ: 0,
          eJ: 0
        }, this.pointedAt = {
          heading: 0,
          pitch: 0
        }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastCallMs = 0, this.answeredPose = !1, this.mo = new Int32Array(3 * wz.Xd), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * wz.Xd), this.PN = new Lz(zz.api), this.director = new yz.d(this.PN)
      }
      settingsChanged(zz) {
        let tz = lz;
        if (zz.length > 0) try {
          tz = (0, Mz.c)(zz)
        } catch {}
        this.latest = tz, this.pending = tz
      }
      call(zz, tz, sz, Fz, Wz, Xz) {
        var Oz, oz;
        let vz;
        this.holding = !1;
        try {
          vz = this.answer(zz, tz, sz, Fz, Wz, Xz)
        } catch (Nz) {
          var Uz, Kz;
          throw this.answeredPose = !1, null === (Uz = (Kz = this.options).showFacing) || void 0 === Uz || Uz.call(Kz, null), Nz
        }
        const uz = this.answeredPose && 0 === (Fz & wz.sb.Held);
        return this.answeredPose = vz !== wz.kb.None, this.holding = this.answeredPose && !uz, null === (Oz = (oz = this.options).showFacing) || void 0 === Oz || Oz.call(oz, this.holding ? this.facing : null), vz
      }
      holdsView() {
        return this.holding
      }
      answer(zz, tz, sz, Fz, Wz, Xz) {
        this.calledThisFrame = !0, this.engaged = !0, this.lastCallMs = this.now();
        const {
          PN: Oz
        } = this;
        Oz.readView();
        if (0 !== (Fz & wz.sb.Held) || Oz.setViewHeading((0, jz.s)(Oz.bodyHeading)), void 0 !== this.pending) {
          const zz = this.pending;
          this.pending = void 0, this.director.setSettings(zz), this.syncShownSettings()
        }
        this.readLook((0, dz.f)(tz), (0, dz.f)(sz), Fz, (0, dz.f)(Wz), (0, dz.f)(Xz));
        const oz = this.director.update(zz / 1e3, this.look);
        if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !oz) return wz.kb.None;
        const [vz, Uz, Kz] = oz.position;
        if (0 === this.options.api.queries.directorPose(vz, Uz, Kz, (0, jz.s)(oz.heading), (0, jz.h)(oz.pitch), (0, cz.h)(oz.fov))) return wz.kb.None;
        if ("default" === this.director.getSettings().mode) return wz.kb.Pose;
        switch (this.facing) {
          case "camera":
            return wz.kb.FaceCamera;
          case "cursor":
            return wz.kb.FaceCursor;
          default:
            return wz.kb.FaceMovement
        }
      }
      afterFrame(zz) {
        zz ? (this.calledThisFrame || (this.holding = !1, this.engaged && this.idle()), this.calledThisFrame = !1) : this.centresLen > 0 && this.hidden() && this.now() - this.lastCallMs > 1e3 && this.setCentres(0), this.centresUnsent && this.sendCentres()
      }
      reset() {
        this.latest = lz, this.idle()
      }
      restart() {
        const zz = this.holding;
        this.idle(), this.holding = zz
      }
      idle() {
        var zz, tz;
        this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new yz.d(this.PN), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, null === (zz = (tz = this.options).showFacing) || void 0 === zz || zz.call(tz, null), this.setCentres(0)
      }
      syncShownSettings() {
        const zz = this.director.getSettings();
        if (zz === this.shownSettings) return;
        this.shownSettings = zz;
        const tz = (0, Az.g)(zz);
        this.facing = tz.facing, this.mouseTurns = tz.mouseTurns
      }
      readLook(zz, tz, sz, Fz, Wz) {
        const Xz = this.look,
          Oz = 0 !== (sz & wz.sb.LookPointed);
        if (null === this.mouseTurns && !Oz) return Xz.mJ = 0, Xz.eJ = 0, void(Xz.pointedAt = void 0);
        let oz;
        Oz && (this.pointedAt.heading = Fz, this.pointedAt.pitch = Wz, oz = this.pointedAt);
        const {
          PN: vz
        } = this;
        vz.setViewHeading((0, Az.c)(vz.getViewHeading(), zz, tz, oz, "look" === this.mouseTurns, Xz))
      }
      writeCentres(zz) {
        const tz = this.next,
          sz = Math.min(zz.length, wz.Xd);
        for (let Fz = 0; Fz < sz; Fz++)
          for (let sz = 0; sz < 3; sz++) tz[3 * Fz + sz] = Math.floor(zz[Fz][sz] / wz.H);
        this.setCentres(sz)
      }
      setCentres(zz) {
        const {
          mo: tz,
          next: sz
        } = this;
        let Fz = zz === this.centresLen;
        for (let Wz = 0; Fz && Wz < 3 * zz; Wz++) Fz = tz[Wz] === sz[Wz];
        Fz || (tz.fill(0), tz.set(sz.subarray(0, 3 * zz)), this.centresLen = zz, this.centresUnsent = !0, this.sendCentres())
      }
      sendCentres() {
        const zz = this.options.cmd();
        null !== zz && (0, wz.Hf)(zz, 0, this.mo, this.centresLen) && (this.centresUnsent = !1)
      }
      screen() {
        var zz, tz, sz;
        return null !== (zz = null === (tz = (sz = this.options).screen) || void 0 === tz ? void 0 : tz.call(sz)) && void 0 !== zz ? zz : nz
      }
      hidden() {
        var zz;
        return (null !== (zz = this.options.isPageHidden) && void 0 !== zz ? zz : az)()
      }
      now() {
        var zz, tz, sz;
        return null !== (zz = null === (tz = (sz = this.options).now) || void 0 === tz ? void 0 : tz.call(sz)) && void 0 !== zz ? zz : performance.now()
      }
    }
    var Sz = sz(39905);
    const Vz = wz.H * wz.H * wz.H,
      Rz = Math.log2(wz.H),
      pz = wz.H - 1,
      fz = wz.O.BYTES / 4,
      Ez = new Uint16Array(Vz);

    function zt(zz, tz, sz) {
      return zz * wz.H * wz.H + tz * wz.H + sz
    }
    class tt {
      constructor(zz) {
        this.chunk = zz
      }
      get data() {
        return this.chunk.gameVoxels()
      }
      index(zz, tz, sz) {
        return zt(zz, tz, sz)
      }
    }
    class st {
      constructor() {
        this.ids = new Map, this.cleared = new Set, this.layers = 0, this.patched = null, this.from = null
      }
    }
    class Ft {
      constructor(zz, tz, sz, Fz) {
        this.table = zz, this.slot = tz, this.generation = sz, this.epoch = Fz, this.RN = new tt(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = Ez, this.dataPtr = 0, this.dataBuffer = null, this.dataStamp = -1, this.version = 0, this.layers = null, this.layersVersion = -1, this.layersPtr = -1, this.staleLayers = 0
      }
      get PD() {
        return this.voxelData(), this.version === this.shownCore && this.writeCount === this.shownWrites || (this.shownCore = this.version, this.shownWrites = this.writeCount, this.shownVersion = this.table.nextVersion()), this.shownVersion
      }
      get sw() {
        const zz = this.gameVoxels(),
          tz = this.layers ??= new Uint16Array(wz.H);
        this.layersVersion === this.version && this.layersPtr === this.dataPtr || (this.layersVersion = this.version, this.layersPtr = this.dataPtr, this.staleLayers = -1);
        for (let sz = 0; 0 !== this.staleLayers; sz++) {
          const Fz = 1 << sz;
          0 !== (this.staleLayers & Fz) && (this.staleLayers &= ~Fz, tz[sz] = Wt(zz, sz))
        }
        return tz
      }
      voxelData() {
        return this.dataStamp === this.table.stamp && 0 !== this.data.length ? this.data : this.reread()
      }
      gameVoxels() {
        const zz = this.voxelData(),
          tz = this.writes;
        if (null === tz || 0 === tz.ids.size) return zz;
        if (tz.from !== zz) {
          const sz = tz.patched ??= new Uint16Array(Vz);
          sz.set(zz);
          for (const [zz, Fz] of tz.ids) sz[zz] = Fz;
          tz.from = zz
        }
        return tz.patched
      }
      written(zz) {
        var tz;
        return null === (tz = this.writes) || void 0 === tz ? void 0 : tz.ids.get(zz)
      }
      hasWrites() {
        return null !== this.writes && 0 !== this.writes.ids.size
      }
      write(zz, tz, sz) {
        const Fz = this.writes ??= new st;
        Fz.ids.set(zz, tz), sz && Fz.cleared.add(zz), null !== Fz.from && (Fz.patched[zz] = tz);
        const Wz = 1 << (zz >> Rz & pz);
        Fz.layers |= Wz, this.staleLayers |= Wz, this.writeCount++
      }
      clearWrites() {
        const zz = this.writes;
        null !== zz && (this.staleLayers |= zz.layers, zz.ids.clear(), zz.cleared.clear(), zz.layers = 0, zz.from = null)
      }
      dataCleared(zz) {
        var tz;
        return !0 === (null === (tz = this.writes) || void 0 === tz ? void 0 : tz.cleared.has(zz))
      }
      reread() {
        this.dataStamp = this.table.stamp;
        const zz = this.table.slotWords(),
          tz = this.slot * fz;
        if (this.epoch !== this.table.epoch || tz + fz > zz.length || 0 === zz[tz + 3] || zz[tz + 2] !== this.generation) return this.data = Ez, this.dataPtr = 0, Ez;
        this.version = zz[tz + 1];
        const sz = zz[tz + 0],
          Fz = zz.buffer;
        return sz === this.dataPtr && Fz === this.dataBuffer || (this.dataPtr = sz, this.dataBuffer = Fz, this.data = this.table.voxelsAt(Fz, sz)), this.data
      }
    }

    function Wt(zz, tz) {
      const sz = zz[tz * wz.H];
      for (let Fz = 0; Fz < wz.H; Fz++) {
        const Wz = zt(Fz, tz, 0);
        for (let tz = 0; tz < wz.H; tz++)
          if (zz[Wz + tz] !== sz) return 65535
      }
      return sz
    }
    const Xt = new Uint32Array(0);

    function Ot(zz, tz, sz) {
      return zt(zz & pz, tz & pz, sz & pz)
    }
    class ot {
      constructor(zz, tz) {
        this.memory = zz, this.apiView = tz, this.chunks = new Map, this.written = [], this.lastKey = -1, this.lastChunk = void 0, this.slotsPtr = 0, this.slotsLen = 0, this.slotsBuffer = null, this.slots = Xt, this.walkPtr = 0, this.walkLen = 0, this.walkBuffer = null, this.walk = Xt, this.epoch = 0, this.stamp = 0, this.versions = 0, this.corruption = null
      }
      apply(zz, tz, sz, Fz, Wz, Xz) {
        if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, Xz === wz.R.ResetAll) return this.chunks.clear(), void this.epoch++;
        if (Xz !== wz.R.Stored && Xz !== wz.R.Unloaded) throw new bz.e(`ChunkSlot flags ${Xz}`);
        const Oz = (0, Sz.e)(zz, tz, sz);
        if (Oz < 0) return;
        if (Xz === wz.R.Unloaded) return void this.chunks.delete(Oz);
        const oz = this.chunks.get(Oz);
        (null === oz || void 0 === oz ? void 0 : oz.slot) === Fz && oz.generation === Wz || this.chunks.set(Oz, new Ft(this, Fz, Wz, this.epoch))
      }
      touch() {
        this.stamp++, this.clearOverlay(), this.viewWalkThrough()
      }
      refresh() {
        if (this.stamp++, this.corruption) throw this.corruption;
        const zz = this.apiView(),
          tz = wz.t.chunkSlotsPtr(zz, 0),
          sz = wz.t.chunkSlotsLen(zz, 0);
        tz === this.slotsPtr && sz === this.slotsLen || (this.slotsPtr = tz, this.slotsLen = sz, this.slotsBuffer = null, this.slotWords()), this.viewWalkThrough(), this.clearOverlay()
      }
      viewWalkThrough() {
        const zz = this.apiView(),
          tz = wz.t.walkThroughPtr(zz, 0),
          sz = wz.t.walkThroughLen(zz, 0);
        tz === this.walkPtr && sz === this.walkLen || (this.walkPtr = tz, this.walkLen = sz, this.walkBuffer = null, this.walkWords())
      }
      clearOverlay() {
        for (const zz of this.written) zz.clearWrites();
        this.written.length = 0
      }
      nextVersion() {
        return ++this.versions
      }
      slotWords() {
        const zz = this.memory().buffer;
        var tz;
        zz !== this.slotsBuffer && (this.slotsBuffer = zz, this.slots = null !== (tz = (0, bz.u)(Uint32Array, zz, this.slotsPtr, this.slotsLen * fz, "the chunk directory")) && void 0 !== tz ? tz : Xt);
        return this.slots
      }
      voxelsAt(zz, tz) {
        try {
          var sz;
          return null !== (sz = (0, bz.u)(Uint16Array, zz, tz, Vz, "a chunk's voxels")) && void 0 !== sz ? sz : Ez
        } catch (Fz) {
          if (!(Fz instanceof bz.e)) throw Fz;
          return this.corruption ??= Fz, Ez
        }
      }
      chunk(zz, tz, sz) {
        var Fz;
        return null !== (Fz = this.chunks.get((0, Sz.e)(zz, tz, sz))) && void 0 !== Fz ? Fz : null
      }
      isLoaded(zz, tz, sz) {
        return void 0 !== this.chunkAt(Math.floor(zz), Math.floor(tz), Math.floor(sz))
      }
      yK(zz, tz, sz) {
        var Fz;
        const Wz = Math.floor(zz),
          Xz = Math.floor(tz),
          Oz = Math.floor(sz),
          oz = this.chunkAt(Wz, Xz, Oz);
        if (!oz) return 0;
        const vz = Ot(Wz, Xz, Oz);
        return null !== (Fz = oz.written(vz)) && void 0 !== Fz ? Fz : oz.voxelData()[vz]
      }
      setOverlay(zz, tz, sz, Fz) {
        let Wz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Xz = this.chunkAt(zz, tz, sz);
        return !!Xz && (Xz.hasWrites() || this.written.push(Xz), Xz.write(Ot(zz, tz, sz), Fz, Wz), !0)
      }
      version(zz, tz, sz) {
        var Fz, Wz;
        return null !== (Fz = null === (Wz = this.chunks.get((0, Sz.e)(zz, tz, sz))) || void 0 === Wz ? void 0 : Wz.PD) && void 0 !== Fz ? Fz : null
      }
      scan(zz, tz, sz, Fz, Wz, Xz, Oz, oz) {
        const vz = wz.H;
        let Uz = 0;
        for (let Kz = Math.floor(tz / vz); Kz * vz < Wz; Kz++) {
          const uz = Kz * vz,
            Nz = Math.min(Wz - uz, vz);
          for (let Wz = Math.floor(zz / vz); Wz * vz < Fz; Wz++) {
            const bz = Wz * vz,
              wz = Math.min(Fz - bz, vz);
            for (let Fz = Math.floor(sz / vz); Fz * vz < Xz; Fz++) {
              const Dz = this.chunks.get((0, Sz.e)(Wz, Kz, Fz));
              if (!Dz) continue;
              const gz = Fz * vz,
                Hz = Math.max(sz - gz, 0),
                Bz = Math.min(Xz - gz, vz),
                Pz = Dz.sw,
                rz = Dz.gameVoxels();
              for (let sz = Math.max(tz - uz, 0); sz < Nz; sz++) {
                const tz = Pz[sz];
                if (65535 === tz || 0 !== Oz[tz]) {
                  Uz++;
                  for (let tz = Math.max(zz - bz, 0); tz < wz; tz++) {
                    const zz = zt(tz, sz, 0);
                    for (let Fz = Hz; Fz < Bz; Fz++) {
                      const Wz = rz[zz + Fz];
                      0 !== Oz[Wz] && oz.push(bz + tz, uz + sz, gz + Fz, Wz)
                    }
                  }
                }
              }
            }
          }
        }
        return Uz
      }
      dataCleared(zz, tz, sz) {
        var Fz;
        const Wz = Math.floor(zz),
          Xz = Math.floor(tz),
          Oz = Math.floor(sz);
        return !0 === (null === (Fz = this.chunkAt(Wz, Xz, Oz)) || void 0 === Fz ? void 0 : Fz.dataCleared(Ot(Wz, Xz, Oz)))
      }
      isWalkThrough(zz) {
        if (!Number.isInteger(zz) || zz < 0 || zz > 65535) return !1;
        const tz = this.walkWords(),
          sz = zz >>> 5;
        return sz < tz.length && 1 === (tz[sz] >>> (31 & zz) & 1)
      }
      walkWords() {
        const zz = this.memory().buffer;
        var tz;
        zz !== this.walkBuffer && (this.walkBuffer = zz, this.walk = null !== (tz = (0, bz.u)(Uint32Array, zz, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== tz ? tz : Xt);
        return this.walk
      }
      chunkAt(zz, tz, sz) {
        if ((0 | zz) !== zz || (0 | tz) !== tz || (0 | sz) !== sz) return;
        const Fz = (0, Sz.e)(zz >> Rz, tz >> Rz, sz >> Rz);
        return Fz !== this.lastKey && (this.lastKey = Fz, this.lastChunk = this.chunks.get(Fz)), this.lastChunk
      }
    }
    var vt = sz(37927),
      Ut = sz(37237),
      Kt = sz(36210),
      ut = sz(36103),
      Nt = sz(8779),
      bt = sz(38532),
      wt = sz(201);
    const Dt = ["ambient", "cars", "crowd", "customGame_horror", "dig", "fire", "fishing", "gameStart", "gunMisc", "gunPistol", "gunRifle", "gunSemiAutomatic", "gunShotgun", "gunSubmachineGun", "mob", "note", "phoneAndMoney", "police", "random", "rpg", "step", "survivalFactory", "town"],
      gt = [
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
      Ht = gt.map((zz => {
        let [tz] = zz;
        return tz
      })),
      Bt = Uint8Array.from(gt, (zz => {
        let [, tz] = zz;
        return tz
      })),
      Pt = {
        semi_automatic: 11,
        submachine: 13,
        rifle: 10,
        pistol: 9,
        shotgun: 12
      },
      rt = 8;
    var Yt = sz(36204),
      xt = sz(263);
    const mt = 2 ** Dt.length - 1;
    class Jt {
      constructor(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : xt.c;
        this.sheet = zz, this.onError = tz, this.idle = sz, this.queue = [], this.asked = 0, this.cancelIdle = null, this.gen = 0, this.onIdle = zz => {
          this.cancelIdle = null;
          try {
            if (zz.timeRemaining() >= 1) {
              let zz = this.queue.shift();
              for (; void 0 !== zz && !this.load(zz);) zz = this.queue.shift()
            }
          } catch (tz) {
            this.onError(tz)
          } finally {
            this.schedule()
          }
        }
      }
      preload(zz) {
        const tz = zz & mt & ~this.asked;
        if (0 !== tz) {
          this.asked |= tz;
          for (let zz = 0; zz < Dt.length; zz++) tz & 1 << zz && this.queue.push(zz);
          this.schedule()
        }
      }
      cancel() {
        var zz;
        this.queue.length = 0, this.asked = 0, this.gen++, null === (zz = this.cancelIdle) || void 0 === zz || zz.call(this), this.cancelIdle = null
      }
      schedule() {
        null === this.cancelIdle && this.queue.length > 0 && (this.cancelIdle = this.idle(this.onIdle))
      }
      load(zz) {
        const tz = this.sheet(zz, !1),
          sz = this.sheet(zz, !0),
          [Fz, Wz] = "unloaded" === tz.state() && "unloaded" !== sz.state() ? [sz, tz] : [tz, sz],
          Xz = this.gen,
          Oz = () => {
            try {
              Xz === this.gen && "unloaded" === Wz.state() && Wz.load()
            } catch (zz) {
              this.onError(zz)
            }
          },
          oz = Fz.state();
        return "unloaded" === oz ? (Fz.once("load", Oz), Fz.load(), !0) : "unloaded" === Wz.state() && ("loading" === oz ? (Fz.once("load", Oz), !1) : (Wz.load(), !0))
      }
    }
    var It = sz(40005);
    const Ct = {
        coneInnerAngle: 360,
        coneOuterAngle: 360,
        coneOuterGain: 0,
        distanceModel: "inverse",
        maxDistance: 1e3,
        panningModel: "HRTF",
        rolloffFactor: 1
      },
      et = wt.d.jH * wt.d.playerEyeToHeightRatio,
      Zt = [0, 0, -1, 0, 1, 0],
      Gt = Dt.indexOf("note");

    function Tt(zz) {
      return zz >= 0 ? Math.min(1, zz) : 0
    }

    function ct(zz) {
      var tz;
      let sz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
      const Fz = function(zz) {
        let tz = 0,
          sz = Ht.length;
        for (; tz < sz;) {
          const Fz = tz + sz >>> 1;
          Ht[Fz] < zz ? tz = Fz + 1 : sz = Fz
        }
        return tz
      }(zz);
      if ("" === zz || null === (tz = Ht[Fz]) || void 0 === tz || !tz.startsWith(zz)) return -1;
      if (Ht[Fz] === zz) return Fz;
      let Wz = Fz + 1;
      for (; Wz < Ht.length && Ht[Wz].startsWith(zz);) Wz++;
      return Fz + Math.floor(sz() * (Wz - Fz))
    }
    class jt {
      constructor(zz, tz, sz, Fz, Wz) {
        this.group = zz, this.loudness = tz, this.startMs = sz, this.howl = Fz, this.host = Wz, this.id = 0, this.direct = !1
      }
      getDurationMs() {
        const zz = this.host.alive(this.id);
        return zz ? 1e3 * this.howl.duration(this.id) / zz.rate : 0
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
    class At {
      constructor(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          Fz = arguments.length > 3 ? arguments[3] : void 0;
        this.createHowl = zz, this.listener = tz, this.now = sz, this.errors = 0, this.sheets = new Map, this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader = void 0, this.voices = new Yt.e, this.failed = new Set, this.started = new Set, this.voiceHost = {
          alive: zz => this.aliveVoice(zz),
          started: zz => this.started.has(zz),
          drop: zz => {
            var tz;
            null === (tz = this.live.get(zz)) || void 0 === tz || tz.howl.stop(zz), this.forget(zz)
          }
        }, this.handlers = {
          playSound: (zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz) => {
            if (Fz >= Ht.length) return;
            const Uz = 0 !== (Wz & wz.ke.Loop);
            Wz & wz.ke.TwoD ? this.start(Fz, !1, Oz, Xz, oz, Uz) : this.startSpatial(Fz, Oz, Xz, oz, Uz, zz, tz, sz, vz, this.earDistSq(zz, tz, sz))
          },
          soundPos: (zz, tz, sz, Fz) => {
            const Wz = this.core.get(Fz);
            var Xz;
            void 0 !== Wz && (null === (Xz = this.live.get(Wz)) || void 0 === Xz || Xz.howl.pos(sz, tz, zz, Wz))
          },
          soundSet: (zz, tz, sz, Fz) => {
            const Wz = this.core.get(zz),
              Xz = void 0 === Wz ? void 0 : this.live.get(Wz);
            void 0 !== Wz && Xz && (this.setRel(Wz, tz), Xz.rate = sz, Xz.howl.rate(sz, Wz), Xz.spatial && Xz.howl.pannerAttr({
              refDistance: Fz
            }, Wz))
          },
          soundFade: (zz, tz, sz, Fz) => {
            const Wz = this.core.get(zz);
            void 0 !== Wz && this.fade(Wz, tz, sz, 0 !== (Fz & wz.ge.StopAfter))
          },
          soundStop: zz => {
            const tz = this.core.get(zz);
            var sz;
            void 0 !== tz && (null === (sz = this.live.get(tz)) || void 0 === sz || sz.howl.stop(tz), this.forget(tz))
          },
          soundReset: () => {
            this.stopCore()
          }
        }, this.loader = new Jt(((zz, tz) => this.sheet(zz, tz)), (zz => {
          this.errors++, console.error("Audio preload failed", zz)
        }), Fz)
      }
      prepare() {
        for (let zz = 0; zz < Dt.length; zz++) this.sheet(zz, !1), this.sheet(zz, !0)
      }
      preload(zz) {
        this.loader.preload(zz)
      }
      cancelPreload() {
        this.loader.cancel()
      }
      onAudioEvent(zz, tz, sz, Fz) {
        if (zz < wz.q.PlaySound || zz > wz.q.SoundReset) return !1;
        try {
          return (0, wz.ue)(zz, tz, sz, Fz, this.handlers)
        } catch (Wz) {
          return this.errors++, console.error("Audio event failed", Wz), !0
        }
      }
      applyListener(zz) {
        const tz = this.nextPose;
        for (let Fz = 0; Fz < 3; Fz++) tz[2 - Fz] = wz.w.listener(zz, 0, Fz), tz[5 - Fz] = wz.w.forward(zz, 0, Fz), tz[8 - Fz] = wz.w.up(zz, 0, Fz);
        0 === tz[3] && 0 === tz[4] && 0 === tz[5] && tz.set(this.posed ? this.pose.subarray(3) : Zt, 3);
        for (let Fz = 0; Fz < 9; Fz++)
          if (!Number.isFinite(tz[Fz])) return;
        const sz = this.pose;
        if (this.posed) {
          let zz = !0;
          for (let Fz = 0; Fz < 9 && zz; Fz++) zz = tz[Fz] === sz[Fz];
          if (zz) return
        }
        this.listener.apply(tz) && (sz.set(tz), this.posed = !0)
      }
      playGame(zz, tz, sz, Fz, Wz, Xz, Oz) {
        const oz = ct(zz);
        if (oz < 0) return It.c;
        if (!sz) {
          const {
            howl: zz,
            id: sz
          } = this.start(oz, !1, tz, 0, 1, Oz);
          return this.gameSound(zz, sz, !1)
        }
        const vz = sz[0],
          Uz = sz[1] + et,
          Kz = sz[2];
        if (!Number.isFinite(vz) || !Number.isFinite(Uz) || !Number.isFinite(Kz)) return It.c;
        let uz;
        if (Fz) {
          const zz = vz - Fz[0],
            tz = Uz - Fz[1],
            sz = Kz - Fz[2];
          if (uz = zz * zz + tz * tz + sz * sz, uz > Wz * Wz) return It.c
        } else uz = this.earDistSq(vz, Uz, Kz);
        const Nz = this.startSpatial(oz, tz, 0, 1, Oz, vz, Uz, Kz, Xz, uz);
        return Nz ? this.gameSound(Nz.howl, Nz.id, !0) : It.c
      }
      setMaster(zz, tz) {
        this.level = Tt(zz);
        const sz = tz ? this.level : 0;
        if (sz !== this.master) {
          this.master = sz;
          for (const [zz, tz] of this.live) tz.fadeMs = 0, tz.gain = tz.rel * this.master, tz.howl.volume(tz.gain, zz)
        }
      }
      stopCore() {
        for (const tz of [...this.core.values()]) {
          var zz;
          null === (zz = this.live.get(tz)) || void 0 === zz || zz.howl.stop(tz)
        }
        this.core.clear()
      }
      stopAll() {
        this.cancelPreload();
        for (const [zz, tz] of [...this.live]) tz.howl.stop(zz), this.forget(zz);
        this.core.clear()
      }
      gameSound(zz, tz, sz) {
        const Fz = {
          stop: () => (this.live.has(tz) && zz.stop(tz), Fz),
          fade: (zz, sz, Wz) => {
            var Xz, Oz;
            const oz = this.level > 0 ? sz / this.level : sz > 0 && null !== (Xz = null === (Oz = this.live.get(tz)) || void 0 === Oz ? void 0 : Oz.rel) && void 0 !== Xz ? Xz : 0;
            return this.fade(tz, oz, Wz, !1), Fz
          },
          rate: sz => {
            const Wz = this.live.get(tz);
            return Wz && (Wz.rate = function(zz) {
              return zz > 0 && zz < 1 / 0 ? zz : 1
            }(sz), zz.rate(Wz.rate, tz)), Fz
          },
          getVolume: () => {
            var zz, sz;
            return (null !== (zz = null === (sz = this.live.get(tz)) || void 0 === sz ? void 0 : sz.rel) && void 0 !== zz ? zz : 0) * this.level
          },
          getRelativeVolume: () => {
            var zz, sz;
            return null !== (zz = null === (sz = this.live.get(tz)) || void 0 === sz ? void 0 : sz.rel) && void 0 !== zz ? zz : 0
          },
          setRelativeVolume: zz => (this.setRel(tz, zz), Fz),
          setPannerAttr: Wz => {
            if (sz && this.live.has(tz)) {
              const sz = {
                ...Ct,
                refDistance: Kt.f
              };
              for (const [zz, tz] of Object.entries(Wz)) "number" !== typeof tz && "string" !== typeof tz || (sz[zz] = tz);
              zz.pannerAttr({
                coneOuterAngle: sz.coneOuterAngle
              }, tz), zz.pannerAttr(sz, tz)
            }
            return Fz
          },
          setPosition: Wz => (sz && this.live.has(tz) && Number.isFinite(Wz[0] + Wz[1] + Wz[2]) && zz.pos(Wz[2], Wz[1], Wz[0], tz), Fz)
        };
        return Fz
      }
      startSpatial(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz) {
        const Kz = this.sheet(Bt[zz], !0);
        let uz = null;
        if (!Wz) {
          if (this.failed.has(Kz)) return null;
          const sz = Bt[zz] === Gt ? null : (0, Yt.m)(Ht[zz]),
            Fz = (0, Yt.i)(Tt(tz), Math.sqrt(Uz), vz);
          if (uz = new jt(sz, Fz, this.now(), Kz, this.voiceHost), !this.voices.admit(uz)) return null
        }
        const Nz = this.start(zz, !0, tz, sz, Fz, Wz);
        return uz && (uz.id = Nz.id, uz.direct = "loaded" === Kz.state() && !Kz._playLock), Kz.pannerAttr({
          coneOuterAngle: 360
        }, Nz.id), Kz.pannerAttr({
          ...Ct,
          refDistance: vz
        }, Nz.id), Kz.pos(oz, Oz, Xz, Nz.id), Nz
      }
      aliveVoice(zz) {
        const tz = this.live.get(zz);
        if (!tz) return;
        const sz = tz.howl._soundById(zz);
        if (sz && !sz._ended) return tz;
        this.forget(zz)
      }
      earDistSq(zz, tz, sz) {
        if (!this.posed) return 0;
        const Fz = zz - this.pose[2],
          Wz = tz - this.pose[1],
          Xz = sz - this.pose[0];
        return Fz * Fz + Wz * Wz + Xz * Xz
      }
      start(zz, tz, sz, Fz, Wz, Xz) {
        const Oz = Tt(sz),
          oz = this.sheet(Bt[zz], tz);
        "unloaded" === oz.state() && oz.load();
        const vz = oz.play(Ht[zz]),
          Uz = Oz * this.master;
        return oz.volume(Uz, vz), this.live.set(vz, {
          howl: oz,
          rel: Oz,
          gain: Uz,
          fadeFrom: Uz,
          fadeAt: 0,
          fadeMs: 0,
          rate: Wz,
          handle: Fz,
          spatial: tz,
          stopTimer: void 0
        }), 0 !== Fz && this.core.set(Fz, vz), 1 !== Wz && oz.rate(Wz, vz), Xz && oz.loop(!0, vz), {
          howl: oz,
          id: vz
        }
      }
      sheet(zz, tz) {
        const sz = 2 * zz + (tz ? 1 : 0);
        let Fz = this.sheets.get(sz);
        if (!Fz) {
          const Wz = this.createHowl(Dt[zz], tz);
          Wz.on("end", (zz => {
            Wz.loop(zz) || this.forget(zz)
          })), Wz.on("stop", (zz => {
            this.forget(zz)
          })), Wz.on("play", (zz => {
            this.live.has(zz) && this.started.add(zz)
          })), Wz.on("loaderror", (zz => {
            if ("loaded" !== Wz.state()) {
              this.failed.add(Wz);
              for (const [zz, tz] of this.live) tz.howl === Wz && this.forget(zz)
            } else "number" === typeof zz && this.forget(zz)
          })), this.sheets.set(sz, Wz), Fz = Wz
        }
        return Fz
      }
      setRel(zz, tz) {
        const sz = this.live.get(zz);
        sz && (yt(sz), sz.fadeMs = 0, sz.rel = Tt(tz), sz.gain = sz.rel * this.master, sz.howl.volume(sz.gain, zz))
      }
      fade(zz, tz, sz, Fz) {
        const Wz = this.live.get(zz);
        if (!Wz) return;
        yt(Wz);
        const {
          howl: Xz
        } = Wz, Oz = this.gainNow(Wz);
        Wz.rel = Tt(tz), Wz.gain = Wz.rel * this.master;
        const oz = sz > 0 ? Math.min(sz, 65535) : 0,
          vz = 0 === oz || Oz === Wz.gain;
        Wz.fadeMs = vz ? 0 : oz, vz ? Xz.volume(Wz.gain, zz) : (Wz.fadeFrom = Oz, Wz.fadeAt = this.now(), Xz.fade(Oz, Wz.gain, oz, zz)), Fz && (vz ? Xz.stop(zz) : Wz.stopTimer = setTimeout((() => {
          Wz.stopTimer = void 0, Xz.stop(zz)
        }), oz))
      }
      gainNow(zz) {
        if (zz.fadeMs > 0) {
          const tz = (this.now() - zz.fadeAt) / zz.fadeMs;
          if (tz < 1) return zz.fadeFrom + (zz.gain - zz.fadeFrom) * Math.max(0, tz);
          zz.fadeMs = 0
        }
        return zz.gain
      }
      forget(zz) {
        this.started.delete(zz);
        const tz = this.live.get(zz);
        tz && (yt(tz), this.live.delete(zz), 0 !== tz.handle && this.core.get(tz.handle) === zz && this.core.delete(tz.handle))
      }
    }

    function yt(zz) {
      void 0 !== zz.stopTimer && (clearTimeout(zz.stopTimer), zz.stopTimer = void 0)
    }
    var Mt = sz(39733),
      dt = sz(38535);
    class ht {
      constructor(zz, tz, sz, Fz) {
        this.key = zz, this.model = tz, this.host = Fz, this.au = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.tWz = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, this.tailView = void 0, this.tailCut = new Uint8Array(0), this.made = !1, this.lw = !1, this.au = Math.max(1, Math.ceil(sz)), this.records = new Float32Array(this.au * vt.c), this.isDirty = new Uint8Array(this.au), this.tail = new Uint8Array(this.au * wz.tc.Bytes), this.tailView = new DataView(this.tail.buffer), this.make(Fz.cmd())
      }
      setOrigin(zz, tz, sz) {
        this.origin[0] = zz, this.origin[1] = tz, this.origin[2] = sz
      }
      markDirty(zz) {
        !this.lw && zz >= 0 && zz < this.au && zz < wz.tc.Max && this.KD(zz, zz + 1)
      }
      commit(zz) {
        if (this.lw) return;
        (zz = Math.min(Math.max(Math.floor(zz), 0), this.au, wz.tc.Max)) > this.count && this.KD(this.count, zz), this.count = zz;
        const {
          origin: tz,
          sentOrigin: sz,
          dirtyList: Fz
        } = this, Wz = this.tWz !== zz, Xz = sz[0] !== tz[0] || sz[1] !== tz[1] || sz[2] !== tz[2];
        if (0 === Fz.length && !Wz && !Xz) return;
        const Oz = this.host.cmd();
        if (!Oz || !this.make(Oz)) return;
        const oz = Fz.length,
          {
            records: vz,
            tailView: Uz
          } = this;
        for (let Kz = 0; Kz < oz; Kz++) {
          const zz = Fz[Kz],
            tz = zz * vt.c,
            sz = Kz * wz.tc.Bytes,
            Wz = 0 !== vz[tz + vt.g] ? wz.tc.Hidden : 0;
          Uz.setUint32(sz, (zz | Wz) >>> 0, !0), Uz.setFloat32(sz + 4, vz[tz], !0), Uz.setFloat32(sz + 8, vz[tz + 1], !0), Uz.setFloat32(sz + 12, vz[tz + 2], !0)
        }
        if ((0, wz.Te)(Oz, 0, this.key, zz, tz, oz, this.tailOf(oz))) {
          for (let zz = 0; zz < oz; zz++) this.isDirty[Fz[zz]] = 0;
          Fz.length = 0, this.tWz = zz, sz[0] = tz[0], sz[1] = tz[1], sz[2] = tz[2]
        }
      }
      grow(zz) {
        (zz = Math.ceil(zz)) <= this.au || this.lw || (this.records = (0, dt.d)(this.records, new Float32Array(zz * vt.c)), this.isDirty = (0, dt.d)(this.isDirty, new Uint8Array(zz)), this.tail = new Uint8Array(zz * wz.tc.Bytes), this.tailView = new DataView(this.tail.buffer), this.au = zz)
      }
      dispose() {
        this.lw || (this.lw = !0, this.host.lw(this, this.made ? this.key : null))
      }
      make(zz) {
        if (!this.made && zz) {
          const {
            item: tz,
            scale: sz,
            yaw: Fz
          } = this.model;
          this.made = (0, wz.We)(zz, 0, this.key, tz, sz, Fz)
        }
        return this.made
      }
      tailOf(zz) {
        const tz = zz * wz.tc.Bytes;
        return this.tailCut.buffer === this.tail.buffer && this.tailCut.length === tz || (this.tailCut = this.tail.subarray(0, tz)), this.tailCut
      }
      KD(zz, tz) {
        const {
          dirtyList: sz,
          isDirty: Fz
        } = this;
        for (let Wz = zz; Wz < tz; Wz++) 0 === Fz[Wz] && (Fz[Wz] = 1, sz.push(Wz))
      }
    }
    var Qt = sz(577);
    class kt {
      constructor(zz) {
        this.keys = 0, this.live = new Set, this.owing = new Set, this.host = void 0, this.host = {
          cmd: zz,
          owes: zz => {
            this.owing.add(zz)
          },
          settled: (zz, tz) => {
            this.owing.delete(zz), tz && this.live.delete(zz)
          }
        }
      }
      create(zz, tz) {
        if (sz = zz, !Qt.l.includes(sz)) return null;
        var sz;
        const Fz = new it(++this.keys, Kz.k.indexOf(zz), tz, this.host);
        return this.live.add(Fz), Fz
      }
      disposeAll() {
        for (const zz of [...this.live]) zz.dispose()
      }
      flush() {
        if (0 === this.owing.size) return;
        const zz = this.host.cmd();
        for (const tz of this.owing)
          if (!tz.sync(zz)) return
      }
    }
    class it {
      constructor(zz, tz, sz, Fz) {
        this.key = zz, this.lifeform = tz, this.scale = sz, this.host = Fz, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.owed = 1, this.lw = !1, this.sync()
      }
      setPose(zz, tz) {
        this.lw || (this.feet[0] = zz[0], this.feet[1] = zz[1], this.feet[2] = zz[2], this.yaw = tz, this.owed |= 2, this.sync())
      }
      setVisible(zz) {
        this.lw || zz === this.visible || (this.visible = zz, this.owed |= 4, this.sync())
      }
      dispose() {
        this.lw || (this.lw = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
      }
      sync() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.host.cmd();
        return this.write(zz) ? (this.host.settled(this, this.lw), !0) : (this.host.owes(this), !1)
      }
      write(zz) {
        if (!zz) return this.owed = 0, !0;
        if (1 & this.owed) {
          if (!(0, wz.$e)(zz, 0, this.key, this.lifeform, this.scale)) return !1;
          this.owed &= -2
        }
        const tz = (2 & this.owed ? wz.Tc.Pose : 0) | (4 & this.owed ? wz.Tc.Visible : 0);
        if (0 !== tz) {
          if (!(0, wz.Ye)(zz, 0, this.key, tz, this.visible ? 1 : 0, this.feet, this.yaw)) return !1;
          this.owed &= -7
        }
        if (8 & this.owed) {
          if (!(0, wz.Xe)(zz, 0, this.key)) return !1;
          this.owed = 0
        }
        return !0
      }
    }
    var Lt = sz(40148);

    function lt(zz, tz, sz, Fz) {
      return (0, Lt.c)(), (0, wz.Kf)(zz, tz, sz, Fz)
    }
    var nt = sz(38538),
      qt = sz(39727);
    const St = [0, 0, 0],
      Vt = [0, 0, 0],
      Rt = [0, 0, 0],
      pt = [0, 0, 0],
      ft = {
        origin: [0, 0, 0],
        direction: [0, 0, 1]
      },
      Et = [0, 0, 0],
      zs = [0, 0],
      ts = [1, 1, 1],
      ss = 1 / 3;
    const Fs = Ut.c;

    function Ws(zz) {
      const tz = Ut.b[zz],
        sz = tz && Ut.c[tz.mainMultiblock];
      return sz && {
        main: sz,
        x: tz.compX,
        y: tz.compY,
        z: tz.compZ
      }
    }

    function Xs(zz) {
      if (null === zz || void 0 === zz) return wz.dd;
      const tz = +zz;
      return Number.isInteger(tz) && tz >= -2147483648 && tz <= 2147483647 && String(tz) === String(zz) ? tz : wz.dd
    }

    function Os(zz, tz, sz) {
      return (0, wz.Tf)(zz, 0, tz, null !== sz && void 0 !== sz ? sz : Number.NaN)
    }
    class os {
      constructor(zz) {
        this.deps = zz, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new nt.c((() => this.tables.getClientOption("forcedCameraDirectionTransitionMs")), (zz => {
          var tz, sz;
          null === (tz = (sz = this.deps).setLocalOptions) || void 0 === tz || tz.call(sz, zz)
        })), this.mobModels = new kt((() => this.deps.cmd())), this.owedFrees = [], this.pendingStyle = void 0, this.pendingFar = void 0, this.farSet = !1, this.routeMesh = 0, this.routeOffset = 0, this.routeLook = "", this.routeSlide = {
          uvOffset: [0, 0]
        }, this.poolHost = {
          cmd: () => this.deps.cmd(),
          lw: (zz, tz) => {
            this.livePools.delete(zz), null !== tz && (this.owedFrees.push(tz), this.flushOwed())
          }
        }, this.api = zz.api, this.live = zz.live, this.chunks = zz.chunks, this.items = zz.items, this.tables = zz.tables
      }
      isLocal(zz) {
        return null !== zz && void 0 !== zz && +zz === this.api.localId
      }
      assertLocal(zz, tz) {
        if (!this.isLocal(zz)) throw new Error(`Attempted to ${tz} for a player that is not the local player`)
      }
      yB(zz) {
        const tz = this.api.yB(zz);
        if (!tz) throw new Error(`Entity ${zz} has no replicated position`);
        return tz
      }
      checkValid(zz) {
        return !!this.deps.isSessionLive() && (null === zz || void 0 === zz || this.api.checkValid(zz))
      }
      isAlive(zz) {
        return !1 !== this.api.isAlive(zz)
      }
      getItemStat(zz, tz, sz) {
        return this.isLocal(zz) || null !== zz && "Player" === this.api.getEntityType(zz) ? this.tables.getItemStat(tz, sz) : this.tables.getDefaultItemStat(tz, sz)
      }
      getClientOption(zz, tz) {
        return this.assertLocal(zz, "get a client option"), this.tables.getClientOption(tz)
      }
      openShop(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sz = arguments.length > 2 ? arguments[2] : void 0;
        this.assertLocal(zz, "open shop"), Oz.o.Yg("showShopFromServer", {
          toggle: tz,
          Ht: sz
        }, !0)
      }
      sendMessage(zz, tz, sz) {
        this.assertLocal(zz, "send a message");
        const Fz = "string" === typeof tz ? [{
          str: tz,
          style: sz
        }] : tz;
        Oz.o.Yg("chat", {
          content: Fz
        }, !0)
      }
      getEntityType(zz) {
        return this.api.getEntityType(zz)
      }
      getEntityName(zz) {
        const tz = Xs(zz);
        return tz === wz.dd ? void 0 : (0, Mt.i)(this.api, tz)
      }
      hasEffect(zz, tz) {
        const sz = Xs(zz);
        return sz !== wz.dd && (0, Mt.g)(this.api, sz, tz)
      }
      getMetaInfo(zz) {
        return this.tables.getMetaInfo(zz)
      }
      getPlayerDbId(zz) {
        return this.assertLocal(zz, "get a DB ID"), this.deps.playerDbId()
      }
      getBlockData(zz, tz, sz) {
        if (!this.chunks.dataCleared(zz, tz, sz)) return (0, Mt.e)(this.api, zz, tz, sz)
      }
      HJ(zz, tz, sz, Fz) {
        this.setBlockId(zz, tz, sz, this.tables.getItemId(Fz))
      }
      setOtherEntitySetting(zz, tz, sz, Fz) {
        if (!this.isLocal(zz)) throw new Error("Attempted to set an other-entity setting for a player that is not the local player");
        if (!Object.hasOwn(wz.od, sz)) throw new Error(`Unknown other-entity setting ${sz}`);
        const Wz = wz.od[sz],
          Xz = Xs(tz);
        if (Xz === wz.dd || !this.deps.beforeWrite()) return;
        const Oz = (0, Mz.f)(Fz);
        if (Oz.length > 16384) throw new Error(`The other-entity setting ${sz}'s value is over 16384 bytes`);
        const oz = this.api.memoryView(Uint8Array, this.api.scratch(), Oz.length, "set_other_entity_setting's value");
        oz && (oz.set(Oz), this.api.queries.setOtherEntitySetting(Xz, Wz, Oz.length))
      }
      getPositionView(zz) {
        return this.live.position(+zz)
      }
      readDrawnPosition(zz, tz) {
        return this.api.readDrawnPosition(Xs(zz), tz)
      }
      getDrawnHeading(zz) {
        const tz = Xs(zz),
          sz = (tz === wz.dd ? 0 : this.api.queries.directorEntity(tz)) >= wz.qb.BYTES ? this.api.memoryData(this.api.scratch(), wz.qb.BYTES, 8, "getDrawnHeading's DirectorEntity") : null;
        if (!sz) return null;
        if (1 === wz.qb.headingIsDrawn(sz, 0)) return wz.qb.heading(sz, 0);
        const Fz = this.api.apiView;
        return this.isLocal(zz) && 0 === (wz.t.playerFlags(Fz, 0) & wz.Nd.FreeCam) ? wz.t.heading(Fz, 0) : null
      }
      getLocalPlayerMovement() {
        const zz = wz.t.playerFlags(this.api.apiView, 0);
        return 0 === (zz & wz.Nd.Replay) && this.api.readDrawnPosition(this.api.localId, Rt) ? {
          onGround: 0 !== (zz & wz.Nd.OnGround),
          jumpHeld: 0 !== (zz & wz.Nd.JumpHeld)
        } : null
      }
      rtz(zz) {
        return this.isLocal(zz) ? this.items.po() : null
      }
      getInventoryItems() {
        return this.items.playerItems()
      }
      getHeldGunInaccuracy() {
        var zz, tz;
        return "Gun" === (null === (zz = this.aliveHeld()) || void 0 === zz || null === (tz = zz.typeObj) || void 0 === tz ? void 0 : tz.type) ? this.items.inaccuracy : null
      }
      aliveHeld() {
        return !1 === this.api.isAlive(this.api.localId) ? null : this.items.po()
      }
      isCrosshairShown() {
        var zz, tz;
        const sz = (0, ut.c)(Fz.b.get("crosshairGameView"), Fz.b.get("crosshairShownOverride"));
        if (null !== sz) return sz;
        const Wz = null === (zz = this.aliveHeld()) || void 0 === zz ? void 0 : zz.typeObj,
          Xz = "Gun" === (null === Wz || void 0 === Wz ? void 0 : Wz.type),
          Oz = Xz || !0 === (null === Wz || void 0 === Wz ? void 0 : Wz.showsAimingUi),
          oz = 0 === (wz.t.playerFlags(this.api.apiView, 0) & wz.Nd.ZoomFirstPerson),
          vz = null !== (tz = this.tables.getClientOption("gunshotOrigin")) && void 0 !== tz ? tz : null;
        return (0, ut.h)({
          gun: Xz,
          aimable: Oz
        }, oz, (0, Nt.e)(), vz)
      }
      setCrosshairShown(zz) {
        Fz.b.set({
          crosshairShownOverride: zz
        })
      }
      getInventoryFreeSlotCount(zz) {
        return this.isLocal(zz) ? this.items.freeSlots() : null
      }
      getSelectedInventorySlotI(zz) {
        return this.isLocal(zz) ? this.items.selectedSlot : null
      }
      getItemSlot(zz, tz) {
        return this.isLocal(zz) ? this.items.slot(tz) : null
      }
      swapInventorySlots(zz, tz) {
        return this.items.swap(zz, tz)
      }
      isPlayerCrouching(zz) {
        if (this.isLocal(zz)) return 0 !== (wz.t.playerFlags(this.api.apiView, 0) & wz.Nd.Crouching);
        const tz = Xs(zz);
        return tz !== wz.dd && 1 === this.api.queries.entityCrouching(tz)
      }
      getMiningBlock() {
        return this.live.breakingPosition()
      }
      isMining() {
        return 0 !== (wz.t.playerFlags(this.api.apiView, 0) & wz.Nd.AttemptingBreak)
      }
      getTargetedBlock() {
        return this.live.W4()
      }
      getActionRay() {
        const zz = this.api.apiView;
        for (let tz = 0; tz < 3; tz++) ft.origin[tz] = wz.t.Kzz(zz, 0, tz), ft.direction[tz] = wz.t.actionDir(zz, 0, tz);
        return ft
      }
      canModifyBlockAt(zz, tz, sz) {
        return 1 === this.api.queries.canModify(zz, tz, sz)
      }
      isSolidToPlayerBlockId(zz) {
        return this.tables.isSolidBlockId(zz) && !this.chunks.isWalkThrough(zz)
      }
      blockNameToBlockId(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.tables.blockNameToBlockId(zz, tz)
      }
      blockIdToBlockName(zz) {
        return this.tables.nameOfId(zz)
      }
      Mzz(zz, tz, sz, Fz, Wz) {
        return 1 === this.api.queries.terrainBlocked(Fz, zz, tz, sz, Xs(null !== Wz && void 0 !== Wz ? Wz : null))
      }
      getChunkVersion(zz, tz, sz) {
        return this.chunks.version(zz, tz, sz)
      }
      scanBlocks(zz, tz, sz, Fz, Wz, Xz, Oz, oz) {
        return this.chunks.scan(zz, tz, sz, Fz, Wz, Xz, Oz, oz)
      }
      isBlockInLoadedChunk(zz, tz, sz) {
        return this.chunks.isLoaded(zz, tz, sz)
      }
      getBlockId(zz, tz, sz) {
        return this.chunks.yK(zz, tz, sz)
      }
      playSound(zz, tz, sz, Fz, Wz) {
        let Xz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (!this.isLocal(zz)) return null;
        const Oz = this.playSoundFrom(tz, sz, Wz, Xz);
        return 1 === Fz ? Oz : Oz.rate(Fz)
      }
      playSoundFrom(zz, tz, sz, Fz) {
        var Wz, Xz;
        const Oz = this.deps.playSound;
        if (!Oz) return It.c;
        const oz = null === sz || void 0 === sz ? void 0 : sz.fW,
          vz = null !== (Wz = null === sz || void 0 === sz ? void 0 : sz.maxHearDist) && void 0 !== Wz ? Wz : Kt.d,
          Uz = null !== (Xz = null === sz || void 0 === sz ? void 0 : sz.refDistance) && void 0 !== Xz ? Xz : Kt.f;
        let Kz = null;
        if (Array.isArray(oz)) St[0] = oz[0], St[1] = oz[1], St[2] = oz[2], Kz = St;
        else if (void 0 !== oz && null !== oz) {
          const zz = Xs(oz);
          if (!this.api.isLocal(zz)) {
            if (!this.api.readPosition(zz, St)) return It.c;
            Kz = St
          }
        }
        return Oz(zz, tz, Kz, Kz && this.ear(), vz, Uz, Fz)
      }
      ear() {
        if (this.api.readPosition(this.api.localId, Vt)) Vt[1] += et;
        else {
          const zz = this.api.apiView;
          if (0 === wz.t.viewProj(zz, 0, 3) && 0 === wz.t.viewProj(zz, 0, 7) && 0 === wz.t.viewProj(zz, 0, 11)) return null;
          for (let tz = 0; tz < 3; tz++) Vt[tz] = wz.t.eye(zz, 0, tz)
        }
        return Number.isFinite(Vt[0] + Vt[1] + Vt[2]) ? Vt : null
      }
      setBlockId(zz, tz, sz, Fz) {
        if (!Number.isInteger(Fz) || Fz < 0 || Fz > 65535) throw new Error(`Invalid block id ${Fz}`);
        if (!this.deps.beforeWrite() || !this.chunks.isLoaded(zz, tz, sz)) return;
        const Wz = Math.floor(zz),
          Xz = Math.floor(tz),
          Oz = Math.floor(sz),
          oz = this.predictedCells(Wz, Xz, Oz, Fz);
        if (1 === this.api.queries.HJ(Wz, Xz, Oz, Fz)) {
          for (let zz = 0; zz < oz.length; zz += 5) this.chunks.setOverlay(oz[zz], oz[zz + 1], oz[zz + 2], oz[zz + 3], 1 === oz[zz + 4]);
          this.live.refreshTarget()
        }
      }
      particlesEnabled() {
        return this.deps.particles.enabled()
      }
      createParticles(zz, tz) {
        return this.deps.particles.create(zz, tz)
      }
      playParticleEffect(zz) {
        this.deps.particles.playEffect(zz)
      }
      burstParticlePreset(zz, tz, sz) {
        this.deps.particles.burstPreset(zz, tz, sz)
      }
      createGameMesh(zz, tz, sz) {
        const Fz = ++this.meshKeys,
          Wz = this.deps.cmd();
        if (!Wz) return Fz;
        const {
          look: Xz,
          colour: Oz
        } = function(zz) {
          switch (zz.kind) {
            case void 0:
            case "flatEmissive":
              return zz.onTop ? {
                look: wz.$b.FlatOnTop,
                colour: [...zz.rgb, zz.alpha]
              } : zz.opaque ? {
                look: wz.$b.FlatOpaque,
                colour: [...zz.rgb, 1]
              } : {
                look: wz.$b.Flat,
                colour: [...zz.rgb, zz.alpha]
              };
            case "chevronPath":
              return {
                look: wz.$b.Chevrons, colour: [...(0, bt.b)(zz.colour), zz.alpha]
              };
            case "furnaceFire":
              return {
                look: wz.$b.FurnaceFire, colour: [1, 1, 1, 1]
              }
          }
        }(tz), oz = Math.floor(zz.positions.length / 3), vz = function(zz, tz) {
          const sz = Math.floor(zz.positions.length / 3),
            Fz = zz.indices.length,
            Wz = sz * (tz ? 5 : 3),
            Xz = new Uint8Array(4 * (Wz + Fz)),
            Oz = new DataView(Xz.buffer);
          for (let Uz = 0; Uz < 3 * sz; Uz++) Oz.setFloat32(4 * Uz, zz.positions[Uz], !0);
          if (tz) {
            var oz;
            const tz = null !== (oz = zz.uvs) && void 0 !== oz ? oz : [];
            for (let zz = 0; zz < 2 * sz; zz++) {
              var vz;
              Oz.setFloat32(4 * (3 * sz + zz), null !== (vz = tz[zz]) && void 0 !== vz ? vz : 0, !0)
            }
          }
          for (let Uz = 0; Uz < Fz; Uz++) Oz.setUint32(4 * (Wz + Uz), zz.indices[Uz], !0);
          return Xz
        }(zz, (0, vt.k)(tz));
        return (0, wz.Ie)(Wz, 0, Fz, Xz, Oz, sz, oz, zz.indices.length, vz) && this.liveMeshes.add(Fz), Fz
      }
      setGameMesh(zz, tz) {
        var sz;
        const Fz = this.deps.cmd();
        if (!Fz) return;
        let Wz = 0;
        tz.anchor && (Wz |= wz.bc.Anchor, Et[0] = tz.anchor[0], Et[1] = tz.anchor[1], Et[2] = tz.anchor[2]), void 0 !== tz.visible && (Wz |= wz.bc.Visible), tz.uvOffset && (Wz |= wz.bc.UvOffset, zs[0] = tz.uvOffset[0], zs[1] = tz.uvOffset[1]);
        const Xz = null !== (sz = tz.visibility) && void 0 !== sz ? sz : 1;
        void 0 !== tz.visibility && (Wz |= wz.bc.Visibility), tz.scale && (Wz |= wz.bc.Scale, ts[0] = tz.scale[0], ts[1] = tz.scale[1], ts[2] = tz.scale[2]), 0 !== Wz && (0, wz.Oe)(Fz, 0, zz, Wz, tz.visible ? 1 : 0, Et, zs, Xz, ts)
      }
      disposeGameMesh(zz) {
        const tz = this.deps.cmd();
        tz && !(0, wz.Me)(tz, 0, zz) || this.liveMeshes.delete(zz)
      }
      hasPackModel(zz) {
        var tz, sz, Fz;
        return null !== (tz = null === (sz = (Fz = this.deps).hasPackModel) || void 0 === sz ? void 0 : sz.call(Fz, zz)) && void 0 !== tz && tz
      }
      disposeGameOutput() {
        const zz = zz => {
          try {
            zz()
          } catch (tz) {
            console.error("Error freeing client game output", tz)
          }
        };
        for (const tz of [...this.liveMeshes]) zz((() => {
          this.disposeGameMesh(tz)
        }));
        for (const tz of [...this.livePools]) zz((() => {
          tz.dispose()
        }));
        zz((() => {
          this.mobModels.disposeAll()
        })), zz((() => {
          this.setGroundArrowStyle(null)
        })), zz((() => {
          this.setRouteChevrons(null), this.routeOffset = 0, this.routeLook = ""
        })), zz((() => {
          this.setCrosshairShown(null)
        })), zz((() => {
          this.cameraTurn.dispose()
        })), zz((() => {
          this.farSet && (this.farSet = !1, this.setCameraFar(null))
        }))
      }
      createInstancePool(zz, tz) {
        const sz = this.tables.idOf(zz.item);
        if (void 0 === sz) return null;
        const Fz = new ht(++this.poolKeys, {
          item: sz,
          scale: zz.scale,
          yaw: zz.yaw
        }, tz, this.poolHost);
        return this.livePools.add(Fz), Fz
      }
      createMobModel(zz, tz) {
        return this.mobModels.create(zz, tz)
      }
      setRouteChevrons(zz) {
        if (0 !== this.routeMesh && (this.disposeGameMesh(this.routeMesh), this.routeMesh = 0), !zz || 0 === zz.cells.length) return;
        const tz = `${zz.colour} ${zz.alpha}`;
        tz !== this.routeLook && (this.routeLook = tz, this.routeOffset = 0), this.routeMesh = this.createGameMesh(function(zz) {
          const [tz, sz, Fz] = zz[0].pos, Wz = [], Xz = [], Oz = [];
          return zz.forEach(((zz, oz) => {
            let {
              pos: vz,
              way: [Uz, Kz]
            } = zz;
            const uz = vz[0] - tz + .5,
              Nz = vz[1] - sz + .04,
              bz = vz[2] - Fz + .5,
              [wz, Dz] = [.35 * -Kz, .35 * Uz],
              [gz, Hz] = [oz * ss, (oz + 1) * ss],
              Bz = Wz.length / 3;
            Wz.push(uz - .5 * Uz + wz, Nz, bz - .5 * Kz + Dz), Wz.push(uz - .5 * Uz - wz, Nz, bz - .5 * Kz - Dz), Wz.push(uz + .5 * Uz + wz, Nz, bz + .5 * Kz + Dz), Wz.push(uz + .5 * Uz - wz, Nz, bz + .5 * Kz - Dz), Xz.push(0, gz, 1, gz, 0, Hz, 1, Hz), Oz.push(Bz, Bz + 1, Bz + 2, Bz + 1, Bz + 3, Bz + 2)
          })), {
            positions: Wz,
            uvs: Xz,
            indices: Oz
          }
        }(zz.cells), {
          kind: "chevronPath",
          colour: zz.colour,
          alpha: zz.alpha
        }, zz.cells[0].pos), this.setRouteSlide()
      }
      slideRoute(zz) {
        0 !== this.routeMesh && (this.routeOffset = (this.routeOffset + Math.min(zz, 250) / 1e3 * 1.2 * ss) % 1, this.setRouteSlide())
      }
      setRouteSlide() {
        this.routeSlide.uvOffset[1] = -this.routeOffset, this.setGameMesh(this.routeMesh, this.routeSlide)
      }
      setGroundArrowStyle(zz) {
        this.pendingStyle = zz, this.flushOwed()
      }
      flushOwed() {
        this.mobModels.flush();
        const zz = this.owedFrees;
        if (0 === zz.length && void 0 === this.pendingStyle && void 0 === this.pendingFar) return;
        const tz = this.deps.cmd();
        if (!tz) return zz.length = 0, void(this.pendingFar = void 0);
        let sz = 0;
        for (; sz < zz.length && (0, wz.Ue)(tz, 0, zz[sz]);) sz++;
        zz.splice(0, sz);
        const Fz = this.pendingStyle;
        if (void 0 !== Fz) {
          (Fz ? (0, wz.Wf)(tz, 0, Fz.width, Fz.alpha, 1, Fz.endAtSolidFace ? 1 : 0) : (0, wz.Wf)(tz, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
        }
        const Wz = this.pendingFar;
        void 0 !== Wz && (0, wz.Sf)(tz, 0, null !== Wz && void 0 !== Wz ? Wz : 0, null === Wz ? 1 : 0) && (this.pendingFar = void 0)
      }
      setNametagOffset(zz, tz) {
        const sz = this.deps.cmd(),
          Fz = Xs(zz);
        sz && Fz !== wz.dd && (0, wz.ag)(sz, 0, Fz, tz)
      }
      setFacingTolerance(zz, tz) {
        const sz = this.deps.cmd(),
          Fz = Xs(zz);
        sz && Fz !== wz.dd && Os(sz, Fz, tz)
      }
      forEachEntity(zz) {
        const {
          api: tz
        } = this;
        for (let sz = 0; sz < tz.idStr.length; sz++) {
          const Fz = tz.idStr[sz];
          null === Fz || Yz(tz.kinds[sz]) || zz(Fz)
        }
      }
      getEntityInfo(zz) {
        return this.deps.entityInfo.get(zz)
      }
      isEntityInteractable(zz) {
        const tz = Xs(zz);
        return tz !== wz.dd && 1 === this.api.queries.entityInteractable(tz)
      }
      isLocalPlayer(zz) {
        return this.isLocal(zz)
      }
      getLineOwner(zz) {
        var tz;
        const sz = null === (tz = this.deps.entityInfo.get(zz)) || void 0 === tz ? void 0 : tz.meshOpts;
        if (!sz) return null;
        try {
          const {
            lineToEId: zz
          } = JSON.parse(sz);
          return null !== zz && void 0 !== zz ? zz : null
        } catch {
          return null
        }
      }
      getCameraPosition() {
        const zz = this.api.apiView;
        return pt[0] = wz.t.eye(zz, 0, 0), pt[1] = wz.t.eye(zz, 0, 1), pt[2] = wz.t.eye(zz, 0, 2), pt
      }
      getCameraFar() {
        return wz.t.cameraFar(this.api.apiView, 0)
      }
      setCameraFar(zz) {
        null !== zz && (this.farSet = !0), this.pendingFar = zz, this.flushOwed()
      }
      turnCamera(zz, tz) {
        this.cameraTurn.turn(zz, tz)
      }
      clearPickupDelay(zz) {
        const tz = this.deps.cmd(),
          sz = Xs(zz);
        tz && sz !== wz.dd && (0, wz.ze)(tz, 0, sz)
      }
      sendChat(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const sz = this.deps.sendCmd();
        sz && lt(sz, 0, qt.d.Chat, (0, Mz.f)((0, qt.j)({
          RO: zz,
          pO: tz
        })))
      }
      sendCommand(zz) {
        zz.length <= 119 && this.sendChat(`/${zz}`)
      }
      predictedCells(zz, tz, sz, Fz) {
        const Wz = this.chunks,
          Xz = [],
          Oz = (zz, tz, sz, Fz, Wz) => {
            Xz.push(zz, tz, sz, Fz, this.tables.blockRootId(Wz) === this.tables.blockRootId(Fz) ? 0 : 1)
          },
          oz = Wz.yK(zz, tz, sz),
          vz = Ws(oz);
        if (vz) {
          const [Fz, Xz, Uz] = [zz - vz.x, tz - vz.y, sz - vz.z], Kz = Fs[Wz.yK(Fz, Xz, Uz)], uz = null === Kz || void 0 === Kz ? void 0 : Kz.positions.some((zz => zz.id === oz && zz.x === vz.x && zz.y === vz.y && zz.z === vz.z));
          for (const zz of (uz && Kz ? Kz : vz.main).positions) Wz.yK(Fz + zz.x, Xz + zz.y, Uz + zz.z) === zz.id && Oz(Fz + zz.x, Xz + zz.y, Uz + zz.z, 0, zz.id)
        }
        const Uz = Ws(Fz);
        if (Uz)
          for (const uz of Uz.main.positions) {
            const [Fz, Xz, oz] = [zz + uz.x - Uz.x, tz + uz.y - Uz.y, sz + uz.z - Uz.z];
            Oz(Fz, Xz, oz, uz.id, Wz.yK(Fz, Xz, oz))
          } else Oz(zz, tz, sz, Fz, oz);
        const Kz = this.tables;
        if ((0 !== Kz.attachedTopOf(oz) || 0 !== Kz.attachedTopOf(Fz)) && Wz.isLoaded(zz, tz + 1, sz)) {
          let vz = Wz.yK(zz, tz + 1, sz);
          for (let Fz = 0; Fz < Xz.length; Fz += 5) Xz[Fz] === zz && Xz[Fz + 1] === tz + 1 && Xz[Fz + 2] === sz && (vz = Xz[Fz + 3]);
          const Uz = this.attachedTopWrite(oz, Fz, vz);
          void 0 !== Uz && Oz(zz, tz + 1, sz, Uz, vz)
        }
        return Xz
      }
      attachedTopWrite(zz, tz, sz) {
        const Fz = this.tables,
          Wz = Fz.attachedTopOf(zz),
          Xz = Fz.attachedTopOf(tz),
          Oz = 0 !== Wz && 0 !== sz && Fz.blockRootId(sz) === Fz.blockRootId(Wz);
        return 0 !== Wz && 0 !== Xz && Fz.blockRootId(zz) === Fz.blockRootId(tz) ? Oz && sz !== Xz ? Xz : void 0 : 0 === Xz || !Oz && 0 !== sz ? Oz ? 0 : void 0 : Xz
      }
    }
    const vs = wz.qc + wz.sc * wz.xc.BYTES,
      Us = 2147483647,
      Ks = new TextDecoder,
      us = new TextEncoder,
      Ns = Object.freeze({
        hK: 0,
        Nu: null,
        amountAddedToSlot: 0
      }),
      bs = new Proxy({}, {
        get: () => () => wz.nd
      });

    function ws(zz) {
      return Number.isInteger(zz) && zz >= 0 && zz <= 65535
    }

    function Ds(zz) {
      return Number.isInteger(zz) && zz >= 0 && zz <= 4294967295
    }
    class gs {
      constructor(zz) {
        this.deps = zz, this.oO = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(wz.sc), this.ids = new Uint16Array(wz.sc), this.amounts = new Uint16Array(wz.sc), this.attrRead = new Float64Array(wz.sc).fill(-1), this.stale = new Uint16Array(wz.sc), this.staleVersion = new Uint32Array(wz.sc), this.instances = new Uint32Array(wz.sc), this.viewPtr = 0, this.viewVersion = -1, this.len = 0, this.selected = 0, this.slotIconId = 0, this.stopped = !1, this.listeners = new Set
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
      slot(zz) {
        var tz;
        return Number.isInteger(zz) && zz >= 0 && zz < this.len && 0 !== this.ids[zz] && null !== (tz = this.facades[zz]) && void 0 !== tz ? tz : null
      }
      po() {
        return this.slot(this.selected)
      }
      playerItems() {
        const zz = [];
        for (let tz = 0; tz < Math.min(wz.xd, this.len); tz++) zz.push(this.slot(tz));
        return zz
      }
      freeSlots() {
        let zz = 0;
        for (let tz = 0; tz < Math.min(wz.xd - wz.h, this.len); tz++) 0 === this.ids[tz] && zz++;
        return zz
      }
      amountOf(zz) {
        let tz = 0;
        for (let Fz = 0; Fz < Math.min(wz.xd, this.len); Fz++) {
          const Wz = this.slot(Fz);
          var sz;
          if ((null === Wz || void 0 === Wz ? void 0 : Wz.name) === zz) tz += null !== (sz = Wz.amount) && void 0 !== sz ? sz : 1
        }
        return tz
      }
      instance(zz) {
        var tz;
        return null !== (tz = this.instances[zz]) && void 0 !== tz ? tz : 0
      }
      watch(zz) {
        return this.listeners.add(zz), () => {
          this.listeners.delete(zz)
        }
      }
      touch() {
        this.version++
      }
      flush(zz) {
        if (this.version !== this.notified || this.iconChanged) {
          this.notified = this.version, this.iconChanged = !1;
          for (const sz of [...this.listeners]) try {
            sz()
          } catch (tz) {
            zz(tz)
          }
        }
      }
      chestOpened(zz, tz, sz) {
        this.oO[0] = zz, this.oO[1] = tz, this.oO[2] = sz, this.version++
      }
      refresh() {
        const zz = this.deps.api.apiView,
          tz = wz.t.inventoryViewPtr(zz, 0),
          sz = wz.t.inventoryVersion(zz, 0),
          Fz = wz.t.selectedSlot(zz, 0);
        Fz !== this.selected && (this.selected = Fz, this.version++);
        const Wz = wz.t.slotIcon(zz, 0);
        if (Wz !== this.slotIconId && (this.slotIconId = Wz, this.iconChanged = !0), tz === this.viewPtr && sz === this.viewVersion) return;
        this.viewPtr = tz, this.viewVersion = sz;
        const Xz = this.deps.api.memoryData(tz, vs, 4, "the inventory view"),
          Oz = Xz ? Math.min(Xz.getUint32(0, !0), wz.sc) : 0;
        Oz !== this.len && (this.len = Oz, this.version++);
        let oz = 0;
        for (let vz = 0; vz < wz.sc; vz++) {
          const zz = wz.qc + vz * wz.xc.BYTES,
            tz = null !== Xz && vz < Oz ? wz.xc.item(Xz, zz) : 0;
          if (0 === tz || null === Xz) {
            0 !== this.ids[vz] && (this.ids[vz] = 0, this.attrRead[vz] = -1, this.instances[vz]++, this.version++);
            continue
          }
          const sz = wz.xc.amount(Xz, zz),
            Fz = wz.xc.attrVersion(Xz, zz);
          tz === this.ids[vz] && sz === this.amounts[vz] || this.fill(vz, tz, sz), Fz !== this.attrRead[vz] && (this.stale[oz] = vz, this.staleVersion[oz] = Fz, oz++)
        }
        oz > 0 && this.fetchAttributes(oz)
      }
      fill(zz, tz, sz) {
        const {
          tables: Fz
        } = this.deps, Wz = tz !== this.ids[zz];
        let Xz = this.facades[zz];
        Xz || (Xz = {
          name: "",
          amount: null,
          attributes: {
            customAttributes: {}
          },
          typeObj: null
        }, this.facades[zz] = Xz), Wz && (Xz.name = Fz.nameOfId(tz), Xz.typeObj = Fz.itemType(tz), Xz.attributes = {
          customAttributes: {}
        }, this.attrRead[zz] = -1, this.instances[zz]++), Xz.amount = 0 === sz ? null : sz, this.ids[zz] = tz, this.amounts[zz] = sz, this.version++
      }
      fetchAttributes(zz) {
        const {
          api: tz,
          onError: sz
        } = this.deps, Fz = tz.memoryView(Uint16Array, tz.scratch(), zz, "item_attributes_batch's slots");
        if (!Fz) return void this.markRead(zz);
        Fz.set(this.stale.subarray(0, zz));
        const Wz = tz.queries.itemAttributesBatch(zz),
          Xz = 4294967295 === Wz ? null : tz.memoryData(tz.scratch(), Wz, 4, "item_attributes_batch's answer");
        if (!Xz) return void this.markRead(zz);
        const Oz = new Uint8Array(Xz.buffer, Xz.byteOffset, Wz);
        for (let vz = 0; vz + 8 <= Wz;) {
          const zz = Xz.getUint16(vz, !0),
            tz = Xz.getUint32(vz + 4, !0),
            Fz = Oz.subarray(vz + 8, vz + 8 + tz);
          vz += 8 + (0, Nz.ke)(tz);
          const Wz = this.facades[zz];
          if (Wz && 0 !== this.ids[zz] && 0 !== tz) {
            try {
              Wz.attributes = JSON.parse(Ks.decode(Fz))
            } catch (oz) {
              sz(oz)
            }
            this.version++
          }
        }
        this.markRead(zz)
      }
      markRead(zz) {
        for (let tz = 0; tz < zz; tz++) this.attrRead[this.stale[tz]] = this.staleVersion[tz]
      }
      swap(zz, tz) {
        return ws(zz) && ws(tz) && this.settle(this.queries().invSwap(zz, tz))
      }
      move(zz, tz, sz) {
        return ws(zz) && ws(tz) && Ds(sz) && this.settle(this.queries().invMove(zz, tz, sz))
      }
      quickMove(zz, tz, sz, Fz) {
        var Wz, Xz;
        if (!ws(zz) || !ws(tz) || !ws(sz) || null !== Fz && !Ds(Fz)) return null;
        const Oz = this.queries().invQuickMove(zz, tz, sz, null === Fz ? -1 : Math.min(Fz, Us)),
          oz = Oz === wz.nd ? wz.Ib : null !== (Wz = null === (Xz = this.extras()) || void 0 === Xz ? void 0 : Xz[1]) && void 0 !== Wz ? Wz : wz.Ib;
        return this.settle(Oz), oz === wz.Ib ? null : oz
      }
      remove(zz, tz, sz) {
        return ws(zz) && Ds(tz) && this.settle(this.queries().invRemove(zz, tz, sz ? 1 : 0))
      }
      selectSlot(zz) {
        return ws(zz) && this.settle(this.queries().selectSlot(zz))
      }
      closeChest() {
        return this.settle(this.queries().closeChest())
      }
      enchant(zz, tz, sz) {
        if (!ws(zz) || !Number.isInteger(tz)) return !1;
        const [Fz, Wz, Xz] = sz;
        return this.settle(this.queries().invEnchant(zz, tz, Math.floor(Fz), Math.floor(Wz), Math.floor(Xz)))
      }
      craft(zz, tz, sz) {
        let Fz;
        try {
          Fz = this.deps.tables.getItemId(zz)
        } catch {
          return Ns
        }
        if (!ws(tz) || null !== sz && (Number.isNaN(sz) || sz < 0)) return Ns;
        const Wz = null === sz || sz > Us ? -1 : Math.floor(sz),
          Xz = this.queries().craft(Fz, tz, Wz);
        let Oz = Ns;
        const oz = Xz === wz.nd ? null : this.extras();
        if (oz) {
          const [zz, tz, sz] = oz;
          Oz = {
            hK: zz,
            Nu: tz === wz.Ib ? null : tz,
            amountAddedToSlot: sz
          }
        }
        return this.settle(Xz), Oz
      }
      salvage(zz, tz, sz) {
        let Fz;
        try {
          Fz = this.deps.tables.getItemId(tz)
        } catch {
          return !1
        }
        return ws(zz) && Number.isInteger(sz) && this.settle(this.queries().salvage(zz, Fz, Math.max(Math.min(sz, Us), -Us)))
      }
      craftingView(zz, tz, sz) {
        var Fz;
        if (this.stopped) return null;
        const {
          api: Wz,
          onError: Xz
        } = this.deps, Oz = zz ? us.encode(zz) : null;
        if (null !== Oz) {
          if (Oz.length > 1024) return Xz(new Error(`The crafting station ${zz}'s name is over 1024 bytes`)), null;
          const tz = Wz.memoryView(Uint8Array, Wz.scratch(), Oz.length, "crafting_view's station");
          if (!tz) return null;
          tz.set(Oz)
        }
        const oz = ws(tz) && ws(sz),
          vz = Wz.queries.craftingView(null !== (Fz = null === Oz || void 0 === Oz ? void 0 : Oz.length) && void 0 !== Fz ? Fz : 0, oz ? tz : 0, oz ? sz : 0);
        return vz < wz.jb.BYTES ? (Wz.reportCorruption(`crafting_view's answer of ${vz} bytes`), null) : Wz.memoryData(Wz.scratch(), vz, 1, "crafting_view's answer")
      }
      queries() {
        var zz, tz;
        return !1 === (null === (zz = (tz = this.deps).beforeOp) || void 0 === zz ? void 0 : zz.call(tz)) ? (this.stopped = !0, bs) : this.deps.api.queries
      }
      extras() {
        const {
          api: zz
        } = this.deps;
        return zz.memoryView(Uint32Array, zz.scratch(), 3, "a sync query's extra words")
      }
      settle(zz) {
        if (zz === wz.kd)(0, Lt.c)();
        else if (zz !== wz.nd) {
          const tz = this.deps.cmd();
          tz && function(zz, tz, sz) {
            return (0, Lt.c)(), (0, wz.og)(zz, tz, sz)
          }(tz, 0, zz) || this.deps.onError(new Error(`Sync op ${zz}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
        }
        return this.stopped || this.refresh(), zz !== wz.nd
      }
    }
    const Hs = 1 / .6,
      Bs = [0, 1, 0],
      Ps = [0, 0, 0],
      rs = new Uint8Array(0),
      Ys = 1.2 * wt.d.ZH,
      xs = new TextEncoder,
      ms = [0, 0, 0],
      Is = [0, 0, 0],
      Cs = new Map;

    function es(zz) {
      let tz = Cs.get(zz);
      return tz || (Cs.size >= 64 && Cs.clear(), tz = xs.encode(`{"emitRate":${zz}}`), Cs.set(zz, tz)), tz
    }

    function Zs(zz) {
      return Number.isFinite(zz) && zz > 0 ? zz : 0
    }

    function Gs(zz, tz) {
      for (let sz = 0; sz < 3; sz++) {
        const Fz = Math.abs(tz[sz]);
        ms[sz] = zz[sz] - Fz, Is[sz] = 2 * Fz
      }
      return Number.isFinite(ms[0] + ms[1] + ms[2] + Is[0] + Is[1] + Is[2])
    }

    function Ts(zz, tz) {
      return "pos1" === zz || "pos2" === zz ? void 0 : tz
    }

    function cs(zz, tz, sz) {
      return zz.length > wz.Jd.MaxOpts ? (sz(new Error(`${tz}'s particle opts are over ${wz.Jd.MaxOpts} bytes of JSON`)), null) : zz
    }
    const As = {
      moveTo() {},
      setEmitRate() {},
      emit() {},
      emitPoints() {},
      setDirections() {},
      stop() {},
      dispose() {}
    };
    class ys {
      constructor(zz) {
        this.deps = zz, this.session = 0, this.nextKey = 1, this.live = 0, this.started = !1
      }
      enabled() {
        return null !== this.sink()
      }
      sink() {
        return this.deps.isSessionLive() ? this.deps.cmd() : null
      }
      create(zz, tz) {
        var sz;
        const Fz = this.sink(),
          Wz = null !== (sz = tz.half) && void 0 !== sz ? sz : Ps;
        if (!Fz || this.live >= wz.Jd.MaxLiveKeys || this.nextKey > wz.Jd.MaxKey || !Gs(tz.pos, Wz)) return As;
        const Xz = this.nextKey,
          Oz = cs(function(zz) {
            var tz, sz, Fz;
            const Wz = JSON.stringify({
              texture: "string" === typeof zz.texture ? zz.texture : "smokePuff",
              au: zz.au,
              minLifeTime: zz.minLifeTime,
              maxLifeTime: zz.maxLifeTime,
              minSize: zz.minSize,
              maxSize: zz.maxSize,
              minEmitPower: zz.minEmitPower,
              maxEmitPower: zz.maxEmitPower,
              emitRate: Zs(zz.emitRate),
              gravity: null !== (tz = zz.gravity) && void 0 !== tz ? tz : Ps,
              dir1: null !== (sz = zz.dir1) && void 0 !== sz ? sz : Bs,
              dir2: null !== (Fz = zz.dir2) && void 0 !== Fz ? Fz : Bs,
              colorGradients: zz.colorGradients,
              blendMode: zz.blendMode
            });
            return xs.encode(Wz)
          }(zz), "createParticles", this.deps.onError);
        return Oz && (0, wz.kf)(Fz, 0, Xz, 0, wz.Jd.PresetNone, 0, ms, Is, Oz) ? (this.nextKey++, this.live++, this.started = !0, new Ms(this, this.session, Xz, zz, Wz)) : As
      }
      playEffect(zz) {
        const tz = this.sink(),
          {
            pos1: sz,
            pos2: Fz
          } = zz;
        if (!tz || !sz || !Fz) return;
        for (let Xz = 0; Xz < 3; Xz++) ms[Xz] = Math.min(sz[Xz], Fz[Xz]), Is[Xz] = Math.abs(Fz[Xz] - sz[Xz]);
        if (!Number.isFinite(ms[0] + ms[1] + ms[2] + Is[0] + Is[1] + Is[2])) return;
        const Wz = cs(xs.encode(JSON.stringify(zz, Ts)), "playParticleEffect", this.deps.onError);
        Wz && (0, wz.ef)(tz, 0, 0, wz.Jd.PresetNone, wz.Jd.HasBox, 0, ms, Is, Wz)
      }
      burstPreset(zz, tz, sz) {
        const Fz = this.sink(),
          Wz = Math.min(Math.floor(sz), wz.Jd.MaxBurst);
        if (!Fz || !Object.hasOwn(wz.dc, zz) || !(Wz > 0)) return;
        const Xz = Ys;
        for (let Oz = 0; Oz < 3; Oz++) ms[Oz] = tz[Oz] - Xz / 2, Is[Oz] = Xz;
        Number.isFinite(ms[0] + ms[1] + ms[2]) && (0, wz.ef)(Fz, 0, 0, wz.dc[zz], wz.Jd.HasBox, Wz, ms, Is, rs)
      }
      sessionEnded() {
        this.session++;
        const zz = this.started ? this.deps.cmd() : null;
        return this.started = !1, this.nextKey = 1, this.live = 0, !zz || (0, wz.lf)(zz, 0)
      }
      sinkFor(zz) {
        return zz === this.session ? this.deps.cmd() : null
      }
      stop(zz, tz) {
        const sz = this.sinkFor(zz);
        sz && (0, wz.mf)(sz, 0, tz) && this.live--
      }
    }
    class Ms {
      constructor(zz, tz, sz, Fz, Wz) {
        this.owner = zz, this.session = tz, this.key = sz, this.half = void 0, this.rate = void 0, this.stopDelayMs = void 0, this.emitted = void 0, this.stopped = !1, this.freed = !1, this.half = [Math.abs(Wz[0]), Math.abs(Wz[1]), Math.abs(Wz[2])], this.rate = Zs(Fz.emitRate), this.emitted = this.rate > 0;
        const Xz = Fz.maxLifeTime * Hs * 1e3 + 250;
        this.stopDelayMs = Xz >= 0 ? Math.min(Xz, 2147483647) : 250
      }
      sink() {
        return this.stopped ? null : this.owner.sinkFor(this.session)
      }
      moveTo(zz, tz) {
        const sz = this.sink();
        if (sz) {
          if (tz)
            for (let zz = 0; zz < 3; zz++) this.half[zz] = Math.abs(tz[zz]);
          Gs(zz, this.half) && (0, wz.qf)(sz, 0, this.key, wz.Jd.HasBox, ms, Is, rs)
        }
      }
      setEmitRate(zz) {
        const tz = this.sink(),
          sz = Zs(zz);
        tz && sz !== this.rate && (0, wz.qf)(tz, 0, this.key, 0, Ps, Ps, es(sz)) && (this.rate = sz, this.emitted ||= sz > 0)
      }
      emit(zz) {
        const tz = this.sink(),
          sz = Math.min(Math.floor(zz), wz.Jd.MaxBurst);
        tz && sz > 0 && (0, wz.ef)(tz, 0, this.key, wz.Jd.PresetNone, 0, sz, Ps, Ps, rs) && (this.emitted = !0)
      }
      emitPoints(zz, tz, sz) {
        const Fz = this.sink(),
          Wz = Math.min(Math.floor(sz), wz.Jd.MaxPoints, Math.floor(tz.length / 4));
        if (!Fz || !(Wz > 0) || !Number.isFinite(zz[0] + zz[1] + zz[2])) return;
        const Xz = new Uint8Array(tz.buffer, tz.byteOffset, Wz * wz.Jd.PointBytes);
        (0, wz.gf)(Fz, 0, this.key, Wz, zz, Xz) && (this.emitted = !0)
      }
      setDirections(zz, tz) {
        const sz = this.sink();
        if (!sz || !Number.isFinite(zz[0] + zz[1] + zz[2] + tz[0] + tz[1] + tz[2])) return;
        const Fz = xs.encode(JSON.stringify({
          dir1: [zz[0], zz[1], zz[2]],
          dir2: [tz[0], tz[1], tz[2]]
        }));
        (0, wz.qf)(sz, 0, this.key, 0, Ps, Ps, Fz)
      }
      stop() {
        const zz = this.sink();
        this.stopped = !0, zz && (this.emitted ? (this.rate > 0 && (0, wz.qf)(zz, 0, this.key, 0, Ps, Ps, es(0)), setTimeout((() => {
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
    const ds = Qt.p,
      hs = new TextDecoder;

    function Qs(zz, tz) {
      const {
        serverIds: sz,
        kinds: Fz
      } = zz;
      let Wz = 0;
      for (let Xz = 0; Xz < sz.length; Xz++) {
        const zz = sz[Xz];
        if (zz !== wz.dd && !Yz(Fz[Xz])) {
          if (Wz === tz.length) {
            const zz = new Int32Array(Math.max(64, 2 * Wz));
            zz.set(tz), tz = zz
          }
          tz[Wz++] = zz
        }
      }
      return {
        ids: tz,
        count: Wz
      }
    }

    function ks(zz, tz) {
      return zz.length >= tz ? zz : new Int32Array(Math.max(tz, 2 * zz.length))
    }

    function is(zz, tz, sz, Fz) {
      for (let Wz = 0; Wz < sz; Wz += 4096) {
        const Xz = Math.min(4096, sz - Wz),
          Oz = zz.memoryView(Int32Array, zz.scratch(), Xz, "entity_info_batch's ids");
        if (!Oz) return !1;
        Oz.set(tz.subarray(Wz, Wz + Xz));
        const oz = zz.queries.entityInfoBatch(Xz),
          vz = 4294967295 === oz ? null : zz.memoryData(zz.scratch(), oz, 4, "entity_info_batch's records");
        if (!vz) return !1;
        for (let zz = 0; zz + wz.Tb.BYTES <= oz;) {
          const tz = wz.Tb.len(vz, zz);
          Fz(wz.Tb.serverId(vz, zz), Ls(vz, zz, tz)), zz += wz.Tb.BYTES + (0, Nz.ke)(tz)
        }
      }
      return !0
    }

    function Ls(zz, tz, sz) {
      var Fz, Wz, Xz;
      const Oz = wz.Tb.kind(zz, tz),
        oz = 0 === Oz ? null : xz(Oz);
      if (null === oz) return null;
      const vz = wz.Tb.variation(zz, tz),
        Uz = wz.Tb.pose(zz, tz),
        Kz = wz.Tb.meta(zz, tz),
        uz = wz.Tb.mesh(zz, tz),
        Nz = 0 !== (wz.Tb.flags(zz, tz) & wz.Pb.HasOpts),
        bz = ds[oz];
      return Object.freeze({
        type: oz,
        variation: vz === wz.id ? void 0 : null !== (Fz = null !== (Wz = null === bz || void 0 === bz ? void 0 : bz[vz]) && void 0 !== Wz ? Wz : null === bz || void 0 === bz ? void 0 : bz[0]) && void 0 !== Fz ? Fz : "default",
        pose: Uz === wz.mc ? void 0 : null !== (Xz = wz.Db[Uz]) && void 0 !== Xz ? Xz : wz.Db[0],
        metaInfo: Kz === wz.mc ? void 0 : wz.Pc[Kz],
        meshKind: uz === wz.mc ? void 0 : wz.Nc[uz],
        meshOpts: Nz ? hs.decode(new Uint8Array(zz.buffer, zz.byteOffset + tz + wz.Tb.BYTES, sz)) : void 0
      })
    }
    const ls = 1,
      ns = 2;
    class as {
      constructor(zz) {
        this.deps = zz, this.wanted = 0, this.po = !1, this.refused = !1
      }
      get on() {
        return this.po
      }
      want(zz, tz) {
        this.wanted = tz ? this.wanted | zz : this.wanted & ~zz;
        const sz = 0 !== this.wanted;
        if (sz === this.po) return;
        const Fz = this.deps.cmd();
        null !== Fz ? (0, wz.sg)(Fz, 0, sz ? 1 : 0) ? (this.po = sz, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.po = !1
      }
    }
    class qs {
      constructor(zz) {
        this.deps = zz, this.entries = new Map, this.complete = !1, this.refill = !1, this.midFrame = !1, this.pending = new Int32Array(64), this.pendingCount = 0, this.ids = new Int32Array(64)
      }
      get(zz) {
        var tz;
        return this.complete || this.fill(), null !== (tz = this.entries.get("string" === typeof zz ? zz : String(zz))) && void 0 !== tz ? tz : null
      }
      inCoreCall() {
        this.midFrame = !0
      }
      stale(zz) {
        if (this.complete) {
          if (this.pendingCount === this.pending.length) {
            const zz = new Int32Array(2 * this.pending.length);
            zz.set(this.pending), this.pending = zz
          }
          this.pending[this.pendingCount++] = zz
        }
      }
      removed(zz) {
        this.entries.size > 0 && this.entries.delete(String(zz))
      }
      refresh() {
        const zz = this.pendingCount;
        if (this.pendingCount = 0, this.midFrame = !1, !this.deps.watch.on || this.refill) return this.complete = !1, void(this.refill = !1);
        if (zz > 0 && this.complete) {
          const {
            api: tz
          } = this.deps;
          let sz = 0;
          const Fz = this.ids = ks(this.ids, zz);
          for (let Wz = 0; Wz < zz; Wz++) {
            const zz = this.pending[Wz],
              Xz = tz.indexById.get(zz);
            void 0 === Xz || Yz(tz.kinds[Xz]) ? this.entries.delete(String(zz)) : Fz[sz++] = zz
          }
          sz > 0 && !this.batch(Fz, sz) && (this.complete = !1)
        }
      }
      sessionEnded() {
        this.entries.clear(), this.complete = !1, this.refill = !1, this.midFrame = !1, this.pendingCount = 0, this.deps.watch.want(ls, !1)
      }
      fill() {
        const {
          api: zz
        } = this.deps;
        if (this.complete = !0, this.pendingCount = 0, this.entries.clear(), this.deps.isSessionLive()) {
          const {
            watch: zz
          } = this.deps, tz = zz.on;
          zz.want(ls, !0), !tz && zz.on && (this.refill = this.midFrame)
        }
        const {
          ids: tz,
          count: sz
        } = Qs(zz, this.ids);
        this.ids = tz, sz > 0 && !this.batch(tz, sz) && (this.refill = !0)
      }
      batch(zz, tz) {
        return is(this.deps.api, zz, tz, ((zz, tz) => {
          null === tz ? this.entries.delete(String(zz)) : this.entries.set(String(zz), tz)
        }))
      }
    }
    var Ss = sz(4436);

    function Vs(zz) {
      if ("message" !== zz.type || zz.RO !== Ss.fc.NewClientOptions || zz.payloadKind !== Nz.Wb.Msgpack) return null;
      const tz = (0, Mz.c)(zz.payload);
      if (null === tz || "object" !== typeof tz || Array.isArray(tz)) throw new Error("NewClientOptions whose body isn't an object of options");
      return tz
    }
    var Rs = sz(1223),
      ps = sz(36112);

    function fs(zz, tz, sz, Fz, Wz, Xz, oz) {
      var vz, Uz, Kz;
      switch (zz) {
        case wz.me.ToggleMenu: {
          const zz = wz.J[tz];
          Oz.o.Yg("toggleMenu", void 0 === zz ? "inventory" : `inventory|${zz}`);
          break
        }
        case wz.me.EditBoard:
          Oz.o.Yg("EditBoard", {
            pos: 0 === tz ? null : sz
          });
          break;
        case wz.me.EditCodeBlock:
        case wz.me.ViewCodeBlock:
          Oz.o.Yg("EditCodeBlock", {
            pos: sz,
            canChangePos: zz === wz.me.EditCodeBlock
          });
          break;
        case wz.me.EditCustomLobbyBlock:
          Oz.o.Yg("EditCustomLobbyBlock", {
            pos: sz
          });
          break;
        case wz.me.OpenIronChest:
          Oz.o.Yg("OpenIronChest", {
            pos: sz
          });
          break;
        case wz.me.EditNameTag:
          Oz.o.Yg("EditNameTag", null !== (vz = null === (Uz = Wz.po()) || void 0 === Uz || null === (Kz = Uz.attributes.customAttributes) || void 0 === Kz ? void 0 : Kz.text) && void 0 !== vz ? vz : "");
          break;
        case wz.me.EditBook: {
          var uz, Nz, Dz;
          const zz = null === (uz = Wz.po()) || void 0 === uz ? void 0 : uz.attributes;
          Oz.o.Yg("EditBook", {
            pages: (0, Rs.Q)(null === zz || void 0 === zz || null === (Nz = zz.customAttributes) || void 0 === Nz ? void 0 : Nz.pages),
            title: null !== (Dz = null === zz || void 0 === zz ? void 0 : zz.customDisplayName) && void 0 !== Dz ? Dz : "Title",
            isPublished: !(null === zz || void 0 === zz || !zz.customDescription)
          });
          break
        }
        case wz.me.CantChangeBlock:
          ! function(zz, tz) {
            const sz = tz.getClientOption("cantChangeError"),
              Fz = tz.getClientOption(zz ? "cantBuildError" : "cantBreakError"),
              Wz = zz ? sz : Fz;
            (tz.getClientOption("canChange") || Wz || "You cannot modify this block" !== sz) && Oz.o.Yg("showBottomMessage", {
              message: Fz || sz,
              type: "Error"
            })
          }(1 === tz, Xz);
          break;
        case wz.me.MiddleBarStart:
          Oz.o.Yg("middleScreenBarInitiate", {
            duration: Fz,
            jF: 1 === sz[0],
            horizBarRemOffset: tz
          });
          break;
        case wz.me.MiddleBarStop:
          Oz.o.Yg("middleScreenBarRemove");
          break;
        case wz.me.Hitmarker:
          Oz.o.Yg("localGunHitmarker", {
            Hs: 1 === tz
          });
          break;
        case wz.me.ShotsLeft:
          Oz.o.Yg("localPlayerNewShotsLeft", Fz);
          break;
        case wz.me.AimingOverlay:
          Oz.o.Yg("aimingOverlay", 3 === (3 & tz) ? "sniper" : "none");
          break;
        case wz.me.BottomMessage:
          Oz.o.Yg("showBottomMessage", JSON.parse(oz()));
          break;
        case wz.me.Crosshair:
          Wz.inaccuracy = (0, dz.f)(Fz), (0, ps.e)().crosshairAccuracy(Wz.inaccuracy);
          break;
        case wz.me.ChargeStage:
          break;
        case wz.me.EmoteWheelClose:
          Oz.o.Yg("requestEmoteWheelClose");
          break;
        case wz.me.BlockMined:
          Oz.o.Yg("localBlockMined");
          break;
        default:
          throw new bz.e(`UiEvent of no kind: what ${zz}`)
      }
    }
    var Es = sz(37422),
      zF = sz(8856),
      tF = sz(1896),
      sF = sz(36222),
      FF = sz(8866),
      WF = sz(4419);
    const XF = 10,
      OF = {
        player: [],
        chestOrCreative: [],
        chest: null,
        creative: !1,
        selectedSlot: 0,
        freeSlots: 0
      },
      oF = {
        items: [],
        ammo: 0,
        selectedSlot: 0
      },
      vF = {
        gun: !1,
        aimable: !1,
        chargeName: null
      };

    function UF(zz, tz) {
      let sz, Fz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        Wz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      const Xz = () => (sz = (0, tF.j)(sz, tz()), sz);
      return {
        current: Xz,
        watch(tz) {
          const sz = () => {
              tz(Xz())
            },
            Oz = [zz.watch(sz)];
          return null !== Fz && Oz.push((0, tF.n)((zz => {
            zz.some(Fz) && sz()
          }))), null !== Wz && Oz.push(Wz(sz)), () => {
            for (const zz of Oz) zz()
          }
        }
      }
    }

    function KF(zz) {
      return zz && {
        name: zz.name,
        amount: zz.amount,
        attributes: zz.attributes
      }
    }
    const uF = new WeakMap;

    function NF(zz) {
      let tz = uF.get(zz);
      return void 0 === tz && (tz = (0, FF.creativeItemIds)().map((tz => ({
        name: zz.nameOfId(tz),
        amount: zz.isStackableId(tz) ? 1 : null,
        attributes: (0, Es.e)("Gun" === (0, FF.itemTypeOf)(tz) ? {
          type: "Gun",
          clipSize: (0, FF.clipSizeOf)(tz)
        } : void 0)
      }))), uF.set(zz, tz)), tz
    }

    function bF(zz, tz, sz, Fz) {
      const Wz = tz => (zz.flush(Fz), tz),
        Xz = sz => {
          var Fz, Wz, Xz, Oz, oz, vz, Uz;
          const Kz = zz.slot(sz);
          if (!Kz) return null;
          const {
            rootName: uz,
            metaStr: Nz
          } = tz.getMetaInfo(Kz.name);
          return {
            name: Kz.name,
            amount: Kz.amount,
            attributes: Kz.attributes,
            instance: zz.instance(sz),
            displayName: null !== (Fz = Kz.attributes.customDisplayName) && void 0 !== Fz ? Fz : tz.getDisplayName(uz),
            requiresAmmo: "RequiresAmmo" === Nz,
            clipSize: null !== (Wz = null !== (Xz = null === (Oz = Kz.attributes.customAttributes) || void 0 === Oz || null === (oz = Oz.gunStats) || void 0 === oz ? void 0 : oz.clipSize) && void 0 !== Xz ? Xz : null === (vz = tz.getGunStats(uz)) || void 0 === vz ? void 0 : vz.clipSize) && void 0 !== Wz ? Wz : null === (Uz = Kz.typeObj) || void 0 === Uz ? void 0 : Uz.clipSize
          }
        },
        oz = function(zz, tz) {
          let sz = null,
            Fz = {
              focus: null,
              recipes: [],
              detail: null
            },
            Wz = -1;
          const Xz = new Set;
          return {
            read() {
              var Xz, Oz;
              if (null === sz) return null !== Fz.focus && (Fz = {
                ...Fz,
                focus: null
              }), Fz;
              if (Fz.focus === sz && Wz === zz.changes) return Fz;
              if (Wz = zz.changes, 0 === zz.length) return Fz = {
                focus: sz,
                recipes: [],
                detail: null
              }, Fz;
              let oz = 0;
              if (null !== sz.recipe) try {
                oz = tz.getItemId(sz.recipe.name)
              } catch {}
              const vz = zz.craftingView(sz.station, oz, null !== (Xz = null === (Oz = sz.recipe) || void 0 === Oz ? void 0 : Oz.dK) && void 0 !== Xz ? Xz : 0);
              return Fz = null === vz ? {
                focus: sz,
                recipes: [],
                detail: null
              } : function(zz, tz, sz) {
                let Fz = wz.jb.BYTES;
                const Wz = [];
                for (let Kz = wz.jb.recipes(zz, 0); Kz > 0; Kz--) {
                  const sz = wz.bb.flags(zz, Fz),
                    Xz = {
                      name: tz.nameOfId(wz.bb.item(zz, Fz)),
                      dK: wz.bb.recipe(zz, Fz),
                      requires: [],
                      produces: wz.bb.produces(zz, Fz),
                      haveIngredients: 0 !== (sz & wz._.HaveIngredients),
                      listed: 0 !== (sz & wz._.Listed)
                    };
                  let Oz = wz.bb.requires(zz, Fz);
                  for (Fz += wz.bb.BYTES; Oz > 0; Oz--) {
                    const sz = wz.db.items(zz, Fz);
                    Xz.requires.push({
                      items: gF(zz, Fz + wz.db.BYTES, sz, tz),
                      amt: wz.db.amount(zz, Fz)
                    }), Fz += wz.db.BYTES + 2 * sz
                  }
                  Wz.push(Xz)
                }
                const Xz = wz.jb.flags(zz, 0);
                if (null === sz.recipe || 0 === (Xz & wz.hb.Detail)) return {
                  focus: sz,
                  recipes: Wz,
                  detail: null
                };
                const Oz = {},
                  oz = {};
                for (let Kz = wz.jb.ingredients(zz, 0); Kz > 0; Kz--) {
                  const sz = wz.X.item(zz, Fz),
                    Wz = wz.X.from(zz, Fz),
                    Xz = wz.X.amount(zz, Fz);
                  Fz += wz.X.BYTES;
                  const vz = Wz === wz.I ? null : gF(zz, Fz, Wz, tz);
                  if (null !== vz && (Fz += 2 * Wz), 0 === sz) continue;
                  const Uz = tz.nameOfId(sz);
                  Oz[Uz] = Xz, null !== vz && (oz[Uz] = vz)
                }
                const {
                  name: vz,
                  dK: Uz
                } = sz.recipe;
                return {
                  focus: sz,
                  recipes: Wz,
                  detail: {
                    name: vz,
                    dK: Uz,
                    craftAllTimes: wz.jb.craftAllTimes(zz, 0),
                    roomForOne: 0 !== (Xz & wz.hb.RoomForOne),
                    resultStackable: Boolean(tz.getItemStat(vz, "stackable")),
                    amounts: Oz,
                    ingredientsCraftedFrom: oz
                  }
                }
              }(vz, tz, sz), Fz
            },
            setFocus(zz) {
              sz = zz;
              for (const tz of [...Xz]) tz()
            },
            watchFocus: zz => (Xz.add(zz), () => {
              Xz.delete(zz)
            })
          }
        }(zz, tz);
      return {
        states: {
          inventory: UF(zz, (() => {
            const sz = zz.length;
            if (0 === sz) return OF;
            const Fz = [];
            for (let tz = 0; tz < wz.xd; tz++) Fz.push(KF(zz.slot(tz)));
            const Wz = zz.slotIcon,
              Xz = Fz[zz.selectedSlot];
            0 !== Wz && Xz && (Fz[zz.selectedSlot] = {
              ...Xz,
              icon: tz.nameOfId(Wz)
            });
            const Oz = !0 === tz.getClientOption("creative");
            let oz = [],
              vz = null;
            if (sz > wz.xd) {
              for (let tz = wz.xd; tz < sz; tz++) oz.push(KF(zz.slot(tz)));
              vz = {
                type: null,
                pos: [...zz.oO],
                numSlots: sz - wz.xd,
                ironChest: null
              }
            } else Oz && (oz = NF(tz));
            return {
              player: Fz,
              chestOrCreative: oz,
              chest: vz,
              creative: Oz,
              selectedSlot: zz.selectedSlot,
              freeSlots: zz.freeSlots()
            }
          }), (0, tF.f)("creative")),
          hotbar: UF(zz, (() => {
            if (0 === zz.length) return oF;
            const tz = [];
            for (let zz = 0; zz < XF; zz++) tz.push(Xz(zz));
            return {
              items: tz,
              ammo: zz.amountOf("Ammo"),
              selectedSlot: zz.selectedSlot
            }
          }), (0, tF.d)("DisplayName", "GunStats")),
          crafting: UF(zz, oz.read, null, oz.watchFocus),
          heldItemAim: UF(zz, (() => {
            var tz;
            if (!sz()) return vF;
            const Fz = null === (tz = zz.po()) || void 0 === tz ? void 0 : tz.typeObj,
              Wz = "Gun" === (null === Fz || void 0 === Fz ? void 0 : Fz.type);
            return {
              gun: Wz,
              aimable: Wz || !0 === (null === Fz || void 0 === Fz ? void 0 : Fz.showsAimingUi),
              chargeName: "Chargeable" === (null === Fz || void 0 === Fz ? void 0 : Fz.type) ? Fz.name : null
            }
          }), null, (zz => function(zz, tz) {
            let sz = zz();
            return (0, WF.y)((() => {
              const Fz = zz();
              Fz !== sz && (sz = Fz, tz(Fz))
            }))
          }(sz, zz)))
        },
        events: {
          hotbarSlotRequested: (0, tF.b)("setSelectedInventorySlotI"),
          hotbarScrolled: (0, tF.b)("ScrollInventorySlot"),
          numberKeyPressed: (0, tF.b)("numkeyPressed"),
          inventoryDropRequested: (0, tF.b)("DropInvenItem"),
          chestToggled: (0, tF.b)("chestToggleFromServer"),
          chestRefreshed: (0, tF.b)("chestRefreshedFromServer", DF),
          inventorySynced: (0, tF.b)("syncedInvenFromServer", DF),
          enchantingTableOpened: (0, tF.b)("enchantingTable", (zz => {
            let {
              position: sz,
              yK: Fz
            } = zz;
            return {
              position: [...sz],
              blockName: tz.getMetaInfo(Fz).rootName
            }
          }))
        },
        commands: {
          selectHotbarSlot(tz) {
            zz.selectSlot(tz), zz.flush(Fz)
          },
          removeInventoryItem(tz) {
            let {
              slot: sz,
              amount: Fz,
              drop: Xz
            } = tz;
            return Wz(zz.remove(sz, Fz, Xz))
          },
          swapInventorySlots(tz) {
            let {
              a: sz,
              b: Fz
            } = tz;
            return Wz(zz.swap(sz, Fz))
          },
          moveInventoryItem(tz) {
            let {
              from: sz,
              to: Fz,
              amount: Xz
            } = tz;
            return Wz(zz.move(sz, Fz, Xz))
          },
          quickMoveInventoryItem(tz) {
            let {
              slot: sz,
              start: Fz,
              end: Xz,
              amount: Oz
            } = tz;
            return Wz(zz.quickMove(sz, Fz, Xz, Oz))
          },
          closeChest() {
            zz.closeChest(), zz.flush(Fz), Oz.o.Yg("chestClosedByPlayer")
          },
          focusCrafting(zz) {
            oz.setFocus(zz)
          },
          craftRecipe(tz) {
            let {
              name: sz,
              dK: Fz,
              times: Xz
            } = tz;
            return Wz(zz.craft(sz, Fz, Xz))
          },
          salvageItem(tz) {
            let {
              slot: sz,
              name: Fz,
              amount: Xz
            } = tz;
            return Wz(zz.salvage(sz, Fz, Xz))
          },
          enchantItem(tz) {
            let {
              slot: sz,
              level: Fz,
              tablePos: Wz
            } = tz;
            zz.enchant(sz, Fz, Wz)
          }
        },
        queries: {
          enchantingOffer(sz) {
            let {
              slot: Fz,
              blockName: Wz
            } = sz;
            return function(zz, tz, sz, Fz) {
              const Wz = zz.slot(sz);
              if (!Wz || !tz.getClientOption("canCraft") || !(0, zF.u)(Fz) || (0, zF.r)(Wz.attributes)) return wF;
              const Xz = (0, FF.enchantmentPerksOf)(tz.getItemId(Wz.name));
              if (0 === Xz.length) return wF;
              const Oz = [];
              for (let oz = 0; oz < sF.b; oz++) {
                const {
                  commonProb: zz,
                  uncommonProb: tz,
                  rareProb: sz,
                  epicProb: Wz,
                  legendaryProb: Xz,
                  level: vz
                } = (0, zF.g)(Fz, oz);
                Oz.push({
                  level: vz,
                  odds: [zz, tz, sz, Wz, Xz].map((zz => 100 * zz))
                })
              }
              return {
                perks: [...Xz],
                options: Oz
              }
            }(zz, tz, Fz, Wz)
          }
        }
      }
    }
    const wF = Object.freeze({
      perks: [],
      options: []
    });

    function DF() {
      return null
    }

    function gF(zz, tz, sz, Fz) {
      const Wz = [];
      for (let Xz = 0; Xz < sz; Xz++) {
        const sz = zz.getUint16(tz + 2 * Xz, !0);
        0 !== sz && Wz.push(Fz.nameOfId(sz))
      }
      return Wz
    }
    class HF {
      constructor(zz) {
        this.api = zz, this.positions = new Map, this.targeted = {
          yV: 0,
          position: [0, 0, 0],
          normal: [0, 0, 0],
          bu: [0, 0, 0]
        }, this.hasTarget = !1, this.breaking = [0, 0, 0], this.isBreaking = !1
      }
      position(zz) {
        let tz = this.positions.get(zz);
        return tz || (this.api.checkValid(zz) || this.api.isLocal(zz) ? (tz = [NaN, NaN, NaN], this.api.readPosition(zz, tz), this.positions.set(zz, tz), tz) : null)
      }
      W4() {
        return this.hasTarget ? this.targeted : null
      }
      breakingPosition() {
        return this.isBreaking ? this.breaking : null
      }
      refresh() {
        for (const [tz, sz] of this.positions) this.api.readPosition(tz, sz) || this.api.checkValid(tz) || this.api.isLocal(tz) || this.positions.delete(tz);
        const zz = this.api.apiView;
        if (this.refreshTarget(), this.isBreaking = 0 !== (wz.t.playerFlags(zz, 0) & wz.Nd.Breaking) && wz.t.breakingProgress(zz, 0) >= 0, this.isBreaking)
          for (let tz = 0; tz < 3; tz++) this.breaking[tz] = wz.t.breakingPos(zz, 0, tz)
      }
      refreshTarget() {
        const zz = this.api.apiView,
          tz = wz.t.targetBlockId(zz, 0);
        if (this.hasTarget = tz !== wz.fd, this.hasTarget) {
          const sz = this.targeted;
          sz.yV = tz;
          for (let tz = 0; tz < 3; tz++) sz.position[tz] = wz.t.targetBlock(zz, 0, tz), sz.normal[tz] = wz.t.targetNormal(zz, 0, tz), sz.bu[tz] = wz.t.targetAdjacent(zz, 0, tz)
        }
      }
      despawned(zz) {
        const tz = this.positions.get(zz);
        tz && !this.api.isLocal(zz) && (tz.fill(NaN), this.positions.delete(zz))
      }
    }
    var BF = sz(39760),
      PF = sz(39740),
      rF = sz(36215);
    const YF = 1,
      xF = 2;
    class mF {
      constructor() {
        this.game = new rF.d, this.client = new rF.d, this.po = 0, this.movesFly = null
      }
      setGame(zz) {
        if (null === zz || "object" !== typeof zz) return !1;
        const {
          key: tz,
          value: sz
        } = zz;
        return "string" === typeof tz && (this.game.setBooleanType(tz, Boolean(sz)), !0)
      }
      setClient(zz, tz) {
        this.client.setBooleanType(zz, tz)
      }
      clearGame() {
        this.game = new rF.d, this.movesFly = null
      }
      setMovesFly(zz) {
        this.movesFly = zz
      }
      perms() {
        return (this.game._getTotalBooleanVal() ? YF : 0) | (this.client._getTotalBooleanVal() ? xF : 0)
      }
      write(zz) {
        const tz = this.perms(),
          {
            movesFly: sz
          } = this;
        if (tz === this.po && null === sz) return !0;
        let Fz = wz.Vb.Keep;
        return null !== sz && (Fz = sz ? wz.Vb.On : wz.Vb.Off), !(!zz || !(0, wz.Ge)(zz, 0, Fz, tz, sz ? 1 : 0)) && (this.po = tz, this.movesFly = null, !0)
      }
    }
    class JF {
      constructor(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 35;
        this.api = zz, this.screenBandPct = void 0, this.clipX = 0, this.clipY = 0, this.clipW = 0, this.eye = [0, 0, 0], this.forward = [0, 0, 1], this.along = [0, 0, 0], this.screenBandPct = {
          x: oz.e,
          get y() {
            return tz()
          }
        }
      }
      get hasView() {
        const zz = this.api.apiView,
          tz = wz.t.viewProj;
        return 0 !== tz(zz, 0, 3) || 0 !== tz(zz, 0, 7) || 0 !== tz(zz, 0, 11) || 0 !== tz(zz, 0, 15)
      }
      get cameraPosition() {
        const zz = this.api.apiView,
          {
            eye: tz
          } = this;
        for (let sz = 0; sz < 3; sz++) tz[sz] = wz.t.eye(zz, 0, sz);
        return tz
      }
      get cameraDirection() {
        const zz = this.api.apiView,
          tz = wz.t.viewProj,
          sz = tz(zz, 0, 3),
          Fz = tz(zz, 0, 7),
          Wz = tz(zz, 0, 11),
          Xz = Math.hypot(sz, Fz, Wz),
          {
            forward: Oz
          } = this;
        return Xz > 0 && (Oz[0] = sz / Xz, Oz[1] = Fz / Xz, Oz[2] = Wz / Xz), Oz
      }
      get cameraHeading() {
        return wz.t.heading(this.api.apiView, 0)
      }
      get cameraPitch() {
        return wz.t.pitch(this.api.apiView, 0)
      }
      get tanHalfFovX() {
        return wz.t.tanHalfFovX(this.api.apiView, 0)
      }
      get tanHalfFovY() {
        return wz.t.tanHalfFovY(this.api.apiView, 0)
      }
      projectWorldPosToScreenPos(zz) {
        this.clip(zz);
        const {
          clipX: tz,
          clipY: sz,
          clipW: Fz
        } = this;
        if (Fz > 0) {
          const zz = tz / Fz * 50,
            Wz = -sz / Fz * 50;
          return Math.abs(zz) <= this.screenBandPct.x && Math.abs(Wz) <= this.screenBandPct.y ? {
            x: 50 + zz,
            y: 50 + Wz
          } : this.clampToBand(zz, Wz)
        }
        const Wz = this.cameraPosition,
          Xz = Math.hypot(zz[0] - Wz[0], zz[1] - Wz[1], zz[2] - Wz[2]),
          Oz = this.api.apiView,
          oz = wz.t.viewProj,
          vz = Xz > 0 ? tz / Xz : 0,
          Uz = Xz > 0 ? -sz / Xz : 0,
          Kz = Math.hypot(oz(Oz, 0, 1), oz(Oz, 0, 5), oz(Oz, 0, 9)),
          uz = vz / Math.hypot(oz(Oz, 0, 0), oz(Oz, 0, 4), oz(Oz, 0, 8)),
          Nz = Uz / Kz,
          bz = !(Math.abs(uz) >= .001 || Math.abs(Nz) >= .001);
        return this.clampToBand(vz, bz ? -(Kz || 1) : Uz)
      }
      projectDirectionToScreenPos(zz) {
        if (!this.hasView) return;
        const tz = this.cameraPosition,
          sz = this.along;
        for (let Fz = 0; Fz < 3; Fz++) sz[Fz] = tz[Fz] + 10 * zz[Fz];
        return this.projectWorldPosToScreenPos(sz)
      }
      projectWorldPosToViewport(zz) {
        this.clip(zz);
        const {
          clipX: tz,
          clipY: sz,
          clipW: Fz
        } = this;
        return Fz > 0 ? {
          x: 50 + tz / Fz * 50,
          y: 50 - sz / Fz * 50
        } : null
      }
      clip(zz) {
        const tz = this.api.apiView,
          sz = zz[0] - wz.t.origin(tz, 0, 0),
          Fz = zz[1] - wz.t.origin(tz, 0, 1),
          Wz = zz[2] - wz.t.origin(tz, 0, 2),
          Xz = wz.t.viewProj;
        this.clipX = Xz(tz, 0, 0) * sz + Xz(tz, 0, 4) * Fz + Xz(tz, 0, 8) * Wz + Xz(tz, 0, 12), this.clipY = Xz(tz, 0, 1) * sz + Xz(tz, 0, 5) * Fz + Xz(tz, 0, 9) * Wz + Xz(tz, 0, 13), this.clipW = Xz(tz, 0, 3) * sz + Xz(tz, 0, 7) * Fz + Xz(tz, 0, 11) * Wz + Xz(tz, 0, 15)
      }
      clampToBand(zz, tz) {
        return (0, oz.f)(zz, tz, this.screenBandPct.x, this.screenBandPct.y)
      }
    }
    var IF = sz(4446);
    const CF = new TextEncoder,
      eF = new Uint8Array(wz.L * wz.K);
    class ZF {
      constructor() {
        this.buttons = [], this.po = !0
      }
      set(zz) {
        this.buttons = zz, this.po = !1
      }
      attached() {
        this.po = 0 === this.buttons.length
      }
      write(zz) {
        if (this.po) return;
        const tz = new Uint8Array(wz.L),
          sz = new Uint8Array(wz.L);
        let Fz = 0,
          Wz = 0;
        for (const {
            id: Xz,
            keycode: Oz
          }
          of this.buttons) {
          if (Fz === wz.L) break;
          const {
            read: zz,
            written: oz
          } = CF.encodeInto(Xz, eF.subarray(Wz, Wz + wz.K));
          if (zz < Xz.length) continue;
          const vz = IF.n[Oz];
          tz[Fz] = "number" === typeof vz ? vz : 0, sz[Fz] = oz, Fz++, Wz += oz
        }
        this.po = (0, wz.ve)(zz, 0, Fz, tz, sz, eF.subarray(0, Wz))
      }
    }

    function GF(zz, tz, sz) {
      const Fz = CF.encode(tz);
      return Fz.length <= wz.K && function(zz, tz, sz, Fz) {
        return (0, Lt.c)(), (0, wz.rf)(zz, tz, sz, Fz)
      }(zz, 0, sz ? 1 : 0, Fz)
    }
    const TF = new TextDecoder,
      cF = new TextEncoder,
      jF = new Uint8Array(0),
      AF = [0, 0, 0],
      yF = {
        off: wz.Rd.Off,
        key: wz.Rd.Key,
        touch: wz.Rd.Touch
      };
    class MF {
      constructor(zz) {
        var tz;
        this.options = zz, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tickers = [], this.renderers = [], this.receivers = [], this.failures = [], this.vetoSet = !1, this.hooksSet = !1, this.writtenPublicLobby = !1, this.promptWatch = "off", this.promptWatchSent = "off", this.customButtons = new ZF, this.generation = 0, this.sessionLive = !1, this.boundId = 0, this.session = null, this.activeConn = 0, this.closedThrough = 0, this.openSocket = 0, this.socketLeftSinceAttach = !1, this.ticks = 0, this.zoomUnshown = !1, this.zoomHeld = !1, this.overflowGen = 0, this.resyncOwed = !1, this.zoom = 0, this.pendingZoom = null, this.highlight = null, this.highlightOwed = !1, this.cmd = null, this.freeCam = new mF, this.stopped = () => !1, this.onError = void 0, this.api = void 0, this.tables = void 0, this.itemSources = null, this.fault = void 0, this.Iw = zz => {
          if ((0, bz.k)(zz)) throw zz;
          this.onError(zz)
        }, this.api = zz.api, this.tables = zz.tables, this.onError = null !== (tz = zz.onError) && void 0 !== tz ? tz : zz => {
          console.error("Error in client game callback", zz)
        }, this.renderFrame = new JF(this.api, zz.screenBandY), this.live = new HF(this.api), this.chunks = new ot(this.api.memory, (() => this.api.apiView)), this.items = new gs({
          api: this.api,
          tables: zz.tables,
          cmd: () => this.cmd,
          onError: this.onError,
          beforeOp: zz.beforeOp
        });
        const sz = () => this.stopped() ? null : this.cmd,
          Fz = () => this.sessionLive;
        this.entityInfoWatch = new as({
          cmd: sz,
          onError: this.onError
        }), this.entityInfo = new qs({
          api: this.api,
          watch: this.entityInfoWatch,
          isSessionLive: Fz
        }), this.particles = new ys({
          cmd: sz,
          isSessionLive: Fz,
          onError: this.onError
        }), this.clientApi = new os({
          api: this.api,
          live: this.live,
          chunks: this.chunks,
          items: this.items,
          entityInfo: this.entityInfo,
          particles: this.particles,
          tables: zz.tables,
          cmd: sz,
          sendCmd: () => this.sendCmd(),
          isSessionLive: Fz,
          beforeWrite: () => {
            var tz;
            if (this.stopped()) return !1;
            const sz = this.generation;
            return !1 !== (null === (tz = zz.beforeWrite) || void 0 === tz ? void 0 : tz.call(zz)) && sz === this.generation
          },
          playerDbId: () => {
            const zz = this.session;
            if (null === zz) throw new Error("No game session has started, so the local player has no DB id");
            return zz.playerDbId
          },
          playSound: zz.playSound,
          setLocalOptions: zz.setLocalOptions,
          hasPackModel: zz.hasPackModel
        }), this.scriptedCamera = new qz({
          api: this.api,
          cmd: () => this.stopped() ? null : this.cmd,
          screen: zz.cameraScreen,
          showFacing: zz.showCameraFacing
        })
      }
      get itemBridgeSources() {
        return this.itemSources ??= bF(this.items, this.tables, (() => this.localPlayerAlive()), this.Iw), this.itemSources
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
      clickCodeBlock(zz) {
        const tz = this.sessionLive ? this.sendCmd() : null;
        return null !== tz && (sz = tz, Fz = 0, Wz = zz[0], Xz = zz[1], Oz = zz[2], (0, Lt.c)(), (0, wz.Ce)(sz, Fz, Wz, Xz, Oz));
        var sz, Fz, Wz, Xz, Oz
      }
      cameraZoom() {
        return this.zoom
      }
      setCameraZoom(zz) {
        const tz = this.liveCmd();
        return null === tz ? (this.pendingZoom = zz, !1) : (this.pendingZoom = null, (0, wz.lg)(tz, 0, zz, 1))
      }
      Zm(zz) {
        const tz = this.stopped() ? null : this.cmd;
        return null !== tz && (0, wz.eg)(tz, 0, zz ? 1 : 0)
      }
      respawn() {
        const zz = this.sessionLive ? this.sendCmd() : null;
        return null !== zz && (tz = zz, sz = 0, (0, Lt.c)(), (0, wz.Df)(tz, sz));
        var tz, sz
      }
      bindCustomButtonKeys(zz) {
        this.customButtons.set(zz)
      }
      pressCustomButton(zz, tz) {
        const sz = this.sessionLive ? this.sendCmd() : null;
        return null !== sz && GF(sz, zz, tz)
      }
      padMove(zz, tz, sz, Fz, Wz, Xz) {
        const Oz = this.liveCmd();
        return null !== Oz && (0, wz.df)(Oz, 0, zz, tz, sz, Fz, Wz, Xz)
      }
      thirdPersonFor(zz) {
        const tz = this.liveCmd();
        return null !== tz && (0, wz.qg)(tz, 0, null !== zz && void 0 !== zz ? zz : 1 / 0)
      }
      send(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Fz = 0 !== this.openSocket || this.sessionLive ? this.sendCmd() : null;
        return null !== Fz && lt(Fz, sz ? Nz.ed : 0, zz, (0, Mz.f)(tz))
      }
      socketAttached(zz) {
        this.openSocket = zz, this.socketLeftSinceAttach = !1
      }
      socketDetached(zz) {
        this.openSocket === zz && (this.openSocket = 0)
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
      attach(zz) {
        const tz = () => zz.isStopped;
        this.stopped = tz, this.cmd = zz.rings.cmd, this.promptWatchSent = "off", this.writePromptWatch(), this.customButtons.attached(), this.writeCustomButtons();
        const sz = this.api.apiView;
        this.overflowGen = wz.t.eventOverflowGen(sz, 0), this.resyncOwed = 0 !== wz.t.eventOverflowMask(sz, 0), zz.setGameHost(this), zz.setEventWalker((zz => {
          this.api.walk(zz, this, tz)
        }))
      }
      watchPromptPick(zz) {
        this.promptWatch = zz, this.writePromptWatch()
      }
      get promptEntity() {
        return "off" === this.promptWatch || this.stopped() ? null : dF(wz.t.promptEntity(this.api.apiView, 0))
      }
      get interactLabel() {
        return "touch" !== this.promptWatch || this.stopped() ? wz.wc.None : wz.t.interactLabel(this.api.apiView, 0)
      }
      get interactIcon() {
        return "touch" !== this.promptWatch || this.stopped() ? 0 : wz.t.interactIcon(this.api.apiView, 0)
      }
      closeGame() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        (0 === zz || zz >= this.openSocket) && (this.openSocket = 0), this.closedThrough = Math.max(this.closedThrough, zz, this.activeConn), this.activeConn = 0, this.endSession(), this.endGameGrants(), this.dropGameCamera()
      }
      gameCamera(zz) {
        0 !== this.activeConn && this.scriptedCamera.settingsChanged(zz)
      }
      netEvent(zz) {
        "connection" === zz.type ? zz.phase === Nz.F.Activated && zz.conn !== this.activeConn && zz.conn > this.closedThrough ? (this.endSession(), this.activeConn = zz.conn, this.endGameGrants(), this.dropGameCamera()) : zz.phase !== Nz.F.Left && zz.phase !== Nz.F.Closed || zz.conn !== this.activeConn ? zz.phase === Nz.F.Resumed && 0 !== this.activeConn && zz.conn > this.closedThrough && (this.activeConn = zz.conn) : this.closeGame() : zz.conn === this.activeConn && 0 !== zz.conn && (zz.RO === PF.r ? this.gunHit(zz.payload) : zz.RO === Ss.fc.EditItemCraftingRecipes || zz.RO === PF.S ? this.items.touch() : (this.serverOptions(zz), this.gameMessage(zz)));
        const tz = this.options.onNetEvent;
        tz && this.guard((() => {
          tz(zz)
        }))
      }
      serverOptions(zz) {
        const tz = this.options.serverOptions,
          sz = tz ? this.decoded(Vs, zz) : null;
        tz && sz && this.guard((() => {
          tz.applyNewClientOptions(sz)
        }))
      }
      gameMessage(zz) {
        let tz = null;
        try {
          tz = function(zz) {
            if ("message" !== zz.type || zz.RO !== Ss.fc.GameCodeMessage || zz.payloadKind !== Nz.Wb.Msgpack) return null;
            const tz = (0, Mz.c)(zz.payload);
            if (null === tz || "object" !== typeof tz || "string" !== typeof tz.messageType) throw new Error("GameCodeMessage without a messageType");
            return tz
          }(zz)
        } catch (sz) {
          this.sessionLive && this.onError(sz)
        }
        if (tz) {
          const {
            messageType: zz,
            data: sz
          } = tz;
          if ((0, Zz.h)(zz)) return void this.guard((() => {
            (0, Zz.e)(zz, sz)
          }));
          "freeCamPerms" === zz && this.freeCam.setGame(sz) && this.writeFreeCam(), this.sessionLive && this.round(this.receivers, (tz => {
            tz.onReceivedMessageFromServer(zz, sz)
          }))
        }
      }
      decoded(zz, tz) {
        try {
          return zz(tz)
        } catch (sz) {
          return this.onError(sz), null
        }
      }
      setClientFreeCameraGrant(zz, tz) {
        this.freeCam.setClient(zz, tz), this.writeFreeCam()
      }
      freeCameraAllowed() {
        return 0 !== this.freeCam.perms()
      }
      setFreeCameraMovesFly(zz) {
        this.freeCam.setMovesFly(zz), this.writeFreeCam()
      }
      setBlockHighlight(zz) {
        this.highlight = zz, this.highlightOwed = !0, this.writeOwedHighlight()
      }
      writeOwedHighlight() {
        const zz = this.liveCmd();
        if (null === zz || !this.highlightOwed) return;
        const tz = this.highlight;
        this.highlightOwed = null === tz ? !(0, wz.Pe)(zz, 0, AF, AF, 0) : !(0, wz.Pe)(zz, 0, tz.pos, tz.normal, 1)
      }
      localPlayerBound(zz) {
        var tz, sz;
        if (0 === this.activeConn || this.sessionLive && zz === this.boundId) return;
        const Fz = this.sessionLive;
        let Wz, Xz, Oz, oz;
        this.endSession(), Fz && this.restartGameCamera();
        try {
          var vz;
          this.session = null;
          const zz = this.options.sessionInfo(this.activeConn);
          if (this.session = zz, !zz) return;
          Wz = zz.gameNameWithVariation, Xz = null !== (vz = (0, Cz.Mb)(Wz)) && void 0 !== vz ? vz : void 0, Oz = (0, ez.v)(zz.lobbyName), oz = (0, ez.L)(zz.lobbyName)
        } catch (Bz) {
          return void this.onError(Bz)
        }
        const Uz = {
          localPlayerId: String(zz)
        };
        let Kz = {},
          uz = {};
        try {
          var Nz, bz;
          Kz = null !== (Nz = null === (bz = this.options.gameFactory((0, Cz.Tb)(Wz))) || void 0 === bz ? void 0 : bz(oz, Oz, Xz, Uz)) && void 0 !== Nz ? Nz : {}
        } catch (Bz) {
          this.Iw(Bz)
        }
        try {
          var wz, Dz;
          uz = {
            ...null === (wz = (Dz = this.options).defaultPlugins) || void 0 === wz ? void 0 : wz.call(Dz, oz, Oz, Xz, Uz),
            ...Kz.plugins
          }
        } catch (Bz) {
          this.Iw(Bz)
        }
        const gz = [Kz, ...Object.values(uz)];
        this.owners = gz, this.tickers = gz.filter((zz => void 0 !== zz.wN)), this.renderers = gz.filter((zz => void 0 !== zz.onAfterRender)), this.receivers = gz.filter((zz => void 0 !== zz.onReceivedMessageFromServer)), this.writeAltVeto(gz), this.writeHooks(gz), this.writePublicLobby(oz), this.writeLocalDbId(null !== (tz = null === (sz = this.session) || void 0 === sz ? void 0 : sz.playerDbId) && void 0 !== tz ? tz : null), this.boundId = zz, this.sessionLive = !0, this.generation++, null !== this.pendingZoom && this.setCameraZoom(this.pendingZoom), this.highlightOwed ||= null !== this.highlight, this.writeOwedHighlight(), this.round(gz, (zz => {
          var tz;
          null === (tz = zz.onCreate) || void 0 === tz || tz.call(zz, this.clientApi)
        }));
        const Hz = this.generation;
        setTimeout((() => {
          Hz === this.generation && !0 === this.tables.getClientOption("creative") && NF(this.tables)
        }), 0)
      }
      chunkSlot(zz, tz, sz, Fz, Wz, Xz) {
        this.chunks.apply(zz, tz, sz, Fz, Wz, Xz)
      }
      entityAdded(zz) {
        var tz;
        this.entityInfo.stale(zz), null === (tz = this.options.replayEntities) || void 0 === tz || tz.entityAdded(zz)
      }
      entityInfoChanged(zz) {
        var tz;
        this.entityInfo.stale(zz), null === (tz = this.options.replayEntities) || void 0 === tz || tz.entityInfoChanged(zz)
      }
      afterPrescan() {
        this.items.refresh(), this.entityInfo.refresh(), this.api.rereadDirectory(), this.chunks.refresh(), this.live.refresh()
      }
      tickEnd() {
        if (this.ticks++, this.tickers.length > 0) {
          const zz = performance.now();
          this.round(this.tickers, hF), (0, WF.d)(performance.now() - zz)
        }
      }
      afterWalk(zz) {
        this.ackEventOverflow(), this.clientApi.flushOwed(), this.writeOwedHighlight();
        const tz = this.options.replayEntities;
        tz && this.guard((() => {
          this.entityInfoWatch.want(ns, tz.wantsWatch), tz.flush(this.entityInfoWatch.on)
        }));
        const sz = (0, WF.k)(zz, wz.t.frameMs(this.api.apiView, 0));
        if (null !== sz) {
          const zz = this.renderFrame;
          this.guard((() => {
            (0, ps.e)().turnDamageIndicators(zz.cameraHeading)
          })), this.guard((() => {
            this.clientApi.slideRoute(sz)
          })), this.round(this.renderers, (tz => {
            tz.onAfterRender(sz, zz)
          }))
        }
        this.writeFreeCam();
        try {
          this.scriptedCamera.afterFrame(null !== sz)
        } catch (Wz) {
          this.Iw(Wz)
        }
        this.showZoom(), this.items.flush(this.Iw), this.writePromptWatch(), this.writeCustomButtons();
        const Fz = this.ticks;
        this.ticks = 0, (0, WF.i)(Fz, zz, sz, this.Iw)
      }
      entityRemoved(zz) {
        this.live.despawned(zz), this.entityInfo.removed(zz)
      }
      ackEventOverflow() {
        const zz = this.api.apiView,
          tz = wz.t.eventOverflowGen(zz, 0),
          sz = tz - this.overflowGen >>> 0;
        if (0 === sz && !this.resyncOwed) return;
        this.overflowGen = tz;
        const Fz = wz.t.eventOverflowMask(zz, 0),
          Wz = this.cmd;
        0 === Fz || null === Wz || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, wz.Fe)(Wz, 0, Fz);
        const Xz = this.options.onEventOverflow;
        0 !== sz && Xz && this.guard((() => {
          Xz(Fz, sz)
        }))
      }
      gameCall(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz) {
        if (zz === wz.ic.Director) try {
          return this.scriptedCamera.call(tz, sz, Fz, Wz, Xz, Oz)
        } catch (Uz) {
          return this.Iw(Uz), wz.kb.None
        }
        if (!this.sessionLive || void 0 !== this.fault) return zz === wz.ic.AltVeto ? wz.j.Allow : 0;
        try {
          return this.callGames(zz, tz, sz, Fz, Wz, Xz, Oz, oz)
        } catch (Uz) {
          throw (0, bz.k)(Uz) && (this.fault = Uz), Uz
        }
      }
      takeFault() {
        const zz = this.fault;
        return this.fault = void 0, zz
      }
      callGames(zz, tz, sz, Fz, Wz, Xz, Oz, oz) {
        this.api.rereadDirectory(), this.chunks.touch(), this.items.refresh(), this.live.refresh(), this.entityInfo.inCoreCall();
        const {
          tables: vz
        } = this.options, Uz = String(this.boundId);
        switch (zz) {
          case wz.ic.AltVeto:
          case wz.ic.AltAction: {
            const oz = 0 !== Oz,
              [Kz, uz, Nz] = oz ? [tz, sz, Fz] : [void 0, void 0, void 0],
              bz = oz ? vz.nameOfId(Wz) : "Air",
              Dz = dF(Xz);
            if (zz === wz.ic.AltAction) return this.first((zz => {
              var tz;
              return null === (tz = zz.onPlayerAltAction) || void 0 === tz ? void 0 : tz.call(zz, Uz, Kz, uz, Nz, bz, Dz)
            })), 0;
            const gz = this.first((zz => {
              var tz;
              return null === (tz = zz.onPlayerAttemptAltAction) || void 0 === tz ? void 0 : tz.call(zz, Uz, Kz, uz, Nz, bz, Dz)
            }));
            return "preventAction" === gz ? wz.j.Prevent : "preventPlacement" === gz ? wz.j.PreventPlacement : wz.j.Allow
          }
          case wz.ic.Click: {
            const zz = oz,
              Kz = 0 !== (zz & wz.U.Alt),
              uz = 0 !== (zz & wz.U.HasPos),
              Nz = uz ? vz.nameOfId(Wz) : "Air",
              [bz, Dz, gz] = uz ? [tz, sz, Fz] : [null, null, null],
              Hz = dF(Xz),
              Bz = 0 !== (zz & wz.U.Up),
              Pz = dF(Oz);
            if (0 === (zz & wz.U.AttackOnly) && this.first((zz => {
                var tz, sz;
                return Bz ? null === (tz = zz.onPlayerClickUp) || void 0 === tz ? void 0 : tz.call(zz, Uz, Kz, bz, Dz, gz, Nz, Hz) : null === (sz = zz.onPlayerClick) || void 0 === sz ? void 0 : sz.call(zz, Uz, Kz, bz, Dz, gz, Nz, Hz)
              })), !Bz && !Kz && null !== Pz) {
              const zz = this.clientApi.getPositionView(Pz),
                tz = zz ? [zz[0], zz[1], zz[2]] : [0, 0, 0];
              this.first((zz => {
                var sz;
                return null === (sz = zz.onPlayerAttackEntity) || void 0 === sz ? void 0 : sz.call(zz, Uz, Pz, tz)
              }))
            }
            return 0
          }
          case wz.ic.ChangeBlock: {
            const zz = vz.nameOfId(Wz),
              Oz = vz.nameOfId(Xz);
            return this.first((Wz => {
              var Xz;
              return null === (Xz = Wz.onPlayerChangeBlock) || void 0 === Xz ? void 0 : Xz.call(Wz, Uz, tz, sz, Fz, zz, Oz)
            })), 0
          }
          case wz.ic.DropItem: {
            const zz = vz.nameOfId(tz);
            return this.first((tz => {
              var Wz;
              return null === (Wz = tz.onPlayerDropItem) || void 0 === Wz ? void 0 : Wz.call(tz, Uz, zz, sz, Fz)
            })), 0
          }
          default:
            return this.onError(new Error(`Unknown game call kind ${zz}`)), 0
        }
      }
      changeBlockFail(zz, tz, sz, Fz, Wz, Xz, Oz) {
        const oz = Wz === wz.Xc ? null : TF.decode(this.api.eventBytes(Xz, Math.min(Wz, Oz)));
        this.failures.push({
          tO: [zz, tz, sz],
          sO: Fz,
          FO: oz
        })
      }
      changeBlockFailEnd() {
        const zz = this.failures;
        this.failures = [], this.sessionLive && this.round(this.owners, (tz => {
          var sz;
          null === (sz = tz.onChangeBlockFail) || void 0 === sz || sz.call(tz, zz)
        })), this.Yg("EditBoard", {
          pos: null
        }), this.Yg("EditCodeBlock", {
          pos: null,
          canChangePos: null
        })
      }
      inventoryEvent(zz, tz, sz, Fz, Wz, Xz) {
        zz === wz.zc.ChestOpened ? this.items.chestOpened(sz, Fz, Wz) : zz !== wz.zc.Synced && zz !== wz.zc.ChestClosed && zz !== wz.zc.ChestRefreshed || this.items.touch(), this.guard((() => {
          ! function(zz, tz, sz, Fz) {
            switch (zz) {
              case wz.zc.Synced:
                Oz.o.Yg("syncedInvenFromServer");
                break;
              case wz.zc.ChestOpened:
              case wz.zc.ChestClosed:
                Oz.o.Yg("chestToggleFromServer", zz === wz.zc.ChestOpened, !0);
                break;
              case wz.zc.ChestRefreshed:
                Oz.o.Yg("chestRefreshedFromServer");
                break;
              case wz.zc.EnchantingTable:
                Oz.o.Yg("enchantingTable", {
                  yK: Fz,
                  position: sz
                });
                break;
              case wz.zc.HotbarRequest:
                Oz.o.Yg("setSelectedInventorySlotI", tz, !0);
                break;
              case wz.zc.Scrolled:
                Oz.o.Yg("ScrollInventorySlot", tz);
                break;
              case wz.zc.NumberKey:
                Oz.o.Yg("numkeyPressed", tz + 1);
                break;
              case wz.zc.DropRequested:
                Oz.o.Yg("DropInvenItem", 0 !== tz);
                break;
              default:
                throw new bz.e(`InventoryEvent of no kind: what ${zz}`)
            }
          }(zz, tz, [sz, Fz, Wz], Xz)
        }))
      }
      heldItemChanged() {
        this.items.touch()
      }
      shotDamage(zz, tz, sz, Fz) {
        this.Yg("shotPlayer", {
          playerId: String(zz),
          damage: tz,
          wasCrit: 0 !== Fz,
          distance: sz
        })
      }
      localHurt(zz, tz) {
        this.Yg("closeShopOnDamaged", null), this.guard((() => {
          Oz.o.Yg("damagedByOtherPlayer", {
            PF: null,
            direction: Number.isNaN(tz) ? null : tz,
            lW: zz
          })
        }))
      }
      attackHit(zz, tz, sz, Fz, Wz) {
        this.guard((() => {
          Oz.o.Yg("yourAttackHit", {
            Hs: Fz,
            screenPos: this.renderFrame.projectDirectionToScreenPos([zz, tz, sz]),
            hitSelf: Wz
          })
        }))
      }
      physicsType(zz) {
        this.Yg("PlayerPhysicsTypeUpdate", zz)
      }
      vehicleEffect(zz, tz, sz, Fz, Wz) {
        this.guard((() => {
          zz === Nz.vd.UPDATE ? (0, Tz.i)(tz, {
            icon: sz,
            level: Fz,
            displayName: null,
            durationMs: Wz
          }) : Gz.c.remove(tz)
        }))
      }
      zoomChanged(zz) {
        this.zoom = zz, this.zoomUnshown = !0
      }
      zoomDisabled() {
        this.Yg("showBottomMessage", {
          message: "Zoom is disabled",
          timeoutLength: 2e3,
          type: "Error"
        })
      }
      showZoom() {
        const zz = this.scriptedCamera.holdsView();
        !this.zoomUnshown || zz && this.zoomHeld || (this.zoomUnshown = !1, this.Yg("cameraZoomSet", this.zoom)), this.zoomHeld = zz
      }
      gunHit(zz) {
        this.guard((() => {
          const {
            PF: tz,
            rF: sz
          } = (0, BF.c)(PF.r, zz);
          Oz.o.Yg("damagedByOtherPlayer", {
            PF: tz,
            direction: sz
          })
        }))
      }
      uiEvent(zz, tz, sz, Fz, Wz, Xz, Oz, oz) {
        this.guard((() => {
          fs(zz, tz, [sz, Fz, Wz], Xz, this.items, this.options.tables, (() => TF.decode(this.api.eventBytes(Oz, oz))))
        }))
      }
      writeAltVeto(zz) {
        const tz = this.cmd;
        if (!tz) return;
        let sz;
        try {
          sz = function(zz, tz) {
            const sz = new Set;
            let Fz = !1;
            for (const Wz of zz)
              if (Wz.onPlayerAttemptAltAction) {
                if (Fz = !0, !Wz.altVetoBlocks) return {
                  mode: wz.oe.All,
                  roots: []
                };
                for (const zz of Wz.altVetoBlocks) sz.add(tz.getMetaInfo(zz).rootId)
              } return Fz ? sz.size > wz.Mc ? {
              mode: wz.oe.All,
              roots: []
            } : {
              mode: wz.oe.Filter,
              roots: [...sz]
            } : {
              mode: wz.oe.Off,
              roots: []
            }
          }(zz, this.options.tables)
        } catch (Wz) {
          this.onError(Wz), sz = {
            mode: wz.oe.All,
            roots: []
          }
        }
        if (sz.mode === wz.oe.Off && !this.vetoSet) return;
        const Fz = new Uint8Array(new Uint32Array(sz.roots).buffer);
        (0, wz.Of)(tz, 0, sz.mode, sz.roots.length, Fz) ? this.vetoSet = sz.mode !== wz.oe.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
      }
      endGameGrants() {
        this.freeCam.clearGame(), this.writeFreeCam()
      }
      writeFreeCam() {
        this.stopped() || this.freeCam.write(this.cmd)
      }
      writeHooks(zz) {
        const tz = this.cmd;
        if (!tz) return;
        const sz = function(zz) {
          let tz = 0;
          for (const sz of zz) sz.onPlayerAltAction && (tz |= 1 << wz.ic.AltAction), (sz.onPlayerClick || sz.onPlayerClickUp || sz.onPlayerAttackEntity) && (tz |= 1 << wz.ic.Click), sz.onPlayerChangeBlock && (tz |= 1 << wz.ic.ChangeBlock), sz.onPlayerDropItem && (tz |= 1 << wz.ic.DropItem);
          return tz
        }(zz);
        (0 !== sz || this.hooksSet) && ((0, wz._f)(tz, 0, sz) ? this.hooksSet = 0 !== sz : this.onError(new Error("SetHooks didn't fit the command ring")))
      }
      writeCustomButtons() {
        const zz = this.cmd;
        zz && !this.stopped() && this.customButtons.write(zz)
      }
      writePromptWatch() {
        const zz = this.cmd,
          tz = this.promptWatch;
        tz !== this.promptWatchSent && zz && !this.stopped() && (0, wz.tg)(zz, 0, yF[tz]) && (this.promptWatchSent = tz)
      }
      writePublicLobby(zz) {
        const tz = this.cmd;
        tz && zz !== this.writtenPublicLobby && ((0, wz.hg)(tz, 0, zz ? 1 : 0) ? this.writtenPublicLobby = zz : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
      }
      writeLocalDbId(zz) {
        const tz = this.cmd;
        tz && ((0, wz.$f)(tz, 0, null === zz ? 0 : 1, null === zz ? jF : cF.encode(zz)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
      }
      first(zz) {
        const tz = this.generation;
        for (const Fz of this.owners) {
          if (tz !== this.generation) break;
          try {
            const tz = zz(Fz);
            if (void 0 !== tz) return tz
          } catch (sz) {
            this.Iw(sz)
          }
        }
      }
      Yg(zz, tz) {
        this.guard((() => {
          Oz.o.Yg(zz, tz)
        }))
      }
      dropGameCamera() {
        try {
          this.scriptedCamera.reset()
        } catch (zz) {
          this.Iw(zz)
        }
      }
      restartGameCamera() {
        try {
          this.scriptedCamera.restart()
        } catch (zz) {
          this.Iw(zz)
        }
      }
      endSession() {
        if (!this.sessionLive) return;
        this.sessionLive = !1;
        const zz = this.owners;
        let tz;
        if (this.owners = this.tickers = this.renderers = this.receivers = [], this.generation++, !this.stopped()) try {
          this.writeAltVeto([]), this.writeHooks([]), this.writePublicLobby(!1), this.writeLocalDbId(null)
        } catch (Fz) {
          tz = Fz
        }
        try {
          this.entityInfo.sessionEnded()
        } catch (Fz) {
          tz ??= Fz
        }
        this.round(zz, QF, !0);
        try {
          this.particles.sessionEnded() || this.onError(new Error("ParticleStopAll didn't fit the command ring"))
        } catch (Fz) {
          tz ??= Fz
        }
        try {
          this.clientApi.disposeGameOutput()
        } catch (Fz) {
          tz ??= Fz
        }
        const sz = this.options.onSessionEnd;
        if (sz) try {
          sz()
        } catch (Fz) {
          this.onError(Fz)
        }
        void 0 !== tz && this.Iw(tz)
      }
      round(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Fz = this.generation;
        for (const Xz of zz) {
          if (Fz !== this.generation) break;
          try {
            tz(Xz)
          } catch (Wz) {
            sz ? this.onError(Wz) : this.Iw(Wz)
          }
        }
      }
      guard(zz) {
        try {
          zz()
        } catch (tz) {
          this.Iw(tz)
        }
      }
    }

    function dF(zz) {
      return zz === wz.$c ? null : String(zz)
    }

    function hF(zz) {
      zz.wN(Nz.od)
    }

    function QF(zz) {
      var tz;
      null === (tz = zz.onClose) || void 0 === tz || tz.call(zz)
    }

    function kF(zz, tz) {
      zz.watch((() => {
        const sz = function(zz) {
          let tz = 0;
          const sz = Math.min(XF, zz.length);
          for (let Wz = 0; Wz < sz; Wz++) {
            var Fz;
            const sz = null === (Fz = zz.slot(Wz)) || void 0 === Fz ? void 0 : Fz.typeObj,
              Xz = sz ? (0, FF.gunTypeOf)(sz.id) : void 0;
            void 0 !== Xz && (tz |= 1 << Pt[Xz])
          }
          return tz
        }(zz);
        0 !== sz && (tz.preload(sz), tz.preload(1 << rt))
      }))
    }
    var iF = sz(4488),
      LF = sz(36199);

    function lF(zz) {
      const tz = new iF.Howl({
          ...(0, LF.e)(zz),
          pool: 15,
          preload: !1
        }),
        sz = tz.load.bind(tz);
      return tz.load = () => (tz._preload = !0, sz()), tz
    }

    function nF(zz, tz, sz) {
      const Fz = zz.listener;
      if (Fz.positionX) aF(Fz.positionX, tz, sz, 0), aF(Fz.positionY, tz, sz, 1), aF(Fz.positionZ, tz, sz, 2), aF(Fz.forwardX, tz, sz, 3), aF(Fz.forwardY, tz, sz, 4), aF(Fz.forwardZ, tz, sz, 5), aF(Fz.upX, tz, sz, 6), aF(Fz.upY, tz, sz, 7), aF(Fz.upZ, tz, sz, 8);
      else {
        let zz = !1;
        for (let Fz = 0; Fz < 9; Fz++) zz ||= tz[Fz] !== sz[Fz];
        zz && (Fz.setPosition(tz[0], tz[1], tz[2]), Fz.setOrientation(tz[3], tz[4], tz[5], tz[6], tz[7], tz[8]), sz.set(tz))
      }
    }

    function aF(zz, tz, sz, Fz) {
      tz[Fz] !== sz[Fz] && (zz.value = tz[Fz], sz[Fz] = tz[Fz])
    }
    class qF {
      constructor() {
        this.pose = new Float64Array(9), this.written = new Float64Array(9).fill(Number.NaN), this.watchedCtx = void 0
      }
      apply(zz) {
        this.pose.set(zz);
        const tz = iF.Howler.ctx;
        return !!tz && (tz !== this.watchedCtx && (this.watchedCtx = tz, this.written.fill(Number.NaN), tz.addEventListener("statechange", (() => {
          "running" === tz.state && nF(tz, this.pose, this.written)
        }))), "running" === tz.state && nF(tz, zz, this.written), !0)
      }
    }
    var SF = sz(36053),
      VF = sz(38601);
    let RF = null,
      pF = null;

    function fF() {
      return null === RF && (RF = document.createElement("div"), RF.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none", document.body.append(RF)), RF
    }

    function EF() {
      return pF ??= new VF.c(new SF.d(fF)), pF
    }

    function zW() {
      var zz;
      null === (zz = pF) || void 0 === zz || zz.clear(), tW(null)
    }

    function tW(zz) {
      Fz.b.get("scriptedCameraFacing") !== zz && Fz.b.set({
        scriptedCameraFacing: zz
      })
    }
    var sW = sz(9023),
      FW = sz(8976),
      WW = sz(38620),
      XW = sz(39861),
      OW = sz(2965);
    const oW = Object.entries(wz.gc).reduce(((zz, tz) => {
      let [sz, Fz] = tz;
      return zz[Fz] = sz, zz
    }), []);

    function vW(zz, tz) {
      var sz;
      return 0 !== ((null !== (sz = zz.itemFlags[tz]) && void 0 !== sz ? sz : 0) & wz.Bc.Stackable)
    }
    const UW = /^(0|[1-9][0-9]*)$/,
      KW = {
        displayName: (zz, tz) => (0, FF.displayNameOf)(tz),
        description: (zz, tz) => (0, FF.descriptionOf)(tz),
        type: (zz, tz) => (0, FF.itemTypeOf)(tz),
        clipSize: (zz, tz) => (0, FF.clipSizeOf)(tz),
        armourReduction: (zz, tz) => (0, FF.armourReductionOf)(tz),
        scopeType: (zz, tz) => (0, FF.scopeTypeOf)(tz),
        stackable: vW,
        harvestType: (zz, tz) => oW[zz.blockHarvestTypes[tz]],
        harvestLevel: (zz, tz) => {
          const sz = zz.blockHarvestLevels[tz];
          return sz === wz.Hc ? void 0 : sz
        },
        harvests: (zz, tz) => {
          var sz;
          const Fz = null !== (sz = zz.itemHarvests[tz]) && void 0 !== sz ? sz : 0;
          return 0 !== Fz ? oW[Fz] : void 0 === (0, FF.harvestsNullLevelOf)(tz) ? void 0 : null
        },
        level: (zz, tz) => {
          var sz, Fz;
          const Wz = null !== (sz = zz.itemLevels[tz]) && void 0 !== sz ? sz : wz.Hc;
          return Wz !== wz.Hc ? Wz : null !== (Fz = (0, FF.harvestsNullLevelOf)(tz)) && void 0 !== Fz ? Fz : void 0
        }
      };

    function uW(zz, tz, sz) {
      return bW(new Uint8Array(Math.floor(zz.length / tz)), zz, tz, sz)
    }

    function NW(zz, tz, sz) {
      return bW(new Uint16Array(Math.floor(zz.length / tz)), zz, tz, sz)
    }

    function bW(zz, tz, sz, Fz) {
      const Wz = new DataView(tz.buffer, tz.byteOffset, tz.byteLength);
      for (let Xz = 0; Xz < zz.length; Xz++) zz[Xz] = Fz(Wz, Xz * sz);
      return zz
    }
    class wW {
      constructor(zz, tz) {
        this.options = tz, this.metas = [], this.types = new Map, this.props = void 0, this.rootIdOf = zz => {
          const tz = this.idOf(zz);
          if (void 0 === tz) throw new Error(`No item is named ${zz}, an item's root`);
          return tz
        };
        const sz = tz => {
            const sz = tz();
            return new Uint8Array(zz.memory().buffer, zz.scratch(), sz).slice()
          },
          Fz = (new TextDecoder).decode(sz((() => zz.queries.itemNames()))).split("\n"),
          Wz = sz((() => zz.queries.blockProps())),
          Xz = sz((() => zz.queries.itemProps()));
        this.props = {
          blockFlags: uW(Wz, wz.E.BYTES, wz.E.flags),
          blockHarvestTypes: uW(Wz, wz.E.BYTES, wz.E.harvestType),
          blockHarvestLevels: uW(Wz, wz.E.BYTES, wz.E.harvestLevel),
          blockAttachedTops: NW(Wz, wz.E.BYTES, wz.E.attachedTop),
          itemFlags: uW(Xz, wz.Dc.BYTES, wz.Dc.flags),
          itemHarvests: uW(Xz, wz.Dc.BYTES, wz.Dc.harvests),
          itemLevels: uW(Xz, wz.Dc.BYTES, wz.Dc.level)
        }, (0, OW.k)(Object.freeze(Fz)), (0, XW.e)()
      }
      idOf(zz) {
        if ("number" === typeof zz) return void 0 === (0, OW.d)(zz) ? void 0 : zz;
        const tz = (0, OW.b)(zz);
        return void 0 === tz && UW.test(zz) ? void 0 === (0, OW.d)(+zz) ? void 0 : +zz : tz
      }
      getMetaInfo(zz) {
        if (!zz || zz === sW.c) return sW.g;
        const tz = this.idOf(zz);
        if (void 0 === tz) throw new Error(`Item ${zz} not found in registry`);
        return this.metaOf(tz)
      }
      blockRootId(zz) {
        return 0 !== zz && void 0 !== (0, OW.d)(zz) ? this.metaOf(zz).rootId : zz
      }
      metaOf(zz) {
        return this.metas[zz] ??= (0, FW.l)((0, OW.d)(zz), zz, this.rootIdOf, (0, FF.rootMetaDescOf)(zz))
      }
      getItemId(zz) {
        if (!zz || zz === sW.c) return 0;
        const tz = this.idOf(zz);
        if (void 0 === tz) throw new Error(`Invalid block name. You sent ${zz}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
        return tz
      }
      getItemName(zz) {
        if (!zz || zz === sW.c) return sW.c;
        const tz = this.idOf(zz);
        if (void 0 === tz) throw new Error(`Item ${zz} not found in registry`);
        return (0, OW.d)(tz)
      }
      blockNameToBlockId(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (zz === sW.c) return 0;
        let sz = this.idOf(zz);
        if (void 0 === sz || !this.isBlockId(sz)) {
          const tz = zz.indexOf("|"),
            Fz = tz > 0 ? (0, OW.b)(zz.slice(0, tz)) : void 0;
          sz = void 0 !== Fz && this.isBlockId(Fz) && (0, FF.rootMetaDescOf)(Fz) === zz ? Fz : void 0
        }
        if (void 0 !== sz) return sz;
        if (!tz) throw new Error(`Invalid block name. You sent ${zz}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
        return null
      }
      isBlockId(zz) {
        return zz > 0 && zz < this.props.blockFlags.length
      }
      nameOfId(zz) {
        return 0 !== zz && (0, OW.d)(zz) || sW.c
      }
      itemType(zz) {
        const tz = zz ? this.idOf(zz) : void 0;
        if (!tz) return null;
        let sz = this.types.get(tz);
        return void 0 === sz && (sz = Object.freeze({
          id: tz,
          name: (0, OW.d)(tz),
          meta: this.getMetaInfo(tz),
          stackable: vW(this.props, tz),
          type: (0, FF.itemTypeNameOf)(tz),
          clipSize: (0, FF.clipSizeOf)(tz),
          scopeType: (0, FF.scopeTypeOf)(tz),
          showsAimingUi: (0, FF.showsAimingUi)(tz)
        }), this.types.set(tz, sz)), sz
      }
      getItemStat(zz, tz) {
        if (WW.c.has(tz)) {
          const sz = "minChargeStateToUse" === tz ? this.getMetaInfo(zz).rootName : this.getItemName(zz),
            Fz = this.options.get((0, WW.e)(sz, tz));
          if (null !== Fz && void 0 !== Fz) return Fz
        }
        return this.defaultStat(zz, tz, this.statOf(tz))
      }
      getDisplayName(zz) {
        return this.getItemStat(zz, "displayName")
      }
      getDefaultItemStat(zz, tz) {
        return this.defaultStat(zz, tz, this.statOf(tz))
      }
      statOf(zz) {
        const tz = KW[zz];
        return void 0 === tz && function(zz, tz) {
          throw new Error(`ClientApi.${zz} is not available yet in the wasm client (${tz})`)
        }(`getItemStat("${zz}")`, `a table of the stat: the wasm client answers ${Object.keys(KW).join(", ")}`), tz
      }
      defaultStat(zz, tz, sz) {
        const Fz = this.idOf(zz),
          Wz = void 0 === Fz ? void 0 : sz(this.props, Fz);
        return null !== Wz && void 0 !== Wz || "displayName" !== tz ? Wz : this.getItemName(zz)
      }
      getClientOption(zz) {
        return this.options.get(zz)
      }
      getGunStats(zz) {
        return this.getClientOption(`${zz}GunStats`)
      }
      watchClientOption(zz, tz) {
        return this.options.subscribe(zz, tz)
      }
      isSolidBlockId(zz) {
        var tz;
        return 0 !== ((null !== (tz = this.props.blockFlags[zz]) && void 0 !== tz ? tz : 0) & wz.A.Solid)
      }
      isStackableId(zz) {
        return vW(this.props, zz)
      }
      isFluidBlockId(zz) {
        var tz;
        return 0 !== ((null !== (tz = this.props.blockFlags[zz]) && void 0 !== tz ? tz : 0) & wz.A.Fluid)
      }
      canPlaceOverBlockId(zz) {
        var tz;
        return 0 !== ((null !== (tz = this.props.blockFlags[zz]) && void 0 !== tz ? tz : 0) & wz.A.PlaceOver)
      }
      attachedTopOf(zz) {
        var tz;
        return null !== (tz = this.props.blockAttachedTops[zz]) && void 0 !== tz ? tz : 0
      }
      isDroplessBlockId(zz) {
        return (0, FF.dropsNothing)(zz)
      }
    }

    function DW(zz, tz) {
      const sz = new Map;
      return (Fz, Wz) => {
        const Xz = tz.idOf(Fz),
          Oz = void 0 === Xz ? null : (Fz => {
            let Wz = sz.get(Fz);
            if (void 0 === Wz) {
              const Xz = zz.queries.salvageRecipe(Fz),
                Oz = new DataView(zz.memory().buffer, zz.scratch(), Xz),
                oz = [];
              for (let zz = 0; zz + wz.be.BYTES <= Xz; zz += wz.be.BYTES) oz.push(Object.freeze({
                item: tz.nameOfId(wz.be.item(Oz, zz)),
                amt: wz.be.amount(Oz, zz)
              }));
              Wz = 0 === oz.length ? null : Object.freeze(oz), sz.set(Fz, Wz)
            }
            return Wz
          })(Xz);
        if (null === Oz || void 0 === Wz) return Oz;
        const oz = Wz <= 0 ? 1 : Wz;
        return Oz.map((zz => {
          let {
            item: tz,
            amt: sz
          } = zz;
          return {
            item: tz,
            amt: sz * oz
          }
        }))
      }
    }
    var gW = sz(40013),
      HW = sz(36352),
      BW = sz(36344),
      PW = sz(36394),
      rW = sz(35983),
      YW = sz(39808),
      xW = sz(41652);
    const mW = -1,
      JW = new Uint8Array(0),
      IW = new TextEncoder;

    function CW(zz) {
      if (null === zz) return null;
      const tz = IW.encode(zz);
      return tz.byteLength < Nz.tc ? tz : tz.subarray(0, Nz.tc - 1)
    }
    class eW {
      constructor(zz) {
        this.deps = zz, this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = mW, this.keyframesSettled = !1, this.reloadFrom = mW
      }
      reloadKeyframes() {
        var zz, tz;
        this.keyframesVersion = mW, this.reloadFrom = null !== (zz = null === (tz = this.view()) || void 0 === tz ? void 0 : tz.version) && void 0 !== zz ? zz : mW
      }
      setPlayback(zz) {
        const tz = 1 === this.deps.core.vWz(zz);
        return tz && (this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = mW, this.reloadFrom = mW), tz
      }
      async open(zz) {
        const tz = await this.deps.replay.open(zz);
        return "opening" === tz && (this.reloadKeyframes(), this.deps.recorder.prefetch()), tz
      }
      play() {
        this.deps.replay.play()
      }
      pause() {
        this.deps.replay.pause()
      }
      seek(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.deps.replay.seek(Math.max(0, Math.floor(zz)), tz)
      }
      setSpeed(zz) {
        this.deps.replay.setSpeed(zz)
      }
      setCameraMode(zz) {
        this.deps.replay.setCameraMode(xW.e.indexOf(zz))
      }
      view() {
        var zz;
        const tz = wz.t.replayViewPtr(this.deps.apiView(), 0);
        if (0 === tz) return this.lastView = null, null;
        const sz = new DataView(this.deps.buffer(), tz, wz.Wd.BYTES),
          Fz = wz.Wd.version(sz, 0),
          Wz = this.lastView;
        if (null !== Wz && Wz.version === Fz) return Wz;
        const Xz = wz.Wd.markIn(sz, 0),
          Oz = {
            version: Fz,
            state: wz.Wd.state(sz, 0),
            cameraMode: null !== (zz = xW.e[wz.Wd.cameraMode(sz, 0)]) && void 0 !== zz ? zz : "recording",
            wN: wz.Wd.wN(sz, 0),
            totalTicks: wz.Wd.totalTicks(sz, 0),
            speed: wz.Wd.speed(sz, 0),
            mark: Xz === wz.Sd ? null : {
              inTick: Xz,
              outTick: wz.Wd.markOut(sz, 0)
            },
            editVersion: wz.Wd.editVersion(sz, 0)
          };
        return this.lastView = Oz, Oz
      }
      keyframes() {
        const zz = this.view();
        if (null === zz) return [];
        zz.version !== this.reloadFrom && (this.reloadFrom = mW);
        const tz = this.reloadFrom === mW && zz.state !== Nz.ad.Cropping && zz.state !== Nz.ad.None,
          sz = tz ? zz.editVersion : zz.version;
        if (sz === this.keyframesVersion && tz === this.keyframesSettled) return this.lastKeyframes;
        const {
          core: Fz
        } = this.deps, Wz = Fz.UWz(), Xz = Fz.Gg(), Oz = [];
        if (0 !== Xz && Wz > 0) {
          const zz = new DataView(this.deps.buffer(), Xz, Wz * Nz.cc);
          for (let tz = 0; tz < Wz; tz++) {
            const sz = tz * Nz.cc,
              Fz = tz => zz.getFloat64(sz + tz, !0);
            Oz.push({
              wN: zz.getUint32(sz + Nz.pc, !0),
              position: [Fz(Nz.lc), Fz(Nz.lc + 8), Fz(Nz.lc + 16)],
              direction: [Fz(Nz.ec), Fz(Nz.ec + 8), Fz(Nz.ec + 16)],
              easing: [Fz(Nz.ic), Fz(Nz.ic + 8), Fz(Nz.ic + 16), Fz(Nz.ic + 24)]
            })
          }
        }
        return this.keyframesVersion = sz, this.keyframesSettled = tz, this.lastKeyframes = Oz, Oz
      }
      addKeyframe() {
        const zz = this.deps.apiView(),
          tz = [wz.t.eye(zz, 0, 0), wz.t.eye(zz, 0, 1), wz.t.eye(zz, 0, 2)];
        return this.deps.replay.addKeyframe(tz, function(zz, tz) {
          const sz = Math.cos(tz);
          return [sz * Math.sin(zz), -Math.sin(tz), sz * Math.cos(zz)]
        }(wz.t.heading(zz, 0), wz.t.pitch(zz, 0)))
      }
      setKeyframe(zz) {
        return this.deps.replay.setKeyframe(zz.wN, Float64Array.from([...zz.position, ...zz.direction, ...zz.easing]))
      }
      moveKeyframe(zz, tz) {
        return this.deps.replay.moveKeyframe(zz, tz)
      }
      deleteKeyframes(zz, tz) {
        return this.deps.replay.deleteKeyframes(zz, tz)
      }
      setMark(zz) {
        var tz, sz;
        return this.deps.replay.setMark(null !== (tz = null === zz || void 0 === zz ? void 0 : zz.inTick) && void 0 !== tz ? tz : -1, null !== (sz = null === zz || void 0 === zz ? void 0 : zz.outTick) && void 0 !== sz ? sz : -1)
      }
      crop(zz, tz) {
        const sz = this.deps.replay.crop(zz, tz);
        return sz && this.reloadKeyframes(), sz
      }
      save(zz) {
        return this.deps.replay.askSave(), this.deps.recorder.saveEdited(zz)
      }
      recorderControl(zz) {
        this.deps.recorder.control(zz)
      }
      recorderPrefs(zz, tz) {
        this.deps.recorder.prefs(zz, tz)
      }
      recorderOption(zz, tz) {
        const sz = this.deps.cmd();
        return null !== sz && (0, wz.xf)(sz, 0, zz, null === tz ? JW : IW.encode(tz))
      }
      recordFlyingText(zz, tz, sz, Fz) {
        const Wz = this.deps.cmd(),
          Xz = Math.max(0, Math.min(4294967295, Math.round(Fz)));
        return null !== Wz && (0, wz.vf)(Wz, 0, tz, sz, Xz, IW.encode(zz))
      }
      recordPlayerKilled(zz, tz, sz, Fz) {
        const Wz = this.deps.cmd();
        return null !== Wz && (0, wz.zf)(Wz, 0, zz, tz, Math.max(0, sz), IW.encode(Fz))
      }
      recordKillfeed(zz, tz, sz) {
        var Fz, Wz;
        const Xz = this.deps.cmd(),
          Oz = function(zz) {
            const tz = zz.reduce(((zz, tz) => {
                var sz;
                return zz + Ss.qb + (null !== (sz = null === tz || void 0 === tz ? void 0 : tz.byteLength) && void 0 !== sz ? sz : 0)
              }), 0),
              sz = new Uint8Array(tz),
              Fz = new DataView(sz.buffer);
            let Wz = 0;
            for (const Oz of zz) {
              var Xz;
              Fz.setUint16(Wz, null !== (Xz = null === Oz || void 0 === Oz ? void 0 : Oz.byteLength) && void 0 !== Xz ? Xz : Nz.tc, !0), Wz += Ss.qb, null !== Oz && (sz.set(Oz, Wz), Wz += Oz.byteLength)
            }
            return sz
          }([CW(zz.name), CW(zz.colour), CW(tz.name), CW(tz.colour), CW(sz)]);
        return null !== Xz && (0, wz.wf)(Xz, 0, null !== (Fz = zz.id) && void 0 !== Fz ? Fz : wz.dd, null !== (Wz = tz.id) && void 0 !== Wz ? Wz : wz.dd, Oz)
      }
      recorderSession(zz, tz) {
        this.deps.recorder.session({
          session: tz,
          lobbyType: zz.lobbyType,
          game: zz.gameNameWithVariation,
          lobby: zz.lobbyName
        })
      }
      recorderClose() {
        this.deps.core.KWz()
      }
      filePartDone(zz, tz) {
        this.deps.recorder.filePartDone(zz, tz)
      }
      fileDone(zz) {
        this.deps.recorder.fileDone(zz)
      }
    }
    const ZW = -2147483648;
    class GW {
      constructor(zz) {
        var tz;
        this.deps = zz, this.state = {
          recording: !1,
          clipping: !1,
          hasClipBuffer: !1,
          seconds: 0
        }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (tz = zz.now) && void 0 !== tz ? tz : () => performance.now()
      }
      get current() {
        return this.state
      }
      get live() {
        var zz, tz, sz;
        return null === (zz = null === (tz = (sz = this.deps).live) || void 0 === tz ? void 0 : tz.call(sz)) || void 0 === zz || zz
      }
      activated(zz) {
        var tz, sz;
        this.live && (this.viewerShown(!0 === (null === (tz = (sz = this.deps).viewerOpen) || void 0 === tz ? void 0 : tz.call(sz))), this.deps.client.recorderSession(zz, (0, xW.h)()))
      }
      closed() {
        this.deps.client.recorderClose()
      }
      toggleRecording() {
        var zz, tz;
        this.live && (this.state.recording || !0 !== (null === (zz = (tz = this.deps).viewerOpen) || void 0 === zz ? void 0 : zz.call(tz))) ? this.deps.client.recorderControl(Nz.Kc.ToggleRecording) : this.deps.notify(PW.d.closeViewerFirst)
      }
      saveClip() {
        this.live ? this.deps.client.recorderControl(Nz.Kc.SaveClip) : this.deps.notify(PW.d.clippingNotOn)
      }
      viewerShown(zz) {
        this.live && this.deps.client.recorderControl(zz ? Nz.Kc.ViewerOpened : Nz.Kc.ViewerClosed)
      }
      setPrefs(zz, tz) {
        this.live && this.deps.client.recorderPrefs(zz, tz)
      }
      setOption(zz, tz) {
        this.live && this.deps.client.recorderOption(zz, tz)
      }
      recordFlyingText(zz, tz, sz, Fz) {
        this.live && this.deps.client.recordFlyingText(zz, tz, sz, Fz)
      }
      recordPlayerKilled(zz, tz, sz, Fz) {
        this.live && this.deps.client.recordPlayerKilled(zz, tz, sz, Fz)
      }
      recordKillfeed(zz, tz, sz) {
        this.live && this.deps.client.recordKillfeed(zz, tz, sz)
      }
      wN() {
        let zz = this.state;
        if (this.clipTickPending && (this.clipTickPending = !1, zz = {
            ...zz,
            hasClipBuffer: !0
          }), null !== this.recordingSince) {
          const tz = Math.floor((this.now() - this.recordingSince) / 1e3);
          tz !== zz.seconds && (zz = {
            ...zz,
            seconds: tz
          })
        }
        this.set(zz)
      }
      onEvent(zz) {
        var tz, sz;
        const {
          notify: Fz
        } = this.deps, Wz = PW.d;
        switch (zz.what) {
          case Nz.Gc.RecordingStarted:
            this.recordingSince = this.now(), this.set({
              ...this.state,
              recording: !0,
              seconds: 0
            }), Fz(Wz.recordingStarted);
            break;
          case Nz.Gc.RecordingStopped:
            this.stopRecording(), Fz(Wz.recordingStopped), this.saveState(Nz.Tc.Recording, "saving");
            break;
          case Nz.Gc.RecordingDiscarded:
            this.stopRecording(), Fz(Wz.recordingDiscarded);
            break;
          case Nz.Gc.RecordingTurnedOff:
            this.stopRecording(), Fz(Wz.recordingTurnedOff);
            break;
          case Nz.Gc.LimitReached:
            Fz(Wz.limitReached);
            break;
          case Nz.Gc.ClipSaved:
            this.saveState(Nz.Tc.Clip, "saving");
            break;
          case Nz.Gc.ClipEmpty:
            Fz(Wz.clipEmpty);
            break;
          case Nz.Gc.ClippingNotOn:
            Fz(Wz.clippingNotOn);
            break;
          case Nz.Gc.Disallowed:
            Fz(Wz.disallowed);
            break;
          case Nz.Gc.ClippingOn:
            this.clipTickPending = !0, this.set({
              ...this.state,
              clipping: !0,
              hasClipBuffer: !1
            });
            break;
          case Nz.Gc.ClippingOff:
            this.clipTickPending = !1, this.set({
              ...this.state,
              clipping: !1,
              hasClipBuffer: !1
            });
            break;
          case Nz.Gc.ClipSettingsChanged:
            this.clipTickPending = this.state.clipping, this.set({
              ...this.state,
              hasClipBuffer: !1
            });
            break;
          case Nz.Gc.SaveBusy:
            null === (tz = (sz = this.deps).onSaveState) || void 0 === tz || tz.call(sz, zz.kind, "busy"), Fz(Wz.saveBusy);
            break;
          case Nz.Gc.CloseViewerFirst:
            Fz(Wz.closeViewerFirst)
        }
      }
      fileReady(zz, tz) {
        this.deps.download(tz), this.saveState(zz, "done"), this.deps.notify(zz === Nz.Tc.Clip ? PW.d.clipSaved : PW.d.recordingSaved)
      }
      failed(zz) {
        this.saveState(zz, "failed"), this.deps.notify(zz === Nz.Tc.Clip ? PW.d.clipFailed : PW.d.recordingFailed)
      }
      stopRecording() {
        this.recordingSince = null, this.set({
          ...this.state,
          recording: !1,
          seconds: 0
        })
      }
      saveState(zz, tz) {
        var sz, Fz;
        null === (sz = (Fz = this.deps).onSaveState) || void 0 === sz || sz.call(Fz, zz, tz)
      }
      set(zz) {
        zz !== this.state && (this.state = zz, this.deps.onState(zz))
      }
    }
    const TW = new TextDecoder;

    function cW(zz, tz, sz, Fz) {
      const Wz = [];
      for (let Xz = 0; Xz < Fz; Xz++) {
        if (tz + Ss.qb > sz) return null;
        const Fz = zz.getUint16(tz, !0);
        if (tz += Ss.qb, Fz !== Nz.tc) {
          if (tz + Fz > sz) return null;
          Wz.push(TW.decode(new Uint8Array(zz.buffer, zz.byteOffset + tz, Fz))), tz += Fz
        } else Wz.push(null)
      }
      return tz === sz ? Wz : null
    }

    function jW(zz, tz) {
      let sz = new DataView(new ArrayBuffer(0)),
        Fz = !0;
      const Wz = {
        replayFailed: (tz, sz) => {
          zz.replayFailed({
            reason: tz,
            code: sz
          })
        },
        replayOption: (tz, Wz, Xz, Oz) => {
          const oz = function(zz, tz, sz, Fz) {
            switch (tz) {
              case Nz.Vc.Cleared:
                return 0 === Fz ? null : void 0;
              case Nz.Vc.Text:
                return TW.decode(new Uint8Array(zz.buffer, zz.byteOffset + sz, Fz));
              case Nz.Vc.Int:
                return Fz === Int32Array.BYTES_PER_ELEMENT ? zz.getInt32(sz, !0) : void 0;
              case Nz.Vc.Double:
                return Fz === Float64Array.BYTES_PER_ELEMENT ? zz.getFloat64(sz, !0) : void 0;
              default:
                return
            }
          }(sz, Wz, Xz, Oz);
          void 0 !== oz ? zz.replayOption({
            key: tz,
            value: oz
          }) : Fz = !1
        },
        replayUiEvent: (tz, Wz, Xz, Oz, oz, vz) => {
          const Uz = function(zz, tz, sz, Fz, Wz, Xz, Oz) {
            const oz = Xz + Oz;
            switch (tz) {
              case Nz.Yc.FlyingText: {
                const Oz = cW(zz, Xz, oz, 1);
                return null !== Oz && null !== Oz[0] ? {
                  what: tz,
                  fX: sz,
                  pX: Fz,
                  angle: Wz,
                  contentJson: Oz[0]
                } : null
              }
              case Nz.Yc.PlayerKilled: {
                const Fz = cW(zz, Xz, oz, 3);
                return Fz ? {
                  what: tz,
                  killstreak: sz,
                  dead: Fz[0],
                  killer: Fz[1],
                  withItem: Fz[2]
                } : null
              }
              case Nz.Yc.Killfeed: {
                const sz = cW(zz, Xz, oz, 7);
                return sz ? {
                  what: tz,
                  killerId: sz[0],
                  killerName: sz[1],
                  killerColour: sz[2],
                  victimId: sz[3],
                  victimName: sz[4],
                  victimColour: sz[5],
                  withItem: sz[6]
                } : null
              }
              default:
                return null
            }
          }(sz, tz, Wz, Xz, Oz, oz, vz);
          null !== Uz ? zz.replayUiEvent(Uz) : Fz = !1
        },
        replayFilePart: (sz, Wz, Xz, Oz) => {
          const oz = tz();
          Xz + Oz > oz.byteLength ? Fz = !1 : zz.filePart(sz, Wz, new Uint8Array(oz, Xz, Oz).slice())
        },
        replayFileReady: (tz, sz, Fz, Wz) => {
          zz.fileReady({
            save: tz,
            kind: sz,
            parts: Fz,
            bytes: Wz
          })
        },
        recorderEvent: (tz, sz, Fz) => {
          zz.recorderEvent({
            what: tz,
            kind: sz,
            save: Fz
          })
        },
        replayOpened: (tz, Fz, Wz) => {
          zz.replayOpened(TW.decode(new Uint8Array(sz.buffer, sz.byteOffset + Fz, Wz)))
        }
      };
      return (zz, tz, Xz, Oz) => !(zz < Nz.X.ReplayFailed || zz > Nz.X.RecorderEvent) && (sz = tz, Fz = !0, (0, wz.ue)(zz, tz, Xz, Oz, Wz) && Fz)
    }

    function AW(zz) {
      let tz = null;
      const sz = jW(zz, (() => {
        if (null === tz) throw new Error("a recorder event read outside recorderEventReader's call");
        return tz.buffer
      }));
      return (zz, Fz) => {
        tz = Fz;
        try {
          ! function(zz, tz) {
            const sz = zz.slice(),
              Fz = new DataView(sz.buffer);
            for (let Wz = 0; Wz < sz.byteLength;) {
              if (Wz + Nz.V > sz.byteLength) throw new Error(`the recorder module's events end mid-head at ${Wz}`);
              const zz = Fz.getUint32(Wz, !0),
                Xz = 65535 & zz,
                Oz = zz >>> 16,
                oz = Wz + Nz.V;
              if (oz + Oz > sz.byteLength || !tz(Xz, Fz, oz, Oz)) throw new Error(`the recorder module wrote a malformed event ${Xz} (${Oz} bytes) at ${Wz}`);
              Wz = oz + (0, Nz.ke)(Oz)
            }
          }(zz, sz)
        } finally {
          tz = null
        }
      }
    }
    class yW {
      constructor(zz, tz) {
        this.acks = zz, this.handlers = tz, this.parts = new Map
      }
      onPart(zz, tz, sz) {
        let Fz = this.parts.get(zz);
        Fz || (Fz = [], this.parts.set(zz, Fz)), Fz[tz] = sz, this.acks.filePartDone(zz, tz)
      }
      onReady(zz) {
        var tz;
        const sz = null !== (tz = this.parts.get(zz.save)) && void 0 !== tz ? tz : [];
        this.parts.delete(zz.save);
        const Fz = function(zz, tz, sz) {
          if (zz.length !== tz) return null;
          let Fz = 0;
          for (let Oz = 0; Oz < tz; Oz++) {
            if (void 0 === zz[Oz]) return null;
            Fz += zz[Oz].byteLength
          }
          if (Fz !== sz) return null;
          if (1 === tz) return zz[0];
          const Wz = new Uint8Array(sz);
          let Xz = 0;
          for (const Oz of zz) Wz.set(Oz, Xz), Xz += Oz.byteLength;
          return Wz
        }(sz, zz.parts, zz.bytes);
        this.acks.fileDone(zz.save), null === Fz ? this.handlers.fileIncomplete(zz.save, zz.kind) : this.handlers.fileReady(zz.save, zz.kind, Fz)
      }
      onDiscarded(zz) {
        this.parts.delete(zz)
      }
    }

    function MW() {
      return sz.e(57).then((() => sz(41688)))
    }
    class dW {
      constructor(zz) {
        this.deps = zz, this.sink = void 0, this.recorder = void 0, this.recorderEvents = void 0, this.parts = void 0, this.viewerChunk = null, this.viewer = null;
        const {
          client: tz
        } = zz;
        this.recorder = new GW({
          client: tz,
          live: () => {
            var zz;
            return !0 !== (null === (zz = this.viewer) || void 0 === zz ? void 0 : zz.inPlayback)
          },
          viewerOpen: zz.viewerOpen,
          notify: zz.notify,
          download: tz => {
            var sz;
            null === (sz = zz.download) || void 0 === sz || sz.call(zz, tz)
          },
          onState: zz.onRecorderState,
          onSaveState: zz.onSaveState
        }), this.parts = new yW(tz, {
          fileReady: (zz, tz, sz) => {
            var Fz;
            tz === Nz.Tc.Edited ? null === (Fz = this.viewer) || void 0 === Fz || Fz.saveDone(sz) : this.recorder.fileReady(tz, sz)
          },
          fileIncomplete: (zz, tz) => {
            this.saveFailed(tz)
          }
        });
        const sz = {
          replayFailed: zz => {
            var tz;
            null === (tz = this.viewer) || void 0 === tz || tz.onFailed(zz)
          },
          replayOption: tz => {
            var sz;
            null === (sz = zz.onReplayOption) || void 0 === sz || sz.call(zz, tz)
          },
          replayUiEvent: tz => {
            var sz;
            null === (sz = zz.onReplayUiEvent) || void 0 === sz || sz.call(zz, tz)
          },
          filePart: (zz, tz, sz) => {
            this.parts.onPart(zz, tz, sz)
          },
          fileReady: zz => {
            this.parts.onReady(zz)
          },
          replayOpened: tz => {
            var sz;
            null === (sz = zz.onReplayOpened) || void 0 === sz || sz.call(zz, tz)
          },
          recorderEvent: zz => {
            var tz;
            switch (zz.what) {
              case Nz.Gc.FileDiscarded:
                this.parts.onDiscarded(zz.save);
                break;
              case Nz.Gc.SaveFailed:
                this.saveFailed(zz.kind);
                break;
              case Nz.Gc.SaveBusy:
                if (null !== (tz = this.viewer) && void 0 !== tz && tz.savePending) {
                  this.viewer.saveFailed(!0);
                  break
                }
                this.recorder.onEvent(zz);
                break;
              default:
                this.recorder.onEvent(zz)
            }
          }
        };
        this.sink = function(zz, tz) {
          return {
            onReplayEvent: jW(zz, tz)
          }
        }(sz, zz.buffer), this.recorderEvents = AW(sz)
      }
      get currentViewer() {
        return this.viewer
      }
      loadViewer() {
        var zz;
        return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (zz = this.deps.loadViewer) && void 0 !== zz ? zz : MW)().catch((zz => {
          throw this.viewerChunk = null, zz
        })), this.viewerChunk.then((zz => (this.viewer ??= new zz.ReplayViewer({
          client: this.deps.client,
          setHoldDraws: this.deps.setHoldDraws,
          meshPending: this.deps.meshPending,
          notify: this.deps.notify,
          onChange: () => {
            var zz, tz;
            null === (zz = (tz = this.deps).onViewerChange) || void 0 === zz || zz.call(tz)
          }
        }), this.viewer))))
      }
      activated(zz) {
        this.recorder.activated(zz)
      }
      afterFrame(zz) {
        try {
          zz > 0 && this.recorder.wN()
        } finally {
          var tz;
          null === (tz = this.viewer) || void 0 === tz || tz.afterFrame()
        }
      }
      end() {
        var zz;
        null === (zz = this.viewer) || void 0 === zz || zz.end()
      }
      saveFailed(zz) {
        var tz;
        zz === Nz.Tc.Edited ? null === (tz = this.viewer) || void 0 === tz || tz.saveFailed(!1) : this.recorder.failed(zz)
      }
    }
    var hW = sz(39748),
      QW = sz(39765),
      kW = sz(4438),
      iW = sz(40080);
    class LW {
      constructor(zz) {
        this.deps = zz, this.analogue = [0, 0], this.keys = 0, this.unsent = !1
      }
      drag(zz, tz) {
        if (!this.deps.live() || 0 === zz && 0 === tz) return;
        const sz = (0, dz.p)(0, performance.now()),
          Fz = this.deps.dragScale();
        (0, iW.h)((() => {
          (0, dz.t)(Nz.qb.MouseDown, 0, 0, 0, sz), (0, dz.t)(Nz.qb.MouseMove, 0, zz * Fz, tz * Fz, 0), (0, dz.t)(Nz.qb.MouseUp, 0, 0, 0, sz)
        }))
      }
      move(zz) {
        var tz, sz;
        this.analogue[0] = null !== (tz = null === zz || void 0 === zz ? void 0 : zz.x) && void 0 !== tz ? tz : 0, this.analogue[1] = null !== (sz = null === zz || void 0 === zz ? void 0 : zz.y) && void 0 !== sz ? sz : 0, this.send()
      }
      holdVertical(zz, tz) {
        const sz = "freeCamUp" === zz ? wz.Zb.Up : wz.Zb.Down;
        this.keys = tz ? this.keys | sz : this.keys & ~sz, this.send()
      }
      flush() {
        this.unsent && this.send()
      }
      send() {
        const zz = this.deps.live() ? this.deps.cmd() : null;
        this.unsent = null !== zz && !(0, wz.He)(zz, 0, this.analogue, this.keys)
      }
    }
    var lW = sz(695),
      nW = sz(292),
      aW = sz(106),
      qW = sz(8755);

    function SW() {
      const zz = Fz.b.get("clientEscMenuOptions"),
        tz = (0, lW.n)(zz);
      return {
        mouse: (0, aW.isMobile)() ? tz : zz.mouseSensitivity,
        touch: tz,
        fovPercent: zz.cameraFOV
      }
    }

    function VW() {
      const zz = Fz.b.get("clientEscMenuOptions"),
        tz = Fz.b.get("isTouchScreen") ? (0, lW.n)(zz) : zz.mouseSensitivity,
        sz = SW().mouse;
      return sz > 0 ? tz / sz : 1
    }

    function RW(zz) {
      const tz = () => {
        zz.setSoundPrefs(Fz.b.get("soundVolume"), Fz.b.get("soundOnFromAd"))
      };
      let sz = null;
      const Wz = () => {
        const {
          showFog: tz,
          enableLighting: Wz,
          fogChunkDistance: Xz,
          chunkFadeIn: Oz
        } = Fz.b.get("clientEscMenuOptions"), oz = {
          showFog: tz,
          lighting: Wz,
          fogChunks: Xz,
          chunkFade: Oz
        };
        sz && (0, Nz._d)(sz) === (0, Nz._d)(oz) && sz.fogChunks === Xz || (sz = oz, zz.setEnvPrefs(sz))
      };
      let Xz = null;
      const oz = () => {
        const tz = function() {
          const zz = Fz.b.get("clientEscMenuOptions");
          return {
            nametagsHidden: Fz.b.get("areNametagsHidden"),
            crouchToggle: zz.crouchIsToggle,
            bhopDisabled: zz.disableBunnyHopping,
            disableBobbing: zz.disableBobbing,
            ezTowering: zz.ezTowering && (0, nW.e)(),
            ezBridging: zz.ezBridging,
            showChunkBorders: zz.showChunkBorders,
            nametagCutDistance: (0, qW.g)()
          }
        }();
        (0, Cz.Zd)(Xz, tz) || (Xz = tz, zz.setUiPrefs(tz))
      };
      let vz = null;
      const Uz = () => {
        const tz = SW();
        (0, Cz.Zd)(vz, tz) || (vz = tz, zz.setLookPrefs(tz))
      };
      tz(), Wz(), oz(), Uz();
      const Kz = [(0, Oz.q)("appManagerUpdated|soundVolume", tz), (0, Oz.q)("appManagerUpdated|soundOnFromAd", tz), (0, Oz.q)("appManagerUpdated|clientEscMenuOptions", (() => {
        Wz(), oz(), Uz()
      })), (0, Oz.q)("appManagerUpdated|areNametagsHidden", oz), (0, Oz.q)("appManagerUpdated|showDistantNametags", oz)];
      return () => {
        for (const zz of Kz) zz()
      }
    }
    var pW = sz(40021),
      fW = sz(40026);
    var EW = (0, fW.c)("lend"),
      zX = (0, fW.c)("starting"),
      tX = (0, fW.c)("generation"),
      sX = (0, fW.c)("end");
    class FX {
      constructor(zz) {
        this.deps = zz, Object.defineProperty(this, sX, {
          value: WX
        }), Object.defineProperty(this, EW, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, zX, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, tX, {
          writable: !0,
          value: 0
        })
      }
      get active() {
        return null !== (0, pW.c)(this, EW)[EW] || (0, pW.c)(this, zX)[zX]
      }
      async start(zz) {
        if (this.active) return "busy";
        const tz = (0, pW.c)(this, tX)[tX];
        (0, pW.c)(this, zX)[zX] = !0;
        try {
          if (!await this.deps.ensureLoaded()) return "refused"
        } finally {
          (0, pW.c)(this, zX)[zX] = !1
        }
        if (tz !== (0, pW.c)(this, tX)[tX]) return "refused";
        const sz = this.deps.beginSave();
        if (!sz) return "refused";
        const Fz = Number(BigInt.asUintN(32, zz)),
          Wz = Number(BigInt.asUintN(32, zz >> 32n));
        let Xz = "refused";
        return this.deps.recorderCall(((zz, tz) => {
          const Oz = sz.editState,
            oz = zz.stage(Oz.length);
          0 !== oz ? (new Uint8Array(tz.buffer, oz, Oz.length).set(Oz), zz.uWz(sz.headLen, Fz, Wz) && (Xz = "sealing")) : Xz = "tooLarge"
        }), !0), "sealing" !== Xz ? (sz.end(), Xz) : ((0, pW.c)(this, EW)[EW] = sz, "sealing")
      }
      beforeRecorderStep() {
        const zz = (0, pW.c)(this, EW)[EW];
        if (!zz) return null;
        let tz = -1,
          sz = 0;
        if (!this.deps.recorderCall((zz => {
            tz = zz.NWz(), tz > 0 && (sz = zz.bWz())
          }))) return (0, pW.c)(this, sX)[sX](zz, "stopped");
        if (tz < 0) return (0, pW.c)(this, sX)[sX](zz, "read");
        if (0 === tz) return null;
        const Fz = zz.head(sz, tz);
        let Wz = !1;
        if (Fz && this.deps.recorderCall(((zz, sz) => {
            const Xz = zz.stage(tz);
            0 !== Xz && (new Uint8Array(sz.buffer, Xz, tz).set(Fz), Wz = !0)
          }), !0), Wz) return null;
        const Xz = zz.givenUp();
        this.deps.recorderCall((zz => {
          zz.wWz()
        }));
        const Oz = (0, pW.c)(this, sX)[sX](zz, Xz ? "givenUp" : "stopped");
        return Xz && this.deps.givenUp("Reopen the replay you were editing to make your edits again, as they weren't saved when another replay opened."), Oz
      }
      stop() {
        (0, pW.c)(this, tX)[tX]++;
        const zz = (0, pW.c)(this, EW)[EW];
        zz && (this.deps.recorderCall((zz => {
          zz.wWz()
        })), (0, pW.c)(this, sX)[sX](zz, "stopped"))
      }
    }

    function WX(zz, tz) {
      return (0, pW.c)(this, EW)[EW] = null, zz.end(), tz
    }

    function XX(zz, tz) {
      const sz = new Uint8Array(4),
        Fz = new DataView(sz.buffer);
      return Fz.setUint8(0, zz ? 1 : 0), Fz.setUint16(2, Math.max(0, Math.min(65535, Math.round(tz))), !0), sz
    }

    function OX(zz, tz) {
      return zz > function(zz) {
        return 16777216 + 314572.8 * Math.max(0, zz)
      }(tz) + 33554432
    }
    let oX = null;

    function vX(zz) {
      return oX ??= async function(zz) {
        const tz = zz.loadInFlight();
        tz && await tz.catch((() => {}));
        if (zz.trapped()) return "trapped";
        if (zz.busy() || !OX(zz.memoryBytes(), zz.clipSeconds())) return "Ow";
        zz.unload();
        let sz = !1;
        try {
          sz = await zz.load()
        } catch {
          sz = !1
        }
        if (!sz) return zz.trapped() ? "trapped" : zz.lw() ? "lw" : "failed";
        return "recycled"
      }(zz).finally((() => {
        oX = null
      })), oX
    }
    const UX = "Replay recording couldn't load, so try again.",
      KX = new Set([Nz.Kc.ToggleRecording, Nz.Kc.SaveClip]);
    var uX = (0, fW.c)("bindings"),
      NX = (0, fW.c)("module"),
      bX = (0, fW.c)("memory"),
      wX = (0, fW.c)("trapped"),
      DX = (0, fW.c)("lw"),
      gX = (0, fW.c)("recycleDue"),
      HX = (0, fW.c)("loading"),
      BX = (0, fW.c)("generation"),
      PX = (0, fW.c)("viewDrawn"),
      rX = (0, fW.c)("clip"),
      YX = (0, fW.c)("session"),
      xX = (0, fW.c)("control"),
      mX = (0, fW.c)("deferred"),
      JX = (0, fW.c)("coreU8"),
      IX = (0, fW.c)("coreU32"),
      CX = (0, fW.c)("moduleU8"),
      eX = (0, fW.c)("edited"),
      ZX = (0, fW.c)("sendSession"),
      GX = (0, fW.c)("checkNotInEvents"),
      TX = (0, fW.c)("clipping"),
      cX = (0, fW.c)("busy"),
      jX = (0, fW.c)("use"),
      AX = (0, fW.c)("ensureLoaded"),
      yX = (0, fW.c)("loadOnce"),
      MX = (0, fW.c)("recycleAfterStep"),
      dX = (0, fW.c)("settleRecycle"),
      hX = (0, fW.c)("load"),
      QX = (0, fW.c)("attach"),
      kX = (0, fW.c)("resendHeld"),
      iX = (0, fW.c)("recycle"),
      LX = (0, fW.c)("send"),
      lX = (0, fW.c)("unload"),
      nX = (0, fW.c)("dropModule"),
      aX = (0, fW.c)("coreBytes"),
      qX = (0, fW.c)("coreWords"),
      SX = (0, fW.c)("moduleBytes"),
      VX = (0, fW.c)("loadFailed"),
      RX = (0, fW.c)("call"),
      pX = (0, fW.c)("guard"),
      fX = (0, fW.c)("trapOn");
    class EX {
      constructor(zz) {
        this.deps = zz, Object.defineProperty(this, fX, {
          value: xO
        }), Object.defineProperty(this, pX, {
          value: YO
        }), Object.defineProperty(this, RX, {
          value: rO
        }), Object.defineProperty(this, VX, {
          value: PO
        }), Object.defineProperty(this, SX, {
          value: BO
        }), Object.defineProperty(this, qX, {
          value: HO
        }), Object.defineProperty(this, aX, {
          value: gO
        }), Object.defineProperty(this, nX, {
          value: DO
        }), Object.defineProperty(this, lX, {
          value: wO
        }), Object.defineProperty(this, LX, {
          value: bO
        }), Object.defineProperty(this, iX, {
          value: NO
        }), Object.defineProperty(this, kX, {
          value: uO
        }), Object.defineProperty(this, QX, {
          value: KO
        }), Object.defineProperty(this, hX, {
          value: UO
        }), Object.defineProperty(this, dX, {
          value: vO
        }), Object.defineProperty(this, MX, {
          value: oO
        }), Object.defineProperty(this, yX, {
          value: OO
        }), Object.defineProperty(this, AX, {
          value: XO
        }), Object.defineProperty(this, jX, {
          value: WO
        }), Object.defineProperty(this, cX, {
          value: FO
        }), Object.defineProperty(this, TX, {
          value: sO
        }), Object.defineProperty(this, GX, {
          value: tO
        }), Object.defineProperty(this, ZX, {
          value: zO
        }), Object.defineProperty(this, uX, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, NX, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, bX, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, wX, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, DX, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, gX, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, HX, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, BX, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, PX, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, rX, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, YX, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, xX, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, mX, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, JX, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, IX, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, CX, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, eX, {
          writable: !0,
          value: void 0
        }), (0, pW.c)(this, eX)[eX] = new FX({
          ensureLoaded: () => (0, pW.c)(this, AX)[AX](),
          recorderCall: (zz, tz) => {
            tz && (0, pW.c)(this, GX)[GX]("an edited save's stage");
            const sz = (0, pW.c)(this, RX)[RX](((tz, sz) => (zz(tz, sz), !0)));
            return null !== sz && void 0 !== sz && sz
          },
          beginSave: zz.beginSave,
          givenUp: zz.givenUp
        })
      }
      get active() {
        return null !== (0, pW.c)(this, NX)[NX]
      }
      get trapped() {
        return (0, pW.c)(this, wX)[wX]
      }
      get loading() {
        return null !== (0, pW.c)(this, HX)[HX]
      }
      prefetch() {
        (0, pW.c)(this, DX)[DX] || (0, pW.c)(this, wX)[wX] || (0, pW.c)(this, NX)[NX] || (0, pW.c)(this, HX)[HX] || this.deps.prefetch()
      }
      viewDrawn() {
        (0, pW.c)(this, PX)[PX] = !0, (0, pW.c)(this, TX)[TX]() && (0, pW.c)(this, jX)[jX]()
      }
      prefs(zz, tz) {
        (0, pW.c)(this, rX)[rX] = {
          on: zz,
          seconds: tz
        }, (0, pW.c)(this, LX)[LX](Nz.Ec.Prefs, XX(zz, tz)), zz && (0, pW.c)(this, PX)[PX] && (0, pW.c)(this, jX)[jX]()
      }
      control(zz) {
        const tz = function(zz) {
          return new Uint8Array([zz, 0, 0, 0])
        }(zz);
        if (KX.has(zz)) return (0, pW.c)(this, NX)[NX] ? void(0, pW.c)(this, LX)[LX](Nz.Ec.Control, tz) : ((0, pW.c)(this, xX)[xX] = tz, void(0, pW.c)(this, jX)[jX]());
        (0, pW.c)(this, DX)[DX] || this.deps.coreCommand(Nz.Ec.Control, tz)
      }
      session(zz) {
        (0, pW.c)(this, YX)[YX] = zz, (0, pW.c)(this, ZX)[ZX](zz)
      }
      filePartDone(zz, tz) {
        (0, pW.c)(this, LX)[LX](Nz.Ec.FilePartDone, function(zz, tz) {
          const sz = new Uint8Array(8),
            Fz = new DataView(sz.buffer);
          return Fz.setUint32(0, zz, !0), Fz.setUint32(4, tz, !0), sz
        }(zz, tz))
      }
      fileDone(zz) {
        return (0, pW.c)(this, LX)[LX](Nz.Ec.FileDone, function(zz) {
          const tz = new Uint8Array(4);
          return new DataView(tz.buffer).setUint32(0, zz, !0), tz
        }(zz)), (0, pW.c)(this, MX)[MX]()
      }
      saveEdited(zz) {
        return (0, pW.c)(this, GX)[GX]("saveEdited"), (0, pW.c)(this, eX)[eX].start(zz)
      }
      afterFrame() {
        if (!(0, pW.c)(this, NX)[NX]) return;
        "read" === (0, pW.c)(this, eX)[eX].beforeRecorderStep() && (0, pW.c)(this, MX)[MX]();
        const zz = (0, pW.c)(this, gX)[gX];
        (0, pW.c)(this, gX)[gX] = null;
        const tz = (0, pW.c)(this, NX)[NX],
          sz = (0, pW.c)(this, bX)[bX];
        if (!tz || !sz) return void(null === zz || void 0 === zz || zz.resolve((0, pW.c)(this, wX)[wX] ? "trapped" : "Ow"));
        const {
          core: Fz
        } = this.deps, Wz = Fz.HWz(2);
        let Xz, Oz, oz, vz, Uz = 0,
          Kz = 0;
        if (0 !== Wz) {
          var uz, Nz;
          const zz = (0, pW.c)(this, qX)[qX]();
          Uz = null !== (uz = zz[Wz >>> 2]) && void 0 !== uz ? uz : 0, Kz = null !== (Nz = zz[1 + (Wz >>> 2)]) && void 0 !== Nz ? Nz : 0
        }
        try {
          if (Kz > 0) {
            const zz = tz.feed(Kz);
            0 !== zz && (0, pW.c)(this, SX)[SX](sz).set((0, pW.c)(this, aX)[aX]().subarray(Uz, Uz + Kz), zz)
          }
          Xz = tz.step(), Oz = tz.BWz(), oz = tz.PWz(), vz = tz.rWz()
        } catch (bz) {
          if (!(0, pW.c)(this, fX)[fX](bz)) throw null === zz || void 0 === zz || zz.resolve("Ow"), bz;
          return void(null === zz || void 0 === zz || zz.resolve("trapped"))
        }
        if (Xz > 0) {
          const zz = Fz.YWz(2, Xz);
          0 !== zz && (0, pW.c)(this, aX)[aX]().set((0, pW.c)(this, SX)[SX](sz).subarray(Oz, Oz + Xz), zz)
        }
        if (oz > 0) {
          (0, pW.c)(this, mX)[mX] = [];
          try {
            this.deps.events(new Uint8Array(sz.buffer, vz, oz), sz)
          } catch (bz) {
            throw null === zz || void 0 === zz || zz.resolve("Ow"), bz
          } finally {
            const zz = (0, pW.c)(this, mX)[mX];
            (0, pW.c)(this, mX)[mX] = null;
            for (const [tz, sz] of zz)(0, pW.c)(this, LX)[LX](tz, sz)
          }
        }
        if (!(0, pW.c)(this, TX)[TX]() && !(0, pW.c)(this, cX)[cX]()) return (0, pW.c)(this, lX)[lX](), void(null === zz || void 0 === zz || zz.resolve("Ow"));
        null === zz || void 0 === zz || zz.resolve((0, pW.c)(this, iX)[iX]())
      }
      dispose() {
        (0, pW.c)(this, DX)[DX] = !0, (0, pW.c)(this, lX)[lX]()
      }
    }

    function zO(zz) {
      (0, pW.c)(this, LX)[LX](Nz.Ec.Session, function(zz) {
        const tz = new TextEncoder,
          sz = tz.encode(zz.game).subarray(0, 65535),
          Fz = tz.encode(zz.lobby).subarray(0, 65535),
          Wz = new Uint8Array(22 + sz.length + 2 + Fz.length),
          Xz = new DataView(Wz.buffer);
        Xz.setFloat64(0, zz.unixMs, !0), Xz.setBigUint64(8, BigInt.asUintN(64, zz.session), !0), Xz.setUint8(16, zz.lobbyType);
        let Oz = 20;
        for (const oz of [sz, Fz]) Xz.setUint16(Oz, oz.length, !0), Wz.set(oz, Oz + 2), Oz += 2 + oz.length;
        return Wz
      }({
        ...zz,
        unixMs: this.deps.unixNow()
      }))
    }

    function tO(zz) {
      false
    }

    function sO() {
      var zz, tz;
      return null !== (zz = null === (tz = (0, pW.c)(this, rX)[rX]) || void 0 === tz ? void 0 : tz.on) && void 0 !== zz && zz
    }

    function FO() {
      const zz = (0, pW.c)(this, NX)[NX];
      let tz = !0;
      if (zz) try {
        tz = zz.busy()
      } catch (sz) {
        if (!(0, pW.c)(this, fX)[fX](sz)) throw sz
      }
      return tz || (0, pW.c)(this, eX)[eX].active
    }
    async function WO() {
      !(0, pW.c)(this, DX)[DX] && this.deps.allowed() ? await (0, pW.c)(this, AX)[AX]() : (0, pW.c)(this, xX)[xX] = null
    }

    function XO() {
      return (0, pW.c)(this, wX)[wX] || (0, pW.c)(this, DX)[DX] ? Promise.resolve(!1) : (0, pW.c)(this, NX)[NX] ? Promise.resolve(!0) : ((0, pW.c)(this, HX)[HX] ??= (0, pW.c)(this, yX)[yX](), (0, pW.c)(this, HX)[HX])
    }
    async function OO() {
      let zz = !1;
      try {
        return zz = await (0, pW.c)(this, hX)[hX](), zz
      } finally {
        zz || ((0, pW.c)(this, xX)[xX] = null), (0, pW.c)(this, HX)[HX] = null
      }
    }

    function oO() {
      if (!(0, pW.c)(this, NX)[NX]) return Promise.resolve((0, pW.c)(this, wX)[wX] ? "trapped" : "Ow");
      if (!(0, pW.c)(this, gX)[gX]) {
        let zz = () => {};
        const tz = new Promise((tz => {
          zz = tz
        }));
        (0, pW.c)(this, gX)[gX] = {
          promise: tz,
          resolve: zz
        }
      }
      return (0, pW.c)(this, gX)[gX].promise
    }

    function vO(zz) {
      const tz = (0, pW.c)(this, gX)[gX];
      (0, pW.c)(this, gX)[gX] = null, null === tz || void 0 === tz || tz.resolve(zz)
    }
    async function UO() {
      let zz = (0, pW.c)(this, uX)[uX];
      if (!zz) {
        const tz = (0, pW.c)(this, BX)[BX];
        try {
          zz = await this.deps.load()
        } catch (sz) {
          return tz === (0, pW.c)(this, BX)[BX] && await (0, pW.c)(this, VX)[VX](sz), !1
        }
        if (tz !== (0, pW.c)(this, BX)[BX]) return this.deps.unload(), !1;
        const Fz = zz,
          Wz = (0, pW.c)(this, pX)[pX]((() => Fz.xWz()));
        if (void 0 === Wz) return !1;
        const Xz = this.deps.core.mWz();
        if (Wz !== Xz) return await (0, pW.c)(this, VX)[VX](new Error(`recorder port version ${Wz}, the core's ${Xz}`)), !1;
        (0, pW.c)(this, uX)[uX] = zz
      }
      const tz = zz;
      try {
        if (!(0, pW.c)(this, pX)[pX]((() => ((0, pW.c)(this, NX)[NX] = new tz.JWz, (0, pW.c)(this, bX)[bX] = tz.DWz(), !0)))) return !1;
        (0, pW.c)(this, kX)[kX]();
        const zz = (0, pW.c)(this, xX)[xX];
        return (0, pW.c)(this, xX)[xX] = null, zz && (0, pW.c)(this, LX)[LX](Nz.Ec.Control, zz), (0, pW.c)(this, QX)[QX]()
      } catch (sz) {
        return (0, pW.c)(this, lX)[lX](), await (0, pW.c)(this, VX)[VX](sz), !1
      }
    }

    function KO() {
      return this.deps.core.IWz(0), 1 === this.deps.core.IWz(1) || ((0, pW.c)(this, lX)[lX](), this.deps.failed(UX), !1)
    }

    function uO() {
      (0, pW.c)(this, rX)[rX] && (0, pW.c)(this, LX)[LX](Nz.Ec.Prefs, XX((0, pW.c)(this, rX)[rX].on, (0, pW.c)(this, rX)[rX].seconds)), (0, pW.c)(this, YX)[YX] && (0, pW.c)(this, ZX)[ZX]((0, pW.c)(this, YX)[YX])
    }

    function NO() {
      return vX({
        memoryBytes: this.deps.memoryBytes,
        clipSeconds: () => {
          var zz, tz;
          return null !== (zz = null === (tz = (0, pW.c)(this, rX)[rX]) || void 0 === tz ? void 0 : tz.seconds) && void 0 !== zz ? zz : 0
        },
        trapped: () => (0, pW.c)(this, wX)[wX],
        busy: () => (0, pW.c)(this, cX)[cX](),
        loadInFlight: () => (0, pW.c)(this, HX)[HX],
        lw: () => (0, pW.c)(this, DX)[DX],
        unload: () => {
          (0, pW.c)(this, lX)[lX]()
        },
        load: () => (0, pW.c)(this, AX)[AX]()
      })
    }

    function bO(zz, tz) {
      (0, pW.c)(this, mX)[mX] ? (0, pW.c)(this, mX)[mX].push([zz, tz]): (0, pW.c)(this, RX)[RX](((sz, Fz) => {
        const Wz = sz.gWz(tz.length);
        0 !== Wz && (new Uint8Array(Fz.buffer, Wz, tz.length).set(tz), sz.command(zz, tz.length))
      }))
    }

    function wO() {
      (0, pW.c)(this, BX)[BX]++, (0, pW.c)(this, dX)[dX]("Ow"), (0, pW.c)(this, eX)[eX].stop(), this.deps.core.IWz(0), (0, pW.c)(this, nX)[nX](), (0, pW.c)(this, wX)[wX] || ((0, pW.c)(this, uX)[uX] = null, this.deps.unload())
    }

    function DO() {
      (0, pW.c)(this, RX)[RX]((zz => {
        zz.free()
      })), (0, pW.c)(this, NX)[NX] = null, (0, pW.c)(this, bX)[bX] = null, (0, pW.c)(this, CX)[CX] = null
    }

    function gO() {
      var zz;
      const tz = this.deps.coreBuffer();
      return (null === (zz = (0, pW.c)(this, JX)[JX]) || void 0 === zz ? void 0 : zz.buffer) !== tz && ((0, pW.c)(this, JX)[JX] = new Uint8Array(tz)), (0, pW.c)(this, JX)[JX]
    }

    function HO() {
      var zz;
      const tz = this.deps.coreBuffer();
      return (null === (zz = (0, pW.c)(this, IX)[IX]) || void 0 === zz ? void 0 : zz.buffer) !== tz && ((0, pW.c)(this, IX)[IX] = new Uint32Array(tz, 0, tz.byteLength >>> 2)), (0, pW.c)(this, IX)[IX]
    }

    function BO(zz) {
      var tz;
      const sz = zz.buffer;
      return (null === (tz = (0, pW.c)(this, CX)[CX]) || void 0 === tz ? void 0 : tz.buffer) !== sz && ((0, pW.c)(this, CX)[CX] = new Uint8Array(sz)), (0, pW.c)(this, CX)[CX]
    }
    async function PO(zz) {
      await this.deps.staleOr(zz, (() => {
        this.deps.failed(UX)
      }))
    }

    function rO(zz) {
      const tz = (0, pW.c)(this, NX)[NX],
        sz = (0, pW.c)(this, bX)[bX];
      if (tz && sz) return (0, pW.c)(this, pX)[pX]((() => zz(tz, sz)))
    }

    function YO(zz) {
      if (!(0, pW.c)(this, wX)[wX]) try {
        return zz()
      } catch (tz) {
        if (!(0, pW.c)(this, fX)[fX](tz)) throw tz;
        return
      }
    }

    function xO(zz) {
      return zz instanceof WebAssembly.RuntimeError && ((0, pW.c)(this, wX)[wX] = !0, (0, pW.c)(this, NX)[NX] = null, (0, pW.c)(this, bX)[bX] = null, (0, pW.c)(this, CX)[CX] = null, (0, pW.c)(this, uX)[uX] = null, (0, pW.c)(this, xX)[xX] = null, (0, pW.c)(this, dX)[dX]("trapped"), this.deps.core.IWz(0), (0, pW.c)(this, eX)[eX].stop(), this.deps.crash(this.deps.markTrapped(zz)), this.deps.failed("Replay recording stopped working, so reload the page to record replays again."), !0)
    }
    var mO = sz(38057);
    const JO = new Map([
      ["skyblock", () => sz.e(49).then((() => sz(38053)))]
    ]);

    function IO(zz) {
      const tz = JO.get(zz);
      return tz ? tz().then((() => {
        const tz = (0, mO.d)(zz);
        if (!tz) throw new Error(`${zz}'s replay hook module registered no hook`);
        return tz
      })) : null
    }
    class CO {
      constructor(zz) {
        this.deps = zz, this.game = null, this.hook = null, this.generation = 0, this.all = !1, this.pending = new Map, this.ids = new Int32Array(64)
      }
      get wantsWatch() {
        return null !== this.hook
      }
      opened(zz) {
        if (this.pending.clear(), zz === this.game && null !== this.hook) return void(this.all = !0);
        const tz = ++this.generation;
        this.game = zz, this.hook = null, this.all = !1;
        const sz = this.deps.loadHook(zz);
        null === sz || void 0 === sz || sz.then((zz => {
          tz === this.generation && (this.hook = zz, this.all = !0)
        }), (zz => {
          tz === this.generation && this.deps.onError(zz)
        }))
      }
      ended() {
        this.generation++, this.game = null, this.hook = null, this.all = !1, this.pending.clear()
      }
      entityAdded(zz) {
        null === this.hook || this.all || this.pending.set(zz, !0)
      }
      entityInfoChanged(zz) {
        null === this.hook || this.all || this.pending.has(zz) || this.pending.set(zz, !1)
      }
      flush(zz) {
        const {
          hook: tz
        } = this;
        if (null === tz || !zz || !this.all && 0 === this.pending.size) return;
        const sz = this.deps.cmd();
        if (null === sz) return;
        const {
          api: Fz
        } = this.deps;
        if (this.all) {
          this.all = !1, this.pending.clear();
          const {
            ids: zz,
            count: tz
          } = Qs(Fz, this.ids);
          this.ids = zz;
          for (let sz = 0; sz < tz; sz++) this.pending.set(zz[sz], !0)
        }
        const Wz = this.ids = ks(this.ids, this.pending.size);
        let Xz = 0;
        for (const Uz of this.pending.keys()) Wz[Xz++] = Uz;
        const Oz = [],
          oz = is(Fz, Wz, Xz, ((zz, tz) => {
            null !== tz && Oz.push({
              serverId: zz,
              info: tz,
              spawned: !0 === this.pending.get(zz)
            })
          }));
        if (oz) {
          this.pending.clear();
          for (const {
              serverId: zz,
              info: Fz,
              spawned: Wz
            }
            of Oz) try {
            tz(Fz, {
              setFacingTolerance: tz => {
                null === tz && Wz || Os(sz, zz, tz) || this.pending.set(zz, Wz)
              }
            })
          } catch (vz) {
            this.deps.onError(vz)
          }
        }
      }
    }
    var eO = (0, fW.c)("bindings"),
      ZO = (0, fW.c)("module"),
      GO = (0, fW.c)("memory"),
      TO = (0, fW.c)("trapped"),
      cO = (0, fW.c)("generation"),
      jO = (0, fW.c)("loading"),
      AO = (0, fW.c)("lend"),
      yO = (0, fW.c)("givenUp"),
      MO = (0, fW.c)("afterSave"),
      dO = (0, fW.c)("opens"),
      hO = (0, fW.c)("saveAskedAt"),
      QO = (0, fW.c)("unload"),
      kO = (0, fW.c)("dropModule"),
      iO = (0, fW.c)("loadFailed"),
      LO = (0, fW.c)("saveReadsBody"),
      lO = (0, fW.c)("command"),
      nO = (0, fW.c)("call"),
      aO = (0, fW.c)("guard"),
      qO = (0, fW.c)("trapOn");
    class SO {
      constructor(zz) {
        this.deps = zz, Object.defineProperty(this, qO, {
          value: so
        }), Object.defineProperty(this, aO, {
          value: to
        }), Object.defineProperty(this, nO, {
          value: zo
        }), Object.defineProperty(this, lO, {
          value: EO
        }), Object.defineProperty(this, LO, {
          get: fO,
          set: void 0
        }), Object.defineProperty(this, iO, {
          value: pO
        }), Object.defineProperty(this, kO, {
          value: RO
        }), Object.defineProperty(this, QO, {
          value: VO
        }), Object.defineProperty(this, eO, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ZO, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, GO, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, TO, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, cO, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, jO, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, AO, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, yO, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, MO, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, dO, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, hO, {
          writable: !0,
          value: null
        })
      }
      get active() {
        return null !== (0, pW.c)(this, ZO)[ZO] && null === (0, pW.c)(this, MO)[MO]
      }
      async open(zz) {
        if ((0, pW.c)(this, TO)[TO]) return Nz.Rc.ModuleTrap;
        let tz = (0, pW.c)(this, eO)[eO];
        if (!tz) {
          const zz = (0, pW.c)(this, cO)[cO];
          (0, pW.c)(this, jO)[jO]++;
          try {
            tz = await this.deps.load()
          } catch (Fz) {
            return (0, pW.c)(this, jO)[jO]--, zz !== (0, pW.c)(this, cO)[cO] ? "stopped" : (0, pW.c)(this, iO)[iO](Fz)
          }
          if ((0, pW.c)(this, jO)[jO]--, zz !== (0, pW.c)(this, cO)[cO]) return (0, pW.c)(this, eO)[eO] || 0 !== (0, pW.c)(this, jO)[jO] || (0, pW.c)(this, TO)[TO] || this.deps.unload(), "stopped";
          if ((0, pW.c)(this, TO)[TO]) return Nz.Rc.ModuleTrap;
          const sz = tz.xWz(),
            Wz = this.deps.core.mWz();
          if (sz !== Wz) return (0, pW.c)(this, iO)[iO](new Error(`replay port version ${sz}, the core's ${Wz}`));
          (0, pW.c)(this, eO)[eO] = tz
        }
        if (!(0, pW.c)(this, ZO)[ZO]) {
          const zz = tz;
          if (!(0, pW.c)(this, aO)[aO]((() => {
              (0, pW.c)(this, ZO)[ZO] = new zz.CWz, (0, pW.c)(this, GO)[GO] = zz.eWz()
            }))) return Nz.Rc.ModuleTrap
        }
        let sz = !1;
        return (0, pW.c)(this, nO)[nO](((tz, Fz) => {
          null !== (0, pW.c)(this, MO)[MO] && tz.step(0, 0);
          const Wz = tz.stage(zz.length);
          0 !== Wz && (new Uint8Array(Fz.buffer, Wz, zz.length).set(zz), tz.open(), (0, pW.c)(this, yO)[yO] = (0, pW.c)(this, AO)[AO], (0, pW.c)(this, MO)[MO] = null, (0, pW.c)(this, dO)[dO]++, sz = !0)
        })) ? sz ? "opening" : Nz.Rc.TooLarge : Nz.Rc.ModuleTrap
      }
      beforeFrame(zz) {
        const tz = (0, pW.c)(this, ZO)[ZO],
          sz = (0, pW.c)(this, GO)[GO];
        if (!tz || !sz || null !== (0, pW.c)(this, MO)[MO]) return;
        const {
          core: Fz
        } = this.deps, Wz = Fz.ZWz(zz);
        if (Wz < 0) return;
        const Xz = Math.floor(Wz);
        let Oz, oz;
        try {
          Oz = tz.step(Xz, Wz - Xz), oz = tz.BWz()
        } catch (Uz) {
          return void(0, pW.c)(this, qO)[qO](Uz)
        }
        const vz = Fz.YWz(1, Oz);
        if (0 === vz) {
          const zz = (0, pW.c)(this, nO)[nO]((zz => {
            zz.close()
          }));
          if (!zz) return;
          return (0, pW.c)(this, LO)[LO] ? (0, pW.c)(this, MO)[MO] = "drop" : (0, pW.c)(this, kO)[kO](), void Fz.GWz(Nz.Rc.Port)
        }
        new Uint8Array(this.deps.coreBuffer(), vz, Oz).set(new Uint8Array(sz.buffer, oz, Oz))
      }
      play() {
        (0, pW.c)(this, lO)[lO]((zz => {
          zz.play()
        }))
      }
      pause() {
        (0, pW.c)(this, lO)[lO]((zz => {
          zz.pause()
        }))
      }
      seek(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, pW.c)(this, lO)[lO]((sz => {
          sz.seek(zz, tz)
        }))
      }
      setMark(zz, tz) {
        return (0, pW.c)(this, lO)[lO]((sz => {
          sz.TWz(zz, tz)
        }))
      }
      addKeyframe(zz, tz) {
        return (0, pW.c)(this, lO)[lO]((sz => {
          sz.cWz(zz[0], zz[1], zz[2], tz[0], tz[1], tz[2])
        }))
      }
      setKeyframe(zz, tz) {
        return (0, pW.c)(this, lO)[lO]((sz => {
          sz.jWz(zz, tz)
        }))
      }
      moveKeyframe(zz, tz) {
        return (0, pW.c)(this, lO)[lO]((sz => {
          sz.AWz(zz, tz)
        }))
      }
      deleteKeyframes(zz, tz) {
        return (0, pW.c)(this, lO)[lO]((sz => {
          sz.yWz(zz, tz)
        }))
      }
      crop(zz, tz) {
        return null === (0, pW.c)(this, AO)[AO] && (0, pW.c)(this, lO)[lO]((sz => {
          sz.crop(zz, tz)
        }))
      }
      beginSave() {
        const zz = (0, pW.c)(this, hO)[hO];
        if ((0, pW.c)(this, hO)[hO] = null, null !== zz && zz !== (0, pW.c)(this, dO)[dO]) return null;
        let tz = 0,
          sz = null;
        if ((0, pW.c)(this, nO)[nO](((zz, Fz) => {
            tz = zz.save(), 0 !== tz && (sz = new Uint8Array(Fz.buffer, zz.MWz(), zz.dWz()).slice())
          })), 0 === tz || !sz) return null;
        const Fz = {
          headLen: tz,
          editState: sz,
          givenUp: () => (0, pW.c)(this, yO)[yO] === Fz,
          head: (zz, tz) => {
            if ((0, pW.c)(this, AO)[AO] !== Fz || !(0, pW.c)(this, LO)[LO]) return null;
            let sz = null;
            return (0, pW.c)(this, nO)[nO](((Fz, Wz) => {
              const Xz = Fz.hWz();
              0 !== Xz && zz >= 0 && tz >= 0 && zz + tz <= Xz && (sz = new Uint8Array(Wz.buffer, Fz.QWz() + zz, tz))
            })), sz
          },
          end: () => {
            if ((0, pW.c)(this, AO)[AO] !== Fz) return;
            (0, pW.c)(this, AO)[AO] = null, (0, pW.c)(this, yO)[yO] = null, (0, pW.c)(this, nO)[nO]((zz => {
              zz.kWz()
            }));
            const zz = (0, pW.c)(this, MO)[MO];
            (0, pW.c)(this, MO)[MO] = null, "unload" === zz ? (0, pW.c)(this, QO)[QO]() : "drop" === zz && (0, pW.c)(this, kO)[kO]()
          }
        };
        return (0, pW.c)(this, AO)[AO] = Fz, Fz
      }
      askSave() {
        (0, pW.c)(this, hO)[hO] = (0, pW.c)(this, dO)[dO]
      }
      setSpeed(zz) {
        (0, pW.c)(this, lO)[lO]((tz => {
          tz.iWz(zz)
        }))
      }
      setCameraMode(zz) {
        (0, pW.c)(this, lO)[lO]((tz => {
          tz.LWz(zz)
        }))
      }
      close() {
        (0, pW.c)(this, lO)[lO]((zz => {
          zz.close()
        }))
      }
      stop() {
        (0, pW.c)(this, cO)[cO]++, (0, pW.c)(this, LO)[LO] && ((0, pW.c)(this, nO)[nO]((zz => {
          zz.close()
        })), (0, pW.c)(this, ZO)[ZO]) ? (0, pW.c)(this, MO)[MO] = "unload" : (0, pW.c)(this, QO)[QO]()
      }
    }

    function VO() {
      (0, pW.c)(this, kO)[kO](), (0, pW.c)(this, TO)[TO] || ((0, pW.c)(this, eO)[eO] = null, this.deps.unload())
    }

    function RO() {
      (0, pW.c)(this, nO)[nO]((zz => {
        zz.free()
      })), (0, pW.c)(this, ZO)[ZO] = null, (0, pW.c)(this, GO)[GO] = null
    }
    async function pO(zz) {
      return await this.deps.staleOr(zz, (() => {})) ? "reloading" : Nz.Rc.ModuleLoad
    }

    function fO() {
      return null !== (0, pW.c)(this, AO)[AO] && (0, pW.c)(this, yO)[yO] !== (0, pW.c)(this, AO)[AO]
    }

    function EO(zz) {
      return null === (0, pW.c)(this, MO)[MO] && (0, pW.c)(this, nO)[nO](zz)
    }

    function zo(zz) {
      const tz = (0, pW.c)(this, ZO)[ZO],
        sz = (0, pW.c)(this, GO)[GO];
      return !(!tz || !sz) && (0, pW.c)(this, aO)[aO]((() => {
        zz(tz, sz)
      }))
    }

    function to(zz) {
      if ((0, pW.c)(this, TO)[TO]) return !1;
      try {
        return zz(), !0
      } catch (tz) {
        return (0, pW.c)(this, qO)[qO](tz), !1
      }
    }

    function so(zz) {
      if (!(zz instanceof WebAssembly.RuntimeError)) throw zz;
      (0, pW.c)(this, TO)[TO] = !0, (0, pW.c)(this, ZO)[ZO] = null, (0, pW.c)(this, GO)[GO] = null, (0, pW.c)(this, eO)[eO] = null, this.deps.crash(this.deps.markTrapped(zz)), this.deps.core.GWz(Nz.Rc.ModuleTrap)
    }
    var Fo = sz(6065),
      Wo = sz(39838);
    const Xo = "[bloxd-wasm-client]";
    const Oo = String(ZW);

    function oo(zz) {
      return null === zz || zz === Oo ? void 0 : zz
    }

    function vo(zz) {
      var tz, sz, Fz, Wz, Xz, oz, vz;
      switch (zz.what) {
        case Nz.Yc.FlyingText: {
          let tz;
          try {
            tz = JSON.parse(zz.contentJson)
          } catch (Uz) {
            return void console.warn(`${Xo} a replay's flying text isn't JSON`, Uz)
          }
          Oz.o.Yg("forceFlyingMiddleMessage", {
            content: tz,
            pX: zz.pX,
            angle: zz.angle,
            fX: zz.fX
          });
          break
        }
        case Nz.Yc.PlayerKilled:
          (0, Wo.c)({
            kind: "killed",
            body: {
              deadEId: null !== (tz = oo(zz.dead)) && void 0 !== tz ? tz : "",
              killerEId: oo(zz.killer),
              withItem: null !== (sz = zz.withItem) && void 0 !== sz ? sz : "",
              killstreak: zz.killstreak
            }
          });
          break;
        case Nz.Yc.Killfeed:
          (0, Wo.c)({
            kind: "custom",
            body: {
              killer: {
                eId: oo(zz.killerId),
                name: null !== (Fz = zz.killerName) && void 0 !== Fz ? Fz : void 0,
                colour: null !== (Wz = zz.killerColour) && void 0 !== Wz ? Wz : void 0
              },
              victim: {
                eId: oo(zz.victimId),
                name: null !== (Xz = zz.victimName) && void 0 !== Xz ? Xz : void 0,
                colour: null !== (oz = zz.victimColour) && void 0 !== oz ? oz : void 0
              },
              withItem: null !== (vz = zz.withItem) && void 0 !== vz ? vz : ""
            }
          })
      }
    }
    const Uo = "[bloxd-wasm-client]";

    function Ko(zz) {
      if (void 0 === zz || null === zz || "" === zz) return null;
      const tz = Number(zz);
      return Number.isInteger(tz) && tz > ZW && tz <= 2147483647 ? tz : null
    }

    function uo(zz) {
      return {
        id: Ko(zz.eId),
        name: "string" === typeof zz.name ? zz.name : null,
        colour: "string" === typeof zz.colour ? zz.colour : null
      }
    }

    function No(zz) {
      const tz = (0, QW.l)(Ss.fc.PlayerKilled, (tz => {
          var sz, Fz;
          const Wz = (0, hW.f)(tz);
          if (!(0, hW.c)(Wz)) return;
          const {
            deadEId: Xz,
            killerEId: Oz,
            withItem: oz,
            killstreak: vz
          } = Wz;
          zz.recordPlayerKilled(null !== (sz = Ko(Xz)) && void 0 !== sz ? sz : ZW, null !== (Fz = Ko(Oz)) && void 0 !== Fz ? Fz : ZW, "number" === typeof vz ? vz : 0, "string" === typeof oz ? oz : "")
        })),
        sz = (0, QW.l)(Ss.fc.CustomKillfeed, (tz => {
          const sz = (0, hW.f)(tz);
          if (!(0, hW.c)(sz) || !(0, hW.c)(sz.killer) || !(0, hW.c)(sz.victim)) return;
          const {
            killer: Fz,
            victim: Wz,
            withItem: Xz
          } = sz;
          zz.recordKillfeed(uo(Fz), uo(Wz), "string" === typeof Xz ? Xz : null)
        }));
      return () => {
        tz(), sz()
      }
    }

    function bo(zz) {
      var tz;
      return void 0 === zz || null === zz ? null : null !== (tz = JSON.stringify(zz)) && void 0 !== tz ? tz : null
    }

    function wo(zz) {
      let tz = null;
      const sz = () => {
        const {
          enableClipping: sz,
          clipDurationSeconds: Wz
        } = Fz.b.get("clientEscMenuOptions"), Xz = `${sz}:${Wz}`;
        Xz !== tz && (tz = Xz, zz.recorder.setPrefs(sz, Wz))
      };
      return sz(), (0, Oz.q)("appManagerUpdated|clientEscMenuOptions", sz)
    }
    const Do = "replayModule",
      go = "recorderModule";

    function Ho(zz, tz, sz) {
      return function() {
        return zz.isStopped ? sz : tz(...arguments)
      }
    }
    const Bo = {
      open: () => Promise.reject(new Error(PW.d.coreStopped.text)),
      replayKey: () => null,
      encode: () => Promise.resolve(null),
      fileHandle: () => null,
      markSaved: () => {}
    };

    function Po() {
      return sz.e(61).then((() => sz(60625)))
    }

    function ro(zz) {
      (0, PW.f)({
        text: zz,
        type: "Error"
      })
    }
    class Yo {
      constructor(zz) {
        this.deps = zz, this.runtime = void 0, this.entityHooks = void 0, this.recordedOptions = void 0, this.stops = void 0, this.activeConn = 0, this.stopped = !1, this.bench = null, this.replay = void 0, this.recorder = void 0, this.freecam = void 0, this.drawn = !1;
        const {
          running: tz,
          api: Fz,
          core: Wz
        } = zz, Xz = () => zz.memory().buffer, Oz = () => tz.isStopped ? null : tz.rings.cmd, oz = Ho(tz, ((zz, tz) => Wz.YWz(zz, tz)), 0), vz = () => Wz.mWz();
        let Uz = null;
        this.replay = new SO({
          core: {
            ZWz: Ho(tz, (zz => Wz.ZWz(zz)), -1),
            YWz: oz,
            mWz: vz,
            GWz: Ho(tz, (zz => {
              Wz.GWz(zz)
            }), void 0)
          },
          coreBuffer: Xz,
          load: async () => (Uz = await sz.e(62).then((() => sz(60635))), Uz.loadReplayModule()),
          unload: () => {
            var zz;
            null === (zz = Uz) || void 0 === zz || zz.unloadReplayModule()
          },
          markTrapped: zz => Uz ? Uz.markReplayTrapped(zz) : new Error(String(zz)),
          staleOr: (tz, sz) => zz.staleOr(Do, tz, sz),
          crash: tz => {
            zz.reportFault(Do, tz)
          }
        });
        let Kz = null;
        this.recorder = new EX({
          core: {
            IWz: Ho(tz, (zz => Wz.IWz(zz)), 0),
            HWz: Ho(tz, (zz => Wz.HWz(zz)), 0),
            YWz: oz,
            mWz: vz
          },
          coreCommand: (zz, tz) => {
            var sz, Fz;
            return null !== (sz = null === (Fz = Oz()) || void 0 === Fz ? void 0 : Fz.writeCmd(zz, 0, tz)) && void 0 !== sz && sz
          },
          coreBuffer: Xz,
          load: async () => (Kz = await Po(), Kz.loadRecorderModule()),
          prefetch: () => {
            Po().then((zz => zz.prefetchRecorderModule())).catch((zz => {
              console.warn(`${Uo} the recorder module didn't prefetch, so a save loads it:`, zz)
            }))
          },
          unload: () => {
            var zz;
            null === (zz = Kz) || void 0 === zz || zz.unloadRecorderModule()
          },
          markTrapped: zz => Kz ? Kz.markRecorderTrapped(zz) : new Error(String(zz)),
          memoryBytes: () => {
            var zz, tz;
            return null !== (zz = null === (tz = Kz) || void 0 === tz ? void 0 : tz.recorderMemoryBytes()) && void 0 !== zz ? zz : 0
          },
          staleOr: (tz, sz) => zz.staleOr(go, tz, sz),
          crash: tz => {
            zz.reportFault(go, tz)
          },
          allowed: () => !0 === zz.options.get("canRecordReplays"),
          failed: ro,
          events: (zz, tz) => {
            this.runtime.recorderEvents(zz, tz)
          },
          beginSave: () => this.replay.beginSave(),
          givenUp: ro,
          unixNow: () => Date.now()
        });
        const uz = new eW({
          core: {
            vWz: Ho(tz, (zz => Wz.vWz(zz)), 0),
            KWz: Ho(tz, (() => {
              Wz.KWz()
            }), void 0),
            Gg: Ho(tz, (() => Wz.Gg()), 0),
            UWz: Ho(tz, (() => Wz.UWz()), 0)
          },
          buffer: Xz,
          apiView: () => Fz.apiView,
          cmd: Oz,
          replay: this.replay,
          recorder: this.recorder
        });
        this.entityHooks = new CO({
          api: Fz,
          cmd: Oz,
          loadHook: IO,
          onError: zz => {
            console.warn(`${Uo} the recorded game's replay hooks:`, zz)
          }
        });
        const Nz = new dW({
          client: uz,
          buffer: Xz,
          setHoldDraws: zz => {
            tz.setHoldDraws(zz)
          },
          notify: PW.f,
          onRecorderState: () => {
            var zz;
            null === (zz = (0, YW.f)()) || void 0 === zz || zz.recorderChanged()
          },
          onViewerChange: () => {
            var zz;
            null === (zz = (0, YW.f)()) || void 0 === zz || zz.viewerChanged()
          },
          onReplayOption: tz => {
            ! function(zz, tz) {
              var sz, Fz;
              const Wz = Ss.nb[tz.key];
              if (void 0 === Wz) return;
              let Xz = null !== (sz = tz.value) && void 0 !== sz ? sz : JSON.parse(JSON.stringify(null !== (Fz = Fo.d[Wz]) && void 0 !== Fz ? Fz : null));
              if (null !== tz.value && tz.key < Ss.Nb.Environment && "string" === typeof Xz) try {
                Xz = JSON.parse(Xz)
              } catch (Oz) {
                return void console.warn(`${Xo} a replay's ${Wz} isn't JSON`, Oz)
              }
              zz.applyNewClientOptions({
                [Wz]: Xz
              })
            }(zz.options, tz)
          },
          onReplayUiEvent: vo,
          onReplayOpened: tz => {
            this.entityHooks.opened((0, Cz.Tb)(tz)), zz.replayShaderPack(tz)
          },
          meshPending: () => {
            var zz, sz;
            return null !== (zz = null === (sz = tz.lastHeader) || void 0 === sz ? void 0 : sz.renderPending) && void 0 !== zz ? zz : 0
          },
          viewerOpen: rW.e,
          download: zz => {
            (0, HW.j)(zz)
          }
        });
        this.runtime = Nz, Fz.replay = Nz.sink, (0, YW.o)(Nz);
        const bz = new LW({
          live: () => {
            var zz;
            return !tz.isStopped && !0 === (null === (zz = Nz.currentViewer) || void 0 === zz ? void 0 : zz.inPlayback)
          },
          cmd: Oz,
          dragScale: VW
        });
        this.freecam = bz, (0, YW.n)(bz), this.recordedOptions = function(zz, tz) {
          const sz = Ss.nb,
            Fz = sz.map(((sz, Fz) => tz.subscribe(sz, (tz => {
              zz.setOption(Fz, bo(tz))
            }))));
          return {
            sendAll() {
              sz.forEach(((sz, Fz) => {
                zz.setOption(Fz, bo(tz.get(sz)))
              }))
            },
            stop() {
              for (const zz of Fz) zz()
            }
          }
        }(Nz.recorder, zz.options), this.stops = [(0, WF.n)((zz => {
          bz.flush();
          try {
            this.replay.beforeFrame(zz)
          } catch (tz) {
            this.deps.reportFault("replayFrame", tz)
          }
        })), (0, WF.z)(((zz, tz) => {
          try {
            this.recorder.afterFrame(), tz && !this.drawn && (this.drawn = !0, this.recorder.viewDrawn())
          } catch (sz) {
            this.deps.reportFault("recorderFrame", sz)
          }
          try {
            Nz.afterFrame(zz)
          } catch (sz) {
            this.deps.reportFault("replayRuntime", sz)
          }
        })), wo(Nz), () => {
          this.recordedOptions.stop()
        }, No(Nz.recorder), (0, kW.k)((zz => {
          let {
            action: tz,
            down: sz
          } = zz;
          var Fz;
          sz && (null === (Fz = (0, YW.f)()) || void 0 === Fz || Fz.keyDown(tz))
        }))];
        const wz = () => {
          const zz = Nz.currentViewer;
          return !0 === (null === zz || void 0 === zz ? void 0 : zz.isOpen) ? zz : null
        };
        (0, BW.f)({
          open: (zz, tz) => this.open(zz, tz),
          replayKey: () => {
            var zz, tz;
            return null !== (zz = null === (tz = wz()) || void 0 === tz ? void 0 : tz.id) && void 0 !== zz ? zz : null
          },
          saveRefusal: () => {
            var zz, tz;
            return null !== (zz = null === (tz = wz()) || void 0 === tz ? void 0 : tz.saveRefusal) && void 0 !== zz ? zz : null
          },
          encode: () => {
            var zz, tz;
            return null !== (zz = null === (tz = wz()) || void 0 === tz ? void 0 : tz.save()) && void 0 !== zz ? zz : Promise.resolve(null)
          },
          fileHandle: () => {
            var zz, tz;
            return null !== (zz = null === (tz = Nz.currentViewer) || void 0 === tz ? void 0 : tz.fileHandle) && void 0 !== zz ? zz : null
          },
          markSaved: (zz, tz) => {
            var sz;
            null === (sz = Nz.currentViewer) || void 0 === sz || sz.markSaved(zz, tz)
          }
        })
      }
      netEvent(zz) {
        if ("connection" === zz.type)
          if (zz.phase === Nz.F.Activated) {
            this.activeConn = zz.conn;
            const tz = this.deps.sessionInfo(zz.conn);
            null !== tz && (this.runtime.activated({
              lobbyType: (0, ez.v)(tz.lobbyName),
              gameNameWithVariation: tz.gameNameWithVariation,
              lobbyName: tz.lobbyName
            }), this.recordedOptions.sendAll())
          } else zz.phase !== Nz.F.Left && zz.phase !== Nz.F.Closed || zz.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
      }
      stop() {
        if (!this.stopped) {
          this.stopped = !0;
          for (const zz of this.stops) zz();
          this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, YW.j)() === this.runtime && (0, YW.o)(null), (0, YW.g)() === this.freecam && (0, YW.n)(null), (0, BW.f)(Bo), null !== this.bench && window.wasmReplayBench === this.bench && (window.wasmReplayBench = void 0)
        }
      }
      async open(zz, tz) {
        const {
          running: sz
        } = this.deps;
        if (sz.isStopped) throw new Error(PW.d.coreStopped.text);
        if (zz.byteLength > 67108864) throw new Error(PW.d.cantOpen.text);
        let Fz;
        try {
          Fz = await async function(zz) {
            const tz = await zz.loadViewer();
            return tz.inPlayback || (0, WF.L)().leaveGame(null), tz
          }(this.runtime)
        } catch (Wz) {
          throw console.warn(`${Uo} the replay viewer didn't load`, Wz), new Error(PW.d.viewerLoadFailed.text)
        }
        if (sz.isStopped) throw new Error(PW.d.coreStopped.text);
        await Fz.open(zz, tz)
      }
    }
    var xo = sz(1884);

    function mo(zz, tz) {
      const {
        aux: sz,
        payload: Fz
      } = function(zz) {
        return {
          aux: zz.reset ? Nz.Lb.ResetFirst : 0,
          payload: Io(zz.changes)
        }
      }(tz);
      zz.queueOptions(sz, Fz) && (tz.reset && xo.e.reset(), xo.e.apply(tz.changes))
    }
    const Jo = new TextEncoder;

    function Io(zz) {
      const tz = new Co;
      return Zo(tz, zz), tz.bytes()
    }
    class Co {
      constructor() {
        this.buf = new Uint8Array(256), this.view = new DataView(this.buf.buffer), this.len = 0
      }
      room(zz) {
        if (this.len + zz <= this.buf.length) return;
        const tz = new Uint8Array(Math.max(2 * this.buf.length, this.len + zz));
        tz.set(this.buf.subarray(0, this.len)), this.buf = tz, this.view = new DataView(tz.buffer)
      }
      u8(zz) {
        this.room(1), this.buf[this.len++] = zz
      }
      tagged(zz, tz, sz) {
        this.room(1 + tz), this.buf[this.len++] = zz, 1 === tz ? this.view.setUint8(this.len, sz) : 2 === tz ? this.view.setUint16(this.len, sz) : this.view.setUint32(this.len, sz), this.len += tz
      }
      signed(zz, tz, sz) {
        this.room(1 + tz), this.buf[this.len++] = zz, 1 === tz ? this.view.setInt8(this.len, sz) : 2 === tz ? this.view.setInt16(this.len, sz) : this.view.setInt32(this.len, sz), this.len += tz
      }
      f64(zz) {
        this.room(9), this.buf[this.len++] = 203, this.view.setFloat64(this.len, zz), this.len += 8
      }
      raw(zz) {
        this.room(zz.length), this.buf.set(zz, this.len), this.len += zz.length
      }
      bytes() {
        return this.buf.slice(0, this.len)
      }
    }

    function eo(zz, tz, sz, Fz, Wz, Xz, Oz) {
      tz < Fz ? zz.u8(sz | tz) : null !== Wz && tz < 256 ? zz.tagged(Wz, 1, tz) : tz < 65536 ? zz.tagged(Xz, 2, tz) : zz.tagged(Oz, 4, tz)
    }

    function Zo(zz, tz) {
      switch (typeof tz) {
        case "undefined":
          return void zz.raw(Go);
        case "boolean":
          return void zz.u8(tz ? 195 : 194);
        case "number":
          return void
          function(zz, tz) {
            tz >>> 0 === tz ? tz < 128 ? zz.u8(tz) : tz < 256 ? zz.tagged(204, 1, tz) : tz < 65536 ? zz.tagged(205, 2, tz) : zz.tagged(206, 4, tz) : (tz | 0) === tz ? tz >= -32 ? zz.u8(255 & tz) : tz >= -128 ? zz.signed(208, 1, tz) : tz >= -32768 ? zz.signed(209, 2, tz) : zz.signed(210, 4, tz) : zz.f64(tz)
          }(zz, tz);
        case "string": {
          const sz = Jo.encode(tz);
          return eo(zz, sz.length, 160, 32, 217, 218, 219), void zz.raw(sz)
        }
        case "object":
          break;
        default:
          return void zz.u8(192)
      }
      if (null === tz) zz.u8(192);
      else if (Array.isArray(tz)) {
        eo(zz, tz.length, 144, 16, null, 220, 221);
        for (const sz of tz) Zo(zz, sz)
      } else if (tz instanceof Uint8Array) eo(zz, tz.length, 0, 0, 196, 197, 198), zz.raw(tz);
      else {
        const sz = Object.keys(tz);
        eo(zz, sz.length, 128, 0, null, 222, 223);
        for (const Fz of sz) Zo(zz, Fz), Zo(zz, tz[Fz])
      }
    }
    const Go = new Uint8Array([212, 0, 0]);
    var To = sz(41656),
      co = sz(41659),
      jo = sz(40108),
      Ao = sz(40142),
      yo = sz(3378);
    const Mo = [1e3, 3e3, 9e3];
    class ho {
      constructor(zz) {
        this.host = zz, this.sets = new Map, this.table = [], this.generation = 0, this.lw = !1
      }
      onEvent(zz) {
        const tz = function(zz) {
          if (zz.byteLength !== Nz.id) return null;
          const tz = new DataView(zz.buffer, zz.byteOffset, zz.byteLength);
          return {
            want: tz.getUint16(0, !0),
            release: tz.getUint16(2, !0)
          }
        }(zz);
        tz && !this.lw && (tz.release !== Nz.kd && this.release(tz.release), tz.want !== Nz.kd && this.want(tz.want))
      }
      reset(zz) {
        if (!this.lw) {
          for (const [zz, tz] of this.sets) "ready" === tz.state && this.releaseAll(tz.distinct), this.sets.delete(zz);
          this.table = zz, this.generation++
        }
      }
      dispose() {
        if (this.lw) return;
        this.lw = !0, this.generation++, this.table = [];
        const zz = [...this.sets.values()];
        this.sets.clear();
        let tz = null;
        for (const Fz of zz)
          for (const zz of "ready" === Fz.state ? Fz.distinct : []) try {
            this.host.Csz(zz)
          } catch (sz) {
            tz ??= {
              error: sz
            }
          }
        if (tz) throw tz.error
      }
      isReady(zz) {
        var tz;
        return "ready" === (null === (tz = this.sets.get(zz)) || void 0 === tz ? void 0 : tz.state)
      }
      want(zz) {
        const tz = this.sets.get(zz);
        if ("loading" === (null === tz || void 0 === tz ? void 0 : tz.state)) return tz.wanted = !0, void this.capAnswer(zz, tz);
        if ("ready" === (null === tz || void 0 === tz ? void 0 : tz.state)) return void this.host.sendReady(ko(zz, tz.images, tz.size));
        const sz = this.table[zz];
        if (!sz || 1 !== sz.urls.length && sz.urls.length !== Ss.ac.CubeFaces) return this.host.sendReady(io(zz)), void this.host.onLoadFailed(zz, "", new Error(`no image set ${zz}`));
        const Fz = {
          state: "loading",
          wanted: !0
        };
        this.sets.set(zz, Fz), this.load(zz, sz, Fz, this.generation, 0), this.capAnswer(zz, Fz)
      }
      capAnswer(zz, tz) {
        this.host.wait(4e3, (() => {
          this.sets.get(zz) === tz && tz.wanted && this.host.sendReady(io(zz))
        }))
      }
      load(zz, tz, sz, Fz, Wz) {
        const Xz = [...new Set(tz.urls)];
        Promise.allSettled(Xz.map((zz => this.host.loadImage(zz, tz.orientation)))).then((Oz => {
          const oz = Oz.flatMap((zz => "fulfilled" === zz.status ? [zz.value] : [])),
            vz = Fz === this.generation && this.sets.get(zz) === sz,
            Uz = Oz.findIndex((zz => "rejected" === zz.status));
          if (!vz || !sz.wanted) return this.lw ? void this.releaseAfterDispose(oz.map(Qo)) : (this.releaseAll(oz.map(Qo)), void(vz && this.sets.delete(zz)));
          Uz < 0 ? this.loaded(zz, tz, Xz, oz) : (this.releaseAll(oz.map(Qo)), this.host.sendReady(io(zz)), Wz < Mo.length ? this.host.wait(Mo[Wz], (() => {
            Fz === this.generation && this.sets.get(zz) === sz && (sz.wanted ? this.load(zz, tz, sz, Fz, Wz + 1) : this.sets.delete(zz))
          })) : (this.sets.delete(zz), this.host.onLoadFailed(zz, Xz[Uz], Oz[Uz].reason)))
        }))
      }
      loaded(zz, tz, sz, Fz) {
        const [Wz] = Fz, Xz = [Wz.width, Wz.height], Oz = Fz.every((zz => zz.width === Xz[0] && zz.height === Xz[1])), oz = tz.urls.length === Ss.ac.CubeFaces;
        if (!Oz || Xz[0] <= 0 || Xz[1] <= 0 || Xz[0] > 65535 || Xz[1] > 65535 || oz && Xz[0] !== Xz[1]) {
          this.releaseAll(Fz.map(Qo)), this.sets.delete(zz), this.host.sendReady(io(zz));
          const sz = Fz.map((zz => `${zz.width}x${zz.height}`));
          return void this.host.onLoadFailed(zz, tz.urls[0], new Error(`set ${zz}'s images can't make its texture: ${sz.join(", ")}`))
        }
        const vz = tz.urls.map((zz => Fz[sz.indexOf(zz)].id)),
          Uz = Fz.map(Qo);
        this.sets.set(zz, {
          state: "ready",
          images: vz,
          distinct: Uz,
          size: Xz
        }), this.host.sendReady(ko(zz, vz, Xz))
      }
      release(zz) {
        const tz = this.sets.get(zz);
        "loading" === (null === tz || void 0 === tz ? void 0 : tz.state) ? tz.wanted = !1: "ready" === (null === tz || void 0 === tz ? void 0 : tz.state) && (this.releaseAll(tz.distinct), this.sets.delete(zz))
      }
      releaseAll(zz) {
        for (const tz of zz) this.host.Csz(tz)
      }
      releaseAfterDispose(zz) {
        for (const tz of zz) try {
          this.host.Csz(tz)
        } catch {}
      }
    }

    function Qo(zz) {
      return zz.id
    }

    function ko(zz, tz, sz) {
      const Fz = new Uint8Array(Ss.ac.SkyImagesReadyBytes),
        Wz = new DataView(Fz.buffer);
      return Wz.setUint16(0, zz, !0), Wz.setUint16(2, tz.length, !0), Wz.setUint16(4, sz[0], !0), Wz.setUint16(6, sz[1], !0), tz.slice(0, Ss.ac.CubeFaces).forEach(((zz, tz) => {
        Wz.setUint32(8 + 4 * tz, zz, !0)
      })), Fz
    }

    function io(zz) {
      const tz = new Uint8Array(Ss.ac.SkyImagesReadyBytes),
        sz = new DataView(tz.buffer);
      return sz.setUint16(0, zz, !0), sz.setUint16(2, Ss.ac.Failed, !0), tz
    }
    let Lo = Promise.resolve();
    async function no(zz, tz) {
      let sz;
      try {
        sz = await (0, yo.G)(zz)
      } catch (Xz) {
        throw new jo.d("fetch", zz, {
          cause: Xz
        })
      }
      const Fz = Lo.then((() => async function(zz, tz) {
        const sz = new Blob([zz.slice()]);
        let Fz = await createImageBitmap(sz, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: tz
        });
        const Wz = 1024 / Math.max(Fz.width, Fz.height);
        if (Wz < 1) {
          const zz = Fz;
          try {
            Fz = await createImageBitmap(zz, {
              resizeWidth: Math.max(1, Math.round(zz.width * Wz)),
              resizeHeight: Math.max(1, Math.round(zz.height * Wz)),
              resizeQuality: "high",
              premultiplyAlpha: "none",
              colorSpaceConversion: "none"
            })
          } finally {
            zz.close()
          }
        }
        return Fz
      }(sz, tz)));
      let Wz;
      Lo = Fz.catch((() => {}));
      try {
        Wz = await Fz
      } catch (Xz) {
        throw new jo.d("decode", zz, {
          cause: Xz
        })
      }
      return {
        id: (0, jo.l)(Wz),
        width: Wz.width,
        height: Wz.height
      }
    }
    var ao = sz(2883),
      qo = sz(33840);
    const So = ao.g.length;

    function Vo(zz) {
      const tz = [],
        sz = [];
      ao.g.forEach(((Fz, Wz) => {
        var Xz;
        const Oz = null !== (Xz = Ro(zz[Fz])) && void 0 !== Xz ? Xz : qo.j[Fz];
        "custom" === Oz.type ? (sz.push({
          id: Wz,
          kind: Ss.ac.KindCustom,
          set: tz.length,
          earth: null
        }), tz.push({
          urls: [Oz.px, Oz.py, Oz.pz, Oz.nx, Oz.ny, Oz.nz],
          orientation: "none"
        })) : sz.push({
          id: Wz,
          kind: Ss.ac.KindEarth,
          set: 0,
          earth: Oz
        })
      }));
      const Fz = Ro(zz.earth);
      "earth" === (null === Fz || void 0 === Fz ? void 0 : Fz.type) && sz.push({
        id: So,
        kind: Ss.ac.KindEarth,
        set: 0,
        earth: Fz
      });
      const Wz = tz.length;
      tz.push({
        urls: qo.f.map((zz => qo.h + zz)),
        orientation: "none"
      }), tz.push({
        urls: [qo.i],
        orientation: "flipY"
      }), tz.push({
        urls: [qo.d],
        orientation: "flipY"
      });
      const Xz = new Uint8Array(Ss.ac.SkyTableHeaderBytes + sz.length * Ss.ac.SkyTableEntryBytes),
        Oz = new DataView(Xz.buffer);
      return Oz.setUint16(0, Wz, !0), Oz.setUint16(2, Wz + 1, !0), Oz.setUint16(4, Wz + 2, !0), Oz.setUint16(6, sz.length, !0), sz.forEach(((zz, tz) => {
        const sz = Ss.ac.SkyTableHeaderBytes + tz * Ss.ac.SkyTableEntryBytes;
        Oz.setUint16(sz, zz.id, !0), Oz.setUint8(sz + 2, zz.kind);
        const Fz = sz + 4;
        zz.earth ? function(zz, tz, sz) {
          const Fz = zz;
          let Wz = 0,
            Xz = 0;
          for (const [Oz, oz] of po) {
            const zz = Fz[Oz];
            "number" === typeof zz && Number.isFinite(zz) && (tz.setFloat32(sz + 4 * oz, zz, !0), Wz |= 1 << oz)
          }
          for (const [Oz, oz, vz] of fo) {
            const zz = Fz[Oz];
            Array.isArray(zz) && 3 === zz.length && zz.every((zz => "number" === typeof zz && Number.isFinite(zz))) && (zz.forEach(((zz, Fz) => {
              tz.setFloat32(sz + vz + 4 * Fz, zz, !0)
            })), Wz |= oz)
          }
          Eo.forEach(((zz, Xz) => {
            let [Oz, oz] = zz;
            const vz = Fz[Oz];
            "number" === typeof vz && Number.isFinite(vz) && (tz.setFloat32(sz + Ss.q.CameraOffsetAt + 4 * Xz, vz, !0), Wz |= oz)
          }));
          for (const [Oz, oz] of zv) {
            const zz = Fz[Oz];
            null !== zz && void 0 !== zz && (Wz |= oz, zz && (Xz |= oz >>> 14))
          }
          tz.setUint32(sz + Ss.q.PresentAt, Wz, !0), tz.setUint8(sz + Ss.q.FlagsAt, Xz)
        }(zz.earth, Oz, Fz) : Oz.setUint16(Fz, zz.set, !0)
      })), {
        payload: Xz,
        sets: tz
      }
    }

    function Ro(zz) {
      if ("object" !== typeof zz || null === zz) return null;
      const tz = zz;
      if ("earth" === tz.type) return zz;
      return "custom" === tz.type && ["px", "py", "pz", "nx", "ny", "nz"].every((zz => {
        const sz = tz[zz];
        return "string" === typeof sz && sz.length > 0
      })) ? zz : null
    }
    const po = [
        ["inclination", Ss.q.Inclination],
        ["turbidity", Ss.q.Turbidity],
        ["luminance", Ss.q.Luminance],
        ["rayleigh", Ss.q.Rayleigh],
        ["mieCoefficient", Ss.q.MieCoefficient],
        ["mieDirectionalG", Ss.q.MieDirectionalG],
        ["distance", Ss.q.Distance],
        ["azimuth", Ss.q.Azimuth]
      ],
      fo = [
        ["sunPosition", Ss.q.SunPosition, Ss.q.SunPositionAt],
        ["up", Ss.q.Up, Ss.q.UpAt],
        ["vertexTint", Ss.q.VertexTint, Ss.q.VertexTintAt]
      ],
      Eo = [
        ["xCameraOffset", Ss.q.CameraOffsetX],
        ["yCameraOffset", Ss.q.CameraOffsetY],
        ["zCameraOffset", Ss.q.CameraOffsetZ]
      ],
      zv = [
        ["useSunPosition", Ss.q.UseSunPosition],
        ["dithering", Ss.q.Dithering],
        ["infiniteDistance", Ss.q.InfiniteDistance]
      ];

    function tv(zz, tz, sz) {
      const Fz = new Fv({
        writeCmd: zz,
        warn: tz,
        followPack: sv(sz, tz)
      });
      return Fz.start(), Fz
    }

    function sv(zz, tz) {
      return sz => {
        let Fz = () => {};
        const Wz = zz((zz => {
          Fz(), Fz = () => {}, null !== zz ? Fz = zz.subscribe((zz => {
            sz(function(zz, tz, sz) {
              if ("object" !== typeof zz || null === zz) return null;
              const Fz = zz.skyBoxes;
              if ("object" !== typeof Fz || null === Fz) return null;
              if ("player" === tz) return Fz;
              return Object.fromEntries(Object.entries(Fz).filter((zz => {
                let [tz, Fz] = zz;
                return !! function(zz) {
                  if ("object" !== typeof zz || null === zz) return !1;
                  return "earth" === zz.type || Object.entries(zz).every((zz => {
                    let [tz, sz] = zz;
                    return "type" === tz || ("" === (Fz = sz) || null !== function(zz) {
                      var tz, sz, Fz;
                      return "string" !== typeof zz ? null : null !== (tz = null === (sz = Wv.exec(zz)) || void 0 === sz || null === (Fz = sz.groups) || void 0 === Fz ? void 0 : Fz.base64) && void 0 !== tz ? tz : null
                    }(Fz));
                    var Fz
                  }))
                }(Fz) || (sz(`Ignoring texture pack skybox ${tz}, whose faces are not all data URLs`, null), !1)
              })))
            }(zz.pack, null === zz.gameSource ? "player" : "customGame", tz))
          })) : sz(null)
        }));
        return () => {
          Wz(), Fz()
        }
      }
    }
    class Fv {
      constructor(zz) {
        var tz, sz, Fz;
        this.host = zz, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.lw = !1, this.wait = null !== (tz = zz.wait) && void 0 !== tz ? tz : (zz, tz) => {
          setTimeout(tz, zz)
        }, this.loader = new ho({
          loadImage: null !== (sz = zz.loadImage) && void 0 !== sz ? sz : no,
          Csz: null !== (Fz = zz.Csz) && void 0 !== Fz ? Fz : jo.m,
          sendReady: zz => {
            this.queue.push({
              kind: Ss.ac.SkyImagesReady,
              payload: zz
            })
          },
          onLoadFailed: (tz, sz, Fz) => {
            zz.warn(`sky image set ${tz} (${sz}) didn't load: the last sky stays`, Fz)
          },
          wait: this.wait
        })
      }
      start() {
        this.wait(Ao.d, (() => {
          null === this.written && this.write({})
        })), this.stopFollowing = this.host.followPack((zz => {
          this.write(null !== zz && void 0 !== zz ? zz : {})
        }))
      }
      onEvent(zz) {
        this.loader.onEvent(zz)
      }
      drain() {
        if (0 === this.queue.length) return;
        let zz = 0;
        for (; zz < this.queue.length && this.host.writeCmd(this.queue[zz].kind, 0, this.queue[zz].payload);) zz++;
        zz > 0 && this.queue.splice(0, zz)
      }
      dispose() {
        this.lw = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
      }
      write(zz) {
        if (this.lw) return;
        const tz = Vo(zz);
        var sz, Fz;
        this.written && (sz = this.written, Fz = tz, sz.payload.length === Fz.payload.length && sz.payload.every(((zz, tz) => zz === Fz.payload[tz])) && sz.sets.length === Fz.sets.length && sz.sets.every(((zz, tz) => {
          const sz = Fz.sets[tz];
          return zz.orientation === sz.orientation && zz.urls.length === sz.urls.length && zz.urls.every(((zz, tz) => zz === sz.urls[tz]))
        }))) || (this.written = tz, this.loader.reset(tz.sets), this.queue = this.queue.filter((zz => zz.kind !== Ss.ac.SkyImagesReady)), this.queue.push({
          kind: Ss.ac.SkyTable,
          payload: tz.payload
        }))
      }
    }
    const Wv = /^data:[\w.+/-]*;base64,(?<base64>[A-Za-z0-9+/]*={0,2})$/;
    var Xv = sz(2611),
      Ov = sz(2724),
      ov = sz(299),
      vv = sz(182),
      Uv = sz(2617),
      Kv = sz(2625),
      uv = sz(273),
      Nv = sz(277),
      bv = sz(2644),
      wv = sz(2671),
      Dv = sz(2684),
      gv = sz(119),
      Hv = sz(290),
      Bv = sz(39927);
    class Pv {
      constructor() {
        this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, QW.l)(PF.I, (zz => {
          this.onReply((0, hW.d)(PF.I, zz), performance.now())
        }))
      }
      onFrame(zz, tz) {
        null === this.id ? this.id = zz : zz !== this.id && (this.id = zz, this.sentMs = document.hidden ? null : tz)
      }
      onVisibilityChange() {
        this.sentMs = null
      }
      onReply(zz, tz) {
        zz === this.id && null !== this.sentMs && (this.roundTripMs = Math.round(tz - this.sentMs), this.sentMs = null)
      }
      take() {
        const zz = this.roundTripMs;
        return this.roundTripMs = null, zz
      }
      stop() {
        this.stopReplies()
      }
    }
    class rv {
      constructor() {
        this.sampled = 0, this.timed = 0, this.frameUs = 0, this.primed = !1, this.windowTimed = 0, this.windowUs = 0
      }
      onFrame(zz, tz, sz, Fz) {
        const Wz = zz - this.sampled >>> 0,
          Xz = tz - this.timed >>> 0,
          Oz = sz - this.frameUs >>> 0,
          oz = this.primed;
        return this.sampled = zz, this.timed = tz, this.frameUs = sz, this.primed = !0, !(!oz || Wz > 64 || Xz > 64) && (Fz && Oz <= 1e6 * Xz && (this.windowTimed += Xz, this.windowUs += Oz), Fz && Wz > 0)
      }
      reset() {}
      snapshotAndReset() {
        const zz = this.windowTimed > 0 ? this.windowUs / this.windowTimed / 1e3 : null;
        return this.windowTimed = 0, this.windowUs = 0, {
          passMs: zz,
          submitToDoneMs: null
        }
      }
    }
    const Yv = {
      pacedShare: null,
      switchesPerHour: null,
      lagP50Ms: null,
      lagP90Ms: null,
      joinLagP90Ms: null
    };
    class xv {
      constructor() {
        this.samples = new Float64Array(4096), this.count = 0
      }
      add(zz, tz) {
        const sz = Math.min(4096, this.count + tz);
        this.samples.fill(zz, this.count, sz), this.count = sz
      }
      clear() {
        this.count = 0
      }
      take(zz) {
        const tz = this.count;
        if (this.count = 0, tz < 30) return null;
        const sz = this.samples.subarray(0, tz).sort();
        return zz.map((zz => sz[Math.min(tz - 1, Math.floor(zz * tz))]))
      }
    }
    class mv {
      constructor() {
        this.word = 0, this.lagUs = 0, this.primed = !1, this.lastDrawnMs = -1, this.tieredMs = 0, this.pacedMs = 0, this.switches = 0, this.lags = new xv, this.inJoin = !1, this.rose = !1, this.joinLags = new xv, this.joinLagP90Ms = null
      }
      onFrame(zz, tz, sz, Fz, Wz) {
        const Xz = zz.headerWord(Ss.D.Pacing),
          Oz = zz.headerWord(Ss.D.PacingLagUs),
          oz = (Xz >>> Ss.R.LagsShift) - (this.word >>> Ss.R.LagsShift) & Ss.R.CountMask,
          vz = (Xz >>> Ss.R.SwitchesShift) - (this.word >>> Ss.R.SwitchesShift) & Ss.R.CountMask,
          Uz = oz > 0 ? (Oz - this.lagUs >>> 0) / oz / 1e3 : 0,
          Kz = this.primed && oz <= 64 && vz <= 2 && Uz <= 6e4;
        if (this.rose = 0 !== (Xz & ~this.word & Ss.R.Joining), this.word = Xz, this.lagUs = Oz, this.primed = !0, 0 !== (Xz & Ss.R.Tiered)) {
          if (0 !== (Xz & Ss.R.Joining)) this.rose && (this.inJoin = !0, this.joinLags.clear()), this.inJoin && Kz && Fz && oz > 0 && this.joinLags.add(Uz, oz);
          else if (this.inJoin) {
            var uz, Nz;
            this.inJoin = !1, this.joinLagP90Ms = null !== (uz = null === (Nz = this.joinLags.take([.9])) || void 0 === Nz ? void 0 : Nz[0]) && void 0 !== uz ? uz : null
          }
          if (Wz) {
            if (Kz && (this.switches += vz, oz > 0 && this.lags.add(Uz, oz)), sz) {
              if (this.lastDrawnMs >= 0 && tz - this.lastDrawnMs <= 250) {
                const zz = tz - this.lastDrawnMs;
                this.tieredMs += zz, (Xz & Ss.R.AheadMask) > 0 && (this.pacedMs += zz)
              }
              this.lastDrawnMs = tz
            }
          } else this.lastDrawnMs = -1
        } else this.lastDrawnMs = -1
      }
      onJoin() {
        this.takeWindow(), this.rose || (this.inJoin = !1, this.joinLags.clear()), this.lastDrawnMs = -1
      }
      snapshotAndReset(zz) {
        const tz = this.takeWindow(),
          sz = this.joinLagP90Ms;
        return this.joinLagP90Ms = null, zz ? {
          ...tz,
          joinLagP90Ms: sz
        } : {
          ...Yv,
          joinLagP90Ms: sz
        }
      }
      unsent(zz) {
        this.joinLagP90Ms ??= zz.joinLagP90Ms
      }
      takeWindow() {
        var zz, tz;
        const sz = this.tieredMs >= 2e3,
          Fz = this.lags.take([.5, .9]),
          Wz = {
            pacedShare: sz ? this.pacedMs / this.tieredMs : null,
            switchesPerHour: sz ? 36e5 * this.switches / this.tieredMs : null,
            lagP50Ms: null !== (zz = null === Fz || void 0 === Fz ? void 0 : Fz[0]) && void 0 !== zz ? zz : null,
            lagP90Ms: null !== (tz = null === Fz || void 0 === Fz ? void 0 : Fz[1]) && void 0 !== tz ? tz : null
          };
        return this.tieredMs = 0, this.pacedMs = 0, this.switches = 0, Wz
      }
    }
    var Jv = sz(8764),
      Iv = sz(2588),
      Cv = sz(39998),
      ev = sz(8757),
      Zv = sz(2633),
      Gv = sz(2607);
    const Tv = {
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

    function cv(zz) {
      return new jv(zz)
    }
    class jv {
      constructor(zz) {
        this.shell = zz, this.tracker = new Kv.c, this.gpu = new rv, this.pacing = new mv, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.fpsOverTime = null, this.firstSpanFps = null, this.initialFps = null, this.ping = new Pv, this.pacedCpuMs = 0, this.frameDebug = null, this.onVisibility = () => {
          this.tracker.onVisibilityChange(), this.ping.onVisibilityChange(), !document.hidden && this.fpsSpanStartMs >= 0 && (this.fpsFrames = 0, this.fpsSpanStartMs = performance.now())
        }, (0, Jv.e)(zz.backend, zz.canvas, zz.adapterVendor), this.tracker.start((() => !zz.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), (0, Zv.d)("wasm", (() => {
          const {
            n: tz,
            sampleCount: sz
          } = (0, Cv.d)();
          return `${zz.backend}, quality steps aim at up to ${Gv.c.target.maxFps} fps, pixel n ${tz}, msaa ${sz}`
        }), (zz => {
          this.frameDebug = zz
        })), this.timers.push(setInterval((() => {
          this.flush(), this.fpsOverTime = null, this.initialFps = null
        }), 1e4), setInterval((() => {
          this.followGame() && (this.hasFlushedSinceConnect || (this.flush(), this.hasFlushedSinceConnect = !0))
        }), 250))
      }
      animationFrame(zz) {
        var tz;
        this.tracker.onAnimationFrame(zz), null === (tz = this.frameDebug) || void 0 === tz || tz.animationFrame()
      }
      frameRan(zz, tz, sz, Fz) {
        var Wz;
        this.ping.onFrame(zz.headerWord(Ss.D.PingSent), sz);
        const Xz = this.tracker;
        this.pacing.onFrame(zz, tz, "drawn" === Fz, !document.hidden, Xz.isSampling());
        const Oz = zz.headerWord(Ss.D.TickUs) / 1e3 + (0, WF.N)();
        Xz.uB(Oz), null === (Wz = this.frameDebug) || void 0 === Wz || Wz.wasmFrame(zz, tz, sz, "drawn" === Fz, Xz.isSampling(), Oz, (0, ev.f)());
        const oz = Math.max(0, sz - tz - Oz);
        if ("drawn" !== Fz) return void("paced" === Fz && (this.pacedCpuMs += oz));
        this.followGame(), Xz.onFrameStart(tz);
        this.gpu.onFrame(zz.headerWord(Ss.D.GpuSampled), zz.headerWord(Ss.D.GpuTimed), zz.headerWord(Ss.D.GpuFrameUs), Xz.isSampling()) && Xz.onGpuSampleStarted(), Xz.onFrameCpu(oz + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(tz)
      }
      stop() {
        for (const zz of this.timers) clearInterval(zz);
        this.timers.length = 0, document.removeEventListener("visibilitychange", this.onVisibility), this.ping.stop()
      }
      followGame() {
        const zz = this.shell.joinedGame();
        return zz !== this.game && (this.game = zz, this.tracker.snapshotAndReset(), this.pacing.onJoin(), this.hasFlushedSinceConnect = !1, this.inGameAtLastFlush = !1, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.pacedCpuMs = 0, this.firstSpanFps = null, this.fpsOverTime = null, this.initialFps = null), null !== zz
      }
      countFpsFrame(zz) {
        if (this.fpsSpanStartMs < 0) {
          if (!this.shell.inGame()) return;
          this.fpsSpanStartMs = zz
        }
        this.fpsFrames++;
        const tz = zz - this.fpsSpanStartMs;
        if (!(tz < Dv.d)) {
          if (!document.hidden) {
            const zz = 1e3 * this.fpsFrames / tz;
            this.firstSpanFps ??= zz, this.initialFps = this.firstSpanFps, this.fpsOverTime = zz
          }
          this.fpsFrames = 0, this.fpsSpanStartMs = zz
        }
      }
      flush() {
        const zz = this.followGame(),
          {
            cpuFrameMs: tz,
            refreshHz: sz,
            cpuBottleneck: Wz,
            frameIntervalCv: Xz,
            ...Oz
          } = this.tracker.snapshotAndReset(),
          oz = this.shell.inGame(),
          vz = oz && this.inGameAtLastFlush,
          Uz = vz ? Oz : Uv.f,
          Kz = this.pacing.snapshotAndReset(vz);
        if (this.inGameAtLastFlush = oz, this.pendingLightFailures += this.shell.takeFailedMeshJobs(), !zz) return void this.pacing.unsent(Kz);
        const uz = performance.now(),
          bz = (0, wv.s)((0, wv.r)(uz), this.unsentPage),
          Dz = function(zz, tz, sz, Wz, Xz, Oz, oz, vz) {
            var Uz, Kz, uz, Nz;
            const bz = {},
              {
                canvas: wz
              } = zz,
              Dz = (0, bv.e)({
                refreshHz: tz.refreshHz,
                msaa: zz.msaa(),
                autoMsaaOff: (0, ev.d)()
              });
            for (const gz of (0, Ov.c)()) {
              const Hz = gz.name;
              let Bz;
              if ((0, ov.r)(Hz)) Bz = (0, wv.d)(Hz);
              else if ((0, wv.i)(Hz)) Bz = vz[Hz];
              else if ((0, bv.f)(Hz)) Bz = Dz[Hz];
              else switch (Hz) {
                case "fps":
                  Bz = Wz;
                  break;
                case "Xv":
                  Bz = Xz;
                  break;
                case "Kv":
                  Bz = (0, Iv.x)((0, Cv.d)().n);
                  break;
                case "Nv":
                  Bz = Math.max(wz.width, wz.height);
                  break;
                case "bv":
                  Bz = Math.min(wz.width, wz.height);
                  break;
                case "wv":
                  Bz = navigator.hardwareConcurrency || null;
                  break;
                case "Dv":
                  Bz = (0, aW.getWebGpuSupported)();
                  break;
                case "gv":
                  Bz = null === zz.fallbackReason ? null : Tv[zz.fallbackReason];
                  break;
                case "Hv":
                  Bz = tz.cpuFrameMs;
                  break;
                case "Bv":
                  Bz = tz.refreshHz;
                  break;
                case "Pv":
                  Bz = tz.cpuBottleneck;
                  break;
                case "rv":
                  Bz = tz.frameIntervalCv;
                  break;
                case "Yv":
                  Bz = tz.frameMs;
                  break;
                case "xv":
                  Bz = tz.tickMs;
                  break;
                case "Cv":
                  Bz = tz.mainBusyShare;
                  break;
                case "ev":
                  Bz = tz.mainProbeDelayMs;
                  break;
                case "mv":
                  Bz = tz.longAnimationFramesPerMin;
                  break;
                case "Jv":
                  Bz = tz.longAnimationFrameTimeShare;
                  break;
                case "Iv":
                  Bz = tz.longAnimationFrameScriptShare;
                  break;
                case "Zv":
                  Bz = tz.gpuPassMs;
                  break;
                case "Gv":
                  Bz = tz.gpuSubmitToDoneMs;
                  break;
                case "Tv":
                  Bz = sz.pacedShare;
                  break;
                case "cv":
                  Bz = sz.switchesPerHour;
                  break;
                case "jv":
                  Bz = sz.lagP50Ms;
                  break;
                case "Av":
                  Bz = sz.lagP90Ms;
                  break;
                case "yv":
                  Bz = sz.joinLagP90Ms;
                  break;
                case "Vv":
                  Bz = (0, Xv.j)(Oz);
                  break;
                case "Uv":
                  Bz = oz;
                  break;
                case "Mv":
                case "hv":
                case "Qv":
                case "kv":
                case "iv":
                case "Lv":
                case "lv":
                case "nv":
                case "av":
                case "qv":
                case "Sv":
                case "Rv":
                case "fv":
                case "Ev":
                case "zU":
                  Bz = null;
                  break;
                case "bU":
                  Bz = (0, aW.getPlatformType)();
                  break;
                case "wU":
                  Bz = (0, aW.getGpuVendor)();
                  break;
                case "DU":
                  Bz = Bv.e[zz.backend];
                  break;
                case "gU":
                  Bz = (0, gv.c)();
                  break;
                case "HU":
                  Bz = (0, aW.getOperatingSystem)();
                  break;
                case "BU":
                  Bz = (0, aW.getTrafficSource)();
                  break;
                case "PU":
                  Bz = null !== (Uz = Fz.b.get("gameEntrySource")) && void 0 !== Uz ? Uz : vv.e;
                  break;
                case "rU":
                  Bz = tz.frameLimiter;
                  break;
                case "YU":
                  Bz = (0, uv.j)();
                  break;
                case "xU":
                  Bz = null !== (Kz = (0, Nv.e)()) && void 0 !== Kz ? Kz : vv.e;
                  break;
                case "mU":
                  Bz = (0, uv.e)(wz.width, wz.height);
                  break;
                case "JU":
                  Bz = (0, Ov.e)(-(new Date).getTimezoneOffset());
                  break;
                case "eU":
                  Bz = null !== (uz = zz.fallbackReason) && void 0 !== uz ? uz : vv.e;
                  break;
                case "TU":
                  Bz = "ready";
                  break;
                case "cU":
                  Bz = (0, aW.getSoftwareRenderer)();
                  break;
                case "CU":
                  Bz = null !== zz.shaderPackReach() ? "true" : "false";
                  break;
                case "jU":
                  Bz = null !== (Nz = zz.shaderPackReach()) && void 0 !== Nz && Nz.sceneDepth ? "true" : "false";
                  break;
                case "AU": {
                  const tz = zz.shaderPackReach();
                  Bz = null !== tz && void 0 !== tz && tz.sunShadow ? "all" : null !== tz && void 0 !== tz && tz.airShadow ? "air" : "none";
                  break
                }
                case "yU":
                  Bz = Hv.w;
                  break;
                case "IU":
                case "ZU":
                case "GU":
                  Bz = vv.e;
                  break;
                default:
                  throw new Error(`Unhandled field name: ${Hz}`)
              }
              if (void 0 === Bz) throw new Error(`Metric ${Hz} has no value`);
              bz[Hz] = Bz
            }
            return bz
          }(this.shell, {
            cpuFrameMs: tz,
            refreshHz: sz,
            cpuBottleneck: Wz,
            frameIntervalCv: Xz,
            ...Uz
          }, Kz, this.fpsOverTime, this.initialFps, this.pendingLightFailures, this.ping.take(), bz);
        if (! function(zz, tz, sz) {
            return (0, Lt.c)(), zz(wz.n.Send, tz, sz)
          }(this.shell.writeCmd, Nz.ed, function(zz) {
            const tz = (0, Mz.f)((0, qt.e)(zz)),
              sz = new Uint8Array(wz.ee.BYTES + tz.length);
            return new DataView(sz.buffer).setUint16(0, qt.d.AnalyticsUpdate, !0), sz.set(tz, wz.ee.BYTES), sz
          }(Dz))) return this.unsentPage = bz, this.pacing.unsent(Kz), void(0 === this.sendsDropped++ && console.warn("[wasm-client] an analytics update found the cmd ring full: dropped"));
        this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, Xv.g), (0, wv.o)(Dz, "wasm", uz)
      }
    }
    var Av = sz(38947);

    function yv(zz, tz, sz) {
      const Fz = new Map;
      return (0, Av.c)(((zz, sz, Fz) => tz.yK(zz, sz, Fz)), ((tz, sz, Wz) => {
        const Xz = `${tz},${sz},${Wz}`;
        return Fz.has(Xz) || Fz.set(Xz, (0, Mt.e)(zz, tz, sz, Wz)), Fz.get(Xz)
      }), sz)
    }
    var Mv = sz(38950),
      dv = sz(39822);

    function hv(zz) {
      const tz = null !== zz && 0 !== (wz.t.playerFlags(zz.api.apiView, 0) & wz.Nd.CursorAim);
      tz !== (0, dv.r)() && (0, dv.N)(tz, null !== zz)
    }

    function Qv(zz) {
      return (0, BF.c)(PF.z, zz)
    }
    const kv = new Xz.g((zz => sz(41667)(`./${zz}/${zz}Client`)));
    let iv = null,
      Lv = null;
    async function lv(zz) {
      iv ??= sz.e(27).then((() => sz(38550))).then((zz => {
        Lv = zz.createDefaultClientPlugins
      }), (zz => {
        throw iv = null, zz
      })), await Promise.all([kv.load(zz), iv])
    }

    function nv(zz) {
      zz.load(new At(lF, new qF))
    }
    let av = !1;
    const qv = new WeakMap;

    function Sv(zz) {
      try {
        zz()
      } catch (tz) {
        console.error("[bloxd-wasm-client] a session-end step failed", tz)
      }
    }

    function Vv(zz, tz) {
      ! function() {
        var zz, tz;
        iF.Howler.volume();
        const sz = iF.Howler;
        null === (zz = sz._autoResume) || void 0 === zz || zz.call(sz), null === (tz = sz._autoSuspend) || void 0 === tz || tz.call(sz)
      }(), tz.audio.prepare();
      const sz = new rz(tz.core, tz.memory, tz.audio);
      let Xz;
      try {
        Xz = new wW(sz, tz.options)
      } catch (Nz) {
        return zz.crash(gW.y, Nz), null
      }(0, vz.f)(DW(sz, Xz));
      const Kz = new Yo({
        running: zz,
        api: sz,
        core: tz.core,
        memory: tz.memory,
        staleOr: tz.staleOr,
        reportFault: tz.reportReplayFault,
        options: tz.options,
        sessionInfo: tz.sessionInfo,
        replayShaderPack: tz.replayShaderPack
      });
      (0, WF.C)();
      const uz = new MF({
        api: sz,
        tables: Xz,
        sessionInfo: tz.sessionInfo,
        gameFactory: zz => kv.loadedFactory(zz),
        defaultPlugins: (zz, tz, sz, Fz) => {
          if (null === Lv) throw new Error("The default plugins started before they loaded");
          return Lv(zz, tz, sz, Fz)
        },
        serverOptions: tz.options,
        onNetEvent: zz => {
          Kz.netEvent(zz), tz.onNetEvent(zz)
        },
        setLocalOptions: tz => {
          mo(zz, {
            changes: tz,
            reset: !1
          })
        },
        playSound: (zz, sz, Fz, Wz, Xz, Oz, oz) => tz.audio.playGame(zz, sz, Fz, Wz, Xz, Oz, oz),
        onSessionEnd: () => {
          Sv(Wz.j), Sv(zW), Sv((() => {
            Fz.b.set({
              openInGameMenuName: null
            })
          })), Sv((() => {
            tz.audio.cancelPreload()
          }))
        },
        beforeWrite: tz.beforeWrite,
        beforeOp: tz.beforeOp,
        cameraScreen: EF,
        showCameraFacing: tW,
        onEventOverflow: tz.onEventOverflow,
        screenBandY: oz.i,
        replayEntities: Kz.entityHooks,
        hasPackModel: tz.hasPackModel
      });
      return uz.attach(zz), qv.set(uz, Kz), kF(uz.items, tz.audio),
        function(zz) {
          zz.setClientFreeCameraGrant("isDev", !1);
          const tz = tz => {
            zz.setClientFreeCameraGrant("hasDeveloperRank", tz.playerHasRank("developer"))
          };
          (0, Oz.q)("userContextUpdated", tz)
        }(uz), av || (av = !0, (0, Oz.q)("appManagerUpdated|openInGameMenuName", (zz => {
          !zz && (0, Uz.j)().includes(Uz.c) && (0, Uz.m)(Uz.c)
        }))), uz
    }

    function Rv(zz) {
      try {
        zz.closeGame()
      } finally {
        var tz;
        null === (tz = qv.get(zz)) || void 0 === tz || tz.stop(), qv.delete(zz)
      }
    }
  },
  39927: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Fz
    });
    const Fz = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  39938: (zz, tz, sz) => {
    function Fz() {
      return sz(39943)
    }

    function Wz() {
      return sz(39947)
    }

    function Xz(zz) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(zz)
    }
    sz.d(tz, {
      c: () => Xz,
      g: () => Fz,
      j: () => Wz
    })
  },
  35805: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Oz,
      f: () => Xz,
      i: () => vz
    });
    var Fz = sz(35796);
    const Wz = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function Xz(zz) {
      if (zz instanceof WebAssembly.RuntimeError) return !0;
      const tz = zz instanceof Error ? zz.stack : void 0;
      return "string" === typeof tz && Wz.test(tz)
    }

    function Oz(zz, tz, sz) {
      var Xz;
      const Oz = zz instanceof Error ? zz.name : "thrown",
        oz = (zz instanceof Error && null !== (Xz = zz.stack) && void 0 !== Xz ? Xz : "").split("\n").filter((zz => Wz.test(zz))).slice(0, 8).map((zz => zz.trim())),
        vz = null === tz ? "wasm memory unknown" : `wasm memory ${Math.round(tz/2**20)} MB`,
        Uz = null === sz.panic ? "" : `, panic: ${(0,Fz.j)(sz.panic)}`,
        Kz = `${Oz}: ${zz instanceof Error?zz.message:String(zz)}`;
      return `${(0,Fz.m)(sz.kind,sz.refusedBytes)} ${Kz} (${vz})${Uz}${oz.length>0?` | ${oz.join(" < ")}`:""}`
    }
    const oz = 500;

    function vz(zz) {
      let tz = "[object Object]";
      try {
        tz = String(zz)
      } catch {}
      if ("[object Object]" !== tz) return tz;
      try {
        var sz, Fz;
        return null !== (sz = null === (Fz = JSON.stringify(zz)) || void 0 === Fz ? void 0 : Fz.slice(0, oz)) && void 0 !== sz ? sz : tz
      } catch {
        return tz
      }
    }
  },
  41667: (zz, tz, sz) => {
    var Fz = {
      "./bedwars/bedwarsClient": [38642, 9],
      "./bridgeBattle/bridgeBattleClient": [38651, 10],
      "./buildAFactory2/buildAFactory2Client": [37908, 72, 71, 70, 219, 235, 11],
      "./classic/classicClient": [38655, 12],
      "./clutch/clutchClient": [38661, 13],
      "./containmentBreach/containmentBreachClient": [38669, 14],
      "./cooking/cookingClient": [38777, 15],
      "./defusal/defusalClient": [38784, 16],
      "./frontline/frontlineClient": [38788, 72, 71, 70, 17],
      "./goalRush/goalRushClient": [38790, 18],
      "./luckyBedwars/luckyBedwarsClient": [38796, 19],
      "./ninetyNineNights/ninetyNineNightsClient": [38798, 20],
      "./oneBlock/oneBlockClient": [38807, 21],
      "./plots/plotsClient": [38814, 234, 238, 22],
      "./pvpCiv/pvpCivClient": [38871, 23],
      "./skyIslands/skyIslandsClient": [38877, 24],
      "./skyblock/skyblockClient": [37948, 72, 219, 190, 25],
      "./tsunami/tsunamiClient": [38882, 26]
    };

    function Wz(zz) {
      if (!sz.o(Fz, zz)) return Promise.resolve().then((() => {
        var tz = new Error("Cannot find module '" + zz + "'");
        throw tz.code = "MODULE_NOT_FOUND", tz
      }));
      var tz = Fz[zz],
        Wz = tz[0];
      return Promise.all(tz.slice(1).map(sz.e)).then((() => sz(Wz)))
    }
    Wz.keys = () => Object.keys(Fz), Wz.id = 41667, zz.exports = Wz
  },
  39943: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  39947: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  },
  35796: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Fz,
      f: () => Xz,
      j: () => vz,
      k: () => Oz,
      m: () => Wz
    });
    const Fz = /^alloc_failed (\d+) bytes$/;

    function Wz(zz, tz) {
      return Xz(zz, tz) ? `trap=alloc_failed ${tz} bytes` : `trap=${zz}`
    }

    function Xz(zz, tz) {
      return "unreachable" === zz && tz > 0
    }

    function Oz(zz, tz, sz) {
      const Fz = function(zz) {
        return zz instanceof WebAssembly.RuntimeError ? /unreachable/i.test(zz.message) ? "unreachable" : /out of bounds/i.test(zz.message) ? "out_of_bounds" : "runtime_error" : (zz instanceof RangeError || zz instanceof Error && "InternalError" === zz.name) && /call stack|recursion/i.test(zz.message) ? "stack_overflow" : "js_error"
      }(zz);
      if ("unreachable" !== Fz) return {
        kind: Fz,
        panic: null,
        refusedBytes: 0
      };
      const Wz = tz(),
        Xz = sz();
      return {
        kind: Fz,
        panic: Xz > 0 ? null : Wz,
        refusedBytes: Xz
      }
    }
    const oz = 300;

    function vz(zz) {
      return zz.replace(/\s*\n\s*/g, " / ").slice(0, oz)
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);