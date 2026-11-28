export const id = 245;
export const ids = [245];
export const modules = {
  37455: (bb, wb, Mb) => {
    function eb(bb, wb, Mb) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(bb, wb).getContext("2d", Mb);
      const eb = document.createElement("canvas");
      return eb.width = bb, eb.height = wb, eb.getContext("2d", Mb)
    }

    function Hb(bb, wb) {
      return bb.getContext("2d", wb)
    }
    Mb.d(wb, {
      d: () => Hb,
      g: () => eb
    })
  },
  42413: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => gb
    });
    const eb = 1 << 20,
      Hb = 1 << 21,
      pb = 1024,
      Vb = 2048;

    function gb(bb, wb, Mb) {
      const gb = bb + eb,
        lb = wb + pb,
        Lb = Mb + eb;
      return gb < 0 || gb >= Hb || Lb < 0 || Lb >= Hb || lb < 0 || lb >= Vb ? -1 : (gb * Hb + Lb) * Vb + lb
    }
  },
  42406: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => eb,
      g: () => Vb,
      i: () => Hb,
      m: () => pb,
      o: () => Ib,
      r: () => Lb,
      s: () => lb,
      w: () => gb
    });
    Mb(4845);
    Mb(42413);

    function eb(bb) {}

    function Hb(bb) {}

    function pb(bb) {}

    function Vb(bb) {}

    function gb(bb) {}

    function lb(bb, wb, Mb) {}

    function Lb(bb) {}

    function Ib(bb) {}
  },
  42454: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => mb,
      f: () => Cb,
      h: () => Pb,
      l: () => Rb,
      p: () => ib,
      t: () => Yb,
      u: () => Zb,
      x: () => sb,
      z: () => Fb,
      B: () => Bb,
      D: () => rb,
      H: () => Gb,
      I: () => Xb,
      J: () => Sb,
      L: () => db,
      P: () => fb,
      R: () => Wb
    });
    var eb = Mb(5678),
      Hb = Mb(42303),
      pb = (Mb(42406), Mb(13));
    class Vb {
      constructor(bb, wb) {
        this.memory = bb, this.access = wb, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.qO = 0, this.u32 = new pb.j(0), this.f32 = new pb.c(0), this.u8 = new pb.b(0), this.dataView = new pb.g(new ArrayBuffer(0)), this.refresh()
      }
      refresh() {
        this.ptr = this.access.ptr(), this.qO = this.access.qO(), this.buffer = (0, pb.G)(this.memory()), this.u32 = new pb.j(this.buffer, this.ptr, this.qO >>> 2), this.f32 = new pb.c(this.buffer, this.ptr, this.qO >>> 2), this.u8 = new pb.b(this.buffer, this.ptr, this.qO), this.dataView = new pb.g(this.buffer, this.ptr, this.qO)
      }
      ensureViews() {
        (0, pb.G)(this.memory()) !== this.buffer && this.refresh()
      }
      get view() {
        return this.ensureViews(), this.dataView
      }
      room(bb) {
        return !!this.fits(bb) || (this.dropped++, !1)
      }
      fits(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.cursor;
        this.ensureViews();
        const Mb = wb + bb;
        return Mb <= this.qO || Mb <= eb.Gc && 0 !== this.access.reserve(Mb) && (this.refresh(), Mb <= this.qO)
      }
      consume(bb) {
        const wb = this.cursor - bb;
        wb > 0 && bb > 0 && (this.ensureViews(), this.u8.copyWithin(0, bb, this.cursor)), this.cursor = wb > 0 ? wb : 0
      }
      writeRecord(bb, wb, Mb, Hb, pb) {
        if (!this.room(eb.pb)) return !1;
        const Vb = this.cursor >>> 2;
        return this.u32[Vb] = 65535 & bb | (65535 & wb) << 16, this.f32[Vb + 1] = Mb, this.f32[Vb + 2] = Hb, this.u32[Vb + 3] = pb >>> 0, this.cursor += eb.pb, !0
      }
      writeOptions(bb, wb) {
        const Mb = wb.byteLength,
          Hb = eb.pb + (0, eb.Be)(Mb);
        if (!this.fits(Hb)) return !1;
        const pb = this.cursor,
          Vb = pb >>> 2;
        this.u32[Vb] = eb.qb.Options, this.u32[Vb + 1] = Mb, this.u32[Vb + 2] = 0, this.u32[Vb + 3] = bb >>> 0;
        const gb = pb + eb.pb;
        return this.u8.set(wb, gb), this.u8.fill(0, gb + Mb, pb + Hb), this.cursor += Hb, !0
      }
      writeWorkerRecord(bb, wb, Mb, Hb, pb, Vb) {
        const gb = Vb.byteLength,
          lb = eb.Ld + (0, eb.Be)(gb);
        if (gb > eb.Jd) return this.dropped++, !1;
        if (!this.room(lb)) return !1;
        const Lb = this.cursor,
          Ib = Lb >>> 2;
        this.u32[Ib] = bb >>> 0, this.u32[Ib + 1] = 65535 & wb | (65535 & Mb) << 16, this.u32[Ib + 2] = Hb >>> 0, this.u32[Ib + 3] = pb >>> 0, this.u32[Ib + 4] = gb;
        const Ob = Lb + eb.Ld;
        return this.u8.set(Vb, Ob), this.u8.fill(0, Ob + gb, Lb + lb), this.cursor += lb, !0
      }
      written() {
        return this.ensureViews(), this.u8.subarray(0, this.cursor)
      }
      writeFrame(bb, wb) {
        return this.writeNet(eb.Wb.Frame, bb, wb)
      }
      writeOpen(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(eb.Wb.Open, bb, lb(wb))
      }
      writeClose(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(eb.Wb.Close, bb, lb(wb))
      }
      writeNet(bb, wb, Mb) {
        const Hb = Mb.byteLength,
          pb = eb.Ub + (0, eb.Be)(Hb);
        if (Hb > eb.Nb) return this.dropped++, !1;
        if (!this.room(pb)) return !1;
        const Vb = this.cursor;
        this.u32[Vb >>> 2] = Hb, this.u32[1 + (Vb >>> 2)] = (0, eb.te)(bb, wb);
        const gb = Vb + eb.Ub;
        return this.u8.set(Mb, gb), this.u8.fill(0, gb + Hb, Vb + pb), this.cursor += pb, !0
      }
      LO(bb, wb, Mb) {
        const Hb = eb.r + (0, eb.Be)(Mb);
        if (!this.room(Hb)) return -1;
        const pb = this.cursor;
        this.u32[pb >>> 2] = 65535 & bb | (65535 & wb) << 16, this.u32[1 + (pb >>> 2)] = Mb;
        const Vb = pb + eb.r;
        return this.u8.fill(0, Vb, pb + Hb), this.cursor += Hb, Vb
      }
      growForCmd(bb) {
        return this.fits(eb.r + (0, eb.Be)(bb), 0)
      }
      writeCmd(bb, wb, Mb) {
        const eb = this.LO(bb, wb, Mb.byteLength);
        return !(eb < 0) && (this.u8.set(Mb, eb), !0)
      }
      copyWritten(bb, wb) {
        return this.ensureViews(), this.u8.slice(bb, bb + wb)
      }
    }
    const gb = new pb.b(0);

    function lb(bb) {
      if (0 === bb) return gb;
      const wb = new pb.b(eb.Rb);
      for (let Mb = 0; Mb < eb.Rb; Mb++) wb[Mb] = bb >>> 8 * Mb & 255;
      return wb
    }
    class Lb {
      constructor(bb, wb) {
        this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new Vb(wb, {
          ptr: () => bb.MU(),
          qO: () => bb.cgb(),
          reserve: wb => bb.qgb(wb)
        }), this.net = new Vb(wb, {
          ptr: () => bb.Ngb(),
          qO: () => bb.Sgb(),
          reserve: wb => bb.agb(wb)
        }), this.worker = new Vb(wb, {
          ptr: () => bb.Ulb(),
          qO: () => bb.Olb(),
          reserve: wb => bb.igb(wb)
        }), this.cmd = new Vb(wb, {
          ptr: () => bb.Bgb(),
          qO: () => bb.Egb(),
          reserve: wb => bb.Fgb(wb)
        })
      }
      reset(bb, wb, Mb) {
        this.input.consume(bb), this.worker.consume(wb), this.cmd.consume(Mb)
      }
    }
    var Ib = Mb(37406),
      Ob = Mb(3479),
      Ub = Mb(5675),
      tb = Mb(42457);
    const Cb = "coreFrame",
      Eb = "fatalStatus",
      Fb = "otherCall",
      Bb = "coreRings",
      sb = "netIn",
      mb = "abi",
      hb = "netOut",
      zb = "workerOut",
      Xb = "worldgenHost",
      xb = "eventWalker",
      jb = "netEvent",
      Kb = "envEvent",
      rb = "sharedTables",
      Rb = "inputAction",
      Db = "frameSends",
      cb = new Set([xb, jb, Kb, Db, Rb, rb]),
      Yb = "wasmMemory",
      Zb = "meshHost";

    function fb(bb, wb) {
      bb.forEachWorkerOut(((Mb, Hb, pb) => {
        if ((0, eb.je)(Mb)) try {
          var Vb;
          null === (Vb = wb.worldgen) || void 0 === Vb || Vb.take(Mb, pb)
        } catch (lb) {
          bb.crash(Xb, lb)
        } else try {
          var gb;
          null === (gb = wb.mesh) || void 0 === gb || gb.take(Mb, Hb, pb)
        } catch (lb) {
          bb.crash(Zb, lb)
        }
      }))
    }
    const Ab = 1048576;

    function Wb(bb, wb) {
      let Mb = !1;
      const eb = () => {
        Mb = !1, wb()
      };
      return () => {
        !Mb && bb.cursor >= Ab && (Mb = !0, queueMicrotask(eb))
      }
    }
    const Jb = new Set([Eb, Fb, Xb, Zb]);

    function Sb(bb) {
      return cb.has(bb.site) ? bb.error instanceof WebAssembly.RuntimeError || (0, Hb.j)(bb.error) : !Jb.has(bb.site) && bb.error instanceof Error
    }
    const Nb = "events",
      vb = [],
      Qb = "debugLog",
      Gb = "terrainTextures",
      qb = "sunShadowTextures",
      ab = "joinWarm",
      ib = {
        Home: 0,
        Play: 1,
        Joined: 2
      },
      ub = new TextDecoder;

    function db(bb, wb) {
      const {
        site: Mb,
        error: Hb,
        header: pb
      } = bb, Vb = pb ? (0, eb.ge)(pb.lastError) : "noFrame", gb = `CORE-${Mb===Eb?Vb:Mb}`, lb = null === Hb || void 0 === Hb ? "" : ` ${(0,Ib.j)(Hb)}`, Lb = {
        site: Mb,
        wasmBuild: wb.wasm,
        clientVersion: wb.client
      };
      return pb && (Lb.status = String(pb.status), Lb.lastError = Vb, Lb.lastErrorCode = String(pb.lastError), Lb.lastErrorDetail = String(pb.lastErrorDetail), Lb.errorCount = String(pb.errorCount), Lb.frameIndex = String(pb.frameIndex), Lb.tickIndex = String(pb.tickIndex)), {
        code: gb,
        message: `core ${Mb}, last error ${Vb};${lb}`,
        details: Lb
      }
    }
    class Pb {
      constructor(bb, wb, Mb) {
        this.core = bb, this.memory = wb, this.handlers = Mb, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.loadCountsBuffer = null, this.loadCounts = new Uint32Array(0), this.unsentUiPrefs = null, this.eventWalker = null, this.netOffsets = [], this.frameEvents = {
          ptr: 0,
          len: 0,
          net: vb,
          netOffsets: this.netOffsets,
          kind: "none"
        }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.atSendsStop = !1, this.rings = new Lb(bb, wb)
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
      framePaces(bb) {
        if (this.stopped || this.drawsHeld) return !1;
        try {
          return this.core.jgb(bb)
        } catch (wb) {
          return this.crash(Cb, wb), !1
        }
      }
      get isStopped() {
        return this.stopped
      }
      frame(bb, wb) {
        var Mb;
        let pb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.stopped) return !1;
        if (!this.writePendingInput()) return !1;
        const {
          input: Vb,
          net: gb,
          worker: lb,
          cmd: Lb
        } = this.rings, Ib = gb.cursor, Ob = wb && !this.drawsHeld;
        let Fb = eb.L.Fatal;
        const Bb = Vb.cursor,
          mb = lb.cursor,
          hb = Lb.cursor;
        let zb, Xb = null;
        const Kb = this.handlers.onSends;
        try {
          const wb = (Ob ? eb.ab.Draws : 0) | (pb ? eb.ab.NetAll : 0) | (Kb ? eb.ab.StopForSends : 0);
          Fb = (0, tb.f)((() => {
            let Mb = this.core.frame(bb, Bb, gb.cursor, mb, wb, hb);
            for (; Mb === eb.nd && Kb;) {
              var Hb;
              if (zb ??= null === (Hb = this.gameHost) || void 0 === Hb ? void 0 : Hb.takeFault(), void 0 === zb && !this.takeSends(Kb)) return eb.L.Fatal;
              Mb = this.core.dF()
            }
            return Mb
          }))
        } catch (ab) {
          Xb = {
            error: ab
          }
        }
        zb ??= null === (Mb = this.gameHost) || void 0 === Mb ? void 0 : Mb.takeFault();
        const rb = this.stopped || null !== Xb || void 0 !== zb;
        this.rings.reset(rb ? Vb.cursor : Bb, rb ? lb.cursor : mb, rb ? Lb.cursor : hb);
        const Rb = null === Xb && void 0 === zb,
          Db = Rb && !this.stopped && Fb === eb.L.Fatal && 0 === this.core.Rt(),
          cb = Rb && !Db ? this.headerView() : null,
          Yb = Db ? {
            ...null !== (Zb = this.lastHeader) && void 0 !== Zb ? Zb : (0, eb.Ce)(new Uint32Array(eb.ib)),
            status: eb.L.Fatal,
            lastError: eb.I.CoreBusy,
            lastErrorDetail: 0
          } : null === cb ? null : (0, eb.Ce)(cb);
        var Zb;
        null !== Yb && (this.lastHeader = Yb);
        const fb = null !== Yb && Fb !== eb.L.Fatal,
          Ab = fb && null !== cb ? cb[eb.kb.NetInKept] : 0,
          Wb = fb && Ab <= Ib && Ab % 4 === 0 ? Ab : null;
        var Jb, Sb;
        null !== Yb && null !== Wb && Fb === eb.L.Errors && (null === (Jb = (Sb = this.handlers).onErrors) || void 0 === Jb || Jb.call(Sb, Yb));
        const Nb = null === Wb ? vb : this.readEvents(Ib);
        if (gb.consume(Ib - (null !== Wb && void 0 !== Wb ? Wb : 0)), this.netKept = null !== Wb && void 0 !== Wb ? Wb : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== Xb) return this.crash(Cb, void 0 === zb || zb instanceof Hb.d ? Xb.error : zb), !1;
        if (void 0 !== zb || null === Yb) return this.crashOn(Cb, zb), !1;
        if (Db) return this.crash(Eb, null), !1;
        const Qb = this.headerView()[eb.kb.FrameDraw];
        if (this.lastFrameKind = (0, Ub.e)(Ob, Qb), Fb === eb.L.Fatal) return this.crash(Eb, null), !1;
        if (null === Wb) return this.crash(sb, `the core kept ${Ab} of ${Ib} net-in bytes`), !1;
        if (this.eventWalker) {
          if (this.stopped) return !1;
          const bb = this.frameEvents,
            wb = this.headerView();
          bb.ptr = wb[eb.kb.EventsPtr], bb.len = wb[eb.kb.EventsLen], bb.net = Nb, bb.kind = this.lastFrameKind;
          try {
            this.eventWalker(bb)
          } catch (ab) {
            return this.crashOn(xb, ab), !1
          }
          return this.handEnvEvents()
        }
        for (const eb of Nb) {
          if (this.stopped) return !1;
          try {
            var Gb, qb;
            null === (Gb = (qb = this.handlers).onNetEvent) || void 0 === Gb || Gb.call(qb, eb)
          } catch (ab) {
            return this.crashOn(jb, ab), !1
          }
        }
        return this.handEnvEvents()
      }
      handEnvEvents() {
        for (const pb of this.graceEvents) {
          if (this.stopped) return !1;
          try {
            var bb, wb;
            null === (bb = (wb = this.handlers).onReconnectGrace) || void 0 === bb || bb.call(wb, pb)
          } catch (Hb) {
            return this.crashOn(jb, Hb), !1
          }
        }
        for (const pb of this.envEvents) {
          if (this.stopped) return !1;
          try {
            var Mb, eb;
            null === (Mb = (eb = this.handlers).onEnvEvent) || void 0 === Mb || Mb.call(eb, pb)
          } catch (Hb) {
            return this.crashOn(Kb, Hb), !1
          }
        }
        return !this.stopped
      }
      setEventWalker(bb) {
        this.eventWalker = bb
      }
      writePendingInput() {
        if (this.stopped) return !1;
        const {
          input: bb
        } = this.rings;
        try {
          const wb = this.unsentUiPrefs;
          wb && bb.writeRecord(eb.qb.UiPrefs, 0, wb.nametagCutDistance, 0, (0, eb.Ge)(wb)) && (this.unsentUiPrefs = null);
          const Mb = this.unsentEnvPrefs;
          Mb && bb.writeRecord(eb.qb.EnvPrefs, (0, eb.ie)(Mb), Mb.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
          const Hb = this.unsentLookPrefs;
          Hb && bb.writeRecord(eb.qb.Sensitivity, 0, Hb.mouse, Hb.touch, (0, Ob.i)(Hb.fovPercent)) && (this.unsentLookPrefs = null);
          let pb = 0;
          for (const {
              aux: eb,
              payload: Vb
            }
            of this.unsentOptions) {
            if (!bb.writeOptions(eb, Vb)) {
              if (bb.cursor > 0) break;
              this.optionsDropped++
            }
            pb++
          }
          pb > 0 && this.unsentOptions.splice(0, pb)
        } catch (wb) {
          return this.crash(Bb, wb), !1
        }
        return !0
      }
      setHoldDraws(bb) {
        this.drawsHeld = bb
      }
      setUiPrefs(bb) {
        this.unsentUiPrefs = {
          ...bb
        }
      }
      setEnvPrefs(bb) {
        this.unsentEnvPrefs = {
          ...bb
        }
      }
      setLookPrefs(bb) {
        this.unsentLookPrefs = {
          ...bb
        }
      }
      queueOptions(bb, wb) {
        return !this.isStopped && (wb.byteLength > eb.bc.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
          aux: bb,
          payload: wb
        }), !0))
      }
      setChunkCap(bb) {
        return this.callCore("setChunkCap", null, (wb => wb.ogb(bb)))
      }
      shedMemory(bb) {
        const wb = this.callCore("shedMemory", null, (wb => wb.elb(bb)));
        return 0 === wb ? null : wb
      }
      releaseLeftGame() {
        this.callCore("releaseLeftGame", void 0, (bb => {
          bb.Ggb()
        }))
      }
      addDistanceInUse() {
        const bb = this.callCore("addDistanceInUse", null, (bb => bb.Igb()));
        return 0 === bb ? null : bb
      }
      setChunkAddDistance(bb, wb) {
        return this.callCore("setChunkAddDistance", !1, (Mb => Mb.ygb(bb, wb)))
      }
      setGameHost(bb) {
        return this.callCore("setGameHost", !1, (wb => (wb.xgb(bb), this.gameHost = bb, !0)))
      }
      setAntiCheatProbes(bb) {
        return this.callCore("setAntiCheatProbes", !1, (wb => wb.Pgb(bb)))
      }
      setAmbientOcclusion(bb) {
        this.callCore("setAmbientOcclusion", void 0, (wb => {
          wb.dgb(bb)
        }))
      }
      setPoseLod(bb) {
        this.callCore("setPoseLod", void 0, (wb => {
          wb.kgb(bb)
        }))
      }
      setDebugLog(bb, wb) {
        this.callCore(Qb, void 0, (Mb => {
          Mb.GF(bb, wb)
        }))
      }
      takeDebugLog(bb) {
        return this.callCore(Qb, [], (wb => wb.qF(bb)))
      }
      setTextureLayers(bb) {
        return this.callCore("setTextureLayers", !1, (wb => wb.Mlb(bb)))
      }
      setBlockColours(bb) {
        let {
          blocks: wb,
          counts: Mb,
          values: eb
        } = bb;
        return this.callCore("setBlockColours", !1, (bb => bb.mHb(wb, Mb, eb)))
      }
      terrainTextureNames() {
        return this.callCore(Gb, [], (bb => bb.Ilb()))
      }
      setTerrainTextures(bb, wb, Mb, eb) {
        return this.callCore(Gb, !1, (Hb => Hb.wlb(bb, Mb, wb, eb)))
      }
      setShaderPack(bb, wb, Mb, eb, Hb, pb) {
        return this.callCore("setShaderPack", !1, (Vb => {
          var gb, lb;
          return null !== (gb = null === (lb = Vb.RHb) || void 0 === lb ? void 0 : lb.call(Vb, bb, wb, Mb, eb, Hb, pb)) && void 0 !== gb && gb
        }))
      }
      warmBeforeJoin(bb, wb) {
        this.callCore(ab, void 0, (Mb => {
          var eb;
          null === (eb = Mb.Xgb) || void 0 === eb || eb.call(Mb, bb, wb)
        }))
      }
      firstViewTerrainCodes() {
        return this.callCore(ab, null, (bb => {
          var wb, Mb;
          return null !== (wb = null === (Mb = bb.zHb) || void 0 === Mb ? void 0 : Mb.call(bb)) && void 0 !== wb ? wb : null
        }))
      }
      sunShadowWantedTextures() {
        return this.callCore(qb, null, (bb => {
          var wb, Mb;
          return null !== (wb = null === (Mb = bb.Hlb) || void 0 === Mb ? void 0 : Mb.call(bb)) && void 0 !== wb ? wb : null
        }))
      }
      setSunShadowTexture(bb, wb, Mb, eb, Hb) {
        this.callCore(qb, void 0, (pb => {
          var Vb;
          null === (Vb = pb.blb) || void 0 === Vb || Vb.call(pb, bb, wb, Mb, eb, Hb)
        }))
      }
      takeSunShadowWarnings() {
        return this.callCore(qb, [], (bb => {
          var wb, Mb;
          return null !== (wb = null === (Mb = bb.Vlb) || void 0 === Mb ? void 0 : Mb.call(bb)) && void 0 !== wb ? wb : []
        }))
      }
      sunShadowsHeld() {
        return this.callCore(qb, null, (bb => {
          var wb, Mb;
          return null !== (wb = null === (Mb = bb.plb) || void 0 === Mb ? void 0 : Mb.call(bb)) && void 0 !== wb ? wb : null
        }))
      }
      callCore(bb, wb, Mb) {
        if (this.stopped) return wb;
        try {
          return Mb(this.core)
        } catch (eb) {
          return this.crash(bb, eb), wb
        }
      }
      readEvents(bb) {
        this.netOffsets.length = 0;
        const wb = this.headerView(),
          Mb = wb[eb.kb.EventsPtr],
          Hb = wb[eb.kb.EventsLen];
        if (this.envEvents.length = 0, this.graceEvents.length = 0, 0 === Hb) return vb;
        const pb = [],
          Vb = this.memory().buffer;
        if (Mb % 4 !== 0 || Mb + Hb > Vb.byteLength) return this.crash(Nb, `events of ${Hb} bytes at ${Mb} outside ${Vb.byteLength} bytes of memory`), vb;
        const gb = new DataView(Vb, Mb, Hb),
          lb = this.rings.net,
          Lb = (wb, Mb) => wb + Mb <= bb ? lb.copyWritten(wb, Mb) : null;
        let Ib = 0;
        for (; Ib < Hb;) {
          const bb = Ib + eb.V,
            wb = bb <= Hb ? gb.getUint32(Ib, !0) : -1,
            lb = wb >>> 16;
          if (wb < 0 || lb > Hb - bb) return this.crash(Nb, `event record at ${Ib} overruns its ${Hb} bytes`), vb;
          const Rb = 65535 & wb,
            Db = wb => gb.getUint32(bb + 4 * wb, !0);
          if (Rb === eb.W.RawMessage) {
            const bb = lb >= eb.Hc.BYTES ? 65535 & Db(1) : -1,
              wb = bb === eb.Hc.STRING_TYPE,
              Mb = lb === (wb ? eb.Hc.STRING_TYPE_BYTES : eb.Hc.BYTES) ? Lb(Db(2), Db(3)) : null,
              Hb = wb && Mb ? Lb(Db(4), Db(5)) : null;
            if (!Mb || wb && !Hb) return this.crash(Nb, `RawMessage at ${Ib} of ${lb} bytes names bytes outside net-in`), vb;
            this.netOffsets.push(Ib), pb.push({
              type: "message",
              conn: Db(0),
              tV: bb,
              payloadKind: Db(1) >>> 16,
              payload: Mb,
              stringType: Hb ? ub.decode(Hb) : null
            })
          } else if (Rb === eb.W.CoreErrors) {
            var Ob, Ub;
            const bb = lb >= 4 ? Db(0) : -1;
            if (bb < 0 || bb > eb.E.PAIRS_MAX || lb !== 4 * (eb.E.FIXED_WORDS + eb.E.PAIR_WORDS * bb)) return this.crash(Nb, `CoreErrors at ${Ib} of ${lb} bytes`), vb;
            const wb = [];
            for (let Mb = 0; Mb < bb; Mb++) wb.push({
              code: Db(1 + 2 * Mb),
              detail: Db(2 + 2 * Mb)
            });
            null === (Ob = (Ub = this.handlers).onCoreErrors) || void 0 === Ob || Ob.call(Ub, wb, Db(1 + 2 * bb))
          } else if (Rb === eb.W.RenderReload) {
            var tb, Cb;
            if (lb !== eb.Vc.BYTES) return this.crash(Nb, `RenderReload at ${Ib} of ${lb} bytes`), vb;
            null === (tb = (Cb = this.handlers).onRenderReload) || void 0 === tb || tb.call(Cb, Db(0), Db(1), Db(2))
          } else if (Rb === eb.W.JoinPreloadEnded) {
            var Eb, Fb;
            if (lb !== eb.wb.BYTES) return this.crash(Nb, `JoinPreloadEnded at ${Ib} of ${lb} bytes`), vb;
            null === (Eb = (Fb = this.handlers).onJoinPreloadEnded) || void 0 === Eb || Eb.call(Fb, {
              chunks: Db(eb.wb.CHUNKS),
              bytes: Db(eb.wb.BYTES_HELD),
              asked: Db(eb.wb.ASKED),
              replaced: Db(eb.wb.REPLACED),
              dropped: Db(eb.wb.DROPPED)
            })
          } else if (Rb === eb.W.Images) {
            var Bb, sb;
            null === (Bb = (sb = this.handlers).onImages) || void 0 === Bb || Bb.call(sb, new Uint8Array(Vb.slice(Mb + bb, Mb + bb + lb)))
          } else if (Rb === eb.W.ModelRequests)
            for (let Mb = 0; Mb < lb >>> 2; Mb++) {
              var mb, hb;
              null === (mb = (hb = this.handlers).onModelRequest) || void 0 === mb || mb.call(hb, Db(Mb))
            } else if (Rb === eb.W.ModelTaken) {
              var zb, Xb;
              if (lb < 4) return this.crash(Nb, `ModelTaken at ${Ib} of ${lb} bytes`), vb;
              const bb = new Uint32Array((lb >>> 2) - 1);
              for (let wb = 0; wb < bb.length; wb++) bb[wb] = Db(1 + wb);
              null === (zb = (Xb = this.handlers).onModelTaken) || void 0 === zb || zb.call(Xb, Db(0), bb)
            } else if (Rb === eb.W.TerrainTexturesWanted) {
            var xb, jb;
            if (0 !== lb) return this.crash(Nb, `TerrainTexturesWanted at ${Ib} of ${lb} bytes`), vb;
            null === (xb = (jb = this.handlers).onTerrainTexturesWanted) || void 0 === xb || xb.call(jb)
          } else if (Rb === eb.W.KeepAliveDue) {
            var Kb, rb;
            if (lb > eb.zb) return this.crash(Nb, `KeepAliveDue at ${Ib} of ${lb} bytes`), vb;
            null === (Kb = (rb = this.handlers).onKeepAlive) || void 0 === Kb || Kb.call(rb, new Uint8Array(Vb, Mb + bb, lb).slice())
          } else if (Rb === eb.W.ConnectionState) {
            if (lb !== eb.u) return this.crash(Nb, `ConnectionState at ${Ib} of ${lb} bytes`), vb;
            this.netOffsets.push(Ib), pb.push({
              type: "connection",
              conn: Db(0),
              phase: Db(1),
              code: 0 | Db(2)
            })
          } else if (Rb === eb.W.EnvLighting || Rb === eb.W.SkyImages) {
            if (lb !== (Rb === eb.W.EnvLighting ? eb.U : eb.sd)) return this.crash(Nb, `event ${Rb} at ${Ib} of ${lb} bytes`), vb;
            this.envEvents.push({
              kind: Rb,
              payload: new Uint8Array(Vb.slice(Mb + bb, Mb + bb + lb))
            })
          } else if (Rb === eb.W.ReconnectGrace) {
            if (lb !== eb.mc) return this.crash(Nb, `ReconnectGrace at ${Ib} of ${lb} bytes`), vb;
            const bb = Db(2);
            this.graceEvents.push({
              conn: Db(0),
              graceMs: Db(1),
              sessionBased: 0 !== (bb & eb.Lc.SessionBased),
              replayOffer: 0 !== (bb & eb.Lc.ReplayOffer)
            })
          }
          Ib = bb + (0, eb.Be)(lb)
        }
        return pb
      }
      takeSends(bb) {
        this.atSendsStop = !0;
        try {
          bb()
        } catch (wb) {
          this.crashOn(Db, wb)
        } finally {
          this.atSendsStop = !1
        }
        return !this.stopped
      }
      forEachNetOut(bb) {
        this.forEachOut(hb, "net-out", eb.kb.NetOutPtr, eb.kb.NetOutLen, eb.Ub, 0, ((wb, Mb, Hb, pb) => {
          const Vb = (0, eb.qe)(Mb);
          Vb === eb.Wb.Frame ? bb((0, eb.ne)(Mb), Hb) : this.crash(hb, `net-out record at ${pb} is kind ${Vb}, not a frame`)
        }))
      }
      forEachWorkerOut(bb) {
        this.forEachOut(zb, "worker-out", eb.kb.WorkerOutPtr, eb.kb.WorkerOutLen, eb.Id, 4, ((wb, Mb, Hb, pb) => {
          const Vb = 255 & wb,
            gb = Vb === eb.Wd.Init ? this.initOf(Hb, pb) : Hb;
          null !== gb && bb(Vb, wb >>> 8 & 16777215, gb)
        }))
      }
      initOf(bb, wb) {
        const Mb = this.memory().buffer;
        if (bb.byteLength !== eb.mb) return this.crash(zb, `worker-out Init record at ${wb} is ${bb.byteLength} bytes, not a view`), null;
        const Hb = new DataView(bb.buffer, bb.byteOffset, eb.mb),
          pb = Hb.getUint32(0, !0),
          Vb = Hb.getUint32(4, !0);
        return pb + Vb > Mb.byteLength ? (this.crash(zb, `worker-out Init record at ${wb} names ${Vb} bytes at ${pb} outside ${Mb.byteLength} bytes of memory`), null) : new Uint8Array(Mb, pb, Vb)
      }
      forEachOut(bb, wb, Mb, Hb, pb, Vb, gb) {
        if (!this.headerReadable()) return;
        const lb = this.headerView(),
          Lb = lb[Mb],
          Ib = lb[Hb];
        if (0 === Ib) return;
        const Ob = this.memory().buffer;
        if (Lb % 4 !== 0 || Lb + Ib > Ob.byteLength) return void this.crash(bb, `${wb} of ${Ib} bytes at ${Lb} outside ${Ob.byteLength} bytes of memory`);
        const Ub = new DataView(Ob, Lb, Ib);
        let tb = 0;
        for (; tb < Ib;) {
          const Mb = tb + pb,
            Hb = Mb <= Ib ? Ub.getUint32(tb + Vb, !0) : -1;
          if (Hb < 0 || Hb > Ib - Mb) return void this.crash(bb, `${wb} record at ${tb} overruns its ${Ib} bytes`);
          if (gb(Ub.getUint32(tb, !0), Ub.getUint32(tb + 4, !0), new Uint8Array(Ob, Lb + Mb, Hb), tb), this.stopped) return;
          tb = Mb + (0, eb.Be)(Hb)
        }
      }
      forEachEvent(bb) {
        if (this.stopped || null === this.lastHeader) return;
        const wb = this.headerView(),
          Mb = wb[eb.kb.EventsPtr],
          Hb = wb[eb.kb.EventsLen];
        if (0 === Hb) return;
        const pb = this.memory().buffer;
        if (Mb % 4 !== 0 || Mb + Hb > pb.byteLength) return void this.crash(Nb, `events of ${Hb} bytes at ${Mb} outside ${pb.byteLength} bytes of memory`);
        const Vb = new DataView(pb, Mb, Hb);
        let gb = 0;
        for (; gb < Hb;) {
          const wb = gb + eb.V,
            Mb = wb <= Hb ? Vb.getUint32(gb, !0) : -1,
            pb = Mb >>> 16;
          if (Mb < 0 || pb > Hb - wb) return void this.crash(Nb, `event record at ${gb} overruns its ${Hb} bytes`);
          bb(65535 & Mb, Vb, wb, pb), gb = wb + (0, eb.Be)(pb)
        }
      }
      crashOn(bb, wb) {
        wb instanceof Hb.d ? this.crash(Nb, wb.message) : this.crash(bb, wb)
      }
      crash(bb, wb) {
        this.stopped || (this.stopped = !0, this.handlers.onCrash({
          site: bb,
          error: wb,
          header: this.lastHeader
        }))
      }
      headerWord(bb) {
        return this.headerReadable() ? this.headerView()[bb] : 0
      }
      headerReadable() {
        return !this.stopped && (null !== this.lastHeader || this.atSendsStop)
      }
      readLoadCounts(bb) {
        const wb = this.loadCountWords();
        return null !== wb && (bb.chunksReceived = wb[eb.Gb.ChunksReceived], bb.chunksCancelled = this.headerView()[eb.kb.ChunksCancelled], bb.chunksStored = wb[eb.Gb.ChunksStored], bb.jobsSent = wb[eb.Gb.JobsSent], bb.jobsDone = wb[eb.Gb.JobsDone], bb.jobsInFlight = wb[eb.Gb.JobsInFlight], bb.workersLive = wb[eb.Gb.WorkersLive], bb.workersRetired = wb[eb.Gb.WorkersRetired], !0)
      }
      readViewQueuedPrograms() {
        var bb, wb;
        const Mb = null !== (bb = null === (wb = this.loadCountWords()) || void 0 === wb ? void 0 : wb[eb.Gb.ViewQueuedPrograms]) && void 0 !== bb ? bb : 0;
        return 0 === Mb ? null : Mb - 1
      }
      readFirstViewWait(bb, wb) {
        const Mb = this.loadCountWords();
        return null === Mb ? null : [Mb[eb.Gb.FirstViewLinkMs], Mb[eb.Gb.FirstViewTerrainMs], Mb[eb.Gb.FirstViewHeldMs], Mb[eb.Gb.FirstViewOtherMs], Mb[eb.Gb.FirstViewGaps], Mb[eb.Gb.FirstViewGapMs], bb, wb]
      }
      loadCountWords() {
        if (this.stopped || null === this.lastHeader) return null;
        const bb = this.core.QF();
        if (0 === bb) return null;
        const wb = this.memory().buffer;
        return wb !== this.loadCountsBuffer && (this.loadCountsBuffer = wb, this.loadCounts = new Uint32Array(wb, bb, eb.Cb)), this.loadCounts
      }
      headerView() {
        const bb = this.memory().buffer;
        return bb !== this.headerBuffer && (this.headerBuffer = bb, this.header = new Uint32Array(bb, this.core.Rt(), eb.ib)), this.header
      }
    }
  },
  42457: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Vb,
      f: () => pb
    });
    var eb = Mb(5587);
    let Hb = null;

    function pb(bb) {
      Hb = {
        scanned: !1
      };
      try {
        return bb()
      } finally {
        Hb = null
      }
    }

    function Vb() {
      const bb = Hb;
      if (null === bb) return (0, eb.g)();
      const wb = (0, eb.g)(!bb.scanned);
      return bb.scanned = !0, wb
    }
  },
  42525: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => eb
    });
    const eb = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  37544: (bb, wb, Mb) => {
    function eb() {
      return Mb(37546)
    }

    function Hb() {
      return Mb(37550)
    }

    function pb(bb) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(bb)
    }
    Mb.d(wb, {
      b: () => pb,
      e: () => eb,
      f: () => Hb
    })
  },
  37546: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  37550: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);