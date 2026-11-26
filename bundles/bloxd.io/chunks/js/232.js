export const id = 232;
export const ids = [232];
export const modules = {
  42117: (VV, eV, xV) => {
    function JV(VV, eV, xV) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(VV, eV).getContext("2d", xV);
      const JV = document.createElement("canvas");
      return JV.width = VV, JV.height = eV, JV.getContext("2d", xV)
    }

    function YV(VV, eV) {
      return VV.getContext("2d", eV)
    }
    xV.d(eV, {
      b: () => YV,
      c: () => JV
    })
  },
  42070: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => pV
    });
    const JV = 1 << 20,
      YV = 1 << 21,
      UV = 1024,
      yV = 2048;

    function pV(VV, eV, xV) {
      const pV = VV + JV,
        QV = eV + UV,
        nV = xV + JV;
      return pV < 0 || pV >= YV || nV < 0 || nV >= YV || QV < 0 || QV >= yV ? -1 : (pV * YV + nV) * yV + QV
    }
  },
  42066: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => JV,
      h: () => yV,
      k: () => YV,
      o: () => UV,
      r: () => wV,
      u: () => nV,
      x: () => QV,
      z: () => pV
    });
    xV(3911);
    xV(42070);

    function JV(VV) {}

    function YV(VV) {}

    function UV(VV) {}

    function yV(VV) {}

    function pV(VV) {}

    function QV(VV, eV, xV) {}

    function nV(VV) {}

    function wV(VV) {}
  },
  42057: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => qV,
      g: () => kV,
      h: () => KV,
      i: () => MV,
      l: () => WV,
      p: () => RV,
      s: () => jV,
      w: () => EV,
      x: () => BV,
      A: () => XV,
      E: () => lV,
      H: () => TV,
      K: () => aV,
      M: () => mV,
      N: () => gV,
      P: () => iV
    });
    var JV = xV(5297),
      YV = xV(41914),
      UV = (xV(42066), xV(10));
    class yV {
      constructor(VV, eV) {
        this.memory = VV, this.access = eV, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.Jv = 0, this.u32 = new UV.j(0), this.f32 = new UV.f(0), this.u8 = new UV.d(0), this.dataView = new UV.i(new ArrayBuffer(0)), this.refresh()
      }
      refresh() {
        this.ptr = this.access.ptr(), this.Jv = this.access.Jv(), this.buffer = (0, UV.G)(this.memory()), this.u32 = new UV.j(this.buffer, this.ptr, this.Jv >>> 2), this.f32 = new UV.f(this.buffer, this.ptr, this.Jv >>> 2), this.u8 = new UV.d(this.buffer, this.ptr, this.Jv), this.dataView = new UV.i(this.buffer, this.ptr, this.Jv)
      }
      ensureViews() {
        (0, UV.G)(this.memory()) !== this.buffer && this.refresh()
      }
      get view() {
        return this.ensureViews(), this.dataView
      }
      room(VV) {
        return !!this.fits(VV) || (this.dropped++, !1)
      }
      fits(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.cursor;
        this.ensureViews();
        const xV = eV + VV;
        return xV <= this.Jv || xV <= JV.Qc && 0 !== this.access.reserve(xV) && (this.refresh(), xV <= this.Jv)
      }
      consume(VV) {
        const eV = this.cursor - VV;
        eV > 0 && VV > 0 && (this.ensureViews(), this.u8.copyWithin(0, VV, this.cursor)), this.cursor = eV > 0 ? eV : 0
      }
      writeRecord(VV, eV, xV, YV, UV) {
        if (!this.room(JV.Fb)) return !1;
        const yV = this.cursor >>> 2;
        return this.u32[yV] = 65535 & VV | (65535 & eV) << 16, this.f32[yV + 1] = xV, this.f32[yV + 2] = YV, this.u32[yV + 3] = UV >>> 0, this.cursor += JV.Fb, !0
      }
      writeOptions(VV, eV) {
        const xV = eV.byteLength,
          YV = JV.Fb + (0, JV.ze)(xV);
        if (!this.fits(YV)) return !1;
        const UV = this.cursor,
          yV = UV >>> 2;
        this.u32[yV] = JV.Gb.Options, this.u32[yV + 1] = xV, this.u32[yV + 2] = 0, this.u32[yV + 3] = VV >>> 0;
        const pV = UV + JV.Fb;
        return this.u8.set(eV, pV), this.u8.fill(0, pV + xV, UV + YV), this.cursor += YV, !0
      }
      writeWorkerRecord(VV, eV, xV, YV, UV, yV) {
        const pV = yV.byteLength,
          QV = JV.Ld + (0, JV.ze)(pV);
        if (pV > JV.Kd) return this.dropped++, !1;
        if (!this.room(QV)) return !1;
        const nV = this.cursor,
          wV = nV >>> 2;
        this.u32[wV] = VV >>> 0, this.u32[wV + 1] = 65535 & eV | (65535 & xV) << 16, this.u32[wV + 2] = YV >>> 0, this.u32[wV + 3] = UV >>> 0, this.u32[wV + 4] = pV;
        const ZV = nV + JV.Ld;
        return this.u8.set(yV, ZV), this.u8.fill(0, ZV + pV, nV + QV), this.cursor += QV, !0
      }
      written() {
        return this.ensureViews(), this.u8.subarray(0, this.cursor)
      }
      writeFrame(VV, eV) {
        return this.writeNet(JV.fc.Frame, VV, eV)
      }
      writeOpen(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(JV.fc.Open, VV, QV(eV))
      }
      writeClose(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(JV.fc.Close, VV, QV(eV))
      }
      writeNet(VV, eV, xV) {
        const YV = xV.byteLength,
          UV = JV.ec + (0, JV.ze)(YV);
        if (YV > JV.$b) return this.dropped++, !1;
        if (!this.room(UV)) return !1;
        const yV = this.cursor;
        this.u32[yV >>> 2] = YV, this.u32[1 + (yV >>> 2)] = (0, JV.re)(VV, eV);
        const pV = yV + JV.ec;
        return this.u8.set(xV, pV), this.u8.fill(0, pV + YV, yV + UV), this.cursor += UV, !0
      }
      NZ(VV, eV, xV) {
        const YV = JV.x + (0, JV.ze)(xV);
        if (!this.room(YV)) return -1;
        const UV = this.cursor;
        this.u32[UV >>> 2] = 65535 & VV | (65535 & eV) << 16, this.u32[1 + (UV >>> 2)] = xV;
        const yV = UV + JV.x;
        return this.u8.fill(0, yV, UV + YV), this.cursor += YV, yV
      }
      growForCmd(VV) {
        return this.fits(JV.x + (0, JV.ze)(VV), 0)
      }
      writeCmd(VV, eV, xV) {
        const JV = this.NZ(VV, eV, xV.byteLength);
        return !(JV < 0) && (this.u8.set(xV, JV), !0)
      }
      copyWritten(VV, eV) {
        return this.ensureViews(), this.u8.slice(VV, VV + eV)
      }
    }
    const pV = new UV.d(0);

    function QV(VV) {
      if (0 === VV) return pV;
      const eV = new UV.d(JV.ac);
      for (let xV = 0; xV < JV.ac; xV++) eV[xV] = VV >>> 8 * xV & 255;
      return eV
    }
    class nV {
      constructor(VV, eV) {
        this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new yV(eV, {
          ptr: () => VV.Ev(),
          Jv: () => VV.npV(),
          reserve: eV => VV.TpV(eV)
        }), this.net = new yV(eV, {
          ptr: () => VV.qpV(),
          Jv: () => VV.BpV(),
          reserve: eV => VV.PpV(eV)
        }), this.worker = new yV(eV, {
          ptr: () => VV.KpV(),
          Jv: () => VV.mpV(),
          reserve: eV => VV.ApV(eV)
        }), this.cmd = new yV(eV, {
          ptr: () => VV.VpV(),
          Jv: () => VV.dyV(),
          reserve: eV => VV.OyV(eV)
        })
      }
      reset(VV, eV, xV) {
        this.input.consume(VV), this.worker.consume(eV), this.cmd.consume(xV)
      }
    }
    var wV = xV(37437),
      ZV = xV(2663),
      vV = xV(5288),
      rV = xV(42079);
    const kV = "coreFrame",
      bV = "fatalStatus",
      EV = "otherCall",
      BV = "coreRings",
      jV = "netIn",
      qV = "abi",
      tV = "netOut",
      FV = "workerOut",
      TV = "worldgenHost",
      PV = "eventWalker",
      AV = "netEvent",
      NV = "envEvent",
      XV = "sharedTables",
      MV = "inputAction",
      zV = "frameSends",
      GV = new Set([PV, AV, NV, zV, MV, XV]),
      WV = "wasmMemory",
      RV = "meshHost";

    function gV(VV, eV) {
      VV.forEachWorkerOut(((xV, YV, UV) => {
        if ((0, JV.je)(xV)) try {
          var yV;
          null === (yV = eV.worldgen) || void 0 === yV || yV.take(xV, UV)
        } catch (QV) {
          VV.crash(TV, QV)
        } else try {
          var pV;
          null === (pV = eV.mesh) || void 0 === pV || pV.take(xV, YV, UV)
        } catch (QV) {
          VV.crash(RV, QV)
        }
      }))
    }
    const DV = 1048576;

    function iV(VV, eV) {
      let xV = !1;
      const JV = () => {
        xV = !1, eV()
      };
      return () => {
        !xV && VV.cursor >= DV && (xV = !0, queueMicrotask(JV))
      }
    }
    const CV = new Set([bV, EV, TV, RV]);

    function aV(VV) {
      return GV.has(VV.site) ? VV.error instanceof WebAssembly.RuntimeError || (0, YV.k)(VV.error) : !CV.has(VV.site) && VV.error instanceof Error
    }
    const oV = "events",
      cV = [],
      hV = "debugLog",
      lV = "terrainTextures",
      LV = "sunShadowTextures",
      fV = new TextDecoder;

    function mV(VV, eV) {
      const {
        site: xV,
        error: YV,
        header: UV
      } = VV, yV = UV ? (0, JV.be)(UV.lastError) : "noFrame", pV = `CORE-${xV===bV?yV:xV}`, QV = null === YV || void 0 === YV ? "" : ` ${(0,wV.m)(YV)}`, nV = {
        site: xV,
        wasmBuild: eV.wasm,
        clientVersion: eV.client
      };
      return UV && (nV.status = String(UV.status), nV.lastError = yV, nV.lastErrorCode = String(UV.lastError), nV.lastErrorDetail = String(UV.lastErrorDetail), nV.errorCount = String(UV.errorCount), nV.frameIndex = String(UV.frameIndex), nV.tickIndex = String(UV.tickIndex)), {
        code: pV,
        message: `core ${xV}, last error ${yV};${QV}`,
        details: nV
      }
    }
    class KV {
      constructor(VV, eV, xV) {
        this.core = VV, this.memory = eV, this.handlers = xV, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.loadCountsBuffer = null, this.loadCounts = new Uint32Array(0), this.unsentUiPrefs = null, this.eventWalker = null, this.netOffsets = [], this.frameEvents = {
          ptr: 0,
          len: 0,
          net: cV,
          netOffsets: this.netOffsets,
          kind: "none"
        }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.atSendsStop = !1, this.rings = new nV(VV, eV)
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
      framePaces(VV) {
        if (this.stopped || this.drawsHeld) return !1;
        try {
          return this.core.ypV(VV)
        } catch (eV) {
          return this.crash(kV, eV), !1
        }
      }
      get isStopped() {
        return this.stopped
      }
      frame(VV, eV) {
        var xV;
        let UV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.stopped) return !1;
        if (!this.writePendingInput()) return !1;
        const {
          input: yV,
          net: pV,
          worker: QV,
          cmd: nV
        } = this.rings, wV = pV.cursor, ZV = eV && !this.drawsHeld;
        let EV = JV.Q.Fatal;
        const BV = yV.cursor,
          qV = QV.cursor,
          tV = nV.cursor;
        let FV, TV = null;
        const NV = this.handlers.onSends;
        try {
          const eV = (ZV ? JV.qb.Draws : 0) | (UV ? JV.qb.NetAll : 0) | (NV ? JV.qb.StopForSends : 0);
          EV = (0, rV.i)((() => {
            let xV = this.core.frame(VV, BV, pV.cursor, qV, eV, tV);
            for (; xV === JV.sd && NV;) {
              var YV;
              if (FV ??= null === (YV = this.gameHost) || void 0 === YV ? void 0 : YV.takeFault(), void 0 === FV && !this.takeSends(NV)) return JV.Q.Fatal;
              xV = this.core.UB()
            }
            return xV
          }))
        } catch (fV) {
          TV = {
            error: fV
          }
        }
        FV ??= null === (xV = this.gameHost) || void 0 === xV ? void 0 : xV.takeFault();
        const XV = this.stopped || null !== TV || void 0 !== FV;
        this.rings.reset(XV ? yV.cursor : BV, XV ? QV.cursor : qV, XV ? nV.cursor : tV);
        const MV = null === TV && void 0 === FV,
          zV = MV && !this.stopped && EV === JV.Q.Fatal && 0 === this.core.Hr(),
          GV = MV && !zV ? this.headerView() : null,
          WV = zV ? {
            ...null !== (RV = this.lastHeader) && void 0 !== RV ? RV : (0, JV.Ae)(new Uint32Array(JV.vb)),
            status: JV.Q.Fatal,
            lastError: JV.M.CoreBusy,
            lastErrorDetail: 0
          } : null === GV ? null : (0, JV.Ae)(GV);
        var RV;
        null !== WV && (this.lastHeader = WV);
        const gV = null !== WV && EV !== JV.Q.Fatal,
          DV = gV && null !== GV ? GV[JV.xb.NetInKept] : 0,
          iV = gV && DV <= wV && DV % 4 === 0 ? DV : null;
        var CV, aV;
        null !== WV && null !== iV && EV === JV.Q.Errors && (null === (CV = (aV = this.handlers).onErrors) || void 0 === CV || CV.call(aV, WV));
        const oV = null === iV ? cV : this.readEvents(wV);
        if (pV.consume(wV - (null !== iV && void 0 !== iV ? iV : 0)), this.netKept = null !== iV && void 0 !== iV ? iV : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== TV) return this.crash(kV, void 0 === FV || FV instanceof YV.d ? TV.error : FV), !1;
        if (void 0 !== FV || null === WV) return this.crashOn(kV, FV), !1;
        if (zV) return this.crash(bV, null), !1;
        const hV = this.headerView()[JV.xb.FrameDraw];
        if (this.lastFrameKind = (0, vV.d)(ZV, hV), EV === JV.Q.Fatal) return this.crash(bV, null), !1;
        if (null === iV) return this.crash(jV, `the core kept ${DV} of ${wV} net-in bytes`), !1;
        if (this.eventWalker) {
          if (this.stopped) return !1;
          const VV = this.frameEvents,
            eV = this.headerView();
          VV.ptr = eV[JV.xb.EventsPtr], VV.len = eV[JV.xb.EventsLen], VV.net = oV, VV.kind = this.lastFrameKind;
          try {
            this.eventWalker(VV)
          } catch (fV) {
            return this.crashOn(PV, fV), !1
          }
          return this.handEnvEvents()
        }
        for (const JV of oV) {
          if (this.stopped) return !1;
          try {
            var lV, LV;
            null === (lV = (LV = this.handlers).onNetEvent) || void 0 === lV || lV.call(LV, JV)
          } catch (fV) {
            return this.crashOn(AV, fV), !1
          }
        }
        return this.handEnvEvents()
      }
      handEnvEvents() {
        for (const UV of this.graceEvents) {
          if (this.stopped) return !1;
          try {
            var VV, eV;
            null === (VV = (eV = this.handlers).onReconnectGrace) || void 0 === VV || VV.call(eV, UV)
          } catch (YV) {
            return this.crashOn(AV, YV), !1
          }
        }
        for (const UV of this.envEvents) {
          if (this.stopped) return !1;
          try {
            var xV, JV;
            null === (xV = (JV = this.handlers).onEnvEvent) || void 0 === xV || xV.call(JV, UV)
          } catch (YV) {
            return this.crashOn(NV, YV), !1
          }
        }
        return !this.stopped
      }
      setEventWalker(VV) {
        this.eventWalker = VV
      }
      writePendingInput() {
        if (this.stopped) return !1;
        const {
          input: VV
        } = this.rings;
        try {
          const eV = this.unsentUiPrefs;
          eV && VV.writeRecord(JV.Gb.UiPrefs, 0, eV.nametagCutDistance, 0, (0, JV.Be)(eV)) && (this.unsentUiPrefs = null);
          const xV = this.unsentEnvPrefs;
          xV && VV.writeRecord(JV.Gb.EnvPrefs, (0, JV.fe)(xV), xV.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
          const YV = this.unsentLookPrefs;
          YV && VV.writeRecord(JV.Gb.Sensitivity, 0, YV.mouse, YV.touch, (0, ZV.k)(YV.fovPercent)) && (this.unsentLookPrefs = null);
          let UV = 0;
          for (const {
              aux: JV,
              payload: yV
            }
            of this.unsentOptions) {
            if (!VV.writeOptions(JV, yV)) {
              if (VV.cursor > 0) break;
              this.optionsDropped++
            }
            UV++
          }
          UV > 0 && this.unsentOptions.splice(0, UV)
        } catch (eV) {
          return this.crash(BV, eV), !1
        }
        return !0
      }
      setHoldDraws(VV) {
        this.drawsHeld = VV
      }
      setUiPrefs(VV) {
        this.unsentUiPrefs = {
          ...VV
        }
      }
      setEnvPrefs(VV) {
        this.unsentEnvPrefs = {
          ...VV
        }
      }
      setLookPrefs(VV) {
        this.unsentLookPrefs = {
          ...VV
        }
      }
      queueOptions(VV, eV) {
        return !this.isStopped && (eV.byteLength > JV.jc.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
          aux: VV,
          payload: eV
        }), !0))
      }
      setChunkCap(VV) {
        return this.callCore("setChunkCap", null, (eV => eV.WpV(VV)))
      }
      shedMemory(VV) {
        const eV = this.callCore("shedMemory", null, (eV => eV.opV(VV)));
        return 0 === eV ? null : eV
      }
      addDistanceInUse() {
        const VV = this.callCore("addDistanceInUse", null, (VV => VV.HyV()));
        return 0 === VV ? null : VV
      }
      setChunkAddDistance(VV, eV) {
        return this.callCore("setChunkAddDistance", !1, (xV => xV.GpV(VV, eV)))
      }
      setGameHost(VV) {
        return this.callCore("setGameHost", !1, (eV => (eV.UpV(VV), this.gameHost = VV, !0)))
      }
      setAntiCheatProbes(VV) {
        return this.callCore("setAntiCheatProbes", !1, (eV => eV.MpV(VV)))
      }
      setAmbientOcclusion(VV) {
        this.callCore("setAmbientOcclusion", void 0, (eV => {
          eV.XpV(VV)
        }))
      }
      setPoseLod(VV) {
        this.callCore("setPoseLod", void 0, (eV => {
          eV.gpV(VV)
        }))
      }
      setDebugLog(VV, eV) {
        this.callCore(hV, void 0, (xV => {
          xV.VB(VV, eV)
        }))
      }
      takeDebugLog(VV) {
        return this.callCore(hV, [], (eV => eV.eB(VV)))
      }
      setTextureLayers(VV) {
        return this.callCore("setTextureLayers", !1, (eV => eV.apV(VV)))
      }
      setBlockColours(VV) {
        let {
          blocks: eV,
          counts: xV,
          values: JV
        } = VV;
        return this.callCore("setBlockColours", !1, (VV => VV.TYV(eV, xV, JV)))
      }
      terrainTextureNames() {
        return this.callCore(lV, [], (VV => VV.fpV()))
      }
      setTerrainTextures(VV, eV, xV, JV) {
        return this.callCore(lV, !1, (YV => YV.CpV(VV, xV, eV, JV)))
      }
      setShaderPack(VV, eV, xV, JV, YV, UV) {
        return this.callCore("setShaderPack", !1, (yV => {
          var pV, QV;
          return null !== (pV = null === (QV = yV.DYV) || void 0 === QV ? void 0 : QV.call(yV, VV, eV, xV, JV, YV, UV)) && void 0 !== pV && pV
        }))
      }
      sunShadowWantedTextures() {
        return this.callCore(LV, null, (VV => {
          var eV, xV;
          return null !== (eV = null === (xV = VV.cpV) || void 0 === xV ? void 0 : xV.call(VV)) && void 0 !== eV ? eV : null
        }))
      }
      setSunShadowTexture(VV, eV, xV, JV, YV) {
        this.callCore(LV, void 0, (UV => {
          var yV;
          null === (yV = UV.ipV) || void 0 === yV || yV.call(UV, VV, eV, xV, JV, YV)
        }))
      }
      takeSunShadowWarnings() {
        return this.callCore(LV, [], (VV => {
          var eV, xV;
          return null !== (eV = null === (xV = VV.lpV) || void 0 === xV ? void 0 : xV.call(VV)) && void 0 !== eV ? eV : []
        }))
      }
      sunShadowsHeld() {
        return this.callCore(LV, null, (VV => {
          var eV, xV;
          return null !== (eV = null === (xV = VV.hpV) || void 0 === xV ? void 0 : xV.call(VV)) && void 0 !== eV ? eV : null
        }))
      }
      callCore(VV, eV, xV) {
        if (this.stopped) return eV;
        try {
          return xV(this.core)
        } catch (JV) {
          return this.crash(VV, JV), eV
        }
      }
      readEvents(VV) {
        this.netOffsets.length = 0;
        const eV = this.headerView(),
          xV = eV[JV.xb.EventsPtr],
          YV = eV[JV.xb.EventsLen];
        if (this.envEvents.length = 0, this.graceEvents.length = 0, 0 === YV) return cV;
        const UV = [],
          yV = this.memory().buffer;
        if (xV % 4 !== 0 || xV + YV > yV.byteLength) return this.crash(oV, `events of ${YV} bytes at ${xV} outside ${yV.byteLength} bytes of memory`), cV;
        const pV = new DataView(yV, xV, YV),
          QV = this.rings.net,
          nV = (eV, xV) => eV + xV <= VV ? QV.copyWritten(eV, xV) : null;
        let wV = 0;
        for (; wV < YV;) {
          const VV = wV + JV.db,
            eV = VV <= YV ? pV.getUint32(wV, !0) : -1,
            QV = eV >>> 16;
          if (eV < 0 || QV > YV - VV) return this.crash(oV, `event record at ${wV} overruns its ${YV} bytes`), cV;
          const MV = 65535 & eV,
            zV = eV => pV.getUint32(VV + 4 * eV, !0);
          if (MV === JV.hb.RawMessage) {
            const VV = QV >= JV.Uc.BYTES ? 65535 & zV(1) : -1,
              eV = VV === JV.Uc.STRING_TYPE,
              xV = QV === (eV ? JV.Uc.STRING_TYPE_BYTES : JV.Uc.BYTES) ? nV(zV(2), zV(3)) : null,
              YV = eV && xV ? nV(zV(4), zV(5)) : null;
            if (!xV || eV && !YV) return this.crash(oV, `RawMessage at ${wV} of ${QV} bytes names bytes outside net-in`), cV;
            this.netOffsets.push(wV), UV.push({
              type: "message",
              conn: zV(0),
              yZ: VV,
              payloadKind: zV(1) >>> 16,
              payload: xV,
              stringType: YV ? fV.decode(YV) : null
            })
          } else if (MV === JV.hb.CoreErrors) {
            var ZV, vV;
            const VV = QV >= 4 ? zV(0) : -1;
            if (VV < 0 || VV > JV.L.PAIRS_MAX || QV !== 4 * (JV.L.FIXED_WORDS + JV.L.PAIR_WORDS * VV)) return this.crash(oV, `CoreErrors at ${wV} of ${QV} bytes`), cV;
            const eV = [];
            for (let xV = 0; xV < VV; xV++) eV.push({
              code: zV(1 + 2 * xV),
              detail: zV(2 + 2 * xV)
            });
            null === (ZV = (vV = this.handlers).onCoreErrors) || void 0 === ZV || ZV.call(vV, eV, zV(1 + 2 * VV))
          } else if (MV === JV.hb.RenderReload) {
            var rV, kV;
            if (QV !== JV.bd.BYTES) return this.crash(oV, `RenderReload at ${wV} of ${QV} bytes`), cV;
            null === (rV = (kV = this.handlers).onRenderReload) || void 0 === rV || rV.call(kV, zV(0), zV(1), zV(2))
          } else if (MV === JV.hb.JoinPreloadEnded) {
            var bV, EV;
            if (QV !== JV.Lb.BYTES) return this.crash(oV, `JoinPreloadEnded at ${wV} of ${QV} bytes`), cV;
            null === (bV = (EV = this.handlers).onJoinPreloadEnded) || void 0 === bV || bV.call(EV, {
              chunks: zV(JV.Lb.CHUNKS),
              bytes: zV(JV.Lb.BYTES_HELD),
              asked: zV(JV.Lb.ASKED),
              replaced: zV(JV.Lb.REPLACED),
              dropped: zV(JV.Lb.DROPPED)
            })
          } else if (MV === JV.hb.Images) {
            var BV, jV;
            null === (BV = (jV = this.handlers).onImages) || void 0 === BV || BV.call(jV, new Uint8Array(yV.slice(xV + VV, xV + VV + QV)))
          } else if (MV === JV.hb.ModelRequests)
            for (let xV = 0; xV < QV >>> 2; xV++) {
              var qV, tV;
              null === (qV = (tV = this.handlers).onModelRequest) || void 0 === qV || qV.call(tV, zV(xV))
            } else if (MV === JV.hb.ModelTaken) {
              var FV, TV;
              if (QV < 4) return this.crash(oV, `ModelTaken at ${wV} of ${QV} bytes`), cV;
              const VV = new Uint32Array((QV >>> 2) - 1);
              for (let eV = 0; eV < VV.length; eV++) VV[eV] = zV(1 + eV);
              null === (FV = (TV = this.handlers).onModelTaken) || void 0 === FV || FV.call(TV, zV(0), VV)
            } else if (MV === JV.hb.TerrainTexturesWanted) {
            var PV, AV;
            if (0 !== QV) return this.crash(oV, `TerrainTexturesWanted at ${wV} of ${QV} bytes`), cV;
            null === (PV = (AV = this.handlers).onTerrainTexturesWanted) || void 0 === PV || PV.call(AV)
          } else if (MV === JV.hb.KeepAliveDue) {
            var NV, XV;
            if (QV > JV.Mb) return this.crash(oV, `KeepAliveDue at ${wV} of ${QV} bytes`), cV;
            null === (NV = (XV = this.handlers).onKeepAlive) || void 0 === NV || NV.call(XV, new Uint8Array(yV, xV + VV, QV).slice())
          } else if (MV === JV.hb.ConnectionState) {
            if (QV !== JV.B) return this.crash(oV, `ConnectionState at ${wV} of ${QV} bytes`), cV;
            this.netOffsets.push(wV), UV.push({
              type: "connection",
              conn: zV(0),
              phase: zV(1),
              code: 0 | zV(2)
            })
          } else if (MV === JV.hb.EnvLighting || MV === JV.hb.SkyImages) {
            if (QV !== (MV === JV.hb.EnvLighting ? JV.ab : JV.wd)) return this.crash(oV, `event ${MV} at ${wV} of ${QV} bytes`), cV;
            this.envEvents.push({
              kind: MV,
              payload: new Uint8Array(yV.slice(xV + VV, xV + VV + QV))
            })
          } else if (MV === JV.hb.ReconnectGrace) {
            if (QV !== JV.yc) return this.crash(oV, `ReconnectGrace at ${wV} of ${QV} bytes`), cV;
            const VV = zV(2);
            this.graceEvents.push({
              conn: zV(0),
              graceMs: zV(1),
              sessionBased: 0 !== (VV & JV.Vc.SessionBased),
              replayOffer: 0 !== (VV & JV.Vc.ReplayOffer)
            })
          }
          wV = VV + (0, JV.ze)(QV)
        }
        return UV
      }
      takeSends(VV) {
        this.atSendsStop = !0;
        try {
          VV()
        } catch (eV) {
          this.crashOn(zV, eV)
        } finally {
          this.atSendsStop = !1
        }
        return !this.stopped
      }
      forEachNetOut(VV) {
        this.forEachOut(tV, "net-out", JV.xb.NetOutPtr, JV.xb.NetOutLen, JV.ec, 0, ((eV, xV, YV, UV) => {
          const yV = (0, JV.oe)(xV);
          yV === JV.fc.Frame ? VV((0, JV.ne)(xV), YV) : this.crash(tV, `net-out record at ${UV} is kind ${yV}, not a frame`)
        }))
      }
      forEachWorkerOut(VV) {
        this.forEachOut(FV, "worker-out", JV.xb.WorkerOutPtr, JV.xb.WorkerOutLen, JV.Jd, 4, ((eV, xV, YV, UV) => {
          const yV = 255 & eV,
            pV = yV === JV.Xd.Init ? this.initOf(YV, UV) : YV;
          null !== pV && VV(yV, eV >>> 8 & 16777215, pV)
        }))
      }
      initOf(VV, eV) {
        const xV = this.memory().buffer;
        if (VV.byteLength !== JV.yb) return this.crash(FV, `worker-out Init record at ${eV} is ${VV.byteLength} bytes, not a view`), null;
        const YV = new DataView(VV.buffer, VV.byteOffset, JV.yb),
          UV = YV.getUint32(0, !0),
          yV = YV.getUint32(4, !0);
        return UV + yV > xV.byteLength ? (this.crash(FV, `worker-out Init record at ${eV} names ${yV} bytes at ${UV} outside ${xV.byteLength} bytes of memory`), null) : new Uint8Array(xV, UV, yV)
      }
      forEachOut(VV, eV, xV, YV, UV, yV, pV) {
        if (!this.headerReadable()) return;
        const QV = this.headerView(),
          nV = QV[xV],
          wV = QV[YV];
        if (0 === wV) return;
        const ZV = this.memory().buffer;
        if (nV % 4 !== 0 || nV + wV > ZV.byteLength) return void this.crash(VV, `${eV} of ${wV} bytes at ${nV} outside ${ZV.byteLength} bytes of memory`);
        const vV = new DataView(ZV, nV, wV);
        let rV = 0;
        for (; rV < wV;) {
          const xV = rV + UV,
            YV = xV <= wV ? vV.getUint32(rV + yV, !0) : -1;
          if (YV < 0 || YV > wV - xV) return void this.crash(VV, `${eV} record at ${rV} overruns its ${wV} bytes`);
          if (pV(vV.getUint32(rV, !0), vV.getUint32(rV + 4, !0), new Uint8Array(ZV, nV + xV, YV), rV), this.stopped) return;
          rV = xV + (0, JV.ze)(YV)
        }
      }
      forEachEvent(VV) {
        if (this.stopped || null === this.lastHeader) return;
        const eV = this.headerView(),
          xV = eV[JV.xb.EventsPtr],
          YV = eV[JV.xb.EventsLen];
        if (0 === YV) return;
        const UV = this.memory().buffer;
        if (xV % 4 !== 0 || xV + YV > UV.byteLength) return void this.crash(oV, `events of ${YV} bytes at ${xV} outside ${UV.byteLength} bytes of memory`);
        const yV = new DataView(UV, xV, YV);
        let pV = 0;
        for (; pV < YV;) {
          const eV = pV + JV.db,
            xV = eV <= YV ? yV.getUint32(pV, !0) : -1,
            UV = xV >>> 16;
          if (xV < 0 || UV > YV - eV) return void this.crash(oV, `event record at ${pV} overruns its ${YV} bytes`);
          VV(65535 & xV, yV, eV, UV), pV = eV + (0, JV.ze)(UV)
        }
      }
      crashOn(VV, eV) {
        eV instanceof YV.d ? this.crash(oV, eV.message) : this.crash(VV, eV)
      }
      crash(VV, eV) {
        this.stopped || (this.stopped = !0, this.handlers.onCrash({
          site: VV,
          error: eV,
          header: this.lastHeader
        }))
      }
      headerWord(VV) {
        return this.headerReadable() ? this.headerView()[VV] : 0
      }
      headerReadable() {
        return !this.stopped && (null !== this.lastHeader || this.atSendsStop)
      }
      readLoadCounts(VV) {
        const eV = this.loadCountWords();
        return null !== eV && (VV.chunksReceived = eV[JV.Tb.ChunksReceived], VV.chunksCancelled = this.headerView()[JV.xb.ChunksCancelled], VV.chunksStored = eV[JV.Tb.ChunksStored], VV.jobsSent = eV[JV.Tb.JobsSent], VV.jobsDone = eV[JV.Tb.JobsDone], VV.jobsInFlight = eV[JV.Tb.JobsInFlight], VV.workersLive = eV[JV.Tb.WorkersLive], VV.workersRetired = eV[JV.Tb.WorkersRetired], !0)
      }
      readViewQueuedPrograms() {
        var VV, eV;
        const xV = null !== (VV = null === (eV = this.loadCountWords()) || void 0 === eV ? void 0 : eV[JV.Tb.ViewQueuedPrograms]) && void 0 !== VV ? VV : 0;
        return 0 === xV ? null : xV - 1
      }
      readFirstViewWait(VV, eV) {
        const xV = this.loadCountWords();
        return null === xV ? null : [xV[JV.Tb.FirstViewLinkMs], xV[JV.Tb.FirstViewTerrainMs], xV[JV.Tb.FirstViewHeldMs], xV[JV.Tb.FirstViewOtherMs], xV[JV.Tb.FirstViewGaps], xV[JV.Tb.FirstViewGapMs], VV, eV]
      }
      loadCountWords() {
        if (this.stopped || null === this.lastHeader) return null;
        const VV = this.core.OE();
        if (0 === VV) return null;
        const eV = this.memory().buffer;
        return eV !== this.loadCountsBuffer && (this.loadCountsBuffer = eV, this.loadCounts = new Uint32Array(eV, VV, JV.Ob)), this.loadCounts
      }
      headerView() {
        const VV = this.memory().buffer;
        return VV !== this.headerBuffer && (this.headerBuffer = VV, this.header = new Uint32Array(VV, this.core.Hr(), JV.vb)), this.header
      }
    }
  },
  42079: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => yV,
      i: () => UV
    });
    var JV = xV(5180);
    let YV = null;

    function UV(VV) {
      YV = {
        scanned: !1
      };
      try {
        return VV()
      } finally {
        YV = null
      }
    }

    function yV() {
      const VV = YV;
      if (null === VV) return (0, JV.c)();
      const eV = (0, JV.c)(!VV.scanned);
      return VV.scanned = !0, eV
    }
  },
  42125: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => JV
    });
    const JV = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  42140: (VV, eV, xV) => {
    function JV() {
      return xV(42146)
    }

    function YV() {
      return xV(42153)
    }

    function UV(VV) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(VV)
    }
    xV.d(eV, {
      d: () => UV,
      g: () => JV,
      h: () => YV
    })
  },
  37437: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => pV,
      h: () => nV,
      j: () => yV,
      m: () => ZV
    });
    var JV = xV(37422),
      YV = xV(10);
    const UV = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function yV(VV) {
      if (VV instanceof WebAssembly.RuntimeError) return !0;
      const eV = VV instanceof Error ? VV.stack : void 0;
      return "string" === typeof eV && UV.test(eV)
    }

    function pV(VV, eV, xV) {
      var YV;
      const yV = VV instanceof Error ? VV.name : "thrown",
        pV = (VV instanceof Error && null !== (YV = VV.stack) && void 0 !== YV ? YV : "").split("\n").filter((VV => UV.test(VV))).slice(0, 8).map((VV => VV.trim())),
        QV = null === eV ? "wasm memory unknown" : `wasm memory ${Math.round(eV/2**20)} MB`,
        nV = null === xV.panic ? "" : `, panic: ${(0,JV.i)(xV.panic)}`,
        wV = `${yV}: ${VV instanceof Error?VV.message:String(VV)}`;
      return `${(0,JV.l)(xV.kind,xV.refusedBytes)} ${wV} (${QV})${nV}${pV.length>0?` | ${pV.join(" < ")}`:""}`
    }
    const QV = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function nV(VV) {
      var eV;
      let xV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(VV instanceof Error) || !QV.test(VV.message)) return {};
      if (!("detached" in xV)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, YV.R)(null === (eV = (0, YV.L)(xV, "detached")) || void 0 === eV ? void 0 : eV.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const wV = 500;

    function ZV(VV) {
      let eV = "[object Object]";
      try {
        eV = String(VV)
      } catch {}
      if ("[object Object]" !== eV) return eV;
      try {
        var xV, JV;
        return null !== (xV = null === (JV = JSON.stringify(VV)) || void 0 === JV ? void 0 : JV.slice(0, wV)) && void 0 !== xV ? xV : eV
      } catch {
        return eV
      }
    }
  },
  42146: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  42153: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  },
  37422: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => JV,
      e: () => UV,
      i: () => QV,
      j: () => yV,
      l: () => YV
    });
    const JV = /^alloc_failed (\d+) bytes$/;

    function YV(VV, eV) {
      return UV(VV, eV) ? `trap=alloc_failed ${eV} bytes` : `trap=${VV}`
    }

    function UV(VV, eV) {
      return "unreachable" === VV && eV > 0
    }

    function yV(VV, eV, xV) {
      const JV = function(VV) {
        return VV instanceof WebAssembly.RuntimeError ? /unreachable/i.test(VV.message) ? "unreachable" : /out of bounds/i.test(VV.message) ? "out_of_bounds" : "runtime_error" : (VV instanceof RangeError || VV instanceof Error && "InternalError" === VV.name) && /call stack|recursion/i.test(VV.message) ? "stack_overflow" : "js_error"
      }(VV);
      if ("unreachable" !== JV) return {
        kind: JV,
        panic: null,
        refusedBytes: 0
      };
      const YV = eV(),
        UV = xV();
      return {
        kind: JV,
        panic: UV > 0 ? null : YV,
        refusedBytes: UV
      }
    }
    const pV = 300;

    function QV(VV) {
      return VV.replace(/\s*\n\s*/g, " / ").slice(0, pV)
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);