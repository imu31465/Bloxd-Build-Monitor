export const id = 227;
export const ids = [227];
export const modules = {
  41910: (UU, XU, zU) => {
    function cU(UU, XU, zU) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(UU, XU).getContext("2d", zU);
      const cU = document.createElement("canvas");
      return cU.width = UU, cU.height = XU, cU.getContext("2d", zU)
    }

    function yU(UU, XU) {
      return UU.getContext("2d", XU)
    }
    zU.d(XU, {
      c: () => yU,
      d: () => cU
    })
  },
  41867: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => FU
    });
    const cU = 1 << 20,
      yU = 1 << 21,
      QU = 1024,
      AU = 2048;

    function FU(UU, XU, zU) {
      const FU = UU + cU,
        oU = XU + QU,
        DU = zU + cU;
      return FU < 0 || FU >= yU || DU < 0 || DU >= yU || oU < 0 || oU >= AU ? -1 : (FU * yU + DU) * AU + oU
    }
  },
  41865: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => cU,
      d: () => AU,
      h: () => yU,
      i: () => QU,
      j: () => EU,
      m: () => DU,
      n: () => oU,
      q: () => FU
    });
    zU(3854);
    zU(41867);

    function cU(UU) {}

    function yU(UU) {}

    function QU(UU) {}

    function AU(UU) {}

    function FU(UU) {}

    function oU(UU, XU, zU) {}

    function DU(UU) {}

    function EU(UU) {}
  },
  41863: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => GU,
      e: () => pU,
      h: () => lU,
      l: () => eU,
      o: () => qU,
      r: () => OU,
      t: () => kU,
      w: () => tU,
      y: () => gU,
      C: () => LU,
      F: () => VU,
      J: () => RU,
      K: () => iU,
      L: () => mU,
      N: () => SU,
      Q: () => uU
    });
    var cU = zU(5318),
      yU = zU(41699),
      QU = (zU(41865), zU(13));
    class AU {
      constructor(UU, XU) {
        this.memory = UU, this.access = XU, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.xY = 0, this.u32 = new QU.l(0), this.f32 = new QU.g(0), this.u8 = new QU.e(0), this.dataView = new QU.i(new ArrayBuffer(0)), this.refresh()
      }
      refresh() {
        this.ptr = this.access.ptr(), this.xY = this.access.xY(), this.buffer = (0, QU.K)(this.memory()), this.u32 = new QU.l(this.buffer, this.ptr, this.xY >>> 2), this.f32 = new QU.g(this.buffer, this.ptr, this.xY >>> 2), this.u8 = new QU.e(this.buffer, this.ptr, this.xY), this.dataView = new QU.i(this.buffer, this.ptr, this.xY)
      }
      ensureViews() {
        (0, QU.K)(this.memory()) !== this.buffer && this.refresh()
      }
      get view() {
        return this.ensureViews(), this.dataView
      }
      room(UU) {
        return !!this.fits(UU) || (this.dropped++, !1)
      }
      fits(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.cursor;
        this.ensureViews();
        const zU = XU + UU;
        return zU <= this.xY || zU <= cU.Gc && 0 !== this.access.reserve(zU) && (this.refresh(), zU <= this.xY)
      }
      consume(UU) {
        const XU = this.cursor - UU;
        XU > 0 && UU > 0 && (this.ensureViews(), this.u8.copyWithin(0, UU, this.cursor)), this.cursor = XU > 0 ? XU : 0
      }
      writeRecord(UU, XU, zU, yU, QU) {
        if (!this.room(cU.sb)) return !1;
        const AU = this.cursor >>> 2;
        return this.u32[AU] = 65535 & UU | (65535 & XU) << 16, this.f32[AU + 1] = zU, this.f32[AU + 2] = yU, this.u32[AU + 3] = QU >>> 0, this.cursor += cU.sb, !0
      }
      writeOptions(UU, XU) {
        const zU = XU.byteLength,
          yU = cU.sb + (0, cU.De)(zU);
        if (!this.fits(yU)) return !1;
        const QU = this.cursor,
          AU = QU >>> 2;
        this.u32[AU] = cU.tb.Options, this.u32[AU + 1] = zU, this.u32[AU + 2] = 0, this.u32[AU + 3] = UU >>> 0;
        const FU = QU + cU.sb;
        return this.u8.set(XU, FU), this.u8.fill(0, FU + zU, QU + yU), this.cursor += yU, !0
      }
      writeWorkerRecord(UU, XU, zU, yU, QU, AU) {
        const FU = AU.byteLength,
          oU = cU.Sd + (0, cU.De)(FU);
        if (FU > cU.Od) return this.dropped++, !1;
        if (!this.room(oU)) return !1;
        const DU = this.cursor,
          EU = DU >>> 2;
        this.u32[EU] = UU >>> 0, this.u32[EU + 1] = 65535 & XU | (65535 & zU) << 16, this.u32[EU + 2] = yU >>> 0, this.u32[EU + 3] = QU >>> 0, this.u32[EU + 4] = FU;
        const YU = DU + cU.Sd;
        return this.u8.set(AU, YU), this.u8.fill(0, YU + FU, DU + oU), this.cursor += oU, !0
      }
      written() {
        return this.ensureViews(), this.u8.subarray(0, this.cursor)
      }
      writeFrame(UU, XU) {
        return this.writeNet(cU.$b.Frame, UU, XU)
      }
      writeOpen(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(cU.$b.Open, UU, oU(XU))
      }
      writeClose(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(cU.$b.Close, UU, oU(XU))
      }
      writeNet(UU, XU, zU) {
        const yU = zU.byteLength,
          QU = cU._b + (0, cU.De)(yU);
        if (yU > cU.Vb) return this.dropped++, !1;
        if (!this.room(QU)) return !1;
        const AU = this.cursor;
        this.u32[AU >>> 2] = yU, this.u32[1 + (AU >>> 2)] = (0, cU.ve)(UU, XU);
        const FU = AU + cU._b;
        return this.u8.set(zU, FU), this.u8.fill(0, FU + yU, AU + QU), this.cursor += QU, !0
      }
      gY(UU, XU, zU) {
        const yU = cU.q + (0, cU.De)(zU);
        if (!this.room(yU)) return -1;
        const QU = this.cursor;
        this.u32[QU >>> 2] = 65535 & UU | (65535 & XU) << 16, this.u32[1 + (QU >>> 2)] = zU;
        const AU = QU + cU.q;
        return this.u8.fill(0, AU, QU + yU), this.cursor += yU, AU
      }
      growForCmd(UU) {
        return this.fits(cU.q + (0, cU.De)(UU), 0)
      }
      writeCmd(UU, XU, zU) {
        const cU = this.gY(UU, XU, zU.byteLength);
        return !(cU < 0) && (this.u8.set(zU, cU), !0)
      }
      copyWritten(UU, XU) {
        return this.ensureViews(), this.u8.slice(UU, UU + XU)
      }
    }
    const FU = new QU.e(0);

    function oU(UU) {
      if (0 === UU) return FU;
      const XU = new QU.e(cU.Yb);
      for (let zU = 0; zU < cU.Yb; zU++) XU[zU] = UU >>> 8 * zU & 255;
      return XU
    }
    class DU {
      constructor(UU, XU) {
        this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new AU(XU, {
          ptr: () => UU.AN(),
          xY: () => UU.wAU(),
          reserve: XU => UU.VAU(XU)
        }), this.net = new AU(XU, {
          ptr: () => UU.HAU(),
          xY: () => UU.iAU(),
          reserve: XU => UU.sAU(XU)
        }), this.worker = new AU(XU, {
          ptr: () => UU.YFU(),
          xY: () => UU.EFU(),
          reserve: XU => UU.nAU(XU)
        }), this.cmd = new AU(XU, {
          ptr: () => UU.BAU(),
          xY: () => UU.kAU(),
          reserve: XU => UU.GAU(XU)
        })
      }
      reset(UU, XU, zU) {
        this.input.consume(UU), this.worker.consume(XU), this.cmd.consume(zU)
      }
    }
    var EU = zU(36981),
      YU = zU(2588),
      NU = zU(5315),
      IU = zU(41871);
    const pU = "coreFrame",
      aU = "fatalStatus",
      tU = "otherCall",
      gU = "coreRings",
      kU = "netIn",
      GU = "abi",
      BU = "netOut",
      ZU = "workerOut",
      RU = "worldgenHost",
      PU = "eventWalker",
      WU = "netEvent",
      dU = "envEvent",
      LU = "sharedTables",
      eU = "inputAction",
      CU = "frameSends",
      wU = new Set([PU, WU, dU, CU, eU, LU]),
      qU = "wasmMemory",
      OU = "meshHost";

    function SU(UU, XU) {
      UU.forEachWorkerOut(((zU, yU, QU) => {
        if ((0, cU.oe)(zU)) try {
          var AU;
          null === (AU = XU.worldgen) || void 0 === AU || AU.take(zU, QU)
        } catch (oU) {
          UU.crash(RU, oU)
        } else try {
          var FU;
          null === (FU = XU.mesh) || void 0 === FU || FU.take(zU, yU, QU)
        } catch (oU) {
          UU.crash(OU, oU)
        }
      }))
    }
    const rU = 1048576;

    function uU(UU, XU) {
      let zU = !1;
      const cU = () => {
        zU = !1, XU()
      };
      return () => {
        !zU && UU.cursor >= rU && (zU = !0, queueMicrotask(cU))
      }
    }
    const fU = new Set([aU, tU, RU, OU]);

    function iU(UU) {
      return wU.has(UU.site) ? UU.error instanceof WebAssembly.RuntimeError || (0, yU.l)(UU.error) : !fU.has(UU.site) && UU.error instanceof Error
    }
    const HU = "events",
      MU = [],
      vU = "debugLog",
      VU = "terrainTextures",
      sU = "sunShadowTextures",
      nU = new TextDecoder;

    function mU(UU, XU) {
      const {
        site: zU,
        error: yU,
        header: QU
      } = UU, AU = QU ? (0, cU.ke)(QU.lastError) : "noFrame", FU = `CORE-${zU===aU?AU:zU}`, oU = null === yU || void 0 === yU ? "" : ` ${(0,EU.l)(yU)}`, DU = {
        site: zU,
        wasmBuild: XU.wasm,
        clientVersion: XU.client
      };
      return QU && (DU.status = String(QU.status), DU.lastError = AU, DU.lastErrorCode = String(QU.lastError), DU.lastErrorDetail = String(QU.lastErrorDetail), DU.errorCount = String(QU.errorCount), DU.frameIndex = String(QU.frameIndex), DU.tickIndex = String(QU.tickIndex)), {
        code: FU,
        message: `core ${zU}, last error ${AU};${oU}`,
        details: DU
      }
    }
    class lU {
      constructor(UU, XU, zU) {
        this.core = UU, this.memory = XU, this.handlers = zU, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.loadCountsBuffer = null, this.loadCounts = new Uint32Array(0), this.unsentUiPrefs = null, this.eventWalker = null, this.netOffsets = [], this.frameEvents = {
          ptr: 0,
          len: 0,
          net: MU,
          netOffsets: this.netOffsets,
          kind: "none"
        }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.atSendsStop = !1, this.rings = new DU(UU, XU)
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
          return this.core.LAU(UU)
        } catch (XU) {
          return this.crash(pU, XU), !1
        }
      }
      get isStopped() {
        return this.stopped
      }
      frame(UU, XU) {
        var zU;
        let QU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.stopped) return !1;
        if (!this.writePendingInput()) return !1;
        const {
          input: AU,
          net: FU,
          worker: oU,
          cmd: DU
        } = this.rings, EU = FU.cursor, YU = XU && !this.drawsHeld;
        let tU = cU.L.Fatal;
        const gU = AU.cursor,
          GU = oU.cursor,
          BU = DU.cursor;
        let ZU, RU = null;
        const dU = this.handlers.onSends;
        try {
          const XU = (YU ? cU.cb.Draws : 0) | (QU ? cU.cb.NetAll : 0) | (dU ? cU.cb.StopForSends : 0);
          tU = (0, IU.g)((() => {
            let zU = this.core.frame(UU, gU, FU.cursor, GU, XU, BU);
            for (; zU === cU.qd && dU;) {
              var yU;
              if (ZU ??= null === (yU = this.gameHost) || void 0 === yU ? void 0 : yU.takeFault(), void 0 === ZU && !this.takeSends(dU)) return cU.L.Fatal;
              zU = this.core.ht()
            }
            return zU
          }))
        } catch (nU) {
          RU = {
            error: nU
          }
        }
        ZU ??= null === (zU = this.gameHost) || void 0 === zU ? void 0 : zU.takeFault();
        const LU = this.stopped || null !== RU || void 0 !== ZU;
        this.rings.reset(LU ? AU.cursor : gU, LU ? oU.cursor : GU, LU ? DU.cursor : BU);
        const eU = null === RU && void 0 === ZU,
          CU = eU && !this.stopped && tU === cU.L.Fatal && 0 === this.core.CI(),
          wU = eU && !CU ? this.headerView() : null,
          qU = CU ? {
            ...null !== (OU = this.lastHeader) && void 0 !== OU ? OU : (0, cU.Ee)(new Uint32Array(cU.fb)),
            status: cU.L.Fatal,
            lastError: cU.K.CoreBusy,
            lastErrorDetail: 0
          } : null === wU ? null : (0, cU.Ee)(wU);
        var OU;
        null !== qU && (this.lastHeader = qU);
        const SU = null !== qU && tU !== cU.L.Fatal,
          rU = SU && null !== wU ? wU[cU.jb.NetInKept] : 0,
          uU = SU && rU <= EU && rU % 4 === 0 ? rU : null;
        var fU, iU;
        null !== qU && null !== uU && tU === cU.L.Errors && (null === (fU = (iU = this.handlers).onErrors) || void 0 === fU || fU.call(iU, qU));
        const HU = null === uU ? MU : this.readEvents(EU);
        if (FU.consume(EU - (null !== uU && void 0 !== uU ? uU : 0)), this.netKept = null !== uU && void 0 !== uU ? uU : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== RU) return this.crash(pU, void 0 === ZU || ZU instanceof yU.c ? RU.error : ZU), !1;
        if (void 0 !== ZU || null === qU) return this.crashOn(pU, ZU), !1;
        if (CU) return this.crash(aU, null), !1;
        const vU = this.headerView()[cU.jb.FrameDraw];
        if (this.lastFrameKind = (0, NU.g)(YU, vU), tU === cU.L.Fatal) return this.crash(aU, null), !1;
        if (null === uU) return this.crash(kU, `the core kept ${rU} of ${EU} net-in bytes`), !1;
        if (this.eventWalker) {
          if (this.stopped) return !1;
          const UU = this.frameEvents,
            XU = this.headerView();
          UU.ptr = XU[cU.jb.EventsPtr], UU.len = XU[cU.jb.EventsLen], UU.net = HU, UU.kind = this.lastFrameKind;
          try {
            this.eventWalker(UU)
          } catch (nU) {
            return this.crashOn(PU, nU), !1
          }
          return this.handEnvEvents()
        }
        for (const cU of HU) {
          if (this.stopped) return !1;
          try {
            var VU, sU;
            null === (VU = (sU = this.handlers).onNetEvent) || void 0 === VU || VU.call(sU, cU)
          } catch (nU) {
            return this.crashOn(WU, nU), !1
          }
        }
        return this.handEnvEvents()
      }
      handEnvEvents() {
        for (const QU of this.graceEvents) {
          if (this.stopped) return !1;
          try {
            var UU, XU;
            null === (UU = (XU = this.handlers).onReconnectGrace) || void 0 === UU || UU.call(XU, QU)
          } catch (yU) {
            return this.crashOn(WU, yU), !1
          }
        }
        for (const QU of this.envEvents) {
          if (this.stopped) return !1;
          try {
            var zU, cU;
            null === (zU = (cU = this.handlers).onEnvEvent) || void 0 === zU || zU.call(cU, QU)
          } catch (yU) {
            return this.crashOn(dU, yU), !1
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
          const XU = this.unsentUiPrefs;
          XU && UU.writeRecord(cU.tb.UiPrefs, 0, XU.nametagCutDistance, 0, (0, cU.Fe)(XU)) && (this.unsentUiPrefs = null);
          const zU = this.unsentEnvPrefs;
          zU && UU.writeRecord(cU.tb.EnvPrefs, (0, cU.le)(zU), zU.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
          const yU = this.unsentLookPrefs;
          yU && UU.writeRecord(cU.tb.Sensitivity, 0, yU.mouse, yU.touch, (0, YU.m)(yU.fovPercent)) && (this.unsentLookPrefs = null);
          let QU = 0;
          for (const {
              aux: cU,
              payload: AU
            }
            of this.unsentOptions) {
            if (!UU.writeOptions(cU, AU)) {
              if (UU.cursor > 0) break;
              this.optionsDropped++
            }
            QU++
          }
          QU > 0 && this.unsentOptions.splice(0, QU)
        } catch (XU) {
          return this.crash(gU, XU), !1
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
      queueOptions(UU, XU) {
        return !this.isStopped && (XU.byteLength > cU.dc.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
          aux: UU,
          payload: XU
        }), !0))
      }
      setChunkCap(UU) {
        return this.callCore("setChunkCap", null, (XU => XU.KAU(UU)))
      }
      shedMemory(UU) {
        const XU = this.callCore("shedMemory", null, (XU => XU.yFU(UU)));
        return 0 === XU ? null : XU
      }
      addDistanceInUse() {
        const UU = this.callCore("addDistanceInUse", null, (UU => UU.IAU()));
        return 0 === UU ? null : UU
      }
      setChunkAddDistance(UU, XU) {
        return this.callCore("setChunkAddDistance", !1, (zU => zU.jAU(UU, XU)))
      }
      setGameHost(UU) {
        return this.callCore("setGameHost", !1, (XU => (XU.dAU(UU), this.gameHost = UU, !0)))
      }
      setAntiCheatProbes(UU) {
        return this.callCore("setAntiCheatProbes", !1, (XU => XU.xAU(UU)))
      }
      setAmbientOcclusion(UU) {
        this.callCore("setAmbientOcclusion", void 0, (XU => {
          XU.lAU(UU)
        }))
      }
      setPoseLod(UU) {
        this.callCore("setPoseLod", void 0, (XU => {
          XU.TAU(UU)
        }))
      }
      setDebugLog(UU, XU) {
        this.callCore(vU, void 0, (zU => {
          zU.Jt(UU, XU)
        }))
      }
      takeDebugLog(UU) {
        return this.callCore(vU, [], (XU => XU.jt(UU)))
      }
      setTextureLayers(UU) {
        return this.callCore("setTextureLayers", !1, (XU => XU.cFU(UU)))
      }
      setBlockColours(UU) {
        let {
          blocks: XU,
          counts: zU,
          values: cU
        } = UU;
        return this.callCore("setBlockColours", !1, (UU => UU.JcU(XU, zU, cU)))
      }
      terrainTextureNames() {
        return this.callCore(VU, [], (UU => UU.DFU()))
      }
      setTerrainTextures(UU, XU, zU, cU) {
        return this.callCore(VU, !1, (yU => yU.zFU(UU, zU, XU, cU)))
      }
      setShaderPack(UU, XU, zU, cU, yU, QU) {
        return this.callCore("setShaderPack", !1, (AU => {
          var FU, oU;
          return null !== (FU = null === (oU = AU.QyU) || void 0 === oU ? void 0 : oU.call(AU, UU, XU, zU, cU, yU, QU)) && void 0 !== FU && FU
        }))
      }
      sunShadowWantedTextures() {
        return this.callCore(sU, null, (UU => {
          var XU, zU;
          return null !== (XU = null === (zU = UU.QFU) || void 0 === zU ? void 0 : zU.call(UU)) && void 0 !== XU ? XU : null
        }))
      }
      setSunShadowTexture(UU, XU, zU, cU, yU) {
        this.callCore(sU, void 0, (QU => {
          var AU;
          null === (AU = QU.UFU) || void 0 === AU || AU.call(QU, UU, XU, zU, cU, yU)
        }))
      }
      takeSunShadowWarnings() {
        return this.callCore(sU, [], (UU => {
          var XU, zU;
          return null !== (XU = null === (zU = UU.FFU) || void 0 === zU ? void 0 : zU.call(UU)) && void 0 !== XU ? XU : []
        }))
      }
      sunShadowsHeld() {
        return this.callCore(sU, null, (UU => {
          var XU, zU;
          return null !== (XU = null === (zU = UU.AFU) || void 0 === zU ? void 0 : zU.call(UU)) && void 0 !== XU ? XU : null
        }))
      }
      callCore(UU, XU, zU) {
        if (this.stopped) return XU;
        try {
          return zU(this.core)
        } catch (cU) {
          return this.crash(UU, cU), XU
        }
      }
      readEvents(UU) {
        this.netOffsets.length = 0;
        const XU = this.headerView(),
          zU = XU[cU.jb.EventsPtr],
          yU = XU[cU.jb.EventsLen];
        if (this.envEvents.length = 0, this.graceEvents.length = 0, 0 === yU) return MU;
        const QU = [],
          AU = this.memory().buffer;
        if (zU % 4 !== 0 || zU + yU > AU.byteLength) return this.crash(HU, `events of ${yU} bytes at ${zU} outside ${AU.byteLength} bytes of memory`), MU;
        const FU = new DataView(AU, zU, yU),
          oU = this.rings.net,
          DU = (XU, zU) => XU + zU <= UU ? oU.copyWritten(XU, zU) : null;
        let EU = 0;
        for (; EU < yU;) {
          const UU = EU + cU.V,
            XU = UU <= yU ? FU.getUint32(EU, !0) : -1,
            oU = XU >>> 16;
          if (XU < 0 || oU > yU - UU) return this.crash(HU, `event record at ${EU} overruns its ${yU} bytes`), MU;
          const eU = 65535 & XU,
            CU = XU => FU.getUint32(UU + 4 * XU, !0);
          if (eU === cU.W.RawMessage) {
            const UU = oU >= cU.Kc.BYTES ? 65535 & CU(1) : -1,
              XU = UU === cU.Kc.STRING_TYPE,
              zU = oU === (XU ? cU.Kc.STRING_TYPE_BYTES : cU.Kc.BYTES) ? DU(CU(2), CU(3)) : null,
              yU = XU && zU ? DU(CU(4), CU(5)) : null;
            if (!zU || XU && !yU) return this.crash(HU, `RawMessage at ${EU} of ${oU} bytes names bytes outside net-in`), MU;
            this.netOffsets.push(EU), QU.push({
              type: "message",
              conn: CU(0),
              TE: UU,
              payloadKind: CU(1) >>> 16,
              payload: zU,
              stringType: yU ? nU.decode(yU) : null
            })
          } else if (eU === cU.W.CoreErrors) {
            var YU, NU;
            const UU = oU >= 4 ? CU(0) : -1;
            if (UU < 0 || UU > cU.H.PAIRS_MAX || oU !== 4 * (cU.H.FIXED_WORDS + cU.H.PAIR_WORDS * UU)) return this.crash(HU, `CoreErrors at ${EU} of ${oU} bytes`), MU;
            const XU = [];
            for (let zU = 0; zU < UU; zU++) XU.push({
              code: CU(1 + 2 * zU),
              detail: CU(2 + 2 * zU)
            });
            null === (YU = (NU = this.handlers).onCoreErrors) || void 0 === YU || YU.call(NU, XU, CU(1 + 2 * UU))
          } else if (eU === cU.W.RenderReload) {
            var IU, pU;
            if (oU !== cU.Yc.BYTES) return this.crash(HU, `RenderReload at ${EU} of ${oU} bytes`), MU;
            null === (IU = (pU = this.handlers).onRenderReload) || void 0 === IU || IU.call(pU, CU(0), CU(1), CU(2))
          } else if (eU === cU.W.JoinPreloadEnded) {
            var aU, tU;
            if (oU !== cU.Bb.BYTES) return this.crash(HU, `JoinPreloadEnded at ${EU} of ${oU} bytes`), MU;
            null === (aU = (tU = this.handlers).onJoinPreloadEnded) || void 0 === aU || aU.call(tU, {
              chunks: CU(cU.Bb.CHUNKS),
              bytes: CU(cU.Bb.BYTES_HELD),
              asked: CU(cU.Bb.ASKED),
              replaced: CU(cU.Bb.REPLACED),
              dropped: CU(cU.Bb.DROPPED)
            })
          } else if (eU === cU.W.Images) {
            var gU, kU;
            null === (gU = (kU = this.handlers).onImages) || void 0 === gU || gU.call(kU, new Uint8Array(AU.slice(zU + UU, zU + UU + oU)))
          } else if (eU === cU.W.ModelRequests)
            for (let zU = 0; zU < oU >>> 2; zU++) {
              var GU, BU;
              null === (GU = (BU = this.handlers).onModelRequest) || void 0 === GU || GU.call(BU, CU(zU))
            } else if (eU === cU.W.ModelTaken) {
              var ZU, RU;
              if (oU < 4) return this.crash(HU, `ModelTaken at ${EU} of ${oU} bytes`), MU;
              const UU = new Uint32Array((oU >>> 2) - 1);
              for (let XU = 0; XU < UU.length; XU++) UU[XU] = CU(1 + XU);
              null === (ZU = (RU = this.handlers).onModelTaken) || void 0 === ZU || ZU.call(RU, CU(0), UU)
            } else if (eU === cU.W.TerrainTexturesWanted) {
            var PU, WU;
            if (0 !== oU) return this.crash(HU, `TerrainTexturesWanted at ${EU} of ${oU} bytes`), MU;
            null === (PU = (WU = this.handlers).onTerrainTexturesWanted) || void 0 === PU || PU.call(WU)
          } else if (eU === cU.W.KeepAliveDue) {
            var dU, LU;
            if (oU > cU.Fb) return this.crash(HU, `KeepAliveDue at ${EU} of ${oU} bytes`), MU;
            null === (dU = (LU = this.handlers).onKeepAlive) || void 0 === dU || dU.call(LU, new Uint8Array(AU, zU + UU, oU).slice())
          } else if (eU === cU.W.ConnectionState) {
            if (oU !== cU.u) return this.crash(HU, `ConnectionState at ${EU} of ${oU} bytes`), MU;
            this.netOffsets.push(EU), QU.push({
              type: "connection",
              conn: CU(0),
              phase: CU(1),
              code: 0 | CU(2)
            })
          } else if (eU === cU.W.EnvLighting || eU === cU.W.SkyImages) {
            if (oU !== (eU === cU.W.EnvLighting ? cU.R : cU.vd)) return this.crash(HU, `event ${eU} at ${EU} of ${oU} bytes`), MU;
            this.envEvents.push({
              kind: eU,
              payload: new Uint8Array(AU.slice(zU + UU, zU + UU + oU))
            })
          } else if (eU === cU.W.ReconnectGrace) {
            if (oU !== cU.qc) return this.crash(HU, `ReconnectGrace at ${EU} of ${oU} bytes`), MU;
            const UU = CU(2);
            this.graceEvents.push({
              conn: CU(0),
              graceMs: CU(1),
              sessionBased: 0 !== (UU & cU.Oc.SessionBased),
              replayOffer: 0 !== (UU & cU.Oc.ReplayOffer)
            })
          }
          EU = UU + (0, cU.De)(oU)
        }
        return QU
      }
      takeSends(UU) {
        this.atSendsStop = !0;
        try {
          UU()
        } catch (XU) {
          this.crashOn(CU, XU)
        } finally {
          this.atSendsStop = !1
        }
        return !this.stopped
      }
      forEachNetOut(UU) {
        this.forEachOut(BU, "net-out", cU.jb.NetOutPtr, cU.jb.NetOutLen, cU._b, 0, ((XU, zU, yU, QU) => {
          const AU = (0, cU.ue)(zU);
          AU === cU.$b.Frame ? UU((0, cU.se)(zU), yU) : this.crash(BU, `net-out record at ${QU} is kind ${AU}, not a frame`)
        }))
      }
      forEachWorkerOut(UU) {
        this.forEachOut(ZU, "worker-out", cU.jb.WorkerOutPtr, cU.jb.WorkerOutLen, cU.Md, 4, ((XU, zU, yU, QU) => {
          const AU = 255 & XU,
            FU = AU === cU.ae.Init ? this.initOf(yU, QU) : yU;
          null !== FU && UU(AU, XU >>> 8 & 16777215, FU)
        }))
      }
      initOf(UU, XU) {
        const zU = this.memory().buffer;
        if (UU.byteLength !== cU.mb) return this.crash(ZU, `worker-out Init record at ${XU} is ${UU.byteLength} bytes, not a view`), null;
        const yU = new DataView(UU.buffer, UU.byteOffset, cU.mb),
          QU = yU.getUint32(0, !0),
          AU = yU.getUint32(4, !0);
        return QU + AU > zU.byteLength ? (this.crash(ZU, `worker-out Init record at ${XU} names ${AU} bytes at ${QU} outside ${zU.byteLength} bytes of memory`), null) : new Uint8Array(zU, QU, AU)
      }
      forEachOut(UU, XU, zU, yU, QU, AU, FU) {
        if (!this.headerReadable()) return;
        const oU = this.headerView(),
          DU = oU[zU],
          EU = oU[yU];
        if (0 === EU) return;
        const YU = this.memory().buffer;
        if (DU % 4 !== 0 || DU + EU > YU.byteLength) return void this.crash(UU, `${XU} of ${EU} bytes at ${DU} outside ${YU.byteLength} bytes of memory`);
        const NU = new DataView(YU, DU, EU);
        let IU = 0;
        for (; IU < EU;) {
          const zU = IU + QU,
            yU = zU <= EU ? NU.getUint32(IU + AU, !0) : -1;
          if (yU < 0 || yU > EU - zU) return void this.crash(UU, `${XU} record at ${IU} overruns its ${EU} bytes`);
          if (FU(NU.getUint32(IU, !0), NU.getUint32(IU + 4, !0), new Uint8Array(YU, DU + zU, yU), IU), this.stopped) return;
          IU = zU + (0, cU.De)(yU)
        }
      }
      forEachEvent(UU) {
        if (this.stopped || null === this.lastHeader) return;
        const XU = this.headerView(),
          zU = XU[cU.jb.EventsPtr],
          yU = XU[cU.jb.EventsLen];
        if (0 === yU) return;
        const QU = this.memory().buffer;
        if (zU % 4 !== 0 || zU + yU > QU.byteLength) return void this.crash(HU, `events of ${yU} bytes at ${zU} outside ${QU.byteLength} bytes of memory`);
        const AU = new DataView(QU, zU, yU);
        let FU = 0;
        for (; FU < yU;) {
          const XU = FU + cU.V,
            zU = XU <= yU ? AU.getUint32(FU, !0) : -1,
            QU = zU >>> 16;
          if (zU < 0 || QU > yU - XU) return void this.crash(HU, `event record at ${FU} overruns its ${yU} bytes`);
          UU(65535 & zU, AU, XU, QU), FU = XU + (0, cU.De)(QU)
        }
      }
      crashOn(UU, XU) {
        XU instanceof yU.c ? this.crash(HU, XU.message) : this.crash(UU, XU)
      }
      crash(UU, XU) {
        this.stopped || (this.stopped = !0, this.handlers.onCrash({
          site: UU,
          error: XU,
          header: this.lastHeader
        }))
      }
      headerWord(UU) {
        return this.headerReadable() ? this.headerView()[UU] : 0
      }
      headerReadable() {
        return !this.stopped && (null !== this.lastHeader || this.atSendsStop)
      }
      readLoadCounts(UU) {
        const XU = this.loadCountWords();
        return null !== XU && (UU.chunksReceived = XU[cU.Pb.ChunksReceived], UU.chunksCancelled = this.headerView()[cU.jb.ChunksCancelled], UU.chunksStored = XU[cU.Pb.ChunksStored], UU.jobsSent = XU[cU.Pb.JobsSent], UU.jobsDone = XU[cU.Pb.JobsDone], UU.jobsInFlight = XU[cU.Pb.JobsInFlight], UU.workersLive = XU[cU.Pb.WorkersLive], UU.workersRetired = XU[cU.Pb.WorkersRetired], !0)
      }
      readViewQueuedPrograms() {
        var UU, XU;
        const zU = null !== (UU = null === (XU = this.loadCountWords()) || void 0 === XU ? void 0 : XU[cU.Pb.ViewQueuedPrograms]) && void 0 !== UU ? UU : 0;
        return 0 === zU ? null : zU - 1
      }
      readFirstViewWait(UU, XU) {
        const zU = this.loadCountWords();
        return null === zU ? null : [zU[cU.Pb.FirstViewLinkMs], zU[cU.Pb.FirstViewTerrainMs], zU[cU.Pb.FirstViewHeldMs], zU[cU.Pb.FirstViewOtherMs], zU[cU.Pb.FirstViewGaps], zU[cU.Pb.FirstViewGapMs], UU, XU]
      }
      loadCountWords() {
        if (this.stopped || null === this.lastHeader) return null;
        const UU = this.core.xt();
        if (0 === UU) return null;
        const XU = this.memory().buffer;
        return XU !== this.loadCountsBuffer && (this.loadCountsBuffer = XU, this.loadCounts = new Uint32Array(XU, UU, cU.Jb)), this.loadCounts
      }
      headerView() {
        const UU = this.memory().buffer;
        return UU !== this.headerBuffer && (this.headerBuffer = UU, this.header = new Uint32Array(UU, this.core.CI(), cU.fb)), this.header
      }
    }
  },
  41871: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => AU,
      g: () => QU
    });
    var cU = zU(5179);
    let yU = null;

    function QU(UU) {
      yU = {
        scanned: !1
      };
      try {
        return UU()
      } finally {
        yU = null
      }
    }

    function AU() {
      const UU = yU;
      if (null === UU) return (0, cU.f)();
      const XU = (0, cU.f)(!UU.scanned);
      return UU.scanned = !0, XU
    }
  },
  41927: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => cU
    });
    const cU = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  41947: (UU, XU, zU) => {
    function cU() {
      return zU(41955)
    }

    function yU() {
      return zU(41957)
    }

    function QU(UU) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(UU)
    }
    zU.d(XU, {
      d: () => QU,
      e: () => cU,
      f: () => yU
    })
  },
  36981: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => FU,
      h: () => DU,
      j: () => AU,
      l: () => YU
    });
    var cU = zU(36972),
      yU = zU(13);
    const QU = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function AU(UU) {
      if (UU instanceof WebAssembly.RuntimeError) return !0;
      const XU = UU instanceof Error ? UU.stack : void 0;
      return "string" === typeof XU && QU.test(XU)
    }

    function FU(UU, XU, zU) {
      var yU;
      const AU = UU instanceof Error ? UU.name : "thrown",
        FU = (UU instanceof Error && null !== (yU = UU.stack) && void 0 !== yU ? yU : "").split("\n").filter((UU => QU.test(UU))).slice(0, 8).map((UU => UU.trim())),
        oU = null === XU ? "wasm memory unknown" : `wasm memory ${Math.round(XU/2**20)} MB`,
        DU = null === zU.panic ? "" : `, panic: ${(0,cU.e)(zU.panic)}`,
        EU = `${AU}: ${UU instanceof Error?UU.message:String(UU)}`;
      return `${(0,cU.l)(zU.kind,zU.refusedBytes)} ${EU} (${oU})${DU}${FU.length>0?` | ${FU.join(" < ")}`:""}`
    }
    const oU = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function DU(UU) {
      var XU;
      let zU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(UU instanceof Error) || !oU.test(UU.message)) return {};
      if (!("detached" in zU)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, yU.W)(null === (XU = (0, yU.P)(zU, "detached")) || void 0 === XU ? void 0 : XU.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const EU = 500;

    function YU(UU) {
      let XU = "[object Object]";
      try {
        XU = String(UU)
      } catch {}
      if ("[object Object]" !== XU) return XU;
      try {
        var zU, cU;
        return null !== (zU = null === (cU = JSON.stringify(UU)) || void 0 === cU ? void 0 : cU.slice(0, EU)) && void 0 !== zU ? zU : XU
      } catch {
        return XU
      }
    }
  },
  41955: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  41957: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  },
  36972: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => cU,
      d: () => QU,
      e: () => oU,
      i: () => AU,
      l: () => yU
    });
    const cU = /^alloc_failed (\d+) bytes$/;

    function yU(UU, XU) {
      return QU(UU, XU) ? `trap=alloc_failed ${XU} bytes` : `trap=${UU}`
    }

    function QU(UU, XU) {
      return "unreachable" === UU && XU > 0
    }

    function AU(UU, XU, zU) {
      const cU = function(UU) {
        return UU instanceof WebAssembly.RuntimeError ? /unreachable/i.test(UU.message) ? "unreachable" : /out of bounds/i.test(UU.message) ? "out_of_bounds" : "runtime_error" : (UU instanceof RangeError || UU instanceof Error && "InternalError" === UU.name) && /call stack|recursion/i.test(UU.message) ? "stack_overflow" : "js_error"
      }(UU);
      if ("unreachable" !== cU) return {
        kind: cU,
        panic: null,
        refusedBytes: 0
      };
      const yU = XU(),
        QU = zU();
      return {
        kind: cU,
        panic: QU > 0 ? null : yU,
        refusedBytes: QU
      }
    }
    const FU = 300;

    function oU(UU) {
      return UU.replace(/\s*\n\s*/g, " / ").slice(0, FU)
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);