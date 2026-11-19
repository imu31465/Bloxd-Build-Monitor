export const id = 53;
export const ids = [53];
export const modules = {
  41830: (zz, uz, bz) => {
    var Ez = {
      "./bedwars/bedwarsClient": [38611, 9],
      "./bridgeBattle/bridgeBattleClient": [38620, 10],
      "./buildAFactory2/buildAFactory2Client": [37872, 72, 71, 70, 219, 235, 11],
      "./classic/classicClient": [38624, 12],
      "./clutch/clutchClient": [38632, 13],
      "./containmentBreach/containmentBreachClient": [38638, 14],
      "./cooking/cookingClient": [38777, 15],
      "./defusal/defusalClient": [38783, 16],
      "./frontline/frontlineClient": [38791, 72, 71, 70, 17],
      "./goalRush/goalRushClient": [38798, 18],
      "./luckyBedwars/luckyBedwarsClient": [38803, 19],
      "./ninetyNineNights/ninetyNineNightsClient": [38810, 20],
      "./oneBlock/oneBlockClient": [38813, 21],
      "./plots/plotsClient": [38822, 234, 238, 22],
      "./pvpCiv/pvpCivClient": [38892, 23],
      "./skyIslands/skyIslandsClient": [38894, 24],
      "./skyblock/skyblockClient": [37910, 72, 219, 190, 25],
      "./tsunami/tsunamiClient": [38898, 26]
    };

    function nz(zz) {
      if (!bz.o(Ez, zz)) return Promise.resolve().then((() => {
        var uz = new Error("Cannot find module '" + zz + "'");
        throw uz.code = "MODULE_NOT_FOUND", uz
      }));
      var uz = Ez[zz],
        nz = uz[0];
      return Promise.all(uz.slice(1).map(bz.e)).then((() => bz(nz)))
    }
    nz.keys = () => Object.keys(Ez), nz.id = 41830, zz.exports = nz
  },
  38361: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => iz,
      e: () => nz
    });
    var Ez = bz(22);

    function nz(zz) {
      return "refetchCode" === zz || "devDownloadJson" === zz || zz.startsWith("Plugin")
    }

    function iz(zz, uz) {
      "refetchCode" !== zz ? "Plugin|MobAiPlugin|ShowPetUi" !== zz ? Promise.all([bz.e(105), bz.e(106), bz.e(101), bz.e(103), bz.e(210)]).then((() => bz(40949))).then((bz => {
        let {
          runClientGameMessage: Ez
        } = bz;
        Ez(zz, uz)
      })).catch((uz => {
        console.error(`Game message ${zz} failed`, uz)
      })) : Ez.k.sK("showPetUi", uz) : Ez.k.sK("refetchCode")
    }
  },
  41809: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Ez,
      e: () => nz
    });
    const Ez = ["recording", "freecam", "keyframe"];

    function nz() {
      const zz = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(zz[1]) << 32n | BigInt(zz[0])
    }
  },
  39993: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Mz
    });
    const Ez = 1 << 20,
      nz = 1 << 21,
      iz = 1024,
      lz = 2048;

    function Mz(zz, uz, bz) {
      const Mz = zz + Ez,
        tz = uz + iz,
        Hz = bz + Ez;
      return Mz < 0 || Mz >= nz || Hz < 0 || Hz >= nz || tz < 0 || tz >= lz ? -1 : (Mz * nz + Hz) * lz + tz
    }
  },
  39987: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Ez,
      f: () => lz,
      g: () => nz,
      k: () => iz,
      l: () => Oz,
      o: () => Hz,
      q: () => tz,
      u: () => Mz
    });
    bz(3204);
    bz(39993);

    function Ez(zz) {}

    function nz(zz) {}

    function iz(zz) {}

    function lz(zz) {}

    function Mz(zz) {}

    function tz(zz, uz, bz) {}

    function Hz(zz) {}

    function Oz(zz) {}
  },
  8908: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Mz,
      d: () => tz
    });
    var Ez = bz(20);
    const nz = 24,
      iz = "farNametags",
      lz = 1e5;

    function Mz() {
      var zz;
      return null === (zz = Ez.e.get("showDistantNametags")) || void 0 === zz || zz
    }

    function tz() {
      var zz;
      return null !== (zz = function() {
        const zz = new URLSearchParams(window.location.search).get(iz),
          uz = null === zz || "" === zz ? NaN : Number(zz);
        return Number.isFinite(uz) && uz >= 0 ? Math.min(uz, lz) : null
      }()) && void 0 !== zz ? zz : Mz() ? 0 : nz
    }
  },
  41801: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      blockIdOf: () => ht.e,
      clearWasmCameraScreen: () => CE,
      creativeItemIds: () => zE.creativeItemIds,
      decodeMapSettings: () => gt,
      drainTextRerasters: () => VM.c,
      enchantmentPerksOf: () => zE.enchantmentPerksOf,
      endGameHost: () => Ct,
      followCursorAim: () => ct,
      followMenuPrefs: () => Bn,
      loadAudio: () => Wt,
      loadClientGame: () => Qt,
      loadTextIcons: () => VM.d,
      rasterText: () => aM.d,
      readBoardToEdit: () => qt,
      setTextHost: () => VM.k,
      setTextLocalPlayer: () => VM.o,
      showInCreativeInvenOf: () => zE.showInCreativeInvenOf,
      startGameHost: () => Bt,
      startShellAnalytics: () => Gt,
      startSkyFeed: () => ut,
      textChanged: () => VM.u,
      warmText: () => aM.g,
      wasmCameraScreen: () => BE
    });
    bz(35981);
    var Ez = bz(20),
      nz = bz(36243),
      iz = bz(38498),
      lz = bz(22),
      Mz = bz(3159),
      tz = bz(36237),
      Hz = bz(1269),
      Oz = bz(584),
      pz = bz(37637),
      dz = bz(4560),
      Fz = bz(39800),
      Zz = bz(39740);
    const Rz = Zz.Pb / 4,
      Kz = Zz.t.PlaySound,
      wz = Zz.t.SoundReset,
      Xz = dz.V.ReplayFailed,
      fz = dz.V.RecorderEvent;
    class sz {
      constructor(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.core = zz, this.memory = uz, this.audio = bz, this.serverIds = new Int32Array(256).fill(Zz.bd), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.view = new DataView(new ArrayBuffer(Zz.z.BYTES)), this.renderPtr = 0, this.Bp = 0, this.renderCapacity = 0, this.render = new Float32Array(0), this.visPtr = 0, this.vis = new Uint8Array(0), this.renderBuffer = null, this.eventsBuffer = null, this.eventsPtr = 0, this.eventsLen = 0, this.events = new DataView(new ArrayBuffer(0)), this.audioView = null, this.scratchPtr = -1, this.corruption = null, this.replay = null, this.queries = new Zz.db(zz, (() => {
          this.scratchPtr = -1, this.ensureViews()
        }))
      }
      scratch() {
        return this.scratchPtr < 0 && (this.scratchPtr = this.core.LEz(), this.ensureViews()), this.scratchPtr
      }
      eventBytes(zz, uz) {
        const bz = this.eventView();
        return new Uint8Array(bz.buffer, bz.byteOffset + zz, uz)
      }
      get apiView() {
        return this.ensureViews(), this.view
      }
      ensureViews() {
        this.memory().buffer !== this.buffer && this.reView()
      }
      get localId() {
        return Zz.z.localId(this.apiView, 0)
      }
      localDeaths() {
        return Zz.z.localDeaths(this.apiView, 0)
      }
      rereadDirectory() {
        const zz = this.apiView,
          uz = Zz.z.entRenderPtr(zz, 0),
          bz = Zz.z.entVisPtr(zz, 0),
          Ez = Zz.z.entCapacity(zz, 0);
        if (uz !== this.renderPtr || bz !== this.visPtr || Ez !== this.Bp || this.renderBuffer !== this.buffer) {
          this.renderPtr = uz, this.visPtr = bz, this.Bp = Ez, this.renderBuffer = this.buffer;
          const zz = this.memoryView(Float32Array, uz, Ez * Rz, "the render array"),
            nz = this.memoryView(Uint8Array, bz, Ez, "the visibility array");
          this.renderCapacity = zz && nz ? Ez : 0, this.render = zz && nz ? zz : new Float32Array(0), this.vis = zz && nz ? nz : new Uint8Array(0)
        }
      }
      memoryView(zz, uz, bz, Ez) {
        try {
          return (0, Fz.q)(zz, this.memory().buffer, uz, bz, Ez)
        } catch (nz) {
          return this.keepCorruption(nz), null
        }
      }
      memoryData(zz, uz, bz, Ez) {
        try {
          return (0, Fz.f)(this.memory().buffer, zz, uz, bz, Ez)
        } catch (nz) {
          return this.keepCorruption(nz), null
        }
      }
      reportCorruption(zz) {
        this.keepCorruption(new Fz.b(zz))
      }
      keepCorruption(zz) {
        if (!(zz instanceof Fz.b)) throw zz;
        this.corruption ??= zz
      }
      throwCorruption() {
        if (this.corruption) throw this.corruption
      }
      walk(zz, uz, bz) {
        this.rereadDirectory(), this.throwCorruption();
        const {
          ptr: Ez,
          len: nz
        } = zz;
        this.eventsPtr = Ez, this.eventsLen = nz, this.eventsBuffer = null;
        const iz = this.eventView();
        for (let Hz = 0; Hz < nz;) {
          const zz = iz.getUint32(Hz, !0),
            bz = 65535 & zz,
            Ez = zz >>> 16,
            nz = Hz + dz.S;
          if (bz === Zz.t.EntitySpawned) {
            var lz;
            if (Ez !== Zz.Wb.BYTES) throw xz(bz, Hz, Ez);
            const zz = Zz.Wb.serverId(iz, nz);
            this.spawned(zz, Zz.Wb.index(iz, nz), Zz.Wb.kind(iz, nz)), null === (lz = uz.entityAdded) || void 0 === lz || lz.call(uz, zz)
          } else if ((bz === Zz.t.ChunkSlot || bz === Zz.t.EntityInfoChanged) && !(0, Zz.oe)(bz, iz, nz, Ez, uz)) throw xz(bz, Hz, Ez);
          Hz = nz + (0, dz.ie)(Ez)
        }
        try {
          var Mz;
          null === (Mz = uz.afterPrescan) || void 0 === Mz || Mz.call(uz), this.throwCorruption(), !bz() && this.dispatch(zz, uz, bz) && (this.throwCorruption(), this.applyListener(), uz.afterWalk(zz.kind)), this.throwCorruption()
        } catch (tz) {
          throw tz instanceof Fz.b && (this.corruption ??= tz), tz
        } finally {
          bz() || null !== this.corruption || this.applyDespawns(nz, uz)
        }
      }
      applyDespawns(zz, uz) {
        const bz = this.eventView();
        for (let nz = 0; nz < zz;) {
          const zz = bz.getUint32(nz, !0),
            iz = nz + dz.S;
          if ((65535 & zz) === Zz.t.EntityDespawned && zz >>> 16 === Zz.Wb.BYTES) {
            const zz = Zz.Wb.serverId(bz, iz);
            var Ez;
            if (this.despawned(zz, Zz.Wb.index(bz, iz))) null === (Ez = uz.entityRemoved) || void 0 === Ez || Ez.call(uz, zz)
          }
          nz = iz + (0, dz.ie)(zz >>> 16)
        }
        this.rereadDirectory()
      }
      dispatch(zz, uz, bz) {
        const {
          len: Ez,
          net: nz,
          netOffsets: iz
        } = zz;
        let lz = this.eventView(),
          Mz = 0;
        for (let oz = 0; oz < Ez;) {
          const zz = lz.getUint32(oz, !0),
            Ez = 65535 & zz,
            Nz = zz >>> 16,
            Jz = oz + dz.S;
          let Az = !1;
          if (Mz < nz.length && iz[Mz] === oz) uz.netEvent(nz[Mz]), Mz++, Az = !0;
          else if (Ez === dz.V.LocalPlayerBound) {
            var tz;
            if (Nz !== dz.Ab) throw xz(Ez, oz, Nz);
            null === (tz = uz.localPlayerBound) || void 0 === tz || tz.call(uz, lz.getInt32(Jz, !0)), Az = !0
          } else if (Ez === dz.V.LocalHurt) {
            var Hz;
            if (Nz !== dz.yb) throw xz(Ez, oz, Nz);
            null === (Hz = uz.localHurt) || void 0 === Hz || Hz.call(uz, lz.getInt32(Jz, !0), lz.getFloat32(Jz + 4, !0), lz.getUint32(Jz + 8, !0)), Az = !0
          } else if (Ez === dz.V.AttackHit) {
            var Oz;
            if (Nz !== dz.c) throw xz(Ez, oz, Nz);
            const zz = lz.getFloat32(Jz, !0),
              bz = lz.getFloat32(Jz + 4, !0),
              nz = lz.getFloat32(Jz + 8, !0),
              iz = lz.getUint32(Jz + 12, !0);
            null === (Oz = uz.attackHit) || void 0 === Oz || Oz.call(uz, zz, bz, nz, 0 !== (iz & dz.i.Crit), 0 !== (iz & dz.i.HitSelf))
          } else if (Ez === dz.V.PhysicsType) {
            var pz;
            if (Nz !== dz.Yb) throw xz(Ez, oz, Nz);
            null === (pz = uz.physicsType) || void 0 === pz || pz.call(uz, lz.getUint32(Jz, !0), lz.getInt32(Jz + 4, !0)), Az = !0
          } else if (Ez === dz.V.VehicleEffect) {
            var Fz;
            const zz = vz(lz, Jz, Nz);
            if (null === zz) throw xz(Ez, oz, Nz);
            null === (Fz = uz.vehicleEffect) || void 0 === Fz || Fz.call(uz, zz.op, zz.name, zz.icon, zz.level, zz.durationMs), Az = !0
          } else if (Ez === dz.V.ZoomChanged) {
            var Rz;
            if (Nz !== dz.Qd) throw xz(Ez, oz, Nz);
            null === (Rz = uz.zoomChanged) || void 0 === Rz || Rz.call(uz, lz.getFloat32(Jz, !0), lz.getUint8(Jz + 4)), Az = !0
          } else if (Ez === dz.V.ZoomDisabled) {
            var sz;
            if (0 !== Nz) throw xz(Ez, oz, Nz);
            null === (sz = uz.zoomDisabled) || void 0 === sz || sz.call(uz), Az = !0
          } else if (Ez === dz.V.GameCamera) {
            var rz;
            null === (rz = uz.gameCamera) || void 0 === rz || rz.call(uz, new Uint8Array(lz.buffer, lz.byteOffset + Jz, Nz).slice()), Az = !0
          } else if (Ez === Zz.t.ChunkSlot || Ez === Zz.t.EntityInfoChanged);
          else if (Ez >= Kz && Ez <= wz) {
            if (this.audio && !this.audio.onAudioEvent(Ez, lz, Jz, Nz)) throw xz(Ez, oz, Nz)
          } else if (Ez >= Xz && Ez <= fz) {
            if (this.replay) {
              if (!this.replay.onReplayEvent(Ez, lz, Jz, Nz)) throw xz(Ez, oz, Nz);
              Az = !0
            }
          } else if (Ez >= Zz.qd && Ez <= Zz.td && Ez !== dz.V.EnvLighting) {
            if (!(0, Zz.oe)(Ez, lz, Jz, Nz, uz)) throw xz(Ez, oz, Nz);
            Az = !0
          }
          if (Az) {
            if (bz()) return !1;
            lz = this.eventView()
          }
          oz = Jz + (0, dz.ie)(Nz)
        }
        return !bz()
      }
      applyListener() {
        var zz;
        if (!this.audio) return;
        const uz = Zz.z.audioViewPtr(this.apiView, 0),
          bz = this.memory().buffer;
        let Ez = this.audioView;
        (null === (zz = Ez) || void 0 === zz ? void 0 : zz.buffer) === bz && Ez.byteOffset === uz || (Ez = (0, Fz.f)(bz, uz, Zz.D.BYTES, 8, "the audio view"), this.audioView = Ez), Ez && this.audio.applyListener(Ez)
      }
      indexOf(zz) {
        return this.indexById.get("number" === typeof zz ? zz : +zz)
      }
      isLocal(zz) {
        return zz !== Zz.bd && zz === Zz.z.localId(this.apiView, 0)
      }
      Gs(zz) {
        const uz = [0, 0, 0];
        return this.readPosition("number" === typeof zz ? zz : +zz, uz) ? uz : null
      }
      readPosition(zz, uz) {
        const bz = this.apiView;
        if (void 0 !== this.indexById.get(zz) && this.isLocal(zz)) {
          for (let zz = 0; zz < 3; zz++) uz[zz] = Zz.z.localPos(bz, 0, zz);
          return !0
        }
        return this.readDrawnPosition(zz, uz)
      }
      readDrawnPosition(zz, uz) {
        const bz = this.apiView,
          Ez = this.indexById.get(zz);
        if (void 0 === Ez || Ez >= this.renderCapacity) return uz[0] = uz[1] = uz[2] = NaN, !1;
        const nz = Ez * Rz;
        for (let iz = 0; iz < 3; iz++) uz[iz] = this.render[nz + iz] + Zz.z.origin(bz, 0, iz);
        return !0
      }
      checkValid(zz) {
        return void 0 !== this.indexOf(zz)
      }
      isAlive(zz) {
        const uz = this.indexOf(zz);
        if (void 0 === uz) return null;
        if (this.ensureViews(), uz >= this.renderCapacity) return null;
        const bz = this.vis[uz];
        return 0 === bz ? null : 0 !== (bz & Zz.le.Alive)
      }
      getEntityType(zz) {
        const uz = this.indexOf(zz);
        return void 0 === uz ? this.isLocal("number" === typeof zz ? zz : +zz) ? "Player" : null : oz(this.kinds[uz])
      }
      spawned(zz, uz, bz) {
        if (uz >= 1048576) throw new Fz.b(`entity ${zz} spawned at index ${uz}`);
        this.ensureIndex(uz), this.serverIds[uz] === zz && null !== this.idStr[uz] || (this.idStr[uz] = String(zz)), this.serverIds[uz] = zz, this.kinds[uz] = bz, this.indexById.set(zz, uz)
      }
      despawned(zz, uz) {
        let bz = !1;
        return this.indexById.get(zz) === uz && (this.indexById.delete(zz), bz = !0), uz < this.serverIds.length && this.serverIds[uz] === zz && (this.serverIds[uz] = Zz.bd, this.kinds[uz] = 0, this.idStr[uz] = null), bz
      }
      ensureIndex(zz) {
        const uz = this.serverIds.length;
        if (zz < uz) return;
        let bz = 2 * uz;
        for (; bz <= zz;) bz *= 2;
        const Ez = new Int32Array(bz).fill(Zz.bd);
        Ez.set(this.serverIds), this.serverIds = Ez;
        const nz = new Uint16Array(bz);
        nz.set(this.kinds), this.kinds = nz;
        for (let iz = uz; iz < bz; iz++) this.idStr.push(null)
      }
      eventView() {
        const zz = this.memory().buffer;
        return zz !== this.eventsBuffer && (this.eventsBuffer = zz, this.events = new DataView(zz, this.eventsPtr, this.eventsLen)), this.events
      }
      reView() {
        const zz = this.memory().buffer;
        this.buffer = zz, this.viewPtr < 0 && (this.viewPtr = this.core.PEz()), this.view = new DataView(zz, this.viewPtr, Zz.z.BYTES), this.rereadDirectory()
      }
    }

    function rz(zz) {
      return zz >>> Zz.e === Zz.w.Item
    }

    function oz(zz) {
      var uz, bz;
      const Ez = zz & Zz.i;
      switch (zz >>> Zz.e) {
        case Zz.w.Lifeform:
          return null !== (uz = Oz.j[Ez]) && void 0 !== uz ? uz : null;
        case Zz.w.Throwable:
          return null !== (bz = pz.l[Ez]) && void 0 !== bz ? bz : null;
        case Zz.w.Mesh:
          return "Mesh";
        case Zz.w.Audio:
          return "AudioEntity";
        case Zz.w.Item:
          return "Item";
        default:
          return null
      }
    }
    const Nz = new TextDecoder;

    function vz(zz, uz, bz) {
      if (bz < dz.td.HEAD_BYTES) return null;
      const Ez = zz.getUint32(uz, !0),
        nz = zz.getUint32(uz + 20, !0),
        iz = zz.getUint32(uz + 24, !0),
        lz = dz.td.HEAD_BYTES + (0, dz.ie)(nz);
      if (Ez !== dz.td.UPDATE && Ez !== dz.td.REMOVE || nz > bz || lz + iz > bz) return null;
      const Mz = (bz, Ez) => Nz.decode(new Uint8Array(zz.buffer, zz.byteOffset + uz + bz, Ez)),
        tz = zz.getFloat64(uz + 12, !0);
      return {
        op: Ez,
        level: zz.getFloat64(uz + 4, !0),
        durationMs: Number.isNaN(tz) ? null : tz,
        name: Mz(dz.td.HEAD_BYTES, nz),
        icon: Mz(lz, iz)
      }
    }

    function xz(zz, uz, bz) {
      return new Fz.b(`event ${zz} at ${uz} of ${bz} bytes`)
    }
    var Jz = bz(328),
      Az = bz(1212),
      Tz = bz(38361),
      Lz = bz(1885),
      Pz = bz(39867),
      Gz = bz(1840),
      az = bz(38518),
      Vz = bz(38553),
      mz = bz(38531),
      qz = bz(39784),
      hz = bz(2294),
      Uz = bz(38510),
      cz = bz(38549);
    const gz = Math.max(Zz.Fb.BYTES, Zz.ub.BYTES, Zz.yb.BYTES);

    function Sz(zz) {
      if (!(0, cz.f)(zz)) return null;
      const uz = Number(zz);
      return (0 | uz) === uz ? uz : null
    }
    class yz {
      constructor(zz) {
        this.api = zz, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, Uz.m)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.Li = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], this.entityHeading = 0, this.localId = Zz.bd, this.localName = String(Zz.bd), this.scratch = null
      }
      readView() {
        this.defaultPoseRead = !1, this.Li = null;
        const zz = this.api.queries.directorView() >= Zz.Fb.BYTES ? this.scratchView() : null;
        null !== zz && (this.defaultFov = (0, Gz.B)(Zz.Fb.fov(zz, 0)), this.baseFov = (0, Gz.B)(Zz.Fb.baseFov(zz, 0)), this.aspect = Zz.Fb.aspect(zz, 0), this.bodyHeading = Zz.Fb.bodyHeading(zz, 0))
      }
      getViewHeading() {
        return this.viewHeading
      }
      setViewHeading(zz) {
        this.viewHeading = zz
      }
      get localPlayerId() {
        const zz = Zz.z.localId(this.api.apiView, 0);
        return zz !== this.localId && (this.localId = zz, this.localName = String(zz)), this.localName
      }
      getEntityPosition(zz) {
        return this.readEntity(zz) ? this.entityFeet : null
      }
      getEntityAimPoint(zz) {
        return this.readEntity(zz) ? this.entityAim : null
      }
      getEntityHeading(zz) {
        const uz = Sz(zz);
        if (null === uz) return null;
        const bz = Zz.z.localId(this.api.apiView, 0);
        return uz === bz && bz !== Zz.bd ? this.viewHeading : this.readEntity(zz) ? this.entityHeading : null
      }
      raycastTerrain(zz, uz, bz) {
        const Ez = this.api.queries.cameraSweep(zz[0], zz[1], zz[2], uz[0], uz[1], uz[2], bz);
        return Ez < bz - 1e-6 ? Ez : null
      }
      getDefaultPose() {
        if (this.defaultPoseRead) return this.defaultPose;
        this.defaultPoseRead = !0;
        const zz = this.defaultPose;
        zz.fov = this.defaultFov;
        const uz = this.api.queries.directorDefaultPose() >= Zz.ub.BYTES ? this.scratchView() : null;
        if (null === uz) return zz;
        for (let bz = 0; bz < 3; bz++) zz.position[bz] = Zz.ub.eye(uz, 0, bz);
        return zz.heading = Zz.ub.heading(uz, 0), zz.pitch = Zz.ub.pitch(uz, 0), zz
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
        const uz = Sz(zz);
        if (null === uz) return !1;
        if (uz === this.Li) return this.entityLive;
        this.Li = uz;
        const bz = this.api.queries.directorEntity(uz) >= Zz.yb.BYTES ? this.scratchView() : null;
        if (this.entityLive = null !== bz, null === bz) return !1;
        for (let Ez = 0; Ez < 3; Ez++) this.entityFeet[Ez] = Zz.yb.feet(bz, 0, Ez), this.entityAim[Ez] = this.entityFeet[Ez];
        return this.entityAim[1] += Zz.yb.eyeHeight(bz, 0), this.entityHeading = Zz.yb.heading(bz, 0), !0
      }
      scratchView() {
        const zz = this.api.scratch(),
          uz = this.api.memory().buffer,
          bz = this.scratch;
        return null !== bz && bz.buffer === uz && bz.byteOffset === zz ? bz : (this.scratch = this.api.memoryData(zz, gz, 8, "the director's record"), this.scratch)
      }
    }
    const Dz = {
        mode: "default"
      },
      Qz = {
        show: () => {},
        clear: () => {}
      };

    function Wz() {
      return "undefined" !== typeof document && "hidden" === document.visibilityState
    }
    class ez {
      constructor(zz) {
        this.options = zz, this.xd = void 0, this.director = void 0, this.latest = Dz, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
          QJ: 0,
          eJ: 0
        }, this.pointedAt = {
          heading: 0,
          pitch: 0
        }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastCallMs = 0, this.answeredPose = !1, this.fi = new Int32Array(3 * Zz.Rd), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * Zz.Rd), this.xd = new yz(zz.api), this.director = new mz.e(this.xd)
      }
      settingsChanged(zz) {
        let uz = Dz;
        if (zz.length > 0) try {
          uz = (0, qz.b)(zz)
        } catch {}
        this.latest = uz, this.pending = uz
      }
      call(zz, uz, bz, Ez, nz, iz) {
        var lz, Mz;
        let tz;
        this.holding = !1;
        try {
          tz = this.answer(zz, uz, bz, Ez, nz, iz)
        } catch (dz) {
          var Hz, Oz;
          throw this.answeredPose = !1, null === (Hz = (Oz = this.options).showFacing) || void 0 === Hz || Hz.call(Oz, null), dz
        }
        const pz = this.answeredPose && 0 === (Ez & Zz.Cb.Held);
        return this.answeredPose = tz !== Zz.tb.None, this.holding = this.answeredPose && !pz, null === (lz = (Mz = this.options).showFacing) || void 0 === lz || lz.call(Mz, this.holding ? this.facing : null), tz
      }
      holdsView() {
        return this.holding
      }
      answer(zz, uz, bz, Ez, nz, iz) {
        this.calledThisFrame = !0, this.engaged = !0, this.lastCallMs = this.now();
        const {
          xd: lz
        } = this;
        lz.readView();
        if (0 !== (Ez & Zz.Cb.Held) || lz.setViewHeading((0, az.t)(lz.bodyHeading)), void 0 !== this.pending) {
          const zz = this.pending;
          this.pending = void 0, this.director.setSettings(zz), this.syncShownSettings()
        }
        this.readLook((0, hz.e)(uz), (0, hz.e)(bz), Ez, (0, hz.e)(nz), (0, hz.e)(iz));
        const Mz = this.director.update(zz / 1e3, this.look);
        if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !Mz) return Zz.tb.None;
        const [tz, Hz, Oz] = Mz.position;
        if (0 === this.options.api.queries.directorPose(tz, Hz, Oz, (0, az.t)(Mz.heading), (0, az.i)(Mz.pitch), (0, Gz.j)(Mz.fov))) return Zz.tb.None;
        if ("default" === this.director.getSettings().mode) return Zz.tb.Pose;
        switch (this.facing) {
          case "camera":
            return Zz.tb.FaceCamera;
          case "cursor":
            return Zz.tb.FaceCursor;
          default:
            return Zz.tb.FaceMovement
        }
      }
      afterFrame(zz) {
        zz ? (this.calledThisFrame || (this.holding = !1, this.engaged && this.idle()), this.calledThisFrame = !1) : this.centresLen > 0 && this.hidden() && this.now() - this.lastCallMs > 1e3 && this.setCentres(0), this.centresUnsent && this.sendCentres()
      }
      reset() {
        this.latest = Dz, this.idle()
      }
      restart() {
        const zz = this.holding;
        this.idle(), this.holding = zz
      }
      idle() {
        var zz, uz;
        this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new mz.e(this.xd), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, null === (zz = (uz = this.options).showFacing) || void 0 === zz || zz.call(uz, null), this.setCentres(0)
      }
      syncShownSettings() {
        const zz = this.director.getSettings();
        if (zz === this.shownSettings) return;
        this.shownSettings = zz;
        const uz = (0, Vz.e)(zz);
        this.facing = uz.facing, this.mouseTurns = uz.mouseTurns
      }
      readLook(zz, uz, bz, Ez, nz) {
        const iz = this.look,
          lz = 0 !== (bz & Zz.Cb.LookPointed);
        if (null === this.mouseTurns && !lz) return iz.QJ = 0, iz.eJ = 0, void(iz.pointedAt = void 0);
        let Mz;
        lz && (this.pointedAt.heading = Ez, this.pointedAt.pitch = nz, Mz = this.pointedAt);
        const {
          xd: tz
        } = this;
        tz.setViewHeading((0, Vz.c)(tz.getViewHeading(), zz, uz, Mz, "look" === this.mouseTurns, iz))
      }
      writeCentres(zz) {
        const uz = this.next,
          bz = Math.min(zz.length, Zz.Rd);
        for (let Ez = 0; Ez < bz; Ez++)
          for (let bz = 0; bz < 3; bz++) uz[3 * Ez + bz] = Math.floor(zz[Ez][bz] / Zz.K);
        this.setCentres(bz)
      }
      setCentres(zz) {
        const {
          fi: uz,
          next: bz
        } = this;
        let Ez = zz === this.centresLen;
        for (let nz = 0; Ez && nz < 3 * zz; nz++) Ez = uz[nz] === bz[nz];
        Ez || (uz.fill(0), uz.set(bz.subarray(0, 3 * zz)), this.centresLen = zz, this.centresUnsent = !0, this.sendCentres())
      }
      sendCentres() {
        const zz = this.options.cmd();
        null !== zz && (0, Zz.Jf)(zz, 0, this.fi, this.centresLen) && (this.centresUnsent = !1)
      }
      screen() {
        var zz, uz, bz;
        return null !== (zz = null === (uz = (bz = this.options).screen) || void 0 === uz ? void 0 : uz.call(bz)) && void 0 !== zz ? zz : Qz
      }
      hidden() {
        var zz;
        return (null !== (zz = this.options.isPageHidden) && void 0 !== zz ? zz : Wz)()
      }
      now() {
        var zz, uz, bz;
        return null !== (zz = null === (uz = (bz = this.options).now) || void 0 === uz ? void 0 : uz.call(bz)) && void 0 !== zz ? zz : performance.now()
      }
    }
    var jz = bz(39993);
    const Iz = Zz.K * Zz.K * Zz.K,
      Bz = Math.log2(Zz.K),
      Cz = Zz.K - 1,
      Yz = Zz.Z.BYTES / 4,
      kz = new Uint16Array(Iz);

    function zu(zz, uz, bz) {
      return zz * Zz.K * Zz.K + uz * Zz.K + bz
    }
    class uu {
      constructor(zz) {
        this.chunk = zz
      }
      get data() {
        return this.chunk.gameVoxels()
      }
      index(zz, uz, bz) {
        return zu(zz, uz, bz)
      }
    }
    class bu {
      constructor() {
        this.ids = new Map, this.cleared = new Set, this.layers = 0, this.patched = null, this.from = null
      }
    }
    class Eu {
      constructor(zz, uz, bz, Ez) {
        this.table = zz, this.slot = uz, this.generation = bz, this.epoch = Ez, this.nF = new uu(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = kz, this.dataPtr = 0, this.dataBuffer = null, this.dataStamp = -1, this.version = 0, this.layers = null, this.layersVersion = -1, this.layersPtr = -1, this.staleLayers = 0
      }
      get XR() {
        return this.voxelData(), this.version === this.shownCore && this.writeCount === this.shownWrites || (this.shownCore = this.version, this.shownWrites = this.writeCount, this.shownVersion = this.table.nextVersion()), this.shownVersion
      }
      get bZ() {
        const zz = this.gameVoxels(),
          uz = this.layers ??= new Uint16Array(Zz.K);
        this.layersVersion === this.version && this.layersPtr === this.dataPtr || (this.layersVersion = this.version, this.layersPtr = this.dataPtr, this.staleLayers = -1);
        for (let bz = 0; 0 !== this.staleLayers; bz++) {
          const Ez = 1 << bz;
          0 !== (this.staleLayers & Ez) && (this.staleLayers &= ~Ez, uz[bz] = nu(zz, bz))
        }
        return uz
      }
      voxelData() {
        return this.dataStamp === this.table.stamp && 0 !== this.data.length ? this.data : this.reread()
      }
      gameVoxels() {
        const zz = this.voxelData(),
          uz = this.writes;
        if (null === uz || 0 === uz.ids.size) return zz;
        if (uz.from !== zz) {
          const bz = uz.patched ??= new Uint16Array(Iz);
          bz.set(zz);
          for (const [zz, Ez] of uz.ids) bz[zz] = Ez;
          uz.from = zz
        }
        return uz.patched
      }
      written(zz) {
        var uz;
        return null === (uz = this.writes) || void 0 === uz ? void 0 : uz.ids.get(zz)
      }
      hasWrites() {
        return null !== this.writes && 0 !== this.writes.ids.size
      }
      write(zz, uz, bz) {
        const Ez = this.writes ??= new bu;
        Ez.ids.set(zz, uz), bz && Ez.cleared.add(zz), null !== Ez.from && (Ez.patched[zz] = uz);
        const nz = 1 << (zz >> Bz & Cz);
        Ez.layers |= nz, this.staleLayers |= nz, this.writeCount++
      }
      clearWrites() {
        const zz = this.writes;
        null !== zz && (this.staleLayers |= zz.layers, zz.ids.clear(), zz.cleared.clear(), zz.layers = 0, zz.from = null)
      }
      dataCleared(zz) {
        var uz;
        return !0 === (null === (uz = this.writes) || void 0 === uz ? void 0 : uz.cleared.has(zz))
      }
      reread() {
        this.dataStamp = this.table.stamp;
        const zz = this.table.slotWords(),
          uz = this.slot * Yz;
        if (this.epoch !== this.table.epoch || uz + Yz > zz.length || 0 === zz[uz + 3] || zz[uz + 2] !== this.generation) return this.data = kz, this.dataPtr = 0, kz;
        this.version = zz[uz + 1];
        const bz = zz[uz + 0],
          Ez = zz.buffer;
        return bz === this.dataPtr && Ez === this.dataBuffer || (this.dataPtr = bz, this.dataBuffer = Ez, this.data = this.table.voxelsAt(Ez, bz)), this.data
      }
    }

    function nu(zz, uz) {
      const bz = zz[uz * Zz.K];
      for (let Ez = 0; Ez < Zz.K; Ez++) {
        const nz = zu(Ez, uz, 0);
        for (let uz = 0; uz < Zz.K; uz++)
          if (zz[nz + uz] !== bz) return 65535
      }
      return bz
    }
    const iu = new Uint32Array(0);

    function lu(zz, uz, bz) {
      return zu(zz & Cz, uz & Cz, bz & Cz)
    }
    class Mu {
      constructor(zz, uz) {
        this.memory = zz, this.apiView = uz, this.chunks = new Map, this.written = [], this.lastKey = -1, this.lastChunk = void 0, this.slotsPtr = 0, this.slotsLen = 0, this.slotsBuffer = null, this.slots = iu, this.walkPtr = 0, this.walkLen = 0, this.walkBuffer = null, this.walk = iu, this.epoch = 0, this.stamp = 0, this.versions = 0, this.corruption = null
      }
      apply(zz, uz, bz, Ez, nz, iz) {
        if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, iz === Zz.bb.ResetAll) return this.chunks.clear(), void this.epoch++;
        if (iz !== Zz.bb.Stored && iz !== Zz.bb.Unloaded) throw new Fz.b(`ChunkSlot flags ${iz}`);
        const lz = (0, jz.d)(zz, uz, bz);
        if (lz < 0) return;
        if (iz === Zz.bb.Unloaded) return void this.chunks.delete(lz);
        const Mz = this.chunks.get(lz);
        (null === Mz || void 0 === Mz ? void 0 : Mz.slot) === Ez && Mz.generation === nz || this.chunks.set(lz, new Eu(this, Ez, nz, this.epoch))
      }
      touch() {
        this.stamp++, this.clearOverlay(), this.viewWalkThrough()
      }
      refresh() {
        if (this.stamp++, this.corruption) throw this.corruption;
        const zz = this.apiView(),
          uz = Zz.z.chunkSlotsPtr(zz, 0),
          bz = Zz.z.chunkSlotsLen(zz, 0);
        uz === this.slotsPtr && bz === this.slotsLen || (this.slotsPtr = uz, this.slotsLen = bz, this.slotsBuffer = null, this.slotWords()), this.viewWalkThrough(), this.clearOverlay()
      }
      viewWalkThrough() {
        const zz = this.apiView(),
          uz = Zz.z.walkThroughPtr(zz, 0),
          bz = Zz.z.walkThroughLen(zz, 0);
        uz === this.walkPtr && bz === this.walkLen || (this.walkPtr = uz, this.walkLen = bz, this.walkBuffer = null, this.walkWords())
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
        var uz;
        zz !== this.slotsBuffer && (this.slotsBuffer = zz, this.slots = null !== (uz = (0, Fz.q)(Uint32Array, zz, this.slotsPtr, this.slotsLen * Yz, "the chunk directory")) && void 0 !== uz ? uz : iu);
        return this.slots
      }
      voxelsAt(zz, uz) {
        try {
          var bz;
          return null !== (bz = (0, Fz.q)(Uint16Array, zz, uz, Iz, "a chunk's voxels")) && void 0 !== bz ? bz : kz
        } catch (Ez) {
          if (!(Ez instanceof Fz.b)) throw Ez;
          return this.corruption ??= Ez, kz
        }
      }
      chunk(zz, uz, bz) {
        var Ez;
        return null !== (Ez = this.chunks.get((0, jz.d)(zz, uz, bz))) && void 0 !== Ez ? Ez : null
      }
      isLoaded(zz, uz, bz) {
        return void 0 !== this.chunkAt(Math.floor(zz), Math.floor(uz), Math.floor(bz))
      }
      hO(zz, uz, bz) {
        var Ez;
        const nz = Math.floor(zz),
          iz = Math.floor(uz),
          lz = Math.floor(bz),
          Mz = this.chunkAt(nz, iz, lz);
        if (!Mz) return 0;
        const tz = lu(nz, iz, lz);
        return null !== (Ez = Mz.written(tz)) && void 0 !== Ez ? Ez : Mz.voxelData()[tz]
      }
      setOverlay(zz, uz, bz, Ez) {
        let nz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const iz = this.chunkAt(zz, uz, bz);
        return !!iz && (iz.hasWrites() || this.written.push(iz), iz.write(lu(zz, uz, bz), Ez, nz), !0)
      }
      version(zz, uz, bz) {
        var Ez, nz;
        return null !== (Ez = null === (nz = this.chunks.get((0, jz.d)(zz, uz, bz))) || void 0 === nz ? void 0 : nz.XR) && void 0 !== Ez ? Ez : null
      }
      scan(zz, uz, bz, Ez, nz, iz, lz, Mz) {
        const tz = Zz.K;
        let Hz = 0;
        for (let Oz = Math.floor(uz / tz); Oz * tz < nz; Oz++) {
          const pz = Oz * tz,
            dz = Math.min(nz - pz, tz);
          for (let nz = Math.floor(zz / tz); nz * tz < Ez; nz++) {
            const Fz = nz * tz,
              Zz = Math.min(Ez - Fz, tz);
            for (let Ez = Math.floor(bz / tz); Ez * tz < iz; Ez++) {
              const Rz = this.chunks.get((0, jz.d)(nz, Oz, Ez));
              if (!Rz) continue;
              const Kz = Ez * tz,
                wz = Math.max(bz - Kz, 0),
                Xz = Math.min(iz - Kz, tz),
                fz = Rz.bZ,
                sz = Rz.gameVoxels();
              for (let bz = Math.max(uz - pz, 0); bz < dz; bz++) {
                const uz = fz[bz];
                if (65535 === uz || 0 !== lz[uz]) {
                  Hz++;
                  for (let uz = Math.max(zz - Fz, 0); uz < Zz; uz++) {
                    const zz = zu(uz, bz, 0);
                    for (let Ez = wz; Ez < Xz; Ez++) {
                      const nz = sz[zz + Ez];
                      0 !== lz[nz] && Mz.push(Fz + uz, pz + bz, Kz + Ez, nz)
                    }
                  }
                }
              }
            }
          }
        }
        return Hz
      }
      dataCleared(zz, uz, bz) {
        var Ez;
        const nz = Math.floor(zz),
          iz = Math.floor(uz),
          lz = Math.floor(bz);
        return !0 === (null === (Ez = this.chunkAt(nz, iz, lz)) || void 0 === Ez ? void 0 : Ez.dataCleared(lu(nz, iz, lz)))
      }
      isWalkThrough(zz) {
        if (!Number.isInteger(zz) || zz < 0 || zz > 65535) return !1;
        const uz = this.walkWords(),
          bz = zz >>> 5;
        return bz < uz.length && 1 === (uz[bz] >>> (31 & zz) & 1)
      }
      walkWords() {
        const zz = this.memory().buffer;
        var uz;
        zz !== this.walkBuffer && (this.walkBuffer = zz, this.walk = null !== (uz = (0, Fz.q)(Uint32Array, zz, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== uz ? uz : iu);
        return this.walk
      }
      chunkAt(zz, uz, bz) {
        if ((0 | zz) !== zz || (0 | uz) !== uz || (0 | bz) !== bz) return;
        const Ez = (0, jz.d)(zz >> Bz, uz >> Bz, bz >> Bz);
        return Ez !== this.lastKey && (this.lastKey = Ez, this.lastChunk = this.chunks.get(Ez)), this.lastChunk
      }
    }
    var tu = bz(37890),
      Hu = bz(37271),
      Ou = bz(36214),
      pu = bz(36096),
      du = bz(8920),
      Fu = bz(38467),
      Zu = bz(195);
    const Ru = ["ambient", "cars", "crowd", "customGame_horror", "dig", "fire", "fishing", "gameStart", "gunMisc", "gunPistol", "gunRifle", "gunSemiAutomatic", "gunShotgun", "gunSubmachineGun", "mob", "note", "phoneAndMoney", "police", "random", "rpg", "step", "survivalFactory", "town"],
      Ku = [
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
      wu = Ku.map((zz => {
        let [uz] = zz;
        return uz
      })),
      Xu = Uint8Array.from(Ku, (zz => {
        let [, uz] = zz;
        return uz
      })),
      fu = {
        semi_automatic: 11,
        submachine: 13,
        rifle: 10,
        pistol: 9,
        shotgun: 12
      },
      su = 8;
    var ru = bz(36205),
      ou = bz(262);
    const Nu = 2 ** Ru.length - 1;
    class vu {
      constructor(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ou.d;
        this.sheet = zz, this.onError = uz, this.idle = bz, this.queue = [], this.asked = 0, this.cancelIdle = null, this.gen = 0, this.onIdle = zz => {
          this.cancelIdle = null;
          try {
            if (zz.timeRemaining() >= 1) {
              let zz = this.queue.shift();
              for (; void 0 !== zz && !this.load(zz);) zz = this.queue.shift()
            }
          } catch (uz) {
            this.onError(uz)
          } finally {
            this.schedule()
          }
        }
      }
      preload(zz) {
        const uz = zz & Nu & ~this.asked;
        if (0 !== uz) {
          this.asked |= uz;
          for (let zz = 0; zz < Ru.length; zz++) uz & 1 << zz && this.queue.push(zz);
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
        const uz = this.sheet(zz, !1),
          bz = this.sheet(zz, !0),
          [Ez, nz] = "unloaded" === uz.state() && "unloaded" !== bz.state() ? [bz, uz] : [uz, bz],
          iz = this.gen,
          lz = () => {
            try {
              iz === this.gen && "unloaded" === nz.state() && nz.load()
            } catch (zz) {
              this.onError(zz)
            }
          },
          Mz = Ez.state();
        return "unloaded" === Mz ? (Ez.once("load", lz), Ez.load(), !0) : "unloaded" === nz.state() && ("loading" === Mz ? (Ez.once("load", lz), !1) : (nz.load(), !0))
      }
    }
    var xu = bz(40106);
    const Ju = {
        coneInnerAngle: 360,
        coneOuterAngle: 360,
        coneOuterGain: 0,
        distanceModel: "inverse",
        maxDistance: 1e3,
        panningModel: "HRTF",
        rolloffFactor: 1
      },
      Au = Zu.e.mw * Zu.e.playerEyeToHeightRatio,
      Tu = [0, 0, -1, 0, 1, 0],
      Lu = Ru.indexOf("note");

    function Pu(zz) {
      return zz >= 0 ? Math.min(1, zz) : 0
    }

    function Gu(zz) {
      var uz;
      let bz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
      const Ez = function(zz) {
        let uz = 0,
          bz = wu.length;
        for (; uz < bz;) {
          const Ez = uz + bz >>> 1;
          wu[Ez] < zz ? uz = Ez + 1 : bz = Ez
        }
        return uz
      }(zz);
      if ("" === zz || null === (uz = wu[Ez]) || void 0 === uz || !uz.startsWith(zz)) return -1;
      if (wu[Ez] === zz) return Ez;
      let nz = Ez + 1;
      for (; nz < wu.length && wu[nz].startsWith(zz);) nz++;
      return Ez + Math.floor(bz() * (nz - Ez))
    }
    class au {
      constructor(zz, uz, bz, Ez, nz) {
        this.group = zz, this.loudness = uz, this.startMs = bz, this.howl = Ez, this.host = nz, this.id = 0, this.direct = !1
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
    class Vu {
      constructor(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          Ez = arguments.length > 3 ? arguments[3] : void 0;
        this.createHowl = zz, this.listener = uz, this.now = bz, this.errors = 0, this.sheets = new Map, this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader = void 0, this.voices = new ru.b, this.failed = new Set, this.started = new Set, this.voiceHost = {
          alive: zz => this.aliveVoice(zz),
          started: zz => this.started.has(zz),
          drop: zz => {
            var uz;
            null === (uz = this.live.get(zz)) || void 0 === uz || uz.howl.stop(zz), this.forget(zz)
          }
        }, this.handlers = {
          playSound: (zz, uz, bz, Ez, nz, iz, lz, Mz, tz) => {
            if (Ez >= wu.length) return;
            const Hz = 0 !== (nz & Zz.be.Loop);
            nz & Zz.be.TwoD ? this.start(Ez, !1, lz, iz, Mz, Hz) : this.startSpatial(Ez, lz, iz, Mz, Hz, zz, uz, bz, tz, this.earDistSq(zz, uz, bz))
          },
          soundPos: (zz, uz, bz, Ez) => {
            const nz = this.core.get(Ez);
            var iz;
            void 0 !== nz && (null === (iz = this.live.get(nz)) || void 0 === iz || iz.howl.pos(bz, uz, zz, nz))
          },
          soundSet: (zz, uz, bz, Ez) => {
            const nz = this.core.get(zz),
              iz = void 0 === nz ? void 0 : this.live.get(nz);
            void 0 !== nz && iz && (this.setRel(nz, uz), iz.rate = bz, iz.howl.rate(bz, nz), iz.spatial && iz.howl.pannerAttr({
              refDistance: Ez
            }, nz))
          },
          soundFade: (zz, uz, bz, Ez) => {
            const nz = this.core.get(zz);
            void 0 !== nz && this.fade(nz, uz, bz, 0 !== (Ez & Zz.ae.StopAfter))
          },
          soundStop: zz => {
            const uz = this.core.get(zz);
            var bz;
            void 0 !== uz && (null === (bz = this.live.get(uz)) || void 0 === bz || bz.howl.stop(uz), this.forget(uz))
          },
          soundReset: () => {
            this.stopCore()
          }
        }, this.loader = new vu(((zz, uz) => this.sheet(zz, uz)), (zz => {
          this.errors++, console.error("Audio preload failed", zz)
        }), Ez)
      }
      prepare() {
        for (let zz = 0; zz < Ru.length; zz++) this.sheet(zz, !1), this.sheet(zz, !0)
      }
      preload(zz) {
        this.loader.preload(zz)
      }
      cancelPreload() {
        this.loader.cancel()
      }
      onAudioEvent(zz, uz, bz, Ez) {
        if (zz < Zz.t.PlaySound || zz > Zz.t.SoundReset) return !1;
        try {
          return (0, Zz.oe)(zz, uz, bz, Ez, this.handlers)
        } catch (nz) {
          return this.errors++, console.error("Audio event failed", nz), !0
        }
      }
      applyListener(zz) {
        const uz = this.nextPose;
        for (let Ez = 0; Ez < 3; Ez++) uz[2 - Ez] = Zz.D.listener(zz, 0, Ez), uz[5 - Ez] = Zz.D.forward(zz, 0, Ez), uz[8 - Ez] = Zz.D.up(zz, 0, Ez);
        0 === uz[3] && 0 === uz[4] && 0 === uz[5] && uz.set(this.posed ? this.pose.subarray(3) : Tu, 3);
        for (let Ez = 0; Ez < 9; Ez++)
          if (!Number.isFinite(uz[Ez])) return;
        const bz = this.pose;
        if (this.posed) {
          let zz = !0;
          for (let Ez = 0; Ez < 9 && zz; Ez++) zz = uz[Ez] === bz[Ez];
          if (zz) return
        }
        this.listener.apply(uz) && (bz.set(uz), this.posed = !0)
      }
      playGame(zz, uz, bz, Ez, nz, iz, lz) {
        const Mz = Gu(zz);
        if (Mz < 0) return xu.e;
        if (!bz) {
          const {
            howl: zz,
            id: bz
          } = this.start(Mz, !1, uz, 0, 1, lz);
          return this.gameSound(zz, bz, !1)
        }
        const tz = bz[0],
          Hz = bz[1] + Au,
          Oz = bz[2];
        if (!Number.isFinite(tz) || !Number.isFinite(Hz) || !Number.isFinite(Oz)) return xu.e;
        let pz;
        if (Ez) {
          const zz = tz - Ez[0],
            uz = Hz - Ez[1],
            bz = Oz - Ez[2];
          if (pz = zz * zz + uz * uz + bz * bz, pz > nz * nz) return xu.e
        } else pz = this.earDistSq(tz, Hz, Oz);
        const dz = this.startSpatial(Mz, uz, 0, 1, lz, tz, Hz, Oz, iz, pz);
        return dz ? this.gameSound(dz.howl, dz.id, !0) : xu.e
      }
      setMaster(zz, uz) {
        this.level = Pu(zz);
        const bz = uz ? this.level : 0;
        if (bz !== this.master) {
          this.master = bz;
          for (const [zz, uz] of this.live) uz.fadeMs = 0, uz.gain = uz.rel * this.master, uz.howl.volume(uz.gain, zz)
        }
      }
      stopCore() {
        for (const uz of [...this.core.values()]) {
          var zz;
          null === (zz = this.live.get(uz)) || void 0 === zz || zz.howl.stop(uz)
        }
        this.core.clear()
      }
      stopAll() {
        this.cancelPreload();
        for (const [zz, uz] of [...this.live]) uz.howl.stop(zz), this.forget(zz);
        this.core.clear()
      }
      gameSound(zz, uz, bz) {
        const Ez = {
          stop: () => (this.live.has(uz) && zz.stop(uz), Ez),
          fade: (zz, bz, nz) => {
            var iz, lz;
            const Mz = this.level > 0 ? bz / this.level : bz > 0 && null !== (iz = null === (lz = this.live.get(uz)) || void 0 === lz ? void 0 : lz.rel) && void 0 !== iz ? iz : 0;
            return this.fade(uz, Mz, nz, !1), Ez
          },
          rate: bz => {
            const nz = this.live.get(uz);
            return nz && (nz.rate = function(zz) {
              return zz > 0 && zz < 1 / 0 ? zz : 1
            }(bz), zz.rate(nz.rate, uz)), Ez
          },
          getVolume: () => {
            var zz, bz;
            return (null !== (zz = null === (bz = this.live.get(uz)) || void 0 === bz ? void 0 : bz.rel) && void 0 !== zz ? zz : 0) * this.level
          },
          getRelativeVolume: () => {
            var zz, bz;
            return null !== (zz = null === (bz = this.live.get(uz)) || void 0 === bz ? void 0 : bz.rel) && void 0 !== zz ? zz : 0
          },
          setRelativeVolume: zz => (this.setRel(uz, zz), Ez),
          setPannerAttr: nz => {
            if (bz && this.live.has(uz)) {
              const bz = {
                ...Ju,
                refDistance: Ou.h
              };
              for (const [zz, uz] of Object.entries(nz)) "number" !== typeof uz && "string" !== typeof uz || (bz[zz] = uz);
              zz.pannerAttr({
                coneOuterAngle: bz.coneOuterAngle
              }, uz), zz.pannerAttr(bz, uz)
            }
            return Ez
          },
          setPosition: nz => (bz && this.live.has(uz) && Number.isFinite(nz[0] + nz[1] + nz[2]) && zz.pos(nz[2], nz[1], nz[0], uz), Ez)
        };
        return Ez
      }
      startSpatial(zz, uz, bz, Ez, nz, iz, lz, Mz, tz, Hz) {
        const Oz = this.sheet(Xu[zz], !0);
        let pz = null;
        if (!nz) {
          if (this.failed.has(Oz)) return null;
          const bz = Xu[zz] === Lu ? null : (0, ru.h)(wu[zz]),
            Ez = (0, ru.e)(Pu(uz), Math.sqrt(Hz), tz);
          if (pz = new au(bz, Ez, this.now(), Oz, this.voiceHost), !this.voices.admit(pz)) return null
        }
        const dz = this.start(zz, !0, uz, bz, Ez, nz);
        return pz && (pz.id = dz.id, pz.direct = "loaded" === Oz.state() && !Oz._playLock), Oz.pannerAttr({
          coneOuterAngle: 360
        }, dz.id), Oz.pannerAttr({
          ...Ju,
          refDistance: tz
        }, dz.id), Oz.pos(Mz, lz, iz, dz.id), dz
      }
      aliveVoice(zz) {
        const uz = this.live.get(zz);
        if (!uz) return;
        const bz = uz.howl._soundById(zz);
        if (bz && !bz._ended) return uz;
        this.forget(zz)
      }
      earDistSq(zz, uz, bz) {
        if (!this.posed) return 0;
        const Ez = zz - this.pose[2],
          nz = uz - this.pose[1],
          iz = bz - this.pose[0];
        return Ez * Ez + nz * nz + iz * iz
      }
      start(zz, uz, bz, Ez, nz, iz) {
        const lz = Pu(bz),
          Mz = this.sheet(Xu[zz], uz);
        "unloaded" === Mz.state() && Mz.load();
        const tz = Mz.play(wu[zz]),
          Hz = lz * this.master;
        return Mz.volume(Hz, tz), this.live.set(tz, {
          howl: Mz,
          rel: lz,
          gain: Hz,
          fadeFrom: Hz,
          fadeAt: 0,
          fadeMs: 0,
          rate: nz,
          handle: Ez,
          spatial: uz,
          stopTimer: void 0
        }), 0 !== Ez && this.core.set(Ez, tz), 1 !== nz && Mz.rate(nz, tz), iz && Mz.loop(!0, tz), {
          howl: Mz,
          id: tz
        }
      }
      sheet(zz, uz) {
        const bz = 2 * zz + (uz ? 1 : 0);
        let Ez = this.sheets.get(bz);
        if (!Ez) {
          const nz = this.createHowl(Ru[zz], uz);
          nz.on("end", (zz => {
            nz.loop(zz) || this.forget(zz)
          })), nz.on("stop", (zz => {
            this.forget(zz)
          })), nz.on("play", (zz => {
            this.live.has(zz) && this.started.add(zz)
          })), nz.on("loaderror", (zz => {
            if ("loaded" !== nz.state()) {
              this.failed.add(nz);
              for (const [zz, uz] of this.live) uz.howl === nz && this.forget(zz)
            } else "number" === typeof zz && this.forget(zz)
          })), this.sheets.set(bz, nz), Ez = nz
        }
        return Ez
      }
      setRel(zz, uz) {
        const bz = this.live.get(zz);
        bz && (mu(bz), bz.fadeMs = 0, bz.rel = Pu(uz), bz.gain = bz.rel * this.master, bz.howl.volume(bz.gain, zz))
      }
      fade(zz, uz, bz, Ez) {
        const nz = this.live.get(zz);
        if (!nz) return;
        mu(nz);
        const {
          howl: iz
        } = nz, lz = this.gainNow(nz);
        nz.rel = Pu(uz), nz.gain = nz.rel * this.master;
        const Mz = bz > 0 ? Math.min(bz, 65535) : 0,
          tz = 0 === Mz || lz === nz.gain;
        nz.fadeMs = tz ? 0 : Mz, tz ? iz.volume(nz.gain, zz) : (nz.fadeFrom = lz, nz.fadeAt = this.now(), iz.fade(lz, nz.gain, Mz, zz)), Ez && (tz ? iz.stop(zz) : nz.stopTimer = setTimeout((() => {
          nz.stopTimer = void 0, iz.stop(zz)
        }), Mz))
      }
      gainNow(zz) {
        if (zz.fadeMs > 0) {
          const uz = (this.now() - zz.fadeAt) / zz.fadeMs;
          if (uz < 1) return zz.fadeFrom + (zz.gain - zz.fadeFrom) * Math.max(0, uz);
          zz.fadeMs = 0
        }
        return zz.gain
      }
      forget(zz) {
        this.started.delete(zz);
        const uz = this.live.get(zz);
        uz && (mu(uz), this.live.delete(zz), 0 !== uz.handle && this.core.get(uz.handle) === zz && this.core.delete(uz.handle))
      }
    }

    function mu(zz) {
      void 0 !== zz.stopTimer && (clearTimeout(zz.stopTimer), zz.stopTimer = void 0)
    }
    var qu = bz(39769),
      hu = bz(38474);
    class Uu {
      constructor(zz, uz, bz, Ez) {
        this.key = zz, this.model = uz, this.host = Ez, this.Bp = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.hEz = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, this.tailView = void 0, this.tailCut = new Uint8Array(0), this.made = !1, this.SZ = !1, this.Bp = Math.max(1, Math.ceil(bz)), this.records = new Float32Array(this.Bp * tu.d), this.isDirty = new Uint8Array(this.Bp), this.tail = new Uint8Array(this.Bp * Zz.vc.Bytes), this.tailView = new DataView(this.tail.buffer), this.make(Ez.cmd())
      }
      setOrigin(zz, uz, bz) {
        this.origin[0] = zz, this.origin[1] = uz, this.origin[2] = bz
      }
      markDirty(zz) {
        !this.SZ && zz >= 0 && zz < this.Bp && zz < Zz.vc.Max && this.tR(zz, zz + 1)
      }
      commit(zz) {
        if (this.SZ) return;
        (zz = Math.min(Math.max(Math.floor(zz), 0), this.Bp, Zz.vc.Max)) > this.count && this.tR(this.count, zz), this.count = zz;
        const {
          origin: uz,
          sentOrigin: bz,
          dirtyList: Ez
        } = this, nz = this.hEz !== zz, iz = bz[0] !== uz[0] || bz[1] !== uz[1] || bz[2] !== uz[2];
        if (0 === Ez.length && !nz && !iz) return;
        const lz = this.host.cmd();
        if (!lz || !this.make(lz)) return;
        const Mz = Ez.length,
          {
            records: tz,
            tailView: Hz
          } = this;
        for (let Oz = 0; Oz < Mz; Oz++) {
          const zz = Ez[Oz],
            uz = zz * tu.d,
            bz = Oz * Zz.vc.Bytes,
            nz = 0 !== tz[uz + tu.h] ? Zz.vc.Hidden : 0;
          Hz.setUint32(bz, (zz | nz) >>> 0, !0), Hz.setFloat32(bz + 4, tz[uz], !0), Hz.setFloat32(bz + 8, tz[uz + 1], !0), Hz.setFloat32(bz + 12, tz[uz + 2], !0)
        }
        if ((0, Zz.Oe)(lz, 0, this.key, zz, uz, Mz, this.tailOf(Mz))) {
          for (let zz = 0; zz < Mz; zz++) this.isDirty[Ez[zz]] = 0;
          Ez.length = 0, this.hEz = zz, bz[0] = uz[0], bz[1] = uz[1], bz[2] = uz[2]
        }
      }
      grow(zz) {
        (zz = Math.ceil(zz)) <= this.Bp || this.SZ || (this.records = (0, hu.d)(this.records, new Float32Array(zz * tu.d)), this.isDirty = (0, hu.d)(this.isDirty, new Uint8Array(zz)), this.tail = new Uint8Array(zz * Zz.vc.Bytes), this.tailView = new DataView(this.tail.buffer), this.Bp = zz)
      }
      dispose() {
        this.SZ || (this.SZ = !0, this.host.SZ(this, this.made ? this.key : null))
      }
      make(zz) {
        if (!this.made && zz) {
          const {
            item: uz,
            scale: bz,
            yaw: Ez
          } = this.model;
          this.made = (0, Zz.Ve)(zz, 0, this.key, uz, bz, Ez)
        }
        return this.made
      }
      tailOf(zz) {
        const uz = zz * Zz.vc.Bytes;
        return this.tailCut.buffer === this.tail.buffer && this.tailCut.length === uz || (this.tailCut = this.tail.subarray(0, uz)), this.tailCut
      }
      tR(zz, uz) {
        const {
          dirtyList: bz,
          isDirty: Ez
        } = this;
        for (let nz = zz; nz < uz; nz++) 0 === Ez[nz] && (Ez[nz] = 1, bz.push(nz))
      }
    }
    var cu = bz(586);
    class gu {
      constructor(zz) {
        this.keys = 0, this.live = new Set, this.owing = new Set, this.host = void 0, this.host = {
          cmd: zz,
          owes: zz => {
            this.owing.add(zz)
          },
          settled: (zz, uz) => {
            this.owing.delete(zz), uz && this.live.delete(zz)
          }
        }
      }
      create(zz, uz) {
        if (bz = zz, !cu.n.includes(bz)) return null;
        var bz;
        const Ez = new Su(++this.keys, Oz.j.indexOf(zz), uz, this.host);
        return this.live.add(Ez), Ez
      }
      disposeAll() {
        for (const zz of [...this.live]) zz.dispose()
      }
      flush() {
        if (0 === this.owing.size) return;
        const zz = this.host.cmd();
        for (const uz of this.owing)
          if (!uz.sync(zz)) return
      }
    }
    class Su {
      constructor(zz, uz, bz, Ez) {
        this.key = zz, this.lifeform = uz, this.scale = bz, this.host = Ez, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.owed = 1, this.SZ = !1, this.sync()
      }
      setPose(zz, uz) {
        this.SZ || (this.feet[0] = zz[0], this.feet[1] = zz[1], this.feet[2] = zz[2], this.yaw = uz, this.owed |= 2, this.sync())
      }
      setVisible(zz) {
        this.SZ || zz === this.visible || (this.visible = zz, this.owed |= 4, this.sync())
      }
      dispose() {
        this.SZ || (this.SZ = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
      }
      sync() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.host.cmd();
        return this.write(zz) ? (this.host.settled(this, this.SZ), !0) : (this.host.owes(this), !1)
      }
      write(zz) {
        if (!zz) return this.owed = 0, !0;
        if (1 & this.owed) {
          if (!(0, Zz._e)(zz, 0, this.key, this.lifeform, this.scale)) return !1;
          this.owed &= -2
        }
        const uz = (2 & this.owed ? Zz.Xc.Pose : 0) | (4 & this.owed ? Zz.Xc.Visible : 0);
        if (0 !== uz) {
          if (!(0, Zz.Ze)(zz, 0, this.key, uz, this.visible ? 1 : 0, this.feet, this.yaw)) return !1;
          this.owed &= -7
        }
        if (8 & this.owed) {
          if (!(0, Zz.We)(zz, 0, this.key)) return !1;
          this.owed = 0
        }
        return !0
      }
    }
    var yu = bz(40248);

    function Du(zz, uz, bz, Ez) {
      return (0, yu.d)(), (0, Zz.Kf)(zz, uz, bz, Ez)
    }
    var Qu = bz(38482),
      Wu = bz(39758);
    const eu = [0, 0, 0],
      ju = [0, 0, 0],
      Iu = [0, 0, 0],
      Bu = [0, 0, 0],
      Cu = {
        origin: [0, 0, 0],
        direction: [0, 0, 1]
      },
      Yu = [0, 0, 0],
      ku = [0, 0],
      zb = [1, 1, 1],
      ub = 1 / 3;
    const bb = Hu.c;

    function Eb(zz) {
      const uz = Hu.b[zz],
        bz = uz && Hu.c[uz.mainMultiblock];
      return bz && {
        main: bz,
        x: uz.compX,
        y: uz.compY,
        z: uz.compZ
      }
    }

    function nb(zz) {
      if (null === zz || void 0 === zz) return Zz.bd;
      const uz = +zz;
      return Number.isInteger(uz) && uz >= -2147483648 && uz <= 2147483647 && String(uz) === String(zz) ? uz : Zz.bd
    }

    function ib(zz, uz, bz) {
      return (0, Zz.Qf)(zz, 0, uz, null !== bz && void 0 !== bz ? bz : Number.NaN)
    }
    class lb {
      constructor(zz) {
        this.deps = zz, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new Qu.b((() => this.tables.getClientOption("forcedCameraDirectionTransitionMs")), (zz => {
          var uz, bz;
          null === (uz = (bz = this.deps).setLocalOptions) || void 0 === uz || uz.call(bz, zz)
        })), this.mobModels = new gu((() => this.deps.cmd())), this.owedFrees = [], this.pendingStyle = void 0, this.pendingFar = void 0, this.farSet = !1, this.routeMesh = 0, this.routeOffset = 0, this.routeLook = "", this.routeSlide = {
          uvOffset: [0, 0]
        }, this.poolHost = {
          cmd: () => this.deps.cmd(),
          SZ: (zz, uz) => {
            this.livePools.delete(zz), null !== uz && (this.owedFrees.push(uz), this.flushOwed())
          }
        }, this.api = zz.api, this.live = zz.live, this.chunks = zz.chunks, this.items = zz.items, this.tables = zz.tables
      }
      isLocal(zz) {
        return null !== zz && void 0 !== zz && +zz === this.api.localId
      }
      assertLocal(zz, uz) {
        if (!this.isLocal(zz)) throw new Error(`Attempted to ${uz} for a player that is not the local player`)
      }
      Gs(zz) {
        const uz = this.api.Gs(zz);
        if (!uz) throw new Error(`Entity ${zz} has no replicated position`);
        return uz
      }
      checkValid(zz) {
        return !!this.deps.isSessionLive() && (null === zz || void 0 === zz || this.api.checkValid(zz))
      }
      isAlive(zz) {
        return !1 !== this.api.isAlive(zz)
      }
      getItemStat(zz, uz, bz) {
        return this.isLocal(zz) || null !== zz && "Player" === this.api.getEntityType(zz) ? this.tables.getItemStat(uz, bz) : this.tables.getDefaultItemStat(uz, bz)
      }
      getClientOption(zz, uz) {
        return this.assertLocal(zz, "get a client option"), this.tables.getClientOption(uz)
      }
      openShop(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          bz = arguments.length > 2 ? arguments[2] : void 0;
        this.assertLocal(zz, "open shop"), lz.k.sK("showShopFromServer", {
          toggle: uz,
          Ku: bz
        }, !0)
      }
      sendMessage(zz, uz, bz) {
        this.assertLocal(zz, "send a message");
        const Ez = "string" === typeof uz ? [{
          str: uz,
          style: bz
        }] : uz;
        lz.k.sK("chat", {
          content: Ez
        }, !0)
      }
      getEntityType(zz) {
        return this.api.getEntityType(zz)
      }
      getEntityName(zz) {
        const uz = nb(zz);
        return uz === Zz.bd ? void 0 : (0, qu.g)(this.api, uz)
      }
      hasEffect(zz, uz) {
        const bz = nb(zz);
        return bz !== Zz.bd && (0, qu.f)(this.api, bz, uz)
      }
      getMetaInfo(zz) {
        return this.tables.getMetaInfo(zz)
      }
      getPlayerDbId(zz) {
        return this.assertLocal(zz, "get a DB ID"), this.deps.playerDbId()
      }
      getBlockData(zz, uz, bz) {
        if (!this.chunks.dataCleared(zz, uz, bz)) return (0, qu.b)(this.api, zz, uz, bz)
      }
      qJ(zz, uz, bz, Ez) {
        this.setBlockId(zz, uz, bz, this.tables.getItemId(Ez))
      }
      setOtherEntitySetting(zz, uz, bz, Ez) {
        if (!this.isLocal(zz)) throw new Error("Attempted to set an other-entity setting for a player that is not the local player");
        if (!Object.hasOwn(Zz.md, bz)) throw new Error(`Unknown other-entity setting ${bz}`);
        const nz = Zz.md[bz],
          iz = nb(uz);
        if (iz === Zz.bd || !this.deps.beforeWrite()) return;
        const lz = (0, qz.c)(Ez);
        if (lz.length > 16384) throw new Error(`The other-entity setting ${bz}'s value is over 16384 bytes`);
        const Mz = this.api.memoryView(Uint8Array, this.api.scratch(), lz.length, "set_other_entity_setting's value");
        Mz && (Mz.set(lz), this.api.queries.setOtherEntitySetting(iz, nz, lz.length))
      }
      getPositionView(zz) {
        return this.live.position(+zz)
      }
      readDrawnPosition(zz, uz) {
        return this.api.readDrawnPosition(nb(zz), uz)
      }
      getDrawnHeading(zz) {
        const uz = nb(zz),
          bz = (uz === Zz.bd ? 0 : this.api.queries.directorEntity(uz)) >= Zz.yb.BYTES ? this.api.memoryData(this.api.scratch(), Zz.yb.BYTES, 8, "getDrawnHeading's DirectorEntity") : null;
        if (!bz) return null;
        if (1 === Zz.yb.headingIsDrawn(bz, 0)) return Zz.yb.heading(bz, 0);
        const Ez = this.api.apiView;
        return this.isLocal(zz) && 0 === (Zz.z.playerFlags(Ez, 0) & Zz.Id.FreeCam) ? Zz.z.heading(Ez, 0) : null
      }
      getLocalPlayerMovement() {
        const zz = Zz.z.playerFlags(this.api.apiView, 0);
        return 0 === (zz & Zz.Id.Replay) && this.api.readDrawnPosition(this.api.localId, Iu) ? {
          onGround: 0 !== (zz & Zz.Id.OnGround),
          jumpHeld: 0 !== (zz & Zz.Id.JumpHeld)
        } : null
      }
      luz(zz) {
        return this.isLocal(zz) ? this.items.yM() : null
      }
      getInventoryItems() {
        return this.items.playerItems()
      }
      getHeldGunInaccuracy() {
        var zz, uz;
        return "Gun" === (null === (zz = this.aliveHeld()) || void 0 === zz || null === (uz = zz.typeObj) || void 0 === uz ? void 0 : uz.type) ? this.items.inaccuracy : null
      }
      aliveHeld() {
        return !1 === this.api.isAlive(this.api.localId) ? null : this.items.yM()
      }
      isCrosshairShown() {
        var zz, uz;
        const bz = (0, pu.c)(Ez.e.get("crosshairGameView"), Ez.e.get("crosshairShownOverride"));
        if (null !== bz) return bz;
        const nz = null === (zz = this.aliveHeld()) || void 0 === zz ? void 0 : zz.typeObj,
          iz = "Gun" === (null === nz || void 0 === nz ? void 0 : nz.type),
          lz = iz || !0 === (null === nz || void 0 === nz ? void 0 : nz.showsAimingUi),
          Mz = 0 === (Zz.z.playerFlags(this.api.apiView, 0) & Zz.Id.ZoomFirstPerson),
          tz = null !== (uz = this.tables.getClientOption("gunshotOrigin")) && void 0 !== uz ? uz : null;
        return (0, pu.g)({
          gun: iz,
          aimable: lz
        }, Mz, (0, du.d)(), tz)
      }
      setCrosshairShown(zz) {
        Ez.e.set({
          crosshairShownOverride: zz
        })
      }
      getInventoryFreeSlotCount(zz) {
        return this.isLocal(zz) ? this.items.freeSlots() : null
      }
      getSelectedInventorySlotI(zz) {
        return this.isLocal(zz) ? this.items.selectedSlot : null
      }
      getItemSlot(zz, uz) {
        return this.isLocal(zz) ? this.items.slot(uz) : null
      }
      swapInventorySlots(zz, uz) {
        return this.items.swap(zz, uz)
      }
      isPlayerCrouching(zz) {
        if (this.isLocal(zz)) return 0 !== (Zz.z.playerFlags(this.api.apiView, 0) & Zz.Id.Crouching);
        const uz = nb(zz);
        return uz !== Zz.bd && 1 === this.api.queries.entityCrouching(uz)
      }
      getMiningBlock() {
        return this.live.breakingPosition()
      }
      isMining() {
        return 0 !== (Zz.z.playerFlags(this.api.apiView, 0) & Zz.Id.AttemptingBreak)
      }
      getTargetedBlock() {
        return this.live.U3()
      }
      getActionRay() {
        const zz = this.api.apiView;
        for (let uz = 0; uz < 3; uz++) Cu.origin[uz] = Zz.z.Z6(zz, 0, uz), Cu.direction[uz] = Zz.z.actionDir(zz, 0, uz);
        return Cu
      }
      canModifyBlockAt(zz, uz, bz) {
        return 1 === this.api.queries.canModify(zz, uz, bz)
      }
      isSolidToPlayerBlockId(zz) {
        return this.tables.isSolidBlockId(zz) && !this.chunks.isWalkThrough(zz)
      }
      blockNameToBlockId(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.tables.blockNameToBlockId(zz, uz)
      }
      blockIdToBlockName(zz) {
        return this.tables.nameOfId(zz)
      }
      szz(zz, uz, bz, Ez, nz) {
        return 1 === this.api.queries.terrainBlocked(Ez, zz, uz, bz, nb(null !== nz && void 0 !== nz ? nz : null))
      }
      getChunkVersion(zz, uz, bz) {
        return this.chunks.version(zz, uz, bz)
      }
      scanBlocks(zz, uz, bz, Ez, nz, iz, lz, Mz) {
        return this.chunks.scan(zz, uz, bz, Ez, nz, iz, lz, Mz)
      }
      isBlockInLoadedChunk(zz, uz, bz) {
        return this.chunks.isLoaded(zz, uz, bz)
      }
      getBlockId(zz, uz, bz) {
        return this.chunks.hO(zz, uz, bz)
      }
      playSound(zz, uz, bz, Ez, nz) {
        let iz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (!this.isLocal(zz)) return null;
        const lz = this.playSoundFrom(uz, bz, nz, iz);
        return 1 === Ez ? lz : lz.rate(Ez)
      }
      playSoundFrom(zz, uz, bz, Ez) {
        var nz, iz;
        const lz = this.deps.playSound;
        if (!lz) return xu.e;
        const Mz = null === bz || void 0 === bz ? void 0 : bz.Dn,
          tz = null !== (nz = null === bz || void 0 === bz ? void 0 : bz.maxHearDist) && void 0 !== nz ? nz : Ou.e,
          Hz = null !== (iz = null === bz || void 0 === bz ? void 0 : bz.refDistance) && void 0 !== iz ? iz : Ou.h;
        let Oz = null;
        if (Array.isArray(Mz)) eu[0] = Mz[0], eu[1] = Mz[1], eu[2] = Mz[2], Oz = eu;
        else if (void 0 !== Mz && null !== Mz) {
          const zz = nb(Mz);
          if (!this.api.isLocal(zz)) {
            if (!this.api.readPosition(zz, eu)) return xu.e;
            Oz = eu
          }
        }
        return lz(zz, uz, Oz, Oz && this.ear(), tz, Hz, Ez)
      }
      ear() {
        if (this.api.readPosition(this.api.localId, ju)) ju[1] += Au;
        else {
          const zz = this.api.apiView;
          if (0 === Zz.z.viewProj(zz, 0, 3) && 0 === Zz.z.viewProj(zz, 0, 7) && 0 === Zz.z.viewProj(zz, 0, 11)) return null;
          for (let uz = 0; uz < 3; uz++) ju[uz] = Zz.z.eye(zz, 0, uz)
        }
        return Number.isFinite(ju[0] + ju[1] + ju[2]) ? ju : null
      }
      setBlockId(zz, uz, bz, Ez) {
        if (!Number.isInteger(Ez) || Ez < 0 || Ez > 65535) throw new Error(`Invalid block id ${Ez}`);
        if (!this.deps.beforeWrite() || !this.chunks.isLoaded(zz, uz, bz)) return;
        const nz = Math.floor(zz),
          iz = Math.floor(uz),
          lz = Math.floor(bz),
          Mz = this.predictedCells(nz, iz, lz, Ez);
        if (1 === this.api.queries.qJ(nz, iz, lz, Ez)) {
          for (let zz = 0; zz < Mz.length; zz += 5) this.chunks.setOverlay(Mz[zz], Mz[zz + 1], Mz[zz + 2], Mz[zz + 3], 1 === Mz[zz + 4]);
          this.live.refreshTarget()
        }
      }
      particlesEnabled() {
        return this.deps.particles.enabled()
      }
      createParticles(zz, uz) {
        return this.deps.particles.create(zz, uz)
      }
      playParticleEffect(zz) {
        this.deps.particles.playEffect(zz)
      }
      burstParticlePreset(zz, uz, bz) {
        this.deps.particles.burstPreset(zz, uz, bz)
      }
      createGameMesh(zz, uz, bz) {
        const Ez = ++this.meshKeys,
          nz = this.deps.cmd();
        if (!nz) return Ez;
        const {
          look: iz,
          colour: lz
        } = function(zz) {
          switch (zz.kind) {
            case void 0:
            case "flatEmissive":
              return zz.onTop ? {
                look: Zz.gc.FlatOnTop,
                colour: [...zz.rgb, zz.alpha]
              } : zz.opaque ? {
                look: Zz.gc.FlatOpaque,
                colour: [...zz.rgb, 1]
              } : {
                look: Zz.gc.Flat,
                colour: [...zz.rgb, zz.alpha]
              };
            case "chevronPath":
              return {
                look: Zz.gc.Chevrons, colour: [...(0, Fu.c)(zz.colour), zz.alpha]
              };
            case "furnaceFire":
              return {
                look: Zz.gc.FurnaceFire, colour: [1, 1, 1, 1]
              }
          }
        }(uz), Mz = Math.floor(zz.positions.length / 3), tz = function(zz, uz) {
          const bz = Math.floor(zz.positions.length / 3),
            Ez = zz.indices.length,
            nz = bz * (uz ? 5 : 3),
            iz = new Uint8Array(4 * (nz + Ez)),
            lz = new DataView(iz.buffer);
          for (let Hz = 0; Hz < 3 * bz; Hz++) lz.setFloat32(4 * Hz, zz.positions[Hz], !0);
          if (uz) {
            var Mz;
            const uz = null !== (Mz = zz.uvs) && void 0 !== Mz ? Mz : [];
            for (let zz = 0; zz < 2 * bz; zz++) {
              var tz;
              lz.setFloat32(4 * (3 * bz + zz), null !== (tz = uz[zz]) && void 0 !== tz ? tz : 0, !0)
            }
          }
          for (let Hz = 0; Hz < Ez; Hz++) lz.setUint32(4 * (nz + Hz), zz.indices[Hz], !0);
          return iz
        }(zz, (0, tu.l)(uz));
        return (0, Zz.Fe)(nz, 0, Ez, iz, lz, bz, Mz, zz.indices.length, tz) && this.liveMeshes.add(Ez), Ez
      }
      setGameMesh(zz, uz) {
        var bz;
        const Ez = this.deps.cmd();
        if (!Ez) return;
        let nz = 0;
        uz.anchor && (nz |= Zz.hc.Anchor, Yu[0] = uz.anchor[0], Yu[1] = uz.anchor[1], Yu[2] = uz.anchor[2]), void 0 !== uz.visible && (nz |= Zz.hc.Visible), uz.uvOffset && (nz |= Zz.hc.UvOffset, ku[0] = uz.uvOffset[0], ku[1] = uz.uvOffset[1]);
        const iz = null !== (bz = uz.visibility) && void 0 !== bz ? bz : 1;
        void 0 !== uz.visibility && (nz |= Zz.hc.Visibility), uz.scale && (nz |= Zz.hc.Scale, zb[0] = uz.scale[0], zb[1] = uz.scale[1], zb[2] = uz.scale[2]), 0 !== nz && (0, Zz.Le)(Ez, 0, zz, nz, uz.visible ? 1 : 0, Yu, ku, iz, zb)
      }
      disposeGameMesh(zz) {
        const uz = this.deps.cmd();
        uz && !(0, Zz.Ie)(uz, 0, zz) || this.liveMeshes.delete(zz)
      }
      hasPackModel(zz) {
        var uz, bz, Ez;
        return null !== (uz = null === (bz = (Ez = this.deps).hasPackModel) || void 0 === bz ? void 0 : bz.call(Ez, zz)) && void 0 !== uz && uz
      }
      disposeGameOutput() {
        const zz = zz => {
          try {
            zz()
          } catch (uz) {
            console.error("Error freeing client game output", uz)
          }
        };
        for (const uz of [...this.liveMeshes]) zz((() => {
          this.disposeGameMesh(uz)
        }));
        for (const uz of [...this.livePools]) zz((() => {
          uz.dispose()
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
      createInstancePool(zz, uz) {
        const bz = this.tables.idOf(zz.item);
        if (void 0 === bz) return null;
        const Ez = new Uu(++this.poolKeys, {
          item: bz,
          scale: zz.scale,
          yaw: zz.yaw
        }, uz, this.poolHost);
        return this.livePools.add(Ez), Ez
      }
      createMobModel(zz, uz) {
        return this.mobModels.create(zz, uz)
      }
      setRouteChevrons(zz) {
        if (0 !== this.routeMesh && (this.disposeGameMesh(this.routeMesh), this.routeMesh = 0), !zz || 0 === zz.cells.length) return;
        const uz = `${zz.colour} ${zz.alpha}`;
        uz !== this.routeLook && (this.routeLook = uz, this.routeOffset = 0), this.routeMesh = this.createGameMesh(function(zz) {
          const [uz, bz, Ez] = zz[0].pos, nz = [], iz = [], lz = [];
          return zz.forEach(((zz, Mz) => {
            let {
              pos: tz,
              way: [Hz, Oz]
            } = zz;
            const pz = tz[0] - uz + .5,
              dz = tz[1] - bz + .04,
              Fz = tz[2] - Ez + .5,
              [Zz, Rz] = [.35 * -Oz, .35 * Hz],
              [Kz, wz] = [Mz * ub, (Mz + 1) * ub],
              Xz = nz.length / 3;
            nz.push(pz - .5 * Hz + Zz, dz, Fz - .5 * Oz + Rz), nz.push(pz - .5 * Hz - Zz, dz, Fz - .5 * Oz - Rz), nz.push(pz + .5 * Hz + Zz, dz, Fz + .5 * Oz + Rz), nz.push(pz + .5 * Hz - Zz, dz, Fz + .5 * Oz - Rz), iz.push(0, Kz, 1, Kz, 0, wz, 1, wz), lz.push(Xz, Xz + 1, Xz + 2, Xz + 1, Xz + 3, Xz + 2)
          })), {
            positions: nz,
            uvs: iz,
            indices: lz
          }
        }(zz.cells), {
          kind: "chevronPath",
          colour: zz.colour,
          alpha: zz.alpha
        }, zz.cells[0].pos), this.setRouteSlide()
      }
      slideRoute(zz) {
        0 !== this.routeMesh && (this.routeOffset = (this.routeOffset + Math.min(zz, 250) / 1e3 * 1.2 * ub) % 1, this.setRouteSlide())
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
        const uz = this.deps.cmd();
        if (!uz) return zz.length = 0, void(this.pendingFar = void 0);
        let bz = 0;
        for (; bz < zz.length && (0, Zz.Se)(uz, 0, zz[bz]);) bz++;
        zz.splice(0, bz);
        const Ez = this.pendingStyle;
        if (void 0 !== Ez) {
          (Ez ? (0, Zz.Uf)(uz, 0, Ez.width, Ez.alpha, 1, Ez.endAtSolidFace ? 1 : 0) : (0, Zz.Uf)(uz, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
        }
        const nz = this.pendingFar;
        void 0 !== nz && (0, Zz.Pf)(uz, 0, null !== nz && void 0 !== nz ? nz : 0, null === nz ? 1 : 0) && (this.pendingFar = void 0)
      }
      setNametagOffset(zz, uz) {
        const bz = this.deps.cmd(),
          Ez = nb(zz);
        bz && Ez !== Zz.bd && (0, Zz.ag)(bz, 0, Ez, uz)
      }
      setFacingTolerance(zz, uz) {
        const bz = this.deps.cmd(),
          Ez = nb(zz);
        bz && Ez !== Zz.bd && ib(bz, Ez, uz)
      }
      forEachEntity(zz) {
        const {
          api: uz
        } = this;
        for (let bz = 0; bz < uz.idStr.length; bz++) {
          const Ez = uz.idStr[bz];
          null === Ez || rz(uz.kinds[bz]) || zz(Ez)
        }
      }
      getEntityInfo(zz) {
        return this.deps.entityInfo.get(zz)
      }
      isEntityInteractable(zz) {
        const uz = nb(zz);
        return uz !== Zz.bd && 1 === this.api.queries.entityInteractable(uz)
      }
      isLocalPlayer(zz) {
        return this.isLocal(zz)
      }
      getLineOwner(zz) {
        var uz;
        const bz = null === (uz = this.deps.entityInfo.get(zz)) || void 0 === uz ? void 0 : uz.meshOpts;
        if (!bz) return null;
        try {
          const {
            lineToEId: zz
          } = JSON.parse(bz);
          return null !== zz && void 0 !== zz ? zz : null
        } catch {
          return null
        }
      }
      getCameraPosition() {
        const zz = this.api.apiView;
        return Bu[0] = Zz.z.eye(zz, 0, 0), Bu[1] = Zz.z.eye(zz, 0, 1), Bu[2] = Zz.z.eye(zz, 0, 2), Bu
      }
      getCameraFar() {
        return Zz.z.cameraFar(this.api.apiView, 0)
      }
      setCameraFar(zz) {
        null !== zz && (this.farSet = !0), this.pendingFar = zz, this.flushOwed()
      }
      turnCamera(zz, uz) {
        this.cameraTurn.turn(zz, uz)
      }
      clearPickupDelay(zz) {
        const uz = this.deps.cmd(),
          bz = nb(zz);
        uz && bz !== Zz.bd && (0, Zz.ue)(uz, 0, bz)
      }
      sendChat(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const bz = this.deps.sendCmd();
        bz && Du(bz, 0, Wu.d.Chat, (0, qz.c)((0, Wu.h)({
          zM: zz,
          uM: uz
        })))
      }
      sendCommand(zz) {
        zz.length <= 119 && this.sendChat(`/${zz}`)
      }
      predictedCells(zz, uz, bz, Ez) {
        const nz = this.chunks,
          iz = [],
          lz = (zz, uz, bz, Ez, nz) => {
            iz.push(zz, uz, bz, Ez, this.tables.blockRootId(nz) === this.tables.blockRootId(Ez) ? 0 : 1)
          },
          Mz = nz.hO(zz, uz, bz),
          tz = Eb(Mz);
        if (tz) {
          const [Ez, iz, Hz] = [zz - tz.x, uz - tz.y, bz - tz.z], Oz = bb[nz.hO(Ez, iz, Hz)], pz = null === Oz || void 0 === Oz ? void 0 : Oz.positions.some((zz => zz.id === Mz && zz.x === tz.x && zz.y === tz.y && zz.z === tz.z));
          for (const zz of (pz && Oz ? Oz : tz.main).positions) nz.hO(Ez + zz.x, iz + zz.y, Hz + zz.z) === zz.id && lz(Ez + zz.x, iz + zz.y, Hz + zz.z, 0, zz.id)
        }
        const Hz = Eb(Ez);
        if (Hz)
          for (const pz of Hz.main.positions) {
            const [Ez, iz, Mz] = [zz + pz.x - Hz.x, uz + pz.y - Hz.y, bz + pz.z - Hz.z];
            lz(Ez, iz, Mz, pz.id, nz.hO(Ez, iz, Mz))
          } else lz(zz, uz, bz, Ez, Mz);
        const Oz = this.tables;
        if ((0 !== Oz.attachedTopOf(Mz) || 0 !== Oz.attachedTopOf(Ez)) && nz.isLoaded(zz, uz + 1, bz)) {
          let tz = nz.hO(zz, uz + 1, bz);
          for (let Ez = 0; Ez < iz.length; Ez += 5) iz[Ez] === zz && iz[Ez + 1] === uz + 1 && iz[Ez + 2] === bz && (tz = iz[Ez + 3]);
          const Hz = this.attachedTopWrite(Mz, Ez, tz);
          void 0 !== Hz && lz(zz, uz + 1, bz, Hz, tz)
        }
        return iz
      }
      attachedTopWrite(zz, uz, bz) {
        const Ez = this.tables,
          nz = Ez.attachedTopOf(zz),
          iz = Ez.attachedTopOf(uz),
          lz = 0 !== nz && 0 !== bz && Ez.blockRootId(bz) === Ez.blockRootId(nz);
        return 0 !== nz && 0 !== iz && Ez.blockRootId(zz) === Ez.blockRootId(uz) ? lz && bz !== iz ? iz : void 0 : 0 === iz || !lz && 0 !== bz ? lz ? 0 : void 0 : iz
      }
    }
    const Mb = Zz.rc + Zz.sc * Zz.Bc.BYTES,
      tb = 2147483647,
      Hb = new TextDecoder,
      Ob = new TextEncoder,
      pb = Object.freeze({
        gO: 0,
        Rp: null,
        amountAddedToSlot: 0
      }),
      db = new Proxy({}, {
        get: () => () => Zz.id
      });

    function Fb(zz) {
      return Number.isInteger(zz) && zz >= 0 && zz <= 65535
    }

    function Zb(zz) {
      return Number.isInteger(zz) && zz >= 0 && zz <= 4294967295
    }
    class Rb {
      constructor(zz) {
        this.deps = zz, this.pl = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(Zz.sc), this.ids = new Uint16Array(Zz.sc), this.amounts = new Uint16Array(Zz.sc), this.attrRead = new Float64Array(Zz.sc).fill(-1), this.stale = new Uint16Array(Zz.sc), this.staleVersion = new Uint32Array(Zz.sc), this.instances = new Uint32Array(Zz.sc), this.viewPtr = 0, this.viewVersion = -1, this.len = 0, this.selected = 0, this.slotIconId = 0, this.stopped = !1, this.listeners = new Set
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
        var uz;
        return Number.isInteger(zz) && zz >= 0 && zz < this.len && 0 !== this.ids[zz] && null !== (uz = this.facades[zz]) && void 0 !== uz ? uz : null
      }
      yM() {
        return this.slot(this.selected)
      }
      playerItems() {
        const zz = [];
        for (let uz = 0; uz < Math.min(Zz.ud, this.len); uz++) zz.push(this.slot(uz));
        return zz
      }
      freeSlots() {
        let zz = 0;
        for (let uz = 0; uz < Math.min(Zz.ud - Zz.k, this.len); uz++) 0 === this.ids[uz] && zz++;
        return zz
      }
      amountOf(zz) {
        let uz = 0;
        for (let Ez = 0; Ez < Math.min(Zz.ud, this.len); Ez++) {
          const nz = this.slot(Ez);
          var bz;
          if ((null === nz || void 0 === nz ? void 0 : nz.name) === zz) uz += null !== (bz = nz.amount) && void 0 !== bz ? bz : 1
        }
        return uz
      }
      instance(zz) {
        var uz;
        return null !== (uz = this.instances[zz]) && void 0 !== uz ? uz : 0
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
          for (const bz of [...this.listeners]) try {
            bz()
          } catch (uz) {
            zz(uz)
          }
        }
      }
      chestOpened(zz, uz, bz) {
        this.pl[0] = zz, this.pl[1] = uz, this.pl[2] = bz, this.version++
      }
      refresh() {
        const zz = this.deps.api.apiView,
          uz = Zz.z.inventoryViewPtr(zz, 0),
          bz = Zz.z.inventoryVersion(zz, 0),
          Ez = Zz.z.selectedSlot(zz, 0);
        Ez !== this.selected && (this.selected = Ez, this.version++);
        const nz = Zz.z.slotIcon(zz, 0);
        if (nz !== this.slotIconId && (this.slotIconId = nz, this.iconChanged = !0), uz === this.viewPtr && bz === this.viewVersion) return;
        this.viewPtr = uz, this.viewVersion = bz;
        const iz = this.deps.api.memoryData(uz, Mb, 4, "the inventory view"),
          lz = iz ? Math.min(iz.getUint32(0, !0), Zz.sc) : 0;
        lz !== this.len && (this.len = lz, this.version++);
        let Mz = 0;
        for (let tz = 0; tz < Zz.sc; tz++) {
          const zz = Zz.rc + tz * Zz.Bc.BYTES,
            uz = null !== iz && tz < lz ? Zz.Bc.item(iz, zz) : 0;
          if (0 === uz || null === iz) {
            0 !== this.ids[tz] && (this.ids[tz] = 0, this.attrRead[tz] = -1, this.instances[tz]++, this.version++);
            continue
          }
          const bz = Zz.Bc.amount(iz, zz),
            Ez = Zz.Bc.attrVersion(iz, zz);
          uz === this.ids[tz] && bz === this.amounts[tz] || this.fill(tz, uz, bz), Ez !== this.attrRead[tz] && (this.stale[Mz] = tz, this.staleVersion[Mz] = Ez, Mz++)
        }
        Mz > 0 && this.fetchAttributes(Mz)
      }
      fill(zz, uz, bz) {
        const {
          tables: Ez
        } = this.deps, nz = uz !== this.ids[zz];
        let iz = this.facades[zz];
        iz || (iz = {
          name: "",
          amount: null,
          attributes: {
            customAttributes: {}
          },
          typeObj: null
        }, this.facades[zz] = iz), nz && (iz.name = Ez.nameOfId(uz), iz.typeObj = Ez.itemType(uz), iz.attributes = {
          customAttributes: {}
        }, this.attrRead[zz] = -1, this.instances[zz]++), iz.amount = 0 === bz ? null : bz, this.ids[zz] = uz, this.amounts[zz] = bz, this.version++
      }
      fetchAttributes(zz) {
        const {
          api: uz,
          onError: bz
        } = this.deps, Ez = uz.memoryView(Uint16Array, uz.scratch(), zz, "item_attributes_batch's slots");
        if (!Ez) return void this.markRead(zz);
        Ez.set(this.stale.subarray(0, zz));
        const nz = uz.queries.itemAttributesBatch(zz),
          iz = 4294967295 === nz ? null : uz.memoryData(uz.scratch(), nz, 4, "item_attributes_batch's answer");
        if (!iz) return void this.markRead(zz);
        const lz = new Uint8Array(iz.buffer, iz.byteOffset, nz);
        for (let tz = 0; tz + 8 <= nz;) {
          const zz = iz.getUint16(tz, !0),
            uz = iz.getUint32(tz + 4, !0),
            Ez = lz.subarray(tz + 8, tz + 8 + uz);
          tz += 8 + (0, dz.ie)(uz);
          const nz = this.facades[zz];
          if (nz && 0 !== this.ids[zz] && 0 !== uz) {
            try {
              nz.attributes = JSON.parse(Hb.decode(Ez))
            } catch (Mz) {
              bz(Mz)
            }
            this.version++
          }
        }
        this.markRead(zz)
      }
      markRead(zz) {
        for (let uz = 0; uz < zz; uz++) this.attrRead[this.stale[uz]] = this.staleVersion[uz]
      }
      swap(zz, uz) {
        return Fb(zz) && Fb(uz) && this.settle(this.queries().invSwap(zz, uz))
      }
      move(zz, uz, bz) {
        return Fb(zz) && Fb(uz) && Zb(bz) && this.settle(this.queries().invMove(zz, uz, bz))
      }
      quickMove(zz, uz, bz, Ez) {
        var nz, iz;
        if (!Fb(zz) || !Fb(uz) || !Fb(bz) || null !== Ez && !Zb(Ez)) return null;
        const lz = this.queries().invQuickMove(zz, uz, bz, null === Ez ? -1 : Math.min(Ez, tb)),
          Mz = lz === Zz.id ? Zz.Sb : null !== (nz = null === (iz = this.extras()) || void 0 === iz ? void 0 : iz[1]) && void 0 !== nz ? nz : Zz.Sb;
        return this.settle(lz), Mz === Zz.Sb ? null : Mz
      }
      remove(zz, uz, bz) {
        return Fb(zz) && Zb(uz) && this.settle(this.queries().invRemove(zz, uz, bz ? 1 : 0))
      }
      selectSlot(zz) {
        return Fb(zz) && this.settle(this.queries().selectSlot(zz))
      }
      closeChest() {
        return this.settle(this.queries().closeChest())
      }
      enchant(zz, uz, bz) {
        if (!Fb(zz) || !Number.isInteger(uz)) return !1;
        const [Ez, nz, iz] = bz;
        return this.settle(this.queries().invEnchant(zz, uz, Math.floor(Ez), Math.floor(nz), Math.floor(iz)))
      }
      craft(zz, uz, bz) {
        let Ez;
        try {
          Ez = this.deps.tables.getItemId(zz)
        } catch {
          return pb
        }
        if (!Fb(uz) || null !== bz && (Number.isNaN(bz) || bz < 0)) return pb;
        const nz = null === bz || bz > tb ? -1 : Math.floor(bz),
          iz = this.queries().craft(Ez, uz, nz);
        let lz = pb;
        const Mz = iz === Zz.id ? null : this.extras();
        if (Mz) {
          const [zz, uz, bz] = Mz;
          lz = {
            gO: zz,
            Rp: uz === Zz.Sb ? null : uz,
            amountAddedToSlot: bz
          }
        }
        return this.settle(iz), lz
      }
      salvage(zz, uz, bz) {
        let Ez;
        try {
          Ez = this.deps.tables.getItemId(uz)
        } catch {
          return !1
        }
        return Fb(zz) && Number.isInteger(bz) && this.settle(this.queries().salvage(zz, Ez, Math.max(Math.min(bz, tb), -tb)))
      }
      craftingView(zz, uz, bz) {
        var Ez;
        if (this.stopped) return null;
        const {
          api: nz,
          onError: iz
        } = this.deps, lz = zz ? Ob.encode(zz) : null;
        if (null !== lz) {
          if (lz.length > 1024) return iz(new Error(`The crafting station ${zz}'s name is over 1024 bytes`)), null;
          const uz = nz.memoryView(Uint8Array, nz.scratch(), lz.length, "crafting_view's station");
          if (!uz) return null;
          uz.set(lz)
        }
        const Mz = Fb(uz) && Fb(bz),
          tz = nz.queries.craftingView(null !== (Ez = null === lz || void 0 === lz ? void 0 : lz.length) && void 0 !== Ez ? Ez : 0, Mz ? uz : 0, Mz ? bz : 0);
        return tz < Zz.rb.BYTES ? (nz.reportCorruption(`crafting_view's answer of ${tz} bytes`), null) : nz.memoryData(nz.scratch(), tz, 1, "crafting_view's answer")
      }
      queries() {
        var zz, uz;
        return !1 === (null === (zz = (uz = this.deps).beforeOp) || void 0 === zz ? void 0 : zz.call(uz)) ? (this.stopped = !0, db) : this.deps.api.queries
      }
      extras() {
        const {
          api: zz
        } = this.deps;
        return zz.memoryView(Uint32Array, zz.scratch(), 3, "a sync query's extra words")
      }
      settle(zz) {
        if (zz === Zz.gd)(0, yu.d)();
        else if (zz !== Zz.id) {
          const uz = this.deps.cmd();
          uz && function(zz, uz, bz) {
            return (0, yu.d)(), (0, Zz.jg)(zz, uz, bz)
          }(uz, 0, zz) || this.deps.onError(new Error(`Sync op ${zz}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
        }
        return this.stopped || this.refresh(), zz !== Zz.id
      }
    }
    const Kb = 1 / .6,
      wb = [0, 1, 0],
      Xb = [0, 0, 0],
      fb = new Uint8Array(0),
      sb = 1.2 * Zu.e.Gw,
      rb = new TextEncoder,
      ob = [0, 0, 0],
      Nb = [0, 0, 0],
      vb = new Map;

    function xb(zz) {
      let uz = vb.get(zz);
      return uz || (vb.size >= 64 && vb.clear(), uz = rb.encode(`{"emitRate":${zz}}`), vb.set(zz, uz)), uz
    }

    function Jb(zz) {
      return Number.isFinite(zz) && zz > 0 ? zz : 0
    }

    function Ab(zz, uz) {
      for (let bz = 0; bz < 3; bz++) {
        const Ez = Math.abs(uz[bz]);
        ob[bz] = zz[bz] - Ez, Nb[bz] = 2 * Ez
      }
      return Number.isFinite(ob[0] + ob[1] + ob[2] + Nb[0] + Nb[1] + Nb[2])
    }

    function Tb(zz, uz) {
      return "pos1" === zz || "pos2" === zz ? void 0 : uz
    }

    function Lb(zz, uz, bz) {
      return zz.length > Zz.Ed.MaxOpts ? (bz(new Error(`${uz}'s particle opts are over ${Zz.Ed.MaxOpts} bytes of JSON`)), null) : zz
    }
    const Pb = {
      moveTo() {},
      setEmitRate() {},
      emit() {},
      emitPoints() {},
      setDirections() {},
      stop() {},
      dispose() {}
    };
    class Gb {
      constructor(zz) {
        this.deps = zz, this.session = 0, this.nextKey = 1, this.live = 0, this.started = !1
      }
      enabled() {
        return null !== this.sink()
      }
      sink() {
        return this.deps.isSessionLive() ? this.deps.cmd() : null
      }
      create(zz, uz) {
        var bz;
        const Ez = this.sink(),
          nz = null !== (bz = uz.half) && void 0 !== bz ? bz : Xb;
        if (!Ez || this.live >= Zz.Ed.MaxLiveKeys || this.nextKey > Zz.Ed.MaxKey || !Ab(uz.pos, nz)) return Pb;
        const iz = this.nextKey,
          lz = Lb(function(zz) {
            var uz, bz, Ez;
            const nz = JSON.stringify({
              texture: "string" === typeof zz.texture ? zz.texture : "smokePuff",
              Bp: zz.Bp,
              minLifeTime: zz.minLifeTime,
              maxLifeTime: zz.maxLifeTime,
              minSize: zz.minSize,
              maxSize: zz.maxSize,
              minEmitPower: zz.minEmitPower,
              maxEmitPower: zz.maxEmitPower,
              emitRate: Jb(zz.emitRate),
              gravity: null !== (uz = zz.gravity) && void 0 !== uz ? uz : Xb,
              dir1: null !== (bz = zz.dir1) && void 0 !== bz ? bz : wb,
              dir2: null !== (Ez = zz.dir2) && void 0 !== Ez ? Ez : wb,
              colorGradients: zz.colorGradients,
              blendMode: zz.blendMode
            });
            return rb.encode(nz)
          }(zz), "createParticles", this.deps.onError);
        return lz && (0, Zz.hf)(Ez, 0, iz, 0, Zz.Ed.PresetNone, 0, ob, Nb, lz) ? (this.nextKey++, this.live++, this.started = !0, new ab(this, this.session, iz, zz, nz)) : Pb
      }
      playEffect(zz) {
        const uz = this.sink(),
          {
            pos1: bz,
            pos2: Ez
          } = zz;
        if (!uz || !bz || !Ez) return;
        for (let iz = 0; iz < 3; iz++) ob[iz] = Math.min(bz[iz], Ez[iz]), Nb[iz] = Math.abs(Ez[iz] - bz[iz]);
        if (!Number.isFinite(ob[0] + ob[1] + ob[2] + Nb[0] + Nb[1] + Nb[2])) return;
        const nz = Lb(rb.encode(JSON.stringify(zz, Tb)), "playParticleEffect", this.deps.onError);
        nz && (0, Zz.cf)(uz, 0, 0, Zz.Ed.PresetNone, Zz.Ed.HasBox, 0, ob, Nb, nz)
      }
      burstPreset(zz, uz, bz) {
        const Ez = this.sink(),
          nz = Math.min(Math.floor(bz), Zz.Ed.MaxBurst);
        if (!Ez || !Object.hasOwn(Zz.kc, zz) || !(nz > 0)) return;
        const iz = sb;
        for (let lz = 0; lz < 3; lz++) ob[lz] = uz[lz] - iz / 2, Nb[lz] = iz;
        Number.isFinite(ob[0] + ob[1] + ob[2]) && (0, Zz.cf)(Ez, 0, 0, Zz.kc[zz], Zz.Ed.HasBox, nz, ob, Nb, fb)
      }
      sessionEnded() {
        this.session++;
        const zz = this.started ? this.deps.cmd() : null;
        return this.started = !1, this.nextKey = 1, this.live = 0, !zz || (0, Zz.if)(zz, 0)
      }
      sinkFor(zz) {
        return zz === this.session ? this.deps.cmd() : null
      }
      stop(zz, uz) {
        const bz = this.sinkFor(zz);
        bz && (0, Zz.mf)(bz, 0, uz) && this.live--
      }
    }
    class ab {
      constructor(zz, uz, bz, Ez, nz) {
        this.owner = zz, this.session = uz, this.key = bz, this.half = void 0, this.rate = void 0, this.stopDelayMs = void 0, this.emitted = void 0, this.stopped = !1, this.freed = !1, this.half = [Math.abs(nz[0]), Math.abs(nz[1]), Math.abs(nz[2])], this.rate = Jb(Ez.emitRate), this.emitted = this.rate > 0;
        const iz = Ez.maxLifeTime * Kb * 1e3 + 250;
        this.stopDelayMs = iz >= 0 ? Math.min(iz, 2147483647) : 250
      }
      sink() {
        return this.stopped ? null : this.owner.sinkFor(this.session)
      }
      moveTo(zz, uz) {
        const bz = this.sink();
        if (bz) {
          if (uz)
            for (let zz = 0; zz < 3; zz++) this.half[zz] = Math.abs(uz[zz]);
          Ab(zz, this.half) && (0, Zz.of)(bz, 0, this.key, Zz.Ed.HasBox, ob, Nb, fb)
        }
      }
      setEmitRate(zz) {
        const uz = this.sink(),
          bz = Jb(zz);
        uz && bz !== this.rate && (0, Zz.of)(uz, 0, this.key, 0, Xb, Xb, xb(bz)) && (this.rate = bz, this.emitted ||= bz > 0)
      }
      emit(zz) {
        const uz = this.sink(),
          bz = Math.min(Math.floor(zz), Zz.Ed.MaxBurst);
        uz && bz > 0 && (0, Zz.cf)(uz, 0, this.key, Zz.Ed.PresetNone, 0, bz, Xb, Xb, fb) && (this.emitted = !0)
      }
      emitPoints(zz, uz, bz) {
        const Ez = this.sink(),
          nz = Math.min(Math.floor(bz), Zz.Ed.MaxPoints, Math.floor(uz.length / 4));
        if (!Ez || !(nz > 0) || !Number.isFinite(zz[0] + zz[1] + zz[2])) return;
        const iz = new Uint8Array(uz.buffer, uz.byteOffset, nz * Zz.Ed.PointBytes);
        (0, Zz.df)(Ez, 0, this.key, nz, zz, iz) && (this.emitted = !0)
      }
      setDirections(zz, uz) {
        const bz = this.sink();
        if (!bz || !Number.isFinite(zz[0] + zz[1] + zz[2] + uz[0] + uz[1] + uz[2])) return;
        const Ez = rb.encode(JSON.stringify({
          dir1: [zz[0], zz[1], zz[2]],
          dir2: [uz[0], uz[1], uz[2]]
        }));
        (0, Zz.of)(bz, 0, this.key, 0, Xb, Xb, Ez)
      }
      stop() {
        const zz = this.sink();
        this.stopped = !0, zz && (this.emitted ? (this.rate > 0 && (0, Zz.of)(zz, 0, this.key, 0, Xb, Xb, xb(0)), setTimeout((() => {
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
    const Vb = cu.o,
      mb = new TextDecoder;

    function qb(zz, uz) {
      const {
        serverIds: bz,
        kinds: Ez
      } = zz;
      let nz = 0;
      for (let iz = 0; iz < bz.length; iz++) {
        const zz = bz[iz];
        if (zz !== Zz.bd && !rz(Ez[iz])) {
          if (nz === uz.length) {
            const zz = new Int32Array(Math.max(64, 2 * nz));
            zz.set(uz), uz = zz
          }
          uz[nz++] = zz
        }
      }
      return {
        ids: uz,
        count: nz
      }
    }

    function hb(zz, uz) {
      return zz.length >= uz ? zz : new Int32Array(Math.max(uz, 2 * zz.length))
    }

    function Ub(zz, uz, bz, Ez) {
      for (let nz = 0; nz < bz; nz += 4096) {
        const iz = Math.min(4096, bz - nz),
          lz = zz.memoryView(Int32Array, zz.scratch(), iz, "entity_info_batch's ids");
        if (!lz) return !1;
        lz.set(uz.subarray(nz, nz + iz));
        const Mz = zz.queries.entityInfoBatch(iz),
          tz = 4294967295 === Mz ? null : zz.memoryData(zz.scratch(), Mz, 4, "entity_info_batch's records");
        if (!tz) return !1;
        for (let zz = 0; zz + Zz.ac.BYTES <= Mz;) {
          const uz = Zz.ac.len(tz, zz);
          Ez(Zz.ac.serverId(tz, zz), cb(tz, zz, uz)), zz += Zz.ac.BYTES + (0, dz.ie)(uz)
        }
      }
      return !0
    }

    function cb(zz, uz, bz) {
      var Ez, nz, iz;
      const lz = Zz.ac.kind(zz, uz),
        Mz = 0 === lz ? null : oz(lz);
      if (null === Mz) return null;
      const tz = Zz.ac.variation(zz, uz),
        Hz = Zz.ac.pose(zz, uz),
        Oz = Zz.ac.meta(zz, uz),
        pz = Zz.ac.mesh(zz, uz),
        dz = 0 !== (Zz.ac.flags(zz, uz) & Zz.Zb.HasOpts),
        Fz = Vb[Mz];
      return Object.freeze({
        type: Mz,
        variation: tz === Zz.ed ? void 0 : null !== (Ez = null !== (nz = null === Fz || void 0 === Fz ? void 0 : Fz[tz]) && void 0 !== nz ? nz : null === Fz || void 0 === Fz ? void 0 : Fz[0]) && void 0 !== Ez ? Ez : "default",
        pose: Hz === Zz.qc ? void 0 : null !== (iz = Zz.Nb[Hz]) && void 0 !== iz ? iz : Zz.Nb[0],
        metaInfo: Oz === Zz.qc ? void 0 : Zz.Tc[Oz],
        meshKind: pz === Zz.qc ? void 0 : Zz.Pc[pz],
        meshOpts: dz ? mb.decode(new Uint8Array(zz.buffer, zz.byteOffset + uz + Zz.ac.BYTES, bz)) : void 0
      })
    }
    const gb = 1,
      Sb = 2;
    class yb {
      constructor(zz) {
        this.deps = zz, this.wanted = 0, this.yM = !1, this.refused = !1
      }
      get on() {
        return this.yM
      }
      want(zz, uz) {
        this.wanted = uz ? this.wanted | zz : this.wanted & ~zz;
        const bz = 0 !== this.wanted;
        if (bz === this.yM) return;
        const Ez = this.deps.cmd();
        null !== Ez ? (0, Zz.og)(Ez, 0, bz ? 1 : 0) ? (this.yM = bz, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.yM = !1
      }
    }
    class Db {
      constructor(zz) {
        this.deps = zz, this.entries = new Map, this.complete = !1, this.refill = !1, this.midFrame = !1, this.pending = new Int32Array(64), this.pendingCount = 0, this.ids = new Int32Array(64)
      }
      get(zz) {
        var uz;
        return this.complete || this.fill(), null !== (uz = this.entries.get("string" === typeof zz ? zz : String(zz))) && void 0 !== uz ? uz : null
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
            api: uz
          } = this.deps;
          let bz = 0;
          const Ez = this.ids = hb(this.ids, zz);
          for (let nz = 0; nz < zz; nz++) {
            const zz = this.pending[nz],
              iz = uz.indexById.get(zz);
            void 0 === iz || rz(uz.kinds[iz]) ? this.entries.delete(String(zz)) : Ez[bz++] = zz
          }
          bz > 0 && !this.batch(Ez, bz) && (this.complete = !1)
        }
      }
      sessionEnded() {
        this.entries.clear(), this.complete = !1, this.refill = !1, this.midFrame = !1, this.pendingCount = 0, this.deps.watch.want(gb, !1)
      }
      fill() {
        const {
          api: zz
        } = this.deps;
        if (this.complete = !0, this.pendingCount = 0, this.entries.clear(), this.deps.isSessionLive()) {
          const {
            watch: zz
          } = this.deps, uz = zz.on;
          zz.want(gb, !0), !uz && zz.on && (this.refill = this.midFrame)
        }
        const {
          ids: uz,
          count: bz
        } = qb(zz, this.ids);
        this.ids = uz, bz > 0 && !this.batch(uz, bz) && (this.refill = !0)
      }
      batch(zz, uz) {
        return Ub(this.deps.api, zz, uz, ((zz, uz) => {
          null === uz ? this.entries.delete(String(zz)) : this.entries.set(String(zz), uz)
        }))
      }
    }
    var Qb = bz(4564);

    function Wb(zz) {
      if ("message" !== zz.type || zz.zM !== Qb.Wb.NewClientOptions || zz.payloadKind !== dz.bc.Msgpack) return null;
      const uz = (0, qz.b)(zz.payload);
      if (null === uz || "object" !== typeof uz || Array.isArray(uz)) throw new Error("NewClientOptions whose body isn't an object of options");
      return uz
    }
    var eb = bz(1226),
      jb = bz(36103);

    function Ib(zz, uz, bz, Ez, nz, iz, Mz) {
      var tz, Hz, Oz;
      switch (zz) {
        case Zz.ee.ToggleMenu: {
          const zz = Zz.R[uz];
          lz.k.sK("toggleMenu", void 0 === zz ? "inventory" : `inventory|${zz}`);
          break
        }
        case Zz.ee.EditBoard:
          lz.k.sK("EditBoard", {
            pos: 0 === uz ? null : bz
          });
          break;
        case Zz.ee.EditCodeBlock:
        case Zz.ee.ViewCodeBlock:
          lz.k.sK("EditCodeBlock", {
            pos: bz,
            canChangePos: zz === Zz.ee.EditCodeBlock
          });
          break;
        case Zz.ee.EditCustomLobbyBlock:
          lz.k.sK("EditCustomLobbyBlock", {
            pos: bz
          });
          break;
        case Zz.ee.OpenIronChest:
          lz.k.sK("OpenIronChest", {
            pos: bz
          });
          break;
        case Zz.ee.EditNameTag:
          lz.k.sK("EditNameTag", null !== (tz = null === (Hz = nz.yM()) || void 0 === Hz || null === (Oz = Hz.attributes.customAttributes) || void 0 === Oz ? void 0 : Oz.text) && void 0 !== tz ? tz : "");
          break;
        case Zz.ee.EditBook: {
          var pz, dz, Rz;
          const zz = null === (pz = nz.yM()) || void 0 === pz ? void 0 : pz.attributes;
          lz.k.sK("EditBook", {
            pages: (0, eb.L)(null === zz || void 0 === zz || null === (dz = zz.customAttributes) || void 0 === dz ? void 0 : dz.pages),
            title: null !== (Rz = null === zz || void 0 === zz ? void 0 : zz.customDisplayName) && void 0 !== Rz ? Rz : "Title",
            isPublished: !(null === zz || void 0 === zz || !zz.customDescription)
          });
          break
        }
        case Zz.ee.CantChangeBlock:
          ! function(zz, uz) {
            const bz = uz.getClientOption("cantChangeError"),
              Ez = uz.getClientOption(zz ? "cantBuildError" : "cantBreakError"),
              nz = zz ? bz : Ez;
            (uz.getClientOption("canChange") || nz || "You cannot modify this block" !== bz) && lz.k.sK("showBottomMessage", {
              message: Ez || bz,
              type: "Error"
            })
          }(1 === uz, iz);
          break;
        case Zz.ee.MiddleBarStart:
          lz.k.sK("middleScreenBarInitiate", {
            duration: Ez,
            KE: 1 === bz[0],
            horizBarRemOffset: uz
          });
          break;
        case Zz.ee.MiddleBarStop:
          lz.k.sK("middleScreenBarRemove");
          break;
        case Zz.ee.Hitmarker:
          lz.k.sK("localGunHitmarker", {
            ib: 1 === uz
          });
          break;
        case Zz.ee.ShotsLeft:
          lz.k.sK("localPlayerNewShotsLeft", Ez);
          break;
        case Zz.ee.AimingOverlay:
          lz.k.sK("aimingOverlay", 3 === (3 & uz) ? "sniper" : "none");
          break;
        case Zz.ee.BottomMessage:
          lz.k.sK("showBottomMessage", JSON.parse(Mz()));
          break;
        case Zz.ee.Crosshair:
          nz.inaccuracy = (0, hz.e)(Ez), (0, jb.c)().crosshairAccuracy(nz.inaccuracy);
          break;
        case Zz.ee.ChargeStage:
          break;
        case Zz.ee.EmoteWheelClose:
          lz.k.sK("requestEmoteWheelClose");
          break;
        case Zz.ee.BlockMined:
          lz.k.sK("localBlockMined");
          break;
        default:
          throw new Fz.b(`UiEvent of no kind: what ${zz}`)
      }
    }
    var Bb = bz(37422),
      Cb = bz(8994),
      Yb = bz(1909),
      kb = bz(36231),
      zE = bz(9007),
      uE = bz(4544);
    const bE = 10,
      EE = {
        player: [],
        chestOrCreative: [],
        chest: null,
        creative: !1,
        selectedSlot: 0,
        freeSlots: 0
      },
      nE = {
        items: [],
        ammo: 0,
        selectedSlot: 0
      },
      iE = {
        gun: !1,
        aimable: !1,
        chargeName: null
      };

    function lE(zz, uz) {
      let bz, Ez = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        nz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      const iz = () => (bz = (0, Yb.n)(bz, uz()), bz);
      return {
        current: iz,
        watch(uz) {
          const bz = () => {
              uz(iz())
            },
            lz = [zz.watch(bz)];
          return null !== Ez && lz.push((0, Yb.r)((zz => {
            zz.some(Ez) && bz()
          }))), null !== nz && lz.push(nz(bz)), () => {
            for (const zz of lz) zz()
          }
        }
      }
    }

    function ME(zz) {
      return zz && {
        name: zz.name,
        amount: zz.amount,
        attributes: zz.attributes
      }
    }
    const tE = new WeakMap;

    function HE(zz) {
      let uz = tE.get(zz);
      return void 0 === uz && (uz = (0, zE.creativeItemIds)().map((uz => ({
        name: zz.nameOfId(uz),
        amount: zz.isStackableId(uz) ? 1 : null,
        attributes: (0, Bb.c)("Gun" === (0, zE.itemTypeOf)(uz) ? {
          type: "Gun",
          clipSize: (0, zE.clipSizeOf)(uz)
        } : void 0)
      }))), tE.set(zz, uz)), uz
    }

    function OE(zz, uz, bz, Ez) {
      const nz = uz => (zz.flush(Ez), uz),
        iz = bz => {
          var Ez, nz, iz, lz, Mz, tz, Hz;
          const Oz = zz.slot(bz);
          if (!Oz) return null;
          const {
            rootName: pz,
            metaStr: dz
          } = uz.getMetaInfo(Oz.name);
          return {
            name: Oz.name,
            amount: Oz.amount,
            attributes: Oz.attributes,
            instance: zz.instance(bz),
            displayName: null !== (Ez = Oz.attributes.customDisplayName) && void 0 !== Ez ? Ez : uz.getDisplayName(pz),
            requiresAmmo: "RequiresAmmo" === dz,
            clipSize: null !== (nz = null !== (iz = null === (lz = Oz.attributes.customAttributes) || void 0 === lz || null === (Mz = lz.gunStats) || void 0 === Mz ? void 0 : Mz.clipSize) && void 0 !== iz ? iz : null === (tz = uz.getGunStats(pz)) || void 0 === tz ? void 0 : tz.clipSize) && void 0 !== nz ? nz : null === (Hz = Oz.typeObj) || void 0 === Hz ? void 0 : Hz.clipSize
          }
        },
        Mz = function(zz, uz) {
          let bz = null,
            Ez = {
              focus: null,
              recipes: [],
              detail: null
            },
            nz = -1;
          const iz = new Set;
          return {
            read() {
              var iz, lz;
              if (null === bz) return null !== Ez.focus && (Ez = {
                ...Ez,
                focus: null
              }), Ez;
              if (Ez.focus === bz && nz === zz.changes) return Ez;
              if (nz = zz.changes, 0 === zz.length) return Ez = {
                focus: bz,
                recipes: [],
                detail: null
              }, Ez;
              let Mz = 0;
              if (null !== bz.recipe) try {
                Mz = uz.getItemId(bz.recipe.name)
              } catch {}
              const tz = zz.craftingView(bz.station, Mz, null !== (iz = null === (lz = bz.recipe) || void 0 === lz ? void 0 : lz.cO) && void 0 !== iz ? iz : 0);
              return Ez = null === tz ? {
                focus: bz,
                recipes: [],
                detail: null
              } : function(zz, uz, bz) {
                let Ez = Zz.rb.BYTES;
                const nz = [];
                for (let Oz = Zz.rb.recipes(zz, 0); Oz > 0; Oz--) {
                  const bz = Zz.kb.flags(zz, Ez),
                    iz = {
                      name: uz.nameOfId(Zz.kb.item(zz, Ez)),
                      cO: Zz.kb.recipe(zz, Ez),
                      requires: [],
                      produces: Zz.kb.produces(zz, Ez),
                      haveIngredients: 0 !== (bz & Zz.gb.HaveIngredients),
                      listed: 0 !== (bz & Zz.gb.Listed)
                    };
                  let lz = Zz.kb.requires(zz, Ez);
                  for (Ez += Zz.kb.BYTES; lz > 0; lz--) {
                    const bz = Zz.nb.items(zz, Ez);
                    iz.requires.push({
                      items: FE(zz, Ez + Zz.nb.BYTES, bz, uz),
                      amt: Zz.nb.amount(zz, Ez)
                    }), Ez += Zz.nb.BYTES + 2 * bz
                  }
                  nz.push(iz)
                }
                const iz = Zz.rb.flags(zz, 0);
                if (null === bz.recipe || 0 === (iz & Zz.qb.Detail)) return {
                  focus: bz,
                  recipes: nz,
                  detail: null
                };
                const lz = {},
                  Mz = {};
                for (let Oz = Zz.rb.ingredients(zz, 0); Oz > 0; Oz--) {
                  const bz = Zz.eb.item(zz, Ez),
                    nz = Zz.eb.from(zz, Ez),
                    iz = Zz.eb.amount(zz, Ez);
                  Ez += Zz.eb.BYTES;
                  const tz = nz === Zz.N ? null : FE(zz, Ez, nz, uz);
                  if (null !== tz && (Ez += 2 * nz), 0 === bz) continue;
                  const Hz = uz.nameOfId(bz);
                  lz[Hz] = iz, null !== tz && (Mz[Hz] = tz)
                }
                const {
                  name: tz,
                  cO: Hz
                } = bz.recipe;
                return {
                  focus: bz,
                  recipes: nz,
                  detail: {
                    name: tz,
                    cO: Hz,
                    craftAllTimes: Zz.rb.craftAllTimes(zz, 0),
                    roomForOne: 0 !== (iz & Zz.qb.RoomForOne),
                    resultStackable: Boolean(uz.getItemStat(tz, "stackable")),
                    amounts: lz,
                    ingredientsCraftedFrom: Mz
                  }
                }
              }(tz, uz, bz), Ez
            },
            setFocus(zz) {
              bz = zz;
              for (const uz of [...iz]) uz()
            },
            watchFocus: zz => (iz.add(zz), () => {
              iz.delete(zz)
            })
          }
        }(zz, uz);
      return {
        states: {
          inventory: lE(zz, (() => {
            const bz = zz.length;
            if (0 === bz) return EE;
            const Ez = [];
            for (let uz = 0; uz < Zz.ud; uz++) Ez.push(ME(zz.slot(uz)));
            const nz = zz.slotIcon,
              iz = Ez[zz.selectedSlot];
            0 !== nz && iz && (Ez[zz.selectedSlot] = {
              ...iz,
              icon: uz.nameOfId(nz)
            });
            const lz = !0 === uz.getClientOption("creative");
            let Mz = [],
              tz = null;
            if (bz > Zz.ud) {
              for (let uz = Zz.ud; uz < bz; uz++) Mz.push(ME(zz.slot(uz)));
              tz = {
                type: null,
                pos: [...zz.pl],
                numSlots: bz - Zz.ud,
                ironChest: null
              }
            } else lz && (Mz = HE(uz));
            return {
              player: Ez,
              chestOrCreative: Mz,
              chest: tz,
              creative: lz,
              selectedSlot: zz.selectedSlot,
              freeSlots: zz.freeSlots()
            }
          }), (0, Yb.k)("creative")),
          hotbar: lE(zz, (() => {
            if (0 === zz.length) return nE;
            const uz = [];
            for (let zz = 0; zz < bE; zz++) uz.push(iz(zz));
            return {
              items: uz,
              ammo: zz.amountOf("Ammo"),
              selectedSlot: zz.selectedSlot
            }
          }), (0, Yb.h)("DisplayName", "GunStats")),
          crafting: lE(zz, Mz.read, null, Mz.watchFocus),
          heldItemAim: lE(zz, (() => {
            var uz;
            if (!bz()) return iE;
            const Ez = null === (uz = zz.yM()) || void 0 === uz ? void 0 : uz.typeObj,
              nz = "Gun" === (null === Ez || void 0 === Ez ? void 0 : Ez.type);
            return {
              gun: nz,
              aimable: nz || !0 === (null === Ez || void 0 === Ez ? void 0 : Ez.showsAimingUi),
              chargeName: "Chargeable" === (null === Ez || void 0 === Ez ? void 0 : Ez.type) ? Ez.name : null
            }
          }), null, (zz => function(zz, uz) {
            let bz = zz();
            return (0, uE.A)((() => {
              const Ez = zz();
              Ez !== bz && (bz = Ez, uz(Ez))
            }))
          }(bz, zz)))
        },
        events: {
          hotbarSlotRequested: (0, Yb.e)("setSelectedInventorySlotI"),
          hotbarScrolled: (0, Yb.e)("ScrollInventorySlot"),
          numberKeyPressed: (0, Yb.e)("numkeyPressed"),
          inventoryDropRequested: (0, Yb.e)("DropInvenItem"),
          chestToggled: (0, Yb.e)("chestToggleFromServer"),
          chestRefreshed: (0, Yb.e)("chestRefreshedFromServer", dE),
          inventorySynced: (0, Yb.e)("syncedInvenFromServer", dE),
          enchantingTableOpened: (0, Yb.e)("enchantingTable", (zz => {
            let {
              position: bz,
              hO: Ez
            } = zz;
            return {
              position: [...bz],
              blockName: uz.getMetaInfo(Ez).rootName
            }
          }))
        },
        commands: {
          selectHotbarSlot(uz) {
            zz.selectSlot(uz), zz.flush(Ez)
          },
          removeInventoryItem(uz) {
            let {
              slot: bz,
              amount: Ez,
              drop: iz
            } = uz;
            return nz(zz.remove(bz, Ez, iz))
          },
          swapInventorySlots(uz) {
            let {
              a: bz,
              b: Ez
            } = uz;
            return nz(zz.swap(bz, Ez))
          },
          moveInventoryItem(uz) {
            let {
              from: bz,
              to: Ez,
              amount: iz
            } = uz;
            return nz(zz.move(bz, Ez, iz))
          },
          quickMoveInventoryItem(uz) {
            let {
              slot: bz,
              start: Ez,
              end: iz,
              amount: lz
            } = uz;
            return nz(zz.quickMove(bz, Ez, iz, lz))
          },
          closeChest() {
            zz.closeChest(), zz.flush(Ez), lz.k.sK("chestClosedByPlayer")
          },
          focusCrafting(zz) {
            Mz.setFocus(zz)
          },
          craftRecipe(uz) {
            let {
              name: bz,
              cO: Ez,
              times: iz
            } = uz;
            return nz(zz.craft(bz, Ez, iz))
          },
          salvageItem(uz) {
            let {
              slot: bz,
              name: Ez,
              amount: iz
            } = uz;
            return nz(zz.salvage(bz, Ez, iz))
          },
          enchantItem(uz) {
            let {
              slot: bz,
              level: Ez,
              tablePos: nz
            } = uz;
            zz.enchant(bz, Ez, nz)
          }
        },
        queries: {
          enchantingOffer(bz) {
            let {
              slot: Ez,
              blockName: nz
            } = bz;
            return function(zz, uz, bz, Ez) {
              const nz = zz.slot(bz);
              if (!nz || !uz.getClientOption("canCraft") || !(0, Cb.o)(Ez) || (0, Cb.m)(nz.attributes)) return pE;
              const iz = (0, zE.enchantmentPerksOf)(uz.getItemId(nz.name));
              if (0 === iz.length) return pE;
              const lz = [];
              for (let Mz = 0; Mz < kb.d; Mz++) {
                const {
                  commonProb: zz,
                  uncommonProb: uz,
                  rareProb: bz,
                  epicProb: nz,
                  legendaryProb: iz,
                  level: tz
                } = (0, Cb.f)(Ez, Mz);
                lz.push({
                  level: tz,
                  odds: [zz, uz, bz, nz, iz].map((zz => 100 * zz))
                })
              }
              return {
                perks: [...iz],
                options: lz
              }
            }(zz, uz, Ez, nz)
          }
        }
      }
    }
    const pE = Object.freeze({
      perks: [],
      options: []
    });

    function dE() {
      return null
    }

    function FE(zz, uz, bz, Ez) {
      const nz = [];
      for (let iz = 0; iz < bz; iz++) {
        const bz = zz.getUint16(uz + 2 * iz, !0);
        0 !== bz && nz.push(Ez.nameOfId(bz))
      }
      return nz
    }
    class ZE {
      constructor(zz) {
        this.api = zz, this.positions = new Map, this.targeted = {
          oB: 0,
          position: [0, 0, 0],
          normal: [0, 0, 0],
          ol: [0, 0, 0]
        }, this.hasTarget = !1, this.breaking = [0, 0, 0], this.isBreaking = !1
      }
      position(zz) {
        let uz = this.positions.get(zz);
        return uz || (this.api.checkValid(zz) || this.api.isLocal(zz) ? (uz = [NaN, NaN, NaN], this.api.readPosition(zz, uz), this.positions.set(zz, uz), uz) : null)
      }
      U3() {
        return this.hasTarget ? this.targeted : null
      }
      breakingPosition() {
        return this.isBreaking ? this.breaking : null
      }
      refresh() {
        for (const [uz, bz] of this.positions) this.api.readPosition(uz, bz) || this.api.checkValid(uz) || this.api.isLocal(uz) || this.positions.delete(uz);
        const zz = this.api.apiView;
        if (this.refreshTarget(), this.isBreaking = 0 !== (Zz.z.playerFlags(zz, 0) & Zz.Id.Breaking) && Zz.z.breakingProgress(zz, 0) >= 0, this.isBreaking)
          for (let uz = 0; uz < 3; uz++) this.breaking[uz] = Zz.z.breakingPos(zz, 0, uz)
      }
      refreshTarget() {
        const zz = this.api.apiView,
          uz = Zz.z.targetBlockId(zz, 0);
        if (this.hasTarget = uz !== Zz.cd, this.hasTarget) {
          const bz = this.targeted;
          bz.oB = uz;
          for (let uz = 0; uz < 3; uz++) bz.position[uz] = Zz.z.targetBlock(zz, 0, uz), bz.normal[uz] = Zz.z.targetNormal(zz, 0, uz), bz.ol[uz] = Zz.z.targetAdjacent(zz, 0, uz)
        }
      }
      despawned(zz) {
        const uz = this.positions.get(zz);
        uz && !this.api.isLocal(zz) && (uz.fill(NaN), this.positions.delete(zz))
      }
    }
    var RE = bz(39792),
      KE = bz(39776),
      wE = bz(36222);
    const XE = 1,
      fE = 2;
    class sE {
      constructor() {
        this.game = new wE.h, this.client = new wE.h, this.yM = 0, this.movesFly = null
      }
      setGame(zz) {
        if (null === zz || "object" !== typeof zz) return !1;
        const {
          key: uz,
          value: bz
        } = zz;
        return "string" === typeof uz && (this.game.setBooleanType(uz, Boolean(bz)), !0)
      }
      setClient(zz, uz) {
        this.client.setBooleanType(zz, uz)
      }
      clearGame() {
        this.game = new wE.h, this.movesFly = null
      }
      setMovesFly(zz) {
        this.movesFly = zz
      }
      perms() {
        return (this.game._getTotalBooleanVal() ? XE : 0) | (this.client._getTotalBooleanVal() ? fE : 0)
      }
      write(zz) {
        const uz = this.perms(),
          {
            movesFly: bz
          } = this;
        if (uz === this.yM && null === bz) return !0;
        let Ez = Zz.dc.Keep;
        return null !== bz && (Ez = bz ? Zz.dc.On : Zz.dc.Off), !(!zz || !(0, Zz.Be)(zz, 0, Ez, uz, bz ? 1 : 0)) && (this.yM = uz, this.movesFly = null, !0)
      }
    }
    class rE {
      constructor(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 35;
        this.api = zz, this.screenBandPct = void 0, this.clipX = 0, this.clipY = 0, this.clipW = 0, this.eye = [0, 0, 0], this.forward = [0, 0, 1], this.along = [0, 0, 0], this.screenBandPct = {
          x: Mz.c,
          get y() {
            return uz()
          }
        }
      }
      get hasView() {
        const zz = this.api.apiView,
          uz = Zz.z.viewProj;
        return 0 !== uz(zz, 0, 3) || 0 !== uz(zz, 0, 7) || 0 !== uz(zz, 0, 11) || 0 !== uz(zz, 0, 15)
      }
      get cameraPosition() {
        const zz = this.api.apiView,
          {
            eye: uz
          } = this;
        for (let bz = 0; bz < 3; bz++) uz[bz] = Zz.z.eye(zz, 0, bz);
        return uz
      }
      get cameraDirection() {
        const zz = this.api.apiView,
          uz = Zz.z.viewProj,
          bz = uz(zz, 0, 3),
          Ez = uz(zz, 0, 7),
          nz = uz(zz, 0, 11),
          iz = Math.hypot(bz, Ez, nz),
          {
            forward: lz
          } = this;
        return iz > 0 && (lz[0] = bz / iz, lz[1] = Ez / iz, lz[2] = nz / iz), lz
      }
      get cameraHeading() {
        return Zz.z.heading(this.api.apiView, 0)
      }
      get cameraPitch() {
        return Zz.z.pitch(this.api.apiView, 0)
      }
      get tanHalfFovX() {
        return Zz.z.tanHalfFovX(this.api.apiView, 0)
      }
      get tanHalfFovY() {
        return Zz.z.tanHalfFovY(this.api.apiView, 0)
      }
      projectWorldPosToScreenPos(zz) {
        this.clip(zz);
        const {
          clipX: uz,
          clipY: bz,
          clipW: Ez
        } = this;
        if (Ez > 0) {
          const zz = uz / Ez * 50,
            nz = -bz / Ez * 50;
          return Math.abs(zz) <= this.screenBandPct.x && Math.abs(nz) <= this.screenBandPct.y ? {
            x: 50 + zz,
            y: 50 + nz
          } : this.clampToBand(zz, nz)
        }
        const nz = this.cameraPosition,
          iz = Math.hypot(zz[0] - nz[0], zz[1] - nz[1], zz[2] - nz[2]),
          lz = this.api.apiView,
          Mz = Zz.z.viewProj,
          tz = iz > 0 ? uz / iz : 0,
          Hz = iz > 0 ? -bz / iz : 0,
          Oz = Math.hypot(Mz(lz, 0, 1), Mz(lz, 0, 5), Mz(lz, 0, 9)),
          pz = tz / Math.hypot(Mz(lz, 0, 0), Mz(lz, 0, 4), Mz(lz, 0, 8)),
          dz = Hz / Oz,
          Fz = !(Math.abs(pz) >= .001 || Math.abs(dz) >= .001);
        return this.clampToBand(tz, Fz ? -(Oz || 1) : Hz)
      }
      projectDirectionToScreenPos(zz) {
        if (!this.hasView) return;
        const uz = this.cameraPosition,
          bz = this.along;
        for (let Ez = 0; Ez < 3; Ez++) bz[Ez] = uz[Ez] + 10 * zz[Ez];
        return this.projectWorldPosToScreenPos(bz)
      }
      projectWorldPosToViewport(zz) {
        this.clip(zz);
        const {
          clipX: uz,
          clipY: bz,
          clipW: Ez
        } = this;
        return Ez > 0 ? {
          x: 50 + uz / Ez * 50,
          y: 50 - bz / Ez * 50
        } : null
      }
      clip(zz) {
        const uz = this.api.apiView,
          bz = zz[0] - Zz.z.origin(uz, 0, 0),
          Ez = zz[1] - Zz.z.origin(uz, 0, 1),
          nz = zz[2] - Zz.z.origin(uz, 0, 2),
          iz = Zz.z.viewProj;
        this.clipX = iz(uz, 0, 0) * bz + iz(uz, 0, 4) * Ez + iz(uz, 0, 8) * nz + iz(uz, 0, 12), this.clipY = iz(uz, 0, 1) * bz + iz(uz, 0, 5) * Ez + iz(uz, 0, 9) * nz + iz(uz, 0, 13), this.clipW = iz(uz, 0, 3) * bz + iz(uz, 0, 7) * Ez + iz(uz, 0, 11) * nz + iz(uz, 0, 15)
      }
      clampToBand(zz, uz) {
        return (0, Mz.f)(zz, uz, this.screenBandPct.x, this.screenBandPct.y)
      }
    }
    var oE = bz(4571);
    const NE = new TextEncoder,
      vE = new Uint8Array(Zz.X * Zz.V);
    class xE {
      constructor() {
        this.buttons = [], this.yM = !0
      }
      set(zz) {
        this.buttons = zz, this.yM = !1
      }
      attached() {
        this.yM = 0 === this.buttons.length
      }
      write(zz) {
        if (this.yM) return;
        const uz = new Uint8Array(Zz.X),
          bz = new Uint8Array(Zz.X);
        let Ez = 0,
          nz = 0;
        for (const {
            id: iz,
            keycode: lz
          }
          of this.buttons) {
          if (Ez === Zz.X) break;
          const {
            read: zz,
            written: Mz
          } = NE.encodeInto(iz, vE.subarray(nz, nz + Zz.V));
          if (zz < iz.length) continue;
          const tz = oE.m[lz];
          uz[Ez] = "number" === typeof tz ? tz : 0, bz[Ez] = Mz, Ez++, nz += Mz
        }
        this.yM = (0, Zz.qe)(zz, 0, Ez, uz, bz, vE.subarray(0, nz))
      }
    }

    function JE(zz, uz, bz) {
      const Ez = NE.encode(uz);
      return Ez.length <= Zz.V && function(zz, uz, bz, Ez) {
        return (0, yu.d)(), (0, Zz.rf)(zz, uz, bz, Ez)
      }(zz, 0, bz ? 1 : 0, Ez)
    }
    const AE = new TextDecoder,
      TE = new TextEncoder,
      LE = new Uint8Array(0),
      PE = [0, 0, 0],
      GE = {
        off: Zz.Jd.Off,
        key: Zz.Jd.Key,
        touch: Zz.Jd.Touch
      };
    class aE {
      constructor(zz) {
        var uz;
        this.options = zz, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tickers = [], this.renderers = [], this.receivers = [], this.failures = [], this.vetoSet = !1, this.hooksSet = !1, this.writtenPublicLobby = !1, this.promptWatch = "off", this.promptWatchSent = "off", this.customButtons = new xE, this.generation = 0, this.sessionLive = !1, this.boundId = 0, this.session = null, this.activeConn = 0, this.closedThrough = 0, this.openSocket = 0, this.socketLeftSinceAttach = !1, this.ticks = 0, this.zoomUnshown = !1, this.zoomHeld = !1, this.overflowGen = 0, this.resyncOwed = !1, this.zoom = 0, this.pendingZoom = null, this.highlight = null, this.highlightOwed = !1, this.cmd = null, this.freeCam = new sE, this.stopped = () => !1, this.onError = void 0, this.api = void 0, this.tables = void 0, this.itemSources = null, this.fault = void 0, this.xZ = zz => {
          if ((0, Fz.h)(zz)) throw zz;
          this.onError(zz)
        }, this.api = zz.api, this.tables = zz.tables, this.onError = null !== (uz = zz.onError) && void 0 !== uz ? uz : zz => {
          console.error("Error in client game callback", zz)
        }, this.renderFrame = new rE(this.api, zz.screenBandY), this.live = new ZE(this.api), this.chunks = new Mu(this.api.memory, (() => this.api.apiView)), this.items = new Rb({
          api: this.api,
          tables: zz.tables,
          cmd: () => this.cmd,
          onError: this.onError,
          beforeOp: zz.beforeOp
        });
        const bz = () => this.stopped() ? null : this.cmd,
          Ez = () => this.sessionLive;
        this.entityInfoWatch = new yb({
          cmd: bz,
          onError: this.onError
        }), this.entityInfo = new Db({
          api: this.api,
          watch: this.entityInfoWatch,
          isSessionLive: Ez
        }), this.particles = new Gb({
          cmd: bz,
          isSessionLive: Ez,
          onError: this.onError
        }), this.clientApi = new lb({
          api: this.api,
          live: this.live,
          chunks: this.chunks,
          items: this.items,
          entityInfo: this.entityInfo,
          particles: this.particles,
          tables: zz.tables,
          cmd: bz,
          sendCmd: () => this.sendCmd(),
          isSessionLive: Ez,
          beforeWrite: () => {
            var uz;
            if (this.stopped()) return !1;
            const bz = this.generation;
            return !1 !== (null === (uz = zz.beforeWrite) || void 0 === uz ? void 0 : uz.call(zz)) && bz === this.generation
          },
          playerDbId: () => {
            const zz = this.session;
            if (null === zz) throw new Error("No game session has started, so the local player has no DB id");
            return zz.playerDbId
          },
          playSound: zz.playSound,
          setLocalOptions: zz.setLocalOptions,
          hasPackModel: zz.hasPackModel
        }), this.scriptedCamera = new ez({
          api: this.api,
          cmd: () => this.stopped() ? null : this.cmd,
          screen: zz.cameraScreen,
          showFacing: zz.showCameraFacing
        })
      }
      get itemBridgeSources() {
        return this.itemSources ??= OE(this.items, this.tables, (() => this.localPlayerAlive()), this.xZ), this.itemSources
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
        const uz = this.sessionLive ? this.sendCmd() : null;
        return null !== uz && (bz = uz, Ez = 0, nz = zz[0], iz = zz[1], lz = zz[2], (0, yu.d)(), (0, Zz.xe)(bz, Ez, nz, iz, lz));
        var bz, Ez, nz, iz, lz
      }
      cameraZoom() {
        return this.zoom
      }
      setCameraZoom(zz) {
        const uz = this.liveCmd();
        return null === uz ? (this.pendingZoom = zz, !1) : (this.pendingZoom = null, (0, Zz.ig)(uz, 0, zz, 1))
      }
      ZJ(zz) {
        const uz = this.stopped() ? null : this.cmd;
        return null !== uz && (0, Zz.dg)(uz, 0, zz ? 1 : 0)
      }
      respawn() {
        const zz = this.sessionLive ? this.sendCmd() : null;
        return null !== zz && (uz = zz, bz = 0, (0, yu.d)(), (0, Zz.Ff)(uz, bz));
        var uz, bz
      }
      bindCustomButtonKeys(zz) {
        this.customButtons.set(zz)
      }
      pressCustomButton(zz, uz) {
        const bz = this.sessionLive ? this.sendCmd() : null;
        return null !== bz && JE(bz, zz, uz)
      }
      padMove(zz, uz, bz, Ez, nz, iz) {
        const lz = this.liveCmd();
        return null !== lz && (0, Zz.bf)(lz, 0, zz, uz, bz, Ez, nz, iz)
      }
      thirdPersonFor(zz) {
        const uz = this.liveCmd();
        return null !== uz && (0, Zz.lg)(uz, 0, null !== zz && void 0 !== zz ? zz : 1 / 0)
      }
      send(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Ez = 0 !== this.openSocket || this.sessionLive ? this.sendCmd() : null;
        return null !== Ez && Du(Ez, bz ? dz.fd : 0, zz, (0, qz.c)(uz))
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
        const uz = () => zz.isStopped;
        this.stopped = uz, this.cmd = zz.rings.cmd, this.promptWatchSent = "off", this.writePromptWatch(), this.customButtons.attached(), this.writeCustomButtons();
        const bz = this.api.apiView;
        this.overflowGen = Zz.z.eventOverflowGen(bz, 0), this.resyncOwed = 0 !== Zz.z.eventOverflowMask(bz, 0), zz.setGameHost(this), zz.setEventWalker((zz => {
          this.api.walk(zz, this, uz)
        }))
      }
      watchPromptPick(zz) {
        this.promptWatch = zz, this.writePromptWatch()
      }
      get promptEntity() {
        return "off" === this.promptWatch || this.stopped() ? null : VE(Zz.z.promptEntity(this.api.apiView, 0))
      }
      get interactLabel() {
        return "touch" !== this.promptWatch || this.stopped() ? Zz.yc.None : Zz.z.interactLabel(this.api.apiView, 0)
      }
      get interactIcon() {
        return "touch" !== this.promptWatch || this.stopped() ? 0 : Zz.z.interactIcon(this.api.apiView, 0)
      }
      closeGame() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        (0 === zz || zz >= this.openSocket) && (this.openSocket = 0), this.closedThrough = Math.max(this.closedThrough, zz, this.activeConn), this.activeConn = 0, this.endSession(), this.endGameGrants(), this.dropGameCamera()
      }
      gameCamera(zz) {
        0 !== this.activeConn && this.scriptedCamera.settingsChanged(zz)
      }
      netEvent(zz) {
        "connection" === zz.type ? zz.phase === dz.B.Activated && zz.conn !== this.activeConn && zz.conn > this.closedThrough ? (this.endSession(), this.activeConn = zz.conn, this.endGameGrants(), this.dropGameCamera()) : zz.phase !== dz.B.Left && zz.phase !== dz.B.Closed || zz.conn !== this.activeConn ? zz.phase === dz.B.Resumed && 0 !== this.activeConn && zz.conn > this.closedThrough && (this.activeConn = zz.conn) : this.closeGame() : zz.conn === this.activeConn && 0 !== zz.conn && (zz.zM === KE.t ? this.gunHit(zz.payload) : zz.zM === Qb.Wb.EditItemCraftingRecipes || zz.zM === KE.S ? this.items.touch() : (this.serverOptions(zz), this.gameMessage(zz)));
        const uz = this.options.onNetEvent;
        uz && this.guard((() => {
          uz(zz)
        }))
      }
      serverOptions(zz) {
        const uz = this.options.serverOptions,
          bz = uz ? this.decoded(Wb, zz) : null;
        uz && bz && this.guard((() => {
          uz.applyNewClientOptions(bz)
        }))
      }
      gameMessage(zz) {
        let uz = null;
        try {
          uz = function(zz) {
            if ("message" !== zz.type || zz.zM !== Qb.Wb.GameCodeMessage || zz.payloadKind !== dz.bc.Msgpack) return null;
            const uz = (0, qz.b)(zz.payload);
            if (null === uz || "object" !== typeof uz || "string" !== typeof uz.messageType) throw new Error("GameCodeMessage without a messageType");
            return uz
          }(zz)
        } catch (bz) {
          this.sessionLive && this.onError(bz)
        }
        if (uz) {
          const {
            messageType: zz,
            data: bz
          } = uz;
          if ((0, Tz.e)(zz)) return void this.guard((() => {
            (0, Tz.c)(zz, bz)
          }));
          "freeCamPerms" === zz && this.freeCam.setGame(bz) && this.writeFreeCam(), this.sessionLive && this.round(this.receivers, (uz => {
            uz.onReceivedMessageFromServer(zz, bz)
          }))
        }
      }
      decoded(zz, uz) {
        try {
          return zz(uz)
        } catch (bz) {
          return this.onError(bz), null
        }
      }
      setClientFreeCameraGrant(zz, uz) {
        this.freeCam.setClient(zz, uz), this.writeFreeCam()
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
        const uz = this.highlight;
        this.highlightOwed = null === uz ? !(0, Zz.Me)(zz, 0, PE, PE, 0) : !(0, Zz.Me)(zz, 0, uz.pos, uz.normal, 1)
      }
      localPlayerBound(zz) {
        var uz, bz;
        if (0 === this.activeConn || this.sessionLive && zz === this.boundId) return;
        const Ez = this.sessionLive;
        let nz, iz, lz, Mz;
        this.endSession(), Ez && this.restartGameCamera();
        try {
          var tz;
          this.session = null;
          const zz = this.options.sessionInfo(this.activeConn);
          if (this.session = zz, !zz) return;
          nz = zz.gameNameWithVariation, iz = null !== (tz = (0, Jz.Nb)(nz)) && void 0 !== tz ? tz : void 0, lz = (0, Az.v)(zz.lobbyName), Mz = (0, Az.M)(zz.lobbyName)
        } catch (Xz) {
          return void this.onError(Xz)
        }
        const Hz = {
          localPlayerId: String(zz)
        };
        let Oz = {},
          pz = {};
        try {
          var dz, Fz;
          Oz = null !== (dz = null === (Fz = this.options.gameFactory((0, Jz.Sb)(nz))) || void 0 === Fz ? void 0 : Fz(Mz, lz, iz, Hz)) && void 0 !== dz ? dz : {}
        } catch (Xz) {
          this.xZ(Xz)
        }
        try {
          var Zz, Rz;
          pz = {
            ...null === (Zz = (Rz = this.options).defaultPlugins) || void 0 === Zz ? void 0 : Zz.call(Rz, Mz, lz, iz, Hz),
            ...Oz.plugins
          }
        } catch (Xz) {
          this.xZ(Xz)
        }
        const Kz = [Oz, ...Object.values(pz)];
        this.owners = Kz, this.tickers = Kz.filter((zz => void 0 !== zz.sd)), this.renderers = Kz.filter((zz => void 0 !== zz.onAfterRender)), this.receivers = Kz.filter((zz => void 0 !== zz.onReceivedMessageFromServer)), this.writeAltVeto(Kz), this.writeHooks(Kz), this.writePublicLobby(Mz), this.writeLocalDbId(null !== (uz = null === (bz = this.session) || void 0 === bz ? void 0 : bz.playerDbId) && void 0 !== uz ? uz : null), this.boundId = zz, this.sessionLive = !0, this.generation++, null !== this.pendingZoom && this.setCameraZoom(this.pendingZoom), this.highlightOwed ||= null !== this.highlight, this.writeOwedHighlight(), this.round(Kz, (zz => {
          var uz;
          null === (uz = zz.onCreate) || void 0 === uz || uz.call(zz, this.clientApi)
        }));
        const wz = this.generation;
        setTimeout((() => {
          wz === this.generation && !0 === this.tables.getClientOption("creative") && HE(this.tables)
        }), 0)
      }
      chunkSlot(zz, uz, bz, Ez, nz, iz) {
        this.chunks.apply(zz, uz, bz, Ez, nz, iz)
      }
      entityAdded(zz) {
        var uz;
        this.entityInfo.stale(zz), null === (uz = this.options.replayEntities) || void 0 === uz || uz.entityAdded(zz)
      }
      entityInfoChanged(zz) {
        var uz;
        this.entityInfo.stale(zz), null === (uz = this.options.replayEntities) || void 0 === uz || uz.entityInfoChanged(zz)
      }
      afterPrescan() {
        this.items.refresh(), this.entityInfo.refresh(), this.api.rereadDirectory(), this.chunks.refresh(), this.live.refresh()
      }
      tickEnd() {
        if (this.ticks++, this.tickers.length > 0) {
          const zz = performance.now();
          this.round(this.tickers, mE), (0, uE.b)(performance.now() - zz)
        }
      }
      afterWalk(zz) {
        this.ackEventOverflow(), this.clientApi.flushOwed(), this.writeOwedHighlight();
        const uz = this.options.replayEntities;
        uz && this.guard((() => {
          this.entityInfoWatch.want(Sb, uz.wantsWatch), uz.flush(this.entityInfoWatch.on)
        }));
        const bz = (0, uE.j)(zz, Zz.z.frameMs(this.api.apiView, 0));
        if (null !== bz) {
          const zz = this.renderFrame;
          this.guard((() => {
            (0, jb.c)().turnDamageIndicators(zz.cameraHeading)
          })), this.guard((() => {
            this.clientApi.slideRoute(bz)
          })), this.round(this.renderers, (uz => {
            uz.onAfterRender(bz, zz)
          }))
        }
        this.writeFreeCam();
        try {
          this.scriptedCamera.afterFrame(null !== bz)
        } catch (nz) {
          this.xZ(nz)
        }
        this.showZoom(), this.items.flush(this.xZ), this.writePromptWatch(), this.writeCustomButtons();
        const Ez = this.ticks;
        this.ticks = 0, (0, uE.g)(Ez, zz, bz, this.xZ)
      }
      entityRemoved(zz) {
        this.live.despawned(zz), this.entityInfo.removed(zz)
      }
      ackEventOverflow() {
        const zz = this.api.apiView,
          uz = Zz.z.eventOverflowGen(zz, 0),
          bz = uz - this.overflowGen >>> 0;
        if (0 === bz && !this.resyncOwed) return;
        this.overflowGen = uz;
        const Ez = Zz.z.eventOverflowMask(zz, 0),
          nz = this.cmd;
        0 === Ez || null === nz || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, Zz.ye)(nz, 0, Ez);
        const iz = this.options.onEventOverflow;
        0 !== bz && iz && this.guard((() => {
          iz(Ez, bz)
        }))
      }
      gameCall(zz, uz, bz, Ez, nz, iz, lz, Mz, tz) {
        if (zz === Zz.nc.Director) try {
          return this.scriptedCamera.call(uz, bz, Ez, nz, iz, lz)
        } catch (Hz) {
          return this.xZ(Hz), Zz.tb.None
        }
        if (!this.sessionLive || void 0 !== this.fault) return zz === Zz.nc.AltVeto ? Zz.l.Allow : 0;
        try {
          return this.callGames(zz, uz, bz, Ez, nz, iz, lz, Mz)
        } catch (Hz) {
          throw (0, Fz.h)(Hz) && (this.fault = Hz), Hz
        }
      }
      takeFault() {
        const zz = this.fault;
        return this.fault = void 0, zz
      }
      callGames(zz, uz, bz, Ez, nz, iz, lz, Mz) {
        this.api.rereadDirectory(), this.chunks.touch(), this.items.refresh(), this.live.refresh(), this.entityInfo.inCoreCall();
        const {
          tables: tz
        } = this.options, Hz = String(this.boundId);
        switch (zz) {
          case Zz.nc.AltVeto:
          case Zz.nc.AltAction: {
            const Mz = 0 !== lz,
              [Oz, pz, dz] = Mz ? [uz, bz, Ez] : [void 0, void 0, void 0],
              Fz = Mz ? tz.nameOfId(nz) : "Air",
              Rz = VE(iz);
            if (zz === Zz.nc.AltAction) return this.first((zz => {
              var uz;
              return null === (uz = zz.onPlayerAltAction) || void 0 === uz ? void 0 : uz.call(zz, Hz, Oz, pz, dz, Fz, Rz)
            })), 0;
            const Kz = this.first((zz => {
              var uz;
              return null === (uz = zz.onPlayerAttemptAltAction) || void 0 === uz ? void 0 : uz.call(zz, Hz, Oz, pz, dz, Fz, Rz)
            }));
            return "preventAction" === Kz ? Zz.l.Prevent : "preventPlacement" === Kz ? Zz.l.PreventPlacement : Zz.l.Allow
          }
          case Zz.nc.Click: {
            const zz = Mz,
              Oz = 0 !== (zz & Zz.cb.Alt),
              pz = 0 !== (zz & Zz.cb.HasPos),
              dz = pz ? tz.nameOfId(nz) : "Air",
              [Fz, Rz, Kz] = pz ? [uz, bz, Ez] : [null, null, null],
              wz = VE(iz),
              Xz = 0 !== (zz & Zz.cb.Up),
              fz = VE(lz);
            if (0 === (zz & Zz.cb.AttackOnly) && this.first((zz => {
                var uz, bz;
                return Xz ? null === (uz = zz.onPlayerClickUp) || void 0 === uz ? void 0 : uz.call(zz, Hz, Oz, Fz, Rz, Kz, dz, wz) : null === (bz = zz.onPlayerClick) || void 0 === bz ? void 0 : bz.call(zz, Hz, Oz, Fz, Rz, Kz, dz, wz)
              })), !Xz && !Oz && null !== fz) {
              const zz = this.clientApi.getPositionView(fz),
                uz = zz ? [zz[0], zz[1], zz[2]] : [0, 0, 0];
              this.first((zz => {
                var bz;
                return null === (bz = zz.onPlayerAttackEntity) || void 0 === bz ? void 0 : bz.call(zz, Hz, fz, uz)
              }))
            }
            return 0
          }
          case Zz.nc.ChangeBlock: {
            const zz = tz.nameOfId(nz),
              lz = tz.nameOfId(iz);
            return this.first((nz => {
              var iz;
              return null === (iz = nz.onPlayerChangeBlock) || void 0 === iz ? void 0 : iz.call(nz, Hz, uz, bz, Ez, zz, lz)
            })), 0
          }
          case Zz.nc.DropItem: {
            const zz = tz.nameOfId(uz);
            return this.first((uz => {
              var nz;
              return null === (nz = uz.onPlayerDropItem) || void 0 === nz ? void 0 : nz.call(uz, Hz, zz, bz, Ez)
            })), 0
          }
          default:
            return this.onError(new Error(`Unknown game call kind ${zz}`)), 0
        }
      }
      changeBlockFail(zz, uz, bz, Ez, nz, iz, lz) {
        const Mz = nz === Zz._c ? null : AE.decode(this.api.eventBytes(iz, Math.min(nz, lz)));
        this.failures.push({
          nl: [zz, uz, bz],
          il: Ez,
          Ml: Mz
        })
      }
      changeBlockFailEnd() {
        const zz = this.failures;
        this.failures = [], this.sessionLive && this.round(this.owners, (uz => {
          var bz;
          null === (bz = uz.onChangeBlockFail) || void 0 === bz || bz.call(uz, zz)
        })), this.sK("EditBoard", {
          pos: null
        }), this.sK("EditCodeBlock", {
          pos: null,
          canChangePos: null
        })
      }
      inventoryEvent(zz, uz, bz, Ez, nz, iz) {
        zz === Zz.Cc.ChestOpened ? this.items.chestOpened(bz, Ez, nz) : zz !== Zz.Cc.Synced && zz !== Zz.Cc.ChestClosed && zz !== Zz.Cc.ChestRefreshed || this.items.touch(), this.guard((() => {
          ! function(zz, uz, bz, Ez) {
            switch (zz) {
              case Zz.Cc.Synced:
                lz.k.sK("syncedInvenFromServer");
                break;
              case Zz.Cc.ChestOpened:
              case Zz.Cc.ChestClosed:
                lz.k.sK("chestToggleFromServer", zz === Zz.Cc.ChestOpened, !0);
                break;
              case Zz.Cc.ChestRefreshed:
                lz.k.sK("chestRefreshedFromServer");
                break;
              case Zz.Cc.EnchantingTable:
                lz.k.sK("enchantingTable", {
                  hO: Ez,
                  position: bz
                });
                break;
              case Zz.Cc.HotbarRequest:
                lz.k.sK("setSelectedInventorySlotI", uz, !0);
                break;
              case Zz.Cc.Scrolled:
                lz.k.sK("ScrollInventorySlot", uz);
                break;
              case Zz.Cc.NumberKey:
                lz.k.sK("numkeyPressed", uz + 1);
                break;
              case Zz.Cc.DropRequested:
                lz.k.sK("DropInvenItem", 0 !== uz);
                break;
              default:
                throw new Fz.b(`InventoryEvent of no kind: what ${zz}`)
            }
          }(zz, uz, [bz, Ez, nz], iz)
        }))
      }
      heldItemChanged() {
        this.items.touch()
      }
      shotDamage(zz, uz, bz, Ez) {
        this.sK("shotPlayer", {
          playerId: String(zz),
          damage: uz,
          wasCrit: 0 !== Ez,
          distance: bz
        })
      }
      localHurt(zz, uz) {
        this.sK("closeShopOnDamaged", null), this.guard((() => {
          lz.k.sK("damagedByOtherPlayer", {
            nE: null,
            direction: Number.isNaN(uz) ? null : uz,
            mn: zz
          })
        }))
      }
      attackHit(zz, uz, bz, Ez, nz) {
        this.guard((() => {
          lz.k.sK("yourAttackHit", {
            ib: Ez,
            screenPos: this.renderFrame.projectDirectionToScreenPos([zz, uz, bz]),
            hitSelf: nz
          })
        }))
      }
      physicsType(zz) {
        this.sK("PlayerPhysicsTypeUpdate", zz)
      }
      vehicleEffect(zz, uz, bz, Ez, nz) {
        this.guard((() => {
          zz === dz.td.UPDATE ? (0, Pz.k)(uz, {
            icon: bz,
            level: Ez,
            displayName: null,
            durationMs: nz
          }) : Lz.e.remove(uz)
        }))
      }
      zoomChanged(zz) {
        this.zoom = zz, this.zoomUnshown = !0
      }
      zoomDisabled() {
        this.sK("showBottomMessage", {
          message: "Zoom is disabled",
          timeoutLength: 2e3,
          type: "Error"
        })
      }
      showZoom() {
        const zz = this.scriptedCamera.holdsView();
        !this.zoomUnshown || zz && this.zoomHeld || (this.zoomUnshown = !1, this.sK("cameraZoomSet", this.zoom)), this.zoomHeld = zz
      }
      gunHit(zz) {
        this.guard((() => {
          const {
            nE: uz,
            iE: bz
          } = (0, RE.d)(KE.t, zz);
          lz.k.sK("damagedByOtherPlayer", {
            nE: uz,
            direction: bz
          })
        }))
      }
      uiEvent(zz, uz, bz, Ez, nz, iz, lz, Mz) {
        this.guard((() => {
          Ib(zz, uz, [bz, Ez, nz], iz, this.items, this.options.tables, (() => AE.decode(this.api.eventBytes(lz, Mz))))
        }))
      }
      writeAltVeto(zz) {
        const uz = this.cmd;
        if (!uz) return;
        let bz;
        try {
          bz = function(zz, uz) {
            const bz = new Set;
            let Ez = !1;
            for (const nz of zz)
              if (nz.onPlayerAttemptAltAction) {
                if (Ez = !0, !nz.altVetoBlocks) return {
                  mode: Zz.ie.All,
                  roots: []
                };
                for (const zz of nz.altVetoBlocks) bz.add(uz.getMetaInfo(zz).rootId)
              } return Ez ? bz.size > Zz.Oc ? {
              mode: Zz.ie.All,
              roots: []
            } : {
              mode: Zz.ie.Filter,
              roots: [...bz]
            } : {
              mode: Zz.ie.Off,
              roots: []
            }
          }(zz, this.options.tables)
        } catch (nz) {
          this.onError(nz), bz = {
            mode: Zz.ie.All,
            roots: []
          }
        }
        if (bz.mode === Zz.ie.Off && !this.vetoSet) return;
        const Ez = new Uint8Array(new Uint32Array(bz.roots).buffer);
        (0, Zz.Of)(uz, 0, bz.mode, bz.roots.length, Ez) ? this.vetoSet = bz.mode !== Zz.ie.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
      }
      endGameGrants() {
        this.freeCam.clearGame(), this.writeFreeCam()
      }
      writeFreeCam() {
        this.stopped() || this.freeCam.write(this.cmd)
      }
      writeHooks(zz) {
        const uz = this.cmd;
        if (!uz) return;
        const bz = function(zz) {
          let uz = 0;
          for (const bz of zz) bz.onPlayerAltAction && (uz |= 1 << Zz.nc.AltAction), (bz.onPlayerClick || bz.onPlayerClickUp || bz.onPlayerAttackEntity) && (uz |= 1 << Zz.nc.Click), bz.onPlayerChangeBlock && (uz |= 1 << Zz.nc.ChangeBlock), bz.onPlayerDropItem && (uz |= 1 << Zz.nc.DropItem);
          return uz
        }(zz);
        (0 !== bz || this.hooksSet) && ((0, Zz.Xf)(uz, 0, bz) ? this.hooksSet = 0 !== bz : this.onError(new Error("SetHooks didn't fit the command ring")))
      }
      writeCustomButtons() {
        const zz = this.cmd;
        zz && !this.stopped() && this.customButtons.write(zz)
      }
      writePromptWatch() {
        const zz = this.cmd,
          uz = this.promptWatch;
        uz !== this.promptWatchSent && zz && !this.stopped() && (0, Zz.rg)(zz, 0, GE[uz]) && (this.promptWatchSent = uz)
      }
      writePublicLobby(zz) {
        const uz = this.cmd;
        uz && zz !== this.writtenPublicLobby && ((0, Zz.hg)(uz, 0, zz ? 1 : 0) ? this.writtenPublicLobby = zz : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
      }
      writeLocalDbId(zz) {
        const uz = this.cmd;
        uz && ((0, Zz.Yf)(uz, 0, null === zz ? 0 : 1, null === zz ? LE : TE.encode(zz)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
      }
      first(zz) {
        const uz = this.generation;
        for (const Ez of this.owners) {
          if (uz !== this.generation) break;
          try {
            const uz = zz(Ez);
            if (void 0 !== uz) return uz
          } catch (bz) {
            this.xZ(bz)
          }
        }
      }
      sK(zz, uz) {
        this.guard((() => {
          lz.k.sK(zz, uz)
        }))
      }
      dropGameCamera() {
        try {
          this.scriptedCamera.reset()
        } catch (zz) {
          this.xZ(zz)
        }
      }
      restartGameCamera() {
        try {
          this.scriptedCamera.restart()
        } catch (zz) {
          this.xZ(zz)
        }
      }
      endSession() {
        if (!this.sessionLive) return;
        this.sessionLive = !1;
        const zz = this.owners;
        let uz;
        if (this.owners = this.tickers = this.renderers = this.receivers = [], this.generation++, !this.stopped()) try {
          this.writeAltVeto([]), this.writeHooks([]), this.writePublicLobby(!1), this.writeLocalDbId(null)
        } catch (Ez) {
          uz = Ez
        }
        try {
          this.entityInfo.sessionEnded()
        } catch (Ez) {
          uz ??= Ez
        }
        this.round(zz, qE, !0);
        try {
          this.particles.sessionEnded() || this.onError(new Error("ParticleStopAll didn't fit the command ring"))
        } catch (Ez) {
          uz ??= Ez
        }
        try {
          this.clientApi.disposeGameOutput()
        } catch (Ez) {
          uz ??= Ez
        }
        const bz = this.options.onSessionEnd;
        if (bz) try {
          bz()
        } catch (Ez) {
          this.onError(Ez)
        }
        void 0 !== uz && this.xZ(uz)
      }
      round(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Ez = this.generation;
        for (const iz of zz) {
          if (Ez !== this.generation) break;
          try {
            uz(iz)
          } catch (nz) {
            bz ? this.onError(nz) : this.xZ(nz)
          }
        }
      }
      guard(zz) {
        try {
          zz()
        } catch (uz) {
          this.xZ(uz)
        }
      }
    }

    function VE(zz) {
      return zz === Zz.ad ? null : String(zz)
    }

    function mE(zz) {
      zz.sd(dz.od)
    }

    function qE(zz) {
      var uz;
      null === (uz = zz.onClose) || void 0 === uz || uz.call(zz)
    }

    function hE(zz, uz) {
      zz.watch((() => {
        const bz = function(zz) {
          let uz = 0;
          const bz = Math.min(bE, zz.length);
          for (let nz = 0; nz < bz; nz++) {
            var Ez;
            const bz = null === (Ez = zz.slot(nz)) || void 0 === Ez ? void 0 : Ez.typeObj,
              iz = bz ? (0, zE.gunTypeOf)(bz.id) : void 0;
            void 0 !== iz && (uz |= 1 << fu[iz])
          }
          return uz
        }(zz);
        0 !== bz && (uz.preload(bz), uz.preload(1 << su))
      }))
    }
    var UE = bz(4616),
      cE = bz(36191);

    function gE(zz) {
      const uz = new UE.Howl({
          ...(0, cE.e)(zz),
          pool: 15,
          preload: !1
        }),
        bz = uz.load.bind(uz);
      return uz.load = () => (uz._preload = !0, bz()), uz
    }

    function SE(zz, uz, bz) {
      const Ez = zz.listener;
      if (Ez.positionX) yE(Ez.positionX, uz, bz, 0), yE(Ez.positionY, uz, bz, 1), yE(Ez.positionZ, uz, bz, 2), yE(Ez.forwardX, uz, bz, 3), yE(Ez.forwardY, uz, bz, 4), yE(Ez.forwardZ, uz, bz, 5), yE(Ez.upX, uz, bz, 6), yE(Ez.upY, uz, bz, 7), yE(Ez.upZ, uz, bz, 8);
      else {
        let zz = !1;
        for (let Ez = 0; Ez < 9; Ez++) zz ||= uz[Ez] !== bz[Ez];
        zz && (Ez.setPosition(uz[0], uz[1], uz[2]), Ez.setOrientation(uz[3], uz[4], uz[5], uz[6], uz[7], uz[8]), bz.set(uz))
      }
    }

    function yE(zz, uz, bz, Ez) {
      uz[Ez] !== bz[Ez] && (zz.value = uz[Ez], bz[Ez] = uz[Ez])
    }
    class DE {
      constructor() {
        this.pose = new Float64Array(9), this.written = new Float64Array(9).fill(Number.NaN), this.watchedCtx = void 0
      }
      apply(zz) {
        this.pose.set(zz);
        const uz = UE.Howler.ctx;
        return !!uz && (uz !== this.watchedCtx && (this.watchedCtx = uz, this.written.fill(Number.NaN), uz.addEventListener("statechange", (() => {
          "running" === uz.state && SE(uz, this.pose, this.written)
        }))), "running" === uz.state && SE(uz, zz, this.written), !0)
      }
    }
    var QE = bz(36039),
      WE = bz(38560);
    let eE = null,
      jE = null;

    function IE() {
      return null === eE && (eE = document.createElement("div"), eE.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none", document.body.append(eE)), eE
    }

    function BE() {
      return jE ??= new WE.c(new QE.b(IE)), jE
    }

    function CE() {
      var zz;
      null === (zz = jE) || void 0 === zz || zz.clear(), YE(null)
    }

    function YE(zz) {
      Ez.e.get("scriptedCameraFacing") !== zz && Ez.e.set({
        scriptedCameraFacing: zz
      })
    }
    var kE = bz(9165),
      zn = bz(9125),
      un = bz(38584),
      bn = bz(39919),
      En = bz(3043);
    const nn = Object.entries(Zz.lc).reduce(((zz, uz) => {
      let [bz, Ez] = uz;
      return zz[Ez] = bz, zz
    }), []);

    function Mn(zz, uz) {
      var bz;
      return 0 !== ((null !== (bz = zz.itemFlags[uz]) && void 0 !== bz ? bz : 0) & Zz.Gc.Stackable)
    }
    const tn = /^(0|[1-9][0-9]*)$/,
      Hn = {
        displayName: (zz, uz) => (0, zE.displayNameOf)(uz),
        description: (zz, uz) => (0, zE.descriptionOf)(uz),
        type: (zz, uz) => (0, zE.itemTypeOf)(uz),
        clipSize: (zz, uz) => (0, zE.clipSizeOf)(uz),
        armourReduction: (zz, uz) => (0, zE.armourReductionOf)(uz),
        scopeType: (zz, uz) => (0, zE.scopeTypeOf)(uz),
        stackable: Mn,
        harvestType: (zz, uz) => nn[zz.blockHarvestTypes[uz]],
        harvestLevel: (zz, uz) => {
          const bz = zz.blockHarvestLevels[uz];
          return bz === Zz.Kc ? void 0 : bz
        },
        harvests: (zz, uz) => {
          var bz;
          const Ez = null !== (bz = zz.itemHarvests[uz]) && void 0 !== bz ? bz : 0;
          return 0 !== Ez ? nn[Ez] : void 0 === (0, zE.harvestsNullLevelOf)(uz) ? void 0 : null
        },
        level: (zz, uz) => {
          var bz, Ez;
          const nz = null !== (bz = zz.itemLevels[uz]) && void 0 !== bz ? bz : Zz.Kc;
          return nz !== Zz.Kc ? nz : null !== (Ez = (0, zE.harvestsNullLevelOf)(uz)) && void 0 !== Ez ? Ez : void 0
        }
      };

    function On(zz, uz, bz) {
      return dn(new Uint8Array(Math.floor(zz.length / uz)), zz, uz, bz)
    }

    function pn(zz, uz, bz) {
      return dn(new Uint16Array(Math.floor(zz.length / uz)), zz, uz, bz)
    }

    function dn(zz, uz, bz, Ez) {
      const nz = new DataView(uz.buffer, uz.byteOffset, uz.byteLength);
      for (let iz = 0; iz < zz.length; iz++) zz[iz] = Ez(nz, iz * bz);
      return zz
    }
    class Fn {
      constructor(zz, uz) {
        this.options = uz, this.metas = [], this.types = new Map, this.props = void 0, this.rootIdOf = zz => {
          const uz = this.idOf(zz);
          if (void 0 === uz) throw new Error(`No item is named ${zz}, an item's root`);
          return uz
        };
        const bz = uz => {
            const bz = uz();
            return new Uint8Array(zz.memory().buffer, zz.scratch(), bz).slice()
          },
          Ez = (new TextDecoder).decode(bz((() => zz.queries.itemNames()))).split("\n"),
          nz = bz((() => zz.queries.blockProps())),
          iz = bz((() => zz.queries.itemProps()));
        this.props = {
          blockFlags: On(nz, Zz.I.BYTES, Zz.I.flags),
          blockHarvestTypes: On(nz, Zz.I.BYTES, Zz.I.harvestType),
          blockHarvestLevels: On(nz, Zz.I.BYTES, Zz.I.harvestLevel),
          blockAttachedTops: pn(nz, Zz.I.BYTES, Zz.I.attachedTop),
          itemFlags: On(iz, Zz.Jc.BYTES, Zz.Jc.flags),
          itemHarvests: On(iz, Zz.Jc.BYTES, Zz.Jc.harvests),
          itemLevels: On(iz, Zz.Jc.BYTES, Zz.Jc.level)
        }, (0, En.m)(Object.freeze(Ez)), (0, bn.h)()
      }
      idOf(zz) {
        if ("number" === typeof zz) return void 0 === (0, En.g)(zz) ? void 0 : zz;
        const uz = (0, En.e)(zz);
        return void 0 === uz && tn.test(zz) ? void 0 === (0, En.g)(+zz) ? void 0 : +zz : uz
      }
      getMetaInfo(zz) {
        if (!zz || zz === kE.b) return kE.c;
        const uz = this.idOf(zz);
        if (void 0 === uz) throw new Error(`Item ${zz} not found in registry`);
        return this.metaOf(uz)
      }
      blockRootId(zz) {
        return 0 !== zz && void 0 !== (0, En.g)(zz) ? this.metaOf(zz).rootId : zz
      }
      metaOf(zz) {
        return this.metas[zz] ??= (0, zn.j)((0, En.g)(zz), zz, this.rootIdOf, (0, zE.rootMetaDescOf)(zz))
      }
      getItemId(zz) {
        if (!zz || zz === kE.b) return 0;
        const uz = this.idOf(zz);
        if (void 0 === uz) throw new Error(`Invalid block name. You sent ${zz}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
        return uz
      }
      getItemName(zz) {
        if (!zz || zz === kE.b) return kE.b;
        const uz = this.idOf(zz);
        if (void 0 === uz) throw new Error(`Item ${zz} not found in registry`);
        return (0, En.g)(uz)
      }
      blockNameToBlockId(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (zz === kE.b) return 0;
        let bz = this.idOf(zz);
        if (void 0 === bz || !this.isBlockId(bz)) {
          const uz = zz.indexOf("|"),
            Ez = uz > 0 ? (0, En.e)(zz.slice(0, uz)) : void 0;
          bz = void 0 !== Ez && this.isBlockId(Ez) && (0, zE.rootMetaDescOf)(Ez) === zz ? Ez : void 0
        }
        if (void 0 !== bz) return bz;
        if (!uz) throw new Error(`Invalid block name. You sent ${zz}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
        return null
      }
      isBlockId(zz) {
        return zz > 0 && zz < this.props.blockFlags.length
      }
      nameOfId(zz) {
        return 0 !== zz && (0, En.g)(zz) || kE.b
      }
      itemType(zz) {
        const uz = zz ? this.idOf(zz) : void 0;
        if (!uz) return null;
        let bz = this.types.get(uz);
        return void 0 === bz && (bz = Object.freeze({
          id: uz,
          name: (0, En.g)(uz),
          meta: this.getMetaInfo(uz),
          stackable: Mn(this.props, uz),
          type: (0, zE.itemTypeNameOf)(uz),
          clipSize: (0, zE.clipSizeOf)(uz),
          scopeType: (0, zE.scopeTypeOf)(uz),
          showsAimingUi: (0, zE.showsAimingUi)(uz)
        }), this.types.set(uz, bz)), bz
      }
      getItemStat(zz, uz) {
        if (un.b.has(uz)) {
          const bz = "minChargeStateToUse" === uz ? this.getMetaInfo(zz).rootName : this.getItemName(zz),
            Ez = this.options.get((0, un.f)(bz, uz));
          if (null !== Ez && void 0 !== Ez) return Ez
        }
        return this.defaultStat(zz, uz, this.statOf(uz))
      }
      getDisplayName(zz) {
        return this.getItemStat(zz, "displayName")
      }
      getDefaultItemStat(zz, uz) {
        return this.defaultStat(zz, uz, this.statOf(uz))
      }
      statOf(zz) {
        const uz = Hn[zz];
        return void 0 === uz && function(zz, uz) {
          throw new Error(`ClientApi.${zz} is not available yet in the wasm client (${uz})`)
        }(`getItemStat("${zz}")`, `a table of the stat: the wasm client answers ${Object.keys(Hn).join(", ")}`), uz
      }
      defaultStat(zz, uz, bz) {
        const Ez = this.idOf(zz),
          nz = void 0 === Ez ? void 0 : bz(this.props, Ez);
        return null !== nz && void 0 !== nz || "displayName" !== uz ? nz : this.getItemName(zz)
      }
      getClientOption(zz) {
        return this.options.get(zz)
      }
      getGunStats(zz) {
        return this.getClientOption(`${zz}GunStats`)
      }
      watchClientOption(zz, uz) {
        return this.options.subscribe(zz, uz)
      }
      isSolidBlockId(zz) {
        var uz;
        return 0 !== ((null !== (uz = this.props.blockFlags[zz]) && void 0 !== uz ? uz : 0) & Zz.H.Solid)
      }
      isStackableId(zz) {
        return Mn(this.props, zz)
      }
      isFluidBlockId(zz) {
        var uz;
        return 0 !== ((null !== (uz = this.props.blockFlags[zz]) && void 0 !== uz ? uz : 0) & Zz.H.Fluid)
      }
      canPlaceOverBlockId(zz) {
        var uz;
        return 0 !== ((null !== (uz = this.props.blockFlags[zz]) && void 0 !== uz ? uz : 0) & Zz.H.PlaceOver)
      }
      attachedTopOf(zz) {
        var uz;
        return null !== (uz = this.props.blockAttachedTops[zz]) && void 0 !== uz ? uz : 0
      }
      isDroplessBlockId(zz) {
        return (0, zE.dropsNothing)(zz)
      }
    }

    function Zn(zz, uz) {
      const bz = new Map;
      return (Ez, nz) => {
        const iz = uz.idOf(Ez),
          lz = void 0 === iz ? null : (Ez => {
            let nz = bz.get(Ez);
            if (void 0 === nz) {
              const iz = zz.queries.salvageRecipe(Ez),
                lz = new DataView(zz.memory().buffer, zz.scratch(), iz),
                Mz = [];
              for (let zz = 0; zz + Zz.Zd.BYTES <= iz; zz += Zz.Zd.BYTES) Mz.push(Object.freeze({
                item: uz.nameOfId(Zz.Zd.item(lz, zz)),
                amt: Zz.Zd.amount(lz, zz)
              }));
              nz = 0 === Mz.length ? null : Object.freeze(Mz), bz.set(Ez, nz)
            }
            return nz
          })(iz);
        if (null === lz || void 0 === nz) return lz;
        const Mz = nz <= 0 ? 1 : nz;
        return lz.map((zz => {
          let {
            item: uz,
            amt: bz
          } = zz;
          return {
            item: uz,
            amt: bz * Mz
          }
        }))
      }
    }
    var Rn = bz(40116),
      Kn = bz(36386),
      wn = bz(36369),
      Xn = bz(36422),
      fn = bz(35970),
      sn = bz(39848),
      rn = bz(41809);
    const Nn = -1,
      vn = new Uint8Array(0),
      xn = new TextEncoder;

    function Jn(zz) {
      if (null === zz) return null;
      const uz = xn.encode(zz);
      return uz.byteLength < dz.yc ? uz : uz.subarray(0, dz.yc - 1)
    }
    class An {
      constructor(zz) {
        this.deps = zz, this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = Nn, this.keyframesSettled = !1, this.reloadFrom = Nn
      }
      reloadKeyframes() {
        var zz, uz;
        this.keyframesVersion = Nn, this.reloadFrom = null !== (zz = null === (uz = this.view()) || void 0 === uz ? void 0 : uz.version) && void 0 !== zz ? zz : Nn
      }
      setPlayback(zz) {
        const uz = 1 === this.deps.core.QEz(zz);
        return uz && (this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = Nn, this.reloadFrom = Nn), uz
      }
      async open(zz) {
        const uz = await this.deps.replay.open(zz);
        return "opening" === uz && (this.reloadKeyframes(), this.deps.recorder.prefetch()), uz
      }
      play() {
        this.deps.replay.play()
      }
      pause() {
        this.deps.replay.pause()
      }
      seek(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.deps.replay.seek(Math.max(0, Math.floor(zz)), uz)
      }
      setSpeed(zz) {
        this.deps.replay.setSpeed(zz)
      }
      setCameraMode(zz) {
        this.deps.replay.setCameraMode(rn.c.indexOf(zz))
      }
      view() {
        var zz;
        const uz = Zz.z.replayViewPtr(this.deps.apiView(), 0);
        if (0 === uz) return this.lastView = null, null;
        const bz = new DataView(this.deps.buffer(), uz, Zz.Pd.BYTES),
          Ez = Zz.Pd.version(bz, 0),
          nz = this.lastView;
        if (null !== nz && nz.version === Ez) return nz;
        const iz = Zz.Pd.markIn(bz, 0),
          lz = {
            version: Ez,
            state: Zz.Pd.state(bz, 0),
            cameraMode: null !== (zz = rn.c[Zz.Pd.cameraMode(bz, 0)]) && void 0 !== zz ? zz : "recording",
            sd: Zz.Pd.sd(bz, 0),
            totalTicks: Zz.Pd.totalTicks(bz, 0),
            speed: Zz.Pd.speed(bz, 0),
            mark: iz === Zz.Nd ? null : {
              inTick: iz,
              outTick: Zz.Pd.markOut(bz, 0)
            },
            editVersion: Zz.Pd.editVersion(bz, 0)
          };
        return this.lastView = lz, lz
      }
      keyframes() {
        const zz = this.view();
        if (null === zz) return [];
        zz.version !== this.reloadFrom && (this.reloadFrom = Nn);
        const uz = this.reloadFrom === Nn && zz.state !== dz.dd.Cropping && zz.state !== dz.dd.None,
          bz = uz ? zz.editVersion : zz.version;
        if (bz === this.keyframesVersion && uz === this.keyframesSettled) return this.lastKeyframes;
        const {
          core: Ez
        } = this.deps, nz = Ez.WEz(), iz = Ez.xK(), lz = [];
        if (0 !== iz && nz > 0) {
          const zz = new DataView(this.deps.buffer(), iz, nz * dz.nc);
          for (let uz = 0; uz < nz; uz++) {
            const bz = uz * dz.nc,
              Ez = uz => zz.getFloat64(bz + uz, !0);
            lz.push({
              sd: zz.getUint32(bz + dz.wc, !0),
              position: [Ez(dz.tc), Ez(dz.tc + 8), Ez(dz.tc + 16)],
              direction: [Ez(dz.qc), Ez(dz.qc + 8), Ez(dz.qc + 16)],
              easing: [Ez(dz.rc), Ez(dz.rc + 8), Ez(dz.rc + 16), Ez(dz.rc + 24)]
            })
          }
        }
        return this.keyframesVersion = bz, this.keyframesSettled = uz, this.lastKeyframes = lz, lz
      }
      addKeyframe() {
        const zz = this.deps.apiView(),
          uz = [Zz.z.eye(zz, 0, 0), Zz.z.eye(zz, 0, 1), Zz.z.eye(zz, 0, 2)];
        return this.deps.replay.addKeyframe(uz, function(zz, uz) {
          const bz = Math.cos(uz);
          return [bz * Math.sin(zz), -Math.sin(uz), bz * Math.cos(zz)]
        }(Zz.z.heading(zz, 0), Zz.z.pitch(zz, 0)))
      }
      setKeyframe(zz) {
        return this.deps.replay.setKeyframe(zz.sd, Float64Array.from([...zz.position, ...zz.direction, ...zz.easing]))
      }
      moveKeyframe(zz, uz) {
        return this.deps.replay.moveKeyframe(zz, uz)
      }
      deleteKeyframes(zz, uz) {
        return this.deps.replay.deleteKeyframes(zz, uz)
      }
      setMark(zz) {
        var uz, bz;
        return this.deps.replay.setMark(null !== (uz = null === zz || void 0 === zz ? void 0 : zz.inTick) && void 0 !== uz ? uz : -1, null !== (bz = null === zz || void 0 === zz ? void 0 : zz.outTick) && void 0 !== bz ? bz : -1)
      }
      crop(zz, uz) {
        const bz = this.deps.replay.crop(zz, uz);
        return bz && this.reloadKeyframes(), bz
      }
      save(zz) {
        return this.deps.replay.askSave(), this.deps.recorder.saveEdited(zz)
      }
      recorderControl(zz) {
        this.deps.recorder.control(zz)
      }
      recorderPrefs(zz, uz) {
        this.deps.recorder.prefs(zz, uz)
      }
      recorderOption(zz, uz) {
        const bz = this.deps.cmd();
        return null !== bz && (0, Zz.Bf)(bz, 0, zz, null === uz ? vn : xn.encode(uz))
      }
      recordFlyingText(zz, uz, bz, Ez) {
        const nz = this.deps.cmd(),
          iz = Math.max(0, Math.min(4294967295, Math.round(Ez)));
        return null !== nz && (0, Zz.uf)(nz, 0, uz, bz, iz, xn.encode(zz))
      }
      recordPlayerKilled(zz, uz, bz, Ez) {
        const nz = this.deps.cmd();
        return null !== nz && (0, Zz.Ef)(nz, 0, zz, uz, Math.max(0, bz), xn.encode(Ez))
      }
      recordKillfeed(zz, uz, bz) {
        var Ez, nz;
        const iz = this.deps.cmd(),
          lz = function(zz) {
            const uz = zz.reduce(((zz, uz) => {
                var bz;
                return zz + Qb.fb + (null !== (bz = null === uz || void 0 === uz ? void 0 : uz.byteLength) && void 0 !== bz ? bz : 0)
              }), 0),
              bz = new Uint8Array(uz),
              Ez = new DataView(bz.buffer);
            let nz = 0;
            for (const lz of zz) {
              var iz;
              Ez.setUint16(nz, null !== (iz = null === lz || void 0 === lz ? void 0 : lz.byteLength) && void 0 !== iz ? iz : dz.yc, !0), nz += Qb.fb, null !== lz && (bz.set(lz, nz), nz += lz.byteLength)
            }
            return bz
          }([Jn(zz.name), Jn(zz.colour), Jn(uz.name), Jn(uz.colour), Jn(bz)]);
        return null !== iz && (0, Zz.xf)(iz, 0, null !== (Ez = zz.id) && void 0 !== Ez ? Ez : Zz.bd, null !== (nz = uz.id) && void 0 !== nz ? nz : Zz.bd, lz)
      }
      recorderSession(zz, uz) {
        this.deps.recorder.session({
          session: uz,
          lobbyType: zz.lobbyType,
          game: zz.gameNameWithVariation,
          lobby: zz.lobbyName
        })
      }
      recorderClose() {
        this.deps.core.eEz()
      }
      filePartDone(zz, uz) {
        this.deps.recorder.filePartDone(zz, uz)
      }
      fileDone(zz) {
        this.deps.recorder.fileDone(zz)
      }
    }
    const Tn = -2147483648;
    class Ln {
      constructor(zz) {
        var uz;
        this.deps = zz, this.state = {
          recording: !1,
          clipping: !1,
          hasClipBuffer: !1,
          seconds: 0
        }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (uz = zz.now) && void 0 !== uz ? uz : () => performance.now()
      }
      get current() {
        return this.state
      }
      get live() {
        var zz, uz, bz;
        return null === (zz = null === (uz = (bz = this.deps).live) || void 0 === uz ? void 0 : uz.call(bz)) || void 0 === zz || zz
      }
      activated(zz) {
        var uz, bz;
        this.live && (this.viewerShown(!0 === (null === (uz = (bz = this.deps).viewerOpen) || void 0 === uz ? void 0 : uz.call(bz))), this.deps.client.recorderSession(zz, (0, rn.e)()))
      }
      closed() {
        this.deps.client.recorderClose()
      }
      toggleRecording() {
        var zz, uz;
        this.live && (this.state.recording || !0 !== (null === (zz = (uz = this.deps).viewerOpen) || void 0 === zz ? void 0 : zz.call(uz))) ? this.deps.client.recorderControl(dz.Pc.ToggleRecording) : this.deps.notify(Xn.d.closeViewerFirst)
      }
      saveClip() {
        this.live ? this.deps.client.recorderControl(dz.Pc.SaveClip) : this.deps.notify(Xn.d.clippingNotOn)
      }
      viewerShown(zz) {
        this.live && this.deps.client.recorderControl(zz ? dz.Pc.ViewerOpened : dz.Pc.ViewerClosed)
      }
      setPrefs(zz, uz) {
        this.live && this.deps.client.recorderPrefs(zz, uz)
      }
      setOption(zz, uz) {
        this.live && this.deps.client.recorderOption(zz, uz)
      }
      recordFlyingText(zz, uz, bz, Ez) {
        this.live && this.deps.client.recordFlyingText(zz, uz, bz, Ez)
      }
      recordPlayerKilled(zz, uz, bz, Ez) {
        this.live && this.deps.client.recordPlayerKilled(zz, uz, bz, Ez)
      }
      recordKillfeed(zz, uz, bz) {
        this.live && this.deps.client.recordKillfeed(zz, uz, bz)
      }
      sd() {
        let zz = this.state;
        if (this.clipTickPending && (this.clipTickPending = !1, zz = {
            ...zz,
            hasClipBuffer: !0
          }), null !== this.recordingSince) {
          const uz = Math.floor((this.now() - this.recordingSince) / 1e3);
          uz !== zz.seconds && (zz = {
            ...zz,
            seconds: uz
          })
        }
        this.set(zz)
      }
      onEvent(zz) {
        var uz, bz;
        const {
          notify: Ez
        } = this.deps, nz = Xn.d;
        switch (zz.what) {
          case dz.Mc.RecordingStarted:
            this.recordingSince = this.now(), this.set({
              ...this.state,
              recording: !0,
              seconds: 0
            }), Ez(nz.recordingStarted);
            break;
          case dz.Mc.RecordingStopped:
            this.stopRecording(), Ez(nz.recordingStopped), this.saveState(dz.Yc.Recording, "saving");
            break;
          case dz.Mc.RecordingDiscarded:
            this.stopRecording(), Ez(nz.recordingDiscarded);
            break;
          case dz.Mc.RecordingTurnedOff:
            this.stopRecording(), Ez(nz.recordingTurnedOff);
            break;
          case dz.Mc.LimitReached:
            Ez(nz.limitReached);
            break;
          case dz.Mc.ClipSaved:
            this.saveState(dz.Yc.Clip, "saving");
            break;
          case dz.Mc.ClipEmpty:
            Ez(nz.clipEmpty);
            break;
          case dz.Mc.ClippingNotOn:
            Ez(nz.clippingNotOn);
            break;
          case dz.Mc.Disallowed:
            Ez(nz.disallowed);
            break;
          case dz.Mc.ClippingOn:
            this.clipTickPending = !0, this.set({
              ...this.state,
              clipping: !0,
              hasClipBuffer: !1
            });
            break;
          case dz.Mc.ClippingOff:
            this.clipTickPending = !1, this.set({
              ...this.state,
              clipping: !1,
              hasClipBuffer: !1
            });
            break;
          case dz.Mc.ClipSettingsChanged:
            this.clipTickPending = this.state.clipping, this.set({
              ...this.state,
              hasClipBuffer: !1
            });
            break;
          case dz.Mc.SaveBusy:
            null === (uz = (bz = this.deps).onSaveState) || void 0 === uz || uz.call(bz, zz.kind, "busy"), Ez(nz.saveBusy);
            break;
          case dz.Mc.CloseViewerFirst:
            Ez(nz.closeViewerFirst)
        }
      }
      fileReady(zz, uz) {
        this.deps.download(uz), this.saveState(zz, "done"), this.deps.notify(zz === dz.Yc.Clip ? Xn.d.clipSaved : Xn.d.recordingSaved)
      }
      failed(zz) {
        this.saveState(zz, "failed"), this.deps.notify(zz === dz.Yc.Clip ? Xn.d.clipFailed : Xn.d.recordingFailed)
      }
      stopRecording() {
        this.recordingSince = null, this.set({
          ...this.state,
          recording: !1,
          seconds: 0
        })
      }
      saveState(zz, uz) {
        var bz, Ez;
        null === (bz = (Ez = this.deps).onSaveState) || void 0 === bz || bz.call(Ez, zz, uz)
      }
      set(zz) {
        zz !== this.state && (this.state = zz, this.deps.onState(zz))
      }
    }
    const Pn = new TextDecoder;

    function Gn(zz, uz, bz, Ez) {
      const nz = [];
      for (let iz = 0; iz < Ez; iz++) {
        if (uz + Qb.fb > bz) return null;
        const Ez = zz.getUint16(uz, !0);
        if (uz += Qb.fb, Ez !== dz.yc) {
          if (uz + Ez > bz) return null;
          nz.push(Pn.decode(new Uint8Array(zz.buffer, zz.byteOffset + uz, Ez))), uz += Ez
        } else nz.push(null)
      }
      return uz === bz ? nz : null
    }

    function an(zz, uz) {
      let bz = new DataView(new ArrayBuffer(0)),
        Ez = !0;
      const nz = {
        replayFailed: (uz, bz) => {
          zz.replayFailed({
            reason: uz,
            code: bz
          })
        },
        replayOption: (uz, nz, iz, lz) => {
          const Mz = function(zz, uz, bz, Ez) {
            switch (uz) {
              case dz.Zc.Cleared:
                return 0 === Ez ? null : void 0;
              case dz.Zc.Text:
                return Pn.decode(new Uint8Array(zz.buffer, zz.byteOffset + bz, Ez));
              case dz.Zc.Int:
                return Ez === Int32Array.BYTES_PER_ELEMENT ? zz.getInt32(bz, !0) : void 0;
              case dz.Zc.Double:
                return Ez === Float64Array.BYTES_PER_ELEMENT ? zz.getFloat64(bz, !0) : void 0;
              default:
                return
            }
          }(bz, nz, iz, lz);
          void 0 !== Mz ? zz.replayOption({
            key: uz,
            value: Mz
          }) : Ez = !1
        },
        replayUiEvent: (uz, nz, iz, lz, Mz, tz) => {
          const Hz = function(zz, uz, bz, Ez, nz, iz, lz) {
            const Mz = iz + lz;
            switch (uz) {
              case dz.$c.FlyingText: {
                const lz = Gn(zz, iz, Mz, 1);
                return null !== lz && null !== lz[0] ? {
                  what: uz,
                  zl: bz,
                  ki: Ez,
                  angle: nz,
                  contentJson: lz[0]
                } : null
              }
              case dz.$c.PlayerKilled: {
                const Ez = Gn(zz, iz, Mz, 3);
                return Ez ? {
                  what: uz,
                  killstreak: bz,
                  dead: Ez[0],
                  killer: Ez[1],
                  withItem: Ez[2]
                } : null
              }
              case dz.$c.Killfeed: {
                const bz = Gn(zz, iz, Mz, 7);
                return bz ? {
                  what: uz,
                  killerId: bz[0],
                  killerName: bz[1],
                  killerColour: bz[2],
                  victimId: bz[3],
                  victimName: bz[4],
                  victimColour: bz[5],
                  withItem: bz[6]
                } : null
              }
              default:
                return null
            }
          }(bz, uz, nz, iz, lz, Mz, tz);
          null !== Hz ? zz.replayUiEvent(Hz) : Ez = !1
        },
        replayFilePart: (bz, nz, iz, lz) => {
          const Mz = uz();
          iz + lz > Mz.byteLength ? Ez = !1 : zz.filePart(bz, nz, new Uint8Array(Mz, iz, lz).slice())
        },
        replayFileReady: (uz, bz, Ez, nz) => {
          zz.fileReady({
            save: uz,
            kind: bz,
            parts: Ez,
            bytes: nz
          })
        },
        recorderEvent: (uz, bz, Ez) => {
          zz.recorderEvent({
            what: uz,
            kind: bz,
            save: Ez
          })
        },
        replayOpened: (uz, Ez, nz) => {
          zz.replayOpened(Pn.decode(new Uint8Array(bz.buffer, bz.byteOffset + Ez, nz)))
        }
      };
      return (zz, uz, iz, lz) => !(zz < dz.V.ReplayFailed || zz > dz.V.RecorderEvent) && (bz = uz, Ez = !0, (0, Zz.oe)(zz, uz, iz, lz, nz) && Ez)
    }

    function Vn(zz) {
      let uz = null;
      const bz = an(zz, (() => {
        if (null === uz) throw new Error("a recorder event read outside recorderEventReader's call");
        return uz.buffer
      }));
      return (zz, Ez) => {
        uz = Ez;
        try {
          ! function(zz, uz) {
            const bz = zz.slice(),
              Ez = new DataView(bz.buffer);
            for (let nz = 0; nz < bz.byteLength;) {
              if (nz + dz.S > bz.byteLength) throw new Error(`the recorder module's events end mid-head at ${nz}`);
              const zz = Ez.getUint32(nz, !0),
                iz = 65535 & zz,
                lz = zz >>> 16,
                Mz = nz + dz.S;
              if (Mz + lz > bz.byteLength || !uz(iz, Ez, Mz, lz)) throw new Error(`the recorder module wrote a malformed event ${iz} (${lz} bytes) at ${nz}`);
              nz = Mz + (0, dz.ie)(lz)
            }
          }(zz, bz)
        } finally {
          uz = null
        }
      }
    }
    class mn {
      constructor(zz, uz) {
        this.acks = zz, this.handlers = uz, this.parts = new Map
      }
      onPart(zz, uz, bz) {
        let Ez = this.parts.get(zz);
        Ez || (Ez = [], this.parts.set(zz, Ez)), Ez[uz] = bz, this.acks.filePartDone(zz, uz)
      }
      onReady(zz) {
        var uz;
        const bz = null !== (uz = this.parts.get(zz.save)) && void 0 !== uz ? uz : [];
        this.parts.delete(zz.save);
        const Ez = function(zz, uz, bz) {
          if (zz.length !== uz) return null;
          let Ez = 0;
          for (let lz = 0; lz < uz; lz++) {
            if (void 0 === zz[lz]) return null;
            Ez += zz[lz].byteLength
          }
          if (Ez !== bz) return null;
          if (1 === uz) return zz[0];
          const nz = new Uint8Array(bz);
          let iz = 0;
          for (const lz of zz) nz.set(lz, iz), iz += lz.byteLength;
          return nz
        }(bz, zz.parts, zz.bytes);
        this.acks.fileDone(zz.save), null === Ez ? this.handlers.fileIncomplete(zz.save, zz.kind) : this.handlers.fileReady(zz.save, zz.kind, Ez)
      }
      onDiscarded(zz) {
        this.parts.delete(zz)
      }
    }

    function qn() {
      return bz.e(57).then((() => bz(41840)))
    }
    class hn {
      constructor(zz) {
        this.deps = zz, this.sink = void 0, this.recorder = void 0, this.recorderEvents = void 0, this.parts = void 0, this.viewerChunk = null, this.viewer = null;
        const {
          client: uz
        } = zz;
        this.recorder = new Ln({
          client: uz,
          live: () => {
            var zz;
            return !0 !== (null === (zz = this.viewer) || void 0 === zz ? void 0 : zz.inPlayback)
          },
          viewerOpen: zz.viewerOpen,
          notify: zz.notify,
          download: uz => {
            var bz;
            null === (bz = zz.download) || void 0 === bz || bz.call(zz, uz)
          },
          onState: zz.onRecorderState,
          onSaveState: zz.onSaveState
        }), this.parts = new mn(uz, {
          fileReady: (zz, uz, bz) => {
            var Ez;
            uz === dz.Yc.Edited ? null === (Ez = this.viewer) || void 0 === Ez || Ez.saveDone(bz) : this.recorder.fileReady(uz, bz)
          },
          fileIncomplete: (zz, uz) => {
            this.saveFailed(uz)
          }
        });
        const bz = {
          replayFailed: zz => {
            var uz;
            null === (uz = this.viewer) || void 0 === uz || uz.onFailed(zz)
          },
          replayOption: uz => {
            var bz;
            null === (bz = zz.onReplayOption) || void 0 === bz || bz.call(zz, uz)
          },
          replayUiEvent: uz => {
            var bz;
            null === (bz = zz.onReplayUiEvent) || void 0 === bz || bz.call(zz, uz)
          },
          filePart: (zz, uz, bz) => {
            this.parts.onPart(zz, uz, bz)
          },
          fileReady: zz => {
            this.parts.onReady(zz)
          },
          replayOpened: uz => {
            var bz;
            null === (bz = zz.onReplayOpened) || void 0 === bz || bz.call(zz, uz)
          },
          recorderEvent: zz => {
            var uz;
            switch (zz.what) {
              case dz.Mc.FileDiscarded:
                this.parts.onDiscarded(zz.save);
                break;
              case dz.Mc.SaveFailed:
                this.saveFailed(zz.kind);
                break;
              case dz.Mc.SaveBusy:
                if (null !== (uz = this.viewer) && void 0 !== uz && uz.savePending) {
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
        this.sink = function(zz, uz) {
          return {
            onReplayEvent: an(zz, uz)
          }
        }(bz, zz.buffer), this.recorderEvents = Vn(bz)
      }
      get currentViewer() {
        return this.viewer
      }
      loadViewer() {
        var zz;
        return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (zz = this.deps.loadViewer) && void 0 !== zz ? zz : qn)().catch((zz => {
          throw this.viewerChunk = null, zz
        })), this.viewerChunk.then((zz => (this.viewer ??= new zz.ReplayViewer({
          client: this.deps.client,
          setHoldDraws: this.deps.setHoldDraws,
          meshPending: this.deps.meshPending,
          notify: this.deps.notify,
          onChange: () => {
            var zz, uz;
            null === (zz = (uz = this.deps).onViewerChange) || void 0 === zz || zz.call(uz)
          }
        }), this.viewer))))
      }
      activated(zz) {
        this.recorder.activated(zz)
      }
      afterFrame(zz) {
        try {
          zz > 0 && this.recorder.sd()
        } finally {
          var uz;
          null === (uz = this.viewer) || void 0 === uz || uz.afterFrame()
        }
      }
      end() {
        var zz;
        null === (zz = this.viewer) || void 0 === zz || zz.end()
      }
      saveFailed(zz) {
        var uz;
        zz === dz.Yc.Edited ? null === (uz = this.viewer) || void 0 === uz || uz.saveFailed(!1) : this.recorder.failed(zz)
      }
    }
    var Un = bz(39779),
      cn = bz(39798),
      gn = bz(4567),
      Sn = bz(40198);
    class yn {
      constructor(zz) {
        this.deps = zz, this.analogue = [0, 0], this.keys = 0, this.unsent = !1
      }
      drag(zz, uz) {
        if (!this.deps.live() || 0 === zz && 0 === uz) return;
        const bz = (0, hz.p)(0, performance.now()),
          Ez = this.deps.dragScale();
        (0, Sn.h)((() => {
          (0, hz.r)(dz.pb.MouseDown, 0, 0, 0, bz), (0, hz.r)(dz.pb.MouseMove, 0, zz * Ez, uz * Ez, 0), (0, hz.r)(dz.pb.MouseUp, 0, 0, 0, bz)
        }))
      }
      move(zz) {
        var uz, bz;
        this.analogue[0] = null !== (uz = null === zz || void 0 === zz ? void 0 : zz.x) && void 0 !== uz ? uz : 0, this.analogue[1] = null !== (bz = null === zz || void 0 === zz ? void 0 : zz.y) && void 0 !== bz ? bz : 0, this.send()
      }
      holdVertical(zz, uz) {
        const bz = "freeCamUp" === zz ? Zz.fc.Up : Zz.fc.Down;
        this.keys = uz ? this.keys | bz : this.keys & ~bz, this.send()
      }
      flush() {
        this.unsent && this.send()
      }
      send() {
        const zz = this.deps.live() ? this.deps.cmd() : null;
        this.unsent = null !== zz && !(0, Zz.Ce)(zz, 0, this.analogue, this.keys)
      }
    }
    var Dn = bz(696),
      Qn = bz(301),
      Wn = bz(96),
      en = bz(8908);

    function jn() {
      const zz = Ez.e.get("clientEscMenuOptions"),
        uz = (0, Dn.n)(zz);
      return {
        mouse: (0, Wn.isMobile)() ? uz : zz.mouseSensitivity,
        touch: uz,
        fovPercent: zz.cameraFOV
      }
    }

    function In() {
      const zz = Ez.e.get("clientEscMenuOptions"),
        uz = Ez.e.get("isTouchScreen") ? (0, Dn.n)(zz) : zz.mouseSensitivity,
        bz = jn().mouse;
      return bz > 0 ? uz / bz : 1
    }

    function Bn(zz) {
      const uz = () => {
        zz.setSoundPrefs(Ez.e.get("soundVolume"), Ez.e.get("soundOnFromAd"))
      };
      let bz = null;
      const nz = () => {
        const {
          showFog: uz,
          enableLighting: nz,
          fogChunkDistance: iz,
          chunkFadeIn: lz
        } = Ez.e.get("clientEscMenuOptions"), Mz = {
          showFog: uz,
          lighting: nz,
          fogChunks: iz,
          chunkFade: lz
        };
        bz && (0, dz.Wd)(bz) === (0, dz.Wd)(Mz) && bz.fogChunks === iz || (bz = Mz, zz.setEnvPrefs(bz))
      };
      let iz = null;
      const Mz = () => {
        const uz = function() {
          const zz = Ez.e.get("clientEscMenuOptions");
          return {
            nametagsHidden: Ez.e.get("areNametagsHidden"),
            crouchToggle: zz.crouchIsToggle,
            bhopDisabled: zz.disableBunnyHopping,
            disableBobbing: zz.disableBobbing,
            ezTowering: zz.ezTowering && (0, Qn.g)(),
            ezBridging: zz.ezBridging,
            showChunkBorders: zz.showChunkBorders,
            nametagCutDistance: (0, en.d)()
          }
        }();
        (0, Jz.be)(iz, uz) || (iz = uz, zz.setUiPrefs(uz))
      };
      let tz = null;
      const Hz = () => {
        const uz = jn();
        (0, Jz.be)(tz, uz) || (tz = uz, zz.setLookPrefs(uz))
      };
      uz(), nz(), Mz(), Hz();
      const Oz = [(0, lz.o)("appManagerUpdated|soundVolume", uz), (0, lz.o)("appManagerUpdated|soundOnFromAd", uz), (0, lz.o)("appManagerUpdated|clientEscMenuOptions", (() => {
        nz(), Mz(), Hz()
      })), (0, lz.o)("appManagerUpdated|areNametagsHidden", Mz), (0, lz.o)("appManagerUpdated|showDistantNametags", Mz)];
      return () => {
        for (const zz of Oz) zz()
      }
    }
    var Cn = bz(40126),
      Yn = bz(40128);
    var kn = (0, Yn.d)("lend"),
      zi = (0, Yn.d)("starting"),
      ui = (0, Yn.d)("generation"),
      bi = (0, Yn.d)("end");
    class Ei {
      constructor(zz) {
        this.deps = zz, Object.defineProperty(this, bi, {
          value: ni
        }), Object.defineProperty(this, kn, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, zi, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, ui, {
          writable: !0,
          value: 0
        })
      }
      get active() {
        return null !== (0, Cn.b)(this, kn)[kn] || (0, Cn.b)(this, zi)[zi]
      }
      async start(zz) {
        if (this.active) return "busy";
        const uz = (0, Cn.b)(this, ui)[ui];
        (0, Cn.b)(this, zi)[zi] = !0;
        try {
          if (!await this.deps.ensureLoaded()) return "refused"
        } finally {
          (0, Cn.b)(this, zi)[zi] = !1
        }
        if (uz !== (0, Cn.b)(this, ui)[ui]) return "refused";
        const bz = this.deps.beginSave();
        if (!bz) return "refused";
        const Ez = Number(BigInt.asUintN(32, zz)),
          nz = Number(BigInt.asUintN(32, zz >> 32n));
        let iz = "refused";
        return this.deps.recorderCall(((zz, uz) => {
          const lz = bz.editState,
            Mz = zz.stage(lz.length);
          0 !== Mz ? (new Uint8Array(uz.buffer, Mz, lz.length).set(lz), zz.jEz(bz.headLen, Ez, nz) && (iz = "sealing")) : iz = "tooLarge"
        }), !0), "sealing" !== iz ? (bz.end(), iz) : ((0, Cn.b)(this, kn)[kn] = bz, "sealing")
      }
      beforeRecorderStep() {
        const zz = (0, Cn.b)(this, kn)[kn];
        if (!zz) return null;
        let uz = -1,
          bz = 0;
        if (!this.deps.recorderCall((zz => {
            uz = zz.IEz(), uz > 0 && (bz = zz.BEz())
          }))) return (0, Cn.b)(this, bi)[bi](zz, "stopped");
        if (uz < 0) return (0, Cn.b)(this, bi)[bi](zz, "read");
        if (0 === uz) return null;
        const Ez = zz.head(bz, uz);
        let nz = !1;
        if (Ez && this.deps.recorderCall(((zz, bz) => {
            const iz = zz.stage(uz);
            0 !== iz && (new Uint8Array(bz.buffer, iz, uz).set(Ez), nz = !0)
          }), !0), nz) return null;
        const iz = zz.givenUp();
        this.deps.recorderCall((zz => {
          zz.CEz()
        }));
        const lz = (0, Cn.b)(this, bi)[bi](zz, iz ? "givenUp" : "stopped");
        return iz && this.deps.givenUp("Reopen the replay you were editing to make your edits again, as they weren't saved when another replay opened."), lz
      }
      stop() {
        (0, Cn.b)(this, ui)[ui]++;
        const zz = (0, Cn.b)(this, kn)[kn];
        zz && (this.deps.recorderCall((zz => {
          zz.CEz()
        })), (0, Cn.b)(this, bi)[bi](zz, "stopped"))
      }
    }

    function ni(zz, uz) {
      return (0, Cn.b)(this, kn)[kn] = null, zz.end(), uz
    }

    function ii(zz, uz) {
      const bz = new Uint8Array(4),
        Ez = new DataView(bz.buffer);
      return Ez.setUint8(0, zz ? 1 : 0), Ez.setUint16(2, Math.max(0, Math.min(65535, Math.round(uz))), !0), bz
    }

    function li(zz, uz) {
      return zz > function(zz) {
        return 16777216 + 314572.8 * Math.max(0, zz)
      }(uz) + 33554432
    }
    let Mi = null;

    function ti(zz) {
      return Mi ??= async function(zz) {
        const uz = zz.loadInFlight();
        uz && await uz.catch((() => {}));
        if (zz.trapped()) return "trapped";
        if (zz.busy() || !li(zz.memoryBytes(), zz.clipSeconds())) return "MZ";
        zz.unload();
        let bz = !1;
        try {
          bz = await zz.load()
        } catch {
          bz = !1
        }
        if (!bz) return zz.trapped() ? "trapped" : zz.SZ() ? "SZ" : "failed";
        return "recycled"
      }(zz).finally((() => {
        Mi = null
      })), Mi
    }
    const Hi = "Replay recording couldn't load, so try again.",
      Oi = new Set([dz.Pc.ToggleRecording, dz.Pc.SaveClip]);
    var di = (0, Yn.d)("bindings"),
      Fi = (0, Yn.d)("module"),
      Zi = (0, Yn.d)("memory"),
      Ri = (0, Yn.d)("trapped"),
      Ki = (0, Yn.d)("SZ"),
      wi = (0, Yn.d)("recycleDue"),
      Xi = (0, Yn.d)("loading"),
      fi = (0, Yn.d)("generation"),
      si = (0, Yn.d)("viewDrawn"),
      ri = (0, Yn.d)("clip"),
      oi = (0, Yn.d)("session"),
      Ni = (0, Yn.d)("control"),
      vi = (0, Yn.d)("deferred"),
      xi = (0, Yn.d)("coreU8"),
      Ji = (0, Yn.d)("coreU32"),
      Ai = (0, Yn.d)("moduleU8"),
      Ti = (0, Yn.d)("edited"),
      Li = (0, Yn.d)("sendSession"),
      Pi = (0, Yn.d)("checkNotInEvents"),
      Gi = (0, Yn.d)("clipping"),
      ai = (0, Yn.d)("busy"),
      Vi = (0, Yn.d)("use"),
      mi = (0, Yn.d)("ensureLoaded"),
      qi = (0, Yn.d)("loadOnce"),
      Ui = (0, Yn.d)("recycleAfterStep"),
      ci = (0, Yn.d)("settleRecycle"),
      gi = (0, Yn.d)("load"),
      Si = (0, Yn.d)("attach"),
      yi = (0, Yn.d)("resendHeld"),
      Di = (0, Yn.d)("recycle"),
      Qi = (0, Yn.d)("send"),
      Wi = (0, Yn.d)("unload"),
      ei = (0, Yn.d)("dropModule"),
      ji = (0, Yn.d)("coreBytes"),
      Ii = (0, Yn.d)("coreWords"),
      Bi = (0, Yn.d)("moduleBytes"),
      Ci = (0, Yn.d)("loadFailed"),
      Yi = (0, Yn.d)("call"),
      ki = (0, Yn.d)("guard"),
      zl = (0, Yn.d)("trapOn");
    class ul {
      constructor(zz) {
        this.deps = zz, Object.defineProperty(this, zl, {
          value: vl
        }), Object.defineProperty(this, ki, {
          value: Nl
        }), Object.defineProperty(this, Yi, {
          value: ol
        }), Object.defineProperty(this, Ci, {
          value: rl
        }), Object.defineProperty(this, Bi, {
          value: sl
        }), Object.defineProperty(this, Ii, {
          value: fl
        }), Object.defineProperty(this, ji, {
          value: Xl
        }), Object.defineProperty(this, ei, {
          value: wl
        }), Object.defineProperty(this, Wi, {
          value: Kl
        }), Object.defineProperty(this, Qi, {
          value: Rl
        }), Object.defineProperty(this, Di, {
          value: Zl
        }), Object.defineProperty(this, yi, {
          value: Fl
        }), Object.defineProperty(this, Si, {
          value: dl
        }), Object.defineProperty(this, gi, {
          value: pl
        }), Object.defineProperty(this, ci, {
          value: Ol
        }), Object.defineProperty(this, Ui, {
          value: Hl
        }), Object.defineProperty(this, qi, {
          value: tl
        }), Object.defineProperty(this, mi, {
          value: Ml
        }), Object.defineProperty(this, Vi, {
          value: ll
        }), Object.defineProperty(this, ai, {
          value: il
        }), Object.defineProperty(this, Gi, {
          value: nl
        }), Object.defineProperty(this, Pi, {
          value: El
        }), Object.defineProperty(this, Li, {
          value: bl
        }), Object.defineProperty(this, di, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Fi, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Zi, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Ri, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Ki, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, wi, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Xi, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, fi, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, si, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, ri, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, oi, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Ni, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, vi, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, xi, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Ji, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Ai, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Ti, {
          writable: !0,
          value: void 0
        }), (0, Cn.b)(this, Ti)[Ti] = new Ei({
          ensureLoaded: () => (0, Cn.b)(this, mi)[mi](),
          recorderCall: (zz, uz) => {
            uz && (0, Cn.b)(this, Pi)[Pi]("an edited save's stage");
            const bz = (0, Cn.b)(this, Yi)[Yi](((uz, bz) => (zz(uz, bz), !0)));
            return null !== bz && void 0 !== bz && bz
          },
          beginSave: zz.beginSave,
          givenUp: zz.givenUp
        })
      }
      get active() {
        return null !== (0, Cn.b)(this, Fi)[Fi]
      }
      get trapped() {
        return (0, Cn.b)(this, Ri)[Ri]
      }
      get loading() {
        return null !== (0, Cn.b)(this, Xi)[Xi]
      }
      prefetch() {
        (0, Cn.b)(this, Ki)[Ki] || (0, Cn.b)(this, Ri)[Ri] || (0, Cn.b)(this, Fi)[Fi] || (0, Cn.b)(this, Xi)[Xi] || this.deps.prefetch()
      }
      viewDrawn() {
        (0, Cn.b)(this, si)[si] = !0, (0, Cn.b)(this, Gi)[Gi]() && (0, Cn.b)(this, Vi)[Vi]()
      }
      prefs(zz, uz) {
        (0, Cn.b)(this, ri)[ri] = {
          on: zz,
          seconds: uz
        }, (0, Cn.b)(this, Qi)[Qi](dz.Lc.Prefs, ii(zz, uz)), zz && (0, Cn.b)(this, si)[si] && (0, Cn.b)(this, Vi)[Vi]()
      }
      control(zz) {
        const uz = function(zz) {
          return new Uint8Array([zz, 0, 0, 0])
        }(zz);
        if (Oi.has(zz)) return (0, Cn.b)(this, Fi)[Fi] ? void(0, Cn.b)(this, Qi)[Qi](dz.Lc.Control, uz) : ((0, Cn.b)(this, Ni)[Ni] = uz, void(0, Cn.b)(this, Vi)[Vi]());
        (0, Cn.b)(this, Ki)[Ki] || this.deps.coreCommand(dz.Lc.Control, uz)
      }
      session(zz) {
        (0, Cn.b)(this, oi)[oi] = zz, (0, Cn.b)(this, Li)[Li](zz)
      }
      filePartDone(zz, uz) {
        (0, Cn.b)(this, Qi)[Qi](dz.Lc.FilePartDone, function(zz, uz) {
          const bz = new Uint8Array(8),
            Ez = new DataView(bz.buffer);
          return Ez.setUint32(0, zz, !0), Ez.setUint32(4, uz, !0), bz
        }(zz, uz))
      }
      fileDone(zz) {
        return (0, Cn.b)(this, Qi)[Qi](dz.Lc.FileDone, function(zz) {
          const uz = new Uint8Array(4);
          return new DataView(uz.buffer).setUint32(0, zz, !0), uz
        }(zz)), (0, Cn.b)(this, Ui)[Ui]()
      }
      saveEdited(zz) {
        return (0, Cn.b)(this, Pi)[Pi]("saveEdited"), (0, Cn.b)(this, Ti)[Ti].start(zz)
      }
      afterFrame() {
        if (!(0, Cn.b)(this, Fi)[Fi]) return;
        "read" === (0, Cn.b)(this, Ti)[Ti].beforeRecorderStep() && (0, Cn.b)(this, Ui)[Ui]();
        const zz = (0, Cn.b)(this, wi)[wi];
        (0, Cn.b)(this, wi)[wi] = null;
        const uz = (0, Cn.b)(this, Fi)[Fi],
          bz = (0, Cn.b)(this, Zi)[Zi];
        if (!uz || !bz) return void(null === zz || void 0 === zz || zz.resolve((0, Cn.b)(this, Ri)[Ri] ? "trapped" : "MZ"));
        const {
          core: Ez
        } = this.deps, nz = Ez.znz(2);
        let iz, lz, Mz, tz, Hz = 0,
          Oz = 0;
        if (0 !== nz) {
          var pz, dz;
          const zz = (0, Cn.b)(this, Ii)[Ii]();
          Hz = null !== (pz = zz[nz >>> 2]) && void 0 !== pz ? pz : 0, Oz = null !== (dz = zz[1 + (nz >>> 2)]) && void 0 !== dz ? dz : 0
        }
        try {
          if (Oz > 0) {
            const zz = uz.feed(Oz);
            0 !== zz && (0, Cn.b)(this, Bi)[Bi](bz).set((0, Cn.b)(this, ji)[ji]().subarray(Hz, Hz + Oz), zz)
          }
          iz = uz.step(), lz = uz.unz(), Mz = uz.bnz(), tz = uz.Enz()
        } catch (Fz) {
          if (!(0, Cn.b)(this, zl)[zl](Fz)) throw null === zz || void 0 === zz || zz.resolve("MZ"), Fz;
          return void(null === zz || void 0 === zz || zz.resolve("trapped"))
        }
        if (iz > 0) {
          const zz = Ez.nnz(2, iz);
          0 !== zz && (0, Cn.b)(this, ji)[ji]().set((0, Cn.b)(this, Bi)[Bi](bz).subarray(lz, lz + iz), zz)
        }
        if (Mz > 0) {
          (0, Cn.b)(this, vi)[vi] = [];
          try {
            this.deps.events(new Uint8Array(bz.buffer, tz, Mz), bz)
          } catch (Fz) {
            throw null === zz || void 0 === zz || zz.resolve("MZ"), Fz
          } finally {
            const zz = (0, Cn.b)(this, vi)[vi];
            (0, Cn.b)(this, vi)[vi] = null;
            for (const [uz, bz] of zz)(0, Cn.b)(this, Qi)[Qi](uz, bz)
          }
        }
        if (!(0, Cn.b)(this, Gi)[Gi]() && !(0, Cn.b)(this, ai)[ai]()) return (0, Cn.b)(this, Wi)[Wi](), void(null === zz || void 0 === zz || zz.resolve("MZ"));
        null === zz || void 0 === zz || zz.resolve((0, Cn.b)(this, Di)[Di]())
      }
      dispose() {
        (0, Cn.b)(this, Ki)[Ki] = !0, (0, Cn.b)(this, Wi)[Wi]()
      }
    }

    function bl(zz) {
      (0, Cn.b)(this, Qi)[Qi](dz.Lc.Session, function(zz) {
        const uz = new TextEncoder,
          bz = uz.encode(zz.game).subarray(0, 65535),
          Ez = uz.encode(zz.lobby).subarray(0, 65535),
          nz = new Uint8Array(22 + bz.length + 2 + Ez.length),
          iz = new DataView(nz.buffer);
        iz.setFloat64(0, zz.unixMs, !0), iz.setBigUint64(8, BigInt.asUintN(64, zz.session), !0), iz.setUint8(16, zz.lobbyType);
        let lz = 20;
        for (const Mz of [bz, Ez]) iz.setUint16(lz, Mz.length, !0), nz.set(Mz, lz + 2), lz += 2 + Mz.length;
        return nz
      }({
        ...zz,
        unixMs: this.deps.unixNow()
      }))
    }

    function El(zz) {
      false
    }

    function nl() {
      var zz, uz;
      return null !== (zz = null === (uz = (0, Cn.b)(this, ri)[ri]) || void 0 === uz ? void 0 : uz.on) && void 0 !== zz && zz
    }

    function il() {
      const zz = (0, Cn.b)(this, Fi)[Fi];
      let uz = !0;
      if (zz) try {
        uz = zz.busy()
      } catch (bz) {
        if (!(0, Cn.b)(this, zl)[zl](bz)) throw bz
      }
      return uz || (0, Cn.b)(this, Ti)[Ti].active
    }
    async function ll() {
      !(0, Cn.b)(this, Ki)[Ki] && this.deps.allowed() ? await (0, Cn.b)(this, mi)[mi]() : (0, Cn.b)(this, Ni)[Ni] = null
    }

    function Ml() {
      return (0, Cn.b)(this, Ri)[Ri] || (0, Cn.b)(this, Ki)[Ki] ? Promise.resolve(!1) : (0, Cn.b)(this, Fi)[Fi] ? Promise.resolve(!0) : ((0, Cn.b)(this, Xi)[Xi] ??= (0, Cn.b)(this, qi)[qi](), (0, Cn.b)(this, Xi)[Xi])
    }
    async function tl() {
      let zz = !1;
      try {
        return zz = await (0, Cn.b)(this, gi)[gi](), zz
      } finally {
        zz || ((0, Cn.b)(this, Ni)[Ni] = null), (0, Cn.b)(this, Xi)[Xi] = null
      }
    }

    function Hl() {
      if (!(0, Cn.b)(this, Fi)[Fi]) return Promise.resolve((0, Cn.b)(this, Ri)[Ri] ? "trapped" : "MZ");
      if (!(0, Cn.b)(this, wi)[wi]) {
        let zz = () => {};
        const uz = new Promise((uz => {
          zz = uz
        }));
        (0, Cn.b)(this, wi)[wi] = {
          promise: uz,
          resolve: zz
        }
      }
      return (0, Cn.b)(this, wi)[wi].promise
    }

    function Ol(zz) {
      const uz = (0, Cn.b)(this, wi)[wi];
      (0, Cn.b)(this, wi)[wi] = null, null === uz || void 0 === uz || uz.resolve(zz)
    }
    async function pl() {
      let zz = (0, Cn.b)(this, di)[di];
      if (!zz) {
        const uz = (0, Cn.b)(this, fi)[fi];
        try {
          zz = await this.deps.load()
        } catch (bz) {
          return uz === (0, Cn.b)(this, fi)[fi] && await (0, Cn.b)(this, Ci)[Ci](bz), !1
        }
        if (uz !== (0, Cn.b)(this, fi)[fi]) return this.deps.unload(), !1;
        const Ez = zz,
          nz = (0, Cn.b)(this, ki)[ki]((() => Ez.inz()));
        if (void 0 === nz) return !1;
        const iz = this.deps.core.lnz();
        if (nz !== iz) return await (0, Cn.b)(this, Ci)[Ci](new Error(`recorder port version ${nz}, the core's ${iz}`)), !1;
        (0, Cn.b)(this, di)[di] = zz
      }
      const uz = zz;
      try {
        if (!(0, Cn.b)(this, ki)[ki]((() => ((0, Cn.b)(this, Fi)[Fi] = new uz.Mnz, (0, Cn.b)(this, Zi)[Zi] = uz.YEz(), !0)))) return !1;
        (0, Cn.b)(this, yi)[yi]();
        const zz = (0, Cn.b)(this, Ni)[Ni];
        return (0, Cn.b)(this, Ni)[Ni] = null, zz && (0, Cn.b)(this, Qi)[Qi](dz.Lc.Control, zz), (0, Cn.b)(this, Si)[Si]()
      } catch (bz) {
        return (0, Cn.b)(this, Wi)[Wi](), await (0, Cn.b)(this, Ci)[Ci](bz), !1
      }
    }

    function dl() {
      return this.deps.core.tnz(0), 1 === this.deps.core.tnz(1) || ((0, Cn.b)(this, Wi)[Wi](), this.deps.failed(Hi), !1)
    }

    function Fl() {
      (0, Cn.b)(this, ri)[ri] && (0, Cn.b)(this, Qi)[Qi](dz.Lc.Prefs, ii((0, Cn.b)(this, ri)[ri].on, (0, Cn.b)(this, ri)[ri].seconds)), (0, Cn.b)(this, oi)[oi] && (0, Cn.b)(this, Li)[Li]((0, Cn.b)(this, oi)[oi])
    }

    function Zl() {
      return ti({
        memoryBytes: this.deps.memoryBytes,
        clipSeconds: () => {
          var zz, uz;
          return null !== (zz = null === (uz = (0, Cn.b)(this, ri)[ri]) || void 0 === uz ? void 0 : uz.seconds) && void 0 !== zz ? zz : 0
        },
        trapped: () => (0, Cn.b)(this, Ri)[Ri],
        busy: () => (0, Cn.b)(this, ai)[ai](),
        loadInFlight: () => (0, Cn.b)(this, Xi)[Xi],
        SZ: () => (0, Cn.b)(this, Ki)[Ki],
        unload: () => {
          (0, Cn.b)(this, Wi)[Wi]()
        },
        load: () => (0, Cn.b)(this, mi)[mi]()
      })
    }

    function Rl(zz, uz) {
      (0, Cn.b)(this, vi)[vi] ? (0, Cn.b)(this, vi)[vi].push([zz, uz]): (0, Cn.b)(this, Yi)[Yi](((bz, Ez) => {
        const nz = bz.kEz(uz.length);
        0 !== nz && (new Uint8Array(Ez.buffer, nz, uz.length).set(uz), bz.command(zz, uz.length))
      }))
    }

    function Kl() {
      (0, Cn.b)(this, fi)[fi]++, (0, Cn.b)(this, ci)[ci]("MZ"), (0, Cn.b)(this, Ti)[Ti].stop(), this.deps.core.tnz(0), (0, Cn.b)(this, ei)[ei](), (0, Cn.b)(this, Ri)[Ri] || ((0, Cn.b)(this, di)[di] = null, this.deps.unload())
    }

    function wl() {
      (0, Cn.b)(this, Yi)[Yi]((zz => {
        zz.free()
      })), (0, Cn.b)(this, Fi)[Fi] = null, (0, Cn.b)(this, Zi)[Zi] = null, (0, Cn.b)(this, Ai)[Ai] = null
    }

    function Xl() {
      var zz;
      const uz = this.deps.coreBuffer();
      return (null === (zz = (0, Cn.b)(this, xi)[xi]) || void 0 === zz ? void 0 : zz.buffer) !== uz && ((0, Cn.b)(this, xi)[xi] = new Uint8Array(uz)), (0, Cn.b)(this, xi)[xi]
    }

    function fl() {
      var zz;
      const uz = this.deps.coreBuffer();
      return (null === (zz = (0, Cn.b)(this, Ji)[Ji]) || void 0 === zz ? void 0 : zz.buffer) !== uz && ((0, Cn.b)(this, Ji)[Ji] = new Uint32Array(uz, 0, uz.byteLength >>> 2)), (0, Cn.b)(this, Ji)[Ji]
    }

    function sl(zz) {
      var uz;
      const bz = zz.buffer;
      return (null === (uz = (0, Cn.b)(this, Ai)[Ai]) || void 0 === uz ? void 0 : uz.buffer) !== bz && ((0, Cn.b)(this, Ai)[Ai] = new Uint8Array(bz)), (0, Cn.b)(this, Ai)[Ai]
    }
    async function rl(zz) {
      await this.deps.staleOr(zz, (() => {
        this.deps.failed(Hi)
      }))
    }

    function ol(zz) {
      const uz = (0, Cn.b)(this, Fi)[Fi],
        bz = (0, Cn.b)(this, Zi)[Zi];
      if (uz && bz) return (0, Cn.b)(this, ki)[ki]((() => zz(uz, bz)))
    }

    function Nl(zz) {
      if (!(0, Cn.b)(this, Ri)[Ri]) try {
        return zz()
      } catch (uz) {
        if (!(0, Cn.b)(this, zl)[zl](uz)) throw uz;
        return
      }
    }

    function vl(zz) {
      return zz instanceof WebAssembly.RuntimeError && ((0, Cn.b)(this, Ri)[Ri] = !0, (0, Cn.b)(this, Fi)[Fi] = null, (0, Cn.b)(this, Zi)[Zi] = null, (0, Cn.b)(this, Ai)[Ai] = null, (0, Cn.b)(this, di)[di] = null, (0, Cn.b)(this, Ni)[Ni] = null, (0, Cn.b)(this, ci)[ci]("trapped"), this.deps.core.tnz(0), (0, Cn.b)(this, Ti)[Ti].stop(), this.deps.crash(this.deps.markTrapped(zz)), this.deps.failed("Replay recording stopped working, so reload the page to record replays again."), !0)
    }
    var xl = bz(38026);
    const Jl = new Map([
      ["skyblock", () => bz.e(49).then((() => bz(38020)))]
    ]);

    function Al(zz) {
      const uz = Jl.get(zz);
      return uz ? uz().then((() => {
        const uz = (0, xl.d)(zz);
        if (!uz) throw new Error(`${zz}'s replay hook module registered no hook`);
        return uz
      })) : null
    }
    class Tl {
      constructor(zz) {
        this.deps = zz, this.game = null, this.hook = null, this.generation = 0, this.all = !1, this.pending = new Map, this.ids = new Int32Array(64)
      }
      get wantsWatch() {
        return null !== this.hook
      }
      opened(zz) {
        if (this.pending.clear(), zz === this.game && null !== this.hook) return void(this.all = !0);
        const uz = ++this.generation;
        this.game = zz, this.hook = null, this.all = !1;
        const bz = this.deps.loadHook(zz);
        null === bz || void 0 === bz || bz.then((zz => {
          uz === this.generation && (this.hook = zz, this.all = !0)
        }), (zz => {
          uz === this.generation && this.deps.onError(zz)
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
          hook: uz
        } = this;
        if (null === uz || !zz || !this.all && 0 === this.pending.size) return;
        const bz = this.deps.cmd();
        if (null === bz) return;
        const {
          api: Ez
        } = this.deps;
        if (this.all) {
          this.all = !1, this.pending.clear();
          const {
            ids: zz,
            count: uz
          } = qb(Ez, this.ids);
          this.ids = zz;
          for (let bz = 0; bz < uz; bz++) this.pending.set(zz[bz], !0)
        }
        const nz = this.ids = hb(this.ids, this.pending.size);
        let iz = 0;
        for (const Hz of this.pending.keys()) nz[iz++] = Hz;
        const lz = [],
          Mz = Ub(Ez, nz, iz, ((zz, uz) => {
            null !== uz && lz.push({
              serverId: zz,
              info: uz,
              spawned: !0 === this.pending.get(zz)
            })
          }));
        if (Mz) {
          this.pending.clear();
          for (const {
              serverId: zz,
              info: Ez,
              spawned: nz
            }
            of lz) try {
            uz(Ez, {
              setFacingTolerance: uz => {
                null === uz && nz || ib(bz, zz, uz) || this.pending.set(zz, nz)
              }
            })
          } catch (tz) {
            this.deps.onError(tz)
          }
        }
      }
    }
    var Ll = (0, Yn.d)("bindings"),
      Pl = (0, Yn.d)("module"),
      Gl = (0, Yn.d)("memory"),
      al = (0, Yn.d)("trapped"),
      Vl = (0, Yn.d)("generation"),
      ml = (0, Yn.d)("loading"),
      ql = (0, Yn.d)("lend"),
      hl = (0, Yn.d)("givenUp"),
      Ul = (0, Yn.d)("afterSave"),
      cl = (0, Yn.d)("opens"),
      gl = (0, Yn.d)("saveAskedAt"),
      Sl = (0, Yn.d)("unload"),
      yl = (0, Yn.d)("dropModule"),
      Dl = (0, Yn.d)("loadFailed"),
      Ql = (0, Yn.d)("saveReadsBody"),
      Wl = (0, Yn.d)("command"),
      el = (0, Yn.d)("call"),
      jl = (0, Yn.d)("guard"),
      Il = (0, Yn.d)("trapOn");
    class Bl {
      constructor(zz) {
        this.deps = zz, Object.defineProperty(this, Il, {
          value: nM
        }), Object.defineProperty(this, jl, {
          value: EM
        }), Object.defineProperty(this, el, {
          value: bM
        }), Object.defineProperty(this, Wl, {
          value: uM
        }), Object.defineProperty(this, Ql, {
          get: zM,
          set: void 0
        }), Object.defineProperty(this, Dl, {
          value: kl
        }), Object.defineProperty(this, yl, {
          value: Yl
        }), Object.defineProperty(this, Sl, {
          value: Cl
        }), Object.defineProperty(this, Ll, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Pl, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Gl, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, al, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Vl, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, ml, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, ql, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, hl, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Ul, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, cl, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, gl, {
          writable: !0,
          value: null
        })
      }
      get active() {
        return null !== (0, Cn.b)(this, Pl)[Pl] && null === (0, Cn.b)(this, Ul)[Ul]
      }
      async open(zz) {
        if ((0, Cn.b)(this, al)[al]) return dz.Vc.ModuleTrap;
        let uz = (0, Cn.b)(this, Ll)[Ll];
        if (!uz) {
          const zz = (0, Cn.b)(this, Vl)[Vl];
          (0, Cn.b)(this, ml)[ml]++;
          try {
            uz = await this.deps.load()
          } catch (Ez) {
            return (0, Cn.b)(this, ml)[ml]--, zz !== (0, Cn.b)(this, Vl)[Vl] ? "stopped" : (0, Cn.b)(this, Dl)[Dl](Ez)
          }
          if ((0, Cn.b)(this, ml)[ml]--, zz !== (0, Cn.b)(this, Vl)[Vl]) return (0, Cn.b)(this, Ll)[Ll] || 0 !== (0, Cn.b)(this, ml)[ml] || (0, Cn.b)(this, al)[al] || this.deps.unload(), "stopped";
          if ((0, Cn.b)(this, al)[al]) return dz.Vc.ModuleTrap;
          const bz = uz.inz(),
            nz = this.deps.core.lnz();
          if (bz !== nz) return (0, Cn.b)(this, Dl)[Dl](new Error(`replay port version ${bz}, the core's ${nz}`));
          (0, Cn.b)(this, Ll)[Ll] = uz
        }
        if (!(0, Cn.b)(this, Pl)[Pl]) {
          const zz = uz;
          if (!(0, Cn.b)(this, jl)[jl]((() => {
              (0, Cn.b)(this, Pl)[Pl] = new zz.Hnz, (0, Cn.b)(this, Gl)[Gl] = zz.Onz()
            }))) return dz.Vc.ModuleTrap
        }
        let bz = !1;
        return (0, Cn.b)(this, el)[el](((uz, Ez) => {
          null !== (0, Cn.b)(this, Ul)[Ul] && uz.step(0, 0);
          const nz = uz.stage(zz.length);
          0 !== nz && (new Uint8Array(Ez.buffer, nz, zz.length).set(zz), uz.open(), (0, Cn.b)(this, hl)[hl] = (0, Cn.b)(this, ql)[ql], (0, Cn.b)(this, Ul)[Ul] = null, (0, Cn.b)(this, cl)[cl]++, bz = !0)
        })) ? bz ? "opening" : dz.Vc.TooLarge : dz.Vc.ModuleTrap
      }
      beforeFrame(zz) {
        const uz = (0, Cn.b)(this, Pl)[Pl],
          bz = (0, Cn.b)(this, Gl)[Gl];
        if (!uz || !bz || null !== (0, Cn.b)(this, Ul)[Ul]) return;
        const {
          core: Ez
        } = this.deps, nz = Ez.pnz(zz);
        if (nz < 0) return;
        const iz = Math.floor(nz);
        let lz, Mz;
        try {
          lz = uz.step(iz, nz - iz), Mz = uz.unz()
        } catch (Hz) {
          return void(0, Cn.b)(this, Il)[Il](Hz)
        }
        const tz = Ez.nnz(1, lz);
        if (0 === tz) {
          const zz = (0, Cn.b)(this, el)[el]((zz => {
            zz.close()
          }));
          if (!zz) return;
          return (0, Cn.b)(this, Ql)[Ql] ? (0, Cn.b)(this, Ul)[Ul] = "drop" : (0, Cn.b)(this, yl)[yl](), void Ez.dnz(dz.Vc.Port)
        }
        new Uint8Array(this.deps.coreBuffer(), tz, lz).set(new Uint8Array(bz.buffer, Mz, lz))
      }
      play() {
        (0, Cn.b)(this, Wl)[Wl]((zz => {
          zz.play()
        }))
      }
      pause() {
        (0, Cn.b)(this, Wl)[Wl]((zz => {
          zz.pause()
        }))
      }
      seek(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, Cn.b)(this, Wl)[Wl]((bz => {
          bz.seek(zz, uz)
        }))
      }
      setMark(zz, uz) {
        return (0, Cn.b)(this, Wl)[Wl]((bz => {
          bz.Fnz(zz, uz)
        }))
      }
      addKeyframe(zz, uz) {
        return (0, Cn.b)(this, Wl)[Wl]((bz => {
          bz.Znz(zz[0], zz[1], zz[2], uz[0], uz[1], uz[2])
        }))
      }
      setKeyframe(zz, uz) {
        return (0, Cn.b)(this, Wl)[Wl]((bz => {
          bz.Rnz(zz, uz)
        }))
      }
      moveKeyframe(zz, uz) {
        return (0, Cn.b)(this, Wl)[Wl]((bz => {
          bz.Knz(zz, uz)
        }))
      }
      deleteKeyframes(zz, uz) {
        return (0, Cn.b)(this, Wl)[Wl]((bz => {
          bz.wnz(zz, uz)
        }))
      }
      crop(zz, uz) {
        return null === (0, Cn.b)(this, ql)[ql] && (0, Cn.b)(this, Wl)[Wl]((bz => {
          bz.crop(zz, uz)
        }))
      }
      beginSave() {
        const zz = (0, Cn.b)(this, gl)[gl];
        if ((0, Cn.b)(this, gl)[gl] = null, null !== zz && zz !== (0, Cn.b)(this, cl)[cl]) return null;
        let uz = 0,
          bz = null;
        if ((0, Cn.b)(this, el)[el](((zz, Ez) => {
            uz = zz.save(), 0 !== uz && (bz = new Uint8Array(Ez.buffer, zz.Xnz(), zz.fnz()).slice())
          })), 0 === uz || !bz) return null;
        const Ez = {
          headLen: uz,
          editState: bz,
          givenUp: () => (0, Cn.b)(this, hl)[hl] === Ez,
          head: (zz, uz) => {
            if ((0, Cn.b)(this, ql)[ql] !== Ez || !(0, Cn.b)(this, Ql)[Ql]) return null;
            let bz = null;
            return (0, Cn.b)(this, el)[el](((Ez, nz) => {
              const iz = Ez.snz();
              0 !== iz && zz >= 0 && uz >= 0 && zz + uz <= iz && (bz = new Uint8Array(nz.buffer, Ez.rnz() + zz, uz))
            })), bz
          },
          end: () => {
            if ((0, Cn.b)(this, ql)[ql] !== Ez) return;
            (0, Cn.b)(this, ql)[ql] = null, (0, Cn.b)(this, hl)[hl] = null, (0, Cn.b)(this, el)[el]((zz => {
              zz.onz()
            }));
            const zz = (0, Cn.b)(this, Ul)[Ul];
            (0, Cn.b)(this, Ul)[Ul] = null, "unload" === zz ? (0, Cn.b)(this, Sl)[Sl]() : "drop" === zz && (0, Cn.b)(this, yl)[yl]()
          }
        };
        return (0, Cn.b)(this, ql)[ql] = Ez, Ez
      }
      askSave() {
        (0, Cn.b)(this, gl)[gl] = (0, Cn.b)(this, cl)[cl]
      }
      setSpeed(zz) {
        (0, Cn.b)(this, Wl)[Wl]((uz => {
          uz.Nnz(zz)
        }))
      }
      setCameraMode(zz) {
        (0, Cn.b)(this, Wl)[Wl]((uz => {
          uz.vnz(zz)
        }))
      }
      close() {
        (0, Cn.b)(this, Wl)[Wl]((zz => {
          zz.close()
        }))
      }
      stop() {
        (0, Cn.b)(this, Vl)[Vl]++, (0, Cn.b)(this, Ql)[Ql] && ((0, Cn.b)(this, el)[el]((zz => {
          zz.close()
        })), (0, Cn.b)(this, Pl)[Pl]) ? (0, Cn.b)(this, Ul)[Ul] = "unload" : (0, Cn.b)(this, Sl)[Sl]()
      }
    }

    function Cl() {
      (0, Cn.b)(this, yl)[yl](), (0, Cn.b)(this, al)[al] || ((0, Cn.b)(this, Ll)[Ll] = null, this.deps.unload())
    }

    function Yl() {
      (0, Cn.b)(this, el)[el]((zz => {
        zz.free()
      })), (0, Cn.b)(this, Pl)[Pl] = null, (0, Cn.b)(this, Gl)[Gl] = null
    }
    async function kl(zz) {
      return await this.deps.staleOr(zz, (() => {})) ? "reloading" : dz.Vc.ModuleLoad
    }

    function zM() {
      return null !== (0, Cn.b)(this, ql)[ql] && (0, Cn.b)(this, hl)[hl] !== (0, Cn.b)(this, ql)[ql]
    }

    function uM(zz) {
      return null === (0, Cn.b)(this, Ul)[Ul] && (0, Cn.b)(this, el)[el](zz)
    }

    function bM(zz) {
      const uz = (0, Cn.b)(this, Pl)[Pl],
        bz = (0, Cn.b)(this, Gl)[Gl];
      return !(!uz || !bz) && (0, Cn.b)(this, jl)[jl]((() => {
        zz(uz, bz)
      }))
    }

    function EM(zz) {
      if ((0, Cn.b)(this, al)[al]) return !1;
      try {
        return zz(), !0
      } catch (uz) {
        return (0, Cn.b)(this, Il)[Il](uz), !1
      }
    }

    function nM(zz) {
      if (!(zz instanceof WebAssembly.RuntimeError)) throw zz;
      (0, Cn.b)(this, al)[al] = !0, (0, Cn.b)(this, Pl)[Pl] = null, (0, Cn.b)(this, Gl)[Gl] = null, (0, Cn.b)(this, Ll)[Ll] = null, this.deps.crash(this.deps.markTrapped(zz)), this.deps.core.dnz(dz.Vc.ModuleTrap)
    }
    var iM = bz(6206),
      lM = bz(39895);
    const MM = "[bloxd-wasm-client]";
    const tM = String(Tn);

    function HM(zz) {
      return null === zz || zz === tM ? void 0 : zz
    }

    function OM(zz) {
      var uz, bz, Ez, nz, iz, Mz, tz;
      switch (zz.what) {
        case dz.$c.FlyingText: {
          let uz;
          try {
            uz = JSON.parse(zz.contentJson)
          } catch (Hz) {
            return void console.warn(`${MM} a replay's flying text isn't JSON`, Hz)
          }
          lz.k.sK("forceFlyingMiddleMessage", {
            content: uz,
            ki: zz.ki,
            angle: zz.angle,
            zl: zz.zl
          });
          break
        }
        case dz.$c.PlayerKilled:
          (0, lM.e)({
            kind: "killed",
            body: {
              deadEId: null !== (uz = HM(zz.dead)) && void 0 !== uz ? uz : "",
              killerEId: HM(zz.killer),
              withItem: null !== (bz = zz.withItem) && void 0 !== bz ? bz : "",
              killstreak: zz.killstreak
            }
          });
          break;
        case dz.$c.Killfeed:
          (0, lM.e)({
            kind: "custom",
            body: {
              killer: {
                eId: HM(zz.killerId),
                name: null !== (Ez = zz.killerName) && void 0 !== Ez ? Ez : void 0,
                colour: null !== (nz = zz.killerColour) && void 0 !== nz ? nz : void 0
              },
              victim: {
                eId: HM(zz.victimId),
                name: null !== (iz = zz.victimName) && void 0 !== iz ? iz : void 0,
                colour: null !== (Mz = zz.victimColour) && void 0 !== Mz ? Mz : void 0
              },
              withItem: null !== (tz = zz.withItem) && void 0 !== tz ? tz : ""
            }
          })
      }
    }
    const pM = "[bloxd-wasm-client]";

    function dM(zz) {
      if (void 0 === zz || null === zz || "" === zz) return null;
      const uz = Number(zz);
      return Number.isInteger(uz) && uz > Tn && uz <= 2147483647 ? uz : null
    }

    function FM(zz) {
      return {
        id: dM(zz.eId),
        name: "string" === typeof zz.name ? zz.name : null,
        colour: "string" === typeof zz.colour ? zz.colour : null
      }
    }

    function ZM(zz) {
      const uz = (0, cn.i)(Qb.Wb.PlayerKilled, (uz => {
          var bz, Ez;
          const nz = (0, Un.l)(uz);
          if (!(0, Un.e)(nz)) return;
          const {
            deadEId: iz,
            killerEId: lz,
            withItem: Mz,
            killstreak: tz
          } = nz;
          zz.recordPlayerKilled(null !== (bz = dM(iz)) && void 0 !== bz ? bz : Tn, null !== (Ez = dM(lz)) && void 0 !== Ez ? Ez : Tn, "number" === typeof tz ? tz : 0, "string" === typeof Mz ? Mz : "")
        })),
        bz = (0, cn.i)(Qb.Wb.CustomKillfeed, (uz => {
          const bz = (0, Un.l)(uz);
          if (!(0, Un.e)(bz) || !(0, Un.e)(bz.killer) || !(0, Un.e)(bz.victim)) return;
          const {
            killer: Ez,
            victim: nz,
            withItem: iz
          } = bz;
          zz.recordKillfeed(FM(Ez), FM(nz), "string" === typeof iz ? iz : null)
        }));
      return () => {
        uz(), bz()
      }
    }

    function RM(zz) {
      var uz;
      return void 0 === zz || null === zz ? null : null !== (uz = JSON.stringify(zz)) && void 0 !== uz ? uz : null
    }

    function KM(zz) {
      let uz = null;
      const bz = () => {
        const {
          enableClipping: bz,
          clipDurationSeconds: nz
        } = Ez.e.get("clientEscMenuOptions"), iz = `${bz}:${nz}`;
        iz !== uz && (uz = iz, zz.recorder.setPrefs(bz, nz))
      };
      return bz(), (0, lz.o)("appManagerUpdated|clientEscMenuOptions", bz)
    }
    const wM = "replayModule",
      XM = "recorderModule";

    function fM(zz, uz, bz) {
      return function() {
        return zz.isStopped ? bz : uz(...arguments)
      }
    }
    const sM = {
      open: () => Promise.reject(new Error(Xn.d.coreStopped.text)),
      replayKey: () => null,
      encode: () => Promise.resolve(null),
      fileHandle: () => null,
      markSaved: () => {}
    };

    function rM() {
      return bz.e(61).then((() => bz(60611)))
    }

    function oM(zz) {
      (0, Xn.h)({
        text: zz,
        type: "Error"
      })
    }
    class NM {
      constructor(zz) {
        this.deps = zz, this.runtime = void 0, this.entityHooks = void 0, this.recordedOptions = void 0, this.stops = void 0, this.activeConn = 0, this.stopped = !1, this.bench = null, this.replay = void 0, this.recorder = void 0, this.freecam = void 0, this.drawn = !1;
        const {
          running: uz,
          api: Ez,
          core: nz
        } = zz, iz = () => zz.memory().buffer, lz = () => uz.isStopped ? null : uz.rings.cmd, Mz = fM(uz, ((zz, uz) => nz.nnz(zz, uz)), 0), tz = () => nz.lnz();
        let Hz = null;
        this.replay = new Bl({
          core: {
            pnz: fM(uz, (zz => nz.pnz(zz)), -1),
            nnz: Mz,
            lnz: tz,
            dnz: fM(uz, (zz => {
              nz.dnz(zz)
            }), void 0)
          },
          coreBuffer: iz,
          load: async () => (Hz = await bz.e(62).then((() => bz(60622))), Hz.loadReplayModule()),
          unload: () => {
            var zz;
            null === (zz = Hz) || void 0 === zz || zz.unloadReplayModule()
          },
          markTrapped: zz => Hz ? Hz.markReplayTrapped(zz) : new Error(String(zz)),
          staleOr: (uz, bz) => zz.staleOr(wM, uz, bz),
          crash: uz => {
            zz.reportFault(wM, uz)
          }
        });
        let Oz = null;
        this.recorder = new ul({
          core: {
            tnz: fM(uz, (zz => nz.tnz(zz)), 0),
            znz: fM(uz, (zz => nz.znz(zz)), 0),
            nnz: Mz,
            lnz: tz
          },
          coreCommand: (zz, uz) => {
            var bz, Ez;
            return null !== (bz = null === (Ez = lz()) || void 0 === Ez ? void 0 : Ez.writeCmd(zz, 0, uz)) && void 0 !== bz && bz
          },
          coreBuffer: iz,
          load: async () => (Oz = await rM(), Oz.loadRecorderModule()),
          prefetch: () => {
            rM().then((zz => zz.prefetchRecorderModule())).catch((zz => {
              console.warn(`${pM} the recorder module didn't prefetch, so a save loads it:`, zz)
            }))
          },
          unload: () => {
            var zz;
            null === (zz = Oz) || void 0 === zz || zz.unloadRecorderModule()
          },
          markTrapped: zz => Oz ? Oz.markRecorderTrapped(zz) : new Error(String(zz)),
          memoryBytes: () => {
            var zz, uz;
            return null !== (zz = null === (uz = Oz) || void 0 === uz ? void 0 : uz.recorderMemoryBytes()) && void 0 !== zz ? zz : 0
          },
          staleOr: (uz, bz) => zz.staleOr(XM, uz, bz),
          crash: uz => {
            zz.reportFault(XM, uz)
          },
          allowed: () => !0 === zz.options.get("canRecordReplays"),
          failed: oM,
          events: (zz, uz) => {
            this.runtime.recorderEvents(zz, uz)
          },
          beginSave: () => this.replay.beginSave(),
          givenUp: oM,
          unixNow: () => Date.now()
        });
        const pz = new An({
          core: {
            QEz: fM(uz, (zz => nz.QEz(zz)), 0),
            eEz: fM(uz, (() => {
              nz.eEz()
            }), void 0),
            xK: fM(uz, (() => nz.xK()), 0),
            WEz: fM(uz, (() => nz.WEz()), 0)
          },
          buffer: iz,
          apiView: () => Ez.apiView,
          cmd: lz,
          replay: this.replay,
          recorder: this.recorder
        });
        this.entityHooks = new Tl({
          api: Ez,
          cmd: lz,
          loadHook: Al,
          onError: zz => {
            console.warn(`${pM} the recorded game's replay hooks:`, zz)
          }
        });
        const dz = new hn({
          client: pz,
          buffer: iz,
          setHoldDraws: zz => {
            uz.setHoldDraws(zz)
          },
          notify: Xn.h,
          onRecorderState: () => {
            var zz;
            null === (zz = (0, sn.e)()) || void 0 === zz || zz.recorderChanged()
          },
          onViewerChange: () => {
            var zz;
            null === (zz = (0, sn.e)()) || void 0 === zz || zz.viewerChanged()
          },
          onReplayOption: uz => {
            ! function(zz, uz) {
              var bz, Ez;
              const nz = Qb.cb[uz.key];
              if (void 0 === nz) return;
              let iz = null !== (bz = uz.value) && void 0 !== bz ? bz : JSON.parse(JSON.stringify(null !== (Ez = iM.b[nz]) && void 0 !== Ez ? Ez : null));
              if (null !== uz.value && uz.key < Qb.Cb.Environment && "string" === typeof iz) try {
                iz = JSON.parse(iz)
              } catch (lz) {
                return void console.warn(`${MM} a replay's ${nz} isn't JSON`, lz)
              }
              zz.applyNewClientOptions({
                [nz]: iz
              })
            }(zz.options, uz)
          },
          onReplayUiEvent: OM,
          onReplayOpened: uz => {
            this.entityHooks.opened((0, Jz.Sb)(uz)), zz.replayShaderPack(uz)
          },
          meshPending: () => {
            var zz, bz;
            return null !== (zz = null === (bz = uz.lastHeader) || void 0 === bz ? void 0 : bz.renderPending) && void 0 !== zz ? zz : 0
          },
          viewerOpen: fn.d,
          download: zz => {
            (0, Kn.h)(zz)
          }
        });
        this.runtime = dz, Ez.replay = dz.sink, (0, sn.o)(dz);
        const Fz = new yn({
          live: () => {
            var zz;
            return !uz.isStopped && !0 === (null === (zz = dz.currentViewer) || void 0 === zz ? void 0 : zz.inPlayback)
          },
          cmd: lz,
          dragScale: In
        });
        this.freecam = Fz, (0, sn.m)(Fz), this.recordedOptions = function(zz, uz) {
          const bz = Qb.cb,
            Ez = bz.map(((bz, Ez) => uz.subscribe(bz, (uz => {
              zz.setOption(Ez, RM(uz))
            }))));
          return {
            sendAll() {
              bz.forEach(((bz, Ez) => {
                zz.setOption(Ez, RM(uz.get(bz)))
              }))
            },
            stop() {
              for (const zz of Ez) zz()
            }
          }
        }(dz.recorder, zz.options), this.stops = [(0, uE.l)((zz => {
          Fz.flush();
          try {
            this.replay.beforeFrame(zz)
          } catch (uz) {
            this.deps.reportFault("replayFrame", uz)
          }
        })), (0, uE.C)(((zz, uz) => {
          try {
            this.recorder.afterFrame(), uz && !this.drawn && (this.drawn = !0, this.recorder.viewDrawn())
          } catch (bz) {
            this.deps.reportFault("recorderFrame", bz)
          }
          try {
            dz.afterFrame(zz)
          } catch (bz) {
            this.deps.reportFault("replayRuntime", bz)
          }
        })), KM(dz), () => {
          this.recordedOptions.stop()
        }, ZM(dz.recorder), (0, gn.g)((zz => {
          let {
            action: uz,
            down: bz
          } = zz;
          var Ez;
          bz && (null === (Ez = (0, sn.e)()) || void 0 === Ez || Ez.keyDown(uz))
        }))];
        const Zz = () => {
          const zz = dz.currentViewer;
          return !0 === (null === zz || void 0 === zz ? void 0 : zz.isOpen) ? zz : null
        };
        (0, wn.f)({
          open: (zz, uz) => this.open(zz, uz),
          replayKey: () => {
            var zz, uz;
            return null !== (zz = null === (uz = Zz()) || void 0 === uz ? void 0 : uz.id) && void 0 !== zz ? zz : null
          },
          saveRefusal: () => {
            var zz, uz;
            return null !== (zz = null === (uz = Zz()) || void 0 === uz ? void 0 : uz.saveRefusal) && void 0 !== zz ? zz : null
          },
          encode: () => {
            var zz, uz;
            return null !== (zz = null === (uz = Zz()) || void 0 === uz ? void 0 : uz.save()) && void 0 !== zz ? zz : Promise.resolve(null)
          },
          fileHandle: () => {
            var zz, uz;
            return null !== (zz = null === (uz = dz.currentViewer) || void 0 === uz ? void 0 : uz.fileHandle) && void 0 !== zz ? zz : null
          },
          markSaved: (zz, uz) => {
            var bz;
            null === (bz = dz.currentViewer) || void 0 === bz || bz.markSaved(zz, uz)
          }
        })
      }
      netEvent(zz) {
        if ("connection" === zz.type)
          if (zz.phase === dz.B.Activated) {
            this.activeConn = zz.conn;
            const uz = this.deps.sessionInfo(zz.conn);
            null !== uz && (this.runtime.activated({
              lobbyType: (0, Az.v)(uz.lobbyName),
              gameNameWithVariation: uz.gameNameWithVariation,
              lobbyName: uz.lobbyName
            }), this.recordedOptions.sendAll())
          } else zz.phase !== dz.B.Left && zz.phase !== dz.B.Closed || zz.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
      }
      stop() {
        if (!this.stopped) {
          this.stopped = !0;
          for (const zz of this.stops) zz();
          this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, sn.h)() === this.runtime && (0, sn.o)(null), (0, sn.g)() === this.freecam && (0, sn.m)(null), (0, wn.f)(sM), null !== this.bench && window.wasmReplayBench === this.bench && (window.wasmReplayBench = void 0)
        }
      }
      async open(zz, uz) {
        const {
          running: bz
        } = this.deps;
        if (bz.isStopped) throw new Error(Xn.d.coreStopped.text);
        if (zz.byteLength > 67108864) throw new Error(Xn.d.cantOpen.text);
        let Ez;
        try {
          Ez = await async function(zz) {
            const uz = await zz.loadViewer();
            return uz.inPlayback || (0, uE.M)().leaveGame(null), uz
          }(this.runtime)
        } catch (nz) {
          throw console.warn(`${pM} the replay viewer didn't load`, nz), new Error(Xn.d.viewerLoadFailed.text)
        }
        if (bz.isStopped) throw new Error(Xn.d.coreStopped.text);
        await Ez.open(zz, uz)
      }
    }
    var vM = bz(1892);

    function xM(zz, uz) {
      const {
        aux: bz,
        payload: Ez
      } = function(zz) {
        return {
          aux: zz.reset ? dz.Vb.ResetFirst : 0,
          payload: AM(zz.changes)
        }
      }(uz);
      zz.queueOptions(bz, Ez) && (uz.reset && vM.b.reset(), vM.b.apply(uz.changes))
    }
    const JM = new TextEncoder;

    function AM(zz) {
      const uz = new TM;
      return PM(uz, zz), uz.bytes()
    }
    class TM {
      constructor() {
        this.buf = new Uint8Array(256), this.view = new DataView(this.buf.buffer), this.len = 0
      }
      room(zz) {
        if (this.len + zz <= this.buf.length) return;
        const uz = new Uint8Array(Math.max(2 * this.buf.length, this.len + zz));
        uz.set(this.buf.subarray(0, this.len)), this.buf = uz, this.view = new DataView(uz.buffer)
      }
      u8(zz) {
        this.room(1), this.buf[this.len++] = zz
      }
      tagged(zz, uz, bz) {
        this.room(1 + uz), this.buf[this.len++] = zz, 1 === uz ? this.view.setUint8(this.len, bz) : 2 === uz ? this.view.setUint16(this.len, bz) : this.view.setUint32(this.len, bz), this.len += uz
      }
      signed(zz, uz, bz) {
        this.room(1 + uz), this.buf[this.len++] = zz, 1 === uz ? this.view.setInt8(this.len, bz) : 2 === uz ? this.view.setInt16(this.len, bz) : this.view.setInt32(this.len, bz), this.len += uz
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

    function LM(zz, uz, bz, Ez, nz, iz, lz) {
      uz < Ez ? zz.u8(bz | uz) : null !== nz && uz < 256 ? zz.tagged(nz, 1, uz) : uz < 65536 ? zz.tagged(iz, 2, uz) : zz.tagged(lz, 4, uz)
    }

    function PM(zz, uz) {
      switch (typeof uz) {
        case "undefined":
          return void zz.raw(GM);
        case "boolean":
          return void zz.u8(uz ? 195 : 194);
        case "number":
          return void
          function(zz, uz) {
            uz >>> 0 === uz ? uz < 128 ? zz.u8(uz) : uz < 256 ? zz.tagged(204, 1, uz) : uz < 65536 ? zz.tagged(205, 2, uz) : zz.tagged(206, 4, uz) : (uz | 0) === uz ? uz >= -32 ? zz.u8(255 & uz) : uz >= -128 ? zz.signed(208, 1, uz) : uz >= -32768 ? zz.signed(209, 2, uz) : zz.signed(210, 4, uz) : zz.f64(uz)
          }(zz, uz);
        case "string": {
          const bz = JM.encode(uz);
          return LM(zz, bz.length, 160, 32, 217, 218, 219), void zz.raw(bz)
        }
        case "object":
          break;
        default:
          return void zz.u8(192)
      }
      if (null === uz) zz.u8(192);
      else if (Array.isArray(uz)) {
        LM(zz, uz.length, 144, 16, null, 220, 221);
        for (const bz of uz) PM(zz, bz)
      } else if (uz instanceof Uint8Array) LM(zz, uz.length, 0, 0, 196, 197, 198), zz.raw(uz);
      else {
        const bz = Object.keys(uz);
        LM(zz, bz.length, 128, 0, null, 222, 223);
        for (const Ez of bz) PM(zz, Ez), PM(zz, uz[Ez])
      }
    }
    const GM = new Uint8Array([212, 0, 0]);
    var aM = bz(41816),
      VM = bz(41823),
      mM = bz(40213),
      qM = bz(40243),
      hM = bz(3475);
    const UM = [1e3, 3e3, 9e3];
    class cM {
      constructor(zz) {
        this.host = zz, this.sets = new Map, this.table = [], this.generation = 0, this.SZ = !1
      }
      onEvent(zz) {
        const uz = function(zz) {
          if (zz.byteLength !== dz.jd) return null;
          const uz = new DataView(zz.buffer, zz.byteOffset, zz.byteLength);
          return {
            want: uz.getUint16(0, !0),
            release: uz.getUint16(2, !0)
          }
        }(zz);
        uz && !this.SZ && (uz.release !== dz.nd && this.release(uz.release), uz.want !== dz.nd && this.want(uz.want))
      }
      reset(zz) {
        if (!this.SZ) {
          for (const [zz, uz] of this.sets) "ready" === uz.state && this.releaseAll(uz.distinct), this.sets.delete(zz);
          this.table = zz, this.generation++
        }
      }
      dispose() {
        if (this.SZ) return;
        this.SZ = !0, this.generation++, this.table = [];
        const zz = [...this.sets.values()];
        this.sets.clear();
        let uz = null;
        for (const Ez of zz)
          for (const zz of "ready" === Ez.state ? Ez.distinct : []) try {
            this.host.pbz(zz)
          } catch (bz) {
            uz ??= {
              error: bz
            }
          }
        if (uz) throw uz.error
      }
      isReady(zz) {
        var uz;
        return "ready" === (null === (uz = this.sets.get(zz)) || void 0 === uz ? void 0 : uz.state)
      }
      want(zz) {
        const uz = this.sets.get(zz);
        if ("loading" === (null === uz || void 0 === uz ? void 0 : uz.state)) return uz.wanted = !0, void this.capAnswer(zz, uz);
        if ("ready" === (null === uz || void 0 === uz ? void 0 : uz.state)) return void this.host.sendReady(SM(zz, uz.images, uz.size));
        const bz = this.table[zz];
        if (!bz || 1 !== bz.urls.length && bz.urls.length !== Qb.Qb.CubeFaces) return this.host.sendReady(yM(zz)), void this.host.onLoadFailed(zz, "", new Error(`no image set ${zz}`));
        const Ez = {
          state: "loading",
          wanted: !0
        };
        this.sets.set(zz, Ez), this.load(zz, bz, Ez, this.generation, 0), this.capAnswer(zz, Ez)
      }
      capAnswer(zz, uz) {
        this.host.wait(4e3, (() => {
          this.sets.get(zz) === uz && uz.wanted && this.host.sendReady(yM(zz))
        }))
      }
      load(zz, uz, bz, Ez, nz) {
        const iz = [...new Set(uz.urls)];
        Promise.allSettled(iz.map((zz => this.host.loadImage(zz, uz.orientation)))).then((lz => {
          const Mz = lz.flatMap((zz => "fulfilled" === zz.status ? [zz.value] : [])),
            tz = Ez === this.generation && this.sets.get(zz) === bz,
            Hz = lz.findIndex((zz => "rejected" === zz.status));
          if (!tz || !bz.wanted) return this.SZ ? void this.releaseAfterDispose(Mz.map(gM)) : (this.releaseAll(Mz.map(gM)), void(tz && this.sets.delete(zz)));
          Hz < 0 ? this.loaded(zz, uz, iz, Mz) : (this.releaseAll(Mz.map(gM)), this.host.sendReady(yM(zz)), nz < UM.length ? this.host.wait(UM[nz], (() => {
            Ez === this.generation && this.sets.get(zz) === bz && (bz.wanted ? this.load(zz, uz, bz, Ez, nz + 1) : this.sets.delete(zz))
          })) : (this.sets.delete(zz), this.host.onLoadFailed(zz, iz[Hz], lz[Hz].reason)))
        }))
      }
      loaded(zz, uz, bz, Ez) {
        const [nz] = Ez, iz = [nz.width, nz.height], lz = Ez.every((zz => zz.width === iz[0] && zz.height === iz[1])), Mz = uz.urls.length === Qb.Qb.CubeFaces;
        if (!lz || iz[0] <= 0 || iz[1] <= 0 || iz[0] > 65535 || iz[1] > 65535 || Mz && iz[0] !== iz[1]) {
          this.releaseAll(Ez.map(gM)), this.sets.delete(zz), this.host.sendReady(yM(zz));
          const bz = Ez.map((zz => `${zz.width}x${zz.height}`));
          return void this.host.onLoadFailed(zz, uz.urls[0], new Error(`set ${zz}'s images can't make its texture: ${bz.join(", ")}`))
        }
        const tz = uz.urls.map((zz => Ez[bz.indexOf(zz)].id)),
          Hz = Ez.map(gM);
        this.sets.set(zz, {
          state: "ready",
          images: tz,
          distinct: Hz,
          size: iz
        }), this.host.sendReady(SM(zz, tz, iz))
      }
      release(zz) {
        const uz = this.sets.get(zz);
        "loading" === (null === uz || void 0 === uz ? void 0 : uz.state) ? uz.wanted = !1: "ready" === (null === uz || void 0 === uz ? void 0 : uz.state) && (this.releaseAll(uz.distinct), this.sets.delete(zz))
      }
      releaseAll(zz) {
        for (const uz of zz) this.host.pbz(uz)
      }
      releaseAfterDispose(zz) {
        for (const uz of zz) try {
          this.host.pbz(uz)
        } catch {}
      }
    }

    function gM(zz) {
      return zz.id
    }

    function SM(zz, uz, bz) {
      const Ez = new Uint8Array(Qb.Qb.SkyImagesReadyBytes),
        nz = new DataView(Ez.buffer);
      return nz.setUint16(0, zz, !0), nz.setUint16(2, uz.length, !0), nz.setUint16(4, bz[0], !0), nz.setUint16(6, bz[1], !0), uz.slice(0, Qb.Qb.CubeFaces).forEach(((zz, uz) => {
        nz.setUint32(8 + 4 * uz, zz, !0)
      })), Ez
    }

    function yM(zz) {
      const uz = new Uint8Array(Qb.Qb.SkyImagesReadyBytes),
        bz = new DataView(uz.buffer);
      return bz.setUint16(0, zz, !0), bz.setUint16(2, Qb.Qb.Failed, !0), uz
    }
    let DM = Promise.resolve();
    async function QM(zz, uz) {
      let bz;
      try {
        bz = await (0, hM.z)(zz)
      } catch (iz) {
        throw new mM.c("fetch", zz, {
          cause: iz
        })
      }
      const Ez = DM.then((() => async function(zz, uz) {
        const bz = new Blob([zz.slice()]);
        let Ez = await createImageBitmap(bz, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: uz
        });
        const nz = 1024 / Math.max(Ez.width, Ez.height);
        if (nz < 1) {
          const zz = Ez;
          try {
            Ez = await createImageBitmap(zz, {
              resizeWidth: Math.max(1, Math.round(zz.width * nz)),
              resizeHeight: Math.max(1, Math.round(zz.height * nz)),
              resizeQuality: "high",
              premultiplyAlpha: "none",
              colorSpaceConversion: "none"
            })
          } finally {
            zz.close()
          }
        }
        return Ez
      }(bz, uz)));
      let nz;
      DM = Ez.catch((() => {}));
      try {
        nz = await Ez
      } catch (iz) {
        throw new mM.c("decode", zz, {
          cause: iz
        })
      }
      return {
        id: (0, mM.l)(nz),
        width: nz.width,
        height: nz.height
      }
    }
    var WM = bz(2916),
      eM = bz(33745);
    const jM = WM.f.length;

    function IM(zz) {
      const uz = [],
        bz = [];
      WM.f.forEach(((Ez, nz) => {
        var iz;
        const lz = null !== (iz = BM(zz[Ez])) && void 0 !== iz ? iz : eM.o[Ez];
        "custom" === lz.type ? (bz.push({
          id: nz,
          kind: Qb.Qb.KindCustom,
          set: uz.length,
          earth: null
        }), uz.push({
          urls: [lz.px, lz.py, lz.pz, lz.nx, lz.ny, lz.nz],
          orientation: "none"
        })) : bz.push({
          id: nz,
          kind: Qb.Qb.KindEarth,
          set: 0,
          earth: lz
        })
      }));
      const Ez = BM(zz.earth);
      "earth" === (null === Ez || void 0 === Ez ? void 0 : Ez.type) && bz.push({
        id: jM,
        kind: Qb.Qb.KindEarth,
        set: 0,
        earth: Ez
      });
      const nz = uz.length;
      uz.push({
        urls: eM.f.map((zz => eM.i + zz)),
        orientation: "none"
      }), uz.push({
        urls: [eM.k],
        orientation: "flipY"
      }), uz.push({
        urls: [eM.b],
        orientation: "flipY"
      });
      const iz = new Uint8Array(Qb.Qb.SkyTableHeaderBytes + bz.length * Qb.Qb.SkyTableEntryBytes),
        lz = new DataView(iz.buffer);
      return lz.setUint16(0, nz, !0), lz.setUint16(2, nz + 1, !0), lz.setUint16(4, nz + 2, !0), lz.setUint16(6, bz.length, !0), bz.forEach(((zz, uz) => {
        const bz = Qb.Qb.SkyTableHeaderBytes + uz * Qb.Qb.SkyTableEntryBytes;
        lz.setUint16(bz, zz.id, !0), lz.setUint8(bz + 2, zz.kind);
        const Ez = bz + 4;
        zz.earth ? function(zz, uz, bz) {
          const Ez = zz;
          let nz = 0,
            iz = 0;
          for (const [lz, Mz] of CM) {
            const zz = Ez[lz];
            "number" === typeof zz && Number.isFinite(zz) && (uz.setFloat32(bz + 4 * Mz, zz, !0), nz |= 1 << Mz)
          }
          for (const [lz, Mz, tz] of YM) {
            const zz = Ez[lz];
            Array.isArray(zz) && 3 === zz.length && zz.every((zz => "number" === typeof zz && Number.isFinite(zz))) && (zz.forEach(((zz, Ez) => {
              uz.setFloat32(bz + tz + 4 * Ez, zz, !0)
            })), nz |= Mz)
          }
          kM.forEach(((zz, iz) => {
            let [lz, Mz] = zz;
            const tz = Ez[lz];
            "number" === typeof tz && Number.isFinite(tz) && (uz.setFloat32(bz + Qb.o.CameraOffsetAt + 4 * iz, tz, !0), nz |= Mz)
          }));
          for (const [lz, Mz] of zt) {
            const zz = Ez[lz];
            null !== zz && void 0 !== zz && (nz |= Mz, zz && (iz |= Mz >>> 14))
          }
          uz.setUint32(bz + Qb.o.PresentAt, nz, !0), uz.setUint8(bz + Qb.o.FlagsAt, iz)
        }(zz.earth, lz, Ez) : lz.setUint16(Ez, zz.set, !0)
      })), {
        payload: iz,
        sets: uz
      }
    }

    function BM(zz) {
      if ("object" !== typeof zz || null === zz) return null;
      const uz = zz;
      if ("earth" === uz.type) return zz;
      return "custom" === uz.type && ["px", "py", "pz", "nx", "ny", "nz"].every((zz => {
        const bz = uz[zz];
        return "string" === typeof bz && bz.length > 0
      })) ? zz : null
    }
    const CM = [
        ["inclination", Qb.o.Inclination],
        ["turbidity", Qb.o.Turbidity],
        ["luminance", Qb.o.Luminance],
        ["rayleigh", Qb.o.Rayleigh],
        ["mieCoefficient", Qb.o.MieCoefficient],
        ["mieDirectionalG", Qb.o.MieDirectionalG],
        ["distance", Qb.o.Distance],
        ["azimuth", Qb.o.Azimuth]
      ],
      YM = [
        ["sunPosition", Qb.o.SunPosition, Qb.o.SunPositionAt],
        ["up", Qb.o.Up, Qb.o.UpAt],
        ["vertexTint", Qb.o.VertexTint, Qb.o.VertexTintAt]
      ],
      kM = [
        ["xCameraOffset", Qb.o.CameraOffsetX],
        ["yCameraOffset", Qb.o.CameraOffsetY],
        ["zCameraOffset", Qb.o.CameraOffsetZ]
      ],
      zt = [
        ["useSunPosition", Qb.o.UseSunPosition],
        ["dithering", Qb.o.Dithering],
        ["infiniteDistance", Qb.o.InfiniteDistance]
      ];

    function ut(zz, uz, bz) {
      const Ez = new Et({
        writeCmd: zz,
        warn: uz,
        followPack: bt(bz, uz)
      });
      return Ez.start(), Ez
    }

    function bt(zz, uz) {
      return bz => {
        let Ez = () => {};
        const nz = zz((zz => {
          Ez(), Ez = () => {}, null !== zz ? Ez = zz.subscribe((zz => {
            bz(function(zz, uz, bz) {
              if ("object" !== typeof zz || null === zz) return null;
              const Ez = zz.skyBoxes;
              if ("object" !== typeof Ez || null === Ez) return null;
              if ("player" === uz) return Ez;
              return Object.fromEntries(Object.entries(Ez).filter((zz => {
                let [uz, Ez] = zz;
                return !! function(zz) {
                  if ("object" !== typeof zz || null === zz) return !1;
                  return "earth" === zz.type || Object.entries(zz).every((zz => {
                    let [uz, bz] = zz;
                    return "type" === uz || ("" === (Ez = bz) || null !== function(zz) {
                      var uz, bz, Ez;
                      return "string" !== typeof zz ? null : null !== (uz = null === (bz = nt.exec(zz)) || void 0 === bz || null === (Ez = bz.groups) || void 0 === Ez ? void 0 : Ez.base64) && void 0 !== uz ? uz : null
                    }(Ez));
                    var Ez
                  }))
                }(Ez) || (bz(`Ignoring texture pack skybox ${uz}, whose faces are not all data URLs`, null), !1)
              })))
            }(zz.pack, null === zz.gameSource ? "player" : "customGame", uz))
          })) : bz(null)
        }));
        return () => {
          nz(), Ez()
        }
      }
    }
    class Et {
      constructor(zz) {
        var uz, bz, Ez;
        this.host = zz, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.SZ = !1, this.wait = null !== (uz = zz.wait) && void 0 !== uz ? uz : (zz, uz) => {
          setTimeout(uz, zz)
        }, this.loader = new cM({
          loadImage: null !== (bz = zz.loadImage) && void 0 !== bz ? bz : QM,
          pbz: null !== (Ez = zz.pbz) && void 0 !== Ez ? Ez : mM.m,
          sendReady: zz => {
            this.queue.push({
              kind: Qb.Qb.SkyImagesReady,
              payload: zz
            })
          },
          onLoadFailed: (uz, bz, Ez) => {
            zz.warn(`sky image set ${uz} (${bz}) didn't load: the last sky stays`, Ez)
          },
          wait: this.wait
        })
      }
      start() {
        this.wait(qM.c, (() => {
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
        this.SZ = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
      }
      write(zz) {
        if (this.SZ) return;
        const uz = IM(zz);
        var bz, Ez;
        this.written && (bz = this.written, Ez = uz, bz.payload.length === Ez.payload.length && bz.payload.every(((zz, uz) => zz === Ez.payload[uz])) && bz.sets.length === Ez.sets.length && bz.sets.every(((zz, uz) => {
          const bz = Ez.sets[uz];
          return zz.orientation === bz.orientation && zz.urls.length === bz.urls.length && zz.urls.every(((zz, uz) => zz === bz.urls[uz]))
        }))) || (this.written = uz, this.loader.reset(uz.sets), this.queue = this.queue.filter((zz => zz.kind !== Qb.Qb.SkyImagesReady)), this.queue.push({
          kind: Qb.Qb.SkyTable,
          payload: uz.payload
        }))
      }
    }
    const nt = /^data:[\w.+/-]*;base64,(?<base64>[A-Za-z0-9+/]*={0,2})$/;
    var it = bz(2666),
      lt = bz(2748),
      Mt = bz(307),
      tt = bz(176),
      Ht = bz(2672),
      Ot = bz(2674),
      pt = bz(277),
      dt = bz(284),
      Ft = bz(2697),
      Zt = bz(2715),
      Rt = bz(2730),
      Kt = bz(111),
      wt = bz(298),
      Xt = bz(40013);
    class ft {
      constructor() {
        this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, cn.i)(KE.L, (zz => {
          this.onReply((0, Un.i)(KE.L, zz), performance.now())
        }))
      }
      onFrame(zz, uz) {
        null === this.id ? this.id = zz : zz !== this.id && (this.id = zz, this.sentMs = document.hidden ? null : uz)
      }
      onVisibilityChange() {
        this.sentMs = null
      }
      onReply(zz, uz) {
        zz === this.id && null !== this.sentMs && (this.roundTripMs = Math.round(uz - this.sentMs), this.sentMs = null)
      }
      take() {
        const zz = this.roundTripMs;
        return this.roundTripMs = null, zz
      }
      stop() {
        this.stopReplies()
      }
    }
    class st {
      constructor() {
        this.sampled = 0, this.timed = 0, this.frameUs = 0, this.primed = !1, this.windowTimed = 0, this.windowUs = 0
      }
      onFrame(zz, uz, bz, Ez) {
        const nz = zz - this.sampled >>> 0,
          iz = uz - this.timed >>> 0,
          lz = bz - this.frameUs >>> 0,
          Mz = this.primed;
        return this.sampled = zz, this.timed = uz, this.frameUs = bz, this.primed = !0, !(!Mz || nz > 64 || iz > 64) && (Ez && lz <= 1e6 * iz && (this.windowTimed += iz, this.windowUs += lz), Ez && nz > 0)
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
    const rt = {
      pacedShare: null,
      switchesPerHour: null,
      lagP50Ms: null,
      lagP90Ms: null,
      joinLagP90Ms: null
    };
    class ot {
      constructor() {
        this.samples = new Float64Array(4096), this.count = 0
      }
      add(zz, uz) {
        const bz = Math.min(4096, this.count + uz);
        this.samples.fill(zz, this.count, bz), this.count = bz
      }
      clear() {
        this.count = 0
      }
      take(zz) {
        const uz = this.count;
        if (this.count = 0, uz < 30) return null;
        const bz = this.samples.subarray(0, uz).sort();
        return zz.map((zz => bz[Math.min(uz - 1, Math.floor(zz * uz))]))
      }
    }
    class Nt {
      constructor() {
        this.word = 0, this.lagUs = 0, this.primed = !1, this.lastDrawnMs = -1, this.tieredMs = 0, this.pacedMs = 0, this.switches = 0, this.lags = new ot, this.inJoin = !1, this.rose = !1, this.joinLags = new ot, this.joinLagP90Ms = null
      }
      onFrame(zz, uz, bz, Ez, nz) {
        const iz = zz.headerWord(Qb.A.Pacing),
          lz = zz.headerWord(Qb.A.PacingLagUs),
          Mz = (iz >>> Qb.P.LagsShift) - (this.word >>> Qb.P.LagsShift) & Qb.P.CountMask,
          tz = (iz >>> Qb.P.SwitchesShift) - (this.word >>> Qb.P.SwitchesShift) & Qb.P.CountMask,
          Hz = Mz > 0 ? (lz - this.lagUs >>> 0) / Mz / 1e3 : 0,
          Oz = this.primed && Mz <= 64 && tz <= 2 && Hz <= 6e4;
        if (this.rose = 0 !== (iz & ~this.word & Qb.P.Joining), this.word = iz, this.lagUs = lz, this.primed = !0, 0 !== (iz & Qb.P.Tiered)) {
          if (0 !== (iz & Qb.P.Joining)) this.rose && (this.inJoin = !0, this.joinLags.clear()), this.inJoin && Oz && Ez && Mz > 0 && this.joinLags.add(Hz, Mz);
          else if (this.inJoin) {
            var pz, dz;
            this.inJoin = !1, this.joinLagP90Ms = null !== (pz = null === (dz = this.joinLags.take([.9])) || void 0 === dz ? void 0 : dz[0]) && void 0 !== pz ? pz : null
          }
          if (nz) {
            if (Oz && (this.switches += tz, Mz > 0 && this.lags.add(Hz, Mz)), bz) {
              if (this.lastDrawnMs >= 0 && uz - this.lastDrawnMs <= 250) {
                const zz = uz - this.lastDrawnMs;
                this.tieredMs += zz, (iz & Qb.P.AheadMask) > 0 && (this.pacedMs += zz)
              }
              this.lastDrawnMs = uz
            }
          } else this.lastDrawnMs = -1
        } else this.lastDrawnMs = -1
      }
      onJoin() {
        this.takeWindow(), this.rose || (this.inJoin = !1, this.joinLags.clear()), this.lastDrawnMs = -1
      }
      snapshotAndReset(zz) {
        const uz = this.takeWindow(),
          bz = this.joinLagP90Ms;
        return this.joinLagP90Ms = null, zz ? {
          ...uz,
          joinLagP90Ms: bz
        } : {
          ...rt,
          joinLagP90Ms: bz
        }
      }
      unsent(zz) {
        this.joinLagP90Ms ??= zz.joinLagP90Ms
      }
      takeWindow() {
        var zz, uz;
        const bz = this.tieredMs >= 2e3,
          Ez = this.lags.take([.5, .9]),
          nz = {
            pacedShare: bz ? this.pacedMs / this.tieredMs : null,
            switchesPerHour: bz ? 36e5 * this.switches / this.tieredMs : null,
            lagP50Ms: null !== (zz = null === Ez || void 0 === Ez ? void 0 : Ez[0]) && void 0 !== zz ? zz : null,
            lagP90Ms: null !== (uz = null === Ez || void 0 === Ez ? void 0 : Ez[1]) && void 0 !== uz ? uz : null
          };
        return this.tieredMs = 0, this.pacedMs = 0, this.switches = 0, nz
      }
    }
    var vt = bz(8913),
      xt = bz(2646),
      Jt = bz(40099),
      At = bz(8911),
      Tt = bz(2683),
      Lt = bz(2663);
    const Pt = {
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

    function Gt(zz) {
      return new Vt(zz)
    }
    class Vt {
      constructor(zz) {
        this.shell = zz, this.tracker = new Ot.e, this.gpu = new st, this.pacing = new Nt, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.fpsOverTime = null, this.firstSpanFps = null, this.initialFps = null, this.ping = new ft, this.pacedCpuMs = 0, this.frameDebug = null, this.onVisibility = () => {
          this.tracker.onVisibilityChange(), this.ping.onVisibilityChange(), !document.hidden && this.fpsSpanStartMs >= 0 && (this.fpsFrames = 0, this.fpsSpanStartMs = performance.now())
        }, (0, vt.d)(zz.backend, zz.canvas, zz.adapterVendor), this.tracker.start((() => !zz.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), (0, Tt.b)("wasm", (() => {
          const {
            n: uz,
            sampleCount: bz
          } = (0, Jt.f)();
          return `${zz.backend}, quality steps aim at up to ${Lt.e.target.maxFps} fps, pixel n ${uz}, msaa ${bz}`
        }), (zz => {
          this.frameDebug = zz
        })), this.timers.push(setInterval((() => {
          this.flush(), this.fpsOverTime = null, this.initialFps = null
        }), 1e4), setInterval((() => {
          this.followGame() && (this.hasFlushedSinceConnect || (this.flush(), this.hasFlushedSinceConnect = !0))
        }), 250))
      }
      animationFrame(zz) {
        var uz;
        this.tracker.onAnimationFrame(zz), null === (uz = this.frameDebug) || void 0 === uz || uz.animationFrame()
      }
      frameRan(zz, uz, bz, Ez) {
        var nz;
        this.ping.onFrame(zz.headerWord(Qb.A.PingSent), bz);
        const iz = this.tracker;
        this.pacing.onFrame(zz, uz, "drawn" === Ez, !document.hidden, iz.isSampling());
        const lz = zz.headerWord(Qb.A.TickUs) / 1e3 + (0, uE.O)();
        iz.Hs(lz), null === (nz = this.frameDebug) || void 0 === nz || nz.wasmFrame(zz, uz, bz, "drawn" === Ez, iz.isSampling(), lz, (0, At.e)());
        const Mz = Math.max(0, bz - uz - lz);
        if ("drawn" !== Ez) return void("paced" === Ez && (this.pacedCpuMs += Mz));
        this.followGame(), iz.onFrameStart(uz);
        this.gpu.onFrame(zz.headerWord(Qb.A.GpuSampled), zz.headerWord(Qb.A.GpuTimed), zz.headerWord(Qb.A.GpuFrameUs), iz.isSampling()) && iz.onGpuSampleStarted(), iz.onFrameCpu(Mz + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(uz)
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
        const uz = zz - this.fpsSpanStartMs;
        if (!(uz < Rt.c)) {
          if (!document.hidden) {
            const zz = 1e3 * this.fpsFrames / uz;
            this.firstSpanFps ??= zz, this.initialFps = this.firstSpanFps, this.fpsOverTime = zz
          }
          this.fpsFrames = 0, this.fpsSpanStartMs = zz
        }
      }
      flush() {
        const zz = this.followGame(),
          {
            cpuFrameMs: uz,
            refreshHz: bz,
            cpuBottleneck: nz,
            frameIntervalCv: iz,
            ...lz
          } = this.tracker.snapshotAndReset(),
          Mz = this.shell.inGame(),
          tz = Mz && this.inGameAtLastFlush,
          Hz = tz ? lz : Ht.f,
          Oz = this.pacing.snapshotAndReset(tz);
        if (this.inGameAtLastFlush = Mz, this.pendingLightFailures += this.shell.takeFailedMeshJobs(), !zz) return void this.pacing.unsent(Oz);
        const pz = performance.now(),
          Fz = (0, Zt.x)((0, Zt.t)(pz), this.unsentPage),
          Rz = function(zz, uz, bz, nz, iz, lz, Mz, tz) {
            var Hz, Oz, pz, dz;
            const Fz = {},
              {
                canvas: Zz
              } = zz,
              Rz = (0, Ft.e)({
                refreshHz: uz.refreshHz,
                msaa: zz.msaa(),
                autoMsaaOff: (0, At.c)()
              });
            for (const Kz of (0, lt.f)()) {
              const wz = Kz.name;
              let Xz;
              if ((0, Mt.o)(wz)) Xz = (0, Zt.c)(wz);
              else if ((0, Zt.j)(wz)) Xz = tz[wz];
              else if ((0, Ft.f)(wz)) Xz = Rz[wz];
              else switch (wz) {
                case "fps":
                  Xz = nz;
                  break;
                case "CM":
                  Xz = iz;
                  break;
                case "Et":
                  Xz = (0, xt.w)((0, Jt.f)().n);
                  break;
                case "lt":
                  Xz = Math.max(Zz.width, Zz.height);
                  break;
                case "Mt":
                  Xz = Math.min(Zz.width, Zz.height);
                  break;
                case "tt":
                  Xz = navigator.hardwareConcurrency || null;
                  break;
                case "Ht":
                  Xz = (0, Wn.getWebGpuSupported)();
                  break;
                case "Ot":
                  Xz = null === zz.fallbackReason ? null : Pt[zz.fallbackReason];
                  break;
                case "dt":
                  Xz = uz.cpuFrameMs;
                  break;
                case "Ft":
                  Xz = uz.refreshHz;
                  break;
                case "Zt":
                  Xz = uz.cpuBottleneck;
                  break;
                case "Rt":
                  Xz = uz.frameIntervalCv;
                  break;
                case "Kt":
                  Xz = uz.frameMs;
                  break;
                case "Xt":
                  Xz = uz.tickMs;
                  break;
                case "Nt":
                  Xz = uz.mainBusyShare;
                  break;
                case "vt":
                  Xz = uz.mainProbeDelayMs;
                  break;
                case "ft":
                  Xz = uz.longAnimationFramesPerMin;
                  break;
                case "rt":
                  Xz = uz.longAnimationFrameTimeShare;
                  break;
                case "ot":
                  Xz = uz.longAnimationFrameScriptShare;
                  break;
                case "xt":
                  Xz = uz.gpuPassMs;
                  break;
                case "Jt":
                  Xz = uz.gpuSubmitToDoneMs;
                  break;
                case "Tt":
                  Xz = bz.pacedShare;
                  break;
                case "Lt":
                  Xz = bz.switchesPerHour;
                  break;
                case "Pt":
                  Xz = bz.lagP50Ms;
                  break;
                case "Gt":
                  Xz = bz.lagP90Ms;
                  break;
                case "Vt":
                  Xz = bz.joinLagP90Ms;
                  break;
                case "Bt":
                  Xz = (0, it.h)(lz);
                  break;
                case "ut":
                  Xz = Mz;
                  break;
                case "qt":
                case "Ut":
                case "ct":
                case "gt":
                case "St":
                case "yt":
                case "Dt":
                case "Qt":
                case "Wt":
                case "et":
                case "jt":
                case "Ct":
                case "Yt":
                case "kt":
                case "zH":
                  Xz = null;
                  break;
                case "FH":
                  Xz = (0, Wn.getPlatformType)();
                  break;
                case "ZH":
                  Xz = (0, Wn.getGpuVendor)();
                  break;
                case "RH":
                  Xz = Xt.e[zz.backend];
                  break;
                case "KH":
                  Xz = (0, Kt.e)();
                  break;
                case "wH":
                  Xz = (0, Wn.getOperatingSystem)();
                  break;
                case "XH":
                  Xz = (0, Wn.getTrafficSource)();
                  break;
                case "fH":
                  Xz = null !== (Hz = Ez.e.get("gameEntrySource")) && void 0 !== Hz ? Hz : tt.g;
                  break;
                case "sH":
                  Xz = uz.frameLimiter;
                  break;
                case "rH":
                  Xz = (0, pt.j)();
                  break;
                case "oH":
                  Xz = null !== (Oz = (0, dt.c)()) && void 0 !== Oz ? Oz : tt.g;
                  break;
                case "NH":
                  Xz = (0, pt.e)(Zz.width, Zz.height);
                  break;
                case "vH":
                  Xz = (0, lt.j)(-(new Date).getTimezoneOffset());
                  break;
                case "AH":
                  Xz = null !== (pz = zz.fallbackReason) && void 0 !== pz ? pz : tt.g;
                  break;
                case "PH":
                  Xz = "ready";
                  break;
                case "GH":
                  Xz = (0, Wn.getSoftwareRenderer)();
                  break;
                case "JH":
                  Xz = null !== zz.shaderPackReach() ? "true" : "false";
                  break;
                case "aH":
                  Xz = null !== (dz = zz.shaderPackReach()) && void 0 !== dz && dz.sceneDepth ? "true" : "false";
                  break;
                case "VH": {
                  const uz = zz.shaderPackReach();
                  Xz = null !== uz && void 0 !== uz && uz.sunShadow ? "all" : null !== uz && void 0 !== uz && uz.airShadow ? "air" : "none";
                  break
                }
                case "mH":
                  Xz = wt.t;
                  break;
                case "xH":
                case "TH":
                case "LH":
                  Xz = tt.g;
                  break;
                default:
                  throw new Error(`Unhandled field name: ${wz}`)
              }
              if (void 0 === Xz) throw new Error(`Metric ${wz} has no value`);
              Fz[wz] = Xz
            }
            return Fz
          }(this.shell, {
            cpuFrameMs: uz,
            refreshHz: bz,
            cpuBottleneck: nz,
            frameIntervalCv: iz,
            ...Hz
          }, Oz, this.fpsOverTime, this.initialFps, this.pendingLightFailures, this.ping.take(), Fz);
        if (! function(zz, uz, bz) {
            return (0, yu.d)(), zz(Zz.p.Send, uz, bz)
          }(this.shell.writeCmd, dz.fd, function(zz) {
            const uz = (0, qz.c)((0, Wu.e)(zz)),
              bz = new Uint8Array(Zz.$d.BYTES + uz.length);
            return new DataView(bz.buffer).setUint16(0, Wu.d.AnalyticsUpdate, !0), bz.set(uz, Zz.$d.BYTES), bz
          }(Rz))) return this.unsentPage = Fz, this.pacing.unsent(Oz), void(0 === this.sendsDropped++ && console.warn("[wasm-client] an analytics update found the cmd ring full: dropped"));
        this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, it.g), (0, Zt.q)(Rz, "wasm", pz)
      }
    }
    var mt = bz(38955);

    function qt(zz, uz, bz) {
      const Ez = new Map;
      return (0, mt.b)(((zz, bz, Ez) => uz.hO(zz, bz, Ez)), ((uz, bz, nz) => {
        const iz = `${uz},${bz},${nz}`;
        return Ez.has(iz) || Ez.set(iz, (0, qu.b)(zz, uz, bz, nz)), Ez.get(iz)
      }), bz)
    }
    var ht = bz(38961),
      Ut = bz(39881);

    function ct(zz) {
      const uz = null !== zz && 0 !== (Zz.z.playerFlags(zz.api.apiView, 0) & Zz.Id.CursorAim);
      uz !== (0, Ut.r)() && (0, Ut.E)(uz, null !== zz)
    }

    function gt(zz) {
      return (0, RE.d)(KE.D, zz)
    }
    const St = new iz.g((zz => bz(41830)(`./${zz}/${zz}Client`)));
    let yt = null,
      Dt = null;
    async function Qt(zz) {
      yt ??= bz.e(27).then((() => bz(38489))).then((zz => {
        Dt = zz.createDefaultClientPlugins
      }), (zz => {
        throw yt = null, zz
      })), await Promise.all([St.load(zz), yt])
    }

    function Wt(zz) {
      zz.load(new Vu(gE, new DE))
    }
    let et = !1;
    const jt = new WeakMap;

    function It(zz) {
      try {
        zz()
      } catch (uz) {
        console.error("[bloxd-wasm-client] a session-end step failed", uz)
      }
    }

    function Bt(zz, uz) {
      ! function() {
        var zz, uz;
        UE.Howler.volume();
        const bz = UE.Howler;
        null === (zz = bz._autoResume) || void 0 === zz || zz.call(bz), null === (uz = bz._autoSuspend) || void 0 === uz || uz.call(bz)
      }(), uz.audio.prepare();
      const bz = new sz(uz.core, uz.memory, uz.audio);
      let iz;
      try {
        iz = new Fn(bz, uz.options)
      } catch (dz) {
        return zz.crash(Rn.z, dz), null
      }(0, tz.e)(Zn(bz, iz));
      const Oz = new NM({
        running: zz,
        api: bz,
        core: uz.core,
        memory: uz.memory,
        staleOr: uz.staleOr,
        reportFault: uz.reportReplayFault,
        options: uz.options,
        sessionInfo: uz.sessionInfo,
        replayShaderPack: uz.replayShaderPack
      });
      (0, uE.F)();
      const pz = new aE({
        api: bz,
        tables: iz,
        sessionInfo: uz.sessionInfo,
        gameFactory: zz => St.loadedFactory(zz),
        defaultPlugins: (zz, uz, bz, Ez) => {
          if (null === Dt) throw new Error("The default plugins started before they loaded");
          return Dt(zz, uz, bz, Ez)
        },
        serverOptions: uz.options,
        onNetEvent: zz => {
          Oz.netEvent(zz), uz.onNetEvent(zz)
        },
        setLocalOptions: uz => {
          xM(zz, {
            changes: uz,
            reset: !1
          })
        },
        playSound: (zz, bz, Ez, nz, iz, lz, Mz) => uz.audio.playGame(zz, bz, Ez, nz, iz, lz, Mz),
        onSessionEnd: () => {
          It(nz.n), It(CE), It((() => {
            Ez.e.set({
              openInGameMenuName: null
            })
          })), It((() => {
            uz.audio.cancelPreload()
          }))
        },
        beforeWrite: uz.beforeWrite,
        beforeOp: uz.beforeOp,
        cameraScreen: BE,
        showCameraFacing: YE,
        onEventOverflow: uz.onEventOverflow,
        screenBandY: Mz.k,
        replayEntities: Oz.entityHooks,
        hasPackModel: uz.hasPackModel
      });
      return pz.attach(zz), jt.set(pz, Oz), hE(pz.items, uz.audio),
        function(zz) {
          zz.setClientFreeCameraGrant("isDev", !1);
          const uz = uz => {
            zz.setClientFreeCameraGrant("hasDeveloperRank", uz.playerHasRank("developer"))
          };
          (0, lz.o)("userContextUpdated", uz)
        }(pz), et || (et = !0, (0, lz.o)("appManagerUpdated|openInGameMenuName", (zz => {
          !zz && (0, Hz.h)().includes(Hz.b) && (0, Hz.k)(Hz.b)
        }))), pz
    }

    function Ct(zz) {
      try {
        zz.closeGame()
      } finally {
        var uz;
        null === (uz = jt.get(zz)) || void 0 === uz || uz.stop(), jt.delete(zz)
      }
    }
  },
  40013: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Ez
    });
    const Ez = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  40025: (zz, uz, bz) => {
    function Ez() {
      return bz(40027)
    }

    function nz() {
      return bz(40036)
    }

    function iz(zz) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(zz)
    }
    bz.d(uz, {
      e: () => iz,
      i: () => Ez,
      m: () => nz
    })
  },
  39979: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => nz,
      e: () => lz
    });
    const Ez = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function nz(zz) {
      if (zz instanceof WebAssembly.RuntimeError) return !0;
      const uz = zz instanceof Error ? zz.stack : void 0;
      return "string" === typeof uz && Ez.test(uz)
    }
    const iz = 500;

    function lz(zz) {
      let uz = "[object Object]";
      try {
        uz = String(zz)
      } catch {}
      if ("[object Object]" !== uz) return uz;
      try {
        var bz, Ez;
        return null !== (bz = null === (Ez = JSON.stringify(zz)) || void 0 === Ez ? void 0 : Ez.slice(0, iz)) && void 0 !== bz ? bz : uz
      } catch {
        return uz
      }
    }
  },
  40027: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  40036: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);