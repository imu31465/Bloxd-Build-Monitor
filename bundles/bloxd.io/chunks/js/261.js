export const id = 261;
export const ids = [261];
export const modules = {
  40104: (YY, rY, DY) => {
    function FY(YY, rY, DY) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(YY, rY).getContext("2d", DY);
      const FY = document.createElement("canvas");
      return FY.width = YY, FY.height = rY, FY.getContext("2d", DY)
    }

    function AY(YY, rY) {
      return YY.getContext("2d", rY)
    }
    DY.d(rY, {
      b: () => AY,
      d: () => FY
    })
  },
  40019: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => mY,
      f: () => yY,
      g: () => pY,
      j: () => cY,
      l: () => HY,
      o: () => zY,
      s: () => EY,
      t: () => oY,
      v: () => WY,
      w: () => BY,
      z: () => wY,
      C: () => lY,
      F: () => hY,
      H: () => qY,
      K: () => ZY,
      O: () => fY
    });
    var FY = DY(4376),
      AY = DY(39744),
      IY = (DY(39906), DY(10));
    class RY {
      constructor(YY, rY) {
        this.memory = YY, this.access = rY, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.gu = 0, this.u32 = new IY.l(0), this.f32 = new IY.f(0), this.u8 = new IY.d(0), this.dataView = new IY.i(new ArrayBuffer(0)), this.refresh()
      }
      refresh() {
        this.ptr = this.access.ptr(), this.gu = this.access.gu(), this.buffer = (0, IY.H)(this.memory()), this.u32 = new IY.l(this.buffer, this.ptr, this.gu >>> 2), this.f32 = new IY.f(this.buffer, this.ptr, this.gu >>> 2), this.u8 = new IY.d(this.buffer, this.ptr, this.gu), this.dataView = new IY.i(this.buffer, this.ptr, this.gu)
      }
      ensureViews() {
        (0, IY.H)(this.memory()) !== this.buffer && this.refresh()
      }
      get view() {
        return this.ensureViews(), this.dataView
      }
      room(YY) {
        return !!this.fits(YY) || (this.dropped++, !1)
      }
      fits(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.cursor;
        this.ensureViews();
        const DY = rY + YY;
        return DY <= this.gu || DY <= FY.Bc && 0 !== this.access.reserve(DY) && (this.refresh(), DY <= this.gu)
      }
      consume(YY) {
        const rY = this.cursor - YY;
        rY > 0 && YY > 0 && (this.ensureViews(), this.u8.copyWithin(0, YY, this.cursor)), this.cursor = rY > 0 ? rY : 0
      }
      writeRecord(YY, rY, DY, AY, IY) {
        if (!this.room(FY.qb)) return !1;
        const RY = this.cursor >>> 2;
        return this.u32[RY] = 65535 & YY | (65535 & rY) << 16, this.f32[RY + 1] = DY, this.f32[RY + 2] = AY, this.u32[RY + 3] = IY >>> 0, this.cursor += FY.qb, !0
      }
      writeOptions(YY, rY) {
        const DY = rY.byteLength,
          AY = FY.qb + (0, FY.ee)(DY);
        if (!this.fits(AY)) return !1;
        const IY = this.cursor,
          RY = IY >>> 2;
        this.u32[RY] = FY.ub.Options, this.u32[RY + 1] = DY, this.u32[RY + 2] = 0, this.u32[RY + 3] = YY >>> 0;
        const OY = IY + FY.qb;
        return this.u8.set(rY, OY), this.u8.fill(0, OY + DY, IY + AY), this.cursor += AY, !0
      }
      writeWorkerRecord(YY, rY, DY, AY, IY, RY) {
        const OY = RY.byteLength,
          gY = FY.Bd + (0, FY.ee)(OY);
        if (OY > FY.Ad) return this.dropped++, !1;
        if (!this.room(gY)) return !1;
        const aY = this.cursor,
          vY = aY >>> 2;
        this.u32[vY] = YY >>> 0, this.u32[vY + 1] = 65535 & rY | (65535 & DY) << 16, this.u32[vY + 2] = AY >>> 0, this.u32[vY + 3] = IY >>> 0, this.u32[vY + 4] = OY;
        const uY = aY + FY.Bd;
        return this.u8.set(RY, uY), this.u8.fill(0, uY + OY, aY + gY), this.cursor += gY, !0
      }
      written() {
        return this.ensureViews(), this.u8.subarray(0, this.cursor)
      }
      writeFrame(YY, rY) {
        return this.writeNet(FY.Sb.Frame, YY, rY)
      }
      writeOpen(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(FY.Sb.Open, YY, gY(rY))
      }
      writeClose(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(FY.Sb.Close, YY, gY(rY))
      }
      writeNet(YY, rY, DY) {
        const AY = DY.byteLength,
          IY = FY.Rb + (0, FY.ee)(AY);
        if (AY > FY.Mb) return this.dropped++, !1;
        if (!this.room(IY)) return !1;
        const RY = this.cursor;
        this.u32[RY >>> 2] = AY, this.u32[1 + (RY >>> 2)] = (0, FY.$d)(YY, rY);
        const OY = RY + FY.Rb;
        return this.u8.set(DY, OY), this.u8.fill(0, OY + AY, RY + IY), this.cursor += IY, !0
      }
      Ei(YY, rY, DY) {
        const AY = FY.r + (0, FY.ee)(DY);
        if (!this.room(AY)) return -1;
        const IY = this.cursor;
        this.u32[IY >>> 2] = 65535 & YY | (65535 & rY) << 16, this.u32[1 + (IY >>> 2)] = DY;
        const RY = IY + FY.r;
        return this.u8.fill(0, RY, IY + AY), this.cursor += AY, RY
      }
      growForCmd(YY) {
        return this.fits(FY.r + (0, FY.ee)(YY), 0)
      }
      writeCmd(YY, rY, DY) {
        const FY = this.Ei(YY, rY, DY.byteLength);
        return !(FY < 0) && (this.u8.set(DY, FY), !0)
      }
      copyWritten(YY, rY) {
        return this.ensureViews(), this.u8.slice(YY, YY + rY)
      }
    }
    const OY = new IY.d(0);

    function gY(YY) {
      if (0 === YY) return OY;
      const rY = new IY.d(FY.Qb);
      for (let DY = 0; DY < FY.Qb; DY++) rY[DY] = YY >>> 8 * DY & 255;
      return rY
    }
    class aY {
      constructor(YY, rY) {
        this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new RY(rY, {
          ptr: () => YY.lu(),
          gu: () => YY.pAY(),
          reserve: rY => YY.DIY(rY)
        }), this.net = new RY(rY, {
          ptr: () => YY.tAY(),
          gu: () => YY.LAY(),
          reserve: rY => YY.FIY(rY)
        }), this.worker = new RY(rY, {
          ptr: () => YY.eIY(),
          gu: () => YY.TIY(),
          reserve: rY => YY.AIY(rY)
        }), this.cmd = new RY(rY, {
          ptr: () => YY.fAY(),
          gu: () => YY.ZAY(),
          reserve: rY => YY.CAY(rY)
        })
      }
      reset(YY) {
        this.input.cursor = 0, this.worker.cursor = 0, this.cmd.consume(YY)
      }
    }
    var vY = DY(39904),
      uY = DY(2256),
      sY = DY(4371),
      iY = DY(40021);
    const yY = "coreFrame",
      QY = "fatalStatus",
      oY = "otherCall",
      WY = "coreRings",
      EY = "netIn",
      mY = "abi",
      VY = "netOut",
      SY = "workerOut",
      lY = "worldgenHost",
      TY = "eventWalker",
      eY = "netEvent",
      NY = "envEvent",
      BY = "sharedTables",
      cY = "inputAction",
      KY = new Set([TY, eY, NY, cY, BY]),
      HY = "wasmMemory",
      zY = "meshHost";

    function ZY(YY, rY) {
      YY.forEachWorkerOut(((DY, AY, IY) => {
        if ((0, FY.Td)(DY)) try {
          var RY;
          null === (RY = rY.worldgen) || void 0 === RY || RY.take(DY, IY)
        } catch (gY) {
          YY.crash(lY, gY)
        } else try {
          var OY;
          null === (OY = rY.mesh) || void 0 === OY || OY.take(DY, AY, IY)
        } catch (gY) {
          YY.crash(zY, gY)
        }
      }))
    }
    const CY = 1048576;

    function fY(YY, rY) {
      let DY = !1;
      const FY = () => {
        DY = !1, rY()
      };
      return () => {
        !DY && YY.cursor >= CY && (DY = !0, queueMicrotask(FY))
      }
    }
    const jY = new Set([QY, oY, lY, zY]);

    function hY(YY) {
      return KY.has(YY.site) ? YY.error instanceof WebAssembly.RuntimeError || (0, AY.i)(YY.error) : !jY.has(YY.site) && YY.error instanceof Error
    }
    const dY = "events",
      JY = [],
      MY = "debugLog",
      wY = "terrainTextures",
      bY = "sunShadowTextures",
      XY = new TextDecoder;

    function qY(YY, rY) {
      const {
        site: DY,
        error: AY,
        header: IY
      } = YY, RY = IY ? (0, FY.Qd)(IY.lastError) : "noFrame", OY = `CORE-${DY===QY?RY:DY}`, gY = null === AY || void 0 === AY ? "" : ` ${(0,vY.f)(AY)}`, aY = {
        site: DY,
        wasmBuild: rY.wasm,
        clientVersion: rY.client
      };
      return IY && (aY.status = String(IY.status), aY.lastError = RY, aY.lastErrorCode = String(IY.lastError), aY.lastErrorDetail = String(IY.lastErrorDetail), aY.errorCount = String(IY.errorCount), aY.frameIndex = String(IY.frameIndex), aY.tickIndex = String(IY.tickIndex)), {
        code: OY,
        message: `core ${DY}, last error ${RY};${gY}`,
        details: aY
      }
    }
    class pY {
      constructor(YY, rY, DY) {
        this.core = YY, this.memory = rY, this.handlers = DY, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.unsentUiPrefs = null, this.eventWalker = null, this.netOffsets = [], this.frameEvents = {
          ptr: 0,
          len: 0,
          net: JY,
          netOffsets: this.netOffsets,
          kind: "none"
        }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.rings = new aY(YY, rY)
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
      framePaces(YY) {
        if (this.stopped || this.drawsHeld) return !1;
        try {
          return this.core.bAY(YY)
        } catch (rY) {
          return this.crash(yY, rY), !1
        }
      }
      get isStopped() {
        return this.stopped
      }
      frame(YY, rY) {
        var DY;
        let IY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.stopped) return !1;
        if (!this.writePendingInput()) return !1;
        const {
          input: RY,
          net: OY,
          worker: gY,
          cmd: aY
        } = this.rings, vY = OY.cursor, uY = rY && !this.drawsHeld;
        let oY = FY.H.Fatal;
        const WY = aY.cursor;
        let mY = null;
        try {
          const rY = (uY ? FY._.Draws : 0) | (IY ? FY._.NetAll : 0);
          oY = (0, iY.f)((() => this.core.frame(YY, RY.cursor, OY.cursor, gY.cursor, rY, WY)))
        } catch (jY) {
          mY = {
            error: jY
          }
        }
        const VY = null === (DY = this.gameHost) || void 0 === DY ? void 0 : DY.takeFault();
        this.rings.reset(this.stopped || null !== mY || void 0 !== VY ? aY.cursor : WY);
        const SY = null === mY && void 0 === VY ? this.headerView() : null,
          lY = null === SY ? null : (0, FY.ie)(SY);
        null !== lY && (this.lastHeader = lY);
        const NY = null !== lY && oY !== FY.H.Fatal,
          BY = NY && null !== SY ? SY[FY.hb.NetInKept] : 0,
          cY = NY && BY <= vY && BY % 4 === 0 ? BY : null;
        var KY, HY;
        null !== lY && null !== cY && oY === FY.H.Errors && (null === (KY = (HY = this.handlers).onErrors) || void 0 === KY || KY.call(HY, lY));
        const zY = null === cY ? JY : this.readEvents(vY);
        if (OY.consume(vY - (null !== cY && void 0 !== cY ? cY : 0)), this.netKept = null !== cY && void 0 !== cY ? cY : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== mY) return this.crash(yY, void 0 === VY || VY instanceof AY.d ? mY.error : VY), !1;
        if (void 0 !== VY || null === lY) return this.crashOn(yY, VY), !1;
        const ZY = this.headerView()[FY.hb.FrameDraw];
        if (this.lastFrameKind = (0, sY.h)(uY, ZY), oY === FY.H.Fatal) return this.crash(QY, null), !1;
        if (null === cY) return this.crash(EY, `the core kept ${BY} of ${vY} net-in bytes`), !1;
        if (this.eventWalker) {
          if (this.stopped) return !1;
          const YY = this.frameEvents,
            rY = this.headerView();
          YY.ptr = rY[FY.hb.EventsPtr], YY.len = rY[FY.hb.EventsLen], YY.net = zY, YY.kind = this.lastFrameKind;
          try {
            this.eventWalker(YY)
          } catch (jY) {
            return this.crashOn(TY, jY), !1
          }
          return this.handEnvEvents()
        }
        for (const FY of zY) {
          if (this.stopped) return !1;
          try {
            var CY, fY;
            null === (CY = (fY = this.handlers).onNetEvent) || void 0 === CY || CY.call(fY, FY)
          } catch (jY) {
            return this.crashOn(eY, jY), !1
          }
        }
        return this.handEnvEvents()
      }
      handEnvEvents() {
        for (const IY of this.graceEvents) {
          if (this.stopped) return !1;
          try {
            var YY, rY;
            null === (YY = (rY = this.handlers).onReconnectGrace) || void 0 === YY || YY.call(rY, IY)
          } catch (AY) {
            return this.crashOn(eY, AY), !1
          }
        }
        for (const IY of this.envEvents) {
          if (this.stopped) return !1;
          try {
            var DY, FY;
            null === (DY = (FY = this.handlers).onEnvEvent) || void 0 === DY || DY.call(FY, IY)
          } catch (AY) {
            return this.crashOn(NY, AY), !1
          }
        }
        return !this.stopped
      }
      setEventWalker(YY) {
        this.eventWalker = YY
      }
      writePendingInput() {
        if (this.stopped) return !1;
        const {
          input: YY
        } = this.rings;
        try {
          const rY = this.unsentUiPrefs;
          rY && YY.writeRecord(FY.ub.UiPrefs, 0, rY.nametagCutDistance, 0, (0, FY.je)(rY)) && (this.unsentUiPrefs = null);
          const DY = this.unsentEnvPrefs;
          DY && YY.writeRecord(FY.ub.EnvPrefs, (0, FY.Sd)(DY), DY.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
          const AY = this.unsentLookPrefs;
          AY && YY.writeRecord(FY.ub.Sensitivity, 0, AY.mouse, AY.touch, (0, uY.l)(AY.fovPercent)) && (this.unsentLookPrefs = null);
          let IY = 0;
          for (const {
              aux: FY,
              payload: RY
            }
            of this.unsentOptions) {
            if (!YY.writeOptions(FY, RY)) {
              if (YY.cursor > 0) break;
              this.optionsDropped++
            }
            IY++
          }
          IY > 0 && this.unsentOptions.splice(0, IY)
        } catch (rY) {
          return this.crash(WY, rY), !1
        }
        return !0
      }
      setHoldDraws(YY) {
        this.drawsHeld = YY
      }
      setUiPrefs(YY) {
        this.unsentUiPrefs = {
          ...YY
        }
      }
      setEnvPrefs(YY) {
        this.unsentEnvPrefs = {
          ...YY
        }
      }
      setLookPrefs(YY) {
        this.unsentLookPrefs = {
          ...YY
        }
      }
      queueOptions(YY, rY) {
        return !this.isStopped && (rY.byteLength > FY.Xb.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
          aux: YY,
          payload: rY
        }), !0))
      }
      setChunkCap(YY) {
        return this.callCore("setChunkCap", null, (rY => rY.vIY(YY)))
      }
      shedMemory(YY) {
        const rY = this.callCore("shedMemory", null, (rY => rY.WIY(YY)));
        return 0 === rY ? null : rY
      }
      addDistanceInUse() {
        const YY = this.callCore("addDistanceInUse", null, (YY => YY.BAY()));
        return 0 === YY ? null : YY
      }
      setChunkAddDistance(YY, rY) {
        return this.callCore("setChunkAddDistance", !1, (DY => DY.aIY(YY, rY)))
      }
      setGameHost(YY) {
        return this.callCore("setGameHost", !1, (rY => (rY.MAY(YY), this.gameHost = YY, !0)))
      }
      setAntiCheatProbes(YY) {
        return this.callCore("setAntiCheatProbes", !1, (rY => rY.OIY(YY)))
      }
      setAmbientOcclusion(YY) {
        this.callCore("setAmbientOcclusion", void 0, (rY => {
          rY.RIY(YY)
        }))
      }
      setPoseLod(YY) {
        this.callCore("setPoseLod", void 0, (rY => {
          rY.sIY(YY)
        }))
      }
      setDebugLog(YY, rY) {
        this.callCore(MY, void 0, (DY => {
          DY.Ho(YY, rY)
        }))
      }
      takeDebugLog(YY) {
        return this.callCore(MY, [], (rY => rY.zo(YY)))
      }
      setTextureLayers(YY) {
        return this.callCore("setTextureLayers", !1, (rY => rY.oIY(YY)))
      }
      setBlockColours(YY) {
        let {
          blocks: rY,
          counts: DY,
          values: FY
        } = YY;
        return this.callCore("setBlockColours", !1, (YY => YY.ODY(rY, DY, FY)))
      }
      terrainTextureNames() {
        return this.callCore(wY, [], (YY => YY.lIY()))
      }
      setTerrainTextures(YY, rY, DY, FY) {
        return this.callCore(wY, !1, (AY => AY.QIY(YY, DY, rY, FY)))
      }
      setShaderPack(YY, rY, DY, FY, AY, IY) {
        return this.callCore("setShaderPack", !1, (RY => {
          var OY, gY;
          return null !== (OY = null === (gY = RY.yDY) || void 0 === gY ? void 0 : gY.call(RY, YY, rY, DY, FY, AY, IY)) && void 0 !== OY && OY
        }))
      }
      sunShadowWantedTextures() {
        return this.callCore(bY, null, (YY => {
          var rY, DY;
          return null !== (rY = null === (DY = YY.EIY) || void 0 === DY ? void 0 : DY.call(YY)) && void 0 !== rY ? rY : null
        }))
      }
      setSunShadowTexture(YY, rY, DY, FY, AY) {
        this.callCore(bY, void 0, (IY => {
          var RY;
          null === (RY = IY.yIY) || void 0 === RY || RY.call(IY, YY, rY, DY, FY, AY)
        }))
      }
      takeSunShadowWarnings() {
        return this.callCore(bY, [], (YY => {
          var rY, DY;
          return null !== (rY = null === (DY = YY.VIY) || void 0 === DY ? void 0 : DY.call(YY)) && void 0 !== rY ? rY : []
        }))
      }
      sunShadowsHeld() {
        return this.callCore(bY, null, (YY => {
          var rY, DY;
          return null !== (rY = null === (DY = YY.mIY) || void 0 === DY ? void 0 : DY.call(YY)) && void 0 !== rY ? rY : null
        }))
      }
      callCore(YY, rY, DY) {
        if (this.stopped) return rY;
        try {
          return DY(this.core)
        } catch (FY) {
          return this.crash(YY, FY), rY
        }
      }
      readEvents(YY) {
        this.netOffsets.length = 0;
        const rY = this.headerView(),
          DY = rY[FY.hb.EventsPtr],
          AY = rY[FY.hb.EventsLen];
        if (this.envEvents.length = 0, this.graceEvents.length = 0, 0 === AY) return JY;
        const IY = [],
          RY = this.memory().buffer;
        if (DY % 4 !== 0 || DY + AY > RY.byteLength) return this.crash(dY, `events of ${AY} bytes at ${DY} outside ${RY.byteLength} bytes of memory`), JY;
        const OY = new DataView(RY, DY, AY),
          gY = this.rings.net,
          aY = (rY, DY) => rY + DY <= YY ? gY.copyWritten(rY, DY) : null;
        let vY = 0;
        for (; vY < AY;) {
          const YY = vY + FY.O,
            rY = YY <= AY ? OY.getUint32(vY, !0) : -1,
            gY = rY >>> 16;
          if (rY < 0 || gY > AY - YY) return this.crash(dY, `event record at ${vY} overruns its ${AY} bytes`), JY;
          const NY = 65535 & rY,
            BY = rY => OY.getUint32(YY + 4 * rY, !0);
          if (NY === FY.R.RawMessage) {
            const YY = gY >= FY.Ec.BYTES ? 65535 & BY(1) : -1,
              rY = YY === FY.Ec.STRING_TYPE,
              DY = gY === (rY ? FY.Ec.STRING_TYPE_BYTES : FY.Ec.BYTES) ? aY(BY(2), BY(3)) : null,
              AY = rY && DY ? aY(BY(4), BY(5)) : null;
            if (!DY || rY && !AY) return this.crash(dY, `RawMessage at ${vY} of ${gY} bytes names bytes outside net-in`), JY;
            this.netOffsets.push(vY), IY.push({
              type: "message",
              conn: BY(0),
              vv: YY,
              payloadKind: BY(1) >>> 16,
              payload: DY,
              stringType: AY ? XY.decode(AY) : null
            })
          } else if (NY === FY.R.CoreErrors) {
            var uY, sY;
            const YY = gY >= 4 ? BY(0) : -1;
            if (YY < 0 || YY > FY.D.PAIRS_MAX || gY !== 4 * (FY.D.FIXED_WORDS + FY.D.PAIR_WORDS * YY)) return this.crash(dY, `CoreErrors at ${vY} of ${gY} bytes`), JY;
            const rY = [];
            for (let DY = 0; DY < YY; DY++) rY.push({
              code: BY(1 + 2 * DY),
              detail: BY(2 + 2 * DY)
            });
            null === (uY = (sY = this.handlers).onCoreErrors) || void 0 === uY || uY.call(sY, rY, BY(1 + 2 * YY))
          } else if (NY === FY.R.RenderReload) {
            var iY, yY;
            if (gY !== FY.Tc.BYTES) return this.crash(dY, `RenderReload at ${vY} of ${gY} bytes`), JY;
            null === (iY = (yY = this.handlers).onRenderReload) || void 0 === iY || iY.call(yY, BY(0), BY(1), BY(2))
          } else if (NY === FY.R.Images) {
            var QY, oY;
            null === (QY = (oY = this.handlers).onImages) || void 0 === QY || QY.call(oY, new Uint8Array(RY.slice(DY + YY, DY + YY + gY)))
          } else if (NY === FY.R.ModelRequests)
            for (let DY = 0; DY < gY >>> 2; DY++) {
              var WY, EY;
              null === (WY = (EY = this.handlers).onModelRequest) || void 0 === WY || WY.call(EY, BY(DY))
            } else if (NY === FY.R.ModelTaken) {
              var mY, VY;
              if (gY < 4) return this.crash(dY, `ModelTaken at ${vY} of ${gY} bytes`), JY;
              const YY = new Uint32Array((gY >>> 2) - 1);
              for (let rY = 0; rY < YY.length; rY++) YY[rY] = BY(1 + rY);
              null === (mY = (VY = this.handlers).onModelTaken) || void 0 === mY || mY.call(VY, BY(0), YY)
            } else if (NY === FY.R.TerrainTexturesWanted) {
            var SY, lY;
            if (0 !== gY) return this.crash(dY, `TerrainTexturesWanted at ${vY} of ${gY} bytes`), JY;
            null === (SY = (lY = this.handlers).onTerrainTexturesWanted) || void 0 === SY || SY.call(lY)
          } else if (NY === FY.R.KeepAliveDue) {
            var TY, eY;
            if (gY > FY.Ab) return this.crash(dY, `KeepAliveDue at ${vY} of ${gY} bytes`), JY;
            null === (TY = (eY = this.handlers).onKeepAlive) || void 0 === TY || TY.call(eY, new Uint8Array(RY, DY + YY, gY).slice())
          } else if (NY === FY.R.ConnectionState) {
            if (gY !== FY.s) return this.crash(dY, `ConnectionState at ${vY} of ${gY} bytes`), JY;
            this.netOffsets.push(vY), IY.push({
              type: "connection",
              conn: BY(0),
              phase: BY(1),
              code: 0 | BY(2)
            })
          } else if (NY === FY.R.EnvLighting || NY === FY.R.SkyImages) {
            if (gY !== (NY === FY.R.EnvLighting ? FY.L : FY.ld)) return this.crash(dY, `event ${NY} at ${vY} of ${gY} bytes`), JY;
            this.envEvents.push({
              kind: NY,
              payload: new Uint8Array(RY.slice(DY + YY, DY + YY + gY))
            })
          } else if (NY === FY.R.ReconnectGrace) {
            if (gY !== FY.lc) return this.crash(dY, `ReconnectGrace at ${vY} of ${gY} bytes`), JY;
            const YY = BY(2);
            this.graceEvents.push({
              conn: BY(0),
              graceMs: BY(1),
              sessionBased: 0 !== (YY & FY.Ic.SessionBased),
              replayOffer: 0 !== (YY & FY.Ic.ReplayOffer)
            })
          }
          vY = YY + (0, FY.ee)(gY)
        }
        return IY
      }
      forEachNetOut(YY) {
        this.forEachOut(VY, "net-out", FY.hb.NetOutPtr, FY.hb.NetOutLen, FY.Rb, 0, ((rY, DY, AY, IY) => {
          const RY = (0, FY.Zd)(DY);
          RY === FY.Sb.Frame ? YY((0, FY.Wd)(DY), AY) : this.crash(VY, `net-out record at ${IY} is kind ${RY}, not a frame`)
        }))
      }
      forEachWorkerOut(YY) {
        this.forEachOut(SY, "worker-out", FY.hb.WorkerOutPtr, FY.hb.WorkerOutLen, FY.zd, 4, ((rY, DY, AY, IY) => {
          const RY = 255 & rY,
            OY = RY === FY.Ld.Init ? this.initOf(AY, IY) : AY;
          null !== OY && YY(RY, rY >>> 8 & 16777215, OY)
        }))
      }
      initOf(YY, rY) {
        const DY = this.memory().buffer;
        if (YY.byteLength !== FY.kb) return this.crash(SY, `worker-out Init record at ${rY} is ${YY.byteLength} bytes, not a view`), null;
        const AY = new DataView(YY.buffer, YY.byteOffset, FY.kb),
          IY = AY.getUint32(0, !0),
          RY = AY.getUint32(4, !0);
        return IY + RY > DY.byteLength ? (this.crash(SY, `worker-out Init record at ${rY} names ${RY} bytes at ${IY} outside ${DY.byteLength} bytes of memory`), null) : new Uint8Array(DY, IY, RY)
      }
      forEachOut(YY, rY, DY, AY, IY, RY, OY) {
        if (this.stopped || null === this.lastHeader) return;
        const gY = this.headerView(),
          aY = gY[DY],
          vY = gY[AY];
        if (0 === vY) return;
        const uY = this.memory().buffer;
        if (aY % 4 !== 0 || aY + vY > uY.byteLength) return void this.crash(YY, `${rY} of ${vY} bytes at ${aY} outside ${uY.byteLength} bytes of memory`);
        const sY = new DataView(uY, aY, vY);
        let iY = 0;
        for (; iY < vY;) {
          const DY = iY + IY,
            AY = DY <= vY ? sY.getUint32(iY + RY, !0) : -1;
          if (AY < 0 || AY > vY - DY) return void this.crash(YY, `${rY} record at ${iY} overruns its ${vY} bytes`);
          if (OY(sY.getUint32(iY, !0), sY.getUint32(iY + 4, !0), new Uint8Array(uY, aY + DY, AY), iY), this.stopped) return;
          iY = DY + (0, FY.ee)(AY)
        }
      }
      forEachEvent(YY) {
        if (this.stopped || null === this.lastHeader) return;
        const rY = this.headerView(),
          DY = rY[FY.hb.EventsPtr],
          AY = rY[FY.hb.EventsLen];
        if (0 === AY) return;
        const IY = this.memory().buffer;
        if (DY % 4 !== 0 || DY + AY > IY.byteLength) return void this.crash(dY, `events of ${AY} bytes at ${DY} outside ${IY.byteLength} bytes of memory`);
        const RY = new DataView(IY, DY, AY);
        let OY = 0;
        for (; OY < AY;) {
          const rY = OY + FY.O,
            DY = rY <= AY ? RY.getUint32(OY, !0) : -1,
            IY = DY >>> 16;
          if (DY < 0 || IY > AY - rY) return void this.crash(dY, `event record at ${OY} overruns its ${AY} bytes`);
          YY(65535 & DY, RY, rY, IY), OY = rY + (0, FY.ee)(IY)
        }
      }
      crashOn(YY, rY) {
        rY instanceof AY.d ? this.crash(dY, rY.message) : this.crash(YY, rY)
      }
      crash(YY, rY) {
        this.stopped || (this.stopped = !0, this.handlers.onCrash({
          site: YY,
          error: rY,
          header: this.lastHeader
        }))
      }
      headerWord(YY) {
        return this.stopped || null === this.lastHeader ? 0 : this.headerView()[YY]
      }
      headerView() {
        const YY = this.memory().buffer;
        return YY !== this.headerBuffer && (this.headerBuffer = YY, this.header = new Uint32Array(YY, this.core.mi(), FY.fb)), this.header
      }
    }
  },
  40021: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => RY,
      f: () => IY
    });
    var FY = DY(4269);
    let AY = null;

    function IY(YY) {
      AY = {
        scanned: !1
      };
      try {
        return YY()
      } finally {
        AY = null
      }
    }

    function RY() {
      const YY = AY;
      if (null === YY) return (0, FY.d)();
      const rY = (0, FY.d)(!YY.scanned);
      return YY.scanned = !0, rY
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);