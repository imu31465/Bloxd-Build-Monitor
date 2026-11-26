export const id = 233;
export const ids = [233];
export const modules = {
  37112: (HH, BH, LH) => {
    function AH(HH, BH, LH) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(HH, BH).getContext("2d", LH);
      const AH = document.createElement("canvas");
      return AH.width = HH, AH.height = BH, AH.getContext("2d", LH)
    }

    function rH(HH, BH) {
      return HH.getContext("2d", BH)
    }
    LH.d(BH, {
      d: () => rH,
      h: () => AH
    })
  },
  42106: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => tH
    });
    const AH = 1 << 20,
      rH = 1 << 21,
      SH = 1024,
      hH = 2048;

    function tH(HH, BH, LH) {
      const tH = HH + AH,
        zH = BH + SH,
        CH = LH + AH;
      return tH < 0 || tH >= rH || CH < 0 || CH >= rH || zH < 0 || zH >= hH ? -1 : (tH * rH + CH) * hH + zH
    }
  },
  42101: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => AH,
      f: () => hH,
      i: () => rH,
      j: () => SH,
      k: () => EH,
      l: () => CH,
      m: () => zH,
      q: () => tH
    });
    LH(3835);
    LH(42106);

    function AH(HH) {}

    function rH(HH) {}

    function SH(HH) {}

    function hH(HH) {}

    function tH(HH) {}

    function zH(HH, BH, LH) {}

    function CH(HH) {}

    function EH(HH) {}
  },
  42092: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => vH,
      g: () => uH,
      h: () => ZH,
      l: () => mH,
      n: () => fH,
      p: () => lH,
      q: () => xH,
      u: () => WH,
      w: () => MH,
      x: () => kH,
      B: () => nH,
      E: () => UH,
      G: () => gH,
      J: () => wH,
      M: () => KH,
      O: () => eH
    });
    var AH = LH(5265),
      rH = LH(41962),
      SH = (LH(42101), LH(10));
    class hH {
      constructor(HH, BH) {
        this.memory = HH, this.access = BH, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.aX = 0, this.u32 = new SH.k(0), this.f32 = new SH.h(0), this.u8 = new SH.d(0), this.dataView = new SH.j(new ArrayBuffer(0)), this.refresh()
      }
      refresh() {
        this.ptr = this.access.ptr(), this.aX = this.access.aX(), this.buffer = (0, SH.G)(this.memory()), this.u32 = new SH.k(this.buffer, this.ptr, this.aX >>> 2), this.f32 = new SH.h(this.buffer, this.ptr, this.aX >>> 2), this.u8 = new SH.d(this.buffer, this.ptr, this.aX), this.dataView = new SH.j(this.buffer, this.ptr, this.aX)
      }
      ensureViews() {
        (0, SH.G)(this.memory()) !== this.buffer && this.refresh()
      }
      get view() {
        return this.ensureViews(), this.dataView
      }
      room(HH) {
        return !!this.fits(HH) || (this.dropped++, !1)
      }
      fits(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.cursor;
        this.ensureViews();
        const LH = BH + HH;
        return LH <= this.aX || LH <= AH.Hc && 0 !== this.access.reserve(LH) && (this.refresh(), LH <= this.aX)
      }
      consume(HH) {
        const BH = this.cursor - HH;
        BH > 0 && HH > 0 && (this.ensureViews(), this.u8.copyWithin(0, HH, this.cursor)), this.cursor = BH > 0 ? BH : 0
      }
      writeRecord(HH, BH, LH, rH, SH) {
        if (!this.room(AH.sb)) return !1;
        const hH = this.cursor >>> 2;
        return this.u32[hH] = 65535 & HH | (65535 & BH) << 16, this.f32[hH + 1] = LH, this.f32[hH + 2] = rH, this.u32[hH + 3] = SH >>> 0, this.cursor += AH.sb, !0
      }
      writeOptions(HH, BH) {
        const LH = BH.byteLength,
          rH = AH.sb + (0, AH.te)(LH);
        if (!this.fits(rH)) return !1;
        const SH = this.cursor,
          hH = SH >>> 2;
        this.u32[hH] = AH.tb.Options, this.u32[hH + 1] = LH, this.u32[hH + 2] = 0, this.u32[hH + 3] = HH >>> 0;
        const tH = SH + AH.sb;
        return this.u8.set(BH, tH), this.u8.fill(0, tH + LH, SH + rH), this.cursor += rH, !0
      }
      writeWorkerRecord(HH, BH, LH, rH, SH, hH) {
        const tH = hH.byteLength,
          zH = AH.Fd + (0, AH.te)(tH);
        if (tH > AH.Ed) return this.dropped++, !1;
        if (!this.room(zH)) return !1;
        const CH = this.cursor,
          EH = CH >>> 2;
        this.u32[EH] = HH >>> 0, this.u32[EH + 1] = 65535 & BH | (65535 & LH) << 16, this.u32[EH + 2] = rH >>> 0, this.u32[EH + 3] = SH >>> 0, this.u32[EH + 4] = tH;
        const XH = CH + AH.Fd;
        return this.u8.set(hH, XH), this.u8.fill(0, XH + tH, CH + zH), this.cursor += zH, !0
      }
      written() {
        return this.ensureViews(), this.u8.subarray(0, this.cursor)
      }
      writeFrame(HH, BH) {
        return this.writeNet(AH._b.Frame, HH, BH)
      }
      writeOpen(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(AH._b.Open, HH, zH(BH))
      }
      writeClose(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(AH._b.Close, HH, zH(BH))
      }
      writeNet(HH, BH, LH) {
        const rH = LH.byteLength,
          SH = AH.Zb + (0, AH.te)(rH);
        if (rH > AH.Tb) return this.dropped++, !1;
        if (!this.room(SH)) return !1;
        const hH = this.cursor;
        this.u32[hH >>> 2] = rH, this.u32[1 + (hH >>> 2)] = (0, AH.me)(HH, BH);
        const tH = hH + AH.Zb;
        return this.u8.set(LH, tH), this.u8.fill(0, tH + rH, hH + SH), this.cursor += SH, !0
      }
      PX(HH, BH, LH) {
        const rH = AH.r + (0, AH.te)(LH);
        if (!this.room(rH)) return -1;
        const SH = this.cursor;
        this.u32[SH >>> 2] = 65535 & HH | (65535 & BH) << 16, this.u32[1 + (SH >>> 2)] = LH;
        const hH = SH + AH.r;
        return this.u8.fill(0, hH, SH + rH), this.cursor += rH, hH
      }
      growForCmd(HH) {
        return this.fits(AH.r + (0, AH.te)(HH), 0)
      }
      writeCmd(HH, BH, LH) {
        const AH = this.PX(HH, BH, LH.byteLength);
        return !(AH < 0) && (this.u8.set(LH, AH), !0)
      }
      copyWritten(HH, BH) {
        return this.ensureViews(), this.u8.slice(HH, HH + BH)
      }
    }
    const tH = new SH.d(0);

    function zH(HH) {
      if (0 === HH) return tH;
      const BH = new SH.d(AH.Vb);
      for (let LH = 0; LH < AH.Vb; LH++) BH[LH] = HH >>> 8 * LH & 255;
      return BH
    }
    class CH {
      constructor(HH, BH) {
        this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new hH(BH, {
          ptr: () => HH.tG(),
          aX: () => HH.DhH(),
          reserve: BH => HH.BtH(BH)
        }), this.net = new hH(BH, {
          ptr: () => HH.phH(),
          aX: () => HH.ihH(),
          reserve: BH => HH.LtH(BH)
        }), this.worker = new hH(BH, {
          ptr: () => HH.OtH(),
          aX: () => HH.VtH(),
          reserve: BH => HH.AtH(BH)
        }), this.cmd = new hH(BH, {
          ptr: () => HH.chH(),
          aX: () => HH.lhH(),
          reserve: BH => HH.KhH(BH)
        })
      }
      reset(HH, BH, LH) {
        this.input.consume(HH), this.worker.consume(BH), this.cmd.consume(LH)
      }
    }
    var EH = LH(37037),
      XH = LH(2605),
      GH = LH(5260),
      YH = LH(42110);
    const uH = "coreFrame",
      QH = "fatalStatus",
      WH = "otherCall",
      MH = "coreRings",
      xH = "netIn",
      vH = "abi",
      PH = "netOut",
      TH = "workerOut",
      UH = "worldgenHost",
      VH = "eventWalker",
      OH = "netEvent",
      bH = "envEvent",
      kH = "sharedTables",
      mH = "inputAction",
      oH = "frameSends",
      IH = new Set([VH, OH, bH, oH, mH, kH]),
      fH = "wasmMemory",
      lH = "meshHost";

    function KH(HH, BH) {
      HH.forEachWorkerOut(((LH, rH, SH) => {
        if ((0, AH.ee)(LH)) try {
          var hH;
          null === (hH = BH.worldgen) || void 0 === hH || hH.take(LH, SH)
        } catch (zH) {
          HH.crash(UH, zH)
        } else try {
          var tH;
          null === (tH = BH.mesh) || void 0 === tH || tH.take(LH, rH, SH)
        } catch (zH) {
          HH.crash(lH, zH)
        }
      }))
    }
    const cH = 1048576;

    function eH(HH, BH) {
      let LH = !1;
      const AH = () => {
        LH = !1, BH()
      };
      return () => {
        !LH && HH.cursor >= cH && (LH = !0, queueMicrotask(AH))
      }
    }
    const qH = new Set([QH, WH, UH, lH]);

    function gH(HH) {
      return IH.has(HH.site) ? HH.error instanceof WebAssembly.RuntimeError || (0, rH.j)(HH.error) : !qH.has(HH.site) && HH.error instanceof Error
    }
    const NH = "events",
      RH = [],
      jH = "debugLog",
      nH = "terrainTextures",
      FH = "sunShadowTextures",
      DH = new TextDecoder;

    function wH(HH, BH) {
      const {
        site: LH,
        error: rH,
        header: SH
      } = HH, hH = SH ? (0, AH.Zd)(SH.lastError) : "noFrame", tH = `CORE-${LH===QH?hH:LH}`, zH = null === rH || void 0 === rH ? "" : ` ${(0,EH.k)(rH)}`, CH = {
        site: LH,
        wasmBuild: BH.wasm,
        clientVersion: BH.client
      };
      return SH && (CH.status = String(SH.status), CH.lastError = hH, CH.lastErrorCode = String(SH.lastError), CH.lastErrorDetail = String(SH.lastErrorDetail), CH.errorCount = String(SH.errorCount), CH.frameIndex = String(SH.frameIndex), CH.tickIndex = String(SH.tickIndex)), {
        code: tH,
        message: `core ${LH}, last error ${hH};${zH}`,
        details: CH
      }
    }
    class ZH {
      constructor(HH, BH, LH) {
        this.core = HH, this.memory = BH, this.handlers = LH, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.loadCountsBuffer = null, this.loadCounts = new Uint32Array(0), this.unsentUiPrefs = null, this.eventWalker = null, this.netOffsets = [], this.frameEvents = {
          ptr: 0,
          len: 0,
          net: RH,
          netOffsets: this.netOffsets,
          kind: "none"
        }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.atSendsStop = !1, this.rings = new CH(HH, BH)
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
      framePaces(HH) {
        if (this.stopped || this.drawsHeld) return !1;
        try {
          return this.core.jhH(HH)
        } catch (BH) {
          return this.crash(uH, BH), !1
        }
      }
      get isStopped() {
        return this.stopped
      }
      frame(HH, BH) {
        var LH;
        let SH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.stopped) return !1;
        if (!this.writePendingInput()) return !1;
        const {
          input: hH,
          net: tH,
          worker: zH,
          cmd: CH
        } = this.rings, EH = tH.cursor, XH = BH && !this.drawsHeld;
        let WH = AH.J.Fatal;
        const MH = hH.cursor,
          vH = zH.cursor,
          PH = CH.cursor;
        let TH, UH = null;
        const bH = this.handlers.onSends;
        try {
          const BH = (XH ? AH.cb.Draws : 0) | (SH ? AH.cb.NetAll : 0) | (bH ? AH.cb.StopForSends : 0);
          WH = (0, YH.h)((() => {
            let LH = this.core.frame(HH, MH, tH.cursor, vH, BH, PH);
            for (; LH === AH.jd && bH;) {
              var rH;
              if (TH ??= null === (rH = this.gameHost) || void 0 === rH ? void 0 : rH.takeFault(), void 0 === TH && !this.takeSends(bH)) return AH.J.Fatal;
              LH = this.core.dW()
            }
            return LH
          }))
        } catch (DH) {
          UH = {
            error: DH
          }
        }
        TH ??= null === (LH = this.gameHost) || void 0 === LH ? void 0 : LH.takeFault();
        const kH = this.stopped || null !== UH || void 0 !== TH;
        this.rings.reset(kH ? hH.cursor : MH, kH ? zH.cursor : vH, kH ? CH.cursor : PH);
        const mH = null === UH && void 0 === TH,
          oH = mH && !this.stopped && WH === AH.J.Fatal && 0 === this.core.IY(),
          IH = mH && !oH ? this.headerView() : null,
          fH = oH ? {
            ...null !== (lH = this.lastHeader) && void 0 !== lH ? lH : (0, AH.ue)(new Uint32Array(AH.kb)),
            status: AH.J.Fatal,
            lastError: AH.F.CoreBusy,
            lastErrorDetail: 0
          } : null === IH ? null : (0, AH.ue)(IH);
        var lH;
        null !== fH && (this.lastHeader = fH);
        const KH = null !== fH && WH !== AH.J.Fatal,
          cH = KH && null !== IH ? IH[AH.lb.NetInKept] : 0,
          eH = KH && cH <= EH && cH % 4 === 0 ? cH : null;
        var qH, gH;
        null !== fH && null !== eH && WH === AH.J.Errors && (null === (qH = (gH = this.handlers).onErrors) || void 0 === qH || qH.call(gH, fH));
        const NH = null === eH ? RH : this.readEvents(EH);
        if (tH.consume(EH - (null !== eH && void 0 !== eH ? eH : 0)), this.netKept = null !== eH && void 0 !== eH ? eH : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== UH) return this.crash(uH, void 0 === TH || TH instanceof rH.d ? UH.error : TH), !1;
        if (void 0 !== TH || null === fH) return this.crashOn(uH, TH), !1;
        if (oH) return this.crash(QH, null), !1;
        const jH = this.headerView()[AH.lb.FrameDraw];
        if (this.lastFrameKind = (0, GH.d)(XH, jH), WH === AH.J.Fatal) return this.crash(QH, null), !1;
        if (null === eH) return this.crash(xH, `the core kept ${cH} of ${EH} net-in bytes`), !1;
        if (this.eventWalker) {
          if (this.stopped) return !1;
          const HH = this.frameEvents,
            BH = this.headerView();
          HH.ptr = BH[AH.lb.EventsPtr], HH.len = BH[AH.lb.EventsLen], HH.net = NH, HH.kind = this.lastFrameKind;
          try {
            this.eventWalker(HH)
          } catch (DH) {
            return this.crashOn(VH, DH), !1
          }
          return this.handEnvEvents()
        }
        for (const AH of NH) {
          if (this.stopped) return !1;
          try {
            var nH, FH;
            null === (nH = (FH = this.handlers).onNetEvent) || void 0 === nH || nH.call(FH, AH)
          } catch (DH) {
            return this.crashOn(OH, DH), !1
          }
        }
        return this.handEnvEvents()
      }
      handEnvEvents() {
        for (const SH of this.graceEvents) {
          if (this.stopped) return !1;
          try {
            var HH, BH;
            null === (HH = (BH = this.handlers).onReconnectGrace) || void 0 === HH || HH.call(BH, SH)
          } catch (rH) {
            return this.crashOn(OH, rH), !1
          }
        }
        for (const SH of this.envEvents) {
          if (this.stopped) return !1;
          try {
            var LH, AH;
            null === (LH = (AH = this.handlers).onEnvEvent) || void 0 === LH || LH.call(AH, SH)
          } catch (rH) {
            return this.crashOn(bH, rH), !1
          }
        }
        return !this.stopped
      }
      setEventWalker(HH) {
        this.eventWalker = HH
      }
      writePendingInput() {
        if (this.stopped) return !1;
        const {
          input: HH
        } = this.rings;
        try {
          const BH = this.unsentUiPrefs;
          BH && HH.writeRecord(AH.tb.UiPrefs, 0, BH.nametagCutDistance, 0, (0, AH.we)(BH)) && (this.unsentUiPrefs = null);
          const LH = this.unsentEnvPrefs;
          LH && HH.writeRecord(AH.tb.EnvPrefs, (0, AH.ae)(LH), LH.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
          const rH = this.unsentLookPrefs;
          rH && HH.writeRecord(AH.tb.Sensitivity, 0, rH.mouse, rH.touch, (0, XH.m)(rH.fovPercent)) && (this.unsentLookPrefs = null);
          let SH = 0;
          for (const {
              aux: AH,
              payload: hH
            }
            of this.unsentOptions) {
            if (!HH.writeOptions(AH, hH)) {
              if (HH.cursor > 0) break;
              this.optionsDropped++
            }
            SH++
          }
          SH > 0 && this.unsentOptions.splice(0, SH)
        } catch (BH) {
          return this.crash(MH, BH), !1
        }
        return !0
      }
      setHoldDraws(HH) {
        this.drawsHeld = HH
      }
      setUiPrefs(HH) {
        this.unsentUiPrefs = {
          ...HH
        }
      }
      setEnvPrefs(HH) {
        this.unsentEnvPrefs = {
          ...HH
        }
      }
      setLookPrefs(HH) {
        this.unsentLookPrefs = {
          ...HH
        }
      }
      queueOptions(HH, BH) {
        return !this.isStopped && (BH.byteLength > AH.cc.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
          aux: HH,
          payload: BH
        }), !0))
      }
      setChunkCap(HH) {
        return this.callCore("setChunkCap", null, (BH => BH.CtH(HH)))
      }
      shedMemory(HH) {
        const BH = this.callCore("shedMemory", null, (BH => BH.WtH(HH)));
        return 0 === BH ? null : BH
      }
      addDistanceInUse() {
        const HH = this.callCore("addDistanceInUse", null, (HH => HH.khH()));
        return 0 === HH ? null : HH
      }
      setChunkAddDistance(HH, BH) {
        return this.callCore("setChunkAddDistance", !1, (LH => LH.ztH(HH, BH)))
      }
      setGameHost(HH) {
        return this.callCore("setGameHost", !1, (BH => (BH.RhH(HH), this.gameHost = HH, !0)))
      }
      setAntiCheatProbes(HH) {
        return this.callCore("setAntiCheatProbes", !1, (BH => BH.htH(HH)))
      }
      setAmbientOcclusion(HH) {
        this.callCore("setAmbientOcclusion", void 0, (BH => {
          BH.StH(HH)
        }))
      }
      setPoseLod(HH) {
        this.callCore("setPoseLod", void 0, (BH => {
          BH.XtH(HH)
        }))
      }
      setDebugLog(HH, BH) {
        this.callCore(jH, void 0, (LH => {
          LH.nW(HH, BH)
        }))
      }
      takeDebugLog(HH) {
        return this.callCore(jH, [], (BH => BH.FW(HH)))
      }
      setTextureLayers(HH) {
        return this.callCore("setTextureLayers", !1, (BH => BH.QtH(HH)))
      }
      setBlockColours(HH) {
        let {
          blocks: BH,
          counts: LH,
          values: AH
        } = HH;
        return this.callCore("setBlockColours", !1, (HH => HH.CrH(BH, LH, AH)))
      }
      terrainTextureNames() {
        return this.callCore(nH, [], (HH => HH.UtH()))
      }
      setTerrainTextures(HH, BH, LH, AH) {
        return this.callCore(nH, !1, (rH => rH.utH(HH, LH, BH, AH)))
      }
      setShaderPack(HH, BH, LH, AH, rH, SH) {
        return this.callCore("setShaderPack", !1, (hH => {
          var tH, zH;
          return null !== (tH = null === (zH = hH.PrH) || void 0 === zH ? void 0 : zH.call(hH, HH, BH, LH, AH, rH, SH)) && void 0 !== tH && tH
        }))
      }
      sunShadowWantedTextures() {
        return this.callCore(FH, null, (HH => {
          var BH, LH;
          return null !== (BH = null === (LH = HH.MtH) || void 0 === LH ? void 0 : LH.call(HH)) && void 0 !== BH ? BH : null
        }))
      }
      setSunShadowTexture(HH, BH, LH, AH, rH) {
        this.callCore(FH, void 0, (SH => {
          var hH;
          null === (hH = SH.YtH) || void 0 === hH || hH.call(SH, HH, BH, LH, AH, rH)
        }))
      }
      takeSunShadowWarnings() {
        return this.callCore(FH, [], (HH => {
          var BH, LH;
          return null !== (BH = null === (LH = HH.PtH) || void 0 === LH ? void 0 : LH.call(HH)) && void 0 !== BH ? BH : []
        }))
      }
      sunShadowsHeld() {
        return this.callCore(FH, null, (HH => {
          var BH, LH;
          return null !== (BH = null === (LH = HH.vtH) || void 0 === LH ? void 0 : LH.call(HH)) && void 0 !== BH ? BH : null
        }))
      }
      callCore(HH, BH, LH) {
        if (this.stopped) return BH;
        try {
          return LH(this.core)
        } catch (AH) {
          return this.crash(HH, AH), BH
        }
      }
      readEvents(HH) {
        this.netOffsets.length = 0;
        const BH = this.headerView(),
          LH = BH[AH.lb.EventsPtr],
          rH = BH[AH.lb.EventsLen];
        if (this.envEvents.length = 0, this.graceEvents.length = 0, 0 === rH) return RH;
        const SH = [],
          hH = this.memory().buffer;
        if (LH % 4 !== 0 || LH + rH > hH.byteLength) return this.crash(NH, `events of ${rH} bytes at ${LH} outside ${hH.byteLength} bytes of memory`), RH;
        const tH = new DataView(hH, LH, rH),
          zH = this.rings.net,
          CH = (BH, LH) => BH + LH <= HH ? zH.copyWritten(BH, LH) : null;
        let EH = 0;
        for (; EH < rH;) {
          const HH = EH + AH.U,
            BH = HH <= rH ? tH.getUint32(EH, !0) : -1,
            zH = BH >>> 16;
          if (BH < 0 || zH > rH - HH) return this.crash(NH, `event record at ${EH} overruns its ${rH} bytes`), RH;
          const mH = 65535 & BH,
            oH = BH => tH.getUint32(HH + 4 * BH, !0);
          if (mH === AH.X.RawMessage) {
            const HH = zH >= AH.Ic.BYTES ? 65535 & oH(1) : -1,
              BH = HH === AH.Ic.STRING_TYPE,
              LH = zH === (BH ? AH.Ic.STRING_TYPE_BYTES : AH.Ic.BYTES) ? CH(oH(2), oH(3)) : null,
              rH = BH && LH ? CH(oH(4), oH(5)) : null;
            if (!LH || BH && !rH) return this.crash(NH, `RawMessage at ${EH} of ${zH} bytes names bytes outside net-in`), RH;
            this.netOffsets.push(EH), SH.push({
              type: "message",
              conn: oH(0),
              kt: HH,
              payloadKind: oH(1) >>> 16,
              payload: LH,
              stringType: rH ? DH.decode(rH) : null
            })
          } else if (mH === AH.X.CoreErrors) {
            var XH, GH;
            const HH = zH >= 4 ? oH(0) : -1;
            if (HH < 0 || HH > AH.D.PAIRS_MAX || zH !== 4 * (AH.D.FIXED_WORDS + AH.D.PAIR_WORDS * HH)) return this.crash(NH, `CoreErrors at ${EH} of ${zH} bytes`), RH;
            const BH = [];
            for (let LH = 0; LH < HH; LH++) BH.push({
              code: oH(1 + 2 * LH),
              detail: oH(2 + 2 * LH)
            });
            null === (XH = (GH = this.handlers).onCoreErrors) || void 0 === XH || XH.call(GH, BH, oH(1 + 2 * HH))
          } else if (mH === AH.X.RenderReload) {
            var YH, uH;
            if (zH !== AH.Vc.BYTES) return this.crash(NH, `RenderReload at ${EH} of ${zH} bytes`), RH;
            null === (YH = (uH = this.handlers).onRenderReload) || void 0 === YH || YH.call(uH, oH(0), oH(1), oH(2))
          } else if (mH === AH.X.JoinPreloadEnded) {
            var QH, WH;
            if (zH !== AH.yb.BYTES) return this.crash(NH, `JoinPreloadEnded at ${EH} of ${zH} bytes`), RH;
            null === (QH = (WH = this.handlers).onJoinPreloadEnded) || void 0 === QH || QH.call(WH, {
              chunks: oH(AH.yb.CHUNKS),
              bytes: oH(AH.yb.BYTES_HELD),
              asked: oH(AH.yb.ASKED),
              replaced: oH(AH.yb.REPLACED),
              dropped: oH(AH.yb.DROPPED)
            })
          } else if (mH === AH.X.Images) {
            var MH, xH;
            null === (MH = (xH = this.handlers).onImages) || void 0 === MH || MH.call(xH, new Uint8Array(hH.slice(LH + HH, LH + HH + zH)))
          } else if (mH === AH.X.ModelRequests)
            for (let LH = 0; LH < zH >>> 2; LH++) {
              var vH, PH;
              null === (vH = (PH = this.handlers).onModelRequest) || void 0 === vH || vH.call(PH, oH(LH))
            } else if (mH === AH.X.ModelTaken) {
              var TH, UH;
              if (zH < 4) return this.crash(NH, `ModelTaken at ${EH} of ${zH} bytes`), RH;
              const HH = new Uint32Array((zH >>> 2) - 1);
              for (let BH = 0; BH < HH.length; BH++) HH[BH] = oH(1 + BH);
              null === (TH = (UH = this.handlers).onModelTaken) || void 0 === TH || TH.call(UH, oH(0), HH)
            } else if (mH === AH.X.TerrainTexturesWanted) {
            var VH, OH;
            if (0 !== zH) return this.crash(NH, `TerrainTexturesWanted at ${EH} of ${zH} bytes`), RH;
            null === (VH = (OH = this.handlers).onTerrainTexturesWanted) || void 0 === VH || VH.call(OH)
          } else if (mH === AH.X.KeepAliveDue) {
            var bH, kH;
            if (zH > AH.zb) return this.crash(NH, `KeepAliveDue at ${EH} of ${zH} bytes`), RH;
            null === (bH = (kH = this.handlers).onKeepAlive) || void 0 === bH || bH.call(kH, new Uint8Array(hH, LH + HH, zH).slice())
          } else if (mH === AH.X.ConnectionState) {
            if (zH !== AH.t) return this.crash(NH, `ConnectionState at ${EH} of ${zH} bytes`), RH;
            this.netOffsets.push(EH), SH.push({
              type: "connection",
              conn: oH(0),
              phase: oH(1),
              code: 0 | oH(2)
            })
          } else if (mH === AH.X.EnvLighting || mH === AH.X.SkyImages) {
            if (zH !== (mH === AH.X.EnvLighting ? AH.R : AH.pd)) return this.crash(NH, `event ${mH} at ${EH} of ${zH} bytes`), RH;
            this.envEvents.push({
              kind: mH,
              payload: new Uint8Array(hH.slice(LH + HH, LH + HH + zH))
            })
          } else if (mH === AH.X.ReconnectGrace) {
            if (zH !== AH.pc) return this.crash(NH, `ReconnectGrace at ${EH} of ${zH} bytes`), RH;
            const HH = oH(2);
            this.graceEvents.push({
              conn: oH(0),
              graceMs: oH(1),
              sessionBased: 0 !== (HH & AH.Jc.SessionBased),
              replayOffer: 0 !== (HH & AH.Jc.ReplayOffer)
            })
          }
          EH = HH + (0, AH.te)(zH)
        }
        return SH
      }
      takeSends(HH) {
        this.atSendsStop = !0;
        try {
          HH()
        } catch (BH) {
          this.crashOn(oH, BH)
        } finally {
          this.atSendsStop = !1
        }
        return !this.stopped
      }
      forEachNetOut(HH) {
        this.forEachOut(PH, "net-out", AH.lb.NetOutPtr, AH.lb.NetOutLen, AH.Zb, 0, ((BH, LH, rH, SH) => {
          const hH = (0, AH.le)(LH);
          hH === AH._b.Frame ? HH((0, AH.he)(LH), rH) : this.crash(PH, `net-out record at ${SH} is kind ${hH}, not a frame`)
        }))
      }
      forEachWorkerOut(HH) {
        this.forEachOut(TH, "worker-out", AH.lb.WorkerOutPtr, AH.lb.WorkerOutLen, AH.Bd, 4, ((BH, LH, rH, SH) => {
          const hH = 255 & BH,
            tH = hH === AH.Pd.Init ? this.initOf(rH, SH) : rH;
          null !== tH && HH(hH, BH >>> 8 & 16777215, tH)
        }))
      }
      initOf(HH, BH) {
        const LH = this.memory().buffer;
        if (HH.byteLength !== AH.ob) return this.crash(TH, `worker-out Init record at ${BH} is ${HH.byteLength} bytes, not a view`), null;
        const rH = new DataView(HH.buffer, HH.byteOffset, AH.ob),
          SH = rH.getUint32(0, !0),
          hH = rH.getUint32(4, !0);
        return SH + hH > LH.byteLength ? (this.crash(TH, `worker-out Init record at ${BH} names ${hH} bytes at ${SH} outside ${LH.byteLength} bytes of memory`), null) : new Uint8Array(LH, SH, hH)
      }
      forEachOut(HH, BH, LH, rH, SH, hH, tH) {
        if (!this.headerReadable()) return;
        const zH = this.headerView(),
          CH = zH[LH],
          EH = zH[rH];
        if (0 === EH) return;
        const XH = this.memory().buffer;
        if (CH % 4 !== 0 || CH + EH > XH.byteLength) return void this.crash(HH, `${BH} of ${EH} bytes at ${CH} outside ${XH.byteLength} bytes of memory`);
        const GH = new DataView(XH, CH, EH);
        let YH = 0;
        for (; YH < EH;) {
          const LH = YH + SH,
            rH = LH <= EH ? GH.getUint32(YH + hH, !0) : -1;
          if (rH < 0 || rH > EH - LH) return void this.crash(HH, `${BH} record at ${YH} overruns its ${EH} bytes`);
          if (tH(GH.getUint32(YH, !0), GH.getUint32(YH + 4, !0), new Uint8Array(XH, CH + LH, rH), YH), this.stopped) return;
          YH = LH + (0, AH.te)(rH)
        }
      }
      forEachEvent(HH) {
        if (this.stopped || null === this.lastHeader) return;
        const BH = this.headerView(),
          LH = BH[AH.lb.EventsPtr],
          rH = BH[AH.lb.EventsLen];
        if (0 === rH) return;
        const SH = this.memory().buffer;
        if (LH % 4 !== 0 || LH + rH > SH.byteLength) return void this.crash(NH, `events of ${rH} bytes at ${LH} outside ${SH.byteLength} bytes of memory`);
        const hH = new DataView(SH, LH, rH);
        let tH = 0;
        for (; tH < rH;) {
          const BH = tH + AH.U,
            LH = BH <= rH ? hH.getUint32(tH, !0) : -1,
            SH = LH >>> 16;
          if (LH < 0 || SH > rH - BH) return void this.crash(NH, `event record at ${tH} overruns its ${rH} bytes`);
          HH(65535 & LH, hH, BH, SH), tH = BH + (0, AH.te)(SH)
        }
      }
      crashOn(HH, BH) {
        BH instanceof rH.d ? this.crash(NH, BH.message) : this.crash(HH, BH)
      }
      crash(HH, BH) {
        this.stopped || (this.stopped = !0, this.handlers.onCrash({
          site: HH,
          error: BH,
          header: this.lastHeader
        }))
      }
      headerWord(HH) {
        return this.headerReadable() ? this.headerView()[HH] : 0
      }
      headerReadable() {
        return !this.stopped && (null !== this.lastHeader || this.atSendsStop)
      }
      readLoadCounts(HH) {
        const BH = this.loadCountWords();
        return null !== BH && (HH.chunksReceived = BH[AH.Kb.ChunksReceived], HH.chunksCancelled = this.headerView()[AH.lb.ChunksCancelled], HH.chunksStored = BH[AH.Kb.ChunksStored], HH.jobsSent = BH[AH.Kb.JobsSent], HH.jobsDone = BH[AH.Kb.JobsDone], HH.jobsInFlight = BH[AH.Kb.JobsInFlight], HH.workersLive = BH[AH.Kb.WorkersLive], HH.workersRetired = BH[AH.Kb.WorkersRetired], !0)
      }
      readViewQueuedPrograms() {
        var HH, BH;
        const LH = null !== (HH = null === (BH = this.loadCountWords()) || void 0 === BH ? void 0 : BH[AH.Kb.ViewQueuedPrograms]) && void 0 !== HH ? HH : 0;
        return 0 === LH ? null : LH - 1
      }
      readFirstViewWait(HH, BH) {
        const LH = this.loadCountWords();
        return null === LH ? null : [LH[AH.Kb.FirstViewLinkMs], LH[AH.Kb.FirstViewTerrainMs], LH[AH.Kb.FirstViewHeldMs], LH[AH.Kb.FirstViewOtherMs], LH[AH.Kb.FirstViewGaps], LH[AH.Kb.FirstViewGapMs], HH, BH]
      }
      loadCountWords() {
        if (this.stopped || null === this.lastHeader) return null;
        const HH = this.core.jW();
        if (0 === HH) return null;
        const BH = this.memory().buffer;
        return BH !== this.loadCountsBuffer && (this.loadCountsBuffer = BH, this.loadCounts = new Uint32Array(BH, HH, AH.Ab)), this.loadCounts
      }
      headerView() {
        const HH = this.memory().buffer;
        return HH !== this.headerBuffer && (this.headerBuffer = HH, this.header = new Uint32Array(HH, this.core.IY(), AH.kb)), this.header
      }
    }
  },
  42110: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => hH,
      h: () => SH
    });
    var AH = LH(5143);
    let rH = null;

    function SH(HH) {
      rH = {
        scanned: !1
      };
      try {
        return HH()
      } finally {
        rH = null
      }
    }

    function hH() {
      const HH = rH;
      if (null === HH) return (0, AH.e)();
      const BH = (0, AH.e)(!HH.scanned);
      return HH.scanned = !0, BH
    }
  },
  42150: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => AH
    });
    const AH = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  37177: (HH, BH, LH) => {
    function AH() {
      return LH(37184)
    }

    function rH() {
      return LH(37187)
    }

    function SH(HH) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(HH)
    }
    LH.d(BH, {
      e: () => SH,
      h: () => AH,
      k: () => rH
    })
  },
  37037: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => tH,
      f: () => CH,
      g: () => hH,
      k: () => XH
    });
    var AH = LH(37023),
      rH = LH(10);
    const SH = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function hH(HH) {
      if (HH instanceof WebAssembly.RuntimeError) return !0;
      const BH = HH instanceof Error ? HH.stack : void 0;
      return "string" === typeof BH && SH.test(BH)
    }

    function tH(HH, BH, LH) {
      var rH;
      const hH = HH instanceof Error ? HH.name : "thrown",
        tH = (HH instanceof Error && null !== (rH = HH.stack) && void 0 !== rH ? rH : "").split("\n").filter((HH => SH.test(HH))).slice(0, 8).map((HH => HH.trim())),
        zH = null === BH ? "wasm memory unknown" : `wasm memory ${Math.round(BH/2**20)} MB`,
        CH = null === LH.panic ? "" : `, panic: ${(0,AH.i)(LH.panic)}`,
        EH = `${hH}: ${HH instanceof Error?HH.message:String(HH)}`;
      return `${(0,AH.m)(LH.kind,LH.refusedBytes)} ${EH} (${zH})${CH}${tH.length>0?` | ${tH.join(" < ")}`:""}`
    }
    const zH = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function CH(HH) {
      var BH;
      let LH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(HH instanceof Error) || !zH.test(HH.message)) return {};
      if (!("detached" in LH)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, rH.R)(null === (BH = (0, rH.J)(LH, "detached")) || void 0 === BH ? void 0 : BH.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const EH = 500;

    function XH(HH) {
      let BH = "[object Object]";
      try {
        BH = String(HH)
      } catch {}
      if ("[object Object]" !== BH) return BH;
      try {
        var LH, AH;
        return null !== (LH = null === (AH = JSON.stringify(HH)) || void 0 === AH ? void 0 : AH.slice(0, EH)) && void 0 !== LH ? LH : BH
      } catch {
        return BH
      }
    }
  },
  37184: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  37187: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  },
  37023: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => AH,
      f: () => SH,
      i: () => zH,
      j: () => hH,
      m: () => rH
    });
    const AH = /^alloc_failed (\d+) bytes$/;

    function rH(HH, BH) {
      return SH(HH, BH) ? `trap=alloc_failed ${BH} bytes` : `trap=${HH}`
    }

    function SH(HH, BH) {
      return "unreachable" === HH && BH > 0
    }

    function hH(HH, BH, LH) {
      const AH = function(HH) {
        return HH instanceof WebAssembly.RuntimeError ? /unreachable/i.test(HH.message) ? "unreachable" : /out of bounds/i.test(HH.message) ? "out_of_bounds" : "runtime_error" : (HH instanceof RangeError || HH instanceof Error && "InternalError" === HH.name) && /call stack|recursion/i.test(HH.message) ? "stack_overflow" : "js_error"
      }(HH);
      if ("unreachable" !== AH) return {
        kind: AH,
        panic: null,
        refusedBytes: 0
      };
      const rH = BH(),
        SH = LH();
      return {
        kind: AH,
        panic: SH > 0 ? null : rH,
        refusedBytes: SH
      }
    }
    const tH = 300;

    function zH(HH) {
      return HH.replace(/\s*\n\s*/g, " / ").slice(0, tH)
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);