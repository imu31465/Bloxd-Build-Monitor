export const id = 244;
export const ids = [244];
export const modules = {
  37343: (WW, iW, OW) => {
    function mW(WW, iW, OW) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(WW, iW).getContext("2d", OW);
      const mW = document.createElement("canvas");
      return mW.width = WW, mW.height = iW, mW.getContext("2d", OW)
    }

    function EW(WW, iW) {
      return WW.getContext("2d", iW)
    }
    OW.d(iW, {
      c: () => EW,
      g: () => mW
    })
  },
  42246: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => LW
    });
    const mW = 1 << 20,
      EW = 1 << 21,
      NW = 1024,
      PW = 2048;

    function LW(WW, iW, OW) {
      const LW = WW + mW,
        cW = iW + NW,
        wW = OW + mW;
      return LW < 0 || LW >= EW || wW < 0 || wW >= EW || cW < 0 || cW >= PW ? -1 : (LW * EW + wW) * PW + cW
    }
  },
  42244: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => mW,
      f: () => PW,
      h: () => EW,
      l: () => NW,
      p: () => tW,
      t: () => wW,
      u: () => cW,
      w: () => LW
    });
    OW(4675);
    OW(42246);

    function mW(WW) {}

    function EW(WW) {}

    function NW(WW) {}

    function PW(WW) {}

    function LW(WW) {}

    function cW(WW, iW, OW) {}

    function wW(WW) {}

    function tW(WW) {}
  },
  42281: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => sW,
      f: () => AW,
      h: () => IW,
      j: () => hW,
      l: () => qW,
      m: () => uW,
      q: () => oW,
      u: () => kW,
      y: () => jW,
      z: () => UW,
      B: () => JW,
      C: () => CW,
      F: () => SW,
      I: () => DW,
      J: () => GW,
      L: () => dW,
      P: () => vW
    });
    var mW = OW(5546),
      EW = OW(42158),
      NW = (OW(42244), OW(13));
    class PW {
      constructor(WW, iW) {
        this.memory = WW, this.access = iW, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.aZ = 0, this.u32 = new NW.l(0), this.f32 = new NW.i(0), this.u8 = new NW.e(0), this.dataView = new NW.k(new ArrayBuffer(0)), this.refresh()
      }
      refresh() {
        this.ptr = this.access.ptr(), this.aZ = this.access.aZ(), this.buffer = (0, NW.I)(this.memory()), this.u32 = new NW.l(this.buffer, this.ptr, this.aZ >>> 2), this.f32 = new NW.i(this.buffer, this.ptr, this.aZ >>> 2), this.u8 = new NW.e(this.buffer, this.ptr, this.aZ), this.dataView = new NW.k(this.buffer, this.ptr, this.aZ)
      }
      ensureViews() {
        (0, NW.I)(this.memory()) !== this.buffer && this.refresh()
      }
      get view() {
        return this.ensureViews(), this.dataView
      }
      room(WW) {
        return !!this.fits(WW) || (this.dropped++, !1)
      }
      fits(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.cursor;
        this.ensureViews();
        const OW = iW + WW;
        return OW <= this.aZ || OW <= mW.Oc && 0 !== this.access.reserve(OW) && (this.refresh(), OW <= this.aZ)
      }
      consume(WW) {
        const iW = this.cursor - WW;
        iW > 0 && WW > 0 && (this.ensureViews(), this.u8.copyWithin(0, WW, this.cursor)), this.cursor = iW > 0 ? iW : 0
      }
      writeRecord(WW, iW, OW, EW, NW) {
        if (!this.room(mW.gb)) return !1;
        const PW = this.cursor >>> 2;
        return this.u32[PW] = 65535 & WW | (65535 & iW) << 16, this.f32[PW + 1] = OW, this.f32[PW + 2] = EW, this.u32[PW + 3] = NW >>> 0, this.cursor += mW.gb, !0
      }
      writeOptions(WW, iW) {
        const OW = iW.byteLength,
          EW = mW.gb + (0, mW.xe)(OW);
        if (!this.fits(EW)) return !1;
        const NW = this.cursor,
          PW = NW >>> 2;
        this.u32[PW] = mW.hb.Options, this.u32[PW + 1] = OW, this.u32[PW + 2] = 0, this.u32[PW + 3] = WW >>> 0;
        const LW = NW + mW.gb;
        return this.u8.set(iW, LW), this.u8.fill(0, LW + OW, NW + EW), this.cursor += EW, !0
      }
      writeWorkerRecord(WW, iW, OW, EW, NW, PW) {
        const LW = PW.byteLength,
          cW = mW.Pd + (0, mW.xe)(LW);
        if (LW > mW.Od) return this.dropped++, !1;
        if (!this.room(cW)) return !1;
        const wW = this.cursor,
          tW = wW >>> 2;
        this.u32[tW] = WW >>> 0, this.u32[tW + 1] = 65535 & iW | (65535 & OW) << 16, this.u32[tW + 2] = EW >>> 0, this.u32[tW + 3] = NW >>> 0, this.u32[tW + 4] = LW;
        const ZW = wW + mW.Pd;
        return this.u8.set(PW, ZW), this.u8.fill(0, ZW + LW, wW + cW), this.cursor += cW, !0
      }
      written() {
        return this.ensureViews(), this.u8.subarray(0, this.cursor)
      }
      writeFrame(WW, iW) {
        return this.writeNet(mW.Wb.Frame, WW, iW)
      }
      writeOpen(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(mW.Wb.Open, WW, cW(iW))
      }
      writeClose(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(mW.Wb.Close, WW, cW(iW))
      }
      writeNet(WW, iW, OW) {
        const EW = OW.byteLength,
          NW = mW.Ub + (0, mW.xe)(EW);
        if (EW > mW.Mb) return this.dropped++, !1;
        if (!this.room(NW)) return !1;
        const PW = this.cursor;
        this.u32[PW >>> 2] = EW, this.u32[1 + (PW >>> 2)] = (0, mW.re)(WW, iW);
        const LW = PW + mW.Ub;
        return this.u8.set(OW, LW), this.u8.fill(0, LW + EW, PW + NW), this.cursor += NW, !0
      }
      kZ(WW, iW, OW) {
        const EW = mW.o + (0, mW.xe)(OW);
        if (!this.room(EW)) return -1;
        const NW = this.cursor;
        this.u32[NW >>> 2] = 65535 & WW | (65535 & iW) << 16, this.u32[1 + (NW >>> 2)] = OW;
        const PW = NW + mW.o;
        return this.u8.fill(0, PW, NW + EW), this.cursor += EW, PW
      }
      growForCmd(WW) {
        return this.fits(mW.o + (0, mW.xe)(WW), 0)
      }
      writeCmd(WW, iW, OW) {
        const mW = this.kZ(WW, iW, OW.byteLength);
        return !(mW < 0) && (this.u8.set(OW, mW), !0)
      }
      copyWritten(WW, iW) {
        return this.ensureViews(), this.u8.slice(WW, WW + iW)
      }
    }
    const LW = new NW.e(0);

    function cW(WW) {
      if (0 === WW) return LW;
      const iW = new NW.e(mW.Qb);
      for (let OW = 0; OW < mW.Qb; OW++) iW[OW] = WW >>> 8 * OW & 255;
      return iW
    }
    class wW {
      constructor(WW, iW) {
        this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new PW(iW, {
          ptr: () => WW.wx(),
          aZ: () => WW.uPW(),
          reserve: iW => WW.qPW(iW)
        }), this.net = new PW(iW, {
          ptr: () => WW.fPW(),
          aZ: () => WW.pPW(),
          reserve: iW => WW.RPW(iW)
        }), this.worker = new PW(iW, {
          ptr: () => WW.xLW(),
          aZ: () => WW.ZLW(),
          reserve: iW => WW.GPW(iW)
        }), this.cmd = new PW(iW, {
          ptr: () => WW.sPW(),
          aZ: () => WW.UPW(),
          reserve: iW => WW.kPW(iW)
        })
      }
      reset(WW, iW, OW) {
        this.input.consume(WW), this.worker.consume(iW), this.cmd.consume(OW)
      }
    }
    var tW = OW(37265),
      ZW = OW(3308),
      xW = OW(5540),
      lW = OW(42288);
    const AW = "coreFrame",
      bW = "fatalStatus",
      jW = "otherCall",
      UW = "coreRings",
      kW = "netIn",
      sW = "abi",
      MW = "netOut",
      KW = "workerOut",
      SW = "worldgenHost",
      YW = "eventWalker",
      yW = "netEvent",
      TW = "envEvent",
      JW = "sharedTables",
      hW = "inputAction",
      HW = "frameSends",
      nW = new Set([YW, yW, TW, HW, hW, JW]),
      uW = "wasmMemory",
      oW = "meshHost";

    function dW(WW, iW) {
      WW.forEachWorkerOut(((OW, EW, NW) => {
        if ((0, mW.je)(OW)) try {
          var PW;
          null === (PW = iW.worldgen) || void 0 === PW || PW.take(OW, NW)
        } catch (cW) {
          WW.crash(SW, cW)
        } else try {
          var LW;
          null === (LW = iW.mesh) || void 0 === LW || LW.take(OW, EW, NW)
        } catch (cW) {
          WW.crash(oW, cW)
        }
      }))
    }
    const eW = 1048576;

    function vW(WW, iW) {
      let OW = !1;
      const mW = () => {
        OW = !1, iW()
      };
      return () => {
        !OW && WW.cursor >= eW && (OW = !0, queueMicrotask(mW))
      }
    }
    const gW = new Set([bW, jW, SW, oW]);

    function DW(WW) {
      return nW.has(WW.site) ? WW.error instanceof WebAssembly.RuntimeError || (0, EW.m)(WW.error) : !gW.has(WW.site) && WW.error instanceof Error
    }
    const VW = "events",
      pW = [],
      fW = "debugLog",
      CW = "terrainTextures",
      XW = "sunShadowTextures",
      BW = "joinWarm",
      qW = {
        Home: 0,
        Play: 1,
        Joined: 2
      },
      RW = new TextDecoder;

    function GW(WW, iW) {
      const {
        site: OW,
        error: EW,
        header: NW
      } = WW, PW = NW ? (0, mW.de)(NW.lastError) : "noFrame", LW = `CORE-${OW===bW?PW:OW}`, cW = null === EW || void 0 === EW ? "" : ` ${(0,tW.m)(EW)}`, wW = {
        site: OW,
        wasmBuild: iW.wasm,
        clientVersion: iW.client
      };
      return NW && (wW.status = String(NW.status), wW.lastError = PW, wW.lastErrorCode = String(NW.lastError), wW.lastErrorDetail = String(NW.lastErrorDetail), wW.errorCount = String(NW.errorCount), wW.frameIndex = String(NW.frameIndex), wW.tickIndex = String(NW.tickIndex)), {
        code: LW,
        message: `core ${OW}, last error ${PW};${cW}`,
        details: wW
      }
    }
    class IW {
      constructor(WW, iW, OW) {
        this.core = WW, this.memory = iW, this.handlers = OW, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.loadCountsBuffer = null, this.loadCounts = new Uint32Array(0), this.unsentUiPrefs = null, this.eventWalker = null, this.netOffsets = [], this.frameEvents = {
          ptr: 0,
          len: 0,
          net: pW,
          netOffsets: this.netOffsets,
          kind: "none"
        }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.atSendsStop = !1, this.rings = new wW(WW, iW)
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
          return this.core.hPW(WW)
        } catch (iW) {
          return this.crash(AW, iW), !1
        }
      }
      get isStopped() {
        return this.stopped
      }
      frame(WW, iW) {
        var OW;
        let NW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.stopped) return !1;
        if (!this.writePendingInput()) return !1;
        const {
          input: PW,
          net: LW,
          worker: cW,
          cmd: wW
        } = this.rings, tW = LW.cursor, ZW = iW && !this.drawsHeld;
        let jW = mW.E.Fatal;
        const UW = PW.cursor,
          sW = cW.cursor,
          MW = wW.cursor;
        let KW, SW = null;
        const TW = this.handlers.onSends;
        try {
          const iW = (ZW ? mW.Y.Draws : 0) | (NW ? mW.Y.NetAll : 0) | (TW ? mW.Y.StopForSends : 0);
          jW = (0, lW.e)((() => {
            let OW = this.core.frame(WW, UW, LW.cursor, sW, iW, MW);
            for (; OW === mW.vd && TW;) {
              var EW;
              if (KW ??= null === (EW = this.gameHost) || void 0 === EW ? void 0 : EW.takeFault(), void 0 === KW && !this.takeSends(TW)) return mW.E.Fatal;
              OW = this.core.LU()
            }
            return OW
          }))
        } catch (BW) {
          SW = {
            error: BW
          }
        }
        KW ??= null === (OW = this.gameHost) || void 0 === OW ? void 0 : OW.takeFault();
        const JW = this.stopped || null !== SW || void 0 !== KW;
        this.rings.reset(JW ? PW.cursor : UW, JW ? cW.cursor : sW, JW ? wW.cursor : MW);
        const hW = null === SW && void 0 === KW,
          HW = hW && !this.stopped && jW === mW.E.Fatal && 0 === this.core.fl(),
          nW = hW && !HW ? this.headerView() : null,
          uW = HW ? {
            ...null !== (oW = this.lastHeader) && void 0 !== oW ? oW : (0, mW.ye)(new Uint32Array(mW._)),
            status: mW.E.Fatal,
            lastError: mW.D.CoreBusy,
            lastErrorDetail: 0
          } : null === nW ? null : (0, mW.ye)(nW);
        var oW;
        null !== uW && (this.lastHeader = uW);
        const dW = null !== uW && jW !== mW.E.Fatal,
          eW = dW && null !== nW ? nW[mW.ab.NetInKept] : 0,
          vW = dW && eW <= tW && eW % 4 === 0 ? eW : null;
        var gW, DW;
        null !== uW && null !== vW && jW === mW.E.Errors && (null === (gW = (DW = this.handlers).onErrors) || void 0 === gW || gW.call(DW, uW));
        const VW = null === vW ? pW : this.readEvents(tW);
        if (LW.consume(tW - (null !== vW && void 0 !== vW ? vW : 0)), this.netKept = null !== vW && void 0 !== vW ? vW : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== SW) return this.crash(AW, void 0 === KW || KW instanceof EW.e ? SW.error : KW), !1;
        if (void 0 !== KW || null === uW) return this.crashOn(AW, KW), !1;
        if (HW) return this.crash(bW, null), !1;
        const fW = this.headerView()[mW.ab.FrameDraw];
        if (this.lastFrameKind = (0, xW.f)(ZW, fW), jW === mW.E.Fatal) return this.crash(bW, null), !1;
        if (null === vW) return this.crash(kW, `the core kept ${eW} of ${tW} net-in bytes`), !1;
        if (this.eventWalker) {
          if (this.stopped) return !1;
          const WW = this.frameEvents,
            iW = this.headerView();
          WW.ptr = iW[mW.ab.EventsPtr], WW.len = iW[mW.ab.EventsLen], WW.net = VW, WW.kind = this.lastFrameKind;
          try {
            this.eventWalker(WW)
          } catch (BW) {
            return this.crashOn(YW, BW), !1
          }
          return this.handEnvEvents()
        }
        for (const mW of VW) {
          if (this.stopped) return !1;
          try {
            var CW, XW;
            null === (CW = (XW = this.handlers).onNetEvent) || void 0 === CW || CW.call(XW, mW)
          } catch (BW) {
            return this.crashOn(yW, BW), !1
          }
        }
        return this.handEnvEvents()
      }
      handEnvEvents() {
        for (const NW of this.graceEvents) {
          if (this.stopped) return !1;
          try {
            var WW, iW;
            null === (WW = (iW = this.handlers).onReconnectGrace) || void 0 === WW || WW.call(iW, NW)
          } catch (EW) {
            return this.crashOn(yW, EW), !1
          }
        }
        for (const NW of this.envEvents) {
          if (this.stopped) return !1;
          try {
            var OW, mW;
            null === (OW = (mW = this.handlers).onEnvEvent) || void 0 === OW || OW.call(mW, NW)
          } catch (EW) {
            return this.crashOn(TW, EW), !1
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
          const iW = this.unsentUiPrefs;
          iW && WW.writeRecord(mW.hb.UiPrefs, 0, iW.nametagCutDistance, 0, (0, mW.Be)(iW)) && (this.unsentUiPrefs = null);
          const OW = this.unsentEnvPrefs;
          OW && WW.writeRecord(mW.hb.EnvPrefs, (0, mW.ge)(OW), OW.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
          const EW = this.unsentLookPrefs;
          EW && WW.writeRecord(mW.hb.Sensitivity, 0, EW.mouse, EW.touch, (0, ZW.i)(EW.fovPercent)) && (this.unsentLookPrefs = null);
          let NW = 0;
          for (const {
              aux: mW,
              payload: PW
            }
            of this.unsentOptions) {
            if (!WW.writeOptions(mW, PW)) {
              if (WW.cursor > 0) break;
              this.optionsDropped++
            }
            NW++
          }
          NW > 0 && this.unsentOptions.splice(0, NW)
        } catch (iW) {
          return this.crash(UW, iW), !1
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
      queueOptions(WW, iW) {
        return !this.isStopped && (iW.byteLength > mW.bc.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
          aux: WW,
          payload: iW
        }), !0))
      }
      setChunkCap(WW) {
        return this.callCore("setChunkCap", null, (iW => iW.QPW(WW)))
      }
      shedMemory(WW) {
        const iW = this.callCore("shedMemory", null, (iW => iW.NLW(WW)));
        return 0 === iW ? null : iW
      }
      releaseLeftGame() {
        this.callCore("releaseLeftGame", void 0, (WW => {
          WW.BPW()
        }))
      }
      addDistanceInUse() {
        const WW = this.callCore("addDistanceInUse", null, (WW => WW.xPW()));
        return 0 === WW ? null : WW
      }
      setChunkAddDistance(WW, iW) {
        return this.callCore("setChunkAddDistance", !1, (OW => OW.FPW(WW, iW)))
      }
      setGameHost(WW) {
        return this.callCore("setGameHost", !1, (iW => (iW.JPW(WW), this.gameHost = WW, !0)))
      }
      setAntiCheatProbes(WW) {
        return this.callCore("setAntiCheatProbes", !1, (iW => iW.rPW(WW)))
      }
      setAmbientOcclusion(WW) {
        this.callCore("setAmbientOcclusion", void 0, (iW => {
          iW.aPW(WW)
        }))
      }
      setPoseLod(WW) {
        this.callCore("setPoseLod", void 0, (iW => {
          iW.iLW(WW)
        }))
      }
      setDebugLog(WW, iW) {
        this.callCore(fW, void 0, (OW => {
          OW.OU(WW, iW)
        }))
      }
      takeDebugLog(WW) {
        return this.callCore(fW, [], (iW => iW.mU(WW)))
      }
      setTextureLayers(WW) {
        return this.callCore("setTextureLayers", !1, (iW => iW.ELW(WW)))
      }
      setBlockColours(WW) {
        let {
          blocks: iW,
          counts: OW,
          values: mW
        } = WW;
        return this.callCore("setBlockColours", !1, (WW => WW.SmW(iW, OW, mW)))
      }
      terrainTextureNames() {
        return this.callCore(CW, [], (WW => WW.tLW()))
      }
      setTerrainTextures(WW, iW, OW, mW) {
        return this.callCore(CW, !1, (EW => EW.mLW(WW, OW, iW, mW)))
      }
      setShaderPack(WW, iW, OW, mW, EW, NW) {
        return this.callCore("setShaderPack", !1, (PW => {
          var LW, cW;
          return null !== (LW = null === (cW = PW.umW) || void 0 === cW ? void 0 : cW.call(PW, WW, iW, OW, mW, EW, NW)) && void 0 !== LW && LW
        }))
      }
      warmBeforeJoin(WW, iW) {
        this.callCore(BW, void 0, (OW => {
          var mW;
          null === (mW = OW.TPW) || void 0 === mW || mW.call(OW, WW, iW)
        }))
      }
      firstViewTerrainCodes() {
        return this.callCore(BW, null, (WW => {
          var iW, OW;
          return null !== (iW = null === (OW = WW.ymW) || void 0 === OW ? void 0 : OW.call(WW)) && void 0 !== iW ? iW : null
        }))
      }
      sunShadowWantedTextures() {
        return this.callCore(XW, null, (WW => {
          var iW, OW;
          return null !== (iW = null === (OW = WW.PLW) || void 0 === OW ? void 0 : OW.call(WW)) && void 0 !== iW ? iW : null
        }))
      }
      setSunShadowTexture(WW, iW, OW, mW, EW) {
        this.callCore(XW, void 0, (NW => {
          var PW;
          null === (PW = NW.OLW) || void 0 === PW || PW.call(NW, WW, iW, OW, mW, EW)
        }))
      }
      takeSunShadowWarnings() {
        return this.callCore(XW, [], (WW => {
          var iW, OW;
          return null !== (iW = null === (OW = WW.cLW) || void 0 === OW ? void 0 : OW.call(WW)) && void 0 !== iW ? iW : []
        }))
      }
      sunShadowsHeld() {
        return this.callCore(XW, null, (WW => {
          var iW, OW;
          return null !== (iW = null === (OW = WW.LLW) || void 0 === OW ? void 0 : OW.call(WW)) && void 0 !== iW ? iW : null
        }))
      }
      callCore(WW, iW, OW) {
        if (this.stopped) return iW;
        try {
          return OW(this.core)
        } catch (mW) {
          return this.crash(WW, mW), iW
        }
      }
      readEvents(WW) {
        this.netOffsets.length = 0;
        const iW = this.headerView(),
          OW = iW[mW.ab.EventsPtr],
          EW = iW[mW.ab.EventsLen];
        if (this.envEvents.length = 0, this.graceEvents.length = 0, 0 === EW) return pW;
        const NW = [],
          PW = this.memory().buffer;
        if (OW % 4 !== 0 || OW + EW > PW.byteLength) return this.crash(VW, `events of ${EW} bytes at ${OW} outside ${PW.byteLength} bytes of memory`), pW;
        const LW = new DataView(PW, OW, EW),
          cW = this.rings.net,
          wW = (iW, OW) => iW + OW <= WW ? cW.copyWritten(iW, OW) : null;
        let tW = 0;
        for (; tW < EW;) {
          const WW = tW + mW.N,
            iW = WW <= EW ? LW.getUint32(tW, !0) : -1,
            cW = iW >>> 16;
          if (iW < 0 || cW > EW - WW) return this.crash(VW, `event record at ${tW} overruns its ${EW} bytes`), pW;
          const hW = 65535 & iW,
            HW = iW => LW.getUint32(WW + 4 * iW, !0);
          if (hW === mW.Q.RawMessage) {
            const WW = cW >= mW.Sc.BYTES ? 65535 & HW(1) : -1,
              iW = WW === mW.Sc.STRING_TYPE,
              OW = cW === (iW ? mW.Sc.STRING_TYPE_BYTES : mW.Sc.BYTES) ? wW(HW(2), HW(3)) : null,
              EW = iW && OW ? wW(HW(4), HW(5)) : null;
            if (!OW || iW && !EW) return this.crash(VW, `RawMessage at ${tW} of ${cW} bytes names bytes outside net-in`), pW;
            this.netOffsets.push(tW), NW.push({
              type: "message",
              conn: HW(0),
              tP: WW,
              payloadKind: HW(1) >>> 16,
              payload: OW,
              stringType: EW ? RW.decode(EW) : null
            })
          } else if (hW === mW.Q.CoreErrors) {
            var ZW, xW;
            const WW = cW >= 4 ? HW(0) : -1;
            if (WW < 0 || WW > mW.C.PAIRS_MAX || cW !== 4 * (mW.C.FIXED_WORDS + mW.C.PAIR_WORDS * WW)) return this.crash(VW, `CoreErrors at ${tW} of ${cW} bytes`), pW;
            const iW = [];
            for (let OW = 0; OW < WW; OW++) iW.push({
              code: HW(1 + 2 * OW),
              detail: HW(2 + 2 * OW)
            });
            null === (ZW = (xW = this.handlers).onCoreErrors) || void 0 === ZW || ZW.call(xW, iW, HW(1 + 2 * WW))
          } else if (hW === mW.Q.RenderReload) {
            var lW, AW;
            if (cW !== mW.cd.BYTES) return this.crash(VW, `RenderReload at ${tW} of ${cW} bytes`), pW;
            null === (lW = (AW = this.handlers).onRenderReload) || void 0 === lW || lW.call(AW, HW(0), HW(1), HW(2))
          } else if (hW === mW.Q.JoinPreloadEnded) {
            var bW, jW;
            if (cW !== mW.mb.BYTES) return this.crash(VW, `JoinPreloadEnded at ${tW} of ${cW} bytes`), pW;
            null === (bW = (jW = this.handlers).onJoinPreloadEnded) || void 0 === bW || bW.call(jW, {
              chunks: HW(mW.mb.CHUNKS),
              bytes: HW(mW.mb.BYTES_HELD),
              asked: HW(mW.mb.ASKED),
              replaced: HW(mW.mb.REPLACED),
              dropped: HW(mW.mb.DROPPED)
            })
          } else if (hW === mW.Q.Images) {
            var UW, kW;
            null === (UW = (kW = this.handlers).onImages) || void 0 === UW || UW.call(kW, new Uint8Array(PW.slice(OW + WW, OW + WW + cW)))
          } else if (hW === mW.Q.ModelRequests)
            for (let OW = 0; OW < cW >>> 2; OW++) {
              var sW, MW;
              null === (sW = (MW = this.handlers).onModelRequest) || void 0 === sW || sW.call(MW, HW(OW))
            } else if (hW === mW.Q.ModelTaken) {
              var KW, SW;
              if (cW < 4) return this.crash(VW, `ModelTaken at ${tW} of ${cW} bytes`), pW;
              const WW = new Uint32Array((cW >>> 2) - 1);
              for (let iW = 0; iW < WW.length; iW++) WW[iW] = HW(1 + iW);
              null === (KW = (SW = this.handlers).onModelTaken) || void 0 === KW || KW.call(SW, HW(0), WW)
            } else if (hW === mW.Q.TerrainTexturesWanted) {
            var YW, yW;
            if (0 !== cW) return this.crash(VW, `TerrainTexturesWanted at ${tW} of ${cW} bytes`), pW;
            null === (YW = (yW = this.handlers).onTerrainTexturesWanted) || void 0 === YW || YW.call(yW)
          } else if (hW === mW.Q.KeepAliveDue) {
            var TW, JW;
            if (cW > mW.qb) return this.crash(VW, `KeepAliveDue at ${tW} of ${cW} bytes`), pW;
            null === (TW = (JW = this.handlers).onKeepAlive) || void 0 === TW || TW.call(JW, new Uint8Array(PW, OW + WW, cW).slice())
          } else if (hW === mW.Q.ConnectionState) {
            if (cW !== mW.r) return this.crash(VW, `ConnectionState at ${tW} of ${cW} bytes`), pW;
            this.netOffsets.push(tW), NW.push({
              type: "connection",
              conn: HW(0),
              phase: HW(1),
              code: 0 | HW(2)
            })
          } else if (hW === mW.Q.EnvLighting || hW === mW.Q.SkyImages) {
            if (cW !== (hW === mW.Q.EnvLighting ? mW.M : mW.Cd)) return this.crash(VW, `event ${hW} at ${tW} of ${cW} bytes`), pW;
            this.envEvents.push({
              kind: hW,
              payload: new Uint8Array(PW.slice(OW + WW, OW + WW + cW))
            })
          } else if (hW === mW.Q.ReconnectGrace) {
            if (cW !== mW.tc) return this.crash(VW, `ReconnectGrace at ${tW} of ${cW} bytes`), pW;
            const WW = HW(2);
            this.graceEvents.push({
              conn: HW(0),
              graceMs: HW(1),
              sessionBased: 0 !== (WW & mW.Tc.SessionBased),
              replayOffer: 0 !== (WW & mW.Tc.ReplayOffer)
            })
          }
          tW = WW + (0, mW.xe)(cW)
        }
        return NW
      }
      takeSends(WW) {
        this.atSendsStop = !0;
        try {
          WW()
        } catch (iW) {
          this.crashOn(HW, iW)
        } finally {
          this.atSendsStop = !1
        }
        return !this.stopped
      }
      forEachNetOut(WW) {
        this.forEachOut(MW, "net-out", mW.ab.NetOutPtr, mW.ab.NetOutLen, mW.Ub, 0, ((iW, OW, EW, NW) => {
          const PW = (0, mW.ne)(OW);
          PW === mW.Wb.Frame ? WW((0, mW.me)(OW), EW) : this.crash(MW, `net-out record at ${NW} is kind ${PW}, not a frame`)
        }))
      }
      forEachWorkerOut(WW) {
        this.forEachOut(KW, "worker-out", mW.ab.WorkerOutPtr, mW.ab.WorkerOutLen, mW.Md, 4, ((iW, OW, EW, NW) => {
          const PW = 255 & iW,
            LW = PW === mW._d.Init ? this.initOf(EW, NW) : EW;
          null !== LW && WW(PW, iW >>> 8 & 16777215, LW)
        }))
      }
      initOf(WW, iW) {
        const OW = this.memory().buffer;
        if (WW.byteLength !== mW.bb) return this.crash(KW, `worker-out Init record at ${iW} is ${WW.byteLength} bytes, not a view`), null;
        const EW = new DataView(WW.buffer, WW.byteOffset, mW.bb),
          NW = EW.getUint32(0, !0),
          PW = EW.getUint32(4, !0);
        return NW + PW > OW.byteLength ? (this.crash(KW, `worker-out Init record at ${iW} names ${PW} bytes at ${NW} outside ${OW.byteLength} bytes of memory`), null) : new Uint8Array(OW, NW, PW)
      }
      forEachOut(WW, iW, OW, EW, NW, PW, LW) {
        if (!this.headerReadable()) return;
        const cW = this.headerView(),
          wW = cW[OW],
          tW = cW[EW];
        if (0 === tW) return;
        const ZW = this.memory().buffer;
        if (wW % 4 !== 0 || wW + tW > ZW.byteLength) return void this.crash(WW, `${iW} of ${tW} bytes at ${wW} outside ${ZW.byteLength} bytes of memory`);
        const xW = new DataView(ZW, wW, tW);
        let lW = 0;
        for (; lW < tW;) {
          const OW = lW + NW,
            EW = OW <= tW ? xW.getUint32(lW + PW, !0) : -1;
          if (EW < 0 || EW > tW - OW) return void this.crash(WW, `${iW} record at ${lW} overruns its ${tW} bytes`);
          if (LW(xW.getUint32(lW, !0), xW.getUint32(lW + 4, !0), new Uint8Array(ZW, wW + OW, EW), lW), this.stopped) return;
          lW = OW + (0, mW.xe)(EW)
        }
      }
      forEachEvent(WW) {
        if (this.stopped || null === this.lastHeader) return;
        const iW = this.headerView(),
          OW = iW[mW.ab.EventsPtr],
          EW = iW[mW.ab.EventsLen];
        if (0 === EW) return;
        const NW = this.memory().buffer;
        if (OW % 4 !== 0 || OW + EW > NW.byteLength) return void this.crash(VW, `events of ${EW} bytes at ${OW} outside ${NW.byteLength} bytes of memory`);
        const PW = new DataView(NW, OW, EW);
        let LW = 0;
        for (; LW < EW;) {
          const iW = LW + mW.N,
            OW = iW <= EW ? PW.getUint32(LW, !0) : -1,
            NW = OW >>> 16;
          if (OW < 0 || NW > EW - iW) return void this.crash(VW, `event record at ${LW} overruns its ${EW} bytes`);
          WW(65535 & OW, PW, iW, NW), LW = iW + (0, mW.xe)(NW)
        }
      }
      crashOn(WW, iW) {
        iW instanceof EW.e ? this.crash(VW, iW.message) : this.crash(WW, iW)
      }
      crash(WW, iW) {
        this.stopped || (this.stopped = !0, this.handlers.onCrash({
          site: WW,
          error: iW,
          header: this.lastHeader
        }))
      }
      headerWord(WW) {
        return this.headerReadable() ? this.headerView()[WW] : 0
      }
      headerReadable() {
        return !this.stopped && (null !== this.lastHeader || this.atSendsStop)
      }
      readLoadCounts(WW) {
        const iW = this.loadCountWords();
        return null !== iW && (WW.chunksReceived = iW[mW.Eb.ChunksReceived], WW.chunksCancelled = this.headerView()[mW.ab.ChunksCancelled], WW.chunksStored = iW[mW.Eb.ChunksStored], WW.jobsSent = iW[mW.Eb.JobsSent], WW.jobsDone = iW[mW.Eb.JobsDone], WW.jobsInFlight = iW[mW.Eb.JobsInFlight], WW.workersLive = iW[mW.Eb.WorkersLive], WW.workersRetired = iW[mW.Eb.WorkersRetired], !0)
      }
      readViewQueuedPrograms() {
        var WW, iW;
        const OW = null !== (WW = null === (iW = this.loadCountWords()) || void 0 === iW ? void 0 : iW[mW.Eb.ViewQueuedPrograms]) && void 0 !== WW ? WW : 0;
        return 0 === OW ? null : OW - 1
      }
      readFirstViewWait(WW, iW) {
        const OW = this.loadCountWords();
        return null === OW ? null : [OW[mW.Eb.FirstViewLinkMs], OW[mW.Eb.FirstViewTerrainMs], OW[mW.Eb.FirstViewHeldMs], OW[mW.Eb.FirstViewOtherMs], OW[mW.Eb.FirstViewGaps], OW[mW.Eb.FirstViewGapMs], WW, iW]
      }
      loadCountWords() {
        if (this.stopped || null === this.lastHeader) return null;
        const WW = this.core.iU();
        if (0 === WW) return null;
        const iW = this.memory().buffer;
        return iW !== this.loadCountsBuffer && (this.loadCountsBuffer = iW, this.loadCounts = new Uint32Array(iW, WW, mW.tb)), this.loadCounts
      }
      headerView() {
        const WW = this.memory().buffer;
        return WW !== this.headerBuffer && (this.headerBuffer = WW, this.header = new Uint32Array(WW, this.core.fl(), mW._)), this.header
      }
    }
  },
  42288: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => PW,
      e: () => NW
    });
    var mW = OW(5427);
    let EW = null;

    function NW(WW) {
      EW = {
        scanned: !1
      };
      try {
        return WW()
      } finally {
        EW = null
      }
    }

    function PW() {
      const WW = EW;
      if (null === WW) return (0, mW.e)();
      const iW = (0, mW.e)(!WW.scanned);
      return WW.scanned = !0, iW
    }
  },
  42358: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => mW
    });
    const mW = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  37446: (WW, iW, OW) => {
    function mW() {
      return OW(37453)
    }

    function EW() {
      return OW(37460)
    }

    function NW(WW) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(WW)
    }
    OW.d(iW, {
      b: () => NW,
      d: () => mW,
      h: () => EW
    })
  },
  37453: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  37460: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);