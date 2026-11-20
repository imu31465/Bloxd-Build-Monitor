export const id = 263;
export const ids = [263];
export const modules = {
  40733: (qq, Eq, gq) => {
    function Yq(qq, Eq, gq) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(qq, Eq).getContext("2d", gq);
      const Yq = document.createElement("canvas");
      return Yq.width = qq, Yq.height = Eq, Yq.getContext("2d", gq)
    }

    function lq(qq, Eq) {
      return qq.getContext("2d", Eq)
    }
    gq.d(Eq, {
      d: () => lq,
      f: () => Yq
    })
  },
  40659: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => oq,
      i: () => aq,
      l: () => Fq,
      p: () => nq,
      r: () => iq,
      s: () => Zq,
      w: () => Hq,
      x: () => dq,
      z: () => jq,
      B: () => hq,
      D: () => Jq,
      G: () => yq,
      K: () => Sq,
      L: () => Uq,
      O: () => fq,
      S: () => Tq
    });
    var Yq = gq(4622),
      lq = gq(40369),
      Oq = (gq(40515), gq(15));
    class mq {
      constructor(qq, Eq) {
        this.memory = qq, this.access = Eq, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.WB = 0, this.u32 = new Oq.l(0), this.f32 = new Oq.g(0), this.u8 = new Oq.c(0), this.dataView = new Oq.i(new ArrayBuffer(0)), this.refresh()
      }
      refresh() {
        this.ptr = this.access.ptr(), this.WB = this.access.WB(), this.buffer = (0, Oq.K)(this.memory()), this.u32 = new Oq.l(this.buffer, this.ptr, this.WB >>> 2), this.f32 = new Oq.g(this.buffer, this.ptr, this.WB >>> 2), this.u8 = new Oq.c(this.buffer, this.ptr, this.WB), this.dataView = new Oq.i(this.buffer, this.ptr, this.WB)
      }
      ensureViews() {
        (0, Oq.K)(this.memory()) !== this.buffer && this.refresh()
      }
      get view() {
        return this.ensureViews(), this.dataView
      }
      room(qq) {
        return !!this.fits(qq) || (this.dropped++, !1)
      }
      fits(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.cursor;
        this.ensureViews();
        const gq = Eq + qq;
        return gq <= this.WB || gq <= Yq.Lc && 0 !== this.access.reserve(gq) && (this.refresh(), gq <= this.WB)
      }
      consume(qq) {
        const Eq = this.cursor - qq;
        Eq > 0 && qq > 0 && (this.ensureViews(), this.u8.copyWithin(0, qq, this.cursor)), this.cursor = Eq > 0 ? Eq : 0
      }
      writeRecord(qq, Eq, gq, lq, Oq) {
        if (!this.room(Yq.rb)) return !1;
        const mq = this.cursor >>> 2;
        return this.u32[mq] = 65535 & qq | (65535 & Eq) << 16, this.f32[mq + 1] = gq, this.f32[mq + 2] = lq, this.u32[mq + 3] = Oq >>> 0, this.cursor += Yq.rb, !0
      }
      writeOptions(qq, Eq) {
        const gq = Eq.byteLength,
          lq = Yq.rb + (0, Yq.Ce)(gq);
        if (!this.fits(lq)) return !1;
        const Oq = this.cursor,
          mq = Oq >>> 2;
        this.u32[mq] = Yq.sb.Options, this.u32[mq + 1] = gq, this.u32[mq + 2] = 0, this.u32[mq + 3] = qq >>> 0;
        const xq = Oq + Yq.rb;
        return this.u8.set(Eq, xq), this.u8.fill(0, xq + gq, Oq + lq), this.cursor += lq, !0
      }
      writeWorkerRecord(qq, Eq, gq, lq, Oq, mq) {
        const xq = mq.byteLength,
          Aq = Yq.Rd + (0, Yq.Ce)(xq);
        if (xq > Yq.Nd) return this.dropped++, !1;
        if (!this.room(Aq)) return !1;
        const cq = this.cursor,
          uq = cq >>> 2;
        this.u32[uq] = qq >>> 0, this.u32[uq + 1] = 65535 & Eq | (65535 & gq) << 16, this.u32[uq + 2] = lq >>> 0, this.u32[uq + 3] = Oq >>> 0, this.u32[uq + 4] = xq;
        const Bq = cq + Yq.Rd;
        return this.u8.set(mq, Bq), this.u8.fill(0, Bq + xq, cq + Aq), this.cursor += Aq, !0
      }
      written() {
        return this.ensureViews(), this.u8.subarray(0, this.cursor)
      }
      writeFrame(qq, Eq) {
        return this.writeNet(Yq.Ub.Frame, qq, Eq)
      }
      writeOpen(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(Yq.Ub.Open, qq, Aq(Eq))
      }
      writeClose(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(Yq.Ub.Close, qq, Aq(Eq))
      }
      writeNet(qq, Eq, gq) {
        const lq = gq.byteLength,
          Oq = Yq.Tb + (0, Yq.Ce)(lq);
        if (lq > Yq.Pb) return this.dropped++, !1;
        if (!this.room(Oq)) return !1;
        const mq = this.cursor;
        this.u32[mq >>> 2] = lq, this.u32[1 + (mq >>> 2)] = (0, Yq.ze)(qq, Eq);
        const xq = mq + Yq.Tb;
        return this.u8.set(gq, xq), this.u8.fill(0, xq + lq, mq + Oq), this.cursor += Oq, !0
      }
      gN(qq, Eq, gq) {
        const lq = Yq.m + (0, Yq.Ce)(gq);
        if (!this.room(lq)) return -1;
        const Oq = this.cursor;
        this.u32[Oq >>> 2] = 65535 & qq | (65535 & Eq) << 16, this.u32[1 + (Oq >>> 2)] = gq;
        const mq = Oq + Yq.m;
        return this.u8.fill(0, mq, Oq + lq), this.cursor += lq, mq
      }
      growForCmd(qq) {
        return this.fits(Yq.m + (0, Yq.Ce)(qq), 0)
      }
      writeCmd(qq, Eq, gq) {
        const Yq = this.gN(qq, Eq, gq.byteLength);
        return !(Yq < 0) && (this.u8.set(gq, Yq), !0)
      }
      copyWritten(qq, Eq) {
        return this.ensureViews(), this.u8.slice(qq, qq + Eq)
      }
    }
    const xq = new Oq.c(0);

    function Aq(qq) {
      if (0 === qq) return xq;
      const Eq = new Oq.c(Yq.Sb);
      for (let gq = 0; gq < Yq.Sb; gq++) Eq[gq] = qq >>> 8 * gq & 255;
      return Eq
    }
    class cq {
      constructor(qq, Eq) {
        this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new mq(Eq, {
          ptr: () => qq.vB(),
          WB: () => qq.COq(),
          reserve: Eq => qq.xmq(Eq)
        }), this.net = new mq(Eq, {
          ptr: () => qq.lmq(),
          WB: () => qq.Ymq(),
          reserve: Eq => qq.Amq(Eq)
        }), this.worker = new mq(Eq, {
          ptr: () => qq.imq(),
          WB: () => qq.bmq(),
          reserve: Eq => qq.cmq(Eq)
        }), this.cmd = new mq(Eq, {
          ptr: () => qq.JOq(),
          WB: () => qq.GOq(),
          reserve: Eq => qq.LOq(Eq)
        })
      }
      reset(qq) {
        this.input.cursor = 0, this.worker.cursor = 0, this.cmd.consume(qq)
      }
    }
    var uq = gq(36356),
      Bq = gq(2364),
      Wq = gq(4616),
      Nq = gq(40663);
    const aq = "coreFrame",
      Vq = "fatalStatus",
      dq = "otherCall",
      jq = "coreRings",
      Hq = "netIn",
      oq = "abi",
      Pq = "netOut",
      Qq = "workerOut",
      yq = "worldgenHost",
      tq = "eventWalker",
      rq = "netEvent",
      vq = "envEvent",
      hq = "sharedTables",
      nq = "inputAction",
      bq = new Set([tq, rq, vq, nq, hq]),
      iq = "wasmMemory",
      Zq = "meshHost";

    function fq(qq, Eq) {
      qq.forEachWorkerOut(((gq, lq, Oq) => {
        if ((0, Yq.se)(gq)) try {
          var mq;
          null === (mq = Eq.worldgen) || void 0 === mq || mq.take(gq, Oq)
        } catch (Aq) {
          qq.crash(yq, Aq)
        } else try {
          var xq;
          null === (xq = Eq.mesh) || void 0 === xq || xq.take(gq, lq, Oq)
        } catch (Aq) {
          qq.crash(Zq, Aq)
        }
      }))
    }
    const Mq = 1048576;

    function Tq(qq, Eq) {
      let gq = !1;
      const Yq = () => {
        gq = !1, Eq()
      };
      return () => {
        !gq && qq.cursor >= Mq && (gq = !0, queueMicrotask(Yq))
      }
    }
    const zq = new Set([Vq, dq, yq, Zq]);

    function Sq(qq) {
      return bq.has(qq.site) ? qq.error instanceof WebAssembly.RuntimeError || (0, lq.o)(qq.error) : !zq.has(qq.site) && qq.error instanceof Error
    }
    const pq = "events",
      Gq = [],
      Lq = "debugLog",
      Jq = "terrainTextures",
      kq = "sunShadowTextures",
      Rq = new TextDecoder;

    function Uq(qq, Eq) {
      const {
        site: gq,
        error: lq,
        header: Oq
      } = qq, mq = Oq ? (0, Yq.ne)(Oq.lastError) : "noFrame", xq = `CORE-${gq===Vq?mq:gq}`, Aq = null === lq || void 0 === lq ? "" : ` ${(0,uq.j)(lq)}`, cq = {
        site: gq,
        wasmBuild: Eq.wasm,
        clientVersion: Eq.client
      };
      return Oq && (cq.status = String(Oq.status), cq.lastError = mq, cq.lastErrorCode = String(Oq.lastError), cq.lastErrorDetail = String(Oq.lastErrorDetail), cq.errorCount = String(Oq.errorCount), cq.frameIndex = String(Oq.frameIndex), cq.tickIndex = String(Oq.tickIndex)), {
        code: xq,
        message: `core ${gq}, last error ${mq};${Aq}`,
        details: cq
      }
    }
    class Fq {
      constructor(qq, Eq, gq) {
        this.core = qq, this.memory = Eq, this.handlers = gq, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.loadCountsBuffer = null, this.loadCounts = new Uint32Array(0), this.unsentUiPrefs = null, this.eventWalker = null, this.netOffsets = [], this.frameEvents = {
          ptr: 0,
          len: 0,
          net: Gq,
          netOffsets: this.netOffsets,
          kind: "none"
        }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.rings = new cq(qq, Eq)
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
      framePaces(qq) {
        if (this.stopped || this.drawsHeld) return !1;
        try {
          return this.core.XOq(qq)
        } catch (Eq) {
          return this.crash(aq, Eq), !1
        }
      }
      get isStopped() {
        return this.stopped
      }
      frame(qq, Eq) {
        var gq;
        let Oq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.stopped) return !1;
        if (!this.writePendingInput()) return !1;
        const {
          input: mq,
          net: xq,
          worker: Aq,
          cmd: cq
        } = this.rings, uq = xq.cursor, Bq = Eq && !this.drawsHeld;
        let dq = Yq.D.Fatal;
        const jq = cq.cursor;
        let oq = null;
        try {
          const Eq = (Bq ? Yq._.Draws : 0) | (Oq ? Yq._.NetAll : 0);
          dq = (0, Nq.c)((() => this.core.frame(qq, mq.cursor, xq.cursor, Aq.cursor, Eq, jq)))
        } catch (zq) {
          oq = {
            error: zq
          }
        }
        const Pq = null === (gq = this.gameHost) || void 0 === gq ? void 0 : gq.takeFault();
        this.rings.reset(this.stopped || null !== oq || void 0 !== Pq ? cq.cursor : jq);
        const Qq = null === oq && void 0 === Pq ? this.headerView() : null,
          yq = null === Qq ? null : (0, Yq.Fe)(Qq);
        null !== yq && (this.lastHeader = yq);
        const vq = null !== yq && dq !== Yq.D.Fatal,
          hq = vq && null !== Qq ? Qq[Yq.hb.NetInKept] : 0,
          nq = vq && hq <= uq && hq % 4 === 0 ? hq : null;
        var bq, iq;
        null !== yq && null !== nq && dq === Yq.D.Errors && (null === (bq = (iq = this.handlers).onErrors) || void 0 === bq || bq.call(iq, yq));
        const Zq = null === nq ? Gq : this.readEvents(uq);
        if (xq.consume(uq - (null !== nq && void 0 !== nq ? nq : 0)), this.netKept = null !== nq && void 0 !== nq ? nq : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== oq) return this.crash(aq, void 0 === Pq || Pq instanceof lq.d ? oq.error : Pq), !1;
        if (void 0 !== Pq || null === yq) return this.crashOn(aq, Pq), !1;
        const fq = this.headerView()[Yq.hb.FrameDraw];
        if (this.lastFrameKind = (0, Wq.e)(Bq, fq), dq === Yq.D.Fatal) return this.crash(Vq, null), !1;
        if (null === nq) return this.crash(Hq, `the core kept ${hq} of ${uq} net-in bytes`), !1;
        if (this.eventWalker) {
          if (this.stopped) return !1;
          const qq = this.frameEvents,
            Eq = this.headerView();
          qq.ptr = Eq[Yq.hb.EventsPtr], qq.len = Eq[Yq.hb.EventsLen], qq.net = Zq, qq.kind = this.lastFrameKind;
          try {
            this.eventWalker(qq)
          } catch (zq) {
            return this.crashOn(tq, zq), !1
          }
          return this.handEnvEvents()
        }
        for (const Yq of Zq) {
          if (this.stopped) return !1;
          try {
            var Mq, Tq;
            null === (Mq = (Tq = this.handlers).onNetEvent) || void 0 === Mq || Mq.call(Tq, Yq)
          } catch (zq) {
            return this.crashOn(rq, zq), !1
          }
        }
        return this.handEnvEvents()
      }
      handEnvEvents() {
        for (const Oq of this.graceEvents) {
          if (this.stopped) return !1;
          try {
            var qq, Eq;
            null === (qq = (Eq = this.handlers).onReconnectGrace) || void 0 === qq || qq.call(Eq, Oq)
          } catch (lq) {
            return this.crashOn(rq, lq), !1
          }
        }
        for (const Oq of this.envEvents) {
          if (this.stopped) return !1;
          try {
            var gq, Yq;
            null === (gq = (Yq = this.handlers).onEnvEvent) || void 0 === gq || gq.call(Yq, Oq)
          } catch (lq) {
            return this.crashOn(vq, lq), !1
          }
        }
        return !this.stopped
      }
      setEventWalker(qq) {
        this.eventWalker = qq
      }
      writePendingInput() {
        if (this.stopped) return !1;
        const {
          input: qq
        } = this.rings;
        try {
          const Eq = this.unsentUiPrefs;
          Eq && qq.writeRecord(Yq.sb.UiPrefs, 0, Eq.nametagCutDistance, 0, (0, Yq.He)(Eq)) && (this.unsentUiPrefs = null);
          const gq = this.unsentEnvPrefs;
          gq && qq.writeRecord(Yq.sb.EnvPrefs, (0, Yq.re)(gq), gq.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
          const lq = this.unsentLookPrefs;
          lq && qq.writeRecord(Yq.sb.Sensitivity, 0, lq.mouse, lq.touch, (0, Bq.k)(lq.fovPercent)) && (this.unsentLookPrefs = null);
          let Oq = 0;
          for (const {
              aux: Yq,
              payload: mq
            }
            of this.unsentOptions) {
            if (!qq.writeOptions(Yq, mq)) {
              if (qq.cursor > 0) break;
              this.optionsDropped++
            }
            Oq++
          }
          Oq > 0 && this.unsentOptions.splice(0, Oq)
        } catch (Eq) {
          return this.crash(jq, Eq), !1
        }
        return !0
      }
      setHoldDraws(qq) {
        this.drawsHeld = qq
      }
      setUiPrefs(qq) {
        this.unsentUiPrefs = {
          ...qq
        }
      }
      setEnvPrefs(qq) {
        this.unsentEnvPrefs = {
          ...qq
        }
      }
      setLookPrefs(qq) {
        this.unsentLookPrefs = {
          ...qq
        }
      }
      queueOptions(qq, Eq) {
        return !this.isStopped && (Eq.byteLength > Yq._b.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
          aux: qq,
          payload: Eq
        }), !0))
      }
      setChunkCap(qq) {
        return this.callCore("setChunkCap", null, (Eq => Eq.Vmq(qq)))
      }
      shedMemory(qq) {
        const Eq = this.callCore("shedMemory", null, (Eq => Eq.ymq(qq)));
        return 0 === Eq ? null : Eq
      }
      addDistanceInUse() {
        const qq = this.callCore("addDistanceInUse", null, (qq => qq.MOq()));
        return 0 === qq ? null : qq
      }
      setChunkAddDistance(qq, Eq) {
        return this.callCore("setChunkAddDistance", !1, (gq => gq.amq(qq, Eq)))
      }
      setGameHost(qq) {
        return this.callCore("setGameHost", !1, (Eq => (Eq.sOq(qq), this.gameHost = qq, !0)))
      }
      setAntiCheatProbes(qq) {
        return this.callCore("setAntiCheatProbes", !1, (Eq => Eq.Wmq(qq)))
      }
      setAmbientOcclusion(qq) {
        this.callCore("setAmbientOcclusion", void 0, (Eq => {
          Eq.Bmq(qq)
        }))
      }
      setPoseLod(qq) {
        this.callCore("setPoseLod", void 0, (Eq => {
          Eq.jmq(qq)
        }))
      }
      setDebugLog(qq, Eq) {
        this.callCore(Lq, void 0, (gq => {
          gq.Pd(qq, Eq)
        }))
      }
      takeDebugLog(qq) {
        return this.callCore(Lq, [], (Eq => Eq.Qd(qq)))
      }
      setTextureLayers(qq) {
        return this.callCore("setTextureLayers", !1, (Eq => Eq.Qmq(qq)))
      }
      setBlockColours(qq) {
        let {
          blocks: Eq,
          counts: gq,
          values: Yq
        } = qq;
        return this.callCore("setBlockColours", !1, (qq => qq.HYq(Eq, gq, Yq)))
      }
      terrainTextureNames() {
        return this.callCore(Jq, [], (qq => qq.nmq()))
      }
      setTerrainTextures(qq, Eq, gq, Yq) {
        return this.callCore(Jq, !1, (lq => lq.Pmq(qq, gq, Eq, Yq)))
      }
      setShaderPack(qq, Eq, gq, Yq, lq, Oq) {
        return this.callCore("setShaderPack", !1, (mq => {
          var xq, Aq;
          return null !== (xq = null === (Aq = mq.fYq) || void 0 === Aq ? void 0 : Aq.call(mq, qq, Eq, gq, Yq, lq, Oq)) && void 0 !== xq && xq
        }))
      }
      sunShadowWantedTextures() {
        return this.callCore(kq, null, (qq => {
          var Eq, gq;
          return null !== (Eq = null === (gq = qq.tmq) || void 0 === gq ? void 0 : gq.call(qq)) && void 0 !== Eq ? Eq : null
        }))
      }
      setSunShadowTexture(qq, Eq, gq, Yq, lq) {
        this.callCore(kq, void 0, (Oq => {
          var mq;
          null === (mq = Oq.omq) || void 0 === mq || mq.call(Oq, qq, Eq, gq, Yq, lq)
        }))
      }
      takeSunShadowWarnings() {
        return this.callCore(kq, [], (qq => {
          var Eq, gq;
          return null !== (Eq = null === (gq = qq.vmq) || void 0 === gq ? void 0 : gq.call(qq)) && void 0 !== Eq ? Eq : []
        }))
      }
      sunShadowsHeld() {
        return this.callCore(kq, null, (qq => {
          var Eq, gq;
          return null !== (Eq = null === (gq = qq.rmq) || void 0 === gq ? void 0 : gq.call(qq)) && void 0 !== Eq ? Eq : null
        }))
      }
      callCore(qq, Eq, gq) {
        if (this.stopped) return Eq;
        try {
          return gq(this.core)
        } catch (Yq) {
          return this.crash(qq, Yq), Eq
        }
      }
      readEvents(qq) {
        this.netOffsets.length = 0;
        const Eq = this.headerView(),
          gq = Eq[Yq.hb.EventsPtr],
          lq = Eq[Yq.hb.EventsLen];
        if (this.envEvents.length = 0, this.graceEvents.length = 0, 0 === lq) return Gq;
        const Oq = [],
          mq = this.memory().buffer;
        if (gq % 4 !== 0 || gq + lq > mq.byteLength) return this.crash(pq, `events of ${lq} bytes at ${gq} outside ${mq.byteLength} bytes of memory`), Gq;
        const xq = new DataView(mq, gq, lq),
          Aq = this.rings.net,
          cq = (Eq, gq) => Eq + gq <= qq ? Aq.copyWritten(Eq, gq) : null;
        let uq = 0;
        for (; uq < lq;) {
          const qq = uq + Yq.P,
            Eq = qq <= lq ? xq.getUint32(uq, !0) : -1,
            Aq = Eq >>> 16;
          if (Eq < 0 || Aq > lq - qq) return this.crash(pq, `event record at ${uq} overruns its ${lq} bytes`), Gq;
          const vq = 65535 & Eq,
            hq = Eq => xq.getUint32(qq + 4 * Eq, !0);
          if (vq === Yq.S.RawMessage) {
            const qq = Aq >= Yq.Pc.BYTES ? 65535 & hq(1) : -1,
              Eq = qq === Yq.Pc.STRING_TYPE,
              gq = Aq === (Eq ? Yq.Pc.STRING_TYPE_BYTES : Yq.Pc.BYTES) ? cq(hq(2), hq(3)) : null,
              lq = Eq && gq ? cq(hq(4), hq(5)) : null;
            if (!gq || Eq && !lq) return this.crash(pq, `RawMessage at ${uq} of ${Aq} bytes names bytes outside net-in`), Gq;
            this.netOffsets.push(uq), Oq.push({
              type: "message",
              conn: hq(0),
              Hc: qq,
              payloadKind: hq(1) >>> 16,
              payload: gq,
              stringType: lq ? Rq.decode(lq) : null
            })
          } else if (vq === Yq.S.CoreErrors) {
            var Bq, Wq;
            const qq = Aq >= 4 ? hq(0) : -1;
            if (qq < 0 || qq > Yq.w.PAIRS_MAX || Aq !== 4 * (Yq.w.FIXED_WORDS + Yq.w.PAIR_WORDS * qq)) return this.crash(pq, `CoreErrors at ${uq} of ${Aq} bytes`), Gq;
            const Eq = [];
            for (let gq = 0; gq < qq; gq++) Eq.push({
              code: hq(1 + 2 * gq),
              detail: hq(2 + 2 * gq)
            });
            null === (Bq = (Wq = this.handlers).onCoreErrors) || void 0 === Bq || Bq.call(Wq, Eq, hq(1 + 2 * qq))
          } else if (vq === Yq.S.RenderReload) {
            var Nq, aq;
            if (Aq !== Yq.$c.BYTES) return this.crash(pq, `RenderReload at ${uq} of ${Aq} bytes`), Gq;
            null === (Nq = (aq = this.handlers).onRenderReload) || void 0 === Nq || Nq.call(aq, hq(0), hq(1), hq(2))
          } else if (vq === Yq.S.Images) {
            var Vq, dq;
            null === (Vq = (dq = this.handlers).onImages) || void 0 === Vq || Vq.call(dq, new Uint8Array(mq.slice(gq + qq, gq + qq + Aq)))
          } else if (vq === Yq.S.ModelRequests)
            for (let gq = 0; gq < Aq >>> 2; gq++) {
              var jq, Hq;
              null === (jq = (Hq = this.handlers).onModelRequest) || void 0 === jq || jq.call(Hq, hq(gq))
            } else if (vq === Yq.S.ModelTaken) {
              var oq, Pq;
              if (Aq < 4) return this.crash(pq, `ModelTaken at ${uq} of ${Aq} bytes`), Gq;
              const qq = new Uint32Array((Aq >>> 2) - 1);
              for (let Eq = 0; Eq < qq.length; Eq++) qq[Eq] = hq(1 + Eq);
              null === (oq = (Pq = this.handlers).onModelTaken) || void 0 === oq || oq.call(Pq, hq(0), qq)
            } else if (vq === Yq.S.TerrainTexturesWanted) {
            var Qq, yq;
            if (0 !== Aq) return this.crash(pq, `TerrainTexturesWanted at ${uq} of ${Aq} bytes`), Gq;
            null === (Qq = (yq = this.handlers).onTerrainTexturesWanted) || void 0 === Qq || Qq.call(yq)
          } else if (vq === Yq.S.KeepAliveDue) {
            var tq, rq;
            if (Aq > Yq.xb) return this.crash(pq, `KeepAliveDue at ${uq} of ${Aq} bytes`), Gq;
            null === (tq = (rq = this.handlers).onKeepAlive) || void 0 === tq || tq.call(rq, new Uint8Array(mq, gq + qq, Aq).slice())
          } else if (vq === Yq.S.ConnectionState) {
            if (Aq !== Yq.o) return this.crash(pq, `ConnectionState at ${uq} of ${Aq} bytes`), Gq;
            this.netOffsets.push(uq), Oq.push({
              type: "connection",
              conn: hq(0),
              phase: hq(1),
              code: 0 | hq(2)
            })
          } else if (vq === Yq.S.EnvLighting || vq === Yq.S.SkyImages) {
            if (Aq !== (vq === Yq.S.EnvLighting ? Yq.M : Yq.yd)) return this.crash(pq, `event ${vq} at ${uq} of ${Aq} bytes`), Gq;
            this.envEvents.push({
              kind: vq,
              payload: new Uint8Array(mq.slice(gq + qq, gq + qq + Aq))
            })
          } else if (vq === Yq.S.ReconnectGrace) {
            if (Aq !== Yq.qc) return this.crash(pq, `ReconnectGrace at ${uq} of ${Aq} bytes`), Gq;
            const qq = hq(2);
            this.graceEvents.push({
              conn: hq(0),
              graceMs: hq(1),
              sessionBased: 0 !== (qq & Yq.Rc.SessionBased),
              replayOffer: 0 !== (qq & Yq.Rc.ReplayOffer)
            })
          }
          uq = qq + (0, Yq.Ce)(Aq)
        }
        return Oq
      }
      forEachNetOut(qq) {
        this.forEachOut(Pq, "net-out", Yq.hb.NetOutPtr, Yq.hb.NetOutLen, Yq.Tb, 0, ((Eq, gq, lq, Oq) => {
          const mq = (0, Yq.ve)(gq);
          mq === Yq.Ub.Frame ? qq((0, Yq.ue)(gq), lq) : this.crash(Pq, `net-out record at ${Oq} is kind ${mq}, not a frame`)
        }))
      }
      forEachWorkerOut(qq) {
        this.forEachOut(Qq, "worker-out", Yq.hb.WorkerOutPtr, Yq.hb.WorkerOutLen, Yq.Md, 4, ((Eq, gq, lq, Oq) => {
          const mq = 255 & Eq,
            xq = mq === Yq.ce.Init ? this.initOf(lq, Oq) : lq;
          null !== xq && qq(mq, Eq >>> 8 & 16777215, xq)
        }))
      }
      initOf(qq, Eq) {
        const gq = this.memory().buffer;
        if (qq.byteLength !== Yq.kb) return this.crash(Qq, `worker-out Init record at ${Eq} is ${qq.byteLength} bytes, not a view`), null;
        const lq = new DataView(qq.buffer, qq.byteOffset, Yq.kb),
          Oq = lq.getUint32(0, !0),
          mq = lq.getUint32(4, !0);
        return Oq + mq > gq.byteLength ? (this.crash(Qq, `worker-out Init record at ${Eq} names ${mq} bytes at ${Oq} outside ${gq.byteLength} bytes of memory`), null) : new Uint8Array(gq, Oq, mq)
      }
      forEachOut(qq, Eq, gq, lq, Oq, mq, xq) {
        if (this.stopped || null === this.lastHeader) return;
        const Aq = this.headerView(),
          cq = Aq[gq],
          uq = Aq[lq];
        if (0 === uq) return;
        const Bq = this.memory().buffer;
        if (cq % 4 !== 0 || cq + uq > Bq.byteLength) return void this.crash(qq, `${Eq} of ${uq} bytes at ${cq} outside ${Bq.byteLength} bytes of memory`);
        const Wq = new DataView(Bq, cq, uq);
        let Nq = 0;
        for (; Nq < uq;) {
          const gq = Nq + Oq,
            lq = gq <= uq ? Wq.getUint32(Nq + mq, !0) : -1;
          if (lq < 0 || lq > uq - gq) return void this.crash(qq, `${Eq} record at ${Nq} overruns its ${uq} bytes`);
          if (xq(Wq.getUint32(Nq, !0), Wq.getUint32(Nq + 4, !0), new Uint8Array(Bq, cq + gq, lq), Nq), this.stopped) return;
          Nq = gq + (0, Yq.Ce)(lq)
        }
      }
      forEachEvent(qq) {
        if (this.stopped || null === this.lastHeader) return;
        const Eq = this.headerView(),
          gq = Eq[Yq.hb.EventsPtr],
          lq = Eq[Yq.hb.EventsLen];
        if (0 === lq) return;
        const Oq = this.memory().buffer;
        if (gq % 4 !== 0 || gq + lq > Oq.byteLength) return void this.crash(pq, `events of ${lq} bytes at ${gq} outside ${Oq.byteLength} bytes of memory`);
        const mq = new DataView(Oq, gq, lq);
        let xq = 0;
        for (; xq < lq;) {
          const Eq = xq + Yq.P,
            gq = Eq <= lq ? mq.getUint32(xq, !0) : -1,
            Oq = gq >>> 16;
          if (gq < 0 || Oq > lq - Eq) return void this.crash(pq, `event record at ${xq} overruns its ${lq} bytes`);
          qq(65535 & gq, mq, Eq, Oq), xq = Eq + (0, Yq.Ce)(Oq)
        }
      }
      crashOn(qq, Eq) {
        Eq instanceof lq.d ? this.crash(pq, Eq.message) : this.crash(qq, Eq)
      }
      crash(qq, Eq) {
        this.stopped || (this.stopped = !0, this.handlers.onCrash({
          site: qq,
          error: Eq,
          header: this.lastHeader
        }))
      }
      headerWord(qq) {
        return this.stopped || null === this.lastHeader ? 0 : this.headerView()[qq]
      }
      readLoadCounts(qq) {
        if (this.stopped || null === this.lastHeader) return !1;
        const Eq = this.core.od();
        if (0 === Eq) return !1;
        const gq = this.memory().buffer;
        gq !== this.loadCountsBuffer && (this.loadCountsBuffer = gq, this.loadCounts = new Uint32Array(gq, Eq, Yq.zb));
        const lq = this.loadCounts;
        return qq.chunksReceived = lq[Yq.Gb.ChunksReceived], qq.chunksCancelled = this.headerView()[Yq.hb.ChunksCancelled], qq.chunksStored = lq[Yq.Gb.ChunksStored], qq.jobsSent = lq[Yq.Gb.JobsSent], qq.jobsDone = lq[Yq.Gb.JobsDone], qq.jobsInFlight = lq[Yq.Gb.JobsInFlight], qq.workersLive = lq[Yq.Gb.WorkersLive], qq.workersRetired = lq[Yq.Gb.WorkersRetired], !0
      }
      headerView() {
        const qq = this.memory().buffer;
        return qq !== this.headerBuffer && (this.headerBuffer = qq, this.header = new Uint32Array(qq, this.core.YN(), Yq.db)), this.header
      }
    }
  },
  40663: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => mq,
      c: () => Oq
    });
    var Yq = gq(4524);
    let lq = null;

    function Oq(qq) {
      lq = {
        scanned: !1
      };
      try {
        return qq()
      } finally {
        lq = null
      }
    }

    function mq() {
      const qq = lq;
      if (null === qq) return (0, Yq.h)();
      const Eq = (0, Yq.h)(!qq.scanned);
      return qq.scanned = !0, Eq
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);