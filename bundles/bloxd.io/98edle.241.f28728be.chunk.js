export const id = 241;
export const ids = [241];
export const modules = {
  38450: (WW, RW, MW) => {
    function wW(WW, RW, MW) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(WW, RW).getContext("2d", MW);
      const wW = document.createElement("canvas");
      return wW.width = WW, wW.height = RW, wW.getContext("2d", MW)
    }

    function CW(WW, RW) {
      return WW.getContext("2d", RW)
    }
    MW.d(RW, {
      e: () => CW,
      h: () => wW
    })
  },
  38399: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => wW
    });
    const wW = {
      stop: () => wW,
      fade: () => wW,
      rate: () => wW,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => wW,
      setPannerAttr: () => wW,
      setPosition: () => wW
    }
  },
  38410: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => PW,
      f: () => TW,
      i: () => KW,
      l: () => cR,
      p: () => jR,
      s: () => kR,
      w: () => JW,
      x: () => iR,
      B: () => YW,
      C: () => rR,
      G: () => VW,
      I: () => lW,
      J: () => hW,
      M: () => vR,
      N: () => aR,
      Q: () => dW
    });
    var wW = MW(3773),
      CW = MW(38182),
      zR = MW(10);
    class AW {
      constructor(WW, RW) {
        this.memory = WW, this.access = RW, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.aR = 0, this.u32 = new zR.h(0), this.f32 = new zR.c(0), this.u8 = new zR.b(0), this.dataView = new zR.d(new ArrayBuffer(0)), this.refresh()
      }
      refresh() {
        this.ptr = this.access.ptr(), this.aR = this.access.aR(), this.buffer = (0, zR.y)(this.memory()), this.u32 = new zR.h(this.buffer, this.ptr, this.aR >>> 2), this.f32 = new zR.c(this.buffer, this.ptr, this.aR >>> 2), this.u8 = new zR.b(this.buffer, this.ptr, this.aR), this.dataView = new zR.d(this.buffer, this.ptr, this.aR)
      }
      ensureViews() {
        (0, zR.y)(this.memory()) !== this.buffer && this.refresh()
      }
      get view() {
        return this.ensureViews(), this.dataView
      }
      room(WW) {
        return !!this.fits(WW) || (this.dropped++, !1)
      }
      fits(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.cursor;
        this.ensureViews();
        const MW = RW + WW;
        return MW <= this.aR || MW <= wW.oc && 0 !== this.access.reserve(MW) && (this.refresh(), MW <= this.aR)
      }
      consume(WW) {
        const RW = this.cursor - WW;
        RW > 0 && WW > 0 && (this.ensureViews(), this.u8.copyWithin(0, WW, this.cursor)), this.cursor = RW > 0 ? RW : 0
      }
      writeRecord(WW, RW, MW, CW, zR) {
        if (!this.room(wW.fb)) return !1;
        const AW = this.cursor >>> 2;
        return this.u32[AW] = 65535 & WW | (65535 & RW) << 16, this.f32[AW + 1] = MW, this.f32[AW + 2] = CW, this.u32[AW + 3] = zR >>> 0, this.cursor += wW.fb, !0
      }
      writeOptions(WW, RW) {
        const MW = RW.byteLength,
          CW = wW.fb + (0, wW.Md)(MW);
        if (!this.fits(CW)) return !1;
        const zR = this.cursor,
          AW = zR >>> 2;
        this.u32[AW] = wW.jb.Options, this.u32[AW + 1] = MW, this.u32[AW + 2] = 0, this.u32[AW + 3] = WW >>> 0;
        const bR = zR + wW.fb;
        return this.u8.set(RW, bR), this.u8.fill(0, bR + MW, zR + CW), this.cursor += CW, !0
      }
      writeWorkerRecord(WW, RW, MW, CW, zR) {
        const AW = zR.byteLength,
          bR = wW.jd + (0, wW.Md)(AW);
        if (AW > wW.id) return this.dropped++, !1;
        if (!this.room(bR)) return !1;
        const yR = this.cursor,
          NW = yR >>> 2;
        this.u32[NW] = WW >>> 0, this.u32[NW + 1] = 65535 & RW | (65535 & MW) << 16, this.u32[NW + 2] = CW >>> 0, this.u32[NW + 3] = AW;
        const eW = yR + wW.jd;
        return this.u8.set(zR, eW), this.u8.fill(0, eW + AW, yR + bR), this.cursor += bR, !0
      }
      written() {
        return this.ensureViews(), this.u8.subarray(0, this.cursor)
      }
      writeFrame(WW, RW) {
        return this.writeNet(wW.Eb.Frame, WW, RW)
      }
      writeOpen(WW) {
        return this.writeNet(wW.Eb.Open, WW, bR)
      }
      writeClose(WW) {
        return this.writeNet(wW.Eb.Close, WW, bR)
      }
      writeNet(WW, RW, MW) {
        const CW = MW.byteLength,
          zR = wW.Ab + (0, wW.Md)(CW);
        if (CW > wW.yb) return this.dropped++, !1;
        if (!this.room(zR)) return !1;
        const AW = this.cursor;
        this.u32[AW >>> 2] = CW, this.u32[1 + (AW >>> 2)] = (0, wW.Id)(WW, RW);
        const bR = AW + wW.Ab;
        return this.u8.set(MW, bR), this.u8.fill(0, bR + CW, AW + zR), this.cursor += zR, !0
      }
      IM(WW, RW, MW) {
        const CW = wW.o + (0, wW.Md)(MW);
        if (!this.room(CW)) return -1;
        const zR = this.cursor;
        this.u32[zR >>> 2] = 65535 & WW | (65535 & RW) << 16, this.u32[1 + (zR >>> 2)] = MW;
        const AW = zR + wW.o;
        return this.u8.fill(0, AW, zR + CW), this.cursor += CW, AW
      }
      growForCmd(WW) {
        return this.fits(wW.o + (0, wW.Md)(WW), 0)
      }
      writeCmd(WW, RW, MW) {
        const wW = this.IM(WW, RW, MW.byteLength);
        return !(wW < 0) && (this.u8.set(MW, wW), !0)
      }
      copyWritten(WW, RW) {
        return this.ensureViews(), this.u8.slice(WW, WW + RW)
      }
    }
    const bR = new zR.b(0);
    class yR {
      constructor(WW, RW) {
        this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new AW(RW, {
          ptr: () => WW.OW(),
          aR: () => WW.EBW(),
          reserve: RW => WW.DBW(RW)
        }), this.net = new AW(RW, {
          ptr: () => WW.GBW(),
          aR: () => WW.nBW(),
          reserve: RW => WW.qtW(RW)
        }), this.worker = new AW(RW, {
          ptr: () => WW.JtW(),
          aR: () => WW.YtW(),
          reserve: RW => WW.ZBW(RW)
        }), this.cmd = new AW(RW, {
          ptr: () => WW.XBW(),
          aR: () => WW.rtW(),
          reserve: RW => WW.ctW(RW)
        })
      }
      reset(WW) {
        this.input.cursor = 0, this.worker.cursor = 0, this.cmd.consume(WW)
      }
    }
    var NW = MW(38324),
      eW = MW(1945),
      BW = MW(3765),
      tR = MW(38419);
    const TW = "coreFrame",
      gR = "fatalStatus",
      iR = "otherCall",
      YW = "coreRings",
      JW = "netIn",
      PW = "abi",
      IW = "netOut",
      oW = "workerOut",
      lW = "worldgenHost",
      FW = "eventWalker",
      fW = "netEvent",
      QW = "envEvent",
      rR = "sharedTables",
      cR = "inputAction",
      XW = new Set([FW, fW, QW, cR, rR]),
      jR = "wasmMemory",
      kR = "meshHost";

    function aR(WW, RW) {
      WW.forEachWorkerOut(((MW, CW, zR) => {
        if ((0, wW.Ed)(MW)) try {
          var AW;
          null === (AW = RW.worldgen) || void 0 === AW || AW.take(MW, zR)
        } catch (yR) {
          WW.crash(lW, yR)
        } else try {
          var bR;
          null === (bR = RW.mesh) || void 0 === bR || bR.take(MW, CW, zR)
        } catch (yR) {
          WW.crash(kR, yR)
        }
      }))
    }
    const sW = 1048576;

    function dW(WW, RW) {
      let MW = !1;
      const wW = () => {
        MW = !1, RW()
      };
      return () => {
        !MW && WW.cursor >= sW && (MW = !0, queueMicrotask(wW))
      }
    }
    const pW = new Set([gR, iR, lW, kR]);

    function hW(WW) {
      return XW.has(WW.site) ? WW.error instanceof WebAssembly.RuntimeError || (0, CW.l)(WW.error) : !pW.has(WW.site) && WW.error instanceof Error
    }
    const UW = "events",
      EW = [],
      VW = "terrainTextures",
      mR = "sunShadowTextures",
      xR = new TextDecoder;

    function vR(WW, RW) {
      const {
        site: MW,
        error: CW,
        header: zR
      } = WW, AW = zR ? (0, wW.Ad)(zR.lastError) : "noFrame", bR = `CORE-${MW===gR?AW:MW}`, yR = null === CW || void 0 === CW ? "" : ` ${(0,NW.g)(CW)}`, eW = {
        site: MW,
        wasmBuild: RW.wasm,
        clientVersion: RW.client
      };
      return zR && (eW.status = String(zR.status), eW.lastError = AW, eW.lastErrorCode = String(zR.lastError), eW.lastErrorDetail = String(zR.lastErrorDetail), eW.errorCount = String(zR.errorCount), eW.frameIndex = String(zR.frameIndex), eW.tickIndex = String(zR.tickIndex)), {
        code: bR,
        message: `core ${MW}, last error ${AW};${yR}`,
        details: eW
      }
    }
    class KW {
      constructor(WW, RW, MW) {
        this.core = WW, this.memory = RW, this.handlers = MW, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.unsentUiPrefs = null, this.eventWalker = null, this.netOffsets = [], this.frameEvents = {
          ptr: 0,
          len: 0,
          net: EW,
          netOffsets: this.netOffsets,
          kind: "none"
        }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.rings = new yR(WW, RW)
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
      framePaces(WW) {
        if (this.stopped || this.drawsHeld) return !1;
        try {
          return this.core.pBW(WW)
        } catch (RW) {
          return this.crash(TW, RW), !1
        }
      }
      get isStopped() {
        return this.stopped
      }
      frame(WW, RW) {
        var MW;
        let zR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.stopped) return !1;
        if (!this.writePendingInput()) return !1;
        const {
          input: AW,
          net: bR,
          worker: yR,
          cmd: NW
        } = this.rings, eW = bR.cursor, iR = RW && !this.drawsHeld;
        let YW = wW.E.Fatal;
        const PW = NW.cursor;
        let IW = null;
        try {
          const RW = (iR ? wW.Y.Draws : 0) | (zR ? wW.Y.NetAll : 0);
          YW = (0, tR.f)((() => this.core.frame(WW, AW.cursor, bR.cursor, yR.cursor, RW, PW)))
        } catch (pW) {
          IW = {
            error: pW
          }
        }
        const oW = null === (MW = this.gameHost) || void 0 === MW ? void 0 : MW.takeFault();
        this.rings.reset(this.stopped || null !== IW || void 0 !== oW ? NW.cursor : PW);
        const lW = null === IW && void 0 === oW ? this.headerView() : null,
          QW = null === lW ? null : (0, wW.Pd)(lW);
        null !== QW && (this.lastHeader = QW);
        const rR = null !== QW && YW !== wW.E.Fatal,
          cR = rR && null !== lW ? lW[wW.bb.NetInKept] : 0,
          XW = rR && cR <= eW && cR % 4 === 0 ? cR : null;
        var jR, kR;
        null !== QW && null !== XW && YW === wW.E.Errors && (null === (jR = (kR = this.handlers).onErrors) || void 0 === jR || jR.call(kR, QW));
        const aR = null === XW ? EW : this.readEvents(eW);
        if (bR.consume(eW - (null !== XW && void 0 !== XW ? XW : 0)), this.netKept = null !== XW && void 0 !== XW ? XW : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== IW) return this.crash(TW, void 0 === oW || oW instanceof CW.c ? IW.error : oW), !1;
        if (void 0 !== oW || null === QW) return this.crashOn(TW, oW), !1;
        if (this.lastFrameKind = (0, BW.d)(iR, this.headerView()[wW.bb.FrameDraw]), YW === wW.E.Fatal) return this.crash(gR, null), !1;
        if (null === XW) return this.crash(JW, `the core kept ${cR} of ${eW} net-in bytes`), !1;
        if (this.eventWalker) {
          if (this.stopped) return !1;
          const WW = this.frameEvents,
            RW = this.headerView();
          WW.ptr = RW[wW.bb.EventsPtr], WW.len = RW[wW.bb.EventsLen], WW.net = aR, WW.kind = this.lastFrameKind;
          try {
            this.eventWalker(WW)
          } catch (pW) {
            return this.crashOn(FW, pW), !1
          }
          return this.handEnvEvents()
        }
        for (const wW of aR) {
          if (this.stopped) return !1;
          try {
            var sW, dW;
            null === (sW = (dW = this.handlers).onNetEvent) || void 0 === sW || sW.call(dW, wW)
          } catch (pW) {
            return this.crashOn(fW, pW), !1
          }
        }
        return this.handEnvEvents()
      }
      handEnvEvents() {
        for (const wW of this.envEvents) {
          if (this.stopped) return !1;
          try {
            var WW, RW;
            null === (WW = (RW = this.handlers).onEnvEvent) || void 0 === WW || WW.call(RW, wW)
          } catch (MW) {
            return this.crashOn(QW, MW), !1
          }
        }
        return !this.stopped
      }
      setEventWalker(WW) {
        this.eventWalker = WW
      }
      writePendingInput() {
        if (this.stopped) return !1;
        const {
          input: WW
        } = this.rings;
        try {
          const RW = this.unsentUiPrefs;
          RW && WW.writeRecord(wW.jb.UiPrefs, 0, RW.nametagCutDistance, 0, (0, wW.Sd)(RW)) && (this.unsentUiPrefs = null);
          const MW = this.unsentEnvPrefs;
          MW && WW.writeRecord(wW.jb.EnvPrefs, (0, wW.Dd)(MW), MW.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
          const CW = this.unsentLookPrefs;
          CW && WW.writeRecord(wW.jb.Sensitivity, 0, CW.mouse, CW.touch, (0, eW.k)(CW.fovPercent)) && (this.unsentLookPrefs = null);
          let zR = 0;
          for (const {
              aux: wW,
              payload: AW
            }
            of this.unsentOptions) {
            if (!WW.writeOptions(wW, AW)) {
              if (WW.cursor > 0) break;
              this.optionsDropped++
            }
            zR++
          }
          zR > 0 && this.unsentOptions.splice(0, zR)
        } catch (RW) {
          return this.crash(YW, RW), !1
        }
        return !0
      }
      setHoldDraws(WW) {
        this.drawsHeld = WW
      }
      setUiPrefs(WW) {
        this.unsentUiPrefs = {
          ...WW
        }
      }
      setEnvPrefs(WW) {
        this.unsentEnvPrefs = {
          ...WW
        }
      }
      setLookPrefs(WW) {
        this.unsentLookPrefs = {
          ...WW
        }
      }
      queueOptions(WW, RW) {
        RW.byteLength > wW.Ib.PayloadMaxBytes ? this.optionsDropped++ : this.unsentOptions.push({
          aux: WW,
          payload: RW
        })
      }
      setChunkCap(WW) {
        return this.callCore("setChunkCap", null, (RW => RW.zTW(WW)))
      }
      shedMemory(WW) {
        const RW = this.callCore("shedMemory", null, (RW => RW.BtW(WW)));
        return 0 === RW ? null : RW
      }
      addDistanceInUse() {
        const WW = this.callCore("addDistanceInUse", null, (WW => WW.oBW()));
        return 0 === WW ? null : WW
      }
      setChunkAddDistance(WW, RW) {
        return this.callCore("setChunkAddDistance", !1, (MW => MW.CtW(WW, RW)))
      }
      setGameHost(WW) {
        return this.callCore("setGameHost", !1, (RW => (RW.dBW(WW), this.gameHost = WW, !0)))
      }
      setAntiCheatProbes(WW) {
        return this.callCore("setAntiCheatProbes", !1, (RW => RW.MtW(WW)))
      }
      setAmbientOcclusion(WW) {
        this.callCore("setAmbientOcclusion", void 0, (RW => {
          RW.RtW(WW)
        }))
      }
      setPoseLod(WW) {
        this.callCore("setPoseLod", void 0, (RW => {
          RW.bTW(WW)
        }))
      }
      setTextureLayers(WW) {
        return this.callCore("setTextureLayers", !1, (RW => RW.etW(WW)))
      }
      setBlockColours(WW) {
        let {
          blocks: RW,
          counts: MW,
          values: wW
        } = WW;
        return this.callCore("setBlockColours", !1, (WW => WW.ANW(RW, MW, wW)))
      }
      terrainTextureNames() {
        return this.callCore(VW, [], (WW => WW.iTW()))
      }
      setTerrainTextures(WW, RW, MW) {
        return this.callCore(VW, !1, (wW => wW.zeW(WW, RW, MW)))
      }
      setShaderPack(WW, RW, MW, wW, CW, zR) {
        return this.callCore("setShaderPack", !1, (AW => {
          var bR, yR;
          return null !== (bR = null === (yR = AW.eNW) || void 0 === yR ? void 0 : yR.call(AW, WW, RW, MW, wW, CW, zR)) && void 0 !== bR && bR
        }))
      }
      sunShadowWantedTextures() {
        return this.callCore(mR, null, (WW => {
          var RW, MW;
          return null !== (RW = null === (MW = WW.tTW) || void 0 === MW ? void 0 : MW.call(WW)) && void 0 !== RW ? RW : null
        }))
      }
      setSunShadowTexture(WW, RW, MW, wW, CW) {
        this.callCore(mR, void 0, (zR => {
          var AW;
          null === (AW = zR.NtW) || void 0 === AW || AW.call(zR, WW, RW, MW, wW, CW)
        }))
      }
      takeSunShadowWarnings() {
        return this.callCore(mR, [], (WW => {
          var RW, MW;
          return null !== (RW = null === (MW = WW.TtW) || void 0 === MW ? void 0 : MW.call(WW)) && void 0 !== RW ? RW : []
        }))
      }
      callCore(WW, RW, MW) {
        if (this.stopped) return RW;
        try {
          return MW(this.core)
        } catch (wW) {
          return this.crash(WW, wW), RW
        }
      }
      readEvents(WW) {
        this.netOffsets.length = 0;
        const RW = this.headerView(),
          MW = RW[wW.bb.EventsPtr],
          CW = RW[wW.bb.EventsLen];
        if (this.envEvents.length = 0, 0 === CW) return EW;
        const zR = [],
          AW = this.memory().buffer;
        if (MW % 4 !== 0 || MW + CW > AW.byteLength) return this.crash(UW, `events of ${CW} bytes at ${MW} outside ${AW.byteLength} bytes of memory`), EW;
        const bR = new DataView(AW, MW, CW),
          yR = this.rings.net,
          NW = (RW, MW) => RW + MW <= WW ? yR.copyWritten(RW, MW) : null;
        let eW = 0;
        for (; eW < CW;) {
          const WW = eW + wW.J,
            RW = WW <= CW ? bR.getUint32(eW, !0) : -1,
            yR = RW >>> 16;
          if (RW < 0 || yR > CW - WW) return this.crash(UW, `event record at ${eW} overruns its ${CW} bytes`), EW;
          const rR = 65535 & RW,
            cR = RW => bR.getUint32(WW + 4 * RW, !0);
          if (rR === wW.N.RawMessage) {
            const WW = yR >= wW.pc.BYTES ? 65535 & cR(1) : -1,
              RW = WW === wW.pc.STRING_TYPE,
              MW = yR === (RW ? wW.pc.STRING_TYPE_BYTES : wW.pc.BYTES) ? NW(cR(2), cR(3)) : null,
              CW = RW && MW ? NW(cR(4), cR(5)) : null;
            if (!MW || RW && !CW) return this.crash(UW, `RawMessage at ${eW} of ${yR} bytes names bytes outside net-in`), EW;
            this.netOffsets.push(eW), zR.push({
              type: "message",
              conn: cR(0),
              PA: WW,
              payloadKind: cR(1) >>> 16,
              payload: MW,
              stringType: CW ? xR.decode(CW) : null
            })
          } else if (rR === wW.N.CoreErrors) {
            var BW, tR;
            const WW = yR >= 4 ? cR(0) : -1;
            if (WW < 0 || WW > wW.y.PAIRS_MAX || yR !== 4 * (wW.y.FIXED_WORDS + wW.y.PAIR_WORDS * WW)) return this.crash(UW, `CoreErrors at ${eW} of ${yR} bytes`), EW;
            const RW = [];
            for (let MW = 0; MW < WW; MW++) RW.push({
              code: cR(1 + 2 * MW),
              detail: cR(2 + 2 * MW)
            });
            null === (BW = (tR = this.handlers).onCoreErrors) || void 0 === BW || BW.call(tR, RW, cR(1 + 2 * WW))
          } else if (rR === wW.N.RenderReload) {
            var TW, gR;
            if (yR !== wW.xc.BYTES) return this.crash(UW, `RenderReload at ${eW} of ${yR} bytes`), EW;
            null === (TW = (gR = this.handlers).onRenderReload) || void 0 === TW || TW.call(gR, cR(0), cR(1))
          } else if (rR === wW.N.Images) {
            var iR, YW;
            null === (iR = (YW = this.handlers).onImages) || void 0 === iR || iR.call(YW, new Uint8Array(AW.slice(MW + WW, MW + WW + yR)))
          } else if (rR === wW.N.ModelRequests)
            for (let MW = 0; MW < yR >>> 2; MW++) {
              var JW, PW;
              null === (JW = (PW = this.handlers).onModelRequest) || void 0 === JW || JW.call(PW, cR(MW))
            } else if (rR === wW.N.ModelTaken) {
              var IW, oW;
              if (yR < 4) return this.crash(UW, `ModelTaken at ${eW} of ${yR} bytes`), EW;
              const WW = new Uint32Array((yR >>> 2) - 1);
              for (let RW = 0; RW < WW.length; RW++) WW[RW] = cR(1 + RW);
              null === (IW = (oW = this.handlers).onModelTaken) || void 0 === IW || IW.call(oW, cR(0), WW)
            } else if (rR === wW.N.TerrainTexturesWanted) {
            var lW, FW;
            if (0 !== yR) return this.crash(UW, `TerrainTexturesWanted at ${eW} of ${yR} bytes`), EW;
            null === (lW = (FW = this.handlers).onTerrainTexturesWanted) || void 0 === lW || lW.call(FW)
          } else if (rR === wW.N.KeepAliveDue) {
            var fW, QW;
            if (yR > wW.lb) return this.crash(UW, `KeepAliveDue at ${eW} of ${yR} bytes`), EW;
            null === (fW = (QW = this.handlers).onKeepAlive) || void 0 === fW || fW.call(QW, new Uint8Array(AW, MW + WW, yR).slice())
          } else if (rR === wW.N.ConnectionState) {
            if (yR !== wW.p) return this.crash(UW, `ConnectionState at ${eW} of ${yR} bytes`), EW;
            this.netOffsets.push(eW), zR.push({
              type: "connection",
              conn: cR(0),
              phase: cR(1),
              code: 0 | cR(2)
            })
          } else if (rR === wW.N.EnvLighting || rR === wW.N.SkyImages) {
            if (yR !== (rR === wW.N.EnvLighting ? wW.F : wW.Qc)) return this.crash(UW, `event ${rR} at ${eW} of ${yR} bytes`), EW;
            this.envEvents.push({
              kind: rR,
              payload: new Uint8Array(AW.slice(MW + WW, MW + WW + yR))
            })
          }
          eW = WW + (0, wW.Md)(yR)
        }
        return zR
      }
      forEachNetOut(WW) {
        this.forEachOut(IW, "net-out", wW.bb.NetOutPtr, wW.bb.NetOutLen, wW.Ab, 0, ((RW, MW, CW, zR) => {
          const AW = (0, wW.Gd)(MW);
          AW === wW.Eb.Frame ? WW((0, wW.Fd)(MW), CW) : this.crash(IW, `net-out record at ${zR} is kind ${AW}, not a frame`)
        }))
      }
      forEachWorkerOut(WW) {
        this.forEachOut(oW, "worker-out", wW.bb.WorkerOutPtr, wW.bb.WorkerOutLen, wW.ed, 4, ((RW, MW, CW, zR) => {
          const AW = 255 & RW,
            bR = AW === wW.sd.Init ? this.initOf(CW, zR) : CW;
          null !== bR && WW(AW, RW >>> 8 & 16777215, bR)
        }))
      }
      initOf(WW, RW) {
        const MW = this.memory().buffer;
        if (WW.byteLength !== wW.cb) return this.crash(oW, `worker-out Init record at ${RW} is ${WW.byteLength} bytes, not a view`), null;
        const CW = new DataView(WW.buffer, WW.byteOffset, wW.cb),
          zR = CW.getUint32(0, !0),
          AW = CW.getUint32(4, !0);
        return zR + AW > MW.byteLength ? (this.crash(oW, `worker-out Init record at ${RW} names ${AW} bytes at ${zR} outside ${MW.byteLength} bytes of memory`), null) : new Uint8Array(MW, zR, AW)
      }
      forEachOut(WW, RW, MW, CW, zR, AW, bR) {
        if (this.stopped || null === this.lastHeader) return;
        const yR = this.headerView(),
          NW = yR[MW],
          eW = yR[CW];
        if (0 === eW) return;
        const BW = this.memory().buffer;
        if (NW % 4 !== 0 || NW + eW > BW.byteLength) return void this.crash(WW, `${RW} of ${eW} bytes at ${NW} outside ${BW.byteLength} bytes of memory`);
        const tR = new DataView(BW, NW, eW);
        let TW = 0;
        for (; TW < eW;) {
          const MW = TW + zR,
            CW = MW <= eW ? tR.getUint32(TW + AW, !0) : -1;
          if (CW < 0 || CW > eW - MW) return void this.crash(WW, `${RW} record at ${TW} overruns its ${eW} bytes`);
          if (bR(tR.getUint32(TW, !0), tR.getUint32(TW + 4, !0), new Uint8Array(BW, NW + MW, CW), TW), this.stopped) return;
          TW = MW + (0, wW.Md)(CW)
        }
      }
      forEachEvent(WW) {
        if (this.stopped || null === this.lastHeader) return;
        const RW = this.headerView(),
          MW = RW[wW.bb.EventsPtr],
          CW = RW[wW.bb.EventsLen];
        if (0 === CW) return;
        const zR = this.memory().buffer;
        if (MW % 4 !== 0 || MW + CW > zR.byteLength) return void this.crash(UW, `events of ${CW} bytes at ${MW} outside ${zR.byteLength} bytes of memory`);
        const AW = new DataView(zR, MW, CW);
        let bR = 0;
        for (; bR < CW;) {
          const RW = bR + wW.J,
            MW = RW <= CW ? AW.getUint32(bR, !0) : -1,
            zR = MW >>> 16;
          if (MW < 0 || zR > CW - RW) return void this.crash(UW, `event record at ${bR} overruns its ${CW} bytes`);
          WW(65535 & MW, AW, RW, zR), bR = RW + (0, wW.Md)(zR)
        }
      }
      crashOn(WW, RW) {
        RW instanceof CW.c ? this.crash(UW, RW.message) : this.crash(WW, RW)
      }
      crash(WW, RW) {
        this.stopped || (this.stopped = !0, this.handlers.onCrash({
          site: WW,
          error: RW,
          header: this.lastHeader
        }))
      }
      headerWord(WW) {
        return this.stopped || null === this.lastHeader ? 0 : this.headerView()[WW]
      }
      headerView() {
        const WW = this.memory().buffer;
        return WW !== this.headerBuffer && (this.headerBuffer = WW, this.header = new Uint32Array(WW, this.core.oM(), wW.$)), this.header
      }
    }
  },
  38474: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => eW,
      g: () => NW,
      h: () => yR
    });
    var wW = MW(3775),
      CW = MW(1939),
      zR = MW(3790);
    let AW = !1,
      bR = !1;

    function yR(WW) {
      AW = !0;
      try {
        WW()
      } finally {
        AW = !1
      }
    }

    function NW(WW, RW) {
      if (AW) return !1;
      switch (WW) {
        case wW.z.MouseDown:
        case wW.z.MouseUp:
        case wW.z.TouchStart:
        case wW.z.TouchEnd:
        case wW.z.TouchCancel:
        case wW.z.TouchButton:
          return !0;
        case wW.z.KeyDown:
        case wW.z.KeyUp:
          return 0 === (RW & CW.f.Repeat) && !(0, zR.f)(document.activeElement);
        default:
          return !1
      }
    }

    function eW(WW) {
      bR || (bR = !0, queueMicrotask((() => {
        bR = !1, WW()
      })))
    }
  },
  38528: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => wW
    });
    const wW = 2e3
  },
  38419: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => AW,
      f: () => zR
    });
    var wW = MW(5631);
    let CW = null;

    function zR(WW) {
      CW = {
        scanned: !1
      };
      try {
        return WW()
      } finally {
        CW = null
      }
    }

    function AW() {
      const WW = CW;
      if (null === WW) return (0, wW.f)();
      const RW = (0, wW.f)(!WW.scanned);
      return WW.scanned = !0, RW
    }
  },
  38469: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => TW,
      f: () => bR,
      i: () => BW,
      l: () => tR,
      o: () => gR
    });
    var wW = MW(27),
      CW = MW(33),
      zR = MW(2178),
      AW = MW(8106);

    function bR() {
      var WW;
      const RW = (MW = wW.b.get("clientEscMenuOptions"), CW = (0, zR.i)(), {
        sampleCount: MW.antiAliasing ? 4 : 1,
        n: (0, zR.r)(MW.pixelScale, CW),
        pixelated: (0, zR.n)(MW.pixelSmoothing)
      });
      var MW, CW;
      return RW.sampleCount > 1 && (0, AW.d)() && (RW.sampleCount = 1), RW.n = null !== (WW = (0, AW.o)()) && void 0 !== WW ? WW : RW.n, RW
    }
    let yR = null;
    const NW = new Set;

    function eW() {
      if (null === yR) {
        const WW = document.createElement("div");
        WW.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", WW.setAttribute("aria-hidden", "true"), document.body.append(WW), yR = new zR.c(WW, (() => {
          for (const WW of NW) WW()
        }))
      }
      return yR
    }

    function BW(WW) {
      const RW = (0, zR.i)(),
        [MW, wW] = eW().size(RW);
      return (0, zR.f)(MW, wW, RW, WW.n)
    }

    function tR(WW) {
      const RW = (0, zR.i)(),
        [MW, wW] = eW().size(RW);
      if (MW <= 0 || wW <= 0) return null;
      const CW = (0, zR.f)(MW, wW, RW, bR().n);
      return (0, zR.d)(WW, CW), CW
    }

    function TW(WW, RW) {
      WW.style.imageRendering = (0, zR.x)(RW.pixelated)
    }

    function gR(WW, RW) {
      const MW = (0, CW.m)("appManagerUpdated|clientEscMenuOptions", (() => {
          TW(WW, bR()), RW()
        })),
        wW = (0, AW.v)(RW);
      return eW(), NW.add(RW), () => {
        MW(), wW(), NW.delete(RW)
      }
    }
  },
  38536: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => AW,
      d: () => zR,
      f: () => CW
    });
    let wW = null;

    function CW(WW) {
      wW = WW
    }

    function zR(WW) {
      wW === WW && (wW = null)
    }

    function AW() {
      var WW;
      null === (WW = wW) || void 0 === WW || WW()
    }
  },
  38500: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => CW,
      i: () => NW,
      k: () => zR,
      n: () => BW,
      r: () => eW,
      u: () => tR
    });
    var wW = MW(2801);
    class CW extends Error {
      constructor(WW, RW, MW) {
        super(`${"fetch"===WW?"fetching":"decoding"} ${RW} failed`, MW), this.stage = WW, this.source = RW, this.name = "ShellImageError"
      }
    }
    async function zR(WW) {
      let RW, MW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wW.q,
        zR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      if ("string" === typeof WW) try {
        RW = await MW(WW)
      } catch (AW) {
        throw new CW("fetch", WW, {
          cause: AW
        })
      } else RW = WW;
      try {
        const WW = new Blob([RW.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(WW, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: zR
        })
      } catch (AW) {
        throw new CW("decode", "string" === typeof WW ? WW : `${RW.byteLength} bytes`, {
          cause: AW
        })
      }
    }
    let AW = null;
    const bR = new Map;
    let yR = 1;

    function NW(WW) {
      if (AW = WW, null !== WW) {
        for (const [RW, MW] of bR) WW.MNW(RW, MW);
        bR.clear()
      }
    }

    function eW(WW) {
      const RW = yR++;
      return AW ? AW.MNW(RW, WW) : bR.set(RW, WW), RW
    }
    async function BW(WW, RW, MW) {
      const wW = await zR(WW, RW, MW);
      return {
        id: eW(wW),
        width: wW.width,
        height: wW.height
      }
    }

    function tR(WW) {
      var RW;
      const MW = bR.get(WW);
      if (MW) return MW.close(), void bR.delete(WW);
      null === (RW = AW) || void 0 === RW || RW.wNW(WW)
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);