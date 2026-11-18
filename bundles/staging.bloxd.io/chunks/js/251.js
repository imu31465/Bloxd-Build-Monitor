export const id = 251;
export const ids = [251];
export const modules = {
  39750: (JJ, cJ, ZJ) => {
    function FJ(JJ, cJ, ZJ) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(JJ, cJ).getContext("2d", ZJ);
      const FJ = document.createElement("canvas");
      return FJ.width = JJ, FJ.height = cJ, FJ.getContext("2d", ZJ)
    }

    function UJ(JJ, cJ) {
      return JJ.getContext("2d", cJ)
    }
    ZJ.d(cJ, {
      c: () => UJ,
      e: () => FJ
    })
  },
  39672: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => vJ,
      g: () => nJ,
      j: () => uJ,
      k: () => IJ,
      l: () => bJ,
      p: () => wJ,
      q: () => rJ,
      r: () => fJ,
      u: () => xJ,
      x: () => SJ,
      y: () => NJ,
      z: () => EJ,
      C: () => kJ,
      G: () => CJ,
      H: () => WJ,
      J: () => HJ
    });
    var FJ = ZJ(4189),
      UJ = ZJ(39417),
      eJ = ZJ(6);
    class XJ {
      constructor(JJ, cJ) {
        this.memory = JJ, this.access = cJ, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.qh = 0, this.u32 = new eJ.l(0), this.f32 = new eJ.f(0), this.u8 = new eJ.d(0), this.dataView = new eJ.j(new ArrayBuffer(0)), this.refresh()
      }
      refresh() {
        this.ptr = this.access.ptr(), this.qh = this.access.qh(), this.buffer = (0, eJ.G)(this.memory()), this.u32 = new eJ.l(this.buffer, this.ptr, this.qh >>> 2), this.f32 = new eJ.f(this.buffer, this.ptr, this.qh >>> 2), this.u8 = new eJ.d(this.buffer, this.ptr, this.qh), this.dataView = new eJ.j(this.buffer, this.ptr, this.qh)
      }
      ensureViews() {
        (0, eJ.G)(this.memory()) !== this.buffer && this.refresh()
      }
      get view() {
        return this.ensureViews(), this.dataView
      }
      room(JJ) {
        return !!this.fits(JJ) || (this.dropped++, !1)
      }
      fits(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.cursor;
        this.ensureViews();
        const ZJ = cJ + JJ;
        return ZJ <= this.qh || ZJ <= FJ.xc && 0 !== this.access.reserve(ZJ) && (this.refresh(), ZJ <= this.qh)
      }
      consume(JJ) {
        const cJ = this.cursor - JJ;
        cJ > 0 && JJ > 0 && (this.ensureViews(), this.u8.copyWithin(0, JJ, this.cursor)), this.cursor = cJ > 0 ? cJ : 0
      }
      writeRecord(JJ, cJ, ZJ, UJ, eJ) {
        if (!this.room(FJ.rb)) return !1;
        const XJ = this.cursor >>> 2;
        return this.u32[XJ] = 65535 & JJ | (65535 & cJ) << 16, this.f32[XJ + 1] = ZJ, this.f32[XJ + 2] = UJ, this.u32[XJ + 3] = eJ >>> 0, this.cursor += FJ.rb, !0
      }
      writeOptions(JJ, cJ) {
        const ZJ = cJ.byteLength,
          UJ = FJ.rb + (0, FJ.he)(ZJ);
        if (!this.fits(UJ)) return !1;
        const eJ = this.cursor,
          XJ = eJ >>> 2;
        this.u32[XJ] = FJ.sb.Options, this.u32[XJ + 1] = ZJ, this.u32[XJ + 2] = 0, this.u32[XJ + 3] = JJ >>> 0;
        const AJ = eJ + FJ.rb;
        return this.u8.set(cJ, AJ), this.u8.fill(0, AJ + ZJ, eJ + UJ), this.cursor += UJ, !0
      }
      writeWorkerRecord(JJ, cJ, ZJ, UJ, eJ) {
        const XJ = eJ.byteLength,
          AJ = FJ.Bd + (0, FJ.he)(XJ);
        if (XJ > FJ.zd) return this.dropped++, !1;
        if (!this.room(AJ)) return !1;
        const qJ = this.cursor,
          jJ = qJ >>> 2;
        this.u32[jJ] = JJ >>> 0, this.u32[jJ + 1] = 65535 & cJ | (65535 & ZJ) << 16, this.u32[jJ + 2] = UJ >>> 0, this.u32[jJ + 3] = XJ;
        const YJ = qJ + FJ.Bd;
        return this.u8.set(eJ, YJ), this.u8.fill(0, YJ + XJ, qJ + AJ), this.cursor += AJ, !0
      }
      written() {
        return this.ensureViews(), this.u8.subarray(0, this.cursor)
      }
      writeFrame(JJ, cJ) {
        return this.writeNet(FJ.Nb.Frame, JJ, cJ)
      }
      writeOpen(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(FJ.Nb.Open, JJ, qJ(cJ))
      }
      writeClose(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(FJ.Nb.Close, JJ, qJ(cJ))
      }
      writeNet(JJ, cJ, ZJ) {
        const UJ = ZJ.byteLength,
          eJ = FJ.Jb + (0, FJ.he)(UJ);
        if (UJ > FJ.Fb) return this.dropped++, !1;
        if (!this.room(eJ)) return !1;
        const XJ = this.cursor;
        this.u32[XJ >>> 2] = UJ, this.u32[1 + (XJ >>> 2)] = (0, FJ.ee)(JJ, cJ);
        const AJ = XJ + FJ.Jb;
        return this.u8.set(ZJ, AJ), this.u8.fill(0, AJ + UJ, XJ + eJ), this.cursor += eJ, !0
      }
      Fs(JJ, cJ, ZJ) {
        const UJ = FJ.r + (0, FJ.he)(ZJ);
        if (!this.room(UJ)) return -1;
        const eJ = this.cursor;
        this.u32[eJ >>> 2] = 65535 & JJ | (65535 & cJ) << 16, this.u32[1 + (eJ >>> 2)] = ZJ;
        const XJ = eJ + FJ.r;
        return this.u8.fill(0, XJ, eJ + UJ), this.cursor += UJ, XJ
      }
      growForCmd(JJ) {
        return this.fits(FJ.r + (0, FJ.he)(JJ), 0)
      }
      writeCmd(JJ, cJ, ZJ) {
        const FJ = this.Fs(JJ, cJ, ZJ.byteLength);
        return !(FJ < 0) && (this.u8.set(ZJ, FJ), !0)
      }
      copyWritten(JJ, cJ) {
        return this.ensureViews(), this.u8.slice(JJ, JJ + cJ)
      }
    }
    const AJ = new eJ.d(0);

    function qJ(JJ) {
      if (0 === JJ) return AJ;
      const cJ = new eJ.d(FJ.Ib);
      for (let ZJ = 0; ZJ < FJ.Ib; ZJ++) cJ[ZJ] = JJ >>> 8 * ZJ & 255;
      return cJ
    }
    class jJ {
      constructor(JJ, cJ) {
        this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new XJ(cJ, {
          ptr: () => JJ.Vh(),
          qh: () => JJ.EeJ(),
          reserve: cJ => JJ.HeJ(cJ)
        }), this.net = new XJ(cJ, {
          ptr: () => JJ.weJ(),
          qh: () => JJ.beJ(),
          reserve: cJ => JJ.PeJ(cJ)
        }), this.worker = new XJ(cJ, {
          ptr: () => JJ.UXJ(),
          qh: () => JJ.FXJ(),
          reserve: cJ => JJ.keJ(cJ)
        }), this.cmd = new XJ(cJ, {
          ptr: () => JJ.seJ(),
          qh: () => JJ.heJ(),
          reserve: cJ => JJ.DeJ(cJ)
        })
      }
      reset(JJ) {
        this.input.cursor = 0, this.worker.cursor = 0, this.cmd.consume(JJ)
      }
    }
    var YJ = ZJ(39543),
      hJ = ZJ(2153),
      DJ = ZJ(4182),
      sJ = ZJ(39679);
    const nJ = "coreFrame",
      GJ = "fatalStatus",
      fJ = "otherCall",
      xJ = "coreRings",
      rJ = "netIn",
      vJ = "abi",
      mJ = "netOut",
      QJ = "workerOut",
      EJ = "worldgenHost",
      VJ = "eventWalker",
      KJ = "netEvent",
      yJ = "envEvent",
      SJ = "sharedTables",
      IJ = "inputAction",
      MJ = new Set([VJ, KJ, yJ, IJ, SJ]),
      bJ = "wasmMemory",
      wJ = "meshHost";

    function WJ(JJ, cJ) {
      JJ.forEachWorkerOut(((ZJ, UJ, eJ) => {
        if ((0, FJ.Vd)(ZJ)) try {
          var XJ;
          null === (XJ = cJ.worldgen) || void 0 === XJ || XJ.take(ZJ, eJ)
        } catch (qJ) {
          JJ.crash(EJ, qJ)
        } else try {
          var AJ;
          null === (AJ = cJ.mesh) || void 0 === AJ || AJ.take(ZJ, UJ, eJ)
        } catch (qJ) {
          JJ.crash(wJ, qJ)
        }
      }))
    }
    const gJ = 1048576;

    function HJ(JJ, cJ) {
      let ZJ = !1;
      const FJ = () => {
        ZJ = !1, cJ()
      };
      return () => {
        !ZJ && JJ.cursor >= gJ && (ZJ = !0, queueMicrotask(FJ))
      }
    }
    const PJ = new Set([GJ, fJ, EJ, wJ]);

    function kJ(JJ) {
      return MJ.has(JJ.site) ? JJ.error instanceof WebAssembly.RuntimeError || (0, UJ.s)(JJ.error) : !PJ.has(JJ.site) && JJ.error instanceof Error
    }
    const pJ = "events",
      dJ = [],
      zJ = "mp",
      NJ = "terrainTextures",
      OJ = "sunShadowTextures",
      TJ = new TextDecoder;

    function CJ(JJ, cJ) {
      const {
        site: ZJ,
        error: UJ,
        header: eJ
      } = JJ, XJ = eJ ? (0, FJ.Sd)(eJ.lastError) : "noFrame", AJ = `CORE-${ZJ===GJ?XJ:ZJ}`, qJ = null === UJ || void 0 === UJ ? "" : ` ${(0,YJ.d)(UJ)}`, jJ = {
        site: ZJ,
        wasmBuild: cJ.wasm,
        clientVersion: cJ.client
      };
      return eJ && (jJ.status = String(eJ.status), jJ.lastError = XJ, jJ.lastErrorCode = String(eJ.lastError), jJ.lastErrorDetail = String(eJ.lastErrorDetail), jJ.errorCount = String(eJ.errorCount), jJ.frameIndex = String(eJ.frameIndex), jJ.tickIndex = String(eJ.tickIndex)), {
        code: AJ,
        message: `core ${ZJ}, last error ${XJ};${qJ}`,
        details: jJ
      }
    }
    class uJ {
      constructor(JJ, cJ, ZJ) {
        this.core = JJ, this.memory = cJ, this.handlers = ZJ, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.unsentUiPrefs = null, this.eventWalker = null, this.netOffsets = [], this.frameEvents = {
          ptr: 0,
          len: 0,
          net: dJ,
          netOffsets: this.netOffsets,
          kind: "none"
        }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.rings = new jJ(JJ, cJ)
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
      framePaces(JJ) {
        if (this.stopped || this.drawsHeld) return !1;
        try {
          return this.core.veJ(JJ)
        } catch (cJ) {
          return this.crash(nJ, cJ), !1
        }
      }
      get isStopped() {
        return this.stopped
      }
      frame(JJ, cJ) {
        var ZJ;
        let eJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.stopped) return !1;
        if (!this.writePendingInput()) return !1;
        const {
          input: XJ,
          net: AJ,
          worker: qJ,
          cmd: jJ
        } = this.rings, YJ = AJ.cursor, hJ = cJ && !this.drawsHeld;
        let fJ = FJ.N.Fatal;
        const xJ = jJ.cursor;
        let vJ = null;
        try {
          const cJ = (hJ ? FJ.bb.Draws : 0) | (eJ ? FJ.bb.NetAll : 0);
          fJ = (0, sJ.g)((() => this.core.frame(JJ, XJ.cursor, AJ.cursor, qJ.cursor, cJ, xJ)))
        } catch (HJ) {
          vJ = {
            error: HJ
          }
        }
        const mJ = null === (ZJ = this.gameHost) || void 0 === ZJ ? void 0 : ZJ.takeFault();
        this.rings.reset(this.stopped || null !== vJ || void 0 !== mJ ? jJ.cursor : xJ);
        const QJ = null === vJ && void 0 === mJ ? this.headerView() : null,
          EJ = null === QJ ? null : (0, FJ.ie)(QJ);
        null !== EJ && (this.lastHeader = EJ);
        const yJ = null !== EJ && fJ !== FJ.N.Fatal,
          SJ = yJ && null !== QJ ? QJ[FJ.lb.NetInKept] : 0,
          IJ = yJ && SJ <= YJ && SJ % 4 === 0 ? SJ : null;
        var MJ, bJ;
        null !== EJ && null !== IJ && fJ === FJ.N.Errors && (null === (MJ = (bJ = this.handlers).onErrors) || void 0 === MJ || MJ.call(bJ, EJ));
        const wJ = null === IJ ? dJ : this.readEvents(YJ);
        if (AJ.consume(YJ - (null !== IJ && void 0 !== IJ ? IJ : 0)), this.netKept = null !== IJ && void 0 !== IJ ? IJ : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== vJ) return this.crash(nJ, void 0 === mJ || mJ instanceof UJ.e ? vJ.error : mJ), !1;
        if (void 0 !== mJ || null === EJ) return this.crashOn(nJ, mJ), !1;
        if (this.lastFrameKind = (0, DJ.e)(hJ, this.headerView()[FJ.lb.FrameDraw]), fJ === FJ.N.Fatal) return this.crash(GJ, null), !1;
        if (null === IJ) return this.crash(rJ, `the core kept ${SJ} of ${YJ} net-in bytes`), !1;
        if (this.eventWalker) {
          if (this.stopped) return !1;
          const JJ = this.frameEvents,
            cJ = this.headerView();
          JJ.ptr = cJ[FJ.lb.EventsPtr], JJ.len = cJ[FJ.lb.EventsLen], JJ.net = wJ, JJ.kind = this.lastFrameKind;
          try {
            this.eventWalker(JJ)
          } catch (HJ) {
            return this.crashOn(VJ, HJ), !1
          }
          return this.handEnvEvents()
        }
        for (const FJ of wJ) {
          if (this.stopped) return !1;
          try {
            var WJ, gJ;
            null === (WJ = (gJ = this.handlers).onNetEvent) || void 0 === WJ || WJ.call(gJ, FJ)
          } catch (HJ) {
            return this.crashOn(KJ, HJ), !1
          }
        }
        return this.handEnvEvents()
      }
      handEnvEvents() {
        for (const eJ of this.graceEvents) {
          if (this.stopped) return !1;
          try {
            var JJ, cJ;
            null === (JJ = (cJ = this.handlers).onReconnectGrace) || void 0 === JJ || JJ.call(cJ, eJ)
          } catch (UJ) {
            return this.crashOn(KJ, UJ), !1
          }
        }
        for (const eJ of this.envEvents) {
          if (this.stopped) return !1;
          try {
            var ZJ, FJ;
            null === (ZJ = (FJ = this.handlers).onEnvEvent) || void 0 === ZJ || ZJ.call(FJ, eJ)
          } catch (UJ) {
            return this.crashOn(yJ, UJ), !1
          }
        }
        return !this.stopped
      }
      setEventWalker(JJ) {
        this.eventWalker = JJ
      }
      writePendingInput() {
        if (this.stopped) return !1;
        const {
          input: JJ
        } = this.rings;
        try {
          const cJ = this.unsentUiPrefs;
          cJ && JJ.writeRecord(FJ.sb.UiPrefs, 0, cJ.nametagCutDistance, 0, (0, FJ.me)(cJ)) && (this.unsentUiPrefs = null);
          const ZJ = this.unsentEnvPrefs;
          ZJ && JJ.writeRecord(FJ.sb.EnvPrefs, (0, FJ.Ud)(ZJ), ZJ.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
          const UJ = this.unsentLookPrefs;
          UJ && JJ.writeRecord(FJ.sb.Sensitivity, 0, UJ.mouse, UJ.touch, (0, hJ.l)(UJ.fovPercent)) && (this.unsentLookPrefs = null);
          let eJ = 0;
          for (const {
              aux: FJ,
              payload: XJ
            }
            of this.unsentOptions) {
            if (!JJ.writeOptions(FJ, XJ)) {
              if (JJ.cursor > 0) break;
              this.optionsDropped++
            }
            eJ++
          }
          eJ > 0 && this.unsentOptions.splice(0, eJ)
        } catch (cJ) {
          return this.crash(xJ, cJ), !1
        }
        return !0
      }
      setHoldDraws(JJ) {
        this.drawsHeld = JJ
      }
      setUiPrefs(JJ) {
        this.unsentUiPrefs = {
          ...JJ
        }
      }
      setEnvPrefs(JJ) {
        this.unsentEnvPrefs = {
          ...JJ
        }
      }
      setLookPrefs(JJ) {
        this.unsentLookPrefs = {
          ...JJ
        }
      }
      queueOptions(JJ, cJ) {
        return !this.isStopped && (cJ.byteLength > FJ.Tb.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
          aux: JJ,
          payload: cJ
        }), !0))
      }
      setChunkCap(JJ) {
        return this.callCore("setChunkCap", null, (cJ => cJ.TeJ(JJ)))
      }
      shedMemory(JJ) {
        const cJ = this.callCore("shedMemory", null, (cJ => cJ.teJ(JJ)));
        return 0 === cJ ? null : cJ
      }
      addDistanceInUse() {
        const JJ = this.callCore("addDistanceInUse", null, (JJ => JJ.XeJ()));
        return 0 === JJ ? null : JJ
      }
      setChunkAddDistance(JJ, cJ) {
        return this.callCore("setChunkAddDistance", !1, (ZJ => ZJ.OeJ(JJ, cJ)))
      }
      setGameHost(JJ) {
        return this.callCore("setGameHost", !1, (cJ => (cJ.reJ(JJ), this.gameHost = JJ, !0)))
      }
      setAntiCheatProbes(JJ) {
        return this.callCore("setAntiCheatProbes", !1, (cJ => cJ.zeJ(JJ)))
      }
      setAmbientOcclusion(JJ) {
        this.callCore("setAmbientOcclusion", void 0, (cJ => {
          cJ.deJ(JJ)
        }))
      }
      setPoseLod(JJ) {
        this.callCore("setPoseLod", void 0, (cJ => {
          cJ.ieJ(JJ)
        }))
      }
      setLookDebug(JJ) {
        this.callCore(zJ, void 0, (cJ => {
          cJ.ueJ(JJ)
        }))
      }
      takeLookDebug() {
        return this.callCore(zJ, [], (JJ => JJ.leJ()))
      }
      setTextureLayers(JJ) {
        return this.callCore("setTextureLayers", !1, (cJ => cJ.BeJ(JJ)))
      }
      setBlockColours(JJ) {
        let {
          blocks: cJ,
          counts: ZJ,
          values: FJ
        } = JJ;
        return this.callCore("setBlockColours", !1, (JJ => JJ.NZJ(cJ, ZJ, FJ)))
      }
      terrainTextureNames() {
        return this.callCore(NJ, [], (JJ => JJ.ZXJ()))
      }
      setTerrainTextures(JJ, cJ, ZJ, FJ) {
        return this.callCore(NJ, !1, (UJ => UJ.aeJ(JJ, ZJ, cJ, FJ)))
      }
      setShaderPack(JJ, cJ, ZJ, FJ, UJ, eJ) {
        return this.callCore("setShaderPack", !1, (XJ => {
          var AJ, qJ;
          return null !== (AJ = null === (qJ = XJ.BFJ) || void 0 === qJ ? void 0 : qJ.call(XJ, JJ, cJ, ZJ, FJ, UJ, eJ)) && void 0 !== AJ && AJ
        }))
      }
      sunShadowWantedTextures() {
        return this.callCore(OJ, null, (JJ => {
          var cJ, ZJ;
          return null !== (cJ = null === (ZJ = JJ.oeJ) || void 0 === ZJ ? void 0 : ZJ.call(JJ)) && void 0 !== cJ ? cJ : null
        }))
      }
      setSunShadowTexture(JJ, cJ, ZJ, FJ, UJ) {
        this.callCore(OJ, void 0, (eJ => {
          var XJ;
          null === (XJ = eJ.LeJ) || void 0 === XJ || XJ.call(eJ, JJ, cJ, ZJ, FJ, UJ)
        }))
      }
      takeSunShadowWarnings() {
        return this.callCore(OJ, [], (JJ => {
          var cJ, ZJ;
          return null !== (cJ = null === (ZJ = JJ.JXJ) || void 0 === ZJ ? void 0 : ZJ.call(JJ)) && void 0 !== cJ ? cJ : []
        }))
      }
      callCore(JJ, cJ, ZJ) {
        if (this.stopped) return cJ;
        try {
          return ZJ(this.core)
        } catch (FJ) {
          return this.crash(JJ, FJ), cJ
        }
      }
      readEvents(JJ) {
        this.netOffsets.length = 0;
        const cJ = this.headerView(),
          ZJ = cJ[FJ.lb.EventsPtr],
          UJ = cJ[FJ.lb.EventsLen];
        if (this.envEvents.length = 0, this.graceEvents.length = 0, 0 === UJ) return dJ;
        const eJ = [],
          XJ = this.memory().buffer;
        if (ZJ % 4 !== 0 || ZJ + UJ > XJ.byteLength) return this.crash(pJ, `events of ${UJ} bytes at ${ZJ} outside ${XJ.byteLength} bytes of memory`), dJ;
        const AJ = new DataView(XJ, ZJ, UJ),
          qJ = this.rings.net,
          jJ = (cJ, ZJ) => cJ + ZJ <= JJ ? qJ.copyWritten(cJ, ZJ) : null;
        let YJ = 0;
        for (; YJ < UJ;) {
          const JJ = YJ + FJ.R,
            cJ = JJ <= UJ ? AJ.getUint32(YJ, !0) : -1,
            qJ = cJ >>> 16;
          if (cJ < 0 || qJ > UJ - JJ) return this.crash(pJ, `event record at ${YJ} overruns its ${UJ} bytes`), dJ;
          const yJ = 65535 & cJ,
            SJ = cJ => AJ.getUint32(JJ + 4 * cJ, !0);
          if (yJ === FJ.T.RawMessage) {
            const JJ = qJ >= FJ.Ac.BYTES ? 65535 & SJ(1) : -1,
              cJ = JJ === FJ.Ac.STRING_TYPE,
              ZJ = qJ === (cJ ? FJ.Ac.STRING_TYPE_BYTES : FJ.Ac.BYTES) ? jJ(SJ(2), SJ(3)) : null,
              UJ = cJ && ZJ ? jJ(SJ(4), SJ(5)) : null;
            if (!ZJ || cJ && !UJ) return this.crash(pJ, `RawMessage at ${YJ} of ${qJ} bytes names bytes outside net-in`), dJ;
            this.netOffsets.push(YJ), eJ.push({
              type: "message",
              conn: SJ(0),
              JY: JJ,
              payloadKind: SJ(1) >>> 16,
              payload: ZJ,
              stringType: UJ ? TJ.decode(UJ) : null
            })
          } else if (yJ === FJ.T.CoreErrors) {
            var hJ, DJ;
            const JJ = qJ >= 4 ? SJ(0) : -1;
            if (JJ < 0 || JJ > FJ.I.PAIRS_MAX || qJ !== 4 * (FJ.I.FIXED_WORDS + FJ.I.PAIR_WORDS * JJ)) return this.crash(pJ, `CoreErrors at ${YJ} of ${qJ} bytes`), dJ;
            const cJ = [];
            for (let ZJ = 0; ZJ < JJ; ZJ++) cJ.push({
              code: SJ(1 + 2 * ZJ),
              detail: SJ(2 + 2 * ZJ)
            });
            null === (hJ = (DJ = this.handlers).onCoreErrors) || void 0 === hJ || hJ.call(DJ, cJ, SJ(1 + 2 * JJ))
          } else if (yJ === FJ.T.RenderReload) {
            var sJ, nJ;
            if (qJ !== FJ.Mc.BYTES) return this.crash(pJ, `RenderReload at ${YJ} of ${qJ} bytes`), dJ;
            null === (sJ = (nJ = this.handlers).onRenderReload) || void 0 === sJ || sJ.call(nJ, SJ(0), SJ(1), SJ(2))
          } else if (yJ === FJ.T.Images) {
            var GJ, fJ;
            null === (GJ = (fJ = this.handlers).onImages) || void 0 === GJ || GJ.call(fJ, new Uint8Array(XJ.slice(ZJ + JJ, ZJ + JJ + qJ)))
          } else if (yJ === FJ.T.ModelRequests)
            for (let ZJ = 0; ZJ < qJ >>> 2; ZJ++) {
              var xJ, rJ;
              null === (xJ = (rJ = this.handlers).onModelRequest) || void 0 === xJ || xJ.call(rJ, SJ(ZJ))
            } else if (yJ === FJ.T.ModelTaken) {
              var vJ, mJ;
              if (qJ < 4) return this.crash(pJ, `ModelTaken at ${YJ} of ${qJ} bytes`), dJ;
              const JJ = new Uint32Array((qJ >>> 2) - 1);
              for (let cJ = 0; cJ < JJ.length; cJ++) JJ[cJ] = SJ(1 + cJ);
              null === (vJ = (mJ = this.handlers).onModelTaken) || void 0 === vJ || vJ.call(mJ, SJ(0), JJ)
            } else if (yJ === FJ.T.TerrainTexturesWanted) {
            var QJ, EJ;
            if (0 !== qJ) return this.crash(pJ, `TerrainTexturesWanted at ${YJ} of ${qJ} bytes`), dJ;
            null === (QJ = (EJ = this.handlers).onTerrainTexturesWanted) || void 0 === QJ || QJ.call(EJ)
          } else if (yJ === FJ.T.KeepAliveDue) {
            var VJ, KJ;
            if (qJ > FJ.vb) return this.crash(pJ, `KeepAliveDue at ${YJ} of ${qJ} bytes`), dJ;
            null === (VJ = (KJ = this.handlers).onKeepAlive) || void 0 === VJ || VJ.call(KJ, new Uint8Array(XJ, ZJ + JJ, qJ).slice())
          } else if (yJ === FJ.T.ConnectionState) {
            if (qJ !== FJ.s) return this.crash(pJ, `ConnectionState at ${YJ} of ${qJ} bytes`), dJ;
            this.netOffsets.push(YJ), eJ.push({
              type: "connection",
              conn: SJ(0),
              phase: SJ(1),
              code: 0 | SJ(2)
            })
          } else if (yJ === FJ.T.EnvLighting || yJ === FJ.T.SkyImages) {
            if (qJ !== (yJ === FJ.T.EnvLighting ? FJ.O : FJ.id)) return this.crash(pJ, `event ${yJ} at ${YJ} of ${qJ} bytes`), dJ;
            this.envEvents.push({
              kind: yJ,
              payload: new Uint8Array(XJ.slice(ZJ + JJ, ZJ + JJ + qJ))
            })
          } else if (yJ === FJ.T.ReconnectGrace) {
            if (qJ !== FJ.hc) return this.crash(pJ, `ReconnectGrace at ${YJ} of ${qJ} bytes`), dJ;
            const JJ = SJ(2);
            this.graceEvents.push({
              conn: SJ(0),
              graceMs: SJ(1),
              sessionBased: 0 !== (JJ & FJ.Dc.SessionBased),
              replayOffer: 0 !== (JJ & FJ.Dc.ReplayOffer)
            })
          }
          YJ = JJ + (0, FJ.he)(qJ)
        }
        return eJ
      }
      forEachNetOut(JJ) {
        this.forEachOut(mJ, "net-out", FJ.lb.NetOutPtr, FJ.lb.NetOutLen, FJ.Jb, 0, ((cJ, ZJ, UJ, eJ) => {
          const XJ = (0, FJ.ae)(ZJ);
          XJ === FJ.Nb.Frame ? JJ((0, FJ.Yd)(ZJ), UJ) : this.crash(mJ, `net-out record at ${eJ} is kind ${XJ}, not a frame`)
        }))
      }
      forEachWorkerOut(JJ) {
        this.forEachOut(QJ, "worker-out", FJ.lb.WorkerOutPtr, FJ.lb.WorkerOutLen, FJ.wd, 4, ((cJ, ZJ, UJ, eJ) => {
          const XJ = 255 & cJ,
            AJ = XJ === FJ.Ld.Init ? this.initOf(UJ, eJ) : UJ;
          null !== AJ && JJ(XJ, cJ >>> 8 & 16777215, AJ)
        }))
      }
      initOf(JJ, cJ) {
        const ZJ = this.memory().buffer;
        if (JJ.byteLength !== FJ.ob) return this.crash(QJ, `worker-out Init record at ${cJ} is ${JJ.byteLength} bytes, not a view`), null;
        const UJ = new DataView(JJ.buffer, JJ.byteOffset, FJ.ob),
          eJ = UJ.getUint32(0, !0),
          XJ = UJ.getUint32(4, !0);
        return eJ + XJ > ZJ.byteLength ? (this.crash(QJ, `worker-out Init record at ${cJ} names ${XJ} bytes at ${eJ} outside ${ZJ.byteLength} bytes of memory`), null) : new Uint8Array(ZJ, eJ, XJ)
      }
      forEachOut(JJ, cJ, ZJ, UJ, eJ, XJ, AJ) {
        if (this.stopped || null === this.lastHeader) return;
        const qJ = this.headerView(),
          jJ = qJ[ZJ],
          YJ = qJ[UJ];
        if (0 === YJ) return;
        const hJ = this.memory().buffer;
        if (jJ % 4 !== 0 || jJ + YJ > hJ.byteLength) return void this.crash(JJ, `${cJ} of ${YJ} bytes at ${jJ} outside ${hJ.byteLength} bytes of memory`);
        const DJ = new DataView(hJ, jJ, YJ);
        let sJ = 0;
        for (; sJ < YJ;) {
          const ZJ = sJ + eJ,
            UJ = ZJ <= YJ ? DJ.getUint32(sJ + XJ, !0) : -1;
          if (UJ < 0 || UJ > YJ - ZJ) return void this.crash(JJ, `${cJ} record at ${sJ} overruns its ${YJ} bytes`);
          if (AJ(DJ.getUint32(sJ, !0), DJ.getUint32(sJ + 4, !0), new Uint8Array(hJ, jJ + ZJ, UJ), sJ), this.stopped) return;
          sJ = ZJ + (0, FJ.he)(UJ)
        }
      }
      forEachEvent(JJ) {
        if (this.stopped || null === this.lastHeader) return;
        const cJ = this.headerView(),
          ZJ = cJ[FJ.lb.EventsPtr],
          UJ = cJ[FJ.lb.EventsLen];
        if (0 === UJ) return;
        const eJ = this.memory().buffer;
        if (ZJ % 4 !== 0 || ZJ + UJ > eJ.byteLength) return void this.crash(pJ, `events of ${UJ} bytes at ${ZJ} outside ${eJ.byteLength} bytes of memory`);
        const XJ = new DataView(eJ, ZJ, UJ);
        let AJ = 0;
        for (; AJ < UJ;) {
          const cJ = AJ + FJ.R,
            ZJ = cJ <= UJ ? XJ.getUint32(AJ, !0) : -1,
            eJ = ZJ >>> 16;
          if (ZJ < 0 || eJ > UJ - cJ) return void this.crash(pJ, `event record at ${AJ} overruns its ${UJ} bytes`);
          JJ(65535 & ZJ, XJ, cJ, eJ), AJ = cJ + (0, FJ.he)(eJ)
        }
      }
      crashOn(JJ, cJ) {
        cJ instanceof UJ.e ? this.crash(pJ, cJ.message) : this.crash(JJ, cJ)
      }
      crash(JJ, cJ) {
        this.stopped || (this.stopped = !0, this.handlers.onCrash({
          site: JJ,
          error: cJ,
          header: this.lastHeader
        }))
      }
      headerWord(JJ) {
        return this.stopped || null === this.lastHeader ? 0 : this.headerView()[JJ]
      }
      headerView() {
        const JJ = this.memory().buffer;
        return JJ !== this.headerBuffer && (this.headerBuffer = JJ, this.header = new Uint32Array(JJ, this.core.Us(), FJ.ib)), this.header
      }
    }
  },
  39679: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => XJ,
      g: () => eJ
    });
    var FJ = ZJ(5971);
    let UJ = null;

    function eJ(JJ) {
      UJ = {
        scanned: !1
      };
      try {
        return JJ()
      } finally {
        UJ = null
      }
    }

    function XJ() {
      const JJ = UJ;
      if (null === JJ) return (0, FJ.d)();
      const cJ = (0, FJ.d)(!JJ.scanned);
      return JJ.scanned = !0, cJ
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);