export const id = 214;
export const ids = [214];
export const modules = {
  41199: (GG, bG, ZG) => {
    function wG(GG, bG, ZG) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(GG, bG).getContext("2d", ZG);
      const wG = document.createElement("canvas");
      return wG.width = GG, wG.height = bG, wG.getContext("2d", ZG)
    }

    function SG(GG, bG) {
      return GG.getContext("2d", bG)
    }
    ZG.d(bG, {
      d: () => SG,
      f: () => wG
    })
  },
  41159: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => kG
    });
    const wG = 1 << 20,
      SG = 1 << 21,
      LG = 1024,
      yG = 2048;

    function kG(GG, bG, ZG) {
      const kG = GG + wG,
        UG = bG + LG,
        YG = ZG + wG;
      return kG < 0 || kG >= SG || YG < 0 || YG >= SG || UG < 0 || UG >= yG ? -1 : (kG * SG + YG) * yG + UG
    }
  },
  41150: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => wG,
      g: () => yG,
      k: () => SG,
      l: () => LG,
      n: () => VG,
      q: () => YG,
      r: () => UG,
      v: () => kG
    });
    ZG(3444);
    ZG(41159);

    function wG(GG) {}

    function SG(GG) {}

    function LG(GG) {}

    function yG(GG) {}

    function kG(GG) {}

    function UG(GG, bG, ZG) {}

    function YG(GG) {}

    function VG(GG) {}
  },
  41143: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => zG,
      g: () => KG,
      j: () => TG,
      l: () => mG,
      p: () => vG,
      t: () => aG,
      v: () => rG,
      y: () => dG,
      B: () => JG,
      D: () => WG,
      F: () => nG,
      J: () => XG,
      M: () => MG,
      O: () => RG,
      R: () => cG,
      U: () => jG
    });
    var wG = ZG(4810),
      SG = ZG(41018),
      LG = (ZG(41150), ZG(5));
    class yG {
      constructor(GG, bG) {
        this.memory = GG, this.access = bG, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.rp = 0, this.u32 = new LG.m(0), this.f32 = new LG.f(0), this.u8 = new LG.c(0), this.dataView = new LG.j(new ArrayBuffer(0)), this.refresh()
      }
      refresh() {
        this.ptr = this.access.ptr(), this.rp = this.access.rp(), this.buffer = (0, LG.H)(this.memory()), this.u32 = new LG.m(this.buffer, this.ptr, this.rp >>> 2), this.f32 = new LG.f(this.buffer, this.ptr, this.rp >>> 2), this.u8 = new LG.c(this.buffer, this.ptr, this.rp), this.dataView = new LG.j(this.buffer, this.ptr, this.rp)
      }
      ensureViews() {
        (0, LG.H)(this.memory()) !== this.buffer && this.refresh()
      }
      get view() {
        return this.ensureViews(), this.dataView
      }
      room(GG) {
        return !!this.fits(GG) || (this.dropped++, !1)
      }
      fits(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.cursor;
        this.ensureViews();
        const ZG = bG + GG;
        return ZG <= this.rp || ZG <= wG.Pc && 0 !== this.access.reserve(ZG) && (this.refresh(), ZG <= this.rp)
      }
      consume(GG) {
        const bG = this.cursor - GG;
        bG > 0 && GG > 0 && (this.ensureViews(), this.u8.copyWithin(0, GG, this.cursor)), this.cursor = bG > 0 ? bG : 0
      }
      writeRecord(GG, bG, ZG, SG, LG) {
        if (!this.room(wG.vb)) return !1;
        const yG = this.cursor >>> 2;
        return this.u32[yG] = 65535 & GG | (65535 & bG) << 16, this.f32[yG + 1] = ZG, this.f32[yG + 2] = SG, this.u32[yG + 3] = LG >>> 0, this.cursor += wG.vb, !0
      }
      writeOptions(GG, bG) {
        const ZG = bG.byteLength,
          SG = wG.vb + (0, wG.ve)(ZG);
        if (!this.fits(SG)) return !1;
        const LG = this.cursor,
          yG = LG >>> 2;
        this.u32[yG] = wG.yb.Options, this.u32[yG + 1] = ZG, this.u32[yG + 2] = 0, this.u32[yG + 3] = GG >>> 0;
        const kG = LG + wG.vb;
        return this.u8.set(bG, kG), this.u8.fill(0, kG + ZG, LG + SG), this.cursor += SG, !0
      }
      writeWorkerRecord(GG, bG, ZG, SG, LG, yG) {
        const kG = yG.byteLength,
          UG = wG.Qd + (0, wG.ve)(kG);
        if (kG > wG.Pd) return this.dropped++, !1;
        if (!this.room(UG)) return !1;
        const YG = this.cursor,
          VG = YG >>> 2;
        this.u32[VG] = GG >>> 0, this.u32[VG + 1] = 65535 & bG | (65535 & ZG) << 16, this.u32[VG + 2] = SG >>> 0, this.u32[VG + 3] = LG >>> 0, this.u32[VG + 4] = kG;
        const pG = YG + wG.Qd;
        return this.u8.set(yG, pG), this.u8.fill(0, pG + kG, YG + UG), this.cursor += UG, !0
      }
      written() {
        return this.ensureViews(), this.u8.subarray(0, this.cursor)
      }
      writeFrame(GG, bG) {
        return this.writeNet(wG.Yb.Frame, GG, bG)
      }
      writeOpen(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(wG.Yb.Open, GG, UG(bG))
      }
      writeClose(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(wG.Yb.Close, GG, UG(bG))
      }
      writeNet(GG, bG, ZG) {
        const SG = ZG.byteLength,
          LG = wG.Ub + (0, wG.ve)(SG);
        if (SG > wG.Ob) return this.dropped++, !1;
        if (!this.room(LG)) return !1;
        const yG = this.cursor;
        this.u32[yG >>> 2] = SG, this.u32[1 + (yG >>> 2)] = (0, wG.qe)(GG, bG);
        const kG = yG + wG.Ub;
        return this.u8.set(ZG, kG), this.u8.fill(0, kG + SG, yG + LG), this.cursor += LG, !0
      }
      hQ(GG, bG, ZG) {
        const SG = wG.w + (0, wG.ve)(ZG);
        if (!this.room(SG)) return -1;
        const LG = this.cursor;
        this.u32[LG >>> 2] = 65535 & GG | (65535 & bG) << 16, this.u32[1 + (LG >>> 2)] = ZG;
        const yG = LG + wG.w;
        return this.u8.fill(0, yG, LG + SG), this.cursor += SG, yG
      }
      growForCmd(GG) {
        return this.fits(wG.w + (0, wG.ve)(GG), 0)
      }
      writeCmd(GG, bG, ZG) {
        const wG = this.hQ(GG, bG, ZG.byteLength);
        return !(wG < 0) && (this.u8.set(ZG, wG), !0)
      }
      copyWritten(GG, bG) {
        return this.ensureViews(), this.u8.slice(GG, GG + bG)
      }
    }
    const kG = new LG.c(0);

    function UG(GG) {
      if (0 === GG) return kG;
      const bG = new LG.c(wG.Rb);
      for (let ZG = 0; ZG < wG.Rb; ZG++) bG[ZG] = GG >>> 8 * ZG & 255;
      return bG
    }
    class YG {
      constructor(GG, bG) {
        this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new yG(bG, {
          ptr: () => GG.lp(),
          rp: () => GG.BLG(),
          reserve: bG => GG.VyG(bG)
        }), this.net = new yG(bG, {
          ptr: () => GG.kyG(),
          rp: () => GG.yyG(),
          reserve: bG => GG.pyG(bG)
        }), this.worker = new yG(bG, {
          ptr: () => GG.cyG(),
          rp: () => GG.ayG(),
          reserve: bG => GG.fyG(bG)
        }), this.cmd = new yG(bG, {
          ptr: () => GG.eLG(),
          rp: () => GG.nLG(),
          reserve: bG => GG.gLG(bG)
        })
      }
      reset(GG, bG, ZG) {
        this.input.consume(GG), this.worker.consume(bG), this.cmd.consume(ZG)
      }
    }
    var VG = ZG(36606),
      pG = ZG(2388),
      fG = ZG(4804),
      QG = ZG(41162);
    const KG = "coreFrame",
      hG = "fatalStatus",
      dG = "otherCall",
      JG = "coreRings",
      rG = "netIn",
      zG = "abi",
      EG = "netOut",
      oG = "workerOut",
      XG = "worldgenHost",
      uG = "eventWalker",
      iG = "netEvent",
      CG = "envEvent",
      WG = "sharedTables",
      mG = "inputAction",
      IG = "frameSends",
      FG = new Set([uG, iG, CG, IG, mG, WG]),
      vG = "wasmMemory",
      aG = "meshHost";

    function cG(GG, bG) {
      GG.forEachWorkerOut(((ZG, SG, LG) => {
        if ((0, wG.ie)(ZG)) try {
          var yG;
          null === (yG = bG.worldgen) || void 0 === yG || yG.take(ZG, LG)
        } catch (UG) {
          GG.crash(XG, UG)
        } else try {
          var kG;
          null === (kG = bG.mesh) || void 0 === kG || kG.take(ZG, SG, LG)
        } catch (UG) {
          GG.crash(aG, UG)
        }
      }))
    }
    const lG = 1048576;

    function jG(GG, bG) {
      let ZG = !1;
      const wG = () => {
        ZG = !1, bG()
      };
      return () => {
        !ZG && GG.cursor >= lG && (ZG = !0, queueMicrotask(wG))
      }
    }
    const PG = new Set([hG, dG, XG, aG]);

    function MG(GG) {
      return FG.has(GG.site) ? GG.error instanceof WebAssembly.RuntimeError || (0, SG.j)(GG.error) : !PG.has(GG.site) && GG.error instanceof Error
    }
    const AG = "events",
      sG = [],
      qG = "debugLog",
      nG = "terrainTextures",
      gG = "sunShadowTextures",
      eG = new TextDecoder;

    function RG(GG, bG) {
      const {
        site: ZG,
        error: SG,
        header: LG
      } = GG, yG = LG ? (0, wG.de)(LG.lastError) : "noFrame", kG = `CORE-${ZG===hG?yG:ZG}`, UG = null === SG || void 0 === SG ? "" : ` ${(0,VG.h)(SG)}`, YG = {
        site: ZG,
        wasmBuild: bG.wasm,
        clientVersion: bG.client
      };
      return LG && (YG.status = String(LG.status), YG.lastError = yG, YG.lastErrorCode = String(LG.lastError), YG.lastErrorDetail = String(LG.lastErrorDetail), YG.errorCount = String(LG.errorCount), YG.frameIndex = String(LG.frameIndex), YG.tickIndex = String(LG.tickIndex)), {
        code: kG,
        message: `core ${ZG}, last error ${yG};${UG}`,
        details: YG
      }
    }
    class TG {
      constructor(GG, bG, ZG) {
        this.core = GG, this.memory = bG, this.handlers = ZG, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.loadCountsBuffer = null, this.loadCounts = new Uint32Array(0), this.unsentUiPrefs = null, this.eventWalker = null, this.netOffsets = [], this.frameEvents = {
          ptr: 0,
          len: 0,
          net: sG,
          netOffsets: this.netOffsets,
          kind: "none"
        }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.atSendsStop = !1, this.rings = new YG(GG, bG)
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
      framePaces(GG) {
        if (this.stopped || this.drawsHeld) return !1;
        try {
          return this.core.NLG(GG)
        } catch (bG) {
          return this.crash(KG, bG), !1
        }
      }
      get isStopped() {
        return this.stopped
      }
      frame(GG, bG) {
        var ZG;
        let LG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.stopped) return !1;
        if (!this.writePendingInput()) return !1;
        const {
          input: yG,
          net: kG,
          worker: UG,
          cmd: YG
        } = this.rings, VG = kG.cursor, pG = bG && !this.drawsHeld;
        let dG = wG.T.Fatal;
        const JG = yG.cursor,
          zG = UG.cursor,
          EG = YG.cursor;
        let oG, XG = null;
        const CG = this.handlers.onSends;
        try {
          const bG = (pG ? wG.kb.Draws : 0) | (LG ? wG.kb.NetAll : 0) | (CG ? wG.kb.StopForSends : 0);
          dG = (0, QG.d)((() => {
            let ZG = this.core.frame(GG, JG, kG.cursor, zG, bG, EG);
            for (; ZG === wG.td && CG;) {
              var SG;
              if (oG ??= null === (SG = this.gameHost) || void 0 === SG ? void 0 : SG.takeFault(), void 0 === oG && !this.takeSends(CG)) return wG.T.Fatal;
              ZG = this.core.ed()
            }
            return ZG
          }))
        } catch (eG) {
          XG = {
            error: eG
          }
        }
        oG ??= null === (ZG = this.gameHost) || void 0 === ZG ? void 0 : ZG.takeFault();
        const WG = this.stopped || null !== XG || void 0 !== oG;
        this.rings.reset(WG ? yG.cursor : JG, WG ? UG.cursor : zG, WG ? YG.cursor : EG);
        const mG = null === XG && void 0 === oG,
          IG = mG && !this.stopped && dG === wG.T.Fatal && 0 === this.core.dQ(),
          FG = mG && !IG ? this.headerView() : null,
          vG = IG ? {
            ...null !== (aG = this.lastHeader) && void 0 !== aG ? aG : (0, wG.ye)(new Uint32Array(wG.ob)),
            status: wG.T.Fatal,
            lastError: wG.R.CoreBusy,
            lastErrorDetail: 0
          } : null === FG ? null : (0, wG.ye)(FG);
        var aG;
        null !== vG && (this.lastHeader = vG);
        const cG = null !== vG && dG !== wG.T.Fatal,
          lG = cG && null !== FG ? FG[wG.pb.NetInKept] : 0,
          jG = cG && lG <= VG && lG % 4 === 0 ? lG : null;
        var PG, MG;
        null !== vG && null !== jG && dG === wG.T.Errors && (null === (PG = (MG = this.handlers).onErrors) || void 0 === PG || PG.call(MG, vG));
        const AG = null === jG ? sG : this.readEvents(VG);
        if (kG.consume(VG - (null !== jG && void 0 !== jG ? jG : 0)), this.netKept = null !== jG && void 0 !== jG ? jG : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== XG) return this.crash(KG, void 0 === oG || oG instanceof SG.c ? XG.error : oG), !1;
        if (void 0 !== oG || null === vG) return this.crashOn(KG, oG), !1;
        if (IG) return this.crash(hG, null), !1;
        const qG = this.headerView()[wG.pb.FrameDraw];
        if (this.lastFrameKind = (0, fG.i)(pG, qG), dG === wG.T.Fatal) return this.crash(hG, null), !1;
        if (null === jG) return this.crash(rG, `the core kept ${lG} of ${VG} net-in bytes`), !1;
        if (this.eventWalker) {
          if (this.stopped) return !1;
          const GG = this.frameEvents,
            bG = this.headerView();
          GG.ptr = bG[wG.pb.EventsPtr], GG.len = bG[wG.pb.EventsLen], GG.net = AG, GG.kind = this.lastFrameKind;
          try {
            this.eventWalker(GG)
          } catch (eG) {
            return this.crashOn(uG, eG), !1
          }
          return this.handEnvEvents()
        }
        for (const wG of AG) {
          if (this.stopped) return !1;
          try {
            var nG, gG;
            null === (nG = (gG = this.handlers).onNetEvent) || void 0 === nG || nG.call(gG, wG)
          } catch (eG) {
            return this.crashOn(iG, eG), !1
          }
        }
        return this.handEnvEvents()
      }
      handEnvEvents() {
        for (const LG of this.graceEvents) {
          if (this.stopped) return !1;
          try {
            var GG, bG;
            null === (GG = (bG = this.handlers).onReconnectGrace) || void 0 === GG || GG.call(bG, LG)
          } catch (SG) {
            return this.crashOn(iG, SG), !1
          }
        }
        for (const LG of this.envEvents) {
          if (this.stopped) return !1;
          try {
            var ZG, wG;
            null === (ZG = (wG = this.handlers).onEnvEvent) || void 0 === ZG || ZG.call(wG, LG)
          } catch (SG) {
            return this.crashOn(CG, SG), !1
          }
        }
        return !this.stopped
      }
      setEventWalker(GG) {
        this.eventWalker = GG
      }
      writePendingInput() {
        if (this.stopped) return !1;
        const {
          input: GG
        } = this.rings;
        try {
          const bG = this.unsentUiPrefs;
          bG && GG.writeRecord(wG.yb.UiPrefs, 0, bG.nametagCutDistance, 0, (0, wG.Ce)(bG)) && (this.unsentUiPrefs = null);
          const ZG = this.unsentEnvPrefs;
          ZG && GG.writeRecord(wG.yb.EnvPrefs, (0, wG.fe)(ZG), ZG.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
          const SG = this.unsentLookPrefs;
          SG && GG.writeRecord(wG.yb.Sensitivity, 0, SG.mouse, SG.touch, (0, pG.n)(SG.fovPercent)) && (this.unsentLookPrefs = null);
          let LG = 0;
          for (const {
              aux: wG,
              payload: yG
            }
            of this.unsentOptions) {
            if (!GG.writeOptions(wG, yG)) {
              if (GG.cursor > 0) break;
              this.optionsDropped++
            }
            LG++
          }
          LG > 0 && this.unsentOptions.splice(0, LG)
        } catch (bG) {
          return this.crash(JG, bG), !1
        }
        return !0
      }
      setHoldDraws(GG) {
        this.drawsHeld = GG
      }
      setUiPrefs(GG) {
        this.unsentUiPrefs = {
          ...GG
        }
      }
      setEnvPrefs(GG) {
        this.unsentEnvPrefs = {
          ...GG
        }
      }
      setLookPrefs(GG) {
        this.unsentLookPrefs = {
          ...GG
        }
      }
      queueOptions(GG, bG) {
        return !this.isStopped && (bG.byteLength > wG.ac.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
          aux: GG,
          payload: bG
        }), !0))
      }
      setChunkCap(GG) {
        return this.callCore("setChunkCap", null, (bG => bG.ryG(GG)))
      }
      shedMemory(GG) {
        const bG = this.callCore("shedMemory", null, (bG => bG.CyG(GG)));
        return 0 === bG ? null : bG
      }
      addDistanceInUse() {
        const GG = this.callCore("addDistanceInUse", null, (GG => GG.PLG()));
        return 0 === GG ? null : GG
      }
      setChunkAddDistance(GG, bG) {
        return this.callCore("setChunkAddDistance", !1, (ZG => ZG.JyG(GG, bG)))
      }
      setGameHost(GG) {
        return this.callCore("setGameHost", !1, (bG => (bG.DLG(GG), this.gameHost = GG, !0)))
      }
      setAntiCheatProbes(GG) {
        return this.callCore("setAntiCheatProbes", !1, (bG => bG.hyG(GG)))
      }
      setAmbientOcclusion(GG) {
        this.callCore("setAmbientOcclusion", void 0, (bG => {
          bG.KyG(GG)
        }))
      }
      setPoseLod(GG) {
        this.callCore("setPoseLod", void 0, (bG => {
          bG.EyG(GG)
        }))
      }
      setDebugLog(GG, bG) {
        this.callCore(qG, void 0, (ZG => {
          ZG.Ad(GG, bG)
        }))
      }
      takeDebugLog(GG) {
        return this.callCore(qG, [], (bG => bG.sd(GG)))
      }
      setTextureLayers(GG) {
        return this.callCore("setTextureLayers", !1, (bG => bG.iyG(GG)))
      }
      setBlockColours(GG) {
        let {
          blocks: bG,
          counts: ZG,
          values: wG
        } = GG;
        return this.callCore("setBlockColours", !1, (GG => GG.rwG(bG, ZG, wG)))
      }
      terrainTextureNames() {
        return this.callCore(nG, [], (GG => GG.vyG()))
      }
      setTerrainTextures(GG, bG, ZG, wG) {
        return this.callCore(nG, !1, (SG => SG.uyG(GG, ZG, bG, wG)))
      }
      setShaderPack(GG, bG, ZG, wG, SG, LG) {
        return this.callCore("setShaderPack", !1, (yG => {
          var kG, UG;
          return null !== (kG = null === (UG = yG.vwG) || void 0 === UG ? void 0 : UG.call(yG, GG, bG, ZG, wG, SG, LG)) && void 0 !== kG && kG
        }))
      }
      sunShadowWantedTextures() {
        return this.callCore(gG, null, (GG => {
          var bG, ZG;
          return null !== (bG = null === (ZG = GG.WyG) || void 0 === ZG ? void 0 : ZG.call(GG)) && void 0 !== bG ? bG : null
        }))
      }
      setSunShadowTexture(GG, bG, ZG, wG, SG) {
        this.callCore(gG, void 0, (LG => {
          var yG;
          null === (yG = LG.XyG) || void 0 === yG || yG.call(LG, GG, bG, ZG, wG, SG)
        }))
      }
      takeSunShadowWarnings() {
        return this.callCore(gG, [], (GG => {
          var bG, ZG;
          return null !== (bG = null === (ZG = GG.IyG) || void 0 === ZG ? void 0 : ZG.call(GG)) && void 0 !== bG ? bG : []
        }))
      }
      sunShadowsHeld() {
        return this.callCore(gG, null, (GG => {
          var bG, ZG;
          return null !== (bG = null === (ZG = GG.myG) || void 0 === ZG ? void 0 : ZG.call(GG)) && void 0 !== bG ? bG : null
        }))
      }
      callCore(GG, bG, ZG) {
        if (this.stopped) return bG;
        try {
          return ZG(this.core)
        } catch (wG) {
          return this.crash(GG, wG), bG
        }
      }
      readEvents(GG) {
        this.netOffsets.length = 0;
        const bG = this.headerView(),
          ZG = bG[wG.pb.EventsPtr],
          SG = bG[wG.pb.EventsLen];
        if (this.envEvents.length = 0, this.graceEvents.length = 0, 0 === SG) return sG;
        const LG = [],
          yG = this.memory().buffer;
        if (ZG % 4 !== 0 || ZG + SG > yG.byteLength) return this.crash(AG, `events of ${SG} bytes at ${ZG} outside ${yG.byteLength} bytes of memory`), sG;
        const kG = new DataView(yG, ZG, SG),
          UG = this.rings.net,
          YG = (bG, ZG) => bG + ZG <= GG ? UG.copyWritten(bG, ZG) : null;
        let VG = 0;
        for (; VG < SG;) {
          const GG = VG + wG.$,
            bG = GG <= SG ? kG.getUint32(VG, !0) : -1,
            UG = bG >>> 16;
          if (bG < 0 || UG > SG - GG) return this.crash(AG, `event record at ${VG} overruns its ${SG} bytes`), sG;
          const mG = 65535 & bG,
            IG = bG => kG.getUint32(GG + 4 * bG, !0);
          if (mG === wG.bb.RawMessage) {
            const GG = UG >= wG.Tc.BYTES ? 65535 & IG(1) : -1,
              bG = GG === wG.Tc.STRING_TYPE,
              ZG = UG === (bG ? wG.Tc.STRING_TYPE_BYTES : wG.Tc.BYTES) ? YG(IG(2), IG(3)) : null,
              SG = bG && ZG ? YG(IG(4), IG(5)) : null;
            if (!ZG || bG && !SG) return this.crash(AG, `RawMessage at ${VG} of ${UG} bytes names bytes outside net-in`), sG;
            this.netOffsets.push(VG), LG.push({
              type: "message",
              conn: IG(0),
              vV: GG,
              payloadKind: IG(1) >>> 16,
              payload: ZG,
              stringType: SG ? eG.decode(SG) : null
            })
          } else if (mG === wG.bb.CoreErrors) {
            var pG, fG;
            const GG = UG >= 4 ? IG(0) : -1;
            if (GG < 0 || GG > wG.O.PAIRS_MAX || UG !== 4 * (wG.O.FIXED_WORDS + wG.O.PAIR_WORDS * GG)) return this.crash(AG, `CoreErrors at ${VG} of ${UG} bytes`), sG;
            const bG = [];
            for (let ZG = 0; ZG < GG; ZG++) bG.push({
              code: IG(1 + 2 * ZG),
              detail: IG(2 + 2 * ZG)
            });
            null === (pG = (fG = this.handlers).onCoreErrors) || void 0 === pG || pG.call(fG, bG, IG(1 + 2 * GG))
          } else if (mG === wG.bb.RenderReload) {
            var QG, KG;
            if (UG !== wG.ed.BYTES) return this.crash(AG, `RenderReload at ${VG} of ${UG} bytes`), sG;
            null === (QG = (KG = this.handlers).onRenderReload) || void 0 === QG || QG.call(KG, IG(0), IG(1), IG(2))
          } else if (mG === wG.bb.JoinPreloadEnded) {
            var hG, dG;
            if (UG !== wG.Db.BYTES) return this.crash(AG, `JoinPreloadEnded at ${VG} of ${UG} bytes`), sG;
            null === (hG = (dG = this.handlers).onJoinPreloadEnded) || void 0 === hG || hG.call(dG, {
              chunks: IG(wG.Db.CHUNKS),
              bytes: IG(wG.Db.BYTES_HELD),
              asked: IG(wG.Db.ASKED),
              replaced: IG(wG.Db.REPLACED),
              dropped: IG(wG.Db.DROPPED)
            })
          } else if (mG === wG.bb.Images) {
            var JG, rG;
            null === (JG = (rG = this.handlers).onImages) || void 0 === JG || JG.call(rG, new Uint8Array(yG.slice(ZG + GG, ZG + GG + UG)))
          } else if (mG === wG.bb.ModelRequests)
            for (let ZG = 0; ZG < UG >>> 2; ZG++) {
              var zG, EG;
              null === (zG = (EG = this.handlers).onModelRequest) || void 0 === zG || zG.call(EG, IG(ZG))
            } else if (mG === wG.bb.ModelTaken) {
              var oG, XG;
              if (UG < 4) return this.crash(AG, `ModelTaken at ${VG} of ${UG} bytes`), sG;
              const GG = new Uint32Array((UG >>> 2) - 1);
              for (let bG = 0; bG < GG.length; bG++) GG[bG] = IG(1 + bG);
              null === (oG = (XG = this.handlers).onModelTaken) || void 0 === oG || oG.call(XG, IG(0), GG)
            } else if (mG === wG.bb.TerrainTexturesWanted) {
            var uG, iG;
            if (0 !== UG) return this.crash(AG, `TerrainTexturesWanted at ${VG} of ${UG} bytes`), sG;
            null === (uG = (iG = this.handlers).onTerrainTexturesWanted) || void 0 === uG || uG.call(iG)
          } else if (mG === wG.bb.KeepAliveDue) {
            var CG, WG;
            if (UG > wG.Eb) return this.crash(AG, `KeepAliveDue at ${VG} of ${UG} bytes`), sG;
            null === (CG = (WG = this.handlers).onKeepAlive) || void 0 === CG || CG.call(WG, new Uint8Array(yG, ZG + GG, UG).slice())
          } else if (mG === wG.bb.ConnectionState) {
            if (UG !== wG.x) return this.crash(AG, `ConnectionState at ${VG} of ${UG} bytes`), sG;
            this.netOffsets.push(VG), LG.push({
              type: "connection",
              conn: IG(0),
              phase: IG(1),
              code: 0 | IG(2)
            })
          } else if (mG === wG.bb.EnvLighting || mG === wG.bb.SkyImages) {
            if (UG !== (mG === wG.bb.EnvLighting ? wG.Z : wG.zd)) return this.crash(AG, `event ${mG} at ${VG} of ${UG} bytes`), sG;
            this.envEvents.push({
              kind: mG,
              payload: new Uint8Array(yG.slice(ZG + GG, ZG + GG + UG))
            })
          } else if (mG === wG.bb.ReconnectGrace) {
            if (UG !== wG.rc) return this.crash(AG, `ReconnectGrace at ${VG} of ${UG} bytes`), sG;
            const GG = IG(2);
            this.graceEvents.push({
              conn: IG(0),
              graceMs: IG(1),
              sessionBased: 0 !== (GG & wG.Xc.SessionBased),
              replayOffer: 0 !== (GG & wG.Xc.ReplayOffer)
            })
          }
          VG = GG + (0, wG.ve)(UG)
        }
        return LG
      }
      takeSends(GG) {
        this.atSendsStop = !0;
        try {
          GG()
        } catch (bG) {
          this.crashOn(IG, bG)
        } finally {
          this.atSendsStop = !1
        }
        return !this.stopped
      }
      forEachNetOut(GG) {
        this.forEachOut(EG, "net-out", wG.pb.NetOutPtr, wG.pb.NetOutLen, wG.Ub, 0, ((bG, ZG, SG, LG) => {
          const yG = (0, wG.me)(ZG);
          yG === wG.Yb.Frame ? GG((0, wG.ke)(ZG), SG) : this.crash(EG, `net-out record at ${LG} is kind ${yG}, not a frame`)
        }))
      }
      forEachWorkerOut(GG) {
        this.forEachOut(oG, "worker-out", wG.pb.WorkerOutPtr, wG.pb.WorkerOutLen, wG.Nd, 4, ((bG, ZG, SG, LG) => {
          const yG = 255 & bG,
            kG = yG === wG.Zd.Init ? this.initOf(SG, LG) : SG;
          null !== kG && GG(yG, bG >>> 8 & 16777215, kG)
        }))
      }
      initOf(GG, bG) {
        const ZG = this.memory().buffer;
        if (GG.byteLength !== wG.qb) return this.crash(oG, `worker-out Init record at ${bG} is ${GG.byteLength} bytes, not a view`), null;
        const SG = new DataView(GG.buffer, GG.byteOffset, wG.qb),
          LG = SG.getUint32(0, !0),
          yG = SG.getUint32(4, !0);
        return LG + yG > ZG.byteLength ? (this.crash(oG, `worker-out Init record at ${bG} names ${yG} bytes at ${LG} outside ${ZG.byteLength} bytes of memory`), null) : new Uint8Array(ZG, LG, yG)
      }
      forEachOut(GG, bG, ZG, SG, LG, yG, kG) {
        if (!this.headerReadable()) return;
        const UG = this.headerView(),
          YG = UG[ZG],
          VG = UG[SG];
        if (0 === VG) return;
        const pG = this.memory().buffer;
        if (YG % 4 !== 0 || YG + VG > pG.byteLength) return void this.crash(GG, `${bG} of ${VG} bytes at ${YG} outside ${pG.byteLength} bytes of memory`);
        const fG = new DataView(pG, YG, VG);
        let QG = 0;
        for (; QG < VG;) {
          const ZG = QG + LG,
            SG = ZG <= VG ? fG.getUint32(QG + yG, !0) : -1;
          if (SG < 0 || SG > VG - ZG) return void this.crash(GG, `${bG} record at ${QG} overruns its ${VG} bytes`);
          if (kG(fG.getUint32(QG, !0), fG.getUint32(QG + 4, !0), new Uint8Array(pG, YG + ZG, SG), QG), this.stopped) return;
          QG = ZG + (0, wG.ve)(SG)
        }
      }
      forEachEvent(GG) {
        if (this.stopped || null === this.lastHeader) return;
        const bG = this.headerView(),
          ZG = bG[wG.pb.EventsPtr],
          SG = bG[wG.pb.EventsLen];
        if (0 === SG) return;
        const LG = this.memory().buffer;
        if (ZG % 4 !== 0 || ZG + SG > LG.byteLength) return void this.crash(AG, `events of ${SG} bytes at ${ZG} outside ${LG.byteLength} bytes of memory`);
        const yG = new DataView(LG, ZG, SG);
        let kG = 0;
        for (; kG < SG;) {
          const bG = kG + wG.$,
            ZG = bG <= SG ? yG.getUint32(kG, !0) : -1,
            LG = ZG >>> 16;
          if (ZG < 0 || LG > SG - bG) return void this.crash(AG, `event record at ${kG} overruns its ${SG} bytes`);
          GG(65535 & ZG, yG, bG, LG), kG = bG + (0, wG.ve)(LG)
        }
      }
      crashOn(GG, bG) {
        bG instanceof SG.c ? this.crash(AG, bG.message) : this.crash(GG, bG)
      }
      crash(GG, bG) {
        this.stopped || (this.stopped = !0, this.handlers.onCrash({
          site: GG,
          error: bG,
          header: this.lastHeader
        }))
      }
      headerWord(GG) {
        return this.headerReadable() ? this.headerView()[GG] : 0
      }
      headerReadable() {
        return !this.stopped && (null !== this.lastHeader || this.atSendsStop)
      }
      readLoadCounts(GG) {
        const bG = this.loadCountWords();
        return null !== bG && (GG.chunksReceived = bG[wG.Lb.ChunksReceived], GG.chunksCancelled = this.headerView()[wG.pb.ChunksCancelled], GG.chunksStored = bG[wG.Lb.ChunksStored], GG.jobsSent = bG[wG.Lb.JobsSent], GG.jobsDone = bG[wG.Lb.JobsDone], GG.jobsInFlight = bG[wG.Lb.JobsInFlight], GG.workersLive = bG[wG.Lb.WorkersLive], GG.workersRetired = bG[wG.Lb.WorkersRetired], !0)
      }
      readViewQueuedPrograms() {
        var GG, bG;
        const ZG = null !== (GG = null === (bG = this.loadCountWords()) || void 0 === bG ? void 0 : bG[wG.Lb.ViewQueuedPrograms]) && void 0 !== GG ? GG : 0;
        return 0 === ZG ? null : ZG - 1
      }
      readFirstViewWait(GG, bG) {
        const ZG = this.loadCountWords();
        return null === ZG ? null : [ZG[wG.Lb.FirstViewLinkMs], ZG[wG.Lb.FirstViewTerrainMs], ZG[wG.Lb.FirstViewHeldMs], ZG[wG.Lb.FirstViewOtherMs], ZG[wG.Lb.FirstViewGaps], ZG[wG.Lb.FirstViewGapMs], GG, bG]
      }
      loadCountWords() {
        if (this.stopped || null === this.lastHeader) return null;
        const GG = this.core.Md();
        if (0 === GG) return null;
        const bG = this.memory().buffer;
        return bG !== this.loadCountsBuffer && (this.loadCountsBuffer = bG, this.loadCounts = new Uint32Array(bG, GG, wG.Ib)), this.loadCounts
      }
      headerView() {
        const GG = this.memory().buffer;
        return GG !== this.headerBuffer && (this.headerBuffer = GG, this.header = new Uint32Array(GG, this.core.dQ(), wG.ob)), this.header
      }
    }
  },
  41162: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => yG,
      d: () => LG
    });
    var wG = ZG(4708);
    let SG = null;

    function LG(GG) {
      SG = {
        scanned: !1
      };
      try {
        return GG()
      } finally {
        SG = null
      }
    }

    function yG() {
      const GG = SG;
      if (null === GG) return (0, wG.g)();
      const bG = (0, wG.g)(!GG.scanned);
      return GG.scanned = !0, bG
    }
  },
  41214: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => wG
    });
    const wG = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  41235: (GG, bG, ZG) => {
    function wG() {
      return ZG(41239)
    }

    function SG() {
      return ZG(41243)
    }

    function LG(GG) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(GG)
    }
    ZG.d(bG, {
      e: () => LG,
      g: () => wG,
      j: () => SG
    })
  },
  36606: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => kG,
      e: () => YG,
      g: () => yG,
      h: () => pG
    });
    var wG = ZG(36594),
      SG = ZG(5);
    const LG = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function yG(GG) {
      if (GG instanceof WebAssembly.RuntimeError) return !0;
      const bG = GG instanceof Error ? GG.stack : void 0;
      return "string" === typeof bG && LG.test(bG)
    }

    function kG(GG, bG, ZG) {
      var SG;
      const yG = GG instanceof Error ? GG.name : "thrown",
        kG = (GG instanceof Error && null !== (SG = GG.stack) && void 0 !== SG ? SG : "").split("\n").filter((GG => LG.test(GG))).slice(0, 8).map((GG => GG.trim())),
        UG = null === bG ? "wasm memory unknown" : `wasm memory ${Math.round(bG/2**20)} MB`,
        YG = null === ZG.panic ? "" : `, panic: ${(0,wG.h)(ZG.panic)}`,
        VG = `${yG}: ${GG instanceof Error?GG.message:String(GG)}`;
      return `${(0,wG.m)(ZG.kind,ZG.refusedBytes)} ${VG} (${UG})${YG}${kG.length>0?` | ${kG.join(" < ")}`:""}`
    }
    const UG = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function YG(GG) {
      var bG;
      let ZG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(GG instanceof Error) || !UG.test(GG.message)) return {};
      if (!("detached" in ZG)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, SG.T)(null === (bG = (0, SG.K)(ZG, "detached")) || void 0 === bG ? void 0 : bG.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const VG = 500;

    function pG(GG) {
      let bG = "[object Object]";
      try {
        bG = String(GG)
      } catch {}
      if ("[object Object]" !== bG) return bG;
      try {
        var ZG, wG;
        return null !== (ZG = null === (wG = JSON.stringify(GG)) || void 0 === wG ? void 0 : wG.slice(0, VG)) && void 0 !== ZG ? ZG : bG
      } catch {
        return bG
      }
    }
  },
  41239: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  41243: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  },
  36594: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => wG,
      e: () => LG,
      h: () => UG,
      i: () => yG,
      m: () => SG
    });
    const wG = /^alloc_failed (\d+) bytes$/;

    function SG(GG, bG) {
      return LG(GG, bG) ? `trap=alloc_failed ${bG} bytes` : `trap=${GG}`
    }

    function LG(GG, bG) {
      return "unreachable" === GG && bG > 0
    }

    function yG(GG, bG, ZG) {
      const wG = function(GG) {
        return GG instanceof WebAssembly.RuntimeError ? /unreachable/i.test(GG.message) ? "unreachable" : /out of bounds/i.test(GG.message) ? "out_of_bounds" : "runtime_error" : (GG instanceof RangeError || GG instanceof Error && "InternalError" === GG.name) && /call stack|recursion/i.test(GG.message) ? "stack_overflow" : "js_error"
      }(GG);
      if ("unreachable" !== wG) return {
        kind: wG,
        panic: null,
        refusedBytes: 0
      };
      const SG = bG(),
        LG = ZG();
      return {
        kind: wG,
        panic: LG > 0 ? null : SG,
        refusedBytes: LG
      }
    }
    const kG = 300;

    function UG(GG) {
      return GG.replace(/\s*\n\s*/g, " / ").slice(0, kG)
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);