export const id = 263;
export const ids = [263];
export const modules = {
  40610: (TT, kT, cT) => {
    function lT(TT, kT, cT) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(TT, kT).getContext("2d", cT);
      const lT = document.createElement("canvas");
      return lT.width = TT, lT.height = kT, lT.getContext("2d", cT)
    }

    function MT(TT, kT) {
      return TT.getContext("2d", kT)
    }
    cT.d(kT, {
      c: () => MT,
      d: () => lT
    })
  },
  40542: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => ST,
      d: () => vT,
      g: () => UT,
      h: () => bT,
      l: () => JT,
      p: () => oT,
      q: () => QT,
      t: () => hT,
      x: () => NT,
      z: () => mT,
      A: () => dT,
      B: () => FT,
      D: () => ET,
      E: () => gT,
      G: () => HT,
      I: () => GT
    });
    var lT = cT(4761),
      MT = cT(40273),
      KT = (cT(40443), cT(15));
    class OT {
      constructor(TT, kT) {
        this.memory = TT, this.access = kT, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.DA = 0, this.u32 = new KT.j(0), this.f32 = new KT.e(0), this.u8 = new KT.d(0), this.dataView = new KT.h(new ArrayBuffer(0)), this.refresh()
      }
      refresh() {
        this.ptr = this.access.ptr(), this.DA = this.access.DA(), this.buffer = (0, KT.L)(this.memory()), this.u32 = new KT.j(this.buffer, this.ptr, this.DA >>> 2), this.f32 = new KT.e(this.buffer, this.ptr, this.DA >>> 2), this.u8 = new KT.d(this.buffer, this.ptr, this.DA), this.dataView = new KT.h(this.buffer, this.ptr, this.DA)
      }
      ensureViews() {
        (0, KT.L)(this.memory()) !== this.buffer && this.refresh()
      }
      get view() {
        return this.ensureViews(), this.dataView
      }
      room(TT) {
        return !!this.fits(TT) || (this.dropped++, !1)
      }
      fits(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.cursor;
        this.ensureViews();
        const cT = kT + TT;
        return cT <= this.DA || cT <= lT.zc && 0 !== this.access.reserve(cT) && (this.refresh(), cT <= this.DA)
      }
      consume(TT) {
        const kT = this.cursor - TT;
        kT > 0 && TT > 0 && (this.ensureViews(), this.u8.copyWithin(0, TT, this.cursor)), this.cursor = kT > 0 ? kT : 0
      }
      writeRecord(TT, kT, cT, MT, KT) {
        if (!this.room(lT.pb)) return !1;
        const OT = this.cursor >>> 2;
        return this.u32[OT] = 65535 & TT | (65535 & kT) << 16, this.f32[OT + 1] = cT, this.f32[OT + 2] = MT, this.u32[OT + 3] = KT >>> 0, this.cursor += lT.pb, !0
      }
      writeOptions(TT, kT) {
        const cT = kT.byteLength,
          MT = lT.pb + (0, lT.ke)(cT);
        if (!this.fits(MT)) return !1;
        const KT = this.cursor,
          OT = KT >>> 2;
        this.u32[OT] = lT.rb.Options, this.u32[OT + 1] = cT, this.u32[OT + 2] = 0, this.u32[OT + 3] = TT >>> 0;
        const yT = KT + lT.pb;
        return this.u8.set(kT, yT), this.u8.fill(0, yT + cT, KT + MT), this.cursor += MT, !0
      }
      writeWorkerRecord(TT, kT, cT, MT, KT, OT) {
        const yT = OT.byteLength,
          fT = lT.Ed + (0, lT.ke)(yT);
        if (yT > lT.Dd) return this.dropped++, !1;
        if (!this.room(fT)) return !1;
        const xT = this.cursor,
          IT = xT >>> 2;
        this.u32[IT] = TT >>> 0, this.u32[IT + 1] = 65535 & kT | (65535 & cT) << 16, this.u32[IT + 2] = MT >>> 0, this.u32[IT + 3] = KT >>> 0, this.u32[IT + 4] = yT;
        const AT = xT + lT.Ed;
        return this.u8.set(OT, AT), this.u8.fill(0, AT + yT, xT + fT), this.cursor += fT, !0
      }
      written() {
        return this.ensureViews(), this.u8.subarray(0, this.cursor)
      }
      writeFrame(TT, kT) {
        return this.writeNet(lT.Qb.Frame, TT, kT)
      }
      writeOpen(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(lT.Qb.Open, TT, fT(kT))
      }
      writeClose(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(lT.Qb.Close, TT, fT(kT))
      }
      writeNet(TT, kT, cT) {
        const MT = cT.byteLength,
          KT = lT.Pb + (0, lT.ke)(MT);
        if (MT > lT.Lb) return this.dropped++, !1;
        if (!this.room(KT)) return !1;
        const OT = this.cursor;
        this.u32[OT >>> 2] = MT, this.u32[1 + (OT >>> 2)] = (0, lT.fe)(TT, kT);
        const yT = OT + lT.Pb;
        return this.u8.set(cT, yT), this.u8.fill(0, yT + MT, OT + KT), this.cursor += KT, !0
      }
      Ij(TT, kT, cT) {
        const MT = lT.p + (0, lT.ke)(cT);
        if (!this.room(MT)) return -1;
        const KT = this.cursor;
        this.u32[KT >>> 2] = 65535 & TT | (65535 & kT) << 16, this.u32[1 + (KT >>> 2)] = cT;
        const OT = KT + lT.p;
        return this.u8.fill(0, OT, KT + MT), this.cursor += MT, OT
      }
      growForCmd(TT) {
        return this.fits(lT.p + (0, lT.ke)(TT), 0)
      }
      writeCmd(TT, kT, cT) {
        const lT = this.Ij(TT, kT, cT.byteLength);
        return !(lT < 0) && (this.u8.set(cT, lT), !0)
      }
      copyWritten(TT, kT) {
        return this.ensureViews(), this.u8.slice(TT, TT + kT)
      }
    }
    const yT = new KT.d(0);

    function fT(TT) {
      if (0 === TT) return yT;
      const kT = new KT.d(lT.Mb);
      for (let cT = 0; cT < lT.Mb; cT++) kT[cT] = TT >>> 8 * cT & 255;
      return kT
    }
    class xT {
      constructor(TT, kT) {
        this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new OT(kT, {
          ptr: () => TT.VA(),
          DA: () => TT.iMT(),
          reserve: kT => TT.xKT(kT)
        }), this.net = new OT(kT, {
          ptr: () => TT.OKT(),
          DA: () => TT.KKT(),
          reserve: kT => TT.IKT(kT)
        }), this.worker = new OT(kT, {
          ptr: () => TT.HKT(),
          DA: () => TT.oKT(),
          reserve: kT => TT.AKT(kT)
        }), this.cmd = new OT(kT, {
          ptr: () => TT.LMT(),
          DA: () => TT.XMT(),
          reserve: kT => TT.dMT(kT)
        })
      }
      reset(TT) {
        this.input.cursor = 0, this.worker.cursor = 0, this.cmd.consume(TT)
      }
    }
    var IT = cT(36089),
      AT = cT(2443),
      CT = cT(4755),
      jT = cT(40547);
    const vT = "coreFrame",
      tT = "fatalStatus",
      hT = "otherCall",
      NT = "coreRings",
      QT = "netIn",
      ST = "abi",
      DT = "netOut",
      aT = "workerOut",
      FT = "worldgenHost",
      rT = "eventWalker",
      PT = "netEvent",
      wT = "envEvent",
      mT = "sharedTables",
      bT = "inputAction",
      zT = new Set([rT, PT, wT, bT, mT]),
      JT = "wasmMemory",
      oT = "meshHost";

    function HT(TT, kT) {
      TT.forEachWorkerOut(((cT, MT, KT) => {
        if ((0, lT.ae)(cT)) try {
          var OT;
          null === (OT = kT.worldgen) || void 0 === OT || OT.take(cT, KT)
        } catch (fT) {
          TT.crash(FT, fT)
        } else try {
          var yT;
          null === (yT = kT.mesh) || void 0 === yT || yT.take(cT, MT, KT)
        } catch (fT) {
          TT.crash(oT, fT)
        }
      }))
    }
    const eT = 1048576;

    function GT(TT, kT) {
      let cT = !1;
      const lT = () => {
        cT = !1, kT()
      };
      return () => {
        !cT && TT.cursor >= eT && (cT = !0, queueMicrotask(lT))
      }
    }
    const VT = new Set([tT, hT, FT, oT]);

    function ET(TT) {
      return zT.has(TT.site) ? TT.error instanceof WebAssembly.RuntimeError || (0, MT.l)(TT.error) : !VT.has(TT.site) && TT.error instanceof Error
    }
    const ZT = "events",
      uT = [],
      XT = "debugLog",
      dT = "terrainTextures",
      LT = "sunShadowTextures",
      RT = new TextDecoder;

    function gT(TT, kT) {
      const {
        site: cT,
        error: MT,
        header: KT
      } = TT, OT = KT ? (0, lT.Vd)(KT.lastError) : "noFrame", yT = `CORE-${cT===tT?OT:cT}`, fT = null === MT || void 0 === MT ? "" : ` ${(0,IT.k)(MT)}`, xT = {
        site: cT,
        wasmBuild: kT.wasm,
        clientVersion: kT.client
      };
      return KT && (xT.status = String(KT.status), xT.lastError = OT, xT.lastErrorCode = String(KT.lastError), xT.lastErrorDetail = String(KT.lastErrorDetail), xT.errorCount = String(KT.errorCount), xT.frameIndex = String(KT.frameIndex), xT.tickIndex = String(KT.tickIndex)), {
        code: yT,
        message: `core ${cT}, last error ${OT};${fT}`,
        details: xT
      }
    }
    class UT {
      constructor(TT, kT, cT) {
        this.core = TT, this.memory = kT, this.handlers = cT, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.unsentUiPrefs = null, this.eventWalker = null, this.netOffsets = [], this.frameEvents = {
          ptr: 0,
          len: 0,
          net: uT,
          netOffsets: this.netOffsets,
          kind: "none"
        }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.rings = new xT(TT, kT)
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
          return this.core.WMT(TT)
        } catch (kT) {
          return this.crash(vT, kT), !1
        }
      }
      get isStopped() {
        return this.stopped
      }
      frame(TT, kT) {
        var cT;
        let KT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.stopped) return !1;
        if (!this.writePendingInput()) return !1;
        const {
          input: OT,
          net: yT,
          worker: fT,
          cmd: xT
        } = this.rings, IT = yT.cursor, AT = kT && !this.drawsHeld;
        let hT = lT.H.Fatal;
        const NT = xT.cursor;
        let ST = null;
        try {
          const kT = (AT ? lT.db.Draws : 0) | (KT ? lT.db.NetAll : 0);
          hT = (0, jT.g)((() => this.core.frame(TT, OT.cursor, yT.cursor, fT.cursor, kT, NT)))
        } catch (VT) {
          ST = {
            error: VT
          }
        }
        const DT = null === (cT = this.gameHost) || void 0 === cT ? void 0 : cT.takeFault();
        this.rings.reset(this.stopped || null !== ST || void 0 !== DT ? xT.cursor : NT);
        const aT = null === ST && void 0 === DT ? this.headerView() : null,
          FT = null === aT ? null : (0, lT.oe)(aT);
        null !== FT && (this.lastHeader = FT);
        const wT = null !== FT && hT !== lT.H.Fatal,
          mT = wT && null !== aT ? aT[lT.kb.NetInKept] : 0,
          bT = wT && mT <= IT && mT % 4 === 0 ? mT : null;
        var zT, JT;
        null !== FT && null !== bT && hT === lT.H.Errors && (null === (zT = (JT = this.handlers).onErrors) || void 0 === zT || zT.call(JT, FT));
        const oT = null === bT ? uT : this.readEvents(IT);
        if (yT.consume(IT - (null !== bT && void 0 !== bT ? bT : 0)), this.netKept = null !== bT && void 0 !== bT ? bT : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== ST) return this.crash(vT, void 0 === DT || DT instanceof MT.b ? ST.error : DT), !1;
        if (void 0 !== DT || null === FT) return this.crashOn(vT, DT), !1;
        const HT = this.headerView()[lT.kb.FrameDraw];
        if (this.lastFrameKind = (0, CT.g)(AT, HT), hT === lT.H.Fatal) return this.crash(tT, null), !1;
        if (null === bT) return this.crash(QT, `the core kept ${mT} of ${IT} net-in bytes`), !1;
        if (this.eventWalker) {
          if (this.stopped) return !1;
          const TT = this.frameEvents,
            kT = this.headerView();
          TT.ptr = kT[lT.kb.EventsPtr], TT.len = kT[lT.kb.EventsLen], TT.net = oT, TT.kind = this.lastFrameKind;
          try {
            this.eventWalker(TT)
          } catch (VT) {
            return this.crashOn(rT, VT), !1
          }
          return this.handEnvEvents()
        }
        for (const lT of oT) {
          if (this.stopped) return !1;
          try {
            var eT, GT;
            null === (eT = (GT = this.handlers).onNetEvent) || void 0 === eT || eT.call(GT, lT)
          } catch (VT) {
            return this.crashOn(PT, VT), !1
          }
        }
        return this.handEnvEvents()
      }
      handEnvEvents() {
        for (const KT of this.graceEvents) {
          if (this.stopped) return !1;
          try {
            var TT, kT;
            null === (TT = (kT = this.handlers).onReconnectGrace) || void 0 === TT || TT.call(kT, KT)
          } catch (MT) {
            return this.crashOn(PT, MT), !1
          }
        }
        for (const KT of this.envEvents) {
          if (this.stopped) return !1;
          try {
            var cT, lT;
            null === (cT = (lT = this.handlers).onEnvEvent) || void 0 === cT || cT.call(lT, KT)
          } catch (MT) {
            return this.crashOn(wT, MT), !1
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
          const kT = this.unsentUiPrefs;
          kT && TT.writeRecord(lT.rb.UiPrefs, 0, kT.nametagCutDistance, 0, (0, lT.qe)(kT)) && (this.unsentUiPrefs = null);
          const cT = this.unsentEnvPrefs;
          cT && TT.writeRecord(lT.rb.EnvPrefs, (0, lT.Zd)(cT), cT.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
          const MT = this.unsentLookPrefs;
          MT && TT.writeRecord(lT.rb.Sensitivity, 0, MT.mouse, MT.touch, (0, AT.k)(MT.fovPercent)) && (this.unsentLookPrefs = null);
          let KT = 0;
          for (const {
              aux: lT,
              payload: OT
            }
            of this.unsentOptions) {
            if (!TT.writeOptions(lT, OT)) {
              if (TT.cursor > 0) break;
              this.optionsDropped++
            }
            KT++
          }
          KT > 0 && this.unsentOptions.splice(0, KT)
        } catch (kT) {
          return this.crash(NT, kT), !1
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
      queueOptions(TT, kT) {
        return !this.isStopped && (kT.byteLength > lT.Xb.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
          aux: TT,
          payload: kT
        }), !0))
      }
      setChunkCap(TT) {
        return this.callCore("setChunkCap", null, (kT => kT.NKT(TT)))
      }
      shedMemory(TT) {
        const kT = this.callCore("shedMemory", null, (kT => kT.PKT(TT)));
        return 0 === kT ? null : kT
      }
      addDistanceInUse() {
        const TT = this.callCore("addDistanceInUse", null, (TT => TT.eMT()));
        return 0 === TT ? null : TT
      }
      setChunkAddDistance(TT, kT) {
        return this.callCore("setChunkAddDistance", !1, (cT => cT.hKT(TT, kT)))
      }
      setGameHost(TT) {
        return this.callCore("setGameHost", !1, (kT => (kT.BMT(TT), this.gameHost = TT, !0)))
      }
      setAntiCheatProbes(TT) {
        return this.callCore("setAntiCheatProbes", !1, (kT => kT.vKT(TT)))
      }
      setAmbientOcclusion(TT) {
        this.callCore("setAmbientOcclusion", void 0, (kT => {
          kT.jKT(TT)
        }))
      }
      setPoseLod(TT) {
        this.callCore("setPoseLod", void 0, (kT => {
          kT.SKT(TT)
        }))
      }
      setDebugLog(TT, kT) {
        this.callCore(XT, void 0, (cT => {
          cT.eh(TT, kT)
        }))
      }
      takeDebugLog(TT) {
        return this.callCore(XT, [], (kT => kT.Gh(TT)))
      }
      setTextureLayers(TT) {
        return this.callCore("setTextureLayers", !1, (kT => kT.rKT(TT)))
      }
      setBlockColours(TT) {
        let {
          blocks: kT,
          counts: cT,
          values: lT
        } = TT;
        return this.callCore("setBlockColours", !1, (TT => TT.AcT(kT, cT, lT)))
      }
      terrainTextureNames() {
        return this.callCore(dT, [], (TT => TT.JKT()))
      }
      setTerrainTextures(TT, kT, cT, lT) {
        return this.callCore(dT, !1, (MT => MT.FKT(TT, cT, kT, lT)))
      }
      setShaderPack(TT, kT, cT, lT, MT, KT) {
        return this.callCore("setShaderPack", !1, (OT => {
          var yT, fT;
          return null !== (yT = null === (fT = OT.PcT) || void 0 === fT ? void 0 : fT.call(OT, TT, kT, cT, lT, MT, KT)) && void 0 !== yT && yT
        }))
      }
      sunShadowWantedTextures() {
        return this.callCore(LT, null, (TT => {
          var kT, cT;
          return null !== (kT = null === (cT = TT.wKT) || void 0 === cT ? void 0 : cT.call(TT)) && void 0 !== kT ? kT : null
        }))
      }
      setSunShadowTexture(TT, kT, cT, lT, MT) {
        this.callCore(LT, void 0, (KT => {
          var OT;
          null === (OT = KT.aKT) || void 0 === OT || OT.call(KT, TT, kT, cT, lT, MT)
        }))
      }
      takeSunShadowWarnings() {
        return this.callCore(LT, [], (TT => {
          var kT, cT;
          return null !== (kT = null === (cT = TT.bKT) || void 0 === cT ? void 0 : cT.call(TT)) && void 0 !== kT ? kT : []
        }))
      }
      sunShadowsHeld() {
        return this.callCore(LT, null, (TT => {
          var kT, cT;
          return null !== (kT = null === (cT = TT.mKT) || void 0 === cT ? void 0 : cT.call(TT)) && void 0 !== kT ? kT : null
        }))
      }
      callCore(TT, kT, cT) {
        if (this.stopped) return kT;
        try {
          return cT(this.core)
        } catch (lT) {
          return this.crash(TT, lT), kT
        }
      }
      readEvents(TT) {
        this.netOffsets.length = 0;
        const kT = this.headerView(),
          cT = kT[lT.kb.EventsPtr],
          MT = kT[lT.kb.EventsLen];
        if (this.envEvents.length = 0, this.graceEvents.length = 0, 0 === MT) return uT;
        const KT = [],
          OT = this.memory().buffer;
        if (cT % 4 !== 0 || cT + MT > OT.byteLength) return this.crash(ZT, `events of ${MT} bytes at ${cT} outside ${OT.byteLength} bytes of memory`), uT;
        const yT = new DataView(OT, cT, MT),
          fT = this.rings.net,
          xT = (kT, cT) => kT + cT <= TT ? fT.copyWritten(kT, cT) : null;
        let IT = 0;
        for (; IT < MT;) {
          const TT = IT + lT.U,
            kT = TT <= MT ? yT.getUint32(IT, !0) : -1,
            fT = kT >>> 16;
          if (kT < 0 || fT > MT - TT) return this.crash(ZT, `event record at ${IT} overruns its ${MT} bytes`), uT;
          const wT = 65535 & kT,
            mT = kT => yT.getUint32(TT + 4 * kT, !0);
          if (wT === lT.W.RawMessage) {
            const TT = fT >= lT.Dc.BYTES ? 65535 & mT(1) : -1,
              kT = TT === lT.Dc.STRING_TYPE,
              cT = fT === (kT ? lT.Dc.STRING_TYPE_BYTES : lT.Dc.BYTES) ? xT(mT(2), mT(3)) : null,
              MT = kT && cT ? xT(mT(4), mT(5)) : null;
            if (!cT || kT && !MT) return this.crash(ZT, `RawMessage at ${IT} of ${fT} bytes names bytes outside net-in`), uT;
            this.netOffsets.push(IT), KT.push({
              type: "message",
              conn: mT(0),
              vI: TT,
              payloadKind: mT(1) >>> 16,
              payload: cT,
              stringType: MT ? RT.decode(MT) : null
            })
          } else if (wT === lT.W.CoreErrors) {
            var AT, CT;
            const TT = fT >= 4 ? mT(0) : -1;
            if (TT < 0 || TT > lT.B.PAIRS_MAX || fT !== 4 * (lT.B.FIXED_WORDS + lT.B.PAIR_WORDS * TT)) return this.crash(ZT, `CoreErrors at ${IT} of ${fT} bytes`), uT;
            const kT = [];
            for (let cT = 0; cT < TT; cT++) kT.push({
              code: mT(1 + 2 * cT),
              detail: mT(2 + 2 * cT)
            });
            null === (AT = (CT = this.handlers).onCoreErrors) || void 0 === AT || AT.call(CT, kT, mT(1 + 2 * TT))
          } else if (wT === lT.W.RenderReload) {
            var jT, vT;
            if (fT !== lT.Vc.BYTES) return this.crash(ZT, `RenderReload at ${IT} of ${fT} bytes`), uT;
            null === (jT = (vT = this.handlers).onRenderReload) || void 0 === jT || jT.call(vT, mT(0), mT(1), mT(2))
          } else if (wT === lT.W.Images) {
            var tT, hT;
            null === (tT = (hT = this.handlers).onImages) || void 0 === tT || tT.call(hT, new Uint8Array(OT.slice(cT + TT, cT + TT + fT)))
          } else if (wT === lT.W.ModelRequests)
            for (let cT = 0; cT < fT >>> 2; cT++) {
              var NT, QT;
              null === (NT = (QT = this.handlers).onModelRequest) || void 0 === NT || NT.call(QT, mT(cT))
            } else if (wT === lT.W.ModelTaken) {
              var ST, DT;
              if (fT < 4) return this.crash(ZT, `ModelTaken at ${IT} of ${fT} bytes`), uT;
              const TT = new Uint32Array((fT >>> 2) - 1);
              for (let kT = 0; kT < TT.length; kT++) TT[kT] = mT(1 + kT);
              null === (ST = (DT = this.handlers).onModelTaken) || void 0 === ST || ST.call(DT, mT(0), TT)
            } else if (wT === lT.W.TerrainTexturesWanted) {
            var aT, FT;
            if (0 !== fT) return this.crash(ZT, `TerrainTexturesWanted at ${IT} of ${fT} bytes`), uT;
            null === (aT = (FT = this.handlers).onTerrainTexturesWanted) || void 0 === aT || aT.call(FT)
          } else if (wT === lT.W.KeepAliveDue) {
            var rT, PT;
            if (fT > lT.zb) return this.crash(ZT, `KeepAliveDue at ${IT} of ${fT} bytes`), uT;
            null === (rT = (PT = this.handlers).onKeepAlive) || void 0 === rT || rT.call(PT, new Uint8Array(OT, cT + TT, fT).slice())
          } else if (wT === lT.W.ConnectionState) {
            if (fT !== lT.q) return this.crash(ZT, `ConnectionState at ${IT} of ${fT} bytes`), uT;
            this.netOffsets.push(IT), KT.push({
              type: "connection",
              conn: mT(0),
              phase: mT(1),
              code: 0 | mT(2)
            })
          } else if (wT === lT.W.EnvLighting || wT === lT.W.SkyImages) {
            if (fT !== (wT === lT.W.EnvLighting ? lT.Q : lT.md)) return this.crash(ZT, `event ${wT} at ${IT} of ${fT} bytes`), uT;
            this.envEvents.push({
              kind: wT,
              payload: new Uint8Array(OT.slice(cT + TT, cT + TT + fT))
            })
          } else if (wT === lT.W.ReconnectGrace) {
            if (fT !== lT.fc) return this.crash(ZT, `ReconnectGrace at ${IT} of ${fT} bytes`), uT;
            const TT = mT(2);
            this.graceEvents.push({
              conn: mT(0),
              graceMs: mT(1),
              sessionBased: 0 !== (TT & lT.Gc.SessionBased),
              replayOffer: 0 !== (TT & lT.Gc.ReplayOffer)
            })
          }
          IT = TT + (0, lT.ke)(fT)
        }
        return KT
      }
      forEachNetOut(TT) {
        this.forEachOut(DT, "net-out", lT.kb.NetOutPtr, lT.kb.NetOutLen, lT.Pb, 0, ((kT, cT, MT, KT) => {
          const OT = (0, lT.de)(cT);
          OT === lT.Qb.Frame ? TT((0, lT.be)(cT), MT) : this.crash(DT, `net-out record at ${KT} is kind ${OT}, not a frame`)
        }))
      }
      forEachWorkerOut(TT) {
        this.forEachOut(aT, "worker-out", lT.kb.WorkerOutPtr, lT.kb.WorkerOutLen, lT.zd, 4, ((kT, cT, MT, KT) => {
          const OT = 255 & kT,
            yT = OT === lT.Md.Init ? this.initOf(MT, KT) : MT;
          null !== yT && TT(OT, kT >>> 8 & 16777215, yT)
        }))
      }
      initOf(TT, kT) {
        const cT = this.memory().buffer;
        if (TT.byteLength !== lT.lb) return this.crash(aT, `worker-out Init record at ${kT} is ${TT.byteLength} bytes, not a view`), null;
        const MT = new DataView(TT.buffer, TT.byteOffset, lT.lb),
          KT = MT.getUint32(0, !0),
          OT = MT.getUint32(4, !0);
        return KT + OT > cT.byteLength ? (this.crash(aT, `worker-out Init record at ${kT} names ${OT} bytes at ${KT} outside ${cT.byteLength} bytes of memory`), null) : new Uint8Array(cT, KT, OT)
      }
      forEachOut(TT, kT, cT, MT, KT, OT, yT) {
        if (this.stopped || null === this.lastHeader) return;
        const fT = this.headerView(),
          xT = fT[cT],
          IT = fT[MT];
        if (0 === IT) return;
        const AT = this.memory().buffer;
        if (xT % 4 !== 0 || xT + IT > AT.byteLength) return void this.crash(TT, `${kT} of ${IT} bytes at ${xT} outside ${AT.byteLength} bytes of memory`);
        const CT = new DataView(AT, xT, IT);
        let jT = 0;
        for (; jT < IT;) {
          const cT = jT + KT,
            MT = cT <= IT ? CT.getUint32(jT + OT, !0) : -1;
          if (MT < 0 || MT > IT - cT) return void this.crash(TT, `${kT} record at ${jT} overruns its ${IT} bytes`);
          if (yT(CT.getUint32(jT, !0), CT.getUint32(jT + 4, !0), new Uint8Array(AT, xT + cT, MT), jT), this.stopped) return;
          jT = cT + (0, lT.ke)(MT)
        }
      }
      forEachEvent(TT) {
        if (this.stopped || null === this.lastHeader) return;
        const kT = this.headerView(),
          cT = kT[lT.kb.EventsPtr],
          MT = kT[lT.kb.EventsLen];
        if (0 === MT) return;
        const KT = this.memory().buffer;
        if (cT % 4 !== 0 || cT + MT > KT.byteLength) return void this.crash(ZT, `events of ${MT} bytes at ${cT} outside ${KT.byteLength} bytes of memory`);
        const OT = new DataView(KT, cT, MT);
        let yT = 0;
        for (; yT < MT;) {
          const kT = yT + lT.U,
            cT = kT <= MT ? OT.getUint32(yT, !0) : -1,
            KT = cT >>> 16;
          if (cT < 0 || KT > MT - kT) return void this.crash(ZT, `event record at ${yT} overruns its ${MT} bytes`);
          TT(65535 & cT, OT, kT, KT), yT = kT + (0, lT.ke)(KT)
        }
      }
      crashOn(TT, kT) {
        kT instanceof MT.b ? this.crash(ZT, kT.message) : this.crash(TT, kT)
      }
      crash(TT, kT) {
        this.stopped || (this.stopped = !0, this.handlers.onCrash({
          site: TT,
          error: kT,
          header: this.lastHeader
        }))
      }
      headerWord(TT) {
        return this.stopped || null === this.lastHeader ? 0 : this.headerView()[TT]
      }
      headerView() {
        const TT = this.memory().buffer;
        return TT !== this.headerBuffer && (this.headerBuffer = TT, this.header = new Uint32Array(TT, this.core.Aj(), lT.hb)), this.header
      }
    }
  },
  40547: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => OT,
      g: () => KT
    });
    var lT = cT(4681);
    let MT = null;

    function KT(TT) {
      MT = {
        scanned: !1
      };
      try {
        return TT()
      } finally {
        MT = null
      }
    }

    function OT() {
      const TT = MT;
      if (null === TT) return (0, lT.e)();
      const kT = (0, lT.e)(!TT.scanned);
      return TT.scanned = !0, kT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);