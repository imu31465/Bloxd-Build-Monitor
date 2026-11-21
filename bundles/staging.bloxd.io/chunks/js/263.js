export const id = 263;
export const ids = [263];
export const modules = {
  40407: (QQ, FQ, wQ) => {
    function LQ(QQ, FQ, wQ) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(QQ, FQ).getContext("2d", wQ);
      const LQ = document.createElement("canvas");
      return LQ.width = QQ, LQ.height = FQ, LQ.getContext("2d", wQ)
    }

    function qQ(QQ, FQ) {
      return QQ.getContext("2d", FQ)
    }
    wQ.d(FQ, {
      b: () => qQ,
      d: () => LQ
    })
  },
  40338: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => GQ,
      g: () => xQ,
      j: () => JQ,
      m: () => OQ,
      n: () => rQ,
      r: () => IQ,
      s: () => MQ,
      v: () => tQ,
      x: () => eQ,
      y: () => RQ,
      B: () => XQ,
      C: () => CQ,
      G: () => zQ,
      K: () => hQ,
      N: () => UQ,
      O: () => TQ
    });
    var LQ = wQ(4632),
      qQ = wQ(40065),
      oQ = (wQ(40229), wQ(5));
    class DQ {
      constructor(QQ, FQ) {
        this.memory = QQ, this.access = FQ, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.MH = 0, this.u32 = new oQ.i(0), this.f32 = new oQ.f(0), this.u8 = new oQ.d(0), this.dataView = new oQ.g(new ArrayBuffer(0)), this.refresh()
      }
      refresh() {
        this.ptr = this.access.ptr(), this.MH = this.access.MH(), this.buffer = (0, oQ.G)(this.memory()), this.u32 = new oQ.i(this.buffer, this.ptr, this.MH >>> 2), this.f32 = new oQ.f(this.buffer, this.ptr, this.MH >>> 2), this.u8 = new oQ.d(this.buffer, this.ptr, this.MH), this.dataView = new oQ.g(this.buffer, this.ptr, this.MH)
      }
      ensureViews() {
        (0, oQ.G)(this.memory()) !== this.buffer && this.refresh()
      }
      get view() {
        return this.ensureViews(), this.dataView
      }
      room(QQ) {
        return !!this.fits(QQ) || (this.dropped++, !1)
      }
      fits(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.cursor;
        this.ensureViews();
        const wQ = FQ + QQ;
        return wQ <= this.MH || wQ <= LQ.tc && 0 !== this.access.reserve(wQ) && (this.refresh(), wQ <= this.MH)
      }
      consume(QQ) {
        const FQ = this.cursor - QQ;
        FQ > 0 && QQ > 0 && (this.ensureViews(), this.u8.copyWithin(0, QQ, this.cursor)), this.cursor = FQ > 0 ? FQ : 0
      }
      writeRecord(QQ, FQ, wQ, qQ, oQ) {
        if (!this.room(LQ.bb)) return !1;
        const DQ = this.cursor >>> 2;
        return this.u32[DQ] = 65535 & QQ | (65535 & FQ) << 16, this.f32[DQ + 1] = wQ, this.f32[DQ + 2] = qQ, this.u32[DQ + 3] = oQ >>> 0, this.cursor += LQ.bb, !0
      }
      writeOptions(QQ, FQ) {
        const wQ = FQ.byteLength,
          qQ = LQ.bb + (0, LQ.Yd)(wQ);
        if (!this.fits(qQ)) return !1;
        const oQ = this.cursor,
          DQ = oQ >>> 2;
        this.u32[DQ] = LQ.fb.Options, this.u32[DQ + 1] = wQ, this.u32[DQ + 2] = 0, this.u32[DQ + 3] = QQ >>> 0;
        const kQ = oQ + LQ.bb;
        return this.u8.set(FQ, kQ), this.u8.fill(0, kQ + wQ, oQ + qQ), this.cursor += qQ, !0
      }
      writeWorkerRecord(QQ, FQ, wQ, qQ, oQ, DQ) {
        const kQ = DQ.byteLength,
          vQ = LQ.jd + (0, LQ.Yd)(kQ);
        if (kQ > LQ.id) return this.dropped++, !1;
        if (!this.room(vQ)) return !1;
        const mQ = this.cursor,
          uQ = mQ >>> 2;
        this.u32[uQ] = QQ >>> 0, this.u32[uQ + 1] = 65535 & FQ | (65535 & wQ) << 16, this.u32[uQ + 2] = qQ >>> 0, this.u32[uQ + 3] = oQ >>> 0, this.u32[uQ + 4] = kQ;
        const HQ = mQ + LQ.jd;
        return this.u8.set(DQ, HQ), this.u8.fill(0, HQ + kQ, mQ + vQ), this.cursor += vQ, !0
      }
      written() {
        return this.ensureViews(), this.u8.subarray(0, this.cursor)
      }
      writeFrame(QQ, FQ) {
        return this.writeNet(LQ.Hb.Frame, QQ, FQ)
      }
      writeOpen(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(LQ.Hb.Open, QQ, vQ(FQ))
      }
      writeClose(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(LQ.Hb.Close, QQ, vQ(FQ))
      }
      writeNet(QQ, FQ, wQ) {
        const qQ = wQ.byteLength,
          oQ = LQ.Db + (0, LQ.Yd)(qQ);
        if (qQ > LQ.wb) return this.dropped++, !1;
        if (!this.room(oQ)) return !1;
        const DQ = this.cursor;
        this.u32[DQ >>> 2] = qQ, this.u32[1 + (DQ >>> 2)] = (0, LQ.Qd)(QQ, FQ);
        const kQ = DQ + LQ.Db;
        return this.u8.set(wQ, kQ), this.u8.fill(0, kQ + qQ, DQ + oQ), this.cursor += oQ, !0
      }
      mY(QQ, FQ, wQ) {
        const qQ = LQ.m + (0, LQ.Yd)(wQ);
        if (!this.room(qQ)) return -1;
        const oQ = this.cursor;
        this.u32[oQ >>> 2] = 65535 & QQ | (65535 & FQ) << 16, this.u32[1 + (oQ >>> 2)] = wQ;
        const DQ = oQ + LQ.m;
        return this.u8.fill(0, DQ, oQ + qQ), this.cursor += qQ, DQ
      }
      growForCmd(QQ) {
        return this.fits(LQ.m + (0, LQ.Yd)(QQ), 0)
      }
      writeCmd(QQ, FQ, wQ) {
        const LQ = this.mY(QQ, FQ, wQ.byteLength);
        return !(LQ < 0) && (this.u8.set(wQ, LQ), !0)
      }
      copyWritten(QQ, FQ) {
        return this.ensureViews(), this.u8.slice(QQ, QQ + FQ)
      }
    }
    const kQ = new oQ.d(0);

    function vQ(QQ) {
      if (0 === QQ) return kQ;
      const FQ = new oQ.d(LQ.Ab);
      for (let wQ = 0; wQ < LQ.Ab; wQ++) FQ[wQ] = QQ >>> 8 * wQ & 255;
      return FQ
    }
    class mQ {
      constructor(QQ, FQ) {
        this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new DQ(FQ, {
          ptr: () => QQ.UH(),
          MH: () => QQ.QDQ(),
          reserve: FQ => QQ.bDQ(FQ)
        }), this.net = new DQ(FQ, {
          ptr: () => QQ.mDQ(),
          MH: () => QQ.vDQ(),
          reserve: FQ => QQ.YDQ(FQ)
        }), this.worker = new DQ(FQ, {
          ptr: () => QQ.zDQ(),
          MH: () => QQ.KDQ(),
          reserve: FQ => QQ.xDQ(FQ)
        }), this.cmd = new DQ(FQ, {
          ptr: () => QQ.hoQ(),
          MH: () => QQ.foQ(),
          reserve: FQ => QQ.VoQ(FQ)
        })
      }
      reset(QQ) {
        this.input.cursor = 0, this.worker.cursor = 0, this.cmd.consume(QQ)
      }
    }
    var uQ = wQ(35943),
      HQ = wQ(2320),
      bQ = wQ(4626),
      YQ = wQ(40344);
    const xQ = "coreFrame",
      AQ = "fatalStatus",
      tQ = "otherCall",
      eQ = "coreRings",
      MQ = "netIn",
      GQ = "abi",
      pQ = "netOut",
      cQ = "workerOut",
      CQ = "worldgenHost",
      SQ = "eventWalker",
      iQ = "netEvent",
      WQ = "envEvent",
      RQ = "sharedTables",
      OQ = "inputAction",
      sQ = new Set([SQ, iQ, WQ, OQ, RQ]),
      rQ = "wasmMemory",
      IQ = "meshHost";

    function UQ(QQ, FQ) {
      QQ.forEachWorkerOut(((wQ, qQ, oQ) => {
        if ((0, LQ.Kd)(wQ)) try {
          var DQ;
          null === (DQ = FQ.worldgen) || void 0 === DQ || DQ.take(wQ, oQ)
        } catch (vQ) {
          QQ.crash(CQ, vQ)
        } else try {
          var kQ;
          null === (kQ = FQ.mesh) || void 0 === kQ || kQ.take(wQ, qQ, oQ)
        } catch (vQ) {
          QQ.crash(IQ, vQ)
        }
      }))
    }
    const NQ = 1048576;

    function TQ(QQ, FQ) {
      let wQ = !1;
      const LQ = () => {
        wQ = !1, FQ()
      };
      return () => {
        !wQ && QQ.cursor >= NQ && (wQ = !0, queueMicrotask(LQ))
      }
    }
    const KQ = new Set([AQ, tQ, CQ, IQ]);

    function zQ(QQ) {
      return sQ.has(QQ.site) ? QQ.error instanceof WebAssembly.RuntimeError || (0, qQ.k)(QQ.error) : !KQ.has(QQ.site) && QQ.error instanceof Error
    }
    const lQ = "events",
      jQ = [],
      aQ = "debugLog",
      XQ = "terrainTextures",
      fQ = "sunShadowTextures",
      VQ = new TextDecoder;

    function hQ(QQ, FQ) {
      const {
        site: wQ,
        error: qQ,
        header: oQ
      } = QQ, DQ = oQ ? (0, LQ.Dd)(oQ.lastError) : "noFrame", kQ = `CORE-${wQ===AQ?DQ:wQ}`, vQ = null === qQ || void 0 === qQ ? "" : ` ${(0,uQ.k)(qQ)}`, mQ = {
        site: wQ,
        wasmBuild: FQ.wasm,
        clientVersion: FQ.client
      };
      return oQ && (mQ.status = String(oQ.status), mQ.lastError = DQ, mQ.lastErrorCode = String(oQ.lastError), mQ.lastErrorDetail = String(oQ.lastErrorDetail), mQ.errorCount = String(oQ.errorCount), mQ.frameIndex = String(oQ.frameIndex), mQ.tickIndex = String(oQ.tickIndex)), {
        code: kQ,
        message: `core ${wQ}, last error ${DQ};${vQ}`,
        details: mQ
      }
    }
    class JQ {
      constructor(QQ, FQ, wQ) {
        this.core = QQ, this.memory = FQ, this.handlers = wQ, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.loadCountsBuffer = null, this.loadCounts = new Uint32Array(0), this.unsentUiPrefs = null, this.eventWalker = null, this.netOffsets = [], this.frameEvents = {
          ptr: 0,
          len: 0,
          net: jQ,
          netOffsets: this.netOffsets,
          kind: "none"
        }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.rings = new mQ(QQ, FQ)
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
      framePaces(QQ) {
        if (this.stopped || this.drawsHeld) return !1;
        try {
          return this.core.yoQ(QQ)
        } catch (FQ) {
          return this.crash(xQ, FQ), !1
        }
      }
      get isStopped() {
        return this.stopped
      }
      frame(QQ, FQ) {
        var wQ;
        let oQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.stopped) return !1;
        if (!this.writePendingInput()) return !1;
        const {
          input: DQ,
          net: kQ,
          worker: vQ,
          cmd: mQ
        } = this.rings, uQ = kQ.cursor, HQ = FQ && !this.drawsHeld;
        let tQ = LQ.G.Fatal;
        const eQ = mQ.cursor;
        let GQ = null;
        try {
          const FQ = (HQ ? LQ.S.Draws : 0) | (oQ ? LQ.S.NetAll : 0);
          tQ = (0, YQ.c)((() => this.core.frame(QQ, DQ.cursor, kQ.cursor, vQ.cursor, FQ, eQ)))
        } catch (KQ) {
          GQ = {
            error: KQ
          }
        }
        const pQ = null === (wQ = this.gameHost) || void 0 === wQ ? void 0 : wQ.takeFault();
        this.rings.reset(this.stopped || null !== GQ || void 0 !== pQ ? mQ.cursor : eQ);
        const cQ = null === GQ && void 0 === pQ ? this.headerView() : null,
          CQ = null === cQ ? null : (0, LQ.Zd)(cQ);
        null !== CQ && (this.lastHeader = CQ);
        const WQ = null !== CQ && tQ !== LQ.G.Fatal,
          RQ = WQ && null !== cQ ? cQ[LQ.Y.NetInKept] : 0,
          OQ = WQ && RQ <= uQ && RQ % 4 === 0 ? RQ : null;
        var sQ, rQ;
        null !== CQ && null !== OQ && tQ === LQ.G.Errors && (null === (sQ = (rQ = this.handlers).onErrors) || void 0 === sQ || sQ.call(rQ, CQ));
        const IQ = null === OQ ? jQ : this.readEvents(uQ);
        if (kQ.consume(uQ - (null !== OQ && void 0 !== OQ ? OQ : 0)), this.netKept = null !== OQ && void 0 !== OQ ? OQ : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== GQ) return this.crash(xQ, void 0 === pQ || pQ instanceof qQ.b ? GQ.error : pQ), !1;
        if (void 0 !== pQ || null === CQ) return this.crashOn(xQ, pQ), !1;
        const UQ = this.headerView()[LQ.Y.FrameDraw];
        if (this.lastFrameKind = (0, bQ.e)(HQ, UQ), tQ === LQ.G.Fatal) return this.crash(AQ, null), !1;
        if (null === OQ) return this.crash(MQ, `the core kept ${RQ} of ${uQ} net-in bytes`), !1;
        if (this.eventWalker) {
          if (this.stopped) return !1;
          const QQ = this.frameEvents,
            FQ = this.headerView();
          QQ.ptr = FQ[LQ.Y.EventsPtr], QQ.len = FQ[LQ.Y.EventsLen], QQ.net = IQ, QQ.kind = this.lastFrameKind;
          try {
            this.eventWalker(QQ)
          } catch (KQ) {
            return this.crashOn(SQ, KQ), !1
          }
          return this.handEnvEvents()
        }
        for (const LQ of IQ) {
          if (this.stopped) return !1;
          try {
            var NQ, TQ;
            null === (NQ = (TQ = this.handlers).onNetEvent) || void 0 === NQ || NQ.call(TQ, LQ)
          } catch (KQ) {
            return this.crashOn(iQ, KQ), !1
          }
        }
        return this.handEnvEvents()
      }
      handEnvEvents() {
        for (const oQ of this.graceEvents) {
          if (this.stopped) return !1;
          try {
            var QQ, FQ;
            null === (QQ = (FQ = this.handlers).onReconnectGrace) || void 0 === QQ || QQ.call(FQ, oQ)
          } catch (qQ) {
            return this.crashOn(iQ, qQ), !1
          }
        }
        for (const oQ of this.envEvents) {
          if (this.stopped) return !1;
          try {
            var wQ, LQ;
            null === (wQ = (LQ = this.handlers).onEnvEvent) || void 0 === wQ || wQ.call(LQ, oQ)
          } catch (qQ) {
            return this.crashOn(WQ, qQ), !1
          }
        }
        return !this.stopped
      }
      setEventWalker(QQ) {
        this.eventWalker = QQ
      }
      writePendingInput() {
        if (this.stopped) return !1;
        const {
          input: QQ
        } = this.rings;
        try {
          const FQ = this.unsentUiPrefs;
          FQ && QQ.writeRecord(LQ.fb.UiPrefs, 0, FQ.nametagCutDistance, 0, (0, LQ.ae)(FQ)) && (this.unsentUiPrefs = null);
          const wQ = this.unsentEnvPrefs;
          wQ && QQ.writeRecord(LQ.fb.EnvPrefs, (0, LQ.Hd)(wQ), wQ.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
          const qQ = this.unsentLookPrefs;
          qQ && QQ.writeRecord(LQ.fb.Sensitivity, 0, qQ.mouse, qQ.touch, (0, HQ.i)(qQ.fovPercent)) && (this.unsentLookPrefs = null);
          let oQ = 0;
          for (const {
              aux: LQ,
              payload: DQ
            }
            of this.unsentOptions) {
            if (!QQ.writeOptions(LQ, DQ)) {
              if (QQ.cursor > 0) break;
              this.optionsDropped++
            }
            oQ++
          }
          oQ > 0 && this.unsentOptions.splice(0, oQ)
        } catch (FQ) {
          return this.crash(eQ, FQ), !1
        }
        return !0
      }
      setHoldDraws(QQ) {
        this.drawsHeld = QQ
      }
      setUiPrefs(QQ) {
        this.unsentUiPrefs = {
          ...QQ
        }
      }
      setEnvPrefs(QQ) {
        this.unsentEnvPrefs = {
          ...QQ
        }
      }
      setLookPrefs(QQ) {
        this.unsentLookPrefs = {
          ...QQ
        }
      }
      queueOptions(QQ, FQ) {
        return !this.isStopped && (FQ.byteLength > LQ.Ob.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
          aux: QQ,
          payload: FQ
        }), !0))
      }
      setChunkCap(QQ) {
        return this.callCore("setChunkCap", null, (FQ => FQ.pDQ(QQ)))
      }
      shedMemory(QQ) {
        const FQ = this.callCore("shedMemory", null, (FQ => FQ.ODQ(QQ)));
        return 0 === FQ ? null : FQ
      }
      addDistanceInUse() {
        const QQ = this.callCore("addDistanceInUse", null, (QQ => QQ.zoQ()));
        return 0 === QQ ? null : QQ
      }
      setChunkAddDistance(QQ, FQ) {
        return this.callCore("setChunkAddDistance", !1, (wQ => wQ.GDQ(QQ, FQ)))
      }
      setGameHost(QQ) {
        return this.callCore("setGameHost", !1, (FQ => (FQ.ZoQ(QQ), this.gameHost = QQ, !0)))
      }
      setAntiCheatProbes(QQ) {
        return this.callCore("setAntiCheatProbes", !1, (FQ => FQ.eDQ(QQ)))
      }
      setAmbientOcclusion(QQ) {
        this.callCore("setAmbientOcclusion", void 0, (FQ => {
          FQ.tDQ(QQ)
        }))
      }
      setPoseLod(QQ) {
        this.callCore("setPoseLod", void 0, (FQ => {
          FQ.CDQ(QQ)
        }))
      }
      setDebugLog(QQ, FQ) {
        this.callCore(aQ, void 0, (wQ => {
          wQ.rt(QQ, FQ)
        }))
      }
      takeDebugLog(QQ) {
        return this.callCore(aQ, [], (FQ => FQ.Ut(QQ)))
      }
      setTextureLayers(QQ) {
        return this.callCore("setTextureLayers", !1, (FQ => FQ.RDQ(QQ)))
      }
      setBlockColours(QQ) {
        let {
          blocks: FQ,
          counts: wQ,
          values: LQ
        } = QQ;
        return this.callCore("setBlockColours", !1, (QQ => QQ.tLQ(FQ, wQ, LQ)))
      }
      terrainTextureNames() {
        return this.callCore(XQ, [], (QQ => QQ.TDQ()))
      }
      setTerrainTextures(QQ, FQ, wQ, LQ) {
        return this.callCore(XQ, !1, (qQ => qQ.WDQ(QQ, wQ, FQ, LQ)))
      }
      setShaderPack(QQ, FQ, wQ, LQ, qQ, oQ) {
        return this.callCore("setShaderPack", !1, (DQ => {
          var kQ, vQ;
          return null !== (kQ = null === (vQ = DQ.rLQ) || void 0 === vQ ? void 0 : vQ.call(DQ, QQ, FQ, wQ, LQ, qQ, oQ)) && void 0 !== kQ && kQ
        }))
      }
      sunShadowWantedTextures() {
        return this.callCore(fQ, null, (QQ => {
          var FQ, wQ;
          return null !== (FQ = null === (wQ = QQ.sDQ) || void 0 === wQ ? void 0 : wQ.call(QQ)) && void 0 !== FQ ? FQ : null
        }))
      }
      setSunShadowTexture(QQ, FQ, wQ, LQ, qQ) {
        this.callCore(fQ, void 0, (oQ => {
          var DQ;
          null === (DQ = oQ.iDQ) || void 0 === DQ || DQ.call(oQ, QQ, FQ, wQ, LQ, qQ)
        }))
      }
      takeSunShadowWarnings() {
        return this.callCore(fQ, [], (QQ => {
          var FQ, wQ;
          return null !== (FQ = null === (wQ = QQ.IDQ) || void 0 === wQ ? void 0 : wQ.call(QQ)) && void 0 !== FQ ? FQ : []
        }))
      }
      sunShadowsHeld() {
        return this.callCore(fQ, null, (QQ => {
          var FQ, wQ;
          return null !== (FQ = null === (wQ = QQ.rDQ) || void 0 === wQ ? void 0 : wQ.call(QQ)) && void 0 !== FQ ? FQ : null
        }))
      }
      callCore(QQ, FQ, wQ) {
        if (this.stopped) return FQ;
        try {
          return wQ(this.core)
        } catch (LQ) {
          return this.crash(QQ, LQ), FQ
        }
      }
      readEvents(QQ) {
        this.netOffsets.length = 0;
        const FQ = this.headerView(),
          wQ = FQ[LQ.Y.EventsPtr],
          qQ = FQ[LQ.Y.EventsLen];
        if (this.envEvents.length = 0, this.graceEvents.length = 0, 0 === qQ) return jQ;
        const oQ = [],
          DQ = this.memory().buffer;
        if (wQ % 4 !== 0 || wQ + qQ > DQ.byteLength) return this.crash(lQ, `events of ${qQ} bytes at ${wQ} outside ${DQ.byteLength} bytes of memory`), jQ;
        const kQ = new DataView(DQ, wQ, qQ),
          vQ = this.rings.net,
          mQ = (FQ, wQ) => FQ + wQ <= QQ ? vQ.copyWritten(FQ, wQ) : null;
        let uQ = 0;
        for (; uQ < qQ;) {
          const QQ = uQ + LQ.L,
            FQ = QQ <= qQ ? kQ.getUint32(uQ, !0) : -1,
            vQ = FQ >>> 16;
          if (FQ < 0 || vQ > qQ - QQ) return this.crash(lQ, `event record at ${uQ} overruns its ${qQ} bytes`), jQ;
          const WQ = 65535 & FQ,
            RQ = FQ => kQ.getUint32(QQ + 4 * FQ, !0);
          if (WQ === LQ.O.RawMessage) {
            const QQ = vQ >= LQ.vc.BYTES ? 65535 & RQ(1) : -1,
              FQ = QQ === LQ.vc.STRING_TYPE,
              wQ = vQ === (FQ ? LQ.vc.STRING_TYPE_BYTES : LQ.vc.BYTES) ? mQ(RQ(2), RQ(3)) : null,
              qQ = FQ && wQ ? mQ(RQ(4), RQ(5)) : null;
            if (!wQ || FQ && !qQ) return this.crash(lQ, `RawMessage at ${uQ} of ${vQ} bytes names bytes outside net-in`), jQ;
            this.netOffsets.push(uQ), oQ.push({
              type: "message",
              conn: RQ(0),
              Om: QQ,
              payloadKind: RQ(1) >>> 16,
              payload: wQ,
              stringType: qQ ? VQ.decode(qQ) : null
            })
          } else if (WQ === LQ.O.CoreErrors) {
            var HQ, bQ;
            const QQ = vQ >= 4 ? RQ(0) : -1;
            if (QQ < 0 || QQ > LQ.B.PAIRS_MAX || vQ !== 4 * (LQ.B.FIXED_WORDS + LQ.B.PAIR_WORDS * QQ)) return this.crash(lQ, `CoreErrors at ${uQ} of ${vQ} bytes`), jQ;
            const FQ = [];
            for (let wQ = 0; wQ < QQ; wQ++) FQ.push({
              code: RQ(1 + 2 * wQ),
              detail: RQ(2 + 2 * wQ)
            });
            null === (HQ = (bQ = this.handlers).onCoreErrors) || void 0 === HQ || HQ.call(bQ, FQ, RQ(1 + 2 * QQ))
          } else if (WQ === LQ.O.RenderReload) {
            var YQ, xQ;
            if (vQ !== LQ.Ic.BYTES) return this.crash(lQ, `RenderReload at ${uQ} of ${vQ} bytes`), jQ;
            null === (YQ = (xQ = this.handlers).onRenderReload) || void 0 === YQ || YQ.call(xQ, RQ(0), RQ(1), RQ(2))
          } else if (WQ === LQ.O.Images) {
            var AQ, tQ;
            null === (AQ = (tQ = this.handlers).onImages) || void 0 === AQ || AQ.call(tQ, new Uint8Array(DQ.slice(wQ + QQ, wQ + QQ + vQ)))
          } else if (WQ === LQ.O.ModelRequests)
            for (let wQ = 0; wQ < vQ >>> 2; wQ++) {
              var eQ, MQ;
              null === (eQ = (MQ = this.handlers).onModelRequest) || void 0 === eQ || eQ.call(MQ, RQ(wQ))
            } else if (WQ === LQ.O.ModelTaken) {
              var GQ, pQ;
              if (vQ < 4) return this.crash(lQ, `ModelTaken at ${uQ} of ${vQ} bytes`), jQ;
              const QQ = new Uint32Array((vQ >>> 2) - 1);
              for (let FQ = 0; FQ < QQ.length; FQ++) QQ[FQ] = RQ(1 + FQ);
              null === (GQ = (pQ = this.handlers).onModelTaken) || void 0 === GQ || GQ.call(pQ, RQ(0), QQ)
            } else if (WQ === LQ.O.TerrainTexturesWanted) {
            var cQ, CQ;
            if (0 !== vQ) return this.crash(lQ, `TerrainTexturesWanted at ${uQ} of ${vQ} bytes`), jQ;
            null === (cQ = (CQ = this.handlers).onTerrainTexturesWanted) || void 0 === cQ || cQ.call(CQ)
          } else if (WQ === LQ.O.KeepAliveDue) {
            var SQ, iQ;
            if (vQ > LQ.ib) return this.crash(lQ, `KeepAliveDue at ${uQ} of ${vQ} bytes`), jQ;
            null === (SQ = (iQ = this.handlers).onKeepAlive) || void 0 === SQ || SQ.call(iQ, new Uint8Array(DQ, wQ + QQ, vQ).slice())
          } else if (WQ === LQ.O.ConnectionState) {
            if (vQ !== LQ.n) return this.crash(lQ, `ConnectionState at ${uQ} of ${vQ} bytes`), jQ;
            this.netOffsets.push(uQ), oQ.push({
              type: "connection",
              conn: RQ(0),
              phase: RQ(1),
              code: 0 | RQ(2)
            })
          } else if (WQ === LQ.O.EnvLighting || WQ === LQ.O.SkyImages) {
            if (vQ !== (WQ === LQ.O.EnvLighting ? LQ.J : LQ.$c)) return this.crash(lQ, `event ${WQ} at ${uQ} of ${vQ} bytes`), jQ;
            this.envEvents.push({
              kind: WQ,
              payload: new Uint8Array(DQ.slice(wQ + QQ, wQ + QQ + vQ))
            })
          } else if (WQ === LQ.O.ReconnectGrace) {
            if (vQ !== LQ.dc) return this.crash(lQ, `ReconnectGrace at ${uQ} of ${vQ} bytes`), jQ;
            const QQ = RQ(2);
            this.graceEvents.push({
              conn: RQ(0),
              graceMs: RQ(1),
              sessionBased: 0 !== (QQ & LQ.xc.SessionBased),
              replayOffer: 0 !== (QQ & LQ.xc.ReplayOffer)
            })
          }
          uQ = QQ + (0, LQ.Yd)(vQ)
        }
        return oQ
      }
      forEachNetOut(QQ) {
        this.forEachOut(pQ, "net-out", LQ.Y.NetOutPtr, LQ.Y.NetOutLen, LQ.Db, 0, ((FQ, wQ, qQ, oQ) => {
          const DQ = (0, LQ.Pd)(wQ);
          DQ === LQ.Hb.Frame ? QQ((0, LQ.Ld)(wQ), qQ) : this.crash(pQ, `net-out record at ${oQ} is kind ${DQ}, not a frame`)
        }))
      }
      forEachWorkerOut(QQ) {
        this.forEachOut(cQ, "worker-out", LQ.Y.WorkerOutPtr, LQ.Y.WorkerOutLen, LQ.hd, 4, ((FQ, wQ, qQ, oQ) => {
          const DQ = 255 & FQ,
            kQ = DQ === LQ.td.Init ? this.initOf(qQ, oQ) : qQ;
          null !== kQ && QQ(DQ, FQ >>> 8 & 16777215, kQ)
        }))
      }
      initOf(QQ, FQ) {
        const wQ = this.memory().buffer;
        if (QQ.byteLength !== LQ.$) return this.crash(cQ, `worker-out Init record at ${FQ} is ${QQ.byteLength} bytes, not a view`), null;
        const qQ = new DataView(QQ.buffer, QQ.byteOffset, LQ.$),
          oQ = qQ.getUint32(0, !0),
          DQ = qQ.getUint32(4, !0);
        return oQ + DQ > wQ.byteLength ? (this.crash(cQ, `worker-out Init record at ${FQ} names ${DQ} bytes at ${oQ} outside ${wQ.byteLength} bytes of memory`), null) : new Uint8Array(wQ, oQ, DQ)
      }
      forEachOut(QQ, FQ, wQ, qQ, oQ, DQ, kQ) {
        if (this.stopped || null === this.lastHeader) return;
        const vQ = this.headerView(),
          mQ = vQ[wQ],
          uQ = vQ[qQ];
        if (0 === uQ) return;
        const HQ = this.memory().buffer;
        if (mQ % 4 !== 0 || mQ + uQ > HQ.byteLength) return void this.crash(QQ, `${FQ} of ${uQ} bytes at ${mQ} outside ${HQ.byteLength} bytes of memory`);
        const bQ = new DataView(HQ, mQ, uQ);
        let YQ = 0;
        for (; YQ < uQ;) {
          const wQ = YQ + oQ,
            qQ = wQ <= uQ ? bQ.getUint32(YQ + DQ, !0) : -1;
          if (qQ < 0 || qQ > uQ - wQ) return void this.crash(QQ, `${FQ} record at ${YQ} overruns its ${uQ} bytes`);
          if (kQ(bQ.getUint32(YQ, !0), bQ.getUint32(YQ + 4, !0), new Uint8Array(HQ, mQ + wQ, qQ), YQ), this.stopped) return;
          YQ = wQ + (0, LQ.Yd)(qQ)
        }
      }
      forEachEvent(QQ) {
        if (this.stopped || null === this.lastHeader) return;
        const FQ = this.headerView(),
          wQ = FQ[LQ.Y.EventsPtr],
          qQ = FQ[LQ.Y.EventsLen];
        if (0 === qQ) return;
        const oQ = this.memory().buffer;
        if (wQ % 4 !== 0 || wQ + qQ > oQ.byteLength) return void this.crash(lQ, `events of ${qQ} bytes at ${wQ} outside ${oQ.byteLength} bytes of memory`);
        const DQ = new DataView(oQ, wQ, qQ);
        let kQ = 0;
        for (; kQ < qQ;) {
          const FQ = kQ + LQ.L,
            wQ = FQ <= qQ ? DQ.getUint32(kQ, !0) : -1,
            oQ = wQ >>> 16;
          if (wQ < 0 || oQ > qQ - FQ) return void this.crash(lQ, `event record at ${kQ} overruns its ${qQ} bytes`);
          QQ(65535 & wQ, DQ, FQ, oQ), kQ = FQ + (0, LQ.Yd)(oQ)
        }
      }
      crashOn(QQ, FQ) {
        FQ instanceof qQ.b ? this.crash(lQ, FQ.message) : this.crash(QQ, FQ)
      }
      crash(QQ, FQ) {
        this.stopped || (this.stopped = !0, this.handlers.onCrash({
          site: QQ,
          error: FQ,
          header: this.lastHeader
        }))
      }
      headerWord(QQ) {
        return this.stopped || null === this.lastHeader ? 0 : this.headerView()[QQ]
      }
      readLoadCounts(QQ) {
        if (this.stopped || null === this.lastHeader) return !1;
        const FQ = this.core.st();
        if (0 === FQ) return !1;
        const wQ = this.memory().buffer;
        wQ !== this.loadCountsBuffer && (this.loadCountsBuffer = wQ, this.loadCounts = new Uint32Array(wQ, FQ, LQ.jb));
        const qQ = this.loadCounts;
        return QQ.chunksReceived = qQ[LQ.pb.ChunksReceived], QQ.chunksCancelled = this.headerView()[LQ.Y.ChunksCancelled], QQ.chunksStored = qQ[LQ.pb.ChunksStored], QQ.jobsSent = qQ[LQ.pb.JobsSent], QQ.jobsDone = qQ[LQ.pb.JobsDone], QQ.jobsInFlight = qQ[LQ.pb.JobsInFlight], QQ.workersLive = qQ[LQ.pb.WorkersLive], QQ.workersRetired = qQ[LQ.pb.WorkersRetired], !0
      }
      headerView() {
        const QQ = this.memory().buffer;
        return QQ !== this.headerBuffer && (this.headerBuffer = QQ, this.header = new Uint32Array(QQ, this.core.uY(), LQ.U)), this.header
      }
    }
  },
  40344: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => DQ,
      c: () => oQ
    });
    var LQ = wQ(4540);
    let qQ = null;

    function oQ(QQ) {
      qQ = {
        scanned: !1
      };
      try {
        return QQ()
      } finally {
        qQ = null
      }
    }

    function DQ() {
      const QQ = qQ;
      if (null === QQ) return (0, LQ.c)();
      const FQ = (0, LQ.c)(!QQ.scanned);
      return QQ.scanned = !0, FQ
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);