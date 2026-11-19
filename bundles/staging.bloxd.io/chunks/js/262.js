export const id = 262;
export const ids = [262];
export const modules = {
  40187: (zz, uz, bz) => {
    function Ez(zz, uz, bz) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(zz, uz).getContext("2d", bz);
      const Ez = document.createElement("canvas");
      return Ez.width = zz, Ez.height = uz, Ez.getContext("2d", bz)
    }

    function nz(zz, uz) {
      return zz.getContext("2d", uz)
    }
    bz.d(uz, {
      b: () => nz,
      e: () => Ez
    })
  },
  40116: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => fz,
      f: () => Zz,
      h: () => Qz,
      j: () => Az,
      n: () => Lz,
      o: () => Pz,
      q: () => Xz,
      u: () => Kz,
      v: () => wz,
      z: () => Jz,
      C: () => gz,
      E: () => oz,
      H: () => qz,
      J: () => Dz,
      K: () => Gz,
      N: () => Vz
    });
    var Ez = bz(4560),
      nz = bz(39800),
      iz = (bz(39987), bz(11));
    class lz {
      constructor(zz, uz) {
        this.memory = zz, this.access = uz, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.Bp = 0, this.u32 = new iz.i(0), this.f32 = new iz.c(0), this.u8 = new iz.b(0), this.dataView = new iz.e(new ArrayBuffer(0)), this.refresh()
      }
      refresh() {
        this.ptr = this.access.ptr(), this.Bp = this.access.Bp(), this.buffer = (0, iz.F)(this.memory()), this.u32 = new iz.i(this.buffer, this.ptr, this.Bp >>> 2), this.f32 = new iz.c(this.buffer, this.ptr, this.Bp >>> 2), this.u8 = new iz.b(this.buffer, this.ptr, this.Bp), this.dataView = new iz.e(this.buffer, this.ptr, this.Bp)
      }
      ensureViews() {
        (0, iz.F)(this.memory()) !== this.buffer && this.refresh()
      }
      get view() {
        return this.ensureViews(), this.dataView
      }
      room(zz) {
        return !!this.fits(zz) || (this.dropped++, !1)
      }
      fits(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.cursor;
        this.ensureViews();
        const bz = uz + zz;
        return bz <= this.Bp || bz <= Ez.Bc && 0 !== this.access.reserve(bz) && (this.refresh(), bz <= this.Bp)
      }
      consume(zz) {
        const uz = this.cursor - zz;
        uz > 0 && zz > 0 && (this.ensureViews(), this.u8.copyWithin(0, zz, this.cursor)), this.cursor = uz > 0 ? uz : 0
      }
      writeRecord(zz, uz, bz, nz, iz) {
        if (!this.room(Ez.mb)) return !1;
        const lz = this.cursor >>> 2;
        return this.u32[lz] = 65535 & zz | (65535 & uz) << 16, this.f32[lz + 1] = bz, this.f32[lz + 2] = nz, this.u32[lz + 3] = iz >>> 0, this.cursor += Ez.mb, !0
      }
      writeOptions(zz, uz) {
        const bz = uz.byteLength,
          nz = Ez.mb + (0, Ez.ie)(bz);
        if (!this.fits(nz)) return !1;
        const iz = this.cursor,
          lz = iz >>> 2;
        this.u32[lz] = Ez.pb.Options, this.u32[lz + 1] = bz, this.u32[lz + 2] = 0, this.u32[lz + 3] = zz >>> 0;
        const Mz = iz + Ez.mb;
        return this.u8.set(uz, Mz), this.u8.fill(0, Mz + bz, iz + nz), this.cursor += nz, !0
      }
      writeWorkerRecord(zz, uz, bz, nz, iz, lz) {
        const Mz = lz.byteLength,
          tz = Ez.Bd + (0, Ez.ie)(Mz);
        if (Mz > Ez.xd) return this.dropped++, !1;
        if (!this.room(tz)) return !1;
        const Hz = this.cursor,
          Oz = Hz >>> 2;
        this.u32[Oz] = zz >>> 0, this.u32[Oz + 1] = 65535 & uz | (65535 & bz) << 16, this.u32[Oz + 2] = nz >>> 0, this.u32[Oz + 3] = iz >>> 0, this.u32[Oz + 4] = Mz;
        const pz = Hz + Ez.Bd;
        return this.u8.set(lz, pz), this.u8.fill(0, pz + Mz, Hz + tz), this.cursor += tz, !0
      }
      written() {
        return this.ensureViews(), this.u8.subarray(0, this.cursor)
      }
      writeFrame(zz, uz) {
        return this.writeNet(Ez.Qb.Frame, zz, uz)
      }
      writeOpen(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(Ez.Qb.Open, zz, tz(uz))
      }
      writeClose(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(Ez.Qb.Close, zz, tz(uz))
      }
      writeNet(zz, uz, bz) {
        const nz = bz.byteLength,
          iz = Ez.Pb + (0, Ez.ie)(nz);
        if (nz > Ez.Jb) return this.dropped++, !1;
        if (!this.room(iz)) return !1;
        const lz = this.cursor;
        this.u32[lz >>> 2] = nz, this.u32[1 + (lz >>> 2)] = (0, Ez.de)(zz, uz);
        const Mz = lz + Ez.Pb;
        return this.u8.set(bz, Mz), this.u8.fill(0, Mz + nz, lz + iz), this.cursor += iz, !0
      }
      QF(zz, uz, bz) {
        const nz = Ez.p + (0, Ez.ie)(bz);
        if (!this.room(nz)) return -1;
        const iz = this.cursor;
        this.u32[iz >>> 2] = 65535 & zz | (65535 & uz) << 16, this.u32[1 + (iz >>> 2)] = bz;
        const lz = iz + Ez.p;
        return this.u8.fill(0, lz, iz + nz), this.cursor += nz, lz
      }
      growForCmd(zz) {
        return this.fits(Ez.p + (0, Ez.ie)(zz), 0)
      }
      writeCmd(zz, uz, bz) {
        const Ez = this.QF(zz, uz, bz.byteLength);
        return !(Ez < 0) && (this.u8.set(bz, Ez), !0)
      }
      copyWritten(zz, uz) {
        return this.ensureViews(), this.u8.slice(zz, zz + uz)
      }
    }
    const Mz = new iz.b(0);

    function tz(zz) {
      if (0 === zz) return Mz;
      const uz = new iz.b(Ez.Nb);
      for (let bz = 0; bz < Ez.Nb; bz++) uz[bz] = zz >>> 8 * bz & 255;
      return uz
    }
    class Hz {
      constructor(zz, uz) {
        this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new lz(uz, {
          ptr: () => zz.pd(),
          Bp: () => zz.Inz(),
          reserve: uz => zz.tiz(uz)
        }), this.net = new lz(uz, {
          ptr: () => zz.Eiz(),
          Bp: () => zz.biz(),
          reserve: uz => zz.Hiz(uz)
        }), this.worker = new lz(uz, {
          ptr: () => zz.Piz(),
          Bp: () => zz.Liz(),
          reserve: uz => zz.Oiz(uz)
        }), this.cmd = new lz(uz, {
          ptr: () => zz.Unz(),
          Bp: () => zz.qnz(),
          reserve: uz => zz.hnz(uz)
        })
      }
      reset(zz) {
        this.input.cursor = 0, this.worker.cursor = 0, this.cmd.consume(zz)
      }
    }
    var Oz = bz(39979),
      pz = bz(2294),
      dz = bz(4552),
      Fz = bz(40123);
    const Zz = "coreFrame",
      Rz = "fatalStatus",
      Kz = "otherCall",
      wz = "coreRings",
      Xz = "netIn",
      fz = "abi",
      sz = "netOut",
      rz = "workerOut",
      oz = "worldgenHost",
      Nz = "eventWalker",
      vz = "netEvent",
      xz = "envEvent",
      Jz = "sharedTables",
      Az = "inputAction",
      Tz = new Set([Nz, vz, xz, Az, Jz]),
      Lz = "wasmMemory",
      Pz = "meshHost";

    function Gz(zz, uz) {
      zz.forEachWorkerOut(((bz, nz, iz) => {
        if ((0, Ez._d)(bz)) try {
          var lz;
          null === (lz = uz.worldgen) || void 0 === lz || lz.take(bz, iz)
        } catch (tz) {
          zz.crash(oz, tz)
        } else try {
          var Mz;
          null === (Mz = uz.mesh) || void 0 === Mz || Mz.take(bz, nz, iz)
        } catch (tz) {
          zz.crash(Pz, tz)
        }
      }))
    }
    const az = 1048576;

    function Vz(zz, uz) {
      let bz = !1;
      const Ez = () => {
        bz = !1, uz()
      };
      return () => {
        !bz && zz.cursor >= az && (bz = !0, queueMicrotask(Ez))
      }
    }
    const mz = new Set([Rz, Kz, oz, Pz]);

    function qz(zz) {
      return Tz.has(zz.site) ? zz.error instanceof WebAssembly.RuntimeError || (0, nz.l)(zz.error) : !mz.has(zz.site) && zz.error instanceof Error
    }
    const hz = "events",
      Uz = [],
      cz = "debugLog",
      gz = "terrainTextures",
      Sz = "sunShadowTextures",
      yz = new TextDecoder;

    function Dz(zz, uz) {
      const {
        site: bz,
        error: nz,
        header: iz
      } = zz, lz = iz ? (0, Ez.Td)(iz.lastError) : "noFrame", Mz = `CORE-${bz===Rz?lz:bz}`, tz = null === nz || void 0 === nz ? "" : ` ${(0,Oz.e)(nz)}`, Hz = {
        site: bz,
        wasmBuild: uz.wasm,
        clientVersion: uz.client
      };
      return iz && (Hz.status = String(iz.status), Hz.lastError = lz, Hz.lastErrorCode = String(iz.lastError), Hz.lastErrorDetail = String(iz.lastErrorDetail), Hz.errorCount = String(iz.errorCount), Hz.frameIndex = String(iz.frameIndex), Hz.tickIndex = String(iz.tickIndex)), {
        code: Mz,
        message: `core ${bz}, last error ${lz};${tz}`,
        details: Hz
      }
    }
    class Qz {
      constructor(zz, uz, bz) {
        this.core = zz, this.memory = uz, this.handlers = bz, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.unsentUiPrefs = null, this.eventWalker = null, this.netOffsets = [], this.frameEvents = {
          ptr: 0,
          len: 0,
          net: Uz,
          netOffsets: this.netOffsets,
          kind: "none"
        }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.rings = new Hz(zz, uz)
      }
      get netKeptFrames() {
        return this.keptFrames
      }
      get netWrittenSinceFrame() {
        return this.rings.net.cursor - this.netKept
      }
      hasPendingCommands() {
        return this.rings.cmd.cursor > 0
      }
      framePaces(zz) {
        if (this.stopped || this.drawsHeld) return !1;
        try {
          return this.core.Qnz(zz)
        } catch (uz) {
          return this.crash(Zz, uz), !1
        }
      }
      get isStopped() {
        return this.stopped
      }
      frame(zz, uz) {
        var bz;
        let iz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.stopped) return !1;
        if (!this.writePendingInput()) return !1;
        const {
          input: lz,
          net: Mz,
          worker: tz,
          cmd: Hz
        } = this.rings, Oz = Mz.cursor, pz = uz && !this.drawsHeld;
        let Kz = Ez.H.Fatal;
        const wz = Hz.cursor;
        let fz = null;
        try {
          const uz = (pz ? Ez.Z.Draws : 0) | (iz ? Ez.Z.NetAll : 0);
          Kz = (0, Fz.d)((() => this.core.frame(zz, lz.cursor, Mz.cursor, tz.cursor, uz, wz)))
        } catch (mz) {
          fz = {
            error: mz
          }
        }
        const sz = null === (bz = this.gameHost) || void 0 === bz ? void 0 : bz.takeFault();
        this.rings.reset(this.stopped || null !== fz || void 0 !== sz ? Hz.cursor : wz);
        const rz = null === fz && void 0 === sz ? this.headerView() : null,
          oz = null === rz ? null : (0, Ez.me)(rz);
        null !== oz && (this.lastHeader = oz);
        const xz = null !== oz && Kz !== Ez.H.Fatal,
          Jz = xz && null !== rz ? rz[Ez.db.NetInKept] : 0,
          Az = xz && Jz <= Oz && Jz % 4 === 0 ? Jz : null;
        var Tz, Lz;
        null !== oz && null !== Az && Kz === Ez.H.Errors && (null === (Tz = (Lz = this.handlers).onErrors) || void 0 === Tz || Tz.call(Lz, oz));
        const Pz = null === Az ? Uz : this.readEvents(Oz);
        if (Mz.consume(Oz - (null !== Az && void 0 !== Az ? Az : 0)), this.netKept = null !== Az && void 0 !== Az ? Az : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== fz) return this.crash(Zz, void 0 === sz || sz instanceof nz.b ? fz.error : sz), !1;
        if (void 0 !== sz || null === oz) return this.crashOn(Zz, sz), !1;
        const Gz = this.headerView()[Ez.db.FrameDraw];
        if (this.lastFrameKind = (0, dz.h)(pz, Gz), Kz === Ez.H.Fatal) return this.crash(Rz, null), !1;
        if (null === Az) return this.crash(Xz, `the core kept ${Jz} of ${Oz} net-in bytes`), !1;
        if (this.eventWalker) {
          if (this.stopped) return !1;
          const zz = this.frameEvents,
            uz = this.headerView();
          zz.ptr = uz[Ez.db.EventsPtr], zz.len = uz[Ez.db.EventsLen], zz.net = Pz, zz.kind = this.lastFrameKind;
          try {
            this.eventWalker(zz)
          } catch (mz) {
            return this.crashOn(Nz, mz), !1
          }
          return this.handEnvEvents()
        }
        for (const Ez of Pz) {
          if (this.stopped) return !1;
          try {
            var az, Vz;
            null === (az = (Vz = this.handlers).onNetEvent) || void 0 === az || az.call(Vz, Ez)
          } catch (mz) {
            return this.crashOn(vz, mz), !1
          }
        }
        return this.handEnvEvents()
      }
      handEnvEvents() {
        for (const iz of this.graceEvents) {
          if (this.stopped) return !1;
          try {
            var zz, uz;
            null === (zz = (uz = this.handlers).onReconnectGrace) || void 0 === zz || zz.call(uz, iz)
          } catch (nz) {
            return this.crashOn(vz, nz), !1
          }
        }
        for (const iz of this.envEvents) {
          if (this.stopped) return !1;
          try {
            var bz, Ez;
            null === (bz = (Ez = this.handlers).onEnvEvent) || void 0 === bz || bz.call(Ez, iz)
          } catch (nz) {
            return this.crashOn(xz, nz), !1
          }
        }
        return !this.stopped
      }
      setEventWalker(zz) {
        this.eventWalker = zz
      }
      writePendingInput() {
        if (this.stopped) return !1;
        const {
          input: zz
        } = this.rings;
        try {
          const uz = this.unsentUiPrefs;
          uz && zz.writeRecord(Ez.pb.UiPrefs, 0, uz.nametagCutDistance, 0, (0, Ez.pe)(uz)) && (this.unsentUiPrefs = null);
          const bz = this.unsentEnvPrefs;
          bz && zz.writeRecord(Ez.pb.EnvPrefs, (0, Ez.Wd)(bz), bz.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
          const nz = this.unsentLookPrefs;
          nz && zz.writeRecord(Ez.pb.Sensitivity, 0, nz.mouse, nz.touch, (0, pz.i)(nz.fovPercent)) && (this.unsentLookPrefs = null);
          let iz = 0;
          for (const {
              aux: Ez,
              payload: lz
            }
            of this.unsentOptions) {
            if (!zz.writeOptions(Ez, lz)) {
              if (zz.cursor > 0) break;
              this.optionsDropped++
            }
            iz++
          }
          iz > 0 && this.unsentOptions.splice(0, iz)
        } catch (uz) {
          return this.crash(wz, uz), !1
        }
        return !0
      }
      setHoldDraws(zz) {
        this.drawsHeld = zz
      }
      setUiPrefs(zz) {
        this.unsentUiPrefs = {
          ...zz
        }
      }
      setEnvPrefs(zz) {
        this.unsentEnvPrefs = {
          ...zz
        }
      }
      setLookPrefs(zz) {
        this.unsentLookPrefs = {
          ...zz
        }
      }
      queueOptions(zz, uz) {
        return !this.isStopped && (uz.byteLength > Ez.Vb.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
          aux: zz,
          payload: uz
        }), !0))
      }
      setChunkCap(zz) {
        return this.callCore("setChunkCap", null, (uz => uz.Kiz(zz)))
      }
      shedMemory(zz) {
        const uz = this.callCore("shedMemory", null, (uz => uz.Niz(zz)));
        return 0 === uz ? null : uz
      }
      addDistanceInUse() {
        const zz = this.callCore("addDistanceInUse", null, (zz => zz.Pnz()));
        return 0 === zz ? null : zz
      }
      setChunkAddDistance(zz, uz) {
        return this.callCore("setChunkAddDistance", !1, (bz => bz.Riz(zz, uz)))
      }
      setGameHost(zz) {
        return this.callCore("setGameHost", !1, (uz => (uz.Dnz(zz), this.gameHost = zz, !0)))
      }
      setAntiCheatProbes(zz) {
        return this.callCore("setAntiCheatProbes", !1, (uz => uz.Fiz(zz)))
      }
      setAmbientOcclusion(zz) {
        this.callCore("setAmbientOcclusion", void 0, (uz => {
          uz.diz(zz)
        }))
      }
      setPoseLod(zz) {
        this.callCore("setPoseLod", void 0, (uz => {
          uz.Xiz(zz)
        }))
      }
      setDebugLog(zz, uz) {
        this.callCore(cz, void 0, (bz => {
          bz.NK(zz, uz)
        }))
      }
      takeDebugLog(zz) {
        return this.callCore(cz, [], (uz => uz.vK(zz)))
      }
      setTextureLayers(zz) {
        return this.callCore("setTextureLayers", !1, (uz => uz.oiz(zz)))
      }
      setBlockColours(zz) {
        let {
          blocks: uz,
          counts: bz,
          values: Ez
        } = zz;
        return this.callCore("setBlockColours", !1, (zz => zz.dbz(uz, bz, Ez)))
      }
      terrainTextureNames() {
        return this.callCore(gz, [], (zz => zz.Tiz()))
      }
      setTerrainTextures(zz, uz, bz, Ez) {
        return this.callCore(gz, !1, (nz => nz.riz(zz, bz, uz, Ez)))
      }
      setShaderPack(zz, uz, bz, Ez, nz, iz) {
        return this.callCore("setShaderPack", !1, (lz => {
          var Mz, tz;
          return null !== (Mz = null === (tz = lz.xbz) || void 0 === tz ? void 0 : tz.call(lz, zz, uz, bz, Ez, nz, iz)) && void 0 !== Mz && Mz
        }))
      }
      sunShadowWantedTextures() {
        return this.callCore(Sz, null, (zz => {
          var uz, bz;
          return null !== (uz = null === (bz = zz.viz) || void 0 === bz ? void 0 : bz.call(zz)) && void 0 !== uz ? uz : null
        }))
      }
      setSunShadowTexture(zz, uz, bz, Ez, nz) {
        this.callCore(Sz, void 0, (iz => {
          var lz;
          null === (lz = iz.siz) || void 0 === lz || lz.call(iz, zz, uz, bz, Ez, nz)
        }))
      }
      takeSunShadowWarnings() {
        return this.callCore(Sz, [], (zz => {
          var uz, bz;
          return null !== (uz = null === (bz = zz.Jiz) || void 0 === bz ? void 0 : bz.call(zz)) && void 0 !== uz ? uz : []
        }))
      }
      sunShadowsHeld() {
        return this.callCore(Sz, null, (zz => {
          var uz, bz;
          return null !== (uz = null === (bz = zz.xiz) || void 0 === bz ? void 0 : bz.call(zz)) && void 0 !== uz ? uz : null
        }))
      }
      callCore(zz, uz, bz) {
        if (this.stopped) return uz;
        try {
          return bz(this.core)
        } catch (Ez) {
          return this.crash(zz, Ez), uz
        }
      }
      readEvents(zz) {
        this.netOffsets.length = 0;
        const uz = this.headerView(),
          bz = uz[Ez.db.EventsPtr],
          nz = uz[Ez.db.EventsLen];
        if (this.envEvents.length = 0, this.graceEvents.length = 0, 0 === nz) return Uz;
        const iz = [],
          lz = this.memory().buffer;
        if (bz % 4 !== 0 || bz + nz > lz.byteLength) return this.crash(hz, `events of ${nz} bytes at ${bz} outside ${lz.byteLength} bytes of memory`), Uz;
        const Mz = new DataView(lz, bz, nz),
          tz = this.rings.net,
          Hz = (uz, bz) => uz + bz <= zz ? tz.copyWritten(uz, bz) : null;
        let Oz = 0;
        for (; Oz < nz;) {
          const zz = Oz + Ez.S,
            uz = zz <= nz ? Mz.getUint32(Oz, !0) : -1,
            tz = uz >>> 16;
          if (uz < 0 || tz > nz - zz) return this.crash(hz, `event record at ${Oz} overruns its ${nz} bytes`), Uz;
          const xz = 65535 & uz,
            Jz = uz => Mz.getUint32(zz + 4 * uz, !0);
          if (xz === Ez.V.RawMessage) {
            const zz = tz >= Ez.Fc.BYTES ? 65535 & Jz(1) : -1,
              uz = zz === Ez.Fc.STRING_TYPE,
              bz = tz === (uz ? Ez.Fc.STRING_TYPE_BYTES : Ez.Fc.BYTES) ? Hz(Jz(2), Jz(3)) : null,
              nz = uz && bz ? Hz(Jz(4), Jz(5)) : null;
            if (!bz || uz && !nz) return this.crash(hz, `RawMessage at ${Oz} of ${tz} bytes names bytes outside net-in`), Uz;
            this.netOffsets.push(Oz), iz.push({
              type: "message",
              conn: Jz(0),
              zM: zz,
              payloadKind: Jz(1) >>> 16,
              payload: bz,
              stringType: nz ? yz.decode(nz) : null
            })
          } else if (xz === Ez.V.CoreErrors) {
            var pz, dz;
            const zz = tz >= 4 ? Jz(0) : -1;
            if (zz < 0 || zz > Ez.C.PAIRS_MAX || tz !== 4 * (Ez.C.FIXED_WORDS + Ez.C.PAIR_WORDS * zz)) return this.crash(hz, `CoreErrors at ${Oz} of ${tz} bytes`), Uz;
            const uz = [];
            for (let bz = 0; bz < zz; bz++) uz.push({
              code: Jz(1 + 2 * bz),
              detail: Jz(2 + 2 * bz)
            });
            null === (pz = (dz = this.handlers).onCoreErrors) || void 0 === pz || pz.call(dz, uz, Jz(1 + 2 * zz))
          } else if (xz === Ez.V.RenderReload) {
            var Fz, Zz;
            if (tz !== Ez.Qc.BYTES) return this.crash(hz, `RenderReload at ${Oz} of ${tz} bytes`), Uz;
            null === (Fz = (Zz = this.handlers).onRenderReload) || void 0 === Fz || Fz.call(Zz, Jz(0), Jz(1), Jz(2))
          } else if (xz === Ez.V.Images) {
            var Rz, Kz;
            null === (Rz = (Kz = this.handlers).onImages) || void 0 === Rz || Rz.call(Kz, new Uint8Array(lz.slice(bz + zz, bz + zz + tz)))
          } else if (xz === Ez.V.ModelRequests)
            for (let bz = 0; bz < tz >>> 2; bz++) {
              var wz, Xz;
              null === (wz = (Xz = this.handlers).onModelRequest) || void 0 === wz || wz.call(Xz, Jz(bz))
            } else if (xz === Ez.V.ModelTaken) {
              var fz, sz;
              if (tz < 4) return this.crash(hz, `ModelTaken at ${Oz} of ${tz} bytes`), Uz;
              const zz = new Uint32Array((tz >>> 2) - 1);
              for (let uz = 0; uz < zz.length; uz++) zz[uz] = Jz(1 + uz);
              null === (fz = (sz = this.handlers).onModelTaken) || void 0 === fz || fz.call(sz, Jz(0), zz)
            } else if (xz === Ez.V.TerrainTexturesWanted) {
            var rz, oz;
            if (0 !== tz) return this.crash(hz, `TerrainTexturesWanted at ${Oz} of ${tz} bytes`), Uz;
            null === (rz = (oz = this.handlers).onTerrainTexturesWanted) || void 0 === rz || rz.call(oz)
          } else if (xz === Ez.V.KeepAliveDue) {
            var Nz, vz;
            if (tz > Ez.ub) return this.crash(hz, `KeepAliveDue at ${Oz} of ${tz} bytes`), Uz;
            null === (Nz = (vz = this.handlers).onKeepAlive) || void 0 === Nz || Nz.call(vz, new Uint8Array(lz, bz + zz, tz).slice())
          } else if (xz === Ez.V.ConnectionState) {
            if (tz !== Ez.s) return this.crash(hz, `ConnectionState at ${Oz} of ${tz} bytes`), Uz;
            this.netOffsets.push(Oz), iz.push({
              type: "connection",
              conn: Jz(0),
              phase: Jz(1),
              code: 0 | Jz(2)
            })
          } else if (xz === Ez.V.EnvLighting || xz === Ez.V.SkyImages) {
            if (tz !== (xz === Ez.V.EnvLighting ? Ez.P : Ez.jd)) return this.crash(hz, `event ${xz} at ${Oz} of ${tz} bytes`), Uz;
            this.envEvents.push({
              kind: xz,
              payload: new Uint8Array(lz.slice(bz + zz, bz + zz + tz))
            })
          } else if (xz === Ez.V.ReconnectGrace) {
            if (tz !== Ez.jc) return this.crash(hz, `ReconnectGrace at ${Oz} of ${tz} bytes`), Uz;
            const zz = Jz(2);
            this.graceEvents.push({
              conn: Jz(0),
              graceMs: Jz(1),
              sessionBased: 0 !== (zz & Ez.Ic.SessionBased),
              replayOffer: 0 !== (zz & Ez.Ic.ReplayOffer)
            })
          }
          Oz = zz + (0, Ez.ie)(tz)
        }
        return iz
      }
      forEachNetOut(zz) {
        this.forEachOut(sz, "net-out", Ez.db.NetOutPtr, Ez.db.NetOutLen, Ez.Pb, 0, ((uz, bz, nz, iz) => {
          const lz = (0, Ez.ce)(bz);
          lz === Ez.Qb.Frame ? zz((0, Ez.be)(bz), nz) : this.crash(sz, `net-out record at ${iz} is kind ${lz}, not a frame`)
        }))
      }
      forEachWorkerOut(zz) {
        this.forEachOut(rz, "worker-out", Ez.db.WorkerOutPtr, Ez.db.WorkerOutLen, Ez.vd, 4, ((uz, bz, nz, iz) => {
          const lz = 255 & uz,
            Mz = lz === Ez.Ld.Init ? this.initOf(nz, iz) : nz;
          null !== Mz && zz(lz, uz >>> 8 & 16777215, Mz)
        }))
      }
      initOf(zz, uz) {
        const bz = this.memory().buffer;
        if (zz.byteLength !== Ez.hb) return this.crash(rz, `worker-out Init record at ${uz} is ${zz.byteLength} bytes, not a view`), null;
        const nz = new DataView(zz.buffer, zz.byteOffset, Ez.hb),
          iz = nz.getUint32(0, !0),
          lz = nz.getUint32(4, !0);
        return iz + lz > bz.byteLength ? (this.crash(rz, `worker-out Init record at ${uz} names ${lz} bytes at ${iz} outside ${bz.byteLength} bytes of memory`), null) : new Uint8Array(bz, iz, lz)
      }
      forEachOut(zz, uz, bz, nz, iz, lz, Mz) {
        if (this.stopped || null === this.lastHeader) return;
        const tz = this.headerView(),
          Hz = tz[bz],
          Oz = tz[nz];
        if (0 === Oz) return;
        const pz = this.memory().buffer;
        if (Hz % 4 !== 0 || Hz + Oz > pz.byteLength) return void this.crash(zz, `${uz} of ${Oz} bytes at ${Hz} outside ${pz.byteLength} bytes of memory`);
        const dz = new DataView(pz, Hz, Oz);
        let Fz = 0;
        for (; Fz < Oz;) {
          const bz = Fz + iz,
            nz = bz <= Oz ? dz.getUint32(Fz + lz, !0) : -1;
          if (nz < 0 || nz > Oz - bz) return void this.crash(zz, `${uz} record at ${Fz} overruns its ${Oz} bytes`);
          if (Mz(dz.getUint32(Fz, !0), dz.getUint32(Fz + 4, !0), new Uint8Array(pz, Hz + bz, nz), Fz), this.stopped) return;
          Fz = bz + (0, Ez.ie)(nz)
        }
      }
      forEachEvent(zz) {
        if (this.stopped || null === this.lastHeader) return;
        const uz = this.headerView(),
          bz = uz[Ez.db.EventsPtr],
          nz = uz[Ez.db.EventsLen];
        if (0 === nz) return;
        const iz = this.memory().buffer;
        if (bz % 4 !== 0 || bz + nz > iz.byteLength) return void this.crash(hz, `events of ${nz} bytes at ${bz} outside ${iz.byteLength} bytes of memory`);
        const lz = new DataView(iz, bz, nz);
        let Mz = 0;
        for (; Mz < nz;) {
          const uz = Mz + Ez.S,
            bz = uz <= nz ? lz.getUint32(Mz, !0) : -1,
            iz = bz >>> 16;
          if (bz < 0 || iz > nz - uz) return void this.crash(hz, `event record at ${Mz} overruns its ${nz} bytes`);
          zz(65535 & bz, lz, uz, iz), Mz = uz + (0, Ez.ie)(iz)
        }
      }
      crashOn(zz, uz) {
        uz instanceof nz.b ? this.crash(hz, uz.message) : this.crash(zz, uz)
      }
      crash(zz, uz) {
        this.stopped || (this.stopped = !0, this.handlers.onCrash({
          site: zz,
          error: uz,
          header: this.lastHeader
        }))
      }
      headerWord(zz) {
        return this.stopped || null === this.lastHeader ? 0 : this.headerView()[zz]
      }
      headerView() {
        const zz = this.memory().buffer;
        return zz !== this.headerBuffer && (this.headerBuffer = zz, this.header = new Uint32Array(zz, this.core.WF(), Ez.cb)), this.header
      }
    }
  },
  40123: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => lz,
      d: () => iz
    });
    var Ez = bz(4448);
    let nz = null;

    function iz(zz) {
      nz = {
        scanned: !1
      };
      try {
        return zz()
      } finally {
        nz = null
      }
    }

    function lz() {
      const zz = nz;
      if (null === zz) return (0, Ez.f)();
      const uz = (0, Ez.f)(!zz.scanned);
      return zz.scanned = !0, uz
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);