export const id = 232;
export const ids = [232];
export const modules = {
  41906: (MM, rM, iM) => {
    function OM(MM, rM, iM) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(MM, rM).getContext("2d", iM);
      const OM = document.createElement("canvas");
      return OM.width = MM, OM.height = rM, OM.getContext("2d", iM)
    }

    function SM(MM, rM) {
      return MM.getContext("2d", rM)
    }
    iM.d(rM, {
      b: () => SM,
      d: () => OM
    })
  },
  41871: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => PM
    });
    const OM = 1 << 20,
      SM = 1 << 21,
      jM = 1024,
      aM = 2048;

    function PM(MM, rM, iM) {
      const PM = MM + OM,
        nM = rM + jM,
        QM = iM + OM;
      return PM < 0 || PM >= SM || QM < 0 || QM >= SM || nM < 0 || nM >= aM ? -1 : (PM * SM + QM) * aM + nM
    }
  },
  41862: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => OM,
      d: () => aM,
      e: () => SM,
      i: () => jM,
      j: () => zM,
      n: () => QM,
      p: () => nM,
      s: () => PM
    });
    iM(3860);
    iM(41871);

    function OM(MM) {}

    function SM(MM) {}

    function jM(MM) {}

    function aM(MM) {}

    function PM(MM) {}

    function nM(MM, rM, iM) {}

    function QM(MM) {}

    function zM(MM) {}
  },
  41858: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => EM,
      h: () => hM,
      i: () => BM,
      l: () => gM,
      p: () => pM,
      t: () => WM,
      x: () => lM,
      B: () => dM,
      D: () => yM,
      F: () => tM,
      H: () => AM,
      I: () => CM,
      L: () => oM,
      O: () => FM,
      P: () => sM,
      S: () => kM
    });
    var OM = iM(5198),
      SM = iM(41714),
      jM = (iM(41862), iM(10));
    class aM {
      constructor(MM, rM) {
        this.memory = MM, this.access = rM, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.vL = 0, this.u32 = new jM.j(0), this.f32 = new jM.f(0), this.u8 = new jM.b(0), this.dataView = new jM.g(new ArrayBuffer(0)), this.refresh()
      }
      refresh() {
        this.ptr = this.access.ptr(), this.vL = this.access.vL(), this.buffer = (0, jM.H)(this.memory()), this.u32 = new jM.j(this.buffer, this.ptr, this.vL >>> 2), this.f32 = new jM.f(this.buffer, this.ptr, this.vL >>> 2), this.u8 = new jM.b(this.buffer, this.ptr, this.vL), this.dataView = new jM.g(this.buffer, this.ptr, this.vL)
      }
      ensureViews() {
        (0, jM.H)(this.memory()) !== this.buffer && this.refresh()
      }
      get view() {
        return this.ensureViews(), this.dataView
      }
      room(MM) {
        return !!this.fits(MM) || (this.dropped++, !1)
      }
      fits(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.cursor;
        this.ensureViews();
        const iM = rM + MM;
        return iM <= this.vL || iM <= OM.Gc && 0 !== this.access.reserve(iM) && (this.refresh(), iM <= this.vL)
      }
      consume(MM) {
        const rM = this.cursor - MM;
        rM > 0 && MM > 0 && (this.ensureViews(), this.u8.copyWithin(0, MM, this.cursor)), this.cursor = rM > 0 ? rM : 0
      }
      writeRecord(MM, rM, iM, SM, jM) {
        if (!this.room(OM.sb)) return !1;
        const aM = this.cursor >>> 2;
        return this.u32[aM] = 65535 & MM | (65535 & rM) << 16, this.f32[aM + 1] = iM, this.f32[aM + 2] = SM, this.u32[aM + 3] = jM >>> 0, this.cursor += OM.sb, !0
      }
      writeOptions(MM, rM) {
        const iM = rM.byteLength,
          SM = OM.sb + (0, OM.oe)(iM);
        if (!this.fits(SM)) return !1;
        const jM = this.cursor,
          aM = jM >>> 2;
        this.u32[aM] = OM.tb.Options, this.u32[aM + 1] = iM, this.u32[aM + 2] = 0, this.u32[aM + 3] = MM >>> 0;
        const PM = jM + OM.sb;
        return this.u8.set(rM, PM), this.u8.fill(0, PM + iM, jM + SM), this.cursor += SM, !0
      }
      writeWorkerRecord(MM, rM, iM, SM, jM, aM) {
        const PM = aM.byteLength,
          nM = OM.Kd + (0, OM.oe)(PM);
        if (PM > OM.Hd) return this.dropped++, !1;
        if (!this.room(nM)) return !1;
        const QM = this.cursor,
          zM = QM >>> 2;
        this.u32[zM] = MM >>> 0, this.u32[zM + 1] = 65535 & rM | (65535 & iM) << 16, this.u32[zM + 2] = SM >>> 0, this.u32[zM + 3] = jM >>> 0, this.u32[zM + 4] = PM;
        const LM = QM + OM.Kd;
        return this.u8.set(aM, LM), this.u8.fill(0, LM + PM, QM + nM), this.cursor += nM, !0
      }
      written() {
        return this.ensureViews(), this.u8.subarray(0, this.cursor)
      }
      writeFrame(MM, rM) {
        return this.writeNet(OM.Wb.Frame, MM, rM)
      }
      writeOpen(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(OM.Wb.Open, MM, nM(rM))
      }
      writeClose(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(OM.Wb.Close, MM, nM(rM))
      }
      writeNet(MM, rM, iM) {
        const SM = iM.byteLength,
          jM = OM.Ub + (0, OM.oe)(SM);
        if (SM > OM.Sb) return this.dropped++, !1;
        if (!this.room(jM)) return !1;
        const aM = this.cursor;
        this.u32[aM >>> 2] = SM, this.u32[1 + (aM >>> 2)] = (0, OM.ke)(MM, rM);
        const PM = aM + OM.Ub;
        return this.u8.set(iM, PM), this.u8.fill(0, PM + SM, aM + jM), this.cursor += jM, !0
      }
      JL(MM, rM, iM) {
        const SM = OM.s + (0, OM.oe)(iM);
        if (!this.room(SM)) return -1;
        const jM = this.cursor;
        this.u32[jM >>> 2] = 65535 & MM | (65535 & rM) << 16, this.u32[1 + (jM >>> 2)] = iM;
        const aM = jM + OM.s;
        return this.u8.fill(0, aM, jM + SM), this.cursor += SM, aM
      }
      growForCmd(MM) {
        return this.fits(OM.s + (0, OM.oe)(MM), 0)
      }
      writeCmd(MM, rM, iM) {
        const OM = this.JL(MM, rM, iM.byteLength);
        return !(OM < 0) && (this.u8.set(iM, OM), !0)
      }
      copyWritten(MM, rM) {
        return this.ensureViews(), this.u8.slice(MM, MM + rM)
      }
    }
    const PM = new jM.b(0);

    function nM(MM) {
      if (0 === MM) return PM;
      const rM = new jM.b(OM.Tb);
      for (let iM = 0; iM < OM.Tb; iM++) rM[iM] = MM >>> 8 * iM & 255;
      return rM
    }
    class QM {
      constructor(MM, rM) {
        this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new aM(rM, {
          ptr: () => MM.Om(),
          vL: () => MM.FjM(),
          reserve: rM => MM.iaM(rM)
        }), this.net = new aM(rM, {
          ptr: () => MM.cjM(),
          vL: () => MM.VjM(),
          reserve: rM => MM.OaM(rM)
        }), this.worker = new aM(rM, {
          ptr: () => MM.baM(),
          vL: () => MM.eaM(),
          reserve: rM => MM.SaM(rM)
        }), this.cmd = new aM(rM, {
          ptr: () => MM.kjM(),
          vL: () => MM.sjM(),
          reserve: rM => MM.DjM(rM)
        })
      }
      reset(MM, rM, iM) {
        this.input.consume(MM), this.worker.consume(rM), this.cmd.consume(iM)
      }
    }
    var zM = iM(37229),
      LM = iM(2622),
      mM = iM(5196),
      HM = iM(41876);
    const hM = "coreFrame",
      JM = "fatalStatus",
      dM = "otherCall",
      yM = "coreRings",
      lM = "netIn",
      EM = "abi",
      UM = "netOut",
      GM = "workerOut",
      CM = "worldgenHost",
      eM = "eventWalker",
      bM = "netEvent",
      wM = "envEvent",
      tM = "sharedTables",
      gM = "inputAction",
      uM = "frameSends",
      RM = new Set([eM, bM, wM, uM, gM, tM]),
      pM = "wasmMemory",
      WM = "meshHost";

    function sM(MM, rM) {
      MM.forEachWorkerOut(((iM, SM, jM) => {
        if ((0, OM.de)(iM)) try {
          var aM;
          null === (aM = rM.worldgen) || void 0 === aM || aM.take(iM, jM)
        } catch (nM) {
          MM.crash(CM, nM)
        } else try {
          var PM;
          null === (PM = rM.mesh) || void 0 === PM || PM.take(iM, SM, jM)
        } catch (nM) {
          MM.crash(WM, nM)
        }
      }))
    }
    const DM = 1048576;

    function kM(MM, rM) {
      let iM = !1;
      const OM = () => {
        iM = !1, rM()
      };
      return () => {
        !iM && MM.cursor >= DM && (iM = !0, queueMicrotask(OM))
      }
    }
    const ZM = new Set([JM, dM, CM, WM]);

    function oM(MM) {
      return RM.has(MM.site) ? MM.error instanceof WebAssembly.RuntimeError || (0, SM.i)(MM.error) : !ZM.has(MM.site) && MM.error instanceof Error
    }
    const fM = "events",
      YM = [],
      NM = "debugLog",
      AM = "terrainTextures",
      xM = "sunShadowTextures",
      vM = new TextDecoder;

    function FM(MM, rM) {
      const {
        site: iM,
        error: SM,
        header: jM
      } = MM, aM = jM ? (0, OM.Yd)(jM.lastError) : "noFrame", PM = `CORE-${iM===JM?aM:iM}`, nM = null === SM || void 0 === SM ? "" : ` ${(0,zM.k)(SM)}`, QM = {
        site: iM,
        wasmBuild: rM.wasm,
        clientVersion: rM.client
      };
      return jM && (QM.status = String(jM.status), QM.lastError = aM, QM.lastErrorCode = String(jM.lastError), QM.lastErrorDetail = String(jM.lastErrorDetail), QM.errorCount = String(jM.errorCount), QM.frameIndex = String(jM.frameIndex), QM.tickIndex = String(jM.tickIndex)), {
        code: PM,
        message: `core ${iM}, last error ${aM};${nM}`,
        details: QM
      }
    }
    class BM {
      constructor(MM, rM, iM) {
        this.core = MM, this.memory = rM, this.handlers = iM, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.loadCountsBuffer = null, this.loadCounts = new Uint32Array(0), this.unsentUiPrefs = null, this.eventWalker = null, this.netOffsets = [], this.frameEvents = {
          ptr: 0,
          len: 0,
          net: YM,
          netOffsets: this.netOffsets,
          kind: "none"
        }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.atSendsStop = !1, this.rings = new QM(MM, rM)
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
      framePaces(MM) {
        if (this.stopped || this.drawsHeld) return !1;
        try {
          return this.core.AjM(MM)
        } catch (rM) {
          return this.crash(hM, rM), !1
        }
      }
      get isStopped() {
        return this.stopped
      }
      frame(MM, rM) {
        var iM;
        let jM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.stopped) return !1;
        if (!this.writePendingInput()) return !1;
        const {
          input: aM,
          net: PM,
          worker: nM,
          cmd: QM
        } = this.rings, zM = PM.cursor, LM = rM && !this.drawsHeld;
        let dM = OM.L.Fatal;
        const yM = aM.cursor,
          EM = nM.cursor,
          UM = QM.cursor;
        let GM, CM = null;
        const wM = this.handlers.onSends;
        try {
          const rM = (LM ? OM.eb.Draws : 0) | (jM ? OM.eb.NetAll : 0) | (wM ? OM.eb.StopForSends : 0);
          dM = (0, HM.f)((() => {
            let iM = this.core.frame(MM, yM, PM.cursor, EM, rM, UM);
            for (; iM === OM.jd && wM;) {
              var SM;
              if (GM ??= null === (SM = this.gameHost) || void 0 === SM ? void 0 : SM.takeFault(), void 0 === GM && !this.takeSends(wM)) return OM.L.Fatal;
              iM = this.core.My()
            }
            return iM
          }))
        } catch (vM) {
          CM = {
            error: vM
          }
        }
        GM ??= null === (iM = this.gameHost) || void 0 === iM ? void 0 : iM.takeFault();
        const tM = this.stopped || null !== CM || void 0 !== GM;
        this.rings.reset(tM ? aM.cursor : yM, tM ? nM.cursor : EM, tM ? QM.cursor : UM);
        const gM = null === CM && void 0 === GM,
          uM = gM && !this.stopped && dM === OM.L.Fatal && 0 === this.core.RH(),
          RM = gM && !uM ? this.headerView() : null,
          pM = uM ? {
            ...null !== (WM = this.lastHeader) && void 0 !== WM ? WM : (0, OM.pe)(new Uint32Array(OM.lb)),
            status: OM.L.Fatal,
            lastError: OM.H.CoreBusy,
            lastErrorDetail: 0
          } : null === RM ? null : (0, OM.pe)(RM);
        var WM;
        null !== pM && (this.lastHeader = pM);
        const sM = null !== pM && dM !== OM.L.Fatal,
          DM = sM && null !== RM ? RM[OM.ob.NetInKept] : 0,
          kM = sM && DM <= zM && DM % 4 === 0 ? DM : null;
        var ZM, oM;
        null !== pM && null !== kM && dM === OM.L.Errors && (null === (ZM = (oM = this.handlers).onErrors) || void 0 === ZM || ZM.call(oM, pM));
        const fM = null === kM ? YM : this.readEvents(zM);
        if (PM.consume(zM - (null !== kM && void 0 !== kM ? kM : 0)), this.netKept = null !== kM && void 0 !== kM ? kM : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== CM) return this.crash(hM, void 0 === GM || GM instanceof SM.d ? CM.error : GM), !1;
        if (void 0 !== GM || null === pM) return this.crashOn(hM, GM), !1;
        if (uM) return this.crash(JM, null), !1;
        const NM = this.headerView()[OM.ob.FrameDraw];
        if (this.lastFrameKind = (0, mM.h)(LM, NM), dM === OM.L.Fatal) return this.crash(JM, null), !1;
        if (null === kM) return this.crash(lM, `the core kept ${DM} of ${zM} net-in bytes`), !1;
        if (this.eventWalker) {
          if (this.stopped) return !1;
          const MM = this.frameEvents,
            rM = this.headerView();
          MM.ptr = rM[OM.ob.EventsPtr], MM.len = rM[OM.ob.EventsLen], MM.net = fM, MM.kind = this.lastFrameKind;
          try {
            this.eventWalker(MM)
          } catch (vM) {
            return this.crashOn(eM, vM), !1
          }
          return this.handEnvEvents()
        }
        for (const OM of fM) {
          if (this.stopped) return !1;
          try {
            var AM, xM;
            null === (AM = (xM = this.handlers).onNetEvent) || void 0 === AM || AM.call(xM, OM)
          } catch (vM) {
            return this.crashOn(bM, vM), !1
          }
        }
        return this.handEnvEvents()
      }
      handEnvEvents() {
        for (const jM of this.graceEvents) {
          if (this.stopped) return !1;
          try {
            var MM, rM;
            null === (MM = (rM = this.handlers).onReconnectGrace) || void 0 === MM || MM.call(rM, jM)
          } catch (SM) {
            return this.crashOn(bM, SM), !1
          }
        }
        for (const jM of this.envEvents) {
          if (this.stopped) return !1;
          try {
            var iM, OM;
            null === (iM = (OM = this.handlers).onEnvEvent) || void 0 === iM || iM.call(OM, jM)
          } catch (SM) {
            return this.crashOn(wM, SM), !1
          }
        }
        return !this.stopped
      }
      setEventWalker(MM) {
        this.eventWalker = MM
      }
      writePendingInput() {
        if (this.stopped) return !1;
        const {
          input: MM
        } = this.rings;
        try {
          const rM = this.unsentUiPrefs;
          rM && MM.writeRecord(OM.tb.UiPrefs, 0, rM.nametagCutDistance, 0, (0, OM.se)(rM)) && (this.unsentUiPrefs = null);
          const iM = this.unsentEnvPrefs;
          iM && MM.writeRecord(OM.tb.EnvPrefs, (0, OM.ae)(iM), iM.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
          const SM = this.unsentLookPrefs;
          SM && MM.writeRecord(OM.tb.Sensitivity, 0, SM.mouse, SM.touch, (0, LM.l)(SM.fovPercent)) && (this.unsentLookPrefs = null);
          let jM = 0;
          for (const {
              aux: OM,
              payload: aM
            }
            of this.unsentOptions) {
            if (!MM.writeOptions(OM, aM)) {
              if (MM.cursor > 0) break;
              this.optionsDropped++
            }
            jM++
          }
          jM > 0 && this.unsentOptions.splice(0, jM)
        } catch (rM) {
          return this.crash(yM, rM), !1
        }
        return !0
      }
      setHoldDraws(MM) {
        this.drawsHeld = MM
      }
      setUiPrefs(MM) {
        this.unsentUiPrefs = {
          ...MM
        }
      }
      setEnvPrefs(MM) {
        this.unsentEnvPrefs = {
          ...MM
        }
      }
      setLookPrefs(MM) {
        this.unsentLookPrefs = {
          ...MM
        }
      }
      queueOptions(MM, rM) {
        return !this.isStopped && (rM.byteLength > OM.$b.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
          aux: MM,
          payload: rM
        }), !0))
      }
      setChunkCap(MM) {
        return this.callCore("setChunkCap", null, (rM => rM.zaM(MM)))
      }
      shedMemory(MM) {
        const rM = this.callCore("shedMemory", null, (rM => rM.yaM(MM)));
        return 0 === rM ? null : rM
      }
      addDistanceInUse() {
        const MM = this.callCore("addDistanceInUse", null, (MM => MM.gjM()));
        return 0 === MM ? null : MM
      }
      setChunkAddDistance(MM, rM) {
        return this.callCore("setChunkAddDistance", !1, (iM => iM.QaM(MM, rM)))
      }
      setGameHost(MM) {
        return this.callCore("setGameHost", !1, (rM => (rM.NjM(MM), this.gameHost = MM, !0)))
      }
      setAntiCheatProbes(MM) {
        return this.callCore("setAntiCheatProbes", !1, (rM => rM.PaM(MM)))
      }
      setAmbientOcclusion(MM) {
        this.callCore("setAmbientOcclusion", void 0, (rM => {
          rM.aaM(MM)
        }))
      }
      setPoseLod(MM) {
        this.callCore("setPoseLod", void 0, (rM => {
          rM.maM(MM)
        }))
      }
      setDebugLog(MM, rM) {
        this.callCore(NM, void 0, (iM => {
          iM.Id(MM, rM)
        }))
      }
      takeDebugLog(MM) {
        return this.callCore(NM, [], (rM => rM.Kd(MM)))
      }
      setTextureLayers(MM) {
        return this.callCore("setTextureLayers", !1, (rM => rM.daM(MM)))
      }
      setBlockColours(MM) {
        let {
          blocks: rM,
          counts: iM,
          values: OM
        } = MM;
        return this.callCore("setBlockColours", !1, (MM => MM.jOM(rM, iM, OM)))
      }
      terrainTextureNames() {
        return this.callCore(AM, [], (MM => MM.CaM()))
      }
      setTerrainTextures(MM, rM, iM, OM) {
        return this.callCore(AM, !1, (SM => SM.JaM(MM, iM, rM, OM)))
      }
      setShaderPack(MM, rM, iM, OM, SM, jM) {
        return this.callCore("setShaderPack", !1, (aM => {
          var PM, nM;
          return null !== (PM = null === (nM = aM.dOM) || void 0 === nM ? void 0 : nM.call(aM, MM, rM, iM, OM, SM, jM)) && void 0 !== PM && PM
        }))
      }
      sunShadowWantedTextures() {
        return this.callCore(xM, null, (MM => {
          var rM, iM;
          return null !== (rM = null === (iM = MM.laM) || void 0 === iM ? void 0 : iM.call(MM)) && void 0 !== rM ? rM : null
        }))
      }
      setSunShadowTexture(MM, rM, iM, OM, SM) {
        this.callCore(xM, void 0, (jM => {
          var aM;
          null === (aM = jM.haM) || void 0 === aM || aM.call(jM, MM, rM, iM, OM, SM)
        }))
      }
      takeSunShadowWarnings() {
        return this.callCore(xM, [], (MM => {
          var rM, iM;
          return null !== (rM = null === (iM = MM.UaM) || void 0 === iM ? void 0 : iM.call(MM)) && void 0 !== rM ? rM : []
        }))
      }
      sunShadowsHeld() {
        return this.callCore(xM, null, (MM => {
          var rM, iM;
          return null !== (rM = null === (iM = MM.EaM) || void 0 === iM ? void 0 : iM.call(MM)) && void 0 !== rM ? rM : null
        }))
      }
      callCore(MM, rM, iM) {
        if (this.stopped) return rM;
        try {
          return iM(this.core)
        } catch (OM) {
          return this.crash(MM, OM), rM
        }
      }
      readEvents(MM) {
        this.netOffsets.length = 0;
        const rM = this.headerView(),
          iM = rM[OM.ob.EventsPtr],
          SM = rM[OM.ob.EventsLen];
        if (this.envEvents.length = 0, this.graceEvents.length = 0, 0 === SM) return YM;
        const jM = [],
          aM = this.memory().buffer;
        if (iM % 4 !== 0 || iM + SM > aM.byteLength) return this.crash(fM, `events of ${SM} bytes at ${iM} outside ${aM.byteLength} bytes of memory`), YM;
        const PM = new DataView(aM, iM, SM),
          nM = this.rings.net,
          QM = (rM, iM) => rM + iM <= MM ? nM.copyWritten(rM, iM) : null;
        let zM = 0;
        for (; zM < SM;) {
          const MM = zM + OM.U,
            rM = MM <= SM ? PM.getUint32(zM, !0) : -1,
            nM = rM >>> 16;
          if (rM < 0 || nM > SM - MM) return this.crash(fM, `event record at ${zM} overruns its ${SM} bytes`), YM;
          const gM = 65535 & rM,
            uM = rM => PM.getUint32(MM + 4 * rM, !0);
          if (gM === OM.Y.RawMessage) {
            const MM = nM >= OM.Hc.BYTES ? 65535 & uM(1) : -1,
              rM = MM === OM.Hc.STRING_TYPE,
              iM = nM === (rM ? OM.Hc.STRING_TYPE_BYTES : OM.Hc.BYTES) ? QM(uM(2), uM(3)) : null,
              SM = rM && iM ? QM(uM(4), uM(5)) : null;
            if (!iM || rM && !SM) return this.crash(fM, `RawMessage at ${zM} of ${nM} bytes names bytes outside net-in`), YM;
            this.netOffsets.push(zM), jM.push({
              type: "message",
              conn: uM(0),
              Kz: MM,
              payloadKind: uM(1) >>> 16,
              payload: iM,
              stringType: SM ? vM.decode(SM) : null
            })
          } else if (gM === OM.Y.CoreErrors) {
            var LM, mM;
            const MM = nM >= 4 ? uM(0) : -1;
            if (MM < 0 || MM > OM.G.PAIRS_MAX || nM !== 4 * (OM.G.FIXED_WORDS + OM.G.PAIR_WORDS * MM)) return this.crash(fM, `CoreErrors at ${zM} of ${nM} bytes`), YM;
            const rM = [];
            for (let iM = 0; iM < MM; iM++) rM.push({
              code: uM(1 + 2 * iM),
              detail: uM(2 + 2 * iM)
            });
            null === (LM = (mM = this.handlers).onCoreErrors) || void 0 === LM || LM.call(mM, rM, uM(1 + 2 * MM))
          } else if (gM === OM.Y.RenderReload) {
            var HM, hM;
            if (nM !== OM.Tc.BYTES) return this.crash(fM, `RenderReload at ${zM} of ${nM} bytes`), YM;
            null === (HM = (hM = this.handlers).onRenderReload) || void 0 === HM || HM.call(hM, uM(0), uM(1), uM(2))
          } else if (gM === OM.Y.JoinPreloadEnded) {
            var JM, dM;
            if (nM !== OM.yb.BYTES) return this.crash(fM, `JoinPreloadEnded at ${zM} of ${nM} bytes`), YM;
            null === (JM = (dM = this.handlers).onJoinPreloadEnded) || void 0 === JM || JM.call(dM, {
              chunks: uM(OM.yb.CHUNKS),
              bytes: uM(OM.yb.BYTES_HELD),
              asked: uM(OM.yb.ASKED),
              replaced: uM(OM.yb.REPLACED),
              dropped: uM(OM.yb.DROPPED)
            })
          } else if (gM === OM.Y.Images) {
            var yM, lM;
            null === (yM = (lM = this.handlers).onImages) || void 0 === yM || yM.call(lM, new Uint8Array(aM.slice(iM + MM, iM + MM + nM)))
          } else if (gM === OM.Y.ModelRequests)
            for (let iM = 0; iM < nM >>> 2; iM++) {
              var EM, UM;
              null === (EM = (UM = this.handlers).onModelRequest) || void 0 === EM || EM.call(UM, uM(iM))
            } else if (gM === OM.Y.ModelTaken) {
              var GM, CM;
              if (nM < 4) return this.crash(fM, `ModelTaken at ${zM} of ${nM} bytes`), YM;
              const MM = new Uint32Array((nM >>> 2) - 1);
              for (let rM = 0; rM < MM.length; rM++) MM[rM] = uM(1 + rM);
              null === (GM = (CM = this.handlers).onModelTaken) || void 0 === GM || GM.call(CM, uM(0), MM)
            } else if (gM === OM.Y.TerrainTexturesWanted) {
            var eM, bM;
            if (0 !== nM) return this.crash(fM, `TerrainTexturesWanted at ${zM} of ${nM} bytes`), YM;
            null === (eM = (bM = this.handlers).onTerrainTexturesWanted) || void 0 === eM || eM.call(bM)
          } else if (gM === OM.Y.KeepAliveDue) {
            var wM, tM;
            if (nM > OM.Bb) return this.crash(fM, `KeepAliveDue at ${zM} of ${nM} bytes`), YM;
            null === (wM = (tM = this.handlers).onKeepAlive) || void 0 === wM || wM.call(tM, new Uint8Array(aM, iM + MM, nM).slice())
          } else if (gM === OM.Y.ConnectionState) {
            if (nM !== OM.w) return this.crash(fM, `ConnectionState at ${zM} of ${nM} bytes`), YM;
            this.netOffsets.push(zM), jM.push({
              type: "connection",
              conn: uM(0),
              phase: uM(1),
              code: 0 | uM(2)
            })
          } else if (gM === OM.Y.EnvLighting || gM === OM.Y.SkyImages) {
            if (nM !== (gM === OM.Y.EnvLighting ? OM.Q : OM.nd)) return this.crash(fM, `event ${gM} at ${zM} of ${nM} bytes`), YM;
            this.envEvents.push({
              kind: gM,
              payload: new Uint8Array(aM.slice(iM + MM, iM + MM + nM))
            })
          } else if (gM === OM.Y.ReconnectGrace) {
            if (nM !== OM.rc) return this.crash(fM, `ReconnectGrace at ${zM} of ${nM} bytes`), YM;
            const MM = uM(2);
            this.graceEvents.push({
              conn: uM(0),
              graceMs: uM(1),
              sessionBased: 0 !== (MM & OM.Lc.SessionBased),
              replayOffer: 0 !== (MM & OM.Lc.ReplayOffer)
            })
          }
          zM = MM + (0, OM.oe)(nM)
        }
        return jM
      }
      takeSends(MM) {
        this.atSendsStop = !0;
        try {
          MM()
        } catch (rM) {
          this.crashOn(uM, rM)
        } finally {
          this.atSendsStop = !1
        }
        return !this.stopped
      }
      forEachNetOut(MM) {
        this.forEachOut(UM, "net-out", OM.ob.NetOutPtr, OM.ob.NetOutLen, OM.Ub, 0, ((rM, iM, SM, jM) => {
          const aM = (0, OM.ie)(iM);
          aM === OM.Wb.Frame ? MM((0, OM.he)(iM), SM) : this.crash(UM, `net-out record at ${jM} is kind ${aM}, not a frame`)
        }))
      }
      forEachWorkerOut(MM) {
        this.forEachOut(GM, "worker-out", OM.ob.WorkerOutPtr, OM.ob.WorkerOutLen, OM.Dd, 4, ((rM, iM, SM, jM) => {
          const aM = 255 & rM,
            PM = aM === OM.Sd.Init ? this.initOf(SM, jM) : SM;
          null !== PM && MM(aM, rM >>> 8 & 16777215, PM)
        }))
      }
      initOf(MM, rM) {
        const iM = this.memory().buffer;
        if (MM.byteLength !== OM.pb) return this.crash(GM, `worker-out Init record at ${rM} is ${MM.byteLength} bytes, not a view`), null;
        const SM = new DataView(MM.buffer, MM.byteOffset, OM.pb),
          jM = SM.getUint32(0, !0),
          aM = SM.getUint32(4, !0);
        return jM + aM > iM.byteLength ? (this.crash(GM, `worker-out Init record at ${rM} names ${aM} bytes at ${jM} outside ${iM.byteLength} bytes of memory`), null) : new Uint8Array(iM, jM, aM)
      }
      forEachOut(MM, rM, iM, SM, jM, aM, PM) {
        if (!this.headerReadable()) return;
        const nM = this.headerView(),
          QM = nM[iM],
          zM = nM[SM];
        if (0 === zM) return;
        const LM = this.memory().buffer;
        if (QM % 4 !== 0 || QM + zM > LM.byteLength) return void this.crash(MM, `${rM} of ${zM} bytes at ${QM} outside ${LM.byteLength} bytes of memory`);
        const mM = new DataView(LM, QM, zM);
        let HM = 0;
        for (; HM < zM;) {
          const iM = HM + jM,
            SM = iM <= zM ? mM.getUint32(HM + aM, !0) : -1;
          if (SM < 0 || SM > zM - iM) return void this.crash(MM, `${rM} record at ${HM} overruns its ${zM} bytes`);
          if (PM(mM.getUint32(HM, !0), mM.getUint32(HM + 4, !0), new Uint8Array(LM, QM + iM, SM), HM), this.stopped) return;
          HM = iM + (0, OM.oe)(SM)
        }
      }
      forEachEvent(MM) {
        if (this.stopped || null === this.lastHeader) return;
        const rM = this.headerView(),
          iM = rM[OM.ob.EventsPtr],
          SM = rM[OM.ob.EventsLen];
        if (0 === SM) return;
        const jM = this.memory().buffer;
        if (iM % 4 !== 0 || iM + SM > jM.byteLength) return void this.crash(fM, `events of ${SM} bytes at ${iM} outside ${jM.byteLength} bytes of memory`);
        const aM = new DataView(jM, iM, SM);
        let PM = 0;
        for (; PM < SM;) {
          const rM = PM + OM.U,
            iM = rM <= SM ? aM.getUint32(PM, !0) : -1,
            jM = iM >>> 16;
          if (iM < 0 || jM > SM - rM) return void this.crash(fM, `event record at ${PM} overruns its ${SM} bytes`);
          MM(65535 & iM, aM, rM, jM), PM = rM + (0, OM.oe)(jM)
        }
      }
      crashOn(MM, rM) {
        rM instanceof SM.d ? this.crash(fM, rM.message) : this.crash(MM, rM)
      }
      crash(MM, rM) {
        this.stopped || (this.stopped = !0, this.handlers.onCrash({
          site: MM,
          error: rM,
          header: this.lastHeader
        }))
      }
      headerWord(MM) {
        return this.headerReadable() ? this.headerView()[MM] : 0
      }
      headerReadable() {
        return !this.stopped && (null !== this.lastHeader || this.atSendsStop)
      }
      readLoadCounts(MM) {
        const rM = this.loadCountWords();
        return null !== rM && (MM.chunksReceived = rM[OM.Jb.ChunksReceived], MM.chunksCancelled = this.headerView()[OM.ob.ChunksCancelled], MM.chunksStored = rM[OM.Jb.ChunksStored], MM.jobsSent = rM[OM.Jb.JobsSent], MM.jobsDone = rM[OM.Jb.JobsDone], MM.jobsInFlight = rM[OM.Jb.JobsInFlight], MM.workersLive = rM[OM.Jb.WorkersLive], MM.workersRetired = rM[OM.Jb.WorkersRetired], !0)
      }
      readViewQueuedPrograms() {
        var MM, rM;
        const iM = null !== (MM = null === (rM = this.loadCountWords()) || void 0 === rM ? void 0 : rM[OM.Jb.ViewQueuedPrograms]) && void 0 !== MM ? MM : 0;
        return 0 === iM ? null : iM - 1
      }
      readFirstViewWait(MM, rM) {
        const iM = this.loadCountWords();
        return null === iM ? null : [iM[OM.Jb.FirstViewLinkMs], iM[OM.Jb.FirstViewTerrainMs], iM[OM.Jb.FirstViewHeldMs], iM[OM.Jb.FirstViewOtherMs], iM[OM.Jb.FirstViewGaps], iM[OM.Jb.FirstViewGapMs], MM, rM]
      }
      loadCountWords() {
        if (this.stopped || null === this.lastHeader) return null;
        const MM = this.core.Xd();
        if (0 === MM) return null;
        const rM = this.memory().buffer;
        return rM !== this.loadCountsBuffer && (this.loadCountsBuffer = rM, this.loadCounts = new Uint32Array(rM, MM, OM.Db)), this.loadCounts
      }
      headerView() {
        const MM = this.memory().buffer;
        return MM !== this.headerBuffer && (this.headerBuffer = MM, this.header = new Uint32Array(MM, this.core.RH(), OM.lb)), this.header
      }
    }
  },
  41876: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => aM,
      f: () => jM
    });
    var OM = iM(5069);
    let SM = null;

    function jM(MM) {
      SM = {
        scanned: !1
      };
      try {
        return MM()
      } finally {
        SM = null
      }
    }

    function aM() {
      const MM = SM;
      if (null === MM) return (0, OM.i)();
      const rM = (0, OM.i)(!MM.scanned);
      return MM.scanned = !0, rM
    }
  },
  41922: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => OM
    });
    const OM = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  41939: (MM, rM, iM) => {
    function OM() {
      return iM(41947)
    }

    function SM() {
      return iM(41954)
    }

    function jM(MM) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(MM)
    }
    iM.d(rM, {
      d: () => jM,
      f: () => OM,
      g: () => SM
    })
  },
  37229: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => PM,
      f: () => QM,
      j: () => aM,
      k: () => LM
    });
    var OM = iM(37218),
      SM = iM(10);
    const jM = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function aM(MM) {
      if (MM instanceof WebAssembly.RuntimeError) return !0;
      const rM = MM instanceof Error ? MM.stack : void 0;
      return "string" === typeof rM && jM.test(rM)
    }

    function PM(MM, rM, iM) {
      var SM;
      const aM = MM instanceof Error ? MM.name : "thrown",
        PM = (MM instanceof Error && null !== (SM = MM.stack) && void 0 !== SM ? SM : "").split("\n").filter((MM => jM.test(MM))).slice(0, 8).map((MM => MM.trim())),
        nM = null === rM ? "wasm memory unknown" : `wasm memory ${Math.round(rM/2**20)} MB`,
        QM = null === iM.panic ? "" : `, panic: ${(0,OM.i)(iM.panic)}`,
        zM = `${aM}: ${MM instanceof Error?MM.message:String(MM)}`;
      return `${(0,OM.o)(iM.kind,iM.refusedBytes)} ${zM} (${nM})${QM}${PM.length>0?` | ${PM.join(" < ")}`:""}`
    }
    const nM = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function QM(MM) {
      var rM;
      let iM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(MM instanceof Error) || !nM.test(MM.message)) return {};
      if (!("detached" in iM)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, SM.V)(null === (rM = (0, SM.M)(iM, "detached")) || void 0 === rM ? void 0 : rM.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const zM = 500;

    function LM(MM) {
      let rM = "[object Object]";
      try {
        rM = String(MM)
      } catch {}
      if ("[object Object]" !== rM) return rM;
      try {
        var iM, OM;
        return null !== (iM = null === (OM = JSON.stringify(MM)) || void 0 === OM ? void 0 : OM.slice(0, zM)) && void 0 !== iM ? iM : rM
      } catch {
        return rM
      }
    }
  },
  41947: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  41954: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  },
  37218: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => OM,
      f: () => jM,
      i: () => nM,
      k: () => aM,
      o: () => SM
    });
    const OM = /^alloc_failed (\d+) bytes$/;

    function SM(MM, rM) {
      return jM(MM, rM) ? `trap=alloc_failed ${rM} bytes` : `trap=${MM}`
    }

    function jM(MM, rM) {
      return "unreachable" === MM && rM > 0
    }

    function aM(MM, rM, iM) {
      const OM = function(MM) {
        return MM instanceof WebAssembly.RuntimeError ? /unreachable/i.test(MM.message) ? "unreachable" : /out of bounds/i.test(MM.message) ? "out_of_bounds" : "runtime_error" : (MM instanceof RangeError || MM instanceof Error && "InternalError" === MM.name) && /call stack|recursion/i.test(MM.message) ? "stack_overflow" : "js_error"
      }(MM);
      if ("unreachable" !== OM) return {
        kind: OM,
        panic: null,
        refusedBytes: 0
      };
      const SM = rM(),
        jM = iM();
      return {
        kind: OM,
        panic: jM > 0 ? null : SM,
        refusedBytes: jM
      }
    }
    const PM = 300;

    function nM(MM) {
      return MM.replace(/\s*\n\s*/g, " / ").slice(0, PM)
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);