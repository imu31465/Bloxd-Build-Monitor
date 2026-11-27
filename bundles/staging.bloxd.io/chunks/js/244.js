export const id = 244;
export const ids = [244];
export const modules = {
  37256: (RR, JR, GR) => {
    function yR(RR, JR, GR) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(RR, JR).getContext("2d", GR);
      const yR = document.createElement("canvas");
      return yR.width = RR, yR.height = JR, yR.getContext("2d", GR)
    }

    function tR(RR, JR) {
      return RR.getContext("2d", JR)
    }
    GR.d(JR, {
      c: () => tR,
      e: () => yR
    })
  },
  42274: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => qR
    });
    const yR = 1 << 20,
      tR = 1 << 21,
      uR = 1024,
      ZR = 2048;

    function qR(RR, JR, GR) {
      const qR = RR + yR,
        iR = JR + uR,
        fR = GR + yR;
      return qR < 0 || qR >= tR || fR < 0 || fR >= tR || iR < 0 || iR >= ZR ? -1 : (qR * tR + fR) * ZR + iR
    }
  },
  42265: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => yR,
      e: () => ZR,
      g: () => tR,
      h: () => uR,
      k: () => VR,
      m: () => fR,
      p: () => iR,
      r: () => qR
    });
    GR(4781);
    GR(42274);

    function yR(RR) {}

    function tR(RR) {}

    function uR(RR) {}

    function ZR(RR) {}

    function qR(RR) {}

    function iR(RR, JR, GR) {}

    function fR(RR) {}

    function VR(RR) {}
  },
  42310: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => WR,
      e: () => eR,
      f: () => kR,
      g: () => gR,
      j: () => dR,
      n: () => OR,
      p: () => xR,
      q: () => UR,
      r: () => LR,
      v: () => nR,
      w: () => pR,
      x: () => zR,
      B: () => XR,
      E: () => cR,
      G: () => YR,
      K: () => NR,
      O: () => HR
    });
    var yR = GR(5676),
      tR = GR(42170),
      uR = (GR(42265), GR(14));
    class ZR {
      constructor(RR, JR) {
        this.memory = RR, this.access = JR, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.hK = 0, this.u32 = new uR.j(0), this.f32 = new uR.d(0), this.u8 = new uR.c(0), this.dataView = new uR.h(new ArrayBuffer(0)), this.refresh()
      }
      refresh() {
        this.ptr = this.access.ptr(), this.hK = this.access.hK(), this.buffer = (0, uR.D)(this.memory()), this.u32 = new uR.j(this.buffer, this.ptr, this.hK >>> 2), this.f32 = new uR.d(this.buffer, this.ptr, this.hK >>> 2), this.u8 = new uR.c(this.buffer, this.ptr, this.hK), this.dataView = new uR.h(this.buffer, this.ptr, this.hK)
      }
      ensureViews() {
        (0, uR.D)(this.memory()) !== this.buffer && this.refresh()
      }
      get view() {
        return this.ensureViews(), this.dataView
      }
      room(RR) {
        return !!this.fits(RR) || (this.dropped++, !1)
      }
      fits(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.cursor;
        this.ensureViews();
        const GR = JR + RR;
        return GR <= this.hK || GR <= yR.Nc && 0 !== this.access.reserve(GR) && (this.refresh(), GR <= this.hK)
      }
      consume(RR) {
        const JR = this.cursor - RR;
        JR > 0 && RR > 0 && (this.ensureViews(), this.u8.copyWithin(0, RR, this.cursor)), this.cursor = JR > 0 ? JR : 0
      }
      writeRecord(RR, JR, GR, tR, uR) {
        if (!this.room(yR.sb)) return !1;
        const ZR = this.cursor >>> 2;
        return this.u32[ZR] = 65535 & RR | (65535 & JR) << 16, this.f32[ZR + 1] = GR, this.f32[ZR + 2] = tR, this.u32[ZR + 3] = uR >>> 0, this.cursor += yR.sb, !0
      }
      writeOptions(RR, JR) {
        const GR = JR.byteLength,
          tR = yR.sb + (0, yR.ve)(GR);
        if (!this.fits(tR)) return !1;
        const uR = this.cursor,
          ZR = uR >>> 2;
        this.u32[ZR] = yR.wb.Options, this.u32[ZR + 1] = GR, this.u32[ZR + 2] = 0, this.u32[ZR + 3] = RR >>> 0;
        const qR = uR + yR.sb;
        return this.u8.set(JR, qR), this.u8.fill(0, qR + GR, uR + tR), this.cursor += tR, !0
      }
      writeWorkerRecord(RR, JR, GR, tR, uR, ZR) {
        const qR = ZR.byteLength,
          iR = yR.Pd + (0, yR.ve)(qR);
        if (qR > yR.Md) return this.dropped++, !1;
        if (!this.room(iR)) return !1;
        const fR = this.cursor,
          VR = fR >>> 2;
        this.u32[VR] = RR >>> 0, this.u32[VR + 1] = 65535 & JR | (65535 & GR) << 16, this.u32[VR + 2] = tR >>> 0, this.u32[VR + 3] = uR >>> 0, this.u32[VR + 4] = qR;
        const KR = fR + yR.Pd;
        return this.u8.set(ZR, KR), this.u8.fill(0, KR + qR, fR + iR), this.cursor += iR, !0
      }
      written() {
        return this.ensureViews(), this.u8.subarray(0, this.cursor)
      }
      writeFrame(RR, JR) {
        return this.writeNet(yR.Zb.Frame, RR, JR)
      }
      writeOpen(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(yR.Zb.Open, RR, iR(JR))
      }
      writeClose(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(yR.Zb.Close, RR, iR(JR))
      }
      writeNet(RR, JR, GR) {
        const tR = GR.byteLength,
          uR = yR.Yb + (0, yR.ve)(tR);
        if (tR > yR.Rb) return this.dropped++, !1;
        if (!this.room(uR)) return !1;
        const ZR = this.cursor;
        this.u32[ZR >>> 2] = tR, this.u32[1 + (ZR >>> 2)] = (0, yR.qe)(RR, JR);
        const qR = ZR + yR.Yb;
        return this.u8.set(GR, qR), this.u8.fill(0, qR + tR, ZR + uR), this.cursor += uR, !0
      }
      UK(RR, JR, GR) {
        const tR = yR.w + (0, yR.ve)(GR);
        if (!this.room(tR)) return -1;
        const uR = this.cursor;
        this.u32[uR >>> 2] = 65535 & RR | (65535 & JR) << 16, this.u32[1 + (uR >>> 2)] = GR;
        const ZR = uR + yR.w;
        return this.u8.fill(0, ZR, uR + tR), this.cursor += tR, ZR
      }
      growForCmd(RR) {
        return this.fits(yR.w + (0, yR.ve)(RR), 0)
      }
      writeCmd(RR, JR, GR) {
        const yR = this.UK(RR, JR, GR.byteLength);
        return !(yR < 0) && (this.u8.set(GR, yR), !0)
      }
      copyWritten(RR, JR) {
        return this.ensureViews(), this.u8.slice(RR, RR + JR)
      }
    }
    const qR = new uR.c(0);

    function iR(RR) {
      if (0 === RR) return qR;
      const JR = new uR.c(yR.Vb);
      for (let GR = 0; GR < yR.Vb; GR++) JR[GR] = RR >>> 8 * GR & 255;
      return JR
    }
    class fR {
      constructor(RR, JR) {
        this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new ZR(JR, {
          ptr: () => RR.ww(),
          hK: () => RR.aqR(),
          reserve: JR => RR.gqR(JR)
        }), this.net = new ZR(JR, {
          ptr: () => RR.MqR(),
          hK: () => RR.XqR(),
          reserve: JR => RR.bqR(JR)
        }), this.worker = new ZR(JR, {
          ptr: () => RR.TqR(),
          hK: () => RR.FqR(),
          reserve: JR => RR.vqR(JR)
        }), this.cmd = new ZR(JR, {
          ptr: () => RR.uqR(),
          hK: () => RR.yqR(),
          reserve: JR => RR.tqR(JR)
        })
      }
      reset(RR, JR, GR) {
        this.input.consume(RR), this.worker.consume(JR), this.cmd.consume(GR)
      }
    }
    var VR = GR(37183),
      KR = GR(3437),
      wR = GR(5671),
      rR = GR(42315);
    const eR = "coreFrame",
      aR = "fatalStatus",
      LR = "otherCall",
      nR = "coreRings",
      UR = "netIn",
      WR = "abi",
      AR = "netOut",
      CR = "workerOut",
      XR = "worldgenHost",
      MR = "eventWalker",
      BR = "netEvent",
      lR = "envEvent",
      pR = "sharedTables",
      gR = "inputAction",
      bR = "frameSends",
      vR = new Set([MR, BR, lR, bR, gR, pR]),
      OR = "wasmMemory",
      xR = "meshHost";

    function NR(RR, JR) {
      RR.forEachWorkerOut(((GR, tR, uR) => {
        if ((0, yR.je)(GR)) try {
          var ZR;
          null === (ZR = JR.worldgen) || void 0 === ZR || ZR.take(GR, uR)
        } catch (iR) {
          RR.crash(XR, iR)
        } else try {
          var qR;
          null === (qR = JR.mesh) || void 0 === qR || qR.take(GR, tR, uR)
        } catch (iR) {
          RR.crash(xR, iR)
        }
      }))
    }
    const DR = 1048576;

    function HR(RR, JR) {
      let GR = !1;
      const yR = () => {
        GR = !1, JR()
      };
      return () => {
        !GR && RR.cursor >= DR && (GR = !0, queueMicrotask(yR))
      }
    }
    const oR = new Set([aR, LR, XR, xR]);

    function cR(RR) {
      return vR.has(RR.site) ? RR.error instanceof WebAssembly.RuntimeError || (0, tR.i)(RR.error) : !oR.has(RR.site) && RR.error instanceof Error
    }
    const PR = "events",
      IR = [],
      mR = "debugLog",
      zR = "terrainTextures",
      SR = "sunShadowTextures",
      jR = "joinWarm",
      dR = {
        Home: 0,
        Play: 1,
        Joined: 2
      },
      ER = new TextDecoder;

    function YR(RR, JR) {
      const {
        site: GR,
        error: tR,
        header: uR
      } = RR, ZR = uR ? (0, yR.ge)(uR.lastError) : "noFrame", qR = `CORE-${GR===aR?ZR:GR}`, iR = null === tR || void 0 === tR ? "" : ` ${(0,VR.k)(tR)}`, fR = {
        site: GR,
        wasmBuild: JR.wasm,
        clientVersion: JR.client
      };
      return uR && (fR.status = String(uR.status), fR.lastError = ZR, fR.lastErrorCode = String(uR.lastError), fR.lastErrorDetail = String(uR.lastErrorDetail), fR.errorCount = String(uR.errorCount), fR.frameIndex = String(uR.frameIndex), fR.tickIndex = String(uR.tickIndex)), {
        code: qR,
        message: `core ${GR}, last error ${ZR};${iR}`,
        details: fR
      }
    }
    class kR {
      constructor(RR, JR, GR) {
        this.core = RR, this.memory = JR, this.handlers = GR, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.loadCountsBuffer = null, this.loadCounts = new Uint32Array(0), this.unsentUiPrefs = null, this.eventWalker = null, this.netOffsets = [], this.frameEvents = {
          ptr: 0,
          len: 0,
          net: IR,
          netOffsets: this.netOffsets,
          kind: "none"
        }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.atSendsStop = !1, this.rings = new fR(RR, JR)
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
      framePaces(RR) {
        if (this.stopped || this.drawsHeld) return !1;
        try {
          return this.core.wqR(RR)
        } catch (JR) {
          return this.crash(eR, JR), !1
        }
      }
      get isStopped() {
        return this.stopped
      }
      frame(RR, JR) {
        var GR;
        let uR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.stopped) return !1;
        if (!this.writePendingInput()) return !1;
        const {
          input: ZR,
          net: qR,
          worker: iR,
          cmd: fR
        } = this.rings, VR = qR.cursor, KR = JR && !this.drawsHeld;
        let LR = yR.L.Fatal;
        const nR = ZR.cursor,
          WR = iR.cursor,
          AR = fR.cursor;
        let CR, XR = null;
        const lR = this.handlers.onSends;
        try {
          const JR = (KR ? yR.cb.Draws : 0) | (uR ? yR.cb.NetAll : 0) | (lR ? yR.cb.StopForSends : 0);
          LR = (0, rR.f)((() => {
            let GR = this.core.frame(RR, nR, qR.cursor, WR, JR, AR);
            for (; GR === yR.md && lR;) {
              var tR;
              if (CR ??= null === (tR = this.gameHost) || void 0 === tR ? void 0 : tR.takeFault(), void 0 === CR && !this.takeSends(lR)) return yR.L.Fatal;
              GR = this.core.Zn()
            }
            return GR
          }))
        } catch (jR) {
          XR = {
            error: jR
          }
        }
        CR ??= null === (GR = this.gameHost) || void 0 === GR ? void 0 : GR.takeFault();
        const pR = this.stopped || null !== XR || void 0 !== CR;
        this.rings.reset(pR ? ZR.cursor : nR, pR ? iR.cursor : WR, pR ? fR.cursor : AR);
        const gR = null === XR && void 0 === CR,
          bR = gR && !this.stopped && LR === yR.L.Fatal && 0 === this.core.Sr(),
          vR = gR && !bR ? this.headerView() : null,
          OR = bR ? {
            ...null !== (xR = this.lastHeader) && void 0 !== xR ? xR : (0, yR.ye)(new Uint32Array(yR.jb)),
            status: yR.L.Fatal,
            lastError: yR.K.CoreBusy,
            lastErrorDetail: 0
          } : null === vR ? null : (0, yR.ye)(vR);
        var xR;
        null !== OR && (this.lastHeader = OR);
        const NR = null !== OR && LR !== yR.L.Fatal,
          DR = NR && null !== vR ? vR[yR.kb.NetInKept] : 0,
          HR = NR && DR <= VR && DR % 4 === 0 ? DR : null;
        var oR, cR;
        null !== OR && null !== HR && LR === yR.L.Errors && (null === (oR = (cR = this.handlers).onErrors) || void 0 === oR || oR.call(cR, OR));
        const PR = null === HR ? IR : this.readEvents(VR);
        if (qR.consume(VR - (null !== HR && void 0 !== HR ? HR : 0)), this.netKept = null !== HR && void 0 !== HR ? HR : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== XR) return this.crash(eR, void 0 === CR || CR instanceof tR.c ? XR.error : CR), !1;
        if (void 0 !== CR || null === OR) return this.crashOn(eR, CR), !1;
        if (bR) return this.crash(aR, null), !1;
        const mR = this.headerView()[yR.kb.FrameDraw];
        if (this.lastFrameKind = (0, wR.e)(KR, mR), LR === yR.L.Fatal) return this.crash(aR, null), !1;
        if (null === HR) return this.crash(UR, `the core kept ${DR} of ${VR} net-in bytes`), !1;
        if (this.eventWalker) {
          if (this.stopped) return !1;
          const RR = this.frameEvents,
            JR = this.headerView();
          RR.ptr = JR[yR.kb.EventsPtr], RR.len = JR[yR.kb.EventsLen], RR.net = PR, RR.kind = this.lastFrameKind;
          try {
            this.eventWalker(RR)
          } catch (jR) {
            return this.crashOn(MR, jR), !1
          }
          return this.handEnvEvents()
        }
        for (const yR of PR) {
          if (this.stopped) return !1;
          try {
            var zR, SR;
            null === (zR = (SR = this.handlers).onNetEvent) || void 0 === zR || zR.call(SR, yR)
          } catch (jR) {
            return this.crashOn(BR, jR), !1
          }
        }
        return this.handEnvEvents()
      }
      handEnvEvents() {
        for (const uR of this.graceEvents) {
          if (this.stopped) return !1;
          try {
            var RR, JR;
            null === (RR = (JR = this.handlers).onReconnectGrace) || void 0 === RR || RR.call(JR, uR)
          } catch (tR) {
            return this.crashOn(BR, tR), !1
          }
        }
        for (const uR of this.envEvents) {
          if (this.stopped) return !1;
          try {
            var GR, yR;
            null === (GR = (yR = this.handlers).onEnvEvent) || void 0 === GR || GR.call(yR, uR)
          } catch (tR) {
            return this.crashOn(lR, tR), !1
          }
        }
        return !this.stopped
      }
      setEventWalker(RR) {
        this.eventWalker = RR
      }
      writePendingInput() {
        if (this.stopped) return !1;
        const {
          input: RR
        } = this.rings;
        try {
          const JR = this.unsentUiPrefs;
          JR && RR.writeRecord(yR.wb.UiPrefs, 0, JR.nametagCutDistance, 0, (0, yR.Ae)(JR)) && (this.unsentUiPrefs = null);
          const GR = this.unsentEnvPrefs;
          GR && RR.writeRecord(yR.wb.EnvPrefs, (0, yR.ie)(GR), GR.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
          const tR = this.unsentLookPrefs;
          tR && RR.writeRecord(yR.wb.Sensitivity, 0, tR.mouse, tR.touch, (0, KR.l)(tR.fovPercent)) && (this.unsentLookPrefs = null);
          let uR = 0;
          for (const {
              aux: yR,
              payload: ZR
            }
            of this.unsentOptions) {
            if (!RR.writeOptions(yR, ZR)) {
              if (RR.cursor > 0) break;
              this.optionsDropped++
            }
            uR++
          }
          uR > 0 && this.unsentOptions.splice(0, uR)
        } catch (JR) {
          return this.crash(nR, JR), !1
        }
        return !0
      }
      setHoldDraws(RR) {
        this.drawsHeld = RR
      }
      setUiPrefs(RR) {
        this.unsentUiPrefs = {
          ...RR
        }
      }
      setEnvPrefs(RR) {
        this.unsentEnvPrefs = {
          ...RR
        }
      }
      setLookPrefs(RR) {
        this.unsentLookPrefs = {
          ...RR
        }
      }
      queueOptions(RR, JR) {
        return !this.isStopped && (JR.byteLength > yR.$b.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
          aux: RR,
          payload: JR
        }), !0))
      }
      setChunkCap(RR) {
        return this.callCore("setChunkCap", null, (JR => JR.cqR(RR)))
      }
      shedMemory(RR) {
        const JR = this.callCore("shedMemory", null, (JR => JR.jqR(RR)));
        return 0 === JR ? null : JR
      }
      releaseLeftGame() {
        this.callCore("releaseLeftGame", void 0, (RR => {
          RR.pqR()
        }))
      }
      addDistanceInUse() {
        const RR = this.callCore("addDistanceInUse", null, (RR => RR.sZR()));
        return 0 === RR ? null : RR
      }
      setChunkAddDistance(RR, JR) {
        return this.callCore("setChunkAddDistance", !1, (GR => GR.oqR(RR, JR)))
      }
      setGameHost(RR) {
        return this.callCore("setGameHost", !1, (JR => (JR.KqR(RR), this.gameHost = RR, !0)))
      }
      setAntiCheatProbes(RR) {
        return this.callCore("setAntiCheatProbes", !1, (JR => JR.DqR(RR)))
      }
      setAmbientOcclusion(RR) {
        this.callCore("setAmbientOcclusion", void 0, (JR => {
          JR.NqR(RR)
        }))
      }
      setPoseLod(RR) {
        this.callCore("setPoseLod", void 0, (JR => {
          JR.IqR(RR)
        }))
      }
      setDebugLog(RR, JR) {
        this.callCore(mR, void 0, (GR => {
          GR.Jn(RR, JR)
        }))
      }
      takeDebugLog(RR) {
        return this.callCore(mR, [], (JR => JR.Gn(RR)))
      }
      setTextureLayers(RR) {
        return this.callCore("setTextureLayers", !1, (JR => JR.SqR(RR)))
      }
      setBlockColours(RR) {
        let {
          blocks: JR,
          counts: GR,
          values: yR
        } = RR;
        return this.callCore("setBlockColours", !1, (RR => RR.ftR(JR, GR, yR)))
      }
      terrainTextureNames() {
        return this.callCore(zR, [], (RR => RR.QqR()))
      }
      setTerrainTextures(RR, JR, GR, yR) {
        return this.callCore(zR, !1, (tR => tR.zqR(RR, GR, JR, yR)))
      }
      setShaderPack(RR, JR, GR, yR, tR, uR) {
        return this.callCore("setShaderPack", !1, (ZR => {
          var qR, iR;
          return null !== (qR = null === (iR = ZR.ntR) || void 0 === iR ? void 0 : iR.call(ZR, RR, JR, GR, yR, tR, uR)) && void 0 !== qR && qR
        }))
      }
      warmBeforeJoin(RR, JR) {
        this.callCore(jR, void 0, (GR => {
          var yR;
          null === (yR = GR.VqR) || void 0 === yR || yR.call(GR, RR, JR)
        }))
      }
      firstViewTerrainCodes() {
        return this.callCore(jR, null, (RR => {
          var JR, GR;
          return null !== (JR = null === (GR = RR.KtR) || void 0 === GR ? void 0 : GR.call(RR)) && void 0 !== JR ? JR : null
        }))
      }
      sunShadowWantedTextures() {
        return this.callCore(SR, null, (RR => {
          var JR, GR;
          return null !== (JR = null === (GR = RR.dqR) || void 0 === GR ? void 0 : GR.call(RR)) && void 0 !== JR ? JR : null
        }))
      }
      setSunShadowTexture(RR, JR, GR, yR, tR) {
        this.callCore(SR, void 0, (uR => {
          var ZR;
          null === (ZR = uR.mqR) || void 0 === ZR || ZR.call(uR, RR, JR, GR, yR, tR)
        }))
      }
      takeSunShadowWarnings() {
        return this.callCore(SR, [], (RR => {
          var JR, GR;
          return null !== (JR = null === (GR = RR.YqR) || void 0 === GR ? void 0 : GR.call(RR)) && void 0 !== JR ? JR : []
        }))
      }
      sunShadowsHeld() {
        return this.callCore(SR, null, (RR => {
          var JR, GR;
          return null !== (JR = null === (GR = RR.EqR) || void 0 === GR ? void 0 : GR.call(RR)) && void 0 !== JR ? JR : null
        }))
      }
      callCore(RR, JR, GR) {
        if (this.stopped) return JR;
        try {
          return GR(this.core)
        } catch (yR) {
          return this.crash(RR, yR), JR
        }
      }
      readEvents(RR) {
        this.netOffsets.length = 0;
        const JR = this.headerView(),
          GR = JR[yR.kb.EventsPtr],
          tR = JR[yR.kb.EventsLen];
        if (this.envEvents.length = 0, this.graceEvents.length = 0, 0 === tR) return IR;
        const uR = [],
          ZR = this.memory().buffer;
        if (GR % 4 !== 0 || GR + tR > ZR.byteLength) return this.crash(PR, `events of ${tR} bytes at ${GR} outside ${ZR.byteLength} bytes of memory`), IR;
        const qR = new DataView(ZR, GR, tR),
          iR = this.rings.net,
          fR = (JR, GR) => JR + GR <= RR ? iR.copyWritten(JR, GR) : null;
        let VR = 0;
        for (; VR < tR;) {
          const RR = VR + yR.T,
            JR = RR <= tR ? qR.getUint32(VR, !0) : -1,
            iR = JR >>> 16;
          if (JR < 0 || iR > tR - RR) return this.crash(PR, `event record at ${VR} overruns its ${tR} bytes`), IR;
          const gR = 65535 & JR,
            bR = JR => qR.getUint32(RR + 4 * JR, !0);
          if (gR === yR.X.RawMessage) {
            const RR = iR >= yR.Oc.BYTES ? 65535 & bR(1) : -1,
              JR = RR === yR.Oc.STRING_TYPE,
              GR = iR === (JR ? yR.Oc.STRING_TYPE_BYTES : yR.Oc.BYTES) ? fR(bR(2), bR(3)) : null,
              tR = JR && GR ? fR(bR(4), bR(5)) : null;
            if (!GR || JR && !tR) return this.crash(PR, `RawMessage at ${VR} of ${iR} bytes names bytes outside net-in`), IR;
            this.netOffsets.push(VR), uR.push({
              type: "message",
              conn: bR(0),
              LZ: RR,
              payloadKind: bR(1) >>> 16,
              payload: GR,
              stringType: tR ? ER.decode(tR) : null
            })
          } else if (gR === yR.X.CoreErrors) {
            var KR, wR;
            const RR = iR >= 4 ? bR(0) : -1;
            if (RR < 0 || RR > yR.J.PAIRS_MAX || iR !== 4 * (yR.J.FIXED_WORDS + yR.J.PAIR_WORDS * RR)) return this.crash(PR, `CoreErrors at ${VR} of ${iR} bytes`), IR;
            const JR = [];
            for (let GR = 0; GR < RR; GR++) JR.push({
              code: bR(1 + 2 * GR),
              detail: bR(2 + 2 * GR)
            });
            null === (KR = (wR = this.handlers).onCoreErrors) || void 0 === KR || KR.call(wR, JR, bR(1 + 2 * RR))
          } else if (gR === yR.X.RenderReload) {
            var rR, eR;
            if (iR !== yR.Yc.BYTES) return this.crash(PR, `RenderReload at ${VR} of ${iR} bytes`), IR;
            null === (rR = (eR = this.handlers).onRenderReload) || void 0 === rR || rR.call(eR, bR(0), bR(1), bR(2))
          } else if (gR === yR.X.JoinPreloadEnded) {
            var aR, LR;
            if (iR !== yR.Ab.BYTES) return this.crash(PR, `JoinPreloadEnded at ${VR} of ${iR} bytes`), IR;
            null === (aR = (LR = this.handlers).onJoinPreloadEnded) || void 0 === aR || aR.call(LR, {
              chunks: bR(yR.Ab.CHUNKS),
              bytes: bR(yR.Ab.BYTES_HELD),
              asked: bR(yR.Ab.ASKED),
              replaced: bR(yR.Ab.REPLACED),
              dropped: bR(yR.Ab.DROPPED)
            })
          } else if (gR === yR.X.Images) {
            var nR, UR;
            null === (nR = (UR = this.handlers).onImages) || void 0 === nR || nR.call(UR, new Uint8Array(ZR.slice(GR + RR, GR + RR + iR)))
          } else if (gR === yR.X.ModelRequests)
            for (let GR = 0; GR < iR >>> 2; GR++) {
              var WR, AR;
              null === (WR = (AR = this.handlers).onModelRequest) || void 0 === WR || WR.call(AR, bR(GR))
            } else if (gR === yR.X.ModelTaken) {
              var CR, XR;
              if (iR < 4) return this.crash(PR, `ModelTaken at ${VR} of ${iR} bytes`), IR;
              const RR = new Uint32Array((iR >>> 2) - 1);
              for (let JR = 0; JR < RR.length; JR++) RR[JR] = bR(1 + JR);
              null === (CR = (XR = this.handlers).onModelTaken) || void 0 === CR || CR.call(XR, bR(0), RR)
            } else if (gR === yR.X.TerrainTexturesWanted) {
            var MR, BR;
            if (0 !== iR) return this.crash(PR, `TerrainTexturesWanted at ${VR} of ${iR} bytes`), IR;
            null === (MR = (BR = this.handlers).onTerrainTexturesWanted) || void 0 === MR || MR.call(BR)
          } else if (gR === yR.X.KeepAliveDue) {
            var lR, pR;
            if (iR > yR.Bb) return this.crash(PR, `KeepAliveDue at ${VR} of ${iR} bytes`), IR;
            null === (lR = (pR = this.handlers).onKeepAlive) || void 0 === lR || lR.call(pR, new Uint8Array(ZR, GR + RR, iR).slice())
          } else if (gR === yR.X.ConnectionState) {
            if (iR !== yR.y) return this.crash(PR, `ConnectionState at ${VR} of ${iR} bytes`), IR;
            this.netOffsets.push(VR), uR.push({
              type: "connection",
              conn: bR(0),
              phase: bR(1),
              code: 0 | bR(2)
            })
          } else if (gR === yR.X.EnvLighting || gR === yR.X.SkyImages) {
            if (iR !== (gR === yR.X.EnvLighting ? yR.R : yR.sd)) return this.crash(PR, `event ${gR} at ${VR} of ${iR} bytes`), IR;
            this.envEvents.push({
              kind: gR,
              payload: new Uint8Array(ZR.slice(GR + RR, GR + RR + iR))
            })
          } else if (gR === yR.X.ReconnectGrace) {
            if (iR !== yR.pc) return this.crash(PR, `ReconnectGrace at ${VR} of ${iR} bytes`), IR;
            const RR = bR(2);
            this.graceEvents.push({
              conn: bR(0),
              graceMs: bR(1),
              sessionBased: 0 !== (RR & yR.Qc.SessionBased),
              replayOffer: 0 !== (RR & yR.Qc.ReplayOffer)
            })
          }
          VR = RR + (0, yR.ve)(iR)
        }
        return uR
      }
      takeSends(RR) {
        this.atSendsStop = !0;
        try {
          RR()
        } catch (JR) {
          this.crashOn(bR, JR)
        } finally {
          this.atSendsStop = !1
        }
        return !this.stopped
      }
      forEachNetOut(RR) {
        this.forEachOut(AR, "net-out", yR.kb.NetOutPtr, yR.kb.NetOutLen, yR.Yb, 0, ((JR, GR, tR, uR) => {
          const ZR = (0, yR.me)(GR);
          ZR === yR.Zb.Frame ? RR((0, yR.ke)(GR), tR) : this.crash(AR, `net-out record at ${uR} is kind ${ZR}, not a frame`)
        }))
      }
      forEachWorkerOut(RR) {
        this.forEachOut(CR, "worker-out", yR.kb.WorkerOutPtr, yR.kb.WorkerOutLen, yR.Id, 4, ((JR, GR, tR, uR) => {
          const ZR = 255 & JR,
            qR = ZR === yR.Yd.Init ? this.initOf(tR, uR) : tR;
          null !== qR && RR(ZR, JR >>> 8 & 16777215, qR)
        }))
      }
      initOf(RR, JR) {
        const GR = this.memory().buffer;
        if (RR.byteLength !== yR.nb) return this.crash(CR, `worker-out Init record at ${JR} is ${RR.byteLength} bytes, not a view`), null;
        const tR = new DataView(RR.buffer, RR.byteOffset, yR.nb),
          uR = tR.getUint32(0, !0),
          ZR = tR.getUint32(4, !0);
        return uR + ZR > GR.byteLength ? (this.crash(CR, `worker-out Init record at ${JR} names ${ZR} bytes at ${uR} outside ${GR.byteLength} bytes of memory`), null) : new Uint8Array(GR, uR, ZR)
      }
      forEachOut(RR, JR, GR, tR, uR, ZR, qR) {
        if (!this.headerReadable()) return;
        const iR = this.headerView(),
          fR = iR[GR],
          VR = iR[tR];
        if (0 === VR) return;
        const KR = this.memory().buffer;
        if (fR % 4 !== 0 || fR + VR > KR.byteLength) return void this.crash(RR, `${JR} of ${VR} bytes at ${fR} outside ${KR.byteLength} bytes of memory`);
        const wR = new DataView(KR, fR, VR);
        let rR = 0;
        for (; rR < VR;) {
          const GR = rR + uR,
            tR = GR <= VR ? wR.getUint32(rR + ZR, !0) : -1;
          if (tR < 0 || tR > VR - GR) return void this.crash(RR, `${JR} record at ${rR} overruns its ${VR} bytes`);
          if (qR(wR.getUint32(rR, !0), wR.getUint32(rR + 4, !0), new Uint8Array(KR, fR + GR, tR), rR), this.stopped) return;
          rR = GR + (0, yR.ve)(tR)
        }
      }
      forEachEvent(RR) {
        if (this.stopped || null === this.lastHeader) return;
        const JR = this.headerView(),
          GR = JR[yR.kb.EventsPtr],
          tR = JR[yR.kb.EventsLen];
        if (0 === tR) return;
        const uR = this.memory().buffer;
        if (GR % 4 !== 0 || GR + tR > uR.byteLength) return void this.crash(PR, `events of ${tR} bytes at ${GR} outside ${uR.byteLength} bytes of memory`);
        const ZR = new DataView(uR, GR, tR);
        let qR = 0;
        for (; qR < tR;) {
          const JR = qR + yR.T,
            GR = JR <= tR ? ZR.getUint32(qR, !0) : -1,
            uR = GR >>> 16;
          if (GR < 0 || uR > tR - JR) return void this.crash(PR, `event record at ${qR} overruns its ${tR} bytes`);
          RR(65535 & GR, ZR, JR, uR), qR = JR + (0, yR.ve)(uR)
        }
      }
      crashOn(RR, JR) {
        JR instanceof tR.c ? this.crash(PR, JR.message) : this.crash(RR, JR)
      }
      crash(RR, JR) {
        this.stopped || (this.stopped = !0, this.handlers.onCrash({
          site: RR,
          error: JR,
          header: this.lastHeader
        }))
      }
      headerWord(RR) {
        return this.headerReadable() ? this.headerView()[RR] : 0
      }
      headerReadable() {
        return !this.stopped && (null !== this.lastHeader || this.atSendsStop)
      }
      readLoadCounts(RR) {
        const JR = this.loadCountWords();
        return null !== JR && (RR.chunksReceived = JR[yR.Jb.ChunksReceived], RR.chunksCancelled = this.headerView()[yR.kb.ChunksCancelled], RR.chunksStored = JR[yR.Jb.ChunksStored], RR.jobsSent = JR[yR.Jb.JobsSent], RR.jobsDone = JR[yR.Jb.JobsDone], RR.jobsInFlight = JR[yR.Jb.JobsInFlight], RR.workersLive = JR[yR.Jb.WorkersLive], RR.workersRetired = JR[yR.Jb.WorkersRetired], !0)
      }
      readViewQueuedPrograms() {
        var RR, JR;
        const GR = null !== (RR = null === (JR = this.loadCountWords()) || void 0 === JR ? void 0 : JR[yR.Jb.ViewQueuedPrograms]) && void 0 !== RR ? RR : 0;
        return 0 === GR ? null : GR - 1
      }
      readFirstViewWait(RR, JR) {
        const GR = this.loadCountWords();
        return null === GR ? null : [GR[yR.Jb.FirstViewLinkMs], GR[yR.Jb.FirstViewTerrainMs], GR[yR.Jb.FirstViewHeldMs], GR[yR.Jb.FirstViewOtherMs], GR[yR.Jb.FirstViewGaps], GR[yR.Jb.FirstViewGapMs], RR, JR]
      }
      loadCountWords() {
        if (this.stopped || null === this.lastHeader) return null;
        const RR = this.core.Rn();
        if (0 === RR) return null;
        const JR = this.memory().buffer;
        return JR !== this.loadCountsBuffer && (this.loadCountsBuffer = JR, this.loadCounts = new Uint32Array(JR, RR, yR.Db)), this.loadCounts
      }
      headerView() {
        const RR = this.memory().buffer;
        return RR !== this.headerBuffer && (this.headerBuffer = RR, this.header = new Uint32Array(RR, this.core.Sr(), yR.jb)), this.header
      }
    }
  },
  42315: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => ZR,
      f: () => uR
    });
    var yR = GR(5554);
    let tR = null;

    function uR(RR) {
      tR = {
        scanned: !1
      };
      try {
        return RR()
      } finally {
        tR = null
      }
    }

    function ZR() {
      const RR = tR;
      if (null === RR) return (0, yR.h)();
      const JR = (0, yR.h)(!RR.scanned);
      return RR.scanned = !0, JR
    }
  },
  42374: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => yR
    });
    const yR = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  37362: (RR, JR, GR) => {
    function yR() {
      return GR(37370)
    }

    function tR() {
      return GR(37379)
    }

    function uR(RR) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(RR)
    }
    GR.d(JR, {
      c: () => uR,
      f: () => yR,
      j: () => tR
    })
  },
  37370: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  37379: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);