export const id = 263;
export const ids = [263];
export const modules = {
  40284: (vv, zv, Pv) => {
    function hv(vv, zv, Pv) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(vv, zv).getContext("2d", Pv);
      const hv = document.createElement("canvas");
      return hv.width = vv, hv.height = zv, hv.getContext("2d", Pv)
    }

    function Sv(vv, zv) {
      return vv.getContext("2d", zv)
    }
    Pv.d(zv, {
      c: () => Sv,
      d: () => hv
    })
  },
  40209: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Gv,
      d: () => av,
      g: () => Bv,
      k: () => Dv,
      o: () => Vv,
      r: () => Uv,
      t: () => cv,
      x: () => Cv,
      B: () => iv,
      D: () => Ov,
      H: () => Lv,
      L: () => fv,
      M: () => Iv,
      N: () => yv,
      Q: () => Rv,
      S: () => tv
    });
    var hv = Pv(4535),
      Sv = Pv(39956),
      ev = (Pv(40096), Pv(11));
    class gv {
      constructor(vv, zv) {
        this.memory = vv, this.access = zv, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.GT = 0, this.u32 = new ev.m(0), this.f32 = new ev.f(0), this.u8 = new ev.b(0), this.dataView = new ev.j(new ArrayBuffer(0)), this.refresh()
      }
      refresh() {
        this.ptr = this.access.ptr(), this.GT = this.access.GT(), this.buffer = (0, ev.L)(this.memory()), this.u32 = new ev.m(this.buffer, this.ptr, this.GT >>> 2), this.f32 = new ev.f(this.buffer, this.ptr, this.GT >>> 2), this.u8 = new ev.b(this.buffer, this.ptr, this.GT), this.dataView = new ev.j(this.buffer, this.ptr, this.GT)
      }
      ensureViews() {
        (0, ev.L)(this.memory()) !== this.buffer && this.refresh()
      }
      get view() {
        return this.ensureViews(), this.dataView
      }
      room(vv) {
        return !!this.fits(vv) || (this.dropped++, !1)
      }
      fits(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.cursor;
        this.ensureViews();
        const Pv = zv + vv;
        return Pv <= this.GT || Pv <= hv.Sc && 0 !== this.access.reserve(Pv) && (this.refresh(), Pv <= this.GT)
      }
      consume(vv) {
        const zv = this.cursor - vv;
        zv > 0 && vv > 0 && (this.ensureViews(), this.u8.copyWithin(0, vv, this.cursor)), this.cursor = zv > 0 ? zv : 0
      }
      writeRecord(vv, zv, Pv, Sv, ev) {
        if (!this.room(hv.Ab)) return !1;
        const gv = this.cursor >>> 2;
        return this.u32[gv] = 65535 & vv | (65535 & zv) << 16, this.f32[gv + 1] = Pv, this.f32[gv + 2] = Sv, this.u32[gv + 3] = ev >>> 0, this.cursor += hv.Ab, !0
      }
      writeOptions(vv, zv) {
        const Pv = zv.byteLength,
          Sv = hv.Ab + (0, hv.Le)(Pv);
        if (!this.fits(Sv)) return !1;
        const ev = this.cursor,
          gv = ev >>> 2;
        this.u32[gv] = hv.Bb.Options, this.u32[gv + 1] = Pv, this.u32[gv + 2] = 0, this.u32[gv + 3] = vv >>> 0;
        const pv = ev + hv.Ab;
        return this.u8.set(zv, pv), this.u8.fill(0, pv + Pv, ev + Sv), this.cursor += Sv, !0
      }
      writeWorkerRecord(vv, zv, Pv, Sv, ev, gv) {
        const pv = gv.byteLength,
          dv = hv.ae + (0, hv.Le)(pv);
        if (pv > hv.$d) return this.dropped++, !1;
        if (!this.room(dv)) return !1;
        const Nv = this.cursor,
          lv = Nv >>> 2;
        this.u32[lv] = vv >>> 0, this.u32[lv + 1] = 65535 & zv | (65535 & Pv) << 16, this.u32[lv + 2] = Sv >>> 0, this.u32[lv + 3] = ev >>> 0, this.u32[lv + 4] = pv;
        const Tv = Nv + hv.ae;
        return this.u8.set(gv, Tv), this.u8.fill(0, Tv + pv, Nv + dv), this.cursor += dv, !0
      }
      written() {
        return this.ensureViews(), this.u8.subarray(0, this.cursor)
      }
      writeFrame(vv, zv) {
        return this.writeNet(hv.ec.Frame, vv, zv)
      }
      writeOpen(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(hv.ec.Open, vv, dv(zv))
      }
      writeClose(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(hv.ec.Close, vv, dv(zv))
      }
      writeNet(vv, zv, Pv) {
        const Sv = Pv.byteLength,
          ev = hv.bc + (0, hv.Le)(Sv);
        if (Sv > hv.Vb) return this.dropped++, !1;
        if (!this.room(ev)) return !1;
        const gv = this.cursor;
        this.u32[gv >>> 2] = Sv, this.u32[1 + (gv >>> 2)] = (0, hv.Ee)(vv, zv);
        const pv = gv + hv.bc;
        return this.u8.set(Pv, pv), this.u8.fill(0, pv + Sv, gv + ev), this.cursor += ev, !0
      }
      dw(vv, zv, Pv) {
        const Sv = hv.t + (0, hv.Le)(Pv);
        if (!this.room(Sv)) return -1;
        const ev = this.cursor;
        this.u32[ev >>> 2] = 65535 & vv | (65535 & zv) << 16, this.u32[1 + (ev >>> 2)] = Pv;
        const gv = ev + hv.t;
        return this.u8.fill(0, gv, ev + Sv), this.cursor += Sv, gv
      }
      growForCmd(vv) {
        return this.fits(hv.t + (0, hv.Le)(vv), 0)
      }
      writeCmd(vv, zv, Pv) {
        const hv = this.dw(vv, zv, Pv.byteLength);
        return !(hv < 0) && (this.u8.set(Pv, hv), !0)
      }
      copyWritten(vv, zv) {
        return this.ensureViews(), this.u8.slice(vv, vv + zv)
      }
    }
    const pv = new ev.b(0);

    function dv(vv) {
      if (0 === vv) return pv;
      const zv = new ev.b(hv.Zb);
      for (let Pv = 0; Pv < hv.Zb; Pv++) zv[Pv] = vv >>> 8 * Pv & 255;
      return zv
    }
    class Nv {
      constructor(vv, zv) {
        this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new gv(zv, {
          ptr: () => vv.xT(),
          GT: () => vv.tSv(),
          reserve: zv => vv.JSv(zv)
        }), this.net = new gv(zv, {
          ptr: () => vv.MSv(),
          GT: () => vv.HSv(),
          reserve: zv => vv.ESv(zv)
        }), this.worker = new gv(zv, {
          ptr: () => vv.cev(),
          GT: () => vv.iev(),
          reserve: zv => vv.oSv(zv)
        }), this.cmd = new gv(zv, {
          ptr: () => vv.YSv(),
          GT: () => vv.fSv(),
          reserve: zv => vv.FSv(zv)
        })
      }
      reset(vv) {
        this.input.cursor = 0, this.worker.cursor = 0, this.cmd.consume(vv)
      }
    }
    var lv = Pv(35852),
      Tv = Pv(2306),
      Wv = Pv(4531),
      wv = Pv(40214);
    const av = "coreFrame",
      sv = "fatalStatus",
      Cv = "otherCall",
      iv = "coreRings",
      cv = "netIn",
      Gv = "abi",
      mv = "netOut",
      jv = "workerOut",
      fv = "worldgenHost",
      Fv = "eventWalker",
      Yv = "netEvent",
      nv = "envEvent",
      Ov = "sharedTables",
      Dv = "inputAction",
      Kv = new Set([Fv, Yv, nv, Dv, Ov]),
      Vv = "wasmMemory",
      Uv = "meshHost";

    function Rv(vv, zv) {
      vv.forEachWorkerOut(((Pv, Sv, ev) => {
        if ((0, hv.ve)(Pv)) try {
          var gv;
          null === (gv = zv.worldgen) || void 0 === gv || gv.take(Pv, ev)
        } catch (dv) {
          vv.crash(fv, dv)
        } else try {
          var pv;
          null === (pv = zv.mesh) || void 0 === pv || pv.take(Pv, Sv, ev)
        } catch (dv) {
          vv.crash(Uv, dv)
        }
      }))
    }
    const xv = 1048576;

    function tv(vv, zv) {
      let Pv = !1;
      const hv = () => {
        Pv = !1, zv()
      };
      return () => {
        !Pv && vv.cursor >= xv && (Pv = !0, queueMicrotask(hv))
      }
    }
    const qv = new Set([sv, Cv, fv, Uv]);

    function Iv(vv) {
      return Kv.has(vv.site) ? vv.error instanceof WebAssembly.RuntimeError || (0, Sv.o)(vv.error) : !qv.has(vv.site) && vv.error instanceof Error
    }
    const Qv = "events",
      Zv = [],
      Av = "debugLog",
      Lv = "terrainTextures",
      Hv = "sunShadowTextures",
      Mv = new TextDecoder;

    function yv(vv, zv) {
      const {
        site: Pv,
        error: Sv,
        header: ev
      } = vv, gv = ev ? (0, hv.qe)(ev.lastError) : "noFrame", pv = `CORE-${Pv===sv?gv:Pv}`, dv = null === Sv || void 0 === Sv ? "" : ` ${(0,lv.j)(Sv)}`, Nv = {
        site: Pv,
        wasmBuild: zv.wasm,
        clientVersion: zv.client
      };
      return ev && (Nv.status = String(ev.status), Nv.lastError = gv, Nv.lastErrorCode = String(ev.lastError), Nv.lastErrorDetail = String(ev.lastErrorDetail), Nv.errorCount = String(ev.errorCount), Nv.frameIndex = String(ev.frameIndex), Nv.tickIndex = String(ev.tickIndex)), {
        code: pv,
        message: `core ${Pv}, last error ${gv};${dv}`,
        details: Nv
      }
    }
    class Bv {
      constructor(vv, zv, Pv) {
        this.core = vv, this.memory = zv, this.handlers = Pv, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.unsentUiPrefs = null, this.eventWalker = null, this.netOffsets = [], this.frameEvents = {
          ptr: 0,
          len: 0,
          net: Zv,
          netOffsets: this.netOffsets,
          kind: "none"
        }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.rings = new Nv(vv, zv)
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
      framePaces(vv) {
        if (this.stopped || this.drawsHeld) return !1;
        try {
          return this.core.USv(vv)
        } catch (zv) {
          return this.crash(av, zv), !1
        }
      }
      get isStopped() {
        return this.stopped
      }
      frame(vv, zv) {
        var Pv;
        let ev = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.stopped) return !1;
        if (!this.writePendingInput()) return !1;
        const {
          input: gv,
          net: pv,
          worker: dv,
          cmd: Nv
        } = this.rings, lv = pv.cursor, Tv = zv && !this.drawsHeld;
        let Cv = hv.M.Fatal;
        const iv = Nv.cursor;
        let Gv = null;
        try {
          const zv = (Tv ? hv.gb.Draws : 0) | (ev ? hv.gb.NetAll : 0);
          Cv = (0, wv.h)((() => this.core.frame(vv, gv.cursor, pv.cursor, dv.cursor, zv, iv)))
        } catch (qv) {
          Gv = {
            error: qv
          }
        }
        const mv = null === (Pv = this.gameHost) || void 0 === Pv ? void 0 : Pv.takeFault();
        this.rings.reset(this.stopped || null !== Gv || void 0 !== mv ? Nv.cursor : iv);
        const jv = null === Gv && void 0 === mv ? this.headerView() : null,
          fv = null === jv ? null : (0, hv.Oe)(jv);
        null !== fv && (this.lastHeader = fv);
        const nv = null !== fv && Cv !== hv.M.Fatal,
          Ov = nv && null !== jv ? jv[hv.sb.NetInKept] : 0,
          Dv = nv && Ov <= lv && Ov % 4 === 0 ? Ov : null;
        var Kv, Vv;
        null !== fv && null !== Dv && Cv === hv.M.Errors && (null === (Kv = (Vv = this.handlers).onErrors) || void 0 === Kv || Kv.call(Vv, fv));
        const Uv = null === Dv ? Zv : this.readEvents(lv);
        if (pv.consume(lv - (null !== Dv && void 0 !== Dv ? Dv : 0)), this.netKept = null !== Dv && void 0 !== Dv ? Dv : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== Gv) return this.crash(av, void 0 === mv || mv instanceof Sv.c ? Gv.error : mv), !1;
        if (void 0 !== mv || null === fv) return this.crashOn(av, mv), !1;
        const Rv = this.headerView()[hv.sb.FrameDraw];
        if (this.lastFrameKind = (0, Wv.f)(Tv, Rv), Cv === hv.M.Fatal) return this.crash(sv, null), !1;
        if (null === Dv) return this.crash(cv, `the core kept ${Ov} of ${lv} net-in bytes`), !1;
        if (this.eventWalker) {
          if (this.stopped) return !1;
          const vv = this.frameEvents,
            zv = this.headerView();
          vv.ptr = zv[hv.sb.EventsPtr], vv.len = zv[hv.sb.EventsLen], vv.net = Uv, vv.kind = this.lastFrameKind;
          try {
            this.eventWalker(vv)
          } catch (qv) {
            return this.crashOn(Fv, qv), !1
          }
          return this.handEnvEvents()
        }
        for (const hv of Uv) {
          if (this.stopped) return !1;
          try {
            var xv, tv;
            null === (xv = (tv = this.handlers).onNetEvent) || void 0 === xv || xv.call(tv, hv)
          } catch (qv) {
            return this.crashOn(Yv, qv), !1
          }
        }
        return this.handEnvEvents()
      }
      handEnvEvents() {
        for (const ev of this.graceEvents) {
          if (this.stopped) return !1;
          try {
            var vv, zv;
            null === (vv = (zv = this.handlers).onReconnectGrace) || void 0 === vv || vv.call(zv, ev)
          } catch (Sv) {
            return this.crashOn(Yv, Sv), !1
          }
        }
        for (const ev of this.envEvents) {
          if (this.stopped) return !1;
          try {
            var Pv, hv;
            null === (Pv = (hv = this.handlers).onEnvEvent) || void 0 === Pv || Pv.call(hv, ev)
          } catch (Sv) {
            return this.crashOn(nv, Sv), !1
          }
        }
        return !this.stopped
      }
      setEventWalker(vv) {
        this.eventWalker = vv
      }
      writePendingInput() {
        if (this.stopped) return !1;
        const {
          input: vv
        } = this.rings;
        try {
          const zv = this.unsentUiPrefs;
          zv && vv.writeRecord(hv.Bb.UiPrefs, 0, zv.nametagCutDistance, 0, (0, hv.Qe)(zv)) && (this.unsentUiPrefs = null);
          const Pv = this.unsentEnvPrefs;
          Pv && vv.writeRecord(hv.Bb.EnvPrefs, (0, hv.se)(Pv), Pv.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
          const Sv = this.unsentLookPrefs;
          Sv && vv.writeRecord(hv.Bb.Sensitivity, 0, Sv.mouse, Sv.touch, (0, Tv.m)(Sv.fovPercent)) && (this.unsentLookPrefs = null);
          let ev = 0;
          for (const {
              aux: hv,
              payload: gv
            }
            of this.unsentOptions) {
            if (!vv.writeOptions(hv, gv)) {
              if (vv.cursor > 0) break;
              this.optionsDropped++
            }
            ev++
          }
          ev > 0 && this.unsentOptions.splice(0, ev)
        } catch (zv) {
          return this.crash(iv, zv), !1
        }
        return !0
      }
      setHoldDraws(vv) {
        this.drawsHeld = vv
      }
      setUiPrefs(vv) {
        this.unsentUiPrefs = {
          ...vv
        }
      }
      setEnvPrefs(vv) {
        this.unsentEnvPrefs = {
          ...vv
        }
      }
      setLookPrefs(vv) {
        this.unsentLookPrefs = {
          ...vv
        }
      }
      queueOptions(vv, zv) {
        return !this.isStopped && (zv.byteLength > hv.hc.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
          aux: vv,
          payload: zv
        }), !0))
      }
      setChunkCap(vv) {
        return this.callCore("setChunkCap", null, (zv => zv.vev(vv)))
      }
      shedMemory(vv) {
        const zv = this.callCore("shedMemory", null, (zv => zv.Nev(vv)));
        return 0 === zv ? null : zv
      }
      addDistanceInUse() {
        const vv = this.callCore("addDistanceInUse", null, (vv => vv.iSv()));
        return 0 === vv ? null : vv
      }
      setChunkAddDistance(vv, zv) {
        return this.callCore("setChunkAddDistance", !1, (Pv => Pv.uSv(vv, zv)))
      }
      setGameHost(vv) {
        return this.callCore("setGameHost", !1, (zv => (zv.VSv(vv), this.gameHost = vv, !0)))
      }
      setAntiCheatProbes(vv) {
        return this.callCore("setAntiCheatProbes", !1, (zv => zv.kSv(vv)))
      }
      setAmbientOcclusion(vv) {
        this.callCore("setAmbientOcclusion", void 0, (zv => {
          zv.rSv(vv)
        }))
      }
      setPoseLod(vv) {
        this.callCore("setPoseLod", void 0, (zv => {
          zv.Pev(vv)
        }))
      }
      setDebugLog(vv, zv) {
        this.callCore(Av, void 0, (Pv => {
          Pv.FC(vv, zv)
        }))
      }
      takeDebugLog(vv) {
        return this.callCore(Av, [], (zv => zv.YC(vv)))
      }
      setTextureLayers(vv) {
        return this.callCore("setTextureLayers", !1, (zv => zv.pev(vv)))
      }
      setBlockColours(vv) {
        let {
          blocks: zv,
          counts: Pv,
          values: hv
        } = vv;
        return this.callCore("setBlockColours", !1, (vv => vv.kzv(zv, Pv, hv)))
      }
      terrainTextureNames() {
        return this.callCore(Lv, [], (vv => vv.Cev()))
      }
      setTerrainTextures(vv, zv, Pv, hv) {
        return this.callCore(Lv, !1, (Sv => Sv.gev(vv, Pv, zv, hv)))
      }
      setShaderPack(vv, zv, Pv, hv, Sv, ev) {
        return this.callCore("setShaderPack", !1, (gv => {
          var pv, dv;
          return null !== (pv = null === (dv = gv.lPv) || void 0 === dv ? void 0 : dv.call(gv, vv, zv, Pv, hv, Sv, ev)) && void 0 !== pv && pv
        }))
      }
      sunShadowWantedTextures() {
        return this.callCore(Hv, null, (vv => {
          var zv, Pv;
          return null !== (zv = null === (Pv = vv.lev) || void 0 === Pv ? void 0 : Pv.call(vv)) && void 0 !== zv ? zv : null
        }))
      }
      setSunShadowTexture(vv, zv, Pv, hv, Sv) {
        this.callCore(Hv, void 0, (ev => {
          var gv;
          null === (gv = ev.Sev) || void 0 === gv || gv.call(ev, vv, zv, Pv, hv, Sv)
        }))
      }
      takeSunShadowWarnings() {
        return this.callCore(Hv, [], (vv => {
          var zv, Pv;
          return null !== (zv = null === (Pv = vv.wev) || void 0 === Pv ? void 0 : Pv.call(vv)) && void 0 !== zv ? zv : []
        }))
      }
      sunShadowsHeld() {
        return this.callCore(Hv, null, (vv => {
          var zv, Pv;
          return null !== (zv = null === (Pv = vv.Wev) || void 0 === Pv ? void 0 : Pv.call(vv)) && void 0 !== zv ? zv : null
        }))
      }
      callCore(vv, zv, Pv) {
        if (this.stopped) return zv;
        try {
          return Pv(this.core)
        } catch (hv) {
          return this.crash(vv, hv), zv
        }
      }
      readEvents(vv) {
        this.netOffsets.length = 0;
        const zv = this.headerView(),
          Pv = zv[hv.sb.EventsPtr],
          Sv = zv[hv.sb.EventsLen];
        if (this.envEvents.length = 0, this.graceEvents.length = 0, 0 === Sv) return Zv;
        const ev = [],
          gv = this.memory().buffer;
        if (Pv % 4 !== 0 || Pv + Sv > gv.byteLength) return this.crash(Qv, `events of ${Sv} bytes at ${Pv} outside ${gv.byteLength} bytes of memory`), Zv;
        const pv = new DataView(gv, Pv, Sv),
          dv = this.rings.net,
          Nv = (zv, Pv) => zv + Pv <= vv ? dv.copyWritten(zv, Pv) : null;
        let lv = 0;
        for (; lv < Sv;) {
          const vv = lv + hv.Y,
            zv = vv <= Sv ? pv.getUint32(lv, !0) : -1,
            dv = zv >>> 16;
          if (zv < 0 || dv > Sv - vv) return this.crash(Qv, `event record at ${lv} overruns its ${Sv} bytes`), Zv;
          const nv = 65535 & zv,
            Ov = zv => pv.getUint32(vv + 4 * zv, !0);
          if (nv === hv.$.RawMessage) {
            const vv = dv >= hv.Wc.BYTES ? 65535 & Ov(1) : -1,
              zv = vv === hv.Wc.STRING_TYPE,
              Pv = dv === (zv ? hv.Wc.STRING_TYPE_BYTES : hv.Wc.BYTES) ? Nv(Ov(2), Ov(3)) : null,
              Sv = zv && Pv ? Nv(Ov(4), Ov(5)) : null;
            if (!Pv || zv && !Sv) return this.crash(Qv, `RawMessage at ${lv} of ${dv} bytes names bytes outside net-in`), Zv;
            this.netOffsets.push(lv), ev.push({
              type: "message",
              conn: Ov(0),
              al: vv,
              payloadKind: Ov(1) >>> 16,
              payload: Pv,
              stringType: Sv ? Mv.decode(Sv) : null
            })
          } else if (nv === hv.$.CoreErrors) {
            var Tv, Wv;
            const vv = dv >= 4 ? Ov(0) : -1;
            if (vv < 0 || vv > hv.G.PAIRS_MAX || dv !== 4 * (hv.G.FIXED_WORDS + hv.G.PAIR_WORDS * vv)) return this.crash(Qv, `CoreErrors at ${lv} of ${dv} bytes`), Zv;
            const zv = [];
            for (let Pv = 0; Pv < vv; Pv++) zv.push({
              code: Ov(1 + 2 * Pv),
              detail: Ov(2 + 2 * Pv)
            });
            null === (Tv = (Wv = this.handlers).onCoreErrors) || void 0 === Tv || Tv.call(Wv, zv, Ov(1 + 2 * vv))
          } else if (nv === hv.$.RenderReload) {
            var wv, av;
            if (dv !== hv.gd.BYTES) return this.crash(Qv, `RenderReload at ${lv} of ${dv} bytes`), Zv;
            null === (wv = (av = this.handlers).onRenderReload) || void 0 === wv || wv.call(av, Ov(0), Ov(1), Ov(2))
          } else if (nv === hv.$.Images) {
            var sv, Cv;
            null === (sv = (Cv = this.handlers).onImages) || void 0 === sv || sv.call(Cv, new Uint8Array(gv.slice(Pv + vv, Pv + vv + dv)))
          } else if (nv === hv.$.ModelRequests)
            for (let Pv = 0; Pv < dv >>> 2; Pv++) {
              var iv, cv;
              null === (iv = (cv = this.handlers).onModelRequest) || void 0 === iv || iv.call(cv, Ov(Pv))
            } else if (nv === hv.$.ModelTaken) {
              var Gv, mv;
              if (dv < 4) return this.crash(Qv, `ModelTaken at ${lv} of ${dv} bytes`), Zv;
              const vv = new Uint32Array((dv >>> 2) - 1);
              for (let zv = 0; zv < vv.length; zv++) vv[zv] = Ov(1 + zv);
              null === (Gv = (mv = this.handlers).onModelTaken) || void 0 === Gv || Gv.call(mv, Ov(0), vv)
            } else if (nv === hv.$.TerrainTexturesWanted) {
            var jv, fv;
            if (0 !== dv) return this.crash(Qv, `TerrainTexturesWanted at ${lv} of ${dv} bytes`), Zv;
            null === (jv = (fv = this.handlers).onTerrainTexturesWanted) || void 0 === jv || jv.call(fv)
          } else if (nv === hv.$.KeepAliveDue) {
            var Fv, Yv;
            if (dv > hv.Fb) return this.crash(Qv, `KeepAliveDue at ${lv} of ${dv} bytes`), Zv;
            null === (Fv = (Yv = this.handlers).onKeepAlive) || void 0 === Fv || Fv.call(Yv, new Uint8Array(gv, Pv + vv, dv).slice())
          } else if (nv === hv.$.ConnectionState) {
            if (dv !== hv.w) return this.crash(Qv, `ConnectionState at ${lv} of ${dv} bytes`), Zv;
            this.netOffsets.push(lv), ev.push({
              type: "connection",
              conn: Ov(0),
              phase: Ov(1),
              code: 0 | Ov(2)
            })
          } else if (nv === hv.$.EnvLighting || nv === hv.$.SkyImages) {
            if (dv !== (nv === hv.$.EnvLighting ? hv.W : hv.Jd)) return this.crash(Qv, `event ${nv} at ${lv} of ${dv} bytes`), Zv;
            this.envEvents.push({
              kind: nv,
              payload: new Uint8Array(gv.slice(Pv + vv, Pv + vv + dv))
            })
          } else if (nv === hv.$.ReconnectGrace) {
            if (dv !== hv.xc) return this.crash(Qv, `ReconnectGrace at ${lv} of ${dv} bytes`), Zv;
            const vv = Ov(2);
            this.graceEvents.push({
              conn: Ov(0),
              graceMs: Ov(1),
              sessionBased: 0 !== (vv & hv.Xc.SessionBased),
              replayOffer: 0 !== (vv & hv.Xc.ReplayOffer)
            })
          }
          lv = vv + (0, hv.Le)(dv)
        }
        return ev
      }
      forEachNetOut(vv) {
        this.forEachOut(mv, "net-out", hv.sb.NetOutPtr, hv.sb.NetOutLen, hv.bc, 0, ((zv, Pv, Sv, ev) => {
          const gv = (0, hv.Ce)(Pv);
          gv === hv.ec.Frame ? vv((0, hv.ze)(Pv), Sv) : this.crash(mv, `net-out record at ${ev} is kind ${gv}, not a frame`)
        }))
      }
      forEachWorkerOut(vv) {
        this.forEachOut(jv, "worker-out", hv.sb.WorkerOutPtr, hv.sb.WorkerOutLen, hv.Xd, 4, ((zv, Pv, Sv, ev) => {
          const gv = 255 & zv,
            pv = gv === hv.je.Init ? this.initOf(Sv, ev) : Sv;
          null !== pv && vv(gv, zv >>> 8 & 16777215, pv)
        }))
      }
      initOf(vv, zv) {
        const Pv = this.memory().buffer;
        if (vv.byteLength !== hv.tb) return this.crash(jv, `worker-out Init record at ${zv} is ${vv.byteLength} bytes, not a view`), null;
        const Sv = new DataView(vv.buffer, vv.byteOffset, hv.tb),
          ev = Sv.getUint32(0, !0),
          gv = Sv.getUint32(4, !0);
        return ev + gv > Pv.byteLength ? (this.crash(jv, `worker-out Init record at ${zv} names ${gv} bytes at ${ev} outside ${Pv.byteLength} bytes of memory`), null) : new Uint8Array(Pv, ev, gv)
      }
      forEachOut(vv, zv, Pv, Sv, ev, gv, pv) {
        if (this.stopped || null === this.lastHeader) return;
        const dv = this.headerView(),
          Nv = dv[Pv],
          lv = dv[Sv];
        if (0 === lv) return;
        const Tv = this.memory().buffer;
        if (Nv % 4 !== 0 || Nv + lv > Tv.byteLength) return void this.crash(vv, `${zv} of ${lv} bytes at ${Nv} outside ${Tv.byteLength} bytes of memory`);
        const Wv = new DataView(Tv, Nv, lv);
        let wv = 0;
        for (; wv < lv;) {
          const Pv = wv + ev,
            Sv = Pv <= lv ? Wv.getUint32(wv + gv, !0) : -1;
          if (Sv < 0 || Sv > lv - Pv) return void this.crash(vv, `${zv} record at ${wv} overruns its ${lv} bytes`);
          if (pv(Wv.getUint32(wv, !0), Wv.getUint32(wv + 4, !0), new Uint8Array(Tv, Nv + Pv, Sv), wv), this.stopped) return;
          wv = Pv + (0, hv.Le)(Sv)
        }
      }
      forEachEvent(vv) {
        if (this.stopped || null === this.lastHeader) return;
        const zv = this.headerView(),
          Pv = zv[hv.sb.EventsPtr],
          Sv = zv[hv.sb.EventsLen];
        if (0 === Sv) return;
        const ev = this.memory().buffer;
        if (Pv % 4 !== 0 || Pv + Sv > ev.byteLength) return void this.crash(Qv, `events of ${Sv} bytes at ${Pv} outside ${ev.byteLength} bytes of memory`);
        const gv = new DataView(ev, Pv, Sv);
        let pv = 0;
        for (; pv < Sv;) {
          const zv = pv + hv.Y,
            Pv = zv <= Sv ? gv.getUint32(pv, !0) : -1,
            ev = Pv >>> 16;
          if (Pv < 0 || ev > Sv - zv) return void this.crash(Qv, `event record at ${pv} overruns its ${Sv} bytes`);
          vv(65535 & Pv, gv, zv, ev), pv = zv + (0, hv.Le)(ev)
        }
      }
      crashOn(vv, zv) {
        zv instanceof Sv.c ? this.crash(Qv, zv.message) : this.crash(vv, zv)
      }
      crash(vv, zv) {
        this.stopped || (this.stopped = !0, this.handlers.onCrash({
          site: vv,
          error: zv,
          header: this.lastHeader
        }))
      }
      headerWord(vv) {
        return this.stopped || null === this.lastHeader ? 0 : this.headerView()[vv]
      }
      headerView() {
        const vv = this.memory().buffer;
        return vv !== this.headerBuffer && (this.headerBuffer = vv, this.header = new Uint32Array(vv, this.core.Nw(), hv.ob)), this.header
      }
    }
  },
  40214: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => gv,
      h: () => ev
    });
    var hv = Pv(4451);
    let Sv = null;

    function ev(vv) {
      Sv = {
        scanned: !1
      };
      try {
        return vv()
      } finally {
        Sv = null
      }
    }

    function gv() {
      const vv = Sv;
      if (null === vv) return (0, hv.h)();
      const zv = (0, hv.h)(!vv.scanned);
      return vv.scanned = !0, zv
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);