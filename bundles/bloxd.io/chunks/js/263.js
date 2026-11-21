export const id = 263;
export const ids = [263];
export const modules = {
  40988: (dd, Jd, kd) => {
    function pd(dd, Jd, kd) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(dd, Jd).getContext("2d", kd);
      const pd = document.createElement("canvas");
      return pd.width = dd, pd.height = Jd, pd.getContext("2d", kd)
    }

    function Nd(dd, Jd) {
      return dd.getContext("2d", Jd)
    }
    kd.d(Jd, {
      c: () => Nd,
      g: () => pd
    })
  },
  40906: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Gd,
      e: () => Ld,
      f: () => rd,
      h: () => Fd,
      l: () => md,
      p: () => bd,
      q: () => Id,
      s: () => ed,
      v: () => Rd,
      z: () => Md,
      C: () => Td,
      G: () => qd,
      K: () => nd,
      O: () => hd,
      Q: () => Sd,
      S: () => Xd
    });
    var pd = kd(4680),
      Nd = kd(40629),
      Wd = (kd(40781), kd(10));
    class Pd {
      constructor(dd, Jd) {
        this.memory = dd, this.access = Jd, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.oo = 0, this.u32 = new Wd.m(0), this.f32 = new Wd.f(0), this.u8 = new Wd.c(0), this.dataView = new Wd.j(new ArrayBuffer(0)), this.refresh()
      }
      refresh() {
        this.ptr = this.access.ptr(), this.oo = this.access.oo(), this.buffer = (0, Wd.L)(this.memory()), this.u32 = new Wd.m(this.buffer, this.ptr, this.oo >>> 2), this.f32 = new Wd.f(this.buffer, this.ptr, this.oo >>> 2), this.u8 = new Wd.c(this.buffer, this.ptr, this.oo), this.dataView = new Wd.j(this.buffer, this.ptr, this.oo)
      }
      ensureViews() {
        (0, Wd.L)(this.memory()) !== this.buffer && this.refresh()
      }
      get view() {
        return this.ensureViews(), this.dataView
      }
      room(dd) {
        return !!this.fits(dd) || (this.dropped++, !1)
      }
      fits(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.cursor;
        this.ensureViews();
        const kd = Jd + dd;
        return kd <= this.oo || kd <= pd.Hc && 0 !== this.access.reserve(kd) && (this.refresh(), kd <= this.oo)
      }
      consume(dd) {
        const Jd = this.cursor - dd;
        Jd > 0 && dd > 0 && (this.ensureViews(), this.u8.copyWithin(0, dd, this.cursor)), this.cursor = Jd > 0 ? Jd : 0
      }
      writeRecord(dd, Jd, kd, Nd, Wd) {
        if (!this.room(pd.tb)) return !1;
        const Pd = this.cursor >>> 2;
        return this.u32[Pd] = 65535 & dd | (65535 & Jd) << 16, this.f32[Pd + 1] = kd, this.f32[Pd + 2] = Nd, this.u32[Pd + 3] = Wd >>> 0, this.cursor += pd.tb, !0
      }
      writeOptions(dd, Jd) {
        const kd = Jd.byteLength,
          Nd = pd.tb + (0, pd.xe)(kd);
        if (!this.fits(Nd)) return !1;
        const Wd = this.cursor,
          Pd = Wd >>> 2;
        this.u32[Pd] = pd.ub.Options, this.u32[Pd + 1] = kd, this.u32[Pd + 2] = 0, this.u32[Pd + 3] = dd >>> 0;
        const Zd = Wd + pd.tb;
        return this.u8.set(Jd, Zd), this.u8.fill(0, Zd + kd, Wd + Nd), this.cursor += Nd, !0
      }
      writeWorkerRecord(dd, Jd, kd, Nd, Wd, Pd) {
        const Zd = Pd.byteLength,
          gd = pd.Sd + (0, pd.xe)(Zd);
        if (Zd > pd.Pd) return this.dropped++, !1;
        if (!this.room(gd)) return !1;
        const Cd = this.cursor,
          Kd = Cd >>> 2;
        this.u32[Kd] = dd >>> 0, this.u32[Kd + 1] = 65535 & Jd | (65535 & kd) << 16, this.u32[Kd + 2] = Nd >>> 0, this.u32[Kd + 3] = Wd >>> 0, this.u32[Kd + 4] = Zd;
        const od = Cd + pd.Sd;
        return this.u8.set(Pd, od), this.u8.fill(0, od + Zd, Cd + gd), this.cursor += gd, !0
      }
      written() {
        return this.ensureViews(), this.u8.subarray(0, this.cursor)
      }
      writeFrame(dd, Jd) {
        return this.writeNet(pd.Zb.Frame, dd, Jd)
      }
      writeOpen(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(pd.Zb.Open, dd, gd(Jd))
      }
      writeClose(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(pd.Zb.Close, dd, gd(Jd))
      }
      writeNet(dd, Jd, kd) {
        const Nd = kd.byteLength,
          Wd = pd.Xb + (0, pd.xe)(Nd);
        if (Nd > pd.Rb) return this.dropped++, !1;
        if (!this.room(Wd)) return !1;
        const Pd = this.cursor;
        this.u32[Pd >>> 2] = Nd, this.u32[1 + (Pd >>> 2)] = (0, pd.te)(dd, Jd);
        const Zd = Pd + pd.Xb;
        return this.u8.set(kd, Zd), this.u8.fill(0, Zd + Nd, Pd + Wd), this.cursor += Wd, !0
      }
      ZQ(dd, Jd, kd) {
        const Nd = pd.q + (0, pd.xe)(kd);
        if (!this.room(Nd)) return -1;
        const Wd = this.cursor;
        this.u32[Wd >>> 2] = 65535 & dd | (65535 & Jd) << 16, this.u32[1 + (Wd >>> 2)] = kd;
        const Pd = Wd + pd.q;
        return this.u8.fill(0, Pd, Wd + Nd), this.cursor += Nd, Pd
      }
      growForCmd(dd) {
        return this.fits(pd.q + (0, pd.xe)(dd), 0)
      }
      writeCmd(dd, Jd, kd) {
        const pd = this.ZQ(dd, Jd, kd.byteLength);
        return !(pd < 0) && (this.u8.set(kd, pd), !0)
      }
      copyWritten(dd, Jd) {
        return this.ensureViews(), this.u8.slice(dd, dd + Jd)
      }
    }
    const Zd = new Wd.c(0);

    function gd(dd) {
      if (0 === dd) return Zd;
      const Jd = new Wd.c(pd.Vb);
      for (let kd = 0; kd < pd.Vb; kd++) Jd[kd] = dd >>> 8 * kd & 255;
      return Jd
    }
    class Cd {
      constructor(dd, Jd) {
        this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new Pd(Jd, {
          ptr: () => dd.Mo(),
          oo: () => dd.zWd(),
          reserve: Jd => dd.ZPd(Jd)
        }), this.net = new Pd(Jd, {
          ptr: () => dd.NPd(),
          oo: () => dd.pPd(),
          reserve: Jd => dd.gPd(Jd)
        }), this.worker = new Pd(Jd, {
          ptr: () => dd.YPd(),
          oo: () => dd.FPd(),
          reserve: Jd => dd.CPd(Jd)
        }), this.cmd = new Pd(Jd, {
          ptr: () => dd.DWd(),
          oo: () => dd.UWd(),
          reserve: Jd => dd.yWd(Jd)
        })
      }
      reset(dd) {
        this.input.cursor = 0, this.worker.cursor = 0, this.cmd.consume(dd)
      }
    }
    var Kd = kd(36458),
      od = kd(2345),
      ld = kd(4673),
      Qd = kd(40915);
    const Ld = "coreFrame",
      Od = "fatalStatus",
      ed = "otherCall",
      Rd = "coreRings",
      Id = "netIn",
      Gd = "abi",
      vd = "netOut",
      xd = "workerOut",
      qd = "worldgenHost",
      Bd = "eventWalker",
      sd = "netEvent",
      ad = "envEvent",
      Md = "sharedTables",
      Fd = "inputAction",
      Yd = new Set([Bd, sd, ad, Fd, Md]),
      md = "wasmMemory",
      bd = "meshHost";

    function Sd(dd, Jd) {
      dd.forEachWorkerOut(((kd, Nd, Wd) => {
        if ((0, pd.ne)(kd)) try {
          var Pd;
          null === (Pd = Jd.worldgen) || void 0 === Pd || Pd.take(kd, Wd)
        } catch (gd) {
          dd.crash(qd, gd)
        } else try {
          var Zd;
          null === (Zd = Jd.mesh) || void 0 === Zd || Zd.take(kd, Nd, Wd)
        } catch (gd) {
          dd.crash(bd, gd)
        }
      }))
    }
    const jd = 1048576;

    function Xd(dd, Jd) {
      let kd = !1;
      const pd = () => {
        kd = !1, Jd()
      };
      return () => {
        !kd && dd.cursor >= jd && (kd = !0, queueMicrotask(pd))
      }
    }
    const fd = new Set([Od, ed, qd, bd]);

    function nd(dd) {
      return Yd.has(dd.site) ? dd.error instanceof WebAssembly.RuntimeError || (0, Nd.o)(dd.error) : !fd.has(dd.site) && dd.error instanceof Error
    }
    const Ud = "events",
      yd = [],
      Dd = "debugLog",
      Td = "terrainTextures",
      Ed = "sunShadowTextures",
      cd = new TextDecoder;

    function hd(dd, Jd) {
      const {
        site: kd,
        error: Nd,
        header: Wd
      } = dd, Pd = Wd ? (0, pd.ie)(Wd.lastError) : "noFrame", Zd = `CORE-${kd===Od?Pd:kd}`, gd = null === Nd || void 0 === Nd ? "" : ` ${(0,Kd.j)(Nd)}`, Cd = {
        site: kd,
        wasmBuild: Jd.wasm,
        clientVersion: Jd.client
      };
      return Wd && (Cd.status = String(Wd.status), Cd.lastError = Pd, Cd.lastErrorCode = String(Wd.lastError), Cd.lastErrorDetail = String(Wd.lastErrorDetail), Cd.errorCount = String(Wd.errorCount), Cd.frameIndex = String(Wd.frameIndex), Cd.tickIndex = String(Wd.tickIndex)), {
        code: Zd,
        message: `core ${kd}, last error ${Pd};${gd}`,
        details: Cd
      }
    }
    class rd {
      constructor(dd, Jd, kd) {
        this.core = dd, this.memory = Jd, this.handlers = kd, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.loadCountsBuffer = null, this.loadCounts = new Uint32Array(0), this.unsentUiPrefs = null, this.eventWalker = null, this.netOffsets = [], this.frameEvents = {
          ptr: 0,
          len: 0,
          net: yd,
          netOffsets: this.netOffsets,
          kind: "none"
        }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.rings = new Cd(dd, Jd)
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
      framePaces(dd) {
        if (this.stopped || this.drawsHeld) return !1;
        try {
          return this.core.uWd(dd)
        } catch (Jd) {
          return this.crash(Ld, Jd), !1
        }
      }
      get isStopped() {
        return this.stopped
      }
      frame(dd, Jd) {
        var kd;
        let Wd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.stopped) return !1;
        if (!this.writePendingInput()) return !1;
        const {
          input: Pd,
          net: Zd,
          worker: gd,
          cmd: Cd
        } = this.rings, Kd = Zd.cursor, od = Jd && !this.drawsHeld;
        let ed = pd.J.Fatal;
        const Rd = Cd.cursor;
        let Gd = null;
        try {
          const Jd = (od ? pd.db.Draws : 0) | (Wd ? pd.db.NetAll : 0);
          ed = (0, Qd.g)((() => this.core.frame(dd, Pd.cursor, Zd.cursor, gd.cursor, Jd, Rd)))
        } catch (fd) {
          Gd = {
            error: fd
          }
        }
        const vd = null === (kd = this.gameHost) || void 0 === kd ? void 0 : kd.takeFault();
        this.rings.reset(this.stopped || null !== Gd || void 0 !== vd ? Cd.cursor : Rd);
        const xd = null === Gd && void 0 === vd ? this.headerView() : null,
          qd = null === xd ? null : (0, pd.ye)(xd);
        null !== qd && (this.lastHeader = qd);
        const ad = null !== qd && ed !== pd.J.Fatal,
          Md = ad && null !== xd ? xd[pd.jb.NetInKept] : 0,
          Fd = ad && Md <= Kd && Md % 4 === 0 ? Md : null;
        var Yd, md;
        null !== qd && null !== Fd && ed === pd.J.Errors && (null === (Yd = (md = this.handlers).onErrors) || void 0 === Yd || Yd.call(md, qd));
        const bd = null === Fd ? yd : this.readEvents(Kd);
        if (Zd.consume(Kd - (null !== Fd && void 0 !== Fd ? Fd : 0)), this.netKept = null !== Fd && void 0 !== Fd ? Fd : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== Gd) return this.crash(Ld, void 0 === vd || vd instanceof Nd.e ? Gd.error : vd), !1;
        if (void 0 !== vd || null === qd) return this.crashOn(Ld, vd), !1;
        const Sd = this.headerView()[pd.jb.FrameDraw];
        if (this.lastFrameKind = (0, ld.f)(od, Sd), ed === pd.J.Fatal) return this.crash(Od, null), !1;
        if (null === Fd) return this.crash(Id, `the core kept ${Md} of ${Kd} net-in bytes`), !1;
        if (this.eventWalker) {
          if (this.stopped) return !1;
          const dd = this.frameEvents,
            Jd = this.headerView();
          dd.ptr = Jd[pd.jb.EventsPtr], dd.len = Jd[pd.jb.EventsLen], dd.net = bd, dd.kind = this.lastFrameKind;
          try {
            this.eventWalker(dd)
          } catch (fd) {
            return this.crashOn(Bd, fd), !1
          }
          return this.handEnvEvents()
        }
        for (const pd of bd) {
          if (this.stopped) return !1;
          try {
            var jd, Xd;
            null === (jd = (Xd = this.handlers).onNetEvent) || void 0 === jd || jd.call(Xd, pd)
          } catch (fd) {
            return this.crashOn(sd, fd), !1
          }
        }
        return this.handEnvEvents()
      }
      handEnvEvents() {
        for (const Wd of this.graceEvents) {
          if (this.stopped) return !1;
          try {
            var dd, Jd;
            null === (dd = (Jd = this.handlers).onReconnectGrace) || void 0 === dd || dd.call(Jd, Wd)
          } catch (Nd) {
            return this.crashOn(sd, Nd), !1
          }
        }
        for (const Wd of this.envEvents) {
          if (this.stopped) return !1;
          try {
            var kd, pd;
            null === (kd = (pd = this.handlers).onEnvEvent) || void 0 === kd || kd.call(pd, Wd)
          } catch (Nd) {
            return this.crashOn(ad, Nd), !1
          }
        }
        return !this.stopped
      }
      setEventWalker(dd) {
        this.eventWalker = dd
      }
      writePendingInput() {
        if (this.stopped) return !1;
        const {
          input: dd
        } = this.rings;
        try {
          const Jd = this.unsentUiPrefs;
          Jd && dd.writeRecord(pd.ub.UiPrefs, 0, Jd.nametagCutDistance, 0, (0, pd.ze)(Jd)) && (this.unsentUiPrefs = null);
          const kd = this.unsentEnvPrefs;
          kd && dd.writeRecord(pd.ub.EnvPrefs, (0, pd.ke)(kd), kd.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
          const Nd = this.unsentLookPrefs;
          Nd && dd.writeRecord(pd.ub.Sensitivity, 0, Nd.mouse, Nd.touch, (0, od.k)(Nd.fovPercent)) && (this.unsentLookPrefs = null);
          let Wd = 0;
          for (const {
              aux: pd,
              payload: Pd
            }
            of this.unsentOptions) {
            if (!dd.writeOptions(pd, Pd)) {
              if (dd.cursor > 0) break;
              this.optionsDropped++
            }
            Wd++
          }
          Wd > 0 && this.unsentOptions.splice(0, Wd)
        } catch (Jd) {
          return this.crash(Rd, Jd), !1
        }
        return !0
      }
      setHoldDraws(dd) {
        this.drawsHeld = dd
      }
      setUiPrefs(dd) {
        this.unsentUiPrefs = {
          ...dd
        }
      }
      setEnvPrefs(dd) {
        this.unsentEnvPrefs = {
          ...dd
        }
      }
      setLookPrefs(dd) {
        this.unsentLookPrefs = {
          ...dd
        }
      }
      queueOptions(dd, Jd) {
        return !this.isStopped && (Jd.byteLength > pd.$b.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
          aux: dd,
          payload: Jd
        }), !0))
      }
      setChunkCap(dd) {
        return this.callCore("setChunkCap", null, (Jd => Jd.OPd(dd)))
      }
      shedMemory(dd) {
        const Jd = this.callCore("shedMemory", null, (Jd => Jd.qPd(dd)));
        return 0 === Jd ? null : Jd
      }
      addDistanceInUse() {
        const dd = this.callCore("addDistanceInUse", null, (dd => dd.SWd()));
        return 0 === dd ? null : dd
      }
      setChunkAddDistance(dd, Jd) {
        return this.callCore("setChunkAddDistance", !1, (kd => kd.LPd(dd, Jd)))
      }
      setGameHost(dd) {
        return this.callCore("setGameHost", !1, (Jd => (Jd.rWd(dd), this.gameHost = dd, !0)))
      }
      setAntiCheatProbes(dd) {
        return this.callCore("setAntiCheatProbes", !1, (Jd => Jd.lPd(dd)))
      }
      setAmbientOcclusion(dd) {
        this.callCore("setAmbientOcclusion", void 0, (Jd => {
          Jd.oPd(dd)
        }))
      }
      setPoseLod(dd) {
        this.callCore("setPoseLod", void 0, (Jd => {
          Jd.RPd(dd)
        }))
      }
      setDebugLog(dd, Jd) {
        this.callCore(Dd, void 0, (kd => {
          kd.ee(dd, Jd)
        }))
      }
      takeDebugLog(dd) {
        return this.callCore(Dd, [], (Jd => Jd.Re(dd)))
      }
      setTextureLayers(dd) {
        return this.callCore("setTextureLayers", !1, (Jd => Jd.xPd(dd)))
      }
      setBlockColours(dd) {
        let {
          blocks: Jd,
          counts: kd,
          values: pd
        } = dd;
        return this.callCore("setBlockColours", !1, (dd => dd.Qpd(Jd, kd, pd)))
      }
      terrainTextureNames() {
        return this.callCore(Td, [], (dd => dd.MPd()))
      }
      setTerrainTextures(dd, Jd, kd, pd) {
        return this.callCore(Td, !1, (Nd => Nd.vPd(dd, kd, Jd, pd)))
      }
      setShaderPack(dd, Jd, kd, pd, Nd, Wd) {
        return this.callCore("setShaderPack", !1, (Pd => {
          var Zd, gd;
          return null !== (Zd = null === (gd = Pd.Mpd) || void 0 === gd ? void 0 : gd.call(Pd, dd, Jd, kd, pd, Nd, Wd)) && void 0 !== Zd && Zd
        }))
      }
      sunShadowWantedTextures() {
        return this.callCore(Ed, null, (dd => {
          var Jd, kd;
          return null !== (Jd = null === (kd = dd.BPd) || void 0 === kd ? void 0 : kd.call(dd)) && void 0 !== Jd ? Jd : null
        }))
      }
      setSunShadowTexture(dd, Jd, kd, pd, Nd) {
        this.callCore(Ed, void 0, (Wd => {
          var Pd;
          null === (Pd = Wd.GPd) || void 0 === Pd || Pd.call(Wd, dd, Jd, kd, pd, Nd)
        }))
      }
      takeSunShadowWarnings() {
        return this.callCore(Ed, [], (dd => {
          var Jd, kd;
          return null !== (Jd = null === (kd = dd.iPd) || void 0 === kd ? void 0 : kd.call(dd)) && void 0 !== Jd ? Jd : []
        }))
      }
      sunShadowsHeld() {
        return this.callCore(Ed, null, (dd => {
          var Jd, kd;
          return null !== (Jd = null === (kd = dd.sPd) || void 0 === kd ? void 0 : kd.call(dd)) && void 0 !== Jd ? Jd : null
        }))
      }
      callCore(dd, Jd, kd) {
        if (this.stopped) return Jd;
        try {
          return kd(this.core)
        } catch (pd) {
          return this.crash(dd, pd), Jd
        }
      }
      readEvents(dd) {
        this.netOffsets.length = 0;
        const Jd = this.headerView(),
          kd = Jd[pd.jb.EventsPtr],
          Nd = Jd[pd.jb.EventsLen];
        if (this.envEvents.length = 0, this.graceEvents.length = 0, 0 === Nd) return yd;
        const Wd = [],
          Pd = this.memory().buffer;
        if (kd % 4 !== 0 || kd + Nd > Pd.byteLength) return this.crash(Ud, `events of ${Nd} bytes at ${kd} outside ${Pd.byteLength} bytes of memory`), yd;
        const Zd = new DataView(Pd, kd, Nd),
          gd = this.rings.net,
          Cd = (Jd, kd) => Jd + kd <= dd ? gd.copyWritten(Jd, kd) : null;
        let Kd = 0;
        for (; Kd < Nd;) {
          const dd = Kd + pd.U,
            Jd = dd <= Nd ? Zd.getUint32(Kd, !0) : -1,
            gd = Jd >>> 16;
          if (Jd < 0 || gd > Nd - dd) return this.crash(Ud, `event record at ${Kd} overruns its ${Nd} bytes`), yd;
          const ad = 65535 & Jd,
            Md = Jd => Zd.getUint32(dd + 4 * Jd, !0);
          if (ad === pd.X.RawMessage) {
            const dd = gd >= pd.Kc.BYTES ? 65535 & Md(1) : -1,
              Jd = dd === pd.Kc.STRING_TYPE,
              kd = gd === (Jd ? pd.Kc.STRING_TYPE_BYTES : pd.Kc.BYTES) ? Cd(Md(2), Md(3)) : null,
              Nd = Jd && kd ? Cd(Md(4), Md(5)) : null;
            if (!kd || Jd && !Nd) return this.crash(Ud, `RawMessage at ${Kd} of ${gd} bytes names bytes outside net-in`), yd;
            this.netOffsets.push(Kd), Wd.push({
              type: "message",
              conn: Md(0),
              IC: dd,
              payloadKind: Md(1) >>> 16,
              payload: kd,
              stringType: Nd ? cd.decode(Nd) : null
            })
          } else if (ad === pd.X.CoreErrors) {
            var od, ld;
            const dd = gd >= 4 ? Md(0) : -1;
            if (dd < 0 || dd > pd.F.PAIRS_MAX || gd !== 4 * (pd.F.FIXED_WORDS + pd.F.PAIR_WORDS * dd)) return this.crash(Ud, `CoreErrors at ${Kd} of ${gd} bytes`), yd;
            const Jd = [];
            for (let kd = 0; kd < dd; kd++) Jd.push({
              code: Md(1 + 2 * kd),
              detail: Md(2 + 2 * kd)
            });
            null === (od = (ld = this.handlers).onCoreErrors) || void 0 === od || od.call(ld, Jd, Md(1 + 2 * dd))
          } else if (ad === pd.X.RenderReload) {
            var Qd, Ld;
            if (gd !== pd._c.BYTES) return this.crash(Ud, `RenderReload at ${Kd} of ${gd} bytes`), yd;
            null === (Qd = (Ld = this.handlers).onRenderReload) || void 0 === Qd || Qd.call(Ld, Md(0), Md(1), Md(2))
          } else if (ad === pd.X.Images) {
            var Od, ed;
            null === (Od = (ed = this.handlers).onImages) || void 0 === Od || Od.call(ed, new Uint8Array(Pd.slice(kd + dd, kd + dd + gd)))
          } else if (ad === pd.X.ModelRequests)
            for (let kd = 0; kd < gd >>> 2; kd++) {
              var Rd, Id;
              null === (Rd = (Id = this.handlers).onModelRequest) || void 0 === Rd || Rd.call(Id, Md(kd))
            } else if (ad === pd.X.ModelTaken) {
              var Gd, vd;
              if (gd < 4) return this.crash(Ud, `ModelTaken at ${Kd} of ${gd} bytes`), yd;
              const dd = new Uint32Array((gd >>> 2) - 1);
              for (let Jd = 0; Jd < dd.length; Jd++) dd[Jd] = Md(1 + Jd);
              null === (Gd = (vd = this.handlers).onModelTaken) || void 0 === Gd || Gd.call(vd, Md(0), dd)
            } else if (ad === pd.X.TerrainTexturesWanted) {
            var xd, qd;
            if (0 !== gd) return this.crash(Ud, `TerrainTexturesWanted at ${Kd} of ${gd} bytes`), yd;
            null === (xd = (qd = this.handlers).onTerrainTexturesWanted) || void 0 === xd || xd.call(qd)
          } else if (ad === pd.X.KeepAliveDue) {
            var Bd, sd;
            if (gd > pd.xb) return this.crash(Ud, `KeepAliveDue at ${Kd} of ${gd} bytes`), yd;
            null === (Bd = (sd = this.handlers).onKeepAlive) || void 0 === Bd || Bd.call(sd, new Uint8Array(Pd, kd + dd, gd).slice())
          } else if (ad === pd.X.ConnectionState) {
            if (gd !== pd.u) return this.crash(Ud, `ConnectionState at ${Kd} of ${gd} bytes`), yd;
            this.netOffsets.push(Kd), Wd.push({
              type: "connection",
              conn: Md(0),
              phase: Md(1),
              code: 0 | Md(2)
            })
          } else if (ad === pd.X.EnvLighting || ad === pd.X.SkyImages) {
            if (gd !== (ad === pd.X.EnvLighting ? pd.S : pd.xd)) return this.crash(Ud, `event ${ad} at ${Kd} of ${gd} bytes`), yd;
            this.envEvents.push({
              kind: ad,
              payload: new Uint8Array(Pd.slice(kd + dd, kd + dd + gd))
            })
          } else if (ad === pd.X.ReconnectGrace) {
            if (gd !== pd.rc) return this.crash(Ud, `ReconnectGrace at ${Kd} of ${gd} bytes`), yd;
            const dd = Md(2);
            this.graceEvents.push({
              conn: Md(0),
              graceMs: Md(1),
              sessionBased: 0 !== (dd & pd.Nc.SessionBased),
              replayOffer: 0 !== (dd & pd.Nc.ReplayOffer)
            })
          }
          Kd = dd + (0, pd.xe)(gd)
        }
        return Wd
      }
      forEachNetOut(dd) {
        this.forEachOut(vd, "net-out", pd.jb.NetOutPtr, pd.jb.NetOutLen, pd.Xb, 0, ((Jd, kd, Nd, Wd) => {
          const Pd = (0, pd.qe)(kd);
          Pd === pd.Zb.Frame ? dd((0, pd.oe)(kd), Nd) : this.crash(vd, `net-out record at ${Wd} is kind ${Pd}, not a frame`)
        }))
      }
      forEachWorkerOut(dd) {
        this.forEachOut(xd, "worker-out", pd.jb.WorkerOutPtr, pd.jb.WorkerOutLen, pd.Md, 4, ((Jd, kd, Nd, Wd) => {
          const Pd = 255 & Jd,
            Zd = Pd === pd.de.Init ? this.initOf(Nd, Wd) : Nd;
          null !== Zd && dd(Pd, Jd >>> 8 & 16777215, Zd)
        }))
      }
      initOf(dd, Jd) {
        const kd = this.memory().buffer;
        if (dd.byteLength !== pd.nb) return this.crash(xd, `worker-out Init record at ${Jd} is ${dd.byteLength} bytes, not a view`), null;
        const Nd = new DataView(dd.buffer, dd.byteOffset, pd.nb),
          Wd = Nd.getUint32(0, !0),
          Pd = Nd.getUint32(4, !0);
        return Wd + Pd > kd.byteLength ? (this.crash(xd, `worker-out Init record at ${Jd} names ${Pd} bytes at ${Wd} outside ${kd.byteLength} bytes of memory`), null) : new Uint8Array(kd, Wd, Pd)
      }
      forEachOut(dd, Jd, kd, Nd, Wd, Pd, Zd) {
        if (this.stopped || null === this.lastHeader) return;
        const gd = this.headerView(),
          Cd = gd[kd],
          Kd = gd[Nd];
        if (0 === Kd) return;
        const od = this.memory().buffer;
        if (Cd % 4 !== 0 || Cd + Kd > od.byteLength) return void this.crash(dd, `${Jd} of ${Kd} bytes at ${Cd} outside ${od.byteLength} bytes of memory`);
        const ld = new DataView(od, Cd, Kd);
        let Qd = 0;
        for (; Qd < Kd;) {
          const kd = Qd + Wd,
            Nd = kd <= Kd ? ld.getUint32(Qd + Pd, !0) : -1;
          if (Nd < 0 || Nd > Kd - kd) return void this.crash(dd, `${Jd} record at ${Qd} overruns its ${Kd} bytes`);
          if (Zd(ld.getUint32(Qd, !0), ld.getUint32(Qd + 4, !0), new Uint8Array(od, Cd + kd, Nd), Qd), this.stopped) return;
          Qd = kd + (0, pd.xe)(Nd)
        }
      }
      forEachEvent(dd) {
        if (this.stopped || null === this.lastHeader) return;
        const Jd = this.headerView(),
          kd = Jd[pd.jb.EventsPtr],
          Nd = Jd[pd.jb.EventsLen];
        if (0 === Nd) return;
        const Wd = this.memory().buffer;
        if (kd % 4 !== 0 || kd + Nd > Wd.byteLength) return void this.crash(Ud, `events of ${Nd} bytes at ${kd} outside ${Wd.byteLength} bytes of memory`);
        const Pd = new DataView(Wd, kd, Nd);
        let Zd = 0;
        for (; Zd < Nd;) {
          const Jd = Zd + pd.U,
            kd = Jd <= Nd ? Pd.getUint32(Zd, !0) : -1,
            Wd = kd >>> 16;
          if (kd < 0 || Wd > Nd - Jd) return void this.crash(Ud, `event record at ${Zd} overruns its ${Nd} bytes`);
          dd(65535 & kd, Pd, Jd, Wd), Zd = Jd + (0, pd.xe)(Wd)
        }
      }
      crashOn(dd, Jd) {
        Jd instanceof Nd.e ? this.crash(Ud, Jd.message) : this.crash(dd, Jd)
      }
      crash(dd, Jd) {
        this.stopped || (this.stopped = !0, this.handlers.onCrash({
          site: dd,
          error: Jd,
          header: this.lastHeader
        }))
      }
      headerWord(dd) {
        return this.stopped || null === this.lastHeader ? 0 : this.headerView()[dd]
      }
      readLoadCounts(dd) {
        if (this.stopped || null === this.lastHeader) return !1;
        const Jd = this.core.Oe();
        if (0 === Jd) return !1;
        const kd = this.memory().buffer;
        kd !== this.loadCountsBuffer && (this.loadCountsBuffer = kd, this.loadCounts = new Uint32Array(kd, Jd, pd.yb));
        const Nd = this.loadCounts;
        return dd.chunksReceived = Nd[pd.Ib.ChunksReceived], dd.chunksCancelled = this.headerView()[pd.jb.ChunksCancelled], dd.chunksStored = Nd[pd.Ib.ChunksStored], dd.jobsSent = Nd[pd.Ib.JobsSent], dd.jobsDone = Nd[pd.Ib.JobsDone], dd.jobsInFlight = Nd[pd.Ib.JobsInFlight], dd.workersLive = Nd[pd.Ib.WorkersLive], dd.workersRetired = Nd[pd.Ib.WorkersRetired], !0
      }
      headerView() {
        const dd = this.memory().buffer;
        return dd !== this.headerBuffer && (this.headerBuffer = dd, this.header = new Uint32Array(dd, this.core.gQ(), pd.ib)), this.header
      }
    }
  },
  40915: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Pd,
      g: () => Wd
    });
    var pd = kd(4563);
    let Nd = null;

    function Wd(dd) {
      Nd = {
        scanned: !1
      };
      try {
        return dd()
      } finally {
        Nd = null
      }
    }

    function Pd() {
      const dd = Nd;
      if (null === dd) return (0, pd.f)();
      const Jd = (0, pd.f)(!dd.scanned);
      return dd.scanned = !0, Jd
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);