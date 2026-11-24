export const id = 210;
export const ids = [210];
export const modules = {
  40849: (SS, HS, gS) => {
    function tS(SS, HS, gS) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(SS, HS).getContext("2d", gS);
      const tS = document.createElement("canvas");
      return tS.width = SS, tS.height = HS, tS.getContext("2d", gS)
    }

    function bS(SS, HS) {
      return SS.getContext("2d", HS)
    }
    gS.d(HS, {
      b: () => bS,
      f: () => tS
    })
  },
  40811: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => NS
    });
    const tS = 1 << 20,
      bS = 1 << 21,
      XS = 1024,
      xS = 2048;

    function NS(SS, HS, gS) {
      const NS = SS + tS,
        qS = HS + XS,
        uS = gS + tS;
      return NS < 0 || NS >= bS || uS < 0 || uS >= bS || qS < 0 || qS >= xS ? -1 : (NS * bS + uS) * xS + qS
    }
  },
  40805: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => tS,
      d: () => xS,
      e: () => bS,
      f: () => XS,
      i: () => IS,
      j: () => uS,
      l: () => qS,
      o: () => NS
    });
    gS(3600);
    gS(40811);

    function tS(SS) {}

    function bS(SS) {}

    function XS(SS) {}

    function xS(SS) {}

    function NS(SS) {}

    function qS(SS, HS, gS) {}

    function uS(SS) {}

    function IS(SS) {}
  },
  40802: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => PS,
      e: () => KS,
      i: () => FS,
      j: () => dS,
      k: () => ES,
      l: () => LS,
      p: () => nS,
      s: () => GS,
      v: () => CS,
      z: () => OS,
      D: () => pS,
      G: () => wS,
      J: () => iS,
      L: () => MS,
      N: () => YS,
      R: () => yS
    });
    var tS = gS(4926),
      bS = gS(40672),
      XS = (gS(40805), gS(10));
    class xS {
      constructor(SS, HS) {
        this.memory = SS, this.access = HS, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.hf = 0, this.u32 = new XS.l(0), this.f32 = new XS.g(0), this.u8 = new XS.d(0), this.dataView = new XS.i(new ArrayBuffer(0)), this.refresh()
      }
      refresh() {
        this.ptr = this.access.ptr(), this.hf = this.access.hf(), this.buffer = (0, XS.I)(this.memory()), this.u32 = new XS.l(this.buffer, this.ptr, this.hf >>> 2), this.f32 = new XS.g(this.buffer, this.ptr, this.hf >>> 2), this.u8 = new XS.d(this.buffer, this.ptr, this.hf), this.dataView = new XS.i(this.buffer, this.ptr, this.hf)
      }
      ensureViews() {
        (0, XS.I)(this.memory()) !== this.buffer && this.refresh()
      }
      get view() {
        return this.ensureViews(), this.dataView
      }
      room(SS) {
        return !!this.fits(SS) || (this.dropped++, !1)
      }
      fits(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.cursor;
        this.ensureViews();
        const gS = HS + SS;
        return gS <= this.hf || gS <= tS.Vc && 0 !== this.access.reserve(gS) && (this.refresh(), gS <= this.hf)
      }
      consume(SS) {
        const HS = this.cursor - SS;
        HS > 0 && SS > 0 && (this.ensureViews(), this.u8.copyWithin(0, SS, this.cursor)), this.cursor = HS > 0 ? HS : 0
      }
      writeRecord(SS, HS, gS, bS, XS) {
        if (!this.room(tS.Db)) return !1;
        const xS = this.cursor >>> 2;
        return this.u32[xS] = 65535 & SS | (65535 & HS) << 16, this.f32[xS + 1] = gS, this.f32[xS + 2] = bS, this.u32[xS + 3] = XS >>> 0, this.cursor += tS.Db, !0
      }
      writeOptions(SS, HS) {
        const gS = HS.byteLength,
          bS = tS.Db + (0, tS.ue)(gS);
        if (!this.fits(bS)) return !1;
        const XS = this.cursor,
          xS = XS >>> 2;
        this.u32[xS] = tS.Gb.Options, this.u32[xS + 1] = gS, this.u32[xS + 2] = 0, this.u32[xS + 3] = SS >>> 0;
        const NS = XS + tS.Db;
        return this.u8.set(HS, NS), this.u8.fill(0, NS + gS, XS + bS), this.cursor += bS, !0
      }
      writeWorkerRecord(SS, HS, gS, bS, XS, xS) {
        const NS = xS.byteLength,
          qS = tS.Od + (0, tS.ue)(NS);
        if (NS > tS.Ld) return this.dropped++, !1;
        if (!this.room(qS)) return !1;
        const uS = this.cursor,
          IS = uS >>> 2;
        this.u32[IS] = SS >>> 0, this.u32[IS + 1] = 65535 & HS | (65535 & gS) << 16, this.u32[IS + 2] = bS >>> 0, this.u32[IS + 3] = XS >>> 0, this.u32[IS + 4] = NS;
        const fS = uS + tS.Od;
        return this.u8.set(xS, fS), this.u8.fill(0, fS + NS, uS + qS), this.cursor += qS, !0
      }
      written() {
        return this.ensureViews(), this.u8.subarray(0, this.cursor)
      }
      writeFrame(SS, HS) {
        return this.writeNet(tS.kc.Frame, SS, HS)
      }
      writeOpen(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(tS.kc.Open, SS, qS(HS))
      }
      writeClose(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(tS.kc.Close, SS, qS(HS))
      }
      writeNet(SS, HS, gS) {
        const bS = gS.byteLength,
          XS = tS.ic + (0, tS.ue)(bS);
        if (bS > tS.cc) return this.dropped++, !1;
        if (!this.room(XS)) return !1;
        const xS = this.cursor;
        this.u32[xS >>> 2] = bS, this.u32[1 + (xS >>> 2)] = (0, tS.qe)(SS, HS);
        const NS = xS + tS.ic;
        return this.u8.set(gS, NS), this.u8.fill(0, NS + bS, xS + XS), this.cursor += XS, !0
      }
      Qa(SS, HS, gS) {
        const bS = tS.u + (0, tS.ue)(gS);
        if (!this.room(bS)) return -1;
        const XS = this.cursor;
        this.u32[XS >>> 2] = 65535 & SS | (65535 & HS) << 16, this.u32[1 + (XS >>> 2)] = gS;
        const xS = XS + tS.u;
        return this.u8.fill(0, xS, XS + bS), this.cursor += bS, xS
      }
      growForCmd(SS) {
        return this.fits(tS.u + (0, tS.ue)(SS), 0)
      }
      writeCmd(SS, HS, gS) {
        const tS = this.Qa(SS, HS, gS.byteLength);
        return !(tS < 0) && (this.u8.set(gS, tS), !0)
      }
      copyWritten(SS, HS) {
        return this.ensureViews(), this.u8.slice(SS, SS + HS)
      }
    }
    const NS = new XS.d(0);

    function qS(SS) {
      if (0 === SS) return NS;
      const HS = new XS.d(tS.fc);
      for (let gS = 0; gS < tS.fc; gS++) HS[gS] = SS >>> 8 * gS & 255;
      return HS
    }
    class uS {
      constructor(SS, HS) {
        this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new xS(HS, {
          ptr: () => SS.Uf(),
          hf: () => SS.hXS(),
          reserve: HS => SS.yXS(HS)
        }), this.net = new xS(HS, {
          ptr: () => SS.LXS(),
          hf: () => SS.EXS(),
          reserve: HS => SS.VXS(HS)
        }), this.worker = new xS(HS, {
          ptr: () => SS.bxS(),
          hf: () => SS.txS(),
          reserve: HS => SS.iXS(HS)
        }), this.cmd = new xS(HS, {
          ptr: () => SS.KXS(),
          hf: () => SS.kXS(),
          reserve: HS => SS.aXS(HS)
        })
      }
      reset(SS, HS, gS) {
        this.input.consume(SS), this.worker.consume(HS), this.cmd.consume(gS)
      }
    }
    var IS = gS(36287),
      fS = gS(2517),
      kS = gS(4917),
      aS = gS(40814);
    const KS = "coreFrame",
      jS = "fatalStatus",
      GS = "otherCall",
      CS = "coreRings",
      nS = "netIn",
      PS = "abi",
      QS = "netOut",
      DS = "workerOut",
      wS = "worldgenHost",
      hS = "eventWalker",
      ZS = "netEvent",
      JS = "envEvent",
      OS = "sharedTables",
      dS = "inputAction",
      cS = "frameSends",
      vS = new Set([hS, ZS, JS, cS, dS, OS]),
      ES = "wasmMemory",
      LS = "meshHost";

    function YS(SS, HS) {
      SS.forEachWorkerOut(((gS, bS, XS) => {
        if ((0, tS.je)(gS)) try {
          var xS;
          null === (xS = HS.worldgen) || void 0 === xS || xS.take(gS, XS)
        } catch (qS) {
          SS.crash(wS, qS)
        } else try {
          var NS;
          null === (NS = HS.mesh) || void 0 === NS || NS.take(gS, bS, XS)
        } catch (qS) {
          SS.crash(LS, qS)
        }
      }))
    }
    const AS = 1048576;

    function yS(SS, HS) {
      let gS = !1;
      const tS = () => {
        gS = !1, HS()
      };
      return () => {
        !gS && SS.cursor >= AS && (gS = !0, queueMicrotask(tS))
      }
    }
    const VS = new Set([jS, GS, wS, LS]);

    function iS(SS) {
      return vS.has(SS.site) ? SS.error instanceof WebAssembly.RuntimeError || (0, bS.h)(SS.error) : !VS.has(SS.site) && SS.error instanceof Error
    }
    const WS = "events",
      zS = [],
      US = "debugLog",
      pS = "terrainTextures",
      sS = "sunShadowTextures",
      BS = new TextDecoder;

    function MS(SS, HS) {
      const {
        site: gS,
        error: bS,
        header: XS
      } = SS, xS = XS ? (0, tS.de)(XS.lastError) : "noFrame", NS = `CORE-${gS===jS?xS:gS}`, qS = null === bS || void 0 === bS ? "" : ` ${(0,IS.g)(bS)}`, uS = {
        site: gS,
        wasmBuild: HS.wasm,
        clientVersion: HS.client
      };
      return XS && (uS.status = String(XS.status), uS.lastError = xS, uS.lastErrorCode = String(XS.lastError), uS.lastErrorDetail = String(XS.lastErrorDetail), uS.errorCount = String(XS.errorCount), uS.frameIndex = String(XS.frameIndex), uS.tickIndex = String(XS.tickIndex)), {
        code: NS,
        message: `core ${gS}, last error ${xS};${qS}`,
        details: uS
      }
    }
    class FS {
      constructor(SS, HS, gS) {
        this.core = SS, this.memory = HS, this.handlers = gS, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.loadCountsBuffer = null, this.loadCounts = new Uint32Array(0), this.unsentUiPrefs = null, this.eventWalker = null, this.netOffsets = [], this.frameEvents = {
          ptr: 0,
          len: 0,
          net: zS,
          netOffsets: this.netOffsets,
          kind: "none"
        }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.atSendsStop = !1, this.rings = new uS(SS, HS)
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
      framePaces(SS) {
        if (this.stopped || this.drawsHeld) return !1;
        try {
          return this.core.QXS(SS)
        } catch (HS) {
          return this.crash(KS, HS), !1
        }
      }
      get isStopped() {
        return this.stopped
      }
      frame(SS, HS) {
        var gS;
        let XS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.stopped) return !1;
        if (!this.writePendingInput()) return !1;
        const {
          input: xS,
          net: NS,
          worker: qS,
          cmd: uS
        } = this.rings, IS = NS.cursor, fS = HS && !this.drawsHeld;
        let GS = tS.N.Fatal;
        const CS = xS.cursor,
          PS = qS.cursor,
          QS = uS.cursor;
        let DS, wS = null;
        const JS = this.handlers.onSends;
        try {
          const HS = (fS ? tS.lb.Draws : 0) | (XS ? tS.lb.NetAll : 0) | (JS ? tS.lb.StopForSends : 0);
          GS = (0, aS.e)((() => {
            let gS = this.core.frame(SS, CS, NS.cursor, PS, HS, QS);
            for (; gS === tS.td && JS;) {
              var bS;
              if (DS ??= null === (bS = this.gameHost) || void 0 === bS ? void 0 : bS.takeFault(), void 0 === DS && !this.takeSends(JS)) return tS.N.Fatal;
              gS = this.core.iG()
            }
            return gS
          }))
        } catch (BS) {
          wS = {
            error: BS
          }
        }
        DS ??= null === (gS = this.gameHost) || void 0 === gS ? void 0 : gS.takeFault();
        const OS = this.stopped || null !== wS || void 0 !== DS;
        this.rings.reset(OS ? xS.cursor : CS, OS ? qS.cursor : PS, OS ? uS.cursor : QS);
        const dS = null === wS && void 0 === DS,
          cS = dS && !this.stopped && GS === tS.N.Fatal && 0 === this.core.Da(),
          vS = dS && !cS ? this.headerView() : null,
          ES = cS ? {
            ...null !== (LS = this.lastHeader) && void 0 !== LS ? LS : (0, tS.ve)(new Uint32Array(tS.sb)),
            status: tS.N.Fatal,
            lastError: tS.K.CoreBusy,
            lastErrorDetail: 0
          } : null === vS ? null : (0, tS.ve)(vS);
        var LS;
        null !== ES && (this.lastHeader = ES);
        const YS = null !== ES && GS !== tS.N.Fatal,
          AS = YS && null !== vS ? vS[tS.wb.NetInKept] : 0,
          yS = YS && AS <= IS && AS % 4 === 0 ? AS : null;
        var VS, iS;
        null !== ES && null !== yS && GS === tS.N.Errors && (null === (VS = (iS = this.handlers).onErrors) || void 0 === VS || VS.call(iS, ES));
        const WS = null === yS ? zS : this.readEvents(IS);
        if (NS.consume(IS - (null !== yS && void 0 !== yS ? yS : 0)), this.netKept = null !== yS && void 0 !== yS ? yS : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== wS) return this.crash(KS, void 0 === DS || DS instanceof bS.b ? wS.error : DS), !1;
        if (void 0 !== DS || null === ES) return this.crashOn(KS, DS), !1;
        if (cS) return this.crash(jS, null), !1;
        const US = this.headerView()[tS.wb.FrameDraw];
        if (this.lastFrameKind = (0, kS.f)(fS, US), GS === tS.N.Fatal) return this.crash(jS, null), !1;
        if (null === yS) return this.crash(nS, `the core kept ${AS} of ${IS} net-in bytes`), !1;
        if (this.eventWalker) {
          if (this.stopped) return !1;
          const SS = this.frameEvents,
            HS = this.headerView();
          SS.ptr = HS[tS.wb.EventsPtr], SS.len = HS[tS.wb.EventsLen], SS.net = WS, SS.kind = this.lastFrameKind;
          try {
            this.eventWalker(SS)
          } catch (BS) {
            return this.crashOn(hS, BS), !1
          }
          return this.handEnvEvents()
        }
        for (const tS of WS) {
          if (this.stopped) return !1;
          try {
            var pS, sS;
            null === (pS = (sS = this.handlers).onNetEvent) || void 0 === pS || pS.call(sS, tS)
          } catch (BS) {
            return this.crashOn(ZS, BS), !1
          }
        }
        return this.handEnvEvents()
      }
      handEnvEvents() {
        for (const XS of this.graceEvents) {
          if (this.stopped) return !1;
          try {
            var SS, HS;
            null === (SS = (HS = this.handlers).onReconnectGrace) || void 0 === SS || SS.call(HS, XS)
          } catch (bS) {
            return this.crashOn(ZS, bS), !1
          }
        }
        for (const XS of this.envEvents) {
          if (this.stopped) return !1;
          try {
            var gS, tS;
            null === (gS = (tS = this.handlers).onEnvEvent) || void 0 === gS || gS.call(tS, XS)
          } catch (bS) {
            return this.crashOn(JS, bS), !1
          }
        }
        return !this.stopped
      }
      setEventWalker(SS) {
        this.eventWalker = SS
      }
      writePendingInput() {
        if (this.stopped) return !1;
        const {
          input: SS
        } = this.rings;
        try {
          const HS = this.unsentUiPrefs;
          HS && SS.writeRecord(tS.Gb.UiPrefs, 0, HS.nametagCutDistance, 0, (0, tS.we)(HS)) && (this.unsentUiPrefs = null);
          const gS = this.unsentEnvPrefs;
          gS && SS.writeRecord(tS.Gb.EnvPrefs, (0, tS.he)(gS), gS.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
          const bS = this.unsentLookPrefs;
          bS && SS.writeRecord(tS.Gb.Sensitivity, 0, bS.mouse, bS.touch, (0, fS.j)(bS.fovPercent)) && (this.unsentLookPrefs = null);
          let XS = 0;
          for (const {
              aux: tS,
              payload: xS
            }
            of this.unsentOptions) {
            if (!SS.writeOptions(tS, xS)) {
              if (SS.cursor > 0) break;
              this.optionsDropped++
            }
            XS++
          }
          XS > 0 && this.unsentOptions.splice(0, XS)
        } catch (HS) {
          return this.crash(CS, HS), !1
        }
        return !0
      }
      setHoldDraws(SS) {
        this.drawsHeld = SS
      }
      setUiPrefs(SS) {
        this.unsentUiPrefs = {
          ...SS
        }
      }
      setEnvPrefs(SS) {
        this.unsentEnvPrefs = {
          ...SS
        }
      }
      setLookPrefs(SS) {
        this.unsentLookPrefs = {
          ...SS
        }
      }
      queueOptions(SS, HS) {
        return !this.isStopped && (HS.byteLength > tS.pc.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
          aux: SS,
          payload: HS
        }), !0))
      }
      setChunkCap(SS) {
        return this.callCore("setChunkCap", null, (HS => HS.BXS(SS)))
      }
      shedMemory(SS) {
        const HS = this.callCore("shedMemory", null, (HS => HS.mXS(SS)));
        return 0 === HS ? null : HS
      }
      addDistanceInUse() {
        const SS = this.callCore("addDistanceInUse", null, (SS => SS.NXS()));
        return 0 === SS ? null : SS
      }
      setChunkAddDistance(SS, HS) {
        return this.callCore("setChunkAddDistance", !1, (gS => gS.sXS(SS, HS)))
      }
      setGameHost(SS) {
        return this.callCore("setGameHost", !1, (HS => (HS.PXS(SS), this.gameHost = SS, !0)))
      }
      setAntiCheatProbes(SS) {
        return this.callCore("setAntiCheatProbes", !1, (HS => HS.UXS(SS)))
      }
      setAmbientOcclusion(SS) {
        this.callCore("setAmbientOcclusion", void 0, (HS => {
          HS.zXS(SS)
        }))
      }
      setPoseLod(SS) {
        this.callCore("setPoseLod", void 0, (HS => {
          HS.FXS(SS)
        }))
      }
      setDebugLog(SS, HS) {
        this.callCore(US, void 0, (gS => {
          gS.LG(SS, HS)
        }))
      }
      takeDebugLog(SS) {
        return this.callCore(US, [], (HS => HS.YG(SS)))
      }
      setTextureLayers(SS) {
        return this.callCore("setTextureLayers", !1, (HS => HS.lXS(SS)))
      }
      setBlockColours(SS) {
        let {
          blocks: HS,
          counts: gS,
          values: tS
        } = SS;
        return this.callCore("setBlockColours", !1, (SS => SS.UgS(HS, gS, tS)))
      }
      terrainTextureNames() {
        return this.callCore(pS, [], (SS => SS.gxS()))
      }
      setTerrainTextures(SS, HS, gS, tS) {
        return this.callCore(pS, !1, (bS => bS.oXS(SS, gS, HS, tS)))
      }
      setShaderPack(SS, HS, gS, tS, bS, XS) {
        return this.callCore("setShaderPack", !1, (xS => {
          var NS, qS;
          return null !== (NS = null === (qS = xS.rgS) || void 0 === qS ? void 0 : qS.call(xS, SS, HS, gS, tS, bS, XS)) && void 0 !== NS && NS
        }))
      }
      sunShadowWantedTextures() {
        return this.callCore(sS, null, (SS => {
          var HS, gS;
          return null !== (HS = null === (gS = SS.eXS) || void 0 === gS ? void 0 : gS.call(SS)) && void 0 !== HS ? HS : null
        }))
      }
      setSunShadowTexture(SS, HS, gS, tS, bS) {
        this.callCore(sS, void 0, (XS => {
          var xS;
          null === (xS = XS.TXS) || void 0 === xS || xS.call(XS, SS, HS, gS, tS, bS)
        }))
      }
      takeSunShadowWarnings() {
        return this.callCore(sS, [], (SS => {
          var HS, gS;
          return null !== (HS = null === (gS = SS.SxS) || void 0 === gS ? void 0 : gS.call(SS)) && void 0 !== HS ? HS : []
        }))
      }
      sunShadowsHeld() {
        return this.callCore(sS, null, (SS => {
          var HS, gS;
          return null !== (HS = null === (gS = SS.rXS) || void 0 === gS ? void 0 : gS.call(SS)) && void 0 !== HS ? HS : null
        }))
      }
      callCore(SS, HS, gS) {
        if (this.stopped) return HS;
        try {
          return gS(this.core)
        } catch (tS) {
          return this.crash(SS, tS), HS
        }
      }
      readEvents(SS) {
        this.netOffsets.length = 0;
        const HS = this.headerView(),
          gS = HS[tS.wb.EventsPtr],
          bS = HS[tS.wb.EventsLen];
        if (this.envEvents.length = 0, this.graceEvents.length = 0, 0 === bS) return zS;
        const XS = [],
          xS = this.memory().buffer;
        if (gS % 4 !== 0 || gS + bS > xS.byteLength) return this.crash(WS, `events of ${bS} bytes at ${gS} outside ${xS.byteLength} bytes of memory`), zS;
        const NS = new DataView(xS, gS, bS),
          qS = this.rings.net,
          uS = (HS, gS) => HS + gS <= SS ? qS.copyWritten(HS, gS) : null;
        let IS = 0;
        for (; IS < bS;) {
          const SS = IS + tS.ab,
            HS = SS <= bS ? NS.getUint32(IS, !0) : -1,
            qS = HS >>> 16;
          if (HS < 0 || qS > bS - SS) return this.crash(WS, `event record at ${IS} overruns its ${bS} bytes`), zS;
          const dS = 65535 & HS,
            cS = HS => NS.getUint32(SS + 4 * HS, !0);
          if (dS === tS.eb.RawMessage) {
            const SS = qS >= tS.Xc.BYTES ? 65535 & cS(1) : -1,
              HS = SS === tS.Xc.STRING_TYPE,
              gS = qS === (HS ? tS.Xc.STRING_TYPE_BYTES : tS.Xc.BYTES) ? uS(cS(2), cS(3)) : null,
              bS = HS && gS ? uS(cS(4), cS(5)) : null;
            if (!gS || HS && !bS) return this.crash(WS, `RawMessage at ${IS} of ${qS} bytes names bytes outside net-in`), zS;
            this.netOffsets.push(IS), XS.push({
              type: "message",
              conn: cS(0),
              Ju: SS,
              payloadKind: cS(1) >>> 16,
              payload: gS,
              stringType: bS ? BS.decode(bS) : null
            })
          } else if (dS === tS.eb.CoreErrors) {
            var fS, kS;
            const SS = qS >= 4 ? cS(0) : -1;
            if (SS < 0 || SS > tS.H.PAIRS_MAX || qS !== 4 * (tS.H.FIXED_WORDS + tS.H.PAIR_WORDS * SS)) return this.crash(WS, `CoreErrors at ${IS} of ${qS} bytes`), zS;
            const HS = [];
            for (let gS = 0; gS < SS; gS++) HS.push({
              code: cS(1 + 2 * gS),
              detail: cS(2 + 2 * gS)
            });
            null === (fS = (kS = this.handlers).onCoreErrors) || void 0 === fS || fS.call(kS, HS, cS(1 + 2 * SS))
          } else if (dS === tS.eb.RenderReload) {
            var aS, KS;
            if (qS !== tS.id.BYTES) return this.crash(WS, `RenderReload at ${IS} of ${qS} bytes`), zS;
            null === (aS = (KS = this.handlers).onRenderReload) || void 0 === aS || aS.call(KS, cS(0), cS(1), cS(2))
          } else if (dS === tS.eb.JoinPreloadEnded) {
            var jS, GS;
            if (qS !== tS.Kb.BYTES) return this.crash(WS, `JoinPreloadEnded at ${IS} of ${qS} bytes`), zS;
            null === (jS = (GS = this.handlers).onJoinPreloadEnded) || void 0 === jS || jS.call(GS, {
              chunks: cS(tS.Kb.CHUNKS),
              bytes: cS(tS.Kb.BYTES_HELD),
              asked: cS(tS.Kb.ASKED),
              replaced: cS(tS.Kb.REPLACED),
              dropped: cS(tS.Kb.DROPPED)
            })
          } else if (dS === tS.eb.Images) {
            var CS, nS;
            null === (CS = (nS = this.handlers).onImages) || void 0 === CS || CS.call(nS, new Uint8Array(xS.slice(gS + SS, gS + SS + qS)))
          } else if (dS === tS.eb.ModelRequests)
            for (let gS = 0; gS < qS >>> 2; gS++) {
              var PS, QS;
              null === (PS = (QS = this.handlers).onModelRequest) || void 0 === PS || PS.call(QS, cS(gS))
            } else if (dS === tS.eb.ModelTaken) {
              var DS, wS;
              if (qS < 4) return this.crash(WS, `ModelTaken at ${IS} of ${qS} bytes`), zS;
              const SS = new Uint32Array((qS >>> 2) - 1);
              for (let HS = 0; HS < SS.length; HS++) SS[HS] = cS(1 + HS);
              null === (DS = (wS = this.handlers).onModelTaken) || void 0 === DS || DS.call(wS, cS(0), SS)
            } else if (dS === tS.eb.TerrainTexturesWanted) {
            var hS, ZS;
            if (0 !== qS) return this.crash(WS, `TerrainTexturesWanted at ${IS} of ${qS} bytes`), zS;
            null === (hS = (ZS = this.handlers).onTerrainTexturesWanted) || void 0 === hS || hS.call(ZS)
          } else if (dS === tS.eb.KeepAliveDue) {
            var JS, OS;
            if (qS > tS.Ob) return this.crash(WS, `KeepAliveDue at ${IS} of ${qS} bytes`), zS;
            null === (JS = (OS = this.handlers).onKeepAlive) || void 0 === JS || JS.call(OS, new Uint8Array(xS, gS + SS, qS).slice())
          } else if (dS === tS.eb.ConnectionState) {
            if (qS !== tS.v) return this.crash(WS, `ConnectionState at ${IS} of ${qS} bytes`), zS;
            this.netOffsets.push(IS), XS.push({
              type: "connection",
              conn: cS(0),
              phase: cS(1),
              code: 0 | cS(2)
            })
          } else if (dS === tS.eb.EnvLighting || dS === tS.eb.SkyImages) {
            if (qS !== (dS === tS.eb.EnvLighting ? tS.Y : tS.wd)) return this.crash(WS, `event ${dS} at ${IS} of ${qS} bytes`), zS;
            this.envEvents.push({
              kind: dS,
              payload: new Uint8Array(xS.slice(gS + SS, gS + SS + qS))
            })
          } else if (dS === tS.eb.ReconnectGrace) {
            if (qS !== tS.Ec) return this.crash(WS, `ReconnectGrace at ${IS} of ${qS} bytes`), zS;
            const SS = cS(2);
            this.graceEvents.push({
              conn: cS(0),
              graceMs: cS(1),
              sessionBased: 0 !== (SS & tS.$c.SessionBased),
              replayOffer: 0 !== (SS & tS.$c.ReplayOffer)
            })
          }
          IS = SS + (0, tS.ue)(qS)
        }
        return XS
      }
      takeSends(SS) {
        this.atSendsStop = !0;
        try {
          SS()
        } catch (HS) {
          this.crashOn(cS, HS)
        } finally {
          this.atSendsStop = !1
        }
        return !this.stopped
      }
      forEachNetOut(SS) {
        this.forEachOut(QS, "net-out", tS.wb.NetOutPtr, tS.wb.NetOutLen, tS.ic, 0, ((HS, gS, bS, XS) => {
          const xS = (0, tS.oe)(gS);
          xS === tS.kc.Frame ? SS((0, tS.ke)(gS), bS) : this.crash(QS, `net-out record at ${XS} is kind ${xS}, not a frame`)
        }))
      }
      forEachWorkerOut(SS) {
        this.forEachOut(DS, "worker-out", tS.wb.WorkerOutPtr, tS.wb.WorkerOutLen, tS.Kd, 4, ((HS, gS, bS, XS) => {
          const xS = 255 & HS,
            NS = xS === tS.Yd.Init ? this.initOf(bS, XS) : bS;
          null !== NS && SS(xS, HS >>> 8 & 16777215, NS)
        }))
      }
      initOf(SS, HS) {
        const gS = this.memory().buffer;
        if (SS.byteLength !== tS.yb) return this.crash(DS, `worker-out Init record at ${HS} is ${SS.byteLength} bytes, not a view`), null;
        const bS = new DataView(SS.buffer, SS.byteOffset, tS.yb),
          XS = bS.getUint32(0, !0),
          xS = bS.getUint32(4, !0);
        return XS + xS > gS.byteLength ? (this.crash(DS, `worker-out Init record at ${HS} names ${xS} bytes at ${XS} outside ${gS.byteLength} bytes of memory`), null) : new Uint8Array(gS, XS, xS)
      }
      forEachOut(SS, HS, gS, bS, XS, xS, NS) {
        if (!this.headerReadable()) return;
        const qS = this.headerView(),
          uS = qS[gS],
          IS = qS[bS];
        if (0 === IS) return;
        const fS = this.memory().buffer;
        if (uS % 4 !== 0 || uS + IS > fS.byteLength) return void this.crash(SS, `${HS} of ${IS} bytes at ${uS} outside ${fS.byteLength} bytes of memory`);
        const kS = new DataView(fS, uS, IS);
        let aS = 0;
        for (; aS < IS;) {
          const gS = aS + XS,
            bS = gS <= IS ? kS.getUint32(aS + xS, !0) : -1;
          if (bS < 0 || bS > IS - gS) return void this.crash(SS, `${HS} record at ${aS} overruns its ${IS} bytes`);
          if (NS(kS.getUint32(aS, !0), kS.getUint32(aS + 4, !0), new Uint8Array(fS, uS + gS, bS), aS), this.stopped) return;
          aS = gS + (0, tS.ue)(bS)
        }
      }
      forEachEvent(SS) {
        if (this.stopped || null === this.lastHeader) return;
        const HS = this.headerView(),
          gS = HS[tS.wb.EventsPtr],
          bS = HS[tS.wb.EventsLen];
        if (0 === bS) return;
        const XS = this.memory().buffer;
        if (gS % 4 !== 0 || gS + bS > XS.byteLength) return void this.crash(WS, `events of ${bS} bytes at ${gS} outside ${XS.byteLength} bytes of memory`);
        const xS = new DataView(XS, gS, bS);
        let NS = 0;
        for (; NS < bS;) {
          const HS = NS + tS.ab,
            gS = HS <= bS ? xS.getUint32(NS, !0) : -1,
            XS = gS >>> 16;
          if (gS < 0 || XS > bS - HS) return void this.crash(WS, `event record at ${NS} overruns its ${bS} bytes`);
          SS(65535 & gS, xS, HS, XS), NS = HS + (0, tS.ue)(XS)
        }
      }
      crashOn(SS, HS) {
        HS instanceof bS.b ? this.crash(WS, HS.message) : this.crash(SS, HS)
      }
      crash(SS, HS) {
        this.stopped || (this.stopped = !0, this.handlers.onCrash({
          site: SS,
          error: HS,
          header: this.lastHeader
        }))
      }
      headerWord(SS) {
        return this.headerReadable() ? this.headerView()[SS] : 0
      }
      headerReadable() {
        return !this.stopped && (null !== this.lastHeader || this.atSendsStop)
      }
      readLoadCounts(SS) {
        const HS = this.loadCountWords();
        return null !== HS && (SS.chunksReceived = HS[tS.Xb.ChunksReceived], SS.chunksCancelled = this.headerView()[tS.wb.ChunksCancelled], SS.chunksStored = HS[tS.Xb.ChunksStored], SS.jobsSent = HS[tS.Xb.JobsSent], SS.jobsDone = HS[tS.Xb.JobsDone], SS.jobsInFlight = HS[tS.Xb.JobsInFlight], SS.workersLive = HS[tS.Xb.WorkersLive], SS.workersRetired = HS[tS.Xb.WorkersRetired], !0)
      }
      readViewQueuedPrograms() {
        var SS, HS;
        const gS = null !== (SS = null === (HS = this.loadCountWords()) || void 0 === HS ? void 0 : HS[tS.Xb.ViewQueuedPrograms]) && void 0 !== SS ? SS : 0;
        return 0 === gS ? null : gS - 1
      }
      loadCountWords() {
        if (this.stopped || null === this.lastHeader) return null;
        const SS = this.core.EG();
        if (0 === SS) return null;
        const HS = this.memory().buffer;
        return HS !== this.loadCountsBuffer && (this.loadCountsBuffer = HS, this.loadCounts = new Uint32Array(HS, SS, tS.Pb)), this.loadCounts
      }
      headerView() {
        const SS = this.memory().buffer;
        return SS !== this.headerBuffer && (this.headerBuffer = SS, this.header = new Uint32Array(SS, this.core.Da(), tS.sb)), this.header
      }
    }
  },
  40814: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => xS,
      e: () => XS
    });
    var tS = gS(4812);
    let bS = null;

    function XS(SS) {
      bS = {
        scanned: !1
      };
      try {
        return SS()
      } finally {
        bS = null
      }
    }

    function xS() {
      const SS = bS;
      if (null === SS) return (0, tS.h)();
      const HS = (0, tS.h)(!SS.scanned);
      return SS.scanned = !0, HS
    }
  },
  40860: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => tS
    });
    const tS = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  40876: (SS, HS, gS) => {
    function tS() {
      return gS(40882)
    }

    function bS() {
      return gS(40884)
    }

    function XS(SS) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(SS)
    }
    gS.d(HS, {
      e: () => XS,
      h: () => tS,
      k: () => bS
    })
  },
  36287: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => NS,
      e: () => uS,
      f: () => xS,
      g: () => fS
    });
    var tS = gS(36277),
      bS = gS(10);
    const XS = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function xS(SS) {
      if (SS instanceof WebAssembly.RuntimeError) return !0;
      const HS = SS instanceof Error ? SS.stack : void 0;
      return "string" === typeof HS && XS.test(HS)
    }

    function NS(SS, HS, gS) {
      var bS;
      const xS = SS instanceof Error ? SS.name : "thrown",
        NS = (SS instanceof Error && null !== (bS = SS.stack) && void 0 !== bS ? bS : "").split("\n").filter((SS => XS.test(SS))).slice(0, 8).map((SS => SS.trim())),
        qS = null === HS ? "wasm memory unknown" : `wasm memory ${Math.round(HS/2**20)} MB`,
        uS = null === gS.panic ? "" : `, panic: ${(0,tS.h)(gS.panic)}`,
        IS = `${xS}: ${SS instanceof Error?SS.message:String(SS)}`;
      return `${(0,tS.m)(gS.kind,gS.refusedBytes)} ${IS} (${qS})${uS}${NS.length>0?` | ${NS.join(" < ")}`:""}`
    }
    const qS = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function uS(SS) {
      var HS;
      let gS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(SS instanceof Error) || !qS.test(SS.message)) return {};
      if (!("detached" in gS)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, bS.T)(null === (HS = (0, bS.O)(gS, "detached")) || void 0 === HS ? void 0 : HS.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const IS = 500;

    function fS(SS) {
      let HS = "[object Object]";
      try {
        HS = String(SS)
      } catch {}
      if ("[object Object]" !== HS) return HS;
      try {
        var gS, tS;
        return null !== (gS = null === (tS = JSON.stringify(SS)) || void 0 === tS ? void 0 : tS.slice(0, IS)) && void 0 !== gS ? gS : HS
      } catch {
        return HS
      }
    }
  },
  40882: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  40884: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  },
  36277: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => tS,
      g: () => XS,
      h: () => qS,
      k: () => xS,
      m: () => bS
    });
    const tS = /^alloc_failed (\d+) bytes$/;

    function bS(SS, HS) {
      return XS(SS, HS) ? `trap=alloc_failed ${HS} bytes` : `trap=${SS}`
    }

    function XS(SS, HS) {
      return "unreachable" === SS && HS > 0
    }

    function xS(SS, HS, gS) {
      const tS = function(SS) {
        return SS instanceof WebAssembly.RuntimeError ? /unreachable/i.test(SS.message) ? "unreachable" : /out of bounds/i.test(SS.message) ? "out_of_bounds" : "runtime_error" : (SS instanceof RangeError || SS instanceof Error && "InternalError" === SS.name) && /call stack|recursion/i.test(SS.message) ? "stack_overflow" : "js_error"
      }(SS);
      if ("unreachable" !== tS) return {
        kind: tS,
        panic: null,
        refusedBytes: 0
      };
      const bS = HS(),
        XS = gS();
      return {
        kind: tS,
        panic: XS > 0 ? null : bS,
        refusedBytes: XS
      }
    }
    const NS = 300;

    function qS(SS) {
      return SS.replace(/\s*\n\s*/g, " / ").slice(0, NS)
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);