export const id = 262;
export const ids = [262];
export const modules = {
  40376: (UU, RU, gU) => {
    function tU(UU, RU, gU) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(UU, RU).getContext("2d", gU);
      const tU = document.createElement("canvas");
      return tU.width = UU, tU.height = RU, tU.getContext("2d", gU)
    }

    function pU(UU, RU) {
      return UU.getContext("2d", RU)
    }
    gU.d(RU, {
      e: () => pU,
      g: () => tU
    })
  },
  40295: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => fU,
      f: () => CU,
      j: () => iU,
      l: () => oU,
      o: () => aU,
      r: () => YU,
      s: () => WU,
      v: () => QU,
      w: () => eU,
      y: () => bU,
      C: () => sU,
      F: () => IU,
      I: () => vU,
      K: () => FU,
      M: () => BU,
      N: () => rU
    });
    var tU = gU(4449),
      pU = gU(40022),
      EU = (gU(40186), gU(10));
    class PU {
      constructor(UU, RU) {
        this.memory = UU, this.access = RU, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.hG = 0, this.u32 = new EU.l(0), this.f32 = new EU.g(0), this.u8 = new EU.d(0), this.dataView = new EU.i(new ArrayBuffer(0)), this.refresh()
      }
      refresh() {
        this.ptr = this.access.ptr(), this.hG = this.access.hG(), this.buffer = (0, EU.G)(this.memory()), this.u32 = new EU.l(this.buffer, this.ptr, this.hG >>> 2), this.f32 = new EU.g(this.buffer, this.ptr, this.hG >>> 2), this.u8 = new EU.d(this.buffer, this.ptr, this.hG), this.dataView = new EU.i(this.buffer, this.ptr, this.hG)
      }
      ensureViews() {
        (0, EU.G)(this.memory()) !== this.buffer && this.refresh()
      }
      get view() {
        return this.ensureViews(), this.dataView
      }
      room(UU) {
        return !!this.fits(UU) || (this.dropped++, !1)
      }
      fits(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.cursor;
        this.ensureViews();
        const gU = RU + UU;
        return gU <= this.hG || gU <= tU.Jc && 0 !== this.access.reserve(gU) && (this.refresh(), gU <= this.hG)
      }
      consume(UU) {
        const RU = this.cursor - UU;
        RU > 0 && UU > 0 && (this.ensureViews(), this.u8.copyWithin(0, UU, this.cursor)), this.cursor = RU > 0 ? RU : 0
      }
      writeRecord(UU, RU, gU, pU, EU) {
        if (!this.room(tU.sb)) return !1;
        const PU = this.cursor >>> 2;
        return this.u32[PU] = 65535 & UU | (65535 & RU) << 16, this.f32[PU + 1] = gU, this.f32[PU + 2] = pU, this.u32[PU + 3] = EU >>> 0, this.cursor += tU.sb, !0
      }
      writeOptions(UU, RU) {
        const gU = RU.byteLength,
          pU = tU.sb + (0, tU.te)(gU);
        if (!this.fits(pU)) return !1;
        const EU = this.cursor,
          PU = EU >>> 2;
        this.u32[PU] = tU.vb.Options, this.u32[PU + 1] = gU, this.u32[PU + 2] = 0, this.u32[PU + 3] = UU >>> 0;
        const TU = EU + tU.sb;
        return this.u8.set(RU, TU), this.u8.fill(0, TU + gU, EU + pU), this.cursor += pU, !0
      }
      writeWorkerRecord(UU, RU, gU, pU, EU, PU) {
        const TU = PU.byteLength,
          qU = tU.Od + (0, tU.te)(TU);
        if (TU > tU.Ld) return this.dropped++, !1;
        if (!this.room(qU)) return !1;
        const KU = this.cursor,
          cU = KU >>> 2;
        this.u32[cU] = UU >>> 0, this.u32[cU + 1] = 65535 & RU | (65535 & gU) << 16, this.u32[cU + 2] = pU >>> 0, this.u32[cU + 3] = EU >>> 0, this.u32[cU + 4] = TU;
        const GU = KU + tU.Od;
        return this.u8.set(PU, GU), this.u8.fill(0, GU + TU, KU + qU), this.cursor += qU, !0
      }
      written() {
        return this.ensureViews(), this.u8.subarray(0, this.cursor)
      }
      writeFrame(UU, RU) {
        return this.writeNet(tU.Wb.Frame, UU, RU)
      }
      writeOpen(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(tU.Wb.Open, UU, qU(RU))
      }
      writeClose(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(tU.Wb.Close, UU, qU(RU))
      }
      writeNet(UU, RU, gU) {
        const pU = gU.byteLength,
          EU = tU.Tb + (0, tU.te)(pU);
        if (pU > tU.Ob) return this.dropped++, !1;
        if (!this.room(EU)) return !1;
        const PU = this.cursor;
        this.u32[PU >>> 2] = pU, this.u32[1 + (PU >>> 2)] = (0, tU.me)(UU, RU);
        const TU = PU + tU.Tb;
        return this.u8.set(gU, TU), this.u8.fill(0, TU + pU, PU + EU), this.cursor += EU, !0
      }
      pu(UU, RU, gU) {
        const pU = tU.p + (0, tU.te)(gU);
        if (!this.room(pU)) return -1;
        const EU = this.cursor;
        this.u32[EU >>> 2] = 65535 & UU | (65535 & RU) << 16, this.u32[1 + (EU >>> 2)] = gU;
        const PU = EU + tU.p;
        return this.u8.fill(0, PU, EU + pU), this.cursor += pU, PU
      }
      growForCmd(UU) {
        return this.fits(tU.p + (0, tU.te)(UU), 0)
      }
      writeCmd(UU, RU, gU) {
        const tU = this.pu(UU, RU, gU.byteLength);
        return !(tU < 0) && (this.u8.set(gU, tU), !0)
      }
      copyWritten(UU, RU) {
        return this.ensureViews(), this.u8.slice(UU, UU + RU)
      }
    }
    const TU = new EU.d(0);

    function qU(UU) {
      if (0 === UU) return TU;
      const RU = new EU.d(tU.Pb);
      for (let gU = 0; gU < tU.Pb; gU++) RU[gU] = UU >>> 8 * gU & 255;
      return RU
    }
    class KU {
      constructor(UU, RU) {
        this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new PU(RU, {
          ptr: () => UU.ZG(),
          hG: () => UU.cEU(),
          reserve: RU => UU.mEU(RU)
        }), this.net = new PU(RU, {
          ptr: () => UU.WEU(),
          hG: () => UU.eEU(),
          reserve: RU => UU.IEU(RU)
        }), this.worker = new PU(RU, {
          ptr: () => UU.iEU(),
          hG: () => UU.FEU(),
          reserve: RU => UU.JEU(RU)
        }), this.cmd = new PU(RU, {
          ptr: () => UU.REU(),
          hG: () => UU.OpU(),
          reserve: RU => UU.UEU(RU)
        })
      }
      reset(UU) {
        this.input.cursor = 0, this.worker.cursor = 0, this.cmd.consume(UU)
      }
    }
    var cU = gU(35889),
      GU = gU(2241),
      jU = gU(4446),
      uU = gU(40300);
    const CU = "coreFrame",
      hU = "fatalStatus",
      QU = "otherCall",
      eU = "coreRings",
      WU = "netIn",
      fU = "abi",
      xU = "netOut",
      mU = "workerOut",
      IU = "worldgenHost",
      JU = "eventWalker",
      wU = "netEvent",
      nU = "envEvent",
      bU = "sharedTables",
      oU = "inputAction",
      ZU = new Set([JU, wU, nU, oU, bU]),
      aU = "wasmMemory",
      YU = "meshHost";

    function BU(UU, RU) {
      UU.forEachWorkerOut(((gU, pU, EU) => {
        if ((0, tU.fe)(gU)) try {
          var PU;
          null === (PU = RU.worldgen) || void 0 === PU || PU.take(gU, EU)
        } catch (qU) {
          UU.crash(IU, qU)
        } else try {
          var TU;
          null === (TU = RU.mesh) || void 0 === TU || TU.take(gU, pU, EU)
        } catch (qU) {
          UU.crash(YU, qU)
        }
      }))
    }
    const VU = 1048576;

    function rU(UU, RU) {
      let gU = !1;
      const tU = () => {
        gU = !1, RU()
      };
      return () => {
        !gU && UU.cursor >= VU && (gU = !0, queueMicrotask(tU))
      }
    }
    const XU = new Set([hU, QU, IU, YU]);

    function vU(UU) {
      return ZU.has(UU.site) ? UU.error instanceof WebAssembly.RuntimeError || (0, pU.k)(UU.error) : !XU.has(UU.site) && UU.error instanceof Error
    }
    const dU = "events",
      HU = [],
      SU = "debugLog",
      sU = "terrainTextures",
      yU = "sunShadowTextures",
      kU = new TextDecoder;

    function FU(UU, RU) {
      const {
        site: gU,
        error: pU,
        header: EU
      } = UU, PU = EU ? (0, tU.de)(EU.lastError) : "noFrame", TU = `CORE-${gU===hU?PU:gU}`, qU = null === pU || void 0 === pU ? "" : ` ${(0,cU.j)(pU)}`, KU = {
        site: gU,
        wasmBuild: RU.wasm,
        clientVersion: RU.client
      };
      return EU && (KU.status = String(EU.status), KU.lastError = PU, KU.lastErrorCode = String(EU.lastError), KU.lastErrorDetail = String(EU.lastErrorDetail), KU.errorCount = String(EU.errorCount), KU.frameIndex = String(EU.frameIndex), KU.tickIndex = String(EU.tickIndex)), {
        code: TU,
        message: `core ${gU}, last error ${PU};${qU}`,
        details: KU
      }
    }
    class iU {
      constructor(UU, RU, gU) {
        this.core = UU, this.memory = RU, this.handlers = gU, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.unsentUiPrefs = null, this.eventWalker = null, this.netOffsets = [], this.frameEvents = {
          ptr: 0,
          len: 0,
          net: HU,
          netOffsets: this.netOffsets,
          kind: "none"
        }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.rings = new KU(UU, RU)
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
      framePaces(UU) {
        if (this.stopped || this.drawsHeld) return !1;
        try {
          return this.core.TEU(UU)
        } catch (RU) {
          return this.crash(CU, RU), !1
        }
      }
      get isStopped() {
        return this.stopped
      }
      frame(UU, RU) {
        var gU;
        let EU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.stopped) return !1;
        if (!this.writePendingInput()) return !1;
        const {
          input: PU,
          net: TU,
          worker: qU,
          cmd: KU
        } = this.rings, cU = TU.cursor, GU = RU && !this.drawsHeld;
        let QU = tU.P.Fatal;
        const eU = KU.cursor;
        let fU = null;
        try {
          const RU = (GU ? tU.cb.Draws : 0) | (EU ? tU.cb.NetAll : 0);
          QU = (0, uU.d)((() => this.core.frame(UU, PU.cursor, TU.cursor, qU.cursor, RU, eU)))
        } catch (XU) {
          fU = {
            error: XU
          }
        }
        const xU = null === (gU = this.gameHost) || void 0 === gU ? void 0 : gU.takeFault();
        this.rings.reset(this.stopped || null !== fU || void 0 !== xU ? KU.cursor : eU);
        const mU = null === fU && void 0 === xU ? this.headerView() : null,
          IU = null === mU ? null : (0, tU.we)(mU);
        null !== IU && (this.lastHeader = IU);
        const nU = null !== IU && QU !== tU.P.Fatal,
          bU = nU && null !== mU ? mU[tU.jb.NetInKept] : 0,
          oU = nU && bU <= cU && bU % 4 === 0 ? bU : null;
        var ZU, aU;
        null !== IU && null !== oU && QU === tU.P.Errors && (null === (ZU = (aU = this.handlers).onErrors) || void 0 === ZU || ZU.call(aU, IU));
        const YU = null === oU ? HU : this.readEvents(cU);
        if (TU.consume(cU - (null !== oU && void 0 !== oU ? oU : 0)), this.netKept = null !== oU && void 0 !== oU ? oU : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== fU) return this.crash(CU, void 0 === xU || xU instanceof pU.d ? fU.error : xU), !1;
        if (void 0 !== xU || null === IU) return this.crashOn(CU, xU), !1;
        const BU = this.headerView()[tU.jb.FrameDraw];
        if (this.lastFrameKind = (0, jU.f)(GU, BU), QU === tU.P.Fatal) return this.crash(hU, null), !1;
        if (null === oU) return this.crash(WU, `the core kept ${bU} of ${cU} net-in bytes`), !1;
        if (this.eventWalker) {
          if (this.stopped) return !1;
          const UU = this.frameEvents,
            RU = this.headerView();
          UU.ptr = RU[tU.jb.EventsPtr], UU.len = RU[tU.jb.EventsLen], UU.net = YU, UU.kind = this.lastFrameKind;
          try {
            this.eventWalker(UU)
          } catch (XU) {
            return this.crashOn(JU, XU), !1
          }
          return this.handEnvEvents()
        }
        for (const tU of YU) {
          if (this.stopped) return !1;
          try {
            var VU, rU;
            null === (VU = (rU = this.handlers).onNetEvent) || void 0 === VU || VU.call(rU, tU)
          } catch (XU) {
            return this.crashOn(wU, XU), !1
          }
        }
        return this.handEnvEvents()
      }
      handEnvEvents() {
        for (const EU of this.graceEvents) {
          if (this.stopped) return !1;
          try {
            var UU, RU;
            null === (UU = (RU = this.handlers).onReconnectGrace) || void 0 === UU || UU.call(RU, EU)
          } catch (pU) {
            return this.crashOn(wU, pU), !1
          }
        }
        for (const EU of this.envEvents) {
          if (this.stopped) return !1;
          try {
            var gU, tU;
            null === (gU = (tU = this.handlers).onEnvEvent) || void 0 === gU || gU.call(tU, EU)
          } catch (pU) {
            return this.crashOn(nU, pU), !1
          }
        }
        return !this.stopped
      }
      setEventWalker(UU) {
        this.eventWalker = UU
      }
      writePendingInput() {
        if (this.stopped) return !1;
        const {
          input: UU
        } = this.rings;
        try {
          const RU = this.unsentUiPrefs;
          RU && UU.writeRecord(tU.vb.UiPrefs, 0, RU.nametagCutDistance, 0, (0, tU.ze)(RU)) && (this.unsentUiPrefs = null);
          const gU = this.unsentEnvPrefs;
          gU && UU.writeRecord(tU.vb.EnvPrefs, (0, tU.ee)(gU), gU.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
          const pU = this.unsentLookPrefs;
          pU && UU.writeRecord(tU.vb.Sensitivity, 0, pU.mouse, pU.touch, (0, GU.m)(pU.fovPercent)) && (this.unsentLookPrefs = null);
          let EU = 0;
          for (const {
              aux: tU,
              payload: PU
            }
            of this.unsentOptions) {
            if (!UU.writeOptions(tU, PU)) {
              if (UU.cursor > 0) break;
              this.optionsDropped++
            }
            EU++
          }
          EU > 0 && this.unsentOptions.splice(0, EU)
        } catch (RU) {
          return this.crash(eU, RU), !1
        }
        return !0
      }
      setHoldDraws(UU) {
        this.drawsHeld = UU
      }
      setUiPrefs(UU) {
        this.unsentUiPrefs = {
          ...UU
        }
      }
      setEnvPrefs(UU) {
        this.unsentEnvPrefs = {
          ...UU
        }
      }
      setLookPrefs(UU) {
        this.unsentLookPrefs = {
          ...UU
        }
      }
      queueOptions(UU, RU) {
        return !this.isStopped && (RU.byteLength > tU.ac.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
          aux: UU,
          payload: RU
        }), !0))
      }
      setChunkCap(UU) {
        return this.callCore("setChunkCap", null, (RU => RU.aEU(UU)))
      }
      shedMemory(UU) {
        const RU = this.callCore("shedMemory", null, (RU => RU.dEU(UU)));
        return 0 === RU ? null : RU
      }
      addDistanceInUse() {
        const UU = this.callCore("addDistanceInUse", null, (UU => UU.MpU()));
        return 0 === UU ? null : UU
      }
      setChunkAddDistance(UU, RU) {
        return this.callCore("setChunkAddDistance", !1, (gU => gU.ZEU(UU, RU)))
      }
      setGameHost(UU) {
        return this.callCore("setGameHost", !1, (RU => (RU.PEU(UU), this.gameHost = UU, !0)))
      }
      setAntiCheatProbes(UU) {
        return this.callCore("setAntiCheatProbes", !1, (RU => RU.bEU(UU)))
      }
      setAmbientOcclusion(UU) {
        this.callCore("setAmbientOcclusion", void 0, (RU => {
          RU.nEU(UU)
        }))
      }
      setPoseLod(UU) {
        this.callCore("setPoseLod", void 0, (RU => {
          RU.BEU(UU)
        }))
      }
      setDebugLog(UU, RU) {
        this.callCore(SU, void 0, (gU => {
          gU.hQ(UU, RU)
        }))
      }
      takeDebugLog(UU) {
        return this.callCore(SU, [], (RU => RU.QQ(UU)))
      }
      setTextureLayers(UU) {
        return this.callCore("setTextureLayers", !1, (RU => RU.vEU(UU)))
      }
      setBlockColours(UU) {
        let {
          blocks: RU,
          counts: gU,
          values: tU
        } = UU;
        return this.callCore("setBlockColours", !1, (UU => UU.ngU(RU, gU, tU)))
      }
      terrainTextureNames() {
        return this.callCore(sU, [], (UU => UU.kEU()))
      }
      setTerrainTextures(UU, RU, gU, tU) {
        return this.callCore(sU, !1, (pU => pU.XEU(UU, gU, RU, tU)))
      }
      setShaderPack(UU, RU, gU, tU, pU, EU) {
        return this.callCore("setShaderPack", !1, (PU => {
          var TU, qU;
          return null !== (TU = null === (qU = PU.SgU) || void 0 === qU ? void 0 : qU.call(PU, UU, RU, gU, tU, pU, EU)) && void 0 !== TU && TU
        }))
      }
      sunShadowWantedTextures() {
        return this.callCore(yU, null, (UU => {
          var RU, gU;
          return null !== (RU = null === (gU = UU.HEU) || void 0 === gU ? void 0 : gU.call(UU)) && void 0 !== RU ? RU : null
        }))
      }
      setSunShadowTexture(UU, RU, gU, tU, pU) {
        this.callCore(yU, void 0, (EU => {
          var PU;
          null === (PU = EU.rEU) || void 0 === PU || PU.call(EU, UU, RU, gU, tU, pU)
        }))
      }
      takeSunShadowWarnings() {
        return this.callCore(yU, [], (UU => {
          var RU, gU;
          return null !== (RU = null === (gU = UU.sEU) || void 0 === gU ? void 0 : gU.call(UU)) && void 0 !== RU ? RU : []
        }))
      }
      sunShadowsHeld() {
        return this.callCore(yU, null, (UU => {
          var RU, gU;
          return null !== (RU = null === (gU = UU.SEU) || void 0 === gU ? void 0 : gU.call(UU)) && void 0 !== RU ? RU : null
        }))
      }
      callCore(UU, RU, gU) {
        if (this.stopped) return RU;
        try {
          return gU(this.core)
        } catch (tU) {
          return this.crash(UU, tU), RU
        }
      }
      readEvents(UU) {
        this.netOffsets.length = 0;
        const RU = this.headerView(),
          gU = RU[tU.jb.EventsPtr],
          pU = RU[tU.jb.EventsLen];
        if (this.envEvents.length = 0, this.graceEvents.length = 0, 0 === pU) return HU;
        const EU = [],
          PU = this.memory().buffer;
        if (gU % 4 !== 0 || gU + pU > PU.byteLength) return this.crash(dU, `events of ${pU} bytes at ${gU} outside ${PU.byteLength} bytes of memory`), HU;
        const TU = new DataView(PU, gU, pU),
          qU = this.rings.net,
          KU = (RU, gU) => RU + gU <= UU ? qU.copyWritten(RU, gU) : null;
        let cU = 0;
        for (; cU < pU;) {
          const UU = cU + tU.V,
            RU = UU <= pU ? TU.getUint32(cU, !0) : -1,
            qU = RU >>> 16;
          if (RU < 0 || qU > pU - UU) return this.crash(dU, `event record at ${cU} overruns its ${pU} bytes`), HU;
          const nU = 65535 & RU,
            bU = RU => TU.getUint32(UU + 4 * RU, !0);
          if (nU === tU.Z.RawMessage) {
            const UU = qU >= tU.Nc.BYTES ? 65535 & bU(1) : -1,
              RU = UU === tU.Nc.STRING_TYPE,
              gU = qU === (RU ? tU.Nc.STRING_TYPE_BYTES : tU.Nc.BYTES) ? KU(bU(2), bU(3)) : null,
              pU = RU && gU ? KU(bU(4), bU(5)) : null;
            if (!gU || RU && !pU) return this.crash(dU, `RawMessage at ${cU} of ${qU} bytes names bytes outside net-in`), HU;
            this.netOffsets.push(cU), EU.push({
              type: "message",
              conn: bU(0),
              aP: UU,
              payloadKind: bU(1) >>> 16,
              payload: gU,
              stringType: pU ? kU.decode(pU) : null
            })
          } else if (nU === tU.Z.CoreErrors) {
            var GU, jU;
            const UU = qU >= 4 ? bU(0) : -1;
            if (UU < 0 || UU > tU.J.PAIRS_MAX || qU !== 4 * (tU.J.FIXED_WORDS + tU.J.PAIR_WORDS * UU)) return this.crash(dU, `CoreErrors at ${cU} of ${qU} bytes`), HU;
            const RU = [];
            for (let gU = 0; gU < UU; gU++) RU.push({
              code: bU(1 + 2 * gU),
              detail: bU(2 + 2 * gU)
            });
            null === (GU = (jU = this.handlers).onCoreErrors) || void 0 === GU || GU.call(jU, RU, bU(1 + 2 * UU))
          } else if (nU === tU.Z.RenderReload) {
            var uU, CU;
            if (qU !== tU.Uc.BYTES) return this.crash(dU, `RenderReload at ${cU} of ${qU} bytes`), HU;
            null === (uU = (CU = this.handlers).onRenderReload) || void 0 === uU || uU.call(CU, bU(0), bU(1), bU(2))
          } else if (nU === tU.Z.Images) {
            var hU, QU;
            null === (hU = (QU = this.handlers).onImages) || void 0 === hU || hU.call(QU, new Uint8Array(PU.slice(gU + UU, gU + UU + qU)))
          } else if (nU === tU.Z.ModelRequests)
            for (let gU = 0; gU < qU >>> 2; gU++) {
              var eU, WU;
              null === (eU = (WU = this.handlers).onModelRequest) || void 0 === eU || eU.call(WU, bU(gU))
            } else if (nU === tU.Z.ModelTaken) {
              var fU, xU;
              if (qU < 4) return this.crash(dU, `ModelTaken at ${cU} of ${qU} bytes`), HU;
              const UU = new Uint32Array((qU >>> 2) - 1);
              for (let RU = 0; RU < UU.length; RU++) UU[RU] = bU(1 + RU);
              null === (fU = (xU = this.handlers).onModelTaken) || void 0 === fU || fU.call(xU, bU(0), UU)
            } else if (nU === tU.Z.TerrainTexturesWanted) {
            var mU, IU;
            if (0 !== qU) return this.crash(dU, `TerrainTexturesWanted at ${cU} of ${qU} bytes`), HU;
            null === (mU = (IU = this.handlers).onTerrainTexturesWanted) || void 0 === mU || mU.call(IU)
          } else if (nU === tU.Z.KeepAliveDue) {
            var JU, wU;
            if (qU > tU.Db) return this.crash(dU, `KeepAliveDue at ${cU} of ${qU} bytes`), HU;
            null === (JU = (wU = this.handlers).onKeepAlive) || void 0 === JU || JU.call(wU, new Uint8Array(PU, gU + UU, qU).slice())
          } else if (nU === tU.Z.ConnectionState) {
            if (qU !== tU.s) return this.crash(dU, `ConnectionState at ${cU} of ${qU} bytes`), HU;
            this.netOffsets.push(cU), EU.push({
              type: "connection",
              conn: bU(0),
              phase: bU(1),
              code: 0 | bU(2)
            })
          } else if (nU === tU.Z.EnvLighting || nU === tU.Z.SkyImages) {
            if (qU !== (nU === tU.Z.EnvLighting ? tU.U : tU.md)) return this.crash(dU, `event ${nU} at ${cU} of ${qU} bytes`), HU;
            this.envEvents.push({
              kind: nU,
              payload: new Uint8Array(PU.slice(gU + UU, gU + UU + qU))
            })
          } else if (nU === tU.Z.ReconnectGrace) {
            if (qU !== tU.uc) return this.crash(dU, `ReconnectGrace at ${cU} of ${qU} bytes`), HU;
            const UU = bU(2);
            this.graceEvents.push({
              conn: bU(0),
              graceMs: bU(1),
              sessionBased: 0 !== (UU & tU.Oc.SessionBased),
              replayOffer: 0 !== (UU & tU.Oc.ReplayOffer)
            })
          }
          cU = UU + (0, tU.te)(qU)
        }
        return EU
      }
      forEachNetOut(UU) {
        this.forEachOut(xU, "net-out", tU.jb.NetOutPtr, tU.jb.NetOutLen, tU.Tb, 0, ((RU, gU, pU, EU) => {
          const PU = (0, tU.ke)(gU);
          PU === tU.Wb.Frame ? UU((0, tU.ie)(gU), pU) : this.crash(xU, `net-out record at ${EU} is kind ${PU}, not a frame`)
        }))
      }
      forEachWorkerOut(UU) {
        this.forEachOut(mU, "worker-out", tU.jb.WorkerOutPtr, tU.jb.WorkerOutLen, tU.Id, 4, ((RU, gU, pU, EU) => {
          const PU = 255 & RU,
            TU = PU === tU.Xd.Init ? this.initOf(pU, EU) : pU;
          null !== TU && UU(PU, RU >>> 8 & 16777215, TU)
        }))
      }
      initOf(UU, RU) {
        const gU = this.memory().buffer;
        if (UU.byteLength !== tU.kb) return this.crash(mU, `worker-out Init record at ${RU} is ${UU.byteLength} bytes, not a view`), null;
        const pU = new DataView(UU.buffer, UU.byteOffset, tU.kb),
          EU = pU.getUint32(0, !0),
          PU = pU.getUint32(4, !0);
        return EU + PU > gU.byteLength ? (this.crash(mU, `worker-out Init record at ${RU} names ${PU} bytes at ${EU} outside ${gU.byteLength} bytes of memory`), null) : new Uint8Array(gU, EU, PU)
      }
      forEachOut(UU, RU, gU, pU, EU, PU, TU) {
        if (this.stopped || null === this.lastHeader) return;
        const qU = this.headerView(),
          KU = qU[gU],
          cU = qU[pU];
        if (0 === cU) return;
        const GU = this.memory().buffer;
        if (KU % 4 !== 0 || KU + cU > GU.byteLength) return void this.crash(UU, `${RU} of ${cU} bytes at ${KU} outside ${GU.byteLength} bytes of memory`);
        const jU = new DataView(GU, KU, cU);
        let uU = 0;
        for (; uU < cU;) {
          const gU = uU + EU,
            pU = gU <= cU ? jU.getUint32(uU + PU, !0) : -1;
          if (pU < 0 || pU > cU - gU) return void this.crash(UU, `${RU} record at ${uU} overruns its ${cU} bytes`);
          if (TU(jU.getUint32(uU, !0), jU.getUint32(uU + 4, !0), new Uint8Array(GU, KU + gU, pU), uU), this.stopped) return;
          uU = gU + (0, tU.te)(pU)
        }
      }
      forEachEvent(UU) {
        if (this.stopped || null === this.lastHeader) return;
        const RU = this.headerView(),
          gU = RU[tU.jb.EventsPtr],
          pU = RU[tU.jb.EventsLen];
        if (0 === pU) return;
        const EU = this.memory().buffer;
        if (gU % 4 !== 0 || gU + pU > EU.byteLength) return void this.crash(dU, `events of ${pU} bytes at ${gU} outside ${EU.byteLength} bytes of memory`);
        const PU = new DataView(EU, gU, pU);
        let TU = 0;
        for (; TU < pU;) {
          const RU = TU + tU.V,
            gU = RU <= pU ? PU.getUint32(TU, !0) : -1,
            EU = gU >>> 16;
          if (gU < 0 || EU > pU - RU) return void this.crash(dU, `event record at ${TU} overruns its ${pU} bytes`);
          UU(65535 & gU, PU, RU, EU), TU = RU + (0, tU.te)(EU)
        }
      }
      crashOn(UU, RU) {
        RU instanceof pU.d ? this.crash(dU, RU.message) : this.crash(UU, RU)
      }
      crash(UU, RU) {
        this.stopped || (this.stopped = !0, this.handlers.onCrash({
          site: UU,
          error: RU,
          header: this.lastHeader
        }))
      }
      headerWord(UU) {
        return this.stopped || null === this.lastHeader ? 0 : this.headerView()[UU]
      }
      headerView() {
        const UU = this.memory().buffer;
        return UU !== this.headerBuffer && (this.headerBuffer = UU, this.header = new Uint32Array(UU, this.core.Eu(), tU.ib)), this.header
      }
    }
  },
  40300: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => PU,
      d: () => EU
    });
    var tU = gU(4352);
    let pU = null;

    function EU(UU) {
      pU = {
        scanned: !1
      };
      try {
        return UU()
      } finally {
        pU = null
      }
    }

    function PU() {
      const UU = pU;
      if (null === UU) return (0, tU.h)();
      const RU = (0, tU.h)(!UU.scanned);
      return UU.scanned = !0, RU
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);