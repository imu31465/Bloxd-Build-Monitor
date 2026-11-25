export const id = 218;
export const ids = [218];
export const modules = {
  41028: (QQ, WQ, XQ) => {
    function wQ(QQ, WQ, XQ) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(QQ, WQ).getContext("2d", XQ);
      const wQ = document.createElement("canvas");
      return wQ.width = QQ, wQ.height = WQ, wQ.getContext("2d", XQ)
    }

    function qQ(QQ, WQ) {
      return QQ.getContext("2d", WQ)
    }
    XQ.d(WQ, {
      e: () => qQ,
      g: () => wQ
    })
  },
  40994: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => sQ
    });
    const wQ = 1 << 20,
      qQ = 1 << 21,
      TQ = 1024,
      zQ = 2048;

    function sQ(QQ, WQ, XQ) {
      const sQ = QQ + wQ,
        FQ = WQ + TQ,
        PQ = XQ + wQ;
      return sQ < 0 || sQ >= qQ || PQ < 0 || PQ >= qQ || FQ < 0 || FQ >= zQ ? -1 : (sQ * qQ + PQ) * zQ + FQ
    }
  },
  40991: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => wQ,
      g: () => zQ,
      i: () => qQ,
      l: () => TQ,
      m: () => gQ,
      q: () => PQ,
      r: () => FQ,
      u: () => sQ
    });
    XQ(3723);
    XQ(40994);

    function wQ(QQ) {}

    function qQ(QQ) {}

    function TQ(QQ) {}

    function zQ(QQ) {}

    function sQ(QQ) {}

    function FQ(QQ, WQ, XQ) {}

    function PQ(QQ) {}

    function gQ(QQ) {}
  },
  40984: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => pQ,
      e: () => jQ,
      h: () => xQ,
      j: () => lQ,
      n: () => cQ,
      q: () => AQ,
      u: () => DQ,
      y: () => yQ,
      A: () => VQ,
      D: () => aQ,
      E: () => tQ,
      I: () => bQ,
      L: () => LQ,
      O: () => nQ,
      S: () => RQ,
      V: () => CQ
    });
    var wQ = XQ(5134),
      qQ = XQ(40864),
      TQ = (XQ(40991), XQ(12));
    class zQ {
      constructor(QQ, WQ) {
        this.memory = QQ, this.access = WQ, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.yJ = 0, this.u32 = new TQ.j(0), this.f32 = new TQ.e(0), this.u8 = new TQ.c(0), this.dataView = new TQ.f(new ArrayBuffer(0)), this.refresh()
      }
      refresh() {
        this.ptr = this.access.ptr(), this.yJ = this.access.yJ(), this.buffer = (0, TQ.J)(this.memory()), this.u32 = new TQ.j(this.buffer, this.ptr, this.yJ >>> 2), this.f32 = new TQ.e(this.buffer, this.ptr, this.yJ >>> 2), this.u8 = new TQ.c(this.buffer, this.ptr, this.yJ), this.dataView = new TQ.f(this.buffer, this.ptr, this.yJ)
      }
      ensureViews() {
        (0, TQ.J)(this.memory()) !== this.buffer && this.refresh()
      }
      get view() {
        return this.ensureViews(), this.dataView
      }
      room(QQ) {
        return !!this.fits(QQ) || (this.dropped++, !1)
      }
      fits(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.cursor;
        this.ensureViews();
        const XQ = WQ + QQ;
        return XQ <= this.yJ || XQ <= wQ.Rc && 0 !== this.access.reserve(XQ) && (this.refresh(), XQ <= this.yJ)
      }
      consume(QQ) {
        const WQ = this.cursor - QQ;
        WQ > 0 && QQ > 0 && (this.ensureViews(), this.u8.copyWithin(0, QQ, this.cursor)), this.cursor = WQ > 0 ? WQ : 0
      }
      writeRecord(QQ, WQ, XQ, qQ, TQ) {
        if (!this.room(wQ.pb)) return !1;
        const zQ = this.cursor >>> 2;
        return this.u32[zQ] = 65535 & QQ | (65535 & WQ) << 16, this.f32[zQ + 1] = XQ, this.f32[zQ + 2] = qQ, this.u32[zQ + 3] = TQ >>> 0, this.cursor += wQ.pb, !0
      }
      writeOptions(QQ, WQ) {
        const XQ = WQ.byteLength,
          qQ = wQ.pb + (0, wQ.te)(XQ);
        if (!this.fits(qQ)) return !1;
        const TQ = this.cursor,
          zQ = TQ >>> 2;
        this.u32[zQ] = wQ.qb.Options, this.u32[zQ + 1] = XQ, this.u32[zQ + 2] = 0, this.u32[zQ + 3] = QQ >>> 0;
        const sQ = TQ + wQ.pb;
        return this.u8.set(WQ, sQ), this.u8.fill(0, sQ + XQ, TQ + qQ), this.cursor += qQ, !0
      }
      writeWorkerRecord(QQ, WQ, XQ, qQ, TQ, zQ) {
        const sQ = zQ.byteLength,
          FQ = wQ.Pd + (0, wQ.te)(sQ);
        if (sQ > wQ.Od) return this.dropped++, !1;
        if (!this.room(FQ)) return !1;
        const PQ = this.cursor,
          gQ = PQ >>> 2;
        this.u32[gQ] = QQ >>> 0, this.u32[gQ + 1] = 65535 & WQ | (65535 & XQ) << 16, this.u32[gQ + 2] = qQ >>> 0, this.u32[gQ + 3] = TQ >>> 0, this.u32[gQ + 4] = sQ;
        const JQ = PQ + wQ.Pd;
        return this.u8.set(zQ, JQ), this.u8.fill(0, JQ + sQ, PQ + FQ), this.cursor += FQ, !0
      }
      written() {
        return this.ensureViews(), this.u8.subarray(0, this.cursor)
      }
      writeFrame(QQ, WQ) {
        return this.writeNet(wQ.ac.Frame, QQ, WQ)
      }
      writeOpen(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(wQ.ac.Open, QQ, FQ(WQ))
      }
      writeClose(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(wQ.ac.Close, QQ, FQ(WQ))
      }
      writeNet(QQ, WQ, XQ) {
        const qQ = XQ.byteLength,
          TQ = wQ.$b + (0, wQ.te)(qQ);
        if (qQ > wQ.Vb) return this.dropped++, !1;
        if (!this.room(TQ)) return !1;
        const zQ = this.cursor;
        this.u32[zQ >>> 2] = qQ, this.u32[1 + (zQ >>> 2)] = (0, wQ.oe)(QQ, WQ);
        const sQ = zQ + wQ.$b;
        return this.u8.set(XQ, sQ), this.u8.fill(0, sQ + qQ, zQ + TQ), this.cursor += TQ, !0
      }
      gI(QQ, WQ, XQ) {
        const qQ = wQ.q + (0, wQ.te)(XQ);
        if (!this.room(qQ)) return -1;
        const TQ = this.cursor;
        this.u32[TQ >>> 2] = 65535 & QQ | (65535 & WQ) << 16, this.u32[1 + (TQ >>> 2)] = XQ;
        const zQ = TQ + wQ.q;
        return this.u8.fill(0, zQ, TQ + qQ), this.cursor += qQ, zQ
      }
      growForCmd(QQ) {
        return this.fits(wQ.q + (0, wQ.te)(QQ), 0)
      }
      writeCmd(QQ, WQ, XQ) {
        const wQ = this.gI(QQ, WQ, XQ.byteLength);
        return !(wQ < 0) && (this.u8.set(XQ, wQ), !0)
      }
      copyWritten(QQ, WQ) {
        return this.ensureViews(), this.u8.slice(QQ, QQ + WQ)
      }
    }
    const sQ = new TQ.c(0);

    function FQ(QQ) {
      if (0 === QQ) return sQ;
      const WQ = new TQ.c(wQ.Xb);
      for (let XQ = 0; XQ < wQ.Xb; XQ++) WQ[XQ] = QQ >>> 8 * XQ & 255;
      return WQ
    }
    class PQ {
      constructor(QQ, WQ) {
        this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new zQ(WQ, {
          ptr: () => QQ.iJ(),
          yJ: () => QQ.TzQ(),
          reserve: WQ => QQ.VzQ(WQ)
        }), this.net = new zQ(WQ, {
          ptr: () => QQ.jzQ(),
          yJ: () => QQ.IzQ(),
          reserve: WQ => QQ.DzQ(WQ)
        }), this.worker = new zQ(WQ, {
          ptr: () => QQ.tzQ(),
          yJ: () => QQ.SzQ(),
          reserve: WQ => QQ.pzQ(WQ)
        }), this.cmd = new zQ(WQ, {
          ptr: () => QQ.OTQ(),
          yJ: () => QQ.NTQ(),
          reserve: WQ => QQ.ZTQ(WQ)
        })
      }
      reset(QQ, WQ, XQ) {
        this.input.consume(QQ), this.worker.consume(WQ), this.cmd.consume(XQ)
      }
    }
    var gQ = XQ(36568),
      JQ = XQ(2510),
      rQ = XQ(5126),
      IQ = XQ(40998);
    const jQ = "coreFrame",
      BQ = "fatalStatus",
      yQ = "otherCall",
      VQ = "coreRings",
      DQ = "netIn",
      pQ = "abi",
      GQ = "netOut",
      UQ = "workerOut",
      bQ = "worldgenHost",
      vQ = "eventWalker",
      dQ = "netEvent",
      HQ = "envEvent",
      aQ = "sharedTables",
      lQ = "inputAction",
      hQ = "frameSends",
      iQ = new Set([vQ, dQ, HQ, hQ, lQ, aQ]),
      cQ = "wasmMemory",
      AQ = "meshHost";

    function RQ(QQ, WQ) {
      QQ.forEachWorkerOut(((XQ, qQ, TQ) => {
        if ((0, wQ.je)(XQ)) try {
          var zQ;
          null === (zQ = WQ.worldgen) || void 0 === zQ || zQ.take(XQ, TQ)
        } catch (FQ) {
          QQ.crash(bQ, FQ)
        } else try {
          var sQ;
          null === (sQ = WQ.mesh) || void 0 === sQ || sQ.take(XQ, qQ, TQ)
        } catch (FQ) {
          QQ.crash(AQ, FQ)
        }
      }))
    }
    const EQ = 1048576;

    function CQ(QQ, WQ) {
      let XQ = !1;
      const wQ = () => {
        XQ = !1, WQ()
      };
      return () => {
        !XQ && QQ.cursor >= EQ && (XQ = !0, queueMicrotask(wQ))
      }
    }
    const uQ = new Set([BQ, yQ, bQ, AQ]);

    function LQ(QQ) {
      return iQ.has(QQ.site) ? QQ.error instanceof WebAssembly.RuntimeError || (0, qQ.j)(QQ.error) : !uQ.has(QQ.site) && QQ.error instanceof Error
    }
    const kQ = "events",
      fQ = [],
      SQ = "debugLog",
      tQ = "terrainTextures",
      oQ = "sunShadowTextures",
      eQ = new TextDecoder;

    function nQ(QQ, WQ) {
      const {
        site: XQ,
        error: qQ,
        header: TQ
      } = QQ, zQ = TQ ? (0, wQ.de)(TQ.lastError) : "noFrame", sQ = `CORE-${XQ===BQ?zQ:XQ}`, FQ = null === qQ || void 0 === qQ ? "" : ` ${(0,gQ.j)(qQ)}`, PQ = {
        site: XQ,
        wasmBuild: WQ.wasm,
        clientVersion: WQ.client
      };
      return TQ && (PQ.status = String(TQ.status), PQ.lastError = zQ, PQ.lastErrorCode = String(TQ.lastError), PQ.lastErrorDetail = String(TQ.lastErrorDetail), PQ.errorCount = String(TQ.errorCount), PQ.frameIndex = String(TQ.frameIndex), PQ.tickIndex = String(TQ.tickIndex)), {
        code: sQ,
        message: `core ${XQ}, last error ${zQ};${FQ}`,
        details: PQ
      }
    }
    class xQ {
      constructor(QQ, WQ, XQ) {
        this.core = QQ, this.memory = WQ, this.handlers = XQ, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.loadCountsBuffer = null, this.loadCounts = new Uint32Array(0), this.unsentUiPrefs = null, this.eventWalker = null, this.netOffsets = [], this.frameEvents = {
          ptr: 0,
          len: 0,
          net: fQ,
          netOffsets: this.netOffsets,
          kind: "none"
        }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.atSendsStop = !1, this.rings = new PQ(QQ, WQ)
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
      framePaces(QQ) {
        if (this.stopped || this.drawsHeld) return !1;
        try {
          return this.core.XzQ(QQ)
        } catch (WQ) {
          return this.crash(jQ, WQ), !1
        }
      }
      get isStopped() {
        return this.stopped
      }
      frame(QQ, WQ) {
        var XQ;
        let TQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.stopped) return !1;
        if (!this.writePendingInput()) return !1;
        const {
          input: zQ,
          net: sQ,
          worker: FQ,
          cmd: PQ
        } = this.rings, gQ = sQ.cursor, JQ = WQ && !this.drawsHeld;
        let yQ = wQ.N.Fatal;
        const VQ = zQ.cursor,
          pQ = FQ.cursor,
          GQ = PQ.cursor;
        let UQ, bQ = null;
        const HQ = this.handlers.onSends;
        try {
          const WQ = (JQ ? wQ.db.Draws : 0) | (TQ ? wQ.db.NetAll : 0) | (HQ ? wQ.db.StopForSends : 0);
          yQ = (0, IQ.f)((() => {
            let XQ = this.core.frame(QQ, VQ, sQ.cursor, pQ, WQ, GQ);
            for (; XQ === wQ.xd && HQ;) {
              var qQ;
              if (UQ ??= null === (qQ = this.gameHost) || void 0 === qQ ? void 0 : qQ.takeFault(), void 0 === UQ && !this.takeSends(HQ)) return wQ.N.Fatal;
              XQ = this.core.ty()
            }
            return XQ
          }))
        } catch (eQ) {
          bQ = {
            error: eQ
          }
        }
        UQ ??= null === (XQ = this.gameHost) || void 0 === XQ ? void 0 : XQ.takeFault();
        const aQ = this.stopped || null !== bQ || void 0 !== UQ;
        this.rings.reset(aQ ? zQ.cursor : VQ, aQ ? FQ.cursor : pQ, aQ ? PQ.cursor : GQ);
        const lQ = null === bQ && void 0 === UQ,
          hQ = lQ && !this.stopped && yQ === wQ.N.Fatal && 0 === this.core.JI(),
          iQ = lQ && !hQ ? this.headerView() : null,
          cQ = hQ ? {
            ...null !== (AQ = this.lastHeader) && void 0 !== AQ ? AQ : (0, wQ.ue)(new Uint32Array(wQ.ib)),
            status: wQ.N.Fatal,
            lastError: wQ.K.CoreBusy,
            lastErrorDetail: 0
          } : null === iQ ? null : (0, wQ.ue)(iQ);
        var AQ;
        null !== cQ && (this.lastHeader = cQ);
        const RQ = null !== cQ && yQ !== wQ.N.Fatal,
          EQ = RQ && null !== iQ ? iQ[wQ.lb.NetInKept] : 0,
          CQ = RQ && EQ <= gQ && EQ % 4 === 0 ? EQ : null;
        var uQ, LQ;
        null !== cQ && null !== CQ && yQ === wQ.N.Errors && (null === (uQ = (LQ = this.handlers).onErrors) || void 0 === uQ || uQ.call(LQ, cQ));
        const kQ = null === CQ ? fQ : this.readEvents(gQ);
        if (sQ.consume(gQ - (null !== CQ && void 0 !== CQ ? CQ : 0)), this.netKept = null !== CQ && void 0 !== CQ ? CQ : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== bQ) return this.crash(jQ, void 0 === UQ || UQ instanceof qQ.d ? bQ.error : UQ), !1;
        if (void 0 !== UQ || null === cQ) return this.crashOn(jQ, UQ), !1;
        if (hQ) return this.crash(BQ, null), !1;
        const SQ = this.headerView()[wQ.lb.FrameDraw];
        if (this.lastFrameKind = (0, rQ.e)(JQ, SQ), yQ === wQ.N.Fatal) return this.crash(BQ, null), !1;
        if (null === CQ) return this.crash(DQ, `the core kept ${EQ} of ${gQ} net-in bytes`), !1;
        if (this.eventWalker) {
          if (this.stopped) return !1;
          const QQ = this.frameEvents,
            WQ = this.headerView();
          QQ.ptr = WQ[wQ.lb.EventsPtr], QQ.len = WQ[wQ.lb.EventsLen], QQ.net = kQ, QQ.kind = this.lastFrameKind;
          try {
            this.eventWalker(QQ)
          } catch (eQ) {
            return this.crashOn(vQ, eQ), !1
          }
          return this.handEnvEvents()
        }
        for (const wQ of kQ) {
          if (this.stopped) return !1;
          try {
            var tQ, oQ;
            null === (tQ = (oQ = this.handlers).onNetEvent) || void 0 === tQ || tQ.call(oQ, wQ)
          } catch (eQ) {
            return this.crashOn(dQ, eQ), !1
          }
        }
        return this.handEnvEvents()
      }
      handEnvEvents() {
        for (const TQ of this.graceEvents) {
          if (this.stopped) return !1;
          try {
            var QQ, WQ;
            null === (QQ = (WQ = this.handlers).onReconnectGrace) || void 0 === QQ || QQ.call(WQ, TQ)
          } catch (qQ) {
            return this.crashOn(dQ, qQ), !1
          }
        }
        for (const TQ of this.envEvents) {
          if (this.stopped) return !1;
          try {
            var XQ, wQ;
            null === (XQ = (wQ = this.handlers).onEnvEvent) || void 0 === XQ || XQ.call(wQ, TQ)
          } catch (qQ) {
            return this.crashOn(HQ, qQ), !1
          }
        }
        return !this.stopped
      }
      setEventWalker(QQ) {
        this.eventWalker = QQ
      }
      writePendingInput() {
        if (this.stopped) return !1;
        const {
          input: QQ
        } = this.rings;
        try {
          const WQ = this.unsentUiPrefs;
          WQ && QQ.writeRecord(wQ.qb.UiPrefs, 0, WQ.nametagCutDistance, 0, (0, wQ.ye)(WQ)) && (this.unsentUiPrefs = null);
          const XQ = this.unsentEnvPrefs;
          XQ && QQ.writeRecord(wQ.qb.EnvPrefs, (0, wQ.fe)(XQ), XQ.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
          const qQ = this.unsentLookPrefs;
          qQ && QQ.writeRecord(wQ.qb.Sensitivity, 0, qQ.mouse, qQ.touch, (0, JQ.k)(qQ.fovPercent)) && (this.unsentLookPrefs = null);
          let TQ = 0;
          for (const {
              aux: wQ,
              payload: zQ
            }
            of this.unsentOptions) {
            if (!QQ.writeOptions(wQ, zQ)) {
              if (QQ.cursor > 0) break;
              this.optionsDropped++
            }
            TQ++
          }
          TQ > 0 && this.unsentOptions.splice(0, TQ)
        } catch (WQ) {
          return this.crash(VQ, WQ), !1
        }
        return !0
      }
      setHoldDraws(QQ) {
        this.drawsHeld = QQ
      }
      setUiPrefs(QQ) {
        this.unsentUiPrefs = {
          ...QQ
        }
      }
      setEnvPrefs(QQ) {
        this.unsentEnvPrefs = {
          ...QQ
        }
      }
      setLookPrefs(QQ) {
        this.unsentLookPrefs = {
          ...QQ
        }
      }
      queueOptions(QQ, WQ) {
        return !this.isStopped && (WQ.byteLength > wQ.gc.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
          aux: QQ,
          payload: WQ
        }), !0))
      }
      setChunkCap(QQ) {
        return this.callCore("setChunkCap", null, (WQ => WQ.HzQ(QQ)))
      }
      shedMemory(QQ) {
        const WQ = this.callCore("shedMemory", null, (WQ => WQ.RzQ(QQ)));
        return 0 === WQ ? null : WQ
      }
      addDistanceInUse() {
        const QQ = this.callCore("addDistanceInUse", null, (QQ => QQ.oTQ()));
        return 0 === QQ ? null : QQ
      }
      setChunkAddDistance(QQ, WQ) {
        return this.callCore("setChunkAddDistance", !1, (XQ => XQ.dzQ(QQ, WQ)))
      }
      setGameHost(QQ) {
        return this.callCore("setGameHost", !1, (WQ => (WQ.WzQ(QQ), this.gameHost = QQ, !0)))
      }
      setAntiCheatProbes(QQ) {
        return this.callCore("setAntiCheatProbes", !1, (WQ => WQ.bzQ(QQ)))
      }
      setAmbientOcclusion(QQ) {
        this.callCore("setAmbientOcclusion", void 0, (WQ => {
          WQ.UzQ(QQ)
        }))
      }
      setPoseLod(QQ) {
        this.callCore("setPoseLod", void 0, (WQ => {
          WQ.lzQ(QQ)
        }))
      }
      setDebugLog(QQ, WQ) {
        this.callCore(SQ, void 0, (XQ => {
          XQ.Cy(QQ, WQ)
        }))
      }
      takeDebugLog(QQ) {
        return this.callCore(SQ, [], (WQ => WQ.uy(QQ)))
      }
      setTextureLayers(QQ) {
        return this.callCore("setTextureLayers", !1, (WQ => WQ.AzQ(QQ)))
      }
      setBlockColours(QQ) {
        let {
          blocks: WQ,
          counts: XQ,
          values: wQ
        } = QQ;
        return this.callCore("setBlockColours", !1, (QQ => QQ.ywQ(WQ, XQ, wQ)))
      }
      terrainTextureNames() {
        return this.callCore(tQ, [], (QQ => QQ.fzQ()))
      }
      setTerrainTextures(QQ, WQ, XQ, wQ) {
        return this.callCore(tQ, !1, (qQ => qQ.czQ(QQ, XQ, WQ, wQ)))
      }
      setShaderPack(QQ, WQ, XQ, wQ, qQ, TQ) {
        return this.callCore("setShaderPack", !1, (zQ => {
          var sQ, FQ;
          return null !== (sQ = null === (FQ = zQ.iwQ) || void 0 === FQ ? void 0 : FQ.call(zQ, QQ, WQ, XQ, wQ, qQ, TQ)) && void 0 !== sQ && sQ
        }))
      }
      sunShadowWantedTextures() {
        return this.callCore(oQ, null, (QQ => {
          var WQ, XQ;
          return null !== (WQ = null === (XQ = QQ.CzQ) || void 0 === XQ ? void 0 : XQ.call(QQ)) && void 0 !== WQ ? WQ : null
        }))
      }
      setSunShadowTexture(QQ, WQ, XQ, wQ, qQ) {
        this.callCore(oQ, void 0, (TQ => {
          var zQ;
          null === (zQ = TQ.izQ) || void 0 === zQ || zQ.call(TQ, QQ, WQ, XQ, wQ, qQ)
        }))
      }
      takeSunShadowWarnings() {
        return this.callCore(oQ, [], (QQ => {
          var WQ, XQ;
          return null !== (WQ = null === (XQ = QQ.LzQ) || void 0 === XQ ? void 0 : XQ.call(QQ)) && void 0 !== WQ ? WQ : []
        }))
      }
      sunShadowsHeld() {
        return this.callCore(oQ, null, (QQ => {
          var WQ, XQ;
          return null !== (WQ = null === (XQ = QQ.uzQ) || void 0 === XQ ? void 0 : XQ.call(QQ)) && void 0 !== WQ ? WQ : null
        }))
      }
      callCore(QQ, WQ, XQ) {
        if (this.stopped) return WQ;
        try {
          return XQ(this.core)
        } catch (wQ) {
          return this.crash(QQ, wQ), WQ
        }
      }
      readEvents(QQ) {
        this.netOffsets.length = 0;
        const WQ = this.headerView(),
          XQ = WQ[wQ.lb.EventsPtr],
          qQ = WQ[wQ.lb.EventsLen];
        if (this.envEvents.length = 0, this.graceEvents.length = 0, 0 === qQ) return fQ;
        const TQ = [],
          zQ = this.memory().buffer;
        if (XQ % 4 !== 0 || XQ + qQ > zQ.byteLength) return this.crash(kQ, `events of ${qQ} bytes at ${XQ} outside ${zQ.byteLength} bytes of memory`), fQ;
        const sQ = new DataView(zQ, XQ, qQ),
          FQ = this.rings.net,
          PQ = (WQ, XQ) => WQ + XQ <= QQ ? FQ.copyWritten(WQ, XQ) : null;
        let gQ = 0;
        for (; gQ < qQ;) {
          const QQ = gQ + wQ.V,
            WQ = QQ <= qQ ? sQ.getUint32(gQ, !0) : -1,
            FQ = WQ >>> 16;
          if (WQ < 0 || FQ > qQ - QQ) return this.crash(kQ, `event record at ${gQ} overruns its ${qQ} bytes`), fQ;
          const lQ = 65535 & WQ,
            hQ = WQ => sQ.getUint32(QQ + 4 * WQ, !0);
          if (lQ === wQ.Z.RawMessage) {
            const QQ = FQ >= wQ.Uc.BYTES ? 65535 & hQ(1) : -1,
              WQ = QQ === wQ.Uc.STRING_TYPE,
              XQ = FQ === (WQ ? wQ.Uc.STRING_TYPE_BYTES : wQ.Uc.BYTES) ? PQ(hQ(2), hQ(3)) : null,
              qQ = WQ && XQ ? PQ(hQ(4), hQ(5)) : null;
            if (!XQ || WQ && !qQ) return this.crash(kQ, `RawMessage at ${gQ} of ${FQ} bytes names bytes outside net-in`), fQ;
            this.netOffsets.push(gQ), TQ.push({
              type: "message",
              conn: hQ(0),
              cg: QQ,
              payloadKind: hQ(1) >>> 16,
              payload: XQ,
              stringType: qQ ? eQ.decode(qQ) : null
            })
          } else if (lQ === wQ.Z.CoreErrors) {
            var JQ, rQ;
            const QQ = FQ >= 4 ? hQ(0) : -1;
            if (QQ < 0 || QQ > wQ.H.PAIRS_MAX || FQ !== 4 * (wQ.H.FIXED_WORDS + wQ.H.PAIR_WORDS * QQ)) return this.crash(kQ, `CoreErrors at ${gQ} of ${FQ} bytes`), fQ;
            const WQ = [];
            for (let XQ = 0; XQ < QQ; XQ++) WQ.push({
              code: hQ(1 + 2 * XQ),
              detail: hQ(2 + 2 * XQ)
            });
            null === (JQ = (rQ = this.handlers).onCoreErrors) || void 0 === JQ || JQ.call(rQ, WQ, hQ(1 + 2 * QQ))
          } else if (lQ === wQ.Z.RenderReload) {
            var IQ, jQ;
            if (FQ !== wQ.cd.BYTES) return this.crash(kQ, `RenderReload at ${gQ} of ${FQ} bytes`), fQ;
            null === (IQ = (jQ = this.handlers).onRenderReload) || void 0 === IQ || IQ.call(jQ, hQ(0), hQ(1), hQ(2))
          } else if (lQ === wQ.Z.JoinPreloadEnded) {
            var BQ, yQ;
            if (FQ !== wQ.wb.BYTES) return this.crash(kQ, `JoinPreloadEnded at ${gQ} of ${FQ} bytes`), fQ;
            null === (BQ = (yQ = this.handlers).onJoinPreloadEnded) || void 0 === BQ || BQ.call(yQ, {
              chunks: hQ(wQ.wb.CHUNKS),
              bytes: hQ(wQ.wb.BYTES_HELD),
              asked: hQ(wQ.wb.ASKED),
              replaced: hQ(wQ.wb.REPLACED),
              dropped: hQ(wQ.wb.DROPPED)
            })
          } else if (lQ === wQ.Z.Images) {
            var VQ, DQ;
            null === (VQ = (DQ = this.handlers).onImages) || void 0 === VQ || VQ.call(DQ, new Uint8Array(zQ.slice(XQ + QQ, XQ + QQ + FQ)))
          } else if (lQ === wQ.Z.ModelRequests)
            for (let XQ = 0; XQ < FQ >>> 2; XQ++) {
              var pQ, GQ;
              null === (pQ = (GQ = this.handlers).onModelRequest) || void 0 === pQ || pQ.call(GQ, hQ(XQ))
            } else if (lQ === wQ.Z.ModelTaken) {
              var UQ, bQ;
              if (FQ < 4) return this.crash(kQ, `ModelTaken at ${gQ} of ${FQ} bytes`), fQ;
              const QQ = new Uint32Array((FQ >>> 2) - 1);
              for (let WQ = 0; WQ < QQ.length; WQ++) QQ[WQ] = hQ(1 + WQ);
              null === (UQ = (bQ = this.handlers).onModelTaken) || void 0 === UQ || UQ.call(bQ, hQ(0), QQ)
            } else if (lQ === wQ.Z.TerrainTexturesWanted) {
            var vQ, dQ;
            if (0 !== FQ) return this.crash(kQ, `TerrainTexturesWanted at ${gQ} of ${FQ} bytes`), fQ;
            null === (vQ = (dQ = this.handlers).onTerrainTexturesWanted) || void 0 === vQ || vQ.call(dQ)
          } else if (lQ === wQ.Z.KeepAliveDue) {
            var HQ, aQ;
            if (FQ > wQ.yb) return this.crash(kQ, `KeepAliveDue at ${gQ} of ${FQ} bytes`), fQ;
            null === (HQ = (aQ = this.handlers).onKeepAlive) || void 0 === HQ || HQ.call(aQ, new Uint8Array(zQ, XQ + QQ, FQ).slice())
          } else if (lQ === wQ.Z.ConnectionState) {
            if (FQ !== wQ.t) return this.crash(kQ, `ConnectionState at ${gQ} of ${FQ} bytes`), fQ;
            this.netOffsets.push(gQ), TQ.push({
              type: "connection",
              conn: hQ(0),
              phase: hQ(1),
              code: 0 | hQ(2)
            })
          } else if (lQ === wQ.Z.EnvLighting || lQ === wQ.Z.SkyImages) {
            if (FQ !== (lQ === wQ.Z.EnvLighting ? wQ.T : wQ.Cd)) return this.crash(kQ, `event ${lQ} at ${gQ} of ${FQ} bytes`), fQ;
            this.envEvents.push({
              kind: lQ,
              payload: new Uint8Array(zQ.slice(XQ + QQ, XQ + QQ + FQ))
            })
          } else if (lQ === wQ.Z.ReconnectGrace) {
            if (FQ !== wQ.Bc) return this.crash(kQ, `ReconnectGrace at ${gQ} of ${FQ} bytes`), fQ;
            const QQ = hQ(2);
            this.graceEvents.push({
              conn: hQ(0),
              graceMs: hQ(1),
              sessionBased: 0 !== (QQ & wQ.Vc.SessionBased),
              replayOffer: 0 !== (QQ & wQ.Vc.ReplayOffer)
            })
          }
          gQ = QQ + (0, wQ.te)(FQ)
        }
        return TQ
      }
      takeSends(QQ) {
        this.atSendsStop = !0;
        try {
          QQ()
        } catch (WQ) {
          this.crashOn(hQ, WQ)
        } finally {
          this.atSendsStop = !1
        }
        return !this.stopped
      }
      forEachNetOut(QQ) {
        this.forEachOut(GQ, "net-out", wQ.lb.NetOutPtr, wQ.lb.NetOutLen, wQ.$b, 0, ((WQ, XQ, qQ, TQ) => {
          const zQ = (0, wQ.ne)(XQ);
          zQ === wQ.ac.Frame ? QQ((0, wQ.me)(XQ), qQ) : this.crash(GQ, `net-out record at ${TQ} is kind ${zQ}, not a frame`)
        }))
      }
      forEachWorkerOut(QQ) {
        this.forEachOut(UQ, "worker-out", wQ.lb.WorkerOutPtr, wQ.lb.WorkerOutLen, wQ.Nd, 4, ((WQ, XQ, qQ, TQ) => {
          const zQ = 255 & WQ,
            sQ = zQ === wQ.Zd.Init ? this.initOf(qQ, TQ) : qQ;
          null !== sQ && QQ(zQ, WQ >>> 8 & 16777215, sQ)
        }))
      }
      initOf(QQ, WQ) {
        const XQ = this.memory().buffer;
        if (QQ.byteLength !== wQ.mb) return this.crash(UQ, `worker-out Init record at ${WQ} is ${QQ.byteLength} bytes, not a view`), null;
        const qQ = new DataView(QQ.buffer, QQ.byteOffset, wQ.mb),
          TQ = qQ.getUint32(0, !0),
          zQ = qQ.getUint32(4, !0);
        return TQ + zQ > XQ.byteLength ? (this.crash(UQ, `worker-out Init record at ${WQ} names ${zQ} bytes at ${TQ} outside ${XQ.byteLength} bytes of memory`), null) : new Uint8Array(XQ, TQ, zQ)
      }
      forEachOut(QQ, WQ, XQ, qQ, TQ, zQ, sQ) {
        if (!this.headerReadable()) return;
        const FQ = this.headerView(),
          PQ = FQ[XQ],
          gQ = FQ[qQ];
        if (0 === gQ) return;
        const JQ = this.memory().buffer;
        if (PQ % 4 !== 0 || PQ + gQ > JQ.byteLength) return void this.crash(QQ, `${WQ} of ${gQ} bytes at ${PQ} outside ${JQ.byteLength} bytes of memory`);
        const rQ = new DataView(JQ, PQ, gQ);
        let IQ = 0;
        for (; IQ < gQ;) {
          const XQ = IQ + TQ,
            qQ = XQ <= gQ ? rQ.getUint32(IQ + zQ, !0) : -1;
          if (qQ < 0 || qQ > gQ - XQ) return void this.crash(QQ, `${WQ} record at ${IQ} overruns its ${gQ} bytes`);
          if (sQ(rQ.getUint32(IQ, !0), rQ.getUint32(IQ + 4, !0), new Uint8Array(JQ, PQ + XQ, qQ), IQ), this.stopped) return;
          IQ = XQ + (0, wQ.te)(qQ)
        }
      }
      forEachEvent(QQ) {
        if (this.stopped || null === this.lastHeader) return;
        const WQ = this.headerView(),
          XQ = WQ[wQ.lb.EventsPtr],
          qQ = WQ[wQ.lb.EventsLen];
        if (0 === qQ) return;
        const TQ = this.memory().buffer;
        if (XQ % 4 !== 0 || XQ + qQ > TQ.byteLength) return void this.crash(kQ, `events of ${qQ} bytes at ${XQ} outside ${TQ.byteLength} bytes of memory`);
        const zQ = new DataView(TQ, XQ, qQ);
        let sQ = 0;
        for (; sQ < qQ;) {
          const WQ = sQ + wQ.V,
            XQ = WQ <= qQ ? zQ.getUint32(sQ, !0) : -1,
            TQ = XQ >>> 16;
          if (XQ < 0 || TQ > qQ - WQ) return void this.crash(kQ, `event record at ${sQ} overruns its ${qQ} bytes`);
          QQ(65535 & XQ, zQ, WQ, TQ), sQ = WQ + (0, wQ.te)(TQ)
        }
      }
      crashOn(QQ, WQ) {
        WQ instanceof qQ.d ? this.crash(kQ, WQ.message) : this.crash(QQ, WQ)
      }
      crash(QQ, WQ) {
        this.stopped || (this.stopped = !0, this.handlers.onCrash({
          site: QQ,
          error: WQ,
          header: this.lastHeader
        }))
      }
      headerWord(QQ) {
        return this.headerReadable() ? this.headerView()[QQ] : 0
      }
      headerReadable() {
        return !this.stopped && (null !== this.lastHeader || this.atSendsStop)
      }
      readLoadCounts(QQ) {
        const WQ = this.loadCountWords();
        return null !== WQ && (QQ.chunksReceived = WQ[wQ.Mb.ChunksReceived], QQ.chunksCancelled = this.headerView()[wQ.lb.ChunksCancelled], QQ.chunksStored = WQ[wQ.Mb.ChunksStored], QQ.jobsSent = WQ[wQ.Mb.JobsSent], QQ.jobsDone = WQ[wQ.Mb.JobsDone], QQ.jobsInFlight = WQ[wQ.Mb.JobsInFlight], QQ.workersLive = WQ[wQ.Mb.WorkersLive], QQ.workersRetired = WQ[wQ.Mb.WorkersRetired], !0)
      }
      readViewQueuedPrograms() {
        var QQ, WQ;
        const XQ = null !== (QQ = null === (WQ = this.loadCountWords()) || void 0 === WQ ? void 0 : WQ[wQ.Mb.ViewQueuedPrograms]) && void 0 !== QQ ? QQ : 0;
        return 0 === XQ ? null : XQ - 1
      }
      readFirstViewWait(QQ, WQ) {
        const XQ = this.loadCountWords();
        return null === XQ ? null : [XQ[wQ.Mb.FirstViewLinkMs], XQ[wQ.Mb.FirstViewTerrainMs], XQ[wQ.Mb.FirstViewHeldMs], XQ[wQ.Mb.FirstViewOtherMs], XQ[wQ.Mb.FirstViewGaps], XQ[wQ.Mb.FirstViewGapMs], QQ, WQ]
      }
      loadCountWords() {
        if (this.stopped || null === this.lastHeader) return null;
        const QQ = this.core.Ey();
        if (0 === QQ) return null;
        const WQ = this.memory().buffer;
        return WQ !== this.loadCountsBuffer && (this.loadCountsBuffer = WQ, this.loadCounts = new Uint32Array(WQ, QQ, wQ.Cb)), this.loadCounts
      }
      headerView() {
        const QQ = this.memory().buffer;
        return QQ !== this.headerBuffer && (this.headerBuffer = QQ, this.header = new Uint32Array(QQ, this.core.JI(), wQ.ib)), this.header
      }
    }
  },
  40998: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => zQ,
      f: () => TQ
    });
    var wQ = XQ(5002);
    let qQ = null;

    function TQ(QQ) {
      qQ = {
        scanned: !1
      };
      try {
        return QQ()
      } finally {
        qQ = null
      }
    }

    function zQ() {
      const QQ = qQ;
      if (null === QQ) return (0, wQ.f)();
      const WQ = (0, wQ.f)(!QQ.scanned);
      return QQ.scanned = !0, WQ
    }
  },
  41039: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => wQ
    });
    const wQ = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  41056: (QQ, WQ, XQ) => {
    function wQ() {
      return XQ(41062)
    }

    function qQ() {
      return XQ(41070)
    }

    function TQ(QQ) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(QQ)
    }
    XQ.d(WQ, {
      c: () => TQ,
      f: () => wQ,
      g: () => qQ
    })
  },
  36568: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => sQ,
      f: () => PQ,
      g: () => zQ,
      j: () => JQ
    });
    var wQ = XQ(36552),
      qQ = XQ(12);
    const TQ = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function zQ(QQ) {
      if (QQ instanceof WebAssembly.RuntimeError) return !0;
      const WQ = QQ instanceof Error ? QQ.stack : void 0;
      return "string" === typeof WQ && TQ.test(WQ)
    }

    function sQ(QQ, WQ, XQ) {
      var qQ;
      const zQ = QQ instanceof Error ? QQ.name : "thrown",
        sQ = (QQ instanceof Error && null !== (qQ = QQ.stack) && void 0 !== qQ ? qQ : "").split("\n").filter((QQ => TQ.test(QQ))).slice(0, 8).map((QQ => QQ.trim())),
        FQ = null === WQ ? "wasm memory unknown" : `wasm memory ${Math.round(WQ/2**20)} MB`,
        PQ = null === XQ.panic ? "" : `, panic: ${(0,wQ.i)(XQ.panic)}`,
        gQ = `${zQ}: ${QQ instanceof Error?QQ.message:String(QQ)}`;
      return `${(0,wQ.l)(XQ.kind,XQ.refusedBytes)} ${gQ} (${FQ})${PQ}${sQ.length>0?` | ${sQ.join(" < ")}`:""}`
    }
    const FQ = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function PQ(QQ) {
      var WQ;
      let XQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(QQ instanceof Error) || !FQ.test(QQ.message)) return {};
      if (!("detached" in XQ)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, qQ.W)(null === (WQ = (0, qQ.O)(XQ, "detached")) || void 0 === WQ ? void 0 : WQ.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const gQ = 500;

    function JQ(QQ) {
      let WQ = "[object Object]";
      try {
        WQ = String(QQ)
      } catch {}
      if ("[object Object]" !== WQ) return WQ;
      try {
        var XQ, wQ;
        return null !== (XQ = null === (wQ = JSON.stringify(QQ)) || void 0 === wQ ? void 0 : wQ.slice(0, gQ)) && void 0 !== XQ ? XQ : WQ
      } catch {
        return WQ
      }
    }
  },
  41062: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  41070: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  },
  36552: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => wQ,
      f: () => TQ,
      i: () => FQ,
      k: () => zQ,
      l: () => qQ
    });
    const wQ = /^alloc_failed (\d+) bytes$/;

    function qQ(QQ, WQ) {
      return TQ(QQ, WQ) ? `trap=alloc_failed ${WQ} bytes` : `trap=${QQ}`
    }

    function TQ(QQ, WQ) {
      return "unreachable" === QQ && WQ > 0
    }

    function zQ(QQ, WQ, XQ) {
      const wQ = function(QQ) {
        return QQ instanceof WebAssembly.RuntimeError ? /unreachable/i.test(QQ.message) ? "unreachable" : /out of bounds/i.test(QQ.message) ? "out_of_bounds" : "runtime_error" : (QQ instanceof RangeError || QQ instanceof Error && "InternalError" === QQ.name) && /call stack|recursion/i.test(QQ.message) ? "stack_overflow" : "js_error"
      }(QQ);
      if ("unreachable" !== wQ) return {
        kind: wQ,
        panic: null,
        refusedBytes: 0
      };
      const qQ = WQ(),
        TQ = XQ();
      return {
        kind: wQ,
        panic: TQ > 0 ? null : qQ,
        refusedBytes: TQ
      }
    }
    const sQ = 300;

    function FQ(QQ) {
      return QQ.replace(/\s*\n\s*/g, " / ").slice(0, sQ)
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);