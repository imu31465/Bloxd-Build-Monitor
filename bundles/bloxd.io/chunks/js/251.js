export const id = 251;
export const ids = [251];
export const modules = {
  39722: (BB, TB, dB) => {
    function VB(BB, TB, dB) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(BB, TB).getContext("2d", dB);
      const VB = document.createElement("canvas");
      return VB.width = BB, VB.height = TB, VB.getContext("2d", dB)
    }

    function yB(BB, TB) {
      return BB.getContext("2d", TB)
    }
    dB.d(TB, {
      c: () => yB,
      f: () => VB
    })
  },
  39645: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => mB,
      h: () => DB,
      j: () => CB,
      l: () => wB,
      n: () => FB,
      q: () => KB,
      s: () => vB,
      w: () => HB,
      x: () => EB,
      z: () => zB,
      C: () => ZB,
      F: () => tB,
      J: () => PB,
      L: () => hB,
      N: () => rB,
      R: () => cB
    });
    var VB = dB(4186),
      yB = dB(39376),
      pB = dB(5);
    class lB {
      constructor(BB, TB) {
        this.memory = BB, this.access = TB, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.Kk = 0, this.u32 = new pB.g(0), this.f32 = new pB.d(0), this.u8 = new pB.c(0), this.dataView = new pB.f(new ArrayBuffer(0)), this.refresh()
      }
      refresh() {
        this.ptr = this.access.ptr(), this.Kk = this.access.Kk(), this.buffer = (0, pB.E)(this.memory()), this.u32 = new pB.g(this.buffer, this.ptr, this.Kk >>> 2), this.f32 = new pB.d(this.buffer, this.ptr, this.Kk >>> 2), this.u8 = new pB.c(this.buffer, this.ptr, this.Kk), this.dataView = new pB.f(this.buffer, this.ptr, this.Kk)
      }
      ensureViews() {
        (0, pB.E)(this.memory()) !== this.buffer && this.refresh()
      }
      get view() {
        return this.ensureViews(), this.dataView
      }
      room(BB) {
        return !!this.fits(BB) || (this.dropped++, !1)
      }
      fits(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.cursor;
        this.ensureViews();
        const dB = TB + BB;
        return dB <= this.Kk || dB <= VB.Bc && 0 !== this.access.reserve(dB) && (this.refresh(), dB <= this.Kk)
      }
      consume(BB) {
        const TB = this.cursor - BB;
        TB > 0 && BB > 0 && (this.ensureViews(), this.u8.copyWithin(0, BB, this.cursor)), this.cursor = TB > 0 ? TB : 0
      }
      writeRecord(BB, TB, dB, yB, pB) {
        if (!this.room(VB.lb)) return !1;
        const lB = this.cursor >>> 2;
        return this.u32[lB] = 65535 & BB | (65535 & TB) << 16, this.f32[lB + 1] = dB, this.f32[lB + 2] = yB, this.u32[lB + 3] = pB >>> 0, this.cursor += VB.lb, !0
      }
      writeOptions(BB, TB) {
        const dB = TB.byteLength,
          yB = VB.lb + (0, VB.je)(dB);
        if (!this.fits(yB)) return !1;
        const pB = this.cursor,
          lB = pB >>> 2;
        this.u32[lB] = VB.pb.Options, this.u32[lB + 1] = dB, this.u32[lB + 2] = 0, this.u32[lB + 3] = BB >>> 0;
        const JB = pB + VB.lb;
        return this.u8.set(TB, JB), this.u8.fill(0, JB + dB, pB + yB), this.cursor += yB, !0
      }
      writeWorkerRecord(BB, TB, dB, yB, pB, lB) {
        const JB = lB.byteLength,
          YB = VB.Dd + (0, VB.je)(JB);
        if (JB > VB.Cd) return this.dropped++, !1;
        if (!this.room(YB)) return !1;
        const gB = this.cursor,
          oB = gB >>> 2;
        this.u32[oB] = BB >>> 0, this.u32[oB + 1] = 65535 & TB | (65535 & dB) << 16, this.u32[oB + 2] = yB >>> 0, this.u32[oB + 3] = pB >>> 0, this.u32[oB + 4] = JB;
        const kB = gB + VB.Dd;
        return this.u8.set(lB, kB), this.u8.fill(0, kB + JB, gB + YB), this.cursor += YB, !0
      }
      written() {
        return this.ensureViews(), this.u8.subarray(0, this.cursor)
      }
      writeFrame(BB, TB) {
        return this.writeNet(VB.Ob.Frame, BB, TB)
      }
      writeOpen(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(VB.Ob.Open, BB, YB(TB))
      }
      writeClose(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(VB.Ob.Close, BB, YB(TB))
      }
      writeNet(BB, TB, dB) {
        const yB = dB.byteLength,
          pB = VB.Mb + (0, VB.je)(yB);
        if (yB > VB.Fb) return this.dropped++, !1;
        if (!this.room(pB)) return !1;
        const lB = this.cursor;
        this.u32[lB >>> 2] = yB, this.u32[1 + (lB >>> 2)] = (0, VB.ce)(BB, TB);
        const JB = lB + VB.Mb;
        return this.u8.set(dB, JB), this.u8.fill(0, JB + yB, lB + pB), this.cursor += pB, !0
      }
      tO(BB, TB, dB) {
        const yB = VB.n + (0, VB.je)(dB);
        if (!this.room(yB)) return -1;
        const pB = this.cursor;
        this.u32[pB >>> 2] = 65535 & BB | (65535 & TB) << 16, this.u32[1 + (pB >>> 2)] = dB;
        const lB = pB + VB.n;
        return this.u8.fill(0, lB, pB + yB), this.cursor += yB, lB
      }
      growForCmd(BB) {
        return this.fits(VB.n + (0, VB.je)(BB), 0)
      }
      writeCmd(BB, TB, dB) {
        const VB = this.tO(BB, TB, dB.byteLength);
        return !(VB < 0) && (this.u8.set(dB, VB), !0)
      }
      copyWritten(BB, TB) {
        return this.ensureViews(), this.u8.slice(BB, BB + TB)
      }
    }
    const JB = new pB.c(0);

    function YB(BB) {
      if (0 === BB) return JB;
      const TB = new pB.c(VB.Jb);
      for (let dB = 0; dB < VB.Jb; dB++) TB[dB] = BB >>> 8 * dB & 255;
      return TB
    }
    class gB {
      constructor(BB, TB) {
        this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new lB(TB, {
          ptr: () => BB.Gk(),
          Kk: () => BB.epB(),
          reserve: TB => BB.klB(TB)
        }), this.net = new lB(TB, {
          ptr: () => BB.YlB(),
          Kk: () => BB.JlB(),
          reserve: TB => BB.LlB(TB)
        }), this.worker = new lB(TB, {
          ptr: () => BB.SlB(),
          Kk: () => BB.clB(),
          reserve: TB => BB.OlB(TB)
        }), this.cmd = new lB(TB, {
          ptr: () => BB.hpB(),
          Kk: () => BB.XpB(),
          reserve: TB => BB.WpB(TB)
        })
      }
      reset(BB) {
        this.input.cursor = 0, this.worker.cursor = 0, this.cmd.consume(BB)
      }
    }
    var oB = dB(39517),
      kB = dB(2109),
      LB = dB(4177),
      OB = dB(39653);
    const DB = "coreFrame",
      uB = "fatalStatus",
      HB = "otherCall",
      EB = "coreRings",
      vB = "netIn",
      mB = "abi",
      iB = "netOut",
      NB = "workerOut",
      tB = "worldgenHost",
      fB = "eventWalker",
      sB = "netEvent",
      MB = "envEvent",
      zB = "sharedTables",
      wB = "inputAction",
      UB = new Set([fB, sB, MB, wB, zB]),
      FB = "wasmMemory",
      KB = "meshHost";

    function rB(BB, TB) {
      BB.forEachWorkerOut(((dB, yB, pB) => {
        if ((0, VB.Wd)(dB)) try {
          var lB;
          null === (lB = TB.worldgen) || void 0 === lB || lB.take(dB, pB)
        } catch (YB) {
          BB.crash(tB, YB)
        } else try {
          var JB;
          null === (JB = TB.mesh) || void 0 === JB || JB.take(dB, yB, pB)
        } catch (YB) {
          BB.crash(KB, YB)
        }
      }))
    }
    const IB = 1048576;

    function cB(BB, TB) {
      let dB = !1;
      const VB = () => {
        dB = !1, TB()
      };
      return () => {
        !dB && BB.cursor >= IB && (dB = !0, queueMicrotask(VB))
      }
    }
    const SB = new Set([uB, HB, tB, KB]);

    function PB(BB) {
      return UB.has(BB.site) ? BB.error instanceof WebAssembly.RuntimeError || (0, yB.j)(BB.error) : !SB.has(BB.site) && BB.error instanceof Error
    }
    const QB = "events",
      RB = [],
      aB = "vW",
      ZB = "terrainTextures",
      XB = "sunShadowTextures",
      WB = new TextDecoder;

    function hB(BB, TB) {
      const {
        site: dB,
        error: yB,
        header: pB
      } = BB, lB = pB ? (0, VB.Rd)(pB.lastError) : "noFrame", JB = `CORE-${dB===uB?lB:dB}`, YB = null === yB || void 0 === yB ? "" : ` ${(0,oB.f)(yB)}`, gB = {
        site: dB,
        wasmBuild: TB.wasm,
        clientVersion: TB.client
      };
      return pB && (gB.status = String(pB.status), gB.lastError = lB, gB.lastErrorCode = String(pB.lastError), gB.lastErrorDetail = String(pB.lastErrorDetail), gB.errorCount = String(pB.errorCount), gB.frameIndex = String(pB.frameIndex), gB.tickIndex = String(pB.tickIndex)), {
        code: JB,
        message: `core ${dB}, last error ${lB};${YB}`,
        details: gB
      }
    }
    class CB {
      constructor(BB, TB, dB) {
        this.core = BB, this.memory = TB, this.handlers = dB, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.unsentUiPrefs = null, this.eventWalker = null, this.netOffsets = [], this.frameEvents = {
          ptr: 0,
          len: 0,
          net: RB,
          netOffsets: this.netOffsets,
          kind: "none"
        }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.rings = new gB(BB, TB)
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
          return this.core.ApB(BB)
        } catch (TB) {
          return this.crash(DB, TB), !1
        }
      }
      get isStopped() {
        return this.stopped
      }
      frame(BB, TB) {
        var dB;
        let pB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.stopped) return !1;
        if (!this.writePendingInput()) return !1;
        const {
          input: lB,
          net: JB,
          worker: YB,
          cmd: gB
        } = this.rings, oB = JB.cursor, kB = TB && !this.drawsHeld;
        let HB = VB.F.Fatal;
        const EB = gB.cursor;
        let mB = null;
        try {
          const TB = (kB ? VB.T.Draws : 0) | (pB ? VB.T.NetAll : 0);
          HB = (0, OB.e)((() => this.core.frame(BB, lB.cursor, JB.cursor, YB.cursor, TB, EB)))
        } catch (cB) {
          mB = {
            error: cB
          }
        }
        const iB = null === (dB = this.gameHost) || void 0 === dB ? void 0 : dB.takeFault();
        this.rings.reset(this.stopped || null !== mB || void 0 !== iB ? gB.cursor : EB);
        const NB = null === mB && void 0 === iB ? this.headerView() : null,
          tB = null === NB ? null : (0, VB.le)(NB);
        null !== tB && (this.lastHeader = tB);
        const MB = null !== tB && HB !== VB.F.Fatal,
          zB = MB && null !== NB ? NB[VB.cb.NetInKept] : 0,
          wB = MB && zB <= oB && zB % 4 === 0 ? zB : null;
        var UB, FB;
        null !== tB && null !== wB && HB === VB.F.Errors && (null === (UB = (FB = this.handlers).onErrors) || void 0 === UB || UB.call(FB, tB));
        const KB = null === wB ? RB : this.readEvents(oB);
        if (JB.consume(oB - (null !== wB && void 0 !== wB ? wB : 0)), this.netKept = null !== wB && void 0 !== wB ? wB : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== mB) return this.crash(DB, void 0 === iB || iB instanceof yB.b ? mB.error : iB), !1;
        if (void 0 !== iB || null === tB) return this.crashOn(DB, iB), !1;
        if (this.lastFrameKind = (0, LB.h)(kB, this.headerView()[VB.cb.FrameDraw]), HB === VB.F.Fatal) return this.crash(uB, null), !1;
        if (null === wB) return this.crash(vB, `the core kept ${zB} of ${oB} net-in bytes`), !1;
        if (this.eventWalker) {
          if (this.stopped) return !1;
          const BB = this.frameEvents,
            TB = this.headerView();
          BB.ptr = TB[VB.cb.EventsPtr], BB.len = TB[VB.cb.EventsLen], BB.net = KB, BB.kind = this.lastFrameKind;
          try {
            this.eventWalker(BB)
          } catch (cB) {
            return this.crashOn(fB, cB), !1
          }
          return this.handEnvEvents()
        }
        for (const VB of KB) {
          if (this.stopped) return !1;
          try {
            var rB, IB;
            null === (rB = (IB = this.handlers).onNetEvent) || void 0 === rB || rB.call(IB, VB)
          } catch (cB) {
            return this.crashOn(sB, cB), !1
          }
        }
        return this.handEnvEvents()
      }
      handEnvEvents() {
        for (const pB of this.graceEvents) {
          if (this.stopped) return !1;
          try {
            var BB, TB;
            null === (BB = (TB = this.handlers).onReconnectGrace) || void 0 === BB || BB.call(TB, pB)
          } catch (yB) {
            return this.crashOn(sB, yB), !1
          }
        }
        for (const pB of this.envEvents) {
          if (this.stopped) return !1;
          try {
            var dB, VB;
            null === (dB = (VB = this.handlers).onEnvEvent) || void 0 === dB || dB.call(VB, pB)
          } catch (yB) {
            return this.crashOn(MB, yB), !1
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
          const TB = this.unsentUiPrefs;
          TB && BB.writeRecord(VB.pb.UiPrefs, 0, TB.nametagCutDistance, 0, (0, VB.pe)(TB)) && (this.unsentUiPrefs = null);
          const dB = this.unsentEnvPrefs;
          dB && BB.writeRecord(VB.pb.EnvPrefs, (0, VB.Ud)(dB), dB.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
          const yB = this.unsentLookPrefs;
          yB && BB.writeRecord(VB.pb.Sensitivity, 0, yB.mouse, yB.touch, (0, kB.m)(yB.fovPercent)) && (this.unsentLookPrefs = null);
          let pB = 0;
          for (const {
              aux: VB,
              payload: lB
            }
            of this.unsentOptions) {
            if (!BB.writeOptions(VB, lB)) {
              if (BB.cursor > 0) break;
              this.optionsDropped++
            }
            pB++
          }
          pB > 0 && this.unsentOptions.splice(0, pB)
        } catch (TB) {
          return this.crash(EB, TB), !1
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
      queueOptions(BB, TB) {
        return !this.isStopped && (TB.byteLength > VB.Wb.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
          aux: BB,
          payload: TB
        }), !0))
      }
      setChunkCap(BB) {
        return this.callCore("setChunkCap", null, (TB => TB.mlB(BB)))
      }
      shedMemory(BB) {
        const TB = this.callCore("shedMemory", null, (TB => TB.wlB(BB)));
        return 0 === TB ? null : TB
      }
      addDistanceInUse() {
        const BB = this.callCore("addDistanceInUse", null, (BB => BB.PpB()));
        return 0 === BB ? null : BB
      }
      setChunkAddDistance(BB, TB) {
        return this.callCore("setChunkAddDistance", !1, (dB => dB.vlB(BB, TB)))
      }
      setGameHost(BB) {
        return this.callCore("setGameHost", !1, (TB => (TB.jpB(BB), this.gameHost = BB, !0)))
      }
      setAntiCheatProbes(BB) {
        return this.callCore("setAntiCheatProbes", !1, (TB => TB.HlB(BB)))
      }
      setAmbientOcclusion(BB) {
        this.callCore("setAmbientOcclusion", void 0, (TB => {
          TB.ulB(BB)
        }))
      }
      setPoseLod(BB) {
        this.callCore("setPoseLod", void 0, (TB => {
          TB.tlB(BB)
        }))
      }
      setLookDebug(BB) {
        this.callCore(aB, void 0, (TB => {
          TB.NlB(BB)
        }))
      }
      takeLookDebug() {
        return this.callCore(aB, [], (BB => BB.FlB()))
      }
      setTextureLayers(BB) {
        return this.callCore("setTextureLayers", !1, (TB => TB.zlB(BB)))
      }
      setBlockColours(BB) {
        let {
          blocks: TB,
          counts: dB,
          values: VB
        } = BB;
        return this.callCore("setBlockColours", !1, (BB => BB.HVB(TB, dB, VB)))
      }
      terrainTextureNames() {
        return this.callCore(ZB, [], (BB => BB.IlB()))
      }
      setTerrainTextures(BB, TB, dB, VB) {
        return this.callCore(ZB, !1, (yB => yB.MlB(BB, dB, TB, VB)))
      }
      setShaderPack(BB, TB, dB, VB, yB, pB) {
        return this.callCore("setShaderPack", !1, (lB => {
          var JB, YB;
          return null !== (JB = null === (YB = lB.syB) || void 0 === YB ? void 0 : YB.call(lB, BB, TB, dB, VB, yB, pB)) && void 0 !== JB && JB
        }))
      }
      sunShadowWantedTextures() {
        return this.callCore(XB, null, (BB => {
          var TB, dB;
          return null !== (TB = null === (dB = BB.UlB) || void 0 === dB ? void 0 : dB.call(BB)) && void 0 !== TB ? TB : null
        }))
      }
      setSunShadowTexture(BB, TB, dB, VB, yB) {
        this.callCore(XB, void 0, (pB => {
          var lB;
          null === (lB = pB.slB) || void 0 === lB || lB.call(pB, BB, TB, dB, VB, yB)
        }))
      }
      takeSunShadowWarnings() {
        return this.callCore(XB, [], (BB => {
          var TB, dB;
          return null !== (TB = null === (dB = BB.KlB) || void 0 === dB ? void 0 : dB.call(BB)) && void 0 !== TB ? TB : []
        }))
      }
      callCore(BB, TB, dB) {
        if (this.stopped) return TB;
        try {
          return dB(this.core)
        } catch (VB) {
          return this.crash(BB, VB), TB
        }
      }
      readEvents(BB) {
        this.netOffsets.length = 0;
        const TB = this.headerView(),
          dB = TB[VB.cb.EventsPtr],
          yB = TB[VB.cb.EventsLen];
        if (this.envEvents.length = 0, this.graceEvents.length = 0, 0 === yB) return RB;
        const pB = [],
          lB = this.memory().buffer;
        if (dB % 4 !== 0 || dB + yB > lB.byteLength) return this.crash(QB, `events of ${yB} bytes at ${dB} outside ${lB.byteLength} bytes of memory`), RB;
        const JB = new DataView(lB, dB, yB),
          YB = this.rings.net,
          gB = (TB, dB) => TB + dB <= BB ? YB.copyWritten(TB, dB) : null;
        let oB = 0;
        for (; oB < yB;) {
          const BB = oB + VB.I,
            TB = BB <= yB ? JB.getUint32(oB, !0) : -1,
            YB = TB >>> 16;
          if (TB < 0 || YB > yB - BB) return this.crash(QB, `event record at ${oB} overruns its ${yB} bytes`), RB;
          const MB = 65535 & TB,
            zB = TB => JB.getUint32(BB + 4 * TB, !0);
          if (MB === VB.K.RawMessage) {
            const BB = YB >= VB.Cc.BYTES ? 65535 & zB(1) : -1,
              TB = BB === VB.Cc.STRING_TYPE,
              dB = YB === (TB ? VB.Cc.STRING_TYPE_BYTES : VB.Cc.BYTES) ? gB(zB(2), zB(3)) : null,
              yB = TB && dB ? gB(zB(4), zB(5)) : null;
            if (!dB || TB && !yB) return this.crash(QB, `RawMessage at ${oB} of ${YB} bytes names bytes outside net-in`), RB;
            this.netOffsets.push(oB), pB.push({
              type: "message",
              conn: zB(0),
              Jo: BB,
              payloadKind: zB(1) >>> 16,
              payload: dB,
              stringType: yB ? WB.decode(yB) : null
            })
          } else if (MB === VB.K.CoreErrors) {
            var kB, LB;
            const BB = YB >= 4 ? zB(0) : -1;
            if (BB < 0 || BB > VB.x.PAIRS_MAX || YB !== 4 * (VB.x.FIXED_WORDS + VB.x.PAIR_WORDS * BB)) return this.crash(QB, `CoreErrors at ${oB} of ${YB} bytes`), RB;
            const TB = [];
            for (let dB = 0; dB < BB; dB++) TB.push({
              code: zB(1 + 2 * dB),
              detail: zB(2 + 2 * dB)
            });
            null === (kB = (LB = this.handlers).onCoreErrors) || void 0 === kB || kB.call(LB, TB, zB(1 + 2 * BB))
          } else if (MB === VB.K.RenderReload) {
            var OB, DB;
            if (YB !== VB.Rc.BYTES) return this.crash(QB, `RenderReload at ${oB} of ${YB} bytes`), RB;
            null === (OB = (DB = this.handlers).onRenderReload) || void 0 === OB || OB.call(DB, zB(0), zB(1), zB(2))
          } else if (MB === VB.K.Images) {
            var uB, HB;
            null === (uB = (HB = this.handlers).onImages) || void 0 === uB || uB.call(HB, new Uint8Array(lB.slice(dB + BB, dB + BB + YB)))
          } else if (MB === VB.K.ModelRequests)
            for (let dB = 0; dB < YB >>> 2; dB++) {
              var EB, vB;
              null === (EB = (vB = this.handlers).onModelRequest) || void 0 === EB || EB.call(vB, zB(dB))
            } else if (MB === VB.K.ModelTaken) {
              var mB, iB;
              if (YB < 4) return this.crash(QB, `ModelTaken at ${oB} of ${YB} bytes`), RB;
              const BB = new Uint32Array((YB >>> 2) - 1);
              for (let TB = 0; TB < BB.length; TB++) BB[TB] = zB(1 + TB);
              null === (mB = (iB = this.handlers).onModelTaken) || void 0 === mB || mB.call(iB, zB(0), BB)
            } else if (MB === VB.K.TerrainTexturesWanted) {
            var NB, tB;
            if (0 !== YB) return this.crash(QB, `TerrainTexturesWanted at ${oB} of ${YB} bytes`), RB;
            null === (NB = (tB = this.handlers).onTerrainTexturesWanted) || void 0 === NB || NB.call(tB)
          } else if (MB === VB.K.KeepAliveDue) {
            var fB, sB;
            if (YB > VB.vb) return this.crash(QB, `KeepAliveDue at ${oB} of ${YB} bytes`), RB;
            null === (fB = (sB = this.handlers).onKeepAlive) || void 0 === fB || fB.call(sB, new Uint8Array(lB, dB + BB, YB).slice())
          } else if (MB === VB.K.ConnectionState) {
            if (YB !== VB.q) return this.crash(QB, `ConnectionState at ${oB} of ${YB} bytes`), RB;
            this.netOffsets.push(oB), pB.push({
              type: "connection",
              conn: zB(0),
              phase: zB(1),
              code: 0 | zB(2)
            })
          } else if (MB === VB.K.EnvLighting || MB === VB.K.SkyImages) {
            if (YB !== (MB === VB.K.EnvLighting ? VB.G : VB.nd)) return this.crash(QB, `event ${MB} at ${oB} of ${YB} bytes`), RB;
            this.envEvents.push({
              kind: MB,
              payload: new Uint8Array(lB.slice(dB + BB, dB + BB + YB))
            })
          } else if (MB === VB.K.ReconnectGrace) {
            if (YB !== VB.hc) return this.crash(QB, `ReconnectGrace at ${oB} of ${YB} bytes`), RB;
            const BB = zB(2);
            this.graceEvents.push({
              conn: zB(0),
              graceMs: zB(1),
              sessionBased: 0 !== (BB & VB.Gc.SessionBased),
              replayOffer: 0 !== (BB & VB.Gc.ReplayOffer)
            })
          }
          oB = BB + (0, VB.je)(YB)
        }
        return pB
      }
      forEachNetOut(BB) {
        this.forEachOut(iB, "net-out", VB.cb.NetOutPtr, VB.cb.NetOutLen, VB.Mb, 0, ((TB, dB, yB, pB) => {
          const lB = (0, VB.$d)(dB);
          lB === VB.Ob.Frame ? BB((0, VB._d)(dB), yB) : this.crash(iB, `net-out record at ${pB} is kind ${lB}, not a frame`)
        }))
      }
      forEachWorkerOut(BB) {
        this.forEachOut(NB, "worker-out", VB.cb.WorkerOutPtr, VB.cb.WorkerOutLen, VB.Bd, 4, ((TB, dB, yB, pB) => {
          const lB = 255 & TB,
            JB = lB === VB.Md.Init ? this.initOf(yB, pB) : yB;
          null !== JB && BB(lB, TB >>> 8 & 16777215, JB)
        }))
      }
      initOf(BB, TB) {
        const dB = this.memory().buffer;
        if (BB.byteLength !== VB.fb) return this.crash(NB, `worker-out Init record at ${TB} is ${BB.byteLength} bytes, not a view`), null;
        const yB = new DataView(BB.buffer, BB.byteOffset, VB.fb),
          pB = yB.getUint32(0, !0),
          lB = yB.getUint32(4, !0);
        return pB + lB > dB.byteLength ? (this.crash(NB, `worker-out Init record at ${TB} names ${lB} bytes at ${pB} outside ${dB.byteLength} bytes of memory`), null) : new Uint8Array(dB, pB, lB)
      }
      forEachOut(BB, TB, dB, yB, pB, lB, JB) {
        if (this.stopped || null === this.lastHeader) return;
        const YB = this.headerView(),
          gB = YB[dB],
          oB = YB[yB];
        if (0 === oB) return;
        const kB = this.memory().buffer;
        if (gB % 4 !== 0 || gB + oB > kB.byteLength) return void this.crash(BB, `${TB} of ${oB} bytes at ${gB} outside ${kB.byteLength} bytes of memory`);
        const LB = new DataView(kB, gB, oB);
        let OB = 0;
        for (; OB < oB;) {
          const dB = OB + pB,
            yB = dB <= oB ? LB.getUint32(OB + lB, !0) : -1;
          if (yB < 0 || yB > oB - dB) return void this.crash(BB, `${TB} record at ${OB} overruns its ${oB} bytes`);
          if (JB(LB.getUint32(OB, !0), LB.getUint32(OB + 4, !0), new Uint8Array(kB, gB + dB, yB), OB), this.stopped) return;
          OB = dB + (0, VB.je)(yB)
        }
      }
      forEachEvent(BB) {
        if (this.stopped || null === this.lastHeader) return;
        const TB = this.headerView(),
          dB = TB[VB.cb.EventsPtr],
          yB = TB[VB.cb.EventsLen];
        if (0 === yB) return;
        const pB = this.memory().buffer;
        if (dB % 4 !== 0 || dB + yB > pB.byteLength) return void this.crash(QB, `events of ${yB} bytes at ${dB} outside ${pB.byteLength} bytes of memory`);
        const lB = new DataView(pB, dB, yB);
        let JB = 0;
        for (; JB < yB;) {
          const TB = JB + VB.I,
            dB = TB <= yB ? lB.getUint32(JB, !0) : -1,
            pB = dB >>> 16;
          if (dB < 0 || pB > yB - TB) return void this.crash(QB, `event record at ${JB} overruns its ${yB} bytes`);
          BB(65535 & dB, lB, TB, pB), JB = TB + (0, VB.je)(pB)
        }
      }
      crashOn(BB, TB) {
        TB instanceof yB.b ? this.crash(QB, TB.message) : this.crash(BB, TB)
      }
      crash(BB, TB) {
        this.stopped || (this.stopped = !0, this.handlers.onCrash({
          site: BB,
          error: TB,
          header: this.lastHeader
        }))
      }
      headerWord(BB) {
        return this.stopped || null === this.lastHeader ? 0 : this.headerView()[BB]
      }
      headerView() {
        const BB = this.memory().buffer;
        return BB !== this.headerBuffer && (this.headerBuffer = BB, this.header = new Uint32Array(BB, this.core.fO(), VB._)), this.header
      }
    }
  },
  39653: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => lB,
      e: () => pB
    });
    var VB = dB(5959);
    let yB = null;

    function pB(BB) {
      yB = {
        scanned: !1
      };
      try {
        return BB()
      } finally {
        yB = null
      }
    }

    function lB() {
      const BB = yB;
      if (null === BB) return (0, VB.f)();
      const TB = (0, VB.f)(!BB.scanned);
      return BB.scanned = !0, TB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);