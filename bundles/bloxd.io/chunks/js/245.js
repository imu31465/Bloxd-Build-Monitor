export const id = 245;
export const ids = [245];
export const modules = {
  37729: (dd, Od, md) => {
    function Wd(dd, Od, md) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(dd, Od).getContext("2d", md);
      const Wd = document.createElement("canvas");
      return Wd.width = dd, Wd.height = Od, Wd.getContext("2d", md)
    }

    function Fd(dd, Od) {
      return dd.getContext("2d", Od)
    }
    md.d(Od, {
      e: () => Fd,
      i: () => Wd
    })
  },
  42689: (dd, Od, md) => {
    md.d(Od, {
      b: () => Kd
    });
    const Wd = 1 << 20,
      Fd = 1 << 21,
      Rd = 1024,
      Xd = 2048;

    function Kd(dd, Od, md) {
      const Kd = dd + Wd,
        hd = Od + Rd,
        vd = md + Wd;
      return Kd < 0 || Kd >= Fd || vd < 0 || vd >= Fd || hd < 0 || hd >= Xd ? -1 : (Kd * Fd + vd) * Xd + hd
    }
  },
  42685: (dd, Od, md) => {
    md.d(Od, {
      d: () => Wd,
      g: () => Xd,
      h: () => Fd,
      l: () => Rd,
      n: () => Qd,
      p: () => vd,
      t: () => hd,
      w: () => Kd
    });
    md(4678);
    md(42689);

    function Wd(dd) {}

    function Fd(dd) {}

    function Rd(dd) {}

    function Xd(dd) {}

    function Kd(dd) {}

    function hd(dd, Od, md) {}

    function vd(dd) {}

    function Qd(dd) {}
  },
  42733: (dd, Od, md) => {
    md.d(Od, {
      d: () => pd,
      g: () => qd,
      j: () => Zd,
      k: () => Bd,
      n: () => Id,
      p: () => ud,
      q: () => Vd,
      r: () => Td,
      u: () => yd,
      w: () => bd,
      z: () => xd,
      B: () => jd,
      D: () => wd,
      F: () => Ld,
      I: () => Cd,
      J: () => Ad,
      N: () => Gd
    });
    var Wd = md(5568),
      Fd = md(42609),
      Rd = (md(42685), md(15));
    class Xd {
      constructor(dd, Od) {
        this.memory = dd, this.access = Od, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.Mt = 0, this.u32 = new Rd.l(0), this.f32 = new Rd.h(0), this.u8 = new Rd.e(0), this.dataView = new Rd.i(new ArrayBuffer(0)), this.refresh()
      }
      refresh() {
        this.ptr = this.access.ptr(), this.Mt = this.access.Mt(), this.buffer = (0, Rd.z)(this.memory()), this.u32 = new Rd.l(this.buffer, this.ptr, this.Mt >>> 2), this.f32 = new Rd.h(this.buffer, this.ptr, this.Mt >>> 2), this.u8 = new Rd.e(this.buffer, this.ptr, this.Mt), this.dataView = new Rd.i(this.buffer, this.ptr, this.Mt)
      }
      ensureViews() {
        (0, Rd.z)(this.memory()) !== this.buffer && this.refresh()
      }
      get view() {
        return this.ensureViews(), this.dataView
      }
      room(dd) {
        return !!this.fits(dd) || (this.dropped++, !1)
      }
      fits(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.cursor;
        this.ensureViews();
        const md = Od + dd;
        return md <= this.Mt || md <= Wd.Ic && 0 !== this.access.reserve(md) && (this.refresh(), md <= this.Mt)
      }
      consume(dd) {
        const Od = this.cursor - dd;
        Od > 0 && dd > 0 && (this.ensureViews(), this.u8.copyWithin(0, dd, this.cursor)), this.cursor = Od > 0 ? Od : 0
      }
      writeRecord(dd, Od, md, Fd, Rd) {
        if (!this.room(Wd.rb)) return !1;
        const Xd = this.cursor >>> 2;
        return this.u32[Xd] = 65535 & dd | (65535 & Od) << 16, this.f32[Xd + 1] = md, this.f32[Xd + 2] = Fd, this.u32[Xd + 3] = Rd >>> 0, this.cursor += Wd.rb, !0
      }
      writeOptions(dd, Od) {
        const md = Od.byteLength,
          Fd = Wd.rb + (0, Wd.ve)(md);
        if (!this.fits(Fd)) return !1;
        const Rd = this.cursor,
          Xd = Rd >>> 2;
        this.u32[Xd] = Wd.vb.Options, this.u32[Xd + 1] = md, this.u32[Xd + 2] = 0, this.u32[Xd + 3] = dd >>> 0;
        const Kd = Rd + Wd.rb;
        return this.u8.set(Od, Kd), this.u8.fill(0, Kd + md, Rd + Fd), this.cursor += Fd, !0
      }
      writeWorkerRecord(dd, Od, md, Fd, Rd, Xd) {
        const Kd = Xd.byteLength,
          hd = Wd.Jd + (0, Wd.ve)(Kd);
        if (Kd > Wd.Id) return this.dropped++, !1;
        if (!this.room(hd)) return !1;
        const vd = this.cursor,
          Qd = vd >>> 2;
        this.u32[Qd] = dd >>> 0, this.u32[Qd + 1] = 65535 & Od | (65535 & md) << 16, this.u32[Qd + 2] = Fd >>> 0, this.u32[Qd + 3] = Rd >>> 0, this.u32[Qd + 4] = Kd;
        const td = vd + Wd.Jd;
        return this.u8.set(Xd, td), this.u8.fill(0, td + Kd, vd + hd), this.cursor += hd, !0
      }
      written() {
        return this.ensureViews(), this.u8.subarray(0, this.cursor)
      }
      writeFrame(dd, Od) {
        return this.writeNet(Wd.$b.Frame, dd, Od)
      }
      writeOpen(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(Wd.$b.Open, dd, hd(Od))
      }
      writeClose(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(Wd.$b.Close, dd, hd(Od))
      }
      writeNet(dd, Od, md) {
        const Fd = md.byteLength,
          Rd = Wd.Xb + (0, Wd.ve)(Fd);
        if (Fd > Wd.Qb) return this.dropped++, !1;
        if (!this.room(Rd)) return !1;
        const Xd = this.cursor;
        this.u32[Xd >>> 2] = Fd, this.u32[1 + (Xd >>> 2)] = (0, Wd.ne)(dd, Od);
        const Kd = Xd + Wd.Xb;
        return this.u8.set(md, Kd), this.u8.fill(0, Kd + Fd, Xd + Rd), this.cursor += Rd, !0
      }
      ot(dd, Od, md) {
        const Fd = Wd.p + (0, Wd.ve)(md);
        if (!this.room(Fd)) return -1;
        const Rd = this.cursor;
        this.u32[Rd >>> 2] = 65535 & dd | (65535 & Od) << 16, this.u32[1 + (Rd >>> 2)] = md;
        const Xd = Rd + Wd.p;
        return this.u8.fill(0, Xd, Rd + Fd), this.cursor += Fd, Xd
      }
      growForCmd(dd) {
        return this.fits(Wd.p + (0, Wd.ve)(dd), 0)
      }
      writeCmd(dd, Od, md) {
        const Wd = this.ot(dd, Od, md.byteLength);
        return !(Wd < 0) && (this.u8.set(md, Wd), !0)
      }
      copyWritten(dd, Od) {
        return this.ensureViews(), this.u8.slice(dd, dd + Od)
      }
    }
    const Kd = new Rd.e(0);

    function hd(dd) {
      if (0 === dd) return Kd;
      const Od = new Rd.e(Wd.Tb);
      for (let md = 0; md < Wd.Tb; md++) Od[md] = dd >>> 8 * md & 255;
      return Od
    }
    class vd {
      constructor(dd, Od) {
        this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new Xd(Od, {
          ptr: () => dd.yo(),
          Mt: () => dd.JKd(),
          reserve: Od => dd.nKd(Od)
        }), this.net = new Xd(Od, {
          ptr: () => dd.iKd(),
          Mt: () => dd.VKd(),
          reserve: Od => dd.LKd(Od)
        }), this.worker = new Xd(Od, {
          ptr: () => dd.Xhd(),
          Mt: () => dd.Rhd(),
          reserve: Od => dd.PKd(Od)
        }), this.cmd = new Xd(Od, {
          ptr: () => dd.HKd(),
          Mt: () => dd.NKd(),
          reserve: Od => dd.qKd(Od)
        })
      }
      reset(dd, Od, md) {
        this.input.consume(dd), this.worker.consume(Od), this.cmd.consume(md)
      }
    }
    var Qd = md(37659),
      td = md(3378),
      od = md(5565),
      Nd = md(42741);
    const qd = "coreFrame",
      Hd = "fatalStatus",
      yd = "otherCall",
      bd = "coreRings",
      Td = "netIn",
      pd = "abi",
      Yd = "netOut",
      gd = "workerOut",
      wd = "worldgenHost",
      Ed = "eventWalker",
      Jd = "netEvent",
      Ud = "envEvent",
      xd = "sharedTables",
      Bd = "inputAction",
      Sd = "frameSends",
      sd = new Set([Ed, Jd, Ud, Sd, Bd, xd]),
      ud = "wasmMemory",
      Vd = "meshHost";

    function Ad(dd, Od) {
      dd.forEachWorkerOut(((md, Fd, Rd) => {
        if ((0, Wd.fe)(md)) try {
          var Xd;
          null === (Xd = Od.worldgen) || void 0 === Xd || Xd.take(md, Rd)
        } catch (hd) {
          dd.crash(wd, hd)
        } else try {
          var Kd;
          null === (Kd = Od.mesh) || void 0 === Kd || Kd.take(md, Fd, Rd)
        } catch (hd) {
          dd.crash(Vd, hd)
        }
      }))
    }
    const rd = 1048576;

    function Gd(dd, Od) {
      let md = !1;
      const Wd = () => {
        md = !1, Od()
      };
      return () => {
        !md && dd.cursor >= rd && (md = !0, queueMicrotask(Wd))
      }
    }
    const nd = new Set([Hd, yd, wd, Vd]);

    function Ld(dd) {
      return sd.has(dd.site) ? dd.error instanceof WebAssembly.RuntimeError || (0, Fd.n)(dd.error) : !nd.has(dd.site) && dd.error instanceof Error
    }
    const Pd = "events",
      zd = [],
      cd = "debugLog",
      jd = "terrainTextures",
      Dd = "sunShadowTextures",
      ed = "joinWarm",
      Id = {
        Home: 0,
        Play: 1,
        Joined: 2
      },
      ld = new TextDecoder;

    function Cd(dd, Od) {
      const {
        site: md,
        error: Fd,
        header: Rd
      } = dd, Xd = Rd ? (0, Wd.ae)(Rd.lastError) : "noFrame", Kd = `CORE-${md===Hd?Xd:md}`, hd = null === Fd || void 0 === Fd ? "" : ` ${(0,Qd.h)(Fd)}`, vd = {
        site: md,
        wasmBuild: Od.wasm,
        clientVersion: Od.client
      };
      return Rd && (vd.status = String(Rd.status), vd.lastError = Xd, vd.lastErrorCode = String(Rd.lastError), vd.lastErrorDetail = String(Rd.lastErrorDetail), vd.errorCount = String(Rd.errorCount), vd.frameIndex = String(Rd.frameIndex), vd.tickIndex = String(Rd.tickIndex)), {
        code: Kd,
        message: `core ${md}, last error ${Xd};${hd}`,
        details: vd
      }
    }
    class Zd {
      constructor(dd, Od, md) {
        this.core = dd, this.memory = Od, this.handlers = md, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.loadCountsBuffer = null, this.loadCounts = new Uint32Array(0), this.unsentUiPrefs = null, this.eventWalker = null, this.netOffsets = [], this.frameEvents = {
          ptr: 0,
          len: 0,
          net: zd,
          netOffsets: this.netOffsets,
          kind: "none"
        }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.atSendsStop = !1, this.rings = new vd(dd, Od)
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
          return this.core.wKd(dd)
        } catch (Od) {
          return this.crash(qd, Od), !1
        }
      }
      get isStopped() {
        return this.stopped
      }
      frame(dd, Od) {
        var md;
        let Rd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.stopped) return !1;
        if (!this.writePendingInput()) return !1;
        const {
          input: Xd,
          net: Kd,
          worker: hd,
          cmd: vd
        } = this.rings, Qd = Kd.cursor, td = Od && !this.drawsHeld;
        let yd = Wd.J.Fatal;
        const bd = Xd.cursor,
          pd = hd.cursor,
          Yd = vd.cursor;
        let gd, wd = null;
        const Ud = this.handlers.onSends;
        try {
          const Od = (td ? Wd.fb.Draws : 0) | (Rd ? Wd.fb.NetAll : 0) | (Ud ? Wd.fb.StopForSends : 0);
          yd = (0, Nd.d)((() => {
            let md = this.core.frame(dd, bd, Kd.cursor, pd, Od, Yd);
            for (; md === Wd.nd && Ud;) {
              var Fd;
              if (gd ??= null === (Fd = this.gameHost) || void 0 === Fd ? void 0 : Fd.takeFault(), void 0 === gd && !this.takeSends(Ud)) return Wd.J.Fatal;
              md = this.core.ob()
            }
            return md
          }))
        } catch (ed) {
          wd = {
            error: ed
          }
        }
        gd ??= null === (md = this.gameHost) || void 0 === md ? void 0 : md.takeFault();
        const xd = this.stopped || null !== wd || void 0 !== gd;
        this.rings.reset(xd ? Xd.cursor : bd, xd ? hd.cursor : pd, xd ? vd.cursor : Yd);
        const Bd = null === wd && void 0 === gd,
          Sd = Bd && !this.stopped && yd === Wd.J.Fatal && 0 === this.core.IN(),
          sd = Bd && !Sd ? this.headerView() : null,
          ud = Sd ? {
            ...null !== (Vd = this.lastHeader) && void 0 !== Vd ? Vd : (0, Wd.ye)(new Uint32Array(Wd.kb)),
            status: Wd.J.Fatal,
            lastError: Wd.F.CoreBusy,
            lastErrorDetail: 0
          } : null === sd ? null : (0, Wd.ye)(sd);
        var Vd;
        null !== ud && (this.lastHeader = ud);
        const Ad = null !== ud && yd !== Wd.J.Fatal,
          rd = Ad && null !== sd ? sd[Wd.mb.NetInKept] : 0,
          Gd = Ad && rd <= Qd && rd % 4 === 0 ? rd : null;
        var nd, Ld;
        null !== ud && null !== Gd && yd === Wd.J.Errors && (null === (nd = (Ld = this.handlers).onErrors) || void 0 === nd || nd.call(Ld, ud));
        const Pd = null === Gd ? zd : this.readEvents(Qd);
        if (Kd.consume(Qd - (null !== Gd && void 0 !== Gd ? Gd : 0)), this.netKept = null !== Gd && void 0 !== Gd ? Gd : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== wd) return this.crash(qd, void 0 === gd || gd instanceof Fd.d ? wd.error : gd), !1;
        if (void 0 !== gd || null === ud) return this.crashOn(qd, gd), !1;
        if (Sd) return this.crash(Hd, null), !1;
        const cd = this.headerView()[Wd.mb.FrameDraw];
        if (this.lastFrameKind = (0, od.g)(td, cd), yd === Wd.J.Fatal) return this.crash(Hd, null), !1;
        if (null === Gd) return this.crash(Td, `the core kept ${rd} of ${Qd} net-in bytes`), !1;
        if (this.eventWalker) {
          if (this.stopped) return !1;
          const dd = this.frameEvents,
            Od = this.headerView();
          dd.ptr = Od[Wd.mb.EventsPtr], dd.len = Od[Wd.mb.EventsLen], dd.net = Pd, dd.kind = this.lastFrameKind;
          try {
            this.eventWalker(dd)
          } catch (ed) {
            return this.crashOn(Ed, ed), !1
          }
          return this.handEnvEvents()
        }
        for (const Wd of Pd) {
          if (this.stopped) return !1;
          try {
            var jd, Dd;
            null === (jd = (Dd = this.handlers).onNetEvent) || void 0 === jd || jd.call(Dd, Wd)
          } catch (ed) {
            return this.crashOn(Jd, ed), !1
          }
        }
        return this.handEnvEvents()
      }
      handEnvEvents() {
        for (const Rd of this.graceEvents) {
          if (this.stopped) return !1;
          try {
            var dd, Od;
            null === (dd = (Od = this.handlers).onReconnectGrace) || void 0 === dd || dd.call(Od, Rd)
          } catch (Fd) {
            return this.crashOn(Jd, Fd), !1
          }
        }
        for (const Rd of this.envEvents) {
          if (this.stopped) return !1;
          try {
            var md, Wd;
            null === (md = (Wd = this.handlers).onEnvEvent) || void 0 === md || md.call(Wd, Rd)
          } catch (Fd) {
            return this.crashOn(Ud, Fd), !1
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
          const Od = this.unsentUiPrefs;
          Od && dd.writeRecord(Wd.vb.UiPrefs, 0, Od.nametagCutDistance, 0, (0, Wd.Be)(Od)) && (this.unsentUiPrefs = null);
          const md = this.unsentEnvPrefs;
          md && dd.writeRecord(Wd.vb.EnvPrefs, (0, Wd.be)(md), md.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
          const Fd = this.unsentLookPrefs;
          Fd && dd.writeRecord(Wd.vb.Sensitivity, 0, Fd.mouse, Fd.touch, (0, td.f)(Fd.fovPercent)) && (this.unsentLookPrefs = null);
          let Rd = 0;
          for (const {
              aux: Wd,
              payload: Xd
            }
            of this.unsentOptions) {
            if (!dd.writeOptions(Wd, Xd)) {
              if (dd.cursor > 0) break;
              this.optionsDropped++
            }
            Rd++
          }
          Rd > 0 && this.unsentOptions.splice(0, Rd)
        } catch (Od) {
          return this.crash(bd, Od), !1
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
      queueOptions(dd, Od) {
        return !this.isStopped && (Od.byteLength > Wd.ec.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
          aux: dd,
          payload: Od
        }), !0))
      }
      setChunkCap(dd) {
        return this.callCore("setChunkCap", null, (Od => Od.IKd(dd)))
      }
      shedMemory(dd) {
        const Od = this.callCore("shedMemory", null, (Od => Od.MKd(dd)));
        return 0 === Od ? null : Od
      }
      releaseLeftGame() {
        this.callCore("releaseLeftGame", void 0, (dd => {
          dd.GKd()
        }))
      }
      addDistanceInUse() {
        const dd = this.callCore("addDistanceInUse", null, (dd => dd.hKd()));
        return 0 === dd ? null : dd
      }
      setChunkAddDistance(dd, Od) {
        return this.callCore("setChunkAddDistance", !1, (md => md.eKd(dd, Od)))
      }
      setGameHost(dd) {
        return this.callCore("setGameHost", !1, (Od => (Od.gKd(dd), this.gameHost = dd, !0)))
      }
      setAntiCheatProbes(dd) {
        return this.callCore("setAntiCheatProbes", !1, (Od => Od.jKd(dd)))
      }
      setAmbientOcclusion(dd) {
        this.callCore("setAmbientOcclusion", void 0, (Od => {
          Od.cKd(dd)
        }))
      }
      setPoseLod(dd) {
        this.callCore("setPoseLod", void 0, (Od => {
          Od.CKd(dd)
        }))
      }
      setDebugLog(dd, Od) {
        this.callCore(cd, void 0, (md => {
          md.Xb(dd, Od)
        }))
      }
      takeDebugLog(dd) {
        return this.callCore(cd, [], (Od => Od.Kb(dd)))
      }
      setTextureLayers(dd) {
        return this.callCore("setTextureLayers", !1, (Od => Od.fKd(dd)))
      }
      setBlockColours(dd) {
        let {
          blocks: Od,
          counts: md,
          values: Wd
        } = dd;
        return this.callCore("setBlockColours", !1, (dd => dd.TFd(Od, md, Wd)))
      }
      terrainTextureNames() {
        return this.callCore(jd, [], (dd => dd.Fhd()))
      }
      setTerrainTextures(dd, Od, md, Wd) {
        return this.callCore(jd, !1, (Fd => Fd.kKd(dd, md, Od, Wd)))
      }
      setShaderPack(dd, Od, md, Wd, Fd, Rd) {
        return this.callCore("setShaderPack", !1, (Xd => {
          var Kd, hd;
          return null !== (Kd = null === (hd = Xd.UFd) || void 0 === hd ? void 0 : hd.call(Xd, dd, Od, md, Wd, Fd, Rd)) && void 0 !== Kd && Kd
        }))
      }
      warmBeforeJoin(dd, Od) {
        this.callCore(ed, void 0, (md => {
          var Wd;
          null === (Wd = md.YKd) || void 0 === Wd || Wd.call(md, dd, Od)
        }))
      }
      firstViewTerrainCodes() {
        return this.callCore(ed, null, (dd => {
          var Od, md;
          return null !== (Od = null === (md = dd.YFd) || void 0 === md ? void 0 : md.call(dd)) && void 0 !== Od ? Od : null
        }))
      }
      sunShadowWantedTextures() {
        return this.callCore(Dd, null, (dd => {
          var Od, md;
          return null !== (Od = null === (md = dd.dhd) || void 0 === md ? void 0 : md.call(dd)) && void 0 !== Od ? Od : null
        }))
      }
      setSunShadowTexture(dd, Od, md, Wd, Fd) {
        this.callCore(Dd, void 0, (Rd => {
          var Xd;
          null === (Xd = Rd.ZKd) || void 0 === Xd || Xd.call(Rd, dd, Od, md, Wd, Fd)
        }))
      }
      takeSunShadowWarnings() {
        return this.callCore(Dd, [], (dd => {
          var Od, md;
          return null !== (Od = null === (md = dd.mhd) || void 0 === md ? void 0 : md.call(dd)) && void 0 !== Od ? Od : []
        }))
      }
      sunShadowsHeld() {
        return this.callCore(Dd, null, (dd => {
          var Od, md;
          return null !== (Od = null === (md = dd.Ohd) || void 0 === md ? void 0 : md.call(dd)) && void 0 !== Od ? Od : null
        }))
      }
      callCore(dd, Od, md) {
        if (this.stopped) return Od;
        try {
          return md(this.core)
        } catch (Wd) {
          return this.crash(dd, Wd), Od
        }
      }
      readEvents(dd) {
        this.netOffsets.length = 0;
        const Od = this.headerView(),
          md = Od[Wd.mb.EventsPtr],
          Fd = Od[Wd.mb.EventsLen];
        if (this.envEvents.length = 0, this.graceEvents.length = 0, 0 === Fd) return zd;
        const Rd = [],
          Xd = this.memory().buffer;
        if (md % 4 !== 0 || md + Fd > Xd.byteLength) return this.crash(Pd, `events of ${Fd} bytes at ${md} outside ${Xd.byteLength} bytes of memory`), zd;
        const Kd = new DataView(Xd, md, Fd),
          hd = this.rings.net,
          vd = (Od, md) => Od + md <= dd ? hd.copyWritten(Od, md) : null;
        let Qd = 0;
        for (; Qd < Fd;) {
          const dd = Qd + Wd.W,
            Od = dd <= Fd ? Kd.getUint32(Qd, !0) : -1,
            hd = Od >>> 16;
          if (Od < 0 || hd > Fd - dd) return this.crash(Pd, `event record at ${Qd} overruns its ${Fd} bytes`), zd;
          const Bd = 65535 & Od,
            Sd = Od => Kd.getUint32(dd + 4 * Od, !0);
          if (Bd === Wd.Z.RawMessage) {
            const dd = hd >= Wd.Lc.BYTES ? 65535 & Sd(1) : -1,
              Od = dd === Wd.Lc.STRING_TYPE,
              md = hd === (Od ? Wd.Lc.STRING_TYPE_BYTES : Wd.Lc.BYTES) ? vd(Sd(2), Sd(3)) : null,
              Fd = Od && md ? vd(Sd(4), Sd(5)) : null;
            if (!md || Od && !Fd) return this.crash(Pd, `RawMessage at ${Qd} of ${hd} bytes names bytes outside net-in`), zd;
            this.netOffsets.push(Qd), Rd.push({
              type: "message",
              conn: Sd(0),
              tX: dd,
              payloadKind: Sd(1) >>> 16,
              payload: md,
              stringType: Fd ? ld.decode(Fd) : null
            })
          } else if (Bd === Wd.Z.CoreErrors) {
            var td, od;
            const dd = hd >= 4 ? Sd(0) : -1;
            if (dd < 0 || dd > Wd.E.PAIRS_MAX || hd !== 4 * (Wd.E.FIXED_WORDS + Wd.E.PAIR_WORDS * dd)) return this.crash(Pd, `CoreErrors at ${Qd} of ${hd} bytes`), zd;
            const Od = [];
            for (let md = 0; md < dd; md++) Od.push({
              code: Sd(1 + 2 * md),
              detail: Sd(2 + 2 * md)
            });
            null === (td = (od = this.handlers).onCoreErrors) || void 0 === td || td.call(od, Od, Sd(1 + 2 * dd))
          } else if (Bd === Wd.Z.RenderReload) {
            var Nd, qd;
            if (hd !== Wd._c.BYTES) return this.crash(Pd, `RenderReload at ${Qd} of ${hd} bytes`), zd;
            null === (Nd = (qd = this.handlers).onRenderReload) || void 0 === Nd || Nd.call(qd, Sd(0), Sd(1), Sd(2))
          } else if (Bd === Wd.Z.JoinPreloadEnded) {
            var Hd, yd;
            if (hd !== Wd.yb.BYTES) return this.crash(Pd, `JoinPreloadEnded at ${Qd} of ${hd} bytes`), zd;
            null === (Hd = (yd = this.handlers).onJoinPreloadEnded) || void 0 === Hd || Hd.call(yd, {
              chunks: Sd(Wd.yb.CHUNKS),
              bytes: Sd(Wd.yb.BYTES_HELD),
              asked: Sd(Wd.yb.ASKED),
              replaced: Sd(Wd.yb.REPLACED),
              dropped: Sd(Wd.yb.DROPPED)
            })
          } else if (Bd === Wd.Z.Images) {
            var bd, Td;
            null === (bd = (Td = this.handlers).onImages) || void 0 === bd || bd.call(Td, new Uint8Array(Xd.slice(md + dd, md + dd + hd)))
          } else if (Bd === Wd.Z.ModelRequests)
            for (let md = 0; md < hd >>> 2; md++) {
              var pd, Yd;
              null === (pd = (Yd = this.handlers).onModelRequest) || void 0 === pd || pd.call(Yd, Sd(md))
            } else if (Bd === Wd.Z.ModelTaken) {
              var gd, wd;
              if (hd < 4) return this.crash(Pd, `ModelTaken at ${Qd} of ${hd} bytes`), zd;
              const dd = new Uint32Array((hd >>> 2) - 1);
              for (let Od = 0; Od < dd.length; Od++) dd[Od] = Sd(1 + Od);
              null === (gd = (wd = this.handlers).onModelTaken) || void 0 === gd || gd.call(wd, Sd(0), dd)
            } else if (Bd === Wd.Z.TerrainTexturesWanted) {
            var Ed, Jd;
            if (0 !== hd) return this.crash(Pd, `TerrainTexturesWanted at ${Qd} of ${hd} bytes`), zd;
            null === (Ed = (Jd = this.handlers).onTerrainTexturesWanted) || void 0 === Ed || Ed.call(Jd)
          } else if (Bd === Wd.Z.KeepAliveDue) {
            var Ud, xd;
            if (hd > Wd.Cb) return this.crash(Pd, `KeepAliveDue at ${Qd} of ${hd} bytes`), zd;
            null === (Ud = (xd = this.handlers).onKeepAlive) || void 0 === Ud || Ud.call(xd, new Uint8Array(Xd, md + dd, hd).slice())
          } else if (Bd === Wd.Z.ConnectionState) {
            if (hd !== Wd.t) return this.crash(Pd, `ConnectionState at ${Qd} of ${hd} bytes`), zd;
            this.netOffsets.push(Qd), Rd.push({
              type: "connection",
              conn: Sd(0),
              phase: Sd(1),
              code: 0 | Sd(2)
            })
          } else if (Bd === Wd.Z.EnvLighting || Bd === Wd.Z.SkyImages) {
            if (hd !== (Bd === Wd.Z.EnvLighting ? Wd.S : Wd.td)) return this.crash(Pd, `event ${Bd} at ${Qd} of ${hd} bytes`), zd;
            this.envEvents.push({
              kind: Bd,
              payload: new Uint8Array(Xd.slice(md + dd, md + dd + hd))
            })
          } else if (Bd === Wd.Z.ReconnectGrace) {
            if (hd !== Wd.sc) return this.crash(Pd, `ReconnectGrace at ${Qd} of ${hd} bytes`), zd;
            const dd = Sd(2);
            this.graceEvents.push({
              conn: Sd(0),
              graceMs: Sd(1),
              sessionBased: 0 !== (dd & Wd.Nc.SessionBased),
              replayOffer: 0 !== (dd & Wd.Nc.ReplayOffer)
            })
          }
          Qd = dd + (0, Wd.ve)(hd)
        }
        return Rd
      }
      takeSends(dd) {
        this.atSendsStop = !0;
        try {
          dd()
        } catch (Od) {
          this.crashOn(Sd, Od)
        } finally {
          this.atSendsStop = !1
        }
        return !this.stopped
      }
      forEachNetOut(dd) {
        this.forEachOut(Yd, "net-out", Wd.mb.NetOutPtr, Wd.mb.NetOutLen, Wd.Xb, 0, ((Od, md, Fd, Rd) => {
          const Xd = (0, Wd.me)(md);
          Xd === Wd.$b.Frame ? dd((0, Wd.ie)(md), Fd) : this.crash(Yd, `net-out record at ${Rd} is kind ${Xd}, not a frame`)
        }))
      }
      forEachWorkerOut(dd) {
        this.forEachOut(gd, "worker-out", Wd.mb.WorkerOutPtr, Wd.mb.WorkerOutLen, Wd.Hd, 4, ((Od, md, Fd, Rd) => {
          const Xd = 255 & Od,
            Kd = Xd === Wd.Td.Init ? this.initOf(Fd, Rd) : Fd;
          null !== Kd && dd(Xd, Od >>> 8 & 16777215, Kd)
        }))
      }
      initOf(dd, Od) {
        const md = this.memory().buffer;
        if (dd.byteLength !== Wd.ob) return this.crash(gd, `worker-out Init record at ${Od} is ${dd.byteLength} bytes, not a view`), null;
        const Fd = new DataView(dd.buffer, dd.byteOffset, Wd.ob),
          Rd = Fd.getUint32(0, !0),
          Xd = Fd.getUint32(4, !0);
        return Rd + Xd > md.byteLength ? (this.crash(gd, `worker-out Init record at ${Od} names ${Xd} bytes at ${Rd} outside ${md.byteLength} bytes of memory`), null) : new Uint8Array(md, Rd, Xd)
      }
      forEachOut(dd, Od, md, Fd, Rd, Xd, Kd) {
        if (!this.headerReadable()) return;
        const hd = this.headerView(),
          vd = hd[md],
          Qd = hd[Fd];
        if (0 === Qd) return;
        const td = this.memory().buffer;
        if (vd % 4 !== 0 || vd + Qd > td.byteLength) return void this.crash(dd, `${Od} of ${Qd} bytes at ${vd} outside ${td.byteLength} bytes of memory`);
        const od = new DataView(td, vd, Qd);
        let Nd = 0;
        for (; Nd < Qd;) {
          const md = Nd + Rd,
            Fd = md <= Qd ? od.getUint32(Nd + Xd, !0) : -1;
          if (Fd < 0 || Fd > Qd - md) return void this.crash(dd, `${Od} record at ${Nd} overruns its ${Qd} bytes`);
          if (Kd(od.getUint32(Nd, !0), od.getUint32(Nd + 4, !0), new Uint8Array(td, vd + md, Fd), Nd), this.stopped) return;
          Nd = md + (0, Wd.ve)(Fd)
        }
      }
      forEachEvent(dd) {
        if (this.stopped || null === this.lastHeader) return;
        const Od = this.headerView(),
          md = Od[Wd.mb.EventsPtr],
          Fd = Od[Wd.mb.EventsLen];
        if (0 === Fd) return;
        const Rd = this.memory().buffer;
        if (md % 4 !== 0 || md + Fd > Rd.byteLength) return void this.crash(Pd, `events of ${Fd} bytes at ${md} outside ${Rd.byteLength} bytes of memory`);
        const Xd = new DataView(Rd, md, Fd);
        let Kd = 0;
        for (; Kd < Fd;) {
          const Od = Kd + Wd.W,
            md = Od <= Fd ? Xd.getUint32(Kd, !0) : -1,
            Rd = md >>> 16;
          if (md < 0 || Rd > Fd - Od) return void this.crash(Pd, `event record at ${Kd} overruns its ${Fd} bytes`);
          dd(65535 & md, Xd, Od, Rd), Kd = Od + (0, Wd.ve)(Rd)
        }
      }
      crashOn(dd, Od) {
        Od instanceof Fd.d ? this.crash(Pd, Od.message) : this.crash(dd, Od)
      }
      crash(dd, Od) {
        this.stopped || (this.stopped = !0, this.handlers.onCrash({
          site: dd,
          error: Od,
          header: this.lastHeader
        }))
      }
      headerWord(dd) {
        return this.headerReadable() ? this.headerView()[dd] : 0
      }
      headerReadable() {
        return !this.stopped && (null !== this.lastHeader || this.atSendsStop)
      }
      readLoadCounts(dd) {
        const Od = this.loadCountWords();
        return null !== Od && (dd.chunksReceived = Od[Wd.Kb.ChunksReceived], dd.chunksCancelled = this.headerView()[Wd.mb.ChunksCancelled], dd.chunksStored = Od[Wd.Kb.ChunksStored], dd.jobsSent = Od[Wd.Kb.JobsSent], dd.jobsDone = Od[Wd.Kb.JobsDone], dd.jobsInFlight = Od[Wd.Kb.JobsInFlight], dd.workersLive = Od[Wd.Kb.WorkersLive], dd.workersRetired = Od[Wd.Kb.WorkersRetired], !0)
      }
      readViewQueuedPrograms() {
        var dd, Od;
        const md = null !== (dd = null === (Od = this.loadCountWords()) || void 0 === Od ? void 0 : Od[Wd.Kb.ViewQueuedPrograms]) && void 0 !== dd ? dd : 0;
        return 0 === md ? null : md - 1
      }
      readFirstViewWait(dd, Od) {
        const md = this.loadCountWords();
        return null === md ? null : [md[Wd.Kb.FirstViewLinkMs], md[Wd.Kb.FirstViewTerrainMs], md[Wd.Kb.FirstViewHeldMs], md[Wd.Kb.FirstViewOtherMs], md[Wd.Kb.FirstViewGaps], md[Wd.Kb.FirstViewGapMs], dd, Od]
      }
      loadCountWords() {
        if (this.stopped || null === this.lastHeader) return null;
        const dd = this.core.Rb();
        if (0 === dd) return null;
        const Od = this.memory().buffer;
        return Od !== this.loadCountsBuffer && (this.loadCountsBuffer = Od, this.loadCounts = new Uint32Array(Od, dd, Wd.Fb)), this.loadCounts
      }
      headerView() {
        const dd = this.memory().buffer;
        return dd !== this.headerBuffer && (this.headerBuffer = dd, this.header = new Uint32Array(dd, this.core.IN(), Wd.kb)), this.header
      }
    }
  },
  42741: (dd, Od, md) => {
    md.d(Od, {
      c: () => Xd,
      d: () => Rd
    });
    var Wd = md(5426);
    let Fd = null;

    function Rd(dd) {
      Fd = {
        scanned: !1
      };
      try {
        return dd()
      } finally {
        Fd = null
      }
    }

    function Xd() {
      const dd = Fd;
      if (null === dd) return (0, Wd.e)();
      const Od = (0, Wd.e)(!dd.scanned);
      return dd.scanned = !0, Od
    }
  },
  42807: (dd, Od, md) => {
    md.d(Od, {
      e: () => Wd
    });
    const Wd = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  37851: (dd, Od, md) => {
    function Wd() {
      return md(37857)
    }

    function Fd() {
      return md(37866)
    }

    function Rd(dd) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(dd)
    }
    md.d(Od, {
      b: () => Rd,
      d: () => Wd,
      f: () => Fd
    })
  },
  37857: (dd, Od, md) => {
    dd.exports = md.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  37866: (dd, Od, md) => {
    dd.exports = md.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);