export const id = 214;
export const ids = [214];
export const modules = {
  40846: (BB, IB, ZB) => {
    function TB(BB, IB, ZB) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(BB, IB).getContext("2d", ZB);
      const TB = document.createElement("canvas");
      return TB.width = BB, TB.height = IB, TB.getContext("2d", ZB)
    }

    function JB(BB, IB) {
      return BB.getContext("2d", IB)
    }
    ZB.d(IB, {
      b: () => JB,
      f: () => TB
    })
  },
  40811: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => vB
    });
    const TB = 1 << 20,
      JB = 1 << 21,
      oB = 1024,
      GB = 2048;

    function vB(BB, IB, ZB) {
      const vB = BB + TB,
        kB = IB + oB,
        cB = ZB + TB;
      return vB < 0 || vB >= JB || cB < 0 || cB >= JB || kB < 0 || kB >= GB ? -1 : (vB * JB + cB) * GB + kB
    }
  },
  40804: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => TB,
      h: () => GB,
      k: () => JB,
      o: () => oB,
      r: () => nB,
      t: () => cB,
      u: () => kB,
      v: () => vB
    });
    ZB(3649);
    ZB(40811);

    function TB(BB) {}

    function JB(BB) {}

    function oB(BB) {}

    function GB(BB) {}

    function vB(BB) {}

    function kB(BB, IB, ZB) {}

    function cB(BB) {}

    function nB(BB) {}
  },
  40801: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => WB,
      d: () => NB,
      h: () => tB,
      k: () => iB,
      m: () => HB,
      o: () => MB,
      r: () => UB,
      s: () => qB,
      w: () => yB,
      A: () => YB,
      D: () => uB,
      H: () => QB,
      J: () => mB,
      K: () => AB,
      O: () => jB,
      R: () => RB
    });
    var TB = ZB(4969),
      JB = ZB(40701),
      oB = (ZB(40804), ZB(11));
    class GB {
      constructor(BB, IB) {
        this.memory = BB, this.access = IB, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.ah = 0, this.u32 = new oB.j(0), this.f32 = new oB.e(0), this.u8 = new oB.d(0), this.dataView = new oB.h(new ArrayBuffer(0)), this.refresh()
      }
      refresh() {
        this.ptr = this.access.ptr(), this.ah = this.access.ah(), this.buffer = (0, oB.E)(this.memory()), this.u32 = new oB.j(this.buffer, this.ptr, this.ah >>> 2), this.f32 = new oB.e(this.buffer, this.ptr, this.ah >>> 2), this.u8 = new oB.d(this.buffer, this.ptr, this.ah), this.dataView = new oB.h(this.buffer, this.ptr, this.ah)
      }
      ensureViews() {
        (0, oB.E)(this.memory()) !== this.buffer && this.refresh()
      }
      get view() {
        return this.ensureViews(), this.dataView
      }
      room(BB) {
        return !!this.fits(BB) || (this.dropped++, !1)
      }
      fits(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.cursor;
        this.ensureViews();
        const ZB = IB + BB;
        return ZB <= this.ah || ZB <= TB.Qc && 0 !== this.access.reserve(ZB) && (this.refresh(), ZB <= this.ah)
      }
      consume(BB) {
        const IB = this.cursor - BB;
        IB > 0 && BB > 0 && (this.ensureViews(), this.u8.copyWithin(0, BB, this.cursor)), this.cursor = IB > 0 ? IB : 0
      }
      writeRecord(BB, IB, ZB, JB, oB) {
        if (!this.room(TB.ub)) return !1;
        const GB = this.cursor >>> 2;
        return this.u32[GB] = 65535 & BB | (65535 & IB) << 16, this.f32[GB + 1] = ZB, this.f32[GB + 2] = JB, this.u32[GB + 3] = oB >>> 0, this.cursor += TB.ub, !0
      }
      writeOptions(BB, IB) {
        const ZB = IB.byteLength,
          JB = TB.ub + (0, TB.xe)(ZB);
        if (!this.fits(JB)) return !1;
        const oB = this.cursor,
          GB = oB >>> 2;
        this.u32[GB] = TB.vb.Options, this.u32[GB + 1] = ZB, this.u32[GB + 2] = 0, this.u32[GB + 3] = BB >>> 0;
        const vB = oB + TB.ub;
        return this.u8.set(IB, vB), this.u8.fill(0, vB + ZB, oB + JB), this.cursor += JB, !0
      }
      writeWorkerRecord(BB, IB, ZB, JB, oB, GB) {
        const vB = GB.byteLength,
          kB = TB.Qd + (0, TB.xe)(vB);
        if (vB > TB.Nd) return this.dropped++, !1;
        if (!this.room(kB)) return !1;
        const cB = this.cursor,
          nB = cB >>> 2;
        this.u32[nB] = BB >>> 0, this.u32[nB + 1] = 65535 & IB | (65535 & ZB) << 16, this.u32[nB + 2] = JB >>> 0, this.u32[nB + 3] = oB >>> 0, this.u32[nB + 4] = vB;
        const hB = cB + TB.Qd;
        return this.u8.set(GB, hB), this.u8.fill(0, hB + vB, cB + kB), this.cursor += kB, !0
      }
      written() {
        return this.ensureViews(), this.u8.subarray(0, this.cursor)
      }
      writeFrame(BB, IB) {
        return this.writeNet(TB.Yb.Frame, BB, IB)
      }
      writeOpen(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(TB.Yb.Open, BB, kB(IB))
      }
      writeClose(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(TB.Yb.Close, BB, kB(IB))
      }
      writeNet(BB, IB, ZB) {
        const JB = ZB.byteLength,
          oB = TB.Wb + (0, TB.xe)(JB);
        if (JB > TB.Qb) return this.dropped++, !1;
        if (!this.room(oB)) return !1;
        const GB = this.cursor;
        this.u32[GB >>> 2] = JB, this.u32[1 + (GB >>> 2)] = (0, TB.re)(BB, IB);
        const vB = GB + TB.Wb;
        return this.u8.set(ZB, vB), this.u8.fill(0, vB + JB, GB + oB), this.cursor += oB, !0
      }
      QF(BB, IB, ZB) {
        const JB = TB.s + (0, TB.xe)(ZB);
        if (!this.room(JB)) return -1;
        const oB = this.cursor;
        this.u32[oB >>> 2] = 65535 & BB | (65535 & IB) << 16, this.u32[1 + (oB >>> 2)] = ZB;
        const GB = oB + TB.s;
        return this.u8.fill(0, GB, oB + JB), this.cursor += JB, GB
      }
      growForCmd(BB) {
        return this.fits(TB.s + (0, TB.xe)(BB), 0)
      }
      writeCmd(BB, IB, ZB) {
        const TB = this.QF(BB, IB, ZB.byteLength);
        return !(TB < 0) && (this.u8.set(ZB, TB), !0)
      }
      copyWritten(BB, IB) {
        return this.ensureViews(), this.u8.slice(BB, BB + IB)
      }
    }
    const vB = new oB.d(0);

    function kB(BB) {
      if (0 === BB) return vB;
      const IB = new oB.d(TB.Sb);
      for (let ZB = 0; ZB < TB.Sb; ZB++) IB[ZB] = BB >>> 8 * ZB & 255;
      return IB
    }
    class cB {
      constructor(BB, IB) {
        this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new GB(IB, {
          ptr: () => BB.Ah(),
          ah: () => BB.oGB(),
          reserve: IB => BB.qGB(IB)
        }), this.net = new GB(IB, {
          ptr: () => BB.FGB(),
          ah: () => BB.zGB(),
          reserve: IB => BB.yGB(IB)
        }), this.worker = new GB(IB, {
          ptr: () => BB.eGB(),
          ah: () => BB.LGB(),
          reserve: IB => BB.UGB(IB)
        }), this.cmd = new GB(IB, {
          ptr: () => BB.DoB(),
          ah: () => BB.xoB(),
          reserve: IB => BB.EoB(IB)
        })
      }
      reset(BB, IB, ZB) {
        this.input.consume(BB), this.worker.consume(IB), this.cmd.consume(ZB)
      }
    }
    var nB = ZB(36297),
      hB = ZB(2489),
      zB = ZB(4960),
      FB = ZB(40816);
    const NB = "coreFrame",
      gB = "fatalStatus",
      qB = "otherCall",
      yB = "coreRings",
      UB = "netIn",
      WB = "abi",
      dB = "netOut",
      CB = "workerOut",
      QB = "worldgenHost",
      sB = "eventWalker",
      wB = "netEvent",
      OB = "envEvent",
      YB = "sharedTables",
      iB = "inputAction",
      pB = "frameSends",
      aB = new Set([sB, wB, OB, pB, iB, YB]),
      HB = "wasmMemory",
      MB = "meshHost";

    function jB(BB, IB) {
      BB.forEachWorkerOut(((ZB, JB, oB) => {
        if ((0, TB.ie)(ZB)) try {
          var GB;
          null === (GB = IB.worldgen) || void 0 === GB || GB.take(ZB, oB)
        } catch (kB) {
          BB.crash(QB, kB)
        } else try {
          var vB;
          null === (vB = IB.mesh) || void 0 === vB || vB.take(ZB, JB, oB)
        } catch (kB) {
          BB.crash(MB, kB)
        }
      }))
    }
    const PB = 1048576;

    function RB(BB, IB) {
      let ZB = !1;
      const TB = () => {
        ZB = !1, IB()
      };
      return () => {
        !ZB && BB.cursor >= PB && (ZB = !0, queueMicrotask(TB))
      }
    }
    const rB = new Set([gB, qB, QB, MB]);

    function mB(BB) {
      return aB.has(BB.site) ? BB.error instanceof WebAssembly.RuntimeError || (0, JB.n)(BB.error) : !rB.has(BB.site) && BB.error instanceof Error
    }
    const XB = "events",
      LB = [],
      eB = "debugLog",
      uB = "terrainTextures",
      fB = "sunShadowTextures",
      lB = new TextDecoder;

    function AB(BB, IB) {
      const {
        site: ZB,
        error: JB,
        header: oB
      } = BB, GB = oB ? (0, TB.fe)(oB.lastError) : "noFrame", vB = `CORE-${ZB===gB?GB:ZB}`, kB = null === JB || void 0 === JB ? "" : ` ${(0,nB.k)(JB)}`, cB = {
        site: ZB,
        wasmBuild: IB.wasm,
        clientVersion: IB.client
      };
      return oB && (cB.status = String(oB.status), cB.lastError = GB, cB.lastErrorCode = String(oB.lastError), cB.lastErrorDetail = String(oB.lastErrorDetail), cB.errorCount = String(oB.errorCount), cB.frameIndex = String(oB.frameIndex), cB.tickIndex = String(oB.tickIndex)), {
        code: vB,
        message: `core ${ZB}, last error ${GB};${kB}`,
        details: cB
      }
    }
    class tB {
      constructor(BB, IB, ZB) {
        this.core = BB, this.memory = IB, this.handlers = ZB, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.loadCountsBuffer = null, this.loadCounts = new Uint32Array(0), this.unsentUiPrefs = null, this.eventWalker = null, this.netOffsets = [], this.frameEvents = {
          ptr: 0,
          len: 0,
          net: LB,
          netOffsets: this.netOffsets,
          kind: "none"
        }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.atSendsStop = !1, this.rings = new cB(BB, IB)
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
          return this.core.ZGB(BB)
        } catch (IB) {
          return this.crash(NB, IB), !1
        }
      }
      get isStopped() {
        return this.stopped
      }
      frame(BB, IB) {
        var ZB;
        let oB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.stopped) return !1;
        if (!this.writePendingInput()) return !1;
        const {
          input: GB,
          net: vB,
          worker: kB,
          cmd: cB
        } = this.rings, nB = vB.cursor, hB = IB && !this.drawsHeld;
        let qB = TB.L.Fatal;
        const yB = GB.cursor,
          WB = kB.cursor,
          dB = cB.cursor;
        let CB, QB = null;
        const OB = this.handlers.onSends;
        try {
          const IB = (hB ? TB.cb.Draws : 0) | (oB ? TB.cb.NetAll : 0) | (OB ? TB.cb.StopForSends : 0);
          qB = (0, FB.h)((() => {
            let ZB = this.core.frame(BB, yB, vB.cursor, WB, IB, dB);
            for (; ZB === TB.ud && OB;) {
              var JB;
              if (CB ??= null === (JB = this.gameHost) || void 0 === JB ? void 0 : JB.takeFault(), void 0 === CB && !this.takeSends(OB)) return TB.L.Fatal;
              ZB = this.core.Xq()
            }
            return ZB
          }))
        } catch (lB) {
          QB = {
            error: lB
          }
        }
        CB ??= null === (ZB = this.gameHost) || void 0 === ZB ? void 0 : ZB.takeFault();
        const YB = this.stopped || null !== QB || void 0 !== CB;
        this.rings.reset(YB ? GB.cursor : yB, YB ? kB.cursor : WB, YB ? cB.cursor : dB);
        const iB = null === QB && void 0 === CB,
          pB = iB && !this.stopped && qB === TB.L.Fatal && 0 === this.core.sF(),
          aB = iB && !pB ? this.headerView() : null,
          HB = pB ? {
            ...null !== (MB = this.lastHeader) && void 0 !== MB ? MB : (0, TB.ze)(new Uint32Array(TB.kb)),
            status: TB.L.Fatal,
            lastError: TB.K.CoreBusy,
            lastErrorDetail: 0
          } : null === aB ? null : (0, TB.ze)(aB);
        var MB;
        null !== HB && (this.lastHeader = HB);
        const jB = null !== HB && qB !== TB.L.Fatal,
          PB = jB && null !== aB ? aB[TB.mb.NetInKept] : 0,
          RB = jB && PB <= nB && PB % 4 === 0 ? PB : null;
        var rB, mB;
        null !== HB && null !== RB && qB === TB.L.Errors && (null === (rB = (mB = this.handlers).onErrors) || void 0 === rB || rB.call(mB, HB));
        const XB = null === RB ? LB : this.readEvents(nB);
        if (vB.consume(nB - (null !== RB && void 0 !== RB ? RB : 0)), this.netKept = null !== RB && void 0 !== RB ? RB : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== QB) return this.crash(NB, void 0 === CB || CB instanceof JB.c ? QB.error : CB), !1;
        if (void 0 !== CB || null === HB) return this.crashOn(NB, CB), !1;
        if (pB) return this.crash(gB, null), !1;
        const eB = this.headerView()[TB.mb.FrameDraw];
        if (this.lastFrameKind = (0, zB.g)(hB, eB), qB === TB.L.Fatal) return this.crash(gB, null), !1;
        if (null === RB) return this.crash(UB, `the core kept ${PB} of ${nB} net-in bytes`), !1;
        if (this.eventWalker) {
          if (this.stopped) return !1;
          const BB = this.frameEvents,
            IB = this.headerView();
          BB.ptr = IB[TB.mb.EventsPtr], BB.len = IB[TB.mb.EventsLen], BB.net = XB, BB.kind = this.lastFrameKind;
          try {
            this.eventWalker(BB)
          } catch (lB) {
            return this.crashOn(sB, lB), !1
          }
          return this.handEnvEvents()
        }
        for (const TB of XB) {
          if (this.stopped) return !1;
          try {
            var uB, fB;
            null === (uB = (fB = this.handlers).onNetEvent) || void 0 === uB || uB.call(fB, TB)
          } catch (lB) {
            return this.crashOn(wB, lB), !1
          }
        }
        return this.handEnvEvents()
      }
      handEnvEvents() {
        for (const oB of this.graceEvents) {
          if (this.stopped) return !1;
          try {
            var BB, IB;
            null === (BB = (IB = this.handlers).onReconnectGrace) || void 0 === BB || BB.call(IB, oB)
          } catch (JB) {
            return this.crashOn(wB, JB), !1
          }
        }
        for (const oB of this.envEvents) {
          if (this.stopped) return !1;
          try {
            var ZB, TB;
            null === (ZB = (TB = this.handlers).onEnvEvent) || void 0 === ZB || ZB.call(TB, oB)
          } catch (JB) {
            return this.crashOn(OB, JB), !1
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
          const IB = this.unsentUiPrefs;
          IB && BB.writeRecord(TB.vb.UiPrefs, 0, IB.nametagCutDistance, 0, (0, TB.De)(IB)) && (this.unsentUiPrefs = null);
          const ZB = this.unsentEnvPrefs;
          ZB && BB.writeRecord(TB.vb.EnvPrefs, (0, TB.he)(ZB), ZB.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
          const JB = this.unsentLookPrefs;
          JB && BB.writeRecord(TB.vb.Sensitivity, 0, JB.mouse, JB.touch, (0, hB.m)(JB.fovPercent)) && (this.unsentLookPrefs = null);
          let oB = 0;
          for (const {
              aux: TB,
              payload: GB
            }
            of this.unsentOptions) {
            if (!BB.writeOptions(TB, GB)) {
              if (BB.cursor > 0) break;
              this.optionsDropped++
            }
            oB++
          }
          oB > 0 && this.unsentOptions.splice(0, oB)
        } catch (IB) {
          return this.crash(yB, IB), !1
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
      queueOptions(BB, IB) {
        return !this.isStopped && (IB.byteLength > TB.dc.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
          aux: BB,
          payload: IB
        }), !0))
      }
      setChunkCap(BB) {
        return this.callCore("setChunkCap", null, (IB => IB.wGB(BB)))
      }
      shedMemory(BB) {
        const IB = this.callCore("shedMemory", null, (IB => IB.MGB(BB)));
        return 0 === IB ? null : IB
      }
      addDistanceInUse() {
        const BB = this.callCore("addDistanceInUse", null, (BB => BB.LoB()));
        return 0 === BB ? null : BB
      }
      setChunkAddDistance(BB, IB) {
        return this.callCore("setChunkAddDistance", !1, (ZB => ZB.sGB(BB, IB)))
      }
      setGameHost(BB) {
        return this.callCore("setGameHost", !1, (IB => (IB.IGB(BB), this.gameHost = BB, !0)))
      }
      setAntiCheatProbes(BB) {
        return this.callCore("setAntiCheatProbes", !1, (IB => IB.CGB(BB)))
      }
      setAmbientOcclusion(BB) {
        this.callCore("setAmbientOcclusion", void 0, (IB => {
          IB.dGB(BB)
        }))
      }
      setPoseLod(BB) {
        this.callCore("setPoseLod", void 0, (IB => {
          IB.YGB(BB)
        }))
      }
      setDebugLog(BB, IB) {
        this.callCore(eB, void 0, (ZB => {
          ZB.jq(BB, IB)
        }))
      }
      takeDebugLog(BB) {
        return this.callCore(eB, [], (IB => IB.Pq(BB)))
      }
      setTextureLayers(BB) {
        return this.callCore("setTextureLayers", !1, (IB => IB.HGB(BB)))
      }
      setBlockColours(BB) {
        let {
          blocks: IB,
          counts: ZB,
          values: TB
        } = BB;
        return this.callCore("setBlockColours", !1, (BB => BB.CTB(IB, ZB, TB)))
      }
      terrainTextureNames() {
        return this.callCore(uB, [], (BB => BB.XGB()))
      }
      setTerrainTextures(BB, IB, ZB, TB) {
        return this.callCore(uB, !1, (JB => JB.aGB(BB, ZB, IB, TB)))
      }
      setShaderPack(BB, IB, ZB, TB, JB, oB) {
        return this.callCore("setShaderPack", !1, (GB => {
          var vB, kB;
          return null !== (vB = null === (kB = GB.PTB) || void 0 === kB ? void 0 : kB.call(GB, BB, IB, ZB, TB, JB, oB)) && void 0 !== vB && vB
        }))
      }
      sunShadowWantedTextures() {
        return this.callCore(fB, null, (BB => {
          var IB, ZB;
          return null !== (IB = null === (ZB = BB.jGB) || void 0 === ZB ? void 0 : ZB.call(BB)) && void 0 !== IB ? IB : null
        }))
      }
      setSunShadowTexture(BB, IB, ZB, TB, JB) {
        this.callCore(fB, void 0, (oB => {
          var GB;
          null === (GB = oB.pGB) || void 0 === GB || GB.call(oB, BB, IB, ZB, TB, JB)
        }))
      }
      takeSunShadowWarnings() {
        return this.callCore(fB, [], (BB => {
          var IB, ZB;
          return null !== (IB = null === (ZB = BB.rGB) || void 0 === ZB ? void 0 : ZB.call(BB)) && void 0 !== IB ? IB : []
        }))
      }
      sunShadowsHeld() {
        return this.callCore(fB, null, (BB => {
          var IB, ZB;
          return null !== (IB = null === (ZB = BB.PGB) || void 0 === ZB ? void 0 : ZB.call(BB)) && void 0 !== IB ? IB : null
        }))
      }
      callCore(BB, IB, ZB) {
        if (this.stopped) return IB;
        try {
          return ZB(this.core)
        } catch (TB) {
          return this.crash(BB, TB), IB
        }
      }
      readEvents(BB) {
        this.netOffsets.length = 0;
        const IB = this.headerView(),
          ZB = IB[TB.mb.EventsPtr],
          JB = IB[TB.mb.EventsLen];
        if (this.envEvents.length = 0, this.graceEvents.length = 0, 0 === JB) return LB;
        const oB = [],
          GB = this.memory().buffer;
        if (ZB % 4 !== 0 || ZB + JB > GB.byteLength) return this.crash(XB, `events of ${JB} bytes at ${ZB} outside ${GB.byteLength} bytes of memory`), LB;
        const vB = new DataView(GB, ZB, JB),
          kB = this.rings.net,
          cB = (IB, ZB) => IB + ZB <= BB ? kB.copyWritten(IB, ZB) : null;
        let nB = 0;
        for (; nB < JB;) {
          const BB = nB + TB.U,
            IB = BB <= JB ? vB.getUint32(nB, !0) : -1,
            kB = IB >>> 16;
          if (IB < 0 || kB > JB - BB) return this.crash(XB, `event record at ${nB} overruns its ${JB} bytes`), LB;
          const iB = 65535 & IB,
            pB = IB => vB.getUint32(BB + 4 * IB, !0);
          if (iB === TB.X.RawMessage) {
            const BB = kB >= TB.Rc.BYTES ? 65535 & pB(1) : -1,
              IB = BB === TB.Rc.STRING_TYPE,
              ZB = kB === (IB ? TB.Rc.STRING_TYPE_BYTES : TB.Rc.BYTES) ? cB(pB(2), pB(3)) : null,
              JB = IB && ZB ? cB(pB(4), pB(5)) : null;
            if (!ZB || IB && !JB) return this.crash(XB, `RawMessage at ${nB} of ${kB} bytes names bytes outside net-in`), LB;
            this.netOffsets.push(nB), oB.push({
              type: "message",
              conn: pB(0),
              Xn: BB,
              payloadKind: pB(1) >>> 16,
              payload: ZB,
              stringType: JB ? lB.decode(JB) : null
            })
          } else if (iB === TB.X.CoreErrors) {
            var hB, zB;
            const BB = kB >= 4 ? pB(0) : -1;
            if (BB < 0 || BB > TB.H.PAIRS_MAX || kB !== 4 * (TB.H.FIXED_WORDS + TB.H.PAIR_WORDS * BB)) return this.crash(XB, `CoreErrors at ${nB} of ${kB} bytes`), LB;
            const IB = [];
            for (let ZB = 0; ZB < BB; ZB++) IB.push({
              code: pB(1 + 2 * ZB),
              detail: pB(2 + 2 * ZB)
            });
            null === (hB = (zB = this.handlers).onCoreErrors) || void 0 === hB || hB.call(zB, IB, pB(1 + 2 * BB))
          } else if (iB === TB.X.RenderReload) {
            var FB, NB;
            if (kB !== TB.ed.BYTES) return this.crash(XB, `RenderReload at ${nB} of ${kB} bytes`), LB;
            null === (FB = (NB = this.handlers).onRenderReload) || void 0 === FB || FB.call(NB, pB(0), pB(1), pB(2))
          } else if (iB === TB.X.JoinPreloadEnded) {
            var gB, qB;
            if (kB !== TB.zb.BYTES) return this.crash(XB, `JoinPreloadEnded at ${nB} of ${kB} bytes`), LB;
            null === (gB = (qB = this.handlers).onJoinPreloadEnded) || void 0 === gB || gB.call(qB, {
              chunks: pB(TB.zb.CHUNKS),
              bytes: pB(TB.zb.BYTES_HELD),
              asked: pB(TB.zb.ASKED),
              replaced: pB(TB.zb.REPLACED),
              dropped: pB(TB.zb.DROPPED)
            })
          } else if (iB === TB.X.Images) {
            var yB, UB;
            null === (yB = (UB = this.handlers).onImages) || void 0 === yB || yB.call(UB, new Uint8Array(GB.slice(ZB + BB, ZB + BB + kB)))
          } else if (iB === TB.X.ModelRequests)
            for (let ZB = 0; ZB < kB >>> 2; ZB++) {
              var WB, dB;
              null === (WB = (dB = this.handlers).onModelRequest) || void 0 === WB || WB.call(dB, pB(ZB))
            } else if (iB === TB.X.ModelTaken) {
              var CB, QB;
              if (kB < 4) return this.crash(XB, `ModelTaken at ${nB} of ${kB} bytes`), LB;
              const BB = new Uint32Array((kB >>> 2) - 1);
              for (let IB = 0; IB < BB.length; IB++) BB[IB] = pB(1 + IB);
              null === (CB = (QB = this.handlers).onModelTaken) || void 0 === CB || CB.call(QB, pB(0), BB)
            } else if (iB === TB.X.TerrainTexturesWanted) {
            var sB, wB;
            if (0 !== kB) return this.crash(XB, `TerrainTexturesWanted at ${nB} of ${kB} bytes`), LB;
            null === (sB = (wB = this.handlers).onTerrainTexturesWanted) || void 0 === sB || sB.call(wB)
          } else if (iB === TB.X.KeepAliveDue) {
            var OB, YB;
            if (kB > TB.Bb) return this.crash(XB, `KeepAliveDue at ${nB} of ${kB} bytes`), LB;
            null === (OB = (YB = this.handlers).onKeepAlive) || void 0 === OB || OB.call(YB, new Uint8Array(GB, ZB + BB, kB).slice())
          } else if (iB === TB.X.ConnectionState) {
            if (kB !== TB.w) return this.crash(XB, `ConnectionState at ${nB} of ${kB} bytes`), LB;
            this.netOffsets.push(nB), oB.push({
              type: "connection",
              conn: pB(0),
              phase: pB(1),
              code: 0 | pB(2)
            })
          } else if (iB === TB.X.EnvLighting || iB === TB.X.SkyImages) {
            if (kB !== (iB === TB.X.EnvLighting ? TB.R : TB.xd)) return this.crash(XB, `event ${iB} at ${nB} of ${kB} bytes`), LB;
            this.envEvents.push({
              kind: iB,
              payload: new Uint8Array(GB.slice(ZB + BB, ZB + BB + kB))
            })
          } else if (iB === TB.X.ReconnectGrace) {
            if (kB !== TB.tc) return this.crash(XB, `ReconnectGrace at ${nB} of ${kB} bytes`), LB;
            const BB = pB(2);
            this.graceEvents.push({
              conn: pB(0),
              graceMs: pB(1),
              sessionBased: 0 !== (BB & TB.Uc.SessionBased),
              replayOffer: 0 !== (BB & TB.Uc.ReplayOffer)
            })
          }
          nB = BB + (0, TB.xe)(kB)
        }
        return oB
      }
      takeSends(BB) {
        this.atSendsStop = !0;
        try {
          BB()
        } catch (IB) {
          this.crashOn(pB, IB)
        } finally {
          this.atSendsStop = !1
        }
        return !this.stopped
      }
      forEachNetOut(BB) {
        this.forEachOut(dB, "net-out", TB.mb.NetOutPtr, TB.mb.NetOutLen, TB.Wb, 0, ((IB, ZB, JB, oB) => {
          const GB = (0, TB.oe)(ZB);
          GB === TB.Yb.Frame ? BB((0, TB.le)(ZB), JB) : this.crash(dB, `net-out record at ${oB} is kind ${GB}, not a frame`)
        }))
      }
      forEachWorkerOut(BB) {
        this.forEachOut(CB, "worker-out", TB.mb.WorkerOutPtr, TB.mb.WorkerOutLen, TB.Ld, 4, ((IB, ZB, JB, oB) => {
          const GB = 255 & IB,
            vB = GB === TB.Wd.Init ? this.initOf(JB, oB) : JB;
          null !== vB && BB(GB, IB >>> 8 & 16777215, vB)
        }))
      }
      initOf(BB, IB) {
        const ZB = this.memory().buffer;
        if (BB.byteLength !== TB.qb) return this.crash(CB, `worker-out Init record at ${IB} is ${BB.byteLength} bytes, not a view`), null;
        const JB = new DataView(BB.buffer, BB.byteOffset, TB.qb),
          oB = JB.getUint32(0, !0),
          GB = JB.getUint32(4, !0);
        return oB + GB > ZB.byteLength ? (this.crash(CB, `worker-out Init record at ${IB} names ${GB} bytes at ${oB} outside ${ZB.byteLength} bytes of memory`), null) : new Uint8Array(ZB, oB, GB)
      }
      forEachOut(BB, IB, ZB, JB, oB, GB, vB) {
        if (!this.headerReadable()) return;
        const kB = this.headerView(),
          cB = kB[ZB],
          nB = kB[JB];
        if (0 === nB) return;
        const hB = this.memory().buffer;
        if (cB % 4 !== 0 || cB + nB > hB.byteLength) return void this.crash(BB, `${IB} of ${nB} bytes at ${cB} outside ${hB.byteLength} bytes of memory`);
        const zB = new DataView(hB, cB, nB);
        let FB = 0;
        for (; FB < nB;) {
          const ZB = FB + oB,
            JB = ZB <= nB ? zB.getUint32(FB + GB, !0) : -1;
          if (JB < 0 || JB > nB - ZB) return void this.crash(BB, `${IB} record at ${FB} overruns its ${nB} bytes`);
          if (vB(zB.getUint32(FB, !0), zB.getUint32(FB + 4, !0), new Uint8Array(hB, cB + ZB, JB), FB), this.stopped) return;
          FB = ZB + (0, TB.xe)(JB)
        }
      }
      forEachEvent(BB) {
        if (this.stopped || null === this.lastHeader) return;
        const IB = this.headerView(),
          ZB = IB[TB.mb.EventsPtr],
          JB = IB[TB.mb.EventsLen];
        if (0 === JB) return;
        const oB = this.memory().buffer;
        if (ZB % 4 !== 0 || ZB + JB > oB.byteLength) return void this.crash(XB, `events of ${JB} bytes at ${ZB} outside ${oB.byteLength} bytes of memory`);
        const GB = new DataView(oB, ZB, JB);
        let vB = 0;
        for (; vB < JB;) {
          const IB = vB + TB.U,
            ZB = IB <= JB ? GB.getUint32(vB, !0) : -1,
            oB = ZB >>> 16;
          if (ZB < 0 || oB > JB - IB) return void this.crash(XB, `event record at ${vB} overruns its ${JB} bytes`);
          BB(65535 & ZB, GB, IB, oB), vB = IB + (0, TB.xe)(oB)
        }
      }
      crashOn(BB, IB) {
        IB instanceof JB.c ? this.crash(XB, IB.message) : this.crash(BB, IB)
      }
      crash(BB, IB) {
        this.stopped || (this.stopped = !0, this.handlers.onCrash({
          site: BB,
          error: IB,
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
        const IB = this.loadCountWords();
        return null !== IB && (BB.chunksReceived = IB[TB.Hb.ChunksReceived], BB.chunksCancelled = this.headerView()[TB.mb.ChunksCancelled], BB.chunksStored = IB[TB.Hb.ChunksStored], BB.jobsSent = IB[TB.Hb.JobsSent], BB.jobsDone = IB[TB.Hb.JobsDone], BB.jobsInFlight = IB[TB.Hb.JobsInFlight], BB.workersLive = IB[TB.Hb.WorkersLive], BB.workersRetired = IB[TB.Hb.WorkersRetired], !0)
      }
      readViewQueuedPrograms() {
        var BB, IB;
        const ZB = null !== (BB = null === (IB = this.loadCountWords()) || void 0 === IB ? void 0 : IB[TB.Hb.ViewQueuedPrograms]) && void 0 !== BB ? BB : 0;
        return 0 === ZB ? null : ZB - 1
      }
      readFirstViewWait(BB, IB) {
        const ZB = this.loadCountWords();
        return null === ZB ? null : [ZB[TB.Hb.FirstViewLinkMs], ZB[TB.Hb.FirstViewTerrainMs], ZB[TB.Hb.FirstViewHeldMs], ZB[TB.Hb.FirstViewOtherMs], ZB[TB.Hb.FirstViewGaps], ZB[TB.Hb.FirstViewGapMs], BB, IB]
      }
      loadCountWords() {
        if (this.stopped || null === this.lastHeader) return null;
        const BB = this.core.Mq();
        if (0 === BB) return null;
        const IB = this.memory().buffer;
        return IB !== this.loadCountsBuffer && (this.loadCountsBuffer = IB, this.loadCounts = new Uint32Array(IB, BB, TB.Db)), this.loadCounts
      }
      headerView() {
        const BB = this.memory().buffer;
        return BB !== this.headerBuffer && (this.headerBuffer = BB, this.header = new Uint32Array(BB, this.core.sF(), TB.kb)), this.header
      }
    }
  },
  40816: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => GB,
      h: () => oB
    });
    var TB = ZB(4874);
    let JB = null;

    function oB(BB) {
      JB = {
        scanned: !1
      };
      try {
        return BB()
      } finally {
        JB = null
      }
    }

    function GB() {
      const BB = JB;
      if (null === BB) return (0, TB.h)();
      const IB = (0, TB.h)(!BB.scanned);
      return BB.scanned = !0, IB
    }
  },
  40860: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => TB
    });
    const TB = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  40876: (BB, IB, ZB) => {
    function TB() {
      return ZB(40878)
    }

    function JB() {
      return ZB(40882)
    }

    function oB(BB) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(BB)
    }
    ZB.d(IB, {
      c: () => oB,
      e: () => TB,
      h: () => JB
    })
  },
  36297: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => vB,
      g: () => cB,
      h: () => GB,
      k: () => hB
    });
    var TB = ZB(36292),
      JB = ZB(11);
    const oB = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function GB(BB) {
      if (BB instanceof WebAssembly.RuntimeError) return !0;
      const IB = BB instanceof Error ? BB.stack : void 0;
      return "string" === typeof IB && oB.test(IB)
    }

    function vB(BB, IB, ZB) {
      var JB;
      const GB = BB instanceof Error ? BB.name : "thrown",
        vB = (BB instanceof Error && null !== (JB = BB.stack) && void 0 !== JB ? JB : "").split("\n").filter((BB => oB.test(BB))).slice(0, 8).map((BB => BB.trim())),
        kB = null === IB ? "wasm memory unknown" : `wasm memory ${Math.round(IB/2**20)} MB`,
        cB = null === ZB.panic ? "" : `, panic: ${(0,TB.j)(ZB.panic)}`,
        nB = `${GB}: ${BB instanceof Error?BB.message:String(BB)}`;
      return `${(0,TB.m)(ZB.kind,ZB.refusedBytes)} ${nB} (${kB})${cB}${vB.length>0?` | ${vB.join(" < ")}`:""}`
    }
    const kB = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function cB(BB) {
      var IB;
      let ZB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(BB instanceof Error) || !kB.test(BB.message)) return {};
      if (!("detached" in ZB)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, JB.V)(null === (IB = (0, JB.M)(ZB, "detached")) || void 0 === IB ? void 0 : IB.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const nB = 500;

    function hB(BB) {
      let IB = "[object Object]";
      try {
        IB = String(BB)
      } catch {}
      if ("[object Object]" !== IB) return IB;
      try {
        var ZB, TB;
        return null !== (ZB = null === (TB = JSON.stringify(BB)) || void 0 === TB ? void 0 : TB.slice(0, nB)) && void 0 !== ZB ? ZB : IB
      } catch {
        return IB
      }
    }
  },
  40878: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  40882: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  },
  36292: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => TB,
      h: () => oB,
      j: () => kB,
      l: () => GB,
      m: () => JB
    });
    const TB = /^alloc_failed (\d+) bytes$/;

    function JB(BB, IB) {
      return oB(BB, IB) ? `trap=alloc_failed ${IB} bytes` : `trap=${BB}`
    }

    function oB(BB, IB) {
      return "unreachable" === BB && IB > 0
    }

    function GB(BB, IB, ZB) {
      const TB = function(BB) {
        return BB instanceof WebAssembly.RuntimeError ? /unreachable/i.test(BB.message) ? "unreachable" : /out of bounds/i.test(BB.message) ? "out_of_bounds" : "runtime_error" : (BB instanceof RangeError || BB instanceof Error && "InternalError" === BB.name) && /call stack|recursion/i.test(BB.message) ? "stack_overflow" : "js_error"
      }(BB);
      if ("unreachable" !== TB) return {
        kind: TB,
        panic: null,
        refusedBytes: 0
      };
      const JB = IB(),
        oB = ZB();
      return {
        kind: TB,
        panic: oB > 0 ? null : JB,
        refusedBytes: oB
      }
    }
    const vB = 300;

    function kB(BB) {
      return BB.replace(/\s*\n\s*/g, " / ").slice(0, vB)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);