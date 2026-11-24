export const id = 214;
export const ids = [214];
export const modules = {
  40957: (TT, UT, mT) => {
    function WT(TT, UT, mT) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(TT, UT).getContext("2d", mT);
      const WT = document.createElement("canvas");
      return WT.width = TT, WT.height = UT, WT.getContext("2d", mT)
    }

    function zT(TT, UT) {
      return TT.getContext("2d", UT)
    }
    mT.d(UT, {
      c: () => zT,
      e: () => WT
    })
  },
  40915: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => nT
    });
    const WT = 1 << 20,
      zT = 1 << 21,
      MT = 1024,
      gT = 2048;

    function nT(TT, UT, mT) {
      const nT = TT + WT,
        HT = UT + MT,
        kT = mT + WT;
      return nT < 0 || nT >= zT || kT < 0 || kT >= zT || HT < 0 || HT >= gT ? -1 : (nT * zT + kT) * gT + HT
    }
  },
  40912: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => WT,
      d: () => gT,
      f: () => zT,
      j: () => MT,
      l: () => jT,
      m: () => kT,
      q: () => HT,
      t: () => nT
    });
    mT(3559);
    mT(40915);

    function WT(TT) {}

    function zT(TT) {}

    function MT(TT) {}

    function gT(TT) {}

    function nT(TT) {}

    function HT(TT, UT, mT) {}

    function kT(TT) {}

    function jT(TT) {}
  },
  40907: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => qT,
      h: () => BT,
      j: () => GT,
      k: () => dT,
      m: () => aT,
      n: () => yT,
      o: () => fT,
      s: () => cT,
      u: () => vT,
      w: () => xT,
      y: () => CT,
      B: () => OT,
      C: () => FT,
      E: () => ST,
      H: () => XT,
      K: () => QT
    });
    var WT = mT(4895),
      zT = mT(40786),
      MT = (mT(40912), mT(11));
    class gT {
      constructor(TT, UT) {
        this.memory = TT, this.access = UT, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.fl = 0, this.u32 = new MT.m(0), this.f32 = new MT.g(0), this.u8 = new MT.e(0), this.dataView = new MT.i(new ArrayBuffer(0)), this.refresh()
      }
      refresh() {
        this.ptr = this.access.ptr(), this.fl = this.access.fl(), this.buffer = (0, MT.H)(this.memory()), this.u32 = new MT.m(this.buffer, this.ptr, this.fl >>> 2), this.f32 = new MT.g(this.buffer, this.ptr, this.fl >>> 2), this.u8 = new MT.e(this.buffer, this.ptr, this.fl), this.dataView = new MT.i(this.buffer, this.ptr, this.fl)
      }
      ensureViews() {
        (0, MT.H)(this.memory()) !== this.buffer && this.refresh()
      }
      get view() {
        return this.ensureViews(), this.dataView
      }
      room(TT) {
        return !!this.fits(TT) || (this.dropped++, !1)
      }
      fits(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.cursor;
        this.ensureViews();
        const mT = UT + TT;
        return mT <= this.fl || mT <= WT.Kc && 0 !== this.access.reserve(mT) && (this.refresh(), mT <= this.fl)
      }
      consume(TT) {
        const UT = this.cursor - TT;
        UT > 0 && TT > 0 && (this.ensureViews(), this.u8.copyWithin(0, TT, this.cursor)), this.cursor = UT > 0 ? UT : 0
      }
      writeRecord(TT, UT, mT, zT, MT) {
        if (!this.room(WT.Fb)) return !1;
        const gT = this.cursor >>> 2;
        return this.u32[gT] = 65535 & TT | (65535 & UT) << 16, this.f32[gT + 1] = mT, this.f32[gT + 2] = zT, this.u32[gT + 3] = MT >>> 0, this.cursor += WT.Fb, !0
      }
      writeOptions(TT, UT) {
        const mT = UT.byteLength,
          zT = WT.Fb + (0, WT.Ge)(mT);
        if (!this.fits(zT)) return !1;
        const MT = this.cursor,
          gT = MT >>> 2;
        this.u32[gT] = WT.Gb.Options, this.u32[gT + 1] = mT, this.u32[gT + 2] = 0, this.u32[gT + 3] = TT >>> 0;
        const nT = MT + WT.Fb;
        return this.u8.set(UT, nT), this.u8.fill(0, nT + mT, MT + zT), this.cursor += zT, !0
      }
      writeWorkerRecord(TT, UT, mT, zT, MT, gT) {
        const nT = gT.byteLength,
          HT = WT._d + (0, WT.Ge)(nT);
        if (nT > WT.Wd) return this.dropped++, !1;
        if (!this.room(HT)) return !1;
        const kT = this.cursor,
          jT = kT >>> 2;
        this.u32[jT] = TT >>> 0, this.u32[jT + 1] = 65535 & UT | (65535 & mT) << 16, this.u32[jT + 2] = zT >>> 0, this.u32[jT + 3] = MT >>> 0, this.u32[jT + 4] = nT;
        const lT = kT + WT._d;
        return this.u8.set(gT, lT), this.u8.fill(0, lT + nT, kT + HT), this.cursor += HT, !0
      }
      written() {
        return this.ensureViews(), this.u8.subarray(0, this.cursor)
      }
      writeFrame(TT, UT) {
        return this.writeNet(WT.bc.Frame, TT, UT)
      }
      writeOpen(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(WT.bc.Open, TT, HT(UT))
      }
      writeClose(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(WT.bc.Close, TT, HT(UT))
      }
      writeNet(TT, UT, mT) {
        const zT = mT.byteLength,
          MT = WT.ac + (0, WT.Ge)(zT);
        if (zT > WT.Zb) return this.dropped++, !1;
        if (!this.room(MT)) return !1;
        const gT = this.cursor;
        this.u32[gT >>> 2] = zT, this.u32[1 + (gT >>> 2)] = (0, WT.Be)(TT, UT);
        const nT = gT + WT.ac;
        return this.u8.set(mT, nT), this.u8.fill(0, nT + zT, gT + MT), this.cursor += MT, !0
      }
      np(TT, UT, mT) {
        const zT = WT.v + (0, WT.Ge)(mT);
        if (!this.room(zT)) return -1;
        const MT = this.cursor;
        this.u32[MT >>> 2] = 65535 & TT | (65535 & UT) << 16, this.u32[1 + (MT >>> 2)] = mT;
        const gT = MT + WT.v;
        return this.u8.fill(0, gT, MT + zT), this.cursor += zT, gT
      }
      growForCmd(TT) {
        return this.fits(WT.v + (0, WT.Ge)(TT), 0)
      }
      writeCmd(TT, UT, mT) {
        const WT = this.np(TT, UT, mT.byteLength);
        return !(WT < 0) && (this.u8.set(mT, WT), !0)
      }
      copyWritten(TT, UT) {
        return this.ensureViews(), this.u8.slice(TT, TT + UT)
      }
    }
    const nT = new MT.e(0);

    function HT(TT) {
      if (0 === TT) return nT;
      const UT = new MT.e(WT._b);
      for (let mT = 0; mT < WT._b; mT++) UT[mT] = TT >>> 8 * mT & 255;
      return UT
    }
    class kT {
      constructor(TT, UT) {
        this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new gT(UT, {
          ptr: () => TT.yl(),
          fl: () => TT.TgT(),
          reserve: UT => TT.lgT(UT)
        }), this.net = new gT(UT, {
          ptr: () => TT.HgT(),
          fl: () => TT.ngT(),
          reserve: UT => TT.LgT(UT)
        }), this.worker = new gT(UT, {
          ptr: () => TT.IgT(),
          fl: () => TT.XgT(),
          reserve: UT => TT.pgT(UT)
        }), this.cmd = new gT(UT, {
          ptr: () => TT.rMT(),
          fl: () => TT.uMT(),
          reserve: UT => TT.CMT(UT)
        })
      }
      reset(TT, UT, mT) {
        this.input.consume(TT), this.worker.consume(UT), this.cmd.consume(mT)
      }
    }
    var jT = mT(36358),
      lT = mT(2525),
      LT = mT(4890),
      pT = mT(40919);
    const BT = "coreFrame",
      ZT = "fatalStatus",
      cT = "otherCall",
      vT = "coreRings",
      fT = "netIn",
      qT = "abi",
      iT = "netOut",
      bT = "workerOut",
      OT = "worldgenHost",
      eT = "eventWalker",
      YT = "netEvent",
      JT = "envEvent",
      xT = "sharedTables",
      dT = "inputAction",
      wT = "frameSends",
      tT = new Set([eT, YT, JT, wT, dT, xT]),
      aT = "wasmMemory",
      yT = "meshHost";

    function XT(TT, UT) {
      TT.forEachWorkerOut(((mT, zT, MT) => {
        if ((0, WT.te)(mT)) try {
          var gT;
          null === (gT = UT.worldgen) || void 0 === gT || gT.take(mT, MT)
        } catch (HT) {
          TT.crash(OT, HT)
        } else try {
          var nT;
          null === (nT = UT.mesh) || void 0 === nT || nT.take(mT, zT, MT)
        } catch (HT) {
          TT.crash(yT, HT)
        }
      }))
    }
    const IT = 1048576;

    function QT(TT, UT) {
      let mT = !1;
      const WT = () => {
        mT = !1, UT()
      };
      return () => {
        !mT && TT.cursor >= IT && (mT = !0, queueMicrotask(WT))
      }
    }
    const sT = new Set([ZT, cT, OT, yT]);

    function FT(TT) {
      return tT.has(TT.site) ? TT.error instanceof WebAssembly.RuntimeError || (0, zT.i)(TT.error) : !sT.has(TT.site) && TT.error instanceof Error
    }
    const PT = "events",
      VT = [],
      uT = "debugLog",
      CT = "terrainTextures",
      rT = "sunShadowTextures",
      KT = new TextDecoder;

    function ST(TT, UT) {
      const {
        site: mT,
        error: zT,
        header: MT
      } = TT, gT = MT ? (0, WT.pe)(MT.lastError) : "noFrame", nT = `CORE-${mT===ZT?gT:mT}`, HT = null === zT || void 0 === zT ? "" : ` ${(0,jT.k)(zT)}`, kT = {
        site: mT,
        wasmBuild: UT.wasm,
        clientVersion: UT.client
      };
      return MT && (kT.status = String(MT.status), kT.lastError = gT, kT.lastErrorCode = String(MT.lastError), kT.lastErrorDetail = String(MT.lastErrorDetail), kT.errorCount = String(MT.errorCount), kT.frameIndex = String(MT.frameIndex), kT.tickIndex = String(MT.tickIndex)), {
        code: nT,
        message: `core ${mT}, last error ${gT};${HT}`,
        details: kT
      }
    }
    class GT {
      constructor(TT, UT, mT) {
        this.core = TT, this.memory = UT, this.handlers = mT, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.loadCountsBuffer = null, this.loadCounts = new Uint32Array(0), this.unsentUiPrefs = null, this.eventWalker = null, this.netOffsets = [], this.frameEvents = {
          ptr: 0,
          len: 0,
          net: VT,
          netOffsets: this.netOffsets,
          kind: "none"
        }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.atSendsStop = !1, this.rings = new kT(TT, UT)
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
      framePaces(TT) {
        if (this.stopped || this.drawsHeld) return !1;
        try {
          return this.core.DMT(TT)
        } catch (UT) {
          return this.crash(BT, UT), !1
        }
      }
      get isStopped() {
        return this.stopped
      }
      frame(TT, UT) {
        var mT;
        let MT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.stopped) return !1;
        if (!this.writePendingInput()) return !1;
        const {
          input: gT,
          net: nT,
          worker: HT,
          cmd: kT
        } = this.rings, jT = nT.cursor, lT = UT && !this.drawsHeld;
        let cT = WT.V.Fatal;
        const vT = gT.cursor,
          qT = HT.cursor,
          iT = kT.cursor;
        let bT, OT = null;
        const JT = this.handlers.onSends;
        try {
          const UT = (lT ? WT.pb.Draws : 0) | (MT ? WT.pb.NetAll : 0) | (JT ? WT.pb.StopForSends : 0);
          cT = (0, pT.f)((() => {
            let mT = this.core.frame(TT, vT, nT.cursor, qT, UT, iT);
            for (; mT === WT.ud && JT;) {
              var zT;
              if (bT ??= null === (zT = this.gameHost) || void 0 === zT ? void 0 : zT.takeFault(), void 0 === bT && !this.takeSends(JT)) return WT.V.Fatal;
              mT = this.core.Xc()
            }
            return mT
          }))
        } catch (KT) {
          OT = {
            error: KT
          }
        }
        bT ??= null === (mT = this.gameHost) || void 0 === mT ? void 0 : mT.takeFault();
        const xT = this.stopped || null !== OT || void 0 !== bT;
        this.rings.reset(xT ? gT.cursor : vT, xT ? HT.cursor : qT, xT ? kT.cursor : iT);
        const dT = null === OT && void 0 === bT,
          wT = dT && !this.stopped && cT === WT.V.Fatal && 0 === this.core.Hp(),
          tT = dT && !wT ? this.headerView() : null,
          aT = wT ? {
            ...null !== (yT = this.lastHeader) && void 0 !== yT ? yT : (0, WT.Je)(new Uint32Array(WT.vb)),
            status: WT.V.Fatal,
            lastError: WT.S.CoreBusy,
            lastErrorDetail: 0
          } : null === tT ? null : (0, WT.Je)(tT);
        var yT;
        null !== aT && (this.lastHeader = aT);
        const XT = null !== aT && cT !== WT.V.Fatal,
          IT = XT && null !== tT ? tT[WT.yb.NetInKept] : 0,
          QT = XT && IT <= jT && IT % 4 === 0 ? IT : null;
        var sT, FT;
        null !== aT && null !== QT && cT === WT.V.Errors && (null === (sT = (FT = this.handlers).onErrors) || void 0 === sT || sT.call(FT, aT));
        const PT = null === QT ? VT : this.readEvents(jT);
        if (nT.consume(jT - (null !== QT && void 0 !== QT ? QT : 0)), this.netKept = null !== QT && void 0 !== QT ? QT : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== OT) return this.crash(BT, void 0 === bT || bT instanceof zT.c ? OT.error : bT), !1;
        if (void 0 !== bT || null === aT) return this.crashOn(BT, bT), !1;
        if (wT) return this.crash(ZT, null), !1;
        const uT = this.headerView()[WT.yb.FrameDraw];
        if (this.lastFrameKind = (0, LT.f)(lT, uT), cT === WT.V.Fatal) return this.crash(ZT, null), !1;
        if (null === QT) return this.crash(fT, `the core kept ${IT} of ${jT} net-in bytes`), !1;
        if (this.eventWalker) {
          if (this.stopped) return !1;
          const TT = this.frameEvents,
            UT = this.headerView();
          TT.ptr = UT[WT.yb.EventsPtr], TT.len = UT[WT.yb.EventsLen], TT.net = PT, TT.kind = this.lastFrameKind;
          try {
            this.eventWalker(TT)
          } catch (KT) {
            return this.crashOn(eT, KT), !1
          }
          return this.handEnvEvents()
        }
        for (const WT of PT) {
          if (this.stopped) return !1;
          try {
            var CT, rT;
            null === (CT = (rT = this.handlers).onNetEvent) || void 0 === CT || CT.call(rT, WT)
          } catch (KT) {
            return this.crashOn(YT, KT), !1
          }
        }
        return this.handEnvEvents()
      }
      handEnvEvents() {
        for (const MT of this.graceEvents) {
          if (this.stopped) return !1;
          try {
            var TT, UT;
            null === (TT = (UT = this.handlers).onReconnectGrace) || void 0 === TT || TT.call(UT, MT)
          } catch (zT) {
            return this.crashOn(YT, zT), !1
          }
        }
        for (const MT of this.envEvents) {
          if (this.stopped) return !1;
          try {
            var mT, WT;
            null === (mT = (WT = this.handlers).onEnvEvent) || void 0 === mT || mT.call(WT, MT)
          } catch (zT) {
            return this.crashOn(JT, zT), !1
          }
        }
        return !this.stopped
      }
      setEventWalker(TT) {
        this.eventWalker = TT
      }
      writePendingInput() {
        if (this.stopped) return !1;
        const {
          input: TT
        } = this.rings;
        try {
          const UT = this.unsentUiPrefs;
          UT && TT.writeRecord(WT.Gb.UiPrefs, 0, UT.nametagCutDistance, 0, (0, WT.Le)(UT)) && (this.unsentUiPrefs = null);
          const mT = this.unsentEnvPrefs;
          mT && TT.writeRecord(WT.Gb.EnvPrefs, (0, WT.qe)(mT), mT.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
          const zT = this.unsentLookPrefs;
          zT && TT.writeRecord(WT.Gb.Sensitivity, 0, zT.mouse, zT.touch, (0, lT.k)(zT.fovPercent)) && (this.unsentLookPrefs = null);
          let MT = 0;
          for (const {
              aux: WT,
              payload: gT
            }
            of this.unsentOptions) {
            if (!TT.writeOptions(WT, gT)) {
              if (TT.cursor > 0) break;
              this.optionsDropped++
            }
            MT++
          }
          MT > 0 && this.unsentOptions.splice(0, MT)
        } catch (UT) {
          return this.crash(vT, UT), !1
        }
        return !0
      }
      setHoldDraws(TT) {
        this.drawsHeld = TT
      }
      setUiPrefs(TT) {
        this.unsentUiPrefs = {
          ...TT
        }
      }
      setEnvPrefs(TT) {
        this.unsentEnvPrefs = {
          ...TT
        }
      }
      setLookPrefs(TT) {
        this.unsentLookPrefs = {
          ...TT
        }
      }
      queueOptions(TT, UT) {
        return !this.isStopped && (UT.byteLength > WT.gc.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
          aux: TT,
          payload: UT
        }), !0))
      }
      setChunkCap(TT) {
        return this.callCore("setChunkCap", null, (UT => UT.qgT(TT)))
      }
      shedMemory(TT) {
        const UT = this.callCore("shedMemory", null, (UT => UT.xgT(TT)));
        return 0 === UT ? null : UT
      }
      addDistanceInUse() {
        const TT = this.callCore("addDistanceInUse", null, (TT => TT.QMT()));
        return 0 === TT ? null : TT
      }
      setChunkAddDistance(TT, UT) {
        return this.callCore("setChunkAddDistance", !1, (mT => mT.fgT(TT, UT)))
      }
      setGameHost(TT) {
        return this.callCore("setGameHost", !1, (UT => (UT.hMT(TT), this.gameHost = TT, !0)))
      }
      setAntiCheatProbes(TT) {
        return this.callCore("setAntiCheatProbes", !1, (UT => UT.cgT(TT)))
      }
      setAmbientOcclusion(TT) {
        this.callCore("setAmbientOcclusion", void 0, (UT => {
          UT.ZgT(TT)
        }))
      }
      setPoseLod(TT) {
        this.callCore("setPoseLod", void 0, (UT => {
          UT.bgT(TT)
        }))
      }
      setDebugLog(TT, UT) {
        this.callCore(uT, void 0, (mT => {
          mT.dc(TT, UT)
        }))
      }
      takeDebugLog(TT) {
        return this.callCore(uT, [], (UT => UT.wc(TT)))
      }
      setTextureLayers(TT) {
        return this.callCore("setTextureLayers", !1, (UT => UT.JgT(TT)))
      }
      setBlockColours(TT) {
        let {
          blocks: UT,
          counts: mT,
          values: WT
        } = TT;
        return this.callCore("setBlockColours", !1, (TT => TT.nWT(UT, mT, WT)))
      }
      terrainTextureNames() {
        return this.callCore(CT, [], (TT => TT.ygT()))
      }
      setTerrainTextures(TT, UT, mT, WT) {
        return this.callCore(CT, !1, (zT => zT.YgT(TT, mT, UT, WT)))
      }
      setShaderPack(TT, UT, mT, WT, zT, MT) {
        return this.callCore("setShaderPack", !1, (gT => {
          var nT, HT;
          return null !== (nT = null === (HT = gT.qWT) || void 0 === HT ? void 0 : HT.call(gT, TT, UT, mT, WT, zT, MT)) && void 0 !== nT && nT
        }))
      }
      sunShadowWantedTextures() {
        return this.callCore(rT, null, (TT => {
          var UT, mT;
          return null !== (UT = null === (mT = TT.dgT) || void 0 === mT ? void 0 : mT.call(TT)) && void 0 !== UT ? UT : null
        }))
      }
      setSunShadowTexture(TT, UT, mT, WT, zT) {
        this.callCore(rT, void 0, (MT => {
          var gT;
          null === (gT = MT.egT) || void 0 === gT || gT.call(MT, TT, UT, mT, WT, zT)
        }))
      }
      takeSunShadowWarnings() {
        return this.callCore(rT, [], (TT => {
          var UT, mT;
          return null !== (UT = null === (mT = TT.tgT) || void 0 === mT ? void 0 : mT.call(TT)) && void 0 !== UT ? UT : []
        }))
      }
      sunShadowsHeld() {
        return this.callCore(rT, null, (TT => {
          var UT, mT;
          return null !== (UT = null === (mT = TT.wgT) || void 0 === mT ? void 0 : mT.call(TT)) && void 0 !== UT ? UT : null
        }))
      }
      callCore(TT, UT, mT) {
        if (this.stopped) return UT;
        try {
          return mT(this.core)
        } catch (WT) {
          return this.crash(TT, WT), UT
        }
      }
      readEvents(TT) {
        this.netOffsets.length = 0;
        const UT = this.headerView(),
          mT = UT[WT.yb.EventsPtr],
          zT = UT[WT.yb.EventsLen];
        if (this.envEvents.length = 0, this.graceEvents.length = 0, 0 === zT) return VT;
        const MT = [],
          gT = this.memory().buffer;
        if (mT % 4 !== 0 || mT + zT > gT.byteLength) return this.crash(PT, `events of ${zT} bytes at ${mT} outside ${gT.byteLength} bytes of memory`), VT;
        const nT = new DataView(gT, mT, zT),
          HT = this.rings.net,
          kT = (UT, mT) => UT + mT <= TT ? HT.copyWritten(UT, mT) : null;
        let jT = 0;
        for (; jT < zT;) {
          const TT = jT + WT.gb,
            UT = TT <= zT ? nT.getUint32(jT, !0) : -1,
            HT = UT >>> 16;
          if (UT < 0 || HT > zT - TT) return this.crash(PT, `event record at ${jT} overruns its ${zT} bytes`), VT;
          const dT = 65535 & UT,
            wT = UT => nT.getUint32(TT + 4 * UT, !0);
          if (dT === WT.hb.RawMessage) {
            const TT = HT >= WT.Nc.BYTES ? 65535 & wT(1) : -1,
              UT = TT === WT.Nc.STRING_TYPE,
              mT = HT === (UT ? WT.Nc.STRING_TYPE_BYTES : WT.Nc.BYTES) ? kT(wT(2), wT(3)) : null,
              zT = UT && mT ? kT(wT(4), wT(5)) : null;
            if (!mT || UT && !zT) return this.crash(PT, `RawMessage at ${jT} of ${HT} bytes names bytes outside net-in`), VT;
            this.netOffsets.push(jT), MT.push({
              type: "message",
              conn: wT(0),
              Xj: TT,
              payloadKind: wT(1) >>> 16,
              payload: mT,
              stringType: zT ? KT.decode(zT) : null
            })
          } else if (dT === WT.hb.CoreErrors) {
            var lT, LT;
            const TT = HT >= 4 ? wT(0) : -1;
            if (TT < 0 || TT > WT.Q.PAIRS_MAX || HT !== 4 * (WT.Q.FIXED_WORDS + WT.Q.PAIR_WORDS * TT)) return this.crash(PT, `CoreErrors at ${jT} of ${HT} bytes`), VT;
            const UT = [];
            for (let mT = 0; mT < TT; mT++) UT.push({
              code: wT(1 + 2 * mT),
              detail: wT(2 + 2 * mT)
            });
            null === (lT = (LT = this.handlers).onCoreErrors) || void 0 === lT || lT.call(LT, UT, wT(1 + 2 * TT))
          } else if (dT === WT.hb.RenderReload) {
            var pT, BT;
            if (HT !== WT._c.BYTES) return this.crash(PT, `RenderReload at ${jT} of ${HT} bytes`), VT;
            null === (pT = (BT = this.handlers).onRenderReload) || void 0 === pT || pT.call(BT, wT(0), wT(1), wT(2))
          } else if (dT === WT.hb.JoinPreloadEnded) {
            var ZT, cT;
            if (HT !== WT.Jb.BYTES) return this.crash(PT, `JoinPreloadEnded at ${jT} of ${HT} bytes`), VT;
            null === (ZT = (cT = this.handlers).onJoinPreloadEnded) || void 0 === ZT || ZT.call(cT, {
              chunks: wT(WT.Jb.CHUNKS),
              bytes: wT(WT.Jb.BYTES_HELD),
              asked: wT(WT.Jb.ASKED),
              replaced: wT(WT.Jb.REPLACED),
              dropped: wT(WT.Jb.DROPPED)
            })
          } else if (dT === WT.hb.Images) {
            var vT, fT;
            null === (vT = (fT = this.handlers).onImages) || void 0 === vT || vT.call(fT, new Uint8Array(gT.slice(mT + TT, mT + TT + HT)))
          } else if (dT === WT.hb.ModelRequests)
            for (let mT = 0; mT < HT >>> 2; mT++) {
              var qT, iT;
              null === (qT = (iT = this.handlers).onModelRequest) || void 0 === qT || qT.call(iT, wT(mT))
            } else if (dT === WT.hb.ModelTaken) {
              var bT, OT;
              if (HT < 4) return this.crash(PT, `ModelTaken at ${jT} of ${HT} bytes`), VT;
              const TT = new Uint32Array((HT >>> 2) - 1);
              for (let UT = 0; UT < TT.length; UT++) TT[UT] = wT(1 + UT);
              null === (bT = (OT = this.handlers).onModelTaken) || void 0 === bT || bT.call(OT, wT(0), TT)
            } else if (dT === WT.hb.TerrainTexturesWanted) {
            var eT, YT;
            if (0 !== HT) return this.crash(PT, `TerrainTexturesWanted at ${jT} of ${HT} bytes`), VT;
            null === (eT = (YT = this.handlers).onTerrainTexturesWanted) || void 0 === eT || eT.call(YT)
          } else if (dT === WT.hb.KeepAliveDue) {
            var JT, xT;
            if (HT > WT.Lb) return this.crash(PT, `KeepAliveDue at ${jT} of ${HT} bytes`), VT;
            null === (JT = (xT = this.handlers).onKeepAlive) || void 0 === JT || JT.call(xT, new Uint8Array(gT, mT + TT, HT).slice())
          } else if (dT === WT.hb.ConnectionState) {
            if (HT !== WT.z) return this.crash(PT, `ConnectionState at ${jT} of ${HT} bytes`), VT;
            this.netOffsets.push(jT), MT.push({
              type: "connection",
              conn: wT(0),
              phase: wT(1),
              code: 0 | wT(2)
            })
          } else if (dT === WT.hb.EnvLighting || dT === WT.hb.SkyImages) {
            if (HT !== (dT === WT.hb.EnvLighting ? WT.cb : WT.Ad)) return this.crash(PT, `event ${dT} at ${jT} of ${HT} bytes`), VT;
            this.envEvents.push({
              kind: dT,
              payload: new Uint8Array(gT.slice(mT + TT, mT + TT + HT))
            })
          } else if (dT === WT.hb.ReconnectGrace) {
            if (HT !== WT.wc) return this.crash(PT, `ReconnectGrace at ${jT} of ${HT} bytes`), VT;
            const TT = wT(2);
            this.graceEvents.push({
              conn: wT(0),
              graceMs: wT(1),
              sessionBased: 0 !== (TT & WT.Rc.SessionBased),
              replayOffer: 0 !== (TT & WT.Rc.ReplayOffer)
            })
          }
          jT = TT + (0, WT.Ge)(HT)
        }
        return MT
      }
      takeSends(TT) {
        this.atSendsStop = !0;
        try {
          TT()
        } catch (UT) {
          this.crashOn(wT, UT)
        } finally {
          this.atSendsStop = !1
        }
        return !this.stopped
      }
      forEachNetOut(TT) {
        this.forEachOut(iT, "net-out", WT.yb.NetOutPtr, WT.yb.NetOutLen, WT.ac, 0, ((UT, mT, zT, MT) => {
          const gT = (0, WT.Ae)(mT);
          gT === WT.bc.Frame ? TT((0, WT.xe)(mT), zT) : this.crash(iT, `net-out record at ${MT} is kind ${gT}, not a frame`)
        }))
      }
      forEachWorkerOut(TT) {
        this.forEachOut(bT, "worker-out", WT.yb.WorkerOutPtr, WT.yb.WorkerOutLen, WT.Vd, 4, ((UT, mT, zT, MT) => {
          const gT = 255 & UT,
            nT = gT === WT.le.Init ? this.initOf(zT, MT) : zT;
          null !== nT && TT(gT, UT >>> 8 & 16777215, nT)
        }))
      }
      initOf(TT, UT) {
        const mT = this.memory().buffer;
        if (TT.byteLength !== WT.Ab) return this.crash(bT, `worker-out Init record at ${UT} is ${TT.byteLength} bytes, not a view`), null;
        const zT = new DataView(TT.buffer, TT.byteOffset, WT.Ab),
          MT = zT.getUint32(0, !0),
          gT = zT.getUint32(4, !0);
        return MT + gT > mT.byteLength ? (this.crash(bT, `worker-out Init record at ${UT} names ${gT} bytes at ${MT} outside ${mT.byteLength} bytes of memory`), null) : new Uint8Array(mT, MT, gT)
      }
      forEachOut(TT, UT, mT, zT, MT, gT, nT) {
        if (!this.headerReadable()) return;
        const HT = this.headerView(),
          kT = HT[mT],
          jT = HT[zT];
        if (0 === jT) return;
        const lT = this.memory().buffer;
        if (kT % 4 !== 0 || kT + jT > lT.byteLength) return void this.crash(TT, `${UT} of ${jT} bytes at ${kT} outside ${lT.byteLength} bytes of memory`);
        const LT = new DataView(lT, kT, jT);
        let pT = 0;
        for (; pT < jT;) {
          const mT = pT + MT,
            zT = mT <= jT ? LT.getUint32(pT + gT, !0) : -1;
          if (zT < 0 || zT > jT - mT) return void this.crash(TT, `${UT} record at ${pT} overruns its ${jT} bytes`);
          if (nT(LT.getUint32(pT, !0), LT.getUint32(pT + 4, !0), new Uint8Array(lT, kT + mT, zT), pT), this.stopped) return;
          pT = mT + (0, WT.Ge)(zT)
        }
      }
      forEachEvent(TT) {
        if (this.stopped || null === this.lastHeader) return;
        const UT = this.headerView(),
          mT = UT[WT.yb.EventsPtr],
          zT = UT[WT.yb.EventsLen];
        if (0 === zT) return;
        const MT = this.memory().buffer;
        if (mT % 4 !== 0 || mT + zT > MT.byteLength) return void this.crash(PT, `events of ${zT} bytes at ${mT} outside ${MT.byteLength} bytes of memory`);
        const gT = new DataView(MT, mT, zT);
        let nT = 0;
        for (; nT < zT;) {
          const UT = nT + WT.gb,
            mT = UT <= zT ? gT.getUint32(nT, !0) : -1,
            MT = mT >>> 16;
          if (mT < 0 || MT > zT - UT) return void this.crash(PT, `event record at ${nT} overruns its ${zT} bytes`);
          TT(65535 & mT, gT, UT, MT), nT = UT + (0, WT.Ge)(MT)
        }
      }
      crashOn(TT, UT) {
        UT instanceof zT.c ? this.crash(PT, UT.message) : this.crash(TT, UT)
      }
      crash(TT, UT) {
        this.stopped || (this.stopped = !0, this.handlers.onCrash({
          site: TT,
          error: UT,
          header: this.lastHeader
        }))
      }
      headerWord(TT) {
        return this.headerReadable() ? this.headerView()[TT] : 0
      }
      headerReadable() {
        return !this.stopped && (null !== this.lastHeader || this.atSendsStop)
      }
      readLoadCounts(TT) {
        const UT = this.loadCountWords();
        return null !== UT && (TT.chunksReceived = UT[WT.Tb.ChunksReceived], TT.chunksCancelled = this.headerView()[WT.yb.ChunksCancelled], TT.chunksStored = UT[WT.Tb.ChunksStored], TT.jobsSent = UT[WT.Tb.JobsSent], TT.jobsDone = UT[WT.Tb.JobsDone], TT.jobsInFlight = UT[WT.Tb.JobsInFlight], TT.workersLive = UT[WT.Tb.WorkersLive], TT.workersRetired = UT[WT.Tb.WorkersRetired], !0)
      }
      readViewQueuedPrograms() {
        var TT, UT;
        const mT = null !== (TT = null === (UT = this.loadCountWords()) || void 0 === UT ? void 0 : UT[WT.Tb.ViewQueuedPrograms]) && void 0 !== TT ? TT : 0;
        return 0 === mT ? null : mT - 1
      }
      readFirstViewWait(TT, UT) {
        const mT = this.loadCountWords();
        return null === mT ? null : [mT[WT.Tb.FirstViewLinkMs], mT[WT.Tb.FirstViewTerrainMs], mT[WT.Tb.FirstViewHeldMs], mT[WT.Tb.FirstViewOtherMs], mT[WT.Tb.FirstViewGaps], mT[WT.Tb.FirstViewGapMs], TT, UT]
      }
      loadCountWords() {
        if (this.stopped || null === this.lastHeader) return null;
        const TT = this.core.xc();
        if (0 === TT) return null;
        const UT = this.memory().buffer;
        return UT !== this.loadCountsBuffer && (this.loadCountsBuffer = UT, this.loadCounts = new Uint32Array(UT, TT, WT.Mb)), this.loadCounts
      }
      headerView() {
        const TT = this.memory().buffer;
        return TT !== this.headerBuffer && (this.headerBuffer = TT, this.header = new Uint32Array(TT, this.core.Hp(), WT.vb)), this.header
      }
    }
  },
  40919: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => gT,
      f: () => MT
    });
    var WT = mT(4780);
    let zT = null;

    function MT(TT) {
      zT = {
        scanned: !1
      };
      try {
        return TT()
      } finally {
        zT = null
      }
    }

    function gT() {
      const TT = zT;
      if (null === TT) return (0, WT.f)();
      const UT = (0, WT.f)(!TT.scanned);
      return TT.scanned = !0, UT
    }
  },
  40975: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => WT
    });
    const WT = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  40991: (TT, UT, mT) => {
    function WT() {
      return mT(40999)
    }

    function zT() {
      return mT(41007)
    }

    function MT(TT) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(TT)
    }
    mT.d(UT, {
      e: () => MT,
      h: () => WT,
      i: () => zT
    })
  },
  36358: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => nT,
      e: () => kT,
      i: () => gT,
      k: () => lT
    });
    var WT = mT(36349),
      zT = mT(11);
    const MT = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function gT(TT) {
      if (TT instanceof WebAssembly.RuntimeError) return !0;
      const UT = TT instanceof Error ? TT.stack : void 0;
      return "string" === typeof UT && MT.test(UT)
    }

    function nT(TT, UT, mT) {
      var zT;
      const gT = TT instanceof Error ? TT.name : "thrown",
        nT = (TT instanceof Error && null !== (zT = TT.stack) && void 0 !== zT ? zT : "").split("\n").filter((TT => MT.test(TT))).slice(0, 8).map((TT => TT.trim())),
        HT = null === UT ? "wasm memory unknown" : `wasm memory ${Math.round(UT/2**20)} MB`,
        kT = null === mT.panic ? "" : `, panic: ${(0,WT.k)(mT.panic)}`,
        jT = `${gT}: ${TT instanceof Error?TT.message:String(TT)}`;
      return `${(0,WT.p)(mT.kind,mT.refusedBytes)} ${jT} (${HT})${kT}${nT.length>0?` | ${nT.join(" < ")}`:""}`
    }
    const HT = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function kT(TT) {
      var UT;
      let mT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(TT instanceof Error) || !HT.test(TT.message)) return {};
      if (!("detached" in mT)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, zT.W)(null === (UT = (0, zT.P)(mT, "detached")) || void 0 === UT ? void 0 : UT.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const jT = 500;

    function lT(TT) {
      let UT = "[object Object]";
      try {
        UT = String(TT)
      } catch {}
      if ("[object Object]" !== UT) return UT;
      try {
        var mT, WT;
        return null !== (mT = null === (WT = JSON.stringify(TT)) || void 0 === WT ? void 0 : WT.slice(0, jT)) && void 0 !== mT ? mT : UT
      } catch {
        return UT
      }
    }
  },
  40999: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  41007: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  },
  36349: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => WT,
      h: () => MT,
      k: () => HT,
      o: () => gT,
      p: () => zT
    });
    const WT = /^alloc_failed (\d+) bytes$/;

    function zT(TT, UT) {
      return MT(TT, UT) ? `trap=alloc_failed ${UT} bytes` : `trap=${TT}`
    }

    function MT(TT, UT) {
      return "unreachable" === TT && UT > 0
    }

    function gT(TT, UT, mT) {
      const WT = function(TT) {
        return TT instanceof WebAssembly.RuntimeError ? /unreachable/i.test(TT.message) ? "unreachable" : /out of bounds/i.test(TT.message) ? "out_of_bounds" : "runtime_error" : (TT instanceof RangeError || TT instanceof Error && "InternalError" === TT.name) && /call stack|recursion/i.test(TT.message) ? "stack_overflow" : "js_error"
      }(TT);
      if ("unreachable" !== WT) return {
        kind: WT,
        panic: null,
        refusedBytes: 0
      };
      const zT = UT(),
        MT = mT();
      return {
        kind: WT,
        panic: MT > 0 ? null : zT,
        refusedBytes: MT
      }
    }
    const nT = 300;

    function HT(TT) {
      return TT.replace(/\s*\n\s*/g, " / ").slice(0, nT)
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);