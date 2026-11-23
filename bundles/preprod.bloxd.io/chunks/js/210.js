export const id = 210;
export const ids = [210];
export const modules = {
  40652: (CC, zC, ZC) => {
    function QC(CC, zC, ZC) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(CC, zC).getContext("2d", ZC);
      const QC = document.createElement("canvas");
      return QC.width = CC, QC.height = zC, QC.getContext("2d", ZC)
    }

    function wC(CC, zC) {
      return CC.getContext("2d", zC)
    }
    ZC.d(zC, {
      b: () => wC,
      f: () => QC
    })
  },
  40606: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => fC
    });
    const QC = 1 << 20,
      wC = 1 << 21,
      bC = 1024,
      nC = 2048;

    function fC(CC, zC, ZC) {
      const fC = CC + QC,
        oC = zC + bC,
        qC = ZC + QC;
      return fC < 0 || fC >= wC || qC < 0 || qC >= wC || oC < 0 || oC >= nC ? -1 : (fC * wC + qC) * nC + oC
    }
  },
  40598: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => QC,
      i: () => nC,
      l: () => wC,
      n: () => bC,
      o: () => FC,
      q: () => qC,
      u: () => oC,
      y: () => fC
    });
    ZC(3436);
    ZC(40606);

    function QC(CC) {}

    function wC(CC) {}

    function bC(CC) {}

    function nC(CC) {}

    function fC(CC) {}

    function oC(CC, zC, ZC) {}

    function qC(CC) {}

    function FC(CC) {}
  },
  40590: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => RC,
      e: () => gC,
      f: () => jC,
      h: () => hC,
      i: () => dC,
      m: () => mC,
      q: () => GC,
      u: () => pC,
      w: () => PC,
      x: () => eC,
      A: () => TC,
      B: () => JC,
      E: () => cC,
      I: () => DC,
      K: () => HC,
      L: () => lC
    });
    var QC = ZC(4727),
      wC = ZC(40476),
      bC = (ZC(40598), ZC(10));
    class nC {
      constructor(CC, zC) {
        this.memory = CC, this.access = zC, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.HW = 0, this.u32 = new bC.l(0), this.f32 = new bC.f(0), this.u8 = new bC.b(0), this.dataView = new bC.h(new ArrayBuffer(0)), this.refresh()
      }
      refresh() {
        this.ptr = this.access.ptr(), this.HW = this.access.HW(), this.buffer = (0, bC.F)(this.memory()), this.u32 = new bC.l(this.buffer, this.ptr, this.HW >>> 2), this.f32 = new bC.f(this.buffer, this.ptr, this.HW >>> 2), this.u8 = new bC.b(this.buffer, this.ptr, this.HW), this.dataView = new bC.h(this.buffer, this.ptr, this.HW)
      }
      ensureViews() {
        (0, bC.F)(this.memory()) !== this.buffer && this.refresh()
      }
      get view() {
        return this.ensureViews(), this.dataView
      }
      room(CC) {
        return !!this.fits(CC) || (this.dropped++, !1)
      }
      fits(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.cursor;
        this.ensureViews();
        const ZC = zC + CC;
        return ZC <= this.HW || ZC <= QC.Hc && 0 !== this.access.reserve(ZC) && (this.refresh(), ZC <= this.HW)
      }
      consume(CC) {
        const zC = this.cursor - CC;
        zC > 0 && CC > 0 && (this.ensureViews(), this.u8.copyWithin(0, CC, this.cursor)), this.cursor = zC > 0 ? zC : 0
      }
      writeRecord(CC, zC, ZC, wC, bC) {
        if (!this.room(QC.sb)) return !1;
        const nC = this.cursor >>> 2;
        return this.u32[nC] = 65535 & CC | (65535 & zC) << 16, this.f32[nC + 1] = ZC, this.f32[nC + 2] = wC, this.u32[nC + 3] = bC >>> 0, this.cursor += QC.sb, !0
      }
      writeOptions(CC, zC) {
        const ZC = zC.byteLength,
          wC = QC.sb + (0, QC.pe)(ZC);
        if (!this.fits(wC)) return !1;
        const bC = this.cursor,
          nC = bC >>> 2;
        this.u32[nC] = QC.wb.Options, this.u32[nC + 1] = ZC, this.u32[nC + 2] = 0, this.u32[nC + 3] = CC >>> 0;
        const fC = bC + QC.sb;
        return this.u8.set(zC, fC), this.u8.fill(0, fC + ZC, bC + wC), this.cursor += wC, !0
      }
      writeWorkerRecord(CC, zC, ZC, wC, bC, nC) {
        const fC = nC.byteLength,
          oC = QC.Jd + (0, QC.pe)(fC);
        if (fC > QC.Hd) return this.dropped++, !1;
        if (!this.room(oC)) return !1;
        const qC = this.cursor,
          FC = qC >>> 2;
        this.u32[FC] = CC >>> 0, this.u32[FC + 1] = 65535 & zC | (65535 & ZC) << 16, this.u32[FC + 2] = wC >>> 0, this.u32[FC + 3] = bC >>> 0, this.u32[FC + 4] = fC;
        const WC = qC + QC.Jd;
        return this.u8.set(nC, WC), this.u8.fill(0, WC + fC, qC + oC), this.cursor += oC, !0
      }
      written() {
        return this.ensureViews(), this.u8.subarray(0, this.cursor)
      }
      writeFrame(CC, zC) {
        return this.writeNet(QC.Yb.Frame, CC, zC)
      }
      writeOpen(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(QC.Yb.Open, CC, oC(zC))
      }
      writeClose(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(QC.Yb.Close, CC, oC(zC))
      }
      writeNet(CC, zC, ZC) {
        const wC = ZC.byteLength,
          bC = QC.Wb + (0, QC.pe)(wC);
        if (wC > QC.Qb) return this.dropped++, !1;
        if (!this.room(bC)) return !1;
        const nC = this.cursor;
        this.u32[nC >>> 2] = wC, this.u32[1 + (nC >>> 2)] = (0, QC.me)(CC, zC);
        const fC = nC + QC.Wb;
        return this.u8.set(ZC, fC), this.u8.fill(0, fC + wC, nC + bC), this.cursor += bC, !0
      }
      RM(CC, zC, ZC) {
        const wC = QC.v + (0, QC.pe)(ZC);
        if (!this.room(wC)) return -1;
        const bC = this.cursor;
        this.u32[bC >>> 2] = 65535 & CC | (65535 & zC) << 16, this.u32[1 + (bC >>> 2)] = ZC;
        const nC = bC + QC.v;
        return this.u8.fill(0, nC, bC + wC), this.cursor += wC, nC
      }
      growForCmd(CC) {
        return this.fits(QC.v + (0, QC.pe)(CC), 0)
      }
      writeCmd(CC, zC, ZC) {
        const QC = this.RM(CC, zC, ZC.byteLength);
        return !(QC < 0) && (this.u8.set(ZC, QC), !0)
      }
      copyWritten(CC, zC) {
        return this.ensureViews(), this.u8.slice(CC, CC + zC)
      }
    }
    const fC = new bC.b(0);

    function oC(CC) {
      if (0 === CC) return fC;
      const zC = new bC.b(QC.Tb);
      for (let ZC = 0; ZC < QC.Tb; ZC++) zC[ZC] = CC >>> 8 * ZC & 255;
      return zC
    }
    class qC {
      constructor(CC, zC) {
        this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new nC(zC, {
          ptr: () => CC.yW(),
          HW: () => CC.YbC(),
          reserve: zC => CC.TbC(zC)
        }), this.net = new nC(zC, {
          ptr: () => CC.ubC(),
          HW: () => CC.cbC(),
          reserve: zC => CC.abC(zC)
        }), this.worker = new nC(zC, {
          ptr: () => CC.FnC(),
          HW: () => CC.qnC(),
          reserve: zC => CC.tbC(zC)
        }), this.cmd = new nC(zC, {
          ptr: () => CC.AbC(),
          HW: () => CC.GbC(),
          reserve: zC => CC.RbC(zC)
        })
      }
      reset(CC, zC, ZC) {
        this.input.consume(CC), this.worker.consume(zC), this.cmd.consume(ZC)
      }
    }
    var FC = ZC(36180),
      WC = ZC(2351),
      NC = ZC(4719),
      MC = ZC(40611);
    const gC = "coreFrame",
      SC = "fatalStatus",
      pC = "otherCall",
      PC = "coreRings",
      GC = "netIn",
      RC = "abi",
      AC = "netOut",
      xC = "workerOut",
      JC = "worldgenHost",
      IC = "eventWalker",
      iC = "netEvent",
      vC = "envEvent",
      eC = "sharedTables",
      hC = "inputAction",
      KC = "frameSends",
      YC = new Set([IC, iC, vC, KC, hC, eC]),
      dC = "wasmMemory",
      mC = "meshHost";

    function HC(CC, zC) {
      CC.forEachWorkerOut(((ZC, wC, bC) => {
        if ((0, QC.fe)(ZC)) try {
          var nC;
          null === (nC = zC.worldgen) || void 0 === nC || nC.take(ZC, bC)
        } catch (oC) {
          CC.crash(JC, oC)
        } else try {
          var fC;
          null === (fC = zC.mesh) || void 0 === fC || fC.take(ZC, wC, bC)
        } catch (oC) {
          CC.crash(mC, oC)
        }
      }))
    }
    const EC = 1048576;

    function lC(CC, zC) {
      let ZC = !1;
      const QC = () => {
        ZC = !1, zC()
      };
      return () => {
        !ZC && CC.cursor >= EC && (ZC = !0, queueMicrotask(QC))
      }
    }
    const XC = new Set([SC, pC, JC, mC]);

    function cC(CC) {
      return YC.has(CC.site) ? CC.error instanceof WebAssembly.RuntimeError || (0, wC.h)(CC.error) : !XC.has(CC.site) && CC.error instanceof Error
    }
    const uC = "events",
      rC = [],
      sC = "debugLog",
      TC = "terrainTextures",
      aC = "sunShadowTextures",
      tC = new TextDecoder;

    function DC(CC, zC) {
      const {
        site: ZC,
        error: wC,
        header: bC
      } = CC, nC = bC ? (0, QC.$d)(bC.lastError) : "noFrame", fC = `CORE-${ZC===SC?nC:ZC}`, oC = null === wC || void 0 === wC ? "" : ` ${(0,FC.m)(wC)}`, qC = {
        site: ZC,
        wasmBuild: zC.wasm,
        clientVersion: zC.client
      };
      return bC && (qC.status = String(bC.status), qC.lastError = nC, qC.lastErrorCode = String(bC.lastError), qC.lastErrorDetail = String(bC.lastErrorDetail), qC.errorCount = String(bC.errorCount), qC.frameIndex = String(bC.frameIndex), qC.tickIndex = String(bC.tickIndex)), {
        code: fC,
        message: `core ${ZC}, last error ${nC};${oC}`,
        details: qC
      }
    }
    class jC {
      constructor(CC, zC, ZC) {
        this.core = CC, this.memory = zC, this.handlers = ZC, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.loadCountsBuffer = null, this.loadCounts = new Uint32Array(0), this.unsentUiPrefs = null, this.eventWalker = null, this.netOffsets = [], this.frameEvents = {
          ptr: 0,
          len: 0,
          net: rC,
          netOffsets: this.netOffsets,
          kind: "none"
        }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.atSendsStop = !1, this.rings = new qC(CC, zC)
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
      framePaces(CC) {
        if (this.stopped || this.drawsHeld) return !1;
        try {
          return this.core.ebC(CC)
        } catch (zC) {
          return this.crash(gC, zC), !1
        }
      }
      get isStopped() {
        return this.stopped
      }
      frame(CC, zC) {
        var ZC;
        let bC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.stopped) return !1;
        if (!this.writePendingInput()) return !1;
        const {
          input: nC,
          net: fC,
          worker: oC,
          cmd: qC
        } = this.rings, FC = fC.cursor, WC = zC && !this.drawsHeld;
        let pC = QC.R.Fatal;
        const PC = nC.cursor,
          RC = oC.cursor,
          AC = qC.cursor;
        let xC, JC = null;
        const vC = this.handlers.onSends;
        try {
          const zC = (WC ? QC.ib.Draws : 0) | (bC ? QC.ib.NetAll : 0) | (vC ? QC.ib.StopForSends : 0);
          pC = (0, MC.g)((() => {
            let ZC = this.core.frame(CC, PC, fC.cursor, RC, zC, AC);
            for (; ZC === QC.kd && vC;) {
              var wC;
              if (xC ??= null === (wC = this.gameHost) || void 0 === wC ? void 0 : wC.takeFault(), void 0 === xC && !this.takeSends(vC)) return QC.R.Fatal;
              ZC = this.core.sp()
            }
            return ZC
          }))
        } catch (tC) {
          JC = {
            error: tC
          }
        }
        xC ??= null === (ZC = this.gameHost) || void 0 === ZC ? void 0 : ZC.takeFault();
        const eC = this.stopped || null !== JC || void 0 !== xC;
        this.rings.reset(eC ? nC.cursor : PC, eC ? oC.cursor : RC, eC ? qC.cursor : AC);
        const hC = null === JC && void 0 === xC,
          KC = hC && !this.stopped && pC === QC.R.Fatal && 0 === this.core.AM(),
          YC = hC && !KC ? this.headerView() : null,
          dC = KC ? {
            ...null !== (mC = this.lastHeader) && void 0 !== mC ? mC : (0, QC.re)(new Uint32Array(QC.lb)),
            status: QC.R.Fatal,
            lastError: QC.N.CoreBusy,
            lastErrorDetail: 0
          } : null === YC ? null : (0, QC.re)(YC);
        var mC;
        null !== dC && (this.lastHeader = dC);
        const HC = null !== dC && pC !== QC.R.Fatal,
          EC = HC && null !== YC ? YC[QC.pb.NetInKept] : 0,
          lC = HC && EC <= FC && EC % 4 === 0 ? EC : null;
        var XC, cC;
        null !== dC && null !== lC && pC === QC.R.Errors && (null === (XC = (cC = this.handlers).onErrors) || void 0 === XC || XC.call(cC, dC));
        const uC = null === lC ? rC : this.readEvents(FC);
        if (fC.consume(FC - (null !== lC && void 0 !== lC ? lC : 0)), this.netKept = null !== lC && void 0 !== lC ? lC : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== JC) return this.crash(gC, void 0 === xC || xC instanceof wC.b ? JC.error : xC), !1;
        if (void 0 !== xC || null === dC) return this.crashOn(gC, xC), !1;
        if (KC) return this.crash(SC, null), !1;
        const sC = this.headerView()[QC.pb.FrameDraw];
        if (this.lastFrameKind = (0, NC.f)(WC, sC), pC === QC.R.Fatal) return this.crash(SC, null), !1;
        if (null === lC) return this.crash(GC, `the core kept ${EC} of ${FC} net-in bytes`), !1;
        if (this.eventWalker) {
          if (this.stopped) return !1;
          const CC = this.frameEvents,
            zC = this.headerView();
          CC.ptr = zC[QC.pb.EventsPtr], CC.len = zC[QC.pb.EventsLen], CC.net = uC, CC.kind = this.lastFrameKind;
          try {
            this.eventWalker(CC)
          } catch (tC) {
            return this.crashOn(IC, tC), !1
          }
          return this.handEnvEvents()
        }
        for (const QC of uC) {
          if (this.stopped) return !1;
          try {
            var TC, aC;
            null === (TC = (aC = this.handlers).onNetEvent) || void 0 === TC || TC.call(aC, QC)
          } catch (tC) {
            return this.crashOn(iC, tC), !1
          }
        }
        return this.handEnvEvents()
      }
      handEnvEvents() {
        for (const bC of this.graceEvents) {
          if (this.stopped) return !1;
          try {
            var CC, zC;
            null === (CC = (zC = this.handlers).onReconnectGrace) || void 0 === CC || CC.call(zC, bC)
          } catch (wC) {
            return this.crashOn(iC, wC), !1
          }
        }
        for (const bC of this.envEvents) {
          if (this.stopped) return !1;
          try {
            var ZC, QC;
            null === (ZC = (QC = this.handlers).onEnvEvent) || void 0 === ZC || ZC.call(QC, bC)
          } catch (wC) {
            return this.crashOn(vC, wC), !1
          }
        }
        return !this.stopped
      }
      setEventWalker(CC) {
        this.eventWalker = CC
      }
      writePendingInput() {
        if (this.stopped) return !1;
        const {
          input: CC
        } = this.rings;
        try {
          const zC = this.unsentUiPrefs;
          zC && CC.writeRecord(QC.wb.UiPrefs, 0, zC.nametagCutDistance, 0, (0, QC.ve)(zC)) && (this.unsentUiPrefs = null);
          const ZC = this.unsentEnvPrefs;
          ZC && CC.writeRecord(QC.wb.EnvPrefs, (0, QC.be)(ZC), ZC.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
          const wC = this.unsentLookPrefs;
          wC && CC.writeRecord(QC.wb.Sensitivity, 0, wC.mouse, wC.touch, (0, WC.j)(wC.fovPercent)) && (this.unsentLookPrefs = null);
          let bC = 0;
          for (const {
              aux: QC,
              payload: nC
            }
            of this.unsentOptions) {
            if (!CC.writeOptions(QC, nC)) {
              if (CC.cursor > 0) break;
              this.optionsDropped++
            }
            bC++
          }
          bC > 0 && this.unsentOptions.splice(0, bC)
        } catch (zC) {
          return this.crash(PC, zC), !1
        }
        return !0
      }
      setHoldDraws(CC) {
        this.drawsHeld = CC
      }
      setUiPrefs(CC) {
        this.unsentUiPrefs = {
          ...CC
        }
      }
      setEnvPrefs(CC) {
        this.unsentEnvPrefs = {
          ...CC
        }
      }
      setLookPrefs(CC) {
        this.unsentLookPrefs = {
          ...CC
        }
      }
      queueOptions(CC, zC) {
        return !this.isStopped && (zC.byteLength > QC.dc.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
          aux: CC,
          payload: zC
        }), !0))
      }
      setChunkCap(CC) {
        return this.callCore("setChunkCap", null, (zC => zC.BbC(CC)))
      }
      shedMemory(CC) {
        const zC = this.callCore("shedMemory", null, (zC => zC.QnC(CC)));
        return 0 === zC ? null : zC
      }
      addDistanceInUse() {
        const CC = this.callCore("addDistanceInUse", null, (CC => CC.MbC()));
        return 0 === CC ? null : CC
      }
      setChunkAddDistance(CC, zC) {
        return this.callCore("setChunkAddDistance", !1, (ZC => ZC.UbC(CC, zC)))
      }
      setGameHost(CC) {
        return this.callCore("setGameHost", !1, (zC => (zC.vbC(CC), this.gameHost = CC, !0)))
      }
      setAntiCheatProbes(CC) {
        return this.callCore("setAntiCheatProbes", !1, (zC => zC.ybC(CC)))
      }
      setAmbientOcclusion(CC) {
        this.callCore("setAmbientOcclusion", void 0, (zC => {
          zC.jbC(CC)
        }))
      }
      setPoseLod(CC) {
        this.callCore("setPoseLod", void 0, (zC => {
          zC.kbC(CC)
        }))
      }
      setDebugLog(CC, zC) {
        this.callCore(sC, void 0, (ZC => {
          ZC.Ep(CC, zC)
        }))
      }
      takeDebugLog(CC) {
        return this.callCore(sC, [], (zC => zC.lp(CC)))
      }
      setTextureLayers(CC) {
        return this.callCore("setTextureLayers", !1, (zC => zC.ZnC(CC)))
      }
      setBlockColours(CC) {
        let {
          blocks: zC,
          counts: ZC,
          values: QC
        } = CC;
        return this.callCore("setBlockColours", !1, (CC => CC.tZC(zC, ZC, QC)))
      }
      terrainTextureNames() {
        return this.callCore(TC, [], (CC => CC.onC()))
      }
      setTerrainTextures(CC, zC, ZC, QC) {
        return this.callCore(TC, !1, (wC => wC.znC(CC, ZC, zC, QC)))
      }
      setShaderPack(CC, zC, ZC, QC, wC, bC) {
        return this.callCore("setShaderPack", !1, (nC => {
          var fC, oC;
          return null !== (fC = null === (oC = nC.ZQC) || void 0 === oC ? void 0 : oC.call(nC, CC, zC, ZC, QC, wC, bC)) && void 0 !== fC && fC
        }))
      }
      sunShadowWantedTextures() {
        return this.callCore(aC, null, (CC => {
          var zC, ZC;
          return null !== (zC = null === (ZC = CC.wnC) || void 0 === ZC ? void 0 : ZC.call(CC)) && void 0 !== zC ? zC : null
        }))
      }
      setSunShadowTexture(CC, zC, ZC, QC, wC) {
        this.callCore(aC, void 0, (bC => {
          var nC;
          null === (nC = bC.CnC) || void 0 === nC || nC.call(bC, CC, zC, ZC, QC, wC)
        }))
      }
      takeSunShadowWarnings() {
        return this.callCore(aC, [], (CC => {
          var zC, ZC;
          return null !== (zC = null === (ZC = CC.nnC) || void 0 === ZC ? void 0 : ZC.call(CC)) && void 0 !== zC ? zC : []
        }))
      }
      sunShadowsHeld() {
        return this.callCore(aC, null, (CC => {
          var zC, ZC;
          return null !== (zC = null === (ZC = CC.bnC) || void 0 === ZC ? void 0 : ZC.call(CC)) && void 0 !== zC ? zC : null
        }))
      }
      callCore(CC, zC, ZC) {
        if (this.stopped) return zC;
        try {
          return ZC(this.core)
        } catch (QC) {
          return this.crash(CC, QC), zC
        }
      }
      readEvents(CC) {
        this.netOffsets.length = 0;
        const zC = this.headerView(),
          ZC = zC[QC.pb.EventsPtr],
          wC = zC[QC.pb.EventsLen];
        if (this.envEvents.length = 0, this.graceEvents.length = 0, 0 === wC) return rC;
        const bC = [],
          nC = this.memory().buffer;
        if (ZC % 4 !== 0 || ZC + wC > nC.byteLength) return this.crash(uC, `events of ${wC} bytes at ${ZC} outside ${nC.byteLength} bytes of memory`), rC;
        const fC = new DataView(nC, ZC, wC),
          oC = this.rings.net,
          qC = (zC, ZC) => zC + ZC <= CC ? oC.copyWritten(zC, ZC) : null;
        let FC = 0;
        for (; FC < wC;) {
          const CC = FC + QC.$,
            zC = CC <= wC ? fC.getUint32(FC, !0) : -1,
            oC = zC >>> 16;
          if (zC < 0 || oC > wC - CC) return this.crash(uC, `event record at ${FC} overruns its ${wC} bytes`), rC;
          const hC = 65535 & zC,
            KC = zC => fC.getUint32(CC + 4 * zC, !0);
          if (hC === QC.ab.RawMessage) {
            const CC = oC >= QC.Kc.BYTES ? 65535 & KC(1) : -1,
              zC = CC === QC.Kc.STRING_TYPE,
              ZC = oC === (zC ? QC.Kc.STRING_TYPE_BYTES : QC.Kc.BYTES) ? qC(KC(2), KC(3)) : null,
              wC = zC && ZC ? qC(KC(4), KC(5)) : null;
            if (!ZC || zC && !wC) return this.crash(uC, `RawMessage at ${FC} of ${oC} bytes names bytes outside net-in`), rC;
            this.netOffsets.push(FC), bC.push({
              type: "message",
              conn: KC(0),
              cq: CC,
              payloadKind: KC(1) >>> 16,
              payload: ZC,
              stringType: wC ? tC.decode(wC) : null
            })
          } else if (hC === QC.ab.CoreErrors) {
            var WC, NC;
            const CC = oC >= 4 ? KC(0) : -1;
            if (CC < 0 || CC > QC.M.PAIRS_MAX || oC !== 4 * (QC.M.FIXED_WORDS + QC.M.PAIR_WORDS * CC)) return this.crash(uC, `CoreErrors at ${FC} of ${oC} bytes`), rC;
            const zC = [];
            for (let ZC = 0; ZC < CC; ZC++) zC.push({
              code: KC(1 + 2 * ZC),
              detail: KC(2 + 2 * ZC)
            });
            null === (WC = (NC = this.handlers).onCoreErrors) || void 0 === WC || WC.call(NC, zC, KC(1 + 2 * CC))
          } else if (hC === QC.ab.RenderReload) {
            var MC, gC;
            if (oC !== QC.Vc.BYTES) return this.crash(uC, `RenderReload at ${FC} of ${oC} bytes`), rC;
            null === (MC = (gC = this.handlers).onRenderReload) || void 0 === MC || MC.call(gC, KC(0), KC(1), KC(2))
          } else if (hC === QC.ab.JoinPreloadEnded) {
            var SC, pC;
            if (oC !== QC.Bb.BYTES) return this.crash(uC, `JoinPreloadEnded at ${FC} of ${oC} bytes`), rC;
            null === (SC = (pC = this.handlers).onJoinPreloadEnded) || void 0 === SC || SC.call(pC, {
              chunks: KC(QC.Bb.CHUNKS),
              bytes: KC(QC.Bb.BYTES_HELD),
              asked: KC(QC.Bb.ASKED),
              replaced: KC(QC.Bb.REPLACED),
              dropped: KC(QC.Bb.DROPPED)
            })
          } else if (hC === QC.ab.Images) {
            var PC, GC;
            null === (PC = (GC = this.handlers).onImages) || void 0 === PC || PC.call(GC, new Uint8Array(nC.slice(ZC + CC, ZC + CC + oC)))
          } else if (hC === QC.ab.ModelRequests)
            for (let ZC = 0; ZC < oC >>> 2; ZC++) {
              var RC, AC;
              null === (RC = (AC = this.handlers).onModelRequest) || void 0 === RC || RC.call(AC, KC(ZC))
            } else if (hC === QC.ab.ModelTaken) {
              var xC, JC;
              if (oC < 4) return this.crash(uC, `ModelTaken at ${FC} of ${oC} bytes`), rC;
              const CC = new Uint32Array((oC >>> 2) - 1);
              for (let zC = 0; zC < CC.length; zC++) CC[zC] = KC(1 + zC);
              null === (xC = (JC = this.handlers).onModelTaken) || void 0 === xC || xC.call(JC, KC(0), CC)
            } else if (hC === QC.ab.TerrainTexturesWanted) {
            var IC, iC;
            if (0 !== oC) return this.crash(uC, `TerrainTexturesWanted at ${FC} of ${oC} bytes`), rC;
            null === (IC = (iC = this.handlers).onTerrainTexturesWanted) || void 0 === IC || IC.call(iC)
          } else if (hC === QC.ab.KeepAliveDue) {
            var vC, eC;
            if (oC > QC.Cb) return this.crash(uC, `KeepAliveDue at ${FC} of ${oC} bytes`), rC;
            null === (vC = (eC = this.handlers).onKeepAlive) || void 0 === vC || vC.call(eC, new Uint8Array(nC, ZC + CC, oC).slice())
          } else if (hC === QC.ab.ConnectionState) {
            if (oC !== QC.x) return this.crash(uC, `ConnectionState at ${FC} of ${oC} bytes`), rC;
            this.netOffsets.push(FC), bC.push({
              type: "connection",
              conn: KC(0),
              phase: KC(1),
              code: 0 | KC(2)
            })
          } else if (hC === QC.ab.EnvLighting || hC === QC.ab.SkyImages) {
            if (oC !== (hC === QC.ab.EnvLighting ? QC._ : QC.od)) return this.crash(uC, `event ${hC} at ${FC} of ${oC} bytes`), rC;
            this.envEvents.push({
              kind: hC,
              payload: new Uint8Array(nC.slice(ZC + CC, ZC + CC + oC))
            })
          } else if (hC === QC.ab.ReconnectGrace) {
            if (oC !== QC.oc) return this.crash(uC, `ReconnectGrace at ${FC} of ${oC} bytes`), rC;
            const CC = KC(2);
            this.graceEvents.push({
              conn: KC(0),
              graceMs: KC(1),
              sessionBased: 0 !== (CC & QC.Lc.SessionBased),
              replayOffer: 0 !== (CC & QC.Lc.ReplayOffer)
            })
          }
          FC = CC + (0, QC.pe)(oC)
        }
        return bC
      }
      takeSends(CC) {
        this.atSendsStop = !0;
        try {
          CC()
        } catch (zC) {
          this.crashOn(KC, zC)
        } finally {
          this.atSendsStop = !1
        }
        return !this.stopped
      }
      forEachNetOut(CC) {
        this.forEachOut(AC, "net-out", QC.pb.NetOutPtr, QC.pb.NetOutLen, QC.Wb, 0, ((zC, ZC, wC, bC) => {
          const nC = (0, QC.je)(ZC);
          nC === QC.Yb.Frame ? CC((0, QC.ge)(ZC), wC) : this.crash(AC, `net-out record at ${bC} is kind ${nC}, not a frame`)
        }))
      }
      forEachWorkerOut(CC) {
        this.forEachOut(xC, "worker-out", QC.pb.WorkerOutPtr, QC.pb.WorkerOutLen, QC.Dd, 4, ((zC, ZC, wC, bC) => {
          const nC = 255 & zC,
            fC = nC === QC.Rd.Init ? this.initOf(wC, bC) : wC;
          null !== fC && CC(nC, zC >>> 8 & 16777215, fC)
        }))
      }
      initOf(CC, zC) {
        const ZC = this.memory().buffer;
        if (CC.byteLength !== QC.qb) return this.crash(xC, `worker-out Init record at ${zC} is ${CC.byteLength} bytes, not a view`), null;
        const wC = new DataView(CC.buffer, CC.byteOffset, QC.qb),
          bC = wC.getUint32(0, !0),
          nC = wC.getUint32(4, !0);
        return bC + nC > ZC.byteLength ? (this.crash(xC, `worker-out Init record at ${zC} names ${nC} bytes at ${bC} outside ${ZC.byteLength} bytes of memory`), null) : new Uint8Array(ZC, bC, nC)
      }
      forEachOut(CC, zC, ZC, wC, bC, nC, fC) {
        if (!this.headerReadable()) return;
        const oC = this.headerView(),
          qC = oC[ZC],
          FC = oC[wC];
        if (0 === FC) return;
        const WC = this.memory().buffer;
        if (qC % 4 !== 0 || qC + FC > WC.byteLength) return void this.crash(CC, `${zC} of ${FC} bytes at ${qC} outside ${WC.byteLength} bytes of memory`);
        const NC = new DataView(WC, qC, FC);
        let MC = 0;
        for (; MC < FC;) {
          const ZC = MC + bC,
            wC = ZC <= FC ? NC.getUint32(MC + nC, !0) : -1;
          if (wC < 0 || wC > FC - ZC) return void this.crash(CC, `${zC} record at ${MC} overruns its ${FC} bytes`);
          if (fC(NC.getUint32(MC, !0), NC.getUint32(MC + 4, !0), new Uint8Array(WC, qC + ZC, wC), MC), this.stopped) return;
          MC = ZC + (0, QC.pe)(wC)
        }
      }
      forEachEvent(CC) {
        if (this.stopped || null === this.lastHeader) return;
        const zC = this.headerView(),
          ZC = zC[QC.pb.EventsPtr],
          wC = zC[QC.pb.EventsLen];
        if (0 === wC) return;
        const bC = this.memory().buffer;
        if (ZC % 4 !== 0 || ZC + wC > bC.byteLength) return void this.crash(uC, `events of ${wC} bytes at ${ZC} outside ${bC.byteLength} bytes of memory`);
        const nC = new DataView(bC, ZC, wC);
        let fC = 0;
        for (; fC < wC;) {
          const zC = fC + QC.$,
            ZC = zC <= wC ? nC.getUint32(fC, !0) : -1,
            bC = ZC >>> 16;
          if (ZC < 0 || bC > wC - zC) return void this.crash(uC, `event record at ${fC} overruns its ${wC} bytes`);
          CC(65535 & ZC, nC, zC, bC), fC = zC + (0, QC.pe)(bC)
        }
      }
      crashOn(CC, zC) {
        zC instanceof wC.b ? this.crash(uC, zC.message) : this.crash(CC, zC)
      }
      crash(CC, zC) {
        this.stopped || (this.stopped = !0, this.handlers.onCrash({
          site: CC,
          error: zC,
          header: this.lastHeader
        }))
      }
      headerWord(CC) {
        return this.headerReadable() ? this.headerView()[CC] : 0
      }
      headerReadable() {
        return !this.stopped && (null !== this.lastHeader || this.atSendsStop)
      }
      readLoadCounts(CC) {
        const zC = this.loadCountWords();
        return null !== zC && (CC.chunksReceived = zC[QC.Jb.ChunksReceived], CC.chunksCancelled = this.headerView()[QC.pb.ChunksCancelled], CC.chunksStored = zC[QC.Jb.ChunksStored], CC.jobsSent = zC[QC.Jb.JobsSent], CC.jobsDone = zC[QC.Jb.JobsDone], CC.jobsInFlight = zC[QC.Jb.JobsInFlight], CC.workersLive = zC[QC.Jb.WorkersLive], CC.workersRetired = zC[QC.Jb.WorkersRetired], !0)
      }
      readViewQueuedPrograms() {
        var CC, zC;
        const ZC = null !== (CC = null === (zC = this.loadCountWords()) || void 0 === zC ? void 0 : zC[QC.Jb.ViewQueuedPrograms]) && void 0 !== CC ? CC : 0;
        return 0 === ZC ? null : ZC - 1
      }
      loadCountWords() {
        if (this.stopped || null === this.lastHeader) return null;
        const CC = this.core.Hp();
        if (0 === CC) return null;
        const zC = this.memory().buffer;
        return zC !== this.loadCountsBuffer && (this.loadCountsBuffer = zC, this.loadCounts = new Uint32Array(zC, CC, QC.Eb)), this.loadCounts
      }
      headerView() {
        const CC = this.memory().buffer;
        return CC !== this.headerBuffer && (this.headerBuffer = CC, this.header = new Uint32Array(CC, this.core.AM(), QC.lb)), this.header
      }
    }
  },
  40611: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => nC,
      g: () => bC
    });
    var QC = ZC(4635);
    let wC = null;

    function bC(CC) {
      wC = {
        scanned: !1
      };
      try {
        return CC()
      } finally {
        wC = null
      }
    }

    function nC() {
      const CC = wC;
      if (null === CC) return (0, QC.h)();
      const zC = (0, QC.h)(!CC.scanned);
      return CC.scanned = !0, zC
    }
  },
  40662: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => QC
    });
    const QC = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  40677: (CC, zC, ZC) => {
    function QC() {
      return ZC(40683)
    }

    function wC() {
      return ZC(40688)
    }

    function bC(CC) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(CC)
    }
    ZC.d(zC, {
      e: () => bC,
      f: () => QC,
      j: () => wC
    })
  },
  36180: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => fC,
      f: () => qC,
      j: () => nC,
      m: () => WC
    });
    var QC = ZC(36172),
      wC = ZC(10);
    const bC = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function nC(CC) {
      if (CC instanceof WebAssembly.RuntimeError) return !0;
      const zC = CC instanceof Error ? CC.stack : void 0;
      return "string" === typeof zC && bC.test(zC)
    }

    function fC(CC, zC, ZC) {
      var wC;
      const nC = CC instanceof Error ? CC.name : "thrown",
        fC = (CC instanceof Error && null !== (wC = CC.stack) && void 0 !== wC ? wC : "").split("\n").filter((CC => bC.test(CC))).slice(0, 8).map((CC => CC.trim())),
        oC = null === zC ? "wasm memory unknown" : `wasm memory ${Math.round(zC/2**20)} MB`,
        qC = null === ZC.panic ? "" : `, panic: ${(0,QC.m)(ZC.panic)}`,
        FC = `${nC}: ${CC instanceof Error?CC.message:String(CC)}`;
      return `${(0,QC.p)(ZC.kind,ZC.refusedBytes)} ${FC} (${oC})${qC}${fC.length>0?` | ${fC.join(" < ")}`:""}`
    }
    const oC = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function qC(CC) {
      var zC;
      let ZC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(CC instanceof Error) || !oC.test(CC.message)) return {};
      if (!("detached" in ZC)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, wC.O)(null === (zC = (0, wC.K)(ZC, "detached")) || void 0 === zC ? void 0 : zC.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const FC = 500;

    function WC(CC) {
      let zC = "[object Object]";
      try {
        zC = String(CC)
      } catch {}
      if ("[object Object]" !== zC) return zC;
      try {
        var ZC, QC;
        return null !== (ZC = null === (QC = JSON.stringify(CC)) || void 0 === QC ? void 0 : QC.slice(0, FC)) && void 0 !== ZC ? ZC : zC
      } catch {
        return zC
      }
    }
  },
  40683: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  40688: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  },
  36172: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => QC,
      i: () => bC,
      m: () => oC,
      n: () => nC,
      p: () => wC
    });
    const QC = /^alloc_failed (\d+) bytes$/;

    function wC(CC, zC) {
      return bC(CC, zC) ? `trap=alloc_failed ${zC} bytes` : `trap=${CC}`
    }

    function bC(CC, zC) {
      return "unreachable" === CC && zC > 0
    }

    function nC(CC, zC, ZC) {
      const QC = function(CC) {
        return CC instanceof WebAssembly.RuntimeError ? /unreachable/i.test(CC.message) ? "unreachable" : /out of bounds/i.test(CC.message) ? "out_of_bounds" : "runtime_error" : (CC instanceof RangeError || CC instanceof Error && "InternalError" === CC.name) && /call stack|recursion/i.test(CC.message) ? "stack_overflow" : "js_error"
      }(CC);
      if ("unreachable" !== QC) return {
        kind: QC,
        panic: null,
        refusedBytes: 0
      };
      const wC = zC(),
        bC = ZC();
      return {
        kind: QC,
        panic: bC > 0 ? null : wC,
        refusedBytes: bC
      }
    }
    const fC = 300;

    function oC(CC) {
      return CC.replace(/\s*\n\s*/g, " / ").slice(0, fC)
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);