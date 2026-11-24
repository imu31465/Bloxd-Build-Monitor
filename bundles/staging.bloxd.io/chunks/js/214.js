export const id = 214;
export const ids = [214];
export const modules = {
  40898: (BB, jB, zB) => {
    function QB(BB, jB, zB) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(BB, jB).getContext("2d", zB);
      const QB = document.createElement("canvas");
      return QB.width = BB, QB.height = jB, QB.getContext("2d", zB)
    }

    function nB(BB, jB) {
      return BB.getContext("2d", jB)
    }
    zB.d(jB, {
      e: () => nB,
      g: () => QB
    })
  },
  40865: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => NB
    });
    const QB = 1 << 20,
      nB = 1 << 21,
      dB = 1024,
      IB = 2048;

    function NB(BB, jB, zB) {
      const NB = BB + QB,
        uB = jB + dB,
        UB = zB + QB;
      return NB < 0 || NB >= nB || UB < 0 || UB >= nB || uB < 0 || uB >= IB ? -1 : (NB * nB + UB) * IB + uB
    }
  },
  40856: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => QB,
      d: () => IB,
      h: () => nB,
      j: () => dB,
      l: () => aB,
      p: () => UB,
      q: () => uB,
      r: () => NB
    });
    zB(3577);
    zB(40865);

    function QB(BB) {}

    function nB(BB) {}

    function dB(BB) {}

    function IB(BB) {}

    function NB(BB) {}

    function uB(BB, jB, zB) {}

    function UB(BB) {}

    function aB(BB) {}
  },
  40854: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => LB,
      f: () => JB,
      h: () => xB,
      l: () => fB,
      m: () => DB,
      o: () => FB,
      q: () => GB,
      r: () => yB,
      t: () => kB,
      u: () => qB,
      w: () => WB,
      x: () => SB,
      A: () => ZB,
      B: () => wB,
      C: () => YB,
      F: () => hB
    });
    var QB = zB(4887),
      nB = zB(40730),
      dB = (zB(40856), zB(12));
    class IB {
      constructor(BB, jB) {
        this.memory = BB, this.access = jB, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.Ep = 0, this.u32 = new dB.h(0), this.f32 = new dB.e(0), this.u8 = new dB.d(0), this.dataView = new dB.g(new ArrayBuffer(0)), this.refresh()
      }
      refresh() {
        this.ptr = this.access.ptr(), this.Ep = this.access.Ep(), this.buffer = (0, dB.P)(this.memory()), this.u32 = new dB.h(this.buffer, this.ptr, this.Ep >>> 2), this.f32 = new dB.e(this.buffer, this.ptr, this.Ep >>> 2), this.u8 = new dB.d(this.buffer, this.ptr, this.Ep), this.dataView = new dB.g(this.buffer, this.ptr, this.Ep)
      }
      ensureViews() {
        (0, dB.P)(this.memory()) !== this.buffer && this.refresh()
      }
      get view() {
        return this.ensureViews(), this.dataView
      }
      room(BB) {
        return !!this.fits(BB) || (this.dropped++, !1)
      }
      fits(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.cursor;
        this.ensureViews();
        const zB = jB + BB;
        return zB <= this.Ep || zB <= QB.Ec && 0 !== this.access.reserve(zB) && (this.refresh(), zB <= this.Ep)
      }
      consume(BB) {
        const jB = this.cursor - BB;
        jB > 0 && BB > 0 && (this.ensureViews(), this.u8.copyWithin(0, BB, this.cursor)), this.cursor = jB > 0 ? jB : 0
      }
      writeRecord(BB, jB, zB, nB, dB) {
        if (!this.room(QB.nb)) return !1;
        const IB = this.cursor >>> 2;
        return this.u32[IB] = 65535 & BB | (65535 & jB) << 16, this.f32[IB + 1] = zB, this.f32[IB + 2] = nB, this.u32[IB + 3] = dB >>> 0, this.cursor += QB.nb, !0
      }
      writeOptions(BB, jB) {
        const zB = jB.byteLength,
          nB = QB.nb + (0, QB.ie)(zB);
        if (!this.fits(nB)) return !1;
        const dB = this.cursor,
          IB = dB >>> 2;
        this.u32[IB] = QB.pb.Options, this.u32[IB + 1] = zB, this.u32[IB + 2] = 0, this.u32[IB + 3] = BB >>> 0;
        const NB = dB + QB.nb;
        return this.u8.set(jB, NB), this.u8.fill(0, NB + zB, dB + nB), this.cursor += nB, !0
      }
      writeWorkerRecord(BB, jB, zB, nB, dB, IB) {
        const NB = IB.byteLength,
          uB = QB.Bd + (0, QB.ie)(NB);
        if (NB > QB.Ad) return this.dropped++, !1;
        if (!this.room(uB)) return !1;
        const UB = this.cursor,
          aB = UB >>> 2;
        this.u32[aB] = BB >>> 0, this.u32[aB + 1] = 65535 & jB | (65535 & zB) << 16, this.u32[aB + 2] = nB >>> 0, this.u32[aB + 3] = dB >>> 0, this.u32[aB + 4] = NB;
        const pB = UB + QB.Bd;
        return this.u8.set(IB, pB), this.u8.fill(0, pB + NB, UB + uB), this.cursor += uB, !0
      }
      written() {
        return this.ensureViews(), this.u8.subarray(0, this.cursor)
      }
      writeFrame(BB, jB) {
        return this.writeNet(QB.Tb.Frame, BB, jB)
      }
      writeOpen(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(QB.Tb.Open, BB, uB(jB))
      }
      writeClose(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(QB.Tb.Close, BB, uB(jB))
      }
      writeNet(BB, jB, zB) {
        const nB = zB.byteLength,
          dB = QB.Rb + (0, QB.ie)(nB);
        if (nB > QB.Mb) return this.dropped++, !1;
        if (!this.room(dB)) return !1;
        const IB = this.cursor;
        this.u32[IB >>> 2] = nB, this.u32[1 + (IB >>> 2)] = (0, QB.de)(BB, jB);
        const NB = IB + QB.Rb;
        return this.u8.set(zB, NB), this.u8.fill(0, NB + nB, IB + dB), this.cursor += dB, !0
      }
      Ds(BB, jB, zB) {
        const nB = QB.u + (0, QB.ie)(zB);
        if (!this.room(nB)) return -1;
        const dB = this.cursor;
        this.u32[dB >>> 2] = 65535 & BB | (65535 & jB) << 16, this.u32[1 + (dB >>> 2)] = zB;
        const IB = dB + QB.u;
        return this.u8.fill(0, IB, dB + nB), this.cursor += nB, IB
      }
      growForCmd(BB) {
        return this.fits(QB.u + (0, QB.ie)(BB), 0)
      }
      writeCmd(BB, jB, zB) {
        const QB = this.Ds(BB, jB, zB.byteLength);
        return !(QB < 0) && (this.u8.set(zB, QB), !0)
      }
      copyWritten(BB, jB) {
        return this.ensureViews(), this.u8.slice(BB, BB + jB)
      }
    }
    const NB = new dB.d(0);

    function uB(BB) {
      if (0 === BB) return NB;
      const jB = new dB.d(QB.Nb);
      for (let zB = 0; zB < QB.Nb; zB++) jB[zB] = BB >>> 8 * zB & 255;
      return jB
    }
    class UB {
      constructor(BB, jB) {
        this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new IB(jB, {
          ptr: () => BB.Pp(),
          Ep: () => BB.HdB(),
          reserve: jB => BB.WdB(jB)
        }), this.net = new IB(jB, {
          ptr: () => BB.AdB(),
          Ep: () => BB.ZdB(),
          reserve: jB => BB.edB(jB)
        }), this.worker = new IB(jB, {
          ptr: () => BB.aIB(),
          Ep: () => BB.UIB(),
          reserve: jB => BB.ldB(jB)
        }), this.cmd = new IB(jB, {
          ptr: () => BB.LdB(),
          Ep: () => BB.kdB(),
          reserve: jB => BB.GdB(jB)
        })
      }
      reset(BB, jB, zB) {
        this.input.consume(BB), this.worker.consume(jB), this.cmd.consume(zB)
      }
    }
    var aB = zB(36347),
      pB = zB(2491),
      rB = zB(4879),
      sB = zB(40867);
    const JB = "coreFrame",
      mB = "fatalStatus",
      yB = "otherCall",
      kB = "coreRings",
      GB = "netIn",
      LB = "abi",
      gB = "netOut",
      tB = "workerOut",
      SB = "worldgenHost",
      MB = "eventWalker",
      EB = "netEvent",
      iB = "envEvent",
      qB = "sharedTables",
      fB = "inputAction",
      oB = "frameSends",
      HB = new Set([MB, EB, iB, oB, fB, qB]),
      DB = "wasmMemory",
      FB = "meshHost";

    function YB(BB, jB) {
      BB.forEachWorkerOut(((zB, nB, dB) => {
        if ((0, QB.Wd)(zB)) try {
          var IB;
          null === (IB = jB.worldgen) || void 0 === IB || IB.take(zB, dB)
        } catch (uB) {
          BB.crash(SB, uB)
        } else try {
          var NB;
          null === (NB = jB.mesh) || void 0 === NB || NB.take(zB, nB, dB)
        } catch (uB) {
          BB.crash(FB, uB)
        }
      }))
    }
    const VB = 1048576;

    function hB(BB, jB) {
      let zB = !1;
      const QB = () => {
        zB = !1, jB()
      };
      return () => {
        !zB && BB.cursor >= VB && (zB = !0, queueMicrotask(QB))
      }
    }
    const XB = new Set([mB, yB, SB, FB]);

    function ZB(BB) {
      return HB.has(BB.site) ? BB.error instanceof WebAssembly.RuntimeError || (0, nB.l)(BB.error) : !XB.has(BB.site) && BB.error instanceof Error
    }
    const AB = "events",
      TB = [],
      PB = "debugLog",
      WB = "terrainTextures",
      eB = "sunShadowTextures",
      lB = new TextDecoder;

    function wB(BB, jB) {
      const {
        site: zB,
        error: nB,
        header: dB
      } = BB, IB = dB ? (0, QB.Od)(dB.lastError) : "noFrame", NB = `CORE-${zB===mB?IB:zB}`, uB = null === nB || void 0 === nB ? "" : ` ${(0,aB.m)(nB)}`, UB = {
        site: zB,
        wasmBuild: jB.wasm,
        clientVersion: jB.client
      };
      return dB && (UB.status = String(dB.status), UB.lastError = IB, UB.lastErrorCode = String(dB.lastError), UB.lastErrorDetail = String(dB.lastErrorDetail), UB.errorCount = String(dB.errorCount), UB.frameIndex = String(dB.frameIndex), UB.tickIndex = String(dB.tickIndex)), {
        code: NB,
        message: `core ${zB}, last error ${IB};${uB}`,
        details: UB
      }
    }
    class xB {
      constructor(BB, jB, zB) {
        this.core = BB, this.memory = jB, this.handlers = zB, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.loadCountsBuffer = null, this.loadCounts = new Uint32Array(0), this.unsentUiPrefs = null, this.eventWalker = null, this.netOffsets = [], this.frameEvents = {
          ptr: 0,
          len: 0,
          net: TB,
          netOffsets: this.netOffsets,
          kind: "none"
        }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.atSendsStop = !1, this.rings = new UB(BB, jB)
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
      framePaces(BB) {
        if (this.stopped || this.drawsHeld) return !1;
        try {
          return this.core.qdB(BB)
        } catch (jB) {
          return this.crash(JB, jB), !1
        }
      }
      get isStopped() {
        return this.stopped
      }
      frame(BB, jB) {
        var zB;
        let dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.stopped) return !1;
        if (!this.writePendingInput()) return !1;
        const {
          input: IB,
          net: NB,
          worker: uB,
          cmd: UB
        } = this.rings, aB = NB.cursor, pB = jB && !this.drawsHeld;
        let yB = QB.K.Fatal;
        const kB = IB.cursor,
          LB = uB.cursor,
          gB = UB.cursor;
        let tB, SB = null;
        const iB = this.handlers.onSends;
        try {
          const jB = (pB ? QB._.Draws : 0) | (dB ? QB._.NetAll : 0) | (iB ? QB._.StopForSends : 0);
          yB = (0, sB.c)((() => {
            let zB = this.core.frame(BB, kB, NB.cursor, LB, jB, gB);
            for (; zB === QB.jd && iB;) {
              var nB;
              if (tB ??= null === (nB = this.gameHost) || void 0 === nB ? void 0 : nB.takeFault(), void 0 === tB && !this.takeSends(iB)) return QB.K.Fatal;
              zB = this.core.Cy()
            }
            return zB
          }))
        } catch (lB) {
          SB = {
            error: lB
          }
        }
        tB ??= null === (zB = this.gameHost) || void 0 === zB ? void 0 : zB.takeFault();
        const qB = this.stopped || null !== SB || void 0 !== tB;
        this.rings.reset(qB ? IB.cursor : kB, qB ? uB.cursor : LB, qB ? UB.cursor : gB);
        const fB = null === SB && void 0 === tB,
          oB = fB && !this.stopped && yB === QB.K.Fatal && 0 === this.core.Fs(),
          HB = fB && !oB ? this.headerView() : null,
          DB = oB ? {
            ...null !== (FB = this.lastHeader) && void 0 !== FB ? FB : (0, QB.le)(new Uint32Array(QB.fb)),
            status: QB.K.Fatal,
            lastError: QB.J.CoreBusy,
            lastErrorDetail: 0
          } : null === HB ? null : (0, QB.le)(HB);
        var FB;
        null !== DB && (this.lastHeader = DB);
        const YB = null !== DB && yB !== QB.K.Fatal,
          VB = YB && null !== HB ? HB[QB.jb.NetInKept] : 0,
          hB = YB && VB <= aB && VB % 4 === 0 ? VB : null;
        var XB, ZB;
        null !== DB && null !== hB && yB === QB.K.Errors && (null === (XB = (ZB = this.handlers).onErrors) || void 0 === XB || XB.call(ZB, DB));
        const AB = null === hB ? TB : this.readEvents(aB);
        if (NB.consume(aB - (null !== hB && void 0 !== hB ? hB : 0)), this.netKept = null !== hB && void 0 !== hB ? hB : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== SB) return this.crash(JB, void 0 === tB || tB instanceof nB.c ? SB.error : tB), !1;
        if (void 0 !== tB || null === DB) return this.crashOn(JB, tB), !1;
        if (oB) return this.crash(mB, null), !1;
        const PB = this.headerView()[QB.jb.FrameDraw];
        if (this.lastFrameKind = (0, rB.h)(pB, PB), yB === QB.K.Fatal) return this.crash(mB, null), !1;
        if (null === hB) return this.crash(GB, `the core kept ${VB} of ${aB} net-in bytes`), !1;
        if (this.eventWalker) {
          if (this.stopped) return !1;
          const BB = this.frameEvents,
            jB = this.headerView();
          BB.ptr = jB[QB.jb.EventsPtr], BB.len = jB[QB.jb.EventsLen], BB.net = AB, BB.kind = this.lastFrameKind;
          try {
            this.eventWalker(BB)
          } catch (lB) {
            return this.crashOn(MB, lB), !1
          }
          return this.handEnvEvents()
        }
        for (const QB of AB) {
          if (this.stopped) return !1;
          try {
            var WB, eB;
            null === (WB = (eB = this.handlers).onNetEvent) || void 0 === WB || WB.call(eB, QB)
          } catch (lB) {
            return this.crashOn(EB, lB), !1
          }
        }
        return this.handEnvEvents()
      }
      handEnvEvents() {
        for (const dB of this.graceEvents) {
          if (this.stopped) return !1;
          try {
            var BB, jB;
            null === (BB = (jB = this.handlers).onReconnectGrace) || void 0 === BB || BB.call(jB, dB)
          } catch (nB) {
            return this.crashOn(EB, nB), !1
          }
        }
        for (const dB of this.envEvents) {
          if (this.stopped) return !1;
          try {
            var zB, QB;
            null === (zB = (QB = this.handlers).onEnvEvent) || void 0 === zB || zB.call(QB, dB)
          } catch (nB) {
            return this.crashOn(iB, nB), !1
          }
        }
        return !this.stopped
      }
      setEventWalker(BB) {
        this.eventWalker = BB
      }
      writePendingInput() {
        if (this.stopped) return !1;
        const {
          input: BB
        } = this.rings;
        try {
          const jB = this.unsentUiPrefs;
          jB && BB.writeRecord(QB.pb.UiPrefs, 0, jB.nametagCutDistance, 0, (0, QB.me)(jB)) && (this.unsentUiPrefs = null);
          const zB = this.unsentEnvPrefs;
          zB && BB.writeRecord(QB.pb.EnvPrefs, (0, QB.Sd)(zB), zB.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
          const nB = this.unsentLookPrefs;
          nB && BB.writeRecord(QB.pb.Sensitivity, 0, nB.mouse, nB.touch, (0, pB.j)(nB.fovPercent)) && (this.unsentLookPrefs = null);
          let dB = 0;
          for (const {
              aux: QB,
              payload: IB
            }
            of this.unsentOptions) {
            if (!BB.writeOptions(QB, IB)) {
              if (BB.cursor > 0) break;
              this.optionsDropped++
            }
            dB++
          }
          dB > 0 && this.unsentOptions.splice(0, dB)
        } catch (jB) {
          return this.crash(kB, jB), !1
        }
        return !0
      }
      setHoldDraws(BB) {
        this.drawsHeld = BB
      }
      setUiPrefs(BB) {
        this.unsentUiPrefs = {
          ...BB
        }
      }
      setEnvPrefs(BB) {
        this.unsentEnvPrefs = {
          ...BB
        }
      }
      setLookPrefs(BB) {
        this.unsentLookPrefs = {
          ...BB
        }
      }
      queueOptions(BB, jB) {
        return !this.isStopped && (jB.byteLength > QB.Zb.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
          aux: BB,
          payload: jB
        }), !0))
      }
      setChunkCap(BB) {
        return this.callCore("setChunkCap", null, (jB => jB.bdB(BB)))
      }
      shedMemory(BB) {
        const jB = this.callCore("shedMemory", null, (jB => jB.QIB(BB)));
        return 0 === jB ? null : jB
      }
      addDistanceInUse() {
        const BB = this.callCore("addDistanceInUse", null, (BB => BB.rdB()));
        return 0 === BB ? null : BB
      }
      setChunkAddDistance(BB, jB) {
        return this.callCore("setChunkAddDistance", !1, (zB => zB.cdB(BB, jB)))
      }
      setGameHost(BB) {
        return this.callCore("setGameHost", !1, (jB => (jB.EdB(BB), this.gameHost = BB, !0)))
      }
      setAntiCheatProbes(BB) {
        return this.callCore("setAntiCheatProbes", !1, (jB => jB.KdB(BB)))
      }
      setAmbientOcclusion(BB) {
        this.callCore("setAmbientOcclusion", void 0, (jB => {
          jB.xdB(BB)
        }))
      }
      setPoseLod(BB) {
        this.callCore("setPoseLod", void 0, (jB => {
          jB.RdB(BB)
        }))
      }
      setDebugLog(BB, jB) {
        this.callCore(PB, void 0, (zB => {
          zB.ey(BB, jB)
        }))
      }
      takeDebugLog(BB) {
        return this.callCore(PB, [], (jB => jB.ly(BB)))
      }
      setTextureLayers(BB) {
        return this.callCore("setTextureLayers", !1, (jB => jB.zIB(BB)))
      }
      setBlockColours(BB) {
        let {
          blocks: jB,
          counts: zB,
          values: QB
        } = BB;
        return this.callCore("setBlockColours", !1, (BB => BB.czB(jB, zB, QB)))
      }
      terrainTextureNames() {
        return this.callCore(WB, [], (BB => BB.uIB()))
      }
      setTerrainTextures(BB, jB, zB, QB) {
        return this.callCore(WB, !1, (nB => nB.jIB(BB, zB, jB, QB)))
      }
      setShaderPack(BB, jB, zB, QB, nB, dB) {
        return this.callCore("setShaderPack", !1, (IB => {
          var NB, uB;
          return null !== (NB = null === (uB = IB.NQB) || void 0 === uB ? void 0 : uB.call(IB, BB, jB, zB, QB, nB, dB)) && void 0 !== NB && NB
        }))
      }
      sunShadowWantedTextures() {
        return this.callCore(eB, null, (BB => {
          var jB, zB;
          return null !== (jB = null === (zB = BB.nIB) || void 0 === zB ? void 0 : zB.call(BB)) && void 0 !== jB ? jB : null
        }))
      }
      setSunShadowTexture(BB, jB, zB, QB, nB) {
        this.callCore(eB, void 0, (dB => {
          var IB;
          null === (IB = dB.BIB) || void 0 === IB || IB.call(dB, BB, jB, zB, QB, nB)
        }))
      }
      takeSunShadowWarnings() {
        return this.callCore(eB, [], (BB => {
          var jB, zB;
          return null !== (jB = null === (zB = BB.IIB) || void 0 === zB ? void 0 : zB.call(BB)) && void 0 !== jB ? jB : []
        }))
      }
      sunShadowsHeld() {
        return this.callCore(eB, null, (BB => {
          var jB, zB;
          return null !== (jB = null === (zB = BB.dIB) || void 0 === zB ? void 0 : zB.call(BB)) && void 0 !== jB ? jB : null
        }))
      }
      callCore(BB, jB, zB) {
        if (this.stopped) return jB;
        try {
          return zB(this.core)
        } catch (QB) {
          return this.crash(BB, QB), jB
        }
      }
      readEvents(BB) {
        this.netOffsets.length = 0;
        const jB = this.headerView(),
          zB = jB[QB.jb.EventsPtr],
          nB = jB[QB.jb.EventsLen];
        if (this.envEvents.length = 0, this.graceEvents.length = 0, 0 === nB) return TB;
        const dB = [],
          IB = this.memory().buffer;
        if (zB % 4 !== 0 || zB + nB > IB.byteLength) return this.crash(AB, `events of ${nB} bytes at ${zB} outside ${IB.byteLength} bytes of memory`), TB;
        const NB = new DataView(IB, zB, nB),
          uB = this.rings.net,
          UB = (jB, zB) => jB + zB <= BB ? uB.copyWritten(jB, zB) : null;
        let aB = 0;
        for (; aB < nB;) {
          const BB = aB + QB.Q,
            jB = BB <= nB ? NB.getUint32(aB, !0) : -1,
            uB = jB >>> 16;
          if (jB < 0 || uB > nB - BB) return this.crash(AB, `event record at ${aB} overruns its ${nB} bytes`), TB;
          const fB = 65535 & jB,
            oB = jB => NB.getUint32(BB + 4 * jB, !0);
          if (fB === QB.U.RawMessage) {
            const BB = uB >= QB.Gc.BYTES ? 65535 & oB(1) : -1,
              jB = BB === QB.Gc.STRING_TYPE,
              zB = uB === (jB ? QB.Gc.STRING_TYPE_BYTES : QB.Gc.BYTES) ? UB(oB(2), oB(3)) : null,
              nB = jB && zB ? UB(oB(4), oB(5)) : null;
            if (!zB || jB && !nB) return this.crash(AB, `RawMessage at ${aB} of ${uB} bytes names bytes outside net-in`), TB;
            this.netOffsets.push(aB), dB.push({
              type: "message",
              conn: oB(0),
              ha: BB,
              payloadKind: oB(1) >>> 16,
              payload: zB,
              stringType: nB ? lB.decode(nB) : null
            })
          } else if (fB === QB.U.CoreErrors) {
            var pB, rB;
            const BB = uB >= 4 ? oB(0) : -1;
            if (BB < 0 || BB > QB.H.PAIRS_MAX || uB !== 4 * (QB.H.FIXED_WORDS + QB.H.PAIR_WORDS * BB)) return this.crash(AB, `CoreErrors at ${aB} of ${uB} bytes`), TB;
            const jB = [];
            for (let zB = 0; zB < BB; zB++) jB.push({
              code: oB(1 + 2 * zB),
              detail: oB(2 + 2 * zB)
            });
            null === (pB = (rB = this.handlers).onCoreErrors) || void 0 === pB || pB.call(rB, jB, oB(1 + 2 * BB))
          } else if (fB === QB.U.RenderReload) {
            var sB, JB;
            if (uB !== QB.Tc.BYTES) return this.crash(AB, `RenderReload at ${aB} of ${uB} bytes`), TB;
            null === (sB = (JB = this.handlers).onRenderReload) || void 0 === sB || sB.call(JB, oB(0), oB(1), oB(2))
          } else if (fB === QB.U.JoinPreloadEnded) {
            var mB, yB;
            if (uB !== QB.tb.BYTES) return this.crash(AB, `JoinPreloadEnded at ${aB} of ${uB} bytes`), TB;
            null === (mB = (yB = this.handlers).onJoinPreloadEnded) || void 0 === mB || mB.call(yB, {
              chunks: oB(QB.tb.CHUNKS),
              bytes: oB(QB.tb.BYTES_HELD),
              asked: oB(QB.tb.ASKED),
              replaced: oB(QB.tb.REPLACED),
              dropped: oB(QB.tb.DROPPED)
            })
          } else if (fB === QB.U.Images) {
            var kB, GB;
            null === (kB = (GB = this.handlers).onImages) || void 0 === kB || kB.call(GB, new Uint8Array(IB.slice(zB + BB, zB + BB + uB)))
          } else if (fB === QB.U.ModelRequests)
            for (let zB = 0; zB < uB >>> 2; zB++) {
              var LB, gB;
              null === (LB = (gB = this.handlers).onModelRequest) || void 0 === LB || LB.call(gB, oB(zB))
            } else if (fB === QB.U.ModelTaken) {
              var tB, SB;
              if (uB < 4) return this.crash(AB, `ModelTaken at ${aB} of ${uB} bytes`), TB;
              const BB = new Uint32Array((uB >>> 2) - 1);
              for (let jB = 0; jB < BB.length; jB++) BB[jB] = oB(1 + jB);
              null === (tB = (SB = this.handlers).onModelTaken) || void 0 === tB || tB.call(SB, oB(0), BB)
            } else if (fB === QB.U.TerrainTexturesWanted) {
            var MB, EB;
            if (0 !== uB) return this.crash(AB, `TerrainTexturesWanted at ${aB} of ${uB} bytes`), TB;
            null === (MB = (EB = this.handlers).onTerrainTexturesWanted) || void 0 === MB || MB.call(EB)
          } else if (fB === QB.U.KeepAliveDue) {
            var iB, qB;
            if (uB > QB.wb) return this.crash(AB, `KeepAliveDue at ${aB} of ${uB} bytes`), TB;
            null === (iB = (qB = this.handlers).onKeepAlive) || void 0 === iB || iB.call(qB, new Uint8Array(IB, zB + BB, uB).slice())
          } else if (fB === QB.U.ConnectionState) {
            if (uB !== QB.x) return this.crash(AB, `ConnectionState at ${aB} of ${uB} bytes`), TB;
            this.netOffsets.push(aB), dB.push({
              type: "connection",
              conn: oB(0),
              phase: oB(1),
              code: 0 | oB(2)
            })
          } else if (fB === QB.U.EnvLighting || fB === QB.U.SkyImages) {
            if (uB !== (fB === QB.U.EnvLighting ? QB.O : QB.md)) return this.crash(AB, `event ${fB} at ${aB} of ${uB} bytes`), TB;
            this.envEvents.push({
              kind: fB,
              payload: new Uint8Array(IB.slice(zB + BB, zB + BB + uB))
            })
          } else if (fB === QB.U.ReconnectGrace) {
            if (uB !== QB.oc) return this.crash(AB, `ReconnectGrace at ${aB} of ${uB} bytes`), TB;
            const BB = oB(2);
            this.graceEvents.push({
              conn: oB(0),
              graceMs: oB(1),
              sessionBased: 0 !== (BB & QB.Kc.SessionBased),
              replayOffer: 0 !== (BB & QB.Kc.ReplayOffer)
            })
          }
          aB = BB + (0, QB.ie)(uB)
        }
        return dB
      }
      takeSends(BB) {
        this.atSendsStop = !0;
        try {
          BB()
        } catch (jB) {
          this.crashOn(oB, jB)
        } finally {
          this.atSendsStop = !1
        }
        return !this.stopped
      }
      forEachNetOut(BB) {
        this.forEachOut(gB, "net-out", QB.jb.NetOutPtr, QB.jb.NetOutLen, QB.Rb, 0, ((jB, zB, nB, dB) => {
          const IB = (0, QB.$d)(zB);
          IB === QB.Tb.Frame ? BB((0, QB._d)(zB), nB) : this.crash(gB, `net-out record at ${dB} is kind ${IB}, not a frame`)
        }))
      }
      forEachWorkerOut(BB) {
        this.forEachOut(tB, "worker-out", QB.jb.WorkerOutPtr, QB.jb.WorkerOutLen, QB.zd, 4, ((jB, zB, nB, dB) => {
          const IB = 255 & jB,
            NB = IB === QB.Jd.Init ? this.initOf(nB, dB) : nB;
          null !== NB && BB(IB, jB >>> 8 & 16777215, NB)
        }))
      }
      initOf(BB, jB) {
        const zB = this.memory().buffer;
        if (BB.byteLength !== QB.kb) return this.crash(tB, `worker-out Init record at ${jB} is ${BB.byteLength} bytes, not a view`), null;
        const nB = new DataView(BB.buffer, BB.byteOffset, QB.kb),
          dB = nB.getUint32(0, !0),
          IB = nB.getUint32(4, !0);
        return dB + IB > zB.byteLength ? (this.crash(tB, `worker-out Init record at ${jB} names ${IB} bytes at ${dB} outside ${zB.byteLength} bytes of memory`), null) : new Uint8Array(zB, dB, IB)
      }
      forEachOut(BB, jB, zB, nB, dB, IB, NB) {
        if (!this.headerReadable()) return;
        const uB = this.headerView(),
          UB = uB[zB],
          aB = uB[nB];
        if (0 === aB) return;
        const pB = this.memory().buffer;
        if (UB % 4 !== 0 || UB + aB > pB.byteLength) return void this.crash(BB, `${jB} of ${aB} bytes at ${UB} outside ${pB.byteLength} bytes of memory`);
        const rB = new DataView(pB, UB, aB);
        let sB = 0;
        for (; sB < aB;) {
          const zB = sB + dB,
            nB = zB <= aB ? rB.getUint32(sB + IB, !0) : -1;
          if (nB < 0 || nB > aB - zB) return void this.crash(BB, `${jB} record at ${sB} overruns its ${aB} bytes`);
          if (NB(rB.getUint32(sB, !0), rB.getUint32(sB + 4, !0), new Uint8Array(pB, UB + zB, nB), sB), this.stopped) return;
          sB = zB + (0, QB.ie)(nB)
        }
      }
      forEachEvent(BB) {
        if (this.stopped || null === this.lastHeader) return;
        const jB = this.headerView(),
          zB = jB[QB.jb.EventsPtr],
          nB = jB[QB.jb.EventsLen];
        if (0 === nB) return;
        const dB = this.memory().buffer;
        if (zB % 4 !== 0 || zB + nB > dB.byteLength) return void this.crash(AB, `events of ${nB} bytes at ${zB} outside ${dB.byteLength} bytes of memory`);
        const IB = new DataView(dB, zB, nB);
        let NB = 0;
        for (; NB < nB;) {
          const jB = NB + QB.Q,
            zB = jB <= nB ? IB.getUint32(NB, !0) : -1,
            dB = zB >>> 16;
          if (zB < 0 || dB > nB - jB) return void this.crash(AB, `event record at ${NB} overruns its ${nB} bytes`);
          BB(65535 & zB, IB, jB, dB), NB = jB + (0, QB.ie)(dB)
        }
      }
      crashOn(BB, jB) {
        jB instanceof nB.c ? this.crash(AB, jB.message) : this.crash(BB, jB)
      }
      crash(BB, jB) {
        this.stopped || (this.stopped = !0, this.handlers.onCrash({
          site: BB,
          error: jB,
          header: this.lastHeader
        }))
      }
      headerWord(BB) {
        return this.headerReadable() ? this.headerView()[BB] : 0
      }
      headerReadable() {
        return !this.stopped && (null !== this.lastHeader || this.atSendsStop)
      }
      readLoadCounts(BB) {
        const jB = this.loadCountWords();
        return null !== jB && (BB.chunksReceived = jB[QB.Db.ChunksReceived], BB.chunksCancelled = this.headerView()[QB.jb.ChunksCancelled], BB.chunksStored = jB[QB.Db.ChunksStored], BB.jobsSent = jB[QB.Db.JobsSent], BB.jobsDone = jB[QB.Db.JobsDone], BB.jobsInFlight = jB[QB.Db.JobsInFlight], BB.workersLive = jB[QB.Db.WorkersLive], BB.workersRetired = jB[QB.Db.WorkersRetired], !0)
      }
      readViewQueuedPrograms() {
        var BB, jB;
        const zB = null !== (BB = null === (jB = this.loadCountWords()) || void 0 === jB ? void 0 : jB[QB.Db.ViewQueuedPrograms]) && void 0 !== BB ? BB : 0;
        return 0 === zB ? null : zB - 1
      }
      readFirstViewWait(BB, jB) {
        const zB = this.loadCountWords();
        return null === zB ? null : [zB[QB.Db.FirstViewLinkMs], zB[QB.Db.FirstViewTerrainMs], zB[QB.Db.FirstViewHeldMs], zB[QB.Db.FirstViewOtherMs], zB[QB.Db.FirstViewGaps], zB[QB.Db.FirstViewGapMs], BB, jB]
      }
      loadCountWords() {
        if (this.stopped || null === this.lastHeader) return null;
        const BB = this.core.Wy();
        if (0 === BB) return null;
        const jB = this.memory().buffer;
        return jB !== this.loadCountsBuffer && (this.loadCountsBuffer = jB, this.loadCounts = new Uint32Array(jB, BB, QB.xb)), this.loadCounts
      }
      headerView() {
        const BB = this.memory().buffer;
        return BB !== this.headerBuffer && (this.headerBuffer = BB, this.header = new Uint32Array(BB, this.core.Fs(), QB.fb)), this.header
      }
    }
  },
  40867: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => IB,
      c: () => dB
    });
    var QB = zB(4782);
    let nB = null;

    function dB(BB) {
      nB = {
        scanned: !1
      };
      try {
        return BB()
      } finally {
        nB = null
      }
    }

    function IB() {
      const BB = nB;
      if (null === BB) return (0, QB.e)();
      const jB = (0, QB.e)(!BB.scanned);
      return BB.scanned = !0, jB
    }
  },
  40909: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => QB
    });
    const QB = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  40929: (BB, jB, zB) => {
    function QB() {
      return zB(40933)
    }

    function nB() {
      return zB(40939)
    }

    function dB(BB) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(BB)
    }
    zB.d(jB, {
      c: () => dB,
      g: () => QB,
      k: () => nB
    })
  },
  36347: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => NB,
      i: () => UB,
      l: () => IB,
      m: () => pB
    });
    var QB = zB(36340),
      nB = zB(12);
    const dB = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function IB(BB) {
      if (BB instanceof WebAssembly.RuntimeError) return !0;
      const jB = BB instanceof Error ? BB.stack : void 0;
      return "string" === typeof jB && dB.test(jB)
    }

    function NB(BB, jB, zB) {
      var nB;
      const IB = BB instanceof Error ? BB.name : "thrown",
        NB = (BB instanceof Error && null !== (nB = BB.stack) && void 0 !== nB ? nB : "").split("\n").filter((BB => dB.test(BB))).slice(0, 8).map((BB => BB.trim())),
        uB = null === jB ? "wasm memory unknown" : `wasm memory ${Math.round(jB/2**20)} MB`,
        UB = null === zB.panic ? "" : `, panic: ${(0,QB.k)(zB.panic)}`,
        aB = `${IB}: ${BB instanceof Error?BB.message:String(BB)}`;
      return `${(0,QB.o)(zB.kind,zB.refusedBytes)} ${aB} (${uB})${UB}${NB.length>0?` | ${NB.join(" < ")}`:""}`
    }
    const uB = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function UB(BB) {
      var jB;
      let zB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(BB instanceof Error) || !uB.test(BB.message)) return {};
      if (!("detached" in zB)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, nB.eb)(null === (jB = (0, nB.X)(zB, "detached")) || void 0 === jB ? void 0 : jB.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const aB = 500;

    function pB(BB) {
      let jB = "[object Object]";
      try {
        jB = String(BB)
      } catch {}
      if ("[object Object]" !== jB) return jB;
      try {
        var zB, QB;
        return null !== (zB = null === (QB = JSON.stringify(BB)) || void 0 === QB ? void 0 : QB.slice(0, aB)) && void 0 !== zB ? zB : jB
      } catch {
        return jB
      }
    }
  },
  40933: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  40939: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  },
  36340: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => QB,
      h: () => dB,
      k: () => uB,
      m: () => IB,
      o: () => nB
    });
    const QB = /^alloc_failed (\d+) bytes$/;

    function nB(BB, jB) {
      return dB(BB, jB) ? `trap=alloc_failed ${jB} bytes` : `trap=${BB}`
    }

    function dB(BB, jB) {
      return "unreachable" === BB && jB > 0
    }

    function IB(BB, jB, zB) {
      const QB = function(BB) {
        return BB instanceof WebAssembly.RuntimeError ? /unreachable/i.test(BB.message) ? "unreachable" : /out of bounds/i.test(BB.message) ? "out_of_bounds" : "runtime_error" : (BB instanceof RangeError || BB instanceof Error && "InternalError" === BB.name) && /call stack|recursion/i.test(BB.message) ? "stack_overflow" : "js_error"
      }(BB);
      if ("unreachable" !== QB) return {
        kind: QB,
        panic: null,
        refusedBytes: 0
      };
      const nB = jB(),
        dB = zB();
      return {
        kind: QB,
        panic: dB > 0 ? null : nB,
        refusedBytes: dB
      }
    }
    const NB = 300;

    function uB(BB) {
      return BB.replace(/\s*\n\s*/g, " / ").slice(0, NB)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);