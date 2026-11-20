export const id = 262;
export const ids = [262];
export const modules = {
  40413: (kk, Fk, Bk) => {
    function Rk(kk, Fk, Bk) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(kk, Fk).getContext("2d", Bk);
      const Rk = document.createElement("canvas");
      return Rk.width = kk, Rk.height = Fk, Rk.getContext("2d", Bk)
    }

    function tk(kk, Fk) {
      return kk.getContext("2d", Fk)
    }
    Bk.d(Fk, {
      e: () => tk,
      f: () => Rk
    })
  },
  40330: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => vk,
      d: () => ek,
      e: () => pk,
      i: () => Hk,
      k: () => Mk,
      m: () => gk,
      q: () => Wk,
      r: () => fk,
      v: () => mk,
      w: () => Nk,
      y: () => hk,
      C: () => Lk,
      D: () => rk,
      H: () => Zk,
      J: () => Uk,
      L: () => Gk
    });
    var Rk = Bk(4524),
      tk = Bk(40065),
      ak = (Bk(40207), Bk(6));
    class Xk {
      constructor(kk, Fk) {
        this.memory = kk, this.access = Fk, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.KV = 0, this.u32 = new ak.h(0), this.f32 = new ak.e(0), this.u8 = new ak.c(0), this.dataView = new ak.f(new ArrayBuffer(0)), this.refresh()
      }
      refresh() {
        this.ptr = this.access.ptr(), this.KV = this.access.KV(), this.buffer = (0, ak.F)(this.memory()), this.u32 = new ak.h(this.buffer, this.ptr, this.KV >>> 2), this.f32 = new ak.e(this.buffer, this.ptr, this.KV >>> 2), this.u8 = new ak.c(this.buffer, this.ptr, this.KV), this.dataView = new ak.f(this.buffer, this.ptr, this.KV)
      }
      ensureViews() {
        (0, ak.F)(this.memory()) !== this.buffer && this.refresh()
      }
      get view() {
        return this.ensureViews(), this.dataView
      }
      room(kk) {
        return !!this.fits(kk) || (this.dropped++, !1)
      }
      fits(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.cursor;
        this.ensureViews();
        const Bk = Fk + kk;
        return Bk <= this.KV || Bk <= Rk.dc && 0 !== this.access.reserve(Bk) && (this.refresh(), Bk <= this.KV)
      }
      consume(kk) {
        const Fk = this.cursor - kk;
        Fk > 0 && kk > 0 && (this.ensureViews(), this.u8.copyWithin(0, kk, this.cursor)), this.cursor = Fk > 0 ? Fk : 0
      }
      writeRecord(kk, Fk, Bk, tk, ak) {
        if (!this.room(Rk.gb)) return !1;
        const Xk = this.cursor >>> 2;
        return this.u32[Xk] = 65535 & kk | (65535 & Fk) << 16, this.f32[Xk + 1] = Bk, this.f32[Xk + 2] = tk, this.u32[Xk + 3] = ak >>> 0, this.cursor += Rk.gb, !0
      }
      writeOptions(kk, Fk) {
        const Bk = Fk.byteLength,
          tk = Rk.gb + (0, Rk.td)(Bk);
        if (!this.fits(tk)) return !1;
        const ak = this.cursor,
          Xk = ak >>> 2;
        this.u32[Xk] = Rk.hb.Options, this.u32[Xk + 1] = Bk, this.u32[Xk + 2] = 0, this.u32[Xk + 3] = kk >>> 0;
        const bk = ak + Rk.gb;
        return this.u8.set(Fk, bk), this.u8.fill(0, bk + Bk, ak + tk), this.cursor += tk, !0
      }
      writeWorkerRecord(kk, Fk, Bk, tk, ak, Xk) {
        const bk = Xk.byteLength,
          wk = Rk.Wc + (0, Rk.td)(bk);
        if (bk > Rk.Uc) return this.dropped++, !1;
        if (!this.room(wk)) return !1;
        const dk = this.cursor,
          sk = dk >>> 2;
        this.u32[sk] = kk >>> 0, this.u32[sk + 1] = 65535 & Fk | (65535 & Bk) << 16, this.u32[sk + 2] = tk >>> 0, this.u32[sk + 3] = ak >>> 0, this.u32[sk + 4] = bk;
        const Vk = dk + Rk.Wc;
        return this.u8.set(Xk, Vk), this.u8.fill(0, Vk + bk, dk + wk), this.cursor += wk, !0
      }
      written() {
        return this.ensureViews(), this.u8.subarray(0, this.cursor)
      }
      writeFrame(kk, Fk) {
        return this.writeNet(Rk.Cb.Frame, kk, Fk)
      }
      writeOpen(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(Rk.Cb.Open, kk, wk(Fk))
      }
      writeClose(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(Rk.Cb.Close, kk, wk(Fk))
      }
      writeNet(kk, Fk, Bk) {
        const tk = Bk.byteLength,
          ak = Rk.Ab + (0, Rk.td)(tk);
        if (tk > Rk.ub) return this.dropped++, !1;
        if (!this.room(ak)) return !1;
        const Xk = this.cursor;
        this.u32[Xk >>> 2] = tk, this.u32[1 + (Xk >>> 2)] = (0, Rk.qd)(kk, Fk);
        const bk = Xk + Rk.Ab;
        return this.u8.set(Bk, bk), this.u8.fill(0, bk + tk, Xk + ak), this.cursor += ak, !0
      }
      UA(kk, Fk, Bk) {
        const tk = Rk.o + (0, Rk.td)(Bk);
        if (!this.room(tk)) return -1;
        const ak = this.cursor;
        this.u32[ak >>> 2] = 65535 & kk | (65535 & Fk) << 16, this.u32[1 + (ak >>> 2)] = Bk;
        const Xk = ak + Rk.o;
        return this.u8.fill(0, Xk, ak + tk), this.cursor += tk, Xk
      }
      growForCmd(kk) {
        return this.fits(Rk.o + (0, Rk.td)(kk), 0)
      }
      writeCmd(kk, Fk, Bk) {
        const Rk = this.UA(kk, Fk, Bk.byteLength);
        return !(Rk < 0) && (this.u8.set(Bk, Rk), !0)
      }
      copyWritten(kk, Fk) {
        return this.ensureViews(), this.u8.slice(kk, kk + Fk)
      }
    }
    const bk = new ak.c(0);

    function wk(kk) {
      if (0 === kk) return bk;
      const Fk = new ak.c(Rk.wb);
      for (let Bk = 0; Bk < Rk.wb; Bk++) Fk[Bk] = kk >>> 8 * Bk & 255;
      return Fk
    }
    class dk {
      constructor(kk, Fk) {
        this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new Xk(Fk, {
          ptr: () => kk.XJ(),
          KV: () => kk.yak(),
          reserve: Fk => kk.gak(Fk)
        }), this.net = new Xk(Fk, {
          ptr: () => kk.Hak(),
          KV: () => kk.Nak(),
          reserve: Fk => kk.Uak(Fk)
        }), this.worker = new Xk(Fk, {
          ptr: () => kk.tXk(),
          KV: () => kk.RXk(),
          reserve: Fk => kk.cak(Fk)
        }), this.cmd = new Xk(Fk, {
          ptr: () => kk.tak(),
          KV: () => kk.Bak(),
          reserve: Fk => kk.Rak(Fk)
        })
      }
      reset(kk) {
        this.input.cursor = 0, this.worker.cursor = 0, this.cmd.consume(kk)
      }
    }
    var sk = Bk(36019),
      Vk = Bk(2305),
      Jk = Bk(4517),
      Ak = Bk(40337);
    const ek = "coreFrame",
      yk = "fatalStatus",
      fk = "otherCall",
      mk = "coreRings",
      Wk = "netIn",
      vk = "abi",
      ik = "netOut",
      Yk = "workerOut",
      Lk = "worldgenHost",
      Ok = "eventWalker",
      Ek = "netEvent",
      Sk = "envEvent",
      Nk = "sharedTables",
      Hk = "inputAction",
      uk = new Set([Ok, Ek, Sk, Hk, Nk]),
      Mk = "wasmMemory",
      gk = "meshHost";

    function Uk(kk, Fk) {
      kk.forEachWorkerOut(((Bk, tk, ak) => {
        if ((0, Rk.kd)(Bk)) try {
          var Xk;
          null === (Xk = Fk.worldgen) || void 0 === Xk || Xk.take(Bk, ak)
        } catch (wk) {
          kk.crash(Lk, wk)
        } else try {
          var bk;
          null === (bk = Fk.mesh) || void 0 === bk || bk.take(Bk, tk, ak)
        } catch (wk) {
          kk.crash(gk, wk)
        }
      }))
    }
    const ck = 1048576;

    function Gk(kk, Fk) {
      let Bk = !1;
      const Rk = () => {
        Bk = !1, Fk()
      };
      return () => {
        !Bk && kk.cursor >= ck && (Bk = !0, queueMicrotask(Rk))
      }
    }
    const Tk = new Set([yk, fk, Lk, gk]);

    function rk(kk) {
      return uk.has(kk.site) ? kk.error instanceof WebAssembly.RuntimeError || (0, tk.n)(kk.error) : !Tk.has(kk.site) && kk.error instanceof Error
    }
    const Dk = "events",
      zk = [],
      Pk = "debugLog",
      hk = "terrainTextures",
      qk = "sunShadowTextures",
      Ck = new TextDecoder;

    function Zk(kk, Fk) {
      const {
        site: Bk,
        error: tk,
        header: ak
      } = kk, Xk = ak ? (0, Rk.hd)(ak.lastError) : "noFrame", bk = `CORE-${Bk===yk?Xk:Bk}`, wk = null === tk || void 0 === tk ? "" : ` ${(0,sk.j)(tk)}`, dk = {
        site: Bk,
        wasmBuild: Fk.wasm,
        clientVersion: Fk.client
      };
      return ak && (dk.status = String(ak.status), dk.lastError = Xk, dk.lastErrorCode = String(ak.lastError), dk.lastErrorDetail = String(ak.lastErrorDetail), dk.errorCount = String(ak.errorCount), dk.frameIndex = String(ak.frameIndex), dk.tickIndex = String(ak.tickIndex)), {
        code: bk,
        message: `core ${Bk}, last error ${Xk};${wk}`,
        details: dk
      }
    }
    class pk {
      constructor(kk, Fk, Bk) {
        this.core = kk, this.memory = Fk, this.handlers = Bk, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.unsentUiPrefs = null, this.eventWalker = null, this.netOffsets = [], this.frameEvents = {
          ptr: 0,
          len: 0,
          net: zk,
          netOffsets: this.netOffsets,
          kind: "none"
        }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.rings = new dk(kk, Fk)
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
      framePaces(kk) {
        if (this.stopped || this.drawsHeld) return !1;
        try {
          return this.core.Jak(kk)
        } catch (Fk) {
          return this.crash(ek, Fk), !1
        }
      }
      get isStopped() {
        return this.stopped
      }
      frame(kk, Fk) {
        var Bk;
        let ak = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.stopped) return !1;
        if (!this.writePendingInput()) return !1;
        const {
          input: Xk,
          net: bk,
          worker: wk,
          cmd: dk
        } = this.rings, sk = bk.cursor, Vk = Fk && !this.drawsHeld;
        let fk = Rk.C.Fatal;
        const mk = dk.cursor;
        let vk = null;
        try {
          const Fk = (Vk ? Rk.T.Draws : 0) | (ak ? Rk.T.NetAll : 0);
          fk = (0, Ak.g)((() => this.core.frame(kk, Xk.cursor, bk.cursor, wk.cursor, Fk, mk)))
        } catch (Tk) {
          vk = {
            error: Tk
          }
        }
        const ik = null === (Bk = this.gameHost) || void 0 === Bk ? void 0 : Bk.takeFault();
        this.rings.reset(this.stopped || null !== vk || void 0 !== ik ? dk.cursor : mk);
        const Yk = null === vk && void 0 === ik ? this.headerView() : null,
          Lk = null === Yk ? null : (0, Rk.wd)(Yk);
        null !== Lk && (this.lastHeader = Lk);
        const Sk = null !== Lk && fk !== Rk.C.Fatal,
          Nk = Sk && null !== Yk ? Yk[Rk.ab.NetInKept] : 0,
          Hk = Sk && Nk <= sk && Nk % 4 === 0 ? Nk : null;
        var uk, Mk;
        null !== Lk && null !== Hk && fk === Rk.C.Errors && (null === (uk = (Mk = this.handlers).onErrors) || void 0 === uk || uk.call(Mk, Lk));
        const gk = null === Hk ? zk : this.readEvents(sk);
        if (bk.consume(sk - (null !== Hk && void 0 !== Hk ? Hk : 0)), this.netKept = null !== Hk && void 0 !== Hk ? Hk : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== vk) return this.crash(ek, void 0 === ik || ik instanceof tk.c ? vk.error : ik), !1;
        if (void 0 !== ik || null === Lk) return this.crashOn(ek, ik), !1;
        const Uk = this.headerView()[Rk.ab.FrameDraw];
        if (this.lastFrameKind = (0, Jk.g)(Vk, Uk), fk === Rk.C.Fatal) return this.crash(yk, null), !1;
        if (null === Hk) return this.crash(Wk, `the core kept ${Nk} of ${sk} net-in bytes`), !1;
        if (this.eventWalker) {
          if (this.stopped) return !1;
          const kk = this.frameEvents,
            Fk = this.headerView();
          kk.ptr = Fk[Rk.ab.EventsPtr], kk.len = Fk[Rk.ab.EventsLen], kk.net = gk, kk.kind = this.lastFrameKind;
          try {
            this.eventWalker(kk)
          } catch (Tk) {
            return this.crashOn(Ok, Tk), !1
          }
          return this.handEnvEvents()
        }
        for (const Rk of gk) {
          if (this.stopped) return !1;
          try {
            var ck, Gk;
            null === (ck = (Gk = this.handlers).onNetEvent) || void 0 === ck || ck.call(Gk, Rk)
          } catch (Tk) {
            return this.crashOn(Ek, Tk), !1
          }
        }
        return this.handEnvEvents()
      }
      handEnvEvents() {
        for (const ak of this.graceEvents) {
          if (this.stopped) return !1;
          try {
            var kk, Fk;
            null === (kk = (Fk = this.handlers).onReconnectGrace) || void 0 === kk || kk.call(Fk, ak)
          } catch (tk) {
            return this.crashOn(Ek, tk), !1
          }
        }
        for (const ak of this.envEvents) {
          if (this.stopped) return !1;
          try {
            var Bk, Rk;
            null === (Bk = (Rk = this.handlers).onEnvEvent) || void 0 === Bk || Bk.call(Rk, ak)
          } catch (tk) {
            return this.crashOn(Sk, tk), !1
          }
        }
        return !this.stopped
      }
      setEventWalker(kk) {
        this.eventWalker = kk
      }
      writePendingInput() {
        if (this.stopped) return !1;
        const {
          input: kk
        } = this.rings;
        try {
          const Fk = this.unsentUiPrefs;
          Fk && kk.writeRecord(Rk.hb.UiPrefs, 0, Fk.nametagCutDistance, 0, (0, Rk.xd)(Fk)) && (this.unsentUiPrefs = null);
          const Bk = this.unsentEnvPrefs;
          Bk && kk.writeRecord(Rk.hb.EnvPrefs, (0, Rk.jd)(Bk), Bk.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
          const tk = this.unsentLookPrefs;
          tk && kk.writeRecord(Rk.hb.Sensitivity, 0, tk.mouse, tk.touch, (0, Vk.f)(tk.fovPercent)) && (this.unsentLookPrefs = null);
          let ak = 0;
          for (const {
              aux: Rk,
              payload: Xk
            }
            of this.unsentOptions) {
            if (!kk.writeOptions(Rk, Xk)) {
              if (kk.cursor > 0) break;
              this.optionsDropped++
            }
            ak++
          }
          ak > 0 && this.unsentOptions.splice(0, ak)
        } catch (Fk) {
          return this.crash(mk, Fk), !1
        }
        return !0
      }
      setHoldDraws(kk) {
        this.drawsHeld = kk
      }
      setUiPrefs(kk) {
        this.unsentUiPrefs = {
          ...kk
        }
      }
      setEnvPrefs(kk) {
        this.unsentEnvPrefs = {
          ...kk
        }
      }
      setLookPrefs(kk) {
        this.unsentLookPrefs = {
          ...kk
        }
      }
      queueOptions(kk, Fk) {
        return !this.isStopped && (Fk.byteLength > Rk.Hb.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
          aux: kk,
          payload: Fk
        }), !0))
      }
      setChunkCap(kk) {
        return this.callCore("setChunkCap", null, (Fk => Fk.hak(kk)))
      }
      shedMemory(kk) {
        const Fk = this.callCore("shedMemory", null, (Fk => Fk.jak(kk)));
        return 0 === Fk ? null : Fk
      }
      addDistanceInUse() {
        const kk = this.callCore("addDistanceInUse", null, (kk => kk.ntk()));
        return 0 === kk ? null : kk
      }
      setChunkAddDistance(kk, Fk) {
        return this.callCore("setChunkAddDistance", !1, (Bk => Bk.Pak(kk, Fk)))
      }
      setGameHost(kk) {
        return this.callCore("setGameHost", !1, (Fk => (Fk.Vak(kk), this.gameHost = kk, !0)))
      }
      setAntiCheatProbes(kk) {
        return this.callCore("setAntiCheatProbes", !1, (Fk => Fk.rak(kk)))
      }
      setAmbientOcclusion(kk) {
        this.callCore("setAmbientOcclusion", void 0, (Fk => {
          Fk.Tak(kk)
        }))
      }
      setPoseLod(kk) {
        this.callCore("setPoseLod", void 0, (Fk => {
          Fk.Cak(kk)
        }))
      }
      setDebugLog(kk, Fk) {
        this.callCore(Pk, void 0, (Bk => {
          Bk.Uf(kk, Fk)
        }))
      }
      takeDebugLog(kk) {
        return this.callCore(Pk, [], (Fk => Fk.Gf(kk)))
      }
      setTextureLayers(kk) {
        return this.callCore("setTextureLayers", !1, (Fk => Fk.xak(kk)))
      }
      setBlockColours(kk) {
        let {
          blocks: Fk,
          counts: Bk,
          values: Rk
        } = kk;
        return this.callCore("setBlockColours", !1, (kk => kk.uBk(Fk, Bk, Rk)))
      }
      terrainTextureNames() {
        return this.callCore(hk, [], (kk => kk.BXk()))
      }
      setTerrainTextures(kk, Fk, Bk, Rk) {
        return this.callCore(hk, !1, (tk => tk.Kak(kk, Bk, Fk, Rk)))
      }
      setShaderPack(kk, Fk, Bk, Rk, tk, ak) {
        return this.callCore("setShaderPack", !1, (Xk => {
          var bk, wk;
          return null !== (bk = null === (wk = Xk.CBk) || void 0 === wk ? void 0 : wk.call(Xk, kk, Fk, Bk, Rk, tk, ak)) && void 0 !== bk && bk
        }))
      }
      sunShadowWantedTextures() {
        return this.callCore(qk, null, (kk => {
          var Fk, Bk;
          return null !== (Fk = null === (Bk = kk.Iak) || void 0 === Bk ? void 0 : Bk.call(kk)) && void 0 !== Fk ? Fk : null
        }))
      }
      setSunShadowTexture(kk, Fk, Bk, Rk, tk) {
        this.callCore(qk, void 0, (ak => {
          var Xk;
          null === (Xk = ak.pak) || void 0 === Xk || Xk.call(ak, kk, Fk, Bk, Rk, tk)
        }))
      }
      takeSunShadowWarnings() {
        return this.callCore(qk, [], (kk => {
          var Fk, Bk;
          return null !== (Fk = null === (Bk = kk.kXk) || void 0 === Bk ? void 0 : Bk.call(kk)) && void 0 !== Fk ? Fk : []
        }))
      }
      sunShadowsHeld() {
        return this.callCore(qk, null, (kk => {
          var Fk, Bk;
          return null !== (Fk = null === (Bk = kk.Qak) || void 0 === Bk ? void 0 : Bk.call(kk)) && void 0 !== Fk ? Fk : null
        }))
      }
      callCore(kk, Fk, Bk) {
        if (this.stopped) return Fk;
        try {
          return Bk(this.core)
        } catch (Rk) {
          return this.crash(kk, Rk), Fk
        }
      }
      readEvents(kk) {
        this.netOffsets.length = 0;
        const Fk = this.headerView(),
          Bk = Fk[Rk.ab.EventsPtr],
          tk = Fk[Rk.ab.EventsLen];
        if (this.envEvents.length = 0, this.graceEvents.length = 0, 0 === tk) return zk;
        const ak = [],
          Xk = this.memory().buffer;
        if (Bk % 4 !== 0 || Bk + tk > Xk.byteLength) return this.crash(Dk, `events of ${tk} bytes at ${Bk} outside ${Xk.byteLength} bytes of memory`), zk;
        const bk = new DataView(Xk, Bk, tk),
          wk = this.rings.net,
          dk = (Fk, Bk) => Fk + Bk <= kk ? wk.copyWritten(Fk, Bk) : null;
        let sk = 0;
        for (; sk < tk;) {
          const kk = sk + Rk.K,
            Fk = kk <= tk ? bk.getUint32(sk, !0) : -1,
            wk = Fk >>> 16;
          if (Fk < 0 || wk > tk - kk) return this.crash(Dk, `event record at ${sk} overruns its ${tk} bytes`), zk;
          const Sk = 65535 & Fk,
            Nk = Fk => bk.getUint32(kk + 4 * Fk, !0);
          if (Sk === Rk.M.RawMessage) {
            const kk = wk >= Rk.ec.BYTES ? 65535 & Nk(1) : -1,
              Fk = kk === Rk.ec.STRING_TYPE,
              Bk = wk === (Fk ? Rk.ec.STRING_TYPE_BYTES : Rk.ec.BYTES) ? dk(Nk(2), Nk(3)) : null,
              tk = Fk && Bk ? dk(Nk(4), Nk(5)) : null;
            if (!Bk || Fk && !tk) return this.crash(Dk, `RawMessage at ${sk} of ${wk} bytes names bytes outside net-in`), zk;
            this.netOffsets.push(sk), ak.push({
              type: "message",
              conn: Nk(0),
              UX: kk,
              payloadKind: Nk(1) >>> 16,
              payload: Bk,
              stringType: tk ? Ck.decode(tk) : null
            })
          } else if (Sk === Rk.M.CoreErrors) {
            var Vk, Jk;
            const kk = wk >= 4 ? Nk(0) : -1;
            if (kk < 0 || kk > Rk.A.PAIRS_MAX || wk !== 4 * (Rk.A.FIXED_WORDS + Rk.A.PAIR_WORDS * kk)) return this.crash(Dk, `CoreErrors at ${sk} of ${wk} bytes`), zk;
            const Fk = [];
            for (let Bk = 0; Bk < kk; Bk++) Fk.push({
              code: Nk(1 + 2 * Bk),
              detail: Nk(2 + 2 * Bk)
            });
            null === (Vk = (Jk = this.handlers).onCoreErrors) || void 0 === Vk || Vk.call(Jk, Fk, Nk(1 + 2 * kk))
          } else if (Sk === Rk.M.RenderReload) {
            var Ak, ek;
            if (wk !== Rk.nc.BYTES) return this.crash(Dk, `RenderReload at ${sk} of ${wk} bytes`), zk;
            null === (Ak = (ek = this.handlers).onRenderReload) || void 0 === Ak || Ak.call(ek, Nk(0), Nk(1), Nk(2))
          } else if (Sk === Rk.M.Images) {
            var yk, fk;
            null === (yk = (fk = this.handlers).onImages) || void 0 === yk || yk.call(fk, new Uint8Array(Xk.slice(Bk + kk, Bk + kk + wk)))
          } else if (Sk === Rk.M.ModelRequests)
            for (let Bk = 0; Bk < wk >>> 2; Bk++) {
              var mk, Wk;
              null === (mk = (Wk = this.handlers).onModelRequest) || void 0 === mk || mk.call(Wk, Nk(Bk))
            } else if (Sk === Rk.M.ModelTaken) {
              var vk, ik;
              if (wk < 4) return this.crash(Dk, `ModelTaken at ${sk} of ${wk} bytes`), zk;
              const kk = new Uint32Array((wk >>> 2) - 1);
              for (let Fk = 0; Fk < kk.length; Fk++) kk[Fk] = Nk(1 + Fk);
              null === (vk = (ik = this.handlers).onModelTaken) || void 0 === vk || vk.call(ik, Nk(0), kk)
            } else if (Sk === Rk.M.TerrainTexturesWanted) {
            var Yk, Lk;
            if (0 !== wk) return this.crash(Dk, `TerrainTexturesWanted at ${sk} of ${wk} bytes`), zk;
            null === (Yk = (Lk = this.handlers).onTerrainTexturesWanted) || void 0 === Yk || Yk.call(Lk)
          } else if (Sk === Rk.M.KeepAliveDue) {
            var Ok, Ek;
            if (wk > Rk.jb) return this.crash(Dk, `KeepAliveDue at ${sk} of ${wk} bytes`), zk;
            null === (Ok = (Ek = this.handlers).onKeepAlive) || void 0 === Ok || Ok.call(Ek, new Uint8Array(Xk, Bk + kk, wk).slice())
          } else if (Sk === Rk.M.ConnectionState) {
            if (wk !== Rk.p) return this.crash(Dk, `ConnectionState at ${sk} of ${wk} bytes`), zk;
            this.netOffsets.push(sk), ak.push({
              type: "connection",
              conn: Nk(0),
              phase: Nk(1),
              code: 0 | Nk(2)
            })
          } else if (Sk === Rk.M.EnvLighting || Sk === Rk.M.SkyImages) {
            if (wk !== (Sk === Rk.M.EnvLighting ? Rk.I : Rk.Gc)) return this.crash(Dk, `event ${Sk} at ${sk} of ${wk} bytes`), zk;
            this.envEvents.push({
              kind: Sk,
              payload: new Uint8Array(Xk.slice(Bk + kk, Bk + kk + wk))
            })
          } else if (Sk === Rk.M.ReconnectGrace) {
            if (wk !== Rk.Rb) return this.crash(Dk, `ReconnectGrace at ${sk} of ${wk} bytes`), zk;
            const kk = Nk(2);
            this.graceEvents.push({
              conn: Nk(0),
              graceMs: Nk(1),
              sessionBased: 0 !== (kk & Rk.hc.SessionBased),
              replayOffer: 0 !== (kk & Rk.hc.ReplayOffer)
            })
          }
          sk = kk + (0, Rk.td)(wk)
        }
        return ak
      }
      forEachNetOut(kk) {
        this.forEachOut(ik, "net-out", Rk.ab.NetOutPtr, Rk.ab.NetOutLen, Rk.Ab, 0, ((Fk, Bk, tk, ak) => {
          const Xk = (0, Rk.od)(Bk);
          Xk === Rk.Cb.Frame ? kk((0, Rk.md)(Bk), tk) : this.crash(ik, `net-out record at ${ak} is kind ${Xk}, not a frame`)
        }))
      }
      forEachWorkerOut(kk) {
        this.forEachOut(Yk, "worker-out", Rk.ab.WorkerOutPtr, Rk.ab.WorkerOutLen, Rk.Tc, 4, ((Fk, Bk, tk, ak) => {
          const Xk = 255 & Fk,
            bk = Xk === Rk.ed.Init ? this.initOf(tk, ak) : tk;
          null !== bk && kk(Xk, Fk >>> 8 & 16777215, bk)
        }))
      }
      initOf(kk, Fk) {
        const Bk = this.memory().buffer;
        if (kk.byteLength !== Rk.bb) return this.crash(Yk, `worker-out Init record at ${Fk} is ${kk.byteLength} bytes, not a view`), null;
        const tk = new DataView(kk.buffer, kk.byteOffset, Rk.bb),
          ak = tk.getUint32(0, !0),
          Xk = tk.getUint32(4, !0);
        return ak + Xk > Bk.byteLength ? (this.crash(Yk, `worker-out Init record at ${Fk} names ${Xk} bytes at ${ak} outside ${Bk.byteLength} bytes of memory`), null) : new Uint8Array(Bk, ak, Xk)
      }
      forEachOut(kk, Fk, Bk, tk, ak, Xk, bk) {
        if (this.stopped || null === this.lastHeader) return;
        const wk = this.headerView(),
          dk = wk[Bk],
          sk = wk[tk];
        if (0 === sk) return;
        const Vk = this.memory().buffer;
        if (dk % 4 !== 0 || dk + sk > Vk.byteLength) return void this.crash(kk, `${Fk} of ${sk} bytes at ${dk} outside ${Vk.byteLength} bytes of memory`);
        const Jk = new DataView(Vk, dk, sk);
        let Ak = 0;
        for (; Ak < sk;) {
          const Bk = Ak + ak,
            tk = Bk <= sk ? Jk.getUint32(Ak + Xk, !0) : -1;
          if (tk < 0 || tk > sk - Bk) return void this.crash(kk, `${Fk} record at ${Ak} overruns its ${sk} bytes`);
          if (bk(Jk.getUint32(Ak, !0), Jk.getUint32(Ak + 4, !0), new Uint8Array(Vk, dk + Bk, tk), Ak), this.stopped) return;
          Ak = Bk + (0, Rk.td)(tk)
        }
      }
      forEachEvent(kk) {
        if (this.stopped || null === this.lastHeader) return;
        const Fk = this.headerView(),
          Bk = Fk[Rk.ab.EventsPtr],
          tk = Fk[Rk.ab.EventsLen];
        if (0 === tk) return;
        const ak = this.memory().buffer;
        if (Bk % 4 !== 0 || Bk + tk > ak.byteLength) return void this.crash(Dk, `events of ${tk} bytes at ${Bk} outside ${ak.byteLength} bytes of memory`);
        const Xk = new DataView(ak, Bk, tk);
        let bk = 0;
        for (; bk < tk;) {
          const Fk = bk + Rk.K,
            Bk = Fk <= tk ? Xk.getUint32(bk, !0) : -1,
            ak = Bk >>> 16;
          if (Bk < 0 || ak > tk - Fk) return void this.crash(Dk, `event record at ${bk} overruns its ${tk} bytes`);
          kk(65535 & Bk, Xk, Fk, ak), bk = Fk + (0, Rk.td)(ak)
        }
      }
      crashOn(kk, Fk) {
        Fk instanceof tk.c ? this.crash(Dk, Fk.message) : this.crash(kk, Fk)
      }
      crash(kk, Fk) {
        this.stopped || (this.stopped = !0, this.handlers.onCrash({
          site: kk,
          error: Fk,
          header: this.lastHeader
        }))
      }
      headerWord(kk) {
        return this.stopped || null === this.lastHeader ? 0 : this.headerView()[kk]
      }
      headerView() {
        const kk = this.memory().buffer;
        return kk !== this.headerBuffer && (this.headerBuffer = kk, this.header = new Uint32Array(kk, this.core.cA(), Rk.Z)), this.header
      }
    }
  },
  40337: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Xk,
      g: () => ak
    });
    var Rk = Bk(4425);
    let tk = null;

    function ak(kk) {
      tk = {
        scanned: !1
      };
      try {
        return kk()
      } finally {
        tk = null
      }
    }

    function Xk() {
      const kk = tk;
      if (null === kk) return (0, Rk.e)();
      const Fk = (0, Rk.e)(!kk.scanned);
      return kk.scanned = !0, Fk
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);