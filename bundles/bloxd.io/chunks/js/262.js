export const id = 262;
export const ids = [262];
export const modules = {
  40068: (zz, tz, sz) => {
    function Fz(zz, tz, sz) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(zz, tz).getContext("2d", sz);
      const Fz = document.createElement("canvas");
      return Fz.width = zz, Fz.height = tz, Fz.getContext("2d", sz)
    }

    function Wz(zz, tz) {
      return zz.getContext("2d", tz)
    }
    sz.d(tz, {
      c: () => Wz,
      d: () => Fz
    })
  },
  40013: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Pz,
      i: () => wz,
      l: () => nz,
      m: () => ez,
      n: () => Gz,
      q: () => Tz,
      s: () => Bz,
      u: () => gz,
      w: () => Hz,
      y: () => Cz,
      z: () => kz,
      D: () => xz,
      E: () => Mz,
      I: () => lz,
      L: () => cz,
      P: () => Az
    });
    var Fz = sz(4432),
      Wz = sz(39773),
      Xz = (sz(39903), sz(17));
    class Oz {
      constructor(zz, tz) {
        this.memory = zz, this.access = tz, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.au = 0, this.u32 = new Xz.i(0), this.f32 = new Xz.e(0), this.u8 = new Xz.b(0), this.dataView = new Xz.g(new ArrayBuffer(0)), this.refresh()
      }
      refresh() {
        this.ptr = this.access.ptr(), this.au = this.access.au(), this.buffer = (0, Xz.C)(this.memory()), this.u32 = new Xz.i(this.buffer, this.ptr, this.au >>> 2), this.f32 = new Xz.e(this.buffer, this.ptr, this.au >>> 2), this.u8 = new Xz.b(this.buffer, this.ptr, this.au), this.dataView = new Xz.g(this.buffer, this.ptr, this.au)
      }
      ensureViews() {
        (0, Xz.C)(this.memory()) !== this.buffer && this.refresh()
      }
      get view() {
        return this.ensureViews(), this.dataView
      }
      room(zz) {
        return !!this.fits(zz) || (this.dropped++, !1)
      }
      fits(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.cursor;
        this.ensureViews();
        const sz = tz + zz;
        return sz <= this.au || sz <= Fz.wc && 0 !== this.access.reserve(sz) && (this.refresh(), sz <= this.au)
      }
      consume(zz) {
        const tz = this.cursor - zz;
        tz > 0 && zz > 0 && (this.ensureViews(), this.u8.copyWithin(0, zz, this.cursor)), this.cursor = tz > 0 ? tz : 0
      }
      writeRecord(zz, tz, sz, Wz, Xz) {
        if (!this.room(Fz.pb)) return !1;
        const Oz = this.cursor >>> 2;
        return this.u32[Oz] = 65535 & zz | (65535 & tz) << 16, this.f32[Oz + 1] = sz, this.f32[Oz + 2] = Wz, this.u32[Oz + 3] = Xz >>> 0, this.cursor += Fz.pb, !0
      }
      writeOptions(zz, tz) {
        const sz = tz.byteLength,
          Wz = Fz.pb + (0, Fz.ke)(sz);
        if (!this.fits(Wz)) return !1;
        const Xz = this.cursor,
          Oz = Xz >>> 2;
        this.u32[Oz] = Fz.qb.Options, this.u32[Oz + 1] = sz, this.u32[Oz + 2] = 0, this.u32[Oz + 3] = zz >>> 0;
        const oz = Xz + Fz.pb;
        return this.u8.set(tz, oz), this.u8.fill(0, oz + sz, Xz + Wz), this.cursor += Wz, !0
      }
      writeWorkerRecord(zz, tz, sz, Wz, Xz, Oz) {
        const oz = Oz.byteLength,
          vz = Fz.Dd + (0, Fz.ke)(oz);
        if (oz > Fz.Cd) return this.dropped++, !1;
        if (!this.room(vz)) return !1;
        const Uz = this.cursor,
          Kz = Uz >>> 2;
        this.u32[Kz] = zz >>> 0, this.u32[Kz + 1] = 65535 & tz | (65535 & sz) << 16, this.u32[Kz + 2] = Wz >>> 0, this.u32[Kz + 3] = Xz >>> 0, this.u32[Kz + 4] = oz;
        const uz = Uz + Fz.Dd;
        return this.u8.set(Oz, uz), this.u8.fill(0, uz + oz, Uz + vz), this.cursor += vz, !0
      }
      written() {
        return this.ensureViews(), this.u8.subarray(0, this.cursor)
      }
      writeFrame(zz, tz) {
        return this.writeNet(Fz.Ib.Frame, zz, tz)
      }
      writeOpen(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(Fz.Ib.Open, zz, vz(tz))
      }
      writeClose(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(Fz.Ib.Close, zz, vz(tz))
      }
      writeNet(zz, tz, sz) {
        const Wz = sz.byteLength,
          Xz = Fz.Hb + (0, Fz.ke)(Wz);
        if (Wz > Fz.Bb) return this.dropped++, !1;
        if (!this.room(Xz)) return !1;
        const Oz = this.cursor;
        this.u32[Oz >>> 2] = Wz, this.u32[1 + (Oz >>> 2)] = (0, Fz.he)(zz, tz);
        const oz = Oz + Fz.Hb;
        return this.u8.set(sz, oz), this.u8.fill(0, oz + Wz, Oz + Xz), this.cursor += Xz, !0
      }
      ib(zz, tz, sz) {
        const Wz = Fz.v + (0, Fz.ke)(sz);
        if (!this.room(Wz)) return -1;
        const Xz = this.cursor;
        this.u32[Xz >>> 2] = 65535 & zz | (65535 & tz) << 16, this.u32[1 + (Xz >>> 2)] = sz;
        const Oz = Xz + Fz.v;
        return this.u8.fill(0, Oz, Xz + Wz), this.cursor += Wz, Oz
      }
      growForCmd(zz) {
        return this.fits(Fz.v + (0, Fz.ke)(zz), 0)
      }
      writeCmd(zz, tz, sz) {
        const Fz = this.ib(zz, tz, sz.byteLength);
        return !(Fz < 0) && (this.u8.set(sz, Fz), !0)
      }
      copyWritten(zz, tz) {
        return this.ensureViews(), this.u8.slice(zz, zz + tz)
      }
    }
    const oz = new Xz.b(0);

    function vz(zz) {
      if (0 === zz) return oz;
      const tz = new Xz.b(Fz.Eb);
      for (let sz = 0; sz < Fz.Eb; sz++) tz[sz] = zz >>> 8 * sz & 255;
      return tz
    }
    class Uz {
      constructor(zz, tz) {
        this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new Oz(tz, {
          ptr: () => zz.XN(),
          au: () => zz.NXz(),
          reserve: tz => zz.mXz(tz)
        }), this.net = new Oz(tz, {
          ptr: () => zz.rXz(),
          au: () => zz.PXz(),
          reserve: tz => zz.JXz(tz)
        }), this.worker = new Oz(tz, {
          ptr: () => zz.VXz(),
          au: () => zz.SXz(),
          reserve: tz => zz.IXz(tz)
        }), this.cmd = new Oz(tz, {
          ptr: () => zz.FXz(),
          au: () => zz.tXz(),
          reserve: tz => zz.sXz(tz)
        })
      }
      reset(zz) {
        this.input.cursor = 0, this.worker.cursor = 0, this.cmd.consume(zz)
      }
    }
    var Kz = sz(35805),
      uz = sz(2277),
      Nz = sz(4427),
      bz = sz(40019);
    const wz = "coreFrame",
      Dz = "fatalStatus",
      gz = "otherCall",
      Hz = "coreRings",
      Bz = "netIn",
      Pz = "abi",
      rz = "netOut",
      Yz = "workerOut",
      xz = "worldgenHost",
      mz = "eventWalker",
      Jz = "netEvent",
      Iz = "envEvent",
      Cz = "sharedTables",
      ez = "inputAction",
      Zz = new Set([mz, Jz, Iz, ez, Cz]),
      Gz = "wasmMemory",
      Tz = "meshHost";

    function cz(zz, tz) {
      zz.forEachWorkerOut(((sz, Wz, Xz) => {
        if ((0, Fz.be)(sz)) try {
          var Oz;
          null === (Oz = tz.worldgen) || void 0 === Oz || Oz.take(sz, Xz)
        } catch (vz) {
          zz.crash(xz, vz)
        } else try {
          var oz;
          null === (oz = tz.mesh) || void 0 === oz || oz.take(sz, Wz, Xz)
        } catch (vz) {
          zz.crash(Tz, vz)
        }
      }))
    }
    const jz = 1048576;

    function Az(zz, tz) {
      let sz = !1;
      const Fz = () => {
        sz = !1, tz()
      };
      return () => {
        !sz && zz.cursor >= jz && (sz = !0, queueMicrotask(Fz))
      }
    }
    const yz = new Set([Dz, gz, xz, Tz]);

    function Mz(zz) {
      return Zz.has(zz.site) ? zz.error instanceof WebAssembly.RuntimeError || (0, Wz.o)(zz.error) : !yz.has(zz.site) && zz.error instanceof Error
    }
    const dz = "events",
      hz = [],
      Qz = "debugLog",
      kz = "terrainTextures",
      iz = "sunShadowTextures",
      Lz = new TextDecoder;

    function lz(zz, tz) {
      const {
        site: sz,
        error: Wz,
        header: Xz
      } = zz, Oz = Xz ? (0, Fz.Wd)(Xz.lastError) : "noFrame", oz = `CORE-${sz===Dz?Oz:sz}`, vz = null === Wz || void 0 === Wz ? "" : ` ${(0,Kz.i)(Wz)}`, Uz = {
        site: sz,
        wasmBuild: tz.wasm,
        clientVersion: tz.client
      };
      return Xz && (Uz.status = String(Xz.status), Uz.lastError = Oz, Uz.lastErrorCode = String(Xz.lastError), Uz.lastErrorDetail = String(Xz.lastErrorDetail), Uz.errorCount = String(Xz.errorCount), Uz.frameIndex = String(Xz.frameIndex), Uz.tickIndex = String(Xz.tickIndex)), {
        code: oz,
        message: `core ${sz}, last error ${Oz};${vz}`,
        details: Uz
      }
    }
    class nz {
      constructor(zz, tz, sz) {
        this.core = zz, this.memory = tz, this.handlers = sz, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.unsentUiPrefs = null, this.eventWalker = null, this.netOffsets = [], this.frameEvents = {
          ptr: 0,
          len: 0,
          net: hz,
          netOffsets: this.netOffsets,
          kind: "none"
        }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.rings = new Uz(zz, tz)
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
          return this.core.UXz(zz)
        } catch (tz) {
          return this.crash(wz, tz), !1
        }
      }
      get isStopped() {
        return this.stopped
      }
      frame(zz, tz) {
        var sz;
        let Xz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.stopped) return !1;
        if (!this.writePendingInput()) return !1;
        const {
          input: Oz,
          net: oz,
          worker: vz,
          cmd: Uz
        } = this.rings, Kz = oz.cursor, uz = tz && !this.drawsHeld;
        let gz = Fz.M.Fatal;
        const Hz = Uz.cursor;
        let Pz = null;
        try {
          const tz = (uz ? Fz.ab.Draws : 0) | (Xz ? Fz.ab.NetAll : 0);
          gz = (0, bz.f)((() => this.core.frame(zz, Oz.cursor, oz.cursor, vz.cursor, tz, Hz)))
        } catch (yz) {
          Pz = {
            error: yz
          }
        }
        const rz = null === (sz = this.gameHost) || void 0 === sz ? void 0 : sz.takeFault();
        this.rings.reset(this.stopped || null !== Pz || void 0 !== rz ? Uz.cursor : Hz);
        const Yz = null === Pz && void 0 === rz ? this.headerView() : null,
          xz = null === Yz ? null : (0, Fz.ne)(Yz);
        null !== xz && (this.lastHeader = xz);
        const Iz = null !== xz && gz !== Fz.M.Fatal,
          Cz = Iz && null !== Yz ? Yz[Fz.ib.NetInKept] : 0,
          ez = Iz && Cz <= Kz && Cz % 4 === 0 ? Cz : null;
        var Zz, Gz;
        null !== xz && null !== ez && gz === Fz.M.Errors && (null === (Zz = (Gz = this.handlers).onErrors) || void 0 === Zz || Zz.call(Gz, xz));
        const Tz = null === ez ? hz : this.readEvents(Kz);
        if (oz.consume(Kz - (null !== ez && void 0 !== ez ? ez : 0)), this.netKept = null !== ez && void 0 !== ez ? ez : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== Pz) return this.crash(wz, void 0 === rz || rz instanceof Wz.e ? Pz.error : rz), !1;
        if (void 0 !== rz || null === xz) return this.crashOn(wz, rz), !1;
        const cz = this.headerView()[Fz.ib.FrameDraw];
        if (this.lastFrameKind = (0, Nz.h)(uz, cz), gz === Fz.M.Fatal) return this.crash(Dz, null), !1;
        if (null === ez) return this.crash(Bz, `the core kept ${Cz} of ${Kz} net-in bytes`), !1;
        if (this.eventWalker) {
          if (this.stopped) return !1;
          const zz = this.frameEvents,
            tz = this.headerView();
          zz.ptr = tz[Fz.ib.EventsPtr], zz.len = tz[Fz.ib.EventsLen], zz.net = Tz, zz.kind = this.lastFrameKind;
          try {
            this.eventWalker(zz)
          } catch (yz) {
            return this.crashOn(mz, yz), !1
          }
          return this.handEnvEvents()
        }
        for (const Fz of Tz) {
          if (this.stopped) return !1;
          try {
            var jz, Az;
            null === (jz = (Az = this.handlers).onNetEvent) || void 0 === jz || jz.call(Az, Fz)
          } catch (yz) {
            return this.crashOn(Jz, yz), !1
          }
        }
        return this.handEnvEvents()
      }
      handEnvEvents() {
        for (const Xz of this.graceEvents) {
          if (this.stopped) return !1;
          try {
            var zz, tz;
            null === (zz = (tz = this.handlers).onReconnectGrace) || void 0 === zz || zz.call(tz, Xz)
          } catch (Wz) {
            return this.crashOn(Jz, Wz), !1
          }
        }
        for (const Xz of this.envEvents) {
          if (this.stopped) return !1;
          try {
            var sz, Fz;
            null === (sz = (Fz = this.handlers).onEnvEvent) || void 0 === sz || sz.call(Fz, Xz)
          } catch (Wz) {
            return this.crashOn(Iz, Wz), !1
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
          const tz = this.unsentUiPrefs;
          tz && zz.writeRecord(Fz.qb.UiPrefs, 0, tz.nametagCutDistance, 0, (0, Fz.pe)(tz)) && (this.unsentUiPrefs = null);
          const sz = this.unsentEnvPrefs;
          sz && zz.writeRecord(Fz.qb.EnvPrefs, (0, Fz._d)(sz), sz.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
          const Wz = this.unsentLookPrefs;
          Wz && zz.writeRecord(Fz.qb.Sensitivity, 0, Wz.mouse, Wz.touch, (0, uz.j)(Wz.fovPercent)) && (this.unsentLookPrefs = null);
          let Xz = 0;
          for (const {
              aux: Fz,
              payload: Oz
            }
            of this.unsentOptions) {
            if (!zz.writeOptions(Fz, Oz)) {
              if (zz.cursor > 0) break;
              this.optionsDropped++
            }
            Xz++
          }
          Xz > 0 && this.unsentOptions.splice(0, Xz)
        } catch (tz) {
          return this.crash(Hz, tz), !1
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
      queueOptions(zz, tz) {
        return !this.isStopped && (tz.byteLength > Fz.Lb.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
          aux: zz,
          payload: tz
        }), !0))
      }
      setChunkCap(zz) {
        return this.callCore("setChunkCap", null, (tz => tz.AXz(zz)))
      }
      shedMemory(zz) {
        const tz = this.callCore("shedMemory", null, (tz => tz.iXz(zz)));
        return 0 === tz ? null : tz
      }
      addDistanceInUse() {
        const zz = this.callCore("addDistanceInUse", null, (zz => zz.VWz()));
        return 0 === zz ? null : zz
      }
      setChunkAddDistance(zz, tz) {
        return this.callCore("setChunkAddDistance", !1, (sz => sz.TXz(zz, tz)))
      }
      setGameHost(zz) {
        return this.callCore("setGameHost", !1, (tz => (tz.vXz(zz), this.gameHost = zz, !0)))
      }
      setAntiCheatProbes(zz) {
        return this.callCore("setAntiCheatProbes", !1, (tz => tz.ZXz(zz)))
      }
      setAmbientOcclusion(zz) {
        this.callCore("setAmbientOcclusion", void 0, (tz => {
          tz.eXz(zz)
        }))
      }
      setPoseLod(zz) {
        this.callCore("setPoseLod", void 0, (tz => {
          tz.MXz(zz)
        }))
      }
      setDebugLog(zz, tz) {
        this.callCore(Qz, void 0, (sz => {
          sz.eg(zz, tz)
        }))
      }
      takeDebugLog(zz) {
        return this.callCore(Qz, [], (tz => tz.Zg(zz)))
      }
      setTextureLayers(zz) {
        return this.callCore("setTextureLayers", !1, (tz => tz.kXz(zz)))
      }
      setBlockColours(zz) {
        let {
          blocks: tz,
          counts: sz,
          values: Fz
        } = zz;
        return this.callCore("setBlockColours", !1, (zz => zz.esz(tz, sz, Fz)))
      }
      terrainTextureNames() {
        return this.callCore(kz, [], (zz => zz.qXz()))
      }
      setTerrainTextures(zz, tz, sz, Fz) {
        return this.callCore(kz, !1, (Wz => Wz.QXz(zz, sz, tz, Fz)))
      }
      setShaderPack(zz, tz, sz, Fz, Wz, Xz) {
        return this.callCore("setShaderPack", !1, (Oz => {
          var oz, vz;
          return null !== (oz = null === (vz = Oz.isz) || void 0 === vz ? void 0 : vz.call(Oz, zz, tz, sz, Fz, Wz, Xz)) && void 0 !== oz && oz
        }))
      }
      sunShadowWantedTextures() {
        return this.callCore(iz, null, (zz => {
          var tz, sz;
          return null !== (tz = null === (sz = zz.LXz) || void 0 === sz ? void 0 : sz.call(zz)) && void 0 !== tz ? tz : null
        }))
      }
      setSunShadowTexture(zz, tz, sz, Fz, Wz) {
        this.callCore(iz, void 0, (Xz => {
          var Oz;
          null === (Oz = Xz.hXz) || void 0 === Oz || Oz.call(Xz, zz, tz, sz, Fz, Wz)
        }))
      }
      takeSunShadowWarnings() {
        return this.callCore(iz, [], (zz => {
          var tz, sz;
          return null !== (tz = null === (sz = zz.nXz) || void 0 === sz ? void 0 : sz.call(zz)) && void 0 !== tz ? tz : []
        }))
      }
      sunShadowsHeld() {
        return this.callCore(iz, null, (zz => {
          var tz, sz;
          return null !== (tz = null === (sz = zz.lXz) || void 0 === sz ? void 0 : sz.call(zz)) && void 0 !== tz ? tz : null
        }))
      }
      callCore(zz, tz, sz) {
        if (this.stopped) return tz;
        try {
          return sz(this.core)
        } catch (Fz) {
          return this.crash(zz, Fz), tz
        }
      }
      readEvents(zz) {
        this.netOffsets.length = 0;
        const tz = this.headerView(),
          sz = tz[Fz.ib.EventsPtr],
          Wz = tz[Fz.ib.EventsLen];
        if (this.envEvents.length = 0, this.graceEvents.length = 0, 0 === Wz) return hz;
        const Xz = [],
          Oz = this.memory().buffer;
        if (sz % 4 !== 0 || sz + Wz > Oz.byteLength) return this.crash(dz, `events of ${Wz} bytes at ${sz} outside ${Oz.byteLength} bytes of memory`), hz;
        const oz = new DataView(Oz, sz, Wz),
          vz = this.rings.net,
          Uz = (tz, sz) => tz + sz <= zz ? vz.copyWritten(tz, sz) : null;
        let Kz = 0;
        for (; Kz < Wz;) {
          const zz = Kz + Fz.V,
            tz = zz <= Wz ? oz.getUint32(Kz, !0) : -1,
            vz = tz >>> 16;
          if (tz < 0 || vz > Wz - zz) return this.crash(dz, `event record at ${Kz} overruns its ${Wz} bytes`), hz;
          const Iz = 65535 & tz,
            Cz = tz => oz.getUint32(zz + 4 * tz, !0);
          if (Iz === Fz.X.RawMessage) {
            const zz = vz >= Fz.zc.BYTES ? 65535 & Cz(1) : -1,
              tz = zz === Fz.zc.STRING_TYPE,
              sz = vz === (tz ? Fz.zc.STRING_TYPE_BYTES : Fz.zc.BYTES) ? Uz(Cz(2), Cz(3)) : null,
              Wz = tz && sz ? Uz(Cz(4), Cz(5)) : null;
            if (!sz || tz && !Wz) return this.crash(dz, `RawMessage at ${Kz} of ${vz} bytes names bytes outside net-in`), hz;
            this.netOffsets.push(Kz), Xz.push({
              type: "message",
              conn: Cz(0),
              RO: zz,
              payloadKind: Cz(1) >>> 16,
              payload: sz,
              stringType: Wz ? Lz.decode(Wz) : null
            })
          } else if (Iz === Fz.X.CoreErrors) {
            var uz, Nz;
            const zz = vz >= 4 ? Cz(0) : -1;
            if (zz < 0 || zz > Fz.I.PAIRS_MAX || vz !== 4 * (Fz.I.FIXED_WORDS + Fz.I.PAIR_WORDS * zz)) return this.crash(dz, `CoreErrors at ${Kz} of ${vz} bytes`), hz;
            const tz = [];
            for (let sz = 0; sz < zz; sz++) tz.push({
              code: Cz(1 + 2 * sz),
              detail: Cz(2 + 2 * sz)
            });
            null === (uz = (Nz = this.handlers).onCoreErrors) || void 0 === uz || uz.call(Nz, tz, Cz(1 + 2 * zz))
          } else if (Iz === Fz.X.RenderReload) {
            var bz, wz;
            if (vz !== Fz.Lc.BYTES) return this.crash(dz, `RenderReload at ${Kz} of ${vz} bytes`), hz;
            null === (bz = (wz = this.handlers).onRenderReload) || void 0 === bz || bz.call(wz, Cz(0), Cz(1), Cz(2))
          } else if (Iz === Fz.X.Images) {
            var Dz, gz;
            null === (Dz = (gz = this.handlers).onImages) || void 0 === Dz || Dz.call(gz, new Uint8Array(Oz.slice(sz + zz, sz + zz + vz)))
          } else if (Iz === Fz.X.ModelRequests)
            for (let sz = 0; sz < vz >>> 2; sz++) {
              var Hz, Bz;
              null === (Hz = (Bz = this.handlers).onModelRequest) || void 0 === Hz || Hz.call(Bz, Cz(sz))
            } else if (Iz === Fz.X.ModelTaken) {
              var Pz, rz;
              if (vz < 4) return this.crash(dz, `ModelTaken at ${Kz} of ${vz} bytes`), hz;
              const zz = new Uint32Array((vz >>> 2) - 1);
              for (let tz = 0; tz < zz.length; tz++) zz[tz] = Cz(1 + tz);
              null === (Pz = (rz = this.handlers).onModelTaken) || void 0 === Pz || Pz.call(rz, Cz(0), zz)
            } else if (Iz === Fz.X.TerrainTexturesWanted) {
            var Yz, xz;
            if (0 !== vz) return this.crash(dz, `TerrainTexturesWanted at ${Kz} of ${vz} bytes`), hz;
            null === (Yz = (xz = this.handlers).onTerrainTexturesWanted) || void 0 === Yz || Yz.call(xz)
          } else if (Iz === Fz.X.KeepAliveDue) {
            var mz, Jz;
            if (vz > Fz.sb) return this.crash(dz, `KeepAliveDue at ${Kz} of ${vz} bytes`), hz;
            null === (mz = (Jz = this.handlers).onKeepAlive) || void 0 === mz || mz.call(Jz, new Uint8Array(Oz, sz + zz, vz).slice())
          } else if (Iz === Fz.X.ConnectionState) {
            if (vz !== Fz.w) return this.crash(dz, `ConnectionState at ${Kz} of ${vz} bytes`), hz;
            this.netOffsets.push(Kz), Xz.push({
              type: "connection",
              conn: Cz(0),
              phase: Cz(1),
              code: 0 | Cz(2)
            })
          } else if (Iz === Fz.X.EnvLighting || Iz === Fz.X.SkyImages) {
            if (vz !== (Iz === Fz.X.EnvLighting ? Fz.S : Fz.id)) return this.crash(dz, `event ${Iz} at ${Kz} of ${vz} bytes`), hz;
            this.envEvents.push({
              kind: Iz,
              payload: new Uint8Array(Oz.slice(sz + zz, sz + zz + vz))
            })
          } else if (Iz === Fz.X.ReconnectGrace) {
            if (vz !== Fz.bc) return this.crash(dz, `ReconnectGrace at ${Kz} of ${vz} bytes`), hz;
            const zz = Cz(2);
            this.graceEvents.push({
              conn: Cz(0),
              graceMs: Cz(1),
              sessionBased: 0 !== (zz & Fz.Dc.SessionBased),
              replayOffer: 0 !== (zz & Fz.Dc.ReplayOffer)
            })
          }
          Kz = zz + (0, Fz.ke)(vz)
        }
        return Xz
      }
      forEachNetOut(zz) {
        this.forEachOut(rz, "net-out", Fz.ib.NetOutPtr, Fz.ib.NetOutLen, Fz.Hb, 0, ((tz, sz, Wz, Xz) => {
          const Oz = (0, Fz.de)(sz);
          Oz === Fz.Ib.Frame ? zz((0, Fz.ce)(sz), Wz) : this.crash(rz, `net-out record at ${Xz} is kind ${Oz}, not a frame`)
        }))
      }
      forEachWorkerOut(zz) {
        this.forEachOut(Yz, "worker-out", Fz.ib.WorkerOutPtr, Fz.ib.WorkerOutLen, Fz.zd, 4, ((tz, sz, Wz, Xz) => {
          const Oz = 255 & tz,
            oz = Oz === Fz.Pd.Init ? this.initOf(Wz, Xz) : Wz;
          null !== oz && zz(Oz, tz >>> 8 & 16777215, oz)
        }))
      }
      initOf(zz, tz) {
        const sz = this.memory().buffer;
        if (zz.byteLength !== Fz.kb) return this.crash(Yz, `worker-out Init record at ${tz} is ${zz.byteLength} bytes, not a view`), null;
        const Wz = new DataView(zz.buffer, zz.byteOffset, Fz.kb),
          Xz = Wz.getUint32(0, !0),
          Oz = Wz.getUint32(4, !0);
        return Xz + Oz > sz.byteLength ? (this.crash(Yz, `worker-out Init record at ${tz} names ${Oz} bytes at ${Xz} outside ${sz.byteLength} bytes of memory`), null) : new Uint8Array(sz, Xz, Oz)
      }
      forEachOut(zz, tz, sz, Wz, Xz, Oz, oz) {
        if (this.stopped || null === this.lastHeader) return;
        const vz = this.headerView(),
          Uz = vz[sz],
          Kz = vz[Wz];
        if (0 === Kz) return;
        const uz = this.memory().buffer;
        if (Uz % 4 !== 0 || Uz + Kz > uz.byteLength) return void this.crash(zz, `${tz} of ${Kz} bytes at ${Uz} outside ${uz.byteLength} bytes of memory`);
        const Nz = new DataView(uz, Uz, Kz);
        let bz = 0;
        for (; bz < Kz;) {
          const sz = bz + Xz,
            Wz = sz <= Kz ? Nz.getUint32(bz + Oz, !0) : -1;
          if (Wz < 0 || Wz > Kz - sz) return void this.crash(zz, `${tz} record at ${bz} overruns its ${Kz} bytes`);
          if (oz(Nz.getUint32(bz, !0), Nz.getUint32(bz + 4, !0), new Uint8Array(uz, Uz + sz, Wz), bz), this.stopped) return;
          bz = sz + (0, Fz.ke)(Wz)
        }
      }
      forEachEvent(zz) {
        if (this.stopped || null === this.lastHeader) return;
        const tz = this.headerView(),
          sz = tz[Fz.ib.EventsPtr],
          Wz = tz[Fz.ib.EventsLen];
        if (0 === Wz) return;
        const Xz = this.memory().buffer;
        if (sz % 4 !== 0 || sz + Wz > Xz.byteLength) return void this.crash(dz, `events of ${Wz} bytes at ${sz} outside ${Xz.byteLength} bytes of memory`);
        const Oz = new DataView(Xz, sz, Wz);
        let oz = 0;
        for (; oz < Wz;) {
          const tz = oz + Fz.V,
            sz = tz <= Wz ? Oz.getUint32(oz, !0) : -1,
            Xz = sz >>> 16;
          if (sz < 0 || Xz > Wz - tz) return void this.crash(dz, `event record at ${oz} overruns its ${Wz} bytes`);
          zz(65535 & sz, Oz, tz, Xz), oz = tz + (0, Fz.ke)(Xz)
        }
      }
      crashOn(zz, tz) {
        tz instanceof Wz.e ? this.crash(dz, tz.message) : this.crash(zz, tz)
      }
      crash(zz, tz) {
        this.stopped || (this.stopped = !0, this.handlers.onCrash({
          site: zz,
          error: tz,
          header: this.lastHeader
        }))
      }
      headerWord(zz) {
        return this.stopped || null === this.lastHeader ? 0 : this.headerView()[zz]
      }
      headerView() {
        const zz = this.memory().buffer;
        return zz !== this.headerBuffer && (this.headerBuffer = zz, this.header = new Uint32Array(zz, this.core.Lb(), Fz.hb)), this.header
      }
    }
  },
  40019: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Oz,
      f: () => Xz
    });
    var Fz = sz(4344);
    let Wz = null;

    function Xz(zz) {
      Wz = {
        scanned: !1
      };
      try {
        return zz()
      } finally {
        Wz = null
      }
    }

    function Oz() {
      const zz = Wz;
      if (null === zz) return (0, Fz.e)();
      const tz = (0, Fz.e)(!zz.scanned);
      return zz.scanned = !0, tz
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);