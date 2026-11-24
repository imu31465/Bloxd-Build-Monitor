export const id = 210;
export const ids = [210];
export const modules = {
  40734: (DD, zD, wD) => {
    function pD(DD, zD, wD) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(DD, zD).getContext("2d", wD);
      const pD = document.createElement("canvas");
      return pD.width = DD, pD.height = zD, pD.getContext("2d", wD)
    }

    function sD(DD, zD) {
      return DD.getContext("2d", zD)
    }
    wD.d(zD, {
      b: () => sD,
      d: () => pD
    })
  },
  40694: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => LD
    });
    const pD = 1 << 20,
      sD = 1 << 21,
      KD = 1024,
      rD = 2048;

    function LD(DD, zD, wD) {
      const LD = DD + pD,
        cD = zD + KD,
        gD = wD + pD;
      return LD < 0 || LD >= sD || gD < 0 || gD >= sD || cD < 0 || cD >= rD ? -1 : (LD * sD + gD) * rD + cD
    }
  },
  40689: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => pD,
      d: () => rD,
      g: () => sD,
      j: () => KD,
      k: () => RD,
      n: () => gD,
      o: () => cD,
      s: () => LD
    });
    wD(3466);
    wD(40694);

    function pD(DD) {}

    function sD(DD) {}

    function KD(DD) {}

    function rD(DD) {}

    function LD(DD) {}

    function cD(DD, zD, wD) {}

    function gD(DD) {}

    function RD(DD) {}
  },
  40686: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => MD,
      f: () => ID,
      g: () => aD,
      k: () => CD,
      o: () => bD,
      s: () => jD,
      u: () => nD,
      w: () => GD,
      y: () => hD,
      C: () => PD,
      G: () => kD,
      H: () => ED,
      J: () => WD,
      K: () => oD,
      M: () => dD,
      P: () => iD
    });
    var pD = wD(4817),
      sD = wD(40562),
      KD = (wD(40689), wD(9));
    class rD {
      constructor(DD, zD) {
        this.memory = DD, this.access = zD, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.bA = 0, this.u32 = new KD.k(0), this.f32 = new KD.g(0), this.u8 = new KD.d(0), this.dataView = new KD.j(new ArrayBuffer(0)), this.refresh()
      }
      refresh() {
        this.ptr = this.access.ptr(), this.bA = this.access.bA(), this.buffer = (0, KD.K)(this.memory()), this.u32 = new KD.k(this.buffer, this.ptr, this.bA >>> 2), this.f32 = new KD.g(this.buffer, this.ptr, this.bA >>> 2), this.u8 = new KD.d(this.buffer, this.ptr, this.bA), this.dataView = new KD.j(this.buffer, this.ptr, this.bA)
      }
      ensureViews() {
        (0, KD.K)(this.memory()) !== this.buffer && this.refresh()
      }
      get view() {
        return this.ensureViews(), this.dataView
      }
      room(DD) {
        return !!this.fits(DD) || (this.dropped++, !1)
      }
      fits(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.cursor;
        this.ensureViews();
        const wD = zD + DD;
        return wD <= this.bA || wD <= pD.Jc && 0 !== this.access.reserve(wD) && (this.refresh(), wD <= this.bA)
      }
      consume(DD) {
        const zD = this.cursor - DD;
        zD > 0 && DD > 0 && (this.ensureViews(), this.u8.copyWithin(0, DD, this.cursor)), this.cursor = zD > 0 ? zD : 0
      }
      writeRecord(DD, zD, wD, sD, KD) {
        if (!this.room(pD.kb)) return !1;
        const rD = this.cursor >>> 2;
        return this.u32[rD] = 65535 & DD | (65535 & zD) << 16, this.f32[rD + 1] = wD, this.f32[rD + 2] = sD, this.u32[rD + 3] = KD >>> 0, this.cursor += pD.kb, !0
      }
      writeOptions(DD, zD) {
        const wD = zD.byteLength,
          sD = pD.kb + (0, pD.we)(wD);
        if (!this.fits(sD)) return !1;
        const KD = this.cursor,
          rD = KD >>> 2;
        this.u32[rD] = pD.nb.Options, this.u32[rD + 1] = wD, this.u32[rD + 2] = 0, this.u32[rD + 3] = DD >>> 0;
        const LD = KD + pD.kb;
        return this.u8.set(zD, LD), this.u8.fill(0, LD + wD, KD + sD), this.cursor += sD, !0
      }
      writeWorkerRecord(DD, zD, wD, sD, KD, rD) {
        const LD = rD.byteLength,
          cD = pD.Ud + (0, pD.we)(LD);
        if (LD > pD.Qd) return this.dropped++, !1;
        if (!this.room(cD)) return !1;
        const gD = this.cursor,
          RD = gD >>> 2;
        this.u32[RD] = DD >>> 0, this.u32[RD + 1] = 65535 & zD | (65535 & wD) << 16, this.u32[RD + 2] = sD >>> 0, this.u32[RD + 3] = KD >>> 0, this.u32[RD + 4] = LD;
        const AD = gD + pD.Ud;
        return this.u8.set(rD, AD), this.u8.fill(0, AD + LD, gD + cD), this.cursor += cD, !0
      }
      written() {
        return this.ensureViews(), this.u8.subarray(0, this.cursor)
      }
      writeFrame(DD, zD) {
        return this.writeNet(pD.ac.Frame, DD, zD)
      }
      writeOpen(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(pD.ac.Open, DD, cD(zD))
      }
      writeClose(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(pD.ac.Close, DD, cD(zD))
      }
      writeNet(DD, zD, wD) {
        const sD = wD.byteLength,
          KD = pD.Zb + (0, pD.we)(sD);
        if (sD > pD.Sb) return this.dropped++, !1;
        if (!this.room(KD)) return !1;
        const rD = this.cursor;
        this.u32[rD >>> 2] = sD, this.u32[1 + (rD >>> 2)] = (0, pD.re)(DD, zD);
        const LD = rD + pD.Zb;
        return this.u8.set(wD, LD), this.u8.fill(0, LD + sD, rD + KD), this.cursor += KD, !0
      }
      Jf(DD, zD, wD) {
        const sD = pD.q + (0, pD.we)(wD);
        if (!this.room(sD)) return -1;
        const KD = this.cursor;
        this.u32[KD >>> 2] = 65535 & DD | (65535 & zD) << 16, this.u32[1 + (KD >>> 2)] = wD;
        const rD = KD + pD.q;
        return this.u8.fill(0, rD, KD + sD), this.cursor += sD, rD
      }
      growForCmd(DD) {
        return this.fits(pD.q + (0, pD.we)(DD), 0)
      }
      writeCmd(DD, zD, wD) {
        const pD = this.Jf(DD, zD, wD.byteLength);
        return !(pD < 0) && (this.u8.set(wD, pD), !0)
      }
      copyWritten(DD, zD) {
        return this.ensureViews(), this.u8.slice(DD, DD + zD)
      }
    }
    const LD = new KD.d(0);

    function cD(DD) {
      if (0 === DD) return LD;
      const zD = new KD.d(pD.Wb);
      for (let wD = 0; wD < pD.Wb; wD++) zD[wD] = DD >>> 8 * wD & 255;
      return zD
    }
    class gD {
      constructor(DD, zD) {
        this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new rD(zD, {
          ptr: () => DD.oA(),
          bA: () => DD.zrD(),
          reserve: zD => DD.frD(zD)
        }), this.net = new rD(zD, {
          ptr: () => DD.RrD(),
          bA: () => DD.crD(),
          reserve: zD => DD.IrD(zD)
        }), this.worker = new rD(zD, {
          ptr: () => DD.WrD(),
          bA: () => DD.lrD(),
          reserve: zD => DD.BrD(zD)
        }), this.cmd = new rD(zD, {
          ptr: () => DD.oKD(),
          bA: () => DD.mKD(),
          reserve: zD => DD.eKD(zD)
        })
      }
      reset(DD, zD, wD) {
        this.input.consume(DD), this.worker.consume(zD), this.cmd.consume(wD)
      }
    }
    var RD = wD(36254),
      AD = wD(2389),
      UD = wD(4808),
      fD = wD(40700);
    const ID = "coreFrame",
      BD = "fatalStatus",
      GD = "otherCall",
      hD = "coreRings",
      nD = "netIn",
      MD = "abi",
      OD = "netOut",
      JD = "workerOut",
      ED = "worldgenHost",
      QD = "eventWalker",
      XD = "netEvent",
      VD = "envEvent",
      PD = "sharedTables",
      CD = "inputAction",
      xD = "frameSends",
      TD = new Set([QD, XD, VD, xD, CD, PD]),
      bD = "wasmMemory",
      jD = "meshHost";

    function dD(DD, zD) {
      DD.forEachWorkerOut(((wD, sD, KD) => {
        if ((0, pD.ke)(wD)) try {
          var rD;
          null === (rD = zD.worldgen) || void 0 === rD || rD.take(wD, KD)
        } catch (cD) {
          DD.crash(ED, cD)
        } else try {
          var LD;
          null === (LD = zD.mesh) || void 0 === LD || LD.take(wD, sD, KD)
        } catch (cD) {
          DD.crash(jD, cD)
        }
      }))
    }
    const SD = 1048576;

    function iD(DD, zD) {
      let wD = !1;
      const pD = () => {
        wD = !1, zD()
      };
      return () => {
        !wD && DD.cursor >= SD && (wD = !0, queueMicrotask(pD))
      }
    }
    const lD = new Set([BD, GD, ED, jD]);

    function WD(DD) {
      return TD.has(DD.site) ? DD.error instanceof WebAssembly.RuntimeError || (0, sD.g)(DD.error) : !lD.has(DD.site) && DD.error instanceof Error
    }
    const ND = "events",
      ZD = [],
      yD = "debugLog",
      kD = "terrainTextures",
      mD = "sunShadowTextures",
      eD = new TextDecoder;

    function oD(DD, zD) {
      const {
        site: wD,
        error: sD,
        header: KD
      } = DD, rD = KD ? (0, pD.fe)(KD.lastError) : "noFrame", LD = `CORE-${wD===BD?rD:wD}`, cD = null === sD || void 0 === sD ? "" : ` ${(0,RD.m)(sD)}`, gD = {
        site: wD,
        wasmBuild: zD.wasm,
        clientVersion: zD.client
      };
      return KD && (gD.status = String(KD.status), gD.lastError = rD, gD.lastErrorCode = String(KD.lastError), gD.lastErrorDetail = String(KD.lastErrorDetail), gD.errorCount = String(KD.errorCount), gD.frameIndex = String(KD.frameIndex), gD.tickIndex = String(KD.tickIndex)), {
        code: LD,
        message: `core ${wD}, last error ${rD};${cD}`,
        details: gD
      }
    }
    class aD {
      constructor(DD, zD, wD) {
        this.core = DD, this.memory = zD, this.handlers = wD, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.loadCountsBuffer = null, this.loadCounts = new Uint32Array(0), this.unsentUiPrefs = null, this.eventWalker = null, this.netOffsets = [], this.frameEvents = {
          ptr: 0,
          len: 0,
          net: ZD,
          netOffsets: this.netOffsets,
          kind: "none"
        }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.atSendsStop = !1, this.rings = new gD(DD, zD)
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
      framePaces(DD) {
        if (this.stopped || this.drawsHeld) return !1;
        try {
          return this.core.YKD(DD)
        } catch (zD) {
          return this.crash(ID, zD), !1
        }
      }
      get isStopped() {
        return this.stopped
      }
      frame(DD, zD) {
        var wD;
        let KD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.stopped) return !1;
        if (!this.writePendingInput()) return !1;
        const {
          input: rD,
          net: LD,
          worker: cD,
          cmd: gD
        } = this.rings, RD = LD.cursor, AD = zD && !this.drawsHeld;
        let GD = pD.J.Fatal;
        const hD = rD.cursor,
          MD = cD.cursor,
          OD = gD.cursor;
        let JD, ED = null;
        const VD = this.handlers.onSends;
        try {
          const zD = (AD ? pD.$.Draws : 0) | (KD ? pD.$.NetAll : 0) | (VD ? pD.$.StopForSends : 0);
          GD = (0, fD.e)((() => {
            let wD = this.core.frame(DD, hD, LD.cursor, MD, zD, OD);
            for (; wD === pD.pd && VD;) {
              var sD;
              if (JD ??= null === (sD = this.gameHost) || void 0 === sD ? void 0 : sD.takeFault(), void 0 === JD && !this.takeSends(VD)) return pD.J.Fatal;
              wD = this.core.ZG()
            }
            return wD
          }))
        } catch (eD) {
          ED = {
            error: eD
          }
        }
        JD ??= null === (wD = this.gameHost) || void 0 === wD ? void 0 : wD.takeFault();
        const PD = this.stopped || null !== ED || void 0 !== JD;
        this.rings.reset(PD ? rD.cursor : hD, PD ? cD.cursor : MD, PD ? gD.cursor : OD);
        const CD = null === ED && void 0 === JD,
          xD = CD && !this.stopped && GD === pD.J.Fatal && 0 === this.core.Ef(),
          TD = CD && !xD ? this.headerView() : null,
          bD = xD ? {
            ...null !== (jD = this.lastHeader) && void 0 !== jD ? jD : (0, pD.Ae)(new Uint32Array(pD.eb)),
            status: pD.J.Fatal,
            lastError: pD.F.CoreBusy,
            lastErrorDetail: 0
          } : null === TD ? null : (0, pD.Ae)(TD);
        var jD;
        null !== bD && (this.lastHeader = bD);
        const dD = null !== bD && GD !== pD.J.Fatal,
          SD = dD && null !== TD ? TD[pD.fb.NetInKept] : 0,
          iD = dD && SD <= RD && SD % 4 === 0 ? SD : null;
        var lD, WD;
        null !== bD && null !== iD && GD === pD.J.Errors && (null === (lD = (WD = this.handlers).onErrors) || void 0 === lD || lD.call(WD, bD));
        const ND = null === iD ? ZD : this.readEvents(RD);
        if (LD.consume(RD - (null !== iD && void 0 !== iD ? iD : 0)), this.netKept = null !== iD && void 0 !== iD ? iD : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== ED) return this.crash(ID, void 0 === JD || JD instanceof sD.b ? ED.error : JD), !1;
        if (void 0 !== JD || null === bD) return this.crashOn(ID, JD), !1;
        if (xD) return this.crash(BD, null), !1;
        const yD = this.headerView()[pD.fb.FrameDraw];
        if (this.lastFrameKind = (0, UD.c)(AD, yD), GD === pD.J.Fatal) return this.crash(BD, null), !1;
        if (null === iD) return this.crash(nD, `the core kept ${SD} of ${RD} net-in bytes`), !1;
        if (this.eventWalker) {
          if (this.stopped) return !1;
          const DD = this.frameEvents,
            zD = this.headerView();
          DD.ptr = zD[pD.fb.EventsPtr], DD.len = zD[pD.fb.EventsLen], DD.net = ND, DD.kind = this.lastFrameKind;
          try {
            this.eventWalker(DD)
          } catch (eD) {
            return this.crashOn(QD, eD), !1
          }
          return this.handEnvEvents()
        }
        for (const pD of ND) {
          if (this.stopped) return !1;
          try {
            var kD, mD;
            null === (kD = (mD = this.handlers).onNetEvent) || void 0 === kD || kD.call(mD, pD)
          } catch (eD) {
            return this.crashOn(XD, eD), !1
          }
        }
        return this.handEnvEvents()
      }
      handEnvEvents() {
        for (const KD of this.graceEvents) {
          if (this.stopped) return !1;
          try {
            var DD, zD;
            null === (DD = (zD = this.handlers).onReconnectGrace) || void 0 === DD || DD.call(zD, KD)
          } catch (sD) {
            return this.crashOn(XD, sD), !1
          }
        }
        for (const KD of this.envEvents) {
          if (this.stopped) return !1;
          try {
            var wD, pD;
            null === (wD = (pD = this.handlers).onEnvEvent) || void 0 === wD || wD.call(pD, KD)
          } catch (sD) {
            return this.crashOn(VD, sD), !1
          }
        }
        return !this.stopped
      }
      setEventWalker(DD) {
        this.eventWalker = DD
      }
      writePendingInput() {
        if (this.stopped) return !1;
        const {
          input: DD
        } = this.rings;
        try {
          const zD = this.unsentUiPrefs;
          zD && DD.writeRecord(pD.nb.UiPrefs, 0, zD.nametagCutDistance, 0, (0, pD.De)(zD)) && (this.unsentUiPrefs = null);
          const wD = this.unsentEnvPrefs;
          wD && DD.writeRecord(pD.nb.EnvPrefs, (0, pD.ie)(wD), wD.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
          const sD = this.unsentLookPrefs;
          sD && DD.writeRecord(pD.nb.Sensitivity, 0, sD.mouse, sD.touch, (0, AD.i)(sD.fovPercent)) && (this.unsentLookPrefs = null);
          let KD = 0;
          for (const {
              aux: pD,
              payload: rD
            }
            of this.unsentOptions) {
            if (!DD.writeOptions(pD, rD)) {
              if (DD.cursor > 0) break;
              this.optionsDropped++
            }
            KD++
          }
          KD > 0 && this.unsentOptions.splice(0, KD)
        } catch (zD) {
          return this.crash(hD, zD), !1
        }
        return !0
      }
      setHoldDraws(DD) {
        this.drawsHeld = DD
      }
      setUiPrefs(DD) {
        this.unsentUiPrefs = {
          ...DD
        }
      }
      setEnvPrefs(DD) {
        this.unsentEnvPrefs = {
          ...DD
        }
      }
      setLookPrefs(DD) {
        this.unsentLookPrefs = {
          ...DD
        }
      }
      queueOptions(DD, zD) {
        return !this.isStopped && (zD.byteLength > pD.fc.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
          aux: DD,
          payload: zD
        }), !0))
      }
      setChunkCap(DD) {
        return this.callCore("setChunkCap", null, (zD => zD.ErD(DD)))
      }
      shedMemory(DD) {
        const zD = this.callCore("shedMemory", null, (zD => zD.TrD(DD)));
        return 0 === zD ? null : zD
      }
      addDistanceInUse() {
        const DD = this.callCore("addDistanceInUse", null, (DD => DD.WKD()));
        return 0 === DD ? null : DD
      }
      setChunkAddDistance(DD, zD) {
        return this.callCore("setChunkAddDistance", !1, (wD => wD.JrD(DD, zD)))
      }
      setGameHost(DD) {
        return this.callCore("setGameHost", !1, (zD => (zD.FKD(DD), this.gameHost = DD, !0)))
      }
      setAntiCheatProbes(DD) {
        return this.callCore("setAntiCheatProbes", !1, (zD => zD.nrD(DD)))
      }
      setAmbientOcclusion(DD) {
        this.callCore("setAmbientOcclusion", void 0, (zD => {
          zD.hrD(DD)
        }))
      }
      setPoseLod(DD) {
        this.callCore("setPoseLod", void 0, (zD => {
          zD.XrD(DD)
        }))
      }
      setDebugLog(DD, zD) {
        this.callCore(yD, void 0, (wD => {
          wD.SG(DD, zD)
        }))
      }
      takeDebugLog(DD) {
        return this.callCore(yD, [], (zD => zD.iG(DD)))
      }
      setTextureLayers(DD) {
        return this.callCore("setTextureLayers", !1, (zD => zD.xrD(DD)))
      }
      setBlockColours(DD) {
        let {
          blocks: zD,
          counts: wD,
          values: pD
        } = DD;
        return this.callCore("setBlockColours", !1, (DD => DD.IpD(zD, wD, pD)))
      }
      terrainTextureNames() {
        return this.callCore(kD, [], (DD => DD.irD()))
      }
      setTerrainTextures(DD, zD, wD, pD) {
        return this.callCore(kD, !1, (sD => sD.CrD(DD, wD, zD, pD)))
      }
      setShaderPack(DD, zD, wD, pD, sD, KD) {
        return this.callCore("setShaderPack", !1, (rD => {
          var LD, cD;
          return null !== (LD = null === (cD = rD.CpD) || void 0 === cD ? void 0 : cD.call(rD, DD, zD, wD, pD, sD, KD)) && void 0 !== LD && LD
        }))
      }
      sunShadowWantedTextures() {
        return this.callCore(mD, null, (DD => {
          var zD, wD;
          return null !== (zD = null === (wD = DD.brD) || void 0 === wD ? void 0 : wD.call(DD)) && void 0 !== zD ? zD : null
        }))
      }
      setSunShadowTexture(DD, zD, wD, pD, sD) {
        this.callCore(mD, void 0, (KD => {
          var rD;
          null === (rD = KD.PrD) || void 0 === rD || rD.call(KD, DD, zD, wD, pD, sD)
        }))
      }
      takeSunShadowWarnings() {
        return this.callCore(mD, [], (DD => {
          var zD, wD;
          return null !== (zD = null === (wD = DD.drD) || void 0 === wD ? void 0 : wD.call(DD)) && void 0 !== zD ? zD : []
        }))
      }
      sunShadowsHeld() {
        return this.callCore(mD, null, (DD => {
          var zD, wD;
          return null !== (zD = null === (wD = DD.jrD) || void 0 === wD ? void 0 : wD.call(DD)) && void 0 !== zD ? zD : null
        }))
      }
      callCore(DD, zD, wD) {
        if (this.stopped) return zD;
        try {
          return wD(this.core)
        } catch (pD) {
          return this.crash(DD, pD), zD
        }
      }
      readEvents(DD) {
        this.netOffsets.length = 0;
        const zD = this.headerView(),
          wD = zD[pD.fb.EventsPtr],
          sD = zD[pD.fb.EventsLen];
        if (this.envEvents.length = 0, this.graceEvents.length = 0, 0 === sD) return ZD;
        const KD = [],
          rD = this.memory().buffer;
        if (wD % 4 !== 0 || wD + sD > rD.byteLength) return this.crash(ND, `events of ${sD} bytes at ${wD} outside ${rD.byteLength} bytes of memory`), ZD;
        const LD = new DataView(rD, wD, sD),
          cD = this.rings.net,
          gD = (zD, wD) => zD + wD <= DD ? cD.copyWritten(zD, wD) : null;
        let RD = 0;
        for (; RD < sD;) {
          const DD = RD + pD.Q,
            zD = DD <= sD ? LD.getUint32(RD, !0) : -1,
            cD = zD >>> 16;
          if (zD < 0 || cD > sD - DD) return this.crash(ND, `event record at ${RD} overruns its ${sD} bytes`), ZD;
          const CD = 65535 & zD,
            xD = zD => LD.getUint32(DD + 4 * zD, !0);
          if (CD === pD.U.RawMessage) {
            const DD = cD >= pD.Lc.BYTES ? 65535 & xD(1) : -1,
              zD = DD === pD.Lc.STRING_TYPE,
              wD = cD === (zD ? pD.Lc.STRING_TYPE_BYTES : pD.Lc.BYTES) ? gD(xD(2), xD(3)) : null,
              sD = zD && wD ? gD(xD(4), xD(5)) : null;
            if (!wD || zD && !sD) return this.crash(ND, `RawMessage at ${RD} of ${cD} bytes names bytes outside net-in`), ZD;
            this.netOffsets.push(RD), KD.push({
              type: "message",
              conn: xD(0),
              lg: DD,
              payloadKind: xD(1) >>> 16,
              payload: wD,
              stringType: sD ? eD.decode(sD) : null
            })
          } else if (CD === pD.U.CoreErrors) {
            var AD, UD;
            const DD = cD >= 4 ? xD(0) : -1;
            if (DD < 0 || DD > pD.E.PAIRS_MAX || cD !== 4 * (pD.E.FIXED_WORDS + pD.E.PAIR_WORDS * DD)) return this.crash(ND, `CoreErrors at ${RD} of ${cD} bytes`), ZD;
            const zD = [];
            for (let wD = 0; wD < DD; wD++) zD.push({
              code: xD(1 + 2 * wD),
              detail: xD(2 + 2 * wD)
            });
            null === (AD = (UD = this.handlers).onCoreErrors) || void 0 === AD || AD.call(UD, zD, xD(1 + 2 * DD))
          } else if (CD === pD.U.RenderReload) {
            var fD, ID;
            if (cD !== pD.Zc.BYTES) return this.crash(ND, `RenderReload at ${RD} of ${cD} bytes`), ZD;
            null === (fD = (ID = this.handlers).onRenderReload) || void 0 === fD || fD.call(ID, xD(0), xD(1), xD(2))
          } else if (CD === pD.U.JoinPreloadEnded) {
            var BD, GD;
            if (cD !== pD.vb.BYTES) return this.crash(ND, `JoinPreloadEnded at ${RD} of ${cD} bytes`), ZD;
            null === (BD = (GD = this.handlers).onJoinPreloadEnded) || void 0 === BD || BD.call(GD, {
              chunks: xD(pD.vb.CHUNKS),
              bytes: xD(pD.vb.BYTES_HELD),
              asked: xD(pD.vb.ASKED),
              replaced: xD(pD.vb.REPLACED),
              dropped: xD(pD.vb.DROPPED)
            })
          } else if (CD === pD.U.Images) {
            var hD, nD;
            null === (hD = (nD = this.handlers).onImages) || void 0 === hD || hD.call(nD, new Uint8Array(rD.slice(wD + DD, wD + DD + cD)))
          } else if (CD === pD.U.ModelRequests)
            for (let wD = 0; wD < cD >>> 2; wD++) {
              var MD, OD;
              null === (MD = (OD = this.handlers).onModelRequest) || void 0 === MD || MD.call(OD, xD(wD))
            } else if (CD === pD.U.ModelTaken) {
              var JD, ED;
              if (cD < 4) return this.crash(ND, `ModelTaken at ${RD} of ${cD} bytes`), ZD;
              const DD = new Uint32Array((cD >>> 2) - 1);
              for (let zD = 0; zD < DD.length; zD++) DD[zD] = xD(1 + zD);
              null === (JD = (ED = this.handlers).onModelTaken) || void 0 === JD || JD.call(ED, xD(0), DD)
            } else if (CD === pD.U.TerrainTexturesWanted) {
            var QD, XD;
            if (0 !== cD) return this.crash(ND, `TerrainTexturesWanted at ${RD} of ${cD} bytes`), ZD;
            null === (QD = (XD = this.handlers).onTerrainTexturesWanted) || void 0 === QD || QD.call(XD)
          } else if (CD === pD.U.KeepAliveDue) {
            var VD, PD;
            if (cD > pD.zb) return this.crash(ND, `KeepAliveDue at ${RD} of ${cD} bytes`), ZD;
            null === (VD = (PD = this.handlers).onKeepAlive) || void 0 === VD || VD.call(PD, new Uint8Array(rD, wD + DD, cD).slice())
          } else if (CD === pD.U.ConnectionState) {
            if (cD !== pD.u) return this.crash(ND, `ConnectionState at ${RD} of ${cD} bytes`), ZD;
            this.netOffsets.push(RD), KD.push({
              type: "connection",
              conn: xD(0),
              phase: xD(1),
              code: 0 | xD(2)
            })
          } else if (CD === pD.U.EnvLighting || CD === pD.U.SkyImages) {
            if (cD !== (CD === pD.U.EnvLighting ? pD.P : pD.vd)) return this.crash(ND, `event ${CD} at ${RD} of ${cD} bytes`), ZD;
            this.envEvents.push({
              kind: CD,
              payload: new Uint8Array(rD.slice(wD + DD, wD + DD + cD))
            })
          } else if (CD === pD.U.ReconnectGrace) {
            if (cD !== pD.wc) return this.crash(ND, `ReconnectGrace at ${RD} of ${cD} bytes`), ZD;
            const DD = xD(2);
            this.graceEvents.push({
              conn: xD(0),
              graceMs: xD(1),
              sessionBased: 0 !== (DD & pD.Oc.SessionBased),
              replayOffer: 0 !== (DD & pD.Oc.ReplayOffer)
            })
          }
          RD = DD + (0, pD.we)(cD)
        }
        return KD
      }
      takeSends(DD) {
        this.atSendsStop = !0;
        try {
          DD()
        } catch (zD) {
          this.crashOn(xD, zD)
        } finally {
          this.atSendsStop = !1
        }
        return !this.stopped
      }
      forEachNetOut(DD) {
        this.forEachOut(OD, "net-out", pD.fb.NetOutPtr, pD.fb.NetOutLen, pD.Zb, 0, ((zD, wD, sD, KD) => {
          const rD = (0, pD.pe)(wD);
          rD === pD.ac.Frame ? DD((0, pD.ne)(wD), sD) : this.crash(OD, `net-out record at ${KD} is kind ${rD}, not a frame`)
        }))
      }
      forEachWorkerOut(DD) {
        this.forEachOut(JD, "worker-out", pD.fb.WorkerOutPtr, pD.fb.WorkerOutLen, pD.Nd, 4, ((zD, wD, sD, KD) => {
          const rD = 255 & zD,
            LD = rD === pD.Zd.Init ? this.initOf(sD, KD) : sD;
          null !== LD && DD(rD, zD >>> 8 & 16777215, LD)
        }))
      }
      initOf(DD, zD) {
        const wD = this.memory().buffer;
        if (DD.byteLength !== pD.gb) return this.crash(JD, `worker-out Init record at ${zD} is ${DD.byteLength} bytes, not a view`), null;
        const sD = new DataView(DD.buffer, DD.byteOffset, pD.gb),
          KD = sD.getUint32(0, !0),
          rD = sD.getUint32(4, !0);
        return KD + rD > wD.byteLength ? (this.crash(JD, `worker-out Init record at ${zD} names ${rD} bytes at ${KD} outside ${wD.byteLength} bytes of memory`), null) : new Uint8Array(wD, KD, rD)
      }
      forEachOut(DD, zD, wD, sD, KD, rD, LD) {
        if (!this.headerReadable()) return;
        const cD = this.headerView(),
          gD = cD[wD],
          RD = cD[sD];
        if (0 === RD) return;
        const AD = this.memory().buffer;
        if (gD % 4 !== 0 || gD + RD > AD.byteLength) return void this.crash(DD, `${zD} of ${RD} bytes at ${gD} outside ${AD.byteLength} bytes of memory`);
        const UD = new DataView(AD, gD, RD);
        let fD = 0;
        for (; fD < RD;) {
          const wD = fD + KD,
            sD = wD <= RD ? UD.getUint32(fD + rD, !0) : -1;
          if (sD < 0 || sD > RD - wD) return void this.crash(DD, `${zD} record at ${fD} overruns its ${RD} bytes`);
          if (LD(UD.getUint32(fD, !0), UD.getUint32(fD + 4, !0), new Uint8Array(AD, gD + wD, sD), fD), this.stopped) return;
          fD = wD + (0, pD.we)(sD)
        }
      }
      forEachEvent(DD) {
        if (this.stopped || null === this.lastHeader) return;
        const zD = this.headerView(),
          wD = zD[pD.fb.EventsPtr],
          sD = zD[pD.fb.EventsLen];
        if (0 === sD) return;
        const KD = this.memory().buffer;
        if (wD % 4 !== 0 || wD + sD > KD.byteLength) return void this.crash(ND, `events of ${sD} bytes at ${wD} outside ${KD.byteLength} bytes of memory`);
        const rD = new DataView(KD, wD, sD);
        let LD = 0;
        for (; LD < sD;) {
          const zD = LD + pD.Q,
            wD = zD <= sD ? rD.getUint32(LD, !0) : -1,
            KD = wD >>> 16;
          if (wD < 0 || KD > sD - zD) return void this.crash(ND, `event record at ${LD} overruns its ${sD} bytes`);
          DD(65535 & wD, rD, zD, KD), LD = zD + (0, pD.we)(KD)
        }
      }
      crashOn(DD, zD) {
        zD instanceof sD.b ? this.crash(ND, zD.message) : this.crash(DD, zD)
      }
      crash(DD, zD) {
        this.stopped || (this.stopped = !0, this.handlers.onCrash({
          site: DD,
          error: zD,
          header: this.lastHeader
        }))
      }
      headerWord(DD) {
        return this.headerReadable() ? this.headerView()[DD] : 0
      }
      headerReadable() {
        return !this.stopped && (null !== this.lastHeader || this.atSendsStop)
      }
      readLoadCounts(DD) {
        const zD = this.loadCountWords();
        return null !== zD && (DD.chunksReceived = zD[pD.Nb.ChunksReceived], DD.chunksCancelled = this.headerView()[pD.fb.ChunksCancelled], DD.chunksStored = zD[pD.Nb.ChunksStored], DD.jobsSent = zD[pD.Nb.JobsSent], DD.jobsDone = zD[pD.Nb.JobsDone], DD.jobsInFlight = zD[pD.Nb.JobsInFlight], DD.workersLive = zD[pD.Nb.WorkersLive], DD.workersRetired = zD[pD.Nb.WorkersRetired], !0)
      }
      readViewQueuedPrograms() {
        var DD, zD;
        const wD = null !== (DD = null === (zD = this.loadCountWords()) || void 0 === zD ? void 0 : zD[pD.Nb.ViewQueuedPrograms]) && void 0 !== DD ? DD : 0;
        return 0 === wD ? null : wD - 1
      }
      loadCountWords() {
        if (this.stopped || null === this.lastHeader) return null;
        const DD = this.core.dG();
        if (0 === DD) return null;
        const zD = this.memory().buffer;
        return zD !== this.loadCountsBuffer && (this.loadCountsBuffer = zD, this.loadCounts = new Uint32Array(zD, DD, pD.Db)), this.loadCounts
      }
      headerView() {
        const DD = this.memory().buffer;
        return DD !== this.headerBuffer && (this.headerBuffer = DD, this.header = new Uint32Array(DD, this.core.Ef(), pD.eb)), this.header
      }
    }
  },
  40700: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => rD,
      e: () => KD
    });
    var pD = wD(4722);
    let sD = null;

    function KD(DD) {
      sD = {
        scanned: !1
      };
      try {
        return DD()
      } finally {
        sD = null
      }
    }

    function rD() {
      const DD = sD;
      if (null === DD) return (0, pD.e)();
      const zD = (0, pD.e)(!DD.scanned);
      return DD.scanned = !0, zD
    }
  },
  40748: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => pD
    });
    const pD = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  40769: (DD, zD, wD) => {
    function pD() {
      return wD(40775)
    }

    function sD() {
      return wD(40778)
    }

    function KD(DD) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(DD)
    }
    wD.d(zD, {
      d: () => KD,
      f: () => pD,
      i: () => sD
    })
  },
  36254: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => LD,
      h: () => gD,
      j: () => rD,
      m: () => AD
    });
    var pD = wD(36244),
      sD = wD(9);
    const KD = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function rD(DD) {
      if (DD instanceof WebAssembly.RuntimeError) return !0;
      const zD = DD instanceof Error ? DD.stack : void 0;
      return "string" === typeof zD && KD.test(zD)
    }

    function LD(DD, zD, wD) {
      var sD;
      const rD = DD instanceof Error ? DD.name : "thrown",
        LD = (DD instanceof Error && null !== (sD = DD.stack) && void 0 !== sD ? sD : "").split("\n").filter((DD => KD.test(DD))).slice(0, 8).map((DD => DD.trim())),
        cD = null === zD ? "wasm memory unknown" : `wasm memory ${Math.round(zD/2**20)} MB`,
        gD = null === wD.panic ? "" : `, panic: ${(0,pD.k)(wD.panic)}`,
        RD = `${rD}: ${DD instanceof Error?DD.message:String(DD)}`;
      return `${(0,pD.n)(wD.kind,wD.refusedBytes)} ${RD} (${cD})${gD}${LD.length>0?` | ${LD.join(" < ")}`:""}`
    }
    const cD = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function gD(DD) {
      var zD;
      let wD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(DD instanceof Error) || !cD.test(DD.message)) return {};
      if (!("detached" in wD)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, sD.W)(null === (zD = (0, sD.O)(wD, "detached")) || void 0 === zD ? void 0 : zD.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const RD = 500;

    function AD(DD) {
      let zD = "[object Object]";
      try {
        zD = String(DD)
      } catch {}
      if ("[object Object]" !== zD) return zD;
      try {
        var wD, pD;
        return null !== (wD = null === (pD = JSON.stringify(DD)) || void 0 === pD ? void 0 : pD.slice(0, RD)) && void 0 !== wD ? wD : zD
      } catch {
        return zD
      }
    }
  },
  40775: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  40778: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  },
  36244: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => pD,
      h: () => KD,
      k: () => cD,
      l: () => rD,
      n: () => sD
    });
    const pD = /^alloc_failed (\d+) bytes$/;

    function sD(DD, zD) {
      return KD(DD, zD) ? `trap=alloc_failed ${zD} bytes` : `trap=${DD}`
    }

    function KD(DD, zD) {
      return "unreachable" === DD && zD > 0
    }

    function rD(DD, zD, wD) {
      const pD = function(DD) {
        return DD instanceof WebAssembly.RuntimeError ? /unreachable/i.test(DD.message) ? "unreachable" : /out of bounds/i.test(DD.message) ? "out_of_bounds" : "runtime_error" : (DD instanceof RangeError || DD instanceof Error && "InternalError" === DD.name) && /call stack|recursion/i.test(DD.message) ? "stack_overflow" : "js_error"
      }(DD);
      if ("unreachable" !== pD) return {
        kind: pD,
        panic: null,
        refusedBytes: 0
      };
      const sD = zD(),
        KD = wD();
      return {
        kind: pD,
        panic: KD > 0 ? null : sD,
        refusedBytes: KD
      }
    }
    const LD = 300;

    function cD(DD) {
      return DD.replace(/\s*\n\s*/g, " / ").slice(0, LD)
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);