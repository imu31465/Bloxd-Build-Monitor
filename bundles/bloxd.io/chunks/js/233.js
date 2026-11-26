export const id = 233;
export const ids = [233];
export const modules = {
  36948: (BB, OB, GB) => {
    function YB(BB, OB, GB) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(BB, OB).getContext("2d", GB);
      const YB = document.createElement("canvas");
      return YB.width = BB, YB.height = OB, YB.getContext("2d", GB)
    }

    function DB(BB, OB) {
      return BB.getContext("2d", OB)
    }
    GB.d(OB, {
      e: () => DB,
      f: () => YB
    })
  },
  41812: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => jB
    });
    const YB = 1 << 20,
      DB = 1 << 21,
      QB = 1024,
      oB = 2048;

    function jB(BB, OB, GB) {
      const jB = BB + YB,
        yB = OB + QB,
        JB = GB + YB;
      return jB < 0 || jB >= DB || JB < 0 || JB >= DB || yB < 0 || yB >= oB ? -1 : (jB * DB + JB) * oB + yB
    }
  },
  41805: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => YB,
      d: () => oB,
      e: () => DB,
      i: () => QB,
      k: () => MB,
      o: () => JB,
      s: () => yB,
      t: () => jB
    });
    GB(3890);
    GB(41812);

    function YB(BB) {}

    function DB(BB) {}

    function QB(BB) {}

    function oB(BB) {}

    function jB(BB) {}

    function yB(BB, OB, GB) {}

    function JB(BB) {}

    function MB(BB) {}
  },
  41797: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => WB,
      e: () => pB,
      g: () => TB,
      j: () => dB,
      k: () => mB,
      l: () => IB,
      o: () => RB,
      s: () => ZB,
      v: () => NB,
      x: () => kB,
      z: () => cB,
      C: () => SB,
      F: () => rB,
      I: () => eB,
      L: () => FB,
      M: () => LB
    });
    var YB = GB(5281),
      DB = GB(41646),
      QB = (GB(41805), GB(6));
    class oB {
      constructor(BB, OB) {
        this.memory = BB, this.access = OB, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.CP = 0, this.u32 = new QB.j(0), this.f32 = new QB.h(0), this.u8 = new QB.d(0), this.dataView = new QB.i(new ArrayBuffer(0)), this.refresh()
      }
      refresh() {
        this.ptr = this.access.ptr(), this.CP = this.access.CP(), this.buffer = (0, QB.I)(this.memory()), this.u32 = new QB.j(this.buffer, this.ptr, this.CP >>> 2), this.f32 = new QB.h(this.buffer, this.ptr, this.CP >>> 2), this.u8 = new QB.d(this.buffer, this.ptr, this.CP), this.dataView = new QB.i(this.buffer, this.ptr, this.CP)
      }
      ensureViews() {
        (0, QB.I)(this.memory()) !== this.buffer && this.refresh()
      }
      get view() {
        return this.ensureViews(), this.dataView
      }
      room(BB) {
        return !!this.fits(BB) || (this.dropped++, !1)
      }
      fits(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.cursor;
        this.ensureViews();
        const GB = OB + BB;
        return GB <= this.CP || GB <= YB.Tc && 0 !== this.access.reserve(GB) && (this.refresh(), GB <= this.CP)
      }
      consume(BB) {
        const OB = this.cursor - BB;
        OB > 0 && BB > 0 && (this.ensureViews(), this.u8.copyWithin(0, BB, this.cursor)), this.cursor = OB > 0 ? OB : 0
      }
      writeRecord(BB, OB, GB, DB, QB) {
        if (!this.room(YB.tb)) return !1;
        const oB = this.cursor >>> 2;
        return this.u32[oB] = 65535 & BB | (65535 & OB) << 16, this.f32[oB + 1] = GB, this.f32[oB + 2] = DB, this.u32[oB + 3] = QB >>> 0, this.cursor += YB.tb, !0
      }
      writeOptions(BB, OB) {
        const GB = OB.byteLength,
          DB = YB.tb + (0, YB.qe)(GB);
        if (!this.fits(DB)) return !1;
        const QB = this.cursor,
          oB = QB >>> 2;
        this.u32[oB] = YB.ub.Options, this.u32[oB + 1] = GB, this.u32[oB + 2] = 0, this.u32[oB + 3] = BB >>> 0;
        const jB = QB + YB.tb;
        return this.u8.set(OB, jB), this.u8.fill(0, jB + GB, QB + DB), this.cursor += DB, !0
      }
      writeWorkerRecord(BB, OB, GB, DB, QB, oB) {
        const jB = oB.byteLength,
          yB = YB.Ld + (0, YB.qe)(jB);
        if (jB > YB.Kd) return this.dropped++, !1;
        if (!this.room(yB)) return !1;
        const JB = this.cursor,
          MB = JB >>> 2;
        this.u32[MB] = BB >>> 0, this.u32[MB + 1] = 65535 & OB | (65535 & GB) << 16, this.u32[MB + 2] = DB >>> 0, this.u32[MB + 3] = QB >>> 0, this.u32[MB + 4] = jB;
        const PB = JB + YB.Ld;
        return this.u8.set(oB, PB), this.u8.fill(0, PB + jB, JB + yB), this.cursor += yB, !0
      }
      written() {
        return this.ensureViews(), this.u8.subarray(0, this.cursor)
      }
      writeFrame(BB, OB) {
        return this.writeNet(YB.gc.Frame, BB, OB)
      }
      writeOpen(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(YB.gc.Open, BB, yB(OB))
      }
      writeClose(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(YB.gc.Close, BB, yB(OB))
      }
      writeNet(BB, OB, GB) {
        const DB = GB.byteLength,
          QB = YB.cc + (0, YB.qe)(DB);
        if (DB > YB._b) return this.dropped++, !1;
        if (!this.room(QB)) return !1;
        const oB = this.cursor;
        this.u32[oB >>> 2] = DB, this.u32[1 + (oB >>> 2)] = (0, YB.le)(BB, OB);
        const jB = oB + YB.cc;
        return this.u8.set(GB, jB), this.u8.fill(0, jB + DB, oB + QB), this.cursor += QB, !0
      }
      ZP(BB, OB, GB) {
        const DB = YB.r + (0, YB.qe)(GB);
        if (!this.room(DB)) return -1;
        const QB = this.cursor;
        this.u32[QB >>> 2] = 65535 & BB | (65535 & OB) << 16, this.u32[1 + (QB >>> 2)] = GB;
        const oB = QB + YB.r;
        return this.u8.fill(0, oB, QB + DB), this.cursor += DB, oB
      }
      growForCmd(BB) {
        return this.fits(YB.r + (0, YB.qe)(BB), 0)
      }
      writeCmd(BB, OB, GB) {
        const YB = this.ZP(BB, OB, GB.byteLength);
        return !(YB < 0) && (this.u8.set(GB, YB), !0)
      }
      copyWritten(BB, OB) {
        return this.ensureViews(), this.u8.slice(BB, BB + OB)
      }
    }
    const jB = new QB.d(0);

    function yB(BB) {
      if (0 === BB) return jB;
      const OB = new QB.d(YB.$b);
      for (let GB = 0; GB < YB.$b; GB++) OB[GB] = BB >>> 8 * GB & 255;
      return OB
    }
    class JB {
      constructor(BB, OB) {
        this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new oB(OB, {
          ptr: () => BB.yz(),
          CP: () => BB.GjB(),
          reserve: OB => BB.ljB(OB)
        }), this.net = new oB(OB, {
          ptr: () => BB.MjB(),
          CP: () => BB.JjB(),
          reserve: OB => BB.pjB(OB)
        }), this.worker = new oB(OB, {
          ptr: () => BB.gjB(),
          CP: () => BB.LjB(),
          reserve: OB => BB.qjB(OB)
        }), this.cmd = new oB(OB, {
          ptr: () => BB.ToB(),
          CP: () => BB.aoB(),
          reserve: OB => BB.eoB(OB)
        })
      }
      reset(BB, OB, GB) {
        this.input.consume(BB), this.worker.consume(OB), this.cmd.consume(GB)
      }
    }
    var MB = GB(36876),
      PB = GB(2619),
      zB = GB(5276),
      lB = GB(41814);
    const pB = "coreFrame",
      qB = "fatalStatus",
      ZB = "otherCall",
      NB = "coreRings",
      RB = "netIn",
      WB = "abi",
      AB = "netOut",
      VB = "workerOut",
      SB = "worldgenHost",
      nB = "eventWalker",
      UB = "netEvent",
      fB = "envEvent",
      kB = "sharedTables",
      dB = "inputAction",
      KB = "frameSends",
      uB = new Set([nB, UB, fB, KB, dB, kB]),
      mB = "wasmMemory",
      IB = "meshHost";

    function FB(BB, OB) {
      BB.forEachWorkerOut(((GB, DB, QB) => {
        if ((0, YB.de)(GB)) try {
          var oB;
          null === (oB = OB.worldgen) || void 0 === oB || oB.take(GB, QB)
        } catch (yB) {
          BB.crash(SB, yB)
        } else try {
          var jB;
          null === (jB = OB.mesh) || void 0 === jB || jB.take(GB, DB, QB)
        } catch (yB) {
          BB.crash(IB, yB)
        }
      }))
    }
    const iB = 1048576;

    function LB(BB, OB) {
      let GB = !1;
      const YB = () => {
        GB = !1, OB()
      };
      return () => {
        !GB && BB.cursor >= iB && (GB = !0, queueMicrotask(YB))
      }
    }
    const gB = new Set([qB, ZB, SB, IB]);

    function rB(BB) {
      return uB.has(BB.site) ? BB.error instanceof WebAssembly.RuntimeError || (0, DB.h)(BB.error) : !gB.has(BB.site) && BB.error instanceof Error
    }
    const XB = "events",
      wB = [],
      EB = "debugLog",
      cB = "terrainTextures",
      hB = "sunShadowTextures",
      aB = new TextDecoder;

    function eB(BB, OB) {
      const {
        site: GB,
        error: DB,
        header: QB
      } = BB, oB = QB ? (0, YB.$d)(QB.lastError) : "noFrame", jB = `CORE-${GB===qB?oB:GB}`, yB = null === DB || void 0 === DB ? "" : ` ${(0,MB.l)(DB)}`, JB = {
        site: GB,
        wasmBuild: OB.wasm,
        clientVersion: OB.client
      };
      return QB && (JB.status = String(QB.status), JB.lastError = oB, JB.lastErrorCode = String(QB.lastError), JB.lastErrorDetail = String(QB.lastErrorDetail), JB.errorCount = String(QB.errorCount), JB.frameIndex = String(QB.frameIndex), JB.tickIndex = String(QB.tickIndex)), {
        code: jB,
        message: `core ${GB}, last error ${oB};${yB}`,
        details: JB
      }
    }
    class TB {
      constructor(BB, OB, GB) {
        this.core = BB, this.memory = OB, this.handlers = GB, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.loadCountsBuffer = null, this.loadCounts = new Uint32Array(0), this.unsentUiPrefs = null, this.eventWalker = null, this.netOffsets = [], this.frameEvents = {
          ptr: 0,
          len: 0,
          net: wB,
          netOffsets: this.netOffsets,
          kind: "none"
        }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.atSendsStop = !1, this.rings = new JB(BB, OB)
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
          return this.core.xoB(BB)
        } catch (OB) {
          return this.crash(pB, OB), !1
        }
      }
      get isStopped() {
        return this.stopped
      }
      frame(BB, OB) {
        var GB;
        let QB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.stopped) return !1;
        if (!this.writePendingInput()) return !1;
        const {
          input: oB,
          net: jB,
          worker: yB,
          cmd: JB
        } = this.rings, MB = jB.cursor, PB = OB && !this.drawsHeld;
        let ZB = YB.J.Fatal;
        const NB = oB.cursor,
          WB = yB.cursor,
          AB = JB.cursor;
        let VB, SB = null;
        const fB = this.handlers.onSends;
        try {
          const OB = (PB ? YB.db.Draws : 0) | (QB ? YB.db.NetAll : 0) | (fB ? YB.db.StopForSends : 0);
          ZB = (0, lB.d)((() => {
            let GB = this.core.frame(BB, NB, jB.cursor, WB, OB, AB);
            for (; GB === YB.td && fB;) {
              var DB;
              if (VB ??= null === (DB = this.gameHost) || void 0 === DB ? void 0 : DB.takeFault(), void 0 === VB && !this.takeSends(fB)) return YB.J.Fatal;
              GB = this.core.CZ()
            }
            return GB
          }))
        } catch (aB) {
          SB = {
            error: aB
          }
        }
        VB ??= null === (GB = this.gameHost) || void 0 === GB ? void 0 : GB.takeFault();
        const kB = this.stopped || null !== SB || void 0 !== VB;
        this.rings.reset(kB ? oB.cursor : NB, kB ? yB.cursor : WB, kB ? JB.cursor : AB);
        const dB = null === SB && void 0 === VB,
          KB = dB && !this.stopped && ZB === YB.J.Fatal && 0 === this.core.Fl(),
          uB = dB && !KB ? this.headerView() : null,
          mB = KB ? {
            ...null !== (IB = this.lastHeader) && void 0 !== IB ? IB : (0, YB.re)(new Uint32Array(YB.ib)),
            status: YB.J.Fatal,
            lastError: YB.I.CoreBusy,
            lastErrorDetail: 0
          } : null === uB ? null : (0, YB.re)(uB);
        var IB;
        null !== mB && (this.lastHeader = mB);
        const FB = null !== mB && ZB !== YB.J.Fatal,
          iB = FB && null !== uB ? uB[YB.mb.NetInKept] : 0,
          LB = FB && iB <= MB && iB % 4 === 0 ? iB : null;
        var gB, rB;
        null !== mB && null !== LB && ZB === YB.J.Errors && (null === (gB = (rB = this.handlers).onErrors) || void 0 === gB || gB.call(rB, mB));
        const XB = null === LB ? wB : this.readEvents(MB);
        if (jB.consume(MB - (null !== LB && void 0 !== LB ? LB : 0)), this.netKept = null !== LB && void 0 !== LB ? LB : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== SB) return this.crash(pB, void 0 === VB || VB instanceof DB.b ? SB.error : VB), !1;
        if (void 0 !== VB || null === mB) return this.crashOn(pB, VB), !1;
        if (KB) return this.crash(qB, null), !1;
        const EB = this.headerView()[YB.mb.FrameDraw];
        if (this.lastFrameKind = (0, zB.g)(PB, EB), ZB === YB.J.Fatal) return this.crash(qB, null), !1;
        if (null === LB) return this.crash(RB, `the core kept ${iB} of ${MB} net-in bytes`), !1;
        if (this.eventWalker) {
          if (this.stopped) return !1;
          const BB = this.frameEvents,
            OB = this.headerView();
          BB.ptr = OB[YB.mb.EventsPtr], BB.len = OB[YB.mb.EventsLen], BB.net = XB, BB.kind = this.lastFrameKind;
          try {
            this.eventWalker(BB)
          } catch (aB) {
            return this.crashOn(nB, aB), !1
          }
          return this.handEnvEvents()
        }
        for (const YB of XB) {
          if (this.stopped) return !1;
          try {
            var cB, hB;
            null === (cB = (hB = this.handlers).onNetEvent) || void 0 === cB || cB.call(hB, YB)
          } catch (aB) {
            return this.crashOn(UB, aB), !1
          }
        }
        return this.handEnvEvents()
      }
      handEnvEvents() {
        for (const QB of this.graceEvents) {
          if (this.stopped) return !1;
          try {
            var BB, OB;
            null === (BB = (OB = this.handlers).onReconnectGrace) || void 0 === BB || BB.call(OB, QB)
          } catch (DB) {
            return this.crashOn(UB, DB), !1
          }
        }
        for (const QB of this.envEvents) {
          if (this.stopped) return !1;
          try {
            var GB, YB;
            null === (GB = (YB = this.handlers).onEnvEvent) || void 0 === GB || GB.call(YB, QB)
          } catch (DB) {
            return this.crashOn(fB, DB), !1
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
          const OB = this.unsentUiPrefs;
          OB && BB.writeRecord(YB.ub.UiPrefs, 0, OB.nametagCutDistance, 0, (0, YB.ue)(OB)) && (this.unsentUiPrefs = null);
          const GB = this.unsentEnvPrefs;
          GB && BB.writeRecord(YB.ub.EnvPrefs, (0, YB.be)(GB), GB.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
          const DB = this.unsentLookPrefs;
          DB && BB.writeRecord(YB.ub.Sensitivity, 0, DB.mouse, DB.touch, (0, PB.h)(DB.fovPercent)) && (this.unsentLookPrefs = null);
          let QB = 0;
          for (const {
              aux: YB,
              payload: oB
            }
            of this.unsentOptions) {
            if (!BB.writeOptions(YB, oB)) {
              if (BB.cursor > 0) break;
              this.optionsDropped++
            }
            QB++
          }
          QB > 0 && this.unsentOptions.splice(0, QB)
        } catch (OB) {
          return this.crash(NB, OB), !1
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
      queueOptions(BB, OB) {
        return !this.isStopped && (OB.byteLength > YB.kc.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
          aux: BB,
          payload: OB
        }), !0))
      }
      setChunkCap(BB) {
        return this.callCore("setChunkCap", null, (OB => OB.VjB(BB)))
      }
      shedMemory(BB) {
        const OB = this.callCore("shedMemory", null, (OB => OB.KjB(BB)));
        return 0 === OB ? null : OB
      }
      addDistanceInUse() {
        const BB = this.callCore("addDistanceInUse", null, (BB => BB.XoB()));
        return 0 === BB ? null : BB
      }
      setChunkAddDistance(BB, OB) {
        return this.callCore("setChunkAddDistance", !1, (GB => GB.AjB(BB, OB)))
      }
      setGameHost(BB) {
        return this.callCore("setGameHost", !1, (OB => (OB.soB(BB), this.gameHost = BB, !0)))
      }
      setAntiCheatProbes(BB) {
        return this.callCore("setAntiCheatProbes", !1, (OB => OB.RjB(BB)))
      }
      setAmbientOcclusion(BB) {
        this.callCore("setAmbientOcclusion", void 0, (OB => {
          OB.NjB(BB)
        }))
      }
      setPoseLod(BB) {
        this.callCore("setPoseLod", void 0, (OB => {
          OB.njB(BB)
        }))
      }
      setDebugLog(BB, OB) {
        this.callCore(EB, void 0, (GB => {
          GB.hZ(BB, OB)
        }))
      }
      takeDebugLog(BB) {
        return this.callCore(EB, [], (OB => OB.aZ(BB)))
      }
      setTextureLayers(BB) {
        return this.callCore("setTextureLayers", !1, (OB => OB.djB(BB)))
      }
      setBlockColours(BB) {
        let {
          blocks: OB,
          counts: GB,
          values: YB
        } = BB;
        return this.callCore("setBlockColours", !1, (BB => BB.RDB(OB, GB, YB)))
      }
      terrainTextureNames() {
        return this.callCore(cB, [], (BB => BB.ijB()))
      }
      setTerrainTextures(BB, OB, GB, YB) {
        return this.callCore(cB, !1, (DB => DB.kjB(BB, GB, OB, YB)))
      }
      setShaderPack(BB, OB, GB, YB, DB, QB) {
        return this.callCore("setShaderPack", !1, (oB => {
          var jB, yB;
          return null !== (jB = null === (yB = oB.uDB) || void 0 === yB ? void 0 : yB.call(oB, BB, OB, GB, YB, DB, QB)) && void 0 !== jB && jB
        }))
      }
      sunShadowWantedTextures() {
        return this.callCore(hB, null, (BB => {
          var OB, GB;
          return null !== (OB = null === (GB = BB.ujB) || void 0 === GB ? void 0 : GB.call(BB)) && void 0 !== OB ? OB : null
        }))
      }
      setSunShadowTexture(BB, OB, GB, YB, DB) {
        this.callCore(hB, void 0, (QB => {
          var oB;
          null === (oB = QB.fjB) || void 0 === oB || oB.call(QB, BB, OB, GB, YB, DB)
        }))
      }
      takeSunShadowWarnings() {
        return this.callCore(hB, [], (BB => {
          var OB, GB;
          return null !== (OB = null === (GB = BB.IjB) || void 0 === GB ? void 0 : GB.call(BB)) && void 0 !== OB ? OB : []
        }))
      }
      sunShadowsHeld() {
        return this.callCore(hB, null, (BB => {
          var OB, GB;
          return null !== (OB = null === (GB = BB.mjB) || void 0 === GB ? void 0 : GB.call(BB)) && void 0 !== OB ? OB : null
        }))
      }
      callCore(BB, OB, GB) {
        if (this.stopped) return OB;
        try {
          return GB(this.core)
        } catch (YB) {
          return this.crash(BB, YB), OB
        }
      }
      readEvents(BB) {
        this.netOffsets.length = 0;
        const OB = this.headerView(),
          GB = OB[YB.mb.EventsPtr],
          DB = OB[YB.mb.EventsLen];
        if (this.envEvents.length = 0, this.graceEvents.length = 0, 0 === DB) return wB;
        const QB = [],
          oB = this.memory().buffer;
        if (GB % 4 !== 0 || GB + DB > oB.byteLength) return this.crash(XB, `events of ${DB} bytes at ${GB} outside ${oB.byteLength} bytes of memory`), wB;
        const jB = new DataView(oB, GB, DB),
          yB = this.rings.net,
          JB = (OB, GB) => OB + GB <= BB ? yB.copyWritten(OB, GB) : null;
        let MB = 0;
        for (; MB < DB;) {
          const BB = MB + YB.V,
            OB = BB <= DB ? jB.getUint32(MB, !0) : -1,
            yB = OB >>> 16;
          if (OB < 0 || yB > DB - BB) return this.crash(XB, `event record at ${MB} overruns its ${DB} bytes`), wB;
          const dB = 65535 & OB,
            KB = OB => jB.getUint32(BB + 4 * OB, !0);
          if (dB === YB.Y.RawMessage) {
            const BB = yB >= YB.Uc.BYTES ? 65535 & KB(1) : -1,
              OB = BB === YB.Uc.STRING_TYPE,
              GB = yB === (OB ? YB.Uc.STRING_TYPE_BYTES : YB.Uc.BYTES) ? JB(KB(2), KB(3)) : null,
              DB = OB && GB ? JB(KB(4), KB(5)) : null;
            if (!GB || OB && !DB) return this.crash(XB, `RawMessage at ${MB} of ${yB} bytes names bytes outside net-in`), wB;
            this.netOffsets.push(MB), QB.push({
              type: "message",
              conn: KB(0),
              ty: BB,
              payloadKind: KB(1) >>> 16,
              payload: GB,
              stringType: DB ? aB.decode(DB) : null
            })
          } else if (dB === YB.Y.CoreErrors) {
            var PB, zB;
            const BB = yB >= 4 ? KB(0) : -1;
            if (BB < 0 || BB > YB.H.PAIRS_MAX || yB !== 4 * (YB.H.FIXED_WORDS + YB.H.PAIR_WORDS * BB)) return this.crash(XB, `CoreErrors at ${MB} of ${yB} bytes`), wB;
            const OB = [];
            for (let GB = 0; GB < BB; GB++) OB.push({
              code: KB(1 + 2 * GB),
              detail: KB(2 + 2 * GB)
            });
            null === (PB = (zB = this.handlers).onCoreErrors) || void 0 === PB || PB.call(zB, OB, KB(1 + 2 * BB))
          } else if (dB === YB.Y.RenderReload) {
            var lB, pB;
            if (yB !== YB.dd.BYTES) return this.crash(XB, `RenderReload at ${MB} of ${yB} bytes`), wB;
            null === (lB = (pB = this.handlers).onRenderReload) || void 0 === lB || lB.call(pB, KB(0), KB(1), KB(2))
          } else if (dB === YB.Y.JoinPreloadEnded) {
            var qB, ZB;
            if (yB !== YB.Cb.BYTES) return this.crash(XB, `JoinPreloadEnded at ${MB} of ${yB} bytes`), wB;
            null === (qB = (ZB = this.handlers).onJoinPreloadEnded) || void 0 === qB || qB.call(ZB, {
              chunks: KB(YB.Cb.CHUNKS),
              bytes: KB(YB.Cb.BYTES_HELD),
              asked: KB(YB.Cb.ASKED),
              replaced: KB(YB.Cb.REPLACED),
              dropped: KB(YB.Cb.DROPPED)
            })
          } else if (dB === YB.Y.Images) {
            var NB, RB;
            null === (NB = (RB = this.handlers).onImages) || void 0 === NB || NB.call(RB, new Uint8Array(oB.slice(GB + BB, GB + BB + yB)))
          } else if (dB === YB.Y.ModelRequests)
            for (let GB = 0; GB < yB >>> 2; GB++) {
              var WB, AB;
              null === (WB = (AB = this.handlers).onModelRequest) || void 0 === WB || WB.call(AB, KB(GB))
            } else if (dB === YB.Y.ModelTaken) {
              var VB, SB;
              if (yB < 4) return this.crash(XB, `ModelTaken at ${MB} of ${yB} bytes`), wB;
              const BB = new Uint32Array((yB >>> 2) - 1);
              for (let OB = 0; OB < BB.length; OB++) BB[OB] = KB(1 + OB);
              null === (VB = (SB = this.handlers).onModelTaken) || void 0 === VB || VB.call(SB, KB(0), BB)
            } else if (dB === YB.Y.TerrainTexturesWanted) {
            var nB, UB;
            if (0 !== yB) return this.crash(XB, `TerrainTexturesWanted at ${MB} of ${yB} bytes`), wB;
            null === (nB = (UB = this.handlers).onTerrainTexturesWanted) || void 0 === nB || nB.call(UB)
          } else if (dB === YB.Y.KeepAliveDue) {
            var fB, kB;
            if (yB > YB.Gb) return this.crash(XB, `KeepAliveDue at ${MB} of ${yB} bytes`), wB;
            null === (fB = (kB = this.handlers).onKeepAlive) || void 0 === fB || fB.call(kB, new Uint8Array(oB, GB + BB, yB).slice())
          } else if (dB === YB.Y.ConnectionState) {
            if (yB !== YB.s) return this.crash(XB, `ConnectionState at ${MB} of ${yB} bytes`), wB;
            this.netOffsets.push(MB), QB.push({
              type: "connection",
              conn: KB(0),
              phase: KB(1),
              code: 0 | KB(2)
            })
          } else if (dB === YB.Y.EnvLighting || dB === YB.Y.SkyImages) {
            if (yB !== (dB === YB.Y.EnvLighting ? YB.U : YB.vd)) return this.crash(XB, `event ${dB} at ${MB} of ${yB} bytes`), wB;
            this.envEvents.push({
              kind: dB,
              payload: new Uint8Array(oB.slice(GB + BB, GB + BB + yB))
            })
          } else if (dB === YB.Y.ReconnectGrace) {
            if (yB !== YB.Ac) return this.crash(XB, `ReconnectGrace at ${MB} of ${yB} bytes`), wB;
            const BB = KB(2);
            this.graceEvents.push({
              conn: KB(0),
              graceMs: KB(1),
              sessionBased: 0 !== (BB & YB.Wc.SessionBased),
              replayOffer: 0 !== (BB & YB.Wc.ReplayOffer)
            })
          }
          MB = BB + (0, YB.qe)(yB)
        }
        return QB
      }
      takeSends(BB) {
        this.atSendsStop = !0;
        try {
          BB()
        } catch (OB) {
          this.crashOn(KB, OB)
        } finally {
          this.atSendsStop = !1
        }
        return !this.stopped
      }
      forEachNetOut(BB) {
        this.forEachOut(AB, "net-out", YB.mb.NetOutPtr, YB.mb.NetOutLen, YB.cc, 0, ((OB, GB, DB, QB) => {
          const oB = (0, YB.ke)(GB);
          oB === YB.gc.Frame ? BB((0, YB.ge)(GB), DB) : this.crash(AB, `net-out record at ${QB} is kind ${oB}, not a frame`)
        }))
      }
      forEachWorkerOut(BB) {
        this.forEachOut(VB, "worker-out", YB.mb.WorkerOutPtr, YB.mb.WorkerOutLen, YB.Hd, 4, ((OB, GB, DB, QB) => {
          const oB = 255 & OB,
            jB = oB === YB.Wd.Init ? this.initOf(DB, QB) : DB;
          null !== jB && BB(oB, OB >>> 8 & 16777215, jB)
        }))
      }
      initOf(BB, OB) {
        const GB = this.memory().buffer;
        if (BB.byteLength !== YB.nb) return this.crash(VB, `worker-out Init record at ${OB} is ${BB.byteLength} bytes, not a view`), null;
        const DB = new DataView(BB.buffer, BB.byteOffset, YB.nb),
          QB = DB.getUint32(0, !0),
          oB = DB.getUint32(4, !0);
        return QB + oB > GB.byteLength ? (this.crash(VB, `worker-out Init record at ${OB} names ${oB} bytes at ${QB} outside ${GB.byteLength} bytes of memory`), null) : new Uint8Array(GB, QB, oB)
      }
      forEachOut(BB, OB, GB, DB, QB, oB, jB) {
        if (!this.headerReadable()) return;
        const yB = this.headerView(),
          JB = yB[GB],
          MB = yB[DB];
        if (0 === MB) return;
        const PB = this.memory().buffer;
        if (JB % 4 !== 0 || JB + MB > PB.byteLength) return void this.crash(BB, `${OB} of ${MB} bytes at ${JB} outside ${PB.byteLength} bytes of memory`);
        const zB = new DataView(PB, JB, MB);
        let lB = 0;
        for (; lB < MB;) {
          const GB = lB + QB,
            DB = GB <= MB ? zB.getUint32(lB + oB, !0) : -1;
          if (DB < 0 || DB > MB - GB) return void this.crash(BB, `${OB} record at ${lB} overruns its ${MB} bytes`);
          if (jB(zB.getUint32(lB, !0), zB.getUint32(lB + 4, !0), new Uint8Array(PB, JB + GB, DB), lB), this.stopped) return;
          lB = GB + (0, YB.qe)(DB)
        }
      }
      forEachEvent(BB) {
        if (this.stopped || null === this.lastHeader) return;
        const OB = this.headerView(),
          GB = OB[YB.mb.EventsPtr],
          DB = OB[YB.mb.EventsLen];
        if (0 === DB) return;
        const QB = this.memory().buffer;
        if (GB % 4 !== 0 || GB + DB > QB.byteLength) return void this.crash(XB, `events of ${DB} bytes at ${GB} outside ${QB.byteLength} bytes of memory`);
        const oB = new DataView(QB, GB, DB);
        let jB = 0;
        for (; jB < DB;) {
          const OB = jB + YB.V,
            GB = OB <= DB ? oB.getUint32(jB, !0) : -1,
            QB = GB >>> 16;
          if (GB < 0 || QB > DB - OB) return void this.crash(XB, `event record at ${jB} overruns its ${DB} bytes`);
          BB(65535 & GB, oB, OB, QB), jB = OB + (0, YB.qe)(QB)
        }
      }
      crashOn(BB, OB) {
        OB instanceof DB.b ? this.crash(XB, OB.message) : this.crash(BB, OB)
      }
      crash(BB, OB) {
        this.stopped || (this.stopped = !0, this.handlers.onCrash({
          site: BB,
          error: OB,
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
        const OB = this.loadCountWords();
        return null !== OB && (BB.chunksReceived = OB[YB.Ub.ChunksReceived], BB.chunksCancelled = this.headerView()[YB.mb.ChunksCancelled], BB.chunksStored = OB[YB.Ub.ChunksStored], BB.jobsSent = OB[YB.Ub.JobsSent], BB.jobsDone = OB[YB.Ub.JobsDone], BB.jobsInFlight = OB[YB.Ub.JobsInFlight], BB.workersLive = OB[YB.Ub.WorkersLive], BB.workersRetired = OB[YB.Ub.WorkersRetired], !0)
      }
      readViewQueuedPrograms() {
        var BB, OB;
        const GB = null !== (BB = null === (OB = this.loadCountWords()) || void 0 === OB ? void 0 : OB[YB.Ub.ViewQueuedPrograms]) && void 0 !== BB ? BB : 0;
        return 0 === GB ? null : GB - 1
      }
      readFirstViewWait(BB, OB) {
        const GB = this.loadCountWords();
        return null === GB ? null : [GB[YB.Ub.FirstViewLinkMs], GB[YB.Ub.FirstViewTerrainMs], GB[YB.Ub.FirstViewHeldMs], GB[YB.Ub.FirstViewOtherMs], GB[YB.Ub.FirstViewGaps], GB[YB.Ub.FirstViewGapMs], BB, OB]
      }
      loadCountWords() {
        if (this.stopped || null === this.lastHeader) return null;
        const BB = this.core.cZ();
        if (0 === BB) return null;
        const OB = this.memory().buffer;
        return OB !== this.loadCountsBuffer && (this.loadCountsBuffer = OB, this.loadCounts = new Uint32Array(OB, BB, YB.Kb)), this.loadCounts
      }
      headerView() {
        const BB = this.memory().buffer;
        return BB !== this.headerBuffer && (this.headerBuffer = BB, this.header = new Uint32Array(BB, this.core.Fl(), YB.ib)), this.header
      }
    }
  },
  41814: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => oB,
      d: () => QB
    });
    var YB = GB(5165);
    let DB = null;

    function QB(BB) {
      DB = {
        scanned: !1
      };
      try {
        return BB()
      } finally {
        DB = null
      }
    }

    function oB() {
      const BB = DB;
      if (null === BB) return (0, YB.d)();
      const OB = (0, YB.d)(!BB.scanned);
      return BB.scanned = !0, OB
    }
  },
  41864: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => YB
    });
    const YB = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  37009: (BB, OB, GB) => {
    function YB() {
      return GB(37013)
    }

    function DB() {
      return GB(37018)
    }

    function QB(BB) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(BB)
    }
    GB.d(OB, {
      b: () => QB,
      c: () => YB,
      e: () => DB
    })
  },
  36876: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => jB,
      d: () => JB,
      h: () => oB,
      l: () => PB
    });
    var YB = GB(36871),
      DB = GB(6);
    const QB = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function oB(BB) {
      if (BB instanceof WebAssembly.RuntimeError) return !0;
      const OB = BB instanceof Error ? BB.stack : void 0;
      return "string" === typeof OB && QB.test(OB)
    }

    function jB(BB, OB, GB) {
      var DB;
      const oB = BB instanceof Error ? BB.name : "thrown",
        jB = (BB instanceof Error && null !== (DB = BB.stack) && void 0 !== DB ? DB : "").split("\n").filter((BB => QB.test(BB))).slice(0, 8).map((BB => BB.trim())),
        yB = null === OB ? "wasm memory unknown" : `wasm memory ${Math.round(OB/2**20)} MB`,
        JB = null === GB.panic ? "" : `, panic: ${(0,YB.h)(GB.panic)}`,
        MB = `${oB}: ${BB instanceof Error?BB.message:String(BB)}`;
      return `${(0,YB.n)(GB.kind,GB.refusedBytes)} ${MB} (${yB})${JB}${jB.length>0?` | ${jB.join(" < ")}`:""}`
    }
    const yB = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function JB(BB) {
      var OB;
      let GB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(BB instanceof Error) || !yB.test(BB.message)) return {};
      if (!("detached" in GB)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, DB.T)(null === (OB = (0, DB.M)(GB, "detached")) || void 0 === OB ? void 0 : OB.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const MB = 500;

    function PB(BB) {
      let OB = "[object Object]";
      try {
        OB = String(BB)
      } catch {}
      if ("[object Object]" !== OB) return OB;
      try {
        var GB, YB;
        return null !== (GB = null === (YB = JSON.stringify(BB)) || void 0 === YB ? void 0 : YB.slice(0, MB)) && void 0 !== GB ? GB : OB
      } catch {
        return OB
      }
    }
  },
  37013: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  37018: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  },
  36871: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => YB,
      e: () => QB,
      h: () => yB,
      k: () => oB,
      n: () => DB
    });
    const YB = /^alloc_failed (\d+) bytes$/;

    function DB(BB, OB) {
      return QB(BB, OB) ? `trap=alloc_failed ${OB} bytes` : `trap=${BB}`
    }

    function QB(BB, OB) {
      return "unreachable" === BB && OB > 0
    }

    function oB(BB, OB, GB) {
      const YB = function(BB) {
        return BB instanceof WebAssembly.RuntimeError ? /unreachable/i.test(BB.message) ? "unreachable" : /out of bounds/i.test(BB.message) ? "out_of_bounds" : "runtime_error" : (BB instanceof RangeError || BB instanceof Error && "InternalError" === BB.name) && /call stack|recursion/i.test(BB.message) ? "stack_overflow" : "js_error"
      }(BB);
      if ("unreachable" !== YB) return {
        kind: YB,
        panic: null,
        refusedBytes: 0
      };
      const DB = OB(),
        QB = GB();
      return {
        kind: YB,
        panic: QB > 0 ? null : DB,
        refusedBytes: QB
      }
    }
    const jB = 300;

    function yB(BB) {
      return BB.replace(/\s*\n\s*/g, " / ").slice(0, jB)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);