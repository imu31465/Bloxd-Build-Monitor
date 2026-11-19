export const id = 261;
export const ids = [261];
export const modules = {
  39781: (TT, oT, IT) => {
    function iT(TT, oT, IT) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(TT, oT).getContext("2d", IT);
      const iT = document.createElement("canvas");
      return iT.width = TT, iT.height = oT, iT.getContext("2d", IT)
    }

    function zT(TT, oT) {
      return TT.getContext("2d", oT)
    }
    IT.d(oT, {
      e: () => zT,
      i: () => iT
    })
  },
  39717: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => gT,
      e: () => cT,
      i: () => tT,
      j: () => ET,
      l: () => CT,
      m: () => jT,
      q: () => AT,
      u: () => MT,
      v: () => rT,
      w: () => vT,
      x: () => qT,
      A: () => mT,
      C: () => QT,
      G: () => sT,
      J: () => JT,
      K: () => aT
    });
    var iT = IT(4276),
      zT = IT(39420),
      kT = (IT(39581), IT(8));
    class WT {
      constructor(TT, oT) {
        this.memory = TT, this.access = oT, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.fD = 0, this.u32 = new kT.k(0), this.f32 = new kT.f(0), this.u8 = new kT.e(0), this.dataView = new kT.j(new ArrayBuffer(0)), this.refresh()
      }
      refresh() {
        this.ptr = this.access.ptr(), this.fD = this.access.fD(), this.buffer = (0, kT.J)(this.memory()), this.u32 = new kT.k(this.buffer, this.ptr, this.fD >>> 2), this.f32 = new kT.f(this.buffer, this.ptr, this.fD >>> 2), this.u8 = new kT.e(this.buffer, this.ptr, this.fD), this.dataView = new kT.j(this.buffer, this.ptr, this.fD)
      }
      ensureViews() {
        (0, kT.J)(this.memory()) !== this.buffer && this.refresh()
      }
      get view() {
        return this.ensureViews(), this.dataView
      }
      room(TT) {
        return !!this.fits(TT) || (this.dropped++, !1)
      }
      fits(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.cursor;
        this.ensureViews();
        const IT = oT + TT;
        return IT <= this.fD || IT <= iT.Hc && 0 !== this.access.reserve(IT) && (this.refresh(), IT <= this.fD)
      }
      consume(TT) {
        const oT = this.cursor - TT;
        oT > 0 && TT > 0 && (this.ensureViews(), this.u8.copyWithin(0, TT, this.cursor)), this.cursor = oT > 0 ? oT : 0
      }
      writeRecord(TT, oT, IT, zT, kT) {
        if (!this.room(iT.sb)) return !1;
        const WT = this.cursor >>> 2;
        return this.u32[WT] = 65535 & TT | (65535 & oT) << 16, this.f32[WT + 1] = IT, this.f32[WT + 2] = zT, this.u32[WT + 3] = kT >>> 0, this.cursor += iT.sb, !0
      }
      writeOptions(TT, oT) {
        const IT = oT.byteLength,
          zT = iT.sb + (0, iT.se)(IT);
        if (!this.fits(zT)) return !1;
        const kT = this.cursor,
          WT = kT >>> 2;
        this.u32[WT] = iT.vb.Options, this.u32[WT + 1] = IT, this.u32[WT + 2] = 0, this.u32[WT + 3] = TT >>> 0;
        const XT = kT + iT.sb;
        return this.u8.set(oT, XT), this.u8.fill(0, XT + IT, kT + zT), this.cursor += zT, !0
      }
      writeWorkerRecord(TT, oT, IT, zT, kT, WT) {
        const XT = WT.byteLength,
          BT = iT.Rd + (0, iT.se)(XT);
        if (XT > iT.Od) return this.dropped++, !1;
        if (!this.room(BT)) return !1;
        const FT = this.cursor,
          ST = FT >>> 2;
        this.u32[ST] = TT >>> 0, this.u32[ST + 1] = 65535 & oT | (65535 & IT) << 16, this.u32[ST + 2] = zT >>> 0, this.u32[ST + 3] = kT >>> 0, this.u32[ST + 4] = XT;
        const DT = FT + iT.Rd;
        return this.u8.set(WT, DT), this.u8.fill(0, DT + XT, FT + BT), this.cursor += BT, !0
      }
      written() {
        return this.ensureViews(), this.u8.subarray(0, this.cursor)
      }
      writeFrame(TT, oT) {
        return this.writeNet(iT.Rb.Frame, TT, oT)
      }
      writeOpen(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(iT.Rb.Open, TT, BT(oT))
      }
      writeClose(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(iT.Rb.Close, TT, BT(oT))
      }
      writeNet(TT, oT, IT) {
        const zT = IT.byteLength,
          kT = iT.Qb + (0, iT.se)(zT);
        if (zT > iT.Jb) return this.dropped++, !1;
        if (!this.room(kT)) return !1;
        const WT = this.cursor;
        this.u32[WT >>> 2] = zT, this.u32[1 + (WT >>> 2)] = (0, iT.pe)(TT, oT);
        const XT = WT + iT.Qb;
        return this.u8.set(IT, XT), this.u8.fill(0, XT + zT, WT + kT), this.cursor += kT, !0
      }
      hx(TT, oT, IT) {
        const zT = iT.t + (0, iT.se)(IT);
        if (!this.room(zT)) return -1;
        const kT = this.cursor;
        this.u32[kT >>> 2] = 65535 & TT | (65535 & oT) << 16, this.u32[1 + (kT >>> 2)] = IT;
        const WT = kT + iT.t;
        return this.u8.fill(0, WT, kT + zT), this.cursor += zT, WT
      }
      growForCmd(TT) {
        return this.fits(iT.t + (0, iT.se)(TT), 0)
      }
      writeCmd(TT, oT, IT) {
        const iT = this.hx(TT, oT, IT.byteLength);
        return !(iT < 0) && (this.u8.set(IT, iT), !0)
      }
      copyWritten(TT, oT) {
        return this.ensureViews(), this.u8.slice(TT, TT + oT)
      }
    }
    const XT = new kT.e(0);

    function BT(TT) {
      if (0 === TT) return XT;
      const oT = new kT.e(iT.Nb);
      for (let IT = 0; IT < iT.Nb; IT++) oT[IT] = TT >>> 8 * IT & 255;
      return oT
    }
    class FT {
      constructor(TT, oT) {
        this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new WT(oT, {
          ptr: () => TT.lD(),
          fD: () => TT.wkT(),
          reserve: oT => TT.akT(oT)
        }), this.net = new WT(oT, {
          ptr: () => TT.jkT(),
          fD: () => TT.CkT(),
          reserve: oT => TT.YkT(oT)
        }), this.worker = new WT(oT, {
          ptr: () => TT.iWT(),
          fD: () => TT.IWT(),
          reserve: oT => TT.QkT(oT)
        }), this.cmd = new WT(oT, {
          ptr: () => TT.LkT(),
          fD: () => TT.SkT(),
          reserve: oT => TT.DkT(oT)
        })
      }
      reset(TT) {
        this.input.cursor = 0, this.worker.cursor = 0, this.cmd.consume(TT)
      }
    }
    var ST = IT(39579),
      DT = IT(2204),
      LT = IT(4274),
      xT = IT(39721);
    const cT = "coreFrame",
      KT = "fatalStatus",
      MT = "otherCall",
      rT = "coreRings",
      AT = "netIn",
      gT = "abi",
      hT = "netOut",
      wT = "workerOut",
      mT = "worldgenHost",
      eT = "eventWalker",
      RT = "netEvent",
      uT = "envEvent",
      vT = "sharedTables",
      ET = "inputAction",
      fT = new Set([eT, RT, uT, ET, vT]),
      CT = "wasmMemory",
      jT = "meshHost";

    function JT(TT, oT) {
      TT.forEachWorkerOut(((IT, zT, kT) => {
        if ((0, iT.je)(IT)) try {
          var WT;
          null === (WT = oT.worldgen) || void 0 === WT || WT.take(IT, kT)
        } catch (BT) {
          TT.crash(mT, BT)
        } else try {
          var XT;
          null === (XT = oT.mesh) || void 0 === XT || XT.take(IT, zT, kT)
        } catch (BT) {
          TT.crash(jT, BT)
        }
      }))
    }
    const UT = 1048576;

    function aT(TT, oT) {
      let IT = !1;
      const iT = () => {
        IT = !1, oT()
      };
      return () => {
        !IT && TT.cursor >= UT && (IT = !0, queueMicrotask(iT))
      }
    }
    const YT = new Set([KT, MT, mT, jT]);

    function QT(TT) {
      return fT.has(TT.site) ? TT.error instanceof WebAssembly.RuntimeError || (0, zT.j)(TT.error) : !YT.has(TT.site) && TT.error instanceof Error
    }
    const OT = "events",
      HT = [],
      nT = "debugLog",
      qT = "terrainTextures",
      ZT = "sunShadowTextures",
      lT = new TextDecoder;

    function sT(TT, oT) {
      const {
        site: IT,
        error: zT,
        header: kT
      } = TT, WT = kT ? (0, iT.he)(kT.lastError) : "noFrame", XT = `CORE-${IT===KT?WT:IT}`, BT = null === zT || void 0 === zT ? "" : ` ${(0,ST.h)(zT)}`, FT = {
        site: IT,
        wasmBuild: oT.wasm,
        clientVersion: oT.client
      };
      return kT && (FT.status = String(kT.status), FT.lastError = WT, FT.lastErrorCode = String(kT.lastError), FT.lastErrorDetail = String(kT.lastErrorDetail), FT.errorCount = String(kT.errorCount), FT.frameIndex = String(kT.frameIndex), FT.tickIndex = String(kT.tickIndex)), {
        code: XT,
        message: `core ${IT}, last error ${WT};${BT}`,
        details: FT
      }
    }
    class tT {
      constructor(TT, oT, IT) {
        this.core = TT, this.memory = oT, this.handlers = IT, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.unsentUiPrefs = null, this.eventWalker = null, this.netOffsets = [], this.frameEvents = {
          ptr: 0,
          len: 0,
          net: HT,
          netOffsets: this.netOffsets,
          kind: "none"
        }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.rings = new FT(TT, oT)
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
          return this.core.AkT(TT)
        } catch (oT) {
          return this.crash(cT, oT), !1
        }
      }
      get isStopped() {
        return this.stopped
      }
      frame(TT, oT) {
        var IT;
        let kT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.stopped) return !1;
        if (!this.writePendingInput()) return !1;
        const {
          input: WT,
          net: XT,
          worker: BT,
          cmd: FT
        } = this.rings, ST = XT.cursor, DT = oT && !this.drawsHeld;
        let MT = iT.J.Fatal;
        const rT = FT.cursor;
        let gT = null;
        try {
          const oT = (DT ? iT.ab.Draws : 0) | (kT ? iT.ab.NetAll : 0);
          MT = (0, xT.d)((() => this.core.frame(TT, WT.cursor, XT.cursor, BT.cursor, oT, rT)))
        } catch (YT) {
          gT = {
            error: YT
          }
        }
        const hT = null === (IT = this.gameHost) || void 0 === IT ? void 0 : IT.takeFault();
        this.rings.reset(this.stopped || null !== gT || void 0 !== hT ? FT.cursor : rT);
        const wT = null === gT && void 0 === hT ? this.headerView() : null,
          mT = null === wT ? null : (0, iT.te)(wT);
        null !== mT && (this.lastHeader = mT);
        const uT = null !== mT && MT !== iT.J.Fatal,
          vT = uT && null !== wT ? wT[iT.gb.NetInKept] : 0,
          ET = uT && vT <= ST && vT % 4 === 0 ? vT : null;
        var fT, CT;
        null !== mT && null !== ET && MT === iT.J.Errors && (null === (fT = (CT = this.handlers).onErrors) || void 0 === fT || fT.call(CT, mT));
        const jT = null === ET ? HT : this.readEvents(ST);
        if (XT.consume(ST - (null !== ET && void 0 !== ET ? ET : 0)), this.netKept = null !== ET && void 0 !== ET ? ET : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== gT) return this.crash(cT, void 0 === hT || hT instanceof zT.b ? gT.error : hT), !1;
        if (void 0 !== hT || null === mT) return this.crashOn(cT, hT), !1;
        const JT = this.headerView()[iT.gb.FrameDraw];
        if (this.lastFrameKind = (0, LT.h)(DT, JT), MT === iT.J.Fatal) return this.crash(KT, null), !1;
        if (null === ET) return this.crash(AT, `the core kept ${vT} of ${ST} net-in bytes`), !1;
        if (this.eventWalker) {
          if (this.stopped) return !1;
          const TT = this.frameEvents,
            oT = this.headerView();
          TT.ptr = oT[iT.gb.EventsPtr], TT.len = oT[iT.gb.EventsLen], TT.net = jT, TT.kind = this.lastFrameKind;
          try {
            this.eventWalker(TT)
          } catch (YT) {
            return this.crashOn(eT, YT), !1
          }
          return this.handEnvEvents()
        }
        for (const iT of jT) {
          if (this.stopped) return !1;
          try {
            var UT, aT;
            null === (UT = (aT = this.handlers).onNetEvent) || void 0 === UT || UT.call(aT, iT)
          } catch (YT) {
            return this.crashOn(RT, YT), !1
          }
        }
        return this.handEnvEvents()
      }
      handEnvEvents() {
        for (const kT of this.graceEvents) {
          if (this.stopped) return !1;
          try {
            var TT, oT;
            null === (TT = (oT = this.handlers).onReconnectGrace) || void 0 === TT || TT.call(oT, kT)
          } catch (zT) {
            return this.crashOn(RT, zT), !1
          }
        }
        for (const kT of this.envEvents) {
          if (this.stopped) return !1;
          try {
            var IT, iT;
            null === (IT = (iT = this.handlers).onEnvEvent) || void 0 === IT || IT.call(iT, kT)
          } catch (zT) {
            return this.crashOn(uT, zT), !1
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
          const oT = this.unsentUiPrefs;
          oT && TT.writeRecord(iT.vb.UiPrefs, 0, oT.nametagCutDistance, 0, (0, iT.we)(oT)) && (this.unsentUiPrefs = null);
          const IT = this.unsentEnvPrefs;
          IT && TT.writeRecord(iT.vb.EnvPrefs, (0, iT.ie)(IT), IT.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
          const zT = this.unsentLookPrefs;
          zT && TT.writeRecord(iT.vb.Sensitivity, 0, zT.mouse, zT.touch, (0, DT.i)(zT.fovPercent)) && (this.unsentLookPrefs = null);
          let kT = 0;
          for (const {
              aux: iT,
              payload: WT
            }
            of this.unsentOptions) {
            if (!TT.writeOptions(iT, WT)) {
              if (TT.cursor > 0) break;
              this.optionsDropped++
            }
            kT++
          }
          kT > 0 && this.unsentOptions.splice(0, kT)
        } catch (oT) {
          return this.crash(rT, oT), !1
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
      queueOptions(TT, oT) {
        return !this.isStopped && (oT.byteLength > iT.Vb.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
          aux: TT,
          payload: oT
        }), !0))
      }
      setChunkCap(TT) {
        return this.callCore("setChunkCap", null, (oT => oT.lkT(TT)))
      }
      shedMemory(TT) {
        const oT = this.callCore("shedMemory", null, (oT => oT.NkT(TT)));
        return 0 === oT ? null : oT
      }
      addDistanceInUse() {
        const TT = this.callCore("addDistanceInUse", null, (TT => TT.kkT()));
        return 0 === TT ? null : TT
      }
      setChunkAddDistance(TT, oT) {
        return this.callCore("setChunkAddDistance", !1, (IT => IT.ZkT(TT, oT)))
      }
      setGameHost(TT) {
        return this.callCore("setGameHost", !1, (oT => (oT.rkT(TT), this.gameHost = TT, !0)))
      }
      setAntiCheatProbes(TT) {
        return this.callCore("setAntiCheatProbes", !1, (oT => oT.nkT(TT)))
      }
      setAmbientOcclusion(TT) {
        this.callCore("setAmbientOcclusion", void 0, (oT => {
          oT.HkT(TT)
        }))
      }
      setPoseLod(TT) {
        this.callCore("setPoseLod", void 0, (oT => {
          oT.tkT(TT)
        }))
      }
      setDebugLog(TT, oT) {
        this.callCore(nT, void 0, (IT => {
          IT.EM(TT, oT)
        }))
      }
      takeDebugLog(TT) {
        return this.callCore(nT, [], (oT => oT.fM(TT)))
      }
      setTextureLayers(TT) {
        return this.callCore("setTextureLayers", !1, (oT => oT.ykT(TT)))
      }
      setBlockColours(TT) {
        let {
          blocks: oT,
          counts: IT,
          values: iT
        } = TT;
        return this.callCore("setBlockColours", !1, (TT => TT.UIT(oT, IT, iT)))
      }
      terrainTextureNames() {
        return this.callCore(qT, [], (TT => TT.oWT()))
      }
      setTerrainTextures(TT, oT, IT, iT) {
        return this.callCore(qT, !1, (zT => zT.bkT(TT, IT, oT, iT)))
      }
      setShaderPack(TT, oT, IT, iT, zT, kT) {
        return this.callCore("setShaderPack", !1, (WT => {
          var XT, BT;
          return null !== (XT = null === (BT = WT.ZIT) || void 0 === BT ? void 0 : BT.call(WT, TT, oT, IT, iT, zT, kT)) && void 0 !== XT && XT
        }))
      }
      sunShadowWantedTextures() {
        return this.callCore(ZT, null, (TT => {
          var oT, IT;
          return null !== (oT = null === (IT = TT.PkT) || void 0 === IT ? void 0 : IT.call(TT)) && void 0 !== oT ? oT : null
        }))
      }
      setSunShadowTexture(TT, oT, IT, iT, zT) {
        this.callCore(ZT, void 0, (kT => {
          var WT;
          null === (WT = kT.pkT) || void 0 === WT || WT.call(kT, TT, oT, IT, iT, zT)
        }))
      }
      takeSunShadowWarnings() {
        return this.callCore(ZT, [], (TT => {
          var oT, IT;
          return null !== (oT = null === (IT = TT.VkT) || void 0 === IT ? void 0 : IT.call(TT)) && void 0 !== oT ? oT : []
        }))
      }
      sunShadowsHeld() {
        return this.callCore(ZT, null, (TT => {
          var oT, IT;
          return null !== (oT = null === (IT = TT.dkT) || void 0 === IT ? void 0 : IT.call(TT)) && void 0 !== oT ? oT : null
        }))
      }
      callCore(TT, oT, IT) {
        if (this.stopped) return oT;
        try {
          return IT(this.core)
        } catch (iT) {
          return this.crash(TT, iT), oT
        }
      }
      readEvents(TT) {
        this.netOffsets.length = 0;
        const oT = this.headerView(),
          IT = oT[iT.gb.EventsPtr],
          zT = oT[iT.gb.EventsLen];
        if (this.envEvents.length = 0, this.graceEvents.length = 0, 0 === zT) return HT;
        const kT = [],
          WT = this.memory().buffer;
        if (IT % 4 !== 0 || IT + zT > WT.byteLength) return this.crash(OT, `events of ${zT} bytes at ${IT} outside ${WT.byteLength} bytes of memory`), HT;
        const XT = new DataView(WT, IT, zT),
          BT = this.rings.net,
          FT = (oT, IT) => oT + IT <= TT ? BT.copyWritten(oT, IT) : null;
        let ST = 0;
        for (; ST < zT;) {
          const TT = ST + iT.P,
            oT = TT <= zT ? XT.getUint32(ST, !0) : -1,
            BT = oT >>> 16;
          if (oT < 0 || BT > zT - TT) return this.crash(OT, `event record at ${ST} overruns its ${zT} bytes`), HT;
          const uT = 65535 & oT,
            vT = oT => XT.getUint32(TT + 4 * oT, !0);
          if (uT === iT.R.RawMessage) {
            const TT = BT >= iT.Kc.BYTES ? 65535 & vT(1) : -1,
              oT = TT === iT.Kc.STRING_TYPE,
              IT = BT === (oT ? iT.Kc.STRING_TYPE_BYTES : iT.Kc.BYTES) ? FT(vT(2), vT(3)) : null,
              zT = oT && IT ? FT(vT(4), vT(5)) : null;
            if (!IT || oT && !zT) return this.crash(OT, `RawMessage at ${ST} of ${BT} bytes names bytes outside net-in`), HT;
            this.netOffsets.push(ST), kT.push({
              type: "message",
              conn: vT(0),
              US: TT,
              payloadKind: vT(1) >>> 16,
              payload: IT,
              stringType: zT ? lT.decode(zT) : null
            })
          } else if (uT === iT.R.CoreErrors) {
            var DT, LT;
            const TT = BT >= 4 ? vT(0) : -1;
            if (TT < 0 || TT > iT.G.PAIRS_MAX || BT !== 4 * (iT.G.FIXED_WORDS + iT.G.PAIR_WORDS * TT)) return this.crash(OT, `CoreErrors at ${ST} of ${BT} bytes`), HT;
            const oT = [];
            for (let IT = 0; IT < TT; IT++) oT.push({
              code: vT(1 + 2 * IT),
              detail: vT(2 + 2 * IT)
            });
            null === (DT = (LT = this.handlers).onCoreErrors) || void 0 === DT || DT.call(LT, oT, vT(1 + 2 * TT))
          } else if (uT === iT.R.RenderReload) {
            var xT, cT;
            if (BT !== iT.$c.BYTES) return this.crash(OT, `RenderReload at ${ST} of ${BT} bytes`), HT;
            null === (xT = (cT = this.handlers).onRenderReload) || void 0 === xT || xT.call(cT, vT(0), vT(1), vT(2))
          } else if (uT === iT.R.Images) {
            var KT, MT;
            null === (KT = (MT = this.handlers).onImages) || void 0 === KT || KT.call(MT, new Uint8Array(WT.slice(IT + TT, IT + TT + BT)))
          } else if (uT === iT.R.ModelRequests)
            for (let IT = 0; IT < BT >>> 2; IT++) {
              var rT, AT;
              null === (rT = (AT = this.handlers).onModelRequest) || void 0 === rT || rT.call(AT, vT(IT))
            } else if (uT === iT.R.ModelTaken) {
              var gT, hT;
              if (BT < 4) return this.crash(OT, `ModelTaken at ${ST} of ${BT} bytes`), HT;
              const TT = new Uint32Array((BT >>> 2) - 1);
              for (let oT = 0; oT < TT.length; oT++) TT[oT] = vT(1 + oT);
              null === (gT = (hT = this.handlers).onModelTaken) || void 0 === gT || gT.call(hT, vT(0), TT)
            } else if (uT === iT.R.TerrainTexturesWanted) {
            var wT, mT;
            if (0 !== BT) return this.crash(OT, `TerrainTexturesWanted at ${ST} of ${BT} bytes`), HT;
            null === (wT = (mT = this.handlers).onTerrainTexturesWanted) || void 0 === wT || wT.call(mT)
          } else if (uT === iT.R.KeepAliveDue) {
            var eT, RT;
            if (BT > iT.xb) return this.crash(OT, `KeepAliveDue at ${ST} of ${BT} bytes`), HT;
            null === (eT = (RT = this.handlers).onKeepAlive) || void 0 === eT || eT.call(RT, new Uint8Array(WT, IT + TT, BT).slice())
          } else if (uT === iT.R.ConnectionState) {
            if (BT !== iT.x) return this.crash(OT, `ConnectionState at ${ST} of ${BT} bytes`), HT;
            this.netOffsets.push(ST), kT.push({
              type: "connection",
              conn: vT(0),
              phase: vT(1),
              code: 0 | vT(2)
            })
          } else if (uT === iT.R.EnvLighting || uT === iT.R.SkyImages) {
            if (BT !== (uT === iT.R.EnvLighting ? iT.M : iT.ud)) return this.crash(OT, `event ${uT} at ${ST} of ${BT} bytes`), HT;
            this.envEvents.push({
              kind: uT,
              payload: new Uint8Array(WT.slice(IT + TT, IT + TT + BT))
            })
          } else if (uT === iT.R.ReconnectGrace) {
            if (BT !== iT.pc) return this.crash(OT, `ReconnectGrace at ${ST} of ${BT} bytes`), HT;
            const TT = vT(2);
            this.graceEvents.push({
              conn: vT(0),
              graceMs: vT(1),
              sessionBased: 0 !== (TT & iT.Oc.SessionBased),
              replayOffer: 0 !== (TT & iT.Oc.ReplayOffer)
            })
          }
          ST = TT + (0, iT.se)(BT)
        }
        return kT
      }
      forEachNetOut(TT) {
        this.forEachOut(hT, "net-out", iT.gb.NetOutPtr, iT.gb.NetOutLen, iT.Qb, 0, ((oT, IT, zT, kT) => {
          const WT = (0, iT.ne)(IT);
          WT === iT.Rb.Frame ? TT((0, iT.le)(IT), zT) : this.crash(hT, `net-out record at ${kT} is kind ${WT}, not a frame`)
        }))
      }
      forEachWorkerOut(TT) {
        this.forEachOut(wT, "worker-out", iT.gb.WorkerOutPtr, iT.gb.WorkerOutLen, iT.Nd, 4, ((oT, IT, zT, kT) => {
          const WT = 255 & oT,
            XT = WT === iT.be.Init ? this.initOf(zT, kT) : zT;
          null !== XT && TT(WT, oT >>> 8 & 16777215, XT)
        }))
      }
      initOf(TT, oT) {
        const IT = this.memory().buffer;
        if (TT.byteLength !== iT.kb) return this.crash(wT, `worker-out Init record at ${oT} is ${TT.byteLength} bytes, not a view`), null;
        const zT = new DataView(TT.buffer, TT.byteOffset, iT.kb),
          kT = zT.getUint32(0, !0),
          WT = zT.getUint32(4, !0);
        return kT + WT > IT.byteLength ? (this.crash(wT, `worker-out Init record at ${oT} names ${WT} bytes at ${kT} outside ${IT.byteLength} bytes of memory`), null) : new Uint8Array(IT, kT, WT)
      }
      forEachOut(TT, oT, IT, zT, kT, WT, XT) {
        if (this.stopped || null === this.lastHeader) return;
        const BT = this.headerView(),
          FT = BT[IT],
          ST = BT[zT];
        if (0 === ST) return;
        const DT = this.memory().buffer;
        if (FT % 4 !== 0 || FT + ST > DT.byteLength) return void this.crash(TT, `${oT} of ${ST} bytes at ${FT} outside ${DT.byteLength} bytes of memory`);
        const LT = new DataView(DT, FT, ST);
        let xT = 0;
        for (; xT < ST;) {
          const IT = xT + kT,
            zT = IT <= ST ? LT.getUint32(xT + WT, !0) : -1;
          if (zT < 0 || zT > ST - IT) return void this.crash(TT, `${oT} record at ${xT} overruns its ${ST} bytes`);
          if (XT(LT.getUint32(xT, !0), LT.getUint32(xT + 4, !0), new Uint8Array(DT, FT + IT, zT), xT), this.stopped) return;
          xT = IT + (0, iT.se)(zT)
        }
      }
      forEachEvent(TT) {
        if (this.stopped || null === this.lastHeader) return;
        const oT = this.headerView(),
          IT = oT[iT.gb.EventsPtr],
          zT = oT[iT.gb.EventsLen];
        if (0 === zT) return;
        const kT = this.memory().buffer;
        if (IT % 4 !== 0 || IT + zT > kT.byteLength) return void this.crash(OT, `events of ${zT} bytes at ${IT} outside ${kT.byteLength} bytes of memory`);
        const WT = new DataView(kT, IT, zT);
        let XT = 0;
        for (; XT < zT;) {
          const oT = XT + iT.P,
            IT = oT <= zT ? WT.getUint32(XT, !0) : -1,
            kT = IT >>> 16;
          if (IT < 0 || kT > zT - oT) return void this.crash(OT, `event record at ${XT} overruns its ${zT} bytes`);
          TT(65535 & IT, WT, oT, kT), XT = oT + (0, iT.se)(kT)
        }
      }
      crashOn(TT, oT) {
        oT instanceof zT.b ? this.crash(OT, oT.message) : this.crash(TT, oT)
      }
      crash(TT, oT) {
        this.stopped || (this.stopped = !0, this.handlers.onCrash({
          site: TT,
          error: oT,
          header: this.lastHeader
        }))
      }
      headerWord(TT) {
        return this.stopped || null === this.lastHeader ? 0 : this.headerView()[TT]
      }
      headerView() {
        const TT = this.memory().buffer;
        return TT !== this.headerBuffer && (this.headerBuffer = TT, this.header = new Uint32Array(TT, this.core.wx(), iT.eb)), this.header
      }
    }
  },
  39721: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => WT,
      d: () => kT
    });
    var iT = IT(4191);
    let zT = null;

    function kT(TT) {
      zT = {
        scanned: !1
      };
      try {
        return TT()
      } finally {
        zT = null
      }
    }

    function WT() {
      const TT = zT;
      if (null === TT) return (0, iT.f)();
      const oT = (0, iT.f)(!TT.scanned);
      return TT.scanned = !0, oT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);